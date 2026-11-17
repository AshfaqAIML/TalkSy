import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { markAchievementsSeen } from "@/lib/progress/service";

/**
 * POST /api/progression/achievements/seen
 * Mark unlocked achievements as seen (dismisses the "new badge" highlights).
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ ids?: unknown }>(req);
  const ids = Array.isArray(body?.ids)
    ? body.ids.filter((id): id is string => typeof id === "string")
    : [];
  if (ids.length === 0) return jsonError("ids must be a non-empty array.");

  await markAchievementsSeen(user.id, ids);
  return json({ ok: true });
}
