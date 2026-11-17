import { json, jsonError } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { specImpactReport } from "@/lib/exams/admin/workflow";
import { AdminServiceError } from "@/lib/exams/admin/questions";

type Ctx = { params: Promise<{ id: string }> };

/**
 * GET /api/exams/admin/specs/[id]/impact — version-change impact for a
 * (usually draft) specification: task types that disappear and the
 * questions using them, published mocks still pinned to older versions,
 * and the historical attempts that keep their pinned spec (informational).
 * Step 4 of the format-change workflow. Staff only.
 */
export async function GET(req: Request, ctx: Ctx) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    const impact = await specImpactReport(id);
    return json({ impact });
  } catch (err) {
    if (err instanceof AdminServiceError) return jsonError(err.message, err.status);
    throw err;
  }
}
