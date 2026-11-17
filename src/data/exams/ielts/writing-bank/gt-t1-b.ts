/**
 * General Training Task 1 bank — file B (PROMPT 46, Part D/E).
 *
 * The second three General Training letters: a semi-formal suggestion to
 * the manager of a community centre, an informal invitation to a close
 * friend, and an informal apology to a neighbour — completing the six
 * taught purposes across all three registers. Every task is an original
 * assignment with the full rubric (situation + three bullets), planning
 * notes, a complete model letter, the eight-element analysis, a topic
 * vocabulary bank and two level samples whose band comments are educational
 * estimates, never official scores.
 */

import type { WritingBankTask } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 4. Suggestion — opening hours at the community centre (semi-formal)
// ---------------------------------------------------------------------------

export const gt1SuggestionCentre: WritingBankTask = {
  slug: "ielts-wb-gt1-suggestion-centre",
  title: "Suggestion letter — opening hours at the community centre",
  channel: "gt",
  taskType: "task-1",
  family: "suggestion",
  register: "semi-formal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The community centre where you attend evening classes opens too few hours for people who work during the day.\n\nWrite a letter to the centre manager, Mrs Callaghan. In your letter:\n\n• describe how the current hours affect members\n• suggest specific changes to the timetable\n• offer to help put them into practice\n\nBegin your letter as follows: Dear Mrs Callaghan,",
  situation:
    "The candidate attends evening classes at a community centre whose weekday hours shut out anyone with a full-time job, and writes to the centre manager, who is known personally but still addressed with a title.",
  bullets: [
    "Describe how the current hours affect members",
    "Suggest specific changes to the timetable",
    "Offer to help put them into practice",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets in separate paragraphs: the effect of the hours, the suggested changes, and the offer of help.",
      keywords: ["hours", "suggest", "help", "open"],
    },
    {
      key: "purpose-opening",
      description: "States the suggestion's purpose in the opening lines, tied to the coming term.",
      keywords: ["writing", "suggest", "hours", "term"],
    },
    {
      key: "mechanised-suggestions",
      description: "Attaches a mechanism to every suggestion — a shifted shift, a survey-backed Sunday, a trial with a head-count.",
      keywords: ["evening", "sunday", "trial", "shift"],
    },
    {
      key: "concrete-offer",
      description: "Closes with a genuine, specific offer of help rather than a vague sign-off.",
      keywords: ["help", "sheet", "tutors", "survey"],
    },
    {
      key: "semi-formal-register",
      description: "Uses the semi-formal pairing: Dear Mrs Callaghan with Yours sincerely, courteous but not stiff.",
      keywords: ["dear mrs", "sincerely", "would", "look forward"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Mrs Callaghan is known personally but keeps her title: 'Dear Mrs Callaghan' pairs with 'Yours sincerely'.",
        "The voice is a member helping a manager, not a customer complaining; courteous, first person, full forms.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 gives the squeeze in auditable numbers: two evenings for everyone with a job, a waiting list of fourteen, members lost.",
        "Bullet 2 attaches a mechanism to every suggestion — the Wednesday evening by moving a caretaker's shift, Sunday afternoons by the survey, both tested by a one-term trial.",
        "Bullet 3 offers tasks the manager could actually delegate: the sheet, the tutors, the door count, the one-page summary.",
      ],
    },
    {
      heading: "Step 3 — Language shelf (1 minute)",
      notes: [
        "Proposal grammar: 'The first is to stay open until… by shifting…'; 'A one-term trial of both would show whether…'.",
        "Administrative nouns borrowed from the manager's world: 'over-subscribed', 'waiting list', 'one-term trial', 'head-count'.",
        "The offer is stated as tasks, not goodwill: 'I can staff a sign-up sheet… or count heads at the door'.",
      ],
    },
    {
      heading: "Step 4 — Shape and budget (1 minute)",
      notes: [
        "Five paragraphs: purpose, the squeeze, the two changes plus the trial, the offer, close and sign-off.",
        "Aim for 170–220 words; every suggestion must carry its cost mechanism, or it is a wish rather than a proposal.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Mrs Callaghan,\n\nI am writing with a suggestion about Millbrook's opening hours, which I hope you can look at before the autumn term begins.",
      "As things stand, the centre closes at five on weekdays and at one on Saturdays, so anyone working ordinary hours can reach the pottery studio only on a Tuesday or Thursday evening, the two nights the building stays open. Those evenings are over-subscribed — Thursday's pottery group has a waiting list of fourteen — and two members of my life-drawing class have dropped out this year simply because they could not get here before closing.",
      "Two changes would make a great difference at little cost. The first is to stay open until half past eight on one more evening, say Wednesday, by shifting a caretaker's shift from the quiet morning to that slot. The second is Sunday afternoons, which the members' survey in spring suggested would be the most popular change of all. A one-term trial of both, with a head-count at the door, would show whether the demand is real.",
      "I would be glad to help in whatever way is useful. I can staff a sign-up sheet at the evening classes, put the case to the tutors, or count heads at the door during a trial, and I could summarise the spring survey onto one page for the trustees.",
      "I look forward to hearing what you think.\n\nYours sincerely,\nFarida Karim",
    ],
    wordCount: 235,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "A titled greeting to a manager known by name, and a purpose sentence that is courteous but specific: the hours, the coming term, and a request to 'look at' rather than to obey — the right frame for a suggestion.",
      },
      {
        role: "Bullet 1 — the effect on members",
        analysis:
          "States the squeeze in numbers a manager can audit: two evenings for everyone with a job, a waiting list of fourteen, two members lost. 'The two nights the building stays open' is the pivot — the hours are the villain, not the staff.",
      },
      {
        role: "Bullet 2 — the suggestions",
        analysis:
          "Two named changes, each with its mechanism attached — the Wednesday evening by shifting a caretaker's shift, Sunday afternoons by the survey — and then a trial with a head-count, which converts opinion into something the trustees can measure.",
      },
      {
        role: "Bullet 3 — the offer to help",
        analysis:
          "Four offers, each a task the manager could delegate tomorrow; the plain list keeps them humble rather than heroic, and 'whatever way is useful' hands the choice to her.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "A short close that asks for her judgement ('hearing what you think') without pressing; the Yours sincerely pairing matches the titled greeting exactly.",
      },
    ],
    vocabulary: [
      {
        term: "over-subscribed",
        note: "The one-word administrative term for demand exceeding places — exactly the register a centre manager uses.",
      },
      {
        term: "waiting list of fourteen",
        note: "A number attached to a noun; quantified evidence is what turns a complaint into a case.",
      },
      {
        term: "shifting a caretaker's shift",
        note: "The suggestion arrives with its own staffing arithmetic — costed thinking in five words.",
      },
      {
        term: "a one-term trial",
        note: "The bureaucratic word for a pilot; 'trial' invites the manager to test rather than commit.",
      },
      {
        term: "a head-count at the door",
        note: "A proposed measurement: the writer offers evidence, not insistence.",
      },
      {
        term: "put the case to the tutors",
        note: "Idiomatic semi-formal: 'put the case to' means to argue on behalf of, and shows the writer will do the persuading in person.",
      },
    ],
    grammar: [
      {
        feature: "Contact relative clause",
        example: "the two nights the building stays open",
        note: "The relative pronoun is dropped, as natural English allows — correct inside semi-formal, impossible in the stiffest formal.",
      },
      {
        feature: "Which-clause with an embedded report",
        example: "which the members' survey in spring suggested would be the most popular change",
        note: "A relative clause carrying a reported clause inside it — two levels of subordination, handled smoothly.",
      },
      {
        feature: "Free relative whatever",
        example: "I would be glad to help in whatever way is useful",
        note: "'Whatever way is useful' hands the choice to the manager — politeness built into the grammar.",
      },
      {
        feature: "Conditional would for proposals",
        example: "A one-term trial of both, with a head-count at the door, would show whether the demand is real",
        note: "Hypothetical would frames the trial as reasoning, not pressure.",
      },
    ],
    coherence:
      "The letter keeps one measuring stick throughout — use per opening hour — so the two usable evenings in paragraph two, the caretaker's shift moved in paragraph three and the head-count trial all answer the same question: who can actually get through the door. Each suggestion arrives with its cost mechanism attached ('by shifting a caretaker's shift'), and the offers in paragraph four are the same tasks the trial in paragraph three will need, so the letter ends by volunteering for its own proposal.",
    alternativeExpressions: [
      { insteadOf: "As things stand", use: "Under the present timetable" },
      { insteadOf: "over-subscribed", use: "filled to capacity / turning members away" },
      { insteadOf: "have dropped out this year", use: "have given up their places this year" },
      { insteadOf: "at little cost", use: "for very little expense" },
      { insteadOf: "a head-count at the door", use: "a simple count of arrivals at the door" },
      { insteadOf: "I would be glad to help", use: "I would be happy to assist" },
    ],
    commonMistakes: [
      {
        wrong: "The centre's hours are a joke and everyone knows it.",
        right: "The centre closes at five on weekdays, so the only evenings available to working members are Tuesday and Thursday.",
        reason: "Sarcasm loses the courteous semi-formal voice that a manager you know by name still expects.",
      },
      {
        wrong: "You should open longer, that is my suggestion.",
        right: "The first is to stay open until half past eight on Wednesdays, by moving a caretaker's shift.",
        reason: "The bullet says suggest specific changes; a bare 'open longer' is a wish, not a proposal.",
      },
      {
        wrong: "If you need anything just ask.",
        right: "I can staff a sign-up sheet at the evening classes, or count heads at the door during a trial.",
        reason: "'Ask me if you need help' costs nothing to say and offers nothing; a named task is a real offer.",
      },
      {
        wrong: "Dear Callaghan, / Dear Mrs C,",
        right: "Dear Mrs Callaghan,",
        reason: "Dropping the title or shortening the name breaks the polite contract of semi-formal, even to a manager you like.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Mrs Callaghan,\n\nI am writing to suggest you change the opening hours of the centre, because they are not good for people who work.",
        "The centre closes at 5 in the week and it is only open on Tuesday and Thursday evening. So people like me can only come after work two days, and the classes are always full. A lot of members are not happy about this situation.",
        "I think you should open more in the evening and also at the weekend, maybe on Sunday. Then more people can use the centre and the classes will not be so full. It will also make more money for the centre I believe.",
        "If you want, I can help to ask the members what they think, I know many of them from my classes. Please think about my idea.",
        "I look forward to your reply.\n\nYours sincerely,\nPiotr Zielinski",
      ],
      wordCount: 149,
      justification: [
        {
          criterion: "Task Achievement",
          note: "All three bullets appear, but the suggestion is a wish ('open more in the evening and also at the weekend') with no mechanism, and the offer bullet is a single vague clause ('I can help to ask the members').",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "Clear paragraphing, though linking is limited ('So', 'Then'), and the comma splice ('what they think, I know') undercuts the finish.",
        },
        {
          criterion: "Lexical Resource",
          note: "Everyday vocabulary adequate for the topic ('hours', 'classes', 'full') but without a single precise item; 'make more money I believe' gestures at cost without any numbers.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Simple sentences mostly accurate; 'closes at 5 in the week' compresses unidiomatically, and the modal chain 'you should open … maybe on Sunday' wavers between suggestion and guess.",
        },
      ],
    },
    {
      bandEstimate: "Band 7.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Mrs Callaghan,\n\nI am writing to suggest a small change to the centre's timetable ahead of the autumn term, because the present hours leave most of us who work during the day almost no chance to use the building.",
        "On weekdays the centre shuts at five and on Saturdays at one, so Tuesday and Thursday evenings are the only openings a working member can reach. The consequence is that those two nights are packed — the Thursday pottery group alone has fourteen names on its waiting list — and several regulars I know have quietly stopped coming because they cannot arrive before the doors close.",
        "Two adjustments seem worth trying, and neither is expensive. Extending one more evening, perhaps Wednesday, to half past eight would need only a small change to the caretaker's rota, since the mornings are quiet. Opening Sunday afternoons would cost more, but the spring survey of members pointed to it as the single most popular reform. A one-term trial of both, counted at the door, would show whether the demand is real.",
        "For my part, I would be glad to help: I can run a sign-up sheet in evening classes or put the case to the tutors in person.",
        "I look forward to hearing what you think.\n\nYours sincerely,\nRachel Osei",
      ],
      wordCount: 214,
      justification: [
        {
          criterion: "Task Achievement",
          note: "The three bullets are developed with audit-ready detail — waiting list of fourteen, caretaker's rota, head-count trial — and the offer names tasks a manager could delegate.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "One measuring stick throughout (use per opening hour); 'neither is expensive' and 'For my part' signal moves cleanly, and each suggestion carries its own cost mechanism.",
        },
        {
          criterion: "Lexical Resource",
          note: "Good range — 'packed', 'rota', 'regulars' — though 'reform' is a heavy word for a timetable and 'packed' is a touch casual beside 'over-subscribed'.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Varied structures — the fronted gerund subject 'Extending one more evening…' and 'neither is expensive' — with few errors; sentence shapes repeat as two-part lists, which holds range at 7.0.",
        },
      ],
    },
  ],
  vocabularyBank: [
    { word: "timetable", partOfSpeech: "noun", meaning: "The planned hours or schedule of an organisation." },
    { word: "over-subscribed", partOfSpeech: "adjective", meaning: "With more demand than there are places." },
    { word: "waiting list", partOfSpeech: "noun", meaning: "A queue of people hoping for a place that is full." },
    { word: "caretaker", partOfSpeech: "noun", meaning: "The person who looks after a building, opening and closing it." },
    { word: "trial", partOfSpeech: "noun", meaning: "A temporary period of testing something new." },
    { word: "head-count", partOfSpeech: "noun", meaning: "A simple count of the people present." },
    { word: "trustees", partOfSpeech: "noun", meaning: "The group of people responsible for running a charity or centre." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Invitation — come and see the new city (informal)
// ---------------------------------------------------------------------------

export const gt1InvitationFriend: WritingBankTask = {
  slug: "ielts-wb-gt1-invitation-friend",
  title: "Invitation letter — come and see the new city",
  channel: "gt",
  taskType: "task-1",
  family: "invitation",
  register: "informal",
  difficulty: 2,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "You have recently moved to a new city, and you would like a close friend to visit you there for a long weekend.\n\nWrite a letter to your friend Priya. In your letter:\n\n• tell her about the city and where you live\n• describe what you could do together\n• arrange travel details\n\nBegin your letter as follows: Dear Priya,",
  situation:
    "The candidate has recently moved to a seaside city and wants a close friend to come for a long weekend; the letter is chatty, affectionate and full of practical arrangements, and goes to a friend on first-name terms.",
  bullets: [
    "Tell her about the city and where you live",
    "Describe what you could do together",
    "Arrange travel details",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: the city and the flat, the weekend plans, and the travel arrangements.",
      keywords: ["flat", "city", "weekend", "train"],
    },
    {
      key: "purpose-opening",
      description: "States the invitation warmly in the opening lines and asks a question the friend can answer.",
      keywords: ["come", "weekend", "love", "suit"],
    },
    {
      key: "shared-plans",
      description: "Describes specific things the two of you could do together, offered as we'd and we could.",
      keywords: ["walk", "beach", "potter", "pub"],
    },
    {
      key: "travel-details",
      description: "Arranges concrete travel details — one train, one time, one price, one meeting point.",
      keywords: ["train", "leeds", "waverley", "ticket"],
    },
    {
      key: "informal-register",
      description: "Lives the informal register: contractions throughout, warmth, and a closer such as Love or Take care.",
      keywords: ["love", "i'd", "there's", "dear"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Priya is a close friend: 'Dear Priya' with 'Love' or 'Take care' — first names, contractions, warmth.",
        "Informal is still a register: chatty questions and dropped subjects, but no office English ('I am writing to invite you…' would be a tone error).",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 gives the flat and the city in three vivid specifics — the bakery, the port, the hills-and-sea setting — plus one practical fact: ten minutes by bus.",
        "Bullet 2 plans the weekend in 'we'd' and 'we could', so the friend co-owns the itinerary; Saturday and Sunday each get one line.",
        "Bullet 3 settles travel in four facts: the train, the time, the price, the meeting point — and offers to pay if money is tight.",
      ],
    },
    {
      heading: "Step 3 — Language shelf (1 minute)",
      notes: [
        "Friendship idioms: 'potter round', 'swear by', 'the ticket's my treat', 'money's tight'.",
        "Contractions everywhere: 'I'd love you to come', 'we'd walk', 'there's a folk night'.",
        "Questions do the organising: 'Would a long weekend around the 12th suit you?' opens; 'Tell me which dates work' closes.",
      ],
    },
    {
      heading: "Step 4 — Shape and budget (1 minute)",
      notes: [
        "Five short paragraphs: the invitation, the city, the weekend, the trains, close and sign-off.",
        "Aim for 170–220 words; in an informal letter the warm tone carries the structure, so paragraphs can be shorter than a formal letter's.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Priya,\n\nGuess what — the spare room finally has a bed in it, and I'd love you to come and try it. Would a long weekend around the 12th suit you?",
      "I'm in Leith now, ten minutes by bus from the centre, in a top-floor flat with a view of the water. There's a bakery at the end of the street, the old port is full of little restaurants, and the whole city sits between hills and sea, so there's always somewhere to walk.",
      "If you come, I've got the weekend half planned. Saturday morning we'd walk up Arthur's Seat before the crowds — it's an extinct volcano in the middle of the city and the view from the top is ridiculous — then we could potter round the second-hand shops and get fish and chips on the beach. On Sunday there's a folk night at a pub two streets away that my neighbours swear by.",
      "Getting here is easy. The direct train from Leeds takes about three hours — if you get the 8:40 you'll be at Waverley by lunchtime, and I'll meet you on the platform. Book an off-peak return and it shouldn't cost more than £40, and if money's tight this month, say so and the ticket's my treat.",
      "Tell me which dates work and I'll check the trains with you. Can't wait to show you round.\n\nLove,\nAna",
    ],
    wordCount: 229,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and opening purpose",
        analysis:
          "Opens like a phone call, not a letter: 'Guess what' does the greeting's work in two words, the invitation is stated by line two, and a question turns the friend from recipient into co-planner.",
      },
      {
        role: "Bullet 1 — the city and the flat",
        analysis:
          "Three specifics do the describing — the bakery, the port, the hills-and-sea setting — and 'ten minutes by bus' gives the one practical fact a visitor needs. No adjective does work a noun could do.",
      },
      {
        role: "Bullet 2 — what we could do",
        analysis:
          "Runs the weekend in order (Saturday, Sunday), each plan offered in we'd or we could so the friend co-owns the itinerary. 'That my neighbours swear by' is the informal relative a formal letter would spell out.",
      },
      {
        role: "Bullet 3 — travel details",
        analysis:
          "One train, one time, one price, one meeting point — the four facts a traveller needs, in that order. The money paragraph ends with 'the ticket's my treat', which converts an arrangement into a gesture.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "Two short imperatives and a four-word fragment ('Can't wait to show you round') — the dropped subject is the grammar of warmth; 'Love' signs off a letter to a close friend.",
      },
    ],
    vocabulary: [
      {
        term: "Guess what",
        note: "The spoken opener that establishes intimacy in two words; it could not be used one register higher.",
      },
      {
        term: "top-floor flat",
        note: "A compact premodified noun phrase; 'top-floor' before the noun is exactly how natives describe where they live.",
      },
      {
        term: "potter round",
        note: "The exactly right informal verb for unhurried browsing — 'visit some shops' would kill the tone.",
      },
      {
        term: "swear by",
        note: "Informal idiom for enthusiastic recommendation; it carries the neighbours' voices into the plan.",
      },
      {
        term: "off-peak return",
        note: "The ticket type named precisely — informal register still gets travel facts right.",
      },
      {
        term: "the ticket's my treat",
        note: "A genitive plus an idiom: it offers to pay without making money awkward — the polite way between friends.",
      },
    ],
    grammar: [
      {
        feature: "Contractions as register",
        example: "I'd love you to come; we'd walk up Arthur's Seat before the crowds",
        note: "The contracted would softens plans into suggestions; uncontracted forms would stiffen the whole letter.",
      },
      {
        feature: "First conditional with present",
        example: "if you get the 8:40 you'll be at Waverley by lunchtime",
        note: "If + present, will + verb: the standard pattern for practical arrangements, still warm in tone.",
      },
      {
        feature: "Preposition-stranded relative",
        example: "a pub two streets away that my neighbours swear by",
        note: "Ending the clause on its preposition is the natural informal choice; 'about which they speak highly' would be absurd here.",
      },
      {
        feature: "Elliptical sentence",
        example: "Can't wait to show you round",
        note: "Dropping the subject 'I' is impossible in formal writing and perfectly natural in a note to a friend — register carried by syntax.",
      },
    ],
    coherence:
      "The letter is sequenced like the visit itself — the place first, then the plans, then the train — so the reader assembles the weekend in the order they would live it. Questions open and close ('Would a long weekend around the 12th suit you?', 'Tell me which dates work'), keeping the friend inside the planning, and the bed announced in paragraph one is the same spare room the friend will sleep in: the invitation's real purpose is in plain sight from the first line.",
    alternativeExpressions: [
      { insteadOf: "Guess what — the spare room finally has a bed in it", use: "Big news: the spare room is finally fit for guests" },
      { insteadOf: "Would a long weekend around the 12th suit you?", use: "Could you get away for a long weekend near the 12th?" },
      { insteadOf: "the old port is full of little restaurants", use: "the former docks are lined with small places to eat" },
      { insteadOf: "we'd walk up Arthur's Seat before the crowds", use: "we'd get up Arthur's Seat before anyone else" },
      { insteadOf: "that my neighbours swear by", use: "that everyone on my street recommends" },
      { insteadOf: "the ticket's my treat", use: "let me get the ticket" },
    ],
    commonMistakes: [
      {
        wrong: "I am writing to invite you to visit my city at your earliest convenience.",
        right: "Guess what — the spare room finally has a bed in it; would the 12th suit?",
        reason: "Stiff office English to a close friend is a tone error just as real as slang in a formal letter.",
      },
      {
        wrong: "We could perhaps visit some culturally significant locations.",
        right: "We'd climb Arthur's Seat before the crowds, then get fish and chips on the beach.",
        reason: "Informal letters still need specifics; grand vague nouns sound like a brochure, not a friend.",
      },
      {
        wrong: "Travel: there are various options available.",
        right: "The 8:40 from Leeds gets you to Waverley by lunchtime, and I'll meet you on the platform.",
        reason: "The bullet says arrange travel details; options without a chosen train arrange nothing.",
      },
      {
        wrong: "Yours faithfully, Ana",
        right: "Love, Ana",
        reason: "Formal sign-offs in an informal letter mix registers in the very last line the reader sees.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Priya,\n\nI am writing to invite you to visit me in my new city. I moved to Edinburgh in the spring and I have a flat in Leith, near the water. The city is very nice, there are many shops and restaurants and some hills near the centre.",
        "If you come for a long weekend, we can do many things together. We could visit the old town and walk up the hill called Arthur's Seat, and in the evening we can find a nice restaurant. Also we could go to the beach if the weather is good.",
        "About travel: you can take the train from Leeds, it takes around three hours, and I will wait for you at the station. You should buy the tickets early because they are cheaper.",
        "Please tell me if you can come. I am looking forward to seeing you.",
        "Best regards,\nSofia",
      ],
      wordCount: 148,
      justification: [
        {
          criterion: "Task Achievement",
          note: "All three bullets are present, but at 148 words the response sits just under the floor, and the plans bullet stays generic ('visit the old town', 'a nice restaurant') where the register asked for shared specifics.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "A clear sequence (city, plans, travel), though openers are mechanical ('About travel:') and the closing 'I am looking forward to seeing you' is office English rather than friendship.",
        },
        {
          criterion: "Lexical Resource",
          note: "Correct but flat — 'very nice', 'many shops' — the vocabulary never rises above neutral description, and no idiom warms the letter.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Accurate simple sentences, but the complete absence of contractions ('I am writing', 'we can do') mismatches the informal register, and one comma splice ('take the train from Leeds, it takes').",
        },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Priya,\n\nGuess what — the spare room is finally fit for guests, so I'd love you to come for a long weekend. Would somewhere around the 12th work?",
        "I'm in Leith now — ten minutes by bus from the centre, top floor, with the water at the end of the street. There's a bakery at the end of my road and the old port is full of little restaurants, and the whole city sits between hills and sea, so there's always somewhere to walk.",
        "If you come, I've got the weekend half planned. Saturday we'd climb Arthur's Seat before the crowds — the view from the top is ridiculous — then potter round the second-hand shops and get fish and chips on the beach. On Sunday my neighbours keep talking about a folk night two streets away — that could be our evening.",
        "Getting here is easy: the direct train from Leeds takes about three hours, and if you get the 8:40 you'll be at Waverley by lunchtime, where I'll meet you. An off-peak return shouldn't cost more than £40 — and if money's tight this month, say so, and the ticket's my treat.",
        "Tell me which dates work and I'll check the trains. Can't wait to see you.\n\nLove,\nBea",
      ],
      wordCount: 206,
      justification: [
        {
          criterion: "Task Achievement",
          note: "All three bullets developed with the friend inside the planning — questions open and close, and the travel paragraph gives one train, one time, one price.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "Sequenced like the visit itself (place, weekend, train); 'where I'll meet you' stitches the arrival into the plan, and the spare room returns at the end as the letter's real subject.",
        },
        {
          criterion: "Lexical Resource",
          note: "Natural informal idiom — 'fit for guests', 'potter round', 'the ticket's my treat' — collocation secure; 'ridiculous' as praise is exactly how friends talk.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Contractions, the conditional pattern and the elliptical 'Can't wait' all controlled; the dash-heavy travel paragraph is the only structural quirk, and it reads as deliberate.",
        },
      ],
    },
  ],
  vocabularyBank: [
    { word: "off-peak return", partOfSpeech: "noun", meaning: "A return ticket valid at quieter, cheaper times of day." },
    { word: "to potter round", partOfSpeech: "phrasal verb", meaning: "To wander and look at things in an unhurried way." },
    { word: "to swear by", partOfSpeech: "phrasal verb", meaning: "To recommend something with total confidence." },
    { word: "top-floor", partOfSpeech: "adjective", meaning: "On the highest floor of a building." },
    { word: "folk night", partOfSpeech: "noun", meaning: "An evening of traditional music, often at a pub." },
    { word: "my treat", partOfSpeech: "phrase", meaning: "Said when you insist on paying for someone." },
    { word: "second-hand", partOfSpeech: "adjective", meaning: "Not new; previously owned, e.g. of shops selling used goods." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 6. Apology — the plants I promised to water (informal)
// ---------------------------------------------------------------------------

export const gt1ApologyNeighbour: WritingBankTask = {
  slug: "ielts-wb-gt1-apology-neighbour",
  title: "Apology letter — the plants I promised to water",
  channel: "gt",
  taskType: "task-1",
  family: "apology",
  register: "informal",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "While your neighbour was away, you promised to water her plants, but a family emergency took you out of town for over a week, and the plants died.\n\nWrite a letter to your neighbour, Rosa. In your letter:\n\n• apologise and acknowledge what has happened\n• explain the emergency\n• offer to make things right\n\nBegin your letter as follows: Dear Rosa,",
  situation:
    "The candidate promised to water a friendly neighbour's plants during her holiday, but a family emergency took the candidate away for nine days and the plants died in a heatwave; the letter is warm but serious.",
  bullets: [
    "Apologise and acknowledge what has happened",
    "Explain the emergency",
    "Offer to make things right",
  ],
  requirements: [
    {
      key: "all-bullets",
      description: "Covers all three bullets: the apology and acknowledgement, the emergency, and the offer to make things right.",
      keywords: ["sorry", "fault", "emergency", "replace"],
    },
    {
      key: "purpose-opening",
      description: "Opens with the apology itself, stated plainly before any explanation.",
      keywords: ["sorry", "apology", "fault", "promised"],
    },
    {
      key: "honest-explanation",
      description: "Explains the emergency honestly, taking responsibility for the missed handover rather than excusing it.",
      keywords: ["brother", "hospital", "drove", "watering"],
    },
    {
      key: "make-it-right",
      description: "Offers a concrete remedy — replacing what can be replaced, honesty about what cannot, and a backup plan.",
      keywords: ["replace", "nursery", "backup", "window box"],
    },
    {
      key: "informal-register",
      description: "Keeps the warm informal register: contractions and a friendly closer, without becoming flippant about the loss.",
      keywords: ["i'm", "didn't", "warm", "coffee"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Reader and register (30 seconds)",
      notes: [
        "Rosa is a friendly neighbour: 'Dear Rosa' with 'Warm wishes' or 'Love' — first name, contractions, warmth.",
        "The subject is a real loss, so the warmth stays serious: no jokes, no exclamation marks, and never 'don't worry'.",
      ],
    },
    {
      heading: "Step 2 — Purpose, bullet by bullet (1 minute)",
      notes: [
        "Bullet 1 states the fact plainly before any explanation: the plants died, it is my fault, and here is exactly what was lost.",
        "Bullet 2 tells the emergency in date order and ends on the writer's own failure — the handover never arranged — which is what makes the apology credible.",
        "Bullet 3 separates what money can fix (the window box) from what it cannot (the olive tree), then names a backup so the promise has a mechanism.",
      ],
    },
    {
      heading: "Step 3 — Language shelf (1 minute)",
      notes: [
        "Apology moves: 'I've been putting this off'; 'it's my fault'; 'all of it on me'.",
        "Past perfect carries the timeline: 'he'd been taken', 'the heatwave had done its worst'.",
        "Responsibility grammar: 'that I didn't even think of it is on me, not on the emergency'.",
      ],
    },
    {
      heading: "Step 4 — Shape and budget (1 minute)",
      notes: [
        "Four paragraphs here: apology and acknowledgement, the emergency, making it right, close and sign-off.",
        "Aim for 170–220 words; apology letters run a little long because they carry a fourth job — telling the truth about what cannot be replaced.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Dear Rosa,\n\nI've been putting this off because I feel dreadful about it, but you deserve a proper apology, so here it is: the plants didn't survive while you were away, and it's my fault. I promised to water them, and through three weeks of heat I failed at it. I'm so sorry — I know the window box took you years and the olive tree came from your mother's garden.",
      "The reason isn't an excuse, but you should know what happened. On the Tuesday my brother rang at midnight: he'd been taken to hospital two hundred miles away with a ruptured appendix, and I drove there that night. I stayed with him nine days, sleeping in a chair, and by the time he was stable, the heatwave had done its worst. I should have asked another neighbour to take over the watering; that I didn't even think of it is on me, not on the emergency.",
      "I'd like to put it right if you'll let me. This weekend I'd drive you to the nursery at Kelsey, and you could choose whatever you like for the window box — all of it on me. The olive tree I can't replace, and I know that; if there's anything you'd like me to do about it, tell me and I'll do it. When you're next away, Tilly at number 4 will be my backup, so this can't happen again.",
      "Come round for a coffee when you're back — I've kept your key safe, which is the one thing I did manage. I'm sorry, truly.\n\nWarm wishes,\nJosh",
    ],
    wordCount: 262,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Greeting and apology — bullet 1",
        analysis:
          "The acknowledgement comes before any explanation — 'it's my fault' is stated, not implied — and the two specific losses (the window box, the olive tree) prove the writer knows what was actually lost. 'Putting this off' admits the hardest part: the days of silence.",
      },
      {
        role: "Bullet 2 — the emergency",
        analysis:
          "Told in strict date order, with the two past perfects ('he'd been taken', 'the heatwave had done its worst') placing the damage inside the absence. The paragraph ends on the writer's real failure — the handover never arranged — which is what makes the apology credible.",
      },
      {
        role: "Bullet 3 — making it right",
        analysis:
          "Separates what money can fix (the window box, on the writer's account) from what it cannot (the olive tree), and honesty about the second is the paragraph's ethical centre. The backup arrangement converts regret into a plan.",
      },
      {
        role: "Close and sign-off",
        analysis:
          "A small domestic offer (coffee, the key) brings the relationship back to normal; 'I'm sorry, truly' is the second, plainer apology; 'Warm wishes' closes a warm letter to a friendly neighbour.",
      },
    ],
    vocabulary: [
      {
        term: "putting this off",
        note: "The phrasal verb confesses the delay in writing the letter itself — an honesty move before the apology proper.",
      },
      {
        term: "through three weeks of heat I failed at it",
        note: "'Failed at it' takes the blame in three words; no agent, no excuse, and 'at it' accepts the task as a whole.",
      },
      {
        term: "the heatwave had done its worst",
        note: "The past perfect sentence for the whole loss; 'done its worst' gives the weather agency without shifting the writer's responsibility.",
      },
      {
        term: "take over the watering",
        note: "The missed handover named precisely — 'take over' is exactly what a backup does, and the model admits nobody was asked.",
      },
      {
        term: "all of it on me",
        note: "An informal absolute phrase for paying; it settles money without a word like 'refund', which would sound like a hotel.",
      },
      {
        term: "my backup",
        note: "One modern noun that turns a promise into an arrangement — the reassurance the bullet asks for.",
      },
    ],
    grammar: [
      {
        feature: "Past perfect inside the absence",
        example: "he'd been taken to hospital … and the heatwave had done its worst",
        note: "Two past perfects place the damage inside the nine days — exactly the tense work an apology narrative needs.",
      },
      {
        feature: "Fronted that-clause as subject",
        example: "that I didn't even think of it is on me, not on the emergency",
        note: "Fronting the clause makes the confession the sentence's topic — grammar that takes responsibility.",
      },
      {
        feature: "Will in the if-clause",
        example: "I'd like to put it right if you'll let me",
        note: "Will in the if-clause is willingness, not future timing; it asks permission gently.",
      },
      {
        feature: "Contractions as register",
        example: "I'd like to put it right if you'll let me",
        note: "Contracted forms keep the voice neighbourly; full forms would turn a friend into a correspondent.",
      },
    ],
    coherence:
      "The letter's spine is a three-step moral sequence — acknowledge, explain, repair — and no step is allowed to do another's work: the apology states the fact, the explanation adds the timeline only after it, and the remedy paragraph distinguishes replaceable losses from the one that is not. The reference to 'the emergency' in the final sentence of paragraph two ('not on the emergency') deliberately separates the cause from the blame, which is the point the whole letter turns on.",
    alternativeExpressions: [
      { insteadOf: "I've been putting this off", use: "I've taken days to get this letter started" },
      { insteadOf: "you deserve a proper apology", use: "you are owed a straight apology" },
      { insteadOf: "the heatwave had done its worst", use: "the hot weather had finished the plants off" },
      { insteadOf: "that I didn't even think of it is on me", use: "the failure to arrange cover was mine alone" },
      { insteadOf: "all of it on me", use: "I'll stand the cost of all of it" },
      { insteadOf: "which is the one thing I did manage", use: "the one job I did see to" },
    ],
    commonMistakes: [
      {
        wrong: "The plants died but it wasn't really my fault, these things happen.",
        right: "The plants didn't survive, and it's my fault; I promised to water them and failed.",
        reason: "The bullet says apologise and acknowledge; self-defence in the first line cancels the apology.",
      },
      {
        wrong: "A five-paragraph saga of the hospital stay.",
        right: "My brother rang at midnight; I drove there that night and stayed nine days.",
        reason: "The emergency needs one paragraph, not a diary; the letter must move on to making it right.",
      },
      {
        wrong: "I'll buy you some new plants, so no harm done.",
        right: "The olive tree I can't replace, and I know that; tell me anything you'd like me to do about it.",
        reason: "'No harm done' tells the reader how to feel and minimises a loss that was hers.",
      },
      {
        wrong: "Dear Mrs Rosa, … Yours sincerely,",
        right: "Dear Rosa, … Warm wishes,",
        reason: "Titles and formal pairings turn a friendly neighbour into a stranger; informal needs the first name and a warm closer.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Rosa,\n\nI want to say sorry about your plants. When you was on holiday, I promised to water them, but they died and I feel very bad.",
        "The problem was my brother had an emergency. He was in hospital in another city and I had to go there fast. I stayed with him more than one week and I forgot the plants completely, so when I came back they was all dry. It was not my mistake, but I am still sorry.",
        "I hope you are not too angry with me. You know I am a good neighbour normally. Next time I will take more care of your things, I promise.",
        "Your neighbour,\nDaniyal",
      ],
      wordCount: 115,
      justification: [
        {
          criterion: "Task Achievement",
          note: "The apology and explanation bullets are present, but the letter never offers a remedy — no replacement, no plan — so the third bullet is missed altogether, and at 115 words it is well under the floor.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "Four short paragraphs in a sensible order, but 'It was not my mistake' contradicts the opening apology, and 'Next time I will take more care' is a promise, not a mechanism.",
        },
        {
          criterion: "Lexical Resource",
          note: "Everyday words only ('plants', 'sorry', 'emergency'); 'I feel very bad' and 'too angry' carry the emotion but none of the precision an apology needs.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Simple sentences with recurring agreement errors ('you was', 'they was'); 'Your neighbour' as a sign-off is possible but odd, and the near-absence of contractions leaves the tone strangely formal for a friend.",
        },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Dear Rosa,\n\nI've been putting this off for days because I feel dreadful about it, but you're owed a proper apology: the plants didn't survive while you were away, and it's my fault. I promised to water them, and through three weeks of heat I failed. I'm so sorry — I know the window box took you years and the olive tree came from your mother's garden.",
        "The reason isn't an excuse, but you should know what happened. On the Tuesday my brother rang at midnight: he'd been taken to hospital two hundred miles away with a ruptured appendix, and I drove up that night. I stayed with him nine days, mostly asleep in a chair, and by the time he was fit to be left, the heatwave had finished everything off. I should have asked another neighbour to take over the watering — that I didn't think of it is on me, not on the emergency.",
        "I'd like to put it right if you'll let me. On Saturday I'd drive you out to the Kelsey nursery, and you could pick out whatever you like for the window box — all of it on me. The olive tree is the one thing I can't replace, and I know it; if there's anything at all that would help, say the word. When you're next away, Tilly at number 4 will be my backup, so this can't happen again.",
        "Come round for a coffee when you're back. I'm sorry, truly.\n\nWarm wishes,\nTara",
      ],
      wordCount: 248,
      justification: [
        {
          criterion: "Task Achievement",
          note: "All three bullets developed in the right moral order — fact, timeline, remedy — and the letter separates what can be replaced from what cannot, which is the hardest part of this task.",
        },
        {
          criterion: "Coherence and Cohesion",
          note: "The three-step spine (acknowledge, explain, repair) never lets a step do another's work; 'not on the emergency' cleanly divides cause from blame.",
        },
        {
          criterion: "Lexical Resource",
          note: "Strong informal precision — 'putting this off', 'finished everything off', 'all of it on me', 'say the word' — idioms that carry feeling without gushing.",
        },
        {
          criterion: "Grammatical Range and Accuracy",
          note: "Past perfects placed exactly inside the absence ('had finished everything off'), the fronted that-clause ('that I didn't think of it is on me') and willingness-'if you'll let me' show range; a couple of long sentences are the only brake on a higher estimate.",
        },
      ],
    },
  ],
  vocabularyBank: [
    { word: "to water", partOfSpeech: "verb", meaning: "To pour water on plants so they stay alive." },
    { word: "heatwave", partOfSpeech: "noun", meaning: "A period of unusually hot weather." },
    { word: "window box", partOfSpeech: "noun", meaning: "A container of flowers fitted outside a window." },
    { word: "nursery", partOfSpeech: "noun", meaning: "A shop that sells plants and gardening supplies." },
    { word: "backup", partOfSpeech: "noun", meaning: "A person or plan that takes over when the first one cannot." },
    { word: "to put things right", partOfSpeech: "phrase", meaning: "To repair a mistake or make amends." },
    { word: "to take over", partOfSpeech: "phrasal verb", meaning: "To take control of a task from someone else." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};
