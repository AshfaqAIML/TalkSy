/**
 * TalkSy curriculum content model — "content as code".
 *
 * Lesson content lives in typed TypeScript files under src/data/curriculum/.
 * Every lesson is a list of sections; every section is a list of structured
 * blocks rendered by the reusable BlockRenderer. Exercises are standalone,
 * referenceable entities so the same exercise can appear in a practice block,
 * homework, or an approved assessment question bank.
 */

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

export type Difficulty = "easy" | "medium" | "hard" | "challenge";

export type Skill =
  | "vocabulary"
  | "grammar"
  | "listening"
  | "speaking"
  | "reading"
  | "writing";

export type LevelId = "pre-a1" | "a1" | "grammar-core" | "a2";

/** A parallel translation pair used across blocks and feedback. */
export interface TranslationPair {
  english: string;
  translation: string; // learner-support language (Spanish in the starter library)
}

// ---------------------------------------------------------------------------
// Grammatical annotation (shared by Grammar School blocks and the Lab)
// ---------------------------------------------------------------------------

export type GrammaticalRole =
  | "subject"
  | "verb"
  | "object"
  | "complement"
  | "modifier"
  | "auxiliary"
  | "determiner"
  | "preposition"
  | "conjunction"
  | "negation"
  | "question-word"
  | "punctuation";

/** One word/token of a sentence together with its grammatical role. */
export interface AnnotatedToken {
  text: string;
  role: GrammaticalRole;
  /** Short explanation of this token's job in this particular sentence. */
  note?: string;
}

/** A sentence plus its structural annotation (pattern + per-token roles). */
export interface SentenceStructure {
  /** Pattern label, e.g. "S + V + O". */
  pattern: string;
  tokens: AnnotatedToken[];
}

// ---------------------------------------------------------------------------
// Lesson blocks (20 structured block types)
// ---------------------------------------------------------------------------

export interface TextBlock {
  type: "text";
  text: string;
  translation?: string;
}

export interface HeadingBlock {
  type: "heading";
  text: string;
  translation?: string;
}

export interface DefinitionBlock {
  type: "definition";
  term: string;
  partOfSpeech?: string;
  definition: string;
  translation?: string;
  example?: TranslationPair;
}

export interface ExampleBlock {
  type: "example";
  title?: string;
  items: TranslationPair[];
  note?: string;
}

