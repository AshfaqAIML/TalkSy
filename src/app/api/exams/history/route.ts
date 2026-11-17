import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { listAttemptHistory } from "@/lib/exams/history";
import { EXAM_KEYS, type ExamKey } from "@/lib/exams/types";

/**
 * GET /api/exams/history?exam=&variant= — every submitted attempt of this
 * learner (optionally filtered to one exam+variant) plus trend series for
 * exam-condition runs. Comparisons between attempts are offered per
 * specification version (see /api/exams/history/compare).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const url = new URL(req.url);
  const examParam = url.searchParams.get("exam");
  const examKey =
    examParam && (EXAM_KEYS as readonly string[]).includes(examParam) ? (examParam as ExamKey) : undefined;
  const variant = url.searchParams.get("variant") ?? undefined;

  const history = await listAttemptHistory(user.id, { examKey, variant });
  return json({ history });
}
