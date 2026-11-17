import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { db } from "@/lib/db";
import { readingExerciseBySlug } from "@/data/exams/ielts/reading-bank";
import {
  gradeReadingExercise,
  toSafeReadingExercise,
  type ReadingAnswerPayload,
} from "@/lib/exams/reading-bank/service";

type Ctx = { params: Promise<{ attemptId: string }> };

/**
 * GET /api/exams/reading/review/[attemptId] — reopen a past attempt for
 * review (PROMPT 45, Part F): the passage, every item's given and keyed
 * answer, the passage evidence that settles each answer, the glossary and
 * the why-wrong notes. Only the attempt's owner can reopen it.
 */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to review your attempts.", 401);
  const { attemptId } = await ctx.params;

  const attempt = await db.readingBankAttempt.findFirst({
    where: { id: attemptId, userId: user.id },
    include: { responses: { select: { questionId: true, answer: true } } },
  });
  if (!attempt) return jsonError("Attempt not found.", 404);

  const exercise = readingExerciseBySlug(attempt.exerciseSlug);
  if (!exercise) return jsonError("This exercise is no longer in the library.", 404);

  const answers: Record<string, ReadingAnswerPayload> = {};
  for (const r of attempt.responses) {
    try {
      answers[r.questionId] = JSON.parse(r.answer) as ReadingAnswerPayload;
    } catch {
      // skip malformed rows
    }
  }

  const graded = gradeReadingExercise(exercise, {
    mode: attempt.mode === "practice" ? "practice" : "exam",
    answers,
    timeSpentSec: attempt.timeSpentSec,
  });

  return json({
    attempt: {
      id: attempt.id,
      exerciseSlug: attempt.exerciseSlug,
      variant: attempt.variant,
      section: attempt.section,
      mode: attempt.mode,
      totalQuestions: attempt.totalQuestions,
      correctCount: attempt.correctCount,
      timeSpentSec: attempt.timeSpentSec,
      createdAt: attempt.createdAt.toISOString(),
    },
    exercise: toSafeReadingExercise(exercise),
    result: graded,
    glossary: exercise.glossary,
  });
}
