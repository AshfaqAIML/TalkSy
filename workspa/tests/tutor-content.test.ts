/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  tutorModes,
  validateTutorContent,
  getTutorMode,
  toSafeTutorMode,
} from "@/data/tutor";
import { TUTOR_MODE_IDS } from "@/data/tutor/types";

describe("tutor mode content integrity", () => {
  it("ships exactly the nine specified teaching modes", () => {
    expect(tutorModes).toHaveLength(9);
    expect(tutorModes.map((m) => m.id)).toEqual([...TUTOR_MODE_IDS]);
  });

  it("passes the content validator", () => {
    expect(validateTutorContent()).toEqual([]);
  });

  it("has unique ids, greetings and starters for every mode", () => {
    const ids = new Set<string>();
    const greetings = new Set<string>();
    for (const mode of tutorModes) {
      expect(ids.has(mode.id)).toBe(false);
      expect(greetings.has(mode.greeting)).toBe(false);
      ids.add(mode.id);
      greetings.add(mode.greeting);
      expect(mode.starters.length).toBeGreaterThanOrEqual(2);
      expect(mode.starters.every((s) => s.length >= 6)).toBe(true);
    }
  });

  it("looks up modes by id and rejects unknown ids", () => {
    expect(getTutorMode("grammar")?.label).toBe("Grammar Teacher");
    expect(getTutorMode("interview")?.label).toBe("Interview Coach");
    expect(getTutorMode("nope")).toBeNull();
  });

  it("strips prompt material from the client-safe mode payload", () => {
    for (const mode of tutorModes) {
      const safe = toSafeTutorMode(mode);
      expect(safe).not.toHaveProperty("persona");
      expect(safe).not.toHaveProperty("greeting");
      expect(safe.id).toBe(mode.id);
      expect(safe.starters).toEqual(mode.starters);
    }
    // The serialized payload must not leak prompt material.
    const serialized = JSON.stringify(tutorModes.map(toSafeTutorMode));
    expect(serialized).not.toContain("You are the GRAMMAR TEACHER");
    expect(serialized).not.toContain("Ask me about any rule");
  });

  it("keeps persona and greeting server-only but non-empty", () => {
    for (const mode of tutorModes) {
      expect(mode.persona.length).toBeGreaterThan(80);
      expect(mode.persona).toContain(mode.label.toUpperCase());
      expect(mode.greeting.length).toBeGreaterThan(40);
    }
  });
});
