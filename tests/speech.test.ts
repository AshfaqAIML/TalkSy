import { describe, test, expect } from "bun:test";
import { textMatches, similarity, speechPassed } from "../src/lib/speech";

describe("textMatches", () => {
  test("ignores case and surrounding punctuation", () => {
    expect(textMatches("Night", "night")).toBe(true);
    expect(textMatches("good night.", "Good Night")).toBe(true);
    expect(textMatches("  SEVEN  ", "seven")).toBe(true);
  });

  test("accepts typographic apostrophes", () => {
    expect(textMatches("can't", "can’t")).toBe(true);
    expect(textMatches("I'm fine", "i’m fine")).toBe(true);
  });

  test("tolerates articles a/an/the", () => {
    expect(textMatches("the answer", "answer")).toBe(true);
    expect(textMatches("a kilo", "kilo")).toBe(true);
  });

  test("rejects genuinely different answers", () => {
    expect(textMatches("morning", "night")).toBe(false);
    expect(textMatches("seven", "nine")).toBe(false);
  });
});

describe("similarity & speech grading", () => {
  test("identical text scores 1", () => {
    expect(similarity("hello nice to meet you", "Hello! Nice to meet you.")).toBe(1);
  });

  test("completely different text scores low", () => {
    expect(similarity("the weather is sunny", "my brother plays football")).toBeLessThan(0.3);
  });

  test("near misses pass the speech threshold", () => {
    expect(speechPassed("hello nice to meet you", "Hello. Nice to meet you.")).toBe(true);
    expect(
      speechPassed("hello nice to meet", "Hello. Nice to meet you.")
    ).toBe(true); // 4/5 words ≈ 0.8
  });

  test("short unrelated audio fails", () => {
    expect(speechPassed("banana", "Hello. Nice to meet you.")).toBe(false);
  });
});
