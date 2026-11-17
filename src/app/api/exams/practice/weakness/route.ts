import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { buildWeaknessPractice, weaknessProfile } from "@/lib/exams/practice-modes";
import { startAttempt } from "@/lib/exams/mock-engine";
import { EXAM_KEYS, type ExamKey } from "@/lib/exams/types";

/**
 * GET /api/exams/practice/weakness?exam=IELTS&variant=ACADEMIC
 * The learner's weakness profile for one examination (preview): skill-tag
 * accuracy, weakest tasks and weakest sections from graded history. Powers
 * the launcher panel before any set is assembled.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const url = new URL(req.url);
  const examParam = url.searchParams.get("exam");
  if (!examParam || !(EXAM_KEYS as readonly string[]).includes(examParam)) {
    return jsonError("Choose an examination.", 422);
  }
  const variant = url.searchParams.get("variant") ?? "STANDARD";
  const profile = await weaknessProfile(user.id, examParam as ExamKey, variant);
  return json({ profile });
}

/**
 * POST /api/exams/practice/weakness — assemble a weakness-based practice
 * set from the learner's graded history. Untimed remediation by design.
 * Body: { examKey, variant, count? }
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{
    examKey?: unknown;
    variant?: unknown;
    count?: unknown;
  }>(req);
  if (!body) return jsonError("Invalid request body.");
  if (typeof body.examKey !== "string" || !(EXAM_KEYS as readonly string[]).includes(body.examKey)) {
    return jsonError("Choose an examination.", 422);
  }
  const variant = typeof body.variant === "string" ? body.variant : "STANDARD";
  const count =
    typeof body.count === "number" && body.count >= 6 ? Math.min(Math.round(body.count), 30) : undefined;

  const set = await buildWeaknessPractice({
    userId: user.id,
    examKey: body.examKey as ExamKey,
    variant,
    count,
  });
  if ("empty" in set) {
    // 409: the request is valid but there is not enough graded history yet.
    return jsonError(set.reason, 409);
  }

  const attempt = await startAttempt(user.id, set.mockId, "weakness", false);
  if (!attempt) return jsonError("Could not start the practice set.", 500);
  return json(
    { mockId: set.mockId, itemCount: set.itemCount, attempt: { id: attempt.id, mode: attempt.mode, timed: attempt.timed } },
    201,
  );
}
