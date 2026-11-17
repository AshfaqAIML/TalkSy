import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { setPlannerTaskStatus } from "@/lib/exams/planner/service";
import { plannerTaskStatusInputSchema } from "@/lib/exams/planner/types";

/**
 * POST /api/exams/planner/task — mark a plan task todo/done/skipped.
 * Completing a pathway-linked task also marks the pathway step, so the
 * plan and the pathway never disagree.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");
  const parsed = plannerTaskStatusInputSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid task update.", 422);
  }
  try {
    const task = await setPlannerTaskStatus(user.id, parsed.data.taskId, parsed.data.status);
    return json({ task });
  } catch (error) {
    if (error instanceof Error && error.message === "NOT_FOUND") {
      return jsonError("Task not found.", 404);
    }
    throw error;
  }
}
