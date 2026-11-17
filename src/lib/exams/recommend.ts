/**
 * Common-English-foundation bridge.
 *
 * The academy never duplicates the English curriculum: when an exam
 * section is weak, this engine maps the weakness to lessons and drills
 * that ALREADY exist in Divisions A and B (Grammar School, Word World,
 * Sentence Lab, Reading Room, Listening Lab, Writing Studio, Speaking
 * Lab, AI Tutor) plus academy-owned exam drills. Content is referenced by
 * its stable ids from src/data/** — nothing is copied.
 *
 * Rules are data (BRIDGE_RULES below), keyed by (section, weakness tag).
 * The engine picks the learner's weakest sections first and limits the
 * dashboard to a focused set of recommendations.
 */

import type { RecommendationDto, SectionKey, SpecDto } from "./types";

export type BridgeRef = {
  title: string;
  source: string; // curriculum module label
  href: string; // hash route into the common app
  minutes: number;
};

type BridgeRule = {
  /** Weakness tag as produced by diagnostics / mock skill gaps. */
  tags: string[];
  section: SectionKey | "any";
  refs: BridgeRef[];
};

/**
 * A grammar-topic ref deep-links the tense explorer; reading/listening/
 * writing/speaking refs deep-link module content by slug where a stable
 * one exists, or the module hub otherwise. Slugs below were verified
 * against src/data/** at seed time (see scripts/seed-exams.ts which
 * cross-checks every reference and fails loudly on drift).
 */
export const BRIDGE_RULES: BridgeRule[] = [
  {
    section: "writing",
    tags: ["grammar", "sentence", "range", "accuracy"],
    refs: [
      { title: "Grammar School — tense system", source: "Grammar School", href: "#/grammar/tenses", minutes: 20 },
      { title: "Sentence Lab — build & rebuild sentences", source: "Sentence Lab", href: "#/lab", minutes: 15 },
      { title: "Grammar Clinic — fix your own errors", source: "Grammar School", href: "#/grammar/clinic", minutes: 15 },
    ],
  },
  {
    section: "writing",
    tags: ["vocabulary", "lexical", "word-choice", "academic-vocab"],
    refs: [
      { title: "Word World — build academic word lists", source: "Word World", href: "#/vocabulary/lists", minutes: 15 },
      { title: "Writing Studio — guided assignments", source: "Writing Studio", href: "#/writing", minutes: 30 },
    ],
  },
  {
    section: "writing",
    tags: ["coherence", "cohesion", "structure", "organization", "task-response"],
    refs: [
      { title: "Writing Studio — structured assignments with rubric feedback", source: "Writing Studio", href: "#/writing", minutes: 30 },
      { title: "AI Tutor — outline your ideas before writing", source: "AI Tutor", href: "#/tutor", minutes: 15 },
    ],
  },
  {
    section: "reading",
    tags: ["academic-vocab", "vocabulary", "word-choice"],
    refs: [
      { title: "Word World — academic & topic vocabulary", source: "Word World", href: "#/vocabulary", minutes: 15 },
      { title: "Reading Room — glossary-equipped texts", source: "Reading Room", href: "#/reading", minutes: 25 },
    ],
  },
  {
    section: "reading",
    tags: ["detail", "skim", "scan", "paraphrase", "inference", "main-idea", "speed"],
    refs: [
      { title: "Reading Room — comprehension skills practice", source: "Reading Room", href: "#/reading", minutes: 25 },
      { title: "AI Tutor — paraphrase drills", source: "AI Tutor", href: "#/tutor", minutes: 15 },
    ],
  },
  {
    section: "listening",
    tags: ["detail", "numbers", "spelling", "speed", "paraphrase"],
    refs: [
      { title: "Listening Lab — everyday to extended audio", source: "Listening Lab", href: "#/listening", minutes: 20 },
      { title: "Word World — context sentences with audio", source: "Word World", href: "#/vocabulary/context", minutes: 15 },
    ],
  },
  {
    section: "speaking",
    tags: ["fluency", "confidence", "pronunciation", "vocabulary", "grammar"],
    refs: [
      { title: "Speaking Lab — guided activities by level", source: "Speaking Lab", href: "#/speaking/practice", minutes: 20 },
      { title: "Speaking Lab — pronunciation training", source: "Speaking Lab", href: "#/speaking/pronunciation", minutes: 15 },
      { title: "AI Tutor — free conversation practice", source: "AI Tutor", href: "#/tutor", minutes: 15 },
    ],
  },
];

