/**
 * TOEFL Speaking Practice Library — content model (PROMPT 50).
 *
 * One hundred original practice items across the two current-format TOEFL
 * iBT Speaking task types (in force since 21 January 2026):
 *
 *   listen-repeat   — Listen and Repeat: fifty natural spoken sentences with
 *                     progressive difficulty and deliberate length variation
 *                     (5 to 26 words). Each sentence IS an original
 *                     recording authored for speech synthesis with an
 *                     accent-matched voice, a natural base rate (≈0.95) and
 *                     an official-style repetition window scaled to its
 *                     length (8 / 10 / 12 seconds). The reference transcript
 *                     is locked until submission — the learner repeats from
 *                     memory, exactly like the test — except at difficulty 1,
 *                     where shadow-reading along with the text is the point.
 *   take-interview  — Take an Interview: fifty original interview questions
 *                     across varied topics and difficulty levels, each with
 *                     response-time guidance, a sample response (locked
 *                     until submission), vocabulary suggestions and explicit
 *                     feedback criteria.
 *
 * AUDIO MODEL (the platform convention established by PROMPT 49): the
 * recording is the authored sentence itself, spoken through on-device speech
 * synthesis with an accent-matched voice. The learner's own recording never
 * leaves the browser — only the transcript travels to the evaluation engine.
 *
 * Nothing here is official ETS examination content; all sentences, questions
 * and sample responses are original TalkSy practice material written in the
 * style of the test.
 */

import { TOEFL_ACCENT_LABELS, type ToeflAccent, type ToeflBankSpeaker } from "../listening-bank/types";

export { TOEFL_ACCENT_LABELS };

export type ToeflSpeakingTaskType = "listen-repeat" | "take-interview";

export const TOEFL_SPEAKING_TASK_LABELS: Record<ToeflSpeakingTaskType, string> = {
  "listen-repeat": "Listen and Repeat",
  "take-interview": "Take an Interview",
};

export const TOEFL_SPEAKING_TASK_DESCRIPTIONS: Record<ToeflSpeakingTaskType, string> = {
  "listen-repeat":
    "Hear a sentence, then say it back accurately inside the repetition window — exact words, natural chunks, steady pace.",
  "take-interview":
    "Answer an interview question directly, develop it with reasons and an example, and hold a natural pace under the clock.",
};

export type ToeflBankDifficulty = 1 | 2 | 3 | 4 | 5;

export const TOEFL_SPEAKING_DIFFICULTY_LABELS: Record<ToeflBankDifficulty, "foundation" | "standard" | "advanced"> = {
  1: "foundation",
  2: "foundation",
  3: "standard",
  4: "advanced",
  5: "advanced",
};

// ---------------------------------------------------------------------------
// Listen and Repeat
// ---------------------------------------------------------------------------

/** What a repetition item trains — chunking, connected speech, precision. */
export type ToeflRepeatFocus =
  | "chunking" // breaking a long sentence into speakable thought groups
  | "weak-forms" // reducing function words at natural speed
  | "linking" // joining words smoothly (consonant-to-vowel, blends)
  | "numbers" // years, decimals, fractions, prices spoken accurately
  | "lists" // keeping serial items complete and in order
  | "questions" // rising or falling intonation on question forms
  | "conditionals" // if-clause structures without slipping tense
  | "contrast" // although / whereas / despite — holding the contrast
  | "noun-phrases" // dense academic noun strings without losing the thread
  | "reported-speech" // keeping tense and pronouns consistent when reporting
  | "time-markers" // since / until / by the time — sequencing accurately
  | "politeness" // softened requests and apologies with natural stress;

export const TOEFL_REPEAT_FOCUS_LABELS: Record<ToeflRepeatFocus, string> = {
  chunking: "Chunking",
  "weak-forms": "Weak forms",
  linking: "Linking",
  numbers: "Numbers",
  lists: "Lists",
  questions: "Question intonation",
  conditionals: "Conditionals",
  contrast: "Contrast",
  "noun-phrases": "Noun phrases",
  "reported-speech": "Reported speech",
  "time-markers": "Time markers",
  politeness: "Politeness and stress",
};

