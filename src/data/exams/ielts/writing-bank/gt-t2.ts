/**
 * General Training Task 2 bank (PROMPT 46, Part E).
 *
 * Four everyday essay tasks: an opinion task on a shared rest day for shop
 * workers, a discussion about neighbours who never speak, an
 * advantages-and-disadvantages task on car-free days, and a problem-solution
 * task on litter in parks and streets. Every task is an original assignment
 * with full model answer, planning notes, the eight-element analysis, a topic
 * vocabulary bank and level samples whose band comments are educational
 * estimates, never official scores.
 */

import type { WritingBankTask } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. Opinion essay — one shared rest day for shop workers
// ---------------------------------------------------------------------------

export const gt2OpinionSundays: WritingBankTask = {
  slug: "ielts-wb-gt2-opinion-sundays",
  title: "Opinion essay — one shared rest day for shop workers",
  channel: "gt",
  taskType: "task-2",
  family: "opinion",
  difficulty: 2,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In some countries, large shops and supermarkets open every day of the year, including weekends and public holidays. Some people believe that the staff who work in these shops deserve at least one common day of rest each week, when all large stores would close together. Do you agree or disagree with this idea?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-position",
      description: "States a clear position on the shared rest day in the first paragraph and keeps it to the end.",
      keywords: ["agree", "disagree", "believe", "in my view", "position", "convinced"],
    },
    {
      key: "on-the-question",
      description: "Answers the actual question — a common weekly rest day for retail staff — rather than shopping hours in general.",
      keywords: ["rest", "day off", "close", "staff", "worker", "shop", "week"],
    },
    {
      key: "developed-reasons",
      description: "Develops at least two reasons in separate body paragraphs with everyday examples such as shift rotas, family meals and weekend plans.",
      keywords: ["for example", "for instance", "shift", "rota", "family", "weekend", "colleague", "such as"],
    },
    {
      key: "counter-view",
      description: "Briefly acknowledges the other side — shopper convenience and worries about lost trade — before answering it.",
      keywords: ["admittedly", "however", "although", "convenience", "online", "rival", "of course"],
    },
    {
      key: "fresh-conclusion",
      description: "Closes with a short conclusion that restates the position in new words and adds no new arguments.",
      keywords: ["in conclusion", "to conclude", "overall", "to sum up", "finally"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question (2 minutes)",
      notes: [
        "The question is about one shared closing day a week, not about night work or long hours — keep every paragraph tied to the rest day.",
        "'Do you agree or disagree' means one clear position; even a half-agreeing essay must pick a side and defend it.",
        "The people at the centre are shop workers; shoppers and shop owners matter mainly as the counter-argument.",
      ],
    },
    {
      heading: "Step 2 — Choose a position and reasons from daily life (3 minutes)",
      notes: [
        "Position to defend: agree — a common rest day is worth more than seven-day convenience.",
        "Reason 1: fairness and health — weekend rotas fall on the newest staff, and tiredness quietly builds up.",
        "Reason 2: a day off only counts when family and friends are free too; scattered days off are lonely.",
        "Counter-view to answer: convenience for shoppers and fear of losing trade to rivals that stay open.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: paraphrase the situation, then state agreement in one plain sentence.",
        "Body 1: fairness and health — late rotas, cancelled plans, building tiredness.",
        "Body 2: shared time — the Tuesday-off problem, family meals, clubs and friends.",
        "Body 3: concession and answer — convenience is real but small; banks and post offices already close weekly.",
        "Conclusion: restate the trade-off in fresh words — a small loss for shoppers, a large gain for staff.",
      ],
    },
    {
      heading: "Step 4 — Everyday example bank (2 minutes)",
      notes: [
        "A Saturday shop worker who misses every family lunch because relatives work Monday to Friday.",
        "The new employee who always gets the Sunday shift because managers rarely take it themselves.",
        "Banks, schools and post offices that close one or two days a week without the economy collapsing.",
        "Avoid invented statistics; one believable cousin or neighbour is worth a made-up survey.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "In quite a few countries the lights of large shops never go out: supermarkets, malls and department stores open seven days a week, all year round. Some people argue that the staff who run these tills deserve at least one common day of rest each week, and I agree with them without hesitation. In my view, the convenience shoppers would lose is a small price to pay for predictable rest and a shared family life for retail workers.",
      "My first reason is fairness. When a shop trades every day, somebody must always cover the weekend, and in practice that somebody is the newest or least powerful employee, because managers rarely volunteer themselves. Weekend rotas arrive late, plans with friends collapse at short notice, and tiredness quietly builds up over months of broken weeks. One shared closing day removes this quiet pressure at a stroke: everyone, from supervisor to Saturday temp, knows in advance which day is protected.",
      "The second reason is that a day off only counts when other people are free too. A shop assistant resting on a Tuesday while relatives and friends sit in offices and classrooms has, in practical terms, no real day off at all. Families eat together, clubs train and old friends meet at the weekend precisely because that time is shared. That is how the traditional weekly rest day always worked, and the rhythm it created is still visible in the towns that have kept one.",
      "Admittedly, many shoppers have grown used to buying groceries on any day they choose, and shop owners fear losing trade to rivals that stay open. The loss, however, is smaller than it first appears. Customers simply move their shopping to another day, exactly as they already manage with banks, post offices and schools, and online orders now cover most genuine emergencies. Convenience bends; it does not break.",
      "In conclusion, I believe that closing large shops on one common day each week is a modest restriction that gives retail staff the two things seven-day trading quietly takes away: predictable rest and time with the people they love. That trade seems to me not merely fair but well worth making.",
    ],
    wordCount: 360,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — position stated",
        analysis:
          "Paraphrases the situation ('the lights of large shops never go out') and takes sides in the first paragraph — 'I agree with them without hesitation' — so the examiner never has to hunt for the position. The closing sentence prices the whole essay's trade: convenience against rest and family life.",
      },
      {
        role: "Body 1 — fairness and health",
        analysis:
          "Opens with a plain topic sentence ('My first reason is fairness') and develops it down the workplace hierarchy: the newest employee covers weekends 'because managers rarely volunteer themselves'. The closing formula 'at a stroke' turns the shared closing day into the solution of the paragraph's own problem.",
      },
      {
        role: "Body 2 — rest only counts when shared",
        analysis:
          "Builds the most human argument around one believable figure, the shop assistant resting on a Tuesday. The paragraph then generalises carefully — families, clubs, old friends — before grounding the idea in the traditional rest day 'still visible' in towns that kept one.",
      },
      {
        role: "Body 3 — concession and answer",
        analysis:
          "Gives the other side its due in one sentence each — habit ('grown used to') and fear of rivals — then answers both with everyday comparisons: banks, post offices, schools, online orders. The closing epigram 'Convenience bends; it does not break' settles the counter-argument in six words.",
      },
      {
        role: "Conclusion — the position in new words",
        analysis:
          "Returns to the introduction's trade-off with fresh vocabulary ('a modest restriction', 'the two things seven-day trading quietly takes away'). No new argument appears — the paragraph closes the case rather than reopening it.",
      },
    ],
    vocabulary: [
      { term: "at short notice", note: "Everyday idiom for plans cancelled close to the time they were made — natural GT register." },
      { term: "at a stroke", note: "A single decisive action: 'removes this quiet pressure at a stroke' compresses the whole benefit into one phrase." },
      { term: "in practical terms", note: "Signals that the writer is translating an abstract right (a day off) into lived reality." },
      { term: "a small price to pay", note: "The essay's central trade-off in a natural collocation; paraphrased later as 'a modest restriction'." },
      { term: "rotas", note: "The workplace word for staff schedules; 'weekend rotas arrive late' shows topic vocabulary used flexibly." },
      { term: "seven-day trading", note: "Compact noun phrase for shops being open all week — more precise than 'shops are always open'." },
      { term: "genuine emergencies", note: "Hedges the online-shopping argument honestly: most needs are not emergencies, so one closing day costs little." },
    ],
    grammar: [
      {
        feature: "Present simple for general truths",
        example: "When a shop trades every day, somebody must always cover the weekend",
        note: "The whole argument lives in the timeless present, which is the default tense of opinion essays.",
      },
      {
        feature: "Present perfect for built-up habit",
        example: "many shoppers have grown used to buying groceries on any day they choose",
        note: "The perfect tense links past habit to present expectation — exactly what a concession about convenience needs.",
      },
      {
        feature: "Defining relative clause with 'who'",
        example: "the staff who run these tills deserve at least one common day of rest",
        note: "The relative clause attaches the argument to real people rather than an abstract 'workers'.",
      },
      {
        feature: "Mid-sentence 'however' as a pivot",
        example: "The loss, however, is smaller than it first appears",
        note: "Turning the concession around inside one sentence saves a paragraph and shows punctuation control.",
      },
    ],
    coherence:
      "The essay runs position → fairness → shared time → concession → restated position, so each paragraph answers the one before it: body one names the pressure rotas create, body two explains why scattered rest does not count, and the concession paragraph answers the objection a sceptical reader is by then holding. Signposts are earned rather than pasted ('My first reason', 'The second reason', 'Admittedly … however', 'In conclusion'), and the reference chain ('that somebody', 'that time', 'The loss') carries the argument forward without repetitive nouns.",
    alternativeExpressions: [
      { insteadOf: "open seven days a week", use: "trade every day of the week / never close their doors" },
      { insteadOf: "a small price to pay", use: "a modest sacrifice / little to give up" },
      { insteadOf: "plans collapse at short notice", use: "arrangements are cancelled with little warning" },
      { insteadOf: "at a stroke", use: "in one move / at once" },
      { insteadOf: "grown used to", use: "come to expect / take for granted" },
      { insteadOf: "predictable rest", use: "rest they can rely on / a day they can plan around" },
    ],
    commonMistakes: [
      {
        wrong: "This essay shall elucidate why the aforementioned policy is beneficial for retail personnel.",
        right: "I will explain why I agree that shop staff deserve one shared day off.",
        reason: "Memorised 'essay shall elucidate' phrasing sounds borrowed rather than written; General Training rewards a natural semi-formal voice.",
      },
      {
        wrong: "Shop workers don't get proper rest and can't plan anything with their families.",
        right: "Shop workers do not get proper rest and cannot plan anything with their families.",
        reason: "Contractions belong to GT letters and speech; the semi-formal essay keeps full forms for a consistent tone.",
      },
      {
        wrong: "Some people think a rest day is good, but other people think shops should open, and both sides have strong arguments.",
        right: "I agree that a shared rest day matters more than seven-day convenience.",
        reason: "A balanced shrug is not a position; the opinion task demands a clear side chosen early and defended.",
      },
      {
        wrong: "Shopping is a popular activity and people spend a lot of money every weekend.",
        right: "The question is not whether people enjoy shopping but whether shop staff deserve one shared day off.",
        reason: "General background about shopping answers a question nobody asked and quietly starves Task Response.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "In my country big shops are open every day, also in the holidays. Some people say the shop workers should have one day free in the week when all shops close together. I agree with this idea because the workers are very tired and they need rest like everybody.",
        "Firstly, the shop workers work very long time and always at weekend. For example my cousin works in a supermarket and she never comes to our family lunch on Sunday, because the shop is open. She is always tired and she don't have free time with friends.",
        "Secondly, if all shops close on the same day, the workers can plan something. Now it is difficult, because when she is free on Tuesday, all people are working or studying. A rest day is good only when your family is also free.",
        "Some people say shopping is more easy if shops open every day. But people can buy on Monday or Saturday too, like the bank, it is closed on Sunday and nobody has a problem. In conclusion I agree the shops should close one day for the workers.",
      ],
      wordCount: 186,
      justification: [
        { criterion: "Task Response", note: "Takes a clear position and keeps it, with the cousin example doing real work; at 186 words the essay sits well under the 250-word floor — under-length responses are penalised — which caps this criterion regardless of content." },
        { criterion: "Coherence and Cohesion", note: "The four-paragraph shape is visible and 'Firstly/Secondly/In conclusion' scaffold the argument, but links stay mechanical and paragraph four merges counter-argument and conclusion into one breath." },
        { criterion: "Lexical Resource", note: "Everyday vocabulary is adequate ('free time', 'rest day'), with slips — 'very long time' for 'very long hours', 'more easy' for 'easier' — and repetition of 'work/workers' rather than range." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences are mostly controlled, but agreement slips recur ('she don't have'), 'more easy' doubles the comparative error, and sentence variety is narrow — a Band 6 error profile with meaning still clear." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "In plenty of countries, shopping has quietly become a seven-day habit: malls, supermarkets and retail parks keep their doors open through weekends and public holidays alike. I support the idea that staff in these large stores should be guaranteed one shared day of rest each week, because I believe the gains in fairness and family life clearly justify the small loss of convenience.",
        "The strongest argument is one of fairness. In any shop that trades daily, weekends must be covered, and that burden rarely spreads evenly: it settles on junior staff, part-timers and those least able to refuse. Weeks of unpredictable rotas leave people exhausted and socially stranded, since friends and relatives gather on exactly the days they are scheduled to work. A common closing day spreads that burden to zero.",
        "There is also the question of what a day off is actually worth. Rest taken alone, while everyone else is at a desk or in a classroom, restores the body but not much else. The traditional weekly break worked because it was shared — the same afternoon held the family lunch, the football match and the visit to grandparents. Scattered days off cannot reproduce that, however generous they look on paper.",
        "It is true that many customers now assume access to shops every day, and retailers fear handing trade to rivals that stay open. Yet societies already cope with weekly closures: banks, schools and post offices shut their doors one or two days a week without crisis, and online ordering absorbs the rest. Habit adjusts faster than the fear suggests.",
        "On balance, then, I believe one common rest day is a modest price for giving retail workers dependable rest and time shared with the people they live for — a bargain most communities would accept if asked.",
      ],
      wordCount: 296,
      justification: [
        { criterion: "Task Response", note: "A clear position is stated in the introduction, defended with two developed reasons and a properly answered objection; every paragraph serves the question asked, and length is comfortable." },
        { criterion: "Coherence and Cohesion", note: "Progression is managed rather than signposted to death: 'The strongest argument', 'There is also', 'Yet' and 'On balance, then' guide the reader while reference ('that burden', 'Scattered days off') stitches paragraphs together." },
        { criterion: "Lexical Resource", note: "Flexible, natural items — 'socially stranded', 'absorbs the rest', 'a bargain most communities would accept' — with collocation controlled and no memorised filler." },
        { criterion: "Grammatical Range and Accuracy", note: "A wide, largely error-free range: relative clauses, a 'since' clause, a three-part list ('the family lunch, the football match and the visit'), and a comparative close — consistent with the Band 7–8 boundary." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "rota", partOfSpeech: "noun", meaning: "A schedule showing which staff work which shifts and days." },
    { word: "at short notice", partOfSpeech: "phrase", meaning: "With little warning before something happens or is cancelled." },
    { word: "to trade", partOfSpeech: "verb", meaning: "To be open for business — 'shops that trade seven days a week'." },
    { word: "closing day", partOfSpeech: "noun", meaning: "A day on which a shop is shut; here, one shared by all large shops." },
    { word: "convenience", partOfSpeech: "noun", meaning: "The quality of being easy and trouble-free for the customer." },
    { word: "to build up", partOfSpeech: "phrasal verb", meaning: "To accumulate gradually — 'tiredness quietly builds up'." },
    { word: "predictable", partOfSpeech: "adjective", meaning: "Able to be planned for in advance — 'predictable rest'." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Discussion essay — neighbours who never speak
// ---------------------------------------------------------------------------

export const gt2DiscussionNeighbours: WritingBankTask = {
  slug: "ielts-wb-gt2-discussion-neighbours",
  title: "Discussion essay — neighbours who never speak",
  channel: "gt",
  taskType: "task-2",
  family: "discussion",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many apartment blocks and residential streets, people live side by side for years without ever saying more than hello. Some see this as a sad loss of community, while others believe modern life simply works better when neighbours keep a polite distance. Discuss both these views and give your own opinion.",
  requirements: [
    {
      key: "both-views",
      description: "Gives both views a genuine hearing — a paragraph each, with reasons — before judging them.",
      keywords: ["some people", "others", "those who", "first view", "second view", "argue", "believe"],
    },
    {
      key: "own-opinion",
      description: "States your own opinion clearly — in the introduction or after both views — and keeps it to the end.",
      keywords: ["in my opinion", "i believe", "on balance", "my own view", "i think"],
    },
    {
      key: "everyday-evidence",
      description: "Supports each view with everyday examples: parcels, lifts, borrowed tools, noise complaints, tired evenings.",
      keywords: ["for example", "for instance", "parcel", "lift", "noise", "gossip", "holiday", "such as"],
    },
    {
      key: "balanced-weight",
      description: "Treats the two views with roughly equal respect rather than dismissing one in a single sentence.",
      keywords: ["however", "admittedly", "on the other hand", "genuine", "case", "fair"],
    },
    {
      key: "fresh-conclusion",
      description: "Ends with a conclusion that weighs both views and restates the opinion in new words.",
      keywords: ["in conclusion", "to conclude", "overall", "in short", "to sum up"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question (2 minutes)",
      notes: [
        "Two views must both be discussed — the loss-of-community reading and the privacy reading; skipping either halves the task.",
        "'Give your own opinion' can sit in the introduction, after the second view, or both — but it must be unmistakable.",
        "The setting is neighbours in apartment blocks and streets, so examples belong at door, lift and garden-fence scale.",
      ],
    },
    {
      heading: "Step 2 — Evidence for each view from daily life (3 minutes)",
      notes: [
        "Loss: parcels taken in, plants watered, a knock when something is wrong, company for older residents living alone.",
        "Privacy: tired evenings without small talk, no forced coffee mornings, no gossip or long-running feuds about parking.",
        "Ask which fear is more real today — loneliness or intrusion; your answer becomes your opinion.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: describe the silence, name both views, state your lean.",
        "Body 1: the loss of community, led by its strongest case — the isolated older neighbour.",
        "Body 2: the case for distance, steel-manned rather than caricatured.",
        "Body 3: your opinion — small goodwill beats both silence and forced friendship.",
        "Conclusion: weigh both views in fresh words.",
      ],
    },
    {
      heading: "Step 4 — Register and phrase bank (2 minutes)",
      notes: [
        "Semi-formal throughout: contractions stay out, but 'a nod in the lift' is welcome — an everyday topic, not a journal article.",
        "Useful pivots: 'There is something to be said for…', 'The difficulty with this view is…', 'On balance…'.",
        "One concrete stairwell story outperforms three abstract sentences about 'modern society'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "In many apartment blocks and quiet streets, people share a lift, a staircase or a garden fence for years without exchanging more than a nod. Some see this silence as the slow death of community, while others insist modern life runs better when neighbours keep a polite distance. Both positions describe something real, but in my view we have lost more than we have gained, and a little everyday friendliness costs far less than it is worth.",
      "Those who mourn the loss have a genuine case. Neighbours were traditionally the people who took in a parcel, watered plants during a holiday or noticed when an elderly resident's curtains stayed closed all day. For people who live alone, that local network is a quiet safety net: a greeting in the stairwell may be the only conversation some residents have all week. Disputes about noise or shared repairs also settle more easily between people who know each other's names, because goodwill exists before the disagreement arrives.",
      "The defenders of distance, however, are not simply being cold. City life is crowded and demanding, and many people come home with nothing left for small talk; a polite nod in the lift can be a form of respect rather than rejection. Distance also spares both sides obligations nobody chose — nobody is cornered into coffee mornings, lending money or passing on news that becomes gossip. For shy or busy residents, a quiet corridor is closer to comfort than to coldness.",
      "On balance, though, the second view misdescribes the choice on offer. Nobody is deciding between forced intimacy and total silence; the realistic alternative is ordinary, low-cost goodwill. A word about the weather while the lift climbs, a note through the door when a parcel arrives, a hand with a pushchair on the stairs — such habits keep the safety net intact without demanding closeness, and they serve the isolated neighbour as well as the exhausted worker.",
      "In short, privacy protects something genuine, and so did the community it replaced. But because friendliness here asks so little — a greeting, a note, a held door — and protects the most vulnerable first, neighbours should take that first small step more often than city life now encourages.",
    ],
    wordCount: 366,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the scene and the lean",
        analysis:
          "Opens with a shared-geometry image ('share a lift, a staircase or a garden fence') that keeps the topic at door-scale, names both views compactly, and tips the writer's hand ('in my view we have lost more than we have gained') without yet arguing — the discussion family's calm opening move.",
      },
      {
        role: "Body 1 — the loss of community, steel-manned",
        analysis:
          "Leads with the strongest case (the elderly resident's closed curtains) rather than vague nostalgia, and converts it into the 'quiet safety net' metaphor. The closing sentence adds the practical argument — disputes settle 'because goodwill exists before the disagreement arrives' — so the view earns respect before it is qualified.",
      },
      {
        role: "Body 2 — the case for distance, fairly made",
        analysis:
          "Refuses to caricature: the paragraph grants that a nod 'can be a form of respect rather than rejection' and lists real costs of closeness (coffee mornings, money, gossip). 'However' turns the essay from exposition toward judgement, preparing the opinion paragraph.",
      },
      {
        role: "Body 3 — the own opinion, built on a distinction",
        analysis:
          "The judgement reframes the choice: not intimacy versus silence but 'ordinary, low-cost goodwill'. Three concrete micro-examples in a list (weather, parcel note, pushchair) make the proposal testable against daily life, and the final clause names who benefits most.",
      },
      {
        role: "Conclusion — weighing in fresh words",
        analysis:
          "Grants both views one clause each ('privacy protects something genuine, and so did the community it replaced') before repeating the recommendation in new words. The essay closes on behaviour ('take that first small step'), not on a new argument.",
      },
    ],
    vocabulary: [
      { term: "without exchanging more than a nod", note: "Understatement that paints the scene in five words; GT register at its most natural." },
      { term: "a quiet safety net", note: "Metaphor for informal neighbourly support — 'quiet' keeps the claim modest and believable." },
      { term: "spares both sides obligations nobody chose", note: "Nominalised phrasing ('obligations') compresses the social pressure of forced friendliness into one noun." },
      { term: "misdescribes the choice on offer", note: "A verb for rejecting a framing rather than a fact — the pivot of a discussion essay." },
      { term: "low-cost goodwill", note: "A compound label the essay coins for its own proposal; precise and memorable." },
      { term: "closer to comfort than to coldness", note: "Parallel prepositional phrasing that ends the privacy paragraph without dismissing it." },
    ],
    grammar: [
      {
        feature: "'While' as a contrast connector",
        example: "Some see this silence as the slow death of community, while others insist modern life runs better",
        note: "One sentence carries both views — the compact way a discussion introduction sets the table.",
      },
      {
        feature: "Past habitual for tradition",
        example: "Neighbours were traditionally the people who took in a parcel",
        note: "Past simple plus 'traditionally' contrasts the old network with the present without a tense lecture.",
      },
      {
        feature: "Semi-colon joining contrasted clauses",
        example: "Nobody is deciding between forced intimacy and total silence; the realistic alternative is ordinary, low-cost goodwill",
        note: "The semi-colon makes the reframing feel like one thought, and shows punctuation range examiners credit.",
      },
      {
        feature: "List of three parallel noun phrases",
        example: "A word about the weather while the lift climbs, a note through the door when a parcel arrives, a hand with a pushchair on the stairs",
        note: "Parallel structure turns three tiny scenes into one cumulative argument — rhythm doing persuasive work.",
      },
    ],
    coherence:
      "The essay's spine is fair-then-judge: each view receives its strongest available case before any verdict appears, so the opinion paragraph lands as a decision rather than a prejudice. Signposts are varied by function — 'however' turns, 'On balance, though' weighs, 'In short' closes — and phrases created early ('safety net', 'low-cost goodwill') reappear across paragraphs, giving the response an inner vocabulary that ties it together without mechanical linkers.",
    alternativeExpressions: [
      { insteadOf: "without exchanging more than a nod", use: "barely on speaking terms / hardly more than strangers" },
      { insteadOf: "a quiet safety net", use: "an informal support network" },
      { insteadOf: "spares both sides obligations", use: "frees people from duties they never agreed to" },
      { insteadOf: "misdescribes the choice on offer", use: "frames the question wrongly" },
      { insteadOf: "closer to comfort than to coldness", use: "a relief rather than a rejection" },
      { insteadOf: "take that first small step", use: "make the first move" },
    ],
    commonMistakes: [
      {
        wrong: "It is universally acknowledged that communal solidarity has deteriorated in contemporary urban milieus.",
        right: "Many people feel that neighbourhood life has grown colder in modern cities.",
        reason: "Borrowed academic phrasing ('milieus', 'universally acknowledged') overshoots an everyday topic and reads as memorised rather than understood.",
      },
      {
        wrong: "Some people think neighbours should talk, others think privacy is better, and I will discuss both sides below.",
        right: "While both views have merit, I believe a little everyday friendliness is worth the effort.",
        reason: "Announcing the essay instead of stating an opinion delays the position; examiners want the writer's lean visible early.",
      },
      {
        wrong: "The first view is obviously wrong because humans need community.",
        right: "Those who mourn the loss have a genuine case, yet distance also protects busy residents from unwanted obligations.",
        reason: "Dismissing one view in a sentence unbalances a discussion task and caps Task Response at half its job.",
      },
      {
        wrong: "Neighbours shouldn't interfere in each other's private lives, so it's better to stay silent.",
        right: "Neighbours should not interfere in each other's private lives, though politeness costs nothing.",
        reason: "Contractions fit GT letters but weaken the semi-formal essay tone this task expects.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Nowadays people in apartment buildings live many years near each other but they never talk, only hello in the elevator. Some people think this is bad for community, other people think privacy is better for modern life. I will discuss both views and give my opinion.",
        "On one hand, neighbours can help each other very much. For example, my neighbour take my parcel when I am not at home and she check my flowers in holiday. Old people who live alone feel less lonely if somebody talk to them. Also if neighbours know each other, they can solve problems about noise more easy.",
        "On other hand, privacy is also important. Many people come home very tired from work and they don't want small talk in the stairs. Some neighbours are too interested in your life and they tell everything to everybody, this is annoying. Maybe quiet is more comfortable for shy persons.",
        "In my opinion, both views have good points but the first view is stronger. We don't need to be best friends with neighbours but a little talk is nice and help old people. In conclusion, I think people should try to know their neighbours a little, because community is important for everybody.",
      ],
      wordCount: 204,
      justification: [
        { criterion: "Task Response", note: "Both views receive a real paragraph each and an opinion appears, but at 204 words the essay runs well under the 250-word floor — under-length work is penalised — and ideas stay listed rather than developed." },
        { criterion: "Coherence and Cohesion", note: "A visible four-part shape with functional linkers ('On one hand', 'On other hand', 'In conclusion'), though 'On other hand' drops the article and the opinion paragraph merges with the conclusion." },
        { criterion: "Lexical Resource", note: "Everyday vocabulary mostly fits the topic ('parcel', 'small talk'), with repetition of 'talk' and 'neighbours', and 'shy persons' and 'solve problems more easy' showing limited range and word-formation slips." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences keep meaning clear, but agreement errors recur ('neighbour take', 'she check', 'somebody talk') alongside contractions ('don't'), keeping accuracy in the Band 6 range." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "In many modern blocks of flats, residents pass each other in the corridor for years without a word beyond a polite greeting. To some, this distance marks the erosion of neighbourhood life; to others, it is simply the arrangement that suits busy, crowded cities best. My own feeling is that the loss is real, but that its cure is smaller than either side suggests.",
        "The case for community is easy to underestimate. Neighbours once provided a network nobody had to organise: parcels were taken in, plants watered, and an elderly resident's unopened curtains noticed within a day. For people who live alone, a brief exchange by the mailboxes may be the only conversation of the week, and disagreements about noise or repairs are resolved faster when the parties already know each other.",
        "That said, the preference for privacy deserves a fair hearing. Urban life drains people, and small talk at the end of a long shift can feel like one more demand. Keeping neighbourly contact light also removes obligations that once caused real friction — borrowed money, unwanted advice, gossip that travels from stairwell to stairwell. For many residents, distance is not hostility but a quiet boundary.",
        "Between the two positions lies the option I would defend: modest, low-maintenance goodwill. Greeting a neighbour by name, accepting a parcel without ceremony, offering help when the lift breaks down — none of this requires friendship, yet it preserves most of the safety net that community once provided. It costs a few seconds a week and asks for nothing in return.",
        "In conclusion, I believe the silent corridor reflects a genuine loss, but not one that demands a return to village-style closeness. A middle habit of small, regular kindnesses would protect vulnerable residents while leaving everyone's privacy intact.",
      ],
      wordCount: 293,
      justification: [
        { criterion: "Task Response", note: "Both views are argued in turn and the opinion is explicit from the introduction onward; every paragraph advances the set task, and the 'middle habit' proposal shows a position rather than a shrug." },
        { criterion: "Coherence and Cohesion", note: "Paragraph roles are unmistakable, reference ('that said', 'the two positions', 'the option I would defend') carries the turn-taking, and the conclusion's 'silent corridor' picks up the opening image to close the frame." },
        { criterion: "Lexical Resource", note: "Precise, natural collocation — 'unopened curtains noticed within a day', 'low-maintenance goodwill', 'a quiet boundary' — with no strain and no memorised padding." },
        { criterion: "Grammatical Range and Accuracy", note: "Wide and accurate: passives ('parcels were taken in'), inversion ('Between the two positions lies…'), and parallel -ing subjects ('Greeting… accepting… offering…'), sustaining the top of Band 7." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "neighbourly", partOfSpeech: "adjective", meaning: "Friendly and helpful in the manner of a good neighbour." },
    { word: "to take in (a parcel)", partOfSpeech: "phrasal verb", meaning: "To accept a delivery on someone's behalf and keep it for them." },
    { word: "small talk", partOfSpeech: "noun", meaning: "Light, polite conversation about unimportant things." },
    { word: "goodwill", partOfSpeech: "noun", meaning: "A friendly, cooperative attitude between people." },
    { word: "boundary", partOfSpeech: "noun", meaning: "A line marking what is acceptable; here, a social limit between neighbours." },
    { word: "to be cornered into", partOfSpeech: "phrase", meaning: "To be forced into an awkward situation with no easy way out." },
    { word: "gossip", partOfSpeech: "noun", meaning: "Casual talk about other people's private lives, often unkind." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Advantages and disadvantages — car-free days in town centres
// ---------------------------------------------------------------------------

export const gt2AdvantagesCarFree: WritingBankTask = {
  slug: "ielts-wb-gt2-advantages-car-free",
  title: "Advantages and disadvantages — car-free days in town centres",
  channel: "gt",
  taskType: "task-2",
  family: "advantages-disadvantages",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "To reduce traffic and pollution, some cities now close their central streets to private cars on certain days of the week. Do the advantages of this policy for local people outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-verdict",
      description: "States a clear verdict early — advantages or disadvantages outweigh — and holds it to the end.",
      keywords: ["outweigh", "more", "believe", "in my view", "i think", "on balance"],
    },
    {
      key: "both-sides-real",
      description: "Presents genuine advantages and genuine disadvantages for local people, not a token nod to one side.",
      keywords: ["advantage", "benefit", "disadvantage", "drawback", "however", "admittedly", "downside"],
    },
    {
      key: "local-lens",
      description: "Keeps the whole answer focused on local people — residents, shoppers, shop owners — rather than tourists or the planet in general.",
      keywords: ["residents", "local", "shoppers", "shop", "people", "families", "business"],
    },
    {
      key: "developed-examples",
      description: "Develops body paragraphs with everyday examples: pushchairs on wide pavements, market stalls, heavy shopping, delivery vans, parking searches.",
      keywords: ["for example", "for instance", "delivery", "parking", "bus", "market", "such as", "children"],
    },
    {
      key: "weighing-conclusion",
      description: "Closes by weighing the two sides in fresh words and repeating the verdict, not by listing new points.",
      keywords: ["in conclusion", "on balance", "to conclude", "overall", "to sum up"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question (2 minutes)",
      notes: [
        "The task word is 'outweigh': both sides must appear, but one must win — a balanced draw fails the question.",
        "The judge of the verdict is 'local people': filter every point through residents, shoppers and small shop owners.",
        "'Certain days' means a part-week policy; do not drift into arguing about banning cars forever.",
      ],
    },
    {
      heading: "Step 2 — Collect both sides at street level (3 minutes)",
      notes: [
        "Advantages: fresher air, quiet streets, safe cycling and walking, market-street atmosphere, fuller pavements for cafés.",
        "Disadvantages: heavy shopping without a car, delivery access for small shops, displaced parking in streets just outside the zone, mobility limits.",
        "Verdict to defend: advantages outweigh — provided the city adds buses, edge parking and early-morning delivery windows.",
      ],
    },
    {
      heading: "Step 3 — Paragraph map (3 minutes)",
      notes: [
        "Introduction: name the policy, state the verdict with its condition.",
        "Body 1: advantages, led by what residents feel first — air, noise, safe streets.",
        "Body 2: disadvantages, named honestly and attached to specific people.",
        "Body 3: the weighing — why the disadvantages shrink when the policy is run well.",
        "Conclusion: restate the verdict in fresh words.",
      ],
    },
    {
      heading: "Step 4 — Everyday example bank (2 minutes)",
      notes: [
        "A parent cycling with a child on a car-free Sunday; a market that spreads onto the roadway.",
        "The weekly grocery shop carried from a distant car park; a florist waiting for a van at seven in the morning.",
        "Drivers circling side streets at the zone's edge — the nuisance that moves rather than disappears.",
        "Keep numbers out unless you can defend them; one honest scene beats an invented statistic.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "A growing number of towns now close their central streets to private cars on one or two days each week, hoping to calm traffic and clean the air. For the people who actually live, shop and trade in those streets, I believe the advantages of this policy clearly outweigh the disadvantages, provided the city pairs it with decent alternatives.",
      "The benefits are the ones residents feel first. On car-free days the air along narrow shopping streets is fresher and the constant engine noise drops away, which people living above the shops notice within a morning. More importantly, the street itself becomes usable rather than merely passable: children cycle to the library without a parent gripping their hand, market stalls spread onto the roadway, and cafés put out extra tables. Pavements full of walkers are also good for trade, since people on foot stop and buy in ways drivers never do.",
      "The costs, however, fall on particular people, and honesty requires naming them. Families doing a weekly grocery shop lose the door-to-door boot their routine was built around, and residents with limited mobility lose it entirely. Small businesses depend on delivery vans that cannot simply evaporate, and on the streets just outside the zone, drivers circle for parking, so the noise and fumes move rather than vanish. These are real annoyances, and a city that pretends otherwise will lose residents' patience quickly.",
      "On balance, though, most of these disadvantages can be engineered away, while the advantages cannot be had any other way. Extra buses and cheap parking at the edge of the zone carry the heavy shopping; early-morning delivery windows keep vans and quiet streets apart; a badge exemption protects the drivers who genuinely need the door. What remains is an irritation — a longer walk from the car park — set against air families can breathe and streets their children can use.",
      "In conclusion, for the people who live and trade there, a part-week car-free street gives more than it takes: fresher air, safer walking and busier shop fronts on one side of the scales, and on the other a longer walk and some rescheduled deliveries. Weighed honestly, I do not think the comparison is close.",
    ],
    wordCount: 365,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the verdict with its condition",
        analysis:
          "Paraphrases the policy ('close their central streets to private cars on one or two days each week'), names the judges ('the people who actually live, shop and trade in those streets') and rules on 'outweigh' in the first paragraph — 'clearly outweigh' — with the condition ('provided the city pairs it with decent alternatives') that body four will honour.",
      },
      {
        role: "Body 1 — advantages, led by the senses",
        analysis:
          "Orders the benefits by how quickly residents feel them: air and noise in the first morning, then the usable street, then trade. The pivotal contrast 'usable rather than merely passable' reframes the street from corridor to place, and each advantage arrives with its everyday user (children, stalls, cafés, walkers).",
      },
      {
        role: "Body 2 — disadvantages, honestly distributed",
        analysis:
          "Refuses the straw man: each cost is attached to a named group — shopping families, residents with limited mobility, van-dependent small businesses, and neighbours at the zone's edge where 'the noise and fumes move rather than vanish'. The closing warning about losing 'residents' patience' makes fairness itself an argument.",
      },
      {
        role: "Body 3 — the weighing, solution by solution",
        analysis:
          "This is the paragraph that answers 'outweigh': three matched fixes (buses and edge parking, delivery windows, badge exemption) shrink the named disadvantages one by one, while 'cannot be had any other way' argues the advantages are irreplaceable. The closing scales image ends the weighing in physical terms.",
      },
      {
        role: "Conclusion — the verdict restated, still balanced",
        analysis:
          "Repeats the ruling in new words ('gives more than it takes') and shows both pans of the scales one last time before closing: 'I do not think the comparison is close.' No new argument — the paragraph is a verdict, not a fresh case.",
      },
    ],
    vocabulary: [
      { term: "hoping to calm traffic and clean the air", note: "Two-purpose infinitive phrase that paraphrases 'reduce traffic and pollution' without copying it." },
      { term: "usable rather than merely passable", note: "The essay's sharpest distinction: a street as a place to spend time in, not a tube to drive through." },
      { term: "engineered away", note: "Argues that a disadvantage is a design problem, not a fate — the load-bearing phrase of the weighing paragraph." },
      { term: "a badge exemption", note: "Concrete policy vocabulary; the specific noun proves the writer can imagine the scheme working." },
      { term: "door-to-door boot", note: "Everyday compound noun phrase — 'boot' grounds the grocery-shop argument in a real car; GT register at its best." },
      { term: "move rather than vanish", note: "Honest verb pair conceding that displaced parking is a genuine, if lesser, harm." },
    ],
    grammar: [
      {
        feature: "'Provided' conditional",
        example: "the advantages of this policy clearly outweigh the disadvantages, provided the city pairs it with decent alternatives",
        note: "A conditional concession built into the thesis: the verdict survives, but only if the fixes follow — precise argument grammar.",
      },
      {
        feature: "Modal passive for designability",
        example: "most of these disadvantages can be engineered away",
        note: "Modal plus passive keeps the agent general (the city) while making a claim about solvability, not blame.",
      },
      {
        feature: "Pseudo-cleft for weighing",
        example: "What remains is an irritation — a longer walk from the car park",
        note: "A 'what' structure shrinks the disadvantage rhetorically: grammar performing the weighing.",
      },
      {
        feature: "'Since' causal clause inside an argument",
        example: "Pavements full of walkers are also good for trade, since people on foot stop and buy in ways drivers never do",
        note: "The causal clause converts an observation into a mini-argument inside one sentence.",
      },
    ],
    coherence:
      "The essay is built as a case that survives its own counter-evidence: the verdict appears first, body one builds it, body two states the strongest opposition in its own terms, and body three answers that opposition point by point before the conclusion re-weighs. Connective work is done by meaning as much as by markers — 'however' turns, 'On balance, though' sums, 'provided' conditions — and paired nouns introduced early (usable street, door-to-door boot, edge of the zone) reappear in the weighing paragraph, so the refutation fits the objections like a key.",
    alternativeExpressions: [
      { insteadOf: "close their central streets to private cars", use: "bar private cars from the town centre" },
      { insteadOf: "the air … is fresher", use: "the air feels noticeably cleaner" },
      { insteadOf: "engineered away", use: "designed out / fixed by planning" },
      { insteadOf: "door-to-door boot", use: "the convenience of loading shopping at the door" },
      { insteadOf: "move rather than vanish", use: "shifted, not solved" },
      { insteadOf: "I do not think the comparison is close", use: "the balance is not a difficult one to strike" },
    ],
    commonMistakes: [
      {
        wrong: "Car-free days save the planet and stop climate change, which is the biggest issue of our time.",
        right: "Car-free days give local residents fresher air and quieter streets.",
        reason: "The question asks about local people, not the planet; drifting into global argument leaves the actual task half-answered.",
      },
      {
        wrong: "There are many advantages and also many disadvantages, as I will now explain.",
        right: "I believe the advantages outweigh the disadvantages, provided the city adds buses and edge parking.",
        reason: "'Outweigh' demands a verdict; announcing a list without a ruling postpones the answer the task exists to test.",
      },
      {
        wrong: "Furthermore, it is a double-edged sword which has two sides.",
        right: "The policy's costs fall on shoppers with heavy bags and on shops needing deliveries.",
        reason: "Memorised coinages like 'double-edged sword' fill lines without saying anything; the examiner counts content, not decoration.",
      },
      {
        wrong: "On car-free day the street was very nice and everybody happy.",
        right: "On car-free days the streets are noticeably quieter, and cafés put out extra tables.",
        reason: "Missing articles and verbless clauses read as careless; an essay needs full, checked sentences even at speed.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Nowadays some cities close the centre for private cars on some days, for example Sunday. This idea has advantages and disadvantages for local people. I think the advantages are bigger than the disadvantages.",
        "Firstly, the air in the centre is better when no cars. Children can play and ride bicycle on the street, and old people can walk easy. Also the shops and cafes get more customers because people like to walk when the street is quiet and clean. My city has this day and everybody take photos in the street.",
        "However, there are problems too. Some people need the car for shopping, it is heavy to carry bags from far parking. The shops need delivery every day and if van cannot come, they lose money. Also the streets near the centre become full of cars who search parking.",
        "But these problems have solutions. The city can put more buses and a cheap parking outside the centre, and delivery can come in the early morning. In conclusion, I believe car-free days are more good than bad for local people, if the city helps with buses and parking.",
      ],
      wordCount: 187,
      justification: [
        { criterion: "Task Response", note: "A verdict is present from paragraph one and both sides get real space, but at 187 words the response sits well under the 250-word floor — under-length work is penalised — and ideas are asserted more than developed." },
        { criterion: "Coherence and Cohesion", note: "The advantage–disadvantage–solution shape is clear and 'However' and 'In conclusion' do their jobs, though linking leans on 'Also', and the final paragraph blends fixes with the conclusion." },
        { criterion: "Lexical Resource", note: "Topic words are mostly right ('delivery', 'parking', 'customers'), but 'more good than bad', 'walk easy' and 'cars who search parking' show limited range and slips." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences mostly hold, with recurring errors — 'when no cars' (missing verb), 'everybody take', 'ride bicycle' (article missing) — a Band 6 accuracy profile with meaning intact." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "A number of towns have begun reserving some of their central streets for walkers and cyclists on particular days each week. Judged from the point of view of those who live and run businesses there, I would argue that the benefits of this arrangement comfortably outweigh its drawbacks — as long as the council supplies the alternatives that make it workable.",
        "The gains are immediate and widely shared. Without a stream of engines, the air in narrow streets freshens and the background roar subsides, something residents living above the shops register at once. The road surface itself changes character: children cycle beside their parents, stallholders spread out, and café tables multiply, because space once surrendered to moving metal returns to people. Shopkeepers often find, contrary to their fears, that slow traffic spends more than fast traffic.",
        "The drawbacks deserve equal honesty. A weekly shop becomes an expedition if the car must be left at the edge of the zone, and for residents with mobility problems the loss is not an inconvenience but a barrier. Deliveries need reorganising, not cancelling, and the streets ringing the centre can absorb the displaced parking, with drivers touring the same few blocks in search of a space.",
        "Yet nearly every one of these problems has a workable answer: shuttle buses and cheap edge-of-zone car parks for the shopping, exemption badges for those who truly need the door, and early-morning windows for the vans. Once those pieces exist, the remaining disadvantage is essentially a short walk, while the cleaner, calmer streets cannot be bought back by any other policy.",
        "On balance, therefore, I consider the part-week closure a good bargain for local people: they surrender a little convenience and gain air, quiet and a street that belongs to them again.",
      ],
      wordCount: 293,
      justification: [
        { criterion: "Task Response", note: "The ruling ('comfortably outweigh') is stated in the introduction and defended through matched counter-argument and fixes; every paragraph stays on local people, and the closing bargain image answers 'outweigh' directly." },
        { criterion: "Coherence and Cohesion", note: "The argument is sequenced as claim, opposition, remedy, verdict; cohesive items are varied and earned ('Yet', 'Once those pieces exist', 'On balance, therefore'), and 'the door' and 'the zone' carry meaning economically across paragraphs." },
        { criterion: "Lexical Resource", note: "Natural precision throughout — 'the background roar subsides', 'space once surrendered to moving metal', 'a barrier' rather than 'an inconvenience' — with collocation and register controlled." },
        { criterion: "Grammatical Range and Accuracy", note: "A wide, largely faultless range: 'as long as' conditionals, negatives for contrast ('not an inconvenience but a barrier'), and a three-part close ('air, quiet and a street'), supporting the Band 7–8 boundary." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "to outweigh", partOfSpeech: "verb", meaning: "To be greater or more important than something else — the task's key verb." },
    { word: "exemption", partOfSpeech: "noun", meaning: "Permission to ignore a rule — e.g. drivers with badges allowed into the zone." },
    { word: "displaced", partOfSpeech: "adjective", meaning: "Moved from its usual place — 'displaced parking' around a car-free zone." },
    { word: "passable", partOfSpeech: "adjective", meaning: "Possible to travel through — the model contrasts it with 'usable'." },
    { word: "to subside", partOfSpeech: "verb", meaning: "To become less intense — noise that fades away." },
    { word: "drawback", partOfSpeech: "noun", meaning: "A disadvantage or negative feature of a plan." },
    { word: "shuttle bus", partOfSpeech: "noun", meaning: "A bus running back and forth on a short route, e.g. car park to centre." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Problem and solution — litter in parks and streets
// ---------------------------------------------------------------------------

export const gt2ProblemSolutionLitter: WritingBankTask = {
  slug: "ielts-wb-gt2-problem-solution-litter",
  title: "Problem and solution — litter in parks and streets",
  channel: "gt",
  taskType: "task-2",
  family: "problem-solution",
  difficulty: 2,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many towns, litter dropped in parks, streets and other public places has become noticeably worse in recent years. What problems does this cause for local people, and what can be done to solve them?",
  requirements: [
    {
      key: "clear-stance",
      description: "Opens with a clear stance — the problem is serious but solvable — and keeps that view to the end.",
      keywords: ["serious", "believe", "in my view", "clearly", "solvable", "i think"],
    },
    {
      key: "both-parts",
      description: "Answers BOTH parts: at least two concrete problems and a matching set of solutions, in similar depth.",
      keywords: ["problem", "cause", "solve", "solution", "measure", "answer", "fix"],
    },
    {
      key: "problems-concrete",
      description: "Names concrete problems — health risks near play areas, injury from glass, council costs, lost pride — not just 'it looks bad'.",
      keywords: ["health", "glass", "rats", "cost", "council", "children", "danger", "pride"],
    },
    {
      key: "solutions-matched",
      description: "Matches each solution to a problem and develops both with everyday examples — emptied bins, wardens' fines, school campaigns, volunteer clean-ups.",
      keywords: ["bin", "fine", "penalty", "volunteer", "school", "campaign", "clean-up", "enforce"],
    },
    {
      key: "fresh-conclusion",
      description: "Closes with a short summary in new words — problems and remedies together — adding no new arguments.",
      keywords: ["in conclusion", "in short", "to sum up", "overall", "to conclude"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question (2 minutes)",
      notes: [
        "Two parts, two jobs: name the problems, then offer solutions — an essay that only complains answers half the task.",
        "'For local people' keeps the lens on residents: health, safety, cost and pride rather than oceans and wildlife in general.",
        "Solutions must match the problems you chose; the second paragraph buys the third one.",
      ],
    },
    {
      heading: "Step 2 — Problems at street level (3 minutes)",
      notes: [
        "Health and safety: food waste attracting rats and wasps near playgrounds; broken glass and torn cans hurting children and dogs.",
        "Money: every hour of council picking is an hour not spent on pools, libraries or repairs.",
        "Feeling: litter says nobody cares, and one dropped bag invites the next — the spiral of neglect.",
      ],
    },
    {
      heading: "Step 3 — Solutions that match (3 minutes)",
      notes: [
        "Authority: more bins, but emptied often; fines enforced by wardens at the worst spots.",
        "Habit: school campaigns — children police their parents; monthly volunteer mornings with café drinks donated.",
        "Design: bins near benches, less throwaway packaging at kiosks, signs naming the volunteers who keep a field clean.",
      ],
    },
    {
      heading: "Step 4 — Paragraph map and example bank (2 minutes)",
      notes: [
        "Introduction: one sensory scene, then the stance — serious, but solvable with firm rules plus changed habits.",
        "Body 1: problems in pairs — health and safety first, then cost, then the pride spiral as the deepest.",
        "Body 2: authority-led solutions, each tied to a named problem.",
        "Body 3: habit-led solutions — schools, volunteers, small design changes.",
        "Conclusion: one sentence of problem, one of remedy, in fresh words.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "On a Monday morning in the park of almost any town, the weekend tells on itself: crisp packets under the benches, cans in the flowerbeds, a plastic bag turning slowly in the hedge. Litter of this kind has grown noticeably worse, and while it may look like a small problem, I believe it is a serious one — and a solvable one, if firm local rules are joined to changed everyday habits.",
      "The damage goes well beyond untidiness. Food wrappers and half-drunk drinks attract rats and wasps, a genuine health worry near playgrounds and food stalls, while broken glass and torn cans go on injuring children and dogs long after the picnic that produced them is forgotten. There is a quieter cost as well: every hour a council spends picking up after strangers is an hour not spent on pools, libraries or mended paths. And litter spreads a message of its own — a street that looks abandoned tells every passer-by that nobody cares, and the next bag lands more easily than the first.",
      "Several remedies have proved their worth, provided they are applied together. Plainly, more bins help, but only if they are emptied often — an overflowing bin teaches exactly the opposite lesson to the one intended. Fixed penalties for dropping rubbish, enforced by wardens at the worst black spots, catch attention where posters alone never have. Councils should also work through schools, since children who tidy their own park tend to lecture their parents at home, which is persuasion no campaign poster can buy.",
      "Beyond rules, the sturdier fix is local pride, because people protect places they feel they own. Towns that hold a monthly clean-up morning — volunteers, gloves, hot drinks paid for by a nearby café — report steadier results than fines alone, and the event itself reintroduces neighbours to one another. Small design choices matter too: bins placed where people actually sit, stalls using less throwaway packaging, a sign naming the volunteers who keep a field clean — all convert care into something visible.",
      "In short, careless rubbish harms health, budgets and a town's picture of itself, and it will not retreat on its own. Bins that are actually emptied, fines that are actually applied, and neighbours who turn up once a month are, together, a realistic route back to streets people can be proud of.",
    ],
    wordCount: 386,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — a scene, then a stance",
        analysis:
          "Opens with a three-item picture (crisp packets, cans, a plastic bag) that proves the writer has stood in the park, then delivers the two-part stance the essay will defend: 'a serious one — and a solvable one'. The formula 'firm local rules … joined to changed everyday habits' previews the two solution paragraphs.",
      },
      {
        role: "Body 1 — problems in rising order",
        analysis:
          "Arranges three problems from the physical to the financial to the psychological: health and safety first ('rats and wasps', 'broken glass'), the council-hour trade-off second, and the pride spiral last, where 'the next bag lands more easily than the first' names the mechanism of decline.",
      },
      {
        role: "Body 2 — authority-led solutions",
        analysis:
          "Each remedy is tied to a failure mode: bins 'only if they are emptied often' (or they teach the opposite lesson), fines 'enforced by wardens at the worst black spots', schools because children 'lecture their parents at home'. The paragraph argues with conditions, not slogans.",
      },
      {
        role: "Body 3 — habit-led solutions",
        analysis:
          "Moves from enforcement to ownership: 'people protect places they feel they own' is the sentence the whole paragraph hangs from, and the clean-up morning comes with sensory detail (gloves, hot drinks, a café) that keeps it believable. The design list ends by making care 'visible'.",
      },
      {
        role: "Conclusion — problem and remedy in one breath",
        analysis:
          "Compresses the three problems into three nouns ('health, budgets and a town's picture of itself') and the solutions into two 'actually' clauses plus the volunteer habit — repetition used deliberately for emphasis, closing the essay with rhythm rather than new material.",
      },
    ],
    vocabulary: [
      { term: "the weekend tells on itself", note: "A fresh image for evidence left behind; scene-setting that avoids 'nowadays' openings." },
      { term: "goes on injuring", note: "'Go on + -ing' presents the harm as continuing — more precise than simply 'is dangerous'." },
      { term: "black spots", note: "The standard term for the worst locations of a recurring problem — precise, everyday public-service vocabulary." },
      { term: "persuasion no campaign poster can buy", note: "A negated comparison that argues cost-effectiveness without citing numbers." },
      { term: "the sturdier fix", note: "'Sturdy' judges the solution's durability, not just its popularity — evaluative vocabulary earning its place." },
      { term: "throwaway packaging", note: "Compact everyday compound standing in for 'single-use packaging' — register-appropriate specificity." },
      { term: "a realistic route back", note: "Hedged optimism: the conclusion promises direction, not miracles." },
    ],
    grammar: [
      {
        feature: "'While' concession in the thesis",
        example: "while it may look like a small problem, I believe it is a serious one",
        note: "The concessive 'while … may' acknowledges the objection inside the thesis itself — the stance survives its own counter-argument.",
      },
      {
        feature: "'Only if' restrictive conditional",
        example: "more bins help, but only if they are emptied often",
        note: "A restrictive conditional converts a weak solution into a specified one — the grammar of policy detail.",
      },
      {
        feature: "Relative clause chain for cumulation",
        example: "children who tidy their own park tend to lecture their parents at home, which is persuasion no campaign poster can buy",
        note: "A 'which' clause reaches back over the whole statement, turning cause into argument in one step.",
      },
      {
        feature: "Deliberate anaphora for emphasis",
        example: "Bins that are actually emptied, fines that are actually applied",
        note: "Repeating 'actually' is a rhetorical choice here, not carelessness — parallel emphasis that closes the essay.",
      },
    ],
    coherence:
      "The essay answers its two-part question in the order it was asked — problems first, solutions second — and then goes further by pairing them: every solution in bodies two and three answers a problem named in body one (health to bins and fines, money to fewer picking hours, pride to volunteer mornings and visible care). The introduction's formula 'firm local rules … changed everyday habits' is the map the two solution paragraphs follow in sequence, and the conclusion's compressed nouns ('health, budgets and a town's picture of itself') close the loop the opening scene began.",
    alternativeExpressions: [
      { insteadOf: "has grown noticeably worse", use: "has become far more visible / has worsened" },
      { insteadOf: "goes well beyond untidiness", use: "is more than a matter of tidiness" },
      { insteadOf: "black spots", use: "worst-affected corners / known trouble spots" },
      { insteadOf: "proved their worth", use: "shown they work / earned their keep" },
      { insteadOf: "the sturdier fix", use: "the more durable remedy" },
      { insteadOf: "turn up once a month", use: "give one morning a month" },
    ],
    commonMistakes: [
      {
        wrong: "Litter is caused by the development of modern society and globalisation.",
        right: "Litter grows where bins are scarce, fines are rare and people feel no ownership of the space.",
        reason: "Blaming abstract forces explains nothing the question asked for; problem-solution tasks want named causes and workable fixes.",
      },
      {
        wrong: "The government should do something about this serious issue as soon as possible.",
        right: "Councils should place bins where people sit and send wardens to the worst corners.",
        reason: "'Do something' is a solution with no content; measures must be specific enough to picture happening.",
      },
      {
        wrong: "In this essay, I will discuss the problems and solutions of litter.",
        right: "Litter is a serious but solvable problem, and firm rules must be joined to changed habits.",
        reason: "Announcing the essay's structure wastes the introduction; examiners reward a stance, not a table of contents.",
      },
      {
        wrong: "People throwing rubbish everywhere, streets very dirty, this is bad for the town's image.",
        right: "When people drop rubbish freely, streets quickly look abandoned, and a town's image suffers.",
        reason: "Verbless and comma-spliced sentences break down under exam pressure; full clauses keep the argument standing.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 5.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "In many towns now the rubbish in parks and streets is more than before. Bottles, papers and food are everywhere, specially after weekend. I think this is a big problem and the town and the people must do something.",
        "First problem is healthy. The rubbish bring rats and insects and small children play near this dirty things, they can be sick. Also broken glass is dangerous for dogs and for football players. Second problem is money, because the city pay workers to clean every day and this money can go to other things like the library. For example in my park near the playground there is always rubbish on Monday.",
        "For solve this problems, the government can put more bins in the park and empty them every day. Also they should give fine to people who throw rubbish, like 100 dollar. Schools can teach the children about keeping clean, and children can tell to parents.",
        "Maybe also volunteers can clean one time in month. In conclusion, litter is dangerous for health and expensive, but with bins, fines and teaching, our town can be clean again.",
      ],
      wordCount: 185,
      justification: [
        { criterion: "Task Response", note: "Both parts are present — health, safety and cost problems, then bins, fines, schools and volunteers — but at 185 words the response sits far under the 250-word floor and each idea gets one sentence before moving on." },
        { criterion: "Coherence and Cohesion", note: "The problem–solution shape is visible and 'First/Second/In conclusion' order it, but links stay mechanical ('Also', 'Maybe also'), and paragraph four mixes a new solution with the conclusion." },
        { criterion: "Lexical Resource", note: "Everyday words are mostly appropriate ('rubbish', 'bins', 'fine'), with telling slips — 'healthy' for 'health', 'this problems' — and reliance on repeated 'clean'." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences keep the meaning clear, but agreement and form errors recur ('rubbish bring', 'city pay', 'For solve', '100 dollar'), a Band 5.5–6 accuracy profile." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Any town park on a Monday reveals the story of its weekend: wrappers under the benches, cans among the flowerbeds, bags caught in the hedges. Rubbish in public spaces has worsened steadily, and in my view it causes damage far beyond its size — though the damage is matched by practical remedies a town can actually afford.",
        "The problems begin with safety. Leftover food draws vermin to the very places children play, and broken bottles wait for bare feet and paws weeks after they are dropped. The burden then spreads to the wallet: cleaning crews funded by local taxes are employed to follow the careless, and every such hour is subtracted from libraries, pools or road repairs. Worst of all is the message, because a littered corner announces that no one is watching — an invitation the next passer-by often accepts.",
        "The first set of answers lies with the authorities. Bins must be numerous enough to be convenient and emptied often enough to be respected, since an overflowing bin is a lesson in pointlessness. Fines, applied by wardens at the worst corners, signal that the rules have teeth, and school programmes convert children into persuasive ambassadors at the family dinner table.",
        "The second set belongs to residents themselves. A monthly clearing morning, arranged around a café's donated coffee, keeps visible care in the calendar and neighbours in conversation, while small changes — packaging-free stalls, bins placed beside benches — make tidiness the easier choice. People look after places they feel joint owners of, and these habits build exactly that feeling.",
        "In conclusion, litter costs a town its safety, its money and its self-respect, and it will not disappear by wishful thinking. Steady enforcement and modest communal habits, working together, are the practical way back to streets a town can be proud of.",
      ],
      wordCount: 299,
      justification: [
        { criterion: "Task Response", note: "Problems and solutions each receive two full paragraphs, every remedy answering a named harm, and the stance is steady from introduction to close; the 299 words comfortably clear the floor." },
        { criterion: "Coherence and Cohesion", note: "A two-part architecture the reader can navigate blind — problem block then remedy block — with varied links ('Worst of all', 'since', 'while') and the ownership idea planted in body one and harvested in body four." },
        { criterion: "Lexical Resource", note: "Precise, unfussy items — 'vermin', 'a lesson in pointlessness', 'persuasive ambassadors' — natural collocation and no memorised filler; register stays everyday." },
        { criterion: "Grammatical Range and Accuracy", note: "Confident variety — passives ('are employed to follow the careless'), 'enough + to' parallelism, relative chains — with error-free delivery at the Band 7–8 boundary." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "litter", partOfSpeech: "noun", meaning: "Rubbish left in public places — the task's core noun." },
    { word: "vermin", partOfSpeech: "noun", meaning: "Pests such as rats that carry disease." },
    { word: "fine", partOfSpeech: "noun", meaning: "A sum of money paid as a punishment for breaking a rule." },
    { word: "warden", partOfSpeech: "noun", meaning: "An official who patrols a public place and enforces its rules." },
    { word: "to enforce", partOfSpeech: "verb", meaning: "To make sure a rule is actually obeyed." },
    { word: "clean-up", partOfSpeech: "noun", meaning: "An organised session of clearing rubbish from a place." },
    { word: "throwaway", partOfSpeech: "adjective", meaning: "Made to be discarded after one use — 'throwaway packaging'." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};
