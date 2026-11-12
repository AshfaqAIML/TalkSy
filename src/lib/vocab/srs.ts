/**
 * Configurable spaced-repetition scheduler (SM-2 inspired, adapted for ESL).
 *
 * Design rules:
 *  - A word is NEVER permanently mastered after one correct answer. "Mastered"
 *    requires `masterRepetitions` consecutive successful reviews AND an
 *    interval of at least `masterIntervalDays` — and even then the word keeps
 *    being scheduled (intervals are capped at `maxIntervalDays`), so it always
 *    returns. Any "again" demotes it back to learning.
 *  - Intervals consider: previous performance (recent accuracy factor), number
 *    of reviews (repetitions & learning steps), correctness (the rating), the
 *    learner's own difficulty flag, and the previous recall interval.
 *  - Everything is configurable per learner (VocabSettings) on top of the
 *    defaults below; resolveSrsConfig validates and clamps every knob.
 */

export type SrsRating = "again" | "hard" | "good" | "easy";
export type SrsStatus = "learning" | "reviewing" | "mastered";

export const MINUTES_PER_DAY = 24 * 60;

export interface SrsConfig {
  /** New words introduced per day (daily revision queue budget). */
  newPerDay: number;
  /** Maximum reviews served per day. */
  reviewsPerDay: number;
  /** Short learning steps in minutes, e.g. [1, 10]. */
  learningStepMinutes: number[];
  /** First interval after graduating from the learning steps (days). */
  graduateIntervalDays: number;
  /** Interval multiplier bonus for "easy" ratings. */
  easyBonus: number;
  /** Interval multiplier for "hard" ratings (ease unchanged by the multiply). */
  hardFactor: number;
  minEase: number;
  maxEase: number;
  easeDeltaAgain: number;
  easeDeltaHard: number;
  easeDeltaEasy: number;
  /** Interval multiplier applied after forgetting ("again"). */
  lapseFactor: number;
  /** Growth multiplier for words the learner flagged as difficult. */
  difficultFactor: number;
  /** How much recent accuracy scales intervals (0 = off, 0.15 = ±15%). */
  performanceWeight: number;
  /** Consecutive successful reviews required for "mastered". */
  masterRepetitions: number;
  /** Interval (days) required for "mastered". */
  masterIntervalDays: number;
  /** Hard cap — keeps mastered words returning forever. */
  maxIntervalDays: number;
}

export const DEFAULT_SRS_CONFIG: SrsConfig = {
  newPerDay: 10,
  reviewsPerDay: 40,
  learningStepMinutes: [1, 10],
  graduateIntervalDays: 1,
  easyBonus: 1.3,
  hardFactor: 1.2,
  minEase: 1.3,
  maxEase: 2.8,
  easeDeltaAgain: -0.2,
  easeDeltaHard: -0.15,
  easeDeltaEasy: 0.15,
  lapseFactor: 0.5,
  difficultFactor: 0.8,
  performanceWeight: 0.15,
  masterRepetitions: 5,
  masterIntervalDays: 21,
  maxIntervalDays: 365,
};

