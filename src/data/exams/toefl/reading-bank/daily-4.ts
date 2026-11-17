/**
 * TOEFL Reading Practice Library — Read in Daily Life, batch 4 (PROMPT 49).
 *
 * Six advanced exercises (difficulty 4). Register, hedging and attitude:
 * email chains with shifting plans, a mandatory workshop notice, a
 * recruitment callboard, a gadget review, a landlord thread and a visit
 * guide — read for tone, implication and what is promised against what is
 * said.
 *
 * All texts are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const daily4Exercises: ToeflReadingExercise[] = [
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-22",
    title: "Supervision, rescheduled twice",
    textKind: "Email chain",
    scene: "research group inbox, three messages",
    difficulty: 4,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "Subject: Supervision moved (again)",
        paragraphs: [
          "1 — Prof Osei: Apologies — Wednesday's supervision clashes with the external review. Could we do Thursday at eleven instead? Same room. If your chapter draft is not ready, Thursday still works; bring what you have and we will plan around it.",
          "2 — Lena: Thursday at eleven is fine. The draft is not ready — the results chapter is waiting on the second run of the experiment, which failed twice for reasons we now think are the sensor. I will bring the method section and the failed runs, since the failures may matter.",
          "3 — Prof Osei: Good — bring the failed runs. A result that fails for a known reason is data; a result that fails for an unknown one is noise. Do not tidy the failures out of the thesis. And Thursday it is; I have moved the review, not you.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What was the original arrangement, and what is it now?",
        options: [
          "Wednesday supervision, moved to Thursday at eleven",
          "Thursday supervision, moved to Wednesday",
          "Wednesday supervision, cancelled outright",
          "Thursday at eleven, moved to Friday",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Wednesday's supervision clashes with the external review. Could we do Thursday at eleven instead?" }],
          explanation:
            "Message 1 moves Wednesday to Thursday eleven; messages 2 and 3 confirm it. The '(again)' in the subject line tells the reader this is at least the second such move, but the fixed points are Wednesday and Thursday eleven.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why is the results chapter not ready?",
        options: [
          "Lena has not written it",
          "The experiment failed twice, now suspected to be the sensor",
          "The supervision was moved",
          "The external review took the room",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "waiting on the second run of the experiment, which failed twice for reasons we now think are the sensor" }],
          explanation:
            "Lena names the blocker precisely: the run failed twice, and the suspected cause is the sensor. She wrote the method section; what is missing is the results the failed runs cannot yet supply.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What distinction does Prof Osei draw in the final message?",
        options: [
          "Between planned and unplanned experiments",
          "Between a failure with a known cause (data) and one without (noise)",
          "Between the thesis and the chapter",
          "Between his review and Lena's supervision",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "A result that fails for a known reason is data; a result that fails for an unknown one is noise" }],
          explanation:
            "The professor's aphorism divides failures by explanation: understood failures count as data, unexplained ones as noise. He then draws the practical conclusion — do not tidy the failures out — which the item leaves the reader to connect.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "'I have moved the review, not you' most nearly means",
        options: [
          "the review is cancelled and you keep the room",
          "the change is my doing, not a burden you caused",
          "you must move out of the room",
          "the review follows you wherever you go",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 2, quote: "And Thursday it is; I have moved the review, not you." }],
          explanation:
            "The closing line is reassurance: the inconvenience originates on the professor's side, and Lena is not the cause. The sentence works by relocating responsibility, which is what the item asks the reader to hear under the words.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What does Prof Osei's first message imply about the draft deadline?",
        options: [
          "It is extended to next week",
          "The chapter does not have to be finished for the meeting",
          "The meeting replaces the draft",
          "Only the results chapter is due",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "If your chapter draft is not ready, Thursday still works; bring what you have and we will plan around it" }],
          explanation:
            "The conditional clause lowers the bar: the meeting happens either way, with whatever exists, and the two of them will plan around the gap. No new deadline is set — the readiness requirement is simply suspended for this meeting.",
        },
      },
    ],
    vocabulary: [
      { word: "supervision", partOfSpeech: "noun", definition: "a regular meeting with an academic supervisor" },
      { word: "sensor", partOfSpeech: "noun", definition: "a device that measures something" },
      { word: "tidy", partOfSpeech: "verb", definition: "to remove to make neat" },
      { word: "noise", partOfSpeech: "noun", definition: "meaningless variation in data" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-23",
    title: "The plagiarism workshop is not optional",
    textKind: "Notice",
    scene: "department noticeboard, week 2",
    difficulty: 4,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "ATTENDANCE REQUIRED — PLAGIARISM WORKSHOP, WEEK 3",
        paragraphs: [
          "All first-year students attend the plagiarism workshop in week 3, Thursday 2–4 p.m., lecture theatre B. Attendance is recorded and appears on your progression file; absence without a documented reason counts as a missed obligation, and three missed obligations trigger a meeting with the progress tutor. The workshop covers quotation, paraphrase, citation styles and the difference between collaboration and copying — the last one with worked examples from past cases, anonymised. Students who attended last year and were caught plagiarising anyway had, in every case we examined, skipped this workshop or treated it as a formality. Treat it as equipment, not as a form.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the tone of the final sentence, and how is it created?",
        options: [
          "Apologetic, softening the rule",
          "Instructive and blunt: the workshop is a tool, so treat it as one",
          "Humorous, mocking students who plagiarise",
          "Bureaucratic, quoting the regulations",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "Treat it as equipment, not as a form" }],
          explanation:
            "The closing metaphor equates the workshop with a tool you use, against a form you file. The contrast gives the notice its teeth without a single threatening word, and the item asks for that register judgement.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What are the stated consequences of an unexcused absence?",
        options: [
          "A fine",
          "A mark on the progression file, counting toward the three-miss threshold",
          "Immediate suspension",
          "Retaking the first year",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "absence without a documented reason counts as a missed obligation, and three missed obligations trigger a meeting with the progress tutor" }],
          explanation:
            "The absence is recorded, becomes one of three missed obligations, and the third triggers the progress tutor. The chain is cumulative rather than instant, and no fine or suspension appears anywhere in it.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Which topic is taught 'with worked examples from past cases'?",
        options: [
          "Citation styles",
          "Paraphrase",
          "The difference between collaboration and copying",
          "Quotation",
        ],
        correct: 2,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the difference between collaboration and copying — the last one with worked examples from past cases, anonymised" }],
          explanation:
            "The dash attaches the worked examples to the last item on the list: collaboration versus copying. The item checks whether the reader follows a list to its annotated tail.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the notice claim about caught plagiarists from last year?",
        options: [
          "They had skipped or trivialised this workshop, in every case examined",
          "They were all first offenders",
          "They plagiarised in group work only",
          "They had attended the workshop and ignored it, in half the cases",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "had, in every case we examined, skipped this workshop or treated it as a formality" }],
          explanation:
            "The notice reports its own audit: every case examined involved skipping the workshop or treating it as a formality. The claim is about the pattern, not the students' histories, and the item preserves the 'in every case we examined' limit.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The phrase 'anonymised' in the notice exists mainly to",
        options: [
          "satisfy the lawyers of past students",
          "signal that real cases are used without identifying anyone",
          "explain why the examples are old",
          "warn that cases can be traced",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "worked examples from past cases, anonymised" }],
          explanation:
            "The word promises that the cases are real but stripped of identity — usable for teaching without exposing anyone. The reader infers this ethical purpose from a single adjective, which is the skill the item tests.",
        },
      },
    ],
    vocabulary: [
      { word: "plagiarism", partOfSpeech: "noun", definition: "presenting others' work as your own" },
      { word: "paraphrase", partOfSpeech: "noun", definition: "restating in your own words" },
      { word: "obligation", partOfSpeech: "noun", definition: "a required commitment" },
      { word: "formality", partOfSpeech: "noun", definition: "an empty ritual, done only on paper" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-24",
    title: "Reading to children — volunteers wanted",
    textKind: "Callboard",
    scene: "student union volunteering board",
    difficulty: 4,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "STORY HOUR — READERS WANTED (TUESDAYS, 4 P.M.)",
        paragraphs: [
          "The Orchard Community Centre runs a story hour for twelve children aged five to eight, every Tuesday from four to five. We need two readers a week. You do not need a teaching background or a police check — our staff supervise throughout; you need a voice that stays patient at the fourth request for the same book, and a willingness to be terrible at doing the dragon. Training is one Tuesday shadowing an experienced reader, then you take a half of the hour yourself. Most readers stay for a term or more; the children notice when you do. Travel costs reimbursed on presentation of bus receipts; we cannot pay, but the tea is free and the gratitude is loud.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What does the advert say is NOT required?",
        options: [
          "Patience",
          "A teaching background or police check",
          "Staying a term",
          "Shadowing first",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "You do not need a teaching background or a police check — our staff supervise throughout" }],
          explanation:
            "The notice names the two things it does not require, and gives the reason: staff supervise throughout. Patience, shadowing and a term's stay are all expected — only the qualifications list is waived.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "'A willingness to be terrible at doing the dragon' describes a volunteer who will",
        options: [
          "refuse to read fantasy stories",
          "act the part badly and not mind",
          "let the children take over the reading",
          "be replaced by staff for dramatic parts",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "a willingness to be terrible at doing the dragon" }],
          explanation:
            "The joke recruits exactly what it seems to disqualify: the reader performs the dragon badly, in front of children, on purpose. The willingness is to look silly — self-deprecation as a job requirement.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What is the training, and what follows it?",
        options: [
          "A weekend course, then solo reading",
          "One Tuesday shadowing, then taking half the hour yourself",
          "Two weeks of shadowing, then full hours",
          "A written test, then shadowing",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Training is one Tuesday shadowing an experienced reader, then you take a half of the hour yourself" }],
          explanation:
            "The whole preparation is one shadowing Tuesday, then half an hour as reader. The progression from watching to half-leading is the advert's entire scheme, stated in one clause.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "How are travel costs handled?",
        options: [
          "Paid in cash weekly",
          "Reimbursed against bus receipts",
          "Not covered at all",
          "Covered only for the first term",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Travel costs reimbursed on presentation of bus receipts" }],
          explanation:
            "Reimbursement is conditional on receipts — the standard volunteer arrangement. The advert separates this small entitlement clearly from the bigger honesty of 'we cannot pay', which is the sentence's other half.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The closing line — 'the tea is free and the gratitude is loud' — signals that the advert's honesty about pay is",
        options: [
          "a legal disclaimer required by the union",
          "part of its appeal: candour offered as part of the reward",
          "a complaint about the centre's budget",
          "a promise of paid work later",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "we cannot pay, but the tea is free and the gratitude is loud" }],
          explanation:
            "The advert admits it cannot pay and immediately offers substitutes in kind — tea and noisy thanks. That pairing is a deliberate rhetorical move: candour itself becomes part of what the volunteer signs up for, which the item asks the reader to feel.",
        },
      },
    ],
    vocabulary: [
      { word: "reimburse", partOfSpeech: "verb", definition: "to pay back money spent" },
      { word: "shadow", partOfSpeech: "verb", definition: "to follow and learn by watching" },
      { word: "supervise", partOfSpeech: "verb", definition: "to be responsibly present" },
      { word: "gratitude", partOfSpeech: "noun", definition: "being thanked — here, loudly, by children" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-25",
    title: "Six weeks with a step counter",
    textKind: "Review",
    scene: "technology blog, gadgets column",
    difficulty: 4,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "REVIEWED: PULSEBAND 3 (SIX WEEKS)",
        paragraphs: [
          "The PulseBand 3 counts steps accurately, reads pulse credibly during steady exercise, and lasts nine days on a charge. Those three facts I tested and believe. Everything else the box promises — sleep quality, stress scores, 'readiness' — is a mood ring: the numbers move, but nothing I could do made them move in a way that tracked anything. Battery claims on the box say fourteen days; in use, with the screen at its default brightness, it is nine. The strap is comfortable, and the app, which I expected to hate, is honest: it shows the raw data next to the guesses, and lets you turn the guesses off. Would I buy it again? For step and pulse counting, yes. For the wellness narrative, no — buy a notebook and write down how you feel.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Which claims does the reviewer say were actually tested?",
        options: [
          "Step counting, pulse reading and battery life in use",
          "Sleep quality and stress scores",
          "Everything on the box",
          "Strap comfort and app design",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "counts steps accurately, reads pulse credibly during steady exercise, and lasts nine days on a charge. Those three facts I tested and believe" }],
          explanation:
            "The reviewer separates the tested three — steps, pulse, real battery life — from the untested mood-ring features. Strap and app comfort are later observations, not part of the tested-and-believed list.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the reviewer mean by calling the sleep, stress and 'readiness' numbers 'a mood ring'?",
        options: [
          "They are fashionable accessories",
          "They change impressively but track nothing verifiable",
          "They are sold only to women",
          "They measure temperature",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "the numbers move, but nothing I could do made them move in a way that tracked anything" }],
          explanation:
            "A mood ring changes colour without meaning anything; the reviewer's tests could not make the scores respond to anything real. The metaphor's whole job is that one sentence after the colon.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "How does the box's battery claim compare with the reviewer's experience?",
        options: [
          "Fourteen days claimed, nine in use at default brightness",
          "Nine days claimed, fourteen in use",
          "Fourteen claimed, fourteen in use",
          "The claim is not stated",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Battery claims on the box say fourteen days; in use, with the screen at its default brightness, it is nine" }],
          explanation:
            "The review sets the claim and the measurement side by side: fourteen promised, nine delivered under normal settings. The item checks that the reader keeps the two numbers apart and in the right order.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Why does the reviewer call the app 'honest'?",
        options: [
          "It shows raw data beside the estimates and lets you disable the estimates",
          "It refuses to display unverified numbers",
          "It admits the product's faults",
          "It was easier to use than expected",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "it shows the raw data next to the guesses, and lets you turn the guesses off" }],
          explanation:
            "The app's honesty is structural: measurements are displayed beside derived guesses, and the guesses can be switched off. The reviewer expected to hate it and did not — but that is surprise, not the reason for the word.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The final advice — 'buy a notebook and write down how you feel' — is",
        options: [
          "a sincere alternative for the wellness features",
          "a joke with no practical content",
          "an advertisement for a paper diary",
          "a recommendation to return the band",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "For the wellness narrative, no — buy a notebook and write down how you feel." }],
          explanation:
            "The closing line answers the 'would you buy it again' question twice: yes for measurement, no for narrative — and the notebook is the serious substitute it offers for the second half. It is advice, not a gag.",
        },
      },
    ],
    vocabulary: [
      { word: "credibly", partOfSpeech: "adverb", definition: "in a way that can be believed" },
      { word: "default", partOfSpeech: "adjective", definition: "the setting as it comes from the factory" },
      { word: "narrative", partOfSpeech: "noun", definition: "the story a product tells about you" },
      { word: "wellness", partOfSpeech: "noun", definition: "the general-health industry's umbrella word" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-26",
    title: "The boiler and the three visits",
    textKind: "Message thread",
    scene: "tenant-to-agency chat, one long month",
    difficulty: 4,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "Flat 4B — heating (ongoing)",
        paragraphs: [
          "Day 1 — Dana: The boiler made a banging noise all night and this morning there is no hot water. Please send someone.",
          "Day 2 — Agency: Have you tried resetting it using the switch under the panel?",
          "Day 3 — Dana: Reset it twice. The noise has stopped; the hot water has not.",
          "Day 9 — Agency: Engineer booked for Thursday between eight and one; keep the day free, and the morning especially.",
          "Day 10 — Dana: Nobody came between eight and one. I waited in.",
          "Day 11 — Agency: The engineer notes 'access issue'. He arrived at 12:50 and records no answer.",
          "Day 12 — Dana: At 12:50 I was on the step eating lunch. There is no doorbell and the knocker is broken — I have told the office about the knocker since March. He did not knock; he phoned once, silent, and I was already at the door by the time the phone rang.",
          "Day 13 — Agency: Rebooked for Monday, this time 8–11. In the meantime, hot water via the immersion heater switch, second from the left in the cupboard.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the sequence of the reported fault?",
        options: [
          "Noise, then loss of hot water",
          "Loss of hot water, then noise",
          "Noise only, hot water unaffected",
          "A flood",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "The boiler made a banging noise all night and this morning there is no hot water" }],
          explanation:
            "Day 1 reports both symptoms in order: the banging came first overnight, the hot water failed by morning. The reset later stops the noise but not the water loss, which is the thread's real arc.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the exchange about the knocker imply about earlier reports?",
        options: [
          "Dana never mentioned it before",
          "Dana had reported it before and nothing was done",
          "The agency fixed it in March",
          "The knocker is the tenant's responsibility",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 6, quote: "the knocker is broken — I have told the office about the knocker since March" }],
          explanation:
            "'I have told the office about the knocker since March' means the report exists and has produced nothing; that is why its reappearance in the access dispute stings. The inference is about the history, not the hardware.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the engineer's log claim, and what does Dana's account say?",
        options: [
          "Both say the door was unanswered for hours",
          "The log says no answer at 12:50; Dana says she was on the step and at the door before the one silent call",
          "The log says Dana refused entry",
          "Dana agrees she was out",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 5, quote: "He arrived at 12:50 and records no answer" }, { block: 0, paragraph: 6, quote: "At 12:50 I was on the step eating lunch" }],
          explanation:
            "The two accounts conflict at the same minute: his log says no answer, her memory says she was on the step and reached the door before the single silent call even rang. The item sets the versions side by side without settling them.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What temporary measure does the agency offer, and where is it?",
        options: [
          "Electric heaters delivered Monday",
          "Hot water via the immersion heater, second switch from the left in the cupboard",
          "A rebate on the month's rent",
          "Use of the neighbour's shower",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 7, quote: "hot water via the immersion heater switch, second from the left in the cupboard" }],
          explanation:
            "The stopgap is the immersion heater, identified precisely by its position among the switches. The item checks the reader's grip on instructions of the kind that actually get people through a week without hot water.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What changed between the two engineer bookings?",
        options: [
          "The company changed",
          "The window narrowed from 8–1 to 8–11",
          "The fee was waived",
          "The day moved from Thursday to Monday",
        ],
        correct: 1,
        lure: 3,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 7, quote: "Rebooked for Monday, this time 8–11" }],
          explanation:
            "Both the day (to Monday) and the window (8–11 instead of 8–1) changed, and the item asks for the difference that matters to a tenant who waited in all morning last time: the shorter, earlier window. The lure is the true-but-secondary fact.",
        },
      },
    ],
    vocabulary: [
      { word: "boiler", partOfSpeech: "noun", definition: "the unit heating water for a flat" },
      { word: "immersion heater", partOfSpeech: "noun", definition: "an electric heater inside the hot tank" },
      { word: "knocker", partOfSpeech: "noun", definition: "the hinged metal ring used to hit the door" },
      { word: "access issue", partOfSpeech: "phrase", definition: "a company's term for failing to get in" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-27",
    title: "Visiting the archive",
    textKind: "Guide",
    scene: "city records office website",
    difficulty: 4,
    estimatedMinutes: 7,
    blocks: [
      {
        heading: "USING THE READING ROOM — FIRST VISIT",
        paragraphs: [
          "Order your documents at least two working days ahead; the stores are off-site and same-day requests cannot be fetched. On arrival, sign in at the desk with photo ID, lock bags and coats in the lockers — only pencils, paper and laptops are allowed at the tables, and lids must be closed when you are not seated. Handle photographs and bound volumes by their edges only; the white gloves in older guides are no longer issued, since gloves reduce touch sensitivity and cause more damage than clean, dry hands. Photography for private study is permitted without flash; publication requires a licence and a different form. The café is downstairs, and yes, the copying machine story in the reviews is true: it is from 1987, it works, and nobody is allowed to fix it because it is now listed heritage.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why must orders be placed two working days ahead?",
        options: [
          "The catalogue is being digitised",
          "The stores are off-site and cannot be fetched same-day",
          "Reading-room slots are limited",
          "Staff must vet every request",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the stores are off-site and same-day requests cannot be fetched" }],
          explanation:
            "The lead time follows from geography: the documents live elsewhere, and a reader's request becomes a physical trip. The guide states the cause in the same sentence as the rule, which the item checks.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What is the rule about laptop lids, and when does it bite?",
        options: [
          "Lids closed always; laptops are forbidden",
          "Lids may be open only while you are seated",
          "Lids must be closed when leaving the table",
          "No rule about lids exists",
        ],
        correct: 2,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "lids must be closed when you are not seated" }],
          explanation:
            "The rule is conditional: open while working, closed the moment you step away. Laptops are explicitly allowed at the tables, so the item is about the lid state, not the machine's existence.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Why are white gloves no longer issued?",
        options: [
          "Cost",
          "They reduce touch sensitivity and cause more damage than clean hands",
          "A lack of storage",
          "They confused the readers",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "gloves reduce touch sensitivity and cause more damage than clean, dry hands" }],
          explanation:
            "The guide reverses the folk rule and gives its reason: numb fingers grip harder and damage more. Handling remains edge-only either way — the change is about what covers the hands, not how volumes are held.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What distinguishes private-study photography from publication?",
        options: [
          "Flash is allowed for publication",
          "Publication needs a licence and a different form",
          "Private study needs written permission",
          "Nothing; the rules are identical",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Photography for private study is permitted without flash; publication requires a licence and a different form" }],
          explanation:
            "One clause splits the uses: private study may photograph (no flash), publication needs a licence plus a separate form. The contrast is between what you may capture and what you may show the world.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The copying machine anecdote works in the guide mainly as",
        options: [
          "a warning about the archive's age",
          "a piece of affectionate humour confirming the reviews",
          "an instruction to use the café instead",
          "a reason to bring coins",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "it is from 1987, it works, and nobody is allowed to fix it because it is now listed heritage" }],
          explanation:
            "The machine's three facts — old, functional, protected — are delivered as deadpan comedy, and the guide admits the reviews got there first. The item asks the reader to hear the register, not just the dates.",
        },
      },
    ],
    vocabulary: [
      { word: "reading room", partOfSpeech: "noun", definition: "the quiet hall where records are studied" },
      { word: "listed", partOfSpeech: "adjective", definition: "officially protected as heritage" },
      { word: "volume", partOfSpeech: "noun", definition: "a bound book" },
      { word: "licence", partOfSpeech: "noun", definition: "formal permission, usually paid" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
