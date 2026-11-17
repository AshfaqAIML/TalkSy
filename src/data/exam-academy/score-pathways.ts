/**
 * Exam Academy blueprint — PART D: score target pathways.
 *
 * IELTS targets: Band 5.0 → 8.5+ with the official raw-score anchors
 * published at ielts.org (retrieved 2026-11-14) and the official rounding
 * rule (overall = mean of the four section bands; .25 rounds up to .5, .75
 * rounds up to the next whole band).
 *
 * TOEFL targets: Bands 3.0 → 6.0 on the 1–6 scale with the ETS-published
 * concordance to the retired 0–120 scale (dual-reported during the
 * 2026–2028 transition) and the official rounding rule (overall = mean of
 * the four section bands rounded to the nearest half band; ETS example:
 * 5.125 → 5.0; a mean of 5.25 reports as 5.5).
 *
 * Honesty rules (non-negotiable):
 *   - No score is guaranteed. Study-hour figures are TalkSy planning
 *     heuristics, not official claims; individual rates vary widely.
 *   - Bands below the listed TOEFL targets (1.0–2.5) are below typical
 *     academic requirements; those learners bridge through the core English
 *     programme before TOEFL-specific preparation.
 *   - Every worked section combination below is arithmetically exact under
 *     the official rounding rules.
 */

export const SCORE_DISCLAIMER =
  "Score targets describe what to aim at and how to sequence preparation — they are not predictions and never guarantees. Estimated study hours are TalkSy planning heuristics based on guided-study experience (most learners need 60–150 focused hours per half band once within one band of target, and rates vary widely with intensity, input and starting level). Official anchors and concordances are cited per row; everything else is planning guidance.";

// ---------------------------------------------------------------------------
// IELTS — Band 5.0 → 8.5+
// ---------------------------------------------------------------------------

export type IeltsScoreTarget = {
  band: string;
  label: string;
  cefr: string;
  typicalRequirement: string;
  entryProfile: string;
  /** Official raw-score anchors out of 40 (ielts.org, retrieved 2026-11-14). */
  rawAnchors: string;
  /** A worked section combination that produces this overall band exactly. */
  sectionStrategy: string;
  emphasisModules: string[];
  ladderLessons: string[];
  practiceVolume: string;
  estimatedHours: string;
};

