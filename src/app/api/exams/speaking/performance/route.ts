import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { buildSpeakingPerformanceReport } from "@/lib/exams/speaking-bank/performance";

/**
 * GET /api/exams/speaking/performance — the learner's speaking analytics
 * (PROMPT 47, Parts 6–7): per-criterion band averages, part and family
 * breakdowns, fluency discipline (short turns, off-pace delivery), revision
 * chains, and the lesson recommendations derived from actual weaknesses.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to see your speaking analytics.", 401);

  const rows = await db.speakingBankAttempt.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  const report = buildSpeakingPerformanceReport(rows);
  return json({ report });
}
