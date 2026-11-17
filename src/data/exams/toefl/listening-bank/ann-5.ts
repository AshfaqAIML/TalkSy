/**
 * TOEFL Listening Practice Library — Listen to an Announcement, batch 5
 * (PROMPT 49). Difficulty 5: five dense announcements — restructuring
 * speak, hedged commitments, defined terms and promises with expiry dates.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const ann5Exercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-ann-21", title: "The restructure in plain words", taskType: "announcement",
    scene: "all-staff meeting, after the slides", difficulty: 5, estimatedMinutes: 5,
    intro: "You will hear a manager translate a restructure into plain commitments. Answer the questions about what is promised and what is not.",
    speakers: [{ id: "mg", name: "Director", role: "director closing a restructure meeting", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "mg", text: "The slides use the words 'realignment' and 'efficiencies'. Let me convert them, because you will be asked at home what they mean." },
      { id: "s2", speakerId: "mg", text: "'Realignment' means two units merge. 'Efficiencies' means the merged unit runs on fewer posts than the two did separately." },
      { id: "s3", speakerId: "mg", text: "Now the commitments, bounded honestly. No compulsory departures this year — this year, and I will not extend the sentence by a word I cannot hold." },
      { id: "s4", speakerId: "mg", text: "The shortfall is met by not filling leavers' posts, which means by December some of you will be doing the work of two, and I would rather name that now than discover it in November." },
      { id: "s5", speakerId: "mg", text: "What I refuse to promise is comfort, and what I will promise is arithmetic: the workload figures appear monthly, and if December's are not survivable, the January meeting revisits the model. That is the whole speech; the slides are its longer version." },
    ],
    transcriptNote: "The translation is deliberate: each corporate term becomes a plain fact, each promise carries its boundary, and one refusal is explicit.",
    targetSkill: "inference",
    questions: [
      {
        no: 1, stem: "What do 'efficiencies' mean, in the director's translation?",
        options: ["Better training", "The merged unit runs on fewer posts than the two did separately", "Cheaper suppliers", "New software"],
        correct: 1,
        meta: { skills: ["inference"], keywords: ["'efficiencies' means the merged unit runs on fewer posts"], explanation: "The conversion is headcount arithmetic. The item checks the translation the director performs on stage. Answer anchored in the recording: \u201c'efficiencies' means the merged unit runs on fewer posts\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "What is the exact scope of the no-compulsory-departures promise?",
        options: ["Forever", "This year only — and she will not extend the sentence by a word she cannot hold", "Two years", "Until retirement"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["No compulsory departures this year — this year, and I will not extend the sentence"], explanation: "The promise is bounded to one year, deliberately. The item checks the boundary and the stated refusal to widen it." },
      },
      {
        no: 3, stem: "How is the shortfall to be met?",
        options: ["By external funding", "By not filling leavers' posts — meaning some staff will be doing the work of two by December", "By overtime pay", "By automation"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["met by not filling leavers' posts", "doing the work of two"], explanation: "Vacancies fund the change, and the director names its human cost. The item checks both the mechanism and the forecast." },
      },
      {
        no: 4, stem: "What does the director explicitly refuse to promise?",
        options: ["The January meeting", "Comfort", "Monthly figures", "The merge"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["what I refuse to promise is comfort"], explanation: "The refusal is named in so many words. The item checks what is withheld, which frames what is given. The audible clue is \u201cwhat I refuse to promise is comfort\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "What is the function of the monthly workload figures?",
        options: ["Record-keeping", "A trigger: if December's are not survivable, the January meeting revisits the model", "Performance review", "Public relations"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["if December's are not survivable, the January meeting revisi"], explanation: "The figures are a revisit trigger. The item checks their role, which is the announcement's only enforcement. Listen for \u201cif December's are not survivable, the January meeting revisi\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-22", title: "The guarantee with a floor", taskType: "announcement",
    scene: "shop doorway, printed notice read aloud", difficulty: 5, estimatedMinutes: 5,
    intro: "You will hear a shop announcement about a guarantee. Answer the questions about its actual terms.",
    speakers: [{ id: "sm", name: "Shopkeeper", role: "shop owner reading the new guarantee aloud", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "sm", text: "The new sign says 'lifetime guarantee', and before you trust a sign, here is the small print said out loud, because that is where it lives." },
      { id: "s2", speakerId: "sm", text: "'Lifetime' is the lifetime of the product line, not of you and not of the shop. When the line ends, the guarantee ends with it, and you will get three months' notice of that ending." },
      { id: "s3", speakerId: "sm", text: "The guarantee covers defects in materials and making. It does not cover accidents, adaptations, or the sea — anything corroded by salt water counts as the sea's work, not ours." },
      { id: "s4", speakerId: "sm", text: "Claims need the receipt or the card record; without either, the best I can do is repair at cost, which is not the guarantee and I will say so on the ticket." },
      { id: "s5", speakerId: "sm", text: "One more honest line: repairs target five working days, and in December that target has never once been met in forty years. Buy accordingly." },
    ],
    transcriptNote: "The terms convert a grand word into bounded ones: whose lifetime, what perils, what proof, and one target that history contradicts.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "Whose lifetime does the guarantee run for?",
        options: ["The buyer's", "The product line's — ending when the line ends, with three months' notice", "The shop's", "Ninety-nine years"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["'lifetime' is the lifetime of the product line"], explanation: "Lifetime means the line's life. The item checks the definition and the notice period attached to its end. Answer anchored in the recording: \u201c'lifetime' is the lifetime of the product line\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "Which of these is expressly NOT covered?",
        options: ["Material defects", "Accidents, adaptations, and anything corroded by salt water", "Manufacturing faults", "Stitching"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["does not cover accidents, adaptations, or the sea"], explanation: "The exclusions are accidents, adaptations, salt water. The item checks the negative list, which the guarantee's value rests on. The audible clue is \u201cdoes not cover accidents, adaptations, or the sea\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "What happens to a claim without receipt or card record?",
        options: ["Full guarantee anyway", "Repair at cost — which is not the guarantee, and the ticket says so", "Refusal outright", "A longer wait"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["repair at cost, which is not the guarantee and I will say so"], explanation: "The fallback is cost-price repair, labelled honestly. The item checks the degraded remedy and its labelling. Listen for \u201crepair at cost, which is not the guarantee and I will say so\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What does the shopkeeper say about the five-day repair target?",
        options: ["It is always met", "In December it has never once been met in forty years — buy accordingly", "It is a maximum, not a target", "It excludes weekends"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["that target has never once been met in forty years"], explanation: "The December confession is the announcement's last honesty. The item checks the historical fact and its advice. Answer anchored in the recording: \u201cthat target has never once been met in forty years\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 5, stem: "Why does the shopkeeper read the small print aloud?",
        options: ["The sign is too small to read", "Because that is where it lives — the terms are the guarantee, and he wants them heard before trust", "Legal advice", "Marketing"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["that is where it lives"], explanation: "His stated reason is that the terms carry the meaning. The item checks the purpose of the performance itself. The audible clue is \u201cthat is where it lives\u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-23", title: "The fellowship with a clawback", taskType: "announcement",
    scene: "funding body, scheme rules read aloud", difficulty: 5, estimatedMinutes: 5,
    intro: "You will hear an announcement about a fellowship scheme. Answer the questions about its financial terms.",
    speakers: [{ id: "fb", name: "Officer", role: "funding officer announcing scheme rules", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "fb", text: "The fellowship pays a salary for three years, relocation up to two thousand, and a research allowance of five thousand a year. Now the parts the headline does not say." },
      { id: "s2", speakerId: "fb", text: "The research allowance is use-it-or-lose-it within each year; unspent allowance does not roll forward, and spending it in March on anything the referees did not name is visible to the next panel." },
      { id: "s3", speakerId: "fb", text: "The relocation payment is a loan until you complete year one. Leave before twelve months and it is repaid from the final payslip — no exceptions for good reasons, which is why I am saying it before you have good reasons." },
      { id: "s4", speakerId: "fb", text: "The three years of salary pause for parental leave and long illness, extending the fellowship day for day. It does not pause for anything else, and a pause is not a holiday: the clock resumes with you." },
      { id: "s5", speakerId: "fb", text: "And the clause everyone misses: the final six months of the fellowship are conditional on a progress report the panel reads in month thirty. The fellowship can, in writing, end at month thirty. Read month thirty's clause before you sign month one's." },
    ],
    transcriptNote: "The financial terms carry teeth: a year-bound allowance, a relocation loan, defined pauses, and a month-thirty condition that can end the award.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What happens to unspent research allowance?",
        options: ["It rolls forward", "It is lost within the year, and late spending on unnamed items is visible to the next panel", "It converts to salary", "It is repaid to the fellow"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["use-it-or-lose-it within each year"], explanation: "The allowance is year-bound with reputational consequences. The item checks both the loss and the visibility. Listen for \u201cuse-it-or-lose-it within each year\u201d — that phrase in the script settles the item." },
      },
      {
        no: 2, stem: "On what condition is the relocation payment kept?",
        options: ["Always kept", "It is a loan until year one is completed — leaving early means repayment from the final payslip", "Kept after probation", "Never repaid"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["a loan until you complete year one"], explanation: "Completion of year one converts the loan to a payment. The item checks the condition and the recovery route. Answer anchored in the recording: \u201ca loan until you complete year one\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 3, stem: "Which pauses extend the fellowship?",
        options: ["Any pause", "Parental leave and long illness, day for day — nothing else", "Fieldwork", "Sabbaticals"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["salary pause for parental leave and long illness"], explanation: "Only two categories pause the clock. The item checks the closed list, which the announcement states as closed. The audible clue is \u201cpauses for parental leave and long illness, extending the fe\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 4, stem: "What can happen at month thirty?",
        options: ["Nothing; three years is guaranteed", "The fellowship can end in writing, on the panel's reading of the progress report", "A pay rise", "An extension automatically"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the fellowship can, in writing, end at month thirty"], explanation: "Month thirty is a conditional gate. The item checks the clause flagged as the one everyone misses. Listen for \u201cthe fellowship can, in writing, end at month thirty\u201d — that phrase in the script settles the item." },
      },
      {
        no: 5, stem: "What is the officer's closing advice about signing?",
        options: ["Sign quickly; places are limited", "Read month thirty's clause before signing month one's", "Consult a lawyer", "Accept without conditions"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["read month thirty's clause before you sign month one's"], explanation: "The advice is to read the far clause first. The item checks the instruction that ends the announcement. Answer anchored in the recording: \u201cread month thirty's clause before you sign month one's\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-24", title: "The closure announced as an investment", taskType: "announcement",
    scene: "local service notice, read aloud", difficulty: 5, estimatedMinutes: 5,
    intro: "You will hear an announcement about a service change. Answer the questions about what actually happens.",
    speakers: [{ id: "cs", name: "Manager", role: "service manager reading a public notice", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "cs", text: "The notice says we are 'investing in the future of the service'. The service in question is the evening bus, and the investment is its withdrawal, so let me give you the notice and the translation together." },
      { id: "s2", speakerId: "cs", text: "From the first, the evening service ends at eight instead of eleven. The stated reason is declining use; the use declined after the fare rise, which is a detail the notice does not contain." },
      { id: "s3", speakerId: "cs", text: "The replacement is a booked ride: phone by six for a collection window of forty-five minutes. It costs the same as the bus did, and it cannot be late by less than forty-five minutes." },
      { id: "s4", speakerId: "cs", text: "What is genuinely new money: the two accessible vehicles, which are real, and which serve the daytime routes where the notice's photographer will find them." },
      { id: "s5", speakerId: "cs", text: "The last evening bus runs on the last day of the month, and I am telling you now rather than on the day, because the passengers who need to plan are the ones the notice's word 'investment' was not written for." },
    ],
    transcriptNote: "The announcement runs the notice and its translation in parallel. The replacement's forty-five-minute window is its honest number.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What is the actual change to the evening bus?",
        options: ["Extra services", "It ends at eight instead of eleven, from the first", "A fare cut", "A new route"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the evening service ends at eight instead of eleven"], explanation: "The withdrawal is the substance; 'investment' is its clothing. The item checks the change under the word. The audible clue is \u201cthe evening service ends at eight instead of eleven\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What omitted detail does the manager supply about the cause?",
        options: ["Road works", "Use declined after the fare rise — a detail the notice does not contain", "A shortage of drivers", "Weather"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the use declined after the fare rise, which is a detail the notice does not contain"], explanation: "The sequencing of cause is supplied against the notice. The item checks the omitted fact, which is the translation's core." },
      },
      {
        no: 3, stem: "What are the terms of the replacement ride?",
        options: ["Fixed timetable, cheaper", "Book by six, forty-five-minute collection window, same fare as the bus", "Free, on demand", "Taxi vouchers"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["phone by six for a collection window of forty-five minutes", "costs the same as the bus did"], explanation: "The terms are a booking deadline, a wide window and an equal fare. The item checks all three as one package." },
      },
      {
        no: 4, stem: "Where will the two new accessible vehicles actually run?",
        options: ["The evening service", "The daytime routes, where the notice's photographer will find them", "School contracts", "The depot only"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the daytime routes where the notice's photographer will find"], explanation: "The vehicles are real and pointedly photogenic. The item checks where they serve, including the dry observation. Listen for \u201cthe daytime routes where the notice's photographer will find\u201d — that phrase in the script settles the item." },
      },
      {
        no: 5, stem: "Why does the manager announce the last bus's date now?",
        options: ["A legal deadline", "So that the passengers who need to plan hear it before the day — the people the word 'investment' was not written for", "To sell tickets", "Staff rosters"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["the passengers who need to plan are the ones the notice's wo"], explanation: "The announcement's purpose is to reach the notice's unaddressed audience. The item checks that stated purpose. Answer anchored in the recording: \u201cthe passengers who need to plan are the ones the notice's wo\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-25", title: "The exam change with a caveat", taskType: "announcement",
    scene: "lecture theatre, final week", difficulty: 5, estimatedMinutes: 5,
    intro: "You will hear an announcement about next term's assessment. Answer the questions about what changes and what does not.",
    speakers: [{ id: "ml", name: "Module leader", role: "module leader announcing next term's assessment", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "ml", text: "Next term's assessment changes, and I will give it in order of surprise: the format, the weighting, the deadline, and then the part that removes the good news." },
      { id: "s2", speakerId: "ml", text: "Format: open-book, seen case released forty-eight hours before, submission in person at the exam hall." },
      { id: "s3", speakerId: "ml", text: "Weighting: it rises from thirty per cent to fifty, which sounds like a gift and is a transfer — the marks move from the essay, which is now twenty per cent and due earlier, in week eight." },
      { id: "s4", speakerId: "ml", text: "Deadline: the exam sits in week twelve, but the essay's new date is the part to write down, because it moves closer to the teaching you have not yet had." },
      { id: "s5", speakerId: "ml", text: "The caveat that removes the good news: open-book means the book is open, not the internet. Anything with a battery stays in the bag, and the permitted materials are listed on one page, which is the page to read first." },
    ],
    transcriptNote: "The announcement sequences four facts and one caveat. The weighting change is described as a transfer, not a gift — the essay moves to week eight.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What is the new exam format?",
        options: ["Closed-book, unseen", "Open-book, seen case released forty-eight hours before, submitted in person at the hall", "Take-home essay", "Oral"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["open-book, seen case released forty-eight hours before, subm"], explanation: "The format has three components. The item checks all three, since the open-book part alone is the trap. The audible clue is \u201copen-book, seen case released forty-eight hours before, subm\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "How is the weighting change described?",
        options: ["A gift", "A transfer — marks move from the essay, which drops to twenty per cent and moves to week eight", "A reduction", "Averaged"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["which sounds like a gift and is a transfer", "now twenty per cent and due earlier, in week eight"], explanation: "The rise is funded by the essay's fall and earlier date. The item checks the transfer, including the essay's new week." },
      },
      {
        no: 3, stem: "Which date does the module leader tell students to write down?",
        options: ["Week twelve", "The essay's new week-eight date, which sits closer to teaching they have not yet had", "The case release", "The hall opening"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the essay's new date is the part to write down"], explanation: "The emphasized date is the essay's, not the exam's. The item checks which clock the announcement privileges. Listen for \u201cthe essay's new date is the part to write down\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What does 'open-book' mean here?",
        options: ["The internet is available", "The book is open, not the internet — nothing with a battery, and the permitted list is one page", "Anything may be brought", "Library access"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["open-book means the book is open, not the internet"], explanation: "Open excludes connected and powered devices. The item checks the definition that removes the apparent good news. Answer anchored in the recording: \u201copen-book means the book is open, not the internet\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 5, stem: "What does the module leader call the page to read first?",
        options: ["The case", "The one-page list of permitted materials", "The reading list", "The timetable"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the permitted materials are listed on one page, which is the"], explanation: "The permitted-materials page is the instruction's anchor. The item checks the final pointer of the announcement. The audible clue is \u201cthe permitted materials are listed on one page, which is the\u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
