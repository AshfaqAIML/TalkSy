/**
 * IELTS Speaking Masterclass — practice bank service (PROMPT 47, Parts 6–8).
 *
 * Serves safe projections (model answers, guidance, analyses, requirement
 * keyword sets and vocabulary banks never leave the server before
 * submission), evaluates submissions through the deterministic engine plus
 * the AI commentary seam, stores versioned attempts, and returns the full
 * review payload after submission: the report, the revealed teaching
 * content, and the attempt history. AUDIO NEVER LEAVES THE BROWSER — the
 * server receives only the learner-supplied transcript and the spoken
 * duration.
 */

import { db } from "@/lib/db";
import { speakingItemBySlug } from "@/data/exams/ielts/speaking-bank";
import type { SpeakingBankItem } from "@/data/exams/ielts/speaking-bank/types";
import { speakingItemPart } from "@/data/exams/ielts/speaking-bank/types";
import { evaluateSpeaking, type SpeakingEvaluation } from "./evaluate";

// ---------------------------------------------------------------------------
// Safe projection (client shape) — the prompts travel, the teaching does not
// ---------------------------------------------------------------------------

export type SafeSpeakingItem = {
  slug: string;
  title: string;
  kind: SpeakingBankItem["kind"];
  part: 1 | 2 | 3;
  topicLabel: string;
  family: string;
  difficulty: number;
  difficultyLabel: string;
  proficiency: string;
  skill: string;
  skillLabel: string;
  /** Part 1 / Part 3: the examiner's questions. Part 2: the cue card. */
  framing?: string;
  questions?: { question: string }[];
  card?: {
    task: string;
    situation: string;
    bullets: string[];
    extension: string;
    prepSec: number;
    speakMinSec: number;
    speakMaxSec: number;
    roundingQuestions?: string[];
    vocabularyHints?: string[];
  };
  source: string;
};

import {
  SPEAKING_PART1_TOPIC_LABELS,
  SPEAKING_CUE_FAMILY_LABELS,
  SPEAKING_DIFFICULTY_LABELS,
  SPEAKING_SKILL_LABELS,
  type SpeakingCueCard,
  type SpeakingPart1Set,
  type SpeakingPart3Set,
  type SpeakingPracticeCueCard,
} from "@/data/exams/ielts/speaking-bank/types";

export function toSafeSpeakingItem(item: SpeakingBankItem): SafeSpeakingItem {
  const base = {
    slug: item.slug,
    title: item.title,
    kind: item.kind,
    part: speakingItemPart(item),
    difficulty: item.difficulty,
    difficultyLabel: SPEAKING_DIFFICULTY_LABELS[item.difficulty],
    proficiency: item.proficiency,
    skill: item.skill,
    skillLabel: SPEAKING_SKILL_LABELS[item.skill],
    source: item.source,
  };

  if (item.kind === "part1") {
    const set = item as SpeakingPart1Set;
    return {
      ...base,
      topicLabel: SPEAKING_PART1_TOPIC_LABELS[set.topic],
      family: set.topic,
      framing: set.framing,
      questions: set.questions.map((q) => ({ question: q.question })),
    };
  }
  if (item.kind === "part3") {
    const set = item as SpeakingPart3Set;
    return {
      ...base,
      topicLabel: set.theme,
      family: set.theme,
      framing: set.progression,
      questions: set.questions.map((q) => ({ question: q.question })),
    };
  }
  const card = item as SpeakingCueCard | SpeakingPracticeCueCard;
  return {
    ...base,
    topicLabel: SPEAKING_CUE_FAMILY_LABELS[card.family],
    family: card.family,
    card: {
      task: card.task,
      situation: card.situation,
      bullets: [...card.bullets],
      extension: card.extension,
      prepSec: card.prepSec,
      speakMinSec: card.speakMinSec,
      speakMaxSec: card.speakMaxSec,
      ...(card.kind === "practice-cue-card"
        ? { roundingQuestions: [...card.roundingQuestions], vocabularyHints: [...card.vocabularyHints] }
        : { roundingQuestions: [...card.followUp.roundingQuestions] }),
    },
  };
}

export async function getSafeSpeakingItemBySlug(slug: string): Promise<SafeSpeakingItem | null> {
  const item = speakingItemBySlug(slug);
  return item ? toSafeSpeakingItem(item) : null;
}

// ---------------------------------------------------------------------------
// Attempts
// ---------------------------------------------------------------------------

export type SpeakingAttemptDto = {
  id: string;
  version: number;
  part: number;
  kind: string;
  family: string;
  mode: string;
  wordCount: number;
  durationSec: number;
  wpm: number;
  overall: number;
  criteriaScores: Record<string, number>;
  aiAvailable: boolean;
  createdAt: string;
};

