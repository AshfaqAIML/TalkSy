/**
 * Module 3A — IELTS Academic Reading: the Reading Masterclass
 * (PROMPT 45, Parts A and B, built on the PROMPT 43 v3 textbook standard).
 *
 * The complete Academic Reading academy: two chapters, twenty-eight lessons.
 *
 *   1. reading-foundations  — the fifteen comprehension skills (Part A):
 *                            the test itself, the sixty-minute arithmetic,
 *                            skimming, scanning, intensive reading, main
 *                            ideas, supporting details, paraphrasing,
 *                            vocabulary in context, inference, the writer's
 *                            opinion, the writer's purpose, tone, reference
 *                            words and paragraph organisation
 *   2. question-types       — one lesson per official task family (Part B):
 *                            multiple choice, True/False/Not Given,
 *                            Yes/No/Not Given, the four matchings and the
 *                            six completions, each on the seven-component
 *                            masterclass structure: definition, instructions,
 *                            solving strategy, worked example, trap
 *                            catalogue, practice, per-item explanations
 *
 * The passage library, timed simulations and performance analytics live
 * beside this course in the Reading Masterclass hub
 * (#/exams/ielts/reading): src/data/exams/ielts/reading-bank/.
 *
 * Format facts verified against official IELTS pages on 2026-11-12: three
 * passages (2,150–2,750 words), 40 questions, 60 minutes, no transfer
 * time; no specialist knowledge assumed.
 */

import type { ModuleSpec } from "./types";
import { foundationsLessonsA } from "./m3/ch1-foundations-a";
import { foundationsLessonsB } from "./m3/ch1-foundations-b";
import { foundationsLessonsC } from "./m3/ch1-foundations-c";
import { foundationsLessonsD } from "./m3/ch1-foundations-d";
import { questionTypeLessonsA } from "./m3/ch2-types-a";
import { questionTypeLessonsB } from "./m3/ch2-types-b";
import { questionTypeLessonsC } from "./m3/ch2-types-c";
import { questionTypeLessonsD } from "./m3/ch2-types-d";

export const module3aReading: ModuleSpec = {
  slug: "module-3a-academic-reading",
  title: "Module 3 — Academic Reading",
  description:
    "The complete Academic Reading academy: the fifteen foundation skills from skimming to paragraph organisation, then every one of the thirteen official question types taught on a seven-component masterclass structure — definition, instructions, solving strategy, worked example, trap catalogue, guided and independent practice with per-item explanations. Academic passages across the ten taught subjects, with no specialist knowledge assumed.",
  units: [
    {
      slug: "reading-foundations",
      title: "Reading foundations",
      description:
        "The fifteen comprehension skills the paper tests: the format and its arithmetic, the three reading speeds, the claim-support distinction, paraphrase, context vocabulary, inference, the writer's opinion, purpose and tone, reference chains, and paragraph architecture.",
      lessons: [
        ...foundationsLessonsA,
        ...foundationsLessonsB,
        ...foundationsLessonsC,
        ...foundationsLessonsD,
      ],
    },
    {
      slug: "areading-question-types",
      title: "Every question type in depth",
      description:
        "One lesson per official task family — the three verdict and choice types, the four matchings and the six completions — each taught on the seven-component structure with worked examples from the passage library and per-item answer explanations.",
      lessons: [
        ...questionTypeLessonsA,
        ...questionTypeLessonsB,
        ...questionTypeLessonsC,
        ...questionTypeLessonsD,
      ],
    },
  ],
};
