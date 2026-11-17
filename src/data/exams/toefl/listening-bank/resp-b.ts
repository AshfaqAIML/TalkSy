/**
 * TOEFL Listening Practice Library — Listen and Choose a Response, batch B
 * (PROMPT 49).
 *
 * Twelve exercises: d3×2, d4×5, d5×5 — harder prompts (hedged complaints,
 * negotiated favours, ironic remarks, refusals inside agreements) each with
 * the response question plus a second question on the speaker's intention.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const respBExercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-resp-14", title: "The hedged request", taskType: "choose-response",
    scene: "shared studio, deadline day", difficulty: 3, estimatedMinutes: 4,
    intro: "You will hear a hedged request. Choose the most appropriate response.",
    speakers: [{ id: "fa", name: "Farah", role: "studio partner with a heavy afternoon", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "fa", text: "I know we said we'd split the printing, and I hate to ask — but I'm presenting at four and the queue at the print shop is already down the stairs. There's no chance you could take my half, is there? I'd genuinely owe you one." },
    ],
    transcriptNote: "The hedges ('I hate to ask', 'no chance… is there') mark a face-threatening request. The right reply answers the request, not the hedge.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["You said we'd split it.", "Of course — email me the files and I'll go now; presenting at four comes first.", "The queue will die down later.", "I don't like queues either."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"], keywords: ["split the printing", "presenting at four", "queue"],
          explanation: "Farah's reason is time, and the right reply acts on it immediately. The contract-quoting option answers the arrangement, not the emergency, which is the trap.",
          trap: { family: "register-mismatch", note: "The first option litigates the old deal while the deadline stands." },
        },
      },
      {
        no: 2, stem: "Why does Farah say 'I hate to ask'?",
        options: ["Because the request is inconvenient for her", "Because she is imposing on you and wants to soften it", "Because she hates printing", "Because the queue is short"],
        correct: 1,
        meta: {
          skills: ["speaker-intention"], keywords: ["I hate to ask", "genuinely owe you one"],
          explanation: "The softener acknowledges the imposition before making it; that is the politeness work the second question asks the listener to hear.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-15", title: "The agreement that is a refusal", taskType: "choose-response",
    scene: "corridor, invitation to a third-year party", difficulty: 3, estimatedMinutes: 4,
    intro: "You will hear an agreement that functions as a refusal. Choose the most appropriate response.",
    speakers: [{ id: "iv", name: "Ivo", role: "tired third-year", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "iv", text: "A party sounds perfect, honestly — it's been that kind of week. I'll just put my head down for an hour first, and you know what happens after that. Bring the music past the flat anyway and I'll sign the card." },
    ],
    transcriptNote: "'You know what happens after that' concedes he will sleep through it. The appropriate reply accepts the refusal graciously and keeps the card.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["Great — knock loudly at nine, we'll wake you up.", "Understood — we'll bring the card round before we go, and turn the music down passing your door.", "One hour isn't enough sleep.", "You can sleep at the party."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "inference"], keywords: ["put my head down", "you know what happens", "sign the card"],
          explanation: "Ivo has declined in form while agreeing in words. The right reply accepts the reading: card before, quiet passing. Waking him treats the words literally and misses the meaning.",
          trap: { family: "literal-echo", note: "The lure honours the surface ('sounds perfect') and ignores the declared outcome." },
        },
      },
      {
        no: 2, stem: "What will Ivo most likely do tonight?",
        options: ["Attend the party late", "Sleep and not attend, but keep goodwill", "Host the party", "Complain about the noise"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["put my head down for an hour", "bring the music past the flat"],
          explanation: "The prediction rests on 'you know what happens after that': the nap wins. The goodwill gesture (the card) is what he offers in place of attendance.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-16", title: "Receiving an awkward compliment", taskType: "choose-response",
    scene: "studio crit, work on the wall", difficulty: 4, estimatedMinutes: 4,
    intro: "You will hear a compliment that carries a sting. Choose the most appropriate response.",
    speakers: [{ id: "le", name: "Leo", role: "tutor delivering a mixed verdict", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "le", text: "This is the most confident piece in the room — you can see that from across the studio. It's also the least finished: the first half is painted like someone who knows exactly what they're doing, and the second half like someone who ran out of Tuesday." },
    ],
    transcriptNote: "The compliment and the indictment are both genuine; the appropriate reply addresses the unfinished half, not the praise.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["Thank you — it's the piece I'm most proud of.", "So the first half works? I'll take that.", "That's fair — the back half was Thursday, not Tuesday. I'll rework it from the middle out and show you both halves next week.", "You always liked my earlier work better."],
        correct: 2,
        meta: {
          skills: ["speaker-intention", "inference"], keywords: ["most confident", "least finished", "ran out of Tuesday"],
          explanation: "The tutor's operative claim is the collapse in the second half, and the appropriate reply accepts the diagnosis with a plan. Accepting only the praise hears half the message, which is the trap.",
          trap: { family: "mention-lure", note: "The first option banks the compliment and discards the critique." },
        },
      },
      {
        no: 2, stem: "What is the tutor's underlying message about the work?",
        options: ["It is the best in the room", "Its promise is being wasted by uneven finishing", "It should be abandoned", "The colours are wrong"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["painted like someone who knows exactly what they're doing", "ran out of Tuesday"],
          explanation: "The contrast between the halves is the message: ability undercut by finishing. That reading, not the ranking, is what the second question tests.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-17", title: "The pre-emptive apology", taskType: "choose-response",
    scene: "group project channel, 11 p.m.", difficulty: 4, estimatedMinutes: 4,
    intro: "You will hear an apology that arrives before the offence. Choose the most appropriate response.",
    speakers: [{ id: "na", name: "Nadia", role: "group member warning of lateness", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "na", text: "I'm going to be late with my section tomorrow — I'd rather tell you now than at nine tomorrow morning. The hospital appointment overran and I'm behind on everything. I can have it to you by two, or I can hand what exists at nine with the gaps marked." },
    ],
    transcriptNote: "Two options are offered with the risk stated for each. The appropriate reply chooses one and says why, treating her like a professional rather than a culprit.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["Late is late.", "Thanks for telling us early. Two o'clock — we don't present till Thursday, and marked gaps help nobody; take the extra hours.", "Which hospital?", "We'll do your section for you."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"], keywords: ["by two", "gaps marked", "tell you now"],
          explanation: "Nadia prices both options herself. The reply that picks two o'clock uses the information she supplied; doing her section removes her work and the learning, which the last option gets backwards.",
          trap: { family: "negation", note: "'We'll do your section' refuses her offer by erasing her contribution." },
        },
      },
      {
        no: 2, stem: "Why does Nadia prefer telling the group tonight over tomorrow at nine?",
        options: ["To look diligent", "So the group can plan around her lateness instead of discovering it", "Because hospitals close late", "Because the deadline moved"],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "inference"], keywords: ["rather tell you now than at nine tomorrow morning"],
          explanation: "The early warning converts a surprise into a planning input. That purpose — protecting the group's schedule, not her image — is the second question.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-18", title: "The refusal disguised as a question", taskType: "choose-response",
    scene: "Friday, request to cover a shift", difficulty: 4, estimatedMinutes: 4,
    intro: "You will hear a request met with a question. Choose the most appropriate response to the question.",
    speakers: [{ id: "ra", name: "Ray", role: "colleague asked to cover a shift", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "ra", text: "Cover Saturday? I'd honestly love to help, but Saturday's my mother's seventieth, and the family's travelling in for it. When you say cover — the whole day, or the evening part? Because the evening I might actually be able to do." },
    ],
    transcriptNote: "Ray refuses the whole while negotiating the part. The appropriate reply takes the offered part and solves the remainder elsewhere.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["It's the whole day or nothing.", "The evening would genuinely help — I'll ask around for the morning and let you know by tonight. Enjoy the party.", "Forget it, I'll ask someone else.", "Can your mother not reschedule?"],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"], keywords: ["the evening I might actually be able to do", "mother's seventieth"],
          explanation: "Ray has split the request himself and offered the evening. The right reply banks the part and owns the rest; 'all or nothing' rejects a real offer to look firm.",
          trap: { family: "negation", note: "The ultimatum wastes the partial yes he engineered." },
        },
      },
      {
        no: 2, stem: "What has Ray done with the original request?",
        options: ["Refused it outright", "Divided it and accepted the divisible part", "Accepted it fully", "Passed it to his family"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["the whole day, or the evening part"],
          explanation: "The second question asks the listener to see the structure: a boundary drawn inside the request, with the inside of the boundary offered.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-19", title: "Correcting a teacher, carefully", taskType: "choose-response",
    scene: "lecture hall, five minutes in", difficulty: 4, estimatedMinutes: 4,
    intro: "You will hear a careful public correction. Choose the most appropriate response from the lecturer.",
    speakers: [{ id: "me", name: "Merrit", role: "student who checked the syllabus", accent: "nz" }],
    segments: [
      { id: "s1", speakerId: "me", text: "Sorry — I might have this wrong, and do say if so. The handout lists this chapter for this week, but the portal's moved it to next week with the quiz. Which one are we following? I don't mind either; I'd just rather revise the right thing tonight." },
    ],
    transcriptNote: "The student supplies both sources and asks which governs, disclaiming preference. The right reply picks one source, gives the reason, and fixes the mismatch.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["The handout was issued first.", "Good spot — the portal's right, the handout's old; I'll correct the handout after the lecture. Revise for the quiz this week.", "Always follow the handout.", "It doesn't matter much."],
        correct: 1,
        meta: {
          skills: ["comprehension", "speaker-intention"], keywords: ["handout", "portal's moved it to next week", "revise the right thing"],
          explanation: "The practical need is tonight's revision target. The reply that names the governing source and repairs the stale one answers the need instead of citing seniority.",
          trap: { family: "mention-lure", note: "'Issued first' ranks documents by age, which is not the student's question." },
        },
      },
      {
        no: 2, stem: "What does Merrit want from the answer?",
        options: ["To be told she was right", "To know which source to revise from tonight", "To postpone the quiz", "A new handout"],
        correct: 1,
        meta: {
          skills: ["speaker-intention"], keywords: ["revise the right thing tonight"],
          explanation: "The stated aim is tonight's work, not vindication. The second question checks that the listener heard the practical goal inside the politeness.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-20", title: "The ironic thanks", taskType: "choose-response",
    scene: "kitchen, flatmates and a clean rota", difficulty: 5, estimatedMinutes: 4,
    intro: "You will hear thanks that is not thanks. Choose the most appropriate response.",
    speakers: [{ id: "bo", name: "Bram", role: "flatmate who cleaned alone", accent: "australian" }],
    segments: [
      { id: "s1", speakerId: "bo", text: "Thanks so much for your help with the kitchen this weekend — it was lovely, doing all four floors of it alone. The rota's on the fridge if anyone's curious what it used to say." },
    ],
    transcriptNote: "The thanks is reproach: 'all four floors alone' and 'used to say' carry the complaint. The right reply takes the criticism, not the sentence's surface.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["You're welcome — glad to help.", "You're right, and that's on me. I'll take the next two weekends on the rota and I'm putting my name on it now.", "The rota was my idea.", "Four floors isn't that many."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "inference"], keywords: ["all four floors of it alone", "rota's on the fridge", "used to say"],
          explanation: "Bram's praise is sarcasm wrapped around abandonment. The appropriate reply accepts the charge and attaches a remedy to it; 'you're welcome' answers the sarcasm literally and compounds it.",
          trap: { family: "literal-echo", note: "Taking the thanks at face value misses the entire message." },
        },
      },
      {
        no: 2, stem: "What is Bram actually saying?",
        options: ["That he enjoyed the cleaning", "That the rota has been ignored and he resents cleaning alone", "That the flat has four floors", "That he wants a new rota"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["lovely, doing all four floors of it alone"],
          explanation: "The second question separates the ironic surface from the resentful content — the core listening skill at this tier. Answer anchored in the recording: \u201clovely, doing all four floors of it alone\u201d — hear that phrase and the item resolves.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-21", title: "Negotiating down a favour", taskType: "choose-response",
    scene: "moving day, a van and a staircase", difficulty: 5, estimatedMinutes: 4,
    intro: "You will hear a large request renegotiated to a smaller one. Choose the most appropriate response.",
    speakers: [{ id: "zi", name: "Zia", role: "friend with a van and a conscience", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "zi", text: "The van's yours for the day, happily — the piano up the spiral staircase, less happily, and my back has opinions. What if I drive everything to the door and you borrow the strong people from upstairs for the piano? That way the day's still free and my spine stays in the band." },
    ],
    transcriptNote: "The offer is whole-day driving with an explicit exclusion. The right reply accepts the division as drawn instead of bargaining for the excluded part.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["It's a short staircase, honestly.", "Deal — van to the door, upstairs for the piano, and the band plays on. I'll get the neighbours now.", "My back is also bad.", "We'll see on the day."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"], keywords: ["drive everything to the door", "borrow the strong people", "spine stays in the band"],
          explanation: "Zia has already solved the problem she'll accept. The right reply closes the deal in her terms; minimizing the staircase bargains against the boundary she just drew.",
          trap: { family: "register-mismatch", note: "'It's a short staircase' re-opens the negotiation she closed." },
        },
      },
      {
        no: 2, stem: "What condition does Zia attach to the favour?",
        options: ["Payment for petrol", "No piano on the stairs — heavy lifting is out, driving is in", "The piano goes first", "Sunday instead of Saturday"],
        correct: 1,
        meta: {
          skills: ["comprehension", "speaker-intention"], keywords: ["drive everything to the door", "the piano up the spiral staircase, less happily"],
          explanation: "The second question asks for the boundary itself: driving yes, stair-carrying no, with the upstairs borrowed to fill the gap.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-22", title: "The reluctant recommendation", taskType: "choose-response",
    scene: "reference request, corridor", difficulty: 5, estimatedMinutes: 4,
    intro: "You will hear a recommendation hedged with conditions. Choose the most appropriate response.",
    speakers: [{ id: "ol", name: "Dr Osei", role: "tutor weighing a reference", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "ol", text: "I'll write it, gladly — you know that. But a strong reference needs something to point at, and right now I'd be pointing at seminar attendance and two paragraphs of a draft. Give me a chapter by the first, and the letter by the tenth will be the letter you want rather than the letter I can manage." },
    ],
    transcriptNote: "The commitment is conditional and the gap is named: the letter's strength tracks the evidence. The right reply takes the bargain, not the opening 'gladly'.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["Great — the tenth it is.", "Understood: chapter by the first, letter by the tenth. I'll send the chapter on the twenty-eighth so you're not reading it at midnight.", "Would you rather someone else wrote it?", "How long should the chapter be?"],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"], keywords: ["chapter by the first", "the letter you want", "the letter I can manage"],
          explanation: "Dr Osei has set a price for the strong letter. The appropriate reply repeats the schedule and improves its logistics; accepting on the 'gladly' alone buys the weaker letter he described.",
          trap: { family: "mention-lure", note: "The first option banks the warmth and loses the condition." },
        },
      },
      {
        no: 2, stem: "What distinguishes 'the letter you want' from 'the letter I can manage'?",
        options: ["Length", "Evidence: a chapter exists to point at, or does not", "Deadline pressure", "Whether the tutor likes the student"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["something to point at", "two paragraphs of a draft"],
          explanation: "The distinction is evidential: praise with an artefact versus praise without one. The second question tests whether the listener caught the criterion.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-23", title: "The apology with a boundary", taskType: "choose-response",
    scene: "after a missed meeting", difficulty: 5, estimatedMinutes: 4,
    intro: "You will hear an apology that sets a limit on future ones. Choose the most appropriate response.",
    speakers: [{ id: "ka", name: "Kavya", role: "project partner, second late meeting", accent: "north-american" }],
    segments: [
      { id: "s1", speakerId: "ka", text: "That's twice, and once is a coincidence — I'm sorry, genuinely. But I want to say the next one happens differently: from now on, if I'm not there by ten past, start without me and send the minutes. I'd rather read your minutes than waste your evening twice." },
    ],
    transcriptNote: "The apology closes with a protocol, not a promise. The right reply accepts the protocol instead of offering reassurances.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["Don't worry, I'd wait an hour for you.", "Agreed — ten past, then we start, minutes to you the same night. And thanks for saying it plainly.", "Third time's the charm.", "I'll call you at ten past."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"], keywords: ["start without me", "send the minutes", "ten past"],
          explanation: "Kavya has replaced punctuality with a rule. The right reply adopts the rule; the loyal offer to wait cancels her protocol and re-creates the problem she just solved.",
          trap: { family: "register-mismatch", note: "'I'd wait an hour' answers generosity where a system was requested." },
        },
      },
      {
        no: 2, stem: "What has Kavya asked for going forward?",
        options: ["A later start time", "A rule that protects the other person's time at the cost of her own convenience", "No more apologies", "A different meeting room"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["start without me and send the minutes"],
          explanation: "The protocol transfers the cost of her lateness from the partner to herself. That asymmetry is the point the second question examines.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-24", title: "Turning a promotion down, twice", taskType: "choose-response",
    scene: "manager's office, offer on the table", difficulty: 5, estimatedMinutes: 4,
    intro: "You will hear a refusal explained on its own terms. Choose the most appropriate response from the manager.",
    speakers: [{ id: "gr", name: "Greta", role: "engineer declining a lead role", accent: "nz" }],
    segments: [
      { id: "s1", speakerId: "gr", text: "I've thought about it properly, and no — but a useful no. I don't want the scheduling and the one-to-ones; I want the hard rendering work, and I'm better at it. What the team needs is the person who fixes what nobody else can. Pay me for that, and give the meetings to someone who'll enjoy them." },
    ],
    transcriptNote: "The refusal redefines the contribution, not the salary. The right reply negotiates with the new frame instead of re-offering the old one.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["Everyone wants the money that comes with it.", "That I can work with — senior technical track, mentoring role, no scheduling. Let's write the band and you take the person who wants the meetings.", "You'll change your mind in a year.", "Promotions are rare; take it."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "comprehension"], keywords: ["hard rendering work", "fixes what nobody else can", "give the meetings to someone"],
          explanation: "Greta has proposed an alternative structure. The reply that builds the technical track accepts her terms; the scarcity appeal argues against her self-knowledge, which is the trap.",
          trap: { family: "register-mismatch", note: "The pressure option answers fear where she supplied a plan." },
        },
      },
      {
        no: 2, stem: "On what basis does Greta justify her refusal?",
        options: ["The salary is too low", "Her value lies in the rare technical work, which the lead role would displace", "She dislikes the team", "She has another offer"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["I'm better at it", "the person who fixes what nobody else can"],
          explanation: "The justification is comparative advantage within the team. The second question asks for the economics inside the refusal. The audible clue is \u201cI'm better at it\u201d: catch it and the keyed answer follows.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-resp-25", title: "The testimonial offered as criticism", taskType: "choose-response",
    scene: "end-of-course feedback conversation", difficulty: 5, estimatedMinutes: 4,
    intro: "You will hear praise whose content is a complaint. Choose the most appropriate response from the teacher.",
    speakers: [{ id: "yu", name: "Yusuf", role: "student giving course feedback", accent: "british" }],
    segments: [
      { id: "s1", speakerId: "yu", text: "Best-taught course I've taken, and I mean it — which made the last three weeks hard to watch. You'd explained the method until the whole room could do it, and then the assignments tested something the sheets never taught. Everyone copied the sheets and hoped." },
    ],
    transcriptNote: "The praise establishes standing for the criticism: teaching that worked, assessment that diverged from it. The right reply separates the two claims and acts on the second.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "Choose the most appropriate response.",
        options: ["I'm glad the teaching landed.", "That's a fair and painful distinction — the exam blueprints should have mirrored the method sheets. I'll rewrite the assignment briefs over the break and show them to a student panel first.", "The assignments were fine statistically.", "You should have asked earlier."],
        correct: 1,
        meta: {
          skills: ["speaker-intention", "inference"], keywords: ["explained the method", "tested something the sheets never taught", "copied the sheets and hoped"],
          explanation: "Yusuf's charge is a mismatch between teaching and assessment. The reply that fixes the briefs addresses it; banking the praise answers the tribute and ignores the bill.",
          trap: { family: "mention-lure", note: "The first option accepts the frame that buys off the criticism." },
        },
      },
      {
        no: 2, stem: "What is the substance of Yusuf's criticism?",
        options: ["The teaching was poor", "Assessment and instruction diverged, so students memorised instead of using the method", "The course was too long", "The room was crowded"],
        correct: 1,
        meta: {
          skills: ["inference", "speaker-intention"], keywords: ["tested something the sheets never taught"],
          explanation: "The complaint is construct misalignment: the test measured what the sheets never taught. Naming that mechanism is the second question.",
        },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
