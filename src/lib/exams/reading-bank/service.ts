/**
 * IELTS Reading Masterclass — passage bank service (PROMPT 45, Parts D–F).
 *
 * Serves safe projections (answer keys, lures, evidence and explanations
 * never leave the server before submission), grades submitted exercises
 * with the reading error taxonomy, records attempts — including attempts
 * made inside a timed simulation — and returns per-item feedback with the
 * passage evidence, the glossary and why-wrong notes for review.
 *
 * Error taxonomy (per answerable item):
 *   correct      the keyed answer (or an accepted alternative) was given
 *   spelling     the right word, misspelled (edit distance ≤ 2) — zero
 *                marks, exactly like the real test, but tracked
 *   word-limit   plausible content that breaks the printed word limit
 *   trap         a designed lure was taken (lure option, FALSE/NOT GIVEN
 *                boundary confusion, the tempting heading)
 *   inference    wrong on an item whose tested skill is reading between
 *                the lines (over- or under-reading what the text implies)
 *   vocabulary   wrong on an item hinging on glossary vocabulary
 *   missed       nothing was entered for the item
 *   wrong        anything else
 */

import { db } from "@/lib/db";
import { readingExerciseBySlug } from "@/data/exams/ielts/reading-bank";
import {
  READING_DIFFICULTY_LABELS,
  READING_QUESTION_TYPE_LABELS,
  type ReadingDiagramQuestion,
  type ReadingExercise,
  type ReadingLayoutRow,
  type ReadingQuestion,
  type ReadingQuestionType,
} from "@/data/exams/ielts/reading-bank/types";

// ---------------------------------------------------------------------------
// Safe projection (client shape) — the passage travels, the key does not
// ---------------------------------------------------------------------------

type SafeQuestionBase = {
  id: string;
  label: string;
  instruction: string;
  type: ReadingQuestionType;
  typeLabel: string;
  skills: string[];
};

export type SafeReadingQuestion =
  | (SafeQuestionBase & {
      type: "sentence-completion" | "summary-completion" | "note-completion" | "table-completion" | "flowchart-completion";
      layout: ReadingLayoutRow[];
      wordLimit: number;
    })
  | (SafeQuestionBase & { type: "diagram-labelling"; plan: ReadingDiagramQuestion["plan"]; wordLimit: 3 })
  | (SafeQuestionBase & { type: "multiple-choice"; items: { stem: string; options: string[] }[] })
  | (SafeQuestionBase & { type: "multiple-choice-multi"; stem: string; options: string[]; choose: number })
  | (SafeQuestionBase & { type: "true-false-not-given" | "yes-no-not-given"; statements: string[]; choices: string[] })
  | (SafeQuestionBase & {
      type: "matching-headings" | "matching-information" | "matching-features" | "matching-sentence-endings";
      items: string[];
      options: string[];
      reuseNote?: string;
      extraOption?: boolean;
    });

export type SafeReadingExercise = {
  slug: string;
  title: string;
  variant: "academic" | "gt";
  section: number;
  subject: string;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  wordCount: number;
  objective: string;
  intro: string;
  blocks: { heading: string; paragraphs: string[] }[];
  questions: SafeReadingQuestion[];
  glossarySize: number;
  passageNote: string;
  source: string;
};

function projectQuestion(q: ReadingQuestion): SafeReadingQuestion {
  const base = {
    id: q.id,
    label: q.label,
    instruction: q.instruction,
    type: q.type,
    typeLabel: READING_QUESTION_TYPE_LABELS[q.type],
  };
  switch (q.type) {
    case "multiple-choice":
      return { ...base, type: q.type, skills: q.items.flatMap((i) => i.meta.skills), items: q.items.map((i) => ({ stem: i.stem, options: i.options })) };
    case "multiple-choice-multi":
      return { ...base, type: q.type, skills: q.meta.skills, stem: q.stem, options: q.options, choose: q.correct.length };
    case "true-false-not-given":
      return {
        ...base,
        type: q.type,
        skills: q.statements.flatMap((s) => s.meta.skills),
        statements: q.statements.map((s) => s.text),
        choices: q.type === "true-false-not-given" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"],
      };
    case "yes-no-not-given":
      return {
        ...base,
        type: q.type,
        skills: q.statements.flatMap((s) => s.meta.skills),
        statements: q.statements.map((s) => s.text),
        choices: ["YES", "NO", "NOT GIVEN"],
      };
    case "matching-headings":
    case "matching-information":
    case "matching-features":
    case "matching-sentence-endings":
      return {
        ...base,
        type: q.type,
        skills: q.items.flatMap((i) => i.meta.skills),
        items: q.items.map((i) => i.text),
        options: q.options,
        ...(q.reuseNote ? { reuseNote: q.reuseNote } : {}),
        ...(q.extraOption ? { extraOption: true } : {}),
      };
    case "diagram-labelling":
      return { ...base, type: q.type, skills: q.blanks.flatMap((b) => b.meta.skills), plan: q.plan, wordLimit: 3 };
    default:
      return { ...base, type: q.type, skills: q.blanks.flatMap((b) => b.meta.skills), layout: q.layout, wordLimit: q.wordLimit };
  }
}

