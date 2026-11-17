/**
 * Academic Task 1 practice bank — batch D (PROMPT 54 question-bank expansion).
 *
 * Ten original practice-tier tasks for the three hardest Academic Task 1
 * families: three mixed chart pairs (bar + line, bar + pie, bar + line), four
 * process diagrams and three before-and-after maps. Every task carries the
 * complete practice payload — compact planning notes, a full model answer
 * with honest arithmetic, the eight-element analysis at practice floors and
 * a topic vocabulary bank. No level samples: practice tier keeps the
 * teaching payload lean. All band comments are educational estimates, never
 * official scores; nothing here is official IELTS examination content.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

// ---------------------------------------------------------------------------
// 1. Mixed charts — home energy use and its sources
// ---------------------------------------------------------------------------

const energyHomes: WritingBankTask = {
  slug: "ielts-wb-at1-mixed-energy-homes",
  title: "Home energy use and its sources",
  channel: "academic",
  taskType: "task-1",
  family: "mixed",
  tier: "practice",
  topic: "technology",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The charts below give information about electricity in homes in one country. The bar chart shows how much electricity an average household used in 2024, broken down by appliance group, and the line graph shows the number of homes fitted with solar panels between 2016 and 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "mixed",
    title: "Home electricity and rooftop solar, 2016–2024",
    unit: "kilowatt hours and thousands of homes",
    bar: {
      kind: "bar",
      title: "Electricity used by an average household, 2024",
      unit: "kWh per year",
      xLabel: "Appliance group",
      yLabel: "Electricity used (kWh per year)",
      horizontal: true,
      categories: [
        "Space heating & cooling",
        "Water heating",
        "Refrigeration",
        "Lighting",
        "Laundry & dishwashing",
        "Home entertainment",
      ],
      series: [
        { name: "Electricity used per household", values: [2150, 1480, 610, 540, 460, 330] },
      ],
    },
    second: {
      kind: "line",
      title: "Homes fitted with solar panels, 2016–2024",
      unit: "thousands of homes",
      xLabel: "Year",
      yLabel: "Homes with solar panels (thousands)",
      xPoints: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      series: [
        { name: "Homes with solar panels", values: [45, 62, 84, 115, 149, 196, 251, 318, 402] },
      ],
    },
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview spanning both panels: heating dominates household electricity use while solar adoption grew rapidly.",
      keywords: ["overall", "heating", "dominat", "dwarf", "solar", "grow", "accelerat", "both"],
    },
    {
      key: "bar-panel",
      description: "Reports the bar chart accurately, comparing the leading appliance groups with the smallest users.",
      keywords: ["2,150", "2150", "1,480", "1480", "refrigeration", "lighting", "entertainment", "kilowatt", "kWh"],
    },
    {
      key: "line-panel",
      description: "Describes the line graph, including its accelerating growth and the 2024 total.",
      keywords: ["45,000", "115,000", "402,000", "2016", "2024", "thousands", "quarter", "nine"],
    },
    {
      key: "cross-link",
      description: "Links the two panels explicitly, contrasting where electricity is used with how households now supply it.",
      keywords: ["both", "together", "chart", "graph", "panel", "demand", "supply", "taken"],
    },
    {
      key: "report-register",
      description: "Reports the data without explaining causes or advising readers about energy saving.",
      keywords: ["while", "whereas", "compared", "roughly", "further", "against", "meanwhile"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read both panels (1 minute)",
      notes: [
        "Two panels, two measures: kilowatt hours per appliance group for 2024, and thousands of solar-equipped homes across 2016–2024.",
        "The bar panel is a single-year snapshot, so past simple; the line panel is a finished trend, also past simple.",
        "Check both axes before writing: kilowatt hours are never percentages, and the line counts homes, not panels.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: one sentence naming both panels and what each measures.",
        "Overview: two claims that span both panels — heating's dominance and accelerating solar adoption.",
        "Body 1 owns the bar chart, Body 2 owns the line graph, and the final sentence links demand with supply.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The charts offer two perspectives on domestic electricity: a bar chart comparing the amounts used by each group of appliances in an average household in 2024, and a line graph showing how many homes were fitted with solar panels between 2016 and 2024.",
      "Overall, heating and cooling together dwarf every other use of electricity in the home, while the number of households with solar panels grew continuously, and at an accelerating rate, throughout the nine years.",
      "The average household consumed 5,570 kilowatt hours in 2024, and well over half of this went on warming and cooling: space heating and cooling alone took 2,150 units and water heating a further 1,480. Refrigeration (610 units) and lighting (540) sat in the middle of the range, while laundry and dishwashing, at 460 units, and home entertainment, at 330, were the smallest users.",
      "Solar installations, meanwhile, gathered speed every year. From 45,000 homes in 2016 the total reached 115,000 by 2019, passed a quarter of a million in 2022 and stood at 402,000 in 2024, roughly nine times the starting figure. Each year's increase was larger than the one before, so the curve steepens steadily. Taken together, the two charts show a demand side still dominated by heating matched against a supply side that is moving steadily into households' own hands.",
    ],
    wordCount: 217,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric into 'two perspectives on domestic electricity' and immediately labels what each panel measures, so the reader can track which chart is being reported at every later point.",
      },
      {
        role: "Overview",
        analysis:
          "Two headline claims that deliberately span both panels — heating's dominance and accelerating adoption — stated at pattern level without a single figure.",
      },
      {
        role: "Body 1 — the bar panel",
        analysis:
          "Opens with the computed total of 5,570 units, proving selection rather than listing, then walks down the ranking in three tiers: the two heating categories, the middle pair, and the two smallest users.",
      },
      {
        role: "Body 2 — the line panel and the link",
        analysis:
          "Anchors the curve at four years, observes that each annual step exceeds the last, and closes by setting demand against supply — the cross-panel move this task type rewards.",
      },
    ],
    vocabulary: [
      { term: "two perspectives on domestic electricity", note: "Frames the panels as complementary views of one system, which licenses the closing link." },
      { term: "dwarf every other use", note: "A comparative verb that ranks heating without repeating 'higher than'." },
      { term: "well over half", note: "Hedged proportion covering the 3,630 of 5,570 units taken by the two heating groups." },
      { term: "gathered speed every year", note: "Acceleration language that compresses the whole 2016–2024 curve into three words." },
    ],
    grammar: [
      {
        feature: "Past simple for finished data",
        example: "the total reached 115,000 by 2019",
        note: "Both panels report completed periods, so past simple carries every figure in the report.",
      },
      {
        feature: "Fronted participle clause",
        example: "Taken together, the two charts show a demand side still dominated by heating",
        note: "One participle opens the final sentence and lets both panels share it.",
      },
      {
        feature: "Bracketed comparative ellipsis",
        example: "Refrigeration (610 units) and lighting (540) sat in the middle of the range",
        note: "Brackets let the second figure drop its unit, keeping one sentence light.",
      },
    ],
    coherence:
      "The report is built as two panels and one bridge: paragraph three owns the bar chart, paragraph four owns the line graph, and the bridge is prepared in the introduction ('two perspectives') and completed in the final sentence ('taken together'). No figure is reported in both panels, and each body paragraph opens by naming the panel it is about to summarise.",
    alternativeExpressions: [
      { insteadOf: "dwarf every other use", use: "far outweigh all other categories" },
      { insteadOf: "well over half", use: "a clear majority of the total" },
      { insteadOf: "gathered speed every year", use: "accelerated throughout the period" },
    ],
    commonMistakes: [
      {
        wrong: "Heating is the biggest because houses are badly insulated.",
        right: "Space heating and cooling consumed 2,150 units, more than any other group.",
        reason: "The chart shows amounts, not causes; insulation explanations are invention and cost Task Achievement marks.",
      },
      {
        wrong: "Solar panels were 402,000 in 2024.",
        right: "402,000 homes had solar panels in 2024.",
        reason: "The line counts homes fitted with panels, not the panels themselves; misreading the axis misreports the trend.",
      },
      {
        wrong: "In 2016 there are 45,000 homes with panels.",
        right: "In 2016, 45,000 homes had panels.",
        reason: "The graph's years are finished past time, so present simple blurs the timeline the report exists to trace.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "appliance", partOfSpeech: "noun", meaning: "A machine or device used in the home, such as a heater or a fridge." },
    { word: "household", partOfSpeech: "noun", meaning: "One home, considered as a single unit of consumption." },
    { word: "consumption", partOfSpeech: "noun", meaning: "The amount of something used up over a period." },
    { word: "kilowatt hour", partOfSpeech: "noun", meaning: "The standard unit in which electricity use is measured." },
    { word: "adoption", partOfSpeech: "noun", meaning: "The process of taking up a new technology or practice." },
    { word: "to gather speed", partOfSpeech: "phrase", meaning: "To grow faster and faster, as the installations did." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Process diagram — paper recycling
// ---------------------------------------------------------------------------

const paperRecycling: WritingBankTask = {
  slug: "ielts-wb-at1-process-paper-recycling",
  title: "Paper recycling",
  channel: "academic",
  taskType: "task-1",
  family: "process",
  tier: "practice",
  topic: "environment",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The diagram below shows the seven stages in the recycling of used paper, from kerbside collection to the delivery of new paper reels to manufacturers.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "process",
    title: "Paper recycling: from kerbside collection to new reels",
    stages: [
      { label: "Collection", caption: "Used newspapers, boxes and office paper are gathered from kerbside bins and recycling banks." },
      { label: "Sorting", caption: "The material is separated by grade, and contaminants such as plastics and staples are removed." },
      { label: "Pulping", caption: "Accepted paper is churned with water and chemicals in a vat until it forms a slurry." },
      { label: "Screening and de-inking", caption: "The pulp is passed through fine screens, and air bubbles lift the ink out of the fibres." },
      { label: "Pressing and drying", caption: "The clean pulp is squeezed between rollers and dried into a continuous sheet." },
      { label: "Rolling", caption: "The dried paper is wound into large reels ready for cutting." },
      { label: "Dispatch", caption: "Reels are cut, packed and delivered to manufacturers, who print on them again." },
    ],
    note: "The process is cyclical: products made from the new reels eventually return to the collection banks.",
  },
  requirements: [
    {
      key: "overview",
      description: "Opens with an overview that names the seven stages and the cyclical shape of the process.",
      keywords: ["overall", "cyclical", "seven", "stage", "loop", "cycle", "begin", "end"],
    },
    {
      key: "all-stages",
      description: "Covers all seven stages in order, from kerbside collection to the dispatch of new reels.",
      keywords: ["collect", "sort", "pulp", "de-ink", "press", "dry", "reel", "dispatch"],
    },
    {
      key: "passive",
      description: "Uses the present-simple passive as the main reporting voice, keeping workers out of the report.",
      keywords: ["are", "is", "gathered", "sorted", "pulped", "pressed", "wound", "delivered"],
    },
    {
      key: "sequencing",
      description: "Moves between stages with varied sequencing devices instead of one repeated connector.",
      keywords: ["first", "then", "next", "once", "after", "before", "when", "finally"],
    },
    {
      key: "material",
      description: "Tracks the material through its changes: waste paper becomes slurry, then sheets, then new products.",
      keywords: ["paper", "fibre", "slurry", "pulp", "sheet", "reel", "fibre"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame (30 seconds)",
      notes: [
        "No data and no dates: present simple throughout, passive voice, and no trend verbs anywhere.",
        "Seven numbered stages run left to right; the note says the process is cyclical.",
        "The material changes state twice: sorted paper becomes slurry, and slurry becomes a dried sheet.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: paraphrase the rubric and state the span, collection to dispatch.",
        "Overview: cyclical shape plus the refining thread, with no stage detail yet.",
        "Body 1: stages one to four; Body 2: stages five to seven, closing the loop back to the banks.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The diagram illustrates the seven stages by which used paper is recycled, from its collection as household waste to the delivery of fresh reels to manufacturers.",
      "Overall, the process is cyclical: waste paper is sorted and broken down into fibre, then re-formed into sheets, and the new products made from those sheets eventually return to the collection banks.",
      "Recycling begins when used newspapers, boxes and office paper are gathered from kerbside bins and banks. Next, the material is sorted by grade, and contaminants such as plastics and staples are removed; only the accepted grades continue. The sorted paper is then pulped, being churned with water and chemicals in a vat until it collapses into a slurry of separate fibres. In the fourth stage this slurry is screened and de-inked: fine meshes catch any remaining debris while air bubbles lift the ink out of the pulp.",
      "The clean fibre is next pressed between rollers and dried into a continuous sheet, which is wound into large reels, cut and packed, and dispatched to printers and packers. Manufacturers then turn the reels into new paper products, and once those products have been used they re-enter the loop at the collection stage, closing the cycle.",
    ],
    wordCount: 201,
    bandEstimate:
      "Band 8.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and compresses the process into one span — household waste to fresh reels — so the reader's compass is set before any stage appears.",
      },
      {
        role: "Overview",
        analysis:
          "Names the cyclical shape and the refining thread, which turns a potential list into a story; no stage detail appears at overview level.",
      },
      {
        role: "Body 1 — collection to de-inking (stages 1–4)",
        analysis:
          "Sequences the first four stages with varied devices ('when', 'Next', 'then', 'In the fourth stage') and closes stages with their results, so the paragraph explains rather than merely names.",
      },
      {
        role: "Body 2 — pressing to dispatch (stages 5–7)",
        analysis:
          "Compresses the last three stages into two sentences, then completes the cycle by returning the manufacturers' products to the collection banks.",
      },
    ],
    vocabulary: [
      { term: "collapses into a slurry", note: "A material-as-subject verb that varies the passive without losing formality." },
      { term: "contaminants", note: "The diagram's technical noun for unwanted material, borrowed precisely." },
      { term: "fine meshes catch any remaining debris", note: "Concrete reporting of the screening stage, grounded in the diagram's own wording." },
      { term: "re-enter the loop", note: "The phrasal verb that delivers the cyclical note's claim in the model's own words." },
    ],
    grammar: [
      {
        feature: "Present-simple passive",
        example: "the material is sorted by grade, and contaminants are removed",
        note: "The diagram names no agents, so the passive keeps every sentence impersonal.",
      },
      {
        feature: "Passive participle inside a clause",
        example: "being churned with water and chemicals in a vat",
        note: "One participle attaches the pulping detail to the main verb without a new sentence.",
      },
      {
        feature: "Perfect passive after 'once'",
        example: "once those products have been used",
        note: "The perfect passive marks the completed use that triggers the return to the banks.",
      },
    ],
    coherence:
      "The through-line is the material itself — waste paper, then slurry, then sheet, then new products — and most sentences keep that material as their subject. Sequencers are deliberately varied (when, next, then, in the fourth stage) so no connector repeats twice in a row, and the paragraph break falls at the process's own hinge: the moment the fibre is clean.",
    alternativeExpressions: [
      { insteadOf: "is broken down into fibre", use: "is reduced to separate fibres" },
      { insteadOf: "contaminants are removed", use: "unwanted items are stripped out" },
      { insteadOf: "re-enter the loop", use: "come full circle to the banks" },
    ],
    commonMistakes: [
      {
        wrong: "First, the workers collect the paper and sort it.",
        right: "First, used paper is collected and sorted by grade.",
        reason: "The diagram shows no people; inventing workers adds information the picture never contains.",
      },
      {
        wrong: "The paper is pulped and then screened and then pressed and then wound.",
        right: "The pulp is screened and de-inked, after which it is pressed and wound into reels.",
        reason: "Chaining 'and then' flattens seven distinct stages into a list and repeats one connector.",
      },
      {
        wrong: "Recycling is very important for the planet.",
        right: "The process is cyclical, ending where it began at the collection banks.",
        reason: "Opinions about the environment sit outside the diagram; a process report stays impersonal and factual.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "recycling", partOfSpeech: "noun", meaning: "The processing of used material into new products." },
    { word: "slurry", partOfSpeech: "noun", meaning: "A watery mixture of suspended solids, such as pulped paper." },
    { word: "contaminant", partOfSpeech: "noun", meaning: "An unwanted substance mixed in with the material being processed." },
    { word: "fibre", partOfSpeech: "noun", meaning: "The thread-like structure that paper is made from." },
    { word: "to sort", partOfSpeech: "verb", meaning: "To separate items into groups according to type or quality." },
    { word: "reel", partOfSpeech: "noun", meaning: "A large spool of wound paper ready for printing." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Map — a village, 1990 and today
// ---------------------------------------------------------------------------

const villageDevelopment: WritingBankTask = {
  slug: "ielts-wb-at1-map-village-development",
  title: "A village: 1990 and today",
  channel: "academic",
  taskType: "task-1",
  family: "map",
  tier: "practice",
  topic: "society",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The two maps below show the village of Harlton in 1990 and the same village today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "map",
    title: "The village of Harlton: 1990 and today",
    beforeTitle: "Harlton village, 1990",
    afterTitle: "Harlton village, today",
    before: [
      [{ label: "Farmland" }, { label: "Farmhouse" }, { label: "Farmland" }, { label: "Primary school" }],
      [{ label: "Village shop" }, { label: "Village hall" }, null, { label: "Cottages" }],
      [{ label: "Farmland" }, { label: "Old water mill" }, { label: "Meadow" }, { label: "Orchard" }],
    ],
    after: [
      [{ label: "Housing estate" }, { label: "Guest house" }, { label: "New housing" }, { label: "Primary school" }],
      [{ label: "Supermarket" }, { label: "Village hall" }, { label: "Playground" }, { label: "Cottages" }],
      [{ label: "Country park" }, { label: "Mill museum" }, { label: "Sports field" }, { label: "Car park" }],
    ],
    note: "The lane from the west is the only road into the village in both plans; north is at the top of each map.",
  },
  requirements: [
    {
      key: "overview",
      description: "States the overall transformation from a farming village into a residential and leisure settlement.",
      keywords: ["overall", "farm", "housing", "leisure", "residential", "transform", "character", "change"],
    },
    {
      key: "replaced",
      description: "Identifies the features replaced: the farmland, the shop, the water mill, the meadow and the orchard.",
      keywords: ["farmland", "shop", "mill", "meadow", "orchard", "replace", "cleared", "built"],
    },
    {
      key: "appeared",
      description: "Identifies the new features: housing, guest house, supermarket, playground, museum, sports field, country park and car park.",
      keywords: ["housing", "guest", "supermarket", "playground", "museum", "sports", "park", "car"],
    },
    {
      key: "survived",
      description: "Notes the survivors: the school, the hall and the cottages, in their original positions.",
      keywords: ["school", "hall", "cottage", "remain", "survive", "unchanged", "still", "original"],
    },
    {
      key: "positions",
      description: "Uses compass points and location language to anchor each change in the village.",
      keywords: ["north", "south", "east", "west", "corner", "edge", "beside", "middle", "along"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read both maps (1 minute)",
      notes: [
        "Two eras, 1990 and today: past simple for the earlier map, present perfect for the changes.",
        "North is at the top, and the lane from the west anchors every position.",
        "Organise by fates — replaced, new, surviving — never by walking through the grid.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: paraphrase the rubric and name the two eras.",
        "Overview: farmland built over, character shifted towards housing and leisure, three survivors.",
        "Body 1: the northern edge and the village core; Body 2: the southern strip, closing on the survivors.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The maps show the village of Harlton as it stood in 1990 and the same village today, after three decades of growth.",
      "Overall, the settlement has spread over its surrounding farmland and has exchanged its agricultural character for housing and leisure, although the school, the hall and the cottages still occupy the positions they held in 1990.",
      "Along the northern edge, the two fields that once flanked the farmhouse have been built over: the western one is now a housing estate and the eastern one a further area of new housing, while the farmhouse between them has been converted into a guest house. In the middle of the village, the shop has been replaced by a supermarket, the open ground beside the hall has become a playground, and the row of cottages on the eastern side stands unchanged. The primary school, in the north-eastern corner, has also been retained.",
      "The southern half has been given over to leisure. The remaining farmland in the south-west has been laid out as a country park, the old water mill beside it has been turned into a museum, the central meadow is now a sports field, and the orchard in the south-eastern corner has been cleared for a car park to serve the enlarged village.",
    ],
    wordCount: 211,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and adds the frame the reader needs — three decades of growth — without mentioning a single building.",
      },
      {
        role: "Overview",
        analysis:
          "States the transformation in one before-and-after sentence and flags the three survivors, the map's second key feature, before any detail.",
      },
      {
        role: "Body 1 — the northern edge and the core",
        analysis:
          "Pairs each lost feature with its replacement inside the same clause, then places the playground and the retained school by neighbouring landmarks, demonstrating location language.",
      },
      {
        role: "Body 2 — the southern strip",
        analysis:
          "Works west to east along the southern row — park, museum, sports field, car park — so the four changes arrive in a single sweep with their compass anchors.",
      },
    ],
    vocabulary: [
      { term: "spread over its surrounding farmland", note: "The overview's headline verb: expansion across open land, stronger than 'grew'." },
      { term: "exchanged its agricultural character for", note: "Captures the change of identity, not just of buildings, in one collocation." },
      { term: "has been converted into a guest house", note: "The standard collocation for a building that changes function while keeping its walls." },
      { term: "laid out as a country park", note: "The natural passive for open-air facilities such as parks and sports fields." },
    ],
    grammar: [
      {
        feature: "Present perfect passive for changes",
        example: "the orchard in the south-eastern corner has been cleared for a car park",
        note: "Changes between then and now take present perfect, with the passive keeping buildings as the topic.",
      },
      {
        feature: "Past simple for the 1990 baseline",
        example: "the positions they held in 1990",
        note: "The earlier map is finished past time, so references to it drop back to past simple.",
      },
      {
        feature: "Present simple for current states",
        example: "the row of cottages on the eastern side stands unchanged",
        note: "What stands today takes present simple — the third tense a map report must manage.",
      },
    ],
    coherence:
      "The report divides the village into two zones and audits each in turn — the northern edge and core first, then the southern strip — so every change is anchored to a place before it is named. Compass points and fixed landmarks do the orienting work, the three survivors are reserved for the overview and the final contrast, and the closing phrase 'the enlarged village' returns the reader to the overview's transformation claim.",
    alternativeExpressions: [
      { insteadOf: "spread over its surrounding farmland", use: "expanded across the fields around it" },
      { insteadOf: "has been converted into a guest house", use: "now welcomes guests as a guest house" },
      { insteadOf: "laid out as a country park", use: "turned into a public park" },
    ],
    commonMistakes: [
      {
        wrong: "On the left of the map there is a big park now.",
        right: "In the south-west, the farmland has been laid out as a country park.",
        reason: "'Left' and 'right' flip with the reader's viewpoint; maps are anchored with compass points.",
      },
      {
        wrong: "The village has changed a lot over the years.",
        right: "The shop has been replaced by a supermarket and the orchard cleared for a car park.",
        reason: "'Changed a lot' names no feature and no direction of change; every sentence should carry a specific change.",
      },
      {
        wrong: "The farmland was sold because farming was no longer profitable.",
        right: "The farmland has been built over with housing.",
        reason: "The maps show buildings, not motives; economic explanations import facts the visuals never contain.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "farmland", partOfSpeech: "noun", meaning: "Land used for growing crops or grazing animals." },
    { word: "housing estate", partOfSpeech: "noun", meaning: "A group of new houses built together on one site." },
    { word: "to convert", partOfSpeech: "verb", meaning: "To change a building's purpose while keeping its structure." },
    { word: "leisure", partOfSpeech: "noun", meaning: "Free-time activities such as sport and visits to parks." },
    { word: "to clear", partOfSpeech: "verb", meaning: "To remove trees or buildings from a piece of land." },
    { word: "unchanged", partOfSpeech: "adjective", meaning: "Exactly as it was, with no alteration." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Mixed charts — tourism arrivals and visitor spending
// ---------------------------------------------------------------------------

const visitorSpending: WritingBankTask = {
  slug: "ielts-wb-at1-mixed-visitor-spending",
  title: "Tourism arrivals and visitor spending",
  channel: "academic",
  taskType: "task-1",
  family: "mixed",
  tier: "practice",
  topic: "economics",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The chart and pie chart below give information about overseas tourism in the Mereland Lakes in 2024. The bar chart shows the number of visitors arriving in each season, and the pie chart shows how visitors spent their money.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "mixed",
    title: "Overseas arrivals and visitor spending in the Mereland Lakes, 2024",
    unit: "thousands of visitors and per-cent shares",
    bar: {
      kind: "bar",
      title: "Overseas arrivals by season, 2024",
      unit: "thousands of visitors",
      xLabel: "Season",
      yLabel: "Arrivals (thousands)",
      categories: ["Spring", "Summer", "Autumn", "Winter"],
      series: [
        { name: "Overseas arrivals", values: [84, 156, 97, 62] },
      ],
    },
    second: {
      kind: "pie",
      title: "How visitors spent their money, 2024",
      unit: "%",
      pies: [
        {
          caption: "Visitor spending by category, 2024",
          slices: [
            { label: "Accommodation", value: 34 },
            { label: "Food and drink", value: 24 },
            { label: "Shopping", value: 19 },
            { label: "Transport", value: 14 },
            { label: "Entertainment", value: 9 },
          ],
        },
      ],
    },
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview across both visuals: summer dominance in arrivals and the lead of accommodation plus food in spending.",
      keywords: ["overall", "summer", "peak", "accommodation", "food", "half", "both", "concentrated"],
    },
    {
      key: "bar-panel",
      description: "Reports the seasonal arrivals with figures, including the winter trough.",
      keywords: ["84,000", "156,000", "97,000", "62,000", "spring", "autumn", "winter", "thousand"],
    },
    {
      key: "pie-panel",
      description: "Reports every slice of the pie with percentages that total one hundred.",
      keywords: ["34", "24", "19", "14", "9", "per cent", "shopping", "transport", "entertainment"],
    },
    {
      key: "cross-link",
      description: "Connects the two visuals in at least one explicit sentence.",
      keywords: ["both", "chart", "graph", "together", "visual", "meanwhile", "profile", "whatever"],
    },
    {
      key: "report-register",
      description: "Reports without explaining why tourists visit or advising the region.",
      keywords: ["while", "whereas", "compared", "roughly", "nearly", "against", "followed"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read both visuals (1 minute)",
      notes: [
        "The bar panel counts thousands of arrivals per season; the pie splits 100 per cent of spending.",
        "Both visuals belong to 2024, so past simple throughout.",
        "A pie shows shares of a whole, never amounts in pounds, so 'per cent' must label every figure.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: one sentence naming both visuals and their measures.",
        "Overview: summer concentration plus the accommodation-and-food lead, with no figures.",
        "Body 1: the bar chart through all four seasons; Body 2: the pie, closing with one cross-visual sentence.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The chart and the pie chart give information about overseas tourism in the Mereland Lakes in 2024: the bar chart counts the visitors who arrived in each season, and the pie chart breaks down what all of those visitors spent during the year.",
      "Overall, arrivals were strongly concentrated in the summer, and spending was dominated by the two necessities of accommodation and food, which together absorbed well over half of the total.",
      "The region welcomed 84,000 overseas visitors in the spring, and the total nearly doubled to 156,000 in the summer, the peak of the year. Numbers then eased to 97,000 in the autumn and bottomed out at 62,000 in the winter, so the high season attracted roughly two and a half times as many arrivals as the low one.",
      "The pie chart shows where their money went. Accommodation took the largest share at 34 per cent, followed by food and drink at 24 per cent, and the two categories together accounted for 58 per cent of all spending. Shopping, at 19 per cent, and transport, at 14 per cent, formed the middle of the range, while entertainment, at 9 per cent, was the smallest item. The profile is one in which essential costs plainly outweigh discretionary ones, whatever the season.",
    ],
    wordCount: 211,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric into a single frame — arrivals counted by season, spending broken down by category — so the two measures are never confused later.",
      },
      {
        role: "Overview",
        analysis:
          "Two headline claims spanning both visuals — summer concentration and the lead of the two necessities — stated without a single figure.",
      },
      {
        role: "Body 1 — the bar panel",
        analysis:
          "Follows the year through spring, summer, autumn and winter, and closes with a computed ratio — two and a half times — that proves selection rather than listing.",
      },
      {
        role: "Body 2 — the pie panel and the link",
        analysis:
          "Works down the slices from largest to smallest, adds the 58 per cent subtotal, and ends with a cross-visual sentence about essentials versus discretionary spending.",
      },
    ],
    vocabulary: [
      { term: "strongly concentrated in the summer", note: "Distribution language that covers the whole bar panel in four words." },
      { term: "bottomed out at", note: "The natural collocation for reaching a low after a fall, avoiding a third 'fell'." },
      { term: "absorbed well over half", note: "Spending verb plus hedged proportion for the 58 per cent subtotal." },
      { term: "essential costs plainly outweigh discretionary ones", note: "The closing generalisation that links the pie back to the arrivals, at pattern level." },
    ],
    grammar: [
      {
        feature: "Past simple for a completed year",
        example: "the total nearly doubled to 156,000 in the summer",
        note: "Both visuals describe 2024, so every reporting verb sits in past simple.",
      },
      {
        feature: "Result clause with 'so'",
        example: "so the high season attracted roughly two and a half times as many arrivals",
        note: "One 'so' converts two reported figures into a computed comparison.",
      },
      {
        feature: "Fronted participial ranking",
        example: "followed by food and drink at 24 per cent",
        note: "The participle ranks the second slice without starting a new sentence.",
      },
    ],
    coherence:
      "The report is built as two visuals and one bridge: paragraph three owns the seasons, paragraph four owns the spending shares, and the bridge is prepared in the introduction ('counts and breaks down') and completed in the final sentence ('whatever the season'). Percentages never leak into the arrivals paragraph and thousands never leak into the pie paragraph, which is exactly the division of labour a mixed task rewards.",
    alternativeExpressions: [
      { insteadOf: "strongly concentrated in the summer", use: "heavily weighted towards the summer months" },
      { insteadOf: "bottomed out at 62,000", use: "reached its lowest point of 62,000" },
      { insteadOf: "absorbed well over half", use: "took up the clear majority" },
    ],
    commonMistakes: [
      {
        wrong: "Tourists spent 34 million pounds on accommodation.",
        right: "Accommodation took 34 per cent of all visitor spending.",
        reason: "The pie shows shares of a whole, not amounts; inventing a currency total misreports the visual.",
      },
      {
        wrong: "Most visitors come in summer because of the school holidays.",
        right: "Arrivals peaked at 156,000 in the summer.",
        reason: "The chart contains no causes, so holiday explanations are invention and cost Task Achievement marks.",
      },
      {
        wrong: "The number of visitors was 84 in spring and 156 in summer.",
        right: "The region welcomed 84,000 visitors in spring and 156,000 in summer.",
        reason: "Dropping the 'thousands' unit turns 84,000 people into 84; every figure needs its axis unit.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "arrivals", partOfSpeech: "noun", meaning: "The number of people reaching a place during a period." },
    { word: "peak", partOfSpeech: "noun", meaning: "The highest point of a series of values." },
    { word: "to bottom out", partOfSpeech: "phrase", meaning: "To reach its lowest level after a decline." },
    { word: "breakdown", partOfSpeech: "noun", meaning: "A division of a total into its parts." },
    { word: "share", partOfSpeech: "noun", meaning: "One part of a whole, expressed as a percentage." },
    { word: "discretionary", partOfSpeech: "adjective", meaning: "Optional rather than essential, as spending on entertainment." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Process diagram — from cacao bean to chocolate bar
// ---------------------------------------------------------------------------

const chocolateProcess: WritingBankTask = {
  slug: "ielts-wb-at1-process-chocolate",
  title: "From cacao bean to chocolate bar",
  channel: "academic",
  taskType: "task-1",
  family: "process",
  tier: "practice",
  topic: "economics",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The diagram below shows the six stages involved in producing chocolate bars from cacao beans, from the harvest on the plantation to the moulding of the finished bars.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "process",
    title: "From cacao bean to chocolate bar",
    stages: [
      { label: "Harvesting", caption: "Ripe cacao pods are cut from the trees, split open and emptied of their beans." },
      { label: "Fermenting", caption: "The beans are heaped in boxes and left to ferment for about a week." },
      { label: "Drying", caption: "The fermented beans are spread in the sun until they are dry enough to bag." },
      { label: "Roasting", caption: "At the factory, the beans are roasted to develop the flavour." },
      { label: "Winnowing", caption: "The roasted beans are cracked, and their shells are blown away to leave cacao nibs." },
      { label: "Grinding and moulding", caption: "The nibs are ground into liquid chocolate, blended with sugar and cocoa butter, and moulded into bars." },
    ],
    note: "The first three stages take place on the farm; the last three take place in the factory.",
  },
  requirements: [
    {
      key: "overview",
      description: "Opens with an overview naming the six stages and the farm-to-factory shape of the process.",
      keywords: ["overall", "linear", "six", "farm", "factory", "begin", "end", "two"],
    },
    {
      key: "all-stages",
      description: "Covers all six stages in order, from the harvest to the moulding of bars.",
      keywords: ["harvest", "ferment", "dry", "roast", "winnow", "grind", "mould"],
    },
    {
      key: "passive",
      description: "Uses the present-simple passive throughout, keeping workers and machines out of the report.",
      keywords: ["are", "is", "cut", "heaped", "spread", "roasted", "ground", "poured"],
    },
    {
      key: "sequencing",
      description: "Moves between stages with varied sequencing devices rather than one repeated connector.",
      keywords: ["then", "once", "after", "before", "next", "when", "until", "finally"],
    },
    {
      key: "material",
      description: "Tracks the material through its changes: pods become beans, nibs, liquid, then set bars.",
      keywords: ["bean", "nib", "liquid", "shell", "bar", "pod", "cocoa"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame (30 seconds)",
      notes: [
        "Six stages in two settings, as the note states: farm first, factory second.",
        "Present-simple passive throughout; no people are named anywhere in the diagram.",
        "The material changes form at every stage after the harvest, so track it, not the tools.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: paraphrase the rubric, plantation to moulding machine.",
        "Overview: linear, farm curing then factory processing, with no stage detail.",
        "Body 1: stages one to three on the farm; Body 2: stages four to six in the factory.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The diagram shows the six stages by which cacao beans are turned into finished chocolate bars, beginning on the plantation and ending at the moulding machine.",
      "Overall, the process is linear and moves through two settings: the beans are first cured in the open air on the farm, then processed and shaped into bars in the factory.",
      "Production starts with the harvest, when ripe pods are cut from the cacao trees, split open and emptied of their beans. The beans are then heaped into boxes and left to ferment for about a week, before being spread out to dry in the sun until they are firm enough to bag.",
      "Once dried, the beans move to the factory, where they are roasted to develop the flavour. They are then cracked, and the shells are winnowed away, leaving the cacao nibs. In the final stage the nibs are ground into a liquid, blended with sugar and cocoa butter, and poured into moulds, where the bars set into their finished shape.",
    ],
    wordCount: 168,
    bandEstimate:
      "Band 7.5–8.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and compresses the process into one span — plantation to moulding machine — before any stage is described.",
      },
      {
        role: "Overview",
        analysis:
          "Names the shape (linear), the two settings and the direction of travel, which turns six boxes into a story with a single arc.",
      },
      {
        role: "Body 1 — the farm stages (1–3)",
        analysis:
          "Sequences harvesting, fermenting and drying with two different devices ('when', 'then, before being') and closes the farm section with the bagging condition.",
      },
      {
        role: "Body 2 — the factory stages (4–6)",
        analysis:
          "Handles the setting change in half a sentence, then compresses roasting, winnowing and grinding-moulding so the final stage lands as the process's natural end point.",
      },
    ],
    vocabulary: [
      { term: "cured in the open air", note: "Covers fermenting and drying together, the two stages that happen outdoors." },
      { term: "emptied of their beans", note: "Material-focused phrasing that reports the harvest without naming pickers." },
      { term: "winnowed away", note: "The diagram's technical verb, borrowed precisely and defined by its result." },
      { term: "set into their finished shape", note: "The end-state phrase that closes the chain exactly where the introduction promised." },
    ],
    grammar: [
      {
        feature: "Present-simple passive",
        example: "the beans are roasted to develop the flavour",
        note: "The diagram names no agents, so the passive keeps every sentence impersonal.",
      },
      {
        feature: "Passive gerund after 'before'",
        example: "before being spread out to dry in the sun",
        note: "One gerund attaches the drying stage to the fermenting sentence without a new clause.",
      },
      {
        feature: "Reduced passive after 'Once'",
        example: "Once dried, the beans move to the factory",
        note: "Ellipsis after 'once' compresses a stage boundary into half a sentence.",
      },
    ],
    coherence:
      "The through-line is the material — pods, then beans, then nibs, then liquid, then set bars — and most sentences keep that material as their subject. Sequencers vary (when, then, before being, once, in the final stage) so no connector repeats twice in a row, and the paragraph break falls exactly at the process's own hinge: the moment the beans leave the farm.",
    alternativeExpressions: [
      { insteadOf: "cured in the open air", use: "dried and fermented outdoors" },
      { insteadOf: "winnowed away", use: "blown away and discarded" },
      { insteadOf: "set into their finished shape", use: "harden into the final bars" },
    ],
    commonMistakes: [
      {
        wrong: "The farmers pick the pods and put them in boxes.",
        right: "Ripe pods are cut from the trees and emptied of their beans.",
        reason: "The diagram shows no people; inventing farmers adds information the picture never contains.",
      },
      {
        wrong: "The beans were roasted and were ground.",
        right: "The beans are roasted and ground.",
        reason: "A process diagram is timeless; past simple wrongly turns the routine into one finished event.",
      },
      {
        wrong: "First the pods are harvested and then fermented and then dried and then roasted.",
        right: "The pods are first harvested and fermented, after which they are dried and roasted.",
        reason: "Chaining 'and then' flattens six stages into a list and repeats one connector four times.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "plantation", partOfSpeech: "noun", meaning: "A large area of land where one crop is grown." },
    { word: "to ferment", partOfSpeech: "verb", meaning: "To break down through natural chemical activity, developing flavour." },
    { word: "to winnow", partOfSpeech: "verb", meaning: "To blow away the outer shells and keep the useful part." },
    { word: "nib", partOfSpeech: "noun", meaning: "The broken piece of cacao bean that becomes chocolate." },
    { word: "mould", partOfSpeech: "noun", meaning: "A shaped container in which a liquid sets." },
    { word: "to set", partOfSpeech: "verb", meaning: "To become firm as a liquid cools." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 6. Map — riverside flood-alteration works
// ---------------------------------------------------------------------------

const floodProject: WritingBankTask = {
  slug: "ielts-wb-at1-map-flood-project",
  title: "Riverside flood-alteration works",
  channel: "academic",
  taskType: "task-1",
  family: "map",
  tier: "practice",
  topic: "environment",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The two maps below show a riverside park in the town of Bramford before and after flood-alteration works were carried out along the river.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "map",
    title: "Bramford riverside park: before and after the flood-alteration works",
    beforeTitle: "Bramford riverside park, before the works",
    afterTitle: "Bramford riverside park, after the works",
    before: [
      [{ label: "Playing fields" }, { label: "Sports pavilion" }, { label: "Car park" }, { label: "Community centre" }],
      [{ label: "Meadow" }, { label: "Woodland" }, { label: "Scrubland" }, { label: "Riverside walkway" }],
      [{ label: "River" }, { label: "River" }, { label: "River" }, { label: "River" }],
    ],
    after: [
      [{ label: "Playing fields" }, { label: "Sports pavilion" }, { label: "Car park" }, { label: "Community centre" }],
      [{ label: "Retention basin" }, { label: "Woodland" }, { label: "Wetland boardwalk" }, { label: "Cycleway" }],
      [{ label: "River" }, { label: "River" }, { label: "River" }, { label: "River" }],
    ],
    note: "The river runs along the southern edge of the site in both plans; north is at the top of each map.",
  },
  requirements: [
    {
      key: "overview",
      description: "States the overall effect of the works: the open ground now stores floodwater while the buildings survive.",
      keywords: ["overall", "flood", "retention", "store", "survive", "unchanged", "river", "re-engineered"],
    },
    {
      key: "replaced",
      description: "Identifies the altered features: the meadow, the scrubland and the riverside walkway.",
      keywords: ["meadow", "scrubland", "walkway", "basin", "boardwalk", "cycleway", "replaced", "turned"],
    },
    {
      key: "survived",
      description: "Notes the survivors: the playing fields, pavilion, car park, community centre, woodland and the river.",
      keywords: ["playing", "pavilion", "car park", "community", "woodland", "river", "remain", "still"],
    },
    {
      key: "positions",
      description: "Uses compass points and location language to anchor every change on the site.",
      keywords: ["north", "south", "western", "eastern", "edge", "middle", "end", "along", "beside"],
    },
    {
      key: "report-register",
      description: "Reports the works without praising the scheme or explaining policy.",
      keywords: ["while", "whereas", "although", "however", "equally", "rather", "meanwhile"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read both maps (1 minute)",
      notes: [
        "Before and after the works: past simple for the earlier plan, present perfect for the changes.",
        "The river along the southern edge anchors every position in both plans.",
        "Separate the three altered cells from the nine that survive, and organise by that split.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: paraphrase the rubric and name the two plans.",
        "Overview: open ground re-engineered to hold floodwater while the built facilities survive.",
        "Body 1: the middle strip of changes; Body 2: the survivors, closing on the river.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The maps show the riverside park in the town of Bramford before and after the completion of flood-alteration works along the river.",
      "Overall, the works have re-engineered the open ground beside the river so that it can hold floodwater: the meadow has become a retention basin, and the other open land has been given over to water-tolerant uses, while every building on the site survives.",
      "The most striking alteration lies in the middle of the park, where the meadow on the western side has been excavated into a retention basin. Further east, the rough scrubland has been turned into a wetland crossed by a boardwalk, and at the far eastern end the old riverside walkway has been resurfaced as a cycleway running beside the water.",
      "What has not changed is equally notable. The playing fields, the sports pavilion, the car park and the community centre all remain in their original positions along the northern edge, the woodland keeps its place beside the new basin, and the river still flows along the southern boundary, so the scheme has changed how the land is used rather than what stands upon it.",
    ],
    wordCount: 189,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and fixes the two plans in time — before and after the works — without naming a single feature.",
      },
      {
        role: "Overview",
        analysis:
          "States the scheme's effect in one sentence — ground re-engineered to hold floodwater, buildings untouched — which frames the two body paragraphs before any detail.",
      },
      {
        role: "Body 1 — the altered middle strip",
        analysis:
          "Reports the three changes west to east with their compass anchors, and lets the retention basin lead as the most striking alteration, exactly as the overview promised.",
      },
      {
        role: "Body 2 — the survivors and the river",
        analysis:
          "Reverses direction for the contrast: opens with 'What has not changed', lists the northern survivors, and closes on the river with a summary clause about land use versus buildings.",
      },
    ],
    vocabulary: [
      { term: "re-engineered the open ground", note: "The overview's headline verb: deliberate redesign of land, stronger than 'changed'." },
      { term: "excavated into a retention basin", note: "The technical collocation for digging out a storage area, borrowed from the map's own label." },
      { term: "given over to water-tolerant uses", note: "A four-word summary of the wetland and basin that licenses the detail which follows." },
      { term: "changed how the land is used rather than what stands upon it", note: "The closing generalisation that ties the whole comparison together at pattern level." },
    ],
    grammar: [
      {
        feature: "Present perfect passive for the works",
        example: "the meadow on the western side has been excavated into a retention basin",
        note: "Changes between the two plans take present perfect, with the passive keeping the land as the topic.",
      },
      {
        feature: "Present simple for survivors",
        example: "the woodland keeps its place beside the new basin",
        note: "What stands today takes present simple, the second tense a map report must manage.",
      },
      {
        feature: "'So' result clause closing the report",
        example: "so the scheme has changed how the land is used rather than what stands upon it",
        note: "One result clause converts the whole comparison into a single closing claim.",
      },
    ],
    coherence:
      "The report is organised by fates, not by rows: paragraph three owns the three altered cells, reported west to east, and paragraph four owns everything that survives, opened by 'What has not changed is equally notable'. The river anchors the orientation in both plans, each change is fixed to a compass position before it is named, and the final clause returns the reader to the overview's claim about land use.",
    alternativeExpressions: [
      { insteadOf: "re-engineered the open ground", use: "rebuilt the layout of the open land" },
      { insteadOf: "excavated into a retention basin", use: "dug out to form a flood-storage area" },
      { insteadOf: "given over to water-tolerant uses", use: "turned over to uses that welcome standing water" },
    ],
    commonMistakes: [
      {
        wrong: "The new basin is on the left of the park.",
        right: "On the western side of the middle strip, the meadow has become a retention basin.",
        reason: "'Left' and 'right' flip with the reader's viewpoint; maps are anchored with compass points.",
      },
      {
        wrong: "The flood works are a great success for the town.",
        right: "The meadow has been excavated into a retention basin.",
        reason: "Praising the scheme is opinion; a map report stays impersonal and factual.",
      },
      {
        wrong: "The park flooded badly in 2010, so the council built the basin.",
        right: "The meadow has been converted into a retention basin.",
        reason: "The maps show no floods and no dates for them; inventing a flood history imports facts the visuals never contain.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "retention basin", partOfSpeech: "noun", meaning: "An area of ground designed to hold floodwater temporarily." },
    { word: "works", partOfSpeech: "noun", meaning: "Building activity carried out to change a place." },
    { word: "boardwalk", partOfSpeech: "noun", meaning: "A raised wooden path across wet ground." },
    { word: "cycleway", partOfSpeech: "noun", meaning: "A path reserved for people on bicycles." },
    { word: "scrubland", partOfSpeech: "noun", meaning: "Rough land covered with low bushes and weeds." },
    { word: "bank", partOfSpeech: "noun", meaning: "The ground along the edge of a river." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 7. Process diagram — how a solar water heater works
// ---------------------------------------------------------------------------

const solarWaterHeater: WritingBankTask = {
  slug: "ielts-wb-at1-process-solar-panel",
  title: "How a solar water heater works",
  channel: "academic",
  taskType: "task-1",
  family: "process",
  tier: "practice",
  topic: "technology",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The diagram below shows how a solar water heater works in a family home, from the roof-mounted collector to the electric back-up element.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "process",
    title: "How a solar water heater works",
    stages: [
      { label: "Collecting", caption: "Sunlight strikes the roof collector and warms the fluid inside its dark pipes." },
      { label: "Pumping", caption: "A small pump circulates the heated fluid down to the storage tank." },
      { label: "Exchanging", caption: "Inside a coil, heat passes from the fluid into the water surrounding it." },
      { label: "Returning", caption: "The cooled fluid is pumped back up to the collector for reheating." },
      { label: "Storing", caption: "Heated water rises to the top of the tank, ready for the taps." },
      { label: "Back-up heating", caption: "On dull days, an electric element raises the tank's temperature." },
    ],
    note: "The first four stages form a continuous loop; the back-up element works only when sunshine is weak.",
  },
  requirements: [
    {
      key: "overview",
      description: "Opens with an overview naming the continuous loop and the electric back-up.",
      keywords: ["overall", "loop", "continuous", "back-up", "electric", "cycle", "roof", "tank"],
    },
    {
      key: "all-stages",
      description: "Covers all six stages in order, from the collector to the back-up element.",
      keywords: ["collector", "pump", "coil", "exchange", "return", "store", "rise", "element"],
    },
    {
      key: "passive",
      description: "Uses the present-simple passive and impersonal subjects throughout.",
      keywords: ["is", "are", "pumped", "warmed", "drawn", "driven", "heated", "passed"],
    },
    {
      key: "sequencing",
      description: "Links the stages with varied connectors, not one repeated word.",
      keywords: ["then", "once", "whenever", "while", "next", "when", "after", "inside"],
    },
    {
      key: "material",
      description: "Tracks the two substances separately: the heat-transfer fluid and the household water.",
      keywords: ["fluid", "water", "heat", "tank", "pipes", "taps", "cold", "coil"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame (30 seconds)",
      notes: [
        "No data and no people: present simple, mostly passive, and no trend verbs anywhere.",
        "Six stages; the note says stages one to four form a continuous loop.",
        "Two separate substances must be tracked: the fluid in the pipes and the water in the tank.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: paraphrase the rubric, collector to back-up element.",
        "Overview: continuous loop plus the electric stand-by for dull days.",
        "Body 1: the loop stages; Body 2: storage, draw-off and the back-up.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The diagram explains how a domestic solar water heater supplies a household with hot water, from the roof-mounted collector to the electric back-up that covers dull days.",
      "Overall, the system works as a continuous loop between roof and tank: the same heat-transfer fluid gains warmth above and releases it below, while an electric element stands by for weak sunshine.",
      "In sunshine, the dark pipes of the roof collector absorb solar energy and warm the fluid inside them. A small pump then drives the heated fluid down to the storage tank, where a coil exchanges its heat into the household water. The fluid, by now cooled, is pumped back up to the collector for reheating, and the cycle repeats for as long as the sun keeps shining on the panels.",
      "Inside the tank, the warmed water rises to the top, from where it is drawn off to the taps, while colder water waits below for the next pass through the coil. Whenever sunshine is insufficient, the electric element raises the temperature in the tank, so the household's supply of hot water is maintained around the clock.",
    ],
    wordCount: 185,
    bandEstimate:
      "Band 8.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and sets the span — collector to back-up — so the reader knows the report ends at the stand-by element, not at the taps.",
      },
      {
        role: "Overview",
        analysis:
          "Names the loop and the division of labour between fluid and water, and flags the back-up as the system's second mode before any stage detail.",
      },
      {
        role: "Body 1 — the loop (stages 1–4)",
        analysis:
          "Follows one circuit of the loop with three varied sequencers, then closes with 'the cycle repeats', which converts four stages into one continuous claim.",
      },
      {
        role: "Body 2 — storage, draw-off and back-up",
        analysis:
          "Shifts attention from the fluid to the water, uses 'while' to contrast the warm top with the cold bottom, and ends on the back-up with its 'around the clock' guarantee.",
      },
    ],
    vocabulary: [
      { term: "continuous loop between roof and tank", note: "The overview's structural phrase, which turns six boxes into one circuit." },
      { term: "exchanges its heat into the household water", note: "Precise verb for the coil's job, separating the two substances cleanly." },
      { term: "drawn off to the taps", note: "The natural collocation for taking stored hot water from the top of a tank." },
      { term: "around the clock", note: "A closing idiom that generalises the back-up's guarantee without inventing temperatures." },
    ],
    grammar: [
      {
        feature: "Present-simple passive",
        example: "the cooled fluid is pumped back up to the collector",
        note: "The diagram names no people, so the passive keeps the machinery impersonal.",
      },
      {
        feature: "Time clause with 'for as long as'",
        example: "the cycle repeats for as long as the sun keeps shining",
        note: "The clause states the loop's condition, grounded in the note about continuous operation.",
      },
      {
        feature: "Fronted adverbial with 'Whenever'",
        example: "Whenever sunshine is insufficient, the electric element raises the temperature",
        note: "The fronted condition mirrors the note's own hedge about weak sunshine.",
      },
    ],
    coherence:
      "The report tracks two substances without ever confusing them: paragraph three follows the fluid around its loop, paragraph four follows the water inside the tank, and the pronoun chains never cross. Sequencers vary (in sunshine, then, by now, whenever), each stage is anchored to its location — roof, tank, taps — and the final sentence returns to the overview's promise about the back-up.",
    alternativeExpressions: [
      { insteadOf: "continuous loop between roof and tank", use: "endless circuit linking roof and cylinder" },
      { insteadOf: "drawn off to the taps", use: "taken from the top for household use" },
      { insteadOf: "around the clock", use: "at all hours of the day" },
    ],
    commonMistakes: [
      {
        wrong: "The water is pumped up to the roof and back.",
        right: "The heat-transfer fluid is pumped to the roof; the water stays in the tank.",
        reason: "Confusing the two substances is this task's central error; the coil, not the water, travels.",
      },
      {
        wrong: "The water becomes very hot, maybe 80 degrees.",
        right: "The fluid warms the household water through the coil.",
        reason: "The diagram gives no temperatures, so invented figures misreport the system.",
      },
      {
        wrong: "The pump pushed the fluid down to the tank.",
        right: "A small pump drives the heated fluid down to the tank.",
        reason: "A working system is timeless; past simple wrongly turns the routine into a finished event.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "collector", partOfSpeech: "noun", meaning: "The panel that absorbs sunlight and turns it into heat." },
    { word: "fluid", partOfSpeech: "noun", meaning: "A liquid that flows through the pipes, carrying heat." },
    { word: "coil", partOfSpeech: "noun", meaning: "A pipe wound in a spiral through which heat is exchanged." },
    { word: "back-up", partOfSpeech: "noun", meaning: "A reserve system that works when the main one cannot." },
    { word: "to draw off", partOfSpeech: "phrase", meaning: "To take liquid from the top of a store." },
    { word: "loop", partOfSpeech: "noun", meaning: "A closed path that returns to its starting point." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 8. Map — the university campus expansion
// ---------------------------------------------------------------------------

const campusExpansion: WritingBankTask = {
  slug: "ielts-wb-at1-map-campus-expansion",
  title: "The university campus expansion",
  channel: "academic",
  taskType: "task-1",
  family: "map",
  tier: "practice",
  topic: "university",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The two maps below show the campus of Greenfield University in 2000 and the same campus today, after the university acquired and developed the land to its south.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "map",
    title: "Greenfield University campus: 2000 and today",
    beforeTitle: "Greenfield University campus, 2000",
    afterTitle: "Greenfield University campus, today",
    before: [
      [{ label: "Science block" }, { label: "Library" }, { label: "Lecture theatre" }, { label: "Administration" }, { label: "Playing fields" }],
      [{ label: "Hall of residence" }, { label: "Students' union" }, null, { label: "Car park" }, { label: "Tennis courts" }],
      [{ label: "Farmhouse" }, { label: "Pasture" }, { label: "Orchard" }, { label: "Woodland" }, { label: "Sports pavilion" }],
    ],
    after: [
      [{ label: "Science block" }, { label: "Library" }, { label: "Lecture theatre" }, { label: "Administration" }, { label: "Innovation centre" }],
      [{ label: "Hall of residence" }, { label: "Students' union" }, { label: "Central plaza" }, { label: "Multi-storey car park" }, { label: "Tennis courts" }],
      [{ label: "Alumni centre" }, { label: "New halls of residence" }, { label: "Business school" }, { label: "Woodland" }, { label: "Sports pavilion" }],
    ],
    note: "The campus is bounded by a main road on its northern edge in both plans; north is at the top of each map.",
  },
  requirements: [
    {
      key: "overview",
      description: "States the overall expansion southwards over former farmland while the old northern core survives.",
      keywords: ["overall", "south", "expansion", "farmland", "core", "survive", "acquired", "expanded"],
    },
    {
      key: "replaced",
      description: "Identifies the replaced features: the playing fields, the empty ground, the car park, the farmhouse, the pasture and the orchard.",
      keywords: ["playing", "empty", "surface", "farmhouse", "pasture", "orchard", "replaced", "cleared"],
    },
    {
      key: "appeared",
      description: "Identifies the new features: innovation centre, central plaza, multi-storey car park, alumni centre, new halls and business school.",
      keywords: ["innovation", "plaza", "multi-storey", "alumni", "halls", "business", "new"],
    },
    {
      key: "survived",
      description: "Notes the survivors: the academic core, the union, the tennis courts, the woodland and the pavilion.",
      keywords: ["science", "library", "lecture", "administration", "union", "tennis", "woodland", "pavilion"],
    },
    {
      key: "positions",
      description: "Uses compass points and location language to anchor each change on the campus.",
      keywords: ["north", "south", "east", "west", "edge", "corner", "beside", "middle", "further"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read both maps (1 minute)",
      notes: [
        "Two eras, 2000 and today: past simple for the earlier plan, present perfect for the changes.",
        "The main road on the northern edge anchors every position in both plans.",
        "Group the grid by rows: the academic core, the middle strip, then the acquired land in the south.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: paraphrase the rubric and name the two eras.",
        "Overview: expansion southwards over farmland while the old core survives.",
        "Body 1: the original campus; Body 2: the new southern strip, closing on the survivors.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The maps show the campus of Greenfield University as it stood in 2000 and the same campus today, following the acquisition and development of the land to its south.",
      "Overall, the university has expanded southwards over the former farmland, adding academic, residential and commercial buildings, while the original core along the northern edge has been preserved.",
      "Within the old campus, the science block, the library, the lecture theatre and the administration building all remain in place, but the playing fields at the eastern end have been replaced by an innovation centre. The heart of the campus has been landscaped: the empty ground between the students' union and the car park is now a central plaza, and the former surface car park has been rebuilt as a multi-storey facility. The hall of residence and the tennis courts keep their original positions.",
      "The greatest change has come in the south, on the land the university has since acquired. The farmhouse has been converted into an alumni centre, the pasture beside it is now a new hall of residence, and the orchard further east has been cleared for a business school. The woodland towards the south-east and the sports pavilion in the far corner are the only reminders of the old rural landscape.",
    ],
    wordCount: 210,
    bandEstimate:
      "Band 8.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and adds the frame the reader needs — acquisition and development to the south — without naming a single building.",
      },
      {
        role: "Overview",
        analysis:
          "States the direction of expansion and the preservation of the core in one sentence, the two claims the body paragraphs then set out to evidence.",
      },
      {
        role: "Body 1 — the original campus",
        analysis:
          "Opens with the four survivors, reports the innovation centre as the one loss, then pairs the two heart-of-campus changes and closes on the untouched hall and courts.",
      },
      {
        role: "Body 2 — the acquired southern strip",
        analysis:
          "Works west to east through farmhouse, pasture and orchard, each paired with its replacement, and ends on the two rural survivors as the only reminders.",
      },
    ],
    vocabulary: [
      { term: "expanded southwards over the former farmland", note: "Direction plus old land use in one phrase — the overview's whole claim compressed." },
      { term: "the heart of the campus has been landscaped", note: "A four-word summary of the plaza change that licenses the detail which follows." },
      { term: "rebuilt as a multi-storey facility", note: "The standard collocation for a facility rebuilt upward on the same site." },
      { term: "the only reminders of the old rural landscape", note: "The closing phrase that converts two survivors into a summary of the whole transformation." },
    ],
    grammar: [
      {
        feature: "Present perfect passive for changes",
        example: "the orchard further east has been cleared for a business school",
        note: "Changes between the plans take present perfect, keeping buildings rather than builders as the topic.",
      },
      {
        feature: "Past simple for the 2000 baseline",
        example: "as it stood in 2000",
        note: "The earlier map is finished past time, so its references drop back to past simple.",
      },
      {
        feature: "Participle clause of circumstance",
        example: "following the acquisition and development of the land to its south",
        note: "One participle carries the rubric's context into the introduction without a second sentence.",
      },
    ],
    coherence:
      "The report is organised by zones, not by rows walked in order: paragraph three audits the original campus, paragraph four audits the acquired southern strip, and the direction of travel follows the overview's claim about southward expansion. Every change is fixed to a position before it is named, survivors are distributed to the end of each zone, and the closing phrase about rural reminders returns the reader to the overview.",
    alternativeExpressions: [
      { insteadOf: "expanded southwards over the former farmland", use: "spread onto the farmland to the south" },
      { insteadOf: "rebuilt as a multi-storey facility", use: "redeveloped into a multi-storey structure" },
      { insteadOf: "the only reminders of the old rural landscape", use: "the sole surviving traces of the countryside" },
    ],
    commonMistakes: [
      {
        wrong: "The campus is much bigger now than before.",
        right: "The pasture is now a new hall of residence and the orchard a business school.",
        reason: "'Bigger' names no feature and no location; every sentence should carry a specific change.",
      },
      {
        wrong: "The university built the business school to attract more students.",
        right: "The orchard further east has been cleared for a business school.",
        reason: "The maps show buildings, not motives; enrolment explanations import facts the visuals never contain.",
      },
      {
        wrong: "The new plaza is in the middle at the top of the map.",
        right: "The empty ground between the union and the car park is now a central plaza.",
        reason: "'Top' and 'middle' are vague on a map; positions are anchored with compass points and neighbours.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "campus", partOfSpeech: "noun", meaning: "The land and buildings belonging to a university." },
    { word: "to acquire", partOfSpeech: "verb", meaning: "To buy or take possession of land or property." },
    { word: "alumni", partOfSpeech: "noun", meaning: "Former students of a university." },
    { word: "plaza", partOfSpeech: "noun", meaning: "An open public square surrounded by buildings." },
    { word: "multi-storey", partOfSpeech: "adjective", meaning: "Having several floors, one above another." },
    { word: "to landscape", partOfSpeech: "verb", meaning: "To improve ground by planting and paving." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 9. Mixed charts — how commuters travel
// ---------------------------------------------------------------------------

const transportCommuting: WritingBankTask = {
  slug: "ielts-wb-at1-mixed-transport-commuting",
  title: "How commuters travel",
  channel: "academic",
  taskType: "task-1",
  family: "mixed",
  tier: "practice",
  topic: "workplace",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The charts below give information about commuting in the city of Northport. The bar chart compares the percentage of commuters using each main mode of transport in 2004 and in 2024, and the line graph shows the average commuting time over the same twenty years.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "mixed",
    title: "Commuting in Northport: mode shares and journey times, 2004–2024",
    unit: "per-cent shares and minutes",
    bar: {
      kind: "bar",
      title: "Commuters by main mode of transport, 2004 and 2024",
      unit: "% of commuters",
      xLabel: "Mode of transport",
      yLabel: "Share of commuters (%)",
      categories: ["Car", "Bus", "Train", "Cycle", "Walk"],
      series: [
        { name: "2004", values: [56, 16, 12, 6, 10] },
        { name: "2024", values: [38, 18, 22, 12, 10] },
      ],
    },
    second: {
      kind: "line",
      title: "Average door-to-door commuting time, 2004–2024",
      unit: "minutes",
      xLabel: "Year",
      yLabel: "Average commute (minutes)",
      xPoints: ["2004", "2008", "2012", "2016", "2020", "2024"],
      series: [
        { name: "Average commute", values: [24, 25, 27, 29, 31, 34] },
      ],
    },
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview across both charts: the car's decline set against the steady lengthening of commutes.",
      keywords: ["overall", "car", "decline", "longer", "lengthen", "rose", "steadily", "both"],
    },
    {
      key: "bar-panel",
      description: "Reports every mode's share for both years with figures.",
      keywords: ["56", "38", "22", "18", "16", "12", "10", "per cent", "walk"],
    },
    {
      key: "line-panel",
      description: "Describes the line graph's climb with at least three anchored years.",
      keywords: ["24", "27", "34", "minutes", "2012", "2024", "average", "climb"],
    },
    {
      key: "cross-link",
      description: "Links the two panels explicitly, contrasting the mode shift with the time spent travelling.",
      keywords: ["both", "however", "chart", "graph", "contrast", "panel", "despite", "shift"],
    },
    {
      key: "report-register",
      description: "Reports without explaining causes or recommending transport policy.",
      keywords: ["while", "whereas", "compared", "respectively", "nearly", "against", "single"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read both charts (1 minute)",
      notes: [
        "The bars give shares of commuters for two years; the line gives average minutes across six points.",
        "Shares are proportions, not people, so 'per cent' must label every bar figure.",
        "Both charts span 2004–2024, a finished period, so past simple throughout.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: one sentence naming both charts and their measures.",
        "Overview: the car's decline set against the lengthening commute.",
        "Body 1: the bar chart mode by mode; Body 2: the line graph, closing with the cross-chart link.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The charts give information about commuting in the city of Northport: the bar chart compares the shares of commuters using each main mode of transport in 2004 and 2024, and the line graph shows how the average journey time changed between those years.",
      "Overall, the car surrendered much of its dominance to the train and the bicycle over the twenty years, yet the average commute lengthened steadily throughout the same period.",
      "In 2004, 56 per cent of commuters drove to work, while the bus (16 per cent) and the train (12 per cent) together carried fewer than a third. By 2024 the car's share had fallen to 38 per cent, the train had almost doubled to 22 per cent, the bus had edged up to 18 per cent and cycling had risen from 6 to 12 per cent. Walking, at 10 per cent, was the single mode whose share never moved.",
      "The line graph shows, however, that greener travel has not meant faster travel. The average door-to-door time crept up from 24 minutes in 2004 to 27 by 2012 and 34 minutes in 2024, rising in every interval recorded. Even with well over half of commuters no longer driving, journeys now take ten minutes longer on average than they did twenty years earlier, so the mode shift recorded in the bars has done nothing to shorten the trip measured by the line.",
    ],
    wordCount: 232,
    bandEstimate:
      "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and separates the two measures — shares of commuters against average minutes — so the reader can never mistake a percentage for a duration.",
      },
      {
        role: "Overview",
        analysis:
          "Pairs the two panels' headlines in one contrastive sentence — modal shift against lengthening times — which is the whole story of this task in twenty words.",
      },
      {
        role: "Body 1 — the bar panel",
        analysis:
          "Reports 2004 first and 2024 second, mode by mode, and closes on walking as the single unchanged share — a selection that avoids reading all ten bars aloud.",
      },
      {
        role: "Body 2 — the line panel and the link",
        analysis:
          "Anchors the climb at three years, converts the endpoints into a ten-minute difference, and ends by weighing the bars' shift against the line's rise — the cross-panel move this task rewards.",
      },
    ],
    vocabulary: [
      { term: "surrendered much of its dominance to", note: "Concession language that ranks the car's fall without repeating 'decrease'." },
      { term: "edged up to", note: "Calibrated verb for the bus's two-point rise, honest about its small size." },
      { term: "crept up", note: "The natural collocation for a slow, steady climb, varying 'rose'." },
      { term: "greener travel has not meant faster travel", note: "The link's engine: it juxtaposes the two panels' conclusions instead of repeating their data." },
    ],
    grammar: [
      {
        feature: "Past simple for finished years",
        example: "the train had almost doubled to 22 per cent",
        note: "Both charts report completed years, so past simple or past perfect carries every figure.",
      },
      {
        feature: "Past perfect for change over the period",
        example: "the car's share had fallen to 38 per cent",
        note: "The past perfect marks 2024 as the outcome of the whole twenty-year shift.",
      },
      {
        feature: "Fronted 'however' contrast",
        example: "The line graph shows, however, that greener travel has not meant faster travel",
        note: "The interpolated adverb signals the cross-panel turn inside one sentence.",
      },
    ],
    coherence:
      "The report is built as two panels and one bridge: paragraph three owns the bars, paragraph four owns the line, and the bridge is announced by 'however' and completed by the final clause weighing the shift against the rise. Percentages never leak into the minutes paragraph and minutes never leak into the shares paragraph, each body paragraph opens by naming its panel, and the closing sentence converts both panels into a single claim.",
    alternativeExpressions: [
      { insteadOf: "surrendered much of its dominance to", use: "lost much of its lead to" },
      { insteadOf: "crept up", use: "rose little by little" },
      { insteadOf: "greener travel has not meant faster travel", use: "the shift in modes has not shortened the journey" },
    ],
    commonMistakes: [
      {
        wrong: "56 commuters drove in 2004.",
        right: "56 per cent of commuters drove in 2004.",
        reason: "The bars show shares, not counts; dropping 'per cent' turns a proportion into a handful of people.",
      },
      {
        wrong: "The government should build more cycle lanes.",
        right: "Cycling rose from 6 to 12 per cent between 2004 and 2024.",
        reason: "The charts contain no policy; recommendations sit outside a Task 1 report.",
      },
      {
        wrong: "People use the train because petrol is expensive.",
        right: "The train's share almost doubled, from 12 to 22 per cent.",
        reason: "The charts show modes, not motives; price explanations are invention and cost Task Achievement marks.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "commuter", partOfSpeech: "noun", meaning: "A person who travels regularly between home and work." },
    { word: "mode", partOfSpeech: "noun", meaning: "A means of travelling, such as the bus or the car." },
    { word: "door-to-door", partOfSpeech: "adjective", meaning: "Measured from home to the workplace, including every stage." },
    { word: "to lengthen", partOfSpeech: "verb", meaning: "To take more time than before." },
    { word: "dominance", partOfSpeech: "noun", meaning: "The leading position of one item over others." },
    { word: "interval", partOfSpeech: "noun", meaning: "The stretch of time between two points on a graph." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 10. Process diagram — bread making in a bakery
// ---------------------------------------------------------------------------

const breadMaking: WritingBankTask = {
  slug: "ielts-wb-at1-process-bread",
  title: "Bread making in a bakery",
  channel: "academic",
  taskType: "task-1",
  family: "process",
  tier: "practice",
  topic: "everyday",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The diagram below shows the six stages of bread making in a small bakery, from mixing the ingredients to the wrapped loaves that go on sale each morning.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "process",
    title: "Bread making in a small bakery",
    stages: [
      { label: "Mixing", caption: "Flour, water, yeast and salt are blended into a soft dough." },
      { label: "Kneading", caption: "The dough is stretched and folded until it is smooth and elastic." },
      { label: "Proving", caption: "It is left to rise in a warm room for about an hour." },
      { label: "Shaping", caption: "The proved dough is divided into portions and shaped into loaves." },
      { label: "Baking", caption: "The loaves are baked in a hot oven until the crust turns golden." },
      { label: "Cooling", caption: "The finished loaves are cooled on racks and wrapped for the shop." },
    ],
    note: "The process runs overnight so that bread reaches the shelves each morning.",
  },
  requirements: [
    {
      key: "overview",
      description: "Opens with an overview naming the six stages and the work-rest rhythm of the process.",
      keywords: ["overall", "linear", "six", "stage", "rest", "work", "shape", "wait"],
    },
    {
      key: "all-stages",
      description: "Covers all six stages in order, from mixing to wrapping.",
      keywords: ["mix", "knead", "prove", "shape", "bake", "cool", "wrap"],
    },
    {
      key: "passive",
      description: "Uses the present-simple passive as the main reporting voice.",
      keywords: ["is", "are", "blended", "kneaded", "shaped", "baked", "cooled", "wrapped"],
    },
    {
      key: "sequencing",
      description: "Varies the sequencing devices between the stages.",
      keywords: ["then", "once", "next", "finally", "after", "when", "until", "in"],
    },
    {
      key: "material",
      description: "Tracks the dough through its changes: mixture, elastic dough, proved loaves, golden bread.",
      keywords: ["dough", "mixture", "loaves", "crust", "elastic", "golden", "trays"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame (30 seconds)",
      notes: [
        "No data and no people: present-simple passive, and no trend verbs anywhere.",
        "Six stages run left to right; the note says the process runs overnight.",
        "The material is dough throughout — its state changes, never its identity.",
      ],
    },
    {
      heading: "Step 2 — Plan the four paragraphs (2 minutes)",
      notes: [
        "Introduction: paraphrase the rubric, mixing to wrapped loaves.",
        "Overview: linear, work then rest, then shaping, baking and cooling.",
        "Body 1: stages one to three; Body 2: stages four to six, closing on the shop.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The diagram shows the six stages of bread making in a small traditional bakery, from the first mixing of the ingredients to the wrapped loaves that go on sale each morning.",
      "Overall, the process is linear and alternates between working the dough and waiting for it: the mixture is first developed and rested, then given its final shape, baked and cooled.",
      "Bread making begins when flour, water, yeast and salt are blended into a soft dough. The dough is then kneaded, stretched and folded repeatedly, until it becomes smooth and elastic enough to hold its shape. In the third stage it is set aside in a warm room to rise for about an hour.",
      "Once proved, the dough is divided into portions and shaped into loaves, which are placed on trays ready for the oven. The loaves are then baked in a hot oven until the crust turns golden. Finally, they are cooled on racks and wrapped for the shop, and the loaves go to the counter for the morning's customers.",
    ],
    wordCount: 171,
    bandEstimate:
      "Band 7.5–8.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and compresses the process into one span — mixing to wrapped loaves — so the reader's compass is set before any stage appears.",
      },
      {
        role: "Overview",
        analysis:
          "Names the shape (linear) and the rhythm of work and rest, which turns six boxes into a story rather than a list.",
      },
      {
        role: "Body 1 — the preparation stages (1–3)",
        analysis:
          "Sequences mixing, kneading and proving with three different devices ('when', 'then', 'In the third stage') and closes the paragraph on the hour-long wait.",
      },
      {
        role: "Body 2 — the finishing stages (4–6)",
        analysis:
          "Opens with the reduced 'Once proved', runs shaping into baking inside one sentence, and ends on the wrapped loaves exactly where the introduction promised.",
      },
    ],
    vocabulary: [
      { term: "alternates between working the dough and waiting for it", note: "The overview's thesis: rhythm, not machinery, is this process's logic." },
      { term: "smooth and elastic enough to hold its shape", note: "The diagram's own condition for kneading, borrowed precisely." },
      { term: "set aside in a warm room", note: "Quiet phrasing for the proving stage that keeps the passive impersonal." },
      { term: "the crust turns golden", note: "The diagram's doneness test, reported as a change of state rather than a timer." },
    ],
    grammar: [
      {
        feature: "Present-simple passive",
        example: "the dough is divided into portions and shaped into loaves",
        note: "The diagram names no bakers, so the passive keeps every sentence impersonal.",
      },
      {
        feature: "Time clause with 'until'",
        example: "stretched and folded repeatedly, until it becomes smooth and elastic",
        note: "The clause carries the kneading's end condition inside the same sentence.",
      },
      {
        feature: "Reduced passive after 'Once'",
        example: "Once proved, the dough is divided into portions",
        note: "Ellipsis after 'once' compresses the stage boundary into two words.",
      },
    ],
    coherence:
      "The through-line is the dough itself, and every sentence keeps it as subject or object. Sequencers vary (when, then, in the third stage, once, finally) so no connector repeats twice in a row, the paragraph break falls at the process's own hinge — the moment the dough is ready to be shaped — and the final sentence closes the chain at the shop counter, exactly where the introduction said it would.",
    alternativeExpressions: [
      { insteadOf: "alternates between working the dough and waiting for it", use: "moves between effort and rest" },
      { insteadOf: "set aside in a warm room", use: "left to stand in a warm place" },
      { insteadOf: "the crust turns golden", use: "the crust browns in the oven" },
    ],
    commonMistakes: [
      {
        wrong: "The baker mixes the flour and kneads the dough.",
        right: "Flour, water, yeast and salt are blended into a soft dough.",
        reason: "The diagram shows no people; inventing a baker adds information the picture never contains.",
      },
      {
        wrong: "The dough was mixed and was baked.",
        right: "The dough is mixed and baked.",
        reason: "A process diagram is timeless; past simple wrongly turns the nightly routine into one finished event.",
      },
      {
        wrong: "The bread is delicious and smells wonderful.",
        right: "The finished loaves are cooled on racks and wrapped for the shop.",
        reason: "Opinions about taste sit outside the diagram; a process report stays impersonal and factual.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "dough", partOfSpeech: "noun", meaning: "The soft mixture of flour and water before baking." },
    { word: "to knead", partOfSpeech: "verb", meaning: "To work dough by stretching and folding it." },
    { word: "yeast", partOfSpeech: "noun", meaning: "The substance that makes dough rise." },
    { word: "to prove", partOfSpeech: "verb", meaning: "To leave dough to rise before baking." },
    { word: "crust", partOfSpeech: "noun", meaning: "The hard outer surface of a loaf." },
    { word: "elastic", partOfSpeech: "adjective", meaning: "Springing back into shape when stretched." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// The batch
// ---------------------------------------------------------------------------

export const at1DPracticeTasks: WritingBankTask[] = [
  energyHomes, // mixed (bar + line), difficulty 4
  paperRecycling, // process, 7 stages, difficulty 3
  villageDevelopment, // map, 3×4 grids, difficulty 4
  visitorSpending, // mixed (bar + pie), difficulty 4
  chocolateProcess, // process, 6 stages, difficulty 2
  floodProject, // map, 3×4 grids, difficulty 4
  solarWaterHeater, // process, 6 stages, difficulty 3
  campusExpansion, // map, 3×5 grids, difficulty 3
  transportCommuting, // mixed (bar + line), difficulty 4
  breadMaking, // process, 6 stages, difficulty 2
];
