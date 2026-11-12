/**
 * LLM provider resolution.
 *
 * Production code calls `getLlmProvider()`; tests install a deterministic
 * fake with `setLlmProviderOverride` (restored to null afterwards) so no
 * test ever touches the network.
 */

import type { LlmProvider } from "./provider";
import { zaiProvider } from "./zai-provider";

let override: LlmProvider | null = null;

export function getLlmProvider(): LlmProvider {
  return override ?? zaiProvider;
}

/** Test seam — never call this from production code. */
export function setLlmProviderOverride(provider: LlmProvider | null): void {
  override = provider;
}

export * from "./provider";
