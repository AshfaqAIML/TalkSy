/**
 * TOEFL Listening Practice Library — service layer (PROMPT 49).
 *
 * Serves safe projections (answer keys, lure indices, keywords, trap notes
 * and explanations never leave the server before submission), grades
 * submitted exercises with the listening error taxonomy, records attempts,
 * and returns per-item feedback PLUS the revealed transcript.
 *
 * Transcript gating (PROMPT 49 rule): the displayed transcript is returned
 * by the grading endpoint after submission, never in the safe projection.
 * The single exception is learningMode exercises (difficulty 1–2), where
 * reading along is the point and the transcript ships with the audio.
 *
 * Error taxonomy (per answerable item):
 *   correct    the keyed option was chosen
 *   distractor a designed lure was taken
 *   inference  wrong on an item whose tested skill is inference
 *   missed     nothing was selected
 *   wrong      anything else
 */

import { db } from "@/lib/db";
import {
  TOEFL_LISTENING_BANK,
  listeningExerciseBySlug,
  TOEFL_LISTENING_TASK_LABELS,
  TOEFL_ACCENT_LABELS,
  type ToeflListeningExercise,
  type ToeflListeningQuestion,
} from "@/data/exams/toefl/listening-bank";
import { primarySkill, type LibrarySkill } from "@/data/exams/toefl/library-skills";

// ---------------------------------------------------------------------------
// Safe projections
// ---------------------------------------------------------------------------

export type SafeListeningQuestion = {
  no: number;
  stem: string;
  options: string[];
  skills: string[];
};

export type SafeListeningExercise = {
  slug: string;
  title: string;
  taskType: ToeflListeningExercise["taskType"];
  taskLabel: string;
  scene: string;
  difficulty: number;
  difficultyLabel: string;
  estimatedMinutes: number;
  intro: string;
  accentLabels: string[];
  speakers: { id: string; name: string; role: string; accent: string }[];
  /** The recording — synthesised on device. This is the audio definition. */
  segments: { id: string; speakerId?: string; text: string; pauseAfterMs?: number }[];
  /** null unless learningMode: transcript visible during playback by design. */
  transcript: { speakers: { name: string; role: string }[]; lines: { speaker: string; text: string }[]; note: string } | null;
  transcriptPolicy: "locked-until-submit" | "open-learning";
  targetSkill: LibrarySkill;
  questions: SafeListeningQuestion[];
  source: string;
};

export function toSafeListeningExercise(ex: ToeflListeningExercise): SafeListeningExercise {
  const open = ex.learningMode === true;
  const transcriptLines = ex.segments
    .filter((s) => s.speakerId)
    .map((s) => {
      const sp = ex.speakers.find((x) => x.id === s.speakerId);
      return { speaker: sp?.name ?? "?", text: s.text };
    });
  return {
    slug: ex.slug,
    title: ex.title,
    taskType: ex.taskType,
    taskLabel: TOEFL_LISTENING_TASK_LABELS[ex.taskType],
    scene: ex.scene,
    difficulty: ex.difficulty,
    difficultyLabel: ex.difficulty === 1 || ex.difficulty === 2 ? "foundation" : ex.difficulty === 3 ? "standard" : "advanced",
    estimatedMinutes: ex.estimatedMinutes,
    intro: ex.intro,
    accentLabels: [...new Set(ex.speakers.map((s) => TOEFL_ACCENT_LABELS[s.accent]))],
    speakers: ex.speakers.map((s) => ({ ...s, accent: TOEFL_ACCENT_LABELS[s.accent] })),
    segments: ex.segments.map((s) => ({ ...s })),
    transcript: open ? { speakers: ex.speakers.map((s) => ({ name: s.name, role: s.role })), lines: transcriptLines, note: ex.transcriptNote } : null,
    transcriptPolicy: open ? "open-learning" : "locked-until-submit",
    targetSkill: ex.targetSkill,
    questions: ex.questions.map((q) => ({ no: q.no, stem: q.stem, options: [...q.options], skills: q.meta.skills })),
    source: ex.source,
  };
}

// ---------------------------------------------------------------------------
// Grading
// ---------------------------------------------------------------------------

export type ListeningSubmission = {
  mode: "exam" | "practice";
  /** question no → option index. */
  answers: Record<string, number>;
  timeSpentSec: number;
  perQuestionSec?: Record<string, number>;
};

export type ListeningItemErrorType = "correct" | "distractor" | "inference" | "missed" | "wrong";

export type GradedListeningItem = {
  no: number;
  skill: LibrarySkill;
  given: string;
  expected: string;
  errorType: ListeningItemErrorType;
  correct: boolean;
  explanation: string;
  trapNote: string | null;
  keywords: string[];
};

