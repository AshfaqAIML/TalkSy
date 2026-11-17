/**
 * TOEFL Writing Practice Library — service layer (PROMPT 50).
 *
 * Serves safe projections (answer keys, model responses and the whole
 * teaching kit never leave the server before submission), grades Build a
 * Sentence submissions with the focus-based error taxonomy, records
 * attempts, manages email/discussion drafts, and returns the revealed
 * teaching kit for post-submission review.
 *
 * Sentence error taxonomy (per item):
 *   correct      the keyed sentence (or an accepted alternative) was given
 *   word-order   wrong on a word-order item (segment order / placement)
 *   grammar      wrong on a grammar item
 *   clause       wrong on a clause-structure item
 *   completeness wrong on a completeness item
 *   punctuation  right words, wrong marks (punctuate items)
 *   spelling     within edit distance 2 of the key (typo tolerance)
 *   missed       nothing was entered
 *   wrong        anything else
 */

import { db } from "@/lib/db";
import {
  TOEFL_WRITING_BANK,
  writingExerciseBySlug,
  TOEFL_WRITING_TASK_LABELS,
  TOEFL_SENTENCE_FOCUS_LABELS,
  TOEFL_DIFFICULTY_LABELS,
  type ToeflSentenceExercise,
  type ToeflSentenceItem,
  type ToeflEmailTask,
  type ToeflDiscussionTask,
  type ToeflWritingExercise,
} from "@/data/exams/toefl/writing-bank";

// ---------------------------------------------------------------------------
// Safe projections
// ---------------------------------------------------------------------------

export type SafeSentenceItem = {
  no: number;
  kind: ToeflSentenceItem["kind"];
  kindLabel: string;
  prompt: string;
  segments?: string[];
  source?: string;
};

export type SafeWritingKitCounts = {
  usefulExpressions: number;
  grammarObservations: number;
  commonMistakes: number;
  vocabulary: number;
};

export type SafeSentenceExercise = {
  slug: string;
  title: string;
  taskType: "build-sentence";
  taskLabel: string;
  focus: ToeflSentenceExercise["focus"];
  focusLabel: string;
  focusDescription: string;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  instructions: string;
  taskRequirements: string[];
  timeGuidance: string;
  items: SafeSentenceItem[];
  itemCount: number;
  kit: SafeWritingKitCounts;
  source: string;
};

export type SafeEmailTask = {
  slug: string;
  title: string;
  taskType: "write-email";
  taskLabel: string;
  purpose: ToeflEmailTask["purpose"];
  recipient: string;
  scenario: string;
  keyPoints: string[];
  wordBand: { min: number; max: number };
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  instructions: string;
  taskRequirements: string[];
  timeGuidance: string;
  kit: SafeWritingKitCounts;
  source: string;
};

export type SafeDiscussionTask = {
  slug: string;
  title: string;
  taskType: "academic-discussion";
  taskLabel: string;
  discipline: string;
  professorPrompt: string;
  studentPosts: { name: string; post: string }[];
  keyPoints: string[];
  wordBand: { min: number; max: number };
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  instructions: string;
  taskRequirements: string[];
  timeGuidance: string;
  kit: SafeWritingKitCounts;
  source: string;
};

export type SafeWritingExercise = SafeSentenceExercise | SafeEmailTask | SafeDiscussionTask;

const ITEM_KIND_LABELS: Record<ToeflSentenceItem["kind"], string> = {
  reorder: "Put in order",
  correct: "Correct the error",
  combine: "Combine the clauses",
  complete: "Complete the sentence",
  punctuate: "Add punctuation",
};

function kitCounts(ex: ToeflWritingExercise): SafeWritingKitCounts {
  return {
    usefulExpressions: ex.usefulExpressions.length,
    grammarObservations: ex.grammarObservations.length,
    commonMistakes: ex.commonMistakes.length,
    vocabulary: ex.taskType === "build-sentence" ? 0 : ex.vocabulary.length,
  };
}

