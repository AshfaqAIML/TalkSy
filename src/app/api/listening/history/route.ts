import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { listeningHistoryPayload } from "@/lib/listening/service";

/**
 * GET /api/listening/history?limit=30 — the learner's listening history:
 * recent graded answers (prompt + correct answer revealed, grading over)
 * and a per-activity rollup. Requires login.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const url = new URL(req.url);
  const rawLimit = Number(url.searchParams.get("limit"));
  const limit = Number.isFinite(rawLimit) && rawLimit > 0 ? Math.min(100, rawLimit) : 30;

  try {
    const payload = await listeningHistoryPayload(user.id, limit);
    return json(payload);
  } catch (error) {
    console.error("listening history failed", error);
    return jsonError("Could not load your listening history. Please try again.", 500);
  }
}
