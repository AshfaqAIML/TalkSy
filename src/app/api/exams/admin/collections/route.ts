import { json } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { getCollectionInventories } from "@/lib/exams/admin/collections";

/**
 * GET /api/exams/admin/collections — the four examination content
 * collections (IELTS Academic, IELTS General Training, IELTS UKVI
 * preparation, TOEFL iBT) with their content inventory: mocks, questions,
 * lessons, rubrics, pathway steps and the live spec version. Staff only.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const collections = await getCollectionInventories();
  return json({ collections });
}
