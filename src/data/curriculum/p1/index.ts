import type { CourseUnit } from "../types";
import { p1_1_1 } from "./p1-1-1";
import { p1_1_2 } from "./p1-1-2";
import { p1_1_3 } from "./p1-1-3";
import { p1_1_4 } from "./p1-1-4";
import { p1_1_5 } from "./p1-1-5";
import { p1_2_1 } from "./p1-2-1";
import { p1_2_2 } from "./p1-2-2";
import { p1_2_3 } from "./p1-2-3";
import { p1_2_4 } from "./p1-2-4";
import { p1_2_5 } from "./p1-2-5";
import { p1_3_1 } from "./p1-3-1";
import { p1_3_2 } from "./p1-3-2";
import { p1_3_3 } from "./p1-3-3";
import { p1_3_4 } from "./p1-3-4";
import { p1_3_5 } from "./p1-3-5";
import { p1_4_1 } from "./p1-4-1";
import { p1_4_2 } from "./p1-4-2";
import { p1_4_3 } from "./p1-4-3";
import { p1_4_4 } from "./p1-4-4";
import { p1_4_5 } from "./p1-4-5";
import { p1_5_1 } from "./p1-5-1";
import { p1_5_2 } from "./p1-5-2";
import { p1_5_3 } from "./p1-5-3";
import { p1_5_4 } from "./p1-5-4";
import { p1_5_5 } from "./p1-5-5";
import { p1_6_1 } from "./p1-6-1";
import { p1_6_2 } from "./p1-6-2";
import { p1_6_3 } from "./p1-6-3";
import { p1_6_4 } from "./p1-6-4";
import { p1_6_5 } from "./p1-6-5";

/**
 * P1 · Foundations — the first 30 beginner lessons of TalkSy.
 *
 * Six units × five lessons, authored against the 17-section lesson
 * template (see docs/CURRICULUM_BLUEPRINT.md). Every lesson ships as an
 * AI-assisted DRAFT awaiting expert ESL review — the content validator
 * enforces that no lesson is marked reviewed or published without a human
 * reviewer.
 *
 * Teaching sequence (prerequisite-adjusted from the product brief):
 * nouns (13) are taught before verbs (14) and pronouns (15), because
 * pronouns take the place of nouns and need verbs for natural examples.
 */
export const p1Unit1: CourseUnit = {
  slug: "p1-1",
  code: "P1 · Unit 1",
  title: "First Steps with English",
  description:
    "Meet English, learn all 26 letters, match big and small forms, sort vowels from consonants, and say your first letter sounds.",
  lessons: [p1_1_1, p1_1_2, p1_1_3, p1_1_4, p1_1_5],
};

export const p1Unit2: CourseUnit = {
  slug: "p1-2",
  code: "P1 · Unit 2",
  title: "First Words",
  description:
    "Blend sounds into your first words, read CVC words, learn the polite everyday words, group vocabulary into categories and catch word meanings.",
  lessons: [p1_2_1, p1_2_2, p1_2_3, p1_2_4, p1_2_5],
};

export const p1Unit3: CourseUnit = {
  slug: "p1-3",
  code: "P1 · Unit 3",
  title: "Words at Work",
  description:
    "Put words into sentences, count syllable beats, and meet the three great word families: nouns, verbs and pronouns.",
  lessons: [p1_3_1, p1_3_2, p1_3_3, p1_3_4, p1_3_5],
};

export const p1Unit4: CourseUnit = {
  slug: "p1-4",
  code: "P1 · Unit 4",
  title: "First Sentences",
  description:
    "What a sentence is, subject and predicate, the two sentence recipes (S+V and S+V+O), and the little words a, an and the.",
  lessons: [p1_4_1, p1_4_2, p1_4_3, p1_4_4, p1_4_5],
};

export const p1Unit5: CourseUnit = {
  slug: "p1-5",
  code: "P1 · Unit 5",
  title: "Building Bigger Sentences",
  description:
    "The be verbs am, is and are; describing with adjectives; saying where things are with prepositions; word order; and affirmative sentences.",
  lessons: [p1_5_1, p1_5_2, p1_5_3, p1_5_4, p1_5_5],
};

export const p1Unit6: CourseUnit = {
  slug: "p1-6",
  code: "P1 · Unit 6",
  title: "Everyday Talking",
  description:
    "Say no with not, ask yes/no and WH-questions, live a full day in English sentences, and introduce yourself in your first six-line speech.",
  lessons: [p1_6_1, p1_6_2, p1_6_3, p1_6_4, p1_6_5],
};

export const p1Units: CourseUnit[] = [p1Unit1, p1Unit2, p1Unit3, p1Unit4, p1Unit5, p1Unit6];
