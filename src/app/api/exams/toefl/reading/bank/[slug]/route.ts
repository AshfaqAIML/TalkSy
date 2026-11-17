import { jsonError } from "@/lib/api-helpers";
import { getSafeReadingExerciseBySlug } from "@/lib/exams/toefl-bank/reading";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/toefl/reading/bank/[slug] — one reading exercise for the
 * player: passage and questions WITHOUT answer keys, explanations,
 * evidence, traps or grammar notes (server-side until submission). Public.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const exercise = await getSafeReadingExerciseBySlug(slug);
  if (!exercise) return jsonError("Exercise not found.", 404);
  return Response.json({ exercise });
}
