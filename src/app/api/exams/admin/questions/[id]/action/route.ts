import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { transitionAdminQuestion, AdminServiceError } from "@/lib/exams/admin/questions";
import { questionActionSchema } from "@/lib/exams/admin/types";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/exams/admin/questions/[id]/action — the review workflow.
 * Body: { action: submit|approve|reject|publish|unpublish|retire, note? }
 * Role gates: submit = editor+, approve/reject = teacher+, publish/
 * unpublish/retire = admin. Publishing requires the approved state —
 * human approval always precedes publication.
 */
export async function POST(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");
  const parsed = questionActionSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid action.", 422);
  }
  try {
    const question = await transitionAdminQuestion(
      user.id,
      user.role,
      id,
      parsed.data.action,
      parsed.data.note,
    );
    return json({ question });
  } catch (err) {
    if (err instanceof AdminServiceError) return jsonError(err.message, err.status);
    throw err;
  }
}
