import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson, updateStats } from "@/lib/api-helpers";
import { getSpeakingActivity, getSpeakingTask } from "@/data/speaking";
import {
  gradeSpeakingAttempt,
  selfAssessedAttempt,
  OPEN_PASS_SCORE,
  MATCH_PASS_SCORE,
} from "@/lib/speaking/feedback";
import { aiAttemptSuggestions } from "@/lib/speaking/conversation";
import {
  applySpeakingAttempt,
  recordSpeakingAttempt,
  purgeExpiredSpeakingAttempts,
} from "@/lib/speaking/service";
import { AI_DISCLAIMER, type AiCoachSuggestions } from "@/data/speaking/types";

/**
 * POST /api/speaking/attempt — grade one speaking task attempt.
 *
 * Body: { slug, taskId, mode: "transcript" | "self-assessed", provider,
 *         transcript?, durationMs? }
 *
 * The measured rubric is deterministic and computed here. AI coach
 * suggestions are only requested for genuinely speech-recognised, open
 * responses (provider "server") and are returned separately + labeled —
 * never merged into scores.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{
    slug?: string;
    taskId?: string;
    mode?: string;
    provider?: string;
    transcript?: string;
    durationMs?: number;
  }>(req);
  if (
    !body ||
    typeof body.slug !== "string" ||
    typeof body.taskId !== "string" ||
    (body.mode !== "transcript" && body.mode !== "self-assessed")
  ) {
    return jsonError("Invalid request body.", 400);
  }

  const activity = getSpeakingActivity(body.slug);
  if (!activity) return jsonError("Speaking activity not found.", 404);
  const task = getSpeakingTask(activity, body.taskId);
  if (!task) return jsonError("Task not found.", 404);

  const durationMs = Math.max(0, Math.min(600_000, Math.round(body.durationMs ?? 0)));
  const provider =
    body.provider === "server" || body.provider === "browser" || body.provider === "manual"
      ? body.provider
      : "self";

  let graded;
  let transcript = "";
  if (body.mode === "transcript") {
    if (typeof body.transcript !== "string" || body.transcript.trim().length === 0) {
      return jsonError("The transcript is empty.", 400);
    }
    transcript = body.transcript.trim().slice(0, 5000);
    graded = gradeSpeakingAttempt(task, transcript, durationMs, provider === "server" || provider === "browser");
  } else {
    graded = selfAssessedAttempt(durationMs);
  }

  // AI coach suggestions: only for real speech recognition on open tasks.
  let suggestions: AiCoachSuggestions | null = null;
  if (
    body.mode === "transcript" &&
    provider === "server" &&
    task.type === "open" &&
    graded.measured.wordCount >= 8
  ) {
    const targetBrief =
      task.type === "open"
        ? `Required points: ${task.checklist.map((c) => c.label).join("; ")}.`
        : "";
    suggestions = await aiAttemptSuggestions(task.prompt, targetBrief, transcript);
  }

  await purgeExpiredSpeakingAttempts(user.id);

  await recordSpeakingAttempt({
    userId: user.id,
    activityId: activity.id,
    taskId: task.id,
    kind: activity.kind,
    provider: body.mode === "self-assessed" ? "self" : provider,
    transcript,
    selfAssessed: body.mode === "self-assessed",
    durationMs,
    wordCount: graded.measured.wordCount,
    overall: graded.overall,
    scores: graded.measured.scores as Record<string, number>,
    measured: graded.measured as unknown as Record<string, unknown>,
    suggestions,
  });

  const progress = await applySpeakingAttempt(user.id, activity.id, task.id, {
    passed: graded.passed,
    selfAssessed: body.mode === "self-assessed",
    overall: graded.overall,
  });

  await updateStats(user.id, {
    correct: graded.passed,
    hintsUsed: 0,
    durationMs,
    type: `speaking:${activity.kind}`,
    difficulty: task.difficulty,
    skill: "speaking",
  });

  return json({
    taskId: task.id,
    passed: graded.passed,
    passThreshold:
      task.type === "match" ? MATCH_PASS_SCORE : OPEN_PASS_SCORE,
    measured: graded.measured,
    overall: graded.overall,
    suggestions: suggestions
      ? { ...suggestions, disclaimer: AI_DISCLAIMER }
      : null,
    modelAnswer:
      task.type === "open"
        ? { text: task.modelAnswer, translation: task.modelAnswerTranslation || null }
        : null,
    progress,
  });
}
