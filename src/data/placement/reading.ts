import type { ObjectiveItem } from "./types";

/**
 * Reading placement items — comprehension questions on graded passages.
 * Each tier has one short passage; its questions are separate items so the
 * adaptive engine can stop early without breaking the passage.
 */

const T1_PASSAGE = {
  title: "Sam's day",
  text: "My name is Sam. I live in a small house with my sister. Every morning I get up at seven o'clock. I eat bread and eggs for breakfast. Then I walk to my shop. I sell fruit. My favourite fruit is the mango.",
};

const T2_PASSAGE = {
  title: "A message about the weekend",
  text: "Hi Priya, I hope you are well. I'm writing about our trip on Saturday. The bus to the lake leaves at 8:15 in the morning, not 9:00 like last time. Please bring water and something to eat, because there are no shops near the lake. We come back at about 6 in the evening. Call me if you have any questions. — Marcus",
};

const T3_PASSAGE = {
  title: "Working from home",
  text: "Before 2020, most office workers travelled to their workplace every day. Now, many companies let employees work from home for part of the week. Workers say they save time and money because they do not commute. However, some people feel lonely without their colleagues, and young workers often learn faster in an office. For this reason, many companies have chosen a middle way: two or three days at home, and the rest of the week together in the office.",
};

export const readingItems: ObjectiveItem[] = [
  /* ------------------------- Tier 1 · Pre-A1/A1 ------------------------ */
  {
    id: "pr-t1-1",
    skill: "reading",
    tier: 1,
    subskill: "Detail",
    instruction: "Read the text, then answer.",
    prompt: "Who does Sam live with?",
    options: ["His brother", "His parents", "A friend", "His sister"],
    answerIndex: 3,
    explanation: "The text says: “I live in a small house with my sister.”",
    passage: T1_PASSAGE,
  },
  {
    id: "pr-t1-2",
    skill: "reading",
    tier: 1,
    subskill: "Detail",
    instruction: "Read the text, then answer.",
    prompt: "What time does Sam get up?",
    options: ["At six o'clock", "At eight o'clock", "At seven o'clock", "At midday"],
    answerIndex: 2,
    explanation: "The text says: “Every morning I get up at seven o'clock.”",
    passage: T1_PASSAGE,
  },
  {
    id: "pr-t1-3",
    skill: "reading",
    tier: 1,
    subskill: "Detail",
    instruction: "Read the text, then answer.",
    prompt: "What does Sam sell?",
    options: ["Bread", "Fruit", "Eggs", "Clothes"],
    answerIndex: 1,
    explanation: "The text says: “I sell fruit.”",
    passage: T1_PASSAGE,
  },
  /* ------------------------- Tier 2 · A1/A2 ---------------------------- */
  {
    id: "pr-t2-1",
    skill: "reading",
    tier: 2,
    subskill: "Detail",
    instruction: "Read the message, then answer.",
    prompt: "What time does the bus leave?",
    options: ["9:00 in the morning", "8:15 in the morning", "6:00 in the evening", "8:15 at night"],
    answerIndex: 1,
    explanation: "Marcus writes: “The bus… leaves at 8:15 in the morning.”",
    passage: T2_PASSAGE,
  },
  {
    id: "pr-t2-2",
    skill: "reading",
    tier: 2,
    subskill: "Purpose",
    instruction: "Read the message, then answer.",
    prompt: "Why does Marcus ask Priya to bring food?",
    options: [
      "The bus food is expensive",
      "Priya is a good cook",
      "They will stay two days",
      "There are no shops near the lake",
    ],
    answerIndex: 3,
    explanation: "The message says there are no shops near the lake.",
    passage: T2_PASSAGE,
  },
  {
    id: "pr-t2-3",
    skill: "reading",
    tier: 2,
    subskill: "Detail",
    instruction: "Read the message, then answer.",
    prompt: "When do they come back?",
    options: ["About 6 in the morning", "After two days", "About 6 in the evening", "The text does not say"],
    answerIndex: 2,
    explanation: "The message says: “We come back at about 6 in the evening.”",
    passage: T2_PASSAGE,
  },
  /* ------------------------- Tier 3 · A2/B1 ---------------------------- */
  {
    id: "pr-t3-1",
    skill: "reading",
    tier: 3,
    subskill: "Main idea",
    instruction: "Read the text, then answer.",
    prompt: "What is the main idea of the text?",
    options: [
      "Working from home is always better",
      "Many companies now mix home and office work",
      "Young workers should not work from home",
      "Nobody commutes any more",
    ],
    answerIndex: 1,
    explanation: "The text describes problems and benefits, and ends with the “middle way” many companies chose.",
    passage: T3_PASSAGE,
  },
  {
    id: "pr-t3-2",
    skill: "reading",
    tier: 3,
    subskill: "Inference",
    instruction: "Read the text, then answer.",
    prompt: "Why do some workers save money?",
    options: [
      "Companies pay them more",
      "They do not travel to work every day",
      "Offices are free",
      "They eat at home",
    ],
    answerIndex: 1,
    explanation: "The text says workers save time and money “because they do not commute”.",
    passage: T3_PASSAGE,
  },
  {
    id: "pr-t3-3",
    skill: "reading",
    tier: 3,
    subskill: "Detail",
    instruction: "Read the text, then answer.",
    prompt: "What problem do some home workers have?",
    options: ["They earn less", "They work more hours", "Their computers are slow", "They feel lonely"],
    answerIndex: 3,
    explanation: "The text says: “some people feel lonely without their colleagues”.",
    passage: T3_PASSAGE,
  },
];
