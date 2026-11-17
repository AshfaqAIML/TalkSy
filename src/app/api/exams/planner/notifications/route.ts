import { z } from "zod";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import {
  collectNotificationsForUser,
  getNotificationsForUser,
  updateNotificationPrefs,
} from "@/lib/exams/planner/service";
import {
  NOTIFICATION_CATEGORIES,
  type NotificationPrefDto,
} from "@/lib/exams/planner/types";

/**
 * GET /api/exams/planner/notifications — preferences for the five coach
 * reminder categories (daily learning, upcoming mocks, revision, exam
 * date, incomplete assignments) plus the currently due, rate-limited feed.
 *
 * PUT /api/exams/planner/notifications — update preferences (enable/disable
 * per category + per-category config: time & weekdays for daily learning,
 * countdown lead days for the exam date). The feed in the response is
 * recomputed immediately so the UI reflects the new settings.
 *
 * POST /api/exams/planner/notifications — collect: consume the due
 * notifications (marks them fired, which is the server-side half of the
 * anti-spam rule: at most one per category per day) and return them.
 * The client calls this once per app load before toasting.
 */

const prefSchema = z.object({
  category: z.enum(NOTIFICATION_CATEGORIES),
  enabled: z.boolean(),
  config: z
    .object({
      time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/).optional(),
      days: z.array(z.number().int().min(0).max(6)).max(7).optional(),
      leadDays: z.array(z.number().int().min(1).max(30)).max(5).optional(),
    })
    .optional(),
});

const putSchema = z.object({ prefs: z.array(prefSchema).min(1).max(5) });

export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const state = await getNotificationsForUser(user.id);
  if (!state) return jsonError("Complete the exam onboarding first.", 409);
  return json({ notifications: state });
}

export async function PUT(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");
  const parsed = putSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(
      parsed.error.issues[0]?.message ?? "Invalid notification settings.",
      422,
    );
  }
  const state = await updateNotificationPrefs(
    user.id,
    parsed.data.prefs as NotificationPrefDto[],
  );
  if (!state) return jsonError("Complete the exam onboarding first.", 409);
  return json({ notifications: state });
}

export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const collected = await collectNotificationsForUser(user.id);
  if (collected === null) return jsonError("Complete the exam onboarding first.", 409);
  return json({ collected });
}
