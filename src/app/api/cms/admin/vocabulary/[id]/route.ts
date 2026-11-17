import { db } from "@/lib/db";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { validateVocabRow } from "@/lib/vocab/manage";

type Ctx = { params: Promise<{ id: string }> };

/** GET /api/cms/admin/vocabulary/[id] — one managed entry. */
export async function GET(req: Request, ctx: Ctx) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const row = await db.vocabEntry.findUnique({ where: { id } });
  if (!row) return jsonError("Entry not found.", 404);
  return json({ entry: row });
}

/** PATCH /api/cms/admin/vocabulary/[id] — edit (revalidated) + optional approve. */
export async function PATCH(req: Request, ctx: Ctx) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Send the entry fields.", 400);

  const existing = await db.vocabEntry.findUnique({ where: { id } });
  if (!existing) return jsonError("Entry not found.", 404);

  // Merge over the existing row so partial edits keep stored fields.
  const merged = {
    word: body.word ?? existing.word,
    partOfSpeech: body.partOfSpeech ?? existing.partOfSpeech,
    definition: body.definition ?? existing.definition,
    pronunciation: body.pronunciation ?? existing.pronunciation,
    example: body.example ?? existing.example,
    exampleTranslation: body.exampleTranslation ?? existing.exampleTranslation,
    translation: body.translation ?? existing.translation,
    difficulty: body.difficulty ?? existing.difficulty,
    category: existing.categoryId,
    note: body.note ?? existing.note,
  };
  const validated = validateVocabRow(merged);
  if (!validated.ok) return jsonError(validated.errors.join("; "), 422);

  const status = typeof body.status === "string" && (body.status === "draft" || body.status === "approved")
    ? body.status
    : existing.status;

  const row = await db.vocabEntry.update({
    where: { id },
    data: { ...validated.value, status } as never,
  });
  return json({ entry: row });
}

/** DELETE /api/cms/admin/vocabulary/[id] — remove one managed entry. */
export async function DELETE(req: Request, ctx: Ctx) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const { id } = await ctx.params;
  try {
    await db.vocabEntry.delete({ where: { id } });
    return json({ ok: true });
  } catch {
    return jsonError("Entry not found.", 404);
  }
}
