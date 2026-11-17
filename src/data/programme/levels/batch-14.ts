/**
 * Core English Programme — Batch 14 (Chapters 53–56, Level C1).
 *
 * Critical and analytical reading, advanced professional writing,
 * advanced spoken communication, and the pronunciation-fluency capstone.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, MCQ, MATCH, N, TB, T, W, fb } from "../types";

export const batch14: ChapterSpec[] = [
  chapter("c1", {
    number: 53,
    title: "Critical and Analytical Reading",
    description:
      "Reading at analyst level: mapping argument structure, exposing hidden assumptions, evaluating claims and detecting bias, synthesising multiple sources into one position, and holding complex texts steady while you read them.",
    objectives: [
      "Map extended arguments to their skeleton",
      "Surface and evaluate unstated assumptions",
      "Detect bias through lexical and structural evidence",
      "Synthesise conflicting sources into a defensible position",
    ],
    prerequisites: ["CH-52"],
    hours: 3,
    skills: ["reading", "writing"],
    strands: ["reading", "writing", "communication", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on assumption analysis, bias detection and synthesis. Assignment: a two-source synthesis note with a bias audit.",
    completion:
      "Complete all 4 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 14,
    module: "c1-professional-communication",
    lessons: [
      {
        title: "Analysing Arguments",
        blurb: "Thesis, supports, warrants — the full skeleton of any argument worth reading.",
        minutes: 25,
        difficulty: 5,
        skills: ["reading", "writing"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Reduce a complex text to its argument skeleton",
          "Identify warrants (the logical bridges)",
          "Judge whether supports carry the thesis",
        ],
        blocks: [
          H("The full skeleton"),
          TB("Argument anatomy, extended", ["Part", "Job", "How to spot it"], [
            ["thesis", "the claim everything serves", "usually ends paragraph 1"],
            ["supports", "reasons and evidence", "topic sentences of body paragraphs"],
            ["warrants", "the logic linking support to thesis", "often UNSTATED"],
            ["qualifiers", "scope limits", "'in most cases', 'since 2010'"],
            ["rebuttals", "handled objections", "'critics say... but'"],
          ]),
          EX("Warrant spotting", [
            ["Claim: 'The cafe should hire more staff.' Support: 'Wait times hit 25 minutes.' WARRANT (unstated): customers leave because of waits. Attack the warrant and the argument wobbles.", "Afirmación, apoyo y garantía implícita: ataca la garantía y el argumento tambalea."],
          ]),
          AU("Listen: the skeleton", "Thesis... supports... the unstated warrant... the qualifier...", 0.9),
          N("Warrants are the soft ground", "Most weak arguments fail not on evidence but on unstated warrants. Always ask: what must ALSO be true for this support to support that claim?"),
        ],
        assignment: {
          title: "Skeleton map",
          instructions:
            "Map one opinion piece: thesis, two supports, one warrant (your words), one qualifier, one rebuttal handled or missing.",
          minWords: 25,
          maxWords: 90 },
        homework: ["Map a colleague's or friend's argument politely.", "Test one warrant out loud."],
      },
      {
        title: "Assumptions and Bias",
        blurb: "What the text needs you to believe — and who the text works for.",
        minutes: 25,
        difficulty: 5,
        skills: ["reading", "communication"],
        strands: ["reading", "communication", "writing", "vocabulary"],
        outcomes: [
          "List a text's operating assumptions",
          "Detect bias via lexical, sourcing and structural cues",
          "Separate bias from perspective honestly",
        ],
        blocks: [
          H("Bias forensics"),
          TB("Bias cue categories", ["Cue type", "Examples"], [
            ["lexical", "loaded verbs ('admitted' vs 'said'), asymmetrical adjectives"],
            ["sourcing", "only friendly experts; unnamed 'critics'"],
            ["structural", "strong claim headline, buried retraction"],
            ["framing", "who is subject, who is object: 'police dispersed crowds' vs 'police attacked crowds'"],
            ["omission", "the missing comparison that would hurt"],
          ]),
          EX("Assumption ledger", [
            ["'Schools must teach coding' assumes: coding predicts job markets in 2040; curriculum time is free; teachers exist. All three debatable — none stated.", "'Los colegios deben enseñar programación' asume tres cosas discutibles — ninguna dicha."],
          ]),
          AU("Listen: framing flips", "Police dispersed the crowd... Police attacked the crowd... Same event, two frames.", 0.9),
          N("Everyone has perspective; not everyone distorts", "Perspective is honest position; bias is hidden weight. Name the perspective, expose the weight."),
        ],
        assignment: {
          title: "Bias audit",
          instructions:
            "Audit one article: two lexical cues, one sourcing pattern, one framing choice, two unstated assumptions. Verdict: perspective, bias, or both — with reasons.",
          minWords: 25,
          maxWords: 90 },
        homework: ["Compare two outlets on one story.", "Map the frame differences."],
      },
      {
        title: "Synthesising Sources",
        blurb: "Not summary: synthesis — where sources disagree, you decide.",
        minutes: 25,
        difficulty: 5,
        skills: ["reading", "writing"],
        strands: ["reading", "writing", "communication", "vocabulary"],
        outcomes: [
          "Build a synthesis matrix (claim × source)",
          "Position yourself among sources",
          "Write a synthesis paragraph with attributed disagreement",
        ],
        blocks: [
          H("The matrix method"),
          TB("Synthesis matrix", ["Question", "Source A says", "Source B says", "I conclude"], [
            ["Does X work?", "Yes, n=500", "No, short study", "Evidence favours A; B's caveat on duration stands"],
            ["—", "—", "—", "Fill every cell before writing a word"],
          ]),
          GR("Attributed disagreement", "Synthesis voices the debate: 'While A finds clear gains, B cautions that... On balance, the stronger methodology lies with A, though its timeframe limits the claim.'", [["While the OECD report finds clear gains, the meta-analysis cautions the effect fades within two years. On balance, the longitudinal data carry more weight here.", "Mientras el informe de la OCDE encuentra ganancias claras, el metaanálisis advierte que el efecto se desvanece en dos años."]]),
          AU("Listen: attributed disagreement", "While A finds clear gains, B cautions that... On balance, the stronger methodology lies with A.", 0.9),
          W("Synthesis is not averaging", "'One says 4, one says 2, truth is 3' is arithmetic, not analysis. Weigh methodology, not volume."),
        ],
        assignment: {
          title: "Synthesis paragraph",
          instructions:
            "Write a six-sentence synthesis paragraph on a real two-sided topic: attribute both sides, weigh one methodological factor, state your position with one hedge.",
          minWords: 30,
          maxWords: 100 },
        homework: ["Build a matrix for your next decision.", "Decide from the matrix, not the mood."],
      },
      {
        title: "Reading Complex Texts and Chapter Review",
        blurb: "Long, dense, layered texts — the strategy that keeps you standing, then the Chapter 53 review.",
        minutes: 25,
        difficulty: 5,
        skills: ["reading", "communication"],
        strands: ["reading", "communication", "writing", "vocabulary"],
        outcomes: [
          "Apply the three-pass method to dense texts",
          "Hold layered texts in mind while reading",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The three-pass method"),
          TB("Passes", ["Pass", "Job", "Time"], [
            ["1: structure", "headings, first/last lines, the skeleton", "10%"],
            ["2: claims", "thesis, supports, warrants, mark the map", "60%"],
            ["3: detail", "evidence quality, notes, objections", "30%"],
          ]),
          EX("Holding layers", [
            ["Margin system: ✓ = agree, ? = check, ! = key claim, ✗ = disputed. The text becomes a conversation with three voices: author, you, and future-you.", "Sistema de márgenes: el texto se convierte en conversación con tres voces."],
          ]),
          AU("Listen", "First pass: structure. Second pass: claims. Third pass: detail.", 0.9),
          H("Chapter 53 review"),
          T("Three questions on analysis, then the synthesis note."),
        ],
        assignment: {
          title: "Two-source note",
          instructions:
            "Submit a two-source synthesis note (matrix plus paragraph) with a bias audit of one source and one warrant exposed.",
          minWords: 45,
          maxWords: 150 },
        questions: [
          MCQ(
            "The UNSTATED logic linking a support to a claim is the:",
            [["a", "thesis"], ["b", "warrant"], ["c", "qualifier"]],
            "b",
            fb("warrant", "The warrant is the bridge the argument hopes you won't inspect.", "Thesis is the claim; qualifier limits its scope."),
            { skill: "reading", difficulty: "hard" },
          ),
          MCQ(
            "Headline claims success; the retraction hides in paragraph nine. This is which bias cue?",
            [["a", "lexical"], ["b", "structural"], ["c", "sourcing"]],
            "b",
            fb("structural", "Placement and emphasis — how the text is built — is a structural cue.", "Lexical is word choice; sourcing is who is quoted."),
            { skill: "reading", difficulty: "medium" },
          ),
          MCQ(
            "True synthesis differs from summary because it:",
            [["a", "shortens both texts"], ["b", "positions the writer among the sources"], ["c", "averages the numbers"]],
            "b",
            fb("positions the writer among the sources", "Synthesis weighs and decides; summary only reports.", "Averaging is arithmetic, not analysis."),
            { skill: "reading", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("c1", {
    number: 54,
    title: "Advanced Professional Writing",
    description:
      "Writing at professional grade: research-style writing with citations, analytical reports, persuasive proposals, analytical essays, professional correspondence, and the editing discipline that turns good drafts into publishable text.",
    objectives: [
      "Write research-style prose with clean citation practice",
      "Structure analytical reports and essays",
      "Draft persuasive proposals for decision-makers",
      "Edit own writing in disciplined passes",
    ],
    prerequisites: ["CH-53"],
    hours: 3,
    skills: ["writing", "reading"],
    strands: ["writing", "reading", "communication", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on structure, citation and editing. Assignment: an analytical essay (400 words) plus a documented editing pass.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 14,
    module: "c1-professional-communication",
    lessons: [
      {
        title: "Research-Style Writing",
        blurb: "Question, method, evidence, limit — and citations that carry weight honestly.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing", "reading"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Structure research prose (question → method → finding → limit)",
          "Integrate citations as sentence citizens",
          "Distinguish own voice from sources' voices",
        ],
        blocks: [
          H("The research spine"),
          TB("Research paragraph anatomy", ["Move", "Language"], [
            ["question", "The study asks whether..."],
            ["method", "Using a sample of... over the period..."],
            ["finding", "The results indicate..."],
            ["limit", "These findings hold within... and should not be read as..."],
          ]),
          EX("Citations as citizens", [
            ["Dropped-in: '(Smith 2019).' Integrated: 'Smith's 2019 audit of 300 firms found the opposite — a gap this study examines.'", "Cita caída vs integrada: la cita como ciudadana de la frase."],
          ]),
          AU("Listen: the research spine", "The study asks whether... The results indicate... These findings hold within...", 0.9),
          N("Voice discipline", "Mark every sentence in a draft S (source) or M (me). If M disappears for a page, you're summarising, not arguing."),
        ],
        assignment: {
          title: "Research paragraph",
          instructions:
            "Write a research-style paragraph on a topic you know: question, method description, finding (hedged to evidence), limit — with one integrated citation (real or clearly marked [source]).",
          minWords: 30,
          maxWords: 100 },
        homework: ["Mark a published paragraph S/M.", "Note where the author's voice returns."],
      },
      {
        title: "Analytical Reports and Proposals",
        blurb: "Reports that think; proposals that move decision-makers.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Build an analytical report around a question, not a topic",
          "Sequence a proposal for a decider's attention",
          "Write an executive summary that stands alone",
        ],
        blocks: [
          H("Question-driven structure"),
          TB("Report vs proposal, C1 grade", ["Report", "Proposal"], [
            ["opens with the question", "opens with the decision sought"],
            ["findings ordered by weight", "benefits ordered by THEIR priorities"],
            ["analysis separates fact from interpretation", "risk section is honest (this buys trust)"],
            ["recommendations ranked, with cost of inaction", "one ask, one date, one owner"],
          ]),
          EX("The standalone summary", [
            ["A decider reads only the summary: question, three findings, recommendation, cost of inaction — in 120 words. If it needs the report, it failed.", "Un decisor lee solo el resumen: pregunta, tres hallazgos, recomendación, coste de no actuar — en 120 palabras."],
          ]),
          AU("Listen", "This report asks one question. Three findings follow. We recommend one action by one date.", 0.9),
          N("Cost of inaction", "The most underused paragraph in business writing: what happens if we do nothing. It converts reports into decisions."),
        ],
        assignment: {
          title: "Decision document",
          instructions:
            "Write a 150-word executive summary (question, three findings, one recommendation, cost of inaction) plus the one-line ask with date and owner.",
          minWords: 40,
          maxWords: 130 },
        homework: ["Draft the cost-of-inaction paragraph for something real.", "Keep it factual, not frightening."],
      },
      {
        title: "Analytical Essays",
        blurb: "The essay that takes a position and survives its own scrutiny.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing", "reading"],
        strands: ["writing", "reading", "communication", "vocabulary"],
        outcomes: [
          "Frame an analytical (not descriptive) thesis",
          "Sequence paragraphs as a logical argument",
          "Interrogate own claims before readers do",
        ],
        blocks: [
          H("Analytical vs descriptive"),
          TB("Thesis upgrade", ["Descriptive", "Analytical"], [
            ["This essay discusses remote work.", "Remote work survives only where trust replaces monitoring."],
            ["There are many views on X.", "The X debate dissolves once costs are measured per hour, not per head."],
          ]),
          GR("The self-interrogation pass", "After each body paragraph ask: what would the smartest critic of this paragraph say? Answer it in the next paragraph — or fold the answer in. The essay that argues with itself arrives armoured.", [["It might be objected that the sample is small; the objection stands, and the claim is accordingly narrowed to firms under 200 staff.", "Puede objetarse que la muestra es pequeña; la objeción se sostiene y la afirmación se acota en consecuencia."]]),
          AU("Listen", "It might be objected that... The objection stands, and the claim is narrowed accordingly.", 0.9),
          W("Descriptive theses hide", "'This essay will discuss' announces a tour. 'This essay argues that' announces a position. C1 essays argue."),
        ],
        assignment: {
          title: "Armoured essay plan",
          instructions:
            "Plan an analytical essay: analytical thesis, three paragraph claims in logical order, the smartest objection to each, and where you'll answer it.",
          minWords: 30,
          maxWords: 100 },
        homework: ["Write paragraph one.", "Delete your first sentence; is the second stronger?"],
      },
      {
        title: "Professional Correspondence",
        blurb: "Email that decides, letters that land — the diplomacy of the inbox.",
        minutes: 20,
        difficulty: 4,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Write decision-forcing emails",
          "Handle delicate correspondence (refusal, dispute)",
          "Match structure to stakes",
        ],
        blocks: [
          H("Stakes-based structure"),
          TB("Email types", ["Stakes", "Structure"], [
            ["low", "one ask, one line context, done"],
            ["medium", "context → options → recommendation → ask"],
            ["high (conflict)", "acknowledge → facts → impact → path forward → ask"],
            ["refusal", "thanks → decision → reason → the door left open"],
          ]),
          EX("The refusal that keeps the relationship", [
            ["'Thank you for the invitation. On this occasion we can't participate — the timeline conflicts with our Q3 commitments. I hope we can revisit this in the spring; the project deserves the attention.'", "La negativa que conserva la relación."],
          ]),
          AU("Listen", "Thank you for the invitation. On this occasion we can't participate — I hope we can revisit this in the spring.", 0.9),
          N("Decisions in line one", "Professional readers triage: put the decision ('We can't participate') before the reasons, and always leave a door."),
        ],
        assignment: {
          title: "Delicate email",
          instructions:
            "Write one delicate email (refusal, dispute or bad news): decision first, reason, impact acknowledged, one door left open.",
          minWords: 30,
          maxWords: 100 },
        homework: ["Audit your sent folder for buried decisions.", "Rewrite one decision to line one."],
      },
      {
        title: "Editing and Revision and Chapter Review",
        blurb: "The craft happens in the passes — structured self-editing, then the Chapter 54 review.",
        minutes: 25,
        difficulty: 5,
        skills: ["writing"],
        strands: ["writing", "communication", "reading", "vocabulary"],
        outcomes: [
          "Run the four-pass edit",
          "Cut ruthlessly without losing meaning",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The four-pass edit"),
          TB("Editing passes", ["Pass", "Question", "Tool"], [
            ["1: argument", "Does the structure hold?", "outline the draft after writing"],
            ["2: paragraphs", "One job per paragraph?", "topic-sentence check"],
            ["3: sentences", "Any over 25 words? Any passive hiding the actor?", "read aloud"],
            ["4: words", "twins upgraded? clichés dead? hedges calibrated?", "precision test"],
          ]),
          EX("The 20% cut", [
            ["Find the version of your last paragraph 20% shorter with nothing lost. It exists. It always exists.", "Encuentra la versión un 20% más corta sin perder nada. Existe. Siempre existe."],
          ]),
          AU("Listen", "Pass one: argument. Pass two: paragraphs. Pass three: sentences. Pass four: words.", 0.9),
          H("Chapter 54 review"),
          T("Three questions on professional writing, then the final essay task."),
        ],
        assignment: {
          title: "The polished essay",
          instructions:
            "Submit your 400-word analytical essay after the four-pass edit, with a two-sentence editing note: what you cut and what you strengthened.",
          minWords: 120,
          maxWords: 450 },
        questions: [
          MCQ(
            "Which is an ANALYTICAL thesis?",
            [["a", "This essay discusses hybrid work."], ["b", "Hybrid work survives only where trust replaces monitoring."], ["c", "There are many views on hybrid work."]],
            "b",
            fb("Hybrid work survives only where trust replaces monitoring.", "It takes a testable position with a condition.", "Discussing and many-views theses avoid arguing."),
            { skill: "writing", difficulty: "medium" },
          ),
          MCQ(
            "In professional email, the DECISION belongs:",
            [["a", "after three paragraphs of context"], ["b", "in line one"], ["c", "only in the subject"]],
            "b",
            fb("in line one", "Readers triage; the decision first respects their time.", "Context supports the decision; it doesn't bury it."),
            { skill: "writing", difficulty: "easy" },
          ),
          MCQ(
            "The four-pass edit ends with:",
            [["a", "argument structure"], ["b", "word-level precision"], ["c", "spell-check only"]],
            "b",
            fb("word-level precision", "Argument → paragraphs → sentences → words: big to small.", "Structure comes first; words come last."),
            { skill: "writing", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("c1", {
    number: 55,
    title: "Advanced Spoken Communication",
    description:
      "Speaking under real pressure: negotiation strategy and language, formal debate, public presentations at professional level, interview performance, spontaneous speech without panic, nuanced discussion and storytelling for grown-ups.",
    objectives: [
      "Negotiate with interests-based strategy and the language to match",
      "Debate formally: motion, rebuttal, points of information",
      "Present at professional level under time pressure",
      "Handle interviews with structured, honest answers",
      "Speak spontaneously with composure and nuance",
    ],
    prerequisites: ["CH-54"],
    hours: 3,
    skills: ["speaking", "communication", "listening"],
    strands: ["communication", "speaking", "listening", "pronunciation", "writing"],
    assessment:
      "Chapter review quiz: 3 questions on negotiation, debate and interview strategy. Assignment: a recorded negotiation or debate script with strategy notes.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 14,
    module: "c1-professional-communication",
    lessons: [
      {
        title: "Negotiation",
        blurb: "Interests, not positions — and the English that trades them.",
        minutes: 25,
        difficulty: 5,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Separate positions from interests",
          "Trade concessions across issues",
          "Use conditional bargaining language",
        ],
        blocks: [
          H("The interests method"),
          TB("Negotiation language", ["Move", "Language"], [
            ["probe interests", "Help me understand what matters most here."],
            ["invent options", "What if we unbundled the timeline from the price?"],
            ["conditional trade", "If we could move on X, would you reconsider Y?"],
            ["anchor politely", "We're working from a range of..."],
            ["close and confirm", "So we agree on A and B by Friday — I'll send the summary."],
          ]),
          GR("Position vs interest", "Position: 'We need 20% off.' Interest: 'Our budget caps us at 80.' One is a wall, the other a door — find the interest behind every position.", [["'We need the discount' (position) hides 'our budget is fixed and a delay kills the project' (interests — which you can serve three ways).", "'Necesitamos el descuento' esconde intereses que puedes atender de tres formas."]]),
          AU("Listen", "Help me understand what matters most here. If we could move on the timeline, would you reconsider the price?", 0.9),
          N("BATNA before you speak", "Know your Best Alternative To a Negotiated Agreement — your walk-away option — and the other side's, before the first word."),
        ],
        assignment: {
          title: "Negotiation script",
          instructions:
            "Script one real negotiation (six to eight turns): interest probe, option invention, conditional trade, close with confirmation. Add a two-line strategy note (both sides' interests).",
          minWords: 35,
          maxWords: 120 },
        homework: ["Practise one conditional trade aloud.", "If-we-could-X-would-you-Y, with a straight face."],
      },
      {
        title: "Debate",
        blurb: "Motion, case, rebuttal, points of information — formal arguing as a sport.",
        minutes: 25,
        difficulty: 5,
        skills: ["speaking", "communication", "listening"],
        strands: ["communication", "speaking", "listening", "writing"],
        outcomes: [
          "Build a debate case (definition, team line, arguments)",
          "Rebut in four steps",
          "Offer and take points of information",
        ],
        blocks: [
          H("The debate toolkit"),
          TB("Case and rebuttal", ["Element", "Job", "Language"], [
            ["definition", "frame the motion fairly", "We define 'success' as..."],
            ["team line", "one-sentence case", "Our case rests on one truth:..."],
            ["signposting", "Three arguments, announced", "First... second... finally..."],
            ["rebuttal (4 steps)", "They said → but → because → therefore", "The opposition claims X; this fails because Y; the data show Z; therefore the case stands."],
            ["point of information", "15-second interruption", "On that point—"],
          ]),
          EX("A four-step rebuttal", [
            ["'The proposition says remote work cuts costs. But costs are only half the ledger: because onboarding doubled our training budget, the claim collapses. Therefore the cost argument actually favours hybrid.'", "'La proposición dice que el trabajo remoto recorta costes. Pero...' — refutación en cuatro pasos."],
          ]),
          AU("Listen", "The proposition claims X; this fails because Y; the data show Z; therefore our case stands.", 0.9),
          N("Rebut the argument, never the person", "Adjudicators score clash of ideas; personal attacks forfeit credibility instantly."),
        ],
        assignment: {
          title: "The four-step rebuttal",
          instructions:
            "Write one debate case line and two four-step rebuttals against two plausible opposing arguments.",
          minWords: 25,
          maxWords: 90 },
        homework: ["Debate tonight's dinner choice formally.", "Use the four steps with a smile."],
      },
      {
        title: "Public Presentations at Level",
        blurb: "The ten-minute professional talk: story spine, one number, silence used well.",
        minutes: 25,
        difficulty: 5,
        skills: ["speaking", "pronunciation", "communication"],
        strands: ["communication", "speaking", "pronunciation", "listening", "writing"],
        outcomes: [
          "Structure a talk around one question",
          "Deliver one memorable number and one story",
          "Use silence, pace and stress at professional level",
        ],
        blocks: [
          H("The professional spine"),
          TB("Talk anatomy", ["Minute", "Content"], [
            ["0–1", "one question the audience owns + your promise"],
            ["1–8", "three moves: story, number, counterintuitive point"],
            ["8–9", "the one number they'll remember + what it means"],
            ["9–10", "callback to the question + one action"],
          ]),
          GR("The rule of one", "One question, one story, one number, one action. Audience memory is a shelf with four slots — fill them deliberately.", [["By the end, they'll forget your slides. They'll keep the number — if you gave them exactly one.", "Al final olvidarán las diapositivas. Conservarán el número — si les diste exactamente uno."]]),
          AU("Listen", "Here is the question we all own. ... One number. ... One action before we part.", 0.9),
          N("Silence is the C1 delivery skill", "Two seconds of silence before your key line is worth ten minutes of rehearsal. Practise not filling it."),
        ],
        assignment: {
          title: "The ten-minute plan",
          instructions:
            "Plan a ten-minute talk: the question, the story (two lines), the number, the counterintuitive point, the action — plus where your two silences fall.",
          minWords: 30,
          maxWords: 100 },
        homework: ["Deliver minute one aloud five times.", "Time your silences with a watch."],
      },
      {
        title: "Interview Performance",
        blurb: "STAR and beyond: honest, structured answers that don't sound rehearsed.",
        minutes: 25,
        difficulty: 5,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "listening", "writing"],
        outcomes: [
          "Answer behavioural questions with STAR",
          "Answer the weakness and 'why us' questions honestly",
          "Ask questions that signal seniority",
        ],
        blocks: [
          H("The structured answer"),
          TB("Question patterns", ["Question", "Structure"], [
            ["behavioural ('Tell me about a time...')", "STAR: Situation (1 line) → Task → Action (60%) → Result (with a number)"],
            ["weakness", "real weakness → what you changed → early evidence"],
            ["why us", "their specifics → your fit → what you'll add (not what you'll learn)"],
            ["conflict", "other side's fair position → your action → outcome → lesson"],
          ]),
          EX("Weakness, done right", [
            ["'I used to take code review criticism personally. I started treating every review as a bug report — since then, two teammates asked me to review their work specifically.'", "'Antes me tomaba las revisiones de código como algo personal. Empecé a tratarlas como informes de errores — desde entonces, dos compañeros me pidieron revisar su trabajo.'"],
          ]),
          AU("Listen", "The situation was... my task... the action I took... the result, in numbers...", 0.9),
          N("Numbers are credibility", "'It improved things' is noise; 'cut onboarding from six weeks to three' is signal. Every STAR needs one number."),
        ],
        assignment: {
          title: "Interview prep sheet",
          instructions:
            "Write STAR answers (situation, task, action, result-with-number) for two real behavioural questions, plus an honest weakness answer and two questions YOU would ask them.",
          minWords: 40,
          maxWords: 140 },
        homework: ["Say one STAR answer in 90 seconds.", "Cut it to 60 without losing the number."],
      },
      {
        title: "Spontaneity, Nuance and Storytelling",
        blurb: "Thinking on your feet — and the adult story that makes a point, then the Chapter 55 review.",
        minutes: 25,
        difficulty: 5,
        skills: ["speaking", "communication", "listening"],
        strands: ["communication", "speaking", "listening", "pronunciation"],
        outcomes: [
          "Buy thinking time gracefully",
          "Structure spontaneous answers (PREP)",
          "Tell a five-beat adult story with a point",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The spontaneous toolkit"),
          TB("On-your-feet tools", ["Tool", "How"], [
            ["PREP structure", "Point → Reason → Example → Point (restate)"],
            ["buying time", "That's the key question, and here's why..."],
            ["nuance on demand", "broadly... with two exceptions... on balance..."],
            ["the pivot", "The honest answer has two parts..."],
          ]),
          GR("The adult story", "Five beats: normal world → the turn → the bad advice you ignored → the choice you made → what it cost and paid. Adult stories carry cost; fairy tales don't.", [["We shipped on time. The cost: I missed my daughter's recital. The pay: the client renewed — and I've never shipped through a recital again.", "Lanzamos a tiempo. El coste: me perdí el recital de mi hija. La ganancia: el cliente renovó — y nunca he vuelto a lanzar durante un recital."]]),
          AU("Listen", "That's the key question, and here's why... ... We shipped on time. The cost: I missed my daughter's recital.", 0.9),
          H("Chapter 55 review"),
          T("Three questions on spoken mastery, then the recorded task."),
        ],
        assignment: {
          title: "Spontaneity record",
          instructions:
            "Record (or script for recording) three two-minute spontaneous answers using PREP, one negotiation exchange and one five-beat story. Submit the script plus a one-paragraph performance note.",
          minWords: 60,
          maxWords: 200 },
        questions: [
          MCQ(
            "In negotiation, the INTEREST behind the position 'we need 20% off' is:",
            [["a", "the discount itself"], ["b", "what the discount serves (budget cap, delay risk...)"], ["c", "the final contract price"]],
            "b",
            fb("what the discount serves", "Interests explain positions — and can be served many ways.", "The position is one wall; interests are the doors around it."),
            { skill: "speaking", difficulty: "hard" },
          ),
          MCQ(
            "The four-step rebuttal is:",
            [["a", "they said → but → because → therefore"], ["b", "I disagree → I'm right → trust me → next"], ["c", "silence → repeat → smile → sit"]],
            "a",
            fb("they said → but → because → therefore", "Acknowledge, contest, evidence, conclude.", "The other options concede the clash and the credibility."),
            { skill: "speaking", difficulty: "medium" },
          ),
          MCQ(
            "In STAR answers, the R should include:",
            [["a", "your feelings only"], ["b", "a number"], ["c", "the team's biography"]],
            "b",
            fb("a number", "Quantified results are credibility: 'cut onboarding from six weeks to three'.", "Feelings are real; numbers are remembered."),
            { skill: "speaking", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("c1", {
    number: 56,
    title: "Pronunciation, Fluency and Capstone",
    description:
      "The final polish and the final proof: connected speech (linking, elision, assimilation), stress and rhythm, intonation as meaning, clarity at speed, integrated communication projects, and the capstone proficiency assessment that closes the programme.",
    objectives: [
      "Understand and use connected speech features",
      "Control word and sentence stress for meaning",
      "Use intonation patterns (falls, rises, fall-rises) deliberately",
      "Complete an integrated capstone communication project",
    ],
    prerequisites: ["CH-55"],
    hours: 3,
    skills: ["pronunciation", "speaking", "listening", "communication"],
    strands: ["pronunciation", "speaking", "listening", "communication", "reading", "writing", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on connected speech, stress and intonation. Assignment: the capstone — one integrated project (written + spoken + reflective components).",
    completion:
      "Complete all 5 lessons, submit the capstone project, and answer at least 2 of the 3 review questions correctly. Finishing this chapter completes Level C1 and the 56-chapter programme.",
    batch: 14,
    module: "c1-professional-communication",
    lessons: [
      {
        title: "Connected Speech",
        blurb: "An apple becomes 'a-napple': linking, elision and assimilation — why natives sound fast.",
        minutes: 25,
        difficulty: 5,
        skills: ["pronunciation", "listening"],
        strands: ["pronunciation", "listening", "speaking"],
        outcomes: [
          "Link consonant-to-vowel across words",
          "Recognise elision and assimilation in fast speech",
          "Understand natives better by imitating them",
        ],
        blocks: [
          H("The stream of speech"),
          TB("Connected speech features", ["Feature", "Example", "Sounds like"], [
            ["linking", "an apple", "a-napple"],
            ["linking (r)", "far away", "fa-raway"],
            ["elision (loss)", "next day", "nex' day"],
            ["assimilation", "did you", "didja / didʒə"],
            ["weak forms", "cup of tea", "cuppa tea"],
          ]),
          EX("One sentence, streamed", [
            ["'Would you like a cup of tea?' → 'Wouldja like a cuppa tea?' — the written words and the sound stream are two languages.", "'¿Quieres una taza de té?' — las palabras escritas y el sonido fluido son dos idiomas."],
          ]),
          AU("Listen: the stream", "Would you like a cup of tea? ... Wouldja like a cuppa tea?", 0.95),
          N("Imitate, don't analyse", "Choose one sentence from a native speaker and copy the stream exactly — three times. Listening improves fastest through the mouth."),
        ],
        assignment: {
          title: "Stream practice",
          instructions:
            "Take three sentences from real native audio. Write them, then write the 'stream version' (linked/elided), then practise both aloud. Note one feature you now hear everywhere.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Shadow one minute of native speech.", "Match the stream, not the words."],
      },
      {
        title: "Stress and Rhythm",
        blurb: "PREsent or preSENT? — stress changes words; sentence stress changes meanings.",
        minutes: 25,
        difficulty: 5,
        skills: ["pronunciation", "speaking"],
        strands: ["pronunciation", "speaking", "listening", "vocabulary"],
        outcomes: [
          "Distinguish word-class stress pairs (REcord/reCORD)",
          "Place sentence stress for meaning shifts",
          "Hear English's stress-timed rhythm",
        ],
        blocks: [
          H("The stress system"),
          TB("Stress layers", ["Layer", "Rule", "Example"], [
            ["word stress (word-class pairs)", "noun front, verb back", "PREsent (n) / preSENT (v)"],
            ["sentence stress", "content words carry the beat", "I DIDN'T say he stole it (someone else did)"],
            ["contrastive stress", "stress moves meaning", "I didn't say HE stole it (someone else)"],
            ["rhythm", "stressed beats stay timed", "The CAT is ON the MAT — beats even out"],
          ]),
          EX("One sentence, seven meanings", [
            ["'I didn't say he stole the money.' Stress 'I' (someone else said it), 'say' (I implied it), 'he' (someone else stole it), 'money' (he stole something else).", "Una frase, siete significados según el acento."],
          ]),
          AU("Listen", "I didn't say he STOLE it. ... I didn't say HE stole it.", 0.9),
          W("Wrong stress, wrong word", "'comFORTable' with wrong stress becomes an unrecognisable word to native ears. Stress errors break communication more than sound errors."),
        ],
        assignment: {
          title: "Stress lab",
          instructions:
            "Write five word-class pairs (record, present, increase...) with both stresses, plus three versions of one sentence with contrastive stress and each version's meaning.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Mark the stressed words in a paragraph.", "Read it with only those beats loud."],
      },
      {
        title: "Intonation",
        blurb: "The melody that says yes, no, maybe and 'think again'.",
        minutes: 25,
        difficulty: 5,
        skills: ["pronunciation", "speaking", "listening"],
        strands: ["pronunciation", "speaking", "listening", "communication"],
        outcomes: [
          "Use falling tones for certainty and wh-questions",
          "Use rising tones for yes/no questions and checks",
          "Use fall-rise for polite doubt and 'not finished'",
        ],
        blocks: [
          H("The three melodies"),
          TB("Intonation patterns", ["Pattern", "Signals", "Example"], [
            ["fall ↓", "finished, certain", "It's ready↓. Where were you↓?"],
            ["rise ↑", "question, unsure, polite", "Ready?↑ Are you sure?↑"],
            ["fall-rise ↗↓", "reservation, contrast, more to come", "It's... possible↗↓ (but don't count on it)"],
          ]),
          EX("Same words, three melodies", [
            ["'That's fine.' ↓ = accepted. ↑ = checking ('is it?'). ↗↓ = reluctant acceptance. The melody IS the message.", "'Está bien' con tres melodías: aceptado, comprobando, aceptación reticente."],
          ]),
          AU("Listen", "That's fine. ... That's fine? ... That's... fine.", 0.9),
          N("The British 'interesting'", "'Interesting↗↓' politely means 'I have doubts'. Intonation lets speakers say two things at once — advanced listening hears both."),
        ],
        assignment: {
          title: "Melody script",
          instructions:
            "Script a six-line dialogue marking each line's tone (↓/↑/↗↓) and what each melody adds beyond the words. Record yourself or practise aloud twice.",
          minWords: 15,
          maxWords: 60 },
        homework: ["Listen to one conversation today for tone only.", "Count the fall-rises."],
      },
      {
        title: "Clarity at Speed and Integrated Projects",
        blurb: "Fast AND clear — then the capstone brief that pulls the whole programme together.",
        minutes: 25,
        difficulty: 5,
        skills: ["speaking", "communication", "writing"],
        strands: ["communication", "speaking", "writing", "pronunciation", "reading", "vocabulary"],
        outcomes: [
          "Stay clear at speed (pausing, chunking, stress)",
          "Plan an integrated communication project",
          "Combine research, writing, speaking and reflection",
        ],
        blocks: [
          H("Clear at speed"),
          TB("Clarity levers at speed", ["Lever", "How"], [
            ["chunking", "speak in 4-6 word breath groups"],
            ["pre-pause breath", "breathe BEFORE key phrases, not after"],
            ["stress landing", "one stressed word per chunk"],
            ["final-word care", "slow down on the last three words"],
          ]),
          H("The capstone brief"),
          T(
            "Choose a real topic you care about. Produce three artefacts: (1) a 500-word analytical piece (researched, hedged, edited in four passes); (2) a five-minute spoken presentation recorded (question spine, one number, one story, deliberate silences); (3) a 200-word reflection on your own English journey through the 56 chapters — what changed, what remains. This is the final proficiency assessment of the programme.",
          ),
          AU("Listen", "Your capstone: one topic, three artefacts — written, spoken, reflected.", 0.9),
          N("Why three artefacts", "Mastery is demonstrated across skills: the written piece proves structure and precision; the talk proves delivery and spontaneity; the reflection proves you can see yourself as a learner. Together they close the loop the programme opened in Chapter 01.",
          ),
        ],
        assignment: {
          title: "Capstone part 1 — the written piece",
          instructions:
            "Submit the 500-word analytical piece on your chosen topic: research-based, hedged to evidence, four-pass edited. Include a two-line editing note.",
          minWords: 200,
          maxWords: 600 },
        homework: ["Draft your five-minute talk outline.", "Mark your two silences."],
      },
      {
        title: "Final Proficiency Assessment and Programme Review",
        blurb: "The spoken capstone, the honest self-audit, and the end of the 56-chapter journey — then the Chapter 56 and programme review.",
        minutes: 30,
        difficulty: 5,
        skills: ["speaking", "communication", "writing"],
        strands: ["communication", "speaking", "writing", "pronunciation", "listening", "reading", "vocabulary"],
        outcomes: [
          "Deliver the five-minute capstone talk",
          "Audit own proficiency honestly across skills",
          "Plan the next chapter of your English life",
          "Answer the final chapter review",
        ],
        blocks: [
          H("The final assessment"),
          TB("Capstone checklist", ["Artefact", "Assessed on"], [
            ["written piece (500 w)", "thesis, structure, hedging, edited precision"],
            ["spoken talk (5 min)", "question spine, one number, one story, silences, delivery"],
            ["reflection (200 w)", "honest self-audit across the six skills"],
          ]),
          EX(
            "A reflection sample",
            [
              ["I began this programme reading 'The cat is black'. I end it writing hedged arguments and hearing the fall-rise in 'interesting'. What changed: my ears first, then my mouth, then my writing. What remains: connected speech at native speed — my listening frontier for the years ahead.", "Empecé este programa leyendo 'The cat is black'. Lo termino escribiendo argumentos matizados y oyendo el tono ascendente-descendente en 'interesting'."],
            ],
          ),
          AU("Listen", "You began with the alphabet. You end with your own voice.", 0.9),
          H("Chapter 56 and programme review"),
          T("You have travelled from 'What is English?' to capstone projects. CEFR-referenced, not certified; learner-owned, forever. Take the final review, deliver the capstone, and keep the streak alive."),
        ],
        assignment: {
          title: "The capstone — complete",
          instructions:
            "Submit all three capstone artefacts: the 500-word analytical piece (or your editing note on it), the script of your five-minute talk with delivery marks, and your 200-word reflection ending with one sentence: what you will do next for your English.",
          minWords: 90,
          maxWords: 300 },
        questions: [
          MCQ(
            "In 'an apple', native speakers say:",
            [["a", "an + pause + apple"], ["b", "a-napple (linked)"], ["c", "ana pple"]],
            "b",
            fb("a-napple", "Consonant-to-vowel linking joins the words — a core connected-speech feature.", "Pausing between such words sounds unnatural."),
            { skill: "speaking", difficulty: "medium" },
          ),
          MCQ(
            "The fall-rise tone on 'It's... possible' signals:",
            [["a", "complete certainty"], ["b", "polite doubt / reservation"], ["c", "a yes/no question"]],
            "b",
            fb("polite doubt / reservation", "Fall-rise says two things at once: yes-ish, but... — the diplomacy tone.", "Pure questions use rises."),
            { skill: "speaking", difficulty: "hard" },
          ),
          MCQ(
            "'I didn't say HE stole it' (stress on HE) means:",
            [["a", "someone else stole it"], ["b", "I said something different"], ["c", "he stole something else"]],
            "a",
            fb("someone else stole it", "Contrastive stress on HE excludes him as the thief.", "Stress on SAY would mean you implied it."),
            { skill: "speaking", difficulty: "hard" },
          ),
        ],
      },
    ],
  }),
];
