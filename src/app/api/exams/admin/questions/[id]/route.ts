import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { updateAdminQuestion, AdminServiceError } from "@/lib/exams/admin/questions";
import { questionUpdateSchema } from "@/lib/exams/admin/types";

type Ctx = { params: Promise<{ id: string }> };

/**
 * PATCH /api/exams/admin/questions/[id] — edit a question's content
 * (payload, answer key, metadata). Editor+. Validation per type; editing
 * published content returns it to in-review (re-approval, never silently
 * live). Assembled practice sets refuse edits.
 */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");
  const parsed = questionUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid question data.", 422);
  }
  try {
    const question = await updateAdminQuestion(user.id, id, parsed.data);
    return json({ question });
  } catch (err) {
    if (err instanceof AdminServiceError) return jsonError(err.message, err.status);
    throw err;
  }
}
