import { json, jsonError } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { runQuestionValidation } from "@/lib/exams/governance/validate";
import {
  VALIDATION_CATEGORIES,
  type ValidationCategory,
  type ValidationSeverity,
} from "@/lib/exams/governance/types";

/**
 * GET /api/exams/admin/governance/validation — the full question-validation
 * report across the eight mandated categories. Filters: category,
 * severity. Staff only.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  try {
    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const severity = url.searchParams.get("severity");
    if (category && !VALIDATION_CATEGORIES.includes(category as ValidationCategory)) {
      return jsonError("Unknown validation category.", 400);
    }
    if (severity && severity !== "blocking" && severity !== "warning") {
      return jsonError("Unknown severity.", 400);
    }

    const report = await runQuestionValidation();
    const issues = report.issues.filter(
      (issue) =>
        (!category || issue.category === category) &&
        (!severity || issue.severity === severity),
    );
    return json({ ...report, issues });
  } catch {
    return jsonError("Could not run question validation.", 500);
  }
}
