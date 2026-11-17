/**
 * General Training Task 1 bank — file C (PROMPT 54 expansion, GT Task 1
 * practice batch C).
 *
 * Ten further original GT Task 1 letters at the practice tier: a complete
 * but leaner teaching payload (situation + three bullets + register, compact
 * planning notes, a full model letter, the eight-element analysis and a
 * topic vocabulary bank, with no level samples). The batch widens the five
 * hardest-working letter purposes — complaint, request, invitation, apology
 * and explanation — across all three registers and nine of the unified
 * topic domains:
 *
 *   1. Complaint — a faulty online order (formal, everyday)
 *   2. Complaint — noise from the flat above (semi-formal, society)
 *   3. Request — longer weekend library hours (formal, culture)
 *   4. Request — company funding for a training course (formal, workplace)
 *   5. Invitation — a week-long visit from a friend abroad (informal, everyday)
 *   6. Invitation — a new neighbour joins the book club (semi-formal, society)
 *   7. Apology — a friend's damaged camera (informal, everyday)
 *   8. Apology — a missed client meeting (formal, workplace)
 *   9. Explanation — a late essay to a tutor (semi-formal, education)
 *  10. Explanation — an absence from work (formal, workplace)
 *
 * Every model letter is an original composition; the band labels are
 * educational estimates against the public descriptors, never official
 * scores.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

// ---------------------------------------------------------------------------
// 1. Complaint — a faulty online order (formal, everyday)
// ---------------------------------------------------------------------------

const gt1ComplaintDelivery: WritingBankTask = {
  slug: "ielts-wb-gt1-complaint-delivery",
  title: "A faulty online order",
  channel: "gt",
  taskType: "task-1",
  family: "complaint",
  tier: "practice",
  topic: "everyday",
  register: "formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You recently ordered a toaster from a large online retailer. The website promised delivery within three working days, but the parcel arrived eleven days later, and when you unpacked it the appliance was damaged and only one side worked.\n\nWrite a letter to the retailer's customer services department. In your letter:\n\n• describe the problems with your order\n• explain how the delay and the damage have affected you\n• say what you want the company to do\n\nBegin your letter as follows: Dear Sir or Madam,",
  situation:
    "The candidate ordered a two-slice toaster from a large online retailer, waited eleven days for a promised three-day delivery, and unpacked a cracked machine with one dead slot; the letter goes to the retailer's customer services department, an office with no named face.",
  bullets: [
    "Describe the problems with your order",
    "Explain how the delay and the damage have affected you",
    "Say what you want the company to do",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Develops all three bullets in order: the problems with the order, their effects on the household, and the remedy requested.",
      keywords: ["order", "delivery", "damaged", "replacement"],
    },
    {
      key: "purpose-opening",
      description: "States the complaint's purpose in the first sentence, with the order number and purchase date attached.",
      keywords: ["writing", "complain", "order", "website"],
    },
    {
      key: "specific-faults",
      description: "Describes the late delivery and at least two physical faults in concrete, checkable detail.",
      keywords: ["crushed", "casing", "slot", "crumb"],
    },
    {
      key: "real-costs",
      description: "Turns the delay and the damage into lived costs rather than adjectives: wasted weekends and a kitchen without toast.",
      keywords: ["saturdays", "courier", "household", "grill"],
    },
    {
      key: "proportionate-remedy",
      description: "Closes with a specific remedy and a fallback, not a demand or a threat.",
      keywords: ["replacement", "refund", "collection", "charge"],
    },
    {
      key: "formal-register",
      description: "Holds the formal register: no contractions, and the Dear Sir or Madam / Yours faithfully pairing.",
      keywords: ["dear sir", "madam", "faithfully", "would"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Customer services is an institution with no face: open 'Dear Sir or Madam' and close 'Yours faithfully' — the pairing must match.",
        "Formal means no contractions anywhere; firmness comes from facts and dates, never from exclamation marks or sarcasm.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 needs two kinds of problem: the broken promise (eleven days for a three-day delivery) and the physical faults (crushed box, cracked casing, dead slot).",
        "Bullet 2 turns problems into costs: two lost Saturdays, a fortnight of grill-made toast for a family of four.",
        "Bullet 3 asks for an inspected replacement plus the delivery refund, with a fallback of free collection and a full refund.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: purpose with the order number, the faults, the costs, the remedy and close — one bullet per body paragraph.",
        "Aim for 180–230 words; every claim needs a number or a date behind it, or it is an opinion.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Sir or Madam,\n\nI am writing to complain about an order I placed on your website on 3 May (number 58214), a two-slice toaster that arrived eleven days late and, when unpacked, turned out to be damaged.",
      "Your website promised delivery within three working days, yet the parcel did not reach me until the fourteenth, and it had clearly suffered on the way: one corner of the box was crushed, the plastic casing above the slots is cracked, and only the left slot heats at all. The right one stays cold no matter how long I wait, and crumbs fall straight through the warped crumb tray onto the worktop.",
      "The delay has already cost me two wasted Saturdays waiting for a courier who never came, and the faulty machine has cost us more: our old toaster gave out the week I ordered yours, so a household of four has been making toast under the grill for a fortnight.",
      "Given that the item is both late and unusable, I would ask you to send a replacement that has been inspected before dispatch, together with a refund of the £4.99 delivery charge. If a replacement cannot be sent within the week, please arrange collection of the damaged toaster at your expense and refund the order in full. I look forward to your reply within seven days.\n\nYours faithfully,\nElena Marsh",
    ],
    wordCount: 229,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "Names the order, its number and its purchase date in the first sentence, so the complaint can be traced before any detail begins; 'turned out to be damaged' sets up the twin problems of delay and damage that structure the rest of the letter.",
      },
      {
        role: "Bullet 1 — the problems with the order",
        analysis:
          "Gives the delivery failure a number (eleven days against three promised) and the damage two physical faults — the crushed box and cracked casing, the dead right slot — each described as evidence rather than opinion. The warped crumb tray keeps the detail mundane and therefore credible.",
      },
      {
        role: "Bullet 2 — the effects on the household",
        analysis:
          "Converts the late, broken order into lived costs: two Saturdays lost to a courier who never came, and a household of four grilling bread for a fortnight. 'Has cost us more' links the paragraph back to the delay without repeating it.",
      },
      {
        role: "Bullet 3 — the remedy and close",
        analysis:
          "Asks for an inspected replacement plus the delivery refund, then offers a fallback — collection at the retailer's expense and a full refund — which reads as reasonable rather than aggressive; the seven-day reply window closes the letter firmly.",
      },
    ],
    vocabulary: [
      {
        term: "turned out to be damaged",
        note: "Reports the discovery in the past: the damage only became visible on unpacking, which quietly strengthens the case that it happened in transit.",
      },
      {
        term: "had clearly suffered on the way",
        note: "A formal way of saying the parcel was battered; 'suffered' blames the journey, not the buyer.",
      },
      {
        term: "gave out",
        note: "The everyday phrasal verb for a machine dying of old age; it explains why the household had no fallback toaster.",
      },
      {
        term: "at your expense",
        note: "The fixed phrase for making the other party pay — here, the cost of collecting the return.",
      },
      {
        term: "a fortnight",
        note: "Two weeks in one word; British and precise, and it measures the inconvenience in time rather than feeling.",
      },
    ],
    grammar: [
      {
        feature: "Past simple with dates and order numbers",
        example: "an order I placed on your website on 3 May (number 58214)",
        note: "The letter's authority comes from dates and reference numbers set in the past simple; every claim can be checked against the order record.",
      },
      {
        feature: "Present simple for the machine's present state",
        example: "only the left slot heats at all … The right one stays cold",
        note: "The damage is described in the present because it is still true at the time of writing — tense choice does the argument's work.",
      },
      {
        feature: "Would for polite demands",
        example: "I would ask you to send a replacement that has been inspected before dispatch",
        note: "The conditional softens a firm request, the core politeness move of a formal complaint.",
      },
    ],
    coherence:
      "The letter runs order, faults, costs, remedy — the exact order of the bullets — and each paragraph hands the next a noun: the parcel that 'suffered on the way' becomes the household 'making toast under the grill', and the damaged item of paragraph two returns as the 'collection' of the last. The twin threads of lateness and damage are separated in the opening sentence and reunited in 'both late and unusable'.",
    alternativeExpressions: [
      { insteadOf: "I am writing to complain about an order", use: "I am writing regarding order 58214, which arrived late and damaged" },
      { insteadOf: "it had clearly suffered on the way", use: "it showed every sign of a rough journey" },
      { insteadOf: "two wasted Saturdays", use: "two weekend days given up for nothing" },
      { insteadOf: "I look forward to your reply within seven days", use: "I would appreciate a response within the week" },
    ],
    commonMistakes: [
      {
        wrong: "Dear Manager, I want my money back now.",
        right: "Dear Sir or Madam, … I would ask you to send a replacement.",
        reason: "An unnamed company takes an institutional greeting, and 'I want' reads as a demand; 'I would ask' makes the same point politely.",
      },
      {
        wrong: "The toaster is broken and everything is terrible.",
        right: "Only the left slot heats, and the casing above the slots is cracked.",
        reason: "Vague adjectives cannot be acted on; specific faults let customer services verify the claim against the order.",
      },
      {
        wrong: "It didn't arrive and I'm very disappointed.",
        right: "It did not arrive for eleven days, and I was accordingly disappointed.",
        reason: "Contractions break the formal contract in the very sentences that carry the complaint.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "faulty", partOfSpeech: "adjective", meaning: "Broken or not working properly, as a product." },
    { word: "to give out", partOfSpeech: "phrasal verb", meaning: "To stop working, usually from age or wear." },
    { word: "dispatch", partOfSpeech: "noun", meaning: "The sending out of goods from a warehouse or shop." },
    { word: "worktop", partOfSpeech: "noun", meaning: "The flat working surface in a kitchen." },
    { word: "fortnight", partOfSpeech: "noun", meaning: "A period of two weeks." },
    { word: "at your expense", partOfSpeech: "phrase", meaning: "Paid for by the other party, not by you." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Complaint — noise from the flat above (semi-formal, society)
// ---------------------------------------------------------------------------

const gt1ComplaintNeighbourNoise: WritingBankTask = {
  slug: "ielts-wb-gt1-complaint-neighbour-noise",
  title: "Noise from the flat above",
  channel: "gt",
  taskType: "task-1",
  family: "complaint",
  tier: "practice",
  topic: "society",
  register: "semi-formal",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You live in a flat below a neighbour you have met only in the stairwell. For the past few weeks, music with a heavy bass has been coming through your ceiling most weeknights until well after midnight, and you start work early.\n\nWrite a letter to your neighbour. In your letter:\n\n• describe when the noise happens and what it sounds like from your flat\n• explain how it has been affecting you\n• suggest a way the problem could be solved\n\nBegin your letter as follows: Dear Mr Osei,",
  situation:
    "The candidate lives in the flat below a neighbour met only in the stairwell, whose weeknight music has been carrying through the ceiling until one in the morning; the letter must be firm enough to work and friendly enough to keep the peace.",
  bullets: [
    "Describe when the noise happens and what it sounds like from your flat",
    "Explain how it has been affecting you",
    "Suggest a way the problem could be solved",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets in separate paragraphs: when the noise happens, what it costs the writer, and a workable solution.",
      keywords: ["noise", "bass", "sleep", "compromise"],
    },
    {
      key: "purpose-opening",
      description: "Frames the letter as a neighbourly note before any complaint begins.",
      keywords: ["note", "hope", "problem", "flats"],
    },
    {
      key: "checkable-detail",
      description: "Pins the noise to days, hours and mechanisms rather than general complaints of loudness.",
      keywords: ["weeknights", "ceiling", "bass", "hum"],
    },
    {
      key: "real-effects",
      description: "Shows the effect on sleep, work and evenings without exaggerating the nuisance.",
      keywords: ["six", "meetings", "sofa", "sleep"],
    },
    {
      key: "constructive-solution",
      description: "Offers solutions the neighbour could adopt tonight, cheapest first, and an offer to talk in person.",
      keywords: ["headphones", "rug", "speakers", "tea"],
    },
    {
      key: "semi-formal-register",
      description: "Keeps the semi-formal pairing: Dear Mr Osei with Yours sincerely, courteous full forms with room for warmth.",
      keywords: ["dear mr", "sincerely", "neighbour", "welcome"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Mr Osei is a near-stranger who will remain a neighbour: 'Dear Mr Osei' with 'Yours sincerely', and humour only where it de-escalates.",
        "Semi-formal keeps full verb forms but allows warmth; the goal is a change of behaviour, not an admission of guilt.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 pins the noise to checkable facts: weeknights, half past eleven to one, bass rather than volume, two knocks that went unheard.",
        "Bullet 2 prices the effect in sleep, meetings and the sofa — then hands him the compliment of being 'a considerate neighbour'.",
        "Bullet 3 offers a ladder of fixes: headphones, lower volume, speakers off the bare boards — each one cheaper for him than the last.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the framed note, the noise, the cost, the compromise and the offer of tea.",
        "Keep every sentence one he could read aloud without wincing; you share a ceiling, not a courtroom.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mr Osei,\n\nWe have crossed paths in the stairwell since you moved in last spring, so I hope you will not mind a note about a problem between our flats — easier to raise on paper than over the bins.",
      "For the past three weeks or so, music has been coming through my ceiling most weeknights from about half past eleven until one or later. It is not the volume so much as the bass, which the building carries straight down into my bedroom, so that the whole room seems to hum. On two occasions I have knocked, but the music was too loud for anyone to hear.",
      "I am up at six for work, and the broken sleep has begun to tell: I have dozed through two morning meetings this month and twice ended up on the sofa in the living room, the only room far enough from the noise. I do not think you can have any idea how much sound travels down through these floors, because in every other respect you seem a considerate neighbour.",
      "Might I suggest a compromise? If the music after ten could move to headphones, or at least to a volume the floors cannot carry, the problem would disappear at a stroke; even lifting the speakers off the bare boards onto a rug would dull most of the bass. I would gladly pop up one evening to talk it over a cup of tea, if that is easier.\n\nYours sincerely,\nTom Whitaker",
    ],
    wordCount: 249,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and framing",
        analysis:
          "Softens the ground before the complaint: the stairwell acquaintance is acknowledged, the note framed as the polite channel, and 'over the bins' adds the humour that keeps a neighbourly relationship intact.",
      },
      {
        role: "Bullet 1 — when and what the noise is",
        analysis:
          "Pins the noise to times and days — weeknights, half past eleven until one — and explains the physics of the problem: not volume but bass, carried by the building into the bedroom. The unheard knocks show the writer has already tried in person.",
      },
      {
        role: "Bullet 2 — the effects",
        analysis:
          "Measures the cost in sleep, meetings and the sofa, then hands the neighbour a compliment: 'you seem a considerate neighbour' assumes the noise is unknowing, which is the assumption most likely to get it stopped.",
      },
      {
        role: "Bullet 3 — the compromise",
        analysis:
          "Offers a ladder of solutions from headphones to a rug under the speakers, each cheaper for the neighbour than the last, and closes with tea and a chat — the relationship repair that a complaint between neighbours needs.",
      },
    ],
    vocabulary: [
      {
        term: "the building carries straight down",
        note: "Of sound: to carry is to travel through a structure; making the building the culprit spares the person, which is the letter's whole tactic.",
      },
      {
        term: "has begun to tell",
        note: "The idiom for an effect becoming visible over time — formal enough for a letter, alive enough to be true.",
      },
      {
        term: "at a stroke",
        note: "In one single action; it gives the proposed solution sweep without exaggerating it.",
      },
      {
        term: "pop up",
        note: "The friendly phrasal verb for a short, casual visit — it lowers the stakes of the conversation the letter proposes.",
      },
    ],
    grammar: [
      {
        feature: "Present perfect continuous for an ongoing nuisance",
        example: "music has been coming through my ceiling most weeknights",
        note: "The tense shows the problem started in the past and is still running — exactly what a recurring noise is.",
      },
      {
        feature: "So that-clause of result",
        example: "so that the whole room seems to hum",
        note: "Subordination explains the mechanism of the disturbance rather than merely asserting it.",
      },
      {
        feature: "Second conditional for the proposal",
        example: "If the music after ten could move to headphones … the problem would disappear",
        note: "Could and would frame the request as hypothetical, leaving the neighbour room to agree without losing face.",
      },
    ],
    coherence:
      "The letter climbs a deliberate ladder: acquaintance, problem, cost, solution, invitation. Each paragraph assumes the last — the bass of paragraph two becomes the broken sleep of paragraph three, which becomes the compromise of paragraph four — and the closing offer of tea answers the opening promise that this is 'easier to raise on paper': the paper does the raising, the tea does the reconciling.",
    alternativeExpressions: [
      { insteadOf: "We have crossed paths in the stairwell", use: "We have nodded to each other on the stairs" },
      { insteadOf: "the broken sleep has begun to tell", use: "the lost sleep is starting to show" },
      { insteadOf: "the problem would disappear at a stroke", use: "the problem would be solved at once" },
    ],
    commonMistakes: [
      {
        wrong: "Dear Mr Osei, Your music is way too loud and it must stop.",
        right: "…I hope you will not mind a note about a problem between our flats.",
        reason: "An accusation in the first line invites a defensive reply; a framed note invites a change of behaviour.",
      },
      {
        wrong: "I cannot sleep because of your terrible bass every single night.",
        right: "The bass, which the building carries down into my bedroom, reaches me most weeknights from about half past eleven.",
        reason: "'Every single night' exaggerates and 'terrible' editorialises; times and mechanisms are checkable, and checkable persuades.",
      },
      {
        wrong: "You should buy headphones immediately.",
        right: "Might I suggest a compromise? If the music after ten could move to headphones…",
        reason: "Bare 'should' is an instruction to a stranger; the question form and 'compromise' keep the balance neighbourly.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "bass", partOfSpeech: "noun", meaning: "The low frequencies in music, which travel through solid floors." },
    { word: "stairwell", partOfSpeech: "noun", meaning: "The vertical space enclosed by a flight of stairs in a block of flats." },
    { word: "to tell", partOfSpeech: "verb", meaning: "Of an effect, to become visible over time." },
    { word: "to drown out", partOfSpeech: "phrasal verb", meaning: "To make another sound impossible to hear." },
    { word: "at a stroke", partOfSpeech: "phrase", meaning: "In a single action, all at once." },
    { word: "to pop up", partOfSpeech: "phrasal verb", meaning: "To visit someone briefly and informally." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Request — longer weekend library hours (formal, culture)
// ---------------------------------------------------------------------------

const gt1RequestLibrary: WritingBankTask = {
  slug: "ielts-wb-gt1-request-library",
  title: "Asking for longer library hours",
  channel: "gt",
  taskType: "task-1",
  family: "request",
  tier: "practice",
  topic: "culture",
  register: "formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The public library in your town closes at five o'clock on Saturdays and does not open at all on Sundays, so people who work during the week have very little chance to use it.\n\nWrite a letter to the head librarian. In your letter:\n\n• describe who is currently unable to make good use of the library\n• explain how longer weekend hours would benefit the town\n• suggest the hours you would like to see and how they could be trialled\n\nBegin your letter as follows: Dear Ms Whitfield,",
  situation:
    "The candidate works office hours on the far side of town and can reach the central library only in the ninety minutes before it closes on a Saturday; the letter goes to the head librarian, a professional reader of requests addressed by name.",
  bullets: [
    "Describe who is currently unable to make good use of the library",
    "Explain how longer weekend hours would benefit the town",
    "Suggest the hours you would like to see and how they could be trialled",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: who is shut out, the benefits of longer hours, and the hours requested with a trial.",
      keywords: ["library", "hours", "sundays", "trial"],
    },
    {
      key: "purpose-opening",
      description: "States the request in the opening sentence and quantifies the problem immediately.",
      keywords: ["writing", "ask", "extend", "window"],
    },
    {
      key: "named-groups",
      description: "Names the excluded groups specifically — commuters, students, families — rather than saying everyone.",
      keywords: ["commuters", "students", "families", "revising"],
    },
    {
      key: "town-benefit-case",
      description: "Argues the benefit to the town in terms of study, family time and local trade, with evidence of growing demand.",
      keywords: ["study", "evenings", "trade", "residents"],
    },
    {
      key: "concrete-proposal",
      description: "Closes with exact hours, a one-term trial and a measurement, plus an offer to help publicise it.",
      keywords: ["eight", "trial", "counter", "publicise"],
    },
    {
      key: "formal-register",
      description: "Holds the formal register: full forms, Dear Ms Whitfield with Yours sincerely, proposal language throughout.",
      keywords: ["dear ms", "sincerely", "would", "propose"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Ms Whitfield is a professional reader of requests: 'Dear Ms Whitfield' with 'Yours sincerely', and evidence rather than enthusiasm.",
        "Formal register throughout; the proposal must sound like something she could forward to the council unchanged.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 names the excluded groups in turn — commuters, exam-time students, working families — plus one insider detail (the history room's weekday hours).",
        "Bullet 2 argues benefits for the town: quiet study, family evenings, trade for the coffee shops, and three thousand new residents arriving.",
        "Bullet 3 proposes exact hours and a one-term trial with a door counter — measurement, not insistence.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the ask, who is shut out, the benefits, the trial and the offer to help.",
        "Aim for 200–250 words; a proposal may run a little longer than a complaint because it carries its own evidence.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Ms Whitfield,\n\nI am writing to ask whether the library service could extend its weekend opening hours. At present the central library closes at five on a Saturday and stays shut on Sunday, which leaves anyone working office hours a ninety-minute window at the end of the week.",
      "That window shuts out more people than the Saturday crowds suggest. Commuters cannot browse the shelves on weekdays; sixth-formers revising for summer exams have nowhere quiet to work once school closes; and the children's story hour on Saturday mornings is booked out weeks ahead. Even the local history room keeps weekday-morning hours that suit nobody who earns a wage.",
      "Longer weekend hours would put the library back at the centre of the town's life. Saturday opening until eight would give working families their evenings back, and a Sunday afternoon service, even a modest one, would give students a quiet study room for the whole weekend while bringing trade to the coffee shops around the square. With the new housing on the former bus depot due to add three thousand residents within two years, this seems the moment to widen what the building offers.",
      "Might I propose a trial? Opening until eight on Saturdays and from one until five on Sundays for a single term, with a counter at the door to record visits, would show the council what demand exists at very little risk. I would be glad to publicise it through the residents' association. Thank you for considering the idea.\n\nYours sincerely,\nDaniel Okafor",
    ],
    wordCount: 254,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "States the request in one sentence — extend the weekend hours — then quantifies the problem before arguing it: a ninety-minute window is the kind of number a librarian can act on.",
      },
      {
        role: "Bullet 1 — who is shut out",
        analysis:
          "Lists the excluded in three strokes — commuters, exam-time sixth-formers, families — and adds the local history room as the buried detail that shows the writer knows the building, not just the idea.",
      },
      {
        role: "Bullet 2 — the benefits to the town",
        analysis:
          "Turns longer hours into benefits for named groups and for the surrounding trade, then raises the new housing development as evidence that demand is growing rather than static.",
      },
      {
        role: "Bullet 3 — the request and the trial",
        analysis:
          "Closes with exact hours, a one-term trial and a door counter, converting opinion into measurement; the offer to publicise through the residents' association shows the writer will share the work.",
      },
    ],
    vocabulary: [
      {
        term: "a ninety-minute window",
        note: "'Window' as a limited period of opportunity — the shopping metaphor for restricted access, and a number the reader can feel.",
      },
      {
        term: "shuts out",
        note: "One phrasal verb carries the whole unfairness of the timetable; exclusion stated as a mechanism, not a grievance.",
      },
      {
        term: "booked out weeks ahead",
        note: "The administrative idiom for demand exceeding supply — evidence, not complaint, and the kind librarians collect anyway.",
      },
      {
        term: "at very little risk",
        note: "The language of proposals: it prices the trial for the decision-maker before she has to ask.",
      },
    ],
    grammar: [
      {
        feature: "Which-clause converting fact into consequence",
        example: "which leaves anyone working office hours a ninety-minute window",
        note: "One relative clause turns the closing times into their human consequence without a new sentence.",
      },
      {
        feature: "Present simple for institutional facts",
        example: "the central library closes at five … the local history room keeps weekday-morning hours",
        note: "Timetable facts sit naturally in the present simple; consistency here keeps the letter auditable.",
      },
      {
        feature: "Would throughout the proposal",
        example: "would give working families their evenings back … would show the council",
        note: "Every benefit is framed with would, the conditional of proposals — nothing is promised, everything is offered.",
      },
    ],
    coherence:
      "The letter moves from the excluded, to the benefits, to the mechanism — complaint, case, proposal — and each paragraph opens by picking up the last ('That window', 'Longer weekend hours', 'Might I propose'). Numbers do the linking: ninety minutes becomes opening until eight, the three thousand new residents become the reason to widen, and the trial's counter turns both into evidence.",
    alternativeExpressions: [
      { insteadOf: "a ninety-minute window", use: "an hour and a half in which to visit" },
      { insteadOf: "shuts out more people than the Saturday crowds suggest", use: "excludes more people than a casual visitor would guess" },
      { insteadOf: "at very little risk", use: "without committing the service to anything permanent" },
    ],
    commonMistakes: [
      {
        wrong: "The library hours are unfair and must change.",
        right: "At present the central library closes at five on a Saturday, which leaves anyone working office hours a ninety-minute window.",
        reason: "Asserting unfairness starts an argument; stating hours and their effect starts a case.",
      },
      {
        wrong: "Everyone wants the library open on Sundays.",
        right: "A Sunday afternoon service would give students a quiet study room for the whole weekend.",
        reason: "'Everyone' cannot be verified; a named group with a named benefit can be planned for.",
      },
      {
        wrong: "You should open until ten every night.",
        right: "Might I propose a trial? Opening until eight on Saturdays…",
        reason: "A maximal demand is easy to refuse; a costed trial with a measurement is easy to approve.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "window", partOfSpeech: "noun", meaning: "A short period during which something is possible." },
    { word: "to browse", partOfSpeech: "verb", meaning: "To look at shelves or goods leisurely, without a fixed purchase in mind." },
    { word: "commuter", partOfSpeech: "noun", meaning: "Someone who travels regularly between home and work." },
    { word: "trial", partOfSpeech: "noun", meaning: "A temporary period of testing a change before deciding to keep it." },
    { word: "residents' association", partOfSpeech: "noun", meaning: "The volunteer group that represents a neighbourhood." },
    { word: "to publicise", partOfSpeech: "verb", meaning: "To make something known to the public." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Request — funding for a training course (formal, workplace)
// ---------------------------------------------------------------------------

const gt1RequestWorkTraining: WritingBankTask = {
  slug: "ielts-wb-gt1-request-work-training",
  title: "Funding for a training course",
  channel: "gt",
  taskType: "task-1",
  family: "request",
  tier: "practice",
  topic: "workplace",
  register: "formal",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You have found a part-time evening course that would teach you skills directly useful to your current job, and you would like your company to pay for it.\n\nWrite a letter to your manager. In your letter:\n\n• describe the course you want to take and what it costs\n• explain how it would benefit your team and the company\n• suggest how the funding and any study leave could be arranged\n\nBegin your letter as follows: Dear Ms Bhatt,",
  situation:
    "The candidate spends two days a month assembling campaign figures by hand and wants the department to fund a sixteen-week evening course in data analysis; the letter to a manager known by name must make a business case rather than a personal plea.",
  bullets: [
    "Describe the course you want to take and what it costs",
    "Explain how it would benefit your team and the company",
    "Suggest how the funding and any study leave could be arranged",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: the course and its cost, the benefit to the team, and the arrangement proposed.",
      keywords: ["course", "fee", "benefit", "budget"],
    },
    {
      key: "purpose-opening",
      description: "States the funding request in the first sentence and names the fee by the end of the opening paragraph.",
      keywords: ["writing", "ask", "fund", "april"],
    },
    {
      key: "course-specifics",
      description: "Describes the course concretely: its name, the college, its length, its evenings and its total cost.",
      keywords: ["certificate", "college", "sixteen", "evenings"],
    },
    {
      key: "business-case",
      description: "Frames the benefits in the company's arithmetic — hours saved, earlier reports, forecasting — not personal growth.",
      keywords: ["automate", "reports", "forecast", "figures"],
    },
    {
      key: "fair-arrangement",
      description: "Answers the objections before they are raised: whose budget, whose time, what leave, and what the team gets back.",
      keywords: ["budget", "leave", "saturday", "lunchtime"],
    },
    {
      key: "formal-register",
      description: "Holds the formal register to a manager: Dear Ms Bhatt with Yours sincerely and no contractions.",
      keywords: ["dear ms", "sincerely", "would", "department"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Ms Bhatt decides with a budget in mind: 'Dear Ms Bhatt', 'Yours sincerely', and the case framed as return rather than favour.",
        "Formal but first-person; 'I' is doing the asking, so 'we' should do the benefiting.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 gives the course's facts — name, college, sixteen weeks, two evenings, £640 — in one sentence.",
        "Bullet 2 converts the syllabus into the team's arithmetic: two days a month automated, reports early, forecasting mid-campaign.",
        "Bullet 3 answers the objections in order: the training budget, the writer's own evenings, one repaid Saturday, a lunchtime session for the team.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the ask and the fee, the business case, the arrangement, the loyalty close.",
        "Never write 'I deserve this'; write what the team gets, and let the reader conclude it.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Ms Bhatt,\n\nI am writing to ask whether the department could fund a part-time course I would like to begin in April. It is the Certificate in Data Analysis at Northgate College — sixteen weeks, two evenings a week, with a final project in place of an exam — and the fee is £640 including materials.",
      "The course is aimed squarely at the work our team already does. Each month I spend about two days assembling the campaign figures by hand; the syllabus covers the query and dashboard tools that would let me automate most of that, so the reports you circulate on the first of the month would reach you with a day's work to spare. By the final module I should be forecasting results mid-campaign rather than reporting them afterwards — the difference the sales team keeps asking for.",
      "I have thought about how the arrangement could work. The fee falls well inside this year's training budget; I would attend every session in my own time, and the only leave I would ask for is one day to present the final project in July, which I would gladly make up on a Saturday. I would also run a lunchtime session for the team on whatever tools prove most useful, so the course pays for itself twice.",
      "If it would help, I am happy to bring the syllabus to our next one-to-one. I am not planning to leave the company, and I would like these skills to be working for this team rather than anywhere else.\n\nYours sincerely,\nLucia Fernandez",
    ],
    wordCount: 259,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "Leads with the ask — funding for a named course — and closes the paragraph with the fee, so the manager knows the number before the argument begins.",
      },
      {
        role: "Bullet 2 — the business case",
        analysis:
          "Translates the syllabus into the team's own arithmetic: two days a month of hand-assembled figures automated, reports arriving with a day to spare, forecasting that answers the sales team's standing request. Every benefit is the company's, not the writer's.",
      },
      {
        role: "Bullet 3 — the arrangement",
        analysis:
          "Answers the three questions a manager will ask — whose budget, whose time, what leave — before they are asked: the training budget, the writer's own evenings, one Saturday to repay the single day of leave.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "Offers to bring the syllabus to the one-to-one and names the writer's intention to stay, addressing the unspoken fear that funded training walks out of the door.",
      },
    ],
    vocabulary: [
      {
        term: "aimed squarely at",
        note: "Designed precisely for; one adverb makes the course relevant to the team's work rather than ornamental to it.",
      },
      {
        term: "with a day's work to spare",
        note: "The idiom of margins — finished earlier than needed — the saving stated as slack, which is the form managers understand.",
      },
      {
        term: "in my own time",
        note: "The fixed phrase that removes the biggest objection to funding a course: stolen working hours.",
      },
      {
        term: "pays for itself twice",
        note: "The language of return on investment applied to the lunchtime session — the second return belongs to the whole team.",
      },
    ],
    grammar: [
      {
        feature: "Would-conditional chain for projected benefits",
        example: "would let me automate most of that, so the reports … would reach you with a day's work to spare",
        note: "The conditional keeps every promise hypothetical, which is honest — the benefits are projections, not guarantees.",
      },
      {
        feature: "So-clause of result linking cost to saving",
        example: "so the course pays for itself twice",
        note: "Result subordination ties the lunchtime session to the company's gain, not to the writer's generosity.",
      },
      {
        feature: "Free relative whatever",
        example: "on whatever tools prove most useful",
        note: "The free relative hands the choice of session content to the team — flexibility built into the grammar of the offer.",
      },
    ],
    coherence:
      "The letter is a business case in miniature: ask, payoff, cost, close. Paragraph two answers 'what is in it for the company' and paragraph three answers 'what will it cost us', and the two are bridged by numbers that recur — the two days a month of paragraph two justify the £640 of paragraph one, and the Saturday of paragraph three repays the single day of leave. The final sentence converts the skills into 'this team', the loyalty clause the whole letter has been earning.",
    alternativeExpressions: [
      { insteadOf: "aimed squarely at the work our team already does", use: "designed for exactly the reporting we do every month" },
      { insteadOf: "with a day's work to spare", use: "a full working day earlier than now" },
      { insteadOf: "the course pays for itself twice", use: "the department benefits a second time over" },
    ],
    commonMistakes: [
      {
        wrong: "I really want to do this course because I love learning.",
        right: "The syllabus covers the query and dashboard tools that would let me automate most of that work.",
        reason: "Personal enthusiasm is not a budget line; the team's saved hours are.",
      },
      {
        wrong: "It only costs £640, which is nothing for a company like ours.",
        right: "The fee falls well inside this year's training budget.",
        reason: "Calling the sum trivial insults the reader's arithmetic; placing it inside an existing budget answers the real question.",
      },
      {
        wrong: "I will need every Tuesday afternoon off to attend.",
        right: "I would attend every session in my own time.",
        reason: "Offering your own time first removes the largest objection; asking for afternoons creates one.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "syllabus", partOfSpeech: "noun", meaning: "The content of a course, listed week by week." },
    { word: "budget", partOfSpeech: "noun", meaning: "The money set aside for a particular purpose." },
    { word: "dashboard", partOfSpeech: "noun", meaning: "A screen of charts fed automatically by data." },
    { word: "leave", partOfSpeech: "noun", meaning: "Authorised time away from work." },
    { word: "one-to-one", partOfSpeech: "noun", meaning: "A regular private meeting between a manager and a team member." },
    { word: "in one's own time", partOfSpeech: "phrase", meaning: "During hours that belong to you, not to your employer." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Invitation — come and stay (informal, everyday)
// ---------------------------------------------------------------------------

const gt1InvitationVisit: WritingBankTask = {
  slug: "ielts-wb-gt1-invitation-visit",
  title: "Come and stay",
  channel: "gt",
  taskType: "task-1",
  family: "invitation",
  tier: "practice",
  topic: "everyday",
  register: "informal",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "A close friend who lives abroad has talked for years about visiting you, and this summer you finally have the time, the space and a local festival to tempt them.\n\nWrite a letter to your friend Kaito. In your letter:\n\n• tell him why this summer is the perfect time to come\n• describe what the two of you could do with a week\n• sort out the practical details of the trip\n\nBegin your letter as follows: Dear Kaito,",
  situation:
    "The candidate lives in Bristol with a newly acquired spare room, and a close friend in Osaka has talked about visiting England for years without ever booking a flight; a booked week of leave and the harbour festival give the invitation its deadline.",
  bullets: [
    "Tell him why this summer is the perfect time to come",
    "Describe what the two of you could do with a week",
    "Sort out the practical details of the trip",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: why this summer, what the week would hold, and the practical arrangements.",
      keywords: ["summer", "week", "flights", "festival"],
    },
    {
      key: "purpose-opening",
      description: "States the invitation in the first lines with a definite week attached, so it can be answered yes or no.",
      keywords: ["come", "stay", "july", "week"],
    },
    {
      key: "why-now",
      description: "Gives concrete reasons this summer works: the spare room, the booked leave and the festival.",
      keywords: ["spare", "festival", "booked", "room"],
    },
    {
      key: "shared-plans",
      description: "Plans the week in we'd and we could with named places, so the friend co-owns the itinerary.",
      keywords: ["we'd", "bath", "coast", "train"],
    },
    {
      key: "practical-details",
      description: "Settles the journey in facts: the airport, the booking window, the budget and the packing.",
      keywords: ["bristol", "amsterdam", "pack", "raincoat"],
    },
    {
      key: "informal-register",
      description: "Lives the informal register: contractions throughout, humour, and a closer such as Love.",
      keywords: ["i've", "you're", "love", "dear"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Kaito is a close friend: 'Dear Kaito' with 'Love', contractions throughout, and jokes that assume shared history.",
        "Informal is still organised — the letter must end with him knowing exactly what to do next.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 gives this summer its hook: the new spare room, the booked week, the harbour festival — reasons with dates attached.",
        "Bullet 2 plans the week in places he can picture: Bristol, Bath by train, the Somerset coast by car, the last day loose.",
        "Bullet 3 settles the journey: Bristol airport via Amsterdam, book by the end of May, pack for two climates.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the invitation and its reasons, the week, the logistics, the three-word close.",
        "Aim for 170–220 words; every sentence should sound like speech, and no sentence should sound like a brochure.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Kaito,\n\nRight, no more excuses — you have been promising yourself a week in England since forever, and this summer everything is finally in place. I've got a new flat with an actual spare room, I've booked the last week of July off work, and the harbour festival is on while you're here. Come and stay.",
      "A week is just enough to do it properly. We'd spend a couple of days here in Bristol — the harbour, the street art, a proper Sunday roast — then take the train to Bath for the Roman baths and a long lazy lunch. Midweek I thought we'd hire a car and drive out to the Somerset coast: fish and chips on the beach at Minehead, and a walk on the Quantock hills if your legs are up to it. The last day we'd keep loose for whatever you fall in love with.",
      "Now the boring-but-important part. Fly into Bristol if you can — changing in Amsterdam is easier than crossing London from Heathrow with a suitcase. Book by the end of May and it shouldn't cost more than £700 return; July here can be twenty-eight degrees or a week of drizzle, often both, so pack a jumper and a raincoat and you'll be fine.",
      "Say yes and I'll sort everything this end — the bed's made up already. Give my love to Aiko, and start looking at flights.\n\nLove,\nMegan",
    ],
    wordCount: 233,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting, the invitation and why this summer",
        analysis:
          "Opens with a friendly order — 'no more excuses' — then grounds the invitation in three facts that make this summer different: the spare room, the booked week, the festival. 'Come and stay' is the whole letter in three words.",
      },
      {
        role: "Bullet 2 — the week we'd have",
        analysis:
          "Plans the week geographically — Bristol, Bath by train, the Somerset coast by car — with each day offered in we'd or we could so the friend co-owns the itinerary; 'if your legs are up to it' leaves the hill walk optional.",
      },
      {
        role: "Bullet 3 — the practical details",
        analysis:
          "Answers the traveller's three questions in order — which airport, when to book, what to pack — and ends with the July weather joke that no letter about England can honestly omit.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "'Say yes and I'll sort everything this end' does the organising so the friend only has to agree; 'Give my love to Aiko' widens the warmth to the whole household before 'Love' signs off.",
      },
    ],
    vocabulary: [
      {
        term: "no more excuses",
        note: "The joking imperative between friends; two words establish that this invitation has a history and a deadline.",
      },
      {
        term: "keep loose",
        note: "Informal idiom for leaving a day unplanned — one verb phrase carries the whole relaxed ethos of the week.",
      },
      {
        term: "often both",
        note: "The two-word joke that completes the weather warning; humour doing the work a warning would do clumsily.",
      },
      {
        term: "I'll sort everything this end",
        note: "The fixed phrase for handling arrangements on your own side — reassurance in four words.",
      },
    ],
    grammar: [
      {
        feature: "Present perfect for the enabling facts",
        example: "I've got a new flat with an actual spare room, I've booked the last week of July off work",
        note: "The perfect tense lists what is already in place, which is what makes the invitation concrete rather than wistful.",
      },
      {
        feature: "Contracted conditional offers",
        example: "We'd spend a couple of days here … we'd hire a car",
        note: "The contracted would turns plans into shared options the friend can veto — informality carried by grammar.",
      },
      {
        feature: "Imperative chain in the close",
        example: "Say yes … Give my love to Aiko, and start looking at flights.",
        note: "Three imperatives in a row do the closing work of a whole paragraph; sentence type does the tone's work.",
      },
    ],
    coherence:
      "The letter answers the friend's silent questions in the order they would arise — why now, what would we do, how would I get there — and its facts recur like a chorus: the spare room of the opening is 'the bed's made up already' in the last line, and the July week booked in paragraph one becomes the July weather of paragraph three. Every plan is framed as we'd, so the week reads as shared property from the first sentence.",
    alternativeExpressions: [
      { insteadOf: "no more excuses", use: "you've run out of reasons to say no" },
      { insteadOf: "the last day we'd keep loose", use: "we'd leave the final day unplanned" },
      { insteadOf: "I'll sort everything this end", use: "leave all the arrangements to me" },
    ],
    commonMistakes: [
      {
        wrong: "I am writing to formally invite you to visit me this summer.",
        right: "Right, no more excuses — you have been promising yourself a week in England since forever.",
        reason: "Office English to a close friend is as much a register error as slang would be in a formal letter.",
      },
      {
        wrong: "We could visit some interesting places together.",
        right: "We'd take the train to Bath for the Roman baths, then fish and chips on the beach at Minehead.",
        reason: "Named places are the difference between an invitation and a wish.",
      },
      {
        wrong: "Yours faithfully, Megan",
        right: "Love, Megan",
        reason: "The formal sign-off contradicts every warm contraction before it, and it is the last thing the reader sees.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "spare room", partOfSpeech: "noun", meaning: "A bedroom kept for visitors rather than the household." },
    { word: "to sort out", partOfSpeech: "phrasal verb", meaning: "To arrange or deal with something." },
    { word: "return", partOfSpeech: "noun", meaning: "A ticket covering the journey out and back." },
    { word: "drizzle", partOfSpeech: "noun", meaning: "Light, persistent, miserable rain." },
    { word: "jumper", partOfSpeech: "noun", meaning: "A warm knitted top, in British English." },
    { word: "to be up to", partOfSpeech: "phrase", meaning: "To be strong or well enough for something." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 6. Invitation — join our book club (semi-formal, society)
// ---------------------------------------------------------------------------

const gt1InvitationClub: WritingBankTask = {
  slug: "ielts-wb-gt1-invitation-club",
  title: "Join our book club",
  channel: "gt",
  taskType: "task-1",
  family: "invitation",
  tier: "practice",
  topic: "society",
  register: "semi-formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "A new neighbour has just moved into your street. When you chatted over the fence, she mentioned that she loves reading and used to belong to a book group in her old town. You are a member of a small local reading club.\n\nWrite a letter to your neighbour, Mrs Adeyemi. In your letter:\n\n• describe the reading club and how it usually works\n• explain why you think she would enjoy it\n• give the details of the next meeting\n\nBegin your letter as follows: Dear Mrs Adeyemi,",
  situation:
    "The candidate belongs to a monthly reading group of eight that meets in the back room of a local coffee house, and a newly arrived neighbour has mentioned missing the book group she left behind in her old town; the invitation keeps a respectful distance while being warm.",
  bullets: [
    "Describe the reading club and how it usually works",
    "Explain why you think she would enjoy it",
    "Give the details of the next meeting",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: how the club works, why she would enjoy it, and the details of the next meeting.",
      keywords: ["club", "thursday", "enjoy", "meeting"],
    },
    {
      key: "purpose-opening",
      description: "Ties the invitation to the neighbour's own remark about missing her old reading group.",
      keywords: ["mentioned", "missed", "reading", "fence"],
    },
    {
      key: "how-it-works",
      description: "Explains the club's routines concretely: the rota, the room, the contribution and the tone.",
      keywords: ["turn", "picks", "questions", "tin"],
    },
    {
      key: "why-her",
      description: "Gives her two reasons to come — the experience she brings and the quickest way to meet people — with proof of the second.",
      keywords: ["welcome", "experience", "people", "feet"],
    },
    {
      key: "next-meeting-details",
      description: "Lands the specifics: the date, the hour, the book, and an offer of a copy.",
      keywords: ["june", "seven", "remains", "copy"],
    },
    {
      key: "semi-formal-register",
      description: "Keeps the semi-formal pairing: Dear Mrs Adeyemi with Yours sincerely, courteous and easy to refuse.",
      keywords: ["dear mrs", "sincerely", "would", "letterbox"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Mrs Adeyemi is a new neighbour on title terms: 'Dear Mrs Adeyemi' with 'Yours sincerely' — warm, but nothing presumed.",
        "Semi-formal allows full-form courtesy and friendly content together; the invitation must be easy to refuse.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 explains the club's mechanics in a sentence each: the first-Thursday rota, the Copper Kettle's back room, two pounds in the tin.",
        "Bullet 2 gives her two reasons: the experience she brings, and the fastest way to meet the street — proven by the half who 'found their feet'.",
        "Bullet 3 lands the details: Thursday 6 June, half past seven, The Remains of the Day, a copy through the letterbox.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: her remark answered, the club's rhythm, the reasons for her, the details with no pressure.",
        "Close with 'come once and see' — the lowest-stakes invitation there is.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mrs Adeyemi,\n\nI hope the unpacking is going well and that you are finding your way around the street. When we chatted over the fence last week you mentioned that you had left a reading group behind in your old town and missed it, which is exactly why I am writing.",
      "There are eight of us in the Marlowe Road reading group, and we meet on the first Thursday of the month. Whoever's turn it is picks the book and brings a few questions along; the Copper Kettle gives us its back room from half past seven, and we each put two pounds in the tin for the tea and the room. Last month's argument over the ending of Frankenstein nearly ended in a duel, which is about as wild as we get.",
      "You would be very welcome, and I think you would enjoy it. You arrive with years of book-group experience, and — more practically — it is the quickest way I know to get to know people here: half the group moved to this street knowing nobody, and the Thursday meetings were how they found their feet.",
      "Our next meeting is on Thursday 6 June at half past seven, and the book is The Remains of the Day — short enough to finish in a weekend. I can lend you my copy; just say the word and I will drop it through your letterbox. There is no need to commit to anything — come once and see what you think.\n\nYours sincerely,\nAlan Petrie",
    ],
    wordCount: 253,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and the reason for writing",
        analysis:
          "Begins with moving-in small talk, then anchors the invitation in the neighbour's own words — she mentioned missing her old group — so the letter answers her remark rather than recruiting her cold.",
      },
      {
        role: "Bullet 1 — how the club works",
        analysis:
          "Gives the club's rhythms in a sentence each: the rota for choosing books, the room at the Copper Kettle, two pounds in the tin. The Frankenstein duel is the detail that makes the group sound like a place worth being.",
      },
      {
        role: "Bullet 2 — why she would enjoy it",
        analysis:
          "Separates the two reasons — she arrives with experience, and the group is the quickest way to meet the street — and supports the second with the history of the half who 'found their feet' through it.",
      },
      {
        role: "Bullet 3 — the details and the no-pressure close",
        analysis:
          "Names the date, the hour and the book, offers a copy through the letterbox, and ends with permission to come once and see — the lightest possible ask, which is why it works.",
      },
    ],
    vocabulary: [
      {
        term: "found their feet",
        note: "The idiom for becoming settled and confident in a new place — the exact experience the invitation is offering her.",
      },
      {
        term: "nearly ended in a duel",
        note: "Mock-formal exaggeration of a book-group argument; the joke says the group is friendly underneath its passions.",
      },
      {
        term: "over the fence",
        note: "The classic setting of neighbourly conversation — three words of shared context that stand in for a paragraph of introduction.",
      },
      {
        term: "come once and see",
        note: "The trial offer: low commitment, high welcome — the grammar of an easy yes rather than a decision.",
      },
    ],
    grammar: [
      {
        feature: "Free relative for the rota",
        example: "Whoever's turn it is picks the book",
        note: "The free relative explains the rotation without a committee minute — how the club works in seven words.",
      },
      {
        feature: "Past perfect for her old life",
        example: "you had left a reading group behind in your old town",
        note: "The pluperfect sets her former membership in the past, which is precisely the gap the invitation fills.",
      },
      {
        feature: "Semi-modal softeners",
        example: "You would be very welcome … I can lend you my copy",
        note: "Would and can frame every sentence as an offer, never an expectation — the register of respect between near-strangers.",
      },
    ],
    coherence:
      "The letter is built on her own sentence: the group she left behind in paragraph one is the group she is invited to in paragraph four, and every paragraph between explains one thing about it — how it runs, why she would fit, when it next meets. The closing offer of a book through the letterbox converts the whole letter into a single easy action.",
    alternativeExpressions: [
      { insteadOf: "I hope the unpacking is going well", use: "I hope the boxes are finally emptying" },
      { insteadOf: "nearly ended in a duel", use: "got surprisingly heated" },
      { insteadOf: "come once and see what you think", use: "give us one evening and decide afterwards" },
    ],
    commonMistakes: [
      {
        wrong: "Dear Mrs Adeyemi, You should join our book club.",
        right: "…you mentioned that you had left a reading group behind in your old town and missed it…",
        reason: "'Should' recruits; her own remark invites — the second is a letter, the first is a notice.",
      },
      {
        wrong: "The meeting is at 7:30 PM on 06/06 in the cafe.",
        right: "Our next meeting is on Thursday 6 June at half past seven.",
        reason: "Semi-formal letters spell times and dates in words; digits belong on forms.",
      },
      {
        wrong: "We read only serious literature.",
        right: "The books range from classics to recent prize winners, and the arguments are always friendly.",
        reason: "A rulebook sounds like homework; a range and a laugh sound like a Thursday evening.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "turn", partOfSpeech: "noun", meaning: "A person's chance or duty in a repeating order." },
    { word: "room hire", partOfSpeech: "noun", meaning: "The charge for using a room, split between the members." },
    { word: "to find your feet", partOfSpeech: "phrase", meaning: "To become settled and confident in a new situation." },
    { word: "letterbox", partOfSpeech: "noun", meaning: "The slot in a British front door for delivering post." },
    { word: "prize winner", partOfSpeech: "noun", meaning: "A book that has won a literary award." },
    { word: "to lend", partOfSpeech: "verb", meaning: "To give something temporarily, expecting it back." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 7. Apology — a damaged camera (informal, everyday)
// ---------------------------------------------------------------------------

const gt1ApologyBorrowedItem: WritingBankTask = {
  slug: "ielts-wb-gt1-apology-borrowed-item",
  title: "A damaged camera",
  channel: "gt",
  taskType: "task-1",
  family: "apology",
  tier: "practice",
  topic: "everyday",
  register: "informal",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You borrowed your friend's camera to take photographs at a family celebration by the sea, but while you were using it you slipped, and the camera hit the rocks. The screen survived, but the lens is now damaged.\n\nWrite a letter to your friend Dev. In your letter:\n\n• apologise and tell him exactly what happened\n• describe what you have already done about the repair\n• offer to pay for the damage or replace the camera\n\nBegin your letter as follows: Dear Dev,",
  situation:
    "The candidate borrowed a close friend's camera for a family celebration on the quayside, dropped it on the harbour wall, and has already collected a repair quote from the shop that sold the strap; the letter owns the accident outright rather than softening it.",
  bullets: [
    "Apologise and tell him exactly what happened",
    "Describe what you have already done about the repair",
    "Offer to pay for the damage or replace the camera",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: the apology and the account, the repair steps taken, and the offer to pay.",
      keywords: ["sorry", "happened", "repair", "cover"],
    },
    {
      key: "apology-opening",
      description: "Opens with the apology and outright ownership of fault before any story is told.",
      keywords: ["sorry", "fault", "news", "knock"],
    },
    {
      key: "honest-account",
      description: "Reconstructs the accident step by step with no sentence that softens the writer's role.",
      keywords: ["harbour", "wave", "lens", "stone"],
    },
    {
      key: "steps-taken",
      description: "Shows action already taken: the shop, the quote, and the verdict on the camera's body.",
      keywords: ["shop", "quoted", "barrel", "shutter"],
    },
    {
      key: "make-it-right",
      description: "Offers to cover the repair in full, extends to a replacement if needed, and renews the apology in person.",
      keywords: ["cover", "replacement", "round", "friday"],
    },
    {
      key: "informal-register",
      description: "Keeps the warm informal register — contractions, first names — without becoming breezy about the damage.",
      keywords: ["i'm", "i've", "dear", "me"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Dev is a close friend who is owed a straight account: 'Dear Dev', contractions, and the apology before the story.",
        "Informal must not slide into breezy: the damage is real, so the register is warm and the facts are exact.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 reconstructs the accident in steps — two hands full, the wave, the camera down first — and lists the damage precisely.",
        "Bullet 2 shows action already taken: the King Street shop, the £120 quote, the sound body and low shutter count.",
        "Bullet 3 covers the repair in full, offers a replacement if worse emerges, and sets the apology in person for Friday.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the sorry, the story, the shop, the offer and the pint.",
        "Never write 'I hope you're not too annoyed'; write what you will pay and when.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Dev,\n\nI'm so sorry — I've got some bad news about your camera, and the bad news is entirely my fault. It took a knock while I had it at my aunt's sixtieth on the quay, and I've been sick about it all week.",
      "Here's exactly what happened. On the Saturday, everyone wanted a photo on the harbour wall at sunset, so I climbed up with the camera in one hand and the cake box in the other. A wave hit the rocks below, the spray startled me, and the camera went down first — onto stone, from about waist height. The screen survived, but the lens now grinds when it opens and won't close at all unless I coax it.",
      "I've already taken it to the camera shop on King Street — the one you recommended when I asked about a strap. They quoted £120 to replace the lens barrel and refit the focusing motor, and they say the body is otherwise sound and the shutter count is low. The quote's valid for a month, and they could start as soon as you say the word.",
      "Whatever you'd rather do, I'll cover it — the repair in full, or a second-hand replacement if the shop finds anything else wrong when they open it up. And I still owe you a proper apology in person, so the first round on Friday is on me.\n\nSorry again,\nRuby",
    ],
    wordCount: 234,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and the apology",
        analysis:
          "Leads with 'I'm so sorry' and owns the fault in the second sentence — 'entirely my fault' — before any story is told; the order is the apology's credibility.",
      },
      {
        role: "Bullet 1 — exactly what happened",
        analysis:
          "Reconstructs the accident in steps — two hands full, a wave, the camera down first — and reports the damage with the same precision: the screen survived, the lens grinds. No sentence softens the writer's role.",
      },
      {
        role: "Bullet 2 — what has been done",
        analysis:
          "Shows the writer has already acted: the shop, the quote, the verdict on the body. The shop is 'the one you recommended', a small touch that keeps the friend inside the story rather than outside it.",
      },
      {
        role: "Bullet 3 — the offer",
        analysis:
          "Covers the repair in full, extends to a replacement if the shop finds more wrong, and closes with the Friday pint — the apology renewed in person rather than left on paper.",
      },
    ],
    vocabulary: [
      {
        term: "took a knock",
        note: "The honest euphemism: it admits impact without dramatising it, which keeps the account believable.",
      },
      {
        term: "went down first",
        note: "The laconic account of the camera hitting stone; the flat phrase lands harder than any adjective would.",
      },
      {
        term: "otherwise sound",
        note: "The surveyor's phrase — damaged in one part, healthy in the rest — and it makes the £120 quote seem fair.",
      },
      {
        term: "coax",
        note: "To persuade a machine gently; the verb of someone who has learned to stop forcing the damage worse.",
      },
    ],
    grammar: [
      {
        feature: "Present perfect spanning accident and letter",
        example: "I've been sick about it all week … I've already taken it to the camera shop",
        note: "The perfect tense shows the response began before the apology was written — worry and action, not just words.",
      },
      {
        feature: "Won't with an unless concession",
        example: "won't close at all unless I coax it",
        note: "The stubborn present of the fault with the writer's careful workaround attached — damage and caution in one clause.",
      },
      {
        feature: "Whatever + free relative",
        example: "Whatever you'd rather do, I'll cover it",
        note: "The free relative hands the choice to the friend — the grammar of making amends, not of buying forgiveness.",
      },
    ],
    coherence:
      "The letter runs apology, account, action, offer — the order that lets each paragraph answer the question the last one raises. The camera that 'took a knock' in paragraph one is the lens that grinds in paragraph two, the quote in paragraph three and the repair to be covered in paragraph four; and the Friday pint of the close renews, in person, the 'sorry' the letter opened with.",
    alternativeExpressions: [
      { insteadOf: "I've been sick about it all week", use: "it's been on my mind all week" },
      { insteadOf: "the camera went down first", use: "the camera hit the stone before I could catch it" },
      { insteadOf: "the first round on Friday is on me", use: "let me get the drinks on Friday" },
    ],
    commonMistakes: [
      {
        wrong: "I'm really sorry but the camera just broke by itself.",
        right: "A wave hit the rocks, the spray startled me, and the camera went down first.",
        reason: "A 'but' after sorry cancels it; an exact account with the writer's own hands in it is the apology.",
      },
      {
        wrong: "I'll pay you back sometime, I promise.",
        right: "They quoted £120 to replace the lens barrel, and I'll cover the repair in full.",
        reason: "A named sum and a named payer repair a friendship; an open promise postpones it.",
      },
      {
        wrong: "I hope this doesn't change anything between us.",
        right: "I still owe you a proper apology in person, so the first round on Friday is on me.",
        reason: "Asking the injured party to manage your feelings reverses the apology; offering the evening renews it.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to take a knock", partOfSpeech: "phrase", meaning: "To receive a blow or a setback." },
    { word: "to coax", partOfSpeech: "verb", meaning: "To persuade something to work by gentle handling." },
    { word: "lens barrel", partOfSpeech: "noun", meaning: "The cylindrical tube that holds a camera's lens." },
    { word: "shutter count", partOfSpeech: "noun", meaning: "The number of photographs a camera has taken, a guide to its remaining life." },
    { word: "sound", partOfSpeech: "adjective", meaning: "In good condition, undamaged." },
    { word: "to cover", partOfSpeech: "verb", meaning: "To pay the cost of something." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 8. Apology — the meeting I missed (formal, workplace)
// ---------------------------------------------------------------------------

const gt1ApologyMissedMeeting: WritingBankTask = {
  slug: "ielts-wb-gt1-apology-missed-meeting",
  title: "The meeting I missed",
  channel: "gt",
  taskType: "task-1",
  family: "apology",
  tier: "practice",
  topic: "workplace",
  register: "formal",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You had arranged to hold a quarterly review meeting with an important client, but a mix-up over a rescheduled invitation meant that you missed it, and the client's team had already gathered and waited.\n\nWrite a letter to the client, Ms Halvorsen. In your letter:\n\n• apologise clearly for the missed meeting\n• explain honestly how the mix-up happened\n• propose how you will make up for it\n\nBegin your letter as follows: Dear Ms Halvorsen,",
  situation:
    "The candidate is an account manager who missed a quarterly review after a rescheduled invitation was sent to a retired email address and bounced unseen; the client's team travelled and waited, and the letter must repair the relationship without a word of excuse-making.",
  bullets: [
    "Apologise clearly for the missed meeting",
    "Explain honestly how the mix-up happened",
    "Propose how you will make up for it",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: the apology, the honest account of the mix-up, and the proposals to make up for it.",
      keywords: ["apologies", "happened", "propose", "tuesday"],
    },
    {
      key: "apology-opening",
      description: "Apologises unreservedly in the first sentence and names the client's cost before any explanation.",
      keywords: ["apologies", "attend", "waited", "responsibility"],
    },
    {
      key: "honest-explanation",
      description: "Explains the calendar failure exactly, including what the writer should have done differently.",
      keywords: ["invitation", "email", "bounced", "confirmed"],
    },
    {
      key: "concrete-make-up",
      description: "Proposes two named dates, travel to the client's office, and the papers circulated in advance.",
      keywords: ["leeds", "figures", "beforehand", "date"],
    },
    {
      key: "formal-register",
      description: "Holds the formal register: full forms, Dear Ms Halvorsen with Yours sincerely, and a deadline in the close.",
      keywords: ["dear ms", "sincerely", "keen", "forward"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Ms Halvorsen is a client whose time was wasted: 'Dear Ms Halvorsen', 'Yours sincerely', and the apology before the explanation — always in that order.",
        "Formal register with no contractions; the letter must repair a relationship and re-book a meeting in one page.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 names her cost first: the afternoon, the travel, the room that waited — then owns it 'entirely'.",
        "Bullet 2 gives the failure's chain of events and the corrected habit, without one word of blame aimed elsewhere.",
        "Bullet 3 proposes two named dates, travel to her office, and the papers three days early — convenience flows her way.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the apology, the cause, the two remedies, the record and the deadline.",
        "Every promise needs a date attached; an apology without a calendar is just sentiment.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Ms Halvorsen,\n\nPlease accept my sincere apologies for failing to attend Thursday's quarterly review. Your finance team gave up an afternoon, travelled to our offices, and waited in a room I should have been standing in; the responsibility for that is entirely mine, and I am sorry for the time it cost you.",
      "Let me explain how it happened, without hiding behind the detail. We moved the meeting from Tuesday to Thursday at your office's request; the new invitation was sent to an email address of mine that was retired during March's switch of systems, and it bounced without either of us noticing. I should have confirmed the new time in writing myself. I learned of the meeting only when your assistant rang our reception at half past three.",
      "May I propose two ways of making this right. First, I will come to you: I am free next Tuesday the 14th or Thursday the 16th, and I will travel to your Leeds office at whatever hour suits your team, for as long as the agenda needs. Second, I will send the quarterly figures and the draft plan three working days beforehand, so that the meeting can be spent on decisions rather than on catching up.",
      "You have been a patient and straightforward partner for three years, and I am keen not to have one administrative failure speak louder than that record. Thank you for your understanding; I look forward to confirming a new date this week.\n\nYours sincerely,\nJames Okoye",
    ],
    wordCount: 251,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and the apology",
        analysis:
          "Apologises in the first sentence, then names the client's cost — an afternoon, a journey, a roomful of people — before any explanation is offered; the loss is the letter's first subject, not the writer's embarrassment.",
      },
      {
        role: "Bullet 2 — how the mix-up happened",
        analysis:
          "Gives the mechanism of the failure and what the writer should have done differently, in that order; 'without hiding behind the detail' announces the standard the paragraph then meets.",
      },
      {
        role: "Bullet 3 — making it right",
        analysis:
          "Two numbered proposals: travel to the client on either of two named dates, and the figures circulated three days early so the meeting decides rather than catches up. The flexibility runs one way — towards the client.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "Invokes the three-year record without leaning on it, and commits to confirming a date this week — the apology ends with a deadline, like a professional promise.",
      },
    ],
    vocabulary: [
      {
        term: "without hiding behind the detail",
        note: "Announces honesty before delivering it; the phrase that keeps an explanation from becoming an excuse.",
      },
      {
        term: "an email address … that was retired",
        note: "The office word for a decommissioned address; one word makes the failure systemic rather than sloppy.",
      },
      {
        term: "spent on decisions rather than on catching up",
        note: "The meeting described by its output — the language of someone who runs meetings rather than misses them.",
      },
      {
        term: "speak louder than that record",
        note: "The idiom of evidence: one failure competing with three years — and, the letter intends, losing.",
      },
    ],
    grammar: [
      {
        feature: "Should have for self-audit",
        example: "I should have confirmed the new time in writing myself",
        note: "The perfect modal is the grammar of responsibility: it names the correct action that did not happen.",
      },
      {
        feature: "Parallel First/Second proposals",
        example: "First, I will come to you … Second, I will send the quarterly figures",
        note: "The enumeration turns apology into plan, and the parallel wills make both parts commitments.",
      },
      {
        feature: "Wh-ever softeners",
        example: "at whatever hour suits your team",
        note: "The free relative gives the client every choice in the diary — deference built into the syntax.",
      },
    ],
    coherence:
      "The letter moves apology, cause, remedy, assurance, and each stage defuses the last: the apology names the client's cost, the cause refuses to excuse it, the remedy repays it in the client's currency — her time, her office, her agenda — and the assurance converts the three-year relationship into the reason to trust the fourth paragraph. 'Entirely mine' in the opening is answered by 'I will be there' in the remedy: ownership and action in matching places.",
    alternativeExpressions: [
      { insteadOf: "Please accept my sincere apologies", use: "I owe you and your team an apology" },
      { insteadOf: "without hiding behind the detail", use: "in full, and without excuses" },
      { insteadOf: "spent on decisions rather than on catching up", use: "used for decisions instead of updates" },
    ],
    commonMistakes: [
      {
        wrong: "The meeting failed because of an IT problem on our side.",
        right: "The new invitation was sent to an email address of mine that was retired… and it bounced without either of us noticing.",
        reason: "'An IT problem' is a shield; the exact chain of events is information the client can trust.",
      },
      {
        wrong: "I'm terribly sorry, it was a crazy week.",
        right: "The responsibility for that is entirely mine.",
        reason: "Vague regret plus a busy-week excuse reads as blame-shifting; plain ownership reads as competence.",
      },
      {
        wrong: "Let me know when suits you.",
        right: "I am free next Tuesday the 14th or Thursday the 16th… If neither date works, name any other.",
        reason: "Two named dates show the writer has done the work; an open question hands it back to the client.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "quarterly review", partOfSpeech: "noun", meaning: "A regular meeting held every three months to assess work." },
    { word: "to bounce", partOfSpeech: "verb", meaning: "Of an email, to be returned to the sender undelivered." },
    { word: "beforehand", partOfSpeech: "adverb", meaning: "Before the event in question." },
    { word: "to make something right", partOfSpeech: "phrase", meaning: "To correct a wrong or put right a failure." },
    { word: "administrative failure", partOfSpeech: "noun", meaning: "A breakdown in routine systems rather than in judgement." },
    { word: "to attend", partOfSpeech: "verb", meaning: "To be present at a meeting or event." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 9. Explanation — why my assignment is late (semi-formal, education)
// ---------------------------------------------------------------------------

const gt1ExplanationLateAssignment: WritingBankTask = {
  slug: "ielts-wb-gt1-explanation-late-assignment",
  title: "Why my assignment is late",
  channel: "gt",
  taskType: "task-1",
  family: "explanation",
  tier: "practice",
  topic: "education",
  register: "semi-formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You are studying part-time on an evening course, and your tutor has set an essay for Monday. A computer failure has destroyed most of your finished draft, and you will not be able to submit on time.\n\nWrite a letter to your tutor, Dr Rao. In your letter:\n\n• explain what has gone wrong\n• describe what you have already done to limit the damage\n• request a new deadline and suggest when you can hand the essay in\n\nBegin your letter as follows: Dear Dr Rao,",
  situation:
    "The candidate is a part-time evening student whose laptop hard drive failed nine days before an essay deadline, destroying the finished draft; the letter to a known tutor explains the loss, inventories what survives, and asks for three more days.",
  bullets: [
    "Explain what has gone wrong",
    "Describe what you have already done to limit the damage",
    "Request a new deadline and suggest when you can hand the essay in",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: what went wrong, what has been done to limit the damage, and the new deadline requested.",
      keywords: ["drive", "draft", "recovered", "extension"],
    },
    {
      key: "purpose-opening",
      description: "Names the essay, the deadline and the failure in the opening sentence, before any narrative begins.",
      keywords: ["essay", "monday", "submit", "writing"],
    },
    {
      key: "sized-loss",
      description: "Dates the failure and sizes the loss, so the request is proportionate to the damage.",
      keywords: ["laptop", "failed", "lost", "draft"],
    },
    {
      key: "damage-limitation",
      description: "Inventories the salvage and the new working arrangements, proving the writer is already rebuilding.",
      keywords: ["recovered", "notes", "library", "rebuilt"],
    },
    {
      key: "specific-deadline",
      description: "Requests a specific new deadline with a time and place, and offers the partial option.",
      keywords: ["extension", "thursday", "o'clock", "progress"],
    },
    {
      key: "semi-formal-register",
      description: "Keeps the semi-formal register: Dear Dr Rao with Yours sincerely, courtesy without stiffness.",
      keywords: ["dear dr", "sincerely", "grateful", "afraid"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Dr Rao knows you by name but holds the deadline: 'Dear Dr Rao', 'Yours sincerely', and the bad news in line one.",
        "Semi-formal means courtesy without stiffness — a request from a student who has done the arithmetic.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 dates the failure and sizes it: the drive died nine days ago, 2,100 words went with it.",
        "Bullet 2 inventories the salvage: the early draft, the notes, the plan on paper, the booked library evenings.",
        "Bullet 3 asks for a specific new deadline — Thursday, five o'clock, the department office — and offers the partial option.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the news, the wreck, the salvage, the dated request.",
        "Numbers carry the letter: words lost, words recovered, evenings needed — a tutor extends deadlines for students who have counted.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Dr Rao,\n\nI am writing about the coastal-defences essay due this Monday, which I am afraid I cannot submit on time. My laptop's hard drive failed nine days ago, and the most recent draft — some 2,100 words of it — was lost with everything else on the machine.",
      "I have not been idle since. The repair shop in town recovered the drive on Wednesday; of the essay, only an early version from the first week survived, along with my notes and the reading list. I have rebuilt the argument from that skeleton: the recovered file stands at 1,400 words, my plan and quotations are intact on paper, and I have booked the college library computers for every evening this week.",
      "Might I ask for an extension until Thursday of next week? That would give me the three evenings I calculate I need to bring the rebuilt draft up to the finished piece, and I would hand the essay in at the department office by five o'clock that day at the latest. If a partial submission on Monday would help your marking schedule, I could send the recovered 1,400 words as work in progress — though I would much rather you saw the finished thing.",
      "I am sorry to cause you the extra administration, and grateful for your patience. I will confirm the moment the essay is submitted.\n\nYours sincerely,\nTheo Lambert",
    ],
    wordCount: 230,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and the news",
        analysis:
          "Names the essay, the deadline and the failure in two sentences — the bad news arrives before any narrative, which is the first courtesy of an extension request.",
      },
      {
        role: "Bullet 1 — what has gone wrong",
        analysis:
          "Gives the failure a date and a scale — the drive failed nine days ago, 2,100 words lost — so the tutor can see the request is proportionate to the damage rather than inflated by it.",
      },
      {
        role: "Bullet 2 — limiting the damage",
        analysis:
          "Answers the tutor's silent question — what survives? — with an inventory: the early draft, the notes, the plan, the booked library evenings. 'I have not been idle since' is the paragraph's thesis.",
      },
      {
        role: "Bullet 3 — the request and close",
        analysis:
          "Asks for a specific new deadline, offers a time and a place for submission, and adds the partial-submission option — showing the writer has weighed the tutor's marking schedule, not only their own crisis.",
      },
    ],
    vocabulary: [
      {
        term: "I have not been idle since",
        note: "The compact self-defence: inaction is the unspoken charge against anyone asking for more time, and six words answer it.",
      },
      {
        term: "that skeleton",
        note: "The metaphor makes a partial draft a structure to build on rather than a failure to hide — framing that earns the extension.",
      },
      {
        term: "work in progress",
        note: "The academic term for unfinished but submitted work; it shows the writer knows the department's own norms.",
      },
      {
        term: "the extra administration",
        note: "Apologising for the paperwork rather than the misfortune — the tutor's actual cost, identified and owned.",
      },
    ],
    grammar: [
      {
        feature: "Present perfect for salvage and bookings",
        example: "only an early version … survived … I have booked the college library computers",
        note: "The perfect tense inventories what stands now — the tense of assets, not of losses.",
      },
      {
        feature: "Could for a hypothetical offer",
        example: "I could send the recovered 1,400 words as work in progress",
        note: "Could frames the partial submission as the tutor's option, not the writer's convenience.",
      },
      {
        feature: "Might I ask for",
        example: "Might I ask for an extension until Thursday of next week?",
        note: "The tentative semi-modal matches the relationship: a request to a known superior, polite without stiffness.",
      },
    ],
    coherence:
      "The letter is sequenced as loss, salvage, request: each paragraph answers the question the previous one provokes — the failed drive of paragraph one provokes 'what survived?' in paragraph two, which provokes 'how long do you need?' in paragraph three. Numbers anchor every stage: 2,100 words lost, 1,400 recovered, three evenings needed, five o'clock on the day — the arithmetic of a student who has done the sums before asking.",
    alternativeExpressions: [
      { insteadOf: "I am afraid I cannot submit on time", use: "I will not be able to meet Monday's deadline" },
      { insteadOf: "I have not been idle since", use: "I have been working on it every evening since" },
      { insteadOf: "though I would much rather you saw the finished thing", use: "but the complete essay would serve you better" },
    ],
    commonMistakes: [
      {
        wrong: "My computer broke so the essay will be late, sorry.",
        right: "My laptop's hard drive failed nine days ago, and the most recent draft — some 2,100 words of it — was lost.",
        reason: "A bare 'sorry' asks for sympathy; dates and word counts ask for an extension — and are far more likely to get one.",
      },
      {
        wrong: "This is not my fault at all; computers always fail at the worst time.",
        right: "I am sorry to cause you the extra administration.",
        reason: "Claiming misfortune without evidence reads as excuse; owning the inconvenience reads as maturity.",
      },
      {
        wrong: "Can I have as long as I need?",
        right: "Might I ask for an extension until Thursday of next week?",
        reason: "An open-ended request transfers the planning to the tutor; a dated one shows the work is already scheduled.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "hard drive", partOfSpeech: "noun", meaning: "The disk inside a computer where files are stored." },
    { word: "draft", partOfSpeech: "noun", meaning: "An early version of a piece of writing." },
    { word: "extension", partOfSpeech: "noun", meaning: "Extra time allowed before a deadline." },
    { word: "reading list", partOfSpeech: "noun", meaning: "The set of texts set for a course or essay." },
    { word: "work in progress", partOfSpeech: "phrase", meaning: "Unfinished work submitted to show its stage and direction." },
    { word: "to rebuild", partOfSpeech: "verb", meaning: "To construct again from what remains." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 10. Explanation — explaining an absence (formal, workplace)
// ---------------------------------------------------------------------------

const gt1ExplanationAbsence: WritingBankTask = {
  slug: "ielts-wb-gt1-explanation-absence",
  title: "Explaining an absence",
  channel: "gt",
  taskType: "task-1",
  family: "explanation",
  tier: "practice",
  topic: "workplace",
  register: "formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You were suddenly absent from work for three days last week because of a family emergency, and you were unable to give your employer proper notice at the time.\n\nWrite a letter to your employer, Mr Ellison. In your letter:\n\n• explain why you were absent\n• apologise for the disruption the absence caused\n• set out how you will make up the missed work\n\nBegin your letter as follows: Dear Mr Ellison,",
  situation:
    "The candidate's father was admitted to hospital in Carlisle after a fall, and three working days vanished in an overnight drive and a waiting room; the letter to the employer explains the absence, apologises for patchy notice, and prices the catch-up work.",
  bullets: [
    "Explain why you were absent",
    "Apologise for the disruption the absence caused",
    "Set out how you will make up the missed work",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: the cause of the absence, the apology for the notice, and the catch-up plan.",
      keywords: ["father", "hospital", "sorry", "friday"],
    },
    {
      key: "purpose-opening",
      description: "States the absence and its dates in the first sentence, then narrates the cause in order.",
      keywords: ["writing", "explain", "absence", "tuesday"],
    },
    {
      key: "honest-cause",
      description: "Explains the emergency as a chain of dated events rather than a claim of misfortune.",
      keywords: ["carlisle", "fall", "surgery", "drove"],
    },
    {
      key: "notice-apology",
      description: "Apologises specifically for the failed notice and names the procedure that replaces it.",
      keywords: ["voicemail", "emailed", "channels", "duty"],
    },
    {
      key: "priced-catch-up",
      description: "Sets out the catch-up item by item, with cover already arranged and an offer concerning leave.",
      keywords: ["report", "patrice", "checklist", "leave"],
    },
    {
      key: "formal-register",
      description: "Holds the formal register: full forms, Dear Mr Ellison with Yours sincerely, and a resolved close.",
      keywords: ["dear mr", "sincerely", "thank", "attention"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Mr Ellison needs the facts and the plan, in that order: 'Dear Mr Ellison', 'Yours sincerely', full forms throughout.",
        "Formal register; the emergency excuses the absence but never the notice — apologise for the notice.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 narrates the cause in order: the fall, the drive north, the surgery, the Thursday-evening stability.",
        "Bullet 2 apologises for the voicemail that never arrived and names the two-channel habit that replaces it.",
        "Bullet 3 prices the catch-up: the four-fifths report finished late this week, Patrice covering Harlow, one day as annual leave.",
      ],
    },
    {
      heading: "Step 3 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs: the cause, the notice, the plan, the closure.",
        "End with the domestic situation resolved as neatly as the professional one — employers read last lines closely.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mr Ellison,\n\nI am writing to explain my absence from Tuesday to Thursday last week. My father, who lives alone in Carlisle, was taken to hospital in the early hours of Tuesday morning after a fall at home. My sister and I drove north before dawn, and I stayed until he was out of surgery and stable on the Thursday evening.",
      "I am sorry for the state of my notice during those days. I left a voicemail with the duty desk at six on Tuesday morning, but I understand it never reached you; I should have emailed you directly from the hospital, and I will make sure any future message reaches you by two channels.",
      "As for the work: the quarterly stock report is due this Friday, and it is about four-fifths finished — the figures are checked, and what remains is the summary and the charts, which I will complete by staying late tomorrow and Wednesday. The Harlow depot visit scheduled for this Thursday has already been covered: I emailed Patrice the checklist on Sunday and she has confirmed she can go in my place. If it helps, I am content for one of the three days to count as annual leave.",
      "My father comes home tomorrow, and my sister has taken over his care for the coming weeks, so my full attention is back at work. Thank you for your patience with the confusion last week.\n\nYours sincerely,\nNadia Haddad",
    ],
    wordCount: 242,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and the cause",
        analysis:
          "States the absence and its dates first, then the cause in narrative order — the fall, the drive north, the surgery — so the employer reads a chain of events rather than a string of claims.",
      },
      {
        role: "Bullet 2 — the apology for notice",
        analysis:
          "Apologises for the specifically professional failure — the voicemail that never arrived — and names the corrected procedure: two channels, next time. The apology is for the disruption, not for the absence itself, which was unavoidable.",
      },
      {
        role: "Bullet 3 — the catch-up plan",
        analysis:
          "Takes the missed work item by item: the stock report four-fifths done and scheduled, the depot visit already covered with the checklist sent, and the offer to convert a day into annual leave — the costs of the absence priced, not waved at.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "Reports the father's discharge and the sister's takeover — the domestic situation closed as neatly as the professional one — and thanks the employer for patience already shown.",
      },
    ],
    vocabulary: [
      {
        term: "the state of my notice",
        note: "The administrative noun for how well or badly one informed work; it apologises for procedure rather than for crisis.",
      },
      {
        term: "before dawn",
        note: "The phrase that carries urgency without a single adjective of panic — time of day doing the emotional work.",
      },
      {
        term: "in my place",
        note: "The quiet idiom for workplace cover; delegation completed before it could be asked for.",
      },
      {
        term: "counted as annual leave",
        note: "The offer that prices the absence honestly — one day of the three bought back from the company's ledger.",
      },
    ],
    grammar: [
      {
        feature: "Past simple narrative chain",
        example: "was taken to hospital … drove north before dawn … stayed until he was out of surgery",
        note: "The events run in simple past, in order — the tense of a report, which is what an employer needs first.",
      },
      {
        feature: "Should have for the procedural lapse",
        example: "I should have emailed you directly from the hospital",
        note: "The perfect modal audits the one action that was in the writer's control, separating it from the emergency that was not.",
      },
      {
        feature: "Present perfect passive for arranged cover",
        example: "The Harlow depot visit scheduled for this Thursday has already been covered",
        note: "The present perfect passive shows the cover as a done fact, not a request awaiting approval.",
      },
    ],
    coherence:
      "The letter moves cause, apology, plan, closure, and its tense pattern moves with it: past narrative for the emergency, present perfect for the arrangements already made, future for the catch-up work. Each paragraph ends by pre-answering the employer's next question — the father's stability closes the cause, the two-channel promise closes the apology, the annual-leave offer closes the plan — so no thread is left for the reader to pull.",
    alternativeExpressions: [
      { insteadOf: "I am writing to explain my absence", use: "I want to account for my three days away last week" },
      { insteadOf: "the state of my notice", use: "how poorly I kept you informed" },
      { insteadOf: "my full attention is back at work", use: "you have my whole attention again from today" },
    ],
    commonMistakes: [
      {
        wrong: "I had a family emergency; these things happen.",
        right: "My father, who lives alone in Carlisle, was taken to hospital in the early hours of Tuesday morning after a fall.",
        reason: "'These things happen' dismisses the disruption; a dated, named account respects the reader's need to know.",
      },
      {
        wrong: "Someone will have to cover the Harlow visit.",
        right: "I emailed Patrice the checklist on Sunday and she has confirmed she can go in my place.",
        reason: "Presenting cover as arranged shows management of the situation; presenting it as a problem hands it upward.",
      },
      {
        wrong: "I was really stressed, so I forgot to call properly.",
        right: "I should have emailed you directly from the hospital, and I will make sure any future message reaches you by two channels.",
        reason: "Stress explains a lapse; the corrected procedure is what stops it recurring — employers forgive the first and value the second.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "duty desk", partOfSpeech: "noun", meaning: "The rota point where messages are taken outside office hours." },
    { word: "voicemail", partOfSpeech: "noun", meaning: "A recorded telephone message left for someone." },
    { word: "annual leave", partOfSpeech: "noun", meaning: "Booked holiday days owed to an employee." },
    { word: "surgery", partOfSpeech: "noun", meaning: "A medical operation." },
    { word: "to take over", partOfSpeech: "phrasal verb", meaning: "To assume control of a task or role." },
    { word: "checklist", partOfSpeech: "noun", meaning: "A list of steps to be worked through, e.g. on a site visit." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// The batch
// ---------------------------------------------------------------------------

export const gt1CPracticeTasks: WritingBankTask[] = [
  gt1ComplaintDelivery, // complaint, formal, everyday, difficulty 3
  gt1ComplaintNeighbourNoise, // complaint, semi-formal, society, difficulty 2
  gt1RequestLibrary, // request, formal, culture, difficulty 3
  gt1RequestWorkTraining, // request, formal, workplace, difficulty 4
  gt1InvitationVisit, // invitation, informal, everyday, difficulty 2
  gt1InvitationClub, // invitation, semi-formal, society, difficulty 3
  gt1ApologyBorrowedItem, // apology, informal, everyday, difficulty 2
  gt1ApologyMissedMeeting, // apology, formal, workplace, difficulty 4
  gt1ExplanationLateAssignment, // explanation, semi-formal, education, difficulty 3
  gt1ExplanationAbsence, // explanation, formal, workplace, difficulty 3
];
