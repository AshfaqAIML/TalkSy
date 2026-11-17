/**
 * Shared four-skill laboratory band logic.
 *
 * All four laboratories grade their content on the same four proficiency
 * bands (beginner → elementary → intermediate → advanced, mirroring the
 * programme's Pre-A1 → C1 span). This module owns the band metadata and the
 * "which band should this learner work in next?" rule used by every lab hub.
 *
 * The recommendation is derived from VERIFIED completion only: a band counts
 * as achieved when its items are completed, never when they are merely
 * opened. With no completed items the labs recommend the beginner band.
 */

export type LabBand = "beginner" | "elementary" | "intermediate" | "advanced";

export const LAB_BANDS: LabBand[] = ["beginner", "elementary", "intermediate", "advanced"];

export const LAB_BAND_META: Record<
  LabBand,
  { name: string; cefr: string; tagline: string }
> = {
  beginner: {
    name: "Beginner",
    cefr: "Pre-A1 – A1",
    tagline: "First words, first sentences — with support at every step.",
  },
  elementary: {
    name: "Elementary",
    cefr: "A1 – A2",
    tagline: "Everyday English about you, your world and your routines.",
  },
  intermediate: {
    name: "Intermediate",
    cefr: "A2 – B1",
    tagline: "Opinions, stories and longer stretches of language.",
  },
  advanced: {
    name: "Advanced",
    cefr: "B2 – C1",
    tagline: "Debate, analyse and negotiate like a confident user.",
  },
};

export function isLabBand(value: string): value is LabBand {
  return (LAB_BANDS as string[]).includes(value);
}

/** Per-band item counts for one lab (total items vs completed items). */
export interface LabBandStat {
  band: LabBand;
  total: number;
  completed: number;
}

export interface BandRecommendation {
  /** The band the learner should practise in now. */
  recommended: LabBand;
  /** Band-level stats, ordered beginner → advanced. */
  bands: LabBandStat[];
  /** Human sentence for the hub banner. */
  note: string;
}

/**
 * The recommendation rule (identical in all four labs):
 * - nothing completed yet → beginner;
 * - otherwise take the highest band with ≥1 completed item — that band is
 *   still "in progress" until 75% of it is complete, at which point the next
 *   band (if any) becomes the recommendation.
 */
export function recommendLabBand(stats: LabBandStat[]): BandRecommendation {
  const ordered = LAB_BANDS.map(
    (band) => stats.find((s) => s.band === band) ?? { band, total: 0, completed: 0 },
  );

  let recommended: LabBand = "beginner";
  for (let i = 0; i < ordered.length; i += 1) {
    const stat = ordered[i];
    if (stat.completed > 0) {
      const mostlyDone = stat.total > 0 && stat.completed / stat.total >= 0.75;
      recommended = mostlyDone && i + 1 < ordered.length ? ordered[i + 1].band : stat.band;
    }
  }

  const note =
    recommended === "beginner" && ordered.every((s) => s.completed === 0)
      ? "Start at the Beginner band — everything else waits until you are ready."
      : `Based on your completed activities, the ${LAB_BAND_META[recommended].name} band is your best next step.`;

  return { recommended, bands: ordered, note };
}
