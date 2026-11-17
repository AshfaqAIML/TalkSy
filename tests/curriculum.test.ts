/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  computeLessonStatus,
  initialProgress,
  isValidSectionId,
  parseSectionsCompleted,
} from "@/lib/engine/progress";
import {
  getBlockTypeCoverage,
  getExerciseTypeCoverage,
  getLesson,
  lessons,
  validateCurriculum,
} from "@/data/curriculum";
import type { BlockType, ExerciseType } from "@/data/curriculum/types";

const ALL_BLOCK_TYPES: BlockType[] = [
  "text",
  "heading",
  "definition",
  "example",
  "table",
  "grammar-rule",
  "vocabulary-list",
  "image",
  "diagram",
  "audio",
  "video",
  "dialogue",
  "note",
  "warning",
  "practice",
  "homework",
  "pos-module",
  "tense-comparison",
  "sentence-anatomy",
  "challenge",
];

const ALL_EXERCISE_TYPES: ExerciseType[] = [
  "mcq",
  "multi-select",
  "fill-blank",
  "match",
  "drag-drop",
  "rearrange",
  "sentence-build",
  "complete-sentence",
  "correct-mistake",
  "translate",
  "short-answer",
  "listen-answer",
  "dictation",
  "read-answer",
  "write-response",
  "speak-response",
];

describe("curriculum integrity", () => {
  it("passes the full validation with zero issues", () => {
    const issues = validateCurriculum();
    expect(issues).toEqual([]);
  });

  it("covers all 20 lesson block types in the library", () => {
    const coverage = getBlockTypeCoverage();
    for (const type of ALL_BLOCK_TYPES) {
      expect(coverage.get(type) ?? 0).toBeGreaterThan(0);
    }
  });

  it("covers all 16 exercise types in the library", () => {
    const coverage = getExerciseTypeCoverage();
    for (const type of ALL_EXERCISE_TYPES) {
      expect(coverage.get(type) ?? 0).toBeGreaterThan(0);
    }
  });

  it("has 20 lessons across the levels with assessments", () => {
    expect(lessons).toHaveLength(20);
    expect(lessons.filter((l) => l.levelId === "pre-a1")).toHaveLength(4);
    expect(lessons.filter((l) => l.levelId === "a1")).toHaveLength(2);
    expect(lessons.filter((l) => l.levelId === "grammar-core")).toHaveLength(14);
    for (const lesson of lessons) {
      expect(lesson.assessment).toBeDefined();
      expect(lesson.sections.length).toBeGreaterThan(0);
      expect(lesson.summary.keyPoints.length).toBeGreaterThan(0);
    }
  });

  it("keeps section ids unique within a lesson", () => {
    for (const lesson of lessons) {
      const ids = lesson.sections.map((s) => s.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
});

describe("progress engine — no auto-mastery", () => {
  const lesson = getLesson("p1-1-1")!;

  it("initializes progress with NO completion", () => {
    const init = initialProgress("p1-1-1");
    expect(init.status).toBe("in-progress");
    expect(parseSectionsCompleted(init.sectionsCompleted)).toEqual([]);
  });

  it("a lesson that was only OPENED is never completed", () => {
    // Simulates: user opens the lesson (progress row created empty).
    const status = computeLessonStatus(lesson, { sectionsCompleted: [] }, false);
    expect(status.completed).toBe(false);
    expect(status.sectionsDone).toBe(0);
    expect(status.sectionsTotal).toBe(4);
  });

  it("completing every section is still not enough when the assessment is not passed", () => {
    const all = lesson.sections.map((s) => s.id);
    const status = computeLessonStatus(lesson, { sectionsCompleted: all }, false);
    expect(status.completed).toBe(false);
    expect(status.sectionsDone).toBe(4);
  });

  it("all sections + passed assessment completes the lesson", () => {
    const all = lesson.sections.map((s) => s.id);
    const status = computeLessonStatus(lesson, { sectionsCompleted: all }, true);
    expect(status.completed).toBe(true);
  });

  it("a passed assessment alone (without sections) does not complete the lesson", () => {
    const status = computeLessonStatus(lesson, { sectionsCompleted: [] }, true);
    expect(status.completed).toBe(false);
  });

  it("validates section ids against the lesson", () => {
    expect(isValidSectionId(lesson, "first-dialogue")).toBe(true);
    expect(isValidSectionId(lesson, "made-up-section")).toBe(false);
  });
});
