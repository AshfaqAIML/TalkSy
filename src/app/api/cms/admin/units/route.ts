import { createUnit } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

/** POST /api/cms/admin/units — create a unit inside a module. */
export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const unit = await createUnit(user.id, body);
    return Response.json({ unit });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not create unit.", 422);
  }
}
