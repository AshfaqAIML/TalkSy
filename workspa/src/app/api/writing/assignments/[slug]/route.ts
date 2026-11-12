import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { writingAssignmentBundle } from "@/lib/writing/service";

/**
 * GET /api/writing/assignments/[slug] — the editor bundle: the assignment
 * with model texts and grading keywords stripped, the autosaved draft, and
 * the full submission history (versions with scores for comparison).
 */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { slug } = await ctx.params;
  const bundle = await writingAssignmentBundle(user.id, slug);
  if (!bundle) return jsonError("Writing assignment not found.", 404);
  return json(bundle);
}
