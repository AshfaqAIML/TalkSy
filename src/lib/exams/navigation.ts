/**
 * Player navigation policy resolution.
 *
 * The rules themselves live in each TestSpecification section payload
 * (`navigation`); this module only resolves them into the effective policy
 * for a concrete attempt, given whether the run is under exam timing.
 * Nothing here hardcodes per-exam behaviour — the fallback below is a
 * conservative default for spec rows that predate the `navigation` field
 * (older pinned versions keep working).
 *
 * Under exam timing the spec policy is followed exactly: where the real
 * examination does not allow an action, the player will not offer it.
 * Untimed learning runs are study sessions, not simulations — they relax
 * navigation and audio replay and are labelled as such on every report.
 */

import {
  sectionNavigationSchema,
  type AttemptResultDto,
  type ExamKey,
  type SectionKey,
  type SectionNavigation,
  type SpecDto,
} from "./types";

export type PlayerPolicy = {
  /** "free" | "forward_only" question movement inside a section. */
  withinSection: "free" | "forward_only";
  /** Reopen a previous (finished/expired) section. */
  allowBackToSection: boolean;
  /** Mark-for-review flagging. */
  flagForReview: boolean;
  /** Replay section audio. */
  replayAudio: boolean;
  /** Section clock enforced (locks the section at 0). */
  timed: boolean;
};

/** Conservative fallback for spec sections without a navigation payload. */
export const DEFAULT_NAVIGATION: SectionNavigation = {
  withinSection: "free",
  allowBackToSection: false,
  flagForReview: true,
  replayAudio: false,
};

/** Navigation payload for one section of a spec (validated + defaulted). */
export function sectionNavigation(spec: SpecDto | null, sectionKey: SectionKey | string): SectionNavigation {
  if (!spec) return DEFAULT_NAVIGATION;
  const section = spec.sections.find((entry) => entry.key === sectionKey);
  const raw = section?.navigation;
  if (!raw) return DEFAULT_NAVIGATION;
  const parsed = sectionNavigationSchema.safeParse(raw);
  return parsed.success ? parsed.data : DEFAULT_NAVIGATION;
}

/**
 * Resolve the player policy for a section of a mock whose PINNED spec may
 * predate the `navigation` field (older specification versions keep their
 * grading pin forever, but player realism must follow the CURRENT format:
 * falling back to a generic default would give e.g. an old TOEFL pin
 * IELTS-style flagging). Resolution order:
 *
 *   1. the pinned spec's navigation for that section
 *   2. the ACTIVE spec's navigation for the same section
 *   3. the conservative default
 */
export function resolveSectionNavigation(
  pinnedSpec: SpecDto | null,
  activeSpec: SpecDto | null,
  sectionKey: SectionKey | string,
): SectionNavigation {
  const fromPinned = sectionNavigation(pinnedSpec, sectionKey);
  if (fromPinned !== DEFAULT_NAVIGATION) return fromPinned;
  const fromActive = sectionNavigation(activeSpec, sectionKey);
  if (fromActive !== DEFAULT_NAVIGATION) return fromActive;
  return DEFAULT_NAVIGATION;
}

/**
 * Effective policy for one section of a concrete attempt.
 * `timed` comes from the attempt row (isTimedMode in types.ts).
 */
export function effectivePolicy(
  navigation: SectionNavigation,
  timed: boolean,
): PlayerPolicy {
  if (!timed) {
    // Untimed learning session: navigation is free, audio may be replayed.
    // Reports always label these runs so they are never read as simulations.
    return {
      withinSection: "free",
      allowBackToSection: true,
      flagForReview: true,
      replayAudio: true,
      timed: false,
    };
  }
  return {
    withinSection: navigation.withinSection,
    allowBackToSection: navigation.allowBackToSection,
    flagForReview: navigation.flagForReview,
    // Never replayable under exam timing, whatever a misconfigured spec says.
    replayAudio: false,
    timed: true,
  };
}

/** Policy bundle for a whole mock, resolved per section (spec order). */
export function resolvePolicies(
  spec: SpecDto | null,
  sectionKeys: SectionKey[],
  timed: boolean,
): Record<string, PlayerPolicy> {
  const out: Record<string, PlayerPolicy> = {};
  for (const key of sectionKeys) {
    out[key] = effectivePolicy(sectionNavigation(spec, key), timed);
  }
  return out;
}

/** Re-exported for callers that hold an AttemptResultDto. */
export type { AttemptResultDto };
export type { ExamKey };
