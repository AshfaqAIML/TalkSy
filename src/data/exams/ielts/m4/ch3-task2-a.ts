/**
 * Chapter 3A — Task 2: the first four essay families (W-L5).
 *
 * Four masterclass lessons on the opinion, discussion, advantages-and-
 * disadvantages and problem-solution families. Each lesson teaches its family
 * through the ten mandated teaching points, carries an original worked
 * mini-model (introduction plus one body paragraph) inside a four-skills
 * block with an analytical table, and plans one fresh practice prompt in
 * front of the learner: brainstorm notes, position, paragraph map.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const awritingTask2LessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t2-opinion",
    title: "Task 2 — Opinion essays",
    description:
      "The agree-or-disagree family: reading the extent question, choosing a strong or partly-agreeing position, and defending one reason per paragraph without ever conceding the essay to the other side.",
    objectives: [
      "recognise the opinion family's prompt shapes and the calibrated verdict its instruction verb demands",
      "choose between a strong and a partly-agreeing position and freeze a thesis that survives four paragraphs",
      "build body paragraphs that each advance one different reason, with the counter-view anticipated but not conceded",
      "vary reference chains and vocabulary so the essay never recycles the prompt's own words",
    ],
    minutes: 17,
    blocks: [
      {
        type: "lesson-intro",
        text: "Opinion essays ask the bluntest question on the Task 2 paper — do you agree? — and reward the bluntest answer: a position, stated early, defended to the end. The marks go missing in two familiar ways: the essay that never quite says what it thinks, and the essay that argues both sides because arguing for one feels exposed. This lesson teaches the family's single deliverable — your verdict — and the paragraph machinery that defends it without ever handing the microphone to the opposition.",
        beforeYouStart: [
          "You can find a prompt's instruction verb before planning anything else.",
          "You know the POINT–EXPLAIN–EXAMPLE shape of a body paragraph from the foundations chapter.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 2 — the 40-minute, 250-word essay that carries double weight"],
          ["Task & question types", "Opinion ('agree or disagree') prompts, including the 'to what extent' variant — one of the five essay families"],
          ["What is assessed", "Task Response above all: a position that is clear throughout, developed with reasons and examples"],
          ["Why this matters", "An opinion essay that never commits reads as a partial answer, and the cost on Task Response is commonly estimated at two bands"],
        ],
      },
      { type: "heading", text: "Teaching point 1 — Understanding the question" },
      {
        type: "text",
        text: "The opinion family prints a statement and one instruction verb: 'Do you agree or disagree?' or, more often, 'To what extent do you agree or disagree?' The statement is not yours to choose — a claim arrives on the page, and your whole essay is the reply to it. The extent wording is not decoration: it invites calibration, an answer such as 'largely', 'only on defined points' or 'almost entirely', and a good essay turns that dial openly. Underline the statement's two or three load-bearing words before you plan, because everything you later argue must engage with those exact words, not with a looser version of the claim you half-remember from the first read.",
      },
      { type: "heading", text: "Teaching point 2 — Identifying the task" },
      {
        type: "text",
        text: "This family contains ONE deliverable: your position, defended. There is no second camp to report and no second question to answer, which makes the opinion essay the shortest plan on the paper. Two consequences follow. First, your thesis is not an ornament; it is the product being graded. Second, the other side exists only as material you use — one anticipated objection, handled inside your own paragraph — never as an equal guest with a paragraph of its own. The moment a candidate gives the opposite view its own body paragraph, the essay has quietly become a discussion essay answering a question that nobody asked.",
      },
      { type: "heading", text: "Teaching points 3 and 4 — Brainstorming and choosing a position" },
      {
        type: "steps",
        title: "From printed statement to frozen thesis",
        intro: "Two minutes of paper work decide the essay's fate.",
        steps: [
          {
            title: "Step 1: Two columns on paper, never in the head",
            text: "Copy the statement's key words to the top of your planning space and draw two columns under them: reasons to agree, reasons to disagree. Spend ninety seconds filling both with short nouns — 'energy bills', 'empty streets', 'fear of crime' — and one more minute adding a consequence against the two strongest items in each column. A plan that lives on paper can be checked; a plan that lives only in the head quietly rewrites itself halfway through the essay.",
            examples: [
              {
                english: "Columns for a street-lighting prompt: FOR — cheaper municipal bills, darker skies for sleep and migrating birds; AGAINST — fear on empty pavements, camera images turn to grain.",
                note: "Note-shapes, not sentences: the speed comes from nouns.",
              },
            ],
          },
          {
            title: "Step 2: Choose the column you can develop, not the one you believe",
            text: "Count how many items in each column could carry an explanation and an example. The defensible position is the one with two buildable reasons, and your private convictions are invisible to the examiner. If the agree column holds one strong reason and the disagree column holds three, you are writing a disagreement essay this afternoon, whatever you actually feel about the topic.",
            examples: [
              {
                english: "A candidate who loves dark skies finds only one buildable reason in the agree column — and writes the disagreement essay anyway, with three.",
                note: "Marks follow development, not sincerity.",
              },
            ],
          },
          {
            title: "Step 3: Set the dial — strong or partly agreeing",
            text: "A strong position agrees or disagrees outright; a partly-agreeing position agrees with a named reservation — the aim but not the method, the policy but not its hours. Both are fully bandworthy. The strong position is usually easier to defend because every paragraph pulls in one direction; the partly-agreeing position needs a fence built on principle, with the reservation stated precisely, or it collapses into hedging.",
            examples: [
              {
                english: "'I support dimming after midnight, but crossings and hospital districts should keep full lighting' — a fence with a named gate in it.",
                note: "The reservation belongs inside the thesis, not after it as an apology.",
              },
            ],
          },
          {
            title: "Step 4: Write the thesis in one sentence and freeze it",
            text: "Reduce the position to a single sentence containing the side, the dial setting and, where it fits, the two reasons in miniature. That sentence is now the law of the essay: every topic sentence that follows must visibly serve it, and the conclusion will restate it in new words. If a planned body paragraph cannot be checked against the thesis, that paragraph belongs to a different essay.",
            examples: [
              {
                english: "'I disagree with city-centre car bans almost entirely, because the delivery alternatives are not ready and the shops they feed cannot wait for them.'",
                note: "Side, dial and two reasons in one line — the essay now has a spine.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Teaching points 5 and 6 — Developing arguments and creating examples" },
      {
        type: "text",
        text: "Each body paragraph advances ONE reason from your chosen column, and the reason must argue rather than describe: 'dimming saves money' is a topic, while 'the savings are hard to refuse because lighting demand continues after footfall has stopped' is an argument. Inside the paragraph, run the family pattern — POINT names the reason, EXPLAIN gives the mechanism in a sentence or two, EXAMPLE grounds it in ordinary life, and a final clause links back to the thesis. Keep examples at everyday scale: a mid-sized town, a typical commuter, a school run. Invent them honestly and label the invention — 'if a city of half a million dimmed its residential streets…' — because a made-up figure wearing a real statistic's clothes reads as fabrication, and 'a typical', 'if' and 'in most towns' are the honest frames.",
      },
      { type: "heading", text: "Teaching points 7, 8 and 9 — Introductions, body paragraphs and conclusions" },
      {
        type: "text",
        text: "The introduction makes three moves in two or three sentences: context (why the debate exists), the task rephrased (the prompt's statement in your own words — the first proof that you have read it), thesis (side, dial, reasons in miniature). Body paragraphs run topic sentence, explanation, example, link back — one reason each, strongest first for a strong position, reservation handled last for a partly-agreeing one. The conclusion restates the verdict in fresh words and stops: no new reasons, no new examples, at most one closing implication. An examiner who read only your first and last sentences should still be able to mark your position without hesitation.",
      },
      { type: "heading", text: "Teaching point 10 — Avoiding repetition" },
      {
        type: "text",
        text: "The opinion essay's special risk is echoing the prompt's nouns until the reader hears a drumbeat. Give every load-bearing idea two or three variants and spend them deliberately: 'switch off the lights' becomes 'dim the network', 'reduce night-time lighting', 'this measure'. Then chain your references — 'the policy … this arrangement … it' — so the essay's spine stays visible without its label being repeated. Vary sentence openings too: three paragraphs beginning 'Firstly', 'Secondly' and 'Moreover' advertise a list, while 'The stronger reason is economic' and 'The safety objection answers itself' advertise an argument.",
      },
      { type: "heading", text: "Worked example — statements, dials, paragraphs" },
      {
        type: "example",
        title: "The family in action",
        items: [
          {
            english: "PROMPT: 'Some governments require cities to switch off non-essential street lighting after midnight to cut energy use. To what extent do you agree or disagree with this policy?' — load-bearing words: non-essential, after midnight, energy. The dial must answer 'to what extent'.",
            note: "Underline the words your argument must actually touch.",
            domain: "exam",
          },
          {
            english: "THESIS, strong: 'I agree with this policy almost entirely, because the savings are real and the safety worries can be answered at a fraction of the money saved.'",
            note: "Side, dial and two reasons inside one sentence.",
            domain: "exam",
          },
          {
            english: "THESIS, partly agreeing: 'I support dimming residential streets but not crossings or hospital districts, since a switch-off that endangers the most vulnerable saves nothing worth having.'",
            note: "The fence stands on a principle: protection of vulnerable users.",
            domain: "exam",
          },
          {
            english: "A learner drafts both thesis versions, then checks each planned body paragraph against both — and keeps the thesis that all four paragraphs can serve.",
            note: "The freeze test, done on paper in seconds.",
            domain: "study",
          },
          {
            english: "HONEST HYPOTHETICAL: 'If a typical office worker can see stars from a balcony for the first time in years, the policy has changed something no electricity meter records.'",
            note: "'Typical' and 'if' signal invention honestly.",
            domain: "everyday",
          },
          {
            english: "COUNTER, anticipated not conceded: 'Admittedly, delivery drivers prefer lit streets; brighter lamps on main routes answer that worry without lighting every cul-de-sac.'",
            note: "The objection appears inside your paragraph and leaves smaller than it arrived.",
            domain: "work",
          },
          {
            english: "SPRAWL, avoided: three body paragraphs each advancing one reason — cost, sleep and wildlife, safety answered — instead of seven reasons named at two sentences each.",
            note: "Development is depth per reason, not the number of reasons.",
            domain: "city",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "The essay discusses both sides so that it looks balanced and safe.",
            right: "State your verdict in the introduction and defend it; give the other side one anticipated objection inside a body paragraph, never a paragraph of its own.",
            reason: "The opinion family grades one deliverable — your position — and a both-sides essay answers a question that was never printed, so Task Response sinks with the confusion.",
          },
          {
            wrong: "I will reveal my opinion in the conclusion, for dramatic effect.",
            right: "Commit in the second or third sentence, and let the conclusion restate that commitment in new words.",
            reason: "Examiners look for a position that is clear throughout the essay; one that appears on the final lines cannot, by definition, have been clear throughout.",
          },
          {
            wrong: "'It depends' sounds wisely moderate, so that is my position.",
            right: "Name what it depends on, and state how far you agree in the areas your essay will actually discuss.",
            reason: "The extent question invites calibration on a dial, not ambivalence; 'it depends' answers nothing until it is fixed to named conditions.",
          },
          {
            wrong: "My two body paragraphs make the same point twice with different examples.",
            right: "Give each paragraph a different reason from the planning column — one economic, one social, one practical — and develop each with a single example.",
            reason: "Repeated points register as one point, so the essay's effective development halves, however many paragraphs dress it up.",
          },
        ],
      },
      { type: "heading", text: "The model — an opinion introduction and one body paragraph" },
      {
        type: "four-skills",
        title: "Four skills around one opinion essay",
        reading: {
          text: "A town council's energy review found that street lighting accounted for roughly a fifth of its electricity spending, and that after midnight most of that light fell on roads carrying fewer than a dozen vehicles an hour. The council dimmed residential streets to half power between midnight and five, kept crossings and the hospital route at full brightness, and recorded a lighting bill visibly lower the following year — with complaints too few to fill a single page.",
          task: "Read once, then note the two details a pro-dimming body paragraph could use as everyday-scale support.",
        },
        writing: {
          task: "Task 2. Some governments require cities to switch off non-essential street lighting after midnight to cut energy use. To what extent do you agree or disagree? For this lesson, write the introduction and the first body paragraph only (about 150 words), with the dial set in the thesis.",
          guide: [
            "Introduction: one context sentence on night-time energy costs, the task rephrased, then the thesis with dial and two reasons.",
            "Body 1: POINT — the economic reason; EXPLAIN — demand continues after footfall stops; EXAMPLE — the mid-sized town, honestly hypothetical; LINK — back to the thesis.",
            "Handle safety as the anticipated objection inside a later paragraph, not as this paragraph's guest of honour.",
          ],
          model: "Introduction: Street lighting is among the largest single items on a city's electricity bill, and much of that light falls on streets that are almost empty. Several governments now require non-essential lights to go off after midnight, and I agree with this policy almost entirely: the savings are real, and the safety concerns it raises can be answered at a small fraction of the money saved. Body paragraph: The economic case rests on a simple mismatch — lighting demand continues all night, but footfall does not. In a typical mid-sized city, residential streets carry only a handful of vehicles after midnight, yet every lamp burns until dawn at full power; if such a city dimmed those streets by half for five hours a night, the saving on one of its largest energy costs would be immediate, and it would recur every year without new equipment. Admittedly, delivery drivers prefer brightly lit routes, but brighter lamps on main roads answer that worry at the edge of the savings — a policy that cuts a recurring bill without cutting a service anyone is awake to use is very hard to refuse.",
        },
        listening: {
          script: "Comment on a first draft: the position is easy to find and it never moves, which is exactly what this family rewards. Each paragraph advances a different reason, and the objection is handled inside the essay rather than being handed the keys to it. My one reservation — an estimate, not a score — is vocabulary range: the word 'policy' appears four times, and a reference chain would lift the whole page.",
          task: "Listen once and note the single improvement the commenter suggests.",
        },
        speaking: {
          task: "Say your position aloud in thirty seconds, as if answering a speaking examiner: side, dial, two reasons.",
          frames: [
            "I agree with this policy almost entirely, mainly because…",
            "My second reason is that…",
            "The obvious objection is …, but…",
          ],
          checklist: [
            "Did you name how far you agree?",
            "Did both reasons match your planned paragraphs?",
            "Did the objection leave smaller than it arrived?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Task response", "The verdict appears by the third sentence with its dial set to 'almost entirely', and every later sentence can be checked against it."],
          ["Organisation", "The introduction runs context, rephrased task, thesis; the body paragraph runs one reason from point through mechanism to example and back to the thesis."],
          ["Coherence", "The final clause returns to the thesis's key idea — refusing — closing the loop the topic sentence opened, while the objection is met inside the paragraph."],
          ["Grammar", "A conditional ('if such a city dimmed those streets') frames the invented example honestly, and a concessive clause keeps the counter-view to a single breath."],
          ["Vocabulary", "Prompt words are rephrased on arrival — 'switched off' becomes 'dimmed', 'energy use' becomes 'electricity bill' — so no echo survives to the second paragraph."],
        ],
      },
      { type: "heading", text: "A practice prompt, planned in full" },
      {
        type: "steps",
        title: "One prompt from cold start to paragraph map",
        intro: "PROMPT: 'Some employers ask every job applicant to complete an unpaid trial shift before being considered for a role. To what extent do you agree or disagree with this practice?' Watch the whole plan happen.",
        steps: [
          {
            title: "Step 1: The two-minute brainstorm, shown",
            text: "Statement at the top, two columns beneath. FOR: the interview talks but the shift shows; both sides learn fit before committing; wasted hiring costs fall. AGAINST: free labour by another name; it punishes applicants who already have jobs or care duties; it rewards confidence over competence. Consequences noted against the strongest: 'wasted hiring costs fall → fewer three-month resignations' and 'punishes care duties → the filter selects for free time, not skill'.",
            examples: [
              {
                english: "Strongest FOR line: a shift shows what a résumé cannot. Strongest AGAINST line: the practice bills the applicant, in unpaid hours, for the employer's decision.",
                note: "Two buildable reasons on each side — the column choice is now a real choice.",
              },
            ],
          },
          {
            title: "Step 2: Position and thesis, chosen",
            text: "The disagree column carries two reasons that can each hold a paragraph — unpaid labour and unequal access — so the essay disagrees, strongly, with one small concession for genuinely short trials. Thesis: 'I disagree with unpaid trial shifts in almost every case, because they take labour without paying for it and they filter out the applicants with the least free time — however well a supervised hour might suit a few roles.'",
            examples: [
              {
                english: "The concession ('a supervised hour') is named inside the thesis, so the essay never has to argue against itself later.",
                note: "Concede in the thesis, develop in the body, never reverse.",
              },
            ],
          },
          {
            title: "Step 3: The paragraph map",
            text: "Introduction: trial shifts have spread from cafés to office hiring; rephrase; thesis. Body 1: the labour argument — a shift is work, work has a price, and normalising free shifts pushes wages down one trial at a time. Body 2: the access argument — the candidate with children or a current job cannot donate a weekday, so the filter selects for free time rather than skill. Body 3, or a folded-in concession: a paid, time-boxed trial answers most of the practice's defenders. Conclusion: the verdict in new words — pay for the trial or drop it.",
            examples: [
              {
                english: "Four lines, one per paragraph, each carrying a different reason — no paragraph repeats another's job.",
                note: "The map is the essay's contract; write it before the introduction, not after.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Underline the statement's load-bearing words and the instruction verb; decide strong or partly-agreeing before writing a single sentence."],
          ["While the clock runs", "One reason per paragraph, each checked against the frozen thesis; the counter-view appears once, inside your own paragraph."],
          ["If you are stuck", "Re-read the thesis and ask which planning-column reason is still unspent — the next paragraph is that reason, not a new idea."],
          ["Final minutes", "Confirm the conclusion's verdict matches the introduction's dial exactly, and hunt for any prompt word echoed more than twice."],
        ],
      },
      {
        type: "summary",
        points: [
          "The opinion family has one deliverable: your position, stated early, defended throughout.",
          "Set the dial in the thesis — 'almost entirely', 'only on defined points' — because 'to what extent' is the question's real engine.",
          "Choose the position you can develop, not the one you believe: count buildable reasons, not convictions.",
          "Anticipate the counter-view inside a body paragraph; never give it a paragraph of its own.",
          "Give every load-bearing idea two or three synonyms and chain your references, so the prompt's words echo nowhere.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What does the instruction verb tell you before anything else?",
            options: ["Which family the essay belongs to — and therefore its deliverables", "How many words to write", "Which examples are allowed"],
            correctIndex: 0,
            explanation: "The verb is the question's identity card: agree-or-disagree prints one deliverable, discuss-both-views prints three.",
            from: "Analysing question requirements",
          },
          {
            question: "How long is the Task 2 plan, and what must it contain?",
            options: ["About four minutes: thesis, paragraph claims, three-word examples", "Twenty minutes: the full essay in note form", "No time at all: planning time is writing time"],
            correctIndex: 0,
            explanation: "The plan fixes the thesis and the paragraph map so that writing becomes transcription rather than invention.",
            from: "Planning",
          },
          {
            question: "What shape does every body paragraph reuse?",
            options: ["POINT, EXPLAIN, EXAMPLE, with a link back", "Quote, comment, counter-quote", "Claim, statistic, conclusion"],
            correctIndex: 0,
            explanation: "The point names the reason, the explanation gives the mechanism, and the example grounds it in ordinary life.",
            from: "Paragraph organisation",
          },
          {
            question: "What replaces a repeated subject noun across paragraphs?",
            options: ["A reference chain — 'the policy … this measure … it'", "Full repetition for clarity", "Numbers instead of names"],
            correctIndex: 0,
            explanation: "Chained references keep the spine visible while the vocabulary varies, which is half of cohesion.",
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
        prompt: "What does 'to what extent do you agree or disagree?' ask for that a plain 'do you agree?' does not?",
        hints: ["What does the phrase add to a yes/no question?"],
        options: [
          { id: "a", text: "A summary of both sides before choosing." },
          { id: "b", text: "A calibrated answer — how far you agree, from 'almost entirely' down to 'only on defined points'." },
          { id: "c", text: "A description of how the policy came into force." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A calibrated answer — how far you agree, from 'almost entirely' down to 'only on defined points'.",
          "The extent wording turns a yes/no switch into a dial, and the examiner is listening for where you set it. A thesis that names its calibration answers the question as printed, while 'yes' alone answers a blunter question than the one on the page.",
          "(a) describes the discussion family's job; (c) answers a background question nobody asked.",
        ),
        tags: ["awriting", "t2", "opinion", "thesis"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Run the family's rules over this introduction.",
        hints: ["Look for the sentence a stranger could quote as the writer's verdict."],
        passageTitle: "An introduction under the microscope",
        passage: "Street lighting costs cities a great deal of money, and in recent years several governments have asked whether all of it is necessary after midnight. There are strong arguments on both sides of this question, and this essay will examine them carefully before reaching a conclusion.",
        question: "What is this introduction missing for an opinion prompt?",
        options: [
          { id: "a", text: "A thesis — the paragraph promises to examine both sides and never states a position, so no verdict exists to defend." },
          { id: "b", text: "Background — there is not enough context about electricity prices." },
          { id: "c", text: "Vocabulary — the word 'policy' never appears in the paragraph." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A thesis — the paragraph promises to examine both sides and never states a position, so no verdict exists to defend.",
          "The paragraph is fluent and on topic, which is exactly why the failure is expensive: an examiner searching for the position finds a route description instead ('this essay will examine…'). The opinion family's one deliverable is the verdict, and it is absent.",
          "(b) misdiagnoses the paragraph, which has context in its first sentence; (c) invents a vocabulary problem where a task problem sits.",
        ),
        tags: ["awriting", "t2", "opinion", "thesis"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Thesis calibration. Complete the strong-position thesis with ONE adverb that sets the dial.",
        hints: ["Which adverbs say how far the writer agrees?"],
        sentence: "I ___ agree with this policy, because the savings are too large to refuse and the safety worries have cheap answers.",
        acceptedAnswers: ["almost", "entirely", "fully", "completely", "wholeheartedly"],
        feedback: fb(
          "almost / entirely / fully — any adverb that sets the dial of agreement.",
          "The dial word does two jobs at once: it answers the 'to what extent' question in a single syllable, and it commits the essay to defending exactly that much agreement — no more, no less.",
          "Answers like 'sometimes' or 'maybe' blur the dial rather than setting it, and 'not' would flip the thesis into a different essay.",
        ),
        tags: ["awriting", "t2", "opinion", "calibration"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence handles the counter-view correctly for an opinion essay?",
        hints: [],
        options: [
          { id: "a", text: "Supporters of dark streets claim that lighting causes no crime at all, and this essay agrees with everything they say." },
          { id: "b", text: "Admittedly, some residents fear darker streets, but better-lit crossings answer that fear at a small fraction of the money saved." },
          { id: "c", text: "On the other hand, many people strongly disagree with this policy for several important reasons which will now be discussed." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Admittedly, some residents fear darker streets, but better-lit crossings answer that fear at a small fraction of the money saved.",
          "The correct shape is one concessive clause that names the objection honestly and one main clause that answers it — the counter-view is anticipated and absorbed, never conceded and never given room to grow into a paragraph.",
          "(a) surrenders the essay's spine to the other side; (c) opens a door to a second essay and answers nothing.",
        ),
        tags: ["awriting", "t2", "opinion", "counter-view"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the three moves of an opinion-essay introduction, in order.",
        hints: [],
        question: "In order, what are the three moves of an opinion essay's introduction?",
        acceptedAnswers: [
          "context, the task rephrased, and the thesis",
          "context, then the task rephrased in your own words, then the thesis with its dial",
          "background — the statement rephrased — your position",
          "context, rephrased statement, thesis",
        ],
        keywords: ["context", "thesis"],
        feedback: fb(
          "Context, the task rephrased, thesis — in that order.",
          "The three moves take two or three sentences: why the debate exists, the prompt's claim in fresh words, then your verdict with its dial. Examiners can find a position that arrives by sentence three; one that never arrives cannot be found at all.",
          "Answers that begin with the thesis miss the context move; answers without a thesis describe some other family's introduction.",
        ),
        tags: ["awriting", "t2", "opinion", "introduction"],
      }),
    ],
    homework: [
      "Collect three opinion prompts and write both thesis versions — strong and partly agreeing — for each; keep the one all four paragraphs could serve, and note why the other was abandoned.",
      "Take your last opinion essay, underline the thesis, and check each topic sentence against it; cross out or rewrite any paragraph that does not visibly serve the position.",
    ],
    assignment: {
      title: "Opinion essay, timed",
      instructions:
        "Write a full opinion essay in 40 minutes: 'Some cities now require all new apartment buildings to include solar panels. To what extent do you agree or disagree with this requirement?' Plan for four minutes first — columns, dial, frozen thesis — then write at least 250 words, with the counter-view handled inside one body paragraph and a conclusion that restates your verdict in new words.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t2-discussion",
    title: "Task 2 — Discussion essays",
    description:
      "The both-views family: three deliverables — view one, view two, your verdict — the fairness discipline that presents each camp in its strongest form, and the case for stating your opinion where the examiner can find it.",
    objectives: [
      "split a discussion prompt into its three deliverables and answer all three in the essay's structure",
      "present each printed view in its strongest form, with the rejected camp given equal architecture",
      "state the verdict at the end of the introduction and keep it visible through to the conclusion",
      "vary the reporting kit so both camps are attributed without echoing the prompt's wording",
    ],
    minutes: 17,
    blocks: [
      {
        type: "lesson-intro",
        text: "Discussion essays hand you a debate you did not choose: two views arrive printed on the page, and the instruction asks for all of them — both views, then your own opinion. Three deliverables, one essay. The classic failure is also the most human one: you agree with one camp, argue it enthusiastically, and the other camp becomes a straw man you knock over on the way past. This lesson builds the three-part structure and the fairness discipline that keeps both camps standing until your verdict falls.",
        beforeYouStart: [
          "You can rephrase a printed statement without echoing its words.",
          "You know the body-paragraph pattern that each view paragraph will reuse.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 2 — the discursive essay that decides half the writing score"],
          ["Task & question types", "Discussion ('discuss both views and give your opinion') prompts — the two-camp family of the five"],
          ["What is assessed", "Task Response: both views presented and developed, plus a relevant opinion of your own, clear throughout"],
          ["Why this matters", "Dropping one camp reads as answering only part of the task — a cost commonly estimated at around two bands of Task Response"],
        ],
      },
      { type: "heading", text: "Teaching point 1 — Understanding the question" },
      {
        type: "text",
        text: "The family's prompt has a fixed architecture: a sentence of context, then view A ('Some people believe…'), then view B ('Others argue…'), then the instruction 'Discuss both these views and give your own opinion.' Two things follow. The views are supplied, not invented — your first job is to read what each camp actually claims, because the printed version of view A is usually more careful than the version living in your memory. And 'discuss' means present and develop, not merely mention: a view that appears in one sentence has been mentioned, and the task is still waiting for it to be discussed.",
      },
      { type: "heading", text: "Teaching point 2 — Identifying the task" },
      {
        type: "text",
        text: "Count three deliverables: view one, presented fairly; view two, presented fairly; your verdict on the pair. Every discussion essay is graded against all three, and the missing one is nearly always the view the writer rejects. Notice what is NOT a deliverable: a winner chosen before the planning minute, or a debate reported so neutrally that no opinion ever lands. Your verdict may rest on either camp, on both halves, or on a synthesis of the two; what it may not do is arrive late, arrive never, or arrive disguised as a summary of the debate. The opinion is a first-class passenger on this essay, not a stowaway in the conclusion.",
      },
      { type: "heading", text: "Teaching points 3 and 4 — Brainstorming and choosing a position" },
      {
        type: "steps",
        title: "Two minutes, two camps, one verdict",
        intro: "The plan gives each camp its own box before you are allowed to pick a side.",
        steps: [
          {
            title: "Step 1: Give each camp its own ninety seconds",
            text: "Under the prompt, draw two boxes — one per camp — and fill each with the best reasons that camp's own supporters would give, not the reasons you find easiest to attack. Two or three reasons per box, in note form. When a box comes out thin, you have found the camp that needs your imaginative effort, and that is exactly where the marks are hiding.",
            examples: [
              {
                english: "Book-first box: quiet study space is scarce in flats; books need no login or training; deep reading is what the building uniquely shelters.",
                note: "Reasons a librarian would recognise — that is the fairness test.",
              },
            ],
          },
          {
            title: "Step 2: Choose the verdict from the boxes, not from your past",
            text: "With both boxes filled, decide which camp's reasons survive contact with the other's — and where your own opinion actually sits. Three lawful verdicts exist: camp A, camp B, or a synthesis that grants each camp its half of the mission. Write the verdict as one sentence now; it will close your introduction, and every later paragraph is built in its shadow.",
            examples: [
              {
                english: "Verdict, synthesis form: 'A library that buys no books betrays its name; one that buys only books empties its rooms.'",
                note: "A synthesis still leans — 'rooms' wins this one.",
              },
            ],
          },
          {
            title: "Step 3: Map the paragraphs around the verdict's needs",
            text: "Body paragraph one presents camp A in its strongest form; body paragraph two presents camp B the same way, usually carrying the verdict's development on its shoulder; the conclusion restates the verdict without replaying the whole debate. If your verdict is a synthesis, let each body paragraph end one sentence closer to it — the map bends toward the verdict from both directions.",
            examples: [
              {
                english: "Map: paragraph one, book-first at full strength; paragraph two, events-and-screens at full strength plus why it wins on the verdict's criterion; conclusion, the verdict in new words.",
                note: "Both camps get developed; only one gets the last word.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Teaching points 5 and 6 — Developing arguments and creating examples" },
      {
        type: "text",
        text: "A view paragraph is a body paragraph wearing someone else's coat: a topic sentence naming the camp's claim, an explanation in that camp's own logic, one example at everyday scale, and a closing sentence that hands the argument on — never a closing sentence that sneers. Fairness discipline means the camp you reject gets the same architecture as the camp you back: similar length, similar seriousness, the same kind of example. Invent examples honestly and locally — 'a parent who cannot afford a home printer', 'a reading room that is full by four o'clock' — and make the example invented for the rejected camp as generous as the one invented for your own. The examiner is grading your referee skills as much as your opinions.",
      },
      { type: "heading", text: "Teaching points 7, 8 and 9 — Introductions, body paragraphs and conclusions" },
      {
        type: "text",
        text: "The introduction compresses the debate and lands your verdict in the same breath: one sentence of context, one balanced sentence reporting both camps, one thesis sentence giving your opinion. State the verdict up front — the examiner hunting for your position finds it in paragraph one, and every body paragraph is then read as evidence earning it. In the body, reporting verbs do the attribution: 'the first camp holds', 'supporters of the digital route argue', 'this view answers'. The conclusion restates the verdict in new words and, for a synthesis, names the principle that fuses the two halves. No new camps, no new examples, no surprise reversal on the final line.",
      },
      { type: "heading", text: "Teaching point 10 — Avoiding repetition" },
      {
        type: "text",
        text: "A two-camp essay doubles the repetition risk: both camps get named in every paragraph, and 'some people think' becomes a tick. Build a reporting kit before you write — 'the first camp holds', 'the events side counters', 'this view answers' — and spend its phrases across the paragraphs. Chain the camps by reference once they are introduced: 'the book-first case', 'this argument', 'its rival'. And keep each camp's key nouns distinct from the prompt's wording: if the prompt says 'books' and 'technology', your essay says 'print collections' and 'screens' at least once each, so the reader hears two camps arguing rather than one echo repeating.",
      },
      { type: "heading", text: "Worked example — camps, verdicts, fairness" },
      {
        type: "example",
        title: "The family in action",
        items: [
          {
            english: "PROMPT: 'Public libraries have limited budgets. Some people believe the money should go mainly on books and quiet study space. Others believe it should go on computers, classes and community events. Discuss both these views and give your own opinion.'",
            note: "Two camps, one budget: the verdict will judge priorities, not people.",
            domain: "exam",
          },
          {
            english: "VERDICT, stated up front: 'While no library can abandon either duty, I side mainly with the book-and-study camp: its quiet rooms are the last unrented study space in many towns, and screens have already colonised every home that can afford them.'",
            note: "The opinion arrives in the introduction, weighted and visible.",
            domain: "exam",
          },
          {
            english: "FAIR OPENER for the rejected camp: 'The events-and-screens camp makes its case on reach: a library that only lends books serves people who already read, while classes and computers pull in visitors the shelves never will.'",
            note: "Strongest form first, attribution clean, no sneering word in sight.",
            domain: "exam",
          },
          {
            english: "A learner writes both camp boxes before allowing themselves to pick a side, then checks that the rejected camp's box is as full as the favoured one.",
            note: "Fairness, measured on paper rather than felt.",
            domain: "study",
          },
          {
            english: "HONEST example for a camp you reject: 'A parent who cannot afford a home printer uses the library's computers to apply for jobs after the children are asleep.'",
            note: "Everyday scale makes the reach argument concrete.",
            domain: "everyday",
          },
          {
            english: "SYNTHESIS verdict: 'Each camp guards half the mission — the shelves the depth, the rooms the reach — but depth is the half nothing else in town provides.'",
            note: "A synthesis that still leans is a verdict, not a shrug.",
            domain: "campus",
          },
          {
            english: "THE SNEER TRAP, caught in draft: 'The screen camp, who obviously just want entertainment' — replaced by 'the events camp, whose case rests on reach'.",
            note: "Tone is fairness discipline's other half.",
            domain: "work",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "I agree with view B, so view A gets one dismissive sentence on the way past.",
            right: "Give the rejected view a full paragraph in its strongest form, then defeat it from your verdict's ground — or in one closing sentence of its own paragraph.",
            reason: "The instruction prints two deliverables before your opinion even appears; an undeveloped camp is an undelivered one, and Task Response records the absence.",
          },
          {
            wrong: "My opinion belongs in the conclusion, where conclusions traditionally live.",
            right: "State the verdict at the end of the introduction, echo it where the body earns it, and restate it in the conclusion.",
            reason: "A position that first appears in the final paragraph cannot have been clear throughout — the examiner's pass through the body finds no opinion to track.",
          },
          {
            wrong: "View A is wrong, so I will refute it inside view B's paragraph.",
            right: "Present each camp on its own terms in its own paragraph; judge from the verdict's paragraph, not from inside the other camp's presentation.",
            reason: "Refutation inside a presentation turns 'discuss' into 'argue', and the fairness reading collapses along with the structure.",
          },
          {
            wrong: "Discussing means reporting, so I will quote the prompt's wording for each camp.",
            right: "Rephrase each camp in fresh words and develop it with a reason and an example of its own.",
            reason: "Echoing the prompt's sentences shows neither understanding nor paraphrase control, and both are being graded here.",
          },
        ],
      },
      { type: "heading", text: "The model — a discussion introduction and one camp paragraph" },
      {
        type: "four-skills",
        title: "Four skills around one discussion essay",
        reading: {
          text: "A district library report noted a quiet shift: lending had fallen for the ninth straight year, while evening-class attendance had tripled and the computer waiting list ran to forty names. The report's conclusion was unusually blunt — the building was busier than ever, but it was no longer busy as a library. The board now faces the budget line every service dreads: choosing what the building is for.",
          task: "Read once, then name the two camps a discussion essay on this report would have to present.",
        },
        writing: {
          task: "Task 2. Public libraries have limited budgets. Some people believe the money should go mainly on books and quiet study space. Others believe it should go on computers, classes and community events. Discuss both these views and give your own opinion. For this lesson, write the introduction and the paragraph presenting the camp you reject (about 160 words).",
          guide: [
            "Introduction: context on competing purposes, both camps in one balanced sentence, verdict up front.",
            "Rejected-camp paragraph: its strongest claim first, its own logic, one everyday example — no sneering, no refutation.",
            "Vary attribution: 'the camp', 'this view', 'its supporters' — the prompt's sentence should never appear twice.",
          ],
          model: "Introduction: Every public library serves two publics — the reader who wants a silent room and a shelf, and the visitor who needs a screen, a class or a place to sit that costs nothing. Fixed budgets force a choice between these duties, and opinion splits accordingly: some people believe books and quiet study should take the larger share, while others argue that computers and events deserve it. My own view sides mainly with the first camp, because a free, silent study space is now the rarest thing a library offers. Camp paragraph, presented at full strength: The case for spending on computers and events rests on reach. A library that buys only books serves the people who already read, and they are the visitors the service least needs to win over; classes pull in new arrivals learning the language, job-seekers without a printer, and teenagers whose homes hold no quiet corner. On a wet Tuesday afternoon in many towns, the busiest rooms in the building are the ones with screens and voices in them — evidence that this camp is chasing an audience, not a fashion, and that the shelves alone will never see it.",
        },
        listening: {
          script: "Comment on a first draft: both views are here and both are developed, which is this family's first law. The verdict appears in the introduction, and — better still — the rejected camp gets the fuller paragraph, so the fairness reading is easy to award. My only note is attribution: the phrase 'some people believe' appears three times, and a reporting kit of four or five phrases would vary the page.",
          task: "Listen once and note the phrase the commenter counts.",
        },
        speaking: {
          task: "Argue the camp you reject, out loud, for forty-five seconds — at its strongest, with no hint of your own verdict.",
          frames: [
            "The strongest case for this view is…",
            "Its supporters would point to…",
            "What this argument gets right is…",
          ],
          checklist: [
            "Did the camp sound like its best supporter wrote it?",
            "Did you avoid every sneering word?",
            "Did the example fit the camp's logic rather than yours?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Task response", "All three deliverables are visible in two paragraphs: both camps named and balanced, the verdict stated in the introduction's final sentence."],
          ["Fairness", "The rejected camp receives the fuller, more generous paragraph — its own logic, its own example, and no refutation inside its presentation."],
          ["Coherence", "Each paragraph closes by handing the argument on, so the essay reads as one verdict assembling its evidence rather than two essays stapled together."],
          ["Grammar", "Balanced clauses ('while others argue') carry the two-camp sentence, and reported-verb structures attribute each claim without quotation marks."],
          ["Vocabulary", "Camps are rephrased on arrival — 'books and quiet study' becomes 'a silent room and a shelf' — and attribution phrases vary across the page."],
        ],
      },
      { type: "heading", text: "A practice prompt, planned in full" },
      {
        type: "steps",
        title: "One prompt from cold start to paragraph map",
        intro: "PROMPT: 'Some people believe city parks should host ticketed concerts and food markets to raise money for their upkeep. Others believe parks should stay free of commercial events. Discuss both these views and give your own opinion.' Watch the plan happen.",
        steps: [
          {
            title: "Step 1: The camp boxes, filled",
            text: "Ticket camp: income without which lawns and play equipment decay; events bring in residents who never otherwise visit; one weekend's takings can fund a season of maintenance. Free camp: parks are the last unbought space in a city; ticketing builds fences, literal and social; noise and lawn-wear are costs no resident voted for. Consequences noted: 'decay is the alternative — income keeps the park alive' and 'a park you must pay to enter is a garden with a wall' are the two lines the essay will spend.",
            examples: [
              {
                english: "Each camp's best line, written the way its own supporter would write it — decay for the ticket camp, equality for the free camp.",
                note: "Fairness is planned before it is written.",
              },
            ],
          },
          {
            title: "Step 2: The verdict, chosen and placed",
            text: "The verdict here is a lean, not a landslide: parks may host events that leave no barrier behind — open-air markets that end by dusk, not ticketed enclosures — because the free camp's principle is the rarer good. Thesis: 'Parks should welcome any event that needs no fence, but the lawns themselves must never carry a ticket, because an unbought green space is the one thing a city gives all its residents equally.'",
            examples: [
              {
                english: "The verdict names its test — 'no fence' — and both camp paragraphs will be checked against it.",
                note: "A criterion does the judging, so the essay never argues against itself.",
              },
            ],
          },
          {
            title: "Step 3: The paragraph map",
            text: "Introduction: the two publics of a park, both camps in one balanced sentence, verdict. Body 1: the ticket camp at full strength — decay, income, new visitors — closing at the edge of the 'no fence' test. Body 2: the free camp at full strength — equality, fences, unvoted costs — closing at the test's centre. Conclusion: the verdict in new words: events without barriers, lawns without tickets.",
            examples: [
              {
                english: "Four lines, one per paragraph, each camp promised the same architecture.",
                note: "Equal paragraphs are planned, not hoped for.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read both printed views twice and box their best reasons before choosing your verdict; check that each box is equally full."],
          ["While the clock runs", "Report each camp in its own paragraph with varied attribution, and keep the verdict visible from the introduction onward."],
          ["If you are stuck", "Return to the rejected camp's box and develop its strongest unbuilt reason — the missing half of the task is usually hiding there."],
          ["Final minutes", "Confirm all three deliverables appear by name somewhere — camp one, camp two, your opinion — and check that attribution phrases do not repeat."],
        ],
      },
      {
        type: "summary",
        points: [
          "The discussion family always carries three deliverables: view one, view two, your verdict — plan all three, deliver all three.",
          "Present each camp in its strongest form: similar length, similar seriousness, the same kind of example, even for the camp you reject.",
          "State your opinion at the end of the introduction; a verdict that surfaces only in the conclusion cannot be clear throughout.",
          "A synthesis verdict is lawful, but it must still lean — name the criterion that tips the balance.",
          "Vary the reporting kit and rephrase both camps' key nouns, so the reader hears a debate rather than the prompt on a loop.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What does a discussion prompt's instruction demand that an opinion prompt does not?",
            options: ["Presentation of both printed views as well as your own opinion", "A verdict on a scale from agree to disagree", "A description of causes and their effects"],
            correctIndex: 0,
            explanation: "The instruction verb prints the deliverables: 'discuss both views' adds two presentations to the one opinion the opinion family already demands.",
            from: "Analysing question requirements",
          },
          {
            question: "How does a view paragraph reuse the standard body shape?",
            options: ["Topic sentence naming the camp's claim, explanation in its logic, one example, a hand-on sentence", "Quotation, refutation, conclusion", "Statistic, statistic, statistic"],
            correctIndex: 0,
            explanation: "The pattern is unchanged; only the ownership shifts — the paragraph argues on the camp's behalf rather than the writer's.",
            from: "Paragraph organisation",
          },
          {
            question: "What replaces repeated camp names across paragraphs?",
            options: ["Reference chains — 'this view', 'its rival', 'the first camp'", "Full repetition of the prompt's words", "Numbers instead of names"],
            correctIndex: 0,
            explanation: "Chained references carry the camps forward while the wording varies, which is exactly what the cohesion mark rewards.",
            from: "Coherence",
          },
          {
            question: "In the two-minute plan, when is the verdict written?",
            options: ["After both camp boxes are filled, before the paragraph map", "After the essay is finished", "Never — it emerges while writing"],
            correctIndex: 0,
            explanation: "The verdict is chosen on evidence — the filled boxes — and then placed where the examiner will meet it first: the introduction.",
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
        prompt: "How many deliverables does every discussion prompt contain, and what are they?",
        hints: ["Count the deliverables before you count the words."],
        options: [
          { id: "a", text: "One — your opinion, defended with reasons." },
          { id: "b", text: "Three — view one presented fairly, view two presented fairly, and your own opinion." },
          { id: "c", text: "Two — the advantages and the disadvantages." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Three — view one presented fairly, view two presented fairly, and your own opinion.",
          "The instruction 'discuss both these views and give your own opinion' prints three jobs: two presentations and one verdict. Essays are graded against all three, and the missing one is almost always the camp the writer happened to reject.",
          "(a) describes the opinion family's single deliverable; (c) belongs to the advantages family.",
        ),
        tags: ["awriting", "t2", "discussion", "deliverables"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Audit this essay outline against the family's deliverables.",
        hints: ["Which of the three deliverables never appears?"],
        passageTitle: "An outline under the microscope",
        passage: "Essay plan — Introduction: libraries face budget choices; state the debate. Body 1: why the book-and-study camp is right — scarce quiet space, deep reading, no login needed; example of the reading room that is full by four o'clock. Body 2: further reasons for the book-and-study camp, plus why home screens make library screens less necessary. Conclusion: repeat that the book-and-study camp is right.",
        question: "What has this plan failed to deliver?",
        options: [
          { id: "a", text: "The second view — the events-and-screens camp is never presented, so 'discuss both views' is answered on one leg." },
          { id: "b", text: "The opinion — no verdict is stated anywhere in the plan." },
          { id: "c", text: "The examples — the outline contains no everyday-scale cases." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The second view — the events-and-screens camp is never presented, so 'discuss both views' is answered on one leg.",
          "The verdict is loud and the examples exist, but one printed camp never gets a paragraph: the plan delivers two of the three deliverables and loses the fairness reading entirely, which is this family's signature failure.",
          "(b) misreads the plan, which states its verdict twice; (c) ignores the four-o'clock reading room sitting in Body 1.",
        ),
        tags: ["awriting", "t2", "discussion", "fairness"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Where should your own opinion first appear in a discussion essay — and why is that position safer?",
        hints: ["Where must the examiner be able to find your position?"],
        options: [
          { id: "a", text: "In the conclusion, because that is where verdicts traditionally live." },
          { id: "b", text: "At the end of the introduction, because a position stated early can be tracked as clear throughout — and it survives a time squeeze." },
          { id: "c", text: "In the middle of body paragraph two, for surprise." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "At the end of the introduction, because a position stated early can be tracked as clear throughout — and it survives a time squeeze.",
          "An examiner reads the body paragraphs with your verdict in mind, checking that each camp's presentation is earning it. A verdict held back to the final lines gives the body nothing to be checked against, and an unfinished essay gives the conclusion nothing at all.",
          "(a) is the family's most common self-inflicted wound; (c) produces a mystery, not an essay.",
        ),
        tags: ["awriting", "t2", "discussion", "verdict"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Fairness discipline. Complete the sentence about weakened opponents with the missing word.",
        hints: [],
        sentence: "Knocking down a deliberately weakened version of a view is called attacking a ___ man, and examiners read it as a failure to discuss.",
        acceptedAnswers: ["straw"],
        feedback: fb(
          "straw — attacking a straw man.",
          "The straw man is the fairness discipline's enemy: a camp presented weaker than its supporters would present it cannot be 'discussed', only defeated, and the presentation deliverable is unmet however impressive the defeat sounds.",
          "Words like 'iron' or 'strong' reverse the meaning into praise of a fair fight that the sentence is diagnosing as a fault.",
        ),
        tags: ["awriting", "t2", "discussion", "fairness"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State what fairness discipline requires you to give the camp you reject.",
        hints: [],
        question: "In one sentence: what does presenting a view 'in its strongest form' require you to give it?",
        acceptedAnswers: [
          "its own paragraph, its supporters' best reasons, and an example as generous as the one you give your own side",
          "a full paragraph with its best reasons and an equally generous everyday example",
          "the same architecture as your own camp: strongest claim, its logic, an everyday example, and no sneering",
          "its best case, developed with a reason and an example, in its own paragraph",
        ],
        keywords: ["best", "example"],
        feedback: fb(
          "Its own paragraph, its supporters' best reasons, and an example as generous as the one you give your own side.",
          "Fairness is structural, not a mood: equal length, equal seriousness and an equally honest example are what turn a mention into a discussion — and only a discussed camp can be fairly rejected.",
          "Answers that allow sneering, shortchanging or one-sentence treatment describe the straw man the family is graded on avoiding.",
        ),
        tags: ["awriting", "t2", "discussion", "fairness"],
      }),
    ],
    homework: [
      "Take any discussion prompt and write only the two camp boxes — ninety seconds each — then have a study partner point at the weaker box and rebuild it before you are allowed to choose a verdict.",
      "From your last discussion essay, count how many different reporting phrases attributed the two camps; replace any phrase you used more than once, and rephrase each camp's key noun once per paragraph.",
    ],
    assignment: {
      title: "Discussion essay, timed",
      instructions:
        "Write a full discussion essay in 40 minutes: 'Some people believe that smartphones should be banned for all pupils during the school day. Others believe they are a learning tool that schools should teach rather than ban. Discuss both these views and give your own opinion.' Plan with two camp boxes and a verdict sentence before writing; deliver all three deliverables across at least 250 words, with the rejected camp given a full, fair paragraph.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t2-advantages",
    title: "Task 2 — Advantages and disadvantages",
    description:
      "The weighing family: 'do the advantages outweigh the disadvantages?' — two columns that must become one verdict, the block organisation that puts the winning side last, and the weighing language that judges rather than lists.",
    objectives: [
      "distinguish the judging prompt from the describe-both prompt and answer the one actually printed",
      "organise an outweigh essay by blocks — the lighter side first, the heavier side developed and placed last",
      "land a verdict on one side and hold it, with weighing connectors doing the comparison in single sentences",
      "hedge evaluations honestly by naming conditions instead of mumbling",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "The advantages-and-disadvantages family looks like the gentlest essay on the paper — who cannot list pros and cons? — and is marked down for exactly that comfort. When the prompt asks whether the advantages outweigh the disadvantages, a balanced catalogue is only half an answer: the verb demands a verdict, one side of the scale winning, stated and defended. This lesson teaches the weighing essay: two columns on paper, two blocks in the essay, and a conclusion that lands.",
        beforeYouStart: [
          "You can rephrase a prompt's key noun in two or three different ways.",
          "You know the body-paragraph pattern that each block's points will reuse.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 2 — the discursive essay, worth twice Task 1"],
          ["Task & question types", "Advantages/disadvantages prompts in two forms: the weighing question ('outweigh?') and the describe-both question"],
          ["What is assessed", "Task Response: relevant advantages and disadvantages, and — for weighing prompts — a clear verdict on which side prevails"],
          ["Why this matters", "The list essay that never judges is the family's signature failure, commonly estimated to cost most of a band of Task Response"],
        ],
      },
      { type: "heading", text: "Teaching point 1 — Understanding the question" },
      {
        type: "text",
        text: "Two prompt shapes share this family. The weighing shape prints a development and asks: 'Do the advantages of this arrangement outweigh the disadvantages?' The describing shape asks simply: 'What are the advantages and disadvantages of…?' The verb is the whole difference. 'Outweigh' is a judgement verb, and it turns the essay into a trial with you as the scales; the describe-both shape asks for a fair inventory where no verdict is required, though a gentle leaning does no harm. Read the verb twice before planning: a verdict missing when 'outweigh' was printed caps the task score, and a verdict forced onto an inventory question is simply words spent in the wrong place.",
      },
      { type: "heading", text: "Teaching point 2 — Identifying the task" },
      {
        type: "text",
        text: "The weighing prompt contains three deliverables: the advantages, developed; the disadvantages, developed; and the verdict — which side prevails, on your judgement, stated in the introduction and defended through the weighting of the blocks. The describe-both prompt contains two: advantages and disadvantages, given roughly equal weight, with no obligation to choose. In both shapes the danger is the same comfortable essay: five points per side, one sentence each, no scale anywhere. The examiner counting developed ideas wants two or three per side at most, each with a mechanism behind it — and, where the verb asks, one clear reading of the balance.",
      },
      { type: "heading", text: "Teaching points 3 and 4 — Brainstorming and choosing a position" },
      {
        type: "steps",
        title: "Two columns, then one verdict",
        intro: "The plan is a pair of scales that you tip on purpose.",
        steps: [
          {
            title: "Step 1: Fill two columns and stop at three",
            text: "Draw the advantage column and the disadvantage column and fill each to three items — no more. Two minutes, note form, consequences noted against the strongest: 'free day → appointments become possible', 'longer days → fatigue arrives by Thursday'. A fourth advantage is almost always the first advantage rephrased, and an essay that plans four points per side has planned a list.",
            examples: [
              {
                english: "Four-day-week columns: FOR — a free day for appointments, longer uninterrupted focus blocks, one commuting fare saved in five; AGAINST — ten-hour days tax energy, childcare hours no longer match, meetings compress into fewer slots.",
                note: "Three per side, and then the pen stops.",
              },
            ],
          },
          {
            title: "Step 2: Weigh the columns, then circle the heavier",
            text: "Read the two columns against each other and ask which side's items survive the pairing: does the free day's value survive the fatigue? Which disadvantage is permanent, and which could a policy tweak adjust? Circle the winning side — that circle is your verdict — and mark its two strongest items, because they will carry the developed block. The verdict is chosen from evidence you can see on the page, which is why the columns came first.",
            examples: [
              {
                english: "Verdict: the advantages prevail, narrowly — the fatigue is real but adjustable, while the free day's value is structural.",
                note: "'Narrowly' is lawful: scales may tip slowly.",
              },
            ],
          },
          {
            title: "Step 3: Set the block order — light first, heavy last",
            text: "Plan the losing side's block first — two points, briskly developed — and the winning side's block second, carrying the verdict's weight and closing on a weighing sentence. Readers feel the second block as the answer, and examiners do too: finishing on your winning side is not a trick but the shape of an argument that has actually weighed something.",
            examples: [
              {
                english: "Map: introduction with the verdict landed; block one, the costs, honestly given; block two, the gains, developed, closing on 'by comparison…'; conclusion, the verdict in new words.",
                note: "Light first, heavy last: the essay's centre of gravity lands right.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Teaching points 5 and 6 — Developing arguments and creating examples" },
      {
        type: "text",
        text: "Each block runs two or three points, and each point is a miniature body paragraph: the point named, the mechanism explained in a sentence or two, one example at the scale of a single life — a typical worker, a small office, one commute. In this family, examples carry the weighing: 'her dentist appointment happens on the free Friday instead of a stolen Monday morning' is worth more than a paragraph of enthusiasm, because it shows the advantage working. Frame inventions honestly — 'a typical employee finds…', 'in a small office…' — and let one example per side do the work: three invented studies is two too many, and invented statistics are fabrication rather than support.",
      },
      { type: "heading", text: "Teaching points 7, 8 and 9 — Introductions, body paragraphs and conclusions" },
      {
        type: "text",
        text: "The weighing introduction names the arrangement, hints at both columns, and lands the verdict in the same breath: 'the longer days are a real cost, but the free day is worth more, so on balance the advantages prevail.' Body paragraphs run as blocks: the lighter side first, brisk and fair; the heavier side second, developed, closing with a weighing sentence — 'by comparison', 'whereas', 'weighed against' — that sets both blocks on the scale in front of the reader. The conclusion restates the verdict in new words and may add one hedged judgement, such as 'on the evidence of how workers actually spend the free day, the compressed week buys more than it costs'. Nothing new is weighed at that late stage.",
      },
      { type: "heading", text: "Teaching point 10 — Avoiding repetition" },
      {
        type: "text",
        text: "This family says 'advantages' and 'disadvantages' in the prompt, in the plan, in the topic sentences and again in the writer's head — and the essay that repeats them becomes a metronome. Build a synonym kit before writing: 'benefits, gains, what the arrangement buys' against 'costs, drawbacks, what it charges'; then chain references to the arrangement itself — 'the compressed week', 'this schedule', 'the four-day pattern' — so the subject moves without being renamed. Vary the weighing verbs too: 'outweighs' once, then 'is worth more than', then 'tips the balance'. The examiner's ear is part of the marking, and the ear hears variety.",
      },
      { type: "heading", text: "Worked example — columns, blocks, verdicts" },
      {
        type: "example",
        title: "The family in action",
        items: [
          {
            english: "WEIGHING PROMPT: 'Some companies have introduced a four-day working week, with longer hours on the four working days. Do the advantages of this arrangement outweigh the disadvantages?'",
            note: "One development, one judgement verb: the verdict must choose a side.",
            domain: "exam",
          },
          {
            english: "DESCRIBE-BOTH PROMPT: 'What are the advantages and disadvantages for employees of a compressed working week?'",
            note: "No judgement verb: two fair columns, no verdict demanded.",
            domain: "exam",
          },
          {
            english: "VERDICT, hedged honestly: 'On balance the advantages prevail: the free day is worth more than the fatiguing hours, though only where the lengthened days are kept within civilised limits.'",
            note: "The hedge names its condition instead of weakening the claim.",
            domain: "exam",
          },
          {
            english: "A learner plans both essays from the same two columns, then checks that only the first one carries a verdict — the verb was read twice before planning.",
            note: "Prompt shape, not topic, sets the deliverables.",
            domain: "study",
          },
          {
            english: "HONEST example: 'A typical office worker books the dentist, the vehicle test and the family visit on one free Friday instead of three stolen mornings.'",
            note: "Everyday scale; one example does the block's work.",
            domain: "work",
          },
          {
            english: "WEIGHING sentence at the block's close: 'Whereas the longer days cost energy every week, the free day returns it whole — and a returned day, unlike a stretched evening, cannot be spent by accident.'",
            note: "'Whereas' puts both blocks on the scale in a single line.",
            domain: "everyday",
          },
          {
            english: "LIST TRAP, caught in the plan: five advantages and five disadvantages crossed down to three and two — the crossed-out four were the first two rephrased.",
            note: "Planning is where sprawl goes to die.",
            domain: "city",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "I listed five advantages and five disadvantages, one sentence each, so the essay looks balanced.",
            right: "Cut to two or three points per side and develop each with a mechanism and an example; then judge the balance in a stated verdict.",
            reason: "The weighing verb asks for a trial, not a stocktake — an undeveloped list reads as an essay that never left the planning stage.",
          },
          {
            wrong: "A balanced essay never chooses, which sounds fair and safe.",
            right: "For an 'outweigh' prompt, land on one side — 'the advantages prevail, narrowly' — and defend the weighting to the end.",
            reason: "The verdict is a printed deliverable of this family; withholding it answers the question with a shrug, and Task Response records the shrug.",
          },
          {
            wrong: "My introduction says the essay will 'look at both sides'.",
            right: "End the introduction with the verdict itself, so the blocks that follow are read as evidence rather than sightseeing.",
            reason: "'Looking at both sides' is a route description, not a position; the examiner is still waiting for the scales to appear.",
          },
          {
            wrong: "My verdict says the advantages win, but my disadvantage paragraph is twice as long as my advantage paragraph.",
            right: "Match block weight to the verdict: the winning side gets the fuller development and the closing weighing sentence.",
            reason: "Readers weigh paragraphs, not intentions — a longer block on the losing side argues against your own conclusion.",
          },
        ],
      },
      { type: "heading", text: "The model — a weighing introduction and the heavier block" },
      {
        type: "four-skills",
        title: "Four skills around one weighing essay",
        reading: {
          text: "A small design studio moved to a four-day week out of necessity — childcare chaos, not ideology — and kept notes for a year. The founder expected collapse; instead, deadlines held, and the notes filled with small returns: staff booked medical appointments on Fridays, two parents stopped paying for a nursery day, and the Monday planning meeting shrank because the week now had only one seam. The single complaint, logged every winter month, was simple: ten-hour days end in the dark.",
          task: "Read once, then sort the details into the two columns of a weighing plan.",
        },
        writing: {
          task: "Task 2. Some companies have introduced a four-day working week, with longer hours on the four working days. Do the advantages of this arrangement outweigh the disadvantages? For this lesson, write the introduction and the heavier block (about 160 words), with the verdict landed in the introduction.",
          guide: [
            "Introduction: the arrangement named, both columns hinted at, the verdict landed — one side, possibly 'narrowly'.",
            "Heavier block: two points developed with mechanisms; one everyday example, honestly framed; close on a weighing sentence ('whereas…', 'by comparison…').",
            "Hedge by naming conditions, not by mumbling: 'where the days are kept within civilised limits' beats 'it is perhaps generally better'.",
          ],
          model: "Introduction: A growing number of companies compress five days of work into four, stretching each working day to make the arithmetic close. The arrangement charges an obvious price in fatigue, and it returns a whole free day every week; on balance the advantages prevail, because the free day is worth more than the exhausting hours — though only where the lengthened days are kept within civilised limits. Heavier block: The free day's first return is practical. A compressed week gives every employee one weekday on which the world is open: the dentist, the vehicle test, the bank, the childhood fever that would otherwise cost a stolen morning. A typical office worker can move a week's small logistics onto a single Friday and recover four uninterrupted Mondays, and each moved errand is a small repayment of the arrangement's cost. The second return is harder to schedule but larger: a whole day of recovery, arriving every week, instead of two half-weekends that dissolve into chores. By comparison, the longer days cost energy that breaks and naps repay; the free day returns time whole, and time returned whole cannot be spent by accident.",
        },
        listening: {
          script: "Comment on a draft: the verdict appears early, and the block order earns it — the costs were fair and brief, the gains were developed, and the closing weighing sentence set both sides on the scale in one line. My note is repetition: the word 'advantages' appears six times on one page; a synonym kit — 'gains', 'returns', 'what the week buys' — would vary the final third.",
          task: "Listen once and note the word the commenter counts.",
        },
        speaking: {
          task: "Weigh the two columns out loud in thirty seconds, ending on your verdict: 'The costs are real, but… so, on balance…'",
          frames: [
            "The obvious cost is…",
            "Whereas the cost is …, the gain is…",
            "On balance, then, … prevails, because…",
          ],
          checklist: [
            "Did you name one winning side?",
            "Did at least one weighing connector appear?",
            "Did every hedge name a condition rather than trail off?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Task response", "The verdict is printed in the introduction and defended by the block order — the judging verb is answered, not admired from a distance."],
          ["Organisation", "The lighter side was planned first; the heavier block closes the essay's argument, so the structure itself performs the weighing."],
          ["Coherence", "'By comparison' fuses the two blocks at the close, and the phrase 'time returned whole' resolves the paragraph's central image."],
          ["Grammar", "Concessive and conditional structures carry the hedge — 'though only where the lengthened days are kept within civilised limits' — instead of vague adverbs."],
          ["Vocabulary", "The synonym kit is at work: 'advantages' appears once, and then 'returns', 'repayment' and 'what the arrangement buys' carry the idea onward."],
        ],
      },
      { type: "heading", text: "A practice prompt, planned in full" },
      {
        type: "steps",
        title: "One prompt from cold start to paragraph map",
        intro: "PROMPT: 'A number of small shops and cafés now refuse cash and accept card payment only. Do the advantages of going cashless outweigh the disadvantages for these businesses?' Watch the plan happen.",
        steps: [
          {
            title: "Step 1: Two columns, filled to three and stopped",
            text: "ADVANTAGES: no cash-handling time and no banking runs; less theft risk from the till; every sale recorded, so stock and tax records reconcile themselves. DISADVANTAGES: customers without cards are turned away at the door; card fees tax every small transaction; a network outage closes the shop entirely. Consequences noted: 'recorded sales → honest books without an accountant' and 'outage → a shop with no till at all' are the two strongest lines.",
            examples: [
              {
                english: "Strongest gain: every sale recorded — bookkeeping becomes arithmetic instead of archaeology. Strongest cost: an outage closes the shop.",
                note: "Each side's best line is the one with a mechanism behind it.",
              },
            ],
          },
          {
            title: "Step 2: The verdict, chosen on the evidence",
            text: "Pair the items: the gains are daily and small; the costs are rare and total. For a busy café the arithmetic favours cashless — but the verdict must carry its honest condition. Verdict sentence: 'On balance the advantages prevail, narrowly, provided the business serves a card-carrying clientele: the fees and the outage risk are real, but the daily friction of cash is realer.'",
            examples: [
              {
                english: "'Narrowly, provided…' — a dial and a condition in three words.",
                note: "Hedged evaluation: the judgement stands, on named ground.",
              },
            ],
          },
          {
            title: "Step 3: The paragraph map",
            text: "Introduction: the spread of card-only counters; both columns hinted at; the verdict landed with its condition. Block 1: the costs — the unbanked customer turned away, the outage, the fees — brisk, fair, one example. Block 2: the gains — time, till security, self-reconciling books — developed, closing on the weighing sentence: 'whereas each cashless cost is rare, the cash handling it replaces is daily.' Conclusion: the verdict in new words, the condition repeated without apology.",
            examples: [
              {
                english: "The condition appears in both the introduction and the conclusion — a hedge that survives the whole essay is a position, not a wobble.",
                note: "Consistency of the hedge is part of the verdict.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the instruction verb twice: 'outweigh' demands a verdict, 'what are' demands a fair inventory — plan for the one that was printed."],
          ["While the clock runs", "Two to three points per side, each with a mechanism and one honest example; keep the winning block for second place and close it on a weighing sentence."],
          ["If you are stuck", "Weigh your own columns aloud: which cost is permanent, and which gain is structural? The answer is your next sentence."],
          ["Final minutes", "Check that the conclusion states one winning side and that the heavier paragraph belongs to it; then hunt the words 'advantage' and 'disadvantage' for repetition."],
        ],
      },
      {
        type: "summary",
        points: [
          "Read the verb first: 'outweigh' prompts are trials with a required verdict; describe-both prompts are inventories with none.",
          "Fill two columns to three items each, then weigh them on paper before circling the heavier — evidence chooses, not mood.",
          "Order the blocks light first, heavy last, so the essay's centre of gravity lands on the winning side.",
          "Weigh in language the reader can hear: 'on balance', 'whereas', 'by comparison', 'weighed against'.",
          "Hedge by naming conditions — 'provided the days end early' — because a conditioned verdict is still a verdict.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What marks the difference between this family's two prompt shapes?",
            options: ["The instruction verb — 'outweigh' judges, 'what are' inventories", "The number of examples required", "The seriousness of the topic"],
            correctIndex: 0,
            explanation: "The verb prints the deliverables: a judgement verb adds the verdict to the two columns, and an inventory verb leaves it out.",
            from: "Analysing question requirements",
          },
          {
            question: "How many points per side does the column plan allow before the pen stops?",
            options: ["Three — the fourth is usually the first rephrased", "As many as the two minutes can hold", "Exactly one"],
            correctIndex: 0,
            explanation: "Three per side keeps the plan a scale rather than a list, and forces the essay to develop instead of enumerate.",
            from: "Planning",
          },
          {
            question: "Where does a block's weighing sentence belong?",
            options: ["At the close of the heavier block, fusing the two sides", "In the middle of the introduction", "Nowhere — weighing is for conclusions only"],
            correctIndex: 0,
            explanation: "The weighing sentence lands where the reader has both blocks in view, which is the end of the second one — the conclusion then only confirms.",
            from: "Paragraph organisation",
          },
          {
            question: "Which sentence puts both sides on the scale in a single line?",
            options: ["'Whereas the cost is daily, the gain is structural'", "'Firstly, secondly, finally'", "'In conclusion, to summarise'"],
            correctIndex: 0,
            explanation: "The contrast connector carries both sides inside one clause pair — cohesion doing the work of a whole comparison paragraph.",
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
        prompt: "What does the verb 'outweigh' require beyond presenting both sides?",
        hints: ["The verb is an instruction — what does it instruct?"],
        options: [
          { id: "a", text: "A statistical comparison of the two sides." },
          { id: "b", text: "A verdict — one side judged to prevail, stated and defended." },
          { id: "c", text: "A summary of other people's views on the matter." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A verdict — one side judged to prevail, stated and defended.",
          "The metaphor is mechanical: one pan of the scale must sit lower. An essay that describes both sides without judging has built the scale and then refused to put the weights on it — the verb's deliverable is missing.",
          "(a) confuses judgement with measurement, which no Task 2 prompt demands; (c) describes the discussion family's job.",
        ),
        tags: ["awriting", "t2", "advantages", "verdict"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Only one of these sentences can be graded as a position.",
        hints: ["Which sentence could an examiner quote as the essay's verdict?"],
        passageTitle: "Three candidate thesis sentences",
        passage: "Sentence 1: 'This essay will look at both the advantages and the disadvantages of the four-day week.' Sentence 2: 'There are many advantages and also many disadvantages to consider in this question.' Sentence 3: 'On balance the free day is worth more than the exhausting hours, so the advantages of the arrangement prevail.'",
        question: "Which sentence answers a 'do the advantages outweigh the disadvantages?' prompt — and why?",
        options: [
          { id: "a", text: "Sentence 1, because it announces the essay's structure." },
          { id: "b", text: "Sentence 3, because it lands a verdict on one side of the scale — the judging verb's missing deliverable." },
          { id: "c", text: "Sentence 2, because it treats both sides equally." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Sentence 3, because it lands a verdict on one side of the scale — the judging verb's missing deliverable.",
          "A thesis for this family must name the winning pan: sentence 3 does, and even carries its own reasoning in miniature ('worth more than'). Sentences 1 and 2 are route descriptions — balanced, fluent, and gradeable as no position at all.",
          "(a) mistakes a plan for a position; (c) describes the describe-both prompt's manners, not the weighing prompt's needs.",
        ),
        tags: ["awriting", "t2", "advantages", "thesis"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Weighing language. Complete the sentence with ONE contrasting connector.",
        hints: ["Which word sets two sides against each other in a single line?"],
        sentence: "___ the longer days drain energy, the free day restores it, and that surplus is what the verdict weighs.",
        acceptedAnswers: ["Whereas", "While"],
        feedback: fb(
          "Whereas (also accepted: while).",
          "The contrast connector is the weighing essay's smallest machine: one word, and both sides of the scale stand in the reader's view at once. Used at the close of the heavier block, it fuses the whole comparison into a sentence.",
          "Words like 'moreover' or 'furthermore' add information without opposition, so the two sides never meet on the scale.",
        ),
        tags: ["awriting", "t2", "advantages", "weighing"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. The prompt reads: 'What are the advantages and disadvantages for employees of working from home?' What has changed, compared with an 'outweigh' prompt?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — every advantages essay must still choose a winning side." },
          { id: "b", text: "No verdict is demanded: two fairly weighted columns answer the question, though a mild leaning is still lawful." },
          { id: "c", text: "Only disadvantages should be discussed, since the verb is silent on judging." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "No verdict is demanded: two fairly weighted columns answer the question, though a mild leaning is still lawful.",
          "The inventory verb prints two deliverables, not three: the essay's job is a fair, developed stocktake. Spending a paragraph forcing a verdict answers a question that was never printed — usually at the expense of development.",
          "(a) imports the weighing prompt's rule where it was not printed; (c) invents an asymmetry the prompt nowhere suggests.",
        ),
        tags: ["awriting", "t2", "advantages", "prompt-shapes"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name two weighing connectors, besides 'on balance', that set the two sides against each other in a single sentence.",
        hints: [],
        question: "Apart from 'on balance', which two connectors put both sides of a weighing essay on the scale in one line?",
        acceptedAnswers: [
          "whereas and by comparison",
          "'whereas' and 'by comparison'",
          "by comparison and whereas",
          "whereas, by comparison",
        ],
        keywords: ["whereas", "by comparison"],
        feedback: fb(
          "'Whereas' and 'by comparison' — the two workhorse connectors of the weighing sentence.",
          "Both force the two blocks into one clause pair, which is why they belong at the close of the heavier block: the reader holds both sides in view exactly when the verdict needs them. 'Weighed against' does the same job with a different metaphor.",
          "Answers offering additive connectors like 'moreover' or 'in addition' never set the sides against each other, so nothing is weighed.",
        ),
        tags: ["awriting", "t2", "advantages", "weighing"],
      }),
    ],
    homework: [
      "Write the two columns for three weighing prompts in two minutes each, then circle the winning side and its two strongest items before writing a single sentence of any essay.",
      "Take a finished essay and mark every occurrence of 'advantage', 'disadvantage' and the arrangement's name; replace each second occurrence with a synonym-kit word or a reference chain.",
    ],
    assignment: {
      title: "Weighing essay, timed",
      instructions:
        "Write a full weighing essay in 40 minutes: 'More consumers now buy second-hand clothing instead of new garments. Do the advantages of this trend outweigh the disadvantages?' Land a verdict in the introduction, give the lighter side its fair block, and let the heavier block close on a weighing sentence. Write at least 250 words, hedging by naming conditions wherever you need to.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t2-problem-solution",
    title: "Task 2 — Problem and solution",
    description:
      "The two-question family: problems named and described through their effects, solutions matched one-to-one to those problems and made believable with a feasibility note — plus the discipline that resists the five-solution sprawl.",
    objectives: [
      "split the problem-solution prompt into its two deliverables and answer both in the essay's structure",
      "describe problems as effect chains landing on real lives, not as stacks of symptoms or adjectives",
      "match every solution to a named problem and add the feasibility note — actor, mechanism, cost — that makes it believable",
      "resist the list-of-five-solutions sprawl by planning two problems and two matched remedies",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "The problem-and-solution family prints a situation and two questions: what problems does this cause, and what can be done? Two deliverables, both graded, both easy to shortchange — the essay that describes problems beautifully and forgets solutions, or the essay that names five remedies and develops none. The family's craft is matching: each solution earns its paragraph by answering a problem the essay has already named, and earns belief by showing how it would actually work. This lesson builds that machinery on one page.",
        beforeYouStart: [
          "You can plan a two-part answer without writing the essay first.",
          "You know the body-paragraph pattern that problem and solution paragraphs both reuse.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing Task 2 — the discursive essay, double-weighted against Task 1"],
          ["Task & question types", "Problem-solution prompts: a described situation plus 'What problems does this cause? What solutions can you suggest?'"],
          ["What is assessed", "Task Response: both question parts answered in the structure, with solutions relevant to the problems named"],
          ["Why this matters", "A solution floating free of any named problem reads as off-topic material, however well written — a mismatch examiners estimate as expensive"],
        ],
      },
      { type: "heading", text: "Teaching point 1 — Understanding the question" },
      {
        type: "text",
        text: "The family's prompt has two halves. First a situation, usually one sentence of social fact: 'In many cities, apartment blocks are being built with no shared outdoor space.' Then the instruction questions: 'What problems does this cause? What solutions can you suggest?' Read the situation for its population — who is affected, at what age, at what hour — because the problems you name must belong to that situation and not to urban life in general. And read the questions in their printed order: problems first, solutions second. A cousin prompt swaps problems for causes — why the situation arose — and that belongs to the cause-effect family, where the situation is explained rather than repaired; do not answer a cousin prompt with this family's machinery.",
      },
      { type: "heading", text: "Teaching point 2 — Identifying the task" },
      {
        type: "text",
        text: "Two deliverables, and the essay's structure must show both: the problems, named and described; the solutions, matched and made believable. The printed order is the natural order — problems before solutions, because a remedy can only be checked against a problem the reader has already met. What is NOT a deliverable: history, blame, or a guided tour of five remedies. When the examiner traces each solution back to a problem, the essay that planned two of each is the essay that traces cleanly, and the essay that planned a pile is the essay that cannot be traced at all.",
      },
      { type: "heading", text: "Teaching points 3 and 4 — Brainstorming and choosing a position" },
      {
        type: "steps",
        title: "Planning the pair, not the pile",
        intro: "In this family, the position is your selection of problems plus your claim that the remedies work.",
        steps: [
          {
            title: "Step 1: List problems through the day, not through the news",
            text: "Spend the first planning minute walking through the affected population's day: the child with nowhere to play, the neighbour who never meets another neighbour, the tenant whose only outdoor moment is a balcony of drying washing. Effects, not headlines: 'children play in the car park' is a symptom, while 'children's play migrates indoors and the stairwells become the playground' is a problem with a mechanism. Keep the two problems whose effects you could describe for three full sentences.",
            examples: [
              {
                english: "Apartment-block problems: children lose the habit of outdoor play; neighbours remain strangers, so nobody asks, borrows or notices.",
                note: "Two problems, each with a life attached to it.",
              },
            ],
          },
          {
            title: "Step 2: Match one solution to each named problem — and cross out the rest",
            text: "For each problem, invent the smallest measure that answers its mechanism: play space answered by a shared courtyard or a roof deck; stranger-neighbours answered by a residents' garden with plots to tend. A solution that answers no listed problem gets crossed out, however brilliant, and a second solution for the same problem is saved for the conclusion's nod. Two problems, two solutions: the essay's architecture appears in the plan itself.",
            examples: [
              {
                english: "Matched pairs: no-play → a roof deck with soft flooring; strangers → a plot-assigned community garden, because tending a bed beside someone is meeting them.",
                note: "Each remedy answers a named mechanism, not the situation in general.",
              },
            ],
          },
          {
            title: "Step 3: Add the feasibility note to each solution",
            text: "Every solution gets one sentence of belief: who runs it, what it costs measured against something the reader knows, and why that actor would agree. 'Assign plots to households and let a residents' committee hold the watering rota' names the actor, the mechanism and the cost in one line — the reader can see it working. Feasibility is where invented solutions stop being wishes: a measure with no actor and no cost is a poem, and examiners can tell the difference.",
            examples: [
              {
                english: "Feasibility note: a garden's tools and water cost less per year than one month of the building's service charge, and the committee already exists to manage the lift contract.",
                note: "Cost compared to something known — belief arrives by comparison.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Teaching points 5 and 6 — Developing arguments and creating examples" },
      {
        type: "text",
        text: "A problem paragraph describes an effect chain, not a complaint: the topic sentence names the problem, the explanation follows its mechanism through daily life, and the example shows the chain landing on one person — 'a typical eight-year-old in such a block reaches Saturday having climbed nothing but stairs'. A solution paragraph mirrors the shape: the topic sentence names the measure, the explanation gives the mechanism, and the example or feasibility note shows it working at the scale of one building. Keep examples local and honestly hypothetical — 'if a council converted one vacant plot…' — because this family asks for suggestions, and suggestions are judged on plausibility, never on authority.",
      },
      { type: "heading", text: "Teaching points 7, 8 and 9 — Introductions, body paragraphs and conclusions" },
      {
        type: "text",
        text: "The introduction names the situation, signals both deliverables, and outlines the chosen problems: one sentence of context, one rephrasing the task, one listing the problems the essay will develop. The body has two lawful shapes: pairs — each paragraph carrying a problem and its matched remedy — or blocks — problems together, then solutions in the same order. Pairs are safer, because the matching is visible on the page and no remedy can drift free. The conclusion recommends the combined course in new words: which measure to start with, and why — no new problems, no new solutions, no third idea the essay has not earned.",
      },
      { type: "heading", text: "Teaching point 10 — Avoiding repetition" },
      {
        type: "text",
        text: "This family risks two drumbeats: 'problem' and 'solution', each printed in the prompt and each reused by habit. Build the synonym kit at the planning stage — 'difficulty, cost to residents, what the situation steals' against 'measure, remedy, response' — and spend the kit deliberately, one variant per paragraph. Chain the situation by reference — 'the new blocks', 'these buildings', 'such estates' — so the subject is carried rather than restated. And vary the paragraph shapes themselves: a problem paragraph built on an effect chain and a solution paragraph built on an actor-and-cost note should not open with the same three words.",
      },
      { type: "heading", text: "Worked example — situations, pairs, feasibility" },
      {
        type: "example",
        title: "The family in action",
        items: [
          {
            english: "PROMPT: 'In many cities, new apartment blocks are built with no gardens or shared outdoor space. What problems does this cause for residents? What solutions can you suggest?'",
            note: "Two questions in printed order — the essay's architecture must show both.",
            domain: "exam",
          },
          {
            english: "OUTLINE sentence: 'This essay describes two costs of outdoor-less housing — children's lost play and neighbours who remain strangers — and matches each with a measure the building itself can host.'",
            note: "Problems named in the introduction: the solutions now have targets.",
            domain: "exam",
          },
          {
            english: "PAIRED paragraph opener: 'The first difficulty is measurable in stairwells: with no courtyard, children's play migrates indoors, and the building's shared stairs become its only adventure.'",
            note: "Symptom and mechanism inside one sentence.",
            domain: "exam",
          },
          {
            english: "MATCHED solution with feasibility: 'The same building can answer with its roof: a deck with soft flooring and supervised after-school hours returns the play space the plans omitted, at a cost the annual service charge already resembles.'",
            note: "Mechanism named, cost compared — the reader can believe it.",
            domain: "work",
          },
          {
            english: "A learner writes the problems first, then folds the bottom half of the planning sheet over and writes solutions against each problem by number — matching made physical.",
            note: "The fold test: every solution must point at a number.",
            domain: "study",
          },
          {
            english: "HONEST hypothetical: 'If a typical tenant tends one garden plot beside the same neighbour each week, the borrowed tools do the introduction that no residents' meeting ever managed.'",
            note: "The mechanism is the meeting, not the vegetables.",
            domain: "everyday",
          },
          {
            english: "SPRAWL, resisted in the plan: five remedies listed — roof deck, garden, gym discount, playground subsidy, street closure — cut to the two that answer the named problems.",
            note: "A remedy answering no named problem is decoration, however kind.",
            domain: "city",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "The essay describes the problems so well that the solutions get one hurried final paragraph.",
            right: "Plan both deliverables into the structure from the first minute: two problems, two matched remedies, each with its own space on the page.",
            reason: "Half the task answered is half the task graded — an essay with no developed remedies is a problems essay wearing a longer title.",
          },
          {
            wrong: "I suggested five solutions so the essay sounds thorough and generous.",
            right: "Choose two remedies matched to your named problems and develop each with its mechanism and feasibility note.",
            reason: "Five undeveloped suggestions register as a list, and none of them can be traced back to a problem — the examiner reads generosity as evasion.",
          },
          {
            wrong: "My problem paragraph says overcrowding is bad, unhealthy and sad.",
            right: "Follow one effect chain: name the difficulty, show its mechanism in daily life, and land it on one household.",
            reason: "Stacked adjectives describe a mood; a mechanism describes a problem — and only one of them can be answered by a remedy.",
          },
          {
            wrong: "My solution is bold: the government should rebuild the city's housing entirely.",
            right: "Scale the remedy to the situation's real actors — councils, landlords, residents' committees — and show why each would agree.",
            reason: "A measure nobody in the essay could realistically enact reads as a wish, and wishes earn no task-response credit however sincerely expressed.",
          },
        ],
      },
      { type: "heading", text: "The model — a problem-solution introduction and one matched pair" },
      {
        type: "four-skills",
        title: "Four skills around one problem-solution essay",
        reading: {
          text: "A housing journalist spent a week in a newly finished district of tall blocks and kept a diary of the outdoor spaces she could find: two balconies per flat, a car park, and a strip of grass behind the recycling bins with a sign asking residents to keep off it. Children played in the lift lobby, by arrangement with nobody. One elderly resident told her the strangest thing about the district: in eight months, she had learned no name to attach to a face.",
          task: "Read once, then note which two problems the diary already measures.",
        },
        writing: {
          task: "Task 2. In many cities, new apartment blocks are built with no gardens or shared outdoor space. What problems does this cause for residents? What solutions can you suggest? For this lesson, write the introduction and one fully matched problem-and-solution paragraph (about 160 words).",
          guide: [
            "Introduction: the situation named, both questions signalled, the two problems listed as an outline.",
            "Paired paragraph: a problem opener with its effect chain, the remedy fused to it in the same paragraph, and a feasibility note comparing the cost to something known.",
            "Keep the matching physical: the remedy's topic sentence must rephrase the problem it answers.",
          ],
          model: "Introduction: City skylines are filling with apartment towers whose plans contain everything except a garden, and the residents of such blocks inherit the consequences. Two of those consequences stand out: children whose play has nowhere to happen, and neighbours who remain strangers for years. Both can be answered inside the buildings themselves, and this essay suggests how. Matched paragraph: The first cost of outdoor-less housing is measured in stairwells. When a block offers no courtyard, children's play does not disappear; it migrates, and the building's shared stairs and lift lobbies become its only adventure — louder, narrower and policed by nobody's patience. A typical eight-year-old in such a tower reaches Saturday having climbed nothing but steps. The remedy can be built directly above the problem: a roof deck with soft flooring and supervised after-school hours returns to children the space the plans omitted, and its cost sits within reach, because the structure already exists and the annual service charge already pays for less-used luxuries in the lobby below it.",
        },
        listening: {
          script: "Comment on a draft: both questions are answered, and — the family's real test — each remedy points at a problem the reader has already met, so the matching is visible on the page. The feasibility note comparing the deck's cost to the service charge is the paragraph's best sentence, because it makes the suggestion believable without a single statistic. One note: the word 'problem' appears five times; the synonym kit was clearly left in the plan.",
          task: "Listen once and note the word the commenter counts.",
        },
        speaking: {
          task: "Sell one solution aloud in forty-five seconds: name the problem it answers, the mechanism, and why the actor would agree.",
          frames: [
            "The problem it answers is…",
            "The measure works because…",
            "The cost is smaller than…",
          ],
          checklist: [
            "Did the problem come before its remedy?",
            "Did you name who runs the measure?",
            "Did one comparison carry the belief?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Task response", "Both printed questions are answered in the structure, and the introduction's outline sentence names the problems the remedies will target."],
          ["Organisation", "The paired shape fuses each problem with its remedy inside one paragraph, so no solution can drift free of its problem."],
          ["Coherence", "The remedy's topic sentence — 'a roof deck … returns the space the plans omitted' — rephrases the problem it answers, closing the loop on the page."],
          ["Grammar", "A conditional and a comparative structure ('its cost sits within reach, because…') carry the feasibility note without a single invented figure."],
          ["Vocabulary", "'Cost' and 'consequence' alternate with 'difficulty' and 'what the plans stole', keeping the family's two drumbeats out of the paragraph."],
        ],
      },
      { type: "heading", text: "A practice prompt, planned in full" },
      {
        type: "steps",
        title: "One prompt from cold start to paragraph map",
        intro: "PROMPT: 'In many towns, small local shops are closing as more shopping moves online. What problems does this cause for town centres? What solutions can you suggest?' Watch the plan happen.",
        steps: [
          {
            title: "Step 1: Problems through the town's day",
            text: "Walk the high street at three hours. Morning: the chemist's counter chat is the only conversation some customers have all day. Noon: the office workers who once lunched locally eat at their desks, so the cafés follow the shops. Evening: ground-floor units stand empty, and an empty unit is the least safe thing a street can hold. Two problems kept: town centres lose the services online retail cannot deliver, and the street's social life loses its venues — each with an effect chain worth three sentences.",
            examples: [
              {
                english: "Kept: services that need a body present — repairs, fittings, advice — lose their premises; the cafés and small firms that fed on footfall follow the shops out.",
                note: "Two problems, each with its own mechanism.",
              },
            ],
          },
          {
            title: "Step 2: Matched remedies, crossed down",
            text: "For the services problem: tie ground-floor tax relief to occupancy, so a landlord's relief follows the independent tenant instead of the empty unit. For the venues problem: let closed units host what online retail cannot — evening classes, clinics, workshops — on the short licenses councils already issue for market stalls. Crossed out: 'shop local' campaigns, which answer no mechanism, and free parking, which answers a different problem entirely.",
            examples: [
              {
                english: "Pairing: services → relief tied to occupancy; venues → short-license reuse of empty units.",
                note: "Each measure answers its problem's mechanism, not its mood.",
              },
            ],
          },
          {
            title: "Step 3: Feasibility notes and the map",
            text: "The rent remedy is believable because a treasury already loses revenue to empty units and prefers income; the license remedy is believable because market stalls prove a council can issue one in weeks. Map: introduction naming the situation and both problems; pair one — the services problem with the occupancy remedy and its note; pair two — the venues problem with the reuse remedy and its note; conclusion recommending the combined course, starting with the licenses, because weeks beat years.",
            examples: [
              {
                english: "The conclusion picks an order — 'start with the licenses, because weeks beat years' — which is a recommendation, not a new idea.",
                note: "Choosing between your own remedies is a lawful, earned ending.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the situation for its population and the questions for their order; list problems as effect chains before touching any remedy."],
          ["While the clock runs", "Keep the pairs visible: each remedy's topic sentence must rephrase the problem it answers, and each carries one feasibility note."],
          ["If you are stuck", "Return to the day-walk: the hour you have not yet visited holds the problem you have not yet described."],
          ["Final minutes", "Trace each remedy back to a named problem with your pen — an orphan remedy gets cut or re-aimed — and check the family's two drumbeat words."],
        ],
      },
      {
        type: "summary",
        points: [
          "Two deliverables, printed in order: problems described through their effects, remedies matched to them — the structure must show both.",
          "Describe problems as effect chains landing on one life; symptoms are not yet problems, and adjectives are not mechanisms.",
          "Match every remedy to a named problem and give it a feasibility note: actor, mechanism, and cost compared to something the reader knows.",
          "Two problems and two remedies beat five and five — development is the currency, and matching is the audit.",
          "The paired paragraph shape keeps remedies from drifting; blocks are lawful, but pairs make the matching visible on the page.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "In this family, what does the prompt's printed order tell you about structure?",
            options: ["Problems come before solutions, because a remedy is checked against a problem already met", "Solutions come first, to sound positive", "Order is free — the essay may begin anywhere"],
            correctIndex: 0,
            explanation: "The printed order is the natural order: a solution the reader cannot check against a named problem cannot be graded as relevant.",
            from: "Analysing question requirements",
          },
          {
            question: "What does this family's plan contain that other families' plans do not?",
            options: ["Matched problem-solution pairs, crossed down to two", "A thesis with a dial setting", "Two camp boxes"],
            correctIndex: 0,
            explanation: "The plan's special object is the pair: each problem listed with the remedy that answers its mechanism, and unmatched remedies crossed out.",
            from: "Planning",
          },
          {
            question: "What makes a problem paragraph more than a complaint?",
            options: ["An effect chain: the mechanism followed through daily life to one person", "Five adjectives of disapproval", "A quotation from an angry resident"],
            correctIndex: 0,
            explanation: "A mechanism can be answered by a remedy; a mood cannot — which is why the chain, not the tone, carries the paragraph.",
            from: "Paragraph organisation",
          },
          {
            question: "How does a paired paragraph signal its match on the page?",
            options: ["The remedy's topic sentence rephrases the problem it answers", "Both halves begin with the same word", "A number links the two halves"],
            correctIndex: 0,
            explanation: "Rephrasing the problem inside the remedy's first sentence makes the matching visible without labels — cohesion doing the audit's work.",
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
        prompt: "What are the two deliverables of every problem-solution prompt?",
        hints: ["Count the instruction questions printed under the situation."],
        options: [
          { id: "a", text: "A thesis defended by two reasons." },
          { id: "b", text: "The problems the situation causes, and solutions you suggest — both answered in the essay's structure." },
          { id: "c", text: "The advantages and the disadvantages of the situation." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The problems the situation causes, and solutions you suggest — both answered in the essay's structure.",
          "The two printed questions are the two deliverables: problems described through their effects, remedies matched to them. An essay that answers only one has answered half the task, whatever its language quality.",
          "(a) describes the opinion family; (c) describes the weighing family — both are cousins, not this family.",
        ),
        tags: ["awriting", "t2", "problem-solution", "deliverables"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Compare these two draft solution sentences.",
        hints: ["A suggestion earns belief when it shows how it would work."],
        passageTitle: "Two drafts under the microscope",
        passage: "Draft A: 'The government should build community gardens everywhere to solve this issue.' Draft B: 'Where a block has no ground to spare, a residents' committee could run a rooftop garden, with plots assigned to households and water billed against the service charge — a cost per flat smaller than one month of it.'",
        question: "Why does Draft B work as a solution sentence where Draft A does not?",
        options: [
          { id: "a", text: "Draft B is longer, and length signals development." },
          { id: "b", text: "Draft B names the actor, the mechanism and the cost — the feasibility note that makes a suggestion believable; Draft A is a wish with no workings." },
          { id: "c", text: "Draft B mentions money, and money impresses examiners." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Draft B names the actor, the mechanism and the cost — the feasibility note that makes a suggestion believable; Draft A is a wish with no workings.",
          "A remedy earns its paragraph by showing how it runs: who organises the plots, how the water is paid for, and what the whole thing costs against something the reader already knows. 'Everywhere' and 'should' are aspiration, not mechanism, and this family is graded on plausibility.",
          "(a) mistakes bulk for belief; (c) misreads the note — the comparison does the work, not the mention of money.",
        ),
        tags: ["awriting", "t2", "problem-solution", "feasibility"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which plan has resisted the sprawl trap?",
        hints: [],
        options: [
          { id: "a", text: "Body 1: five remedies, one sentence each. Body 2: more remedies." },
          { id: "b", text: "Two problems, each described by its effect chain, each followed by its matched remedy with a feasibility note." },
          { id: "c", text: "One problem, described for three paragraphs, with remedies mentioned in the final sentence." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Two problems, each described by its effect chain, each followed by its matched remedy with a feasibility note.",
          "Development is the currency of this family, and matching is the audit: two built pairs let the examiner trace every remedy to a problem, while five bare suggestions cannot be traced at all. The paired shape also protects the structure from the missing-half failure.",
          "(a) is the sprawl trap itself, wearing thoroughness as a disguise; (c) starves the second deliverable down to a single sentence.",
        ),
        tags: ["awriting", "t2", "problem-solution", "sprawl"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Feasibility. Complete the sentence with the missing word.",
        hints: [],
        sentence: "A remedy earns the reader's belief when it names its actor, its mechanism and its ___, each compared to something the reader already knows.",
        acceptedAnswers: ["cost", "costs", "price"],
        feedback: fb(
          "cost — the third leg of the feasibility note.",
          "Actor, mechanism, cost: the triple that turns a wish into a workable suggestion. The cost need not be a figure — a comparison to the service charge, the market stall or the season's budget does the job more honestly than an invented number.",
          "Words like 'hope' or 'support' add sentiment where the sentence is asking for the practical third element of believability.",
        ),
        tags: ["awriting", "t2", "problem-solution", "feasibility"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State what every solution in this family must be matched to before it earns a paragraph.",
        hints: [],
        question: "Before a solution earns its space, what must it be matched to?",
        acceptedAnswers: [
          "a named problem already described in the essay",
          "one of the problems named in the introduction and developed by an effect chain",
          "a problem the essay has already named and described",
          "the named problem whose mechanism it answers",
        ],
        keywords: ["named", "problem"],
        feedback: fb(
          "A named problem already described in the essay.",
          "Matching is this family's audit: the examiner traces each remedy back to a problem, and a remedy with no target reads as off-topic material however well written. The plan's pairs exist to make the tracing possible before the essay is written.",
          "Answers naming themes, topics or the general situation skip the audit — the match must be to a specific, already-named problem.",
        ),
        tags: ["awriting", "t2", "problem-solution", "matching"],
      }),
    ],
    homework: [
      "Take three problem-solution prompts and write only the plan: two effect-chain problems, two matched remedies, one feasibility note each — no sentences, two minutes per prompt.",
      "From any draft essay, draw an arrow from every solution to the problem it answers; any solution with no arrow gets cut or re-aimed at a problem the essay has already named.",
    ],
    assignment: {
      title: "Problem-solution essay, timed",
      instructions:
        "Write a full problem-solution essay in 40 minutes: 'In many cities, rents have risen much faster than wages, and young workers are moving away. What problems does this cause for these cities? What solutions can you suggest?' Name two problems as effect chains, match each with a feasible remedy carrying its own note, and recommend a combined course in the conclusion. Write at least 250 words.",
      minWords: 250,
      maxWords: 340,
    },
  },
];
