/**
 * Planner service — orchestration and persistence.
 *
 * Everything the planner API returns flows through here:
 *   getPlannerState        — profile + baseline + active plan + readiness
 *   generatePlannerPlan    — initial assessment → day-by-day plan rows
 *   setPlannerTaskStatus   — task bookkeeping (+ pathway auto-completion)
 *   updatePlannerReminder  — reminder time & days on the active plan
 *   adaptPlannerPlan       — performance analysis → regenerate FUTURE days
 *   archivePlannerPlan     — retire a plan (history keeps it)
 *
 * Ownership is checked on every mutation; completed days are never
 * rewritten by adaptation; the honesty notes generated with the plan are
 * stored in meta and shown verbatim.
 */

import { db } from "@/lib/db";
import { getActiveSpec } from "../specs";
import { getProfile, upsertProfile, type ExamProfileDto } from "../profile";
import { refreshSectionEstimates } from "../diagnostics";
import { buildRecommendations } from "../recommend";
import { overallScore } from "../scoring";
import { attemptModeLabel, isTimedMode, CEFR_LEVELS } from "../types";
import type { ExamKey, SectionKey, SectionEstimateDto, SpecDto } from "../types";
import { generatePlan, type GeneratorPathwayStep } from "./generator";
import { buildBaselineDiagnostic, type EvaluationWeaknessInput, type TimeManagementSignals } from "./diagnostic";
import { buildReadinessReport, type ReadinessAttemptInput } from "./readiness";
import {
  analyseSectionPerformance,
  buildAdaptation,
  weaknessTagsFromEvaluations,
  type ObservedAttempt,
} from "./adaptive";
import { buildScoreGap, type ScoreGapAttemptInput } from "./score-gap";
import {
  buildNotificationFeed,
  mergePrefs,
  NOTIFICATION_ANTI_SPAM,
  NOTIFICATION_SCOPE_NOTE,
} from "./notifications";
import {
  NOTIFICATION_ANTI_SPAM_NOTE,
  NOTIFICATION_CATEGORIES,
  PLANNER_REMINDER_SCOPE_NOTE,
  type NotificationCategory,
  type NotificationConfig,
  type NotificationItemDto,
  type NotificationPrefDto,
  type PlannerNotificationsDto,
  type ScoreGapDto,
} from "./types";
import {
  PLANNER_DIFFICULTIES,
  PLANNER_PHASES,
  PLANNER_TASK_TYPES,
  PLANNER_TASK_TYPE_LABELS,
  type PlanMeta,
  type PlannerDayDto,
  type PlannerDifficulty,
  type PlannerGenerateInput,
  type PlannerPhase,
  type PlannerPlanDto,
  type PlannerStateDto,
  type PlannerTaskDto,
  type PlannerTaskStatus,
  type PlannerTaskType,
  type PreviousAttempt,
  READINESS_DISCLAIMER,
} from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function parseJsonOr<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// ---------------------------------------------------------------------------
// Context loaders
// ---------------------------------------------------------------------------

type PlannerContext = {
  profile: ExamProfileDto;
  spec: SpecDto;
  estimates: SectionEstimateDto[];
  estimatedOverall: number | null;
  weaknessTags: Partial<Record<SectionKey, string[]>>;
};

async function loadContext(userId: string): Promise<PlannerContext | null> {
  const profile = await getProfile(userId);
  if (!profile || !profile.onboarded) return null;
  const examKey = profile.examKey as ExamKey;
  const spec = await getActiveSpec(examKey, profile.variant);
  if (!spec) return null;

  const difficultSections = profile.difficultSections.filter((section) =>
    ["listening", "reading", "writing", "speaking"].includes(section),
  ) as SectionKey[];
  const estimates = await refreshSectionEstimates({
    userId,
    spec,
    cefr: profile.proficiency,
    difficultSections,
  });

  // Weakness tags from the latest attempt (light query, no full result DTO).
  const weaknessTags = await loadWeaknessTags(userId, examKey, profile.variant);

  const estimatedOverall =
    estimates.length === 4
      ? overallScore(
          spec.scoringModel,
          estimates.map((entry) => entry.estimated),
        )
      : null;

  return { profile, spec, estimates, estimatedOverall, weaknessTags };
}

async function loadWeaknessTags(
  userId: string,
  examKey: ExamKey,
  variant: string,
): Promise<Partial<Record<SectionKey, string[]>>> {
  const attempt = await db.mockTestAttempt.findFirst({
    where: {
      userId,
      status: { in: ["submitted", "scored"] },
      mockTest: { examKey, variant },
    },
    orderBy: { submittedAt: "desc" },
    select: { id: true },
  });
  if (!attempt) return {};
  const responses = await db.mockTestResponse.findMany({
    where: { attemptId: attempt.id },
    include: {
      question: {
        select: { skills: true, points: true, section: { select: { key: true } } },
      },
    },
  });
  const tags: Partial<Record<SectionKey, string[]>> = {};
  for (const response of responses) {
    const wrong =
      response.autoScore != null
        ? response.autoScore < response.question.points
        : response.answer == null || response.answer === "null";
    if (!wrong) continue;
    const section = response.question.section.key as SectionKey;
    const skills = parseJsonOr<string[]>(response.question.skills, []);
    tags[section] = [...new Set([...(tags[section] ?? []), ...skills])];
  }
  return tags;
}

