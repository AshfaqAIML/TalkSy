import { db } from "@/lib/db";
import { fail, ok, requireUser } from "@/lib/api";
import { getPlanAnchor } from "@/lib/curriculum-server";
import {
  attemptCountsOf,
  buildCourseDetail,
  courseExists,
} from "@/lib/course-catalogue-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/courses/[slug]
 * Full course-overview payload for one unit-course: description, learning
 * objectives, prerequisite, modules (lessons), skills developed, assessment
 * information and the learner's real progress.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const auth = await requireUser();
  if (!auth.ok) return auth.response;

  if (!courseExists(slug)) {
    return fail("Course not found.", 404);
  }

  const [completions, attemptRows, planAnchor] = await Promise.all([
    db.lessonCompletion.findMany({ where: { userId: auth.user.id } }),
    db.exerciseAttempt.findMany({
      where: { userId: auth.user.id },
      select: { lessonSlug: true },
    }),
    getPlanAnchor(auth.user.id),
  ]);

  const completedSlugs = new Set(completions.map((c) => c.lessonSlug));
  const bestScores = new Map(completions.map((c) => [c.lessonSlug, c.bestScore]));
  const attempts = attemptCountsOf(attemptRows);

  const course = buildCourseDetail(slug, completedSlugs, bestScores, attempts, planAnchor);
  if (!course) {
    return fail("Course not found.", 404);
  }
  return ok({ course });
}
