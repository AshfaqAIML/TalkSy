/**
 * Core English Programme — Batch 10 (Chapters 37–40).
 *
 * B1 close: complex sentences and cohesion, communication and structured
 * writing. B2 open: advanced tense and aspect, advanced conditionals.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, MCQ, MATCH, N, REORD, TB, T, W, fb } from "../types";

export const batch10: ChapterSpec[] = [
  chapter("b1", {
    number: 37,
    title: "Complex Sentences and Cohesion",
    description:
      "The architecture of mature writing: independent and dependent clauses, the subordinating conjunction toolkit, sentence variety, and the linking expressions that hold paragraphs together so readers never lose the thread.",
    objectives: [
      "Identify independent and dependent clauses",
      "Use the core subordinating conjunctions precisely",
      "Vary sentence length and structure deliberately",
      "Build paragraph cohesion with linking expressions",
    ],
    prerequisites: ["CH-36"],
    hours: 2,
    skills: ["grammar", "writing"],
    strands: ["writing", "reading", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on clause types and connectors. Assignment: rewrite a choppy paragraph with subordination and cohesion.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 10,
    module: "b1-clause-craft",
    lessons: [
      {
        title: "Independent and Dependent Clauses",
        blurb: "Some clause teams can stand alone; others lean. Know which is which.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Define and identify both clause types",
          "Avoid fragments and comma splices",
          "Combine clauses with correct punctuation",
        ],
        blocks: [
          H("Standers and leaners"),
          TB("Clause types", ["Type", "Can stand alone?", "Example"], [
            ["independent", "yes", "The train left."],
            ["dependent (because, although, when, if, who...)", "no", "...because I was late."],
            ["complex sentence", "—", "The train left because I was late."],
          ]),
          GR("Two punctuation rules", "Dependent clause first → comma after it. Independent first → usually no comma. NEVER join two independents with only a comma (comma splice).", [["Because I was late, the train left.", "Como llegué tarde, el tren se fue."]]),
          W("The fragment detector", "Read your sentence alone, loudly. If it sounds like it's waiting for more ('Although she was tired...'), it's a fragment: attach it or finish it."),
          AU("Listen: clause combinations", "Although she was tired, she finished. She finished although she was tired.", 0.9),
        ],
        assignment: {
          title: "Clause clinic",
          instructions:
            "Label each as fragment, splice or correct, then fix the broken ones: 'Because the meeting ran long.' 'The report was late, everyone waited.' 'Although it rained, we walked.'",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Find one fragment in your old writing.", "Repair it two ways."],
      },
      {
        title: "Subordinating Conjunctions",
        blurb: "Because, although, while, since, unless, whereas — the meanings that link worlds.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Choose subordinators by logical meaning",
          "Distinguish while (time vs contrast) and since (time vs reason)",
          "Build precise complex sentences",
        ],
        blocks: [
          H("The linker shelf"),
          TB("Subordinator meanings", ["Group", "Words", "Example"], [
            ["time", "when, while, before, after, until, as soon as", "Call me when you land."],
            ["reason", "because, since, as", "Since it's late, let's meet tomorrow."],
            ["contrast", "although, though, even though, whereas", "Whereas I love tea, she lives on coffee."],
            ["condition", "if, unless, provided that", "I'll go unless it rains."],
            ["purpose", "so that, in order that", "Speak slowly so that everyone follows."],
          ]),
          EX("Double-duty words", [
            ["While I was cooking, she called. (time) / While tea calms me, coffee wakes her. (contrast)", "Mientras cocinaba, llamó. / Mientras el té me calma, el café la despierta."],
            ["Since 2020, I work from home. (time) / Since you ask, here's my answer. (reason)", "Desde 2020 trabajo desde casa. / Ya que preguntas, aquí está mi respuesta."],
          ]),
          AU("Listen: precise linking", "Call me when you land. Since it's late, let's meet tomorrow. Whereas I love tea, she lives on coffee.", 0.9),
          N("One subordinator per clause", "'Although it was late but we continued' — although and but are both connectors; English uses one per link."),
        ],
        assignment: {
          title: "Linker precision",
          instructions:
            "Write six sentences using six different subordinators, including both meanings of while and one whereas-contrast.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Upgrade three but/because sentences with subordinators.", "Note the tone change."],
      },
      {
        title: "Sentence Variety",
        blurb: "Short. Then long, winding, subordinate-heavy. The rhythm keeps readers awake.",
        minutes: 20,
        difficulty: 3,
        skills: ["writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Vary sentence length for rhythm",
          "Combine and split sentences deliberately",
          "Open sentences in different ways",
        ],
        blocks: [
          H("The rhythm recipe"),
          EX(
            "Same facts, two rhythms",
            [
              ["Choppy: I woke up. It was raining. I stayed in bed. I read a book. The book was good. → Varied: I woke up to rain. Since there was nowhere to be, I stayed in bed with a book — a good one. It was the best morning of the week.", "Cortado: Me desperté. Llovía. Me quedé en la cama. Leí un libro. El libro era bueno. → Variado: Me desperté con lluvia. Como no tenía adónde ir, me quedé en la cama con un libro — uno bueno. Fue la mejor mañana de la semana."],
            ],
          ),
          TB("Variety moves", ["Move", "Example"], [
            ["short sentence for punch", "It worked.", ""],
            ["opening adverb", "Surprisingly, the plan worked."],
            ["opening dependent clause", "After three failures, the plan worked."],
            ["dash for drama", "The plan worked — finally."],
          ]),
          AU("Listen: rhythm", "I woke up to rain. Since there was nowhere to be, I stayed in bed with a book — a good one.", 0.9),
          N("Rule of thumb", "If three sentences in a row start with the subject + verb, break the pattern. Readers hear repetition even when they can't name it."),
        ],
        assignment: {
          title: "Rhythm rewrite",
          instructions:
            "Take six choppy sentences from your earlier writing (or write them) and rewrite them as four varied sentences using subordination, a dash and one very short sentence.",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Read your rewrite aloud.", "Mark where the rhythm surprises."],
      },
      {
        title: "Paragraph Cohesion and Chapter Review",
        blurb: "Linking expressions as glue: however, therefore, in addition — then the Chapter 37 review.",
        minutes: 25,
        difficulty: 3,
        skills: ["writing", "grammar"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Choose linkers by logical relation",
          "Chain ideas across a paragraph",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The glue shelf"),
          TB("Linking expressions", ["Relation", "Expressions"], [
            ["adding", "in addition, moreover, furthermore, also"],
            ["contrasting", "however, nevertheless, on the other hand"],
            ["result", "therefore, as a result, consequently"],
            ["example", "for example, for instance, such as"],
            ["sequence", "first, then, subsequently, finally"],
            ["concession", "admittedly, of course, even so"],
          ]),
          EX(
            "A cohesive paragraph",
            [
              ["Remote work saves commuting time. Moreover, many people focus better at home. However, isolation is a real risk; consequently, some companies now organise weekly office days. For example, my firm closes Thursdays for team lunches. Even so, the balance works: we keep the focus days and the friendship.", "El trabajo remoto ahorra tiempo de desplazamiento. Además, muchos concentran mejor en casa. Sin embargo, el aislamiento es un riesgo real; en consecuencia, algunas empresas organizan días de oficina semanales. Por ejemplo, mi empresa cierra los jueves para comidas de equipo. Aun así, el equilibrio funciona: conservamos los días de foco y la amistad."],
            ],
          ),
          AU("Listen: cohesive linking", "Moreover... However... Consequently... For example... Even so...", 0.9),
          H("Chapter 37 review"),
          T("Three questions on clauses and linkers, then the cohesion rewrite."),
        ],
        assignment: {
          title: "The cohesion rewrite",
          instructions:
            "Rewrite a five-sentence choppy paragraph (yours or the lesson's) using: one subordinator, three different linking expressions and deliberate sentence variety. Submit before and after.",
          minWords: 40,
          maxWords: 130,
        },
        questions: [
          MCQ(
            "Which is a COMMA SPLICE (error)?",
            [["a", "Although it rained, we walked."], ["b", "It rained, we walked."], ["c", "It rained, so we walked."]],
            "b",
            fb("It rained, we walked.", "Two independent clauses joined by only a comma — add so/but or a semicolon.", "The others are legal joins."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'___ it was raining, we continued the hike.' — the contrast subordinator:",
            [["a", "Because"], ["b", "Although"], ["c", "So that"]],
            "b",
            fb("Although", "Rain vs continuing = contrast.", "Because would make rain the reason for hiking."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which linker shows RESULT?",
            [["a", "However,"], ["b", "Moreover,"], ["c", "Consequently,"]],
            "c",
            fb("Consequently", "Consequently = as a result.", "However contrasts; moreover adds."),
            { skill: "writing", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("b1", {
    number: 38,
    title: "Communication and Structured Writing",
    description:
      "The B1 capstone: expressing and defending opinions, supporting arguments with reasons and examples, giving explanations, describing experiences in structured paragraphs, storytelling, group discussion skills and speaking fluency habits. This is where grammar becomes communication.",
    objectives: [
      "Express and soften opinions appropriately",
      "Support opinions with reasons and examples",
      "Structure a five-paragraph opinion text",
      "Participate in discussions: agreeing, disagreeing, building",
    ],
    prerequisites: ["CH-37"],
    hours: 3,
    skills: ["speaking", "writing", "communication", "listening"],
    strands: ["communication", "speaking", "writing", "listening", "reading", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 questions on opinion language and structure. Assignment: the B1 exit task — a structured opinion essay plus a discussion plan.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly. Finishing this chapter completes Level B1.",
    batch: 10,
    module: "b1-confident-communication",
    lessons: [
      {
        title: "Expressing and Supporting Opinions",
        blurb: "In my view... because... for instance — the three-step opinion machine.",
        minutes: 25,
        difficulty: 3,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "pronunciation"],
        outcomes: [
          "State opinions with varied frames",
          "Support with reason + example",
          "Soften and strengthen opinions by register",
        ],
        blocks: [
          H("The three-step machine"),
          TB("Opinion frames", ["Strength", "Frames"], [
            ["neutral", "I think / In my view / It seems to me that / From my perspective"],
            ["strong", "I'm convinced that / I firmly believe / There's no doubt that"],
            ["soft", "I'd say / Perhaps / It might be that / I tend to think"],
          ]),
          GR("Opinion + because + example", "A complete opinion has three beats: claim ('In my view, remote work is better'), reason ('because it saves two hours a day'), example ('for instance, I now exercise before work').", [["In my view, audiobooks beat podcasts for learning because you follow one story deeply. For instance, I finished three novels last month while commuting.", "En mi opinión, los audiolibros superan a los pódcasts para aprender porque sigues una historia en profundidad. Por ejemplo, terminé tres novelas el mes pasado mientras viajaba."]]),
          AU("Listen: the three beats", "In my view, remote work is better, because it saves two hours a day. For instance, I now exercise before work.", 0.9),
          N("Hedge or commit", "Soft frames ('I'd say') invite discussion; strong frames ('there's no doubt') end it. Choose by goal, not by habit."),
        ],
        assignment: {
          title: "Three opinions, fully built",
          instructions:
            "Write three complete opinions (claim + because + for instance) about food, technology and education, using three different frames.",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Give one full opinion aloud to someone.", "Ask them for theirs and listen."],
      },
      {
        title: "Structuring Paragraphs and Short Essays",
        blurb: "Introduction, body, conclusion — the shape every structured text shares.",
        minutes: 25,
        difficulty: 3,
        skills: ["writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Structure an opinion essay in three parts",
          "Write a thesis statement",
          "Keep one idea per body paragraph",
        ],
        blocks: [
          H("The essay skeleton"),
          TB("Opinion essay plan", ["Part", "Job", "Lines"], [
            ["introduction", "context + thesis (your opinion)", "2–3"],
            ["body 1", "strongest reason + example", "4–5"],
            ["body 2", "second reason + example", "4–5"],
            ["body 3 (optional)", "counterargument + answer", "3–4"],
            ["conclusion", "restate thesis + closing thought", "2"],
          ]),
          EX("A thesis statement", [
            ["Although cars dominate city life, bicycles should receive the majority of transport investment, because they cut congestion, improve health and cost less.", "Aunque los coches dominan la vida urbana, las bicicletas deberían recibir la mayor inversión en transporte, porque reducen los atascos, mejoran la salud y cuestan menos."],
          ]),
          AU("Listen: the thesis", "Although cars dominate city life, bicycles should receive the majority of transport investment.", 0.9),
          N("One paragraph, one job", "If a body paragraph needs 'also' to survive, it's two paragraphs wearing one coat."),
        ],
        assignment: {
          title: "Essay blueprint",
          instructions:
            "Plan a short opinion essay: write the thesis statement and the topic sentence of each body paragraph (no full paragraphs yet — just the skeleton).",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Find an opinion article.", "Label its thesis and body topic sentences."],
      },
      {
        title: "Discussion Skills",
        blurb: "Agreeing, disagreeing, interrupting politely and building on others — the dance of group talk.",
        minutes: 25,
        difficulty: 3,
        skills: ["speaking", "communication", "listening"],
        strands: ["communication", "speaking", "listening", "pronunciation"],
        outcomes: [
          "Agree and disagree with graded politeness",
          "Interrupt and hold the floor politely",
          "Build on others' points",
        ],
        blocks: [
          H("The discussion toolkit"),
          TB("Discussion moves", ["Move", "Language"], [
            ["agreeing", "Exactly. / That's a fair point. / I couldn't agree more."],
            ["partial agree", "I see your point, but... / Up to a point, although..."],
            ["disagreeing (polite)", "I'm not sure about that, because... / I see it differently."],
            ["interrupting politely", "Sorry to jump in, but... / Can I add something?"],
            ["building", "Going back to what X said... / Building on that idea..."],
            ["clarifying", "So you're saying that...? / What do you mean by...?"],
          ]),
          DL(
            "The book club",
            "Four friends discuss a novel.",
            [
              ["Ana", "For me, the ending was perfect — it respects the reader."],
              ["Ben", "I see your point, but I found it cold. We deserved more emotion."],
              ["Cara", "Sorry to jump in — building on what Ben said, the coldness is the point. The whole book is about distance."],
              ["Ben", "Interesting. So you're saying the ending mirrors the theme?"],
              ["Cara", "Exactly!"],
              ["Ana", "That's a fair point. Even so, I wanted one warm scene."],
            ],
          ),
          AU("Listen: the discussion", "I see your point, but... Building on what Ben said... Exactly! That's a fair point. Even so...", 0.9),
          N("Disagree with the idea, not the person", "'I see it differently' attacks nothing; 'You're wrong' attacks everything. Same disagreement, different relationship afterwards."),
        ],
        assignment: {
          title: "Discussion plan",
          instructions:
            "Write a six-line discussion about a real disagreement (with a person or in your head) using six different discussion moves from the table.",
          minWords: 30,
          maxWords: 95,
        },
        homework: ["Use two discussion moves in a real conversation.", "Notice which ones felt natural."],
      },
      {
        title: "Storytelling, Fluency and B1 Exit",
        blurb: "Tell stories people want to hear, speak in flowing turns — then the B1 exit review.",
        minutes: 30,
        difficulty: 4,
        skills: ["speaking", "communication", "writing"],
        strands: ["communication", "speaking", "writing", "listening", "reading"],
        outcomes: [
          "Tell a structured story with a turn",
          "Use fluency devices (fillers, reformulation)",
          "Complete the B1 exit tasks and chapter review",
        ],
        blocks: [
          H("The story spine"),
          GR("Story spine", "Set-up (normal world) → turn (something changes) → struggle → resolution → change in the teller. Five beats, any length.", [["Last summer I was convinced I hated running. Then my doctor gave me a choice: pills or movement. I chose movement, badly, for three weeks. Then something clicked. Now I run twice a week — I still don't love it, but I love who I become afterwards.", "El verano pasado estaba convencido de que odiaba correr. Entonces mi médico me dio una elección: pastillas o movimiento. Elegí movimiento, mal, durante tres semanas. Entonces algo cambió. Ahora corro dos veces por semana — sigo sin amarlo, pero amo en quién me convierto después."]]),
          TB("Fluency devices", ["Device", "Examples"], [
            ["buying time", "Well... / Let me think... / That's a good question..."],
            ["reformulating", "or rather... / what I mean is... / let me put it another way"],
            ["emphasising", "the thing is... / believe me... / honestly..."],
          ]),
          AU("Listen: the story spine", "Last summer I was convinced I hated running. Then my doctor gave me a choice...", 0.9),
          H("Chapter 38 review — Level B1 exit"),
          T("You can now argue, structure, discuss and narrate with control. B2 refines precision and range. Complete the review and the exit task."),
        ],
        assignment: {
          title: "B1 exit: my opinion, my story",
          instructions:
            "Write two pieces: (1) a structured opinion essay (three paragraphs: intro with thesis, one body with reason + example, conclusion); (2) a five-beat story spine about a change in your life.",
          minWords: 90,
          maxWords: 220,
        },
        questions: [
          MCQ(
            "Which phrase is the STRONGEST opinion frame?",
            [["a", "I'd say..."], ["b", "Perhaps..."], ["c", "There's no doubt that..."]],
            "c",
            fb("There's no doubt that...", "This frame commits fully — no hedging.", "I'd say and perhaps are softeners."),
            { skill: "speaking", difficulty: "easy" },
          ),
          MCQ(
            "A complete supported opinion contains:",
            [["a", "claim only"], ["b", "claim + reason + example"], ["c", "example only"]],
            "b",
            fb("claim + reason + example", "The three-step machine: what, why, for instance.", "Claims alone convince no one; examples alone claim nothing."),
            { skill: "writing", difficulty: "easy" },
          ),
          MCQ(
            "The politest way to disagree is:",
            [["a", "You're wrong."], ["b", "I see it differently, because..."], ["c", "That makes no sense."]],
            "b",
            fb("I see it differently, because...", "Disagree with the idea and give your reason — not with the person.", "Direct negatives attack the speaker, not the claim."),
            { skill: "speaking", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 39,
    title: "Advanced Tense and Aspect",
    description:
      "Upper-intermediate time mastery: perfect and continuous aspects compared deeply, the future perfect and future continuous, the future perfect continuous, narrative tense selection in literature-style storytelling, and contextual tense use where several forms compete.",
    objectives: [
      "Explain aspect (perfect vs continuous) as independent of time",
      "Use future perfect and future continuous accurately",
      "Combine future perfect continuous in long-range planning talk",
      "Select narrative tenses for atmosphere and pacing",
    ],
    prerequisites: ["CH-38"],
    hours: 3,
    skills: ["grammar", "writing", "speaking"],
    strands: ["writing", "communication", "reading", "speaking"],
    assessment:
      "Chapter review quiz: 3 questions on future forms and narrative selection. Assignment: a time-capsule paragraph using three future forms and a narrative scene.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 10,
    module: "b2-precision-grammar",
    lessons: [
      {
        title: "Aspect Deep Dive",
        blurb: "Time says WHEN; aspect says HOW — completed, ongoing, or both.",
        minutes: 25,
        difficulty: 3,
        skills: ["grammar"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Separate time from aspect analytically",
          "Explain each aspect's viewpoint in one sentence",
          "Predict meaning differences between aspect pairs",
        ],
        blocks: [
          H("The two dials"),
          TB("Time × aspect grid", ["", "Simple (whole picture)", "Continuous (inside the action)", "Perfect (looking back)"], [
            ["past", "I wrote.", "I was writing.", "I had written."],
            ["present", "I write.", "I am writing.", "I have written."],
            ["future", "I will write.", "I will be writing.", "I will have written."],
          ]),
          EX("Same time, different aspects", [
            ["At 8 p.m. I cooked. (whole event) / At 8 p.m. I was cooking. (mid-action) / By 8 p.m. I had cooked. (completed before)", "A las 8 cociné. / A las 8 estaba cocinando. / A las 8 ya había cocinado."],
          ]),
          AU("Listen: three viewpoints", "At eight, I cooked. At eight, I was cooking. By eight, I had cooked.", 0.9),
          N("Aspect is a camera angle", "Simple = wide shot; continuous = zoom inside; perfect = looking back over your shoulder. Time sets the scene; aspect sets the lens."),
        ],
        assignment: {
          title: "Aspect triples",
          instructions:
            "Write three aspect triples (like the lesson's) about your day: simple, continuous and perfect versions of the same verb and moment.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Explain the camera metaphor to someone.", "Give them one triple to classify."],
      },
      {
        title: "Future Perfect and Future Continuous",
        blurb: "By June I'll have finished; this time tomorrow I'll be flying — futures with deadlines and in-progress views.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Form and use the future perfect (will have done)",
          "Form and use the future continuous (will be doing)",
          "Talk about deadlines and scheduled futures naturally",
        ],
        blocks: [
          H("Two future lenses"),
          GR(
            "future perfect / future continuous",
            "Future perfect: will have + participle — completed BY a future point ('By 2030, I'll have paid off the loan'). Future continuous: will be + -ing — in progress AT a future moment ('This time tomorrow, we'll be landing in Tokyo').",
            [
              ["By December, she'll have finished her thesis.", "En diciembre habrá terminado su tesis."],
              ["Don't call at eight — we'll be having dinner.", "No llames a las ocho — estaremos cenando."],
            ],
          ),
          EX("The milestone conversation", [
            ["A: Will you have moved by September? B: The flat will be ready, but we'll still be painting for weeks.", "A: ¿Os habréis mudado en septiembre? B: El piso estará listo, pero seguiremos pintando durante semanas."],
          ]),
          AU("Listen: future lenses", "By December, she'll have finished. This time tomorrow, we'll be landing in Tokyo.", 0.9),
          N("By + point is the signature", "Future perfect almost always travels with 'by' (by then, by Friday, by the time...). If you see 'by', think perfect."),
        ],
        assignment: {
          title: "Milestone map",
          instructions:
            "Write five sentences about your next five years: three future perfect milestones with by-phrases, two future continuous snapshots of life in progress.",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["State one thing you'll have done by this time next year.", "Describe what you'll be doing at midnight on your next birthday."],
      },
      {
        title: "Future Perfect Continuous and Narrative Selection",
        blurb: "The longest tense in English — and choosing past tenses like a novelist.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Form the future perfect continuous",
          "Select past tenses for pacing and atmosphere",
          "Rewrite a flat scene with layered tenses",
        ],
        blocks: [
          H("The marathon tense"),
          GR("future perfect continuous", "will have been + -ing: duration flowing up to a future point. 'By June, I'll have been working here for ten years.' Used for anniversaries, endurance and impressive-sounding commitments.", [["By March, they'll have been dating for a year.", "En marzo llevarán un año saliendo."]]),
          EX(
            "Narrative selection",
            [
              ["Flat: The house was old. There was a smell. A woman waited inside. → Layered: The house had stood empty for years, and it smelled of dust and rain. A woman was waiting in the hall — she had been crying, and she had decided something.", "Plano: La casa era vieja. Había un olor. Una mujer esperaba dentro. → En capas: La casa llevaba años vacía y olía a polvo y lluvia. Una mujer esperaba en el vestíbulo — había estado llorando y había tomado una decisión."],
            ],
            "Past perfect (had stood, had decided) for backstory; continuous (was waiting) for the held shot; perfect continuous (had been crying) for visible evidence.",
          ),
          AU("Listen: the layered scene", "The house had stood empty for years. A woman was waiting in the hall — she had been crying.", 0.9),
          N("Pacing law", "Simple tenses run; continuous tenses slow the camera; perfect tenses look away. Mix deliberately, not accidentally."),
        ],
        assignment: {
          title: "The layered scene",
          instructions:
            "Write a four-sentence scene using past perfect, past continuous and past perfect continuous deliberately — then one sentence explaining your tense choices.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Rewrite a fairy tale opening with layered tenses.", "Mark each layer's job."],
      },
      {
        title: "Contextual Tense Use and Chapter Review",
        blurb: "When several tenses compete — the final referee guide, then the Chapter 39 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading", "speaking"],
        outcomes: [
          "Arbitrate competing tense choices by context",
          "Justify choices with aspect logic",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The competition cases"),
          TB("Competing forms, deciding questions", ["Case", "Question", "Winner"], [
            ["'I have worked / have been working here for 5 years.'", "Stressing the job or the duration?", "result → perfect; time → continuous"],
            ["'When I arrived, she left / had left.'", "Before or after my arrival?", "before → had left; after → left"],
            ["'This time Friday, I'll fly / will be flying.'", "Single event or in-progress?", "in-progress → will be flying"],
            ["'By 2030, I'll work / will have worked here 20 years.'", "Is there a by-deadline?", "yes → future perfect"],
          ]),
          EX("Full-context example", [
            ["When the inspectors arrive next month, the bridge will have been under construction for three years, and half the town will still be complaining.", "Cuando lleguen los inspectores el mes que viene, el puente llevará tres años en construcción y media ciudad seguirá quejándose."],
          ]),
          AU("Listen: the referee cases", "She had already left. This time Friday, I'll be flying. By 2030, I'll have worked here twenty years.", 0.9),
          H("Chapter 39 review"),
          T("Three questions on advanced futures and narrative, then the time-capsule task."),
        ],
        assignment: {
          title: "Time capsule",
          instructions:
            "Write a six-sentence time-capsule paragraph about your next decade: two future perfect milestones, one future continuous snapshot, one future perfect continuous duration, and two present-tense truths about now.",
          minWords: 30,
          maxWords: 100,
        },
        questions: [
          MCQ(
            "'By next March, I ___ here for five years.'",
            [["a", "will work"], ["b", "will have been working"], ["c", "am working"]],
            "b",
            fb("will have been working", "Duration flowing up to a future point → future perfect continuous.", "The 'by + for' signature gives it away."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "'Don't phone at nine — we ___ dinner.' (in progress then)",
            [["a", "will have had"], ["b", "will be having"], ["c", "have"]],
            "b",
            fb("will be having", "Future continuous = in progress at a future moment.", "The future perfect would mean dinner is finished by nine."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "In 'The house had stood empty for years', 'had stood' is chosen because:",
            [["a", "the action is in progress now"], ["b", "it is backstory before the narrative past"], ["c", "it is a future deadline"]],
            "b",
            fb("it is backstory before the narrative past", "Past perfect places the emptiness before the scene's past moment.", "Progressive in-progress is the continuous's job."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 40,
    title: "Advanced Conditionals",
    description:
      "The full conditional universe: the third conditional for past regrets, mixed conditionals crossing time zones, hypothetical language beyond if (imagine, supposing), unless/provided that/were to, and a first look at conditional inversion (Had I known...).",
    objectives: [
      "Form and use the third conditional for past unreal situations",
      "Build mixed conditionals across time zones",
      "Use hypothetical frames beyond if",
      "Recognise and use conditional inversion",
    ],
    prerequisites: ["CH-32"],
    hours: 3,
    skills: ["grammar", "speaking", "writing"],
    strands: ["communication", "speaking", "writing", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on third and mixed conditionals. Assignment: a regret-and-recovery paragraph using all three main conditionals plus one mixed.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 10,
    module: "b2-precision-grammar",
    lessons: [
      {
        title: "Third Conditional",
        blurb: "If I had known, I would have gone — the grammar of hindsight.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Form the third conditional (had + participle, would have + participle)",
          "Express past regrets and counterfactuals",
          "Explain the fixed-past meaning",
        ],
        blocks: [
          H("The hindsight machine"),
          GR(
            "third conditional",
            "If + past perfect, would have + past participle: 'If we had left earlier, we would have caught the train.' Both clauses are UNREAL PAST — reality is fixed and known.",
            [
              ["If I had studied, I would have passed.", "Si hubiera estudiado, habría aprobado."],
              ["She wouldn't have fallen if she had seen the step.", "No se habría caído si hubiera visto el escalón."],
            ],
          ),
          EX("Regret talk", [
            ["If I'd taken that job, my whole life would have been different.", "Si hubiera tomado ese trabajo, toda mi vida habría sido diferente."],
          ]),
          AU("Listen: hindsight", "If I had studied, I would have passed. If we had left earlier, we would have caught the train.", 0.9),
          W("Never mix the zones", "'If I had studied, I would pass' mixes past unreal with present result — that's a MIXED conditional (next lesson), not an error, but know which you mean. Pure third conditional keeps both clauses in the past."),
        ],
        assignment: {
          title: "Three regrets",
          instructions:
            "Write five third-conditional sentences about real past moments (three regrets, one lucky escape, one someone else's decision).",
          minWords: 18,
          maxWords: 65,
        },
        homework: ["Ask someone their biggest 'if only'.", "Report it in the third conditional."],
      },
      {
        title: "Mixed Conditionals",
        blurb: "Past cause, present result — and present cause, past result. Time travel in one sentence.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Build past-to-present mixed conditionals",
          "Build present-to-past mixed conditionals",
          "Explain the time zones of each clause",
        ],
        blocks: [
          H("Crossing the zones"),
          TB("Mixed patterns", ["Pattern", "Meaning", "Example"], [
            ["past → present", "past unreal cause, present result", "If I had taken that job, I would be in Berlin now."],
            ["present → past", "present unreal cause, past result", "If I weren't so shy, I would have spoken to her at the party."],
          ]),
          EX("The full regret spectrum", [
            ["If I'd learned English earlier (past), I'd have this job now (present). / If I weren't so busy (present), I'd have joined you yesterday (past).", "Si hubiera aprendido inglés antes, ahora tendría este trabajo. / Si no estuviera tan ocupado, me habría unido a ti ayer."],
          ]),
          AU("Listen: mixed zones", "If I had taken that job, I would be in Berlin now. If I weren't so shy, I would have spoken to her.", 0.9),
          N("Diagnose each clause separately", "Ask of each half: is its time past or present, and is it unreal? The pattern names itself."),
        ],
        assignment: {
          title: "Zone crosser",
          instructions:
            "Write four mixed conditionals: two past→present, two present→past, each about a real fork in your road. Label the time zone of every clause.",
          minWords: 18,
          maxWords: 65 },
        homework: ["Take your best third-conditional regret.", "Turn it into a past→present mixed."],
      },
      {
        title: "Hypotheticals Beyond If and Inversion",
        blurb: "Imagine, supposing, were to — and the formal flip: Had I known...",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Frame hypotheticals with imagine/supposing/were to",
          "Recognise and build conditional inversions",
          "Choose formal vs informal hypothetical style",
        ],
        blocks: [
          H("The wider toolkit"),
          TB("Hypothetical frames", ["Frame", "Register", "Example"], [
            ["Imagine (that)...", "any", "Imagine you had one year free — what would you do?"],
            ["Supposing / Suppose...", "any", "Supposing they said no. What then?"],
            ["If + were to", "formal", "If the deal were to fail, we'd lose everything."],
            ["Had I known... (inversion)", "formal/written", "Had I known, I would never have signed."],
            ["Were I you... (inversion)", "formal", "Were I you, I'd wait."],
          ]),
          GR("Conditional inversion", "In formal English, drop 'if' and move 'had/were/should' before the subject: If I had known → Had I known; If I were you → Were I you. Meaning unchanged, register raised.", [["Should you need help, call us.", "Si necesitara ayuda, llámenos."]]),
          AU("Listen: formal flips", "Had I known, I would never have signed. Were I you, I'd wait. Should you need help, call us.", 0.9),
          N("Where you'll meet it", "Inversion lives in literature, formal letters and contracts. Recognise it passively; use it when the moment is truly formal."),
        ],
        assignment: {
          title: "Style ladder",
          instructions:
            "Express one hypothetical three times: with imagine, with a standard second/third conditional, and with one inversion. Label the register of each.",
          minWords: 12,
          maxWords: 50 },
        homework: ["Find one inversion in formal writing.", "Unflip it back to if-form."],
      },
      {
        title: "Unless, Provided That and Chapter Review",
        blurb: "The full connector set at B2 depth, then the Chapter 39→40 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "communication"],
        strands: ["communication", "writing", "speaking", "reading"],
        outcomes: [
          "Deploy the advanced condition connectors precisely",
          "Move between all four conditional types",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The connector shelf, restocked"),
          TB("Advanced condition words", ["Word", "Nuance", "Example"], [
            ["unless", "except if", "Unless we act now, costs will double."],
            ["provided that / providing", "only if (positive condition)", "You may enter provided that you register."],
            ["as long as", "condition + time", "As long as we're honest, this works."],
            ["on condition that", "formal contracts", "He agreed on condition that his name stayed out."],
            ["but for", "without (formal regret)", "But for your help, I'd have failed."],
          ]),
          EX("All four types, one story", [
            ["If you train, you improve. (zero) If you join the team, you'll improve faster. (first) If I had more time, I'd train daily. (second) If I had joined younger, I'd have gone pro. (third)", "Si entrenas, mejoras. Si te unes al equipo, mejorarás más rápido. Si tuviera más tiempo, entrenaría a diario. Si me hubiera unido más joven, habría sido profesional."],
          ]),
          AU("Listen: four types", "If you train, you improve. If you join, you'll improve faster. If I had time, I'd train daily. If I had joined younger, I'd have gone pro.", 0.9),
          H("Chapter 40 review"),
          T("Three questions on advanced conditionals, then the regret-and-recovery paragraph."),
        ],
        assignment: {
          title: "Regret and recovery",
          instructions:
            "Write a six-sentence paragraph about a real decision: one third-conditional regret, one mixed conditional (past→present), one second-conditional present dream, one first-conditional real plan and one unless-line.",
          minWords: 30,
          maxWords: 100 },
        questions: [
          MCQ(
            "'If she ___ the warning, she ___ the turn.' (both past unreal)",
            [["a", "saw / would take"], ["b", "had seen / would have taken"], ["c", "has seen / will take"]],
            "b",
            fb("had seen / would have taken", "Third conditional: past perfect + would have + participle.", "Both clauses are unreal past."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "'If I had learned to swim (past), I ___ in the pool with the kids now (present).' — complete the MIX:",
            [["a", "would have been"], ["b", "would be"], ["c", "will be"]],
            "b",
            fb("would be", "Past unreal cause + PRESENT result → would + base verb.", "'Would have been' would keep the result in the past."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "'Had I known' means:",
            [["a", "If I had known"], ["b", "I had known"], ["c", "Did I know"]],
            "a",
            fb("If I had known", "Conditional inversion: if disappears and 'had' flips before the subject — same meaning, formal register.", "'Were I you' works the same way."),
            { skill: "grammar", difficulty: "hard" },
          ),
        ],
      },
    ],
  }),
];
