/**
 * Coach notifications (PROMPT 53 §8).
 *
 * Five configurable categories: daily learning, upcoming mock tests,
 * revision, examination date and incomplete assignments. The feed is
 * computed from real state (the active plan and the learner's profile) —
 * nothing fires without a concrete reason.
 *
 * Anti-spam is structural, not aspirational:
 *   - a disabled category never produces an item;
 *   - at most ONE item per category per day (lastFiredAt server-side,
 *     localStorage day-key client-side);
 *   - at most NOTIFICATION_DAILY_TOTAL_CAP items per day in total,
 *     served in priority order (exam date > upcoming mock > daily study >
 *     incomplete assignments > revision);
 *   - and reminders only ever surface while the app is open in a tab —
 *     the honest scope note is part of every response.
 *
 * The builder is pure and isomorphic: the server uses it for the API
 * feed, the planner view re-runs it every 30 seconds for time-of-day
 * items, so both sides agree by construction.
 */

import type {
  NotificationCategory,
  NotificationConfig,
  NotificationItemDto,
  NotificationPrefDto,
  PlannerPlanDto,
} from "./types";
import {
  NOTIFICATION_ANTI_SPAM_NOTE,
  NOTIFICATION_CATEGORIES,
  NOTIFICATION_CATEGORY_LABELS,
  PLANNER_REMINDER_SCOPE_NOTE,
} from "./types";

/** Hard cap on distinct notifications per day (anti-spam). */
export const NOTIFICATION_DAILY_TOTAL_CAP = 3;

/** Category priority when the daily cap trims the feed. */
const CATEGORY_PRIORITY: NotificationCategory[] = [
  "exam_date",
  "upcoming_mock",
  "daily_study",
  "incomplete_assignments",
  "revision",
];

export const DEFAULT_NOTIFICATION_CONFIGS: Record<NotificationCategory, NotificationConfig> = {
  daily_study: { time: "19:30", days: [1, 2, 3, 4, 5] },
  upcoming_mock: {},
  revision: {},
  exam_date: { leadDays: [7, 3, 1] },
  incomplete_assignments: {},
};

const DAY_MS = 24 * 60 * 60 * 1000;

export function defaultPrefs(): NotificationPrefDto[] {
  return NOTIFICATION_CATEGORIES.map((category) => ({
    category,
    enabled: true,
    config: { ...DEFAULT_NOTIFICATION_CONFIGS[category] },
  }));
}

/** Merge stored prefs over the defaults (missing rows stay default-on). */
export function mergePrefs(
  rows: Array<{ category: string; enabled: boolean; config: string }>,
): NotificationPrefDto[] {
  const byCategory = new Map(
    rows.map((row) => {
      let config: NotificationConfig = {};
      try {
        config = JSON.parse(row.config) as NotificationConfig;
      } catch {
        config = {};
      }
      return [row.category, { enabled: row.enabled, config }];
    }),
  );
  return NOTIFICATION_CATEGORIES.map((category) => {
    const stored = byCategory.get(category);
    return {
      category,
      enabled: stored?.enabled ?? true,
      config: { ...DEFAULT_NOTIFICATION_CONFIGS[category], ...(stored?.config ?? {}) },
    };
  });
}

export type NotificationFeedInput = {
  /** "Now" is a parameter so tests and the client tick can share the logic. */
  now: Date;
  prefs: NotificationPrefDto[];
  plan: PlannerPlanDto | null;
  profile: { examDate: string | null; examName: string | null; targetScore: number };
  /** Per-category last-fired timestamps (already-consumed guard). */
  lastFiredAt: Partial<Record<NotificationCategory, string>> | null;
};

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getUTCFullYear() === b.getUTCFullYear() &&
    a.getUTCMonth() === b.getUTCMonth() &&
    a.getUTCDate() === b.getUTCDate()
  );
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function weekday(date: Date): number {
  return date.getUTCDay();
}

