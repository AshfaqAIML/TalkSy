/**
 * Core English Programme — Batch 06 (Chapters 21–24, Level A2).
 *
 * The future, present perfect foundations, modal verbs and
 * countable/uncountable nouns.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, LIS, MCQ, MATCH, N, REORD, TB, T, VOC, W, fb } from "../types";

export const batch06: ChapterSpec[] = [
  chapter("a2", {
    number: 21,
    title: "Talking About the Future",
    description:
      "The four future tools of everyday English: will for instant decisions and predictions, be going to for plans and intentions, present continuous for fixed arrangements, and present simple for timetables. You learn to pick the right tool for each kind of future.",
    objectives: [
      "Form and use will for decisions, predictions and promises",
      "Form and use be going to for plans and evidence-based predictions",
      "Use present continuous for arrangements and present simple for timetables",
      "Ask and answer future questions naturally",
    ],
    prerequisites: ["CH-20"],
    hours: 2,
    skills: ["grammar", "speaking"],
    strands: ["communication", "speaking", "writing", "listening"],
    assessment:
      "Chapter review quiz: 3 questions on will vs going to vs arrangements. Assignment: write your next weekend plan using all three future forms.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 6,
    module: "a2-past-and-future",
    lessons: [
      {
        title: "Will",
        blurb: "Instant decisions, predictions and promises: 'I'll help you.'",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking"],
        outcomes: [
          "Form will + base verb with all pronouns",
          "Use will for decisions made while speaking",
          "Make predictions and promises with will/won't",
        ],
        blocks: [
          H("The instant future"),
          GR(
            "will + base verb",
            "Use will ('ll) for: decisions at the moment of speaking ('I'll have the fish'), predictions ('It will rain tomorrow'), promises ('I'll call you'). Negative: won't.",
            [
              ["The phone's ringing — I'll get it!", "¡Suena el teléfono — yo contesto!"],
              ["I think she'll like the gift.", "Creo que le gustará el regalo."],
              ["I won't be late, I promise.", "No llegaré tarde, lo prometo."],
            ],
          ),
          EX("Spontaneous English", [
            ["It's cold. I'll close the window.", "Hace frío. Cierro la ventana."],
            ["Don't worry, I'll help you.", "No te preocupes, te ayudo."],
          ]),
          AU("Listen: will in motion", "I'll get it! She'll like the gift. I won't be late.", 0.85),
          N("Will is the same for everyone", "I will, she will, they will — no -s, no am/is/are. The easiest verb form in English."),
        ],
        assignment: {
          title: "Instant decisions",
          instructions:
            "Write five will-sentences reacting to situations: two decisions, two predictions, one promise. Use contractions at least twice.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Make three predictions about next week.", "Promise someone something with 'I'll'."],
      },
      {
        title: "Be Going To",
        blurb: "Plans made before speaking: 'I'm going to study medicine.'",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Form be going to + base verb",
          "Talk about plans and intentions",
          "Predict from present evidence with going to",
        ],
        blocks: [
          H("The planned future"),
          GR(
            "be going to + base verb",
            "am/is/are + going to + verb. Use for: plans decided BEFORE now ('We're going to visit Rome in June') and predictions from visible evidence ('Look at those clouds — it's going to rain').",
            [
              ["I'm going to start a new job in May.", "Voy a empezar un nuevo trabajo en mayo."],
              ["They're going to build a new school here.", "Van a construir una escuela nueva aquí."],
            ],
          ),
          EX("Plans and evidence", [
            ["She's going to learn to drive this year.", "Va a aprender a conducir este año."],
            ["Watch out! That glass is going to fall!", "¡Cuidado! ¡Ese vaso se va a caer!"],
          ]),
          AU("Listen: going to", "I'm going to start a new job. They're going to build a school. It's going to rain.", 0.85),
          W("Decided before or during?", "'I'll have the fish' (deciding NOW). 'I'm going to have the fish' (decided BEFORE). The timing of the decision picks the form."),
        ],
        assignment: {
          title: "My real plans",
          instructions:
            "Write five sentences about your real plans for the next year with be going to, plus one evidence prediction ('Look at... — it's going to...').",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["State three plans for this month.", "Find one piece of visible evidence and predict from it."],
      },
      {
        title: "Present Continuous for Arrangements",
        blurb: "Diary futures: 'I'm meeting Ana at six' — fixed plans with time and place.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Use present continuous for fixed arrangements",
          "Distinguish arrangements from general intentions",
          "Discuss your diary for next week",
        ],
        blocks: [
          H("The diary future"),
          GR(
            "arrangement = am/is/are + -ing + future time",
            "When the plan is FIXED — ticket bought, people informed — English uses the present continuous with a future time: 'I'm flying to Madrid on Friday.'",
            [
              ["I'm meeting the doctor at four tomorrow.", "Veo al médico mañana a las cuatro."],
              ["We're having a party on Saturday — you're invited!", "Hacemos una fiesta el sábado — ¡estás invitado!"],
            ],
          ),
          TB("Three futures compared", ["Form", "Feels like", "Example"], [
            ["will", "deciding now / predicting", "I'll call you tonight."],
            ["going to", "intention decided before", "I'm going to call her tomorrow."],
            ["present continuous", "fixed arrangement in the diary", "I'm calling her at six — it's arranged."],
          ]),
          AU("Listen: the diary", "I'm meeting the doctor at four. We're having a party on Saturday.", 0.85),
          N("Timetable simple", "Buses, trains and lessons run on present simple: 'The train leaves at 7:40.' A fourth future tool, free of charge."),
        ],
        assignment: {
          title: "Next week's diary",
          instructions:
            "Write your diary for next week: four fixed arrangements (continuous + time), one intention (going to), one on-the-spot decision or promise (will).",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Tell someone three arrangements for this week.", "Ask 'What are you doing on Saturday?'"],
      },
      {
        title: "Future Questions",
        blurb: "Will you...? Are you going to...? What are you doing tomorrow? Ask about futures politely.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Build future questions with all three forms",
          "Give short answers in the future",
          "Run a future-planning conversation",
        ],
        blocks: [
          H("Three question machines"),
          TB("Future questions", ["Form", "Question", "Answer"], [
            ["will", "Will you come?", "Yes, I will. / No, I won't."],
            ["going to", "Are you going to travel?", "Yes, I am. / No, I'm not."],
            ["arrangement", "Are you free tomorrow? What are you doing?", "I'm working until six."],
          ]),
          DL(
            "Planning a trip",
            "Two friends plan a weekend away.",
            [
              ["Nia", "Are you going to be free next weekend?"],
              ["Raj", "Yes, I think so. Why?"],
              ["Nia", "We're renting a car and driving to the coast. Will you join us?"],
              ["Raj", "That sounds great! I'll bring the music."],
              ["Nia", "Perfect. I'm booking the car on Friday — are you going to pay your share now?"],
              ["Raj", "Ha! Yes, I am. I promise."],
            ],
          ),
          AU("Listen: planning", "Are you going to be free next weekend? Will you join us? I'm booking the car on Friday.", 0.85),
          N("Three forms in one chat", "Real conversations mix all three futures in seconds. Notice which question form Nia uses each time — and why."),
        ],
        assignment: {
          title: "Future interview",
          instructions:
            "Write a five-question interview about someone's future (weekend, year, dreams) using will, going to and arrangement questions, then answer it yourself.",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Ask someone two future questions today.", "Report which form you used and why."],
      },
      {
        title: "Choosing Your Future and Chapter Review",
        blurb: "One situation, one right form — train the chooser, then take the Chapter 21 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["communication", "writing", "reading"],
        outcomes: [
          "Choose future forms accurately in context",
          "Explain your choice in one line",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The chooser table"),
          TB("Quick decision guide", ["Situation", "Form"], [
            ["deciding while speaking", "will — I'll take it."],
            ["prediction / opinion", "will — It'll be hot."],
            ["earlier plan or intention", "going to — I'm going to study."],
            ["evidence you can see", "going to — It's going to fall."],
            ["fixed arrangement with time/place", "continuous — I'm seeing her at six."],
            ["timetable", "simple — The bus leaves at nine."],
          ]),
          EX("One weekend, three forms", [
            ["On Friday evening I'm meeting friends (arranged). We're going to try the new Korean restaurant (plan). I think I'll love it (prediction).", "El viernes quedo con amigos. Vamos a probar el restaurante coreano nuevo. Creo que me encantará."],
          ]),
          AU("Listen: the three forms", "I'm meeting friends on Friday. We're going to try a new restaurant. I'll love it, I'm sure.", 0.85),
          H("Chapter 21 review"),
          T("Three questions on the future toolbox, then the weekend plan task."),
        ],
        assignment: {
          title: "My next weekend",
          instructions:
            "Describe your next weekend in six sentences using all three future forms at least twice each. Label each sentence: decision, plan or arrangement.",
          minWords: 30,
          maxWords: 95,
        },
        questions: [
          MCQ(
            "The phone is ringing and you decide NOW to answer. You say:",
            [["a", "I'm going to get it."], ["b", "I'll get it."], ["c", "I'm getting it."]],
            "b",
            fb("I'll get it.", "Instant decision at the moment of speaking → will.", "Going to and the continuous both need a decision made before now."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'We ___ a party next Saturday — everything is booked.' Which form fits best?",
            [["a", "will have"], ["b", "are having"], ["c", "have"]],
            "b",
            fb("are having", "A fixed arrangement with time and place → present continuous.", "'Will have' would be a decision made right now."),
            { skill: "grammar", difficulty: "medium" },
          ),
          FB(
            "Complete with going to: 'She ___ (learn) Japanese next year.'",
            "She ___ Japanese next year.",
            ["is going to learn"],
            fb("is going to learn", "An earlier intention → is/am/are going to + base verb.", "Don't forget the be part before 'going to'."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 22,
    title: "Present Perfect Foundations",
    description:
      "The bridge between past and present: have/has + past participle for life experiences (ever, never), recent events (just, already, yet) and unfinished time (since, for). You learn the participles, the three core uses, and the crucial contrast with the past simple.",
    objectives: [
      "Form the present perfect with have/has + past participle",
      "Talk about life experiences with ever/never",
      "Use just, already and yet for recent events",
      "Distinguish present perfect from past simple with time clues",
    ],
    prerequisites: ["CH-19"],
    hours: 3,
    skills: ["grammar", "speaking", "listening"],
    strands: ["communication", "speaking", "listening", "writing", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on participles, ever/never and the perfect/simple contrast. Assignment: write your experience profile with six perfect sentences.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 6,
    module: "a2-past-and-future",
    lessons: [
      {
        title: "Have, Has and Past Participles",
        blurb: "The third column finally arrives: been, seen, done, eaten.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "reading"],
        outcomes: [
          "Build have/has + past participle correctly",
          "Produce the participle of thirty core verbs",
          "Explain what the perfect connects: past action, present relevance",
        ],
        blocks: [
          H("The perfect engine"),
          GR(
            "have/has + past participle",
            "I/you/we/they have + participle. He/she/it has + participle. Regular verbs: worked, played. Irregulars: go→gone, see→seen, do→done, eat→eaten, be→been.",
            [
              ["I have seen that film three times.", "He visto esa película tres veces."],
              ["She has visited Japan.", "Ella ha visitado Japón."],
            ],
          ),
          TB("Core participles", ["Base", "Past", "Participle"], [
            ["go", "went", "gone"],
            ["see", "saw", "seen"],
            ["do", "did", "done"],
            ["eat", "ate", "eaten"],
            ["write", "wrote", "written"],
            ["take", "took", "taken"],
            ["speak", "spoke", "spoken"],
            ["be", "was/were", "been"],
            ["have", "had", "had"],
            ["make", "made", "made"],
          ]),
          AU("Listen: three columns", "go — went — gone. see — saw — seen. do — did — done.", 0.85),
          N("The bridge meaning", "The present perfect looks BACK at the past but stands IN the present: the experience matters NOW. 'I have been to Rome' = Rome is part of who I am today."),
        ],
        assignment: {
          title: "Participle ladder",
          instructions:
            "Write the three columns (base, past, participle) for ten verbs of your choice, then build four present perfect sentences with have/has.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Drill ten three-column sets aloud.", "Write two sentences: one with have, one with has."],
      },
      {
        title: "Life Experiences: Ever and Never",
        blurb: "Have you ever...? The question that opens lives.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Ask experience questions with ever",
          "Answer with never and short answers",
          "Run a full 'Have you ever...?' interview",
        ],
        blocks: [
          H("The experience question"),
          GR(
            "Have you ever + participle?",
            "Ever = at any time in your life. Answers: 'Yes, I have. / No, I haven't. / No, I've never...' The time is never stated — your whole life is the frame.",
            [
              ["Have you ever eaten sushi?", "¿Has comido sushi alguna vez?"],
              ["Yes, I have. / No, I've never eaten sushi.", "Sí. / No, nunca he comido sushi."],
            ],
          ),
          DL(
            "Have you ever...?",
            "Two friends play the experience game.",
            [
              ["Ivy", "Have you ever travelled alone?"],
              ["Sam", "Yes, I have! I went to Thailand by myself last year."],
              ["Ivy", "Wow. Have you ever tried surfing?"],
              ["Sam", "No, I've never tried it. But I've always wanted to."],
              ["Ivy", "Me too! And have you ever spoken English on the phone?"],
              ["Sam", "Yes, many times — for work. It was scary at first!"],
            ],
          ),
          AU("Listen: the experience game", "Have you ever travelled alone? Yes, I have! Have you ever tried surfing? No, I've never tried it.", 0.85),
          W("No past-simple answer", "'Have you ever been to Rome?' answers with have/has: 'Yes, I have' — not 'Yes, I went'. If you add WHEN, the tense flips to simple: 'I went in 2019.'"),
        ],
        assignment: {
          title: "Ever/never interview",
          instructions:
            "Write six 'Have you ever...?' questions and answer each honestly (three yes with a follow-up detail, three no or never).",
          minWords: 30,
          maxWords: 95,
        },
        homework: ["Interview someone with four ever-questions.", "Report one surprising answer."],
      },
      {
        title: "Just, Already, Yet",
        blurb: "Recent news in the present perfect: 'I've just finished!'",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Use just for very recent actions",
          "Use already for sooner than expected and yet in negatives/questions",
          "Give life updates with all three",
        ],
        blocks: [
          H("The news trio"),
          GR(
            "just / already / yet",
            "Just = a moment ago ('I've just eaten'). Already = sooner than expected ('She's already finished!'). Yet = in negatives and questions at the end ('Have you finished yet?' 'Not yet.').",
            [
              ["The film has just started!", "¡La película acaba de empezar!"],
              ["He's already done his homework.", "Ya ha hecho los deberes."],
              ["Has the bus come yet? — Not yet.", "¿Ha venido el autobús? — Todavía no."],
            ],
          ),
          EX("Morning update", [
            ["I've just made coffee. Ana has already left for work. The postman hasn't come yet.", "Acabo de hacer café. Ana ya se fue al trabajo. El cartero no ha venido todavía."],
          ]),
          AU("Listen: the news trio", "I've just made coffee. She's already left. The bus hasn't come yet.", 0.85),
          N("Position matters", "just/already sit between have/has and the participle; yet always goes to the END of the sentence."),
        ],
        assignment: {
          title: "Today's news",
          instructions:
            "Write five 'news update' sentences about today using just (×2), already (×2) and yet (×1).",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Give someone a two-sentence update on your day.", "Use just and yet correctly."],
      },
      {
        title: "Since and For",
        blurb: "Since Monday, for three years: the two words that measure unfinished time.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "communication"],
        outcomes: [
          "Choose since (starting point) or for (duration)",
          "Talk about how long things have been true",
          "Describe your ongoing situations",
        ],
        blocks: [
          H("Point or length?"),
          GR(
            "since vs for",
            "SINCE + a point in time (since 2020, since Monday, since I was a child). FOR + a length of time (for five years, for two hours). Both often pair with the present perfect: 'I have lived here since 2019 / for six years.'",
            [
              ["She has worked here since March.", "Trabaja aquí desde marzo."],
              ["They have been married for twenty years.", "Llevan casados veinte años."],
            ],
          ),
          TB("since or for?", ["since", "for"], [
            ["2018, last summer, my birthday, I was ten", "ten minutes, three days, a long time, ages"],
          ]),
          AU("Listen: measuring time", "since March... for twenty years... since 2018... for a long time.", 0.85),
          W("Not with finished time", "'I have visited Rome in 2019' is wrong — a finished past time pushes you into the simple: 'I visited Rome in 2019.'"),
        ],
        assignment: {
          title: "How long",
          instructions:
            "Write five sentences about things true in your life now, three with since and two with for. ('I have studied English since...')",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Ask someone two 'How long have you...?' questions.", "Check their since/for choice."],
      },
      {
        title: "Present Perfect vs Past Simple and Chapter Review",
        blurb: "The line that separates the tenses: time finished vs time connected to now.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["communication", "writing", "reading", "listening"],
        outcomes: [
          "Choose between perfect and simple by time clues",
          "Switch tense when details are added",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The line"),
          TB("The great divide", ["Present perfect", "Past simple"], [
            ["time NOT finished / not stated", "finished time stated"],
            ["I have been to Paris.", "I went to Paris in 2019."],
            ["ever, never, just, already, yet, since, for", "yesterday, last week, in 2019, when I was young"],
            ["the experience matters now", "the event is history"],
          ]),
          EX("The tense flip", [
            ["Have you seen the new film? — Yes, I have. I saw it last night with Ana.", "¿Has visto la película nueva? — Sí. La vi anoche con Ana."],
          ]),
          AU("Listen: the flip in action", "Have you seen the new film? Yes, I have. I saw it last night.", 0.85),
          H("Chapter 22 review"),
          T("Three questions on the perfect, then the profile task."),
        ],
        assignment: {
          title: "My experience profile",
          instructions:
            "Write your experience profile: six present perfect sentences (two ever/never, two just/already/yet, two since/for) plus one follow-up past simple sentence with WHEN details.",
          minWords: 35,
          maxWords: 110,
        },
        questions: [
          MCQ(
            "'___ you ever ___ a horse?' — complete correctly.",
            [["a", "Did / rode"], ["b", "Have / ridden"], ["c", "Have / rode"]],
            "b",
            fb("Have you ever ridden a horse?", "Ever-questions use have/has + participle (ridden).", "'Rode' is the past simple column — wrong here."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence needs SINCE?",
            [["a", "I've lived here ___ five years."], ["b", "I've lived here ___ 2019."], ["c", "I've lived here ___ a long time."]],
            "b",
            fb("since 2019", "Since takes a starting POINT; for takes a LENGTH of time.", "2019 is a point; five years and a long time are lengths."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Someone asks 'Have you finished?' The honest answer with a finished time detail is:",
            [["a", "Yes, I have finished yesterday."], ["b", "Yes, I have. I finished it an hour ago."], ["c", "Yes, I did finish."]],
            "b",
            fb("Yes, I have. I finished it an hour ago.", "Short perfect answer first; the when-detail switches to past simple.", "Never combine perfect with a stated finished time."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 23,
    title: "Modal Verbs",
    description:
      "The permission, ability, advice and obligation toolkit: can, could, may, might, must, should and have to. Modals add attitude to grammar — what is possible, permitted, necessary or wise — and follow one simple set of rules for all of them.",
    objectives: [
      "Use can/could for ability and polite requests",
      "Use may/might for possibility and permission",
      "Use must and have to for obligation, mustn't for prohibition",
      "Give advice with should",
    ],
    prerequisites: ["CH-22"],
    hours: 2,
    skills: ["grammar", "speaking"],
    strands: ["communication", "speaking", "listening", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on modal meanings and the base-verb rule. Assignment: write a guide to your city using five different modals.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 6,
    module: "a2-modality-and-quantity",
    lessons: [
      {
        title: "Can and Could",
        blurb: "Ability, permission and polite requests: the two friendliest modals.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "pronunciation"],
        outcomes: [
          "Use can for present ability and informal permission",
          "Use could for past ability and polite requests",
          "Ask three levels of politeness",
        ],
        blocks: [
          H("The ability pair"),
          GR(
            "can / could + base verb",
            "Can = present ability ('She can swim') and informal permission ('You can go'). Could = past ability ('When I was ten, I could run fast') and polite requests ('Could you help me?').",
            [
              ["I can speak two languages.", "Hablo dos idiomas."],
              ["Could you open the window, please?", "¿Podrías abrir la ventana?"],
            ],
          ),
          TB("What modals all share", ["Rule", "Example"], [
            ["base verb after — no to, no -s", "She can swim. (not 'cans', not 'to swim')"],
            ["questions flip without do", "Can you swim? (not 'Do you can')"],
            ["negatives with not", "I can't swim."],
          ]),
          AU("Listen: ability and requests", "I can swim. She can drive. Could you help me, please?", 0.85),
          N("Could is softer, not past-only", "'Could you...?' is the polite present request. The past sense only appears with ability contexts ('could read at four')."),
        ],
        assignment: {
          title: "Abilities file",
          instructions:
            "Write five ability sentences (three can, two could-about-the-past) and one polite request with could.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["State three things you can do well.", "Make one could-request to someone today."],
      },
      {
        title: "May and Might",
        blurb: "The possibility dial: may for 50-50, might for maybe.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Express possibility with may and might",
          "Ask formal permission with may",
          "Talk about future uncertainties",
        ],
        blocks: [
          H("Maybe, maybe not"),
          GR(
            "may / might + base verb",
            "Both express possibility ('It may rain' / 'It might rain'). Might often sounds slightly less sure. May also asks formal permission: 'May I come in?'",
            [
              ["I might visit you next week — I'm not sure yet.", "Puede que te visite la semana próxima — aún no estoy seguro."],
              ["May I ask a question?", "¿Puedo hacer una pregunta?"],
            ],
          ),
          EX("Uncertain futures", [
            ["She may be at home, or she might be at work.", "Puede que esté en casa o quizá esté en el trabajo."],
            ["We might not have time tomorrow.", "Puede que no tengamos tiempo mañana."],
          ]),
          AU("Listen: uncertainty", "It might rain. She may be at home. We might not have time.", 0.85),
          W("Maybe is not a modal", "'Maybe I go' is wrong — use the modal IN the verb: 'I might go.' Maybe (adverb) starts the sentence; might lives inside it."),
        ],
        assignment: {
          title: "Uncertainty report",
          instructions:
            "Write five sentences about uncertain plans or predictions using may (×2) and might (×3), including one negative.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Make three uncertain predictions about tomorrow.", "Ask permission formally with 'May I...?' once."],
      },
      {
        title: "Must and Have To",
        blurb: "Necessity with personality: must (the speaker feels it) and have to (the rules say so).",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "reading"],
        outcomes: [
          "Express obligation with must and have to",
          "Express prohibition with mustn't",
          "Explain the must/have to nuance",
        ],
        blocks: [
          H("Two flavours of necessity"),
          GR(
            "must vs have to",
            "Must = the obligation comes from the speaker ('I must call my mother'). Have to = the obligation comes from outside rules ('I have to wear a uniform'). Mustn't = prohibition ('You mustn't smoke here').",
            [
              ["You must see this film — it's wonderful!", "¡Tienes que ver esta película!"],
              ["I have to work on Saturdays.", "Tengo que trabajar los sábados."],
              ["You mustn't use your phone while driving.", "No debes usar el teléfono mientras conduces."],
            ],
          ),
          TB("Obligation table", ["Meaning", "Modal", "Example"], [
            ["personal necessity", "must", "I must study tonight."],
            ["external rule", "have to", "Students have to wear ID cards."],
            ["prohibition", "mustn't", "You mustn't park here."],
            ["no necessity", "don't have to", "You don't have to pay — it's free."],
          ]),
          AU("Listen: obligations", "I must call my mother. I have to work on Saturdays. You mustn't smoke here.", 0.85),
          W("Mustn't is not 'no obligation'", "'You mustn't come' = coming is FORBIDDEN. 'You don't have to come' = coming is optional. Opposite meanings — do not mix them."),
        ],
        assignment: {
          title: "Rules of my life",
          instructions:
            "Write five obligation sentences about your life: two have to (external rules), one must (personal), one mustn't, one don't have to.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["List three rules of your school or workplace.", "Mark them must/mustn't."],
      },
      {
        title: "Should",
        blurb: "Advice with warmth: 'You should rest.'",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Give advice with should/shouldn't",
          "Ask for advice with 'What should I...?'",
          "Run a full advice conversation",
        ],
        blocks: [
          H("The advice engine"),
          GR(
            "should / shouldn't + base verb",
            "Should gives opinions about what is right or wise. 'You should see a doctor.' Question: 'What should I do?'",
            [
              ["You look tired — you should rest.", "Pareces cansado — deberías descansar."],
              ["He shouldn't eat so much sugar.", "No debería comer tanto azúcar."],
            ],
          ),
          DL(
            "The advice column",
            "A friend asks for advice.",
            [
              ["Mara", "I have a problem. I want to learn English, but I don't have time."],
              ["Leo", "Hmm. You should study on your phone — fifteen minutes every morning."],
              ["Mara", "That's a good idea. But my mornings are crazy. What else should I do?"],
              ["Leo", "You could listen to English podcasts on the bus. And you shouldn't study at night — you'll sleep badly."],
              ["Mara", "You're right. Thanks, Leo!"],
            ],
          ),
          AU("Listen: advice", "You should rest. He shouldn't eat so much sugar. What should I do?", 0.85),
          N("Advice vs obligation", "Should = my recommendation; must/have to = real necessity. Doctors say 'You should exercise'; passports say 'You have to show ID'."),
        ],
        assignment: {
          title: "Dear advisor",
          instructions:
            "Write a three-sentence problem (real or invented), then give yourself five pieces of advice with should/shouldn't.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Ask someone 'What should I do this weekend?'", "Give one piece of should-advice to someone."],
      },
      {
        title: "Choosing Your Modal and Chapter Review",
        blurb: "One situation, one modal — the full map, then the Chapter 23 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["communication", "writing", "reading"],
        outcomes: [
          "Choose the correct modal by meaning",
          "Combine modals in natural conversation",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The modal map"),
          TB("Meaning to modal", ["You want to express...", "Say..."], [
            ["ability", "can / could"],
            ["possibility", "may / might"],
            ["permission (formal)", "may"],
            ["polite request", "could"],
            ["personal necessity", "must"],
            ["external rule", "have to"],
            ["prohibition", "mustn't"],
            ["advice", "should"],
          ]),
          EX("A modal conversation", [
            ["A: May I sit here? B: Of course! A: I have to catch a train at six, and it might rain. B: You should take an umbrella. A: Good idea — could you watch my bag for a second?", "A: ¿Puedo sentarme? B: ¡Claro! A: Tengo que tomar un tren a las seis y puede que llueva. B: Deberías llevar paraguas. A: Buena idea — ¿podrías vigilar mi bolso un momento?"],
          ]),
          AU("Listen: modals in conversation", "May I sit here? It might rain. You should take an umbrella. Could you watch my bag?", 0.85),
          H("Chapter 23 review"),
          T("Three questions on modals, then the city guide task."),
        ],
        assignment: {
          title: "Guide to my city",
          instructions:
            "Write a six-sentence mini-guide for visitors to your city using five different modals (can, could, may, might, must, mustn't, have to, should).",
          minWords: 30,
          maxWords: 95,
        },
        questions: [
          MCQ(
            "Which sentence gives ADVICE?",
            [["a", "You must wear a helmet."], ["b", "You should try the local food."], ["c", "You can park here."]],
            "b",
            fb("You should try the local food.", "Should = recommendation or advice.", "'Must' states obligation; 'can' states permission/ability."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "'You ___ smoke in the hospital' means it is FORBIDDEN. Which modal?",
            [["a", "don't have to"], ["b", "mustn't"], ["c", "shouldn't"]],
            "b",
            fb("mustn't", "Mustn't expresses prohibition.", "'Don't have to' means it is optional — the opposite of forbidden."),
            { skill: "grammar", difficulty: "medium" },
          ),
          FB(
            "Complete politely: '___ you help me with this bag, please?' (polite request modal)",
            "___ you help me with this bag, please?",
            ["Could"],
            fb("Could", "'Could you...?' is the standard polite request — softer than 'Can you...?'", "Both are possible, but the politest single word here is 'Could'."),
            { skill: "speaking", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 24,
    title: "Countable and Uncountable Nouns",
    description:
      "The quantity system of English: which nouns can be counted (two apples) and which cannot (water, information), and the quantifier ladder — much, many, few, a few, little, a little, some, any. You learn to order food, describe amounts and stop saying 'informations'.",
    objectives: [
      "Classify nouns as countable or uncountable",
      "Choose much vs many correctly",
      "Use few/a few and little/a little with the right nuance",
      "Complete the some/any system from Chapter 16",
    ],
    prerequisites: ["CH-23"],
    hours: 2,
    skills: ["grammar", "vocabulary", "speaking"],
    strands: ["vocabulary", "communication", "speaking", "writing"],
    assessment:
      "Chapter review quiz: 3 questions on noun classes and quantifiers. Assignment: write a market shopping dialogue with six quantifier uses.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 6,
    module: "a2-modality-and-quantity",
    lessons: [
      {
        title: "Countable vs Uncountable",
        blurb: "Apples can be counted; rice cannot. The class decides the grammar.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading", "writing"],
        outcomes: [
          "Explain the difference with examples",
          "Classify thirty common nouns correctly",
          "Avoid the 'informations / advices' trap",
        ],
        blocks: [
          H("Two noun families"),
          GR(
            "countable vs uncountable",
            "Countable nouns have a plural (an apple, two apples). Uncountable nouns are substances, liquids, collections and abstract ideas with NO plural: water, rice, money, information, advice, music.",
            [
              ["I bought three books. (countable)", "Compré tres libros."],
              ["I need some information. (uncountable)", "Necesito información."],
            ],
          ),
          TB("Common uncountables", ["Category", "Words"], [
            ["liquids", "water, milk, coffee, tea"],
            ["food masses", "rice, bread, cheese, sugar"],
            ["abstract", "information, advice, time, money, music, homework"],
          ]),
          W("Never 'informations'", "'Information', 'advice', 'homework', 'furniture' and 'news' are uncountable: no plural, no 'a'. Say 'a piece of advice', 'some good news'."),
          AU("Listen: count or not?", "two apples... some rice... three books... some water... an idea... some information.", 0.85),
        ],
        assignment: {
          title: "The sorter",
          instructions:
            "Sort these nouns into countable/uncountable: bread, apple, information, book, water, advice, chair, music, money, egg. Then write one sentence using a word from each column.",
          minWords: 12,
          maxWords: 50,
        },
        homework: ["Open your kitchen cupboard: name five countable and five uncountable items.", "Say them aloud with a number or 'some'."],
      },
      {
        title: "Much and Many",
        blurb: "Many countable friends, much uncountable time.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Use many + plurals and much + uncountables",
          "Ask How much / How many questions correctly",
          "Talk about prices and amounts",
        ],
        blocks: [
          H("The quantity pair"),
          GR(
            "many vs much",
            "Many + plural countable (many friends, many books). Much + uncountable (much time, much money). Questions: 'How many...?' / 'How much...?'",
            [
              ["How many brothers do you have?", "¿Cuántos hermanos tienes?"],
              ["How much does it cost?", "¿Cuánto cuesta?"],
            ],
          ),
          TB("The question chooser", ["Ask about", "Use", "Example"], [
            ["numbers of things", "How many", "How many eggs do we need?"],
            ["amounts, prices", "How much", "How much milk? How much is it?"],
          ]),
          EX("Kitchen maths", [
            ["We don't have much milk, but we have many eggs.", "No tenemos mucha leche, pero tenemos muchos huevos."],
          ]),
          AU("Listen: how much, how many", "How many brothers do you have? How much does it cost? How much milk?", 0.85),
          N("Much in statements", "In positives, English prefers 'a lot of': 'I have a lot of work' (not 'much work'). Much shines in negatives and questions."),
        ],
        assignment: {
          title: "Amount interview",
          instructions:
            "Write four How much and four How many questions about someone's life, then answer them honestly.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Ask two How much/How many questions at a shop.", "Notice which nouns take which."],
      },
      {
        title: "Few, A Few, Little, A Little",
        blurb: "The nuance pair: 'a few friends' sounds positive, 'few friends' sounds sad.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "vocabulary", "reading"],
        outcomes: [
          "Use few/a few with countables and little/a little with uncountables",
          "Hear the positive vs negative nuance",
          "Express small quantities with precision",
        ],
        blocks: [
          H("The nuance machine"),
          GR(
            "the four small quantities",
            "A FEW (+ plural) and A LITTLE (+ uncountable) = some, a positive small amount. FEW and LITTLE (without a) = almost none, negative feeling.",
            [
              ["I have a few good friends. (positive: I have some)", "Tengo unos pocos buenos amigos."],
              ["I have few friends. (negative: almost none)", "Tengo pocos amigos."],
              ["There's a little milk left — enough for your coffee.", "Queda un poco de leche — suficiente."],
              ["There's little hope. (almost none)", "Hay poca esperanza."],
            ],
          ),
          TB("The grid", ["", "Countable", "Uncountable"], [
            ["positive small amount", "a few friends", "a little time"],
            ["almost none (negative)", "few friends", "little time"],
          ]),
          AU("Listen: the nuance", "I have a few friends... I have few friends... a little money... little money.", 0.85),
          N("The 'a' changes the mood", "Adding 'a' adds hope: 'a little' = some; 'little' = hardly any. Native speakers hear the emotion instantly — so will you."),
        ],
        assignment: {
          title: "Nuance pairs",
          instructions:
            "Write four sentence pairs contrasting the mood: a few/few and a little/little, then explain the difference in one sentence.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Say two true 'a little' sentences about today.", "Say one 'little' sentence about something rare."],
      },
      {
        title: "Some, Any and Quantifier Review",
        blurb: "The complete quantity map: some, any and the whole ladder together.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "vocabulary"],
        outcomes: [
          "Use the full quantifier ladder accurately",
          "Order food with quantities naturally",
          "Self-correct quantity errors",
        ],
        blocks: [
          H("The full ladder"),
          TB("Quantity ladder", ["Quantity", "Countable", "Uncountable"], [
            ["large", "many / a lot of", "much / a lot of"],
            ["small positive", "a few", "a little"],
            ["small negative", "few", "little"],
            ["unspecified", "some (+), any (−/?)", "some (+), any (−/?)"],
          ]),
          DL(
            "At the market",
            "A customer shops for a dinner.",
            [
              ["Seller", "Good morning! What can I get you?"],
              ["Buyer", "I need a few apples, some rice and a little cheese."],
              ["Seller", "Sure. We don't have many apples left — is five OK?"],
              ["Buyer", "Perfect. And do you have any fresh bread?"],
              ["Seller", "No, I'm afraid there isn't any bread today. But there's a lot of rice."],
              ["Buyer", "Great — one kilo, please. How much is everything?"],
            ],
          ),
          AU("Listen: at the market", "I need a few apples, some rice and a little cheese. Do you have any fresh bread?", 0.85),
          N("Fluency through chunks", "'A few', 'a little', 'a lot of' are spoken as single units. Practise them as rhythm, not as grammar tables."),
        ],
        assignment: {
          title: "Market dialogue",
          instructions:
            "Write a six-line market or shop dialogue using at least six different quantity words correctly.",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Describe your fridge: three sentences with quantifiers.", "Correct 'I have many informations' out loud."],
      },
      {
        title: "Food and Amounts in Real Life and Chapter Review",
        blurb: "Real-world quantity English: recipes, diets and shopping, then the Chapter 24 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["vocabulary", "writing"],
        strands: ["vocabulary", "writing", "communication", "reading"],
        outcomes: [
          "Follow and write a simple recipe with quantities",
          "Describe a diet or routine with quantifiers",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Recipe English"),
          EX(
            "Simple pancakes",
            [
              ["You need a few ingredients: one egg, a little sugar, a cup of flour and some milk. Mix everything with a spoon — you don't need much time, only five minutes. Heat a little butter in a pan. Pour in some of the mixture. How many pancakes? About six. Don't use much oil — they shouldn't be greasy. Serve with a little honey or a few berries.", "Necesitas pocos ingredientes: un huevo, un poco de azúcar, una taza de harina y algo de leche. Mezcla todo con una cuchara — no necesitas mucho tiempo, solo cinco minutos. Calienta un poco de mantequilla en una sartén. Vierte un poco de la mezcla. ¿Cuántos pancakes? Unos seis. No uses mucho aceite. Sirve con un poco de miel o unas pocas fresas."],
            ],
          ),
          AU("Listen: recipe quantities", "a few ingredients... a little sugar... some milk... not much time... a few berries.", 0.85),
          TB("Self-check", ["I said...", "Correct form"], [
            ["many informations", "a lot of information"],
            ["a few water", "a little water"],
            ["much books", "many books"],
          ]),
          H("Chapter 24 review"),
          T("Three questions on quantity, then the recipe task."),
        ],
        assignment: {
          title: "My simple recipe",
          instructions:
            "Write a simple recipe (real or invented) in six to eight sentences using: a few, a little, some, how much or how many, and much/many in a negative.",
          minWords: 35,
          maxWords: 110,
        },
        questions: [
          MCQ(
            "Which noun is UNCOUNTABLE?",
            [["a", "egg"], ["b", "information"], ["c", "chair"]],
            "b",
            fb("information", "Information has no plural and takes no 'a'.", "Eggs and chairs can be counted."),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          MCQ(
            "'How ___ sugar do you want?' — choose the quantifier.",
            [["a", "many"], ["b", "much"], ["c", "few"]],
            "b",
            fb("much", "Sugar is uncountable → how much.", "'How many' needs a countable plural."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence means a POSITIVE small amount?",
            [["a", "I have little money."], ["b", "I have a little money."], ["c", "I have few money."]],
            "b",
            fb("I have a little money.", "'A little' = some, enough to mention positively.", "'Little' = almost none; 'few money' is impossible — money is uncountable."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),
];
