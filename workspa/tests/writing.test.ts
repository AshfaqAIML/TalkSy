/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  writingAssignments,
  validateWritingContent,
  getWritingAssignment,
  toSafeWritingAssignment,
  REQUIRED_WRITING_KINDS,
} from "@/data/writing";
import type { FreeWritingTask } from "@/data/writing/types";

describe("writing content integrity", () => {
  it("passes every integrity rule", () => {
    expect(validateWritingContent()).toEqual([]);
  });

  it("covers all 31 required activity kinds across the four tiers", () => {
    const kinds = new Set(writingAssignments.map((a) => a.kind));
    for (const kind of REQUIRED_WRITING_KINDS) {
      expect(kinds.has(kind)).toBe(true);
    }
    expect(writingAssignments).toHaveLength(31);

    const perTier = {
      beginner: writingAssignments.filter((a) => a.tier === "beginner").length,
      elementary: writingAssignments.filter((a) => a.tier === "elementary").length,
      intermediate: writingAssignments.filter((a) => a.tier === "intermediate").length,
      advanced: writingAssignments.filter((a) => a.tier === "advanced").length,
    };
    expect(perTier.beginner).toBe(9);
    expect(perTier.elementary).toBe(6);
    expect(perTier.intermediate).toBe(8);
    expect(perTier.advanced).toBe(8);
  });

  it("sanitises assignments: no model texts or grading keywords reach the client", () => {
    for (const assignment of writingAssignments) {
      const safe = toSafeWritingAssignment(assignment);
      for (const task of safe.tasks) {
        expect("modelText" in task).toBe(false);
        expect("modelTextNotes" in task).toBe(false);
        if (task.type === "guided") {
          for (const item of task.items) {
            expect("acceptedAnswers" in item).toBe(false);
            expect("explanation" in item).toBe(false);
          }
        }
        if (task.type === "free") {
          for (const point of task.checklist) {
            expect("anyOf" in point).toBe(false);
          }
        }
      }
    }
  });

  it("keeps full authoring data for grading and teaching", () => {
    for (const assignment of writingAssignments) {
      for (const task of assignment.tasks) {
        if (task.type === "guided") {
          for (const item of task.items) {
            expect(item.acceptedAnswers.length).toBeGreaterThan(0);
            expect(item.explanation.length).toBeGreaterThan(0);
          }
        } else {
          const free = task as FreeWritingTask;
          expect(free.modelText.length).toBeGreaterThan(40);
          expect(free.checklist.length).toBeGreaterThanOrEqual(4);
          expect(free.minWords).toBeGreaterThan(0);
          expect(free.maxWords).toBeGreaterThanOrEqual(free.minWords);
          expect(free.instructions.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("looks assignments up by slug", () => {
    expect(getWritingAssignment("formal-letters")?.kind).toBe("formal-letters");
    expect(getWritingAssignment("nope")).toBeNull();
  });
});
