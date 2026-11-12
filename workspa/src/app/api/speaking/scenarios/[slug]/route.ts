import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getConversationScenario } from "@/data/speaking";

/**
 * GET /api/speaking/scenarios/[slug] — the scenario brief for the simulator.
 * Fallback script lines (the partner's future turns) stay server-side.
 */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { slug } = await ctx.params;
  const scenario = getConversationScenario(slug);
  if (!scenario) return jsonError("Scenario not found.", 404);

  return json({
    scenario: {
      id: scenario.id,
      slug: scenario.slug,
      title: scenario.title,
      emoji: scenario.emoji,
      description: scenario.description,
      category: scenario.category,
      partner: scenario.partner,
      setting: scenario.setting,
      learnerGoal: scenario.learnerGoal,
      levels: scenario.levels.map((spec) => ({
        level: spec.level,
        suggestedPhrases: spec.suggestedPhrases,
        opening: spec.opening,
        turnsTarget: spec.turnsTarget,
      })),
    },
  });
}
