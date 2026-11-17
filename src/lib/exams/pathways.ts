/**
 * Exam pathways — the IELTS and TOEFL course structures.
 *
 * A pathway is phases (modules) of steps, and every step is a REFERENCE
 * into the common English curriculum or an academy drill/mock. This is
 * the "common English foundation" requirement made structural: the exam
 * courses are journeys through the existing platform, not copies of it.
 */

import { db } from "@/lib/db";
import type { ExamKey, SectionKey } from "./types";

export type PathwayStepDto = {
  id: string;
  order: number;
  label: string;
  refType: string;
  refId: string | null;
  examSection: SectionKey | null;
  focus: string | null;
  minutes: number;
  href: string;
  completed: boolean;
};

export type PathwayModuleDto = {
  id: string;
  title: string;
  goal: string;
  order: number;
  steps: PathwayStepDto[];
};

export type PathwayDto = {
  id: string;
  examKey: ExamKey;
  variant: string;
  title: string;
  summary: string;
  modules: PathwayModuleDto[];
  completion: {
    completedSteps: number;
    totalSteps: number;
    percent: number;
  };
};

export function hrefForStep(refType: string, refId: string | null): string {
  switch (refType) {
    case "curriculum":
      return refId ? `#/course-lesson/${refId}` : "#/courses";
    case "grammar":
      return refId ? "#/grammar" : "#/grammar";
    case "vocabulary":
      return refId ? `#/vocabulary/lists/${refId}` : "#/vocabulary";
    case "reading":
      return refId ? `#/reading/${refId}` : "#/reading";
    case "listening":
      return refId ? `#/listening/${refId}` : "#/listening";
    case "speaking":
      return refId ? `#/speaking/activity/${refId}` : "#/speaking";
    case "writing":
      return refId ? `#/writing/a/${refId}` : "#/writing";
    case "lab":
      return "#/lab";
    case "tutor":
      return "#/tutor";
    case "drill":
      return "#/exams/mocks";
    case "mock":
      return "#/exams/mocks";
    case "library":
      return refId && refId.startsWith("toefl-") ? `#/exams/toefl/library/${refId}` : "#/exams/toefl/library";
    default:
      return "#/exams/dashboard";
  }
}

export async function getPathway(
  examKey: ExamKey,
  variant: string,
  userId?: string,
): Promise<PathwayDto | null> {
  const pathway = await db.examPathway.findFirst({
    where: { examKey, variant, status: "published" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: { steps: { orderBy: { order: "asc" } } },
      },
    },
  });
  if (!pathway) return null;

  const completed = userId
    ? new Set(
        (
          await db.examPathwayStepProgress.findMany({
            where: { userId },
            select: { stepId: true },
          })
        ).map((row) => row.stepId),
      )
    : new Set<string>();

  const modules: PathwayModuleDto[] = pathway.modules.map((module) => ({
    id: module.id,
    title: module.title,
    goal: module.goal,
    order: module.order,
    steps: module.steps.map((step) => ({
      id: step.id,
      order: step.order,
      label: step.label,
      refType: step.refType,
      refId: step.refId,
      examSection: (step.examSection as SectionKey | null) ?? null,
      focus: step.focus,
      minutes: step.minutes,
      href: hrefForStep(step.refType, step.refId),
      completed: completed.has(step.id),
    })),
  }));

  const allSteps = modules.flatMap((module) => module.steps);
  const completedCount = allSteps.filter((step) => step.completed).length;

  return {
    id: pathway.id,
    examKey: pathway.examKey as ExamKey,
    variant: pathway.variant,
    title: pathway.title,
    summary: pathway.summary,
    modules,
    completion: {
      completedSteps: completedCount,
      totalSteps: allSteps.length,
      percent: allSteps.length === 0 ? 0 : Math.round((completedCount / allSteps.length) * 100),
    },
  };
}

export async function markStepComplete(userId: string, stepId: string): Promise<boolean> {
  const step = await db.examPathwayStep.findUnique({ where: { id: stepId } });
  if (!step) return false;
  await db.examPathwayStepProgress.upsert({
    where: { userId_stepId: { userId, stepId } },
    create: { userId, stepId },
    update: {},
  });
  return true;
}

export async function unmarkStep(userId: string, stepId: string): Promise<void> {
  await db.examPathwayStepProgress.deleteMany({ where: { userId, stepId } });
}
