/**
 * TOEFL Listening Practice Library — Listen and Choose a Response, batch A
 * (PROMPT 49).
 *
 * Thirteen exercises: difficulty 1–3 response items (d1×5, d2×5, d3×3).
 * Each is a single short spoken prompt — a request, apology, invitation,
 * complaint or small-talk turn — and the learner picks the pragmatically
 * appropriate reply. Difficulty 3 items add a second question on the
 * speaker's intention itself. The recording is the segment list, spoken
 * through on-device speech synthesis with accent-matched voices.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const respAExercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-resp-01",
    title: "Borrowing lecture notes",
    taskType: "choose-response",
    scene: "after a morning lecture, corridor",
    difficulty: 1,
    estimatedMinutes: 3,
    intro: "You will hear a student make a short request. Choose the most appropriate response.",
    speakers: [{ id: "li", name: "Lidia", role: "student who missed the notes", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "li", text: "Hi — I missed the start of Tuesday's lecture. Could I borrow your notes for the first half hour? I'll photograph them and return them straight after." },
    ],
    transcriptNote:
      "The request is informal but specific: notes for the first half hour only, photographed and returned immediately. The right reply grants exactly what was asked.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "The lecture started at nine.",
          "Sure — here you go, the first pages are Tuesday's.",
          "You should come on time next week.",
          "I don't take notes in that class.",
        ],
        correct: 1,
        lure: 2,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["borrow your notes", "first half hour", "photograph"],
          explanation:
            "Lidia makes a friendly, concrete request. 'Here you go' matches her register and grants it; the advice option answers a request nobody made, which is the classic response-item trap.",
          trap: { family: "register-mismatch", note: "The unsolicited advice keeps the topic but refuses the actual request." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-02",
    title: "Rescheduling office hours",
    taskType: "choose-response",
    scene: "email read aloud to a professor",
    difficulty: 1,
    estimatedMinutes: 3,
    intro: "You will hear a student ask a professor for something. Choose the most appropriate response.",
    speakers: [{ id: "sa", name: "Sam", role: "student with a shift conflict", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "sa", text: "Professor Ali, I'm sorry — my work shift has moved to Thursday afternoons, so I can't make your office hours any more. Is there another time we could meet this week?" },
    ],
    transcriptNote:
      "The register is formal (title + apology) and the request is a reschedule. Only an option that accepts in the same register and answers the intention fits.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "Of course — how does Wednesday at ten suit you?",
          "Office hours are on Thursday afternoons.",
          "You shouldn't have a job during term time.",
          "My shift moved too.",
        ],
        correct: 0,
        lure: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["office hours", "another time", "this week"],
          explanation:
            "The student apologises formally and proposes a new meeting. 'How does Wednesday at ten suit you?' accepts the reschedule; the lure merely restates the old time, ignoring the request entirely.",
          trap: { family: "literal-echo", note: "The lure echoes a detail from the prompt without answering the intention." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-03",
    title: "A decaf order",
    taskType: "choose-response",
    scene: "coffee cart, mid-morning",
    difficulty: 1,
    estimatedMinutes: 3,
    intro: "You will hear a customer order at a counter. Choose the most appropriate response from the barista.",
    speakers: [{ id: "cu", name: "Customer", role: "ordering one drink", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "cu", text: "Hi — one medium oat-milk latte, please, and could you make it decaf? It's a bit late in the day for caffeine." },
    ],
    transcriptNote:
      "The order contains one drink with two modifications. The correct response confirms both the drink and the decaf request without arguing with it.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "Decaf still has a little caffeine, you know.",
          "We're out of oat milk.",
          "Sure — one decaf oat latte coming up.",
          "Milk or oat milk?",
        ],
        correct: 2,
        lure: 0,
        meta: {
          skills: ["comprehension", "speaker-intention"],
          keywords: ["medium", "oat-milk latte", "decaf"],
          explanation:
            "The customer has already specified oat milk and decaf, so the right reply confirms the order as given. The lecture about caffeine content is trivia where a confirmation belongs.",
          trap: { family: "register-mismatch", note: "The lure debates the premise instead of taking the order." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-04",
    title: "The overflowing bin",
    taskType: "choose-response",
    scene: "student flat kitchen",
    difficulty: 1,
    estimatedMinutes: 3,
    intro: "You will hear one flatmate raise a household problem. Choose the most appropriate response from the other.",
    speakers: [{ id: "jo", name: "Jonah", role: "flatmate pointing at the bin", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "jo", text: "Hey — the kitchen bin's completely full again and it's starting to smell. Whoever's turn it is, could we get it out before tonight? I'd do it but I'm late already." },
    ],
    transcriptNote:
      "The complaint is mild and specific, with a time limit (before tonight) and a stated excuse. The right answer either takes the job or fixes the schedule — not a lecture.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "It's not my turn.",
          "The bin is full.",
          "No worries — I'm heading out now, I'll take it down on my way.",
          "You should do it yourself.",
        ],
        correct: 2,
        lure: 0,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["kitchen bin's completely full", "before tonight", "I'm late"],
          explanation:
            "Jonah raises a shared problem with a deadline and a reason he can't act. 'I'll take it down on my way' solves both; the flat denial keeps the topic and abandons the household.",
          trap: { family: "register-mismatch", note: "'It's not my turn' answers the chore roster, not the smelly bin." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-05",
    title: "Congratulations on the result",
    taskType: "choose-response",
    scene: "department corridor, results day",
    difficulty: 1,
    estimatedMinutes: 3,
    intro: "You will hear someone congratulate a friend. Choose the most appropriate reply from the friend.",
    speakers: [{ id: "ma", name: "Marta", role: "friend delivering good news", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "ma", text: "I just saw the list — first class! All those early mornings in the lab actually worked. Congratulations, you completely earned it." },
    ],
    transcriptNote:
      "The register is warm and specific (the lab mornings). The natural reply shares credit or accepts the praise briefly — deflecting entirely reads as false modesty.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "It was nothing, anyone could have done it.",
          "The list is on the noticeboard.",
          "Thank you — the early mornings nearly killed me, but it was worth it.",
          "What list?",
        ],
        correct: 2,
        lure: 0,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["first class", "early mornings", "lab"],
          explanation:
            "Warm praise calls for a warm reply that accepts it. The total deflection sounds dismissive of the praiser's sincerity, which is why the thank-you-and-agree option is the appropriate one.",
          trap: { family: "register-mismatch", note: "Excessive modesty mismatches the celebratory register of the original message." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-06",
    title: "The lost library card",
    taskType: "choose-response",
    scene: "library help desk",
    difficulty: 2,
    estimatedMinutes: 3,
    intro: "You will hear a member explain a problem at the desk. Choose the most appropriate response from the librarian.",
    speakers: [{ id: "ne", name: "Nell", role: "member with a lost card", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "ne", text: "Hello — I think my library card's gone. I had it on the bus this morning and it wasn't in my pocket when I got off. I've got three books out at the moment, all due back on Saturday." },
    ],
    transcriptNote:
      "Two problems are stacked: the lost card and the loans due Saturday. The right response addresses the process for both, not just the object.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "Cards are issued at this desk.",
          "That's a shame — buses are awful for that.",
          "No problem — we can freeze the card today so nobody can use it, and you can renew the books on your record without it. Bring photo ID for the replacement.",
          "You should look in your bag again.",
        ],
        correct: 2,
        meta: {
          skills: ["comprehension", "speaker-intention"],
          keywords: ["library card", "three books out", "due back on Saturday"],
          explanation:
            "Nell's practical worries are misuse of the card and the Saturday deadline. The service reply freezes the card and renews the loans in one breath, which answers both unstated questions.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-07",
    title: "Offering a lift",
    taskType: "choose-response",
    scene: "end of an evening class",
    difficulty: 2,
    estimatedMinutes: 3,
    intro: "You will hear a classmate make an offer. Choose the most appropriate response.",
    speakers: [{ id: "de", name: "Dev", role: "classmate with a car", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "de", text: "It's pouring out there and the buses have stopped. I'm driving past your street on the way home — want a lift? There's room and it's genuinely no detour." },
    ],
    transcriptNote:
      "The offer is concrete: past your street, no detour, room in the car. Accepting warmly or declining warmly both fit; a suspicious or transactional reply does not.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "How much do you charge?",
          "The buses have stopped?",
          "That's really kind — yes please, if you're sure it's no detour. I'll buy the coffee next week.",
          "I'd rather walk.",
        ],
        correct: 2,
        lure: 0,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["driving past your street", "no detour", "want a lift"],
          explanation:
            "Dev has pre-answered the two natural worries — room and detour — so the appropriate reply accepts and offers a small return. Asking the price turns a kindness into a transaction, which is the trap.",
          trap: { family: "register-mismatch", note: "The fare question recategorises a favour as a service." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-08",
    title: "The double-booked room",
    taskType: "choose-response",
    scene: "study room, two groups at one door",
    difficulty: 2,
    estimatedMinutes: 4,
    intro: "You will hear a member of the other group open a negotiation. Choose the most appropriate response from your side.",
    speakers: [{ id: "pr", name: "Priya", role: "holder of the other booking", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "pr", text: "Hi — I think we've double-booked this room. Our name's on the sheet for seven, and so, I suspect, is yours. Before we fight about it — the room next door is empty till nine. Shall we just split the time?" },
    ],
    transcriptNote:
      "The speaker proposes the compromise herself. The appropriate reply engages with the split — accepting, adjusting the boundary or noting a snag — rather than relitigating the sheet.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "The sheet says our name at seven.",
          "Works for us — we only need forty minutes, so take it from eight, and we'll be gone before you start. Does that suit?",
          "We booked first.",
          "There's no room next door.",
        ],
        correct: 1,
        lure: 3,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["double-booked", "room next door", "split the time"],
          explanation:
            "Priya offers a split and names the empty room. The cooperative answer improves the split with a detail (only forty minutes needed); the denials argue about facts she has already conceded.",
          trap: { family: "literal-echo", note: "The lure contradicts a premise the speaker supplied herself." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-09",
    title: "A quiet complaint about noise",
    taskType: "choose-response",
    scene: "neighbour's door, eleven at night",
    difficulty: 2,
    estimatedMinutes: 4,
    intro: "You will hear a neighbour raise a complaint politely. Choose the most appropriate response.",
    speakers: [{ id: "ag", name: "Mr Agu", role: "downstairs neighbour", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "ag", text: "Hello — sorry to bother you at this hour. Your music is a bit loud for us downstairs, and it carries straight through the floor. Would you mind turning it down a little? Not off — just down." },
    ],
    transcriptNote:
      "The request is explicitly modest ('not off — just down'). The appropriate answer accepts the small version of it, possibly with a time limit, not a defence of the volume.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "It's not that loud.",
          "Of course — sorry about that. We'll turn it down and switch to headphones after midnight.",
          "The music isn't ours.",
          "You could knock earlier.",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["a bit loud", "turning it down", "not off"],
          explanation:
            "The neighbour has asked for a partial change and disclaimed wanting more. Accepting with a time limit honours exactly the modest version offered; disputing the decibels argues a fact he can hear.",
          trap: { family: "register-mismatch", note: "'It's not that loud' contests the premise instead of granting the small request." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-10",
    title: "Warning about a deadline",
    taskType: "choose-response",
    scene: "lab corridor, Friday afternoon",
    difficulty: 2,
    estimatedMinutes: 4,
    intro: "You will hear a coursemate pass on a warning. Choose the most appropriate response.",
    speakers: [{ id: "ta", name: "Tamsin", role: "coursemate who read the small print", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "ta", text: "Just so you know — the portal says the report's due Monday nine, but the handbook has it at Friday noon. I've emailed the office to ask which one counts, and I'd get it in by Friday to be safe." },
    ],
    transcriptNote:
      "The warning is about conflicting sources, with a self-protective recommendation attached. The right reply engages with the risk, not with which document is prettier.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "The portal is usually right.",
          "Good catch — I'm nearly done, so I'll aim for Friday noon too. Let me know what the office says.",
          "Which document do you trust?",
          "Deadlines never change.",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["comprehension", "speaker-intention"],
          keywords: ["portal", "Monday nine", "Friday noon"],
          explanation:
            "Tamsin reports a contradiction and a plan: submit by the earlier time. The appropriate answer adopts the safe course and keeps the channel open; the lure resolves the contradiction by habit, which is exactly the risk.",
          trap: { family: "mention-lure", note: "'The portal is usually right' answers by custom where the evidence conflicts." },
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-11",
    title: "Turning down an invitation gracefully",
    taskType: "choose-response",
    scene: " Friday evening, door of the common room",
    difficulty: 3,
    estimatedMinutes: 4,
    intro: "You will hear an invitation. Choose the most appropriate response — a refusal is expected, so the manner is what counts.",
    speakers: [{ id: "hu", name: "Hugo", role: "friend issuing an invitation", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "hu", text: "A few of us are walking up to the observatory tonight — the sky's supposed to be completely clear. It's an hour up, we leave at ten. You coming?" },
    ],
    transcriptNote:
      "The invitation is warm and specific (time, distance, reason). A graceful refusal gives a real reason, regrets it, and proposes something else — it does not accept a maybe.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "Maybe — I'll see how I feel.",
          "Ten's too late for walking.",
          "I'd love to, but I've got the lab report due at nine tomorrow. Rain check — and if you're back before midnight, come tell me what you saw.",
          "You always organise things at short notice.",
        ],
        correct: 2,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["observatory", "leave at ten", "hour up"],
          explanation:
            "The appropriate refusal names the concrete obstacle (the report), states the regret, and offers a compensating plan. The maybe-style option withholds commitment while claiming interest, which is the trap.",
          trap: { family: "negation", note: "'I'll see how I feel' is a polite non-answer; the soft refusal trap." },
        },
      },
      {
        no: 2,
        stem: "What does Hugo most want to achieve?",
        options: [
          "To test the friend's fitness",
          "To share an experience he expects to be worth the walk",
          "To prove the forecast right",
          "To be back before midnight",
        ],
        correct: 1,
        meta: {
          skills: ["speaker-intention"],
          keywords: ["completely clear", "hour up", "you coming"],
          explanation:
            "The enthusiasm is about the sky and the company; the walk is the price. Reading the invitation's point — a shared experience — is the second question at this difficulty.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-12",
    title: "The corrected correction",
    taskType: "choose-response",
    scene: "seminar, just after a mistake was pointed out",
    difficulty: 3,
    estimatedMinutes: 4,
    intro: "You will hear a student correct a correction. Choose the most appropriate response from the tutor.",
    speakers: [{ id: "ro", name: "Rosa", role: "student defending her figure", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "ro", text: "Sorry — I checked the source again at lunch, and I think the number I gave was right after all. The edition you quoted from has the misprint; the errata sheet fixes it. I've brought both printouts." },
    ],
    transcriptNote:
      "The register is respectful (apology opener) and the evidence is physical (two printouts). The right reply engages with the evidence, whatever it decides — it does not defend authority.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "The textbook is the textbook.",
          "Well argued — let's look at the errata sheet together after the break, and if it says what you think, we'll correct the class notes too.",
          "Mistakes happen; don't worry about it.",
          "Bring it next week.",
        ],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["checked the source", "errata sheet", "brought both printouts"],
          explanation:
            "Rosa has done the work and brought the artefacts. The tutor's appropriate reply examines the evidence on the spot and promises the correction upstream (the class notes), which respects both truth and process.",
          trap: { family: "register-mismatch", note: "'The textbook is the textbook' defends authority against evidence." },
        },
      },
      {
        no: 2,
        stem: "Why does Rosa open with 'Sorry'?",
        options: [
          "Because her number was wrong",
          "Because she is about to disagree with the tutor, and softens the disagreement",
          "Because she arrived late",
          "Because she lost the printouts",
        ],
        correct: 1,
        meta: {
          skills: ["speaker-intention"],
          keywords: ["I think the number I gave was right after all"],
          explanation:
            "The apology precedes the disagreement, not an admission: the softener marks the face-threatening act of telling a tutor the correction was wrong. That reading of the opener is the second question.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-13",
    title: "Asking for an extension honestly",
    taskType: "choose-response",
    scene: "office hours, deadline week",
    difficulty: 3,
    estimatedMinutes: 4,
    intro: "You will hear a student request an extension while volunteering a weakness. Choose the most appropriate response from the supervisor.",
    speakers: [{ id: "kw", name: "Kwame", role: "student with a weak draft", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "kw", text: "The draft's thinner than I promised — the second experiment kept failing and I rewrote the method twice. Could I have until Thursday? And if it helps decide: the failure cause is in the document, clearly marked, so you can see it's not an excuse." },
    ],
    transcriptNote:
      "The request is unusual: it offers evidence against itself. The appropriate reply uses the offer — reading the marked section — rather than rewarding or punishing the candour in the abstract.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1,
        stem: "Choose the most appropriate response.",
        options: [
          "Extensions reward poor planning.",
          "Thursday's fine — and thank you for marking the failure cause. Leave the draft as it is; we'll read that section first and take it from there.",
          "Just submit whatever you have.",
          "How long do you want?",
        ],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"],
          keywords: ["second experiment kept failing", "until Thursday", "clearly marked"],
          explanation:
            "Kwame couples the request with verifiable evidence. The appropriate supervisor accepts the smaller commitment and uses the marking, which is what made the request credible; the moral lecture ignores everything he offered.",
          trap: { family: "register-mismatch", note: "The first option scolds instead of engaging with the evidence." },
        },
      },
      {
        no: 2,
        stem: "What does Kwame gain by saying the failure cause is 'clearly marked'?",
        options: [
          "Extra marks for honesty",
          "He converts his weakness into checkable evidence, making the extension a reasonable risk rather than a plea",
          "A longer deadline automatically",
          "Nothing; it is a stylistic flourish",
        ],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "inference"],
          keywords: ["you can see it's not an excuse"],
          explanation:
            "The offer pre-empts the supervisor's natural doubt. That rhetorical move — evidence over assurance — is what the second question at this difficulty asks the listener to identify.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
