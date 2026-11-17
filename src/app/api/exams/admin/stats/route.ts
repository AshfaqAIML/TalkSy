import { json, jsonError } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { getExamAdminStats } from "@/lib/exams/admin/analytics";

/**
 * GET /api/exams/admin/stats — examination content analytics: published
 * lessons, questions by review state, mock counts, awaiting-review queue,
 * outdated content, most-attempted sections, average learner performance
 * and common weaknesses. Every value is a real aggregate. Staff only.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  try {
    const stats = await getExamAdminStats();
    return json({ stats });
  } catch {
    return jsonError("Could not load examination statistics.", 500);
  }
}
