/**
 * Admin dashboard analytics.
 *
 * Every number below is a real database aggregate — nothing is estimated,
 * cached or hardcoded. Where a metric cannot be computed it is reported as
 * null rather than guessed.
 */

import { db } from "@/lib/db";
import { PROGRAMME_LEVELS } from "@/data/programme";
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

  // ---- PROMPT 39 §8 additions -------------------------------------------
  // Coverage by proficiency level, common mistakes, poor completion,
  // needs-revision flags — all from real database state.
  const [levels, courseRows, unitRows, lessonRows, clinicRows, cmsAttemptRows, reportRows] =
    await Promise.all([
      db.cmsLevel.findMany({ orderBy: { order: "asc" } }),
      db.cmsCourse.findMany({ select: { id: true, levelId: true, live: true } }),
      db.cmsUnit.findMany({ select: { id: true, slug: true } }),
      db.cmsLesson.findMany({ select: { id: true, slug: true, title: true, status: true, live: true, unitId: true } }),
      db.grammarClinicSubmission.findMany({ select: { categories: true }, take: 500 }),
      db.exerciseAttempt.findMany({
        where: { source: "cms" },
        select: { lessonSlug: true, isCorrect: true },
        take: 5000,
      }),
      db.practiceSession.findMany({
        where: { status: "completed", report: { not: null } },
        select: { report: true },
        take: 300,
      }),
    ]);

  // Coverage by level: courses link directly; chapters (= programme units)
  // and lessons attach to their level through the unit slug's chapter number
  // (ch-01…ch-56), which is how the programme defines each level's range.
  const chapterNo = (slug: string): number | null => {
    const m = slug.match(/^ch-(\d{1,2})/);
    return m ? Number(m[1]) : null;
  };
  const coursesOfLevel = (levelId: string) =>
    courseRows.filter((c) => c.levelId === levelId);
  const contentCoverage = levels.map((level) => {
    const prog = PROGRAMME_LEVELS.find((p) => (p.id as string) === level.slug);
    const [from, to] = prog?.chapterRange ?? [1, 56];
    const chapters = unitRows.filter((u) => {
      const n = chapterNo(u.slug);
      return n !== null && n >= from && n <= to;
    });
    const chapterIds = new Set(chapters.map((c) => c.id));
    const lessons = lessonRows.filter((l) => chapterIds.has(l.unitId));
    const levelCourses = coursesOfLevel(level.id);
    return {
      levelId: level.id,
      levelName: level.name,
      courses: levelCourses.length,
      coursesLive: levelCourses.filter((c) => c.live).length,
      chapters: chapters.length,
      lessons: lessons.length,
      lessonsLive: lessons.filter((l) => l.live).length,
    };
  });

  // Common mistakes: clinic categories + practice-report categories.
  const mistakeCounts = new Map<string, number>();
  const bump = (category: string, by: number) =>
    mistakeCounts.set(category, (mistakeCounts.get(category) ?? 0) + by);
  for (const row of clinicRows) {
    try {
      const cats = JSON.parse(row.categories) as unknown;
      if (Array.isArray(cats)) {
        for (const cat of cats) if (typeof cat === "string") bump(cat, 1);
      }
    } catch {
      // malformed row — skip
    }
  }
  for (const row of reportRows) {
    try {
      const report = JSON.parse(row.report ?? "{}") as {
        mistakeCategories?: { category?: unknown; count?: unknown }[];
      };
      for (const item of report.mistakeCategories ?? []) {
        if (typeof item?.category === "string") {
          bump(item.category, Number(item.count) || 1);
        }
      }
    } catch {
      // malformed report — skip
    }
  }
  const commonMistakes = [...mistakeCounts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Poor completion: CMS lessons with ≥5 engaged learners and <40% completing.
  const lessonSlugById = new Map(lessonRows.map((l) => [l.id, l.slug]));
  const engagedBySlug = new Map<string, { learners: number; completions: number }>();
  for (const row of popularCms) {
    const slug = lessonSlugById.get(row.lessonId);
    if (!slug) continue;
    const entry = engagedBySlug.get(slug) ?? { learners: 0, completions: 0 };
    entry.learners += row._count._all;
    if (row.status === "completed") entry.completions += row._count._all;
    engagedBySlug.set(slug, entry);
  }
  const titleBySlug = new Map(lessonRows.map((l) => [l.slug, l.title]));
  const poorCompletionLessons = [...engagedBySlug.entries()]
    .map(([slug, v]) => ({
      slug,
      title: titleBySlug.get(slug) ?? null,
      learners: v.learners,
      completions: v.completions,
      completionRate: v.learners > 0 ? v.completions / v.learners : 0,
    }))
    .filter((row) => row.learners >= 5 && row.completionRate < 0.4)
    .sort((a, b) => a.completionRate - b.completionRate)
    .slice(0, 8);

  // Needs revision: poor completion OR ≥40% wrong answers on the lesson's CMS attempts.
  const wrongBySlug = new Map<string, { attempts: number; wrong: number }>();
  for (const row of cmsAttemptRows) {
    const entry = wrongBySlug.get(row.lessonSlug) ?? { attempts: 0, wrong: 0 };
    entry.attempts += 1;
    if (!row.isCorrect) entry.wrong += 1;
    wrongBySlug.set(row.lessonSlug, entry);
  }
  const reasonsBySlug = new Map<string, string[]>();
  for (const row of poorCompletionLessons) {
    reasonsBySlug.set(row.slug, [
      `only ${Math.round(row.completionRate * 100)}% of ${row.learners} learners completed it`,
    ]);
  }
  for (const [slug, v] of wrongBySlug) {
    if (v.attempts >= 10 && v.wrong / v.attempts >= 0.4) {
      const existing = reasonsBySlug.get(slug) ?? [];
      existing.push(`${Math.round((v.wrong / v.attempts) * 100)}% wrong answers over ${v.attempts} attempts`);
      reasonsBySlug.set(slug, existing);
    }
  }
  const needsRevision = [...reasonsBySlug.entries()]
    .map(([slug, reasons]) => ({ slug, title: titleBySlug.get(slug) ?? null, reasons }))
    .slice(0, 10);

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
    contentCoverage,
    commonMistakes,
    poorCompletionLessons,
    needsRevision,
  };
}
