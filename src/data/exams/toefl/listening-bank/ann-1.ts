/**
 * TOEFL Listening Practice Library — Listen to an Announcement, batch 1
 * (PROMPT 49). Difficulty 1: five single-voice campus and service
 * announcements — changes, instructions and what listeners must do next.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const ann1Exercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-ann-01", title: "Library floor closure", taskType: "announcement",
    scene: "library foyer, tannoy", difficulty: 1, estimatedMinutes: 4,
    intro: "You will hear an announcement about library services. Answer the questions about what is said.",
    speakers: [{ id: "an", name: "Announcer", role: "duty librarian on the tannoy", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "an", text: "Good afternoon. From Monday, the third floor becomes a silent study area and will no longer hold the group tables." },
      { id: "s2", speakerId: "an", text: "Group work moves to the ground floor, where the tables are being fitted with power sockets this weekend." },
      { id: "s3", speakerId: "an", text: "Books currently on loan from the third floor can be returned as normal to any desk." },
      { id: "s4", speakerId: "an", text: "The lifts to the third floor will be out of service on Saturday morning for testing, so please use the stairs." },
      { id: "s5", speakerId: "an", text: "If you have questions, the help desk is open until six, and the online booking system shows live room availability for the whole of next week. Thank you." },
    ],
    transcriptNote: "Note the split of information: what changes on the third floor, where group work goes, and one temporary disruption on Saturday morning.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What happens to the third floor from Monday?",
        options: ["It closes completely", "It becomes a silent study area without group tables", "It becomes a computer room", "It is rebuilt"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["third floor becomes a silent study area"], explanation: "The floor changes function, not existence: silent study, tables removed. The item checks the new use as stated. Answer anchored in the recording: \u201cthird floor becomes a silent study area\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "Where does group work go?",
        options: ["The third floor", "The ground floor, which is being fitted with power sockets", "The cafe", "The second floor"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["group work moves to the ground floor", "fitted with power sockets"], explanation: "Groups move to the ground floor, with sockets being installed. The item checks destination and the works attached to it." },
      },
      {
        no: 3, stem: "How should third-floor books currently on loan be returned?",
        options: ["Only to the third floor", "To any desk, as normal", "They cannot be returned", "By post only"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["returned as normal to any desk"], explanation: "Loans follow the ordinary rule despite the floor's change. The item checks the continuity clause, which is easily missed after the changes." },
      },
      {
        no: 4, stem: "What temporary disruption is announced?",
        options: ["The library closes on Monday", "Third-floor lifts are out on Saturday morning for testing — use the stairs", "The desks move upstairs", "The cafe shuts"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["lifts to the third floor will be out of service on Saturday "], explanation: "One morning of lift testing with stairs advised. The item checks the disruption, its day and its workaround together. The audible clue is \u201clifts to the third floor will be out of service on Saturday \u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-02", title: "Sports centre timetable change", taskType: "announcement",
    scene: "sports centre reception", difficulty: 1, estimatedMinutes: 4,
    intro: "You will hear an announcement about fitness classes. Answer the questions about what is said.",
    speakers: [{ id: "an", name: "Receptionist", role: "sports centre staff on the tannoy", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "an", text: "Attention please — a change to the evening timetable from next week." },
      { id: "s2", speakerId: "an", text: "The Tuesday spin class moves to Thursday at the same time, seven fifteen, because the studio is being resurfaced." },
      { id: "s3", speakerId: "an", text: "Thursday's yoga class, which would clash, moves to Monday at six, and the Monday pilates class moves to the weekend — Saturday at ten." },
      { id: "s4", speakerId: "an", text: "Members who cannot make the new times can transfer their booking to any class in the same tier, or ask at the desk for a credit." },
      { id: "s5", speakerId: "an", text: "The resurfacing finishes in three weeks, and after that we review the timetable with your feedback." },
      { id: "s6", speakerId: "an", text: "That's all — the full timetable is on the boards and the app. Thank you." },
    ],
    transcriptNote: "Three classes move in a chain: spin to Thursday, yoga to Monday, pilates to Saturday. Members keep value by transfer or credit.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "Why does the Tuesday spin class move?",
        options: ["Low attendance", "The studio is being resurfaced", "The instructor left", "A new studio opened"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["studio is being resurfaced"], explanation: "The reason is the works, not demand. The item checks the stated cause, which also explains the three-week horizon." },
      },
      {
        no: 2, stem: "When does the spin class now run?",
        options: ["Tuesday 7:15", "Thursday 7:15 — same time, new day", "Monday 6:00", "Saturday 10:00"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["moves to Thursday at the same time, seven fifteen"], explanation: "Same time, new day: Thursday at seven fifteen. The item checks the moved slot, with the unchanged time as the trap." },
      },
      {
        no: 3, stem: "Where does the pilates class end up?",
        options: ["Monday at six", "Thursday at seven", "Saturday at ten", "It is cancelled"],
        correct: 2,
        meta: { skills: ["details"], keywords: ["pilates class moves to the weekend — Saturday at ten"], explanation: "The chain ends with pilates on Saturday at ten. The item follows the chain, which is the listening load. Listen for \u201cpilates class moves to the weekend — Saturday at ten\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What can members do who cannot attend the new times?",
        options: ["Nothing", "Transfer to any class in the same tier, or request a credit at the desk", "Get a cash refund automatically", "Book private lessons free"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["transfer their booking to any class in the same tier"], explanation: "Two remedies: same-tier transfer or desk credit. The item checks both options as announced. Answer anchored in the recording: \u201ctransfer their booking to any class in the same tier\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-03", title: "Campus shuttle detour", taskType: "announcement",
    scene: "bus stop, campus loop", difficulty: 1, estimatedMinutes: 4,
    intro: "You will hear an announcement about the campus shuttle. Answer the questions about what is said.",
    speakers: [{ id: "dr", name: "Driver", role: "shuttle driver announcing a detour", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "dr", text: "Morning all. Road works on the north avenue mean the loop is reversed for the rest of the week." },
      { id: "s2", speakerId: "dr", text: "We now run clockwise, so the sports centre comes first and the library stop is served second instead of fourth." },
      { id: "s3", speakerId: "dr", text: "The chemistry building stop is closed altogether — passengers for chemistry should use the library stop, a five-minute walk away." },
      { id: "s4", speakerId: "dr", text: "The works are scheduled to finish on Friday, and normal service resumes Saturday morning." },
      { id: "s5", speakerId: "dr", text: "The bus still leaves the interchange every fifteen minutes. Nothing changes on the clock — only the direction, and the driver will still announce each stop as usual. Thank you for your patience this week." },
    ],
    transcriptNote: "One reversal, one closure, one substitution. The frequency is stated as unchanged, which is the detail most listeners assume moves.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What is the main change to the loop?",
        options: ["It is cancelled", "It is reversed — now running clockwise", "It runs hourly", "It takes a new route off campus"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the loop is reversed"], explanation: "The works reverse the direction; the route itself is unchanged. The item checks the nature of the change. The audible clue is \u201cthe loop is reversed\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What should passengers for the chemistry building do?",
        options: ["Wait at the closed stop", "Use the library stop, five minutes away on foot", "Walk to the interchange", "Take a taxi"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["passengers for chemistry should use the library stop, a five"], explanation: "The chemistry stop is closed with a named substitute. The item checks the workaround as instructed. Listen for \u201cpassengers for chemistry should use the library stop, a five\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "When does normal service resume?",
        options: ["Friday evening", "Saturday morning", "Next month", "When the works are paid for"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["normal service resumes Saturday morning"], explanation: "Works end Friday, normal service Saturday morning. The item checks the stated restart, not the works date alone. Answer anchored in the recording: \u201cnormal service resumes Saturday morning\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What is explicitly stated NOT to change?",
        options: ["The direction", "The fifteen-minute frequency", "The driver", "The fare"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the bus still leaves the interchange every fifteen minutes"], explanation: "The frequency stays at fifteen minutes. The item checks the continuity claim, which the announcement underlines on purpose. The audible clue is \u201cthe bus still leaves the interchange every fifteen minutes\u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-04", title: "Exam-room rules", taskType: "announcement",
    scene: "examination hall, before doors open", difficulty: 1, estimatedMinutes: 4,
    intro: "You will hear an announcement of examination rules. Answer the questions about what is required.",
    speakers: [{ id: "in", name: "Invigilator", role: "chief invigilator addressing candidates", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "in", text: "Candidates, good morning. Phones go in the envelope now, not at your desk later — powered off, with your candidate number on the front." },
      { id: "s2", speakerId: "in", text: "Water bottles are allowed with labels removed; no other food or drink at desks." },
      { id: "s3", speakerId: "in", text: "Raise your hand if you need more paper — do not leave your seat for any reason during the paper." },
      { id: "s4", speakerId: "in", text: "Calculators are the department-approved models only; anything that stores text is not one, whatever it calls itself." },
      { id: "s5", speakerId: "in", text: "Finish ten minutes early if you like — papers collected at the desk. After the last paper the doors open; stay seated until told, leaving row by row." },
    ],
    transcriptNote: "Each rule pairs a permission with a boundary: phones up front, labelless water, hand for paper, approved calculators, stay seated at the end.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "When must phones be handed in?",
        options: ["At the desk during the exam", "Now, at the start, powered off in a numbered envelope", "At the end", "Phones may stay in pockets off"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["phones go in the envelope now"], explanation: "Phones go up front before the paper starts, off, numbered. The item checks the timing and the labelling together. Listen for \u201cphones go in the envelope now\u201d — that phrase in the script settles the item." },
      },
      {
        no: 2, stem: "What condition is attached to water bottles?",
        options: ["None at all", "Allowed with labels removed", "Only clear bottles of a brand", "Water must be bought at the hall"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["water bottles are allowed with labels removed"], explanation: "Water is permitted, labels off. The item checks the one permitted item and its condition. Answer anchored in the recording: \u201cwater bottles are allowed with labels removed\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 3, stem: "How should a candidate request more paper?",
        options: ["Walk to the front", "Raise a hand and stay seated", "Call out", "Share with a neighbour"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["raise your hand if you need more paper — do not leave your s"], explanation: "The rule is a raised hand, never leaving the seat. The item checks both halves of the instruction. The audible clue is \u201craise your hand if you need more paper — do not leave your s\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 4, stem: "Which calculators are permitted?",
        options: ["Any calculator", "Department-approved models only — nothing that stores text", "Scientific calculators of any brand", "None"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["department-approved models only"], explanation: "Approval is by list, with text storage disqualifying. The item checks the rule and its stated test. Listen for \u201cdepartment-approved models only\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-05", title: "The parcel that missed you", taskType: "announcement",
    scene: "hall of residence, notice over the door", difficulty: 1, estimatedMinutes: 4,
    intro: "You will hear a delivery announcement about a parcel. Answer the questions about what is said.",
    speakers: [{ id: "dr", name: "Courier", role: "courier reading a delivery notice aloud", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "dr", text: "This is a delivery notice for flat six. We attempted your parcel at ten this morning — a signature was required, and no one answered." },
      { id: "s2", speakerId: "dr", text: "The parcel is held at the depot on Fenwick Road until Friday, closing at six." },
      { id: "s3", speakerId: "dr", text: "Bring the card we left and photo ID; a flatmate can collect it only if they bring your card and their own ID as well." },
      { id: "s4", speakerId: "dr", text: "You can also reply to the text with a safe place, and we'll leave it there tomorrow — but signature items need the signature, so the depot is the sure route." },
      { id: "s5", speakerId: "dr", text: "After Friday the parcel returns to the sender. That's the notice — thanks." },
    ],
    transcriptNote: "Two collection routes are offered, and one is only partially available. The deadline is the sender return, not Friday collection.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "Why was the parcel not left?",
        options: ["It was too big", "A signature was required and nobody answered", "The flat refused it", "The address was wrong"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["a signature was required, and no one answered"], explanation: "The failed delivery is explained in one clause. The item checks the cause, which then explains the depot rule. Answer anchored in the recording: \u201ca signature was required, and no one answered\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "Where and until when is the parcel held?",
        options: ["The flat office, until today", "The Fenwick Road depot, until Friday at six", "The post room, indefinitely", "The sender, already"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["depot on Fenwick Road until Friday, closing at six"], explanation: "Held at the depot until Friday six. The item checks place and deadline as one fact. The audible clue is \u201cdepot on Fenwick Road until Friday, closing at six\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "What must a flatmate bring to collect it for you?",
        options: ["Just their own ID", "Your card and their own ID", "A signed letter from you", "Nothing — they cannot"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["your card and their own ID as well"], explanation: "Third-party collection needs both documents. The item checks the doubled requirement. Listen for \u201cyour card and their own ID as well\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What happens after Friday?",
        options: ["Another delivery attempt", "The parcel returns to the sender", "It moves to the flat office", "It is destroyed"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["after Friday the parcel returns to the sender"], explanation: "Friday's deadline ends in return to sender. The item checks the consequence, which is the announcement's pressure. Answer anchored in the recording: \u201cafter Friday the parcel returns to the sender\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
