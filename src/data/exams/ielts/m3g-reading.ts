/**
 * Module 3G — IELTS General Training Reading: the GT Reading Masterclass
 * (PROMPT 45, Part C, built on the PROMPT 43 v3 textbook standard).
 *
 * The GT variant's own reading programme: seven lessons in one chapter.
 *
 *   1. The GT paper itself — three sections, the 15/20/25 budget, and what
 *      transfers from the Academic technique lessons
 *   2. Section 1: notices — headline bait, small-print answers
 *   3. Section 1: advertisements — offers, conditions and contact rules
 *   4. Section 2: instructions — steps, gates and bans
 *   5. Section 2: workplace documents — the modal-verb method
 *   6. Everyday informational texts — leaflets, guides and multi-text sets
 *   7. Section 3: longer general-interest passages — the full Academic
 *      protocol on feature material
 *
 * The Academic module (3A) carries the thirteen question-type lessons and
 * the fifteen foundation skills; this module teaches what the GT paper
 * changes — the material, the pacing and the practical-reading habits.
 * The GT passage library lives in the Reading Masterclass hub
 * (#/exams/ielts/reading): src/data/exams/ielts/reading-bank/gt-*.ts.
 *
 * Format facts verified against official IELTS pages on 2026-11-12:
 * Section 1 two or three short texts, Section 2 two work-related texts,
 * Section 3 one longer general-interest passage; 40 questions, 60 minutes.
 */

import type { ModuleSpec } from "./types";
import { gtLessonsA } from "./m3/m3g-a";
import { gtLessonsB } from "./m3/m3g-b";

export const module3gReading: ModuleSpec = {
  slug: "module-3g-gt-reading",
  title: "Module 3 — General Training Reading",
  description:
    "The General Training Reading academy: the three sections and their 15/20/25 budget, the practical-reading craft of notices, advertisements, instructions, workplace documents and informational texts, and the full Academic protocol applied to Section 3's longer general-interest passages.",
  units: [
    {
      slug: "gt-reading-practical",
      title: "Practical reading, section by section",
      description:
        "The GT paper's own material and pacing: short-text lookup in Section 1, obligation extraction in Section 2, and the complete reading protocol on Section 3's feature passage.",
      lessons: [...gtLessonsA, ...gtLessonsB],
    },
  ],
};
