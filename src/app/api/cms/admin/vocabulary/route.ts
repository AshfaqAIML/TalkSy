import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import {
  validateVocabRow,
  VOCAB_ENTRY_STATUSES,
  type VocabEntryStatus,
} from "@/lib/vocab/manage";

/**
 * GET  /api/cms/admin/vocabulary?status=&q= — list managed entries.
 * POST /api/cms/admin/vocabulary — create one entry (validated, draft).
 * PATCH /api/cms/admin/vocabulary — bulk status change (approve/revert) or
 *                                  bulk delete by ids.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const url = new URL(req.url);
  const status = url.searchParams.get("status") ?? "";
  const q = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const rows = await db.vocabEntry.findMany({ orderBy: [{ word: "asc" }] });
  const filtered = rows.filter((row) => {
    if (status && row.status !== status) return false;
    if (q) {
      const haystack = [row.word, row.definition, row.translation].join(" ").toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
  return json({ entries: filtered, totals: { all: rows.length, draft: rows.filter((r) => r.status === "draft").length, approved: rows.filter((r) => r.status === "approved").length } });
}

export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Send the entry fields.", 400);

  const validated = validateVocabRow(body);
  if (!validated.ok) return jsonError(validated.errors.join("; "), 422);

  const existing = await db.vocabEntry.findFirst({
    where: { word: validated.value.word, partOfSpeech: validated.value.partOfSpeech },
  });
  if (existing) {
    return jsonError(
      `"${validated.value.word}" (${validated.value.partOfSpeech}) already exists — edit it instead.`,
      422,
    );
  }

  const row = await db.vocabEntry.create({
    data: { ...validated.value, status: "draft", source: "manual", uploadedById: undefined } as never,
  });
  void user;
  return json({ entry: row }, 201);
}

export async function PATCH(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson<{ ids?: unknown; status?: unknown; delete?: unknown }>(req);
  const ids = Array.isArray(body?.ids) ? body.ids.filter((v): v is string => typeof v === "string") : [];
  if (ids.length === 0) return jsonError("Send the entry ids.", 400);

  if (body?.delete === true) {
    const result = await db.vocabEntry.deleteMany({ where: { id: { in: ids } } });
    return json({ deleted: result.count });
  }

  const status = String(body?.status ?? "");
  if (!VOCAB_ENTRY_STATUSES.includes(status as VocabEntryStatus)) {
    return jsonError("Status must be draft or approved.", 422);
  }
  const result = await db.vocabEntry.updateMany({
    where: { id: { in: ids } },
    data: { status: status as VocabEntryStatus },
  });
  return json({ updated: result.count });
}
