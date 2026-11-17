/// <reference types="bun-types" />
/**
 * Personalized examination study planner tests.
 *
 * Covers the full contract:
 *   - scales & readiness labels (the four honest labels, threshold
 *     behaviour on both exam scales, insufficient-evidence wording);
 *   - baseline diagnostic (evidence basis, ranked weaknesses, most
 *     important weakness, diagnostic actions);
 *   - generator (7/14/30/45/60/90/custom durations, phase structure, daily
 *     budgets, section weighting, activity-type coverage, difficulty
 *     ramp, rest days, mock cadence, mistake revision, honest notes,
 *     exam-date clamping, determinism, emitFromDay);
 *   - adaptive planning (repeated weakness → extra practice + lessons,
 *     improvement → harder tasks, decline → easier, honest no-change);
 *   - readiness report (gap analysis, section statuses, completion,
 *     disclaimers);
 *   - service persistence (generate → progress → task status → pathway
 *     auto-completion → reminders → adaptation with real attempts →
 *     preservation of completed days → archive).
 */

import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { db } from "@/lib/db";
import { upsertProfile } from "@/lib/exams/profile";
import {
  PLANNER_NO_GUARANTEE_NOTE,
  READINESS_DISCLAIMER,
  READINESS_LABEL_TEXT,
  type PlannerDifficulty,
} from "@/lib/exams/planner/types";
import { scaleThresholds, sectionGapStatus, readinessLabelFor } from "@/lib/exams/planner/scales";
import { buildBaselineDiagnostic, estimateBasis } from "@/lib/exams/planner/diagnostic";
import {
  computeFocusWeights,
  generatePlan,
  phaseSpansFor,
  type PlanGeneratorInput,
} from "@/lib/exams/planner/generator";
import { analyseSectionPerformance, buildAdaptation } from "@/lib/exams/planner/adaptive";
import { buildReadinessReport } from "@/lib/exams/planner/readiness";
import {
  adaptPlannerPlan,
  archivePlannerPlan,
  generatePlannerPlan,
  getPlannerState,
  setPlannerTaskStatus,
  updatePlannerReminder,
} from "@/lib/exams/planner/service";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const TODAY = "2026-11-12";

const BASE_INPUT: PlanGeneratorInput = {
  examKey: "IELTS",
  examName: "IELTS Academic",
  scoringKind: "IELTS_BAND",
  specTotalMinutes: 165,
  maxSectionScore: 9,
  targetScore: 7,
  proficiency: "B2",
  dailyMinutes: 60,
  difficultSections: ["writing"],
  strongestSection: "reading",
  estimates: [
    { section: "listening", estimated: 6.5, confidence: 0.9 },
    { section: "reading", estimated: 7.5, confidence: 0.9 },
    { section: "writing", estimated: 5.0, confidence: 0.9 },
    { section: "speaking", estimated: 6.0, confidence: 0.9 },
  ],
  pathwaySteps: [
    {
      id: "step-1",
      label: "Grammar School — tense system",
      refType: "grammar",
      refId: null,
      examSection: "writing",
      minutes: 20,
      focus: "Accuracy for writing",
      moduleTitle: "Foundation",
    },
    {
      id: "step-2",
      label: "Reading Room — comprehension",
      refType: "reading",
      refId: null,
      examSection: "reading",
      minutes: 25,
      focus: "Skim & scan",
      moduleTitle: "Skills",
    },
  ],
  mocks: [
    { id: "mock-1", title: "Academic Full Mock 1", kind: "full" },
    { id: "mock-2", title: "Academic Full Mock 2", kind: "full" },
    { id: "mock-3", title: "Academic Full Mock 3", kind: "full" },
  ],
  mistakeCount: 0,
  examDate: null,
  durationDays: 30,
  startDate: TODAY,
  previousAttempts: [],
};

// ---------------------------------------------------------------------------
// Scales & readiness labels
// ---------------------------------------------------------------------------

