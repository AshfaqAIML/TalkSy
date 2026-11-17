import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { createAdminQuestion, listAdminQuestions, AdminServiceError } from "@/lib/exams/admin/questions";
import { questionCreateSchema } from "@/lib/exams/admin/types";

/**
 * GET /api/exams/admin/questions — the examination question bank with the
 * review workflow state. Staff only. Filters:
 *   ?status=draft|in-review|approved|published|retired|all
 *   &exam=IELTS|TOEFL_IBT &mockId=… &type=… &search=…
 *
 * POST /api/exams/admin/questions — create a draft question in a curated
 * mock section. Editor+. Payload/answer validated per type.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const url = new URL(req.url);
  const questions = await listAdminQuestions({
    status: url.searchParams.get("status") ?? undefined,
    examKey: url.searchParams.get("exam") ?? undefined,
    mockTestId: url.searchParams.get("mockId") ?? undefined,
    type: url.searchParams.get("type") ?? undefined,
    search: url.searchParams.get("search") ?? undefined,
  });
  return json({ questions });
}

export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");
  const parsed = questionCreateSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(
      parsed.error.issues[0]?.message ?? "Invalid question data.",
      422,
    );
  }
  try {
    const question = await createAdminQuestion(user.id, parsed.data);
    return json({ question }, 201);
  } catch (err) {
    if (err instanceof AdminServiceError) return jsonError(err.message, err.status);
    throw err;
  }
}