export interface TableBlock {
  type: "table";
  title?: string;
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface GrammarRuleBlock {
  type: "grammar-rule";
  title: string;
  rule: string;
  explanation?: string;
  examples: TranslationPair[];
  exceptions?: string[];
}

export interface VocabWord {
  word: string;
  partOfSpeech: string;
  definition: string;
  translation: string;
  example?: TranslationPair;
}

export interface VocabularyListBlock {
  type: "vocabulary-list";
  title?: string;
  words: VocabWord[];
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export type DiagramVariant = "steps" | "pyramid" | "compare";

export interface DiagramBlock {
  type: "diagram";
  variant: DiagramVariant;
  title?: string;
  /** "steps": ordered flow with optional descriptions. */
  steps?: { label: string; description?: string }[];
  /** "pyramid": base-to-top stages, rendered bottom-up. */
  levels?: { label: string; description?: string }[];
  /** "compare": two labelled columns of bullet points. */
  columns?: { title: string; items: string[] }[];
  caption?: string;
}

export interface AudioBlock {
  type: "audio";
  label?: string;
  /** The text spoken aloud via speech synthesis. */
  text: string;
  translation?: string;
  /** Speech rate multiplier (0.6 = slow, 1 = normal). */
  rate?: number;
}

export interface VideoScene {
  heading: string;
  text: string;
  emoji?: string;
}

export interface VideoBlock {
  type: "video";
  title: string;
  description?: string;
  /** Scene player: auto-advancing scenes with narration, styled as a video. */
  scenes: VideoScene[];
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation?: string;
}

export interface DialogueBlock {
  type: "dialogue";
  title?: string;
  context?: string;
  lines: DialogueLine[];
}

export interface NoteBlock {
  type: "note";
  title?: string;
  text: string;
}

export interface WarningBlock {
  type: "warning";
  title?: string;
  text: string;
}

export interface PracticeBlock {
  type: "practice";
  title?: string;
  exerciseIds: string[];
}

export interface HomeworkBlock {
  type: "homework";
  title?: string;
  tasks: string[];
}

/** Grammar School: renders one or more complete part-of-speech modules. */
export interface PosModuleBlock {
  type: "pos-module";
  moduleIds: string[]; // references src/data/grammar/parts-of-speech.ts
}

/** Grammar School: side-by-side tense comparison for two tenses. */
export interface TenseComparisonBlock {
  type: "tense-comparison";
  title?: string;
  /** Exactly two tense ids to compare (see src/data/grammar/tenses.ts). */
  tenseIds: [string, string];
  note?: string;
}

/** Grammar School: colour-coded sentence structure diagram. */
export interface SentenceAnatomyBlock {
  type: "sentence-anatomy";
  title?: string;
  sentence: SentenceStructure;
  showLabels?: boolean;
}

/** Sentence Lab: a timed or untimed accuracy challenge round. */
export interface ChallengeBlock {
  type: "challenge";
  title?: string;
  description?: string;
  exerciseIds: string[];
  /** Timed rounds show a countdown; accuracy still decides the score. */
  timed: boolean;
  seconds?: number;
}

export type LessonBlock =
  | TextBlock
  | HeadingBlock
  | DefinitionBlock
  | ExampleBlock
  | TableBlock
  | GrammarRuleBlock
  | VocabularyListBlock
  | ImageBlock
  | DiagramBlock
  | AudioBlock
  | VideoBlock
  | DialogueBlock
  | NoteBlock
  | WarningBlock
  | PracticeBlock
  | HomeworkBlock
  | PosModuleBlock
  | TenseComparisonBlock
  | SentenceAnatomyBlock
  | ChallengeBlock;

export type BlockType = LessonBlock["type"];

// ---------------------------------------------------------------------------
// Exercises (16 reusable types)
// ---------------------------------------------------------------------------

export type ExerciseType =
  | "mcq"
  | "multi-select"
  | "fill-blank"
  | "match"
  | "drag-drop"
  | "rearrange"
  | "sentence-build"
  | "complete-sentence"
  | "correct-mistake"
  | "translate"
  | "short-answer"
  | "listen-answer"
  | "dictation"
  | "read-answer"
  | "write-response"
  | "speak-response";

export interface ExerciseOption {
  id: string;
  text: string;
  translation?: string;
}

/** Post-submission feedback attached to every exercise. */
export interface ExerciseFeedback {
  /** Human-readable correct answer. */
  correctAnswer: string;
  explanation: string;
  /** Why a typical wrong answer is wrong. */
  whyWrong?: string;
  grammarRule?: { title: string; rule: string };
  similarExample?: TranslationPair;
}

interface ExerciseCommon {
  id: string;
  difficulty: Difficulty;
  skill: Skill;
  /** Instruction shown to the learner. */
  prompt: string;
  /** Progressive hints; each revealed hint is recorded in the attempt. */
  hints: string[];
  feedback: ExerciseFeedback;
  tags?: string[];
}

export interface McqExercise extends ExerciseCommon {
  type: "mcq";
  passage?: string;
  options: ExerciseOption[];
  correctOptionId: string;
}

export interface MultiSelectExercise extends ExerciseCommon {
  type: "multi-select";
  options: ExerciseOption[];
  correctOptionIds: string[];
}

export interface FillBlankExercise extends ExerciseCommon {
  type: "fill-blank";
  /** Sentence containing "___" where the blank is. */
  sentence: string;
  acceptedAnswers: string[];
}

export interface MatchExercise extends ExerciseCommon {
  type: "match";
  leftItems: ExerciseOption[];
  rightItems: ExerciseOption[];
  /** Correct left→right pairings. */
  pairs: { leftId: string; rightId: string }[];
}

export interface DragDropExercise extends ExerciseCommon {
  type: "drag-drop";
  categories: ExerciseOption[];
  items: { id: string; label: string; categoryId: string }[];
}

export interface RearrangeExercise extends ExerciseCommon {
  type: "rearrange";
  /** Tokens in the correct order; the UI scrambles them deterministically. */
  correctTokens: string[];
  /** Display form of the full correct sentence. */
  correctSentence: string;
}

export interface CompleteSentenceExercise extends ExerciseCommon {
  type: "complete-sentence";
  sentenceStart: string;
  sentenceEnd?: string;
  acceptedAnswers: string[];
  /** Alternative grading: all keywords must appear in the answer. */
  keywords?: string[];
}

export interface CorrectMistakeExercise extends ExerciseCommon {
  type: "correct-mistake";
  incorrectSentence: string;
  acceptedAnswers: string[];
}

export interface TranslateExercise extends ExerciseCommon {
  type: "translate";
  direction: "to-english" | "from-english";
  source: string;
  acceptedAnswers: string[];
}

export interface ShortAnswerExercise extends ExerciseCommon {
  type: "short-answer";
  question: string;
  acceptedAnswers: string[];
  keywords?: string[];
}

export interface ListenAnswerExercise extends ExerciseCommon {
  type: "listen-answer";
  audioText: string;
  question: string;
  acceptedAnswers: string[];
  keywords?: string[];
}

export interface DictationExercise extends ExerciseCommon {
  type: "dictation";
  audioText: string;
  acceptedAnswers: string[];
}

export interface ReadAnswerExercise extends ExerciseCommon {
  type: "read-answer";
  passageTitle?: string;
  passage: string;
  question: string;
  options: ExerciseOption[];
  correctOptionId: string;
}

export interface WriteResponseExercise extends ExerciseCommon {
  type: "write-response";
  situation: string;
  minWords: number;
  /** Words/phrases that must appear for full credit. */
  mustInclude?: string[];
}

export interface SpeakResponseExercise extends ExerciseCommon {
  type: "speak-response";
  situation: string;
  /** Phrases the learner should try to say (shown after submission). */
  targetPhrases: string[];
  /** Grading: transcript (or typed fallback) must contain all of these. */
  mustSay: string[];
}

/** Sentence Lab: build a sentence from word tiles (with distractors). */
export interface SentenceBuildExercise extends ExerciseCommon {
  type: "sentence-build";
  /** Word tiles: the tokens of every accepted sentence plus distractors. */
  tiles: string[];
  /** Every accepted token sequence (space-joined) — alternatives allowed. */
  acceptedSentences: string[];
  /** Structure annotation of the canonical answer for post-check inspection. */
  structure?: SentenceStructure;
}

export type Exercise =
  | McqExercise
  | MultiSelectExercise
  | FillBlankExercise
  | MatchExercise
  | DragDropExercise
  | RearrangeExercise
  | CompleteSentenceExercise
  | CorrectMistakeExercise
  | TranslateExercise
  | ShortAnswerExercise
  | ListenAnswerExercise
  | DictationExercise
  | ReadAnswerExercise
  | WriteResponseExercise
  | SpeakResponseExercise
  | SentenceBuildExercise;

/** Omit that distributes over unions. */
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

/** Keys that must never reach the client. */
type GradingKeys =
  | "feedback"
  | "correctOptionId"
  | "correctOptionIds"
  | "acceptedAnswers"
  | "pairs"
  | "keywords"
  | "mustInclude"
  | "mustSay"
  | "correctTokens"
  | "correctSentence"
  | "acceptedSentences"
  | "structure";

/** Drag-drop items without the answer (categoryId). */
export type SafeDragDropExercise = Omit<DragDropExercise, GradingKeys | "items"> & {
  items: { id: string; label: string }[];
};

/** Rearrange with pre-scrambled tokens instead of the correct order. */
export type SafeRearrangeExercise = Omit<RearrangeExercise, GradingKeys> & {
  tokens: string[];
};

/** Write-response without the required keywords / model answer. */
export type SafeWriteResponseExercise = Omit<WriteResponseExercise, GradingKeys>;

/** Speak-response without the grading keywords. */
export type SafeSpeakResponseExercise = Omit<SpeakResponseExercise, GradingKeys>;

/** Sentence-build: pre-scrambled tiles, no accepted sentences, no structure. */
export type SafeSentenceBuildExercise = Omit<SentenceBuildExercise, GradingKeys> & {
  tiles: string[];
};

/** Exercise payload sent to the client: all grading fields stripped. */
export type SafeExercise =
  | DistributiveOmit<
      Exclude<
        Exercise,
        DragDropExercise | RearrangeExercise | SentenceBuildExercise
      >,
      GradingKeys
    >
  | SafeDragDropExercise
  | SafeRearrangeExercise
  | SafeSentenceBuildExercise;

/** The client-safe variant of a given exercise type. */
export type SafeOf<T extends ExerciseType> = Extract<SafeExercise, { type: T }>;

// ---------------------------------------------------------------------------
// Answer payloads (validated server-side; never trusted from the client)
// ---------------------------------------------------------------------------

export type ExerciseAnswer =
  | { type: "mcq" | "read-answer"; optionId: string }
  | { type: "multi-select"; optionIds: string[] }
  | { type: "match"; pairs: { leftId: string; rightId: string }[] }
  | { type: "drag-drop"; placements: { itemId: string; categoryId: string }[] }
  | { type: "rearrange" | "sentence-build"; tokens: string[] }
  | {
      type:
        | "fill-blank"
        | "complete-sentence"
        | "correct-mistake"
        | "translate"
        | "short-answer"
        | "listen-answer"
        | "dictation"
        | "write-response"
        | "speak-response";
      text: string;
    };

// ---------------------------------------------------------------------------
// Lessons, units, levels
// ---------------------------------------------------------------------------

export interface LessonSection {
  id: string;
  title: string;
  blocks: LessonBlock[];
}

export interface LessonSummary {
  keyPoints: string[];
  vocabulary: string[];
}

export interface AssessmentSpec {
  /** Number of questions sampled from the bank. */
  questionCount: number;
  /** Pass threshold, 0–1. */
  passScore: number;
  /** Approved question bank: exercise ids from this lesson. */
  bank: string[];
}

export interface Lesson {
  slug: string;
  levelId: LevelId;
  unit: number;
  title: string;
  description: string;
  estimatedMinutes: number;
  sections: LessonSection[];
  summary: LessonSummary;
  assessment?: AssessmentSpec;
}

export interface Unit {
  number: number;
  title: string;
  description: string;
  lessonSlugs: string[];
}

export interface Level {
  id: LevelId;
  name: string;
  tagline: string;
  units: Unit[];
}

export const DIFFICULTY_POINTS: Record<Difficulty, number> = {
  easy: 10,
  medium: 20,
  hard: 30,
  challenge: 40,
};
