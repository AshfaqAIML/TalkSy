/**
 * PROMPT 36 — difficulty rubric.
 *
 * Difficulty reflects actual LINGUISTIC COMPLEXITY, never sentence length or
 * question count. Adding more words does not make an exercise harder; adding
 * structural demand does. This module is the authoring reference (used by the
 * question-bank QC and docs/PRACTICE_ENGINE.md) plus an honest machine
 * spot-check: structural complexity markers are compared against the label
 * and mismatches are reported as warnings (heuristics, clearly labelled as
 * such — the human review chain remains the authority).
 */

import type { Difficulty, Exercise } from "@/data/curriculum/types";

export const DIFFICULTY_RUBRIC: Record<
  Difficulty,
  { summary: string; criteria: string[] }
> = {
  easy: {
    summary:
      "Single-step recognition or recall. The target structure is one simple pattern the learner has already met directly.",
    criteria: [
      "one clause, simple tense (present/past simple, basic be/have/do)",
      "the answer is produced by recognising or copying, with no transformation",
      "all vocabulary is from the chapter's own word lists",
      "recognition tasks (choose, match, spot) dominate",
    ],
  },
  medium: {
    summary:
      "One applied step in a familiar pattern: the learner must apply a rule they practised, not just recall it.",
    criteria: [
      "still one clause, but the learner must APPLY the pattern (correct form of the verb, right article, right order)",
      "one transformation at most (negate, question, pluralise, compare)",
      "distractors are plausible: wrong options break the specific rule under test",
    ],
  },
  hard: {
    summary:
      "Two-step application or contrast: the learner must choose between similar structures or hold two rules at once.",
    criteria: [
      "contrasting structures appear (present simple vs continuous, a/an/the, comparatives vs superlatives)",
      "the learner must hold form AND meaning together (choose the tense that fits a time expression)",
      "wrong options are typical L1-influenced errors, not random",
    ],
  },
  challenge: {
    summary:
      "Multi-step application with real linguistic demand: several rules interact, or production is fully open.",
    criteria: [
      "several rules interact in one answer (word order + agreement + time expression)",
      "open production (write a paragraph, speak at length) judged against required elements",
      "the sentence under analysis carries subordinate clauses, reported speech, or passive voice",
      "the learner must explain WHY, not only produce",
    ],
  },
};

/**
 * Structural complexity marker used for spot checks (heuristic). Presence in
 * an "easy" question is suspicious; total absence from a hard/challenge
 * question is suspicious. Word count is deliberately NOT a marker.
 */
const SUBORDINATORS =
  /\b(because|although|though|whereas|unless|despite|however|if|when|while|which|that)\b/i;

/**
 * Difficulty coherence warnings for one question. Warnings never block
 * publishing on their own — the validator script surfaces them for human
 * review; errors in the same file DO block.
 */
export function difficultyWarnings(exercise: Exercise): string[] {
  const warnings: string[] = [];
  const label = exercise.difficulty;

  // Collect the text the learner actually reads.
  const readable = [
    exercise.prompt,
    ...("sentence" in exercise ? [String(exercise.sentence)] : []),
    ...("sentenceStart" in exercise ? [String(exercise.sentenceStart)] : []),
    ...("passage" in exercise ? [String(exercise.passage)] : []),
    ...("incorrectSentence" in exercise
      ? [String((exercise as { incorrectSentence: string }).incorrectSentence)]
      : []),
    ...("source" in exercise ? [String((exercise as { source: string }).source)] : []),
  ]
    .filter(Boolean)
    .join(" ");

  const hasSubordinator = SUBORDINATORS.test(readable);
  const wordCount = readable.split(/\s+/).filter(Boolean).length;

  if (label === "easy" && hasSubordinator) {
    warnings.push(
      "difficulty: labelled easy, but the text carries a subordinator/relative clause — consider medium or simplify the sentence",
    );
  }
  if (label === "medium" && wordCount > 60 && hasSubordinator) {
    warnings.push(
      "difficulty: medium question reads like a long multi-clause text — verify it is not actually hard",
    );
  }
  if ((label === "hard" || label === "challenge") && !hasSubordinator) {
    warnings.push(
      "difficulty: hard/challenge without any complex-structure marker — confirm the demand comes from rule interaction, not wording",
    );
  }
  if (label === "challenge" && exercise.type === "mcq") {
    warnings.push(
      "difficulty: challenge MCQs must require multi-step reasoning — a single-fact recall belongs at easy/medium",
    );
  }
  return warnings;
}
