/**
 * Placement bank integrity — the assessment rules the engine relies on.
 *
 * The adaptive ladder samples up to 3 items per tier and stops early on
 * 2 wrong, so every objective skill-tier MUST hold at least 3 items.
 */

import { describe, expect, it } from "bun:test";
import {
  placementBank,
  itemsForSkill,
  objectiveItems,
  writingPromptForTier,
  speakingPromptForTier,
  isObjective,
  isWriting,
  isSpeaking,
  OBJECTIVE_SKILLS,
} from "@/data/placement";
import type { PlacementTier } from "@/data/placement";

describe("placement bank — structure", () => {
  it("has all six skills represented", () => {
    for (const skill of ["vocabulary", "grammar", "reading", "listening", "writing", "speaking"] as const) {
      expect(itemsForSkill(skill).length).toBeGreaterThan(0);
    }
  });

  it("item ids are unique", () => {
    const ids = placementBank.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("objective skills have ≥3 items per tier (early-stop safety)", () => {
    for (const skill of OBJECTIVE_SKILLS) {
      for (const tier of [1, 2, 3] as PlacementTier[]) {
        const items = objectiveItems(skill, tier);
        expect(items.length).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it("every tier 1..3 is populated for every objective skill", () => {
    for (const skill of OBJECTIVE_SKILLS) {
      const tiers = new Set(itemsForSkill(skill).map((i) => i.tier));
      expect(tiers).toEqual(new Set([1, 2, 3]));
    }
  });

  it("writing and speaking have one prompt per tier", () => {
    for (const tier of [1, 2, 3] as PlacementTier[]) {
      expect(writingPromptForTier(tier).tier).toBe(tier);
      expect(speakingPromptForTier(tier).tier).toBe(tier);
    }
  });
});

describe("placement bank — item quality", () => {
  it("MCQ options are valid: ≥3 options, unique, in-range answer", () => {
    for (const item of placementBank.filter(isObjective)) {
      expect(item.options.length).toBeGreaterThanOrEqual(3);
      expect(new Set(item.options).size).toBe(item.options.length);
      expect(item.answerIndex).toBeGreaterThanOrEqual(0);
      expect(item.answerIndex).toBeLessThan(item.options.length);
      expect(item.explanation.length).toBeGreaterThan(10);
      expect(item.prompt.length).toBeGreaterThan(5);
    }
  });

  it("listening items carry spoken audio text", () => {
    const listening = itemsForSkill("listening").filter(isObjective);
    expect(listening.length).toBeGreaterThanOrEqual(9);
    for (const item of listening) {
      expect(item.audioText).toBeTruthy();
      expect(item.audioText!.length).toBeGreaterThan(15);
    }
  });

  it("reading items carry a passage with title and text", () => {
    const reading = itemsForSkill("reading").filter(isObjective);
    expect(reading.length).toBeGreaterThanOrEqual(9);
    for (const item of reading) {
      expect(item.passage).toBeTruthy();
      expect(item.passage!.text.length).toBeGreaterThan(60);
    }
  });

  it("writing prompts have a model answer and a 3-step rubric", () => {
    for (const item of itemsForSkill("writing")) {
      if (!isWriting(item)) continue;
      expect(item.modelAnswer.length).toBeGreaterThan(15);
      expect(item.rubric).toHaveLength(3);
    }
  });

  it("speaking prompts have a sayable target sentence", () => {
    for (const item of itemsForSkill("speaking")) {
      if (!isSpeaking(item)) continue;
      expect(item.targetText.split(" ").length).toBeGreaterThanOrEqual(6);
    }
  });

  it("vocabulary covers recognition, meaning and contextual usage", () => {
    const subskills = new Set(itemsForSkill("vocabulary").filter(isObjective).map((i) => i.subskill));
    expect(subskills).toContain("Word recognition");
    expect(subskills).toContain("Word meaning");
    expect(subskills).toContain("Contextual usage");
  });

  it("grammar covers the five required areas", () => {
    const subskills = new Set(itemsForSkill("grammar").filter(isObjective).map((i) => i.subskill));
    expect(subskills).toContain("Sentence structure");
    expect(subskills).toContain("Parts of speech");
    expect(subskills).toContain("Tenses");
    expect(subskills).toContain("Question formation");
    expect(subskills).toContain("Grammar accuracy");
  });
});