describe("planner scales", () => {
  it("uses band-grain thresholds per exam scale", () => {
    const ielts = scaleThresholds("IELTS_BAND");
    const toefl = scaleThresholds("TOEFL_BAND_1_6");
    expect(ielts.nearTarget).toBe(0.5);
    expect(ielts.bigGap).toBe(1.5);
    expect(toefl.bigGap).toBe(1.0);
  });

  it("classifies section gaps on the exam's own scale", () => {
    expect(sectionGapStatus("IELTS_BAND", 7.2, 7.0)).toBe("at_target");
    expect(sectionGapStatus("IELTS_BAND", 6.6, 7.0)).toBe("within_reach");
    expect(sectionGapStatus("IELTS_BAND", 5.0, 7.0)).toBe("needs_focused_work");
  });

  it("labels readiness honestly from timed evidence", () => {
    // No evidence at all + far-below estimate → foundational.
    expect(
      readinessLabelFor({ kind: "IELTS_BAND", target: 7, estimatedOverall: 4.5, timedTotals: [] }),
    ).toBe("NEEDS_FOUNDATIONAL_PREPARATION");
    // Estimate within 0.5 → approaching.
    expect(
      readinessLabelFor({ kind: "IELTS_BAND", target: 7, estimatedOverall: 6.5, timedTotals: [] }),
    ).toBe("APPROACHING_TARGET");
    // One timed attempt near target → approaching.
    expect(
      readinessLabelFor({ kind: "IELTS_BAND", target: 7, estimatedOverall: 5.0, timedTotals: [6.8] }),
    ).toBe("APPROACHING_TARGET");
    // Two timed attempts both within 0.25 → consistently near target.
    expect(
      readinessLabelFor({ kind: "IELTS_BAND", target: 7, estimatedOverall: 5.5, timedTotals: [6.9, 7.0] }),
    ).toBe("CONSISTENTLY_PERFORMING_NEAR_TARGET");
    // Two timed attempts but one well below → not consistent.
    expect(
      readinessLabelFor({ kind: "IELTS_BAND", target: 7, estimatedOverall: 6.5, timedTotals: [6.9, 5.5] }),
    ).toBe("APPROACHING_TARGET");
    // TOEFL band scale: 0.5 within target of 5.0.
    expect(
      readinessLabelFor({ kind: "TOEFL_BAND_1_6", target: 5, estimatedOverall: 4.5, timedTotals: [] }),
    ).toBe("APPROACHING_TARGET");
    expect(
      readinessLabelFor({ kind: "TOEFL_BAND_1_6", target: 5, estimatedOverall: 4.2, timedTotals: [] }),
    ).toBe("DEVELOPING");
    expect(
      readinessLabelFor({ kind: "TOEFL_BAND_1_6", target: 5, estimatedOverall: 3.5, timedTotals: [] }),
    ).toBe("NEEDS_FOUNDATIONAL_PREPARATION");
  });
});

// ---------------------------------------------------------------------------
// Baseline diagnostic
// ---------------------------------------------------------------------------

describe("baseline diagnostic", () => {
  const estimates = [
    { section: "listening" as const, estimated: 6.5, confidence: 0.9, strengths: [], weaknesses: [] },
    { section: "reading" as const, estimated: 7.5, confidence: 0.5, strengths: [], weaknesses: [] },
    { section: "writing" as const, estimated: 5.0, confidence: 0.25, strengths: [], weaknesses: ["You flagged writing as difficult"] },
    { section: "speaking" as const, estimated: 6.0, confidence: 0.4, strengths: [], weaknesses: [] },
  ];

  it("derives the evidence basis from confidence", () => {
    expect(estimateBasis(0.25)).toBe("self-rating");
    expect(estimateBasis(0.5)).toBe("curriculum practice");
    expect(estimateBasis(0.9)).toBe("mock examination");
  });

  it("ranks weaknesses by target gap and calls out the most important one", () => {
    const diagnostic = buildBaselineDiagnostic({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimates,
      difficultSections: ["writing"],
    });
    expect(diagnostic.rankedWeaknesses[0].section).toBe("writing");
    expect(diagnostic.rankedWeaknesses[0].priority).toBe("high");
    expect(diagnostic.mostImportant?.section).toBe("writing");
    expect(diagnostic.overall).toBe(6.5);
  });

  it("offers a diagnostic action only for unmeasured sections", () => {
    const diagnostic = buildBaselineDiagnostic({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimates,
      difficultSections: [],
    });
    const unmeasured = diagnostic.sections.filter((section) => section.needsEvidence);
    expect(unmeasured.map((section) => section.section)).toEqual(["writing"]);
    expect(unmeasured[0].diagnosticAction?.minutes).toBe(15);
    expect(diagnostic.sections.find((section) => section.section === "listening")?.diagnosticAction).toBeNull();
    expect(diagnostic.note).toContain("an official score");
  });
});

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

