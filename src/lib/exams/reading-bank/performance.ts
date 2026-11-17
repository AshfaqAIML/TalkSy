/**
 * IELTS Reading Masterclass — the performance engine (PROMPT 45, Part E).
 *
 * Aggregates re-graded attempts into one report: accuracy, completion
 * time, question-type weaknesses, vocabulary difficulties, inference
 * mistakes, unanswered items, simulation history — and the lesson
 * recommendations derived from the learner's actual mistakes.
 *
 * The API route re-grades each stored attempt from its stored answers
 * (grading is pure and deterministic), so every aggregate below is exact
 * at item level rather than approximated from group-level rows.
 */

import type { ReadingQuestionType } from "@/data/exams/ielts/reading-bank/types";
import { READING_QUESTION_TYPE_LABELS } from "@/data/exams/ielts/reading-bank/types";
import type { GradedReadingExercise, ReadingItemErrorType } from "./service";

// ---------------------------------------------------------------------------
// Row shapes (from Prisma)
// ---------------------------------------------------------------------------

export type PerformanceAttemptRow = {
  id: string;
  exerciseSlug: string;
  variant: string;
  section: number;
  mode: string;
  simRunId: string | null;
  simSlug: string | null;
  simPart: number | null;
  totalQuestions: number;
  correctCount: number;
  timeSpentSec: number;
  createdAt: Date;
};

export type ReGradedAttempt = {
  attempt: PerformanceAttemptRow;
  graded: GradedReadingExercise;
};

// ---------------------------------------------------------------------------
// The report
// ---------------------------------------------------------------------------

export type LessonRecommendation = {
  lessonSlug: string;
  lessonTitle: string;
  reason: string;
  severity: "high" | "medium" | "low";
};

export type ReadingPerformanceReport = {
  attempts: number;
  itemsAnswered: number;
  itemsCorrect: number;
  accuracy: number;
  errorCounts: Record<ReadingItemErrorType, number>;
  byType: { type: string; label: string; total: number; correct: number; accuracy: number }[];
  bySection: { section: number; total: number; correct: number; accuracy: number }[];
  byVariant: { variant: string; total: number; correct: number; accuracy: number }[];
  trapFamilies: Record<string, number>;
  /** Vocabulary difficulties: glossary words behind wrongly answered items. */
  vocabularyDifficulties: { word: string; count: number }[];
  inferenceMistakes: { exercise: string; given: string; expected: string }[];
  spellingMistakes: { exercise: string; given: string; expected: string }[];
  unanswered: number;
  timeSpentSec: number;
  avgSecPerItem: number;
  simHistory: {
    runId: string;
    simSlug: string;
    variant: string;
    passages: number;
    itemsAnswered: number;
    itemsCorrect: number;
    accuracy: number;
    timeSpentSec: number;
    finishedAt: string | null;
  }[];
  recentAttempts: {
    id: string;
    exerciseSlug: string;
    variant: string;
    section: number;
    mode: string;
    totalQuestions: number;
    correctCount: number;
    timeSpentSec: number;
    createdAt: string;
  }[];
  recommendations: LessonRecommendation[];
};

// ---------------------------------------------------------------------------
// Masterclass lesson map (slug → title) — mirrors the authored I-M3A course.
// A contract test walks the authored chapters and asserts every slug below
// resolves to a real lesson under its real title (no raw-slug fallback).
// ---------------------------------------------------------------------------

