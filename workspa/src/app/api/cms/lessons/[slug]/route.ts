import { getLearnerLesson } from "@/lib/cms/service";
import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * GET /api/cms/lessons/[slug] — the published lesson (answers never sent).
 * Returns 423 with the missing list when prerequisites are not met.
 */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { slug } = await ctx.params;
  try {
    const lesson = await getLearnerLesson(user.id, slug);
    if (!lesson.prerequisitesMet) {
      return Response.json(
        {
          error: "Finish the prerequisite lessons first.",
          missingPrerequisites: lesson.missingPrerequisites,
        },
        { status: 423 },
      );
    }
    return Response.json(lesson);
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 404;
    return jsonError(e instanceof Error ? e.message : "Lesson not found.", status);
  }
}
