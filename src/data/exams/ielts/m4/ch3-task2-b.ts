/**
 * Chapter 3B — Task 2 essay families, part B (PROMPT 46, Part C).
 *
 * Three essay-family lessons — cause and effect, two-part questions, direct
 * questions — each taught through the ten mandated teaching points: understanding
 * the question, identifying the task, brainstorming, choosing a position,
 * developing arguments, creating examples, structuring introductions, writing
 * body paragraphs, writing conclusions, avoiding repetition.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const awritingTask2LessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t2-cause-effect",
    title: "Task 2 — Cause and effect",
    description:
      "The explanatory family: causes asked, effects asked, both delivered — cause chains versus single causes, root causes versus triggers, and the verb shelves that keep the two halves from repeating themselves.",
    objectives: [
      "split a cause-and-effect prompt into its two deliverables: sources and consequences",
      "argue from root causes rather than triggers, using the removal test",
      "trace effects one step at a time with dedicated consequence language",
      "rotate cause verbs and effect verbs so neither half repeats itself",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "A cause-and-effect prompt hands you a phenomenon and asks two questions about it: where it comes from and what it produces. The family's trap is generosity toward one half — most candidates can generate causes all day, then watch the effects paragraph shrink to two sentences. This lesson installs the two-column discipline that keeps both halves alive, teaches you to argue from root causes rather than incidents, and gives each half its own shelf of verbs.",
        beforeYouStart: [
          "You can paraphrase a Task 2 prompt without copying its wording.",
          "You know the four-paragraph essay shape from the foundations chapter.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 2 — the explanatory (causes and effects) family, in both Academic and General Training"],
          ["Task & question types", "An essay of at least 250 words answering a two-question prompt about sources and consequences"],
          ["What is assessed", "Task Response: every part of the question answered, ideas extended and supported; plus the shared criteria"],
          ["Why this matters", "The family's signature failure is the half-answered script — causes developed in depth while effects wither, and the response criterion pays for it"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "Every prompt in this family has a topic sentence and two question tails. The topic sentence names a phenomenon ('In many cities, the level of noise that residents experience has increased'); the tails ask 'What are the causes of this?' and 'What effects does it have?'. Read those tails as a contract: you owe the examiner an account of where the phenomenon comes from AND an account of what it produces. Some variants ask only for causes, only for effects, or for problems and remedies — the printed question words decide, so underline them before planning anything.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "This is an explanatory essay, not an argument: nobody has asked whether you approve of noise. Your job is analysis — a working model of the mechanism. That still leaves a decision about emphasis. The two halves carry roughly equal weight on the page, so a script of 180 words on causes and 50 on effects reads as unfinished even when every sentence is good. Identify, before drafting, that you owe two complete accounts, and that neither is an optional extra.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "The two-column plan",
        steps: [
          { title: "Step 1: Name the phenomenon in your own words", text: "Rewrite the topic sentence as a short paraphrase at the top of your plan. Everything you brainstorm must answer to this line, which keeps drift out from the start.", examples: [{ english: "Prompt phenomenon: rising urban noise. Plan heading: 'cities keep getting louder'.", note: "A paraphrased heading is drift insurance." }] },
          { title: "Step 2: Fill a CAUSES column fast, without judging", text: "Ask 'why does this happen?' repeatedly and write every answer that comes, however ordinary. Speed matters more than quality at this stage; pruning comes later.", examples: [{ english: "Causes: more delivery vans, late-night construction, air-conditioning units, weak noise rules, car-first planning.", note: "Five raw causes in ninety seconds is a healthy harvest." }] },
          { title: "Step 3: Fill an EFFECTS column by chasing chains", text: "Ask 'and then what?' of the phenomenon, and ask it again of each answer. Effects live in sequences — one consequence creating the conditions for the next — and your arrows will become your paragraph's spine.", examples: [{ english: "Noise → broken sleep → tired workers → weaker concentration → quieter streets as people retreat indoors.", note: "The arrows are pre-written topic sentences." }] },
          { title: "Step 4: Prune to what you can develop", text: "Keep two or three causes and two or three effects you can genuinely explain and illustrate. A developed pair on each side beats a crowded list on either.", examples: [{ english: "Cut 'air-conditioning units' as undevelopable; keep planning, deliveries and construction, each of which you can picture.", note: "The cut is where depth is chosen over breadth." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "In this family your 'position' is analytical rather than argumentative: you are choosing which causes are the real engine and which effect matters most. Decide, from your plan, which single cause you would defend as the deepest one, and which consequence you would call the heaviest. Those two choices become the load-bearing claims of your thesis and conclusion: 'Urban noise stems chiefly from car-first planning, and its most damaging consequence is the quiet retreat of street life.' An essay that ranks is an essay that analyses.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "Develop arguments here by separating roots from triggers and chains from single links. A trigger is the event that sets an episode off; a root cause is the standing condition that made the trigger decisive. The removal test tells them apart: mentally delete the trigger — if the phenomenon would still have happened, the trigger was not the root. A new motorway opening may double complaints this year; the decades-old habit of planning around the car explains why the noise was rising before any cone appeared. Argue from the root, mention the triggers, and let your effects paragraph run as a chain in which each consequence becomes the cause of the next.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Examples in explanatory essays are typical scenarios, not invented statistics. A delivery rider's scooter idling under a bedroom window at six in the morning does more work than a fabricated figure about sleep studies ever could. Never manufacture research — a phrase like 'scientists have proven that 43 per cent of…' cannot be checked, sounds borrowed, and spends words your analysis needs. One vivid, ordinary scene per developed cause or effect is the right dose: concrete enough to picture, brief enough to leave room for explanation.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "The introduction runs three moves in two or three sentences: a background clause that sets the phenomenon in the world ('Cities have grown steadily louder over recent decades'); a paraphrase of the prompt's claim in fresh words; and a two-part thesis that previews BOTH deliverables ('This essay traces the main sources of urban noise and follows its consequences into ordinary lives'). The thesis is a promise about structure — one clause per half — and the examiner reads it exactly that way.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "Body one delivers the causes: a topic sentence naming your root cause, two or three sentences developing it, then the supporting triggers, each with a sentence or two of explanation. Body two delivers the effects as a traced chain — one consequence per sentence, each linked to the last: 'The most immediate effect is broken sleep. Persistent tiredness then translates into weaker focus, which in turn shortens tempers and lowers output.' Resist stacking three consequences into a single breath; a chain the reader can walk through, step by step, is what development looks like in this family.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Conclude by restating the mechanism, not by demanding action. Compress the causal account in fresh words, name the heaviest consequence as your closing judgement, and stop. A cause-and-effect essay that ends 'governments must therefore ban…' has wandered into a question nobody asked — remedies belong to prompts that request them. Two sentences are enough: one for the mechanism, one for the consequence that matters most.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "table",
        title: "Two verb shelves, kept apart",
        headers: ["Saying why — the cause shelf", "Saying what follows — the effect shelf"],
        rows: [
          ["stems from — 'the trend stems from cheap credit'", "leads to — 'lost sleep leads to shorter tempers'"],
          ["is driven by — 'the volume is driven by delivery growth'", "results in — 'fatigue results in weaker concentration'"],
          ["has its roots in — 'the problem has its roots in planning habits'", "translates into — 'tiredness translates into unfinished work'"],
          ["can be traced to — 'the rise can be traced to weak regulation'", "in turn — 'people seal their windows, and street life in turn thins'"],
          ["gives rise to — 'car-first design gives rise to constant traffic hum'", "sets off a chain in which — 'one noisy decade sets off a chain in which neighbours stop talking'"],
        ],
      },
      { type: "heading", text: "Worked example — the family end to end" },
      {
        type: "example",
        title: "From prompt to mechanism",
        items: [
          { english: "PROMPT: 'In many cities, the level of noise that residents experience has increased. What are the causes of this problem? What effects does it have?' Column plan — CAUSES: car-first planning (root), delivery growth, round-the-clock construction. EFFECTS: broken sleep → poorer concentration → thinner street life.", note: "Two columns, two developed halves, arrows marking the chains before drafting begins.", domain: "exam" },
          { english: "Body-one opening built on that plan: 'Urban noise is driven above all by decades of planning that treated the car as the default.' The root takes the topic sentence; deliveries and late construction follow as visible triggers.", note: "Root first reads as analysis; triggers first reads as a news report.", domain: "exam" },
          { english: "A traced effect chain: 'The most immediate effect is broken sleep. Persistent fatigue then translates into poorer concentration, which in turn lowers both productivity and patience.'", note: "Three consequences, three sentences, three different effect verbs — nothing stacked.", domain: "exam" },
          { english: "The removal test in daily life: a flatmate's party explains one bad night; the landlord's refusal to install soundproofing explains the decade of them. Delete the party and the noise survives — the standing condition is the root.", note: "The test works anywhere: ask what remains when the incident is subtracted.", domain: "everyday" },
          { english: "At work, a missed-deadline report blames a server outage; the reviewer's note points to the deadline calendar nobody confirms. Incident versus standing condition, in office clothing.", note: "Explanatory writing of every kind improves when roots outrank incidents.", domain: "work" },
          { english: "A candidate's script spends 180 words on causes and closes with 'Noise also affects people badly.' The margin note writes itself: the second question was largely ignored.", note: "However strong the first half, an undeveloped second half caps the response criterion.", domain: "exam" },
          { english: "Study drill: pick any phenomenon in the news, five minutes, two columns — three causes left, three effects right, every effect pushed one step further with 'and then what?'", note: "The two-column reflex is this family's transferable habit, trainable in a single sitting.", domain: "study" },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "The causes are the interesting part, so I will develop those and mention the effects briefly at the end.", right: "Give the effects their own body paragraph and their own development — the prompt printed two questions, and both are scored.", reason: "Half-answered scripts are this family's signature failure: the response criterion rewards coverage of every part asked, not depth in the half you enjoyed writing." },
          { wrong: "The new ring road opened in May, so it is the cause of the rising complaints.", right: "Run the removal test first: were complaints climbing before May? A trigger starts an episode; the root condition explains the pattern, and the root deserves the topic sentence.", reason: "Essays that mistake triggers for roots describe incidents instead of explaining mechanisms, and explanation is the whole job here." },
          { wrong: "I will link every consequence with 'because', since the essay is about causation.", right: "Keep the shelves apart and rotate within each: 'stems from' and 'is driven by' for causes; 'leads to', 'results in' and 'in turn' for effects.", reason: "One connector repeated looks limited on two criteria at once — cohesion that never varies and vocabulary that never stretches." },
        ],
      },
      { type: "heading", text: "Model answer across the four skills" },
      {
        type: "four-skills",
        title: "The noise prompt, worked four ways",
        reading: {
          text: "The council's noise report blamed the new ring road for the doubling of complaints since 2019. Complaints, however, had already been climbing for a decade before the first cone appeared, and the curve tracks the growth of night-time deliveries almost exactly.",
          task: "Which cause does the report treat as a trigger, and which does the decade-long curve reveal as the deeper root?",
        },
        writing: {
          task: "In many cities, the level of noise that residents experience in daily life has increased. What are the causes of this problem? What effects does it have? Write a full response of at least 250 words.",
          guide: [
            "Introduction: paraphrase the phenomenon, then preview both halves — one clause with 'stems chiefly from', one with 'translates into'.",
            "Body one: lead with the root cause ('is driven by'), then the visible triggers, each developed for two or three sentences.",
            "Body two: trace the chain one step at a time — 'leads to', 'in turn', 'translates into' — one consequence per sentence.",
            "Conclusion: restate the mechanism in fresh words and end on the heaviest consequence, not on a call for new laws.",
          ],
          model: "Cities have grown steadily louder over recent decades, and the sources of that rise are not mysterious. This essay traces the main causes of urban noise and follows its effects into ordinary people's lives.\n\nThe growth in noise stems chiefly from the way cities now move. Delivery vans, ride-hailing cars and the constant hum of traffic create a baseline that never entirely stops, and each new online-order habit adds another engine to the street. Construction, too, has become continuous: where building once ended at dusk, floodlit sites now run late into the evening. Beneath these visible triggers lies a quieter root — decades of planning that treated sound as a harmless by-product of growth rather than a form of pollution. So long as noise carries no cost for those who make it, the volume creeps upward.\n\nThe effects arrive in a chain. The most immediate is broken sleep, as sirens and early deliveries cut through the night. Persistent fatigue then translates into poorer concentration at work and school, which in turn lowers productivity and tempers alike. Over time, residents respond by sealing their windows and retreating indoors, and street life thins as conversation moves inside. The city becomes physically fuller yet socially quieter.\n\nIn short, urban noise is driven above all by transport habits and permissive planning, and its consequences run from lost sleep to thinned street life. Of these, the slow retreat indoors may prove the most damaging, because it quietly weakens the everyday contact that city living depends on.",
        },
        listening: {
          script: "When the night market moved onto our street, the vans started arriving at four in the morning. Within a month, nobody on our floor was sleeping properly. My neighbour gave up her morning classes because she could not concentrate, and by winter most of us kept the windows shut even in summer. The street that used to fill with chat after dinner is quiet now — everyone is inside.",
          task: "Follow the chain: name the three effects the speaker traces, in the order she traces them.",
        },
        speaking: {
          task: "Describe one cause-and-effect chain from your own life — something that started small and produced two or three knock-on consequences. Speak for forty seconds.",
          frames: [
            "It all stems from…",
            "That in turn led to…",
            "The knock-on effect was…",
            "In the end it translated into…",
          ],
          checklist: [
            "Did the chain move one step at a time?",
            "Did you use at least two different effect verbs?",
            "Could a listener retell the chain after hearing it once?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Feature", "What it achieves"],
        rows: [
          ["Both halves delivered", "Body one accounts for the causes and body two for the effects — the two-part discipline that the response criterion checks first"],
          ["Root before triggers", "Naming the planning habit beneath the visible triggers reads as analysis rather than description"],
          ["Chain-traced effects", "Each consequence earns its own sentence and its own effect verb, so the second body walks instead of piling"],
          ["Rotated verb shelves", "Cause language and effect language alternate rather than repeat, protecting lexical range without decoration"],
          ["Mechanism conclusion", "The close restates the causal account in fresh words and lands on the heaviest consequence, not a sudden demand for laws"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Circle the two question tails — causes and effects — and make them the headings of your two plan columns before anything else."],
          ["While the clock runs", "Keep both columns alive: if a paragraph serves only one column, remind yourself the other half still needs its body."],
          ["If you are stuck", "Run the removal test on your best cause: delete the trigger and ask whether the phenomenon survives — what survives is the root."],
          ["Final minutes", "Audit your connectors: three sentences leaning on the same 'because' are two rewrites too many; rotate the shelves."],
        ],
      },
      {
        type: "summary",
        points: [
          "A cause-and-effect prompt is a contract with two deliverables: an account of sources and an account of consequences, both scored.",
          "Plan in two columns and chase chains with 'and then what?' — the arrows become your effects paragraph's spine.",
          "Separate roots from triggers with the removal test, and give the root the topic sentence.",
          "Trace effects one step at a time, rotating the effect shelf: 'leads to', 'results in', 'translates into', 'in turn'.",
          "Conclude on the mechanism and the heaviest consequence — remedies belong to prompts that ask for them.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "Before planning any essay, what does question analysis tell you to underline?", options: ["The word limit only", "The question's actual demands — every question word and every deliverable", "Only the topic's key nouns"], correctIndex: 1, explanation: "Analysis hunts the demand words first, and this family's prompt carries two of them; underlining is what stops a half-answer.", from: "Analysing question requirements" },
          { question: "A five-minute essay plan should fix what for every paragraph?", options: ["Its word count", "Its job — which question or half it answers", "Its opening phrase"], correctIndex: 1, explanation: "Per-paragraph jobs are the plan's real product; here body one owns causes and body two owns effects by design, not accident.", from: "Planning" },
          { question: "Cohesive devices earn credit only when they do what?", options: ["Appear in every paragraph", "Match the real logical relation between the sentences they join", "Are long and formal"], correctIndex: 1, explanation: "The coherence criterion rewards devices that track logic — which is why the cause and effect shelves must never be mixed up.", from: "Coherence" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What are the two deliverables a cause-and-effect prompt demands?",
        hints: ["Read the two question tails literally: one looks backwards, one forwards."],
        options: [
          { id: "a", text: "A personal position on the phenomenon and two arguments defending it." },
          { id: "b", text: "An account of the causes of the phenomenon and an account of the effects it produces." },
          { id: "c", text: "A list of the problems it creates and a matching list of solutions." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "An account of the causes of the phenomenon and an account of the effects it produces.",
          "The prompt's tails name both jobs: sources and consequences. Each needs its own space in the plan and its own body on the page, and neither is an optional extra.",
          "(a) describes the opinion family's shape; (c) is the problem-solution family — both are different prompts wearing similar nouns.",
        ),
        tags: ["awriting", "t2", "cause-effect"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Diagnose this plan.",
        hints: ["Count the deliverables the prompt printed, then check the plan against them."],
        passageTitle: "A candidate's plan",
        passage: "PROMPT: 'In many cities, the level of noise that residents experience has increased. What are the causes of this problem? What effects does it have?' PLAN: Introduction — paraphrase the rise in noise. Body one — three causes of urban noise, 170 words, with a paragraph on the root. Body two — one closing sentence: 'The effects are also very serious.' Conclusion — repeat the three causes in fresh words.",
        question: "What is the central flaw in this plan?",
        options: [
          { id: "a", text: "The introduction wastes words paraphrasing instead of giving an opinion." },
          { id: "b", text: "The plan delivers the causes half in full but abandons the effects half to a single sentence, so the script answers only one of the two questions asked." },
          { id: "c", text: "The plan lacks a counter-argument paragraph on the benefits of noise." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The plan delivers the causes half in full but abandons the effects half to a single sentence, so the script answers only one of the two questions asked.",
          "The prompt printed two questions and the plan budgets for one; the conclusion's repetition of causes cannot disguise a missing body. The effects column needed its own paragraph and its own development.",
          "(a) misdiagnoses the introduction — paraphrase is exactly its job here; (c) invents a requirement this family never made.",
        ),
        tags: ["awriting", "t2", "cause-effect", "planning"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Complete the chain sentence with the effect verb taught in this lesson.",
        hints: [],
        sentence: "Noise first breaks sleep; the fatigue that follows ____ into poorer concentration at work.",
        acceptedAnswers: ["translates", "turns"],
        feedback: fb(
          "Translates.",
          "'Translates into' is the effect shelf's verb for consequences that change form as they travel — rest lost at night becoming focus lost by day. It keeps the chain moving without repeating 'leads to'.",
        ),
        tags: ["awriting", "t2", "cause-effect", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the removal test.",
        question: "In one sentence: how does the removal test tell a root cause from a trigger?",
        acceptedAnswers: [
          "mentally delete the trigger — if the phenomenon would still have happened, the trigger was not the root",
          "remove the trigger and ask whether the phenomenon survives; if it does, the standing condition is the root",
          "delete the event and see if the pattern remains: what survives the deletion is the root cause",
          "take away the trigger and check whether the phenomenon continues — survival points to the root, not the trigger",
        ],
        keywords: ["trigger", "root", "survives"],
        hints: [],
        feedback: fb(
          "Mentally delete the trigger — if the phenomenon would still have happened anyway, the trigger was not the root cause.",
          "The test converts a vague feeling about importance into a checkable question: triggers start episodes, roots explain patterns, and only the pattern-level explanation deserves the topic sentence.",
          "Answers that call the trigger 'less important' without the deletion logic have the conclusion without the test.",
        ),
        tags: ["awriting", "t2", "cause-effect", "argument"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Your causes paragraph uses 'is driven by' in three consecutive sentences. What does this lesson prescribe?",
        hints: [],
        options: [
          { id: "a", text: "Keep it — consistency of terminology shows control." },
          { id: "b", text: "Rotate within the cause shelf: 'stems from', 'has its roots in' and 'can be traced to' across the three sentences." },
          { id: "c", text: "Replace them all with 'because', which is shorter." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Rotate within the cause shelf: 'stems from', 'has its roots in' and 'can be traced to' across the three sentences.",
          "The verb shelves exist so that causal prose can vary without drifting off-meaning: each shelf verb keeps the direction of the argument while the wording changes, which is what range with control looks like.",
          "(a) confuses repetition with precision; (c) trades variety for the flattest connector in English.",
        ),
        tags: ["awriting", "t2", "cause-effect", "vocabulary"],
      }),
    ],
    assignment: {
      title: "Write both halves of a new prompt",
      instructions:
        "Prompt: 'In many countries, adults sleep fewer hours than people did thirty years ago. What are the causes of this? What effects does it have on daily life?' Write ONLY the two body paragraphs — one for causes (root cause in the topic sentence), one for effects (a chain traced one step at a time). Label each paragraph with the half it delivers.",
      minWords: 130,
      maxWords: 230,
    },
    homework: [
      "Collect five phenomena from this week's news — a strike, a heatwave, a currency slide — and write a two-column plan for each: three causes left, three effects right, arrows marking the chains.",
      "Take any paragraph you have written before and rewrite every causal link, using a different verb from the cause or effect shelf each time; then read both versions aloud and hear the difference.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t2-two-part",
    title: "Task 2 — Two-part questions",
    description:
      "One prompt, two different questions: explain in one paragraph, judge in the next — the wall between the parts, the turn sentence that marks it, and the word budget that keeps both halves fed.",
    objectives: [
      "label each part of a two-part prompt with its own thinking family",
      "answer part one in body one and part two in body two, with a turn sentence between",
      "keep a symmetric word budget so neither half of the answer starves",
      "state a verdict on the evaluative part and hold it to the final line",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Two-part questions print two different questions about one topic — 'Why is this happening?' sitting beside 'Is this a positive or negative development?' — and the two halves usually belong to different kinds of thinking: one explains, the other judges. The scripts that fail here rarely fail from weak ideas; they fail from fusion, letting a single flowing discussion half-serve two different jobs. This lesson builds the wall between the parts, the turn sentence that marks it, and the budget that keeps both sides fed.",
        beforeYouStart: [
          "You can identify an essay's family from its question words.",
          "You have written a timed four-paragraph response before.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 2 — two-part prompts mixing question families, in both Academic and General Training"],
          ["Task & question types", "An essay of at least 250 words in which one prompt carries two distinct questions to answer separately"],
          ["What is assessed", "Task Response — all parts answered, each with its own development, plus a clear position wherever a part asks for one"],
          ["Why this matters", "The fused essay is the family's classic casualty: two questions, one undifferentiated discussion, and both halves only half-served"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "Start by counting question marks. A two-part prompt strings two interrogatives after one topic sentence: 'Why is this happening?' followed by a question about whether the trend deserves welcome or regret. The parts are usually different in kind — an explaining part ('Why…?') and a judging part (asking for a verdict). Label each part with its thinking family before planning, because each label carries its own obligations: explanation owes mechanisms, evaluation owes a verdict. Mislabelling part two as another explaining question is where fusion begins.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "Identify that you owe two answers in a fixed order, in different registers. Part one is written in the explanatory voice: no approval, no disappointment, just how the trend works. Part two switches register entirely: a weighing voice that measures gains against costs and lands somewhere. The task is not two essays — it is one essay with two distinct deliverables, and the reader should be able to point at the paragraph where each deliverable is paid.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "The two-box brainstorm",
        steps: [
          { title: "Step 1: Draw two boxes, one per question", text: "Write each part's question at the top of its own box. Material is only allowed into a box if it answers that box's question — this is the physical version of the wall between the parts.", examples: [{ english: "Box one, headed 'Why is this happening?', collects squeezed budgets, easy marketplace apps, eco-pride. Box two, headed 'Positive or negative?', collects landfill delays, local repair jobs, manufacturing job losses.", note: "Two questions, two containers, zero mixing." }] },
          { title: "Step 2: Fill the explaining box with mechanisms", text: "Ask why the trend exists and keep asking until the answers stop being news headlines and become forces — economic pressure, technological change, shifts in values.", examples: [{ english: "'Apps make it easy' becomes 'mobile marketplaces collapsed the friction that used to protect new retail'.", note: "Mechanisms, not headlines, survive development." }] },
          { title: "Step 3: Fill the judging box with a two-sided ledger", text: "List what the trend gives and what it costs, aiming for two or three items on each side, because a verdict without weighed evidence reads as taste.", examples: [{ english: "Gives: longer product lives, cheaper households, local resale work. Costs: pressure on new-goods jobs, poorly regulated electronics waste.", note: "The ledger is what makes part two an argument rather than a mood." }] },
          { title: "Step 4: Draft the thesis and the turn together", text: "Write the two-part thesis — one clause per question — and the sentence that will open body two. If the turn sentence cannot be written yet, the boxes are not cleanly separated.", examples: [{ english: "Thesis: 'The habit has grown from squeezed budgets and new values, and it deserves, on balance, a welcome.' Turn: 'The reasons are clear enough; the balance sheet takes more arguing.'", note: "Thesis and turn are the wall's two visible bricks." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "Only part two asks for a stance, so give it a strong one. 'Net positive, with one real cost' is a position; 'there are advantages and disadvantages' is a shrug. Choose the side your ledger actually supports, and let one honest concession strengthen rather than blur it: admitting that resale trade can export electronics waste, then showing why the gains outweigh it, reads as judgement — not weakness. The position must be quotable from the introduction and recognisable, unchanged, in the conclusion.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "Develop the two halves in their own dialects. Part-one arguments explain: each cause gets its mechanism spelled out — how squeezed budgets make a near-new coat at a third of the price the rational buy, how eco-pride turned reuse from a mark of poverty into a badge of taste. Part-two arguments weigh: each ledger item gets measured, compared and, where you can, linked ('the environmental gain is immediate; the employment cost is slower and narrower'). Never let part two quietly re-run part one — a reason something happened is not automatically a reason to welcome it.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Each half deserves at least one example of its own kind. For the explaining half, choose a typical actor: a student furnishing a first flat from marketplace finds in one weekend what a decade ago took months of luck. For the judging half, choose a measurable trade: every refurbished phone that changes hands defers both a landfill delivery and a manufacturing run. Keep examples inside the half they serve — an example that explains the trend's growth does double duty badly if asked to prove its virtue too.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "The introduction paraphrases the trend and then answers both parts in the same breath: 'This essay explains why the habit has grown and argues that, on balance, the change is a positive one.' One clause names the explaining job, one clause states the verdict — the reader now holds a map of the whole essay. Two sentences are plenty: scene-setting first, dual-purpose thesis second. An introduction that promises only 'this essay will discuss…' has announced a topic, not answered a question.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "Body one serves part one: two or three causes, each with its mechanism, no verdict language in sight. Body two opens with the turn sentence — a clause that closes part one and announces part two ('The reasons are clear enough; the balance sheet takes more arguing.') — then states the verdict, weighs the ledger's strongest entries, concedes one cost honestly, and lands back on the position. The turn is doing real work: it tells the reader the register has changed from how to whether, and it makes the structure visible enough to be scored as organisation.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "The conclusion compresses both payments: one clause restating the mechanism in fresh words, one clause repeating the verdict unchanged. Nothing new enters here — no fresh cause, no surprise cost — because a conclusion that introduces material leaves it undeveloped. 'Second-hand buying grew because thrift met technology and new values; its gains, environmental and local, outweigh its narrower costs.' That is a two-part essay closing both accounts.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "The family's repetition risk is one idea serving two masters: 'cheap prices' appears as a cause in body one and again as an advantage in body two, and the reader starts hearing echoes. The rule is say it once per half, in that half's dialect: as a cause, prices are a mechanism ('budgets were squeezed, so…'); as an advantage, they are a benefit ('the buyer's saving is straightforward'). Where the overlap is unavoidable, make the reference explicit and move on — 'the affordability noted above becomes, for the household, a simple gain' — and rotate your evaluative vocabulary (gains, benefits, value) so the ledger does not clank.",
      },
      { type: "heading", text: "Worked example — the family end to end" },
      {
        type: "example",
        title: "One prompt, two answers",
        items: [
          { english: "PROMPT: 'Many people now buy second-hand goods such as clothing, furniture and electronics rather than new. Why is this happening? Do you think this is a positive or negative development?' Part one labelled EXPLAIN (mechanisms owed); part two labelled JUDGE (verdict owed).", note: "The labels are decided before a single sentence is drafted.", domain: "exam" },
          { english: "Dual-thesis introduction: 'This essay explains why the habit has grown and argues that, on balance, the change is a positive one.'", note: "One clause per part — the reader holds the whole map by sentence two.", domain: "exam" },
          { english: "The turn in place: 'The reasons are clear enough; the balance sheet takes more arguing.' Body two then states the verdict before weighing a single item.", note: "The turn sentence is the wall's visible brick — and an organisation point.", domain: "exam" },
          { english: "The fused failure: four fluent paragraphs on cheapness and sustainability that never separate explaining from judging. Both questions are touched; neither is answered.", note: "Fluency cannot repair structure — the reader cannot point to where either deliverable was paid.", domain: "exam" },
          { english: "A working budget for 260 words: introduction 40, explaining body 90, judging body 90, conclusion 40. Each part owns its share, and neither starves.", note: "Symmetry is a planning number, not a hope.", domain: "exam" },
          { english: "Everyday version: asked at dinner why a city built new bike lanes and whether they work, you answer the two questions in order — first the forces behind them, then your verdict on them.", note: "The dinner-party version of the wall: two questions, two answers, held separately.", domain: "everyday" },
          { english: "Study drill: take three prompts from any practice collection, label each part with its thinking family, and draft only the thesis and turn sentence for each — five minutes total.", note: "Labelling speed is the transferable skill; the essay then assembles itself around the labels.", domain: "study" },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "Both questions are about the same topic, so one flowing discussion will cover them.", right: "Build the wall: body one answers the explaining question, body two answers the judging question, and the turn sentence marks the border.", reason: "The fused essay leaves both questions half-served — coverage is structural, and it cannot be patched on later with a hurried final paragraph." },
          { wrong: "Part two asks my opinion, so I will present both sides evenly and let the reader decide.", right: "Weigh both sides, then land visibly on one side — an evaluation question wants a verdict the reader can point at.", reason: "Balanced description without a decision reads as no position at all, and the criterion rewards a stance that is stated early and never traded away." },
          { wrong: "Body one is flowing, so I will let it run to 200 words and squeeze part two at the end.", right: "Hold the budget: roughly equal space for the two parts, decided in the plan, or the smaller half reads like an afterthought.", reason: "Asymmetry starves the second answer in front of the reader, and no conclusion can compensate for a body that never had room to argue." },
        ],
      },
      { type: "heading", text: "Model answer across the four skills" },
      {
        type: "four-skills",
        title: "The second-hand prompt, worked four ways",
        reading: {
          text: "Resale platforms reported their busiest year yet, with furniture and electronics leading the growth. Analysts credited squeezed household budgets, easier mobile marketplaces and, in their words, 'the arrival of eco-pride on the high street'. The same report warned that retailers of new goods now expect leaner years.",
          task: "Sort the three named reasons into the explaining half of a two-part essay — and say where the retailers' warning belongs instead.",
        },
        writing: {
          task: "Many people now buy second-hand goods such as clothing, furniture and electronics rather than buying new. Why is this happening? Do you think this is a positive or negative development? Write a full response of at least 250 words.",
          guide: [
            "Introduction: paraphrase the trend, then answer both parts — one clause for the reasons, one clause for your verdict.",
            "Body one: two or three causes, each explained as a mechanism, with no verdict language anywhere.",
            "The turn: close part one and announce part two in a single sentence before any weighing begins.",
            "Body two: state the verdict, weigh the strongest ledger items on both sides, concede one cost honestly, and land back on your position.",
            "Conclusion: compress the mechanism and repeat the verdict, unchanged, in fresh words.",
          ],
          model: "Second-hand shopping has moved from the edge of the economy towards its centre: clothing, furniture and electronics that would once have been discarded now change hands routinely. This essay explains why the habit has grown and argues that, on balance, the change is a positive one.\n\nThe trend has its origins in economics and in attitude alike. Household budgets have been squeezed, and a near-new item at a third of the price is simply rational buying. At the same time, a generation has grown up with mobile marketplaces where used goods are as easy to browse as new ones, so buying second-hand no longer signals poverty but taste. Behind both reasons sits a shift in values: sustainability has moved from a fringe concern to a mainstream badge, and reusing an item is now something to be proud of.\n\nThe reasons are clear enough; the balance sheet takes more arguing. On balance, this is a positive development, though not an unqualified one. The environmental case is strong — every garment or device given a second life delays its journey to landfill and slows the manufacture of replacements. Local economies benefit too, since repairers, resellers and charity shops tend to live nearby and spend locally. The drawback is real but narrower: industries built on new production may shed jobs, and badly regulated trade in used electronics can export waste. Even so, the gains — environmental, financial and social — outweigh these costs.\n\nIn conclusion, second-hand buying has grown because thrift met technology and new values, and its advantages comfortably outweigh its disadvantages.",
        },
        listening: {
          script: "I buy used for the money, honestly — a winter coat for the price of a sandwich. But I keep going back because of how it feels: my sofa has a history, and my bike was somebody's weekend project. My sister thinks it is all a bit grubby. She buys everything new and replaces most of it within the year.",
          task: "Which of the speaker's reasons belong to the explaining half of the prompt, and where does her sister's habit belong in the judging half's ledger?",
        },
        speaking: {
          task: "Give a one-minute verdict on second-hand shopping: net positive or net negative? Open with your turn sentence, then defend the verdict with two pieces of evidence and one honest concession.",
          frames: [
            "Having explained why the habit grew, the question is whether…",
            "On balance, …",
            "The strongest objection is…, but…",
            "Even conceding…, the gains still…",
          ],
          checklist: [
            "Did your verdict arrive early and stay unchanged?",
            "Did you weigh at least one opposing point honestly?",
            "Did part two sound like a judgement rather than more explanation?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Feature", "What it achieves"],
        rows: [
          ["Both parts answered in order", "The introduction announces the explaining job and the verdict, and the bodies pay each debt in the order the prompt printed them"],
          ["A visible turn", "Body two opens by closing part one, so the reader always knows which question is being answered — structure made scorable"],
          ["A symmetric budget", "Roughly equal space for mechanism and judgement keeps either half from reading like an appendix"],
          ["A verdict held throughout", "The position appears in the introduction, survives an honest concession, and returns unchanged in the conclusion"],
          ["One idea, two dialects", "Where a cause reappears as an advantage, the essay says it once per half in that half's own vocabulary"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Count the question marks, label each part with its thinking family, and write the thesis and turn sentence together in the plan."],
          ["While the clock runs", "Serve one part per body: explaining language only in body one, weighing language in body two, turn sentence at the border."],
          ["If you are stuck", "If part two stalls, ask what the trend gives and what it costs, choose the heavier side, and defend it with the ledger's best two items."],
          ["Final minutes", "Re-read the introduction's promise: whatever it announced must be delivered, and the verdict must be quotable and unchanged."],
        ],
      },
      {
        type: "summary",
        points: [
          "Two-part prompts carry two different questions — usually one explaining half and one judging half — and each owes its own answer.",
          "Build the wall in the plan: two boxes, two dialects, and a thesis with one clause per part.",
          "The turn sentence closes part one and announces part two; it is where organisation becomes visible.",
          "Hold a symmetric word budget so neither half starves, and give the evaluative part a verdict that never wavers.",
          "When one idea serves both halves, say it once per half in that half's dialect instead of echoing yourself.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "Two question marks in one prompt signal what?", options: ["Choose the easier question and answer it well", "Two separate deliverables, each needing its own answer and its own space", "One fused discussion is acceptable"], correctIndex: 1, explanation: "Question analysis counts demands before planning: two interrogatives are two contracts, and half-serving both fails the response criterion.", from: "Analysing question requirements" },
          { question: "What should every paragraph's line in an essay plan contain?", options: ["Its job — the question or half it serves", "Its final sentence, written in full", "A decoration quota"], correctIndex: 0, explanation: "Plans earn their keep by fixing jobs: in this family, body one owns the reasons and body two owns the verdict, decided on paper first.", from: "Planning" },
          { question: "The turn sentence between essay halves is best described as what?", options: ["A decorative flourish", "Signposted progression — cohesion that shows the logical shift between the parts", "A waste of words"], correctIndex: 1, explanation: "Cohesion is scored on visible logical relations; the turn makes the shift from explaining to judging explicit, which is exactly what the criterion rewards.", from: "Coherence" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What does a two-part question prompt actually carry?",
        hints: ["Count the question marks, then ask what kind of thinking each one demands."],
        options: [
          { id: "a", text: "One question rephrased twice for emphasis." },
          { id: "b", text: "Two different questions — often one explaining half and one judging half — each needing its own answer and its own space." },
          { id: "c", text: "A topic statement plus a discussion instruction." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Two different questions — often one explaining half and one judging half — each needing its own answer and its own space.",
          "The parts usually belong to different families of thinking, which is why the lesson labels them before planning: mechanisms owed on one side, a verdict owed on the other, and neither interchangeable.",
          "(a) ignores the printed question marks; (c) describes a discussion-family prompt, not this one.",
        ),
        tags: ["awriting", "t2", "two-part"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Diagnose body two.",
        hints: ["Ask what part two demanded, then check what this paragraph actually delivers."],
        passageTitle: "A candidate's second body paragraph",
        passage: "PROMPT: 'Many people now buy second-hand goods rather than new. Why is this happening? Is this a positive or negative development?' BODY TWO (the judging half): 'Another reason for the growth of second-hand shopping is that apps make it convenient. People can browse used furniture on their phones in the evening. This is why websites selling used goods have millions of users. So there are many causes of this trend.'",
        question: "What has this body failed to do?",
        options: [
          { id: "a", text: "It has failed to reach 250 words overall." },
          { id: "b", text: "It has failed to judge — instead of weighing gains and costs and giving a verdict, it re-explains the causes, so part two is never answered." },
          { id: "c", text: "It has failed to use linking words between sentences." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It has failed to judge — instead of weighing gains and costs and giving a verdict, it re-explains the causes, so part two is never answered.",
          "Part two asked whether the development is positive or negative, and the paragraph answers with more mechanism — the fused-essay failure in miniature. The turn sentence and a stated verdict would have forced the register change the prompt demanded.",
          "(a) guesses at a length problem the excerpt cannot show; (c) is not the failure on display — the sentences connect; they just serve the wrong question.",
        ),
        tags: ["awriting", "t2", "two-part", "verdict"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Complete the rule for the border between the parts.",
        hints: [],
        sentence: "The first sentence of body two should ____ the turn from explaining to judging before any weighing begins.",
        acceptedAnswers: ["signpost", "signal", "mark"],
        feedback: fb(
          "Signpost.",
          "A signposted turn tells the reader the logical register has changed — from how the trend works to whether it is welcome — and that visibility is precisely what the cohesion criterion pays for. Without it, even a well-judging paragraph can read as a drift.",
        ),
        tags: ["awriting", "t2", "two-part", "coherence"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. A script runs: introduction 45 words, body one (reasons) 165 words, body two (verdict) 60 words, conclusion 30 words. What is the structural problem?",
        hints: [],
        options: [
          { id: "a", text: "None — the total clears 250 words, so all parts are answered." },
          { id: "b", text: "Word-budget asymmetry: part two is starved at 60 words, so the verdict is asserted rather than argued, whatever the total." },
          { id: "c", text: "The introduction is too long and should be cut to ten words." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Word-budget asymmetry: part two is starved at 60 words, so the verdict is asserted rather than argued, whatever the total.",
          "The budget is a fairness rule between the parts: with a sixth of the essay's room, the judging half cannot weigh a ledger, concede a cost and land on a position. Symmetry is decided in the plan, not recovered at the end.",
          "(a) confuses length with coverage — both parts must be answered, not merely present; (c) attacks a healthy introduction instead of the starving body.",
        ),
        tags: ["awriting", "t2", "two-part", "planning"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Define the turn sentence.",
        question: "In one sentence: what does the turn sentence do at the top of body two?",
        acceptedAnswers: [
          "it closes part one and announces part two, marking the shift from explaining to judging",
          "it ends the first answer and opens the second, showing the reader which question is now being served",
          "it summarises the explaining half and signals that the weighing half is beginning",
          "it separates the two parts: finishing the first deliverable and introducing the second",
        ],
        keywords: ["closes", "announces", "part"],
        hints: [],
        feedback: fb(
          "It closes part one and announces part two, marking the shift from explaining to judging.",
          "The turn is the wall's visible brick: one sentence that finishes the first answer's business and opens the second's, making the two-part structure explicit enough for a reader — and an examiner — to navigate.",
          "Answers describing only 'a linking word between paragraphs' miss the double job: the turn closes and opens in the same breath.",
        ),
        tags: ["awriting", "t2", "two-part", "structure"],
      }),
    ],
    assignment: {
      title: "Draft the wall on a new prompt",
      instructions:
        "Prompt: 'In many countries, people now order food to their homes far more often than they cook from scratch. Why is this happening? Is this a positive or negative development?' Write the introduction (dual-purpose thesis), body one (reasons only) and body two (turn sentence, verdict, weighed ledger). Label each paragraph's part before it begins.",
      minWords: 140,
      maxWords: 240,
    },
    homework: [
      "From any prompt collection, find three two-part questions and label each part with its thinking family — explaining, judging, suggesting — before writing a single sentence.",
      "Write five candidate turn sentences for five different part-twos, each closing part one and announcing part two in a single breath.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t2-direct",
    title: "Task 2 — Direct questions",
    description:
      "Bare interrogatives waiting for answers: the answer-as-thesis pattern, the depth protocol that takes two ideas all the way down, and the two-idea cut that keeps the five-item list out of your script.",
    objectives: [
      "classify direct questions by their question word: what, how, why, should",
      "answer each interrogative in the introduction — the answer-as-thesis pattern",
      "develop two ideas fully through the depth protocol instead of listing five",
      "cut extra ideas on purpose before drafting begins",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Direct questions arrive without a statement to react to and without an instruction to discuss: just bare interrogatives — What makes a good teacher? How can schools help? — waiting for answers. The family's discipline is depth: two answers taken all the way down beat five named in passing, and the introduction must answer, not merely announce. This lesson installs the answer-as-thesis pattern, the depth protocol that develops each chosen idea, and the two-idea cut that keeps the list answer out of your script.",
        beforeYouStart: [
          "You can classify question words — what, how, why, should.",
          "You can develop an idea with explanation and example.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 2 — the direct-question family, in both Academic and General Training"],
          ["Task & question types", "An essay of at least 250 words answering bare interrogatives such as 'What…?' and 'How…?' with no statement or instruction attached"],
          ["What is assessed", "Task Response — full, developed answers to every question asked, with extension and support rather than lists"],
          ["Why this matters", "The list answer is this family's signature failure: five ideas named, none developed, and extension is exactly what the criterion rewards"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "No statement, no 'discuss', no camp of people to agree with: the prompt is nothing but questions, which makes it the only family where the entire topic lives in the interrogatives themselves. 'What makes a good teacher? How can schools help teachers to improve?' asks for a definition built of criteria and a method built of actions. Understanding the question means classifying each one by its question word: what asks for qualities or criteria, how asks for methods, why asks for reasons, and should asks for a verdict. Two interrogatives, two deliverables — the count still rules.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "The task is to answer — plainly, directly and early — and then to earn the answer with development. Direct questions are the family where the answer-as-thesis pattern is not optional: an introduction that only names the topic ('Teaching is an important profession') has not finished its job. Identify also what the questions do NOT ask: 'What makes a good teacher?' does not ask whether teachers are good, nor how teaching has changed — every paragraph must serve an answer, not a nearby topic.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "Brainstorm wide, then make the cut",
        steps: [
          { title: "Step 1: Answer each question fast, in single words", text: "Take the interrogatives one at a time and list every plausible answer without judging: for 'What makes a good teacher?' — patience, subject knowledge, humour, fairness, energy, organisation.", examples: [{ english: "Six single-word answers in one minute; the same again for the 'How can schools help?' question.", note: "Width first — the cut needs material to cut." }] },
          { title: "Step 2: Score each answer for developability", text: "Ask of every listed item: can I explain it in two sentences, give one concrete example, and say why it matters? Items that survive all three questions can carry a paragraph; items that cannot are list-fodder.", examples: [{ english: "'Humour' — example easy, explanation thin, importance vague: cut. 'Subject knowledge' — explanation, example and importance all ready: keep.", note: "Developability, not brilliance, decides the cut." }] },
          { title: "Step 3: Keep two per question and cross out the rest", text: "Two developed ideas per interrogative is the ceiling a 250-word essay can actually feed. Physically cross out the surplus — the discipline is the point.", examples: [{ english: "Final plan: knowledge and patience for question one; shared preparation time and mentoring for question two.", note: "The crossed-out items were not wrong; they were unaffordable." }] },
          { title: "Step 4: Order the survivors", text: "Decide which idea leads each paragraph — the stronger or more foundational answer first — and note one example beside each survivor before drafting.", examples: [{ english: "Knowledge leads ('simplification without distortion'), patience follows ('letting struggle be safe').", note: "Order decided on paper keeps paragraphs from starting mid-decision." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "For what- and how-questions, your 'position' is the set of criteria or methods you choose to defend — choosing IS the intellectual act, because the question admits many true answers. For a should-question hiding among the interrogatives ('Should schools still teach handwriting?'), the position is a verdict: yes, no, or yes-with-conditions — but never a bare 'it depends'. Whatever the type, the position must be arguable and yours: two criteria you can defend beat six borrowed from a revision guide.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "steps",
        title: "The depth protocol",
        steps: [
          { title: "Move 1: Name it", text: "State the idea in one clean sentence — the claim the paragraph will now earn.", examples: [{ english: "'Subject knowledge is the foundation of good teaching.'", note: "A named idea is a promise the next moves must keep." }] },
          { title: "Move 2: Explain it", text: "Unpack why the idea is true or how it works — the causal sentence that a sceptic would demand.", examples: [{ english: "'A teacher who truly understands a subject can simplify it without distorting it, because they know which corners are safe to cut.'", note: "The explanation is the difference between a claim and a developed claim." }] },
          { title: "Move 3: Show it", text: "Give one concrete, pictureable example — a scene, not a statistic.", examples: [{ english: "'The best teachers answer the question behind the question, fixing a broken analogy mid-sentence and carrying on.'", note: "One vivid scene outperforms any invented figure." }] },
          { title: "Move 4: Say why it matters", text: "Close the loop: connect the idea back to the question's real stakes — what breaks without it.", examples: [{ english: "'Without that depth, explanations harden into rules and curiosity into compliance.'", note: "The so-what move is where depth becomes argument." }] },
        ],
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Every developed answer needs one example, and the best examples here are scenes with people in them: a teacher waiting through silence until a student finds the answer, a mentor observing a first-year teacher and debriefing over coffee. Scenes do double duty — they prove the claim and they keep the register human, which suits a family that asks about qualities and people. Keep each to a sentence or two: the example serves the idea, never replaces it.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "The introduction answers both questions before any development begins: one framing clause, then the answers as thesis. 'Almost everyone can name a teacher who changed their life, yet the qualities that made that teacher effective are worth stating precisely: good teaching rests on deep subject knowledge worn lightly and the patience to let students struggle productively — and schools can nurture both.' The reader now holds your criteria and your methods; the bodies exist to earn them. An introduction that only gestures at the topic has deferred its only job.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "Give each question its own body, answered in the order asked, and run every chosen idea through the depth protocol inside it. Body one develops your two criteria for the what-question; body two develops your two methods for the how-question. The paragraph's opening sentence names the idea, the middle takes it through explanation and example, and the closing sentence says why it matters — four moves, two ideas, no third idea admitted. If a fifth quality is begging to be mentioned, remember it was crossed out on purpose: mentioning it in passing would undo the cut.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Conclusions here are compressions, not additions: restate the answers in fresh words, one clause per question, and stop. 'Good teaching combines mastery worn lightly with patience for productive struggle, and schools best serve it through shared preparation and mentored beginnings.' No new criteria, no new methods, no wider reflections about education in general — a conclusion that adds has nowhere to develop what it added, and undeveloped additions are list-answer fragments in evening dress.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "Two answer-paragraphs on one topic invite echo: 'good' appears in every other sentence, the same example gets recycled, the second paragraph re-argues the first. Three rotations fix it: rotate the topic's field words (a good teacher → an effective one → strong teaching); give each paragraph its own example, chosen for that idea alone; and let the second body reference the first without re-arguing it ('the patience described above is exactly what mentoring protects'). One idea, one paragraph, one example — repetition dies of assignment.",
      },
      { type: "heading", text: "Worked example — the family end to end" },
      {
        type: "example",
        title: "Two questions, two developed answers",
        items: [
          { english: "PROMPT: 'What makes a good teacher? How can schools help teachers to improve?' Question one classified WHAT (criteria owed); question two classified HOW (methods owed).", note: "Classification before brainstorming — the question word sets the deliverable's shape.", domain: "exam" },
          { english: "Answer-as-thesis: 'In my view, good teaching rests on two qualities — deep subject knowledge worn lightly, and the patience to let students struggle productively — and schools can nurture both in concrete ways.'", note: "Both answers stated up front; the bodies exist to earn them.", domain: "exam" },
          { english: "The depth protocol on one idea: name it ('subject knowledge is the foundation'), explain it (simplification without distortion), show it (the teacher fixing a broken analogy mid-sentence), say why it matters (answers the question behind the question).", note: "Four moves, one idea, fully earned — the unit of development this family scores.", domain: "exam" },
          { english: "The list answer: 'A good teacher is patient, kind, strict, funny, organised and hardworking.' Six adjectives, six undeveloped claims, zero scenes.", note: "Every word may be true; development is what the response criterion pays for, and none is present.", domain: "exam" },
          { english: "A verdict-type interrogative in the family: 'Should schools continue to teach handwriting?' demands a yes or a no — with conditions if needed — rather than a tour of both views.", note: "The should-variant imports the verdict discipline: decide, then defend the decision.", domain: "exam" },
          { english: "Everyday version of the breadth-versus-depth trade: choosing a phone by naming five features you will never use, or two you will use every day — the same cut the essay grader is applying to your paragraphs.", note: "Depth over breadth is a life decision wearing an academic uniform.", domain: "everyday" },
          { english: "Study drill: brainstorm six answers to any direct question in three minutes, score each for developability, keep two, and time the cut — the whole ritual should take five minutes.", note: "The two-idea cut is a reflex: practised weekly, it runs itself on test day.", domain: "study" },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "Listing six qualities shows wide knowledge of the topic.", right: "Choose two and take each through the depth protocol — developed coverage of two ideas outscores six mentions.", reason: "List answers trade extension for coverage, and extension is exactly what the response criterion rewards; graders count developed ideas, not named ones." },
          { wrong: "An introduction should only introduce the topic — the answers belong later.", right: "Answer as you introduce: state your response to each question asked, and let the bodies develop what the introduction promised.", reason: "The answer-as-thesis pattern tells the reader where the essay stands from the first paragraph, which is what clarity looks like in this family." },
          { wrong: "A 'Should…?' question is really an invitation to discuss both options equally.", right: "Give a yes or a no — with conditions if you need them — and let every paragraph serve that verdict.", reason: "Verdict-type interrogatives demand a decision; scripts that end on the fence read as unfinished no matter how fluent the middle." },
        ],
      },
      { type: "heading", text: "Model answer across the four skills" },
      {
        type: "four-skills",
        title: "The teacher prompt, worked four ways",
        reading: {
          text: "The school's newsletter praised its new mentoring scheme: first-year teachers now observe a senior colleague weekly, and staffrooms report longer conversations about method rather than paperwork. Inspectors noted one gap — class sizes remain among the highest in the region.",
          task: "Which of the newsletter's two facts would serve a 'How can schools help?' paragraph, and which is a limitation worth conceding?",
        },
        writing: {
          task: "What makes a good teacher? How can schools help teachers to become better at their work? Write a full response of at least 250 words.",
          guide: [
            "Introduction: frame briefly, then answer both questions immediately — your two criteria and your two methods, named.",
            "Body one: the what-question's two criteria, each through the depth protocol — name, explain, show, say why it matters.",
            "Body two: the how-question's two methods, the same protocol, with the school newsletter's kind of concrete detail.",
            "Conclusion: compress both answers in fresh words, one clause per question, adding nothing new.",
          ],
          model: "Almost everyone can name a teacher who changed their life, yet the qualities that made that teacher effective are worth stating precisely. In my view, good teaching rests on two qualities above all — deep subject knowledge worn lightly, and the patience to let students struggle productively — and schools can nurture both in concrete ways.\n\nSubject knowledge is the foundation, because a teacher who truly understands a subject can simplify it without distorting it: they know which corners are safe to cut and which are load-bearing. The best practitioners answer the question behind the question, anticipating the confusion that follows each explanation; one memorable teacher of mine fixed a broken analogy mid-sentence and carried on as if nothing had happened. Without that depth, explanations harden into rules and curiosity into compliance.\n\nPatience matters just as much. Learning happens at the edge of difficulty, and a teacher who jumps in with the answer at the first frown teaches students that struggle is failure. Patient teachers let silence do some of the work, and their students learn that effort is safe — a lesson that outlasts any single course.\n\nSchools, for their part, can nurture these qualities deliberately. Timetables that give teachers time to prepare together turn isolated good practice into shared craft. Mentorship for new teachers protects patience where it is most fragile: the first years in a classroom, when every silence feels like an emergency. Smaller classes, though expensive, reward patient teaching, because a teacher who knows every student's face can wait for each one.\n\nTo conclude, a good teacher combines mastery worn lightly with patience for productive struggle, and schools best serve such teaching through shared preparation, mentoring and manageable class sizes.",
        },
        listening: {
          script: "My best teacher never answered straight away. You would ask her something and she would say, 'What do you already know about it?' — and by the time you had talked yourself round, you had half-taught yourself the answer. She knew her subject cold, too: she once corrected her own example in the middle of a sentence and kept going.",
          task: "Which two qualities of a good teacher does the speaker illustrate, and what move does the teacher use instead of answering immediately?",
        },
        speaking: {
          task: "Answer 'What makes a good teacher?' out loud in forty seconds: choose two qualities and develop each with one sentence of explanation and one example.",
          frames: [
            "The first quality is…, which matters because…",
            "A concrete example of this is…",
            "Just as important is…, and you can see it whenever…",
            "Without it, …",
          ],
          checklist: [
            "Did you develop exactly two ideas rather than listing five?",
            "Did every idea get an example of its own?",
            "Did your final sentence answer the question directly?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Feature", "What it achieves"],
        rows: [
          ["Answer-as-thesis", "The introduction states both answers immediately, so the reader never waits to learn where the essay stands"],
          ["Two ideas, fully developed", "Each criterion and each method passes through the depth protocol — depth chosen over the six-item list on purpose"],
          ["One question, one body", "The interrogatives are answered in the order asked, one paragraph per question, so structure mirrors the prompt"],
          ["Concrete classroom scenes", "Every developed idea carries a pictureable moment — the mid-sentence repair, the deliberate silence — which is what support means here"],
          ["A compressed close", "The conclusion restates both answers in fresh words and adds nothing it cannot develop"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Count the question marks and classify each interrogative by its question word — what, how, why, should — before brainstorming anything."],
          ["While the clock runs", "Hold the line at two developed ideas per question; when a third appears, remember it was crossed out on purpose."],
          ["If you are stuck", "If an idea refuses to develop, swap it for one that survives all three developability questions rather than listing extra ideas to compensate."],
          ["Final minutes", "Check the introduction answers every question asked; an introduction that only names the topic has not finished the family's first job."],
        ],
      },
      {
        type: "summary",
        points: [
          "Direct questions are bare interrogatives: the entire topic lives in the questions, and each one is a deliverable.",
          "Classify by question word — what asks for criteria, how for methods, why for reasons, should for a verdict.",
          "Answer in the introduction: the answer-as-thesis pattern states your criteria and methods before development begins.",
          "Run every chosen idea through the depth protocol — name, explain, show, say why it matters — and cut surplus ideas on paper.",
          "Two developed ideas per question beat five named; the list answer is this family's signature failure.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "How many developed ideas does a 40-minute plan usually have room for per paragraph?", options: ["Two, taken all the way through explanation and example", "Five, named in a single sentence each", "As many as the word count allows"], correctIndex: 0, explanation: "Plans budget development, not mentions: two ideas with room to breathe is the ceiling a timed essay can genuinely feed.", from: "Planning" },
          { question: "Precise, less common vocabulary earns credit when it does what?", options: ["Impresses by length and rarity", "Matches the topic's natural collocations and is used with control", "Appears in every sentence"], correctIndex: 1, explanation: "The vocabulary criterion rewards precision and appropriateness, not decoration — 'subject knowledge worn lightly' beats any imported grand phrase.", from: "Vocabulary" },
          { question: "How many minutes should a Task 2 plan take before drafting?", options: ["One minute at most — planning is wasted time", "Around five to ten minutes — the plan is where the two-idea cut happens", "Twenty minutes — draft in the last third"], correctIndex: 1, explanation: "The time budget pays planning first because cuts on paper are cheap; cuts during drafting are expensive rewrites.", from: "Time management" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What is the answer-as-thesis pattern?",
        hints: ["Ask yourself where the reader first learns your actual answers."],
        options: [
          { id: "a", text: "The introduction restates the questions in fresh words and promises to discuss them." },
          { id: "b", text: "The introduction states your answers to every question asked, so the bodies develop what has already been claimed." },
          { id: "c", text: "The conclusion reveals the answers as a surprise ending." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The introduction states your answers to every question asked, so the bodies develop what has already been claimed.",
          "In the direct-question family the interrogatives wait for answers, and the introduction is where they first arrive: criteria named, methods named, and every subsequent paragraph earning them. The reader should never wonder where the essay stands.",
          "(a) is the announcement the pattern replaces — promising discussion is not answering; (c) withholds the essay's only deliverable until it can no longer be developed.",
        ),
        tags: ["awriting", "t2", "direct-questions"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Diagnose this paragraph.",
        hints: ["Count the ideas, then ask how many of them got explained, shown or weighed."],
        passageTitle: "A candidate's body paragraph",
        passage: "A good teacher is patient. A good teacher is also kind to the students in the class. Furthermore, a good teacher is strict when this is necessary and funny when it is not. In addition, a good teacher is organised and always prepares the lesson. Moreover, a good teacher is hardworking and stays late. Finally, a good teacher is fair to everyone in the school.",
        question: "What is the paragraph's central failure?",
        options: [
          { id: "a", text: "Grammatical range — the sentences are too simple." },
          { id: "b", text: "Depth — six ideas are named and none is explained, exemplified or connected to the question's stakes, so nothing counts as development." },
          { id: "c", text: "Task Response — the paragraph is off-topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Depth — six ideas are named and none is explained, exemplified or connected to the question's stakes, so nothing counts as development.",
          "This is the list answer in its pure form: every adjective may be true, but development is what the criterion rewards, and there is none — no mechanism, no scene, no why-it-matters. Two of these six ideas, taken through the depth protocol, would have scored more than all six listed.",
          "(a) mistakes the symptom for the disease — simple sentences are a choice here, not a limit; (c) is wrong on the evidence: every sentence is on the topic.",
        ),
        tags: ["awriting", "t2", "direct-questions", "depth"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Among a set of direct questions appears 'Should schools continue to teach handwriting?' What does this interrogative demand?",
        hints: [],
        options: [
          { id: "a", text: "A balanced tour of both sides, leaving the reader to decide." },
          { id: "b", text: "A verdict — yes, no, or yes-with-conditions — defended through every paragraph." },
          { id: "c", text: "A description of how handwriting is taught in different countries." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A verdict — yes, no, or yes-with-conditions — defended through every paragraph.",
          "The should-variant imports the verdict discipline into the family: the question word asks for a decision, and scripts that end on the fence read as unfinished. Conditions are welcome — they refine a verdict, never replace one.",
          "(a) confuses evaluation with refusal to evaluate; (c) answers a how-question that was never printed.",
        ),
        tags: ["awriting", "t2", "direct-questions", "verdict"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Complete the depth protocol's final move.",
        hints: [],
        sentence: "The depth protocol takes one idea through four moves: name it, explain it, show it, and say why it ____ .",
        acceptedAnswers: ["matters"],
        feedback: fb(
          "Matters.",
          "The fourth move connects the idea to the question's real stakes — what breaks, what is lost, what becomes impossible without it. It is the move that converts a well-supported claim into an argument, and the move the list answer never reaches.",
        ),
        tags: ["awriting", "t2", "direct-questions", "development"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Explain the list answer's failure.",
        question: "In one sentence: why does the list answer fail even when every listed idea is relevant?",
        acceptedAnswers: [
          "because relevance without development scores nothing — the criterion rewards extended, supported ideas, and a list extends none of them",
          "naming five ideas develops none of them, and the response criterion pays for extension and support, not coverage",
          "each listed item stays a bare claim with no explanation, example or stakes, so nothing reaches the depth the scoring rewards",
          "the grader counts developed ideas, and a list produces zero however many items it names",
        ],
        keywords: ["development", "extended", "list"],
        hints: [],
        feedback: fb(
          "Because relevance without development scores nothing — the criterion rewards extended, supported ideas, and a list extends none of them.",
          "The list answer optimises the wrong variable: it maximises the count of true statements and minimises the development each one receives, while the scoring runs entirely on development. Two ideas through the depth protocol beat six named in passing.",
          "Answers blaming word count or vocabulary have misread the failure — plenty of lists reach 250 words with varied adjectives.",
        ),
        tags: ["awriting", "t2", "direct-questions", "depth"],
      }),
    ],
    assignment: {
      title: "Answer a new pair of interrogatives",
      instructions:
        "Prompt: 'What qualities make someone a good neighbour? How can people build better relationships with those who live around them?' Write a full response: answer-as-thesis introduction, one body per question with two developed ideas each (run them through the depth protocol), and a compressed conclusion.",
      minWords: 240,
      maxWords: 330,
    },
    homework: [
      "Answer 'What makes a good traveller?' twice — once as a six-item list, once as two developed ideas — then decide which version you would rather grade, and write one sentence saying why.",
      "Take any direct-question prompt, brainstorm for three minutes, and practise the two-idea cut: score every answer for developability and physically cross out everything below the second.",
    ],
  },
];
