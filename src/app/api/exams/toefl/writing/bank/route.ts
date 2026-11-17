import { json } from "@/lib/api-helpers";
import { writingLibraryIndex } from "@/lib/exams/toefl-bank/writing";
import {
  TOEFL_WRITING_TASK_LABELS,
  TOEFL_SENTENCE_FOCUS_LABELS,
  TOEFL_DIFFICULTY_LABELS,
  TOEFL_EMAIL_PURPOSE_LABELS,
  writingExerciseBySlug,
} from "@/data/exams/toefl/writing-bank";

/**
 * GET /api/exams/toefl/writing/bank — the writing practice library index
 * (metadata only: no answer keys, no model responses). Supports
 * ?q= search across titles/labels, ?task=, ?difficulty=, ?focus= (sentence
 * focuses), ?purpose= (email purposes), ?discipline= filters.
 * Public: visitors can see what the library offers.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  const task = url.searchParams.get("task") ?? "";
  const difficulty = url.searchParams.get("difficulty") ?? "";
  const focus = url.searchParams.get("focus") ?? "";
  const purpose = url.searchParams.get("purpose") ?? "";
  const discipline = url.searchParams.get("discipline") ?? "";

  let exercises = writingLibraryIndex();

  if (task && task in TOEFL_WRITING_TASK_LABELS) {
    exercises = exercises.filter((e) => e.taskType === task);
  }
  if (difficulty && /^[1-5]$/.test(difficulty)) {
    exercises = exercises.filter((e) => e.difficulty === Number(difficulty));
  }
  if (focus && focus in TOEFL_SENTENCE_FOCUS_LABELS) {
    exercises = exercises.filter((e) => e.taskType === "build-sentence" && e.focus === focus);
  }
  if (purpose && purpose in TOEFL_EMAIL_PURPOSE_LABELS) {
    exercises = exercises.filter((e) => e.taskType === "write-email" && e.purpose === purpose);
  }
  if (discipline) {
    exercises = exercises.filter((e) => e.taskType === "academic-discussion" && e.discipline.toLowerCase() === discipline.toLowerCase());
  }
  if (q) {
    exercises = exercises.filter((e) => {
      const ex = writingExerciseBySlug(e.slug);
      const haystack = [
        e.title,
        e.taskLabel,
        TOEFL_DIFFICULTY_LABELS[e.difficulty as 1 | 2 | 3 | 4 | 5],
        ex && ex.taskType === "build-sentence" ? TOEFL_SENTENCE_FOCUS_LABELS[ex.focus] : "",
        ex && ex.taskType === "write-email" ? `${TOEFL_EMAIL_PURPOSE_LABELS[ex.purpose]} ${ex.recipient}` : "",
        ex && ex.taskType === "academic-discussion" ? ex.discipline : "",
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }

  return json({
    exercises,
    taskLabels: TOEFL_WRITING_TASK_LABELS,
    difficultyLabels: TOEFL_DIFFICULTY_LABELS,
    focusLabels: TOEFL_SENTENCE_FOCUS_LABELS,
    purposeLabels: TOEFL_EMAIL_PURPOSE_LABELS,
    total: exercises.length,
  });
}
