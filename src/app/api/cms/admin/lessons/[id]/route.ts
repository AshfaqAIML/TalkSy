import { deleteLesson, getLessonDetail, updateLesson } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/** GET /api/cms/admin/lessons/[id] — working copy + revision history. */
export async function GET(req: Request, ctx: Ctx) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    return Response.json(await getLessonDetail(id));
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 404;
    return jsonError(e instanceof Error ? e.message : "Lesson not found.", status);
  }
}

/**
 * PATCH /api/cms/admin/lessons/[id] — save the working copy (metadata,
 * objectives, blocks, prerequisites). Appends a version snapshot.
 */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const lesson = await updateLesson(user.id, id, body);
    return Response.json({ lesson, detail: await getLessonDetail(id) });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not save lesson.", status);
  }
}

/** DELETE /api/cms/admin/lessons/[id] — blocked once learners have attempts. */
export async function DELETE(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    await deleteLesson(user.id, id);
    return Response.json({ ok: true });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not delete lesson.", status);
  }
}
