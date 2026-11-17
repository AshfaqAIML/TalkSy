import { json, jsonError } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { getGovernanceAnalytics } from "@/lib/exams/governance/analytics";
import { buildCourseReadiness } from "@/lib/exams/governance/completeness";
import { runQuestionValidation } from "@/lib/exams/governance/validate";

/**
 * GET /api/exams/admin/governance — the governance overview: the ten
 * mandated content-analytics metrics, the course completeness dashboard and
 * the question-validation summary. Staff only; every number is a real
 * aggregate computed on request.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  try {
    const [validation, readiness] = await Promise.all([
      runQuestionValidation(),
      buildCourseReadiness(),
    ]);
    const analytics = await getGovernanceAnalytics({ readiness, validation });
    return json({
      analytics,
      readiness,
      validation: {
        byCategory: validation.byCategory,
        blockingCount: validation.blockingCount,
        warningCount: validation.warningCount,
      },
    });
  } catch {
    return jsonError("Could not load the governance overview.", 500);
  }
}
