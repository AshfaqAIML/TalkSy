import type { CourseExercise } from "@/data/curriculum/types";

/**
 * Pure learning-stat derivations shared by the dashboard and course APIs.
 *
 * Every function here is deterministic and side-effect free so the numbers
 * on the learner's dashboard can be unit-tested and trusted: they derive
 * only from recorded attempts, completions and vocabulary progress — never
 * from simulated or hand-authored values.
 *
 * This module is CLIENT-SAFE (no database imports) — it is shared by the
 * server routes and the React views. src/lib/progress.ts (server-only)
 * re-exports the word-strength constants below so existing imports keep
 * working from a single source of truth.
 */

/** Words with strength >= this value count as "learned" (Leitner box ≥ 2). */
export const LEARNED_WORD_STRENGTH = 2;

/** Max vocabulary strength (Leitner box 0..5). */
export const MAX_WORD_STRENGTH = 5;

/* ------------------------------------------------------------------ */
/* Skill buckets (dashboard: grammar / listening / speaking / writing)   */
/* ------------------------------------------------------------------ */

export type SkillBucket = "grammar" | "listening" | "speaking" | "writing" | "reading";

export const SKILL_BUCKETS: readonly SkillBucket[] = [
  "grammar",
  "listening",
  "speaking",
  "writing",
  "reading",
] as const;

/**
 * Maps one exercise to the communication/knowledge area it trains.
 *
 * - listen → listening, speak → speaking, write → writing (by exercise type)
 * - mcq/fill that work on a reading passage (phase "reading" or a passageId)
 *   → reading comprehension
 * - everything else (mcq, fill, order, match on usage and sentence-building)
 *   → grammar & usage
 */
export function exerciseSkillBucket(ex: CourseExercise): SkillBucket {
  switch (ex.type) {
    case "listen":
      return "listening";
    case "speak":
      return "speaking";
    case "write":
      return "writing";
    case "mcq":
    case "fill":
      if (ex.phase === "reading" || ex.passageId) return "reading";
      return "grammar";
    default:
      return "grammar";
  }
}

export interface AttemptLike {
  exerciseId: string;
  correct: boolean;
  createdAt: Date;
}

export interface SkillActivity {
  bucket: SkillBucket;
  /** total recorded attempts (incl. retries) */
  attempts: number;
  /** distinct exercises with at least one attempt */
  exercisesAttempted: number;
  /** distinct exercises answered correctly at least once */
  exercisesCorrect: number;
  /** exercisesCorrect / exercisesAttempted, 0..1 (0 when never practised) */
  accuracy: number;
  /** most recent attempt time, null when never practised */
  lastActiveAt: Date | null;
}

/**
 * Derives all five skill buckets from real exercise attempts. Attempts whose
 * exercise no longer exists in the content (retired content, foreign ids)
 * are counted under "grammar" so historical rows are never silently dropped.
 */
export function deriveSkillActivity(
  attempts: AttemptLike[],
  exerciseIndex: Map<string, CourseExercise>
): SkillActivity[] {
  const rows = new Map<SkillBucket, { attempts: number; ids: Set<string>; correctIds: Set<string>; lastAt: Date | null }>();
  for (const bucket of SKILL_BUCKETS) {
    rows.set(bucket, { attempts: 0, ids: new Set(), correctIds: new Set(), lastAt: null });
  }

  for (const attempt of attempts) {
    const exercise = exerciseIndex.get(attempt.exerciseId);
    const bucket = exercise ? exerciseSkillBucket(exercise) : "grammar";
    const row = rows.get(bucket)!;
    row.attempts += 1;
    row.ids.add(attempt.exerciseId);
    if (attempt.correct) row.correctIds.add(attempt.exerciseId);
    if (!row.lastAt || attempt.createdAt > row.lastAt) row.lastAt = attempt.createdAt;
  }

  return SKILL_BUCKETS.map((bucket) => {
    const row = rows.get(bucket)!;
    return {
      bucket,
      attempts: row.attempts,
      exercisesAttempted: row.ids.size,
      exercisesCorrect: row.correctIds.size,
      accuracy: row.ids.size > 0 ? row.correctIds.size / row.ids.size : 0,
      lastActiveAt: row.lastAt,
    };
  });
}

