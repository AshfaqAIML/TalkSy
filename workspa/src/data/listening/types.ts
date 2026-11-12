/**
 * TalkSy Listening Lab — graded listening activities content model.
 *
 * Content is code: every activity is typed data (segments = the audio
 * script, played through on-device speech synthesis; exercises = the graded
 * task set). Nine progression stages from letter/sound recognition to
 * professional communication. All audio is original TalkSy material
 * synthesised locally from these scripts — no external audio services.
 */

import type { Difficulty } from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Progression stages
// ---------------------------------------------------------------------------

export type ListeningStageId =
  | "sounds"
  | "vocabulary"
  | "phrases"
  | "sentences"
  | "conversations"
  | "stories"
  | "discussions"
  | "natural"
  | "professional";

export interface ListeningStageMeta {
  id: ListeningStageId;
  name: string;
  tagline: string;
  /** Rough CEFR alignment, display only. */
  cefr: string;
}

// ---------------------------------------------------------------------------
// Audio script
// ---------------------------------------------------------------------------

export interface ListeningSpeaker {
  id: string;
  name: string;
  role?: string;
}

export interface ListeningSegment {
  id: string;
  /** Speaker id (must exist in activity.speakers) for multi-voice playback. */
  speakerId?: string;
  /** The text spoken aloud — this IS the audio content. */
  text: string;
  translation?: string;
  /** Extra pause after this segment, milliseconds (natural pacing). */
  pauseAfterMs?: number;
}

// ---------------------------------------------------------------------------
// Exercise formats (8)
// ---------------------------------------------------------------------------

export type ListeningFormat =
  | "listen-select"
  | "listen-complete"
  | "listen-arrange"
  | "listen-answer"
  | "dictation"
  | "speaker-identify"
  | "specific-info"
  | "overall-meaning";

export const LISTENING_FORMATS: ListeningFormat[] = [
  "listen-select",
  "listen-complete",
  "listen-arrange",
  "listen-answer",
  "dictation",
  "speaker-identify",
  "specific-info",
  "overall-meaning",
];

export const FORMAT_LABELS: Record<ListeningFormat, string> = {
  "listen-select": "Listen and select",
  "listen-complete": "Listen and complete",
  "listen-arrange": "Listen and arrange",
  "listen-answer": "Listen and answer",
  dictation: "Dictation",
  "speaker-identify": "Speaker identification",
  "specific-info": "Listening for specific information",
  "overall-meaning": "Listening for overall meaning",
};

export interface ListeningFeedback {
  /** Human-readable correct answer. */
  correctAnswer: string;
  explanation: string;
  whyWrong?: string;
  /** Segment texts revealed after the exercise is completed (feedback time). */
  revealSegments: string[];
}

interface ExerciseCommon {
  id: string;
  format: ListeningFormat;
  difficulty: Difficulty;
  /** Instruction shown to the learner. */
  prompt: string;
  hints: string[];
  feedback: ListeningFeedback;
}

/** Choice-shaped: listen, then pick one option. */
export interface ChoiceListeningExercise extends ExerciseCommon {
  format: "listen-select" | "speaker-identify" | "specific-info" | "overall-meaning";
  /** Segments to play for this exercise (ids); whole activity if empty. */
  segmentIds: string[];
  options: { id: string; text: string; icon?: string }[];
  correctOptionId: string;
}

/** Fill the blanks in a line from the audio. */
export interface CompleteListeningExercise extends ExerciseCommon {
  format: "listen-complete";
  segmentIds: string[];
  /** Sentence template with {1}, {2}… placeholders for the blanks. */
  template: string;
  blanks: { id: string; acceptedAnswers: string[] }[];
}

/** Arrange words or events in the order you heard them. */
export interface ArrangeListeningExercise extends ExerciseCommon {
  format: "listen-arrange";
  segmentIds: string[];
  items: { id: string; text: string }[];
  correctOrder: string[];
}

/** Type what you hear / type the answer. */
export interface TextListeningExercise extends ExerciseCommon {
  format: "listen-answer" | "dictation";
  segmentIds: string[];
  acceptedAnswers: string[];
  /** Alternative grading for listen-answer: every keyword must appear. */
  keywords?: string[];
}

export type ListeningExercise =
  | ChoiceListeningExercise
  | CompleteListeningExercise
  | ArrangeListeningExercise
  | TextListeningExercise;

// ---------------------------------------------------------------------------
// The activity
// ---------------------------------------------------------------------------

export type TranscriptPolicy = "open" | "locked";

export interface ListeningActivity {
  id: string;
  slug: string;
  stage: ListeningStageId;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags?: string[];
  speakers?: ListeningSpeaker[];
  segments: ListeningSegment[];
  exercises: ListeningExercise[];
  /**
   * "locked": the transcript stays hidden until the activity is completed —
   * used whenever showing the text would give away the answer.
   * "open": read-along transcript (exercises never test what it shows).
   */
  transcriptPolicy: TranscriptPolicy;
  /** Voice pacing defaults. */
  audio: { rate?: number; gapMs?: number };
}

// ---------------------------------------------------------------------------
// Client-safe variants (grading data + feedback stripped server-side)
// ---------------------------------------------------------------------------

export type SafeChoiceListeningExercise = Omit<
  ChoiceListeningExercise,
  "correctOptionId" | "feedback"
>;
export type SafeCompleteListeningExercise = Omit<
  CompleteListeningExercise,
  "blanks" | "feedback"
> & {
  /** Blanks without the accepted answers. */
  blanks: { id: string }[];
};
export type SafeArrangeListeningExercise = Omit<
  ArrangeListeningExercise,
  "correctOrder" | "feedback"
>;
export type SafeTextListeningExercise = Omit<
  TextListeningExercise,
  "acceptedAnswers" | "keywords" | "feedback"
>;
export type SafeListeningExercise =
  | SafeChoiceListeningExercise
  | SafeCompleteListeningExercise
  | SafeArrangeListeningExercise
  | SafeTextListeningExercise;

// ---------------------------------------------------------------------------
// Answer payloads (validated server-side)
// ---------------------------------------------------------------------------

export type ListeningAnswer =
  | { format: "choice"; optionId: string }
  | { format: "complete"; blanks: Record<string, string> }
  | { format: "arrange"; order: string[] }
  | { format: "text"; text: string };
