/**
 * TOEFL Listening Practice Library — Listen to a Conversation, batch 5
 * (PROMPT 49). Difficulty 5: five dense, fast conversations — negotiation
 * under constraint, irony, specialised registers and changed premises.
 *
 * All scripts are original TalkSy practice material.
 */

import { TOEFL_LISTENING_BANK_SOURCE_NOTE, type ToeflListeningExercise } from "./types";

export const conv5Exercises: ToeflListeningExercise[] = [
  {
    slug: "toefl-lb-conv-21", title: "Splitting the credit, keeping the friendship", taskType: "conversation",
    scene: "lab bench, results day for a joint project", difficulty: 5, estimatedMinutes: 6,
    intro: "You will hear two lab partners negotiate authorship. Note the principle the final arrangement rests on.",
    speakers: [
      { id: "p1", name: "Odalys", role: "partner who designed the experiment", accent: "north-american" },
      { id: "p2", name: "Freddie", role: "partner who ran the failed runs", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "p2", text: "The results are in and they're yours — I ran the machine, you ran the thinking. Where does that leave the author list?" },
      { id: "s2", speakerId: "p1", text: "It leaves it exactly where the failures put it. You ran the runs that failed for the reason we now understand. Without the failed series there is no paper." },
      { id: "s3", speakerId: "p2", text: "The failed series is in the paper?" },
      { id: "s4", speakerId: "p1", text: "As figure three. It's the strongest thing in it — the diagnosis is the result. First my name, then yours, and the contribution line says exactly that: design, analysis; data collection." },
      { id: "s5", speakerId: "p2", text: "So the failure I apologised for all spring is figure three and second authorship." },
      { id: "s6", speakerId: "p1", text: "The apology was misdirected. A known failure is data; an unknown one is noise — and yours is known." },
      { id: "s7", speakerId: "p2", text: "Then I'll take the order as stated, with the contribution line verbatim. And the talk at the conference?" },
      { id: "s8", speakerId: "p1", text: "Yours. You collected it, you can defend it — and the audience questions the figure, not the design. Design defends itself on paper." },
      { id: "s9", speakerId: "p2", text: "I present the failure, you defend the design in writing. That division I can hold." },
      { id: "s10", speakerId: "p1", text: "And one clause for the methods section: the sensor fault was found twice, once by accident and once on purpose. Both go in. Credit is not a cake." },
    ],
    transcriptNote: "The negotiation settles on a division of labour rather than a division of worth: order by contribution, the failure as figure three, the talk to the data's collector.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "How does the paper treat the failed series?",
        options: ["It is omitted", "It appears as figure three, with the diagnosis as the result", "It is an appendix", "It is mentioned in a footnote"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["as figure three"], explanation: "The failures are promoted into the paper's strongest figure. The item checks the status the conversation assigns them. The audible clue is \u201cas figure three\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What does the contribution line say?",
        options: ["Equal contributions", "Design, analysis; data collection", "Nothing specific", "Order decided by coin toss"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["design, analysis; data collection"], explanation: "The line assigns the work in four words. The item checks the exact division the agreement rests on. Listen for \u201cdesign, analysis; data collection\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "Who presents at the conference, and why?",
        options: ["Odalys, as first author", "Freddie — he collected the data and can defend the figure", "Both equally", "Neither; a substitute"],
        correct: 1,
        meta: { skills: ["details", "comprehension"], keywords: ["you can defend it", "the audience questions the figure"], explanation: "The talk goes to the collector, because questions will target the figure. The item checks the rationale, not just the name." },
      },
      {
        no: 4, stem: "What is meant by 'credit is not a cake'?",
        options: ["Dessert should follow seminars", "Recognition is not diminished by being shared — both discoveries of the fault go in", "Cakes must be divided evenly", "Authorship is sweet"],
        correct: 1,
        meta: { skills: ["inference", "vocabulary"], keywords: ["the sensor fault was found twice, once by accident and once on purpose. Both go in"], explanation: "The closing metaphor rejects zero-sum thinking about credit: recording both findings adds truth, not dilution. The item checks the aphorism's meaning." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-conv-22", title: "The budget cut announced as a compliment", taskType: "conversation",
    scene: "department corridor, after an all-staff email", difficulty: 5, estimatedMinutes: 6,
    intro: "You will hear two colleagues decode an official email. Note what the email actually announces.",
    speakers: [
      { id: "c1", name: "Wilma", role: "senior lecturer reading the email aloud", accent: "north-american" },
      { id: "c2", name: "Tobias", role: "colleague who reads between lines", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "c1", text: "'Following a review of provision, we are consolidating our staffing structure around areas of established strength.' Sounds pleasant." },
      { id: "s2", speakerId: "c2", text: "It's a cut. 'Consolidating' means closing; 'areas of established strength' means whatever survives is what the budget can already pay for." },
      { id: "s3", speakerId: "c1", text: "'We anticipate no compulsory departures at this stage.' At this stage." },
      { id: "s4", speakerId: "c2", text: "The hedge is the news. It bounds the promise to the current round, and the current round is the cheap one. The expensive promise would be 'none, at any stage'." },
      { id: "s5", speakerId: "c1", text: "And 'natural turnover will create room for reallocation'?" },
      { id: "s6", speakerId: "c2", text: "Vacant posts fund the change — which means posts that empty are not refilled. Anyone reading that as generosity is reading the wrong document." },
      { id: "s7", speakerId: "c1", text: "So the honest translation of the whole email is: the budget is short, the shortfall is met by not replacing leavers, and the promise covers exactly one year." },
      { id: "s8", speakerId: "c2", text: "And one more clause people will miss: 'line management arrangements will follow separately'. That means the org chart is being redrawn and nobody's location on it is safe yet." },
      { id: "s9", speakerId: "c1", text: "I'll tell my group to ask two questions at the meeting: what happens at the next stage, and who decides the org chart." },
      { id: "s10", speakerId: "c2", text: "Ask them in that order. The first tests the promise, the second tests who to hold to it — and the second answer is the one that arrives 'separately'." },
    ],
    transcriptNote: "The decoding works clause by clause: consolidating, at this stage, natural turnover, separately. Each phrase is a hedge with a specific scope.",
    targetSkill: "speaker-intention",
    questions: [
      {
        no: 1, stem: "What does 'consolidating our staffing structure' mean, in Tobias's reading?",
        options: ["Hiring more staff", "Closing units — a cut dressed as reorganisation", "Renaming the department", "Nothing in particular"],
        correct: 1,
        meta: { skills: ["speaker-intention"], keywords: ["'consolidating' means closing"], explanation: "The euphemism is decoded directly: consolidation is closure. The item checks the translation of the key term. Answer anchored in the recording: \u201c'consolidating' means closing\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 2, stem: "Why is 'at this stage' the significant hedge?",
        options: ["It is politeness", "It bounds the no-compulsory-departures promise to the current round, the cheap one", "It refers to the theatre", "It is a typo"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["the hedge is the news"], explanation: "The qualifier limits the promise's scope. The item checks why those three words carry the email's real news. The audible clue is \u201cthe hedge is the news\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 3, stem: "How is the shortfall to be met, according to the 'natural turnover' clause?",
        options: ["By new funding", "By not refilling posts that empty", "By increasing fees", "By donations"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["posts that empty are not refilled"], explanation: "Vacancies become the budget. The item checks the mechanism the phrase conceals. Listen for \u201cposts that empty are not refilled\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What does the 'line management arrangements will follow separately' clause signal to Tobias?",
        options: ["A social event", "That the org chart is being redrawn, and nobody's position on it is settled", "A delay in emails", "Promotions for all"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["the org chart is being redrawn and nobody's location on it i"], explanation: "The deferred clause postpones the structural question. The item checks the second-order reading of the delay. Answer anchored in the recording: \u201cthe org chart is being redrawn and nobody's location on it i\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-conv-23", title: "The pitch that agrees with the objection", taskType: "conversation",
    scene: "phone, startup and a sceptical buyer", difficulty: 5, estimatedMinutes: 6,
    intro: "You will hear a sales call in which the seller concedes the strongest objection. Note what the offer finally rests on.",
    speakers: [
      { id: "se", name: "Seller", role: "instrument vendor defending a spec sheet", accent: "north-american" },
      { id: "bu", name: "Buyer", role: "laboratory manager with one objection", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "bu", text: "Your spec sheet claims continuous operation for ninety days. Our last instrument failed at forty, and the sheet then said ninety too." },
      { id: "s2", speakerId: "se", text: "Then let's take the number off the table entirely. The ninety-day claim is a bench figure under lab conditions — your field is not a bench." },
      { id: "s3", speakerId: "bu", text: "You're withdrawing your own headline number?" },
      { id: "s4", speakerId: "se", text: "I'm replacing it with a worse number you can hold me to. Thirty days guaranteed in your conditions, with a loan unit within forty-eight hours if it stops. The guarantee is the product; the ninety was advertising." },
      { id: "s5", speakerId: "bu", text: "Thirty days, loan within forty-eight hours, in writing?" },
      { id: "s6", speakerId: "se", text: "In the contract, not the brochure. And the loan carries your data settings over, so the interruption is measured in hours, not weeks." },
      { id: "s7", speakerId: "bu", text: "Then the comparison with your rival is thirty guaranteed against their ninety claimed?" },
      { id: "s8", speakerId: "se", text: "The comparison is thirty guaranteed plus forty-eight-hour replacement against ninety claimed plus nothing. Claims are free; guarantees have to be serviced." },
      { id: "s9", speakerId: "bu", text: "So I should price the downtime, not the uptime. Our last failure cost us eleven days." },
      { id: "s10", speakerId: "se", text: "Price the eleven days, and the forty-eight-hour clause is worth more than the number that failed you. Send me your failure log and I'll size the loan terms to it." },
      { id: "s11", speakerId: "bu", text: "You'll have the log by five. If the terms fit the log, we have a contract." },
    ],
    transcriptNote: "The sale is made by demoting the headline figure and promoting a serviceable guarantee. The buyer's shift — pricing downtime — completes it.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "What does the seller do with the ninety-day claim?",
        options: ["Defends it with test data", "Withdraws it and offers thirty days guaranteed in the buyer's conditions, with a loan unit within forty-eight hours", "Doubles it", "Ignores the question"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["thirty days guaranteed in your conditions"], explanation: "The seller swaps a bench figure for a contractual guarantee. The item checks the replacement offer in full. The audible clue is \u201cthirty days guaranteed in your conditions\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "Where will the guarantee live, according to the seller?",
        options: ["In the brochure", "In the contract", "In an email only", "Verbatim in the meeting minutes"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["in the contract, not the brochure"], explanation: "The location of the promise is part of the offer. The item checks the medium, which the buyer asked to confirm." },
      },
      {
        no: 3, stem: "What distinction does the seller draw in 'claims are free; guarantees have to be serviced'?",
        options: ["Between cheap and expensive goods", "Between advertising numbers and contractually backed ones", "Between new and used instruments", "Between his firm and all others"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["claims are free; guarantees have to be serviced"], explanation: "The aphorism separates unbacked from backed promises. The item checks the criterion the whole negotiation pivots on. Listen for \u201cclaims are free; guarantees have to be serviced\u201d — that phrase in the script settles the item." },
      },
      {
        no: 4, stem: "What does the buyer conclude he should price?",
        options: ["The uptime", "The downtime — the last failure cost eleven days", "The purchase price only", "The warranty length"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["price the downtime"], explanation: "The buyer reframes the purchase around interruption cost. The item checks the shift that closes the sale. Answer anchored in the recording: \u201cprice the downtime\u201d — hear that phrase and the item resolves." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-conv-24", title: "The promotion declined for a second time", taskType: "conversation",
    scene: "HR office, a deferred offer revisited", difficulty: 5, estimatedMinutes: 6,
    intro: "You will hear an employee decline a role a second time, on grounds that have changed. Note what the grounds now are.",
    speakers: [
      { id: "hr", name: "HR partner", role: "manager re-offering a post", accent: "british" },
      { id: "em", name: "Ines", role: "engineer who declined last year", accent: "australian" },
    ],
    segments: [
      { id: "s1", speakerId: "hr", text: "The team-lead post is open again; last year you said not yet." },
      { id: "s2", speakerId: "em", text: "Last year's no was timing — the redesign was live. This year's no is content, and that's a different no." },
      { id: "s3", speakerId: "hr", text: "Different in what way? A year ago you wanted the redesign more than the role; what do you want now?" },
      { id: "s4", speakerId: "em", text: "The redesign worked because I stayed close to the hard rendering problems. The lead role removes me from exactly that. I'd gain a diary and lose the work I'm best at." },
      { id: "s5", speakerId: "hr", text: "Most people want the progression. What do you want instead of it?" },
      { id: "s6", speakerId: "em", text: "A technical track with the same band as the lead post, mentoring built in, and the rendering group's planning vote. Pay me for the work; give the meetings to someone who enjoys them." },
      { id: "s7", speakerId: "hr", text: "You're asking me to invent a role that doesn't exist on the org chart." },
      { id: "s8", speakerId: "em", text: "I'm asking you to recognise one that exists in practice. The group already routes its hard problems to me. The chart is the document that's out of date." },
      { id: "s9", speakerId: "hr", text: "Then write the description yourself and I'll cost it. If the band matches the lead post, the board sees a retention case, not an exception." },
      { id: "s10", speakerId: "em", text: "I'll draft it this week — band parity, mentoring named, planning vote specified. And if it's refused?" },
      { id: "s11", speakerId: "hr", text: "Then you'll have a written case for the next review, and I'll have learned what the chart is costing us. Declining twice with reasons is the most useful document you've given me." },
    ],
    transcriptNote: "Two refusals are distinguished by their grounds: timing then, content now. The counter-proposal is a role that already operates, waiting for the chart.",
    targetSkill: "details",
    questions: [
      {
        no: 1, stem: "How does Ines distinguish this year's refusal from last year's?",
        options: ["Last year was about timing; this year is about content — the role removes her from her best work", "Last year she was ill", "This year she has another job", "She refuses both for the same reason"],
        correct: 0,
        meta: { skills: ["details"], keywords: ["last year you said not yet"], explanation: "The grounds changed from schedule to substance. The item checks the distinction she opens with, which the negotiation follows. The audible clue is \u201clast year's no was about timing\u201d: catch it and the keyed answer follows." },
      },
      {
        no: 2, stem: "What three elements does her counter-proposal contain?",
        options: ["More pay, fewer hours, a car", "Band parity with the lead post, mentoring built in, and the rendering group's planning vote", "The lead title without the work", "A sabbatical"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["same band as the lead post"], explanation: "The technical track is specified in three parts. The item checks the specification as she lists it. Listen for \u201csame band as the lead post\u201d — that phrase in the script settles the item." },
      },
      {
        no: 3, stem: "On what basis does she claim the role already exists?",
        options: ["She has a contract clause", "The group already routes its hardest problems to her since the redesign — the chart is out of date", "The union supports it", "It exists at other firms"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["routes its hard problems to me"], explanation: "Her evidence is practice, not paperwork. The item checks the argument that reframes invention as recognition. Answer anchored in the recording: \u201croutes its hard problems to me\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 4, stem: "What does HR ask her to do, and on what condition will the board approve it?",
        options: ["Resign quietly", "Write the role description herself; if the band matches the lead post, it becomes a retention case", "Wait a year", "Accept the lead post temporarily"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["write the description yourself and I'll cost it"], explanation: "The path is delegated drafting with band parity as the test. The item checks the process HR proposes. The audible clue is \u201cwrite the description yourself and I'll cost it\u201d: catch it and the keyed answer follows." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
  {
    slug: "toefl-lb-conv-25", title: "The translation that improves the original", taskType: "conversation",
    scene: "publisher's office, translated manuscript review", difficulty: 5, estimatedMinutes: 6,
    intro: "You will hear an editor and a translator disagree about fidelity. Note the rule they finally agree on.",
    speakers: [
      { id: "ed", name: "Editor", role: "publisher reviewing a translation", accent: "british" },
      { id: "tr", name: "Translator", role: "translator defending a choice", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "ed", text: "Page forty. The original says 'the house remembered'. Your version says 'the house kept its memories' — that's not the same sentence." },
      { id: "s2", speakerId: "tr", text: "It's not the same sentence, and it's the same moment. 'Remembered' in my language is a bureaucratic verb — it lands like a form filled in. The house in this book isn't a clerk." },
      { id: "s3", speakerId: "ed", text: "So you translated the register rather than the words?" },
      { id: "s4", speakerId: "tr", text: "I translated the image at the weight the image carries in its own language. Word-for-word would have been accurate and dead." },
      { id: "s5", speakerId: "ed", text: "Then where do you stop? If register can overrule words, what protects the author from the translator's taste?" },
      { id: "s6", speakerId: "tr", text: "The stopping rule I use: I may change a word when keeping it would change the meaning more. 'The house remembered' becomes, in my language, a sentence about paperwork — that is a greater infidelity than my paraphrase." },
      { id: "s7", speakerId: "ed", text: "A change is permitted when the alternative changes more. Can you mark every such choice for me?" },
      { id: "s8", speakerId: "tr", text: "Mark them, list the literal under each, and give the reason in one line. The reader of the edition can then watch the decisions happening." },
      { id: "s9", speakerId: "ed", text: "Then the apparatus becomes the honesty. We publish the notes at the back, and the debate you and I just had becomes part of the book." },
      { id: "s10", speakerId: "tr", text: "Good. And the one rule we add for the series: no improving the author. Register moves for weight are permitted; moves because the translator would have written it better are not." },
    ],
    transcriptNote: "The negotiation lands on a two-part rule: a change is allowed when the alternative changes more, and nothing is changed to improve the author. The apparatus records every case.",
    targetSkill: "comprehension",
    questions: [
      {
        no: 1, stem: "Why did the translator depart from the literal on page forty?",
        options: ["She misread the original", "The literal verb would have carried a bureaucratic register, changing the image's weight", "The author asked her to", "The word does not exist"],
        correct: 1,
        meta: { skills: ["comprehension"], keywords: ["'remembered' in my language is a bureaucratic verb"], explanation: "The literal choice would have imported the wrong register. The item checks the reason the paraphrase was chosen. Listen for \u201c'remembered' in my language is a bureaucratic verb\u201d — that phrase in the script settles the item." },
      },
      {
        no: 2, stem: "What stopping rule does the translator state?",
        options: ["Change only nouns", "A word may be changed when keeping it would change the meaning more", "Never change a word", "Change whatever reads well"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["I may change a word when keeping it would change the meaning"], explanation: "The rule compares infidelities and permits the smaller. The item checks the rule in her own formulation. Answer anchored in the recording: \u201cI may change a word when keeping it would change the meaning\u201d — hear that phrase and the item resolves." },
      },
      {
        no: 3, stem: "What will the apparatus at the back of the book contain?",
        options: ["Only the translator's thanks", "Every marked change with the literal version beneath it and a one-line reason", "The editor's corrections", "A glossary of the plot"],
        correct: 1,
        meta: { skills: ["inference"], keywords: ["mark them, list the literal under each, and give the reason "], explanation: "The notes record decisions with their alternatives. The item checks the apparatus as specified. The audible clue is \u201cmark them, list the literal under each, and give the reason \u201d: catch it and the keyed answer follows." },
      },
      {
        no: 4, stem: "What second rule closes the conversation for the series?",
        options: ["Prefer the translator's taste", "Register moves for weight are permitted; moves to improve the author are not", "Always translate literally", "Rewrite freely"],
        correct: 1,
        meta: { skills: ["details"], keywords: ["no improving the author"], explanation: "The series rule separates weight from taste. The item checks the final boundary the two agree on. Listen for \u201cno improving the author\u201d — that phrase in the script settles the item." },
      },
    ],
    source: TOEFL_LISTENING_BANK_SOURCE_NOTE,
  },
];
