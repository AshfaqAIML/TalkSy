/**
 * General Training Task 1 bank — file A (PROMPT 46, Part D/E).
 *
 * The first three General Training letters: a formal complaint about a
 * hotel room that did not match its listing, a formal request to a town
 * council for a safe crossing, and a semi-formal explanation to a landlord
 * about a late rent payment. Every task is an original assignment with the
 * full rubric (situation + three bullets), planning notes, a complete model
 * letter, the eight-element analysis, a topic vocabulary bank and two level
 * samples whose band comments are educational estimates, never official
 * scores.
 */

import type { WritingBankTask } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. Complaint — the hotel room that did not match its photographs (formal)
// ---------------------------------------------------------------------------

export const gt1ComplaintHotel: WritingBankTask = {
  slug: "ielts-wb-gt1-complaint-hotel",
  title: "Complaint letter — a room that did not match its photographs",
  channel: "gt",
  taskType: "task-1",
  family: "complaint",
  register: "formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You recently spent a weekend at a seaside hotel that you booked through a booking website, but the room you were given differed badly from the photographs on the listing.\n\nWrite a letter to the hotel manager. In your letter:\n\n• describe the problems with the room\n• explain how these problems affected your stay\n• say what you would like the hotel to do\n\nBegin your letter as follows: Dear Sir or Madam,",
  situation:
    "The candidate booked a seaside weekend through a booking website and paid for a promised sea-view room; what arrived did not match the listing, and the letter goes to a hotel manager who is not known by name.",
  bullets: [
    "Describe the problems with the room",
    "Explain how these problems affected your stay",
    "Say what you would like the hotel to do",
  ],
  requirements: [
    {
      key: "all-bullets",
      description:
        "Develops all three bullet points, each in its own paragraph: the problems, their effect on the stay, and the action requested.",
      keywords: ["noise", "view", "refund", "wardrobe", "anniversary"],
    },
    {
      key: "purpose-opening",
      description: "States the complaint's purpose plainly in the opening lines, before any detail begins.",
      keywords: ["writing", "complain", "disappoint", "express"],
    },
    {
      key: "problems-specific",
      description: "Describes at least two concrete problems with physical detail rather than vague dissatisfaction.",
      keywords: ["photograph", "window", "wardrobe", "noise", "shower"],
    },
    {
      key: "proportionate-remedy",
      description: "Closes with a specific, proportionate request — a refund or remedy — rather than a threat.",
      keywords: ["refund", "would", "welcome", "look forward"],
    },
    {
      key: "formal-register",
      description:
        "Holds the formal register throughout: no contractions, and the Dear Sir or Madam / Yours faithfully pairing.",
      keywords: ["dear sir", "madam", "faithfully", "however"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "The manager is a stranger: open 'Dear Sir or Madam' and close 'Yours faithfully' — the greeting and sign-off must pair.",
        "Formal means no contractions (write 'did not', never 'didn't') and no first names; firmness is welcome, sarcasm is not.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 needs three concrete problems, not adjectives: the courtyard instead of the sea, the fan and the vans, the broken fittings.",
        "Bullet 2 turns each problem into a human cost: lost sleep, the armchair, a supplement paid for a view of ducts; the anniversary is the emotional core.",
        "Bullet 3 asks for something specific and proportionate; an either/or remedy reads as reasonable, a bare demand does not.",
      ],
    },
    {
      heading: "Step 3 — Language shelf (1 minute)",
      notes: [
        "Openers: 'I am writing to express my disappointment with…'; 'The differences began at the window.'",
        "Softened firmness: 'I believe a partial refund is due'; 'I would also welcome an assurance that…'.",
        "Past perfect does the comparing: 'the photographs had shown' measures the room against its advertisement.",
      ],
    },
    {
      heading: "Step 4 — Shape and budget (1 minute)",
      notes: [
        "Five short paragraphs: greeting and purpose, problems, effects, remedy, close and sign-off — one bullet per body paragraph, nothing else.",
        "Aim for 170–220 words; the 150 floor is a minimum, and letters that sit just above it usually under-develop the middle bullet. Past 250 you are spending your checking time.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Sir or Madam,\n\nI am writing to express my disappointment with the sea-view room my husband and I occupied at the Saltwind Hotel from 14 to 16 June, booked through the Tidebook website on the strength of its photographs.",
      "The differences began at the window. The photographs had shown a bright room facing the water, whereas ours looked onto a service courtyard, where the kitchen's extraction fan ran from six each morning and delivery vans reversed soon after five. Inside, the wardrobe door had come off its runner, one bedside lamp was dead, and the shower tray flooded after every use.",
      "These problems cost us more than a brief list can convey. We were woken before six on both mornings and were too tired for the coastal walks we had planned; my husband eventually slept in the armchair, the one quiet spot in the room. The sea-view supplement, meanwhile, bought us a view of extractor ducts, on a weekend arranged for our tenth anniversary.",
      "In the circumstances, I believe a partial refund is due. Either the hotel returns the sea-view supplement together with one night's charge, or it offers us a complimentary stay in a quieter room later this year. I would also welcome an assurance that the photographs will be checked against the rooms they show.",
      "We have enjoyed this hotel before, which is precisely why this stay was such a let-down. I look forward to your reply within the fortnight.\n\nYours faithfully,\nAmara Bello",
    ],
    wordCount: 247,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "Names the reader as an institution and states the complaint's purpose in the first sentence, with the dates, the booking channel and the photographs all established before any detail begins. 'On the strength of its photographs' plants the standard the hotel failed to meet.",
      },
      {
        role: "Bullet 1 — the problems",
        analysis:
          "Works through the three problems in a fixed order — view, noise, fittings — one sentence each. 'The differences began at the window' is a topic sentence that turns a list into a narrative, and the past perfect measures reality against the advertisement.",
      },
      {
        role: "Bullet 2 — the effects on the stay",
        analysis:
          "Converts each problem into a human cost rather than repeating it: the noise becomes lost sleep and a husband in the armchair, and the supplement becomes 'a view of extractor ducts'. The anniversary lands last, as the sentence that gives the complaint its weight.",
      },
      {
        role: "Bullet 3 — the remedy requested",
        analysis:
          "Opens with a measured claim ('I believe a partial refund is due') and offers an either/or remedy, which reads as reasonable and leaves the manager a choice. The third request — checking the photographs — looks past this stay to future guests.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "One sentence of goodwill (previous visits) makes the complaint credible rather than vengeful, the reply is given a deadline, and the Yours faithfully pairing matches the unnamed greeting exactly.",
      },
    ],
    vocabulary: [
      {
        term: "on the strength of its photographs",
        note: "Compresses 'because the listing photographs persuaded me' into five words; the formal idiom for a decision made on evidence.",
      },
      {
        term: "had come off its runner",
        note: "The tradesman's exact phrase for a door off its track — physical and precise, far better than 'was broken'.",
      },
      {
        term: "cost us more than a brief list can convey",
        note: "Signals that this paragraph interprets the problems rather than repeating them — the move that develops bullet two.",
      },
      {
        term: "the sea-view supplement, meanwhile",
        note: "'Supplement' is the trade word for the extra charge; 'meanwhile' pivots to the third effect without a heavy connector.",
      },
      {
        term: "a partial refund is due",
        note: "'Due' claims an entitlement quietly; 'partial' shows proportion, which keeps the tone firm rather than greedy.",
      },
      {
        term: "a complimentary stay",
        note: "The industry word for a free stay as compensation — more professional than 'a free weekend'.",
      },
      {
        term: "such a let-down",
        note: "A single controlled touch of feeling at the close: one brief informal idiom inside an otherwise formal letter, placed where feeling is expected.",
      },
    ],
    grammar: [
      {
        feature: "Past perfect for the advertised past",
        example: "The photographs had shown a bright room facing the water",
        note: "Sets the hotel's promise as the earlier past against the delivered room — the tense that carries the whole comparison.",
      },
      {
        feature: "Whereas-contrast clause",
        example: "whereas ours looked onto a service courtyard",
        note: "One subordination does the work of two sentences, keeping the paragraph tight and the comparison explicit.",
      },
      {
        feature: "Modal would for requests",
        example: "I would also welcome an assurance that the photographs will be checked",
        note: "The would-ladder keeps demands reading as requests — the core politeness grammar of formal complaints.",
      },
      {
        feature: "Either/or parallel options",
        example: "Either the hotel returns the sea-view supplement together with one night's charge, or it offers us a complimentary stay",
        note: "Paired options make the writer sound flexible; the parallel structure is itself a cohesion device.",
      },
    ],
    coherence:
      "The letter runs greeting, problems, effects, remedy, close — the order the bullets dictate — and each paragraph hands the next one a link: the courtyard planted in paragraph two becomes the fan noise and the armchair in paragraph three, and the supplement paid in paragraph one returns as the refund in paragraph four. Reference chains ('the differences', 'these problems', 'the remedy') keep the reader oriented without a single mechanical 'firstly, secondly'.",
    alternativeExpressions: [
      { insteadOf: "I am writing to express my disappointment with", use: "I am writing about my recent stay, which fell some way short of the listing" },
      { insteadOf: "The differences began at the window", use: "The first gap between listing and reality was the window" },
      { insteadOf: "cost us more than a brief list can convey", use: "told on the weekend more than any list of them could" },
      { insteadOf: "a partial refund is due", use: "some redress seems only fair / a measure of compensation is warranted" },
      { insteadOf: "I would also welcome an assurance", use: "I would also ask you to confirm in writing" },
      { insteadOf: "such a let-down", use: "so far below our previous stays / such a disappointment" },
    ],
    commonMistakes: [
      {
        wrong: "Dear Manager, Hi, I want my money back today.",
        right: "Dear Sir or Madam, … I would appreciate a refund of the supplement.",
        reason: "An unnamed manager takes an institutional greeting; 'Hi' and first-name openers break the formal contract and cost tone marks.",
      },
      {
        wrong: "The room was terrible and the hotel is a scam, honestly avoid it.",
        right: "The room differed from the listing in three specific ways.",
        reason: "Insults read as loss of control; specific facts do the complaining for you and keep Task Achievement safe.",
      },
      {
        wrong: "It didn't match the photos and I'm really disappointed.",
        right: "It did not match the photographs, and we were accordingly disappointed.",
        reason: "Contractions are the fastest register slip in a formal letter; write the forms out in full.",
      },
      {
        wrong: "The room was small, the room was noisy, the room was dark, and the room was not like the photos.",
        right: "The room differed from the listing in three ways, which I will take in turn.",
        reason: "Repeating one subject flattens the paragraph into a list; varied subjects and a topic sentence show development.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Sir or Madam,\n\nI am writing to complain about my room in your hotel on 14 to 16 June. I booked it on the Tidebook website because of the photos, but the reality was very different and I am very upset.",
        "The room was not like the pictures. The window looked to a car park, not the sea. The wardrobe was broken and I couldn't close it, and it was too noisy for sleeping because of the kitchen fan. Also the shower didn't drain.",
        "Because of this, my wife and me didn't sleep well and we was tired for our trips. The weekend was for our tenth anniversary, so it was ruined basically.",
        "I want you to give me my money back for the whole weekend. This is really not acceptable for a four-star price. I hope you will answer fast.",
        "Yours faithfully,\nKarim Deressa",
      ],
      wordCount: 146,
      justification: [
        {
          criterion: "Task Achievement",
          note: "All three bullets appear in order, but at 146 words the response sits just under the 150-word floor, and the closing demand ('I want you to give me my money back … answer fast') slips from firm into aggressive.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "A clear paragraph-per-bullet shape, though linking is bare ('Also the shower didn't drain') and 'it was ruined basically' undercuts the anniversary point it follows.",
        },
        {
          criterion: "Lexical Resource",
          note: "Adequate topic words ('photos', 'anniversary') but thin verbs — 'was very different', 'not like the pictures' — and 'four-star price' is the only precise detail offered.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Simple sentences mostly controlled, but 'my wife and me … we was' breaks agreement, 'looked to' misses the preposition, and contractions (couldn't, didn't) break the formal register.",
        },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Sir or Madam,\n\nI am writing about the sea-view room my wife and I occupied at the Saltwind Hotel from 14 to 16 June, which I reserved through the Tidebook website on the understanding that it would match the listing photographs.",
        "In the event, it matched them in almost no respect. The window, shown in the photographs opening onto the water, in fact faced a service courtyard where the kitchen's extractor fan ran from before six. The wardrobe could not be shut, one bedside lamp was dead, and the shower tray flooded after every use.",
        "The consequences went beyond inconvenience. We lost the better part of two nights' sleep, abandoned the coastal walks we had planned, and kept our anniversary clothes in their cases because nothing could be hung. We had chosen the hotel for our tenth anniversary, which made the gap between the listing and the room harder to accept.",
        "I would therefore ask the hotel either to refund the sea-view supplement together with one night's charge, or to provide a complimentary stay in a quieter room later this year. I would also welcome confirmation that the photographs are being reviewed.",
        "I look forward to your reply.\n\nYours faithfully,\nMariam Qureshi",
      ],
      wordCount: 203,
      justification: [
        {
          criterion: "Task Achievement",
          note: "Covers all three bullets with the remedy offered as a considered either/or; the request stays proportionate, though 'I would therefore ask' is the only softening phrase and the letter leans on it.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "Paragraph-per-bullet with clean reference ('the listing and the room'), and the final request follows logically from the evidence; progression is managed rather than mechanical.",
        },
        {
          criterion: "Lexical Resource",
          note: "Good range — 'on the understanding that', 'in the event', 'the consequences went beyond inconvenience' — with collocation secure; occasional stiffness ('abandoned the coastal walks') keeps it short of Band 8 freshness.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Varied structures — participial description ('shown in the photographs opening onto the water') and controlled passives ('nothing could be hung') — mostly error-free; the double-participle window sentence carries a small risk of obscurity that Band 8 would avoid.",
        },
      ],
    },
  ],
  vocabularyBank: [
    { word: "listing", partOfSpeech: "noun", meaning: "The page on a booking website showing a room or property for sale." },
    { word: "supplement", partOfSpeech: "noun", meaning: "An extra charge on top of the base price, e.g. for a sea view." },
    { word: "complimentary", partOfSpeech: "adjective", meaning: "Given free, as goodwill or compensation — 'a complimentary stay'." },
    { word: "to refund", partOfSpeech: "verb", meaning: "To return money that has been paid." },
    { word: "fitting", partOfSpeech: "noun", meaning: "A fixed item in a room — a lamp, a rail, a door runner." },
    { word: "let-down", partOfSpeech: "noun", meaning: "A disappointment; something that falls short of what was promised." },
    { word: "courtyard", partOfSpeech: "noun", meaning: "An enclosed outside area, often used for deliveries at a hotel." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Request — a safe crossing to the park (formal)
// ---------------------------------------------------------------------------

export const gt1RequestCouncil: WritingBankTask = {
  slug: "ielts-wb-gt1-request-council",
  title: "Request letter — a safe crossing to the park",
  channel: "gt",
  taskType: "task-1",
  family: "request",
  register: "formal",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The street where you live has no safe crossing for residents who want to reach the local park on the other side of a busy main road.\n\nWrite a letter to the town council. In your letter:\n\n• describe the situation\n• explain who is affected by it\n• request specific action\n\nBegin your letter as follows: Dear Sir or Madam,",
  situation:
    "The candidate lives on a residential street cut off from the town's park by a wide main road with no safe crossing anywhere nearby, and writes to the town council as an institution rather than to a named officer.",
  bullets: [
    "Describe the situation",
    "Explain who is affected by it",
    "Request specific action",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets in separate paragraphs: the situation, who is affected, and the specific action requested.",
      keywords: ["cross", "affected", "request", "park"],
    },
    {
      key: "purpose-opening",
      description: "States the request's purpose in the opening line, with the road and the park both named.",
      keywords: ["writing", "ask", "council", "crossing"],
    },
    {
      key: "affected-groups",
      description: "Names the groups affected with one concrete image each (parents, children, older residents).",
      keywords: ["parent", "children", "older", "pram", "trolley"],
    },
    {
      key: "specific-action",
      description: "Requests specific, actionable measures: a site assessment, a controlled or zebra crossing, a refuge island.",
      keywords: ["assessment", "crossing", "zebra", "refuge", "signal"],
    },
    {
      key: "formal-register",
      description: "Keeps the formal register throughout: no contractions, and the Dear Sir or Madam / Yours faithfully pairing.",
      keywords: ["dear sir", "madam", "faithfully", "would"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "The council is an institution, not a person: 'Dear Sir or Madam' with 'Yours faithfully', full forms throughout.",
        "The tone is a resident asking, not a campaigner demanding; pressure is applied with facts and the would-ladder, never with threats.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 gives the geography and the gap: junction to roundabout, four lanes, no crossing — the numbers make it real.",
        "Bullet 2 answers 'who', not 'how bad': one concrete image per group (prams, the school run, trolleys, the toddler group).",
        "Bullet 3 layers the ask: a site assessment and crossing as the goal, a refuge island and lower limit as the interim, a dated reply requested.",
      ],
    },
    {
      heading: "Step 3 — Language shelf (1 minute)",
      notes: [
        "Request grammar: 'I would therefore ask… with a view to…'; 'I would be grateful to know whether…'.",
        "Measured nouns do the persuading: 'controlled crossing', 'signalised junction', 'refuge island', 'site assessment'.",
        "Keep 'must' for the residents' forced choice; the council's side of the letter stays entirely in would and should.",
      ],
    },
    {
      heading: "Step 4 — Shape and budget (1 minute)",
      notes: [
        "Five paragraphs: purpose, situation, affected groups, the request, close and sign-off.",
        "Aim for 170–220 words; every group named should earn one sentence of detail, or be cut.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Sir or Madam,\n\nI am writing to ask the council to look at the lack of any safe crossing on Compton Road, which currently separates the homes on Alder Row from Delmore Park.",
      "At present there is no controlled crossing of any kind between the signalised junction by the shops, eight hundred metres north, and the roundabout to the south. Residents who want the park must either walk a quarter of an hour out of their way or cross four lanes of moving traffic, as many do at school times.",
      "The people most affected are those with the least margin for error. Parents push prams across two lanes at a time, children walking to Delmore Primary on the far side cross between queuing cars, and older residents with trolleys wait several minutes for a lull. Our toddler group meets in the park, so the road is crossed dozens of times each morning.",
      "I would therefore ask the council to carry out a site assessment with a view to a signal-controlled or zebra crossing opposite the Alder Row gates. In the shorter term, a central refuge island and a lower speed limit would already help slower pedestrians. I would be grateful to know whether a study has been scheduled, and when a decision might be expected.",
      "This is a modest change that would benefit a great many households, and I look forward to your reply.\n\nYours faithfully,\nTomas Novak",
    ],
    wordCount: 239,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "States the request in one sentence — road named, both sides named — so the council officer knows from line one what is being asked and of whom. 'Currently separates' quietly frames the park as something the road has taken away.",
      },
      {
        role: "Bullet 1 — the situation",
        analysis:
          "Gives the geometry first (junction, roundabout, the distance between them) and then the behaviour it forces: the detour or the dash between lanes. 'No controlled crossing of any kind' is the claim; everything after it is evidence.",
      },
      {
        role: "Bullet 2 — who is affected",
        analysis:
          "Organises the affected groups by vulnerability, each in one image: prams, the school run, trolleys and a lull. The closing sentence multiplies the problem — the toddler group means the crossing is made dozens of times a morning, not once.",
      },
      {
        role: "Bullet 3 — the request",
        analysis:
          "Layers the ask in time: the assessment and crossing as the goal, the refuge island and lower limit as the interim, then a polite two-part question that asks for a date. The would-ladder keeps it a request, not a demand.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "One sentence reframes the ask as modest ('a modest change') before the standard formal close; the Yours faithfully pairing matches the institutional greeting.",
      },
    ],
    vocabulary: [
      {
        term: "controlled crossing",
        note: "The umbrella term for any crossing with legal priority — the precise word for the family of solutions being requested.",
      },
      {
        term: "signalised junction",
        note: "Traffic-engineering vocabulary; 'signalised' marks the writer as informed without showing off.",
      },
      {
        term: "out of their way",
        note: "The natural idiom for a detour; 'walk a quarter of an hour out of their way' quantifies the inconvenience.",
      },
      {
        term: "the least margin for error",
        note: "Frames the affected groups by their exposure rather than their age — the analytical phrase that organises the paragraph.",
      },
      {
        term: "for a lull",
        note: "'A lull' is the exact noun for a gap in traffic; 'wait for a lull' is the standard collocation.",
      },
      {
        term: "with a view to",
        note: "The formal purpose phrase that attaches the goal to the assessment without promising it.",
      },
      {
        term: "refuge island",
        note: "The technical name for the mid-road waiting strip — one phrase that shows the writer has done some homework.",
      },
    ],
    grammar: [
      {
        feature: "Modal must with either/or",
        example: "must either walk a quarter of an hour out of their way or cross four lanes of moving traffic",
        note: "The forced-choice structure makes the danger feel structural rather than careless — and keeps blame off the residents.",
      },
      {
        feature: "Participle clauses inside a list",
        example: "children walking to Delmore Primary on the far side cross between queuing cars",
        note: "The -ing clause compresses 'children who walk', and 'queuing' participle inside the noun phrase adds a second layer.",
      },
      {
        feature: "Fronted frame sentence",
        example: "The people most affected are those with the least margin for error",
        note: "A frame that turns a list of groups into a principle — the paragraph's thesis in one line.",
      },
      {
        feature: "Present perfect in a polite question",
        example: "whether a study has been scheduled, and when a decision might be expected",
        note: "The perfect passive asks about the state of play without accusing; 'might' softens the deadline into a question.",
      },
    ],
    coherence:
      "Every paragraph is anchored to the same map — Alder Row, Compton Road, Delmore Park — so the reader can place each new fact on ground already established. The request paragraph returns to the exact objects named earlier (the Alder Row gates, the junction, the roundabout), and the closing sentence converts the whole letter into a single measurable claim: a modest change for a great many households.",
    alternativeExpressions: [
      { insteadOf: "I am writing to ask the council to look at", use: "I am writing to draw the council's attention to" },
      { insteadOf: "out of their way", use: "far out of their route / a considerable detour" },
      { insteadOf: "the least margin for error", use: "the least room for misjudgement" },
      { insteadOf: "wait several minutes for a lull", use: "wait for a long gap in the traffic" },
      { insteadOf: "with a view to", use: "in the hope that / aimed at" },
      { insteadOf: "I would be grateful to know whether", use: "I would welcome confirmation of whether" },
    ],
    commonMistakes: [
      {
        wrong: "You must build a crossing now, or someone will be killed and I will hold the council responsible.",
        right: "I would therefore ask the council to carry out a site assessment.",
        reason: "Threats harden the reader against you; the polite would-ladder gets officers moving and protects the tone mark.",
      },
      {
        wrong: "The road is very dangerous and lots of people cross it.",
        right: "Residents must either walk fifteen minutes out of their way or cross four lanes of moving traffic.",
        reason: "The bullet asks for the situation, and vague adjectives describe nothing an engineer could act on.",
      },
      {
        wrong: "Old people and kids and parents and dog walkers are all affected.",
        right: "Parents push prams across two lanes at a time, and older residents wait several minutes for a lull.",
        reason: "A list of nouns is not an explanation; one concrete image per group shows the examiner development.",
      },
      {
        wrong: "Please do something about this.",
        right: "I would be grateful to know whether a study has been scheduled.",
        reason: "The bullet says request specific action; 'something' is the least specific request it is possible to make.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Sir or Madam,\n\nI am writing to request a crossing on Compton Road. I live in Alder Row and the park is on the other side of the road.",
        "There is no crossing near my street. The nearest one is very far, maybe 800 metres, and the road has four lanes. People must wait a long time and then run between the cars, it is dangerous. Old people are scared to cross and children cannot go to the park alone.",
        "This problem affects everybody in Alder Row, especially families and old people. Everybody wants to use the park but many people are afraid of the road.",
        "I would like the council to build a zebra crossing or a traffic island. Also the speed of the cars should be lower. Please tell me when you will do this.",
        "Yours faithfully,\nPetra Simonova",
      ],
      wordCount: 142,
      justification: [
        {
          criterion: "Task Achievement",
          note: "The three bullets are addressed in order, but the affected-groups bullet is answered with a list ('everybody, especially families and old people') rather than development, and at 142 words the response is under the floor.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "Sensible paragraphing, but links are limited to 'Also' and 'so', and the comma splice ('run between the cars, it is dangerous') shows cohesion managed at sentence level only.",
        },
        {
          criterion: "Lexical Resource",
          note: "Topic words present ('crossing', 'lanes') but repetitive, with 'cross/crossing' in most sentences; 'very far, maybe 800 metres' hedges where a figure was needed.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Mostly short simple sentences; 'the speed of the cars should be lower' is awkward passive use, and 'it is dangerous' is spliced onto the previous clause — errors that rarely block meaning but recur.",
        },
      ],
    },
    {
      bandEstimate: "Band 7.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Sir or Madam,\n\nI am writing on behalf of the residents of Alder Row to ask the council to consider a safe crossing of Compton Road, which at present separates our homes from Delmore Park.",
        "The nearest controlled crossing is the signalised junction by the shops, eight hundred metres to the north; the next is the roundabout, further still. Anyone heading for the park must either make a long detour or negotiate four lanes of fast traffic, and at school times the road is crossed repeatedly by families taking a short run between cars.",
        "The people most exposed are those least able to judge a gap: parents with prams, children walking to Delmore Primary on the far side, and older residents who wait several minutes for a lull. Our toddler group meets in the park most mornings, so the same crossing is made dozens of times before nine.",
        "What I would ask for, then, is a site assessment towards a signal-controlled or zebra crossing opposite the Alder Row gates. In the shorter term, a central refuge island and a lower speed limit would help. I would be grateful to know whether any assessment has already been scheduled.",
        "I look forward to your reply.\n\nYours faithfully,\nGopal Menon",
      ],
      wordCount: 208,
      justification: [
        {
          criterion: "Task Achievement",
          note: "All three bullets developed, with the request layered from assessment to interim measures; the 'dozens of times before nine' close quantifies the impact, though the final paragraph is a single functional sentence.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "Clear progression anchored to the same place names; 'further still' and 'What I would ask for, then' signal turns cleanly, and reference ('the same crossing') avoids repetition.",
        },
        {
          criterion: "Lexical Resource",
          note: "Strong items — 'negotiate four lanes of fast traffic', 'judge a gap', 'for a lull' — with natural collocation; 'a short run between cars' is the one loose phrase.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "A good spread of structures — either/or with must, the passive 'is crossed repeatedly', a semicolon-joined opening — with rare slips; range is solid rather than sparkling, which holds it at 7.0.",
        },
      ],
    },
  ],
  vocabularyBank: [
    { word: "crossing", partOfSpeech: "noun", meaning: "A designated place or structure for crossing a road safely." },
    { word: "junction", partOfSpeech: "noun", meaning: "A place where roads meet, often controlled by traffic signals." },
    { word: "refuge island", partOfSpeech: "noun", meaning: "A raised strip mid-road where pedestrians wait between traffic flows." },
    { word: "lull", partOfSpeech: "noun", meaning: "A temporary pause — 'a lull in the traffic'." },
    { word: "pram", partOfSpeech: "noun", meaning: "A pushchair for carrying a baby (British English)." },
    { word: "site assessment", partOfSpeech: "noun", meaning: "An official visit to evaluate a location, e.g. for a crossing." },
    { word: "to detour", partOfSpeech: "verb", meaning: "To take a longer route than the direct one." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Explanation — this month's rent will be late (semi-formal)
// ---------------------------------------------------------------------------

export const gt1ExplanationLandlord: WritingBankTask = {
  slug: "ielts-wb-gt1-explanation-landlord",
  title: "Explanation letter — this month's rent will be late",
  channel: "gt",
  taskType: "task-1",
  family: "explanation",
  register: "semi-formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "Your rent is paid on the first of each month, but this month, for the first time in three years, your payment will be late.\n\nWrite a letter to your landlord, Mr Halvorsen. In your letter:\n\n• explain why the payment is late\n• say when you will be able to pay\n• offer reassurance about future payments\n\nBegin your letter as follows: Dear Mr Halvorsen,",
  situation:
    "The candidate has rented from the same landlord for three years without ever paying late; a payroll change at work has delayed this month's wage, and the letter gives a landlord who is known personally polite early notice.",
  bullets: [
    "Explain why the payment is late",
    "Say when you will be able to pay",
    "Offer reassurance about future payments",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Develops all three bullets in their own paragraphs: the cause of the delay, the payment date, and the reassurance.",
      keywords: ["payroll", "pay", "reassurance", "salary"],
    },
    {
      key: "purpose-opening",
      description: "States the letter's purpose in the opening lines: a late payment, politely announced.",
      keywords: ["writing", "rent", "late", "explain"],
    },
    {
      key: "credible-cause",
      description: "Gives a credible, checkable reason and a firm payment date with the mechanism already scheduled.",
      keywords: ["employer", "payroll", "wage", "transfer"],
    },
    {
      key: "future-reassurance",
      description: "Offers concrete reassurance about future payments — a mechanism, not just a promise.",
      keywords: ["future", "account", "again", "writing"],
    },
    {
      key: "semi-formal-register",
      description: "Uses the semi-formal pairing: Dear Mr Halvorsen with Yours sincerely, polite throughout.",
      keywords: ["dear mr", "sincerely", "thank", "please"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Mr Halvorsen is known by name but keeps his title: 'Dear Mr Halvorsen' pairs with 'Yours sincerely'.",
        "Semi-formal is polite and human: warmer than a council letter, no less precise; full forms are the safe choice under timed conditions.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 states one cause once, then lets three dates do the arguing: the 27th, the 1st, the 9th.",
        "Bullet 2 gives a firm date and offers evidence (a payroll note) rather than apology.",
        "Bullet 3 is a mechanism, not a promise: the provider's written confirmation plus a buffer account holding a month's rent.",
      ],
    },
    {
      heading: "Step 3 — Language shelf (1 minute)",
      notes: [
        "Notice phrases: 'I am writing to let you know…'; 'If it would help…'.",
        "Banking words used exactly: 'payroll', 'clears', 'scheduled', 'in writing'.",
        "The close invites, never presumes: 'Please let me know if the 10th presents any difficulty.'",
      ],
    },
    {
      heading: "Step 4 — Shape and budget (1 minute)",
      notes: [
        "Five short paragraphs: purpose, cause, payment date, future fix, thanks and sign-off.",
        "Aim for 170–220 words; this letter should be the shortest of the formal set, because certainty needs no padding.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mr Halvorsen,\n\nI am writing to let you know that this month's rent will reach you later than usual, and to explain why.",
      "The cause is a change at my employer. Cardew Logistics moved its payroll to a new provider this quarter, and the migration has delayed this month's salaries by a week: my wage normally lands on the 27th, in time for rent on the 1st, but this month it is expected on the 9th. This is the first time in three years that the two dates have not lined up.",
      "I will transfer the full amount on the morning of the 10th, the day after the wage clears, and the payment is already scheduled. If it would help, I can ask Cardew's payroll office for a note confirming the delay.",
      "As for the future, the provider has confirmed in writing that October's payroll will run on its usual date. I have also opened a small savings account and will keep a month's rent in it permanently, so that no paperwork delay on either side ever touches your payment again.",
      "Thank you for your patience over the past three years; I hope this small delay causes you no trouble. Please let me know if the 10th presents any difficulty.\n\nYours sincerely,\nElena Marquez",
    ],
    wordCount: 215,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "The titled greeting and one plain sentence announce the bad news without apology inflation; 'let you know' is the semi-formal register's way of giving notice — respectful, not stiff.",
      },
      {
        role: "Bullet 1 — why the payment is late",
        analysis:
          "Leads with the cause in one sentence, then the three dates that prove it: the 27th, the 1st, the 9th. 'The first time in three years that the two dates have not lined up' converts a payroll fact into a tenancy fact, which is what the landlord actually cares about.",
      },
      {
        role: "Bullet 2 — when I can pay",
        analysis:
          "A firm date, the mechanism already scheduled, and evidence offered rather than pleaded for. The paragraph is short because certainty does not need padding.",
      },
      {
        role: "Bullet 3 — reassurance about the future",
        analysis:
          "Two structures, not promises: the provider's written confirmation for next month, and the buffer account for every month after. 'No paperwork delay on either side ever touches your payment again' is the letter's strongest sentence and its most reassuring.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "Thanks the landlord for three years, not for this month — gratitude aimed at the relationship — and invites him to flag any difficulty with the 10th; Yours sincerely pairs correctly with the named greeting.",
      },
    ],
    vocabulary: [
      {
        term: "the migration has delayed this month's salaries",
        note: "'Migration' is the industry noun for a system changeover — the precise term for a temporary mess that is nobody's fault.",
      },
      {
        term: "lined up",
        note: "The idiomatic phrasal verb for two events coinciding; 'the two dates have not lined up' makes the failure sound mechanical, not moral.",
      },
      {
        term: "the day after the wage clears",
        note: "'Clears' is the banking verb for money becoming available; the phrase ties the payment date to a fact the landlord can verify.",
      },
      {
        term: "in writing",
        note: "Two words that turn a reassurance into evidence; formal confirmation is the strongest thing a tenant can offer.",
      },
      {
        term: "a small savings account",
        note: "The buffer named plainly; the specifics (a month's rent, permanently) do the reassuring, not the adjective.",
      },
      {
        term: "presents any difficulty",
        note: "The polite conditional close; it invites the landlord to respond without presuming that he will.",
      },
    ],
    grammar: [
      {
        feature: "Present perfect for an ongoing cause",
        example: "the migration has delayed this month's salaries by a week",
        note: "The delay began in the past and is still biting — perfect aspect makes that explicit.",
      },
      {
        feature: "Passive for the expected wage",
        example: "this month it is expected on the 9th",
        note: "The passive keeps the employer as the responsible agent and the writer as the messenger.",
      },
      {
        feature: "so-that purpose clause",
        example: "so that no paperwork delay on either side ever touches your payment again",
        note: "The purpose clause turns the buffer account into a guarantee — grammar doing the reassuring.",
      },
      {
        feature: "First conditional close",
        example: "Please let me know if the 10th presents any difficulty",
        note: "If + present with a request main clause keeps the close forward-looking and calm.",
      },
    ],
    coherence:
      "The letter is built on three dates — the 27th, the 1st, the 9th — and every paragraph re-anchors to them, so the reader always knows exactly how late the rent is and when it stops being late. Paragraph three's 'the day after the wage clears' refers back to paragraph two's payroll story rather than repeating it, and paragraph four answers the question the landlord is silently asking: will this happen again?",
    alternativeExpressions: [
      { insteadOf: "I am writing to let you know", use: "I wanted to give you early notice that" },
      { insteadOf: "the two dates have not lined up", use: "the two dates have failed to coincide" },
      { insteadOf: "the day after the wage clears", use: "as soon as the salary reaches my account" },
      { insteadOf: "so that no paperwork delay on either side ever touches your payment again", use: "so that no administrative slip ever delays your payment again" },
      { insteadOf: "presents any difficulty", use: "causes you any inconvenience" },
    ],
    commonMistakes: [
      {
        wrong: "Dear Sir, … Yours faithfully,",
        right: "Dear Mr Halvorsen, … Yours sincerely,",
        reason: "A named recipient takes his title and Sincerely; the Sir/Madam with faithfully pairing belongs to strangers.",
      },
      {
        wrong: "So sorry!!! My salary is late, these things happen, anyway I'll pay you when I can.",
        right: "My wage is expected on the 9th; I will transfer the full amount on the morning of the 10th.",
        reason: "Vagueness reads as unreliability; the exact date is the reassurance this letter exists to give.",
      },
      {
        wrong: "Three paragraphs on how bad the payroll company is.",
        right: "One paragraph of cause, then the payment date, then the future fix.",
        reason: "The bullet asks why the payment is late, not for a blame essay; over-explaining starves the other two bullets.",
      },
      {
        wrong: "It won't happen again, I promise.",
        right: "I have opened a small savings account and will keep a month's rent in it permanently.",
        reason: "A promise is air; a mechanism is reassurance — top-band letters offer the mechanism.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Mr Halvorsen,\n\nI am writing because my rent will be late this month. I'm sorry about this, the reason is my company changed the payroll system and my salary is coming later.",
        "Normally my wage comes on 27th and I pay you on 1st. But this month the money will arrive on 9th, so I can't pay before that. I will send the rent on 10th in the morning, I promise.",
        "This never happened in three years and I am a good tenant I think. Next month everything will be normal again, don't worry.",
        "Sorry again for the delay. If you have any problem please call me.",
        "Yours faithfully,\nVikram Sandhu",
      ],
      wordCount: 112,
      justification: [
        {
          criterion: "Task Achievement",
          note: "The three bullets are touched, but the reassurance bullet is one sentence ('Next month everything will be normal again, don't worry') with no mechanism, and at 112 words the response is well under the floor.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "The paragraph-per-bullet shape is visible, but the greeting/sign-off pairing is mismatched (Dear Mr Halvorsen with Yours faithfully), and linking leans on 'But' and 'so'.",
        },
        {
          criterion: "Lexical Resource",
          note: "Basic but relevant ('payroll', 'salary', 'tenant'); 'I am a good tenant I think' is an unforced run-on, and 'don't worry' is too casual for a landlord.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Simple sentences with recurring errors — missing articles in dates ('on 27th', 'on 9th'), comma splices ('in the morning, I promise'), and contractions (I'm, can't, don't) that mismatch the semi-formal register.",
        },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Mr Halvorsen,\n\nI am writing to let you know that this month's rent will reach you a little later than usual, and to explain why.",
        "The cause is a change at my employer: Cardew Logistics has moved its payroll to a new provider, and the migration has delayed this month's wages by about a week. My salary normally reaches my account on the 27th, in time for the rent on the 1st, but this month it is expected on the 9th. In three years of renting from you, this is the first time the two dates have not lined up.",
        "The full amount will leave my account on the morning of the 10th, the day after the wage clears, and I have already scheduled the payment. If it would help, I can ask Cardew's payroll office for a short note confirming the delay.",
        "As for the future, the provider has confirmed in writing that next month's payroll will run on its usual date. I have also opened a small savings account this week and will keep a month's rent in it from now on, so that no administrative slip on either side ever delays your payment again.",
        "Thank you for your patience over the past three years. Please let me know if the 10th presents any difficulty.\n\nYours sincerely,\nDana Whitcombe",
      ],
      wordCount: 222,
      justification: [
        {
          criterion: "Task Achievement",
          note: "All three bullets developed with dates doing the persuading; the remedy is structural (buffer account), not just a promise, and the close invites rather than presumes.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "The three dates (27th, 1st, 9th) anchor every paragraph; 'As for the future' pivots cleanly, and the payment promise refers back to the payroll cause without repeating it.",
        },
        {
          criterion: "Lexical Resource",
          note: "Precise items — 'migration', 'lined up', 'clears', 'in writing' — used naturally; phrasing stays a shade formulaic ('I am writing to let you know'), which is what keeps it at 7.5.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Wide, mostly error-free range — present perfect for the ongoing cause, a so-that purpose clause, if + present close; one heavy sentence in paragraph two, otherwise controlled.",
        },
      ],
    },
  ],
  vocabularyBank: [
    { word: "payroll", partOfSpeech: "noun", meaning: "The system by which an employer calculates and pays wages." },
    { word: "landlord", partOfSpeech: "noun", meaning: "The person who owns a property and rents it out." },
    { word: "to clear", partOfSpeech: "verb", meaning: "Of money: to arrive and become available in an account." },
    { word: "in writing", partOfSpeech: "phrase", meaning: "In a formal document or letter, as evidence." },
    { word: "savings account", partOfSpeech: "noun", meaning: "A bank account for money kept for the future, not spending." },
    { word: "to line up", partOfSpeech: "phrasal verb", meaning: "Of events: to happen at the same time, so plans work." },
    { word: "tenant", partOfSpeech: "noun", meaning: "A person who rents a property from a landlord." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};
