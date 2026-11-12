/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  containsAllKeywords,
  countWords,
  levenshtein,
  normalizeText,
  normalizeWord,
  sentencesCloseEnough,
  seededShuffle,
  wordsCloseEnough,
} from "@/lib/engine/normalize";
import { validateAnswer } from "@/lib/engine/validators";
import { exercises as allExercises, getExercise } from "@/data/curriculum";
import type { DragDropExercise, Exercise, MatchExercise } from "@/data/curriculum/types";
import { buildCorrectAnswer } from "./helpers";

describe("text normalization", () => {
  it("normalizes case, whitespace and punctuation", () => {
    expect(normalizeText("  Hello,   World!! ")).toBe("hello, world");
    expect(normalizeText("Nice to meet you.")).toBe("nice to meet you");
    expect(normalizeWord("“Coffee,”")).toBe("coffee");
  });

  it("computes edit distance", () => {
    expect(levenshtein("kitten", "sitting")).toBe(3);
    expect(levenshtein("same", "same")).toBe(0);
  });

  it("tolerates small typos per word", () => {
    expect(wordsCloseEnough("mother", "mother")).toBe(true);
    expect(wordsCloseEnough("moter", "mother")).toBe(true); // 6 letters, 1 edit
    expect(wordsCloseEnough("father", "mother")).toBe(false);
  });

  it("matches sentences with a single typo", () => {
    expect(sentencesCloseEnough("Nice to meet you", "nice to meet you.")).toBe(true);
    expect(sentencesCloseEnough("Nice two meet you", "nice to meet you")).toBe(false);
  });

  it("checks keywords, including multi-word keywords", () => {
    expect(containsAllKeywords("How much is the coffee?", ["how much"])).toBe(true);
    expect(containsAllKeywords("The coffee is hot", ["how much"])).toBe(false);
    expect(containsAllKeywords("This is my red bag", ["this is my", "red"])).toBe(true);
  });

  it("counts words", () => {
    expect(countWords("I am a student.")).toBe(4);
    expect(countWords("one two   three")).toBe(3);
  });

  it("shuffles deterministically with a seed", () => {
    const a = seededShuffle([1, 2, 3, 4, 5], "seed-1");
    const b = seededShuffle([1, 2, 3, 4, 5], "seed-1");
    expect(a).toEqual(b);
    expect([...a].sort()).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("validators — all 15 exercise types", () => {
  it("1. mcq: grades correct and incorrect options", () => {
    const ex = getExercise("p1-1-1-mcq-1")!;
    expect(validateAnswer(ex, { optionId: "b" }).correct).toBe(true);
    expect(validateAnswer(ex, { optionId: "a" }).correct).toBe(false);
    expect(validateAnswer(ex, { optionId: "zzz" }).invalid).toBe(true);
    expect(validateAnswer(ex, null).invalid).toBe(true);
  });

  it("2. multi-select: exact set required, partial credit for near misses", () => {
    const ex = getExercise("p1-1-2-ms-1")!;
    expect(validateAnswer(ex, { optionIds: ["a", "b", "e"] }).correct).toBe(true);
    const partial = validateAnswer(ex, { optionIds: ["a", "b", "c"] });
    expect(partial.correct).toBe(false);
    expect(partial.score).toBeGreaterThan(0);
    expect(validateAnswer(ex, { optionIds: [] }).invalid).toBe(true);
  });

  it("3. fill-blank: accepts word variants and digits", () => {
    const ex = getExercise("p1-1-2-fb-1")!;
    expect(validateAnswer(ex, { text: "four" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "Four" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "4" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "five" }).correct).toBe(false);
  });

  it("4. match: requires every pair correct", () => {
    const ex = getExercise("p1-1-1-match-1")! as MatchExercise;
    const correct = { pairs: ex.pairs };
    expect(validateAnswer(ex, correct).correct).toBe(true);
    const swapped = { pairs: [{ leftId: "l1", rightId: "r2" }, ...ex.pairs.slice(1)] };
    expect(validateAnswer(ex, swapped).correct).toBe(false);
  });

  it("5. drag-drop: sorts items into the right categories", () => {
    const ex = getExercise("p1-1-2-dd-1")! as DragDropExercise;
    const correct = {
      placements: ex.items.map((item) => ({
        itemId: item.id,
        categoryId: item.categoryId,
      })),
    };
    expect(validateAnswer(ex, correct).correct).toBe(true);
    const wrong = { placements: correct.placements.slice(0, 2) };
    expect(validateAnswer(ex, wrong).invalid).toBe(true); // missing items
  });

  it("6. rearrange: word order must match exactly", () => {
    const ex = getExercise("p1-1-1-rearrange-1")!;
    expect(validateAnswer(ex, { tokens: ["how", "are", "you", "?"] }).correct).toBe(true);
    expect(validateAnswer(ex, { tokens: ["you", "are", "how", "?"] }).correct).toBe(false);
    expect(validateAnswer(ex, { tokens: ["how"] }).invalid).toBe(true);
  });

  it("7. complete-sentence: accepted answers or required keywords", () => {
    const ex = getExercise("p1-1-2-cs-1")!;
    expect(validateAnswer(ex, { text: "ten fingers" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "ten fingers and ten toes" }).correct).toBe(true);
    // keywords path: any answer containing "fingers"
    expect(validateAnswer(ex, { text: "I have ten FINGERS!" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "two arms" }).correct).toBe(false);
  });

  it("8. correct-mistake: fixes the grammar error", () => {
    const ex = getExercise("p1-1-3-cm-1")!;
    expect(validateAnswer(ex, { text: "I have a black phone." }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "I have a black phone" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "I have a phone black." }).correct).toBe(false);
  });

  it("9. translate: accepts equivalent translations", () => {
    const ex = getExercise("p1-1-1-translate-1")!;
    expect(validateAnswer(ex, { text: "Nice to meet you." }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "pleased to meet you" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "a lot of taste" }).correct).toBe(false);
  });

  it("10. short-answer: accepts any listed friendly answer", () => {
    const ex = getExercise("p1-1-1-short-1")!;
    expect(validateAnswer(ex, { text: "You're welcome." }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "no problem" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "thank you" }).correct).toBe(false);
  });

  it("11. listen-answer: graded on the comprehension question", () => {
    const ex = getExercise("p1-1-1-listen-1")!;
    expect(validateAnswer(ex, { text: "Anna" }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "Ben" }).correct).toBe(false);
  });

  it("12. dictation: exact transcription with typo tolerance", () => {
    const ex = getExercise("p1-1-1-dictation-1")!;
    expect(validateAnswer(ex, { text: "Nice to meet you." }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "nice to meet you" }).correct).toBe(true);
    // One-letter typo in a 5-letter word is tolerated.
    expect(validateAnswer(ex, { text: "Nice to meett you" }).correct).toBe(true);
    // But a different word ("too" ≠ "to") is not.
    expect(validateAnswer(ex, { text: "Nice too meet you" }).correct).toBe(false);
    expect(validateAnswer(ex, { text: "Hello how are you" }).correct).toBe(false);
  });

  it("13. read-answer: comprehension MCQ over a passage", () => {
    const ex = getExercise("p1-1-2-read-1")!;
    expect(validateAnswer(ex, { optionId: "b" }).correct).toBe(true);
    expect(validateAnswer(ex, { optionId: "c" }).correct).toBe(false);
  });

  it("14. write-response: word count and required content", () => {
    const ex = getExercise("p1-1-3-wr-1")!;
    const good = { text: "I see a white cup and a black phone on my big desk" };
    expect(validateAnswer(ex, good).correct).toBe(true);
    const tooShort = { text: "I see a cup" };
    expect(validateAnswer(ex, tooShort).correct).toBe(false);
    const noPhrase = { text: "There is a white cup and also a very black phone here" };
    expect(validateAnswer(ex, noPhrase).correct).toBe(false); // missing "i see"
  });

  it("15. speak-response: transcript must contain the target phrase", () => {
    const ex = getExercise("p1-1-1-speak-1")!;
    expect(validateAnswer(ex, { text: "Hello! My name is Ana." }).correct).toBe(true);
    expect(validateAnswer(ex, { text: "My name is Ana." }).correct).toBe(false); // no hello
    expect(validateAnswer(ex, { text: "Hi there friend" }).correct).toBe(false);
  });

  it("every exercise in the library is solvable by its own key", () => {
    for (const exercise of allExercises as Exercise[]) {
      const result = validateAnswer(exercise, buildCorrectAnswer(exercise));
      expect(result.correct).toBe(true);
    }
  });
});
