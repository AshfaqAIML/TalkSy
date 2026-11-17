import { jsonError } from "@/lib/api-helpers";
import { getSafeExerciseBySlug } from "@/lib/exams/listening-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/listening/bank/[slug] — one audio-bank exercise for the
 * player: segments (the recording, spoken client-side), speakers with
 * accent metadata, and questions WITHOUT answer keys, keywords or trap
 * lures (those live server-side until submission). Public.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const exercise = await getSafeExerciseBySlug(slug);
  if (!exercise) return jsonError("Exercise not found.", 404);
  return Response.json({ exercise });
}
