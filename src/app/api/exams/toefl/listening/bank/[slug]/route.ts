import { jsonError } from "@/lib/api-helpers";
import { getSafeListeningExerciseBySlug } from "@/lib/exams/toefl-bank/listening";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/toefl/listening/bank/[slug] — one listening exercise for the
 * player: the recording (segments with speaker roster, spoken client-side)
 * and questions WITHOUT answer keys, keywords, traps or explanations. The
 * transcript is null unless the exercise is learningMode — it is returned
 * by the grading endpoint after submission. Public.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const exercise = await getSafeListeningExerciseBySlug(slug);
  if (!exercise) return jsonError("Exercise not found.", 404);
  return Response.json({ exercise });
}
