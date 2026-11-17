import { json, jsonError } from "@/lib/api-helpers";
import { getSafeSpeakingExerciseBySlug } from "@/lib/exams/toefl-bank/speaking";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/toefl/speaking/bank/[slug] — the safe projection of one
 * speaking item. Repeat-item reference transcripts (except difficulty-1
 * learning items) and interview sample responses are stripped server-side
 * and revealed only by the submit endpoint.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const exercise = await getSafeSpeakingExerciseBySlug(slug);
  if (!exercise) return jsonError("Item not found.", 404);
  return json({ exercise });
}
