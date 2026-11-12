/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  getReadingQuestion,
  getReadingText,
  readingCategories,
  readingLevels,
  readingTexts,
  validateReadingLibrary,
} from "@/data/reading";
import { gradeReadingQuestion, toSafeReadingQuestion } from "@/lib/reading/grade";
import { SKILL_LABELS, COMPREHENSION_SKILLS } from "@/data/reading/types";

describe("reading library integrity", () => {
  it("passes the full integrity validation", () => {
    const report = validateReadingLibrary();
    expect(report.errors).toEqual([]);
    expect(report.ok).toBe(true);
  });

  it("has all four levels with texts and matching category coverage", () => {
    expect(readingLevels.map((l) => l.id)).toEqual([
      "beginner",
      "elementary",
      "intermediate",
      "advanced",
    ]);
    for (const level of readingLevels) {
      const texts = readingTexts.filter((t) => t.level === level.id);
      expect(texts.length).toBeGreaterThanOrEqual(5);
    }
    // Every category has at least one text in each of its levels.
    for (const category of readingCategories) {
      for (const level of category.levels) {
        const count = readingTexts.filter(
          (t) => t.category === category.id && t.level === level,
        ).length;
        expect(count).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it("looks texts up by slug and question by text+id", () => {
    const text = getReadingText("the-lost-key");
    expect(text?.title).toBe("The Lost Key");
    expect(text?.questions.length).toBeGreaterThan(0);
    const question = getReadingQuestion(text!.id, text!.questions[0].id);
    expect(question).not.toBeNull();
    expect(getReadingText("does-not-exist")).toBeNull();
    expect(getReadingQuestion(text!.id, "nope")).toBeNull();
  });

  it("covers every comprehension skill in every level", () => {
    for (const level of readingLevels) {
      const skills = new Set(
        readingTexts
          .filter((t) => t.level === level.id)
          .flatMap((t) => t.questions.map((q) => q.skill)),
      );
      // Each level should exercise at least 5 of the 7 skills.
      expect(skills.size).toBeGreaterThanOrEqual(5);
    }
    // Across the library, all 7 skills are assessed.
    const all = new Set(readingTexts.flatMap((t) => t.questions.map((q) => q.skill)));
    expect([...all].sort()).toEqual([...COMPREHENSION_SKILLS].sort());
    expect(Object.keys(SKILL_LABELS)).toHaveLength(7);
  });

  it("has translations for every paragraph and glossary entries that appear in the text", () => {
    for (const text of readingTexts) {
      for (const paragraph of text.paragraphs) {
        expect(paragraph.translation.trim().length).toBeGreaterThan(0);
      }
      const body = text.paragraphs.map((p) => p.text).join(" ");
      for (const entry of text.glossary) {
        // Inflection-tolerant headword check ("get up" matches "gets up").
        const headword = entry.term.replace(/\s*\([^)]*\)\s*/g, " ").trim();
        const firstWord = headword.split(/\s+/)[0];
        const appears =
          body.toLowerCase().includes(headword.toLowerCase()) ||
          new RegExp(`\\b${firstWord}`, "i").test(body);
        expect(
          appears,
          `${text.slug}: glossary term "${entry.term}" not found in the text`,
        ).toBe(true);
      }
    }
  });
});

describe("reading grading", () => {
  it("grades choice questions (correct, wrong, invalid)", () => {
    const text = getReadingText("the-blue-whale")!;
    const question = text.questions.find((q) => q.format === "choice")!;
    const correct = gradeReadingQuestion(question, { format: "choice", optionId: question.correctOptionId });
    expect(correct).toEqual({ correct: true, score: 1, invalid: false });

    const wrongId = question.options.find((o) => o.id !== question.correctOptionId)!.id;
    const wrong = gradeReadingQuestion(question, { format: "choice", optionId: wrongId });
    expect(wrong.correct).toBe(false);

    const invalid = gradeReadingQuestion(question, { format: "choice", optionId: "zzz" });
    expect(invalid.invalid).toBe(true);
    const malformed = gradeReadingQuestion(question, { format: "sequence", order: [] });
    expect(malformed.invalid).toBe(true);
  });

  it("grades sequence questions with position-based partial credit", () => {
    const text = getReadingText("mias-day")!;
    const question = text.questions.find((q) => q.format === "sequence")!;
    const correct = gradeReadingQuestion(question, {
      format: "sequence",
      order: question.correctOrder,
    });
    expect(correct).toEqual({ correct: true, score: 1, invalid: false });

    // Swap two events: partially right.
    const swapped = [...question.correctOrder];
    [swapped[0], swapped[1]] = [swapped[1], swapped[0]];
    const partial = gradeReadingQuestion(question, { format: "sequence", order: swapped });
    expect(partial.correct).toBe(false);
    expect(partial.score).toBeGreaterThan(0);
    expect(partial.score).toBeLessThan(1);

    // Malformed: wrong ids or wrong length.
    expect(gradeReadingQuestion(question, { format: "sequence", order: ["x", "y"] }).invalid).toBe(true);
    expect(gradeReadingQuestion(question, { format: "sequence", order: [] }).invalid).toBe(true);
  });

  it("grades short-text questions with accepted answers, keywords and typo tolerance", () => {
    const text = getReadingText("a-rainy-sunday")!;
    const question = text.questions.find((q) => q.format === "short-text" && q.keywords)!;
    // Keywords present (order and extra words don't matter).
    const byKeywords = gradeReadingQuestion(question, {
      format: "short-text",
      text: "The family made a beach in the living room with a blanket and banana ice cream!",
    });
    expect(byKeywords.correct).toBe(true);
    // Missing a keyword.
    const missing = gradeReadingQuestion(question, {
      format: "short-text",
      text: "They made a beach at home",
    });
    expect(missing.correct).toBe(false);
    // Accepted answer with a small typo still passes (word-level tolerance).
    const typo = gradeReadingQuestion(question, {
      format: "short-text",
      text: "They made a beech in the living room",
    });
    expect(typo.correct).toBe(true);
    // Empty is invalid.
    expect(gradeReadingQuestion(question, { format: "short-text", text: "   " }).invalid).toBe(true);
  });

  it("sanitises questions: no grading data leaks, shuffles are seed-stable", () => {
    for (const text of readingTexts) {
      for (const question of text.questions) {
        const safe = toSafeReadingQuestion(question, "seed-1") as Record<string, unknown>;
        expect(safe["correctOptionId"]).toBeUndefined();
        expect(safe["correctOrder"]).toBeUndefined();
        expect(safe["acceptedAnswers"]).toBeUndefined();
        expect(safe["keywords"]).toBeUndefined();
        expect(safe["feedback"]).toBeUndefined();
        // Hints stay client-side for progressive reveal (like the lesson engine).
        expect(Array.isArray(safe["hints"])).toBe(true);
      }
    }
    const text = getReadingText("the-lost-key")!;
    const choice = text.questions.find((q) => q.format === "choice") as
      | import("@/data/reading/types").ChoiceQuestion
      | undefined;
    const a = toSafeReadingQuestion(choice!, "seed-1") as import("@/data/reading/types").SafeChoiceQuestion;
    const b = toSafeReadingQuestion(choice!, "seed-1") as import("@/data/reading/types").SafeChoiceQuestion;
    const c = toSafeReadingQuestion(choice!, "seed-2") as import("@/data/reading/types").SafeChoiceQuestion;
    expect(a.options.map((o) => o.id)).toEqual(b.options.map((o) => o.id));
    // Same option set regardless of shuffle.
    expect(new Set(a.options.map((o) => o.id))).toEqual(new Set(c.options.map((o) => o.id)));
  });
});
