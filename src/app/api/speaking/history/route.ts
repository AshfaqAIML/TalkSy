import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { speakingHistoryPayload } from "@/lib/speaking/service";

/**
 * GET /api/speaking/history?limit=25 — the learner's speaking practice
 * history: recent graded takes (transcripts only where retention allows)
 * plus a per-activity rollup. Requires login.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const url = new URL(req.url);
  const rawLimit = Number(url.searchParams.get("limit"));
  const limit = Number.isFinite(rawLimit) && rawLimit > 0 ? Math.min(100, rawLimit) : 25;

  try {
    const payload = await speakingHistoryPayload(user.id, limit);
    return json(payload);
  } catch (error) {
    console.error("speaking history failed", error);
    return jsonError("Could not load your speaking history. Please try again.", 500);
  }
}
