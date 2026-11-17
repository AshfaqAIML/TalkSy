/**
 * TOEFL Speaking Practice Library — service layer (PROMPT 50).
 *
 * Serves safe projections (reference transcripts of locked repeat items and
 * interview sample responses never leave the server before submission),
 * records speaking attempts, and returns the revealed review material.
 *
 * AUDIO MODEL: the exercise's own sentence is spoken through on-device
 * speech synthesis (the safe projection ships the audio definition, exactly
 * like the PROMPT 49 listening bank); the learner's recording never leaves
 * the browser — only the transcript travels to the evaluation engine.
 *
 * TRANSCRIPT GATING: the reference transcript of a repeat item is hidden
 * until submission — the learner repeats from memory, like the test — with
 * the single exception of difficulty-1 learning items, where shadow-reading
 * along is the point.
 */

import { db } from "@/lib/db";
import {
  TOEFL_SPEAKING_BANK,
  speakingExerciseBySlug,
  TOEFL_SPEAKING_TASK_LABELS,
  TOEFL_SPEAKING_DIFFICULTY_LABELS,
  TOEFL_REPEAT_FOCUS_LABELS,
  TOEFL_ACCENT_LABELS,
  TOEFL_INTERVIEW_CRITERIA,
  type ToeflRepeatItem,
  type ToeflInterviewItem,
  type ToeflSpeakingExercise,
} from "@/data/exams/toefl/speaking-bank";

// ---------------------------------------------------------------------------
// Safe projections
// ---------------------------------------------------------------------------

export type SafeRepeatItem = {
  slug: string;
  title: string;
  taskType: "listen-repeat";
  taskLabel: string;
  focus: ToeflRepeatItem["focus"];
  focusLabel: string;
  difficulty: number;
  difficultyLabel: string;
  windowSec: number;
  wordCount: number;
  /** The spoken sentence — this IS the audio definition (speech synthesis). */
  sentence: string;
  speaker: { id: string; name: string; role: string; accent: string };
  accentLabel: string;
  /** null unless learningMode (d1): transcript visible during playback by design. */
  transcript: string | null;
  transcriptPolicy: "locked-until-submit" | "open-learning";
  source: string;
};

export type SafeInterviewItem = {
  slug: string;
  title: string;
  taskType: "take-interview";
  taskLabel: string;
  question: string;
  topic: string;
  difficulty: number;
  difficultyLabel: string;
  prepSec: number;
  answerSec: number;
  followUp: string | null;
  vocabulary: { word: string; gloss: string }[];
  feedbackCriteria: { key: string; label: string; description: string }[];
  source: string;
};

export type SafeSpeakingExercise = SafeRepeatItem | SafeInterviewItem;

export function toSafeSpeakingExercise(ex: ToeflSpeakingExercise): SafeSpeakingExercise {
  if (ex.taskType === "listen-repeat") {
    const open = ex.learningMode === true;
    return {
      slug: ex.slug,
      title: ex.title,
      taskType: "listen-repeat",
      taskLabel: TOEFL_SPEAKING_TASK_LABELS["listen-repeat"],
      focus: ex.focus,
      focusLabel: TOEFL_REPEAT_FOCUS_LABELS[ex.focus],
      difficulty: ex.difficulty,
      difficultyLabel: TOEFL_SPEAKING_DIFFICULTY_LABELS[ex.difficulty],
      windowSec: ex.windowSec,
      wordCount: ex.wordCount,
      sentence: ex.sentence,
      speaker: { ...ex.speaker, accent: TOEFL_ACCENT_LABELS[ex.speaker.accent] },
      accentLabel: TOEFL_ACCENT_LABELS[ex.accent],
      transcript: open ? ex.transcript : null,
      transcriptPolicy: open ? "open-learning" : "locked-until-submit",
      source: ex.source,
    };
  }
  return {
    slug: ex.slug,
    title: ex.title,
    taskType: "take-interview",
    taskLabel: TOEFL_SPEAKING_TASK_LABELS["take-interview"],
    question: ex.question,
    topic: ex.topic,
    difficulty: ex.difficulty,
    difficultyLabel: TOEFL_SPEAKING_DIFFICULTY_LABELS[ex.difficulty],
    prepSec: ex.prepSec,
    answerSec: ex.answerSec,
    followUp: ex.followUp ?? null,
    vocabulary: ex.vocabulary.map((v) => ({ ...v })),
    feedbackCriteria: TOEFL_INTERVIEW_CRITERIA.map((c) => ({ ...c })),
    source: ex.source,
  };
}

