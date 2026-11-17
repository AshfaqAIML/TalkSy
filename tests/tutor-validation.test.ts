/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import { validateTutorReply, extractCorrections } from "@/lib/tutor/validation";

describe("validateTutorReply — proficiency-claim guard (PROMPT 38 §8)", () => {
  it("strips sentences that present AI remarks as verified results", () => {
    const reply = [
      "Great work on the present simple!",
      "Your level is verified as B2 according to this conversation.",
      "We say: “She works in a hospital.”",
      "This counts as an official score for your records.",
    ].join(" ");
    const result = validateTutorReply(reply);
    expect(result.flags).toContain("proficiency-claim");
    expect(result.strippedSentences).toBe(2);
    expect(result.cleaned).toContain("She works in a hospital");
    expect(result.cleaned).not.toContain("verified as B2");
    expect(result.cleaned).not.toContain("official score");
  });

  it("keeps honest estimates and normal teaching untouched", () => {
    const reply =
      "Good question. “Does” is used with he, she and it. Your recent exercises suggest you are getting comfortable with this — that is an informal observation from our chat, not a test result.";
    const result = validateTutorReply(reply);
    expect(result.flags).not.toContain("proficiency-claim");
    expect(result.cleaned).toContain("not a test result");
  });

  it("redacts instead of emptying when everything was a claim", () => {
    const reply = "I have certified your English level officially. This is your final level.";
    const result = validateTutorReply(reply);
    expect(result.cleaned.length).toBeGreaterThan(0);
    expect(result.cleaned).toContain("informal estimate");
    expect(result.cleaned).not.toContain("I have certified");
  });

  it("caps overlength replies and flags them", () => {
    const reply = "Teaching sentence. ".repeat(600); // ~9600 chars
    const result = validateTutorReply(reply, { maxChars: 4000 });
    expect(result.flags).toContain("overlength");
    expect(result.cleaned.length).toBeLessThanOrEqual(4000);
    expect(result.cleaned.endsWith("…")).toBe(true);
  });
});

describe("validateTutorReply — grammar cross-check (as far as practical)", () => {
  it("flags a tutor correction the rule-based checker still disputes", () => {
    // The tutor's own “correction” carries a misspelling the deterministic
    // checker catches (“recieve”) — recorded as a qc-grammar-mismatch.
    const reply =
      'You wrote “I did not get the email.” We say: “I did not recieve the email yet.”';
    const result = validateTutorReply(reply);
    expect(result.flags).toContain("qc-grammar-mismatch");
    expect(result.grammarMismatches[0].categories).toContain("spelling");
    expect(result.grammarMismatches[0].correction).toContain("recieve the email yet");
    // The mismatch is a flag for auditing — never a learner-facing error.
    expect(result.cleaned).toContain("We say");
  });

  it("accepts clean corrections without a mismatch flag", () => {
    const reply =
      'You wrote “He go to school every day.” We say: “He goes to school every day.” — third person singular takes -s.';
    const result = validateTutorReply(reply);
    expect(result.flags).not.toContain("qc-grammar-mismatch");
    expect(result.grammarMismatches).toHaveLength(0);
  });

  it("extracts corrections from arrows and we-say quotes", () => {
    const found = extractCorrections(
      'Fixed: “I am go to school yesterday.” → “I went to school yesterday.” Also, the corrected version is: "She likes tea."',
    );
    expect(found).toContain("I went to school yesterday.");
    expect(found).toContain("She likes tea.");
  });
});