export const READING_LESSONS: Record<string, string> = {
  "ielts-areading-test": "Understanding the reading test",
  "ielts-areading-time": "Reading time management",
  "ielts-areading-skimming": "Skimming",
  "ielts-areading-scanning": "Scanning",
  "ielts-areading-intensive": "Intensive reading",
  "ielts-areading-main-ideas": "Identifying main ideas",
  "ielts-areading-supporting-details": "Locating supporting details",
  "ielts-areading-paraphrase": "Understanding paraphrasing",
  "ielts-areading-vocabulary": "Vocabulary in context",
  "ielts-areading-inference": "Inference",
  "ielts-areading-opinion": "The writer's opinion",
  "ielts-areading-purpose": "The writer's purpose",
  "ielts-areading-tone": "Tone",
  "ielts-areading-reference": "Reference words",
  "ielts-areading-paragraphs": "Paragraph organisation",
  "ielts-areading-multiple-choice": "Multiple choice",
  "ielts-areading-true-false-not-given": "True / False / Not Given",
  "ielts-areading-yes-no-not-given": "Yes / No / Not Given",
  "ielts-areading-matching-headings": "Matching headings",
  "ielts-areading-matching-information": "Matching information",
  "ielts-areading-matching-features": "Matching features",
  "ielts-areading-matching-endings": "Matching sentence endings",
  "ielts-areading-sentence-completion": "Sentence completion",
  "ielts-areading-summary-completion": "Summary completion",
  "ielts-areading-note-completion": "Note completion",
  "ielts-areading-table-completion": "Table completion",
  "ielts-areading-flowchart-completion": "Flowchart completion",
  "ielts-areading-diagram-labelling": "Diagram labelling",
};

const TYPE_LESSON: Record<ReadingQuestionType, string> = {
  "multiple-choice": "ielts-areading-multiple-choice",
  "multiple-choice-multi": "ielts-areading-multiple-choice",
  "true-false-not-given": "ielts-areading-true-false-not-given",
  "yes-no-not-given": "ielts-areading-yes-no-not-given",
  "matching-headings": "ielts-areading-matching-headings",
  "matching-information": "ielts-areading-matching-information",
  "matching-features": "ielts-areading-matching-features",
  "matching-sentence-endings": "ielts-areading-matching-endings",
  "sentence-completion": "ielts-areading-sentence-completion",
  "summary-completion": "ielts-areading-summary-completion",
  "note-completion": "ielts-areading-note-completion",
  "table-completion": "ielts-areading-table-completion",
  "flowchart-completion": "ielts-areading-flowchart-completion",
  "diagram-labelling": "ielts-areading-diagram-labelling",
};

const TRAP_FAMILY_LESSON: Record<string, string> = {
  boundary: "ielts-areading-true-false-not-given",
  "extreme-language": "ielts-areading-paraphrase",
  "mention-lure": "ielts-areading-paraphrase",
  "paraphrase-gap": "ielts-areading-paraphrase",
  attribution: "ielts-areading-matching-features",
  order: "ielts-areading-flowchart-completion",
};

// ---------------------------------------------------------------------------
// Aggregation
// ---------------------------------------------------------------------------

const EMPTY_COUNTS: Record<ReadingItemErrorType, number> = {
  correct: 0, spelling: 0, "word-limit": 0, trap: 0, inference: 0, vocabulary: 0, missed: 0, wrong: 0,
};

