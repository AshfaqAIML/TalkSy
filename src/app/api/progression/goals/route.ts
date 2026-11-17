import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { setGoals } from "@/lib/progress/service";

/**
 * POST /api/progression/goals
 * Set daily / weekly learning-point goals. Values are clamped server-side;
 * goals are motivational only and never affect measured performance.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ dailyPoints?: unknown; weeklyPoints?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");

  try {
    const goals = await setGoals(user.id, body);
    return json({ goals });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save goals.";
    return jsonError(message, 400);
  }
}