export type GradedListeningExercise = {
  slug: string;
  totalItems: number;
  correctItems: number;
  errorCounts: Record<ListeningItemErrorType, number>;
  skillCounts: Record<string, { total: number; correct: number }>;
  items: GradedListeningItem[];
};

function classifyObjective(skills: LibrarySkill[]): Exclude<ListeningItemErrorType, "correct" | "missed"> {
  if (skills.includes("inference")) return "inference";
  return "wrong";
}

export function gradeListeningExercise(ex: ToeflListeningExercise, submission: ListeningSubmission): GradedListeningExercise {
  const errorCounts: Record<ListeningItemErrorType, number> = { correct: 0, distractor: 0, inference: 0, missed: 0, wrong: 0 };
  const skillCounts: Record<string, { total: number; correct: number }> = {};
  const items: GradedListeningItem[] = [];
  let correctItems = 0;

  for (const q of ex.questions) {
    const skill = primarySkill(q.meta.skills);
    const bucket = (skillCounts[skill] ??= { total: 0, correct: 0 });
    bucket.total += 1;
    const pick = submission.answers[String(q.no)];
    const has = pick !== undefined && pick !== -1;
    let errorType: ListeningItemErrorType;
    let correct = false;
    if (!has) {
      errorType = "missed";
    } else if (pick === q.correct) {
      errorType = "correct";
      correct = true;
    } else if (q.lure !== undefined && pick === q.lure) {
      errorType = "distractor";
    } else {
      errorType = classifyObjective(q.meta.skills);
    }
    if (correct) { correctItems += 1; bucket.correct += 1; }
    errorCounts[errorType] += 1;
    items.push({
      no: q.no,
      skill,
      given: has ? String.fromCharCode(65 + pick) : "—",
      expected: String.fromCharCode(65 + q.correct),
      errorType,
      correct,
      explanation: q.meta.explanation,
      trapNote: q.meta.trap?.note ?? null,
      keywords: q.meta.keywords,
    });
  }

  return { slug: ex.slug, totalItems: items.length, correctItems, errorCounts, skillCounts, items };
}

// ---------------------------------------------------------------------------
// Attempt recording
// ---------------------------------------------------------------------------

export async function recordListeningAttempt(
  userId: string,
  ex: ToeflListeningExercise,
  submission: ListeningSubmission,
  graded: GradedListeningExercise,
): Promise<string> {
  const attempt = await db.toeflListeningBankAttempt.create({
    data: {
      userId,
      exerciseSlug: ex.slug,
      taskType: ex.taskType,
      difficulty: ex.difficulty,
      mode: submission.mode === "practice" ? "practice" : "exam",
      totalQuestions: graded.totalItems,
      correctCount: graded.correctItems,
      skillCounts: JSON.stringify(graded.skillCounts),
      errorCounts: JSON.stringify(graded.errorCounts),
      timeSpentSec: Math.max(0, Math.min(7200, Math.round(submission.timeSpentSec || 0))),
    },
  });
  await db.toeflListeningBankResponse.createMany({
    data: graded.items.map((it) => ({
      attemptId: attempt.id,
      questionId: String(it.no),
      skill: it.skill,
      answer: JSON.stringify(submission.answers[String(it.no)] ?? null),
      isCorrect: it.correct,
      errorType: it.errorType,
      detail: it.correct ? null : `${it.given} → ${it.expected}`,
      timeSpentSec: Math.max(0, Math.min(1800, Math.round(submission.perQuestionSec?.[String(it.no)] ?? 0))),
    })),
  });
  return attempt.id;
}

export async function getSafeListeningExerciseBySlug(slug: string): Promise<SafeListeningExercise | null> {
  const ex = listeningExerciseBySlug(slug);
  return ex ? toSafeListeningExercise(ex) : null;
}

export function listeningLibraryIndex() {
  return TOEFL_LISTENING_BANK.map((ex) => ({
    slug: ex.slug,
    title: ex.title,
    taskType: ex.taskType,
    taskLabel: TOEFL_LISTENING_TASK_LABELS[ex.taskType],
    scene: ex.scene,
    difficulty: ex.difficulty,
    difficultyLabel: ex.difficulty === 1 || ex.difficulty === 2 ? "foundation" : ex.difficulty === 3 ? "standard" : "advanced",
    estimatedMinutes: ex.estimatedMinutes,
    accentLabels: [...new Set(ex.speakers.map((s) => TOEFL_ACCENT_LABELS[s.accent]))],
    speakers: ex.speakers.map((s) => s.name),
    questionCount: ex.questions.length,
    targetSkill: ex.targetSkill,
    learningMode: ex.learningMode === true,
    source: ex.source,
  }));
}
