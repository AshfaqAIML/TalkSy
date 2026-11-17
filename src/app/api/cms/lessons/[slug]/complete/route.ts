import { completeLesson } from "@/lib/cms/service";
import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * POST /api/cms/lessons/[slug]/complete — server-verified completion.
 * Every exercise must have an attempt and every assignment a submission.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { slug } = await ctx.params;
  try {
    const progress = await completeLesson(user.id, slug);
    return Response.json({
      progress: { status: progress.status, completedAt: progress.completedAt },
    });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not complete lesson.", status);
  }
}