async function loadPendingPathwaySteps(
  userId: string,
  examKey: ExamKey,
  variant: string,
): Promise<GeneratorPathwayStep[]> {
  const pathway = await db.examPathway.findFirst({
    where: { examKey, variant, status: "published" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: { steps: { orderBy: { order: "asc" } } },
      },
    },
  });
  if (!pathway) return [];
  const completed = new Set(
    (
      await db.examPathwayStepProgress.findMany({
        where: { userId },
        select: { stepId: true },
      })
    ).map((row) => row.stepId),
  );
  const steps: GeneratorPathwayStep[] = [];
  for (const pathwayModule of pathway.modules) {
    for (const step of pathwayModule.steps) {
      if (completed.has(step.id)) continue;
      // Mock refs are scheduled by the plan's mock cadence, not as steps.
      if (step.refType === "mock") continue;
      steps.push({
        id: step.id,
        label: step.label,
        refType: step.refType,
        refId: step.refId,
        examSection: (step.examSection as SectionKey | null) ?? null,
        minutes: step.minutes,
        focus: step.focus,
        moduleTitle: pathwayModule.title,
      });
    }
  }
  return steps;
}

async function loadPublishedMocks(examKey: ExamKey, variant: string) {
  return db.mockTest.findMany({
    where: { examKey, variant, status: "published" },
    orderBy: { createdAt: "asc" },
    select: { id: true, title: true, kind: true },
  });
}

/** Wrong or unanswered objective items across submitted attempts (gate for
 *  mistake-revision tasks — an honest count, not a scoring claim). */
async function countMistakes(userId: string): Promise<number> {
  const attempts = await db.mockTestAttempt.findMany({
    where: { userId, status: { in: ["submitted", "scored"] } },
    select: { id: true },
  });
  if (attempts.length === 0) return 0;
  const responses = await db.mockTestResponse.findMany({
    where: { attemptId: { in: attempts.map((attempt) => attempt.id) } },
    include: { question: { select: { points: true } } },
  });
  let count = 0;
  for (const response of responses) {
    if (response.autoScore != null && response.autoScore < response.question.points) count += 1;
    else if (response.autoScore == null && (response.answer == null || response.answer === "null")) {
      count += 1;
    }
  }
  return count;
}

type AttemptRow = {
  id: string;
  mockTestId: string;
  mode: string;
  timed: boolean;
  totalScore: number | null;
  scoreDisplay: string | null;
  sectionScores: string | null;
  submittedAt: Date | null;
};

async function loadRecentAttempts(
  userId: string,
  examKey: ExamKey,
  variant: string,
  take = 8,
): Promise<Array<AttemptRow & { mockTitle: string }>> {
  const attempts = await db.mockTestAttempt.findMany({
    where: {
      userId,
      status: { in: ["submitted", "scored"] },
      mockTest: { examKey, variant },
    },
    orderBy: { submittedAt: "desc" },
    take,
  });
  const out: Array<AttemptRow & { mockTitle: string }> = [];
  for (const attempt of attempts) {
    const mock = await db.mockTest.findUnique({
      where: { id: attempt.mockTestId },
      select: { title: true },
    });
    if (!mock) continue;
    out.push({ ...attempt, mockTitle: mock.title });
  }
  return out;
}

function parseSectionScores(
  raw: string | null,
): Array<{ section: SectionKey; score: number }> {
  if (!raw) return [];
  const parsed = parseJsonOr<Array<{ section: SectionKey; score: number }>>(raw, []);
  return parsed.filter(
    (entry) =>
      ["listening", "reading", "writing", "speaking"].includes(entry.section) &&
      Number.isFinite(entry.score),
  );
}

// ---------------------------------------------------------------------------
// PROMPT 53 coach evidence loaders (evaluations, timing, completed work)
// ---------------------------------------------------------------------------

type StoredEvaluationWeakness = {
  area: string;
  label: string;
  severity: "major" | "moderate" | "minor";
  evidence: string;
};

/** Recent AI-evaluation weaknesses (writing & speaking practice) — the
 * error categories PROMPT 53 §6 feeds into the adaptive pipeline. */
async function loadEvaluationWeaknesses(
  userId: string,
  examKey: ExamKey,
): Promise<EvaluationWeaknessInput[]> {
  const rows = await db.mockEvaluation.findMany({
    where: { userId, examKey, status: "complete" },
    orderBy: { createdAt: "desc" },
    take: 6,
    select: { section: true, result: true },
  });
  const out: EvaluationWeaknessInput[] = [];
  for (const row of rows) {
    if (row.section !== "writing" && row.section !== "speaking") continue;
    const result = parseJsonOr<{ weaknesses?: StoredEvaluationWeakness[] }>(row.result, {});
    for (const weakness of result.weaknesses ?? []) {
      if (!weakness?.area) continue;
      out.push({
        section: row.section as "writing" | "speaking",
        area: weakness.area,
        label: weakness.label || weakness.area,
        severity: weakness.severity ?? "moderate",
        evidence: weakness.evidence ?? "",
      });
    }
  }
  // Keep the worst severity per area (most recent occurrences first).
  const rank = { major: 0, moderate: 1, minor: 2 } as const;
  const byArea = new Map<string, EvaluationWeaknessInput>();
  for (const weakness of out) {
    const existing = byArea.get(weakness.area);
    if (!existing || rank[weakness.severity] < rank[existing.severity]) {
      byArea.set(weakness.area, weakness);
    }
  }
  return [...byArea.values()].slice(0, 8);
}

/** Timing signals from the learner's latest TIMED submitted attempt —
 * the honest basis for the time-management diagnostic (PROMPT 53 §2). */
