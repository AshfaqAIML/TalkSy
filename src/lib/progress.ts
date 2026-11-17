import { db } from "@/lib/db";

/**
 * TalkSy progress engine: XP rules, streak computation and daily
 * activity bookkeeping. All numbers here are derived from real user events
 * (exercise attempts and lesson completions) — nothing is simulated.
 */

/** XP awarded for a single correct graded exercise attempt. */
export const XP_PER_CORRECT_EXERCISE = 10;
/** XP awarded when a lesson is completed (once per completion event). */
export const XP_LESSON_BONUS = 20;
/**
 * Word-strength thresholds live in src/lib/learning-stats.ts (client-safe,
 * single source of truth) — re-exported here for the server modules that
 * historically imported them from this file.
 */
export { LEARNED_WORD_STRENGTH, MAX_WORD_STRENGTH } from "@/lib/learning-stats";

/* Local (server) date key — UTC+ day bucket used consistently across app. */
export function todayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

function shiftDays(key: string, days: number): string {
  const d = new Date(key + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return todayKey(d);
}

/* ------------------------------------------------------------------ */
/* Daily activity                                                      */
/* ------------------------------------------------------------------ */

export async function recordActivity(
  userId: string,
  delta: {
    xp?: number;
    lessonsCompleted?: number;
    exercisesCompleted?: number;
  }
): Promise<void> {
  const date = todayKey();
  await db.dailyActivity.upsert({
    where: { userId_date: { userId, date } },
    create: {
      userId,
      date,
      xpEarned: delta.xp ?? 0,
      lessonsCompleted: delta.lessonsCompleted ?? 0,
      exercisesCompleted: delta.exercisesCompleted ?? 0,
    },
    update: {
      xpEarned: { increment: delta.xp ?? 0 },
      lessonsCompleted: { increment: delta.lessonsCompleted ?? 0 },
      exercisesCompleted: { increment: delta.exercisesCompleted ?? 0 },
    },
  });
}

/* ------------------------------------------------------------------ */
/* Streak                                                             */
/* ------------------------------------------------------------------ */

export interface StreakInfo {
  current: number;
  /** true when the user already met today's activity threshold */
  activeToday: boolean;
}

/** A day counts towards a streak when the user completed ≥1 lesson or ≥3 exercises. */
export function isActivityDay(a: {
  lessonsCompleted: number;
  exercisesCompleted: number;
}): boolean {
  return a.lessonsCompleted > 0 || a.exercisesCompleted >= 3;
}

/**
 * Computes the current streak from daily activity rows.
 * The streak counts consecutive activity days ending today (or yesterday —
 * today's streak is preserved until the day is over).
 */
export function computeStreak(
  activities: { date: string; lessonsCompleted: number; exercisesCompleted: number }[]
): StreakInfo {
  const byDate = new Map(activities.map((a) => [a.date, a]));
  const today = todayKey();
  const todayRow = byDate.get(today);
  const activeToday = todayRow ? isActivityDay(todayRow) : false;

  let streak = 0;
  let cursor = activeToday ? today : shiftDays(today, -1);
  // If yesterday has activity, count back from yesterday; else if only today,
  // the streak is at least today's day when active.
  while (true) {
    const row = byDate.get(cursor);
    if (row && isActivityDay(row)) {
      streak += 1;
      cursor = shiftDays(cursor, -1);
    } else {
      break;
    }
  }
  return { current: streak, activeToday };
}

/* ------------------------------------------------------------------ */
/* Lesson completion XP                                               */
/* ------------------------------------------------------------------ */

export interface LessonCompletionResult {
  xpEarned: number;
  accuracy: number; // 0..100
  firstCompletion: boolean;
}

/**
 * Computes XP for finishing a lesson based on the attempts the server has
 * already recorded for this user in this lesson (server-authoritative —
 * the client cannot inflate its own XP).
 *
 * Only gradable exercises (everything except speaking) count towards
 * accuracy, so ungraded speaking practice can never skew the score.
 */
export async function computeLessonCompletion(
  userId: string,
  lessonSlug: string,
  gradableExerciseIds: string[]
): Promise<LessonCompletionResult> {
  const attempts = await db.exerciseAttempt.findMany({
    where: { userId, lessonSlug, exerciseId: { in: gradableExerciseIds } },
    orderBy: { createdAt: "asc" },
  });

  // bestCorrect per exercise (retry until correct is allowed, but XP only once)
  const correctSet = new Set<string>();
  for (const a of attempts) {
    if (a.isCorrect) correctSet.add(a.exerciseId);
  }

  const totalGradable = gradableExerciseIds.length;
  const accuracy =
    totalGradable === 0 ? 0 : Math.round((correctSet.size / totalGradable) * 100);

  const existing = await db.lessonCompletion.findUnique({
    where: { userId_lessonSlug: { userId, lessonSlug } },
  });

  const xpFromExercises = correctSet.size * XP_PER_CORRECT_EXERCISE;
  // Repeating a lesson gives exercise XP again (practice) but the completion
  // bonus and count only register once per lesson.
  const xpEarned = xpFromExercises + (existing ? 0 : XP_LESSON_BONUS);

  return {
    xpEarned,
    accuracy,
    firstCompletion: !existing,
  };
}
