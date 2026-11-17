import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import {
  abandonSession,
  getSession,
  PracticeError,
} from "@/lib/practice/sessions";

/**
 * GET /api/practice/sessions/[id] — fetch one session. Active sessions return
 * the sanitized question list; completed sessions return the full report.
 */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  try {
    const session = await getSession(user.id, id);
    return json(session);
  } catch (error) {
    if (error instanceof PracticeError) return jsonError(error.message, error.status);
    console.error("[practice] fetch failed:", error);
    return jsonError("Could not load this session.", 500);
  }
}

/** DELETE /api/practice/sessions/[id] — abandon an active session. */
export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  try {
    await abandonSession(user.id, id);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof PracticeError) return jsonError(error.message, error.status);
    console.error("[practice] abandon failed:", error);
    return jsonError("Could not abandon this session.", 500);
  }
}
