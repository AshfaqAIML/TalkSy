/**
 * IELTS Listening Masterclass — audio-bank service (PROMPT 44, Parts 5–7).
 *
 * Serves safe projections (answer keys, keywords and trap lures never leave
 * the server before submission), grades submitted exercises with the
 * masterclass error taxonomy, records attempts, and returns per-item
 * feedback with the revealed transcript.
 *
 * Error taxonomy (per answerable item):
 *   correct      the keyed answer (or an alternative) was given
 *   spelling     the right word, misspelled (edit distance ≤ 2) — zero
 *                marks, exactly like the real test, but tracked separately
 *   word-limit   plausible content that breaks the printed word limit
 *   distractor   a designed lure was taken (trap.lure / lure option)
 *   missed       nothing was typed for the item
 *   wrong        anything else
 */

import { db } from "@/lib/db";
import { bankExerciseBySlug } from "@/data/exams/ielts/listening-bank";
import {
  ACCENT_LABELS,
  DIFFICULTY_LABELS,
  type BankExercise,
  type BankMapQuestion,
  type BankQuestion,
  type BankQuestionType,
} from "@/data/exams/ielts/listening-bank/types";

// ---------------------------------------------------------------------------
// Safe projection (client shape)
// ---------------------------------------------------------------------------

export type SafeBankLayoutCell = { kind: "text"; text: string } | { kind: "blank"; no: number };

type SafeQuestionBase = {
  id: string;
  label: string;
  instruction: string;
  type: BankQuestionType;
  skills: string[];
};

export type SafeBankQuestion =
  | (SafeQuestionBase & {
      type: "form" | "note" | "table" | "flowchart" | "summary" | "sentence";
      layout: SafeBankLayoutCell[][];
      wordLimit: number;
      numbersAllowed: boolean;
    })
  | (SafeQuestionBase & { type: "mcq-single" | "mcq-multi"; stem: string; options: string[]; choose: number })
  | (SafeQuestionBase & { type: "matching"; items: string[]; options: string[] })
  | (SafeQuestionBase & { type: "map"; plan: BankMapQuestion["plan"]; options: { letter: string; text: string }[] })
  | (SafeQuestionBase & { type: "short-answer"; questions: string[] });

export type SafeBankExercise = {
  slug: string;
  title: string;
  part: 1 | 2 | 3 | 4;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  accentLabels: string[];
  intro: string;
  speakers: { id: string; name: string; role: string; accent: string }[];
  segments: { id: string; speakerId?: string; text: string; pauseAfterMs?: number }[];
  questions: SafeBankQuestion[];
  transcriptNote: string;
  source: string;
};

export function toSafeExercise(exercise: BankExercise): SafeBankExercise {
  return {
    slug: exercise.slug,
    title: exercise.title,
    part: exercise.part,
    difficulty: exercise.difficulty,
    difficultyLabel: DIFFICULTY_LABELS[exercise.difficulty],
    estimatedMinutes: exercise.estimatedMinutes,
    accentLabels: [...new Set(exercise.speakers.map((s) => ACCENT_LABELS[s.accent]))],
    intro: exercise.intro,
    speakers: exercise.speakers.map((s) => ({ ...s, accent: ACCENT_LABELS[s.accent] })),
    segments: exercise.segments.map((s) => ({ ...s })),
    questions: exercise.questions.map((q) => projectQuestion(q)),
    transcriptNote: exercise.transcriptNote,
    source: exercise.source,
  };
}

function projectQuestion(q: BankQuestion): SafeBankQuestion {
  const base = { id: q.id, label: q.label, instruction: q.instruction, type: q.type, skills: q.meta.skills };
  switch (q.type) {
    case "mcq-single":
    case "mcq-multi":
      return { ...base, type: q.type, stem: q.stem, options: q.options, choose: q.correct.length };
    case "matching":
      return { ...base, type: q.type, items: q.items, options: q.options };
    case "map":
      return { ...base, type: q.type, plan: q.plan, options: q.options };
    case "short-answer":
      return { ...base, type: q.type, questions: q.questions };
    default:
      return { ...base, type: q.type, layout: q.layout, wordLimit: q.wordLimit, numbersAllowed: q.numbersAllowed };
  }
}

// ---------------------------------------------------------------------------
// Answer payloads (client → server)
// ---------------------------------------------------------------------------

export type BankAnswerPayload =
  | { format: "completion"; blanks: Record<string, string> }
  | { format: "mcq"; option: number }
  | { format: "mcq-multi"; options: number[] }
  | { format: "matching"; pairs: number[] }
  | { format: "map"; labels: string[] }
  | { format: "short-answer"; answers: string[] };

export type BankSubmission = {
  mode: "exam" | "practice";
  answers: Record<string, BankAnswerPayload>;
  timeSpentSec: number;
  perQuestionSec?: Record<string, number>;
};

// ---------------------------------------------------------------------------
// Grading with the error taxonomy
// ---------------------------------------------------------------------------

