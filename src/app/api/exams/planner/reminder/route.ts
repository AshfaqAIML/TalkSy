import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { updatePlannerReminder } from "@/lib/exams/planner/service";
import { plannerReminderInputSchema } from "@/lib/exams/planner/types";

/**
 * POST /api/exams/planner/reminder — set the in-app study reminder
 * (time + weekdays) on the active plan. Honest scope: reminders surface
 * while EnglishPath is open in a tab; they are not push notifications.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");
  const parsed = plannerReminderInputSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(
      parsed.error.issues[0]?.message ?? "Invalid reminder settings.",
      422,
    );
  }
  try {
    const plan = await updatePlannerReminder(user.id, {
      reminderTime: parsed.data.reminderTime,
      reminderDays: parsed.data.reminderDays,
    });
    return json({ plan });
  } catch (error) {
    if (error instanceof Error && error.message === "NO_PLAN") {
      return jsonError("No active plan — generate one first.", 409);
    }
    throw error;
  }
}
