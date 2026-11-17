import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { db } from "@/lib/db";
import { listPublishedMocks } from "@/lib/exams/mock-engine";
import { attemptModeLabel, isTimedMode, EXAM_KEYS, type ExamKey } from "@/lib/exams/types";

/**
 * GET /api/exams/mocks?exam=IELTS — published mock tests for an exam
 * (or all exams), including the learner's in-progress/finished attempts.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const url = new URL(req.url);
  const examParam = url.searchParams.get("exam") as ExamKey | null;
  const exam = examParam && EXAM_KEYS.includes(examParam) ? examParam : undefined;
  const variant = url.searchParams.get("variant") ?? undefined;

  const mocks = await listPublishedMocks(exam, variant);
  const withCounts = await Promise.all(
    mocks.map(async (mock) => {
      const [questionCount, attempts] = await Promise.all([
        db.mockTestQuestion.count({
          where: { section: { mockTestId: mock.id } },
        }),
        db.mockTestAttempt.findMany({
          where: { userId: user.id, mockTestId: mock.id },
          orderBy: { startedAt: "desc" },
          select: { id: true, status: true, mode: true, timed: true, startedAt: true, scoreDisplay: true, submittedAt: true },
        }),
      ]);
      return {
        ...mock,
        questionCount,
        attempts: attempts.map((attempt) => ({
          ...attempt,
          modeLabel: attemptModeLabel(attempt.mode),
          timed: isTimedMode(attempt.mode, attempt.timed),
        })),
      };
    }),
  );
  return json({ mocks: withCounts });
}