function toAttemptDto(row: {
  id: string; version: number; part: number; kind: string; family: string; mode: string;
  wordCount: number; durationSec: number; wpm: number; overall: number; criteria: string;
  aiAvailable: boolean; createdAt: Date;
}): SpeakingAttemptDto {
  let criteriaScores: Record<string, number> = {};
  try {
    const parsed = JSON.parse(row.criteria) as Record<string, { score?: number }>;
    criteriaScores = Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, typeof v?.score === "number" ? v.score : 0]));
  } catch {
    criteriaScores = {};
  }
  return {
    id: row.id,
    version: row.version,
    part: row.part,
    kind: row.kind,
    family: row.family,
    mode: row.mode,
    wordCount: row.wordCount,
    durationSec: row.durationSec,
    wpm: row.wpm,
    overall: row.overall,
    criteriaScores,
    aiAvailable: row.aiAvailable,
    createdAt: row.createdAt.toISOString(),
  };
}

export async function listSpeakingAttempts(userId: string, itemSlug: string): Promise<SpeakingAttemptDto[]> {
  const rows = await db.speakingBankAttempt.findMany({
    where: { userId, itemSlug },
    orderBy: { version: "asc" },
  });
  return rows.map(toAttemptDto);
}

// ---------------------------------------------------------------------------
// Submission + evaluation + attempt recording
// ---------------------------------------------------------------------------

export type SpeakingSubmissionInput = {
  mode: "simulation" | "practice";
  answers: string[];
  durationSec: number;
};

export type SpeakingSubmissionResult = {
  attemptId: string;
  version: number;
  evaluation: SpeakingEvaluation;
  attempt: SpeakingAttemptDto;
  history: SpeakingAttemptDto[];
  /** The teaching payload — revealed only now (after submission). */
  review: {
    requirements: { description: string; met: boolean }[];
    guidance?: string[];
    modelAnswers?: string[];
    planningNotes?: SpeakingCueCard["planningNotes"];
    sampleResponse?: SpeakingCueCard["sampleResponse"];
    responseAnalysis?: SpeakingCueCard["responseAnalysis"];
    alternativeApproaches?: SpeakingCueCard["alternativeApproaches"];
    followUp?: SpeakingCueCard["followUp"];
    weakImproved?: { weak: string; improved: string; modelAnswer: string }[];
    perQuestion?: { question: string; level?: string; modelAnswer: string; analysis: string }[];
    vocabulary: { word: string; partOfSpeech: string; meaning: string; example: string }[];
  };
};

export async function submitSpeakingItem(
  userId: string,
  item: SpeakingBankItem,
  input: SpeakingSubmissionInput,
): Promise<SpeakingSubmissionResult> {
  const evaluation = await evaluateSpeaking(item, {
    answers: input.answers,
    durationSec: input.durationSec,
  });

  const last = await db.speakingBankAttempt.findFirst({
    where: { userId, itemSlug: item.slug },
    orderBy: { version: "desc" },
  });

  const criteriaPayload = Object.fromEntries(
    evaluation.criteria.map((c) => [c.key, { score: c.score, name: c.name, feedback: c.feedback, evidence: c.evidence }]),
  );

  const row = await db.speakingBankAttempt.create({
    data: {
      userId,
      itemSlug: item.slug,
      part: speakingItemPart(item),
      kind: item.kind,
      family: item.kind === "part1" ? (item as SpeakingPart1Set).topic : item.kind === "part3" ? (item as SpeakingPart3Set).theme : (item as SpeakingCueCard).family,
      mode: input.mode === "practice" ? "practice" : "simulation",
      version: (last?.version ?? 0) + 1,
      transcript: input.answers.join("\n\n"),
      wordCount: evaluation.metrics.wordCount,
      durationSec: Math.max(0, Math.min(7200, Math.round(input.durationSec || 0))),
      wpm: Math.round(evaluation.metrics.wpm),
      overall: evaluation.overall,
      criteria: JSON.stringify(criteriaPayload),
      measured: JSON.stringify(evaluation.metrics),
      extras: JSON.stringify(evaluation.extras),
      aiAvailable: evaluation.aiAvailable,
      ...(evaluation.aiCommentary ? { aiCommentary: JSON.stringify(evaluation.aiCommentary) } : {}),
    },
  });

  const history = await listSpeakingAttempts(userId, item.slug);
  return {
    attemptId: row.id,
    version: row.version,
    evaluation,
    attempt: toAttemptDto(row),
    history,
    review: buildReviewPayload(item, evaluation),
  };
}

