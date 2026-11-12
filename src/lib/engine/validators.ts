/**
 * Authoritative server-side answer validation for all 15 exercise types.
 *
 * The client never receives grading data — every "Check" submits the raw
 * answer here, the validator grades it, the attempt is persisted, and the
 * full feedback payload (correct answer, explanation, why-wrong, grammar
 * rule, similar example) is returned.
 */

import type {
  CompleteSentenceExercise,
  CorrectMistakeExercise,
  DictationExercise,
  DragDropExercise,
  Exercise,
  FillBlankExercise,
  ListenAnswerExercise,
  MatchExercise,
  McqExercise,
  MultiSelectExercise,
  RearrangeExercise,
  ReadAnswerExercise,
  SentenceBuildExercise,
  ShortAnswerExercise,
  SpeakResponseExercise,
  TranslateExercise,
  WriteResponseExercise,
} from "@/data/curriculum/types";
import {
  containsAllKeywords,
  countWords,
  normalizeText,
  normalizeWord,
  sentencesCloseEnough,
} from "./normalize";

export interface ValidationResult {
  correct: boolean;
  /** 0–1 partial-credit score (1 for fully correct). */
  score: number;
  /** True when the answer was malformed for the exercise type. */
  invalid: boolean;
}

const INVALID: ValidationResult = { correct: false, score: 0, invalid: true };

function textResult(correct: boolean): ValidationResult {
  return { correct, score: correct ? 1 : 0, invalid: false };
}

/** Any-of accepted answers with typo tolerance (word-level). */
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

// ---------------------------------------------------------------------------
// Per-type validators
// ---------------------------------------------------------------------------

function validateMcq(
  ex: Pick<McqExercise, "options" | "correctOptionId">,
  answer: unknown,
): ValidationResult {
  const optionId =
    typeof (answer as { optionId?: unknown })?.optionId === "string"
      ? (answer as { optionId: string }).optionId
      : null;
  if (!optionId || !ex.options.some((o) => o.id === optionId)) return INVALID;
  return textResult(optionId === ex.correctOptionId);
}

function validateMultiSelect(
  ex: MultiSelectExercise,
  answer: unknown,
): ValidationResult {
  const optionIds = Array.isArray((answer as { optionIds?: unknown })?.optionIds)
    ? (answer as { optionIds: unknown[] }).optionIds.filter(
        (id): id is string => typeof id === "string",
      )
    : null;
  if (!optionIds || optionIds.length === 0) return INVALID;
  const valid = new Set(ex.options.map((o) => o.id));
  if (!optionIds.every((id) => valid.has(id))) return INVALID;
  const selected = new Set(optionIds);
  const correct = new Set(ex.correctOptionIds);
  const hits = [...selected].filter((id) => correct.has(id)).length;
  if (hits === correct.size && selected.size === correct.size) {
    return textResult(true);
  }
  // Partial credit: hit ratio minus wrong picks.
  const wrongPicks = selected.size - hits;
  const ratio = Math.max(0, (hits - wrongPicks) / correct.size);
  return { correct: false, score: Math.round(ratio * 100) / 100, invalid: false };
}

function validateFillBlank(ex: FillBlankExercise, answer: unknown): ValidationResult {
  const text = typeof (answer as { text?: unknown })?.text === "string"
    ? (answer as { text: string }).text
    : null;
  if (text === null) return INVALID;
  const normalized = normalizeWord(text);
  if (normalized.length === 0) return INVALID;
  return textResult(
    ex.acceptedAnswers.some((a) => normalizeWord(a) === normalized),
  );
}

function validateMatch(ex: MatchExercise, answer: unknown): ValidationResult {
  const pairs = Array.isArray((answer as { pairs?: unknown })?.pairs)
    ? (answer as { pairs: unknown[] }).pairs
    : null;
  if (!pairs) return INVALID;
  const leftIds = new Set(ex.leftItems.map((i) => i.id));
  const rightIds = new Set(ex.rightItems.map((i) => i.id));
  const submitted = new Map<string, string>();
  for (const p of pairs) {
    const leftId = (p as { leftId?: unknown })?.leftId;
    const rightId = (p as { rightId?: unknown })?.rightId;
    if (typeof leftId !== "string" || typeof rightId !== "string") return INVALID;
    if (!leftIds.has(leftId) || !rightIds.has(rightId)) return INVALID;
    if (leftIds.has(leftId) && submitted.has(leftId)) return INVALID;
    submitted.set(leftId, rightId);
  }
  if (submitted.size !== ex.pairs.length) return INVALID;
  let hits = 0;
  for (const { leftId, rightId } of ex.pairs) {
    if (submitted.get(leftId) === rightId) hits += 1;
  }
  if (hits === ex.pairs.length) return textResult(true);
  return {
    correct: false,
    score: Math.round((hits / ex.pairs.length) * 100) / 100,
    invalid: false,
  };
}

function validateDragDrop(ex: DragDropExercise, answer: unknown): ValidationResult {
  const placements = Array.isArray((answer as { placements?: unknown })?.placements)
    ? (answer as { placements: unknown[] }).placements
    : null;
  if (!placements) return INVALID;
  const itemIds = new Set(ex.items.map((i) => i.id));
  const categoryIds = new Set(ex.categories.map((c) => c.id));
  const submitted = new Map<string, string>();
  for (const p of placements) {
    const itemId = (p as { itemId?: unknown })?.itemId;
    const categoryId = (p as { categoryId?: unknown })?.categoryId;
    if (typeof itemId !== "string" || typeof categoryId !== "string") return INVALID;
    if (!itemIds.has(itemId) || !categoryIds.has(categoryId)) return INVALID;
    if (submitted.has(itemId)) return INVALID;
    submitted.set(itemId, categoryId);
  }
  if (submitted.size !== ex.items.length) return INVALID;
  let hits = 0;
  for (const item of ex.items) {
    if (submitted.get(item.id) === item.categoryId) hits += 1;
  }
  if (hits === ex.items.length) return textResult(true);
  return {
    correct: false,
    score: Math.round((hits / ex.items.length) * 100) / 100,
    invalid: false,
  };
}

