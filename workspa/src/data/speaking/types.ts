/**
 * TalkSy Speaking Laboratory — content model.
 *
 * Content is code: 22 progressive speaking activities across three tiers
 * (beginner / intermediate / advanced), 11 role-play conversation scenarios
 * with three difficulty variants each, and four pronunciation practice
 * categories. Tasks are measured against authored targets server-side.
 *
 * Audio policy: recordings live in the learner's browser only. The server
 * receives audio solely to transcribe it on explicit submission (provider
 * adapters in src/lib/speaking/stt.ts) and never persists audio — only
 * transcripts, and only per the learner's retention setting.
 */

import type { Difficulty } from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Tiers & task kinds (the 22 required progressive activity types)
// ---------------------------------------------------------------------------

export type SpeakingTier = "beginner" | "intermediate" | "advanced";

export type SpeakingTaskKind =
  // Beginner
  | "repeat-word"
  | "repeat-sentence"
  | "read-aloud"
  | "introduce-yourself"
  | "answer-questions"
  | "describe-object"
  | "talk-about-family"
  | "daily-routine"
  // Intermediate
  | "describe-picture"
  | "past-experiences"
  | "explain-preferences"
  | "tell-story"
  | "hold-conversation"
  | "give-directions"
  | "express-opinions"
  // Advanced
  | "discussion"
  | "debate"
  | "interview-simulation"
  | "presentation"
  | "impromptu"
  | "storytelling"
  | "professional-communication";

export const TIER_META: Record<
  SpeakingTier,
  { name: string; cefr: string; tagline: string }
> = {
  beginner: {
    name: "Beginner",
    cefr: "Pre-A1 – A1",
    tagline: "First words out loud — repeat, read aloud and talk about yourself.",
  },
  intermediate: {
    name: "Intermediate",
    cefr: "A2 – B1",
    tagline: "Pictures, past events, stories, directions and opinions.",
  },
  advanced: {
    name: "Advanced",
    cefr: "B2 – C1",
    tagline: "Debates, interviews, presentations and professional English.",
  },
};

export const KIND_LABELS: Record<SpeakingTaskKind, string> = {
  "repeat-word": "Repeat a word",
  "repeat-sentence": "Repeat a sentence",
  "read-aloud": "Read aloud",
  "introduce-yourself": "Introduce yourself",
  "answer-questions": "Answer simple questions",
  "describe-object": "Describe an object",
  "talk-about-family": "Speak about your family",
  "daily-routine": "Talk about your daily routine",
  "describe-picture": "Describe pictures",
  "past-experiences": "Talk about past experiences",
  "explain-preferences": "Explain preferences",
  "tell-story": "Tell short stories",
  "hold-conversation": "Hold conversations",
  "give-directions": "Give directions",
  "express-opinions": "Express opinions",
  discussion: "Discussions",
  debate: "Debates",
  "interview-simulation": "Interview simulations",
  presentation: "Presentations",
  impromptu: "Impromptu speaking",
  storytelling: "Storytelling",
  "professional-communication": "Professional communication",
};

// ---------------------------------------------------------------------------
// Tasks
// ---------------------------------------------------------------------------

interface TaskCommon {
  id: string;
  title: string;
  /** Instruction shown above the recorder. */
  prompt: string;
  hints: string[];
  /** Suggested speaking length (display + fluency guidance). */
  targetSeconds: number;
  /** Hard recording cap for this task. */
  maxSeconds: number;
  difficulty: Difficulty;
}

/**
 * Say the target text as accurately as you can. Graded by transcript
 * similarity — an honest intelligibility proxy, never a phoneme score.
 */
export interface MatchSpeakingTask extends TaskCommon {
  type: "match";
  targetText: string;
  translation?: string;
}

/**
 * Open response, measured against an authored target: required points
 * (checklist), topic keywords, target vocabulary and length expectations.
 */
