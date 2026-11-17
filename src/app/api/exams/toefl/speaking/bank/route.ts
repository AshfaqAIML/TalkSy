import { json } from "@/lib/api-helpers";
import { speakingLibraryIndex } from "@/lib/exams/toefl-bank/speaking";
import { TOEFL_SPEAKING_TASK_LABELS, TOEFL_REPEAT_FOCUS_LABELS, speakingExerciseBySlug } from "@/data/exams/toefl/speaking-bank";

/**
 * GET /api/exams/toefl/speaking/bank — the speaking practice library index
 * (metadata only: no sample responses). Supports ?q= search across
 * titles/topics, ?task=, ?difficulty=, ?focus= (repeat focus tags),
 * ?topic= (interview topics) filters. Public.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const task = url.searchParams.get("task") ?? "";
  const difficulty = url.searchParams.get("difficulty") ?? "";
  const focus = url.searchParams.get("focus") ?? "";
  const topic = url.searchParams.get("topic") ?? "";

  let exercises = speakingLibraryIndex();

  if (task && task in TOEFL_SPEAKING_TASK_LABELS) {
    exercises = exercises.filter((e) => e.taskType === task);
  }
  if (difficulty && /^[1-5]$/.test(difficulty)) {
    exercises = exercises.filter((e) => e.difficulty === Number(difficulty));
  }
  if (focus && focus in TOEFL_REPEAT_FOCUS_LABELS) {
    exercises = exercises.filter((e) => e.taskType === "listen-repeat" && e.focus === focus);
  }
  if (topic) {
    exercises = exercises.filter((e) => e.taskType === "take-interview" && e.topic.toLowerCase() === topic.toLowerCase());
  }
  if (q) {
    exercises = exercises.filter((e) => {
      const ex = speakingExerciseBySlug(e.slug);
      const haystack = [
        e.title,
        e.taskLabel,
        ex && ex.taskType === "listen-repeat" ? TOEFL_REPEAT_FOCUS_LABELS[ex.focus] : "",
        ex && ex.taskType === "take-interview" ? `${ex.topic} ${ex.question}` : "",
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }

  return json({
    exercises,
    taskLabels: TOEFL_SPEAKING_TASK_LABELS,
    focusLabels: TOEFL_REPEAT_FOCUS_LABELS,
    total: exercises.length,
  });
}
