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
// Lesson blocks (29 structured block types)
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

/** An example sentence with an optional support translation and teaching note. */
export interface DetailedExample {
  english: string;
  /** Support translation (optional — English stays the primary language). */
  translation?: string;
  /** Why this example works / what to notice in it. */
  note?: string;
  /** Life domain the example is drawn from (everyday, school, work, …). */
  domain?: string;
}

export interface ExampleBlock {
  type: "example";
  title?: string;
  items: DetailedExample[];
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
  /** Guided sets offer hints per question; independent sets hold answers back. */
  variant?: "guided" | "independent";
  /** One-line teaching note shown under the set title. */
  note?: string;
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

// ---------------------------------------------------------------------------
// Teaching-structure blocks (PROMPT 35 lesson standard)
// ---------------------------------------------------------------------------

/** Lesson introduction: what the learner is about to study and what they
 * should already be able to do (prerequisite knowledge recap). */
export interface LessonIntroBlock {
  type: "lesson-intro";
  title?: string;
  text: string;
  /** "Before you start" — abilities from earlier lessons this builds on. */
  beforeYouStart?: string[];
}

/** Step-by-step teaching: a complex concept broken into small parts. */
export interface TeachingStep {
  title: string;
  text: string;
  examples?: DetailedExample[];
}

export interface StepsBlock {
  type: "steps";
  title: string;
  intro?: string;
  steps: TeachingStep[];
}

/** Real-life usage: where the concept appears in natural communication. */
export interface UsageItem {
  situation: string;
  example: string;
  note?: string;
}

export interface UsageBlock {
  type: "usage";
  title?: string;
  text?: string;
  items: UsageItem[];
}

/** Comparison of two similar concepts to prevent confusion. */
export interface ComparisonRow {
  aspect: string;
  left: string;
  right: string;
}

export interface ComparisonBlock {
  type: "comparison";
  title: string;
  intro?: string;
  /** Column headers, e.g. ["Short vowels", "Long vowels"]. */
  columns: [string, string];
  rows: ComparisonRow[];
  /** One-sentence takeaway after the table. */
  verdict?: string;
}

/** Common mistakes: incorrect sentence, corrected sentence, reason. */
export interface MistakeItem {
  wrong: string;
  right: string;
  reason: string;
}

export interface MistakesBlock {
  type: "mistakes";
  title?: string;
  items: MistakeItem[];
}

/** Four-skill integration: reading, writing, listening and speaking tasks
 * for the same concept in one tabbed classroom card. */
export interface FourSkillsBlock {
  type: "four-skills";
  title?: string;
  reading: {
    text: string;
    task?: string;
  };
  writing: {
    task: string;
    /** Sentence starters or a word bank to scaffold the writing. */
    guide?: string[];
    /** Model answer revealed after the learner writes. */
    model?: string;
  };
  listening: {
    /** Script spoken via browser speech synthesis. */
    script: string;
    task?: string;
  };
  speaking: {
    task: string;
    /** Sentence frames the learner can say out loud. */
    frames?: string[];
    /** Self-check points after speaking. */
    checklist?: string[];
  };
}

/** Lesson summary: the most important takeaways. */
export interface SummaryBlock {
  type: "summary";
  title?: string;
  points: string[];
}