export interface OpenSpeakingTask extends TaskCommon {
  type: "open";
  /** Bullet cues / question cards shown before recording. */
  cues?: { id: string; label: string }[];
  /** Original inline SVG scene (describe-picture). */
  image?: { svg: string; alt: string };
  /** Required points: covered when ANY keyword of a group appears. */
  checklist: { id: string; label: string; anyOf: string[] }[];
  topicKeywords: string[];
  targetWords?: string[];
  minWords: number;
  modelAnswer: string;
  modelAnswerTranslation?: string;
}

export type SpeakingTask = MatchSpeakingTask | OpenSpeakingTask;

export interface SpeakingActivity {
  id: string;
  slug: string;
  tier: SpeakingTier;
  kind: SpeakingTaskKind;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags?: string[];
  tasks: SpeakingTask[];
}

// ---------------------------------------------------------------------------
// Client-safe variants (model answers + grading keywords stripped)
// ---------------------------------------------------------------------------

export type SafeMatchSpeakingTask = MatchSpeakingTask;
export type SafeOpenSpeakingTask = Omit<
  OpenSpeakingTask,
  "modelAnswer" | "modelAnswerTranslation" | "checklist"
> & {
  /** Checklist without the grading keywords. */
  checklist: { id: string; label: string }[];
};
export type SafeSpeakingTask = SafeMatchSpeakingTask | SafeOpenSpeakingTask;
export type SafeSpeakingActivity = Omit<SpeakingActivity, "tasks"> & {
  tasks: SafeSpeakingTask[];
};

// ---------------------------------------------------------------------------
// Conversation simulator scenarios
// ---------------------------------------------------------------------------

export type ConversationLevel = "beginner" | "intermediate" | "advanced";

export interface ScenarioLevelSpec {
  level: ConversationLevel;
  /** Extra steering for the AI partner at this level. */
  partnerInstructions: string;
  /** Level-appropriate useful expressions (help panel). */
  suggestedPhrases: string[];
  /** The partner's opening line. */
  opening: string;
  /** Authored partner turns for the offline fallback engine. */
  fallbackTurns: string[];
  /** Generic acknowledgments mixed into fallback replies. */
  acknowledgments: string[];
  turnsTarget: number;
}

export interface ConversationScenario {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  description: string;
  category: "everyday" | "services" | "travel" | "professional";
  partner: { name: string; role: string };
  setting: string;
  learnerGoal: string;
  /** What the learner should communicate (measured goal coverage). */
  goalKeywords: string[];
  levels: [ScenarioLevelSpec, ScenarioLevelSpec, ScenarioLevelSpec];
}

export const SCENARIO_CATEGORY_LABELS: Record<ConversationScenario["category"], string> = {
  everyday: "Everyday life",
  services: "Shops & services",
  travel: "Travel",
  professional: "Work & career",
};

// ---------------------------------------------------------------------------
// Pronunciation practice
// ---------------------------------------------------------------------------

export type PronunciationCategory = "stress" | "sounds" | "rhythm" | "intonation";

export const PRONUNCIATION_CATEGORY_META: Record<
  PronunciationCategory,
  { name: string; tagline: string }
> = {
  stress: { name: "Word stress", tagline: "Which syllable carries the weight." },
  sounds: { name: "Sound differences", tagline: "Minimal pairs your ears and mouth must separate." },
  rhythm: { name: "Sentence rhythm", tagline: "Content words ring, function words fade." },
  intonation: { name: "Intonation", tagline: "Rising and falling melody — meaning in motion." },
};

export interface MinimalPair {
  word: string;
  meaning: string;
  /** How to hear the difference. */
  contrast: string;
}

export interface PronunciationItem {
  id: string;
  category: PronunciationCategory;
  title: string;
  explanation: string;
  /** The text to say aloud (TTS model + transcript match target). */
  targetText: string;
  /** Visual cue: stress pattern, arrows, rhythm dots. */
  visualCue: string;
  tip: string;
  minimalPairs?: MinimalPair[];
}

// ---------------------------------------------------------------------------
// Feedback contract — measured results vs AI suggestions
// ---------------------------------------------------------------------------

export type FeedbackDimension =
  | "relevance"
  | "construction"
  | "grammar"
  | "vocabulary"
  | "completeness"
  | "fluency";

