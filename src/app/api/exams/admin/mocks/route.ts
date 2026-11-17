import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { db } from "@/lib/db";
import { assertMockPublishable } from "@/lib/exams/admin/workflow";

/**
 * GET /api/exams/admin/mocks — every mock test with lifecycle state and
 * question counts (staff).
 * PATCH /api/exams/admin/mocks — change a mock's status.
 * Body: { id: string, status: "draft" | "published" | "archived" }.
 * Publishing requires admin AND every question of the mock to be
 * published (human-approval chain); draft/archive requires editor+.
 */
export async function GET(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const mocks = await db.mockTest.findMany({
    orderBy: [{ examKey: "asc" }, { createdAt: "asc" }],
    include: { spec: { select: { name: true, version: true, status: true } } },
  });
  const enriched = await Promise.all(
    mocks.map(async (mock) => ({
      id: mock.id,
      examKey: mock.examKey,
      variant: mock.variant,
      title: mock.title,
      kind: mock.kind,
      lengthLabel: mock.lengthLabel,
      status: mock.status,
      spec: mock.spec,
      sectionCount: await db.mockTestSection.count({ where: { mockTestId: mock.id } }),
      questionCount: await db.mockTestQuestion.count({ where: { section: { mockTestId: mock.id } } }),
      attemptCount: await db.mockTestAttempt.count({ where: { mockTestId: mock.id } }),
      updatedAt: mock.updatedAt.toISOString(),
    })),
  );
  return json({ mocks: enriched });
}

export async function PATCH(req: Request) {
  const body = await readJson<{ id?: unknown; status?: unknown }>(req);
  const id = typeof body?.id === "string" ? body.id : "";
  const status = typeof body?.status === "string" ? body.status : "";
  if (!id || !["draft", "published", "archived"].includes(status)) {
    return jsonError("Body must be { id, status: draft|published|archived }.", 422);
  }
  // Publishing exposes content to learners — admin only.
  const { user, error } = await requireStaff(req, status === "published" ? "admin" : "editor");
  if (error) return error;
  const mock = await db.mockTest.findUnique({ where: { id } });
  if (!mock) return jsonError("Mock test not found.", 404);
  if (status === "published" && mock.status !== "published") {
    // Human-approval gate: every question must already be published.
    const gate = await assertMockPublishable(id);
    if (!gate.ok) {
      const detail = Object.entries(gate.blocking)
        .map(([state, count]) => `${count} ${state}`)
        .join(", ");
      return jsonError(
        `Cannot publish: the mock still has unpublished questions (${detail}). Move every question through review, approval and publish first.`,
        409,
      );
    }
  }
  const updated = await db.mockTest.update({ where: { id }, data: { status } });
  await db.cmsAuditLog.create({
    data: {
      actorId: user.id,
      action: "exam_mock.status",
      entityType: "exam_mock",
      entityId: id,
      detail: JSON.stringify({ from: mock.status, to: status, title: mock.title }),
    },
  });
  return json({ mock: { id: updated.id, status: updated.status } });
}
