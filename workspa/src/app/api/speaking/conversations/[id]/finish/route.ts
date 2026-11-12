import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getConversationScenario, getScenarioLevelSpec } from "@/data/speaking";
import type { ConversationLevel } from "@/data/speaking/types";
import {
  getConversationSession,
  finishConversationSession,
} from "@/lib/speaking/service";
import {
  measureConversation,
  aiConversationFeedback,
  fallbackConversationFeedback,
} from "@/lib/speaking/conversation";

/**
 * POST /api/speaking/conversations/[id]/finish — end the role-play and
 * produce the two-part report: measured stats (deterministic) and coach
 * feedback (AI where reachable, deterministic fallback otherwise).
 */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { id } = await ctx.params;
  const session = await getConversationSession(user.id, id);
  if (!session) return jsonError("Conversation not found.", 404);
  if (session.status === "completed") {
    return jsonError("This conversation is already finished.", 400);
  }
  const scenario = getConversationScenario(session.scenarioId);
  if (!scenario) return jsonError("Scenario data missing.", 500);
  const spec = getScenarioLevelSpec(scenario, session.level as ConversationLevel);

  const learnerTurns = session.turns.filter((turn) => turn.role === "learner");
  if (learnerTurns.length === 0) {
    return jsonError("Say at least one line before finishing.", 400);
  }

  const durationMs = Date.now() - new Date(session.startedAt).getTime();
  const measured = measureConversation(session.turns, scenario, durationMs);

  const aiFeedback =
    session.engine === "ai"
      ? await aiConversationFeedback(scenario, spec, session.turns)
      : null;
  const feedback =
    aiFeedback ?? fallbackConversationFeedback(scenario, spec, session.turns, measured);

  await finishConversationSession(session.id, {
    measured,
    aiFeedback: feedback,
    score: measured.score,
  });

  return json({
    measured,
    feedback,
    feedbackSource: aiFeedback ? "ai" : "measured",
    engine: session.engine,
    score: measured.score,
  });
}
