/**
 * AI Tutor — registry and integrity checks.
 *
 * Mirrors the skill-library pattern: modes are authored content with a
 * validator that tests run against, and a `toSafeTutorMode` transformer that
 * strips server-only prompt material before anything is sent to the client.
 */

import type { TutorModeDefinition, TutorModeId, SafeTutorMode } from "./types";
import { TUTOR_MODE_IDS } from "./types";
import { tutorModes } from "./modes";

export * from "./types";
export { tutorModes } from "./modes";

export function getTutorMode(id: string): TutorModeDefinition | null {
  return tutorModes.find((mode) => mode.id === id) ?? null;
}

/** Strip server-only prompt material (persona, greeting) for API payloads. */
export function toSafeTutorMode(mode: TutorModeDefinition): SafeTutorMode {
  return {
    id: mode.id,
    label: mode.label,
    icon: mode.icon,
    tagline: mode.tagline,
    description: mode.description,
    starters: [...mode.starters],
    lessonLinked: mode.lessonLinked,
  };
}

/** Content integrity checks — every violation fails tests loudly. */
export function validateTutorContent(): string[] {
  const issues: string[] = [];
  const seen = new Set<string>();

  if (tutorModes.length !== TUTOR_MODE_IDS.length) {
    issues.push(`expected ${TUTOR_MODE_IDS.length} modes, found ${tutorModes.length}`);
  }

  for (const mode of tutorModes) {
    if (!TUTOR_MODE_IDS.includes(mode.id)) {
      issues.push(`${mode.id}: not a known TutorModeId`);
    }
    if (seen.has(mode.id)) issues.push(`${mode.id}: duplicate mode id`);
    seen.add(mode.id);

    if (mode.label.trim().length < 3) issues.push(`${mode.id}: label too short`);
    if (mode.tagline.trim().length < 8) issues.push(`${mode.id}: tagline too short`);
    if (mode.description.trim().length < 20) issues.push(`${mode.id}: description too short`);
    if (mode.persona.trim().length < 80) issues.push(`${mode.id}: persona too thin`);
    if (!mode.persona.includes(mode.label.toUpperCase())) {
      issues.push(`${mode.id}: persona must name the mode`);
    }
    if (mode.greeting.trim().length < 40) issues.push(`${mode.id}: greeting too short`);
    if (mode.starters.length < 2 || mode.starters.length > 4) {
      issues.push(`${mode.id}: expected 2-4 starters`);
    }
    if (mode.starters.some((s) => s.trim().length < 6)) {
      issues.push(`${mode.id}: a starter is too short`);
    }
  }

  return issues;
}
