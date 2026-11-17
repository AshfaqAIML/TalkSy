/**
 * PROMPT 36 practice-bank authoring helpers.
 *
 * One terse builder per exercise type plus the full-feedback helper. The
 * bank files (bank-pre-a1.ts … bank-c1.ts) stay readable and reviewable;
 * scripts/seed-programme.ts upserts them into the CMS question bank with
 * chapter/lesson/topic metadata.
 */

import type {
  Difficulty,
  Exercise,
  ExerciseFeedback,
  Skill,
} from "@/data/curriculum/types";

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

export type ExerciseSpec = DistributiveOmit<Exercise, "id">;

export interface QOpts {
  skill?: Skill;
  difficulty?: Difficulty;
  hints?: string[];
  tags?: string[];
}

/** Extra feedback fields beyond correctAnswer + explanation. */
export interface FullFeedback {
  whyWrong?: string;
  rule?: [string, string];
  similar?: [string, string];
  /** [lessonSlug, reason] or [lessonSlug, reason, lessonTitle]. */
  revise?: [string, string] | [string, string, string];
}

/** Full smart feedback: correct answer, explanation, why-wrong, grammar rule,
 * similar example, suggested revision lesson (PROMPT 36 §3). */
export function fbx(correctAnswer: string, explanation: string, extra: FullFeedback = {}): ExerciseFeedback {
  return {
    correctAnswer,
    explanation,
    ...(extra.whyWrong ? { whyWrong: extra.whyWrong } : {}),
    ...(extra.rule ? { grammarRule: { title: extra.rule[0], rule: extra.rule[1] } } : {}),
    ...(extra.similar ? { similarExample: { english: extra.similar[0], translation: extra.similar[1] } } : {}),
    ...(extra.revise
      ? {
          revisionLesson: {
            slug: extra.revise[0],
            reason: extra.revise[1],
            ...(extra.revise[2] ? { title: extra.revise[2] } : {}),
          },
        }
      : {}),
  };
}

// --- option types -----------------------------------------------------------

type Opt = [string, string];

function opts(options: Opt[]): { id: string; text: string }[] {
  return options.map(([id, text]) => ({ id, text }));
}

// --- builders ----------------------------------------------------------------

export function qMcq(
  prompt: string,
  options: Opt[],
  correctId: string,
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "mcq",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    options: opts(options),
    correctOptionId: correctId,
  };
}

export function qGid(
  prompt: string,
  sentence: string,
  focus: string,
  question: string,
  taxonomy: string,
  options: Opt[],
  correctId: string,
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "grammar-identify",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    sentence,
    focus,
    question,
    taxonomy,
    options: opts(options),
    correctOptionId: correctId,
  };
}

export function qFill(
  prompt: string,
  sentence: string,
  acceptedAnswers: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "fill-blank",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    sentence,
    acceptedAnswers,
  };
}

export function qCs(
  prompt: string,
  sentenceStart: string,
  acceptedAnswers: string[],
  sentenceEnd: string | undefined,
  keywords: string[] | undefined,
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "complete-sentence",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    sentenceStart,
    ...(sentenceEnd ? { sentenceEnd } : {}),
    acceptedAnswers,
    ...(keywords ? { keywords } : {}),
  };
}

export function qCorr(
  prompt: string,
  incorrectSentence: string,
  acceptedAnswers: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "correct-mistake",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    incorrectSentence,
    acceptedAnswers,
  };
}

export function qReord(
  prompt: string,
  correctSentence: string,
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "rearrange",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    correctTokens: correctSentence.split(" "),
    correctSentence,
  };
}

export function qSb(
  prompt: string,
  tiles: string[],
  acceptedSentences: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "sentence-build",
    difficulty: o.difficulty ?? "hard",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    tiles,
    acceptedSentences,
  };
}

export function qMatch(
  prompt: string,
  left: Opt[],
  right: Opt[],
  pairs: [string, string][],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "match",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "vocabulary",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    leftItems: opts(left),
    rightItems: opts(right),
    pairs: pairs.map(([leftId, rightId]) => ({ leftId, rightId })),
  };
}

