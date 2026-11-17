import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { speakingItemBySlug } from "@/data/exams/ielts/speaking-bank";
import { toSafeSpeakingItem, listSpeakingAttempts } from "@/lib/exams/speaking-bank/service";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/exams/speaking/bank/[slug] — the practice bundle (Part 6): the
 * safe item projection (the examiner's questions or the cue card; never the
 * model answers, guidance, planning notes or requirement keyword sets) plus
 * the learner's attempt history for the response-history panel.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const item = speakingItemBySlug(slug);
  if (!item) return jsonError("Item not found.", 404);

  const user = await getSessionUser(_req);
  const attempts = user ? await listSpeakingAttempts(user.id, slug) : [];

  return json({
    item: toSafeSpeakingItem(item),
    attempts,
  });
}
