/**
 * LLM provider resolution — PROMPT 38 §9.
 *
 * Production code calls `getLlmProvider()`, which resolves the ACTIVE
 * provider from the `AI_PROVIDER` environment variable through the registry
 * (see registry.ts). Nothing in the application hardcodes a provider: the
 * teaching logic, prompts and limits are provider-independent, and every AI
 * feature (tutor, writing coach, speaking partner, exam grading) goes through
 * this one seam.
 *
 * Tests install a deterministic fake with `setLlmProviderOverride` (restored
 * to null afterwards) so no test ever touches the network or a live key.
 */

import type { LlmProvider } from "./provider";
import { buildLlmProvider, resolveLlmProviderName } from "./registry";

let override: LlmProvider | null = null;

export function getLlmProvider(): LlmProvider {
  if (override) return override;
  return buildLlmProvider(resolveLlmProviderName());
}

/** Test seam — never call this from production code. */
export function setLlmProviderOverride(provider: LlmProvider | null): void {
  override = provider;
}

export * from "./provider";
export * from "./registry";
