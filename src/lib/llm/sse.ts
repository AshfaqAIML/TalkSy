/**
 * Shared SSE stream decoding for chat-completions providers.
 *
 * Extracted from the original zai provider so every chat-completions
 * implementation (zai SDK, OpenAI-compatible REST, future additions) decodes
 * streaming replies with the SAME defensive rules: partial lines split across
 * chunks, junk lines, `[DONE]`, both `delta` and `message` payload shapes,
 * and an idle timeout that turns a silent stream into a `timeout` failure.
 */

import { LlmError } from "./provider";

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
    ])) as IteratorResult<T>;
    if (next.done) return;
    yield next.value;
  }
}
