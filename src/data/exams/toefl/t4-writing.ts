/**
 * TOEFL iBT Academy — Module 4, Writing (T-M4, PROMPT 48).
 *
 * Registrar for the Writing masterclass: composes the authored chapter
 * batches into the four-unit module the T-M4 blueprint defines
 * (src/data/exam-academy/toefl.ts).
 *
 *   1. toefl-writing-overview  "The section"                             — 1 lesson
 *   2. toefl-build-sentence    "Build a Sentence"                        — 2 lessons
 *   3. toefl-email             "Write an Email"                          — 1 lesson
 *   4. toefl-discussion        "Write for an Academic Discussion"        — 2 lessons
 *
 * Every lesson is authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts) and validated by
 * scripts/check-lesson-file.ts. Format facts verified against ETS's
 * published 2026 pages: Writing is 12 items in ~23 minutes, linear — ten
 * Build a Sentence reconstruction items (~1 minute each), one Write an
 * Email (~5 minutes) and one Write for an Academic Discussion (~10
 * minutes, 100+ words) — with the email and the discussion post rated
 * against scoring guides organised around Development, Organization and
 * Language use on the 1.0–6.0 band scale. Practice band labels in this
 * module are estimates for study purposes, never official ETS scores, and
 * nothing here reproduces official ETS content.
 */

import type { ModuleSpec } from "../ielts/types";
import { T4_CH1 } from "./t4/ch1-overview-build";
import { T4_CH2 } from "./t4/ch2-email-discussion";

export const TOEFL_T4_WRITING: ModuleSpec = {
  slug: "toefl-module-4-writing",
  title: "Module 4 — Writing",
  description:
    "The 2026 Writing section: 12 items in ~23 minutes. Learners rebuild scrambled sentences correctly and fast (Build a Sentence), write a fit-for-purpose email in the right tone (Write an Email), and add a substantive post to an academic discussion (Write for an Academic Discussion) — with the grammar, syntax and academic vocabulary the scoring guides reward.",
  units: [
    {
      slug: "toefl-writing-overview",
      title: "The section",
      description:
        "What the twenty-three minutes contain, item by item, and what the scoring guides reward.",
      lessons: [T4_CH1[0]],
    },
    {
      slug: "toefl-build-sentence",
      title: "Build a Sentence",
      description:
        "Rebuilding scrambled sentences correctly at about a minute each, with the grammar that gives the order away.",
      lessons: T4_CH1.slice(1),
    },
    {
      slug: "toefl-email",
      title: "Write an Email",
      description:
        "A fit-for-purpose email in about five minutes: four moves and the right tone for the reader.",
      lessons: [T4_CH2[0]],
    },
    {
      slug: "toefl-discussion",
      title: "Write for an Academic Discussion",
      description:
        "A substantive post in the discussion register: position, engagement with classmates, supported reasons.",
      lessons: T4_CH2.slice(1),
    },
  ],
};
