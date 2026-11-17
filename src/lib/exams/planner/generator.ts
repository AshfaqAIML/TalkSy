/**
 * Deterministic plan generator.
 *
 * Turns the initial assessment + baseline diagnostic into a day-by-day
 * schedule for 7/14/30/60/90/custom days. Rules, all test-enforced:
 *
 *   - Duration is the learner's choice; when the exam date comes first the
 *     plan honestly clamps to it and says so.
 *   - Phases scale with duration: foundation → skill building → mock
 *     cycle → final review.
 *   - Weakest sections get proportionally more slots (weighted deficit
 *     round-robin), the strongest gets fewer — no two learners with
 *     different profiles get the same plan.
 *   - Every task carries an estimated time; the day never exceeds the
 *     daily budget by more than a small tolerance, and mocks are flagged
 *     when they need more time than the budget.
 *   - Every week touches all activity types (vocabulary, grammar, reading,
 *     listening, writing, speaking) plus mocks and mistake revision.
 *   - Rest days are part of realistic planning, not an afterthought.
 *   - Difficulty ramps by phase (easier → medium → harder) unless the
 *     adaptive layer overrides a section.
 *
 * Pure function: same inputs always produce the same plan (rotation, not
 * randomness) so tests can pin the contract.
 */

import type { ExamKey, SectionKey } from "../types";
import {
  PLANNER_PHASE_LABELS,
  type PlanMeta,
  type PlanPhaseSpan,
  type PlannerDifficulty,
  type PlannerPhase,
  type PlannerTaskType,
} from "./types";
import { libraryTaskFor, warmupTaskFor, type TaskTemplate } from "./task-library";
import { scaleThresholds } from "./scales";

const DAY_MS = 24 * 60 * 60 * 1000;

export const PLANNER_DURATION_PRESETS = [7, 14, 30, 45, 60, 90] as const;

export type GeneratorEstimate = {
  section: SectionKey;
  estimated: number;
  confidence: number;
};

export type GeneratorPathwayStep = {
  id: string;
  label: string;
  refType: string;
  refId: string | null;
  examSection: SectionKey | null;
  minutes: number;
  focus: string | null;
  moduleTitle: string;
};

export type GeneratorMock = { id: string; title: string; kind: string };

export type PlanGeneratorInput = {
  examKey: ExamKey;
  examName: string;
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  /** Sum of the spec's section timings in minutes (honest mock length). */
  specTotalMinutes: number;
  maxSectionScore: number;
  targetScore: number;
  proficiency: string;
  dailyMinutes: number;
  difficultSections: SectionKey[];
  strongestSection: SectionKey | null;
  estimates: GeneratorEstimate[];
  /** Pathway steps not yet completed (module order preserved). */
  pathwaySteps: GeneratorPathwayStep[];
  mocks: GeneratorMock[];
  /** Wrong/unanswered items across the learner's submitted attempts. */
  mistakeCount: number;
  examDate: string | null; // ISO date or null
  durationDays: number;
  startDate: string; // ISO date
  previousAttempts: Array<{ exam: string; overall: number; date?: string }>;
  /** Adaptive overrides applied when regenerating future days. */
  focusWeightOverrides?: Partial<Record<SectionKey, number>>;
  difficultyOverrides?: Partial<Record<SectionKey, PlannerDifficulty>>;
  /**
   * When regenerating after adaptation: days before this index are still
   * computed (so rotation/serving state stays coherent) but not emitted —
   * their existing rows are preserved untouched.
   */
  emitFromDay?: number;
};

export type GeneratedTask = {
  type: PlannerTaskType;
  section: SectionKey | null;
  title: string;
  detail: string;
  minutes: number;
  difficulty: PlannerDifficulty;
  href: string;
  stepId: string | null;
  mockTestId: string | null;
  reason: string;
  sortOrder: number;
};

export type GeneratedDay = {
  dayIndex: number;
  date: string;
  phase: PlannerPhase;
  focus: string;
  isRestDay: boolean;
  tasks: GeneratedTask[];
};

