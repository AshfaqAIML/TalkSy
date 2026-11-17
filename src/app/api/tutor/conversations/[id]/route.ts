import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import {
  TutorError,
  deleteTutorConversation,
  getTutorConversation,
  setConversationContextFlag,
} from "@/lib/tutor/service";

/**
 * GET    /api/tutor/conversations/[id] — one conversation with its messages.
 * PATCH  /api/tutor/conversations/[id] — toggle context sharing
 *                                        ({ includeContext: boolean }).
 * DELETE /api/tutor/conversations/[id] — delete one conversation.
 *
 * Every operation is scoped to the owner: another learner's id is a 404,
 * never a leak.
 */
export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;

  try {
    return json(await getTutorConversation(user.id, id));
  } catch (error) {
    if (error instanceof TutorError) return jsonError(error.message, error.status);
    console.error("tutor get conversation failed", error);
    return jsonError("Could not load the conversation.", 500);
  }
}

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;

  const body = await readJson<{ includeContext?: boolean }>(req);
  if (!body || typeof body.includeContext !== "boolean") {
    return jsonError("Send includeContext (boolean).", 400);
  }

  try {
    const conversation = await setConversationContextFlag(user.id, id, body.includeContext);
    return json({ conversation });
  } catch (error) {
    if (error instanceof TutorError) return jsonError(error.message, error.status);
    console.error("tutor patch conversation failed", error);
    return jsonError("Could not update the conversation.", 500);
  }
}

export async function DELETE(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;

  try {
    await deleteTutorConversation(user.id, id);
    return json({ deleted: true });
  } catch (error) {
    if (error instanceof TutorError) return jsonError(error.message, error.status);
    console.error("tutor delete conversation failed", error);
    return jsonError("Could not delete the conversation.", 500);
  }
}
