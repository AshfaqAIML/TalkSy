import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";

interface Bucket {
  attempts: number;
  correct: number;
}

function parseBuckets(raw: string): Record<string, Bucket> {
  try {
    const parsed = JSON.parse(raw) as Record<string, Bucket>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/** GET /api/stats — aggregated performance data for the dashboard. */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const stats = await db.userStats.findUnique({ where: { userId: user.id } });
  const recentAttempts = await db.exerciseAttempt.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 12,
  });
  const assessments = await db.assessmentResult.findMany({
    where: { userId: user.id, status: "completed" },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  const total = stats?.totalAttempts ?? 0;
  return json({
    totals: {
      attempts: total,
      correct: stats?.correctAttempts ?? 0,
      accuracy: total > 0 ? Math.round(((stats?.correctAttempts ?? 0) / total) * 100) : 0,
      hintsUsed: stats?.hintsUsed ?? 0,
      timeSpentMinutes: Math.round((stats?.timeSpentMs ?? 0) / 60000),
      streakDays: stats?.streakDays ?? 0,
    },
    byType: parseBuckets(stats?.byType ?? "{}"),
    byDifficulty: parseBuckets(stats?.byDifficulty ?? "{}"),
    bySkill: parseBuckets(stats?.bySkill ?? "{}"),
    recentAttempts: recentAttempts.map((a) => ({
      exerciseId: a.exerciseId,
      lessonSlug: a.lessonSlug,
      type: a.type,
      difficulty: a.difficulty,
      skill: a.skill,
      isCorrect: a.isCorrect,
      hintsUsed: a.hintsUsed,
      context: a.context,
      createdAt: a.createdAt.toISOString(),
    })),
    assessments: assessments.map((a) => ({
      id: a.id,
      lessonSlug: a.lessonSlug,
      score: a.score,
      passed: a.passed,
      correct: a.correct,
      total: a.total,
      completedAt: a.completedAt?.toISOString() ?? null,
    })),
  });
}
