/**
 * PROMPT 38 §7 — adaptive difficulty, trend-based.
 *
 * A pure, deterministic engine shared by the practice hub (session difficulty
 * preference + suggestion banner), the tutor context (so the tutor's own
 * practice items adapt) and the recommendation engine.
 *
 * HONESTY RULES baked in:
 *   - Never conclude from a single attempt: fewer than 5 graded attempts in
 *     the window → no suggestion at all, with the reason saying exactly that.
 *   - "Up" additionally requires a decent sample (≥8) AND a non-worsening
 *     recent trend (second half of the window not worse than the first).
 *   - The suggested band is always relative to the band the learner has
 *     actually been practising at (the dominant difficulty of their recent
 *     attempts), never a fresh guess.
 */

import type { Difficulty } from "@/data/curriculum/types";

export const DIFFICULTY_LADDER: Difficulty[] = ["easy", "medium", "hard", "challenge"];

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  challenge: "Challenge",
};

export interface TrendAttempt {
  isCorrect: boolean;
  difficulty: string;
}

export interface DifficultyTrend {
  /** The recommended working band, or null when there is not enough evidence. */
  suggestion: Difficulty | null;
  /** Human sentence quoting the actual numbers — shown to the learner. */
  reason: string;
  attemptsConsidered: number;
  /** Accuracy across the window (null when no attempts). */
  recentAccuracy: number | null;
}

export function isDifficulty(value: string): value is Difficulty {
  return (DIFFICULTY_LADDER as string[]).includes(value);
}

function rungOf(difficulty: Difficulty): number {
  return DIFFICULTY_LADDER.indexOf(difficulty);
}

function stepUp(difficulty: Difficulty): Difficulty {
  const next = rungOf(difficulty) + 1;
  return DIFFICULTY_LADDER[Math.min(next, DIFFICULTY_LADDER.length - 1)];
}

function stepDown(difficulty: Difficulty): Difficulty {
  const next = rungOf(difficulty) - 1;
  return DIFFICULTY_LADDER[Math.max(next, 0)];
}

function pct(value: number): string {
  return `${Math.round(value * 100)}%`;
}

/**
 * The band the learner has actually been working in: the most common
 * difficulty among their most recent attempts (ties → the more recent one's
 * band, so a just-started harder phase is respected).
 */
export function dominantDifficulty(attempts: TrendAttempt[]): Difficulty | null {
  const recent = attempts.slice(-10);
  if (recent.length === 0) return null;
  const counts = new Map<Difficulty, number>();
  for (const attempt of recent) {
    if (!isDifficulty(attempt.difficulty)) continue;
    counts.set(attempt.difficulty, (counts.get(attempt.difficulty) ?? 0) + 1);
  }
  if (counts.size === 0) return null;
  let best: Difficulty = "easy";
  let bestCount = -1;
  for (const attempt of recent) {
    if (!isDifficulty(attempt.difficulty)) continue;
    const count = counts.get(attempt.difficulty) ?? 0;
    if (count > bestCount) {
      best = attempt.difficulty;
      bestCount = count;
    }
  }
  return best;
}

/**
 * Assess the learner's recent performance and recommend a working band.
 * `attempts` should be the learner's graded attempts, oldest first (the
 * caller caps the window — the last 20 is the established app convention).
 */
export function assessDifficultyTrend(attempts: TrendAttempt[]): DifficultyTrend {
  const window = attempts.slice(-20);
  const n = window.length;
  if (n === 0) {
    return {
      suggestion: null,
      reason: "No graded practice yet — difficulty adapts after your first attempts.",
      attemptsConsidered: 0,
      recentAccuracy: null,
    };
  }

  const correct = window.filter((a) => a.isCorrect).length;
  const accuracy = correct / n;

  if (n < 5) {
    return {
      suggestion: null,
      reason: `Only ${n} graded attempt${n === 1 ? "" : "s"} so far — too few to judge a level fairly. Keep practising; the suggestion appears from five attempts.`,
      attemptsConsidered: n,
      recentAccuracy: accuracy,
    };
  }

  const dominant = dominantDifficulty(window) ?? "medium";
  const dominantLabel = DIFFICULTY_LABELS[dominant];

  // Trend: compare the two halves of the window (needs ≥6 to be meaningful).
  let secondHalf: number | null = null;
  let firstHalf: number | null = null;
  if (n >= 6) {
    const half = Math.floor(n / 2);
    const first = window.slice(0, half);
    const second = window.slice(half);
    firstHalf = first.filter((a) => a.isCorrect).length / first.length;
    secondHalf = second.filter((a) => a.isCorrect).length / second.length;
  }

  // Up: strong accuracy over a real sample AND not getting worse.
  if (accuracy >= 0.8 && n >= 8 && (secondHalf === null || secondHalf >= firstHalf!)) {
    const up = stepUp(dominant);
    // When both halves are equal, one number is enough — quoting the same
    // percentage twice reads like a copy bug.
    const trendNote =
      secondHalf !== null && firstHalf !== null
        ? secondHalf === firstHalf
          ? ` and your accuracy has been steady at ${pct(secondHalf)}`
          : ` and your recent half (${pct(secondHalf)}) is not below the earlier one (${pct(firstHalf)})`
        : "";
    return {
      suggestion: up,
      reason: `${pct(accuracy)} accuracy over ${n} attempts at ${dominantLabel}${trendNote} — that supports stepping up to ${DIFFICULTY_LABELS[up]}.`,
      attemptsConsidered: n,
      recentAccuracy: accuracy,
    };
  }

  // Down: accuracy clearly below half.
  if (accuracy < 0.5) {
    const down = stepDown(dominant);
    return {
      suggestion: down,
      reason: `${pct(accuracy)} accuracy over ${n} attempts at ${dominantLabel} — stepping down to ${DIFFICULTY_LABELS[down]} keeps practice productive instead of frustrating.`,
      attemptsConsidered: n,
      recentAccuracy: accuracy,
    };
  }

  // Maintain.
  return {
    suggestion: dominant,
    reason: `${pct(accuracy)} accuracy over ${n} attempts at ${dominantLabel} — staying at this level is the right call.`,
    attemptsConsidered: n,
    recentAccuracy: accuracy,
  };
}

/**
 * Apply a difficulty preference to a question pool: keep only the preferred
 * bands, but never below 4 questions — a preference must not empty the draw
 * (falls back to the full pool, honestly, and the caller keeps the original
 * order). Works on bank-shaped questions (difficulty lives at
 * `q.exercise.difficulty`).
 */
export function applyDifficultyPreference<T extends { exercise: { difficulty: string } }>(
  pool: T[],
  preferred: Difficulty[],
): T[] {
  if (preferred.length === 0) return pool;
  const filtered = pool.filter((q) =>
    preferred.includes(q.exercise.difficulty as Difficulty),
  );
  return filtered.length >= 4 ? filtered : pool;
}
