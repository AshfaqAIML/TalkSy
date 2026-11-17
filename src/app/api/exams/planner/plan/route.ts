import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { archivePlannerPlan, generatePlannerPlan } from "@/lib/exams/planner/service";
import { plannerGenerateInputSchema } from "@/lib/exams/planner/types";

/**
 * POST /api/exams/planner/plan — generate a personalised plan.
 * Body: { durationDays (3–120), startDate?, reminderTime?, reminderDays?,
 *         strongestSection?, previousAttempts? }
 * Requires an onboarded exam profile (the initial assessment); the
 * planner-only extras are persisted with the profile here.
 *
 * DELETE /api/exams/planner/plan — archive the active plan (kept for
 * history; readiness snapshots remain queryable).
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");
  const parsed = plannerGenerateInputSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(
      parsed.error.issues[0]?.message ?? "Invalid planner input.",
      422,
    );
  }
  try {
    const plan = await generatePlannerPlan(user.id, parsed.data);
    return json({ plan });
  } catch (error) {
    if (error instanceof Error && error.message === "NOT_ONBOARDED") {
      return jsonError("Complete the exam onboarding first — the plan needs your goals.", 409);
    }
    throw error;
  }
}

export async function DELETE(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const archived = await archivePlannerPlan(user.id);
  return json({ archived });
}
