/**
 * IELTS Listening Masterclass — personal performance engine (PROMPT 44,
 * Part 7).
 *
 * Aggregates every audio-bank attempt (and the learner's Listening mock
 * sections) into one analytics picture: correct/incorrect totals, the
 * spelling-mistake log, missed keywords, distractor errors by family,
 * question-type and per-part accuracy, time spent — and turns those actual
 * mistakes into specific masterclass lesson recommendations.
 *
 * Pure functions over DB rows so the logic is unit-testable; the API route
 * owns auth and data access.
 */

import type { ItemErrorType } from "./service";

// ---------------------------------------------------------------------------
// Row shapes (as read by the API route)
// ---------------------------------------------------------------------------

export type PerformanceAttemptRow = {
  id: string;
  exerciseSlug: string;
  part: number;
  mode: string;
  totalQuestions: number;
  correctCount: number;
  errorCounts: string; // JSON Record<ItemErrorType, number>
  timeSpentSec: number;
  createdAt: Date;
};

export type PerformanceResponseRow = {
  attemptId: string;
  questionId: string;
  questionType: string;
  isCorrect: boolean;
  errorType: string;
  detail: string | null;
  timeSpentSec: number;
  attempt: { exerciseSlug: string; part: number; createdAt: Date };
};

export type MockListeningRow = {
  attemptId: string;
  title: string;
  raw: number;
  max: number;
  score: number;
  submittedAt: Date | null;
};

/** Bank-content enrichment the API route derives from the authored data:
 *  trap families for distractor-tagged responses and the keywords that
 *  carried each wrong answer. */
export type PerformanceEnrichment = {
  /** "attemptId::questionId" → trap family. */
  distractorFamily?: Map<string, string>;
  /** "exerciseSlug::questionId" → keywords. */
  questionKeywords?: Map<string, string[]>;
};

// ---------------------------------------------------------------------------
// The analytics picture
// ---------------------------------------------------------------------------

export type TypeBreakdown = { type: string; total: number; correct: number; accuracy: number };
export type PartBreakdown = { part: 1 | 2 | 3 | 4; total: number; correct: number; accuracy: number };

export type SpellingMistake = { exercise: string; given: string; expected: string };

export type LessonRecommendation = {
  lessonSlug: string;
  lessonTitle: string;
  reason: string;
  severity: "high" | "medium" | "low";
};

export type ListeningPerformanceReport = {
  attempts: number;
  itemsAnswered: number;
  itemsCorrect: number;
  accuracy: number;
  errorCounts: Record<ItemErrorType, number>;
  byType: TypeBreakdown[];
  byPart: PartBreakdown[];
  spellingMistakes: SpellingMistake[];
  distractorFamilies: Record<string, number>;
  missedKeywords: { keyword: string; count: number }[];
  timeSpentSec: number;
  avgSecPerItem: number;
  recentAttempts: {
    id: string;
    exerciseSlug: string;
    part: number;
    mode: string;
    correct: number;
    total: number;
    accuracy: number;
    timeSpentSec: number;
    createdAt: string;
  }[];
  mockSections: {
    attemptId: string;
    title: string;
    raw: number;
    max: number;
    score: number;
    submittedAt: string | null;
  }[];
  recommendations: LessonRecommendation[];
};

// Masterclass lesson map (slug → title) for recommendations.
const LESSONS: Record<string, string> = {
  "ielts-listening-spelling": "Spelling requirements",
  "ielts-listening-instructions": "Question instructions and answer limits",
  "ielts-listening-distractors": "Identifying distractors",
  "ielts-listening-corrections": "Recognising corrections",
  "ielts-listening-numbers-skill": "Understanding numbers",
  "ielts-listening-numbers-dates": "Numbers and dates",
  "ielts-listening-speakers": "Following speaker changes",
  "ielts-listening-specific-info": "Listening for specific information",
  "ielts-listening-time": "Time management",
  "ielts-listening-multiple-choice": "Multiple choice in depth",
  "ielts-listening-matching": "Matching in depth",
  "ielts-listening-maps-diagrams": "Map and diagram labelling in depth",
  "ielts-listening-form-completion": "Form completion in depth",
  "ielts-listening-note-completion": "Note completion in depth",
  "ielts-listening-table-completion": "Table completion in depth",
  "ielts-listening-flowchart-completion": "Flowchart completion in depth",
  "ielts-listening-summary-completion": "Summary completion in depth",
  "ielts-listening-sentence-completion": "Sentence completion in depth",
  "ielts-listening-part1": "Part 1 — Everyday conversations and practical information",
  "ielts-listening-part2": "Part 2 — The individual speaker",
  "ielts-listening-part3": "Part 3 — Educational and training conversations",
  "ielts-listening-part4": "Part 4 — Academic monologues",
  "ielts-listening-overview": "Understanding the Listening test",
};