async function loadTimeManagementSignals(
  userId: string,
  examKey: ExamKey,
  variant: string,
  spec: SpecDto,
): Promise<TimeManagementSignals | null> {
  const timedAttempts = await db.mockTestAttempt.findMany({
    where: {
      userId,
      status: { in: ["submitted", "scored"] },
      timed: true,
      mockTest: { examKey, variant },
    },
    orderBy: { submittedAt: "desc" },
    take: 1,
    select: { id: true },
  });
  if (timedAttempts.length === 0) return null;
  const responses = await db.mockTestResponse.findMany({
    where: { attemptId: timedAttempts[0].id },
    select: { timeSpentSec: true, answer: true },
  });
  if (responses.length === 0) {
    return { timedAttempts: 1, totalItems: 0, unansweredItems: 0, avgSecPerItem: null, budgetSecPerItem: null };
  }
  const unanswered = responses.filter(
    (response) => response.answer == null || response.answer === "null",
  ).length;
  const answered = responses.length - unanswered;
  const totalTime = responses.reduce((sum, response) => sum + (response.timeSpentSec ?? 0), 0);
  const specTotalSec = spec.sections.reduce((sum, section) => sum + section.timingSec, 0);
  return {
    timedAttempts: 1,
    totalItems: responses.length,
    unansweredItems: unanswered,
    avgSecPerItem: answered > 0 ? Math.round(totalTime / answered) : null,
    budgetSecPerItem: Math.round(specTotalSec / responses.length),
  };
}

/** Hrefs of practice the learner has actually completed (done tasks across
 * ALL plans) — the anti-repetition guard for adaptive recommendations. */
async function loadCompletedLessonHrefs(userId: string): Promise<string[]> {
  const tasks = await db.examPlannerTask.findMany({
    where: { status: "done", day: { plan: { userId } } },
    select: { href: true },
  });
  return [...new Set(tasks.map((task) => task.href))];
}

// ---------------------------------------------------------------------------
// Plan DTO mapping
// ---------------------------------------------------------------------------

type PlanRowWithRelations = {
  id: string;
  examKey: string;
  variant: string;
  durationDays: number;
  startDate: Date;
  endDate: Date;
  status: string;
  reminderTime: string | null;
  reminderDays: string;
  meta: string;
  generatedAt: Date;
  days: Array<{
    id: string;
    dayIndex: number;
    date: string;
    phase: string;
    focus: string;
    tasks: Array<{
      id: string;
      type: string;
      section: string | null;
      title: string;
      detail: string;
      minutes: number;
      difficulty: string;
      href: string;
      stepId: string | null;
      mockTestId: string | null;
      status: string;
      completedAt: Date | null;
      sortOrder: number;
      reason: string;
    }>;
  }>;
};

function toPlanDto(row: PlanRowWithRelations): PlannerPlanDto {
  const meta = parseJsonOr<PlanMeta>(row.meta, {
    phases: [],
    focusWeights: {},
    difficultyOverrides: {},
    notes: [],
    suggestedDurationDays: null,
    adaptations: [],
    evidenceSnapshot: { mockAttempts: 0 },
  });
  const startIso = row.startDate.toISOString().slice(0, 10);
  const endIso = row.endDate.toISOString().slice(0, 10);
  const today = todayIso();
  const todayDayIndex =
    today >= startIso && today <= endIso
      ? Math.floor((new Date(`${today}T00:00:00Z`).getTime() - new Date(`${startIso}T00:00:00Z`).getTime()) / DAY_MS) + 1
      : null;

  const days: PlannerDayDto[] = row.days
    .slice()
    .sort((a, b) => a.dayIndex - b.dayIndex)
    .map((day) => {
      const tasks: PlannerTaskDto[] = day.tasks
        .slice()
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((task) => ({
          id: task.id,
          type: (PLANNER_TASK_TYPES as readonly string[]).includes(task.type)
            ? (task.type as PlannerTaskType)
            : "review",
          typeLabel:
            PLANNER_TASK_TYPE_LABELS[
              (PLANNER_TASK_TYPES as readonly string[]).includes(task.type)
                ? (task.type as PlannerTaskType)
                : "review"
            ],
          section: (task.section as SectionKey | null) ?? null,
          title: task.title,
          detail: task.detail,
          minutes: task.minutes,
          difficulty: (PLANNER_DIFFICULTIES as readonly string[]).includes(task.difficulty)
            ? (task.difficulty as PlannerDifficulty)
            : "medium",
          href: task.href,
          stepId: task.stepId,
          mockTestId: task.mockTestId,
          status: (["todo", "done", "skipped"] as readonly string[]).includes(task.status)
            ? (task.status as PlannerTaskStatus)
            : "todo",
          completedAt: task.completedAt ? task.completedAt.toISOString() : null,
          reason: task.reason,
        }));
      const phase = (PLANNER_PHASES as readonly string[]).includes(day.phase)
        ? (day.phase as PlannerPhase)
        : "skills";
      return {
        id: day.id,
        dayIndex: day.dayIndex,
        date: day.date,
        phase,
        phaseLabel:
          phase === "foundation"
            ? "Foundation"
            : phase === "skills"
              ? "Skill building"
              : phase === "mock_cycle"
                ? "Mock cycle"
                : "Final review",
        focus: day.focus,
        isRestDay: day.focus.startsWith("Light day"),
        tasks,
        minutes: tasks.reduce((sum, task) => sum + task.minutes, 0),
        doneCount: tasks.filter((task) => task.status !== "todo").length,
      };
    });

  const allTasks = days.flatMap((day) => day.tasks);
  const tasksDone = allTasks.filter((task) => task.status === "done").length;
  const tasksSkipped = allTasks.filter((task) => task.status === "skipped").length;
  const tasksTotal = allTasks.length;
  const daysTotal = days.length;
  const daysElapsed = todayDayIndex ?? Math.min(daysTotal, Math.max(0, Math.floor((Date.now() - row.startDate.getTime()) / DAY_MS) + 1));

  return {
    id: row.id,
    examKey: row.examKey,
    variant: row.variant,
    durationDays: row.durationDays,
    effectiveDays: daysTotal,
    startDate: startIso,
    endDate: endIso,
    status: row.status === "archived" ? "archived" : "active",
    reminderTime: row.reminderTime,
    reminderDays: parseJsonOr<number[]>(row.reminderDays, []),
    todayDayIndex,
    days,
    meta,
    progress: {
      tasksDone,
      tasksSkipped,
      tasksTotal,
      percent: tasksTotal === 0 ? 0 : Math.round(((tasksDone + tasksSkipped) / tasksTotal) * 100),
      daysElapsed,
      daysTotal,
    },
  };
}

