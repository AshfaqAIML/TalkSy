import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getSafeReadingExerciseBySlug } from "@/lib/exams/reading-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/reading/bank/[slug] — one passage with its questions, safe
 * for the client: the passage travels (it IS the task), the answer key,
 * evidence quotes, explanations, lures and the glossary do not.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const exercise = await getSafeReadingExerciseBySlug(slug);
  if (!exercise) return jsonError("Exercise not found.", 404);
  // The bank is public to browse; anonymous visitors can read the passage
  // but attempts require an account (enforced at submit).
  void (await getSessionUser(_req));
  return json({ exercise });
}
