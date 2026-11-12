/**
 * Listening Lab — authoritative server-side grading and client sanitisation.
 *
 * Same contract as the reading grader: the client receives safe exercises
 * (no correct option ids, no accepted answers, no correct order), submits
 * raw answers to the API, and this module grades them against the authored
 * exercise. Grading reuses the engine's normalisation helpers.
 */

import type {
  ArrangeListeningExercise,
  ChoiceListeningExercise,
  CompleteListeningExercise,
  ListeningAnswer,
  ListeningExercise,
  ListeningFeedback,
  SafeListeningExercise,
  TextListeningExercise,
} from "@/data/listening/types";
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

export interface ListeningGradeResult {
  correct: boolean;
  /** 0–1 partial-credit score (1 = fully correct). */
  score: number;
  /** True when the submitted answer was malformed for the exercise format. */
  invalid: boolean;
}

const INVALID: ListeningGradeResult = { correct: false, score: 0, invalid: true };

function textResult(correct: boolean): ListeningGradeResult {
  return { correct, score: correct ? 1 : 0, invalid: false };
}

/** Coerce a client answer to one of the four grading shapes. */
function answerFormat(answer: unknown): ListeningAnswer | null {
  const a = answer as { format?: unknown; optionId?: unknown; blanks?: unknown; order?: unknown; text?: unknown };
  if (typeof a !== "object" || a === null) return null;
  if (a.format === "choice" && typeof a.optionId === "string") {
    return { format: "choice", optionId: a.optionId };
  }
  if (
    a.format === "complete" &&
    typeof a.blanks === "object" &&
    a.blanks !== null &&
    !Array.isArray(a.blanks)
  ) {
    const blanks: Record<string, string> = {};
    for (const [key, value] of Object.entries(a.blanks as Record<string, unknown>)) {
      if (typeof value !== "string") return null;
      blanks[key] = value;
    }
    return { format: "complete", blanks };
  }
  if (a.format === "arrange" && Array.isArray(a.order)) {
    if (!a.order.every((id): id is string => typeof id === "string")) return null;
    return { format: "arrange", order: a.order };
  }
  if (a.format === "text" && typeof a.text === "string") {
    return { format: "text", text: a.text };
  }
  return null;
}

function gradeChoice(
  exercise: ChoiceListeningExercise,
  answer: ListeningAnswer,
): ListeningGradeResult {
  if (answer.format !== "choice") return INVALID;
  if (!exercise.options.some((o) => o.id === answer.optionId)) return INVALID;
  return textResult(answer.optionId === exercise.correctOptionId);
}

function gradeComplete(
  exercise: CompleteListeningExercise,
  answer: ListeningAnswer,
): ListeningGradeResult {
  if (answer.format !== "complete") return INVALID;
  let filled = 0;
  let correct = 0;
  for (const blank of exercise.blanks) {
    const value = answer.blanks[blank.id];
    if (typeof value === "string" && value.trim().length > 0) {
      filled += 1;
      const normalized = normalizeWord(value);
      if (blank.acceptedAnswers.some((a) => normalizeWord(a) === normalized)) {
        correct += 1;
      }
    }
  }
  if (filled === 0) return INVALID;
  if (correct === exercise.blanks.length) return textResult(true);
  return {
    correct: false,
    score: Math.round((correct / exercise.blanks.length) * 100) / 100,
    invalid: false,
  };
}

function gradeArrange(
  exercise: ArrangeListeningExercise,
  answer: ListeningAnswer,
): ListeningGradeResult {
  if (answer.format !== "arrange") return INVALID;
  const itemIds = new Set(exercise.items.map((i) => i.id));
  const order = answer.order;
  if (order.length !== exercise.items.length) return INVALID;
  if (!order.every((id) => itemIds.has(id))) return INVALID;
  if (new Set(order).size !== order.length) return INVALID;
  let hits = 0;
  exercise.correctOrder.forEach((expectedId, index) => {
    if (order[index] === expectedId) hits += 1;
  });
  if (hits === exercise.correctOrder.length) return textResult(true);
  return {
    correct: false,
    score: Math.round((hits / exercise.correctOrder.length) * 100) / 100,
    invalid: false,
  };
}

function gradeText(
  exercise: TextListeningExercise,
  answer: ListeningAnswer,
): ListeningGradeResult {
  if (answer.format !== "text") return INVALID;
  const text = answer.text;
  if (normalizeText(text).length === 0) return INVALID;
  if (exercise.format === "dictation") {
    // Dictation demands exact transcription (with light typo tolerance).
    return textResult(exercise.acceptedAnswers.some((a) => sentencesCloseEnough(text, a)));
  }
  // listen-answer: accepted answers OR all keywords.
  if (exercise.acceptedAnswers.length > 0) {
    if (exercise.acceptedAnswers.some((a) => sentencesCloseEnough(text, a))) {
      return textResult(true);
    }
  }
  if (exercise.keywords && exercise.keywords.length > 0) {
    return textResult(containsAllKeywords(text, exercise.keywords));
  }
  return textResult(false);
}

/** Grade a submitted answer for any listening exercise format. */
export function gradeListeningExercise(
  exercise: ListeningExercise,
  answer: unknown,
): ListeningGradeResult {
  const parsed = answerFormat(answer);
  if (!parsed) return INVALID;
  switch (exercise.format) {
    case "listen-select":
    case "speaker-identify":
    case "specific-info":
    case "overall-meaning":
      return gradeChoice(exercise as ChoiceListeningExercise, parsed);
    case "listen-complete":
      return gradeComplete(exercise as CompleteListeningExercise, parsed);
    case "listen-arrange":
      return gradeArrange(exercise as ArrangeListeningExercise, parsed);
    case "listen-answer":
    case "dictation":
      return gradeText(exercise as TextListeningExercise, parsed);
    default:
      return INVALID;
  }
}

// ---------------------------------------------------------------------------
// Sanitisation — client-safe payloads
// ---------------------------------------------------------------------------

/** Strip all grading data (answers, feedback); deterministically shuffle choice options. */
export function toSafeListeningExercise(
  exercise: ListeningExercise,
  seed: string,
): SafeListeningExercise {
  switch (exercise.format) {
    case "listen-select":
    case "speaker-identify":
    case "specific-info":
    case "overall-meaning": {
      const { feedback: _f, correctOptionId: _c, ...safe } = exercise;
      return { ...safe, options: seededShuffle(safe.options, `${seed}:${exercise.id}`) };
    }
    case "listen-complete": {
      const { feedback: _f, blanks: _b, ...safe } = exercise;
      return { ...safe, blanks: exercise.blanks.map((b) => ({ id: b.id })) };
    }
    case "listen-arrange": {
      const { feedback: _f, correctOrder: _o, ...safe } = exercise;
      return { ...safe, items: seededShuffle(safe.items, `${seed}:${exercise.id}`) };
    }
    default: {
      const { feedback: _f, acceptedAnswers: _a, keywords: _k, ...safe } = exercise;
      return safe;
    }
  }
}

/** Feedback payload returned after grading — includes reveal segments. */
export function listeningFeedback(exercise: ListeningExercise): ListeningFeedback {
  return exercise.feedback;
}
