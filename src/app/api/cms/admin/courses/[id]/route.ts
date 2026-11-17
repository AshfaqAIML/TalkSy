import { deleteCourse, updateCourse } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/** PATCH /api/cms/admin/courses/[id] — update course metadata. */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const course = await updateCourse(user.id, id, body);
    return Response.json({ course });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not update course.", 422);
  }
}

/** DELETE /api/cms/admin/courses/[id] */
export async function DELETE(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "admin");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    await deleteCourse(user.id, id);
    return Response.json({ ok: true });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not delete course.", 422);
  }
}
