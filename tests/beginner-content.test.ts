import { describe, test, expect } from "bun:test";
import { curriculum, orderedLessonSlugs } from "../src/data/curriculum";
import { validateStructuredLessons } from "../src/data/curriculum/validate";
import { buildLessonFlow, PHASE_LABELS } from "../src/data/curriculum/lesson-flow";
import { findLesson, isGradableExercise, isStructuredLesson } from "../src/data/curriculum/types";
import type { StructuredCourseLesson } from "../src/data/curriculum/types";

/**
 * Beginner course (P1 Foundations) content validation tests.
 *
 * These are the test-enforced content quality gates for the first 30
 * lessons: the full 17-section template, answer keys, exercise phases,
 * prerequisites, language quality and content governance. A failing rule
 * blocks the stage checkpoint.
 *
 * Governance rule under test (never mark AI content expert-approved):
 * every P1 lesson ships as an AI-assisted draft and MUST stay in draft
 * status until a named human reviewer has approved it.
 */

const p1 = curriculum.find((l) => l.code === "P1");
const p1Lessons: StructuredCourseLesson[] = (p1?.units.flatMap((u) => u.lessons) ?? []).filter(isStructuredLesson);

describe("P1 Foundations — course structure", () => {
  test("P1 exists, is available and contains 6 units × 5 lessons", () => {
    expect(p1?.status).toBe("available");
    expect(p1?.units.length).toBe(6);
    for (const unit of p1?.units ?? []) {
      expect(unit.lessons.length).toBe(5);
    }
    expect(p1Lessons.length).toBe(30);
  });

  test("lesson slugs run p1-1-1 through p1-6-5 in order", () => {
    expect(orderedLessonSlugs("P1")[0]).toBe("p1-1-1");
    expect(orderedLessonSlugs("P1")[29]).toBe("p1-6-5");
    expect(orderedLessonSlugs("P1").length).toBe(30);
  });

  test("the sequence teaches nouns before verbs before pronouns (prerequisite-adjusted)", () => {
    const titles = p1Lessons.map((l) => l.title);
    expect(titles[12]).toBe("Nouns");
    expect(titles[13]).toBe("Verbs");
    expect(titles[14]).toBe("Basic Pronouns");
    // pronouns need nouns (to replace) and verbs (for natural examples)
  });
});

describe("P1 Foundations — content validation rules", () => {
  const issues = validateStructuredLessons(curriculum);
  const errors = issues.filter((i) => i.severity === "error");
  const warnings = issues.filter((i) => i.severity === "warning");

  test("zero validation errors across all 30 lessons", () => {
    expect(errors).toEqual([]);
  });

  test("zero validation warnings (long-word list is curated)", () => {
    expect(warnings).toEqual([]);
  });

  test("every lesson is an AI-assisted DRAFT — never marked expert-approved", () => {
    for (const lesson of p1Lessons) {
      expect(lesson.content).toBeDefined();
      expect(lesson.content?.status).toBe("draft");
      expect(lesson.content?.authoredBy).toMatch(/AI-assisted/i);
      expect(lesson.content?.reviewedBy).toBeUndefined();
      expect(lesson.content?.contentVersion).toMatch(/^\d+\.\d+\.\d+$/);
    }
  });

  test("every lesson declares catalogue targets that exist", () => {
    for (const lesson of p1Lessons) {
      const targets = lesson.content?.catalogueTargets ?? [];
      expect(targets.length).toBeGreaterThan(0);
      for (const target of targets) {
        expect(target).toMatch(/^st\d{2}-m\d{2}-u\d{2}-l\d{2}$/);
      }
    }
  });

  test("every lesson covers all 17 template sections with exercises in all phases", () => {
    for (const lesson of p1Lessons) {
      expect(lesson.introduction?.length ?? 0).toBeGreaterThan(40);
      expect((lesson.objectives ?? []).length).toBeGreaterThanOrEqual(3);
      expect(lesson.concept).toBeDefined();
      expect((lesson.teachingSteps ?? []).length).toBeGreaterThanOrEqual(3);
      expect(lesson.exampleBank).toBeDefined();
      expect(lesson.realLife).toBeDefined();
      expect(lesson.dialogue).toBeDefined();
      expect(lesson.passage).toBeDefined();
      expect((lesson.commonMistakes ?? []).length).toBeGreaterThanOrEqual(2);
      expect(lesson.revision).toBeDefined();
      expect((lesson.homework?.tasks ?? []).length).toBeGreaterThanOrEqual(3);

      const phases = new Set(lesson.exercises.map((e) => e.phase));
      for (const phase of ["guided", "independent", "speaking", "listening", "reading", "writing", "assessment"]) {
        expect(phases.has(phase as never)).toBe(true);
      }
    }
  });

  test("every exercise has an answer key; writing and speaking are never auto-graded", () => {
    for (const lesson of p1Lessons) {
      for (const exercise of lesson.exercises) {
        if (exercise.type === "mcq") {
          expect(exercise.options.length).toBeGreaterThanOrEqual(3);
          expect(exercise.answerIndex).toBeLessThan(exercise.options.length);
        }
        if (exercise.type === "fill") expect(exercise.accepted.length).toBeGreaterThan(0);
        if (exercise.type === "order") expect(exercise.answer.split(" ").length).toBeGreaterThanOrEqual(3);
        if (exercise.type === "listen") {
          if (exercise.mode === "choice") expect(exercise.options?.length ?? 0).toBeGreaterThanOrEqual(3);
          else expect(exercise.accepted?.length ?? 0).toBeGreaterThan(0);
        }
        if (exercise.type === "write") expect(exercise.modelAnswer.length).toBeGreaterThanOrEqual(1);
        if (exercise.type === "speak") expect(exercise.targetText.length).toBeGreaterThan(0);
      }
    }
    // write exercises are self-assessed practice, like speaking
    const writeEx = p1Lessons.flatMap((l) => l.exercises).find((e) => e.type === "write");
    expect(writeEx).toBeDefined();
    expect(isGradableExercise(writeEx!)).toBe(false);
  });

  test("prerequisites only reference earlier lessons", () => {
    const order = orderedLessonSlugs("P1");
    for (const lesson of p1Lessons) {
      for (const ref of lesson.prerequisites ?? []) {
        if (!ref.lessonSlug) continue;
        expect(order.indexOf(ref.lessonSlug)).toBeGreaterThan(-1);
        expect(order.indexOf(ref.lessonSlug)).toBeLessThan(order.indexOf(lesson.slug));
      }
    }
  });
});

