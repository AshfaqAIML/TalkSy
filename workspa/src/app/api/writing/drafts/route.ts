import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getWritingAssignment } from "@/data/writing";
import { saveDraft, bumpDraft } from "@/lib/writing/service";

/**
 * POST /api/writing/drafts — autosave endpoint.
 * Body: { slug, content }. Upserts the single draft row; every save bumps
 * the draft counter on progress (created on first activity, never before).
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ slug?: string; content?: string }>(req);
  if (!body || typeof body.slug !== "string" || typeof body.content !== "string") {
    return jsonError("Invalid request body.", 400);
  }

  const assignment = getWritingAssignment(body.slug);
  if (!assignment) return jsonError("Writing assignment not found.", 404);

  const content = body.content.slice(0, 20_000);
  const draft = await saveDraft(user.id, assignment.id, content);

  // Only bump the draft counter on meaningful saves (not every keystroke
  // burst): a save with content is meaningful when it grows the text.
  if (content.trim().length > 0) {
    await bumpDraft(user.id, assignment.id, assignment.tier);
  }

  return json({ draft, savedAt: draft.updatedAt });
}
