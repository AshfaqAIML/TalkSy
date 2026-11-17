/**
 * Study-plan generator.
 *
 * Builds a day-by-day plan from today towards the exam date (capped at 8
 * weeks) using: the learner's daily minutes, the exam pathway (phase
 * order), recommendations (weak sections first) and a mock-test cadence
 * that accelerates in the final third. Tasks deep-link into the common
 * curriculum — the plan is a schedule over existing content, never a
 * parallel curriculum.
 */

import { db } from "@/lib/db";
import type { RecommendationDto, SectionKey, SpecDto, StudyPlan, StudyTask } from "./types";

const MAX_PLAN_DAYS = 56;
const DAY_MS = 24 * 60 * 60 * 1000;

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export type StudyPlanInput = {
  userId: string;
  spec: SpecDto;
  dailyMinutes: number;
  examDate: Date | null;
  difficultSections: SectionKey[];
  recommendations: RecommendationDto[];
};

type PathwayStepRow = {
  id: string;
  label: string;
  refType: string;
  refId: string | null;
  examSection: string | null;
  focus: string | null;
  minutes: number;
  moduleTitle: string;
  moduleOrder: number;
  order: number;
};

async function loadPathwaySteps(
  examKey: string,
  variant: string,
): Promise<{ title: string; steps: PathwayStepRow[] }> {
  const pathway = await db.examPathway.findFirst({
    where: { examKey, variant, status: "published" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: { steps: { orderBy: { order: "asc" } } },
      },
    },
  });
  if (!pathway) return { title: "", steps: [] };
  const steps: PathwayStepRow[] = [];
  for (const pathwayModule of pathway.modules) {
    for (const step of pathwayModule.steps) {
      steps.push({
        id: step.id,
        label: step.label,
        refType: step.refType,
        refId: step.refId,
        examSection: step.examSection,
        focus: step.focus,
        minutes: step.minutes,
        moduleTitle: pathwayModule.title,
        moduleOrder: pathwayModule.order,
        order: step.order,
      });
    }
  }
  return { title: pathway.title, steps };
}

function hrefForStep(step: PathwayStepRow): string {
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
      return "#/exams/mocks";
    default:
      return "#/exams/dashboard";
  }
}