export const IELTS_SCORE_TARGETS: IeltsScoreTarget[] = [
  {
    band: "5.0",
    label: "Modest user",
    cefr: "B1",
    typicalRequirement: "Foundation and pre-sessional programmes; some work and training routes.",
    entryProfile: "A2+/B1−",
    rawAnchors: "Listening 16/40 · Academic Reading 15/40 · GT Reading 23/40 (official anchors for Band 5; GT needs more raw marks than Academic)",
    sectionStrategy: "Four 5.0 sections → mean 5.0 exactly, or carry with a stronger skill: L6.0 R5.0 W4.5 S5.0 → mean 5.0. Writing is usually the drag at this level — protect it with the letter/report minimums, not perfection.",
    emphasisModules: ["I-M1", "I-M2", "IA-M3", "IG-M3", "I-M9"],
    ladderLessons: ["ielts-band-4-to-5"],
    practiceVolume: "One untimed baseline full mock; a section mock every 2–3 weeks; one timed full mock before test day.",
    estimatedHours: "80–150 guided-study hours from A2+/B1−",
  },
  {
    band: "5.5",
    label: "Modest-plus user",
    cefr: "B1+",
    typicalRequirement: "Foundation years; some conditional offers with English support.",
    entryProfile: "B1",
    rawAnchors: "Between the Band 5 and Band 6 anchors (Listening 16–22/40 · Academic Reading 15–22/40 · GT Reading 23–29/40)",
    sectionStrategy: "L6.0 R5.5 W5.0 S5.5 → mean 5.5 exactly. A 0.5 carry from Listening or Reading offsets the writing drag most candidates have here.",
    emphasisModules: ["I-M2", "IA-M3", "IG-M3", "IA-M5", "IG-M5", "I-M9"],
    ladderLessons: ["ielts-band-5-to-6"],
    practiceVolume: "Section mocks fortnightly; two timed full mocks before test day.",
    estimatedHours: "100–180 guided-study hours from B1",
  },
  {
    band: "6.0",
    label: "Competent user",
    cefr: "B2−",
    typicalRequirement: "Common undergraduate minimum; many nursing and training programmes.",
    entryProfile: "B1+",
    rawAnchors: "Listening 23/40 · Academic Reading 23/40 · GT Reading 30/40 (official anchors for Band 6)",
    sectionStrategy: "Four 6.0 sections → mean 6.0 exactly, or L6.5 R6.0 W5.5 S6.0 → mean 6.0. The GT raw anchor is the big honest note: GT Reading needs 30/40 where Academic needs 23/40.",
    emphasisModules: ["I-M2", "IA-M3", "IG-M3", "IA-M5", "IG-M5", "I-M9"],
    ladderLessons: ["ielts-band-5-to-6"],
    practiceVolume: "Section mocks fortnightly; two or three timed full mocks with five-step reviews.",
    estimatedHours: "120–220 guided-study hours from B1+",
  },
  {
    band: "6.5",
    label: "Competent-plus user",
    cefr: "B2",
    typicalRequirement: "The most common postgraduate minimum across universities.",
    entryProfile: "B1+/B2",
    rawAnchors: "Listening ≈ 26–29/40 · Academic Reading ≈ 26–29/40 · GT Reading ≈ 31–34/40 (between the official Band 6 and Band 7 anchors)",
    sectionStrategy: "L6.5 R6.5 W6.0 S6.0 → mean 6.25 → rounds UP to 6.5 (the .25 rule working for you). Writing at 6.0 is the realistic centre of this target; carry it with Listening/Reading at 6.5+.",
    emphasisModules: ["IA-M4", "IA-M5", "IG-M4", "IG-M5", "I-M8", "I-M9"],
    ladderLessons: ["ielts-band-5-to-6", "ielts-band-6-to-7"],
    practiceVolume: "Monthly timed full mocks plus targeted section mocks; error-log discipline between sittings.",
    estimatedHours: "150–260 guided-study hours from B1+/B2",
  },
  {
    band: "7.0",
    label: "Good user",
    cefr: "B2+/C1−",
    typicalRequirement: "Competitive programmes; healthcare regulators in the UK commonly require 7.0 overall with component floors.",
    entryProfile: "B2",
    rawAnchors: "Listening 30/40 · Academic Reading 30/40 · GT Reading 35/40 (official anchors for Band 7)",
    sectionStrategy: "Four 7.0 sections → mean 7.0 exactly, or L7.5 R7.0 W6.5 S7.0 → mean 7.0. Component floors matter as much as the overall here — check the regulator's per-section minimum before planning.",
    emphasisModules: ["I-M9", "IA-M5", "I-M8", "IA-M3", "I-M2"],
    ladderLessons: ["ielts-band-6-to-7", "ielts-band-7-to-8"],
    practiceVolume: "Three or more timed full mocks; five-step review after every sitting; drill sessions on the previous mock's error taxonomy.",
    estimatedHours: "200–320 guided-study hours from B2",
  },
  {
    band: "7.5",
    label: "Good-plus user",
    cefr: "C1",
    typicalRequirement: "Elite programmes; some medical and legal licensing routes (7.5 overall with 7.0 components is a common pattern).",
    entryProfile: "B2+/C1",
    rawAnchors: "Listening ≈ 31–34/40 · Academic Reading ≈ 31–34/40 · GT Reading ≈ 36–38/40 (between the official Band 7 and Band 8 anchors)",
    sectionStrategy: "L8.0 R7.5 W7.0 S7.5 → mean 7.5 exactly. At this level the plan inverts: near-zero objective error (Listening/Reading) funds the writing and speaking depth.",
    emphasisModules: ["I-M9", "IA-M4", "IA-M5", "I-M2", "IA-M3"],
    ladderLessons: ["ielts-band-7-to-8"],
    practiceVolume: "Monthly full mocks; section mocks on demand; precision drills on the two carrying sections.",
    estimatedHours: "220–360 guided-study hours from B2+/C1",
  },
  {
    band: "8.0",
    label: "Very good user",
    cefr: "C1+",
    typicalRequirement: "Selective scholarships, some linguistic and professional registrations.",
    entryProfile: "C1",
    rawAnchors: "Listening 35/40 · Academic Reading 35/40 · GT Reading: Band 8 anchor not published (expect ≈38–39/40 in practice)",
    sectionStrategy: "L8.5 R8.0 W7.5 S8.0 → mean 8.0 exactly. Consistency is the skill: no section below 7.5, error-free stretches in writing and speaking.",
    emphasisModules: ["I-M9", "I-M10", "IA-M5", "I-M8"],
    ladderLessons: ["ielts-band-7-to-8", "ielts-band-8-to-9"],
    practiceVolume: "Regular full mocks with examiner-style reviews; style-level revision rather than technique acquisition.",
    estimatedHours: "250–400 guided-study hours from C1",
  },
  {
    band: "8.5+",
    label: "Expert-track user",
    cefr: "C1+/C2",
    typicalRequirement: "Near-expert requirements: interpreting, lecturing, a few fellowship and specialist routes.",
    entryProfile: "C1+/C2",
    rawAnchors: "Listening ≈ 36–38/40 · Academic Reading ≈ 36–38/40 (38+/40 in practice for the top bands); GT Reading unpublished at this level",
    sectionStrategy: "L9.0 R8.5 W8.0 S8.5 → mean 8.5 exactly. Preparation is temperament and error-hunting, not new language: the 8→9 lesson and mock-cycle analysis carry it.",
    emphasisModules: ["I-M9", "I-M10"],
    ladderLessons: ["ielts-band-8-to-9"],
    practiceVolume: "Full mocks at exam cadence with forensic post-mock reviews; error budget near zero on objective sections.",
    estimatedHours: "300–450 guided-study hours from C1+/C2",
  },
];

