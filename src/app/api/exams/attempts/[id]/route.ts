import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { db } from "@/lib/db";
import { getAttempt, saveResponse } from "@/lib/exams/mock-engine";
import { attemptModeLabel, isTimedMode } from "@/lib/exams/types";

type Ctx = { params: Promise<{ id: string }> };

/**
 * GET /api/exams/attempts/[id] — attempt state + every saved answer, flag
 * and per-question time (for resuming the player after a refresh).
 * PATCH /api/exams/attempts/[id] — save one answer.
 * Body: { questionId, answer, flagged?, timeDeltaSec? }
 */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const attempt = await getAttempt(id);
  if (!attempt || attempt.userId !== user.id) return jsonError("Attempt not found.", 404);
  const responses = await db.mockTestResponse.findMany({
    where: { attemptId: id },
    select: { questionId: true, answer: true, flagged: true, timeSpentSec: true },
  });
  const answers: Record<string, unknown> = {};
  const flags: Record<string, boolean> = {};
  const times: Record<string, number> = {};
  for (const response of responses) {
    try {
      answers[response.questionId] = JSON.parse(response.answer ?? "null");
    } catch {
      answers[response.questionId] = null;
    }
    flags[response.questionId] = response.flagged;
    times[response.questionId] = response.timeSpentSec;
  }
  return json({
    attempt: {
      id: attempt.id,
      mockTestId: attempt.mockTestId,
      status: attempt.status,
      mode: attempt.mode,
      modeLabel: attemptModeLabel(attempt.mode),
      timed: isTimedMode(attempt.mode, attempt.timed),
      startedAt: attempt.startedAt,
      submittedAt: attempt.submittedAt,
    },
    answers,
    flags,
    times,
  });
}

export async function PATCH(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const attempt = await getAttempt(id);
  if (!attempt || attempt.userId !== user.id) return jsonError("Attempt not found.", 404);
  if (attempt.status !== "in_progress") {
    return jsonError("This attempt has already been submitted.", 409);
  }
  const body = await readJson<{
    questionId?: unknown;
    answer?: unknown;
    flagged?: unknown;
    timeDeltaSec?: unknown;
  }>(req);
  const questionId = typeof body?.questionId === "string" ? body.questionId : "";
  if (!questionId) return jsonError("Missing questionId.", 422);
  const ok = await saveResponse(id, questionId, body?.answer, {
    ...(typeof body?.flagged === "boolean" ? { flagged: body.flagged } : {}),
    ...(typeof body?.timeDeltaSec === "number" && body.timeDeltaSec > 0
      ? { timeDeltaSec: Math.min(Math.round(body.timeDeltaSec), 600) }
      : {}),
  });
  if (!ok) return jsonError("Question does not belong to this attempt.", 422);
  return json({ ok: true });
}
