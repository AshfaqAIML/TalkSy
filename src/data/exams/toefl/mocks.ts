/**
 * TOEFL iBT mock-test library (PROMPT 48) — original practice material for
 * the format in force since 21 January 2026.
 *
 * Content lives in three sibling modules:
 *   - mocks-reading.ts           Complete-the-Words texts, everyday texts and
 *                                academic passages (official item counts).
 *   - mocks-listening.ts         Listen-and-Choose-a-Response items plus
 *                                conversation / announcement / academic-talk
 *                                recordings (section-level audioParts shared
 *                                by question groups; browser speech
 *                                synthesis is the playback engine).
 *   - mocks-writing-speaking.ts  Sentence-reconstruction items, email and
 *                                academic-discussion tasks, Listen-and-Repeat
 *                                sentences and interview items.
 *
 * This module composes the library: four section mocks at official scale, one
 * full four-section mock at official item counts, and the three-part adaptive
 * simulation family (Stage 1 routing → Stage 2 upper/lower) that mirrors the
 * two-stage STRUCTURE of the official Reading and Listening sections.
 *
 * Honesty rules:
 *   - Every mock is original EnglishPath practice material, never an official
 *     ETS test, and says so in its description.
 *   - The adaptive simulation's fixed 60% routing threshold is a practice
 *     adaptation; ETS does not publish its routing algorithm.
 *   - Section raw-point scales follow the seeded TOEFL_IBT/STANDARD
 *     specification (Reading 35, Listening 35, Writing 20 objective points
 *     plus rubric tasks, Speaking 35 objective points plus rubric tasks) so
 *     the practice band tables convert fairly.
 */

import type { MockSeed } from "../ielts/mocks";
import {
  adaptiveLowerReading,
  adaptiveStage1Reading,
  adaptiveUpperReading,
  toeflFullMock1Reading,
  toeflReadingSectionMock1,
} from "./mocks-reading";
import {
  adaptiveLowerListening,
  adaptiveStage1Listening,
  adaptiveUpperListening,
  toeflFullMock1Listening,
  toeflListeningSectionMock1,
} from "./mocks-listening";
import {
  toeflFullMock1Speaking,
  toeflFullMock1Writing,
  toeflWritingSectionMock2,
} from "./mocks-writing-speaking";

const HONESTY = "Original EnglishPath practice material — not an official ETS test.";

// ---------------------------------------------------------------------------
// Full mock at official item counts (Reading 50 items · Listening 35 questions
// across the four task families · Writing 12 items · Speaking 11 items)
// ---------------------------------------------------------------------------

export const toeflFullMock1: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL iBT Full Mock (2026 format) 1",
  kind: "full",
  lengthLabel: "full-length",
  description:
    "A complete four-section simulation of the TOEFL iBT 2026 format at official item counts: Reading (three Complete-the-Words texts, two everyday texts and an academic passage), Listening (response items plus a conversation, two announcements and two academic talks across the four task families), Writing (ten sentence-reconstruction items, one email and one academic discussion) and Speaking (seven Listen-and-Repeat sentences with the official 8/10/12-second windows plus a four-question interview). About 90 minutes of timed sections. This linear practice version does not reproduce ETS's two-stage adaptive routing — sit the Adaptive Simulation family for that experience. " +
    HONESTY,
  sections: [
    toeflFullMock1Reading,
    toeflFullMock1Listening,
    toeflFullMock1Writing,
    toeflFullMock1Speaking,
  ],
};

// ---------------------------------------------------------------------------
// Adaptive simulation family — mirrors the two-stage STRUCTURE of the official
// Reading and Listening sections with an honest, fixed practice routing rule.
// ---------------------------------------------------------------------------

export const toeflAdaptiveStage1: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Adaptive Simulation — Stage 1: Routing module",
  kind: "section",
  lengthLabel: "adaptive",
  description:
    "Stage 1 of the two-stage adaptive practice simulation: one mixed-difficulty routing module covering Reading (13 raw points) and Listening (10 raw points), exactly where the official test decides your path. Score 60% or more of the raw points to continue with the Upper module; below 60%, continue with the Lower module. The fixed threshold is TalkSy's practice adaptation of the two-stage design — ETS does not publish its routing algorithm. " +
    HONESTY,
  sections: [adaptiveStage1Reading, adaptiveStage1Listening],
};

export const toeflAdaptiveUpper: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Adaptive Simulation — Stage 2: Upper module",
  kind: "section",
  lengthLabel: "adaptive",
  description:
    "Stage 2 upper-difficulty module for learners who scored 60% or higher on the routing module: harder Reading (18 raw points) and Listening (8 raw points) items with denser prose and deeper inference. The split into upper and lower paths mirrors the official two-stage design, but TalkSy's fixed 60% threshold is a practice adaptation — ETS does not publish its routing algorithm, and in the real test the upper module raises the band you can reach. " +
    HONESTY,
  sections: [adaptiveUpperReading, adaptiveUpperListening],
};

export const toeflAdaptiveLower: MockSeed = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL Adaptive Simulation — Stage 2: Lower module",
  kind: "section",
  lengthLabel: "adaptive",
  description:
    "Stage 2 lower-difficulty module for learners below 60% on the routing module: clearer Reading (18 raw points) and Listening (8 raw points) items that rebuild accuracy, vocabulary and pacing before you climb back to the upper path. The two-stage structure mirrors the official design, but the fixed 60% threshold is a practice adaptation, not the ETS routing algorithm — and no practice module is a verdict on your potential band. " +
    HONESTY,
  sections: [adaptiveLowerReading, adaptiveLowerListening],
};

// ---------------------------------------------------------------------------
// Library
// ---------------------------------------------------------------------------

/**
 * The PROMPT 48 TOEFL mock library: four section mocks at official scale, the
 * full four-section mock, and the adaptive simulation family. The three
 * sample mocks authored earlier (sample full mock, speaking section mock 1,
 * writing section mock 1) live inline in scripts/seed-exams.ts and join the
 * library at seed time; everything here is new material.
 */
export const TOEFL_MOCK_LIBRARY: MockSeed[] = [
  toeflReadingSectionMock1,
  toeflListeningSectionMock1,
  toeflWritingSectionMock2,
  toeflFullMock1,
  toeflAdaptiveStage1,
  toeflAdaptiveUpper,
  toeflAdaptiveLower,
];