function validateRearrange(ex: RearrangeExercise, answer: unknown): ValidationResult {
  const tokens = Array.isArray((answer as { tokens?: unknown })?.tokens)
    ? (answer as { tokens: unknown[] }).tokens.filter(
        (t): t is string => typeof t === "string",
      )
    : null;
  if (!tokens || tokens.length !== ex.correctTokens.length) return INVALID;
  const correct = normalizeText(ex.correctTokens.join(" "));
  const submitted = normalizeText(tokens.join(" "));
  return textResult(submitted === correct);
}

function validateTextAnswer(
  answer: unknown,
  accepted: string[],
  keywords?: string[],
): ValidationResult {
  const text = typeof (answer as { text?: unknown })?.text === "string"
    ? (answer as { text: string }).text
    : null;
  if (text === null || normalizeText(text).length === 0) return INVALID;
  return textResult(matchesAcceptedOrKeywords(text, accepted, keywords));
}

function validateDictation(
  ex: DictationExercise,
  answer: unknown,
): ValidationResult {
  const text = typeof (answer as { text?: unknown })?.text === "string"
    ? (answer as { text: string }).text
    : null;
  if (text === null || normalizeText(text).length === 0) return INVALID;
  // Dictation demands exact transcription (with light typo tolerance).
  return textResult(
    ex.acceptedAnswers.some((a) => sentencesCloseEnough(text, a)),
  );
}

function validateWriteResponse(
  ex: WriteResponseExercise,
  answer: unknown,
): ValidationResult {
  const text = typeof (answer as { text?: unknown })?.text === "string"
    ? (answer as { text: string }).text
    : null;
  if (text === null || normalizeText(text).length === 0) return INVALID;
  const words = countWords(text);
  if (words < ex.minWords) return textResult(false);
  if (ex.mustInclude && ex.mustInclude.length > 0) {
    return textResult(containsAllKeywords(text, ex.mustInclude));
  }
  return textResult(true);
}

function validateSpeakResponse(
  ex: SpeakResponseExercise,
  answer: unknown,
): ValidationResult {
  const text = typeof (answer as { text?: unknown })?.text === "string"
    ? (answer as { text: string }).text
    : null;
  if (text === null || normalizeText(text).length === 0) return INVALID;
  if (ex.mustSay.length === 0) return textResult(true);
  return textResult(containsAllKeywords(text, ex.mustSay));
}

function validateSentenceBuild(
  ex: SentenceBuildExercise,
  answer: unknown,
): ValidationResult {
  const tokens = Array.isArray((answer as { tokens?: unknown })?.tokens)
    ? (answer as { tokens: unknown[] }).tokens.filter(
        (t): t is string => typeof t === "string",
      )
    : null;
  if (!tokens || tokens.length === 0) return INVALID;
  const normalize = (s: string) =>
    s
      .split(/\s+/)
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean)
      .join(" ");
  const submitted = normalize(tokens.join(" "));
  if (submitted.length === 0) return INVALID;
  // Alternative valid answers: any accepted sequence counts.
  return textResult(
    ex.acceptedSentences.some((accepted) => normalize(accepted) === submitted),
  );
}

/**
 * Grade a submitted answer for any exercise type.
 * Unknown/missing answer shapes return `{ invalid: true }` and are recorded
 * as incorrect — the client gets a clear "answer not understood" message.
 */
export function validateAnswer(
  exercise: Exercise,
  answer: unknown,
): ValidationResult {
  switch (exercise.type) {
    case "mcq":
    case "read-answer": {
      const ex = exercise as McqExercise | ReadAnswerExercise;
      return validateMcq(
        { options: ex.options, correctOptionId: ex.correctOptionId },
        answer,
      );
    }
    case "multi-select":
      return validateMultiSelect(exercise as MultiSelectExercise, answer);
    case "fill-blank":
      return validateFillBlank(exercise as FillBlankExercise, answer);
    case "match":
      return validateMatch(exercise as MatchExercise, answer);
    case "drag-drop":
      return validateDragDrop(exercise as DragDropExercise, answer);
    case "rearrange":
      return validateRearrange(exercise as RearrangeExercise, answer);
    case "complete-sentence":
    case "correct-mistake":
    case "translate":
    case "short-answer":
    case "listen-answer": {
      const ex = exercise as
        | CompleteSentenceExercise
        | CorrectMistakeExercise
        | TranslateExercise
        | ShortAnswerExercise
        | ListenAnswerExercise;
      const keywords =
        ex.type === "complete-sentence" || ex.type === "short-answer" || ex.type === "listen-answer"
          ? ex.keywords
          : undefined;
      return validateTextAnswer(answer, ex.acceptedAnswers, keywords);
    }
    case "dictation":
      return validateDictation(exercise as DictationExercise, answer);
    case "write-response":
      return validateWriteResponse(exercise as WriteResponseExercise, answer);
    case "speak-response":
      return validateSpeakResponse(exercise as SpeakResponseExercise, answer);
    case "sentence-build":
      return validateSentenceBuild(exercise as SentenceBuildExercise, answer);
    default:
      return INVALID;
  }
}
