import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getConversationScenario, getScenarioLevelSpec } from "@/data/speaking";
import { createConversationSession } from "@/lib/speaking/service";
import type { ConversationLevel } from "@/data/speaking/types";

const LEVELS: ConversationLevel[] = ["beginner", "intermediate", "advanced"];

/**
 * POST /api/speaking/conversations — start a role-play session.
 * Body: { slug, level, engine? } where engine "scripted" forces the offline
 * partner (also used by tests); default "ai" tries the AI partner first.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ slug?: string; level?: string; engine?: string }>(req);
  if (!body || typeof body.slug !== "string") {
    return jsonError("Invalid request body.", 400);
  }
  const scenario = getConversationScenario(body.slug);
  if (!scenario) return jsonError("Scenario not found.", 404);

  const level = LEVELS.includes(body.level as ConversationLevel)
    ? (body.level as ConversationLevel)
    : "beginner";
  const spec = getScenarioLevelSpec(scenario, level);
  const forceScripted = body.engine === "scripted";

  // The opening line is authored content in both engines.
  const session = await createConversationSession(
    user.id,
    scenario.id,
    level,
    forceScripted ? "scripted" : "ai",
    spec.opening,
  );

  return json({
    session,
    scenario: {
      slug: scenario.slug,
      title: scenario.title,
      partner: scenario.partner,
      learnerGoal: scenario.learnerGoal,
      suggestedPhrases: spec.suggestedPhrases,
      turnsTarget: spec.turnsTarget,
    },
  });
}
