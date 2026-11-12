import { deleteUnit, updateUnit } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/** PATCH /api/cms/admin/units/[id] */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const unit = await updateUnit(user.id, id, body);
    return Response.json({ unit });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not update unit.", 422);
  }
}

/** DELETE /api/cms/admin/units/[id] */
export async function DELETE(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    await deleteUnit(user.id, id);
    return Response.json({ ok: true });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not delete unit.", 422);
  }
}
