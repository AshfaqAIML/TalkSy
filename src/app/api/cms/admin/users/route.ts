import { listAdminUsers } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError } from "@/lib/api-helpers";

/**
 * GET /api/cms/admin/users?search= — user management (admin only).
 * Privacy: only aggregates are returned; password hashes never leave the DB.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "admin");
  if (error) return error;
  const url = new URL(req.url);
  try {
    const users = await listAdminUsers(url.searchParams.get("search") ?? undefined);
    return Response.json({ users });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not load users.", 500);
  }
}
