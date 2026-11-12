/**
 * Reading Room — authoritative server-side grading and client sanitisation.
 *
 * The client never receives grading data: every "Check" posts the raw answer
 * to the API, this module grades it against the authored question, the
 * attempt is persisted by the route, and the full feedback payload is
 * returned. Reuses the engine's normalisation helpers so grading semantics
 * match the lesson exercise engine exactly.
 */

import type {
  ChoiceQuestion,
  ReadingAnswer,
  ReadingFeedback,
  ReadingQuestion,
  SafeReadingQuestion,
  SequenceQuestion,
  ShortTextQuestion,
} from "@/data/reading/types";
import {
  containsAllKeywords,
  normalizeText,
  normalizeWord,
  seededShuffle,
  sentencesCloseEnough,
} from "@/lib/engine/normalize";

// ---------------------------------------------------------------------------
// Grading
// ---------------------------------------------------------------------------

export interface ReadingGradeResult {
  correct: boolean;
  /** 0–1 partial-credit score (1 = fully correct). */
  score: number;
  /** True when the submitted answer was malformed for the question format. */
  invalid: boolean;
}

const INVALID: ReadingGradeResult = { correct: false, score: 0, invalid: true };

function textResult(correct: boolean): ReadingGradeResult {
  return { correct, score: correct ? 1 : 0, invalid: false };
}

/** Any-of accepted answers with word-level typo tolerance. */
function matchesAccepted(answer: string, accepted: string[]): boolean {
  const normalized = normalizeText(answer);
  if (normalized.length === 0) return false;
  return accepted.some((a) => sentencesCloseEnough(normalized, a));
}

/** Accepted answers OR all required keywords present. */
function matchesAcceptedOrKeywords(
  answer: string,
  accepted: string[],
  keywords?: string[],
): boolean {
  if (accepted.length > 0 && matchesAccepted(answer, accepted)) return true;
  if (keywords && keywords.length > 0) return containsAllKeywords(answer, keywords);
  return false;
}

function gradeChoice(question: ChoiceQuestion, answer: unknown): ReadingGradeResult {
  const optionId =
    typeof (answer as { optionId?: unknown })?.optionId === "string"
      ? (answer as { optionId: string }).optionId
      : null;
  if (!optionId || !question.options.some((o) => o.id === optionId)) return INVALID;
  return textResult(optionId === question.correctOptionId);
}

function gradeSequence(question: SequenceQuestion, answer: unknown): ReadingGradeResult {
  const order = Array.isArray((answer as { order?: unknown })?.order)
    ? (answer as { order: unknown[] }).order.filter(
        (id): id is string => typeof id === "string",
      )
    : null;
  if (!order) return INVALID;
  const eventIds = new Set(question.events.map((e) => e.id));
  if (order.length !== question.events.length) return INVALID;
  if (!order.every((id) => eventIds.has(id))) return INVALID;
  if (new Set(order).size !== order.length) return INVALID;
  // Position-based partial credit: events in the right place count.
  let hits = 0;
  question.correctOrder.forEach((expectedId, index) => {
    if (order[index] === expectedId) hits += 1;
  });
  if (hits === question.correctOrder.length) return textResult(true);
  return { correct: false, score: Math.round((hits / question.correctOrder.length) * 100) / 100, invalid: false };
}

function gradeShortText(question: ShortTextQuestion, answer: unknown): ReadingGradeResult {
  const text = typeof (answer as { text?: unknown })?.text === "string"
    ? (answer as { text: string }).text
    : null;
  if (text === null || normalizeText(text).length === 0) return INVALID;
  return textResult(matchesAcceptedOrKeywords(text, question.acceptedAnswers, question.keywords));
}

/** Grade a submitted answer for any reading question format. */
export function gradeReadingQuestion(
  question: ReadingQuestion,
  answer: unknown,
): ReadingGradeResult {
  switch (question.format) {
    case "choice":
      return gradeChoice(question, answer);
    case "sequence":
      return gradeSequence(question, answer);
    case "short-text":
      return gradeShortText(question, answer);
    default:
      return INVALID;
  }
}

// ---------------------------------------------------------------------------
// Sanitisation — client-safe payloads
// ---------------------------------------------------------------------------

/**
 * Strip all grading data (correct answers, feedback with the answer inside)
 * and deterministically shuffle options/events. The seed keeps a shuffle
 * stable within one assessment run while varying between runs.
 */
export function toSafeReadingQuestion(
  question: ReadingQuestion,
  seed: string,
): SafeReadingQuestion {
  switch (question.format) {
    case "choice": {
      const { feedback: _f, correctOptionId: _c, ...safe } = question;
      return { ...safe, options: seededShuffle(safe.options, `${seed}:${question.id}`) };
    }
    case "sequence": {
      const { feedback: _f, correctOrder: _o, ...safe } = question;
      return { ...safe, events: seededShuffle(safe.events, `${seed}:${question.id}`) };
    }
    default: {
      const { feedback: _f, acceptedAnswers: _a, keywords: _k, ...safe } = question;
      return safe;
    }
  }
}

/** Human-readable form of the correct answer (used in review payloads). */
export function describeCorrectAnswer(question: ReadingQuestion): string {
  return question.feedback.correctAnswer;
}

/** Feedback payload returned after grading — always includes the feedback. */
export function readingFeedback(question: ReadingQuestion): ReadingFeedback {
  return question.feedback;
}