export type GenerationResult = {
  days: GeneratedDay[];
  meta: Omit<PlanMeta, "adaptations" | "evidenceSnapshot">;
  effectiveDays: number;
};

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(iso: string, days: number): string {
  return isoDate(new Date(new Date(`${iso}T00:00:00Z`).getTime() + days * DAY_MS));
}

function roundHalf(value: number): number {
  return Math.round(value * 2) / 2;
}

/** Planner task type for a pathway step's refType. */
function stepTaskType(refType: string, section: SectionKey | null): PlannerTaskType {
  switch (refType) {
    case "grammar":
    case "lab":
      return "grammar";
    case "vocabulary":
      return "vocabulary";
    case "reading":
      return "reading";
    case "listening":
      return "listening";
    case "speaking":
    case "tutor":
      return "speaking";
    case "writing":
      return "writing";
    case "mock":
      return "mock_exam";
    case "drill":
      return section ? (section as PlannerTaskType) : "review";
    case "curriculum":
      return "lesson";
    default:
      return "review";
  }
}

// ---------------------------------------------------------------------------
// Phases
// ---------------------------------------------------------------------------

export function phaseSpansFor(durationDays: number): PlanPhaseSpan[] {
  const d = Math.max(3, durationDays);
  const foundationLen = Math.max(1, Math.round(d * 0.1));
  const mockLen = Math.max(1, Math.round(d * 0.32));
  const reviewLen = Math.max(1, Math.round(d * 0.13));
  const skillsLen = Math.max(0, d - foundationLen - mockLen - reviewLen);

  let cursor = 1;
  const spans: PlanPhaseSpan[] = [];
  const push = (key: PlannerPhase, len: number) => {
    if (len <= 0) return;
    spans.push({ key, label: PLANNER_PHASE_LABELS[key], fromDay: cursor, toDay: cursor + len - 1 });
    cursor += len;
  };
  push("foundation", foundationLen);
  push("skills", skillsLen);
  push("mock_cycle", mockLen);
  push("final_review", reviewLen);
  // Rounding drift: stretch/collapse the last span to land exactly on d.
  const last = spans[spans.length - 1];
  if (last && last.toDay !== d) last.toDay = d;
  return spans;
}

function phaseOf(spans: PlanPhaseSpan[], dayIndex: number): PlannerPhase {
  for (const span of spans) {
    if (dayIndex >= span.fromDay && dayIndex <= span.toDay) return span.key;
  }
  return "final_review";
}

// ---------------------------------------------------------------------------
// Section weights (who gets how many slots)
// ---------------------------------------------------------------------------

export function computeFocusWeights(input: {
  estimates: GeneratorEstimate[];
  difficultSections: SectionKey[];
  strongestSection: SectionKey | null;
  focusWeightOverrides?: Partial<Record<SectionKey, number>>;
}): Record<SectionKey, number> {
  const sections: SectionKey[] = ["listening", "reading", "writing", "speaking"];
  const weights: Record<SectionKey, number> = {
    listening: 1,
    reading: 1,
    writing: 1,
    speaking: 1,
  };

  if (input.estimates.length >= 2) {
    // Weakest first; ties keep the stable section order above.
    const ranked = [...input.estimates].sort((a, b) => a.estimated - b.estimated);
    const rankBonus = [2.4, 1.8, 1.2, 1.0];
    ranked.forEach((entry, index) => {
      weights[entry.section] = rankBonus[Math.min(index, 3)];
    });
  } else if (input.difficultSections.length > 0) {
    input.difficultSections.slice(0, 2).forEach((section, index) => {
      weights[section] = index === 0 ? 2.4 : 1.8;
    });
  }

  for (const section of input.difficultSections) {
    weights[section] += 0.4;
  }
  if (input.strongestSection) {
    weights[input.strongestSection] = Math.max(0.5, weights[input.strongestSection] * 0.6);
  }
  for (const [section, override] of Object.entries(input.focusWeightOverrides ?? {})) {
    const key = section as SectionKey;
    if (typeof override === "number") weights[key] = weights[key] * override;
  }
  // Keep every section at least minimally present — a plan that never
  // touches a section would silently rot it.
  for (const section of sections) {
    weights[section] = Math.max(0.5, weights[section]);
  }
  return weights;
}

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

