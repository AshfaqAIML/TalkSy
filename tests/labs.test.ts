/**
 * Four-Skill Laboratory shared infrastructure tests (PROMPT 37):
 * - curriculum links: every lab item is linked to real programme lessons;
 * - band recommendation rule: derived from completion only;
 * - the four labs' content covers the PROMPT 37 band structure.
 */

import { describe, expect, it } from "bun:test";
import {
  LAB_CURRICULUM_LINKS,
  resolveLabLinks,
  validateLabCurriculumLinks,
} from "@/data/labs/curriculum-links";
import { recommendLabBand, LAB_BANDS, LAB_BAND_META } from "@/lib/labs/level";
import { speakingActivities } from "@/data/speaking";
import { listeningActivities, listeningStages } from "@/data/listening";
import { readingTexts } from "@/data/reading";
import { writingAssignments } from "@/data/writing";

const expectedSlugs = {
  speaking: speakingActivities.map((a) => a.slug),
  listening: listeningActivities.map((a) => a.slug),
  reading: readingTexts.map((t) => t.slug),
  writing: writingAssignments.map((a) => a.slug),
};

describe("lab curriculum links", () => {
  it("links every lab item to at least one real programme lesson", () => {
    const report = validateLabCurriculumLinks(expectedSlugs);
    expect(report.errors).toEqual([]);
    expect(report.ok).toBe(true);
  });

  it("resolves links with lesson and chapter metadata", () => {
    const links = resolveLabLinks("speaking", "daily-routine");
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.lessonSlug).toMatch(/^ch-\d{2}-l-\d{2}$/);
      expect(link.lessonTitle.length).toBeGreaterThan(0);
      expect(link.chapterTitle.length).toBeGreaterThan(0);
      expect(link.chapterNumber).toBeGreaterThan(0);
      expect(link.reason.length).toBeGreaterThan(0);
    }
    // The daily-routine activity links to the daily-routines lesson.
    expect(links.some((l) => l.lessonSlug === "ch-13-l-06")).toBe(true);
  });

  it("covers all four labs with authored entries", () => {
    expect(Object.keys(LAB_CURRICULUM_LINKS.speaking).length).toBe(
      speakingActivities.length,
    );
    expect(Object.keys(LAB_CURRICULUM_LINKS.listening).length).toBe(
      listeningActivities.length,
    );
    expect(Object.keys(LAB_CURRICULUM_LINKS.reading).length).toBe(readingTexts.length);
    expect(Object.keys(LAB_CURRICULUM_LINKS.writing).length).toBe(
      writingAssignments.length,
    );
  });

  it("returns [] for unknown items instead of throwing", () => {
    expect(resolveLabLinks("speaking", "not-a-real-slug")).toEqual([]);
  });
});

describe("lab band recommendation rule", () => {
  it("recommends beginner with no completed items", () => {
    const result = recommendLabBand(
      LAB_BANDS.map((band) => ({ band, total: 5, completed: 0 })),
    );
    expect(result.recommended).toBe("beginner");
    expect(result.bands).toHaveLength(4);
  });

  it("keeps the highest band with completions while it is unfinished", () => {
    const result = recommendLabBand([
      { band: "beginner", total: 5, completed: 5 },
      { band: "elementary", total: 5, completed: 2 },
      { band: "intermediate", total: 5, completed: 0 },
      { band: "advanced", total: 5, completed: 0 },
    ]);
    expect(result.recommended).toBe("elementary");
  });

  it("advances to the next band at 75% completion", () => {
    const result = recommendLabBand([
      { band: "beginner", total: 4, completed: 3 },
      { band: "elementary", total: 4, completed: 0 },
      { band: "intermediate", total: 4, completed: 0 },
      { band: "advanced", total: 4, completed: 0 },
    ]);
    expect(result.recommended).toBe("elementary");
  });

  it("stays at advanced when everything below is done", () => {
    const result = recommendLabBand([
      { band: "beginner", total: 5, completed: 5 },
      { band: "elementary", total: 5, completed: 5 },
      { band: "intermediate", total: 5, completed: 5 },
      { band: "advanced", total: 5, completed: 5 },
    ]);
    expect(result.recommended).toBe("advanced");
  });

  it("ignores opens: in-progress-only bands never count as completions", () => {
    const result = recommendLabBand([
      { band: "beginner", total: 5, completed: 0 },
      { band: "elementary", total: 5, completed: 0 },
      { band: "intermediate", total: 5, completed: 0 },
      { band: "advanced", total: 5, completed: 0 },
    ]);
    expect(result.recommended).toBe("beginner");
  });

  it("exposes usable band metadata for the hub banners", () => {
    for (const band of LAB_BANDS) {
      expect(LAB_BAND_META[band].name.length).toBeGreaterThan(0);
      expect(LAB_BAND_META[band].cefr.length).toBeGreaterThan(0);
    }
  });
});

describe("PROMPT 37 band coverage across the four labs", () => {
  it("listening: all four bands have multiple active stages", () => {
    const bands = new Set(listeningStages.map((s) => s.band));
    expect([...bands].sort()).toEqual(["advanced", "beginner", "elementary", "intermediate"]);
    for (const band of bands) {
      const active = listeningStages.filter(
        (s) => s.band === band && listeningActivities.some((a) => a.stage === s.id),
      );
      expect(active.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("listening: the seven new content types each have two activities", () => {
    const newStages = [
      "instructions",
      "question-answer",
      "narratives",
      "interviews",
      "informational",
      "presentations",
      "academic",
    ] as const;
    for (const stage of newStages) {
      const activities = listeningActivities.filter((a) => a.stage === stage);
      expect(activities.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("reading: the PROMPT 37 library categories are all represented", () => {
    // Word reading, short sentences, dialogues, stories, graded passages,
    // informational texts, articles, professional documents, advanced reading.
    const categories = new Set(readingTexts.map((t) => t.category));
    for (const category of [
      "words",
      "sentences",
      "everyday-dialogues",
      "short-stories",
      "mini-passages",
      "informational",
      "articles",
      "professional-documents",
      "analytical",
    ]) {
      expect(categories.has(category as never)).toBe(true);
    }
  });

  it("writing and speaking: every band is non-empty", () => {
    for (const tier of ["beginner", "elementary", "intermediate", "advanced"]) {
      expect(speakingActivities.filter((a) => a.tier === tier).length).toBeGreaterThan(0);
      expect(writingAssignments.filter((a) => a.tier === tier).length).toBeGreaterThan(0);
    }
  });
});
