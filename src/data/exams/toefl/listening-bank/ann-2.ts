/**
 * TOEFL Listening Practice Library — Listen to an Announcement, batch 2
 * (PROMPT 49). Difficulty 2: five announcements with conditions, limits
 * and instructions that depend on the listener's situation.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const ann2Exercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-ann-06", title: "Printing during the outage", taskType: "announcement",
    scene: "computer room, notice over the door", difficulty: 2, estimatedMinutes: 4,
    intro: "You will hear an announcement about printing during a system upgrade. Answer the questions about what applies.",
    speakers: [{ id: "an", name: "Technician", role: "IT staff briefing the room", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "an", text: "Heads up — the payment system is being replaced this Thursday, so the printers will be offline from nine until two, and the queue desk closes for lunch between one and two as usual." },
      { id: "s2", speakerId: "an", text: "Anything queued before nine prints as normal; nothing can be released during the works, even at the machine." },
      { id: "s3", speakerId: "an", text: "If your deadline is Thursday afternoon, print on Wednesday and keep the credits — credits carry over, queued jobs do not." },
      { id: "s4", speakerId: "an", text: "The library photocopiers are unaffected because they run on the old reader, so a copy card works there all day." },
      { id: "s5", speakerId: "an", text: "Colour printing, which needs the new system, is unavailable until Friday morning even after the printers return." },
    ],
    transcriptNote: "The outage splits in three: release suspended, credits preserved, colour delayed longer than the rest. The photocopiers escape altogether.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "When are the printers offline?",
        options: ["All Thursday", "Nine until two on Thursday", "Wednesday afternoon", "Friday morning"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["offline from nine until two"], explanation: "The window is Thursday nine to two. The item checks the hours, since the day alone is the trap. The audible clue is \u201coffline from nine until two\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What happens to jobs queued before nine?",
        options: ["They are lost", "They print as normal", "They print after two", "They need re-sending"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["anything queued before nine prints as normal"], explanation: "Pre-nine queues print normally; mid-works release is impossible. The item checks the boundary rule. Listen for \u201canything queued before nine prints as normal\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "What is the advice for a Thursday-afternoon deadline?",
        options: ["Print Wednesday — credits carry over, queued jobs do not", "Wait for the engineers", "Use the photocopiers for essays", "Email the technicians"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["print on Wednesday and keep the credits"], explanation: "The asymmetry is the advice: credits survive, queues do not. The item checks the reasoning, not just the date. Answer anchored in the recording: \u201cprint on Wednesday and keep the credits\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "Why does the library photocopier keep working?",
        options: ["It is newer", "It runs on the old card reader, untouched by the upgrade", "It has its own technician", "It is out of order anyway"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["run on the old reader"], explanation: "The copiers sit outside the new system. The item checks the stated reason for the exception. The audible clue is \u201crun on the old reader\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "When does colour printing return?",
        options: ["Thursday at two", "Not until Friday morning", "Monday", "Never"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["unavailable until Friday morning"], explanation: "Colour lags the general restart by a day. The item checks the delayed service after the main recovery. Listen for \u201ccolour printing… unavailable until Friday morning even after\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-07", title: "The phased key change", taskType: "announcement",
    scene: "residence block noticeboard, read aloud", difficulty: 2, estimatedMinutes: 4,
    intro: "You will hear an announcement about new door codes. Answer the questions about what applies and when.",
    speakers: [{ id: "an", name: "Warden", role: "hall warden addressing residents", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "an", text: "From the first of next month the main doors move to card access, and the old codes stop working at midnight." },
      { id: "s2", speakerId: "an", text: "Collect your card from the office between nine and five any weekday; you'll need your room key as ID." },
      { id: "s3", speakerId: "an", text: "The office is closed weekends, so Saturday arrivals collect on Monday — the side door stays on codes until then, and only for them." },
      { id: "s4", speakerId: "an", text: "Lost cards cost five pounds, but the first replacement in a year is free — so report a loss early rather than late." },
      { id: "s5", speakerId: "an", text: "Guests sign in at the office as now; nothing changes for visitors except the doors they follow you through." },
    ],
    transcriptNote: "The transition has a one-group exception: Saturday arrivals keep the side-door codes until Monday. The first lost card in a year is free.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "When do the old codes stop working?",
        options: ["At the end of the month, midnight", "Immediately", "After the weekend", "When collected"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["the old codes stop working at midnight"], explanation: "Codes die at midnight on the first. The item checks the deadline as announced, with the day boundary included. Answer anchored in the recording: \u201cthe old codes stop working at midnight\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "What identification is needed to collect a card?",
        options: ["A passport", "Your room key", "A utility bill", "Nothing"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["you'll need your room key as ID"], explanation: "The room key serves as ID. The item checks the document named, which is lighter than most listeners expect. The audible clue is \u201cyou'll need your room key as ID\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "What arrangement covers people who arrive on a Saturday?",
        options: ["They are issued cards at the door", "The side door stays on codes until they collect on Monday", "They wait outside", "They use the guest book"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["Saturday arrivals collect on Monday — the side door stays on"], explanation: "One exception group keeps codes briefly. The item checks the exception and its expiry together. Listen for \u201cSaturday arrivals collect on Monday — the side door stays on\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What is the rule on lost cards?",
        options: ["Five pounds always", "Five pounds, but the first replacement within a year is free — report early", "Free forever", "Not replaceable"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["lost cards cost five pounds"], explanation: "The pricing has one free slot a year. The item checks the fee structure, including the early-report advice. Answer anchored in the recording: \u201clost cards cost five pounds\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 5, stem: "What changes for guests?",
        options: ["They need cards too", "Nothing — they sign in at the office as now", "They pay a deposit", "They are banned"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["guests sign in at the office as now"], explanation: "Guest procedure is unchanged. The item checks the continuity clause after a list of changes. The audible clue is \u201cguests sign in at the office as now\u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-08", title: "The survey that becomes a deadline", taskType: "announcement",
    scene: "lecture theatre, end of a module", difficulty: 2, estimatedMinutes: 4,
    intro: "You will hear a lecturer announce a survey and its consequence. Answer the questions about what applies.",
    speakers: [{ id: "le", name: "Lecturer", role: "module leader closing the term", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "le", text: "Two minutes on the module survey before you go. It closes Friday at five, and it opens your results." },
      { id: "s2", speakerId: "le", text: "Until you submit it, your provisional marks stay hidden — that's the system, not my preference." },
      { id: "s3", speakerId: "le", text: "It's twelve questions, mostly sliders, and two free-text boxes where the real information lives." },
      { id: "s4", speakerId: "le", text: "The free-text answers are anonymous to me until after the exam board, so write plainly — the person deciding resits never sees who wrote what." },
      { id: "s5", speakerId: "le", text: "Last year's changes to the problem classes came from box two; the sliders alone would have said 'fine', which is what sliders say. So write in the boxes, and thank you for the term." },
    ],
    transcriptNote: "The survey is a gate to results, and its anonymity has a precise expiry. The lecturer points to where useful answers actually come from.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What does the survey's submission unlock?",
        options: ["The exam board", "Your provisional marks, hidden until you submit", "A certificate", "Resit rights"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["until you submit it, your provisional marks stay hidden"], explanation: "Submission gates the marks. The item checks the consequence that makes Friday five a real deadline. Listen for \u201cuntil you submit it, your provisional marks stay hidden\u201d — that phrase in the script settles the item." },
      },
      {
        no: 2, stem: "When does the survey close?",
        options: ["Friday at five", "Sunday midnight", "Next term", "When the exam board sits"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["it closes Friday at five"], explanation: "The deadline is Friday five. The item checks the time as well as the day. Answer anchored in the recording: \u201cit closes Friday at five\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 3, stem: "Until when are the free-text answers anonymous to the lecturer?",
        options: ["Forever", "Until after the exam board", "Until the survey closes", "They are never anonymous"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["anonymous to me until after the exam board"], explanation: "Anonymity has an expiry tied to the board. The item checks the boundary, which the lecturer states to invite candour." },
      },
      {
        no: 4, stem: "What does the lecturer say about sliders?",
        options: ["They are the most useful part", "They tend to say 'fine', which is what sliders say — the free-text boxes carry the information", "They are broken", "They should be longer"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the sliders alone would have said 'fine', which is what slid"], explanation: "The guidance ranks the inputs: boxes over sliders. The item checks the evaluation the lecturer offers last. The audible clue is \u201cthe sliders alone would have said 'fine', which is what slid\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "What came from box two last year?",
        options: ["The reading list", "The changes to the problem classes", "Nothing", "A new textbook"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["last year's changes to the problem classes came from box two"], explanation: "The precedent cited is the problem classes. The item checks the example that gives the advice force. Listen for \u201clast year's changes to the problem classes came from box two\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-09", title: "Lost property with a deadline", taskType: "announcement",
    scene: "sports centre noticeboard, read aloud", difficulty: 2, estimatedMinutes: 4,
    intro: "You will hear an announcement about lost property. Answer the questions about what to do and by when.",
    speakers: [{ id: "an", name: "Receptionist", role: "sports centre staff on the tannoy", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "an", text: "A reminder about lost property. Anything found on the floor goes to the box behind reception, and the box is emptied to the store every Friday afternoon before closing, and the office logs each item the same day." },
      { id: "s2", speakerId: "an", text: "Valuables — phones, wallets, anything with a battery — never sit in the box; they go straight to the locked drawer and stay there for six weeks." },
      { id: "s3", speakerId: "an", text: "After six weeks unclaimed, items pass to the campus lost property office, which holds them for a term and then disposes of them." },
      { id: "s4", speakerId: "an", text: "Describe the item when you ask — we don't hand things over to the first person who says 'my jacket'." },
      { id: "s5", speakerId: "an", text: "And a word to the wise: check the box before Friday if you can, because Friday's box is Monday's store, and the store is harder to reach than the drawer. Umbrellas and water bottles turn up more than anything else, so check under the benches before you leave the floor." },
    ],
    transcriptNote: "Three locations and three clocks: box to store on Fridays, valuables in the drawer for six weeks, then the campus office for a term.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "Where do found items go, and when are they moved?",
        options: ["The box behind reception, emptied to the store every Friday", "The manager's office, kept indefinitely", "The police station daily", "They stay where found"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["box behind reception"], explanation: "Box first, store weekly. The item checks both halves of the routing rule. Answer anchored in the recording: \u201cbox behind reception\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "How are valuables treated differently?",
        options: ["They stay in the box longer", "They go straight to a locked drawer, held six weeks", "They are thrown away", "They go to the bank"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["straight to the locked drawer and stay there for six weeks"], explanation: "Valuables bypass the box for the drawer. The item checks the separate route and its duration. The audible clue is \u201cstraight to the locked drawer and stay there for six weeks\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "What happens after six weeks unclaimed?",
        options: ["Disposal at the centre", "Transfer to the campus lost property office, which holds a term and then disposes", "Return to the finder", "Auction"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["pass to the campus lost property office, which holds them fo"], explanation: "The campus office inherits, holds a term, then disposes. The item checks the chain's third stage. Listen for \u201cpass to the campus lost property office, which holds them fo\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "Why should owners search before Friday?",
        options: ["The centre closes weekends", "Friday's box becomes Monday's store, and the store is harder to reach than the drawer", "Staff change weekly", "Items are cleaned Fridays"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["Friday's box is Monday's store, and the store is harder to reach"], explanation: "The advice follows the routing: after Friday the item is in the less accessible place. The item checks the practical reasoning." },
      },
      {
        no: 5, stem: "What must an owner do to claim an item?",
        options: ["Show a receipt", "Describe the item — staff do not hand things to the first claimant", "Pay a fee", "Bring a witness"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["describe the item when you ask"], explanation: "Claims run on description, not documentation. The item checks the anti-fraud rule as stated. Answer anchored in the recording: \u201cdescribe the item when you ask\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-ann-10", title: "The workshop that needs a prerequisite", taskType: "announcement",
    scene: "department noticeboard, read aloud", difficulty: 2, estimatedMinutes: 4,
    intro: "You will hear an announcement about a training workshop. Answer the questions about who may attend.",
    speakers: [{ id: "an", name: "Coordinator", role: "technical training coordinator", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "an", text: "The instrument workshop opens for booking on Monday — twenty places, first come on the list, and one place per lab." },
      { id: "s2", speakerId: "an", text: "Heads up on the prerequisite: you must have completed the safety induction within the last year, or hold a current exemption." },
      { id: "s3", speakerId: "an", text: "Bookings from labs whose induction has lapsed are held rather than refused — you keep the place if you book an induction before the workshop." },
      { id: "s4", speakerId: "an", text: "The induction runs Wednesdays at noon and takes forty minutes; the workshop is in four weeks, so the arithmetic is comfortable." },
      { id: "s5", speakerId: "an", text: "And bring your own samples — the practice part uses them, and last year's batch of borrowed standards taught nobody anything about their own work." },
    ],
    transcriptNote: "The rule is a hold, not a refusal: lapsed inductors keep their place if they book the induction. The arithmetic is stated as comfortable.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1, stem: "How are the twenty places allocated?",
        options: ["By ballot", "First come on the list, one place per lab", "By seniority", "By exam results"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["first come on the list, and one place per lab"], explanation: "First come, capped at one per lab. The item checks both allocation rules together. The audible clue is \u201cfirst come on the list, and one place per lab\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What is the prerequisite?",
        options: ["A degree", "Safety induction within the last year, or a current exemption", "Two years' experience", "A first-aid certificate"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["safety induction within the last year"], explanation: "Induction within a year or exemption. The item checks the requirement including its two routes. Listen for \u201csafety induction within the last year\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "What happens to a booking from a lab whose induction has lapsed?",
        options: ["It is refused", "It is held — the place survives if an induction is booked before the workshop", "It goes to the bottom of the list", "It is fined"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["held rather than refused"], explanation: "The policy is a conditional hold. The item checks the lenient mechanism, which is the announcement's point. Answer anchored in the recording: \u201cheld rather than refused\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "When does the induction run, and how long is it?",
        options: ["Wednesdays at noon, forty minutes", "Mondays all day", "Friday afternoons, two hours", "By arrangement only"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["Wednesdays at noon and takes forty minutes"], explanation: "Noon Wednesdays, forty minutes. The item checks the schedule that makes the hold workable. The audible clue is \u201cWednesdays at noon and takes forty minutes\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 5, stem: "What must attendees bring, and why?",
        options: ["Notebooks, for the theory", "Their own samples — the practice part uses them, and borrowed standards taught nobody anything about their own work", "Money for materials", "Nothing"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["bring your own samples"], explanation: "Own samples, with the pedagogical reason attached. The item checks the request and its stated purpose. Listen for \u201cbring your own samples\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
