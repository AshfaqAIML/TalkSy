import { createCourse, getCourseTree } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

/** GET /api/cms/admin/courses — the full curriculum tree. */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  return Response.json(await getCourseTree());
}

/** POST /api/cms/admin/courses — create a course. */
export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const course = await createCourse(user.id, body);
    return Response.json({ course });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not create course.", 422);
  }
}
