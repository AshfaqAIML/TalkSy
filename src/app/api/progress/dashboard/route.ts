import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { buildDashboard } from "@/lib/progress/dashboard";

/**
 * GET /api/progress/dashboard
 * The student dashboard payload (PROMPT 33): working level, streak, daily
 * target, notifications, continue-learning target, active learning path,
 * today's plan with verified done-states, skill profiles, recent activity,
 * explained recommendations and milestone progress. Computed from verified
 * activity only — nothing invented.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  try {
    const dashboard = await buildDashboard(user.id);
    return json(dashboard);
  } catch (error) {
    console.error("student dashboard failed", error);
    return jsonError("Could not load your dashboard. Please try again.", 500);
  }
}
