/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { parseSseDeltas, withIdleTimeout } from "@/lib/llm/zai-provider";
import { LlmError, type LlmRequest } from "@/lib/llm/provider";
import { FakeLlmProvider } from "@/lib/llm/testing";

async function* ofChunks(chunks: (Uint8Array | string)[]): AsyncGenerator<Uint8Array | string> {
  for (const chunk of chunks) yield chunk;
}

async function* ofNumbers(values: number[]): AsyncGenerator<number> {
  for (const value of values) yield value;
}

function encode(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

function delta(text: string): string {
  return `data: ${JSON.stringify({ choices: [{ delta: { content: text } }] })}\n\n`;
}

describe("SSE stream decoding (parseSseDeltas)", () => {
  it("decodes simple delta chunks", async () => {
    const stream = parseSseDeltas(
      ofChunks([encode(delta("Hello")), encode(delta(" world"))]),
    );
    const parts: string[] = [];
    for await (const part of stream) parts.push(part);
    expect(parts.join("")).toBe("Hello world");
  });

  it("reassembles lines split across chunk boundaries", async () => {
    const raw = delta("went") + delta(" to school");
    const cut = Math.floor(raw.length / 2);
    const parts: string[] = [];
    for await (const part of parseSseDeltas(
      ofChunks([encode(raw.slice(0, cut)), encode(raw.slice(cut))]),
    )) {
      parts.push(part);
    }
    expect(parts.join("")).toBe("went to school");
  });

  it("ignores junk lines, [DONE] and malformed JSON", async () => {
    const chunks = [
      encode(": keep-alive comment\n\n"),
      encode("event: ping\ndata: {}\n\n"),
      encode(delta("A")),
      encode("data: not-json\n\n"),
      encode("data: [DONE]\n\n"),
      encode(delta("B")),
    ];
    const parts: string[] = [];
    for await (const part of parseSseDeltas(ofChunks(chunks))) parts.push(part);
    expect(parts.join("")).toBe("AB");
  });

  it("accepts message-shaped payloads as fallback", async () => {
    const chunks = [
      encode(`data: ${JSON.stringify({ choices: [{ message: { content: "full reply" } }] })}\n\n`),
    ];
    const parts: string[] = [];
    for await (const part of parseSseDeltas(ofChunks(chunks))) parts.push(part);
    expect(parts.join("")).toBe("full reply");
  });

  it("accepts string chunks as well as bytes", async () => {
    const parts: string[] = [];
    for await (const part of parseSseDeltas(ofChunks([delta("yes")]))) parts.push(part);
    expect(parts.join("")).toBe("yes");
  });

  it("raises an 'empty' error when a finished stream produced no text", async () => {
    let error: LlmError | null = null;
    try {
      for await (const _ of parseSseDeltas(
        ofChunks([encode("data: {}\n\n"), encode("data: [DONE]\n\n")]),
      )) {
        // drain (nothing should be yielded)
        expect.unreachable();
      }
    } catch (e) {
      error = e as LlmError;
    }
    expect(error).not.toBeNull();
    expect((error as LlmError).kind).toBe("empty");
  });
});

describe("withIdleTimeout", () => {
  it("passes values through", async () => {
    const parts: number[] = [];
    for await (const value of withIdleTimeout(ofNumbers([1, 2, 3]), 1000)) {
      parts.push(value);
    }
    expect(parts).toEqual([1, 2, 3]);
  });

  it("times out a silent stream", async () => {
    const never: AsyncGenerator<number> = (async function* () {
      await new Promise(() => undefined); // never resolves
    })();
    let error: LlmError | null = null;
    try {
      for await (const _ of withIdleTimeout(never, 30)) {
        // drain
      }
    } catch (e) {
      error = e as LlmError;
    }
    expect(error).not.toBeNull();
    expect((error as LlmError).kind).toBe("timeout");
  });
});

describe("FakeLlmProvider", () => {
  const request: LlmRequest = {
    system: "system prompt",
    messages: [{ role: "user", content: "hello" }],
  };

  it("streams scripted deltas and records the request", async () => {
    const fake = new FakeLlmProvider({ deltas: ["Good ", "try!"] });
    const parts: string[] = [];
    for await (const part of fake.stream(request)) parts.push(part);
    expect(parts.join("")).toBe("Good try!");
    expect(fake.calls).toHaveLength(1);
    expect(fake.calls[0].system).toBe("system prompt");
    expect(fake.calls[0].messages[0].content).toBe("hello");
  });

  it("completes with the scripted reply", async () => {
    const fake = new FakeLlmProvider({ reply: "We say: I went to school yesterday." });
    expect(await fake.complete(request)).toBe("We say: I went to school yesterday.");
  });

  it("fails with the scripted error kind", async () => {
    const fake = new FakeLlmProvider({ error: "network" });
    let error: LlmError | null = null;
    try {
      await fake.complete(request);
    } catch (e) {
      error = e as LlmError;
    }
    expect(error?.kind).toBe("network");
  });

  it("serves a queue of scripts then repeats the last", async () => {
    const fake = new FakeLlmProvider([{ reply: "first" }, { reply: "second" }]);
    expect(await fake.complete(request)).toBe("first");
    expect(await fake.complete(request)).toBe("second");
    expect(await fake.complete(request)).toBe("second");
  });
});