async function loadActivePlan(userId: string): Promise<PlannerPlanDto | null> {
  const row = await db.examPlannerPlan.findFirst({
    where: { userId, status: "active" },
    include: { days: { include: { tasks: true } } },
    orderBy: { generatedAt: "desc" },
  });
  return row ? toPlanDto(row as PlanRowWithRelations) : null;
}

// ---------------------------------------------------------------------------
// Readiness assembly
// ---------------------------------------------------------------------------

async function buildReadinessForUser(
  userId: string,
  context: PlannerContext,
  plan: PlannerPlanDto | null,
  attemptRows: Array<AttemptRow & { mockTitle: string }>,
): Promise<ReturnType<typeof buildReadinessReport>> {
  const attempts: ReadinessAttemptInput[] = attemptRows.map((row) => ({
    attemptId: row.id,
    mockTitle: row.mockTitle,
    scoreDisplay: row.scoreDisplay,
    totalScore: row.totalScore,
    timed: isTimedMode(row.mode, row.timed),
    modeLabel: attemptModeLabel(row.mode),
    submittedAt: row.submittedAt ? row.submittedAt.toISOString() : null,
  }));

  const nextSteps = buildNextSteps(context, plan, attemptRows);

  return buildReadinessReport({
    scoringKind: context.spec.scoringModel.kind,
    targetScore: context.profile.targetScore,
    estimatedOverall: context.estimatedOverall,
    estimates: context.estimates.map((entry) => ({
      section: entry.section,
      estimated: entry.estimated,
      weaknesses: entry.weaknesses,
    })),
    attempts,
    completion: plan
      ? {
          percent: plan.progress.percent,
          tasksDone: plan.progress.tasksDone,
          tasksTotal: plan.progress.tasksTotal,
        }
      : null,
    nextSteps,
  });
}

function buildNextSteps(
  context: PlannerContext,
  plan: PlannerPlanDto | null,
  attemptRows: Array<AttemptRow & { mockTitle: string }>,
): string[] {
  const steps: string[] = [];

  const unmeasured = context.estimates.filter((entry) => entry.confidence < 0.3);
  if (unmeasured.length > 0) {
    steps.push(
      `Run the quick ${unmeasured[0].section} diagnostic — ${unmeasured.length} section${unmeasured.length > 1 ? "s" : ""} still rest on self-ratings only.`,
    );
  }

  if (plan) {
    const nextMock = plan.days
      .filter((day) => day.dayIndex >= (plan.todayDayIndex ?? 1))
      .flatMap((day) => day.tasks.map((task) => ({ task, date: day.date })))
      .find((entry) => entry.task.type === "mock_exam" && entry.task.status === "todo");
    if (nextMock) {
      steps.push(`Sit the scheduled mock on ${nextMock.date} — exam conditions, no pauses.`);
    }
    const openPast = plan.days
      .filter((day) => plan.todayDayIndex !== null && day.dayIndex < plan.todayDayIndex)
      .flatMap((day) => day.tasks)
      .filter((task) => task.status === "todo").length;
    if (openPast > 0) {
      steps.push(`Catch up: ${openPast} task${openPast > 1 ? "s" : ""} from earlier days are still open.`);
    }
  }

  const recommendations = buildRecommendations({
    spec: context.spec,
    estimates: context.estimates.map((entry) => ({
      section: entry.section,
      estimated: entry.estimated,
      confidence: entry.confidence,
    })),
    weaknessTags: context.weaknessTags,
    difficultSections: context.profile.difficultSections.filter((section) =>
      ["listening", "reading", "writing", "speaking"].includes(section),
    ) as SectionKey[],
    limit: 2,
  });
  for (const recommendation of recommendations.slice(0, 2)) {
    steps.push(`${recommendation.title} — ${recommendation.reason.toLowerCase()}`);
  }

  if (steps.length === 0) {
    steps.push("Keep completing today's tasks — consistency is the plan.");
  }
  void attemptRows;
  return steps.slice(0, 4);
}

// ---------------------------------------------------------------------------
// Coach notifications (PROMPT 53 §8) — prefs + rate-limited feed
// ---------------------------------------------------------------------------

/** Load prefs (defaulted), migrate daily_study from a legacy plan reminder,
 * and compute the rate-limited feed. Shared by the state and the API. */
