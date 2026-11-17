import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { speakingActivityBundle, nextSpeakingActivity } from "@/lib/speaking/service";
import { resolveLabLinks } from "@/data/labs/curriculum-links";

/**
 * GET /api/speaking/activities/[slug] — the activity player bundle.
 * Model answers and grading keywords are stripped server-side; the model
 * answer travels with each attempt's feedback instead.
 */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { slug } = await ctx.params;
  const bundle = speakingActivityBundle(slug);
  if (!bundle) return jsonError("Speaking activity not found.", 404);
  const [links, next] = await Promise.all([
    Promise.resolve(resolveLabLinks("speaking", slug)),
    nextSpeakingActivity(user.id, bundle.id),
  ]);
  return json({ activity: bundle, links, next });
}
