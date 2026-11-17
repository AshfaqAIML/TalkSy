import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { db } from "@/lib/db";
import { LISTENING_BANK, bankExerciseBySlug } from "@/data/exams/ielts/listening-bank";
import {
  buildPerformanceReport,
  type MockListeningRow,
  type PerformanceAttemptRow,
  type PerformanceResponseRow,
} from "@/lib/exams/listening-bank/performance";

/**
 * GET /api/exams/listening/performance — the masterclass performance
 * report (PROMPT 44 Part 7): correct/incorrect totals, spelling-mistake
 * log, missed keywords, distractor families, question-type and part
 * accuracy, time spent, mock Listening section history, and lessons
 * recommended from the learner's actual mistakes.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to see your Listening performance.", 401);

  const [attempts, responses, mockAttempts] = await Promise.all([
    db.listeningBankAttempt.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      take: 60,
    }),
    db.listeningBankResponse.findMany({
      where: { attempt: { userId: user.id } },
      include: { attempt: { select: { exerciseSlug: true, part: true, createdAt: true } } },
      orderBy: { createdAt: "desc" },
      take: 600,
    }),
    db.mockTestAttempt.findMany({
      where: { userId: user.id, status: { in: ["submitted", "scored"] }, sectionScores: { not: null } },
      include: { mockTest: { select: { title: true } } },
      orderBy: { startedAt: "desc" },
      take: 30,
    }),
  ]);

  // Listening sections from mock attempts (sectionScores JSON rows).
  const mockRows: MockListeningRow[] = [];
  for (const att of mockAttempts) {
    try {
      const sections = JSON.parse(att.sectionScores ?? "[]") as Array<{
        section: string; raw: number; max: number; score: number;
      }>;
      for (const sec of sections) {
        if (sec.section !== "listening" || !sec.max) continue;
        mockRows.push({
          attemptId: att.id,
          title: att.mockTest.title,
          raw: sec.raw,
          max: sec.max,
          score: sec.score,
          submittedAt: att.submittedAt,
        });
      }
    } catch {
      // malformed sectionScores — skip this attempt
    }
  }

  // Bank-content enrichment: trap families for distractor-tagged responses
  // and the keywords behind each wrong answer.
  const distractorFamily = new Map<string, string>();
  const questionKeywords = new Map<string, string[]>();
  for (const row of responses) {
    const exercise = bankExerciseBySlug(row.attempt.exerciseSlug) ?? LISTENING_BANK.find((e) => e.slug === row.attempt.exerciseSlug);
    const question = exercise?.questions.find((q) => q.id === row.questionId);
    if (!question || !exercise) continue;
    if (row.errorType === "distractor" && question.meta.trap) {
      distractorFamily.set(`${row.attemptId}::${row.questionId}`, question.meta.trap.family);
    }
    if (!row.isCorrect) {
      questionKeywords.set(`${exercise.slug}::${row.questionId}`, question.meta.keywords);
    }
  }

  const attemptRows: PerformanceAttemptRow[] = attempts.map((a) => ({
    id: a.id,
    exerciseSlug: a.exerciseSlug,
    part: a.part,
    mode: a.mode,
    totalQuestions: a.totalQuestions,
    correctCount: a.correctCount,
    errorCounts: a.errorCounts,
    timeSpentSec: a.timeSpentSec,
    createdAt: a.createdAt,
  }));
  const responseRows: PerformanceResponseRow[] = responses.map((r) => ({
    attemptId: r.attemptId,
    questionId: r.questionId,
    questionType: r.questionType,
    isCorrect: r.isCorrect,
    errorType: r.errorType,
    detail: r.detail,
    timeSpentSec: r.timeSpentSec,
    attempt: {
      exerciseSlug: r.attempt.exerciseSlug,
      part: r.attempt.part,
      createdAt: r.attempt.createdAt,
    },
  }));

  const report = buildPerformanceReport(attemptRows, responseRows, mockRows, {
    distractorFamily,
    questionKeywords,
  });
  return json({ report });
}
