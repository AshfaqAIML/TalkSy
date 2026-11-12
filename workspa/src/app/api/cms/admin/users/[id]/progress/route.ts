import { getAdminUserDetail } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/**
 * GET /api/cms/admin/users/[id]/progress — basic progress monitoring
 * (admin/teacher): aggregate counts + the 10 most recent graded events.
 */
export async function GET(req: Request, ctx: Ctx) {
  const { error } = await requireStaff(req, "teacher");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    return Response.json(await getAdminUserDetail(id));
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 404;
    return jsonError(e instanceof Error ? e.message : "User not found.", status);
  }
}
