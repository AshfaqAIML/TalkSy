/**
 * TOEFL Reading Practice Library — Read in Daily Life, batch 5 (PROMPT 49).
 *
 * Six advanced exercises (difficulty 5). Dense, idiomatic texts with
 * attitude, hedging and hard claims: a refunds policy, a mixed-sentiment
 * review, a formal complaint, a restructuring announcement, a hard-sell
 * advertisement and a logistics thread — read for stance, what is promised
 * against what is said, and what the small print does to the headline.
 *
 * All texts are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const daily5Exercises: ToeflReadingExercise[] = [
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-28",
    title: "Refunds, exchanges and the weather",
    textKind: "Policy",
    scene: "tour operator booking conditions",
    difficulty: 5,
    estimatedMinutes: 8,
    blocks: [
      {
        heading: "BOOKING CONDITIONS — SECTIONS 7 TO 9",
        paragraphs: [
          "7.1 Cancellations by the traveller more than thirty days before departure are refunded in full minus the deposit, which is retained in all circumstances, including force majeure.",
          "7.2 Cancellations within thirty days are refunded at the operator's discretion; discretion has been exercised generously in fourteen years and should not be assumed.",
          "8.1 Weather: trips cancelled by the operator for unsafe conditions are refunded in full or rebooked free of charge, at the traveller's choice. Trips that run in weather the traveller finds disappointing are not weather-cancelled in this sense; rain, poor visibility and 'the wrong kind of sunshine' are not unsafe conditions.",
          "9.1 Exchanges: date changes more than thirty days out cost a twenty-pound fee per booking, not per person; within thirty days they are treated as cancellations under 7.1 and 7.2.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "A traveller cancels five weeks before departure. What is refunded?",
        options: [
          "Everything, including the deposit",
          "Everything except the deposit, which is kept in all circumstances",
          "Nothing; only the operator can cancel",
          "Half, at the operator's discretion",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "refunded in full minus the deposit, which is retained in all circumstances, including force majeure" }],
          explanation:
            "The early-cancellation refund is full minus the deposit, and the deposit survives even force majeure. The clause's 'in all circumstances' is doing the work the item tests.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does 7.2's remark about fourteen years actually tell the careful reader?",
        options: [
          "Discretion has always been refused",
          "Past generosity is real but is explicitly not a promise",
          "The policy is fourteen years old",
          "Discretion no longer exists",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 1, quote: "discretion has been exercised generously in fourteen years and should not be assumed" }],
          explanation:
            "The sentence gives you the good news and immediately withdraws it as a basis for expectation: generous in fact, assumed at your peril. The lure reads the same words as a refusal, which is the opposite of what the clause concedes.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Under 8.1, when does the traveller get a choice between refund and free rebooking?",
        options: [
          "Whenever the weather disappoints",
          "When the operator cancels for unsafe conditions",
          "When it rains",
          "When visibility is poor",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 2, quote: "trips cancelled by the operator for unsafe conditions are refunded in full or rebooked free of charge, at the traveller's choice" }],
          explanation:
            "The choice belongs to the traveller only when the operator cancels for safety; disappointing weather is then expressly excluded — rain and poor visibility are named as not unsafe. The item tests where the clause's protection actually starts.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the phrase 'the wrong kind of sunshine' contribute to 8.1?",
        options: [
          "A legal category of weather",
          "An ironic example of a complaint that is not unsafe weather",
          "A translation of the operator's forecast",
          "A typo",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 2, quote: "'the wrong kind of sunshine' are not unsafe conditions" }],
          explanation:
            "The phrase is a joke with legal intent: it folds every possible aesthetic complaint into one absurd case, then rules the whole class out. Recognising the irony is the reading skill; the item checks that it is heard as exclusion, not definition.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "A couple changes their date three weeks before the trip. What happens under 9.1?",
        options: [
          "A twenty-pound fee per booking",
          "A twenty-pound fee per person",
          "It is treated as a cancellation under 7.1 and 7.2",
          "It is refused outright",
        ],
        correct: 2,
        lure: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 3, quote: "within thirty days they are treated as cancellations under 7.1 and 7.2" }],
          explanation:
            "Inside thirty days a date change is reclassified as a cancellation, so the deposit and the discretion rules apply. The twenty-pound fee exists only outside the window — the lure quotes the rule that no longer governs, which is precisely the trap.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "Which of these best states the relationship between the deposit and force majeure?",
        options: [
          "Force majeure restores the deposit",
          "The deposit is retained even under force majeure",
          "Force majeure converts the deposit to credit",
          "The deposit is halved under force majeure",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the deposit, which is retained in all circumstances, including force majeure" }],
          explanation:
            "'Including force majeure' extends the retention to the case a reader would most expect to override it. The item checks that the exception the reader assumes is exactly the one the clause forecloses.",
        },
      },
    ],
    vocabulary: [
      { word: "deposit", partOfSpeech: "noun", definition: "money kept to secure a booking" },
      { word: "discretion", partOfSpeech: "noun", definition: "freedom to decide case by case" },
      { word: "force majeure", partOfSpeech: "phrase", definition: "events outside anyone's control" },
      { word: "retained", partOfSpeech: "verb (past)", definition: "kept back, not returned" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-29",
    title: "Three months at the Aurora Language School",
    textKind: "Review",
    scene: "language-school comparison site",
    difficulty: 5,
    estimatedMinutes: 8,
    blocks: [
      {
        heading: "AURORA LANGUAGE SCHOOL — 3 stars, with an asterisk",
        paragraphs: [
          "I spent a term at Aurora, and this review is two reviews, because the two halves of the term deserve different scores. The teaching was excellent: small groups, a teacher who corrected without crushing, and speaking time that actually existed rather than being on the timetable. The administration was a different school entirely. My level test placed me in a class that had already finished the grammar book two weeks earlier; it took a fortnight and three emails to move me. The promised 'conversation evenings' happened twice in twelve weeks. The refund for the misplaced level test — offered in writing, I will say that for them — arrived after the term ended. If you go: go for the teachers, get everything the office promises in writing, and treat the timetable as a first draft. The teachers deserve five stars; the office, on this evidence, two. I averaged, but the average is the least honest sentence in this review.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the reviewer's overall verdict, and how is it built?",
        options: [
          "Three stars as an average of a five-star teaching half and a two-star office half",
          "Three stars as a literal middle judgement of everything",
          "Five stars for teaching, later reduced",
          "Two stars, raised by the refund",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "The teachers deserve five stars; the office, on this evidence, two. I averaged, but the average is the least honest sentence in this review" }],
          explanation:
            "The review constructs its three stars as an average and then disowns the average as the least honest sentence in it. The verdict is arithmetic the reviewer apologises for — which is the review's signature move.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What happened with the level test, and how long did it take to fix?",
        options: [
          "It placed the reviewer ahead of the book; a fortnight and three emails to move",
          "It placed the reviewer two weeks behind; one email to fix",
          "It was never taken; no fix was needed",
          "It was correct but the class was full; a week to move",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "My level test placed me in a class that had already finished the grammar book two weeks earlier; it took a fortnight and three emails to move me" }],
          explanation:
            "The placement error put the reviewer behind the class's progress, and the move took a fortnight plus three emails. The refund for that error came, but only after term ended — a separate clause the reader must keep separate.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "How many conversation evenings were promised, and how many happened?",
        options: [
          "Two promised, two happened",
          "Promised throughout the term; two happened in twelve weeks",
          "Twelve promised, two happened",
          "None promised; two happened anyway",
        ],
        correct: 1,
        meta: {
          skills: ["details", "inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "The promised 'conversation evenings' happened twice in twelve weeks" }],
          explanation:
            "The scare quotes around 'conversation evenings' mark them as a standing promise of the prospectus; twice in twelve weeks is the delivery. The item checks the promise-versus-performance gap without inventing a number the text never gives.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "'I will say that for them' signals that the reviewer is",
        options: [
          "praising the office's speed",
          "granting one point of credit while criticising the office overall",
          "quoting the school's advertising",
          "closing the review",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "The refund for the misplaced level test — offered in writing, I will say that for them — arrived after the term ended" }],
          explanation:
            "The aside concedes the one thing done properly — the written offer — inside a sentence whose whole point is that the money arrived too late to be useful. Credit is given exactly where the criticism stands.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Which piece of practical advice does the review give future students?",
        options: [
          "Choose another school",
          "Get the office's promises in writing and treat the timetable as a first draft",
          "Ask for a different level test",
          "Pay only after the term ends",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "get everything the office promises in writing, and treat the timetable as a first draft" }],
          explanation:
            "The advice clause converts the review's evidence into two instructions: written promises and a sceptical view of the timetable. The reviewer stays — 'go for the teachers' — so the first option contradicts the whole ending.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The last sentence says the average 'is the least honest sentence in this review'. What does it accuse the average of hiding?",
        options: [
          "The refund",
          "That the two halves of the experience were very different, not middling",
          "The number of students per class",
          "The reviewer's own mistakes",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "the teaching was excellent" }, { block: 0, paragraph: 0, quote: "The administration was a different school entirely" }],
          explanation:
            "An average turns two strong opposites into one moderate number; the reviewer's complaint is that no single week of the term actually felt like three stars. The honesty of the review lies in the split, and the average buries it.",
        },
      },
    ],
    vocabulary: [
      { word: "asterisk", partOfSpeech: "noun", definition: "the * that flags an exception" },
      { word: "placed", partOfSpeech: "verb (past)", definition: "assigned to a level" },
      { word: "first draft", partOfSpeech: "phrase", definition: "an early version, expected to change" },
      { word: "averaged", partOfSpeech: "verb (past)", definition: "combined scores into one mean" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-30",
    title: "The marker's arithmetic",
    textKind: "Email",
    scene: "formal complaint, marks released",
    difficulty: 5,
    estimatedMinutes: 8,
    blocks: [
      {
        heading: "Subject: Query on ECON401 script 000741 — marking arithmetic",
        paragraphs: [
          "Dear Dr Mensah, I am not asking for my mark to be raised; I am asking for it to be recalculated, which is a different request. Section B carries forty marks and my answers there received, by the marker's own annotations, twenty-two; the online breakdown awards me sixteen for Section B, a difference of six. The annotations and the breakdown cannot both be right. If the annotations are right, the total rises by six; if the breakdown is right, the annotations on my script are wrong in a way that needs explaining. Either way, one of the two records of my performance contains an error, and the exam rules you quoted to the cohort in week one say that arithmetic errors are corrected at any time, unlike judgement calls. I have scanned both the annotated script and the breakdown, and attach them. I would rather this were resolved by the department than by the appeals office, and I imagine you would too. — Ravi Chandran, student number 000741",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the essential distinction Ravi's opening line draws?",
        options: [
          "Between raising a mark and correcting an arithmetic error",
          "Between a complaint and an appeal",
          "Between Section A and Section B",
          "Between the marker and the department",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "I am not asking for my mark to be raised; I am asking for it to be recalculated, which is a different request" }],
          explanation:
            "The email's whole strategy is to move the query out of judgement and into arithmetic. Recalculation either changes the number or exposes a false record; raising a mark would be an appeal about opinion, and Ravi explicitly declines that ground.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What are the two figures for Section B, and what is the difference?",
        options: [
          "Twenty-two in the annotations, sixteen in the breakdown, six apart",
          "Sixteen annotated, twenty-two in the breakdown, six apart",
          "Forty and twenty-two, eighteen apart",
          "Twenty-two and sixteen, sixteen apart",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "my answers there received, by the marker's own annotations, twenty-two; the online breakdown awards me sixteen for Section B, a difference of six" }],
          explanation:
            "The email gives the pair and their gap precisely: twenty-two annotated, sixteen recorded, six apart. The item is a three-number read, and the third number is the one the whole request turns on.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does Ravi claim follows whichever record is wrong?",
        options: [
          "The total rises by six either way",
          "Either the total rises by six, or the annotations need explaining",
          "The exam is void",
          "The marker is disciplined",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "If the annotations are right, the total rises by six; if the breakdown is right, the annotations on my script are wrong in a way that needs explaining" }],
          explanation:
            "The email is built as a dilemma where both horns demand action: a rise of six, or an explanation of the annotations. The structure is the argument, and the item checks that the reader carries both branches.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Why does Ravi cite the week-one rules about arithmetic errors?",
        options: [
          "To show the correction is not time-barred, unlike judgement calls",
          "To threaten an appeal",
          "To prove the marker was careless",
          "To establish what Section B is worth",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the exam rules you quoted to the cohort in week one say that arithmetic errors are corrected at any time, unlike judgement calls" }],
          explanation:
            "The rules distinguish open-ended correction from time-limited appeal, and Ravi places his case on the open-ended side. The clause is aimed at the deadline objection he expects, which the item asks the reader to see.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The closing line — 'I would rather this were resolved by the department than by the appeals office, and I imagine you would too' — is best described as",
        options: [
          "a threat of legal action",
          "courteous pressure that gives the department a shared interest",
          "an apology for the trouble",
          "a request for a meeting",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "I would rather this were resolved by the department than by the appeals office, and I imagine you would too" }],
          explanation:
            "The sentence aligns the writer's preference with the reader's: nobody wants the appeals office involved. It is pressure dressed as courtesy, and recognising the register is the reading task.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "What evidence does Ravi attach, and why does it matter to the request?",
        options: [
          "The annotated script and the breakdown, because the request turns on their contradiction",
          "Only the breakdown, as the official record",
          "Witness statements from classmates",
          "Nothing; the scan is promised later",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "I have scanned both the annotated script and the breakdown, and attach them" }],
          explanation:
            "The argument needs the two documents to disagree in writing, so both are attached. The request is a contradiction between records; without either half, the six-mark claim is only an assertion.",
        },
      },
    ],
    vocabulary: [
      { word: "recalculated", partOfSpeech: "verb (past)", definition: "computed again from the parts" },
      { word: "annotations", partOfSpeech: "noun", definition: "marks written on the script itself" },
      { word: "breakdown", partOfSpeech: "noun", definition: "the section-by-section record" },
      { word: "script", partOfSpeech: "noun", definition: "the written answer booklet, here the exam script" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-31",
    title: "Restructuring, in careful words",
    textKind: "Announcement",
    scene: "all-staff email, Friday afternoon",
    difficulty: 5,
    estimatedMinutes: 8,
    blocks: [
      {
        heading: "Subject: Some changes from January",
        paragraphs: [
          "From January the school will organise itself around three programmes rather than four departments. This is not a redundancy exercise; it is a realignment, and I want to say plainly what each of those words commits us to. No one loses their post in January. Some posts change shape: the technical team merges into one programme-facing group, and two coordinators move to new roles created for the January structure. Consultation on those new roles begins Monday, and it is genuine consultation — the shape of the roles responds to what we hear, though the existence of the roles does not. What I cannot promise is that the structure will feel comfortable to those of us who liked the old map, and I will not pretend that a smaller number of coordinators in a school of this size is cost-neutral in effort, whatever it is in money.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What does the announcement commit to, in its own words?",
        options: [
          "That no one loses their post in January",
          "That nothing will change after January",
          "That everyone keeps their current role",
          "That the effort will be cost-neutral",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "No one loses their post in January" }],
          explanation:
            "The announcement separates what it promises from what it refuses to promise. The promise is about posts; it does not promise unchanged roles, comfort, or cost-neutral effort — each of those is expressly withheld later.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does 'the shape of the roles responds to what we hear, though the existence of the roles does not' mean?",
        options: [
          "Consultation can change everything",
          "Consultation can affect details, not the restructuring itself",
          "There is no consultation",
          "The roles will be abolished if staff object",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the shape of the roles responds to what we hear, though the existence of the roles does not" }],
          explanation:
            "The sentence draws the consultation's boundary precisely: contents negotiable, existence fixed. The item asks the reader to hold both halves, which is where the honesty of 'genuine consultation' actually lives.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the final sentence concede about the coordinators?",
        options: [
          "That the change is cost-neutral in money",
          "That fewer coordinators is not cost-neutral in effort, whatever it is in money",
          "That the school will hire more coordinators",
          "That the old map was better",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["details", "inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "I will not pretend that a smaller number of coordinators in a school of this size is cost-neutral in effort, whatever it is in money" }],
          explanation:
            "The announcement splits the ledger: money may or may not be saved, but effort certainly grows. The lure accepts the money half and drops the effort half — the exact distinction the sentence was built to make.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "'This is not a redundancy exercise; it is a realignment' is doing which job in the email?",
        options: [
          "Defining the vocabulary the rest of the email will hold to",
          "Admitting redundancies later in the year",
          "Reassuring that nothing will change at all",
          "Quoting the human-resources policy",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "This is not a redundancy exercise; it is a realignment, and I want to say plainly what each of those words commits us to" }],
          explanation:
            "The sentence announces its own method: the email will be judged by whether its words hold. The rest of the message then spends its promises and refusals one at a time, which the item asks the reader to see as the design.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What happens to the technical team and the two coordinators?",
        options: [
          "The team merges into one programme-facing group; the coordinators move to newly created roles",
          "The team is disbanded; the coordinators leave",
          "The team expands; the coordinators stay put",
          "Both are made redundant in January",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the technical team merges into one programme-facing group, and two coordinators move to new roles created for the January structure" }],
          explanation:
            "The named changes are a merger for the technical team and new roles for two coordinators, with consultation opening Monday. Redundancy appears nowhere — the item checks the reader's grip on exactly what was said.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The phrase 'those of us who liked the old map' includes the writer. What does that choice achieve?",
        options: [
          "It proves the writer is neutral",
          "It signals sympathy while still proceeding with the change",
          "It withdraws the restructuring",
          "It blames the staff for attachment",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "What I cannot promise is that the structure will feel comfortable to those of us who liked the old map" }],
          explanation:
            "'Us' puts the writer inside the group that will find the change uncomfortable, without halting the change. The refusal to promise comfort is combined with declared membership in the uncomfortable — that combination is what the item asks the reader to hear.",
        },
      },
    ],
    vocabulary: [
      { word: "redundancy", partOfSpeech: "noun", definition: "laying staff off as no longer needed" },
      { word: "realignment", partOfSpeech: "noun", definition: "reorganising around a new shape" },
      { word: "consultation", partOfSpeech: "noun", definition: "asking those affected before deciding" },
      { word: "cost-neutral", partOfSpeech: "adjective", definition: "costing nothing extra overall" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-32",
    title: "Read 40% faster (terms apply)",
    textKind: "Advertisement",
    scene: "sponsored post, social feed",
    difficulty: 5,
    estimatedMinutes: 8,
    blocks: [
      {
        heading: "THE VELOCITY COURSE — READ 40% FASTER IN SIX WEEKS",
        paragraphs: [
          "Measured on our standard pre- and post-course comprehension test, average reading speed rose 41.2% across the 2023 cohort, with comprehension within two points of baseline. The test is set by us; you are welcome to bring your own material to the sixth session and be timed on that instead, and several participants have. The course teaches eye movement, chunking and the disciplined refusal to re-read; it does not teach skimming, and the difference matters — skimming trades comprehension for speed, and we publish the comprehension number precisely so you can see what the trade cost, which in 2023 was two points. Six weeks, one evening a week, money back at the end of week three if your own timed reading has not improved by at least a fifth, measured on your material, not ours.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What does the 40%-ish claim rest on, and what is disclosed about it?",
        options: [
          "An independent audit; nothing disclosed",
          "The provider's own test, disclosed as such, with comprehension published",
          "Participant guesses",
          "A government study",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "Measured on our standard pre- and post-course comprehension test" }, { block: 0, paragraph: 0, quote: "The test is set by us" }],
          explanation:
            "The advert states the number, names its source, and admits the source is the seller. That admission is the honesty the item tests — the figure survives scrutiny only because its basis is disclosed.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What is the stated difference between the course's method and skimming?",
        options: [
          "Skimming is faster",
          "Skimming trades comprehension for speed; the course refuses re-reading instead",
          "There is no difference",
          "Skimming is taught in week six",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "it does not teach skimming, and the difference matters — skimming trades comprehension for speed" }],
          explanation:
            "The advert draws the line itself: skimming buys speed with comprehension, while the course's method is eye movement, chunking and no re-reading. The comprehension number is published so the reader can audit the difference.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What was the comprehension cost in 2023, and how is it framed?",
        options: [
          "Two points, published so the trade is visible",
          "Two points, hidden in the small print",
          "Forty points, undisclosed",
          "Zero; comprehension rose",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "we publish the comprehension number precisely so you can see what the trade cost, which in 2023 was two points" }],
          explanation:
            "The comprehension drop is two points, and the advert's stated reason for publishing it is transparency about the trade. The item checks both the figure and the framing, which is what separates this advert from the genre it imitates.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What exactly triggers the money-back guarantee?",
        options: [
          "Any dissatisfaction by week three",
          "Your own timed reading on your own material not improving by at least a fifth by the end of week three",
          "The 41.2% not being achieved",
          "Comprehension falling more than two points",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "money back at the end of week three if your own timed reading has not improved by at least a fifth, measured on your material, not ours" }],
          explanation:
            "The guarantee has three defining features: your material, your timing, a fifth. The headline percentage belongs to the cohort claim and is not the guarantee's test — a distinction the advert makes on purpose.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "'Several participants have' brought their own material. Why does the advert mention this?",
        options: [
          "As a warning that most participants quit",
          "To show the bring-your-own-material option is real, not theoretical",
          "To blame participants who distrust the test",
          "To raise the price for custom material",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "you are welcome to bring your own material to the sixth session and be timed on that instead, and several participants have" }],
          explanation:
            "The clause converts an invitation into an evidenced practice: some have done it. The advert's credibility strategy is verification by participants, and the item checks that the reader sees the sentence's function.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "Read as a whole, the advert's method of persuading is chiefly",
        options: [
          "pressure and urgency",
          "disclosure: stating its own test's limits and inviting independent measurement",
          "celebrity endorsement",
          "price comparison with rivals",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 0, quote: "The test is set by us; you are welcome to bring your own material to the sixth session and be timed on that instead" }],
          explanation:
            "No urgency, no names, no rival prices appear anywhere. The persuasion is structural: every claim arrives with its own audit trail. The item asks for that reading of the genre, which the headline's '(terms apply)' already hints at.",
        },
      },
    ],
    vocabulary: [
      { word: "cohort", partOfSpeech: "noun", definition: "the group taking the course together" },
      { word: "baseline", partOfSpeech: "noun", definition: "the starting measurement" },
      { word: "chunking", partOfSpeech: "noun", definition: "reading groups of words as units" },
      { word: "re-read", partOfSpeech: "verb", definition: "to read a passage a second time" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "daily-life",
    slug: "toefl-rb-daily-33",
    title: "Getting eleven people up a hill",
    textKind: "Thread",
    scene: "walking-club message group",
    difficulty: 5,
    estimatedMinutes: 8,
    blocks: [
      {
        heading: "Ben Nevis recce — logistics",
        paragraphs: [
          "Sam: Right, eleven of us, two cars so far, and the forecast for the summit is 40 mph winds with the cloud base at 600 metres. That is a weather that turns back, not one that pushes through.",
          "Priya: Agreed on the weather. On cars: the car park fills by seven in summer; if we want the early start the weather will not let us have anyway, we need three cars, and I can drive one but my car takes four only if two of the four are under six foot.",
          "Tom: I am under six foot and volunteering to be squeezed. More seriously: the track has two routes, the pony track and the zigzags. The zigzags are quicker but in 40 mph winds with cloud at 600 the zigzags are exactly where you do not want eleven people spread out. Pony track, or nothing.",
          "Sam: Pony track it is, and 'or nothing' is now the actual plan: if the forecast is unchanged on Friday evening, we cancel, and we say so on Friday evening, not on the mountain on Saturday morning. Decision date is Friday, the forecast is the decider, and the forecast does not negotiate.",
        ],
      },
    ],
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What are the forecast figures Sam quotes, and what does he conclude from them?",
        options: [
          "40 mph winds and cloud base at 600 metres; a weather that turns back",
          "30 mph winds and clear summit; a weather that pushes through",
          "40 mph winds; a weather that goes anyway but slowly",
          "600 mph winds; cancellation",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the forecast for the summit is 40 mph winds with the cloud base at 600 metres. That is a weather that turns back, not one that pushes through" }],
          explanation:
            "Sam quotes both numbers and draws the conclusion in the same breath: this forecast, if it holds, is a turning-back forecast. The item checks the pair and the decision they carry.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What is Priya's arithmetic problem with the cars?",
        options: [
          "Two cars for eleven people; a third is needed, and hers takes four only if two are under six foot",
          "Three cars is too many for the car park",
          "No one can drive",
          "The cars are too small for kit",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "two cars so far" }, { block: 0, paragraph: 1, quote: "we need three cars, and I can drive one but my car takes four only if two of the four are under six foot" }],
          explanation:
            "The thread's logistics in one item: eleven people, two cars pledged, a third required, and Priya's third car has a height condition on its back seats. The 'early start' clause is conditional on weather the group is about to abandon anyway.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Why does Tom rule out the zigzags?",
        options: [
          "They are quicker",
          "In 40 mph winds with cloud at 600, they are where you do not want eleven people spread out",
          "They are closed in summer",
          "The pony track is prettier",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 2, quote: "The zigzags are quicker but in 40 mph winds with cloud at 600 the zigzags are exactly where you do not want eleven people spread out" }],
          explanation:
            "The zigzags are faster in good weather — that is exactly why they are dangerous in this weather: speed plus exposure plus a strung-out group. The lure quotes the advantage Tom concedes and drops the reason he rejects it.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What is the decision rule the group finally adopts?",
        options: [
          "Go if it clears by morning",
          "Decide on Friday evening; the forecast decides, and it does not negotiate",
          "Decide on the summit",
          "Vote on Saturday",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "main-ideas"],
          evidence: [{ block: 0, paragraph: 3, quote: "Decision date is Friday, the forecast is the decider, and the forecast does not negotiate" }],
          explanation:
            "Sam converts Tom's 'or nothing' into a procedure: the Friday-evening forecast is final, announced Friday evening, not renegotiated on the mountain. The item checks the rule, which is the thread's whole product.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "'If we want the early start the weather will not let us have anyway' — what is Priya doing in that clause?",
        options: [
          "Cancelling the early start",
          "Noting that two goals conflict: the car plan is being built for a start the weather already forbids",
          "Blaming Sam for the forecast",
          "Offering to drive at seven",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "if we want the early start the weather will not let us have anyway, we need three cars" }],
          explanation:
            "Priya flags the contradiction inside her own logistics: the seven-o'clock plan exists only if the walk happens, and the forecast is already against the walk. The clause is irony aimed at the plan's assumptions, not at any person.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "What does 'the forecast does not negotiate' add to the decision rule?",
        options: [
          "A legal basis for cancelling",
          "It removes discretion: no amount of hoping changes Friday's numbers",
          "A promise of better weather",
          "That the group will vote",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "the forecast is the decider, and the forecast does not negotiate" }],
          explanation:
            "The sentence hands the decision to something that cannot be persuaded, which is the point of choosing it as decider. The item asks the reader to hear the deliberate removal of human discretion in the joke.",
        },
      },
    ],
    vocabulary: [
      { word: "recce", partOfSpeech: "noun", definition: "a preliminary inspection trip" },
      { word: "summit", partOfSpeech: "noun", definition: "the top of the mountain" },
      { word: "pony track", partOfSpeech: "noun", definition: "the steady, older route to the top" },
      { word: "cloud base", partOfSpeech: "noun", definition: "the height at which cloud covers the hill" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
