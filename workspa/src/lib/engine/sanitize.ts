/**
 * Sanitizes exercises for client delivery: every grading field is stripped.
 * The client can only learn correctness from the server's attempt response.
 */

import type { Exercise, SafeExercise } from "@/data/curriculum/types";
import { seededShuffle } from "./normalize";

/**
 * Strip grading data and (for rearrange) pre-scramble the tokens with a
 * per-exercise stable seed so the scramble is stable across reloads but not
 * equal to the correct order.
 */
export function sanitizeExercise(exercise: Exercise): SafeExercise {
  const base = exercise as unknown as Record<string, unknown>;
  const safe: Record<string, unknown> = {
    id: base.id,
    type: base.type,
    difficulty: base.difficulty,
    skill: base.skill,
    prompt: base.prompt,
    hints: base.hints,
    tags: base.tags,
  };

  switch (exercise.type) {
    case "mcq":
    case "read-answer":
    case "multi-select":
      safe.passage = base.passage;
      safe.passageTitle = base.passageTitle;
      safe.question = base.question;
      safe.options = base.options;
      break;
    case "fill-blank":
      safe.sentence = base.sentence;
      break;
    case "match":
      safe.leftItems = base.leftItems;
      safe.rightItems = base.rightItems;
      break;
    case "drag-drop":
      safe.categories = base.categories;
      // Strip categoryId from items.
      safe.items = (base.items as { id: string; label: string }[]).map((i) => ({
        id: i.id,
        label: i.label,
      }));
      break;
    case "rearrange": {
      let tokens = seededShuffle(exercise.correctTokens, `rearrange:${exercise.id}`);
      if (tokens.join(" ") === exercise.correctTokens.join(" ")) {
        tokens = [...tokens.slice(1), tokens[0]];
      }
      safe.tokens = tokens;
      break;
    }
    case "complete-sentence":
      safe.sentenceStart = base.sentenceStart;
      safe.sentenceEnd = base.sentenceEnd;
      break;
    case "correct-mistake":
      safe.incorrectSentence = base.incorrectSentence;
      break;
    case "translate":
      safe.direction = base.direction;
      safe.source = base.source;
      break;
    case "short-answer":
      safe.question = base.question;
      break;
    case "listen-answer":
      safe.audioText = base.audioText;
      safe.question = base.question;
      break;
    case "dictation":
      safe.audioText = base.audioText;
      break;
    case "write-response":
      safe.situation = base.situation;
      safe.minWords = base.minWords;
      break;
    case "speak-response":
      safe.situation = base.situation;
      safe.targetPhrases = base.targetPhrases;
      break;
    case "sentence-build": {
      // Tiles (correct tokens + distractors), deterministically scrambled.
      let tiles = seededShuffle(exercise.tiles, `build:${exercise.id}`);
      // If the shuffle accidentally equals an accepted order, rotate once.
      const normalize = (s: string) =>
        s.split(/\s+/).map((t) => t.trim().toLowerCase()).filter(Boolean).join(" ");
      if (
        exercise.acceptedSentences.some(
          (accepted) => normalize(tiles.join(" ")) === normalize(accepted),
        )
      ) {
        tiles = [...tiles.slice(1), tiles[0]];
      }
      safe.tiles = tiles;
      break;
    }
  }

  return safe as unknown as SafeExercise;
}

export function sanitizeExercises(exercises: Exercise[]): SafeExercise[] {
  return exercises.map(sanitizeExercise);
}
