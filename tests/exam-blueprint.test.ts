/**
 * Exam Academy curriculum blueprint — structural contract (PROMPT 42).
 *
 * Keeps the versioned blueprint honest as it evolves: structure, migration
 * mapping of the 55 live IELTS lessons, pathway integrity, prerequisite
 * sanity, prompt-mandated topic coverage and score-pathway references.
 */

import { describe, expect, test } from "bun:test";
import { validateBlueprint } from "@/data/exam-academy/validate";
import {
  ALL_MODULES,
  ALL_PATHWAYS,
  BLUEPRINT_VERSION,
  IELTS_SCORE_TARGETS,
  TOEFL_ETS_CONCORDANCE,
  TOEFL_SCORE_TARGETS,
  blueprintSummary,
} from "@/data/exam-academy";

describe("exam academy curriculum blueprint", () => {
  const validation = validateBlueprint();

  test("blueprint is versioned", () => {
    expect(BLUEPRINT_VERSION).toMatch(/^\d+\.\d+\.\d+$/);
  });

  test("structural validation passes with zero issues", () => {
    expect(validation.issues).toEqual([]);
  });

  test("all live IELTS lessons are placed exactly once (nothing dropped)", () => {
    // 62 lessons through PROMPT 43; PROMPT 44 absorbed I-M2's 12 into the
    // 31-lesson Listening Masterclass (81); PROMPT 45 absorbed the 5-lesson
    // I-M3A into the 28-lesson Reading Masterclass and the 4-lesson I-M3G
    // into the 7-lesson GT module (107); PROMPT 46 absorbed the 12 v1
    // writing lessons into the 57-lesson Writing Masterclass (152);
    // PROMPT 47 absorbed the 4 v1 speaking lessons into the 69-lesson
    // Speaking Masterclass (152 − 4 + 69 = 217).
    expect(validation.stats.liveIeltsLessonsPlaced).toBe(217);
    // 217 IELTS + 46 TOEFL lessons (T-M1 batch 3 + the PROMPT 48 batch 8
    // delivery of T-M2–T-M7) delivered to the v3 standard.
    expect(validation.stats.existingLessons).toBe(263);
  });

  test("IELTS Academic pathway has the ten PROMPT 42 modules in order", () => {
    const pathway = ALL_PATHWAYS.find((p) => p.key === "ielts-academic");
    expect(pathway?.modules).toHaveLength(10);
    expect(pathway?.modules[0]).toBe("I-M1");
    expect(pathway?.modules[2]).toBe("IA-M3");
    expect(pathway?.modules[3]).toBe("IA-M4");
    expect(pathway?.modules[4]).toBe("IA-M5");
    expect(pathway?.modules[9]).toBe("I-M10");
  });

  test("IELTS General Training pathway keeps Reading and Writing strictly distinct", () => {
    const gt = ALL_PATHWAYS.find((p) => p.key === "ielts-general-training");
    expect(gt?.modules).toHaveLength(10);
    expect(gt?.modules.some((c) => c.startsWith("IA-"))).toBe(false);
    const academic = ALL_PATHWAYS.find((p) => p.key === "ielts-academic");
    expect(academic?.modules.some((c) => c.startsWith("IG-"))).toBe(false);
  });

  test("Listening and Speaking modules are shared; Reading and Writing are not", () => {
    const shared = ALL_MODULES.filter((m) => m.academy === "ielts" && m.pathways.length === 2);
    expect(shared.map((m) => m.code).sort()).toEqual(["I-M1", "I-M10", "I-M2", "I-M6", "I-M7", "I-M8", "I-M9"].sort());
    const track = ALL_MODULES.filter((m) => m.academy === "ielts" && m.pathways.length === 1);
    expect(track.map((m) => m.code).sort()).toEqual(["IA-M3", "IA-M4", "IA-M5", "IG-M3", "IG-M4", "IG-M5"].sort());
  });

  test("TOEFL academy is the seven PROMPT 42 modules — all 46 lessons delivered (PROMPT 48)", () => {
    const toefl = ALL_MODULES.filter((m) => m.academy === "toefl");
    expect(toefl).toHaveLength(7);
    // v1 had zero TOEFL lessons; T-M1 arrived in PROMPT 43 batch 3 and the
    // remaining 38 lessons (T-M2–T-M7) in the PROMPT 48 batch 8 delivery —
    // the complete TOEFL iBT 2026 Masterclass. Nothing remains "new".
    const lessons = toefl.flatMap((m) => m.chapters.flatMap((c) => c.lessons));
    expect(lessons).toHaveLength(46);
    expect(lessons.every((l) => l.origin === "existing")).toBe(true);
    expect(lessons.every((l) => l.slug.startsWith("toefl-"))).toBe(true);
  });

  test("every prompt-mandated topic is covered by its module", () => {
    expect(validation.stats.topicRequirementsChecked).toBeGreaterThan(100);
  });

  test("score targets cover IELTS 5.0–8.5+ and TOEFL 3.0–6.0 without guarantees", () => {
    expect(IELTS_SCORE_TARGETS.map((t) => t.band)).toEqual(["5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5+"]);
    expect(TOEFL_SCORE_TARGETS.map((t) => t.band)).toEqual(["3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0"]);
    expect(TOEFL_ETS_CONCORDANCE).toHaveLength(11);
    expect(TOEFL_ETS_CONCORDANCE[0]).toMatchObject({ band: "6.0", total: "114–120" });
  });

  test("workload summary is computable and honest", () => {
    const summary = blueprintSummary();
    expect(summary.moduleDefinitions).toBe(20);
    expect(summary.lessonDefinitions).toBe(summary.existingLessons + summary.newLessons);
    // PROMPT 46 absorbed the 9 undelivered provisional writing lessons into
    // the delivered masterclass (60 − 9 = 51 remaining planned); PROMPT 47
    // absorbed the 5 planned speaking lessons into the delivered
    // 69-lesson Speaking Masterclass (51 − 5 = 46 remaining planned);
    // PROMPT 48 delivered the remaining 38 TOEFL lessons (46 − 38 = 8 left
    // planned — the provisional I-M9/I-M10 depth lessons).
    expect(summary.newLessons).toBe(8);
    expect(summary.newTeachingMinutes).toBeGreaterThan(0);
    expect(summary.pathways).toHaveLength(3);
  });
});
