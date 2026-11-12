/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { checkSentence, categoryCounts } from "@/lib/grammar/checker";
import { partsOfSpeech } from "@/data/grammar/parts-of-speech";
import { tenses, getTense } from "@/data/grammar/tenses";
import { validateAnswer } from "@/lib/engine/validators";
import { getExercise } from "@/data/curriculum";
import type { SentenceBuildExercise } from "@/data/curriculum/types";

describe("grammar checker — error detection and correction", () => {
  const cases: { input: string; expected: string; category: string }[] = [
    { input: "i are happy today", expected: "I am happy today.", category: "subject-verb-agreement" },
    { input: "they is at home", expected: "They are at home.", category: "subject-verb-agreement" },
    { input: "he are late", expected: "He is late.", category: "subject-verb-agreement" },
    { input: "She play the piano every day", expected: "She plays the piano every day.", category: "third-person" },
    { input: "He have 25 years", expected: "He is 25 years old.", category: "word-choice" },
    { input: "I have a apple", expected: "I have an apple.", category: "articles" },
    { input: "She wants an book", expected: "She wants a book.", category: "articles" },
    { input: "i like coffee", expected: "I like coffee.", category: "capitalization" },
    { input: "He can plays the guitar", expected: "He can play the guitar.", category: "third-person" },
    { input: "I don't have nothing to say", expected: "I don't have anything to say.", category: "negatives" },
    { input: "This is more better than that", expected: "This is better than that.", category: "comparatives" },
    { input: "It is the most easiest exam", expected: "It is the easiest exam.", category: "comparatives" },
    { input: "I have much books", expected: "I have many books.", category: "countability" },
    { input: "She gave me many informations", expected: "She gave me many information.", category: "countability" },
    { input: "I want to go to home", expected: "I want to go home.", category: "word-choice" },
    { input: "It depends of you", expected: "It depends on you.", category: "prepositions" },
    { input: "I am good in English", expected: "I am good at English.", category: "prepositions" },
    { input: "She is married with a doctor", expected: "She is married to a doctor.", category: "prepositions" },
    { input: "The party is in Saturday", expected: "The party is on Saturday.", category: "prepositions" },
    { input: "I will definately come", expected: "I will definitely come.", category: "spelling" },
    { input: "You are ready?", expected: "Are you ready?", category: "word-order" },
    { input: "I am agree with you", expected: "I agree with you.", category: "word-choice" },
    { input: "I read every days", expected: "I read every day.", category: "punctuation" },
  ];

  for (const { input, expected, category } of cases) {
    it(`corrects "${input}"`, () => {
      const result = checkSentence(input);
      expect(result.corrected).toBe(expected);
      expect(result.issues.some((i) => i.category === category)).toBe(true);
      expect(result.clean).toBe(false);
    });
  }

  const clean: string[] = [
    "She works in a bank.",
    "I am reading a book right now.",
    "Do you like coffee?",
    "He has been working since nine.",
    "Although it rained, we walked home.",
    "The letter was written by Tom.",
  ];

  for (const sentence of clean) {
    it(`accepts "${sentence}" as clean`, () => {
      const result = checkSentence(sentence);
      expect(result.issues).toEqual([]);
      expect(result.clean).toBe(true);
      expect(result.corrected).toBe(sentence);
    });
  }

  it("does not flag 'a university' or 'an hour' (sound-based articles)", () => {
    expect(checkSentence("She studies at a university.").clean).toBe(true);
    expect(checkSentence("I will be there in an hour.").clean).toBe(true);
  });

  it("counts category frequencies", () => {
    const issues = [
      { category: "articles" },
      { category: "articles" },
      { category: "spelling" },
    ] as never[];
    expect(categoryCounts(issues)).toEqual({ articles: 2, spelling: 1 });
  });

  it("keeps question inversion capitalisation for I", () => {
    const result = checkSentence("I am late?");
    expect(result.corrected).toBe("Am I late?");
  });
});