export function generatePlan(input: PlanGeneratorInput): GenerationResult {
  const notes: string[] = [];
  const start = new Date(`${input.startDate}T00:00:00Z`);

  // Duration vs exam date — clamp honestly.
  let effectiveDays = input.durationDays;
  let suggestedDurationDays: number | null = null;
  if (input.examDate) {
    const exam = new Date(`${input.examDate}T00:00:00Z`);
    const daysToExam = Math.ceil((exam.getTime() - start.getTime()) / DAY_MS) + 1;
    suggestedDurationDays = Math.max(3, daysToExam);
    if (daysToExam < input.durationDays) {
      effectiveDays = Math.max(3, daysToExam);
      notes.push(
        `Your exam date (${input.examDate}) comes first — the plan runs ${effectiveDays} of the requested ${input.durationDays} days and ends on your exam day.`,
      );
    } else if (daysToExam > input.durationDays) {
      notes.push(
        `The plan ends ${daysToExam - input.durationDays} day(s) before your exam date — extend it or generate a follow-up plan closer to the day.`,
      );
    }
  } else {
    notes.push(
      "No exam date set — you picked the duration. Add your exam date anytime and the plan will realign to it.",
    );
  }

  const spans = phaseSpansFor(effectiveDays);
  const weights = computeFocusWeights({
    estimates: input.estimates,
    difficultSections: input.difficultSections,
    strongestSection: input.strongestSection,
    focusWeightOverrides: input.focusWeightOverrides,
  });

  // Mock cadence inside the mock cycle. Without published mocks, timed
  // mixed practice substitutes so the mock phase still happens.
  const mockSpan = spans.find((span) => span.key === "mock_cycle");
  const mockCycleLen = mockSpan ? mockSpan.toDay - mockSpan.fromDay + 1 : 0;
  const mockBudget =
    input.mocks.length === 0
      ? Math.max(1, Math.floor(mockCycleLen / 3))
      : Math.min(input.mocks.length, Math.max(1, Math.floor(mockCycleLen / 3)));
  const mockDays = new Set<number>();
  for (let i = 0; i < mockBudget; i++) {
    const day = mockSpan
      ? mockSpan.fromDay + Math.round((i * (mockCycleLen - 1)) / Math.max(1, mockBudget - 1))
      : -1;
    if (day >= 1 && day <= effectiveDays) mockDays.add(day);
  }
  if (input.mocks.length === 0 && mockCycleLen > 0) {
    notes.push(
      "No published mock tests for this exam yet — timed mixed practice sets stand in for full mocks until one is available.",
    );
  }

  // Weighted deficit round-robin: each day, serve the section with the
  // largest deficit (weight × days elapsed − served).
  const served: Record<SectionKey, number> = { listening: 0, reading: 0, writing: 0, speaking: 0 };
  const sections: SectionKey[] = ["listening", "reading", "writing", "speaking"];

  // Pathway pools per section (generic steps land in a shared pool).
  const sectionPools = new Map<SectionKey, GeneratorPathwayStep[]>(
    sections.map((section) => [section, [] as GeneratorPathwayStep[]]),
  );
  const genericPool: GeneratorPathwayStep[] = [];
  for (const step of input.pathwaySteps) {
    if (step.examSection && sectionPools.has(step.examSection)) {
      sectionPools.get(step.examSection)!.push(step);
    } else {
      genericPool.push(step);
    }
  }

  const rotations: Record<SectionKey, number> = { listening: 0, reading: 0, writing: 0, speaking: 0 };
  const lastSeenType = new Map<PlannerTaskType, number>();
  // The activity types every 6-day window must touch.
  const coverageTypes: PlannerTaskType[] = ["vocabulary", "grammar", "reading", "listening", "writing", "speaking"];

  const mockTitles = input.mocks.map((mock) => mock.title);
  let mockUsed = 0;

  // Overall estimate for the feasibility note.
  const overallEstimate =
    input.estimates.length === 4
      ? roundHalf(input.estimates.reduce((sum, e) => sum + e.estimated, 0) / 4)
      : null;
  const thresholds = scaleThresholds(input.scoringKind);
  if (
    overallEstimate !== null &&
    input.targetScore - overallEstimate >= thresholds.bigGap &&
    effectiveDays <= 14
  ) {
    notes.push(
      `Closing a ${(input.targetScore - overallEstimate).toFixed(1)}-band gap in ${effectiveDays} days is unrealistic for most learners — consider more days or a later exam date. The plan will do what ${effectiveDays} days allow, without promises.`,
    );
  }
  if (input.dailyMinutes < 30) {
    notes.push(
      "Under 30 minutes a day progress is slow — every extra 15 minutes compounds across the plan.",
    );
  }
  const priorHit = input.previousAttempts.find((attempt) => attempt.overall >= input.targetScore);
  if (priorHit) {
    notes.push(
      `You report scoring ${priorHit.overall.toFixed(1)} on ${priorHit.exam} before — the plan aims to rebuild that level, though past results never guarantee future ones.`,
    );
  }

  const days: GeneratedDay[] = [];
  const emitFrom = input.emitFromDay ?? 1;

  for (let dayIndex = 1; dayIndex <= effectiveDays; dayIndex++) {
    const date = addDays(input.startDate, dayIndex - 1);
    const phase = phaseOf(spans, dayIndex);
    const isRestDay = dayIndex % 7 === 0 && dayIndex !== effectiveDays && effectiveDays >= 8;
    const emits = dayIndex >= emitFrom;
    const budget = isRestDay ? Math.max(10, Math.round(input.dailyMinutes * 0.5)) : input.dailyMinutes;
    const phaseDifficulty: PlannerDifficulty =
      phase === "foundation" ? "easier" : phase === "skills" ? "medium" : phase === "mock_cycle" ? "harder" : "medium";

    const tasks: GeneratedTask[] = [];
    let remaining = budget;
    const pushTask = (task: GeneratedTask) => {
      tasks.push(task);
      remaining -= task.minutes;
      lastSeenType.set(task.type, dayIndex);
    };

    // Day 1: baseline diagnostics for low-confidence sections.
    if (dayIndex === 1 && emits) {
      const needEvidence = input.estimates
        .filter((entry) => entry.confidence < 0.3)
        .sort((a, b) => a.estimated - b.estimated)
        .slice(0, 2);
      if (needEvidence.length > 0) {
        for (const entry of needEvidence) {
          pushTask({
            type: "diagnostic",
            section: entry.section,
            title: `Baseline diagnostic — ${entry.section} quick set`,
            detail: `A short exam-format ${entry.section} set (~15 min) so the plan works from measured evidence, not guesses.`,
            minutes: 15,
            difficulty: "medium",
            href: "#/exams/mocks",
            stepId: null,
            mockTestId: null,
            reason: `Your ${entry.section} estimate has low confidence — measure it first`,
            sortOrder: tasks.length,
          });
        }
      } else {
        pushTask({
          type: "review",
          section: null,
          title: "Review your baseline diagnostic",
          detail: "Open the exam dashboard and read where you stand per section before starting.",
          minutes: 10,
          difficulty: "easier",
          href: "#/exams/dashboard",
          stepId: null,
          mockTestId: null,
          reason: "Start from evidence",
          sortOrder: tasks.length,
        });
      }
    }

    // Mock day.
    const isMockDay = mockDays.has(dayIndex);
    if (isMockDay) {
      const mock = input.mocks[mockUsed] ?? null;
      mockUsed += 1;
      const mockMinutes = Math.max(30, Math.min(input.dailyMinutes, 120));
      pushTask({
        type: "mock_exam",
        section: null,
        title: mock ? `Mock examination: ${mock.title}` : "Timed mixed practice set",
        detail: mock
          ? `Full-length mock (~${input.specTotalMinutes} min) — schedule a longer session than your daily budget if possible, treat it like the real exam.`
          : `Timed mixed practice set (~${Math.max(30, input.dailyMinutes)} min) standing in for a full mock — exam conditions, no pauses.`,
        minutes: mockMinutes,
        difficulty: "harder",
        href: "#/exams/mocks",
        stepId: null,
        mockTestId: mock ? mock.id : null,
        reason: "Scheduled mock — exam-condition evidence for the readiness report",
        sortOrder: tasks.length,
      });
    }

    // Mistake revision follows every mock day.
    if (mockDays.has(dayIndex - 1) && input.mistakeCount > 0) {
      pushTask({
        type: "mistake_revision",
        section: null,
        title: "Mistake revision — retry what you got wrong",
        detail: `${Math.min(input.mistakeCount, 30)} wrong or skipped items are waiting — retry them and read every explanation.`,
        minutes: 15,
        difficulty: "medium",
        href: "#/exams/mocks",
        stepId: null,
        mockTestId: null,
        reason: "Lock in the lessons from yesterday's mock",
        sortOrder: tasks.length,
      });
    }

    // Warm-up on the top-priority section (rotation over the two weakest).
    if (!isMockDay && !isRestDay && remaining >= 25) {
      const weakOrder = [...sections].sort((a, b) => weights[b] - weights[a]);
      const warmSection = weakOrder[(dayIndex - 1) % Math.min(2, weakOrder.length)];
      const template = warmupTaskFor(warmSection, rotations[warmSection]);
      rotations[warmSection] += 1;
      pushTask({
        type: template.type,
        section: warmSection,
        title: template.title,
        detail: template.detail,
        minutes: template.minutes,
        difficulty: "easier",
        href: template.href,
        stepId: null,
        mockTestId: null,
        reason: `Daily touch on your hardest section (${warmSection})`,
        sortOrder: tasks.length,
      });
    }

    // Rest days: one light review task, nothing else.
    if (isRestDay) {
      pushTask({
        type: "review",
        section: null,
        title: "Light day — notes & flashcards",
        detail: "Flick through your notes and word lists. Rest is part of the plan, not a failure.",
        minutes: Math.min(15, Math.max(10, budget - 10)),
        difficulty: "easier",
        href: "#/vocabulary/today",
        stepId: null,
        mockTestId: null,
        reason: "Scheduled recovery — consistency beats burnout",
        sortOrder: tasks.length,
      });
      if (emits) {
        days.push({
          dayIndex,
          date,
          phase,
          focus: "Light day — consolidate & rest",
          isRestDay,
          tasks,
        });
      }
      continue;
    }

    // Core slots: weighted round-robin. The section whose served share is
    // furthest below its weight share gets the next slot.
    const sumWeights = sections.reduce((sum, section) => sum + weights[section], 0);
    const slotsSoFar = sections.reduce((sum, section) => sum + served[section], 0);
    const maxTasks = isMockDay ? 3 : (emits ? 5 : 0);
    while (tasks.length < maxTasks && remaining >= 10) {
      const due = sections
        .map((section) => ({
          section,
          score: weights[section] * (slotsSoFar + 1) - served[section] * sumWeights,
        }))
        .sort((a, b) => b.score - a.score);
      const section = due[0].section;

      // Coverage repair: a promised type not seen for 6 days wins.
      const owedType = coverageTypes.find(
        (type) => (lastSeenType.get(type) ?? -999) < dayIndex - 6,
      );
      let template: TaskTemplate | null = null;
      let step: GeneratorPathwayStep | null = null;

      if (owedType) {
        const coverage = coverageTemplate(owedType, section);
        template = {
          type: owedType,
          section,
          title: coverage.title,
          detail: coverage.detail,
          minutes: coverage.minutes,
          href: coverage.href,
          baseDifficulty: "medium",
        };
      } else {
        const pool = sectionPools.get(section)!;
        if (pool.length > 0) {
          step = pool.shift()!;
        } else if (genericPool.length > 0 && rotations[section] % 3 === 2) {
          step = genericPool.shift()!;
        } else {
          template = libraryTaskFor(section, rotations[section]);
          rotations[section] += 1;
        }
      }

      if (step) {
        const stepType = stepTaskType(step.refType, step.examSection);
        if (step.minutes > remaining + 10 && tasks.length > 0) {
          // Keep oversized steps for a roomier day.
          (step.examSection ? sectionPools.get(step.examSection)! : genericPool).unshift(step);
          break;
        }
        const difficulty =
          input.difficultyOverrides?.[step.examSection ?? section] ?? phaseDifficulty;
        pushTask({
          type: stepType,
          section: step.examSection,
          title: step.label,
          detail: step.focus ?? `From your ${step.moduleTitle} module.`,
          minutes: step.minutes,
          difficulty,
          href: hrefForStep(step),
          stepId: step.id,
          mockTestId: null,
          reason: `${step.moduleTitle} — pathway step`,
          sortOrder: tasks.length,
        });
        served[section] += 1;
      } else if (template) {
        if (template.minutes > remaining + 10 && tasks.length > 0) break;
        const difficulty = input.difficultyOverrides?.[template.section ?? section] ?? phaseDifficulty;
        pushTask({
          type: template.type,
          section: template.section ?? section,
          title: template.title,
          detail: template.detail,
          minutes: template.minutes,
          difficulty,
          href: template.href,
          stepId: null,
          mockTestId: null,
          reason: owedType
            ? `Weekly coverage — keep every skill moving (${owedType})`
            : `Weighted practice — ${section} needs the most work`,
          sortOrder: tasks.length,
        });
        served[section] += 1;
      } else {
        break;
      }
    }

    // Guarantee at least one task per day, even on tiny budgets.
    if (emits && tasks.length === 0) {
      const weakest = [...sections].sort((a, b) => weights[b] - weights[a])[0];
      const template = libraryTaskFor(weakest, rotations[weakest]);
      rotations[weakest] += 1;
      pushTask({
        type: template.type,
        section: weakest,
        title: template.title,
        detail: `${template.detail} (Runs past your daily budget — split it across two days if needed.)`,
        minutes: template.minutes,
        difficulty: phaseDifficulty,
        href: template.href,
        stepId: null,
        mockTestId: null,
        reason: "Smallest useful task for your weakest section",
        sortOrder: 0,
      });
    }

    // Focus label from the day's dominant sections/types.
    const trainedSections = tasks
      .map((task) => task.section)
      .filter((section): section is SectionKey => section !== null);
    const dominant = [...new Set(trainedSections)].slice(0, 2);
    const focus = isMockDay
      ? "Mock exam day"
      : dominant.length === 0
        ? "General preparation"
        : dominant
            .map((section) => section.charAt(0).toUpperCase() + section.slice(1))
            .join(" & ");

    if (emits) {
      days.push({ dayIndex, date, phase, focus, isRestDay, tasks });
    }
  }

  // Final-review phase: close with mistake revision + exam logistics.
  const reviewSpan = spans.find((span) => span.key === "final_review");
  if (reviewSpan) {
    const lastDay = days[days.length - 1];
    if (lastDay && !lastDay.tasks.some((task) => task.type === "review")) {
      lastDay.tasks.push({
        type: "review",
        section: null,
        title: "Exam-day logistics & timing plan",
        detail: "Check the test format, timings and what to bring. No new material — protect your sleep.",
        minutes: 10,
        difficulty: "easier",
        href: "#/exams/dashboard",
        stepId: null,
        mockTestId: null,
        reason: "Final review — arrive calm and prepared",
        sortOrder: lastDay.tasks.length,
      });
    }
    if (input.mistakeCount > 0 && effectiveDays >= 14) {
      const midReview = days.find(
        (day) => day.dayIndex === Math.floor((reviewSpan.fromDay + reviewSpan.toDay) / 2),
      );
      if (midReview && !midReview.tasks.some((task) => task.type === "mistake_revision")) {
        midReview.tasks.splice(Math.min(1, midReview.tasks.length), 0, {
          type: "mistake_revision",
          section: null,
          title: "Final mistake sweep",
          detail: "One last pass over every wrong or skipped item before the exam.",
          minutes: 15,
          difficulty: "medium",
          href: "#/exams/mocks",
          stepId: null,
          mockTestId: null,
          reason: "Final review — mistakes are the highest-value material",
          sortOrder: 1,
        });
      }
    }
  }

  if (mockTitles.length > 0 && mockUsed === 0 && mockCycleLen > 0) {
    notes.push("Mocks are scheduled in the final phase — earlier days build the skills they measure.");
  }

  const meta: Omit<PlanMeta, "adaptations" | "evidenceSnapshot"> = {
    phases: spans,
    focusWeights: weights,
    difficultyOverrides: input.difficultyOverrides ?? {},
    notes,
    suggestedDurationDays,
  };

  return { days, meta, effectiveDays };
}

