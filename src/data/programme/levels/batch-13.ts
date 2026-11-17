/**
 * Core English Programme — Batch 13 (Chapters 49–52, Level C1).
 *
 * Advanced Communication: grammatical mastery structures, nuance and
 * hedging, rhetoric and style, sophisticated vocabulary.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, MCQ, MATCH, N, TB, T, W, fb } from "../types";

export const batch13: ChapterSpec[] = [
  chapter("c1", {
    number: 49,
    title: "Advanced Grammatical Structures",
    description:
      "The structures that mark mastery: inversion for emphasis (Never have I...), cleft sentences (It was John who...), ellipsis and substitution (so do I), and the advanced clause patterns of formal written English.",
    objectives: [
      "Build inversions after negative and limiting adverbs",
      "Build cleft sentences for focus",
      "Use ellipsis and substitution naturally",
      "Deploy advanced clause patterns in formal writing",
    ],
    prerequisites: ["CH-48"],
    hours: 3,
    skills: ["grammar", "writing", "speaking"],
    strands: ["writing", "communication", "reading", "speaking"],
    assessment:
      "Chapter review quiz: 3 questions on inversion and clefts. Assignment: an emphatic mini-essay using all four structures.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 13,
    module: "c1-mastery-structures",
    lessons: [
      {
        title: "Inversion",
        blurb: "Never have I seen such a mess — flipping subject and auxiliary for drama.",
        minutes: 25,
        difficulty: 4,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Invert after negative adverbs (never, rarely, no sooner)",
          "Invert after limiting phrases (not only, under no circumstances)",
          "Judge when inversion is stylish vs theatrical",
        ],
        blocks: [
          H("The dramatic flip"),
          GR(
            "negative/limiting adverb + auxiliary + subject",
            "When a sentence opens with a negative or limiting adverb, the question-style flip applies: 'I have never seen...' → 'Never have I seen...'; 'Not only did she win, but she broke the record.'",
            [
              ["Rarely does a debut novel feel this confident.", "Rara vez una primera novela se muestra tan segura."],
              ["No sooner had we sat down than the fire alarm rang.", "Apenas nos sentamos, sonó la alarma."],
              ["Under no circumstances should you share the password.", "Bajo ninguna circunstancia comparta la contraseña."],
            ],
          ),
          TB("Inversion triggers", ["Trigger", "Example"], [
            ["Never / Rarely / Seldom", "Seldom have cities grown so fast."],
            ["Not only... but also", "Not only is it cheap, it's fast."],
            ["No sooner... than", "No sooner had he left than it rained."],
            ["Hardly... when", "Hardly had we started when it ended."],
            ["Only then / Only after + phrase", "Only then did I understand."],
          ]),
          AU("Listen: dramatic flips", "Never have I seen such a mess. No sooner had we sat down than the alarm rang.", 0.9),
          N("One per paragraph", "Inversion is perfume: powerful in a drop, unbearable in a bucket."),
        ],
        assignment: {
          title: "Five flips",
          instructions:
            "Rewrite five normal sentences as inversions (never, rarely, not only, no sooner, only then).",
          minWords: 15,
          maxWords: 55 },
        homework: ["Find one inversion in serious writing.", "Write one of your own about your week."],
      },
      {
        title: "Cleft Sentences and Emphasis",
        blurb: "It was the noise that woke me — pointing the spotlight with grammar.",
        minutes: 25,
        difficulty: 5,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Build it-clefts for spotlighting",
          "Build what-clefts (What I need is...)",
          "Choose cleft vs normal order by focus need",
        ],
        blocks: [
          H("The spotlight structures"),
          GR(
            "it-cleft / what-cleft",
            "It-cleft: 'It was the noise that woke me' (spotlight on 'the noise'). What-cleft: 'What surprised me was the price.' Use when the spotlight matters — correcting, blaming, contrasting.",
            [
              ["It wasn't the money that convinced her — it was the mission.", "No fue el dinero lo que la convenció — fue la misión."],
              ["What the team needs is time, not lectures.", "Lo que el equipo necesita es tiempo, no sermones."],
            ],
          ),
          TB("Cleft uses", ["Use", "Example"], [
            ["correction", "It was Ana who called, not Marco."],
            ["contrast", "What fails isn't the plan — it's the follow-through."],
            ["strong feeling", "What a night that was!"],
          ]),
          AU("Listen: spotlights", "It was the noise that woke me. What I need is time.", 0.9),
          N("Clefts in speech", "Spoken English clefts constantly: 'What I'm saying is...' — a thinking-out-loud spotlight. Notice them today."),
        ],
        assignment: {
          title: "Spotlight practice",
          instructions:
            "Write four cleft sentences: two it-clefts (one correction, one contrast) and two what-clefts about your work or study.",
          minWords: 12,
          maxWords: 50 },
        homework: ["Catch two clefts in conversation.", "Borrow their patterns."],
      },
      {
        title: "Ellipsis and Substitution",
        blurb: "'I can.' 'So do I.' 'Neither did she.' — the economy of fluent speech.",
        minutes: 25,
        difficulty: 5,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening", "reading"],
        outcomes: [
          "Use ellipsis after modals and auxiliaries",
          "Use so/neither/either agreement",
          "Use one/ones, do so, so do I substitution",
        ],
        blocks: [
          H("Say more with less"),
          TB("Economy tools", ["Tool", "Example", "Full form"], [
            ["ellipsis after auxiliary", "'Will you come?' 'I hope to.' / 'Can you?' 'I can.'", "...I hope to come."],
            ["so + auxiliary + subject", "'I work from home.' 'So do I.'", "I also work from home."],
            ["neither/nor + auxiliary + subject", "'I don't like it.' 'Neither do I.'", "I don't like it either."],
            ["one/ones", "'The red one, please.'", "the red (one)"],
            ["do so", "He promised to help, and he did so.", "he helped"],
          ]),
          GR("Echo rules", "So do I = agreement with a POSITIVE; Neither do I = agreement with a NEGATIVE. The auxiliary must match the original verb: 'She's tired.' 'So am I.'", [["'I've finished.' 'So have I.' / 'I haven't.' 'Neither have I.'", "'He terminado.' 'Yo también.' / 'Yo tampoco.'"]]),
          AU("Listen: the echo drill", "I work from home. So do I. I don't like it. Neither do I.", 0.9),
          W("Match the auxiliary", "'She can swim.' 'So do I' is wrong — the echo must reuse CAN: 'So can I.'"),
        ],
        assignment: {
          title: "Echo dialogues",
          instructions:
            "Write four two-line exchanges using so/neither echoes with four different auxiliaries, plus two ellipsis sentences ('I'd love to.').",
          minWords: 12,
          maxWords: 50 },
        homework: ["Use three echoes in real conversation today.", "Match each auxiliary exactly."],
      },
      {
        title: "Advanced Clause Patterns and Chapter Review",
        blurb: "Fronting, extraposition, nominative clauses — the cabinet of formal syntax, then the Chapter 49 review.",
        minutes: 25,
        difficulty: 5,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication", "speaking"],
        outcomes: [
          "Front elements for emphasis (Strange, it was.)",
          "Use extraposition (It is clear that...)",
          "Combine all mastery structures with judgement",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The formal cabinet"),
          TB("Advanced patterns", ["Pattern", "Example", "Effect"], [
            ["extraposition", "It is clear that costs will rise.", "smooths heavy subjects"],
            ["fronting", "This policy, we cannot accept.", "strong emphasis"],
            ["nominal clause subject", "What the data shows is decisive.", "abstract focus"],
            ["inversion + cleft combo", "Only after the audit was it the CFO who admitted the error.", "double spotlight (use sparingly!)"],
          ]),
          EX("Register check", [
            ["Email version: 'It is essential that we confirm the numbers.' Spoken version: 'What we really need is to check the numbers.' Both fine — different rooms.", "Versión formal vs hablada: estructuras distintas, salas distintas."],
          ]),
          AU("Listen: the patterns", "It is clear that costs will rise. What the data shows is decisive.", 0.9),
          H("Chapter 49 review"),
          T("Three questions on mastery structures, then the emphatic mini-essay."),
        ],
        assignment: {
          title: "Emphatic mini-essay",
          instructions:
            "Write a five-sentence emphatic passage about a strong opinion: one inversion, one it-cleft, one what-cleft, one ellipsis and one extraposition. Mark each device.",
          minWords: 30,
          maxWords: 100 },
        questions: [
          MCQ(
            "Complete the inversion: 'Never ___ such dedication.'",
            [["a", "I have seen"], ["b", "have I seen"], ["c", "did I saw"]],
            "b",
            fb("have I seen", "Negative adverb opening flips auxiliary and subject.", "The tense (present perfect) stays with have."),
            { skill: "grammar", difficulty: "hard" },
          ),
          MCQ(
            "'___ was the noise that ruined the take.' — the cleft:",
            [["a", "It"], ["b", "There"], ["c", "What"]],
            "a",
            fb("It was the noise that...", "The it-cleft spotlights the noise.", "What-clefts start with 'What... is/was...'."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "'I've never tried sushi.' — the agreement echo is:",
            [["a", "So have I."], ["b", "Neither have I."], ["c", "So do I."]],
            "b",
            fb("Neither have I.", "Agreeing with a negative uses neither/nor + matching auxiliary.", "'So have I' would claim you HAVE tried it."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("c1", {
    number: 50,
    title: "Nuance, Hedging and Modality",
    description:
      "The calculus of certainty: expressing uncertainty precisely, hedging in academic and professional writing, qualification and stance-taking, degree of certainty from speculation to conviction, and the nuance that separates competence from mastery.",
    objectives: [
      "Grade uncertainty on a twelve-step ladder",
      "Hedge claims in academic and professional style",
      "Take qualified stances without overclaiming",
      "Interpret others' hedging shrewdly",
    ],
    prerequisites: ["CH-49"],
    hours: 2,
    skills: ["writing", "communication", "reading"],
    strands: ["writing", "communication", "reading", "speaking", "listening"],
    assessment:
      "Chapter review quiz: 3 questions on hedging strength and stance. Assignment: a hedged position paper paragraph and its de-hedged twin.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 13,
    module: "c1-mastery-structures",
    lessons: [
      {
        title: "The Certainty Ladder",
        blurb: "From 'I doubt' to 'I'm convinced' — twelve rungs of calibrated English.",
        minutes: 25,
        difficulty: 4,
        skills: ["vocabulary", "communication"],
        strands: ["communication", "vocabulary", "speaking", "writing"],
        outcomes: [
          "Rank certainty expressions by strength",
          "Move one rung up or down at will",
          "Read others' rungs shrewdly",
        ],
        blocks: [
          H("Twelve rungs"),
          TB("The ladder", ["Rung", "Language"], [
            ["near-zero", "I doubt whether... / I question whether..."],
            ["low", "I suspect / It's conceivable that..."],
            ["possible", "may / might / could / perhaps"],
            ["moderate", "It seems / appears / I'd say"],
            ["leaning", "probably / in all likelihood / I expect"],
            ["high", "I'm fairly confident / The evidence points to"],
            ["very high", "almost certainly / I'd go so far as to say"],
            ["conviction", "I'm convinced / there's little doubt that..."],
          ]),
          EX("Rung movement", [
            ["'The merger will probably succeed.' → one down: 'may succeed.' → one up: 'I'm fairly confident it will succeed.' Same facts, different bets.", "'La fusión probablemente tendrá éxito' → un escalón abajo: 'puede que tenga éxito' → uno arriba: 'estoy bastante seguro de que tendrá éxito.'"],
          ]),
          AU("Listen: the ladder", "It's conceivable... perhaps... probably... almost certainly...", 0.9),
          N("Diplomatic demotions", "Downgrading one rung ('we will' → 'we expect to') is how professionals deliver bad news gently."),
        ],
        assignment: {
          title: "Ladder drill",
          instructions:
            "Write one prediction about next year and rewrite it at four different ladder heights, labelling each rung.",
          minWords: 12,
          maxWords: 50 },
        homework: ["Rank three claims you heard today.", "Which rung were they really on?"],
      },
      {
        title: "Academic and Professional Hedging",
        blurb: "It may be argued, the data appear to — hedging as the honesty system of expertise.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing", "reading"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Hedge verbs, adverbs and clauses",
          "Match hedge density to evidence strength",
          "Unpack others' hedges",
        ],
        blocks: [
          H("The hedging toolkit"),
          TB("Hedge families", ["Family", "Examples"], [
            ["hedged verbs", "appear, seem, suggest, indicate, imply"],
            ["hedge adverbs", "arguably, apparently, possibly, generally"],
            ["frame clauses", "it may be argued, the evidence is consistent with"],
            ["probability phrases", "in most cases, to a certain extent"],
            ["limiters", "within this sample, at the time of writing"],
          ]),
          GR("Hedge to the evidence", "Every claim earns exactly as much hedging as its evidence deserves: complete data → 'demonstrates'; correlational data → 'is associated with'; one case → 'may suggest'.", [["Our trial demonstrates (n=2,000) that... vs One case may suggest that...", "Nuestro ensayo demuestra... vs Un caso puede sugerir..."]]),
          AU("Listen: hedge density", "The data appear to support... It may be argued that... within this sample...", 0.9),
          W("Hedge-dodging is a red flag", "'Studies prove X' (which studies?) claims certainty nobody has. The absence of hedges in a claim is itself information."),
        ],
        assignment: {
          title: "Hedge calibration",
          instructions:
            "Take three claims with different evidence strength (strong data, correlation, one anecdote) and hedge each correctly.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Find one over-claimed headline.", "Re-hedge it honestly."],
      },
      {
        title: "Stance and Qualification",
        blurb: "Where you stand — shown through grammar, not shouted.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading", "speaking"],
        outcomes: [
          "Signal stance with evaluative language",
          "Qualify claims with scope limiters",
          "Disagree elegantly in writing",
        ],
        blocks: [
          H("Stance without shouting"),
          TB("Stance markers", ["Tool", "Positive stance", "Negative stance"], [
            ["evaluative adjectives", "compelling, rigorous, striking", "problematic, questionable, thin"],
            ["stance adverbs", "rightly, crucially", "regrettably, arguably not"],
            ["scope limiters", "broadly, in the main, with exceptions", "—"],
            ["concession + pivot", "While X holds in part, ...", "—"],
          ]),
          EX("The elegant disagreement", [
            ["Blunt: 'This analysis is wrong.' Elegant: 'This analysis is compelling in its framing, yet its central claim rests on a single year of data — which, regrettably, cannot carry the weight.'", "Directo vs elegante: el análisis es sugerente en su planteamiento, pero su afirmación central descansa en un solo año de datos."],
          ]),
          AU("Listen", "This analysis is compelling, yet its central claim rests on a single year of data.", 0.9),
          N("Praise-then-pivot", "The C1 disagreement pattern: genuine specific praise → 'yet' → precise weakness → consequence. The reader feels respected and corrected."),
        ],
        assignment: {
          title: "Elegant disagreement",
          instructions:
            "Write two paragraph-openings disagreeing with published opinions: praise-then-pivot, one stance adverb, one scope limiter each.",
          minWords: 18,
          maxWords: 70 },
        homework: ["Rewrite one blunt disagreement from your past.", "Send the elegant version."],
      },
      {
        title: "Degree of Certainty and Chapter Review",
        blurb: "Modality as a precision instrument — then the Chapter 50 review.",
        minutes: 25,
        difficulty: 5,
        skills: ["grammar", "communication"],
        strands: ["communication", "writing", "reading", "speaking", "listening"],
        outcomes: [
          "Combine modality, hedging and stance fluently",
          "Translate certainty across registers",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The precision instrument"),
          EX("One fact, three registers", [
            ["Scientific: 'The results are consistent with a causal link.' Professional: 'We expect a material impact.' Spoken: 'It's almost certainly going to help.' Same confidence, three costumes.", "Científico, profesional y hablado: la misma confianza, tres vestimentas."],
          ]),
          TB("Register translation table", ["Scientific", "Business", "Everyday"], [
            ["appears to", "we expect", "looks like"],
            ["may suggest", "indicates potential", "might mean"],
            ["is associated with", "drives (loosely!)", "goes with"],
          ]),
          AU("Listen: three registers", "The results are consistent with... We expect a material impact... It's almost certainly going to help.", 0.9),
          H("Chapter 50 review"),
          T("Three questions on nuance, then the position paper."),
        ],
        assignment: {
          title: "Position paper",
          instructions:
            "Write a six-sentence position paragraph: hedged thesis, one ladder-graded prediction, one concession-pivot, one scope limiter. Then rewrite it 'de-hedged' and note in one line what the de-hedged version dishonestly claims.",
          minWords: 35,
          maxWords: 120 },
        questions: [
          MCQ(
            "Which is the STRONGEST certainty expression?",
            [["a", "It's conceivable that..."], ["b", "There's little doubt that..."], ["c", "It might be that..."]],
            "b",
            fb("There's little doubt that...", "Near-conviction — top of the ladder.", "'Conceivable' and 'might' sit near the bottom."),
            { skill: "vocabulary", difficulty: "medium" },
          ),
          MCQ(
            "'The results ___ a causal link' — the honest correlational verb:",
            [["a", "prove"], ["b", "are consistent with"], ["c", "guarantee"]],
            "b",
            fb("are consistent with", "Correlation language stays correlational.", "Prove/guarantee overclaim correlational data."),
            { skill: "writing", difficulty: "hard" },
          ),
          MCQ(
            "'The analysis is compelling in its framing, yet rests on one year of data.' This is:",
            [["a", "hedge-dodging"], ["b", "praise-then-pivot disagreement"], ["c", "false certainty"]],
            "b",
            fb("praise-then-pivot", "Genuine specific praise, then the precise weakness.", "This is the elegant C1 disagreement pattern."),
            { skill: "speaking", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("c1", {
    number: 51,
    title: "Rhetoric, Register and Style",
    description:
      "The craft of persuasion and the wardrobe of English: register and formality as deliberate choice, rhetorical devices (tricolon, anaphora, antithesis), tone control, and the stylistic decisions that give advanced speakers their signature.",
    objectives: [
      "Choose register deliberately across five levels of formality",
      "Deploy core rhetorical devices",
      "Control tone shift within one text",
      "Develop a personal style with intention",
    ],
    prerequisites: ["CH-50"],
    hours: 2,
    skills: ["writing", "speaking", "communication"],
    strands: ["communication", "writing", "speaking", "reading", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 questions on register and rhetorical devices. Assignment: one paragraph rewritten across three registers plus a rhetorical passage.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 13,
    module: "c1-style-vocabulary",
    lessons: [
      {
        title: "Register and Formality",
        blurb: "Frozen, formal, consultative, casual, intimate — five wardrobes for five rooms.",
        minutes: 25,
        difficulty: 4,
        skills: ["communication", "vocabulary"],
        strands: ["communication", "vocabulary", "speaking", "writing"],
        outcomes: [
          "Name five registers with examples",
          "Shift one text across registers",
          "Match register to audience on instinct",
        ],
        blocks: [
          H("The five wardrobes"),
          TB("Register scale", ["Register", "Setting", "Sample"], [
            ["frozen", "ceremonies, law", "Hereby, we the undersigned..."],
            ["formal", "reports, strangers", "We regret to inform you..."],
            ["consultative", "work, service", "Could you confirm the order?"],
            ["casual", "friends", "Can you check that for me?"],
            ["intimate", "family, partners", "Got a sec?"],
          ]),
          EX("One message, three rooms", [
            ["Formal: 'The applicant was unsuccessful on this occasion.' Consultative: 'We can't move forward this time, but we'd welcome a new application.' Casual: 'You didn't get it this round — try again, yeah?'", "El mismo mensaje en tres registros: formal, consultativo y casual."],
          ]),
          AU("Listen: three rooms", "The applicant was unsuccessful... We can't move forward this time... You didn't get it this round.", 0.9),
          W("Register collisions", "A casual aside in a formal report ('long story short, the data's iffy') breaks trust. One wardrobe per document — deliberate exceptions only."),
        ],
        assignment: {
          title: "Three rooms",
          instructions:
            "Write one real message at three registers (formal, consultative, casual) and note the three biggest word choices that changed.",
          minWords: 20,
          maxWords: 75 },
        homework: ["Audit your last five messages for register.", "Did any collide?"],
      },
      {
        title: "Rhetorical Devices",
        blurb: "Three-part lists, anaphora, antithesis — the moves that make speeches memorable.",
        minutes: 25,
        difficulty: 5,
        skills: ["speaking", "writing"],
        strands: ["communication", "speaking", "writing", "pronunciation"],
        outcomes: [
          "Build tricolons and antitheses",
          "Use anaphora for momentum",
          "Ration rhetoric by occasion",
        ],
        blocks: [
          H("The memorable moves"),
          TB("Core devices", ["Device", "Pattern", "Example"], [
            ["tricolon", "three parallel items", "government of the people, by the people, for the people"],
            ["anaphora", "repeated openings", "We will build. We will teach. We will heal."],
            ["antithesis", "opposites balanced", "Ask not what your country can do for you..."],
            ["rhetorical question", "question with one answer", "How long will we wait?"],
            ["chiasmus", "reversed mirror", "Plan the work; work the plan."],
          ]),
          EX("Build your own", [
            ["Tricolon: 'It was fast, cheap and wrong.' Antithesis: 'We wanted applause; we earned silence.'", "Trícolón y antítesis propios."],
          ]),
          AU("Listen: the devices", "We will build. We will teach. We will heal. ... It was fast, cheap and wrong.", 0.9),
          N("One device per speech", "The best speeches use one device, repeatedly, with discipline. Two devices used well beat five used once."),
        ],
        assignment: {
          title: "Device workshop",
          instructions:
            "Write one tricolon, one antithesis and one anaphora paragraph (three sentences) on a topic you care about.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Identify devices in a famous speech.", "Rewrite one of yours with its pattern."],
      },
      {
        title: "Tone and Persuasion",
        blurb: "Warm, dry, urgent, wry — tone is the music under the words.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading", "speaking"],
        outcomes: [
          "Diagnose tone in your own drafts",
          "Shift tone mid-text deliberately",
          "Persuade without pressure",
        ],
        blocks: [
          H("Tone control"),
          TB("Tone levers", ["Lever", "Warm tone", "Cold/urgent tone"], [
            ["sentence length", "longer, flowing", "short, clipped"],
            ["pronouns", "you/we together", "it/they, passive"],
            ["verbs", "invite, share, explore", "require, deliver, execute"],
            ["punctuation", "dashes, soft commas", "full stops. Like this."],
          ]),
          EX("The pivot paragraph", [
            ["Open warm: 'You've built something remarkable here.' Pivot urgent: 'But the numbers leave us one quarter. So here is the plan.' — warmth earns the right to urgency.", "Apertura cálida, giro urgente: la calidez gana el derecho a la urgencia."],
          ]),
          AU("Listen: the pivot", "You've built something remarkable here. But the numbers leave us one quarter. So here is the plan.", 0.9),
          N("Pressure backfires", "Urgency before warmth reads as a threat; warmth before urgency reads as leadership. Order is meaning."),
        ],
        assignment: {
          title: "Tone pivot",
          instructions:
            "Write a five-sentence difficult message (a deadline, a refusal, a change) that pivots tone once, from warm to firm. Mark the pivot sentence.",
          minWords: 20,
          maxWords: 75 },
        homework: ["Read your pivot aloud twice.", "Check the music follows the words."],
      },
      {
        title: "Stylistic Choices and Chapter Review",
        blurb: "Signature, rhythm, restraint — building your style on purpose, then the Chapter 51 review.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading", "speaking", "vocabulary"],
        outcomes: [
          "Make style choices consciously",
          "Vary rhythm like a composer",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Style, deliberately"),
          TB("Style decision table", ["Choice", "Ask"], [
            ["sentence length mix", "Do I have at least one sentence under five words?"],
            ["device density", "One rhetorical device per text, used well?"],
            ["register", "One wardrobe, worn completely?"],
            ["signature", "Would a friend recognise this as me? (If not: is that OK for this genre?)"],
          ]),
          EX("Rhythm sample", [
            ["'The report is finished. The team delivered it early, against every forecast, with a quality that surprised even its authors — and the client renewed before lunch.' — long build, then a landing.", "Construcción larga y aterrizaje corto: ritmo de compositor."],
          ]),
          AU("Listen: the rhythm sample", "The report is finished. The team delivered it early, against every forecast... and the client renewed before lunch.", 0.9),
          H("Chapter 51 review"),
          T("Three questions on register and rhetoric, then the register portfolio."),
        ],
        assignment: {
          title: "Register portfolio",
          instructions:
            "Take one paragraph you wrote in this course and deliver it twice more: once two registers up (more formal), once two down. Add two sentences on which version is 'you'.",
          minWords: 30,
          maxWords: 110 },
        questions: [
          MCQ(
            "'We regret to inform you' belongs to which register?",
            [["a", "casual"], ["b", "formal"], ["c", "intimate"]],
            "b",
            fb("formal", "Fixed formulaic courtesy — the formal wardrobe.", "Casual/intimate contract everything."),
            { skill: "speaking", difficulty: "easy" },
          ),
          MCQ(
            "'Fast, cheap and wrong' is a:",
            [["a", "tricolon"], ["b", "anaphora"], ["c", "chiasmus"]],
            "a",
            fb("tricolon", "Three parallel items — the classic list of three.", "Anaphora repeats openings; chiasmus mirrors."),
            { skill: "writing", difficulty: "medium" },
          ),
          MCQ(
            "Urgency delivered BEFORE warmth usually reads as:",
            [["a", "leadership"], ["b", "a threat"], ["c", "hedging"]],
            "b",
            fb("a threat", "Warmth earns the right to urgency; reversed, pressure feels hostile.", "Order is meaning in tone."),
            { skill: "speaking", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("c1", {
    number: 52,
    title: "Sophisticated Vocabulary",
    description:
      "Vocabulary as precision engineering: advanced collocations, near-synonyms separated by nuance, idiomatic sophistication beyond clichés, connotation and denotation, and the right word in the right context.",
    objectives: [
      "Use advanced collocation sets",
      "Choose between near-synonyms by nuance",
      "Deploy idioms and metaphor with restraint",
      "Judge connotation and precision in context",
    ],
    prerequisites: ["CH-51"],
    hours: 2,
    skills: ["vocabulary", "reading", "writing"],
    strands: ["vocabulary", "reading", "writing", "communication", "speaking"],
    assessment:
      "Chapter review quiz: 3 questions on nuance and connotation. Assignment: a precision rewrite upgrading ten word choices in a paragraph.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 13,
    module: "c1-style-vocabulary",
    lessons: [
      {
        title: "Advanced Collocations",
        blurb: "Cast doubt, raise concerns, draw a distinction — the partnerships of precise prose.",
        minutes: 25,
        difficulty: 4,
        skills: ["vocabulary", "writing"],
        strands: ["vocabulary", "writing", "reading"],
        outcomes: [
          "Use academic/professional collocation sets",
          "Repair advanced collocation errors",
          "Collect collocations actively from reading",
        ],
        blocks: [
          H("The professional partnerships"),
          TB("Advanced collocations", ["Verb + noun", "Adjective + noun"], [
            ["cast doubt on / draw a distinction / raise concerns", "a compelling case / a marginal gain"],
            ["reach a consensus / meet a deadline / exercise caution", "a tentative conclusion / a substantive change"],
            ["pose a threat / bear fruit / strike a balance", "a pressing issue / a nuanced argument"],
            ["shed light on / set a precedent / make headway", "a stark contrast / a vested interest"],
          ]),
          AU("Listen: the partnerships", "cast doubt... draw a distinction... strike a balance... a pressing issue...", 0.9),
          W("Near-miss collocations", "'Make a distinction' (fine) vs 'do a distinction' (wrong); 'heavy criticism' (right) vs 'strong criticism' (acceptable) — collect the strongest partners."),
        ],
        assignment: {
          title: "Partnership practice",
          instructions:
            "Write five sentences using five new collocations from the table, then fix: 'do a distinction', 'strong rain', 'put a threat'.",
          minWords: 18,
          maxWords: 65 },
        homework: ["Harvest five collocations from serious reading.", "Use two this week."],
      },
      {
        title: "Nuanced Synonyms",
        blurb: "Big, large, huge, vast, considerable — the shades between near-twins.",
        minutes: 25,
        difficulty: 5,
        skills: ["vocabulary", "reading"],
        strands: ["vocabulary", "reading", "writing", "communication"],
        outcomes: [
          "Separate near-synonyms by register, degree, connotation",
          "Choose the precise twin for a context",
          "Explain a choice in one line",
        ],
        blocks: [
          H("The twin sorter"),
          TB("Near-synonym ladders", ["Base", "Twins and their shades"], [
            ["important", "crucial (decisive), vital (life-or-death), pressing (urgent), salient (most noticeable)"],
            ["difficult", "hard (general), arduous (long effort), intricate (complex detail), demanding (tests ability)"],
            ["show", "demonstrate (with evidence), reveal (uncover), illustrate (by example), convey (impression)"],
            ["decrease", "decline (steady), plummet (sudden, steep), dwindle (to little), ease (gently)"],
          ]),
          EX("Precision in action", [
            ["Vague: 'Sales went down a lot.' Precise: 'Sales plummeted in Q3, then eased towards year-end.'", "Vago vs preciso: las ventas se desplomaron en el tercer trimestre y luego se moderaron."],
          ]),
          AU("Listen: the shades", "crucial... vital... pressing... arduous... plummeted... dwindled...", 0.9),
          N("One-line justification habit", "For every near-synonym you choose, be able to finish: '...because it adds ___ that the twin lacks.'"),
        ],
        assignment: {
          title: "Twin choices",
          instructions:
            "Choose the precise twin for five contexts you write yourself (importance, difficulty, change, decline, showing) and justify one choice in a sentence.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Sort your five most-used adjectives into ladders.", "Add two twins to each."],
      },
      {
        title: "Idiomatic Sophistication",
        blurb: "Beyond 'piece of cake': metaphor, idiom and when NOT to use them.",
        minutes: 20,
        difficulty: 5,
        skills: ["vocabulary", "communication"],
        strands: ["vocabulary", "communication", "speaking", "reading"],
        outcomes: [
          "Use advanced idioms and metaphor correctly",
          "Recognise dead clichés and avoid them",
          "Match idiom density to genre",
        ],
        blocks: [
          H("The idiom ceiling"),
          TB("C1 idioms worth owning", ["Idiom", "Use"], [
            ["a double-edged sword", "benefit with risk"],
            ["move the goalposts", "change the rules mid-game"],
            ["a blessing in disguise", "hidden good luck"],
            ["read between the lines", "infer the unstated"],
            ["the elephant in the room", "the obvious unspoken issue"],
            ["a level playing field", "fair conditions"],
            ["back to the drawing board", "restart the plan"],
          ]),
          EX("Cliché check", [
            ["Cliché: 'At the end of the day, we think outside the box.' Fresh: 'Ultimately, we design for the boring case first.'", "Cliché vs frescura: al final, diseñamos primero para el caso aburrido."],
          ]),
          AU("Listen: sophisticated idioms", "a double-edged sword... move the goalposts... the elephant in the room...", 0.9),
          W("Metaphor discipline", "One metaphor per paragraph, sustained — never three mixed metaphors in one sentence ('burn the midnight oil to move mountains and open doors')."),
        ],
        assignment: {
          title: "Idiom judgement",
          instructions:
            "Write four sentences using four C1 idioms correctly, then rewrite two of them idiom-free — decide which version each context deserves.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Retire your two most-used clichés.", "Write their fresh replacements."],
      },
      {
        title: "Precision and Context and Chapter Review",
        blurb: "The final vocabulary discipline: the exact word, the right room — then the Chapter 52 review.",
        minutes: 25,
        difficulty: 5,
        skills: ["vocabulary", "writing"],
        strands: ["vocabulary", "writing", "communication", "reading", "speaking"],
        outcomes: [
          "Pass the precision test (exact + room + connotation)",
          "Upgrade a paragraph word by word",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The precision test"),
          TB("Three-question test", ["Question", "Fails when..."], [
            ["Is it exact? (denotation)", "'big' carries a 20% increase and a 200% one"],
            ["Is it the right room? (register)", "'kids' in a legal brief"],
            ["Is it the right music? (connotation)", "'cheap' where 'affordable' was meant"],
          ]),
          EX("Word-by-word upgrade", [
            ["Draft: 'The company had a big problem because people didn't like the new app.' Upgrade: 'The company faced a pressing adoption problem: users found the redesign disorienting.'", "Borrador vs mejora palabra por palabra."],
          ]),
          AU("Listen: the upgrade", "The company faced a pressing adoption problem: users found the redesign disorienting.", 0.9),
          H("Chapter 52 review"),
          T("Three questions on precision, then the upgrade task."),
        ],
        assignment: {
          title: "The precision upgrade",
          instructions:
            "Take a paragraph from your earlier course writing and upgrade ten word choices: three collocations, three near-synonyms, one idiom (or its removal), three register fixes. Submit before and after.",
          minWords: 30,
          maxWords: 110 },
        questions: [
          MCQ(
            "'The report ___ doubt on the safety data.' — the collocation:",
            [["a", "casts"], ["b", "throws"], ["c", "puts"]],
            "a",
            fb("casts doubt", "Cast doubt on is the fixed partnership.", "Throw/put doubt break the collocation."),
            { skill: "vocabulary", difficulty: "medium" },
          ),
          MCQ(
            "Sales fell 60% in one week. The precise verb is:",
            [["a", "declined"], ["b", "plummeted"], ["c", "eased"]],
            "b",
            fb("plummeted", "Sudden and steep — plummeted's exact shade.", "Declined is steady; eased is gentle."),
            { skill: "vocabulary", difficulty: "medium" },
          ),
          MCQ(
            "In a legal brief, 'the children' is preferred over 'the kids' because of:",
            [["a", "denotation"], ["b", "register"], ["c", "grammar"]],
            "b",
            fb("register", "Same denotation, different formality — register choice.", "Both are grammatical and mean the same children."),
            { skill: "vocabulary", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),
];
