/**
 * IELTS Listening Masterclass — audio question bank content model
 * (PROMPT 44, Part 5).
 *
 * Every exercise is an ORIGINAL multi-speaker recording authored for this
 * platform: the segments are the audio (played through on-device speech
 * synthesis with per-speaker voices and accent matching), the questions
 * follow the official task families, and every item carries a full answer
 * key with a teaching explanation, the keywords that carry the answer, and
 * — where a trap is designed in — the distractor metadata the performance
 * engine uses for error classification.
 *
 * Nothing here is official IELTS examination content; all recordings are
 * TalkSy original practice material written in the style of the test.
 */

// ---------------------------------------------------------------------------
// Speakers, accents, script
// ---------------------------------------------------------------------------

export type AccentTag = "british" | "australian" | "nz" | "north-american";

export const ACCENT_LABELS: Record<AccentTag, string> = {
  british: "British",
  australian: "Australian",
  nz: "New Zealand",
  "north-american": "North American",
};

/** BCP-47 voice preferences used by the player's accent-aware voice picker. */
export const ACCENT_LANGS: Record<AccentTag, string[]> = {
  british: ["en-GB", "en UK", "English (United Kingdom)"],
  australian: ["en-AU", "en AU", "English (Australia)"],
  nz: ["en-NZ", "en NZ", "English (New Zealand)"],
  "north-american": ["en-US", "en CA", "en US", "English (United States)"],
};

export interface BankSpeaker {
  id: string;
  /** Displayed name, e.g. "Receptionist" or "Dr Okafor". */
  name: string;
  /** Who this voice is in the scene, e.g. "gym receptionist taking bookings". */
  role: string;
  accent: AccentTag;
}

export interface BankSegment {
  id: string;
  /** Must exist in exercise.speakers; absent for narration/announcement frames. */
  speakerId?: string;
  /** The words spoken aloud — this IS the audio. */
  text: string;
  /** Extra pause after this segment in milliseconds (natural pacing). */
  pauseAfterMs?: number;
}

// ---------------------------------------------------------------------------
// Question families (the nine taught task types + short-answer questions)
// ---------------------------------------------------------------------------

export type BankQuestionType =
  | "form"
  | "note"
  | "table"
  | "flowchart"
  | "summary"
  | "sentence"
  | "mcq-single"
  | "mcq-multi"
  | "matching"
  | "map"
  | "short-answer";

export const QUESTION_TYPE_LABELS: Record<BankQuestionType, string> = {
  form: "Form completion",
  note: "Note completion",
  table: "Table completion",
  flowchart: "Flowchart completion",
  summary: "Summary completion",
  sentence: "Sentence completion",
  "mcq-single": "Multiple choice (one answer)",
  "mcq-multi": "Multiple choice (multiple answers)",
  matching: "Matching",
  map: "Plan / map labelling",
  "short-answer": "Short-answer questions",
};

/** One cell of a printed completion layout: static text or a numbered blank. */
export type BankLayoutCell = { kind: "text"; text: string } | { kind: "blank"; no: number };
export type BankLayoutRow = BankLayoutCell[];

export type BankDifficulty = 1 | 2 | 3 | 4 | 5;

export const DIFFICULTY_LABELS: Record<BankDifficulty, "foundation" | "standard" | "advanced"> = {
  1: "foundation",
  2: "foundation",
  3: "standard",
  4: "advanced",
  5: "advanced",
};

/** Distractor taxonomy — powers the performance engine's error classes. */
export type TrapFamily =
  | "correction" // "Friday… no, Saturday" — second value scores
  | "similar-sound" // thirteen/thirty style confusions
  | "mention-lure" // the lure's words appear but in the wrong context
  | "negation" // "I'd love to, but…" — the polite refusal trap
  | "attribution" // right fact, wrong speaker
  | "number-form"; // right value, wrong format for the word limit

export interface BankTrap {
  family: TrapFamily;
  /** Values a learner might wrongly write/pick instead (exact typed forms). */
  lure?: string[];
  /** One-line teaching note shown in the explanation panel. */
  note: string;
}