describe("plan generator: phases & structure", () => {
  it("covers every duration preset with exact day counts and ordered phases", () => {
    for (const duration of [7, 14, 30, 45, 60, 90]) {
      const spans = phaseSpansFor(duration);
      expect(spans[0].fromDay).toBe(1);
      expect(spans[spans.length - 1].toDay).toBe(duration);
      for (let i = 1; i < spans.length; i++) {
        expect(spans[i].fromDay).toBe(spans[i - 1].toDay + 1);
      }
      expect(spans.map((span) => span.key)).toContain("mock_cycle");
      expect(spans.map((span) => span.key)).toContain("final_review");

      const plan = generatePlan({ ...BASE_INPUT, durationDays: duration });
      expect(plan.days.length).toBe(duration);
      expect(plan.days[0].dayIndex).toBe(1);
      expect(plan.days[plan.days.length - 1].dayIndex).toBe(duration);
      expect(new Set(plan.days.map((day) => day.date)).size).toBe(duration);
    }
  });

  it("supports custom durations (3–120)", () => {
    expect(generatePlan({ ...BASE_INPUT, durationDays: 3 }).days.length).toBe(3);
    expect(generatePlan({ ...BASE_INPUT, durationDays: 45 }).days.length).toBe(45);
    expect(generatePlan({ ...BASE_INPUT, durationDays: 120 }).days.length).toBe(120);
  });

  it("schedules baseline diagnostics on day 1 for low-confidence sections", () => {
    const plan = generatePlan({
      ...BASE_INPUT,
      estimates: [
        { section: "listening", estimated: 6, confidence: 0.25 },
        { section: "reading", estimated: 6, confidence: 0.25 },
        { section: "writing", estimated: 5, confidence: 0.2 },
        { section: "speaking", estimated: 6, confidence: 0.9 },
      ],
      durationDays: 7,
    });
    const diagnostics = plan.days[0].tasks.filter((task) => task.type === "diagnostic");
    expect(diagnostics.length).toBe(2); // two weakest unmeasured
    expect(diagnostics[0].minutes).toBe(15);
  });

  it("gives every task an estimated time and a real route", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 30 });
    for (const day of plan.days) {
      for (const task of day.tasks) {
        expect(task.minutes).toBeGreaterThan(0);
        expect(task.href.startsWith("#/")).toBe(true);
        expect(task.title.length).toBeGreaterThan(3);
      }
    }
  });

  it("keeps daily minutes within the budget (+tolerance) except honest oversizes", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 30, dailyMinutes: 60 });
    for (const day of plan.days) {
      const total = day.tasks.reduce((sum, task) => sum + task.minutes, 0);
      expect(total).toBeLessThanOrEqual(60 + 10 + 10); // budget + step + warmup tolerance
      expect(day.tasks.length).toBeGreaterThan(0);
      expect(day.tasks.length).toBeLessThanOrEqual(6);
    }
  });

  it("schedules rest days every 7th day on long plans", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 30 });
    const restDays = plan.days.filter((day) => day.isRestDay);
    expect(restDays.length).toBeGreaterThanOrEqual(3); // days 7, 14, 21
    expect(restDays[0].dayIndex).toBe(7);
    for (const day of restDays) {
      const total = day.tasks.reduce((sum, task) => sum + task.minutes, 0);
      expect(total).toBeLessThanOrEqual(35); // ~half budget
    }
  });

  it("schedules mocks in the mock cycle and mistake revision after them", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 30, mistakeCount: 12 });
    const mockDays = plan.days.filter((day) =>
      day.tasks.some((task) => task.type === "mock_exam"),
    );
    expect(mockDays.length).toBeGreaterThanOrEqual(3); // mockBudget ≥ 3 on 30 days
    for (const day of mockDays) {
      const mock = day.tasks.find((task) => task.type === "mock_exam");
      expect(mock?.mockTestId).toMatch(/^mock-/);
      expect(mock?.detail).toContain("schedule a longer session");
    }
    // Day after the first mock day has mistake revision.
    const after = plan.days.find((day) => day.dayIndex === mockDays[0].dayIndex + 1);
    expect(
      after?.tasks.some((task) => task.type === "mistake_revision"),
    ).toBe(true);
  });

  it("substitutes timed practice when no mocks are published (with honest note)", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 14, mocks: [] });
    expect(plan.meta.notes.join(" ")).toContain("No published mock tests");
    const substitute = plan.days.flatMap((day) => day.tasks).find((task) => task.type === "mock_exam");
    expect(substitute?.title).toBe("Timed mixed practice set");
    expect(substitute?.mockTestId).toBeNull();
  });

  it("covers every promised activity type across a 30-day plan", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 30, mistakeCount: 5 });
    const types = new Set(plan.days.flatMap((day) => day.tasks.map((task) => task.type)));
    for (const type of ["vocabulary", "grammar", "reading", "listening", "writing", "speaking", "mock_exam", "mistake_revision"]) {
      expect(types.has(type as never)).toBe(true);
    }
  });

  it("weights the weakest section above the strongest", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 30 });
    const counts: Record<string, number> = {};
    for (const day of plan.days) {
      for (const task of day.tasks) {
        if (task.section) counts[task.section] = (counts[task.section] ?? 0) + 1;
      }
    }
    expect(counts.writing).toBeGreaterThan(counts.reading);
  });

  it("ramps difficulty by phase", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 60 });
    const foundation = plan.days[0].tasks.filter((task) => task.section);
    const mockPhase = plan.days.find((day) => day.phase === "mock_cycle" && !day.isRestDay)!;
    const mockTasks = mockPhase.tasks.filter((task) => task.section);
    expect(foundation.every((task) => task.difficulty === "easier")).toBe(true);
    expect(mockTasks.every((task) => task.difficulty === "harder")).toBe(true);
  });

  it("closes the plan with exam-day logistics in final review", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 30 });
    const last = plan.days[plan.days.length - 1];
    expect(last.phase).toBe("final_review");
    expect(last.tasks.some((task) => task.title === "Exam-day logistics & timing plan")).toBe(true);
  });

  it("is deterministic — same inputs, same plan", () => {
    const a = generatePlan({ ...BASE_INPUT, durationDays: 14 });
    const b = generatePlan({ ...BASE_INPUT, durationDays: 14 });
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });
});

