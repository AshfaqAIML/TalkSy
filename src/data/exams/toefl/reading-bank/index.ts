/**
 * TOEFL Reading Practice Library — the complete bank index (PROMPT 49).
 *
 * One hundred original exercises across the three current-format Reading
 * task types:
 *
 *   Complete the Words    34  (difficulty 1–5)
 *   Read in Daily Life    33  (difficulty 1–5, 22 distinct text kinds)
 *   Read an Academic Passage 33 (difficulty 1–5, 20 distinct subjects)
 *
 * Every exercise passes the integrity validator; the bank as a whole passes
 * the distribution and originality checks in validate.ts.
 */

import type { ToeflReadingExercise } from "./types";
import { words1Exercises } from "./words-1";
import { words2Exercises } from "./words-2";
import { words3Exercises } from "./words-3";
import { words4Exercises } from "./words-4";
import { words5Exercises } from "./words-5";
import { daily1Exercises } from "./daily-1";
import { daily2Exercises } from "./daily-2";
import { daily3Exercises } from "./daily-3";
import { daily4Exercises } from "./daily-4";
import { daily5Exercises } from "./daily-5";
import { acad1Exercises } from "./acad-1";
import { acad2Exercises } from "./acad-2";
import { acad3Exercises } from "./acad-3";
import { acad4Exercises } from "./acad-4";
import { acad5Exercises } from "./acad-5";

export * from "./types";
export * from "./validate";

/** The complete TOEFL reading practice library, in difficulty order. */
export const TOEFL_READING_BANK: ToeflReadingExercise[] = [
  ...words1Exercises,
  ...words2Exercises,
  ...words3Exercises,
  ...words4Exercises,
  ...words5Exercises,
  ...daily1Exercises,
  ...daily2Exercises,
  ...daily3Exercises,
  ...daily4Exercises,
  ...daily5Exercises,
  ...acad1Exercises,
  ...acad2Exercises,
  ...acad3Exercises,
  ...acad4Exercises,
  ...acad5Exercises,
];

export function readingExerciseBySlug(slug: string): ToeflReadingExercise | undefined {
  return TOEFL_READING_BANK.find((ex) => ex.slug === slug);
}

/** Counts per task type × difficulty tier, for the library dashboard. */
export function readingBankStats(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const ex of TOEFL_READING_BANK) {
    const key = `${ex.taskType}-d${ex.difficulty}`;
    stats[key] = (stats[key] ?? 0) + 1;
    stats[ex.taskType] = (stats[ex.taskType] ?? 0) + 1;
  }
  stats.total = TOEFL_READING_BANK.length;
  return stats;
}

/** Distinct subject/topic/text-kind labels, for the variety claim. */
export function readingBankSubjects(): { completeWords: string[]; dailyLife: string[]; academic: string[] } {
  const cw = new Set<string>();
  const dl = new Set<string>();
  const ac = new Set<string>();
  for (const ex of TOEFL_READING_BANK) {
    if (ex.taskType === "complete-words") cw.add(ex.topic);
    else if (ex.taskType === "daily-life") dl.add(`${ex.textKind}`);
    else ac.add(ex.subject);
  }
  return {
    completeWords: [...cw].sort(),
    dailyLife: [...dl].sort(),
    academic: [...ac].sort(),
  };
}
