import { deleteQuestion, updateQuestion } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/**
 * PATCH /api/cms/admin/questions/[id] — edit a question. Creates a new
 * version; historical attempts keep pointing at the version they were graded
 * against.
 */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const question = await updateQuestion(user.id, id, body);
    return Response.json({ question });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not update question.", status);
  }
}

/** DELETE /api/cms/admin/questions/[id] — blocked once learners answered it. */
export async function DELETE(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    await deleteQuestion(user.id, id);
    return Response.json({ ok: true });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not delete question.", status);
  }
}
