/**
 * OpenAI-compatible REST implementation of the LlmProvider contract.
 *
 * Works with any endpoint that speaks the OpenAI chat-completions wire format
 * (OpenAI itself, Azure-style gateways, OpenRouter, vLLM, Ollama's compat
 * layer, …). Configured ONLY through server-side environment variables —
 * the key is read at call time and never leaves this module:
 *
 *   AI_OPENAI_BASE_URL  (default https://api.openai.com/v1)
 *   AI_OPENAI_API_KEY    (required for this provider)
 *   AI_OPENAI_MODEL      (default gpt-4o-mini)
 *   AI_OPENAI_NAME       (label for usage logs, default "openai")
 *
 * `fetchImpl` is injectable so unit tests exercise the request/response
 * mapping deterministically without network access.
 */

import { LlmError, type LlmProvider, type LlmRequest } from "./provider";
import { parseSseDeltas, withIdleTimeout } from "./sse";

const COMPLETE_TIMEOUT_MS = 45_000;
const STREAM_IDLE_TIMEOUT_MS = 30_000;

export interface OpenAIProviderConfig {
  baseUrl: string;
  apiKey: string;
  model: string;
  /** Label used as the provider name (logs, diagnostics). */
  name?: string;
}

export type FetchLike = (
  input: string,
  init?: {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
    signal?: AbortSignal;
  },
) => Promise<Response>;

interface ChatCompletionShape {
  choices?: Array<{ message?: { content?: unknown } }>;
}

function toWireMessages(req: LlmRequest) {
  return [
    { role: "system" as const, content: req.system },
    ...req.messages.map((m) => ({
      role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
      content: m.content,
    })),
  ];
}

function endpoint(baseUrl: string, path: string): string {
  return `${baseUrl.replace(/\/+$/, "")}${path}`;
}

/** Map an HTTP status to the honest failure kind. */
export function statusToKind(status: number): "network" | "rate-limited" | "unavailable" {
  if (status === 429) return "rate-limited";
  if (status === 401 || status === 403) return "unavailable";
  return "network";
}

export function createOpenAICompatibleProvider(
  config: OpenAIProviderConfig,
  fetchImpl: FetchLike = fetch as unknown as FetchLike,
): LlmProvider {
  const name = config.name ?? "openai";

  async function request(
    req: LlmRequest,
    stream: boolean,
  ): Promise<Response> {
    const timeoutMs = req.timeoutMs ?? COMPLETE_TIMEOUT_MS;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetchImpl(endpoint(config.baseUrl, "/chat/completions"), {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify({
          model: config.model,
          messages: toWireMessages(req),
          ...(stream ? { stream: true } : {}),
        }),
        signal: controller.signal,
      });
      if (!res.ok) {
        const kind = statusToKind(res.status);
        throw new LlmError(
          kind,
          kind === "rate-limited"
            ? "The tutor service is busy right now. Please try again shortly."
            : "The tutor could not be reached. Please try again.",
        );
      }
      return res;
    } catch (error) {
      if (error instanceof LlmError) throw error;
      throw new LlmError("timeout", "The tutor is taking too long. Please try again.");
    } finally {
      clearTimeout(timer);
    }
  }

  return {
    name,

    async complete(req: LlmRequest): Promise<string> {
      const res = await request(req, false);
      let parsed: unknown;
      try {
        parsed = await res.json();
      } catch {
        throw new LlmError("empty", "The tutor returned an empty answer. Please try again.");
      }
      const text = (parsed as ChatCompletionShape | null)?.choices?.[0]?.message?.content;
      if (typeof text !== "string" || text.trim().length === 0) {
        throw new LlmError("empty", "The tutor returned an empty answer. Please try again.");
      }
      return text.trim();
    },

    async *stream(req: LlmRequest): AsyncGenerator<string> {
      const res = await request(req, true);
      if (!res.body) {
        throw new LlmError("empty", "The tutor returned an empty answer. Please try again.");
      }
      const guarded = withIdleTimeout(
        res.body as unknown as AsyncIterable<Uint8Array>,
        STREAM_IDLE_TIMEOUT_MS,
      );
      yield* parseSseDeltas(guarded);
    },
  };
}
