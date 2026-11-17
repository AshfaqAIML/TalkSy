import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { buildTutorRecommendations } from "@/lib/tutor/recommendations";

/**
 * GET /api/tutor/recommendations — the learner's personal "For you" items
 * (PROMPT 38 §6). Deterministic; every item explains why it was generated.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  return json(await buildTutorRecommendations(user.id));
}