export type SrsConfigOverrides = Partial<SrsConfig>;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Merge user overrides over the defaults; clamps every knob to a sane range. */
export function resolveSrsConfig(overrides: SrsConfigOverrides = {}): SrsConfig {
  const o = overrides;
  const steps = Array.isArray(o.learningStepMinutes)
    ? o.learningStepMinutes.filter((n) => n > 0 && n <= 120)
    : [];
  return {
    newPerDay: clamp(Math.round(o.newPerDay ?? DEFAULT_SRS_CONFIG.newPerDay), 1, 100),
    reviewsPerDay: clamp(Math.round(o.reviewsPerDay ?? DEFAULT_SRS_CONFIG.reviewsPerDay), 1, 200),
    learningStepMinutes: steps.length > 0
      ? steps.slice(0, 6).map((n) => Math.round(n))
      : DEFAULT_SRS_CONFIG.learningStepMinutes,
    graduateIntervalDays: clamp(o.graduateIntervalDays ?? DEFAULT_SRS_CONFIG.graduateIntervalDays, 1, 10),
    easyBonus: clamp(o.easyBonus ?? DEFAULT_SRS_CONFIG.easyBonus, 1.05, 2),
    hardFactor: clamp(o.hardFactor ?? DEFAULT_SRS_CONFIG.hardFactor, 1.05, 1.5),
    minEase: clamp(o.minEase ?? DEFAULT_SRS_CONFIG.minEase, 1.1, 2),
    maxEase: clamp(o.maxEase ?? DEFAULT_SRS_CONFIG.maxEase, 2.2, 3.5),
    easeDeltaAgain: clamp(o.easeDeltaAgain ?? DEFAULT_SRS_CONFIG.easeDeltaAgain, -0.4, -0.05),
    easeDeltaHard: clamp(o.easeDeltaHard ?? DEFAULT_SRS_CONFIG.easeDeltaHard, -0.3, 0),
    easeDeltaEasy: clamp(o.easeDeltaEasy ?? DEFAULT_SRS_CONFIG.easeDeltaEasy, 0, 0.4),
    lapseFactor: clamp(o.lapseFactor ?? DEFAULT_SRS_CONFIG.lapseFactor, 0.2, 0.9),
    difficultFactor: clamp(o.difficultFactor ?? DEFAULT_SRS_CONFIG.difficultFactor, 0.5, 1),
    performanceWeight: clamp(o.performanceWeight ?? DEFAULT_SRS_CONFIG.performanceWeight, 0, 0.4),
    // One correct answer can never master a word: >= 2 repetitions required.
    masterRepetitions: clamp(
      o.masterRepetitions ?? DEFAULT_SRS_CONFIG.masterRepetitions,
      2,
      20,
    ),
    masterIntervalDays: clamp(
      o.masterIntervalDays ?? DEFAULT_SRS_CONFIG.masterIntervalDays,
      1,
      90,
    ),
    maxIntervalDays: clamp(o.maxIntervalDays ?? DEFAULT_SRS_CONFIG.maxIntervalDays, 30, 3650),
  };
}

// ---------------------------------------------------------------------------
// Card state & grading
// ---------------------------------------------------------------------------

export interface SrsCardState {
  status: SrsStatus;
  /** Consecutive successful reviews (reset by "again"). */
  repetitions: number;
  streak: number;
  /** Times the learner forgot the word. */
  lapses: number;
  ease: number;
  /** Currently scheduled interval, in minutes. */
  intervalMinutes: number;
  dueAt: Date | null;
  /** The learner's own "this word is difficult for me" flag. */
  isDifficult: boolean;
}

/** The implicit state of a word the learner has never reviewed. */
export function newCardState(now: Date): SrsCardState {
  return {
    status: "learning",
    repetitions: 0,
    streak: 0,
    lapses: 0,
    ease: DEFAULT_SRS_CONFIG.maxEase,
    intervalMinutes: 0,
    dueAt: now,
    isDifficult: false,
  };
}

export interface GradeInput {
  rating: SrsRating;
  /**
   * Correct ratio over the learner's recent reviews of THIS word (0–1),
   * or null when there is no history yet. Scales the next interval.
   */
  recentAccuracy: number | null;
  now: Date;
}

/** How much recent performance scales the next interval (±performanceWeight). */
export function performanceFactor(
  recentAccuracy: number | null,
  config: SrsConfig,
): number {
  if (recentAccuracy === null || config.performanceWeight === 0) return 1;
  const centered = clamp(recentAccuracy, 0, 1) * 2 - 1; // −1 … +1
  return 1 + config.performanceWeight * centered;
}

/**
 * The scheduler. Pure: (state, rating, config) → next state.
 * See the module doc for the guarantees (no one-shot mastery).
 */