export function buildReadingPerformanceReport(rows: ReGradedAttempt[]): ReadingPerformanceReport {
  const errorCounts: Record<ReadingItemErrorType, number> = { ...EMPTY_COUNTS };
  const typeMap = new Map<string, { total: number; correct: number }>();
  const sectionMap = new Map<number, { total: number; correct: number }>();
  const variantMap = new Map<string, { total: number; correct: number }>();
  const trapFamilies: Record<string, number> = {};
  const vocabMap = new Map<string, number>();
  const inferenceMistakes: ReadingPerformanceReport["inferenceMistakes"] = [];
  const spellingMistakes: ReadingPerformanceReport["spellingMistakes"] = [];
  let itemsAnswered = 0;
  let itemsCorrect = 0;
  let unanswered = 0;
  let timeSpentSec = 0;

  const simRuns = new Map<string, { simSlug: string; variant: string; passages: Set<string>; answered: number; correct: number; time: number; lastAt: Date | null }>();

  for (const { attempt, graded } of rows) {
    timeSpentSec += attempt.timeSpentSec;
    for (const [key, value] of Object.entries(graded.errorCounts)) {
      errorCounts[key as ReadingItemErrorType] += value;
    }
    for (const q of graded.questions) {
      const t = typeMap.get(q.type) ?? { total: 0, correct: 0 };
      const s = sectionMap.get(attempt.section) ?? { total: 0, correct: 0 };
      const v = variantMap.get(attempt.variant) ?? { total: 0, correct: 0 };
      for (const item of q.items) {
        itemsAnswered += 1;
        t.total += 1;
        s.total += 1;
        v.total += 1;
        if (item.correct) {
          itemsCorrect += 1;
          t.correct += 1;
          s.correct += 1;
          v.correct += 1;
        }
        if (item.errorType === "missed") unanswered += 1;
        if (item.errorType === "inference") {
          inferenceMistakes.push({ exercise: attempt.exerciseSlug, given: item.given, expected: item.expected });
        }
        if (item.errorType === "spelling") {
          spellingMistakes.push({ exercise: attempt.exerciseSlug, given: item.given, expected: item.expected });
        }
        if (item.errorType === "trap" && item.trapFamily) {
          trapFamilies[item.trapFamily] = (trapFamilies[item.trapFamily] ?? 0) + 1;
        }
        if (!item.correct) {
          for (const word of item.glossaryWords) {
            vocabMap.set(word, (vocabMap.get(word) ?? 0) + 1);
          }
        }
      }
      typeMap.set(q.type, t);
      sectionMap.set(attempt.section, s);
      variantMap.set(attempt.variant, v);
    }

    if (attempt.simRunId) {
      const run = simRuns.get(attempt.simRunId) ?? {
        simSlug: attempt.simSlug ?? "",
        variant: attempt.variant,
        passages: new Set<string>(),
        answered: 0,
        correct: 0,
        time: 0,
        lastAt: null,
      };
      run.passages.add(attempt.exerciseSlug);
      run.answered += graded.totalItems;
      run.correct += graded.correctItems;
      run.time += attempt.timeSpentSec;
      if (!run.lastAt || attempt.createdAt > run.lastAt) run.lastAt = attempt.createdAt;
      simRuns.set(attempt.simRunId, run);
    }
  }

  const report: ReadingPerformanceReport = {
    attempts: rows.length,
    itemsAnswered,
    itemsCorrect,
    accuracy: itemsAnswered ? itemsCorrect / itemsAnswered : 0,
    errorCounts,
    byType: [...typeMap.entries()]
      .map(([type, v]) => ({ type, label: READING_QUESTION_TYPE_LABELS[type as ReadingQuestionType] ?? type, total: v.total, correct: v.correct, accuracy: v.total ? v.correct / v.total : 0 }))
      .sort((a, b) => b.total - a.total),
    bySection: ([1, 2, 3] as const)
      .map((section) => {
        const v = sectionMap.get(section) ?? { total: 0, correct: 0 };
        return { section, total: v.total, correct: v.correct, accuracy: v.total ? v.correct / v.total : 0 };
      })
      .filter((s) => s.total > 0),
    byVariant: [...variantMap.entries()].map(([variant, v]) => ({ variant, total: v.total, correct: v.correct, accuracy: v.total ? v.correct / v.total : 0 })),
    trapFamilies,
    vocabularyDifficulties: [...vocabMap.entries()]
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 12),
    inferenceMistakes: inferenceMistakes.slice(0, 12),
    spellingMistakes: spellingMistakes.slice(0, 12),
    unanswered,
    timeSpentSec,
    avgSecPerItem: itemsAnswered ? Math.round(timeSpentSec / itemsAnswered) : 0,
    simHistory: [...simRuns.entries()]
      .map(([runId, run]) => ({
        runId,
        simSlug: run.simSlug,
        variant: run.variant,
        passages: run.passages.size,
        itemsAnswered: run.answered,
        itemsCorrect: run.correct,
        accuracy: run.answered ? run.correct / run.answered : 0,
        timeSpentSec: run.time,
        finishedAt: run.lastAt ? run.lastAt.toISOString() : null,
      }))
      .sort((a, b) => (b.finishedAt ?? "").localeCompare(a.finishedAt ?? "")),
    recentAttempts: rows
      .slice(0, 8)
      .map(({ attempt }) => ({
        id: attempt.id,
        exerciseSlug: attempt.exerciseSlug,
        variant: attempt.variant,
        section: attempt.section,
        mode: attempt.mode,
        totalQuestions: attempt.totalQuestions,
        correctCount: attempt.correctCount,
        timeSpentSec: attempt.timeSpentSec,
        createdAt: attempt.createdAt.toISOString(),
      })),
    recommendations: [],
  };

  report.recommendations = recommendReading(report);
  return report;
}

