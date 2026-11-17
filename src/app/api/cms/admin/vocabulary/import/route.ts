import { db } from "@/lib/db";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { validateVocabRow } from "@/lib/vocab/manage";

/**
 * POST /api/cms/admin/vocabulary/import — bulk import (PROMPT 39 §6).
 * Body: JSON array of rows (or { rows: [...] }). Every row is validated
 * independently; invalid rows are rejected WITH their per-row errors and
 * valid rows are imported as drafts (nothing is approved implicitly).
 * Duplicates against existing entries (word + partOfSpeech) are skipped and
 * reported.
 */
export async function POST(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const body = await readJson<unknown>(req);
  const rows = Array.isArray(body)
    ? body
    : body && typeof body === "object" && Array.isArray((body as { rows?: unknown }).rows)
      ? ((body as { rows: unknown[] }).rows as unknown[])
      : null;
  if (!rows) return jsonError("Send a JSON array of entries (or { rows: [...] }).", 400);
  if (rows.length > 500) return jsonError("Import at most 500 rows per batch.", 422);

  const existing = await db.vocabEntry.findMany({
    select: { word: true, partOfSpeech: true },
  });
  const seen = new Set(existing.map((r) => `${r.word.toLowerCase()}|${r.partOfSpeech}`));

  const imported: { id: string; word: string }[] = [];
  const rejected: { row: number; word: string; errors: string[] }[] = [];
  const skipped: { row: number; word: string }[] = [];

  for (let i = 0; i < rows.length; i += 1) {
    const raw = rows[i];
    if (!raw || typeof raw !== "object") {
      rejected.push({ row: i + 1, word: "", errors: ["row must be an object"] });
      continue;
    }
    const validated = validateVocabRow(raw as Record<string, unknown>);
    const wordPreview = String((raw as Record<string, unknown>).word ?? "").slice(0, 30);
    if (!validated.ok) {
      rejected.push({ row: i + 1, word: wordPreview, errors: validated.errors });
      continue;
    }
    const key = `${validated.value.word.toLowerCase()}|${validated.value.partOfSpeech}`;
    if (seen.has(key)) {
      skipped.push({ row: i + 1, word: validated.value.word });
      continue;
    }
    seen.add(key);
    const created = await db.vocabEntry.create({
      data: { ...validated.value, status: "draft", source: "import" } as never,
    });
    imported.push({ id: created.id, word: created.word });
  }

  return json({
    total: rows.length,
    imported: imported.length,
    skippedDuplicates: skipped.length,
    rejected: rejected.length,
    importedRows: imported,
    skipped,
    rejectedRows: rejected.slice(0, 50),
  });
}
