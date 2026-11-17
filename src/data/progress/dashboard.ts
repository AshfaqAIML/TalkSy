/**
 * Student dashboard types (PROMPT 33) — the personal learning workspace.
 *
 * The dashboard answers five questions in one screen:
 *   1. What have I learned?      → level summary, milestones, activity
 *   2. What am I learning now?   → continue-learning target + active path
 *   3. What should I learn next? → today's plan + recommendations
 *   4. Where am I making mistakes? → skill focus areas + clinic-driven advice
 *   5. How can I improve?        → recommendations with explained purposes
 *
 * Honesty rules (shared with the Progression system):
 *  · every number is computed from verified activity — nothing invented;
 *  · course-path position is never presented as a certified CEFR level;
 *  · skill mastery is never confused with course completion (separate
 *    metrics, clearly labelled);
 *  · "done" plan items reflect verified events from TODAY, not guesses.
 */

import type {
  AchievementView,
  ActivityFeedItem,
  Recommendation,
  SkillProfile,
} from "./types";

// ---------------------------------------------------------------------------
// §1 Header
// ---------------------------------------------------------------------------

export interface DashboardLevel {
  /** Working-level label, e.g. "A1 · Building Blocks". */
  label: string;
  /** e.g. "3 of 6 lessons completed in this level". */
  detail: string;
  /** Honest caveat: position on the curriculum path, not a certified level. */
  basis: string;
  /** Lessons completed across the whole curriculum path. */
  lessonsCompleted: number;
  lessonsTotal: number;
}

export interface DashboardStreak {
  current: number;
  longest: number;
  activeToday: boolean;
  /** Plain-language note (never punitive). */
  note: string;
}

export interface DashboardTarget {
  dailyPoints: number;
  todayPoints: number;
  weeklyPoints: number;
  weekPoints: number;
  metToday: boolean;
}

export interface DashboardNotificationItem {
  id: string;
  kind: "achievements" | "revision" | "vocabulary" | "writing";
  title: string;
  detail: string;
  href: string;
}

// ---------------------------------------------------------------------------
// §2 Continue learning
// ---------------------------------------------------------------------------

export interface ContinueTarget {
  /** Where the lesson lives. */
  source: "curriculum" | "cms";
  /** Course (CMS) or level (curriculum) context, e.g. "Everyday English Foundations". */
  contextTitle: string;
  contextHref: string;
  /** Chapter / unit the lesson sits in, e.g. "Unit 1 · First Steps". */
  chapterTitle: string;
  lessonTitle: string;
  lessonHref: string;
  /** e.g. "4 of 7 sections". */
  progressLabel: string;
  /** 0-100, or null when the source tracks no partial progress. */
  progressPct: number | null;
  updatedISO: string;
  estimatedMinutes: number | null;
}

export interface NextUpTarget {
  title: string;
  href: string;
  levelLabel: string | null;
  /** Why this is next (real reason from the path/recommendation engine). */
  reason: string;
}

// ---------------------------------------------------------------------------
// §3 Personal learning path
// ---------------------------------------------------------------------------

export type PathStepStatus = "completed" | "active" | "upcoming" | "optional";

export interface DashboardPathStep {
  id: string;
  title: string;
  description: string;
  /** curriculum-level | cms-course | practice */
  kind: string;
  optional: boolean;
  href: string;
  status: PathStepStatus;
  completedLessons: number;
  totalLessons: number;
}

export interface DashboardPath {
  id: string;
  title: string;
  href: string;
  steps: DashboardPathStep[];
  completedLessons: number;
  totalLessons: number;
  /** 0-100 integer (0 when nothing tracked yet). */
  pct: number;
}

// ---------------------------------------------------------------------------
// §4 Today's learning plan
// ---------------------------------------------------------------------------

export type PlanItemCategory =
  | "continue"
  | "vocabulary"
  | "grammar"
  | "reading"
  | "listening"
  | "speaking"
  | "writing"
  | "revision";

export interface TodayPlanItem {
  id: string;
  category: PlanItemCategory;
  /** Short imperative, e.g. "Review 12 due words". */
  title: string;
  /** One line of concrete detail. */
  detail: string;
  href: string;
  /** True only when a verified event from today covers this item. */
  done: boolean;
  /** What verified activity marked it done (shown when done). */
  doneLabel: string | null;
  estimatedMinutes: number | null;
}

// ---------------------------------------------------------------------------
// Full payload
// ---------------------------------------------------------------------------

export interface DashboardDto {
  fetchedAt: string;
  learner: { name: string | null };
  level: DashboardLevel;
  streak: DashboardStreak;
  target: DashboardTarget;
  notifications: DashboardNotificationItem[];

  continue: ContinueTarget | null;
  nextUp: NextUpTarget | null;

  path: DashboardPath | null;

  plan: TodayPlanItem[];
  /** Honest note when the plan is minimal (new learner). */
  planNote: string | null;

  skills: SkillProfile[];
  recentActivity: ActivityFeedItem[];
  recommendations: Recommendation[];

  milestones: AchievementView[];
  achievements: { unlocked: number; total: number; unseen: number };
}