describe("parts-of-speech data integrity", () => {
  it("has all 8 modules with the complete treatment", () => {
    expect(partsOfSpeech).toHaveLength(8);
    const ids = ["nouns", "pronouns", "verbs", "adjectives", "adverbs", "prepositions", "conjunctions", "interjections"];
    expect(partsOfSpeech.map((m) => m.id)).toEqual(ids);
    for (const posModule of partsOfSpeech) {
      expect(posModule.definition.length).toBeGreaterThan(10);
      expect(posModule.purpose.length).toBeGreaterThan(10);
      expect(posModule.categories.length).toBeGreaterThanOrEqual(3);
      expect(posModule.examples.length).toBeGreaterThanOrEqual(3);
      expect(posModule.useInSentences.length).toBeGreaterThanOrEqual(1);
      expect(posModule.commonMistakes.length).toBeGreaterThanOrEqual(2);
      expect(posModule.skillActivities.length).toBeGreaterThanOrEqual(2);
      // Every example's highlight words must actually appear in the sentence.
      for (const example of posModule.examples) {
        for (const word of example.highlight) {
          expect(example.sentence.toLowerCase()).toContain(word.toLowerCase());
        }
      }
    }
  });
});

describe("tense data integrity", () => {
  it("has all 12 tenses with all 9 comparison aspects", () => {
    expect(tenses).toHaveLength(12);
    const groups = { present: 4, past: 4, future: 4 };
    for (const tense of tenses) {
      groups[tense.group] -= 1;
      expect(tense.meaning.length).toBeGreaterThan(10);
      expect(tense.structure.affirmative.length).toBeGreaterThan(5);
      expect(tense.structure.negative.length).toBeGreaterThan(5);
      expect(tense.structure.question.length).toBeGreaterThan(5);
      expect(tense.verbForm.length).toBeGreaterThan(3);
      expect(tense.helpingVerbs.length).toBeGreaterThan(0);
      expect(tense.affirmative.length).toBeGreaterThan(0);
      expect(tense.negative.length).toBeGreaterThan(0);
      expect(tense.questions.yesNo.length).toBeGreaterThan(3);
      expect(tense.questions.wh.length).toBeGreaterThan(0);
      expect(tense.timeExpressions.length).toBeGreaterThanOrEqual(3);
    }
    expect(groups).toEqual({ present: 0, past: 0, future: 0 });
  });

  it("resolves tense ids", () => {
    expect(getTense("present-simple")?.name).toBe("Present Simple");
    expect(getTense("future-perfect-continuous")?.group).toBe("future");
    expect(getTense("nope")).toBeUndefined();
  });
});

describe("sentence-build validator", () => {
  const ex = getExercise("lab4-1-sb") as SentenceBuildExercise;

  it("accepts the primary answer", () => {
    const result = validateAnswer(ex, { tokens: ["She", "is", "not", "a", "doctor", "."] });
    expect(result.correct).toBe(true);
  });

  it("accepts the alternative contracted answer", () => {
    const result = validateAnswer(ex, { tokens: ["She", "isn't", "a", "doctor", "."] });
    expect(result.correct).toBe(true);
  });

  it("rejects wrong answers", () => {
    expect(validateAnswer(ex, { tokens: ["She", "is", "no", "a", "doctor", "."] }).correct).toBe(false);
    expect(validateAnswer(ex, { tokens: ["She", "are", "not", "a", "doctor", "."] }).correct).toBe(false);
  });

  it("rejects malformed answers", () => {
    expect(validateAnswer(ex, null).invalid).toBe(true);
    expect(validateAnswer(ex, { tokens: [] }).invalid).toBe(true);
  });

  it("is case-insensitive on tokens", () => {
    const result = validateAnswer(ex, { tokens: ["she", "IS", "not", "a", "doctor", "."] });
    expect(result.correct).toBe(true);
  });
});
