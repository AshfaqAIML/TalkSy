import { json, jsonError } from "@/lib/api-helpers";
import { getSessionUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { buildWritingPerformanceReport } from "@/lib/exams/writing-bank/performance";

/**
 * GET /api/exams/writing/performance — the learner's writing analytics
 * (PROMPT 46, Parts F–G): per-criterion band averages, channel/type/family
 * breakdowns, word-count and clock discipline, revision chains, and the
 * lesson recommendations derived from actual weaknesses.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to see your writing analytics.", 401);

  const rows = await db.writingBankAttempt.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  const report = buildWritingPerformanceReport(rows);
  return json({ report });
}