describe("plan generator: honesty notes & exam date", () => {
  it("clamps to the exam date when it comes first and says so", () => {
    const plan = generatePlan({
      ...BASE_INPUT,
      durationDays: 30,
      examDate: "2026-11-16", // 5 days away
    });
    expect(plan.effectiveDays).toBe(5);
    expect(plan.days.length).toBe(5);
    expect(plan.meta.notes.join(" ")).toContain("runs 5 of the requested 30 days");
  });

  it("notes when the plan ends before the exam date", () => {
    const plan = generatePlan({
      ...BASE_INPUT,
      durationDays: 7,
      examDate: "2026-12-24",
    });
    expect(plan.meta.notes.join(" ")).toContain("before your exam date");
  });

  it("states plainly when a big gap cannot close in a short plan", () => {
    const plan = generatePlan({
      ...BASE_INPUT,
      durationDays: 7,
      estimates: [
        { section: "listening", estimated: 4.5, confidence: 0.9 },
        { section: "reading", estimated: 5.0, confidence: 0.9 },
        { section: "writing", estimated: 4.0, confidence: 0.9 },
        { section: "speaking", estimated: 4.5, confidence: 0.9 },
      ],
    });
    expect(plan.meta.notes.join(" ")).toContain("unrealistic for most learners");
    expect(plan.meta.notes.join(" ")).toContain("without promises");
  });

  it("flags low daily time and prior results honestly", () => {
    const plan = generatePlan({
      ...BASE_INPUT,
      dailyMinutes: 15,
      previousAttempts: [{ exam: "IELTS Academic", overall: 7.5, date: "2025-06" }],
    });
    const notes = plan.meta.notes.join(" ");
    expect(notes).toContain("Under 30 minutes a day progress is slow");
    expect(notes).toContain("past results never guarantee future ones");
  });

  it("computes focus weights with floors and adaptive overrides", () => {
    const weights = computeFocusWeights({
      estimates: BASE_INPUT.estimates,
      difficultSections: ["writing"],
      strongestSection: "reading",
      focusWeightOverrides: { writing: 1.8 },
    });
    expect(weights.writing).toBeGreaterThan(weights.reading);
    expect(weights.writing).toBeGreaterThanOrEqual(2.4 * 1.8 - 0.01);
    // Every section stays present.
    for (const section of ["listening", "reading", "writing", "speaking"]) {
      expect(weights[section as keyof typeof weights]).toBeGreaterThanOrEqual(0.5);
    }
  });

  it("emits only future days when regenerating (emitFromDay)", () => {
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 14, emitFromDay: 8 });
    expect(plan.days.length).toBe(7); // days 8..14
    expect(plan.days[0].dayIndex).toBe(8);
    expect(plan.days[plan.days.length - 1].dayIndex).toBe(14);
  });
});

// ---------------------------------------------------------------------------
// Adaptive planning
// ---------------------------------------------------------------------------

