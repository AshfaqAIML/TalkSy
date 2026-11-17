/**
 * TOEFL iBT Academy — Module 5, Speaking (T-M5, PROMPT 48, Task 7).
 *
 * Registrar for the Speaking masterclass: composes the authored chapter
 * batches into the three-unit module the T-M5 blueprint defines
 * (src/data/exam-academy/toefl.ts).
 *
 *   1. toefl-speaking-overview  "The section"        — 1 lesson
 *   2. toefl-listen-repeat      "Listen and Repeat"  — 2 lessons
 *   3. toefl-interview          "Take an Interview"  — 2 lessons
 *
 * Every lesson is authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts) and validated by
 * scripts/check-lesson-file.ts. Format facts verified against ETS's
 * published 2026 pages: Speaking is 11 items in ~8 minutes, linear —
 * seven Listen-and-Repeat sentences, each played once and repeated aloud
 * inside a fixed window (8/10/12 seconds, growing with sentence length),
 * then a four-question interview (brief preparation, ~30-second spoken
 * answers) rated against scoring guides organised around Delivery,
 * Language use and Topic development. Pronunciation teaching throughout
 * the module is accent-neutral — intelligibility, stress, rhythm and
 * clarity, never a target national accent; interview training builds
 * spontaneous, non-memorised answers; practice feedback is framed as a
 * study estimate, never an official ETS score, and nothing here
 * reproduces official ETS content.
 */

import type { ModuleSpec } from "../ielts/types";
import { T5_CH1 } from "./t5/ch1-overview-repeat";
import { T5_CH2 } from "./t5/ch2-interview";

const [overviewLesson, listenRepeatLesson, pronunciationLesson] = T5_CH1;

export const TOEFL_T5_SPEAKING: ModuleSpec = {
  slug: "toefl-module-5-speaking",
  title: "Module 5 — Speaking",
  description:
    "The 2026 Speaking section: 11 items in ~8 minutes — seven Listen-and-Repeat sentences inside 8/10/12-second windows, then a four-question interview. Learners train listening accuracy and speech reproduction, pronunciation and intelligibility (accent-safe), and the short-complete-fluent interview answer with relevant vocabulary.",
  units: [
    {
      slug: "toefl-speaking-overview",
      title: "The section",
      description: "The eleven Speaking items, their windows and clock, and what the raters listen for.",
      lessons: [overviewLesson],
    },
    {
      slug: "toefl-listen-repeat",
      title: "Listen and Repeat",
      description: "Hearing a sentence once and bringing it back whole, clearly enough for any listener to follow.",
      lessons: [listenRepeatLesson, pronunciationLesson],
    },
    {
      slug: "toefl-interview",
      title: "Take an Interview",
      description: "Four everyday questions, half a minute each: one developed idea, stable language, no silence.",
      lessons: T5_CH2,
    },
  ],
};
