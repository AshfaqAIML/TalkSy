/**
 * IELTS Listening Masterclass — the audio question bank (PROMPT 44, Part 5;
 * expanded by PROMPT 54 to one hundred recordings).
 *
 * One hundred original recordings: the sixteen PROMPT 44 flagship exercises
 * across the four test parts, plus the PROMPT 54 expansion — twenty-one
 * further recordings per part (twenty-five per part in total) spread across
 * the twelve unified topic domains, all difficulty tiers and every official
 * question family, with speaker and accent metadata, per-item answer keys,
 * keywords and designed distractor traps. Content is code: the bank service
 * serves safe projections (answer keys stripped) and grades server-side;
 * this module is the registry.
 *
 * Integrity is enforced by validateBank (validate.ts) — run through
 * scripts/validate-listening-bank.ts and tests/listening-masterclass.test.ts.
 */

import { part1Exercises } from "./part1";
import { part2Exercises } from "./part2";
import { part3Exercises } from "./part3";
import { part4Exercises } from "./part4";
import { expP1AExercises } from "./exp-p1-a";
import { expP1BExercises } from "./exp-p1-b";
import { expP1CExercises } from "./exp-p1-c";
import { expP2AExercises } from "./exp-p2-a";
import { expP2BExercises } from "./exp-p2-b";
import { expP2CExercises } from "./exp-p2-c";
import { expP3AExercises } from "./exp-p3-a";
import { expP3BExercises } from "./exp-p3-b";
import { expP3CExercises } from "./exp-p3-c";
import { expP4AExercises } from "./exp-p4-a";
import { expP4BExercises } from "./exp-p4-b";
import { expP4CExercises } from "./exp-p4-c";
import type { BankExercise } from "./types";

export const LISTENING_BANK: BankExercise[] = [
  ...part1Exercises,
  ...part2Exercises,
  ...part3Exercises,
  ...part4Exercises,
  // PROMPT 54 expansion — 84 further recordings (21 per part).
  ...expP1AExercises,
  ...expP1BExercises,
  ...expP1CExercises,
  ...expP2AExercises,
  ...expP2BExercises,
  ...expP2CExercises,
  ...expP3AExercises,
  ...expP3BExercises,
  ...expP3CExercises,
  ...expP4AExercises,
  ...expP4BExercises,
  ...expP4CExercises,
];

export function bankExerciseBySlug(slug: string): BankExercise | undefined {
  return LISTENING_BANK.find((e) => e.slug === slug);
}

export * from "./types";
export { validateBank } from "./validate";