// ---------------------------------------------------------------------------
// TOEFL iBT — Bands 3.0 → 6.0 on the 1–6 scale
// ---------------------------------------------------------------------------

export type ToeflScoreTarget = {
  band: string;
  cefr: string;
  /** ETS-published concordance to the retired 0–120 total (dual-reported 2026–2028). */
  legacyTotal: string;
  typicalRequirement: string;
  entryProfile: string;
  sectionStrategy: string;
  emphasisModules: string[];
  practiceVolume: string;
  estimatedHours: string;
};

/** Bands 1.0–2.5 sit below typical academic requirements — see the note above. */
export const TOEFL_BELOW_TARGET_NOTE =
  "Bands 1.0–2.5 (A1–A2) are below the level TOEFL-specific preparation rewards: these learners follow the core English programme (Pre-A1→B1) first and enter this academy at B1. The ETS concordance for the full scale is reproduced in CURRICULUM_BLUEPRINT.md for reference.";

export const TOEFL_SCORE_TARGETS: ToeflScoreTarget[] = [
  {
    band: "3.0",
    cefr: "B1",
    legacyTotal: "44–57 (ETS concordance)",
    typicalRequirement: "Pathway and foundation programmes; some community colleges.",
    entryProfile: "A2+/B1−",
    sectionStrategy: "R3.5 L3.0 S3.0 W3.0 → mean 3.125 → 3.0. Reading carries slightly at this level because Complete-the-Words rewards vocabulary built in the core programme.",
    emphasisModules: ["T-M1", "T-M2", "T-M3", "T-M6"],
    practiceVolume: "Baseline sample mock; task drills per item type; one section mock per section.",
    estimatedHours: "80–150 guided-study hours from A2+/B1−",
  },
  {
    band: "3.5",
    cefr: "B1+",
    legacyTotal: "58–71 (ETS concordance)",
    typicalRequirement: "Conditional admissions with English support; community colleges.",
    entryProfile: "B1",
    sectionStrategy: "R4.0 L3.5 S3.5 W3.0 → mean 3.5 exactly. Interview fluency (short, complete answers) is the cheapest gain here.",
    emphasisModules: ["T-M2", "T-M3", "T-M5", "T-M6"],
    practiceVolume: "Section mocks for Reading and Listening; Listen-and-Repeat window drills; fortnightly task sets.",
    estimatedHours: "100–180 guided-study hours from B1",
  },
  {
    band: "4.0",
    cefr: "B2",
    legacyTotal: "72–85 (ETS concordance)",
    typicalRequirement: "Most undergraduate programmes.",
    entryProfile: "B1+",
    sectionStrategy: "R4.5 L4.0 S4.0 W3.5 → mean 4.0 exactly. Build a working note system before speed: Listening answers live in notes at this band.",
    emphasisModules: ["T-M2", "T-M3", "T-M4", "T-M5"],
    practiceVolume: "Section tests at official timing; one full timed mock mid-preparation and one before test day.",
    estimatedHours: "120–220 guided-study hours from B1+",
  },
  {
    band: "4.5",
    cefr: "B2+",
    legacyTotal: "86–94 (ETS concordance)",
    typicalRequirement: "Most graduate programmes.",
    entryProfile: "B2",
    sectionStrategy: "R4.5 L4.5 S4.5 W4.5 → mean 4.5 exactly, or R5.0 L4.5 S4.5 W4.0 → mean 4.5. Email tone and discussion-post support are the usual separators at this band.",
    emphasisModules: ["T-M4", "T-M5", "T-M6", "T-M7"],
    practiceVolume: "Monthly full mocks; adaptive practice simulations; rubric-evaluated email and discussion tasks.",
    estimatedHours: "150–260 guided-study hours from B2",
  },
  {
    band: "5.0",
    cefr: "C1−",
    legacyTotal: "95–106 (ETS concordance)",
    typicalRequirement: "Competitive graduate programmes.",
    entryProfile: "B2+",
    sectionStrategy: "R5.0 L5.0 S5.0 W4.5 → mean 4.875 → 5.0 (the same rounding family as ETS's own 5.125 → 5.0 example, one step up). Writing is the typical drag; discussion-task depth funds it.",
    emphasisModules: ["T-M4", "T-M5", "T-M6", "T-M7"],
    practiceVolume: "Monthly full mocks with performance reports; adaptive simulations at exam cadence.",
    estimatedHours: "180–300 guided-study hours from B2+",
  },
  {
    band: "5.5",
    cefr: "C1",
    legacyTotal: "107–113 (ETS concordance)",
    typicalRequirement: "Top-20 universities and selective programmes.",
    entryProfile: "B2+/C1",
    sectionStrategy: "R5.5 L5.5 S5.0 W5.5 → mean 5.375 → 5.5. Precision everywhere: reconstruction accuracy near-perfect, interview answers complete, zero careless losses in the adaptive sections.",
    emphasisModules: ["T-M4", "T-M5", "T-M6", "T-M7"],
    practiceVolume: "Regular full-length mocks; per-item-type error budgets; rubric reviews with the evaluation service.",
    estimatedHours: "220–360 guided-study hours from B2+/C1",
  },
  {
    band: "6.0",
    cefr: "C2",
    legacyTotal: "114–120 (ETS concordance)",
    typicalRequirement: "Elite and near-native requirements.",
    entryProfile: "C1+",
    sectionStrategy: "R6.0 L6.0 S6.0 W6.0 → mean 6.0 exactly, or with one 5.5: 6.0/6.0/5.5/6.0 → mean 5.875 → 6.0. At the ceiling the error budget is the whole plan.",
    emphasisModules: ["T-M6", "T-M7", "T-M4", "T-M5"],
    practiceVolume: "Full mocks at exam cadence with forensic report reviews; error budget near zero on objective items.",
    estimatedHours: "260–420 guided-study hours from C1+",
  },
];

