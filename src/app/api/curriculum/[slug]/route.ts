import { db } from "@/lib/db";
import { getLesson, getExercisesByIds, validateCurriculum } from "@/data/curriculum";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { sanitizeExercises } from "@/lib/engine/sanitize";
import { computeLessonStatus, parseSectionsCompleted } from "@/lib/engine/progress";
import { DIFFICULTY_POINTS } from "@/data/curriculum/types";

/**
 * GET /api/curriculum/[slug]
 * Full lesson content + sanitized exercises. When authenticated, also returns
 * the learner's progress (and initializes it — WITHOUT ever completing it),
 * notes, and best assessment result.
 */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const { slug } = await ctx.params;
  const lesson = getLesson(slug);
  if (!lesson) return jsonError("Lesson not found.", 404);

  const issues = validateCurriculum();
  if (issues.length > 0) {
    return json({ error: "curriculum-invalid", issues: issues.slice(0, 5) }, 500);
  }

  const user = await getSessionUser(req);

  interface ProgressDto {
    lessonSlug: string;
    status: "in-progress" | "completed";
    sectionsCompleted: string[];
    lastSectionId: string | null;
    bookmarked: boolean;
    completedAt: string | null;
  }
  interface BestAssessmentDto {
    id: string;
    score: number;
    passed: boolean;
    correct: number;
    total: number;
    completedAt: string | null;
  }

  let progress: ProgressDto | null = null;
  let notes: { sectionId: string; content: string; updatedAt: string }[] = [];
  let bestAssessment: BestAssessmentDto | null = null;

  if (user) {
    const row = await db.lessonProgress.findUnique({
      where: { userId_lessonSlug: { userId: user.id, lessonSlug: slug } },
    });
    if (row) {
      progress = {
        lessonSlug: slug,
        status: row.status as "in-progress" | "completed",
        sectionsCompleted: parseSectionsCompleted(row.sectionsCompleted),
        lastSectionId: row.lastSectionId,
        bookmarked: row.bookmarked,
        completedAt: row.completedAt?.toISOString() ?? null,
      };
    } else {
      // First open: create in-progress row. Completion is NEVER set here.
      const created = await db.lessonProgress.create({
        data: { userId: user.id, lessonSlug: slug },
      });
      progress = {
        lessonSlug: slug,
        status: "in-progress" as const,
        sectionsCompleted: [],
        lastSectionId: null,
        bookmarked: created.bookmarked,
        completedAt: null,
      };
    }
    const noteRows = await db.lessonNote.findMany({
      where: { userId: user.id, lessonSlug: slug },
    });
    notes = noteRows.map((n) => ({
      sectionId: n.sectionId,
      content: n.content,
      updatedAt: n.updatedAt.toISOString(),
    }));

    const best = await db.assessmentResult.findFirst({
      where: { userId: user.id, lessonSlug: slug, status: "completed" },
      orderBy: { score: "desc" },
    });
    if (best) {
      bestAssessment = {
        id: best.id,
        score: best.score,
        passed: best.passed,
        correct: best.correct,
        total: best.total,
        completedAt: best.completedAt?.toISOString() ?? null,
      };
    }
  }

  const allExerciseIds = new Set([
    ...lesson.sections.flatMap((s) =>
      s.blocks.flatMap((b) =>
        b.type === "practice" || b.type === "challenge" ? b.exerciseIds : [],
      ),
    ),
    ...(lesson.assessment?.bank ?? []),
  ]);
  const exercises = getExercisesByIds([...allExerciseIds]);
  const points = exercises.reduce(
    (sum, ex) => sum + DIFFICULTY_POINTS[ex.difficulty],
    0,
  );

  const completion = computeLessonStatus(
    lesson,
    progress,
    Boolean(bestAssessment?.passed),
  );

  return json({
    lesson,
    exercises: sanitizeExercises(exercises),
    exercisePoints: points,
    progress,
    notes,
    bestAssessment,
    completion,
    nextLessonSlug: null,
  });
}
