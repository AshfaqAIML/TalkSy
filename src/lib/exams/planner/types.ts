/**
 * Personalized examination study planner — shared types, zod schemas and
 * the honesty copy every surface must carry.
 *
 * The planner is a layer over the existing academy: the initial assessment
 * extends the exam profile, the baseline diagnostic reuses the section
 * estimate engine, daily tasks deep-link curriculum and mock content that
 * already exists, adaptation reuses the learning-loop bridge rules, and
 * readiness is computed from real attempts only. Nothing here may promise
 * a score — the planner schedules practice, it never guarantees outcomes.
 */

import { z } from "zod";
import { SECTION_KEYS, type SectionKey } from "../types";

// ---------------------------------------------------------------------------
// Task taxonomy (the daily plan's activity types)
// ---------------------------------------------------------------------------

export const PLANNER_TASK_TYPES = [
  "vocabulary",
  "grammar",
  "reading",
  "listening",
  "writing",
  "speaking",
  "mock_exam",
  "mistake_revision",
  "diagnostic",
  "lesson",
  "review",
] as const;
export type PlannerTaskType = (typeof PLANNER_TASK_TYPES)[number];

export const PLANNER_TASK_TYPE_LABELS: Record<PlannerTaskType, string> = {
  vocabulary: "Vocabulary development",
  grammar: "Grammar revision",
  reading: "Reading practice",
  listening: "Listening exercises",
  writing: "Writing assignments",
  speaking: "Speaking simulations",
  mock_exam: "Mock examination",
  mistake_revision: "Mistake revision",
  diagnostic: "Baseline diagnostic",
  lesson: "Course lesson",
  review: "Consolidation & review",
};

export const PLANNER_PHASES = ["foundation", "skills", "mock_cycle", "final_review"] as const;
export type PlannerPhase = (typeof PLANNER_PHASES)[number];

export const PLANNER_PHASE_LABELS: Record<PlannerPhase, string> = {
  foundation: "Foundation",
  skills: "Skill building",
  mock_cycle: "Mock cycle",
  final_review: "Final review",
};

export const PLANNER_DIFFICULTIES = ["easier", "medium", "harder"] as const;
export type PlannerDifficulty = (typeof PLANNER_DIFFICULTIES)[number];

/** Study-plan duration presets (PROMPT 53: 7/14/30/45/60/90 + custom 3–120). */
export const PLANNER_DURATION_PRESET_DAYS = [7, 14, 30, 45, 60, 90] as const;

export const PLANNER_TASK_STATUSES = ["todo", "done", "skipped"] as const;
export type PlannerTaskStatus = (typeof PLANNER_TASK_STATUSES)[number];

// ---------------------------------------------------------------------------
// Readiness (honest labels — exactly these four, nothing stronger)
// ---------------------------------------------------------------------------

export const READINESS_LABELS = [
  "NEEDS_FOUNDATIONAL_PREPARATION",
  "DEVELOPING",
  "APPROACHING_TARGET",
  "CONSISTENTLY_PERFORMING_NEAR_TARGET",
] as const;
export type ReadinessLabel = (typeof READINESS_LABELS)[number];

export const READINESS_LABEL_TEXT: Record<ReadinessLabel, string> = {
  NEEDS_FOUNDATIONAL_PREPARATION: "Needs foundational preparation",
  DEVELOPING: "Developing",
  APPROACHING_TARGET: "Approaching target",
  CONSISTENTLY_PERFORMING_NEAR_TARGET: "Consistently performing near target",
};

export const READINESS_LABEL_NOTES: Record<ReadinessLabel, string> = {
  NEEDS_FOUNDATIONAL_PREPARATION:
    "Current evidence sits well below the target — build language foundations before exam technique.",
  DEVELOPING:
    "You are making progress but the measured gap to the target is still meaningful.",
  APPROACHING_TARGET:
    "Recent evidence is close to the target — keep the routine and close the remaining gap.",
  CONSISTENTLY_PERFORMING_NEAR_TARGET:
    "Several recent timed attempts have all landed near the target. Keep practising — variance on the real day is normal.",
};

// ---------------------------------------------------------------------------
// Honesty copy (single source; tests + UI + API responses reuse it)
// ---------------------------------------------------------------------------

