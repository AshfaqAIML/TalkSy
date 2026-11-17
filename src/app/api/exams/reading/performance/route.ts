import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { db } from "@/lib/db";
import { readingExerciseBySlug } from "@/data/exams/ielts/reading-bank";
import { gradeReadingExercise, type ReadingAnswerPayload } from "@/lib/exams/reading-bank/service";
import { buildReadingPerformanceReport, type PerformanceAttemptRow, type ReGradedAttempt } from "@/lib/exams/reading-bank/performance";

/**
 * GET /api/exams/reading/performance — the masterclass performance report
 * (PROMPT 45, Part E): accuracy, completion time, question-type weaknesses,
 * vocabulary difficulties, inference mistakes, unanswered items, simulation
 * history and mistake-driven lesson recommendations.
 *
 * Every stored attempt is re-graded from its stored answers (grading is
 * pure), so the aggregates are exact at item level.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to see your Reading performance.", 401);

  const attempts = await db.readingBankAttempt.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 60,
  });
  const responses = await db.readingBankResponse.findMany({
    where: { attempt: { userId: user.id } },
    select: { attemptId: true, questionId: true, answer: true },
  });

  const answersByAttempt = new Map<string, Record<string, ReadingAnswerPayload>>();
  for (const r of responses) {
    const bucket = answersByAttempt.get(r.attemptId) ?? {};
    try {
      bucket[r.questionId] = JSON.parse(r.answer) as ReadingAnswerPayload;
    } catch {
      // malformed row — skip it
    }
    answersByAttempt.set(r.attemptId, bucket);
  }

  const rows: ReGradedAttempt[] = [];
  for (const a of attempts) {
    const exercise = readingExerciseBySlug(a.exerciseSlug);
    if (!exercise) continue;
    const graded = gradeReadingExercise(exercise, {
      mode: a.mode === "practice" ? "practice" : "exam",
      answers: answersByAttempt.get(a.id) ?? {},
      timeSpentSec: a.timeSpentSec,
    });
    const attemptRow: PerformanceAttemptRow = {
      id: a.id,
      exerciseSlug: a.exerciseSlug,
      variant: a.variant,
      section: a.section,
      mode: a.mode,
      simRunId: a.simRunId,
      simSlug: a.simSlug,
      simPart: a.simPart,
      totalQuestions: a.totalQuestions,
      correctCount: a.correctCount,
      timeSpentSec: a.timeSpentSec,
      createdAt: a.createdAt,
    };
    rows.push({ attempt: attemptRow, graded });
  }

  return json({ report: buildReadingPerformanceReport(rows) });
}
