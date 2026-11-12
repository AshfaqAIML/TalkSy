import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { listeningStages } from "@/data/listening";
import { listeningLibraryPayload } from "@/lib/listening/service";

/**
 * GET /api/listening/library — the Listening Lab shelf: the nine progression
 * stages and every activity with the learner's progress. Requires login.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const payload = await listeningLibraryPayload(user.id);

  return json({
    stages: listeningStages,
    ...payload,
  });
}