// ---------------------------------------------------------------------------
// Mistake-driven lesson recommendations (Part E: "track and recommend")
// ---------------------------------------------------------------------------

export function recommendReading(report: ReadingPerformanceReport): LessonRecommendation[] {
  const out: LessonRecommendation[] = [];
  const push = (slug: string, reason: string, severity: LessonRecommendation["severity"]) => {
    if (out.some((r) => r.lessonSlug === slug)) return;
    out.push({ lessonSlug: slug, lessonTitle: READING_LESSONS[slug] ?? slug, reason, severity });
  };

  const answered = report.itemsAnswered;
  if (answered === 0) return out;

  const spelling = report.errorCounts.spelling ?? 0;
  const wordLimit = report.errorCounts["word-limit"] ?? 0;
  const inference = report.errorCounts.inference ?? 0;
  const missed = report.errorCounts.missed ?? 0;
  const vocabWords = report.vocabularyDifficulties.length;

  if (spelling >= 3 || (spelling > 0 && spelling / answered >= 0.15)) {
    push("ielts-areading-vocabulary", `${spelling} answers had the right word misspelled — reading answers are copied, and a copied word misspelled scores zero.`, "high");
  }
  if (wordLimit >= 2) {
    push("ielts-areading-sentence-completion", `${wordLimit} answers broke their word limit — the limit is a scoring rule, and every completion lesson drills it.`, "high");
  }
  const families = Object.entries(report.trapFamilies).sort((a, b) => b[1] - a[1]);
  for (const [family, count] of families) {
    if (count < 2) continue;
    const lesson = TRAP_FAMILY_LESSON[family];
    if (lesson) {
      push(lesson, `${count} designed ${family.replace(/-/g, " ")} traps were taken — the technique lesson disarms exactly this family.`, "medium");
    }
  }
  if (inference >= 2) {
    push("ielts-areading-inference", `${inference} answers over- or under-read what the passage implies — the inference lesson rebuilds the one-step discipline.`, "medium");
  }
  if (vocabWords >= 3) {
    push("ielts-areading-vocabulary", `${vocabWords} passage words keep appearing behind your wrong answers — the context-vocabulary method attacks exactly these.`, "medium");
  }
  for (const t of report.byType) {
    if (t.total >= 4 && t.accuracy < 0.6) {
      const slug = TYPE_LESSON[t.type as ReadingQuestionType];
      if (slug) {
        push(slug, `${t.label} accuracy is ${Math.round(t.accuracy * 100)}% across ${t.total} questions.`, "medium");
      }
    }
  }
  if (missed >= 3) {
    push("ielts-areading-time", `${missed} items were left blank — the never-leave-a-blank protocol and the sweep recover these marks.`, "medium");
  }
  if (answered >= 8 && report.avgSecPerItem >= 100) {
    push("ielts-areading-time", `Averaging ${report.avgSecPerItem}s per item — the budget lesson sets the pace that leaves checking time.`, "medium");
  }
  if (answered >= 10 && report.accuracy >= 0.8) {
    push("ielts-areading-test", `${Math.round(report.accuracy * 100)}% across ${answered} items — move up a difficulty tier or sit a full simulation.`, "low");
  }

  const severityRank = { high: 0, medium: 1, low: 2 } as const;
  return out.sort((a, b) => severityRank[a.severity] - severityRank[b.severity]).slice(0, 8);
}
