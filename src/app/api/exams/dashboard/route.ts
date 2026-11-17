import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { buildDashboard } from "@/lib/exams/dashboard";

/**
 * GET /api/exams/dashboard — the full examination dashboard aggregate
 * (available exams, selected exam, target, estimates, completion,
 * strengths, weaknesses, recommendations, daily plan, upcoming mocks,
 * recent results).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const dashboard = await buildDashboard(user.id);
  return json({ dashboard });
}
