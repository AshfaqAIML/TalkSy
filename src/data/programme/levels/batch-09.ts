/**
 * Core English Programme — Batch 09 (Chapters 33–36, Level B1).
 *
 * Passive voice, reported speech, relative clauses and
 * gerunds vs infinitives.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, MCQ, MATCH, N, REORD, TB, T, W, fb } from "../types";

export const batch09: ChapterSpec[] = [
  chapter("b1", {
    number: 33,
    title: "Active and Passive Voice",
    description:
      "Who did it vs what was done: the passive across tenses, passives with two objects, when the passive is the right choice (unknown actor, obvious actor, or the actor hidden on purpose), and transforming active to passive mechanically and fluently.",
    objectives: [
      "Form the passive with be + past participle in six tenses",
      "Transform active sentences to passive and back",
      "Choose passive deliberately by focus and emphasis",
      "Use by-phrases only when the actor matters",
    ],
    prerequisites: ["CH-32"],
    hours: 3,
    skills: ["grammar", "writing"],
    strands: ["writing", "reading", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on passive formation and choice. Assignment: rewrite a news paragraph switching voice deliberately.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 9,
    module: "b1-voice-and-speech",
    lessons: [
      {
        title: "The Passive Structure",
        blurb: "Flip the sentence: the object steps forward, the subject retires behind by.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Explain the passive transformation with an example",
          "Form be + past participle passives",
          "Decide when to include a by-phrase",
        ],
        blocks: [
          H("The flip"),
          GR(
            "active → passive",
            "Take the object, make it the subject, add be (in the tense) + past participle, and put the old subject after 'by' if it matters: 'Shakespeare wrote Hamlet' → 'Hamlet was written by Shakespeare.'",
            [
              ["They clean the offices at night. → The offices are cleaned at night.", "Limpian las oficinas de noche. → Las oficinas se limpian de noche."],
              ["Someone stole my bike. → My bike was stolen.", "Alguien robó mi bici. → Me robaron la bici."],
            ],
          ),
          TB("Voice choice", ["Active", "Passive"], [
            ["focus on the doer", "focus on the receiver/result"],
            ["Someone stole my bike.", "My bike was stolen."],
            ["actor is important", "actor unknown, obvious or hidden"],
          ]),
          AU("Listen: the flip", "Hamlet was written by Shakespeare. The offices are cleaned at night. My bike was stolen.", 0.9),
          W("Only transitive verbs flip", "'Happen', 'sleep', 'arrive' have no object — they cannot be passive. 'The accident was happened' is impossible."),
        ],
        assignment: {
          title: "Ten flips",
          instructions:
            "Transform five active sentences into passive (two keeping the by-phrase, three dropping it) and explain in one line why you kept or dropped it.",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["Find three passives in a news article.", "Ask: why did the writer choose passive?"],
      },
      {
        title: "Passive Across Tenses",
        blurb: "Is made, was made, is being made, has been made, will be made, can be made.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Build passives in six tense/aspect combinations",
          "Recognise long passive chains in texts",
          "Report processes and procedures",
        ],
        blocks: [
          H("The tense table"),
          TB("Passive by tense", ["Tense", "Form", "Example"], [
            ["present simple", "am/is/are + made", "Coffee is grown in Brazil."],
            ["past simple", "was/were + made", "The bridge was built in 1932."],
            ["present continuous", "is being + made", "The road is being repaired."],
            ["present perfect", "has been + made", "The email has been sent."],
            ["future", "will be + made", "The winner will be announced tonight."],
            ["modal", "can/must be + made", "Tickets can be bought online."],
          ]),
          EX("A process", [
            ["First, the olives are washed. Then they are pressed, and the oil is filtered. Finally, it is bottled and shipped.", "Primero, las aceitunas se lavan. Luego se prensan y el aceite se filtra. Finalmente se embotella y se envía."],
          ]),
          AU("Listen: process passive", "The olives are washed. The oil is filtered. It is bottled and shipped.", 0.9),
          N("The be-carries-tense rule", "The tense lives in 'be': IS made (present), WAS made (past), HAS BEEN made (perfect). The participle never changes."),
        ],
        assignment: {
          title: "Process description",
          instructions:
            "Describe a process you know (cooking, manufacturing, an app workflow) in five passive sentences across at least three different tenses.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Rewrite your process in active voice.", "Compare: which version sounds more neutral?"],
      },
      {
        title: "Passives with Two Objects and Common Patterns",
        blurb: "I was given a gift / a gift was given to me — plus get-passives and it is said.",
        minutes: 20,
        difficulty: 4,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Form both passives of double-object verbs",
          "Understand get-passives in speech",
          "Handle it is said/believed/reported patterns",
        ],
        blocks: [
          H("Two ways with two objects"),
          GR(
            "double-object passives",
            "Verbs like give, send, offer, show take two objects — either can become the passive subject: 'They gave me a prize' → 'I was given a prize' (person) or 'A prize was given to me' (thing).",
            [
              ["I was offered a new job.", "Me ofrecieron un nuevo trabajo."],
              ["We were shown the new office.", "Nos mostraron la nueva oficina."],
            ],
          ),
          TB("Spoken and formal patterns", ["Pattern", "Register", "Example"], [
            ["get + participle", "informal", "He got promoted! / They got married in June."],
            ["it is said/reported/believed that...", "formal/news", "It is reported that prices will fall."],
            ["subject + is said to...", "formal/news", "She is said to be very talented."],
          ]),
          AU("Listen: patterns", "I was offered a new job. He got promoted! It is reported that prices will fall.", 0.9),
          N("Person-first passives feel natural", "'I was given a chance' beats 'A chance was given to me' in speech. English likes people as subjects."),
        ],
        assignment: {
          title: "Pattern sampler",
          instructions:
            "Write five sentences: two double-object passives, two get-passives, one it-is-said news line about a real topic.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Spot two get-passives in conversation or TV.", "Write one news-style it-is-reported line."],
      },
      {
        title: "Voice Choices and Chapter Review",
        blurb: "Style, honesty and emphasis: when passive serves the sentence — then the Chapter 33 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["writing", "grammar"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Justify voice choices stylistically",
          "Avoid passive overuse",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The honest chooser"),
          TB("Choose passive when...", ["Reason", "Example"], [
            ["actor unknown", "My locker was broken into."],
            ["actor obvious", "The thief was arrested. (by the police — obvious)"],
            ["actor is bad news to name", "Mistakes were made."],
            ["topic sentence needs the topic as subject", "The vaccine was developed in 2020. Then it was tested..."],
          ]),
          EX("Voice editing", [
            ["Over-passive: 'The meeting was attended by us and decisions were made by the team. The report was written by Ana.' → Better: 'We attended the meeting and the team made decisions. Ana wrote the report.'", "Edición de voz activa."],
          ]),
          AU("Listen: mixed voices", "The vaccine was developed in 2020. Then we tested it in three countries.", 0.9),
          N("Passive is a tool, not a tic", "Good writing mixes voices deliberately: passive to keep the topic in focus, active for energy and accountability."),
          H("Chapter 33 review"),
          T("Three questions on voice, then the news rewrite."),
        ],
        assignment: {
          title: "Newsroom rewrite",
          instructions:
            "Write a five-sentence news paragraph about a real event using passive where the actor is unknown/obvious and active where the actor matters. Mark each sentence's voice and reason.",
          minWords: 30,
          maxWords: 100,
        },
        questions: [
          MCQ(
            "'The bridge ___ in 1932.' — complete the passive.",
            [["a", "was built"], ["b", "is built"], ["c", "built"]],
            "a",
            fb("was built", "Past-time passive: was/were + past participle.", "The year forces past; the passive needs be + participle."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Why would a news report say 'The money was stolen' rather than 'Someone stole the money'?",
            [["a", "The thief is unknown."], ["b", "Passive is always better."], ["c", "The sentence is shorter."]],
            "a",
            fb("The thief is unknown.", "Passive lets you report the event without naming an actor you cannot name.", "Passive is a choice, never a default."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence is IMPOSSIBLE?",
            [["a", "The road is being repaired."], ["b", "The accident was happened at noon."], ["c", "Tickets can be bought online."]],
            "b",
            fb("'The accident was happened' is impossible.", "'Happen' has no object, so it cannot be passive: 'The accident happened.'", "The other two are correct passive forms."),
            { skill: "grammar", difficulty: "hard" },
          ),
        ],
      },
    ],
  }),

  chapter("b1", {
    number: 34,
    title: "Direct and Reported Speech",
    description:
      "Carrying words across time: quotation and its mechanics, the backshift system (said → had said), pronoun and time-expression adjustments, reported questions and requests, and the reporting verbs (say, tell, ask, explain, promise) that make reported speech precise.",
    objectives: [
      "Punctuate direct speech correctly",
      "Backshift tenses in reported statements",
      "Adjust pronouns and time expressions",
      "Report questions, requests and commands",
    ],
    prerequisites: ["CH-33"],
    hours: 3,
    skills: ["grammar", "writing", "listening"],
    strands: ["writing", "communication", "reading", "listening", "speaking"],
    assessment:
      "Chapter review quiz: 3 questions on backshift and reporting verbs. Assignment: a gossip paragraph reporting five quotes.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 9,
    module: "b1-voice-and-speech",
    lessons: [
      {
        title: "Direct Speech and Backshift",
        blurb: "Quoting exactly — then carrying the quote one tense back in time.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Punctuate quoted speech (comma, inverted commas, capital)",
          "Apply the backshift ladder to reported statements",
          "Explain why tenses move back",
        ],
        blocks: [
          H("Quote then carry"),
          GR(
            "the backshift ladder",
            "When you report (say/tell + that) after the original speaking, tenses step one rung back: present → past ('I am tired' → she said she was tired); past → past perfect ('I saw him' → she said she had seen him).",
            [
              ["'I work from home.' → She said (that) she worked from home.", "'Trabajo desde casa.' → Dijo que trabajaba desde casa."],
              ["'I lost my keys.' → He said he had lost his keys.", "'Perdí las llaves.' → Dijo que había perdido las llaves."],
            ],
          ),
          TB("Backshift map", ["Direct", "Reported"], [
            ["present simple →", "past simple"],
            ["present continuous →", "past continuous"],
            ["past simple →", "past perfect"],
            ["will →", "would"],
            ["can →", "could"],
            ["am/is going to →", "was/were going to"],
          ]),
          AU("Listen: quote and report", "I am tired. ... She said she was tired. I will call you. ... He said he would call me.", 0.9),
          N("No backshift for timeless truths", "'Water boils at 100 degrees' stays present when reported: she said water boils at 100 degrees. Facts do not age."),
        ],
        assignment: {
          title: "Backshift drill",
          instructions:
            "Report six direct quotes with said/told: two present simple, two past simple, one will, one can.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Collect three real quotes from people today.", "Report them to someone else."],
      },
      {
        title: "Pronouns, Time and Reporting Verbs",
        blurb: "Yesterday becomes the day before — and said is only one of twenty reporting verbs.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "vocabulary"],
        strands: ["communication", "vocabulary", "writing"],
        outcomes: [
          "Adjust pronouns and time words when reporting",
          "Choose precise reporting verbs",
          "Use say vs tell correctly",
        ],
        blocks: [
          H("The adjustment kit"),
          TB("Time and place shifts", ["Direct", "Reported"], [
            ["now", "then"],
            ["today", "that day"],
            ["yesterday", "the day before / the previous day"],
            ["tomorrow", "the next day / the following day"],
            ["here", "there"],
            ["this", "that"],
          ]),
          TB("Reporting verbs", ["Verb", "For reporting...", "Example"], [
            ["say (+ that)", "statements, no listener named", "She said that..."],
            ["tell + person (+ that)", "statements with a listener", "She told me that..."],
            ["ask", "questions and requests", "He asked if... / asked me to..."],
            ["explain", "clarifying", "She explained why..."],
            ["promise", "commitments", "He promised to call."],
            ["complain", "negativity", "She complained that..."],
          ]),
          EX("Full adjustment", [
            ["'I'll call you tomorrow here.' → She said she would call me the next day there.", "'Te llamaré mañana aquí.' → Dijo que me llamaría al día siguiente allí."],
          ]),
          AU("Listen: adjustments", "She said she would call me the next day. He told me he had finished the day before.", 0.9),
          W("Say never takes a person", "'She said me' is wrong — say THAT, tell SOMEONE: 'She told me that...'"),
        ],
        assignment: {
          title: "Precision reporting",
          instructions:
            "Report five quotes using five different reporting verbs (not just said), with all pronoun and time adjustments.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Replace three 'said's in your last message with better verbs.", "Explain one choice."],
      },
      {
        title: "Reported Questions and Requests",
        blurb: "No question mark, no do: reported questions flip to statement order.",
        minutes: 20,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Report yes/no questions with if/whether",
          "Report WH-questions in statement order",
          "Report requests and commands with to + infinitive",
        ],
        blocks: [
          H("Questions inside statements"),
          GR(
            "reported questions",
            "Yes/no: ask + if/whether ('Are you coming?' → She asked if I was coming). WH: question word + statement order ('Where do you live?' → He asked where I lived). NEVER keep do/did or the question mark.",
            [
              ["'Where is the station?' → He asked where the station was.", "'¿Dónde está la estación?' → Preguntó dónde estaba la estación."],
              ["'Can you help me?' → She asked me to help her.", "'¿Puedes ayudarme?' → Me pidió que la ayudara."],
            ],
          ),
          TB("Commands and requests", ["Direct", "Reported"], [
            ["'Sit down.'", "He told me to sit down."],
            ["'Don't touch it!'", "She told me not to touch it."],
            ["'Please wait here.'", "They asked us to wait there."],
          ]),
          AU("Listen: reported questions", "She asked if I was coming. He asked where I lived. They told us to wait.", 0.9),
          W("The word-order trap", "'He asked where was the station' is wrong — reported questions use STATEMENT order: where the station WAS."),
        ],
        assignment: {
          title: "The interview report",
          instructions:
            "Write a five-line interview (two WH-questions, one yes/no question, one request, one command), then report all five lines.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Report three questions someone asked you today.", "Keep the statement order."],
      },
      {
        title: "Reporting in Real Life and Chapter Review",
        blurb: "Gossip, meetings and news — reported speech at work, then the Chapter 34 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["communication", "writing"],
        strands: ["communication", "writing", "speaking", "listening", "reading"],
        outcomes: [
          "Summarise a conversation in reported speech",
          "Choose reporting verbs to convey attitude",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The meeting summary"),
          EX(
            "What happened in the meeting",
            [
              ["The manager opened by saying that sales had fallen in March, but she promised that the new campaign would fix it by June. When we asked why the budget was cut, she explained that the company had invested in new software. She told us not to worry and asked everyone to send ideas by Friday. Marco complained that the deadlines were too tight, and she admitted that he had a point.", "La gerente abrió diciendo que las ventas habían caído en marzo, pero prometió que la nueva campaña lo arreglaría en junio. Cuando preguntamos por qué se recortó el presupuesto, explicó que la empresa había invertido en nuevo software. Nos dijo que no nos preocupáramos y pidió a todos que enviaran ideas el viernes. Marco se quejó de que los plazos eran demasiado ajustados y ella admitió que tenía razón."],
            ],
            "Six reporting verbs, full backshift, and attitude in every verb choice.",
          ),
          AU("Listen: the meeting", "She said that sales had fallen. She promised the campaign would fix it. She told us not to worry.", 0.9),
          H("Chapter 34 review"),
          T("Three questions on reporting, then the gossip paragraph."),
        ],
        assignment: {
          title: "Gossip paragraph",
          instructions:
            "Write a five-to-six-sentence gossip paragraph reporting what five different people said (invent or recall), using five different reporting verbs with correct backshift.",
          minWords: 30,
          maxWords: 100,
        },
        questions: [
          MCQ(
            "'I am busy,' she said. → She said she ___ busy.",
            [["a", "is"], ["b", "was"], ["c", "has been"]],
            "b",
            fb("was", "Backshift: present → past in reported speech.", "The reporting happened after the original words."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which reported question is correct? (Direct: 'Where do you work?')",
            [["a", "He asked where do I work."], ["b", "He asked where I worked."], ["c", "He asked where did I work."]],
            "b",
            fb("He asked where I worked.", "Reported questions use statement order: question word + subject + verb.", "Do/did disappear; no inverted order."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'Don't be late!' → She told me ___.",
            [["a", "don't be late"], ["b", "to not be late"], ["c", "not to be late"]],
            "c",
            fb("not to be late", "Negative commands: told + person + NOT to + verb.", "'To not' splits the wrong way in standard English."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("b1", {
    number: 35,
    title: "Relative Clauses",
    description:
      "Joining sentences with who, which, that, whose and where: defining clauses that identify, non-defining clauses that add — with their commas — and the omission rules that make relative clauses sound native.",
    objectives: [
      "Choose who/which/that/whose/where correctly",
      "Build defining clauses to identify nouns",
      "Build non-defining clauses with correct punctuation",
      "Omit the relative pronoun where allowed",
    ],
    prerequisites: ["CH-34"],
    hours: 2,
    skills: ["grammar", "writing", "reading"],
    strands: ["writing", "reading", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on pronoun choice and punctuation. Assignment: combine eight sentence pairs using both clause types.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 9,
    module: "b1-clause-craft",
    lessons: [
      {
        title: "Who, Which and That",
        blurb: "People are who, things are which, and often both can be that.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Choose relative pronouns by noun type",
          "Combine two sentences into one relative-clause sentence",
          "Position the clause next to its noun",
        ],
        blocks: [
          H("The joining words"),
          GR(
            "who / which / that",
            "WHO for people ('the woman who called'), WHICH for things ('the email which arrived'), THAT for either in defining clauses ('the film that changed my life').",
            [
              ["The man who lives next door is a pilot.", "El hombre que vive al lado es piloto."],
              ["The app which I use most is a dictionary.", "La aplicación que más uso es un diccionario."],
            ],
          ),
          EX("Combining", [
            ["I met a woman. She works at Google. → I met a woman who works at Google.", "Conocí a una mujer que trabaja en Google."],
            ["This is the book. It changed my life. → This is the book that changed my life.", "Este es el libro que cambió mi vida."],
          ]),
          AU("Listen: joined sentences", "The man who lives next door is a pilot. This is the book that changed my life.", 0.9),
          N("Keep them close", "The relative clause must hug its noun: 'I saw the man who called' — not 'I saw the man yesterday who called'."),
        ],
        assignment: {
          title: "Six joins",
          instructions:
            "Combine six pairs of short sentences using who, which and that (twice each).",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Find three relative clauses in a text.", "Name the pronoun and its noun."],
      },
      {
        title: "Whose and Where",
        blurb: "Possession and place inside relative clauses.",
        minutes: 20,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Use whose for possession",
          "Use where for places (and when for times)",
          "Distinguish where from which there",
        ],
        blocks: [
          H("Ownership and place"),
          GR(
            "whose / where / when",
            "WHOSE shows possession ('the boy whose bike was stolen'). WHERE heads place clauses ('the café where we met'). WHEN heads time clauses ('the year when everything changed').",
            [
              ["That's the student whose father is the mayor.", "Ese es el estudiante cuyo padre es el alcalde."],
              ["This is the park where I learned to ride a bike.", "Este es el parque donde aprendí a montar en bici."],
            ],
          ),
          EX("Precision", [
            ["The shop where I bought it is closed. (= in which) / The shop which I loved is closed. (shop as object)", "La tienda donde lo compré está cerrada. / La tienda que me encantaba está cerrada."],
          ]),
          AU("Listen: whose and where", "The boy whose bike was stolen. The café where we met. The year when everything changed.", 0.9),
          W("Whose is not only for people", "'The house whose windows are broken' is correct — whose covers all possession."),
        ],
        assignment: {
          title: "People and places",
          instructions:
            "Write five sentences using whose (×2), where (×2) and when (×1) about real people and places in your life.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Describe your favourite place with a where-clause.", "Introduce a friend with a whose-clause."],
      },
      {
        title: "Defining vs Non-Defining",
        blurb: "Commas that change meaning: 'My brother who lives in Rome' vs 'My brother, who lives in Rome'.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Distinguish defining from non-defining clauses",
          "Punctuate non-defining clauses correctly",
          "Explain how commas change meaning",
        ],
        blocks: [
          H("Necessary or extra?"),
          GR(
            "defining vs non-defining",
            "Defining clauses IDENTIFY the noun — no commas, that allowed: 'The students who studied passed.' (only those students). Non-defining clauses ADD information about an already-known noun — commas, never that: 'My mother, who is 70, runs daily.'",
            [
              ["My brother who lives in Rome is a chef. (I have several brothers; this identifies which one.)", "Mi hermano que vive en Roma es chef."],
              ["My brother, who lives in Rome, is a chef. (I have one brother; Rome is extra info.)", "Mi hermano, que vive en Roma, es chef."],
            ],
          ),
          TB("The rules table", ["Feature", "Defining", "Non-defining"], [
            ["commas", "no", "yes, pair around the clause"],
            ["that", "allowed", "never"],
            ["purpose", "identifies which one", "adds a detail"],
            ["dropping it", "changes meaning", "keeps meaning"],
          ]),
          AU("Listen: the comma difference", "My brother who lives in Rome... My brother, who lives in Rome, ...", 0.9),
          W("The that-ban", "'My mother, that is 70, runs' is impossible. After a comma, only who or which."),
        ],
        assignment: {
          title: "Meaning changers",
          instructions:
            "Write three defining and three non-defining sentences, then explain one pair where the commas change who or what is meant.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Punctuate: 'My phone which I bought last year is already slow.'", "Decide: one phone or several?"],
      },
      {
        title: "Omitting Pronouns and Chapter Review",
        blurb: "When you can drop who/which/that — and when you can't, then the Chapter 35 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Omit relative pronouns in object position",
          "Keep pronouns in subject position",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The omission rule"),
          GR(
            "drop the pronoun when it's the object",
            "If the pronoun is followed by a NEW subject/verb ('the film (that) I saw'), you may drop it. If the pronoun is itself the subject ('the film that won the prize'), you must keep it.",
            [
              ["The book (that) I read was great. — droppable", "El libro que leí fue genial."],
              ["The book that won the prize was great. — never dropped", "El libro que ganó el premio fue genial."],
            ],
          ),
          EX("Natural English", [
            ["Everything (that) he says is funny. / Everything that makes sense is here.", "Todo lo que dice es divertido. / Todo lo que tiene sentido está aquí."],
          ]),
          AU("Listen: with and without", "The film I saw... The film that won the prize...", 0.9),
          H("Chapter 35 review"),
          T("Three questions on relative clauses, then the combining task."),
        ],
        assignment: {
          title: "The great relative combine",
          instructions:
            "Combine eight pairs of sentences: four defining (two with dropped pronouns), four non-defining with correct commas. Underline each relative pronoun or mark the omission.",
          minWords: 30,
          maxWords: 100,
        },
        questions: [
          MCQ(
            "'The woman ___ car was towed is furious.'",
            [["a", "which"], ["b", "whose"], ["c", "who"]],
            "b",
            fb("whose", "Whose marks possession inside a relative clause.", "Who marks the person; the car belongs to her."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence means I have MORE THAN ONE sister?",
            [["a", "My sister, who lives in Oslo, is a doctor."], ["b", "My sister who lives in Oslo is a doctor."], ["c", "My sister that lives in Oslo is a doctor."]],
            "b",
            fb("My sister who lives in Oslo is a doctor.", "No commas = defining = the clause identifies WHICH sister.", "Commas mean I have one sister and Oslo is a bonus detail."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "In which sentence can the pronoun be OMITTED?",
            [["a", "The man who called you is my boss."], ["b", "The email that I sent arrived late."], ["c", "The dog that barks all night lives upstairs."]],
            "b",
            fb("The email (that) I sent arrived late.", "Object-position pronouns (followed by a new subject) can be dropped.", "In (a) and (c) the pronoun is the subject of its clause and must stay."),
            { skill: "grammar", difficulty: "hard" },
          ),
        ],
      },
    ],
  }),

  chapter("b1", {
    number: 36,
    title: "Gerunds and Infinitives",
    description:
      "The verb-pattern maze: gerunds after enjoy and finish, infinitives after want and decide, bare infinitives after make and let, verbs that take both with meaning changes (stop to / stop -ing), and the classic errors with their fixes.",
    objectives: [
      "Use gerunds after the core gerund verbs",
      "Use infinitives after the core infinitive verbs",
      "Use bare infinitives after make/let/help",
      "Handle stop/remember/forget/try meaning changes",
    ],
    prerequisites: ["CH-35"],
    hours: 3,
    skills: ["grammar", "vocabulary"],
    strands: ["vocabulary", "writing", "reading", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on verb patterns and meaning pairs. Assignment: a habits-and-plans paragraph using six different patterns.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 9,
    module: "b1-clause-craft",
    lessons: [
      {
        title: "Gerunds",
        blurb: "Verbs as nouns: enjoy swimming, finish eating, go shopping.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "reading"],
        outcomes: [
          "Explain what a gerund is",
          "Use the twelve core gerund verbs",
          "Use gerunds as sentence subjects",
        ],
        blocks: [
          H("The -ing noun"),
          GR(
            "gerund = verb + -ing used as a noun",
            "After some verbs the next action must be a gerund: enjoy, finish, avoid, mind, suggest, keep, practise, consider, stop (= quit), imagine, risk, recommend.",
            [
              ["I enjoy cooking, but I avoid washing up.", "Disfruto cocinar, pero evito lavar los platos."],
              ["She suggested taking the train.", "Sugirió tomar el tren."],
            ],
          ),
          TB("Gerund verbs in families", ["Family", "Verbs"], [
            ["liking/hating", "enjoy, love, hate, don't mind, can't stand"],
            ["continuing/quitting", "keep, continue, stop, give up, finish"],
            ["thinking", "consider, imagine, suggest, recommend"],
            ["avoiding", "avoid, risk, postpone, practise"],
          ]),
          EX("Gerund subjects", [
            ["Swimming keeps me sane.", "Nadar me mantiene sano."],
            ["Learning English takes time.", "Aprender inglés lleva tiempo."],
          ]),
          AU("Listen: gerund verbs", "I enjoy cooking. She suggested taking the train. Keep trying!", 0.9),
          N("After prepositions, always -ing", "'Interested in learning', 'good at fixing', 'before leaving' — prepositions are gerund territory."),
        ],
        assignment: {
          title: "Gerund life",
          instructions:
            "Write five sentences about what you enjoy, avoid, keep doing, suggest and finished recently — all with gerunds.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["List five activities with love/can't stand + -ing.", "Start one sentence with a gerund subject."],
      },
      {
        title: "To-Infinitives",
        blurb: "want to go, decide to stay, hope to see — verbs that point forward.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "communication"],
        outcomes: [
          "Use the twelve core infinitive verbs",
          "Express purpose with to + verb",
          "Use too/enough + infinitive",
        ],
        blocks: [
          H("The forward-pointing verb"),
          GR(
            "infinitive verbs",
            "After want, need, decide, hope, plan, promise, offer, agree, learn, manage, refuse, afford — use to + base verb.",
            [
              ["We decided to stay another day.", "Decidimos quedarnos otro día."],
              ["She's learning to drive.", "Está aprendiendo a conducir."],
            ],
          ),
          TB("Infinitive verbs in families", ["Family", "Verbs"], [
            ["wanting/needs", "want, need, would like, hope, wish"],
            ["deciding", "decide, choose, plan, agree, refuse, offer, promise"],
            ["managing", "manage, fail, afford, learn, seem, tend"],
          ]),
          EX("Purpose and degree", [
            ["I called to invite you. (purpose)", "Llamé para invitarte."],
            ["It's too cold to swim. / I'm old enough to know.", "Hace demasiado frío para nadar. / Soy lo bastante mayor para saberlo."],
          ]),
          AU("Listen: infinitive verbs", "We decided to stay. She's learning to drive. I called to invite you.", 0.9),
          N("Person between", "want/ask/tell + PERSON + to: 'I want you to listen', 'She asked me to help'."),
        ],
        assignment: {
          title: "Plans and purposes",
          instructions:
            "Write five sentences about real plans or purposes using five different infinitive verbs, including one 'person + to' pattern.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["State three weekend plans with infinitive verbs.", "Give one purpose sentence: 'I'm here to...'" ],
      },
      {
        title: "Bare Infinitives and Meaning Pairs",
        blurb: "Make me laugh, let me go — and the pairs where the pattern changes everything.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading", "communication"],
        outcomes: [
          "Use bare infinitives after make/let/help",
          "Contrast stop to do vs stop doing",
          "Contrast remember/forget/try + both patterns",
        ],
        blocks: [
          H("No to at all"),
          GR(
            "bare infinitives",
            "After MAKE, LET and HELP the second verb takes no to: 'She made me laugh', 'Let me explain', 'I helped her carry it'. (In the passive, make regains to: 'I was made to wait.')",
            [
              ["The film made me cry.", "La película me hizo llorar."],
              ["Let me help you carry that.", "Déjame ayudarte a cargar eso."],
            ],
          ),
          TB("The meaning pairs", ["Pattern", "Meaning", "Example"], [
            ["stop to smoke", "pause in order to smoke", "We stopped to buy coffee."],
            ["stop smoking", "quit the habit", "He stopped smoking last year."],
            ["remember to lock", "not forget a duty", "Remember to lock up."],
            ["remember locking", "recall the memory", "I remember locking it — it's locked."],
            ["try to open", "attempt", "I tried to open the jar."],
            ["try opening", "experiment with", "Try opening it with a coin."],
            ["forget to call", "fail a duty", "I forgot to call Mum."],
            ["forget calling", "erase from memory", "I'll never forget meeting her."],
          ]),
          AU("Listen: meaning pairs", "We stopped to buy coffee. He stopped smoking. Remember to lock up. I remember locking it.", 0.9),
          W("Forward vs backward", "Infinitive looks forward (a duty to do); gerund looks backward (a memory or an end). Feel the direction and the pattern follows."),
        ],
        assignment: {
          title: "Meaning-pair stories",
          instructions:
            "Write four two-sentence stories: each uses one pattern pair (stop, remember, try, forget) in both forms, making both meanings clear.",
          minWords: 20,
          maxWords: 75,
        },
        homework: ["Test yourself on the eight meaning-pair rows.", "Use one pair in real conversation."],
      },
      {
        title: "Verb Patterns in Use and Chapter Review",
        blurb: "Patterns in a real paragraph plus the error clinic, then the Chapter 36 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading", "vocabulary"],
        outcomes: [
          "Use varied verb patterns in connected writing",
          "Fix the classic pattern errors",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Patterns in the wild"),
          EX(
            "The new job",
            [
              ["I decided to change jobs last spring. I wanted to work closer to home, and I couldn't stand commuting three hours a day. A friend suggested applying at her company, and the interviewers made me feel welcome immediately. They let me ask questions, and they promised to answer honestly. I kept practising my answers before the final meeting, and I remembered to bring my portfolio. They offered me the job the same day — and I stopped looking for anything else. Now I enjoy going to work, and I've even started learning Spanish.", "Decidí cambiar de trabajo la primavera pasada. Quería trabajar más cerca de casa y no soportaba viajar tres horas al día. Una amiga sugirió aplicar a su empresa y los entrevistadores me hicieron sentir bienvenido de inmediato. Me dejaron hacer preguntas y prometieron responder con honestidad. Seguí practicando mis respuestas antes de la reunión final y recordé traer mi portafolio. Me ofrecieron el puesto el mismo día — y dejé de buscar otra cosa. Ahora disfruto ir al trabajo y hasta he empezado a aprender español."],
            ],
            "Twelve pattern verbs in one honest paragraph.",
          ),
          TB("Error clinic", ["Error", "Fix"], [
            ["I enjoy to read.", "I enjoy reading."],
            ["She wants that I help.", "She wants me to help."],
            ["He made me to wait.", "He made me wait."],
            ["I suggested to go.", "I suggested going."],
          ]),
          AU("Listen: the paragraph flow", "I decided to change jobs. A friend suggested applying. They made me feel welcome.", 0.9),
          H("Chapter 36 review"),
          T("Three questions on patterns, then the habits paragraph."),
        ],
        assignment: {
          title: "My patterns paragraph",
          instructions:
            "Write a six-sentence paragraph about a decision you made, using at least six different pattern verbs (gerund, infinitive, bare) and one meaning pair.",
          minWords: 30,
          maxWords: 100,
        },
        questions: [
          MCQ(
            "'I enjoy ___ in the mountains.'",
            [["a", "to walk"], ["b", "walking"], ["c", "walk"]],
            "b",
            fb("walking", "Enjoy takes a gerund.", "Infinitives follow want/decide/hope-type verbs."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "'She made me ___ my mind.'",
            [["a", "to change"], ["b", "changing"], ["c", "change"]],
            "c",
            fb("change", "Make + person + BARE infinitive (no to).", "To returns only in the passive: 'I was made to change my mind.'"),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'We stopped ___ a coffee' (we paused our trip IN ORDER TO drink coffee):",
            [["a", "drinking"], ["b", "to drink"], ["c", "drink"]],
            "b",
            fb("to drink", "Stop + infinitive = pause in order to do something.", "Stop + gerund = quit the activity itself."),
            { skill: "grammar", difficulty: "hard" },
          ),
        ],
      },
    ],
  }),
];