export function qVm(
  prompt: string,
  words: [string, string, string?][],
  meanings: [string, string][],
  pairs: [string, string][],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "vocab-match",
    difficulty: o.difficulty ?? "easy",
    skill: o.skill ?? "vocabulary",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    words: words.map(([id, word, partOfSpeech]) => ({
      id,
      word,
      ...(partOfSpeech ? { partOfSpeech } : {}),
    })),
    meanings: meanings.map(([id, meaning]) => ({ id, meaning })),
    pairs: pairs.map(([wordId, meaningId]) => ({ wordId, meaningId })),
  };
}

export function qSpell(
  prompt: string,
  sentence: string,
  misspelled: string,
  acceptedAnswers: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
  audioText?: string,
): ExerciseSpec {
  return {
    type: "spelling",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "vocabulary",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    sentence,
    misspelled,
    acceptedAnswers,
    ...(audioText ? { audioText } : {}),
  };
}

export function qTrans(
  prompt: string,
  direction: "to-english" | "from-english",
  source: string,
  acceptedAnswers: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "translate",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "vocabulary",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    direction,
    source,
    acceptedAnswers,
  };
}

export function qShort(
  prompt: string,
  question: string,
  acceptedAnswers: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
  keywords?: string[],
): ExerciseSpec {
  return {
    type: "short-answer",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "grammar",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    question,
    acceptedAnswers,
    ...(keywords ? { keywords } : {}),
  };
}

export function qRd(
  prompt: string,
  passageTitle: string,
  passage: string,
  question: string,
  options: Opt[],
  correctId: string,
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "read-answer",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "reading",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    passageTitle,
    passage,
    question,
    options: opts(options),
    correctOptionId: correctId,
  };
}

export function qLis(
  prompt: string,
  audioText: string,
  question: string,
  acceptedAnswers: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
  keywords?: string[],
): ExerciseSpec {
  return {
    type: "listen-answer",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "listening",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    audioText,
    question,
    acceptedAnswers,
    ...(keywords ? { keywords } : {}),
  };
}

export function qDict(
  prompt: string,
  audioText: string,
  acceptedAnswers: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "dictation",
    difficulty: o.difficulty ?? "medium",
    skill: o.skill ?? "listening",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    audioText,
    acceptedAnswers,
  };
}

export function qWrite(
  prompt: string,
  situation: string,
  minWords: number,
  mustInclude: string[] | undefined,
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "write-response",
    difficulty: o.difficulty ?? "hard",
    skill: o.skill ?? "writing",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    situation,
    minWords,
    ...(mustInclude ? { mustInclude } : {}),
  };
}

export function qSpeak(
  prompt: string,
  situation: string,
  targetPhrases: string[],
  mustSay: string[],
  feedback: ExerciseFeedback,
  o: QOpts = {},
): ExerciseSpec {
  return {
    type: "speak-response",
    difficulty: o.difficulty ?? "hard",
    skill: o.skill ?? "speaking",
    prompt,
    hints: o.hints ?? [],
    feedback,
    ...(o.tags ? { tags: o.tags } : {}),
    situation,
    targetPhrases,
    mustSay,
  };
}

// --- bank entry metadata ------------------------------------------------------

export interface BankEntry {
  /** Chapter number 6–56 (chapters 1–5 already have rich v2 pools). */
  chapter: number;
  /** Lesson order (1-based) inside the chapter — the lesson whose objective
   * this question tests; becomes lessonSlug ch-XX-l-YY. */
  lesson: number;
  /** Primary topic tag. */
  topic: string;
  exercise: ExerciseSpec;
}

export function entry(chapter: number, lesson: number, topic: string, exercise: ExerciseSpec): BankEntry {
  return { chapter, lesson, topic, exercise };
}

/** Lesson slug for a chapter/lesson pair. */
export function lessonSlugOf(chapter: number, lesson: number): string {
  return `ch-${String(chapter).padStart(2, "0")}-l-${String(lesson).padStart(2, "0")}`;
}

/** Chapter slug for a chapter number. */
export function chapterSlugOf(chapter: number): string {
  return `ch-${String(chapter).padStart(2, "0")}`;
}
