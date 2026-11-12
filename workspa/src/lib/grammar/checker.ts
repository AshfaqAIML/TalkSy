import type {
  CheckResult,
  GrammarErrorCategory,
  GrammarIssue,
} from "@/data/grammar/types";

/**
 * Rule-based grammar checker for the Grammar Error Clinic.
 * Zero external services: every rule is a typed pattern with a fix, an
 * explanation, an error category and a recommended lesson.
 */

interface GrammarRule {
  id: string;
  category: GrammarErrorCategory;
  /** Match on the working sentence (case-insensitive where useful). */
  pattern: RegExp;
  /** Replacement for the match (uses $1… groups when needed). */
  replacement: string | ((...groups: string[]) => string) | null;
  explanation: string;
  lessonSlug?: string;
}

/** Category → recommended lesson (also used by the progression recommender). */
export const CATEGORY_LESSONS: Partial<Record<GrammarErrorCategory, string>> = {
  "subject-verb-agreement": "grammar-tenses-present",
  "third-person": "grammar-tenses-present",
  articles: "grammar-pos-1",
  capitalization: "lab-3-sentence-types",
  negatives: "lab-4-polarity",
  comparatives: "grammar-pos-3",
  countability: "grammar-pos-1",
  "word-choice": "grammar-pos-2",
  prepositions: "grammar-pos-4",
  "word-order": "lab-4-polarity",
  punctuation: "lab-3-sentence-types",
};

function rule(
  id: string,
  category: GrammarErrorCategory,
  pattern: RegExp,
  replacement: string | ((...groups: string[]) => string),
  explanation: string,
): GrammarRule {
  return { id, category, pattern, replacement, explanation, lessonSlug: CATEGORY_LESSONS[category] };
}

const BE_BY_PRONOUN: Record<string, string> = {
  i: "am",
  he: "is",
  she: "is",
  it: "is",
  you: "are",
  we: "are",
  they: "are",
};

/** Verbs that safely take plain -s in third person (no -es verbs, no modals). */
const THIRD_PERSON_VERBS =
  "play|work|like|want|need|read|write|eat|drink|live|make|take|come|know|think|say|walk|talk|open|close|listen|speak|sleep|run|help|look|use";

const SPELLING_FIXES: Record<string, string> = {
  recieve: "receive",
  definately: "definitely",
  seperate: "separate",
  tommorow: "tomorrow",
  tommorrow: "tomorrow",
  alot: "a lot",
  becouse: "because",
  becuase: "because",
  wich: "which",
  thier: "their",
  freind: "friend",
};

