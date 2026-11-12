import { setUserRole, setUserStatus } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/** PATCH /api/cms/admin/users/[id] — change role or account status (admin). */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "admin");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<{ role?: unknown; status?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    if (typeof body.role === "string") {
      const result = await setUserRole(user.id, id, body.role);
      return Response.json({ user: result });
    }
    if (typeof body.status === "string") {
      const result = await setUserStatus(user.id, id, body.status);
      return Response.json({ user: result });
    }
    return jsonError("Provide a role or status to update.", 422);
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not update user.", status);
  }
}
