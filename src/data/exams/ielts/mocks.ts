/**
 * IELTS mock-test library — original practice material, in the style of
 * the current examination. Every item is authored for this platform; no
 * official paper, paid preparation book or protected course material is
 * reproduced anywhere in this file.
 *
 * Structure rules:
 *   - Academic and General Training banks are fully separate for Reading
 *     and Writing. Listening and Speaking (identical tests across
 *     variants) exist in both variants' libraries as distinct content —
 *     the variants are never interchangeable.
 *   - Section timings follow the active specification (Listening 30 min,
 *     Reading 60, Writing 60, Speaking 11–14); sample-length question
 *     counts are stated honestly in every section's directions.
 *   - Listening items carry their recording in payload.audioScript
 *     (browser speech synthesis, played once).
 */

export type MockQuestionSeed = {
  order: number;
  type: string;
  stem?: string;
  payload: unknown;
  answer?: unknown;
  points?: number;
  skills?: string[];
  /** 1-5, 1 = foundation (A2-B1) … 5 = advanced (C1-C2). */
  difficulty?: number;
  /** Post-submission teaching note for this item. */
  explanation?: string;
  /** Provenance of the item. */
  source?: string;
  /** draft | in-review | published. */
  contentStatus?: string;
  /** PROMPT 44: audio-part group ("part-1") — questions sharing a group
   *  hear one section-level recording instead of per-question audio. */
  group?: string;
};

/** PROMPT 44: one recording shared by a question group (listening simulations). */
export type MockAudioPartSeed = {
  key: string;
  label: string;
  /** Multi-voice script: lines written as "SPEAKER NAME: text" are spoken
   *  by distinct voices (speaker names are never read aloud). */
  script: string;
  directions?: string;
};

export type MockSectionSeed = {
  key: string;
  title: string;
  directions?: string;
  timingSec: number;
  questions: MockQuestionSeed[];
  /** PROMPT 44: part-level recordings for listening simulations. */
  audioParts?: MockAudioPartSeed[];
};

export type MockSeed = {
  examKey: string;
  variant: string;
  title: string;
  kind: string;
  lengthLabel: string;
  description: string;
  sections: MockSectionSeed[];
};

const ORIGINAL =
  "Original EnglishPath practice material written in the style of the exam — not an official IELTS paper.";

export function mockDescription(text: string): string {
  return `${text} ${ORIGINAL}`;
}

import { academicFullMock1, academicFullMock2, generalFullMock1, generalFullMock2 } from "./mocks-full";
import {
  listeningSectionMockAcademic,
  listeningSectionMockGeneral,
  academicReadingSectionMock1,
  generalReadingSectionMock1,
  academicWritingSectionMock1,
  generalWritingSectionMock1,
  speakingSectionMockAcademic,
  speakingSectionMockGeneral,
} from "./mocks-section";
import {
  tfngYnngDrill,
  matchingHeadingsDrill,
  overviewDrill,
  paraphraseDrill,
  gtNoticesDrill,
  gtToneDrill,
  numbersSpellingDrillAcademic,
  numbersSpellingDrillGeneral,
  cueCardDrillAcademic,
  cueCardDrillGeneral,
} from "./mocks-drills";
import {
  gtLetterDrill,
  ieltsDictationDrill,
  ieltsDictationDrillGeneral,
} from "./mocks-2026";
import { listeningPrepFoundation, listeningPrepIntermediate, listeningPrepAdvanced, listeningTimedPart1, listeningTimedPart2, listeningTimedPart3, listeningTimedPart4 } from "./mocks-listening";
import { listeningFullSimulation1 } from "./mocks-listening-sim1";
import { listeningFullSimulation2 } from "./mocks-listening-sim2";
// The masterclass mock-title list lives in a leaf module (mock-titles.ts)
// so client surfaces can present the ladder without importing seed data.

/** The complete IELTS mock library (seeds idempotently by title). */
export const IELTS_MOCK_LIBRARY: MockSeed[] = [
  academicFullMock1,
  academicFullMock2,
  generalFullMock1,
  generalFullMock2,
  listeningSectionMockAcademic,
  listeningSectionMockGeneral,
  academicReadingSectionMock1,
  generalReadingSectionMock1,
  academicWritingSectionMock1,
  generalWritingSectionMock1,
  speakingSectionMockAcademic,
  speakingSectionMockGeneral,
  tfngYnngDrill,
  matchingHeadingsDrill,
  overviewDrill,
  paraphraseDrill,
  gtNoticesDrill,
  gtToneDrill,
  numbersSpellingDrillAcademic,
  numbersSpellingDrillGeneral,
  cueCardDrillAcademic,
  cueCardDrillGeneral,
  gtLetterDrill,
  ieltsDictationDrill,
  ieltsDictationDrillGeneral,
  listeningPrepFoundation,
  listeningPrepIntermediate,
  listeningPrepAdvanced,
  listeningTimedPart1,
  listeningTimedPart2,
  listeningTimedPart3,
  listeningTimedPart4,
  listeningFullSimulation1,
  listeningFullSimulation2,
];
