/**
 * TOEFL Reading and Listening Practice Library — service layer (PROMPT 49).
 *
 * Serves safe projections (answer keys, lures, evidence, keywords, trap
 * notes, grammar observations and vocabulary definitions never leave the
 * server before submission), grades submitted exercises with the library
 * error taxonomy, records attempts, and returns per-item review material.
 *
 * Error taxonomy (per answerable item):
 *   correct   the keyed answer was given
 *   spelling  right word, misspelled — zero marks, tracked (words items)
 *   trap      a designed lure was taken (lure option or lure completion)
 *   inference wrong on an item whose tested skill is inference
 *   vocabulary wrong on an item whose tested skill is vocabulary
 *   missed    nothing was entered / selected
 *   wrong     anything else
 */

import { db } from "@/lib/db";
import {
  TOEFL_READING_BANK,
  readingExerciseBySlug,
  TOEFL_READING_TASK_LABELS,
  TOEFL_DIFFICULTY_LABELS,
  type McqQuestion,
  type ToeflReadingExercise,
  type WordsQuestion,
} from "@/data/exams/toefl/reading-bank";
import { primarySkill, type LibrarySkill } from "@/data/exams/toefl/library-skills";

// ---------------------------------------------------------------------------
// Safe projections
// ---------------------------------------------------------------------------

export type SafeReadingQuestion = {
  no: number;
  kind: "words" | "mcq";
  skills: string[];
  stem?: string;
  options?: string[];
};

export type SafeReadingExercise = {
  slug: string;
  title: string;
  taskType: ToeflReadingExercise["taskType"];
  taskLabel: string;
  topic: string;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  intro: string;
  passage: string | { heading: string; paragraphs: string[] } | { heading: string; paragraphs: string[] }[];
  questions: SafeReadingQuestion[];
  questionCount: number;
  vocabularyCount: number;
  source: string;
};

function projectQuestion(q: WordsQuestion | McqQuestion): SafeReadingQuestion {
  const base: SafeReadingQuestion = { no: q.no, kind: q.kind, skills: q.meta.skills };
  if (q.kind === "mcq") return { ...base, stem: q.stem, options: [...q.options] };
  return base;
}

export function toSafeReadingExercise(ex: ToeflReadingExercise): SafeReadingExercise {
  return {
    slug: ex.slug,
    title: ex.title,
    taskType: ex.taskType,
    taskLabel: TOEFL_READING_TASK_LABELS[ex.taskType],
    topic: ex.taskType === "complete-words" ? ex.topic : ex.taskType === "daily-life" ? ex.textKind : ex.subject,
    difficulty: ex.difficulty,
    difficultyLabel: TOEFL_DIFFICULTY_LABELS[ex.difficulty],
    estimatedMinutes: ex.estimatedMinutes,
    intro:
      ex.taskType === "complete-words"
        ? "Read the passage and complete the masked words using context, grammar and word formation."
        : ex.taskType === "daily-life"
          ? `Read the text${ex.blocks.length > 1 ? "s" : ""} below and answer the questions.`
          : "Read the academic passage and answer the questions.",
    passage:
      ex.taskType === "complete-words"
        ? ex.passage
        : ex.taskType === "daily-life"
          ? ex.blocks.map((b) => ({ heading: b.heading, paragraphs: [...b.paragraphs] }))
          : { heading: ex.passage.heading, paragraphs: [...ex.passage.paragraphs] },
    questions: ex.questions.map(projectQuestion),
    questionCount: ex.questions.length,
    vocabularyCount: ex.vocabulary.length,
    source: ex.source,
  };
}

// ---------------------------------------------------------------------------
// Submissions and grading
// ---------------------------------------------------------------------------

export type ReadingSubmission = {
  mode: "exam" | "practice";
  /** question no → answer. Words items: the typed completion; MCQ: option index. */
  answers: Record<string, string | number>;
  timeSpentSec: number;
  perQuestionSec?: Record<string, number>;
};

export type ReadingItemErrorType = "correct" | "spelling" | "trap" | "inference" | "vocabulary" | "missed" | "wrong";

export type GradedReadingItem = {
  no: number;
  kind: "words" | "mcq";
  skill: LibrarySkill;
  given: string;
  expected: string;
  errorType: ReadingItemErrorType;
  correct: boolean;
  explanation: string;
  grammarNote: string | null;
  evidence: { block: number; paragraph: number; quote: string }[];
  trapNote: string | null;
  whyWrong: string[];
};

export type GradedReadingExercise = {
  slug: string;
  totalItems: number;
  correctItems: number;
  errorCounts: Record<ReadingItemErrorType, number>;
  skillCounts: Record<string, { total: number; correct: number }>;
  items: GradedReadingItem[];
};

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    const curr = [i];
    for (let j = 1; j <= b.length; j += 1) {
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = curr;
  }
  return prev[b.length];
}

function classifyObjective(skills: LibrarySkill[]): Exclude<ReadingItemErrorType, "correct" | "missed"> {
  if (skills.includes("inference")) return "inference";
  if (skills.includes("vocabulary")) return "vocabulary";
  return "wrong";
}

