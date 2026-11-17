/**
 * TOEFL Reading Practice Library — Read in Daily Life, batch 3 (PROMPT 49).
 *
 * Seven standard exercises (difficulty 3). Two-text sets and denser small
 * print: an email with a reply, an advert with terms, paired reviews, an
 * FAQ, an itinerary and a policy — read across texts for purpose, intent,
 * careful implication and the difference between what is promised and what
 * is said.
 *
 * All texts are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const daily3Exercises: ToeflReadingExercise[] = [
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-15",
    title: "Extension request",
    textKind: "Email and reply",
    scene: "course inbox, deadline week",
    difficulty: 3,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "Subject: Extension request — ECON302 essay",
        paragraphs: [
          "Dear Dr Farid, I am writing to request a short extension for the ECON302 essay. My current draft covers the theory section but the empirical part needs the dataset that was corrected last Thursday, and I would rather submit the analysis on the revised numbers than on the original ones. Could I have until Tuesday? I understand the penalty rule and am not asking for it to be waived — only for the clock to start from the new data. — Priya",
        ],
      },
      {
        heading: "Re: Extension request",
        paragraphs: [
          "Priya — granted, to Tuesday noon, no penalty, since the delay traces to the data correction rather than to your planning. Upload to the usual portal; the timestamp is what counts. Do not email me a copy as well — the portal is the record. One caution: Tuesday noon is a hard line, because the external examiner's meeting is Wednesday morning and I must have everything graded before it. — M. Farid",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is Priya's central argument for the extension?",
        options: [
          "She has been ill",
          "The data she must analyse was corrected too late for the original deadline",
          "The essay topic was changed",
          "The penalty rule is unfair",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "the empirical part needs the dataset that was corrected last Thursday, and I would rather submit the analysis on the revised numbers" }],
          explanation:
            "Priya's case rests on the data correction, not on health or unfairness; she even says she accepts the penalty rule. Her preference for the revised numbers is the reason the whole email exists.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does Dr Farid's reply say about the penalty?",
        options: [
          "It is waived because of the data correction",
          "It stands but at half rate",
          "It applies because Tuesday is late",
          "It will be decided by the external examiner",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 1, paragraph: 0, quote: "granted, to Tuesday noon, no penalty, since the delay traces to the data correction rather than to your planning" }],
          explanation:
            "The reply grants the extension with no penalty, and gives its reason in the same breath: the cause was the correction, not her planning. The examiner appears later only as the reason for the hard line.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "According to the reply, what counts as the submission?",
        options: [
          "The emailed copy",
          "The portal upload's timestamp",
          "The essay printed and signed",
          "Whichever arrives first",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 1, paragraph: 0, quote: "Upload to the usual portal; the timestamp is what counts. Do not email me a copy as well — the portal is the record" }],
          explanation:
            "The reply elevates the portal's timestamp to the record and explicitly demotes the email copy; the item tests which channel has legal weight in this exchange.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Why is Tuesday noon described as a hard line?",
        options: [
          "The portal closes at noon",
          "The external examiner meets on Wednesday and grading must finish first",
          "Priya asked for noon specifically",
          "Penalties double after noon",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 1, paragraph: 0, quote: "the external examiner's meeting is Wednesday morning and I must have everything graded before it" }],
          explanation:
            "The reply explains its own strictness: grading must be finished before the examiner's Wednesday meeting, so noon on Tuesday is the last workable minute. The constraint belongs to the examiner's calendar, not the portal's.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What can be inferred about the 'penalty rule' Priya mentions?",
        options: [
          "It does not exist; she invented it",
          "It exists and normally applies to late essays",
          "It applies only to emailed copies",
          "It was abolished last year",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "I understand the penalty rule and am not asking for it to be waived — only for the clock to start from the new data" }],
          explanation:
            "Priya treats the rule as real and binding, and the reply's 'no penalty' only makes sense against a rule that would otherwise bite. Both writers assume it exists, which is the inference the item draws out.",
        },
      },
    ],
    vocabulary: [
      { word: "extension", partOfSpeech: "noun", definition: "extra time allowed for submitting work" },
      { word: "empirical", partOfSpeech: "adjective", definition: "based on observed data rather than theory" },
      { word: "waived", partOfSpeech: "verb (past)", definition: "set aside, not applied" },
      { word: "timestamp", partOfSpeech: "noun", definition: "the recorded moment of an upload" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-16",
    title: "Tandem language exchange app",
    textKind: "Advertisement and terms",
    scene: "phone app store listing",
    difficulty: 3,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "TALKPOOL — SPEAK WITH THE WORLD, FREE",
        paragraphs: [
          "Match with a native speaker in seconds and chat by text, voice or video. Learn the way people actually talk: corrections from your partner, not from a machine. No ads, no levels to buy, nothing to unlock.",
        ],
      },
      {
        heading: "Terms (the small print)",
        paragraphs: [
          "The free tier allows one match per day and text only. Voice and video, unlimited matches and the correction tool that shows your partner's grammar fixes are part of TalkPool Plus, billed monthly; cancel any time, and your matches and history are kept for thirty days after cancelling. Accounts inactive for a year are deleted with their histories. We never sell your messages; we do use them, anonymised, to improve the correction tool.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "The headline 'nothing to unlock' sits next to terms that unlock plenty. What is actually free?",
        options: [
          "Everything the advert shows",
          "One text match a day",
          "Unlimited voice and video",
          "The grammar-correction tool",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 1, paragraph: 0, quote: "The free tier allows one match per day and text only" }],
          explanation:
            "The terms define the free tier precisely: one match per day, text only. Voice, video, unlimited matching and the correction tool are all Plus features, so the honest answer is the narrowest option.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What happens to your matches and history if you cancel Plus?",
        options: [
          "They are deleted immediately",
          "They are kept for thirty days",
          "They transfer to the free tier forever",
          "They are emailed to you",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 1, paragraph: 0, quote: "your matches and history are kept for thirty days after cancelling" }],
          explanation:
            "Cancellation triggers a thirty-day retention window for matches and history; the item checks this shelf life against the immediate deletion a reader might fear.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Which statement about messages is true?",
        options: [
          "They are sold to advertisers",
          "They are never read by anyone",
          "They are not sold, but anonymised copies are used to improve the tool",
          "They are deleted within a year of being sent",
        ],
        correct: 2,
        lure: 0,
        meta: {
          skills: ["inference", "details"],
          evidence: [{ block: 1, paragraph: 0, quote: "We never sell your messages; we do use them, anonymised, to improve the correction tool" }],
          explanation:
            "The terms draw a two-part line: no selling, but internal use of anonymised text. The lure keeps only the first half, and the item exists to catch readers who stop at the reassurance and miss the clause after the semicolon.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "When are whole accounts deleted?",
        options: [
          "After thirty days of inactivity",
          "After a year of inactivity",
          "Only on request",
          "When Plus is cancelled",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 1, paragraph: 0, quote: "Accounts inactive for a year are deleted with their histories" }],
          explanation:
            "Two clocks run in the terms: thirty days for cancelled Plus content, a year for an inactive account. The item insists on the second, and its histories go with it.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The advert's phrase 'corrections from your partner, not from a machine' implies that rivals",
        options: [
          "use machine correction",
          "have no correction at all",
          "charge for corrections",
          "employ human teachers",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "corrections from your partner, not from a machine" }],
          explanation:
            "The contrast only works if the reader accepts that other apps correct by machine; the 'not from' construction smuggles in the claim about rivals without stating it, which is exactly what the item asks the reader to notice.",
        },
      },
    ],
    vocabulary: [
      { word: "tier", partOfSpeech: "noun", definition: "one level of a layered service" },
      { word: "billed", partOfSpeech: "verb (past)", definition: "charged, on a recurring basis" },
      { word: "anonymised", partOfSpeech: "adjective", definition: "stripped of identifying details" },
      { word: "inactive", partOfSpeech: "adjective", definition: "not used for a long period" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-17",
    title: "Dining hall overhaul",
    textKind: "Notice and schedule",
    scene: "campus dining hall entrance",
    difficulty: 3,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "DINING HALL — APRIL REFURBISHMENT",
        paragraphs: [
          "From the second week of April the main hall is closed for refurbishment. Meals move to the Marquee on the quad: same menu, same prices, shorter queues, no views. Hot lunches are served 11:30 to 2:00 as usual; breakfast, for reasons of space, is Grab-and-Go only — cold options, no cooked line. Students with allergies should note that the Marquee kitchen is smaller, so the allergen-free station is suspended for the month; pre-packed allergen-free meals can be ordered at the till a day ahead.",
        ],
      },
      {
        heading: "Week-by-week",
        paragraphs: [
          "Weeks 1–2 (7–18 April): Marquee only, as described above. Week 3 (21–25 April): main hall reopens for lunch only, 12:00 to 2:00, while the Marquee continues full service. Week 4 (28 April): both closed on the Monday for the move-back; normal service everywhere from Tuesday.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What changes about breakfast during the refurbishment, and why?",
        options: [
          "It is cancelled; the bakers are needed elsewhere",
          "It becomes cold Grab-and-Go only, because the Marquee lacks space",
          "It moves to the main hall, which stays open",
          "It is served all morning in the quad",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "breakfast, for reasons of space, is Grab-and-Go only — cold options, no cooked line" }],
          explanation:
            "The notice ties the breakfast change to space: the Marquee cannot run a cooked line, so breakfast is cold Grab-and-Go. The same menu promise holds for lunch, but breakfast is the exception the notice flags.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What happens to the allergen-free station, and what replaces it?",
        options: [
          "It moves to the main hall; nothing replaces it",
          "It is suspended; pre-packed meals can be ordered a day ahead",
          "It stays open with a smaller menu",
          "It becomes the Grab-and-Go counter",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the allergen-free station is suspended for the month; pre-packed allergen-free meals can be ordered at the till a day ahead" }],
          explanation:
            "The smaller kitchen suspends the station for the month, and the substitute is a day-ahead ordering service at the till. The item pairs the loss with the workaround, which is what an allergic student actually needs to know.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "During week 3, where can you get dinner?",
        options: [
          "Main hall only",
          "Marquee only",
          "Both halls",
          "Nowhere; both are closed",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 1, paragraph: 0, quote: "Week 3 (21–25 April): main hall reopens for lunch only, 12:00 to 2:00, while the Marquee continues full service" }],
          explanation:
            "In week 3 the main hall serves lunch only, so full service — which includes the evening meal — exists only at the Marquee. Reading the two clauses together is the whole task.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "On which single date is NO food available anywhere?",
        options: [
          "Monday 7 April",
          "Monday 28 April",
          "Tuesday 29 April",
          "Friday 25 April",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 1, paragraph: 0, quote: "Week 4 (28 April): both closed on the Monday for the move-back; normal service everywhere from Tuesday" }],
          explanation:
            "The only day with nothing open is the Monday of the move-back; the first Monday of the month is Marquee-as-normal, and by Tuesday service is everywhere. The item is a date-lookup across two blocks.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The phrase 'same menu, same prices, shorter queues, no views' mainly works to",
        options: [
          "warn students that food will be worse",
          "set expectations honestly: gains and one loss",
          "advertise the Marquee as an improvement",
          "explain why the hall is being refurbished",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "same menu, same prices, shorter queues, no views" }],
          explanation:
            "The list trades a small loss against small gains in one breath, which is a promise of honesty rather than a sales pitch or a warning. The notice is managing expectations about a temporary building, and the item asks why the line is built that way.",
        },
      },
    ],
    vocabulary: [
      { word: "refurbishment", partOfSpeech: "noun", definition: "renovation of a building" },
      { word: "marquee", partOfSpeech: "noun", definition: "a large temporary tent" },
      { word: "allergen", partOfSpeech: "noun", definition: "a substance that triggers an allergy" },
      { word: "suspended", partOfSpeech: "verb (past)", definition: "paused for a period" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-18",
    title: "Two reviews of the Harbour Hostel",
    textKind: "Paired reviews",
    scene: "booking site, mixed opinions",
    difficulty: 3,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "Harbour Hostel — review by Marta (4 stars)",
        paragraphs: [
          "Stayed three nights in a six-bed dorm. Bunk beds were solid, lockers big enough for a whole rucksack, and the kitchen genuinely usable, with labels for whose food is whose. The free walking tour the reception sells is actually free, and good. Only downsides: the street is loud until midnight, and the 'en-suite' bathroom is en-suite to the whole dorm, not to your bed — you share with five others. Would stay again for the price.",
        ],
      },
      {
        heading: "Harbour Hostel — review by Jonas (2 stars)",
        paragraphs: [
          "The 'en-suite' marketing is misleading: it means one bathroom per dorm of six, which is not what en-suite promises anywhere else in the world. My locker was broken and was fixed only after I asked twice. Kitchen fine, location central, but if you are over thirty and want sleep, bring earplugs: the street is a bar strip. The walking tour is fine. Value for money if you are nineteen; I am not.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Both reviewers agree that",
        options: [
          "the locker was broken",
          "the kitchen is good",
          "the price was too high",
          "the walking tour is a scam",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the kitchen genuinely usable" }, { block: 1, paragraph: 0, quote: "Kitchen fine" }],
          explanation:
            "Marta calls the kitchen genuinely usable and Jonas calls it fine; the broken locker is Jonas's alone, the price satisfies Marta, and both actually endorse the walking tour. Cross-matching the two texts finds the overlap.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What do both reviews say about 'en-suite'?",
        options: [
          "It accurately describes the rooms",
          "It means one bathroom shared by the dorm, misleadingly",
          "It costs extra",
          "It applies only to private rooms",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "the 'en-suite' bathroom is en-suite to the whole dorm, not to your bed" }, { block: 1, paragraph: 0, quote: "it means one bathroom per dorm of six, which is not what en-suite promises anywhere else" }],
          explanation:
            "Both writers decode the word the same way: one bathroom per dorm of six, sold under a label that usually means a private room's own bathroom. The shared reading is the item's answer.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does each reviewer conclude about value, and what explains the difference?",
        options: [
          "Both find it poor value",
          "Marta would return; Jonas found it priced for the young, not for him",
          "Jonas found it cheap; Marta found it expensive",
          "Both would return for the kitchen",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "Would stay again for the price." }, { block: 1, paragraph: 0, quote: "Value for money if you are nineteen; I am not." }],
          explanation:
            "Marta's verdict is a yes at the price; Jonas's verdict is that the price works only for a nineteen-year-old, and he says he is not one. Age and expectations, not the price list itself, separate the two conclusions.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Which practical advice do the reviews jointly support?",
        options: [
          "Book a private room for quiet",
          "Bring earplugs and check your locker on arrival",
          "Avoid the walking tour",
          "Cook elsewhere; the kitchen is poor",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the street is loud until midnight" }, { block: 1, paragraph: 0, quote: "if you are over thirty and want sleep, bring earplugs" }, { block: 1, paragraph: 0, quote: "My locker was broken and was fixed only after I asked twice" }],
          explanation:
            "Both texts mention the loud street, Jonas converts it into earplug advice, and his locker story converts into check-on-arrival advice. The other options contradict what the reviewers actually say about tours and the kitchen.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The reception 'sells' a free tour, in Marta's wording. What is the writer doing with that word?",
        options: [
          "Reporting a hidden charge she discovered",
          "Ironising: it is called selling but is actually free and good",
          "Complaining that the guide asked for tips",
          "Warning that the tour is oversubscribed",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "The free walking tour the reception sells is actually free, and good." }],
          explanation:
            "Marta quotes 'sells' and then cancels it: actually free, and good. The scare-quotes irony is the point — the sentence works by setting the salesman's verb against the truth, which is what the item asks the reader to see.",
        },
      },
    ],
    vocabulary: [
      { word: "dorm", partOfSpeech: "noun", definition: "a shared sleeping room" },
      { word: "en-suite", partOfSpeech: "adjective", definition: "joined to the room; here, misused for shared" },
      { word: "misleading", partOfSpeech: "adjective", definition: "giving the wrong idea" },
      { word: "earplugs", partOfSpeech: "noun", definition: "small plugs to block noise" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-19",
    title: "Printing credits",
    textKind: "FAQ",
    scene: "IT services page",
    difficulty: 3,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "PRINTING — FREQUENTLY ASKED",
        paragraphs: [
          "How many credits do I get? Full-time students receive 200 black-and-white pages a term; part-timers get 80. Colour printing is never included and always costs five credits a page. Credits do not roll over: the term's allowance dies on the last day of term, so spend it before then.",
          "Can I print from my own laptop? Yes, after installing the print client; but the client only works on campus networks, not on the halls' broadband, which belongs to a different provider. Queue your job from the library or any computer room and release it at any printer by tapping your card.",
          "What if the printer eats my pages? Report it at the help desk within 48 hours and the credits are refunded to the same term's balance. Refunds are per-page, not per-job, so report each spoiled page.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "How does a part-time student's allowance compare with a full-time student's?",
        options: [
          "The same",
          "Two-fifths the size",
          "Double",
          "Half",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Full-time students receive 200 black-and-white pages a term; part-timers get 80" }],
          explanation:
            "Eighty against two hundred is two-fifths, and the FAQ expects the reader to do that arithmetic in passing. The item is a number relation, not just a number recall.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What happens to unused credits at the end of term?",
        options: [
          "They roll to next term",
          "They are paid out",
          "They expire on the last day of term",
          "They convert to colour credits",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the term's allowance dies on the last day of term, so spend it before then" }],
          explanation:
            "The FAQ kills the allowance on the last day and says so bluntly; 'dies' leaves no room for rollover, payout or conversion. The advice clause exists because the rule is unforgiving.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Why can't students print from the halls?",
        options: [
          "The print client is not installed there",
          "Halls broadband belongs to another provider and the client works only on campus networks",
          "The halls' printers are incompatible",
          "Printing from halls is banned by the university",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 1, quote: "the client only works on campus networks, not on the halls' broadband, which belongs to a different provider" }],
          explanation:
            "The client is fine; the network is the problem. The halls' broadband is another provider's system, so the campus-only client cannot reach the print queues from there — a cause-and-effect reading across one clause.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "A printer spoils six pages of one job. What must the student do to get all the credits back?",
        options: [
          "Report within 48 hours; refunds are per-page",
          "Report within 48 hours; one report covers the job",
          "Report any time; refunds are automatic",
          "Reprint first, then claim",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Report it at the help desk within 48 hours" }, { block: 0, paragraph: 2, quote: "Refunds are per-page, not per-job, so report each spoiled page" }],
          explanation:
            "Two conditions stack: the 48-hour window and the per-page accounting. Reporting the job once would return one page's credits, which is why the FAQ insists on each spoiled page.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What is the release step in the printing process?",
        options: [
          "Releasing your card to the desk",
          "Tapping your card at the printer to start the queued job",
          "Releasing the job from your laptop after installing the client",
          "Releasing the credits after the term ends",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "Queue your job from the library or any computer room and release it at any printer by tapping your card" }],
          explanation:
            "The workflow has two stages: queue from a computer, then release at the printer with a card tap. The item checks the second stage, which is where jobs actually become paper.",
        },
      },
    ],
    vocabulary: [
      { word: "credits", partOfSpeech: "noun", definition: "the printing allowance currency" },
      { word: "allowance", partOfSpeech: "noun", definition: "an amount permitted per period" },
      { word: "queue", partOfSpeech: "verb", definition: "to send a job to wait for printing" },
      { word: "spoiled", partOfSpeech: "adjective", definition: "ruined, printed wrongly" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-20",
    title: "Field trip plan",
    textKind: "Itinerary",
    scene: "geography department handout",
    difficulty: 3,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "GEOGRAPHY FIELD TRIP — COASTAL EROSION, SATURDAY",
        paragraphs: [
          "07:45 — coach departs from the science car park. Be early: the coach waits for nobody and the tide does not either. 09:30 — arrive at Fenwick Bay; morning spent measuring the cliff profile at three stations (bring the tape and clipboard; gloves recommended — the mud is iron-hard in the morning and slippery by noon). 12:30 — packed lunch at the visitor centre, which has shelters if it rains. 13:30 — dune transect walk, two kilometres, finishing at the harbour. 16:00 — coach leaves the harbour. Anyone missing the coach funds their own way home.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the stated reason for being early to the coach?",
        options: [
          "Seats are unreserved",
          "The coach leaves on time and the day's schedule is fixed by the tide",
          "The driver checks names at 7:30",
          "Breakfast is served on board",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "Be early: the coach waits for nobody and the tide does not either" }],
          explanation:
            "The note gives two punctual masters: the coach and the tide. The measured morning depends on low-tide access, so the whole day's clock is fixed — the reader infers that lateness breaks more than a bus ride.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why does the handout mention gloves?",
        options: [
          "The cliff rock is sharp",
          "The mud's condition changes between morning and noon",
          "The tape measures are rusty",
          "The visitor centre requires them",
        ],
        correct: 1,
        meta: {
          skills: ["details", "inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "gloves recommended — the mud is iron-hard in the morning and slippery by noon" }],
          explanation:
            "The glove advice is attached to the mud's two personalities: iron-hard early, slippery later. Either state argues for gloves, and the handout explains its own recommendation in the dash that follows it.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Where will the group be if it rains at lunchtime?",
        options: [
          "At the harbour",
          "In shelters at the visitor centre",
          "On the coach",
          "At the dune transect",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "12:30 — packed lunch at the visitor centre, which has shelters if it rains" }],
          explanation:
            "The itinerary plans for weather: lunch sits at the visitor centre because the shelters are there. The dune walk comes after, and the harbour only appears at the day's end.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the last line of the itinerary tell students about missing the 16:00 coach?",
        options: [
          "The department will send a car",
          "They pay for their own transport home",
          "They can catch the next service",
          "They must telephone the office first",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "Anyone missing the coach funds their own way home" }],
          explanation:
            "'Funds their own way home' assigns the cost to the student who misses the departure; no rescue is offered. The plain-language warning closes the document the way such documents do.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "How far is the afternoon walk, and what does it finish at?",
        options: [
          "One kilometre, finishing at the visitor centre",
          "Two kilometres, finishing at the harbour",
          "Three kilometres, finishing at the coach",
          "Two kilometres, finishing at the cliff stations",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "13:30 — dune transect walk, two kilometres, finishing at the harbour" }],
          explanation:
            "The afternoon is a two-kilometre transect ending at the harbour, which is why the 16:00 coach collects the group there. The itinerary's geography — where the day ends — is the item's answer.",
        },
      },
    ],
    vocabulary: [
      { word: "erosion", partOfSpeech: "noun", definition: "the wearing away of land by water or wind" },
      { word: "transect", partOfSpeech: "noun", definition: "a line along which measurements are taken" },
      { word: "tide", partOfSpeech: "noun", definition: "the daily rise and fall of the sea" },
      { word: "stations", partOfSpeech: "noun", definition: "fixed measuring points" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-21",
    title: "Freezing your membership",
    textKind: "Policy",
    scene: "gym website, membership terms",
    difficulty: 3,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "FREEZE AND PAUSE — MEMBERSHIP TERMS",
        paragraphs: [
          "Members may freeze a standard membership twice per year for a minimum of two weeks and a maximum of three months each time. A freeze costs nothing, but the monthly fee continues at half rate while the membership is frozen, and the frozen months do not extend the contract — the end date stays where it was. Freezes cannot overlap with the notice period: you cannot freeze your way out of the four weeks' notice required to cancel. Freezes apply from the first day of the month after we receive the form; forms arriving mid-month freeze from the next month's first day, not from the day they arrive.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "How many times a year may a member freeze, and for how long each time?",
        options: [
          "Once a year, up to three months",
          "Twice a year, two weeks to three months each time",
          "Unlimited freezes of two weeks",
          "Twice a year, one month each time",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "freeze a standard membership twice per year for a minimum of two weeks and a maximum of three months each time" }],
          explanation:
            "The policy fixes both the count and the window: twice a year, each freeze between two weeks and three months. The other numbers in the clause are minima and maxima of the same window, not separate allowances.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What happens to the monthly fee during a freeze?",
        options: [
          "It stops entirely",
          "It continues at half rate",
          "It is charged double on resumption",
          "It is refunded at the end",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the monthly fee continues at half rate while the membership is frozen" }],
          explanation:
            "A freeze is a discount, not a stop: half rate continues for the frozen months. The 'costs nothing' earlier in the sentence means no freeze FEE — the small print separates the two kinds of money.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "A member's contract ends in September. She freezes June to August. When does her membership now end?",
        options: [
          "December — the frozen months extend the contract",
          "September — frozen months do not extend the contract",
          "June — the freeze ends it early",
          "The policy does not say",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the frozen months do not extend the contract — the end date stays where it was" }],
          explanation:
            "The policy answers the natural next question before it is asked: freezing buys no extra time at the end. The end date stays in September, which is the whole point of the clause.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Why can a member not 'freeze their way out' of cancelling?",
        options: [
          "Freezes are capped at two a year",
          "A freeze cannot overlap the four-week notice period required to cancel",
          "Frozen months still count as active",
          "The form cannot be filed during notice",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Freezes cannot overlap with the notice period: you cannot freeze your way out of the four weeks' notice required to cancel" }],
          explanation:
            "The policy blocks the trick by law, not by arithmetic: the four weeks of notice must run unfrozen. The clause names the exploit it is closing, which is why the item can quote it.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "A form arrives on 14 March. When does the freeze begin?",
        options: [
          "14 March, on receipt",
          "1 April, the first day of the next month",
          "1 March, backdated",
          "15 March, the day after receipt",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "forms arriving mid-month freeze from the next month's first day, not from the day they arrive" }],
          explanation:
            "The effective date rule sends mid-month forms to the first of the following month; a March form waits for April. The clause even answers the wrong guess in its own last words.",
        },
      },
    ],
    vocabulary: [
      { word: "freeze", partOfSpeech: "verb", definition: "to pause a membership temporarily" },
      { word: "overlap", partOfSpeech: "verb", definition: "to run during the same period as" },
      { word: "notice period", partOfSpeech: "noun", definition: "the warning time required before cancelling" },
      { word: "mid-month", partOfSpeech: "adverb", definition: "part way through a month" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
