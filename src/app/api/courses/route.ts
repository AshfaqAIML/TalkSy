import { db } from "@/lib/db";
import { ok, requireUser } from "@/lib/api";
import { getPlanAnchor } from "@/lib/curriculum-server";
import {
  attemptCountsOf,
  buildCourseSummaries,
} from "@/lib/course-catalogue-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/courses
 * The learner's course catalogue: every live unit-course with its filter
 * facets (level, skill, subject, duration) and real per-learner state.
 * Filtering and search run client-side over this payload (18 courses).
 */
export async function GET() {
  const auth = await requireUser();
  if (!auth.ok) return auth.response;

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

  const courses = buildCourseSummaries(completedSlugs, bestScores, attempts, planAnchor);
  return ok({ courses, total: courses.length });
}
