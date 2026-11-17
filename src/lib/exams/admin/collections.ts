/**
 * Examination content collections.
 *
 * Four independent collections organise every piece of examination
 * preparation content:
 *
 *   - IELTS Academic          (examKey IELTS, variant ACADEMIC)
 *   - IELTS General Training  (examKey IELTS, variant GENERAL_TRAINING)
 *   - IELTS UKVI preparation  (same test as standard IELTS — shares both
 *                              IELTS libraries plus SELT delivery guidance)
 *   - TOEFL iBT               (examKey TOEFL_IBT, variant STANDARD)
 *
 * Collections are structural, spec-driven definitions in code (like
 * UKVI_DELIVERY): mocks, questions, rubrics and pathways are matched by
 * examKey+variant; CMS lesson courses are matched by their stable slugs
 * (the same convention the bridge rules use). This keeps membership in
 * sync with the seeded offerings without a join table that could drift.
 *
 * The UKVI collection is deliberately honest: IELTS for UKVI is the same
 * test, so the collection points at the shared IELTS libraries and the
 * official SELT guidance instead of duplicating content.
 */

import { db } from "@/lib/db";
import { getActiveSpec } from "../specs";
import { ASSEMBLED_SET_KINDS } from "../types";
import type { CollectionInventoryDto } from "./types";

export type CollectionDef = {
  key: string;
  name: string;
  description: string;
  examKey: "IELTS" | "TOEFL_IBT";
  /** Mock/question/rubric/pathway membership (empty for the shared UKVI view). */
  variants: string[];
  delivery: "STANDARD" | "UKVI" | null;
  /** CMS course slugs whose lessons belong to this collection. */
  courseSlugs: string[];
  sourceLabel: string;
  sourceUrl: string;
  note: string | null;
};

/** The four content collections (order = display order). */
export const COLLECTIONS: CollectionDef[] = [
  {
    key: "IELTS_ACADEMIC",
    name: "IELTS Academic",
    description:
      "University admission and professional registration: Academic Reading and Writing, shared Listening and Speaking.",
    examKey: "IELTS",
    variants: ["ACADEMIC"],
    delivery: "STANDARD",
    courseSlugs: ["ielts-academy-core", "ielts-academy-academic"],
    sourceLabel: "IELTS official",
    sourceUrl: "https://ielts.org/",
    note: null,
  },
  {
    key: "IELTS_GENERAL_TRAINING",
    name: "IELTS General Training",
    description:
      "Migration, work and secondary education: General Training Reading and Writing, shared Listening and Speaking.",
    examKey: "IELTS",
    variants: ["GENERAL_TRAINING"],
    delivery: "STANDARD",
    courseSlugs: ["ielts-academy-core", "ielts-academy-general-training"],
    sourceLabel: "IELTS official",
    sourceUrl: "https://ielts.org/",
    note: null,
  },
  {
    key: "IELTS_UKVI",
    name: "IELTS UKVI preparation",
    description:
      "Secure English Language Test preparation: the same IELTS test taken in person at an official UKVI centre.",
    examKey: "IELTS",
    // The same test — the collection shares both IELTS libraries rather
    // than duplicating content (official guidance: identical format,
    // timing and difficulty).
    variants: ["ACADEMIC", "GENERAL_TRAINING"],
    delivery: "UKVI",
    courseSlugs: ["ielts-academy-core", "ielts-academy-academic", "ielts-academy-general-training"],
    sourceLabel: "IELTS official — Tests for UK Visas and Immigration",
    sourceUrl: "https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration",
    note: "IELTS for UKVI is the same test as standard IELTS — this collection shares the IELTS Academic and General Training libraries and adds SELT delivery guidance.",
  },
  {
    key: "TOEFL_IBT",
    name: "TOEFL iBT",
    description:
      "TOEFL iBT (2026 format): band scale 1–6, partly-adaptive reading and listening, dual-reported legacy scores.",
    examKey: "TOEFL_IBT",
    variants: ["STANDARD"],
    delivery: null,
    courseSlugs: [],
    sourceLabel: "ETS official",
    sourceUrl: "https://www.ets.org/toefl/",
    note: "TOEFL preparation lives in the exam academy pathways and mock library; the shared English curriculum provides the language foundations.",
  },
];

export function collectionByKey(key: string): CollectionDef | undefined {
  return COLLECTIONS.find((collection) => collection.key === key);
}

/**
 * Full inventory for every collection: mock/question/lesson/rubric counts
 * plus the live spec version each runs on. Every number is a real count —
 * nothing estimated.
 */
export async function getCollectionInventories(): Promise<CollectionInventoryDto[]> {
  const out: CollectionInventoryDto[] = [];

  for (const collection of COLLECTIONS) {
    const shared = collection.delivery === "UKVI";
    // Mock membership: examKey + variant (UKVI shares the IELTS libraries).
    const mockWhere = {
      examKey: collection.examKey,
      ...(shared ? {} : { variant: collection.variants[0] }),
    };
    const [publishedMocks, draftMocks, courses, rubrics, pathwaySteps, activeSpec] =
      await Promise.all([
        db.mockTest.count({
          where: { ...mockWhere, status: "published", kind: { in: ["full", "section", "drill"] } },
        }),
        db.mockTest.count({
          where: { ...mockWhere, status: { in: ["draft", "archived"] } },
        }),
        collection.courseSlugs.length
          ? db.cmsCourse.findMany({
              where: { slug: { in: collection.courseSlugs } },
              select: {
                slug: true,
                title: true,
                live: true,
                modules: { select: { units: { select: { lessons: { where: { live: true }, select: { id: true } } } } } },
              },
            })
          : Promise.resolve([]),
        db.examRubric.count({ where: { examKey: collection.examKey } }),
        db.examPathwayStep.count({
          where: {
            module: {
              pathway: shared
                ? { examKey: collection.examKey }
                : { examKey: collection.examKey, variant: collection.variants[0] },
            },
          },
        }),
        // The spec version the collection runs on (UKVI: the Academic spec
        // stands in as the reference — same test).
        getActiveSpec(collection.examKey, shared ? "ACADEMIC" : collection.variants[0]),
      ]);

    // Question counts across the collection's mock library.
    const questionWhere = {
      section: { mockTest: { ...mockWhere, kind: { notIn: [...ASSEMBLED_SET_KINDS] } } },
    };
    const [publishedQuestions, reviewQuestions] = await Promise.all([
      db.mockTestQuestion.count({ where: { ...questionWhere, contentStatus: "published" } }),
      db.mockTestQuestion.count({
        where: { ...questionWhere, contentStatus: { in: ["draft", "in-review", "approved"] } },
      }),
    ]);

    const liveLessons = courses.reduce(
      (sum, course) =>
        sum + course.modules.reduce((m, module) => m + module.units.reduce((u, unit) => u + unit.lessons.length, 0), 0),
      0,
    );

    out.push({
      key: collection.key,
      name: collection.name,
      description: collection.description,
      examKey: collection.examKey,
      variants: collection.variants,
      delivery: collection.delivery,
      sourceLabel: collection.sourceLabel,
      sourceUrl: collection.sourceUrl,
      note: collection.note,
      counts: {
        publishedMocks,
        draftMocks,
        publishedQuestions,
        reviewQuestions,
        liveLessons,
        rubrics,
        pathwaySteps,
        specVersion: activeSpec?.version ?? null,
      },
      courses: courses.map((course) => ({
        slug: course.slug,
        title: course.title,
        live: course.live,
      })),
    });
  }

  return out;
}
