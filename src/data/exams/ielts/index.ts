/**
 * The IELTS Academy: three CMS courses carrying the eight modules.
 *
 *   ielts-academy-core              — Modules 1, 2, 5, 6, 7, 8 (shared: the
 *                                      Listening and Speaking tests are
 *                                      identical across variants)
 *   ielts-academy-academic          — Modules 3A (Academic Reading) + 4A
 *                                      (Academic Writing)
 *   ielts-academy-general-training  — Modules 3G (GT Reading) + 4G (GT
 *                                      Writing)
 *
 * Pathways (scripts/seed-exams.ts) reference these lessons by slug; the
 * Academic and General Training tracks share nothing variant-specific.
 */

import { IELTS_LEVEL, type CourseSpec } from "./types";
import { module1Intro } from "./m1-intro";
import { module2Listening } from "./m2-listening";
import { module5Speaking } from "./m5-speaking";
import { module6Bands } from "./m6-bands";
import { module7Strategies, module8Mocks } from "./m7-strategies";
import { module3aReading } from "./m3a-reading";
import { module4aWriting } from "./m4a-writing";
import { module3gReading } from "./m3g-reading";
import { module4gWriting } from "./m4g-writing";

export const ieltsAcademyCore: CourseSpec = {
  slug: "ielts-academy-core",
  title: "IELTS Academy — Core Programme",
  description:
    "The shared heart of IELTS preparation: orientation (which test, which variant, which target), Listening craft, Speaking craft, the band-score ladder from 4.0 to 9.0, exam strategies and the mock system. For both variants — the Listening and Speaking tests are identical for Academic and General Training.",
  levelSlug: IELTS_LEVEL.slug,
  modules: [module1Intro, module2Listening, module5Speaking, module6Bands, module7Strategies, module8Mocks],
};

export const ieltsAcademyAcademic: CourseSpec = {
  slug: "ielts-academy-academic",
  title: "IELTS Academy — Academic Track",
  description:
    "The Academic variant's own reading and writing programmes: academic passages and every official question type, chart/process/map reporting for Task 1, and the five essay families for Task 2. Separate question banks, separate mocks — never mixed with General Training.",
  levelSlug: IELTS_LEVEL.slug,
  modules: [module3aReading, module4aWriting],
};

export const ieltsAcademyGeneralTraining: CourseSpec = {
  slug: "ielts-academy-general-training",
  title: "IELTS Academy — General Training Track",
  description:
    "The General Training variant's own reading and writing programmes: notices, advertisements and workplace documents across the three GT reading sections, the letter (formal, semi-formal, informal) for Task 1, and the everyday essay for Task 2. Separate question banks, separate mocks — never mixed with Academic.",
  levelSlug: IELTS_LEVEL.slug,
  modules: [module3gReading, module4gWriting],
};

export const IELTS_COURSES: CourseSpec[] = [
  ieltsAcademyCore,
  ieltsAcademyAcademic,
  ieltsAcademyGeneralTraining,
];

export { IELTS_LEVEL };
