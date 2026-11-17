import { json, jsonError } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { relinkMocksToSpec } from "@/lib/exams/admin/workflow";
import { AdminServiceError } from "@/lib/exams/admin/questions";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/exams/admin/specs/[id]/relink-mocks — step 5 of the
 * format-change workflow: repoint the exam's curated mocks to this spec
 * version so future attempts run the new format. Historical attempts keep
 * their own pinned spec. Admin only, audit-logged.
 */
export async function POST(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "admin");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    const outcome = await relinkMocksToSpec(user.id, id);
    return json(outcome);
  } catch (err) {
    if (err instanceof AdminServiceError) return jsonError(err.message, err.status);
    throw err;
  }
}