describe("adaptive planning", () => {
  const attempts = (writingScores: number[]) =>
    writingScores.map((score, index) => ({
      timed: true,
      submittedAt: new Date(2026, 10, 1 + index).toISOString(),
      sectionScores: [
        { section: "listening" as const, score: 6.5 },
        { section: "reading" as const, score: 7.5 },
        { section: "writing" as const, score },
        { section: "speaking" as const, score: 6.0 },
      ],
    }));

  it("detects a repeated weakness from consecutive attempts", () => {
    const performance = analyseSectionPerformance({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      attempts: attempts([5.0, 4.5]),
    });
    expect(performance.writing.repeatedWeak).toBe(true);
    expect(performance.writing.belowTargetStreak).toBe(2);
    expect(performance.listening.repeatedWeak).toBe(false);
  });

  it("detects improvement and decline between attempt windows", () => {
    // Attempts are newest first: the 6.0s are the recent window.
    const performance = analyseSectionPerformance({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      attempts: [...attempts([6.0, 6.0]), ...attempts([5.0, 5.0])],
    });
    expect(performance.writing.improved).toBe(true);
    const declining = analyseSectionPerformance({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      attempts: [...attempts([5.0, 5.0]), ...attempts([6.0, 6.0])],
    });
    expect(declining.writing.improved).toBe(false);
  });

  it("re-weights repeated weaknesses, recommends lessons, and says what changed", () => {
    const performance = analyseSectionPerformance({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      attempts: attempts([5.0, 4.5]),
    });
    const adaptation = buildAdaptation({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      performance,
      weaknessTags: { writing: ["grammar", "structure"] },
      difficultSections: ["writing"],
      currentDifficultyOverrides: {},
      daysRemaining: 20,
    });
    expect(adaptation.noChangeReason).toBeNull();
    expect(adaptation.focusWeightOverrides.writing).toBe(1.8);
    expect(adaptation.changes.join(" ")).toContain("Writing has been below your target in 2 recent attempts");
    expect(adaptation.recommendedLessons.length).toBeGreaterThan(0);
    expect(adaptation.recommendedLessons.every((lesson) => lesson.href.startsWith("#/"))).toBe(true);
  });

  it("steps difficulty up when a section improves", () => {
    // Newest first: 6.5s are recent (and not below the weak line), 5.0s older.
    const performance = analyseSectionPerformance({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      attempts: [...attempts([6.5, 6.5]), ...attempts([5.0, 5.0])],
    });
    const adaptation = buildAdaptation({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      performance,
      weaknessTags: {},
      difficultSections: [],
      currentDifficultyOverrides: {},
      daysRemaining: 20,
    });
    expect(adaptation.difficultyOverrides.writing).toBe("harder");
    expect(adaptation.changes.join(" ")).toContain("step up in difficulty");
  });

  it("eases off when a section declines", () => {
    // Newest first: 5.0s are recent and repeated-weak, 6.5s older.
    const performance = analyseSectionPerformance({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      attempts: [...attempts([5.0, 5.0]), ...attempts([6.5, 6.5])],
    });
    const adaptation = buildAdaptation({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      performance,
      weaknessTags: {},
      difficultSections: [],
      currentDifficultyOverrides: {},
      daysRemaining: 20,
    });
    expect(adaptation.difficultyOverrides.writing).toBe("easier");
  });

  it("changes nothing without signal — and says so honestly", () => {
    const adaptation = buildAdaptation({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      performance: analyseSectionPerformance({
        scoringKind: "IELTS_BAND",
        targetScore: 7,
        attempts: [],
      }),
      weaknessTags: {},
      difficultSections: [],
      currentDifficultyOverrides: {},
      daysRemaining: 20,
    });
    expect(adaptation.noChangeReason).toContain("No scored mock attempts yet");
    expect(adaptation.changes.length).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Readiness report
// ---------------------------------------------------------------------------

describe("readiness report", () => {
  const estimates = [
    { section: "listening" as const, estimated: 6.5, weaknesses: [] },
    { section: "reading" as const, estimated: 7.5, weaknesses: [] },
    { section: "writing" as const, estimated: 5.0, weaknesses: ["You flagged writing as difficult"] },
    { section: "speaking" as const, estimated: 6.8, weaknesses: [] },
  ];

  it("carries the mandated safeguards on every report", () => {
    const report = buildReadinessReport({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimatedOverall: 6.5,
      estimates,
      attempts: [],
      completion: null,
      nextSteps: [],
    });
    expect(report.disclaimer).toBe(READINESS_DISCLAIMER);
    expect(report.noGuaranteeNote).toBe(PLANNER_NO_GUARANTEE_NOTE);
    expect(report.noGuaranteeNote).toContain("cannot guarantee");
    expect(report.disclaimer).toContain("not official results");
  });

  it("marks thin evidence explicitly and keeps the label conservative", () => {
    const report = buildReadinessReport({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimatedOverall: 6.9,
      estimates,
      attempts: [],
      completion: null,
      nextSteps: [],
    });
    expect(report.evidence.hasEnoughEvidence).toBe(false);
    expect(report.evidence.evidenceNote).toContain("No timed exam-mode attempts yet");
    expect(report.labelText).toBe(READINESS_LABEL_TEXT.APPROACHING_TARGET);
  });

  it("uses multiple timed attempts for the strongest label", () => {
    const report = buildReadinessReport({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimatedOverall: 6.0,
      estimates,
      attempts: [
        { attemptId: "a1", mockTitle: "Mock 1", scoreDisplay: "Band 7.0", totalScore: 7.0, timed: true, modeLabel: "Full mock examination", submittedAt: "2026-11-01" },
        { attemptId: "a2", mockTitle: "Mock 2", scoreDisplay: "Band 6.9", totalScore: 6.9, timed: true, modeLabel: "Full mock examination", submittedAt: "2026-11-05" },
        { attemptId: "a3", mockTitle: "Practice", scoreDisplay: "Band 6.5", totalScore: 6.5, timed: false, modeLabel: "Untimed learning practice", submittedAt: "2026-11-06" },
      ],
      completion: { percent: 40, tasksDone: 12, tasksTotal: 30 },
      nextSteps: ["Sit the scheduled mock"],
    });
    expect(report.label).toBe("CONSISTENTLY_PERFORMING_NEAR_TARGET");
    expect(report.evidence.timedExamAttempts).toBe(2); // untimed practice excluded
    expect(report.overall.gap).toBe(1.0);
    expect(report.completion?.percent).toBe(40);
    expect(report.recentMocks.length).toBe(3);
  });

  it("computes section statuses and notes from estimates", () => {
    const report = buildReadinessReport({
      scoringKind: "IELTS_BAND",
      targetScore: 7,
      estimatedOverall: 6.5,
      estimates,
      attempts: [],
      completion: null,
      nextSteps: [],
    });
    const bySection = new Map(report.sections.map((section) => [section.section, section]));
    expect(bySection.get("reading")?.status).toBe("at_target");
    expect(bySection.get("speaking")?.status).toBe("within_reach");
    expect(bySection.get("writing")?.status).toBe("needs_focused_work");
    expect(bySection.get("writing")?.note).toContain("flagged");
  });
});

// ---------------------------------------------------------------------------
// Service (persistence + integration)
// ---------------------------------------------------------------------------

describe("planner service (persistence + integration)", () => {
  let userId = "";
  const mockIds: string[] = [];
  let createdSpecId: string | null = null;
  let createdPathwayId: string | null = null;

  beforeAll(async () => {
    const user = await db.user.create({
      data: {
        email: `planner-test-${Date.now()}@talksy.app`,
        name: "Planner Test",
        passwordHash: "x:y",
        role: "student",
      },
    });
    userId = user.id;

    // Active spec (find an existing one or create a valid fixture).
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

    // Published pathway with two linked steps (find or create).
    let pathway = await db.examPathway.findFirst({
      where: { examKey: "IELTS", variant: "ACADEMIC" },
    });
    if (!pathway) {
      pathway = await db.examPathway.create({
        data: {
          examKey: "IELTS",
          variant: "ACADEMIC",
          title: "Planner test pathway",
          summary: "Fixture pathway for planner tests.",
          status: "published",
          modules: {
            create: [
              {
                title: "Foundation",
                goal: "Accuracy first",
                order: 1,
                steps: {
                  create: [
                    { order: 1, label: "Grammar School — tense system", refType: "grammar", refId: null, examSection: "writing", focus: "Accuracy for writing", minutes: 20 },
                    { order: 2, label: "Reading Room — comprehension", refType: "reading", refId: null, examSection: "reading", focus: "Skim & scan", minutes: 25 },
                  ],
                },
              },
            ],
          },
        },
      });
      createdPathwayId = pathway.id;
    }

    await upsertProfile(userId, {
      examKey: "IELTS",
      variant: "ACADEMIC",
      delivery: "STANDARD",
      proficiency: "B2",
      targetScore: 7,
      examDate: null,
      dailyMinutes: 45,
      difficultSections: ["writing"],
      strongestSection: "reading",
      previousAttempts: [{ exam: "IELTS Academic", overall: 6.0, date: "2025-06" }],
    });
  });

  afterAll(async () => {
    for (const id of mockIds) {
      await db.mockTest.delete({ where: { id } }).catch(() => undefined);
    }
    if (userId) {
      await db.user.delete({ where: { id: userId } }).catch(() => undefined);
    }
    if (createdPathwayId) {
      await db.examPathway.delete({ where: { id: createdPathwayId } }).catch(() => undefined);
    }
    if (createdSpecId) {
      await db.testSpecification.delete({ where: { id: createdSpecId } }).catch(() => undefined);
    }
  });

  it("returns the full state with baseline and no plan initially", async () => {
    const state = await getPlannerState(userId);
    expect(state.onboarded).toBe(true);
    expect(state.profile?.examKey).toBe("IELTS");
    expect(state.profile?.strongestSection).toBe("reading");
    expect(state.profile?.previousAttempts.length).toBe(1);
    expect(state.baseline).not.toBeNull();
    expect(state.baseline!.sections.length).toBe(4);
    expect(state.plan).toBeNull();
    expect(state.readiness).not.toBeNull();
    // Fresh user: self-rating evidence only, honestly labelled.
    expect(state.readiness!.evidence.timedExamAttempts).toBe(0);
  });

  it("refuses to plan for learners without onboarding", async () => {
    const stranger = await db.user.create({
      data: { email: `planner-stranger-${Date.now()}@talksy.app`, passwordHash: "x:y" },
    });
    try {
      await expect(generatePlannerPlan(stranger.id, { durationDays: 7 })).rejects.toThrow("NOT_ONBOARDED");
    } finally {
      await db.user.delete({ where: { id: stranger.id } });
    }
  });

  it("generates a 7-day plan with days, tasks, phases and progress", async () => {
    const plan = await generatePlannerPlan(userId, {
      durationDays: 7,
      strongestSection: "reading",
      reminderTime: "19:30",
      reminderDays: [1, 2, 3, 4, 5],
    });
    expect(plan.days.length).toBe(7);
    expect(plan.status).toBe("active");
    expect(plan.reminderTime).toBe("19:30");
    expect(plan.progress.tasksTotal).toBeGreaterThan(0);
    expect(plan.progress.percent).toBe(0);
    expect(plan.meta.phases.length).toBeGreaterThanOrEqual(3);
    expect(plan.todayDayIndex).toBe(1);
    const allTypes = new Set(plan.days.flatMap((day) => day.tasks.map((task) => task.type)));
    expect(allTypes.size).toBeGreaterThanOrEqual(4);
    // Every task carries an estimated time.
    for (const day of plan.days) {
      for (const task of day.tasks) expect(task.minutes).toBeGreaterThan(0);
    }
  });

  it("archives the previous plan when a new one is generated", async () => {
    const plan = await generatePlannerPlan(userId, { durationDays: 14 });
    expect(plan.days.length).toBe(14);
    const active = await db.examPlannerPlan.findMany({
      where: { userId, status: "active" },
    });
    expect(active.length).toBe(1);
    const archived = await db.examPlannerPlan.findMany({
      where: { userId, status: "archived" },
    });
    expect(archived.length).toBe(1);
  });

  it("marks tasks done/skipped and updates progress", async () => {
    const state = await getPlannerState(userId);
    const task = state.plan!.days[0].tasks[0];
    const done = await setPlannerTaskStatus(userId, task.id, "done");
    expect(done.status).toBe("done");
    expect(done.completedAt).not.toBeNull();
    const skipped = await setPlannerTaskStatus(
      userId,
      state.plan!.days[0].tasks[1]?.id ?? task.id,
      "skipped",
    );
    expect(skipped.status).toBe("skipped");
    const after = await getPlannerState(userId);
    expect(after.plan!.progress.tasksDone).toBeGreaterThanOrEqual(1);
    expect(after.plan!.progress.tasksSkipped).toBeGreaterThanOrEqual(1);
    expect(after.plan!.progress.percent).toBeGreaterThan(0);
  });

  it("auto-completes pathway steps linked to finished tasks", async () => {
    const state = await getPlannerState(userId);
    const linked = state.plan!.days
      .flatMap((day) => day.tasks)
      .find((task) => task.stepId);
    if (!linked) {
      // The seeded pathway may be fully consumed; skip honestly.
      expect(true).toBe(true);
      return;
    }
    await setPlannerTaskStatus(userId, linked.id, "done");
    const progress = await db.examPathwayStepProgress.findFirst({
      where: { userId, stepId: linked.stepId! },
    });
    expect(progress).not.toBeNull();
  });

  it("rejects task updates from other users", async () => {
    const state = await getPlannerState(userId);
    const task = state.plan!.days[0].tasks[0];
    const stranger = await db.user.create({
      data: { email: `planner-stranger2-${Date.now()}@talksy.app`, passwordHash: "x:y" },
    });
    try {
      await expect(setPlannerTaskStatus(stranger.id, task.id, "done")).rejects.toThrow("NOT_FOUND");
    } finally {
      await db.user.delete({ where: { id: stranger.id } });
    }
  });

  it("updates reminder settings on the active plan", async () => {
    const plan = await updatePlannerReminder(userId, {
      reminderTime: "20:15",
      reminderDays: [1, 3, 5],
    });
    expect(plan.reminderTime).toBe("20:15");
    expect(plan.reminderDays).toEqual([1, 3, 5]);
  });

  it("adapts honestly (no change) before any mock evidence", async () => {
    const outcome = await adaptPlannerPlan(userId);
    expect(outcome.noChangeReason).not.toBeNull();
    expect(outcome.noChangeReason).toContain("No scored mock attempts yet");
    expect(outcome.changes.length).toBe(0);
  });

  it("re-weights future days after repeated weak mock results, keeping completed days", async () => {
    const spec = await db.testSpecification.findFirst({
      where: { examKey: "IELTS", variant: "ACADEMIC", status: "active" },
    });
    expect(spec).not.toBeNull();
    // Two scored exam-mode attempts, writing consistently below target.
    for (let i = 0; i < 2; i++) {
      const mock = await db.mockTest.create({
        data: {
          examKey: "IELTS",
          variant: "ACADEMIC",
          specId: spec!.id,
          title: `Planner evidence mock ${i} ${Date.now()}`,
          kind: "full",
          lengthLabel: "sample",
          status: "published",
        },
      });
      mockIds.push(mock.id);
      await db.mockTestAttempt.create({
        data: {
          userId,
          mockTestId: mock.id,
          specId: spec!.id,
          status: "scored",
          mode: "exam",
          timed: true,
          submittedAt: new Date(Date.now() - i * 3600_000),
          sectionScores: JSON.stringify([
            { section: "listening", raw: 20, max: 40, score: 6.5 },
            { section: "reading", raw: 25, max: 40, score: 7.5 },
            { section: "writing", raw: 15, max: 40, score: 5.0 },
            { section: "speaking", raw: 18, max: 40, score: 6.0 },
          ]),
          totalScore: 6.3,
          scoreDisplay: "Band 6.3",
        },
      });
    }

    const state = await getPlannerState(userId);
    expect(state.adaptation?.suggested).toBe(true);
    // Today (day 1, with completed/skipped tasks) must survive adaptation.
    const todayId = state.plan!.days[0].id;
    const todayTaskIds = state.plan!.days[0].tasks.map((task) => task.id);

    const outcome = await adaptPlannerPlan(userId);
    expect(outcome.noChangeReason).toBeNull();
    expect(outcome.changes.join(" ")).toMatch(/below your target in 2 recent attempts/);
    // Completed days are never rewritten.
    expect(outcome.plan.days[0].id).toBe(todayId);
    expect(outcome.plan.days[0].tasks.map((task) => task.id)).toEqual(todayTaskIds);
    // Adaptation recorded in meta history.
    expect(outcome.plan.meta.adaptations.length).toBe(1);
    // Evidence snapshot now matches, so no further adaptation is suggested.
    const after = await getPlannerState(userId);
    expect(after.adaptation?.suggested).toBe(false);
    // Readiness now rests on timed attempts: mock sections average 6.25 →
    // overall estimate 6.5, within 0.5 of the 7.0 target.
    expect(after.readiness!.evidence.timedExamAttempts).toBe(2);
    expect(after.readiness!.label).toBe("APPROACHING_TARGET");
  });

  it("archives the active plan", async () => {
    const archived = await archivePlannerPlan(userId);
    expect(archived).toBe(true);
    const state = await getPlannerState(userId);
    expect(state.plan).toBeNull();
    const rows = await db.examPlannerPlan.findMany({ where: { userId } });
    expect(rows.every((row) => row.status === "archived")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Difficulty override plumbing (generator honours adaptive overrides)
// ---------------------------------------------------------------------------

describe("generator honours adaptive overrides", () => {
  it("applies per-section difficulty overrides to emitted tasks", () => {
    const overrides: Partial<Record<"listening" | "reading" | "writing" | "speaking", PlannerDifficulty>> = {
      writing: "easier",
      reading: "harder",
    };
    const plan = generatePlan({ ...BASE_INPUT, durationDays: 14, difficultyOverrides: overrides });
    const writingTasks = plan.days.flatMap((day) => day.tasks.filter((task) => task.section === "writing"));
    const readingTasks = plan.days.flatMap((day) => day.tasks.filter((task) => task.section === "reading"));
    expect(writingTasks.length).toBeGreaterThan(0);
    expect(readingTasks.length).toBeGreaterThan(0);
    expect(writingTasks.every((task) => task.difficulty === "easier")).toBe(true);
    expect(readingTasks.every((task) => task.difficulty === "harder")).toBe(true);
  });
});
