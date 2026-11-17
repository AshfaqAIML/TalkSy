/**
 * TOEFL Speaking Practice Library — the complete bank index (PROMPT 50).
 *
 * One hundred original items across the two current-format TOEFL iBT
 * Speaking task types:
 *
 *   Listen and Repeat  50  (progressive difficulty d1–d5, sentence lengths
 *                          3–26 words, repetition windows 8/10/12 seconds,
 *                          four accents with a North-American majority,
 *                          12 focus tags; d1 items are learning mode)
 *   Take an Interview  50  (20 distinct topics, d1–d5, preparation and
 *                          answer-time guidance, sample responses,
 *                          vocabulary suggestions, feedback criteria)
 *
 * Every item passes the integrity validator; the bank as a whole passes the
 * distribution and originality checks in validate.ts.
 */

import type { ToeflSpeakingExercise } from "./types";
import { repeat1Items } from "./repeat-1";
import { repeat2Items } from "./repeat-2";
import { interview1Items } from "./interview-1";
import { interview2Items } from "./interview-2";

export * from "./types";
export * from "./validate";

/** The complete TOEFL speaking practice library, in slug order. */
export const TOEFL_SPEAKING_BANK: ToeflSpeakingExercise[] = [
  ...repeat1Items,
  ...repeat2Items,
  ...interview1Items,
  ...interview2Items,
];

export function speakingExerciseBySlug(slug: string): ToeflSpeakingExercise | undefined {
  return TOEFL_SPEAKING_BANK.find((ex) => ex.slug === slug);
}

/** Counts per task type × difficulty tier, for the library dashboard. */
export function speakingBankStats(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const ex of TOEFL_SPEAKING_BANK) {
    const key = `${ex.taskType}-d${ex.difficulty}`;
    stats[key] = (stats[key] ?? 0) + 1;
    stats[ex.taskType] = (stats[ex.taskType] ?? 0) + 1;
    if (ex.taskType === "listen-repeat") stats[`focus-${ex.focus}`] = (stats[`focus-${ex.focus}`] ?? 0) + 1;
    else stats[`topic-${ex.topic}`] = (stats[`topic-${ex.topic}`] ?? 0) + 1;
  }
  stats.total = TOEFL_SPEAKING_BANK.length;
  return stats;
}

/** Distinct focus tags and topics, for the variety claim. */
export function speakingBankVariety(): { accents: string[]; focusTags: string[]; topics: string[] } {
  const accents = new Set<string>();
  const focusTags = new Set<string>();
  const topics = new Set<string>();
  for (const ex of TOEFL_SPEAKING_BANK) {
    if (ex.taskType === "listen-repeat") { accents.add(ex.accent); focusTags.add(ex.focus); }
    else topics.add(ex.topic);
  }
  return {
    accents: [...accents].sort(),
    focusTags: [...focusTags].sort(),
    topics: [...topics].sort(),
  };
}
