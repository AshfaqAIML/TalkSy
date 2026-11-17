import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { speakingItemBySlug } from "@/data/exams/ielts/speaking-bank";
import { reopenSpeakingAttempt } from "@/lib/exams/speaking-bank/service";

type Ctx = { params: Promise<{ attemptId: string }> };

/**
 * GET /api/exams/speaking/attempts/[attemptId] — reopen a past attempt
 * (PROMPT 47, Part 6 response history): the stored evaluation (criteria,
 * feedback, evidence, extras) plus the item's safe projection, scoped to
 * the owning user. Another user's attempt id simply 404s.
 */
export async function GET(_req: Request, ctx: Ctx) {
  const user = await getSessionUser(_req);
  if (!user) return jsonError("Log in to reopen your attempts.", 401);
  const { attemptId } = await ctx.params;

  const reopened = await reopenSpeakingAttempt(user.id, attemptId);
  if (!reopened) return jsonError("Attempt not found.", 404);

  const item = speakingItemBySlug(reopened.attempt.itemSlug);
  return json({
    attempt: reopened.attempt,
    evaluation: reopened.evaluation,
    item: item ? { slug: item.slug, title: item.title, kind: item.kind, part: reopened.attempt.part } : null,
  });
}
