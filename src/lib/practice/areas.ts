/**
 * PROMPT 36 — assessment areas.
 *
 * Course milestone assessments measure seven areas (PROMPT 36 §6). Six map
 * directly onto the engine skills; "sentence formation" is derived from the
 * construction exercise types (word arrangement, sentence building, sentence
 * completion, sentence correction), because those questions test whether the
 * learner can PRODUCE well-formed sentences, not just recognise rules.
 */

import type { Exercise, ExerciseType, Skill } from "@/data/curriculum/types";

export const ASSESSMENT_AREAS = [
  "grammar",
  "vocabulary",
  "sentence-formation",
  "reading",
  "writing",
  "listening",
  "speaking",
] as const;

export type AssessmentArea = (typeof ASSESSMENT_AREAS)[number];

export const AREA_LABELS: Record<AssessmentArea, string> = {
  grammar: "Grammar understanding",
  vocabulary: "Vocabulary knowledge",
  "sentence-formation": "Sentence formation",
  reading: "Reading comprehension",
  writing: "Writing ability",
  listening: "Listening comprehension",
  speaking: "Speaking development",
};

export const AREA_SHORT: Record<AssessmentArea, string> = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  "sentence-formation": "Sentence formation",
  reading: "Reading",
  writing: "Writing",
  listening: "Listening",
  speaking: "Speaking",
};

/** Exercise types that demonstrate sentence FORMATION rather than rule recall. */
const FORMATION_TYPES: ReadonlySet<ExerciseType> = new Set<ExerciseType>([
  "rearrange",
  "sentence-build",
  "complete-sentence",
  "correct-mistake",
]);

/** Map a question (or any graded item) to its assessment area. */
export function areaOf(item: {
  type: ExerciseType | string;
  skill: Skill | string;
}): AssessmentArea {
  if (FORMATION_TYPES.has(item.type as ExerciseType)) return "sentence-formation";
  switch (item.skill) {
    case "grammar":
      return "grammar";
    case "vocabulary":
      return "vocabulary";
    case "reading":
      return "reading";
    case "writing":
      return "writing";
    case "listening":
      return "listening";
    case "speaking":
      return "speaking";
    default:
      return "grammar";
  }
}

/** Convenience for a full exercise payload. */
export function areaOfExercise(exercise: Exercise): AssessmentArea {
  return areaOf({ type: exercise.type, skill: exercise.skill });
}
