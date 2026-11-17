/**
 * Core English Programme — Batch 11 (Chapters 41–44, Level B2).
 *
 * Advanced modals, advanced passive constructions, participles and
 * advanced clauses, advanced connectors and cohesion.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, MCQ, MATCH, N, REORD, TB, T, W, fb } from "../types";

export const batch11: ChapterSpec[] = [
  chapter("b2", {
    number: 41,
    title: "Advanced Modal Verbs",
    description:
      "Modality beyond rules: deduction and certainty (must be, can't be), speculation about present and past (might be, may have), past modals for regret and criticism (should have, could have), and nuanced probability in real situations.",
    objectives: [
      "Express deduction and near-certainty with must/can't",
      "Speculate about present and past with may/might/could (have)",
      "Express regret and criticism with should have / could have",
      "Grade certainty precisely in conversation",
    ],
    prerequisites: ["CH-23", "CH-40"],
    hours: 3,
    skills: ["grammar", "speaking", "listening"],
    strands: ["communication", "speaking", "listening", "writing", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on deduction and past modals. Assignment: a detective paragraph using five modal speculations.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 11,
    module: "b2-precision-grammar",
    lessons: [
      {
        title: "Deduction and Certainty",
        blurb: "Must be, can't be, might be — the certainty dial of the reasoning mind.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Use must be for logical certainty",
          "Use can't be for logical impossibility",
          "Grade might/may/could be for open possibility",
        ],
        blocks: [
          H("The certainty dial"),
          GR(
            "deduction modals",
            "MUST BE = the only logical conclusion ('The lights are on — they must be home'). CAN'T BE = logically impossible ('That can't be John — he's abroad'). MIGHT/MAY/COULD BE = possible but unproven.",
            [
              ["She must be exhausted after that flight.", "Debe estar agotada después de ese vuelo."],
              ["He can't be serious!", "¡No puede hablar en serio!"],
              ["They might be stuck in traffic.", "Puede que estén atascados en el tráfico."],
            ],
          ),
          TB("The dial", ["Modal", "Certainty %", "Example"], [
            ["must", "95%", "It must be true."],
            ["may / might / could", "40%", "It might be true."],
            ["can't", "5%", "It can't be true."],
          ]),
          AU("Listen: the dial", "They must be home. They might be stuck. He can't be serious!", 0.9),
          W("Mustn't ≠ can't", "'Mustn't' means prohibited, NOT impossible. Logical impossibility is 'can't': 'That can't be right.'"),
        ],
        assignment: {
          title: "Dial practice",
          instructions:
            "Write five deduction sentences about a real mystery in your life (someone's behaviour, a surprise, a noise), using must, can't and might/may/could.",
          minWords: 15,
          maxWords: 55 },
        homework: ["Speculate about a news story with three modals.", "Grade your certainty honestly."],
      },
      {
        title: "Speculation About the Past",
        blurb: "She might have missed the train — modals + have + participle for past guesses.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "listening"],
        strands: ["listening", "communication", "reading", "writing"],
        outcomes: [
          "Form modal + have + past participle",
          "Speculate about past events with graded certainty",
          "Understand fast-speech contractions (must've, might've)",
        ],
        blocks: [
          H("Looking back with modals"),
          GR(
            "modal + have + participle",
            "To speculate about the PAST, add have + participle: must have (almost certain), may/might/could have (possible), can't have (impossible).",
            [
              ["She must have missed the train — she's never late.", "Debe haber perdido el tren — nunca llega tarde."],
              ["They might have taken the wrong exit.", "Puede que tomaran la salida equivocada."],
              ["He can't have finished already!", "¡No puede haber terminado ya!"],
            ],
          ),
          EX("Accident report", [
            ["The driver may have fallen asleep; he can't have seen the sign — it was dark; he must have been exhausted after two shifts.", "El conductor puede haberse quedado dormido; no pudo ver la señal — estaba oscuro; debía estar agotado tras dos turnos."],
          ]),
          AU("Listen: past speculation", "She must've missed the train. They might've taken the wrong exit. He can't have finished.", 0.9),
          N("Sound check", "In speech these shrink: must've /mʌstəv/, might've, could've, should've. Train your ear — never write 'must of'."),
        ],
        assignment: {
          title: "Past mystery",
          instructions:
            "Write five sentences speculating about a real past mystery (a late friend, a lost object, a historical event) with five different modal+have forms.",
          minWords: 15,
          maxWords: 55 },
        homework: ["Speculate about why a meeting ran late.", "Use two certainty levels."],
      },
      {
        title: "Should Have, Could Have: Regret and Criticism",
        blurb: "The grammar of Monday-morning quarterbacking — and self-forgiveness.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Express regret with should have / shouldn't have",
          "Express missed opportunities with could have",
          "Soften criticism with might have",
        ],
        blocks: [
          H("The regret engine"),
          TB("Past-modal meanings", ["Form", "Meaning", "Example"], [
            ["should have + participle", "regret: right thing not done", "I should have booked earlier."],
            ["shouldn't have + participle", "regret: wrong thing done", "I shouldn't have said that."],
            ["could have + participle", "missed opportunity", "We could have won."],
            ["needn't have + participle", "unnecessary action", "You needn't have paid — it was free."],
            ["would have + participle", "unreal past intention", "I would have called, but my phone died."],
          ]),
          EX("The debrief", [
            ["We should have left earlier. I shouldn't have trusted the traffic app. We could have taken the train — it was faster, and we needn't have paid for parking at all.", "Deberíamos haber salido antes. No debería haber confiado en la app de tráfico. Podríamos haber tomado el tren — era más rápido y no hacía falta pagar el parking."],
          ]),
          AU("Listen: the debrief", "We should have left earlier. I shouldn't have trusted the app. We could have taken the train.", 0.9),
          N("Regret vs criticism", "Same grammar, different target: 'I should have...' (regret) vs 'You should have...' (criticism). Tone and context decide — soften criticism with 'maybe you should have...'."),
        ],
        assignment: {
          title: "Honest debrief",
          instructions:
            "Write a five-sentence debrief of a real day that went wrong: two regrets, one shouldn't-have, one could-have opportunity, one needn't-have.",
          minWords: 18,
          maxWords: 65 },
        homework: ["Debrief one week-old decision with should have.", "Then forgive yourself in one sentence."],
      },
      {
        title: "Nuanced Modality and Chapter Review",
        blurb: "Certainty, tact and understatement in one toolkit, then the Chapter 41 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "communication"],
        strands: ["communication", "speaking", "listening", "reading", "writing"],
        outcomes: [
          "Combine deduction, speculation and regret naturally",
          "Choose diplomatic modal phrasing",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Modality in real conversation"),
          DL(
            "The missing wallet",
            "Colleagues investigate a lost wallet.",
            [
              ["Nadia", "Have you seen my wallet? It was on my desk an hour ago."],
              ["Viktor", "You must have moved it — things don't walk away."],
              ["Nadia", "I can't have moved it; I've been in meetings all morning."],
              ["Viktor", "Then someone might have picked it up by mistake. Ask reception — they could have it."],
              ["Nadia", "Good idea. And I should have put it in the drawer. I always say that."],
              ["Viktor", "Well, you needn't worry — it's probably already at reception."],
            ],
          ),
          TB("Diplomacy table", ["Blunt", "Diplomatic"], [
            ["You're wrong.", "You might have missed something."],
            ["You forgot.", "You may have forgotten."],
            ["You made a mistake.", "There might have been a mix-up."],
          ]),
          AU("Listen: the investigation", "You must have moved it. I can't have moved it. Someone might have picked it up.", 0.9),
          H("Chapter 41 review"),
          T("Three questions on advanced modality, then the detective paragraph."),
        ],
        assignment: {
          title: "Detective paragraph",
          instructions:
            "Write a six-sentence detective paragraph about a small real mystery (missing keys, changed plans, odd message): two deductions (must/can't), two past speculations (may/might have), one regret (should have).",
          minWords: 30,
          maxWords: 100 },
        questions: [
          MCQ(
            "The lights are off and the car is gone: 'They ___ be home.'",
            [["a", "must"], ["b", "can't"], ["c", "should"]],
            "b",
            fb("can't", "Logical impossibility → can't.", "Must states the only logical conclusion; here the evidence points away."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'She ___ the train — she's never late for anything else.' (near-certain past guess)",
            [["a", "must have missed"], ["b", "should have missed"], ["c", "can have missed"]],
            "a",
            fb("must have missed", "Near-certain past deduction: must + have + participle.", "Should have is regret, not deduction."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "'We ___ won, but our best player was injured.' (missed opportunity)",
            [["a", "should have"], ["b", "must have"], ["c", "could have"]],
            "c",
            fb("could have", "Could have = an unrealised possibility.", "Should have = the right move that wasn't made."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 42,
    title: "Advanced Passive Constructions",
    description:
      "The passive at full power: passives with modals (must be done), reporting passives (it is said that, he is believed to have), causative have and get (I had it repaired), and the style choices between active and passive in professional writing.",
    objectives: [
      "Build passives with modal verbs",
      "Use reporting passive structures",
      "Use causative have and get for services and experiences",
      "Make voice choices for professional register",
    ],
    prerequisites: ["CH-33", "CH-41"],
    hours: 3,
    skills: ["grammar", "writing", "reading"],
    strands: ["writing", "reading", "communication", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on causatives and reporting passives. Assignment: a service-and-news paragraph using causative have and two reporting passives.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 11,
    module: "b2-precision-grammar",
    lessons: [
      {
        title: "Passive with Modals and Reporting Passive",
        blurb: "Must be completed, can be seen — plus the news formulas: it is said that... / she is believed to...",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Form modal passives (modal + be + participle)",
          "Understand and use it is said/reported that",
          "Convert to subject + is said to + infinitive",
        ],
        blocks: [
          H("Modal passives"),
          GR("modal + be + past participle", "Obligation, possibility and permission apply to passives too: 'The form must be signed', 'Results can be checked online', 'Nothing should be touched.'", [["The report must be submitted by Friday.", "El informe debe entregarse el viernes."]]),
          TB("Reporting passive (news register)", ["Pattern", "Example"], [
            ["It is said that...", "It is said that the company will merge."],
            ["It is reported that...", "It is reported that prices fell again."],
            ["Subject + is said to + verb", "The company is said to be near bankruptcy."],
            ["Subject + is believed to have + participle", "He is believed to have left the country."],
          ]),
          AU("Listen: news passives", "It is said that the company will merge. He is believed to have left the country.", 0.9),
          N("Why news loves it", "The reporting passive claims spread authority without naming sources — powerful and slightly dangerous. Notice it; use it knowingly."),
        ],
        assignment: {
          title: "Newsroom practice",
          instructions:
            "Write four news-style lines: two with it is said/reported that, two converted to subject + is said/believed to (have).",
          minWords: 15,
          maxWords: 55 },
        homework: ["Find two reporting passives in real news.", "Rewrite them naming a source."],
      },
      {
        title: "Causative Have",
        blurb: "I had my car repaired — English for services done FOR you.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "communication", "speaking", "writing"],
        outcomes: [
          "Form causative have (have + object + participle)",
          "Narrate services and repairs",
          "Distinguish 'I repaired' from 'I had it repaired'",
        ],
        blocks: [
          H("The service grammar"),
          GR(
            "have/get + object + past participle",
            "Causative have says someone did it FOR you: 'I had my hair cut', 'She's having her house painted'. Informal twin: get — 'I got my phone fixed'.",
            [
              ["I had the car repaired yesterday.", "Ayer arreglé el coche (lo arregló el mecánico)."],
              ["We're having the photos printed.", "Estamos imprimiendo las fotos (en la tienda)."],
            ],
          ),
          TB("Causative in life", ["Service", "Causative sentence"], [
            ["dentist", "I had a tooth pulled."],
            ["tailor", "She had the dress altered."],
            ["garage", "He's having the brakes checked."],
            ["trouble", "We had our bags stolen! (bad experience)"],
          ]),
          AU("Listen: services", "I had my hair cut. I got my phone fixed. We had our bags stolen!", 0.9),
          W("Doer or receiver", "'I cut my hair' (you did it yourself, badly probably) vs 'I had my hair cut' (a professional did it). The causative hires the work out."),
        ],
        assignment: {
          title: "My service history",
          instructions:
            "Write five causative sentences about services you've used this year, including one negative-experience causative (had something stolen/broken).",
          minWords: 15,
          maxWords: 55 },
        homework: ["State one service you'll get done this month.", "Use have + object + participle."],
      },
      {
        title: "Causative Get and Complex Passives",
        blurb: "Get it done! — urgency, informality and the passive chains of real documents.",
        minutes: 20,
        difficulty: 4,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication", "vocabulary"],
        outcomes: [
          "Use causative get with urgency",
          "Parse multi-word passive chains",
          "Rewrite jargon passives into clear English",
        ],
        blocks: [
          H("Get things done"),
          GR("get + object + participle", "Get adds urgency and informality: 'Get it fixed today!', 'I need to get this signed.' Also experiences: 'He got his license suspended.'", [["Can you get this translated by Monday?", "¿Puedes conseguir que traduzcan esto para el lunes?"]]),
          EX("Complex passive chains", [
            ["The proposal, which was drafted in March and has since been reviewed by two committees, is now being considered for final approval.", "La propuesta, redactada en marzo y revisada desde entonces por dos comités, está siendo considerada para aprobación final."],
          ]),
          TB("Clear-English rewrites", ["Jargon passive", "Clear version"], [
            ["A decision was taken for the implementation of reductions.", "We decided to cut costs."],
            ["Consideration is being given to the matter.", "We are thinking about it."],
          ]),
          AU("Listen: get it done", "Get it fixed today! I need to get this signed. Can you get this translated by Monday?", 0.9),
          N("The bureaucratic smell", "Long agentless passives hide responsibility. One per document is fine; five is fog — rewrite."),
        ],
        assignment: {
          title: "Defog the document",
          instructions:
            "Write three jargon-style passives (invent or copy), then rewrite each in clear active English.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Hunt one jargon passive in real mail.", "Rewrite it kindly."],
      },
      {
        title: "Voice Style Choices and Chapter Review",
        blurb: "Choosing voices like an editor — then the Chapter 42 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["writing", "grammar"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Edit voice for register and responsibility",
          "Mix active, passive and causative deliberately",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The editor's checklist"),
          TB("Voice decision table", ["Question", "If yes..."], [
            ["Does the receiver matter more than the doer?", "passive"],
            ["Is the doer unknown or obvious?", "passive, no by-phrase"],
            ["Did someone do it FOR you?", "causative have/get"],
            ["Are you reporting unverified claims?", "reporting passive"],
            ["Is energy or accountability needed?", "active"],
          ]),
          EX(
            "One week, three voices",
            [
              ["My laptop died on Monday, so I had it examined at the repair shop. The keyboard was ruined by a coffee spill (my fault — no one else's). It is said that coffee kills more laptops than viruses, and now I believe it. The technician replaced the keys, and I got a protective cover delivered the next day.", "Mi portátil murió el lunes, así que lo hice examinar en la tienda. El teclado quedó arruinado por un café derramado (culpa mía). Se dice que el café mata más portátiles que los virus, y ahora lo creo. El técnico reemplazó las teclas y conseguí que me entregaran una funda protectora al día siguiente."],
            ],
          ),
          AU("Listen: three voices", "I had it examined. The keyboard was ruined by a coffee spill. I got a cover delivered.", 0.9),
          H("Chapter 42 review"),
          T("Three questions on advanced passive, then the service-and-news paragraph."),
        ],
        assignment: {
          title: "Services and news",
          instructions:
            "Write a five-sentence paragraph about a real week: two causative-have/get services, one modal passive (must be / can be done), one reporting passive, one deliberate active.",
          minWords: 25,
          maxWords: 90 },
        questions: [
          MCQ(
            "'I ___ my hair ___ yesterday.' (the hairdresser did it)",
            [["a", "had / cut"], ["b", "have / cut"], ["c", "had / cutting"]],
            "a",
            fb("had / cut", "Causative: had + object + past participle — someone did it for you.", "Past-time marker 'yesterday' forces had."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'It ___ that the minister will resign.' (news register, unverified)",
            [["a", "is said"], ["b", "says"], ["c", "is saying"]],
            "a",
            fb("is said", "The reporting passive: it is said/reported/believed that...", "Active 'says' would need a named source."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'The results ___ online by Monday.' (obligation, passive)",
            [["a", "must post"], ["b", "must be posted"], ["c", "must been posted"]],
            "b",
            fb("must be posted", "Modal passive: modal + be + past participle.", "'Must been' mixes the wrong be form."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 43,
    title: "Participles and Advanced Clauses",
    description:
      "Compressed elegance: present and past participles as modifiers, participial phrases (Walking home, she...), reduced relative clauses (the man standing there), participle clauses for reason/time/result, and the dangling-participle error with its fixes.",
    objectives: [
      "Use participial phrases to compress sentences",
      "Reduce relative clauses to participles",
      "Express reason, time and result with participle clauses",
      "Detect and repair dangling participles",
    ],
    prerequisites: ["CH-42"],
    hours: 2,
    skills: ["grammar", "writing"],
    strands: ["writing", "reading", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on participle forms and reduction. Assignment: compress six pairs of sentences with participial phrases.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 11,
    module: "b2-clause-craft",
    lessons: [
      {
        title: "Participles and Participial Phrases",
        blurb: "Walking home, she found a wallet — one -ing clause instead of a full sentence.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Identify present and past participles",
          "Open sentences with participial phrases",
          "Compress two sentences into one participle sentence",
        ],
        blocks: [
          H("The compression tool"),
          GR(
            "participial phrases",
            "A participial phrase replaces a full clause with -ing (active) or -ed (passive) + details. 'She walked home and found a wallet' → 'Walking home, she found a wallet.' The phrase always describes the main subject.",
            [
              ["Feeling tired, he went to bed early.", "Sintiéndose cansado, se acostó temprano."],
              ["Written in 1847, the novel still shocks readers.", "Escrita en 1847, la novela aún impacta."],
            ],
          ),
          EX("Two-to-one compressions", [
            ["She opened the letter. Her hands were shaking. → Opening the letter, her hands shaking, ... / Exhausted by the trip, they slept for twelve hours.", "Abrió la carta con las manos temblando. / Agotados por el viaje, durmieron doce horas."],
          ]),
          AU("Listen: participle openings", "Walking home, she found a wallet. Written in 1847, the novel still shocks readers.", 0.9),
          N("Comma after an opening phrase", "Opening participles take a comma — they lean on the main clause that follows."),
        ],
        assignment: {
          title: "Compress four",
          instructions:
            "Combine four pairs of sentences using participial phrases (two present -ing, two past -ed).",
          minWords: 15,
          maxWords: 55 },
        homework: ["Find two participial phrases in reading.", "Expand each back to two sentences."],
      },
      {
        title: "Reduced Relative Clauses",
        blurb: "The man who is standing there → the man standing there.",
        minutes: 20,
        difficulty: 4,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Reduce active relative clauses to -ing",
          "Reduce passive relative clauses to -ed",
          "Hear reduced clauses in natural speech",
        ],
        blocks: [
          H("The reduction"),
          GR("reduced relatives", "who/which/that + be + participle → participle alone: 'the man who is standing there' → 'the man standing there'; 'a book that was written in 1960' → 'a book written in 1960'.", [["The people waiting outside are volunteers.", "La gente que espera fuera son voluntarios."]]),
          TB("Reduction rules", ["Full", "Reduced"], [
            ["the car which is parked there", "the car parked there"],
            ["anyone who wants to help", "anyone wanting to help"],
            ["the letters that were sent", "the letters sent"],
          ]),
          AU("Listen: reduced clauses", "The people waiting outside. The car parked there. Anyone wanting to help.", 0.9),
          W("Only be-reductions", "'The man who stands there' (simple, no be) cannot reduce to 'the man standing' with the same habitual meaning — reductions come from be + participle forms."),
        ],
        assignment: {
          title: "Reduction drill",
          instructions:
            "Reduce five full relative clauses and use three of the results in your own sentences.",
          minWords: 12,
          maxWords: 50 },
        homework: ["Reduce two clauses in your old writing.", "Check the subject still matches."],
      },
      {
        title: "Participle Clauses for Reason, Time and Result",
        blurb: "Because she was late → Being late; after he finished → Having finished.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Express reason with being/having participles",
          "Express sequence with having + participle",
          "Express result with comma + -ing clause",
        ],
        blocks: [
          H("The adverbial participle"),
          TB("Participle clause jobs", ["Job", "Full form", "Participle form"], [
            ["reason", "Because she was tired, ...", "Being tired, ... / Tired, ..."],
            ["earlier action", "After he had finished, ...", "Having finished, ..."],
            ["passive reason", "Because it was built in 1900, ...", "Built in 1900, ..."],
            ["result", "..., and this meant that ...", "..., leaving / causing / making ..."],
          ]),
          EX("Result clauses", [
            ["The bridge collapsed, cutting off three villages.", "El puente colapsó, dejando aislados tres pueblos."],
            ["Having missed the last train, we walked home.", "Habiendo perdido el último tren, caminamos a casa."],
          ]),
          AU("Listen: adverbial participles", "Having finished, he left. Being tired, she slept. The bridge collapsed, cutting off three villages.", 0.9),
          N("Stylish, but rationed", "One participle clause per sentence maximum in clear writing; two smells like showing off."),
        ],
        assignment: {
          title: "Three jobs",
          instructions:
            "Write three sentences using participle clauses for reason, earlier action and result — label each job.",
          minWords: 12,
          maxWords: 50 },
        homework: ["Compress one because-sentence and one after-sentence.", "Read them aloud for rhythm."],
      },
      {
        title: "Dangling Participles and Chapter Review",
        blurb: "Walking home, the wallet was found — by whom? Fixing the classic error, then the Chapter 43 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Detect dangling participles",
          "Repair them two ways",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The dangling trap"),
          GR(
            "the matching rule",
            "An opening participle MUST describe the main clause's subject. 'Walking home, the wallet was found' breaks the rule — wallets don't walk. Fix 1: change the subject ('Walking home, I found the wallet'). Fix 2: expand to a full clause ('While I was walking home, the wallet was found').",
            [
              ["Wrong: Opening the window, the birds flew out. → Right: Opening the window, I let the birds out.", "Corregido."],
            ],
          ),
          TB("Dangling detector", ["Test", "How"], [
            ["who does the -ing?", "Ask who performs the participle's action"],
            ["is that who the subject?", "The main subject must be the same person/thing"],
            ["if not → dangling", "Rewrite subject or expand the clause"],
          ]),
          AU("Listen: the fix", "Walking home, I found a wallet. ... While I was walking home, the wallet was found.", 0.9),
          H("Chapter 43 review"),
          T("Three questions on participles, then the compression portfolio."),
        ],
        assignment: {
          title: "Compression portfolio",
          instructions:
            "Write six sentences: two participial-phrase openers, two reduced relatives, two result clauses — and repair the dangling one: 'Running for the bus, my phone fell.'",
          minWords: 25,
          maxWords: 85 },
        questions: [
          MCQ(
            "Reduce: 'the students who are waiting outside'",
            [["a", "the students waiting outside"], ["b", "the students waited outside"], ["c", "the students who waiting outside"]],
            "a",
            fb("the students waiting outside", "who are + -ing → -ing alone.", "Past participles mark passive meaning, wrong here."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'___ the report, she presented it to the board.' (she had finished it first)",
            [["a", "Finishing"], ["b", "Having finished"], ["c", "Finished"]],
            "b",
            fb("Having finished", "Having + participle marks an action completed BEFORE the main one.", "Simple -ing would make both simultaneous."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "Which sentence has a DANGLING participle?",
            [["a", "Exhausted, she slept for hours."], ["b", "Arriving late, the door was closed."], ["c", "Built in 1900, the house needs work."]],
            "b",
            fb("Arriving late, the door was closed.", "Doors don't arrive — the participle describes no one in the sentence.", "In (a) and (c) the subject matches the participle."),
            { skill: "grammar", difficulty: "hard" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 44,
    title: "Advanced Connectors and Cohesion",
    description:
      "The professional linker system: contrast and concession (nevertheless, albeit), cause and effect (consequently, owing to), addition and comparison (furthermore, likewise), sequencing (subsequently, meanwhile), and formal paragraph transitions that hold whole documents together.",
    objectives: [
      "Use formal contrast connectors correctly",
      "Express cause and result with formal precision",
      "Sequence and compare across paragraphs",
      "Build document-level cohesion",
    ],
    prerequisites: ["CH-43"],
    hours: 2,
    skills: ["writing", "grammar", "reading"],
    strands: ["writing", "reading", "communication", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on connector meanings and positions. Assignment: a connected report extract using six advanced connectors.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 11,
    module: "b2-clause-craft",
    lessons: [
      {
        title: "Contrast and Concession",
        blurb: "However, nevertheless, even so, whereas — the grammar of respectful disagreement.",
        minutes: 25,
        difficulty: 3,
        skills: ["writing", "vocabulary"],
        strands: ["writing", "vocabulary", "reading", "communication"],
        outcomes: [
          "Position however/nevertheless correctly",
          "Use whereas and while for structured contrast",
          "Use in spite of / despite + gerund",
        ],
        blocks: [
          H("The contrast shelf"),
          TB("Contrast connectors", ["Connector", "Grammar", "Example"], [
            ["however", "sentence adverb: start or mid, with commas", "The data is limited. However, the trend is clear."],
            ["nevertheless / nonetheless", "formal however", "Costs rose; nevertheless, profits grew."],
            ["even so", "spoken concession", "It was risky. Even so, we tried."],
            ["whereas / while", "direct contrast of two clauses", "Sales fell in June, whereas July boomed."],
            ["despite / in spite of + noun/-ing", "no clause, no of-phrase mix-ups", "Despite the rain, we played."],
          ]),
          GR("despite vs although", "Despite + NOUN/-ing ('despite being tired'); although + CLAUSE ('although she was tired'). Never 'despite of'.", [["Despite having little time, she won. / Although she had little time, she won.", "A pesar de tener poco tiempo, ganó."]]),
          AU("Listen: contrasts", "However, the trend is clear. Costs rose; nevertheless, profits grew. Despite the rain, we played.", 0.9),
          N("However needs commas", "'The plan is risky however sound' is wrong: however as a connector takes commas around it or starts a sentence after a full stop/semicolon."),
        ],
        assignment: {
          title: "Contrast builder",
          instructions:
            "Write five contrast sentences using however, nevertheless, whereas, despite + -ing and even so.",
          minWords: 15,
          maxWords: 55 },
        homework: ["Rewrite two but-sentences with formal connectors.", "Note the tone shift."],
      },
      {
        title: "Cause, Effect, Addition and Comparison",
        blurb: "Consequently, owing to, furthermore, likewise — the flow family.",
        minutes: 25,
        difficulty: 3,
        skills: ["writing", "vocabulary"],
        strands: ["writing", "vocabulary", "reading", "communication"],
        outcomes: [
          "Distinguish because connectors (as, since, due to, owing to)",
          "Chain results with consequently/therefore/thus",
          "Add and compare with furthermore, likewise, by contrast",
        ],
        blocks: [
          H("The flow family"),
          TB("Flow connectors", ["Relation", "Formal choices", "Example"], [
            ["cause", "due to / owing to + noun; as/since + clause", "Owing to high demand, prices rose."],
            ["result", "consequently, therefore, thus, hence", "Demand fell; consequently, we cut output."],
            ["addition", "furthermore, moreover, in addition", "The plan is cheap. Furthermore, it's fast."],
            ["comparison", "likewise, similarly, by contrast, conversely", "Tokio grew; likewise, Osaka."],
            ["sequence", "subsequently, meanwhile, thereafter", "We signed; subsequently, work began."],
          ]),
          EX("One paragraph, five relations", [
            ["Owing to a supply delay, launch moved to June. Consequently, marketing paused its campaign; meanwhile, the team rebuilt the app. The delay, moreover, gave us time to test properly — and testing, likewise, improved the hardware. Subsequently, reviews praised stability.", "Debido a un retraso de suministro, el lanzamiento pasó a junio. En consecuencia, marketing pausó la campaña; mientras tanto, el equipo reconstruyó la app. El retraso, además, nos dio tiempo para probar bien — y las pruebas, asimismo, mejoraron el hardware. Posteriormente, las reseñas elogiaron la estabilidad."],
          ]),
          AU("Listen: the flow family", "Owing to high demand... Consequently... Meanwhile... Furthermore... Subsequently...", 0.9),
          W("Due to ≠ due of", "Due to/owing to + NOUN only; the reason as a sentence needs because/since/as + clause."),
        ],
        assignment: {
          title: "Flow paragraph",
          instructions:
            "Write a five-sentence mini-report using owing to, consequently, meanwhile, furthermore and subsequently.",
          minWords: 25,
          maxWords: 85 },
        homework: ["Label the five relations in a news paragraph.", "Replace one connector with a plainer word."],
      },
      {
        title: "Paragraph Transitions",
        blurb: "Moving readers between paragraphs: signposts, echoes and the pivot sentence.",
        minutes: 20,
        difficulty: 4,
        skills: ["writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Open paragraphs with signpost phrases",
          "Echo key terms to chain paragraphs",
          "Pivot smoothly with turning sentences",
        ],
        blocks: [
          H("The signpost kit"),
          TB("Transition moves", ["Move", "Phrases"], [
            ["building", "Building on this... / A further advantage is..."],
            ["pivoting", "However, this view ignores... / Yet the picture changes when..."],
            ["deepening", "Central to this is... / At the heart of the matter lies..."],
            ["concluding", "Taken together, these points... / In sum..."],
            ["sequencing", "The second factor... / Finally, and most importantly..."],
          ]),
          EX("Echo chaining", [
            ["Paragraph 1 ends: '...the tax funded the park.' Paragraph 2 opens: 'That park, in turn, transformed the district.' — the echo ('park') is the bridge.", "El eco ('parque') es el puente entre párrafos."],
          ]),
          AU("Listen: signposts", "Building on this... However, this view ignores... Taken together, these points...", 0.9),
          N("Old to new", "Open each paragraph with something known (echo of the last paragraph) and move toward the new idea. Readers surf that wave."),
        ],
        assignment: {
          title: "Signpost practice",
          instructions:
            "Write three consecutive paragraph OPENINGS (two lines each) that build, pivot and conclude — each opening echoing a key word from the previous paragraph.",
          minWords: 18,
          maxWords: 60 },
        homework: ["Map the transitions of an article.", "Steal two signpost phrases."],
      },
      {
        title: "Document Cohesion and Chapter Review",
        blurb: "Cohesion across a whole document — then the Chapter 44 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading", "vocabulary"],
        outcomes: [
          "Plan cohesion across a full document",
          "Vary connectors to avoid monotony",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The cohesion plan"),
          TB("Document-level checklist", ["Level", "Tool"], [
            ["sentence → sentence", "pronouns, echoes, linkers"],
            ["paragraph → paragraph", "signposts, old-to-new openings"],
            ["section → section", "summaries, preview sentences"],
            ["whole document", "consistent terms: one concept, one name"],
          ]),
          EX("Consistency rule", [
            ["Call it 'remote work' once and it stays 'remote work' — not 'home working', 'telework', 'off-site' in turn. Variation is for style; consistency is for clarity.", "Llámalo 'trabajo remoto' una vez y permanece así. La variación es para el estilo; la consistencia, para la claridad."],
          ]),
          AU("Listen: the plan", "Pronouns and echoes inside paragraphs. Signposts between them. One concept, one name throughout.", 0.9),
          H("Chapter 44 review"),
          T("Three questions on connectors, then the report extract."),
        ],
        assignment: {
          title: "The connected report",
          instructions:
            "Write a six-sentence report extract (any real topic) using six different advanced connectors, one paragraph echo and one signpost opening. List the devices you used at the end.",
          minWords: 35,
          maxWords: 110 },
        questions: [
          MCQ(
            "'The evidence is weak; ___, the committee approved the plan.' (formal contrast)",
            [["a", "nevertheless"], ["b", "furthermore"], ["c", "likewise"]],
            "a",
            fb("nevertheless", "Approving despite weak evidence is a concession contrast.", "Furthermore adds; likewise compares."),
            { skill: "writing", difficulty: "medium" },
          ),
          MCQ(
            "'___ heavy rain, the match continued.' — which is correct?",
            [["a", "Despite of the"], ["b", "Despite the"], ["c", "Although the"]],
            "b",
            fb("Despite the", "Despite takes a noun phrase directly — never 'despite of'.", "'Although the heavy rain' would need a full clause: although it rained heavily."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'Sales fell in June, ___ July boomed.' (direct contrast)",
            [["a", "consequently"], ["b", "whereas"], ["c", "moreover"]],
            "b",
            fb("whereas", "Whereas sets two facts against each other.", "Consequently shows result; moreover adds."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),
];
