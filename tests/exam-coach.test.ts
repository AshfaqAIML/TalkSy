/// <reference types="bun-types" />
/**
 * PROMPT 53 — Personalised Examination Preparation Coach tests.
 *
 * Covers the coach layer added on top of the planner:
 *   - score gap analysis (overall + section gaps, improvement trends from
 *     timed attempts, work priorities, self-report as context only);
 *   - coach notifications (five categories, per-category config, and the
 *     structural anti-spam: disabled categories never fire, one per
 *     category per day, a daily total cap served in priority order);
 *   - diagnostic weakness areas (grammar, vocabulary, the four skills and
 *     time management — each finding tied to real evidence);
 *   - adaptive recommendations that consider completed work (completed
 *     lessons never re-recommended, earlier recommendations marked and
 *     demoted, evaluation error categories mapped into the tag vocabulary);
 *   - readiness "why" explanations;
 *   - service persistence (current self-estimated score on the profile,
 *     notification preferences, the collect/marks-fired anti-spam cycle,
 *     and the daily-study config migration from legacy plan reminders).
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { getProfile, upsertProfile } from "@/lib/exams/profile";
import { buildScoreGap, trendFromScores } from "@/lib/exams/planner/score-gap";
import {
  buildNotificationFeed,
  computeDueNotifications,
  defaultPrefs,
  mergePrefs,
  NOTIFICATION_DAILY_TOTAL_CAP,
} from "@/lib/exams/planner/notifications";
import { buildBaselineDiagnostic } from "@/lib/exams/planner/diagnostic";
import {
  buildAdaptation,
  analyseSectionPerformance,
  weaknessTagsFromEvaluations,
} from "@/lib/exams/planner/adaptive";
import { buildReadinessReport } from "@/lib/exams/planner/readiness";
import {
  collectNotificationsForUser,
  generatePlannerPlan,
  getPlannerState,
  updateNotificationPrefs,
} from "@/lib/exams/planner/service";
import {
  NOTIFICATION_ANTI_SPAM_NOTE,
  type NotificationCategory,
  type PlannerPlanDto,
  type PlannerTaskDto,
} from "@/lib/exams/planner/types";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const NOW = new Date("2026-11-15T20:05:00.000Z"); // a Sunday, 20:05 UTC

function isoDatePlus(days: number, from = "2026-11-15"): string {
  const base = new Date(`${from}T00:00:00Z`).getTime();
  return new Date(base + days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

type PlanTaskFixture = PlannerTaskDto;

function task(overrides: Partial<PlannerTaskDto> & { id: string }): PlannerTaskDto {
  return {
    type: "reading",
    typeLabel: "Reading practice",
    section: "reading",
    title: "Practice",
    detail: "Do it",
    minutes: 20,
    difficulty: "medium",
    href: "#/reading",
    stepId: null,
    mockTestId: null,
    status: "todo",
    completedAt: null,
    reason: "fixture",
    ...overrides,
  };
}

function makePlan(overrides: Partial<PlannerPlanDto> = {}): PlannerPlanDto {
  return {
    id: "plan-1",
    examKey: "IELTS",
    variant: "ACADEMIC",
    durationDays: 14,
    effectiveDays: 14,
    startDate: "2026-11-10",
    endDate: "2026-11-23",
    status: "active",
    reminderTime: null,
    reminderDays: [],
    todayDayIndex: 6,
    days: [
      {
        id: "day-1",
        dayIndex: 1,
        date: "2026-11-10",
        phase: "foundation",
        phaseLabel: "Foundation",
        focus: "Writing & grammar",
        isRestDay: false,
        tasks: [task({ id: "t-done", status: "done" }), task({ id: "t-rev-open", type: "mistake_revision", section: null, status: "todo" })],
        minutes: 40,
        doneCount: 1,
      },
      {
        id: "day-6",
        dayIndex: 6,
        date: "2026-11-15",
        phase: "skills",
        phaseLabel: "Skill building",
        focus: "Reading",
        isRestDay: false,
        tasks: [task({ id: "t-today", status: "todo" })],
        minutes: 20,
        doneCount: 0,
      },
      {
        id: "day-7",
        dayIndex: 7,
        date: "2026-11-16",
        phase: "skills",
        phaseLabel: "Skill building",
        focus: "Mock",
        isRestDay: false,
        tasks: [task({ id: "t-mock", type: "mock_exam", section: null, title: "Full mock 1", status: "todo", href: "#/exams/mocks", mockTestId: "mock-1" })],
        minutes: 165,
        doneCount: 0,
      },
    ],
    meta: {
      phases: [],
      focusWeights: {},
      difficultyOverrides: {},
      notes: [],
      suggestedDurationDays: null,
      adaptations: [],
      evidenceSnapshot: { mockAttempts: 0 },
    },
    progress: { tasksDone: 1, tasksSkipped: 0, tasksTotal: 4, percent: 25, daysElapsed: 6, daysTotal: 14 },
    ...overrides,
  };
}

const ALL_PREFS_ON = defaultPrefs();
const PROFILE = { examDate: "2026-11-18", examName: "IELTS Academic", targetScore: 7 };

// ---------------------------------------------------------------------------
// Score gap analysis (PROMPT 53 §5)
// ---------------------------------------------------------------------------

describe("score gap analysis", () => {
  const estimates = [
    { section: "listening" as const, estimated: 6.5 },
    { section: "reading" as const, estimated: 7.5 },
    { section: "writing" as const, estimated: 5.0 },
    { section: "speaking" as const, estimated: 6.0 },
  ];

  it("computes overall and section gaps with an honest insufficient-data trend", () => {
    const gap = buildScoreGap({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      selfReported: 5.5,
      estimatedOverall: 6.25,
      estimates,
      attempts: [],
      difficultSections: ["writing"],
    });
    expect(gap.selfReported).toBe(5.5);
    expect(gap.current).toBe(6.25);
    expect(gap.target).toBe(7);
    expect(gap.overallGap).toBe(0.75);
    expect(gap.overallTrend).toBe("insufficient_data");
    expect(gap.sections.length).toBe(4);
    const writing = gap.sections.find((section) => section.section === "writing");
    expect(writing?.gap).toBe(2);
    expect(writing?.status).toBe("needs_focused_work");
    expect(gap.notes.some((note) => note.includes("self-reported 5.5"))).toBe(true);
  });

  it("reads improvement and decline from timed attempts (newest first)", () => {
    expect(trendFromScores([7.0, 6.2], 0.5)).toBe("improving");
    expect(trendFromScores([5.8, 6.6], 0.5)).toBe("declining");
    expect(trendFromScores([6.9, 6.8], 0.5)).toBe("steady");
    expect(trendFromScores([6.9], 0.5)).toBe("insufficient_data");

    const improving = buildScoreGap({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      selfReported: null,
      estimatedOverall: 6.5,
      estimates,
      attempts: [
        { totalScore: 7.0, timed: true, scoreDisplay: "Band 7.0", modeLabel: "Full mock", submittedAt: "2026-11-14", sectionScores: [] },
        { totalScore: 6.0, timed: true, scoreDisplay: "Band 6.0", modeLabel: "Full mock", submittedAt: "2026-11-01", sectionScores: [] },
      ],
      difficultSections: [],
    });
    expect(improving.overallTrend).toBe("improving");
    expect(improving.recentResults.length).toBe(2);
    expect(improving.notes.some((note) => note.includes("does not predict"))).toBe(true);
  });

  it("ranks which skills require the most work (gap first, decline adds urgency)", () => {
    const gap = buildScoreGap({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      selfReported: null,
      estimatedOverall: 6.25,
      estimates,
      attempts: [
        {
          totalScore: 6.5,
          timed: true,
          scoreDisplay: "Band 6.5",
          modeLabel: "Full mock",
          submittedAt: "2026-11-14",
          sectionScores: [
            { section: "listening", score: 6.5 },
            { section: "reading", score: 7.5 },
            { section: "writing", score: 5.5 },
            { section: "speaking", score: 6.0 },
          ],
        },
        {
          totalScore: 6.0,
          timed: true,
          scoreDisplay: "Band 6.0",
          modeLabel: "Full mock",
          submittedAt: "2026-11-01",
          sectionScores: [
            { section: "listening", score: 5.0 },
            { section: "reading", score: 7.0 },
            { section: "writing", score: 6.2 },
            { section: "speaking", score: 6.0 },
          ],
        },
      ],
      difficultSections: [],
    });
    const priorities = gap.workPriorities.map((entry) => entry.section);
    expect(priorities[0]).toBe("writing"); // biggest gap (2.0), declining
    expect(priorities.includes("reading")).toBe(true);
    expect(gap.summary).toContain("Writing");
  });

  it("says so honestly when nothing is measured yet", () => {
    const gap = buildScoreGap({
      scoringKind: "TOEFL_BAND_1_6",
      targetScore: 5,
      selfReported: 3.5,
      estimatedOverall: null,
      estimates: [
        { section: "listening" as const, estimated: 4 },
        { section: "reading" as const, estimated: 4.5 },
        { section: "writing" as const, estimated: 3.5 },
        { section: "speaking" as const, estimated: 4 },
      ],
      attempts: [],
      difficultSections: [],
    });
    expect(gap.current).toBeNull();
    expect(gap.overallGap).toBeNull();
    expect(gap.summary).toContain("No measured overall estimate yet");
  });
});

// ---------------------------------------------------------------------------
// Coach notifications (PROMPT 53 §8)
// ---------------------------------------------------------------------------

describe("coach notifications", () => {
  it("computes all five categories when their moment has come", () => {
    const due = computeDueNotifications({
      now: NOW,
      prefs: ALL_PREFS_ON,
      plan: makePlan(),
      profile: PROFILE, // exam in 3 days → exam_date lead day
      lastFiredAt: null,
    });
    const categories = due.map((item) => item.category);
    // 2026-11-18 minus 2026-11-15 = 3 days → exam_date; mock tomorrow → upcoming_mock;
    // Sunday 20:05 with default 19:30 Mon–Fri → daily_study NOT due (Sunday);
    // past revision task open → revision; past non-revision task? day-1 has a done
    // task + open revision → incomplete_assignments has nothing non-revision.
    expect(categories).toContain("exam_date");
    expect(categories).toContain("upcoming_mock");
    expect(categories).toContain("revision");
    expect(categories).not.toContain("daily_study"); // Sunday is not a study day
    expect(categories).not.toContain("incomplete_assignments");
  });

  it("fires daily_study on configured days after the configured time", () => {
    const monday = new Date("2026-11-16T19:31:00.000Z"); // Monday 19:31
    const before = new Date("2026-11-16T18:00:00.000Z");
    const prefs = defaultPrefs(); // 19:30, Mon–Fri
    const plan = makePlan();
    const input = (now: Date) => ({
      now,
      prefs,
      plan,
      profile: { examDate: null, examName: "IELTS Academic", targetScore: 7 },
      lastFiredAt: null as null,
    });
    expect(computeDueNotifications(input(monday)).some((item) => item.category === "daily_study")).toBe(true);
    expect(computeDueNotifications(input(before)).some((item) => item.category === "daily_study")).toBe(false);
  });

  it("never fires a disabled category", () => {
    const prefs = ALL_PREFS_ON.map((pref) =>
      pref.category === "exam_date" ? { ...pref, enabled: false } : pref,
    );
    const due = computeDueNotifications({
      now: NOW,
      prefs,
      plan: makePlan(),
      profile: PROFILE,
      lastFiredAt: null,
    });
    expect(due.some((item) => item.category === "exam_date")).toBe(false);
  });

  it("fires the exam countdown only on the configured lead days", () => {
    const input = (examDate: string) => ({
      now: NOW,
      prefs: ALL_PREFS_ON,
      plan: makePlan(),
      profile: { examDate, examName: "IELTS Academic", targetScore: 7 },
      lastFiredAt: null as null,
    });
    expect(computeDueNotifications(input("2026-11-18")).some((item) => item.category === "exam_date")).toBe(true); // 3 days
    expect(computeDueNotifications(input("2026-11-15")).some((item) => item.category === "exam_date")).toBe(true); // today
    expect(computeDueNotifications(input("2026-11-16")).some((item) => item.category === "exam_date")).toBe(true); // 1 day — a lead day
    expect(computeDueNotifications(input("2026-11-17")).some((item) => item.category === "exam_date")).toBe(false); // 2 days — not a lead day
    expect(computeDueNotifications(input("2026-12-01")).some((item) => item.category === "exam_date")).toBe(false); // 16 days — not a lead day
  });

  it("caps the feed at one per category per day and a small daily total, in priority order", () => {
    // Everything due at once: exam in 1 day (lead), mock tomorrow, Monday
    // 20:00 with all-days study, overdue revision AND overdue assignments.
    const mondayNight = new Date("2026-11-16T20:00:00.000Z");
    const plan = makePlan({
      reminderTime: null,
      days: [
        {
          id: "day-1",
          dayIndex: 1,
          date: "2026-11-10",
          phase: "foundation",
          phaseLabel: "Foundation",
          focus: "Writing",
          isRestDay: false,
          tasks: [
            task({ id: "t-open", type: "reading", status: "todo" }),
            task({ id: "t-rev-open", type: "mistake_revision", section: null, status: "todo" }),
          ],
          minutes: 40,
          doneCount: 0,
        },
        {
          id: "day-2",
          dayIndex: 2,
          date: "2026-11-16",
          phase: "skills",
          phaseLabel: "Skill building",
          focus: "Mock",
          isRestDay: false,
          tasks: [task({ id: "t-mock", type: "mock_exam", section: null, status: "todo", href: "#/exams/mocks" })],
          minutes: 165,
          doneCount: 0,
        },
      ],
      todayDayIndex: 2,
    });
    const prefs = defaultPrefs().map((pref) =>
      pref.category === "daily_study" ? { ...pref, config: { time: "19:30", days: [0, 1, 2, 3, 4, 5, 6] } } : pref,
    );
    const feed = buildNotificationFeed({
      now: mondayNight,
      prefs,
      plan,
      profile: { examDate: "2026-11-17", examName: "IELTS Academic", targetScore: 7 },
      lastFiredAt: null,
    });
    expect(feed.length).toBeLessThanOrEqual(NOTIFICATION_DAILY_TOTAL_CAP);
    expect(feed.length).toBe(3);
    // Priority order: exam_date > upcoming_mock > daily_study.
    expect(feed.map((item) => item.category)).toEqual(["exam_date", "upcoming_mock", "daily_study"]);
    // Per-category daily dedup: same category twice in the due list → one item.
    expect(new Set(feed.map((item) => item.category)).size).toBe(feed.length);
  });

  it("respects lastFiredAt — a category fired today never fires again today", () => {
    const monday = new Date("2026-11-16T19:31:00.000Z");
    const lastFiredAt: Partial<Record<NotificationCategory, string>> = {
      daily_study: "2026-11-16T08:00:00.000Z", // earlier today
    };
    const feed = buildNotificationFeed({
      now: monday,
      prefs: ALL_PREFS_ON,
      plan: makePlan(),
      profile: { examDate: null, examName: "IELTS Academic", targetScore: 7 },
      lastFiredAt,
    });
    expect(feed.some((item) => item.category === "daily_study")).toBe(false);
  });

  it("without a plan only the exam-date countdown can fire", () => {
    const due = computeDueNotifications({
      now: NOW,
      prefs: ALL_PREFS_ON,
      plan: null,
      profile: PROFILE,
      lastFiredAt: null,
    });
    expect(due.map((item) => item.category)).toEqual(["exam_date"]);
  });

  it("merges stored prefs over the defaults (missing rows stay default-on)", () => {
    const merged = mergePrefs([
      { category: "revision", enabled: false, config: "{}" },
      { category: "exam_date", enabled: true, config: JSON.stringify({ leadDays: [5, 1] }) },
      { category: "bogus", enabled: false, config: "{}" },
    ]);
    expect(merged.length).toBe(5);
    expect(merged.find((pref) => pref.category === "revision")?.enabled).toBe(false);
    expect(merged.find((pref) => pref.category === "exam_date")?.config.leadDays).toEqual([5, 1]);
    expect(merged.find((pref) => pref.category === "daily_study")?.enabled).toBe(true);
    expect(merged.find((pref) => (pref.category as string) === "bogus")).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// Diagnostic weakness areas (PROMPT 53 §2)
// ---------------------------------------------------------------------------

describe("diagnostic weakness areas", () => {
  const estimates = [
    { section: "listening" as const, estimated: 6.5, confidence: 0.9, strengths: [], weaknesses: [] },
    { section: "reading" as const, estimated: 7.5, confidence: 0.5, strengths: [], weaknesses: [] },
    { section: "writing" as const, estimated: 5.0, confidence: 0.9, strengths: [], weaknesses: [] },
    { section: "speaking" as const, estimated: 6.0, confidence: 0.4, strengths: [], weaknesses: [] },
  ];

  it("identifies grammar and vocabulary weaknesses from mock tags and AI evaluations", () => {
    const diagnostic = buildBaselineDiagnostic({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimates,
      difficultSections: ["writing"],
      weaknessTags: {
        writing: ["grammar", "sentence", "task-response"],
        reading: ["academic-vocab"],
      },
      evaluationWeaknesses: [
        { section: "writing", area: "grammar-accuracy", label: "Grammar accuracy", severity: "major", evidence: "6 correctable points in 240 words." },
        { section: "speaking", area: "lexical-range", label: "Vocabulary range", severity: "moderate", evidence: "4 upgrades suggested." },
      ],
      timeManagement: null,
    });
    const grammar = diagnostic.weaknessAreas.find((area) => area.key === "grammar");
    expect(grammar).toBeDefined();
    expect(grammar?.findings.some((finding) => finding.includes("grammar, sentence"))).toBe(true);
    expect(grammar?.findings.some((finding) => finding.includes("Grammar accuracy"))).toBe(true);
    expect(grammar?.sources).toContain("AI evaluation");
    expect(grammar?.priority).toBe("high"); // a major evaluation finding

    const vocabulary = diagnostic.weaknessAreas.find((area) => area.key === "vocabulary");
    expect(vocabulary).toBeDefined();
    expect(vocabulary?.findings.some((finding) => finding.includes("academic-vocab"))).toBe(true);

    // Skills: writing has the biggest gap → high priority.
    const writing = diagnostic.weaknessAreas.find((area) => area.key === "writing");
    expect(writing?.priority).toBe("high");
  });

  it("reports time management as unmeasured without a timed attempt", () => {
    const diagnostic = buildBaselineDiagnostic({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimates,
      difficultSections: [],
      timeManagement: null,
    });
    const timing = diagnostic.weaknessAreas.find((area) => area.key === "time_management");
    expect(timing).toBeDefined();
    expect(timing?.findings[0]).toContain("unmeasured");
    expect(timing?.priority).toBe("low");
  });

  it("surfaces concrete time-management findings from timing signals", () => {
    const diagnostic = buildBaselineDiagnostic({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimates,
      difficultSections: [],
      timeManagement: {
        timedAttempts: 1,
        totalItems: 40,
        unansweredItems: 9,
        avgSecPerItem: 95,
        budgetSecPerItem: 60,
      },
    });
    const timing = diagnostic.weaknessAreas.find((area) => area.key === "time_management");
    expect(timing?.priority).toBe("high");
    expect(timing?.findings.some((finding) => finding.includes("9 of 40 items were left unanswered"))).toBe(true);
    expect(timing?.findings.some((finding) => finding.includes("95s per item against a 60s budget"))).toBe(true);
    expect(timing?.sources).toContain("timing analysis");
  });

  it("calls healthy pacing healthy", () => {
    const diagnostic = buildBaselineDiagnostic({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimates,
      difficultSections: [],
      timeManagement: { timedAttempts: 2, totalItems: 40, unansweredItems: 1, avgSecPerItem: 55, budgetSecPerItem: 60 },
    });
    const timing = diagnostic.weaknessAreas.find((area) => area.key === "time_management");
    expect(timing?.findings[0]).toContain("Pacing looks healthy");
    expect(timing?.priority).not.toBe("high");
  });
});

// ---------------------------------------------------------------------------
// Adaptive recommendations consider completed work (PROMPT 53 §6)
// ---------------------------------------------------------------------------

describe("adaptive recommendations consider completed work", () => {
  const performance = analyseSectionPerformance({
    scoringKind: "IELTS_BAND",
    targetScore: 7,
    attempts: [
      {
        timed: true,
        submittedAt: "2026-11-14",
        sectionScores: [
          { section: "writing", score: 5.0 },
          { section: "listening", score: 6.5 },
          { section: "reading", score: 7.0 },
          { section: "speaking", score: 6.5 },
        ],
      },
      {
        timed: true,
        submittedAt: "2026-11-01",
        sectionScores: [
          { section: "writing", score: 5.2 },
          { section: "listening", score: 6.8 },
          { section: "reading", score: 7.0 },
          { section: "speaking", score: 6.5 },
        ],
      },
    ],
  });

  it("never re-recommends a lesson the learner has completed", () => {
    const result = buildAdaptation({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      performance,
      weaknessTags: { writing: ["grammar", "sentence"] },
      difficultSections: [],
      currentDifficultyOverrides: {},
      daysRemaining: 10,
      completedLessonHrefs: ["#/grammar/tenses", "#/lab", "#/grammar/clinic"],
    });
    expect(result.changes.length).toBeGreaterThan(0);
    // All three writing-grammar bridge refs completed → no lesson re-recommended.
    expect(result.recommendedLessons.length).toBe(0);
  });

  it("demotes and marks lessons an earlier adaptation already suggested", () => {
    const result = buildAdaptation({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      performance,
      weaknessTags: { writing: ["grammar", "sentence"] },
      difficultSections: [],
      currentDifficultyOverrides: {},
      daysRemaining: 10,
      previouslyRecommendedHrefs: ["#/grammar/tenses"],
    });
    expect(result.recommendedLessons.length).toBeGreaterThan(0);
    expect(result.recommendedLessons[0].previouslyRecommended).toBe(false);
    const stale = result.recommendedLessons.find((lesson) => lesson.href === "#/grammar/tenses");
    expect(stale?.previouslyRecommended).toBe(true);
    // Marked lessons sort last.
    expect(result.recommendedLessons[result.recommendedLessons.length - 1].href).toBe("#/grammar/tenses");
  });

  it("maps AI-evaluation error categories into the shared weakness-tag vocabulary", () => {
    const tags = weaknessTagsFromEvaluations([
      { section: "writing", area: "grammar-accuracy" },
      { section: "writing", area: "lexical-range" },
      { section: "speaking", area: "fluency" },
      { section: "reading", area: "grammar-accuracy" }, // ignored: not writing/speaking
      { section: "writing", area: "unknown-area" }, // ignored: unmapped
    ]);
    expect(tags.writing).toContain("grammar");
    expect(tags.writing).toContain("accuracy");
    expect(tags.writing).toContain("vocabulary");
    expect(tags.speaking).toContain("fluency");
    expect(tags.reading).toBeUndefined();
  });

  it("still says so honestly when nothing warrants a change", () => {
    const steady = analyseSectionPerformance({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      attempts: [
        {
          timed: true,
          submittedAt: "2026-11-14",
          sectionScores: [
            { section: "writing", score: 7.0 },
            { section: "listening", score: 7.0 },
            { section: "reading", score: 7.5 },
            { section: "speaking", score: 7.0 },
          ],
        },
      ],
    });
    const result = buildAdaptation({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      performance: steady,
      weaknessTags: {},
      difficultSections: [],
      currentDifficultyOverrides: {},
      daysRemaining: 10,
    });
    expect(result.noChangeReason).not.toBeNull();
    expect(result.changes).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Readiness "why" (PROMPT 53 §7)
// ---------------------------------------------------------------------------

describe("readiness why explanations", () => {
  it("explains the CONSISTENTLY label with the actual attempt scores", () => {
    const report = buildReadinessReport({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimatedOverall: 6.8,
      estimates: [
        { section: "listening", estimated: 7, weaknesses: [] },
        { section: "reading", estimated: 7.5, weaknesses: [] },
        { section: "writing", estimated: 6.5, weaknesses: [] },
        { section: "speaking", estimated: 6.5, weaknesses: [] },
      ],
      attempts: [
        { attemptId: "a1", mockTitle: "Mock 1", scoreDisplay: "Band 7.0", totalScore: 7.0, timed: true, modeLabel: "Full mock", submittedAt: "2026-11-14" },
        { attemptId: "a2", mockTitle: "Mock 2", scoreDisplay: "Band 6.9", totalScore: 6.9, timed: true, modeLabel: "Full mock", submittedAt: "2026-11-01" },
      ],
      completion: { percent: 60, tasksDone: 30, tasksTotal: 50 },
      nextSteps: [],
    });
    expect(report.label).toBe("CONSISTENTLY_PERFORMING_NEAR_TARGET");
    expect(report.why.some((reason) => reason.includes("7.0") && reason.includes("6.9"))).toBe(true);
    expect(report.why.some((reason) => reason.includes("2 timed exam-mode attempts"))).toBe(true);
    expect(report.why.some((reason) => reason.includes("60% (30/50"))).toBe(true);
  });

  it("explains DEVELOPING from the estimate gap and flags thin evidence", () => {
    const report = buildReadinessReport({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimatedOverall: 5.8,
      estimates: [
        { section: "listening", estimated: 6, weaknesses: [] },
        { section: "reading", estimated: 6, weaknesses: [] },
        { section: "writing", estimated: 5.5, weaknesses: [] },
        { section: "speaking", estimated: 5.5, weaknesses: [] },
      ],
      attempts: [],
      completion: null,
      nextSteps: [],
    });
    expect(report.label).toBe("DEVELOPING");
    expect(report.why.some((reason) => reason.includes("1.2 below the 7.0 target"))).toBe(true);
    expect(report.why.some((reason) => reason.includes("provisional"))).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Coach service persistence (profile score, notification prefs, anti-spam)
// ---------------------------------------------------------------------------

describe("coach service (persistence + integration)", () => {
  let userId = "";
  let createdSpecId: string | null = null;

  beforeAll(async () => {
    const user = await db.user.create({
      data: {
        email: `coach-test-${Date.now()}@talksy.app`,
        name: "Coach Test",
        passwordHash: "x:y",
        role: "student",
      },
    });
    userId = user.id;

    let spec = await db.testSpecification.findFirst({
      where: { examKey: "IELTS", variant: "ACADEMIC", status: "active" },
      orderBy: { version: "desc" },
    });
    if (!spec) {
      spec = await db.testSpecification.create({
        data: {
          examKey: "IELTS",
          variant: "ACADEMIC",
          name: "IELTS Academic",
          version: 1,
          status: "active",
          effectiveDate: new Date("2026-07-01"),
          lastReviewedAt: new Date(),
          sections: JSON.stringify([
            { key: "listening", label: "Listening", timingSec: 1800, questionCount: 10, taskTypes: [], directions: "" },
            { key: "reading", label: "Reading", timingSec: 3600, questionCount: 10, taskTypes: [], directions: "" },
            { key: "writing", label: "Writing", timingSec: 3600, questionCount: 2, taskTypes: [], directions: "" },
            { key: "speaking", label: "Speaking", timingSec: 900, questionCount: 3, taskTypes: [], directions: "" },
          ]),
          scoringModel: JSON.stringify({
            kind: "IELTS_BAND",
            unit: "band",
            rawToScore: {},
            overallRule: "AVERAGE_ROUNDED_NEAREST_HALF",
            minSectionScore: 0,
            maxSectionScore: 9,
            validityMonths: 24,
          }),
          taskTypes: JSON.stringify([{ type: "MCQ_SINGLE", label: "MCQ", description: "", objective: true }]),
          sourceRefs: JSON.stringify([{ label: "IELTS official", url: "https://ielts.org/", retrievedAt: "2026-11-12" }]),
        },
      });
      createdSpecId = spec.id;
    }
    void spec;

    await upsertProfile(userId, {
      examKey: "IELTS",
      variant: "ACADEMIC",
      delivery: "STANDARD",
      proficiency: "B2",
      targetScore: 7,
      currentScoreEstimate: 5.5,
      examDate: null,
      dailyMinutes: 45,
      difficultSections: ["writing"],
      previousAttempts: [],
    });
  });

  afterAll(async () => {
    if (userId) {
      await db.user.delete({ where: { id: userId } }).catch(() => undefined);
    }
    if (createdSpecId) {
      await db.testSpecification.delete({ where: { id: createdSpecId } }).catch(() => undefined);
    }
  });

  it("persists the self-reported current score as context (not evidence)", async () => {
    const profile = await getProfile(userId);
    expect(profile?.currentScoreEstimate).toBe(5.5);

    const state = await getPlannerState(userId);
    expect(state.scoreGap).not.toBeNull();
    expect(state.scoreGap!.selfReported).toBe(5.5);
    // Fresh learner: the estimate rests on the self-rating only — a number,
    // but honestly labelled; no attempt history to trend from.
    expect(typeof state.scoreGap!.current).toBe("number");
    expect(state.scoreGap!.overallTrend).toBe("insufficient_data");
    expect(state.scoreGap!.sections.length).toBe(4);
    expect(state.scoreGap!.workPriorities.length).toBe(4);
    expect(state.scoreGap!.recentResults.length).toBe(0);
  });

  it("exposes all five notification categories defaulted-on with scope + anti-spam notes", async () => {
    const state = await getPlannerState(userId);
    expect(state.notifications).not.toBeNull();
    expect(state.notifications!.prefs.map((pref) => pref.category)).toEqual([
      "daily_study",
      "upcoming_mock",
      "revision",
      "exam_date",
      "incomplete_assignments",
    ]);
    expect(state.notifications!.prefs.every((pref) => pref.enabled)).toBe(true);
    expect(state.notifications!.scopeNote).toContain("not push notifications");
    expect(state.notifications!.antiSpamNote).toBe(NOTIFICATION_ANTI_SPAM_NOTE);
  });

  it("migrates the daily-study config from a legacy plan reminder", async () => {
    // Generate a plan with a 07:30 Mon–Fri reminder (the pre-PROMPT-53 flow).
    await generatePlannerPlan(userId, {
      durationDays: 14,
      reminderTime: "07:30",
      reminderDays: [1, 2, 3, 4, 5],
    });
    const state = await getPlannerState(userId);
    expect(state.plan?.reminderTime).toBe("07:30");
    const daily = state.notifications?.prefs.find((pref) => pref.category === "daily_study");
    expect(daily?.config.time).toBe("07:30");
    expect(daily?.config.days).toEqual([1, 2, 3, 4, 5]);
  });

  it("saves preferences and stops disabled categories from firing", async () => {
    // Make daily_study due at any moment of the test run, then disable it.
    const state = await updateNotificationPrefs(userId, [
      {
        category: "daily_study",
        enabled: false,
        config: { time: "00:00", days: [0, 1, 2, 3, 4, 5, 6] },
      },
    ]);
    expect(state?.prefs.find((pref) => pref.category === "daily_study")?.enabled).toBe(false);
    expect(state?.feed.some((item) => item.category === "daily_study")).toBe(false);

    // Re-enable: due immediately (00:00, every day) and not yet fired today.
    const reenabled = await updateNotificationPrefs(userId, [
      { category: "daily_study", enabled: true, config: { time: "00:00", days: [0, 1, 2, 3, 4, 5, 6] } },
    ]);
    expect(reenabled?.feed.some((item) => item.category === "daily_study")).toBe(true);
  });

  it("collect marks notifications fired — the anti-spam cycle", async () => {
    const first = await collectNotificationsForUser(userId);
    expect(first).not.toBeNull();
    expect(first!.length).toBeGreaterThan(0);
    const categories = new Set(first!.map((item) => item.category));
    expect(categories.has("daily_study")).toBe(true);

    // Second collect on the same day: everything already consumed.
    const second = await collectNotificationsForUser(userId);
    expect(second?.some((item) => item.category === "daily_study")).toBe(false);
    expect((second?.length ?? 0)).toBeLessThanOrEqual(NOTIFICATION_DAILY_TOTAL_CAP);
  });

  it("feeds the score gap with real attempt section scores once they exist", async () => {
    const state = await getPlannerState(userId);
    // No attempts in this fixture → the gap stays honestly unmeasured.
    expect(state.scoreGap!.recentResults.length).toBe(0);
    expect(state.readiness?.why.some((reason) => reason.includes("attempt"))).toBe(true);
  });
});
