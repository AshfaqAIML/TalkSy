/**
 * Mock-test engine: attempt lifecycle, objective grading, section scoring.
 *
 * IELTS and TOEFL mocks share this machinery but stay genuinely separate
 * experiences: section timing, navigation policy, question types and scoring
 * all come from the pinned TestSpecification, and the scoring models differ
 * (IELTS 0–9 bands vs the TOEFL 1–6 bands introduced 21 Jan 2026).
 *
 * Answer keys never leave this module before submission: the player consumes
 * SafeMock* DTOs with `answer` stripped. Grading happens server-side on
 * submit; the untimed learning mode may additionally reveal one item early
 * (only after the learner has answered it).
 */

import { db } from "@/lib/db";
import { toDto, getActiveSpec } from "./specs";
import { rawToSectionScore } from "./scoring";
import { gradeConstructedResponse } from "./ai-grade";
import { getSectionEstimates } from "./diagnostics";
import { buildRecommendations, weaknessTagsFromAttempt } from "./recommend";
import { sectionNavigation, resolveSectionNavigation } from "./navigation";
import { INTEGRITY_SCORE_NOTE, INTEGRITY_SIMULATION_NOTE, INTEGRITY_UNFINISHED_NOTE } from "./integrity";
import { buildDiagnosticProfile, topicLabel } from "./practice-modes";
import {
  attemptModeLabel,
  isConstructedType,
  isTimedMode,
  questionPayloadSchemas,
  normalizeAttemptMode,
  type AttemptResultDto,
  type ExamKey,
  type QuestionResult,
  type SafeMockTest,
  type ScoringModel,
  type SectionKey,
  type SectionScore,
} from "./types";

// Re-exported for older callers (tests import it from this module).
export { normalizeAttemptMode, attemptModeLabel, isTimedMode };

// ---------------------------------------------------------------------------
// Reading the test (safe projection for the player)
// ---------------------------------------------------------------------------

/**
 * Sanitize a question payload for the client: objective answer keys that
 * live inside the payload (fill-blank answers, complete-words solutions,
 * reconstruction target sentences) are stripped. The server grades from
 * the DB row, never from what the client sends back. Audio scripts are
 * playback material, not answer keys — listening items must play.
 */
function sanitizePayload(type: string, payload: unknown): unknown {
  if (type === "FILL_BLANK" && payload && typeof payload === "object") {
    const p = payload as { context?: string; blanks?: unknown[]; words?: number; audioScript?: string };
    return {
      context: p.context ?? "",
      blanks: (p.blanks ?? []).map(() => ({})), // client only needs the count
      words: p.words,
      ...(p.audioScript ? { audioScript: p.audioScript } : {}),
    };
  }
  if (type === "COMPLETE_WORDS" && payload && typeof payload === "object") {
    const p = payload as { context?: string; words?: Array<{ masked?: string }>; audioScript?: string };
    return {
      context: p.context ?? "",
      words: (p.words ?? []).map((w) => ({ masked: w.masked })),
      ...(p.audioScript ? { audioScript: p.audioScript } : {}),
    };
  }
  if (type === "SENTENCE_RECONSTRUCTION" && payload && typeof payload === "object") {
    const p = payload as { scrambled?: string[]; cue?: string };
    return { scrambled: p.scrambled ?? [], cue: p.cue };
  }
  return payload;
}

export async function getSafeMockTest(mockId: string): Promise<SafeMockTest | null> {
  const mock = await db.mockTest.findUnique({
    where: { id: mockId },
    include: {
      spec: true,
      sections: {
        orderBy: { order: "asc" },
        include: { questions: { orderBy: { order: "asc" } } },
      },
    },
  });
  if (!mock) return null;

  // Navigation policies are read from the PINNED spec, falling forward to
  // the ACTIVE spec when the pin predates the navigation field (history-safe
  // grading, current-format player realism).
  const pinnedSpec = toDto(mock.spec);
  const activeSpec = await getActiveSpec(mock.examKey as ExamKey, mock.variant);

  return {
    id: mock.id,
    examKey: mock.examKey as ExamKey,
    variant: mock.variant,
    title: mock.title,
    kind: mock.kind,
    lengthLabel: mock.lengthLabel,
    description: mock.description,
    spec: {
      name: mock.spec.name,
      version: mock.spec.version,
      effectiveDate: mock.spec.effectiveDate.toISOString(),
    },
    integrityNote: INTEGRITY_SIMULATION_NOTE,
    sections: mock.sections.map((section) => {
      // PROMPT 44: section payload carries audioParts (listening simulations).
      let audioParts: import("./types").MockAudioPart[] | undefined;
      if (section.payload) {
        try {
          const parsed = JSON.parse(section.payload) as { audioParts?: import("./types").MockAudioPart[] };
          if (Array.isArray(parsed.audioParts) && parsed.audioParts.length > 0) {
            audioParts = parsed.audioParts;
          }
        } catch {
          // Malformed section payloads never block playback.
        }
      }
      return {
        id: section.id,
        key: section.key as SectionKey,
        title: section.title,
        directions: section.directions,
        timingSec: section.timingSec,
        order: section.order,
        navigation: resolveSectionNavigation(pinnedSpec, activeSpec, section.key),
        ...(audioParts ? { audioParts } : {}),
        questions: section.questions.map((question) => ({
          id: question.id,
          order: question.order,
          type: question.type,
          stem: question.stem,
          points: question.points,
          difficulty: question.difficulty,
          skills: JSON.parse(question.skills) as string[],
          group: question.groupTag ?? null,
          // The answer key (column AND payload) is stripped here.
          payload: sanitizePayload(question.type, JSON.parse(question.payload)),
        })),
      };
    }),
  };
}

