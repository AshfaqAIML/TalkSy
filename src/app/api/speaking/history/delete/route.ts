import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { deleteSpeakingHistory } from "@/lib/speaking/service";

/**
 * POST /api/speaking/history/delete — delete every speaking attempt,
 * conversation session and pronunciation attempt for the learner.
 * (There is no audio to delete: audio is never stored.)
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  await deleteSpeakingHistory(user.id);
  return json({ deleted: true });
}
