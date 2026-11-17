/**
 * Exam-preparation dashboard aggregation.
 *
 * One call returns everything the dashboard renders: available exams,
 * selected exam + spec version, target vs estimated performance, exam
 * countdown, preparation completion, section strengths/weaknesses,
 * recommendations, today's study plan, upcoming mocks and recent results.
 */

import { db } from "@/lib/db";
import { getActiveSpec, listSelectableExams } from "./specs";
import { getProfile } from "./profile";
import { refreshSectionEstimates, getSectionEstimates } from "./diagnostics";
import { buildRecommendations, weaknessTagsFromAttempt } from "./recommend";
import { generateStudyPlan, getStudyPlan } from "./study-plan";
import { getPathway } from "./pathways";
import { overallScore } from "./scoring";
import { getAttemptResult } from "./mock-engine";
import { attemptModeLabel, isTimedMode, type AttemptResultDto, type SectionKey } from "./types";

export type ExamDashboardDto = {
  onboarded: boolean;
  availableExams: Array<{
    examKey: string;
    variant: string;
    name: string;
    version: number;
    mockCount: number;
    hasPathway: boolean;
  }>;
  selected: {
    examKey: string;
    variant: string;
    name: string;
    specVersion: number;
    effectiveDate: string;
    lastReviewedAt: string;
    sourceRefs: Array<{ label: string; url: string }>;
    validityMonths: number;
    transitionNote?: string;
  } | null;
  goals: {
    targetScore: number;
    examDate: string | null;
    daysRemaining: number | null;
    dailyMinutes: number;
    proficiency: string;
    difficultSections: string[];
  } | null;
  estimates: {
    overall: number | null;
    scoreDisplay: string | null;
    target: number | null;
    sections: Array<{
      section: SectionKey;
      estimated: number;
      confidence: number;
      strengths: string[];
      weaknesses: string[];
    }>;
  } | null;
  completion: {
    percent: number;
    completedSteps: number;
    totalSteps: number;
    planTasksDone: number;
    planTasksTotal: number;
  } | null;
  strengths: Array<{ section: SectionKey; note: string; score: number }>;
  weaknesses: Array<{ section: SectionKey; note: string; score: number }>;
  recommendations: Array<{
    title: string;
    reason: string;
    href: string;
    source: string;
    minutes: number;
  }>;
  todayPlan: {
    date: string;
    focus: string;
    tasks: Array<{
      title: string;
      href: string;
      minutes: number;
      reason?: string;
      done: boolean;
    }>;
  } | null;
  upcomingMocks: Array<{ id: string; title: string; kind: string; lengthLabel: string; scheduledDate: string | null }>;
  recentResults: Array<{
    attemptId: string;
    mockTitle: string;
    scoreDisplay: string | null;
    totalScore: number | null;
    status: string;
    mode: string;
    modeLabel: string;
    timed: boolean;
    submittedAt: string | null;
    result?: AttemptResultDto;
  }>;
  /** UKVI delivery context, when the learner is preparing for the SELT route. */
  delivery: string;
};

