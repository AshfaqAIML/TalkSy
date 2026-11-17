import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { speakingLibraryPayload, purgeExpiredSpeakingAttempts } from "@/lib/speaking/service";
import { conversationScenarios } from "@/data/speaking/scenarios";
import { pronunciationItems } from "@/data/speaking/pronunciation";
import { PRONUNCIATION_CATEGORIES } from "@/data/speaking";
import { PRONUNCIATION_CATEGORY_META, STT_PROVIDER_META } from "@/data/speaking/types";
import { sttCapabilities } from "@/lib/speaking/stt";

/**
 * GET /api/speaking/library — everything the Speaking Lab hub needs:
 * tiered activities with progress, conversation scenarios, pronunciation
 * categories, settings and a privacy-safe stats summary.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  // Enforce the learner's transcript retention window on every read.
  await purgeExpiredSpeakingAttempts(user.id);

  const payload = await speakingLibraryPayload(user.id);

  return json({
    ...payload,
    scenarios: conversationScenarios.map((scenario) => ({
      id: scenario.id,
      slug: scenario.slug,
      title: scenario.title,
      emoji: scenario.emoji,
      description: scenario.description,
      category: scenario.category,
      partner: { name: scenario.partner.name, role: scenario.partner.role },
      learnerGoal: scenario.learnerGoal,
      levels: scenario.levels.map((spec) => ({
        level: spec.level,
        turnsTarget: spec.turnsTarget,
      })),
    })),
    pronunciation: {
      categories: PRONUNCIATION_CATEGORIES.map((category) => ({
        id: category,
        ...PRONUNCIATION_CATEGORY_META[category],
        itemCount: pronunciationItems.filter((item) => item.category === category).length,
      })),
      items: pronunciationItems,
    },
    providerMeta: STT_PROVIDER_META,
    capabilities: sttCapabilities(),
  });
}