export async function listPublishedMocks(examKey?: ExamKey, variant?: string) {
  const mocks = await db.mockTest.findMany({
    where: {
      status: "published",
      ...(examKey ? { examKey, ...(variant ? { variant } : {}) } : {}),
    },
    orderBy: { createdAt: "asc" },
    include: { spec: { select: { name: true, version: true } } },
  });
  return mocks.map((mock) => ({
    id: mock.id,
    examKey: mock.examKey as ExamKey,
    variant: mock.variant,
    title: mock.title,
    kind: mock.kind,
    lengthLabel: mock.lengthLabel,
    description: mock.description,
    spec: { name: mock.spec.name, version: mock.spec.version },
    sectionCount: 0, // filled by caller if needed
  }));
}

// ---------------------------------------------------------------------------
// Attempt lifecycle
// ---------------------------------------------------------------------------

export async function startAttempt(
  userId: string,
  mockId: string,
  mode?: unknown,
  timed?: unknown,
) {
  const mock = await db.mockTest.findUnique({ where: { id: mockId } });
  if (!mock || mock.status !== "published") return null;
  // One in-progress attempt per mock at a time.
  const existing = await db.mockTestAttempt.findFirst({
    where: { userId, mockTestId: mockId, status: "in_progress" },
  });
  if (existing) return existing;
  const normalized = normalizeAttemptMode(mode);
  const timedFlag = isTimedMode(normalized, typeof timed === "boolean" ? timed : undefined);
  return db.mockTestAttempt.create({
    data: {
      userId,
      mockTestId: mockId,
      specId: mock.specId,
      mode: normalized,
      timed: timedFlag,
    },
  });
}

export async function getAttempt(attemptId: string) {
  return db.mockTestAttempt.findUnique({ where: { id: attemptId } });
}

export type ResponseMeta = {
  /** Mark-for-review flag state for this question. */
  flagged?: boolean;
  /** Seconds spent on this question since the last save. */
  timeDeltaSec?: number;
};

/**
 * Save one answer. `answer === undefined` means "no answer change": the
 * request is a flag/time-only save and MUST NOT overwrite the stored answer
 * (the player flushes time deltas separately from answer edits).
 */
export async function saveResponse(
  attemptId: string,
  questionId: string,
  answer: unknown,
  meta: ResponseMeta = {},
): Promise<boolean> {
  const attempt = await getAttempt(attemptId);
  if (!attempt || attempt.status !== "in_progress") return false;
  const question = await db.mockTestQuestion.findUnique({ where: { id: questionId } });
  if (!question) return false;
  const section = await db.mockTestSection.findUnique({ where: { id: question.sectionId } });
  if (!section || section.mockTestId !== attempt.mockTestId) return false;
  await db.mockTestResponse.upsert({
    where: { attemptId_questionId: { attemptId, questionId } },
    create: {
      attemptId,
      questionId,
      answer: JSON.stringify(answer ?? null),
      ...(meta.flagged !== undefined ? { flagged: meta.flagged } : {}),
      ...(meta.timeDeltaSec ? { timeSpentSec: meta.timeDeltaSec } : {}),
    },
    update: {
      ...(answer !== undefined ? { answer: JSON.stringify(answer ?? null) } : {}),
      ...(meta.flagged !== undefined ? { flagged: meta.flagged } : {}),
      ...(meta.timeDeltaSec ? { timeSpentSec: { increment: meta.timeDeltaSec } } : {}),
    },
  });
  return true;
}

// ---------------------------------------------------------------------------
// Objective grading
// ---------------------------------------------------------------------------