 /** Revision: quick recall questions on earlier chapters (self-checked). */
export interface RevisionItem {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Where this comes from, e.g. "Chapter 02 · English Alphabet". */
  from?: string;
}

export interface RevisionBlock {
  type: "revision";
  title?: string;
  intro?: string;
  items: RevisionItem[];
}

/** Optional multilingual support: validated Urdu/Hindi glosses for key
 * sentences. English remains the primary learning language; translations
 * are hand-reviewed entries from the production glossary. */
export interface LanguageSupportEntry {
  english: string;
  /** Urdu (اردو) gloss — must exist in the validated glossary. */
  ur?: string;
  /** Hindi (हिन्दी) gloss — must exist in the validated glossary. */
  hi?: string;
}

export interface LanguageSupportBlock {
  type: "language-support";
  title?: string;
  note?: string;
  entries: LanguageSupportEntry[];
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
  | ChallengeBlock
  | LessonIntroBlock
  | StepsBlock
  | UsageBlock
  | ComparisonBlock
  | MistakesBlock
  | FourSkillsBlock
  | SummaryBlock
  | RevisionBlock
  | LanguageSupportBlock;

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
  | "speak-response"
  // PROMPT 36 additions:
  | "grammar-identify"
  | "vocab-match"
  | "spelling";

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
  /** PROMPT 36: suggested revision lesson shown in smart feedback — links
   * to a real lesson in the app (programme lesson slug or core lesson slug). */
  revisionLesson?: {
    slug: string;
    title?: string;
    reason: string;
  };
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

/** PROMPT 36: Grammar identification — label the grammatical job of a
 * highlighted word (or find it) inside a real sentence. Graded like MCQ but
 * presented as a grammar-analysis task with a taxonomy label. */
export interface GrammarIdentifyExercise extends ExerciseCommon {
  type: "grammar-identify";
  /** The sentence under analysis. */
  sentence: string;
  /** The word or phrase the question asks about — must appear in `sentence`
   * and is highlighted in the UI. */
  focus: string;
  /** The analysis question, e.g. "What is the job of the highlighted word?" */
  question: string;
  /** Label set name for the UI, e.g. "sentence roles" or "parts of speech". */
  taxonomy?: string;
  options: ExerciseOption[];
  correctOptionId: string;
}

/** PROMPT 36: Vocabulary matching — pair words with their meanings. A
 * dedicated vocabulary component (words with part of speech on the left,
 * definitions on the right); grading mirrors `match`. */
export interface VocabMatchExercise extends ExerciseCommon {
  type: "vocab-match";
  /** Left column: target words. */
  words: { id: string; word: string; partOfSpeech?: string }[];
  /** Right column: meanings (one per word, plus none extra). */
  meanings: { id: string; meaning: string }[];
  /** Correct word → meaning pairings. */
  pairs: { wordId: string; meaningId: string }[];
}

/** PROMPT 36: Spelling — a sentence contains one misspelled word; the learner
 * spots it and types the correct spelling (optionally hearing it first). */
export interface SpellingExercise extends ExerciseCommon {
  type: "spelling";
  /** Sentence containing the misspelling. */
  sentence: string;
  /** The misspelled form exactly as it appears in the sentence. */
  misspelled: string;
  /** Correct spelling(s) of the word. */
  acceptedAnswers: string[];
  /** Optional TTS text (usually the sentence) so the learner can listen for
   * the correct spelling. */
  audioText?: string;
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
  | SentenceBuildExercise
  | GrammarIdentifyExercise
  | VocabMatchExercise
  | SpellingExercise;

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
  | { type: "mcq" | "read-answer" | "grammar-identify"; optionId: string }
  | { type: "multi-select"; optionIds: string[] }
  | { type: "match"; pairs: { leftId: string; rightId: string }[] }
  | { type: "vocab-match"; pairs: { wordId: string; meaningId: string }[] }
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
        | "spelling"
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

/* ========================================================================== */
/* Structured-course layer (P1 Foundations + A1/A2 unit courses)              */
/*                                                                            */
/* A parallel content architecture to the sections-based engine lessons      */
/* above: unit-of-study courses where every lesson is a flat, fully-taught   */
/* object (vocabulary, dialogue, exercises with phases) — and, for the       */
/* 17-section beginner template, concept explanation, teaching steps,        */
/* example banks, real-life application, common mistakes, revision and       */
/* homework. Consumed by the curriculum view layer (`view.ts`), the lesson   */
/* flow builder, the authoring validator, the marketing statistics and the   */
/* admin content sync.                                                        */
/* ========================================================================== */

/** The seven exercise phases of a structured lesson, in template order. */
export type ExercisePhase =
  | "guided"
  | "independent"
  | "speaking"
  | "listening"
  | "reading"
  | "writing"
  | "assessment";

/** One vocabulary card: term, dictionary-style tag, meaning, example. */
export interface VocabItem {
  id: string;
  term: string;
  pos: string;
  definition: string;
  example: string;
}

/** A model conversation attached to a lesson. */
export interface Dialogue {
  title: string;
  context: string;
  lines: Array<{ speaker: string; text: string }>;
}

/** Section 4 — the concept in one sentence, then explained in paragraphs. */
export interface ConceptSection {
  definition: string;
  explanation: string[];
}

/** Section 5 — one card per teaching step. */
export interface TeachingStepCard {
  title: string;
  text: string;
  examples?: string[];
}

/** An incorrect → corrected pair with the reason. */
export interface ExampleCorrection {
  wrong: string;
  right: string;
  note?: string;
}

/** Section 6 — graded example bank. */
export interface ExampleBank {
  basic: string[];
  everyday: string[];
  questions?: string[];
  negatives?: string[];
  corrections: ExampleCorrection[];
}

/** Section 7 — where the concept appears in the learner's real life. */
export interface RealLifeSection {
  title: string;
  text: string;
  examples: string[];
}

/** Grammar focus of a lesson: friendly points with examples. */
export interface GrammarSection {
  title: string;
  points: Array<{
    heading: string;
    text: string;
    examples: string[];
  }>;
}

/** Section 12 — the lesson's reading passage. */
export interface Passage {
  title: string;
  text: string;
}

/** Section 14 — a common learner error, the fix, and the reason. */
export interface CommonMistake {
  wrong: string;
  right: string;
  why: string;
}

/** Section 15 — revision summary. */
export interface RevisionSection {
  keyPoints: string[];
  keyWords: string[];
  selfCheck: string[];
}

/** Section 17 — homework / further practice. */
export interface HomeworkSection {
  tasks: string[];
}

/** Section 3 — prerequisite knowledge, pointing at an earlier lesson. */
export interface Prerequisite {
  lessonSlug?: string;
  label: string;
}

/**
 * Content-governance metadata. AI-assisted content ships as "draft" and may
 * only leave draft through a named human reviewer (reviewedBy/reviewedAt).
 */
export interface ContentReview {
  status: "draft" | "reviewed" | "published";
  /** Semantic version of the content (x.y.z). */
  contentVersion: string;
  authoredBy: string;
  reviewedBy?: string;
  reviewedAt?: string;
  /** Catalogue item ids this lesson feeds (stXX-mXX-uXX-lXX). */
  catalogueTargets?: string[];
  reviewNotes?: string;
}

/* -------------------------------------------------------------------------- */
/* Course exercises — seven flat, self-checkable types with optional phase    */
/* -------------------------------------------------------------------------- */

interface CourseExerciseBase {
  id: string;
  /** Instruction shown to the learner. */
  prompt: string;
  /** Template phase; required in structured lessons. */
  phase?: ExercisePhase;
  /** The lesson passage a reading exercise is anchored to. */
  passageId?: string;
  hint?: string;
  explanation?: string;
}

export interface McqCourseExercise extends CourseExerciseBase {
  type: "mcq";
  options: string[];
  answerIndex: number;
}

export interface FillCourseExercise extends CourseExerciseBase {
  type: "fill";
  accepted: string[];
}

export interface OrderCourseExercise extends CourseExerciseBase {
  type: "order";
  answer: string;
}

export interface MatchCourseExercise extends CourseExerciseBase {
  type: "match";
  pairs: Array<{ left: string; right: string }>;
}

export interface ListenCourseExercise extends CourseExerciseBase {
  type: "listen";
  mode: "choice" | "type";
  audioText: string;
  wordId?: string;
  options?: string[];
  answerIndex?: number;
  accepted?: string[];
}

export interface SpeakCourseExercise extends CourseExerciseBase {
  type: "speak";
  targetText: string;
}

export interface WriteCourseExercise extends CourseExerciseBase {
  type: "write";
  modelAnswer: string;
}

export type CourseExercise =
  | McqCourseExercise
  | FillCourseExercise
  | OrderCourseExercise
  | MatchCourseExercise
  | ListenCourseExercise
  | SpeakCourseExercise
  | WriteCourseExercise;

/* -------------------------------------------------------------------------- */
/* Course lessons, units and levels                                           */
/* -------------------------------------------------------------------------- */

/**
 * A unit-of-study lesson (legacy A1/A2 shape): flat teaching object with
 * vocabulary, optional dialogue/grammar/passage and phased exercises.
 */
export interface CourseLesson {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  minutes: number;
  skills: Skill[];
  vocab: VocabItem[];
  dialogue?: Dialogue;
  grammar?: GrammarSection;
  passage?: Passage;
  exercises: CourseExercise[];
}

/**
 * The 17-section beginner template on top of the legacy shape: concept,
 * teaching steps, example bank, real-life application, common mistakes,
 * revision, homework and governance metadata.
 */
export interface StructuredCourseLesson extends CourseLesson {
  /** Section 1 */
  introduction?: string;
  /** Section 2 */
  objectives?: string[];
  /** Section 3 */
  prerequisites?: Prerequisite[];
  /** Section 4 — present ⇔ the lesson follows the structured template. */
  concept: ConceptSection;
  /** Section 5 */
  teachingSteps?: TeachingStepCard[];
  /** Section 6 */
  exampleBank?: ExampleBank;
  /** Section 7 */
  realLife?: RealLifeSection;
  /** Section 14 */
  commonMistakes?: CommonMistake[];
  /** Section 15 */
  revision?: RevisionSection;
  /** Section 17 */
  homework?: HomeworkSection;
  /** Governance metadata (never marks AI content reviewed). */
  content?: ContentReview;
}

/** A unit of study: 3–5 lessons sharing a theme. */
export interface CourseUnit {
  slug: string;
  code: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

/** A course level on the learner path (P1 → A1 → A2 → B1 → B2 → C1). */
export interface CourseLevel {
  code: string;
  name: string;
  cefrLabel: string;
  tagline: string;
  description: string;
  status: "available" | "in-development";
  units: CourseUnit[];
}

/* -------------------------------------------------------------------------- */
/* Runtime guards                                                             */
/* -------------------------------------------------------------------------- */

/** True when the lesson follows the structured 17-section template. */
export function isStructuredLesson(lesson: CourseLesson): lesson is StructuredCourseLesson {
  return (
    typeof lesson === "object" &&
    lesson !== null &&
    "concept" in lesson &&
    (lesson as Partial<StructuredCourseLesson>).concept !== undefined
  );
}

/**
 * Auto-gradable in the practice engine. Speaking and writing are
 * self-assessed practice — they are never auto-graded.
 */
export function isGradableExercise(exercise: CourseExercise): boolean {
  return exercise.type !== "speak" && exercise.type !== "write";
}

/** Finds a course lesson by slug across the given levels. */
export function findLesson(slug: string, levels: CourseLevel[]): CourseLesson | undefined {
  for (const level of levels) {
    for (const unit of level.units) {
      const found = unit.lessons.find((l) => l.slug === slug);
      if (found) return found;
    }
  }
  return undefined;
}
