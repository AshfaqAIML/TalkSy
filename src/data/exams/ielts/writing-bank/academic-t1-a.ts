/**
 * Academic Task 1 bank — file A (PROMPT 46, Part B/E).
 *
 * The first five Academic Task 1 tasks: the bar-chart exemplar, a line
 * graph, a pie pair, a table and a second bar chart. Every task is an
 * original assignment with full model answer, planning notes, the
 * eight-element analysis, a topic vocabulary bank and level samples
 * whose band comments are educational estimates, never official scores.
 */

import type { WritingBankTask } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. Bar chart — city cycling (the exemplar task)
// ---------------------------------------------------------------------------

export const at1BarCycling: WritingBankTask = {
  slug: "ielts-wb-at1-bar-cycling",
  title: "Bar chart — commuters cycling in five cities",
  channel: "academic",
  taskType: "task-1",
  family: "bar",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The bar chart below shows the percentage of commuters who travelled to work by bicycle in five European cities in 2009 and 2019.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "bar",
    title: "Commuters travelling to work by bicycle, five European cities",
    unit: "%",
    xLabel: "City",
    yLabel: "Commuters cycling to work (%)",
    categories: ["Amsterdam", "Copenhagen", "Berlin", "Lyon", "Manchester"],
    series: [
      { name: "2009", values: [32, 26, 12, 8, 4] },
      { name: "2019", values: [38, 31, 18, 14, 9] },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: cycling rose in every city, and the gap between leaders and the rest narrowed.",
      keywords: ["overall", "in general", "each", "all five", "every city", "rose", "increase", "grew", "upward"],
    },
    {
      key: "leaders",
      description: "Identifies Amsterdam and Copenhagen as the leading cities throughout.",
      keywords: ["amsterdam", "copenhagen", "highest", "led", "leader", "ahead", "top"],
    },
    {
      key: "growth",
      description: "Compares the two years with at least two accurate figures or percentage-point differences.",
      keywords: ["2009", "2019", "from", "to", "percentage", "point", "figure", "per cent", "%"],
    },
    {
      key: "fastest",
      description: "Notes which cities grew fastest in relative terms (Lyon and Manchester nearly doubled).",
      keywords: ["lyon", "manchester", "doubled", "fastest", "sharpest", "nearly", "almost", "relative", "proportion"],
    },
    {
      key: "report-register",
      description: "Reports rather than explains: no opinions and no speculation about causes.",
      keywords: ["while", "whereas", "compared", "by contrast", "respectively", "twice"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame (30 seconds)",
      notes: [
        "Subject: percentage of commuters cycling to work — a share, not a count.",
        "Time frame: two snapshots, 2009 and 2019 — past tense throughout.",
        "Units: per cent; differences are percentage points, never 'per cent more'.",
        "Cities: five, ordered on the chart from highest to lowest in 2019.",
      ],
    },
    {
      heading: "Step 2 — Find the two headline features (1 minute)",
      notes: [
        "Feature 1: every city rose — a uniform upward picture.",
        "Feature 2: the field split in two: Amsterdam and Copenhagen far ahead (32–38%), the other three in single digits or low teens.",
        "Supporting detail: the two low cities roughly doubled (4→9 and 8→14) — fastest relative growth.",
      ],
    },
    {
      heading: "Step 3 — Plan the four paragraphs (1 minute)",
      notes: [
        "Introduction: one sentence, paraphrase the rubric ('the proportion of workers commuting by bicycle').",
        "Overview: one sentence — increases everywhere; a stable two-group order.",
        "Body 1: the leaders, both years, with figures.",
        "Body 2: the chasing group, with the doubling detail and the narrowing-gap observation.",
      ],
    },
    {
      heading: "Step 4 — Budget the figures (1 minute)",
      notes: [
        "Quote 4–6 figures, each doing comparison work — never list all ten.",
        "Convert two raw gaps into percentage-point differences to show precision.",
        "Reserve 2 minutes to check tense (past) and 'percentage points' wording.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The chart compares the proportion of commuters who cycled to work in five European cities in 2009 with the equivalent figure for 2019.",
      "Overall, cycling to work became more common in every city over the decade, and the ranking of the five changed very little: Amsterdam and Copenhagen remained well ahead of the other three throughout.",
      "In 2009 roughly a third of Amsterdam's commuters already cycled, and this share climbed a further six percentage points to 38% by 2019. Copenhagen followed a similar path, rising from 26% to 31%, so both cities stayed far above the rest of the field.",
      "The remaining three cities began the period far lower, yet they grew fastest in relative terms. Berlin's share rose from 12% to 18%, Lyon's almost doubled from 8% to 14%, and Manchester's more than doubled, albeit from the lowest base of 4% to 9%. As a result, the gap between the two groups narrowed slightly, although the leaders' advantage remained substantial.",
    ],
    wordCount: 161,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric without copying it: 'percentage of commuters' becomes 'proportion of commuters', and 'travelled to work by bicycle' becomes 'cycled to work'. No data appears here — the introduction only frames the report.",
      },
      {
        role: "Overview (1 sentence)",
        analysis:
          "Carries the two headline features — universal growth and a stable two-group ranking — and no figures. This is the sentence that protects Task Achievement: a reader who sees only this paragraph still knows the chart's story.",
      },
      {
        role: "Body 1 — the leaders",
        analysis:
          "Groups the two leading cities and gives each a paired figure (32→38, 26→31). The percentage-point conversion ('a further six percentage points') shows precision, and the closing clause interprets the group ('far above the rest of the field') rather than repeating numbers.",
      },
      {
        role: "Body 2 — the chasing group",
        analysis:
          "Handles the three lower cities by growth shape rather than one by one: 'almost doubled', 'more than doubled', 'albeit from the lowest base'. The final sentence adds the comparison the rubric asks for — the narrowing gap — closing the report with analysis, not a new list.",
      },
    ],
    vocabulary: [
      { term: "the proportion of commuters", note: "Precise paraphrase of 'percentage of commuters' — proportion signals a share of a whole." },
      { term: "climbed a further six percentage points", note: "Percentage points, not per cent: the accurate unit for a change between two shares." },
      { term: "followed a similar path", note: "Comparison language that links the second city to the first without repeating the verb 'rose'." },
      { term: "far above the rest of the field", note: "Interpretive group label — 'the field' frames the five cities as a race without adding opinion." },
      { term: "almost doubled / more than doubled", note: "Proportional wording that captures relative growth precisely, including the hedge 'almost'." },
      { term: "albeit from the lowest base", note: "Concessive precision: acknowledges the doubling while keeping the absolute level honest." },
      { term: "the gap between the two groups narrowed", note: "The comparison the rubric demands, expressed as a trend between groups, not a list." },
    ],
    grammar: [
      {
        feature: "Past simple for both snapshots",
        example: "this share climbed a further six percentage points to 38%",
        note: "Both years lie in the past, so every reporting verb is past simple; a classic Task 1 tense decision made visible.",
      },
      {
        feature: "Comparative structures",
        example: "they grew fastest in relative terms",
        note: "Superlatives and comparatives do the comparison work the rubric asks for.",
      },
      {
        feature: "Concessive clause with 'although'",
        example: "although the leaders' advantage remained substantial",
        note: "A subordinate clause that adds the final contrast without starting a new sentence — range plus cohesion in one move.",
      },
      {
        feature: "Passive-shaped reporting",
        example: "cycling to work became more common",
        note: "A state-change verb ('became') reports the trend without inventing an agent — no causes are speculated about.",
      },
    ],
    coherence:
      "The report runs frame → headline → group one → group two, which is the order a reader needs: each paragraph opens by naming its group, and the closing sentence of each body paragraph interprets the figures just given ('so both cities stayed far above…', 'As a result, the gap… narrowed'). Linking is carried by sentence-initial adverbials ('Overall', 'In 2009', 'As a result') and by reference ('this share', 'the remaining three', 'the two groups') rather than by heavy connector chains.",
    alternativeExpressions: [
      { insteadOf: "became more common", use: "gained ground / grew in popularity" },
      { insteadOf: "stayed far above", use: "maintained a clear lead over" },
      { insteadOf: "rose from X to Y", use: "increased from X to Y / advanced from X to Y" },
      { insteadOf: "almost doubled", use: "nearly twofold increase / close to doubled" },
      { insteadOf: "the lowest base", use: "the smallest starting share" },
      { insteadOf: "remained substantial", use: "was still considerable" },
    ],
    commonMistakes: [
      {
        wrong: "Amsterdam had 6% more cyclists in 2019.",
        right: "Amsterdam's share rose six percentage points, from 32% to 38%.",
        reason: "A change between two percentages is measured in percentage points; '6% more' misstates the maths and can read as relative growth.",
      },
      {
        wrong: "Cycling increased because people care about the environment.",
        right: "The share of cyclists increased in every city.",
        reason: "Task 1 reports the data; explaining causes is speculation the chart does not show and costs Task Achievement marks.",
      },
      {
        wrong: "The chart shows 32, 26, 12, 8, 4 and 38, 31, 18, 14, 9 per cent.",
        right: "Quote at most 5–6 figures, each supporting a comparison.",
        reason: "Listing all ten values is mechanical data dumping — the rubric asks for selection and comparison.",
      },
      {
        wrong: "Manchester doubled, and Copenhagen also rose, and Lyon grew too.",
        right: "Manchester's share more than doubled, while Lyon's almost doubled; Copenhagen rose five points.",
        reason: "Chained 'and' sentences flatten the writing into a list; 'while' and semicolons turn the same facts into comparisons.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The bar chart gives information about the percentage of people who use bicycle to go to work in five cities in Europe in 2009 and 2019.",
        "Overall, the number of people cycling to work increased in all cities during the period. Amsterdam and Copenhagen was the highest in both years.",
        "In Amsterdam, the percentage of commuters cycling was 32% in 2009 and it went up to 38% in 2019. Copenhagen also increased, from 26% to 31%. These two cities was much more higher than the other cities.",
        "The other cities have smaller numbers. Berlin grow from 12% to 18%, Lyon from 8% to 14% and Manchester from 4% to 9%. Manchester doubled but it is still the lowest city.",
      ],
      wordCount: 119,
      justification: [
        { criterion: "Task Achievement", note: "Covers the main features (universal rise, two leaders) but at 119 words sits well under the 150 floor — under-length responses are penalised — and the overview, while present, is thin." },
        { criterion: "Coherence and Cohesion", note: "A clear four-paragraph shape and an overview, but linking relies on repeated 'also/increased' and paragraph 4 opens with a vague group label ('The other cities have smaller numbers')." },
        { criterion: "Lexical Resource", note: "Adequate topic vocabulary ('commuters', 'percentage') but repetitive verbs ('increased' ×3, 'went up'), and 'use bicycle' misses the article — word-formation slips typical of Band 6." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple and comparative sentences mostly controlled, but agreement errors recur ('was the highest', 'was much more higher', 'have smaller numbers') and 'Berlin grow' drops the past -ed — a mix of error-free and faulty lines that matches the Band 6 descriptor's 'makes some errors'." },
      ],
    },
    {
      bandEstimate: "Band 7.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The chart illustrates how the share of commuters travelling to work by bicycle changed in five European cities between 2009 and 2019.",
        "Overall, cycling became a more popular commuting choice in all five cities, and the same two cities led the ranking at both the start and the end of the period.",
        "Amsterdam and Copenhagen dominated the chart. In the Dutch capital, the figure rose from 32% to 38%, while Copenhagen recorded an increase from 26% to 31%, leaving both cities well ahead of the others.",
        "Among the remaining three, growth was proportionally stronger even though the levels stayed low. Berlin gained six percentage points, reaching 18%, and Lyon's share climbed from 8% to 14%. Manchester, despite starting at just 4%, more than doubled its share to 9%, although it remained the lowest of the five.",
      ],
      wordCount: 136,
      justification: [
        { criterion: "Task Achievement", note: "Covers the key features and extends them with point differences; at 136 words it sits below the 150 floor — a mechanical penalty that holds this criterion at 7.0 no matter how well the data is chosen." },
        { criterion: "Coherence and Cohesion", note: "Clear progression with a range of linkers ('while', 'even though', 'although') used to carry meaning rather than decorate; reference ('the Dutch capital', 'the remaining three') avoids repetition." },
        { criterion: "Lexical Resource", note: "Good range — 'dominated', 'proportionally stronger', 'gained six percentage points' — with occasional less-precise moments ('more popular commuting choice') rather than errors." },
        { criterion: "Grammatical Range and Accuracy", note: "A variety of complex forms with few errors: relative-verb agreement controlled, tense consistent; 'despite starting at' shows grammatical control of a gerund after a preposition." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "commuter", partOfSpeech: "noun", meaning: "A person who travels regularly between home and work." },
    { word: "proportion", partOfSpeech: "noun", meaning: "A share of a whole, expressed as a fraction or percentage." },
    { word: "percentage point", partOfSpeech: "noun", meaning: "The unit for the difference between two percentages (32% to 38% = 6 points)." },
    { word: "to double", partOfSpeech: "verb", meaning: "To become twice as large; 'more than doubled' exceeds twice." },
    { word: "base", partOfSpeech: "noun", meaning: "The starting value a change is measured from — 'from a low base'." },
    { word: "to narrow", partOfSpeech: "verb", meaning: "To become smaller in width or difference — used for gaps." },
    { word: "albeit", partOfSpeech: "conjunction", meaning: "Although; used to add a contrasting qualification inside a sentence." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Line graph — household energy use
// ---------------------------------------------------------------------------

export const at1LineEnergy: WritingBankTask = {
  slug: "ielts-wb-at1-line-energy",
  title: "Line graph — household energy use through the year",
  channel: "academic",
  taskType: "task-1",
  family: "line",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The line graph below shows average daily electricity use per household in a northern country, in kilowatt-hours, by month in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "line",
    title: "Average daily household electricity use, 2024",
    unit: "kWh",
    xLabel: "Month",
    yLabel: "Electricity use per household (kWh/day)",
    xPoints: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    series: [
      { name: "All households (average)", values: [22, 21, 18, 15, 12, 11, 12, 13, 15, 18, 20, 23] },
      { name: "Households with electric heating", values: [31, 29, 24, 18, 13, 11, 12, 13, 17, 23, 27, 32] },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States the seasonal shape: consumption peaks in winter, falls to a summer trough, and rebounds.",
      keywords: ["overall", "winter", "summer", "peak", "lowest", "trough", "seasonal", "highest"],
    },
    {
      key: "heating-gap",
      description: "Identifies that electric-heating households drive the winter gap (much higher in cold months, converging in summer).",
      keywords: ["electric heating", "gap", "difference", "higher", "converge", "similar", "close"],
    },
    {
      key: "figures",
      description: "Quotes at least three accurate data points, including the July convergence (both ~11–12).",
      keywords: ["january", "december", "july", "june", "11", "12", "31", "32", "kwh"],
    },
    {
      key: "months-movement",
      description: "Describes the direction of movement across months (fall from Jan to June, rise after July).",
      keywords: ["fell", "declined", "rose", "recovered", "from", "to", "until", "by"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "One year, monthly points: describe movement across time, not just endpoints.",
        "Two lines: the average home and the electric-heating home — the comparison IS the second key feature.",
        "Units: kilowatt-hours per day; both lines are households, so compare levels and gaps.",
      ],
    },
    {
      heading: "Step 2 — Headline features",
      notes: [
        "Both lines share a U-shape: high January, trough in June–July, rebound to a December peak.",
        "The gap between the lines is wide in winter (31 vs 22 in January) and closes to almost nothing in summer (11 vs 12).",
      ],
    },
    {
      heading: "Step 3 — Paragraph plan",
      notes: [
        "Introduction: paraphrase — 'how much electricity the average household used each day'.",
        "Overview: seasonal U-shape + the winter gap that vanishes in summer.",
        "Body 1: the average line's journey with 3–4 anchors (22 → 11 → 23).",
        "Body 2: the heating line, the January/December extremes, and the July convergence.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The graph shows how much electricity an average household in a northern country used each day in 2024, month by month, and compares this with households equipped with electric heating.",
      "Overall, demand followed a pronounced seasonal pattern, peaking in midwinter and reaching its low point in early summer, before recovering towards the end of the year. Homes with electric heating consumed far more than the average in cold months, but the two groups converged almost completely in summer.",
      "For the average household, consumption began the year at 22 kWh per day and then declined steadily as the weather warmed, reaching its minimum of 11 kWh in June. It then turned upward in July and rose more steeply through the autumn, ending December at 23 kWh, the highest figure of the year.",
      "The pattern for electric-heating homes was the same shape but far more extreme. Their usage started at 31 kWh in January and finished at 32 kWh in December — roughly 40% above the average home at both ends of the year — yet by July the two groups were nearly indistinguishable, at 12 and 13 kWh respectively. This suggests that heating, not lighting or appliances, drives the seasonal divide.",
    ],
    wordCount: 197,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Paraphrases the rubric ('how much electricity … used each day') and announces the comparison so the reader expects two lines.",
      },
      {
        role: "Overview",
        analysis:
          "Two headline claims: the U-shaped seasonal pattern and the winter-only divergence between groups. No figures — the overview stays at pattern level, as the descriptor's 'clear overview of main trends' asks.",
      },
      {
        role: "Body 1 — the average line",
        analysis:
          "Three anchors (22, 11, 23) with direction verbs ('declined steadily', 'turned upward', 'rose more steeply'). The paragraph ends by interpreting the December figure as the year's maximum, giving the data a conclusion.",
      },
      {
        role: "Body 2 — the heating line and the gap",
        analysis:
          "Handles the comparison in one flowing paragraph: extremes first (31, 32), then the convergence (12 vs 13), then a proportion conversion ('roughly 40% above'). The final 'This suggests' sentence is borderline analysis — acceptable in one closing sentence, but candidates should note the rubric asks for reporting.",
      },
    ],
    vocabulary: [
      { term: "pronounced seasonal pattern", note: "'Pronounced' intensifies precisely; 'seasonal pattern' names the shape in two words." },
      { term: "reaching its low point", note: "Nominalised trend language; pairs with 'peaking' to vary structure." },
      { term: "converged almost completely", note: "The exact word for two lines meeting: convergence, not crossing." },
      { term: "declined steadily", note: "Trend verb + adverb of manner: the standard precision pair for line graphs." },
      { term: "turned upward", note: "Signals a reversal — useful when a line changes direction at its minimum." },
      { term: "nearly indistinguishable", note: "Handles 'the values were almost the same' without vague 'similar'." },
      { term: "respectively", note: "Pairs two figures with two subjects in one clause without repeating 'and'." },
    ],
    grammar: [
      {
        feature: "Participle clauses",
        example: "reaching its minimum of 11 kWh in June",
        note: "A -ing clause extends a sentence with a second action — compact range that examiners credit at Band 8.",
      },
      {
        feature: "Comparative + quantified margin",
        example: "roughly 40% above the average home",
        note: "Comparisons that carry a measured margin read as precise rather than approximate.",
      },
      {
        feature: "Past simple with time anchors",
        example: "It then turned upward in July and rose more steeply through the autumn",
        note: "Time adverbials sequence the year without needing 'first, second, third' scaffolding.",
      },
    ],
    coherence:
      "The response mirrors the graph's own logic — level, then shape, then group comparison — so each paragraph answers the question the previous one raises. Sentence-initial adverbials ('For the average household', 'Overall', 'yet by July') steer the reader, and the pronoun chain ('the two groups', 'Their usage', 'the year') ties the paragraphs into one report.",
    alternativeExpressions: [
      { insteadOf: "peaking in midwinter", use: "at its highest in the winter months" },
      { insteadOf: "declined steadily", use: "fell consistently / dropped month after month" },
      { insteadOf: "far more extreme", use: "considerably sharper" },
      { insteadOf: "converged almost completely", use: "almost met / narrowed to a single point of difference" },
      { insteadOf: "roughly 40% above", use: "some two-fifths higher than" },
    ],
    commonMistakes: [
      {
        wrong: "The electricity went up and down during the year.",
        right: "Consumption fell from 22 kWh in January to 11 kWh in June before recovering to 23 kWh by December.",
        reason: "'Went up and down' describes every line graph ever made; specific anchors and directions are what earn marks.",
      },
      {
        wrong: "In January it was 31, in February 29, in March 24…",
        right: "Quote three or four anchor points and let direction verbs carry the rest.",
        reason: "Month-by-month listing consumes the word count without showing selection — the rubric's first demand.",
      },
      {
        wrong: "The heating line was more higher in winter.",
        right: "The heating line was markedly higher in winter.",
        reason: "Double comparative ('more higher') is a frequent Band 6 error; intensify with an adverb instead.",
      },
      {
        wrong: "People used more electricity because winter is cold.",
        right: "(Report the data; add at most one measured closing observation.)",
        reason: "Extended cause-analysis drifts into Task 2 territory; Task 1 rewards reporting discipline — one cautious closing sentence maximum.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The line graph shows the electricity use of houses in one year of 2024 in a northern country. There are two lines, one for normal houses and one for houses with electric heating.",
        "Overall, both lines are high in winter and low in summer. The electric heating houses use more electricity than normal houses but only in the cold months.",
        "Normal houses start at 22 kWh in January and go down to 11 kWh in June, the lowest point. After that it increases again until December, when it is 23 kWh.",
        "Electric heating houses have the same shape but bigger. They begin at 31 kWh and end at 32 kWh, and in summer they are almost the same as normal houses. This is because heating needs a lot of power in winter.",
      ],
      wordCount: 133,
      justification: [
        { criterion: "Task Achievement", note: "Selects the main features (seasonal shape, winter-only gap, summer convergence) with anchors; slightly under the 150-word floor, and the final cause sentence is a small drift beyond the data." },
        { criterion: "Coherence and Cohesion", note: "Logical paragraphing and an overview; linkers are functional but narrow ('after that', 'and'), and 'the same shape but bigger' is informal for register." },
        { criterion: "Lexical Resource", note: "Adequate topic words ('lowest point', 'kWh') with repetition of 'houses/normal houses'; 'bigger' where 'more pronounced' would be precise." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences mostly accurate; a tense slip ('it increases again') and article omissions keep range modest rather than faulty." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The graph compares daily electricity consumption in an average household with that of homes fitted with electric heating, across the twelve months of 2024.",
        "Overall, both groups used least electricity in early summer and most in midwinter, with the heating group's consumption markedly higher during cold months but virtually identical in summer.",
        "Average usage began at 22 kWh per day in January and declined each month to a June low of 11 kWh, before climbing back to 23 kWh by December — a near-symmetrical arc across the year.",
        "For homes with electric heating, the same arc was amplified: consumption stood at 31 kWh in January and 32 kWh in December, some 40% above the average, yet in July the two figures differed by barely a single unit. The seasonal gap, in other words, is almost entirely a heating effect.",
      ],
      wordCount: 143,
      justification: [
        { criterion: "Task Achievement", note: "A clear, data-anchored account of both lines and the convergence; at 143 words it sits just under the floor, which holds Task Achievement at 7.5 rather than 8 — length is a mechanical requirement, not a style choice." },
        { criterion: "Coherence and Cohesion", note: "Seamless progression with varied, precise linking ('before climbing back', 'in other words') and a final sentence that interprets rather than repeats." },
        { criterion: "Lexical Resource", note: "Flexible, precise items — 'amplified', 'virtually identical', 'near-symmetrical arc' — with natural collocation and no repetition strain." },
        { criterion: "Grammatical Range and Accuracy", note: "Wide, error-free range: participle clauses, a dash-joined summary clause, quantified comparatives — consistent with the Band 8 descriptor, slightly held back by the length issue above." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "consumption", partOfSpeech: "noun", meaning: "The amount of something used — here, electricity." },
    { word: "trough", partOfSpeech: "noun", meaning: "The low point of a curve, opposite of peak." },
    { word: "to converge", partOfSpeech: "verb", meaning: "To move towards the same value — for two lines meeting." },
    { word: "amplified", partOfSpeech: "adjective/verb", meaning: "Made larger in scale — 'the same pattern, amplified'." },
    { word: "anchor point", partOfSpeech: "noun", meaning: "A specific data value chosen to support a trend claim." },
    { word: "steady decline", partOfSpeech: "phrase", meaning: "A fall that happens consistently, not suddenly." },
    { word: "to rebound", partOfSpeech: "verb", meaning: "To rise again after a fall — 'recovered to 23 kWh'." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Pie pair — household spending
// ---------------------------------------------------------------------------

export const at1PieSpending: WritingBankTask = {
  slug: "ielts-wb-at1-pie-spending",
  title: "Pie charts — how two generations spend their income",
  channel: "academic",
  taskType: "task-1",
  family: "pie",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The pie charts below show how households headed by under-30s and households headed by over-60s in one country divided their monthly income between five spending categories in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "pie",
    title: "Monthly income divided by category, two generations, 2024",
    unit: "%",
    pies: [
      {
        caption: "Households headed by under-30s",
        slices: [
          { label: "Housing", value: 34 },
          { label: "Transport", value: 22 },
          { label: "Food and groceries", value: 18 },
          { label: "Leisure and entertainment", value: 16 },
          { label: "Savings", value: 10 },
        ],
      },
      {
        caption: "Households headed by over-60s",
        slices: [
          { label: "Housing", value: 22 },
          { label: "Transport", value: 12 },
          { label: "Food and groceries", value: 26 },
          { label: "Leisure and entertainment", value: 14 },
          { label: "Savings", value: 26 },
        ],
      },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States the headline contrast: young households spend on housing and getting around; older ones on food and saving.",
      keywords: ["overall", "younger", "older", "priority", "prioritise", "differ", "contrast", "while"],
    },
    {
      key: "housing",
      description: "Compares housing: the largest share for under-30s (34%) versus 22% for over-60s.",
      keywords: ["housing", "34", "22", "largest", "single biggest", "accounted"],
    },
    {
      key: "savings",
      description: "Compares savings: 10% versus 26% — the sharpest difference.",
      keywords: ["saving", "10", "26", "set aside", "reserve", "more than double", "gap"],
    },
    {
      key: "food-transport",
      description: "Contrasts transport (22 vs 12) and food (18 vs 26).",
      keywords: ["transport", "food", "groceries", "22", "12", "18", "26"],
    },
    {
      key: "proportion-language",
      description: "Uses proportion language (shares, accounted for, twice as much) rather than amounts of money.",
      keywords: ["share", "proportion", "accounted for", "compared with", "relative", "twice"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Two pies = two groups compared across the same five categories — organise by category, not by pie.",
        "Shares of income, in per cent; both pies total 100.",
        "No time dimension: present tense ('spend', 'accounts for').",
      ],
    },
    {
      heading: "Step 2 — Headline features",
      notes: [
        "Housing is the biggest single item for the young (34%) but only joint-second for the old (22%).",
        "The two sharpest contrasts: savings (10 vs 26 — more than doubled) and transport (22 vs 12).",
        "Food reverses the transport pattern (18 vs 26); leisure is nearly level (16 vs 14) — a 'no big difference' observation worth one clause.",
      ],
    },
    {
      heading: "Step 3 — Paragraph plan",
      notes: [
        "Introduction: two generations, five categories, shares of income.",
        "Overview: young = housing + mobility; old = food + saving.",
        "Body 1: housing, transport (the young-skewed categories).",
        "Body 2: food, savings, leisure (the old-skewed and the neutral one).",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The charts compare the division of monthly income across five spending categories between households headed by adults under 30 and those headed by adults over 60.",
      "Overall, the two generations assign their money to very different priorities: younger households direct the largest share to housing and transport, whereas older ones devote proportionally more to food and to savings.",
      "Housing is the single largest commitment for the under-30s, absorbing 34% of income, compared with a notably lighter 22% among over-60s. The gap is even wider in transport, which takes 22% of young households' budgets but only 12% of older ones — a category that clearly belongs to commuting life.",
      "The pattern reverses elsewhere. Food and groceries account for 26% of spending in older households, against 18% for the young, and the contrast is sharpest in savings: over-60s set aside 26% of their income, more than double the 10% recorded by the under-30s. Leisure and entertainment is the one category where the generations nearly agree, at 16% and 14% respectively.",
    ],
    wordCount: 167,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis: "Paraphrases the rubric ('division of monthly income') and sets up the two-group comparison in one sentence.",
      },
      {
        role: "Overview",
        analysis: "Names the underlying story — different life stages, different priorities — without a single figure, exactly what the 'clear overview' descriptor rewards.",
      },
      {
        role: "Body 1 — young-skewed categories",
        analysis: "Housing and transport are grouped because they share one story. The em-dash clause ('a category that clearly belongs to commuting life') interprets briefly, then stops.",
      },
      {
        role: "Body 2 — the reversal",
        analysis: "Opens with a reversal signal ('The pattern reverses elsewhere') — the highest-value transition in pie-chart reports — then covers food, savings with a doubling conversion, and closes on the neutral category so all five appear.",
      },
    ],
    vocabulary: [
      { term: "assign their money to very different priorities", note: "Frame-level summary wording that avoids repeating 'spend money on'." },
      { term: "the single largest commitment", note: "'Commitment' elevates 'thing they spend on'; 'single largest' is precise about rank." },
      { term: "absorbing 34%", note: "Varied reporting verb for 'is' — shares can absorb, take, account for, or represent." },
      { term: "set aside", note: "The natural collocation for saving money; pairs with 'recorded by' for variety." },
      { term: "more than double", note: "Proportional comparison that captures 10 vs 26 exactly, with 'more than' doing honest hedging." },
      { term: "the generations nearly agree", note: "A human phrasing for 'the figures are close' — control of register without losing precision." },
    ],
    grammar: [
      {
        feature: "Present simple for timeless shares",
        example: "Housing is the single largest commitment for the under-30s",
        note: "No time frame means present tense throughout — the first tense decision in every pie task.",
      },
      {
        feature: "Comparative ellipsis",
        example: "a notably lighter 22%",
        note: "Adjective + figure inside a noun phrase compresses a whole clause into four words.",
      },
      {
        feature: "Whereas/while contrast clauses",
        example: "whereas older ones devote proportionally more to food",
        note: "Subordination carries the two-group comparison — the grammatical heart of every pie-pair report.",
      },
    ],
    coherence:
      "The report is organised by category story (young-tilted, then reversed), which is the only order that makes two pies comparable. Each body paragraph opens with its group label, figures are always given as pairs in the same order (young, then old), and the final clause resolves the set by noting the one similarity — comparison, not narration, from first sentence to last.",
    alternativeExpressions: [
      { insteadOf: "absorbing 34%", use: "taking up 34% / representing 34%" },
      { insteadOf: "the gap is even wider", use: "the difference is more pronounced" },
      { insteadOf: "set aside", use: "put aside / allocate to savings" },
      { insteadOf: "The pattern reverses elsewhere", use: "The opposite is true of the remaining categories" },
      { insteadOf: "nearly agree", use: "are almost identical / differ by only two points" },
    ],
    commonMistakes: [
      {
        wrong: "Under-30s spent 34% on housing, 22% on transport, 18% on food, 16% on leisure and 10% on savings. Over-60s spent…",
        right: "Group categories by story: housing and transport tilt young; food and savings tilt old.",
        reason: "Reading a pie aloud, slice by slice, produces two lists and zero comparisons — the rubric's last demand ('make comparisons') is simply never met.",
      },
      {
        wrong: "Old people save more money than young people.",
        right: "Over-60s allocate 26% of income to savings, compared with 10% for under-30s.",
        reason: "'More money' is unverifiable — we only know shares. Compare proportions, and never infer who has more income.",
      },
      {
        wrong: "Young people waste their money on transport.",
        right: "Transport takes a larger share of younger households' budgets.",
        reason: "'Waste' is an opinion; Task 1 language stays neutral — 'takes a larger share' reports without judging.",
      },
      {
        wrong: "The percentage of savings was two times more.",
        right: "The savings share was more than double (26% versus 10%).",
        reason: "'Two times more' is ambiguous in English; 'double' with both figures removes all doubt.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The two pie charts show the percentage of money that families spend in five things. One chart is young families under 30 and other is old families over 60.",
        "Overall, young families spend most on housing but old families spend most on food and saving. The both charts have five same categories.",
        "Young families use 34% of income for housing. Old families use only 22% for this. Also transport is 22% for young and 12% for old, so young people need more transport.",
        "For old families food is 26% and saving is also 26%. Young families only save 10%, this is a big difference. Leisure is almost same in both charts, 16% and 14%.",
      ],
      wordCount: 118,
      justification: [
        { criterion: "Task Achievement", note: "The main contrasts are present (housing, savings, food) but the response is well under the 150-word floor, and 'families' mislabels 'households' — features covered, development thin." },
        { criterion: "Coherence and Cohesion", note: "Paragraphing by generation rather than category forces the reader to cross-compare alone; 'Also', 'so' and 'this is' carry linking with little variety." },
        { criterion: "Lexical Resource", note: "Repetitive 'use/spend X% for Y' with an error in collocation ('spend in five things'); 'the both charts' shows word-formation strain." },
        { criterion: "Grammatical Range and Accuracy", note: "Mostly short simple sentences with recurring article and agreement slips ('other is', 'almost same') — the 'limited range, some errors' profile of Band 6." },
      ],
    },
    {
      bandEstimate: "Band 7.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The charts break down monthly income by spending category for two kinds of household: those headed by someone under 30 and those headed by someone over 60.",
        "Overall, younger households channel most of their income into housing and transport, while older households give a bigger share to food and manage to save far more.",
        "Housing claims 34% of income among the under-30s — the largest slice on either chart — against 22% for the over-60s. Transport shows a similar tilt, at 22% versus 12%, suggesting that travel costs weigh more heavily on working-age budgets.",
        "Older households lead in the two remaining growth categories: food takes 26% of their income compared with 18%, and savings absorb 26% — over twice the younger group's 10%. Leisure is the great equaliser, with shares of 16% and 14% that differ by almost nothing.",
      ],
      wordCount: 136,
      justification: [
        { criterion: "Task Achievement", note: "All five categories covered with the key contrasts selected and quantified; at 136 words the response sits under the 150-word floor, which caps this criterion at 7 despite the quality of selection." },
        { criterion: "Coherence and Cohesion", note: "Category-led organisation with clear paragraph roles and varied links ('against', 'compared with', '— over twice'); the 'great equaliser' close is stylish if a touch informal." },
        { criterion: "Lexical Resource", note: "Good variety — 'claims', 'channel', 'absorb', 'weigh more heavily' — with rare imprecision ('growth categories' is loose); collocation mostly natural." },
        { criterion: "Grammatical Range and Accuracy", note: "A mix of complex structures, mostly error-free; the dash constructions are controlled, though one or two sentences run long, keeping range short of Band 8 flexibility." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "to allocate", partOfSpeech: "verb", meaning: "To distribute something purposefully across uses." },
    { word: "commitment", partOfSpeech: "noun", meaning: "A regular financial obligation, such as rent." },
    { word: "share", partOfSpeech: "noun", meaning: "The portion of a whole that one item represents." },
    { word: "to absorb", partOfSpeech: "verb", meaning: "To take up a share — 'housing absorbs 34%'." },
    { word: "proportionally", partOfSpeech: "adverb", meaning: "Measured as a proportion, not an absolute amount." },
    { word: "on either chart", partOfSpeech: "phrase", meaning: "On both of the two charts — used for superlatives across pies." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Table — four countries, three indicators
// ---------------------------------------------------------------------------

export const at1TableCities: WritingBankTask = {
  slug: "ielts-wb-at1-table-cities",
  title: "Table — living indicators in four countries",
  channel: "academic",
  taskType: "task-1",
  family: "table",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The table below gives information about four countries in 2024: average life expectancy, the percentage of adults with a university degree, and average monthly disposable income.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "table",
    title: "Three living indicators, four countries, 2024",
    unit: "mixed",
    rowLabel: "Country",
    columnLabels: ["Life expectancy (years)", "Adults with a degree (%)", "Monthly disposable income (US$)"],
    rows: [
      { label: "Norway", values: [83, 44, 4100] },
      { label: "Chile", values: [79, 32, 900] },
      { label: "Malaysia", values: [75, 28, 1050] },
      { label: "South Africa", values: [62, 12, 640] },
    ],
    note: "Disposable income is shown after tax, in US dollars at 2024 exchange rates.",
  },
  requirements: [
    {
      key: "overview",
      description: "States the ranking story: Norway leads on every indicator; South Africa trails on all three.",
      keywords: ["overall", "norway", "led", "every", "all three", "lowest", "highest", "consistent", "gap"],
    },
    {
      key: "mixed-middle",
      description: "Notes the middle pair: Chile and Malaysia are close on degrees (32/28) and expectancy (79/75) but Malaysia out-earns Chile.",
      keywords: ["chile", "malaysia", "close", "similar", "higher income", "reverses", "however"],
    },
    {
      key: "figures",
      description: "Quotes at least four accurate figures across at least two indicators.",
      keywords: ["83", "44", "4100", "62", "12", "640", "79", "75", "32", "28", "900", "1050"],
    },
    {
      key: "scale-contrast",
      description: "Conveys scale contrasts honestly (income differs by a factor of six; expectancy by 21 years).",
      keywords: ["times", "factor", "more than", "years", "gap", "difference", "around", "approximately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Three different units — years, per cent, dollars: never average or add them; report each in its own unit.",
        "Rows are countries: organise the response by country rank or by indicator, but pick one and hold it.",
        "A single year — no trends, no movement verbs ('rose' would be wrong); use states ('stands at').",
      ],
    },
    {
      heading: "Step 2 — Headline features",
      notes: [
        "A clean sweep: Norway first on all three; South Africa last on all three.",
        "The middle is the interesting part: Chile vs Malaysia is close on two indicators but flips on income (900 vs 1050).",
        "The starkest figure on the table: degree attainment 44% vs 12% — nearly four times.",
      ],
    },
    {
      heading: "Step 3 — Paragraph plan",
      notes: [
        "Introduction: paraphrase — 'compares three indicators of living standards'.",
        "Overview: consistent top-to-bottom ranking; a close middle pair with one reversal.",
        "Body 1: Norway and South Africa — the extremes, all three indicators each.",
        "Body 2: Chile and Malaysia — near-misses and the income reversal.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The table compares three indicators of living standards — life expectancy, university education and disposable income — across four countries in 2024.",
      "Overall, the ranking is remarkably consistent: Norway leads on every measure and South Africa trails on every measure, while the two middle countries, Chile and Malaysia, are closely matched apart from a reversal in income.",
      "Norwegians can expect to live 83 years on average, 44% of Norwegian adults hold a degree, and monthly disposable income stands at 4,100 US dollars — comfortably the highest figures on the table. South Africa sits at the other end of the scale on all three counts: life expectancy of 62 years is 21 years lower than Norway's, only one adult in eight has a degree, and average income, at 640 dollars, is roughly a sixth of the Norwegian level.",
      "The middle pair are separated by fine margins in two columns: Chile records a life expectancy of 79 years against Malaysia's 75, and degree attainment of 32% against 28%. The one clear difference goes the other way, however — average Malaysian income of 1,050 dollars exceeds the Chilean figure of 900 dollars by around 17%, making Malaysia the only country to beat a higher-ranked neighbour in any column.",
    ],
    wordCount: 201,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis: "Names all three indicators in dash apposition, so the reader knows the units before any figures arrive.",
      },
      {
        role: "Overview",
        analysis: "The consistency claim plus the middle-pair story — both are selection decisions, and selection is what the descriptor calls 'main features'.",
      },
      {
        role: "Body 1 — the extremes",
        analysis: "Deals with both ends of the table at once because they share one story. The fraction conversions ('one adult in eight', 'roughly a sixth') demonstrate proportional language rather than raw subtraction only.",
      },
      {
        role: "Body 2 — the middle pair",
        analysis: "Handles the close columns first, then flags the reversal with 'however' — the pivot that makes the table interesting — and closes by quantifying the reversal (17%).",
      },
    ],
    vocabulary: [
      { term: "indicators of living standards", note: "The table's own frame, named analytically instead of listing columns." },
      { term: "the ranking is remarkably consistent", note: "A table-level claim that earns its place in the overview — patterns first, numbers second." },
      { term: "trails on every measure", note: "'Trails' reverses 'leads' without repeating 'lowest' — varied reporting vocabulary." },
      { term: "one adult in eight", note: "Fraction phrasing for 12% — shows flexibility between per cent, fractions and ratios." },
      { term: "roughly a sixth of the Norwegian level", note: "Ratio wording for 640 vs 4100 — honest rounding signalled by 'roughly'." },
      { term: "fine margins", note: "The precise term for small differences — better than 'very close'." },
      { term: "goes the other way", note: "Spoken-register signal of a reversal; formal alternative: 'runs in the opposite direction'." },
    ],
    grammar: [
      {
        feature: "State verbs for snapshot data",
        example: "monthly disposable income stands at 4,100 US dollars",
        note: "Tables without time series need 'stands at', 'records', 'holds' — not 'rose' or 'increased'.",
      },
      {
        feature: "Ratio and fraction expressions",
        example: "roughly a sixth of the Norwegian level",
        note: "Converting raw gaps into ratios demonstrates the proportional language Band 8 descriptors call 'skilful'." },
      {
        feature: "Concessive 'apart from' / 'however'",
        example: "closely matched apart from a reversal in income",
        note: "Exceptions to a pattern are themselves features; the grammar that flags them ('apart from', 'however') is examinable precision.",
      },
    ],
    coherence:
      "The response ranks rather than narrates: extremes first, then the contested middle. Every figure appears inside a comparison ('against', 'lower than', 'exceeds … by'), the middle-pair paragraph opens by naming its pair, and the closing observation — that the income reversal is unique on the table — resolves the report by returning to the overview's consistency claim.",
    alternativeExpressions: [
      { insteadOf: "leads on every measure", use: "ranks first across the board" },
      { insteadOf: "sits at the other end of the scale", use: "occupies the opposite extreme" },
      { insteadOf: "fine margins", use: "narrow differences / a matter of a few units" },
      { insteadOf: "goes the other way", use: "points in the opposite direction" },
      { insteadOf: "comfortably the highest", use: "by a clear margin the highest" },
    ],
    commonMistakes: [
      {
        wrong: "The average of the three columns shows Norway is best.",
        right: "Norway records the highest value in each of the three columns.",
        reason: "You cannot average years, per cents and dollars — the units are incommensurable; report rankings per column instead.",
      },
      {
        wrong: "Life expectancy increased to 83 years in Norway.",
        right: "Life expectancy in Norway stands at 83 years.",
        reason: "There is no earlier year on the table, so no movement — 'increased' invents a trend the data does not contain.",
      },
      {
        wrong: "Norway has 83 years life, 44% degree and 4100 dollars.",
        right: "Norwegians can expect to live 83 years, 44% of adults hold a degree, and monthly income stands at 4,100 dollars.",
        reason: "Noun-phrase shorthand drops the verbs that make units meaningful; full structures keep the report readable and grammatical.",
      },
      {
        wrong: "South Africa is the worst country.",
        right: "South Africa records the lowest figures on all three indicators.",
        reason: "'Worst' judges; Task 1 reports. The indicator, not the country, is the subject of every claim.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The table give information about life expectancy, percentage of adults with university degree and monthly income for four countries in 2024.",
        "Overall, Norway is number one in all the columns and South Africa is last in all. Chile and Malaysia are in the middle.",
        "In Norway, people live 83 years and 44% have degree. The income is 4100 dollars every month. South Africa is much lower, only 62 years and 12% have degree and the income is 640 dollar.",
        "Chile and Malaysia are very similar. Chile is 79 years and Malaysia is 75 years. For degree Chile is 32% and Malaysia 28%. But Malaysia income is 1050 dollars, this is higher than Chile 900 dollars.",
      ],
      wordCount: 115,
      justification: [
        { criterion: "Task Achievement", note: "Finds the sweep and the income reversal, but at 115 words is far under the floor and development stays at listing level — 'much lower' where a measured gap belongs." },
        { criterion: "Coherence and Cohesion", note: "Country-by-country narration works, but links are mechanical ('But Malaysia income is') and paragraph 4 is a run of short declarations with little progression." },
        { criterion: "Lexical Resource", note: "Topic words present ('life expectancy') but repetitive ('is number one', 'very similar'); missing articles with figures ('640 dollar') shows word-formation limits." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences with frequent small errors — 'table give', 'have degree', comma splices — a Band 6 accuracy profile: errors rarely block meaning but recur." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The table presents three quality-of-life measures — how long people live, how many adults hold a university degree, and how much income households keep each month — for four countries in 2024.",
        "Overall, the four countries form a stable hierarchy: Norway tops every column, South Africa closes every one, and the two countries between them differ only narrowly, except that Malaysia out-earns Chile.",
        "Norway pairs the longest lives (83 years) with the widest education (44% of adults) and by far the deepest pockets, at 4,100 dollars a month. South Africa's figures — 62 years, 12% and 640 dollars — sit between a quarter and a third of Norwegian levels across the board.",
        "Chile and Malaysia are nearly twins on the first two measures, at 79 against 75 years and 32% against 28%. Income breaks the symmetry: at 1,050 dollars, Malaysia earns some 150 dollars more than Chile each month, the only place in the table where a lower-ranked country overtakes the one above it.",
      ],
      wordCount: 160,
      justification: [
        { criterion: "Task Achievement", note: "Covers all three indicators for all four countries with clear selection of the sweep, the close middle and the reversal; over the floor with room for the closing insight." },
        { criterion: "Coherence and Cohesion", note: "Hierarchy-first organisation with controlled linking ('except that', 'Income breaks the symmetry'); one metaphor ('deepest pockets') is lively if informal for the register — a taste question, not an error." },
        { criterion: "Lexical Resource", note: "Flexible and precise — 'a stable hierarchy', 'breaks the symmetry', 'overtakes' — with idiomatic touches used knowingly." },
        { criterion: "Grammatical Range and Accuracy", note: "Varied complex sentences, dash constructions and quantified comparisons, essentially error-free; range sits just under Band 8 only because structural variety repeats its favourite shapes." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "indicator", partOfSpeech: "noun", meaning: "A measured value used to compare conditions — here, of living standards." },
    { word: "life expectancy", partOfSpeech: "noun", meaning: "The average number of years a person is expected to live." },
    { word: "disposable income", partOfSpeech: "noun", meaning: "Money remaining after taxes, available to spend or save." },
    { word: "attainment", partOfSpeech: "noun", meaning: "The level achieved, as in education — 'degree attainment'." },
    { word: "hierarchy", partOfSpeech: "noun", meaning: "An ordered ranking from highest to lowest." },
    { word: "to overtake", partOfSpeech: "verb", meaning: "To pass the level of something ranked above you." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Bar chart — waste recycling (horizontal bars, single series)
// ---------------------------------------------------------------------------

export const at1BarRecycling: WritingBankTask = {
  slug: "ielts-wb-at1-bar-recycling",
  title: "Bar chart — recycling rates by material",
  channel: "academic",
  taskType: "task-1",
  family: "bar",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The bar chart below shows the proportion of household waste that was recycled in one city in 2024, by material.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "bar",
    title: "Household waste recycled by material, 2024",
    unit: "%",
    xLabel: "Material",
    yLabel: "Share of waste recycled (%)",
    categories: ["Glass", "Paper and card", "Metal cans", "Plastic", "Food waste"],
    series: [{ name: "2024", values: [78, 71, 66, 39, 24] }],
    horizontal: true,
  },
  requirements: [
    {
      key: "overview",
      description: "States the overview: a steep recycling gradient from durable materials (glass, paper, metal) to soft ones (plastic, food).",
      keywords: ["overall", "gradient", "steep", "highest", "lowest", "while", "gap", "range"],
    },
    {
      key: "top-group",
      description: "Identifies the three mid-to-high 60s–70s materials as a cluster (78, 71, 66).",
      keywords: ["glass", "paper", "metal", "cluster", "group", "similar", "close", "within"],
    },
    {
      key: "bottom-contrast",
      description: "Contrasts the two laggards: plastic 39% and food waste 24% — roughly half the leading rates.",
      keywords: ["plastic", "food", "39", "24", "half", "lag", "below", "lowest"],
    },
    {
      key: "single-snapshot",
      description: "Uses state language (no trend verbs — the chart is one year).",
      keywords: ["recycled", "accounted", "share", "stood at", "at", "for"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "One year, one series: this is a ranking task, not a trend task — no 'rose' or 'fell'.",
        "Percentages of each material's waste recycled — shares, not tonnages.",
        "Five materials already ordered high to low on the chart.",
      ],
    },
    {
      heading: "Step 2 — Headline features",
      notes: [
        "A 54-point range from glass (78%) to food waste (24%) — the spread is the story.",
        "Top three cluster tightly within 12 points; the bottom two sit far below.",
        "Useful conversion: food waste is recycled at under a third of the glass rate.",
      ],
    },
    {
      heading: "Step 3 — Paragraph plan",
      notes: [
        "Introduction: 'the proportion of each material that was recycled'.",
        "Overview: two-tier picture — packaging materials high, soft waste low.",
        "Body 1: the top cluster with the 12-point spread noted.",
        "Body 2: plastic and food, the halving observation, one sentence on the overall span.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The chart shows the share of each category of household waste that was recycled in one city in 2024.",
      "Overall, recycling rates fall into two clear tiers: durable packaging materials were recycled at rates approaching or exceeding two-thirds, whereas the two remaining categories, plastic and food waste, lagged far behind.",
      "Glass was the most successfully recycled material, with 78% of glass waste reprocessed, followed closely by paper and card at 71% and metal cans at 66%. The top three materials therefore sit within a twelve-point band, a relatively narrow spread for materials with such different collection systems.",
      "Below this cluster the picture changes sharply. Just 39% of plastic waste was recycled — barely half the glass rate — and food waste performed worst of all at 24%, meaning that three-quarters of it ended up untreated. Taken together, the chart reveals a 54-point range between the best and worst recycled materials, with soft and perishable waste clearly the city's greatest challenge.",
    ],
    wordCount: 158,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis: "One sentence that converts the rubric's 'proportion of household waste … by material' into the response's own phrasing.",
      },
      {
        role: "Overview",
        analysis: "Introduces the two-tier reading — the selection that organises everything after it — and uses a quantified band ('two-thirds') rather than a bare adjective.",
      },
      {
        role: "Body 1 — the top cluster",
        analysis: "Gives the three figures in ranked order and adds the spread calculation ('within a twelve-point band'), turning three similar numbers into one feature.",
      },
      {
        role: "Body 2 — the laggards",
        analysis: "Pairs the two low figures with proportional conversions ('barely half', 'three-quarters … untreated') and closes on the full range — the chart's single most quotable statistic.",
      },
    ],
    vocabulary: [
      { term: "two clear tiers", note: "Names the pattern type — tiers/clusters/bands are the analyst's nouns for grouped rankings." },
      { term: "approaching or exceeding two-thirds", note: "Fractional phrasing with a hedged boundary — precise and flexible at once." },
      { term: "reprocessed", note: "The industry verb for 'recycled' — one substitution lifts lexical range instantly." },
      { term: "a twelve-point band", note: "A range quoted as a single noun phrase — the compact way to report similarity." },
      { term: "lagged far behind", note: "The standard collocation for a trailing group in ranking data." },
      { term: "ended up untreated", note: "Result phrasing that draws the consequence out of a share without moralising." },
    ],
    grammar: [
      {
        feature: "Past simple passives",
        example: "78% of glass waste reprocessed",
        note: "The recycling happened in a past year and was done to the waste: 'was recycled / were reprocessed' is the correct voice and tense." },
      {
        feature: "Reduced relative clause",
        example: "with 78% of glass waste reprocessed",
        note: "A 'with + noun + participle' absolute construction packs a second data point into one clause." },
      {
        feature: "Meaning-focused gerunds",
        example: "meaning that three-quarters of it ended up untreated",
        note: "A -ing comment clause converts a figure into its implication — analysis grammar that stays inside reporting bounds." },
    ],
    coherence:
      "The two-tier overview is defended by the paragraph structure itself: body one proves the top tier, body two the bottom. Ranking language ('most successfully', 'followed closely by', 'below this cluster') keeps the reader oriented inside the ranking, and the final sentence measures the whole span — an ending that closes the argument rather than trailing off.",
    alternativeExpressions: [
      { insteadOf: "fall into two clear tiers", use: "divide cleanly into two groups" },
      { insteadOf: "followed closely by", use: "with … next at / just behind at" },
      { insteadOf: "lagged far behind", use: "trailed by a wide margin" },
      { insteadOf: "barely half the glass rate", use: "around half of the corresponding figure for glass" },
      { insteadOf: "performed worst of all", use: "recorded the lowest rate of any material" },
    ],
    commonMistakes: [
      {
        wrong: "Glass recycled 78%.",
        right: "Glass was recycled at a rate of 78%.",
        reason: "The material does not do the recycling — the passive keeps the doer out of the sentence, which is both accurate and appropriately formal.",
      },
      {
        wrong: "Recycling of glass was higher than food waste.",
        right: "The glass recycling rate was more than three times that of food waste.",
        reason: "Comparing a rate to a material mixes categories; compare like with like, and let the ratio do the comparing.",
      },
      {
        wrong: "Recycling has increased to 78% for glass.",
        right: "78% of glass was recycled in 2024.",
        reason: "A one-year snapshot has no direction — 'has increased' imports a trend the chart never shows.",
      },
      {
        wrong: "Food waste is disgusting and should be composted.",
        right: "Food waste recorded the lowest recycling rate, at 24%.",
        reason: "Opinions and recommendations belong to Task 2; Task 1's discipline is reporting what is on the page.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The bar chart shows the percentage of rubbish from homes which was recycled in a city in 2024. There are five materials in the chart.",
        "Overall, glass, paper and metal have high recycling rates but plastic and food waste is low. The highest is glass and the lowest is food waste.",
        "Glass is 78% and paper and card is 71%, metal cans is 66%. These three are similar, only 12% between the top and the metal.",
        "Plastic is just 39%, it is much less than glass. Food waste is the worst, 24%, so most food rubbish is not recycled. The different between glass and food waste is 54%.",
      ],
      wordCount: 111,
      justification: [
        { criterion: "Task Achievement", note: "The two-tier reading and the span are present with figures, but 111 words is well under the floor — the response cannot extend ideas it has listed, which caps this criterion." },
        { criterion: "Coherence and Cohesion", note: "Sensible grouping, but linking leans on 'and' plus comma splices ('Plastic is just 39%, it is much less') — mechanical rather than managed cohesion." },
        { criterion: "Lexical Resource", note: "'Rubbish' is acceptable but informal next to 'materials'; repetition of 'is' + figure; 'the different' shows word-formation slips typical of Band 6–6.5." },
        { criterion: "Grammatical Range and Accuracy", note: "Subject-verb agreement errors on plural data ('metal cans is'), comma splices, and a narrow sentence set — meaning survives, accuracy wavers, range is limited." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The chart illustrates what fraction of each type of household waste — glass, paper and card, metal, plastic and food — was recycled in a single city during 2024.",
        "Overall, the materials split into a high-recycling tier of durable packaging and a low tier of plastic and food waste, with a 54-percentage-point spread between the best and worst performers.",
        "The top tier is tight: glass leads at 78%, paper and card follows at 71%, and metal cans at 66%, so the three most-recycled materials sit within a dozen points of one another. All three, notably, are materials with long-established kerbside collection.",
        "The lower tier tells a different story. Plastic, at 39%, is recycled at barely half the glass rate, while food waste, at 24%, sees three in four bins' worth of material go unrecovered. Between the leader and the laggard lies that 54-point span — a gap wide enough to suggest the city's recycling effort is strong on bottles and weak on kitchen waste.",
      ],
      wordCount: 161,
      justification: [
        { criterion: "Task Achievement", note: "Covers every material, quantifies the cluster and the span, and reads the data rather than listing it; the final clause edges toward interpretation but stays tied to the measured gap." },
        { criterion: "Coherence and Cohesion", note: "Tier-led structure defended paragraph by paragraph, with varied links ('notably', 'while', 'Between … lies') and a resonant closing frame that returns to the overview's span." },
        { criterion: "Lexical Resource", note: "Precise and varied — 'fraction', 'tight', 'unrecovered', 'kerbside' — collocation natural; 'bins' worth of material' is a touch colloquial for Band 8." },
        { criterion: "Grammatical Range and Accuracy", note: "Confident complex sentences, inversion ('Between the leader and the laggard lies…') and passives used correctly; a consistently error-free profile at the top of the 7 band." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "rate", partOfSpeech: "noun", meaning: "A measured proportion, here of waste recycled." },
    { word: "tier", partOfSpeech: "noun", meaning: "One level in a ranking — 'a high tier', 'a lower tier'." },
    { word: "cluster", partOfSpeech: "noun", meaning: "A group of values sitting close together." },
    { word: "span", partOfSpeech: "noun", meaning: "The distance between the highest and lowest values." },
    { word: "to reprocess", partOfSpeech: "verb", meaning: "To put material through processing again — the industrial verb behind 'recycle'." },
    { word: "laggard", partOfSpeech: "noun", meaning: "The item that falls behind the others — used of rankings." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};
