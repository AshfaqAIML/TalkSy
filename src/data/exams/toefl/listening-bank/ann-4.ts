/**
 * TOEFL Listening Practice Library — Listen to an Announcement, batch 4
 * (PROMPT 49). Difficulty 4: five announcements whose register carries the
 * meaning — corporate hedging, apologetic refusals, policy speak that says
 * the opposite of its words.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const ann4Exercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-ann-16", title: "The refusals dressed as priorities", taskType: "announcement",
    scene: "students' union email, read aloud", difficulty: 4, estimatedMinutes: 5,
    intro: "You will hear an announcement that declines several requests without saying no. Answer the questions about what it actually decides.",
    speakers: [{ id: "su", name: "Officer", role: "union officer reading the email aloud", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "su", text: "Following your representations, the union has considered the requests for extended library hours, the twenty-four-hour study room, and the resit-period extensions." },
      { id: "s2", speakerId: "su", text: "Extended hours are not being taken forward at this time. The study room remains under review with the estates committee. The resit extensions will be considered in the next cycle." },
      { id: "s3", speakerId: "su", text: "What is being taken forward now is the water fountain, which was requested by no one and is already in the budget." },
      { id: "s4", speakerId: "su", text: "I want to be plain about what this email says, because its language will not say it for you: three requests were refused, one was deferred indefinitely, and the thing nobody asked for has a date." },
      { id: "s5", speakerId: "su", text: "'At this time' means no, 'under review' means no with a committee attached, and 'the next cycle' means after the people asking have graduated." },
    ],
    transcriptNote: "The announcement translates official phrases into plain refusals: 'at this time', 'under review', 'next cycle'. The unrequested item proceeds.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What happens to the extended library hours?",
        options: ["They begin next term", "They are refused — 'not being taken forward at this time' means no", "They are trialled in exam term", "They go to a vote"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["not being taken forward at this time"], explanation: "The formula is a refusal; the speaker says so explicitly. The item checks the translation, not the formula. Answer anchored in the recording: \u201cnot being taken forward at this time\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "What does 'under review with the estates committee' mean, in the speaker's own decoding?",
        options: ["A decision is imminent", "No — a refusal with a committee attached", "A pilot scheme", "Funding is sought"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["'under review' means no with a committee attached"], explanation: "The speaker decodes her own document. The item checks the gloss she provides. The audible clue is \u201c'under review' means no with a committee attached\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "Which item proceeds, and what is notable about it?",
        options: ["The study room — most requested", "The water fountain — requested by no one and already in the budget", "The resit extensions — popular", "Extended hours — cheapest"],
        correct: 1,
        meta: { skills: ["details", "inference"], keywords: ["the water fountain, which was requested by no one and is already in the budget"], explanation: "The contrast is the point: the unasked-for item has a date. The item checks which one proceeds and the irony attached." },
      },
      {
        no: 4, stem: "What does 'the next cycle' mean, in the closing decoding?",
        options: ["A term's wait", "After the people asking have graduated", "Six weeks", "The next meeting"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["'the next cycle' means after the people asking have graduate"], explanation: "The delay outlasts the askers. The item checks the harshest of the three decodings. Listen for \u201c'the next cycle' means after the people asking have graduate\u201d — that phrase in the script settles the item." },
      },
      {
        no: 5, stem: "What, in the speaker's summary, is the overall content of the email?",
        options: ["Four acceptances", "Three refusals, one indefinite deferral, and an unrequested item with a date", "A consultation", "A budget report"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["three requests were refused, one was deferred indefinitely"], explanation: "The tally is stated plainly at the end. The item checks the count, which the original language obscures. Answer anchored in the recording: \u201cthree requests were refused, one was deferred indefinitely\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-17", title: "The apology that changes nothing", taskType: "announcement",
    scene: "department all-staff email, read aloud", difficulty: 4, estimatedMinutes: 5,
    intro: "You will hear an apology for a scheduling error. Answer the questions about what actually changes.",
    speakers: [{ id: "dm", name: "Administrator", role: "department administrator on email", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "dm", text: "You will have seen that the marking meeting was calendared for the same afternoon as the external visit — my error, and here is what happens next." },
      { id: "s2", speakerId: "dm", text: "The marking meeting moves to Thursday. The external visit stays where it is, because externals are booked terms in advance and marking is ours to move." },
      { id: "s3", speakerId: "dm", text: "For those who had childcare on Thursday: I cannot undo the clash, and I will not pretend a 'flexible approach' fixes it. Email me and we will swap your marking with a colleague who can attend." },
      { id: "s4", speakerId: "dm", text: "The deadline for marks does not move — it is external to us, set by the board, and the board does not read apologies." },
      { id: "s5", speakerId: "dm", text: "So the honest summary: the meeting moves, the deadline stands, the swaps are between us, and the error was mine. I would rather you hear the arithmetic than the apology." },
    ],
    transcriptNote: "The apology is followed by an inventory of what moves and what cannot. The distinction between internal and external deadlines carries the announcement.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "Which event moves, and why that one?",
        options: ["The external visit — it is more important", "The marking meeting — externals are booked terms in advance and marking is ours to move", "Both move", "Neither"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["externals are booked terms in advance and marking is ours to"], explanation: "The movable event is the movable one. The item checks the reasoning, which is a scheduling principle. The audible clue is \u201cexternals are booked terms in advance and marking is ours to\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What is offered to staff with Thursday childcare?",
        options: ["A 'flexible approach'", "A swap of their marking with a colleague who can attend, arranged by email", "Nothing — the clash stands", "An exemption"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["we will swap your marking with a colleague who can attend"], explanation: "The remedy is a swap, not a phrase. The item checks the concrete fix the administrator offers. Listen for \u201cwe will swap your marking with a colleague who can attend\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "Why does the deadline for marks not move?",
        options: ["The administrator forgot", "It is external, set by the board, and the board does not read apologies", "It is a holiday", "Staff prefer it"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["the board does not read apologies"], explanation: "The deadline is external and unmoved. The item checks the stated reason, including its edge. Answer anchored in the recording: \u201cthe board does not read apologies\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What does the administrator say she would rather staff hear?",
        options: ["The apology", "The arithmetic — what moves, what stands, what is between us", "A policy document", "Nothing"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["I would rather you hear the arithmetic than the apology"], explanation: "She prefers accounting over condolence. The item checks the stated priority of the communication itself. The audible clue is \u201cI would rather you hear the arithmetic than the apology\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "Whose error was the clash, in the announcement's own words?",
        options: ["The system's", "The administrator's — 'the error was mine'", "The externals'", "Nobody's"],
        correct: 1,
        meta: { skills: ["vocabulary"], keywords: ["the error was mine"], explanation: "Responsibility is claimed plainly at the close. The item checks the attribution the announcement stakes. Listen for \u201cthe error was mine\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-18", title: "The upgrade announced as a loss", taskType: "announcement",
    scene: "IT services, system-wide email read aloud", difficulty: 4, estimatedMinutes: 5,
    intro: "You will hear an announcement about a system migration. Answer the questions about what listeners will actually experience.",
    speakers: [{ id: "it", name: "Service lead", role: "IT service lead announcing a migration", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "it", text: "Over the weekend we migrate the records system to the new platform, and I will describe the change as you will meet it, not as the brochure describes it." },
      { id: "s2", speakerId: "it", text: "For the first week the new system is slower than the old one. That is not a fault; it is the index rebuilding behind your searches, and it finishes by the second Friday." },
      { id: "s3", speakerId: "it", text: "During that week, please do not report slowness — the queue will fill with tickets we already know about, and the real faults will hide among them." },
      { id: "s4", speakerId: "it", text: "What is genuinely worth reporting: anything that returns the wrong record, anything that loses an edit, and anything that denies you access you should have. Those three we want at once." },
      { id: "s5", speakerId: "it", text: "The old system stays readable for ninety days — a read-only copy, no editing — and after ninety days it goes. If you need historical data after that, the export button is the friend you should visit before the deadline." },
    ],
    transcriptNote: "The announcement distinguishes expected slowness from real faults by category, and gives the old system a visible expiry with an export path.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1, stem: "Why will the new system be slower in the first week?",
        options: ["It is underpowered", "The index is rebuilding behind searches, finishing by the second Friday", "Too many users", "Network faults"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["the index rebuilding behind your searches"], explanation: "Slowness has a cause and an end date. The item checks both, since the announcement's plea depends on them. Answer anchored in the recording: \u201cthe index rebuilding behind your searches\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "Why should listeners not report slowness that week?",
        options: ["It is their fault", "Tickets would fill the queue and hide the real faults", "It cannot be recorded", "Reports cost money"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["the queue will fill with tickets we already know about, and "], explanation: "The reason is queue pollution. The item checks the argument behind the request. The audible clue is \u201cthe queue will fill with tickets we already know about, and \u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "Which three things should be reported at once?",
        options: ["Slowness, queues, printing", "Wrong record returned, lost edits, denied access", "Passwords, emails, login screens", "Anything at all"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["returns the wrong record"], explanation: "The list is exact: wrong records, lost edits, denied access. The item checks the triage as stated. Listen for \u201creturns the wrong record\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What happens to the old system for ninety days?",
        options: ["Full service as before", "A readable, read-only copy, after which it is removed", "It is archived offline", "It stays forever"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["a read-only copy, no editing"], explanation: "Read-only for ninety days, then deletion. The item checks the grace period and its end. Answer anchored in the recording: \u201ca read-only copy, no editing\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 5, stem: "What should anyone needing historical data do, and when?",
        options: ["Wait for the archive team", "Use the export button before the ninety-day deadline", "Print everything now", "Nothing — data migrates automatically"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the export button is the friend you should visit before the "], explanation: "Export before expiry. The item checks the action and its window, which is the announcement's practical exit. The audible clue is \u201cthe export button is the friend you should visit before the \u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-19", title: "The charge introduced as a benefit", taskType: "announcement",
    scene: "gym app push notification, read aloud", difficulty: 4, estimatedMinutes: 5,
    intro: "You will hear an announcement introducing a fee. Answer the questions about its actual terms.",
    speakers: [{ id: "gm", name: "Manager", role: "gym chain manager on the app", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "gm", text: "From the first, we're introducing a premium booking tier, and I'll give you the straight version after the marketing version." },
      { id: "s2", speakerId: "gm", text: "Marketing version: book your favourite classes up to fourteen days ahead, with priority waitlisting." },
      { id: "s3", speakerId: "gm", text: "Straight version: the booking window for everyone else shrinks from fourteen days to three, and what was standard is now five pounds a month." },
      { id: "s4", speakerId: "gm", text: "Existing members get the first month free, which is a way of saying the change lands before you have decided. Set a reminder for the twenty-eighth." },
      { id: "s5", speakerId: "gm", text: "And one honest number: last quarter, the seven-day window filled the classes at ninety-four per cent, so the three-day window will not feel different on Tuesdays. It will feel different on Saturdays, which is what the tier is really selling." },
    ],
    transcriptNote: "The announcement converts a feature into a fee by shrinking the default. The ninety-four per cent figure locates where the change bites.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What happens to non-subscribers' booking window?",
        options: ["It stays at fourteen days", "It shrinks from fourteen days to three", "It moves to seven days", "It is abolished"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the booking window for everyone else shrinks from fourteen d"], explanation: "The default is cut to three days. The item checks the shrinkage, which is the substance under the tier. Listen for \u201cthe booking window for everyone else shrinks from fourteen d\u201d — that phrase in the script settles the item." },
      },
      {
        no: 2, stem: "What is the monthly cost of the tier?",
        options: ["Nothing", "Five pounds", "Ten pounds", "Included in membership"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["what was standard is now five pounds a month"], explanation: "Five pounds monthly. The item checks the figure, with 'what was standard' as the sting. Answer anchored in the recording: \u201cwhat was standard is now five pounds a month\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 3, stem: "Why does the manager mention the twenty-eighth?",
        options: ["It is a public holiday", "The free month ends before members have decided — set a reminder to decide deliberately", "Classes close", "Prices drop"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["the change lands before you have decided. Set a reminder for"], explanation: "The free month is a decision delay. The item checks the reading of the grace period as a mechanism. The audible clue is \u201cthe change lands before you have decided. Set a reminder for\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 4, stem: "What does the ninety-four per cent figure show?",
        options: ["Classes are unpopular", "The change will not bite on weekdays; it bites on Saturdays, which is what the tier sells", "The gym is overbooked", "Staff are sufficient"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the seven-day window filled the classes at ninety-four per c"], explanation: "The number locates the pressure on Saturdays. The item checks the use of the statistic, not just its value. Listen for \u201cthe seven-day window filled the classes at ninety-four per c\u201d — that phrase in the script settles the item." },
      },
      {
        no: 5, stem: "How does the manager describe her own announcement's structure?",
        options: ["Formal and complete", "A marketing version followed by a straight version", "Confidential", "A legal notice"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["I'll give you the straight version after the marketing versi"], explanation: "She names her two registers openly. The item checks the frame she announces at the start. Answer anchored in the recording: \u201cI'll give you the straight version after the marketing versi\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-20", title: "The consultation that has already decided", taskType: "announcement",
    scene: "council chamber, planning notice read aloud", difficulty: 4, estimatedMinutes: 5,
    intro: "You will hear an announcement about a consultation. Answer the questions about what it can change.",
    speakers: [{ id: "pl", name: "Planner", role: "planning officer announcing a consultation", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "pl", text: "The consultation on the campus link road opens for six weeks, and the first thing to tell you is its edges, because that is what a consultation is." },
      { id: "s2", speakerId: "pl", text: "Fixed: the road, the route, the budget, and the opening year. Consulted: the surface, the planting, the lighting, and the hours of the works." },
      { id: "s3", speakerId: "pl", text: "I say this because the last consultation heard two hundred submissions about the route, which was fixed, and eleven about the lighting, which was not — and the eleven changed the lighting." },
      { id: "s4", speakerId: "pl", text: "The form mirrors this: page one is the fixed list with no boxes; page two is the open list with boxes, and page two is where the difference gets made." },
      { id: "s5", speakerId: "pl", text: "Submissions close at noon on the last Friday; late ones are read but cannot be counted, and being read is not the same as being able to change anything." },
    ],
    transcriptNote: "The consultation's power lies entirely in page two. The history cited — eleven submissions changed the lighting — shows the mechanism working.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "Which matters are fixed?",
        options: ["Surface, planting, lighting, hours", "Road, route, budget, opening year", "Everything is open", "Only the budget"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["fixed: the road, the route, the budget, and the opening year"], explanation: "The fixed list is structural. The item checks it, since the consultation's edges are its meaning. The audible clue is \u201cfixed: the road, the route, the budget, and the opening year\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What happened in the last consultation?",
        options: ["The route was changed", "Two hundred route submissions changed nothing; eleven lighting submissions changed the lighting", "Nothing was submitted", "It was cancelled"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["two hundred submissions about the route, which was fixed, an"], explanation: "The asymmetry is empirical, not theoretical. The item checks the precedent the planner cites as instruction. Listen for \u201ctwo hundred submissions about the route, which was fixed, an\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "Where, in the form, can submissions make a difference?",
        options: ["Page one", "Page two — the open list with boxes", "The covering letter", "Nowhere"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["page two is where the difference gets made"], explanation: "Page two holds the power. The item checks the geography of the form as described. Answer anchored in the recording: \u201cpage two is where the difference gets made\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What is the status of late submissions?",
        options: ["Refused outright", "Read but not counted — and being read is not the same as being able to change anything", "Counted double", "Accepted"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["late ones are read but cannot be counted"], explanation: "Read, not counted. The item checks the precise status, including the planner's caveat. The audible clue is \u201clate ones are read but cannot be counted\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "When do submissions close?",
        options: ["Six weeks from the notice, at noon on the last Friday", "At midnight", "When the road starts", "No deadline"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["submissions close at noon on the last Friday"], explanation: "Noon, last Friday. The item checks the clock, which is the boundary of being counted at all. Listen for \u201csubmissions close at noon on the last Friday\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
