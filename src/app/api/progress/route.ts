import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { computeLessonStatus, parseSectionsCompleted } from "@/lib/engine/progress";
import { getLesson, getCurriculumPath } from "@/data/curriculum";

/**
 * GET /api/progress
 * All lesson progress rows for the current user, enriched with computed
 * completion and best assessment results.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const rows = await db.lessonProgress.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
  });
  const assessments = await db.assessmentResult.findMany({
    where: { userId: user.id, status: "completed" },
    orderBy: { createdAt: "desc" },
  });
  const path = getCurriculumPath();

  const items = rows.map((row) => {
    const lesson = getLesson(row.lessonSlug);
    const best = assessments
      .filter((a) => a.lessonSlug === row.lessonSlug)
      .sort((a, b) => b.score - a.score)[0];
    const progress = {
      sectionsCompleted: parseSectionsCompleted(row.sectionsCompleted),
    };
    const completion = lesson
      ? computeLessonStatus(lesson, progress, Boolean(best?.passed))
      : { completed: false, sectionsDone: 0, sectionsTotal: 0 };
    const idx = path.indexOf(row.lessonSlug);
    return {
      lessonSlug: row.lessonSlug,
      lessonTitle: lesson?.title ?? row.lessonSlug,
      levelId: lesson?.levelId ?? null,
      status: row.status as "in-progress" | "completed",
      bookmarked: row.bookmarked,
      lastSectionId: row.lastSectionId,
      updatedAt: row.updatedAt.toISOString(),
      completedAt: row.completedAt?.toISOString() ?? null,
      completion,
      bestAssessment: best
        ? {
            score: best.score,
            passed: best.passed,
            correct: best.correct,
            total: best.total,
            completedAt: best.completedAt?.toISOString() ?? null,
          }
        : null,
      nextLessonSlug: idx >= 0 && idx < path.length - 1 ? path[idx + 1] : null,
    };
  });

  return json({ items });
}