export const DIMENSION_LABELS: Record<FeedbackDimension, string> = {
  relevance: "Response relevance",
  construction: "Sentence construction",
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  completeness: "Completeness",
  fluency: "Fluency indicators",
};

/** Deterministic metrics computed from the transcript + recording duration. */
export interface MeasuredFeedback {
  durationMs: number;
  wordCount: number;
  sentenceCount: number;
  avgSentenceWords: number;
  wordsPerMinute: number;
  fillerCount: number;
  fillersPerMinute: number;
  fillersFound: string[];
  repeatedPhrases: string[];
  uniqueWordRatio: number;
  checklistCovered: { id: string; label: string; covered: boolean; matched: string[] }[];
  checklistCoverage: number;
  topicKeywordHits: string[];
  targetWordsUsed: string[];
  grammarIssues: {
    original: string;
    corrected: string;
    explanation: string;
    category: string;
  }[];
  intelligibility: {
    available: boolean;
    heard: string;
    matchScore: number;
    /** Honest wording: transcript match, never phoneme accuracy. */
    note: string;
  } | null;
  scores: Partial<Record<FeedbackDimension, number>>;
  overall: number;
  /** True when no transcript was available (self-assessed attempt). */
  selfAssessed: boolean;
}

export interface AiSuggestion {
  instead: string;
  say: string;
}

/** AI coach output — always labeled, never mixed into measured scores. */
export interface AiCoachSuggestions {
  source: "ai";
  disclaimer: string;
  betterExpressions: AiSuggestion[];
  notes: string[];
}

export const AI_DISCLAIMER =
  "AI coach suggestions are generated by a language model from your transcript. They are ideas to consider, not measured results — the scores above are computed from your actual words.";

export const ACCENT_DISCLAIMER =
  "Accents are not errors. Match scores compare text only — a regional accent that the recogniser still understands is a success.";

/** End-of-conversation coach report (AI section + measured section). */
export interface ConversationCoachFeedback {
  strongPoints: string[];
  mistakes: { said: string; correction: string; note: string }[];
  betterAlternatives: { instead: string; say: string }[];
  newVocabulary: { word: string; meaning: string; example: string }[];
  revisionFocus: string[];
  followUpTask: string;
}

export interface ConversationMeasured {
  turns: number;
  learnerTurns: number;
  wordCount: number;
  avgWordsPerTurn: number;
  durationMs: number;
  fillerCount: number;
  grammarIssues: number;
  questionsAsked: number;
  goalKeywordsHit: string[];
  goalCoverage: number;
  score: number;
}

// ---------------------------------------------------------------------------
// Settings & answer payloads
// ---------------------------------------------------------------------------

export type SttProviderSetting = "auto" | "server" | "browser" | "manual";

export const STT_PROVIDER_META: Record<
  SttProviderSetting,
  { name: string; description: string }
> = {
  auto: {
    name: "Automatic",
    description: "Server transcription with a typed fallback when unavailable.",
  },
  server: {
    name: "Server transcription",
    description: "Audio is sent to the TalkSy server, transcribed, and immediately discarded. Best accuracy.",
  },
  browser: {
    name: "In-browser recognition",
    description: "Live transcription by your browser's speech recognition, where supported. Audio never leaves your device.",
  },
  manual: {
    name: "Typed responses only",
    description: "No microphone. You type what you said — every exercise still works.",
  },
};

/** Submitted to POST /api/speaking/attempt. */
export type SpeakingSubmission =
  | {
      mode: "transcript";
      /** Which provider produced the transcript. */
      provider: "server" | "browser" | "manual";
      transcript: string;
      durationMs: number;
    }
  | {
      mode: "self-assessed";
      /** Learner replayed their recording and confirmed a clean take. */
      provider: "self";
      durationMs: number;
    };

export const RETENTION_OPTIONS = [
  { days: 0, label: "Do not store transcripts" },
  { days: 7, label: "Keep transcripts for 7 days" },
  { days: 30, label: "Keep transcripts for 30 days" },
  { days: 90, label: "Keep transcripts for 90 days (recommended)" },
  { days: 365, label: "Keep transcripts for 1 year" },
];
