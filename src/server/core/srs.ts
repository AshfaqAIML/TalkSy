/**
 * Spaced-repetition scheduling (SM-2 lite) for RevisionItem.
 *
 * The learner grades a review item correct or incorrect; the scheduler
 * decides when the item is due next. Pure functions — fully unit-tested
 * in tests/backend-srs.test.ts.
 */

export interface SrsState {
  intervalDays: number; // current scheduled interval
  easeFactor: number; // SM-2 ease, 1.3 .. 2.8
  repetitions: number; // successful consecutive reviews
  lapses: number; // times forgotten
}

export interface SrsOutcome extends SrsState {
  dueAt: Date;
}

export const MIN_EASE = 1.3;
export const MAX_EASE = 2.8;

/** Fresh item state — first review due in 1 day. */
export function initialSrsState(): SrsState {
  return { intervalDays: 1, easeFactor: 2.5, repetitions: 0, lapses: 0 };
}

/**
 * SM-2-lite transition.
 *
 * correct = true:
 *   repetitions += 1; interval = repetitions === 1 ? 1
 *                                   : repetitions === 2 ? 3
 *                                   : previous * ease; ease += 0.05
 * correct = false:
 *   repetitions = 0; interval = 1; lapses += 1; ease -= 0.2 (floor MIN_EASE)
 */
export function scheduleReview(state: SrsState, correct: boolean, now = new Date()): SrsOutcome {
  let { intervalDays, easeFactor, repetitions, lapses } = state;

  if (correct) {
    repetitions += 1;
    easeFactor = Math.min(MAX_EASE, easeFactor + 0.05);
    intervalDays =
      repetitions === 1 ? 1 : repetitions === 2 ? 3 : Math.round(intervalDays * easeFactor * 10) / 10;
  } else {
    repetitions = 0;
    lapses += 1;
    easeFactor = Math.max(MIN_EASE, easeFactor - 0.2);
    intervalDays = 1;
  }

  const dueAt = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);
  return { intervalDays, easeFactor, repetitions, lapses, dueAt };
}

/** Mastery heuristic: 4+ consecutive successes and interval ≥ 14 days. */
export function isMastered(state: SrsState): boolean {
  return state.repetitions >= 4 && state.intervalDays >= 14;
}

/** Revision item key for vocabulary words (stable business key). */
export function vocabItemKey(wordId: string): string {
  return `vocab:${wordId}`;
}
