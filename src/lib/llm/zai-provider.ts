/**
 * z-ai SDK implementation of the LlmProvider contract.
 *
 * Conventions honoured here (and shared through ./sse.ts):
 *   - the SDK expects the system prompt as the FIRST 'assistant' message;
 *   - `thinking` is disabled for teaching replies;
 *   - streaming decodes defensively through the shared SSE utilities
 *     (re-exported for the original unit tests).
 */

import ZAI from "z-ai-web-dev-sdk";
import { LlmError, type LlmProvider, type LlmRequest } from "./provider";
import { parseSseDeltas, withIdleTimeout } from "./sse";

export { parseSseDeltas, withIdleTimeout } from "./sse";

const COMPLETE_TIMEOUT_MS = 45_000;
/** Max silence between stream chunks before we give up. */
const STREAM_IDLE_TIMEOUT_MS = 30_000;

type SdkMessage = { role: "assistant" | "user"; content: string };

function toSdkMessages(req: LlmRequest): SdkMessage[] {
  return [
    { role: "assistant", content: req.system },
    ...req.messages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
        content: m.content,
      })),
  ];
}

interface CompletionShape {
  choices?: Array<{ message?: { content?: unknown } }>;
}

async function createClient() {
  try {
    return await ZAI.create();
  } catch {
    throw new LlmError(
      "unavailable",
      "The tutor service is not reachable right now. Please try again in a moment.",
    );
  }
}

function networkError(): LlmError {
  return new LlmError("network", "The tutor could not be reached. Please try again.");
}

export const zaiProvider: LlmProvider = {
  name: "zai",

  async complete(req: LlmRequest): Promise<string> {
    const timeout = req.timeoutMs ?? COMPLETE_TIMEOUT_MS;
    const zai = await createClient();
    let completion: unknown;
    try {
      completion = await Promise.race([
        zai.chat.completions.create({
          messages: toSdkMessages(req),
          thinking: { type: "disabled" },
        }),
        new Promise<never>((_, reject) =>
          setTimeout(
            () =>
              reject(
                new LlmError("timeout", "The tutor is taking too long. Please try again."),
              ),
            timeout,
          ),
        ),
      ]);
    } catch (error) {
      throw error instanceof LlmError ? error : networkError();
    }
    const text = (completion as CompletionShape | null)?.choices?.[0]?.message?.content;
    if (typeof text !== "string" || text.trim().length === 0) {
      throw new LlmError("empty", "The tutor returned an empty answer. Please try again.");
    }
    return text.trim();
  },

  async *stream(req: LlmRequest): AsyncGenerator<string> {
    const zai = await createClient();
    let iterable: AsyncIterable<unknown>;
    try {
      iterable = (await Promise.race([
        zai.chat.completions.create({
          messages: toSdkMessages(req),
          thinking: { type: "disabled" },
          stream: true,
        }),
        new Promise<never>((_, reject) =>
          setTimeout(
            () =>
              reject(
                new LlmError(
                  "timeout",
                  "The tutor is taking too long to start. Please try again.",
                ),
              ),
            req.timeoutMs ?? COMPLETE_TIMEOUT_MS,
          ),
        ),
      ])) as AsyncIterable<unknown>;
    } catch (error) {
      throw error instanceof LlmError ? error : networkError();
    }

    // Defensive: if the provider ignored `stream` and returned a completion
    // object, yield it as one delta instead of crashing.
    if (typeof (iterable as AsyncIterable<unknown>)[Symbol.asyncIterator] !== "function") {
      const text = (iterable as CompletionShape | null)?.choices?.[0]?.message?.content;
      if (typeof text === "string" && text.trim().length > 0) {
        yield text.trim();
        return;
      }
      throw new LlmError("empty", "The tutor returned an empty answer. Please try again.");
    }

    const chunks = iterable as AsyncIterable<Uint8Array | string>;
    const guarded = withIdleTimeout(chunks, STREAM_IDLE_TIMEOUT_MS);
    yield* parseSseDeltas(guarded);
  },
};