export function gradeCard(
  state: SrsCardState,
  input: GradeInput,
  config: SrsConfig,
): SrsCardState {
  const { rating, now } = input;
  const steps = config.learningStepMinutes;
  const ease = (delta: number) => clamp(state.ease + delta, config.minEase, config.maxEase);

  // --- Forgot the word -----------------------------------------------------
  if (rating === "again") {
    const wasReviewing = state.status !== "learning";
    const previousIntervalDays = state.intervalMinutes / MINUTES_PER_DAY;
    const relearnMinutes =
      wasReviewing && previousIntervalDays >= 1
        ? Math.max(
            steps[0],
            Math.round(previousIntervalDays * config.lapseFactor * MINUTES_PER_DAY),
          )
        : steps[0];
    return {
      status: "learning",
      repetitions: 0,
      streak: 0,
      lapses: state.lapses + 1,
      ease: ease(config.easeDeltaAgain),
      intervalMinutes: relearnMinutes,
      dueAt: new Date(now.getTime() + relearnMinutes * 60_000),
      isDifficult: state.isDifficult,
    };
  }

  // --- Successful review ---------------------------------------------------
  const nextRepetitions = state.repetitions + 1;
  const perf = performanceFactor(input.recentAccuracy, config) *
    (state.isDifficult ? config.difficultFactor : 1);

  if (state.status === "learning") {
    // Still walking the learning steps.
    if (rating === "easy") {
      // Graduate immediately with a bonus.
      const interval = Math.round(config.graduateIntervalDays * config.easyBonus * MINUTES_PER_DAY);
      return {
        status: "reviewing",
        repetitions: nextRepetitions,
        streak: state.streak + 1,
        lapses: state.lapses,
        ease: ease(config.easeDeltaEasy),
        intervalMinutes: interval,
        dueAt: new Date(now.getTime() + interval * 60_000),
        isDifficult: state.isDifficult,
      };
    }
    if (rating === "hard") {
      // Repeat the current learning step.
      const stepIndex = Math.max(0, Math.min(state.repetitions, steps.length - 1));
      const interval = steps[stepIndex];
      return {
        status: "learning",
        repetitions: state.repetitions,
        streak: state.streak,
        lapses: state.lapses,
        ease: ease(config.easeDeltaHard),
        intervalMinutes: interval,
        dueAt: new Date(now.getTime() + interval * 60_000),
        isDifficult: state.isDifficult,
      };
    }
    // "good": advance one learning step, or graduate.
    if (nextRepetitions < steps.length) {
      const interval = steps[nextRepetitions];
      return {
        status: "learning",
        repetitions: nextRepetitions,
        streak: state.streak + 1,
        lapses: state.lapses,
        ease: state.ease,
        intervalMinutes: interval,
        dueAt: new Date(now.getTime() + interval * 60_000),
        isDifficult: state.isDifficult,
      };
    }
    // Graduate to real spaced repetition.
    const interval = Math.round(config.graduateIntervalDays * MINUTES_PER_DAY * perf);
    return {
      status: "reviewing",
      repetitions: nextRepetitions,
      streak: state.streak + 1,
      lapses: state.lapses,
      ease: state.ease,
      intervalMinutes: interval,
      dueAt: new Date(now.getTime() + interval * 60_000),
      isDifficult: state.isDifficult,
    };
  }

  // --- Reviewing / mastered: full SM-2 style scheduling ---------------------
  const nextEase = ease(rating === "easy" ? config.easeDeltaEasy : rating === "hard" ? config.easeDeltaHard : 0);
  const baseMinutes = Math.max(state.intervalMinutes, config.graduateIntervalDays * MINUTES_PER_DAY);
  let multiplier: number;
  if (rating === "easy") multiplier = nextEase * config.easyBonus;
  else if (rating === "hard") multiplier = config.hardFactor;
  else multiplier = nextEase;
  multiplier *= perf;

  const minInterval = config.graduateIntervalDays * MINUTES_PER_DAY;
  const maxInterval = config.maxIntervalDays * MINUTES_PER_DAY;
  const interval = Math.round(clamp(baseMinutes * multiplier, minInterval, maxInterval));
  const intervalDays = interval / MINUTES_PER_DAY;

  const mastered =
    nextRepetitions >= config.masterRepetitions &&
    intervalDays >= config.masterIntervalDays;

  return {
    status: mastered ? "mastered" : "reviewing",
    repetitions: nextRepetitions,
    streak: state.streak + 1,
    lapses: state.lapses,
    ease: nextEase,
    intervalMinutes: interval,
    dueAt: new Date(now.getTime() + interval * 60_000),
    isDifficult: state.isDifficult,
  };
}

