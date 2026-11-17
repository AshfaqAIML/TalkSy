import { json } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { listEditableMocks } from "@/lib/exams/admin/questions";

/**
 * GET /api/exams/admin/questions/targets — curated mocks with their
 * sections, for the question editor's target picker. Assembled practice
 * sets are excluded (their content is generated). Staff only.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const mocks = await listEditableMocks();
  return json({ mocks });
}
