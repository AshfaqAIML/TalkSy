import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { buildWritingPerformanceReport, loadUserWritingAttempts } from "@/lib/exams/toefl-bank/ws-performance";

/**
 * GET /api/exams/toefl/writing/performance — the learner's writing practice
 * report: sentence accuracy per focus, the error taxonomy, criteria trends
 * for evaluated email/discussion tasks, recent history and weakness-driven
 * recommendations. All figures are educational estimates. Requires an account.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to see your writing practice profile.", 401);
  const rows = await loadUserWritingAttempts(user.id);
  const report = buildWritingPerformanceReport(rows);
  return json({ report });
}
