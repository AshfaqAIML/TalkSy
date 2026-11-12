import { createModule } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

/** POST /api/cms/admin/modules — create a module inside a course. */
export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const mod = await createModule(user.id, body);
    return Response.json({ module: mod });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not create module.", 422);
  }
}
