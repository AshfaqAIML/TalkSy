/**
 * Admin dashboard analytics.
 *
 * Every number below is a real database aggregate — nothing is estimated,
 * cached or hardcoded. Where a metric cannot be computed it is reported as
 * null rather than guessed.
 */

import { db } from "@/lib/db";
import type { CmsStatsDto } from "@/data/cms/types";

const DAY_MS = 86_400_000;

/** Distinct learner ids with any recorded learning event inside the window. */
async function activeLearnerIds(sinceDays: number): Promise<Set<string>> {
  const since = new Date(Date.now() - sinceDays * DAY_MS);
  const tables = [
    db.exerciseAttempt.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
    db.assessmentResult.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
    db.readingAttempt.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
    db.listeningAttempt.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
    db.speakingAttempt.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
    db.writingSubmission.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
    db.vocabReviewLog.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
    db.tutorMessage.findMany({
      where: { createdAt: { gte: since }, role: "learner" },
      select: { userId: true },
    }),
    db.lessonProgress.findMany({ where: { updatedAt: { gte: since } }, select: { userId: true } }),
    db.cmsLessonProgress.findMany({ where: { updatedAt: { gte: since } }, select: { userId: true } }),
    db.cmsEnrolment.findMany({ where: { createdAt: { gte: since } }, select: { userId: true } }),
  ] as const;
  const results = await Promise.all(tables);
  const ids = new Set<string>();
  for (const rows of results) for (const row of rows) ids.add(row.userId);
  return ids;
}