/** The ETS-published full concordance (band → retired 0–120 total and 0–30 sections), reproduced for reference. */
export const TOEFL_ETS_CONCORDANCE = [
  { band: "6.0", cefr: "C2", total: "114–120", reading: "29–30", listening: "28–30", speaking: "28–30", writing: "29–30" },
  { band: "5.5", cefr: "C1", total: "107–113", reading: "27–28", listening: "26–27", speaking: "27", writing: "27–28" },
  { band: "5.0", cefr: "C1", total: "95–106", reading: "24–26", listening: "22–25", speaking: "25–26", writing: "24–26" },
  { band: "4.5", cefr: "B2", total: "86–94", reading: "22–23", listening: "20–21", speaking: "23–24", writing: "21–23" },
  { band: "4.0", cefr: "B2", total: "72–85", reading: "18–21", listening: "17–19", speaking: "20–22", writing: "17–20" },
  { band: "3.5", cefr: "B1", total: "58–71", reading: "12–17", listening: "13–16", speaking: "18–19", writing: "15–16" },
  { band: "3.0", cefr: "B1", total: "44–57", reading: "6–11", listening: "9–12", speaking: "16–17", writing: "13–14" },
  { band: "2.5", cefr: "A2", total: "34–43", reading: "4–5", listening: "6–8", speaking: "13–15", writing: "11–12" },
  { band: "2.0", cefr: "A2", total: "24–33", reading: "3", listening: "4–5", speaking: "10–12", writing: "7–10" },
  { band: "1.5", cefr: "A1", total: "12–23", reading: "2", listening: "2–3", speaking: "5–9", writing: "3–6" },
  { band: "1.0", cefr: "A1", total: "0–11", reading: "0–1", listening: "0–1", speaking: "0–4", writing: "0–2" },
] as const;
