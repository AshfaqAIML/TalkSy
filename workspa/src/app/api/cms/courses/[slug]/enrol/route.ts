import { enrol } from "@/lib/cms/service";
import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ slug: string }> };

/** POST /api/cms/courses/[slug]/enrol — enrol the current learner. */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to enrol.", 401);
  const { slug } = await ctx.params;
  try {
    await enrol(user.id, slug);
    return Response.json({ ok: true });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not enrol.", status);
  }
}
