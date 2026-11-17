import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { readingCategories, readingLevels } from "@/data/reading";
import { readingLibraryPayload } from "@/lib/reading/service";

/**
 * GET /api/reading/library — the Reading Room shelf: levels, categories and
 * every text with the learner's progress. Requires login.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const payload = await readingLibraryPayload(user.id);

  return json({
    levels: readingLevels,
    categories: readingCategories,
    ...payload,
  });
}