export function toSafeReadingExercise(exercise: ReadingExercise): SafeReadingExercise {
  const text = exercise.blocks.flatMap((b) => b.paragraphs).join(" ");
  return {
    slug: exercise.slug,
    title: exercise.title,
    variant: exercise.variant,
    section: exercise.section,
    subject: exercise.subject,
    difficulty: exercise.difficulty,
    difficultyLabel: READING_DIFFICULTY_LABELS[exercise.difficulty],
    estimatedMinutes: exercise.estimatedMinutes,
    wordCount: (text.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length,
    objective: exercise.objective,
    intro: exercise.intro,
    blocks: exercise.blocks.map((b) => ({ heading: b.heading, paragraphs: [...b.paragraphs] })),
    questions: exercise.questions.map(projectQuestion),
    glossarySize: exercise.glossary.length,
    passageNote: exercise.passageNote,
    source: exercise.source,
  };
}

// ---------------------------------------------------------------------------
// Answer payloads (client → server)
// ---------------------------------------------------------------------------

export type ReadingAnswerPayload =
  | { format: "completion"; blanks: Record<string, string> }
  | { format: "mcq"; options: number[] }
  | { format: "mcq-multi"; options: number[] }
  | { format: "verdict"; choices: string[] }
  | { format: "matching"; pairs: number[] };

export type ReadingSubmission = {
  mode: "exam" | "practice";
  answers: Record<string, ReadingAnswerPayload>;
  timeSpentSec: number;
  perQuestionSec?: Record<string, number>;
  /** Simulation context — present when this passage was one part of a timed run. */
  simRunId?: string;
  simSlug?: string;
  simPart?: number;
};

// ---------------------------------------------------------------------------
// Grading with the reading error taxonomy
// ---------------------------------------------------------------------------

export type ReadingItemErrorType = "correct" | "spelling" | "word-limit" | "trap" | "inference" | "vocabulary" | "missed" | "wrong";

export type GradedReadingItem = {
  no: number;
  given: string;
  expected: string;
  errorType: ReadingItemErrorType;
  correct: boolean;
  /** Review payload (Part F): the passage lines that settle the answer. */
  evidence: { block: number; paragraph: number; quote: string }[];
  explanation: string;
  whyWrong: string[];
  trapNote: string | null;
  trapFamily: string | null;
  /** Glossary words appearing in this item's evidence paragraphs. */
  glossaryWords: string[];
};

export type GradedReadingQuestion = {
  questionId: string;
  type: ReadingQuestionType;
  typeLabel: string;
  items: GradedReadingItem[];
  allCorrect: boolean;
};

export type GradedReadingExercise = {
  slug: string;
  totalItems: number;
  correctItems: number;
  errorCounts: Record<ReadingItemErrorType, number>;
  questions: GradedReadingQuestion[];
};

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[\s\-–—_/.,:]+/g, "")
    .replace(/[^a-z0-9]/g, "");

const wc = (s: string): number => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;

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

/** The designed-lure/secondary classification for a wrong objective item. */
function classifyObjectiveError(
  skills: string[],
  hasLure: boolean,
): Exclude<ReadingItemErrorType, "correct" | "missed"> {
  if (hasLure) return "trap";
  if (skills.includes("inference")) return "inference";
  if (skills.includes("vocabulary")) return "vocabulary";
  return "wrong";
}

