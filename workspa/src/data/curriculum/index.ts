import type {
  BlockType,
  Exercise,
  ExerciseType,
  Lesson,
  Level,
  LevelId,
} from "./types";
import { preA1Lessons } from "./pre-a1";
import { a1Lessons } from "./a1";
import { preA1Exercises } from "./pre-a1-exercises";
import { a1Exercises } from "./a1-exercises";
import { posLessons } from "@/data/grammar/lessons-pos";
import { tenseLessons } from "@/data/grammar/lessons-tenses";
import { labLessons } from "@/data/grammar/lessons-lab";
import { posExercises } from "@/data/grammar/exercises-pos";
import { tenseExercises } from "@/data/grammar/exercises-tenses";
import { labExercisesA } from "@/data/grammar/exercises-lab-a";
import { labExercisesB } from "@/data/grammar/exercises-lab-b";
import { getPosModule } from "@/data/grammar/parts-of-speech";
import { getTense } from "@/data/grammar/tenses";

/**
 * Curriculum registry. Content is code: this module is the single source of
 * truth for lessons, exercises, levels and units.
 */

export * from "./types";

export const lessons: Lesson[] = [
  ...preA1Lessons,
  ...a1Lessons,
  ...posLessons,
  ...tenseLessons,
  ...labLessons,
];

export const exercises: Exercise[] = [
  ...preA1Exercises,
  ...a1Exercises,
  ...posExercises,
  ...tenseExercises,
  ...labExercisesA,
  ...labExercisesB,
];

const lessonBySlug = new Map(lessons.map((l) => [l.slug, l]));
const exerciseById = new Map(exercises.map((e) => [e.id, e]));

export function getLesson(slug: string): Lesson | undefined {
  return lessonBySlug.get(slug);
}

export function getExercise(id: string): Exercise | undefined {
  return exerciseById.get(id);
}

export function getExercisesByIds(ids: string[]): Exercise[] {
  return ids
    .map((id) => exerciseById.get(id))
    .filter((e): e is Exercise => e !== undefined);
}

/** All exercise ids referenced by a lesson's practice & challenge blocks. */
export function getLessonExerciseIds(lesson: Lesson): string[] {
  const ids: string[] = [];
  for (const section of lesson.sections) {
    for (const block of section.blocks) {
      if (block.type === "practice" || block.type === "challenge") {
        ids.push(...block.exerciseIds);
      }
    }
  }
  return ids;
}

// ---------------------------------------------------------------------------
// Level / unit structure
// ---------------------------------------------------------------------------

export const levels: Level[] = [
  {
    id: "pre-a1",
    name: "Pre-A1 · First Words",
    tagline: "Your very first English words — greetings, numbers, colors and family.",
    units: [
      {
        number: 1,
        title: "Hello, World!",
        description: "Greetings, numbers 1–10 and colors.",
        lessonSlugs: ["p1-1-1", "p1-1-2", "p1-1-3"],
      },
      {
        number: 2,
        title: "Me and My Family",
        description: "Talk about the people you love.",
        lessonSlugs: ["p1-2-1"],
      },
    ],
  },
  {
    id: "a1",
    name: "A1 · Building Blocks",
    tagline: "Your first grammar and your first real conversations.",
    units: [
      {
        number: 1,
        title: "Everyday English",
        description: "The verb 'to be' and café conversations.",
        lessonSlugs: ["a1-1-1", "a1-1-2"],
      },
    ],
  },
  {
    id: "grammar-core",
    name: "Grammar Core · School & Lab",
    tagline: "Grammar School and the Sentence Construction Laboratory — understand, compare, build.",
    units: [
      {
        number: 1,
        title: "Grammar School · Parts of Speech",
        description: "All eight parts of speech with categories, mistakes and activities.",
        lessonSlugs: ["grammar-pos-1", "grammar-pos-2", "grammar-pos-3", "grammar-pos-4"],
      },
      {
        number: 2,
        title: "Grammar School · Tenses",
        description: "All 12 tenses compared side by side — meaning first.",
        lessonSlugs: ["grammar-tenses-present", "grammar-tenses-past", "grammar-tenses-future"],
      },
      {
        number: 3,
        title: "Sentence Construction Laboratory",
        description: "Seven stages from word recognition to transformation.",
        lessonSlugs: [
          "lab-1-word-recognition",
          "lab-2-basic-structure",
          "lab-3-sentence-types",
          "lab-4-polarity",
          "lab-5-expansion",
          "lab-6-combination",
          "lab-7-transformation",
        ],
      },
    ],
  },
  {
    id: "a2",
    name: "A2 · Growing Skills",
    tagline: "Coming soon — past tense, travel and longer conversations.",
    units: [],
  },
];

