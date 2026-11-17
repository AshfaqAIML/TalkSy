import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { writingLibraryPayload } from "@/lib/writing/service";

/**
 * GET /api/writing/library — the Writing Studio hub: four tiers of
 * assignments with progress, plus writing-only stats (kept separate from
 * general proficiency counters).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  return json(await writingLibraryPayload(user.id));
}