// ---------------------------------------------------------------------------
// Template helpers
// ---------------------------------------------------------------------------

/** A cross-section template for a promised activity type (coverage repair). */
function coverageTemplate(type: PlannerTaskType, section: SectionKey): TaskTemplate {
  const fromLibrary = libraryTaskFor(section, 0);
  const generic: Record<string, TaskTemplate> = {
    vocabulary: {
      type: "vocabulary",
      section,
      title: "Vocabulary development — daily word set",
      detail: "Clear today's word set and review yesterday's misses.",
      minutes: 15,
      href: "#/vocabulary/today",
      baseDifficulty: "easier",
    },
    grammar: {
      type: "grammar",
      section,
      title: "Grammar revision — tense explorer or clinic",
      detail: "One focused grammar round; finish in the Grammar Clinic with your own sentences.",
      minutes: 20,
      href: "#/grammar",
      baseDifficulty: "medium",
    },
    reading: {
      type: "reading",
      section,
      title: "Reading practice — one text with questions",
      detail: "One Reading Room text, then review every wrong answer.",
      minutes: 25,
      href: "#/reading",
      baseDifficulty: "easier",
    },
    listening: {
      type: "listening",
      section,
      title: "Listening exercises — one activity",
      detail: "One Listening Lab activity; replay the tricky parts afterwards.",
      minutes: 20,
      href: "#/listening",
      baseDifficulty: "easier",
    },
    writing: {
      type: "writing",
      section,
      title: "Writing assignment — guided studio task",
      detail: "One Writing Studio assignment with rubric feedback.",
      minutes: 30,
      href: "#/writing",
      baseDifficulty: "medium",
    },
    speaking: {
      type: "speaking",
      section,
      title: "Speaking simulation — record & compare",
      detail: "One recorded speaking activity; compare with the model answer.",
      minutes: 20,
      href: "#/speaking/practice",
      baseDifficulty: "medium",
    },
  };
  return generic[type] ?? fromLibrary;
}

function hrefForStep(step: GeneratorPathwayStep): string {
  switch (step.refType) {
    case "curriculum":
      return step.refId ? `#/course-lesson/${step.refId}` : "#/courses";
    case "grammar":
      return "#/grammar";
    case "vocabulary":
      return "#/vocabulary";
    case "reading":
      return step.refId ? `#/reading/${step.refId}` : "#/reading";
    case "listening":
      return step.refId ? `#/listening/${step.refId}` : "#/listening";
    case "speaking":
      return step.refId ? `#/speaking/activity/${step.refId}` : "#/speaking";
    case "writing":
      return step.refId ? `#/writing/a/${step.refId}` : "#/writing";
    case "lab":
      return "#/lab";
    case "tutor":
      return "#/tutor";
    case "mock":
    case "drill":
      return "#/exams/mocks";
    default:
      return "#/exams/dashboard";
  }
}
