import type { Exercise } from "@/data/curriculum/types";

/**
 * Build a guaranteed-correct answer for any exercise type, from the
 * authoring (grading) data. Used by tests to prove every question in the
 * assessment banks is actually solvable.
 */
export function buildCorrectAnswer(exercise: Exercise): unknown {
  switch (exercise.type) {
    case "mcq":
    case "read-answer":
      return { optionId: exercise.correctOptionId };
    case "multi-select":
      return { optionIds: exercise.correctOptionIds };
    case "fill-blank":
    case "complete-sentence":
    case "correct-mistake":
    case "translate":
    case "short-answer":
    case "listen-answer":
    case "dictation":
      return { text: exercise.acceptedAnswers[0] };
    case "sentence-build":
      return { tokens: exercise.acceptedSentences[0].split(" ") };
    case "match":
      return { pairs: exercise.pairs };
    case "drag-drop":
      return {
        placements: exercise.items.map((item) => ({
          itemId: item.id,
          categoryId: item.categoryId,
        })),
      };
    case "rearrange":
      return { tokens: exercise.correctTokens };
    case "write-response": {
      const filler = "reading writing speaking listening everyday practice";
      let text = `I am learning English. ${filler}`;
      const required = exercise.mustInclude ?? [];
      for (const word of required) text += ` ${word}`;
      while (text.split(/\s+/).length < exercise.minWords + 2) text += ` ${filler}`;
      return { text };
    }
    case "speak-response":
      return { text: exercise.mustSay.join(" ") + " hello there" };
    default:
      return null;
  }
}
