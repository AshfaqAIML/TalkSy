/**
 * Module 2 — Listening Mastery: the IELTS Listening Masterclass
 * (PROMPT 44, built on the PROMPT 43 v3 textbook standard).
 *
 * The complete Listening academy for the test that is identical in both
 * variants. Four chapters, thirty-one lessons:
 *
 *   1. exam-fundamentals  — the format facts: four parts, one hearing,
 *                           instructions and answer limits, spelling,
 *                           numbers and dates, accents, the clock
 *                           (PROMPT 44 Part 1)
 *   2. core-skills        — the twelve abilities behind every mark:
 *                           prediction, keywords, synonyms, paraphrase,
 *                           distractors, speaker tracking, corrections,
 *                           number perception, opinions, intention,
 *                           specific information, overall meaning
 *                           (PROMPT 44 Part 2)
 *   3. question-types     — one lesson per official task family, each on
 *                           the seven-component masterclass structure:
 *                           explanation, solving method, worked example,
 *                           trap catalogue, guided practice, independent
 *                           practice, per-item answer explanations
 *                           (PROMPT 44 Part 3)
 *   4. parts-in-depth     — one preparation chapter per recording part,
 *                           increasing complexity from the everyday
 *                           conversation of Part 1 to the academic
 *                           monologue of Part 4 (PROMPT 44 Part 4)
 *
 * The audio question bank, progressive practice tests and performance
 * analytics live beside this course in the Listening Masterclass hub
 * (#/exams/ielts/listening): src/data/exams/ielts/listening-bank/ and
 * src/data/exams/ielts/mocks-listening*.ts.
 *
 * Format facts verified against official IELTS pages on 2026-11-12: four
 * parts heard once only; a range of accents (British, Australian, New
 * Zealand, North American); computer-delivered only since mid-2026 — type
 * as you listen and about two minutes to check at the end.
 */

import type { ModuleSpec } from "./types";
import { fundamentalsLessons } from "./m2/ch1-fundamentals";
import { coreSkillsLessonsA } from "./m2/ch2-skills-a";
import { coreSkillsLessonsB } from "./m2/ch2-skills-b";
import { questionTypeLessons } from "./m2/ch3-question-types";
import { partsLessons } from "./m2/ch4-parts";

export const module2Listening: ModuleSpec = {
  slug: "module-2-listening",
  title: "Module 2 — Listening Mastery",
  description:
    "The complete Listening academy for the test that is identical in both variants: the format fundamentals (four parts heard once, instructions and answer limits, spelling, numbers, accents, the clock), the twelve core listening skills, every official question type taught to mastery on a seven-component structure, and a preparation chapter for each recording part with increasing complexity.",
  units: [
    {
      slug: "exam-fundamentals",
      title: "Examination fundamentals",
      description:
        "The format facts every technique lesson assumes: structure, four parts, playback, instructions, answer limits, spelling, numbers and dates, accents and the section clock.",
      lessons: fundamentalsLessons,
    },
    {
      slug: "core-skills",
      title: "The twelve core listening skills",
      description:
        "The abilities behind every Listening mark, one lesson each: prediction, keywords, synonyms, paraphrase, distractors, speaker tracking, corrections, number perception, opinions, intention, specific information and overall meaning.",
      lessons: [...coreSkillsLessonsA, ...coreSkillsLessonsB],
    },
    {
      slug: "listening-question-types",
      title: "Every question type in depth",
      description:
        "One lesson per official task family — multiple choice, matching, plan and map labelling, form, note, table, flowchart, summary and sentence completion — each with its solving method, a fully worked example, its trap catalogue and two-tier practice.",
      lessons: questionTypeLessons,
    },
    {
      slug: "parts-in-depth",
      title: "The four parts in depth",
      description:
        "A preparation chapter for each recording part with increasing complexity: the everyday conversation, the individual speaker, the educational discussion and the academic monologue.",
      lessons: partsLessons,
    },
  ],
};
