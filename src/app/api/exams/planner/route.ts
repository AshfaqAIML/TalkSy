import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getPlannerState } from "@/lib/exams/planner/service";

/**
 * GET /api/exams/planner — the full planner state: initial-assessment
 * profile, baseline diagnostic, active plan (days + tasks + progress),
 * readiness report and whether new evidence suggests an adaptation.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const state = await getPlannerState(user.id);
  return json({ planner: state });
}
