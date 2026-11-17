import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, json } from "@/lib/api-helpers";
import { llmUsageSummary } from "@/lib/llm/usage";
import { llmProviderNames, activeProviderName } from "@/lib/llm/registry";

/**
 * GET /api/admin/ai-usage — AI usage monitoring for staff (PROMPT 38 §9):
 * per-feature call counts, outcomes, latency and token ESTIMATES over the
 * last 14 days, plus the configured provider inventory. Measurements only —
 * no prompt or reply content is ever stored or returned.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  try {
    const summary = await llmUsageSummary(14);
    const providers = llmProviderNames().map((name) => ({
      name,
      active: safeActive(name),
    }));
    return json({ summary, providers });
  } catch {
    return jsonError("Could not load AI usage.", 500);
  }
}

function safeActive(name: string): boolean {
  try {
    return activeProviderName() === name;
  } catch {
    return false;
  }
}
