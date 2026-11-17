import { restoreLessonVersion } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/cms/admin/lessons/[id]/restore — restore a historical version as
 * a NEW version (the history itself is never modified).
 */
export async function POST(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<{ version?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");
  const version = Number(body.version);
  if (!Number.isInteger(version) || version < 1) {
    return jsonError("A valid version number is required.", 422);
  }
  try {
    const lesson = await restoreLessonVersion(user.id, id, version);
    return Response.json({ lesson });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not restore version.", status);
  }
}
