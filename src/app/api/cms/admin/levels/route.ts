import { createLevel, listLevels } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

/** GET /api/cms/admin/levels — learning levels. */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  return Response.json({ levels: await listLevels() });
}

/** POST /api/cms/admin/levels — add a learning level. */
export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const level = await createLevel(user.id, body);
    return Response.json({ level });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not create level.", 422);
  }
}
