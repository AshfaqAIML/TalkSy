/**
 * TOEFL Listening Practice Library — content model (PROMPT 49).
 *
 * One hundred original exercises across the four current-format TOEFL iBT
 * Listening task types (in force since 21 January 2026):
 *
 *   choose-response — Listen and Choose a Response: a short spoken prompt;
 *                      the learner picks the pragmatically appropriate reply
 *                      (register + intention), with harder items adding a
 *                      question on the speaker's intention itself.
 *   conversation     — Listen to a Conversation: two speakers in a campus,
 *                      service or study context; main topic, details,
 *                      implied meaning, corrections and outcome.
 *   announcement     — Listen to an Announcement: a single voice delivering
 *                      a campus/office/public change; purpose, key facts,
 *                      instructions and follow-up action.
 *   academic-talk    — Listen to an Academic Talk: a professor's mini-lecture;
 *                      main idea, supporting details, terminology, structure,
 *                      emphasis and the concluding claim.
 *
 * AUDIO MODEL (the platform convention, established by the IELTS Listening
 * Masterclass and the TOEFL mock library): every exercise IS an original
 * recording authored as a segment list with a speaker roster — the segments
 * are spoken through on-device speech synthesis with accent-matched voices,
 * natural base rate (≈0.95), per-segment pauses and optional rate control.
 * No robotic pre-recorded files; the "audio file" for each exercise is this
 * authored recording definition, and the transcript text is the script.
 *
 * TRANSCRIPT GATING (PROMPT 49 rule): the transcript is NOT exposed before
 * the learner completes the assessment. The safe projection ships only the
 * audio definition; the displayed transcript is returned by the grading
 * endpoint after submission. The single exception: exercises flagged
 * learningMode — foundation listening lessons where reading along IS the
 * point — show the transcript during playback by design.
 *
 * Nothing here is official ETS examination content; all recordings are
 * TalkSy original practice material written in the style of the test.
 */

import { type LibrarySkill } from "../library-skills";

// ---------------------------------------------------------------------------
// Task types, difficulty
// ---------------------------------------------------------------------------

export type ToeflListeningTaskType = "choose-response" | "conversation" | "announcement" | "academic-talk";

export const TOEFL_LISTENING_TASK_LABELS: Record<ToeflListeningTaskType, string> = {
  "choose-response": "Listen and Choose a Response",
  conversation: "Listen to a Conversation",
  announcement: "Listen to an Announcement",
  "academic-talk": "Listen to an Academic Talk",
};

export const TOEFL_LISTENING_TASK_DESCRIPTIONS: Record<ToeflListeningTaskType, string> = {
  "choose-response":
    "A short spoken prompt — pick the appropriate reply for its register and intention, not just its words.",
  conversation:
    "Two speakers in a campus or service context — main topic, details, corrections, implied meaning and outcome.",
  announcement:
    "A single voice with a change to tell you about — purpose, key facts, instructions and what you must do next.",
  "academic-talk":
    "A professor's mini-lecture — main idea, supporting details, terminology, structure, emphasis and the closing claim.",
};

// ---------------------------------------------------------------------------
// Accents and voices (speech-synthesis matching)
// ---------------------------------------------------------------------------

export type ToeflAccent = "north-american" | "british" | "australian" | "nz";

export const TOEFL_ACCENT_LABELS: Record<ToeflAccent, string> = {
  "north-american": "North American",
  british: "British",
  australian: "Australian",
  nz: "New Zealand",
};

/** BCP-47 voice preferences used by the player's accent-aware voice picker. */
export const TOEFL_ACCENT_LANGS: Record<ToeflAccent, string[]> = {
  "north-american": ["en-US", "en CA", "en US", "English (United States)"],
  british: ["en-GB", "en UK", "English (United Kingdom)"],
  australian: ["en-AU", "en AU", "English (Australia)"],
  nz: ["en-NZ", "en NZ", "English (New Zealand)"],
};

export interface ToeflBankSpeaker {
  id: string;
  /** Displayed name, e.g. "Registrar" or "Dr Okafor". */
  name: string;
  /** Who this voice is in the scene, e.g. "advisor sorting a registration error". */
  role: string;
  accent: ToeflAccent;
}

export interface ToeflBankSegment {
  id: string;
  /** Must exist in exercise.speakers; absent for narration frames. */
  speakerId?: string;
  /** The words spoken aloud — this IS the audio. */
  text: string;
  /** Extra pause after this segment in milliseconds (natural pacing). */
  pauseAfterMs?: number;
}

// ---------------------------------------------------------------------------
// Trap taxonomy — powers the listening error classification
// ---------------------------------------------------------------------------

export type ToeflListeningTrapFamily =
  | "register-mismatch" // the reply matches words but not politeness/formality
  | "literal-echo" // repeats a detail instead of answering the intention
  | "correction" // "Friday… no, Saturday" — the second value carries the mark
  | "attribution" // right fact, wrong speaker
  | "negation" // "I'd love to, but…" — the polite refusal trap
  | "mention-lure"; // the lure's words appear in the script, but the claim differs

// ---------------------------------------------------------------------------
// Question items (all multiple choice, exactly four options)
// ---------------------------------------------------------------------------

export interface ToeflListeningQuestion {
  /** Continuous question numbering across the exercise (1..N). */
  no: number;
  stem: string;
  /** Exactly four options; letters A–D assigned by position. */
  options: [string, string, string, string];
  /** Index of the keyed option (0–3). */
  correct: number;
  /** The designed distractor index, if any (powers trap classification). */
  lure?: number;
  meta: {
    /** 1–2 of the seven tracked library dimensions. */
    skills: LibrarySkill[];
    /** Script words that carry the answer (server-side only — never leaked). */
    keywords: string[];
    /** Teaching explanation shown after submit (≥ 25 words). */
    explanation: string;
    trap?: { family: ToeflListeningTrapFamily; note: string };
  };
}

// ---------------------------------------------------------------------------
// The exercise
// ---------------------------------------------------------------------------

export interface ToeflListeningExercise {
  slug: string;
  title: string;
  taskType: ToeflListeningTaskType;
  /** Setting label, e.g. "registrar's office, first week of term". */
  scene: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimatedMinutes: number;
  /** "You will hear…" — the printed (and spoken on request) framing. */
  intro: string;
  speakers: ToeflBankSpeaker[];
  /** The recording, segment by segment. */
  segments: ToeflBankSegment[];
  /**
   * True ONLY for designated learning exercises (foundation listening
   * lessons): the transcript is visible during playback by design.
   * Every other exercise locks the transcript until submission.
   */
  learningMode?: boolean;
  /** Shown beside the revealed transcript after submit. */
  transcriptNote: string;
  /** The primary tracked skill this recording trains (library card). */
  targetSkill: LibrarySkill;
  questions: ToeflListeningQuestion[];
  source: string;
}

export const TOEFL_LISTENING_BANK_SOURCE_NOTE =
  "Original TalkSy practice material written for the current TOEFL iBT Listening task types — not official ETS examination content.";
