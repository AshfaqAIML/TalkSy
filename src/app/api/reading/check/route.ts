import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson, updateStats } from "@/lib/api-helpers";
import { getReadingQuestion, getReadingText } from "@/data/reading";
import { gradeReadingQuestion, readingFeedback } from "@/lib/reading/grade";

/**
 * POST /api/reading/check — practice check for ONE comprehension question.
 * Grades server-side, persists the attempt (context "practice"), updates the
 * aggregate stats, and returns the full feedback payload. Never affects a
 * formal assessment run.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{
    slug?: string;
    questionId?: string;
    answer?: unknown;
    durationMs?: number;
  }>(req);
  if (!body || typeof body.slug !== "string" || typeof body.questionId !== "string") {
    return jsonError("Invalid request body.", 400);
  }

  const text = getReadingText(body.slug);
  if (!text) return jsonError("Reading text not found.", 404);

  const question = getReadingQuestion(text.id, body.questionId);
  if (!question) return jsonError("Question not found.", 404);

  const result = gradeReadingQuestion(question, body.answer);

  await db.readingAttempt.create({
    data: {
      userId: user.id,
      textId: text.id,
      questionId: question.id,
      skill: question.skill,
      format: question.format,
      context: "practice",
      isCorrect: result.correct,
      score: result.score,
      answer: JSON.stringify(body.answer ?? null),
    },
  });

  await updateStats(user.id, {
    correct: result.correct,
    hintsUsed: 0,
    durationMs: Math.max(0, Math.min(600_000, body.durationMs ?? 0)),
    type: `reading:${question.format}`,
    difficulty: question.difficulty,
    skill: "reading",
  });

  return json({
    questionId: question.id,
    correct: result.correct,
    score: result.score,
    invalid: result.invalid,
    feedback: readingFeedback(question),
  });
}
