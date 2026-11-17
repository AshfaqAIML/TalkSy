/**
 * TOEFL iBT Academy — Module 2, Reading (T-M2, PROMPT 48, Task 2) registrar.
 *
 * The complete Reading module: three chapters, eight lessons, delivered at
 * the v3 textbook standard (src/data/exam-academy/textbook-standard.ts).
 *
 *   1. toefl-reading-overview  — The section (1 lesson): the item mix, the
 *                                two-stage adaptive flow, and the pacing
 *                                that holds both modules inside the clock.
 *   2. toefl-reading-tasks     — The three task types (3 lessons):
 *                                Complete the Words, Read in Daily Life,
 *                                Read an Academic Passage.
 *   3. toefl-reading-skills    — Reading skills (4 lessons): vocabulary in
 *                                context and word forms, main ideas and
 *                                supporting details, inference, and
 *                                academic vocabulary.
 *
 * Format facts verified against official ETS pages (retrieved 2026-11; see
 * the TOEFL_IBT/STANDARD specification seeded by scripts/seed-exams.ts):
 * up to 50 items in ~30 minutes, two-stage adaptive (a routing module
 * first, then a lower- or upper-difficulty module; item counts and timing
 * can vary within the published range); about 30 Complete-the-Words items
 * on short texts plus 20 comprehension items across Read in Daily Life and
 * Read an Academic Passage (single-answer and select-two). Every passage,
 * mask, item and explanation in the module is original material authored
 * for this platform; no official ETS content is reproduced, and any
 * raw-to-band conversion quoted anywhere in the module is a practice
 * estimate, honestly labelled, because ETS publishes no public table.
 */

import type { ModuleSpec } from "../ielts/types";
import { T2_CH1 } from "./t2/ch1-section";
import { T2_CH2 } from "./t2/ch2-tasks";
import { T2_CH3 } from "./t2/ch3-skills";

export const TOEFL_T2_READING: ModuleSpec = {
  slug: "toefl-module-2-reading",
  title: "Module 2 — Reading",
  description:
    "The 2026 Reading section: up to 50 adaptive items in ~30 minutes across the three official task types. Learners master Complete-the-Words technique (context plus morphology to restore masked letters), everyday-text reading (Read in Daily Life), academic-passage comprehension (Read an Academic Passage), and the vocabulary, main-idea, detail and inference skills underneath all three.",
  units: [
    {
      slug: "toefl-reading-overview",
      title: "The section",
      description: "The Reading section's shape: item mix, adaptive flow and the pacing that holds it together.",
      lessons: [...T2_CH1],
    },
    {
      slug: "toefl-reading-tasks",
      title: "The three task types",
      description: "One lesson per official task family, from masked words to everyday texts to academic passages.",
      lessons: [...T2_CH2],
    },
    {
      slug: "toefl-reading-skills",
      title: "Reading skills",
      description: "The four comprehension skills every Reading item rides on: context vocabulary, claim and support, inference, and the academic word stock.",
      lessons: [...T2_CH3],
    },
  ],
};
