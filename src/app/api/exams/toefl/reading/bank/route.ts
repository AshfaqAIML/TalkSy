import { json } from "@/lib/api-helpers";
import { readingLibraryIndex } from "@/lib/exams/toefl-bank/reading";
import { TOEFL_READING_TASK_LABELS, TOEFL_DIFFICULTY_LABELS } from "@/data/exams/toefl/reading-bank";
import { isLibrarySkill, LIBRARY_SKILL_LABELS, type LibrarySkill } from "@/data/exams/toefl/library-skills";
import { readingExerciseBySlug } from "@/data/exams/toefl/reading-bank";

/**
 * GET /api/exams/toefl/reading/bank — the reading practice library index
 * (metadata only: no passages needed for listing, no keys). Supports
 * ?q= search across titles/topics, ?task=, ?difficulty=, ?skill= filters.
 * Public: visitors can see what the library offers.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const task = url.searchParams.get("task") ?? "";
  const difficulty = url.searchParams.get("difficulty") ?? "";
  const skill = url.searchParams.get("skill") ?? "";

  let exercises = readingLibraryIndex();

  if (task && task in TOEFL_READING_TASK_LABELS) {
    exercises = exercises.filter((e) => e.taskType === task);
  }
  if (difficulty && /^[1-5]$/.test(difficulty)) {
    exercises = exercises.filter((e) => e.difficulty === Number(difficulty));
  }

  if (skill && isLibrarySkill(skill)) {
    const wanted = skill as LibrarySkill;
    exercises = exercises.filter((e) => {
      const ex = readingExerciseBySlug(e.slug);
      return ex ? ex.questions.some((qq) => qq.meta.skills.includes(wanted)) : false;
    });
  }

  if (q) {
    exercises = exercises.filter((e) =>
      [e.title, e.topic, e.taskLabel, TOEFL_DIFFICULTY_LABELS[e.difficulty as 1 | 2 | 3 | 4 | 5], LIBRARY_SKILL_LABELS[
        e.taskType === "complete-words" ? "vocabulary" : e.taskType === "daily-life" ? "comprehension" : "main-ideas"
      ]]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }

  return json({
    exercises,
    taskLabels: TOEFL_READING_TASK_LABELS,
    difficultyLabels: TOEFL_DIFFICULTY_LABELS,
    total: exercises.length,
  });
}