function normalizeText(value: string): string {
  return value.trim().toLowerCase().replace(/[.,!?;:"'()]/g, "").replace(/\s+/g, " ");
}

const NUMBER_WORDS: Record<string, string> = {
  zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5",
  six: "6", seven: "7", eight: "8", nine: "9", ten: "10",
  eleven: "11", twelve: "12", thirteen: "13", fourteen: "14", fifteen: "15",
  sixteen: "16", seventeen: "17", eighteen: "18", nineteen: "19", twenty: "20",
};

function blankMatches(candidate: string, expected: string, alternatives: string[], numbers: boolean): boolean {
  const norm = normalizeText(candidate);
  const pool = [expected, ...alternatives].map(normalizeText);
  if (pool.includes(norm)) return true;
  if (numbers) {
    const asNumber = NUMBER_WORDS[norm] ?? ( /^\d+$/.test(norm) ? norm : null);
    if (asNumber !== null && pool.includes(asNumber)) return true;
    for (const target of pool) {
      if (NUMBER_WORDS[target] === norm || target === asNumber) return true;
    }
  }
  return false;
}

export type ObjectiveGrade = { awarded: number; correct: boolean };

export function gradeObjectiveQuestion(
  type: string,
  payloadJson: string,
  answerJson: string | null,
  responseJson: string | null,
  points: number,
): ObjectiveGrade {
  if (!answerJson) return { awarded: 0, correct: false };
  let answer: unknown;
  let response: unknown;
  try {
    answer = JSON.parse(answerJson);
    response = responseJson ? JSON.parse(responseJson) : null;
  } catch {
    return { awarded: 0, correct: false };
  }
  if (response === null || response === undefined) return { awarded: 0, correct: false };

  switch (type) {
    case "MCQ_SINGLE": {
      const a = answer as { option: number };
      const r = response as { option?: number };
      return r.option === a.option ? { awarded: points, correct: true } : { awarded: 0, correct: false };
    }
    case "MCQ_MULTI": {
      const a = (answer as { options: number[] }).options.slice().sort();
      const r = ((response as { options?: number[] }).options ?? []).slice().sort();
      return a.length === r.length && a.every((value, index) => value === r[index])
        ? { awarded: points, correct: true }
        : { awarded: 0, correct: false };
    }
    case "TFNG": {
      const a = answer as { value: number };
      const r = response as { value?: number };
      return r.value === a.value ? { awarded: points, correct: true } : { awarded: 0, correct: false };
    }
    case "MATCHING": {
      const a = answer as { pairs: Record<string, string> };
      const r = (response as { pairs?: Record<string, string> })?.pairs ?? {};
      const keys = Object.keys(a.pairs);
      const correctCount = keys.filter((key) => r[key] === a.pairs[key]).length;
      if (keys.length === 0) return { awarded: 0, correct: false };
      // Partial credit, rounded to half points.
      const awarded = Math.round((correctCount / keys.length) * points * 2) / 2;
      return { awarded, correct: correctCount === keys.length };
    }
    case "MAP_LABEL": {
      // PROMPT 44: one letter per numbered blank on the plan; blanks are
      // numbered in ascending order, so positions align by index.
      const a = (answer as { labels?: string[] }).labels ?? [];
      const r = (response as { labels?: string[] }).labels ?? [];
      if (a.length === 0) return { awarded: 0, correct: false };
      const norm = (s: string) => s.trim().toUpperCase();
      const correctCount = a.filter((letter, index) => norm(r[index] ?? "") === norm(letter)).length;
      const awarded = Math.round((correctCount / a.length) * points * 2) / 2;
      return { awarded, correct: correctCount === a.length };
    }
    case "FILL_BLANK": {
      const a = answer as { blanks: Array<{ answer: string; alternatives: string[]; numbers: boolean }> };
      const r = (response as { blanks?: string[] }).blanks ?? [];
      let correctCount = 0;
      a.blanks.forEach((blank, index) => {
        const candidate = r[index] ?? "";
        if (blankMatches(candidate, blank.answer, blank.alternatives ?? [], blank.numbers ?? false)) {
          correctCount += 1;
        }
      });
      if (a.blanks.length === 0) return { awarded: 0, correct: false };
      const awarded = Math.round((correctCount / a.blanks.length) * points * 2) / 2;
      return { awarded, correct: correctCount === a.blanks.length };
    }
    case "COMPLETE_WORDS":
    case "SENTENCE_RECONSTRUCTION": {
      const a = answer as { answer?: string; words?: Array<{ answer: string }> };
      const target = a.answer ?? (a.words ?? []).map((w) => w.answer).join(" ");
      const r = response as { text?: string; words?: string[] };
      const given = r.text ?? (r.words ?? []).join(" ");
      return normalizeText(given) === normalizeText(target)
        ? { awarded: points, correct: true }
        : { awarded: 0, correct: false };
    }
    case "DICTATION":
    case "LISTEN_REPEAT": {
      // Both are exact-repeat tasks: the typed transcript (of the audio, or
      // of what the learner said aloud) must match the played text.
      const a = answer as { text?: string };
      const r = response as { text?: string };
      const target = typeof a.text === "string" ? a.text : "";
      const given = typeof r.text === "string" ? r.text : "";
      return normalizeText(given) === normalizeText(target) && target !== ""
        ? { awarded: points, correct: true }
        : { awarded: 0, correct: false };
    }
    default:
      return { awarded: 0, correct: false };
  }
}

/** Types that carry an answer key and are machine-marked. */
export function isObjectiveType(type: string): boolean {
  return type in questionPayloadSchemas && !isConstructedType(type);
}

// ---------------------------------------------------------------------------
// Answer formatting (post-submission review)
// ---------------------------------------------------------------------------

function parseJson(value: string | null | undefined): unknown {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function excerpt(text: string, max = 220): string {
  const trimmed = text.trim();
  return trimmed.length > max ? `${trimmed.slice(0, max)}…` : trimmed;
}

/** The learner's answer for one question, formatted for display (or null). */
export function describeGivenAnswer(
  type: string,
  payloadJson: string,
  responseJson: string | null,
): string | null {
  const payload = (parseJson(payloadJson) ?? {}) as Record<string, unknown>;
  const response = (parseJson(responseJson) ?? {}) as Record<string, unknown>;
  const optionText = (index: unknown): string => {
    const options = (payload.options ?? []) as string[];
    return typeof index === "number" && options[index] !== undefined ? options[index] : "—";
  };
  switch (type) {
    case "MCQ_SINGLE":
      return typeof response.option === "number" ? optionText(response.option) : null;
    case "MCQ_MULTI": {
      const options = (response.options ?? []) as number[];
      return options.length > 0 ? options.map(optionText).filter((t) => t !== "—").join("; ") || null : null;
    }
    case "TFNG": {
      const labels = (payload.labels ?? []) as string[];
      return typeof response.value === "number" && labels[response.value] ? labels[response.value] : null;
    }
    case "MATCHING": {
      const pairs = (response.pairs ?? {}) as Record<string, string>;
      const items = (payload.items ?? []) as Array<{ id: string; text: string }>;
      const options = (payload.options ?? []) as Array<{ id: string; text: string }>;
      if (Object.keys(pairs).length === 0) return null;
      return items
        .map((item) => {
          const chosen = options.find((o) => o.id === pairs[item.id]);
          return chosen ? `${item.text} → ${chosen.text}` : `${item.text} → —`;
        })
        .join("; ");
    }
    case "FILL_BLANK": {
      const blanks = (response.blanks ?? []) as string[];
      if (blanks.length === 0) return null;
      return blanks.map((blank) => (blank.trim() ? blank : "—")).join(" / ");
    }
    case "MAP_LABEL": {
      const labels = (response.labels ?? []) as string[];
      return labels.length > 0 ? labels.map((l) => String(l).toUpperCase() || "—").join(" / ") : null;
    }
    case "COMPLETE_WORDS": {
      const words = (response.words ?? []) as string[];
      return words.length > 0 ? words.map((w) => w || "—").join(" / ") : null;
    }
    case "SENTENCE_RECONSTRUCTION":
    case "DICTATION":
    case "LISTEN_REPEAT":
      return typeof response.text === "string" && response.text.trim() ? response.text : null;
    default:
      // Constructed responses: the text itself (views clamp long passages).
      return typeof response.text === "string" && response.text.trim() ? response.text : null;
  }
}

/** The answer key for one question, formatted for display (or null). */
export function describeCorrectAnswer(type: string, payloadJson: string, answerJson: string | null): string | null {
  const payload = (parseJson(payloadJson) ?? {}) as Record<string, unknown>;
  const answer = (parseJson(answerJson) ?? {}) as Record<string, unknown>;
  const optionText = (index: unknown): string => {
    const options = (payload.options ?? []) as string[];
    return typeof index === "number" && options[index] !== undefined ? options[index] : "—";
  };
  switch (type) {
    case "MCQ_SINGLE":
      return optionText(answer.option);
    case "MCQ_MULTI":
      return ((answer.options ?? []) as number[]).map(optionText).join("; ");
    case "TFNG": {
      const labels = (payload.labels ?? []) as string[];
      return typeof answer.value === "number" && labels[answer.value] ? labels[answer.value] : null;
    }
    case "MATCHING": {
      const pairs = (answer.pairs ?? {}) as Record<string, string>;
      const items = (payload.items ?? []) as Array<{ id: string; text: string }>;
      const options = (payload.options ?? []) as Array<{ id: string; text: string }>;
      if (Object.keys(pairs).length === 0) return null;
      return items
        .map((item) => {
          const expected = options.find((o) => o.id === pairs[item.id]);
          return expected ? `${item.text} → ${expected.text}` : `${item.text} → ?`;
        })
        .join("; ");
    }
    case "FILL_BLANK":
      return ((answer.blanks ?? []) as Array<{ answer: string }>).map((b) => b.answer).join(" / ");
    case "MAP_LABEL": {
      const labels = (answer.labels ?? []) as string[];
      const options = (payload.options ?? []) as Array<{ letter: string; text: string }>;
      if (labels.length === 0) return null;
      return labels
        .map((letter, i) => {
          const match = options.find((o) => o.letter.toUpperCase() === String(letter).toUpperCase());
          return `${i + 1} — ${String(letter).toUpperCase()}${match ? ` (${match.text})` : ""}`;
        })
        .join(" / ");
    }
    case "COMPLETE_WORDS":
      return ((answer.words ?? []) as Array<{ answer: string }>).map((w) => w.answer).join(" / ");
    case "SENTENCE_RECONSTRUCTION":
      return typeof answer.answer === "string" ? answer.answer : null;
    case "DICTATION":
    case "LISTEN_REPEAT":
      return typeof answer.text === "string" ? answer.text : null;
    default:
      return null; // constructed responses are graded by rubric, not a key
  }
}

// ---------------------------------------------------------------------------
// Submission & scoring
// ---------------------------------------------------------------------------

export async function submitAttempt(attemptId: string): Promise<AttemptResultDto | null> {
  const attempt = await getAttempt(attemptId);
  if (!attempt || attempt.status !== "in_progress") return null;
  const mock = await db.mockTest.findUnique({
    where: { id: attempt.mockTestId },
    include: {
      spec: true,
      sections: {
        orderBy: { order: "asc" },
        include: { questions: { orderBy: { order: "asc" } } },
      },
    },
  });
  if (!mock) return null;

  // Score against the PINNED spec (history-safe: later spec versions never
  // reinterpret old attempts).
  const model = toDto(mock.spec).scoringModel;

  const sectionAggregates = new Map<
    SectionKey,
    { raw: number; max: number; constructed: Array<{ questionId: string; awarded: number; count: number }> }
  >();
  const objectiveWrongOrBlank: Array<{ section: SectionKey; skills: string[] }> = [];

  for (const section of mock.sections) {
    sectionAggregates.set(section.key as SectionKey, { raw: 0, max: 0, constructed: [] });
    for (const question of section.questions) {
      const responseRow = await db.mockTestResponse.findUnique({
        where: { attemptId_questionId: { attemptId, questionId: question.id } },
      });
      const skills = JSON.parse(question.skills) as string[];
      if (isObjectiveType(question.type)) {
        const aggregate = sectionAggregates.get(section.key as SectionKey)!;
        aggregate.max += question.points;
        const grade = gradeObjectiveQuestion(
          question.type,
          question.payload,
          question.answer,
          responseRow?.answer ?? null,
          question.points,
        );
        aggregate.raw += grade.awarded;
        if (responseRow) {
          await db.mockTestResponse.update({
            where: { attemptId_questionId: { attemptId, questionId: question.id } },
            data: { autoScore: grade.awarded, status: "answered" },
          });
        }
        if (!grade.correct) {
          objectiveWrongOrBlank.push({ section: section.key as SectionKey, skills });
        }
      } else {
        // Constructed response: AI rubric grading, pending review on failure.
        const payload = JSON.parse(question.payload) as { prompt?: string; situation?: string; rubricKey?: string; minWords?: number; part?: string };
        // Stored answers may be the literal "null" (unanswered item or a
        // legacy clobbered row) — parse defensively.
        const parsedResponse = parseJson(responseRow?.answer ?? null) as { text?: string } | null;
        const responseText = parsedResponse?.text ?? "";
        if (!responseRow || responseText.trim().length === 0) {
          objectiveWrongOrBlank.push({ section: section.key as SectionKey, skills });
          continue;
        }
        const grade = await gradeConstructedResponse({
          examName: mock.spec.name,
          taskKey: payload.rubricKey ?? `${mock.examKey.toLowerCase()}.${section.key}`,
          taskTitle: payload.part ?? section.title,
          prompt: payload.prompt ?? payload.situation ?? question.stem ?? "",
          response: responseText,
          model,
          minWords: payload.minWords,
        });
        if (grade) {
          await db.mockTestResponse.update({
            where: { attemptId_questionId: { attemptId, questionId: question.id } },
            data: {
              rubricScore: grade.score,
              feedback: JSON.stringify({ criteria: grade.criteria, summary: grade.summary }),
              status: "ai_scored",
            },
          });
          const aggregate = sectionAggregates.get(section.key as SectionKey)!;
          aggregate.constructed.push({ questionId: question.id, awarded: grade.score, count: 1 });
        } else {
          await db.mockTestResponse.update({
            where: { attemptId_questionId: { attemptId, questionId: question.id } },
            data: { status: "pending_review" },
          });
          objectiveWrongOrBlank.push({ section: section.key as SectionKey, skills });
        }
      }
    }
  }

  // Section scores: objective raw→band plus constructed-response bands,
  // weighted by evidence availability.
  const sectionInputs: Array<{ section: SectionKey; raw: number; max: number; score: number | null }> = [];
  for (const [section, aggregate] of sectionAggregates) {
    const objectiveScore =
      aggregate.max > 0
        ? rawToSectionScore(model, section, aggregate.raw, aggregate.max)
        : null;
    const constructedScores = aggregate.constructed.map((c) => c.awarded);
    let score: number;
    if (objectiveScore !== null && constructedScores.length > 0) {
      const constructedAvg = constructedScores.reduce((s, v) => s + v, 0) / constructedScores.length;
      const objectiveWeight = aggregate.max / (aggregate.max + constructedScores.length * 4);
      score = objectiveScore * objectiveWeight + constructedAvg * (1 - objectiveWeight);
    } else if (constructedScores.length > 0) {
      score = constructedScores.reduce((s, v) => s + v, 0) / constructedScores.length;
    } else if (objectiveScore !== null) {
      score = objectiveScore;
    } else {
      score = model.minSectionScore;
    }
    sectionInputs.push({ section, raw: aggregate.raw, max: aggregate.max, score: Math.round(score * 2) / 2 });
  }

  const scoredSections: SectionScore[] = sectionInputs.map((input) => ({
    section: input.section,
    raw: input.raw,
    max: input.max,
    score: input.score ?? model.minSectionScore,
  }));
  const blendedTotal =
    Math.round(
      (scoredSections.reduce((s, v) => s + v.score, 0) / Math.max(1, scoredSections.length)) * 2,
    ) / 2;
  const blendedDisplay =
    model.kind === "IELTS_BAND"
      ? `Band ${blendedTotal.toFixed(1)}`
      : `Band ${blendedTotal.toFixed(1)} (≈${Math.round((blendedTotal / 6) * 120)}/120 legacy)`;

  const pending = objectiveWrongOrBlank.length > 0 &&
    // pending review only matters for constructed types that were attempted
    (await db.mockTestResponse.findFirst({
      where: { attemptId, status: "pending_review" },
    })) !== null;
  const strengths = scoredSections
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((s) => `${s.section} — strongest section (band ${s.score.toFixed(1)})`);
  const weaknessTags = weaknessTagsFromAttempt(
    objectiveWrongOrBlank.map((entry) => ({ section: entry.section, correct: false, skillGaps: entry.skills })),
  );
  const weaknesses = Object.entries(weaknessTags)
    .map(([section, tags]) => `${section}: ${tags.slice(0, 3).join(", ")}`)
    .slice(0, 4);

  await db.mockTestAttempt.update({
    where: { id: attemptId },
    data: {
      status: pending ? "submitted" : "scored",
      submittedAt: new Date(),
      scoredAt: pending ? null : new Date(),
      sectionScores: JSON.stringify(scoredSections),
      totalScore: blendedTotal,
      scoreDisplay: blendedDisplay,
      feedback: JSON.stringify({
        strengths,
        weaknesses,
        notes: pending
          ? ["Writing and/or speaking responses are awaiting review — scores shown are provisional."]
          : [INTEGRITY_SCORE_NOTE],
      }),
    },
  });

  return getAttemptResult(attemptId, attempt.userId);
}

export async function getAttemptResult(
  attemptId: string,
  userId: string,
): Promise<AttemptResultDto | null> {
  const attempt = await db.mockTestAttempt.findUnique({
    where: { id: attemptId },
    include: { mockTest: { select: { title: true, examKey: true, variant: true } } },
  });
  if (!attempt || attempt.userId !== userId) return null;
  // Abandoned attempts never expose a result report: the answer key must
  // not be reachable by walking away from a timed simulation.
  if (attempt.status === "abandoned") return null;
  const mock = await db.mockTest.findUnique({
    where: { id: attempt.mockTestId },
    include: { sections: { include: { questions: { orderBy: { order: "asc" } } } }, spec: true },
  });
  if (!mock) return null;

  const timed = isTimedMode(attempt.mode, attempt.timed);
  let unansweredCount = 0;
  const questionResults: QuestionResult[] = [];
  // PROMPT 51: per-skill correctness evidence for the diagnostic profile.
  const skillEvidence: Array<{ skill: string; correct: boolean }> = [];
  // PROMPT 51: tracked seconds per section (time utilisation).
  const trackedBySection = new Map<string, number>();
  const allottedBySection = new Map<string, number>();

  for (const section of mock.sections) {
    allottedBySection.set(section.key, section.timingSec);
    for (const question of section.questions) {
      const responseRow = await db.mockTestResponse.findUnique({
        where: { attemptId_questionId: { attemptId, questionId: question.id } },
      });
      const skills = JSON.parse(question.skills) as string[];
      const responseJson = responseRow?.answer ?? null;
      const constructedFeedback = (() => {
        if (!responseRow?.feedback) return null;
        const parsed = parseJson(responseRow.feedback) as
          | { criteria?: Array<{ name: string; score: number; comment: string }>; summary?: string }
          | null;
        if (!parsed) return null;
        return {
          score: responseRow.rubricScore ?? 0,
          criteria: Array.isArray(parsed.criteria) ? parsed.criteria : [],
          summary: typeof parsed.summary === "string" ? parsed.summary : "",
        };
      })();

      let correct: boolean | null = null;
      let awarded = 0;
      let givenAnswer: string | null = null;
      let correctAnswer: string | null = null;

      if (isObjectiveType(question.type)) {
        const grade = gradeObjectiveQuestion(question.type, question.payload, question.answer, responseJson, question.points);
        correct = grade.correct;
        awarded = grade.awarded;
        givenAnswer = describeGivenAnswer(question.type, question.payload, responseJson);
        correctAnswer = describeCorrectAnswer(question.type, question.payload, question.answer);
        // Diagnostic evidence: every skill tag of every objective item.
        for (const skill of skills) skillEvidence.push({ skill, correct: grade.correct });
      } else {
        awarded = responseRow?.rubricScore ?? 0;
        givenAnswer = describeGivenAnswer(question.type, question.payload, responseJson);
        correctAnswer = null;
        correct = responseRow?.rubricScore != null ? responseRow.rubricScore >= (toDto(mock.spec).scoringModel.maxSectionScore * 0.66) : null;
      }

      if (givenAnswer === null) unansweredCount += 1;
      trackedBySection.set(
        section.key,
        (trackedBySection.get(section.key) ?? 0) + (responseRow?.timeSpentSec ?? 0),
      );

      questionResults.push({
        questionId: question.id,
        order: question.order,
        section: section.key as SectionKey,
        type: question.type,
        correct,
        points: isObjectiveType(question.type) ? question.points : 0,
        awarded,
        skillGaps: correct === true ? [] : skills,
        explanation: question.explanation ?? null,
        givenAnswer,
        correctAnswer,
        timeSpentSec: responseRow?.timeSpentSec ?? 0,
        flagged: responseRow?.flagged ?? false,
        constructedFeedback,
      });
    }
  }

  // Improvement recommendations: section estimates + this attempt's gaps,
  // bridged into the common curriculum (never duplicated content).
  const specDto = toDto(mock.spec);
  const estimates = await getSectionEstimates(userId, mock.examKey as ExamKey);
  const weaknessTags = weaknessTagsFromAttempt(
    questionResults.map((q) => ({ section: q.section, correct: q.correct, skillGaps: q.skillGaps })),
  );
  const recommendations = buildRecommendations({
    spec: specDto,
    estimates: estimates.map((e) => ({ section: e.section, estimated: e.estimated, confidence: e.confidence })),
    weaknessTags,
    difficultSections: [],
    limit: 6,
  });

  let sectionScores: SectionScore[] = [];
  try {
    sectionScores = attempt.sectionScores ? JSON.parse(attempt.sectionScores) : [];
  } catch {
    sectionScores = [];
  }
  let feedback: AttemptResultDto["feedback"] = null;
  try {
    feedback = attempt.feedback ? JSON.parse(attempt.feedback) : null;
  } catch {
    feedback = null;
  }

  // PROMPT 51: task-type performance (objective items only) with the
  // official-format labels from the pinned spec's task-type catalogue.
  const taskLabel = (type: string): string => {
    const task = specDto.taskTypes.find((t) => t.type === type);
    return task?.label ?? type.replace(/_/g, " ").toLowerCase();
  };
  const taskAggregates = new Map<
    string,
    { section: SectionKey; total: number; correct: number; awarded: number; maxPoints: number; timeSec: number }
  >();
  for (const section of mock.sections) {
    for (const question of section.questions) {
      if (!isObjectiveType(question.type)) continue;
      const responseRow = await db.mockTestResponse.findUnique({
        where: { attemptId_questionId: { attemptId, questionId: question.id } },
      });
      const grade = gradeObjectiveQuestion(question.type, question.payload, question.answer, responseRow?.answer ?? null, question.points);
      const entry = taskAggregates.get(question.type) ?? {
        section: section.key as SectionKey,
        total: 0,
        correct: 0,
        awarded: 0,
        maxPoints: 0,
        timeSec: 0,
      };
      entry.total += 1;
      if (grade.correct) entry.correct += 1;
      entry.awarded += grade.awarded;
      entry.maxPoints += question.points;
      entry.timeSec += responseRow?.timeSpentSec ?? 0;
      taskAggregates.set(question.type, entry);
    }
  }
  const taskPerformance: AttemptResultDto["taskPerformance"] = [...taskAggregates.entries()]
    .map(([type, entry]) => ({
      type,
      label: taskLabel(type),
      section: entry.section,
      total: entry.total,
      correct: entry.correct,
      awarded: Math.round(entry.awarded * 2) / 2,
      maxPoints: entry.maxPoints,
      avgTimeSec: entry.total ? Math.round(entry.timeSec / entry.total) : 0,
    }))
    .sort((a, b) => b.total - a.total);

  // PROMPT 51: time utilisation per section against the set's section clocks.
  const timeUtilisation: AttemptResultDto["timeUtilisation"] = [...allottedBySection.entries()].map(
    ([section, allottedSec]) => {
      const trackedSec = trackedBySection.get(section) ?? 0;
      const ratio = allottedSec > 0 ? trackedSec / allottedSec : 0;
      const pace: "under" | "on" | "over" = trackedSec > allottedSec ? "over" : ratio >= 0.75 ? "on" : "under";
      return {
        section: section as SectionKey,
        allottedSec,
        trackedSec,
        utilisation: Math.min(1, Math.round(ratio * 100) / 100),
        pace,
      };
    },
  );

  // PROMPT 51: diagnostic profile for diagnostic attempts only.
  let diagnosticProfile: AttemptResultDto["diagnosticProfile"] = null;
  if (attempt.mode === "diagnostic") {
    const skillStats = new Map<string, { total: number; correct: number }>();
    for (const evidence of skillEvidence) {
      const entry = skillStats.get(evidence.skill) ?? { total: 0, correct: 0 };
      entry.total += 1;
      if (evidence.correct) entry.correct += 1;
      skillStats.set(evidence.skill, entry);
    }
    const skills = [...skillStats.entries()]
      .map(([skill, value]) => ({
        skill,
        label: topicLabel(skill),
        total: value.total,
        correct: value.correct,
        accuracy: value.total ? value.correct / value.total : 0,
      }))
      .sort((a, b) => b.total - a.total);
    diagnosticProfile = buildDiagnosticProfile({
      model: specDto.scoringModel,
      sections: sectionScores.map((s) => ({ section: s.section, raw: s.raw, max: s.max })),
      taskPerformance,
      skills,
    });
  }

  const timeSpentSec = attempt.submittedAt
    ? Math.max(0, Math.round((attempt.submittedAt.getTime() - attempt.startedAt.getTime()) / 1000))
    : null;

  return {
    attemptId,
    mockTitle: mock.title,
    examKey: mock.examKey as ExamKey,
    variant: mock.variant,
    spec: { name: mock.spec.name, version: mock.spec.version },
    status: attempt.status as "in_progress" | "submitted" | "scored",
    mode: attempt.mode,
    modeLabel: attemptModeLabel(attempt.mode),
    timed,
    submittedAt: attempt.submittedAt?.toISOString() ?? null,
    timeSpentSec,
    unansweredCount,
    sectionScores,
    totalScore: attempt.totalScore,
    scoreDisplay: attempt.scoreDisplay,
    integrityNote: INTEGRITY_SCORE_NOTE,
    feedback,
    recommendations,
    questionResults,
    taskPerformance,
    timeUtilisation,
    diagnosticProfile,
  };
}

// ---------------------------------------------------------------------------
// PROMPT 51: recording unfinished attempts
// ---------------------------------------------------------------------------

export type AbandonResult =
  | { ok: true; savedResponses: number; status: "abandoned"; note: string }
  | { ok: false; reason: string };

/**
 * Abandon an in-progress attempt: every saved response is preserved, the
 * attempt is recorded in history as unfinished (never scored), and the
 * learner may not resume it. Deliberate action only — the player asks for
 * confirmation before calling this.
 */
export async function abandonAttempt(attemptId: string, userId: string): Promise<AbandonResult> {
  const attempt = await getAttempt(attemptId);
  if (!attempt || attempt.userId !== userId) return { ok: false, reason: "Attempt not found." };
  if (attempt.status !== "in_progress") {
    return { ok: false, reason: "Only an attempt still in progress can be abandoned." };
  }
  const saved = await db.mockTestResponse.count({ where: { attemptId } });
  await db.mockTestAttempt.update({
    where: { id: attemptId },
    data: {
      status: "abandoned",
      // No scores — an unfinished run is never graded.
      totalScore: null,
      scoreDisplay: null,
      sectionScores: null,
      feedback: JSON.stringify({
        strengths: [],
        weaknesses: [],
        notes: [INTEGRITY_UNFINISHED_NOTE],
      }),
    },
  });
  return { ok: true, savedResponses: saved, status: "abandoned", note: INTEGRITY_UNFINISHED_NOTE };
}

// ---------------------------------------------------------------------------
// Untimed learning mode: reveal one item after it has been answered
// ---------------------------------------------------------------------------

export type RevealResult =
  | { ok: true; verdict: "correct" | "incorrect"; awarded: number; points: number; explanation: string | null; correctAnswer: string | null }
  | { ok: false; reason: string };

/**
 * In untimed learning practice the learner may check a single objective item
 * right after answering it. Never available under exam timing — that would
 * undermine the simulation — and never before an answer exists.
 */
export async function revealAnswer(attemptId: string, userId: string, questionId: string): Promise<RevealResult> {
  const attempt = await getAttempt(attemptId);
  if (!attempt || attempt.userId !== userId) return { ok: false, reason: "Attempt not found." };
  if (attempt.status !== "in_progress") return { ok: false, reason: "This attempt has already been submitted." };
  if (isTimedMode(attempt.mode, attempt.timed)) {
    return { ok: false, reason: "Answers can only be checked in untimed learning practice." };
  }
  const question = await db.mockTestQuestion.findUnique({ where: { id: questionId } });
  if (!question) return { ok: false, reason: "Question not found." };
  const section = await db.mockTestSection.findUnique({ where: { id: question.sectionId } });
  if (!section || section.mockTestId !== attempt.mockTestId) {
    return { ok: false, reason: "Question does not belong to this attempt." };
  }
  if (!isObjectiveType(question.type)) {
    return { ok: false, reason: "Rubric tasks are graded after submission." };
  }
  const responseRow = await db.mockTestResponse.findUnique({
    where: { attemptId_questionId: { attemptId, questionId } },
  });
  if (!responseRow?.answer) return { ok: false, reason: "Answer the question first." };
  const responseText = describeGivenAnswer(question.type, question.payload, responseRow.answer);
  if (responseText === null) return { ok: false, reason: "Answer the question first." };
  const grade = gradeObjectiveQuestion(question.type, question.payload, question.answer, responseRow.answer, question.points);
  return {
    ok: true,
    verdict: grade.correct ? "correct" : "incorrect",
    awarded: grade.awarded,
    points: question.points,
    explanation: question.explanation ?? null,
    correctAnswer: describeCorrectAnswer(question.type, question.payload, question.answer),
  };
}

export { excerpt };