/** True when the word is currently scheduled (has a due date). */
export function isDue(state: SrsCardState | undefined, now: Date): boolean {
  if (!state || !state.dueAt) return false;
  return state.dueAt.getTime() <= now.getTime();
}

// ---------------------------------------------------------------------------
// Daily revision queue
// ---------------------------------------------------------------------------

export interface ProgressSnapshot {
  wordId: string;
  status: SrsStatus;
  intervalMinutes: number;
  dueAt: Date | null;
}

export interface DailyQueuePlan {
  /** Due reviews: learning words first, then most-overdue. */
  reviewWordIds: string[];
  /** Fresh words from the library order, within today's new-word budget. */
  newWordIds: string[];
  counts: {
    dueLearning: number;
    dueReviews: number;
    newToday: number;
    newRemaining: number;
    reviewRemaining: number;
    /** Words in the plan (reviews + new). */
    total: number;
  };
}

/**
 * Plan a study session: every word whose dueAt has passed (capped by
 * reviewsPerDay) plus new words up to today's remaining new-word budget.
 * `allWordIds` is the full library in a stable order; words without a progress
 * snapshot are "new".
 */
export function planDailySession(
  allWordIds: string[],
  progress: Map<string, ProgressSnapshot>,
  options: { now: Date; config: SrsConfig; newSeenToday: number },
): DailyQueuePlan {
  const { now, config, newSeenToday } = options;

  const dueLearning: string[] = [];
  const dueReviewing: string[] = [];
  for (const snapshot of progress.values()) {
    if (!snapshot.dueAt || snapshot.dueAt.getTime() > now.getTime()) continue;
    if (snapshot.status === "learning") dueLearning.push(snapshot.wordId);
    else dueReviewing.push(snapshot.wordId);
  }
  // Learning cards are the most urgent; within each group, most overdue first.
  const byMostOverdue = (a: string, b: string) => {
    const da = progress.get(a)?.dueAt?.getTime() ?? 0;
    const db = progress.get(b)?.dueAt?.getTime() ?? 0;
    return da - db;
  };
  dueLearning.sort(byMostOverdue);
  dueReviewing.sort(byMostOverdue);

  const reviews = [...dueLearning, ...dueReviewing].slice(0, config.reviewsPerDay);

  const newRemaining = Math.max(0, config.newPerDay - newSeenToday);
  const newWordIds: string[] = [];
  for (const wordId of allWordIds) {
    if (newWordIds.length >= newRemaining) break;
    if (progress.has(wordId)) continue;
    newWordIds.push(wordId);
  }

  return {
    reviewWordIds: reviews,
    newWordIds,
    counts: {
      dueLearning: dueLearning.length,
      dueReviews: dueLearning.length + dueReviewing.length,
      newToday: newSeenToday,
      newRemaining: Math.max(0, config.newPerDay - newSeenToday - newWordIds.length),
      reviewRemaining: Math.max(0, dueLearning.length + dueReviewing.length - reviews.length),
      total: reviews.length + newWordIds.length,
    },
  };
}

// ---------------------------------------------------------------------------
// Human-readable intervals
// ---------------------------------------------------------------------------

export function describeInterval(minutes: number): string {
  if (minutes <= 0) return "now";
  if (minutes < 60) return `in ${minutes} min`;
  if (minutes < MINUTES_PER_DAY) {
    const hours = Math.round(minutes / 60);
    return `in ${hours} h`;
  }
  const days = Math.round(minutes / MINUTES_PER_DAY);
  if (days === 1) return "in 1 day";
  if (days < 30) return `in ${days} days`;
  const months = Math.round(days / 30);
  return months === 1 ? "in 1 month" : `in ${months} months`;
}

export function describeDue(dueAt: Date | null, now: Date = new Date()): string {
  if (!dueAt) return "not scheduled";
  const diffMin = Math.round((dueAt.getTime() - now.getTime()) / 60_000);
  if (diffMin <= 0) return "due now";
  return describeInterval(diffMin);
}
