import { createQuestion, listQuestions } from "@/lib/cms/service";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

/** GET /api/cms/admin/questions?status=&type=&skill=&search= */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const url = new URL(req.url);
  const questions = await listQuestions({
    status: url.searchParams.get("status") ?? undefined,
    type: url.searchParams.get("type") ?? undefined,
    skill: url.searchParams.get("skill") ?? undefined,
    search: url.searchParams.get("search") ?? undefined,
  });
  return Response.json({ questions });
}

/** POST /api/cms/admin/questions — add a question (all 16 exercise types). */
export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson(req);
  if (!body) return jsonError("Invalid request body.");
  try {
    const question = await createQuestion(user.id, body);
    return Response.json({ question });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Could not save question.", status);
  }
}
