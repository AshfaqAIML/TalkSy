/**
 * IELTS Academic Writing Task 2 bank — practice batch D (PROMPT 54
 * question-bank expansion).
 *
 * Nine further original essay tasks from the question-driven families:
 * three problem-and-solution tasks (household and supermarket food waste,
 * congestion in fast-growing cities, overtourism in historic towns), two
 * cause-and-effect tasks (rising childhood obesity, loneliness in large
 * cities), two two-part tasks (museum digitisation, the rise of gig work)
 * and two direct-questions tasks (saving minority languages, the cost of
 * space exploration).
 *
 * Every task is practice tier: the complete teaching payload — prompt,
 * requirements, planning notes, a full-length model answer with an honest
 * word count, the eight-element analysis and a topic vocabulary bank —
 * but without the level samples flagship tasks carry. All prose is fresh
 * and original TalkSy practice material written in the style of the test;
 * band labels are educational estimates, never official scores.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

export const at2DPracticeTasks: WritingBankTask[] = [
// ---------------------------------------------------------------------------
// 1. Problem and solution — household and supermarket food waste
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-problem-solution-food-waste",
  title: "Food waste",
  channel: "academic",
  taskType: "task-2",
  family: "problem-solution",
  tier: "practice",
  topic: "environment",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many wealthy countries, households and supermarkets together throw away millions of tonnes of perfectly edible food every year, while other people in the same societies struggle to afford basic meals.\n\nWhat are the main causes of this waste, and what measures could reduce it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "causes-part",
      description:
        "Explains the causes of waste on the two named stages — households (bulk offers, date-label confusion, poor planning) and supermarkets (cosmetic standards, deliberate overstocking) — rather than merely lamenting the waste.",
      keywords: ["cause", "because", "bulk", "offer", "label", "date", "cosmetic", "standard", "overstock", "shelf", "portion", "plan", "abundance"],
    },
    {
      key: "measures-part",
      description:
        "Proposes workable measures at government, household and retailer level, matching each measure to a cause it removes.",
      keywords: ["measure", "solution", "reduce", "label", "standardise", "education", "campaign", "discount", "imperfect", "donate", "charity", "food bank", "legislation"],
    },
    {
      key: "both-stages",
      description:
        "Covers both named sources of waste — the household and the supermarket — with distinct analysis of each.",
      keywords: ["household", "home", "family", "consumer", "shopper", "supermarket", "retailer", "store", "shelf", "stock"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Develops each cause and each measure with a mechanism and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "so that"],
    },
    {
      key: "conclusion",
      description:
        "Closes with a conclusion that ties the causes to the remedies without introducing new arguments.",
      keywords: ["in conclusion", "to conclude", "overall", "in summary", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Separate the two question parts (2 minutes)",
      notes: [
        "The first half asks for CAUSES on two named stages: the household and the supermarket.",
        "The second half asks for MEASURES, plural — one remedy alone cannot satisfy it.",
        "Causes and measures are different questions; keep them in separate body blocks.",
      ],
    },
    {
      heading: "Step 2 — Map causes to paragraphs, then echo them with cures",
      notes: [
        "Introduction: paraphrase the scale of the waste, then signpost causes before measures.",
        "Body 1 = household causes (bulk offers, date labels, no weekly plan); Body 2 = retail causes (cosmetic standards, overstocked abundance).",
        "Body 3 = measures, each one answering a cause named earlier so the essay reads as diagnosis then cure.",
        "Conclusion: one sentence of diagnosis, one of cure, no new claims.",
      ],
    },
    {
      heading: "Step 3 — Language, evidence and time",
      notes: [
        "Prepare the register before writing: 'edible', 'surplus', 'best before', 'cosmetic standards', 'redistribution'.",
        "Give every cause its mechanism: show how a multi-buy offer actually fills a household bin.",
        "One retail example (imperfect-veg ranges, donation laws in Europe) anchors the measures paragraph.",
        "Finish drafting by minute 34 and spend the rest checking both question halves have a block each.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "In some of the world's richest societies, a startling share of the food supply never reaches a plate: misshapen vegetables are rejected before they leave the farm, loaves stale on supermarket shelves, and refrigerators hide forgotten leftovers until they spoil. This essay examines why households and retailers discard so much edible food, and then sets out the measures most likely to cut that waste.",
      "At home, waste usually begins with good intentions. Shoppers buy in bulk because multi-buy offers make large quantities look economical, yet a refrigerator cannot always absorb what arrives, and half-used jars slip behind fresher purchases. Confusing date labels deepen the problem: many consumers treat 'best before', a mere quality guideline, as a strict deadline and bin food that is still perfectly safe. A family that plans no weekly menu, shops while hungry and cooks generous portions is almost guaranteed to scrape food into the bin by the weekend.",
      "Retailers waste food for different but equally rational reasons. Supermarkets stock deep shelves because abundance signals freshness, and a display that runs low looks unappealing, so stores deliberately order more than they expect to sell. Strict cosmetic standards mean that knobbly carrots and blemished apples never reach the aisles at all, while pre-packed crates hide their contents from the staff who might otherwise order more precisely.",
      "The remedies follow directly from those causes. Governments can standardise and simplify date labelling so that one clear phrase separates quality advice from genuine safety warnings, which would curb household panic-discarding at a stroke. Schools and public campaigns can teach portion planning and leftover cookery. Retailers, meanwhile, can discount items approaching their expiry, sell 'imperfect' ranges at lower prices, and channel unsold stock to food banks and redistribution charities, as several European supermarket chains already do. Where legislation has obliged large stores to donate rather than dump, tonnes of food have moved from bins to community kitchens.",
      "In conclusion, food waste is not simple carelessness but the product of pricing tricks, ambiguous labels and retail habits that reward overstocking. Clearer information, smarter shopping and donation schemes backed by law could convert much of that waste into meals, easing household budgets and sparing the atmosphere the cost of producing food that nobody eats.",
    ],
    wordCount: 370,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Paraphrases the scale of waste through three quick pictures — rejected vegetables, stale loaves, forgotten leftovers — and signs the two-part contract: causes first, measures after. The reader can tick both question halves as scheduled before the first body paragraph begins.",
      },
      {
        role: "Body 1 — household causes",
        analysis:
          "Explains domestic waste as a chain of reasonable decisions: bulk offers look economical, labels read as deadlines, unplanned cooking leaves leftovers to spoil. Each cause carries its mechanism rather than standing in a list, which is what the 'why' instruction rewards.",
      },
      {
        role: "Body 2 — retail causes",
        analysis:
          "Shifts the lens to the store and shows that retail waste is structural rather than careless: abundance sells, cosmetic standards exclude, packaging hides. The paragraph answers why supermarkets over-order and nothing else, keeping the causes stage clean.",
      },
      {
        role: "Body 3 — measures",
        analysis:
          "Pairs each remedy with the cause it removes — standardised labels against panic-discarding, portion planning against overflowing refrigerators, donation schemes against overstocking — and closes with a worked example of redistribution law, the cause-to-cure echo this family rewards.",
      },
      {
        role: "Conclusion",
        analysis:
          "Compresses the diagnosis into one sentence (pricing tricks, ambiguous labels, overstocking) and the cure into another, ending on the double dividend of household budgets and environmental cost without adding any new claims.",
      },
    ],
    vocabulary: [
      { term: "a startling share of the food supply never reaches a plate", note: "Replaces 'throw away millions of tonnes' with a proportion framed as shock, keeping the opening paraphrase fresh and honest." },
      { term: "a mere quality guideline", note: "The precise status of 'best before'; 'mere' signals in one word that the label is weaker than consumers assume." },
      { term: "cosmetic standards", note: "The established term for judging produce by appearance; using it signals topic fluency without slipping into jargon." },
      { term: "abundance signals freshness", note: "Explains overstocking as marketing logic, converting an apparent vice into a rational business choice — analysis, not blame." },
      { term: "convert much of that waste into meals", note: "A transformation verb that closes the essay on the practical payoff of the measures rather than on guilt." },
    ],
    grammar: [
      {
        feature: "Present simple for systemic, recurring causes",
        example: "Shoppers buy in bulk because multi-buy offers make large quantities look economical",
        note: "Waste is a repeating habit rather than an event, so the timeless present keeps the analysis general and true.",
      },
      {
        feature: "Colon to unpack an abstraction",
        example: "Confusing date labels deepen the problem: many consumers treat 'best before' … as a strict deadline",
        note: "The colon delivers the mechanism at the exact moment the reader asks for it, packing claim and proof into one sentence.",
      },
      {
        feature: "Agentless passive to keep systems in focus",
        example: "misshapen vegetables are rejected before they leave the farm",
        note: "The passive keeps the spotlight on the produce and the standard rather than on any named villain, which suits a structural analysis.",
      },
    ],
    coherence:
      "The essay runs as diagnosis then prescription: the introduction promises causes before measures, two body paragraphs split the causes along the question's own stages — household and retailer — and the measures paragraph deliberately echoes each cause (labels, planning, overstocking) so the reader can match every cure to its disease. The conclusion folds the halves together in a single sentence pair, closing the loop without opening a new argument.",
    alternativeExpressions: [
      { insteadOf: "a startling share of the food supply never reaches a plate", use: "a remarkable proportion of what is produced is never eaten" },
      { insteadOf: "slip behind fresher purchases", use: "get buried at the back of the refrigerator" },
      { insteadOf: "abundance signals freshness", use: "full shelves suggest quality to shoppers" },
      { insteadOf: "convert much of that waste into meals", use: "turn discarded food into meals for those who need it" },
    ],
    commonMistakes: [
      {
        wrong: "People waste food because they are careless and do not care about the environment.",
        right: "Households waste food through reasonable habits — bulk offers, label confusion, generous portions — that add up badly.",
        reason: "Moralising explains nothing; the question asks for causes, and mechanisms earn the marks.",
      },
      {
        wrong: "The solution is education. Education is very important for solving this problem.",
        right: "One measure per cause: standardised labels, portion planning in schools, retail donation schemes.",
        reason: "Repeating 'education' as a cure-all under-develops the measures half the question explicitly requests.",
      },
      {
        wrong: "Supermarkets should give all old food to poor people.",
        right: "Supermarkets can discount near-expiry items and channel unsold stock to redistribution charities, as several European chains already do.",
        reason: "The blunt version is simplistic and informal; the developed version names a mechanism and a real example.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "edible", partOfSpeech: "adjective", meaning: "Safe and suitable to be eaten." },
    { word: "surplus", partOfSpeech: "noun", meaning: "An amount left over beyond what is needed." },
    { word: "best-before date", partOfSpeech: "noun phrase", meaning: "A label showing when food is at its best quality, not when it becomes unsafe." },
    { word: "to discard", partOfSpeech: "verb", meaning: "To throw something away deliberately." },
    { word: "cosmetic standards", partOfSpeech: "noun phrase", meaning: "Rules that judge fruit and vegetables by appearance rather than taste or nutrition." },
    { word: "redistribution", partOfSpeech: "noun", meaning: "Collecting surplus food and passing it on to people who need it." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 2. Problem and solution — traffic in growing cities
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-problem-solution-traffic-congestion",
  title: "Traffic in growing cities",
  channel: "academic",
  taskType: "task-2",
  family: "problem-solution",
  tier: "practice",
  topic: "society",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many rapidly expanding cities, traffic congestion has become a normal part of daily life, and commuters now spend hours each week in queues that barely move.\n\nWhat problems does this cause for the people who live in these cities, and what measures could reduce the congestion?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "problems-part",
      description:
        "Identifies and develops the problems congestion creates — lost time, polluted air and noise, and delayed emergency and public services.",
      keywords: ["time", "hour", "commut", "queue", "pollut", "exhaust", "air", "noise", "health", "ambulance", "emergency", "bus", "delay", "productivity"],
    },
    {
      key: "measures-part",
      description:
        "Proposes measures that manage demand — congestion charging, reliable public transport, cycling and walking infrastructure, longer-term planning — rather than relying on road-building alone.",
      keywords: ["measure", "solution", "reduce", "charge", "pricing", "public transport", "bus", "cycle", "pavement", "walk", "plan", "alternativ"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Develops each problem and each measure with a mechanism and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Closes with a conclusion that weighs the measures and states which combination works, instead of repeating the problems.",
      keywords: ["in conclusion", "in summary", "to conclude", "overall", "on balance"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Label the two question parts (1 minute)",
      notes: [
        "Part one asks for PROBLEMS in the plural: a single complaint about traffic is not enough.",
        "Part two asks for MEASURES; each one needs a mechanism, not a wish.",
        "Notice the trap: writing only about the causes of congestion answers neither question.",
      ],
    },
    {
      heading: "Step 2 — Map problems and measures to paragraphs",
      notes: [
        "Introduction: paraphrase the crawl and signpost problems first, measures second.",
        "Body 1 = problems, developed in three layers: time, health, safety.",
        "Body 2 = measures, moving from pricing the road space to funding alternatives to planning the city.",
        "Conclusion: a short verdict on which combination works and why.",
      ],
    },
    {
      heading: "Step 3 — Depth, honesty and time",
      notes: [
        "Give each problem a human unit: the two-hour commuter, the resident on the most congested corridor.",
        "Name real charging schemes (Singapore, London, Stockholm) — one example is worth three adjectives.",
        "Dismiss wider roads briefly and give the reason, because it shows evaluation rather than listing.",
        "Aim for 280–320 words; four well-built paragraphs suit this task.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Across the developed and developing world alike, cities are absorbing new residents faster than their road networks can cope, and the journey to work has slowed to a crawl. This essay looks first at what gridlock costs the people who endure it daily, and then at the measures that have actually been shown to thin it.",
      "The most obvious cost is time. A commuter who loses two hours a day in queues surrenders a working week every month, and that time is subtracted from sleep, family life and study as much as from productivity. Stalled traffic is also dirty traffic: engines idling in jams concentrate exhaust fumes and noise in precisely the streets where people live, walk and wait for buses, and the least wealthy districts are usually pressed closest to the most congested corridors. Congestion is dangerous in quieter ways too, because fire engines, ambulances and ordinary buses all move at the speed of the cars around them, so a city that cannot move cannot respond quickly either.",
      "Since building ever wider roads tends to attract new traffic until the queues return, the durable solutions manage demand rather than multiply supply. Cities that charge drivers for entering the centre at busy times — Singapore, London and Stockholm among them — have consistently freed road space for buses and delivery vehicles. The same revenue can fund the alternative: frequent, affordable public transport, safe cycle routes and pavements wide enough to make walking realistic. Longer term, cities can plan housing, offices and schools near one another, so that fewer journeys are needed at all.",
      "In summary, congestion taxes city dwellers three times over — in hours, in health and in safety — and no single measure removes it. The cities that have succeeded combine pricing that discourages unnecessary car journeys with alternatives attractive enough to win people over, and treat the street itself, rather than the vehicle on it, as the city's main transport.",
    ],
    wordCount: 319,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Paraphrases congestion as growth outrunning roads — 'slowed to a crawl' — and signs the two-part route: costs first, measures second, with the phrase 'actually been shown' quietly promising evidence rather than opinion.",
      },
      {
        role: "Body 1 — the problems",
        analysis:
          "Stacks three costs in rising order of seriousness — time, health, safety — and humanises each: the commuter surrendering a working week a month, the poorest districts beside the worst corridors, the ambulance moving at traffic speed. Every problem arrives as a mechanism, not a moan.",
      },
      {
        role: "Body 2 — the measures",
        analysis:
          "Opens by eliminating the false fix (wider roads refill), then builds the answer in layers: price the scarce road space, spend the revenue on alternatives, plan the city so fewer journeys are needed. The named schemes give the measures credibility that adjectives cannot.",
      },
      {
        role: "Conclusion",
        analysis:
          "Converts the body into a single formula — pricing plus attractive alternatives — and ends by re-framing the street itself as the city's transport, a closing image that echoes the essay's argument without repeating it.",
      },
    ],
    vocabulary: [
      { term: "slowed to a crawl", note: "An idiomatic but precise image for gridlock that keeps the opening paraphrase vivid without exaggeration." },
      { term: "surrenders a working week every month", note: "Converts abstract 'lost time' into a unit any reader can feel — the recipe for making a statistic human." },
      { term: "engines idling in jams", note: "The physical detail that explains why congested streets are polluted streets: the burning happens without the travelling." },
      { term: "manage demand rather than multiply supply", note: "The policy distinction the whole measures paragraph rests on; one phrase carries the argument." },
      { term: "freed road space", note: "A transactional way of describing what congestion charging does — money exchanged for room to move — that stays academic in register." },
    ],
    grammar: [
      {
        feature: "Present simple with frequency phrases for habitual problems",
        example: "A commuter who loses two hours a day in queues surrenders a working week every month",
        note: "Congestion is a repeating condition, so the timeless present with 'every month' frames it as a system rather than an incident.",
      },
      {
        feature: "'So' clause turning observation into consequence",
        example: "buses all move at the speed of the cars around them, so a city that cannot move cannot respond quickly either",
        note: "The 'so' clause packs cause and effect into one sentence, performing analysis without a new paragraph.",
      },
      {
        feature: "Topic sentence that pre-empts an objection",
        example: "Since building ever wider roads tends to attract new traffic until the queues return, the durable solutions manage demand",
        note: "Opening the paragraph with the rejected option shows evaluation; the body then argues from what remains.",
      },
    ],
    coherence:
      "The essay alternates between the human and the systemic: problems are measured in a commuter's month and an ambulance's speed, while measures are measured in pricing, service frequency and land use. Each body paragraph opens with a scope-setting sentence ('The most obvious cost is time', 'Since building ever wider roads…'), and the conclusion fuses the halves into one formula — discourage the unnecessary journey, make the alternative attractive.",
    alternativeExpressions: [
      { insteadOf: "slowed to a crawl", use: "become painfully slow at peak times" },
      { insteadOf: "surrenders a working week every month", use: "loses the equivalent of a week's work every month" },
      { insteadOf: "engines idling in jams", use: "cars running without moving in queues" },
      { insteadOf: "freed road space", use: "made road space available again" },
    ],
    commonMistakes: [
      {
        wrong: "Traffic congestion is caused by too many cars. This essay will discuss the problems and solutions.",
        right: "Congestion costs commuters time, residents their air quality and emergency services their speed — costs this essay weighs before proposing measures.",
        reason: "Announcing structure is not analysing it; a topic sentence should carry an idea, not a table of contents.",
      },
      {
        wrong: "The government should build more roads to solve traffic jams.",
        right: "Wider roads attract new traffic until the queues return, so durable answers price the road space and improve the alternatives.",
        reason: "The obvious fix is the one the evidence contradicts; acknowledging that shows genuine evaluation.",
      },
      {
        wrong: "In my country, traffic is very bad and everyone is angry every day.",
        right: "In my city, the average commute now exceeds an hour each way, and surveys report rising stress among drivers.",
        reason: "Venting is not description; quantified, hedged detail earns the marks that complaint cannot.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "congestion", partOfSpeech: "noun", meaning: "The state of roads being so full of traffic that movement slows or stops." },
    { word: "commuter", partOfSpeech: "noun", meaning: "A person who travels regularly between home and work." },
    { word: "gridlock", partOfSpeech: "noun", meaning: "Complete traffic standstill in which nothing can move." },
    { word: "congestion charging", partOfSpeech: "noun phrase", meaning: "A fee charged for driving into a city centre at busy times." },
    { word: "public transport", partOfSpeech: "noun phrase", meaning: "Buses, trains, trams and other services shared by the general public." },
    { word: "to idle (an engine)", partOfSpeech: "verb", meaning: "To run an engine while the vehicle is not moving." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 3. Problem and solution — overtourism in historic towns
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-problem-solution-overtourism",
  title: "Too many visitors",
  channel: "academic",
  taskType: "task-2",
  family: "problem-solution",
  tier: "practice",
  topic: "culture",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Many small historic towns have become so popular with tourists that their streets are crowded for much of the year, and long-term residents say their home towns are losing their character.\n\nWhat problems does mass tourism create for such places, and how could these problems be reduced?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "pressures-part",
      description:
        "Develops the pressures mass tourism creates — physical wear and crowding of the fabric, and the loss of housing, everyday services and residents.",
      keywords: ["pressure", "problem", "crowd", "wear", "damage", "conservation", "repair", "housing", "resident", "priced out", "holiday let", "shop", "community", "character"],
    },
    {
      key: "measures-part",
      description:
        "Proposes realistic measures — visitor caps and timed entry, spreading demand across the season, tourist taxes spent on restoration and housing — each linked to a pressure it eases.",
      keywords: ["measure", "solution", "reduce", "cap", "limit", "timed", "ticket", "tax", "pricing", "season", "restor", "housing", "promot", "redirect", "neighbouring"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each pressure and each measure with a mechanism and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "so that", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Ends with a conclusion that links the pressures to the remedies and states a realistic aim, without introducing new arguments.",
      keywords: ["in conclusion", "to conclude", "overall", "in short", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the two parts through the town's eyes",
      notes: [
        "The question names the place precisely — small, historic, crowded for much of the year — so write about that town, not tourism in general.",
        "Part one asks for PROBLEMS in the plural; aim for physical and social pressures, not one long complaint.",
        "Part two asks how the problems could be reduced — measures with mechanisms, not slogans about 'sustainable tourism'.",
      ],
    },
    {
      heading: "Step 2 — Structure: fabric, community, remedies",
      notes: [
        "Introduction: paraphrase the visitor-resident imbalance and signpost pressures, then remedies.",
        "Body 1 = physical pressures on the fabric; Body 2 = social and economic pressures on the community.",
        "Body 3 = measures built on three verbs: ration, spread, charge — three mechanisms, three sentences.",
        "Conclusion: the double warning (stones, communities) and the honest aim — a town someone still lives in.",
      ],
    },
    {
      heading: "Step 3 — Language, evidence and restraint",
      notes: [
        "Prepare the register: 'footfall', 'holiday let', 'timed entry', 'visitor cap', 'conservation budget'.",
        "Venice anchors the phenomenon; one named fragile site is enough, then generalise.",
        "Let concrete economics do the arguing: the fridge-magnet sentence is worth a paragraph of adjectives.",
        "Keep the remedies proportionate — a ban on visitors would be an over-correction.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "A handful of beautifully preserved towns — Venice is only the most famous — now receive more visitors in a summer month than they have residents, and the people who live there increasingly feel like strangers at home. This essay examines the pressures mass tourism places on historic towns, and the measures that could relieve them.",
      "The first pressures are written on the fabric of the towns themselves. Centuries-old paving and stairways were laid for a few thousand pedestrians, not for millions of wheeled suitcases, and constant footfall wears soft stone smooth faster than conservation budgets can repair it. Crowding turns lanes that were built as places to linger into corridors to be survived: residents queue behind camera crews at their own bakery, and the everyday services a town needs — the cobbler, the hardware shop — quietly give way to mask stalls and souvenir stands.",
      "The deeper damage is residential. When a flat can earn more as a holiday let than as a home, landlords convert, and the housing available to locals shrinks until nurses, teachers and young families are priced out of the town they serve. Shops follow the same logic, since a visitor buys a refrigerator once but a fridge magnet on every visit. What remains is a handsome stage set that looks historic and behaves like an airport terminal: economically busy, socially empty.",
      "Relief comes from managing numbers and spreading them. Timed-entry tickets and daily visitor caps, already used at several fragile sites, ration the crowds physically, while variable pricing and out-of-season events thin the summer peaks into a longer, gentler season. A substantial tourist tax — spent transparently on restoration and on subsidising ordinary housing — makes each visitor contribute to what their visit costs, and promoting lesser-known neighbouring towns redirects some demand away from the single famous square.",
      "In conclusion, mass tourism hollows out historic towns twice: first their stones, then their communities. None of these remedies keeps visitors away altogether, and none should; the aim is a town that tourists can still recognise because someone still lives there.",
    ],
    wordCount: 339,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Locates the phenomenon through its sharpest symptom — a month of visitors outnumbering the entire population — and names the human stake (residents feeling like strangers) before signing the two-part route through the essay.",
      },
      {
        role: "Body 1 — physical pressures",
        analysis:
          "Reads the town as material: paving worn by suitcases, lanes turned from places to linger into corridors to be survived. The bakery queue and the vanishing cobbler convert crowding from an abstraction into a daily experience, which is the paragraph's whole method.",
      },
      {
        role: "Body 2 — social and economic pressures",
        analysis:
          "Follows the money: holiday lets outbidding homes, souvenir shops outbidding cobblers, ending in the 'handsome stage set' image that fuses the physical and social losses into one verdict — economically busy, socially empty.",
      },
      {
        role: "Body 3 — remedies",
        analysis:
          "Organises the measures as ration, spread and pay: caps and timed tickets, season-thinning pricing and events, a tourist tax visibly spent on stone and housing, plus redirection towards neighbouring towns. Each measure answers a pressure named two paragraphs earlier.",
      },
      {
        role: "Conclusion",
        analysis:
          "Turns the two bodies into a single double warning — stones, then communities — and sets an honest goal: not fewer tourists but a town that still has residents, re-framing the problem rather than repeating it.",
      },
    ],
    vocabulary: [
      { term: "feel like strangers at home", note: "The human symptom of overtourism in four words; it carries the introduction's emotional claim without sentimentality." },
      { term: "footfall wears soft stone smooth", note: "A compact cause-and-effect image that makes conservation arithmetic visible: every step is a small subtraction." },
      { term: "a handsome stage set", note: "The essay's central metaphor — beauty without inhabitants — judged 'economically busy, socially empty' in the same breath." },
      { term: "ration the crowds physically", note: "The verb 'ration' frames caps as fair scarcity management rather than hostility towards visitors." },
      { term: "a longer, gentler season", note: "Replaces the jargon of 'destagionalisation' with plain English any examiner will credit." },
    ],
    grammar: [
      {
        feature: "Contrastive 'not for' apposition",
        example: "were laid for a few thousand pedestrians, not for millions of wheeled suitcases",
        note: "The contrast packs the mismatch between design and use into the same clause, keeping the paragraph dense but readable.",
      },
      {
        feature: "Conditional consequence chain",
        example: "When a flat can earn more as a holiday let than as a home, landlords convert, and the housing available to locals shrinks",
        note: "A 'when…, … and…' chain converts an economic incentive into a housing outcome within a single sentence.",
      },
      {
        feature: "Semi-colon linking paired measures",
        example: "ration the crowds physically, while variable pricing and out-of-season events thin the summer peaks",
        note: "Coordinated clauses hold two parallel mechanisms in one balanced sentence, signalling deliberate structure to the reader.",
      },
    ],
    coherence:
      "The essay keeps one question in view per paragraph: the fabric first, the community second, the remedies third. The metaphors do structural work — 'corridors to be survived' anticipates the stage-set verdict — and each remedy in paragraph four mirrors a pressure from paragraphs two and three, so the reader can trace every cure back to its disease. The conclusion's pairing of stones and communities closes the loop the introduction opened.",
    alternativeExpressions: [
      { insteadOf: "feel like strangers at home", use: "no longer recognise the place they live in" },
      { insteadOf: "corridors to be survived", use: "routes to push through as quickly as possible" },
      { insteadOf: "a handsome stage set", use: "an attractive but lifeless backdrop" },
      { insteadOf: "thin the summer peaks", use: "spread visitors across the year" },
    ],
    commonMistakes: [
      {
        wrong: "Tourism is bad for towns because there are too many tourists.",
        right: "Footfall beyond what paving and services were built for wears the fabric and crowds out daily life.",
        reason: "The circular version restates the prompt; the developed version names the mechanism the question actually asks for.",
      },
      {
        wrong: "Governments should promote sustainable tourism to solve overtourism.",
        right: "Daily visitor caps, timed-entry tickets and a tourist tax spent on housing and restoration reduce the pressures directly.",
        reason: "'Sustainable tourism' is a slogan; examiners reward measures with mechanisms and examples.",
      },
      {
        wrong: "All tourists should be banned from historic towns.",
        right: "The aim is to manage numbers so that residents can keep living — and visitors keep visiting — in the same town.",
        reason: "Over-correcting reads as an unbalanced position; problem-solution essays need proportionate remedies.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "overtourism", partOfSpeech: "noun", meaning: "The situation in which visitor numbers exceed a place's capacity to absorb them." },
    { word: "footfall", partOfSpeech: "noun", meaning: "The number of people walking through an area, treated here as physical wear." },
    { word: "holiday let", partOfSpeech: "noun phrase", meaning: "A property rented to tourists for short stays rather than to long-term residents." },
    { word: "conservation", partOfSpeech: "noun", meaning: "The care and repair of old buildings and historic fabric." },
    { word: "visitor cap", partOfSpeech: "noun phrase", meaning: "A legal limit on the number of tourists allowed per day." },
    { word: "to price out", partOfSpeech: "phrasal verb", meaning: "To make housing or services too expensive for a group to afford." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 4. Cause and effect — rising childhood obesity
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-cause-effect-childhood-obesity",
  title: "Why children gain weight",
  channel: "academic",
  taskType: "task-2",
  family: "cause-effect",
  tier: "practice",
  topic: "health",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many countries, children today are far more likely to be seriously overweight than the children of their parents' generation were.\n\nWhat are the main reasons for this change, and what effects does it have on the children affected?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "causes-part",
      description:
        "Explains the main reasons for the rise — an environment of cheap processed food and child-focused marketing, and the disappearance of everyday movement through screens, car journeys and safety fears.",
      keywords: ["cause", "reason", "because", "food", "process", "sugar", "drink", "advert", "market", "portion", "screen", "play", "exercise", "walk", "car", "safe", "indoor"],
    },
    {
      key: "effects-part",
      description:
        "Develops the effects on the children affected — physical conditions such as early type 2 diabetes and joint strain, and psychological harms from teasing to anxiety and a troubled relationship with food.",
      keywords: ["effect", "consequence", "health", "diabet", "joint", "sleep", "blood pressure", "teas", "anxiety", "confidence", "self-image", "mental", "withdraw"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each reason and each effect with a mechanism and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Ends with a conclusion that hands the causes and effects back to each other instead of introducing new arguments.",
      keywords: ["in conclusion", "to conclude", "overall", "in summary", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Label the two directions (1 minute)",
      notes: [
        "Part one asks WHY the change happened within roughly thirty years — a generational comparison, not a description of children today.",
        "Part two asks for effects on the children affected — not on the health service or the economy.",
        "Keep the two directions separate: causes look backwards, effects look forwards.",
      ],
    },
    {
      heading: "Step 2 — Map causes and effects to paragraphs",
      notes: [
        "Introduction: paraphrase the generational shift and signpost reasons, then consequences.",
        "Body 1 = the food environment; Body 2 = the collapse of everyday movement.",
        "Body 3 = effects, split into physical and psychological halves inside one paragraph.",
        "Conclusion: hand the causes and effects back to each other, and point at the systems rather than the children.",
      ],
    },
    {
      heading: "Step 3 — Language, evidence and tone",
      notes: [
        "Anchor abstract causes in pictures: the boxed meal in ten minutes, the playground that migrated onto a screen.",
        "Hedge medical claims ('increasingly show', 'associated with') — honest hedging reads as academic, not weak.",
        "Reserve the essay's moral energy for the conclusion; the body paragraphs stay analytical.",
        "Two causes and two effect-fronts are enough — breadth beyond that thins every paragraph.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Within a single generation, the average child's silhouette has changed: health services in many countries now treat weight-related conditions in ten-year-olds that were once confined to middle age. This essay traces the reasons behind the sharp rise in childhood obesity, and then follows its consequences for the children who carry it.",
      "The first cause is the food that surrounds children. Processed meals and sugary drinks have become the cheapest and most heavily advertised calories on sale, and a child now sees more marketing for snacks in a month than a parent saw in a whole childhood. Busy households reach for whatever is fast: when both parents return from work late, a boxed meal in ten minutes beats a cooked one in fifty, and packaged portion sizes have quietly grown alongside.",
      "The second cause is the disappearance of everyday movement. A childhood once walked to school, climbed trees and chased friends through the afternoon; today's children are driven door to door, and the playground has migrated onto a screen that is used sitting down. Fear plays its part as well, because in districts perceived as unsafe, keeping a child indoors feels like protection — an act of care that removes the exercise an earlier generation gathered for free.",
      "The effects arrive on two fronts. Physically, children carrying excess weight strain growing joints, sleep badly and increasingly show the early stages of type 2 diabetes and raised blood pressure — conditions paediatricians rarely saw a generation ago. Psychologically, the damage can be harsher still: children absorb teasing early, and a self-image formed around weight in the primary-school years can shade into anxiety, withdrawn behaviour and a lifelong, troubled relationship with food.",
      "In conclusion, children gain weight because the cheapest food is the most processed, the safest journey is by car and the most exciting play is seated, and the resulting costs — medical, emotional and social — fall on the children themselves rather than on the systems that produced the change. Reversing the trend means changing those defaults, not lecturing the children who inherited them.",
    ],
    wordCount: 339,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Frames the change as generational and medical at once — weight-related conditions migrating down the age range — then signs the two-part route: reasons first, consequences after. No position is required yet; the essay is diagnostic.",
      },
      {
        role: "Body 1 — the food environment",
        analysis:
          "Explains the first cause as economics plus time poverty: the cheapest advertised calories and the ten-minute boxed meal beating the fifty-minute cooked one. The mechanism is a household decision, not a character flaw, which keeps the analysis humane and structural.",
      },
      {
        role: "Body 2 — the collapse of movement",
        analysis:
          "Contrasts two childhoods — walked and chased versus driven and seated — then adds the safety-fear twist that makes confinement an act of care. The paragraph answers why movement vanished, not merely that it did, and the final clause names the tragedy inside the protection.",
      },
      {
        role: "Body 3 — the effects",
        analysis:
          "Splits the consequences into physical (joints, sleep, early type 2 diabetes) and psychological (teasing, self-image, a troubled relationship with food), then argues the emotional harm may be the deeper one — evaluation, not just listing.",
      },
      {
        role: "Conclusion",
        analysis:
          "Compresses both causes into one triple clause, names who pays (the children, not the systems), and closes with a principle — change defaults, not children — that re-frames rather than repeats the body paragraphs.",
      },
    ],
    vocabulary: [
      { term: "the average child's silhouette has changed", note: "A visual word for a statistical fact; 'silhouette' keeps the opening humane rather than clinical." },
      { term: "the cheapest and most heavily advertised calories", note: "Reminds the reader that food choice is shaped by price and marketing, framing the cause structurally." },
      { term: "the playground has migrated onto a screen", note: "A single image that carries the whole sedentary-childhood argument without a word of jargon." },
      { term: "an act of care that removes the exercise", note: "Names the paradox of the safety-fear cause: the protective instinct itself contributes to the problem." },
      { term: "a lifelong, troubled relationship with food", note: "Extends the psychological effect into adulthood, showing the long arc of the consequence." },
    ],
    grammar: [
      {
        feature: "Past and present contrast balanced across a semi-colon",
        example: "A childhood once walked to school, climbed trees and chased friends through the afternoon; today's children are driven door to door",
        note: "The balanced contrast performs the generational comparison the prompt asks about inside a single sentence.",
      },
      {
        feature: "Comparative structures to rank evidence",
        example: "the damage can be harsher still",
        note: "The comparative extends an already strong claim, signalling evaluation rather than mere description.",
      },
      {
        feature: "Dash to append a clarifying consequence",
        example: "raised blood pressure — conditions paediatricians rarely saw a generation ago",
        note: "The dash attaches the historical proof to the medical claim, making novelty itself the evidence.",
      },
    ],
    coherence:
      "The essay moves strictly in the question's order — reasons, then consequences — and each cause paragraph opens by numbering itself ('The first cause…', 'The second cause…') so coverage is visible to the examiner. Images echo across paragraphs: the ten-minute meal answers the fifty-minute one, and the seated play of body two returns in the conclusion's triple clause. The final sentence hands responsibility from children to systems, closing the cause-effect loop with a stance.",
    alternativeExpressions: [
      { insteadOf: "the average child's silhouette has changed", use: "children's body weight has risen noticeably" },
      { insteadOf: "the playground has migrated onto a screen", use: "play has shifted from outdoor activity to screens" },
      { insteadOf: "an act of care that removes the exercise", use: "a protective decision that unintentionally reduces activity" },
      { insteadOf: "a lifelong, troubled relationship with food", use: "long-term difficulties with eating and self-image" },
    ],
    commonMistakes: [
      {
        wrong: "Children are fat because they eat too much junk food.",
        right: "The cheapest, most heavily marketed calories are processed ones, so children's diets have shifted towards them for economic reasons.",
        reason: "The blunt version blames appetite; the developed version explains the environment that shapes it.",
      },
      {
        wrong: "Obesity has huge effects on the economy, costing billions every year.",
        right: "The affected children face strained joints, poor sleep and early diabetes, alongside teasing and anxiety.",
        reason: "The question asks about effects on the children, not on health budgets; drifting off-task caps Task Response.",
      },
      {
        wrong: "Parents should simply tell children to eat vegetables and do more sport.",
        right: "When the defaults change — cheaper fresh food, walkable routes, active school days — children's weight follows them.",
        reason: "Advice to individuals is not analysis of causes; the question rewards mechanisms over sermons.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "obesity", partOfSpeech: "noun", meaning: "The medical condition of carrying excessive body fat." },
    { word: "processed food", partOfSpeech: "noun phrase", meaning: "Food altered from its natural state with added salt, sugar and fat." },
    { word: "portion size", partOfSpeech: "noun phrase", meaning: "The amount of food served or packaged as one helping." },
    { word: "sedentary", partOfSpeech: "adjective", meaning: "Involving little physical movement." },
    { word: "type 2 diabetes", partOfSpeech: "noun phrase", meaning: "A metabolic condition, once adult-only, now appearing in overweight children." },
    { word: "self-image", partOfSpeech: "noun", meaning: "The picture a person has of their own worth and appearance." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 5. Cause and effect — loneliness in big cities
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-cause-effect-urban-isolation",
  title: "Loneliness in big cities",
  channel: "academic",
  taskType: "task-2",
  family: "cause-effect",
  tier: "practice",
  topic: "society",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Large cities are home to millions of people, yet surveys consistently find that urban residents report feeling lonelier than people who live in villages and small towns.\n\nWhy do so many city dwellers feel lonely, and what effects does this loneliness have on individuals and on city life?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "causes-part",
      description:
        "Explains the structural causes of urban loneliness — anonymity and transient neighbours, time lost to commuting and long hours, and housing forms that have abolished casual meeting places.",
      keywords: ["cause", "why", "because", "anonym", "transien", "neighbour", "tenanc", "commut", "work", "hour", "housing", "tower", "architecture", "encounter"],
    },
    {
      key: "effects-individuals",
      description:
        "Develops the effects on individuals — stress, disturbed sleep, higher risk of depression and cardiovascular disease, and the withdrawal spiral that deepens isolation.",
      keywords: ["health", "stress", "sleep", "depress", "cardiovascular", "risk", "withdraw", "isol", "mood", "spiral", "mental"],
    },
    {
      key: "effects-city",
      description:
        "Extends the analysis to city life — reliance on paid strangers, distrust in the public realm and a thinning of civic participation.",
      keywords: ["city", "community", "civic", "distrust", "public", "street", "neighbour", "associat", "commons", "participat", "belong"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each cause and each effect with a mechanism and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Closes with a conclusion that links the causes to the effects and points forward without introducing new arguments.",
      keywords: ["in conclusion", "to conclude", "overall", "in short", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Take the paradox seriously (2 minutes)",
      notes: [
        "The prompt is built on an apparent contradiction — crowds and loneliness together — so the essay must explain how both can be true, not just assert it.",
        "Part one asks WHY; part two asks for EFFECTS at two levels: individuals and city life.",
        "Keep personal stories illustrative; the question is structural.",
      ],
    },
    {
      heading: "Step 2 — Structure: one causes block, two effects blocks",
      notes: [
        "Introduction: name the irony and signpost causes, then the two levels of effect.",
        "Body 1 = three structural causes: anonymity, time poverty, architecture.",
        "Body 2 = effects on individuals (health and withdrawal); Body 3 = effects on the city (distrust, thinning civic life).",
        "Conclusion: link the halves and note that designed problems have designed remedies.",
      ],
    },
    {
      heading: "Step 3 — Language and honesty",
      notes: [
        "Prepare the register: 'transient', 'civic life', 'public realm', 'chronic loneliness', 'to withdraw'.",
        "One medical-style hedge ('is associated with') keeps the health claims honest and academic.",
        "The corridor/commons contrast can carry the whole city-effects paragraph — write towards it.",
        "Budget roughly 90 words for causes and 130 for effects, since the question weights effects double.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The defining irony of the modern metropolis is that it packs people closer together than any previous settlement and leaves many of them feeling unknown. This essay asks why city life produces loneliness on such a scale, and what that loneliness does both to the individuals who feel it and to the streets around them.",
      "The causes lie in the structure of urban life rather than in urban character. First, anonymity is almost a design feature: a city of transients, short tenancies and rotating neighbours offers few of the repeated, unplanned encounters that turn a face into a friendship. Second, the commuter city leaves little time for the encounters it does allow, since long journeys and longer working hours convert evenings into recovery rather than sociability. Third, the physical form itself — tower blocks entered by lift, corridors of identical closed doors — has abolished the doorstep, the corner shop and the courtyard, the places where small talk used to be manufactured for free.",
      "For individuals, chronic loneliness behaves less like a mood than like a health condition. Sustained isolation is associated with raised stress, disturbed sleep and a measurably higher risk of depression and cardiovascular disease; the body, it seems, registers the absence of people as the presence of threat. Loneliness also deepens itself, because the loneliest people withdraw from exactly the gatherings — a class, a club, a friendly nod — that would begin to reverse the spiral.",
      "At the level of the city, the costs are quieter but cumulative. Streets where residents do not know each other rely on paid strangers for care that neighbours once provided, and distrust grows in the spaces between them, until the public realm is experienced as a corridor rather than a commons. Civic life thins: fewer people join associations, greet strangers or intervene when something goes wrong, so the metropolis grows simultaneously busier and less connected.",
      "In conclusion, urban loneliness grows out of anonymity, time poverty and architecture, and it feeds back into worse health and thinner communities. The encouraging corollary is that whatever was designed can be redesigned: a city that engineers encounters — benches, libraries, shared courtyards, walkable streets — can engineer some of the connection back.",
    ],
    wordCount: 362,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "States the paradox in its sharpest form — packed together, feeling unknown — and turns it into the essay's two questions. Signposting follows immediately: causes, then effects on individuals and on the city, exactly the levels the rubric names.",
      },
      {
        role: "Body 1 — the causes",
        analysis:
          "Builds three structural causes in strict sequence: anonymity by design, time poverty, and architecture that has abolished the free meeting places. 'Manufactured for free' re-frames sociability as infrastructure, the paragraph's key analytical move.",
      },
      {
        role: "Body 2 — effects on individuals",
        analysis:
          "Treats loneliness as physiology rather than mood — stress, sleep, cardiovascular risk — with the striking claim that the body reads the absence of people as the presence of threat. The withdrawal spiral then extends the effect into a self-deepening loop.",
      },
      {
        role: "Body 3 — effects on city life",
        analysis:
          "Scales the damage outward: paid strangers replacing neighbours, distrust filling the gaps, a public realm felt as corridor rather than commons. 'Busier and less connected' resolves the essay's opening paradox from the far side.",
      },
      {
        role: "Conclusion",
        analysis:
          "Compresses causes and effects into one sentence each, then reverses the direction: what was designed can be redesigned. The benches-libraries-streets triple ends the essay with agency instead of gloom and without new claims.",
      },
    ],
    vocabulary: [
      { term: "feeling unknown", note: "Replaces 'lonely' with a fresher phrase that captures anonymity rather than solitude — the essay's central distinction." },
      { term: "repeated, unplanned encounters", note: "The sociological mechanism of friendship in three words; it gives the causes paragraph its analytical spine." },
      { term: "manufactured for free", note: "Re-frames small talk as infrastructure that older urban forms produced and new ones have quietly demolished." },
      { term: "registers the absence of people as the presence of threat", note: "The essay's most quotable mechanism, translating loneliness into physiology without jargon." },
      { term: "a corridor rather than a commons", note: "A paired metaphor that carries the city-level effect; 'commons' quietly invokes shared ownership of public space." },
    ],
    grammar: [
      {
        feature: "Parallel listing with 'First… Second… Third…'",
        example: "First, anonymity is almost a design feature… Second, the commuter city leaves little time… Third, the physical form itself",
        note: "Numbered signposts make a three-cause paragraph scannable, and the parallel openings are cohesion in themselves.",
      },
      {
        feature: "Comparative 'less… than…' re-framing",
        example: "chronic loneliness behaves less like a mood than like a health condition",
        note: "The comparison re-frames the topic; the grammar itself performs the argument the paragraph goes on to prove.",
      },
      {
        feature: "Interpolated 'it seems' for hedged inference",
        example: "the body, it seems, registers the absence of people as the presence of threat",
        note: "The aside marks a research-flavoured inference as interpretation rather than fact — honest academic caution.",
      },
    ],
    coherence:
      "The essay is held together by one paradox, stated in the introduction and resolved in the city-effects paragraph: crowded yet unknown, busier yet less connected. Causes are numbered so coverage is visible; effects escalate from the body ('stress, sleep') to the street ('corridor rather than commons'), and the conclusion converts the diagnosis into agency — designed problems can be redesigned — giving the cause-effect chain a forward exit.",
    alternativeExpressions: [
      { insteadOf: "feeling unknown", use: "feeling invisible to those around them" },
      { insteadOf: "convert evenings into recovery rather than sociability", use: "leave people too tired to socialise in the evening" },
      { insteadOf: "manufactured for free", use: "produced without any planning or cost" },
      { insteadOf: "a corridor rather than a commons", use: "a place to pass through rather than a place to share" },
    ],
    commonMistakes: [
      {
        wrong: "City people are lonely because they are cold and unfriendly.",
        right: "Urban anonymity, long commutes and housing design leave little room for the repeated encounters that build friendship.",
        reason: "Blaming personality answers a different question; the prompt asks about city life, not city character.",
      },
      {
        wrong: "Loneliness makes people sad and unhealthy.",
        right: "Chronic isolation is associated with disturbed sleep, raised stress and higher cardiovascular risk, and it deepens through withdrawal.",
        reason: "The vague version lists labels; the developed version names mechanisms and the spiral that feeds them.",
      },
      {
        wrong: "Therefore governments should build more parks immediately.",
        right: "A city that engineers encounters — benches, libraries, walkable streets — can engineer some of the connection back.",
        reason: "A bolted-on solutions block reads as off-task; this question asks why loneliness arises and what follows from it.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "isolation", partOfSpeech: "noun", meaning: "The state of being cut off from regular human contact." },
    { word: "anonymity", partOfSpeech: "noun", meaning: "The condition of being unknown, even among many people." },
    { word: "transient", partOfSpeech: "adjective", meaning: "Staying somewhere only briefly before moving on." },
    { word: "civic life", partOfSpeech: "noun phrase", meaning: "The shared activities and associations that connect a city's residents." },
    { word: "public realm", partOfSpeech: "noun phrase", meaning: "The streets, squares and spaces people share outside their homes." },
    { word: "to withdraw", partOfSpeech: "verb", meaning: "To pull back from social contact, often making isolation worse." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 6. Two-part question — digital museums
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-two-part-museums-tech",
  title: "Digital museums",
  channel: "academic",
  taskType: "task-2",
  family: "two-part",
  tier: "practice",
  topic: "culture",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Major museums now place high-resolution images of their paintings, manuscripts and artefacts online, where anyone can examine them without buying a ticket or travelling.\n\nWhy are museums digitising their collections in this way, and will viewing collections online ever replace the experience of visiting a museum in person?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "reasons-part",
      description:
        "Explains why museums digitise — widening access beyond those who can travel, preserving fragile originals through digital surrogates, and staying relevant to audiences who expect services online.",
      keywords: ["reason", "why", "because", "access", "online", "digitis", "preserv", "fragile", "surrogate", "scholar", "research", "audience", "relevan", "reach"],
    },
    {
      key: "verdict-part",
      description:
        "States a clear position on replacement — here, that online access will transform museums but will not replace the physical visit — early in the essay and maintains it to the end.",
      keywords: ["replace", "will not", "cannot", "instead", "rather", "however", "argue", "believe", "transform", "complement", "division"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Develops each reason and each side of the verdict with a mechanism and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Ends with a conclusion that restates the position in fresh words and answers both questions in one breath.",
      keywords: ["in conclusion", "to conclude", "overall", "in short", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Separate explanation from verdict (2 minutes)",
      notes: [
        "Question one is explanatory (WHY digitise); question two demands a verdict (will online REPLACE the visit?).",
        "A verdict is compulsory: 'both have advantages' is not an answer to 'will it replace'.",
        "Decide the position before writing — here: transform, yes; replace, no.",
      ],
    },
    {
      heading: "Step 2 — Structure: reasons, then the case for the verdict",
      notes: [
        "Introduction: paraphrase the midnight screen and state the verdict in advance.",
        "Body 1 = three reasons: access, preservation, institutional survival.",
        "Body 2 = what the visit does that the screen cannot (object, scale, ritual).",
        "Body 3 = the division of labour: what moves online, what stays physical.",
        "Conclusion: answer both questions in one sentence each.",
      ],
    },
    {
      heading: "Step 3 — Language, metaphor and honesty",
      notes: [
        "Write 'the ridge of paint' rather than 'impasto' — plain words carry technical ideas further.",
        "The shop-window metaphor is the pivot: preview versus performance.",
        "Concede what the screen genuinely does better; a verdict that ignores the strong opposing case looks naive.",
        "Keep the verdict visible in every paragraph — two-part essays are marked question by question.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The treasures of the great collections — a Vermeer, a medieval manuscript, a pharaoh's funeral mask — can now be inspected on a phone at midnight, in a resolution fine enough to show individual brushstrokes. This essay explains why museums are digitising their collections at speed, and argues that online access will transform these institutions without replacing the visit itself.",
      "The digitisation drive has three engines. Access comes first: a virtual gallery costs a distant villager nothing, while the physical gallery costs a flight, a hotel and a day's leave — and online there are no queues, no crowds and no closing time. Preservation is the second engine, because photographing fragile items creates a surrogate that scholars can consult a thousand times without a single fibre of the original being touched. The third is survival: institutions funded by public goodwill cannot afford to look like gatekeepers to a pastime of the privileged, and to younger audiences a museum with no online presence looks like a museum with no future.",
      "Against that, the physical visit does things a screen cannot, and visitors seem to know it. A painting is an object before it is an image: its true scale, the ridge of paint under the gallery light, even the hush of the room are part of the work, and no zoom function reproduces the experience of standing in front of it. The visit is also a social and ritual event — a slow walk in company, a day out — in a way that scrolling a collection alone at midnight is not.",
      "The likelier future is a division of labour. Online access will absorb the functions it performs better: research, repeat viewing, classroom teaching and the casual browse of people who would never have bought a ticket. In the process the screen becomes a shop window, and the evidence so far suggests that the window draws people through the door rather than keeping them away. The online collection is the preview; the gallery remains the performance.",
      "In conclusion, museums digitise to widen access, protect fragile originals and stay relevant to audiences who live online, and these are reasons to expect more screens rather than fewer visitors. The two formats will increasingly do different jobs, and it is that division of labour, not the victory of one over the other, that will define the museum of the coming decades.",
    ],
    wordCount: 392,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Opens with the sharpest image of the change — a pharaoh's mask on a phone at midnight — and states the verdict (transform, not replace) in the second sentence, honouring the two-part family's demand for an early, visible position.",
      },
      {
        role: "Body 1 — the reasons",
        analysis:
          "Numbers three engines in rising order of urgency: access, preservation, institutional survival. Each reason carries its mechanism — no queues and no closing time, a surrogate consulted a thousand times, a museum with no online presence looking like one with no future — so the paragraph explains rather than asserts.",
      },
      {
        role: "Body 2 — what the screen cannot do",
        analysis:
          "Grounds the verdict in the physics of objects: scale, the ridge of paint, the hush of the room, the ritual of a shared day out. The claim stays experiential rather than snobbish, which makes it hard to refute and easy to credit.",
      },
      {
        role: "Body 3 — the division of labour",
        analysis:
          "Concedes what online genuinely does better — research, teaching, the casual browse — and re-frames the screen as a shop window that draws visitors through the door, converting potential competition into a funnel. The preview/performance sentence is the essay's pivot.",
      },
      {
        role: "Conclusion",
        analysis:
          "Answers both questions in one breath: more screens, not fewer visitors, because the formats do different jobs. The final clause projects the position into the future without introducing a new argument.",
      },
    ],
    vocabulary: [
      { term: "inspected on a phone at midnight", note: "Compresses the whole accessibility argument into one scene: no ticket, no travel, no opening hours." },
      { term: "a surrogate that scholars can consult", note: "The preservation argument's key noun: a substitute that absorbs the wear of use in place of the original." },
      { term: "gatekeepers to a pastime of the privileged", note: "Names the reputational risk museums fear, and explains the survival motive in six words." },
      { term: "a painting is an object before it is an image", note: "The essay's central distinction, stated as a reversal the reader can carry away and apply to any artwork." },
      { term: "the preview; the gallery remains the performance", note: "The pivot metaphor of the division-of-labour paragraph, balancing both halves of the verdict in one clause pair." },
    ],
    grammar: [
      {
        feature: "Varied signposts for enumerable reasons",
        example: "Access comes first… Preservation is the second engine… The third is survival",
        note: "Recognisable but non-mechanical signposts guide the examiner through three reasons without template repetition.",
      },
      {
        feature: "Triple 'no' for rhythmic emphasis",
        example: "there are no queues, no crowds and no closing time",
        note: "The triple negative performs the accessibility argument rhythmically, making the abstract point felt.",
      },
      {
        feature: "Semi-colon balancing a contrast",
        example: "The online collection is the preview; the gallery remains the performance",
        note: "A balanced semi-colon sentence mirrors the balanced verdict — the form echoes the argument it carries.",
      },
    ],
    coherence:
      "The verdict announced in the introduction is defended in stages: the reasons paragraph concedes everything the screen does well, the object paragraph claims what only the room can do, and the division-of-labour paragraph reconciles the two. Preview and performance, shop window and door, object and image — paired metaphors recur to keep the position visible, and the conclusion answers both question marks in sequence.",
    alternativeExpressions: [
      { insteadOf: "inspected on a phone at midnight", use: "studied at any hour on a personal device" },
      { insteadOf: "a surrogate that scholars can consult", use: "a substitute that researchers can examine repeatedly" },
      { insteadOf: "gatekeepers to a pastime of the privileged", use: "barriers that exclude people without money or travel opportunities" },
      { insteadOf: "the gallery remains the performance", use: "the visit still delivers the experience" },
    ],
    commonMistakes: [
      {
        wrong: "Online museums are good because technology is the future.",
        right: "Digitisation widens access, protects fragile originals and keeps institutions relevant to audiences who live online.",
        reason: "Slogans answer nothing; the 'why' question demands named motives with mechanisms.",
      },
      {
        wrong: "Online and real museums both have advantages and disadvantages.",
        right: "Online access will transform museums but will not replace the visit, because objects and ritual cannot be streamed.",
        reason: "The fence-sitting version refuses the verdict the second question explicitly requires.",
      },
      {
        wrong: "In conclusion, museums are very important for culture and education.",
        right: "In conclusion, museums digitise for access, preservation and relevance, and the screen will complement rather than replace the room.",
        reason: "A generic conclusion forgets both questions; the model's closing answers each in turn.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to digitise", partOfSpeech: "verb", meaning: "To convert objects or documents into digital images and files." },
    { word: "artefact", partOfSpeech: "noun", meaning: "An object made by people, often of historical interest." },
    { word: "access", partOfSpeech: "noun", meaning: "The ability to reach, view or use something." },
    { word: "preservation", partOfSpeech: "noun", meaning: "Protecting objects from damage, decay or loss." },
    { word: "surrogate", partOfSpeech: "noun", meaning: "A substitute that stands in for something fragile or distant." },
    { word: "to replace", partOfSpeech: "verb", meaning: "To take the place of something entirely." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 7. Two-part question — the rise of gig work
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-two-part-gig-economy",
  title: "The rise of gig work",
  channel: "academic",
  taskType: "task-2",
  family: "two-part",
  tier: "practice",
  topic: "economics",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many economies, the secure permanent job with a single employer is giving way to short-term contracts, freelance projects and platform-based assignments arranged through an app.\n\nWhy is this style of working expanding so rapidly, and what advantages does it offer the people who choose it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "drivers-part",
      description:
        "Explains the drivers of the expansion — platform technology that makes small-scale hiring effortless, employers' demand for elastic costs, and workers' own preference for independence — with mechanisms.",
      keywords: ["reason", "why", "because", "platform", "technolog", "app", "match", "employer", "firm", "cost", "elastic", "demand", "flexib", "client", "prefer", "independ", "risk"],
    },
    {
      key: "advantages-part",
      description:
        "Develops the advantages for the workers who choose gig work — autonomy over hours and location, variety and faster skill-building, and access for people excluded from conventional employment.",
      keywords: ["advantage", "benefit", "autonomy", "freedom", "flexib", "choose", "variety", "skill", "experience", "portfolio", "access", "opportunit", "control"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each driver and each advantage with an explanation and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Ends with a conclusion that fuses the drivers and the advantages into a single explanation of the growth, without new arguments.",
      keywords: ["in short", "in conclusion", "to conclude", "overall", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the two questions inside the prompt (2 minutes)",
      notes: [
        "Question one asks WHY gig work is expanding — an explanation of the labour market, not a description of apps.",
        "Question two asks for ADVANTAGES for workers specifically, not a general pros-and-cons list.",
        "The prompt says 'the people who choose it' — the answer should honour that framing.",
      ],
    },
    {
      heading: "Step 2 — Structure: drivers, then advantages",
      notes: [
        "Introduction: paraphrase the portfolio of gigs and signpost drivers, then advantages.",
        "Body 1 = three drivers: platforms, employer economics, worker preference.",
        "Body 2 = advantages of autonomy and variety; Body 3 = access, plus one honest sentence on the trade-off.",
        "Conclusion: fuse drivers and advantages into one explanation of the growth.",
      ],
    },
    {
      heading: "Step 3 — Evidence and honesty",
      notes: [
        "Concrete pictures beat abstractions: the student driver between lectures, the designer with clients on three continents.",
        "One concessive sentence ('it is true that…') keeps an advantages essay honest without drifting into a disadvantages essay.",
        "Borrow the question's own register — 'gig', 'platform', 'portfolio career' — and use it precisely.",
        "Check at minute 34 that both question marks have a dedicated block.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "A growing share of the workforce now earns a living not from a single employer but from a portfolio of gigs: design commissions, delivery rounds, writing contracts, consulting sprints. This essay explains why this style of working has expanded so quickly, and sets out the advantages it genuinely offers the people who take it up.",
      "Technology is the visible engine. Digital platforms match a task with a willing worker in seconds, across a city or across a planet, and they carry the payment, the rating and the paperwork that once made small-scale hiring impractical. Behind them stand employers' preferences: a workforce that can be engaged for a fortnight and released without notice lets firms ride demand without carrying fixed costs through quiet seasons. Part of the growth, finally, comes from workers themselves — particularly a generation that has watched the job-for-life disappear and prefers to spread the risk across many clients rather than one employer's balance sheet.",
      "For the workers who choose it, the first advantage is autonomy. A gig worker decides which jobs to accept, when to work and often where: the freelancer can schedule deep work at dawn, and a student driver can fold delivery rounds between lectures. The second is variety and speed of learning, because moving from project to project accumulates skills, contacts and portfolio pieces that a decade in one department might not.",
      "The advantages extend beyond convenience to access. Platform work lets people whom the conventional labour market excludes — carers tied to the school run, residents of regions without local employers, newcomers building a track record — sell their skills on equal terms, so that a designer in a small town can hold clients on three continents. It is true that this arrangement trades security for flexibility, and that the trade is easier for some to make than others; but that is precisely why the advantages matter, since for millions they are not perks but the difference between working and not working.",
      "In short, gig work has grown because platforms made small-scale hiring effortless, firms wanted elastic costs and many workers preferred independence, and it rewards its practitioners with autonomy, accelerated experience and access that geography and office hours once denied. Those advantages, rather than any ideology, explain why the portfolio career keeps expanding.",
    ],
    wordCount: 378,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Defines gig work through its most vivid feature — a portfolio of commissions and rounds — and signs the two-part route: expansion first, advantages after. The phrase 'the people who take it up' quietly adopts the question's own frame.",
      },
      {
        role: "Body 1 — the drivers",
        analysis:
          "Builds a three-layer explanation: technology (matching in seconds), employer economics (elastic costs), and worker preference (spreading risk across many clients). Each driver gets its mechanism, so the expansion reads as structural rather than fashionable.",
      },
      {
        role: "Body 2 — autonomy and variety",
        analysis:
          "Develops the first two advantages through lived detail: dawn deep work, deliveries folded between lectures, the portfolio a decade in one department would not build. The advantages are shown in action rather than asserted, which is what 'develop' means to an examiner.",
      },
      {
        role: "Body 3 — access and the honest bound",
        analysis:
          "Extends the case to those the conventional market excludes — carers, regions without employers, newcomers — and closes with one concessive sentence on the security trade-off that keeps the essay honest while still answering the question actually asked.",
      },
      {
        role: "Conclusion",
        analysis:
          "Replays drivers and advantages in a single fused sentence and explains the persistence of the growth — volatility notwithstanding. The final clause credits the advantages rather than any ideology, closing without new claims.",
      },
    ],
    vocabulary: [
      { term: "a portfolio of gigs", note: "Replaces 'short-term contracts' with the question's own world rendered concretely: many small commitments instead of one large one." },
      { term: "ride demand without carrying fixed costs", note: "The employer-side mechanism in one clause; 'ride' and 'carry' make cost structures physical." },
      { term: "spread the risk across many clients rather than one balance sheet", note: "Reverses the usual framing: independence as diversification, permanent employment as concentration." },
      { term: "fold delivery rounds between lectures", note: "A domestic-scale picture that shows autonomy better than any abstract definition of flexibility." },
      { term: "not perks but the difference between working and not working", note: "The paragraph's evaluative peak: it ranks the advantages by stakes rather than comfort." },
    ],
    grammar: [
      {
        feature: "Present simple for systemic capability",
        example: "Digital platforms match a task with a willing worker in seconds",
        note: "The modal-less present states the platform's capability as plain fact, which suits an explanation of how the market now works.",
      },
      {
        feature: "Concessive 'it is true that… but…'",
        example: "It is true that this arrangement trades security for flexibility …; but that is precisely why the advantages matter",
        note: "One concessive sentence absorbs the counter-case without letting it colonise an advantages essay.",
      },
      {
        feature: "Triadic list with rising length",
        example: "autonomy, accelerated experience and access that geography and office hours once denied",
        note: "The triple summarises three paragraphs in one breath, with the longest item last for a closing cadence.",
      },
    ],
    coherence:
      "The essay answers its two questions in strict order, and the conclusion fuses them: the drivers explain the supply of gig work, the advantages explain the demand for it, and the growth persists because both sides keep choosing it. Concrete pictures — the dawn deep worker, the student driver, the three-continent designer — recur across paragraphs to keep abstraction grounded, and the single concessive sentence in body three is picked up by the conclusion's 'volatility notwithstanding', closing the loop without opening a new argument.",
    alternativeExpressions: [
      { insteadOf: "a portfolio of gigs", use: "a collection of short assignments for different clients" },
      { insteadOf: "ride demand without carrying fixed costs", use: "respond to demand without permanent staffing costs" },
      { insteadOf: "fold delivery rounds between lectures", use: "fit delivery work around their studies" },
      { insteadOf: "not perks but the difference between working and not working", use: "not merely convenient but essential to having any income" },
    ],
    commonMistakes: [
      {
        wrong: "Gig work grows because of globalisation and the internet.",
        right: "Platforms match tasks and workers in seconds, employers gain elastic costs, and many workers prefer independence — three mechanisms, not one buzzword.",
        reason: "Named forces without mechanisms explain nothing; the 'why' question rewards the chain from technology to behaviour.",
      },
      {
        wrong: "Gig work is bad because workers have no holidays or pensions.",
        right: "For those who choose it, gig work offers autonomy, rapid skill-building and access that conventional jobs deny — though security is the price.",
        reason: "The question asks for advantages; an essay answering a different question under-covers the task it was set.",
      },
      {
        wrong: "Uber, Deliveroo and Upwork are examples of gig platforms.",
        right: "A student driver folding delivery rounds between lectures shows what platform autonomy looks like in practice.",
        reason: "Listing brand names is not exemplification; a worked example carries the analysis.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "gig", partOfSpeech: "noun", meaning: "A single short piece of paid work, often found through an app." },
    { word: "platform", partOfSpeech: "noun", meaning: "A digital service that matches workers with tasks and handles payment." },
    { word: "freelance", partOfSpeech: "adjective", meaning: "Working independently for different clients rather than one employer." },
    { word: "autonomy", partOfSpeech: "noun", meaning: "Control over one's own decisions, hours and methods of working." },
    { word: "portfolio career", partOfSpeech: "noun phrase", meaning: "A working life built from several simultaneous roles and clients." },
    { word: "elastic", partOfSpeech: "adjective", meaning: "Able to expand or contract quickly, used here of costs and staffing." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 8. Direct questions — saving minority languages
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-direct-questions-language-preservation",
  title: "Saving minority languages",
  channel: "academic",
  taskType: "task-2",
  family: "direct-questions",
  tier: "practice",
  topic: "culture",
  difficulty: 5,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Experts estimate that of the several thousand languages spoken in the world today, a large proportion will have fallen silent by the end of this century, as children grow up speaking only dominant national or global languages.\n\nWhy are minority languages disappearing, and do you think it is worth trying to save them?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "disappearance-part",
      description:
        "Explains why minority languages die — economic and educational gravity towards dominant languages, the break in transmission between generations, and urbanisation scattering speech communities.",
      keywords: ["disappear", "reason", "why", "because", "dominant", "economic", "job", "school", "parent", "transmi", "generation", "children", "urbanis", "city", "community"],
    },
    {
      key: "worth-saving-part",
      description:
        "Answers the second question with a clear personal position, supported by distinct arguments — the knowledge a language encodes, identity and public recognition, and the irreversibility of loss.",
      keywords: ["worth", "save", "believe", "argue", "think", "identity", "knowledge", "archive", "irreplac", "recognition", "community", "culture", "loss", "permanent"],
    },
    {
      key: "objection-handled",
      description:
        "Engages the practicality objection — thousands of languages, finite budgets — and answers it with status, daily use and bilingualism rather than ignoring it.",
      keywords: ["objection", "however", "practical", "cost", "budget", "realistic", "document", "bilingual", "status", "teach", "broadcast", "official", "use"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each argument with mechanisms and concrete examples such as Welsh or Māori revitalisation.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Ends with a conclusion that answers both questions and weighs cost against permanence.",
      keywords: ["in conclusion", "to conclude", "overall", "in short", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Two questions, two answer blocks (2 minutes)",
      notes: [
        "Question one is explanatory: WHY languages fall silent — look for mechanisms, not villains.",
        "Question two demands a personal verdict ('do you think') — take one and defend it.",
        "The difficulty sits in the breadth: keep each argument compact or the essay will not fit 40 minutes.",
      ],
    },
    {
      heading: "Step 2 — Structure: mechanism, case, objection",
      notes: [
        "Introduction: the last-speaker image, then the thesis stated at once.",
        "Body 1 = the disappearance mechanism: economic gravity, broken transmission, urbanisation.",
        "Body 2 = the case for saving: archive, identity, irreversibility.",
        "Body 3 = the practicality objection, answered with status, use and bilingualism.",
        "Conclusion: both answers in one sentence pair, cost versus permanence.",
      ],
    },
    {
      heading: "Step 3 — Language, caution and tone",
      notes: [
        "The love-that-breaks-the-chain sentence is the essay's most original move — write it carefully.",
        "Name revitalisation successes (Welsh, Māori) but hedge the effects — 'suggests', not invented statistics.",
        "Avoid elegy throughout; the verdict must sound argued, not mournful.",
        "Reserve 'irreplaceable' and 'permanent' for the conclusion, where the weighing happens.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Every few months a language loses its last fluent speaker, and with that speaker an entire way of describing the world; linguists expect the rhythm to accelerate until, by the end of this century, a large share of the languages spoken today may have fallen silent. This essay asks why minority languages are disappearing, and argues that saving as many as possible is worth real effort and public money.",
      "The reasons are less sinister than they once were, but more effective. Economic gravity does the quiet work: jobs, schooling, administration and entertainment arrive in the dominant language, so parents who want their children to prosper raise them in it — a decision made out of love that breaks the chain of transmission within a single generation. Urbanisation completes the process, scattering speech communities into cities where the minority tongue has no street, no market and no classroom, and where marrying outside the group becomes normal. The young then meet their grandparents' language as a school subject, if at all — and subjects, unlike mother tongues, can be dropped.",
      "Is such a language worth saving? I believe it is, first for what it contains. A language is not a neutral container that any other language could carry equally well: it encodes a community's names for plants and weather, its humour, its memory of land and law, and the very categories through which its speakers think. When it dies, that archive does not wait in a vault — it ceases to exist. A language is also identity made audible: to hear one's own language in a train announcement or a courtroom is to be recognised as a people, and revitalised languages from Welsh to Māori suggest that this recognition strengthens a community's confidence and health.",
      "The objection worth taking seriously is practicality: with thousands of endangered languages and finite budgets, can most be saved only on paper? The answer is that saving a language does not mean freezing a village in the past. What works is status and use — teaching through the medium of the language, broadcasting in it, giving it official standing — and bilingualism, which is a normal human condition rather than a burden; children in Wales or Québec manage two languages without losing either. Where full revival is unrealistic, systematic documentation at least preserves the record for any future attempt.",
      "In conclusion, minority languages are dying because economic life runs through dominant tongues and transmission between generations has broken, and they are worth saving because each is an irreplaceable archive and an audible identity. The cost of saving them is real, but the cost of silence is permanent.",
    ],
    wordCount: 437,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Opens with the last fluent speaker — the sharpest possible image of loss — and states the verdict (worth real effort and public money) in the second sentence, the early commitment that direct-questions essays reward.",
      },
      {
        role: "Body 1 — why languages die",
        analysis:
          "Explains disappearance through love rather than malice: parents choosing the dominant language for their children's sake. The school-subject analogy at the end — subjects can be dropped, mother tongues cannot — crystallises the transmission argument.",
      },
      {
        role: "Body 2 — the case for saving",
        analysis:
          "Builds two arguments: the language as an untranslatable archive of knowledge and thought, and language as audible identity whose public presence confers recognition. Welsh and Māori ground the claim in real revitalisation rather than sentiment.",
      },
      {
        role: "Body 3 — the objection answered",
        analysis:
          "Takes the strongest counter — thousands of languages, finite budgets — and answers it with status and use rather than nostalgia: teaching, broadcasting, official standing, bilingualism as a normal condition, with documentation as the honest fallback.",
      },
      {
        role: "Conclusion",
        analysis:
          "Answers both question marks in one sentence pair and closes on the essay's weighing mechanism: the cost of saving is real, the cost of silence permanent — an asymmetry rather than a slogan.",
      },
    ],
    vocabulary: [
      { term: "fallen silent", note: "The essay's recurring image for language death — absence of voice rather than loss of data — humane and precise at once." },
      { term: "economic gravity", note: "A two-word metaphor that explains why parents choose dominant languages without blaming them for the choice." },
      { term: "breaks the chain of transmission", note: "The technical core of language death — intergenerational transmission — rendered in plain, visual English." },
      { term: "that archive does not wait in a vault", note: "The irreversibility argument as an image: unlike documents, unwritten knowledge dies with its speakers." },
      { term: "identity made audible", note: "Compresses the recognition argument into four words — language as public, heard belonging." },
    ],
    grammar: [
      {
        feature: "Balanced concession with 'less… but…'",
        example: "The reasons are less sinister than they once were, but more effective",
        note: "The contrastive frame sets up the paragraph's thesis — modern language death is structural, not brutal — in one clause pair.",
      },
      {
        feature: "Tacked-on 'if at all' for erosion",
        example: "meet their grandparents' language as a school subject, if at all",
        note: "Three appended words perform the erosion: even the subject may not be taught, and the understatement carries the argument.",
      },
      {
        feature: "Rhetorical question as paragraph pivot",
        example: "Is such a language worth saving?",
        note: "The question echoes the rubric verbatim, marking exactly where the essay's second answer begins — cohesion by echo.",
      },
    ],
    coherence:
      "The essay is built as two answers with a hinge: paragraph two answers why, paragraphs three and four answer whether, and the rhetorical question 'Is such a language worth saving?' is the hinge itself, quoting the prompt at the exact turn. The image system — silence, chains, archives — recurs in every paragraph and returns in the conclusion's 'cost of silence', so the verdict feels prepared rather than announced.",
    alternativeExpressions: [
      { insteadOf: "fallen silent", use: "stopped being spoken entirely" },
      { insteadOf: "economic gravity", use: "the pull of the dominant language's economic advantages" },
      { insteadOf: "breaks the chain of transmission", use: "ends the passing of the language from parents to children" },
      { insteadOf: "identity made audible", use: "a spoken form of belonging" },
    ],
    commonMistakes: [
      {
        wrong: "Minority languages die because of English and globalisation.",
        right: "Parents raise children in dominant languages because schooling, jobs and media run through them — prosperity, not pressure, breaks transmission.",
        reason: "Naming a villain is not a mechanism; the essay must show how the choice is actually made.",
      },
      {
        wrong: "Every language must be saved at any cost.",
        right: "Where full revival is unrealistic, documentation and bilingual education preserve what finite budgets allow.",
        reason: "Absolute positions ignore the practicality objection; a defensible verdict ranks effort honestly.",
      },
      {
        wrong: "Welsh is a minority language that was saved by the government.",
        right: "Welsh gained teaching, broadcasting and official status, and its community now sustains public daily use.",
        reason: "Vague examples persuade nobody; the mechanism — status and use — is the example's whole value.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "minority language", partOfSpeech: "noun phrase", meaning: "A language spoken by a small community within a state where another language dominates." },
    { word: "dominant language", partOfSpeech: "noun phrase", meaning: "The language of power, schooling and opportunity in a country or region." },
    { word: "transmission", partOfSpeech: "noun", meaning: "The passing of a language from one generation to the next." },
    { word: "fluent speaker", partOfSpeech: "noun phrase", meaning: "A person who speaks a language smoothly and natively." },
    { word: "revitalisation", partOfSpeech: "noun", meaning: "Deliberate efforts to return a declining language to daily use." },
    { word: "bilingualism", partOfSpeech: "noun", meaning: "The regular use of two languages by one person or community." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},

// ---------------------------------------------------------------------------
// 9. Direct questions — the cost of space exploration
// ---------------------------------------------------------------------------

{
  slug: "ielts-wb-at2-direct-questions-space-exploration",
  title: "The cost of space exploration",
  channel: "academic",
  taskType: "task-2",
  family: "direct-questions",
  tier: "practice",
  topic: "science",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Some of the world's richest nations spend many billions of dollars every year on space programmes, while critics argue that the same money should be spent on hospitals, schools and welfare at home.\n\nWhy do governments invest so heavily in space exploration, and do you think this spending is justified?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "motives-part",
      description:
        "Explains the layered motives — prestige and strategic power over satellites, practical returns from services built in orbit, and scientific reach with technological spillovers.",
      keywords: ["motive", "reason", "why", "because", "prestige", "power", "strategic", "satellite", "navigation", "weather", "monitor", "orbit", "science", "technolog", "engineer", "spin"],
    },
    {
      key: "justified-part",
      description:
        "Takes and defends a clear position on justification, supported by the ratio of cost to returned services, knowledge and skills.",
      keywords: ["justify", "justified", "defend", "believe", "argue", "think", "worth", "return", "cost", "value", "service", "knowledge", "skill"],
    },
    {
      key: "qualification-part",
      description:
        "Qualifies the verdict honestly — distinguishing robotic from human exploration, and prestige duplication from cooperation — rather than defending every mission.",
      keywords: ["however", "although", "provid", "robotic", "human", "cooperat", "case by case", "standard", "test", "shared", "dupl"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each motive and each step of the verdict with mechanisms and concrete examples.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "which", "when"],
    },
    {
      key: "conclusion",
      description:
        "Ends with a conclusion that answers both questions and names the standard applied to the spending.",
      keywords: ["in conclusion", "to conclude", "overall", "in short", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the two questions and the staged dilemma (2 minutes)",
      notes: [
        "Question one asks WHY governments invest — motives, plural, in layers.",
        "Question two asks for a personal verdict on justification — take one and qualify it honestly.",
        "The prompt stages a false dilemma (space versus hospitals); a strong answer notices that.",
      ],
    },
    {
      heading: "Step 2 — Structure: motives, case, qualification",
      notes: [
        "Introduction: the cost collision, then the verdict with its conditions stated at once.",
        "Body 1 = three motives: strategic power, practical services, science and spillover.",
        "Body 2 = the case for justification: modest budget share, services woven into daily life.",
        "Body 3 = the qualification: robotic before human, cooperation before duplication.",
        "Conclusion: both answers plus the standard — value returned per billion.",
      ],
    },
    {
      heading: "Step 3 — Evidence, hedging and the closing move",
      notes: [
        "Concrete beneficiaries anchor the case: the farmer planting by satellite, the city with three days' storm warning.",
        "Hedge the budget claim ('typically a rounding error') — honest hedging survives scrutiny.",
        "The final sentence should answer 'rockets or welfare' on its own terms rather than dodging it.",
        "Keep the qualification shorter than the case, or the verdict will look abandoned.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "A single flagship space mission can cost more than a decade of a small country's health budget, and every launch invites the same question: why pay for rockets when wards and classrooms are short of money? This essay explains why governments keep investing in space, and argues that the spending is justified — provided it is cooperative, practical and honestly accounted for.",
      "The motives are layered. The most candid is prestige and power: the ability to place and protect satellites has become the measure of a first-rank state, and no government wants its navigation, weather forecasting or military communications to depend entirely on another country's goodwill. The second motive is practical return, because the space budget is not spent in space — it pays engineers and factories at home, and it builds the satellite systems that guide tractors and ambulances, warn of approaching storms and monitor crops, wildfires and melting ice from orbit. The third is more diffuse but real: frontier science pulls a generation into engineering, and its spin-off technologies, from water purification to camera sensors, repay the investment in unexpected places.",
      "Measured against those returns, the spending is easier to defend than launch-day headlines suggest. Space programmes typically consume a rounding error beside defence or welfare budgets, yet the services they enable are woven into daily life: a farmer planting by satellite positioning and a city given three days' warning of a hurricane are both cashing the space dividend. Science, moreover, has a long memory, and probes that look expensive today become the data sets on which later discoveries, and whole industries, are built.",
      "Defence of the principle, though, is not defence of every mission. Human flight beyond orbit remains vastly more expensive than robotic exploration and deserves justification case by case, and prestige-fuelled national races duplicate what cooperative programmes could share. The honest test is not 'rockets or hospitals', since governments rarely move money between those columns, but whether each programme's returns in services, knowledge and skills exceed its cost.",
      "In conclusion, governments invest in space for strategic standing, practical services and scientific reach, and the expenditure is justified where those returns are real and shared. The question of rockets versus welfare is a false choice; the standard worth defending is value returned per billion, on Earth as much as off it.",
    ],
    wordCount: 383,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Opens with the cost collision the prompt stages — one mission versus a decade of health budget — and answers the second question immediately, with conditions (cooperative, practical, honestly accounted for) that preview the qualification paragraph.",
      },
      {
        role: "Body 1 — the motives",
        analysis:
          "Layers three motives from the candid to the diffuse: power over satellites, practical returns spent on Earth, and frontier science that recruits engineers and spins off technology. The 'budget is not spent in space' reversal is the paragraph's hinge.",
      },
      {
        role: "Body 2 — the case for justification",
        analysis:
          "Defends the spending through ratio and reach: a rounding error beside other budgets, yet services woven into ordinary life. The farmer and the storm-warned city turn abstract returns into cashed dividends, and the long memory of science extends them into the future.",
      },
      {
        role: "Body 3 — the qualification",
        analysis:
          "Keeps the verdict honest by separating principle from missions: robotic before human, cooperation before duplication. The paragraph then replaces the false 'rockets or hospitals' choice with a real test — returns against cost.",
      },
      {
        role: "Conclusion",
        analysis:
          "Answers both questions and names the standard applied — value returned per billion — ending with the symmetry 'on Earth as much as off it', which mirrors the practical case built in the body.",
      },
    ],
    vocabulary: [
      { term: "a rounding error beside defence or welfare budgets", note: "Quantitative honesty: admitting the budget's smallness strengthens rather than weakens the defence." },
      { term: "the measure of a first-rank state", note: "The prestige motive stated as geopolitics rather than vanity — a candid register the reader can trust." },
      { term: "the space budget is not spent in space", note: "The essay's central reversal: the money pays engineers and factories on Earth, whatever the destination." },
      { term: "cashing the space dividend", note: "A financial metaphor that converts abstract returns into paid-out value, linking the farmer and the warned city in one clause." },
      { term: "a false choice", note: "The standard name for the dilemma the prompt stages; naming a fallacy is a high-band evaluative move." },
    ],
    grammar: [
      {
        feature: "Correlative 'not X but Y' correction",
        example: "The honest test is not 'rockets or hospitals' … but whether each programme's returns in services, knowledge and skills exceed its cost",
        note: "The correlative frame dismantles the false dilemma and installs the essay's own standard in a single sentence.",
      },
      {
        feature: "Passive to active reversal in sequence",
        example: "the space budget is not spent in space — it pays engineers and factories at home",
        note: "The passive names the misconception and the active clause corrects it; the grammar performs the argument's turn.",
      },
      {
        feature: "Fronted concessive 'though' as pivot",
        example: "Defence of the principle, though, is not defence of every mission",
        note: "The interpolated 'though' pivots the essay from case to qualification — one word performing the paragraph's turn.",
      },
    ],
    coherence:
      "The verdict is announced in the introduction, defended through a cost–return logic in body two, and then disciplined by the qualification in body three, so the position matures rather than wobbles. Concrete beneficiaries — tractors, ambulances, the warned city — recur as evidence that the returns land on Earth, and the conclusion's 'on Earth as much as off it' closes the symmetry the body paragraphs built.",
    alternativeExpressions: [
      { insteadOf: "a rounding error beside", use: "a tiny fraction compared with" },
      { insteadOf: "the measure of a first-rank state", use: "a defining capability of a leading power" },
      { insteadOf: "cashing the space dividend", use: "benefiting directly from space investment" },
      { insteadOf: "a false choice", use: "an artificial either-or question" },
    ],
    commonMistakes: [
      {
        wrong: "Space exploration is a waste of money because people are starving on Earth.",
        right: "The space budget is small beside welfare spending, and its satellite services return value to daily life — the stronger question is which missions repay their cost.",
        reason: "The slogan ignores the real arithmetic; examiners reward engagement with the trade-off, not repetition of it.",
      },
      {
        wrong: "We should explore space because it is human nature to explore.",
        right: "Governments invest for strategic, practical and scientific reasons — satellites, services and skills — each with a mechanism.",
        reason: "Romantic appeals answer 'why' with destiny; the question asks what governments actually gain.",
      },
      {
        wrong: "Every space mission is justified and the space agency is great.",
        right: "Robotic probes repay their cost more reliably than human flight beyond orbit, which deserves case-by-case scrutiny.",
        reason: "Blanket defence is as weak as blanket attack; a qualified verdict reads as independent thinking.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "space programme", partOfSpeech: "noun phrase", meaning: "An organised national effort in space science, launch systems and exploration." },
    { word: "satellite", partOfSpeech: "noun", meaning: "An object placed in orbit to provide communications, navigation or observation." },
    { word: "prestige", partOfSpeech: "noun", meaning: "The reputation and standing a nation gains from a capability." },
    { word: "spin-off", partOfSpeech: "noun", meaning: "A technology created for space use that finds everyday applications." },
    { word: "orbit", partOfSpeech: "noun", meaning: "The curved path of an object circling a planet." },
    { word: "justified", partOfSpeech: "adjective", meaning: "Able to be defended with good reasons." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
},
];