async function buildNotificationsDto(
  userId: string,
  profile: { examDate: string | null; examName: string | null; targetScore: number },
  plan: PlannerPlanDto | null,
  options: { markFired?: boolean } = {},
): Promise<PlannerNotificationsDto> {
  const rows = await db.examNotificationPref.findMany({ where: { userId } });
  const prefs = mergePrefs(
    rows.map((row) => ({
      category: row.category,
      enabled: row.enabled,
      config: row.config,
    })),
  );

  // Migration: a plan-level reminder set before PROMPT 53 seeds the
  // daily_study config so existing learners keep their chosen time.
  const hasDailyRow = rows.some((row) => row.category === "daily_study");
  if (!hasDailyRow && plan?.reminderTime) {
    const daily = prefs.find((pref) => pref.category === "daily_study");
    if (daily) {
      daily.config = { time: plan.reminderTime, days: plan.reminderDays.length > 0 ? plan.reminderDays : [1, 2, 3, 4, 5] };
    }
  }

  const lastFiredAt: Partial<Record<NotificationCategory, string>> = {};
  for (const row of rows) {
    if (row.lastFiredAt) lastFiredAt[row.category as NotificationCategory] = row.lastFiredAt.toISOString();
  }

  const feed = buildNotificationFeed({
    now: new Date(),
    prefs,
    plan,
    profile,
    lastFiredAt,
  });

  if (options.markFired && feed.length > 0) {
    const now = new Date();
    for (const item of feed) {
      await db.examNotificationPref.upsert({
        where: { userId_category: { userId, category: item.category } },
        create: { userId, category: item.category, enabled: true, config: "{}", lastFiredAt: now },
        update: { lastFiredAt: now },
      });
    }
  }

  return {
    prefs,
    feed,
    scopeNote: NOTIFICATION_SCOPE_NOTE,
    antiSpamNote: NOTIFICATION_ANTI_SPAM_NOTE,
  };
}

/** Public: prefs + feed for the notifications API (loads its own context). */
export async function getNotificationsForUser(
  userId: string,
): Promise<PlannerNotificationsDto | null> {
  const context = await loadContext(userId);
  if (!context) return null;
  const plan = await loadActivePlan(userId);
  return buildNotificationsDto(
    userId,
    {
      examDate: context.profile.examDate,
      examName: context.spec.name,
      targetScore: context.profile.targetScore,
    },
    plan,
  );
}

/** Public: consume due notifications (marks them fired for the anti-spam
 * rule) and return them — used once per app load by the client. */
export async function collectNotificationsForUser(
  userId: string,
): Promise<NotificationItemDto[] | null> {
  const context = await loadContext(userId);
  if (!context) return null;
  const plan = await loadActivePlan(userId);
  const state = await buildNotificationsDto(
    userId,
    {
      examDate: context.profile.examDate,
      examName: context.spec.name,
      targetScore: context.profile.targetScore,
    },
    plan,
    { markFired: true },
  );
  return state.feed;
}