const rules: GrammarRule[] = [
  // ---- subject–verb agreement ------------------------------------------
  rule(
    "age-with-be",
    "word-choice",
    /\b(i|he|she|you|they|we) (have|has) (\d+) years(?! of)\b/gi,
    (_m, p1: string, _verb: string, p3: string) => {
      const be = BE_BY_PRONOUN[p1.toLowerCase()] ?? "are";
      const pronoun = p1 === "I" ? "I" : p1[0].toUpperCase() + p1.slice(1);
      return `${pronoun} ${be} ${p3} years old`;
    },
    "Ages use the verb 'be': 'I am 20 years old', not 'I have 20 years'.",
  ),
  rule(
    "sva-i-are",
    "subject-verb-agreement",
    /\bi (are|is)\b/gi,
    "I am",
    "With 'I', the verb 'to be' is always 'am'.",
  ),
  rule(
    "sva-you-is",
    "subject-verb-agreement",
    /\b(you|we|they) is\b/gi,
    (_m, p1: string) => `${p1} are`,
    "With you/we/they, use 'are'.",
  ),
  rule(
    "sva-he-are",
    "subject-verb-agreement",
    /\b(he|she|it) are\b/gi,
    (_m, p1: string) => `${p1} is`,
    "With he/she/it, use 'is'.",
  ),
  rule(
    "sva-he-have",
    "subject-verb-agreement",
    /\b(he|she|it) have\b/gi,
    (_m, p1: string) => `${p1} has`,
    "With he/she/it, use 'has'.",
  ),
  rule(
    "sva-he-dont",
    "subject-verb-agreement",
    /\b(he|she|it) don't\b/gi,
    (_m, p1: string) => `${p1} doesn't`,
    "With he/she/it, the negative of the present simple uses 'doesn't'.",
  ),
  rule(
    "third-person-s",
    "third-person",
    new RegExp(`\\b(he|she|it) (${THIRD_PERSON_VERBS})\\b(?! ?[a-z]*ing)`, "gi"),
    (_m, p1: string, p2: string) => `${p1} ${p2}s`,
    "In the present simple, he/she/it takes a verb ending in -s.",
  ),
  rule(
    "modal-base",
    "third-person",
    /\b(can|will|must|should|may|might) (plays|works|goes|likes|wants|reads|writes)\b/gi,
    (_m, p1: string, p2: string) => `${p1} ${p2.replace(/s$/, "")}`,
    "After a modal verb (can, will, must…), use the base verb with no -s.",
  ),

  // ---- articles ---------------------------------------------------------
  rule(
    "article-an",
    "articles",
    /\ba (?!(uni\w*|use\w*|usu\w*|user\w*|euro\w*|one|once)\b)([aeiou]\w*)/gi,
    (_m, _skip: string, p2: string) => `an ${p2}`,
    "Use 'an' before a vowel SOUND: an apple, an hour — but a university, a one-way street.",
  ),
  rule(
    "article-a",
    "articles",
    /\ban (?!(hour|honest|honor|heir)\b)([bcdfgjklmnpqrstvwxyz]\w*)/gi,
    (_m, _h: string, p2: string) => `a ${p2}`,
    "Use 'a' before a consonant sound: a book, a university.",
  ),

  // ---- capitalization ----------------------------------------------------
  rule(
    "capital-i",
    "capitalization",
    /\bi\b/g,
    "I",
    "The pronoun 'I' is always a capital letter in English.",
  ),
  rule(
    "am-agree",
    "word-choice",
    /\b(i|we|you|they|he|she|it) (am|is|are) agree\b/gi,
    (_m, p1: string) =>
      `${p1} ${/^(he|she|it)$/i.test(p1) ? "agrees" : "agree"}`,
    "'Agree' is already a verb — it does not need 'am/is/are' before it.",
  ),

  // ---- negatives ----------------------------------------------------------
  rule(
    "double-negative",
    "negatives",
    /\b(don't|doesn't|didn't|can't|won't|haven't|hasn't) (have |know |see |hear |want )?(nothing|nobody|no one)\b/gi,
    (_m, p1: string, p2: string, p3: string) => {
      const map: Record<string, string> = { nothing: "anything", nobody: "anybody", "no one": "anyone" };
      return `${p1} ${p2 ?? ""}${map[p3.toLowerCase()] ?? "anything"}`.replace(/\s+/g, " ");
    },
    "English negatives use only one negative word: 'don't have anything', not 'don't have nothing'.",
  ),

  // ---- comparatives ---------------------------------------------------------
  rule(
    "double-comparative",
    "comparatives",
    /\bmore (better|easier|faster|bigger|smaller|harder|cheaper|taller|shorter|slower|stronger)\b/gi,
    (_m, p1: string) => p1,
    "Adjectives with -er are already comparative — never add 'more'.",
  ),
  rule(
    "double-superlative",
    "comparatives",
    /\bmost (easiest|fastest|hardest|biggest|smallest|cheapest)\b/gi,
    (_m, p1: string) => p1,
    "Adjectives with -est are already superlative — never add 'most'.",
  ),

  // ---- countability ---------------------------------------------------------
  rule(
    "much-countable",
    "countability",
    /\bmuch (books|cars|apples|houses|people|students|friends|days|years|words|things|friends|ideas|questions)\b/gi,
    (_m, p1: string) => `many ${p1}`,
    "Use 'many' with countable plural nouns and 'much' with uncountables (much water).",
  ),
  rule(
    "uncountable-plural",
    "countability",
    /\b(informations|advices|furnitures|luggages|equipments|homeworks)\b/gi,
    (_m, p1: string) => p1.replace(/s$/, ""),
    "This noun is uncountable — it has no plural form.",
  ),

  // ---- word choice ------------------------------------------------------------
  rule(
    "go-to-home",
    "word-choice",
    /\bgo to home\b/gi,
    "go home",
    "'Home' takes no preposition: 'go home', not 'go to home'.",
  ),
  rule(
    "make-photo",
    "word-choice",
    /\bmake a photo\b/gi,
    "take a photo",
    "In English you TAKE photos, not make them.",
  ),
  rule(
    "age-with-be",
    "word-choice",
    /\b(i|he|she|you|they|we) have (\d+) years(?! of)\b/gi,
    (_m, p1: string, p2: string) => {
      const be = BE_BY_PRONOUN[p1.toLowerCase()] ?? "are";
      const pronoun = p1 === "I" ? "I" : p1[0].toUpperCase() + p1.slice(1);
      return `${pronoun} ${be} ${p2} years old`;
    },
    "Ages use the verb 'be': 'I am 20 years old', not 'I have 20 years'.",
  ),

  // ---- prepositions ---------------------------------------------------------------
  rule(
    "depend-of",
    "prepositions",
    /\bdepend(s|ed)? of\b/gi,
    (_m, p1: string) => `depend${p1 ?? ""} on`,
    "'Depend' always goes with 'on'.",
  ),
  rule(
    "good-in",
    "prepositions",
    /\bgood in (english|math|maths|sports|swimming|cooking|singing)\b/gi,
    (_m, p1: string) => `good at ${p1}`,
    "Skills and subjects take 'good at'.",
  ),
  rule(
    "married-with",
    "prepositions",
    /\bmarried with\b/gi,
    "married to",
    "'Married' goes with 'to': married to Ana.",
  ),
  rule(
    "discuss-about",
    "prepositions",
    /\bdiscuss(ed|es)? about\b/gi,
    (_m, p1: string) => `discuss${p1 ?? ""}`,
    "'Discuss' takes no preposition — you discuss something directly.",
  ),
  rule(
    "in-weekday",
    "prepositions",
    /\bin (monday|tuesday|wednesday|thursday|friday|saturday|sunday)(s?)\b/gi,
    (_m, p1: string, p2: string) => `on ${p1}${p2}`,
    "Days of the week take 'on': on Monday.",
  ),

  // ---- spelling ---------------------------------------------------------------------
  rule(
    "spelling",
    "spelling",
    new RegExp(`\\b(${Object.keys(SPELLING_FIXES).join("|")})\\b`, "gi"),
    (m: string) => SPELLING_FIXES[m.toLowerCase()] ?? m,
    "This is a common misspelling — here is the correct form.",
  ),

  // ---- word order (question inversion) --------------------------------------------------
  {
    id: "question-inversion",
    category: "word-order",
    pattern: /^(you|he|she|it|they|we|i) (are|is|am|do|does|did|can|will|have|has|was|were)\b(.*)\?$/i,
    replacement: null,
    explanation:
      "In questions the verb comes before the subject: 'Are you happy?', not 'You are happy?'.",
    lessonSlug: CATEGORY_LESSONS["word-order"],
  },

  // ---- punctuation ------------------------------------------------------------------------
  rule(
    "every-days",
    "punctuation",
    /\bevery days\b/gi,
    "every day",
    "'Every' takes a singular noun: every day, every week.",
  ),
];

/** Apply one rule, returning the new string and any issue found. */
function applyRule(
  text: string,
  r: GrammarRule,
): { text: string; issue: GrammarIssue | null } {
  // Custom inversion rule.
  if (r.id === "question-inversion") {
    const match = text.match(r.pattern);
    if (!match) return { text, issue: null };
    const [, subject, verb, rest] = match;
    const subjectFixed = subject.toLowerCase() === "i" ? "I" : subject.toLowerCase();
    const inverted = `${verb[0].toUpperCase()}${verb.slice(1)} ${subjectFixed}${rest}?`;
    return {
      text: inverted,
      issue: {
        ruleId: r.id,
        category: r.category,
        original: match[0],
        suggestion: inverted,
        explanation: r.explanation,
        lessonSlug: r.lessonSlug,
      },
    };
  }

  let issue: GrammarIssue | null = null;
  const next = text.replace(r.pattern, (matched, ...groups) => {
    if (r.replacement === null) return matched;
    const fix =
      typeof r.replacement === "function"
        ? (r.replacement as (...g: unknown[]) => string)(matched, ...groups)
        : r.replacement;
    // Preserve leading capitalisation of the match.
    const applied =
      matched[0] === matched[0].toUpperCase() && /[a-z]/.test(fix[0])
        ? fix[0].toUpperCase() + fix.slice(1)
        : fix;
    issue = {
      ruleId: r.id,
      category: r.category,
      original: matched,
      suggestion: applied,
      explanation: r.explanation,
      lessonSlug: r.lessonSlug,
    };
    return applied;
  });

  return { text: next, issue };
}

/**
 * Check a learner sentence: apply every rule, collect issues, and produce the
 * corrected sentence. Rules run in order; later rules see earlier fixes.
 */
export function checkSentence(input: string): CheckResult {
  const issues: GrammarIssue[] = [];

  // Trim and collapse whitespace first.
  let text = input.replace(/\s+/g, " ").trim();
  if (text.length === 0) {
    return { corrected: "", issues, clean: true };
  }

  // Sentence must start with a capital letter.
  if (/^[a-z]/.test(text)) {
    const capitalized = text[0].toUpperCase() + text.slice(1);
    issues.push({
      ruleId: "start-capital",
      category: "capitalization",
      original: text.slice(0, 12) + (text.length > 12 ? "…" : ""),
      suggestion: capitalized.slice(0, 12) + (text.length > 12 ? "…" : ""),
      explanation: "English sentences start with a capital letter.",
      lessonSlug: CATEGORY_LESSONS.capitalization,
    });
    text = capitalized;
  }

  for (const r of rules) {
    const { text: next, issue } = applyRule(text, r);
    text = next;
    if (issue) issues.push(issue as GrammarIssue);
  }

  // Suggest terminal punctuation (only a gentle suggestion).
  if (text.length > 0 && !/[.!?]$/.test(text)) {
    const withPeriod = `${text}.`;
    issues.push({
      ruleId: "terminal-punctuation",
      category: "punctuation",
      original: text,
      suggestion: withPeriod,
      explanation: "Every sentence ends with a full stop, question mark or exclamation mark.",
      lessonSlug: CATEGORY_LESSONS.punctuation,
    });
    text = withPeriod;
  }

  return { corrected: text, issues, clean: issues.length === 0 };
}

/** Categories of a list of issues, ordered by frequency. */
export function categoryCounts(issues: GrammarIssue[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const issue of issues) {
    counts[issue.category] = (counts[issue.category] ?? 0) + 1;
  }
  return counts;
}