/* ------------------------------------------------------------------ */
/* Vocabulary revision schedule (spaced repetition, Leitner-style)      */
/* ------------------------------------------------------------------ */

/**
 * Review interval in days per vocabulary strength (0..5). Derived from the
 * same Leitner progression the progress engine uses for word strength; the
 * dashboard shows upcoming reviews from these estimates.
 */
export const REVIEW_INTERVAL_DAYS: readonly number[] = [1, 2, 4, 8, 16, 30];

export interface VocabProgressLike {
  wordId: string;
  strength: number;
  lastReviewedAt: Date;
}

export interface WordReview {
  wordId: string;
  strength: number;
  /** estimated next review time */
  dueAt: Date;
  /** true when dueAt <= now */
  dueNow: boolean;
}

/**
 * Computes the estimated review schedule for every word the learner has
 * encountered. Words already at max strength wait the longest interval —
 * mastered words still resurface occasionally, exactly like the words the
 * practice centre already serves.
 */
export function computeRevisionSchedule(
  vocab: VocabProgressLike[],
  now: Date = new Date()
): WordReview[] {
  return vocab
    .map((row) => {
      const strength = Math.max(0, Math.min(REVIEW_INTERVAL_DAYS.length - 1, row.strength));
      const intervalDays = REVIEW_INTERVAL_DAYS[strength];
      const dueAt = new Date(row.lastReviewedAt.getTime() + intervalDays * 86_400_000);
      return { wordId: row.wordId, strength: row.strength, dueAt, dueNow: dueAt <= now };
    })
    .sort((a, b) => a.dueAt.getTime() - b.dueAt.getTime());
}

/** Splits a schedule into "due now" and the next upcoming reviews. */
export function splitRevisionSchedule(
  schedule: WordReview[],
  upcomingLimit = 5
): { dueNow: WordReview[]; upcoming: WordReview[] } {
  const dueNow = schedule.filter((s) => s.dueNow);
  const upcoming = schedule.filter((s) => !s.dueNow).slice(0, upcomingLimit);
  return { dueNow, upcoming };
}

/* ------------------------------------------------------------------ */
/* Course state (catalogue + roadmap)                                  */
/* ------------------------------------------------------------------ */

export type CourseState = "completed" | "in-progress" | "available" | "locked";

export interface CourseLessonState {
  completed: boolean;
  unlocked: boolean;
  attemptedCount: number;
}

/**
 * Derives a unit-course's state from its lessons' real states:
 *   completed   — every lesson completed
 *   in-progress — at least one attempt or completion recorded, not all done
 *   available   — nothing recorded yet, first lesson unlocked
 *   locked      — first lesson still locked (prerequisites not met)
 */
export function courseStateOf(lessons: CourseLessonState[]): CourseState {
  if (lessons.length === 0) return "locked";
  const done = lessons.filter((l) => l.completed).length;
  if (done === lessons.length) return "completed";
  const touched = lessons.some((l) => l.completed || l.attemptedCount > 0);
  if (touched) return "in-progress";
  return lessons[0].unlocked ? "available" : "locked";
}

/* ------------------------------------------------------------------ */
/* Weekly target                                                       */
/* ------------------------------------------------------------------ */

/** XP per goal minute — mirrors the dashboard route (10 XP ≈ 1 minute). */
export const XP_PER_GOAL_MINUTE = 10;

export interface WeeklyTarget {
  minutesTarget: number;
  xpTarget: number;
  xpActual: number;
  lessonsThisWeek: number;
  /** active days (days with any XP) in the last 7 days */
  activeDays: number;
  percent: number;
}

/**
 * Weekly learning target: the learner's own daily goal extended over seven
 * days, measured against the actual XP and lessons recorded this week.
 */