const letterFor = (i: number): string => String.fromCharCode(65 + i);

export function gradeReadingExercise(exercise: ReadingExercise, submission: ReadingSubmission): GradedReadingExercise {
  const errorCounts: Record<ReadingItemErrorType, number> = {
    correct: 0, spelling: 0, "word-limit": 0, trap: 0, inference: 0, vocabulary: 0, missed: 0, wrong: 0,
  };
  let totalItems = 0;
  let correctItems = 0;
  const questions: GradedReadingQuestion[] = [];
  let no = 0;

  const evidenceWords = (evidence: { block: number; paragraph: number }[]): string[] => {
    const out: string[] = [];
    for (const ev of evidence) {
      const paragraph = exercise.blocks[ev.block]?.paragraphs[ev.paragraph] ?? "";
      for (const g of exercise.glossary) {
        const w = norm(g.word);
        if (w && norm(paragraph).includes(w) && !out.includes(g.word)) out.push(g.word);
      }
    }
    return out;
  };

  for (const q of exercise.questions) {
    const answer = submission.answers[q.id];
    const items: GradedReadingItem[] = [];

    switch (q.type) {
      case "sentence-completion":
      case "summary-completion":
      case "note-completion":
      case "table-completion":
      case "flowchart-completion":
      case "diagram-labelling": {
        const blanks = answer?.format === "completion" ? answer.blanks : {};
        const limit = q.type === "diagram-labelling" ? 3 : q.wordLimit;
        for (const b of q.blanks) {
          no += 1;
          const given = (blanks[String(b.no)] ?? "").trim();
          const expected = b.answer;
          const forms = [expected, ...(b.alternatives ?? [])];
          let errorType: ReadingItemErrorType;
          let correct = false;
          if (!given) {
            errorType = "missed";
          } else if (forms.some((f) => norm(f) === norm(given))) {
            if (wc(given) > limit) {
              errorType = "word-limit";
            } else {
              errorType = "correct";
              correct = true;
            }
          } else if (wc(given) > limit) {
            errorType = "word-limit";
          } else {
            const best = forms.map((f) => levenshtein(norm(f), norm(given))).reduce((a, c) => Math.min(a, c), Infinity);
            errorType = given.length >= 4 && best <= 2 ? "spelling" : classifyObjectiveError(b.meta.skills, false);
          }
          items.push({
            no,
            given: given || "—",
            expected,
            errorType,
            correct,
            evidence: b.meta.evidence,
            explanation: b.meta.explanation,
            whyWrong: b.meta.whyWrong ?? [],
            trapNote: b.meta.trap?.note ?? null,
            trapFamily: b.meta.trap?.family ?? null,
            glossaryWords: evidenceWords(b.meta.evidence),
          });
        }
        break;
      }
      case "multiple-choice": {
        const chosen = answer?.format === "mcq" ? answer.options : [];
        q.items.forEach((item, index) => {
          no += 1;
          const pick = chosen[index];
          const has = pick !== undefined && pick !== -1;
          let errorType: ReadingItemErrorType;
          let correct = false;
          if (!has) {
            errorType = "missed";
          } else if (pick === item.correct) {
            errorType = "correct";
            correct = true;
          } else {
            errorType = classifyObjectiveError(item.meta.skills, item.lure !== undefined && pick === item.lure);
          }
          items.push({
            no,
            given: has ? letterFor(pick) : "—",
            expected: letterFor(item.correct),
            errorType,
            correct,
            evidence: item.meta.evidence,
            explanation: item.meta.explanation,
            whyWrong: item.meta.whyWrong ?? [],
            trapNote: item.meta.trap?.note ?? null,
            trapFamily: item.meta.trap?.family ?? null,
            glossaryWords: evidenceWords(item.meta.evidence),
          });
        });
        break;
      }
      case "multiple-choice-multi": {
        no += q.correct.length > 1 ? q.correct.length : 1;
        const chosen = answer?.format === "mcq-multi" ? [...new Set(answer.options)].sort((a, b) => a - b) : [];
        const wanted = [...q.correct].sort((a, b) => a - b);
        const allCorrect = chosen.length === wanted.length && chosen.every((c, i) => c === wanted[i]);
        const tookLure = (q.lures ?? []).some((l) => chosen.includes(l));
        const errorType: ReadingItemErrorType =
          chosen.length === 0 ? "missed" : allCorrect ? "correct" : tookLure ? "trap" : classifyObjectiveError(q.meta.skills, false);
        items.push({
          no,
          given: chosen.map(letterFor).join(", ") || "—",
          expected: wanted.map(letterFor).join(", "),
          errorType,
          correct: allCorrect,
          evidence: q.meta.evidence,
          explanation: q.meta.explanation,
          whyWrong: q.meta.whyWrong ?? [],
          trapNote: q.meta.trap?.note ?? null,
          trapFamily: q.meta.trap?.family ?? null,
          glossaryWords: evidenceWords(q.meta.evidence),
        });
        break;
      }
      case "true-false-not-given":
      case "yes-no-not-given": {
        const choices = answer?.format === "verdict" ? answer.choices : [];
        q.statements.forEach((s, index) => {
          no += 1;
          const given = (choices[index] ?? "").trim().toUpperCase();
          const expected = s.answer;
          let errorType: ReadingItemErrorType;
          let correct = false;
          if (!given) {
            errorType = "missed";
          } else if (given === expected) {
            errorType = "correct";
            correct = true;
          } else {
            errorType = classifyObjectiveError(s.meta.skills, s.lure !== undefined && given === s.lure);
          }
          items.push({
            no,
            given: given || "—",
            expected,
            errorType,
            correct,
            evidence: s.meta.evidence,
            explanation: s.meta.explanation,
            whyWrong: s.meta.whyWrong ?? [],
            trapNote: s.meta.trap?.note ?? null,
            trapFamily: s.meta.trap?.family ?? null,
            glossaryWords: evidenceWords(s.meta.evidence),
          });
        });
        break;
      }
      case "matching-headings":
      case "matching-information":
      case "matching-features":
      case "matching-sentence-endings": {
        const pairs = answer?.format === "matching" ? answer.pairs : [];
        q.items.forEach((item, index) => {
          no += 1;
          const pick = pairs[index];
          const has = pick !== undefined && pick !== -1;
          let errorType: ReadingItemErrorType;
          let correct = false;
          if (!has) {
            errorType = "missed";
          } else if (pick === item.correct) {
            errorType = "correct";
            correct = true;
          } else {
            errorType = classifyObjectiveError(item.meta.skills, item.lure !== undefined && pick === item.lure);
          }
          items.push({
            no,
            given: has ? letterFor(pick) : "—",
            expected: letterFor(item.correct),
            errorType,
            correct,
            evidence: item.meta.evidence,
            explanation: item.meta.explanation,
            whyWrong: item.meta.whyWrong ?? [],
            trapNote: item.meta.trap?.note ?? null,
            trapFamily: item.meta.trap?.family ?? null,
            glossaryWords: evidenceWords(item.meta.evidence),
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
      typeLabel: READING_QUESTION_TYPE_LABELS[q.type],
      items,
      allCorrect: items.length > 0 && items.every((i) => i.correct),
    });
  }

  return { slug: exercise.slug, totalItems, correctItems, errorCounts, questions };
}

// ---------------------------------------------------------------------------
// Attempt recording
// ---------------------------------------------------------------------------

export async function recordReadingAttempt(
  userId: string,
  exercise: ReadingExercise,
  submission: ReadingSubmission,
  graded: GradedReadingExercise,
): Promise<string> {
  const attempt = await db.readingBankAttempt.create({
    data: {
      userId,
      exerciseSlug: exercise.slug,
      variant: exercise.variant,
      section: exercise.section,
      mode: submission.mode === "practice" ? "practice" : "exam",
      ...(submission.simRunId ? { simRunId: submission.simRunId } : {}),
      ...(submission.simSlug ? { simSlug: submission.simSlug } : {}),
      ...(submission.simPart ? { simPart: submission.simPart } : {}),
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
  await db.readingBankResponse.createMany({ data: rows });
  return attempt.id;
}

export async function getSafeReadingExerciseBySlug(slug: string): Promise<SafeReadingExercise | null> {
  const exercise = readingExerciseBySlug(slug);
  return exercise ? toSafeReadingExercise(exercise) : null;
}