export async function updateNotificationPrefs(
  userId: string,
  input: NotificationPrefDto[],
): Promise<PlannerNotificationsDto | null> {
  const context = await loadContext(userId);
  if (!context) return null;
  for (const pref of input) {
    if (!NOTIFICATION_CATEGORIES.includes(pref.category)) continue;
    await db.examNotificationPref.upsert({
      where: { userId_category: { userId, category: pref.category } },
      create: {
        userId,
        category: pref.category,
        enabled: pref.enabled,
        config: JSON.stringify(pref.config ?? {}),
      },
      update: {
        enabled: pref.enabled,
        config: JSON.stringify(pref.config ?? {}),
      },
    });
  }
  const plan = await loadActivePlan(userId);
  return buildNotificationsDto(
    userId,
    {
      examDate: context.profile.examDate,
      examName: context.spec.name,
      targetScore: context.profile.targetScore,
    },
    plan,
  );
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function getPlannerState(userId: string): Promise<PlannerStateDto> {
  const context = await loadContext(userId);
  if (!context) {
    return {
      onboarded: false,
      profile: null,
      baseline: null,
      plan: null,
      readiness: null,
      scoreGap: null,
      notifications: null,
      adaptation: null,
    };
  }

  const examKey = context.profile.examKey as ExamKey;
  const plan = await loadActivePlan(userId);
  const attemptRows = await loadRecentAttempts(userId, examKey, context.profile.variant);

  // Coach evidence: evaluation weaknesses + timing signals (PROMPT 53 §2/§6).
  const [evaluationWeaknesses, timeManagement] = await Promise.all([
    loadEvaluationWeaknesses(userId, examKey),
    loadTimeManagementSignals(userId, examKey, context.profile.variant, context.spec),
  ]);

  const difficultSections = context.profile.difficultSections.filter((section) =>
    ["listening", "reading", "writing", "speaking"].includes(section),
  ) as SectionKey[];

  const baseline = buildBaselineDiagnostic({
    scoringKind: context.spec.scoringModel.kind,
    targetScore: context.profile.targetScore,
    estimates: context.estimates,
    difficultSections,
    weaknessTags: context.weaknessTags,
    evaluationWeaknesses,
    timeManagement,
  });
  const readiness = await buildReadinessForUser(userId, context, plan, attemptRows);

  const scoreGapAttempts: ScoreGapAttemptInput[] = attemptRows.map((row) => ({
    totalScore: row.totalScore,
    timed: isTimedMode(row.mode, row.timed),
    scoreDisplay: row.scoreDisplay,
    modeLabel: attemptModeLabel(row.mode),
    submittedAt: row.submittedAt ? row.submittedAt.toISOString() : null,
    sectionScores: parseSectionScores(row.sectionScores),
  }));
  const scoreGap: ScoreGapDto = buildScoreGap({
    scoringKind: context.spec.scoringModel.kind,
    targetScore: context.profile.targetScore,
    selfReported: context.profile.currentScoreEstimate,
    estimatedOverall: context.estimatedOverall,
    estimates: context.estimates.map((entry) => ({ section: entry.section, estimated: entry.estimated })),
    attempts: scoreGapAttempts,
    difficultSections,
  });

  const notifications = await buildNotificationsDto(
    userId,
    {
      examDate: context.profile.examDate,
      examName: context.spec.name,
      targetScore: context.profile.targetScore,
    },
    plan,
  );

  let adaptation: PlannerStateDto["adaptation"] = null;
  if (plan) {
    const attemptCount = await db.mockTestAttempt.count({
      where: {
        userId,
        status: { in: ["submitted", "scored"] },
        mockTest: {
          examKey: context.profile.examKey,
          variant: context.profile.variant,
        },
      },
    });
    const known = plan.meta.evidenceSnapshot?.mockAttempts ?? 0;
    adaptation = {
      suggested: attemptCount > known,
      reason:
        attemptCount > known
          ? `${attemptCount - known} new mock attempt${attemptCount - known > 1 ? "s" : ""} since the plan was last adapted — review the changes before they apply.`
          : "No new mock evidence since the last adaptation.",
    };
  }

  return {
    onboarded: true,
    profile: {
      examKey: context.profile.examKey,
      variant: context.profile.variant,
      examName: context.spec.name,
      targetScore: context.profile.targetScore,
      examDate: context.profile.examDate,
      dailyMinutes: context.profile.dailyMinutes,
      proficiency: context.profile.proficiency,
      difficultSections: context.profile.difficultSections.filter((section) =>
        ["listening", "reading", "writing", "speaking"].includes(section),
      ) as SectionKey[],
      strongestSection: (context.profile.strongestSection as SectionKey | null) ?? null,
      previousAttempts: context.profile.previousAttempts,
      currentScoreEstimate: context.profile.currentScoreEstimate,
      scoringKind: context.spec.scoringModel.kind,
      maxSectionScore: context.spec.scoringModel.maxSectionScore,
    },
    baseline,
    plan,
    readiness,
    scoreGap,
    notifications,
    adaptation,
  };
}

export async function generatePlannerPlan(
  userId: string,
  input: PlannerGenerateInput,
): Promise<PlannerPlanDto> {
  const context = await loadContext(userId);
  if (!context) throw new Error("NOT_ONBOARDED");
  const { profile, spec } = context;
  const examKey = profile.examKey as ExamKey;

  // Persist the planner extras of the initial assessment.
  const strongest =
    input.strongestSection !== undefined
      ? input.strongestSection
      : (profile.strongestSection as SectionKey | null);
  const previousAttempts: PreviousAttempt[] =
    input.previousAttempts ?? profile.previousAttempts;
  await upsertProfile(userId, {
    examKey,
    variant: profile.variant,
    delivery: profile.delivery === "UKVI" ? "UKVI" : "STANDARD",
    proficiency: (CEFR_LEVELS as readonly string[]).includes(profile.proficiency)
      ? (profile.proficiency as (typeof CEFR_LEVELS)[number])
      : "UNKNOWN",
    targetScore: profile.targetScore,
    examDate: profile.examDate,
    dailyMinutes: profile.dailyMinutes,
    difficultSections: profile.difficultSections as SectionKey[],
    strongestSection: strongest ?? null,
    previousAttempts,
  });

  const startDate = input.startDate ?? todayIso();
  const pathwaySteps = await loadPendingPathwaySteps(userId, examKey, profile.variant);
  const mocks = await loadPublishedMocks(examKey, profile.variant);
  const mistakeCount = await countMistakes(userId);
  const specTotalMinutes = Math.round(
    spec.sections.reduce((sum, section) => sum + section.timingSec, 0) / 60,
  );

  const generation = generatePlan({
    examKey,
    examName: spec.name,
    scoringKind: spec.scoringModel.kind,
    specTotalMinutes,
    maxSectionScore: spec.scoringModel.maxSectionScore,
    targetScore: profile.targetScore,
    proficiency: profile.proficiency,
    dailyMinutes: profile.dailyMinutes,
    difficultSections: profile.difficultSections.filter((section) =>
      ["listening", "reading", "writing", "speaking"].includes(section),
    ) as SectionKey[],
    strongestSection: strongest,
    estimates: context.estimates.map((entry) => ({
      section: entry.section,
      estimated: entry.estimated,
      confidence: entry.confidence,
    })),
    pathwaySteps,
    mocks,
    mistakeCount,
    examDate: profile.examDate,
    durationDays: input.durationDays,
    startDate,
    previousAttempts,
  });

  const meta: PlanMeta = {
    ...generation.meta,
    adaptations: [],
    evidenceSnapshot: {
      mockAttempts: await db.mockTestAttempt.count({
        where: {
          userId,
          status: { in: ["submitted", "scored"] },
          mockTest: { examKey, variant: profile.variant },
        },
      }),
    },
  };

  const endDate = new Date(
    new Date(`${startDate}T00:00:00Z`).getTime() + (generation.effectiveDays - 1) * DAY_MS,
  );

  const created = await db.$transaction(async (tx) => {
    await tx.examPlannerPlan.updateMany({
      where: { userId, status: "active" },
      data: { status: "archived" },
    });
    const planRow = await tx.examPlannerPlan.create({
      data: {
        userId,
        examKey,
        variant: profile.variant,
        durationDays: input.durationDays,
        startDate: new Date(`${startDate}T00:00:00Z`),
        endDate,
        status: "active",
        reminderTime: input.reminderTime ?? null,
        reminderDays: JSON.stringify(input.reminderDays ?? [1, 2, 3, 4, 5]),
        meta: JSON.stringify(meta),
      },
    });
    for (const day of generation.days) {
      await tx.examPlannerDay.create({
        data: {
          planId: planRow.id,
          dayIndex: day.dayIndex,
          date: day.date,
          phase: day.phase,
          focus: day.focus,
          tasks: {
            create: day.tasks.map((task) => ({
              type: task.type,
              section: task.section,
              title: task.title,
              detail: task.detail,
              minutes: task.minutes,
              difficulty: task.difficulty,
              href: task.href,
              stepId: task.stepId,
              mockTestId: task.mockTestId,
              status: "todo",
              sortOrder: task.sortOrder,
              reason: task.reason,
            })),
          },
        },
      });
    }
    return planRow;
  });

  const fresh = await db.examPlannerPlan.findUnique({
    where: { id: created.id },
    include: { days: { include: { tasks: true } } },
  });
  return toPlanDto(fresh as PlanRowWithRelations);
}

export async function setPlannerTaskStatus(
  userId: string,
  taskId: string,
  status: PlannerTaskStatus,
): Promise<PlannerTaskDto> {
  const task = await db.examPlannerTask.findUnique({
    where: { id: taskId },
    include: { day: { include: { plan: true } } },
  });
  if (!task || task.day.plan.userId !== userId) throw new Error("NOT_FOUND");

  const updated = await db.examPlannerTask.update({
    where: { id: taskId },
    data: { status, completedAt: status === "done" ? new Date() : null },
  });

  // Completing a pathway-linked task marks the pathway step too — the plan
  // and the pathway must never disagree.
  if (status === "done" && updated.stepId) {
    await db.examPathwayStepProgress.upsert({
      where: { userId_stepId: { userId, stepId: updated.stepId } },
      create: { userId, stepId: updated.stepId },
      update: {},
    });
  }

  return {
    id: updated.id,
    type: updated.type as PlannerTaskType,
    typeLabel: PLANNER_TASK_TYPE_LABELS[updated.type as PlannerTaskType] ?? "Consolidation & review",
    section: (updated.section as SectionKey | null) ?? null,
    title: updated.title,
    detail: updated.detail,
    minutes: updated.minutes,
    difficulty: updated.difficulty as PlannerDifficulty,
    href: updated.href,
    stepId: updated.stepId,
    mockTestId: updated.mockTestId,
    status,
    completedAt: updated.completedAt ? updated.completedAt.toISOString() : null,
    reason: updated.reason,
  };
}

export async function updatePlannerReminder(
  userId: string,
  input: { reminderTime: string | null; reminderDays: number[] },
): Promise<PlannerPlanDto> {
  const plan = await db.examPlannerPlan.findFirst({
    where: { userId, status: "active" },
    orderBy: { generatedAt: "desc" },
  });
  if (!plan) throw new Error("NO_PLAN");
  await db.examPlannerPlan.update({
    where: { id: plan.id },
    data: { reminderTime: input.reminderTime, reminderDays: JSON.stringify(input.reminderDays) },
  });
  return (await loadActivePlan(userId)) as PlannerPlanDto;
}

export type AdaptationOutcome = {
  plan: PlannerPlanDto;
  changes: string[];
  noChangeReason: string | null;
  recommendedLessons: Array<{
    title: string;
    reason: string;
    href: string;
    minutes: number;
    section: SectionKey;
    previouslyRecommended: boolean;
  }>;
};

export async function adaptPlannerPlan(userId: string): Promise<AdaptationOutcome> {
  const context = await loadContext(userId);
  if (!context) throw new Error("NOT_ONBOARDED");
  const planDto = await loadActivePlan(userId);
  if (!planDto) throw new Error("NO_PLAN");

  const attemptRows = await loadRecentAttempts(
    userId,
    context.profile.examKey as ExamKey,
    context.profile.variant,
    6,
  );
  const observed: ObservedAttempt[] = attemptRows.map((row) => ({
    timed: isTimedMode(row.mode, row.timed),
    submittedAt: row.submittedAt ? row.submittedAt.toISOString() : null,
    sectionScores: parseSectionScores(row.sectionScores),
  }));

  const performance = analyseSectionPerformance({
    scoringKind: context.spec.scoringModel.kind,
    targetScore: context.profile.targetScore,
    attempts: observed,
  });

  // PROMPT 53 §6: error categories from recent AI evaluations join the mock
  // skill gaps, and recommendations respect completed work.
  const evaluationWeaknesses = await loadEvaluationWeaknesses(
    userId,
    context.profile.examKey as ExamKey,
  );
  const mergedWeaknessTags: Partial<Record<SectionKey, string[]>> = {};
  for (const section of ["listening", "reading", "writing", "speaking"] as SectionKey[]) {
    mergedWeaknessTags[section] = [
      ...new Set([
        ...(context.weaknessTags[section] ?? []),
        ...(weaknessTagsFromEvaluations(evaluationWeaknesses)[section] ?? []),
      ]),
    ];
  }
  const [completedLessonHrefs] = await Promise.all([loadCompletedLessonHrefs(userId)]);
  const previouslyRecommendedHrefs = (planDto.meta.adaptations ?? []).flatMap(
    (entry) => entry.recommendedLessonHrefs ?? [],
  );

  const daysRemaining = planDto.progress.daysTotal - (planDto.todayDayIndex ?? 1) + 1;
  const adaptation = buildAdaptation({
    scoringKind: context.spec.scoringModel.kind,
    targetScore: context.profile.targetScore,
    performance,
    weaknessTags: mergedWeaknessTags,
    difficultSections: context.profile.difficultSections.filter((section) =>
      ["listening", "reading", "writing", "speaking"].includes(section),
    ) as SectionKey[],
    currentDifficultyOverrides: planDto.meta.difficultyOverrides ?? {},
    daysRemaining,
    completedLessonHrefs,
    previouslyRecommendedHrefs,
  });

  const planRow = await db.examPlannerPlan.findUnique({
    where: { id: planDto.id },
    include: { days: { include: { tasks: true } } },
  });
  if (!planRow) throw new Error("NO_PLAN");
  const meta = parseJsonOr<PlanMeta>(planRow.meta, {
    phases: [],
    focusWeights: {},
    difficultyOverrides: {},
    notes: [],
    suggestedDurationDays: null,
    adaptations: [],
    evidenceSnapshot: { mockAttempts: 0 },
  });

  if (adaptation.noChangeReason) {
    return {
      plan: planDto,
      changes: [],
      noChangeReason: adaptation.noChangeReason,
      recommendedLessons: adaptation.recommendedLessons,
    };
  }

  // Regenerate from tomorrow (today's tasks stay untouched).
  const startIso = planRow.startDate.toISOString().slice(0, 10);
  const emitFrom = (planDto.todayDayIndex ?? 0) + 1;
  const pathwaySteps = await loadPendingPathwaySteps(
    userId,
    context.profile.examKey as ExamKey,
    context.profile.variant,
  );
  const mocks = await loadPublishedMocks(
    context.profile.examKey as ExamKey,
    context.profile.variant,
  );
  const mistakeCount = await countMistakes(userId);
  const specTotalMinutes = Math.round(
    context.spec.sections.reduce((sum, section) => sum + section.timingSec, 0) / 60,
  );

  const generation = generatePlan({
    examKey: context.profile.examKey as ExamKey,
    examName: context.spec.name,
    scoringKind: context.spec.scoringModel.kind,
    specTotalMinutes,
    maxSectionScore: context.spec.scoringModel.maxSectionScore,
    targetScore: context.profile.targetScore,
    proficiency: context.profile.proficiency,
    dailyMinutes: context.profile.dailyMinutes,
    difficultSections: context.profile.difficultSections.filter((section) =>
      ["listening", "reading", "writing", "speaking"].includes(section),
    ) as SectionKey[],
    strongestSection: (context.profile.strongestSection as SectionKey | null) ?? null,
    estimates: context.estimates.map((entry) => ({
      section: entry.section,
      estimated: entry.estimated,
      confidence: entry.confidence,
    })),
    pathwaySteps,
    mocks,
    mistakeCount,
    examDate: context.profile.examDate,
    durationDays: planRow.durationDays,
    startDate: startIso,
    previousAttempts: context.profile.previousAttempts,
    focusWeightOverrides: adaptation.focusWeightOverrides,
    difficultyOverrides: adaptation.difficultyOverrides,
    emitFromDay: emitFrom,
  });

  if (generation.days.length > 0) {
    await db.$transaction(async (tx) => {
      await tx.examPlannerDay.deleteMany({
        where: { planId: planRow.id, dayIndex: { gte: emitFrom } },
      });
      for (const day of generation.days) {
        await tx.examPlannerDay.create({
          data: {
            planId: planRow.id,
            dayIndex: day.dayIndex,
            date: day.date,
            phase: day.phase,
            focus: day.focus,
            tasks: {
              create: day.tasks.map((task) => ({
                type: task.type,
                section: task.section,
                title: task.title,
                detail: task.detail,
                minutes: task.minutes,
                difficulty: task.difficulty,
                href: task.href,
                stepId: task.stepId,
                mockTestId: task.mockTestId,
                status: "todo",
                sortOrder: task.sortOrder,
                reason: task.reason,
              })),
            },
          },
        });
      }
    });
  }

  const newMeta: PlanMeta = {
    ...generation.meta,
    adaptations: [
      ...(meta.adaptations ?? []),
      {
        at: new Date().toISOString(),
        changes: adaptation.changes,
        recommendedLessonHrefs: adaptation.recommendedLessons.map((lesson) => lesson.href),
      },
    ],
    evidenceSnapshot: {
      mockAttempts: await db.mockTestAttempt.count({
        where: {
          userId,
          status: { in: ["submitted", "scored"] },
          mockTest: { examKey: context.profile.examKey, variant: context.profile.variant },
        },
      }),
    },
  };
  await db.examPlannerPlan.update({
    where: { id: planRow.id },
    data: { meta: JSON.stringify(newMeta), updatedAt: new Date() },
  });

  const fresh = await loadActivePlan(userId);
  return {
    plan: fresh as PlannerPlanDto,
    changes: adaptation.changes,
    noChangeReason: null,
    recommendedLessons: adaptation.recommendedLessons,
  };
}

export async function archivePlannerPlan(userId: string): Promise<boolean> {
  const result = await db.examPlannerPlan.updateMany({
    where: { userId, status: "active" },
    data: { status: "archived" },
  });
  return result.count > 0;
}

export { READINESS_DISCLAIMER };