export async function getSafeSpeakingExerciseBySlug(slug: string): Promise<SafeSpeakingExercise | null> {
  const ex = speakingExerciseBySlug(slug);
  return ex ? toSafeSpeakingExercise(ex) : null;
}

/** Library index metadata for the public listing (no sample responses). */
export function speakingLibraryIndex() {
  return TOEFL_SPEAKING_BANK.map((ex) => {
    const base = {
      slug: ex.slug,
      title: ex.title,
      taskType: ex.taskType,
      taskLabel: TOEFL_SPEAKING_TASK_LABELS[ex.taskType],
      difficulty: ex.difficulty,
      difficultyLabel: TOEFL_SPEAKING_DIFFICULTY_LABELS[ex.difficulty],
      source: ex.source,
    };
    if (ex.taskType === "listen-repeat") {
      return {
        ...base,
        taskType: "listen-repeat" as const,
        focus: ex.focus,
        focusLabel: TOEFL_REPEAT_FOCUS_LABELS[ex.focus],
        windowSec: ex.windowSec,
        wordCount: ex.wordCount,
        accentLabel: TOEFL_ACCENT_LABELS[ex.accent],
        learningMode: ex.learningMode === true,
      };
    }
    return { ...base, taskType: "take-interview" as const, topic: ex.topic, answerSec: ex.answerSec };
  });
}

// ---------------------------------------------------------------------------
// Attempt recording
// ---------------------------------------------------------------------------

export async function recordRepeatAttempt(
  userId: string,
  item: ToeflRepeatItem,
  input: { transcript: string; durationSec: number; mode: "exam" | "practice" },
  analysis: import("./speaking-evaluate").RepetitionAnalysis,
): Promise<string> {
  const attempt = await db.toeflSpeakingBankAttempt.create({
    data: {
      userId,
      itemSlug: item.slug,
      kind: "listen-repeat",
      topic: item.focus,
      difficulty: item.difficulty,
      mode: input.mode,
      transcript: input.transcript.slice(0, 4000),
      wordCount: analysis.spokenWords,
      durationSec: Math.max(0, Math.min(600, Math.round(input.durationSec || 0))),
      measured: JSON.stringify(analysis),
      overall: analysis.accuracy,
      timeSpentSec: Math.max(0, Math.min(1800, Math.round(input.durationSec || 0))),
    },
  });
  return attempt.id;
}

export async function recordInterviewAttempt(
  userId: string,
  item: ToeflInterviewItem,
  input: { transcript: string; durationSec: number; mode: "exam" | "practice" },
  evaluation: import("./speaking-evaluate").InterviewEvaluation,
): Promise<string> {
  const attempt = await db.toeflSpeakingBankAttempt.create({
    data: {
      userId,
      itemSlug: item.slug,
      kind: "take-interview",
      topic: item.topic,
      difficulty: item.difficulty,
      mode: input.mode,
      transcript: input.transcript.slice(0, 8000),
      wordCount: evaluation.metrics.wordCount,
      durationSec: Math.max(0, Math.min(1800, Math.round(input.durationSec || 0))),
      measured: JSON.stringify(evaluation.metrics),
      overall: evaluation.status === "complete" ? evaluation.overall : 0,
      criteria: JSON.stringify(evaluation.criteria),
      aiAvailable: evaluation.aiAvailable,
      aiCommentary: evaluation.aiCommentary ? JSON.stringify(evaluation.aiCommentary) : null,
      timeSpentSec: Math.max(0, Math.min(1800, Math.round(input.durationSec || 0))),
    },
  });
  return attempt.id;
}

// ---------------------------------------------------------------------------
// The revealed review material (returned by the submit endpoints only)
// ---------------------------------------------------------------------------

export type RevealedRepeatReview = {
  transcript: string;
  analysisHints: string[];
};

export type RevealedInterviewReview = {
  sampleResponse: string;
  analysisNotes: string;
};

export function revealedRepeatReview(item: ToeflRepeatItem): RevealedRepeatReview {
  return { transcript: item.transcript, analysisHints: [...item.analysisHints] };
}

export function revealedInterviewReview(item: ToeflInterviewItem): RevealedInterviewReview {
  return { sampleResponse: item.sampleResponse, analysisNotes: item.analysisNotes };
}
