import { getSessionUser } from "@/lib/auth";
import { jsonError, readJson } from "@/lib/api-helpers";
import {
  TUTOR_LIMITS,
  TutorError,
  abortTutorSend,
  finalizeTutorSend,
  prepareTutorSend,
} from "@/lib/tutor/service";
import { getLlmProvider, LlmError } from "@/lib/llm";

/**
 * POST /api/tutor/conversations/[id]/messages — send a message and stream
 * the tutor's reply as Server-Sent Events:
 *
 *   event: meta   { conversationId, learnerMessageId, mode }
 *   event: delta  { text }                       (repeated)
 *   event: done   { tutorMessageId, requestsUsedToday, dailyLimit }
 *   event: error  { message }                    (learner message removed)
 *
 * Failure semantics: if the provider fails, the just-persisted learner
 * message is deleted again (abortTutorSend) and the client restores the
 * draft — a failed send never pollutes the history.
 */
export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;

  const body = await readJson<{ content?: string }>(req);
  if (!body || typeof body.content !== "string") {
    return jsonError("Send the message text.", 400);
  }

  let prepared: Awaited<ReturnType<typeof prepareTutorSend>>;
  try {
    prepared = await prepareTutorSend(user.id, id, body.content);
  } catch (error) {
    if (error instanceof TutorError) return jsonError(error.message, error.status);
    console.error("tutor prepare send failed", error);
    return jsonError("The tutor could not start this reply.", 500);
  }

  const encoder = new TextEncoder();
  const provider = getLlmProvider();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(
          encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`),
        );
      };

      send("meta", {
        conversationId: prepared.conversationId,
        learnerMessageId: prepared.learnerMessageId,
        mode: prepared.modeId,
      });

      let full = "";
      try {
        for await (const delta of provider.stream({
          system: prepared.system,
          messages: prepared.messages,
          timeoutMs: TUTOR_LIMITS.llmTimeoutMs,
        })) {
          if (full.length >= TUTOR_LIMITS.maxReplyChars * 2) break; // hard cap
          full += delta;
          send("delta", { text: delta });
        }

        const finalized = await finalizeTutorSend(
          user.id,
          prepared.conversationId,
          prepared.learnerMessageId,
          full,
        );
        send("done", {
          tutorMessageId: finalized.tutorMessageId,
          requestsUsedToday: finalized.usage.requests,
          dailyLimit: finalized.usage.limit,
        });
      } catch (error) {
        await abortTutorSend(user.id, prepared.learnerMessageId).catch(() => undefined);
        const message =
          error instanceof LlmError || error instanceof TutorError
            ? error.message
            : "The tutor could not answer just now. Please try again.";
        send("error", { message });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      "x-accel-buffering": "no",
    },
  });
}
