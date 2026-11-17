import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { buildDiagnosticAssessment } from "@/lib/exams/practice-modes";
import { startAttempt } from "@/lib/exams/mock-engine";
import { EXAM_KEYS, type ExamKey } from "@/lib/exams/types";

/**
 * POST /api/exams/practice/diagnostic — assemble a diagnostic assessment:
 * a balanced, timed cross-section sample (up to 8 items per section,
 * round-robinned across task types and spread over difficulty) whose
 * result carries a level profile. Always sat under section clocks.
 * Body: { examKey, variant, perSection? }
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{
    examKey?: unknown;
    variant?: unknown;
    perSection?: unknown;
  }>(req);
  if (!body) return jsonError("Invalid request body.");
  if (typeof body.examKey !== "string" || !(EXAM_KEYS as readonly string[]).includes(body.examKey)) {
    return jsonError("Choose an examination.", 422);
  }
  const variant = typeof body.variant === "string" ? body.variant : "STANDARD";
  const perSection =
    typeof body.perSection === "number" && body.perSection >= 4
      ? Math.min(Math.round(body.perSection), 12)
      : undefined;

  const set = await buildDiagnosticAssessment({
    examKey: body.examKey as ExamKey,
    variant,
    perSection,
  });
  if (!set) return jsonError("No published questions for this examination yet.", 404);

  // A diagnostic is always sat under timing — it is an assessment.
  const attempt = await startAttempt(user.id, set.mockId, "diagnostic", true);
  if (!attempt) return jsonError("Could not start the assessment.", 500);
  return json(
    { mockId: set.mockId, itemCount: set.itemCount, attempt: { id: attempt.id, mode: attempt.mode, timed: attempt.timed } },
    201,
  );
}