export function toSafeWritingExercise(ex: ToeflWritingExercise): SafeWritingExercise {
  const base = {
    slug: ex.slug,
    title: ex.title,
    taskType: ex.taskType,
    taskLabel: TOEFL_WRITING_TASK_LABELS[ex.taskType],
    difficulty: ex.difficulty,
    difficultyLabel: TOEFL_DIFFICULTY_LABELS[ex.difficulty],
    estimatedMinutes: ex.estimatedMinutes,
    instructions: ex.instructions,
    taskRequirements: [...ex.taskRequirements],
    timeGuidance: ex.timeGuidance,
    kit: kitCounts(ex),
    source: ex.source,
  };
  if (ex.taskType === "build-sentence") {
    return {
      ...base,
      taskType: "build-sentence",
      focus: ex.focus,
      focusLabel: TOEFL_SENTENCE_FOCUS_LABELS[ex.focus],
      focusDescription: `Rebuild sentences testing ${TOEFL_SENTENCE_FOCUS_LABELS[ex.focus].toLowerCase()}.`,
      items: ex.items.map((it) => ({
        no: it.no,
        kind: it.kind,
        kindLabel: ITEM_KIND_LABELS[it.kind],
        prompt: it.prompt,
        ...(it.segments ? { segments: [...it.segments] } : {}),
        ...(it.source ? { source: it.source } : {}),
      })),
      itemCount: ex.items.length,
    };
  }
  if (ex.taskType === "write-email") {
    return {
      ...base,
      taskType: "write-email",
      purpose: ex.purpose,
      recipient: ex.recipient,
      scenario: ex.scenario,
      keyPoints: [...ex.keyPoints],
      wordBand: { ...ex.wordBand },
    };
  }
  return {
    ...base,
    taskType: "academic-discussion",
    discipline: ex.discipline,
    professorPrompt: ex.professorPrompt,
    studentPosts: ex.studentPosts.map((s) => ({ ...s })),
    keyPoints: [...ex.keyPoints],
    wordBand: { ...ex.wordBand },
  };
}

export async function getSafeWritingExerciseBySlug(slug: string): Promise<SafeWritingExercise | null> {
  const ex = writingExerciseBySlug(slug);
  return ex ? toSafeWritingExercise(ex) : null;
}

/** Library index metadata for the public listing (no keys, no models). */
export function writingLibraryIndex() {
  return TOEFL_WRITING_BANK.map((ex) => {
    const base = {
      slug: ex.slug,
      title: ex.title,
      taskType: ex.taskType,
      taskLabel: TOEFL_WRITING_TASK_LABELS[ex.taskType],
      difficulty: ex.difficulty,
      difficultyLabel: TOEFL_DIFFICULTY_LABELS[ex.difficulty],
      estimatedMinutes: ex.estimatedMinutes,
      source: ex.source,
    };
    if (ex.taskType === "build-sentence") {
      return { ...base, taskType: "build-sentence" as const, focus: ex.focus, focusLabel: TOEFL_SENTENCE_FOCUS_LABELS[ex.focus], itemCount: ex.items.length };
    }
    if (ex.taskType === "write-email") {
      return { ...base, taskType: "write-email" as const, purpose: ex.purpose, recipient: ex.recipient, wordBand: ex.wordBand };
    }
    return { ...base, taskType: "academic-discussion" as const, discipline: ex.discipline, wordBand: ex.wordBand };
  });
}

// ---------------------------------------------------------------------------
// The revealed teaching kit (returned by the submit endpoints only)
// ---------------------------------------------------------------------------

export type RevealedWritingKit = {
  modelResponse: string;
  responseAnalysis: string;
  usefulExpressions: string[];
  grammarObservations: string[];
  commonMistakes: string[];
  independentAssignment: string;
  vocabulary: { word: string; partOfSpeech: string; definition: string }[];
};

export function revealedKit(ex: ToeflWritingExercise): RevealedWritingKit {
  return {
    modelResponse: ex.modelResponse,
    responseAnalysis: ex.responseAnalysis,
    usefulExpressions: [...ex.usefulExpressions],
    grammarObservations: [...ex.grammarObservations],
    commonMistakes: [...ex.commonMistakes],
    independentAssignment: ex.independentAssignment,
    vocabulary: ex.taskType === "build-sentence" ? [] : ex.vocabulary.map((v) => ({ ...v })),
  };
}