export async function buildDashboard(userId: string): Promise<ExamDashboardDto> {
  const available = await listSelectableExams();
  const availableExams = available.map((entry) => ({
    examKey: entry.spec.examKey,
    variant: entry.spec.variant,
    name: entry.spec.name,
    version: entry.spec.version,
    mockCount: entry.mockCount,
    hasPathway: entry.pathwayCount > 0,
  }));

  const profile = await getProfile(userId);
  if (!profile || !profile.onboarded) {
    return {
      onboarded: false,
      availableExams,
      selected: null,
      goals: null,
      estimates: null,
      completion: null,
      strengths: [],
      weaknesses: [],
      recommendations: [],
      todayPlan: null,
      upcomingMocks: [],
      recentResults: [],
      delivery: profile?.delivery ?? "STANDARD",
    };
  }

  const examKey = profile.examKey as "IELTS" | "TOEFL_IBT";
  const spec = await getActiveSpec(examKey, profile.variant);
  if (!spec) {
    return {
      onboarded: true,
      availableExams,
      selected: null,
      goals: null,
      estimates: null,
      completion: null,
      strengths: [],
      weaknesses: [],
      recommendations: [],
      todayPlan: null,
      upcomingMocks: [],
      recentResults: [],
      delivery: profile.delivery,
    };
  }

  // Estimates (recomputed — cheap queries, always fresh evidence mix).
  const difficultSections = profile.difficultSections.filter(
    (section): section is SectionKey =>
      ["listening", "reading", "writing", "speaking"].includes(section),
  );
  const estimates = await refreshSectionEstimates({
    userId,
    spec,
    cefr: profile.proficiency,
    difficultSections,
  });

  // Latest mock evidence feeds weakness tags for recommendations. Timed
  // (exam-mode) attempts are preferred; untimed practice runs only fill in
  // when nothing else exists.
  const attemptFilter = {
    userId,
    status: { in: ["submitted", "scored"] as string[] },
    mockTest: { examKey, variant: profile.variant },
  };
  let latestAttempt = await db.mockTestAttempt.findFirst({
    where: { ...attemptFilter, mode: "exam" },
    orderBy: { submittedAt: "desc" },
  });
  if (!latestAttempt) {
    latestAttempt = await db.mockTestAttempt.findFirst({ where: attemptFilter, orderBy: { submittedAt: "desc" } });
  }
  let weaknessTags: Partial<Record<SectionKey, string[]>> = {};
  if (latestAttempt) {
    const result = await getAttemptResult(latestAttempt.id, userId);
    if (result) {
      weaknessTags = weaknessTagsFromAttempt(result.questionResults);
    }
  }
  const recommendations = buildRecommendations({
    spec,
    estimates: estimates.map((e) => ({ section: e.section, estimated: e.estimated, confidence: e.confidence })),
    weaknessTags,
    difficultSections,
  });

  // Study plan (regenerate when missing or stale > 3 days).
  let plan = await getStudyPlan(userId, examKey);
  const planRow = await db.examStudyPlan.findUnique({
    where: { userId_examKey: { userId, examKey } },
  });
  const stale = !planRow || Date.now() - planRow.generatedAt.getTime() > 3 * 24 * 60 * 60 * 1000;
  if (!plan || stale) {
    plan = await generateStudyPlan({
      userId,
      spec,
      dailyMinutes: profile.dailyMinutes,
      examDate: profile.examDate ? new Date(profile.examDate) : null,
      difficultSections,
      recommendations,
    });
  }

  // Pathway completion + today's tasks done state.
  const pathway = await getPathway(examKey, profile.variant, userId);
  const today = new Date().toISOString().slice(0, 10);
  const todayDay = plan.days.find((day) => day.date === today) ?? null;
  const planTasksTotal = plan.days.reduce((sum, day) => sum + day.tasks.length, 0);
  const completedStepIds = new Set(
    (
      await db.examPathwayStepProgress.findMany({
        where: { userId },
        select: { stepId: true },
      })
    ).map((row) => row.stepId),
  );
  const planTasksDone = plan.days.reduce(
    (sum, day) => sum + day.tasks.filter((task) => task.stepId && completedStepIds.has(task.stepId)).length,
    0,
  );

  // Upcoming + recent mocks.
  const publishedMocks = await db.mockTest.findMany({
    where: { examKey, variant: profile.variant, status: "published" },
    orderBy: { createdAt: "asc" },
    select: { id: true, title: true, kind: true, lengthLabel: true },
  });
  const scheduledSet = new Set(
    plan.days.flatMap((day) =>
      day.tasks.filter((task) => task.refType === "mock").map((task) => task.mockTestId ?? ""),
    ),
  );
  const upcomingMocks = publishedMocks.map((mock) => {
    const scheduledDay = plan.days.find((day) =>
      day.tasks.some((task) => task.mockTestId === mock.id),
    );
    return {
      id: mock.id,
      title: mock.title,
      kind: mock.kind,
      lengthLabel: mock.lengthLabel,
      scheduledDate: scheduledDay?.date ?? null,
    };
  });
  void scheduledSet;

  const recentAttempts = await db.mockTestAttempt.findMany({
    where: { userId, status: { in: ["submitted", "scored"] } },
    orderBy: { submittedAt: "desc" },
    take: 5,
  });
  const recentResults: ExamDashboardDto["recentResults"] = [];
  for (const attempt of recentAttempts) {
    const mock = await db.mockTest.findUnique({ where: { id: attempt.mockTestId } });
    if (!mock) continue;
    recentResults.push({
      attemptId: attempt.id,
      mockTitle: mock.title,
      scoreDisplay: attempt.scoreDisplay,
      totalScore: attempt.totalScore,
      status: attempt.status,
      mode: attempt.mode,
      modeLabel: attemptModeLabel(attempt.mode),
      timed: isTimedMode(attempt.mode, attempt.timed),
      submittedAt: attempt.submittedAt?.toISOString() ?? null,
    });
  }

  // Strengths / weaknesses ranked on the exam's scale.
  const ranked = [...estimates].sort((a, b) => b.estimated - a.estimated);
  const maxScore = spec.scoringModel.maxSectionScore;
  const strengths = ranked
    .filter((entry) => entry.estimated >= maxScore * 0.7)
    .slice(0, 2)
    .map((entry) => ({
      section: entry.section,
      note: entry.strengths[0] ?? `Estimated ${entry.estimated.toFixed(1)}`,
      score: entry.estimated,
    }));
  const weaknesses = ranked
    .slice()
    .reverse()
    .filter((entry) => entry.estimated < maxScore * 0.75 || entry.weaknesses.length > 0)
    .slice(0, 3)
    .map((entry) => ({
      section: entry.section,
      note: entry.weaknesses[0] ?? `Estimated ${entry.estimated.toFixed(1)} — below target`,
      score: entry.estimated,
    }));

  const overall = overallScore(
    spec.scoringModel,
    estimates.map((entry) => entry.estimated),
  );

  const daysRemaining = profile.examDate
    ? Math.ceil((new Date(profile.examDate).getTime() - Date.now()) / (24 * 60 * 60 * 1000))
    : null;

  return {
    onboarded: true,
    availableExams,
    selected: {
      examKey,
      variant: profile.variant,
      name: spec.name,
      specVersion: spec.version,
      effectiveDate: spec.effectiveDate.slice(0, 10),
      lastReviewedAt: spec.lastReviewedAt.slice(0, 10),
      sourceRefs: spec.sourceRefs.map((ref) => ({ label: ref.label, url: ref.url })),
      validityMonths: spec.scoringModel.validityMonths,
      transitionNote: spec.scoringModel.transitionNote,
    },
    goals: {
      targetScore: profile.targetScore,
      examDate: profile.examDate,
      daysRemaining,
      dailyMinutes: profile.dailyMinutes,
      proficiency: profile.proficiency,
      difficultSections: profile.difficultSections,
    },
    estimates: {
      overall,
      scoreDisplay:
        spec.scoringModel.kind === "IELTS_BAND"
          ? `Band ${overall.toFixed(1)}`
          : `Band ${overall.toFixed(1)} (≈${Math.round((overall / 6) * 120)}/120 legacy)`,
      target: profile.targetScore,
      sections: estimates,
    },
    completion: pathway
      ? {
          percent: pathway.completion.percent,
          completedSteps: pathway.completion.completedSteps,
          totalSteps: pathway.completion.totalSteps,
          planTasksDone,
          planTasksTotal,
        }
      : { percent: 0, completedSteps: 0, totalSteps: 0, planTasksDone, planTasksTotal },
    strengths,
    weaknesses,
    recommendations,
    todayPlan: todayDay
      ? {
          date: todayDay.date,
          focus: todayDay.focus,
          tasks: todayDay.tasks.map((task) => ({
            title: task.title,
            href: task.href,
            minutes: task.minutes,
            reason: task.reason,
            done: task.stepId ? completedStepIds.has(task.stepId) : false,
          })),
        }
      : plan.days[0]
        ? {
            date: plan.days[0].date,
            focus: plan.days[0].focus,
            tasks: plan.days[0].tasks.map((task) => ({
              title: task.title,
              href: task.href,
              minutes: task.minutes,
              reason: task.reason,
              done: task.stepId ? completedStepIds.has(task.stepId) : false,
            })),
          }
        : null,
    upcomingMocks,
    recentResults,
    delivery: profile.delivery,
  };
}