export async function getDashboardStats(): Promise<CmsStatsDto> {
  const since30 = new Date(Date.now() - 30 * DAY_MS);

  const [
    totalLearners,
    active7,
    active30,
    enrolmentTotal,
    cmsCompleted,
    coreCompleted,
    platformAttempts,
    platformCorrect,
    assessmentsCompleted,
    assessmentsPassed,
    cmsAttempts,
    cmsCorrect,
    attempts30d,
    writing30d,
    tutor30d,
    speaking30d,
    popularCore,
    popularCms,
    courseStatus,
    lessonStatus,
    questionStatus,
    enrolmentsByCourse,
  ] = await Promise.all([
    db.user.count({ where: { role: "student" } }),
    activeLearnerIds(7),
    activeLearnerIds(30),
    db.cmsEnrolment.count(),
    db.cmsLessonProgress.count({ where: { status: "completed" } }),
    db.lessonProgress.count({ where: { status: "completed" } }),
    db.exerciseAttempt.count(),
    db.exerciseAttempt.count({ where: { isCorrect: true } }),
    db.assessmentResult.count({ where: { status: "completed" } }),
    db.assessmentResult.count({ where: { status: "completed", passed: true } }),
    db.exerciseAttempt.count({ where: { source: "cms" } }),
    db.exerciseAttempt.count({ where: { source: "cms", isCorrect: true } }),
    db.exerciseAttempt.count({ where: { createdAt: { gte: since30 } } }),
    db.writingSubmission.count({ where: { createdAt: { gte: since30 } } }),
    db.tutorMessage.count({ where: { createdAt: { gte: since30 }, role: "learner" } }),
    db.speakingAttempt.count({ where: { createdAt: { gte: since30 } } }),
    db.lessonProgress.groupBy({
      by: ["lessonSlug", "status"],
      _count: { _all: true },
      orderBy: { _count: { lessonSlug: "desc" } },
      take: 200,
    }),
    db.cmsLessonProgress.groupBy({
      by: ["lessonId", "status"],
      _count: { _all: true },
    }),
    db.cmsCourse.groupBy({ by: ["status", "live"], _count: { _all: true } }),
    db.cmsLesson.groupBy({ by: ["status", "live"], _count: { _all: true } }),
    db.cmsQuestion.groupBy({ by: ["status"], _count: { _all: true } }),
    db.cmsEnrolment.groupBy({
      by: ["courseId"],
      _count: { _all: true },
      orderBy: { _count: { courseId: "desc" } },
    }),
  ]);

  // Popular core lessons: opened by most learners, with completion counts.
  const coreMap = new Map<string, { learners: number; completions: number }>();
  for (const row of popularCore) {
    const entry = coreMap.get(row.lessonSlug) ?? { learners: 0, completions: 0 };
    entry.learners += row._count._all;
    if (row.status === "completed") entry.completions += row._count._all;
    coreMap.set(row.lessonSlug, entry);
  }
  const popularCoreLessons = [...coreMap.entries()]
    .map(([slug, v]) => ({ slug, ...v }))
    .sort((a, b) => b.learners - a.learners)
    .slice(0, 8);

  // Popular CMS lessons (join titles).
  const cmsLessonIds = [...new Set(popularCms.map((r) => r.lessonId))];
  const cmsLessons = cmsLessonIds.length
    ? await db.cmsLesson.findMany({ where: { id: { in: cmsLessonIds } }, select: { id: true, slug: true, title: true } })
    : [];
  const cmsById = new Map(cmsLessons.map((l) => [l.id, l]));
  const cmsMap = new Map<string, { slug: string; title: string; learners: number; completions: number }>();
  for (const row of popularCms) {
    const lesson = cmsById.get(row.lessonId);
    if (!lesson) continue;
    const entry = cmsMap.get(lesson.slug) ?? {
      slug: lesson.slug,
      title: lesson.title,
      learners: 0,
      completions: 0,
    };
    entry.learners += row._count._all;
    if (row.status === "completed") entry.completions += row._count._all;
    cmsMap.set(lesson.slug, entry);
  }
  const popularCmsLessons = [...cmsMap.values()].sort((a, b) => b.learners - a.learners).slice(0, 8);

  // Course titles for enrolment breakdown.
  const courseIds = enrolmentsByCourse.map((e) => e.courseId);
  const courses = courseIds.length
    ? await db.cmsCourse.findMany({ where: { id: { in: courseIds } }, select: { id: true, title: true } })
    : [];
  const courseTitle = new Map(courses.map((c) => [c.id, c.title]));

  const countByStatus = (
    rows: { status: string; live: boolean; _count: { _all: number } }[],
  ) => {
    const out = { draft: 0, review: 0, approved: 0, live: 0 };
    for (const row of rows) {
      if (row.status === "draft") out.draft += row._count._all;
      if (row.status === "review") out.review += row._count._all;
      if (row.status === "approved") out.approved += row._count._all;
      if (row.live) out.live += row._count._all;
    }
    // "live" overlaps with the workflow states — keep draft/review/approved
    // describing the working copy and live describing learner visibility.
    return out;
  };

  const qStatus = { draft: 0, review: 0, approved: 0, published: 0, retired: 0 };
  for (const row of questionStatus) {
    if (row.status in qStatus) qStatus[row.status as keyof typeof qStatus] += row._count._all;
  }

  const activeLearners30d = active30.size;
  const activeLearners7d = active7.size;
  // Learners active in the last 7 days are, by definition, also active in 30.
  const platformAccuracy = platformAttempts > 0 ? platformCorrect / platformAttempts : null;

  return {
    totalLearners,
    activeLearners7d,
    activeLearners30d,
    courseEnrolments: enrolmentTotal,
    cmsLessonsCompleted: cmsCompleted,
    coreLessonsCompleted: coreCompleted,
    platformAttempts,
    platformAccuracy,
    assessmentPassRate: assessmentsCompleted > 0 ? assessmentsPassed / assessmentsCompleted : null,
    cmsQuestionAccuracy: cmsAttempts > 0 ? cmsCorrect / cmsAttempts : null,
    engagement: {
      attempts30d,
      writingSubmissions30d: writing30d,
      tutorMessages30d: tutor30d,
      speakingAttempts30d: speaking30d,
      avgAttemptsPerActiveLearner:
        activeLearners30d > 0 ? Math.round((attempts30d / activeLearners30d) * 10) / 10 : null,
    },
    popularCoreLessons,
    popularCmsLessons,
    contentStatus: {
      courses: countByStatus(courseStatus),
      lessons: countByStatus(lessonStatus),
      questions: qStatus,
    },
    enrolmentsByCourse: enrolmentsByCourse
      .map((e) => ({ courseTitle: courseTitle.get(e.courseId) ?? "Unknown course", learners: e._count._all }))
      .slice(0, 8),
  };
}
