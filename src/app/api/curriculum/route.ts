import {
  getBlockTypeCoverage,
  getExerciseTypeCoverage,
  lessons,
  levels,
  validateCurriculum,
} from "@/data/curriculum";
import { json } from "@/lib/api-helpers";

/**
 * Public curriculum tree: levels → units → lesson metadata.
 * No authentication required; content is code and contains no user data.
 */
export async function GET() {
  const issues = validateCurriculum();
  if (issues.length > 0) {
    return json(
      { error: "curriculum-invalid", issues: issues.slice(0, 10) },
      500,
    );
  }

  return json({
    levels: levels.map((level) => ({
      id: level.id,
      name: level.name,
      tagline: level.tagline,
      units: level.units.map((unit) => ({
        number: unit.number,
        title: unit.title,
        description: unit.description,
        lessons: unit.lessonSlugs.map((slug) => {
          const lesson = lessons.find((l) => l.slug === slug)!;
          return {
            slug: lesson.slug,
            title: lesson.title,
            description: lesson.description,
            estimatedMinutes: lesson.estimatedMinutes,
            sectionCount: lesson.sections.length,
            hasAssessment: Boolean(lesson.assessment),
          };
        }),
      })),
    })),
    totals: {
      lessons: lessons.length,
      blocks: [...getBlockTypeCoverage().values()].reduce((a, b) => a + b, 0),
      blockTypes: getBlockTypeCoverage().size,
      exerciseTypes: getExerciseTypeCoverage().size,
    },
  });
}
