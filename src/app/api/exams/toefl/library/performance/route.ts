import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { buildToeflLibraryReport, loadUserToeflLibraryData } from "@/lib/exams/toefl-bank/adaptive";

/**
 * GET /api/exams/toefl/library/performance — the learner's adaptive report:
 * the seven tracked dimensions, per-task accuracy, recent attempts and
 * weakness-driven exercise recommendations. Requires an account.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Log in to see your practice profile.", 401);
  const { reading, listening } = await loadUserToeflLibraryData(user.id);
  const report = buildToeflLibraryReport(reading, listening);
  return json({ report });
}
