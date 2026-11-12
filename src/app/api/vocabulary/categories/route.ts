import { json } from "@/lib/api-helpers";
import { getCategoryCounts, vocabCategories, vocabContextItems } from "@/data/vocabulary";

/**
 * GET /api/vocabulary/categories — all categories with subcategories, word
 * counts and the context passages available per category. Public.
 */
export async function GET() {
  const counts = getCategoryCounts();
  return json({
    categories: vocabCategories.map((category) => ({
      ...category,
      total: counts[category.id]?.total ?? 0,
      contextCount: vocabContextItems.filter((c) => c.categoryId === category.id).length,
      subcategories: category.subcategories.map((sub) => ({
        ...sub,
        total: counts[category.id]?.bySubcategory[sub.id] ?? 0,
      })),
    })),
  });
}
