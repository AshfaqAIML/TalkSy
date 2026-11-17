import { db } from "@/lib/db";
import { requireStaff } from "@/lib/cms/rbac";
import type { CmsAuditEntryDto } from "@/data/cms/types";

/** GET /api/cms/admin/audit — recent content-workflow audit entries. */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const url = new URL(req.url);
  const entityType = url.searchParams.get("entityType") ?? undefined;
  const rows = await db.cmsAuditLog.findMany({
    where: entityType ? { entityType } : undefined,
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { actor: { select: { email: true } } },
  });
  const entries: CmsAuditEntryDto[] = rows.map((r) => ({
    id: r.id,
    action: r.action,
    entityType: r.entityType,
    entityId: r.entityId,
    actorEmail: r.actor?.email ?? null,
    detail: (() => {
      try {
        return JSON.parse(r.detail) as Record<string, unknown>;
      } catch {
        return {};
      }
    })(),
    createdAt: r.createdAt.toISOString(),
  }));
  return Response.json({ entries });
}