const TYPE_LESSON: Record<string, string> = {
  "mcq-single": "ielts-listening-multiple-choice",
  "mcq-multi": "ielts-listening-multiple-choice",
  matching: "ielts-listening-matching",
  map: "ielts-listening-maps-diagrams",
  form: "ielts-listening-form-completion",
  note: "ielts-listening-note-completion",
  table: "ielts-listening-table-completion",
  flowchart: "ielts-listening-flowchart-completion",
  summary: "ielts-listening-summary-completion",
  sentence: "ielts-listening-sentence-completion",
  "short-answer": "ielts-listening-specific-info",
};

// ---------------------------------------------------------------------------
// Aggregation
// ---------------------------------------------------------------------------

const EMPTY_COUNTS: Record<ItemErrorType, number> = {
  correct: 0, spelling: 0, "word-limit": 0, distractor: 0, missed: 0, wrong: 0,
};

export function buildPerformanceReport(
  attempts: PerformanceAttemptRow[],
  responses: PerformanceResponseRow[],
  mockSections: MockListeningRow[] = [],
  enrichment: PerformanceEnrichment = {},
): ListeningPerformanceReport {
  const errorCounts: Record<ItemErrorType, number> = { ...EMPTY_COUNTS };
  const typeMap = new Map<string, { total: number; correct: number }>();
  const partMap = new Map<number, { total: number; correct: number }>();
  const spellingMistakes: SpellingMistake[] = [];
  const distractorFamilies: Record<string, number> = {};
  const keywordMisses = new Map<string, number>();

  // Headline numbers come from the per-response rows when available (they
  // carry the fine-grained taxonomy), falling back to attempt rows.
  let itemsAnswered = 0;
  let itemsCorrect = 0;
  let timeSpentSec = 0;

  if (responses.length > 0) {
    // Per-question rows: one row per question; isCorrect is question-level.
    for (const row of responses) {
      const bucket = typeMap.get(row.questionType) ?? { total: 0, correct: 0 };
      const partBucket = partMap.get(row.attempt.part) ?? { total: 0, correct: 0 };
      // Count the question once per type/part.
      bucket.total += 1;
      partBucket.total += 1;
      if (row.isCorrect) {
        bucket.correct += 1;
        partBucket.correct += 1;
      }
      typeMap.set(row.questionType, bucket);
      partMap.set(row.attempt.part, partBucket);
      const et = row.errorType as ItemErrorType;
      if (et in errorCounts) errorCounts[et] += 1;
      if (et === "distractor") {
        const family = enrichment.distractorFamily?.get(`${row.attemptId}::${row.questionId}`);
        if (family) distractorFamilies[family] = (distractorFamilies[family] ?? 0) + 1;
      }
      if (!row.isCorrect) {
        const keywords = enrichment.questionKeywords?.get(`${row.attempt.exerciseSlug}::${row.questionId}`) ?? [];
        for (const keyword of keywords) keywordMisses.set(keyword, (keywordMisses.get(keyword) ?? 0) + 1);
      }
      if ((et === "spelling" || et === "word-limit") && row.detail) {
        for (const pair of row.detail.split(";")) {
          const [given, expected] = pair.split(" → ").map((s) => (s ?? "").trim());
          if (given && expected) spellingMistakes.push({ exercise: row.attempt.exerciseSlug, given, expected });
        }
      }
      itemsAnswered += 1;
      if (row.isCorrect) itemsCorrect += 1;
    }
    // Time from attempts.
    timeSpentSec = attempts.reduce((a, att) => a + att.timeSpentSec, 0);
    // Attempt-level error counts refine the headline taxonomy (per-item).
    for (const att of attempts) {
      try {
        const counts = JSON.parse(att.errorCounts) as Partial<Record<ItemErrorType, number>>;
        for (const key of Object.keys(EMPTY_COUNTS) as ItemErrorType[]) {
          if (key === "correct") continue;
          errorCounts[key] += counts[key] ?? 0;
        }
      } catch {
        // malformed JSON — skip
      }
    }
  } else {
    for (const att of attempts) {
      itemsAnswered += att.totalQuestions;
      itemsCorrect += att.correctCount;
      timeSpentSec += att.timeSpentSec;
      const partBucket = partMap.get(att.part) ?? { total: 0, correct: 0 };
      partBucket.total += att.totalQuestions;
      partBucket.correct += att.correctCount;
      partMap.set(att.part, partBucket);
      try {
        const counts = JSON.parse(att.errorCounts) as Partial<Record<ItemErrorType, number>>;
        for (const key of Object.keys(EMPTY_COUNTS) as ItemErrorType[]) {
          errorCounts[key] += counts[key] ?? 0;
        }
      } catch {
        // skip
      }
    }
    errorCounts.correct = itemsCorrect;
  }

  const byType: TypeBreakdown[] = [...typeMap.entries()]
    .map(([type, v]) => ({ type, total: v.total, correct: v.correct, accuracy: v.total ? v.correct / v.total : 0 }))
    .sort((a, b) => b.total - a.total);
  const byPart: PartBreakdown[] = ([1, 2, 3, 4] as const)
    .map((part) => {
      const v = partMap.get(part) ?? { total: 0, correct: 0 };
      return { part, total: v.total, correct: v.correct, accuracy: v.total ? v.correct / v.total : 0 };
    })
    .filter((p) => p.total > 0);

  const recentAttempts = [...attempts]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 10)
    .map((att) => ({
      id: att.id,
      exerciseSlug: att.exerciseSlug,
      part: att.part,
      mode: att.mode,
      correct: att.correctCount,
      total: att.totalQuestions,
      accuracy: att.totalQuestions ? att.correctCount / att.totalQuestions : 0,
      timeSpentSec: att.timeSpentSec,
      createdAt: att.createdAt.toISOString(),
    }));

  const report: ListeningPerformanceReport = {
    attempts: attempts.length,
    itemsAnswered,
    itemsCorrect,
    accuracy: itemsAnswered ? itemsCorrect / itemsAnswered : 0,
    errorCounts,
    byType,
    byPart,
    spellingMistakes: spellingMistakes.slice(-30),
    distractorFamilies,
    missedKeywords: [...keywordMisses.entries()]
      .map(([keyword, count]) => ({ keyword, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 12),
    timeSpentSec,
    avgSecPerItem: itemsAnswered ? Math.round(timeSpentSec / itemsAnswered) : 0,
    recentAttempts,
    mockSections: mockSections
      .filter((m) => m.max > 0)
      .sort((a, b) => (b.submittedAt?.getTime() ?? 0) - (a.submittedAt?.getTime() ?? 0))
      .slice(0, 8)
      .map((m) => ({
        attemptId: m.attemptId,
        title: m.title,
        raw: m.raw,
        max: m.max,
        score: m.score,
        submittedAt: m.submittedAt ? m.submittedAt.toISOString() : null,
      })),
    recommendations: [],
  };

  report.recommendations = recommend(report);
  return report;
}

// ---------------------------------------------------------------------------
// Mistake-driven lesson recommendations
// ---------------------------------------------------------------------------

export function recommend(report: ListeningPerformanceReport): LessonRecommendation[] {
  const out: LessonRecommendation[] = [];
  const push = (slug: string, reason: string, severity: LessonRecommendation["severity"]) => {
    if (out.some((r) => r.lessonSlug === slug)) return;
    out.push({ lessonSlug: slug, lessonTitle: LESSONS[slug] ?? slug, reason, severity });
  };

  const answered = report.itemsAnswered;
  if (answered === 0) return out;

  const spelling = report.errorCounts.spelling ?? 0;
  const wordLimit = report.errorCounts["word-limit"] ?? 0;
  const distractor = report.errorCounts.distractor ?? 0;
  const missed = report.errorCounts.missed ?? 0;

  if (spelling >= 3 || (spelling > 0 && spelling / answered >= 0.15)) {
    push("ielts-listening-spelling", `${spelling} answers were right but misspelled — each one scored zero.`, "high");
  }
  if (wordLimit >= 2) {
    push("ielts-listening-instructions", `${wordLimit} answers broke their word limit — the rubric is a scoring rule.`, "high");
  }
  if (distractor >= 3 || (distractor > 0 && distractor / answered >= 0.2)) {
    push("ielts-listening-distractors", `${distractor} designed lures were taken — hear the whole claim before committing.`, "high");
  }
  const families = Object.entries(report.distractorFamilies).sort((a, b) => b[1] - a[1]);
  for (const [family, count] of families) {
    if (count < 2) continue;
    if (family === "correction") {
      push("ielts-listening-corrections", `${count} correction traps — the second value is the answer, not the first.`, "medium");
    } else if (family === "similar-sound" || family === "number-form") {
      push("ielts-listening-numbers-skill", `${count} number traps — teen vs ty and dictated figures need ear training.`, "medium");
    } else if (family === "attribution") {
      push("ielts-listening-speakers", `${count} attribution traps — track who says what with the speaker ledger.`, "medium");
    }
  }

  for (const t of report.byType) {
    if (t.total >= 4 && t.accuracy < 0.6) {
      const slug = TYPE_LESSON[t.type];
      if (slug) {
        push(slug, `${t.type} accuracy is ${Math.round(t.accuracy * 100)}% across ${t.total} questions.`, "medium");
      }
    }
  }
  for (const p of report.byPart) {
    if (p.total >= 6 && p.accuracy < 0.6) {
      push(`ielts-listening-part${p.part}`, `Part ${p.part} accuracy is ${Math.round(p.accuracy * 100)}% — the part-specific chapter rebuilds it.`, "medium");
    }
  }
  if (missed >= 3) {
    push("ielts-listening-time", `${missed} items were left blank — pacing and the recovery protocol protect these marks.`, "medium");
  }
  if (answered >= 10 && report.accuracy >= 0.8) {
    push("ielts-listening-overview", `${Math.round(report.accuracy * 100)}% across ${answered} items — move up a difficulty tier or sit a full simulation.`, "low");
  }

  const severityRank = { high: 0, medium: 1, low: 2 } as const;
  return out.sort((a, b) => severityRank[a.severity] - severityRank[b.severity]).slice(0, 8);
}