// ---------------------------------------------------------------------------
// Submissions and grading — Build a Sentence
// ---------------------------------------------------------------------------

export type SentenceSubmission = {
  mode: "exam" | "practice";
  /** item no → typed sentence (text kinds) or segment-index order (reorder). */
  answers: Record<string, string | number[]>;
  timeSpentSec: number;
  perQuestionSec?: Record<string, number>;
};

export type SentenceItemErrorType =
  | "correct"
  | "word-order"
  | "grammar"
  | "clause"
  | "completeness"
  | "punctuation"
  | "spelling"
  | "missed"
  | "wrong";

export type GradedSentenceItem = {
  no: number;
  kind: ToeflSentenceItem["kind"];
  focus: ToeflSentenceExercise["focus"];
  given: string;
  expected: string;
  errorType: SentenceItemErrorType;
  correct: boolean;
  explanation: string;
  grammarNote: string;
};

export type GradedSentenceExercise = {
  slug: string;
  totalItems: number;
  correctItems: number;
  errorCounts: Record<SentenceItemErrorType, number>;
  focusCounts: Record<string, { total: number; correct: number }>;
  items: GradedSentenceItem[];
};

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Punctuation-aware comparison for "punctuate" items: marks ARE the task. */
function normPunctuate(s: string): string {
  return (s ?? "")
    .replace(/[’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

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

const FOCUS_ERROR: Record<ToeflSentenceExercise["focus"], SentenceItemErrorType> = {
  "word-order": "word-order",
  grammar: "grammar",
  "clause-structure": "clause",
  completeness: "completeness",
  punctuation: "punctuation",
};

export function gradeSentenceExercise(ex: ToeflSentenceExercise, submission: SentenceSubmission): GradedSentenceExercise {
  const errorCounts: Record<SentenceItemErrorType, number> = {
    correct: 0, "word-order": 0, grammar: 0, clause: 0, completeness: 0, punctuation: 0, spelling: 0, missed: 0, wrong: 0,
  };
  const focusCounts: Record<string, { total: number; correct: number }> = {};
  const items: GradedSentenceItem[] = [];
  let correctItems = 0;

  for (const q of ex.items) {
    const bucket = (focusCounts[ex.focus] ??= { total: 0, correct: 0 });
    bucket.total += 1;
    const raw = submission.answers[String(q.no)];
    let given = "";
    let errorType: SentenceItemErrorType;
    let correct = false;

    if (q.kind === "reorder") {
      // The learner sends the chosen segment order as indices.
      const order = Array.isArray(raw) ? raw : [];
      given = order.map((i) => q.segments?.[i] ?? "?").join(" ");
      if (order.length === 0) {
        errorType = "missed";
        given = "—";
      } else {
        const forms = [q.answer, ...(q.alternatives ?? [])].map(norm);
        const g = norm(given);
        if (forms.includes(g)) {
          errorType = "correct";
          correct = true;
        } else {
          errorType = "word-order";
        }
      }
    } else {
      given = typeof raw === "string" ? raw.trim() : "";
      if (!given) {
        errorType = "missed";
        given = "—";
      } else if (q.kind === "punctuate") {
        // Marks and capitals are the task: compare with punctuation intact.
        const forms = [q.answer, ...(q.alternatives ?? [])].map(normPunctuate);
        if (forms.includes(normPunctuate(given))) {
          errorType = "correct";
          correct = true;
        } else if (
          forms.some((f) => norm(f).replace(/'/g, "") === norm(given).replace(/'/g, ""))
        ) {
          errorType = "punctuation"; // right words, wrong marks
        } else {
          errorType = "wrong";
        }
      } else {
        const forms = [q.answer, ...(q.alternatives ?? [])].map(norm);
        const g = norm(given);
        if (forms.includes(g)) {
          errorType = "correct";
          correct = true;
        } else {
          const best = forms.map((f) => levenshtein(f, g)).reduce((a, c) => Math.min(a, c), Infinity);
          if (given.length >= 12 && best <= 2) {
            errorType = "spelling";
          } else if (q.kind === "correct") {
            errorType = "grammar";
          } else if (q.kind === "combine") {
            errorType = "clause";
          } else if (q.kind === "complete") {
            errorType = "completeness";
          } else {
            errorType = FOCUS_ERROR[ex.focus];
          }
        }
      }
    }

    if (correct) { correctItems += 1; bucket.correct += 1; }
    errorCounts[errorType] += 1;
    items.push({
      no: q.no,
      kind: q.kind,
      focus: ex.focus,
      given,
      expected: q.answer,
      errorType,
      correct,
      explanation: q.meta.explanation,
      grammarNote: q.meta.grammarNote,
    });
  }

  return { slug: ex.slug, totalItems: items.length, correctItems, errorCounts, focusCounts, items };
}

// ---------------------------------------------------------------------------
// Attempt recording
// ---------------------------------------------------------------------------

export async function recordSentenceAttempt(
  userId: string,
  ex: ToeflSentenceExercise,
  submission: SentenceSubmission,
  graded: GradedSentenceExercise,
): Promise<string> {
  const attempt = await db.toeflWritingBankAttempt.create({
    data: {
      userId,
      exerciseSlug: ex.slug,
      taskType: ex.taskType,
      difficulty: ex.difficulty,
      mode: submission.mode === "exam" ? "exam" : "practice",
      totalQuestions: graded.totalItems,
      correctCount: graded.correctItems,
      focusCounts: JSON.stringify(graded.focusCounts),
      errorCounts: JSON.stringify(graded.errorCounts),
      timeSpentSec: Math.max(0, Math.min(7200, Math.round(submission.timeSpentSec || 0))),
    },
  });
  await db.toeflWritingBankResponse.createMany({
    data: graded.items.map((it) => ({
      attemptId: attempt.id,
      questionId: String(it.no),
      focus: it.focus,
      answer: JSON.stringify(submission.answers[String(it.no)] ?? null),
      isCorrect: it.correct,
      errorType: it.errorType,
      detail: it.correct ? null : `${it.given} → ${it.expected}`,
      timeSpentSec: Math.max(0, Math.min(1800, Math.round(submission.perQuestionSec?.[String(it.no)] ?? 0))),
    })),
  });
  return attempt.id;
}

export async function recordEvaluatedWritingAttempt(
  userId: string,
  ex: ToeflEmailTask | ToeflDiscussionTask,
  evaluation: import("./writing-evaluate").WritingEvaluation,
  timeSpentSec: number,
  mode: "exam" | "practice",
): Promise<string> {
  const attempt = await db.toeflWritingBankAttempt.create({
    data: {
      userId,
      exerciseSlug: ex.slug,
      taskType: ex.taskType,
      difficulty: ex.difficulty,
      mode,
      measured: JSON.stringify(evaluation.metrics),
      overall: evaluation.status === "complete" ? evaluation.overall : 0,
      criteria: JSON.stringify(evaluation.criteria),
      aiAvailable: evaluation.aiAvailable,
      aiCommentary: evaluation.aiCommentary ? JSON.stringify(evaluation.aiCommentary) : null,
      timeSpentSec: Math.max(0, Math.min(7200, Math.round(timeSpentSec || 0))),
    },
  });
  return attempt.id;
}

// ---------------------------------------------------------------------------
// Drafts (email and discussion tasks)
// ---------------------------------------------------------------------------

export async function getWritingDraft(userId: string, taskSlug: string): Promise<{ content: string; wordCount: number } | null> {
  const row = await db.toeflWritingBankDraft.findUnique({ where: { userId_taskSlug: { userId, taskSlug } } });
  return row ? { content: row.content, wordCount: row.wordCount } : null;
}

export async function upsertWritingDraft(userId: string, taskSlug: string, content: string): Promise<{ content: string; wordCount: number }> {
  const wc = (content.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g) ?? []).length;
  const row = await db.toeflWritingBankDraft.upsert({
    where: { userId_taskSlug: { userId, taskSlug } },
    create: { userId, taskSlug, content, wordCount: wc },
    update: { content, wordCount: wc },
  });
  return { content: row.content, wordCount: row.wordCount };
}

export async function deleteWritingDraft(userId: string, taskSlug: string): Promise<void> {
  await db.toeflWritingBankDraft.deleteMany({ where: { userId, taskSlug } });
}