export async function generateStudyPlan(input: StudyPlanInput): Promise<StudyPlan> {
  const { userId, spec, dailyMinutes, examDate, difficultSections, recommendations } = input;

  const completedStepIds = new Set(
    (
      await db.examPathwayStepProgress.findMany({
        where: { userId, step: { module: { pathway: { examKey: spec.examKey, variant: spec.variant } } } },
        select: { stepId: true },
      })
    ).map((row) => row.stepId),
  );

  const { steps } = await loadPathwaySteps(spec.examKey, spec.variant);
  const pending = steps.filter((step) => !completedStepIds.has(step.id));

  const totalDays = examDate
    ? Math.max(
        3,
        Math.min(MAX_PLAN_DAYS, Math.ceil((examDate.getTime() - Date.now()) / DAY_MS) + 1),
      )
    : 14;

  // Phase boundaries: foundation → skills → mock cycle.
  const mockStartDay = Math.floor(totalDays * 0.6);
  const publishedMocks = await db.mockTest.findMany({
    where: { examKey: spec.examKey, variant: spec.variant, status: "published" },
    select: { id: true, title: true },
    orderBy: { createdAt: "asc" },
  });

  // Task pools.
  const pathwayTasks: StudyTask[] = pending.map((step) => ({
    title: step.label,
    refType: step.refType,
    refId: step.refId,
    href: hrefForStep(step),
    section: step.examSection,
    minutes: step.minutes,
    reason: step.focus ?? `${step.moduleTitle} phase`,
    stepId: step.id,
  }));
  const recommendationTasks: StudyTask[] = recommendations.map((rec) => ({
    title: rec.title,
    refType: "recommendation",
    refId: null,
    href: rec.href,
    section: rec.section,
    minutes: rec.minutes,
    reason: rec.reason,
  }));

  const days: StudyPlan["days"] = [];
  const notes: string[] = [];
  let pathwayQueue = [...pathwayTasks];
  let recQueue = [...recommendationTasks];
  // Difficult sections get a recurring daily warm-up slot.
  const warmups: StudyTask[] = difficultSections.slice(0, 2).map((section) => {
    const rec = recommendations.find((r) => r.section === section);
    return {
      title: rec ? `Warm-up: ${rec.title}` : `Warm-up: ${section} focus`,
      refType: "recommendation",
      refId: null,
      href: rec?.href ?? "#/exams/dashboard",
      section,
      minutes: Math.min(10, Math.max(5, Math.round(dailyMinutes * 0.2))),
      reason: "Daily touch on your hardest section",
    };
  });

  const warmupMinutes = warmups.reduce((sum, task) => sum + task.minutes, 0);
  let mockIndex = 0;

  for (let dayIndex = 0; dayIndex < totalDays; dayIndex++) {
    const date = new Date(Date.now() + dayIndex * DAY_MS);
    const isMockDay =
      dayIndex >= mockStartDay && publishedMocks.length > 0 &&
      (dayIndex - mockStartDay) % Math.max(3, Math.floor((totalDays - mockStartDay) / Math.max(1, publishedMocks.length))) === 0;

    const tasks: StudyTask[] = [];
    let budget = dailyMinutes;

    if (isMockDay && mockIndex < publishedMocks.length + 1) {
      const mock = publishedMocks[Math.min(mockIndex, publishedMocks.length - 1)];
      tasks.push({
        title: `Mock test: ${mock.title}`,
        refType: "mock",
        refId: mock.id,
        href: "#/exams/mocks",
        section: null,
        minutes: Math.max(30, dailyMinutes),
        reason: "Scheduled mock — treat it like the real exam",
        mockTestId: mock.id,
      });
      mockIndex += 1;
      budget = Math.max(0, dailyMinutes - 20); // light day around the mock
    }

    for (const warmup of warmups) {
      if (budget >= warmup.minutes) {
        tasks.push(warmup);
        budget -= warmup.minutes;
      }
    }

    // Alternate: recommendations first while the pathway queue is long,
    // pathway steps dominate as the plan progresses.
    while (budget >= 10 && (pathwayQueue.length > 0 || recQueue.length > 0)) {
      const preferPathway = pathwayQueue.length > 0 && (recQueue.length === 0 || dayIndex / totalDays > 0.25);
      const task = preferPathway ? pathwayQueue.shift() : recQueue.shift();
      if (!task) break;
      if (task.minutes > budget + 10) {
        // Keep oversized tasks for days with more room.
        (preferPathway ? pathwayQueue : recQueue).push(task);
        break;
      }
      tasks.push(task);
      budget -= task.minutes;
    }

    const focus =
      tasks.find((task) => task.section && difficultSections.includes(task.section as SectionKey))?.section ??
      (isMockDay ? "mock" : "study");

    days.push({ date: isoDate(date), minutes: dailyMinutes - Math.max(0, budget), focus, tasks });
  }

  if (!examDate) {
    notes.push("No exam date set — the plan covers the next two weeks. Add your exam date for a full countdown plan.");
  }
  if (publishedMocks.length === 0) {
    notes.push("No published mock tests for this exam yet — the mock cycle will start as soon as one is available.");
  }
  if (pathwayQueue.length > 0) {
    notes.push(`${pathwayQueue.length} pathway steps did not fit before the exam date — consider raising your daily study time or moving the exam date.`);
  }

  const nextMock = days.find((day) => day.tasks.some((task) => task.refType === "mock"));

  const plan: StudyPlan = {
    days,
    nextMockDate: nextMock?.date ?? null,
    notes,
  };

  await db.examStudyPlan.upsert({
    where: { userId_examKey: { userId, examKey: spec.examKey } },
    create: { userId, examKey: spec.examKey, plan: JSON.stringify(plan) },
    update: { plan: JSON.stringify(plan), generatedAt: new Date() },
  });

  return plan;
}

export async function getStudyPlan(userId: string, examKey: string): Promise<StudyPlan | null> {
  const row = await db.examStudyPlan.findUnique({
    where: { userId_examKey: { userId, examKey } },
  });
  if (!row) return null;
  try {
    return JSON.parse(row.plan) as StudyPlan;
  } catch {
    return null;
  }
}