describe("P1 Foundations — lesson flow (renderable by the lesson engine)", () => {
  test("structured lessons render the 17 sections in teaching order", () => {
    const lesson = findLesson("p1-3-3", curriculum)!; // Nouns
    const flow = buildLessonFlow(lesson);
    const kinds = flow.map((s) => s.kind);

    expect(kinds[0]).toBe("intro");
    expect(kinds[1]).toBe("vocab");
    expect(kinds).toContain("concept");
    expect(kinds).toContain("teach");
    expect(kinds).toContain("examples");
    expect(kinds).toContain("dialogue");
    expect(kinds).toContain("reallife");
    expect(kinds).toContain("passage");
    expect(kinds).toContain("mistakes");
    expect(kinds).toContain("revision");
    expect(kinds[kinds.length - 1]).toBe("homework");

    // exercise phases in template order with labels on phase starts
    const exerciseSteps = flow.filter((s) => s.kind === "exercise");
    const labelled = exerciseSteps.filter((s) => s.kind === "exercise" && s.phaseLabel);
    expect(labelled.length).toBe(7); // one label per phase
    expect((labelled[0] as { phaseLabel: string }).phaseLabel).toBe(PHASE_LABELS.guided);

    // mistakes and revision come after writing, before assessment
    const writingFlowIdx = flow.findIndex((s) => s.kind === "exercise" && s.exercise.phase === "writing");
    const mistakesIdx = kinds.indexOf("mistakes");
    const revisionIdx = kinds.indexOf("revision");
    const assessmentFlowIdx = flow.findIndex((s) => s.kind === "exercise" && s.exercise.phase === "assessment");
    expect(writingFlowIdx).toBeLessThan(mistakesIdx);
    expect(mistakesIdx).toBeLessThan(revisionIdx);
    expect(revisionIdx).toBeLessThan(assessmentFlowIdx);
  });

  test("legacy lessons keep their original flow untouched", () => {
    const lesson = findLesson("a1-1-1", curriculum)!;
    const flow = buildLessonFlow(lesson);
    const kinds = flow.map((s) => s.kind);

    expect(kinds[0]).toBe("vocab");
    expect(kinds).toEqual([
      ...Array(8).fill("vocab"),
      "dialogue",
      "grammar",
      ...Array(7).fill("exercise"),
    ]);
    expect(kinds).not.toContain("intro");
    expect(kinds).not.toContain("homework");
  });

  test("every structured lesson produces a non-empty, well-terminated flow", () => {
    for (const lesson of p1Lessons) {
      const flow = buildLessonFlow(lesson);
      expect(flow.length).toBeGreaterThan(20);
      expect(flow[flow.length - 1].kind).toBe("homework");
    }
  });
});
