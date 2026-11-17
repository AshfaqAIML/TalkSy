import { getLearnerCourse } from "@/lib/cms/service";
import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ slug: string }> };

/** GET /api/cms/courses/[slug] — course outline with per-lesson lock state.
 *  Anonymous visitors get the public outline (no personal progress); the
 *  client only needs a session for enrolment and lesson playback. */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  const { slug } = await ctx.params;
  try {
    return Response.json(await getLearnerCourse(user?.id ?? null, slug));
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 404;
    return jsonError(e instanceof Error ? e.message : "Course not found.", status);
  }
}
