/**
 * z-ai SDK implementation of the LlmProvider contract.
 *
 * Two conventions established app-wide (see speaking/conversation.ts and
 * writing/ai.ts) are honoured here:
 *   - the SDK expects the system prompt as the FIRST 'assistant' message;
 *   - `thinking` is disabled for teaching replies.
 *
 * Streaming: the SDK returns an async iterable of SSE-encoded chunks
 * ("data: {…}" lines as bytes). `parseSseDeltas` decodes them defensively —
 * partial lines across chunk boundaries, junk lines, both delta and message
 * payload shapes — and is exported pure for unit tests.
 */

import ZAI from "z-ai-web-dev-sdk";
import { LlmError, type LlmProvider, type LlmRequest } from "./provider";

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

// ---------------------------------------------------------------------------
// SSE decoding (pure, unit-tested)
// ---------------------------------------------------------------------------

interface SseChunk {
  choices?: Array<{
    delta?: { content?: unknown };
    message?: { content?: unknown };
  }>;
}

function extractDelta(parsed: unknown): string {
  if (typeof parsed !== "object" || parsed === null) return "";
  const chunk = parsed as SseChunk;
  const choice = Array.isArray(chunk.choices) ? chunk.choices[0] : undefined;
  if (!choice || typeof choice !== "object") return "";
  const deltaContent = choice.delta?.content;
  if (typeof deltaContent === "string") return deltaContent;
  const messageContent = choice.message?.content;
  if (typeof messageContent === "string") return messageContent;
  return "";
}

/**
 * Decode an SSE byte/string stream into text deltas. Handles partial lines
 * split across chunks, ignores junk lines and [DONE], and throws "empty" if
 * a finished stream produced no text at all.
 */
export async function* parseSseDeltas(
  chunks: AsyncIterable<Uint8Array | string>,
): AsyncGenerator<string> {
  const decoder = new TextDecoder();
  let buffer = "";
  let emitted = 0;

  for await (const chunk of chunks) {
    buffer +=
      typeof chunk === "string" ? chunk : decoder.decode(chunk, { stream: true });
    let newlineAt = buffer.indexOf("\n");
    while (newlineAt !== -1) {
      const line = buffer.slice(0, newlineAt).replace(/\r$/, "");
      buffer = buffer.slice(newlineAt + 1);
      newlineAt = buffer.indexOf("\n");
      if (!line.startsWith("data:")) continue;
      const payload = line.slice(5).trim();
      if (!payload || payload === "[DONE]") continue;
      let parsed: unknown;
      try {
        parsed = JSON.parse(payload);
      } catch {
        continue; // malformed line — never kill the whole stream for it
      }
      const delta = extractDelta(parsed);
      if (delta) {
        emitted += delta.length;
        yield delta;
      }
    }
  }

  if (emitted === 0) {
    throw new LlmError("empty", "The tutor returned an empty answer. Please try again.");
  }
}

/** Wrap an async iterable so a silent chunk gap raises "timeout". */
export async function* withIdleTimeout<T>(
  chunks: AsyncIterable<T>,
  idleMs: number,
): AsyncGenerator<T> {
  const iterator = chunks[Symbol.asyncIterator]();
  for (;;) {
    const next = (await Promise.race([
      iterator.next(),
      new Promise<never>((_, reject) =>
        setTimeout(
          () =>
            reject(
              new LlmError(
                "timeout",
                "The tutor stopped responding. Please try again.",
              ),
            ),
          idleMs,
        ),
      ),
    ]) as IteratorResult<T>);
    if (next.done) return;
    yield next.value;
  }
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

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
      throw error instanceof LlmError
        ? error
        : new LlmError("network", "The tutor could not be reached. Please try again.");
    }
    const text = (completion as SseChunk | null)?.choices?.[0]?.message?.content;
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
          stream: true,
          thinking: { type: "disabled" },
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
      throw error instanceof LlmError
        ? error
        : new LlmError("network", "The tutor could not be reached. Please try again.");
    }

    // Defensive: if the provider ignored `stream` and returned a completion
    // object, yield it as one delta instead of crashing.
    if (
      typeof (iterable as AsyncIterable<unknown>)[Symbol.asyncIterator] !== "function"
    ) {
      const text = (iterable as SseChunk | null)?.choices?.[0]?.message?.content;
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
