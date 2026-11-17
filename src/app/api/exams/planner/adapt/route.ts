import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { adaptPlannerPlan } from "@/lib/exams/planner/service";

/**
 * POST /api/exams/planner/adapt — run the adaptive loop: analyse recent
 * attempts, then regenerate FUTURE days with new section weights and
 * difficulties. Completed days are never rewritten; with no meaningful
 * signal the honest no-change reason is returned instead of churn.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  try {
    const outcome = await adaptPlannerPlan(user.id);
    return json({
      plan: outcome.plan,
      changes: outcome.changes,
      noChangeReason: outcome.noChangeReason,
      recommendedLessons: outcome.recommendedLessons,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "NOT_ONBOARDED") {
      return jsonError("Complete the exam onboarding first.", 409);
    }
    if (error instanceof Error && error.message === "NO_PLAN") {
      return jsonError("No active plan to adapt — generate one first.", 409);
    }
    throw error;
  }
}
