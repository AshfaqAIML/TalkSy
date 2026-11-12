import { submitAssignment } from "@/lib/cms/service";
import { getSessionUser } from "@/lib/auth";
import { jsonError, readJson } from "@/lib/api-helpers";

type Ctx = { params: Promise<{ slug: string }> };

/**
 * POST /api/cms/lessons/[slug]/assignment — submit/update an assignment
 * block submission. Word minimums are enforced server-side.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { slug } = await ctx.params;
  const body = await readJson<{ blockId?: unknown; text?: unknown }>(req);
  if (!body) return jsonError("Invalid request body.");
  const blockId = typeof body.blockId === "string" ? body.blockId : "";
  const text = typeof body.text === "string" ? body.text : "";
  if (!blockId) return jsonError("blockId is required.", 422);
  try {
    const submission = await submitAssignment(user.id, slug, blockId, text);
    return Response.json({
      submission: { id: submission.id, wordCount: submission.wordCount, createdAt: submission.createdAt },
    });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not submit assignment.", status);
  }
}
