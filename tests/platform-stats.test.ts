/**
 * Platform statistics freshness — the client-safe snapshot
 * (`src/lib/generated/platform-stats.ts`) must always match the real
 * content modules (`computePlatformStats`). The marketing surfaces quote
 * these numbers; a stale snapshot is a false advertising claim.
 *
 * If this test fails, run: bun scripts/generate-platform-stats.ts
 */

import { describe, expect, it } from "bun:test";
import { computePlatformStats } from "../src/lib/platform-stats";
import { PLATFORM_STATS } from "../src/lib/generated/platform-stats";
import { PROGRAMME_LESSONS } from "../src/data/programme";
import { allCourseLessons } from "../src/data/curriculum/view";

describe("platform statistics snapshot", () => {
  it("the generated snapshot matches the live content modules", () => {
    const live = computePlatformStats();
    expect(PLATFORM_STATS.lessons as number).toBe(live.lessons);
    expect(PLATFORM_STATS.words as number).toBe(live.words);
    expect(PLATFORM_STATS.readingTexts as number).toBe(live.readingTexts);
    expect(PLATFORM_STATS.listeningActivities as number).toBe(live.listeningActivities);
    expect(PLATFORM_STATS.speakingActivities as number).toBe(live.speakingActivities);
    expect(PLATFORM_STATS.writingAssignments as number).toBe(live.writingAssignments);
    expect(PLATFORM_STATS.tutorModes as number).toBe(live.tutorModes);
    expect(PLATFORM_STATS.exerciseTypes as number).toBe(live.exerciseTypes);
  });

  it("the snapshot stays honest as content grows (sanity floors)", () => {
    // The whole point of the snapshot: these were once hardcoded as
    // 20 lessons / 18 listening / 22 speaking / 31 writing / 9 tutor
    // modes long after the real libraries had grown past them.
    expect(PLATFORM_STATS.lessons).toBeGreaterThanOrEqual(346);
    expect(PLATFORM_STATS.words).toBeGreaterThanOrEqual(135);
    expect(PLATFORM_STATS.readingTexts).toBeGreaterThanOrEqual(21);
    expect(PLATFORM_STATS.listeningActivities).toBeGreaterThanOrEqual(32);
    expect(PLATFORM_STATS.speakingActivities).toBeGreaterThanOrEqual(25);
    expect(PLATFORM_STATS.writingAssignments).toBeGreaterThanOrEqual(32);
    expect(PLATFORM_STATS.tutorModes).toBeGreaterThanOrEqual(10);
    expect(PLATFORM_STATS.exerciseTypes).toBeGreaterThanOrEqual(19);
  });

  it("lesson counting never double-counts shared slugs", () => {
    // The engine path shares six slugs with the structured course layer;
    // the union of programme ids, course slugs and engine slugs must be
    // smaller than the naive sum.
    const engineShared = new Set(allCourseLessons.map((l) => l.slug));
    const naiveSum =
      PROGRAMME_LESSONS.length + allCourseLessons.length + engineShared.size;
    expect(PLATFORM_STATS.lessons).toBeLessThan(naiveSum);
    expect(PLATFORM_STATS.lessons).toBeGreaterThan(PROGRAMME_LESSONS.length);
  });
});