export function gradeReadingExercise(ex: ToeflReadingExercise, submission: ReadingSubmission): GradedReadingExercise {
  const errorCounts: Record<ReadingItemErrorType, number> = { correct: 0, spelling: 0, trap: 0, inference: 0, vocabulary: 0, missed: 0, wrong: 0 };
  const skillCounts: Record<string, { total: number; correct: number }> = {};
  const items: GradedReadingItem[] = [];
  let correctItems = 0;

  for (const q of ex.questions) {
    const skill = primarySkill(q.meta.skills);
    const bucket = (skillCounts[skill] ??= { total: 0, correct: 0 });
    bucket.total += 1;
    const raw = submission.answers[String(q.no)];
    let given: string;
    let expected: string;
    let errorType: ReadingItemErrorType;
    let correct = false;

    if (q.kind === "words") {
      given = typeof raw === "string" ? raw.trim() : "";
      expected = q.answer;
      const forms = [q.answer, ...(q.alternatives ?? [])];
      if (!given) {
        errorType = "missed";
        given = "—";
      } else if (forms.some((f) => norm(f) === norm(given))) {
        errorType = "correct";
        correct = true;
      } else if ((q.lure ?? []).some((l) => norm(l) === norm(given))) {
        errorType = "trap";
      } else {
        const best = forms.map((f) => levenshtein(norm(f), norm(given))).reduce((a, c) => Math.min(a, c), Infinity);
        errorType = given.length >= 4 && best <= 2 ? "spelling" : classifyObjective(q.meta.skills);
      }
    } else {
      const pick = typeof raw === "number" ? raw : -1;
      given = pick >= 0 ? String.fromCharCode(65 + pick) : "—";
      expected = String.fromCharCode(65 + q.correct);
      if (pick === -1) {
        errorType = "missed";
      } else if (pick === q.correct) {
        errorType = "correct";
        correct = true;
      } else if (q.lure !== undefined && pick === q.lure) {
        errorType = "trap";
      } else {
        errorType = classifyObjective(q.meta.skills);
      }
    }

    if (correct) { correctItems += 1; bucket.correct += 1; }
    errorCounts[errorType] += 1;
    items.push({
      no: q.no,
      kind: q.kind,
      skill,
      given,
      expected,
      errorType,
      correct,
      explanation: q.meta.explanation,
      grammarNote: q.kind === "words" ? q.meta.grammarNote : null,
      evidence: q.kind === "mcq" ? q.meta.evidence : [],
      trapNote: q.kind === "mcq" ? (q.meta.trap?.note ?? null) : null,
      whyWrong: q.kind === "mcq" ? (q.meta.whyWrong ?? []) : [],
    });
  }

  return { slug: ex.slug, totalItems: items.length, correctItems, errorCounts, skillCounts, items };
}

// ---------------------------------------------------------------------------
// Attempt recording
// ---------------------------------------------------------------------------

export async function recordReadingAttempt(
  userId: string,
  ex: ToeflReadingExercise,
  submission: ReadingSubmission,
  graded: GradedReadingExercise,
): Promise<string> {
  const attempt = await db.toeflReadingBankAttempt.create({
    data: {
      userId,
      exerciseSlug: ex.slug,
      taskType: ex.taskType,
      difficulty: ex.difficulty,
      mode: submission.mode === "practice" ? "practice" : "exam",
      totalQuestions: graded.totalItems,
      correctCount: graded.correctItems,
      skillCounts: JSON.stringify(graded.skillCounts),
      errorCounts: JSON.stringify(graded.errorCounts),
      timeSpentSec: Math.max(0, Math.min(7200, Math.round(submission.timeSpentSec || 0))),
    },
  });
  await db.toeflReadingBankResponse.createMany({
    data: graded.items.map((it) => ({
      attemptId: attempt.id,
      questionId: String(it.no),
      skill: it.skill,
      answer: JSON.stringify(submission.answers[String(it.no)] ?? null),
      isCorrect: it.correct,
      errorType: it.errorType,
      detail: it.correct ? null : `${it.given} → ${it.expected}`,
      timeSpentSec: Math.max(0, Math.min(1800, Math.round(submission.perQuestionSec?.[String(it.no)] ?? 0))),
    })),
  });
  return attempt.id;
}

export async function getSafeReadingExerciseBySlug(slug: string): Promise<SafeReadingExercise | null> {
  const ex = readingExerciseBySlug(slug);
  return ex ? toSafeReadingExercise(ex) : null;
}

/** Library index metadata for the public listing (no keys, no scripts). */
export function readingLibraryIndex() {
  return TOEFL_READING_BANK.map((ex) => ({
    slug: ex.slug,
    title: ex.title,
    taskType: ex.taskType,
    taskLabel: TOEFL_READING_TASK_LABELS[ex.taskType],
    topic: ex.taskType === "complete-words" ? ex.topic : ex.taskType === "daily-life" ? ex.textKind : ex.subject,
    difficulty: ex.difficulty,
    difficultyLabel: TOEFL_DIFFICULTY_LABELS[ex.difficulty],
    estimatedMinutes: ex.estimatedMinutes,
    questionCount: ex.questions.length,
    source: ex.source,
  }));
}