export function weeklyTargetOf(
  dailyGoalMinutes: number,
  week: { xp: number; lessons: number }[]
): WeeklyTarget {
  const xpTarget = dailyGoalMinutes * XP_PER_GOAL_MINUTE * 7;
  const xpActual = week.reduce((sum, d) => sum + d.xp, 0);
  const lessonsThisWeek = week.reduce((sum, d) => sum + d.lessons, 0);
  const activeDays = week.filter((d) => d.xp > 0).length;
  return {
    minutesTarget: dailyGoalMinutes * 7,
    xpTarget,
    xpActual,
    lessonsThisWeek,
    activeDays,
    percent: xpTarget > 0 ? Math.min(100, Math.round((xpActual / xpTarget) * 100)) : 0,
  };
}

/* ------------------------------------------------------------------ */
/* Today's learning plan                                               */
/* ------------------------------------------------------------------ */

export type PlanItemKind = "lesson" | "resume" | "review" | "goal" | "setup";

export interface PlanItem {
  id: string;
  kind: PlanItemKind;
  /** action line, e.g. "Resume: First Sentences" */
  title: string;
  /** supporting detail, always a real number or real lesson fact */
  detail: string;
  ctaLabel: string;
  href: string;
}

export interface TodayPlanInput {
  /** lesson with attempts but no completion (most recent), or null */
  inProgress: { slug: string; title: string; attempted: number; totalExercises: number } | null;
  /** next incomplete lesson in path order, or null */
  nextLesson: { slug: string; title: string; minutes: number } | null;
  dueReviewCount: number;
  todayXp: number;
  dailyTargetXp: number;
}

/**
 * Builds today's learning plan from the learner's real state. Every item
 * links to an actionable surface and cites its own numbers — nothing is
 * suggested that the data does not support.
 */
export function buildTodayPlan(input: TodayPlanInput): PlanItem[] {
  const items: PlanItem[] = [];

  if (input.inProgress) {
    items.push({
      id: "resume",
      kind: "resume",
      title: `Resume: ${input.inProgress.title}`,
      detail: `${input.inProgress.attempted} of ${input.inProgress.totalExercises} exercises answered — pick up where you left off.`,
      ctaLabel: "Resume lesson",
      href: `/lesson/${input.inProgress.slug}`,
    });
  } else if (input.nextLesson) {
    items.push({
      id: "lesson",
      kind: "lesson",
      title: `Start: ${input.nextLesson.title}`,
      detail: `Next on your path · about ${input.nextLesson.minutes} min`,
      ctaLabel: "Start lesson",
      href: `/lesson/${input.nextLesson.slug}`,
    });
  }

  if (input.dueReviewCount > 0) {
    items.push({
      id: "review",
      kind: "review",
      title: `Review ${input.dueReviewCount} word${input.dueReviewCount === 1 ? "" : "s"}`,
      detail: "Vocabulary words are ready for spaced-repetition practice.",
      ctaLabel: "Open practice",
      href: "/practice",
    });
  }

  if (input.todayXp < input.dailyTargetXp) {
    items.push({
      id: "goal",
      kind: "goal",
      title: `Earn ${input.dailyTargetXp - input.todayXp} XP today`,
      detail: `${input.todayXp} of ${input.dailyTargetXp} XP toward today's goal.`,
      ctaLabel: "Keep going",
      href: input.inProgress ? `/lesson/${input.inProgress.slug}` : input.nextLesson ? `/lesson/${input.nextLesson.slug}` : "/practice",
    });
  } else {
    items.push({
      id: "goal-done",
      kind: "goal",
      title: "Daily goal reached",
      detail: `${input.todayXp} XP today — target ${input.dailyTargetXp} XP. Nice work!`,
      ctaLabel: "Practice more",
      href: "/practice",
    });
  }

  return items;
}

/* ------------------------------------------------------------------ */
/* Time formatting (shared by dashboard + course views)                */
/* ------------------------------------------------------------------ */

/** "2 hours 5 minutes" style duration from minutes. */
export function formatMinutes(total: number): string {
  if (total < 60) return `${total} min`;
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  if (minutes === 0) return `${hours} hr`;
  return `${hours} hr ${minutes} min`;
}

/** Relative time label for timestamps ("just now", "3 days ago", …). */
export function relativeTime(date: Date, now: Date = new Date()): string {
  const seconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}
