/**
 * Reading Room registry — levels, categories, texts and integrity checks.
 *
 * Mirrors the curriculum registry pattern: content files export typed data,
 * and this module validates it (unique ids/slugs, well-formed questions,
 * glossary coverage) so tests can assert the library is sound.
 */

import type {
  ComprehensionSkill,
  ReadingCategoryMeta,
  ReadingLevelId,
  ReadingQuestion,
  ReadingText,
} from "./types";
import { COMPREHENSION_SKILLS } from "./types";
import { beginnerTexts } from "./beginner";
import { elementaryTexts } from "./elementary";
import { intermediateTexts } from "./intermediate";
import { advancedTexts } from "./advanced";

export * from "./types";

export const readingLevels: {
  id: ReadingLevelId;
  name: string;
  tagline: string;
  cefr: string;
  description: string;
}[] = [
  {
    id: "beginner",
    name: "Beginner",
    tagline: "First words → very short passages",
    cefr: "Pre-A1",
    description:
      "Individual words, basic phrases, simple sentences, very short passages and illustrated reading.",
  },
  {
    id: "elementary",
    name: "Elementary",
    tagline: "Stories, dialogues and simple facts",
    cefr: "A1–A2",
    description:
      "Short stories, everyday dialogues, simple descriptive passages and short informational texts.",
  },
  {
    id: "intermediate",
    name: "Intermediate",
    tagline: "Articles, explanations and opinions",
    cefr: "A2–B1",
    description:
      "Articles, longer stories, explanatory passages, informational texts and opinion passages.",
  },
  {
    id: "advanced",
    name: "Advanced",
    tagline: "Editorials, documents and analysis",
    cefr: "B2–C1",
    description:
      "Editorial-style passages, detailed articles, professional documents, complex narratives and analytical texts.",
  },
];

export const readingCategories: ReadingCategoryMeta[] = [
  { id: "words", name: "Individual words", levels: ["beginner"] },
  { id: "phrases", name: "Basic phrases", levels: ["beginner"] },
  { id: "sentences", name: "Simple sentences", levels: ["beginner"] },
  { id: "mini-passages", name: "Very short passages", levels: ["beginner"] },
  { id: "illustrated", name: "Illustrated reading", levels: ["beginner"] },
  { id: "short-stories", name: "Short stories", levels: ["elementary"] },
  { id: "everyday-dialogues", name: "Everyday dialogues", levels: ["elementary"] },
  { id: "descriptive", name: "Descriptive passages", levels: ["elementary"] },
  { id: "informational", name: "Informational texts", levels: ["elementary", "intermediate"] },
  { id: "articles", name: "Articles", levels: ["intermediate"] },
  { id: "longer-stories", name: "Longer stories", levels: ["intermediate"] },
  { id: "explanatory", name: "Explanatory passages", levels: ["intermediate"] },
  { id: "opinion", name: "Opinion passages", levels: ["intermediate"] },
  { id: "editorial", name: "Editorial-style passages", levels: ["advanced"] },
  { id: "detailed-articles", name: "Detailed articles", levels: ["advanced"] },
  { id: "professional-documents", name: "Professional documents", levels: ["advanced"] },
  { id: "complex-narratives", name: "Complex narratives", levels: ["advanced"] },
  { id: "analytical", name: "Analytical texts", levels: ["advanced"] },
];

export const readingTexts: ReadingText[] = [
  ...beginnerTexts,
  ...elementaryTexts,
  ...intermediateTexts,
  ...advancedTexts,
];

const bySlug = new Map(readingTexts.map((t) => [t.slug, t]));
const byId = new Map(readingTexts.map((t) => [t.id, t]));

export function getReadingText(slug: string): ReadingText | null {
  return bySlug.get(slug) ?? null;
}

export function getReadingTextById(id: string): ReadingText | null {
  return byId.get(id) ?? null;
}

/** Question lookup across the whole library (grading relies on this). */
const questionByText = new Map<string, ReadingQuestion>();
for (const text of readingTexts) {
  for (const question of text.questions) {
    questionByText.set(`${text.id}:${question.id}`, question);
  }
}

export function getReadingQuestion(textId: string, questionId: string): ReadingQuestion | null {
  return questionByText.get(`${textId}:${questionId}`) ?? null;
}

export function textsByLevel(level: ReadingLevelId): ReadingText[] {
  return readingTexts.filter((t) => t.level === level);
}

/** Word count of a text's paragraphs (display metadata). */
export function readingWordCount(text: ReadingText): number {
  return text.paragraphs.reduce(
    (sum, p) => sum + p.text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length,
    0,
  );
}

// ---------------------------------------------------------------------------
// Integrity validation (used by tests; runs cheaply, no server dependency)
// ---------------------------------------------------------------------------

export interface ReadingIntegrityReport {
  ok: boolean;
  errors: string[];
}

