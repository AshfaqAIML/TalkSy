import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { createEvaluation } from "@/lib/exams/evaluation/service";
import { evaluateRequestSchema } from "@/lib/exams/evaluation/types";

/**
 * POST /api/exams/evaluate — run one AI-assisted evaluation.
 *
 * Body: either { attemptId, questionId, text } (evaluate a mock response)
 * or { evaluatorKey, text } (free evaluation). Returns the stored
 * evaluation with its verified checks, rule-based findings, AI feedback,
 * criterion estimates (each with an explanation and quoted evidence),
 * weaknesses mapped to EnglishPath lessons, and the safeguard disclaimers.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson(req);
  const parsed = evaluateRequestSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid request.", 422);
  }

  const outcome = await createEvaluation(user.id, {
    attemptId: parsed.data.attemptId,
    questionId: parsed.data.questionId,
    evaluatorKey: parsed.data.evaluatorKey,
    taskPrompt: parsed.data.taskPrompt,
    text: parsed.data.text,
    transcriptSource: parsed.data.transcriptSource,
    audioSec: parsed.data.audioSec ?? null,
  });
  if (!outcome.ok) return jsonError(outcome.reason, 422);
  return json({ evaluation: outcome.evaluation });
}
