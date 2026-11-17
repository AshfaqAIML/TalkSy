import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { buildAdaptivePractice } from "@/lib/exams/practice-modes";
import { startAttempt } from "@/lib/exams/mock-engine";
import { EXAM_KEYS, SECTION_KEYS, type ExamKey, type SectionKey } from "@/lib/exams/types";
import { INTEGRITY_ADAPTIVE_NOTE } from "@/lib/exams/integrity";

/**
 * POST /api/exams/practice/adaptive — assemble an adaptive practice set.
 * Difficulty is calibrated to the learner's recent accuracy (or to the
 * attempt referenced by `continueFromAttemptId`), so consecutive runs
 * steer up or down. TalkSy's own heuristic — the response always carries
 * the honesty note that this is not ETS's adaptive algorithm.
 *
 * Body: { examKey, variant, section?, count?, timed?, continueFromAttemptId? }
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{
    examKey?: unknown;
    variant?: unknown;
    section?: unknown;
    count?: unknown;
    timed?: unknown;
    continueFromAttemptId?: unknown;
  }>(req);
  if (!body) return jsonError("Invalid request body.");
  if (typeof body.examKey !== "string" || !(EXAM_KEYS as readonly string[]).includes(body.examKey)) {
    return jsonError("Choose an examination.", 422);
  }
  const variant = typeof body.variant === "string" ? body.variant : "STANDARD";
  const section =
    typeof body.section === "string" && (SECTION_KEYS as readonly string[]).includes(body.section)
      ? (body.section as SectionKey)
      : undefined;
  const count =
    typeof body.count === "number" && body.count >= 4 ? Math.min(Math.round(body.count), 30) : undefined;
  const timed = body.timed !== false; // adaptive runs default to timed
  const continueFromAttemptId =
    typeof body.continueFromAttemptId === "string" ? body.continueFromAttemptId : undefined;

  const set = await buildAdaptivePractice({
    userId: user.id,
    examKey: body.examKey as ExamKey,
    variant,
    section,
    count,
    timed,
    continueFromAttemptId,
  });
  if (!set) return jsonError("No published questions for that selection yet.", 404);

  const attempt = await startAttempt(user.id, set.mockId, "adaptive", timed);
  if (!attempt) return jsonError("Could not start the practice set.", 500);
  return json(
    {
      mockId: set.mockId,
      itemCount: set.itemCount,
      attempt: { id: attempt.id, mode: attempt.mode, timed: attempt.timed },
      adaptiveNote: INTEGRITY_ADAPTIVE_NOTE,
    },
    201,
  );
}