/** Does a glossary term's headword appear in the text (inflection-tolerant)? */
function termAppearsInText(term: string, body: string): boolean {
  // Strip parenthetical qualifiers like "clear (a flat)".
  const headword = term.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  if (headword.length === 0) return false;
  if (body.includes(headword.toLowerCase())) return true;
  // Inflected forms: "get" → "gets", "brush" → "brushes", "buy" → "buying"…
  const firstWord = headword.split(/\s+/)[0];
  if (firstWord.length >= 3) {
    const pattern = new RegExp(`\\b${firstWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");
    if (pattern.test(body)) return true;
  }
  return false;
}

export function validateReadingLibrary(): ReadingIntegrityReport {
  const errors: string[] = [];
  const slugs = new Set<string>();
  const ids = new Set<string>();
  const levelIds = new Set(readingLevels.map((l) => l.id));
  const categoryIds = new Set(readingCategories.map((c) => c.id));

  for (const text of readingTexts) {
    const where = `text ${text.slug}`;
    if (slugs.has(text.slug)) errors.push(`${where}: duplicate slug`);
    slugs.add(text.slug);
    if (ids.has(text.id)) errors.push(`${where}: duplicate id`);
    ids.add(text.id);
    if (!levelIds.has(text.level)) errors.push(`${where}: unknown level ${text.level}`);
    if (!categoryIds.has(text.category)) errors.push(`${where}: unknown category ${text.category}`);
    const category = readingCategories.find((c) => c.id === text.category);
    if (category && !category.levels.includes(text.level)) {
      errors.push(`${where}: category ${text.category} not valid for level ${text.level}`);
    }
    if (text.paragraphs.length < 4) errors.push(`${where}: fewer than 4 paragraphs`);
    const paragraphIds = new Set<string>();
    for (const paragraph of text.paragraphs) {
      if (paragraphIds.has(paragraph.id)) errors.push(`${where}: duplicate paragraph id`);
      paragraphIds.add(paragraph.id);
      if (paragraph.text.trim().length === 0) errors.push(`${where}: empty paragraph`);
      if (paragraph.translation.trim().length === 0) {
        errors.push(`${where}: paragraph ${paragraph.id} missing translation`);
      }
    }
    if (text.questions.length < 4) errors.push(`${where}: fewer than 4 questions`);
    const questionIds = new Set<string>();
    for (const question of text.questions) {
      const qwhere = `${where} question ${question.id}`;
      if (questionIds.has(question.id)) errors.push(`${where}: duplicate question id`);
      questionIds.add(question.id);
      if (question.prompt.trim().length === 0) errors.push(`${qwhere}: empty prompt`);
      if (question.feedback.correctAnswer.trim().length === 0) {
        errors.push(`${qwhere}: missing correct answer`);
      }
      if (question.feedback.explanation.trim().length === 0) {
        errors.push(`${qwhere}: missing explanation`);
      }
      if (question.hints.length === 0) errors.push(`${qwhere}: no hints`);
      if (question.format === "choice") {
        if (question.options.length < 3) errors.push(`${qwhere}: fewer than 3 options`);
        if (!question.options.some((o) => o.id === question.correctOptionId)) {
          errors.push(`${qwhere}: correct option not among options`);
        }
        const optionIds = new Set(question.options.map((o) => o.id));
        if (optionIds.size !== question.options.length) {
          errors.push(`${qwhere}: duplicate option ids`);
        }
      } else if (question.format === "sequence") {
        if (question.events.length < 3) errors.push(`${qwhere}: fewer than 3 events`);
        const eventIds = new Set(question.events.map((e) => e.id));
        if (eventIds.size !== question.events.length) errors.push(`${qwhere}: duplicate event ids`);
        if (
          question.correctOrder.length !== question.events.length ||
          !question.correctOrder.every((id) => eventIds.has(id))
        ) {
          errors.push(`${qwhere}: correctOrder is not a permutation of events`);
        }
      } else {
        if (question.acceptedAnswers.length === 0 && !question.keywords) {
          errors.push(`${qwhere}: no accepted answers or keywords`);
        }
      }
    }
    const body = text.paragraphs.map((p) => p.text).join(" ");
    for (const entry of text.glossary) {
      if (entry.term.trim().length === 0) errors.push(`${where}: glossary entry without term`);
      if (entry.definition.trim().length === 0) {
        errors.push(`${where}: glossary entry ${entry.term} without definition`);
      }
      if (!termAppearsInText(entry.term, body)) {
        errors.push(`${where}: glossary term "${entry.term}" not found in the text`);
      }
    }
  }

  // Every comprehension skill must be assessed at least twice overall.
  const skillCounts = new Map<ComprehensionSkill, number>();
  for (const text of readingTexts) {
    for (const question of text.questions) {
      skillCounts.set(question.skill, (skillCounts.get(question.skill) ?? 0) + 1);
    }
  }
  for (const skill of COMPREHENSION_SKILLS) {
    if ((skillCounts.get(skill) ?? 0) < 2) {
      errors.push(`library: comprehension skill ${skill} has fewer than 2 questions`);
    }
  }

  return { ok: errors.length === 0, errors };
}
