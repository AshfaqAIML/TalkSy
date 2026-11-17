import { lessonReviewAction, type LessonReviewAction as ReviewAction } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ id: string }> };

const ACTIONS: ReviewAction[] = ["ai-review", "human-review", "approve", "revoke"];

/**
 * POST /api/cms/admin/lessons/[id]/review
 * Body: { action: ai-review|human-review|approve|revoke, note? }
 *
 * The educational content-review pipeline (PROMPT 35). Role gates:
 *   ai-review     editor+  (machine validation passed)
 *   human-review  teacher+ (a human confirms teaching quality)
 *   approve       admin    (final sign-off)
 *   revoke        admin    (withdraw a human sign-off)
 */
export async function POST(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<{ action?: unknown; note?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");
  const action = typeof body.action === "string" ? body.action : "";
  if (!ACTIONS.includes(action as ReviewAction)) {
    return jsonError("Unknown review action.");
  }
  const note = typeof body.note === "string" ? body.note : "";
  try {
    const lesson = await lessonReviewAction(
      user.id,
      user.role,
      id,
      action as ReviewAction,
      note,
    );
    return Response.json({ lesson });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Action failed.", status);
  }
}
