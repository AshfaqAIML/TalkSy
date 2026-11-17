import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { buildSpeakingPerformanceReport, loadUserSpeakingAttempts } from "@/lib/exams/toefl-bank/ws-performance";

/**
 * GET /api/exams/toefl/speaking/performance — the learner's speaking
 * practice report: repetition accuracy by tier and focus tag, the
 * within-window rate, criteria trends for interview answers, recent history
 * and weakness-driven recommendations. All figures are educational
 * estimates. Requires an account.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to see your speaking practice profile.", 401);
  const rows = await loadUserSpeakingAttempts(user.id);
  const report = buildSpeakingPerformanceReport(rows);
  return json({ report });
}