function hhmm(date: Date): string {
  return `${String(date.getUTCHours()).padStart(2, "0")}:${String(date.getUTCMinutes()).padStart(2, "0")}`;
}

/**
 * Compute the notifications that are due RIGHT NOW, before rate limiting.
 * Pure: no IO, deterministic for a given (now, prefs, plan, profile).
 */
export function computeDueNotifications(input: NotificationFeedInput): NotificationItemDto[] {
  const { now, plan, profile } = input;
  const items: NotificationItemDto[] = [];
  const enabled = new Set(input.prefs.filter((pref) => pref.enabled).map((pref) => pref.category));
  const configFor = (category: NotificationCategory): NotificationConfig =>
    input.prefs.find((pref) => pref.category === category)?.config ??
    DEFAULT_NOTIFICATION_CONFIGS[category];

  const today = isoDate(now);

  // ---- Examination date countdown -----------------------------------------
  if (enabled.has("exam_date") && profile.examDate) {
    const exam = new Date(`${profile.examDate}T00:00:00Z`);
    const daysUntil = Math.round((exam.getTime() - new Date(`${today}T00:00:00Z`).getTime()) / DAY_MS);
    const leadDays = configFor("exam_date").leadDays ?? [7, 3, 1];
    // Day 0 (the exam day itself) always fires — the "today" reminder.
    if (daysUntil >= 0 && (daysUntil === 0 || leadDays.includes(daysUntil))) {
      items.push({
        category: "exam_date",
        categoryLabel: NOTIFICATION_CATEGORY_LABELS.exam_date,
        title: daysUntil === 0 ? "Your examination is today" : `${daysUntil} day${daysUntil === 1 ? "" : "s"} to your examination`,
        body:
          daysUntil === 0
            ? `${profile.examName ?? "Your exam"} is today — light warm-up only, and protect your sleep.`
            : `${profile.examName ?? "Your exam"} is on ${profile.examDate}. Use the remaining days for revision, not new material.`,
        dueAt: `${profile.examDate}T00:00:00.000Z`,
        href: "#/exams/planner",
      });
    }
  }

  if (plan) {
    // ---- Upcoming mock test (day before the next scheduled mock) ----------
    if (enabled.has("upcoming_mock")) {
      const nextMock = plan.days
        .flatMap((day) => day.tasks.map((task) => ({ task, date: day.date })))
        .filter((entry) => entry.task.type === "mock_exam" && entry.task.status === "todo")
        .sort((a, b) => a.date.localeCompare(b.date))[0];
      if (nextMock) {
        const daysUntil = Math.round(
          (new Date(`${nextMock.date}T00:00:00Z`).getTime() - new Date(`${today}T00:00:00Z`).getTime()) / DAY_MS,
        );
        if (daysUntil >= 0 && daysUntil <= 1) {
          items.push({
            category: "upcoming_mock",
            categoryLabel: NOTIFICATION_CATEGORY_LABELS.upcoming_mock,
            title: daysUntil === 0 ? "Mock examination today" : "Mock examination tomorrow",
            body: `"${nextMock.task.title}" is scheduled for ${nextMock.date} — sit it under exam conditions: timed, no pauses, no help.`,
            dueAt: `${nextMock.date}T00:00:00.000Z`,
            href: nextMock.task.href,
          });
        }
      }
    }

    // ---- Daily learning reminder ------------------------------------------
    if (enabled.has("daily_study")) {
      const config = configFor("daily_study");
      const time = config.time ?? "19:30";
      const days = config.days ?? [1, 2, 3, 4, 5];
      if (days.includes(weekday(now)) && hhmm(now) >= time) {
        const dayIndex = plan.todayDayIndex ?? null;
        const todayTasks = dayIndex ? plan.days.find((day) => day.dayIndex === dayIndex)?.tasks ?? [] : [];
        const open = todayTasks.filter((task) => task.status === "todo").length;
        items.push({
          category: "daily_study",
          categoryLabel: NOTIFICATION_CATEGORY_LABELS.daily_study,
          title: "Time for today's study session",
          body:
            open > 0
              ? `${open} planned task${open === 1 ? "" : "s"} still open today — around ${todayTasks.filter((task) => task.status === "todo").reduce((sum, task) => sum + task.minutes, 0)} minutes.`
              : "Open the planner and keep the streak going.",
          dueAt: `${today}T${time}:00.000Z`,
          href: "#/exams/planner",
        });
      }
    }

    // ---- Incomplete assignments (a planned day passed unfinished) ---------
    if (enabled.has("incomplete_assignments")) {
      const dayIndex = plan.todayDayIndex;
      const overdue = plan.days
        .filter((day) => (dayIndex ? day.dayIndex < dayIndex : day.date < today))
        .flatMap((day) => day.tasks.map((task) => ({ task, date: day.date })))
        .filter(
          (entry) =>
            entry.task.status === "todo" &&
            entry.task.type !== "mistake_revision" &&
            entry.task.type !== "review",
        );
      if (overdue.length > 0) {
        items.push({
          category: "incomplete_assignments",
          categoryLabel: NOTIFICATION_CATEGORY_LABELS.incomplete_assignments,
          title: `${overdue.length} task${overdue.length === 1 ? "" : "s"} waiting from earlier days`,
          body: `Oldest: "${overdue[0].task.title}" (${overdue[0].date}). Catch up or skip them — the plan adapts either way.`,
          dueAt: `${overdue[0].date}T00:00:00.000Z`,
          href: "#/exams/planner",
        });
      }
    }

    // ---- Revision (revision-type tasks overdue) ----------------------------
    if (enabled.has("revision")) {
      const dayIndex = plan.todayDayIndex;
      const overdueRevision = plan.days
        .filter((day) => (dayIndex ? day.dayIndex < dayIndex : day.date < today))
        .flatMap((day) => day.tasks.map((task) => ({ task, date: day.date })))
        .filter(
          (entry) =>
            (entry.task.type === "mistake_revision" || entry.task.type === "review") &&
            entry.task.status === "todo",
        );
      if (overdueRevision.length > 0) {
        items.push({
          category: "revision",
          categoryLabel: NOTIFICATION_CATEGORY_LABELS.revision,
          title: "Revision is overdue",
          body: `${overdueRevision.length} revision task${overdueRevision.length === 1 ? "" : "s"} from earlier day${overdueRevision.length === 1 ? "" : "s"} — mistakes are the highest-value material you own.`,
          dueAt: `${overdueRevision[0].date}T00:00:00.000Z`,
          href: overdueRevision[0].task.href,
        });
      }
    }
  }

  return items;
}

/**
 * The rate-limited feed: due items, filtered to at most one per category
 * per day (lastFiredAt) and capped to NOTIFICATION_DAILY_TOTAL_CAP in
 * priority order. This is the single choke point every surface uses.
 */
export function buildNotificationFeed(input: NotificationFeedInput): NotificationItemDto[] {
  const due = computeDueNotifications(input);
  const now = input.now;
  const limited: NotificationItemDto[] = [];
  const seenCategories = new Set<NotificationCategory>();

  for (const category of CATEGORY_PRIORITY) {
    if (limited.length >= NOTIFICATION_DAILY_TOTAL_CAP) break;
    const item = due.find((entry) => entry.category === category);
    if (!item) continue;
    // Anti-spam rule 1: one item per category per day.
    const last = input.lastFiredAt?.[category];
    if (last && sameDay(new Date(last), now)) continue;
    if (seenCategories.has(category)) continue;
    seenCategories.add(category);
    limited.push(item);
  }

  return limited;
}

export const NOTIFICATION_SCOPE_NOTE = PLANNER_REMINDER_SCOPE_NOTE;
export const NOTIFICATION_ANTI_SPAM = NOTIFICATION_ANTI_SPAM_NOTE;