/** Never claim a target score is guaranteed. */
export const PLANNER_NO_GUARANTEE_NOTE =
  "This plan schedules realistic practice based on your inputs — it cannot guarantee any target score, and no honest coach or tool can.";

/** Mock estimates are not official results. */
export const READINESS_DISCLAIMER =
  "Mock-exam estimates are practice estimates, not official results, and do not guarantee actual performance on test day.";

/** Reminders work only while the app is open — say so. */
export const PLANNER_REMINDER_SCOPE_NOTE =
  "Reminders appear while EnglishPath is open in a browser tab (with optional desktop notifications) — they are not push notifications.";

/** Section targets are derived from the overall target, stated openly. */
export const PLANNER_SECTION_TARGET_NOTE =
  "Section targets are derived from your overall target as an even split — official scores weight sections differently.";

/** Notifications are rate-limited by design — say so where they appear. */
export const NOTIFICATION_ANTI_SPAM_NOTE =
  "Reminders are capped: at most one per category per day and a small daily total, so the coach supports your routine instead of nagging.";

/** Self-reported scores are context, never measured evidence. */
export const PLANNER_SELF_REPORT_NOTE =
  "Your self-reported score is context for the coach — measured evidence comes from practice and mock attempts.";

// ---------------------------------------------------------------------------
// Initial assessment (planner extras on top of the exam profile)
// ---------------------------------------------------------------------------

export const previousAttemptSchema = z.object({
  /** Exam name as the learner reports it, e.g. "IELTS Academic". */
  exam: z.string().min(1).max(60),
  /** Overall score on that exam's scale. */
  overall: z.number().min(0).max(9.5),
  /** Sitting date (free text month/year accepted). */
  date: z.string().max(20).optional(),
});
export type PreviousAttempt = z.infer<typeof previousAttemptSchema>;

export const plannerGenerateInputSchema = z.object({
  /** Plan length in days. Preset buttons send 7/14/30/60/90; custom is 3–120. */
  durationDays: z.number().int().min(3).max(120),
  /** ISO date the plan starts on (default today). */
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  reminderTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/)
    .nullable()
    .optional(),
  reminderDays: z.array(z.number().int().min(0).max(6)).max(7).optional(),
  strongestSection: z.enum(SECTION_KEYS).nullable().optional(),
  previousAttempts: z.array(previousAttemptSchema).max(10).optional(),
});
export type PlannerGenerateInput = z.infer<typeof plannerGenerateInputSchema>;

export const plannerTaskStatusInputSchema = z.object({
  taskId: z.string().min(1),
  status: z.enum(PLANNER_TASK_STATUSES),
});

export const plannerReminderInputSchema = z.object({
  reminderTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/)
    .nullable(),
  reminderDays: z.array(z.number().int().min(0).max(6)).max(7),
});

// ---------------------------------------------------------------------------
// DTOs returned by the service
// ---------------------------------------------------------------------------

export type PlannerTaskDto = {
  id: string;
  type: PlannerTaskType;
  typeLabel: string;
  section: SectionKey | null;
  title: string;
  detail: string;
  minutes: number;
  difficulty: PlannerDifficulty;
  href: string;
  stepId: string | null;
  mockTestId: string | null;
  status: PlannerTaskStatus;
  completedAt: string | null;
  reason: string;
};

export type PlannerDayDto = {
  id: string;
  dayIndex: number;
  date: string;
  phase: PlannerPhase;
  phaseLabel: string;
  focus: string;
  isRestDay: boolean;
  tasks: PlannerTaskDto[];
  minutes: number;
  doneCount: number;
};

export type PlanPhaseSpan = { key: PlannerPhase; label: string; fromDay: number; toDay: number };

export type PlanAdaptation = {
  at: string;
  changes: string[];
  /** Lesson hrefs this adaptation recommended (PROMPT 53 §6 — so the next
   * adaptation knows what was already suggested and can prefer fresh ones). */
  recommendedLessonHrefs?: string[];
};

export type PlanMeta = {
  phases: PlanPhaseSpan[];
  focusWeights: Partial<Record<SectionKey, number>>;
  difficultyOverrides: Partial<Record<SectionKey, PlannerDifficulty>>;
  notes: string[];
  suggestedDurationDays: number | null;
  adaptations: PlanAdaptation[];
  /** Attempt evidence the plan was last adapted to. */
  evidenceSnapshot: { mockAttempts: number };
};