export interface BankQuestionMeta {
  /** Tested abilities, e.g. ["numbers", "spelling", "corrections"]. */
  skills: string[];
  /** Script words that carry the answer (server-side only — never leaked). */
  keywords: string[];
  /** Present whenever the item is designed around a distractor. */
  trap?: BankTrap;
  /** Teaching explanation shown after submit (≥ 20 words). */
  explanation: string;
}

interface QuestionBase {
  id: string;
  /** Printed label, e.g. "Questions 1–4". */
  label: string;
  /** Official-style rubric wording, e.g. "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer." */
  instruction: string;
  meta: BankQuestionMeta;
}

export interface BankBlank {
  no: number;
  answer: string;
  /** Case-insensitive alternatives (number forms, "4th"/"fourth"). */
  alternatives?: string[];
  /** Accept digits spoken as words and vice versa (already implied by alternatives). */
  numbers?: boolean;
}

export type BankCompletionQuestion = QuestionBase & {
  type: "form" | "note" | "table" | "flowchart" | "summary" | "sentence";
  /** The printed layout: rows of text cells and numbered blanks. */
  layout: BankLayoutRow[];
  /** Answer key per blank (stripped from the client projection). */
  blanks: BankBlank[];
  /** Maximum words per blank: 1 / 2 / 3. */
  wordLimit: 1 | 2 | 3;
  /** Whether figures count as "a number" under the limit. */
  numbersAllowed: boolean;
};

export type BankMcqQuestion = QuestionBase & {
  type: "mcq-single" | "mcq-multi";
  /** The question stem (after the choose-letter rubric). */
  stem: string;
  /** Options in A, B, C… order (letters assigned by position). */
  options: string[];
  /** Correct option indices (client projection strips this). */
  correct: number[];
};

export type BankMatchingQuestion = QuestionBase & {
  type: "matching";
  /** Numbered list on the left (questions). */
  items: string[];
  /** Lettered list on the right (options; may recycle unless stated). */
  options: string[];
  /** items[i] matches options[correct[i]] (stripped client-side). */
  correct: number[];
};

export interface BankMapCell {
  /** Room/area name or description shown on the plan. */
  room: string;
  /** Pre-printed label, e.g. "Entrance". */
  label?: string;
  /** Question number of the blank on this cell. */
  blank?: number;
}

export type BankMapQuestion = QuestionBase & {
  type: "map";
  plan: { title: string; caption: string; grid: (BankMapCell | null)[][] };
  /** Lettered place options. */
  options: { letter: string; text: string }[];
  /** Letters for each blank, in blank-number order (stripped client-side). */
  correct: string[];
};

export type BankShortAnswerQuestion = QuestionBase & {
  type: "short-answer";
  /** The printed questions, e.g. ["1. What time does the coach leave?"]. */
  questions: string[];
  /** Accepted answers per question (stripped client-side). */
  accepted: string[][];
};

export type BankQuestion =
  | BankCompletionQuestion
  | BankMcqQuestion
  | BankMatchingQuestion
  | BankMapQuestion
  | BankShortAnswerQuestion;

// ---------------------------------------------------------------------------
// The exercise
// ---------------------------------------------------------------------------

export interface BankExercise {
  slug: string;
  title: string;
  /** Which recording part this imitates. */
  part: 1 | 2 | 3 | 4;
  /** 1 (foundation) … 5 (advanced). */
  difficulty: BankDifficulty;
  estimatedMinutes: number;
  /**
   * PROMPT 54 question-bank domain: one of the twelve unified topic
   * domains. Optional for the original sixteen flagship exercises (the
   * unified adapter resolves those through a curated map); every exercise
   * added by the PROMPT 54 expansion sets it explicitly.
   */
  topic?: import("../../question-bank/topics").BankTopicDomain;
  /** The accents heard in this recording (for library filtering). */
  accentMix: AccentTag[];
  /** "You will hear…" — the spoken+printed framing. */
  intro: string;
  speakers: BankSpeaker[];
  /** The recording, segment by segment. */
  segments: BankSegment[];
  questions: BankQuestion[];
  /** Shown beside the transcript after submit. */
  transcriptNote: string;
  /** Original-material disclaimer (constant below). */
  source: string;
}

export const BANK_SOURCE_NOTE =
  "Original TalkSy practice material written in the style of the IELTS Listening test — not an official IELTS examination recording.";
