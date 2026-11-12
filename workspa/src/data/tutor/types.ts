/**
 * AI Tutor — content types.
 *
 * Tutor modes are content-as-code, exactly like the skill libraries: the
 * teaching modes, their prompts material, greetings and starter prompts all
 * live here with a completeness validator, so a malformed mode fails tests
 * instead of shipping silently.
 *
 * `persona` and `greeting` are used server-side only; `toSafeTutorMode`
 * strips them before anything reaches the client.
 */

export type TutorModeId =
  | "grammar"
  | "vocabulary"
  | "sentence"
  | "conversation"
  | "writing"
  | "listening"
  | "reading"
  | "interview"
  | "doubt";

export const TUTOR_MODE_IDS: readonly TutorModeId[] = [
  "grammar",
  "vocabulary",
  "sentence",
  "conversation",
  "writing",
  "listening",
  "reading",
  "interview",
  "doubt",
] as const;

/** Rough learner level used to shape teaching behaviour. */
export type TutorLevel = "beginner" | "intermediate" | "advanced";

export interface TutorModeDefinition {
  id: TutorModeId;
  /** Display name, e.g. "Grammar Teacher". */
  label: string;
  /** lucide icon key rendered by the client icon map. */
  icon: string;
  /** One-line card text. */
  tagline: string;
  /** Fuller description shown on the mode card. */
  description: string;
  /** Teaching instructions injected verbatim into the system prompt. */
  persona: string;
  /** Canned (non-AI) first tutor message when a conversation starts. */
  greeting: string;
  /** Clickable starter prompts for the learner's first message. */
  starters: string[];
  /** Modes that commonly reference a specific lesson use this in the UI. */
  lessonLinked: boolean;
}

/** Client-safe mode (prompt material stripped server-side). */
export interface SafeTutorMode {
  id: TutorModeId;
  label: string;
  icon: string;
  tagline: string;
  description: string;
  starters: string[];
  lessonLinked: boolean;
}

/** Chat DTOs shared by the API and the client. */
export interface TutorConversationDto {
  id: string;
  mode: TutorModeId;
  modeLabel: string;
  lessonRef: string | null;
  lessonTitle: string | null;
  includeContext: boolean;
  title: string;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
}

export interface TutorMessageDto {
  id: string;
  role: "learner" | "tutor";
  content: string;
  greeting: boolean;
  createdAt: string;
}

export interface TutorUsageDto {
  day: string;
  requests: number;
  limit: number;
}
