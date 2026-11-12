import { getLearnerCourse } from "@/lib/cms/service";
import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ slug: string }> };

/** GET /api/cms/courses/[slug] — course outline with per-lesson lock state. */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { slug } = await ctx.params;
  try {
    return Response.json(await getLearnerCourse(user.id, slug));
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 404;
    return jsonError(e instanceof Error ? e.message : "Course not found.", status);
  }
}
