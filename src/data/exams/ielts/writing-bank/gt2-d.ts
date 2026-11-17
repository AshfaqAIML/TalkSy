/**
 * General Training Task 2 practice batch D (PROMPT 54 question-bank
 * expansion).
 *
 * Eight further everyday essays for the GT Task 2 studio, all practice
 * tier — a complete but leaner teaching payload (compact analysis, no
 * level samples) written to the same originality and honesty rules as
 * the flagship bank:
 *
 *   1. Problem and solution — litter in public parks     (environment, d3)
 *   2. Problem and solution — parking in the town centre (society,    d3)
 *   3. Problem and solution — noise in daily life        (health,     d3)
 *   4. Cause and effect     — why we eat junk food       (health,     d3)
 *   5. Cause and effect     — the longer journey to work (workplace,  d4)
 *   6. Two-part question    — mobile phones everywhere   (technology, d3)
 *   7. Two-part question    — fast fashion               (culture,    d4)
 *   8. Direct questions     — why holidays matter        (everyday,   d3)
 *
 * Every model band label below is an educational estimate against the
 * public descriptors, never an official IELTS score; all tasks are
 * original TalkSy practice material written in the style of the test.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

export const gt2DPracticeTasks: WritingBankTask[] = [
  // -------------------------------------------------------------------------
  // 1. Problem and solution — litter in public parks (environment, d3)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-problem-solution-litter-parks",
    title: "Litter in public parks",
    channel: "gt",
    taskType: "task-2",
    family: "problem-solution",
    tier: "practice",
    topic: "environment",
    difficulty: 3,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "Parks give many towns and cities their only large piece of green space, yet the rubbish left on the grass, in the flowerbeds and around the play areas seems to grow from year to year. Why do you think litter in public parks is increasing, and what can be done about it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
    requirements: [
      {
        key: "both-parts",
        description: "Answers both parts in similar depth — why litter in parks is increasing, and what can be done about it.",
        keywords: ["because", "reason", "cause", "solution", "tackle", "address", "solve"],
      },
      {
        key: "causes-explained",
        description: "Develops at least two pictureable causes — meals eaten outdoors, everything arriving wrapped, trimmed maintenance budgets, weaker ownership of shared ground.",
        keywords: ["picnic", "takeaway", "wrapping", "packaging", "bins", "budget", "cared for", "council"],
      },
      {
        key: "solutions-workable",
        description: "Proposes measures an actual town could apply — enough well-placed bins, emptied to match busy weekends; deposits returned at the kiosk; friends-of-the-park groups; school lessons held in the park.",
        keywords: ["bins", "empty", "deposit", "volunteer", "school", "friends", "council", "kiosk"],
      },
      {
        key: "everyday-evidence",
        description: "Grounds causes and fixes in everyday scenes — the bank-holiday picnic, the office lunch on a bench, the tidy-up morning with donated drinks.",
        keywords: ["for example", "for instance", "weekend", "picnic", "bench", "family", "such as"],
      },
      {
        key: "fresh-conclusion",
        description: "Closes by matching each remedy to the cause it answers, in fresh words and without new arguments.",
        keywords: ["in conclusion", "in short", "to sum up", "overall", "to conclude"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "The question asks WHY litter grows before it asks what to do; an essay that jumps straight to solutions answers only half the task.",
          "Causes must be everyday ones a reader can picture — meals outdoors, wrappers, bin budgets — not vague references to modern life.",
          "The setting is public parks; street litter, beaches and ocean plastic belong to other questions.",
        ],
      },
      {
        heading: "Step 2 — Causes worth naming (3 minutes)",
        notes: [
          "Habits: parks have become the dining room for takeaway lunches and weekend picnics.",
          "Packaging: nearly every snack arrives wrapped, so one pleasant afternoon leaves a small drift behind.",
          "Upkeep: when budgets are trimmed, bins overflow and grass is cut less often — a neglected park invites neglect.",
          "Ownership: people guard their own front garden but rarely a shared field.",
        ],
      },
      {
        heading: "Step 3 — Remedies and paragraph map (3 minutes)",
        notes: [
          "Council side: bins placed where people actually sit, emptied to match busy weekends, and deposits on kiosk cups and bottles.",
          "Community side: friends-of-the-park groups with a modest budget, a tidy-up morning each season, school nature lessons on the grass.",
          "Map: introduction (scene and stance) → causes → council fixes → community fixes → short conclusion pairing each fix with its cause.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "A single sunny bank holiday can leave a well-loved park looking battered: paper cups by the duck pond, wrappers pressed flat into the lawns, a carrier bag snagged on the railings. In many towns this mess seems to grow year by year, and I would argue that the reasons are closer to home than they first appear. We now eat much more of our food outdoors, and the parks themselves are cared for on ever tighter budgets. Name those two pressures honestly, and the remedies follow almost by themselves.",
        "The first cause is a change in the way we eat. Families that once sat down to Sunday lunch at home now spread a picnic blanket under the oaks, and office workers carry takeaway boxes to the nearest bench. Almost everything in those meals arrives wrapped — trays, films, cartons, spoons in sleeves — so an afternoon of fresh air naturally produces a small drift of paper and plastic. A generation ago the same visitors carried sandwiches from home in a box they took back with them; convenience has quietly moved the rubbish outdoors.",
        "The second cause lies with the parks themselves. When maintenance budgets are trimmed, bins are among the first things to overflow, and a bin that is already full quietly gives the next visitor permission to drop rubbish beside it. Grass cut less often and beds left half-weeded send a subtler message: that nobody is really in charge here. People are careful with their own front gardens precisely because those gardens visibly belong to someone. A shared green can inspire the same care, but only when it looks loved.",
        "The remedies, happily, are within a town's reach. Bins need to be numerous enough, large enough and, above all, placed where people actually sit — then emptied to match busy weekends rather than quiet Tuesdays. Kiosks could return small deposits on their own cups and bottles, which turns every visitor into an unpaid collector. Because care follows belonging, councils should hand friends-of-the-park groups a modest budget and a free hand: a tidy-up morning each season, a school nature lesson held on the grass instead of around a worksheet. A park that residents help to run is a park they hesitate to spoil.",
        "In short, the litter in our parks is not a sign of suddenly bad character but of changed eating habits meeting reduced upkeep. Provide sensibly for the first, invite people into the second, and the walk home through the park becomes a pleasure again.",
      ],
      wordCount: 414,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — scene and thesis",
          analysis:
            "Opens with one vivid bank-holiday picture rather than a 'nowadays' generalisation, then names the two causes the essay will defend — outdoor eating and squeezed upkeep — so the whole plan is visible by the fourth sentence.",
        },
        {
          role: "Body 1 — the changed way we eat",
          analysis:
            "Explains the first cause through contrast: picnic blankets and takeaway boxes replace the sandwich box that went home again, so the closing line 'convenience has quietly moved the rubbish outdoors' turns habit into argument.",
        },
        {
          role: "Body 2 — upkeep and ownership",
          analysis:
            "Shifts the cause from visitors to the park itself: an overflowing bin 'gives the next visitor permission', and the front-garden comparison converts the abstract idea of ownership into something every reader has felt.",
        },
        {
          role: "Body 3 — remedies matched to causes",
          analysis:
            "Each fix answers a named cause — bins for the drift of wrappers, kiosk deposits for disposable cups, friends groups and school lessons for belonging — so the paragraph argues with policy rather than wishes.",
        },
        {
          role: "Conclusion — cause and cure in one breath",
          analysis:
            "Compresses the argument into a single sentence pair ('changed eating habits meeting reduced upkeep') and closes on a small, concrete reward — the pleasant walk home — rather than a grand slogan.",
        },
      ],
      vocabulary: [
        { term: "closer to home", note: "Signals that the causes are familiar and domestic rather than abstract — an idiomatic way of refusing vague blame." },
        { term: "a small drift of paper and plastic", note: "'Drift' borrows the language of snow: the litter arrives gradually and settles where the wind leaves it." },
        { term: "gives the next visitor permission", note: "The paragraph's key mechanism: one full bin legitimises the next dropped bag." },
        { term: "within a town's reach", note: "Judges the solutions by scale — nothing here requires a national law, which keeps the essay honest." },
        { term: "a free hand", note: "Everyday idiom for genuine freedom to decide; councils fund the friends groups but do not direct them." },
        { term: "hesitate to spoil", note: "A psychological verb ending: ownership works through reluctance, not rules." },
      ],
      grammar: [
        {
          feature: "Past simple for generational contrast",
          example: "A generation ago the same visitors carried sandwiches from home in a box they took back with them",
          note: "Setting then against now inside one sentence gives the cause its historical depth without a second paragraph.",
        },
        {
          feature: "'Only when' restrictive conditional",
          example: "A shared green can inspire the same care, but only when it looks loved",
          note: "The restrictive clause converts a soft hope into a specified condition — the grammar of policy detail.",
        },
        {
          feature: "'Need to be' + participles in a list",
          example: "Bins need to be numerous enough, large enough and … placed where people actually sit",
          note: "One passive structure carries three requirements, and the third breaks the rhythm with a clause for emphasis.",
        },
        {
          feature: "'Because' clause fronted for argument",
          example: "Because care follows belonging, councils should hand friends-of-the-park groups a modest budget",
          note: "Opening with the cause makes the recommendation read as a conclusion rather than an opinion.",
        },
      ],
      coherence:
        "The essay answers its two-part question in the order asked — causes first, remedies second — and then pairs them: bins and deposits answer the wrappers of body one, friends groups and school lessons answer the ownership gap of body two. The introduction's two named pressures are the map the middle paragraphs follow, and the conclusion folds them into a single phrase ('changed eating habits meeting reduced upkeep') so the essay closes the loop its opening scene began.",
      alternativeExpressions: [
        { insteadOf: "cared for on ever tighter budgets", use: "maintained with less money each year" },
        { insteadOf: "closer to home", use: "familiar and everyday" },
        { insteadOf: "a small drift of paper and plastic", use: "a scattering of wrappers and cups" },
        { insteadOf: "gives the next visitor permission", use: "invites the next person to do the same" },
        { insteadOf: "a free hand", use: "real freedom to decide" },
        { insteadOf: "looks loved", use: "appears cared for" },
      ],
      commonMistakes: [
        {
          wrong: "Nowadays, with the development of society, litter is a serious problem in the whole world.",
          right: "Litter grows in parks because we eat outdoors far more than we used to, and the bins that served the old habits are no longer enough.",
          reason: "Grand 'development of society' openings explain nothing the question asked for; causes must be ones the reader can picture.",
        },
        {
          wrong: "The government should solve this problem immediately.",
          right: "Councils should place larger bins where people actually sit and empty them after busy weekends.",
          reason: "'Solve this problem' has no content; a solution must name an actor, an action and a place.",
        },
        {
          wrong: "People are disgusting and they don't care about nature.",
          right: "People take less care of spaces that already look neglected.",
          reason: "Insulting the litterer breaks register and misses the essay's own point — behaviour follows the state of the park.",
        },
        {
          wrong: "Litter is bad. Bins are good. Parks are nice. So we must all work together.",
          right: "Because full bins invite dumping, councils should empty them more often; because care follows belonging, residents should be invited to help run the park.",
          reason: "Four unlinked short sentences read as notes; linking each cause to its fix shows the examiner real argument.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "litter", partOfSpeech: "noun", meaning: "Rubbish left lying in public places rather than in a bin." },
      { word: "upkeep", partOfSpeech: "noun", meaning: "The routine care and maintenance a place needs." },
      { word: "to overflow", partOfSpeech: "verb", meaning: "To be so full that the contents spill over the top." },
      { word: "kiosk", partOfSpeech: "noun", meaning: "A small stall in a park selling drinks, snacks and ice creams." },
      { word: "deposit", partOfSpeech: "noun", meaning: "A small sum returned when a reusable cup or bottle is brought back." },
      { word: "tidy-up", partOfSpeech: "noun", meaning: "A short, organised session of cleaning a place together." },
      { word: "to spoil", partOfSpeech: "verb", meaning: "To damage or ruin the state or appearance of something." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 2. Problem and solution — parking in the town centre (society, d3)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-problem-solution-parking",
    title: "Parking in the town centre",
    channel: "gt",
    taskType: "task-2",
    family: "problem-solution",
    tier: "practice",
    topic: "society",
    difficulty: 3,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "In many towns and cities, parking near the centre has become so difficult that drivers leave their cars in residential streets, up on pavements and even across cycle lanes. What problems does this cause, and what could be done to solve them?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
    requirements: [
      {
        key: "both-parts",
        description: "Gives the problems and the solutions recognisably equal weight, in that order, rather than one sentence of complaint followed by a wish list.",
        keywords: ["problem", "cause", "difficulty", "solution", "solve", "measure", "tackle"],
      },
      {
        key: "problems-concrete",
        description: "Names concrete problems a reader can picture — pavement parking forcing pushchairs into the road, traffic circling for spaces, residents parked furthest from their own doors, trade drifting away.",
        keywords: ["pavement", "wheelchair", "pushchair", "traffic", "circle", "resident", "shop", "trade"],
      },
      {
        key: "solutions-workable",
        description: "Proposes workable measures and names who applies them — park-and-ride, kerb charges that rise with demand, residents' permits, better buses, cycle racks, enforcement.",
        keywords: ["park-and-ride", "permit", "charge", "bus", "cycle", "enforce", "car park"],
      },
      {
        key: "everyday-evidence",
        description: "Grounds the argument in everyday scenes — the Saturday morning search, the school run, commuter bays, the out-of-town store with free parking.",
        keywords: ["saturday", "school run", "commuter", "delivery", "for example", "for instance", "such as"],
      },
      {
        key: "fresh-conclusion",
        description: "Closes by matching each remedy to the harm it answers, in fresh words and without new arguments.",
        keywords: ["in conclusion", "overall", "in short", "to sum up", "to conclude"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "The task wants problems first and solutions second; an essay that only complains, or only dreams, answers half of it.",
          "The setting is the town centre and its surrounding streets — not motorways, airports or rural driving.",
          "The question takes the cars as given; arguing that everyone should give up driving answers a different prompt.",
        ],
      },
      {
        heading: "Step 2 — Problems at street level (3 minutes)",
        notes: [
          "Pedestrians: a car up on the pavement pushes wheelchairs, pushchairs and schoolchildren into the traffic.",
          "Drivers and air: much of the slow-moving traffic is people circling for a space, which wastes time and fouls the air.",
          "Residents: commuter cars fill the nearest streets by mid-morning, so the people who live there park furthest from their own doors.",
          "Trade: some shoppers abandon the trip and drive instead to an out-of-town store with free parking.",
        ],
      },
      {
        heading: "Step 3 — Solutions and paragraph map (3 minutes)",
        notes: [
          "Manage the car: edge-of-town park-and-ride, kerb charges that rise with demand so spaces turn over, residents' permits, firm enforcement including pavement parking.",
          "Offer alternatives: a bus frequent enough to rely on, protected cycle lanes and secure racks, booked delivery slots for shops.",
          "Map: introduction (the Saturday ritual and thesis) → the four problems → managing the car better → giving people a real alternative → conclusion pairing remedies with harms.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "Anyone who has driven into a busy town on a Saturday morning knows the ritual: two slow laps of the one-way system, a queue for the multi-storey, and finally a space three streets from the shops — or a defiant park on the double yellows. Parking has become one of the most argued-about questions of town-centre life, and it does damage well beyond frayed tempers. I believe the trouble can be eased by a combination of firmer rules, fairer charges and genuine alternatives to driving.",
        "The most visible victims are pedestrians. A car left up on the pavement forces wheelchair users, parents with pushchairs and schoolchildren into the road, turning a short walk into a small gamble. Drivers suffer in their own way: a large share of a town's slow-moving traffic is simply people circling in search of a free space, which wastes their time and fouls the air for everyone else. The residents of the surrounding streets suffer most of all, because their bays fill with commuter cars by mid-morning and they return from work to park furthest from their own front doors. Even the shops lose, since a portion of customers abandons the trip altogether and drives instead to an out-of-town store.",
        "The first set of answers manages the car rather than banning it. An edge-of-town car park linked to a frequent shuttle — the classic park-and-ride — removes the circling before it starts. Kerb-side charges that rise with demand keep the most convenient spaces turning over quickly, so they serve many short visits instead of one commuter's long day. Residents' permits protect the streets people actually live in, and firm enforcement, including against pavement parking, keeps the whole arrangement credible.",
        "The second set gives people a genuine way of leaving the car at home. A bus that runs every ten minutes to a cheap, safe car park will be used; one that runs twice a morning will not. Protected cycle lanes and secure racks tempt shorter trips out of the car altogether, while shops that offer booked delivery slots need fewer vans stopping in the narrowest streets. None of this forces anybody out of a car; each measure simply makes the alternative less of a gamble.",
        "In short, the parking crisis blocks pushchairs, wastes drivers' mornings, exiles residents from their own streets and quietly starves town-centre shops of customers. Managed kerbs, protected residents and buses worth waiting for would attack each of those harms together — and would do so without a single ban.",
      ],
      wordCount: 413,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — the Saturday ritual",
          analysis:
            "Opens inside a driver's head — laps, queue, double yellows — so the problem needs no proving, then states the thesis as a three-part formula (rules, charges, alternatives) that the two solution paragraphs follow in order.",
        },
        {
          role: "Body 1 — four problems, four witnesses",
          analysis:
            "Arranges the harms by who pays: pedestrians first, then drivers, then residents 'parked furthest from their own front doors', and finally the shops, so each sentence adds a new victim rather than restating the last.",
        },
        {
          role: "Body 2 — managing the car",
          analysis:
            "Every measure carries its mechanism: park-and-ride removes circling 'before it starts', kerb charges make spaces turn over, permits protect 'streets people actually live in'. Enforcement is framed as credibility rather than punishment.",
        },
        {
          role: "Body 3 — real alternatives",
          analysis:
            "Argues by contrast — the ten-minute bus against the twice-a-morning one — and closes by returning the introduction's word 'genuine' to its test: an alternative is a bet the town can make safer.",
        },
        {
          role: "Conclusion — harms and remedies paired",
          analysis:
            "Compresses the four victims into one sentence, answers them with three noun phrases, and ends on the political point that the whole package needs no ban — a fresh close that mirrors the thesis without repeating it.",
        },
      ],
      vocabulary: [
        { term: "a defiant park on the double yellows", note: "'Defiant' captures the parking everyone condemns and everyone has done; 'double yellows' is British street code for no waiting." },
        { term: "a small gamble", note: "The essay's recurring image: walking to school or switching to the bus is framed as a bet the town's measures steadily make safer." },
        { term: "turn over", note: "Phrasal verb for spaces being used and freed rapidly — the exact idea priced kerbs exist to create." },
        { term: "exiles residents", note: "A strong verb that prices the residents' harm without a single statistic." },
        { term: "buses worth waiting for", note: "A compact quality test: policy judged from the passenger's point of view rather than the planner's." },
        { term: "without a single ban", note: "The closing political note — persuasion through design rather than prohibition — which keeps the solution realistic." },
      ],
      grammar: [
        {
          feature: "Elliptical contrast",
          example: "A bus that runs every ten minutes … will be used; one that runs twice a morning will not",
          note: "Dropping the repeated verb ('will not [be used]') makes the comparison land harder and shows control of balance.",
        },
        {
          feature: "'Which' clause reaching back",
          example: "circling in search of a free space, which wastes their time and fouls the air",
          note: "The relative clause turns one behaviour into two costs in a single step, cause to consequence without a connective.",
        },
        {
          feature: "Preposition + gerund after 'including'",
          example: "firm enforcement, including against pavement parking",
          note: "Extends 'enforcement' with a precise example inside the same phrase — compact, formal and exact.",
        },
        {
          feature: "'Because' clause of cause",
          example: "because their bays fill with commuter cars by mid-morning",
          note: "Explains the residents' paradox — living closest, parking furthest — with a time-and-cause chain.",
        },
      ],
      coherence:
        "The essay follows the question's own order — problems, then solutions — and then splits the solutions along the thesis's promise: 'firmer rules, fairer charges' drive the managing-the-car paragraph, 'genuine alternatives' drive the bus-and-bike paragraph, so the reader always knows which part of the thesis is being paid off. Within the problems paragraph the victims change but the grammar of loss ('suffer', 'lose', 'abandons') holds the list together, and the 'gamble' image planted in paragraph one is cashed twice before the close.",
      alternativeExpressions: [
        { insteadOf: "one of the most argued-about questions", use: "a constant source of disagreement" },
        { insteadOf: "a defiant park on the double yellows", use: "leaving the car where parking is banned" },
        { insteadOf: "turn over quickly", use: "are freed and refilled rapidly" },
        { insteadOf: "exiles residents from their own streets", use: "pushes residents' cars far from home" },
        { insteadOf: "buses worth waiting for", use: "services frequent enough to rely on" },
        { insteadOf: "without a single ban", use: "without forbidding anything" },
      ],
      commonMistakes: [
        {
          wrong: "Parking is a big problem in the modern world and the government must pay attention to it.",
          right: "In many towns drivers circle for twenty minutes and then park across the pavement, and the council must decide what to charge and where.",
          reason: "'Modern world' openings name no problem a reader can see; the paragraph must open with harm, not alarm.",
        },
        {
          wrong: "People should use more public transport because it is better for the environment.",
          right: "A shuttle bus every ten minutes from a cheap edge-of-town car park would carry drivers the last mile willingly.",
          reason: "Generic advice names neither the service nor why a driver would switch; measures must be concrete enough to picture.",
        },
        {
          wrong: "The parking situation is very serious and difficult to solve completely.",
          right: "Kerb charges that rise with demand, permits for residents and a reliable park-and-ride would ease most of the pressure.",
          reason: "Declaring a problem 'difficult to solve' is a shrug; the task asks for solutions the writer is prepared to defend.",
        },
        {
          wrong: "Everywhere is full, no spaces, drivers are angry, residents are also angry.",
          right: "Because spaces fill with commuter cars by mid-morning, residents return from work to find their own streets full.",
          reason: "A pile of verbless clauses reads like notes; full sentences with linking words carry an examiner's confidence.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "kerb", partOfSpeech: "noun", meaning: "The stone edge between pavement and road; 'kerb-side charges' price the most convenient spaces." },
      { word: "park-and-ride", partOfSpeech: "noun", meaning: "A cheap car park at the edge of town linked to a frequent shuttle bus into the centre." },
      { word: "residents' permit", partOfSpeech: "noun", meaning: "A badge allowing only the people who live in a street to park in it." },
      { word: "multi-storey", partOfSpeech: "noun", meaning: "A multi-level car park, usually in or near the town centre." },
      { word: "to circle", partOfSpeech: "verb", meaning: "To drive slowly round the same blocks while looking for a space." },
      { word: "commuter", partOfSpeech: "noun", meaning: "Someone who travels regularly between home and work." },
      { word: "double yellow lines", partOfSpeech: "phrase", meaning: "The painted lines marking where parking is not allowed." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 3. Problem and solution — noise in daily life (health, d3)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-problem-solution-noise",
    title: "Noise in daily life",
    channel: "gt",
    taskType: "task-2",
    family: "problem-solution",
    tier: "practice",
    topic: "health",
    difficulty: 3,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "Many people feel that everyday life has become louder than it was a generation ago: busier roads, building work in every other street, deliveries at all hours, and powerful speakers in flats and cars. Why is noise in daily life increasing, what effects does it have on people, and what can be done to reduce it?",
    requirements: [
      {
        key: "all-three-parts",
        description: "Covers all three asks in order — why noise grows, what it does to people, and what could reduce it — with none of them squeezed into a footnote.",
        keywords: ["because", "reason", "effect", "result", "reduce", "remedy", "tackle"],
      },
      {
        key: "causes-named",
        description: "Explains the rise with named causes: houses split into flats with thin walls, round-the-clock delivery traffic, weekend building work, cheap powerful speakers.",
        keywords: ["flat", "delivery", "lorry", "traffic", "building", "speaker", "wall", "engine"],
      },
      {
        key: "effects-serious",
        description: "Treats the effects as health matters — broken sleep, stress kept simmering, concentration eaten away, slow hearing damage — not mere annoyance.",
        keywords: ["sleep", "stress", "concentration", "hearing", "tired", "health", "alert"],
      },
      {
        key: "remedies-practical",
        description: "Offers practical remedies with an actor attached — councils routing lorries and setting delivery windows, insulation required in conversions, enforced quiet hours, early politeness between neighbours.",
        keywords: ["route", "window", "insulation", "quiet hours", "enforce", "council", "mediation"],
      },
      {
        key: "fresh-conclusion",
        description: "Ends by matching remedies to the named harms in fresh words, adding nothing new.",
        keywords: ["in conclusion", "in short", "overall", "to sum up", "to conclude"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "Three questions hide inside this prompt — why louder, what it does to people, what to do — and each needs its own ground.",
          "Keep the scale domestic: roads, building sites, flats and neighbours, not factories or airport runways.",
          "The topic is health, so the effects paragraph should mention sleep and stress before annoyance.",
        ],
      },
      {
        heading: "Step 2 — Why life is louder (3 minutes)",
        notes: [
          "Denser living: family houses split into flats, thin walls, hard floors where carpets once softened footsteps.",
          "Round-the-clock commerce: white vans, food scooters and next-day parcels put engines on the road from dawn past dusk.",
          "Building and bass: renovation everywhere, and a speaker that costs little can fill a whole terrace.",
        ],
      },
      {
        heading: "Step 3 — Effects, remedies and map (3 minutes)",
        notes: [
          "Sleep is the core harm: a four-in-the-morning lorry can restart the whole night, and tired, short-tempered people follow.",
          "Background noise keeps bodies mildly on alert and eats concentration; headphones turned up to cover the street slowly cost hearing.",
          "Remedies: lorry routes and delivery windows, insulation required in conversions, quiet hours enforced, and a note before the party rather than a row after it.",
          "Map: introduction → why louder → what it does to people → what can be done → conclusion pairing remedies with harms.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "Ask people what has changed in their street over the past twenty years and many will answer, before anything else, that it has grown louder. The rumble begins with the first bin lorry of the morning and ends, some nights, with a neighbour's bass line through the bedroom wall. In my view the rise has ordinary and identifiable causes, the damage is more serious than noise is usually given credit for, and a mixture of sensible rules and simple consideration could turn it down.",
        "The causes are not mysterious. Towns are denser than they were: family houses have been split into flats with thin walls and hard floors, so sound that once died in a hallway now travels three storeys. Traffic has changed in kind as well as quantity, because white vans, food-delivery scooters and next-day parcels put engines on the road from dawn until well past dusk. Building work that once stopped at five o'clock now stretches across weekends, and a speaker powerful enough to fill a hall costs less than a decent pair of shoes. None of these sources is exotic; together they have quietly cancelled the hours of quiet people used to rely on.",
        "The effects reach further than irritation. The most serious is broken sleep: a delivery lorry at four in the morning can restart the whole night, and nights that never properly settle leave people tired, short-tempered and eventually unwell. Constant background noise keeps the body mildly on alert, raising stress even when nobody consciously objects, and it eats away at concentration — students in a noisy flat simply learn less. Over the years, sound that must be talked over does slow damage to hearing itself, particularly through headphones turned up to drown the street.",
        "The remedies are mostly unglamorous. Councils can route heavy lorries away from homes and set delivery windows that protect the small hours. Conversions can be required to include proper insulation, as some cities already insist, and quiet hours, where they exist, need enforcing rather than merely being posted on a noticeboard. Between neighbours, the cheapest medicine is early politeness — a note before the party, a word before the drill starts, mediation before a formal complaint. And where the road itself is the culprit, noise barriers, quieter surfacing and thick planting measurably soften what reaches the windows.",
        "In short, the growing hum of daily life comes from denser living, round-the-clock deliveries and endless building, and its costs are paid in sleep, patience and hearing. Lorries routed and windows set, insulation required and quiet hours enforced, plus a little early courtesy between neighbours, would not restore total silence — but they would give most people back their nights.",
      ],
      wordCount: 444,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — the street's own testimony",
          analysis:
            "Uses a small oral-history device — what people themselves say has changed — to establish the trend without statistics, then previews all three answers (causes, seriousness, remedies) in one balanced sentence.",
        },
        {
          role: "Body 1 — the machinery of the rise",
          analysis:
            "Walks through the sources in ascending intimacy — flats, traffic, building, the neighbour's speaker — each with its mechanism, then closes by naming what has actually been lost: 'the hours of quiet people used to rely on'.",
        },
        {
          role: "Body 2 — effects on body and mind",
          analysis:
            "Leads with the worst harm, sleep, and explains its chain — one lorry restarts the night, unsettled nights make people 'tired, short-tempered and eventually unwell' — before stress, concentration and hearing, arguing like a doctor rather than a complainer.",
        },
        {
          role: "Body 3 — unglamorous remedies",
          analysis:
            "Pairs every remedy with its actor — councils, conversions, neighbours — and insists enforcement means more than noticeboards; the neighbourly measures ('a note before the party') keep the register everyday.",
        },
        {
          role: "Conclusion — causes, costs, cures",
          analysis:
            "Compresses the argument into three costs ('sleep, patience and hearing') and a noun-based remedy list, ending on the essay's modest, human promise: giving most people back their nights.",
        },
      ],
      vocabulary: [
        { term: "bass line", note: "The low frequencies that travel through walls; naming them shows the writer knows which noise actually reaches a bedroom." },
        { term: "in kind as well as quantity", note: "A precise discrimination: traffic has not merely grown, it has changed character — vans and scooters instead of commuters." },
        { term: "the small hours", note: "Idiom for the very early morning, the period delivery windows exist to protect." },
        { term: "eats away at", note: "Phrasal verb presenting concentration loss as gradual erosion rather than sudden failure." },
        { term: "unglamorous", note: "Signals honest expectations: the remedies are dull but effective, which is itself part of the argument." },
        { term: "the culprit", note: "A playful legal word for the road as offender; lightens the analysis without breaking the semi-formal register." },
      ],
      grammar: [
        {
          feature: "Present perfect for two-decade change",
          example: "family houses have been split into flats with thin walls",
          note: "Pairs the question's timeframe with the tense built to express it — change accumulated up to now.",
        },
        {
          feature: "'Because' clause attaching cause",
          example: "Traffic has changed in kind as well as quantity, because white vans … put engines on the road",
          note: "The explanation is fastened to its consequence inside one sentence, keeping the paragraph tight.",
        },
        {
          feature: "Modal 'can' for characteristic harm",
          example: "a delivery lorry at four in the morning can restart the whole night",
          note: "Presents the early lorry as a standing risk rather than a one-off — the grammar of recurring nuisance.",
        },
        {
          feature: "'Need' + gerund versus passive",
          example: "quiet hours … need enforcing rather than merely being posted on a noticeboard",
          note: "Two verb forms contrast action with appearance — enforcement versus signage — in a single clause.",
        },
      ],
      coherence:
        "The essay answers its three questions in the order asked — causes, effects, remedies — and each paragraph opens on a label that tells the reader which question is being paid ('The causes are not mysterious', 'The effects reach further than irritation', 'The remedies are mostly unglamorous'). The introduction's promise of 'a mixture of sensible rules and simple consideration' is cashed across the remedies paragraph, where council rules and neighbourly politeness each receive their sentences, and the conclusion's three costs mirror the body's order so the essay closes like a folded letter.",
      alternativeExpressions: [
        { insteadOf: "grown louder", use: "become noisier / turned up the volume" },
        { insteadOf: "in kind as well as quantity", use: "in character, not just in amount" },
        { insteadOf: "the small hours", use: "the very early morning" },
        { insteadOf: "eats away at", use: "gradually weakens" },
        { insteadOf: "the culprit", use: "the real offender" },
        { insteadOf: "give most people back their nights", use: "let people sleep properly again" },
      ],
      commonMistakes: [
        {
          wrong: "Noise pollution is a very important problem in the modern society.",
          right: "Lorries at four in the morning and bass through the bedroom wall have made rest a scarce thing in many streets.",
          reason: "An empty topic sentence proves nothing; the essay must show the noise before it can analyse it.",
        },
        {
          wrong: "The government should make laws about noise.",
          right: "Councils can set delivery windows that keep heavy lorries out of the small hours.",
          reason: "'Make laws' names no law; remedies need an actor, an action and a time, not a call for action.",
        },
        {
          wrong: "Noises affect to people's health and cause many diseases.",
          right: "Night-time noise breaks sleep, and broken sleep raises stress and weariness over months.",
          reason: "'Affect to' is a form error and 'many diseases' is a vague claim; the paragraph's strength is the chain of cause.",
        },
        {
          wrong: "My neighbour is very noisy and I cannot sleep, so the council must punish him.",
          right: "Where neighbours meet, a polite word before the party prevents the complaint after it.",
          reason: "Turning the essay into a personal grievance narrows Task Response; the prompt asks about daily life in general.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "noise pollution", partOfSpeech: "noun", meaning: "Harmful or disturbing sound in the environment, especially from traffic and machinery." },
      { word: "the small hours", partOfSpeech: "phrase", meaning: "The very early morning, roughly one to four o'clock." },
      { word: "insulation", partOfSpeech: "noun", meaning: "Material that stops sound passing through walls and floors." },
      { word: "to route", partOfSpeech: "verb", meaning: "To send traffic along a chosen path — 'lorries routed away from homes'." },
      { word: "quiet hours", partOfSpeech: "phrase", meaning: "Agreed times, usually overnight, when loud activity is not allowed." },
      { word: "mediation", partOfSpeech: "noun", meaning: "Help from a neutral third person in settling a dispute between neighbours." },
      { word: "to enforce", partOfSpeech: "verb", meaning: "To make sure a rule is actually obeyed, not merely announced." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 4. Cause and effect — why we eat junk food (health, d3)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-cause-effect-junk-food",
    title: "Why we eat junk food",
    channel: "gt",
    taskType: "task-2",
    family: "cause-effect",
    tier: "practice",
    topic: "health",
    difficulty: 3,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "In many countries, meals from fast-food chains and takeaways are eaten far more often than they were thirty years ago. Why do so many people eat this kind of food, and what effects does it have on their health and daily lives?",
    requirements: [
      {
        key: "both-halves",
        description: "Develops the reasons and the effects as two clear blocks of similar weight, rather than listing causes and stopping.",
        keywords: ["reason", "why", "because", "effect", "result", "consequence", "lead to"],
      },
      {
        key: "causes-everyday",
        description: "Explains the pull with everyday economics — a value meal against the price of ingredients, minutes against exhausted evenings, taste tuned to please, apps that remember the order.",
        keywords: ["cheap", "quick", "convenient", "busy", "work", "taste", "advert", "app"],
      },
      {
        key: "effects-on-health",
        description: "Traces health effects honestly — quick calories and returning hunger, weight that creeps upward, diabetes and blood pressure, energy that swings.",
        keywords: ["weight", "diabetes", "blood pressure", "sugar", "energy", "calories", "fibre"],
      },
      {
        key: "effects-on-daily-life",
        description: "Follows the habit home — the shared table fading, cooking skills not passing on, the monthly app total arriving as a shock.",
        keywords: ["family", "meal", "table", "cook", "money", "app", "skill"],
      },
      {
        key: "fresh-conclusion",
        description: "Weighs reasons against costs in a fresh-worded close without proposing new policies — the prompt asks why and what follows, not what to do.",
        keywords: ["in conclusion", "on balance", "overall", "in short", "to sum up"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "Cause and effect only: the prompt asks why people eat fast food and what follows — solutions belong to a different question and should stay out.",
          "'This kind of food' means chain and takeaway meals eaten regularly, not an occasional restaurant dinner.",
          "'Health and daily lives' signals two effect groups; plan a paragraph for each.",
        ],
      },
      {
        heading: "Step 2 — The pull (3 minutes)",
        notes: [
          "Money and minutes: a value meal often costs less than the ingredients of a home-cooked supper and is ready immediately.",
          "Exhaustion: late finishes and irregular shifts leave little appetite for chopping vegetables at half past eight.",
          "Taste and marketing: salt, fat and sugar balanced to hold interest; advertising aimed at tired, hungry moments; apps storing the card details.",
        ],
      },
      {
        heading: "Step 3 — The costs and the map (3 minutes)",
        notes: [
          "Body: dense calories eaten fast, hunger returning within hours, weight creeping, energy swinging between sugar peaks and dips.",
          "Home: the family table loses its anchor; children raised on takeaway boxes reach adulthood without cooking skills; the monthly total surprises.",
          "Map: introduction → why we eat it → what it does to the body → what it does to home life → measured conclusion weighing reasons against costs.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "On many high streets, the busiest counter at eight in the evening is the one with the lit menu board. Burgers, fried chicken, pizzas and noodles now feed a large share of the population several times a week, where a generation ago they were an occasional treat. The reasons are practical rather than foolish, and understanding them matters, because the effects — on bodies and on the shape of daily life — are heavier than most of those queues suspect.",
        "The first reason is arithmetic: a value meal usually costs less than the raw ingredients of a home-cooked supper, and it is ready in minutes. For people working long or irregular hours, speed is not laziness but survival; the takeaway closes the gap between a late finish and a reasonable bedtime. The food itself is engineered to please — salt, fat and sugar balanced to stay interesting to the final bite — and it is marketed at the moments of the day when willpower is lowest, by apps that remember both the usual order and the card details. Against a combination of price, convenience and design, home cooking starts most evenings a length behind.",
        "The physical effects arrive quietly and stay. Fast food is dense in calories yet low in the fibre and protein that make a meal satisfying for long, so portions vanish quickly and hunger returns within a couple of hours. Weight creeps upward, and with it the risk of conditions such as type 2 diabetes and high blood pressure, which were once rare before middle age. Sugary drinks and white bread send energy up sharply and down again, taxing concentration as much as the waistline.",
        "Daily life changes shape around the habit, too. The family table, once the fixed point of an evening, gives way to separate boxes eaten in separate rooms; the television replaces the conversation. Children raised on those boxes often reach adulthood without basic cooking skills, so the pattern copies itself into the next household. And although each meal looks cheap, three or four a week are not: many families find that the app's total for a month rivals a properly stocked fridge.",
        "On balance, people turn to fast food for understandable reasons — money, minutes and taste tuned to please — but the habit charges interest. It is paid in slow weight gain and the illnesses that follow it, and in the quiet fading of the shared table and the skills that used to pass across it.",
      ],
      wordCount: 408,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — scene, then a two-way promise",
          analysis:
            "Opens with a picture — the lit menu board at eight — instead of a definition, sets past against present with 'an occasional treat', and previews both halves of the task in one balanced sentence.",
        },
        {
          role: "Body 1 — price, minutes, engineering",
          analysis:
            "Builds the causes as a chain rather than a list — arithmetic first, then exhaustion, then engineering and marketing — and closes with a racing metaphor, 'a length behind', that keeps the register everyday.",
        },
        {
          role: "Body 2 — the body pays slowly",
          analysis:
            "Each effect carries its mechanism: low fibre means fast hunger, creeping weight means rising risk, sugar means swings. The opening pair 'arrive quietly and stay' sets the paragraph's whole argument about gradual harm.",
        },
        {
          role: "Body 3 — the household pays differently",
          analysis:
            "Tracks the habit into the home: the shared table becomes 'separate boxes in separate rooms', skills fail to pass on, and the app's monthly total supplies economic proof without a single statistic.",
        },
        {
          role: "Conclusion — reasons respected, costs named",
          analysis:
            "Answers the question's two halves in one sentence each — 'understandable reasons' for the why, 'charges interest' for the effects — and ties the bodily and domestic costs together in fresh words.",
        },
      ],
      vocabulary: [
        { term: "a value meal", note: "The industry's own word for the bundled burger, fries and drink; using it shows inside knowledge of the topic." },
        { term: "speed is not laziness but survival", note: "The 'not X but Y' correction refuses the easy moral judgement, which becomes the essay's stance in miniature." },
        { term: "engineered to please", note: "Presents taste as design rather than accident — the exact idea the paragraph needs." },
        { term: "weight creeps upward", note: "'Creep' carries the gradualness that makes the harm easy to miss." },
        { term: "taxing concentration as much as the waistline", note: "One verb, two costs: the parallel construction moves the argument from body to mind without a new sentence." },
        { term: "charges interest", note: "The conclusion's financial metaphor completes the economics: cheap now, dear later." },
      ],
      grammar: [
        {
          feature: "Concessive 'where'",
          example: "they were an occasional treat, where a generation ago …",
          note: "Contrasts eras inside one sentence — more compact than a separate past-simple paragraph.",
        },
        {
          feature: "'Not X but Y' correction",
          example: "speed is not laziness but survival",
          note: "Rejects a moral reading and replaces it with an economic one in six words.",
        },
        {
          feature: "'So' result clause",
          example: "so portions vanish quickly and hunger returns within a couple of hours",
          note: "Connects food design to its consequence without a heavy connective.",
        },
        {
          feature: "Elliptical 'although' clause",
          example: "although each meal looks cheap, three or four a week are not",
          note: "The missing adjective — 'not [cheap]' — lands the point and shows punctuation control.",
        },
      ],
      coherence:
        "The essay keeps its two halves in strict balance: one paragraph of causes, two of consequences — body first, household second — matching the question's 'health and daily lives' in order. Inside each paragraph the sentences argue forward (price to minutes to engineering; fibre to weight to illness; table to skills to money), so each idea buys the next, and the financial metaphors — 'a length behind', 'charges interest' — echo the opening paragraph's economics, stitching the whole together without a single mechanical linker.",
      alternativeExpressions: [
        { insteadOf: "the busiest counter", use: "the longest queue" },
        { insteadOf: "speed is not laziness but survival", use: "convenience is a rational choice, not a weak one" },
        { insteadOf: "weight creeps upward", use: "weight rises gradually" },
        { insteadOf: "copies itself into the next household", use: "repeats itself in the next generation" },
        { insteadOf: "charges interest", use: "has a delayed cost" },
        { insteadOf: "rivals a properly stocked fridge", use: "matches a month of home cooking" },
      ],
      commonMistakes: [
        {
          wrong: "Junk food is delicious but it is harmful for health and causes obesity, diabetes and other diseases.",
          right: "Because fast food is dense in calories and light on fibre, hunger returns within hours, and weight gained that way raises the risk of type 2 diabetes.",
          reason: "Listing diseases proves nothing; the paragraph must show the mechanism linking the food to the harm.",
        },
        {
          wrong: "People eat junk food because of globalisation and the development of modern society.",
          right: "A value meal costs less than the ingredients of a home-cooked supper and is ready in minutes.",
          reason: "Abstract forces explain nothing an examiner can picture; causes should be ones the reader has personally felt.",
        },
        {
          wrong: "Governments must solve this problem by taxing sugar and educating children.",
          right: "This question asks why people eat fast food and what follows; remedies, however welcome, answer a different task.",
          reason: "Proposing solutions on a cause-effect prompt spends words on a question nobody asked and starves the effects half.",
        },
        {
          wrong: "Every day more and more people are eating more and more fast food more and more.",
          right: "Fast food has moved from an occasional treat to several meals a week.",
          reason: "Repetition padded with 'more and more' inflates length without content; one precise contrast does the work.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "takeaway", partOfSpeech: "noun", meaning: "A meal bought ready-cooked to eat elsewhere; also the shop that sells it." },
      { word: "value meal", partOfSpeech: "noun", meaning: "A chain's bundled meal of a burger or similar with fries and a drink." },
      { word: "ingredients", partOfSpeech: "noun", meaning: "The individual foods a dish is cooked from." },
      { word: "fibre", partOfSpeech: "noun", meaning: "The part of plant food that satisfies hunger and aids digestion — 'low in fibre'." },
      { word: "portion", partOfSpeech: "noun", meaning: "The amount of food served for one person." },
      { word: "to creep upward", partOfSpeech: "phrase", meaning: "To rise so slowly that each step goes unnoticed." },
      { word: "home-cooked", partOfSpeech: "adjective", meaning: "Prepared at home from ingredients rather than bought ready-made." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 5. Cause and effect — the longer journey to work (workplace, d4)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-cause-effect-long-commutes",
    title: "The longer journey to work",
    channel: "gt",
    taskType: "task-2",
    family: "cause-effect",
    tier: "practice",
    topic: "workplace",
    difficulty: 4,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "In many countries, the journey between home and work now takes far longer than it did for the previous generation. Why are commutes becoming longer, and how does this affect workers and their families?",
    requirements: [
      {
        key: "both-halves",
        description: "Answers both halves in order — the causes of the lengthening, then the effects on workers and on their families — with neither half squeezed.",
        keywords: ["reason", "why", "because", "affect", "effect", "impact", "result"],
      },
      {
        key: "causes-structural",
        description: "Explains structural causes rather than moods: housing prices outpacing wages near the jobs, industries pooling into big cities, congestion slowing the same kilometres year after year.",
        keywords: ["housing", "rent", "afford", "job", "city", "congestion", "traffic", "train"],
      },
      {
        key: "effects-on-workers",
        description: "Traces the worker's costs — the stretched working day, sleep cut at both ends, exercise abandoned, commuting hours that are neither rest nor one's own.",
        keywords: ["sleep", "tired", "early", "late", "exercise", "energy", "hours", "platform"],
      },
      {
        key: "effects-on-families",
        description: "Shows the household's costs — a parent missing at breakfast or bedtime, meals shifted and split, one partner carrying the domestic load, towns that empty by day.",
        keywords: ["family", "children", "parent", "meal", "evening", "partner", "weekend"],
      },
      {
        key: "fresh-conclusion",
        description: "Weighs the two sides in fresh words, naming who pays for what, without drifting into solutions.",
        keywords: ["in conclusion", "in short", "on balance", "overall", "to sum up"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "Two halves, and the second names two beneficiaries of the analysis — workers and families — so a paragraph each keeps both visible.",
          "The causes are structural; 'people like driving' would answer a different question entirely.",
          "The difficulty sits in the chain: housing decisions, job geography and congestion feed one another; keep each link named.",
        ],
      },
      {
        heading: "Step 2 — Why longer (3 minutes)",
        notes: [
          "Housing: near the offices, prices outrun wages, so the affordable door stands ever further from the workplace.",
          "Geography: as industries pool into a few large cities, the career ladder stands in one place and must be travelled to.",
          "Congestion: more cars and fuller trains mean the same kilometres take more minutes each year.",
        ],
      },
      {
        heading: "Step 3 — Who pays, and the map (3 minutes)",
        notes: [
          "The worker: a ninety-minute leg each way stretches the day from before seven to after eight; sleep, exercise and study lose the margin.",
          "The household: one parent at breakfast or bedtime but rarely both; the evening meal shifts or splits; the partner at home carries commuting days alone.",
          "Map: introduction → why longer → the worker's day → the household's week → a conclusion about who pays, and in what currency.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "A generation ago, many people could walk to work or reach it within twenty minutes; today the same journey can claim two hours of every working day. Across much of the world the commute is stretching, and not because workers have grown fond of travelling. Its lengthening has structural causes — housing costs, the geography of jobs and the slowing of crowded roads and rails — and the bill is paid twice over: once by the worker who travels and once by the household waiting at the other end.",
        "The deepest cause is the widening gap between affordable homes and well-paid work. In many regions the houses people can buy or rent stand ever further from the offices, hospitals and factories that employ them; the mortgage is eased in one currency and charged in another, the hour. Work has also grown more concentrated. As industries pool into a handful of large cities, the career ladder is set up in one place and must be travelled to, whatever suburb offers the mortgage a family can actually afford. Meanwhile the journey lengthens even where the distance does not, since extra cars and fuller trains make the same kilometres take more minutes with every passing year.",
        "For the worker, the first effect is arithmetic: a ninety-minute journey each way converts into a day that begins before seven and ends after eight. Sleep is trimmed at both ends, exercise is usually the first thing abandoned, and evening study or training quietly disappears. The commute itself claims a subtler toll, because hours spent on a platform or breathing exhaust fumes are neither rest nor time of one's own. The worker arrives home already spent, so the hours that remain are fewer and lighter than the clock alone suggests.",
        "The household feels the cost differently. Children see one parent at breakfast or at bedtime but rarely at both, and the evening meal either shifts late or splits in two, dissolving the shared table that used to hold the day together. The partner who stays closer to home carries the whole domestic load on commuting days, which breeds a slow resentment that no single argument ever quite explains. Whole towns adopt the rhythm: places within commuting range fill with bedrooms and empty of life between eight in the morning and seven at night.",
        "In short, longer commutes are what many households now pay for housing they can afford and work that pays enough — a price collected in sleep, health and shared hours. The kilometres may be unavoidable; what deserves attention is how quietly the cost has been moved from the payslip to the family calendar.",
      ],
      wordCount: 436,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — then and now, then the ledger",
          analysis:
            "Sets a twenty-minute past against a two-hour present in the first sentence, dismisses the wrong explanation ('not because workers have grown fond of travelling') and previews both halves as a bill paid twice over.",
        },
        {
          role: "Body 1 — three linked causes",
          analysis:
            "Presents housing, job geography and congestion as one system: the mortgage metaphor ('eased in one currency and charged in another, the hour') converts economics into lived time, and 'the career ladder is set up in one place' keeps the argument concrete.",
        },
        {
          role: "Body 2 — the worker's arithmetic",
          analysis:
            "Begins with a calculation anyone can check — ninety minutes each way — then lists what the stretched day pushes out (sleep, exercise, study) before offering the paragraph's own idea: commuting time is 'neither rest nor time of one's own'.",
        },
        {
          role: "Body 3 — the household's calendar",
          analysis:
            "Follows the cost indoors: meals shift and split, one partner carries commuting days, and the perspective widens to towns 'filling with bedrooms and emptying of life' — the largest scale the essay allows itself.",
        },
        {
          role: "Conclusion — who pays, and where",
          analysis:
            "Refuses a grand solution ('the kilometres may be unavoidable') and instead names the essay's real finding: the cost has been quietly transferred from the payslip to the family calendar.",
        },
      ],
      vocabulary: [
        { term: "the commute is stretching", note: "'Stretch' rather than 'getting longer' keeps the image physical, as if the day itself were elastic." },
        { term: "eased in one currency and charged in another, the hour", note: "The essay's central metaphor: money saved on housing is paid back in time." },
        { term: "the career ladder is set up in one place", note: "A concrete image for job concentration — better than 'employment has centralised'." },
        { term: "claims a subtler toll", note: "'Toll' prices the journey like a fee, and 'subtler' admits the cost is invisible until counted." },
        { term: "breeds a slow resentment", note: "The verb 'breeds' presents resentment as something grown in the household rather than chosen by anyone." },
        { term: "from the payslip to the family calendar", note: "The conclusion's closing transfer: the cost reframed as time rather than money." },
      ],
      grammar: [
        {
          feature: "Negative 'because' correction",
          example: "not because workers have grown fond of travelling",
          note: "Kills the wrong explanation before the reader can adopt it — a stance-protecting move inside the introduction.",
        },
        {
          feature: "'Neither … nor' pairing",
          example: "hours … are neither rest nor time of one's own",
          note: "Defines commuting time by what it fails to be; precise negation instead of complaint.",
        },
        {
          feature: "'Whatever' concessive clause",
          example: "whatever suburb offers the mortgage a family can actually afford",
          note: "Acknowledges choice while showing its limits: the family chooses the suburb, the city chooses the ladder.",
        },
        {
          feature: "'Either … or' alternatives",
          example: "the evening meal either shifts late or splits in two",
          note: "Two precise fates for the family dinner instead of a vague 'changes'.",
        },
      ],
      coherence:
        "The essay is built as a ledger: the introduction promises a bill 'paid twice over', body one explains who wrote it (housing markets, job geography, congestion), body two charges it to the worker, body three to the household, and the conclusion names the currency of payment. Transitions are earned by content rather than pasted — 'The household feels the cost differently' picks up exactly where the worker's paragraph ended — and the closing metaphor family (payslip, bill, price) ties all five paragraphs into one argument.",
      alternativeExpressions: [
        { insteadOf: "the commute is stretching", use: "journeys to work keep getting longer" },
        { insteadOf: "eased in one currency and charged in another", use: "saved in money and paid in time" },
        { insteadOf: "already spent", use: "tired before the evening begins" },
        { insteadOf: "breeds a slow resentment", use: "gradually builds quiet bitterness" },
        { insteadOf: "fill with bedrooms and empty of life", use: "become dormitory towns" },
        { insteadOf: "the family calendar", use: "time spent together" },
      ],
      commonMistakes: [
        {
          wrong: "Commuting is very tired and many people complain about it.",
          right: "A ninety-minute journey each way stretches the working day from before seven in the morning to after eight at night.",
          reason: "'Very tired' for 'tiring' is a form error, and complaining is not analysing; the paragraph must convert experience into arithmetic.",
        },
        {
          wrong: "The government should build more roads and trains.",
          right: "Housing prices near the jobs have outrun wages, so the affordable door stands ever further from the workplace.",
          reason: "Solutions answer a question this prompt does not ask; the first half of the task is cause, not cure.",
        },
        {
          wrong: "Long commutes affect the family because the family misses the person who is commuting.",
          right: "On commuting days one parent appears only at breakfast or at bedtime, and the evening meal either shifts late or splits in two.",
          reason: "Circular reasoning says the same thing twice; effects need scenes, not restatements.",
        },
        {
          wrong: "In addition, moreover, furthermore, besides, what is more, also.",
          right: "The household feels the cost differently: meals shift, one partner carries the day, and the town itself empties.",
          reason: "A chain of filler connectives gestures at structure without building any; one pointing sentence does more than five links.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "commute", partOfSpeech: "noun", meaning: "The regular journey between home and one's place of work." },
      { word: "dormitory town", partOfSpeech: "noun", meaning: "A town from which most residents travel elsewhere to work." },
      { word: "congestion", partOfSpeech: "noun", meaning: "The state of roads or trains being so full that movement slows." },
      { word: "mortgage", partOfSpeech: "noun", meaning: "The loan by which most people buy a home, repaid over many years." },
      { word: "toll", partOfSpeech: "noun", meaning: "The cost or damage something gradually takes — 'claims a toll'." },
      { word: "domestic load", partOfSpeech: "phrase", meaning: "The share of cooking, cleaning and childcare a household member carries." },
      { word: "payslip", partOfSpeech: "noun", meaning: "The note listing a worker's pay and deductions; here a metaphor for money costs." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 6. Two-part question — mobile phones everywhere (technology, d3)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-two-part-mobile-phones",
    title: "Mobile phones everywhere",
    channel: "gt",
    taskType: "task-2",
    family: "two-part",
    tier: "practice",
    topic: "technology",
    difficulty: 3,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "The mobile phone has become the one object most people never leave the house without. Why have these phones become so essential to daily life? Do you think they are a good thing for children to own?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
    requirements: [
      {
        key: "both-questions",
        description: "Answers both questions explicitly and in order — a clear block on why phones are essential, then a clear position on children.",
        keywords: ["essential", "because", "children", "good", "think", "believe", "view"],
      },
      {
        key: "reasons-for-essential",
        description: "Explains the phone's rise concretely — it absorbed the clock, map, camera, wallet and letter box; work and banking moved onto it; safety and social life run through it.",
        keywords: ["camera", "bank", "wallet", "map", "ticket", "work", "message", "safety"],
      },
      {
        key: "position-on-children",
        description: "Takes a definite position on children owning phones — for instance a guarded yes, with ages and rules — and keeps it to the end.",
        keywords: ["i think", "i believe", "in my view", "however", "limit", "age", "rules"],
      },
      {
        key: "fair-to-both-sides",
        description: "Gives children's benefits (reachability, homework platforms, friendship) and risks (sleep, attention, unsupervised content, play displaced) fair weight before judging.",
        keywords: ["sleep", "attention", "play", "learn", "homework", "contact", "content"],
      },
      {
        key: "fresh-conclusion",
        description: "Closes by answering both questions again in fresh words, ideally with a memorable final comparison.",
        keywords: ["in conclusion", "in short", "overall", "on balance", "to sum up"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "Two questions, two jobs: explain the phone's importance, then judge its place in children's hands; blending them muddles both.",
          "The second question demands a position — 'it depends' must become 'yes, from about this age, provided these rules'.",
          "'Own' includes using: age, type of phone and house rules are all fair material for the answer.",
        ],
      },
      {
        heading: "Step 2 — Why essential (3 minutes)",
        notes: [
          "Absorption: within a decade the phone swallowed the alarm clock, calendar, camera, music player, map, ticket machine and letter box.",
          "Institutions followed: banks assume an app, employers send messages rather than ring, school notices arrive before the children leave the building.",
          "Safety and belonging: a breakdown, a missed bus, a fainting relative — and the group chat where friendship now lives.",
        ],
      },
      {
        heading: "Step 3 — Children, and the map (3 minutes)",
        notes: [
          "For: a child with a phone is reachable and can reach help; timetables and homework platforms assume one exists.",
          "Against: sleep pushed back by one more scroll; attention cut into notifications; play and boredom — the workshop of childhood — displaced.",
          "Verdict: staged ownership — a simple calling phone first, a smartphone once habits are shown, and house rules kept without exception.",
          "Map: introduction → why essential → the case for children → the risks and the verdict → conclusion comparing the phone to the house keys.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "Keys, wallet, phone: that used to be the standard pat of the pockets on leaving home, and for a growing number of people the list has shortened to one item. The mobile phone has made itself less a gadget than a piece of infrastructure, and the reasons are worth stating plainly. On the second question, my view is a guarded yes: a phone is valuable in the right hands, harmful in unsupervised ones, and children are ready for it at different ages.",
        "The phone became essential largely by absorption. Within about a decade it swallowed the alarm clock, the calendar, the camera, the music player, the street map, the ticket machine and the letter box, until carrying it meant carrying the household's entire toolkit. Institutions then arranged themselves around the device: banks assume an app, employers send messages rather than ring, and a school closure reaches parents before the children have left the building. Safety completed the change. A breakdown on a dark road, a teenager who misses the last bus, an elderly relative feeling faint — each is an argument for the phone that now sits in almost every pocket, and every family knows it.",
        "For children, the case for owning one is genuinely strong. A child with a phone is reachable and can reach help at any moment, a freedom earlier generations traded for hours of parental worry. School has quietly assumed the device as well: timetables, homework platforms and group projects all run through it, so a child without one is partly locked out of the conversation. Even the games have a social value; the playground's talk continues on the sofa.",
        "The risks are just as real, which is why my yes comes with conditions. Sleep goes first: the screen's light and the endless next video push bedtimes back, and tired children learn badly. Attention is cut into fragments by notifications, and the long, boring stretches of undirected play from which children once built whole worlds are interrupted by a device engineered never to be boring. There is, too, content no child should meet alone. The sensible course is staged ownership: a simple phone that calls and texts first, a smartphone once the child has shown the habits to match, and house rules — screens away at meals, at bedtime and out of bedrooms — kept without exception.",
        "In short, the phone is essential because it absorbed a dozen objects and then became the hinge on which work, money and friendship swing. Children deserve a share of that usefulness, handed over gradually and fenced with firm rules: less like a toy, more like the house keys.",
      ],
      wordCount: 436,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — the pocket check",
          analysis:
            "Opens with a three-noun ritual every reader has performed, then answers the second question early and honestly ('a guarded yes'), so the essay's judgement is never in doubt while the first question is argued.",
        },
        {
          role: "Body 1 — absorption, institutions, safety",
          analysis:
            "Builds the explanation in three deliberate waves — the objects the phone swallowed, the institutions that rearranged themselves around it, and the emergencies everyone can picture — so 'essential' is proven by structure rather than asserted.",
        },
        {
          role: "Body 2 — the case for children",
          analysis:
            "Argues from reachability ('a freedom earlier generations traded for worry'), school reality and even the games, keeping the tone generous so that the verdict in the next paragraph reads as weighed rather than defensive.",
        },
        {
          role: "Body 3 — risks, then the staged yes",
          analysis:
            "Pairs each risk with its mechanism — light and 'the endless next video' against sleep, notifications against attention — then converts the position into policy: staged ownership and three house rules 'kept without exception'.",
        },
        {
          role: "Conclusion — the hinge and the keys",
          analysis:
            "Answers both questions in two sentences and lands the essay's final comparison — 'less like a toy, more like the house keys' — which reframes the whole children's debate as a question of responsibility.",
        },
      ],
      vocabulary: [
        { term: "a piece of infrastructure", note: "Promotes the phone from product to public utility — the exact claim the paragraph must then justify." },
        { term: "by absorption", note: "Names the mechanism of the phone's rise in one word; the list that follows becomes evidence rather than assertion." },
        { term: "traded for hours of parental worry", note: "Presents reachability as an exchange, which is more persuasive than claiming a pure benefit." },
        { term: "locked out of the conversation", note: "The exclusion metaphor for the child without a phone — the strongest argument the body makes." },
        { term: "staged ownership", note: "A compact policy phrase: the phone granted in steps matched to demonstrated habits." },
        { term: "the hinge on which work, money and friendship swing", note: "The conclusion's image for centrality — everything else now turns on the device." },
      ],
      grammar: [
        {
          feature: "'Less X than Y' comparison",
          example: "less a gadget than a piece of infrastructure",
          note: "Scales the phone by category rather than degree — a sophisticated comparative structure.",
        },
        {
          feature: "'Until' + gerund",
          example: "until carrying it meant carrying the household's entire toolkit",
          note: "Marks the endpoint of a process inside one clause; the repeated 'carrying' is deliberate.",
        },
        {
          feature: "Present simple for general truths",
          example: "each is an argument for the phone … and every family knows it",
          note: "The list of emergencies closes with a timeless present, giving the safety claim universal weight.",
        },
        {
          feature: "Elliptical 'once' clause",
          example: "a smartphone once the child has shown the habits to match",
          note: "The condition is stated without a main verb, mimicking natural policy language.",
        },
      ],
      coherence:
        "The two questions are kept in strict sequence: paragraph two answers 'why essential' in three waves, paragraphs three and four answer the children's question as case, risks and verdict, so the reader always knows which question is being paid. The introduction plants both answers — 'less a gadget than a piece of infrastructure' and 'a guarded yes' — and each is cashed later, the first by the absorption list, the second by 'staged ownership'. The final house-keys image completes a small metaphor thread that began with the pocket check of the opening line.",
      alternativeExpressions: [
        { insteadOf: "a piece of infrastructure", use: "as basic as electricity or running water" },
        { insteadOf: "swallowed", use: "took over the job of" },
        { insteadOf: "traded for hours of parental worry", use: "bought at the cost of constant parental worry" },
        { insteadOf: "locked out of the conversation", use: "left outside the group's life" },
        { insteadOf: "staged ownership", use: "ownership granted in stages" },
        { insteadOf: "fenced with firm rules", use: "bounded by clear rules" },
      ],
      commonMistakes: [
        {
          wrong: "Mobile phones are very important in our modern life and everyone uses them nowadays.",
          right: "The phone swallowed the clock, the camera, the map and the wallet, until carrying it meant carrying a household's toolkit.",
          reason: "'Important and everyone uses them' argues in a circle; the task asks why, and the answer must be the mechanism.",
        },
        {
          wrong: "In my opinion, mobile phones have both advantages and disadvantages for children.",
          right: "In my view, children should own phones, but in stages: a simple handset first and a smartphone only once habits are proven.",
          reason: "The balanced shrug answers nothing; a two-part task requires a position a reader could disagree with.",
        },
        {
          wrong: "Children who use phones will become addicted and lose their future.",
          right: "Screens push bedtimes back, and children who sleep less learn badly the next morning.",
          reason: "Catastrophe without mechanism convinces no examiner; link each risk to its ordinary, observable cost.",
        },
        {
          wrong: "Firstly, phones are useful. Secondly, phones are dangerous. In conclusion, phones are both.",
          right: "The case for children owning phones rests on reachability and school life; the risks — sleep, attention, content — are real but manageable with staged rules.",
          reason: "A seesaw of topic sentences never becomes an argument; each paragraph should carry one developed idea forward.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "gadget", partOfSpeech: "noun", meaning: "A small, clever device — here, what the phone stopped being." },
      { word: "infrastructure", partOfSpeech: "noun", meaning: "The basic systems a place depends on; used metaphorically for the phone." },
      { word: "to absorb", partOfSpeech: "verb", meaning: "To take in and replace other things — 'the phone absorbed the camera'." },
      { word: "handset", partOfSpeech: "noun", meaning: "The physical phone itself, as distinct from the service running on it." },
      { word: "notification", partOfSpeech: "noun", meaning: "An alert an app sends out to claim its user's attention." },
      { word: "house rules", partOfSpeech: "phrase", meaning: "A family's own fixed rules about when and where screens are used." },
      { word: "hinge", partOfSpeech: "noun", meaning: "The pin a door turns on; metaphorically, the thing everything else depends on." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 7. Two-part question — fast fashion (culture, d4)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-two-part-fashion",
    title: "Fast fashion",
    channel: "gt",
    taskType: "task-2",
    family: "two-part",
    tier: "practice",
    topic: "culture",
    difficulty: 4,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "Clothes that looked fashionable last summer can appear dated a year later, and many shops now replace their stock every few weeks. Why does fashion change so quickly nowadays, and what consequences does this speed have for consumers and society?",
    requirements: [
      {
        key: "both-questions",
        description: "Answers both questions in order — the machinery behind the speed, then its consequences — with each developed rather than listed.",
        keywords: ["why", "because", "consequence", "result", "effect", "reason", "lead to"],
      },
      {
        key: "machinery-of-speed",
        description: "Explains the acceleration itself: offshore supply chains copying designs in weeks, fortnightly 'drops' keeping shops novel, social feeds turning trends into week-long stories.",
        keywords: ["supply", "produce", "cheap", "season", "drop", "social media", "trend", "online"],
      },
      {
        key: "consequences-for-consumers",
        description: "Traces the buyer's side honestly — quiet cumulative spending, wardrobes of barely worn clothes, pressure on the young to keep a look current.",
        keywords: ["spend", "money", "wear", "wardrobe", "image", "pressure", "young"],
      },
      {
        key: "consequences-for-society",
        description: "Traces the wider side — textile waste and landfill, garment workers chasing impossible targets, repair skills and garment quality fading.",
        keywords: ["waste", "landfill", "textile", "worker", "wages", "quality", "mend", "repair"],
      },
      {
        key: "fresh-conclusion",
        description: "Links the speed to its costs in a fresh-worded close; no new claims, and no drift into solutions, since the prompt asks why and what follows.",
        keywords: ["in conclusion", "in short", "overall", "on balance", "to sum up"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "Two questions: why the pace quickened, and what the pace costs; an essay about fashion's pleasures or the industry's pollution in general answers neither.",
          "Keep solutions out — the direct questions are why and what follows, not what to do.",
          "The consequences must cover both consumers and society, because the prompt names them both.",
        ],
      },
      {
        heading: "Step 2 — The three engines (3 minutes)",
        notes: [
          "Production: offshore chains can copy a design seen on Monday and hang it in shops within weeks, cheaply enough for impulse buying.",
          "Retail: instead of two seasons a year, chains launch a small 'drop' every fortnight, so the shop is never the same twice.",
          "Attention: a trend now lives and dies on a feed within weeks, and each cycle advertises the next; novelty became the point of the purchase.",
        ],
      },
      {
        heading: "Step 3 — The two bills, and the map (3 minutes)",
        notes: [
          "Consumers: no single item costs much, yet wardrobes swell while each piece is worn a handful of times; keeping a look current becomes an unending subscription, felt most by the young.",
          "Society: textile mountains as short-lived clothes reach the bin; garment workers chasing targets set by feeds; hemming, patching and re-buttoning becoming museum skills.",
          "Map: introduction → the three engines → the consumer's bill → society's bill → a conclusion that prices the speed on both sides of the till.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "A coat used to be bought to last ten winters; today a top can be bought on Friday, worn twice and forgotten by the following spring. Fashion has always moved, but its present pace is something new — a system in which the factory, the shop floor and the social feed wind one another up. That machinery deserves explaining, because the consequences it produces, for the shopper and for the wider world, follow directly from the speed.",
        "Three engines drive the acceleration. The first is production: offshore supply chains can copy a design seen online on Monday and have it hanging in the shops within weeks, at a price that turns buying into an impulse rather than a decision. The second is retail strategy: where a wardrobe once followed two seasons a year, chains now release a small 'drop' of new stock every fortnight, so the shop is never the same twice and every visit feels urgent. The third is attention itself. A trend that once spread over a year now lives and dies on a feed in a matter of weeks — praised, copied, mocked and discarded in turn — and each cycle advertises the next. When novelty became this cheap, newness became the point of the purchase.",
        "For consumers, the first consequence is financial in a quiet way: no single item costs much, yet wardrobes swell while each piece is worn a handful of times. The deeper cost falls on self-image. When a look can date within a month, keeping an online appearance current becomes a subscription with no end, and it is mostly the young who feel the bill. Confidence gets tied to purchases that were designed to expire.",
        "The wider bill is heavier still. Textile mountains grow as garments built to survive a dozen washes at most reach the bin; charities resell a fraction, but volume outruns demand. In the producing countries, workers chase targets set by the pace of a feed rather than by any sensible calendar. And a culture quietly loses its repair skills: a generation that once learnt to hem, patch and re-button now learns only to reorder, while quality itself is redesigned to be disposable.",
        "In short, fashion moves fast because cheap production, restless shops and social-media cycles each wind the others up. The bill arrives on both sides of the till: strained budgets and anxious wardrobes on one, waste, exhausted workers and lost repair skills on the other — a price the pleasure of the new purchase never shows on its tag.",
      ],
      wordCount: 417,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — ten winters against two wearings",
          analysis:
            "Opens with a paired contrast — a coat for ten winters, a top worn twice — that contains the whole argument, then names the three-part machinery the second paragraph will open up.",
        },
        {
          role: "Body 1 — three engines, in order",
          analysis:
            "Production, retail and attention are introduced as 'engines' and each receives its mechanism — copying in weeks, dropping stock fortnightly, trends living 'a matter of weeks' — with the closing aphorism 'newness became the point of the purchase' completing the design.",
        },
        {
          role: "Body 2 — the quiet bill on the shopper",
          analysis:
            "Starts with money but immediately deepens it: the real cost is 'a subscription with no end', a metaphor converting scattered purchases into permanent pressure, aimed honestly at the young.",
        },
        {
          role: "Body 3 — the wider bill",
          analysis:
            "Widens from wallet to world — textile mountains, workers chasing feed-paced targets, repair skills becoming museum skills — with every consequence tied to the speed rather than to fashion in general.",
        },
        {
          role: "Conclusion — both sides of the till",
          analysis:
            "Repeats the 'wind one another up' image deliberately, splits the bill between shopper and society in two balanced clauses, and closes with the tag metaphor returning the cost to exactly where the pleasure is paid.",
        },
      ],
      vocabulary: [
        { term: "to date", note: "Intransitive verb meaning 'to begin to look old-fashioned' — the exact word for fashion's decay." },
        { term: "wind one another up", note: "Mechanical metaphor for mutual acceleration; repeated in the conclusion to bind the essay together." },
        { term: "a subscription with no end", note: "Converts impulse purchases into a recurring charge — the paragraph's central insight in five words." },
        { term: "designed to expire", note: "Attributes the wardrobe's turnover to intention rather than accident — the argument's sharpest claim." },
        { term: "textile mountains", note: "A concrete image for landfill volume; scale made visible without a single number." },
        { term: "both sides of the till", note: "The conclusion's balancing image: shopper and society pay from the same transaction." },
      ],
      grammar: [
        {
          feature: "Passive triple",
          example: "a top can be bought on Friday, worn twice and forgotten",
          note: "Three past participles in a row give the garment's whole biography inside one clause.",
        },
        {
          feature: "'Rather than' contrast",
          example: "turns buying into an impulse rather than a decision",
          note: "Precise discrimination between two kinds of purchase — analysis carried by a preposition.",
        },
        {
          feature: "Participle list",
          example: "praised, copied, mocked and discarded in turn",
          note: "Compresses a trend's entire social life into four words and a comma.",
        },
        {
          feature: "'While' + passive with 'itself'",
          example: "while quality itself is redesigned to be disposable",
          note: "The intensifying 'itself' marks the paradox: the industry weakening the very thing it sells.",
        },
      ],
      coherence:
        "The essay is built around one controlling idea — speed — announced in the introduction's paired contrast and unpacked in strict order: the engines of speed, then the costs, first to the consumer, then to society, mirroring the prompt's own wording. The 'wind one another up' metaphor opens the essay and returns in the conclusion; 'bill' and 'price' run through the consequence paragraphs so the reader experiences the costs as a single ledger; and the final tag image closes the loop by putting the price exactly where the pleasure is paid.",
      alternativeExpressions: [
        { insteadOf: "can appear dated", use: "can look old-fashioned" },
        { insteadOf: "wind one another up", use: "accelerate one another" },
        { insteadOf: "a subscription with no end", use: "a payment that never finishes" },
        { insteadOf: "designed to expire", use: "made to be thrown away" },
        { insteadOf: "textile mountains", use: "vast heaps of discarded clothing" },
        { insteadOf: "both sides of the till", use: "buyer and society alike" },
      ],
      commonMistakes: [
        {
          wrong: "Fashion changes quickly because of globalisation and the development of modern society.",
          right: "Offshore factories can copy a design seen online on Monday and hang it in shops within weeks, cheaply enough for impulse buying.",
          reason: "'Globalisation' explains everything and therefore nothing; the question asks for machinery, and machinery has parts.",
        },
        {
          wrong: "Fast fashion is bad for the environment, so people should buy less clothes.",
          right: "Garments built to survive a dozen washes reach the bin, and the volume now outruns what charities can resell.",
          reason: "Moral instruction is not analysis, and 'less clothes' should be 'fewer clothes'; the prompt asks what follows from the speed, not what shoppers ought to do.",
        },
        {
          wrong: "In conclusion, fashion will always change and we cannot stop it.",
          right: "In conclusion, the speed of change — not change itself — is what strains budgets, fills landfills and empties skills.",
          reason: "A shrugging conclusion drops the essay's actual distinction; the claim here is about pace, and the close must keep it.",
        },
        {
          wrong: "Nowadays young people are addicted to shopping and social media and they don't care about quality.",
          right: "Keeping an online appearance current has become a subscription with no end, felt most keenly by the young.",
          reason: "'Addicted and don't care' is a contraction slip and an unearned accusation; a named mechanism persuades where blame repels.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "to date", partOfSpeech: "verb", meaning: "To begin to look old-fashioned — 'a coat that dated in a season'." },
      { word: "drop", partOfSpeech: "noun", meaning: "A small, sudden release of new stock by a fashion chain." },
      { word: "wardrobe", partOfSpeech: "noun", meaning: "A person's whole collection of clothes." },
      { word: "garment", partOfSpeech: "noun", meaning: "A single item of clothing — the industry's own word." },
      { word: "textile", partOfSpeech: "noun", meaning: "Cloth and woven material; 'textile waste' is fashion's landfill." },
      { word: "to mend", partOfSpeech: "verb", meaning: "To repair a garment by sewing — hemming, patching, re-buttoning." },
      { word: "disposable", partOfSpeech: "adjective", meaning: "Made to be thrown away after a short use." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },

  // -------------------------------------------------------------------------
  // 8. Direct questions — why holidays matter (everyday, d3)
  // -------------------------------------------------------------------------

  {
    slug: "ielts-wb-gt2-direct-questions-holidays",
    title: "Why holidays matter",
    channel: "gt",
    taskType: "task-2",
    family: "direct-questions",
    tier: "practice",
    topic: "everyday",
    difficulty: 3,
    estimatedMinutes: 40,
    wordMinimum: 250,
    timeLimitSec: 2400,
    prompt:
      "Most people who work look forward to their annual leave, and many plan it months in advance. Why do people need holidays from work? Do you think it is better to take one long break each year, or several shorter ones?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
    requirements: [
      {
        key: "both-questions",
        description: "Answers both questions directly and in order — why leave is needed, then a clear choice between one long break and several shorter ones.",
        keywords: ["need", "because", "better", "long", "short", "several", "one"],
      },
      {
        key: "reasons-developed",
        description: "Develops at least two reasons — recovery of sleep and patience, distance that restores perspective, whole days spent with family and friends.",
        keywords: ["rest", "recover", "relax", "sleep", "family", "friends", "stress", "perspective"],
      },
      {
        key: "clear-choice",
        description: "Chooses one shape of holiday and defends it — fading refreshment, renewed anticipation, spreading risk — while giving the long break a fair hearing.",
        keywords: ["better", "prefer", "because", "however", "although", "admittedly", "on balance"],
      },
      {
        key: "everyday-evidence",
        description: "Supports the argument with everyday experience — the glow that fades within weeks, the booking made in February, the month that lets a family truly settle in.",
        keywords: ["for example", "for instance", "return", "weekend", "summer", "refreshed", "booked"],
      },
      {
        key: "fresh-conclusion",
        description: "Restates both answers in fresh words, ideally with a memorable closing comparison.",
        keywords: ["in conclusion", "in short", "overall", "to sum up", "on balance"],
      },
    ],
    planningNotes: [
      {
        heading: "Step 1 — Decode the question (2 minutes)",
        notes: [
          "Direct questions deserve direct answers: one body block for why holidays are needed, one for the choice — and the choice must be a choice.",
          "Assume the total leave is the same on both sides; comparing three weeks against one unfairly loads the scales.",
          "Everyday register throughout: annual leave, school terms, the tired weeks of late spring — not productivity studies.",
        ],
      },
      {
        heading: "Step 2 — Why needed (3 minutes)",
        notes: [
          "Recovery: sustained work shortens sleep, thins patience and drains resistance; only uninterrupted time repays it.",
          "Perspective: from a distance, jobs, commutes and towns look different, and postponed decisions quietly answer themselves.",
          "Connection: for many families and friendships, holidays are the only unbroken days together.",
        ],
      },
      {
        heading: "Step 3 — Long or short, and the map (3 minutes)",
        notes: [
          "For several short: the refreshment fades within weeks, so spreading leave tops the reserves up as they fall; anticipation renews several times a year; one spoiled week is a misfortune, not a lost year.",
          "Concession: only a long break allows the far journey or the deep reset — and the first week of any trip is partly unpacking.",
          "Verdict: several shorter breaks as the default, the great journey saved for special years.",
          "Map: introduction → why holidays are needed → the case for several shorter breaks → the concession and verdict → conclusion.",
        ],
      },
    ],
    modelAnswer: {
      paragraphs: [
        "Ask people in an office what is carrying them through a grey February and many will name a holiday booked for May. The longing is not laziness. Regular work, however enjoyable, draws down the same reserves year after year, and leave exists to repay that debt — which is why I would call holidays a necessity rather than a luxury. On the second question, my view is that for most working lives several shorter breaks beat one long one, though the long journey keeps an honoured place.",
        "The need has three strands. The first is recovery: sustained effort shortens sleep, thins patience and lowers resistance to illness, and only genuinely uninterrupted time repays it — the sleep of a first week away does work that no early night manages. The second is perspective. From a distance, a job, a commute and even a whole town look different, and decisions postponed for a year have a habit of answering themselves on a beach or a long walk. The third is connection: for many families and old friendships, a holiday is the only stretch of whole days spent together, unhurried by a timetable.",
        "Why several shorter breaks rather than one long holiday? Because the refreshment fades. Most people return from leave glowing, and by the sixth week back the glow has gone; the tiredness of late spring is a standing joke in every workplace. Spreading the same leave across the year — a week in spring, a week in autumn, the odd long weekend between — tops the reserves up as they fall, instead of letting them run dry for months on end. Anticipation, which is half of any holiday's value, is likewise renewed four times a year rather than once. Shorter breaks even hedge the weather and the mishap: one disappointing week is a misfortune, while a ruined year's only holiday is closer to a tragedy.",
        "The long break deserves its defence, and I do not dismiss it. Only a long holiday permits the far journey, the language course, the month in which a family truly settles into another rhythm — and the first week of any trip is partly unpacking, which short breaks never outgrow. There is a place for that: once every few years, saved for, and remembered for a lifetime. As the default shape of an ordinary working year, though, it leaves too many months running on empty.",
        "In short, holidays repay the sleep, patience and imagination that work quietly spends, and they are best taken the way pay itself arrives: little and often, with the occasional grand sum set aside for the journey of a lifetime.",
      ],
      wordCount: 434,
      bandEstimate:
        "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
    },
    analysis: {
      paragraphByParagraph: [
        {
          role: "Introduction — February's answer",
          analysis:
            "Opens on a small, shared moment — the May booking that carries a grey February — and answers both questions at once: necessity 'rather than a luxury', and several short breaks, with the concession promised as 'an honoured place'.",
        },
        {
          role: "Body 1 — three strands of need",
          analysis:
            "Recovery, perspective and connection each receive a mechanism — sleep 'no early night manages', decisions 'answering themselves on a beach', whole days 'unhurried by a timetable' — so the claim of necessity is earned rather than asserted.",
        },
        {
          role: "Body 2 — the fading glow",
          analysis:
            "Argues the choice by timing: refreshment fades by the sixth week, so spreading leave 'tops the reserves up as they fall'; anticipation renews; and the closing risk comparison, misfortune against tragedy, supplies the practical clincher.",
        },
        {
          role: "Body 3 — the long break defended",
          analysis:
            "Steel-mans the other side — far journeys, the month that allows settling in, the built-in cost that 'short breaks never outgrow' — then limits it to special years, so the verdict reads as weighed rather than tribal.",
        },
        {
          role: "Conclusion — little and often",
          analysis:
            "Restates both answers in two sentences and lands the essay's best image: holidays taken 'the way pay itself arrives', with the grand journey as the saved-for exception.",
        },
      ],
      vocabulary: [
        { term: "draws down the same reserves", note: "A financial verb for physical and emotional capital; it sets up the essay's closing metaphor." },
        { term: "tops the reserves up", note: "Phrasal verb for small, repeated replenishment — the mechanism the whole choice turns on." },
        { term: "the glow has gone", note: "A tiny rhyme that names the familiar post-holiday fade in four words." },
        { term: "a standing joke", note: "Idiom for what everyone knows and nobody fixes — here, late-spring tiredness." },
        { term: "to hedge", note: "Borrowed from finance: spreading risk across several bets rather than one." },
        { term: "running on empty", note: "Idiom for operating with no reserves left — the cost of the single long break." },
      ],
      grammar: [
        {
          feature: "Concessive 'however' + adjective",
          example: "Regular work, however enjoyable, draws down the same reserves",
          note: "Concedes the best case for work inside three words before making the claim of debt.",
        },
        {
          feature: "Emphatic 'does'",
          example: "the sleep of a first week away does work that no early night manages",
          note: "Stresses that holiday sleep performs something ordinary sleep cannot — emphasis carried by grammar, not italics.",
        },
        {
          feature: "'Instead of' + causative gerund",
          example: "instead of letting them run dry for months on end",
          note: "Sets the two strategies side by side inside a single clause.",
        },
        {
          feature: "Parallel ellipted passives",
          example: "once every few years, saved for, and remembered for a lifetime",
          note: "Two purposes of the long holiday in five words, with the shared 'for' carrying both.",
        },
      ],
      coherence:
        "The essay answers direct questions with direct architecture: one paragraph for why holidays are needed, two for the choice — case, then concession and verdict — so the reader can tick each question off as it is answered. The introduction plants the financial frame ('repay that debt') that body one pays off and the conclusion cashes ('the way pay itself arrives'); 'reserves' runs from paragraph one to paragraph three, and 'the glow' of returning workers gives the fading argument its measurable clock. The concession paragraph opens by naming its own function — 'The long break deserves its defence' — so even the counter-argument feels like part of the plan.",
      alternativeExpressions: [
        { insteadOf: "draws down the same reserves", use: "slowly uses up the same energy" },
        { insteadOf: "tops the reserves up", use: "restores a little each time" },
        { insteadOf: "the glow has gone", use: "the freshness has worn off" },
        { insteadOf: "a standing joke", use: "a familiar complaint" },
        { insteadOf: "hedge the weather and the mishap", use: "protect against bad luck" },
        { insteadOf: "running on empty", use: "working with nothing left" },
      ],
      commonMistakes: [
        {
          wrong: "Holidays are important because people need to relax and enjoy their life.",
          right: "Sustained work shortens sleep, thins patience and lowers resistance to illness, and only uninterrupted time repays it.",
          reason: "'Relax and enjoy life' restates the question; the 'why' needs the mechanism of depletion and repayment.",
        },
        {
          wrong: "I think both options have advantages and disadvantages.",
          right: "For most working lives several shorter breaks are better, because the refreshment fades within weeks of returning.",
          reason: "Sitting on the fence fails the second question; the examiner needs a choice the writer will defend.",
        },
        {
          wrong: "According to a research, 70% of workers prefer short holidays.",
          right: "In most offices the tiredness of late spring is a standing joke — the glow of the last break has gone.",
          reason: "Invented statistics and 'a research' both cost marks; shared, checkable experience argues better than fake figures.",
        },
        {
          wrong: "One long holiday is better, however several short holidays are also good, but it depends.",
          right: "Only a long holiday permits the far journey; even so, as a default for an ordinary year, several shorter breaks keep the reserves from running dry.",
          reason: "A sentence of unresolved 'however … but' drifts; a concession must be followed by a verdict.",
        },
      ],
    },
    levelSamples: [],
    vocabularyBank: [
      { word: "annual leave", partOfSpeech: "phrase", meaning: "The paid holiday a worker is entitled to each year." },
      { word: "to draw down", partOfSpeech: "phrasal verb", meaning: "To reduce a stored amount — 'draws down the same reserves'." },
      { word: "reserves", partOfSpeech: "noun", meaning: "Stored energy, patience or money kept for later use." },
      { word: "anticipation", partOfSpeech: "noun", meaning: "The pleasure of looking forward to something." },
      { word: "to hedge", partOfSpeech: "verb", meaning: "To protect against risk by spreading it — here, across several breaks." },
      { word: "long weekend", partOfSpeech: "phrase", meaning: "A weekend extended to three or four days by an extra day off." },
      { word: "to run dry", partOfSpeech: "phrase", meaning: "To be used up entirely — 'letting reserves run dry'." },
    ],
    source: WRITING_BANK_SOURCE_NOTE,
  },
];
