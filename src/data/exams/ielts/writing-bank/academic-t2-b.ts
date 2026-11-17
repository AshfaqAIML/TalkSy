/**
 * Academic Task 2 bank — file B (PROMPT 46, Part C/E).
 *
 * Three essay tasks from the question-driven families: a cause-effect task
 * on the shrinking adult night, a two-part task on rooftop and community
 * food growing, and a direct-questions task on protecting historic city
 * centres. Every task is an original assignment with full model answer,
 * planning notes, the eight-element analysis, a topic vocabulary bank and
 * level samples whose band comments are educational estimates, never
 * official scores.
 */

import type { WritingBankTask } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. Cause and effect — the shrinking adult night
// ---------------------------------------------------------------------------

export const at2CauseEffectSleep: WritingBankTask = {
  slug: "ielts-wb-at2-cause-effect-sleep",
  title: "Cause and effect — the shrinking adult night",
  channel: "academic",
  taskType: "task-2",
  family: "cause-effect",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Adults in many countries sleep significantly fewer hours than they did fifty years ago.\n\nWhat are the causes of this change, and what effects does it have on individuals and society?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "causes-part",
      description:
        "Analyses the causes of shorter adult sleep — the always-on work culture and attention-holding screens — rather than merely asserting them.",
      keywords: ["cause", "because", "work", "screen", "smartphone", "entertainment", "pressure", "hours", "technology", "culture"],
    },
    {
      key: "effects-individuals",
      description: "Develops the effects on individuals: concentration, mood, memory and longer-term physical and mental health.",
      keywords: ["health", "concentration", "memory", "mood", "tired", "fatigue", "immunity", "obesity", "depression", "reaction"],
    },
    {
      key: "effects-society",
      description: "Extends the analysis to society: workplace errors, road safety, lost productivity and healthcare costs.",
      keywords: ["society", "public", "economy", "cost", "accident", "collision", "productivity", "healthcare", "workforce", "community"],
    },
    {
      key: "developed-paragraphs",
      description: "Develops each cause and each effect with a reason, an explanation and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "as a result", "consequently", "because", "therefore", "so"],
    },
    {
      key: "conclusion",
      description: "Closes with a conclusion that links the causes to the effects instead of introducing new ideas.",
      keywords: ["in conclusion", "to conclude", "overall", "in summary", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Label the question's two parts (1 minute)",
      notes: [
        "Part 1 asks for CAUSES: why the adult night has shortened over roughly fifty years.",
        "Part 2 asks for EFFECTS and names two levels explicitly — individuals and society — so both must appear.",
        "The 'Give reasons…' tail is boilerplate; the real instructions sit in the two question marks.",
        "Underline 'and' in the question: it is the hinge that makes both halves compulsory.",
      ],
    },
    {
      heading: "Step 2 — Map each part to a paragraph (the core of this family)",
      notes: [
        "Introduction: paraphrase the trend, then signpost the route — causes first, effects on two levels after.",
        "Body 1 = causes: one paragraph, two linked causes, no effects leaking in.",
        "Body 2 = effects on individuals; Body 3 = effects on society — never one merged paragraph.",
        "Conclusion: one or two sentences that hand the causes and effects back to each other, no new claims.",
      ],
    },
    {
      heading: "Step 3 — Choose causes your effects can echo",
      notes: [
        "Pick two causes you can develop with a mechanism each: the collapsing work–rest boundary, screens engineered to postpone sleep.",
        "Pair every cause with its downstream cost so the essay reads as analysis, not two lists.",
        "The question weights the effects double ('individuals and society'), so budget roughly 90 words for causes and 130 for effects.",
        "One worked example per effects paragraph (a night-shift nurse, a tired workforce) is worth more than three named studies.",
      ],
    },
    {
      heading: "Step 4 — Language and time budget",
      notes: [
        "Reserve cause language ('The first is…', 'A second driver…') and effect language ('aggregate into', 'contributes to').",
        "Use the present perfect for ongoing change: 'the boundary has collapsed', not a simple past event.",
        "Finish drafting by minute 34; spend the rest checking each body paragraph answers its allotted half.",
        "Count words at the end: 250 is the floor, but 280–320 leaves room for the two-part structure.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Half a century ago, an uninterrupted night of seven or eight hours' sleep was simply part of being an adult; today, in many countries, the average worker gives up a substantial slice of that rest. This essay examines the pressures that have shortened the adult night, then traces what that quiet erosion costs individuals and the societies around them.",
      "The causes lie less in human biology than in the way modern life is organised. The first is the collapse of the boundary between work and rest: because smartphones keep inboxes and group chats within reach at midnight, many professionals never mentally leave the office, and in fiercely competitive industries long hours are still worn as a badge of commitment. The second driver lives in the same device. Streaming platforms and social feeds are engineered to postpone sleep, so one more episode becomes two, and bedtime slips away without any deliberate decision to abandon rest.",
      "For individuals, the damage accumulates quietly until it surfaces as illness. Sleep debt dulls concentration, memory and mood, and over the years it raises the risk of obesity, weakened immunity and depression. A nurse who sleeps five hours a night may insist that she has adapted, yet her slowed reactions and frayed temper follow her into every shift and every conversation at home.",
      "At the collective level, these private losses aggregate into public ones. Tired employees make avoidable errors, from mislabelled orders to industrial accidents, and fatigue contributes to a significant share of road collisions. Health systems eventually absorb the treatment of illnesses that chronic short sleep helped create, so what begins as a personal habit of sleeping badly ends as an expense shouldered by everyone.",
      "In conclusion, adult sleep has been squeezed by an always-on work culture and by products engineered to hold attention, and the consequences spread outward from tired individuals to economies that pay for their exhaustion. Treating sleep as essential infrastructure rather than a negotiable luxury would be the first rational response.",
    ],
    wordCount: 330,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Paraphrases the rubric without borrowing its words ('sleep significantly fewer hours' becomes 'gives up a substantial slice of that rest') and signs a contract for the essay's route: causes first, effects on two levels after. The reader can tick both question parts as scheduled before the first body paragraph begins.",
      },
      {
        role: "Body 1 — the causes",
        analysis:
          "Delivers the causes as linked mechanisms rather than a list: work culture and screens are named, then explained through their human consequences ('never mentally leave the office', 'one more episode becomes two'). Crucially, the paragraph answers 'why has sleep shortened?' and nothing else — no effects leak in early.",
      },
      {
        role: "Body 2 — effects on individuals",
        analysis:
          "Opens with a scope label that echoes the question ('For individuals') and develops one main claim — cumulative, invisible damage — through a triad (concentration, memory, mood), longer-term disease risks, and one worked example: the nurse, whose 'yet' sentence concedes her self-image and corrects it in the same breath.",
      },
      {
        role: "Body 3 — effects on society",
        analysis:
          "Mirrors the previous paragraph at the collective level: avoidable errors, road collisions, healthcare absorption. The closing sentence performs the family's signature move — converting a private habit into a public expense — which is exactly the 'individuals and society' pairing the rubric demands.",
      },
      {
        role: "Conclusion",
        analysis:
          "Reverses the essay's direction: instead of repeating the bodies, it compresses the causes into one clause and the effects into another, then adds a single forward-looking recommendation. No new arguments appear — model conclusion behaviour.",
      },
    ],
    vocabulary: [
      { term: "gives up a substantial slice of that rest", note: "Replaces the rubric's 'sleep significantly fewer hours' with an image — a slice removed — keeping the paraphrase honest and fresh." },
      { term: "the collapse of the boundary between work and rest", note: "Names a structural cause rather than a personal failing; 'collapse' conveys speed and completeness in one noun." },
      { term: "worn as a badge of commitment", note: "An idiomatic collocation that explains why people volunteer for tiredness: sleeplessness is displayed as a status signal." },
      { term: "sleep debt", note: "The established term for accumulated sleep loss; using it signals topic familiarity without slipping into jargon." },
      { term: "aggregate into public ones", note: "The pivot verb of the society paragraph: private losses 'aggregate', and the register shifts from personal to economic." },
      { term: "an expense shouldered by everyone", note: "A metaphorical passive that distributes the cost across society — precision plus a memorable image." },
      { term: "essential infrastructure rather than a negotiable luxury", note: "A re-framing pair that gives the conclusion an idea of its own instead of a summary of the body." },
    ],
    grammar: [
      {
        feature: "Present perfect for an ongoing, unfinished change",
        example: "adult sleep has been squeezed by an always-on work culture",
        note: "The decline began decades ago and continues, so present perfect passive frames it as unfinished history rather than a closed event.",
      },
      {
        feature: "Colon to unpack an abstraction",
        example: "The first is the collapse of the boundary between work and rest: because smartphones keep inboxes and group chats within reach at midnight, many professionals never mentally leave the office",
        note: "The colon announces the mechanism the moment the reader needs it, packing claim and proof into a single sentence.",
      },
      {
        feature: "Agentless passive to keep the spotlight on design",
        example: "Streaming platforms and social feeds are engineered to postpone sleep",
        note: "The passive foregrounds the products' design and quietly leaves their makers in the background — a deliberate framing choice.",
      },
      {
        feature: "Concessive 'yet' linking contrasting clauses",
        example: "A nurse who sleeps five hours a night may insist that she has adapted, yet her slowed reactions and frayed temper follow her into every shift",
        note: "'Yet' concedes the nurse's own claim and corrects it in one breath — a compact cohesion move credited at the higher bands.",
      },
    ],
    coherence:
      "The essay is built as a relay: the introduction promises causes before effects, paragraph two delivers the causes, paragraphs three and four split the effects into the two levels the question names — individual and collective — and the conclusion hands the two halves back to each other ('squeezed by … spread outward from … to …'). Transitions are carried by scope shifts ('For individuals', 'At the collective level') that echo the question's own wording, so the reader always knows which half of the task is being answered.",
    alternativeExpressions: [
      { insteadOf: "gives up a substantial slice of that rest", use: "sacrifices a significant portion of their sleep" },
      { insteadOf: "the collapse of the boundary between work and rest", use: "the disappearance of a fixed end to the working day" },
      { insteadOf: "bedtime slips away", use: "sleep is postponed by an hour" },
      { insteadOf: "the damage accumulates quietly", use: "harm builds up unnoticed" },
      { insteadOf: "aggregate into public ones", use: "combine into shared costs" },
      { insteadOf: "shouldered by everyone", use: "borne by society as a whole" },
    ],
    commonMistakes: [
      {
        wrong: "An essay that spends 250 words on causes and adds two sentences about effects.",
        right: "Roughly one paragraph for causes, then one paragraph each for effects on individuals and on society.",
        reason: "The question asks both halves; under-developing the effects under-covers the task and caps Task Response.",
      },
      {
        wrong: "One cause is work. Another cause is phones. A third cause is stress.",
        right: "Each cause is followed by its mechanism — how it actually steals an hour — and a concrete picture.",
        reason: "A bare list of causes reads as notes rather than analysis, and the 'why' instruction rewards explanation.",
      },
      {
        wrong: "People sleep badly because they are tired, and they are tired because they sleep badly.",
        right: "Keep the causes block and the effects block separate, and let the conclusion link them.",
        reason: "Fusing both halves into one circular discussion hides each answer from the examiner, who ticks the parts off separately.",
      },
      {
        wrong: "Everyone slept nine hours in 1975, and today nobody sleeps more than four.",
        right: "Adults in many countries typically slept longer fifty years ago, and the average has fallen since.",
        reason: "Invented absolute statistics invite inaccuracy; hedged generalisations are safer and sound more academic.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Nowadays, adults sleep much less than people in the past. Fifty years ago, people went to bed early because there was not so much entertainment, but now they sleep maybe five or six hours. This essay will discuss the causes of this change and its effects.",
        "There are several causes of this situation. The first one is work. People have a lot of work and they continue it at home, answering emails until late at night. The second cause is the smartphone, because people watch videos and use social media in the bed, so they lose one or two hours of sleeping. Also, many adults drink coffee all day to stay awake, and this makes the problem worse.",
        "About the effects, the main one is on health. When you don't sleep enough, you feel tired and angry the next day, and you cannot concentrate on your job or studies. Some researches say that less sleep causes obesity and depression. For example, my cousin works in a bank, and when he sleeps only four hours, he becomes sick very easy.",
        "In conclusion, the main causes are too much work and phone use, and the effect is bad health. People should try to sleep seven or eight hours every night to protect themselves.",
      ],
      wordCount: 211,
      justification: [
        { criterion: "Task Response", note: "The causes half is well covered with three linked points, but the effects half discusses individuals only and never reaches society, so half of the second question is left unanswered; at roughly 210 words the response also sits well below the 250-word floor." },
        { criterion: "Coherence and Cohesion", note: "The four paragraphs follow the question's order and each has a clear job, but linking relies on 'The first one / The second cause / Also', and 'About the effects' is a weak frame for the paragraph carrying the essay's second half." },
        { criterion: "Lexical Resource", note: "Topic words are adequate ('concentrate', 'obesity', 'depression') but repeated, and collocation slips such as 'in the bed', 'one or two hours of sleeping' and 'researches say' show limited control of natural English." },
        { criterion: "Grammatical Range and Accuracy", note: "Mostly short, accurate sentences with almost no subordination attempted; the adverb error 'very easy' and the countable-noun error 'researches' recur alongside a rather flat 'you' perspective, matching a mid-band error profile." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Across the developed world, the average adult now sleeps markedly less than the previous generation did, and the shift has taken place within a single working lifetime. This essay identifies the two forces most responsible and assesses the cost of the shortfall at both the personal and the collective level.",
        "The chief cause is that work no longer ends at the office door. Portable devices keep professionals answerable late into the evening, and a workplace culture that rewards visible stamina quietly turns sleep into an admission of weakness; overtime, once exceptional, has become the default schedule for whole professions. The second force is recreational: streaming services and social platforms are built to postpone closure, so millions surrender an hour of rest nightly without ever deciding to.",
        "Individually, the deficit is corrosive rather than dramatic. Concentration, memory and mood all decline, appetite-regulating hormones are disturbed, and years of short sleep raise the risk of obesity, diabetes and depression. A driver who regularly sleeps five hours may feel competent precisely because tiredness distorts his own judgement of how tired he is.",
        "Socially, the losses pool together. Error rates rise in hospitals, factories and on the roads; health services inherit the chronic illnesses that sleep deprivation accelerates; and an economy staffed by exhausted people pays through lost output. What looks like a private lifestyle choice is, in aggregate, a public liability.",
        "In short, the modern night has been shortened by intrusive work patterns and persuasive screens, and everyone eventually shares the bill. Re-framing sleep as maintenance rather than idleness — a public-health question rather than a private preference — is the necessary correction.",
      ],
      wordCount: 268,
      justification: [
        { criterion: "Task Response", note: "Both question parts receive dedicated paragraphs, the effects are genuinely split into individual and social levels, and the thesis is visible from the first sentence — the two-part contract is honoured throughout." },
        { criterion: "Coherence and Cohesion", note: "Progression is explicit — causes, individual effects, social effects, verdict — with reference chains ('The deficit', 'the losses pool together') carrying cohesion rather than connector stacking." },
        { criterion: "Lexical Resource", note: "Precise, natural collocation throughout ('corrosive rather than dramatic', 'surrender an hour of rest', 'a public liability') with no noticeable repetition or memorised chunking." },
        { criterion: "Grammatical Range and Accuracy", note: "A wide, mostly accurate range: parallel comparatives, a purposeful passive ('appetite-regulating hormones are disturbed'), and long sentences that stay controlled, such as the driver example with its embedded clause chain." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "sleep deprivation", partOfSpeech: "noun", meaning: "A state of getting less sleep than the body needs, especially over a long period." },
    { word: "sleep debt", partOfSpeech: "noun", meaning: "The accumulated shortfall of rest that gradually has to be repaid." },
    { word: "to erode", partOfSpeech: "verb", meaning: "To wear something away gradually, as hours of sleep have been worn down." },
    { word: "boundary between work and rest", partOfSpeech: "noun phrase", meaning: "The line separating working hours from recovery time, now increasingly blurred." },
    { word: "immune system", partOfSpeech: "noun", meaning: "The body's defence against infection, which chronic short sleep weakens." },
    { word: "fatigue", partOfSpeech: "noun", meaning: "Deep tiredness affecting performance and safety, normally cured by rest." },
    { word: "productivity", partOfSpeech: "noun", meaning: "The amount of output per worker or hour, which exhaustion reliably reduces." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Two-part question — rooftop and community food growing
// ---------------------------------------------------------------------------

export const at2TwoPartUrbanFarming: WritingBankTask = {
  slug: "ielts-wb-at2-two-part-urban-farming",
  title: "Two-part question — food growing in the city",
  channel: "academic",
  taskType: "task-2",
  family: "two-part",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many cities, growing food on rooftops and in community gardens has become increasingly popular.\n\nWhy is this happening? Is this a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "reasons-part",
      description:
        "Answers the first question: explains why rooftop and community food growing has become popular (distrust of long supply chains, municipal greening, community motives).",
      keywords: ["because", "reason", "local", "fresh", "supply", "chain", "community", "green", "sustainab", "trust", "provenance"],
    },
    {
      key: "verdict-part",
      description:
        "Answers the second question with a clear position — positive or negative — that is stated early and maintained to the end.",
      keywords: ["positive", "negative", "benefit", "believe", "argue", "view", "overall", "welcome", "development", "despite"],
    },
    {
      key: "developed-paragraphs",
      description: "Develops each reason and each argument with an explanation and a concrete example or consequence.",
      keywords: ["for example", "for instance", "such as", "because", "therefore", "as a result", "when", "where"],
    },
    {
      key: "both-parts-distinct",
      description: "Keeps the two answers visible and separate — one block on reasons, one on the verdict — while the conclusion ties them together.",
      keywords: ["first", "second", "while", "however", "although", "moreover", "on balance", "judged"],
    },
    {
      key: "conclusion",
      description: "Ends with a conclusion that restates the position in fresh words, answering both questions in one breath.",
      keywords: ["in conclusion", "to conclude", "overall", "in short", "in summary"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the two questions inside the prompt (1 minute)",
      notes: [
        "Question 1 is explanatory: WHY is urban food growing spreading? No verdict is needed yet.",
        "Question 2 is evaluative: positive or negative development — a position is compulsory, not optional.",
        "Note the asymmetry: one part explains, one part judges; blending them muddles both answers.",
        "The two question marks are two separate instructions, and examiners tick them off one by one.",
      ],
    },
    {
      heading: "Step 2 — Map each part to a paragraph (the core of this family)",
      notes: [
        "Introduction: paraphrase the trend and STATE the verdict in advance — an early, visible position is what the evaluative half rewards.",
        "Body 1 = reasons for the popularity: consumer distrust, municipal policy, sociability — strictly explanatory.",
        "Body 2 = the case for the verdict, developed with examples; Body 3 (optional) concedes one real limit and answers it.",
        "Conclusion: restate the position in fresh words, folding the reasons and the verdict into one claim.",
      ],
    },
    {
      heading: "Step 3 — Build the verdict paragraph",
      notes: [
        "Choose one side — here, broadly positive — and support it with two distinct gains, such as the environmental work planted roofs do and the social value of shared plots.",
        "Concede one genuine limit (no set of rooftops will feed a metropolis) and then answer it; a conceded objection strengthens a position rather than weakening it.",
        "Avoid the fence: 'it has positive and negative sides' is not a position and under-delivers on the question actually asked.",
        "Give the verdict its own paragraph block so the examiner can find it in one sweep.",
      ],
    },
    {
      heading: "Step 4 — Vocabulary and timing",
      notes: [
        "Prepare register-carrying pairs before writing: 'food miles', 'supply chain', 'provenance', 'stormwater', 'to retrofit', 'yield'.",
        "40 minutes: about 5 planning, 30 writing, 5 checking — the check must confirm BOTH question marks have a dedicated paragraph.",
        "Aim for 280–320 words; the two-part structure needs more room than a single-question essay.",
        "If time runs short, protect the verdict paragraph — a missing position costs more than a lost example.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "In cities from Montreal to Melbourne, rooftops that once held nothing but ventilation ducts now grow salad leaves, and vacant lots have become community plots with waiting lists. This essay explains why growing food inside the city has become so popular, then argues that the trend is a broadly positive development whose limits are real but manageable.",
      "The popularity rests on three converging motives. The first is a crisis of trust in long food chains: a supermarket tomato may have travelled thousands of kilometres and been bred for durability rather than flavour, and after repeated contamination scandals many consumers prefer produce whose origin they can see. The second motive is municipal. Planted roofs insulate buildings, slow stormwater and cool overheated streets, so city authorities now subsidise the greening that volunteers began years ago. The third is social: a shared plot is one of the few places where neighbours still meet without a screen between them.",
      "Judged on the evidence, this is a positive development. Harvests eaten within a day of picking taste better and lose fewer nutrients than produce engineered for transport; the gardening itself supplies gentle outdoor exercise to people who otherwise sit all day; and school plots teach children how food actually grows, a lesson no textbook page conveys as well. A restaurant that garnishes its plates with herbs cut from its own roof gains freshness and a story that no distant supplier can match.",
      "The honest objection is scale: no collection of rooftops will feed a metropolis, retrofitting older buildings is costly, and soil near busy roads must be tested before planting. Yet these caveats argue for structural surveys and sensible standards, not abandonment. Urban farms do not need to replace rural ones; they need to put wasted surfaces to work.",
      "In conclusion, city food growing has spread because it answers three modern anxieties at once — about provenance, climate and community — and its environmental and social dividends comfortably outweigh its practical limits. It is a welcome, if partial, addition to the way cities feed themselves.",
    ],
    wordCount: 338,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Grounds an abstract trend in two concrete pictures — rooftop lettuce, waiting lists for plots — and states the verdict in advance ('broadly positive … limits real but manageable'). Announcing the position in paragraph one is exactly what the evaluative half of a two-part question rewards.",
      },
      {
        role: "Body 1 — reasons for the popularity",
        analysis:
          "Answers 'why is this happening?' with three motives kept strictly explanatory: consumer distrust, municipal policy and sociability. Each motive receives its mechanism (a travelling tomato, subsidised greening, screen-free meetings), and none is judged yet — judgement waits for its own paragraph.",
      },
      {
        role: "Body 2 — the positive verdict, developed",
        analysis:
          "Now answers the second question. Three parallel benefits — freshness and nutrition, physical activity, education — are argued before the rooftop-herb restaurant turns an abstract gain into an imaginable scene. The paragraph opens with a verdict sentence so the position is impossible to miss.",
      },
      {
        role: "Body 3 — the objection, conceded and answered",
        analysis:
          "Performs the strongest move available in a verdict essay: conceding before concluding. Scale, retrofit cost and soil safety are admitted in one sentence, then reframed as design problems rather than fatal flaws. The final sentence caps the argument with a redefinition — urban farms supplement rather than replace.",
      },
      {
        role: "Conclusion",
        analysis:
          "Reassembles both answers into a single sentence — the three motives, the balance of dividends over limits — and restates the verdict in fresh words ('a welcome, if partial, addition'), avoiding the classic conclusion that merely repeats the introduction.",
      },
    ],
    vocabulary: [
      { term: "three converging motives", note: "'Converging' explains the popularity economically: separate forces arriving at the same rooftops for different reasons." },
      { term: "a crisis of trust in long food chains", note: "Compresses the consumer motive into one abstract noun phrase; 'long food chains' carries the transport critique implicitly." },
      { term: "bred for durability rather than flavour", note: "The precise horticultural complaint — varieties selected for shelf life — delivered in five words." },
      { term: "slow stormwater", note: "Green-infrastructure language that names a technical service; pairing it with 'cool overheated streets' covers two municipal benefits in one clause." },
      { term: "caveats", note: "The register-correct word for admitted objections, showing the writer can concede ground without surrendering the position." },
      { term: "dividends", note: "A financial metaphor for social and environmental returns, well suited to an essay that weighs costs against gains." },
      { term: "a welcome, if partial, addition", note: "A hedged-verdict formula — adjective, concession, noun — that is the grammar of a position with limits." },
    ],
    grammar: [
      {
        feature: "Modal perfect to speculate precisely",
        example: "a supermarket tomato may have travelled thousands of kilometres and been bred for durability rather than flavour",
        note: "'May have travelled' hedges the claim, while the elided second auxiliary in 'and been bred' keeps the coordination tight.",
      },
      {
        feature: "Fronted noun phrases for enumeration",
        example: "The first is a crisis of trust in long food chains",
        note: "'The first / The second motive / The third' fronting turns one paragraph into a legible three-part argument without a single 'Firstly'.",
      },
      {
        feature: "Sentence-initial 'Yet' as a concessive pivot",
        example: "Yet these caveats argue for structural surveys and sensible standards, not abandonment",
        note: "The opening 'Yet' pivots the paragraph from objection to rebuttal — the exact move a verdict paragraph lives on.",
      },
      {
        feature: "Semicolon balancing two contrasted clauses",
        example: "Urban farms do not need to replace rural ones; they need to put wasted surfaces to work",
        note: "The semicolon pairs the negation with the redefinition without a heavy connector, displaying punctuation range economically.",
      },
    ],
    coherence:
      "The plan mirrors the question's two sentences: paragraph two answers 'why is this happening' with three motives, and paragraphs three and four answer 'positive or negative' with a verdict, its evidence and one conceded limit. The introduction announces that order, and the conclusion repays it by bundling the three motives and the verdict into a single closing claim. Cohesion runs through echoed vocabulary ('wasted surfaces' returning as 'put wasted surfaces to work') rather than through stacked connectors, so the linking never gets louder than the argument.",
    alternativeExpressions: [
      { insteadOf: "has become so popular", use: "has won such a following" },
      { insteadOf: "a crisis of trust in long food chains", use: "collapsing confidence in distant suppliers" },
      { insteadOf: "bred for durability rather than flavour", use: "selected for shelf life at the cost of taste" },
      { insteadOf: "put wasted surfaces to work", use: "make productive use of idle space" },
      { insteadOf: "its practical limits", use: "the constraints of scale and cost" },
      { insteadOf: "a welcome, if partial, addition", use: "a valuable, though incomplete, contribution" },
    ],
    commonMistakes: [
      {
        wrong: "An essay that explains the reasons beautifully and ends: 'So urban farming is very interesting.'",
        right: "It is a positive development because it restores trust in food, cools streets and rebuilds neighbourly contact.",
        reason: "The evaluative question demands a verdict; an observation is not a position and leaves the second part unanswered.",
      },
      {
        wrong: "In conclusion, urban farming has both positive and negative sides.",
        right: "On balance it is a positive development, despite two real limits of scale and cost.",
        reason: "A both-sides conclusion reads as no position at all; this family asks the candidate to choose and defend a side.",
      },
      {
        wrong: "People grow food locally because it is fresh, and freshness is one benefit of local food.",
        right: "Reasons in one block (why now?), verdict and its evidence in another (is it good?).",
        reason: "When the two answers share one circular paragraph, neither question is visibly or fully addressed for the examiner.",
      },
      {
        wrong: "Urban gardens will soon feed most of the world's cities.",
        right: "Urban gardens can meaningfully supplement, though never replace, rural supply.",
        reason: "Overstatement is easy to contradict; hedged claims about scale are more defensible and sound more academic.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Nowadays, growing food in the city is becoming more and more popular. People make gardens on the roofs of buildings and in empty places near their houses. In this essay, I will write about the reasons of this trend and give my opinion if it is positive or negative.",
        "There are some reasons for this trend. Firstly, the vegetables in the shops are expensive and not very fresh, so people prefer to grow their own food. Secondly, people today care about the environment, and local food needs less transport, so it causes less pollution. Also, gardening is a nice hobby for families and older people who live alone.",
        "In my opinion, this trend is mostly positive. The food is fresh and healthy, and the gardens make the city more green and beautiful. For example, there is a community garden near my house, and the neighbours are more friendly after it opened. But there is also a negative side, because gardening takes a lot of time and the water for the plants costs money.",
        "In conclusion, city gardens are popular because of fresh food, the environment and free time activities, and I think it is a good development, even if it has some small problems.",
      ],
      wordCount: 204,
      justification: [
        { criterion: "Task Response", note: "The reasons half is covered with three clear points, but the verdict arrives only in the final two sentences and is immediately qualified both ways ('mostly positive… but there is also a negative side'), so the position reads as undecided for most of the essay; the response also sits well under the 250-word floor." },
        { criterion: "Coherence and Cohesion", note: "The four-paragraph shape follows the question's order, yet cohesion leans almost entirely on 'Firstly / Secondly / Also', and 'for some reasons' style frames do little linking work between ideas." },
        { criterion: "Lexical Resource", note: "Topic vocabulary is adequate ('community garden', 'environment', 'pollution') but repetitive, with collocation slips such as 'the reasons of this trend', 'more green' and 'more friendly' instead of 'greener' and 'friendlier'." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentence patterns dominate and are mostly accurate, but comparatives are avoided rather than formed, there is little subordination to display range, and 'I will write about' is a memorised essay-opening frame." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Rooftop allotments and community vegetable plots have shifted from novelty to normal in a single decade, appearing on office blocks, school grounds and railway land. This essay explains the forces behind the boom and takes the view that it is a positive development, with reservations about scale.",
        "The boom has three feeding forces. Distrust is one: repeated contamination scandals and produce bred for transport rather than taste have pushed consumers towards food whose origin they can see, and a rooftop is about as visible as an origin gets. Policy is another, since planted surfaces cool streets, absorb stormwater and insulate buildings, which is why municipalities now fund what volunteers began. The third force is sociability, because a shared plot remains one of the few urban settings where neighbours still meet without a screen between them.",
        "The development deserves a positive verdict despite real limits. Fresh, hyper-local produce improves diet; the work of tending a plot supplies gentle exercise with a social life attached; and children who plant seeds learn seasonality in a way no textbook conveys. Where plots have replaced rubble, nearby blocks report calmer, better-tended streets, suggesting the gardens pay dividends beyond their harvests.",
        "The limits are mostly questions of scale and engineering: rooftops cannot feed a metropolis, and older buildings need costly surveys before they can carry soil. These argue for building codes and honest expectations, not retreat.",
        "In short, urban growing answers anxieties about provenance, climate and community at once, and what it yields in freshness and social capital outweighs what it cannot. It is a genuinely positive development — partial, but positive.",
      ],
      wordCount: 265,
      justification: [
        { criterion: "Task Response", note: "Both questions receive dedicated blocks, and the position is announced in the introduction and maintained through a conceded objection — precisely the two-part shape the descriptors reward." },
        { criterion: "Coherence and Cohesion", note: "Paragraph roles are unmistakable, and cohesion runs through meaning ('The boom has three feeding forces', 'The limits are mostly…') rather than through chains of stock connectors." },
        { criterion: "Lexical Resource", note: "Flexible, precise vocabulary ('hyper-local', 'social capital', 'pay dividends beyond their harvests') with natural collocation and no sign of memorised chunks." },
        { criterion: "Grammatical Range and Accuracy", note: "Confident range — a colon-introduced list, fronted apposition ('Distrust is one'), varied subordination and a dash-parenthesis — with accuracy sustained across long sentences." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "allotment", partOfSpeech: "noun", meaning: "A small rented plot of land for growing vegetables, common in and near cities." },
    { word: "provenance", partOfSpeech: "noun", meaning: "The traceable origin and history of food or goods." },
    { word: "food miles", partOfSpeech: "noun (plural)", meaning: "The distance food travels from producer to plate, often used as a proxy for its emissions." },
    { word: "stormwater", partOfSpeech: "noun", meaning: "Rain runoff that planted roofs can absorb, slow and filter." },
    { word: "to retrofit", partOfSpeech: "verb", meaning: "To add a new feature to an existing structure, such as soil beds onto an old roof." },
    { word: "yield", partOfSpeech: "noun", meaning: "The amount of food a plot or farm produces." },
    { word: "urban heat island", partOfSpeech: "noun", meaning: "The tendency of built-up areas to stay warmer than their surroundings, which greening reduces." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Direct questions — protecting historic city centres
// ---------------------------------------------------------------------------

export const at2DirectQuestionsHeritage: WritingBankTask = {
  slug: "ielts-wb-at2-direct-questions-heritage",
  title: "Direct questions — what to protect in the historic city",
  channel: "academic",
  taskType: "task-2",
  family: "direct-questions",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many city centres, historic buildings are being demolished to make way for modern developments.\n\nWhat is lost when old buildings disappear? How should cities decide what to protect?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "loss-question",
      description:
        "Answers the first question: identifies what is lost — craftsmanship, collective memory, identity and the distinctiveness that draws residents and visitors.",
      keywords: ["lost", "lose", "memory", "identity", "craft", "character", "history", "record", "distinctive", "beauty"],
    },
    {
      key: "decision-question",
      description:
        "Answers the second question: proposes a workable basis for deciding what to protect (criteria such as rarity and memory, expert review, public consultation, reuse potential).",
      keywords: ["decide", "criteria", "protect", "consultation", "expert", "panel", "rare", "reuse", "public", "test"],
    },
    {
      key: "discussion-not-list",
      description: "Treats each question as a question to be argued, with reasons and development, not a bare inventory of items.",
      keywords: ["because", "therefore", "however", "since", "thus", "moreover", "for example", "which"],
    },
    {
      key: "developed-paragraphs",
      description: "Develops each answer with a claim, an explanation and a supporting example or consequence.",
      keywords: ["for example", "for instance", "such as", "as a result", "consequently", "often", "once"],
    },
    {
      key: "conclusion",
      description: "Concludes with a judgement that draws the two answers together rather than repeating them separately.",
      keywords: ["in conclusion", "to conclude", "in sum", "overall", "ultimately"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Identify the two direct questions (1 minute)",
      notes: [
        "Question 1 ('What is lost?') invites analysis of losses — architectural, social and economic.",
        "Question 2 ('How should cities decide?') demands a method or criteria — a proposal, not a feeling.",
        "Direct questions are the family where candidates most often paste in a prepared opinion essay that answers neither question.",
        "Both question marks carry equal weight: each needs its own developed paragraph block.",
      ],
    },
    {
      heading: "Step 2 — Map each question to its paragraph (the core of this family)",
      notes: [
        "Introduction: paraphrase the demolition trend, then signpost both questions in the order they are asked.",
        "Body 1 answers Question 1: what disappears with the fabric — craft record, collective memory, distinctiveness.",
        "Body 2 answers Question 2: the decision procedure — a published test of rarity, memory and adaptability, plus review and consultation.",
        "Optional Body 3: why selectivity matters, because a city that protects everything freezes.",
        "Conclusion: fuse both answers into one judgement, mirroring the question order.",
      ],
    },
    {
      heading: "Step 3 — Answer as discussion, not inventory",
      notes: [
        "Give each question a claim → reason → example chain; the bare list is the classic failure of this family and scores poorly on Task Response.",
        "For Question 2, argue for your criteria: why rarity plus collective memory plus reuse potential is a defensible public test.",
        "Use one concrete illustration, such as a row of merchants' houses converted to flats rather than demolished.",
        "Answer 'how should' with a procedure — who assesses, against what criteria, with whose input — not just a sentiment.",
      ],
    },
    {
      heading: "Step 4 — Timing and final check",
      notes: [
        "Aim for roughly 290–330 words: 55 for the introduction, 90 per question, 50 for the conclusion.",
        "In the final check, underline the sentence in each body paragraph that directly answers its question.",
        "Confirm the second question has a verb of proposal ('should rest', 'should be consulted') — that is how an examiner spots it was answered.",
        "Reserve two minutes for word-formation traps: 'demolition', 'distinctiveness', 'architectural'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "In city centres across the world, stone facades that survived a century of change are coming down in a season to make room for glass towers. This essay considers what a city permanently loses each time this happens, then sets out how the decision to protect or demolish should actually be made.",
      "What is lost is more than a building. An old street is a physical archive: its scale, materials and ornament record craft traditions and ways of living that no document fully preserves, and once the fabric is gone, walking through that history goes with it. Character and memory are lost too, because landmarks are the pegs on which communities hang their shared past. The loss is finally economic: the distinctiveness that demolition erases is often the very quality that made a district attractive to residents and visitors in the first place.",
      "How, then, should a city decide? The defensible route is an explicit test rather than sentiment or a developer's balance sheet. Each threatened building can be asked three questions: is it rare, or the finest surviving example of its kind? Does it anchor collective memory — a market hall, a school, the street where something happened? And can it be adapted to a new use without destroying what makes it valuable? Where the answers are strong, protection should follow; where they are weak, the site can legitimately make way for the housing a growing city needs.",
      "Two safeguards make that test trustworthy. Assessment should rest with an independent heritage panel, insulated from electoral cycles and land values, and the public should be consulted before the bulldozers are booked, because a building's meaning often lives in the memories of the people who used it, not only in its architectural merit.",
      "In conclusion, every demolition erases an irreplaceable record of craft, memory and identity, so the choice must be deliberate rather than incidental. Cities that protect selectively — guided by published criteria, expert review and a genuine public voice — keep what money cannot rebuild while still making room to grow.",
    ],
    wordCount: 339,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (2 sentences)",
        analysis:
          "Contrasts two timescales — a century of survival against a season of demolition — to give the trend weight, then announces the essay's two jobs in the order the questions appear. No for-or-against stance is taken, correctly, because the task asks for analysis and a method rather than an opinion on demolition itself.",
      },
      {
        role: "Body 1 — what is lost (Question 1)",
        analysis:
          "Answers the first question on three ascending levels: the archive of craft, the pegs of collective memory, and economic distinctiveness. Each level is a claim plus its mechanism, and the paragraph closes by naming the stakeholders — residents and visitors — which is development, not inventory.",
      },
      {
        role: "Body 2 — how to decide (Question 2)",
        analysis:
          "Opens by re-voicing the second question as a pivot ('How, then, should a city decide?'), then proposes a three-part test — rarity, collective memory, adaptability — and immediately shows the test cutting both ways, towards protection or release. The answer is a procedure, which is what 'how should' literally asks for.",
      },
      {
        role: "Body 3 — safeguards on the procedure",
        analysis:
          "Adds governance to the criteria: an independent panel and consultation before demolition. This second paragraph on the same question deepens rather than digresses, showing that 'how should cities decide' includes who decides and when — a reading of the question most candidates miss.",
      },
      {
        role: "Conclusion",
        analysis:
          "Bundles both answers — the record lost, the selective method that keeps it — into one claim about deliberate choice, and closes on the balance a real city must strike: keeping what money cannot rebuild while still growing. The question order is mirrored, so both ticks land in sequence.",
      },
    ],
    vocabulary: [
      { term: "a physical archive", note: "The essay's controlling metaphor: buildings as documents, which makes demolition legible as information loss rather than mere change." },
      { term: "the pegs on which communities hang their shared past", note: "Extends the metaphor from storage to attachment — memory needs fixed points, and demolition removes the pegs." },
      { term: "a developer's balance sheet", note: "Metonymy for commercial pressure; sharper than 'money' and it sets up the contrast with public criteria." },
      { term: "anchor collective memory", note: "The collocation heritage professionals use; 'anchor' supplies both precision and the image of mooring something that would otherwise drift." },
      { term: "insulated from electoral cycles and land values", note: "Names the two pressures that distort heritage decisions — politics and property — inside one clause." },
      { term: "protect selectively", note: "The essay's own answer compressed to two words; 'selectively' openly carries the admission that not everything can stay." },
      { term: "keep what money cannot rebuild", note: "The closing asymmetry: capital can rebuild capacity but not memory — the whole argument in six words." },
    ],
    grammar: [
      {
        feature: "Rhetorical question as a paragraph pivot",
        example: "How, then, should a city decide?",
        note: "The question re-voices the task's second question and marks the essay's turn; a short interrogative is a calculated range move, not filler.",
      },
      {
        feature: "Tripartite parallel questions",
        example: "is it rare, or the finest surviving example of its kind?",
        note: "Three grammatically parallel questions make the criteria memorable and show the 'how should cities decide' part being answered visibly.",
      },
      {
        feature: "'Where' as a paired conditional connector",
        example: "Where the answers are strong, protection should follow; where they are weak, the site can legitimately make way for the housing a growing city needs",
        note: "Paired 'where' clauses plus a semicolon balance both outcomes of the test in a single elegant sentence.",
      },
      {
        feature: "Modal 'should' for proposals",
        example: "Assessment should rest with an independent heritage panel",
        note: "A 'how should' question needs modality; 'should' states recommendations at exactly the right strength for a policy proposal.",
      },
    ],
    coherence:
      "Each body paragraph is keyed to one of the two questions and says so openly ('What is lost is more than a building', 'How, then, should a city decide?'), which is the safest architecture for a direct-questions task because the examiner can locate each answer in one sweep. Within paragraphs, the argument escalates from the physical to the social to the economic, and the conclusion folds the two answers back together in the prompt's own order: the loss first, the decision method second.",
    alternativeExpressions: [
      { insteadOf: "a physical archive", use: "a document written in stone" },
      { insteadOf: "the pegs on which communities hang their shared past", use: "the fixed points around which public memory gathers" },
      { insteadOf: "make way for the housing a growing city needs", use: "give ground to the homes a city cannot do without" },
      { insteadOf: "a developer's balance sheet", use: "commercial pressure alone" },
      { insteadOf: "insulated from electoral cycles and land values", use: "shielded from politics and property prices" },
      { insteadOf: "keep what money cannot rebuild", use: "preserve what no budget can restore" },
    ],
    commonMistakes: [
      {
        wrong: "We lose history, culture, tourism, beauty, identity, memory and the economy.",
        right: "What is lost, above all, is the city's physical memory: its craftsmanship, its identity and the distinctiveness that draws visitors.",
        reason: "The bare inventory is the classic direct-questions failure — items parade past without any of them being developed.",
      },
      {
        wrong: "An essay that answers the losses fully and adds: 'Cities should think carefully about what to protect.'",
        right: "Cities should decide through a published three-part test — rarity, shared memory, reuse potential — applied by an independent panel.",
        reason: "A one-sentence gesture leaves the second question undeveloped; each question mark is a separate instruction with its own paragraph.",
      },
      {
        wrong: "Some people think old buildings should stay, while others disagree. This essay will discuss both views.",
        right: "Answer the two questions actually asked: what disappears with the fabric, and how the decision should be made.",
        reason: "A memorised discussion template answers a question that was never set and ignores both questions that were.",
      },
      {
        wrong: "Governments must protect every historic building, whatever the cost.",
        right: "Protection should be selective, because a city that protects everything freezes and one that protects nothing forgets itself.",
        reason: "Absolute rules ignore the trade-off the question presupposes: cities must also house and employ their people.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 5.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "In many cities, the old buildings are destroyed and new buildings are built instead. This is a big topic nowadays, because every city wants modern offices and apartments. In this essay, I will answer the two questions about what we lose and how to decide.",
        "When old buildings disappear, we lose many things. First, we lose the history, because old buildings show us how people lived in the past. Second, we lose the beauty of the city, because most new buildings look the same. Third, we lose the tourism, because visitors like to see famous old places. Fourth, we lose the memory of the old people who lived there before.",
        "About how to decide, I think the government should make a list of the important buildings. They should ask experts about architecture, and if a building is very old or very beautiful, it should be protected. If it is normal, they can destroy it and build apartments, because the city needs houses for young people.",
        "In conclusion, we lose history, beauty, tourism and memory when old buildings go, and the government should decide with experts to protect the really special buildings.",
      ],
      wordCount: 191,
      justification: [
        { criterion: "Task Response", note: "The first question is answered with four losses, but each is a bare item without development, and the second receives only a short procedural list; at roughly 190 words the response also sits far below the 250-word floor, compounding the penalty." },
        { criterion: "Coherence and Cohesion", note: "Paragraphing is logical and the question order is respected, but 'First… Second… Third… Fourth…' turns paragraph 2 into an inventory, and linking never rises above enumeration." },
        { criterion: "Lexical Resource", note: "Everyday vocabulary dominates ('big topic', 'very old', 'really special') with heavy repetition of 'lose' and 'old'; precision terms such as 'heritage' or 'distinctive' never appear." },
        { criterion: "Grammatical Range and Accuracy", note: "Sentences are short and mostly accurate, but there is almost no subordination; the repeated 'If it is… they can…' pattern is simple rather than developed, capping the range on display." },
      ],
    },
    {
      bandEstimate: "Band 7.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Historic terraces are falling to tower cranes in city after city, and each demolition is defended as progress. This essay weighs what is actually lost when the fabric goes, and how the decision to demolish or protect should be made.",
        "The loss is threefold. Architecturally, a period street is an archive of craft — hand-cut stone, proportioned facades — that no reconstruction convincingly replicates. Socially, familiar buildings are the scaffolding of collective memory: people navigate their own pasts by the landmarks that survive. Economically, the distinctiveness being erased is often precisely what made these districts desirable, so the demolitions can slowly eat the value that motivated them.",
        "The decision, however, cannot rest on nostalgia, because not every old building merits rescue and a city must also house its people. A workable procedure would test each candidate on rarity, on its role in public memory, and on whether it can be adapted rather than replaced. An independent panel should apply the test in public, with hearings before decisions are final, so that neither developers nor sentiment dominates. Publishing the criteria in advance would also let owners know where they stand before they plan, borrow or demolish.",
        "Selectivity is part of the answer, too: a city that protects everything freezes, while one that protects nothing forgets itself. The goal is a living centre where protected landmarks and new housing coexist by design.",
        "In sum, what disappears with an old building is a piece of the city's memory, craft and appeal. Deciding what to keep should therefore be an open, criteria-based act of choice — deliberate, public and selective.",
      ],
      wordCount: 263,
      justification: [
        { criterion: "Task Response", note: "Both questions are answered as discussions — three developed losses, then a three-part decision procedure with governance — and each body paragraph opens by naming the question it answers." },
        { criterion: "Coherence and Cohesion", note: "The essay moves question, question, synthesis, with signposts ('The loss is threefold', 'The decision, however') doing real orienting work and paragraph 4 framing selectivity as a bridge." },
        { criterion: "Lexical Resource", note: "Precise abstraction ('the scaffolding of collective memory', 'an open, criteria-based act of choice') shows range without strain, and collocations are secure throughout." },
        { criterion: "Grammatical Range and Accuracy", note: "Varied, mostly accurate structures — the balanced 'while' contrast, tripartite parallelism, and modal proposals ('would test', 'should apply') — sustained across complex sentences." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "heritage", partOfSpeech: "noun", meaning: "The buildings and traditions inherited from the past and valued by a community." },
    { word: "facade", partOfSpeech: "noun", meaning: "The principal front face of a building, often its most protected feature." },
    { word: "craftsmanship", partOfSpeech: "noun", meaning: "Skilled, careful handwork, visible in historic masonry, joinery and ornament." },
    { word: "collective memory", partOfSpeech: "noun", meaning: "The recollections and meanings a community attaches to shared places and events." },
    { word: "adaptive reuse", partOfSpeech: "noun", meaning: "Converting an old building to a new purpose while keeping its historic character." },
    { word: "demolition", partOfSpeech: "noun", meaning: "The deliberate tearing-down of a structure." },
    { word: "streetscape", partOfSpeech: "noun", meaning: "The combined character of a street as it is seen and experienced." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};
