/**
 * Chapter 4 — Assessment and model answers (PROMPT 46, Part D).
 *
 * Two lessons that close the Task 2 sequence: how examiners score a script
 * (the four criteria, their combination, and the consequences of length and
 * relevance) and how to study model answers at different estimated levels
 * without ever memorising them. All band references are educational
 * estimates paraphrased from the publicly known approach — nothing here
 * quotes or claims to quote official documents.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const awritingAssessmentLessons: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-criteria",
    title: "How examiners score your writing",
    description:
      "The four judges of IELTS writing — Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy — what each rewards, how they combine into one band, and what length and relevance really cost.",
    objectives: [
      "name the four criteria and say what each one rewards",
      "describe, in your own words, what a band 5, 6 and 7 estimate typically looks like on each criterion",
      "explain how the four criteria combine, and why Task 2 counts roughly twice",
      "audit a script for length, topic fit, and a position that never wavers",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Your writing is marked by four judges at once, and none of them reads the way a friend would. One asks whether you answered the question actually printed; one asks whether the argument's shape is visible on the page; two ask what your sentences are built from, in words and in structure. This lesson paraphrases the publicly known approach to each criterion in plain words — it never quotes official documents — shows how the four combine into a single band, and turns the whole scheme into a checklist you can aim at while drafting. Every band figure used anywhere in this academy is a teaching estimate, never a promise about your real test.",
        beforeYouStart: [
          "You have written at least one timed Task 2 response.",
          "You know that Task 2 asks for at least 250 words in about 40 minutes.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the scoring scheme behind both tasks, Academic and General Training alike"],
          ["Task & question types", "Every Task 1 report and Task 2 essay you write is scored on these four criteria"],
          ["What is assessed", "Response to the task, organisation and linking, vocabulary, and grammatical range with accuracy"],
          ["Why this matters", "You cannot draft strategically toward judges you cannot name — knowing the criteria converts effort into marks"],
        ],
      },
      { type: "heading", text: "The four judges and their names" },
      {
        type: "table",
        title: "The four criteria in plain words",
        headers: ["Criterion", "What it is asking about"],
        rows: [
          ["Task Achievement / Task Response", "Task 1 reports are judged on Achievement, Task 2 essays on Response: did the script do the whole job printed — every part answered, ideas developed, a position present where one is owed"],
          ["Coherence and Cohesion", "Whether the argument's architecture is visible: paragraphing with jobs, logical progression, and linking devices that mark real relations between ideas"],
          ["Lexical Resource", "The word store behind the script: range, precision, natural collocations, and errors of word choice or formation that strain understanding"],
          ["Grammatical Range and Accuracy", "The sentence machinery: variety of structures attempted, how many sentences are error-free, and whether the remaining slips ever block meaning"],
        ],
      },
      { type: "heading", text: "The ladder at a glance" },
      {
        type: "table",
        title: "What climbing looks like (educational estimates)",
        headers: ["Level (estimate)", "What the script typically shows"],
        rows: [
          ["Band 5 estimate", "Response: parts of the question missed, ideas thin, position hard to find. Cohesion: arrangement present but repetitive, paragraphing weak, linkers overused or misfitted. Lexis: limited range, heavy repetition, word-choice errors that strain the reader. Grammar: little variety, frequent slips that make the reading hard work"],
          ["Band 6 estimate", "Response: all parts touched, some unevenly; position visible but not always steady; ideas relevant with patchy development. Cohesion: generally logical, devices present though sometimes mechanical, paragraphing mostly sensible. Lexis: adequate range, attempts at less common words with some slips. Grammar: a real mix of simple and complex forms; errors occur but meaning survives"],
          ["Band 7 estimate", "Response: every part answered well; position clear from the introduction and unchanged at the end; main ideas extended and supported. Cohesion: logical sequencing, a range of devices used flexibly rather than mechanically. Lexis: wider range with some precision and collocational feel; rare slips only. Grammar: varied complex structures, most sentences error-free, remaining errors rarely obscure meaning"],
        ],
      },
      { type: "heading", text: "How the four become one band" },
      {
        type: "text",
        text: "Each criterion is scored separately for each task, and the commonly described arithmetic is straightforward: the four numbers combine into the task's band — broadly an average, settled to the nearest half band — and the overall writing band then weighs Task 2 at roughly twice Task 1. The weighting carries a lesson: a Task 2 estimated at 7 beside a Task 1 estimated at 6 tends to land the overall writing result around 6.5, while the reverse pairing lands lower. When time runs short, the arithmetic itself tells you which task to protect — the essay's double weight makes it the investment.",
      },
      { type: "heading", text: "'Addresses all parts' in practice" },
      {
        type: "text",
        text: "The phrase that anchors the response criterion means exactly what it says: every question the prompt printed receives real attention, not a courtesy sentence. In practice the examiner scans for each printed question and asks where it was answered. A two-question prompt whose second answer is one closing line has been half-served; an essay question asking for your view has been sidestepped if the script only reports the views of others. The test is locatability — can the reader point at the paragraph that pays each debt? If any printed question has no paragraph to its name, coverage has failed, whatever the word count.",
      },
      { type: "heading", text: "'Clear position throughout' in practice" },
      {
        type: "text",
        text: "Where the prompt asks for a stance, the criterion wants one that arrives early and never contradicts itself. In practice this is three habits: the introduction states the position in words that can be quoted; every body paragraph advances that same position, conceding costs honestly without surrendering the verdict; and the conclusion repeats the stance unchanged. Scripts lose this not by arguing wrongly but by drifting — a 'largely positive' introduction followed by a body so balanced the reader cannot tell which side the writer favours. When in doubt, underline your own thesis after drafting and check every paragraph against it.",
      },
      { type: "heading", text: "Length and topic: the two penalties" },
      {
        type: "text",
        text: "Two scoring facts sit outside the criteria's fine print but bite through them. A script under the printed minimum — 150 words for Task 1, 250 for Task 2 — is penalised under the response criterion, and it also shrinks the evidence the other three judges have to work with. And material written off the question, however polished, cannot earn response credit: an examiner scores what the script contributes to the question asked, not what it contributes to the general topic. Both penalties have the same moral — the response criterion is fed by answering the printed question at adequate length, and nothing substitutes for it.",
      },
      { type: "heading", text: "Reading your own script like an examiner" },
      {
        type: "steps",
        title: "The four-pass self-assessment",
        steps: [
          { title: "Pass 1: The response judge", text: "Reread only the prompt, then hunt your script for each printed question's answer. Tick each one you can locate in a specific paragraph, and mark any question that never got real attention.", examples: [{ english: "Prompt printed 'Why?' and 'Positive or negative?' — the why has a body to itself; the verdict appears in the introduction but fades in body two. Marked: position drift.", note: "Locatability is the audit: no paragraph, no credit." }] },
          { title: "Pass 2: The architecture judge", text: "Read only your topic sentences in order — if you cannot retell the essay's plan from them alone, the cohesion judge is seeing what you are. Then scan the linkers for one-trick repetition.", examples: [{ english: "Four topic sentences retold: trend, reasons, verdict, summary — the plan is visible. But three linkers say 'Moreover' where the logic is not addition.", note: "Architecture is judged from the skeleton, not the wallpaper." }] },
          { title: "Pass 3: The word judge", text: "Circle your two most precise word choices and your two riskiest. Precision earns; near-misses ('make a stringent rule about contamination' for 'strict rules on pollution') cost more than plain words ever do.", examples: [{ english: "Precise: 'the morning queue shortens'. Risky: 'ecologic transport' for 'environmentally friendly transport'.", note: "The lexis judge rewards hits, not attempts that miss." }] },
          { title: "Pass 4: The machinery judge", text: "Count error-free sentences in one body paragraph and name the structure types you attempted. A paragraph of five clean but identical simple sentences is accurate and still capped — range is half this judge's name.", examples: [{ english: "Six sentences: four complex and clean, one conditional with a slipped article, one simple closer — a solid mix worth repeating deliberately.", note: "Variety attempted mostly successfully is the target, not perfection." }] },
        ],
      },
      { type: "heading", text: "Worked example — one script, four verdicts" },
      {
        type: "example",
        title: "The judges on real evidence",
        items: [
          { english: "A script answers the causes half brilliantly and never touches the effects question: the response judge caps it in band-5-to-6 territory whatever the prose achieves, because one printed question went unanswered.", note: "The response criterion is coverage first; elegance second.", domain: "exam" },
          { english: "A response weighs both sides of an evaluation and refuses to choose: the reader can retell the debate but cannot retell the writer's stance — and the criterion asks for a stance the reader can point at.", note: "Drift, not error, is how positions are lost.", domain: "exam" },
          { english: "One script opens three consecutive paragraphs with the same additive linker: devices present, logic unvaried — the architecture judge pays for range and placement, not frequency.", note: "A linker that ignores the logical relation is decoration wearing a tool's badge.", domain: "exam" },
          { english: "'The government should make stringent rules about contamination' — ambitious words aimed at the wrong collocations; 'strict rules' and 'pollution' would have scored higher by being right.", note: "The word judge rewards precision; near-misses cost twice.", domain: "exam" },
          { english: "A script of short, clean, identical sentences caps itself without a single error: accuracy is half the machinery judge's name, and range is the other half.", note: "Playing safe is a strategy for one judge out of four.", domain: "exam" },
          { english: "Study ritual: after each practice essay, one line per criterion with a quoted sentence as evidence — no quote, no estimate. In a month the quotes become a personal error grammar.", note: "Self-assessment with evidence turns abstract criteria into data.", domain: "study" },
          { english: "A workplace review with four named sections — delivery, accuracy, teamwork, ownership — tells you exactly where to grow; unnamed feedback teaches nothing. The writing criteria work identically.", note: "Named judges are what make improvement targetable.", domain: "work" },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "If I fill the script with impressive long words, the vocabulary judge must reward me.", right: "Aim for precision instead: the right word in its natural collocation, reached with control — ambitious slips read as risk, not mastery.", reason: "Lexical range is scored alongside accuracy of use; decoration deployed inaccurately lowers the very criterion it was meant to lift." },
          { wrong: "The top bands must demand perfect grammar, so I will write only short simple sentences to stay safe.", right: "Attempt variety and keep most sentences error-free — the higher bands reward range with control, not timeliness of error-avoidance.", reason: "A script can be entirely accurate and still capped, because range is scored as a partner of accuracy rather than an enemy of it." },
          { wrong: "My vocabulary and structures are strong, so the answer's content can be brief.", right: "Feed the response judge first: complete coverage of the printed question at full length, because polish cannot transfer across criteria.", reason: "Each criterion is judged on its own terms — a beautiful half-answer fails the one judge that coverage feeds, and no other judge can compensate." },
        ],
      },
      { type: "heading", text: "Model answer across the four skills" },
      {
        type: "four-skills",
        title: "Judging, worked four ways",
        reading: {
          text: "The candidate was asked whether cities should charge cars entering their centres. The response's second paragraph is a loving history of urban cycling — fluent, accurate and entirely beside the question. The third paragraph begins the weighing the prompt requested, but the test ends before the verdict arrives.",
          task: "Name the criterion this script starves most, and say which of its strengths the other judges can still reward.",
        },
        writing: {
          task: "Turn judge: take your most recent practice essay and assess it in one paragraph as if marking for the four criteria — an estimated band for each, every estimate backed by a sentence quoted from your own script, and one action for your next draft.",
          guide: [
            "Open with the response judge: did every printed question get a paragraph, and is your position quotable from the introduction?",
            "Move to architecture: retell your plan from the topic sentences alone, then note any linker that repeats without logical reason.",
            "Then the word judge: name your two most precise choices and your two riskiest, and check the collocations.",
            "Close with the machinery judge — one paragraph's count of error-free sentences — and a single concrete action for next time.",
            "Keep every number hedged as an estimate: these are teaching judgements, not predictions.",
          ],
          model: "Reading my response as a marker, I would estimate Task Response around 6: both printed questions are addressed, but my introduction's verdict ('this shift is largely positive') wobbles in the second body, where two sentences argue the opposite without signalling a concession. Coherence and Cohesion feels nearer 7: each paragraph owns one job, and a signpost sentence marks the shift from explaining the trend to weighing it. Lexical Resource sits around 6 — 'outweigh' appears four times, though 'narrower but real' naming the cost side was a precise moment. Grammatical Range and Accuracy: mostly error-free complex sentences, with three article slips clustered in the conclusion; I would estimate 6.5. The action for next time: draft the position as one unchanging sentence, and spend the final two minutes checking articles.",
        },
        listening: {
          script: "When I mark, I read for response first and everything else second — I want to know what the script is trying to do before I judge how it does it. Then I look at paragraphing: if I cannot retell the plan from the topic sentences alone, my cohesion note says six at best. Vocabulary and grammar I judge sentence by sentence — range means variety attempted, accuracy means variety that mostly worked.",
          task: "In what order does this marker read the criteria, and what exactly caps cohesion at six in her notes?",
        },
        speaking: {
          task: "Explain the four criteria to a study partner in sixty seconds — one sentence each, entirely in your own words, with no claim to official wording.",
          frames: [
            "The first judge asks whether…",
            "The second looks for…",
            "The third and fourth weigh…",
            "My weakest judge is…, because in my last script…",
          ],
          checklist: [
            "Did you name all four without notes?",
            "Did every description stay in your own words?",
            "Can you name your weakest judge and one action for it?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Feature", "What it achieves"],
        rows: [
          ["Four verdicts, four quotes", "Every estimated band is tied to a sentence quoted from the script — evidence-backed self-assessment, the habit that turns criteria into personal data"],
          ["Weakness located precisely", "The position wobble is traced to a specific body, so the next draft has a target rather than a mood"],
          ["Honest hedging", "Every number reads as a teaching estimate and the paragraph ends in action, not self-congratulation or despair"],
          ["Balanced reading", "Strengths are found beside flaws — one-sided self-scoring, harsh or generous, teaches nothing"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Know the four judges by name before test day — you cannot aim a response at criteria you cannot list."],
          ["While the clock runs", "Draft for all four at once: answer every printed part, make the plan visible, choose words precisely, vary your structures."],
          ["If you are stuck", "When time runs short, protect the response judge first — a complete, plainer script outscores a polished half-answer, and Task 2's double weight raises the stakes."],
          ["Final minutes", "Give the last two minutes to accuracy: slipped agreements and tenses are the cheapest marks any judge will hand back."],
        ],
      },
      {
        type: "summary",
        points: [
          "Four criteria score every script: response to the task, coherence and cohesion, lexical resource, grammatical range with accuracy.",
          "The four combine into each task's band, and Task 2 weighs roughly twice Task 1 in the overall writing result.",
          "'Addresses all parts' means locatability: every printed question must have a paragraph that visibly pays it.",
          "'Clear position throughout' means quotable in the introduction, advanced by every paragraph, unchanged in the conclusion.",
          "Under-length scripts are penalised and off-topic material earns nothing — coverage at full length feeds the response judge before anything else can matter.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "Which script fails 'addresses all parts'?", options: ["One that answers the causes question and abandons the effects to a closing line", "One that argues a clear position from start to finish", "One that runs to 300 words"], correctIndex: 0, explanation: "Coverage is locatability: every printed question needs a paragraph paying it, and a one-line effects mention leaves half the contract unpaid.", from: "Task 2 — Cause and effect" },
          { question: "A two-part prompt's second question asks whether the change is positive or negative. What must the script contain?", options: ["Further reasons for the trend", "A verdict the reader can point at, held to the end", "A history of the trend"], correctIndex: 1, explanation: "The judging half owes a decision, and the response criterion rewards a stance that is quotable early and unchanged late.", from: "Task 2 — Two-part questions" },
          { question: "Which habit best protects the accuracy judges in an exam's final minutes?", options: ["Adding one more paragraph", "A two-minute error sweep of agreements, tenses and articles", "Rewriting the introduction from scratch"], correctIndex: 1, explanation: "The time budget's closing sweep recovers the cheapest marks on machinery — slips that were drafting speed, not knowledge gaps.", from: "Time management" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which list names the four writing criteria correctly?",
        hints: ["Two criteria are about language, one about organisation, one about the job itself."],
        options: [
          { id: "a", text: "Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy." },
          { id: "b", text: "Content, Organisation, Vocabulary, Spelling." },
          { id: "c", text: "Task Response, Pronunciation, Fluency, Word Choice." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy.",
          "These four judges score every script — one for the job done, one for the architecture, two for the language machinery. Naming them is the precondition for drafting toward them strategically.",
          "(b) is a generic classroom rubric, not the test's scheme; (c) borrows labels from the speaking test.",
        ),
        tags: ["awriting", "criteria", "scoring"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Judge this excerpt.",
        hints: ["Ask which printed question this paragraph serves, if any."],
        passageTitle: "A response excerpt",
        passage: "PROMPT: 'In many countries, people are working from home more often. Why is this happening? Do the advantages of this change outweigh the disadvantages?' EXCERPT: 'Working from home has a long and surprising history. In the nineteenth century, clerks copied letters by candlelight in their own kitchens, and some historians argue the office itself is a recent invention. The technology of the home workplace has improved almost beyond recognition since those candlelit evenings.'",
        question: "The excerpt is fluent and accurate. What is wrong with it?",
        options: [
          { id: "a", text: "The sentences are grammatically too simple for a high band." },
          { id: "b", text: "It feeds none of the four judges' central demands — it answers no printed question, offering neither a reason for the shift nor any weighing of advantages, so the response criterion starves while the language judges merely admire." },
          { id: "c", text: "The vocabulary is too historical for modern topics." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It feeds none of the four judges' central demands — it answers no printed question, offering neither a reason for the shift nor any weighing of advantages, so the response criterion starves while the language judges merely admire.",
          "This is the classic off-topic trap: beautiful prose on a related subject. The response judge scores what the script contributes to the printed questions, and this paragraph contributes nothing — coverage cannot be borrowed from elegance.",
          "(a) misreads the excerpt, whose sentences are varied and controlled; (c) treats a stylistic flavour as the fault when the fault is relevance.",
        ),
        tags: ["awriting", "criteria", "task-response"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "writing",
        prompt: "Complete the weighting rule.",
        hints: [],
        sentence: "In the overall writing band, Task 2 counts roughly ____ as much as Task 1.",
        acceptedAnswers: ["twice", "double", "two times"],
        feedback: fb(
          "Twice.",
          "The essay's double weight is the arithmetic behind every time-management decision in the writing test: minutes moved from Task 1 to Task 2 buy more band, and minutes moved the other way spend it. Protect the essay when the clock turns hostile.",
        ),
        tags: ["awriting", "criteria", "weighting"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. A candidate submits 210 beautifully organised words to a Task 2 prompt, and a third of them discuss a related but different subject. What is the realistic outcome?",
        hints: [],
        options: [
          { id: "a", text: "A single automatic fail for the whole script, regardless of quality." },
          { id: "b", text: "The language and organisation judges still score what they can see, but the response judge suffers heavily — under length and partly off the question, coverage cannot be rescued by polish." },
          { id: "c", text: "No consequence, as long as the ideas are interesting." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The language and organisation judges still score what they can see, but the response judge suffers heavily — under length and partly off the question, coverage cannot be rescued by polish.",
          "The criteria are scored separately, which cuts both ways: strong cohesion and grammar keep earning, while the response criterion pays for the missing thirty-plus words and the paragraphs that served a neighbouring topic instead of the printed questions.",
          "(a) invents a fail-switch the scheme does not contain; (c) ignores that interest is not a criterion — the printed question is.",
        ),
        tags: ["awriting", "criteria", "penalties"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Define 'clear position throughout'.",
        question: "In one sentence: what two things does a 'clear position throughout' demand of a script?",
        acceptedAnswers: [
          "the stance is stated early — quotable in the introduction — and never contradicts itself or fades by the conclusion",
          "a position that appears in the introduction and stays consistent in every paragraph to the end",
          "state the verdict up front and hold it unchanged while conceding costs honestly",
          "the reader can find the writer's stance at the start and it is still the same stance at the close",
        ],
        keywords: ["position", "introduction", "consistent"],
        hints: [],
        feedback: fb(
          "The stance is stated early — quotable in the introduction — and never contradicts itself or fades by the conclusion.",
          "Two demands, one habit: arrival and durability. The position must be findable without detective work, and every paragraph must still be advancing it when the conclusion repeats it unchanged.",
          "Answers covering only clarity or only consistency have half the requirement; the criterion pays for both.",
        ),
        tags: ["awriting", "criteria", "position"],
      }),
    ],
    assignment: {
      title: "Mark your own last essay",
      instructions:
        "Take your most recent timed essay (or write one today). For each of the four criteria, give an estimated band and quote the single sentence from your script that decided the estimate — no quote, no score. Finish with one concrete action for your next draft, named after the judge it feeds.",
      minWords: 80,
      maxWords: 180,
    },
    homework: [
      "Write the four criterion names at the top of your next practice plan, and tick each judge only when the plan visibly feeds it.",
      "Collect five sentences from your old scripts — at least one per criterion — that you would quote as evidence in a self-assessment, and label which judge each sentence feeds.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-models",
    title: "Studying model answers at different levels",
    description:
      "Models as tools, not shrines: reverse-engineer the plan, borrow the scaffolding, compare estimated band-6 and band-8 scripts on the same prompt, and run the annotate-then-rewrite loop until borrowed structure becomes your own.",
    objectives: [
      "reverse-engineer a model's plan instead of memorising its sentences",
      "borrow scaffolding — paragraph jobs, move order, linker placement — onto new prompts",
      "name the exact differences between an estimated band-6 and band-8 response on the same prompt",
      "run the annotate-then-rewrite loop on one model per study session",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "A model answer is the most useful object in writing preparation and the most misused: memorised, it collapses under the first unfamiliar prompt; studied structurally, it hands you plans you can reuse forever. This lesson teaches the three legitimate uses — reverse-engineering the plan, borrowing the scaffolding, calibrating the standard — then puts an estimated band-6 response beside an estimated band-8 response on the same prompt and names the differences exactly. Every band label in this academy is a teaching estimate for comparison's sake, never a prediction of your own scores.",
        beforeYouStart: [
          "You have studied the four scoring criteria.",
          "You have written at least one full timed essay.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — preparation method behind both tasks, Academic and General Training alike"],
          ["Task & question types", "Model study applies to every essay family and every report type you will face"],
          ["What is assessed", "Nothing directly — but the habit decides how much of every criterion your practice converts into skill"],
          ["Why this matters", "Memorised models are the best-known way to fail a new prompt, while borrowed scaffolding is a reusable asset on any prompt they print"],
        ],
      },
      { type: "heading", text: "What a model is for — and what it is not" },
      {
        type: "text",
        text: "A model earns its keep three ways. First, reverse-engineering: reconstruct the plan the writer must have made — the job each paragraph performs, the order of moves inside each — because that plan, not the sentences, is the transferable object. Second, borrowing: lift the scaffolding (paragraph jobs, move order, where linkers sit) onto your own prompts with entirely your own words. Third, calibration: hold two standards in your head so that 'better' stops being a feeling and becomes a list of differences you can name. The forbidden use is memorisation — learning the sentences by heart — which fails on contact with any prompt the model was not written for.",
      },
      { type: "heading", text: "Two scripts, one prompt" },
      {
        type: "text",
        text: "Take one prompt — 'In many cities, people are choosing to cycle to work instead of driving. What are the reasons? What effects does it have?' — and put two responses beside it: one an estimated band 6, one an estimated band 8. Both answer both questions. Neither contains facts the other lacks. The comparison below names what actually separates them, difference by difference, because those differences — not the topic, and not luck — are the distance you are studying to cross.",
      },
      {
        type: "comparison",
        title: "The same prompt at two estimated levels",
        intro: "Both scripts answer both printed questions; the distance between them is control.",
        columns: ["A band-6 estimate", "A band-8 estimate"],
        rows: [
          { aspect: "Sentence control", left: "Mostly accurate short sentences; attempts at complexity collapse into comma splices — 'Cycling is cheap, it keeps you fit.'", right: "Complex sentences that mostly land: a conditional carried cleanly, a relative clause where the idea needs it, and only occasional slips." },
          { aspect: "Precision of vocabulary", left: "Broad strokes — 'cycling is good for health and the planet' — with a near-miss like 'ecologic transport' for 'environmentally friendly transport'.", right: "Named effects in natural collocations — 'the morning queue shortens', 'cyclists arrive without the commuter's dread'." },
          { aspect: "Selection of detail", left: "Everything mentioned equally — lanes, weather, cost, fitness, traffic, parking — with no ranking and no chain.", right: "Two reasons chosen and ranked, and an effects paragraph that traces one chain step by step instead of listing six." },
          { aspect: "Linker quality", left: "One additive device doing every job — 'Moreover, furthermore, in addition' — wherever the logic is contrast or cause.", right: "Devices that mark the real relations — 'Because of this', 'the second cost is subtler', 'by the second year' — placed where the logic turns." },
        ],
        verdict: "Every row is a practised skill, not a learned fact — which is why the gap between the scripts is crossable deliberately.",
      },
      { type: "heading", text: "Why memorised models collapse" },
      {
        type: "text",
        text: "A memorised script is an answer to a question that has stopped being asked. The new prompt differs in topic, in family, in the number of its questions — and the memorised introduction now asserts things the essay cannot cash. The collapse is visible within a paragraph: the opening answers yesterday's question, the first body strains to bend the printed topic toward the memorised sentences, and the cohesion judge sees joins that no plan produced. Meanwhile the response judge finds a script that never engaged the printed questions. What memorisation cannot duplicate is the one thing worth taking: the model's plan, which fits new prompts precisely because it was never made of sentences.",
      },
      { type: "heading", text: "The annotate-then-rewrite loop" },
      {
        type: "steps",
        title: "One model, four sittings",
        steps: [
          { title: "Sitting 1: Annotate the model's moves", text: "In the margin beside each paragraph, write three things: its job, its move order, and the two linkers doing real logical work. No sentence gets copied; nothing gets highlighted for beauty.", examples: [{ english: "Margin note on a body paragraph: 'job — trace one effect chain; moves — name, explain, show, stakes; linkers — “because of this”, “soon after”.", note: "Three lines per paragraph converts a shrine into a schematic." }] },
          { title: "Sitting 2: Write to a different prompt", text: "Choose a new prompt from a different family and draft a full response, borrowing only the annotated scaffolding — same paragraph jobs, same move order, same linker logic — with every content word your own.", examples: [{ english: "The cycling model's chain paragraph becomes a chain paragraph about remote work's effects on city cafés.", note: "The skeleton travels; the sentences never board." }] },
          { title: "Sitting 3: Compare against the model", text: "Lay your response beside the model and hunt differences in the four judges' terms: coverage, architecture, word precision, sentence control. Write the differences as a list — naming beats noticing.", examples: [{ english: "'My chain has three links in one sentence; the model gives each link its own sentence' — one named difference, one fixable habit.", note: "The comparison is diagnostic, not disciplinary." }] },
          { title: "Sitting 4: Rewrite the weakest paragraph", text: "Take the paragraph your comparison judged weakest and rewrite it against the model's corresponding paragraph, fixing only the named differences. One paragraph, fully reworked, teaches more than five models skimmed.", examples: [{ english: "The chain sentence becomes three sentences with three effect verbs — the rewrite your own list prescribed.", note: "Closing the loop is what converts reading into writing." }] },
        ],
      },
      { type: "heading", text: "Worked example — the loop in action" },
      {
        type: "example",
        title: "From shrine to schematic",
        items: [
          { english: "Reverse-engineering a four-paragraph model in the margin: 'Introduction — dual answer. Body one — two ranked reasons. Body two — one chain, three links. Close — compression.' Four lines, the whole plan, nothing quoted.", note: "The plan is the reusable part; the sentences were never the point.", domain: "exam" },
          { english: "Borrowed scaffolding on a fresh prompt: the pattern of closing one part and announcing the next in a single breath fits any evaluating prompt from city congestion to school uniforms.", note: "Patterns survive transport; sentences die at the border.", domain: "exam" },
          { english: "The collapse in miniature: a word-perfect memorised opening about screen time in schools sits atop an essay about city cycling, and by the second paragraph the writer is bending evidence to fit sentences written weeks earlier.", note: "The join tears visibly — no conclusion reattaches what the introduction severed.", domain: "exam" },
          { english: "Two sentences, two levels, same idea: 'Cycling is good and healthy' beside 'Every regular cyclist is one fewer car in the morning queue' — the second selects the one consequence that proves the case.", note: "Precision is selection: the stronger sentence chose its detail to carry an argument.", domain: "exam" },
          { english: "The loop on a study calendar: annotate Monday, draft to a new prompt Wednesday, compare Thursday, rewrite the weakest paragraph Friday — one model, four sittings, visible progress.", note: "The loop converts reading time into production time, the only exchange that moves scores.", domain: "study" },
          { english: "Calibration before a practice test: reread one strong model and one estimated band-6 script, name three differences, and write with those three on the desk.", note: "A standard held in the head is refreshed deliberately, not memorised.", domain: "study" },
          { english: "A new hire studies the team's best report by rewriting last quarter's own report on its skeleton — headings, move order, signposting — with every sentence newly written; the borrowed structure survives and the plagiarism risk never existed.", note: "Scaffolding is what professionals borrow; sentences are what they never do.", domain: "work" },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "I will memorise this model and reproduce it in the test.", right: "Reverse-engineer its plan and borrow only the scaffolding — paragraph jobs, move order, linker placement — then write your own sentences to the prompt actually printed.", reason: "A memorised script answers a question nobody asked this time; when the prompt changes, every join tears at once and all four judges pay." },
          { wrong: "Reading several models a week will lift my writing by absorption.", right: "Work one model through the loop — annotate, draft to a new prompt, compare, rewrite the weakest paragraph — before touching the next.", reason: "Passive reading produces recognition, not production; the rewrite step is where borrowed structure becomes your own." },
          { wrong: "The strong sample simply uses fancier linkers, so I will sprinkle 'furthermore' and 'nevertheless' through my script.", right: "Note where the strong sample places its devices — each marking a real step of cause, contrast or time — and borrow the placement, varied and logical.", reason: "Linker quality is placement and range in the service of logic; devices deployed as decoration are the band-6 signature." },
        ],
      },
      { type: "heading", text: "Model answer across the four skills" },
      {
        type: "four-skills",
        title: "The loop, worked four ways",
        reading: {
          text: "Cycling's rise is best explained by two pressures that reinforced each other. City-centre charges made the car commute expensive, and the same charges funded the lanes that made the bike commute safe; each policy strengthened the case for the other. The effects followed in sequence: the morning queue thinned, then the car parks began converting, and by the second year the council was removing traffic lights rather than adding them.",
          task: "Annotate as Sitting 1 teaches: name the paragraph's job, its move order, and the two cohesive devices marking real logical steps.",
        },
        writing: {
          task: "Run the loop's writing step: choose any model response from this academy's writing course, then rewrite one paragraph of your most recent essay using only its scaffolding — paragraph job, move order, linker placement — with entirely your own sentences on your own topic. List the three things you borrowed.",
          guide: [
            "Annotate the model in the margin first: job, moves, linkers — three words per paragraph, no more.",
            "Choose the paragraph of your own essay that dissatisfied you most, and name the job it should have done.",
            "Draft the rewrite on the model's skeleton only; every content word must be yours.",
            "Finish by naming the three borrowed elements, so the scaffolding becomes a tool you chose rather than luck you had.",
            "Keep the honesty rule: any band estimate attached to either script is a teaching estimate, nothing more.",
          ],
          model: "BEFORE (my draft): 'There are many good effects of cycling. It is healthy. It is also ecological and it saves money. Moreover, cycling reduces traffic in the cities.'\n\nAFTER (borrowed scaffolding — job: trace one chain; moves: name, explain, show, stakes; linkers that mark sequence and cause): 'The health dividend arrives first, and it compounds: a commuter who cycles daily banks the equivalent of a short gym programme by Friday, without ever booking one. Because the habit needs no slot in the diary, it survives the weeks when gym plans die. The city collects its own dividend soon after — every regular cyclist is one fewer car in the morning queue.'\n\nBorrowed: the one-chain job; the name-explain-show-stakes move order; sequence markers placed where the logic turns.",
        },
        listening: {
          script: "'I memorised a full essay last month, word for word.' — 'And the real test?' — 'The prompt was different, and my beautiful introduction answered a question they never asked. I spent ten minutes bending the essay back toward it, and the middle never recovered.'",
          task: "Name the exact moment the memorised script failed, and the hidden cost the speaker paid after that moment.",
        },
        speaking: {
          task: "Explain to a partner, in forty-five seconds, the difference between borrowing a model's scaffolding and memorising its sentences — with one example of each.",
          frames: [
            "A model's plan can be reused because…",
            "Its sentences cannot, because…",
            "For example, a chain paragraph works on any prompt that…",
            "So the study move I will make this week is…",
          ],
          checklist: [
            "Did you name the three reusable parts of a model?",
            "Did your example show a join tearing?",
            "Is your closing sentence a concrete study move?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Feature", "What it achieves"],
        rows: [
          ["Scaffolding separated from sentences", "The rewrite keeps the model's skeleton while replacing every content word — the exact exchange the loop exists to train"],
          ["One paragraph, deeply reworked", "Depth over breadth in study as in essays: a single rewritten paragraph teaches more than five skimmed models"],
          ["The borrowing made explicit", "Naming what was borrowed converts a lucky draft into a reusable tool — next time the skeleton is a choice"],
          ["Improvement visible side by side", "The before-and-after pair makes progress measurable, which keeps the study loop honest and repeatable"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose one model per study session — a single script worked hard beats five skimmed, exactly as one developed idea beats five listed."],
          ["While the clock runs", "Annotate with purpose: mark the plan, the paragraph jobs and the linker placements, never the pretty phrases."],
          ["If you are stuck", "If the model dazzles, reverse its plan first — once the skeleton is visible, the sentences stop intimidating and start informing."],
          ["Final minutes", "Close every study loop with a rewrite of your weakest paragraph; reading models without rewriting leaves nothing behind."],
        ],
      },
      {
        type: "summary",
        points: [
          "A model has three legitimate uses — reverse-engineer the plan, borrow the scaffolding, calibrate the standard — and one forbidden use: memorisation.",
          "The differences between estimated band-6 and band-8 scripts are nameable: sentence control, word precision, selection of detail, linker quality.",
          "Memorised models collapse on new prompts because their sentences answer a question nobody asked; their plans, made of no sentences at all, travel perfectly.",
          "The loop — annotate, write to a new prompt, compare, rewrite the weakest paragraph — is what converts reading time into writing skill.",
          "Every band label in this academy is an educational estimate for comparison, never a prediction of your own result.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "Name the four judges every script faces.", options: ["Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy", "Planning, Drafting, Comparing, Rewriting", "Spelling, Punctuation, Handwriting, Length"], correctIndex: 0, explanation: "The criteria lesson's four names are the vocabulary of all model study — you annotate a model against judges you can name.", from: "How examiners score your writing" },
          { question: "The depth protocol takes one idea through which four moves?", options: ["Name it, explain it, show it, say why it matters", "List it, underline it, translate it, memorise it", "Plan, draft, check, submit"], correctIndex: 0, explanation: "Depth is what separates the two estimated levels in this lesson's comparison — the stronger script's paragraphs run ideas through all four moves.", from: "Task 2 — Direct questions" },
          { question: "A borrowed linker earns its place only when it does what?", options: ["Marks the real logical relation between the sentences it joins", "Is the rarest word in its paragraph", "Opens every paragraph of the essay"], correctIndex: 0, explanation: "Cohesion is scored on devices tracking logic — which is why linker placement, not linker rarity, is the thing worth borrowing from a model.", from: "Coherence" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What is the first move when you sit down to study a model answer?",
        hints: ["Ask what part of the model survives contact with a new prompt."],
        options: [
          { id: "a", text: "Memorise its sentences so you can reproduce them under pressure." },
          { id: "b", text: "Reverse-engineer its plan — the job each paragraph performs, the move order inside each, the placement of its linkers." },
          { id: "c", text: "Copy its rarest vocabulary into a list for use in any essay." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Reverse-engineer its plan — the job each paragraph performs, the move order inside each, the placement of its linkers.",
          "The plan is the only part of a model that transfers to a new prompt, because it was never made of sentences. Margin notes on jobs, moves and linkers convert a display piece into a working schematic.",
          "(a) is the forbidden use — memorised scripts collapse when the prompt changes; (c) collects decoration without the placement logic that made it work.",
        ),
        tags: ["awriting", "models", "study-method"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Diagnose the opening.",
        hints: ["Compare the opening's promises with the prompt's actual questions."],
        passageTitle: "An opening in trouble",
        passage: "PROMPT: 'In many cities, people are choosing to cycle to work instead of driving. What are the reasons? What effects does it have?' OPENING OF THE RESPONSE: 'In the modern era, technology has changed every part of our daily lives, and education is no exception. This essay will discuss both views before reaching a conclusion.'",
        question: "What has gone wrong, and when did it go wrong?",
        options: [
          { id: "a", text: "The grammar of the second sentence is faulty, and the trouble starts there." },
          { id: "b", text: "The response opens with a memorised introduction answering a different question entirely — the join tears in the first sentence, and Task Response cannot recover while the script keeps serving sentences written for another prompt." },
          { id: "c", text: "Nothing — openings are allowed to be general before the essay becomes specific." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The response opens with a memorised introduction answering a different question entirely — the join tears in the first sentence, and Task Response cannot recover while the script keeps serving sentences written for another prompt.",
          "The tell-tale signs are all present: a generic era-opening, a topic (education) unrelated to the printed one (cycling), and a 'discuss both views' instruction the prompt never issued. This is memorisation meeting a new prompt — the collapse the whole lesson exists to prevent.",
          "(a) inspects grammar while the building falls; (c) excuses a fatal relevance failure as style.",
        ),
        tags: ["awriting", "models", "memorisation"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Complete the borrowing rule.",
        hints: [],
        sentence: "Borrow the model's ____ — its plan, its paragraph jobs, its linker placements — never its sentences.",
        acceptedAnswers: ["scaffolding", "scaffold", "structure"],
        feedback: fb(
          "Scaffolding.",
          "Scaffolding means everything structural: the job each paragraph does, the order of moves inside it, where the linkers sit. None of it is made of sentences, which is exactly why it survives the journey to a new prompt while the model's wording does not.",
        ),
        tags: ["awriting", "models", "scaffolding"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. The estimated band-6 script opens three paragraphs with 'Moreover'; the estimated band-8 script uses 'Because of this', 'the second cost is subtler' and 'by the second year'. What exactly does the stronger script's linking earn?",
        hints: [],
        options: [
          { id: "a", text: "Rarity — unusual linkers impress by their vocabulary alone." },
          { id: "b", text: "Devices that mark real logical steps — cause, contrast, time — placed where the logic turns, varied instead of repeated." },
          { id: "c", text: "Quantity — more linkers per paragraph always reads as more cohesive." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Devices that mark real logical steps — cause, contrast, time — placed where the logic turns, varied instead of repeated.",
          "Linker quality is placement plus range in the service of meaning: the stronger script's devices each certify an actual relation between ideas, while the weaker one's additive filler certifies nothing. That is the difference between cohesion and decoration.",
          "(a) misreads rarity as the virtue; (c) reverses the reality — filler linkers are the band-6 signature the comparison names.",
        ),
        tags: ["awriting", "models", "cohesion"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the loop.",
        question: "Name the four sittings of the annotate-then-rewrite loop, in order.",
        acceptedAnswers: [
          "annotate the model's moves, write to a new prompt, compare against the model, rewrite the weakest paragraph",
          "annotate, write, compare, rewrite",
          "mark the model's plan; draft your own response to a fresh prompt; compare the two; rewrite your weakest paragraph",
          "annotate the model, draft to a different prompt, compare against the model, rewrite the weakest paragraph",
        ],
        keywords: ["annotate", "compare", "rewrite"],
        hints: [],
        feedback: fb(
          "Annotate the model's moves, write to a new prompt, compare against the model, rewrite the weakest paragraph.",
          "Four sittings, one model: annotation extracts the scaffolding, the new-prompt draft tests whether it transferred, the comparison names the differences, and the rewrite closes the gap it found. Skipping the last step leaves the loop as reading with extra steps.",
          "Orders that end in comparison, or that skip the new prompt, have the loop reading without ever producing.",
        ),
        tags: ["awriting", "models", "study-loop"],
      }),
    ],
    assignment: {
      title: "Run one full loop",
      instructions:
        "Choose one model response from this academy's writing course. Annotate its plan — job per paragraph, move order, linker placement. Then rewrite ONE paragraph of your most recent practice essay using only that scaffolding: your topic, your sentences, its skeleton. Submit the rewritten paragraph plus three short lines naming exactly what you borrowed.",
      minWords: 90,
      maxWords: 200,
    },
    homework: [
      "Run the full loop once this week: annotate a model on Monday, draft to a new prompt on Wednesday, compare on Thursday, and rewrite your weakest paragraph on Friday.",
      "Collect three skeletons from models — a turn pattern, a chain pattern, a concession pattern — and reuse each on three unrelated topics from your own week, keeping every content word new.",
    ],
  },
];
