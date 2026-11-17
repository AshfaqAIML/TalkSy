import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { buildOverview } from "@/lib/practice/overview";

/**
 * GET /api/practice/overview — the practice-zone hub payload: modes, chapter
 * test launchers with unlock/demonstrated state, course milestone
 * assessments, skill mastery estimates and the weak-area summary.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  try {
    const overview = await buildOverview(user.id);
    return json(overview);
  } catch (error) {
    console.error("[practice] overview failed:", error);
    return jsonError("Could not load the practice overview.", 500);
  }
}
