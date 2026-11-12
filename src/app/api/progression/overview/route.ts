import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getProgressOverview } from "@/lib/progress/service";

/**
 * GET /api/progression/overview
 * The full analytics dashboard payload: skill profiles, series,
 * recommendations, revision plan, achievements, certificates, goals, streak.
 * Computed from verified activity only.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  try {
    const overview = await getProgressOverview(user.id);
    return json(overview);
  } catch (error) {
    console.error("progression overview failed", error);
    return jsonError("Could not load your progress. Please try again.", 500);
  }
}
