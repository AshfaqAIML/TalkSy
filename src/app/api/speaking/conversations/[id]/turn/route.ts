import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getConversationScenario, getScenarioLevelSpec } from "@/data/speaking";
import type { ConversationLevel } from "@/data/speaking/types";
import {
  getConversationSession,
  appendConversationTurn,
} from "@/lib/speaking/service";
import { aiPartnerReply, scriptedPartnerReply } from "@/lib/speaking/conversation";
import { db } from "@/lib/db";

/**
 * POST /api/speaking/conversations/[id]/turn — the learner's reply.
 * Body: { text }. The partner answers with the AI engine (downgrading to
 * the authored script on any failure — never breaking the conversation).
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

  const body = await readJson<{ text?: string }>(req);
  if (!body || typeof body.text !== "string" || body.text.trim().length === 0) {
    return jsonError("Send the text you said (or typed).", 400);
  }
  const learnerText = body.text.trim().slice(0, 2000);

  const scenario = getConversationScenario(session.scenarioId);
  if (!scenario) return jsonError("Scenario data missing.", 500);
  const spec = getScenarioLevelSpec(scenario, session.level as ConversationLevel);

  await appendConversationTurn(session.id, { role: "learner", text: learnerText });

  const learnerTurnCount =
    session.turns.filter((turn) => turn.role === "learner").length + 1;

  let engineUsed: "ai" | "scripted" = session.engine;
  let reply: string | null = null;

  if (session.engine === "ai") {
    const turnsForAi = [...session.turns, { role: "learner" as const, text: learnerText }];
    reply = await aiPartnerReply(scenario, spec, turnsForAi);
    if (reply === null) {
      engineUsed = "scripted";
      await db.conversationSession.update({
        where: { id: session.id },
        data: { engine: "scripted" },
      });
    }
  }
  if (reply === null) {
    reply = scriptedPartnerReply(spec, learnerTurnCount, learnerText);
  }

  await appendConversationTurn(session.id, { role: "partner", text: reply });

  return json({
    reply,
    engine: engineUsed,
    learnerTurnCount,
    turnsTarget: spec.turnsTarget,
    canFinish: learnerTurnCount >= 2,
  });
}
