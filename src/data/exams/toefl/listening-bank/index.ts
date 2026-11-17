/**
 * TOEFL Listening Practice Library — the complete bank index (PROMPT 49).
 *
 * One hundred original exercises across the four current-format Listening
 * task types:
 *
 *   Listen and Choose a Response   25  (difficulty 1–5, 1–2 questions each)
 *   Listen to a Conversation       25  (two speakers, difficulty 1–5)
 *   Listen to an Announcement      25  (single voice, difficulty 1–5)
 *   Listen to an Academic Talk     25  (professor voice, difficulty 1–5)
 *
 * Audio model: every exercise IS an original recording authored as a
 * segment list with a speaker roster, spoken through on-device speech
 * synthesis with accent-matched voices, natural base rate and per-segment
 * pauses. Transcripts are gated: the safe projection ships the audio only;
 * the displayed transcript is returned by the grading endpoint after
 * submission, except for exercises flagged learningMode.
 */

import type { ToeflListeningExercise } from "./types";
import { respAExercises } from "./resp-a";
import { respBExercises } from "./resp-b";
import { conv1Exercises } from "./conv-1";
import { conv2Exercises } from "./conv-2";
import { conv3Exercises } from "./conv-3";
import { conv4Exercises } from "./conv-4";
import { conv5Exercises } from "./conv-5";
import { ann1Exercises } from "./ann-1";
import { ann2Exercises } from "./ann-2";
import { ann3Exercises } from "./ann-3";
import { ann4Exercises } from "./ann-4";
import { ann5Exercises } from "./ann-5";
import { talk1Exercises } from "./talk-1";
import { talk2Exercises } from "./talk-2";
import { talk3Exercises } from "./talk-3";
import { talk4Exercises } from "./talk-4";
import { talk5Exercises } from "./talk-5";

export * from "./types";
export * from "./validate";

/** The complete TOEFL listening practice library, in difficulty order. */
export const TOEFL_LISTENING_BANK: ToeflListeningExercise[] = [
  ...respAExercises,
  ...respBExercises,
  ...conv1Exercises,
  ...conv2Exercises,
  ...conv3Exercises,
  ...conv4Exercises,
  ...conv5Exercises,
  ...ann1Exercises,
  ...ann2Exercises,
  ...ann3Exercises,
  ...ann4Exercises,
  ...ann5Exercises,
  ...talk1Exercises,
  ...talk2Exercises,
  ...talk3Exercises,
  ...talk4Exercises,
  ...talk5Exercises,
];

export function listeningExerciseBySlug(slug: string): ToeflListeningExercise | undefined {
  return TOEFL_LISTENING_BANK.find((ex) => ex.slug === slug);
}

/** Counts per task type × difficulty tier, for the library dashboard. */
export function listeningBankStats(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const ex of TOEFL_LISTENING_BANK) {
    const key = `${ex.taskType}-d${ex.difficulty}`;
    stats[key] = (stats[key] ?? 0) + 1;
    stats[ex.taskType] = (stats[ex.taskType] ?? 0) + 1;
  }
  stats.total = TOEFL_LISTENING_BANK.length;
  return stats;
}

/** Question totals across the bank. */
export function listeningQuestionCount(): number {
  return TOEFL_LISTENING_BANK.reduce((a, ex) => a + ex.questions.length, 0);
}