export interface ToeflRepeatItem {
  taskType: "listen-repeat";
  slug: string; // toefl-sb-rep-01 … toefl-sb-rep-50
  title: string;
  /** The sentence to be spoken — this IS the audio definition. */
  sentence: string;
  /** The accurate reference transcript (identical to the sentence; validator-enforced). */
  transcript: string;
  /** The synthesised voice: accent + a display name for the speaker card. */
  speaker: ToeflBankSpeaker;
  accent: ToeflAccent;
  difficulty: ToeflBankDifficulty;
  /** Official-style repetition window: 8s (≤8 words), 10s (9–14), 12s (≥15). */
  windowSec: 8 | 10 | 12;
  /** Word count of the sentence (validator-checked against the length band). */
  wordCount: number;
  focus: ToeflRepeatFocus;
  /** Repetition analysis pointers, revealed with the post-submission review. */
  analysisHints: string[];
  /** Difficulty 1 items are learning mode: the transcript shows during playback (shadow-reading). */
  learningMode?: boolean;
  source: string;
}

// ---------------------------------------------------------------------------
// Take an Interview
// ---------------------------------------------------------------------------

/** The four feedback criteria every interview item is assessed against. */
export type ToeflInterviewCriterionKey = "response" | "development" | "language" | "delivery";

export const TOEFL_INTERVIEW_CRITERIA: { key: ToeflInterviewCriterionKey; label: string; description: string }[] = [
  {
    key: "response",
    label: "Answer & relevance",
    description: "Answers the question directly, stays on topic, takes a clear position.",
  },
  {
    key: "development",
    label: "Development & support",
    description: "Extends the answer with a reason, an example or a comparison instead of stopping early.",
  },
  {
    key: "language",
    label: "Language control",
    description: "Grammar and sentence structure stay accurate and connected under time pressure.",
  },
  {
    key: "delivery",
    label: "Fluency & pace",
    description: "Steady pace inside the guidance window, natural pausing, no long gaps or read-off lists.",
  },
];

export interface ToeflInterviewVocabSuggestion {
  word: string;
  gloss: string;
}

export interface ToeflInterviewItem {
  taskType: "take-interview";
  slug: string; // toefl-sb-int-01 … toefl-sb-int-50
  title: string;
  /** The original interview question. */
  question: string;
  /** Topic label for library filtering, e.g. "Study plans". */
  topic: string;
  difficulty: ToeflBankDifficulty;
  /** Seconds of silent preparation the learner is guided to take (15–30). */
  prepSec: number;
  /** Recommended answer length in seconds (30–75 by difficulty). */
  answerSec: number;
  /** An optional follow-up probe for extended practice. */
  followUp?: string;
  /** The model spoken answer (≥ 60 words) — locked until submission. */
  sampleResponse: string;
  /** Vocabulary suggestions (≥ 5) — visible during preparation by design. */
  vocabulary: ToeflInterviewVocabSuggestion[];
  /** Analysis of what a strong answer does — revealed after submission. */
  analysisNotes: string;
  source: string;
}

export type ToeflSpeakingExercise = ToeflRepeatItem | ToeflInterviewItem;

export const TOEFL_SPEAKING_BANK_SOURCE_NOTE =
  "Original TalkSy practice material written for the current TOEFL iBT Speaking task types — not official ETS examination content.";

// ---------------------------------------------------------------------------
// The AI-evaluation honesty contract (PROMPT 50)
// ---------------------------------------------------------------------------

export const TOEFL_SPEAKING_DISCLAIMERS = [
  "All automated feedback on this page is an educational estimate produced by TalkSy's practice engine — it is not official ETS scoring and does not replicate ETS scoring.",
  "No score is promised or guaranteed; official TOEFL iBT scores are set only by ETS.",
];
