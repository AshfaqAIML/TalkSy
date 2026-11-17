import { questionAction } from "@/lib/cms/service";
import type { CmsAction } from "@/data/cms/types";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/cms/admin/questions/[id]/action
 * Body: { action: submit|approve|reject|publish|unpublish|retire, note? }
 */
export async function POST(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<{ action?: unknown; note?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");
  const action = typeof body.action === "string" ? body.action : "";
  const note = typeof body.note === "string" ? body.note : "";
  try {
    const question = await questionAction(user.id, user.role, id, action as CmsAction | "retire", note);
    return Response.json({ question });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Action failed.", status);
  }
}