export type PlannerPlanProgress = {
  tasksDone: number;
  tasksSkipped: number;
  tasksTotal: number;
  percent: number;
  daysElapsed: number;
  daysTotal: number;
};

export type PlannerPlanDto = {
  id: string;
  examKey: string;
  variant: string;
  durationDays: number;
  effectiveDays: number;
  startDate: string;
  endDate: string;
  status: "active" | "archived";
  reminderTime: string | null;
  reminderDays: number[];
  /** 1-based index of today inside the plan (null = before start/after end). */
  todayDayIndex: number | null;
  days: PlannerDayDto[];
  meta: PlanMeta;
  progress: PlannerPlanProgress;
};

export type BaselineSectionDto = {
  section: SectionKey;
  estimated: number;
  confidence: number;
  basis: "self-rating" | "curriculum practice" | "mock examination";
  evidenceNote: string;
  needsEvidence: boolean;
  diagnosticAction: { title: string; href: string; minutes: number } | null;
};

// ---------------------------------------------------------------------------
// Diagnostic weakness areas (PROMPT 53 §2 — grammar, vocabulary, the four
// skills and time management, each with concrete findings)
// ---------------------------------------------------------------------------

export const WEAKNESS_AREA_KEYS = [
  "grammar",
  "vocabulary",
  "reading",
  "listening",
  "writing",
  "speaking",
  "time_management",
] as const;
export type WeaknessAreaKey = (typeof WEAKNESS_AREA_KEYS)[number];

export const WEAKNESS_AREA_LABELS: Record<WeaknessAreaKey, string> = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  reading: "Reading comprehension",
  listening: "Listening comprehension",
  writing: "Writing",
  speaking: "Speaking",
  time_management: "Time management",
};

export type WeaknessAreaDto = {
  key: WeaknessAreaKey;
  label: string;
  /** Concrete findings, each tied to real evidence (tags, evaluations, timing). */
  findings: string[];
  /** Where the signal came from — never invented. */
  sources: string[];
  priority: "high" | "medium" | "low" | "clear";
};

export type BaselineDiagnosticDto = {
  sections: BaselineSectionDto[];
  overall: number | null;
  rankedWeaknesses: Array<{
    section: SectionKey;
    gap: number;
    priority: "high" | "medium" | "low";
    note: string;
  }>;
  mostImportant: { section: SectionKey; note: string } | null;
  /** PROMPT 53 §2: grammar / vocabulary / skills / time-management findings. */
  weaknessAreas: WeaknessAreaDto[];
  note: string;
};

export type ReadinessSectionDto = {
  section: SectionKey;
  estimated: number;
  target: number;
  gap: number;
  status: "at_target" | "within_reach" | "needs_focused_work";
  note: string;
};

export type ReadinessReportDto = {
  label: ReadinessLabel;
  labelText: string;
  labelNote: string;
  /** Why THIS label was assigned to THIS learner (PROMPT 53 §7). */
  why: string[];
  evidence: {
    timedExamAttempts: number;
    attemptsUsed: number;
    hasEnoughEvidence: boolean;
    evidenceNote: string;
  };
  overall: { estimated: number | null; target: number; gap: number | null; onTarget: boolean };
  sections: ReadinessSectionDto[];
  completion: { percent: number; tasksDone: number; tasksTotal: number } | null;
  recentMocks: Array<{
    attemptId: string;
    mockTitle: string;
    scoreDisplay: string | null;
    totalScore: number | null;
    timed: boolean;
    modeLabel: string;
    submittedAt: string | null;
  }>;
  nextSteps: string[];
  disclaimer: string;
  noGuaranteeNote: string;
};

export type PlannerStateDto = {
  onboarded: boolean;
  profile: {
    examKey: string;
    variant: string;
    examName: string | null;
    targetScore: number;
    examDate: string | null;
    dailyMinutes: number;
    proficiency: string;
    difficultSections: SectionKey[];
    strongestSection: SectionKey | null;
    previousAttempts: PreviousAttempt[];
    /** Self-reported current score from onboarding (context, not evidence). */
    currentScoreEstimate: number | null;
    scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
    maxSectionScore: number;
  } | null;
  baseline: BaselineDiagnosticDto | null;
  plan: PlannerPlanDto | null;
  readiness: ReadinessReportDto | null;
  /** PROMPT 53 §5 — score gap analysis (current vs target vs trend). */
  scoreGap: ScoreGapDto | null;
  /** PROMPT 53 §8 — notification preferences + the current due feed. */
  notifications: PlannerNotificationsDto | null;
  /** Whether new mock evidence exists since the plan was last adapted. */
  adaptation: { suggested: boolean; reason: string } | null;
};

