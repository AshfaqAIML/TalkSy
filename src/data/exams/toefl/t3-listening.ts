/**
 * TOEFL iBT Academy — Module 3, Listening (T-M3, PROMPT 48, Task 3).
 *
 * Registrar for the Listening module: composes the three chapter arrays
 * into the delivered module shape. Chapter files:
 *   ./t3/ch1-section.ts   — The section (1 lesson)
 *   ./t3/ch2-tasks.ts     — The four task types (4 lessons)
 *   ./t3/ch3-skills.ts    — Listening skills (5 lessons)
 *
 * Format facts carried consistently across the module (verified against
 * official ETS pages; see chapter headers): up to 47 items, ~29 minutes,
 * two-stage adaptive, forward-only — each recording plays once and a
 * confirmed item never reopens. Task types: Listen and Choose a Response,
 * Listen to a Conversation, Listen to an Announcement, Listen to an
 * Academic Talk. Sitting order Reading → Listening → Writing → Speaking;
 * ~90 minutes of timed sections, ~2 hours end to end; bands 1.0–6.0 in
 * half steps; no pass mark. Recordings use a range of native-speaker
 * accents and none is scored higher than another. All practice audio and
 * items in this module are original material written in the style of the
 * test — nothing reproduces official ETS content.
 */

import type { ModuleSpec } from "../ielts/types";
import { T3_CH1 } from "./t3/ch1-section";
import { T3_CH2 } from "./t3/ch2-tasks";
import { T3_CH3 } from "./t3/ch3-skills";

export const TOEFL_T3_LISTENING: ModuleSpec = {
  slug: "toefl-module-3-listening",
  title: "Module 3 — Listening",
  description:
    "The 2026 Listening section: up to 47 forward-only adaptive items in ~29 minutes across four task types. Learners practise predicting responses before hearing options, following conversations and announcements, and taking usable notes on academic talks — while tuning into the natural spoken English (reductions, discourse markers) the recordings actually use.",
  units: [
    {
      slug: "toefl-listening-overview",
      title: "The section",
      description:
        "The operating rules — item ceiling, time envelope, two-stage adaptivity and forward-only navigation — that every technique lesson in the module builds on.",
      lessons: T3_CH1,
    },
    {
      slug: "toefl-listening-tasks",
      title: "The four task types",
      description:
        "One lesson per official task family, from the pragmatic reply choices of the response task to the signposted structure of the academic talk.",
      lessons: T3_CH2,
    },
    {
      slug: "toefl-listening-skills",
      title: "Listening skills",
      description:
        "The cross-task abilities the section draws on: intent and stance, spine-and-detail tracking, supported inference, engineered note-taking and the sound of natural spoken English.",
      lessons: T3_CH3,
    },
  ],
};
