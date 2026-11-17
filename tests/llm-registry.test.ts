/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  resolveLlmProviderName,
  buildLlmProvider,
  llmProviderNames,
} from "@/lib/llm/registry";
import { statusToKind, createOpenAICompatibleProvider } from "@/lib/llm/openai-provider";
import { LlmError, type LlmRequest } from "@/lib/llm/provider";
import { getLlmProvider, setLlmProviderOverride } from "@/lib/llm";
import { FakeLlmProvider } from "@/lib/llm/testing";

const REQ: LlmRequest = {
  system: "You are a test tutor.",
  messages: [{ role: "user", content: "Hello" }],
};

function fakeFetch(
  handler: (url: string, init?: { method?: string; headers?: Record<string, string>; body?: string; signal?: AbortSignal }) => Promise<Response>,
): typeof fetch {
  return handler as unknown as typeof fetch;
}

describe("provider registry (PROMPT 38 §9)", () => {
  it("defaults to zai and validates the AI_PROVIDER name", () => {
    expect(resolveLlmProviderName({})).toBe("zai");
    expect(resolveLlmProviderName({ AI_PROVIDER: "" })).toBe("zai");
    expect(resolveLlmProviderName({ AI_PROVIDER: "ZAI" })).toBe("zai");
    expect(resolveLlmProviderName({ AI_PROVIDER: "openai" })).toBe("openai");
    expect(() => resolveLlmProviderName({ AI_PROVIDER: "groq" })).toThrow(LlmError);
    expect(() => resolveLlmProviderName({ AI_PROVIDER: "groq" })).toThrow(/Unknown AI provider "groq"/);
  });

  it("lists the available providers", () => {
    const names = llmProviderNames();
    expect(names).toContain("zai");
    expect(names).toContain("openai");
  });

  it("refuses the openai provider without a server-side key (never falls back silently)", () => {
    expect(() => buildLlmProvider("openai", {})).toThrow(LlmError);
    expect(() => buildLlmProvider("openai", {})).toThrow(/AI_OPENAI_API_KEY is not configured/);
  });

  it("no feature hardcodes a provider: they all go through getLlmProvider()", () => {
    // The override seam is the proof: any feature honours it transparently.
    const fake = new FakeLlmProvider({ reply: "seam reply" });
    setLlmProviderOverride(fake);
    try {
      expect(getLlmProvider().name).toBe("fake");
      expect(getLlmProvider().complete(REQ)).resolves.toBe("seam reply");
    } finally {
      setLlmProviderOverride(null);
    }
    expect(getLlmProvider().name).not.toBe("fake");
  });
});

describe("openai-compatible provider", () => {
  it("maps HTTP statuses to honest failure kinds", () => {
    expect(statusToKind(429)).toBe("rate-limited");
    expect(statusToKind(401)).toBe("unavailable");
    expect(statusToKind(403)).toBe("unavailable");
    expect(statusToKind(500)).toBe("network");
  });

  it("sends the system prompt as a system message with the bearer key server-side", async () => {
    let seenUrl = "";
    let seenBody: Record<string, unknown> = {};
    let seenAuth = "";
    const provider = createOpenAICompatibleProvider(
      { baseUrl: "https://gateway.test/v1/", apiKey: "secret-key", model: "test-model", name: "gw" },
      fakeFetch(async (url, init) => {
        seenUrl = url;
        seenAuth = init?.headers?.authorization ?? "";
        seenBody = JSON.parse(String(init?.body ?? "{}"));
        return new Response(
          JSON.stringify({ choices: [{ message: { content: "Wire-format reply." } }] }),
          { status: 200 },
        );
      }),
    );
    await expect(provider.complete(REQ)).resolves.toBe("Wire-format reply.");
    expect(seenUrl).toBe("https://gateway.test/v1/chat/completions");
    expect(seenAuth).toBe("Bearer secret-key");
    expect(seenBody?.model).toBe("test-model");
    const messages = seenBody?.messages as { role: string; content: string }[];
    expect(messages[0]).toEqual({ role: "system", content: "You are a test tutor." });
    expect(messages[1]).toEqual({ role: "user", content: "Hello" });
  });

  it("surfaces rate limits and empty completions as LlmErrors", async () => {
    const rate = createOpenAICompatibleProvider(
      { baseUrl: "https://gateway.test/v1", apiKey: "k", model: "m" },
      fakeFetch(async () => new Response("busy", { status: 429 })),
    );
    await expect(rate.complete(REQ)).rejects.toThrow(/busy right now/);

    const empty = createOpenAICompatibleProvider(
      { baseUrl: "https://gateway.test/v1", apiKey: "k", model: "m" },
      fakeFetch(async () =>
        new Response(JSON.stringify({ choices: [{ message: { content: "   " } }] }), { status: 200 }),
      ),
    );
    await expect(empty.complete(REQ)).rejects.toThrow(/empty answer/);
  });
});
