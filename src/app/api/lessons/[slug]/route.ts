import { db } from "@/lib/db";
import { ok, fail, requireUser } from "@/lib/api";
import { getLessonWithProgress, getPlanAnchor } from "@/lib/curriculum-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/lessons/[slug]
 * Full lesson content for the player, plus lock state. Locked lessons return
 * 403 so users cannot skip ahead by crafting requests.
 *
 * `attemptedExerciseIds` lets the player resume a partially completed lesson
 * on a device where no local step state exists (server-side fallback).
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const auth = await requireUser();
  if (!auth.ok) return auth.response;

  const planAnchor = await getPlanAnchor(auth.user.id);
  const data = await getLessonWithProgress(slug, auth.user.id, planAnchor);
  if (!data) {
    return fail("Lesson not found.", 404);
  }
  if (!data.unlocked && !data.completed) {
    return fail(
      "This lesson is still locked. Finish the previous lesson first.",
      403
    );
  }

  const attemptRows = await db.exerciseAttempt.findMany({
    where: { userId: auth.user.id, lessonSlug: slug },
    select: { exerciseId: true, isCorrect: true },
  });
  const attemptedExerciseIds = [...new Set(attemptRows.map((r) => r.exerciseId))];
  /** ids answered correctly at least once (retry-until-correct is allowed) */
  const correctExerciseIds = [
    ...new Set(attemptRows.filter((r) => r.isCorrect).map((r) => r.exerciseId)),
  ];

  return ok({ ...data, attemptedExerciseIds, correctExerciseIds });
}
