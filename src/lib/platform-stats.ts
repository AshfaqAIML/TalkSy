/**
 * Platform statistics — every public count the marketing surfaces quote,
 * computed from the live content modules.
 *
 * This module is the SERVER-SIDE source of truth (it imports the heavy
 * data modules, notably the 2.7MB Complete English Programme, which must
 * never ship to the browser). Client components read the generated
 * snapshot at `@/lib/generated/platform-stats` — a tiny literal object
 * produced by `scripts/generate-platform-stats.ts`, whose freshness is
 * asserted by `tests/platform-stats.test.ts`.
 *
 * Scoped honestly:
 *  - `lessons` counts every distinct lesson slug the app can deliver in
 *    general English today: the Complete English Programme, the
 *    structured P1/A1/A2 course layer and the engine-only grammar and
 *    sentence-lab lessons — slugs shared between systems are counted
 *    once.
 *  - The practice-laboratory counts are the module exports themselves.
 *  - Exercise types are the engine's graded type registry.
 */

import { PROGRAMME_LESSONS } from "@/data/programme";
import { allCourseLessons } from "@/data/curriculum/view";
import { getCurriculumPath } from "@/data/curriculum";
import { vocabWords } from "@/data/vocabulary";
import { readingTexts } from "@/data/reading";
import { listeningActivities } from "@/data/listening";
import { speakingActivities } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import { tutorModes } from "@/data/tutor";
import { EXERCISE_TYPE_LABELS } from "@/lib/cms/validate";

function countLiveLessons(): number {
  const seen = new Set<string>(PROGRAMME_LESSONS.map((l) => l.id));
  for (const lesson of allCourseLessons) seen.add(lesson.slug);
  for (const slug of getCurriculumPath()) seen.add(slug);
  return seen.size;
}

export function computePlatformStats() {
  return {
    lessons: countLiveLessons(),
    words: vocabWords.length,
    readingTexts: readingTexts.length,
    listeningActivities: listeningActivities.length,
    speakingActivities: speakingActivities.length,
    writingAssignments: writingAssignments.length,
    tutorModes: tutorModes.length,
    exerciseTypes: Object.keys(EXERCISE_TYPE_LABELS).length,
  };
}
