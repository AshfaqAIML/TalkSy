/**
 * GT Writing Chapter B — Task 2: the remaining essay families (W-L11).
 *
 * Three General Training masterclass lessons on the cause-and-effect,
 * two-part and direct-question families, taught through everyday subjects
 * (sleep, food delivery, shared homes) in the semi-formal register the GT
 * paper expects. Each lesson runs the ten mandated components, carries an
 * original worked mini-model (introduction plus one body paragraph) inside a
 * four-skills block with an analytical table, and rehearses the family's
 * signature habits on a second fresh prompt.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gwritingTask2LessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-t2-cause-effect",
    title: "GT Task 2 — Cause and effect",
    description:
      "The family of explanation on everyday shifts — why people sleep less, why the young give up driving: separating underlying causes from triggers, following effect chains past the first link, and delivering both halves in full.",
    objectives: [
      "separate an everyday shift's underlying causes from its visible triggers",
      "follow an effect chain past its first consequence to the links where daily life shows",
      "balance the essay's halves so causes and effects each receive real development",
      "explain everyday shifts in a semi-formal voice without inventing statistics",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Cause-and-effect prompts hand you a change in daily life — people sleeping less, young people abandoning the driving licence — and print two questions: why, and with what results. The essay that fails usually fails by inventory: seven causes named in single sentences, three effects waved at, no chain followed anywhere. The stronger essay does the opposite: two causes taken down to their roots, two effects chased two or three links along the chain, and the whole explanation delivered in the calm voice of someone describing how a machine works. This lesson teaches the root cause and the chain — the two habits that turn explanation into development.",
        beforeYouStart: [
          "You can split a two-question prompt into its separate halves before planning.",
          "You can explain a mechanism in two sentences without naming a statistic.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 2 — the everyday explanation essay, worth roughly twice the letter"],
          ["Task & question types", "Cause-and-effect prompts — 'Why is this happening? What effects does this have?' — on everyday shifts such as sleep, driving and shopping habits"],
          ["What is assessed", "Task Response: real causes developed with mechanisms, and effects followed into consequence, with both halves covered"],
          ["Why this matters", "An essay that answers only the why — or lists eight whys with no depth — has paid one contract and dropped the other, and Task Response prices the drop"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "The prompt prints a change in ordinary life and two questions about it: the reasons underneath and the results that follow. Note the change's edges before planning anything. A prompt about sleep across 'many countries' wants a general explanation, not a portrait of your own street; a comparison with 'a generation ago' builds a then-and-now frame your paragraphs should honour. Some variants ask only for causes, some only for effects, and some add a third question about whether the change is positive — count the question marks and read every one, because each is a separate contract with the examiner.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "Two deliverables, always paired: the cause half, which explains mechanisms — how the shift actually works in ordinary lives — and the effect half, which follows consequences into daily life. Both halves need real development, and the family's commonest fault is proportion: three fat paragraphs of causes and two thin lines of effects, or the reverse. Remember what is not a deliverable: a list of suspects is a brainstorm, not an explanation, and a paragraph about whether the change is good belongs to the essay only when a printed question asks for that judgement.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "Suspects, roots and chains",
        intro: "The plan sorts causes from triggers and follows effects past their first link.",
        steps: [
          {
            title: "Step 1: List the suspects, then sort causes from triggers",
            text: "Write every plausible reason in note form, then test each with one question: if this item vanished overnight, would the shift survive? The midnight notification is a trigger — switch it off and the expectation of being reachable finds another door — while the expectation itself is the cause. Prompts pay for causes; triggers earn, at most, a clause inside a cause's explanation.",
            examples: [
              {
                english: "Sleep-shift suspects sorted: CAUSES — the expectation of availability after hours, entertainment engineered to postpone rest, longer commutes eating the evening; TRIGGERS — the late notification, the autoplayed next episode.",
                note: "The sorting happens on paper, where it can be checked.",
              },
            ],
          },
          {
            title: "Step 2: Follow each effect two links down the chain",
            text: "Take the shift's first consequence and ask 'and then what?' of it, twice. Shorter sleep leads to drowsy mornings; drowsy mornings lead to a third coffee and an afternoon of half-finished tasks; that afternoon leads to an evening too tired for anything but one more episode — which feeds the first cause. Write the chains in arrows on the plan and keep the two most consequential links of each.",
            examples: [
              {
                english: "Chain in arrows: less sleep → drowsy commute → errors at work → hours spent repairing them → an evening with no energy left.",
                note: "The last link loops back to the cause — a loop worth naming in the essay.",
              },
            ],
          },
          {
            title: "Step 3: Choose two causes and two chains, then map the halves",
            text: "Keep the two causes you can each explain in two sentences, and the two chains whose consequences touch ordinary life most. Map the essay: introduction with a preview line; body one, the causes; body two, the effects; conclusion, the explanation compressed. The two bodies earn roughly equal budgets, and the plan should say so in numbers — causes 130 words, effects 130 — because drift is a drafting-time failure, not a planning-time one.",
            examples: [
              {
                english: "Map for the sleep prompt: intro (60) — two pressures named, effects previewed; causes (130) — availability, engineered delay; effects (130) — mornings and afternoons, tempers and roads; conclusion (40).",
                note: "Numbers on the plan are the halves' insurance policy.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "The family asks for explanation rather than a side, but choices still decide the essay's quality: which two causes (the ones you can trace to their roots, not the ones that sound biggest) and which two chains (the ones whose consequences are visible in ordinary life). Where a printed question asks whether the shift is positive or negative, that is a verdict deliverable — take it with a dial, in the introduction, exactly as the opinion family taught, and let the explanation paragraphs feed it rather than replace it.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "A cause paragraph runs: the cause named; the mechanism — how it produces the shift in ordinary lives; one everyday scene; and, once, a clause separating the cause from its trigger. An effect paragraph runs: the consequence named; the chain followed in two links, each link earning a sentence; one everyday scene at the second link, where the cost becomes visible. Explanation is the family's mode: no cheering, no lamenting, just the machine shown working — and the semi-formal register is what keeps the machine legible.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Everyday scale, honestly framed, always. A typical worker answering a colleague's message from bed; a student whose phone holds one more episode of something; a commuter whose third coffee is cancelled by a meeting she is too tired to follow. Frame inventions with 'a typical', 'in most households', 'if' — and never dress them as research: 'studies show that forty per cent…' is fabrication when no study exists, while 'many people' and 'in most households' are the honest frames the criterion rewards.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "Two or three sentences: the shift rephrased (never copied from the prompt); one sentence on how visible it is in ordinary life; then a mapping line that names both halves in miniature — the two causes and the field where the effects land. The mapping line is this family's introduction signature: 'the explanation lies in two pressures, and the costs arrive on roads, tempers and working memory.' An introduction that only names the topic has done half its work; an introduction that announces 'this essay will discuss' has done none of it.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "Body one delivers the causes: each cause claimed, mechanised and shown in a scene, with the trigger distinguished once in a subordinate clause. Body two delivers the effects: each chain named, followed link by link, and closed by a sentence that returns to the shift's overall direction — the loop, where the effect feeds the cause, is worth one such sentence. Vary the causation verbs across both halves: 'stems from', 'is fed by', 'translates into', 'surfaces as' — because 'because' four times in a paragraph is a drumbeat the ear punishes.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Compress the explanation: the two causes in one clause, the deepest consequence in another, and one closing sentence on what the trend means for an ordinary week. No new causes, no new chains, no verdict unless a printed question demanded one. Two sentences are enough — the family's conclusion is a summary of a machine, not a plea about it.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "'Cause' and 'effect' will drumbeat through the essay unless you build the alternatives first: driver, root, pressure and source on one side; consequence, result, cost and legacy on the other. Chain the subject by reference — 'the shift … this change … it' — so the topic moves without renaming, and let the scenes carry some of the vocabulary load: a paragraph that shows a drowsy commute does not need to say 'negative effect' at all.",
      },
      { type: "heading", text: "Worked example — roots, chains, loops" },
      {
        type: "example",
        title: "The family in everyday action",
        items: [
          {
            english: "PROMPT: 'In many countries, people sleep fewer hours than people did a generation ago. Why is this happening? What effects does this have?'",
            note: "Two printed questions, two contracts: roots and consequences.",
            domain: "exam",
          },
          {
            english: "CAUSE versus trigger, named: 'The late notification is a trigger; the cause is the expectation that people remain reachable after hours — silence the phone, and the expectation finds another door.'",
            note: "The paragraph is paid for the pressure underneath, not the spark on the surface.",
            domain: "exam",
          },
          {
            english: "EFFECT chain, followed: 'Shorter sleep makes the morning commute drowsier; the drowsy afternoon produces half-finished tasks; the evening, too tired for anything else, ends in one more episode — which shortens the next night.'",
            note: "The chain's last link feeds the first cause — a loop worth one closing sentence.",
            domain: "everyday",
          },
          {
            english: "HONEST example, everyday scale: 'A typical worker who once left work at the office gate now answers a colleague's message from bed, and the day's last quiet hour belongs to somebody else's deadline.'",
            note: "'A typical' is the honest frame — no invented survey anywhere in sight.",
            domain: "work",
          },
          {
            english: "MAPPING line from the introduction: 'The explanation lies in two pressures — work that follows people home, and entertainment engineered to postpone rest — and the costs surface on roads, in tempers and in working memory.'",
            note: "Both halves previewed in one sentence: the essay's map, made public.",
            domain: "exam",
          },
          {
            english: "STUDY ritual for the young-drivers prompt: list six suspects, cross out the two that are really triggers, keep the two you can explain in two sentences each.",
            note: "The sorting happens before drafting, not during it.",
            domain: "study",
          },
          {
            english: "REGISTER repair: 'People are just glued to their phones and that's it, really' becomes 'The phone's presence in the bedroom keeps the threshold of engagement one reach away.'",
            note: "Mechanism language replaces shrug language — same fact, essay voice.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "I listed seven causes in single sentences: phones, work, noise, light, stress, caffeine, children.",
            right: "Choose the two causes you can trace to their roots, and give each a mechanism and a scene.",
            reason: "A list of suspects is a brainstorm, not an explanation — the criterion pays for developed causes, and seven shallow ones develop nothing.",
          },
          {
            wrong: "My effects paragraph says 'this has many negative effects on health and society' and moves on.",
            right: "Follow one or two effect chains two links past the first consequence, in ordinary scenes.",
            reason: "Naming a field of effects pays none of the contract: development means showing the consequence working through daily life, link by link.",
          },
          {
            wrong: "The causes were easier to write, so I gave them three paragraphs and squeezed the effects into two closing lines.",
            right: "Budget both halves in the plan — roughly equal bodies — and hold the budget while drafting.",
            reason: "Both printed questions are contracts; an unbalanced essay answers one fully and starves the other, and the response criterion prices the missing half.",
          },
          {
            wrong: "It is an everyday topic, so I wrote 'a lot of', 'stuff', 'kind of' and contracted everything.",
            right: "Hold the semi-formal register: mechanisms described in precise, neutral, uncontracted language.",
            reason: "Explanation needs precision, and chat idiom blurs exactly the machinery the essay exists to show; the register slips are graded where the clarity was supposed to earn.",
          },
        ],
      },
      { type: "heading", text: "The model — an introduction and the causes body" },
      {
        type: "four-skills",
        title: "Four skills around one everyday explanation essay",
        reading: {
          text: "A commuter's week, in her own summary. Monday: answered emails until half past midnight. Tuesday: two hours of traffic after five hours of sleep. Wednesday: the third coffee cancelled by a meeting she was too tired to follow. Thursday: a mistake in an order that took an afternoon to repair. Friday: asleep by nine, awake at midnight, phone in hand. She calls it a normal week. Her mother, she adds, worked the same hours at a factory and slept like a log — the factory stayed behind when she left the gate.",
          task: "Read once, then trace one cause and one effect chain through the summary.",
        },
        writing: {
          task: "Task 2 (General Training). In many countries, people sleep fewer hours than people did a generation ago. Why is this happening? What effects does this have? For this lesson, write the introduction and the body paragraph delivering the causes (about 160 words).",
          guide: [
            "Introduction: the shift rephrased, its visibility in ordinary life, then the mapping line naming two causes and the field of effects.",
            "Causes paragraph: two causes, each with its mechanism and one everyday scene; distinguish the deeper cause from its trigger once, in a clause.",
            "Remember the effects paragraph is still owed: spend only two causes here, and leave the budget the plan promised it.",
          ],
          model: "Introduction: A generation ago, an ordinary bedtime was guarded by nothing more than a light switch; today the average night is shorter, lighter and easier to interrupt, and the change is visible in every commuter's coffee. Two pressures explain most of the shift — work that follows people home through their phones, and entertainment engineered to postpone rest — and the costs surface on roads, in tempers and in working memory. Causes paragraph: The deeper of the two pressures is the collapse of the boundary around work. A typical employee who once left the office at a gate now carries it in a pocket: a colleague's message arrives at half past ten, and answering it costs the day's last quiet hour, while the expectation of availability — the pressure itself — would find another door even if one notification were switched off. The second pressure is engineered delay. Streaming services load the next episode before the current one ends, and every app counts its night-time messages, so the decision to sleep is no longer a switch but a negotiation the sleeper usually loses. In most households both pressures work on the same person in the same hour, which is why the shift has been fast: the phone is at once the office door left open and the entertainment that keeps the light on.",
        },
        listening: {
          script: "Your cause paragraph reaches the roots, and the clause separating the notification from the expectation is exactly the cause-versus-trigger habit. Two notes before you draft the effects half. Keep the chain honest — drowsiness first, then error, then the afternoon spent repairing it — and watch the budget: your causes ran long, so the effects paragraph must not shrink to two lines, or the essay pays one contract twice and the other not at all.",
          task: "Listen once and note the two notes, and which half of the essay they protect.",
        },
        speaking: {
          task: "Explain an everyday shift you have watched — fewer letters, bigger phones, later dinners — in sixty seconds: one cause traced to its root, one effect followed two links down the chain.",
          frames: [
            "The real cause is not … but …",
            "Which means that…",
            "And that, in turn, …",
          ],
          checklist: [
            "Did you reach the underlying pressure?",
            "Did the chain pass its first link?",
            "Did the explanation stay uncontracted and neutral?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Both halves mapped", "The introduction previews two causes and the field of effects, so the essay's two contracts are visible before either is paid."],
          ["Roots, not sparks", "The paragraph names the trigger — the late message — and reaches past it to the pressure beneath: the expectation of availability."],
          ["Chain honesty", "The model's second pressure is shown as a negotiation the sleeper loses, a mechanism rather than a moral."],
          ["Everyday evidence", "A message at half past ten and an auto-loaded episode carry the whole explanation at the scale of one evening, honestly framed."],
          ["Register", "Mechanisms described in precise, uncontracted prose — the explanation voice, not the chat voice."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "List the suspects, cross out the ones that are really triggers, and keep two causes you can each explain in two sentences."],
          ["While the clock runs", "One mechanism per cause, one chain followed past its first link; check both halves' budgets as you go."],
          ["If you are stuck", "Ask 'and then what?' of your first effect until the chain reaches daily life — the second link is usually the best material."],
          ["Final minutes", "Confirm both printed questions have a developed half each, and replace any causation verb that has served three times."],
        ],
      },
      {
        type: "summary",
        points: [
          "The family prints two contracts: causes explained to their roots, and effects followed into consequence.",
          "Sort causes from triggers on paper: the underlying pressure earns the paragraph; the spark earns, at most, a clause.",
          "Follow effect chains past the first link — the second consequence is where daily life shows and the marks sit.",
          "Budget both halves in numbers on the plan: two developed causes and two developed chains beat seven shallow whys.",
          "Explain in the semi-formal voice: mechanisms want precision, and chat idiom blurs machinery.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "How many deliverables does a prompt with two printed questions carry?",
            options: ["Two — one per question, each with its own space", "One — a single general discussion", "None — the topic itself is the deliverable"],
            correctIndex: 0,
            explanation: "Question analysis counts contracts before planning: the why-half and the effects-half are separately owed and separately marked.",
            from: "Analysing question requirements",
          },
          {
            question: "What does a plan's line per paragraph fix?",
            options: ["The paragraph's job — which half or point it owns", "The paragraph's first and last words", "A minimum of five linkers"],
            correctIndex: 0,
            explanation: "Plans fix jobs: one paragraph owns roots, one owns consequences, and the budgets are visible before drafting begins.",
            from: "Planning",
          },
          {
            question: "Which opening sentence of an effect paragraph follows the chain?",
            options: ["The first consequence — the drowsy morning — feeds a second: an afternoon of half-finished work.", "There are many negative effects of sleeping less.", "Sleep is very important for everyone's health."],
            correctIndex: 0,
            explanation: "The first sentence names a consequence and promises its successor, which is what 'followed' means in this family; the others announce a field or a truism.",
            from: "Paragraph organisation",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What separates a cause from a trigger in this family?",
        hints: ["Ask what would happen if the visible spark disappeared."],
        options: [
          { id: "a", text: "A cause is the underlying pressure that would find another route; a trigger is the last spark on the surface." },
          { id: "b", text: "A cause is bigger than a trigger in the news coverage." },
          { id: "c", text: "A cause happens after the effect; a trigger before it." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A cause is the underlying pressure that would find another route; a trigger is the last spark on the surface.",
          "The trigger is the visible instant — the midnight notification — while the cause is the pressure beneath it, such as the expectation of being reachable. Essays in this family are paid for causes, and triggers earn at most a clause inside one cause's explanation.",
          "(b) confuses size with depth; (c) reverses the timeline of both words.",
        ),
        tags: ["gwriting", "t2", "cause-effect", "roots"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Audit this causes paragraph.",
        hints: ["Count the suspects, then count the explanations."],
        passageTitle: "A paragraph under inspection",
        passage: "There are many reasons why people sleep less today. Phones are one reason. Work is another reason. Stress is also a reason. Cities are noisy and bright, which is another reason. Children wake up early, and this is a further reason. Finally, streaming services make people stay up late, and this is the last reason.",
        question: "How does the paragraph fail the causes contract?",
        options: [
          { id: "a", text: "It names six suspects and explains none — no mechanism, no scene, no root beneath any of them." },
          { id: "b", text: "It confuses causes with effects throughout." },
          { id: "c", text: "It forgets to mention coffee." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It names six suspects and explains none — no mechanism, no scene, no root beneath any of them.",
          "This is a brainstorm wearing a paragraph's clothes: each sentence asserts a reason without showing how it shortens a night. The criterion rewards developed causes — two of them, each with a mechanism — and six named suspects develop nothing at all.",
          "(b) is not the fault: the items are causes, merely undeveloped; (c) treats one more suspect as the cure for a list of suspects.",
        ),
        tags: ["gwriting", "t2", "cause-effect", "development"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Chain habit. Complete the question you ask of every first consequence.",
        hints: ["One word — the question you ask again, and again, until daily life appears."],
        sentence: "Follow each effect at least two links down the chain by asking, of the first consequence, 'and then ___?'",
        acceptedAnswers: ["what"],
        feedback: fb(
          "'What' — the chain habit in three words.",
          "'And then what?' turns the first consequence into a question and its answer into the paragraph's best material: the drowsy morning is obvious, but the afternoon of half-finished tasks is where the shift's cost becomes visible and arguable.",
          "'Why' looks backward at causes, and 'who' changes the subject — the chain runs forward.",
        ),
        tags: ["gwriting", "t2", "cause-effect", "chains"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which introduction line maps the essay's halves correctly?",
        hints: [],
        options: [
          { id: "a", text: "This essay will discuss the interesting topic of sleep in the modern world." },
          { id: "b", text: "Two pressures explain the change — work that follows people home, and entertainment built to postpone rest — and the costs surface on roads, in tempers and in working memory." },
          { id: "c", text: "Sleep is one of the most important things in life, as everyone knows." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Two pressures explain the change — work that follows people home, and entertainment built to postpone rest — and the costs surface on roads, in tempers and in working memory.",
          "The mapping line names both causes in miniature and previews where the effects land, so the examiner sees both contracts before either is paid. It is a plan made public in one sentence — this family's strongest opening move.",
          "(a) announces a topic where a map is owed; (c) opens with a truism that develops nowhere.",
        ),
        tags: ["gwriting", "t2", "cause-effect", "introduction"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Explain why the second link of a chain beats the first.",
        hints: [],
        question: "In one sentence: why is the second link of an effect chain usually better material than the first?",
        acceptedAnswers: [
          "the first consequence is obvious and the second shows the change working through ordinary life",
          "the second link is where the shift's real cost appears, past the predictable first step",
          "the first consequence everyone can name; the second is development, and development is what scores",
          "the second link demonstrates the chain in action, which is the criterion's ground",
        ],
        keywords: ["second", "first", "development"],
        feedback: fb(
          "The first consequence is obvious and the second shows the change working through ordinary life.",
          "Everyone can name the drowsy morning; the afternoon of half-finished tasks is where the shift's cost becomes visible and arguable. Following past the first link is what turns a named effect into a developed one.",
          "Answers claiming the second link is merely longer have confused length with consequence.",
        ),
        tags: ["gwriting", "t2", "cause-effect", "chains"],
      }),
    ],
    homework: [
      "Take the young-drivers prompt — 'In some countries, fewer young people are learning to drive than in the past. Why is this happening? What effects does this have?' — list six suspects, cross out the triggers, and write the two-cause, two-chain map in four lines.",
      "Follow one effect of your own shorter-sleep week two links down the chain, in three sentences, using 'and then what?' at each step — then rewrite the three sentences without contractions.",
    ],
    assignment: {
      title: "Cause and effect, timed",
      instructions:
        "Write a full General Training Task 2 essay in 40 minutes: 'In many countries, people are choosing to watch films and programmes on their phones or laptops instead of on television. Why is this happening? What effects does this have on daily life?' Deliver both contracts: two causes traced to their roots and two effect chains followed past their first links, in the semi-formal voice throughout.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-t2-two-part",
    title: "GT Task 2 — Two-part questions",
    description:
      "Two different questions printed on one everyday topic — the reasons for a habit and the verdict on it: each question owning its body paragraph, the turn sentence between the halves, and the word budget kept symmetrical.",
    objectives: [
      "split a two-part prompt into its two different questions and give each its own body paragraph",
      "write the turn sentence that closes one half and opens the other",
      "keep the word budget symmetrical so both questions are paid in full",
      "answer a 'should' or 'is it positive' second part with a real verdict and its dial",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Two-part prompts put two different questions on one everyday subject: why has home food delivery grown so fast, and is the trend good for society? The questions differ in kind — one asks for reasons, the other for a verdict — and each expects its own body paragraph, its own answer, and a visible turn between them. The failure is drift: the first question's material leaks into the second half, or the second question — often the harder, verdict-shaped one — is squeezed into two closing lines. This lesson teaches the split, the turn and the budget: the three habits that keep both contracts paid in full.",
        beforeYouStart: [
          "You can count the printed questions in a prompt and say what kind of answer each asks for.",
          "You have written a body paragraph that develops one point with a mechanism and an everyday example.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 2 — the two-question essay on everyday subjects, worth roughly twice the letter"],
          ["Task & question types", "Two-part prompts: two different questions on one topic — commonly a 'why' or 'what' first and a 'should' or 'is it positive' second"],
          ["What is assessed", "Task Response: both questions answered in full, each with developed material of its own and a clear structure between them"],
          ["Why this matters", "Half-serving the second question is the family's common fault, and the shortfall lands directly on the response criterion"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "Read both questions and notice that they differ in kind, not just in wording. 'Why has this become popular?' asks for reasons; 'Do you think this is a positive development?' asks for a verdict; 'What should be done?' asks for proposals. Classify each question by its question word before planning: what asks for description or criteria, why for reasons, how for methods, and should or is-it-good for a judgement. The topic is shared by both questions; the deliverables are not — and treating two different questions as one fused discussion is this family's founding error.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "Two deliverables, one per question, each owing a body paragraph of developed material. The classic faults are three: answering question one twice; fusing both answers into a single undifferentiated discussion; and delivering the verdict as an afterthought — 'overall, I think it is positive' — where a paragraph was owed. The examiner's test is locatability: can they point at the paragraph that pays each printed question? If not, the structure has failed before the language is even read.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "Two labelled columns, one turn",
        intro: "The plan keeps the two questions' material apart from the first minute.",
        steps: [
          {
            title: "Step 1: Brainstorm in two labelled columns",
            text: "Label the left column with the first question and the right with the second, and fill them separately. The left column holds the habit's reasons; the right holds the verdict's evidence — the gains, the costs, and the side you currently lean toward. A reason is not an argument for or against, so nothing crosses from left to right: the columns' separation is the essay's separation, rehearsed on paper.",
            examples: [
              {
                english: "Delivery prompt, left column (why it grew): scarce evening hours, apps that remove friction, more single-person households. Right column (verdict evidence): hours returned to families, restaurants survive without diners — but the app takes a slice of every order and the street loses its reasons to go out.",
                note: "Left explains; right weighs. Nothing crosses.",
              },
            ],
          },
          {
            title: "Step 2: Choose the verdict before the map, not during drafting",
            text: "If the second question wants a stance, pick it now, on paper, with its dial — good narrowly, good overall, harmful in the main — and one reason that will carry its weight. A verdict chosen mid-drafting is a verdict the introduction never announced, and the essay's structure pays for the omission.",
            examples: [
              {
                english: "Verdict with its dial: 'good for society only narrowly — it buys back hours for the busy while quietly taxing the places where neighbourhood life happens.'",
                note: "'Only narrowly' is a commitment: the second body must defend exactly that breadth.",
              },
            ],
          },
          {
            title: "Step 3: Map the halves and set the budget in numbers",
            text: "Introduction (both questions answered in miniature); body one: question one, two reasons; the turn sentence; body two: question two, verdict plus development; conclusion: both answers compressed. Write word budgets beside the bodies — roughly equal — because asymmetry is the family's quietest failure: the easier question swallows the harder one's space, and the examiner reads the imbalance as a half-served contract.",
            examples: [
              {
                english: "Budget line for a 290-word essay: introduction 50, reasons body 120, verdict body 115, conclusion 45 — the halves within a sentence of each other.",
                note: "Numbers on the plan are the budget's teeth.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "The first half has no side to take; the second often does, and the choice is made from the right-hand column's evidence, not from enthusiasm for the topic. Set the verdict's dial honestly — 'a narrow yes' survives contact with counter-evidence better than a broad cheer — and hold the same dial from the introduction to the conclusion. Where the second question asks 'should…?' instead, the answer is a proposal with its feasibility noted, exactly as the problem-and-solution family taught.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "Half one develops reasons with mechanisms: how the habit works in ordinary lives, each reason shown in one scene, no verdict vocabulary anywhere. Half two develops the verdict with weighed evidence: the gains named fairly, the costs named fairly, and one sentence that says why the balance falls where it does. The discipline is non-recirculation: half two may assume half one's findings, but it may not re-argue them, or the second question's paragraph becomes the first question's second helping.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "One everyday example per half, honestly framed, doing different work in each. Half one's example shows a reason working: a parent between a late meeting and bedtime ordering dinner in four taps, the kitchen staying dark. Half two's example carries the verdict's stakes: the local café that once hosted the street's birthdays, now cooking for an app that takes a slice of every order. Same world, different jobs — the first explains the growth, the second prices it.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "Two or three sentences: the topic's rise in ordinary life; both questions rephrased lightly; and — where the second question is a verdict — your answer to it in the same breath. An introduction that answers both questions in miniature gives the essay its whole architecture in advance, and it protects you against the time squeeze: even if the clock cuts the conclusion short, the verdict has been on record since paragraph one.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "Body one serves question one only, and closes on the turn sentence — one line that finishes the first half's business and names the second's: 'Convenience explains the growth; whether convenience of this kind is good for us is a different question.' Body two serves question two only: the verdict stated, developed, and closed by a sentence that returns to its dial. Between the bodies, the turn is the hinge the examiner can see — cohesion made physical at the essay's midpoint.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Compress both answers: the essence of the first in a clause, the verdict in a sentence, and at most one closing implication for daily life. No new reasons and no new weighing — the conclusion reports the essay's two answers, it does not reopen either question. A reader who sees only the introduction and the conclusion should hold the same two answers in both views.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "The topic's noun runs through both halves, so vary it early: 'home delivery … the habit … this convenience'. Vary the question-serving phrases too — 'The growth has two engines' for half one, 'My own view of the trend' for half two — and never open both bodies with the same scaffold. The turn sentence itself earns fresh language, because it will be quoted in the examiner's mind as the essay's structural signature.",
      },
      { type: "heading", text: "Worked example — splits, turns, budgets" },
      {
        type: "example",
        title: "The family in everyday action",
        items: [
          {
            english: "PROMPT: 'In many countries, ordering restaurant food to your home has become common. Why has this grown so quickly? Do you think this trend is good for society?'",
            note: "Two different questions on one habit: reasons first, verdict second.",
            domain: "exam",
          },
          {
            english: "TURN sentence, doing hinge work: 'Convenience explains the growth; whether convenience of this kind is good for us is a different question.'",
            note: "One line closes half one and opens half two — the family's structural signature.",
            domain: "exam",
          },
          {
            english: "BUDGET kept honest: a learner writes 120 words on reasons, 118 on the verdict, and marks both totals on the plan before drafting.",
            note: "Symmetry is planned in numbers, not hoped for in prose.",
            domain: "study",
          },
          {
            english: "HALF ONE's example, taking no side: 'A parent between a late meeting and bedtime orders dinner in four taps, and the kitchen stays dark — the habit's engine in a single scene.'",
            note: "The scene shows the reason working; the verdict is nowhere in it.",
            domain: "work",
          },
          {
            english: "HALF TWO's example, carrying the stakes: 'The café that once hosted the street's birthdays now cooks for an app that takes a slice of every order, and the diners are elsewhere.'",
            note: "Same world as half one, but the example now prices the habit instead of explaining it.",
            domain: "community",
          },
          {
            english: "VERDICT with its dial: 'The trend is good for society only narrowly: it buys back hours for the busy while quietly taxing the places where neighbourhood life happens.'",
            note: "'Only narrowly' sets a breadth the second body must defend to its last sentence.",
            domain: "exam",
          },
          {
            english: "REGISTER repair: 'Delivery apps are just super handy, everyone uses them' becomes 'The apps answer a real daily need, which is why adoption has been rapid.'",
            note: "Handiness named precisely, in the essay's voice rather than the group chat's.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "I answered the why-question for three paragraphs and added 'overall I think it is positive' at the end.",
            right: "Give the second question its own body paragraph with developed evidence, and state the verdict in the introduction.",
            reason: "The second question is a printed contract; a closing clause pays a fraction of it, and the response criterion prices the shortfall at the structure's expense.",
          },
          {
            wrong: "Both halves discuss 'the reasons and whether it is good' together, in one flowing discussion.",
            right: "Split at the plan: body one owns question one, the turn sentence marks the change, body two owns question two.",
            reason: "The family's architecture is its answer: without the split, the examiner cannot locate where each contract was paid, and locatability is the criterion's test.",
          },
          {
            wrong: "My second body is half the length of my first, because the reasons were easier to write.",
            right: "Set word budgets in the plan — roughly equal bodies — and hold them while drafting.",
            reason: "Asymmetry reads as a half-served question; the words you spend are the clearest signal of which contract you took seriously.",
          },
          {
            wrong: "The verdict question felt big, so I wrote 'there are two sides, and both have points'.",
            right: "Take the verdict with its dial — good narrowly, good overall, harmful in the main — and defend that breadth.",
            reason: "A both-sides non-answer to a verdict question leaves the second deliverable undelivered, however fluent the surrounding prose.",
          },
        ],
      },
      { type: "heading", text: "The model — an introduction, the reasons body and the turn" },
      {
        type: "four-skills",
        title: "Four skills around one everyday two-part essay",
        reading: {
          text: "A street's decade, told by its receipts. In 2014, the row of shops held a grocer, a café, a laundry and two restaurants, and by eight each evening the restaurants were full of neighbours. In 2024, the same two restaurants cook most of the street's dinners, but the diners are elsewhere: an app takes a slice of every order, the café has become a flat, and the laundry collects clothes through a locker by the door. The restaurants survived; the street's reasons to leave the house have thinned.",
          task: "Read once, then sort the details into the two questions: why delivery grew, and who pays for it.",
        },
        writing: {
          task: "Task 2 (General Training). In many countries, ordering restaurant food to your home has become common. Why has this grown so quickly? Do you think this trend is good for society? For this lesson, write the introduction, the first body (reasons) and the turn sentence (about 170 words).",
          guide: [
            "Introduction: the habit's rise in one sentence, both questions rephrased, and your verdict — with its dial — in the same breath.",
            "Body one: two reasons for the growth, each with a mechanism and an everyday scene; take no side in this half.",
            "Close body one on the turn sentence, which finishes the explaining and names the judging that body two will do.",
          ],
          model: "Introduction: Within a single decade, the takeaway has moved from a Friday treat to a weekday default: a phone, four taps, and dinner arrives while the kitchen stays dark. The growth has been quick for reasons rooted in working hours and in the design of the apps themselves, and my verdict on the trend is a narrow yes — it buys back real hours for busy households, while quietly taxing the places where neighbourhood life happens. Body one: The first engine of growth is time pressure. In households where every adult works a full day, the hour between the last meeting and bedtime is the scarcest resource the family owns, and a delivery order converts that hour from cooking and washing-up into rest or homework supervision; the habit spreads because everyone who tries it gets the same hour back. The second engine is design. Saved cards, one-tap reorders and the memory of last week's order remove the small frictions that once made cooking the easier default, so the decision is made before it is felt. Convenience explains the growth; whether convenience of this kind is good for us is a different question — and it is the one the second half of this essay must answer.",
        },
        listening: {
          script: "Your split is clean: body one explains, body two will judge, and the turn sentence is genuinely doing hinge work — the reader cannot mistake where one job ends and the other begins. Two budget notes. Your reasons ran to about a hundred and forty words, so the verdict paragraph has earned the same; do not let it shrink. And the dial you set — a narrow yes — must survive to the conclusion unchanged, or the essay promises one verdict and delivers another.",
          task: "Listen once and note the two budget notes, and what must happen to the dial.",
        },
        speaking: {
          task: "Answer both printed questions aloud in sixty seconds — reasons first, the turn phrase, then your verdict with its dial.",
          frames: [
            "The growth has two engines: … and …",
            "Whether that is good is a different question.",
            "My verdict is a narrow yes, because…",
          ],
          checklist: [
            "Did each question get its own space, even in speech?",
            "Did the turn phrase arrive between the halves?",
            "Did the verdict keep its dial to the end?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Two contracts, located", "The introduction answers both questions in miniature, and body one visibly serves only the first — the examiner can point at where each deliverable lives."],
          ["The turn sentence", "'Convenience explains the growth; whether … is a different question' closes one half and opens the next — cohesion made visible at the hinge."],
          ["Budget signalled", "The reasons half is full, and the verdict half is set up with equal room; the plan's symmetry is on show in the structure."],
          ["Verdict with a dial", "'A narrow yes' commits the second half to defending an exact breadth of goodness — calibrated, not vague."],
          ["Register", "An everyday subject argued in an essay voice: 'four taps' named precisely, with no chat idiom anywhere in the half."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Label the two questions by kind — what, why, how, should — and set equal word budgets for their bodies in the plan."],
          ["While the clock runs", "Write body one for question one only; when the turn sentence appears, check that no reason has followed you into the second half."],
          ["If you are stuck", "Return to the second question's column — the verdict's evidence usually needs choosing, not more brainstorming."],
          ["Final minutes", "Confirm each printed question has a developed body to its name, and check the turn sentence survived drafting intact."],
        ],
      },
      {
        type: "summary",
        points: [
          "Two-part prompts print two different questions: classify each by its question word and give each its own body.",
          "The turn sentence is the family's hinge — it closes the first half and opens the second in one line.",
          "Budget the halves symmetrically in numbers; asymmetry reads as a half-served question.",
          "Where the second question asks for a verdict, take it with a dial and defend that breadth to the conclusion.",
          "Keep the halves' material separate: reasons are not arguments, and re-arguing half one inside half two pays nobody.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What does classifying a question by its question word tell you?",
            options: ["What kind of deliverable it demands — description, reasons, method or verdict", "How long the essay should be", "Which vocabulary the examiner expects"],
            correctIndex: 0,
            explanation: "'What' asks for description or criteria, 'why' for reasons, 'should' for a verdict — the classification fixes each half's job before the plan is drawn.",
            from: "Analysing question requirements",
          },
          {
            question: "Where does the turn sentence belong?",
            options: ["At the end of body one, opening the ground for body two", "In the middle of the introduction", "Nowhere — the essay should flow without hinges"],
            correctIndex: 0,
            explanation: "The turn is the hinge: it closes the first question's half and signals the second's different job, making the structure visible to the reader.",
            from: "Paragraph organisation",
          },
          {
            question: "What does a plan's word budget protect against?",
            options: ["The easier question swallowing the harder one's space", "Running out of paper", "Repeating the introduction's wording"],
            correctIndex: 0,
            explanation: "Budgets keep both printed contracts paid in proportion: without them, the comfortable half grows and the harder half — usually the verdict — is starved.",
            from: "Planning",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What makes a two-part prompt different from a cause-and-effect prompt?",
        hints: ["Look at the relationship between the two printed questions."],
        options: [
          { id: "a", text: "Its two questions are different in kind, not two halves of one explanation." },
          { id: "b", text: "It always prints three questions." },
          { id: "c", text: "It never asks for a verdict." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Its two questions are different in kind, not two halves of one explanation.",
          "Cause-and-effect prints a linked pair — why, and with what results — while the two-part family prints two different questions, often a reasons-question and a verdict-question, each owing its own body and its own material.",
          "(b) miscounts the family; (c) is false — the second part is very often a verdict.",
        ),
        tags: ["gwriting", "t2", "two-part", "families"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Find the unpaid contract.",
        hints: ["Ask where each printed question gets its developed answer."],
        passageTitle: "A paragraph under inspection",
        passage: "Delivery apps have grown quickly because phones are everywhere and people are busy. They are also cleverly designed, with saved cards and one-tap reorders. In addition, more people live alone now, and cooking for one is discouraging. Finally, restaurants like the extra orders. So, as we can see, there are many reasons for this trend, and it is certainly a topic with two sides.",
        question: "Which contract goes unpaid in this paragraph?",
        options: [
          { id: "a", text: "The second question — the verdict on the trend is replaced by a 'two sides' shrug, so the judging half never happens." },
          { id: "b", text: "The first question — the reasons are undeveloped." },
          { id: "c", text: "Neither — both questions are answered in full." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The second question — the verdict on the trend is replaced by a 'two sides' shrug, so the judging half never happens.",
          "The reasons half is rich, but the verdict question is closed with a phrase that refuses to answer while sounding balanced. The second printed question is a contract, and it has not been paid — the repair is a second body paragraph and a verdict with its dial.",
          "(b) misreads a full reasons list; (c) accepts a shrug as a verdict.",
        ),
        tags: ["gwriting", "t2", "two-part", "verdict"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "The turn sentence. Complete it.",
        hints: ["One noun — the thing the second half will take up."],
        sentence: "Convenience explains the growth; whether convenience of this kind is good for us is a different ___.",
        acceptedAnswers: ["question", "matter"],
        feedback: fb(
          "'Question' (or 'matter') — the hinge noun.",
          "The turn sentence ends the first half's business and names the second's; 'a different question' or 'a different matter' both mark the hinge the examiner can see at the essay's midpoint.",
          "'Reason' or 'story' would point the hinge at the wrong deliverable and blur the split the plan built.",
        ),
        tags: ["gwriting", "t2", "two-part", "turn"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which second body paragraph serves its question best?",
        hints: [],
        options: [
          { id: "a", text: "Another reason for delivery's growth is that restaurants earn more from it, which shows the trend is positive." },
          { id: "b", text: "The verdict is a narrow yes: the hours returned to busy households are real, but the app's slice of every order slowly thins the street's shared places, and only one of those losses can be measured in money." },
          { id: "c", text: "In conclusion, there are advantages and disadvantages to every trend, including this one." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The verdict is a narrow yes: the hours returned to busy households are real, but the app's slice of every order slowly thins the street's shared places, and only one of those losses can be measured in money.",
          "The paragraph states the verdict with its dial, weighs both sides in a sentence, and lands on the side it promised — judging work, not explaining work, and calibrated rather than vague.",
          "(a) smuggles a reason into the verdict's paragraph; (c) returns the examiner's question unanswered in the name of balance.",
        ),
        tags: ["gwriting", "t2", "two-part", "verdict"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Explain why the turn sentence must survive drafting.",
        hints: [],
        question: "In one sentence: why must the turn sentence survive drafting rather than staying in the plan?",
        acceptedAnswers: [
          "because it is the visible proof that the two halves are paid separately — without it the structure blurs into one discussion",
          "it marks where each contract is discharged, keeping the response auditable for the reader",
          "it signals the shift from explaining to judging, which locates the second deliverable in the structure",
          "without the hinge, the examiner cannot see where the verdict half begins",
        ],
        keywords: ["turn", "structure", "halves"],
        feedback: fb(
          "Because it is the visible proof that the two halves are paid separately — without it the structure blurs into one discussion.",
          "The turn is the family's architecture made audible: one line that closes question one's business and opens question two's. Lose it in drafting and the essay becomes a single flowing discussion in which neither contract is clearly located.",
          "Answers about style or word count have missed the structural job the turn performs.",
        ),
        tags: ["gwriting", "t2", "two-part", "turn"],
      }),
    ],
    homework: [
      "Write the two labelled columns — reasons and verdict evidence — for the community-garden prompt: 'In many towns, residents now share small garden plots where they grow vegetables. Why has this become popular? Should local councils provide more of them?' Then write the turn sentence before drafting anything.",
      "Take your last two-part essay and count the words in each body; if the halves differ by more than a quarter, note what the shorter half is missing and where the longer half leaked into it.",
    ],
    assignment: {
      title: "Two-part essay, timed",
      instructions:
        "Write a full General Training Task 2 essay in 40 minutes: 'In many countries, people are renting their homes for longer periods instead of buying. Why is this happening? Do you think this is a positive development?' Pay both contracts with symmetrical bodies, place a turn sentence between them, and give the second question a verdict with its dial held to the conclusion.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-t2-direct",
    title: "GT Task 2 — Direct questions",
    description:
      "Bare interrogatives on everyday matters — what makes a good housemate, why sharing a home is harder than it was: answering with a thesis instead of a list, and developing two chosen ideas in depth.",
    objectives: [
      "read bare interrogatives as the essay's whole topic and answer each one in the introduction",
      "convert a list-shaped question into a developed answer built on two chosen ideas",
      "run an idea through the depth moves — name it, explain it, show it, say why it matters",
      "keep the semi-formal register while writing about people and habits you know well",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Direct-question prompts print no statement to agree with and no camps to report — just naked interrogatives: what makes a good housemate? Why is sharing a home harder than it used to be? The questions are the whole task, which makes the family's failure the purest in writing: the list answer, six qualities named in six sentences, nothing explained, nothing shown, nothing mattering. The cure is the answer-as-thesis — your answers stated in the introduction — and the depth moves that turn each chosen idea into an argued paragraph. This lesson teaches both, on a subject you have lived: the people you have shared kitchens with, and the habits that made it work or fail.",
        beforeYouStart: [
          "You can turn a bare question into a one-sentence answer before planning.",
          "You can develop one idea with an explanation and an everyday scene.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 2 — the bare-question essay on everyday subjects, worth roughly twice the letter"],
          ["Task & question types", "Direct questions — 'What…?', 'Why…?', 'How…?' with no printed statement or camps — on everyday matters such as housemates, neighbours and habits"],
          ["What is assessed", "Task Response: each printed question answered directly, with two ideas each developed in depth rather than many named in passing"],
          ["Why this matters", "The list answer is the family's signature failure, and it caps development however many true statements it contains"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "The interrogatives are the task, so read them as contracts: classify each by its question word. 'What makes a good housemate?' asks for criteria — qualities, named and defended. 'Why is sharing harder than it was?' asks for reasons. 'How can people keep in touch?' asks for methods. Some prompts print one question, some print two; count them, because each is a deliverable owing its own answer. And mind the nouns: 'housemate' frames the essay around shared living, not friendship in general, and the strongest answers stay inside the frame the question words built.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "Each printed question is a deliverable, and the answer must be an argued selection, not an inventory. A question that says 'what makes' is really asking which qualities matter most — judgement, expressed as choice and defended with development. The hidden deliverable, in other words, is selectivity itself: two ideas chosen and taken into depth will always outscore six ideas named in single sentences, and the essay that understands this has understood the family.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "Widen, score, cut — then answer",
        intro: "The plan is generous at the start and ruthless by the end.",
        steps: [
          {
            title: "Step 1: Brainstorm widely, in single words",
            text: "Give the question three minutes of uninterrupted listing, one word or short phrase per item, no judging yet. For the housemate question: cleanliness, humour, noise, boundaries, paying on time, guests, communication, cooking, pets, borrowing without asking. The list's length is its value — every item you cut later was competing for a paragraph, and you want to see the whole field before choosing.",
            examples: [
              {
                english: "Housemate list, unfiltered: clean, funny, quiet, punctual with bills, talks things through, cooks, tolerates mess briefly, returns what is borrowed, no surprise guests, no pets without asking.",
                note: "Ten candidates for two places — exactly the ratio that makes the cut meaningful.",
              },
            ],
          },
          {
            title: "Step 2: Score each candidate for developability",
            text: "Test every item with three questions: can I explain how it works in shared life? Can I show it in one scene? Can I say what breaks without it? Items that fail any test are crossed out physically — 'funny', however true, rarely survives the scene test. Then check the survivors for range: two near-synonyms cover one facet, so keep ideas that explain different parts of the question.",
            examples: [
              {
                english: "Scoring the list: 'clean' and 'tidy' explain the same facet — one goes; 'punctual with bills' passes all three tests and stays; 'talks things through' adds a second, quieter facet and stays.",
                note: "The cut leaves two ideas that cover practical life and everyday talk.",
              },
            ],
          },
          {
            title: "Step 3: Write the answer-as-thesis",
            text: "Turn the survivors into one sentence per question, stated as your answer and ready for the introduction: 'A good housemate is defined by two qualities — reliability with money, and the habit of announcing plans — and sharing has grown harder because the lives under one roof no longer overlap.' The thesis is the list answer's opposite: chosen, committed, and developable.",
            examples: [
              {
                english: "Answer-as-thesis for a one-question prompt ('What makes a good neighbour?'): 'The two qualities that matter are small reliable help and a certain lightness about it — favours without ceremony.'",
                note: "The answer selects, so the paragraphs can develop.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "In this family the position is your selection: the two qualities, reasons or methods you will defend as the ones that matter. Choose by developability and by range — one practical idea and one human idea cover more ground than two practical ones — and choose ideas you can illustrate from life you have actually seen. The examiner never checks your selection against a right answer; they check whether the selection is argued, and argument begins with choosing.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "Run every chosen idea through the depth moves, in order: name it; explain the mechanism — how it works in shared life; show it in one everyday scene; and say why it matters — what breaks, what is lost, what becomes impossible without it. The fourth move is the one the list answer never reaches, and it is the move that converts a supported claim into an argument: reliability with money matters because the household's credit, its landlord relationship and its calm all rest on the same monthly transfer.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Shared-life scenes, honestly framed and everyday in scale: the rota on the fridge that nobody resents; the housemate who texts 'friends over tonight, all right?' and gives the kitchen's other users the evening's shape before it happens; the flat that never argues about bins because the sheet on the wall does the arguing. Frame inventions with 'a typical' and 'in most shared flats', keep named friends out of the prose, and let one scene per idea do the whole job.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "Rephrase the question or questions in fresh words, then answer them — plainly, in the introduction, with your selected ideas stated as your answer. This is the answer-as-thesis pattern, and it is the family's decisive habit: the bodies that follow develop claims already made, rather than circling a topic they promise to discuss. No announcement ('this essay will examine…'), no truism opening ('sharing is important in modern life'), no answer withheld for the conclusion.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "One question per body, or one idea per body where the prompt prints a single question; each paragraph runs the depth moves in order and closes by handing the argument forward. Vary the openings so the paragraphs' progress is visible — 'The first quality is practical', 'Communication matters more, and for a quieter reason' — because two paragraphs opening with the same scaffold advertise a list, whatever their interiors contain. Register stays semi-formal: 'a typical shared flat', not 'my mate Dave'.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Restate the selection in fresh words and add one closing implication — what a household gains, or a neighbourhood gains, by choosing on these criteria. No new qualities, no new scenes, no escalation. The conclusion of a direct-question essay is a hand-held answer, small and complete: the two ideas, the reason they matter, and the door closing quietly behind them.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "The question's nouns will echo through every paragraph unless you build their variants early: 'a good housemate' can become 'a person worth sharing a kitchen with', 'the right flatmate', 'someone to live above and beneath'. Vary the naming verbs — 'the first quality', 'what matters more', 'the rarer skill' — and chain references into the scenes, so the paragraph's people carry the idea forward instead of its label. The list answer repeats its question five times; the argued answer never needs to.",
      },
      { type: "heading", text: "Worked example — selections, depth, scenes" },
      {
        type: "example",
        title: "The family in everyday action",
        items: [
          {
            english: "PROMPT: 'What qualities make someone a good housemate? Why is sharing a home more difficult than it was in the past?'",
            note: "Two bare questions, two deliverables: criteria and reasons.",
            domain: "exam",
          },
          {
            english: "ANSWER-AS-THESIS: 'A good housemate is defined by two qualities — reliability with money, and the habit of announcing plans — and sharing has grown harder because the lives under one roof no longer overlap.'",
            note: "Both questions answered in one sentence; the bodies now have claims to develop.",
            domain: "exam",
          },
          {
            english: "DEPTH moves, run on one idea: 'Reliability with money is the floor of shared life: rent that arrives without a reminder keeps the household's relationship with its landlord calm, and calm is the raw material of every other housemate virtue.'",
            note: "Named, explained, and half-shown — the why-it-matters move lands in the final clause.",
            domain: "everyday",
          },
          {
            english: "LIST answer caught in the plan: six qualities — clean, funny, quiet, kind, organised, punctual — crossed down to two after each was scored for explanation, scene and stakes.",
            note: "The cut happens on paper, so six shallow sentences never reach the page.",
            domain: "study",
          },
          {
            english: "HONEST scene, everyday scale: 'The housemate who texts \"friends over tonight, all right?\" gives the kitchen's other users the evening's shape before it happens, and the asking costs nothing.'",
            note: "One scene shows the mechanism: information converts friction into planning.",
            domain: "community",
          },
          {
            english: "WHY-question developed as a mechanism: 'Sharing has grown harder because one roof now hosts three schedules, three budgets and three sets of expectations — where a generation ago it hosted one of each.'",
            note: "The reason is a machine, not a mood: lives diverged, and the flat did not grow.",
            domain: "work",
          },
          {
            english: "REGISTER repair: 'Someone who isn't annoying and pays their bit on time' becomes 'A housemate whose share arrives unprompted and whose plans arrive announced.'",
            note: "Precision gives the same idea its essay weight.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "A good housemate is clean. A good housemate is also kind. A good housemate is punctual. Furthermore, a good housemate is quiet.",
            right: "Choose the two qualities you can take through all four depth moves, and defend them as the ones that matter most.",
            reason: "The list answer maximises true statements and minimises development, and the criterion pays only for development — two ideas argued beat six named.",
          },
          {
            wrong: "This essay will discuss the important question of what makes a good housemate.",
            right: "Answer the question in the introduction: name your two qualities, stated as your criteria.",
            reason: "The announcement describes an essay-shaped object and answers nothing; the interrogative waits for a response, and the introduction is where it must arrive.",
          },
          {
            wrong: "I know my housemates personally, so I wrote 'my mate Dave is so messy, it drives me mad'.",
            right: "Keep the semi-formal voice and the typical frame: 'a typical shared flat', 'in most households' — lived experience, essay register.",
            reason: "Named friends and chat idiom pull the prose below the register the essay is marked at; everyday material is welcome, casual writing is not.",
          },
          {
            wrong: "My two chosen qualities are cleanliness and tidiness.",
            right: "Choose two ideas that cover different ground — one about practical reliability, one about communication.",
            reason: "Near-synonyms halve the essay's coverage while appearing to double it; the selection is judged on range as well as depth.",
          },
        ],
      },
      { type: "heading", text: "The model — an answer-as-thesis introduction and one depth paragraph" },
      {
        type: "four-skills",
        title: "Four skills around one everyday direct-question essay",
        reading: {
          text: "Two flats, two systems. In the first, a rota on the fridge lists every chore with a name beside it, and nobody has argued about the bins since the sheet appeared; the person who forgets a week simply swaps a task. In the second, each housemate assumed someone else would buy the milk, the shared account ran dry twice, and by spring the kitchen held two of everything, labelled. The first flat's tenants stayed together three more years; the second dissolved over a holiday neither had told the other about.",
          task: "Read once, then name the two qualities this passage actually argues for.",
        },
        writing: {
          task: "Task 2 (General Training). What qualities make someone a good housemate? Why is sharing a home more difficult than it was in the past? For this lesson, write the introduction and the first body paragraph (about 150 words), with the answer-as-thesis stated in the introduction.",
          guide: [
            "Introduction: both questions rephrased, then both answered in one or two sentences — your two qualities and your reason, stated plainly.",
            "Body paragraph: the first quality through the depth moves — name, explain, show in a scene, say why it matters.",
            "Everyday material in the essay's register: 'a typical shared flat' rather than any named friend.",
          ],
          model: "Introduction: Sharing a home is the closest most people come to a daily negotiation, and the difference between a calm household and a cold one usually comes down to a handful of habits. Two qualities decide almost everything in a good housemate — reliability with money, and the habit of announcing plans — and sharing feels harder than it once did because the lives under one roof no longer overlap the way they used to. Body paragraph: Reliability with money is the floor on which every other housemate virtue stands. Rent that arrives unprompted keeps the household's relationship with its landlord calm, and calm is the raw material of shared life: the flat that never argues about the transfer can afford the occasional argument about the bins. In a typical shared flat, one missed payment is felt by everyone at once, because the landlord writes to every name on the lease, so the unreliable housemate spends other people's credit along with his own. A housemate whose share simply arrives, month after month, is trusted without ever asking to be — and trust, once it is the default rather than the achievement, is what leaves room for friendship.",
        },
        listening: {
          script: "Your introduction answers both printed questions, which is this family's hardest habit, and you have it. In the body, the depth moves are all present, and the sentence about the lease is the paragraph's best: it shows why one person's slip becomes three people's problem. One repair: 'in my experience of' leans personal, and the typical frame — 'a typical shared flat' — is the register this essay wants. Make that swap and the paragraph is fully in voice.",
          task: "Listen once and note the repair, and the sentence the reviewer calls the paragraph's best.",
        },
        speaking: {
          task: "Answer 'What makes a good neighbour?' aloud in forty-five seconds — two ideas only, each with its scene and its why-it-matters.",
          frames: [
            "The two qualities that decide it are…",
            "What that looks like in practice is…",
            "Without it, what breaks is…",
          ],
          checklist: [
            "Did you stop at two ideas?",
            "Did each idea reach its scene?",
            "Did the why-it-matters move land?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Answer-as-thesis", "The introduction answers both printed questions in two sentences, so the bodies develop claims already made rather than promises to discuss."],
          ["Depth over list", "One quality runs through name, mechanism, scene and stakes — four moves, one paragraph, and no neighbours named in passing."],
          ["Everyday precision", "The lease mechanism and the monthly transfer are exactly the scale the criterion rewards, framed as typical rather than personal."],
          ["Register", "Lived material in an essay voice: no named friends, no contractions, no chat idiom anywhere in the paragraph."],
          ["Cohesion", "The final sentence converts the paragraph's argument into the essay's larger claim — trust as the room where friendship fits."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Classify each interrogative by its question word, brainstorm in single words, and cut to two ideas per question on paper."],
          ["While the clock runs", "Hold the line at two ideas per question; when a third appears, remember it was crossed out on purpose."],
          ["If you are stuck", "Run the stuck idea through the four depth moves aloud — if it cannot reach a scene, swap it for one that can."],
          ["Final minutes", "Check the introduction answers every question printed, and sweep for named friends and chat register."],
        ],
      },
      {
        type: "summary",
        points: [
          "Direct questions print no statement and no camps: the interrogatives are the whole task, and each one is a deliverable.",
          "Answer in the introduction — the answer-as-thesis states your criteria or reasons before development begins.",
          "The list is the family's signature failure: two ideas through the depth moves beat six named in single sentences.",
          "Run every idea through name, explain, show and why-it-matters — and choose two ideas that cover different ground.",
          "Everyday material in an essay register: 'a typical shared flat' rather than any named friend.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What does a 'what' question ask the essay to deliver?",
            options: ["Criteria — the qualities you judge the subject by, chosen and defended", "A summary of other people's views", "A history of the subject"],
            correctIndex: 0,
            explanation: "'What makes…' invites a selection: the two criteria that matter most, argued in depth rather than inventoried in passing.",
            from: "Analysing question requirements",
          },
          {
            question: "How many developed ideas fit in a 40-minute paragraph?",
            options: ["One or two, taken through explanation and a scene", "Six, named in single sentences", "As many as the word count permits"],
            correctIndex: 0,
            explanation: "Depth consumes words: a paragraph can genuinely feed one idea through all its moves, or two more briefly — never a list.",
            from: "Planning",
          },
          {
            question: "Which body-paragraph opening serves cohesion best?",
            options: ["One that names the idea and its place in the argument's progress", "One that opens with 'Furthermore' whatever the logic", "One that repeats the introduction's wording"],
            correctIndex: 0,
            explanation: "Openings earn cohesion when they track the argument's real movement — 'the first quality', 'communication matters more, and for a quieter reason' — not when a linker decorates regardless of logic.",
            from: "Coherence",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What does the answer-as-thesis habit require?",
        hints: ["Ask where the reader first learns your actual answers."],
        options: [
          { id: "a", text: "The introduction restates the questions in fresh words and promises to discuss them." },
          { id: "b", text: "The introduction states your actual answers — criteria or reasons — so the bodies develop what has been claimed." },
          { id: "c", text: "The conclusion reveals the answers as a surprise." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The introduction states your actual answers — criteria or reasons — so the bodies develop what has been claimed.",
          "The interrogatives wait for answers, and the introduction is where they first arrive: criteria named, reasons named, and every later paragraph earning them. The reader should never wonder where the essay stands.",
          "(a) is the announcement habit the pattern replaces — promising discussion is not answering; (c) withholds the only deliverable until it can no longer be developed.",
        ),
        tags: ["gwriting", "t2", "direct-questions", "answer-as-thesis"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Diagnose this paragraph.",
        hints: ["Count the qualities, then count the explanations."],
        passageTitle: "A candidate's paragraph",
        passage: "A good housemate is clean and tidy. A good housemate is also friendly and funny. Moreover, a good housemate is quiet at night. In addition, a good housemate pays the rent on time. Furthermore, a good housemate does not take your food. Finally, a good housemate is helpful with problems.",
        question: "What is the paragraph's central failure?",
        options: [
          { id: "a", text: "Grammar — the sentences are too short for the test." },
          { id: "b", text: "Depth — six qualities are named and none is explained, shown or weighed, so nothing counts as development." },
          { id: "c", text: "Task Response — housemates are not the printed topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Depth — six qualities are named and none is explained, shown or weighed, so nothing counts as development.",
          "This is the list answer in its natural habitat: every quality may be true, but development is the criterion's currency and none has been paid. One of these qualities through the four depth moves would outscore all six listed in a line.",
          "(a) mistakes a symptom for the disease; (c) contradicts the passage, which never leaves the topic.",
        ),
        tags: ["gwriting", "t2", "direct-questions", "depth"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "The depth protocol. Complete its final move.",
        hints: ["One word — what the fourth move argues about the idea."],
        sentence: "The depth protocol takes one idea through four moves: name it, explain it, show it, and say why it ___.",
        acceptedAnswers: ["matters"],
        feedback: fb(
          "'Matters' — the move that names the stakes.",
          "The fourth move converts a supported claim into an argument: what breaks, what is lost, what becomes impossible without the quality. It is the move the list answer never reaches, and the reason two ideas through the protocol beat six named.",
          "'Exists' or 'works' states nothing at stake, and stakes are what the move exists to name.",
        ),
        tags: ["gwriting", "t2", "direct-questions", "depth"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which pair of chosen qualities shows the best selection judgement?",
        hints: [],
        options: [
          { id: "a", text: "Cleanliness and tidiness." },
          { id: "b", text: "Reliability with money, and the habit of announcing plans." },
          { id: "c", text: "Being nice and being kind." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Reliability with money, and the habit of announcing plans.",
          "The pair covers different ground — practical reliability and everyday communication — so two paragraphs cover two facets of shared life. Near-synonyms like the other pairs halve the essay's coverage while appearing to double it.",
          "(a) is one idea wearing two labels; (c) is a single sentiment split in half, and the second paragraph would repeat the first.",
        ),
        tags: ["gwriting", "t2", "direct-questions", "selection"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Explain the list answer's failure.",
        hints: [],
        question: "In one sentence: why does the list answer fail even when every listed quality is true?",
        acceptedAnswers: [
          "because the criterion pays for developed ideas, and a list develops none of them",
          "truth is not the currency — extension, support and stakes are, and a list offers none",
          "each item stays a bare assertion with no mechanism, scene or stakes, so nothing scores as development",
          "six named qualities produce zero developed ones, and the response mark runs on development",
        ],
        keywords: ["development", "list", "supported"],
        feedback: fb(
          "Because the criterion pays for developed ideas, and a list develops none of them.",
          "The list optimises the wrong variable: it maximises the count of true statements and minimises the development each receives, while the scoring runs entirely on development. Two ideas through the depth moves beat six named in passing.",
          "Answers blaming vocabulary or length have misread the failure — lists can be long and various and still develop nothing.",
        ),
        tags: ["gwriting", "t2", "direct-questions", "depth"],
      }),
    ],
    homework: [
      "Answer 'What makes a good shopping trip?' twice — once as a six-item list, once as two developed ideas through the depth moves — then write one sentence on which version you would rather submit, and why.",
      "Take any everyday direct question — 'Why do people queue for coffee before work?' — brainstorm ten single-word answers, and physically cross out everything below the second most developable.",
    ],
    assignment: {
      title: "Direct questions, timed",
      instructions:
        "Write a full General Training Task 2 essay in 40 minutes: 'What makes a local market worth keeping? Why do many people still do their weekly shopping at supermarkets?' Answer both questions in your introduction, develop two ideas per question through the depth moves, and keep the everyday material in the semi-formal voice throughout.",
      minWords: 240,
      maxWords: 330,
    },
  },
];