/** Academy-owned drills (not curriculum duplication: exam technique only). */
export const EXAM_DRILLS: Record<string, BridgeRef> = {
  IELTS: {
    title: "IELTS question-type drills (True/False/Not Given, matching, completion)",
    source: "Exam Academy",
    href: "#/exams/mocks",
    minutes: 25,
  },
  TOEFL_IBT: {
    title: "TOEFL 2026 drills (Complete the Words, sentence reconstruction, interview speaking)",
    source: "Exam Academy",
    href: "#/exams/mocks",
    minutes: 25,
  },
};

export type RecommendationInput = {
  spec: SpecDto;
  /** Section estimates (from diagnostics). */
  estimates: Array<{ section: SectionKey; estimated: number; confidence: number }>;
  /** Weakness tags per section (diagnostics weaknesses + mock skill gaps). */
  weaknessTags: Partial<Record<SectionKey, string[]>>;
  /** Sections the learner flagged as difficult during onboarding. */
  difficultSections: SectionKey[];
  limit?: number;
};

export function buildRecommendations(input: RecommendationInput): RecommendationDto[] {
  const { spec, estimates, weaknessTags, difficultSections, limit = 6 } = input;
  const maxScore = spec.scoringModel.maxSectionScore;

  // Rank sections: weakest first (flagged-difficult sections get a penalty).
  const ranked = [...estimates].sort((a, b) => {
    const aPenalty = difficultSections.includes(a.section) ? -0.5 : 0;
    const bPenalty = difficultSections.includes(b.section) ? -0.5 : 0;
    return a.estimated + aPenalty - (b.estimated + bPenalty);
  });

  const out: RecommendationDto[] = [];
  const seen = new Set<string>();
  const pushRefs = (section: SectionKey, refs: BridgeRef[], reason: string) => {
    for (const ref of refs) {
      const key = `${section}:${ref.href}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({
        title: ref.title,
        reason,
        href: ref.href,
        source: ref.source,
        section,
        minutes: ref.minutes,
      });
    }
  };

  for (const entry of ranked) {
    const tags = weaknessTags[entry.section] ?? [];
    const belowTarget = entry.estimated < maxScore * 0.75;
    if (tags.length === 0 && !difficultSections.includes(entry.section) && !belowTarget) continue;

    const reasonBase = difficultSections.includes(entry.section)
      ? "You flagged this section as difficult"
      : `Estimated ${entry.estimated.toFixed(1)} on the ${spec.scoringModel.kind === "IELTS_BAND" ? "band" : "band"} scale`;

    for (const rule of BRIDGE_RULES) {
      if (rule.section !== "any" && rule.section !== entry.section) continue;
      const matched = rule.tags.filter((tag) => tags.includes(tag));
      if (matched.length === 0) continue;
      pushRefs(entry.section, rule.refs, `${reasonBase} — focus: ${matched.join(", ")}`);
    }

    // Generic fallback when a section is weak without fine-grained tags.
    if (out.filter((r) => r.section === entry.section).length === 0 && (belowTarget || difficultSections.includes(entry.section))) {
      const generic = BRIDGE_RULES.find((rule) => rule.section === entry.section);
      if (generic) pushRefs(entry.section, generic.refs, `${reasonBase} — general ${entry.section} support`);
    }
  }

  // One exam-technique drill, always relevant while preparing.
  const drill = EXAM_DRILLS[spec.examKey];
  if (drill) {
    out.push({
      title: drill.title,
      reason: "Exam-format technique practice",
      href: drill.href,
      source: drill.source,
      section: "reading",
      minutes: drill.minutes,
    });
  }

  return out.slice(0, limit);
}

/** Extract weakness tags from the latest attempt's question results. */
export function weaknessTagsFromAttempt(
  questionResults: Array<{ section: SectionKey; correct: boolean | null; skillGaps: string[] }>,
): Partial<Record<SectionKey, string[]>> {
  const tags: Partial<Record<SectionKey, string[]>> = {};
  for (const result of questionResults) {
    // Collect gaps for wrong answers AND unscored constructed responses
    // (correct === null) — both indicate where the learner should focus.
    if (result.correct !== true && result.skillGaps.length > 0) {
      const current = tags[result.section] ?? [];
      tags[result.section] = [...new Set([...current, ...result.skillGaps])];
    }
  }
  return tags;
}
