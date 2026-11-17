import { getDashboardStats } from "@/lib/cms/analytics";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError } from "@/lib/api-helpers";

/** GET /api/cms/admin/stats — dashboard analytics (staff only). */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  try {
    return Response.json(await getDashboardStats());
  } catch {
    return jsonError("Could not load statistics.", 500);
  }
}