// ---------------------------------------------------------------------------
// Score gap analysis (PROMPT 53 §5)
// ---------------------------------------------------------------------------

export type ScoreTrendDirection = "improving" | "steady" | "declining" | "insufficient_data";

export type ScoreGapSectionDto = {
  section: SectionKey;
  /** Current estimated performance on the exam's own scale. */
  current: number;
  /** Section-wise target (openly derived from the overall target). */
  target: number;
  gap: number;
  status: "at_target" | "within_reach" | "needs_focused_work";
  trend: ScoreTrendDirection;
  trendNote: string;
};

export type ScoreGapRecentResultDto = {
  date: string | null;
  scoreDisplay: string | null;
  totalScore: number | null;
  timed: boolean;
  modeLabel: string;
  source: "mock attempt";
};

export type ScoreGapWorkPriorityDto = {
  section: SectionKey;
  /** 1 = needs the most work. */
  rank: number;
  gap: number;
  trend: ScoreTrendDirection;
  reason: string;
};

export type ScoreGapDto = {
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  /** The learner's self-reported score, shown as context only. */
  selfReported: number | null;
  /** Measured overall estimate on the exam scale (null = unmeasured). */
  current: number | null;
  target: number;
  overallGap: number | null;
  overallTrend: ScoreTrendDirection;
  overallTrendNote: string;
  sections: ScoreGapSectionDto[];
  recentResults: ScoreGapRecentResultDto[];
  workPriorities: ScoreGapWorkPriorityDto[];
  /** Which skills require the most work, in plain words. */
  summary: string;
  notes: string[];
};

// ---------------------------------------------------------------------------
// Coach notifications (PROMPT 53 §8)
// ---------------------------------------------------------------------------

export const NOTIFICATION_CATEGORIES = [
  "daily_study",
  "upcoming_mock",
  "revision",
  "exam_date",
  "incomplete_assignments",
] as const;
export type NotificationCategory = (typeof NOTIFICATION_CATEGORIES)[number];

export const NOTIFICATION_CATEGORY_LABELS: Record<NotificationCategory, string> = {
  daily_study: "Daily learning",
  upcoming_mock: "Upcoming mock tests",
  revision: "Revision",
  exam_date: "Examination date",
  incomplete_assignments: "Incomplete assignments",
};

export const NOTIFICATION_CATEGORY_DESCRIPTIONS: Record<NotificationCategory, string> = {
  daily_study: "One nudge per study day at your chosen time — your routine anchor.",
  upcoming_mock: "A heads-up the day before a mock examination is scheduled in your plan.",
  revision: "A prompt when revision tasks fall behind (mistake sweeps, review days).",
  exam_date: "A countdown at 7, 3 and 1 day(s) before your examination date.",
  incomplete_assignments: "A gentle catch-up prompt when a planned day passes unfinished.",
};

/** Per-category default configuration (stored per learner as JSON). */
export type NotificationConfig = {
  /** daily_study: HH:MM 24h the reminder fires. */
  time?: string;
  /** daily_study: weekdays (0=Sun…6=Sat) it fires. */
  days?: number[];
  /** exam_date: countdown lead days. */
  leadDays?: number[];
};

export type NotificationPrefDto = {
  category: NotificationCategory;
  enabled: boolean;
  config: NotificationConfig;
};

export type NotificationItemDto = {
  category: NotificationCategory;
  categoryLabel: string;
  title: string;
  body: string;
  /** When the underlying event happens / is due (ISO date or datetime). */
  dueAt: string | null;
  /** Deep link into the app. */
  href: string;
};

export type PlannerNotificationsDto = {
  prefs: NotificationPrefDto[];
  /** Items due now (already filtered + rate-limited server-side). */
  feed: NotificationItemDto[];
  scopeNote: string;
  antiSpamNote: string;
};
