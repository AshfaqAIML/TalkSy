/**
 * Academic Task 1 practice bank — batch C (PROMPT 54 question-bank expansion).
 *
 * Ten original practice-tier Academic Task 1 tasks: three bar charts, three
 * line graphs, two pie pairs and two tables, spread across the unified topic
 * domains. Every task carries the complete practice payload — planning notes,
 * a full model answer with honest word counts, the eight-element analysis and
 * a topic vocabulary bank — at the leaner practice-tier floors and without
 * level samples. All material is original TalkSy practice content written in
 * the style of the IELTS Writing test; band labels are educational estimates,
 * never official scores.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

// ---------------------------------------------------------------------------
// 1. Bar chart — visitors to four city museums (culture, difficulty 2)
// ---------------------------------------------------------------------------

const barMuseumVisitors: WritingBankTask = {
  slug: "ielts-wb-at1-bar-museum-visitors",
  title: "Visitors to four city museums",
  channel: "academic",
  taskType: "task-1",
  family: "bar",
  tier: "practice",
  topic: "culture",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The bar chart below shows the number of visitors to four museums in the city of Riverton in 2014 and 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "bar",
    title: "Visitors to four museums in Riverton, 2014 and 2024",
    unit: "thousands of visitors",
    xLabel: "Museum",
    yLabel: "Visitors (thousands)",
    categories: ["City History Museum", "Modern Art Gallery", "Science Discovery Centre", "Maritime Museum"],
    series: [
      { name: "2014", values: [260, 190, 150, 120] },
      { name: "2024", values: [410, 360, 300, 140] },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: visitor numbers rose at all four museums, and the ranking of the venues stayed the same.",
      keywords: ["overall", "every", "all four", "rose", "increase", "grew", "upward", "ranking", "unchanged", "remained"],
    },
    {
      key: "leader",
      description: "Identifies the City History Museum as the most visited venue in both years.",
      keywords: ["history", "museum", "highest", "largest", "leading", "most", "ahead", "top", "410,000", "260,000"],
    },
    {
      key: "growth-rates",
      description: "Compares growth rates across museums, noting the Science Discovery Centre's doubling and the Maritime Museum's weak growth.",
      keywords: ["science", "discovery", "maritime", "double", "doubled", "fastest", "sharpest", "modest", "slowest", "170,000", "300,000"],
    },
    {
      key: "figures",
      description: "Quotes at least four accurate figures for visitors, drawn from either year.",
      keywords: ["260", "410", "190", "360", "150", "300", "120", "140", "thousand", "visitors"],
    },
    {
      key: "report-register",
      description: "Reports the data without explaining why attendance changed or recommending improvements.",
      keywords: ["while", "whereas", "compared", "although", "respectively", "however", "twice"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Two snapshots, 2014 and 2024: past simple throughout the report.",
        "Units are thousands of visitors — a count, not a share.",
        "Four museums, already ordered from most to least visited in 2024.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Every museum gained visitors, and the ranking never changed.",
        "The Modern Art Gallery grew most in absolute terms, adding 170,000 visitors.",
        "The Science Discovery Centre doubled, the strongest relative growth; the Maritime Museum added only 20,000.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: paraphrase the rubric in one sentence.",
        "Overview: universal growth and a stable ranking, with no figures.",
        "Body 1: the two leading museums with paired figures.",
        "Body 2: the Science Centre's doubling and the Maritime Museum's near-stagnation.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The bar chart compares the number of visitors to four museums in the city of Riverton in 2014 with the equivalent figures for 2024.",
      "Overall, every museum attracted more visitors in 2024 than a decade earlier, and the ranking of the four venues barely changed: the City History Museum drew the largest crowds in both years, while the Maritime Museum remained the least popular.",
      "The City History Museum led throughout, receiving 260,000 visitors in 2014 and 410,000 in 2024. The Modern Art Gallery recorded the largest absolute increase, however, rising by 170,000 from 190,000 to 360,000, which narrowed the gap between the top two venues from 70,000 to 50,000 visitors.",
      "The Science Discovery Centre, although third in both years, saw its attendance double from 150,000 to 300,000, the sharpest relative growth on the chart. Growth at the Maritime Museum was far more modest, at just 20,000 extra visitors, and its 2024 total of 140,000 was less than half the figure for its closest rival. Even so, the direction of travel was upward at all four venues.",
    ],
    wordCount: 176,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Paraphrases the rubric with 'the number of visitors to four museums' recast as a two-year comparison, so the reader expects paired figures from the very start.",
      },
      {
        role: "Overview",
        analysis:
          "Carries the two headline features — universal growth and an unchanged ranking — without a single figure, which is exactly the pattern-level summary the descriptor rewards.",
      },
      {
        role: "Body 1 — the leaders",
        analysis:
          "Gives both leading museums' paired figures, labels the Modern Art Gallery's rise the largest absolute increase, and closes with the narrowing gap — a computed comparison rather than a list.",
      },
      {
        role: "Body 2 — the chasing pair",
        analysis:
          "Handles the two smaller venues by growth shape: 'double' for the Science Centre, 'far more modest' for the Maritime Museum, with the half-the-rival conversion adding proportional precision.",
      },
    ],
    vocabulary: [
      { term: "drew the largest crowds", note: "A varied reporting verb for 'had the most visitors' — 'crowds' keeps the register human without losing precision." },
      { term: "the largest absolute increase", note: "Distinguishes absolute growth (+170,000) from relative growth — a distinction examiners notice." },
      { term: "narrowed the gap", note: "The standard collocation for a trailing item closing on the leader." },
      { term: "saw its attendance double", note: "'Double' captures 150,000 to 300,000 exactly, and 'saw' varies the sentence subject." },
      { term: "the direction of travel", note: "A closing phrase that generalises the trend without inventing causes." },
    ],
    grammar: [
      {
        feature: "Past simple for both years",
        example: "The City History Museum led throughout, receiving 260,000 visitors in 2014",
        note: "Both snapshots lie in the past, so every reporting verb takes the past simple.",
      },
      {
        feature: "Participle clause with 'receiving'",
        example: "receiving 260,000 visitors in 2014 and 410,000 in 2024",
        note: "One -ing clause delivers both figures in a single sentence, halving the word cost.",
      },
      {
        feature: "Concessive 'although'",
        example: "although third in both years",
        note: "The concession ranks the Science Centre honestly while letting the doubling claim follow.",
      },
      {
        feature: "'less than half' comparative",
        example: "was less than half the figure for its closest rival",
        note: "A proportional comparison that stays arithmetically true at 140,000 against 300,000.",
      },
    ],
    coherence:
      "The report moves from frame to headline to groups, and the grouping logic is announced in the overview: leaders first, chasers second. Reference chains ('the top two venues', 'its closest rival', 'all four venues') keep the museums ordered in the reader's mind, and each body paragraph ends with a computed comparison rather than a new figure.",
    alternativeExpressions: [
      { insteadOf: "drew the largest crowds", use: "attracted the most visitors / recorded the highest attendance" },
      { insteadOf: "rising by 170,000", use: "increasing by 170,000 / gaining 170,000 visitors" },
      { insteadOf: "saw its attendance double", use: "recorded a twofold increase in attendance" },
      { insteadOf: "far more modest", use: "considerably weaker / much smaller in scale" },
      { insteadOf: "the direction of travel was upward", use: "the general trend was upwards" },
    ],
    commonMistakes: [
      {
        wrong: "The History Museum had 150,000 more visitors.",
        right: "The City History Museum received 150,000 more visitors in 2024 than in 2014.",
        reason: "'More visitors' needs a comparison anchor; without one the sentence compares nothing with nothing.",
      },
      {
        wrong: "The Maritime Museum was the worst museum.",
        right: "The Maritime Museum attracted the fewest visitors in both years.",
        reason: "'Worst' is an opinion; Task 1 reports attendance levels, not judgements about quality.",
      },
      {
        wrong: "Visitors increased because the museums added new exhibitions.",
        right: "Visitor numbers increased at all four museums.",
        reason: "The chart shows no causes, so exhibition explanations are invention and cost marks.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "attendance", partOfSpeech: "noun", meaning: "The number of people visiting a place over a period." },
    { word: "venue", partOfSpeech: "noun", meaning: "A building or place where visits and events happen." },
    { word: "crowds", partOfSpeech: "noun", meaning: "Large numbers of visitors gathered in one place." },
    { word: "to double", partOfSpeech: "verb", meaning: "To become twice as large, as the Science Discovery Centre's attendance did." },
    { word: "rival", partOfSpeech: "noun", meaning: "A competitor in a comparison — 'its closest rival'." },
    { word: "snapshot", partOfSpeech: "noun", meaning: "Data for a single moment, as opposed to a continuous series." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Line graph — bus and car journeys in Bridgeport (environment, difficulty 2)
// ---------------------------------------------------------------------------

const lineBusUse: WritingBankTask = {
  slug: "ielts-wb-at1-line-bus-use",
  title: "Bus and car journeys in Bridgeport",
  channel: "academic",
  taskType: "task-1",
  family: "line",
  tier: "practice",
  topic: "environment",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The line graph below shows how many journeys were made by bus and by car in the city of Bridgeport between 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "line",
    title: "Annual journeys by bus and car in Bridgeport, 2000–2020",
    unit: "millions of journeys",
    xLabel: "Year",
    yLabel: "Journeys per year (millions)",
    xPoints: ["2000", "2004", "2008", "2012", "2016", "2020"],
    series: [
      { name: "Bus journeys", values: [48, 44, 41, 35, 30, 26] },
      { name: "Car journeys", values: [62, 68, 74, 79, 83, 84] },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: car journeys rose and levelled off, bus journeys fell continuously, and the gap widened.",
      keywords: ["overall", "opposite", "rose", "fell", "declined", "levelled", "gap", "widened", "directions"],
    },
    {
      key: "car-trend",
      description: "Describes the car series accurately: growth to 83 million by 2016, then a flattening to 84 million.",
      keywords: ["car", "62", "83", "84", "2016", "rose", "grew", "flattened", "levelled", "steadily"],
    },
    {
      key: "bus-trend",
      description: "Describes the bus series accurately: a continuous fall from 48 million to 26 million.",
      keywords: ["bus", "48", "26", "fell", "declined", "halved", "continuous", "every", "interval"],
    },
    {
      key: "gap-figures",
      description: "Quantifies the widening gap with at least two figures, such as 14 million growing to 58 million.",
      keywords: ["14", "58", "gap", "difference", "million", "four", "times", "wide"],
    },
    {
      key: "comparison-language",
      description: "Contrasts the two series with while, whereas or by contrast, in the past tense.",
      keywords: ["while", "whereas", "contrast", "compared", "million", "journeys", "between"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Six points, 2000 to 2020 at four-year intervals — describe movement, not just endpoints.",
        "Two series in millions of journeys: the contrast between them is the main feature.",
        "A completed past period: past simple for every reporting verb.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Cars rose for sixteen years, then flattened between 2016 and 2020.",
        "Buses fell in every interval, ending barely above half their starting level.",
        "The gap widened from 14 million to 58 million journeys — more than fourfold.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: one sentence paraphrasing the rubric.",
        "Overview: opposite directions and a widening divide, with no figures.",
        "Body 1: each series with two or three anchor figures.",
        "Body 2: the gap arithmetic that ties the two trends together.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The line graph shows how many journeys were made by bus and by car in the city of Bridgeport each year between 2000 and 2020.",
      "Overall, the two forms of transport moved in opposite directions: car journeys rose steadily before levelling off in the final years, while bus journeys declined continuously throughout the period. As a result, the gap between the two widened considerably.",
      "Car travel grew from 62 million journeys in 2000 to 83 million in 2016, an increase of roughly a third, and then flattened, with 2020 showing only a marginal rise to 84 million. Bus journeys, by contrast, began at 48 million and fell in every interval, ending at 26 million in 2020, barely more than half the starting figure.",
      "The widening divide is the most striking feature of the graph. In 2000 the difference between car and bus journeys was 14 million, but by 2020 it had reached 58 million, more than four times as wide, as buses carried fewer passengers while car use continued to expand.",
    ],
    wordCount: 171,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Rephrases the rubric as a single frame sentence and plants the two modes of transport that the whole report will compare.",
      },
      {
        role: "Overview",
        analysis:
          "Gives the two direction claims and their consequence — a widening gap — before any figure appears, which is the pattern-level summary the task rewards.",
      },
      {
        role: "Body 1 — the two series",
        analysis:
          "Handles each line in turn with anchor figures (62, 83, 84; 48, 26) and hedges the bus decline with 'barely more than half', a proportional conversion that earns credit.",
      },
      {
        role: "Body 2 — the gap",
        analysis:
          "Turns the two trends into one comparison: 14 million versus 58 million, converted to 'more than four times as wide', so the paragraph closes on analysis rather than data.",
      },
    ],
    vocabulary: [
      { term: "moved in opposite directions", note: "The frame-level phrase for mirror-image trends; it licenses the whole report." },
      { term: "levelling off", note: "The exact term for a rise that stops, as car journeys did after 2016." },
      { term: "declined continuously", note: "A trend adverb chosen to match the data: the bus line never once rises." },
      { term: "only a marginal rise", note: "Calibrated wording for the smallest movement on the graph, 83 to 84 million." },
      { term: "the widening divide", note: "A nominalisation that carries the final paragraph; 'divide' is stronger and more exact than 'difference'." },
    ],
    grammar: [
      {
        feature: "Past simple with time anchors",
        example: "Car travel grew from 62 million journeys in 2000 to 83 million in 2016",
        note: "Time phrases sequence twenty years without 'first, then, next' scaffolding.",
      },
      {
        feature: "'before + -ing' clause",
        example: "rose steadily before levelling off in the final years",
        note: "A compact structure that reports a change of direction inside one sentence.",
      },
      {
        feature: "Past perfect for consequences",
        example: "by 2020 it had reached 58 million",
        note: "The past perfect marks a state reached before the reference point of 2020.",
      },
      {
        feature: "Comparative with quantified ratio",
        example: "more than four times as wide",
        note: "Ratios make gap arithmetic vivid while staying honest about the rounding.",
      },
    ],
    coherence:
      "The report is sequenced as frame, headline, series, consequence: the overview promises opposite directions, body one proves them line by line, and body two cashes them in as gap arithmetic. Linking is carried by contrast connectives ('by contrast', 'while') and by reference ('the two', 'it'), and each paragraph's final sentence interprets the figures it has just given.",
    alternativeExpressions: [
      { insteadOf: "moved in opposite directions", use: "pulled apart over the period" },
      { insteadOf: "levelling off", use: "flattening out / reaching a plateau" },
      { insteadOf: "declined continuously", use: "fell in every interval / slipped throughout" },
      { insteadOf: "a marginal rise", use: "a negligible further increase" },
      { insteadOf: "the widening divide", use: "the growing disparity between the two modes" },
    ],
    commonMistakes: [
      {
        wrong: "Bus journeys went down and car journeys went up.",
        right: "Bus journeys fell from 48 million to 26 million, while car journeys rose from 62 million to 84 million.",
        reason: "Vague direction verbs without figures describe every line graph ever drawn and select nothing.",
      },
      {
        wrong: "In 2004 buses had 44 million, in 2008 41 million, and in 2012 35 million…",
        right: "Bus journeys fell in every interval, from 48 million to 26 million.",
        reason: "Reading every point aloud is a data dump; the rubric asks for selection of main features.",
      },
      {
        wrong: "People stopped using buses because they prefer cars.",
        right: "Bus journeys declined steadily while car journeys rose.",
        reason: "The graph shows no reasons for either trend, so preference claims are speculation.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "journey", partOfSpeech: "noun", meaning: "A single trip from one place to another." },
    { word: "to level off", partOfSpeech: "verb phrase", meaning: "To stop rising and hold steady after a period of growth." },
    { word: "interval", partOfSpeech: "noun", meaning: "The gap between two measurement points, here four years." },
    { word: "marginal", partOfSpeech: "adjective", meaning: "Very small in size or importance." },
    { word: "divide", partOfSpeech: "noun", meaning: "A marked difference between two groups or figures." },
    { word: "fourfold", partOfSpeech: "adjective/adverb", meaning: "Four times as large as the original value." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Pie pair — household spending in two towns (economics, difficulty 3)
// ---------------------------------------------------------------------------

const pieHouseholdSpending: WritingBankTask = {
  slug: "ielts-wb-at1-pie-household-spending",
  title: "Household spending in two towns",
  channel: "academic",
  taskType: "task-1",
  family: "pie",
  tier: "practice",
  topic: "economics",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The pie charts below show how households in two towns, Ashford and Bayview, divided their average monthly spending across five categories in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "pie",
    title: "Average household spending by category, Ashford and Bayview, 2024",
    unit: "%",
    pies: [
      {
        caption: "Ashford (inland market town)",
        slices: [
          { label: "Housing", value: 30 },
          { label: "Food", value: 25 },
          { label: "Transport", value: 15 },
          { label: "Leisure", value: 12 },
          { label: "Other goods and services", value: 18 },
        ],
      },
      {
        caption: "Bayview (coastal town)",
        slices: [
          { label: "Housing", value: 38 },
          { label: "Food", value: 22 },
          { label: "Transport", value: 10 },
          { label: "Leisure", value: 15 },
          { label: "Other goods and services", value: 15 },
        ],
      },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States the headline contrast: housing leads in both towns, but Bayview tilts towards housing and leisure while Ashford tilts towards food and transport.",
      keywords: ["overall", "housing", "largest", "biggest", "while", "whereas", "contrast", "towns"],
    },
    {
      key: "housing",
      description: "Compares housing: 38% of spending in Bayview against 30% in Ashford.",
      keywords: ["housing", "38", "30", "eight", "points", "percentage", "larger", "higher"],
    },
    {
      key: "food-transport",
      description: "Contrasts food (25% against 22%) and transport (15% against 10%) with both figures.",
      keywords: ["food", "25", "22", "transport", "15", "10", "half", "share", "points"],
    },
    {
      key: "remaining",
      description: "Covers leisure (12% against 15%) and other goods and services (18% against 15%).",
      keywords: ["leisure", "other", "goods", "services", "12", "15", "18", "remaining"],
    },
    {
      key: "proportion-language",
      description: "Uses share and proportion language rather than amounts of money.",
      keywords: ["share", "proportion", "accounted", "per cent", "%", "devoted", "allocated", "spending"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Two pies, two towns: organise by category, never pie by pie.",
        "Shares of average monthly spending; both pies total 100 per cent.",
        "A single year, 2024: present simple is the safe choice.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Housing is the largest slice in both towns, but by different margins.",
        "The sharpest tilts are housing (38 against 30) and transport (15 against 10).",
        "Leisure is the only other category where Bayview spends more.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: two towns, five categories, shares of spending.",
        "Overview: opposite tilts, with housing the common leader.",
        "Body 1: housing and leisure, then food and transport as the contrasting pairs.",
        "Body 2: the remaining category, plus a measured closing summary.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The pie charts compare how households in two towns, Ashford and Bayview, divided their average monthly spending across five categories in 2024.",
      "Overall, housing is the largest item in both towns, but the two budgets tilt in different directions: Bayview households devote a markedly larger share to accommodation and leisure, whereas Ashford households spend proportionally more on food and transport.",
      "Housing accounts for 38% of spending in Bayview, eight percentage points more than the 30% recorded in Ashford, and the coastal town also allocates a larger share to leisure, at 15% against 12%. Ashford, in contrast, directs 25% of its budget to food, three points more than Bayview, and spends half again as much on transport, with 15% compared with just 10%.",
      "The remaining category, other goods and services, absorbs 18% of Ashford's spending against 15% in Bayview. Taken together, the charts suggest that everyday costs such as food and travel weigh more heavily on Ashford households, while accommodation claims the clear priority in Bayview.",
    ],
    wordCount: 165,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Frames the comparison in a single sentence and names both towns, so that every later figure and pronoun has a clear referent.",
      },
      {
        role: "Overview",
        analysis:
          "States the common element — housing first everywhere — and the two opposite tilts, the selection that organises both body paragraphs.",
      },
      {
        role: "Body 1 — the tilting categories",
        analysis:
          "Pairs housing with leisure as the Bayview-tilted items, then pivots with 'in contrast' to food and transport, the Ashford-tilted pair, using 'half again as much' for the 15-versus-10 transport gap.",
      },
      {
        role: "Body 2 — the remaining category and the summary",
        analysis:
          "Handles other goods and services in one sentence so all five categories appear, then closes with a two-town summary that stays at share level and invents no amounts.",
      },
    ],
    vocabulary: [
      { term: "the two budgets tilt in different directions", note: "'Tilt' captures a share pattern in one word and previews the body paragraphs' grouping." },
      { term: "accounts for", note: "The workhorse reporting verb for shares; it varies later with 'absorbs' and 'directs'." },
      { term: "half again as much", note: "A precise idiom for a 1.5-to-1 ratio, here 15% against 10%." },
      { term: "absorbs", note: "A second reporting verb for shares, avoiding a string of 'accounts for'." },
      { term: "claims the clear priority", note: "Ranking language for the largest item that avoids repeating 'largest'." },
    ],
    grammar: [
      {
        feature: "Present simple for timeless shares",
        example: "Housing accounts for 38% of spending in Bayview",
        note: "With no time dimension, the present simple keeps the report consistent and simple.",
      },
      {
        feature: "Comparative with 'percentage points'",
        example: "eight percentage points more than the 30% recorded in Ashford",
        note: "Points, not per cent, is the honest unit for a difference between two shares.",
      },
      {
        feature: "'whereas' contrast clause",
        example: "whereas Ashford households spend proportionally more on food and transport",
        note: "Subordination carries the two-town comparison inside a single sentence.",
      },
      {
        feature: "Rotating reporting verbs",
        example: "allocates a larger share… directs 25%… absorbs 18%",
        note: "Varying the reporting verb shows lexical range while the data stays identical.",
      },
    ],
    coherence:
      "Category stories organise the report: the overview announces the two tilts, body one proves them category by category, and the final paragraph completes the set so no slice is left unreported. Every figure is given as a pair in a fixed order, Bayview then Ashford, and the closing sentence generalises the pattern without leaving share language behind.",
    alternativeExpressions: [
      { insteadOf: "tilt in different directions", use: "lean towards different priorities" },
      { insteadOf: "accounts for 38%", use: "makes up 38% / represents 38%" },
      { insteadOf: "half again as much", use: "one and a half times the share" },
      { insteadOf: "absorbs 18%", use: "takes up 18% of spending" },
      { insteadOf: "claims the clear priority", use: "is the dominant item" },
    ],
    commonMistakes: [
      {
        wrong: "Bayview households spend more money on housing.",
        right: "Bayview households devote a larger share of spending to housing (38% against 30%).",
        reason: "The charts show shares, not amounts; who spends more money cannot be known from them.",
      },
      {
        wrong: "Housing was 38%, food 22%, transport 10%, leisure 15%…",
        right: "Group the categories by town tilt and compare them in pairs.",
        reason: "Reading one pie aloud slice by slice abandons the comparison the rubric explicitly demands.",
      },
      {
        wrong: "Housing is 8% higher in Bayview.",
        right: "Housing accounts for eight percentage points more in Bayview.",
        reason: "A difference between two percentages is measured in percentage points, not per cent.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "share", partOfSpeech: "noun", meaning: "The portion of a whole that one category represents." },
    { word: "to allocate", partOfSpeech: "verb", meaning: "To distribute money or resources across different uses." },
    { word: "percentage point", partOfSpeech: "noun", meaning: "The unit for the difference between two percentages (38% − 30% = 8 points)." },
    { word: "budget", partOfSpeech: "noun", meaning: "The total money available for spending over a period." },
    { word: "to tilt", partOfSpeech: "verb", meaning: "To favour one direction or category over others." },
    { word: "accommodation", partOfSpeech: "noun", meaning: "Housing, as a category of spending." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Table — university applications by subject (university, difficulty 3)
// ---------------------------------------------------------------------------

const tableUniversityApplications: WritingBankTask = {
  slug: "ielts-wb-at1-table-university-applications",
  title: "University applications by subject",
  channel: "academic",
  taskType: "task-1",
  family: "table",
  tier: "practice",
  topic: "university",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The table below shows the number of university applications received in six subject areas in one country in 2015 and 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "table",
    title: "University applications by subject area, 2015 and 2024",
    unit: "applications",
    rowLabel: "Subject area",
    columnLabels: ["Applications 2015", "Applications 2024", "Change since 2015", "Share of 2024 total (%)"],
    rows: [
      { label: "Business and management", values: [84000, 132000, "+57%", 32] },
      { label: "Computer science", values: [46000, 98000, "+113%", 24] },
      { label: "Health and nursing", values: [52000, 74000, "+42%", 18] },
      { label: "Engineering", values: [41000, 55000, "+34%", 13] },
      { label: "Humanities", values: [38000, 27000, "-29%", 7] },
      { label: "Creative arts", values: [29000, 24000, "-17%", 6] },
    ],
    note: "Applications are rounded to the nearest thousand; the share column is rounded to the nearest whole per cent.",
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: applications rose in four subjects and fell in two, with computer science growing fastest.",
      keywords: ["overall", "rose", "fell", "four", "two", "computer", "fastest", "growth", "declined"],
    },
    {
      key: "business",
      description: "Identifies business and management as the most popular subject in both years, with figures.",
      keywords: ["business", "management", "84,000", "132,000", "most", "largest", "first", "popular", "third"],
    },
    {
      key: "computer-science",
      description: "Highlights computer science's doubling from 46,000 to 98,000 and its rise to second place.",
      keywords: ["computer", "science", "46,000", "98,000", "doubled", "113", "second", "overtaking"],
    },
    {
      key: "declines",
      description: "Reports the falls in humanities (down 29%) and creative arts (down 17%).",
      keywords: ["humanities", "creative", "arts", "fell", "dropped", "declined", "29", "17", "27,000", "24,000"],
    },
    {
      key: "figures",
      description: "Quotes at least six accurate figures from the table across both years.",
      keywords: ["applications", "2015", "2024", "thousand", "per cent", "74,000", "55,000", "38,000"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Four columns: two counts, one percentage change, one share of the 2024 total.",
        "Rows are subjects: organise by growth story, not by row order.",
        "Past simple for 2015 and 2024; the change column is already computed.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Four risers and two fallers — and one riser more than doubles.",
        "Computer science climbs from third to second; health and nursing slips to third.",
        "The two fallers are small players: together they draw one application in eight.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: name the four columns in paraphrased form.",
        "Overview: the four-two split and the fastest mover.",
        "Body 1: the three biggest risers with paired figures.",
        "Body 2: the two decliners and the sharpest-contrast close.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The table shows the number of applications received by six university subject areas in one country in 2015 and 2024, together with the change over the period and each subject's share of the 2024 total.",
      "Overall, applications rose in four of the six subjects and fell in the remaining two, with computer science recording by far the fastest growth. Business and management kept its place as the most popular field in both years.",
      "Business and management attracted 84,000 applications in 2015 and 132,000 in 2024, a 57% rise that kept it well ahead of every rival and left it with nearly a third of the 2024 total. Computer science more than doubled, from 46,000 to 98,000, and this 113% increase lifted it from third to second, overtaking health and nursing, which grew by 42% to 74,000. Engineering expanded more modestly, by 34% to 55,000.",
      "The two declining fields tell the opposite story. Humanities applications fell by 29%, from 38,000 to 27,000, and creative arts dropped 17%, from 29,000 to 24,000, so by 2024 these two subjects together drew only about one in eight of all applications. The contrast between the strongest and weakest performers, a 113% rise against a 29% fall, is easily the sharpest feature of the table.",
    ],
    wordCount: 209,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Paraphrases all four columns so the reader knows which numbers are counts, which are changes and which are shares.",
      },
      {
        role: "Overview",
        analysis:
          "Selects the table's spine — four risers, two fallers, one runaway leader — in two sentences without a single figure.",
      },
      {
        role: "Body 1 — the risers",
        analysis:
          "Works down the growth ranking with paired figures, converts computer science's rise into 'more than doubled', and adds the ranking change from third to second that the raw counts hide.",
      },
      {
        role: "Body 2 — the fallers",
        analysis:
          "Gives both declining subjects with their percentage falls, converts their combined weight to 'one in eight', and closes on the 113-versus-29 contrast — the table's most quotable spread.",
      },
    ],
    vocabulary: [
      { term: "kept its place as the most popular field", note: "Ranking language that reports stability without needing a figure." },
      { term: "more than doubled", note: "Proportional phrasing for a 113% rise, hedged honestly because it exceeds twice." },
      { term: "lifted it from third to second", note: "Converts two counts into a ranking change — the table's hidden story." },
      { term: "tell the opposite story", note: "A reversal signal that re-orients the reader before the decline data arrives." },
      { term: "one in eight", note: "Fraction wording for roughly 12% of applications — flexible proportional language." },
    ],
    grammar: [
      {
        feature: "Past simple for both years",
        example: "Business and management attracted 84,000 applications in 2015 and 132,000 in 2024",
        note: "Every count verb sits in the past simple because both years are finished.",
      },
      {
        feature: "Relative clause with 'which'",
        example: "which grew by 42% to 74,000",
        note: "The clause attaches health and nursing's figure without starting a new sentence.",
      },
      {
        feature: "Participle clause for ranking changes",
        example: "overtaking health and nursing",
        note: "'Overtaking' compresses a ranking change into two words inside another verb's sentence.",
      },
      {
        feature: "'so' consequence clause",
        example: "so by 2024 these two subjects together drew only about one in eight",
        note: "A result clause turns two separate falls into a single shared insight.",
      },
    ],
    coherence:
      "The report is organised by growth story: the overview announces the four-two split, body one proves the risers in ranking order, and body two handles the fallers before closing with the sharpest contrast. Figures always travel in pairs with their year attached, and the ranking vocabulary ('first', 'third to second', 'strongest and weakest') keeps six subjects sorted in the reader's head.",
    alternativeExpressions: [
      { insteadOf: "kept its place as the most popular field", use: "remained the leading subject area" },
      { insteadOf: "more than doubled", use: "rose by over 100 per cent" },
      { insteadOf: "lifted it from third to second", use: "moved it up one place in the rankings" },
      { insteadOf: "tell the opposite story", use: "show the reverse pattern" },
      { insteadOf: "drew only about one in eight", use: "accounted for only around one-eighth" },
    ],
    commonMistakes: [
      {
        wrong: "Computer science had 113% applications in 2024.",
        right: "Computer science applications rose by 113% between 2015 and 2024.",
        reason: "The change column is a rise over the period, not a level; mixing the two misreports the table.",
      },
      {
        wrong: "Humanities is not a useful subject.",
        right: "Humanities applications fell by 29% over the period.",
        reason: "Judgements about usefulness are opinions; Task 1 reports the numbers only.",
      },
      {
        wrong: "The table shows business 132,000, computer 98,000, health 74,000, engineering 55,000…",
        right: "Select the growth stories and quote paired figures inside comparisons.",
        reason: "Reciting the table row by row wastes words and shows no selection at all.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "application", partOfSpeech: "noun", meaning: "A formal request for a place on a university course." },
    { word: "applicant", partOfSpeech: "noun", meaning: "A person who applies for a place at a university." },
    { word: "subject area", partOfSpeech: "noun", meaning: "A broad field of study, such as engineering or humanities." },
    { word: "to double", partOfSpeech: "verb", meaning: "To become twice as large, as computer science applications did." },
    { word: "to overtake", partOfSpeech: "verb", meaning: "To pass the level of a higher-ranked rival." },
    { word: "decline", partOfSpeech: "noun", meaning: "A fall in numbers over a period of time." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Bar chart — renewable electricity in six countries (environment, difficulty 3)
// ---------------------------------------------------------------------------

const barRenewableShare: WritingBankTask = {
  slug: "ielts-wb-at1-bar-renewable-share",
  title: "Renewable electricity in six countries",
  channel: "academic",
  taskType: "task-1",
  family: "bar",
  tier: "practice",
  topic: "environment",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The bar chart below shows the percentage of electricity generated from renewable sources in six countries in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "bar",
    title: "Electricity generated from renewable sources, six countries, 2024",
    unit: "%",
    xLabel: "Country",
    yLabel: "Share of electricity from renewables (%)",
    categories: ["Norway", "Brazil", "Canada", "Spain", "Germany", "Japan"],
    series: [{ name: "2024", values: [89, 78, 61, 45, 41, 23] }],
    horizontal: true,
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: a leading pair (Norway and Brazil), a middle group, and Japan far behind, with a 66-point spread.",
      keywords: ["overall", "norway", "brazil", "japan", "leading", "highest", "lowest", "spread", "range", "66"],
    },
    {
      key: "leaders",
      description: "Reports the two leaders with figures: 89% in Norway and 78% in Brazil.",
      keywords: ["norway", "89", "brazil", "78", "highest", "three-quarters", "close", "behind", "pair"],
    },
    {
      key: "middle",
      description: "Groups Canada (61%), Spain (45%) and Germany (41%) as the middle of the field.",
      keywords: ["canada", "61", "spain", "45", "germany", "41", "middle", "four", "points", "apart"],
    },
    {
      key: "laggard",
      description: "Identifies Japan at 23% as the clear laggard, with at least one proportional comparison.",
      keywords: ["japan", "23", "lowest", "quarter", "half", "trails", "behind", "least", "laggard"],
    },
    {
      key: "snapshot-language",
      description: "Uses state verbs for a single-year snapshot, with no trend language.",
      keywords: ["generate", "produce", "share", "stands", "renewable", "electricity", "occupies"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "One year, one series: this is a ranking task — no 'rose' or 'fell'.",
        "Percentages of electricity generated; the shares are of each country's own supply.",
        "Six countries, already ordered from highest to lowest on the chart.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "The spread is the story: 66 points from Norway to Japan.",
        "A leading pair sits above three-quarters; the middle group runs from 41 to 61.",
        "Japan sits below a quarter, less than half the Canadian figure.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: one sentence naming the measure, the six countries and the year.",
        "Overview: the three-group structure and the spread.",
        "Body 1: leaders and middle group with four figures.",
        "Body 2: Japan, proportional comparisons, and the spread as the closer.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The bar chart shows the percentage of electricity generated from renewable sources in six countries in 2024.",
      "Overall, the six countries divide into a leading pair, a middle group and one clear laggard. Norway and Brazil generate more than three-quarters of their electricity from renewables, whereas Japan produces less than a quarter, leaving a 66-point spread between the highest and lowest figures.",
      "Norway's renewable share of 89% is the highest on the chart, with Brazil close behind at 78%. Canada occupies the middle of the field at 61%, comfortably ahead of Spain, at 45%, and Germany, at 41%, whose figures sit only four points apart; none of the middle group comes close to either leader.",
      "Japan trails the remaining five countries at 23%, a figure less than half the Canadian one and barely a quarter of Norway's. That 66-percentage-point range is itself the most striking feature of the chart, demonstrating how unevenly renewable generation is distributed across these six economies.",
    ],
    wordCount: 160,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Frames the chart in one sentence and signals a snapshot by writing 'in 2024', which prepares the reader for state verbs rather than trends.",
      },
      {
        role: "Overview",
        analysis:
          "Names the three-group structure and quantifies the spread — a selection the body paragraphs then simply defend, group by group, in ranked order.",
      },
      {
        role: "Body 1 — leaders and middle",
        analysis:
          "Reports the two leaders and the middle trio in ranked order, adding the four-point Spain–Germany observation to turn two similar figures into one feature.",
      },
      {
        role: "Body 2 — the laggard",
        analysis:
          "Handles Japan with two proportional conversions ('less than half', 'barely a quarter') and returns to the 66-point spread so the report ends on the chart's biggest number.",
      },
    ],
    vocabulary: [
      { term: "divide into a leading pair, a middle group and one clear laggard", note: "Naming the pattern type is the fastest way to show selection rather than listing." },
      { term: "occupies the middle of the field", note: "Ranking language that positions Canada without repeating ordinal numbers." },
      { term: "comfortably ahead", note: "Margin wording that ranks Canada over Spain without quoting yet another figure." },
      { term: "trails the remaining five countries", note: "'Trails' is the natural verb for a consistent last place." },
      { term: "barely a quarter of Norway's", note: "Ratio phrasing for 23 against 89, hedged with 'barely' to stay honest." },
    ],
    grammar: [
      {
        feature: "Present simple for a current snapshot",
        example: "Norway's renewable share of 89% is the highest on the chart",
        note: "A 2024 snapshot reported in the present keeps every state verb consistent.",
      },
      {
        feature: "Noun-phrase apposition with figures",
        example: "Spain, at 45%, and Germany, at 41%",
        note: "Apposition packs two countries and two figures into a single clause.",
      },
      {
        feature: "'whose' relative clause",
        example: "whose figures sit only four points apart",
        note: "The relative clause groups Spain and Germany and carries their similarity in the same breath.",
      },
      {
        feature: "Demonstrative as subject",
        example: "That 66-percentage-point range is itself the most striking feature",
        note: "The demonstrative turns a number from the previous paragraph into this paragraph's subject.",
      },
    ],
    coherence:
      "The report's structure mirrors the chart's own ranking: leaders, middle, laggard. The overview's three-group claim is defended in that order, every figure is attached to a country named in the same clause, and the report closes by returning to the spread promised in the overview, so the final sentence resolves the opening claim.",
    alternativeExpressions: [
      { insteadOf: "divide into a leading pair", use: "split into a top two" },
      { insteadOf: "occupies the middle of the field", use: "sits midway between the two groups" },
      { insteadOf: "comfortably ahead of", use: "clearly in front of" },
      { insteadOf: "trails the remaining five countries", use: "falls behind all the others" },
      { insteadOf: "barely a quarter of Norway's", use: "roughly one-fourth of the Norwegian share" },
    ],
    commonMistakes: [
      {
        wrong: "Norway increased its renewable electricity.",
        right: "Norway generates 89% of its electricity from renewable sources.",
        reason: "A one-year chart shows levels, not change; 'increased' invents a trend.",
      },
      {
        wrong: "Japan uses the least electricity of the six countries.",
        right: "Japan has the smallest renewable share, at 23%.",
        reason: "The chart measures shares of generation, not total consumption, so the claim misreads the units.",
      },
      {
        wrong: "The countries are Norway 89, Brazil 78, Canada 61, Spain 45, Germany 41 and Japan 23.",
        right: "Group the countries and let two or three figures carry each claim.",
        reason: "Reading the bars aloud in order is a list, not the selection the rubric demands.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "renewable", partOfSpeech: "adjective", meaning: "From sources that naturally replenish, such as wind, sun and water." },
    { word: "to generate", partOfSpeech: "verb", meaning: "To produce electricity, usually in power stations." },
    { word: "share", partOfSpeech: "noun", meaning: "The proportion of a total that one part represents." },
    { word: "laggard", partOfSpeech: "noun", meaning: "The item that falls behind all the others in a ranking." },
    { word: "spread", partOfSpeech: "noun", meaning: "The distance between the highest and lowest values in a set." },
    { word: "snapshot", partOfSpeech: "noun", meaning: "Data for a single moment rather than a period of change." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 6. Line graph — home internet access 2005–2025 (technology, difficulty 2)
// ---------------------------------------------------------------------------

const lineInternetAccess: WritingBankTask = {
  slug: "ielts-wb-at1-line-internet-access",
  title: "Home internet access 2005–2025",
  channel: "academic",
  taskType: "task-1",
  family: "line",
  tier: "practice",
  topic: "technology",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The line graph below shows the percentage of households with internet access at home in three types of area in one country between 2005 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "line",
    title: "Households with home internet access by area, 2005–2025",
    unit: "%",
    xLabel: "Year",
    yLabel: "Households with home internet access (%)",
    xPoints: ["2005", "2010", "2015", "2020", "2025"],
    series: [
      { name: "Capital city", values: [55, 78, 88, 93, 96] },
      { name: "Regional towns", values: [38, 62, 76, 85, 90] },
      { name: "Rural areas", values: [12, 28, 51, 70, 81] },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: access grew in all three areas, rural growth was fastest, and the divide narrowed.",
      keywords: ["overall", "grew", "rose", "all three", "every", "rural", "fastest", "divide", "narrowed", "gap"],
    },
    {
      key: "capital",
      description: "Reports the capital's series with figures, from 55% in 2005 to 96% in 2025.",
      keywords: ["capital", "55", "96", "highest", "led", "throughout", "steadily", "per cent"],
    },
    {
      key: "rural",
      description: "Reports rural areas' growth from 12% to 81%, more than sixfold.",
      keywords: ["rural", "12", "81", "sixfold", "lowest", "least", "growth", "began", "far"],
    },
    {
      key: "gap",
      description: "Quantifies the narrowing divide from 43 percentage points to 15 points.",
      keywords: ["43", "15", "points", "gap", "divide", "narrowed", "difference", "2005", "2025"],
    },
    {
      key: "trend-language",
      description: "Uses past tense trend verbs with 'from…to' framing for the two decades.",
      keywords: ["rose", "climbed", "grew", "from", "to", "between", "during", "period"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Five points at five-year intervals: describe each line's shape, not just endpoints.",
        "Three series form one hierarchy that never changes rank.",
        "A past period, 2005 to 2025: past simple throughout.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "All three lines climb, and access becomes near-universal in the capital.",
        "Rural areas grow more than sixfold, from 12% to 81%.",
        "The capital-rural gap narrows from 43 points to 15 — the key comparison.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: three areas, one country, twenty years.",
        "Overview: universal growth, fastest at the bottom, narrowing divide.",
        "Body 1: the capital and regional towns, the upper pair.",
        "Body 2: rural areas, the sixfold rise, and the gap arithmetic.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The line graph shows the percentage of households with internet access at home in the capital city, in regional towns and in rural areas of one country between 2005 and 2025.",
      "Overall, home internet access expanded in all three areas over the twenty-year period, and the fastest growth occurred in rural areas, the least connected group at the start. As a result, the divide between the best and worst connected areas narrowed substantially.",
      "In the capital, home access was already common in 2005, at 55% of households, and it rose steadily to 96% by 2025. Regional towns followed a similar path, climbing from 38% to 90%, although they remained slightly behind the capital throughout the two decades.",
      "Rural areas began far lower, at just 12%, yet their access grew more than sixfold to 81%, the strongest expansion on the graph, and they were still gaining ground at the end of the period. The rural-urban divide consequently narrowed from 43 percentage points in 2005 to 15 points in 2025, although rural households remained the least connected group in every year.",
    ],
    wordCount: 179,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Names all three areas and the frame in one sentence, so the reader can attach every later figure to its own line.",
      },
      {
        role: "Overview",
        analysis:
          "Delivers the three headline claims — growth everywhere, fastest growth at the bottom, a narrowing divide — before any figure appears.",
      },
      {
        role: "Body 1 — the upper pair",
        analysis:
          "Gives the capital and regional towns four figures in total, using 'followed a similar path' to link the two series and 'slightly behind' to report a stable ranking.",
      },
      {
        role: "Body 2 — rural areas and the gap",
        analysis:
          "Converts 12-to-81 into 'more than sixfold', then closes with the 43-to-15 point arithmetic that the overview promised, ending on the one remaining imbalance.",
      },
    ],
    vocabulary: [
      { term: "expanded", note: "A rise verb suited to shares climbing towards a ceiling; it avoids repeating 'rose'." },
      { term: "the least connected group", note: "A group label that reports rank without 'worst' or 'bad'." },
      { term: "followed a similar path", note: "Links two series whose shapes match, saving a sentence of repetition." },
      { term: "grew more than sixfold", note: "Proportional phrasing for 12% to 81%, with the hedge 'more than' staying honest." },
      { term: "gaining ground", note: "Idiomatic but neutral: the line is still climbing at the period's end." },
    ],
    grammar: [
      {
        feature: "Past simple for a finished period",
        example: "it rose steadily to 96% by 2025",
        note: "Every verb sits in the past simple because the period closed in 2025.",
      },
      {
        feature: "'although' concession",
        example: "although they remained slightly behind the capital",
        note: "The concession records the unchanging rank inside a sentence about growth.",
      },
      {
        feature: "'yet' as a contrast opener",
        example: "yet their access grew more than sixfold",
        note: "Sentence-initial 'yet' joins a low start to strong growth in four words.",
      },
      {
        feature: "'consequently' result adverb",
        example: "The rural-urban divide consequently narrowed",
        note: "The adverb makes the gap arithmetic a consequence rather than a new fact.",
      },
    ],
    coherence:
      "The report moves from the top of the hierarchy downwards: overview, upper pair, then rural areas and the gap. Each body paragraph opens by naming its group, figures always appear as from-to pairs with years attached, and the final clause echoes the overview's 'least connected' label so the report closes where it began.",
    alternativeExpressions: [
      { insteadOf: "expanded in all three areas", use: "increased across every area" },
      { insteadOf: "followed a similar path", use: "showed much the same pattern" },
      { insteadOf: "grew more than sixfold", use: "rose by a factor of more than six" },
      { insteadOf: "gaining ground", use: "continuing to expand" },
      { insteadOf: "the rural-urban divide", use: "the gap between city and countryside" },
    ],
    commonMistakes: [
      {
        wrong: "The internet became more popular.",
        right: "Home internet access in rural areas rose from 12% to 81%.",
        reason: "A vague claim without figures, area or years reports none of the three lines.",
      },
      {
        wrong: "Rural areas will soon catch the capital.",
        right: "Rural access reached 81% in 2025, 15 points behind the capital.",
        reason: "Predictions go beyond the data; the report ends where the graph ends.",
      },
      {
        wrong: "In 2005 it was 55, in 2010 78, in 2015 88, in 2020 93…",
        right: "Access in the capital rose steadily from 55% in 2005 to 96% in 2025.",
        reason: "Point-by-point narration wastes the word count; anchor figures plus direction verbs select instead.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "access", partOfSpeech: "noun", meaning: "The ability to use a service such as the internet." },
    { word: "household", partOfSpeech: "noun", meaning: "The people living together in one home." },
    { word: "sixfold", partOfSpeech: "adjective/adverb", meaning: "Six times as large as the starting value." },
    { word: "to narrow", partOfSpeech: "verb", meaning: "To become smaller, used of gaps and divides." },
    { word: "divide", partOfSpeech: "noun", meaning: "A marked difference between two groups." },
    { word: "trajectory", partOfSpeech: "noun", meaning: "The path a value follows across a period of change." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 7. Pie pair — waste composition and recycling (environment, difficulty 4)
// ---------------------------------------------------------------------------

const pieRecyclingWaste: WritingBankTask = {
  slug: "ielts-wb-at1-pie-recycling-waste",
  title: "Waste composition and recycling",
  channel: "academic",
  taskType: "task-1",
  family: "pie",
  tier: "practice",
  topic: "environment",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The pie charts below show the composition of household waste in the general waste bin and in the recycling bin in one city in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "pie",
    title: "Composition of household waste by bin, 2024",
    unit: "%",
    pies: [
      {
        caption: "General waste bin",
        slices: [
          { label: "Food and garden waste", value: 34 },
          { label: "Paper and card", value: 21 },
          { label: "Plastic", value: 17 },
          { label: "Glass", value: 9 },
          { label: "Metal", value: 5 },
          { label: "Other waste", value: 14 },
        ],
      },
      {
        caption: "Recycling bin",
        slices: [
          { label: "Paper and card", value: 32 },
          { label: "Glass", value: 24 },
          { label: "Plastic", value: 16 },
          { label: "Metal", value: 12 },
          { label: "Food and garden waste", value: 3 },
          { label: "Other waste", value: 13 },
        ],
      },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: the general bin is dominated by food and garden waste, the recycling bin by dry materials such as paper and glass.",
      keywords: ["overall", "food", "garden", "paper", "glass", "dominates", "largest", "biggest", "dry", "materials"],
    },
    {
      key: "food-contrast",
      description: "Contrasts food and garden waste: 34% of the general bin against 3% of the recycling bin.",
      keywords: ["34", "3", "food", "garden", "ten", "times", "general", "bin", "largest", "component"],
    },
    {
      key: "dry-materials",
      description: "Reports paper and card (32% against 21%) and glass (24% against 9%) with figures.",
      keywords: ["paper", "card", "32", "21", "glass", "24", "9", "recycling", "share"],
    },
    {
      key: "similar-shares",
      description: "Notes plastic's near-identical shares (17% against 16%), metal (5% against 12%) and other waste (14% against 13%).",
      keywords: ["plastic", "17", "16", "metal", "other", "waste", "13", "14", "similar", "respectively"],
    },
    {
      key: "share-discipline",
      description: "Compares shares within each bin, never amounts of material.",
      keywords: ["share", "proportion", "composition", "accounted", "makes", "per cent", "%", "component"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Two pies are two different wholes: compare shares, never tonnages.",
        "Six matching categories on both sides: organise by category story.",
        "One year, 2024: present simple keeps the report consistent.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Food and garden waste fills 34% of general waste but only 3% of recycling.",
        "Paper, card and glass hold far bigger shares of the recycling bin.",
        "The other waste category is large in both bins — a striking similarity.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: two bins, one city, composition in 2024.",
        "Overview: wet waste leads one bin, dry materials the other.",
        "Body 1: the three categories that differ most between the bins.",
        "Body 2: the categories with similar shares, closing on other waste.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The pie charts compare the composition of household waste in the general waste bin with that of the recycling bin in one city in 2024.",
      "Overall, the two bins hold very different mixtures: food and garden waste dominates the general bin, whereas the recycling bin is led by dry materials, above all paper and card and glass. Both bins also contain a sizeable share of other waste.",
      "Food and garden waste is the largest single component of the general bin at 34%, more than ten times its 3% share in the recycling bin. Paper and card shows the opposite pattern, accounting for 32% of the recycling bin, its largest slice, against 21% of general waste. Glass is similarly concentrated in the recycling stream, at 24% compared with 9%.",
      "The remaining materials tell a more mixed story. Plastic makes up a nearly identical share of both bins, at 17% of general waste and 16% of recycling, while metal is somewhat more prominent in the recycling bin, at 12% against 5%. The other waste category is strikingly large in both bins, at 14% and 13% respectively, a finding that points to a fair amount of material resisting neat classification.",
    ],
    wordCount: 197,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Frames the two bins as one comparison in a single sentence, warning the reader implicitly that the two wholes differ before any data appears.",
      },
      {
        role: "Overview",
        analysis:
          "Gives the two opposing compositions — wet dominance against dry leadership — plus the shared other waste feature, all without figures.",
      },
      {
        role: "Body 1 — the contrasts",
        analysis:
          "Handles the three most unequal categories with paired shares and one ratio conversion ('more than ten times'), which is where this task's marks are won.",
      },
      {
        role: "Body 2 — the similarities",
        analysis:
          "Covers plastic, metal and other waste with 'nearly identical' and 'respectively', then closes with a cautious interpretation of the other waste slices.",
      },
    ],
    vocabulary: [
      { term: "composition", note: "The technical noun for what a mixture is made of — the chart's own subject." },
      { term: "the largest single component", note: "Ranking phrasing that names a slice's position without 'biggest'." },
      { term: "more than ten times", note: "A ratio conversion of 34% against 3% — the sharpest contrast on either chart." },
      { term: "concentrated in the recycling stream", note: "'Stream' is the industry word for a waste flow, and 'concentrated' reports a share gap precisely." },
      { term: "a nearly identical share", note: "Similarity language for 17% against 16%, more exact than 'similar'." },
    ],
    grammar: [
      {
        feature: "Present simple for shares",
        example: "Food and garden waste is the largest single component",
        note: "Timeless composition data takes the present simple in every reporting clause.",
      },
      {
        feature: "'whereas' contrast clause",
        example: "whereas the recycling bin is led by dry materials",
        note: "The subordination carries the two-bin comparison that defines the task.",
      },
      {
        feature: "Prepositions for paired figures",
        example: "at 12% against 5%",
        note: "'Against' and 'compared with' compress two shares into one noun phrase.",
      },
      {
        feature: "'respectively' for ordered pairs",
        example: "at 14% and 13% respectively",
        note: "One adverb pairs two figures with two bins without repeating either noun.",
      },
    ],
    coherence:
      "Categories, not bins, drive the order: the overview announces the wet-dry split, body one reports the three categories that differ most, and body two the three that differ least. Every figure is given as a pair in a fixed bin order, general then recycling, and the closing clause interprets the one pattern the shares alone cannot fully explain.",
    alternativeExpressions: [
      { insteadOf: "dominates the general bin", use: "is the leading component of general waste" },
      { insteadOf: "more than ten times", use: "over tenfold the recycling share" },
      { insteadOf: "concentrated in the recycling stream", use: "far more prominent among recyclables" },
      { insteadOf: "a nearly identical share", use: "almost the same proportion" },
      { insteadOf: "resisting neat classification", use: "that cannot easily be sorted" },
    ],
    commonMistakes: [
      {
        wrong: "More paper is recycled than thrown away.",
        right: "Paper and card accounts for 32% of the recycling bin and 21% of general waste.",
        reason: "The pies show shares of different wholes, so amounts of paper cannot be compared at all.",
      },
      {
        wrong: "People should compost their food waste.",
        right: "Food and garden waste makes up 34% of the general bin.",
        reason: "Recommendations are opinions; the task asks only for a report of the shares.",
      },
      {
        wrong: "Glass was 9% and 24% and plastic was 17% and 16%.",
        right: "Attach every share to its bin: glass accounts for 9% of general waste but 24% of recycling.",
        reason: "Ungrouped figure pairs force the reader to guess which number belongs to which bin.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "composition", partOfSpeech: "noun", meaning: "The mixture of parts that something is made from." },
    { word: "component", partOfSpeech: "noun", meaning: "One part of a mixture or whole." },
    { word: "stream", partOfSpeech: "noun", meaning: "A flow of material, as in 'the recycling stream'." },
    { word: "perishable", partOfSpeech: "adjective", meaning: "Likely to decay quickly, like food and garden waste." },
    { word: "to sort", partOfSpeech: "verb", meaning: "To separate waste into categories for collection." },
    { word: "respectively", partOfSpeech: "adverb", meaning: "In the same order as just mentioned, matching pairs of items." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 8. Table — weekly working hours by occupation (workplace, difficulty 3)
// ---------------------------------------------------------------------------

const tableWorkHours: WritingBankTask = {
  slug: "ielts-wb-at1-table-work-hours",
  title: "Weekly working hours by occupation",
  channel: "academic",
  taskType: "task-1",
  family: "table",
  tier: "practice",
  topic: "workplace",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The table below shows the average number of hours worked per week by people in six occupations in 2000 and 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "table",
    title: "Average weekly working hours by occupation, 2000 and 2024",
    unit: "hours per week",
    rowLabel: "Occupation",
    columnLabels: ["Average weekly hours, 2000", "Average weekly hours, 2024"],
    rows: [
      { label: "Hospital doctors", values: [53, 48] },
      { label: "Senior managers", values: [49, 43] },
      { label: "Teachers", values: [44, 41] },
      { label: "Skilled trades workers", values: [41, 38] },
      { label: "Retail workers", values: [35, 32] },
      { label: "Hospitality staff", values: [33, 36] },
    ],
    note: "Figures are annual averages of paid working hours, including overtime, rounded to the nearest hour.",
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: hours fell in five of the six occupations, with hospitality staff the only group to work longer.",
      keywords: ["overall", "fell", "five", "six", "hospitality", "only", "rose", "increased", "longer", "declined"],
    },
    {
      key: "doctors",
      description: "Identifies hospital doctors as working the longest hours in both years (53 and 48).",
      keywords: ["doctors", "53", "48", "longest", "highest", "both", "years", "topped", "hospital"],
    },
    {
      key: "managers",
      description: "Notes senior managers' six-hour fall, the largest decline on the table.",
      keywords: ["managers", "49", "43", "largest", "fall", "decline", "six", "senior", "hours"],
    },
    {
      key: "hospitality",
      description: "Highlights hospitality staff as the exception, rising from 33 to 36 hours.",
      keywords: ["hospitality", "33", "36", "exception", "against", "trend", "rose", "lengthening", "longer"],
    },
    {
      key: "spread",
      description: "Quantifies the narrowing spread from 20 hours between extremes to 12 hours.",
      keywords: ["20", "12", "spread", "range", "narrowed", "difference", "shrank", "gap", "convergence"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Two value columns, one per year: every comparison is 2000 against 2024.",
        "Hours per week are averages including overtime, per the note.",
        "Rows are occupations: report the patterns and exceptions, not all six pairs.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Five falls and one rise — the exception is itself a headline feature.",
        "Doctors stay top, while managers fall furthest, losing six hours.",
        "The longest-to-shortest spread narrows from 20 hours to 12.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: six occupations, two years, average weekly hours.",
        "Overview: the five-one split, the constant leader, the narrowing spread.",
        "Body 1: the four occupations at the top of the table, in ranked order.",
        "Body 2: retail and hospitality, the exception, and the convergence close.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The table shows the average number of hours worked per week in six occupations in 2000 and 2024.",
      "Overall, weekly working hours fell in five of the six occupations, and hospitality staff were the only group to work longer hours in 2024 than in 2000. Hospital doctors recorded the longest hours in both years, and the spread between the longest and shortest working weeks narrowed over the period.",
      "Hospital doctors topped the table in both years, at 53 hours per week in 2000 and 48 hours in 2024. Senior managers recorded the largest fall, their working week shortening from 49 hours to 43, while teachers and skilled trades workers saw moderate declines, from 44 to 41 hours and from 41 to 38 respectively. Retail workers lost three hours, falling to 32.",
      "Hospitality staff moved against the trend, their average week lengthening by three hours from 33 to 36, which left them working longer hours than retail staff for the first time. As a result, the difference between the longest and shortest working weeks shrank from 20 hours in 2000 to 12 hours in 2024, a modest convergence in working patterns across the six occupations.",
    ],
    wordCount: 194,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Paraphrases the rubric and quietly flags the averages that the note explains, keeping the frame honest about what the numbers mean.",
      },
      {
        role: "Overview",
        analysis:
          "Selects the three patterns — five falls, one rise and a narrowing spread — that the body paragraphs will then defend in order.",
      },
      {
        role: "Body 1 — the majority trend",
        analysis:
          "Works down the top of the table with paired hours and the 'largest fall' label for managers, using 'respectively' to carry two occupations' figures inside one clause.",
      },
      {
        role: "Body 2 — the exception",
        analysis:
          "Gives hospitality its three-hour rise, converts it into a ranking change ('longer than retail staff for the first time'), and closes with the 20-to-12 convergence.",
      },
    ],
    vocabulary: [
      { term: "topped the table", note: "A ranking idiom for the highest value; it pairs with 'recorded the largest fall'." },
      { term: "their working week shortening", note: "An absolute construction that reports a fall without another 'fell'." },
      { term: "moved against the trend", note: "The standard phrase for the one exception in an otherwise uniform pattern." },
      { term: "lengthening", note: "The exact antonym of 'shortening', keeping the rise and fall in one word family." },
      { term: "a modest convergence", note: "An interpretive closing label for the narrowing spread, hedged with 'modest'." },
    ],
    grammar: [
      {
        feature: "Past simple for both years",
        example: "Hospital doctors topped the table in both years, at 53 hours per week in 2000",
        note: "Both measurement years are past, so state and change verbs alike take the past simple.",
      },
      {
        feature: "Absolute participle construction",
        example: "their working week shortening from 49 hours to 43",
        note: "A noun-plus-participle clause packs a second occupation's change into the same sentence.",
      },
      {
        feature: "'which left them -ing' result clause",
        example: "which left them working longer hours than retail staff",
        note: "The relative clause turns a figure change into its ranking consequence.",
      },
      {
        feature: "From-to framing of a gap",
        example: "shrank from 20 hours in 2000 to 12 hours in 2024",
        note: "From-to framing quantifies the narrowing precisely rather than vaguely.",
      },
    ],
    coherence:
      "The report is ordered as pattern, majority, exception: the overview's five-one split dictates which occupations belong in which paragraph, and the exception is saved for the final paragraph, where it carries the closing convergence claim. Every figure is a 2000-2024 pair, and ranking vocabulary ('topped', 'largest fall', 'against the trend') keeps six occupations sorted throughout.",
    alternativeExpressions: [
      { insteadOf: "topped the table", use: "recorded the highest figures" },
      { insteadOf: "moved against the trend", use: "bucked the general pattern" },
      { insteadOf: "saw moderate declines", use: "experienced more limited reductions" },
      { insteadOf: "lengthening by three hours", use: "growing by three hours" },
      { insteadOf: "a modest convergence", use: "a slight coming-together of working weeks" },
    ],
    commonMistakes: [
      {
        wrong: "Doctors work 53 hours.",
        right: "Hospital doctors worked an average of 53 hours per week in 2000, falling to 48 by 2024.",
        reason: "A bare figure with no year or 'average' misreports both the table and its note.",
      },
      {
        wrong: "Hospitality staff became lazier.",
        right: "Hospitality staff worked three hours more per week in 2024 than in 2000.",
        reason: "Judgements about character are opinions; the table reports hours, not attitudes.",
      },
      {
        wrong: "Managers, teachers, trades, retail, doctors and hospitality all changed.",
        right: "Group the occupations by direction of change and quantify the exceptions.",
        reason: "Listing every row shows no selection; the rubric asks for main features first.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "occupation", partOfSpeech: "noun", meaning: "A person's job or line of work." },
    { word: "average", partOfSpeech: "noun/adjective", meaning: "The typical value across a group, calculated as a mean." },
    { word: "overtime", partOfSpeech: "noun", meaning: "Hours worked beyond the normal contracted amount." },
    { word: "exception", partOfSpeech: "noun", meaning: "The one case that does not follow the general pattern." },
    { word: "convergence", partOfSpeech: "noun", meaning: "The process of becoming more similar, as the working weeks did." },
    { word: "spread", partOfSpeech: "noun", meaning: "The distance between the highest and lowest values." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 9. Bar chart — print and e-book sales (culture, difficulty 4)
// ---------------------------------------------------------------------------

const barBookSales: WritingBankTask = {
  slug: "ielts-wb-at1-bar-book-sales",
  title: "Print and e-book sales",
  channel: "academic",
  taskType: "task-1",
  family: "bar",
  tier: "practice",
  topic: "culture",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The bar chart below shows the sales of printed books and e-books in one country between 2013 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "bar",
    title: "Printed book and e-book sales, 2013–2025",
    unit: "millions of copies",
    xLabel: "Year",
    yLabel: "Sales (millions of copies)",
    categories: ["2013", "2016", "2019", "2022", "2025"],
    series: [
      { name: "Printed books", values: [240, 210, 185, 170, 165] },
      { name: "E-books", values: [65, 110, 140, 155, 168] },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: print fell, e-books more than doubled, and the formats swapped places in 2025.",
      keywords: ["overall", "print", "fell", "declined", "e-book", "doubled", "overtook", "2025", "formats", "changed"],
    },
    {
      key: "print-trend",
      description: "Describes print's decline through 240, 210, 185, 170 and 165 million, noting that it slowed.",
      keywords: ["240", "210", "185", "170", "165", "print", "fell", "decline", "slowed", "easing"],
    },
    {
      key: "e-book-trend",
      description: "Describes e-books' rise from 65 to 168 million, with growth slowing in the later years.",
      keywords: ["65", "110", "140", "155", "168", "million", "e-book", "rose", "climbed", "growth"],
    },
    {
      key: "crossover",
      description: "Identifies the 2025 crossover, when e-book sales passed print by three million copies.",
      keywords: ["2025", "168", "165", "three", "million", "margin", "first", "time", "ahead", "passed"],
    },
    {
      key: "comparison-language",
      description: "Contrasts the two formats with while or whereas and past-tense verbs.",
      keywords: ["while", "whereas", "compared", "contrast", "opposite", "formats", "sales", "respectively"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Two series across five snapshot years at three-year intervals.",
        "Units are millions of copies sold in one country.",
        "The story is a crossover, so track both levels and the gap between them.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Print falls in every interval, but each fall is smaller than the last.",
        "E-books more than double, overtaking print only in the final year.",
        "The gap narrows from 175 million to almost nothing, then flips.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: two formats, one market, 2013 to 2025.",
        "Overview: opposite trends, the 2025 crossover, a near-flat combined market.",
        "Body 1: print's decline and its slowing rhythm.",
        "Body 2: e-books' rise and the crossover margin.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The bar chart compares the sales of printed books with those of e-books in one country between 2013 and 2025.",
      "Overall, print sales fell steadily throughout the twelve-year period, whereas e-book sales more than doubled, and the two formats changed places in 2025, when digital sales moved ahead for the first time. The combined market grew only modestly, because rising digital sales roughly offset the decline of print.",
      "Printed books began the period well ahead, with 240 million copies sold in 2013, but sales fell in every interval, dropping to 210 million by 2016, 185 million by 2019 and 170 million by 2022, before easing only slightly to 165 million in 2025. The rate of decline therefore slowed steadily as the period went on.",
      "E-books travelled in the opposite direction, rising from 65 million in 2013 to 110 million three years later and to 140 million by 2019. Growth then slowed, with sales of 155 million in 2022 and 168 million in 2025, but that final figure was enough to carry digital sales past print for the first time, by a margin of three million copies.",
    ],
    wordCount: 186,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Frames the two formats and the period in one sentence, preparing the reader for a comparison that ends in a change of lead.",
      },
      {
        role: "Overview",
        analysis:
          "Gives the three headline claims — print decline, digital doubling, the 2025 crossover — plus the near-flat combined market, all figure-free.",
      },
      {
        role: "Body 1 — print",
        analysis:
          "Reports all five print figures but organises them around the slowing rhythm of the decline, so what could be a list becomes a trend description.",
      },
      {
        role: "Body 2 — e-books and the crossover",
        analysis:
          "Gives the digital series with 'growth then slowed', then lands the report's key moment: 168 against 165, a margin of three million.",
      },
    ],
    vocabulary: [
      { term: "changed places", note: "Idiomatic phrasing for a crossover in rank, previewed in the overview." },
      { term: "roughly offset", note: "A hedged accounting verb explaining the near-flat combined market." },
      { term: "before easing only slightly", note: "Signals the smallest fall of the series, where the decline decelerates." },
      { term: "the rate of decline therefore slowed", note: "Turns five numbers into a second-order observation — how the fall itself changed." },
      { term: "carry digital sales past print", note: "Movement phrasing for the crossover that avoids repeating 'overtook'." },
    ],
    grammar: [
      {
        feature: "Past simple across a closed period",
        example: "sales fell in every interval, dropping to 210 million by 2016",
        note: "Every verb reports finished history, so the past simple carries the whole report.",
      },
      {
        feature: "Participle clause for sequences",
        example: "rising from 65 million in 2013 to 110 million three years later",
        note: "The -ing clause lets one sentence hold three data points in order.",
      },
      {
        feature: "'enough to' result clause",
        example: "that final figure was enough to carry digital sales past print",
        note: "The structure converts a level into a consequence, which is the crossover itself.",
      },
      {
        feature: "'whereas' contrast",
        example: "whereas e-book sales more than doubled",
        note: "One subordinator holds both format trends inside a single overview sentence.",
      },
    ],
    coherence:
      "The report mirrors the market's own arc: formats far apart, then converging, then swapped. The overview promises the crossover, body one proves the print decline that makes it possible, and body two delivers it with the three-million margin. Direction verbs stay consistent — print 'fell', digital 'rose' — and the final clause ties the margin back to the overview's 'changed places'.",
    alternativeExpressions: [
      { insteadOf: "changed places", use: "swapped positions / reversed their ranking" },
      { insteadOf: "roughly offset", use: "more or less balanced out" },
      { insteadOf: "easing only slightly", use: "falling by just a small margin" },
      { insteadOf: "the rate of decline slowed", use: "the falls became progressively smaller" },
      { insteadOf: "carry digital sales past print", use: "push e-books ahead of print" },
    ],
    commonMistakes: [
      {
        wrong: "E-books became more popular than paper books.",
        right: "E-book sales rose from 65 million to 168 million, overtaking print sales in 2025.",
        reason: "Popularity is an opinion; the chart measures copies sold, so report the figures.",
      },
      {
        wrong: "Print sales will disappear soon.",
        right: "Print sales fell in every interval, though the rate of decline slowed.",
        reason: "Forecasting goes beyond the data; the report stops where the chart stops.",
      },
      {
        wrong: "In 2013 print was 240 and e-books 65, in 2016 print 210 and e-books 110…",
        right: "Quote three or four anchors per format and let direction verbs carry the rest.",
        reason: "Reading both bars of every year aloud is mechanical; selection is the rubric's first demand.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "format", partOfSpeech: "noun", meaning: "One version of a product, here print versus digital." },
    { word: "crossover", partOfSpeech: "noun", meaning: "The point at which two trends exchange positions." },
    { word: "margin", partOfSpeech: "noun", meaning: "The difference by which one value leads another." },
    { word: "to offset", partOfSpeech: "verb", meaning: "To balance the effect of an opposite movement." },
    { word: "interval", partOfSpeech: "noun", meaning: "The gap between two measured years, here three years." },
    { word: "combined", partOfSpeech: "adjective", meaning: "Added together, as in the combined market total." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 10. Line graph — average temperatures in three cities (science, difficulty 3)
// ---------------------------------------------------------------------------

const lineCityTemperatures: WritingBankTask = {
  slug: "ielts-wb-at1-line-city-temperatures",
  title: "Average temperatures in three cities",
  channel: "academic",
  taskType: "task-1",
  family: "line",
  tier: "practice",
  topic: "science",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 1200,
  prompt:
    "The line graph below shows the average monthly temperatures in three cities throughout 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "line",
    title: "Average monthly temperatures in three cities, 2024",
    unit: "°C",
    xLabel: "Month",
    yLabel: "Average temperature (°C)",
    xPoints: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
    series: [
      { name: "Singapore", values: [27, 28, 28, 28, 28, 27] },
      { name: "London", values: [5, 8, 13, 19, 15, 8] },
      { name: "Sydney", values: [23, 22, 15, 13, 16, 20] },
    ],
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview: Singapore is stable year-round, while London and Sydney follow opposite seasonal cycles.",
      keywords: ["overall", "singapore", "stable", "london", "sydney", "opposite", "seasonal", "cycle", "constant", "directions"],
    },
    {
      key: "singapore",
      description: "Reports Singapore's narrow 27–28°C range across the whole year.",
      keywords: ["singapore", "27", "28", "range", "single", "degree", "stable", "barely", "little"],
    },
    {
      key: "london",
      description: "Reports London's cycle from 5°C in January to a July peak of 19°C and back to 8°C.",
      keywords: ["london", "5", "19", "july", "january", "peak", "range", "14", "cooling", "warms"],
    },
    {
      key: "sydney",
      description: "Reports Sydney's mirror-image cycle: warmest in January at 23°C, coolest in July at 13°C.",
      keywords: ["sydney", "23", "13", "january", "july", "warmest", "coolest", "mirror", "climb", "towards"],
    },
    {
      key: "comparison",
      description: "Compares the lines: the temperate pair crosses twice, and Singapore stays above both.",
      keywords: ["cross", "twice", "above", "highest", "warmest", "coolest", "hemispheres", "opposite", "while"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame",
      notes: [
        "Six months at two-month intervals: describe each city's shape, not every point.",
        "Degrees Celsius for one year, 2024: choose one tense and hold it.",
        "Three cities with three different climates — the contrast is the task.",
      ],
    },
    {
      heading: "Step 2 — Find the headline features",
      notes: [
        "Singapore barely moves: 27 to 28°C all year.",
        "London peaks in July while Sydney bottoms out in July — mirror images.",
        "The two temperate lines cross twice, in early summer and early autumn.",
      ],
    },
    {
      heading: "Step 3 — Plan the paragraphs",
      notes: [
        "Introduction: three cities, monthly averages, 2024.",
        "Overview: one stable line, two opposite cycles.",
        "Body 1: Singapore first, then London, the simplest cycle.",
        "Body 2: Sydney's mirror image and the two crossings.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The line graph compares average monthly temperatures in three cities, Singapore, London and Sydney, throughout 2024.",
      "Overall, Singapore's climate is strikingly stable, while London and Sydney both follow a marked seasonal cycle that runs in opposite directions: each city is at its warmest when the other is at its coolest, and their two lines cross twice during the year.",
      "Singapore's average temperature stays within a single degree of 28°C in every month shown, ranging from 27°C in January and November to 28°C from March to September. London, by contrast, warms steadily from 5°C in January to a July peak of 19°C before cooling back to 8°C by November, a total range of 14 degrees.",
      "Sydney's cycle is the mirror image of London's: its warmest month is January, at 23°C, and its coolest is July, at 13°C, after which temperatures climb again towards 20°C in November. The two temperate lines consequently cross once in early summer and once in early autumn, while Singapore sits above both of them in every month, never falling below 27°C.",
    ],
    wordCount: 184,
    bandEstimate: "Band 8.0 estimate — an educational estimate, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction",
        analysis:
          "Names the three cities and the measure in one sentence, so the reader can track each line by name from the second paragraph on.",
      },
      {
        role: "Overview",
        analysis:
          "Delivers the report's organising contrast — stability against mirrored seasonality — plus the double crossing, all without a single figure.",
      },
      {
        role: "Body 1 — Singapore and London",
        analysis:
          "Handles the flat line with 'within a single degree', then London's cycle with its three anchors (5, 19, 8) and the 14-degree range as a computed close.",
      },
      {
        role: "Body 2 — Sydney and the crossings",
        analysis:
          "Mirrors the London paragraph's structure for Sydney, then reports the two crossings and Singapore's constant position above both, resolving the overview.",
      },
    ],
    vocabulary: [
      { term: "strikingly stable", note: "An intensifier plus adjective captures a line that barely moves — the graph's first feature." },
      { term: "runs in opposite directions", note: "The frame phrase for mirror-image cycles; it licenses the whole comparison." },
      { term: "within a single degree of 28°C", note: "Range phrasing that reports six data points in seven words." },
      { term: "the mirror image of", note: "The exact term for Sydney's inverted London cycle." },
      { term: "temperate lines", note: "A climate adjective doing grouping work: the two seasonal cities versus the tropical one." },
    ],
    grammar: [
      {
        feature: "Present simple for recurring climate",
        example: "Singapore's average temperature stays within a single degree of 28°C",
        note: "Climatological averages recur every year, so the present simple is the natural tense.",
      },
      {
        feature: "'at + figure' apposition",
        example: "its warmest month is January, at 23°C",
        note: "'At' attaches values to nouns without needing a reporting verb.",
      },
      {
        feature: "'after which' time clause",
        example: "after which temperatures climb again towards 20°C in November",
        note: "The clause sequences the recovery without starting a new sentence.",
      },
      {
        feature: "'while' concession-contrast",
        example: "while Singapore sits above both of them in every month",
        note: "A final contrast that resolves the three-way comparison in one clause.",
      },
    ],
    coherence:
      "The report uses a one-then-two structure: the stable line first, then the mirrored pair, in the order the overview announces. The Sydney paragraph deliberately echoes the London paragraph's grammar so the mirror is felt as well as stated, and the closing clause returns to Singapore, completing the triangle the introduction set up.",
    alternativeExpressions: [
      { insteadOf: "strikingly stable", use: "remarkably constant throughout the year" },
      { insteadOf: "runs in opposite directions", use: "move in ways that mirror each other" },
      { insteadOf: "within a single degree of 28°C", use: "between 27°C and 28°C at all times" },
      { insteadOf: "the mirror image of London's", use: "the exact reverse of London's pattern" },
      { insteadOf: "sits above both of them", use: "remains warmer than either city" },
    ],
    commonMistakes: [
      {
        wrong: "London is cold and Singapore is hot.",
        right: "London's average ranges from 5°C in January to 19°C in July, while Singapore stays between 27°C and 28°C.",
        reason: "Vague adjectives without figures describe no month and make no comparison.",
      },
      {
        wrong: "Sydney is hot in July.",
        right: "Sydney's coolest month is July, at 13°C.",
        reason: "July is midwinter in the southern hemisphere; the assumption flips the data.",
      },
      {
        wrong: "Singapore has the best climate.",
        right: "Singapore records the narrowest temperature range of the three cities.",
        reason: "'Best' is a judgement; the graph reports measured averages only.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "average", partOfSpeech: "noun/adjective", meaning: "The typical value across a set of months or readings." },
    { word: "range", partOfSpeech: "noun", meaning: "The distance between a series' lowest and highest values." },
    { word: "temperate", partOfSpeech: "adjective", meaning: "Having a moderate climate with distinct seasons." },
    { word: "tropical", partOfSpeech: "adjective", meaning: "Hot and humid all year, with little seasonal change." },
    { word: "peak", partOfSpeech: "noun", meaning: "The highest point of a cycle, such as London's July." },
    { word: "to mirror", partOfSpeech: "verb", meaning: "To show the reverse pattern of something else." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

export const at1CPracticeTasks: WritingBankTask[] = [
  barMuseumVisitors,
  lineBusUse,
  pieHouseholdSpending,
  tableUniversityApplications,
  barRenewableShare,
  lineInternetAccess,
  pieRecyclingWaste,
  tableWorkHours,
  barBookSales,
  lineCityTemperatures,
];
