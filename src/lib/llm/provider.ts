/**
 * Provider-independent language-model interface.
 *
 * The tutor (and future AI features) depend on this contract only — never on
 * a concrete SDK. Swapping providers means implementing `LlmProvider`; the
 * teaching logic, prompts and limits stay untouched.
 */

export type LlmRole = "system" | "user" | "assistant";

export interface LlmChatMessage {
  role: LlmRole;
  content: string;
}

export interface LlmRequest {
  /** Full system prompt (mapped to the provider's convention internally). */
  system: string;
  /** Conversation history — user / assistant turns only, oldest first. */
  messages: LlmChatMessage[];
  /** Total budget for a non-streaming call (default 45s). */
  timeoutMs?: number;
}

export type LlmFailureKind = "timeout" | "network" | "empty" | "unavailable";

/** Provider failure with a user-presentable message attached. */
export class LlmError extends Error {
  readonly kind: LlmFailureKind;

  constructor(kind: LlmFailureKind, message: string) {
    super(message);
    this.name = "LlmError";
    this.kind = kind;
  }
}

export interface LlmProvider {
  readonly name: string;

  /** Non-streaming completion. Throws LlmError on any failure. */
  complete(req: LlmRequest): Promise<string>;

  /**
   * Streaming completion: yields text deltas as they arrive. Throws LlmError
   * on failure; an empty stream also raises (kind "empty").
   */
  stream(req: LlmRequest): AsyncIterable<string>;
}
