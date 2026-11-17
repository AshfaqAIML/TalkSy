import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { startAttempt } from "@/lib/exams/mock-engine";
import { ATTEMPT_MODES, attemptModeLabel, isTimedMode, type AttemptModeId } from "@/lib/exams/types";

type Ctx = { params: Promise<{ id: string }> };

/**
 * POST /api/exams/mocks/[id]/attempts — start (or resume) an attempt on a
 * published mock test. One in-progress attempt per mock per learner.
 * Body: { mode?, timed? } — mode is one of the six practice modes
 * (full_mock | section | timed | untimed | mistakes | custom); legacy
 * "exam"/"practice" values are still accepted and normalised.
 */
export async function POST(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const body = await readJson<{ mode?: unknown; timed?: unknown }>(req).catch(() => null);

  const rawMode = typeof body?.mode === "string" ? body.mode : "full_mock";
  const mode: AttemptModeId | "exam" | "practice" =
    (ATTEMPT_MODES as readonly string[]).includes(rawMode) || rawMode === "exam" || rawMode === "practice"
      ? (rawMode as AttemptModeId | "exam" | "practice")
      : "full_mock";
  const timed = typeof body?.timed === "boolean" ? body.timed : isTimedMode(mode);

  const attempt = await startAttempt(user.id, id, mode, timed);
  if (!attempt) return jsonError("Mock test not available.", 404);
  return json(
    {
      attempt: {
        id: attempt.id,
        status: attempt.status,
        mode: attempt.mode,
        modeLabel: attemptModeLabel(attempt.mode),
        timed: attempt.timed,
        startedAt: attempt.startedAt,
      },
    },
    201,
  );
}
