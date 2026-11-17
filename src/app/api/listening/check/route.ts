import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson, updateStats } from "@/lib/api-helpers";
import { getListeningActivity, getListeningExercise } from "@/data/listening";
import { gradeListeningExercise, listeningFeedback } from "@/lib/listening/grade";
import {
  applyListeningCheck,
  ensureListeningProgress,
  toListeningProgressDto,
} from "@/lib/listening/service";

/**
 * POST /api/listening/check — grade ONE listening exercise.
 * Grades server-side, persists the attempt, updates the activity progress
 * (exercise completed when answered correctly at least once; first-try
 * results decide the score; all exercises completed → activity completed and
 * a locked transcript unlocks), and returns the full feedback payload
 * including the "what you heard" reveal segments.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{
    slug?: string;
    exerciseId?: string;
    answer?: unknown;
    hintsUsed?: number;
    durationMs?: number;
  }>(req);
  if (!body || typeof body.slug !== "string" || typeof body.exerciseId !== "string") {
    return jsonError("Invalid request body.", 400);
  }

  const activity = getListeningActivity(body.slug);
  if (!activity) return jsonError("Listening activity not found.", 404);

  const exercise = getListeningExercise(activity.id, body.exerciseId);
  if (!exercise) return jsonError("Exercise not found.", 404);

  const result = gradeListeningExercise(exercise, body.answer);
  const hintsUsed = Math.max(0, Math.min(10, body.hintsUsed ?? 0));

  // Was this the exercise's first attempt? (Checked before we append ours.)
  const priorAttempt = await db.listeningAttempt.findFirst({
    where: { userId: user.id, activityId: activity.id, exerciseId: exercise.id },
    select: { id: true },
  });
  const wasFirstTry = priorAttempt === null;

  await db.listeningAttempt.create({
    data: {
      userId: user.id,
      activityId: activity.id,
      exerciseId: exercise.id,
      format: exercise.format,
      isCorrect: result.correct,
      score: result.score,
      hintsUsed,
      answer: JSON.stringify(body.answer ?? null),
    },
  });

  const row = await applyListeningCheck(
    user.id,
    activity,
    exercise.id,
    result.correct,
    wasFirstTry,
  );
  const progress = toListeningProgressDto(row, activity);

  await updateStats(user.id, {
    correct: result.correct,
    hintsUsed,
    durationMs: Math.max(0, Math.min(600_000, body.durationMs ?? 0)),
    type: `listening:${exercise.format}`,
    difficulty: exercise.difficulty,
    skill: "listening",
  });

  return json({
    exerciseId: exercise.id,
    correct: result.correct,
    score: result.score,
    invalid: result.invalid,
    feedback: listeningFeedback(exercise),
    progress,
  });
}