export type ItemErrorType = "correct" | "spelling" | "word-limit" | "distractor" | "missed" | "wrong";

export type GradedItem = {
  /** Blank number / item index within the question (1-based). */
  no: number;
  given: string;
  expected: string;
  errorType: ItemErrorType;
  correct: boolean;
};

export type GradedQuestion = {
  questionId: string;
  type: BankQuestionType;
  items: GradedItem[];
  allCorrect: boolean;
  explanation: string;
  trapNote: string | null;
  trapFamily: string | null;
  /** Keywords that carried the answer — revealed for review. */
  keywords: string[];
};

export type GradedExercise = {
  slug: string;
  totalItems: number;
  correctItems: number;
  errorCounts: Record<ItemErrorType, number>;
  questions: GradedQuestion[];
};

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[\s\-–—_/.,]+/g, "")
    .replace(/[^a-z0-9]/g, "");

const wordCount = (s: string): number => (s.trim().match(/[A-Za-z0-9'’-]+/g) ?? []).length;

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
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

/** Grade one completion blank against its key with the error taxonomy. */
function gradeCompletionBlank(
  givenRaw: string,
  keyed: { answer: string; alternatives?: string[] },
  wordLimit: number,
  lures: string[],
): { given: string; expected: string; errorType: ItemErrorType; correct: boolean } {
  const given = (givenRaw ?? "").trim();
  const expected = keyed.answer;
  if (!given) return { given: "—", expected, errorType: "missed", correct: false };
  const forms = [expected, ...(keyed.alternatives ?? [])];
  const givenN = norm(given);
  const matches = forms.some((f) => norm(f) === givenN);
  if (matches) {
    // Content right — but a broken word limit still scores zero.
    if (wordCount(given) > wordLimit) {
      return { given, expected, errorType: "word-limit", correct: false };
    }
    return { given, expected, errorType: "correct", correct: true };
  }
  if (lures.some((l) => norm(l) === givenN)) {
    return { given, expected, errorType: "distractor", correct: false };
  }
  if (wordCount(given) > wordLimit) {
    return { given, expected, errorType: "word-limit", correct: false };
  }
  // Same word, wrong spelling: close edit distance on a real attempt.
  const best = forms.map((f) => levenshtein(norm(f), givenN)).reduce((a, b) => Math.min(a, b), Infinity);
  if (givenN.length >= 4 && best <= 2) {
    return { given, expected, errorType: "spelling", correct: false };
  }
  return { given, expected, errorType: "wrong", correct: false };
}

export function gradeExercise(exercise: BankExercise, submission: BankSubmission): GradedExercise {
  const errorCounts: Record<ItemErrorType, number> = {
    correct: 0, spelling: 0, "word-limit": 0, distractor: 0, missed: 0, wrong: 0,
  };
  let totalItems = 0;
  let correctItems = 0;
  const questions: GradedQuestion[] = [];

  for (const q of exercise.questions) {
    const answer = submission.answers[q.id];
    const lures = q.meta.trap?.lure ?? [];
    const items: GradedItem[] = [];

    switch (q.type) {
      case "form":
      case "note":
      case "table":
      case "flowchart":
      case "summary":
      case "sentence": {
        const blanks = answer?.format === "completion" ? answer.blanks : {};
        for (const b of q.blanks) {
          const graded = gradeCompletionBlank(blanks[String(b.no)] ?? "", b, q.wordLimit, lures);
          items.push({ ...graded, no: b.no });
        }
        break;
      }
      case "mcq-single":
      case "mcq-multi": {
        const correctSet = new Set(q.correct);
        if (q.type === "mcq-single") {
          const chosen = answer?.format === "mcq" ? answer.option : -1;
          const errorType: ItemErrorType =
            chosen === -1 || chosen === undefined
              ? "missed"
              : correctSet.has(chosen)
                ? "correct"
                : isLuredOption(q.options, chosen, lures)
                  ? "distractor"
                  : "wrong";
          items.push({
            no: 1,
            given: chosen >= 0 ? letterFor(chosen) : "—",
            expected: q.correct.map(letterFor).join(", "),
            errorType,
            correct: errorType === "correct",
          });
        } else {
          const chosen = answer?.format === "mcq-multi" ? [...new Set(answer.options)].sort((a, b) => a - b) : [];
          const wanted = [...q.correct].sort((a, b) => a - b);
          const allCorrect = chosen.length === wanted.length && chosen.every((c, i) => c === wanted[i]);
          const missing = wanted.filter((w) => !chosen.includes(w)).length;
          const extras = chosen.filter((c) => !wanted.includes(c));
          const errorType: ItemErrorType =
            chosen.length === 0
              ? "missed"
              : allCorrect
                ? "correct"
                : extras.some((c) => isLuredOption(q.options, c, lures))
                  ? "distractor"
                  : missing > 0 && extras.length === 0
                    ? "missed"
                    : "wrong";
          items.push({
            no: 1,
            given: chosen.map(letterFor).join(", ") || "—",
            expected: wanted.map(letterFor).join(", "),
            errorType,
            correct: allCorrect,
          });
        }
        break;
      }
      case "matching": {
        const pairs = answer?.format === "matching" ? answer.pairs : [];
        q.items.forEach((_, index) => {
          const chosen = pairs[index];
          const expected = q.correct[index];
          const errorType: ItemErrorType =
            chosen === undefined || chosen === null ? "missed" : chosen === expected ? "correct" : "wrong";
          items.push({
            no: index + 1,
            given: chosen !== undefined ? letterFor(chosen) : "—",
            expected: letterFor(expected),
            errorType,
            correct: errorType === "correct",
          });
        });
        break;
      }
      case "map": {
        const labels = answer?.format === "map" ? answer.labels : [];
        q.correct.forEach((expected, index) => {
          const given = (labels[index] ?? "").trim().toUpperCase();
          const errorType: ItemErrorType = !given ? "missed" : given === expected.toUpperCase() ? "correct" : "wrong";
          items.push({
            no: index + 1,
            given: given || "—",
            expected: expected.toUpperCase(),
            errorType,
            correct: errorType === "correct",
          });
        });
        break;
      }
      case "short-answer": {
        const answers = answer?.format === "short-answer" ? answer.answers : [];
        q.accepted.forEach((forms, index) => {
          const given = (answers[index] ?? "").trim();
          const givenN = norm(given);
          const match = forms.some((f) => norm(f) === givenN);
          const near = forms.some((f) => givenN.length >= 4 && levenshtein(norm(f), givenN) <= 2);
          const errorType: ItemErrorType = !given
            ? "missed"
            : match
              ? "correct"
              : near
                ? "spelling"
                : lures.some((l) => norm(l) === givenN)
                  ? "distractor"
                  : "wrong";
          items.push({
            no: index + 1,
            given: given || "—",
            expected: forms[0],
            errorType,
            correct: errorType === "correct",
          });
        });
        break;
      }
    }

    for (const item of items) {
      totalItems += 1;
      errorCounts[item.errorType] += 1;
      if (item.correct) correctItems += 1;
    }
    questions.push({
      questionId: q.id,
      type: q.type,
      items,
      allCorrect: items.length > 0 && items.every((i) => i.correct),
      explanation: q.meta.explanation,
      trapNote: q.meta.trap?.note ?? null,
      trapFamily: q.meta.trap?.family ?? null,
      keywords: q.meta.keywords,
    });
  }

  return { slug: exercise.slug, totalItems, correctItems, errorCounts, questions };
}

function letterFor(index: number): string {
  return String.fromCharCode(65 + index);
}

function isLuredOption(options: string[], chosen: number, lures: string[]): boolean {
  if (lures.length === 0 || chosen < 0 || chosen >= options.length) return false;
  const text = norm(options[chosen]);
  if (!text) return false;
  return lures.some((l) => text.includes(norm(l)) || norm(l).includes(text));
}

// ---------------------------------------------------------------------------
// Attempt recording
// ---------------------------------------------------------------------------

export async function recordBankAttempt(
  userId: string,
  exercise: BankExercise,
  submission: BankSubmission,
  graded: GradedExercise,
): Promise<string> {
  const attempt = await db.listeningBankAttempt.create({
    data: {
      userId,
      exerciseSlug: exercise.slug,
      part: exercise.part,
      mode: submission.mode === "practice" ? "practice" : "exam",
      totalQuestions: graded.totalItems,
      correctCount: graded.correctItems,
      errorCounts: JSON.stringify(graded.errorCounts),
      timeSpentSec: Math.max(0, Math.min(7200, Math.round(submission.timeSpentSec || 0))),
    },
  });
  const byQuestion = new Map(graded.questions.map((q) => [q.questionId, q]));
  const rows = exercise.questions.map((q) => {
    const g = byQuestion.get(q.id);
    const wrongCount = g ? g.items.filter((i) => !i.correct).length : 1;
    const dominant = g ? (g.items.find((i) => !i.correct)?.errorType ?? "correct") : "missed";
    const detail =
      g && g.items.some((i) => !i.correct)
        ? g.items
            .filter((i) => !i.correct)
            .map((i) => `${i.given} → ${i.expected}`)
            .join("; ")
        : null;
    return {
      attemptId: attempt.id,
      questionId: q.id,
      questionType: q.type,
      answer: JSON.stringify(submission.answers[q.id] ?? null),
      isCorrect: (g?.items.length ?? 0) > 0 && wrongCount === 0,
      errorType: dominant,
      detail,
      timeSpentSec: Math.max(0, Math.min(1800, Math.round(submission.perQuestionSec?.[q.id] ?? 0))),
    };
  });
  await db.listeningBankResponse.createMany({ data: rows });
  return attempt.id;
}

export async function getSafeExerciseBySlug(slug: string): Promise<SafeBankExercise | null> {
  const exercise = bankExerciseBySlug(slug);
  return exercise ? toSafeExercise(exercise) : null;
}
