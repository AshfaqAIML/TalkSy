import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import {
  TutorError,
  createTutorConversation,
  deleteAllTutorConversations,
  listTutorConversations,
} from "@/lib/tutor/service";

/**
 * GET    /api/tutor/conversations — the learner's conversation history.
 * POST   /api/tutor/conversations — start a new conversation in a mode.
 * DELETE /api/tutor/conversations — delete ALL of the learner's tutor
 *                                  conversations (privacy control).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  return json({ conversations: await listTutorConversations(user.id) });
}

export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ mode?: string; lessonRef?: string; includeContext?: boolean }>(req);
  if (!body || typeof body.mode !== "string") {
    return jsonError("Choose a tutor mode to start a conversation.", 400);
  }

  try {
    const created = await createTutorConversation(user.id, {
      mode: body.mode,
      lessonRef: body.lessonRef ?? null,
      includeContext: body.includeContext,
    });
    return json(created, 201);
  } catch (error) {
    if (error instanceof TutorError) return jsonError(error.message, error.status);
    console.error("tutor create conversation failed", error);
    return jsonError("Could not start the conversation.", 500);
  }
}

export async function DELETE(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const deleted = await deleteAllTutorConversations(user.id);
  return json({ deleted });
}
