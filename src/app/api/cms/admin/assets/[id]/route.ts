import { unlink } from "node:fs/promises";
import { join } from "node:path";
import { readdir } from "node:fs/promises";
import { deleteAsset, updateAsset } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/** PATCH /api/cms/admin/assets/[id] — update metadata / link to a lesson. */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const asset = await updateAsset(user.id, id, body);
    return Response.json({ asset });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not update asset.", status);
  }
}

/** DELETE /api/cms/admin/assets/[id] — remove row + file bytes. */
export async function DELETE(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    await deleteAsset(user.id, id);
    const mediaDir = join(process.cwd(), "db", "media");
    for (const entry of await readdir(mediaDir).catch(() => [])) {
      if (entry.startsWith(`${id}.`)) {
        await unlink(join(mediaDir, entry)).catch(() => undefined);
      }
    }
    return Response.json({ ok: true });
  } catch (e) {
    return jsonError(e instanceof Error ? e.message : "Could not delete asset.", 422);
  }
}
