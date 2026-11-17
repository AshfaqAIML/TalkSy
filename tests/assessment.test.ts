/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  buildAssessmentSummary,
  gradeAssessment,
  selectAssessmentQuestions,
} from "@/lib/engine/assessment";
import { getExercisesByIds, getLesson } from "@/data/curriculum";
import { buildCorrectAnswer } from "./helpers";

describe("assessment question selection", () => {
  it("selects exactly questionCount unique questions from the bank", () => {
    const lesson = getLesson("p1-1-1")!;
    const bank = getExercisesByIds(lesson.assessment!.bank);
    const { exerciseIds } = selectAssessmentQuestions(bank, 5, "user:1");
    expect(exerciseIds).toHaveLength(5);
    expect(new Set(exerciseIds).size).toBe(5);
    for (const id of exerciseIds) {
      expect(lesson.assessment!.bank).toContain(id);
    }
  });

  it("is deterministic for the same seed and varies across attempts", () => {
    const lesson = getLesson("p1-1-1")!;
    const bank = getExercisesByIds(lesson.assessment!.bank);
    const a = selectAssessmentQuestions(bank, 5, "user:1:0");
    const b = selectAssessmentQuestions(bank, 5, "user:1:0");
    expect(a.exerciseIds).toEqual(b.exerciseIds);

    // Different attempt seeds eventually produce a different draw.
    const draws = new Set(
      Array.from({ length: 6 }, (_, i) =>
        selectAssessmentQuestions(bank, 5, `user:1:${i}`).exerciseIds.join(","),
      ),
    );
    expect(draws.size).toBeGreaterThan(1);
  });

  it("handles banks smaller than questionCount gracefully", () => {
    const lesson = getLesson("p1-1-3")!;
    const bank = getExercisesByIds(lesson.assessment!.bank);
    const { exerciseIds } = selectAssessmentQuestions(bank, 99, "x");
    expect(exerciseIds.length).toBe(bank.length);
  });
});

describe("assessment grading and summary", () => {
  it("grades a perfect run as passed", () => {
    const lesson = getLesson("a1-1-1")!;
    const bank = getExercisesByIds(lesson.assessment!.bank);
    const { exerciseIds } = selectAssessmentQuestions(bank, 5, "user:2");
    const questions = getExercisesByIds(exerciseIds);
    const answers = questions.map((q) => ({
      exerciseId: q.id,
      answer: buildCorrectAnswer(q),
    }));
    const grade = gradeAssessment(questions, answers, 0.7);
    expect(grade.total).toBe(5);
    expect(grade.correct).toBe(5);
    expect(grade.passed).toBe(true);

    const summary = buildAssessmentSummary(grade, 0.7);
    expect(summary.scorePercent).toBe(100);
    expect(summary.passed).toBe(true);
    expect(summary.passMarkPercent).toBe(70);
    expect(summary.wrongExerciseIds).toHaveLength(0);
    expect(summary.recommendation).toContain("mastered");
  });

  it("grades a failing run and recommends review", () => {
    const lesson = getLesson("a1-1-1")!;
    const bank = getExercisesByIds(lesson.assessment!.bank);
    const { exerciseIds } = selectAssessmentQuestions(bank, 5, "user:3");
    const questions = getExercisesByIds(exerciseIds);
    const answers = questions.map((q, i) => ({
      exerciseId: q.id,
      // First two correct, the rest garbage.
      answer: i < 2 ? buildCorrectAnswer(q) : { nonsense: true },
    }));
    const grade = gradeAssessment(questions, answers, 0.7);
    expect(grade.correct).toBe(2);
    expect(grade.passed).toBe(false);

    const summary = buildAssessmentSummary(grade, 0.7);
    expect(summary.scorePercent).toBe(40);
    expect(summary.wrongExerciseIds).toHaveLength(3);
    expect(summary.byDifficulty.length).toBeGreaterThan(0);
    expect(summary.bySkill.length).toBeGreaterThan(0);
    expect(summary.recommendation).toContain("again");
  });

  it("unanswered questions count as incorrect", () => {
    const lesson = getLesson("p1-2-1")!;
    const bank = getExercisesByIds(lesson.assessment!.bank);
    const { exerciseIds } = selectAssessmentQuestions(bank, 5, "user:4");
    const questions = getExercisesByIds(exerciseIds);
    const grade = gradeAssessment(questions, [], 0.7);
    expect(grade.correct).toBe(0);
    expect(grade.passed).toBe(false);
  });
});
