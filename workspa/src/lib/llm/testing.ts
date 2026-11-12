/**
 * Deterministic in-memory LlmProvider for tests.
 *
 * Scripts a sequence of replies (or failures) and records every request so
 * tests can assert on the exact prompts the tutor built — without any
 * network access or flakiness.
 */

import type { LlmRequest } from "./provider";
import { LlmError, type LlmFailureKind, type LlmProvider } from "./provider";

export interface FakeLlmScript {
  /** Full reply for a non-streaming call. */
  reply?: string;
  /** Deltas for a streaming call (falls back to one chunk with `reply`). */
  deltas?: string[];
  /** Fail the call with this kind instead of replying. */
  error?: LlmFailureKind;
}

const MESSAGES: Record<LlmFailureKind, string> = {
  timeout: "The tutor is taking too long. Please try again.",
  network: "The tutor could not be reached. Please try again.",
  empty: "The tutor returned an empty answer. Please try again.",
  unavailable: "The tutor service is not reachable right now. Please try again in a moment.",
};

export class FakeLlmProvider implements LlmProvider {
  readonly name = "fake";
  readonly calls: LlmRequest[] = [];
  private queue: FakeLlmScript[];

  constructor(script: FakeLlmScript | FakeLlmScript[]) {
    this.queue = Array.isArray(script) ? [...script] : [script];
  }

  private next(): FakeLlmScript {
    if (this.queue.length === 0) {
      return { reply: "This is a scripted tutor reply." };
    }
    if (this.queue.length === 1) return this.queue[0];
    return this.queue.shift() as FakeLlmScript;
  }

  async complete(req: LlmRequest): Promise<string> {
    this.calls.push(req);
    const script = this.next();
    if (script.error) throw new LlmError(script.error, MESSAGES[script.error]);
    return script.reply ?? "";
  }

  async *stream(req: LlmRequest): AsyncGenerator<string> {
    this.calls.push(req);
    const script = this.next();
    if (script.error) throw new LlmError(script.error, MESSAGES[script.error]);
    const deltas = script.deltas ?? [script.reply ?? ""];
    for (const delta of deltas) {
      yield delta;
    }
  }
}
