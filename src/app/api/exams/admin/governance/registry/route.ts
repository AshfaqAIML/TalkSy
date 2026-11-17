import { json, jsonError } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { queryGovernanceRegistry } from "@/lib/exams/governance/registry";
import {
  GOVERNANCE_ENTITY_TYPES,
  GOVERNANCE_STATUSES,
  type GovernanceEntityType,
  type GovernanceStatus,
} from "@/lib/exams/governance/types";

/**
 * GET /api/exams/admin/governance/registry — the paged content registry:
 * every governed entity (examinations, versions, pathways, courses,
 * modules, chapters, lessons, exercises, questions, audio, passages, model
 * answers, rubrics, mocks) with its governance status, provenance, delivery
 * truth and deep links. Filters: entityType, status, unapprovedOnly,
 * liveUnapprovedOnly, q (free text), page, pageSize. Staff only.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  try {
    const url = new URL(req.url);
    const entityType = url.searchParams.get("entityType");
    const status = url.searchParams.get("status");
    const q = url.searchParams.get("q") ?? undefined;
    const page = Number(url.searchParams.get("page") ?? "1");
    const pageSize = Number(url.searchParams.get("pageSize") ?? "50");

    if (entityType && !GOVERNANCE_ENTITY_TYPES.includes(entityType as GovernanceEntityType)) {
      return jsonError("Unknown entity type.", 400);
    }
    if (status && !GOVERNANCE_STATUSES.includes(status as GovernanceStatus)) {
      return jsonError("Unknown governance status.", 400);
    }
    if (!Number.isFinite(page) || page < 1 || !Number.isFinite(pageSize) || pageSize < 1) {
      return jsonError("Invalid pagination.", 400);
    }

    const result = await queryGovernanceRegistry({
      entityType: entityType as GovernanceEntityType | undefined,
      status: status as GovernanceStatus | undefined,
      unapprovedOnly: url.searchParams.get("unapprovedOnly") === "1",
      liveUnapprovedOnly: url.searchParams.get("liveUnapprovedOnly") === "1",
      q: q ?? undefined,
      page,
      pageSize,
    });
    return json(result);
  } catch {
    return jsonError("Could not load the content registry.", 500);
  }
}