function buildReviewPayload(item: SpeakingBankItem, evaluation: SpeakingEvaluation): SpeakingSubmissionResult["review"] {
  if (item.kind === "part1") {
    const set = item as SpeakingPart1Set;
    return {
      requirements: set.questions.map((q, i) => ({
        description: `Question ${i + 1} — ${q.question}`,
        met: evaluation.metrics.perAnswer[i]?.covered ?? false,
      })),
      guidance: set.questions.map((q, i) => `Q${i + 1}: ${q.guidance}`),
      modelAnswers: set.questions.map((q) => q.modelAnswer),
      weakImproved: set.questions.map((q) => ({ weak: q.weak, improved: q.improved, modelAnswer: q.modelAnswer })),
      vocabulary: set.vocabulary,
    };
  }
  if (item.kind === "cue-card") {
    const card = item as SpeakingCueCard;
    return {
      requirements: card.requirements.map((r) => ({ description: r.description, met: !evaluation.metrics.missedRequirements.includes(r.description) })),
      planningNotes: card.planningNotes,
      sampleResponse: card.sampleResponse,
      responseAnalysis: card.responseAnalysis,
      alternativeApproaches: card.alternativeApproaches,
      followUp: card.followUp,
      vocabulary: card.vocabularySuggestions,
    };
  }
  if (item.kind === "part3") {
    const set = item as SpeakingPart3Set;
    return {
      requirements: set.questions.map((q, i) => ({
        description: `Question ${i + 1} (${q.level}) — ${q.question}`,
        met: evaluation.metrics.perAnswer[i]?.covered ?? false,
      })),
      perQuestion: set.questions.map((q) => ({
        question: q.question,
        level: q.level,
        modelAnswer: q.modelAnswer,
        analysis: q.analysis,
      })),
      vocabulary: set.vocabulary,
    };
  }
  // Practice cue cards: hints + rounding questions only.
  return {
    requirements: [...item.bullets, item.extension].map((p) => ({
      description: p,
      met: !evaluation.metrics.missedRequirements.includes(`The prompt “${p}” is not visibly covered`),
    })),
    vocabulary: item.vocabularyHints.map((h) => ({ word: h, partOfSpeech: "", meaning: "", example: "" })),
  };
}

// ---------------------------------------------------------------------------
// Reopen a past attempt (response history)
// ---------------------------------------------------------------------------

export async function reopenSpeakingAttempt(
  userId: string,
  attemptId: string,
): Promise<{
  attempt: SpeakingAttemptDto & { transcript: string; itemSlug: string };
  evaluation: SpeakingEvaluation;
} | null> {
  const row = await db.speakingBankAttempt.findFirst({ where: { id: attemptId, userId } });
  if (!row) return null;

  let criteriaRaw: Record<string, { score?: number; name?: string; feedback?: unknown; evidence?: unknown }> = {};
  let measuredRaw: Record<string, unknown> = {};
  let extrasRaw: Record<string, unknown> = {};
  let aiCommentary: SpeakingEvaluation["aiCommentary"] = null;
  try {
    criteriaRaw = JSON.parse(row.criteria);
    measuredRaw = JSON.parse(row.measured);
    extrasRaw = JSON.parse(row.extras);
    aiCommentary = row.aiCommentary ? (JSON.parse(row.aiCommentary) as SpeakingEvaluation["aiCommentary"]) : null;
  } catch {
    criteriaRaw = {};
  }

  const { SPEAKING_CRITERIA } = await import("@/data/exams/ielts/speaking-bank/types");
  const { SPEAKING_DISCLAIMERS } = await import("./evaluate");
  const evaluation: SpeakingEvaluation = {
    criteria: SPEAKING_CRITERIA.map((def) => {
      const raw = criteriaRaw[def.key] ?? {};
      return {
        key: def.key,
        name: def.name,
        score: typeof raw.score === "number" ? raw.score : 0,
        maxScore: 9,
        unit: "band",
        descriptor: def.descriptor,
        feedback: Array.isArray(raw.feedback) ? (raw.feedback as SpeakingEvaluation["criteria"][number]["feedback"]) : [],
        evidence: Array.isArray(raw.evidence) ? (raw.evidence as SpeakingEvaluation["criteria"][number]["evidence"]) : [],
      };
    }),
    overall: row.overall,
    overallLabel: `Estimated band ${row.overall.toFixed(1)} (educational estimate)`,
    metrics: measuredRaw as unknown as SpeakingEvaluation["metrics"],
    strengths: [],
    improvements: [],
    extras: extrasRaw as unknown as SpeakingEvaluation["extras"],
    disclaimers: SPEAKING_DISCLAIMERS,
    status: "complete",
    aiAvailable: row.aiAvailable,
    aiCommentary,
  };

  return {
    attempt: {
      id: row.id,
      version: row.version,
      part: row.part,
      kind: row.kind,
      family: row.family,
      mode: row.mode,
      wordCount: row.wordCount,
      durationSec: row.durationSec,
      wpm: row.wpm,
      overall: row.overall,
      criteriaScores: Object.fromEntries(Object.entries(criteriaRaw).map(([k, v]) => [k, typeof v?.score === "number" ? v.score : 0])),
      aiAvailable: row.aiAvailable,
      createdAt: row.createdAt.toISOString(),
      transcript: row.transcript,
      itemSlug: row.itemSlug,
    },
    evaluation,
  };
}
