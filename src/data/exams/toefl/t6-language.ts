/**
 * TOEFL iBT Academy — Module 6 registrar (T-M6, PROMPT 48, Task 8).
 *
 * "Grammar and Vocabulary": the language engine underneath every section.
 * Chapter files carry the lessons; this registrar composes them into the
 * three blueprint units, in exact chapter order:
 *
 *   toefl-language-words      — Academic words        (ch1 lessons 1–2)
 *   toefl-language-sentences  — Sentence craft        (ch1 lessons 3–4)
 *   toefl-language-expression — Expression            (ch2 lessons 5–6)
 *
 * Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts); format facts as in the
 * chapter headers. Not yet wired into src/data/exams/toefl/index.ts —
 * integration happens with the T-M6 production batch, matching how
 * earlier modules landed.
 */

import type { ModuleSpec } from "../ielts/types";
import { T6_CH1 } from "./t6/ch1-words-sentences";
import { T6_CH2 } from "./t6/ch2-expression";

export const TOEFL_T6_LANGUAGE: ModuleSpec = {
  slug: "toefl-module-6-language",
  title: "Module 6 — TOEFL Grammar and Vocabulary",
  description:
    "The language engine behind every TOEFL section. Learners build academic word families, the sentence structure that Build a Sentence tests directly, grammar accuracy with a falling error rate, the collocations and paraphrasing that reading and listening items assume, and the natural academic register the scoring guides describe.",
  units: [
    {
      slug: "toefl-language-words",
      title: "Academic words",
      description: "The stock that recycles in every passage: word families and the partnerships that carry them.",
      lessons: T6_CH1.slice(0, 2),
    },
    {
      slug: "toefl-language-sentences",
      title: "Sentence craft",
      description: "The structural engine Build a Sentence grades and every constructed response rides on.",
      lessons: T6_CH1.slice(2),
    },
    {
      slug: "toefl-language-expression",
      title: "Expression",
      description: "Restating faithfully and sounding natural: paraphrase fidelity and academic register.",
      lessons: [...T6_CH2],
    },
  ],
};
