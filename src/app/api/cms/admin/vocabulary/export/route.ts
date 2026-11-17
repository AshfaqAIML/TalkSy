import { db } from "@/lib/db";
import { json } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";

/**
 * GET /api/cms/admin/vocabulary/export — all managed entries (both statuses)
 * as JSON, ready to re-import after editing. The core 135-word library is
 * content-as-code and is never exported or rewritten from here.
 */
export async function GET(req: Request) {
  const { error } = await requireStaff(req, "editor");
  if (error) return error;
  const rows = await db.vocabEntry.findMany({ orderBy: [{ word: "asc" }] });
  return json({
    exportedAt: new Date().toISOString(),
    count: rows.length,
    rows: rows.map((row) => ({
      word: row.word,
      partOfSpeech: row.partOfSpeech,
      definition: row.definition,
      pronunciation: row.pronunciation,
      example: row.example,
      exampleTranslation: row.exampleTranslation,
      translation: row.translation,
      difficulty: row.difficulty,
      category: row.categoryId,
      note: row.note,
      status: row.status,
      source: row.source,
    })),
  });
}
