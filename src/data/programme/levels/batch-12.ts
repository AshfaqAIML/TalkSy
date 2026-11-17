/**
 * Core English Programme — Batch 12 (Chapters 45–48, Level B2).
 *
 * Advanced vocabulary and natural English, academic and professional
 * writing, discussion and debate, advanced reading — the B2 capstone.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, MCQ, MATCH, N, TB, T, W, fb } from "../types";

export const batch12: ChapterSpec[] = [
  chapter("b2", {
    number: 45,
    title: "Advanced Vocabulary and Natural English",
    description:
      "Sound like a fluent speaker: collocations that mark native-like English, high-value phrasal verbs for fluency, idioms worth owning, word families that multiply vocabulary, and register — formal vs informal, connotation and natural word combinations.",
    objectives: [
      "Use high-frequency collocations correctly",
      "Deploy twenty B2 phrasal verbs naturally",
      "Understand and use fifteen core idioms",
      "Match vocabulary choice to register and connotation",
    ],
    prerequisites: ["CH-44"],
    hours: 3,
    skills: ["vocabulary", "speaking", "reading"],
    strands: ["vocabulary", "communication", "speaking", "reading", "writing"],
    assessment:
      "Chapter review quiz: 3 questions on collocations, idioms and register. Assignment: a natural-English paragraph using three collocations, two phrasal verbs and one idiom.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 12,
    module: "b2-natural-english",
    lessons: [
      {
        title: "Collocations",
        blurb: "Make a decision (not 'do'), heavy rain (not 'strong') — words that marry.",
        minutes: 25,
        difficulty: 3,
        skills: ["vocabulary", "reading"],
        strands: ["vocabulary", "reading", "writing"],
        outcomes: [
          "Explain what a collocation is",
          "Use the twenty highest-value collocations",
          "Spot broken collocations and repair them",
        ],
        blocks: [
          H("Married words"),
          T(
            "A collocation is a partnership of words that native speakers use together: 'make a decision', 'heavy rain', 'catch a cold', 'highly recommended'. Grammatically 'do a decision' seems fine — it is not English. Learning collocations beats learning single words.",
          ),
          TB("Twenty core collocations", ["Verb + noun", "Adjective + noun"], [
            ["make a mistake / a decision / an effort", "heavy rain / traffic / smoking"],
            ["take a photo / a risk / a break", "strong coffee / opinion / wind"],
            ["do business / homework / harm", "highly successful / unlikely / regarded"],
            ["pay attention / a visit / a price", "deeply concerned / moved / divided"],
            ["catch a cold / a bus / a glimpse", "bitterly cold / disappointed / disappointed"],
          ]),
          AU("Listen: collocations in flow", "make a decision... heavy rain... catch a glimpse... highly recommended...", 0.9),
          W("Do or make?", "Do for work and duties (do research); make for creating and deciding (make plans). 'Make homework' is impossible."),
        ],
        assignment: {
          title: "Collocation corrections",
          instructions:
            "Fix the broken collocations and use three correct ones in your own sentences: 'do a decision', 'strong rain', 'make research', 'deeply tired', 'take a mistake'.",
          minWords: 15,
          maxWords: 55 },
        homework: ["Collect five collocations from anything you read today.", "Use two in conversation."],
      },
      {
        title: "Phrasal Verbs for Fluency",
        blurb: "Come across, end up, figure out, put up with — the twenty that make speech flow.",
        minutes: 25,
        difficulty: 4,
        skills: ["vocabulary", "listening"],
        strands: ["vocabulary", "listening", "communication", "speaking"],
        outcomes: [
          "Use twenty fluency phrasal verbs",
          "Understand them in fast speech",
          "Retell an experience with phrasal narration",
        ],
        blocks: [
          H("The fluency twenty"),
          TB("B2 phrasal verbs", ["Phrasal", "Meaning", "Example"], [
            ["come across", "find by chance", "I came across an old letter."],
            ["end up", "finish in a place/state", "We ended up staying till midnight."],
            ["figure out", "understand after thinking", "I figured out the problem."],
            ["put up with", "tolerate", "I can't put up with the noise."],
            ["look forward to", "anticipate happily", "I look forward to seeing you."],
            ["carry on", "continue", "Carry on talking."],
            ["give up", "quit", "He gave up smoking."],
            ["set up", "establish", "She set up a company."],
            ["sort out", "resolve", "Let's sort out the mess."],
            ["run out of", "have none left", "We ran out of milk."],
            ["work out", "exercise / succeed", "It worked out well."],
            ["turn out", "prove to be", "It turned out fine."],
            ["deal with", "handle", "I'll deal with it."],
            ["bring up", "raise a topic", "She brought up the price."],
            ["get over", "recover from", "He got over the flu."],
            ["look into", "investigate", "We'll look into it."],
            ["come up with", "invent/produce an idea", "She came up with a plan."],
            ["cut down on", "reduce", "Cut down on sugar."],
            ["catch up (with)", "exchange news / reach", "Let's catch up on Friday."],
            ["make up (with)", "reconcile", "They made up after the fight."],
          ]),
          EX("Phrasal narration", [
            ["Last month I came across an old friend. We caught up, and she told me how she'd set up a bakery after giving up her office job. It hasn't been easy — she ran out of money twice — but it worked out, and she's come up with a new range for winter.", "El mes pasado me encontré con una vieja amiga. Nos pusimos al día y me contó cómo montó una panadería tras dejar su trabajo de oficina. No fue fácil — se quedó sin dinero dos veces — pero salió bien y ha creado una nueva gama para el invierno."],
          ]),
          AU("Listen: the narration", "I came across an old friend. We caught up. She'd set up a bakery after giving up her office job.", 0.9),
          N("Two a day", "Phrasal verbs stick when used, not when listed. Add two per day to your active speech this week."),
        ],
        assignment: {
          title: "Phrasal retell",
          instructions:
            "Retell a real month of your life in six sentences using six phrasal verbs from the table.",
          minWords: 20,
          maxWords: 70 },
        homework: ["Use three phrasal verbs in real messages today.", "Note any reactions."],
      },
      {
        title: "Idioms and Word Families",
        blurb: "Break the ice — plus word families that turn one root into ten words.",
        minutes: 25,
        difficulty: 4,
        skills: ["vocabulary", "reading"],
        strands: ["vocabulary", "reading", "writing", "communication"],
        outcomes: [
          "Understand and use fifteen core idioms",
          "Build word families with suffixes",
          "Choose the right family member for the sentence",
        ],
        blocks: [
          H("Frozen phrases, living speech"),
          TB("Fifteen core idioms", ["Idiom", "Meaning"], [
            ["break the ice", "start a conversation comfortably"],
            ["hit the books", "study hard"],
            ["under the weather", "slightly ill"],
            ["a piece of cake", "very easy"],
            ["cost an arm and a leg", "very expensive"],
            ["once in a blue moon", "very rarely"],
            ["on the same page", "in agreement"],
            ["call it a day", "stop working"],
            ["the ball is in your court", "it's your turn to act"],
            ["spill the beans", "reveal a secret"],
            ["cut corners", "do it cheaply/badly"],
            ["get cold feet", "become nervous before a big step"],
            ["in the long run", "over a long period"],
            ["keep an eye on", "watch carefully"],
            ["beat around the bush", "avoid the main point"],
          ]),
          EX("Word family: decide", [
            ["decide (v) — decision (n) — decisive (adj) — decisively (adv) — indecision (n) — indecisive (adj)", "decidir — decisión — decisivo — decisivamente — indecisión — indeciso"],
          ]),
          AU("Listen: idioms in context", "Let's break the ice. It cost an arm and a leg. Let's call it a day.", 0.9),
          W("Idioms are salt, not soup", "One idiom per conversation is natural; three in a row is a performance. Never use an idiom you haven't heard used."),
        ],
        assignment: {
          title: "Family tree",
          instructions:
            "Build word families for three roots (e.g. develop, agree, employ) with four members each, then use three family members in sentences — plus one idiom used naturally.",
          minWords: 20,
          maxWords: 75 },
        homework: ["Catch two idioms in films or talk.", "Guess from context before checking."],
      },
      {
        title: "Register, Connotation and Natural Combinations",
        blurb: "Kids or children? Cheap or inexpensive? Words carry clothing.",
        minutes: 25,
        difficulty: 4,
        skills: ["vocabulary", "communication"],
        strands: ["vocabulary", "communication", "writing", "speaking"],
        outcomes: [
          "Match word choice to formal/informal register",
          "Feel connotation (positive, negative, neutral)",
          "Rewrite a text across two registers",
        ],
        blocks: [
          H("The clothing of words"),
          TB("Register pairs", ["Neutral/formal", "Informal"], [
            ["children", "kids"],
            ["purchase / buy", "pick up, grab"],
            ["require", "need"],
            ["assist", "help"],
            ["sufficient", "enough"],
            ["terminate", "end, finish"],
          ]),
          TB("Connotation sets", ["Neutral", "Positive", "Negative"], [
            ["slim (thin)", "slender, lean", "skinny, scrawny"],
            ["cheap (low price)", "affordable, good value", "cheap (poor quality!)"],
            ["determined", "committed", "stubborn"],
          ]),
          AU("Listen: two registers", "Formal: We require additional assistance. Informal: We need a bit of help.", 0.9),
          N("Cheap is two words in one", "'A cheap flight' = low price (good); 'a cheap watch' = poor quality (bad). Context flips it — feel the connotation before you choose."),
        ],
        assignment: {
          title: "Register rewrite",
          instructions:
            "Write a three-sentence complaint about a delayed delivery twice — once formal (to the company) and once informal (to a friend). Note three word choices that changed.",
          minWords: 25,
          maxWords: 90 },
        homework: ["Rewrite one message you sent today in the opposite register.", "Ask: what changed and why?"],
      },
      {
        title: "Natural Word Combinations and Chapter Review",
        blurb: "Putting it together: the naturalness test — then the Chapter 45 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["vocabulary", "writing"],
        strands: ["vocabulary", "writing", "communication", "speaking", "reading"],
        outcomes: [
          "Judge naturalness with the three checks",
          "Combine all vocabulary tools in one text",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The naturalness test"),
          TB("Three checks before you send", ["Check", "Question"], [
            ["collocation", "Do these two words actually marry?"],
            ["register", "Am I at a wedding in shorts (too informal) or in a suit at the beach?"],
            ["idiom load", "Zero to one idiom per paragraph?"],
          ]),
          EX(
            "Natural vs translated",
            [
              ["Translated feel: 'I made a reservation? No — I did a reservation for two persons at a very economic restaurant.' Natural: 'I booked a table for two at a really good-value restaurant.'", "Sentido de traducción vs natural: reservé mesa para dos en un restaurante con muy buena relación calidad-precio."],
            ],
          ),
          AU("Listen: the natural version", "I booked a table for two at a really good-value restaurant.", 0.9),
          H("Chapter 45 review"),
          T("Three questions on natural English, then the naturalness paragraph."),
        ],
        assignment: {
          title: "My natural English",
          instructions:
            "Write a five-sentence paragraph about a recent experience using three collocations, two phrasal verbs and one idiom, at a consistent register. List the six devices you used.",
          minWords: 30,
          maxWords: 100 },
        questions: [
          MCQ(
            "Which collocation is correct?",
            [["a", "do a decision"], ["b", "make a decision"], ["c", "take a decision quickly now"]],
            "b",
            fb("make a decision", "Decisions are made in English; work and duties are done.", "'Do a decision' is the classic transfer error."),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          MCQ(
            "'We ___ milk — can you buy some?' (have none left)",
            [["a", "ran out of"], ["b", "ran off with"], ["c", "ran into"]],
            "a",
            fb("ran out of", "Run out of = have no more of a supply.", "Run into = meet by chance / collide."),
            { skill: "vocabulary", difficulty: "medium" },
          ),
          MCQ(
            "In a formal complaint, 'cheap' describing a product suggests:",
            [["a", "good value"], ["b", "poor quality"], ["c", "low price, neutrally"]],
            "b",
            fb("poor quality", "Applied to products, 'cheap' often means badly made — use 'low-priced' or 'affordable' for neutral price talk.", "Connotation is context: prices can be cheap; products are often cheap-looking."),
            { skill: "vocabulary", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 46,
    title: "Academic and Professional Writing",
    description:
      "Writing that gets results: formal emails that get answers, reports that inform, proposals that persuade, structured essays that argue, academic vocabulary and hedging, coherence and a professional tone that survives pressure.",
    objectives: [
      "Write formal emails with correct structure and tone",
      "Structure a short report and a proposal",
      "Build a structured argumentative essay",
      "Use academic vocabulary and precise hedging",
    ],
    prerequisites: ["CH-45"],
    hours: 3,
    skills: ["writing", "reading"],
    strands: ["writing", "reading", "communication", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on structure, register and hedging. Assignment: a complete formal email plus a one-page proposal outline.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 12,
    module: "b2-natural-english",
    lessons: [
      {
        title: "Formal Emails",
        blurb: "Subject, purpose, action, close — the email architecture that earns replies.",
        minutes: 25,
        difficulty: 3,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Structure a formal email in four parts",
          "Convert informal phrasing to formal",
          "Make requests that specify action and deadline",
        ],
        blocks: [
          H("The email architecture"),
          TB("Four parts", ["Part", "Job", "Language"], [
            ["subject", "topic + urgency in 6 words", "Request: extension for report (MKT-204)"],
            ["opening", "greet + purpose in line one", "I am writing to request..."],
            ["body", "context + specific ask + deadline", "Could you confirm by Thursday 5 p.m.?"],
            ["close", "thanks + sign-off", "Thank you for your time. Kind regards,"],
          ]),
          TB("Register upgrades", ["Informal", "Formal"], [
            ["I want to know if...", "I would like to confirm whether..."],
            ["Sorry for the late reply", "I apologise for the delay in responding"],
            ["Can you send it ASAP?", "I would appreciate receiving it by Friday, if possible"],
            ["Thanks a lot!", "Thank you for your assistance"],
          ]),
          AU("Listen: the formal email", "I am writing to request a short extension. I would appreciate your confirmation by Thursday.", 0.9),
          N("One email, one ask", "Three asks in one email get zero answers. If you need three things, send three emails — or a numbered list."),
        ],
        assignment: {
          title: "The reply-earning email",
          instructions:
            "Write a complete formal email (subject included) with a real request: context, specific ask with deadline, formal register throughout.",
          minWords: 40,
          maxWords: 120 },
        homework: ["Upgrade one real email you must send this week.", "Apply the four-part structure."],
      },
      {
        title: "Reports and Proposals",
        blurb: "Findings, not stories: the report skeleton; the pitch, not the poem: the proposal.",
        minutes: 25,
        difficulty: 4,
        skills: ["writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Structure a report: summary, findings, recommendations",
          "Structure a proposal: problem, solution, benefits, ask",
          "Write neutrally with data anchors",
        ],
        blocks: [
          H("Two professional skeletons"),
          TB("Report vs proposal", ["Report", "Proposal"], [
            ["Executive summary", "The problem (with evidence)"],
            ["Findings (facts, data)", "The solution (your plan)"],
            ["Analysis (what it means)", "Benefits (for them, not you)"],
            ["Recommendations (numbered)", "Cost and timeline (honest)"],
            ["—", "The ask (clear, single action)"],
          ]),
          EX("Data anchoring", [
            ["Weak: 'Many users complained.' Anchored: 'Support logged 47 complaints in March, 80% about login times.'", "Débil vs anclado en datos: el soporte registró 47 quejas en marzo, el 80% sobre tiempos de acceso."],
          ]),
          AU("Listen: the report opening", "This report summarises findings from the March survey and recommends three actions.", 0.9),
          N("Headlines that state facts", "Report headings carry content: 'Finding 2: Login times tripled after the update' — not 'Some observations about the update'."),
        ],
        assignment: {
          title: "Proposal skeleton",
          instructions:
            "Write a one-page proposal outline for a real improvement (work, home, community): problem + evidence, solution, three benefits, cost/timeline, single clear ask.",
          minWords: 45,
          maxWords: 140 },
        homework: ["Draft the executive summary of a report you'd like to write.", "Keep it to three sentences."],
      },
      {
        title: "Structured Essays",
        blurb: "Thesis, evidence, counterargument, conclusion — the essay that argues honestly.",
        minutes: 30,
        difficulty: 4,
        skills: ["writing", "reading"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Write a precise thesis statement",
          "Order arguments for maximum effect",
          "Handle the counterargument fairly",
        ],
        blocks: [
          H("The essay machine"),
          TB("Five-paragraph architecture", ["Paragraph", "Job"], [
            ["introduction", "context → narrowed focus → thesis"],
            ["body 1", "strongest argument + evidence"],
            ["body 2", "second argument + evidence"],
            ["body 3", "counterargument + your rebuttal"],
            ["conclusion", "restate thesis in new words → implication"],
          ]),
          GR("The honest counterargument", "State the opposite view at its best ('Critics rightly note that...'), then answer it with evidence, not volume. Acknowledging one point of the other side makes yours stronger.", [["Critics rightly note that remote work can isolate staff; however, structured co-working days reduced reported isolation by 40% in our trial.", "Los críticos señalan con razón que el trabajo remoto puede aislar; sin embargo, los días de coworking estructurados redujeron el aislamiento reportado un 40% en nuestra prueba."]]),
          AU("Listen: the thesis moves", "While many argue that..., this essay contends that... because X, Y and Z.", 0.9),
          W("No new arguments in the conclusion", "The conclusion gathers and lifts; it never opens a fresh door. New idea? It belongs in a body paragraph — or another essay."),
        ],
        assignment: {
          title: "Essay draft",
          instructions:
            "Write a structured essay (250-320 words) on a topic you care about: introduction with thesis, two argument paragraphs with evidence, one counterargument paragraph, conclusion.",
          minWords: 100,
          maxWords: 350 },
        homework: ["Read your draft aloud.", "Cut ten percent of the words."],
      },
      {
        title: "Academic Vocabulary and Hedging",
        blurb: "Suggest, indicate, appear to — the language of calibrated claims.",
        minutes: 25,
        difficulty: 4,
        skills: ["vocabulary", "writing"],
        strands: ["writing", "vocabulary", "reading"],
        outcomes: [
          "Use academic verb frames",
          "Hedge claims honestly",
          "Replace absolutes with calibrated language",
        ],
        blocks: [
          H("The calibration kit"),
          TB("Hedging and claiming", ["Strength", "Language"], [
            ["strong", "demonstrates, clearly, undoubtedly"],
            ["measured", "suggests, indicates, appears to, tends to"],
            ["cautious", "may suggest, could indicate, is consistent with"],
          ]),
          EX("Absolute vs calibrated", [
            ["Absolute: 'Social media destroys attention spans.' Calibrated: 'The data suggest that heavy social media use is associated with shorter attention spans in young adults.'", "Absoluta vs calibrada: los datos sugieren una asociación entre el uso intensivo y lapsos de atención más cortos."],
          ]),
          AU("Listen: calibrated claims", "The results suggest... This indicates... The data appear to support...", 0.9),
          N("Hedging is honesty, not weakness", "You hedge when the evidence is partial — and claim strongly only when it isn't. Calibrated language is calibrated to reality."),
        ],
        assignment: {
          title: "Calibration practice",
          instructions:
            "Take five absolute sentences from your essay draft and calibrate each: choose the hedging strength that matches the actual evidence.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Find three absolute claims in any article.", "Recalibrate them."],
      },
      {
        title: "Coherence and Professional Tone and Chapter Review",
        blurb: "The final polish: coherence, tone under pressure — then the Chapter 46 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading", "vocabulary"],
        outcomes: [
          "Apply the coherence checklist",
          "Keep tone professional in conflict",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Tone under fire"),
          TB("Professional tone rules", ["Trigger", "Rule", "Instead of"], [
            ["anger", "describe facts, not character", "'The deadline moved twice' not 'you keep sabotaging'"],
            ["disagreement", "attack the claim, cite the evidence", "'The data show otherwise'"],
            ["refusal", "decline with reason + alternative", "'We can't meet Friday; Monday is possible'"],
            ["pressure", "short sentences, no sarcasm", "'The shipment arrives Thursday.'"],
          ]),
          EX("The escalation rewritten", [
            ["Heated: 'This is completely unacceptable and someone needs to fix it NOW.' Professional: 'The delivery is six days late, which affects our launch. Could you confirm a firm arrival date by tomorrow?'", "Escrito profesional: la entrega lleva seis días de retraso, lo que afecta nuestro lanzamiento. ¿Puede confirmar una fecha firme de llegada mañana?"],
          ]),
          AU("Listen: professional under pressure", "The delivery is six days late, which affects our launch. Could you confirm a firm date by tomorrow?", 0.9),
          H("Chapter 46 review"),
          T("Three questions on professional writing, then the email + proposal final task."),
        ],
        assignment: {
          title: "The professional pack",
          instructions:
            "Submit the final versions of your formal email and your proposal outline, revised with: data anchors in the proposal, calibrated claims, and one tone check explained at the end.",
          minWords: 80,
          maxWords: 240 },
        questions: [
          MCQ(
            "The best subject line for a request email is:",
            [["a", "Hi"], ["b", "Quick question"], ["c", "Request: venue confirmation for June 12 workshop"]],
            "c",
            fb("Request: venue confirmation for June 12 workshop", "Topic + purpose + key detail — the reader can triage before opening.", "Vague subjects get vague reply times."),
            { skill: "writing", difficulty: "easy" },
          ),
          MCQ(
            "'The results ___ a link, but more data is needed.' (measured claim)",
            [["a", "prove beyond doubt"], ["b", "suggest"], ["c", "destroy"]],
            "b",
            fb("suggest", "Partial evidence takes measured verbs: suggest, indicate, appear to.", "Proving is for complete evidence."),
            { skill: "writing", difficulty: "medium" },
          ),
          MCQ(
            "Where do NEW arguments belong?",
            [["a", "The conclusion"], ["b", "A body paragraph"], ["c", "The subject line"]],
            "b",
            fb("a body paragraph", "Conclusions gather; they never open new doors.", "A new argument in the conclusion feels unfinished."),
            { skill: "writing", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 47,
    title: "Discussion, Debate and Presentation",
    description:
      "Spoken performance: complex opinions with nuance, arguments supported by evidence, counterarguments and negotiation, presentation structure, public-speaking delivery, and handling questions — including the hostile ones.",
    objectives: [
      "Express complex, qualified opinions fluently",
      "Support and attack arguments with evidence",
      "Negotiate outcomes in discussion",
      "Structure and deliver a presentation",
      "Handle Q&A, including difficult questions",
    ],
    prerequisites: ["CH-46"],
    hours: 3,
    skills: ["speaking", "communication", "listening"],
    strands: ["communication", "speaking", "listening", "pronunciation", "writing"],
    assessment:
      "Chapter review quiz: 3 questions on argumentation and presentation structure. Assignment: a full presentation outline with Q&A preparation.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 12,
    module: "b2-discussion",
    lessons: [
      {
        title: "Complex Opinions and Evidence",
        blurb: "It depends, on balance, to a large extent — opinions with engines and brakes.",
        minutes: 25,
        difficulty: 4,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "listening", "pronunciation"],
        outcomes: [
          "Qualify opinions naturally",
          "Support claims with typed evidence",
          "Distinguish fact, opinion and expert claim",
        ],
        blocks: [
          H("Opinions with suspension"),
          TB("Qualifiers and evidence", ["Tool", "Examples"], [
            ["qualifiers", "to a large extent, broadly speaking, in most cases, on balance"],
            ["evidence types", "statistics, examples, expert citation, personal experience, analogy"],
            ["evidence frames", "According to..., Research from... suggests..., Take..., for instance"],
            ["concession frames", "Admittedly..., While it's true that..., Granted..."],
          ]),
          EX("A fully-built opinion", [
            ["Broadly speaking, cities should restrict private cars. Admittedly, rural drivers suffer, but according to the city's own data, central traffic fell 30% in the trial. Take Oslo: shop revenue actually rose after pedestrianisation.", "En términos generales, las ciudades deberían restringir los coches privados. Es cierto que los conductores rurales sufren, pero según los datos municipales, el tráfico central cayó un 30% en la prueba. Tomemos Oslo: los ingresos comerciales subieron tras peatonalizar."],
          ]),
          AU("Listen: the built opinion", "Broadly speaking... Admittedly... According to the data... Take Oslo, for instance...", 0.9),
          N("Label your evidence", "'Studies show' without a study is bluffing. Name it — or say 'in my experience' honestly."),
        ],
        assignment: {
          title: "The armoured opinion",
          instructions:
            "Write a 90-second opinion (spoken style, five to seven sentences) with a qualifier, a concession, two evidence types and one analogy.",
          minWords: 35,
          maxWords: 120 },
        homework: ["Deliver it aloud twice.", "Cut the weakest sentence each time."],
      },
      {
        title: "Counterarguments and Negotiation",
        blurb: "Steelmanning, rebuttal and the language of moving toward agreement.",
        minutes: 25,
        difficulty: 4,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Steelman the opposing view before rebutting",
          "Rebut with structure (claim → evidence → impact)",
          "Negotiate with concession trades",
        ],
        blocks: [
          H("The honest fighter's toolkit"),
          TB("Argumentation moves", ["Move", "Language"], [
            ["steelmanning", "The strongest version of your opponent's point is..."],
            ["rebuttal", "That's true, and yet the data show... / The example is real, but it's not typical because..."],
            ["impact framing", "What this means in practice is..."],
            ["concession trade", "If we can agree on X, I'm prepared to move on Y."],
            ["closing agreement", "So we agree on the goal; we differ on the route."],
          ]),
          DL(
            "The budget debate",
            "Two team leads negotiate resources.",
            [
              ["Rae", "The strongest version of your position is that marketing needs every euro to sustain growth. That's fair."],
              ["Tom", "Thank you. And yet the data show retention drives cheaper growth than new leads."],
              ["Rae", "What this means in practice is you'd want two of my three analysts."],
              ["Tom", "If we can agree on shared reporting, I'm prepared to take one, not two."],
              ["Rae", "One analyst plus dashboard access. Done?"],
              ["Tom", "Done. We agree on the goal; we differ on the route — and we just fixed the route."],
            ],
          ),
          AU("Listen: the negotiation", "The strongest version of your position is... If we can agree on X, I'm prepared to move on Y.", 0.9),
          N("Concede early, win later", "Giving a small point early ('That's true, and yet...') buys credibility for the point that matters."),
        ],
        assignment: {
          title: "Steelman script",
          instructions:
            "Write a six-line negotiation or debate script about a real disagreement: steelman, rebuttal with evidence, impact frame, concession trade, agreement line.",
          minWords: 30,
          maxWords: 100 },
        homework: ["Steelman a view you dislike.", "Say it so well its holder would nod."],
      },
      {
        title: "Presentation Structure",
        blurb: "Tell them what you'll say, say it, tell them what you said — with a spine.",
        minutes: 25,
        difficulty: 4,
        skills: ["speaking", "writing"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Structure a presentation in three acts",
          "Write a hook and a memorable close",
          "Design one message per slide",
        ],
        blocks: [
          H("The three-act presentation"),
          TB("Presentation spine", ["Act", "Job", "Tool"], [
            ["opening (10%)", "hook + promise", "question, story, number"],
            ["body (75%)", "three points max, evidence each", "roadmap slide, signposts"],
            ["close (15%)", "callback + call to action", "return to the hook, one ask"],
          ]),
          EX("Hook and callback", [
            ["Hook: 'What if your commute could pay you?' Close: 'You can't make the train pay you — but you can make the time pay. Here's how to start on Monday.'", "Gancho y cierre que regresa al gancho."],
          ]),
          AU("Listen: the spine", "In the next ten minutes, I'll show you three things... First... Which brings us back to where we started.", 0.9),
          W("Slides are scenery, not script", "If the slide holds your sentences, the audience reads instead of listening. One idea, one slide, few words."),
        ],
        assignment: {
          title: "Presentation blueprint",
          instructions:
            "Blueprint a 10-minute presentation: hook, promise, roadmap, three points with evidence type, callback close, call to action — plus six slide titles (one idea each).",
          minWords: 40,
          maxWords: 130 },
        homework: ["Say your hook aloud until it lands in ten seconds.", "Time yourself."],
      },
      {
        title: "Public Speaking Delivery",
        blurb: "Voice, pace, pause, body — the physical craft of being heard and believed.",
        minutes: 25,
        difficulty: 4,
        skills: ["speaking", "pronunciation"],
        strands: ["pronunciation", "speaking", "communication", "listening"],
        outcomes: [
          "Use pace and pause deliberately",
          "Project voice and hold posture",
          "Replace filler with silence",
        ],
        blocks: [
          H("The delivery dials"),
          TB("Delivery tools", ["Tool", "How", "Effect"], [
            ["pause", "2 seconds after a key line", "lets it land"],
            ["pace variation", "slow for weight, fast for excitement", "keeps attention"],
            ["volume step", "one notch up for the thesis, down for intimacy", "signals structure"],
            ["eye contact", "one person, one thought", "connection"],
            ["stance", "feet planted, hands free", "authority"],
          ]),
          EX("The pause rewrite", [
            ["Filler version: 'So, um, basically the results were, like, really positive.' Delivered: 'The results were positive. [pause] Here is why.'", "Versión con muletillas vs versión con pausa."],
          ]),
          AU("Listen: pause for effect", "The results were positive. ... Here is why.", 0.9),
          N("Silence is a tool", "A two-second pause feels like an ocean to the speaker and a gift to the audience. Practise tolerating it."),
        ],
        assignment: {
          title: "The one-minute delivery",
          instructions:
            "Take your presentation opening (hook + promise + roadmap) and deliver it aloud three times: once slow with pauses, once with pace variation, once recording yourself. Write down two delivery notes on what improved.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Do one conversation today with zero fillers.", "Use pauses instead."],
      },
      {
        title: "Handling Questions and Chapter Review",
        blurb: "The Q&A survival kit — friendly, sharp and hostile questions — then the Chapter 47 review.",
        minutes: 25,
        difficulty: 4,
        skills: ["speaking", "communication", "listening"],
        strands: ["communication", "speaking", "listening", "pronunciation", "writing"],
        outcomes: [
          "Answer with the point-first pattern",
          "Handle hostile questions without heat",
          "Say 'I don't know' professionally",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The Q&A patterns"),
          TB("Question types and answers", ["Question type", "Pattern", "Example"], [
            ["friendly", "point → evidence → stop", "Yes — two reasons: ..."],
            ["clarifying", "restate in your words → confirm → answer", "So you're asking whether... — yes."],
            ["hostile", "acknowledge → correct fact → return to topic", "I understand the frustration; the fact is..."],
            ["unknown", "own it + next step", "I don't have that number today; I'll send it by Friday."],
            ["off-topic", "park it honestly", "That's beyond today's scope — happy to discuss after."],
          ]),
          EX("Hostile, handled", [
            ["'You're just protecting your budget!' → 'I hear that concern. The budget facts are public: we cut 12% last year. Now, about the timeline...'", "'¡Solo protege su presupuesto!' → 'Escucho esa preocupación. Los datos del presupuesto son públicos: recortamos un 12% el año pasado. Ahora, sobre el calendario...'"],
          ]),
          AU("Listen: point first", "Yes — two reasons. ... I don't have that number today; I'll send it by Friday.", 0.9),
          H("Chapter 47 review"),
          T("Three questions on argumentation and presenting, then the final presentation pack."),
        ],
        assignment: {
          title: "The presentation pack",
          instructions:
            "Submit your final presentation blueprint plus a Q&A prep sheet: three likely questions (one hostile) with your point-first answers written out.",
          minWords: 60,
          maxWords: 200 },
        questions: [
          MCQ(
            "The best Q&A answer pattern is:",
            [["a", "long background → eventually the point"], ["b", "point first → evidence → stop"], ["c", "answer a different, easier question"]],
            "b",
            fb("point first → evidence → stop", "Audiences remember the first sentence; make it the answer.", "Burying the point loses hostile rooms."),
            { skill: "speaking", difficulty: "medium" },
          ),
          MCQ(
            "Steelmanning means:",
            [["a", "attacking the weakest version of an argument"], ["b", "stating the strongest version of the opposing view"], ["c", "refusing to engage"]],
            "b",
            fb("stating the strongest version of the opposing view", "Steelmanning earns credibility and sharpens your rebuttal.", "Attacking the weakest version is strawmanning."),
            { skill: "speaking", difficulty: "medium" },
          ),
          MCQ(
            "A presentation close should:",
            [["a", "introduce a brand-new argument"], ["b", "call back to the hook and give one action"], ["c", "end with 'that's all, thanks'"]],
            "b",
            fb("call back to the hook and give one action", "The close gathers the talk and converts attention into action.", "New arguments belong in the body."),
            { skill: "speaking", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("b2", {
    number: 48,
    title: "Advanced Reading and Comprehension",
    description:
      "Reading like a critic: critical reading strategies, inference and implicit meaning, writer's attitude and tone, following and evaluating arguments, judging evidence quality, and summarising accurately — the B2 exit skill set.",
    objectives: [
      "Read critically with a questioning stance",
      "Draw and test inferences",
      "Identify writer's attitude, tone and bias",
      "Evaluate arguments and evidence",
      "Summarise texts faithfully and briefly",
    ],
    prerequisites: ["CH-47"],
    hours: 3,
    skills: ["reading", "writing"],
    strands: ["reading", "writing", "communication", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on inference, tone and evidence evaluation. Assignment: a critical summary of a real article plus a bias check.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly. Finishing this chapter completes Level B2.",
    batch: 12,
    module: "b2-discussion",
    lessons: [
      {
        title: "Critical Reading",
        blurb: "Reading with your guards up: purpose, source, claims and omissions.",
        minutes: 25,
        difficulty: 4,
        skills: ["reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Apply the critical reading checklist",
          "Separate claims from evidence",
          "Notice what a text leaves out",
        ],
        blocks: [
          H("The critical stance"),
          TB("Critical reading checklist", ["Question", "What it exposes"], [
            ["Who wrote this, and why?", "purpose and interest"],
            ["What is claimed vs what is shown?", "evidence gaps"],
            ["What numbers hide (sample, period, comparison)?", "statistical framing"],
            ["What's missing — voices, data, context?", "omissions"],
            ["Would a critic of this text say?", "the other side"],
          ]),
          EX("The same fact, two frames", [
            ["'Membership fell 20%.' vs 'Membership fell 20%, after a decade of 300% growth.' Both true; the frames argue.", "'La membresía cayó un 20%' vs '...tras una década de crecimiento del 300%'. Ambas verdaderas; los marcos argumentan."],
          ]),
          AU("Listen: the critical questions", "Who wrote this, and why? What is claimed, and what is shown? What is missing?", 0.9),
          N("Omission is an argument", "What a text does NOT mention often matters more than what it does. Hunt the hole."),
        ],
        assignment: {
          title: "The checklist run",
          instructions:
            "Run the five checklist questions on a real article and write one sentence per answer.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Apply two checklist questions to tomorrow's news.", "Note the pattern by source."],
      },
      {
        title: "Inference and Implicit Meaning",
        blurb: "'She closed the door quietly' — what the text says without saying it.",
        minutes: 25,
        difficulty: 4,
        skills: ["reading", "writing"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Define inference and the evidence chain",
          "Infer character, cause and mood from details",
          "Distinguish safe inference from speculation",
        ],
        blocks: [
          H("Reading between the lines"),
          GR("Inference = text evidence + logic", "An inference is not a guess: it's the only (or most likely) conclusion the text supports. Safe: 'She closed the door quietly' → she didn't want to be heard. Speculation: → she was angry (possible, not supported).", [["The party 'ended early' and the host 'smiled tightly' → the party failed, and the host is hiding disappointment.", "La fiesta 'terminó temprano' y el anfitrión 'sonrió con tensión' → la fiesta fracasó y lo oculta."]]),
          TB("Inference evidence types", ["Signal", "What it implies"], [
            ["word choice (connotation)", "attitude, judgement"],
            ["detail selection", "what the writer finds important"],
            ["structure (what comes first)", "emphasis, priority"],
            ["what characters do, not say", "motive, feeling"],
          ]),
          AU("Listen: between the lines", "She closed the door quietly... and never mentioned the party again.", 0.9),
          N("Test every inference", "Ask: what line in the text forces this conclusion? No line — no inference."),
        ],
        assignment: {
          title: "Inference log",
          instructions:
            "From a story or article, record three details and one safe inference from each — plus one speculation you reject as unsupported.",
          minWords: 18,
          maxWords: 65 },
        homework: ["Practise with a film scene: three actions, three inferences.", "Check them against the ending."],
      },
      {
        title: "Writer's Attitude and Tone",
        blurb: "Words carry weather: sceptical, admiring, ironic — read the forecast.",
        minutes: 20,
        difficulty: 4,
        skills: ["reading", "vocabulary"],
        strands: ["reading", "vocabulary", "communication", "writing"],
        outcomes: [
          "Identify tone from lexical cues",
          "Detect irony and understatement",
          "Name the writer's attitude with evidence",
        ],
        blocks: [
          H("The weather in words"),
          TB("Tone cue table", ["Cue", "Typical tone"], [
            ["'so-called', scare quotes", "sceptical, dismissive"],
            ["'merely', 'simply', 'just'", "minimising, critical"],
            ["'remarkably', 'striking'", "admiring, emphasising"],
            ["'reportedly', 'allegedly'", "distancing, doubtful"],
            ["'unfortunately', 'sadly'", "regretful"],
            ["exaggerated praise", "possibly ironic"],
          ]),
          EX("Tone evidence", [
            ["'The minister's so-called solution merely moved the problem.' — 'so-called' + 'merely' = dismissive scepticism, two cues.", "Las comillas irónicas en la 'solución' + 'merely' = escepticismo desdeñoso, dos señales."],
          ]),
          AU("Listen: the tone cues", "The so-called solution... merely moved the problem... reportedly.", 0.9),
          N("Two cues minimum", "One loaded word might be vocabulary slip; two together is tone. Evidence always beats instinct."),
        ],
        assignment: {
          title: "Tone evidence file",
          instructions:
            "Find three texts with different tones (news, review, opinion). For each, quote two cue words and name the attitude they build.",
          minWords: 18,
          maxWords: 65 },
        homework: ["Rewrite one neutral sentence with a sceptical tone.", "Then with an admiring one."],
      },
      {
        title: "Evaluating Arguments and Evidence",
        blurb: "Claim, reason, evidence, assumption — the anatomy of arguments worth judging.",
        minutes: 25,
        difficulty: 4,
        skills: ["reading", "writing"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Map an argument's parts",
          "Grade evidence: strong, weak, irrelevant",
          "Spot common reasoning fallacies by name",
        ],
        blocks: [
          H("The argument anatomy"),
          TB("Evidence grading", ["Grade", "Features"], [
            ["strong", "recent, relevant, replicable, sourced"],
            ["weak", "dated, small sample, anecdotal, cherry-picked"],
            ["irrelevant", "true but off the point"],
          ]),
          TB("Three fallacies to name", ["Fallacy", "Signature"], [
            ["hasty generalisation", "three cases → 'everyone'"],
            ["false dilemma", "'either we do X or disaster' (there are always third options)"],
            ["appeal to popularity", "'millions agree' (truth isn't a vote)"],
          ]),
          EX("The anatomy in action", [
            ["Claim: 'Hybrid work raises productivity.' Reason: output per hour rose. Evidence: one department, one quarter — weak (small, short). Assumption: that department represents the company.", "Afirmación, razón, evidencia débil (un departamento, un trimestre) y supuesto implícito."],
          ]),
          AU("Listen: the anatomy", "Claim... reason... evidence... assumption. Grade the evidence; name the fallacy.", 0.9),
          W("Correlation is not cause", "Two things rising together (ice cream and drownings) may share a hidden cause (summer). Ask: what else could explain this?"),
        ],
        assignment: {
          title: "Argument autopsy",
          instructions:
            "Dissect one opinion article: claim, reasons, evidence (graded strong/weak/irrelevant), one assumption, one fallacy (or 'none found').",
          minWords: 25,
          maxWords: 90 },
        homework: ["Autopsy one advert's argument.", "Grade its evidence honestly."],
      },
      {
        title: "Summarisation and B2 Exit",
        blurb: "Compress without distorting — the reader's final exam, then the B2 exit review.",
        minutes: 30,
        difficulty: 4,
        skills: ["writing", "reading"],
        strands: ["reading", "writing", "communication", "vocabulary"],
        outcomes: [
          "Write a faithful one-fifth summary",
          "Separate main ideas from support",
          "Complete the B2 exit tasks and chapter review",
        ],
        blocks: [
          H("The compression craft"),
          GR("Summary rules", "1) Read for structure first (thesis + key supports). 2) Write in your own words. 3) Keep proportions — the writer's emphasis, not yours. 4) Never add opinion. 5) Name the source frame ('The author argues...').", [["The author argues that urban trees pay for themselves: they cut cooling costs, raise property values and reduce hospital admissions during heatwaves. She concedes maintenance is costly but cites city data showing a 3:1 return.", "La autora sostiene que los árboles urbanos se pagan solos: reducen costes de refrigeración, suben el valor de las viviendas y reducen ingresos hospitalarios en olas de calor. Concede que el mantenimiento cuesta, pero cita datos municipales de retorno 3:1."]]),
          TB("Summary quality checks", ["Check", "Question"], [
            ["faithful", "Would the author recognise their argument?"],
            ["proportional", "Did the biggest point get the biggest space?"],
            ["clean", "Are there any of MY opinions inside?"],
          ]),
          AU("Listen: the summary frame", "The author argues that... She concedes... and cites...", 0.9),
          H("Chapter 48 review — Level B2 exit"),
          T("You can now read like a critic, argue with evidence, present with structure and write professionally. C1 refines nuance, style and mastery. Complete the review and exit tasks."),
        ],
        assignment: {
          title: "B2 exit: the critical reader",
          instructions:
            "Submit: (1) a 120-word critical summary of a real article (structure, tone cues, evidence grading all reflected); (2) a five-sentence evaluation of its weakest argument, using two vocabulary tools from Chapter 45.",
          minWords: 90,
          maxWords: 250 },
        questions: [
          MCQ(
            "'The minister's \"reform\" merely reshuffled departments.' The tone is:",
            [["a", "admiring"], ["b", "sceptical/dismissive"], ["c", "neutral"]],
            "b",
            fb("sceptical/dismissive", "Scare quotes around 'reform' + 'merely' = two dismissive cues.", "Tone needs evidence: quote the cues."),
            { skill: "reading", difficulty: "medium" },
          ),
          MCQ(
            "Which inference from 'She locked the door and checked it twice' is SAFE?",
            [["a", "She is angry at someone."], ["b", "She wanted the door securely locked."], ["c", "She is a criminal."]],
            "b",
            fb("She wanted the door securely locked.", "The text directly supports the intention; motive beyond it is speculation.", "Safe inferences are forced by the text."),
            { skill: "reading", difficulty: "medium" },
          ),
          MCQ(
            "'Three of my friends improved after the diet, so it works for everyone.' This is:",
            [["a", "strong evidence"], ["b", "hasty generalisation"], ["c", "false dilemma"]],
            "b",
            fb("hasty generalisation", "A tiny sample stretched to 'everyone'.", "False dilemma offers only two options; this stretches a sample."),
            { skill: "reading", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),
];
