/**
 * TOEFL Reading Practice Library — Read in Daily Life, batch 2 (PROMPT 49).
 *
 * Seven foundation exercises (difficulty 2). Policies, reviews, timetables,
 * forms, newsletters, listings and announcements — the everyday texts the
 * task type trains, read for gist, rules, small print and implication.
 *
 * All texts are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const daily2Exercises: ToeflReadingExercise[] = [
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-08",
    title: "Borrowing and renewals",
    textKind: "Library policy",
    scene: "library website, borrowing page",
    difficulty: 2,
    estimatedMinutes: 6,
    blocks: [
      {
        heading: "HOW BORROWING WORKS",
        paragraphs: [
          "Standard members may keep up to twelve items at a time for three weeks. Renewals are free and unlimited as long as no other member has reserved the item; reserved items cannot be renewed and must be returned by their due date. Fines are twenty pence per item per day, capped at eight pounds per item, and stop growing once you return the item. Anyone owing more than ten pounds in total loses borrowing rights until the balance is cleared. Lost items are charged at replacement cost plus a five-pound processing fee; if you find and return the item within six months, the replacement charge is refunded minus the fee.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Under what condition can a member NOT renew an item?",
        options: [
          "When the item is more than three weeks old",
          "When another member has reserved it",
          "When the member has twelve items out",
          "When the item is worth more than ten pounds",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "renewals are free and unlimited as long as no other member has reserved the item; reserved items cannot be renewed" }],
          explanation:
            "The policy names one block on renewals: a reservation by someone else. Twelve items is the borrowing ceiling, not a renewal ban, and money limits in the policy concern fines, not renewals.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What happens to a fine once the item is returned?",
        options: [
          "It is cancelled entirely",
          "It keeps growing for six months",
          "It stops growing",
          "It doubles",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "capped at eight pounds per item, and stop growing once you return the item" }],
          explanation:
            "The fine has a ceiling per item and freezes at return; it is neither cancelled nor extended. The item still has to be paid for, which is why the freeze matters to the borrower.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "A member owes eleven pounds in fines. What does the policy say happens?",
        options: [
          "Borrowing stops until the balance is paid",
          "The fines are written off after six months",
          "Only renewals are blocked",
          "Nothing until the debt reaches twenty pounds",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "Anyone owing more than ten pounds in total loses borrowing rights until the balance is cleared" }],
          explanation:
            "Eleven pounds crosses the ten-pound line, so borrowing rights are suspended until the balance is cleared. The policy draws the line at owing more than ten, not at any single item's cap.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "If a lost item is found and returned within six months, the member",
        options: [
          "receives the full replacement charge back",
          "receives the replacement charge back minus the processing fee",
          "still owes the full charge plus the fee",
          "receives the fee back but not the charge",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "if you find and return the item within six months, the replacement charge is refunded minus the fee" }],
          explanation:
            "The refund covers the replacement charge but keeps back the five-pound processing fee; the lure promises the whole amount, which is exactly the distinction the policy's last clause draws.",
        },
      },
    ],
    vocabulary: [
      { word: "renewal", partOfSpeech: "noun", definition: "extending a loan for another period" },
      { word: "reserve", partOfSpeech: "verb", definition: "to ask that an item be held for you" },
      { word: "fine", partOfSpeech: "noun", definition: "money owed as a penalty" },
      { word: "capped", partOfSpeech: "verb (past)", definition: "limited to a maximum" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-09",
    title: "Riverside Café",
    textKind: "Review",
    scene: "local listings site",
    difficulty: 2,
    estimatedMinutes: 6,
    blocks: [
      {
        heading: "Riverside Café — three stars",
        paragraphs: [
          "The location is unbeatable: a terrace over the water with the rowing boats going past, and the flat whites are the best in the neighbourhood. That is the good news, and it is genuinely good. The rest is patchier. Service was friendly but forgetful — we asked twice for the menu card and three times for water. The cakes looked better than they tasted, and the wifi, which the sign promises 'all day', cut out every twenty minutes. Prices are fair for the view, steep for the food. I would return for a morning coffee with a book; I would not bring a friend for lunch.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What overall judgement does the reviewer make?",
        options: [
          "Excellent food and service in a poor location",
          "A mixed experience: strong on setting and coffee, weak on service and food",
          "A terrible café that should be avoided",
          "A lunch spot better than a coffee spot",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "That is the good news, and it is genuinely good. The rest is patchier." }],
          explanation:
            "The review's spine is the split between what works — terrace, coffee — and what does not — service, cakes, wifi. The closing sentence repeats that split, not a blanket verdict in either direction.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Which claim about the wifi does the reviewer implicitly correct?",
        options: [
          "That it is fast",
          "That it runs all day",
          "That it is free",
          "That it needs a password",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "the wifi, which the sign promises 'all day', cut out every twenty minutes" }],
          explanation:
            "The sign's promise is 'all day', and the reviewer's evidence contradicts it: cutting out every twenty minutes is not all-day service. The correction is about the promise's truth, not speed or price.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "'The cakes looked better than they tasted' is a way of saying the cakes",
        options: [
          "were the best part of the visit",
          "promised more than they delivered",
          "should be ordered without coffee",
          "were freshly baked that morning",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "The cakes looked better than they tasted" }],
          explanation:
            "The sentence sets appearance against flavour and lets appearance lose; that is the reviewer's formula for promising more than delivering, applied to food exactly as to the wifi.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the final sentence tell you the reviewer would do?",
        options: [
          "Return for lunch with a friend",
          "Never return",
          "Return alone for coffee",
          "Complain to the manager",
        ],
        correct: 2,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "I would return for a morning coffee with a book; I would not bring a friend for lunch." }],
          explanation:
            "The closing pair accepts one use and rejects another: solo coffee yes, lunch with a friend no. Reading the two halves together is what the item asks for.",
        },
      },
    ],
    vocabulary: [
      { word: "unbeatable", partOfSpeech: "adjective", definition: "so good nothing can rival it" },
      { word: "patchier", partOfSpeech: "adjective", definition: "uneven — the comparative of patchy: good in parts, poor in others" },
      { word: "forgetful", partOfSpeech: "adjective", definition: "not remembering to do things" },
      { word: "steep", partOfSpeech: "adjective", definition: "too expensive (informal)" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-10",
    title: "Airport shuttle timetable",
    textKind: "Timetable",
    scene: "hotel lobby noticeboard",
    difficulty: 2,
    estimatedMinutes: 6,
    blocks: [
      {
        heading: "SHUTTLE TO THE AIRPORT — EVERY 30 MINUTES, 4:30 A.M. TO 11:30 P.M.",
        paragraphs: [
          "The shuttle departs from the hotel forecourt on the hour and half hour, every thirty minutes from half past four in the morning until half past eleven at night. Journey time to Terminal 1 is twenty-five minutes outside rush hour and up to fifty in it; allow an hour if you are catching a flight between seven and nine in the morning. Seats are first come, first served, and the 4:30 and 5:00 departures are usually full by 4:15 with flight crews. Luggage space is one large case per passenger; extra bags travel only if there is room. The last departure that reliably connects with the overnight flights is the 9:30 p.m.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "How often does the shuttle run, and over what span?",
        options: [
          "Every 25 minutes, all night",
          "Every half hour, from 4:30 a.m. to 11:30 p.m.",
          "Every hour, mornings only",
          "Every 30 minutes, only in rush hour",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "every thirty minutes from half past four in the morning until half past eleven at night" }],
          explanation:
            "The heading carries both facts: a thirty-minute frequency and a service day from half past four in the morning to half past eleven at night. The other numbers in the notice are journey times, not headways.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why are the 4:30 and 5:00 departures usually full by 4:15?",
        options: [
          "Because seats can be reserved in advance",
          "Because flight crews take them",
          "Because the fare is lower then",
          "Because luggage space is largest then",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the 4:30 and 5:00 departures are usually full by 4:15 with flight crews" }],
          explanation:
            "The timetable attributes the early crowding to flight crews, and the seats are explicitly first come, first served, so the cause is who queues, not any booking or pricing system.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "A guest must catch a 7:40 a.m. flight and leaves the hotel on the 7:00 shuttle. What does the notice imply about this plan?",
        options: [
          "It is safe because the trip takes only twenty-five minutes",
          "It is risky because morning rush hour can double the journey",
          "It fails because the shuttle does not run then",
          "It works only if the guest has one bag",
        ],
        correct: 1,
        lure: 3,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "up to fifty in it; allow an hour if you are catching a flight between seven and nine in the morning" }],
          explanation:
            "A 7:00 departure falls inside the rush-hour window where the notice itself says to allow an hour; the twenty-five-minute figure applies outside rush hour. Baggage rules are real but are not the risk here.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the notice say about extra bags?",
        options: [
          "They are charged per item",
          "They are banned after 9 p.m.",
          "They travel only if space allows",
          "They are always accepted",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Luggage space is one large case per passenger; extra bags travel only if there is room" }],
          explanation:
            "The allowance is one large case, and anything beyond it is conditional on room, not on a fee or a ban; the notice makes the condition explicit in the same sentence.",
        },
      },
    ],
    vocabulary: [
      { word: "forecourt", partOfSpeech: "noun", definition: "the open area in front of a building" },
      { word: "departure", partOfSpeech: "noun", definition: "a leaving trip" },
      { word: "rush hour", partOfSpeech: "noun", definition: "the peak traffic periods around working hours" },
      { word: "reliably", partOfSpeech: "adverb", definition: "in a way you can count on" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-11",
    title: "Course feedback form",
    textKind: "Form",
    scene: "end-of-term course review",
    difficulty: 2,
    estimatedMinutes: 6,
    blocks: [
      {
        heading: "COURSE FEEDBACK — ECONOMETRICS 2",
        paragraphs: [
          "Rate each area from 1 (poor) to 5 (excellent). Written comments are anonymous: your name is stored separately from your answers and tutors see the comments only after marks are released. Question 8 asks for one change that would most improve the course; suggestions already adopted from last year include the problem-class walkthroughs and the recorded summaries, both introduced this term. Question 9 asks whether the workload was manageable — answer honestly, as the answer feeds the workload group that sets next year's deadlines. Forms take about five minutes; one per student.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "When do tutors see the written comments?",
        options: [
          "Immediately after submission",
          "Only after marks are released",
          "Never; only the department sees them",
          "After the student's name is attached",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "tutors see the comments only after marks are released" }],
          explanation:
            "The form holds comments back until marks are out, and the anonymity machinery — names stored separately — exists to make that delay meaningful rather than decorative.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Which features of this term's course came from last year's feedback?",
        options: [
          "The recorded summaries only",
          "The problem-class walkthroughs only",
          "Both the walkthroughs and the recorded summaries",
          "Neither; they were planned anyway",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "suggestions already adopted from last year include the problem-class walkthroughs and the recorded summaries, both introduced this term" }],
          explanation:
            "The form credits last year's question 8 answers with two changes, and both appeared this term; the item checks that the reader catches the pair, not just one half of it.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What is the practical consequence of question 9's answers?",
        options: [
          "They set next year's deadlines",
          "They decide the tutors' pay",
          "They appear on transcripts",
          "They replace the exam marks",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the answer feeds the workload group that sets next year's deadlines" }],
          explanation:
            "Question 9 feeds the workload group, and the group's job is setting the following year's deadlines; the honest answer is what the form asks for precisely because something real depends on it.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "The tone of the instruction 'answer honestly' suggests that",
        options: [
          "answers are checked against records",
          "the form's value depends on candour",
          "anonymous answers can still be traced",
          "the workload question is optional",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "answer honestly, as the answer feeds the workload group that sets next year's deadlines" }],
          explanation:
            "The 'as' clause gives the reason honesty matters: a real decision consumes the answer. Nothing in the form promises verification or tracing; the appeal is to usefulness, which is the inference.",
        },
      },
    ],
    vocabulary: [
      { word: "anonymous", partOfSpeech: "adjective", definition: "carrying no name" },
      { word: "adopted", partOfSpeech: "verb (past)", definition: "taken up and put into effect" },
      { word: "workload", partOfSpeech: "noun", definition: "the amount of work required" },
      { word: "walkthrough", partOfSpeech: "noun", definition: "a guided step-by-step explanation" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-12",
    title: "Housing office weekly note",
    textKind: "Newsletter",
    scene: "student accommodation mailing list",
    difficulty: 2,
    estimatedMinutes: 6,
    blocks: [
      {
        heading: "HOUSING OFFICE — WEEK 6",
        paragraphs: [
          "Keys: the new lock on the Annexe bike shed is now in force. Collect your free replacement fob from the office before Friday; after Friday the old fobs stop working and a replacement costs five pounds.",
          "Heating: the boiler in Maple Court is serviced on Thursday between nine and one. Radiators will be cold that morning, not broken — please do not report a fault. Hot water is unaffected.",
          "Noticeboard: photographs from the winter ball are in the common room on Sunday afternoon, and the losing pool teams must return their trophies to the office by the end of the month.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What happens to old bike-shed fobs after Friday?",
        options: [
          "They are collected for recycling",
          "They stop working and cost five pounds to replace",
          "They keep working alongside the new lock",
          "They become the gym fobs",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "after Friday the old fobs stop working and a replacement costs five pounds" }],
          explanation:
            "The change has two teeth: old fobs die, and replacements stop being free. The newsletter separates the free window from the paid one at exactly the Friday line.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why does the newsletter ask residents not to report a fault on Thursday?",
        options: [
          "Because the office is closed that day",
          "Because the radiators are being replaced",
          "Because the cold is planned maintenance, not a breakdown",
          "Because faults are only handled in writing",
        ],
        correct: 2,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "Radiators will be cold that morning, not broken — please do not report a fault" }],
          explanation:
            "The note pre-empts a false alarm: scheduled servicing will look like failure to anyone who has not read the reason. The distinction it draws is between cold and broken.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Which promise does the boiler item contain?",
        options: [
          "Radiators will be hot by noon",
          "Hot water continues as normal",
          "The office will pay for heating loss",
          "Servicing moves to the evening",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "Hot water is unaffected." }],
          explanation:
            "The only reassurance given is about hot water; the radiators are written off for the morning without compensation, and the reader who misses the four-word sentence at the end loses the answer.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Who must return trophies, and by when?",
        options: [
          "The winning teams, by Sunday",
          "The losing pool teams, by the end of the month",
          "All residents, by Friday",
          "The photographer, by the end of the month",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "the losing pool teams must return their trophies to the office by the end of the month" }],
          explanation:
            "The final line names the losing pool teams — not the winners — and gives them the month's end. The two time limits in the letter (Friday and month's end) belong to different items entirely.",
        },
      },
    ],
    vocabulary: [
      { word: "fob", partOfSpeech: "noun", definition: "a small electronic key token" },
      { word: "boiler", partOfSpeech: "noun", definition: "the unit that heats water for a building" },
      { word: "serviced", partOfSpeech: "verb (past)", definition: "given routine maintenance" },
      { word: "trophies", partOfSpeech: "noun", definition: "prize cups kept by the winning teams" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-13",
    title: "Room to let",
    textKind: "Listing",
    scene: "city flatshare website",
    difficulty: 2,
    estimatedMinutes: 6,
    blocks: [
      {
        heading: "DOUBLE ROOM IN FRIENDLY FLATSHARE — 460 P.M.",
        paragraphs: [
          "Sunny double room in a three-person flat above a bakery (early risers benefit; the ovens warm the floor). Rent is 460 a month plus a third of the bills. The flat has a shared living room, a kitchen with everything that works, and a bathroom shared with two others. We are two final-year students, tidy without being fanatical, looking for someone who stays at least until summer. No smoking indoors, cats negotiable, dogs no. The room is furnished — bed, desk, wardrobe — and available from the first of the month. Deposit is one month's rent, protected in a government scheme, and we will ask for a reference from your current place. Bills average sixty a month each in winter, less in summer.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Who would find the bakery location most inconvenient?",
        options: [
          "A baker who starts at four",
          "A student who sleeps late",
          "Someone who works from home",
          "A tenant with a cat",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "early risers benefit; the ovens warm the floor" }],
          explanation:
            "The listing itself says the flat suits early risers; the mirror image is that late sleepers lose, and the noise plus the warmth cut the same way. Bakers, by contrast, are exactly the early type.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Which animal policy is correct?",
        options: [
          "Cats yes, dogs yes",
          "Cats negotiable, dogs no",
          "No animals at all",
          "Dogs negotiable, cats no",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "No smoking indoors, cats negotiable, dogs no" }],
          explanation:
            "The three-part rule list gives animals a middle and a no: cats can be discussed, dogs cannot. The item checks the reader's grip on a compressed rule string, a daily-life skill in itself.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What protects the tenant's deposit?",
        options: [
          "The landlord's insurance",
          "A government scheme",
          "The flatmates' agreement",
          "The bakery's lease",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Deposit is one month's rent, protected in a government scheme" }],
          explanation:
            "The listing names the protection explicitly: a government scheme, not a private arrangement. The amount — one month's rent — is stated in the same clause and is not what the item asks about.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What two commitments does the listing ask of a new tenant?",
        options: [
          "Staying until summer and providing a reference",
          "Paying summer bills early and being fanatically tidy",
          "Buying the furniture and taking a cat",
          "Signing for a year and giving up smoking",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "looking for someone who stays at least until summer" }, { block: 0, paragraph: 0, quote: "we will ask for a reference from your current place" }],
          explanation:
            "Two expectations stand out from the listing's closing lines: a minimum stay until summer and a reference. Tidiness is 'without being fanatical', and smoking applies indoors only — the pair in the correct option is what is actually asked.",
        },
      },
    ],
    vocabulary: [
      { word: "flatshare", partOfSpeech: "noun", definition: "a flat rented jointly by unrelated people" },
      { word: "deposit", partOfSpeech: "noun", definition: "money held against damage or unpaid rent" },
      { word: "reference", partOfSpeech: "noun", definition: "a statement from a previous landlord" },
      { word: "negotiable", partOfSpeech: "adjective", definition: "open to discussion" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-14",
    title: "Lab maintenance week",
    textKind: "Announcement",
    scene: "engineering department corridor",
    difficulty: 2,
    estimatedMinutes: 6,
    blocks: [
      {
        heading: "LABS CLOSED — WEEK 9 (ALL TEACHING LABORATORIES)",
        paragraphs: [
          "During week 9 all teaching laboratories are closed for the annual safety inspection and recalibration. Practical classes are rescheduled: Monday sessions move to the following Friday, and Wednesday sessions are replaced by a recorded walkthrough plus a worksheet, both on the portal by Monday of week 9. Project students with 24-hour access keep it, except on the Wednesday, when the whole building is locked for the electrical test; card readers will be off from eight in the morning to six in the evening. The workshop reopens Thursday morning at half past seven for anyone who lost time. Questions to the technical office, not to your lecturer.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why are the labs closed in week 9?",
        options: [
          "For a building move",
          "For the annual safety inspection and recalibration",
          "Because of the electrical test only",
          "For teaching staff training",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "closed for the annual safety inspection and recalibration" }],
          explanation:
            "The week's closure exists for inspection and recalibration; the electrical test is one day inside that week, not the reason for it. The announcement's first sentence carries the purpose the rest of it works out.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What happens to Monday practical sessions?",
        options: [
          "They are cancelled",
          "They move to the following Friday",
          "They become recorded walkthroughs",
          "They merge with Wednesday sessions",
        ],
        correct: 1,
        lure: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Monday sessions move to the following Friday, and Wednesday sessions are replaced by a recorded walkthrough" }],
          explanation:
            "The two days get different treatments, and the item separates them: Monday is rescheduled to Friday, while the recorded walkthrough belongs to Wednesday. The lure swaps the two halves of the sentence.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "On which day can even project students not enter, and when do the card readers return?",
        options: [
          "Monday; readers return at eight",
          "Wednesday; readers return at six in the evening",
          "Thursday; readers return at half past seven",
          "Wednesday; readers stay off all week",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "except on the Wednesday, when the whole building is locked for the electrical test; card readers will be off from eight in the morning to six in the evening" }],
          explanation:
            "The exception day is Wednesday, and the off-window ends at six in the evening, which is when access resumes. The Thursday half-past-seven time is the workshop's reopening, not the readers' return — two clocks in one announcement.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Who should students ask about the arrangements?",
        options: [
          "Their lecturer",
          "The technical office",
          "The estate department",
          "The portal administrators",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Questions to the technical office, not to your lecturer." }],
          explanation:
            "The routing rule is explicit and even rules out the lecturer by name; the announcement ends by sending queries where the answers actually live, and the item tests that routing.",
        },
      },
    ],
    vocabulary: [
      { word: "recalibration", partOfSpeech: "noun", definition: "resetting instruments to be accurate" },
      { word: "rescheduled", partOfSpeech: "verb (past)", definition: "moved to a new time" },
      { word: "worksheet", partOfSpeech: "noun", definition: "a printed exercise sheet" },
      { word: "card reader", partOfSpeech: "noun", definition: "the device that reads door-entry cards" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