export function getLevel(id: LevelId): Level | undefined {
  return levels.find((l) => l.id === id);
}

/** Ordered lesson slugs across the whole curriculum path. */
export function getCurriculumPath(): string[] {
  return levels.flatMap((level) =>
    level.units.flatMap((unit) => unit.lessonSlugs),
  );
}

/** The next lesson in the path after the given slug (if any). */
export function getNextLessonSlug(slug: string): string | null {
  const path = getCurriculumPath();
  const idx = path.indexOf(slug);
  if (idx === -1 || idx === path.length - 1) return null;
  return path[idx + 1];
}

// ---------------------------------------------------------------------------
// Integrity validation — run by tests and by the curriculum API.
// Returns every problem found; an empty array means the curriculum is valid.
// ---------------------------------------------------------------------------

export interface CurriculumIssue {
  code: string;
  message: string;
}

export function validateCurriculum(): CurriculumIssue[] {
  const issues: CurriculumIssue[] = [];
  const add = (code: string, message: string) => issues.push({ code, message });

  // --- Lessons ---
  const slugs = new Set<string>();
  for (const lesson of lessons) {
    if (slugs.has(lesson.slug)) add("duplicate-lesson-slug", `Lesson slug "${lesson.slug}" is used more than once.`);
    slugs.add(lesson.slug);

    if (lesson.sections.length === 0) add("empty-lesson", `Lesson "${lesson.slug}" has no sections.`);
    const sectionIds = new Set<string>();
    for (const section of lesson.sections) {
      if (sectionIds.has(section.id)) add("duplicate-section-id", `Section "${section.id}" repeats in lesson "${lesson.slug}".`);
      sectionIds.add(section.id);
      if (section.blocks.length === 0) add("empty-section", `Section "${section.id}" of lesson "${lesson.slug}" has no blocks.`);
    }

    // Practice & challenge references.
    for (const id of getLessonExerciseIds(lesson)) {
      if (!exerciseById.has(id)) {
        add("missing-exercise", `Lesson "${lesson.slug}" references unknown exercise "${id}".`);
      }
    }

    // Grammar block references.
    for (const section of lesson.sections) {
      for (const block of section.blocks) {
        if (block.type === "pos-module") {
          for (const moduleId of block.moduleIds) {
            if (!getPosModule(moduleId)) {
              add("bad-grammar-block", `Lesson "${lesson.slug}" references unknown part-of-speech module "${moduleId}".`);
            }
          }
        }
        if (block.type === "tense-comparison") {
          if (block.tenseIds.length !== 2) {
            add("bad-grammar-block", `Tense comparison in "${lesson.slug}" must compare exactly two tenses.`);
          }
          for (const tenseId of block.tenseIds) {
            if (!getTense(tenseId)) {
              add("bad-grammar-block", `Lesson "${lesson.slug}" references unknown tense "${tenseId}".`);
            }
          }
        }
        if (block.type === "challenge" && block.timed && (block.seconds ?? 0) < 30) {
          add("bad-challenge", `Timed challenge in "${lesson.slug}" needs at least 30 seconds.`);
        }
      }
    }

    // Assessment bank references.
    if (lesson.assessment) {
      if (lesson.assessment.questionCount < 1) add("bad-assessment", `Assessment of "${lesson.slug}" has questionCount < 1.`);
      if (lesson.assessment.passScore <= 0 || lesson.assessment.passScore > 1) add("bad-assessment", `Assessment of "${lesson.slug}" has an invalid passScore.`);
      for (const id of lesson.assessment.bank) {
        if (!exerciseById.has(id)) add("missing-exercise", `Assessment bank of "${lesson.slug}" references unknown exercise "${id}".`);
      }
      if (lesson.assessment.bank.length < lesson.assessment.questionCount) {
        add("bad-assessment", `Assessment of "${lesson.slug}" wants ${lesson.assessment.questionCount} questions but the bank only has ${lesson.assessment.bank.length}.`);
      }
    }

    // Summary vocabulary must be non-empty.
    if (lesson.summary.vocabulary.length === 0) add("bad-summary", `Lesson "${lesson.slug}" summary has no vocabulary.`);
  }

  // --- Exercises ---
  const ids = new Set<string>();
  for (const exercise of exercises) {
    if (ids.has(exercise.id)) add("duplicate-exercise-id", `Exercise id "${exercise.id}" is used more than once.`);
    ids.add(exercise.id);
    if (exercise.hints.length === 0) add("no-hints", `Exercise "${exercise.id}" has no hints.`);
    if (!exercise.feedback.correctAnswer) add("bad-feedback", `Exercise "${exercise.id}" has no correctAnswer in feedback.`);
    if (!exercise.feedback.explanation) add("bad-feedback", `Exercise "${exercise.id}" has no explanation in feedback.`);

    switch (exercise.type) {
      case "mcq":
      case "read-answer":
        if (!exercise.options.some((o) => o.id === exercise.correctOptionId)) {
          add("bad-exercise", `Exercise "${exercise.id}": correctOptionId not among options.`);
        }
        break;
      case "multi-select":
        for (const cid of exercise.correctOptionIds) {
          if (!exercise.options.some((o) => o.id === cid)) {
            add("bad-exercise", `Exercise "${exercise.id}": correctOptionId "${cid}" not among options.`);
          }
        }
        break;
      case "match": {
        const leftIds = new Set(exercise.leftItems.map((i) => i.id));
        const rightIds = new Set(exercise.rightItems.map((i) => i.id));
        for (const pair of exercise.pairs) {
          if (!leftIds.has(pair.leftId) || !rightIds.has(pair.rightId)) {
            add("bad-exercise", `Exercise "${exercise.id}": pair references unknown item.`);
          }
        }
        break;
      }
      case "drag-drop": {
        const catIds = new Set(exercise.categories.map((c) => c.id));
        for (const item of exercise.items) {
          if (!catIds.has(item.categoryId)) {
            add("bad-exercise", `Exercise "${exercise.id}": item "${item.id}" has unknown category "${item.categoryId}".`);
          }
        }
        break;
      }
      default:
        break;
    }
  }

  // --- Level / unit wiring ---
  const unitSlugs: string[] = [];
  for (const level of levels) {
    for (const unit of level.units) {
      unitSlugs.push(...unit.lessonSlugs);
      for (const slug of unit.lessonSlugs) {
        const lesson = lessonBySlug.get(slug);
        if (!lesson) {
          add("missing-lesson", `Unit ${level.id}-${unit.number} references unknown lesson "${slug}".`);
        } else if (lesson.levelId !== level.id || lesson.unit !== unit.number) {
          add("lesson-level-mismatch", `Lesson "${slug}" is listed under ${level.id} unit ${unit.number} but declares ${lesson.levelId} unit ${lesson.unit}.`);
        }
      }
    }
  }
  for (const lesson of lessons) {
    if (!unitSlugs.includes(lesson.slug)) {
      add("orphan-lesson", `Lesson "${lesson.slug}" is not listed in any unit.`);
    }
  }

  return issues;
}

/** Coverage helpers (used by tests and the engine docs). */
export function getBlockTypeCoverage(): Map<BlockType, number> {
  const counts = new Map<BlockType, number>();
  for (const lesson of lessons) {
    for (const section of lesson.sections) {
      for (const block of section.blocks) {
        counts.set(block.type, (counts.get(block.type) ?? 0) + 1);
      }
    }
  }
  return counts;
}

export function getExerciseTypeCoverage(): Map<ExerciseType, number> {
  const counts = new Map<ExerciseType, number>();
  for (const exercise of exercises) {
    counts.set(exercise.type, (counts.get(exercise.type) ?? 0) + 1);
  }
  return counts;
}
