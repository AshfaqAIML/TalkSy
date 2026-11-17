/**
 * Provider registry — PROMPT 38 §9.
 *
 * No AI feature hardcodes a provider: they all call `getLlmProvider()`
 * (src/lib/llm/index.ts), which resolves the ACTIVE provider from the
 * `AI_PROVIDER` environment variable through this registry. Unknown names
 * fail loudly (listing the valid ones); a misconfigured provider (e.g. the
 * openai provider without an API key) fails as `unavailable` at call time —
 * never silently falling back to a provider other than the one the operator
 * asked for.
 *
 * Available providers:
 *   zai     — the z-ai SDK (default; no configuration needed in this sandbox)
 *   openai  — any OpenAI-compatible REST endpoint, configured with
 *             AI_OPENAI_BASE_URL / AI_OPENAI_API_KEY / AI_OPENAI_MODEL /
 *             AI_OPENAI_NAME (label for usage logs)
 */

import { LlmError, type LlmProvider } from "./provider";
import { zaiProvider } from "./zai-provider";
import { createOpenAICompatibleProvider, type FetchLike } from "./openai-provider";

export const LLM_PROVIDER_NAMES = ["zai", "openai"] as const;
export type LlmProviderName = (typeof LLM_PROVIDER_NAMES)[number];

export function llmProviderNames(): string[] {
  return [...LLM_PROVIDER_NAMES];
}

/** Read and validate the AI_PROVIDER selection (empty → default "zai"). */
export function resolveLlmProviderName(
  env: { AI_PROVIDER?: string } = process.env as unknown as { AI_PROVIDER?: string },
): LlmProviderName {
  const raw = (env.AI_PROVIDER ?? "").trim().toLowerCase();
  if (raw === "" || raw === "zai") return "zai";
  if (raw === "openai" || raw === "openai-compatible") return "openai";
  throw new LlmError(
    "unavailable",
    `Unknown AI provider "${raw}". Available providers: ${llmProviderNames().join(", ")}.`,
  );
}

/** The provider name that WOULD be active (for diagnostics; may throw on bad env). */
export function activeProviderName(env: { AI_PROVIDER?: string } = process.env as unknown as { AI_PROVIDER?: string }): string {
  return resolveLlmProviderName(env);
}

/**
 * Build the named provider. `env` and `fetchImpl` are injectable for tests;
 * production calls use the process environment and global fetch. Keys are
 * read server-side only and never leave this module.
 */
export function buildLlmProvider(
  name: LlmProviderName,
  env: Record<string, string | undefined> = process.env,
  fetchImpl?: FetchLike,
): LlmProvider {
  switch (name) {
    case "zai":
      return zaiProvider;
    case "openai": {
      if (!env.AI_OPENAI_API_KEY) {
        throw new LlmError(
          "unavailable",
          "The openai AI provider is selected but AI_OPENAI_API_KEY is not configured on the server.",
        );
      }
      return createOpenAICompatibleProvider(
        {
          baseUrl: env.AI_OPENAI_BASE_URL || "https://api.openai.com/v1",
          apiKey: env.AI_OPENAI_API_KEY || "",
          model: env.AI_OPENAI_MODEL || "gpt-4o-mini",
          name: env.AI_OPENAI_NAME || "openai",
        },
        fetchImpl,
      );
    }
  }
}
