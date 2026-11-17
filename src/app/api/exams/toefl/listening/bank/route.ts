import { json } from "@/lib/api-helpers";
import { listeningLibraryIndex } from "@/lib/exams/toefl-bank/listening";
import { TOEFL_LISTENING_TASK_LABELS } from "@/data/exams/toefl/listening-bank";
import { isLibrarySkill, type LibrarySkill } from "@/data/exams/toefl/library-skills";
import { listeningExerciseBySlug } from "@/data/exams/toefl/listening-bank";

/**
 * GET /api/exams/toefl/listening/bank — the listening practice library index
 * (metadata only: no scripts, no keys). Supports ?q=, ?task=, ?difficulty=,
 * ?skill= and ?accent= filters. Public.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const task = url.searchParams.get("task") ?? "";
  const difficulty = url.searchParams.get("difficulty") ?? "";
  const skill = url.searchParams.get("skill") ?? "";

  let exercises = listeningLibraryIndex();

  if (task && task in TOEFL_LISTENING_TASK_LABELS) {
    exercises = exercises.filter((e) => e.taskType === task);
  }
  if (difficulty && /^[1-5]$/.test(difficulty)) {
    exercises = exercises.filter((e) => e.difficulty === Number(difficulty));
  }
  if (skill && isLibrarySkill(skill)) {
    const wanted = skill as LibrarySkill;
    exercises = exercises.filter((e) => e.targetSkill === wanted || e.taskType === "academic-talk");
  }
  if (q) {
    exercises = exercises.filter((e) => [e.title, e.scene, e.taskLabel, ...e.speakers].join(" ").toLowerCase().includes(q));
  }

  return json({
    exercises,
    taskLabels: TOEFL_LISTENING_TASK_LABELS,
    total: exercises.length,
  });
}
