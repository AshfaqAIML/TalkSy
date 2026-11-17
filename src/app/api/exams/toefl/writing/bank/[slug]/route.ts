import { json, jsonError } from "@/lib/api-helpers";
import { getSafeWritingExerciseBySlug } from "@/lib/exams/toefl-bank/writing";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/toefl/writing/bank/[slug] — the safe projection of one
 * writing exercise. Answer keys, model responses and the whole teaching kit
 * are stripped server-side and revealed only by the submit endpoint.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const exercise = await getSafeWritingExerciseBySlug(slug);
  if (!exercise) return jsonError("Exercise not found.", 404);
  return json({ exercise });
}
