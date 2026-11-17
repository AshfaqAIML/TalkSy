/**
 * Core English Programme — Batch 08 (Chapters 29–32, Level B1).
 *
 * Intermediate English: tense comparison, past perfect and narrative
 * tenses, continuous and perfect forms, conditionals.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, MCQ, MATCH, N, REORD, TB, T, W, fb } from "../types";

export const batch08: ChapterSpec[] = [
  chapter("b1", {
    number: 29,
    title: "Tense Comparison and Usage",
    description:
      "The intermediate tense map: present tenses compared, past tenses compared, future forms compared, and the deep contrast between present perfect and past simple. You stop translating tenses and start choosing them by meaning.",
    objectives: [
      "Contrast present simple and continuous by function",
      "Contrast the four past tools in one narrative",
      "Choose between the four future forms by evidence",
      "Master the present perfect vs past simple line with time clues",
    ],
    prerequisites: ["CH-22", "CH-28"],
    hours: 2,
    skills: ["grammar", "writing", "speaking"],
    strands: ["writing", "communication", "reading", "speaking"],
    assessment:
      "Chapter review quiz: 3 questions on tense selection. Assignment: one story rewritten with conscious tense choices explained.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 8,
    module: "b1-mastering-time",
    lessons: [
      {
        title: "Present Tenses Compared",
        blurb: "One moment, four cameras: simple, continuous, perfect, perfect continuous at a glance.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Explain the four present-tense functions in one sentence each",
          "Choose the right present tense by situation",
          "Self-correct present-tense errors",
        ],
        blocks: [
          H("The four presents"),
          TB("Present tense map", ["Tense", "Job", "Example"], [
            ["simple", "habits, facts", "I work in a bank."],
            ["continuous", "happening now / temporary", "I am working from home this week."],
            ["perfect", "past action, present result", "I have finished the report — it's on your desk."],
            ["perfect continuous", "duration up to now", "I have been working here for six months."],
          ]),
          EX("One day, four tenses", [
            ["I usually cycle to work, but this week I'm taking the bus because my bike is being repaired. I have taken the bus twice, and I have been enjoying the slow mornings.", "Normalmente voy en bici al trabajo, pero esta semana tomo el autobús porque están arreglando mi bici. He tomado el autobús dos veces y he disfrutado de las mañanas tranquilas."],
          ]),
          AU("Listen: four presents", "I usually cycle. I'm taking the bus this week. I have taken it twice. I have been enjoying the slow mornings.", 0.9),
          N("Perfect continuous preview", "'Have been working' measures duration flowing up to now. Chapter 31 gives it a full lesson — meet it here as the fourth camera."),
        ],
        assignment: {
          title: "Four cameras on my week",
          instructions:
            "Write four sentences about your current life, one per present tense, and label each tense.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Explain the four presents to someone in your own words.", "Find one example of each in a text."],
      },
      {
        title: "Past Tenses Compared",
        blurb: "The storytelling toolbox: simple for events, continuous for scenes, perfect for backstory.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Assign each past tense its narrative job",
          "Analyse a story's tense choices",
          "Write a story with deliberate layering",
        ],
        blocks: [
          H("Three narrative layers"),
          TB("Past tense jobs", ["Tense", "Narrative job", "Example"], [
            ["past simple", "the events — what happened", "The lights went out."],
            ["past continuous", "the scene — what was happening", "We were eating dinner."],
            ["past perfect", "the backstory — what had happened before", "The storm had damaged the power lines."],
          ]),
          EX(
            "A layered paragraph",
            [
              ["The party was a disaster. We were celebrating quietly when the music suddenly stopped. The neighbours had called the police an hour earlier, and two officers arrived at eleven.", "La fiesta fue un desastre. Estábamos celebrando tranquilamente cuando la música se detuvo de repente. Los vecinos habían llamado a la policía una hora antes y dos agentes llegaron a las once."],
            ],
          ),
          AU("Listen: the three layers", "We were celebrating quietly when the music stopped. The neighbours had called the police earlier.", 0.9),
          N("Layer order ≠ time order", "The past perfect action (had called) happened FIRST but is often told LAST. Tense lets you control time without controlling word order."),
        ],
        assignment: {
          title: "Layer analysis",
          instructions:
            "Write a five-sentence story using all three past tenses, then label each sentence with its narrative job (event, scene, backstory).",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Rewrite yesterday in three layers.", "Mark where the timeline jumps."],
      },
      {
        title: "Present Perfect vs Past Simple: The Deep Dive",
        blurb: "The tense line that separates intermediate learners — time zones, not grammar tables.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Decide perfect vs simple by time zone, not translation",
          "Handle news vs history questions",
          "Explain a tense choice in one sentence",
        ],
        blocks: [
          H("Two time zones"),
          TB("The dividing line", ["Present perfect (unfinished/connected zone)", "Past simple (finished zone)"], [
            ["today, this week, this year, ever, yet, since", "yesterday, last week, in 2020, when I was ten"],
            ["I have eaten twice today.", "I ate three times yesterday."],
            ["She has just left. (news)", "She left at noon. (history)"],
          ]),
          EX("Zone flipping", [
            ["Have you seen Ana today? ... Did you see Ana yesterday?", "¿Has visto a Ana hoy? ... ¿Viste a Ana ayer?"],
            ["I've been busy this week. / I was busy last week.", "He estado ocupada esta semana. / Estuve ocupada la semana pasada."],
          ]),
          AU("Listen: the zones", "Have you seen Ana today? Did you see her yesterday? I've been busy this week.", 0.9),
          W("Today can flip", "At 9 a.m. 'I have eaten breakfast today' is wrong (the day is young but breakfast hasn't happened). At noon it's right. The zone rule is about the time PERIOD being unfinished — and about whether it includes now."),
        ],
        assignment: {
          title: "Zone pairs",
          instructions:
            "Write four sentence pairs that flip between the zones (perfect for unfinished time, simple for finished time) about your real life, and explain one choice in a final sentence.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Interview someone: three perfect questions, three simple follow-ups.", "Note the zone of each."],
      },
      {
        title: "Choosing the Right Tense and Chapter Review",
        blurb: "The full twelve-tense map in one lesson, then the Chapter 29 review.",
        minutes: 30,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Navigate the full tense map with confidence",
          "Justify any tense choice in one line",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The tense map"),
          TB("Time × aspect map", ["", "Simple", "Continuous", "Perfect"], [
            ["Past", "worked (event)", "was working (scene)", "had worked (backstory)"],
            ["Present", "work (habit)", "am working (now)", "have worked (experience/result)"],
            ["Future", "will work (prediction)", "will be working (in progress then)", "will have worked (finished by then)"],
          ]),
          EX("Justification practice", [
            ["'By June, I will have studied English for two years.' — perfect future: measuring completion against a future point.", "En junio, habré estudiado inglés dos años."],
          ]),
          AU("Listen: the map in sentences", "I worked. I was working. I had worked. I work. I am working. I have worked. I will work.", 0.9),
          H("Chapter 29 review"),
          T("Three tense-choice questions, then the justification task."),
        ],
        assignment: {
          title: "Tense autobiography",
          instructions:
            "Write your English-learning story in eight sentences using eight DIFFERENT tense forms from the map. Under each sentence, write a four-word justification (e.g. 'finished time: 2019').",
          minWords: 45,
          maxWords: 140,
        },
        questions: [
          MCQ(
            "'___ Ana today?' — the correct question is:",
            [["a", "Did you see"], ["b", "Have you seen"], ["c", "Do you see"]],
            "b",
            fb("Have you seen Ana today?", "Today is an unfinished time zone → present perfect.", "Finished times (yesterday) take the simple."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "In 'We were eating when the lights went out', 'were eating' is:",
            [["a", "the event"], ["b", "the scene/background"], ["c", "the backstory"]],
            "b",
            fb("the scene/background", "Past continuous paints what was in progress; the simple carries the interrupting event.", "Backstory is the past perfect's job."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence is about duration UP TO NOW?",
            [["a", "I work in Berlin."], ["b", "I have worked in Berlin.",], ["c", "I have been working in Berlin for a year."]],
            "c",
            fb("I have been working in Berlin for a year.", "Perfect continuous measures ongoing duration flowing into the present.", "The perfect (b) states the experience without measuring it."),
            { skill: "grammar", difficulty: "hard" },
          ),
        ],
      },
    ],
  }),

  chapter("b1", {
    number: 30,
    title: "Past Perfect and Narrative Tenses",
    description:
      "The backstory tense and full narrative control: past perfect (had done) for earlier past, past perfect continuous for earlier duration, and the sequencing tools that let you tell stories with flashbacks, reveals and perfect timing.",
    objectives: [
      "Form and use the past perfect for earlier past actions",
      "Use the past perfect continuous for earlier durations",
      "Sequence a narrative with before/after/by the time",
      "Tell a story with a flashback",
    ],
    prerequisites: ["CH-29"],
    hours: 2,
    skills: ["grammar", "writing", "speaking"],
    strands: ["writing", "communication", "reading", "speaking", "listening"],
    assessment:
      "Chapter review quiz: 3 questions on past perfect forms and sequencing. Assignment: a story with a deliberate flashback.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 8,
    module: "b1-mastering-time",
    lessons: [
      {
        title: "Past Perfect",
        blurb: "Had + participle: the past inside the past.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Form past perfect with regular and irregular participles",
          "Explain 'earlier past' with a timeline",
          "Use past perfect for cause and backstory",
        ],
        blocks: [
          H("The past of the past"),
          GR(
            "had + past participle",
            "The past perfect describes an action completed BEFORE another past moment: 'When I arrived, the train had already left.' First: train leaves. Later: I arrive. Told from the later point.",
            [
              ["She was sad because she had lost her wallet.", "Estaba triste porque había perdido la cartera."],
              ["By the time we ate, the children had finished everything.", "Cuando comimos, los niños ya habían terminado todo."],
            ],
          ),
          EX("Backstory in stories", [
            ["He finally understood the message. His sister had changed the locks.", "Por fin entendió el mensaje. Su hermana había cambiado las cerraduras."],
          ]),
          AU("Listen: the earlier past", "When I arrived, the train had already left. She had lost her wallet.", 0.9),
          N("The earlier-later test", "Draw the timeline: two past events. If the one you're describing happened first, and you're standing at the second one looking back — that's past perfect."),
        ],
        assignment: {
          title: "Earlier past",
          instructions:
            "Write five sentences using past perfect, each pairing an earlier action with a later past moment ('When I got home, someone had...').",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Tell the story of a delay using had + participle.", "Find two past perfects in a news article."],
      },
      {
        title: "Earlier and Later: Sequencing Tools",
        blurb: "By the time, before, after, already, just — the connectors that order past worlds.",
        minutes: 20,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Sequence events with by the time / before / after",
          "Position already and just with the perfect",
          "Compress timelines into single sentences",
        ],
        blocks: [
          H("The sequencer set"),
          TB("Sequencing frames", ["Frame", "Meaning", "Example"], [
            ["By the time + past, ...had done", "before that point", "By the time she called, I had gone to bed."],
            ["After + had done, ... did", "order made explicit", "After he had apologised, we talked."],
            ["had just done when...", "seconds before", "I had just sat down when the phone rang."],
            ["had already done", "earlier than expected", "The film had already started."],
          ]),
          EX("Compressed timelines", [
            ["By the time the ambulance arrived, the driver had disappeared.", "Cuando llegó la ambulancia, el conductor ya había desaparecido."],
          ]),
          AU("Listen: sequencers", "By the time she called, I had gone to bed. I had just sat down when the phone rang.", 0.9),
          W("Before/after can carry either tense", "'Before I ate, I had washed my hands' and 'Before I had eaten, I washed...' — the first is natural. When before/after already makes the order clear, simple + simple is often enough: 'Before I ate, I washed my hands.' Past perfect shines when order is NOT obvious."),
        ],
        assignment: {
          title: "Sequence compression",
          instructions:
            "Take a three-event past situation and write it three ways: with by the time, with after + past perfect, and with just/already. Label the timeline of each.",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["Tell the story of your morning in two past-perfect sentences.", "Use 'by the time' once."],
      },
      {
        title: "Past Perfect Continuous and Narrative Flow",
        blurb: "Had been waiting for hours — earlier actions that RUN UP TO a past moment.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Form past perfect continuous (had been + -ing)",
          "Explain duration-before-a-past-moment",
          "Write atmospheric story openings",
        ],
        blocks: [
          H("Duration into the past"),
          GR(
            "had been + verb-ing",
            "The past perfect continuous measures an action that was in progress up to (or just before) a past moment: 'Her eyes were red — she had been crying.'",
            [
              ["They had been waiting for two hours when the gates opened.", "Llevaban dos horas esperando cuando abrieron las puertas."],
              ["I had been studying all night, so I was exhausted.", "Había estado estudiando toda la noche, así que estaba agotado."],
            ],
          ),
          EX(
            "Atmospheric opening",
            [
              ["It had been raining for three days, and the river was dangerously high. Everyone in the village had been watching the water, waiting for news. Then, at dawn, the bridge collapsed.", "Llevaba tres días lloviendo y el río estaba peligrosamente alto. Todo el pueblo había estado vigilando el agua, esperando noticias. Entonces, al amanecer, el puente colapsó."],
            ],
          ),
          AU("Listen: duration into the past", "It had been raining for three days. She had been crying. They had been waiting for two hours.", 0.9),
          N("Visible results", "The perfect continuous loves visible evidence: red eyes, wet streets, tired faces. It explains what you could SEE at the past moment."),
        ],
        assignment: {
          title: "Evidence story",
          instructions:
            "Write a four-sentence story opening where one visible result (at a past moment) is explained by a past perfect continuous, and one earlier event is revealed with past perfect.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Explain two past 'visible results' with had been + -ing.", "Say them aloud with feeling."],
      },
      {
        title: "Narrative Sequencing and Chapter Review",
        blurb: "Tell a complete story with flashback and reveal, then the Chapter 30 review.",
        minutes: 25,
        difficulty: 3,
        skills: ["writing", "speaking"],
        strands: ["writing", "communication", "speaking", "listening", "reading"],
        outcomes: [
          "Tell a story out of chronological order with control",
          "Mix all four narrative tenses deliberately",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The flashback story"),
          EX(
            "The wallet",
            [
              ["When Maya opened her locker, her wallet was gone. She had kept it there every day for a year, and nothing had ever disappeared before. That morning, a new cleaner had been working on her floor — she remembered seeing his cart at 8 a.m. While she was standing there, frozen, her phone buzzed. It was a message from the bank: someone had been trying to use her card for twenty minutes. She ran.", "Cuando Maya abrió su taquilla, su cartera había desaparecido. La había guardado allí cada día durante un año y nunca había desaparecido nada. Esa mañana, un limpiador nuevo había estado trabajando en su planta — recordaba haber visto su carrito a las 8. Mientras estaba allí paralizada, su teléfono vibró. Era un mensaje del banco: alguien había estado intentando usar su tarjeta durante veinte minutos. Corrió."],
            ],
            "Backstory (had kept, had been trying) arrives in flashback while the live scene (was standing, ran) carries the plot.",
          ),
          AU("Listen: the wallet opening", "When Maya opened her locker, her wallet was gone. She had kept it there every day for a year.", 0.9),
          H("Chapter 30 review"),
          T("Three questions on narrative tenses, then the flashback task."),
        ],
        assignment: {
          title: "My flashback story",
          instructions:
            "Write a five-to-seven-sentence story with a flashback: open at a dramatic past moment, reveal two earlier facts with past perfect, and include one past perfect continuous for atmosphere.",
          minWords: 40,
          maxWords: 130,
        },
        questions: [
          MCQ(
            "'When I arrived, they ___ already ___. (eat)'",
            [["a", "have / eaten"], ["b", "had / eaten"], ["c", "were / eating"]],
            "b",
            fb("had already eaten", "Earlier past action before a past arrival → past perfect.", "The arrival is past simple; the eating happened before it."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'Her shoes were wet because she ___ in the rain.'",
            [["a", "had walked"], ["b", "had been walking"], ["c", "was walking"]],
            "b",
            fb("had been walking", "A visible result explained by an activity running up to that past moment → past perfect continuous.", "'Had walked' states a completed earlier action without the running-up-to nuance."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "Which frame means 'before that point'?",
            [["a", "By the time"], ["b", "While"], ["c", "As soon as"]],
            "a",
            fb("By the time", "By the time + past marks a deadline in the past before which something had (already) happened.", "'While' marks simultaneity; 'as soon as' marks immediate sequence."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("b1", {
    number: 31,
    title: "Continuous and Perfect Forms",
    description:
      "Aspect mastery: the present perfect continuous for ongoing measurement, the past perfect continuous for earlier measurement, for and since precision, contrastive usage across all perfect forms, and the tense errors that betray learners — with their fixes.",
    objectives: [
      "Use the present perfect continuous to measure ongoing activities",
      "Contrast perfect and perfect continuous by result vs duration",
      "Use for/since and how long with precision",
      "Diagnose and fix the six classic perfect-form errors",
    ],
    prerequisites: ["CH-30"],
    hours: 2,
    skills: ["grammar", "writing"],
    strands: ["writing", "communication", "reading", "listening"],
    assessment:
      "Chapter review quiz: 3 questions on perfect contrasts and error correction. Assignment: a learning-log paragraph using three perfect forms correctly.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 8,
    module: "b1-mastering-time",
    lessons: [
      {
        title: "Present Perfect Continuous",
        blurb: "How long have you been learning? The tense that measures rivers, not photos.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Form have/has been + -ing correctly",
          "Ask and answer How long questions",
          "Report ongoing activities with duration",
        ],
        blocks: [
          H("The measuring tense"),
          GR(
            "have/has been + verb-ing",
            "The present perfect continuous measures an activity that started before now and is still running (or just stopped): 'I have been learning English for two years.' Signal: for, since, how long, all day, lately.",
            [
              ["How long have you been waiting? — Twenty minutes.", "¿Cuánto llevas esperando? — Veinte minutos."],
              ["She has been working there since March.", "Trabaja allí desde marzo."],
              ["It has been raining all day.", "Lleva lloviendo todo el día."],
            ],
          ),
          EX("Lately report", [
            ["I've been reading a lot lately, and I've been sleeping better.", "Últimamente he estado leyendo mucho y he estado durmiendo mejor."],
          ]),
          AU("Listen: measuring up to now", "How long have you been waiting? I've been learning English for two years. It has been raining all day.", 0.9),
          N("Some verbs resist -ing", "Know, have (own), be stay simple even with duration: 'I have known her for years', not 'have been knowing'."),
        ],
        assignment: {
          title: "My duration report",
          instructions:
            "Write five sentences about ongoing things in your life with have been + -ing, using for, since, all day and lately.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Ask two people 'How long have you been...?' questions.", "Note their answers."],
      },
      {
        title: "Result vs Duration: Perfect vs Perfect Continuous",
        blurb: "'I've painted the kitchen' (done!) vs 'I've been painting' (still at it, or just stopped).",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Choose perfect (result) vs perfect continuous (process)",
          "Explain the choice with the 'finished?' test",
          "Describe work, study and projects with precision",
        ],
        blocks: [
          H("Two views of the same afternoon"),
          TB("Result vs process", ["Form", "Focus", "Example", "Implication"], [
            ["perfect", "result/completion", "I've painted the kitchen.", "It's finished."],
            ["perfect continuous", "process/duration", "I've been painting the kitchen.", "Maybe unfinished; definitely the activity matters"],
            ["perfect", "quantity done", "I've read fifty pages.", "counted achievement"],
            ["perfect continuous", "time spent", "I've been reading all evening.", "clocked duration"],
          ]),
          EX("The pair in speech", [
            ["A: You look tired. B: I've been moving furniture all morning. A: Nice — have you finished? B: Almost — I've done three rooms.", "A: Pareces cansado. B: Llevo toda la mañana moviendo muebles. A: Bien, ¿has terminado? B: Casi — he hecho tres habitaciones."],
          ]),
          AU("Listen: process then result", "I've been moving furniture all morning. I've done three rooms.", 0.9),
          N("The hair test", "Paint on your hands → perfect continuous (activity evidence). Clean kitchen → perfect (result). What would a camera see?"),
        ],
        assignment: {
          title: "Process and result pairs",
          instructions:
            "Write three pairs: each pair describes one activity with its process (perfect continuous) and its result/quantity (perfect).",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["Describe a current project in two sentences: process + result.", "Swap which comes first."],
      },
      {
        title: "Contrastive Usage and Common Errors",
        blurb: "The six errors that scream 'learner' — and their one-line fixes.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Identify the six classic perfect-form errors",
          "Fix each error with a rule-based reason",
          "Self-edit a paragraph for perfect-form accuracy",
        ],
        blocks: [
          H("The error clinic"),
          TB("Six classic errors and fixes", ["Error", "Fix", "Rule"], [
            ["I have seen him yesterday.", "I saw him yesterday.", "Finished time → past simple"],
            ["I am here since Monday.", "I have been here since Monday.", "Since + present = perfect"],
            ["She has went home.", "She has gone home.", "Perfect uses the participle"],
            ["How long do you learn English?", "How long have you been learning English?", "Duration up to now → perfect continuous"],
            ["I've been knowing her for years.", "I've known her for years.", "State verbs take the simple perfect"],
            ["He has been finished at five.", "He finished at five.", "No 'been' with simple completion"],
          ]),
          EX("Self-editing", [
            ["Learner text: 'I am studying English since three years and I have went to two courses.' → 'I have been studying English for three years and I have been to two courses.'", "Texto del estudiante corregido."],
          ]),
          AU("Listen: corrected sentences", "I have been studying English for three years. I have been to two courses.", 0.9),
          W("Since vs for, forever", "Since + starting point (since 2023). For + length (for three years). If you mix them, everything downstream collapses — check this pair first."),
        ],
        assignment: {
          title: "Error hunt",
          instructions:
            "Fix the six errors in this text and rewrite it correctly: 'I am working here since January. I have saw many changes. How long are you knowing this city? I have been visited it twice last year. Since three years I am learning English.'",
          minWords: 25,
          maxWords: 80,
        },
        homework: ["Record yourself speaking for one minute about your life.", "Listen back for perfect-form errors only."],
      },
      {
        title: "All Perfect Forms Together and Chapter Review",
        blurb: "Present, past and future perfect side by side, then the Chapter 31 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading", "listening"],
        outcomes: [
          "Deploy all perfect forms in one coherent text",
          "Explain each choice in one line",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The perfect family portrait"),
          EX(
            "The renovation",
            [
              ["By next month, we will have lived in this flat for ten years. We have been renovating it since March — slowly, because we both work. So far, we have finished the kitchen and the bathroom. Before we started, the flat had looked tired for years: cracks, old paint, broken cupboards. We had been saving money for a long time before we could begin. Friends ask how we keep going. The answer: we have been taking photos, and the progress keeps us motivated.", "El mes que viene habremos vivido diez años en este piso. Lo estamos reformando desde marzo — despacio, porque los dos trabajamos. Hasta ahora hemos terminado la cocina y el baño. Antes de empezar, el piso llevaba años cansado: grietas, pintura vieja, armarios rotos. Habíamos estado ahorrando mucho tiempo antes de poder empezar. Los amigos preguntan cómo seguimos. La respuesta: hemos estado haciendo fotos, y el progreso nos motiva."],
            ],
            "Five perfect forms, one story: future perfect, present perfect continuous, present perfect, past perfect, past perfect continuous.",
          ),
          AU("Listen: the renovation", "We will have lived here for ten years. We have been renovating since March. We had been saving for a long time.", 0.9),
          H("Chapter 31 review"),
          T("Three questions on the perfect family, then the learning-log task."),
        ],
        assignment: {
          title: "My learning log",
          instructions:
            "Write a learning-log paragraph (six to eight sentences) about studying English: how long (perfect continuous), what you have achieved (perfect), what had happened before you started (past perfect), and what will be true by next year (future perfect).",
          minWords: 40,
          maxWords: 130,
        },
        questions: [
          MCQ(
            "'How long ___ English?' — the natural question is:",
            [["a", "do you learn"], ["b", "have you been learning"], ["c", "are you learning"]],
            "b",
            fb("have you been learning", "Duration from past to now → present perfect continuous.", "The question asks for a measurement, not a current activity."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence focuses on the RESULT?",
            [["a", "I've been writing emails all morning."], ["b", "I've written ten emails."], ["c", "I was writing emails."]],
            "b",
            fb("I've written ten emails.", "The perfect counts a finished quantity — the result.", "The perfect continuous measures the time spent writing."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "Which sentence contains an ERROR?",
            [["a", "I've known her since 2020."], ["b", "She has went home."], ["c", "We've been waiting for an hour."]],
            "b",
            fb("She has went home — error.", "The perfect needs the participle: has GONE home.", "The other two are correct forms."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("b1", {
    number: 32,
    title: "Conditional Sentences",
    description:
      "The conditional system: zero (facts), first (real futures), second (unreal presents) — plus unless, real vs unreal situations and the everyday conditional phrases native speakers actually use. The third conditional arrives in B2.",
    objectives: [
      "Build and use zero conditionals for facts and rules",
      "Build first conditionals for real future possibilities",
      "Build second conditionals for unreal present/future situations",
      "Use unless and the everyday conditional set",
    ],
    prerequisites: ["CH-31"],
    hours: 3,
    skills: ["grammar", "speaking", "writing"],
    strands: ["communication", "speaking", "writing", "reading", "listening"],
    assessment:
      "Chapter review quiz: 3 questions on the three conditional types. Assignment: a 'my three futures' paragraph using all three patterns.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 8,
    module: "b1-voice-and-speech",
    lessons: [
      {
        title: "Zero and First Conditionals",
        blurb: "Facts that never change (if + present, present) and real futures (if + present, will).",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "reading"],
        outcomes: [
          "Build zero conditionals for rules and facts",
          "Build first conditionals for real possibilities",
          "Explain the will-in-the-if-clause error",
        ],
        blocks: [
          H("Two real conditionals"),
          GR(
            "Zero and first",
            "Zero: if + present simple, present simple ('If you heat ice, it melts') — always true. First: if + present simple, will + verb ('If it rains, we'll stay home') — a real future possibility.",
            [
              ["If you don't water plants, they die.", "Si no riegas las plantas, mueren."],
              ["If the taxi doesn't come, we'll take the bus.", "Si el taxi no viene, tomaremos el autobús."],
            ],
          ),
          EX("Real life", [
            ["If I finish early, I'll call you.", "Si termino temprano, te llamo... (te llamaré)."],
            ["If you press this button, the machine stops.", "Si presionas este botón, la máquina se detiene."],
          ]),
          AU("Listen: real conditionals", "If you heat ice, it melts. If it rains, we'll stay home. If I finish early, I'll call you.", 0.9),
          W("No will inside if", "'If it will rain' is wrong for real conditionals: the if-clause takes the PRESENT. Will lives only in the result clause."),
        ],
        assignment: {
          title: "Rules and possibilities",
          instructions:
            "Write three zero conditionals (rules/facts you know) and three first conditionals (real possibilities for this week).",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["State two rules of your workplace as zero conditionals.", "Make one first-conditional plan for tomorrow."],
      },
      {
        title: "Second Conditional",
        blurb: "If I had a million dollars... the dream tense: if + past, would.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Build second conditionals for unreal situations",
          "Explain the past form's 'distance' meaning",
          "Discuss dreams, hypotheticals and polite impossibilities",
        ],
        blocks: [
          H("The dream machine"),
          GR(
            "Second conditional",
            "If + past simple, would + base verb: 'If I won the lottery, I would travel.' Meaning: unreal or unlikely NOW or in the future. The past form signals distance from reality, not past time.",
            [
              ["If I had more time, I would learn the guitar.", "Si tuviera más tiempo, aprendería a tocar la guitarra."],
              ["If she lived nearer, we would see each other more.", "Si viviera más cerca, nos veríamos más."],
            ],
          ),
          EX("Dream talk", [
            ["What would you do if you could live anywhere?", "¿Qué harías si pudieras vivir en cualquier lugar?"],
            ["If I didn't work on Saturdays, I'd play more tennis.", "Si no trabajara los sábados, jugaría más tenis."],
          ]),
          AU("Listen: dreams", "If I had more time, I would learn the guitar. What would you do if you could live anywhere?", 0.9),
          N("Were, the special case", "With 'be', formal English uses 'were' for all persons: 'If I were you, I'd apologise.' 'If I was' is heard in speech, but 'were' wins in writing."),
        ],
        assignment: {
          title: "My impossible week",
          instructions:
            "Write five second-conditional sentences about unreal changes you dream of (time, money, location, skills, courage), including one 'If I were...' sentence.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Ask someone 'What would you do if you won the lottery?'", "Report their best answer."],
      },
      {
        title: "Unless and Everyday Conditionals",
        blurb: "Unless = if not, plus the spoken set: as long as, in case, provided that.",
        minutes: 20,
        difficulty: 3,
        skills: ["grammar", "communication"],
        strands: ["communication", "speaking", "listening", "reading"],
        outcomes: [
          "Use unless for except-if conditions",
          "Use as long as and in case correctly",
          "Recognise conditionals in fast speech",
        ],
        blocks: [
          H("The condition family"),
          TB("Conditional connectors", ["Connector", "Meaning", "Example"], [
            ["unless", "if not / except if", "Unless you hurry, we'll miss the train."],
            ["as long as", "only if (positive condition)", "You can borrow it as long as you're careful."],
            ["in case", "as a precaution", "Take a jacket in case it's cold."],
            ["provided that", "only if (formal)", "You can enter provided that you have a ticket."],
          ]),
          EX("Spoken conditionals", [
            ["I won't go unless you come with me.", "No iré a menos que vengas conmigo."],
            ["I'll stay as long as you need me.", "Me quedaré mientras me necesites."],
          ]),
          AU("Listen: unless and friends", "Unless you hurry, we'll miss the train. I'll stay as long as you need me.", 0.9),
          W("Unless flips the negative", "'Unless you hurry' = 'if you don't hurry'. Never double-negate: 'unless you don't hurry' is nonsense."),
        ],
        assignment: {
          title: "Condition collection",
          instructions:
            "Write four sentences using unless, as long as, in case and provided that about real rules or plans in your life.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Say one unless-sentence about tomorrow.", "Catch one conditional in a film or song."],
      },
      {
        title: "Choosing Your Conditional and Chapter Review",
        blurb: "Real or unreal? The three-way chooser in action, then the Chapter 32 review.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing", "speaking"],
        strands: ["communication", "writing", "speaking", "reading"],
        outcomes: [
          "Choose among all three conditionals by reality",
          "Move between conditionals in conversation",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The chooser"),
          TB("Three worlds", ["Type", "Reality", "Pattern", "Example"], [
            ["Zero", "always true", "if + present, present", "If you heat ice, it melts."],
            ["First", "real future possibility", "if + present, will", "If it rains, we'll cancel."],
            ["Second", "unreal / unlikely now", "if + past, would", "If I were rich, I'd travel."],
          ]),
          EX("One idea, three worlds", [
            ["If I have time, I help her. (always true) / If I have time tomorrow, I'll help her. (possible) / If I had time, I would help her. (but I don't)", "Si tengo tiempo, la ayudo. / Si tengo tiempo mañana, la ayudaré. / Si tuviera tiempo, la ayudaría."],
          ]),
          AU("Listen: three worlds, one verb", "If I have time, I help her. If I have time tomorrow, I'll help her. If I had time, I would help her.", 0.9),
          H("Chapter 32 review"),
          T("Three questions on conditionals, then the futures paragraph."),
        ],
        assignment: {
          title: "My three futures",
          instructions:
            "Write a six-sentence paragraph: one rule of your life (zero), two real plans with conditions (first), and three dreams (second). Label each sentence.",
          minWords: 30,
          maxWords: 100,
        },
        questions: [
          MCQ(
            "'If it ___ tomorrow, we ___ the trip.' (real possibility)",
            [["a", "will rain / cancel"], ["b", "rains / will cancel"], ["c", "rained / would cancel"]],
            "b",
            fb("rains / will cancel", "First conditional: if + present simple, will + base verb.", "No will inside the if-clause; 'rained/would' is the second conditional."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'If I ___ you, I'd take the job.' (advice about an unreal situation)",
            [["a", "am"], ["b", "was being"], ["c", "were"]],
            "c",
            fb("were", "Second conditional 'be' uses were: If I were you.", "'If I were you' is the classic advice formula."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'Unless you study, ___'",
            [["a", "you will pass."], ["b", "you won't pass."], ["c", "you would pass."]],
            "b",
            fb("you won't pass", "Unless = if not: 'If you don't study, you won't pass.'", "Unless already carries the negative."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),
];
