/**
 * GT Writing Chapter A — Task 2: the first four essay families (W-L11).
 *
 * Four General Training masterclass lessons on the opinion, discussion,
 * advantages-and-disadvantages and problem-solution families, taught through
 * everyday subjects (local shops, housing, housework, second-hand buying,
 * litter, neighbours) in the semi-formal register the GT paper expects. Each
 * lesson runs the ten mandated components, carries an original worked
 * mini-model (introduction plus one body paragraph) inside a four-skills
 * block with an analytical table, and plans one fresh practice prompt in
 * front of the learner.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gwritingTask2LessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-t2-opinion",
    title: "GT Task 2 — Opinion essays",
    description:
      "The agree-or-disagree family on everyday subjects: reading the claim as printed, freezing a stated position with reasons drawn from daily life, and holding the semi-formal register that familiar topics quietly threaten.",
    objectives: [
      "read an everyday opinion prompt for the exact claim it prints and the verdict its instruction verb demands",
      "state a position early — outright or with one named reservation — and hold it across every paragraph",
      "build reasons from ordinary life, each with a mechanism and an honest everyday example",
      "keep the semi-formal register that an everyday topic quietly invites you to break",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "General Training opinion essays put a claim about ordinary life in front of you — shops, holidays, homes, families — and ask the bluntest question on the paper: do you agree? The familiarity is the trap. Because you already hold opinions on these subjects, it is easy to chat instead of argue, and easy to answer the version of the topic living in your memory instead of the claim actually printed. This lesson builds the two habits that earn the marks: a position stated in the opening lines and defended without interruption, and a composed, courteous register held from the first word to the last.",
        beforeYouStart: [
          "You can find a prompt's instruction verb — the sentence that tells you what to produce — before planning anything.",
          "You can build a body paragraph that makes a point, explains how it works and grounds it in a scene from daily life.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 2 — an essay of at least 250 words in about 40 minutes, worth roughly twice the letter"],
          ["Task & question types", "Opinion ('Do you agree or disagree?') prompts on everyday subjects such as local shops, homes and family life — one of the essay families shared with the Academic test"],
          ["What is assessed", "Task Response above all: a position stated early and kept, supported by developed everyday reasons and examples"],
          ["Why this matters", "An essay that hedges or wanders between camps reads as an uncommitted answer, and the cost on Task Response is commonly estimated at up to two bands"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "The opinion family in General Training prints a claim about ordinary life and asks you to judge it. One prompt describes a town rule that keeps small shops closed on public holidays, reports that some people want shopkeepers free to set their own opening hours, and then asks the blunt question: do you agree? Two reading jobs come before any planning. First, find the claim's edges — small shops, public holidays, freedom to open — because the essay must judge this rule, not shopping habits in general. Second, read the instruction verb; when 'to what extent' is added, the prompt is inviting a calibrated answer such as 'almost entirely' or 'only on defined points'. Everyday claims feel so well known that many candidates argue with the topic in their heads; underline the boundary words and argue with the words on the page.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "This family contains one deliverable: your verdict, defended. No rival view is owed a paragraph, and the other side appears at most as an objection you meet inside your own paragraph. The unwritten half of the task is register: the subject is everyday, but the essay is still an essay — uncontracted, neutral and courteous, the voice of a thoughtful column in a local paper rather than a voice note to a friend. And notice the family's classic non-answer: 'In this essay I will discuss both sides' announces a route instead of taking a side, and the examiner finishes the introduction still holding an unanswered question.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "From printed claim to frozen position",
        intro: "Three minutes of paper work decide the essay's direction.",
        steps: [
          {
            title: "Step 1: Two columns, filled with everyday nouns",
            text: "Copy the claim's key words to the top of your planning space and draw two columns beneath them: reasons to agree, reasons to disagree. Fill both with short nouns rather than sentences — 'staff who want the day off', 'weekday workers', 'family lunches', 'quiet streets' — and spend the last half-minute adding a consequence against the two strongest items in each column. A plan on paper can be checked; a plan in the head quietly rewrites itself halfway through the essay.",
            examples: [
              {
                english: "Holiday-shopping columns: FOR opening — errands finally possible, matches the supermarket's freedom, small owners need the trade; AGAINST — staff deserve the rest, families gather on those dates, closures make the day feel special.",
                note: "Nouns and short phrases, not prose — the speed is the point.",
              },
            ],
          },
          {
            title: "Step 2: Test every reason for buildability",
            text: "A reason is buildable when you can say how it works in a sentence or two and show it working in one ordinary scene. Sweep both columns and cross out anything you could only assert: 'tradition matters' is a slogan until you can name what the tradition does for a family or a street. Two buildable reasons beat five slogans every time, because paragraphs are paid for development.",
            examples: [
              {
                english: "'The rule protects nobody' survives the test — the mechanism (cinema and supermarket staff already work those dates) is statable, and the scene (a shuttered high street beside an open supermarket) is easy to show.",
                note: "Buildability is decided on paper, before the reason owns a paragraph.",
              },
            ],
          },
          {
            title: "Step 3: Choose the column you can develop, and set the dial",
            text: "You are free to argue either side — the examiner never learns your real opinion, only your paragraphs. Pick the column holding the two strongest buildable reasons, then decide how far you go: wholly in favour, largely in favour, or in favour with one named exception. The dial setting belongs in the thesis itself, not in a hedge discovered halfway through body two.",
            examples: [
              {
                english: "Dial settings for this prompt: wholly ('without hesitation'), largely ('in almost every case'), or with an exception ('except on the two or three dates whole families gather').",
                note: "Each setting is lawful; drifting between them is not.",
              },
            ],
          },
          {
            title: "Step 4: Freeze the thesis in one sentence",
            text: "Reduce the position to a single sentence containing the side, the dial and both reasons in miniature, and write it at the top of the plan. That sentence is now the essay's law: every topic sentence must visibly serve it, and the conclusion will restate it in fresh words. A planned paragraph that cannot be checked against the thesis belongs to a different essay.",
            examples: [
              {
                english: "'I support opening without reservation: the rule protects nobody it claims to protect, and it inconveniences precisely the people whose weekdays are already spoken for.'",
                note: "Side, dial and two reasons — the essay now has a spine to write against.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "Choose developability, not sincerity. If your honest column holds one buildable reason and the other holds three, write the essay you can feed — the examiner marks paragraphs, not convictions. A partly-agreeing position is lawful and often strong, provided the exception is named inside the thesis rather than discovered in body two: 'shopkeepers should be free to open, except on the handful of dates on which whole families gather' is a fence with a named gate in it. What is never lawful is silence or drift: a position that first appears in the conclusion cannot have been clear throughout, and two essays inside one answer serve neither camp.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "One reason per paragraph, and each reason must argue rather than describe. 'Holidays matter to families' is a topic; 'the closure protects only small-shop staff while cinema and supermarket staff already work those dates' is an argument, because it shows how the rule works and for whom. Give each reason its mechanism in a sentence or two, and let the paragraphs pull in different directions — a practical reason about errands in one, a fairness reason about who the rule actually binds in another. Meet the strongest objection once, inside a paragraph, and answer it inside a single clause so it leaves smaller than it arrived.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Examples come from the life you already know, and General Training topics make this easy: one street of shuttered shops beside one open supermarket, one hospital worker whose only free day is a public holiday, one shopkeeper who would happily open for the morning rush and close at noon. Frame every invention honestly — 'a typical', 'in most neighbourhoods', 'if' — and keep the scale at a single person or street; a made-up percentage dressed as research reads as fabrication and costs credibility faster than plainness ever does. One well-chosen example per paragraph is the family's full quota.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "Three moves in two or three sentences: first, why the question exists in daily life; second, the claim rephrased in your own words — the earliest proof that you read it; third, your position with the dial and both reasons in miniature. No announcement of intent, no dictionary opening, no sentence borrowed from the prompt. An examiner who reads only your first paragraph should already know which way the essay leans and roughly why — that is the test of a good opinion introduction.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "The paragraph runs: a topic sentence naming the reason; a sentence or two of mechanism; one everyday example; and a closing clause that returns to the position. Register stays semi-formal throughout — 'do not' rather than 'don't', 'children' rather than 'kids', 'many people' rather than 'loads of people' — because the everyday subject will invite contractions in your head and you must keep them off the page. Vary the paragraph openings too: 'The strongest reason is practical' and 'A second consideration is fairness' advertise an argument, while 'Firstly, Secondly, Moreover' advertises a list.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Restate the position in fresh words, add at most one closing implication for daily life, and stop. No new reasons, no new examples, no last-minute reversal. Two sentences are enough: the verdict, then its sharpest everyday consequence. The conclusion is the examiner's last sight of your position, and it must match the introduction's dial exactly — a 'largely' in paragraph one cannot become a 'completely' in the final line.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "The prompt's nouns will try to become the essay's drumbeat. Give every load-bearing idea two or three variants and spend them deliberately: 'small shops' can become 'neighbourhood stores', 'local retailers', 'the corner shop'; 'public holidays' can become 'days of national rest', 'festive dates', 'these closures'. Chain your references — 'shopkeepers … they … this freedom' — so the subject moves without being renamed at every turn. Vary the verbs of opinion as well: agree, support, accept, side with. The ear that hears one noun four times is the examiner's ear.",
      },
      { type: "heading", text: "Worked example — claims, dials, scenes" },
      {
        type: "example",
        title: "The family in everyday action",
        items: [
          {
            english: "PROMPT: 'In some towns, small shops are not permitted to open on public holidays. Some people think shopkeepers should be free to open whenever they choose. Do you agree or disagree?'",
            note: "Boundary words: small shops, public holidays, freedom to open — the essay judges this rule, not shopping in general.",
            domain: "exam",
          },
          {
            english: "THESIS, wholly committed: 'I support this freedom without reservation: the rule protects nobody it claims to protect, and it inconveniences precisely the people whose weekdays are already spoken for.'",
            note: "One sentence, one side, two reasons in miniature — the essay's spine before a paragraph exists.",
            domain: "exam",
          },
          {
            english: "THESIS, with a named exception: 'Shopkeepers should be free to open on public holidays, except on the handful of dates on which whole families gather and the streets deserve their quiet.'",
            note: "The reservation lives inside the thesis, so the essay never has to argue against itself later.",
            domain: "exam",
          },
          {
            english: "HONEST everyday example: 'A hospital worker on a Monday-to-Friday roster can reach the chemist, the bank counter and the butcher only on days when her own workplace is closed — and those are exactly the days the rule closes theirs.'",
            note: "One person, one errand list, honestly framed — no invented survey anywhere in sight.",
            domain: "everyday",
          },
          {
            english: "REGISTER repair: 'Honestly, loads of shopkeepers don't want to open anyway' becomes 'In practice, many shopkeepers would choose to keep the holiday, and a voluntary opening rule respects exactly that choice.'",
            note: "The same fact, lifted into essay register — the second version could sit in a serious column.",
            domain: "work",
          },
          {
            english: "OBJECTION met, not hosted: 'Admittedly, some staff would rather not work a festive date; a small shop, though, opens only when its owner chooses to, and few owners open without volunteers.'",
            note: "The counter-view appears in one clause, is answered in the next, and never receives a paragraph of its own.",
            domain: "community",
          },
          {
            english: "BRAINSTORM for the practice prompt — living near family: FOR staying close (help with children, company for ageing parents, shared bills); AGAINST (better pay elsewhere, room to grow independently, thin local job markets).",
            note: "Both columns filled before either is chosen — the choice is made on evidence, not habit.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "I will discuss both sides of the question and then give my opinion at the end, so the essay looks balanced.",
            right: "State the position in the introduction, defend it through the body, and restate it in the conclusion.",
            reason: "The announcement describes a journey nobody asked for and postpones the family's only deliverable; the examiner reaches the body still holding an unanswered question, and the both-sides essay is a different family's job.",
          },
          {
            wrong: "The topic is shops and holidays, so a friendly conversational tone will do: 'don't', 'kids', 'a lot of stuff'.",
            right: "Hold the semi-formal register: uncontracted verbs, neutral vocabulary, no chat idiom — an everyday subject argued in a serious voice.",
            reason: "Register is graded among the language criteria, and familiarity of subject never licenses casual writing; the GT essay's everyday topics are where register slips happen most.",
          },
          {
            wrong: "I genuinely agree, but I can only build one reason, so I will pad the essay with two reasons from the other side.",
            right: "Argue the side you can develop: choose the position with two buildable reasons, whatever you privately feel.",
            reason: "The examiner cannot see your convictions, only your paragraphs, and an essay fed on one reason and padded with the opposition's argues against itself for half its length.",
          },
          {
            wrong: "My second body paragraph makes my first point again with a different example.",
            right: "Give each paragraph a different reason with its own mechanism — practical convenience in one, fairness or family life in the other.",
            reason: "A repeated point registers as one point, and the essay's effective development halves however many paragraphs dress the page.",
          },
        ],
      },
      { type: "heading", text: "The model — an opinion introduction and one body paragraph" },
      {
        type: "four-skills",
        title: "Four skills around one everyday opinion essay",
        reading: {
          text: "On the first of May, the high street of a market town tells two stories at once. The supermarket at the end of the street is open, its car park full by ten o'clock. The baker's, the chemist's and the family hardware shop are shut by law, their owners at home for the day. A handwritten note taped to one door reads: 'Back on Tuesday — sorry.' A woman with a hospital lanyard photographs the note, shakes her head once, and walks towards the supermarket queue.",
          task: "Read once, then name the two everyday details an essay in favour of free opening could use as support.",
        },
        writing: {
          task: "Task 2 (General Training). In some towns, small shops are not permitted to open on public holidays. Some people think shopkeepers should be free to open whenever they choose. Do you agree or disagree? For this lesson, write the introduction and the first body paragraph only (about 150 words), with your position stated by the second sentence.",
          guide: [
            "Introduction: one sentence on why the question arises in daily life, the claim rephrased, then your position with the dial and both reasons in miniature.",
            "Body paragraph: the reason that touches people most — the weekday worker; give the mechanism, then the honest everyday scene, then a clause returning to the position.",
            "Keep the register semi-formal throughout: no contractions, no chat idiom, however ordinary the subject feels.",
          ],
          model: "Introduction: On public holidays, the high street of many towns falls silent while the supermarket tills keep ringing, and that contrast has turned an old rule into a live question. Some argue that small shopkeepers should be free to open on these days exactly as they choose. I support that freedom without hesitation, for two reasons rooted in ordinary life: the rule protects nobody it claims to protect, and it inconveniences precisely the people whose weekdays are already spoken for. Body paragraph: The stronger reason is the situation of the weekday worker. Small shops keep the hours that suit people with free mornings, so anyone whose day belongs to a hospital roster, a factory shift or a school timetable loses them entirely; for such people a public holiday is not a day of rest but the one date the chemist, the bank counter and the butcher are all reachable at once — and the rule takes that date away. A nurse finishing a Monday-to-Friday week, for instance, can clear a month of errands in one open morning, or else spread them across stolen lunch hours for weeks. Freedom to open restores that morning, and it asks nothing of the shops that would rather stay shut.",
        },
        listening: {
          script: "Reading your draft as a marker: the position is unmistakable by the second sentence, and both paragraphs serve it — that is this family's whole contract, honoured. My one worry is register. The phrase 'a lot of stuff to get done' appears in your second paragraph, and 'a great deal to arrange' would keep the voice level. The nurse example is exactly the right scale — calm, ordinary, believable — and one more like it in the second body would complete the essay.",
          task: "Listen once and note the register repair the marker requests, and the quality of the nurse example that is praised.",
        },
        speaking: {
          task: "Say your position aloud in thirty seconds, as if explaining it to a neighbour over the garden fence but in essay language: side, dial, two reasons.",
          frames: [
            "I support this freedom without hesitation, mainly because…",
            "My second reason concerns…",
            "The obvious objection is …, but…",
          ],
          checklist: [
            "Did you name how far you agree?",
            "Did both reasons come from ordinary life?",
            "Did the objection leave smaller than it arrived?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Task response", "The verdict arrives in the introduction's second sentence with its dial set and both reasons in miniature, so the essay's only deliverable is paid before the body begins."],
          ["Everyday development", "The body paragraph runs reason, mechanism, scene and return — a nurse's errand morning — at the scale of a single working life, honestly framed."],
          ["Register", "Uncontracted verbs and neutral vocabulary hold the semi-formal voice although the subject is a high street; nothing in the model chats."],
          ["Cohesion", "The final clause restores 'that morning', closing the loop the topic sentence opened and handing the reader back to the thesis."],
          ["Paraphrase", "The prompt's wording is rephrased on arrival — 'not permitted to open' becomes 'falls silent' — so no echo of the question survives into the body."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Underline the claim's boundary words and the instruction verb; fill two planning columns and test every reason for buildability before choosing a side."],
          ["While the clock runs", "One reason per paragraph, each checked against the frozen thesis; meet the counter-view once, inside your own paragraph, in a single clause."],
          ["If you are stuck", "Re-read the thesis and ask which planned reason is still unspent — the next paragraph is that reason, not a brand-new idea."],
          ["Final minutes", "Confirm the conclusion's dial matches the introduction's exactly, sweep for contractions and chat idiom, and hunt any prompt noun repeated more than twice."],
        ],
      },
      {
        type: "summary",
        points: [
          "The opinion family owes one deliverable: a stated position, defended from the introduction to the conclusion.",
          "Read the claim's boundary words and judge the claim as printed — everyday familiarity is where precision goes to die.",
          "Choose the position you can develop — two buildable reasons — and set the dial honestly: wholly, largely, or with one named exception.",
          "Keep the semi-formal register: the everyday subject argues in a serious voice, without contractions or chat idiom.",
          "Vary the topic's nouns and chain your references so the prompt's words never become the essay's drumbeat.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What does a prompt's instruction verb tell you before anything else?",
            options: ["Which family the essay belongs to, and therefore what it must deliver", "How many words the essay needs", "Which examples the examiner prefers"],
            correctIndex: 0,
            explanation: "The verb is the task's identity card: 'agree or disagree' prints one deliverable, while 'discuss both views' prints three, and the whole plan follows from that count.",
            from: "Analysing question requirements",
          },
          {
            question: "In a five-minute plan, what must be fixed for each body paragraph?",
            options: ["Its job — the single reason it will develop", "Its exact word count", "Its opening phrase"],
            correctIndex: 0,
            explanation: "A plan earns its minutes by assigning one reason per paragraph; the words look after themselves once every paragraph has a job.",
            from: "Planning",
          },
          {
            question: "What does a consistent register require across a General Training essay?",
            options: ["One voice, held from the first sentence to the last — here, semi-formal", "Formal language in every paragraph regardless of recipient or topic", "A warmer tone wherever the topic turns personal"],
            correctIndex: 0,
            explanation: "Register is a dial, not a costume: the GT essay sits at semi-formal, and the mark rewards holding that setting rather than drifting with the subject's mood.",
            from: "Tone",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What single thing does the 'Do you agree or disagree?' instruction ask your essay to deliver?",
        hints: ["Ask what the examiner is hunting for from the first paragraph."],
        options: [
          { id: "a", text: "A fair summary of both camps before any verdict." },
          { id: "b", text: "A stated position on the printed claim, defended through every paragraph." },
          { id: "c", text: "A description of how the rule under discussion came into force." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A stated position on the printed claim, defended through every paragraph.",
          "The family's contract is a verdict: the examiner looks for your position early and then checks that every paragraph serves it. A summary answers a discussion prompt, and a history answers a background question that nobody printed.",
          "(a) is the discussion family's job, not this one; (c) spends the essay on material the prompt never asked for.",
        ),
        tags: ["gwriting", "t2", "opinion", "thesis"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Run this introduction past the family's contract.",
        hints: ["Look for the sentence a stranger could quote as the writer's verdict."],
        passageTitle: "An introduction under inspection",
        passage: "The question of whether small shops should open on public holidays is a very interesting one in many countries today. There are good arguments on both sides of this matter, and in this essay I will discuss them and give my opinion at the end after considering everything carefully.",
        question: "Why does this introduction fail the family's contract?",
        options: [
          { id: "a", text: "It is too short to introduce the topic properly." },
          { id: "b", text: "It announces a tour of both sides and postpones the verdict — the position the prompt demands is nowhere in the paragraph." },
          { id: "c", text: "Its vocabulary is too simple for the test." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It announces a tour of both sides and postpones the verdict — the position the prompt demands is nowhere in the paragraph.",
          "The paragraph is fluent, which is what makes the failure expensive: 'I will discuss' is a route description, and the examiner leaves the introduction without the one thing the question asked for — your answer. State the position by the second or third sentence and let the body defend it.",
          "(a) miscounts — two sentences introduce the topic adequately; (c) invents a vocabulary problem where the real problem is the missing verdict.",
        ),
        tags: ["gwriting", "t2", "opinion", "thesis"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Register control. Complete the semi-formal version of this everyday sentence with ONE modal verb.",
        hints: ["Which modal plus 'rather' expresses preference in a neutral voice?"],
        sentence: "Many shopkeepers ___ rather keep the holiday for their own families, and a voluntary opening rule respects that choice.",
        acceptedAnswers: ["would"],
        feedback: fb(
          "'Would rather' — the neutral register of preference.",
          "The phrase carries preference in an uncontracted, essay-ready voice. The chat version of the same idea — 'they'd rather' — contracts, and contractions are the most common register slip in General Training essays written on familiar subjects.",
          "'Should' turns a preference into an obligation, and 'must' turns it into a rule, so neither completes the sentence as written.",
        ),
        tags: ["gwriting", "t2", "opinion", "register"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence meets the counter-view in the way this family rewards?",
        hints: [],
        options: [
          { id: "a", text: "Some people strongly disagree with this view for several important reasons which will now be explained." },
          { id: "b", text: "It is true that some owners would rather rest, but a small shop opens only when its owner chooses, and nobody is forced to unlock a door." },
          { id: "c", text: "The other side has some valid points, so perhaps the truth lies somewhere in the middle after all." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It is true that some owners would rather rest, but a small shop opens only when its owner chooses, and nobody is forced to unlock a door.",
          "One clause names the objection fairly; the main clause answers it and hands nothing back. The counter-view is met inside your own paragraph and leaves smaller than it arrived — exactly the discipline this family pays for.",
          "(a) opens the door to a second essay instead of answering; (c) quietly abandons the dial you set in the introduction.",
        ),
        tags: ["gwriting", "t2", "opinion", "counter-view"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the three moves of the opinion introduction, in order.",
        hints: [],
        question: "In order, what three moves does a General Training opinion introduction make?",
        acceptedAnswers: [
          "why the question arises in daily life, the claim rephrased, then your stated position with its reasons",
          "everyday context, the claim in fresh words, the position and its dial",
          "context, rephrase, position — in that order",
          "a scene from ordinary life, the printed claim reworded, then the verdict",
        ],
        keywords: ["context", "position"],
        feedback: fb(
          "Why the question arises in daily life, the claim rephrased, then your stated position.",
          "Two or three sentences carry all three moves: a scene from ordinary life, the printed claim in your own words as proof of reading, and the verdict with its reasons in miniature. An examiner reading only the introduction should know exactly where the essay stands.",
          "Answers that begin with the position skip the context move; answers that end without one describe some other family's introduction.",
        ),
        tags: ["gwriting", "t2", "opinion", "introduction"],
      }),
    ],
    homework: [
      "Write two versions of a thesis for the practice prompt — one wholly in favour of living near family, one with a named exception — and keep the version both body paragraphs could serve; note in one line why the other was abandoned.",
      "Take your last practice essay and sweep it for register: circle every contraction, chat idiom and slang word, and rewrite each in the semi-formal voice.",
    ],
    assignment: {
      title: "Opinion essay, timed",
      instructions:
        "Write a full General Training Task 2 essay in 40 minutes: 'Some people believe adults should live near their parents and siblings even if it limits their job choices. Do you agree or disagree?' Plan for four minutes — two columns, dial, frozen thesis — then write at least 250 words in the semi-formal register, meeting the counter-view inside one body paragraph and restating your position in the conclusion in fresh words.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-t2-discussion",
    title: "GT Task 2 — Discussion essays",
    description:
      "The two-camp family on everyday questions — city apartment or village house, chores or free childhoods — presenting both printed views at full strength and landing your own verdict where the examiner finds it first.",
    objectives: [
      "separate a discussion prompt's three deliverables — view one, view two, your verdict — and deliver all three",
      "present each printed view in its strongest everyday form, with equal architecture for the camp you reject",
      "state your verdict at the end of the introduction and keep it in view through to the conclusion",
      "attribute both camps in varied, rephrased language without echoing the prompt's wording",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Discussion prompts hand you a quarrel you did not start. Two views arrive printed on the page — city apartments against village houses, daily chores against free childhoods — and the instruction asks you to present both and then deliver a verdict of your own. Three jobs, one essay. The failure is the most human one in writing: you back one camp, argue it warmly, and reduce the other to a paragraph of straw. This lesson builds the structure that gives both camps a fair hearing, and the discipline of stating your verdict where the examiner meets it first — the end of the introduction, not the final line of the essay.",
        beforeYouStart: [
          "You can rephrase a printed statement without borrowing its words.",
          "You can hold one paragraph to one job — the pattern each camp's presentation will reuse.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 2 — the everyday discursive essay, worth roughly twice the letter"],
          ["Task & question types", "Discussion prompts — 'Discuss both these views and give your own opinion' — on ordinary living questions such as housing, upbringing and daily habits"],
          ["What is assessed", "Task Response: both printed views presented and developed, plus a relevant opinion of your own that stays visible"],
          ["Why this matters", "Dropping a camp — usually the one you reject — reads as answering two thirds of the task, a shortfall commonly estimated at a band or more of Task Response"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "The family's prompt has a fixed architecture: a sentence of context, then camp A ('Some people prefer…'), then camp B ('Others would rather…'), then the instruction to discuss both views and give your own opinion. On the GT paper the camps are ordinary — an apartment in the city against a house in a village — and that ordinariness is where the reading risk hides: the printed version of each camp is usually more careful than the version living in your memory, so read what each side actually claims before planning. And 'discuss' means present and develop; a view that appears in a single sentence has been mentioned, and the instruction is still waiting for it to be discussed.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "Count three deliverables: camp A, presented fairly; camp B, presented fairly; your verdict on the pair. Essays in this family are graded against all three, and the missing one is nearly always the camp the writer rejects. Notice what is not a deliverable: a debate reported so neutrally that no opinion ever lands, or a winner declared so early that the losing camp never gets its hearing. Your verdict may rest on one camp, on parts of both, or on a blend that leans — but it may not arrive late, arrive never, or arrive disguised as a summary of the argument.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "Two camps, two boxes, one verdict",
        intro: "The plan gives each camp its own space before you are allowed to pick a side.",
        steps: [
          {
            title: "Step 1: Fill each camp's box with its own best reasons",
            text: "Under the prompt, draw two boxes — one per camp — and fill each with the reasons that camp's own supporters would give, not the reasons you find easiest to attack. Two or three items per box, in note form. When a box comes out thin, you have found the camp that needs your imaginative effort, and that is exactly where this family's marks are hiding.",
            examples: [
              {
                english: "Apartment box: the commute collapses to a walk, no ladder or ladder-work on weekends, evenings out cost nothing in taxis. Village box: a garden for children, streets quiet enough for unsupervised play, neighbours who know each other's names.",
                note: "Reasons a city-dweller and a villager would each recognise as their own — that is the fairness test.",
              },
            ],
          },
          {
            title: "Step 2: Choose the verdict from the boxes, not from your past",
            text: "With both boxes filled, decide where your opinion actually sits and write it as one sentence. Three lawful verdicts exist: camp A, camp B, or a blend that leans — a blend that names its criterion (life stage, cost, health) rather than shrugging. The sentence you write now will close your introduction, and every paragraph is built in its shadow.",
            examples: [
              {
                english: "Blend verdict, leaning: 'Both arrangements deliver something real, but I would choose the village house while children are small — a garden and a safe street are things a city flat cannot post.'",
                note: "The criterion (small children) is named, so the lean is a decision rather than a hedge.",
              },
            ],
          },
          {
            title: "Step 3: Map the paragraphs around the verdict's needs",
            text: "Body one presents camp A at full strength; body two presents camp B the same way, usually carrying the verdict's development on its shoulder; the conclusion restates the verdict in fresh words without replaying the whole debate. For a leaning blend, let each body paragraph end one sentence closer to the verdict — the map bends toward it from both directions.",
            examples: [
              {
                english: "Map for the housing prompt: paragraph one, the apartment camp's case on recovered hours; paragraph two, the village camp's case on childhood, closing on the verdict's criterion; conclusion, the lean restated in new words.",
                note: "Both camps get developed; only one gets the last word.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "Your verdict may sit squarely on one camp or between them, but a between-verdict must still lean and must say what tips it. Everyday questions often turn on life stage — the flat suits the decade of long hours, the house suits the decade of small children — and naming that openly is a strength: it gives the essay a principle to judge by instead of a mood. What you may not do is hide behind 'it depends on the person': the prompt asked for your opinion, and 'it depends' answers nothing until it is fixed to a named condition and a lean.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "A camp paragraph is a body paragraph arguing on someone else's behalf: a topic sentence naming the camp's claim, an explanation in that camp's own logic, one everyday example, and a closing sentence that hands the argument on — never one that sneers. Fairness discipline is measurable: the camp you reject receives the same length, the same seriousness and the same kind of example as the camp you back. The examiner is grading your referee skills alongside your opinions, and a generous presentation of the side you defeat is the clearest evidence of both.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Invent examples for both camps, at everyday scale, framed honestly. For the apartment camp: a junior worker who walks home in twelve minutes and still meets friends at nine. For the village camp: children who spend a whole Saturday in a garden nobody has to supervise. The test of fairness is warmth — the example invented for the camp you reject should be as sympathetic as the one invented for your own, because the examiner reads the generosity as evidence of a fair discussion. One example per camp is enough; three invented studies is two too many.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "Three moves in two or three sentences: why the choice divides people; both camps reported in one balanced sentence, rephrased; your verdict, stated plainly. The verdict belongs at the end of the introduction because it survives a time squeeze and because it changes how the body is read — once the examiner knows where you stand, every presentation is checked against your verdict rather than waiting for one to appear. An introduction without the verdict is a tour brochure; the essay is the tour.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "In the body, reporting verbs do the attribution: 'the first camp builds its case on', 'village supporters would point to', 'this view answers'. Vary them deliberately and never quote the prompt's own sentences back. Each paragraph ends by handing the argument forward — the strongest presentation closes with the camp's best card, not with your refutation, which waits for the verdict's paragraph or the conclusion. Register stays semi-formal: 'children' rather than 'kids', uncontracted verbs, warmth carried by content rather than slang.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Restate the verdict in fresh words; for a blend, name the principle that fuses the halves; add at most one closing implication. No new camps, no new examples, and above all no surprise reversal on the final line — a conclusion that switches sides unpicks the essay's whole thread. Two sentences is the right size: the lean, then the reason it leans.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "A two-camp essay doubles the echo risk: both camps get named in every paragraph, and 'some people believe' becomes a tick. Build a reporting kit of five phrases before drafting and spend them across the essay; chain the camps by reference once introduced — 'the apartment camp … this view … its rival'. Keep each camp's key nouns clear of the prompt's wording: where the prompt says 'apartment' and 'village', your essay can say 'a flat near the office' and 'a house on a quiet street', so the reader hears two camps arguing rather than one echo repeating.",
      },
      { type: "heading", text: "Worked example — camps, verdicts, fairness" },
      {
        type: "example",
        title: "The family in everyday action",
        items: [
          {
            english: "PROMPT: 'Some people prefer to live in an apartment in the city. Others prefer to live in a house in a village. Discuss both these views and give your own opinion' — two camps, one life choice, and the essay judges arrangements rather than people.",
            note: "The instruction names all three jobs: camp one, camp two, your verdict.",
            domain: "exam",
          },
          {
            english: "VERDICT, stated up front: 'Both arrangements deliver something real, but I would choose the village house while children are small — a garden and a safe street are things a city flat cannot post.'",
            note: "A leaning blend: the criterion is named, so the verdict is a decision rather than a shrug.",
            domain: "exam",
          },
          {
            english: "FAIR opener for the rejected camp: 'The apartment camp builds its case on recovered hours: a flat near the workplace hands back the commute that village life spends.'",
            note: "Strongest claim first, attributed cleanly, no sneering word in sight.",
            domain: "exam",
          },
          {
            english: "HONEST example for the camp you reject: 'A junior accountant walks home in twelve minutes, eats a proper dinner, and can still meet friends at nine without checking a train timetable.'",
            note: "As warm as any example your own camp receives — generosity is the fairness discipline's proof.",
            domain: "work",
          },
          {
            english: "SNEER caught and repaired: 'People who like flats just want nightlife' becomes 'flat-dwellers weight convenience and connection more heavily than space.'",
            note: "Tone is the fairness discipline's other half.",
            domain: "community",
          },
          {
            english: "STUDY ritual: before allowing yourself a verdict, count the reasons in each planning box; if the rejected camp's box is thinner, spend one more minute on it before writing a word.",
            note: "Fairness, measured on paper rather than felt.",
            domain: "study",
          },
          {
            english: "CAMP example for your own side: 'On a village Saturday, the children spend the whole day in the garden while the street outside stays quiet enough for a game of football — no gate to check, no traffic to count.'",
            note: "Everyday scale again: the example shows the camp's claim working, not just asserted.",
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
            wrong: "I agree with the village camp, so the apartment camp gets one dismissive line on the way past.",
            right: "Give the camp you reject a full paragraph in its strongest form, and defeat it from your verdict's ground.",
            reason: "The instruction prints two presentations before your opinion even appears; an undeveloped camp is an undelivered deliverable, and Task Response records the absence however fine the rest of the essay.",
          },
          {
            wrong: "My opinion belongs in the conclusion, where verdicts traditionally live.",
            right: "State the verdict at the end of the introduction, echo it where the body earns it, and restate it in the conclusion.",
            reason: "A position that first appears in the final paragraph cannot have been visible throughout — the examiner's pass through the body finds nothing to track, and a time squeeze can delete the conclusion altogether.",
          },
          {
            wrong: "'Some people believe X. Some people believe Y. Some people believe…' serves as my only attribution.",
            right: "Build a reporting kit — 'the first camp builds its case on', 'village supporters would point to', 'this view answers' — and spend its phrases across the essay.",
            reason: "One attribution phrase on repeat reads as limited range, and quoting the prompt's sentences back shows no paraphrase control; both are graded on this paper.",
          },
          {
            wrong: "The topic is homes and children, so I will write warmly and casually, the way I talk about it with friends.",
            right: "Hold the semi-formal register: warmth of content, coolness of voice — uncontracted, neutral, courteous.",
            reason: "Everyday subjects pull GT candidates toward chat harder than any academic topic would, and the register expectation does not move with the subject's mood.",
          },
        ],
      },
      { type: "heading", text: "The model — a discussion introduction and the rejected camp's paragraph" },
      {
        type: "four-skills",
        title: "Four skills around one everyday discussion essay",
        reading: {
          text: "Two sisters describe the same choice. The elder stayed in the city: 'I leave work at six and I am cooking by half past; on Fridays the whole evening is still ahead of me.' The younger moved to a village when her son was born: 'He is out in the garden every Saturday, and I have not worried about traffic once. I do miss the cinema, though — it is a forty-minute drive each way now.' Their mother, they agree, never had the choice at all.",
          task: "Read once, then decide which camp each sister could be quoted in, and name the cost each one mentions.",
        },
        writing: {
          task: "Task 2 (General Training). Some people prefer to live in an apartment in the city. Others prefer to live in a house in a village. Discuss both these views and give your own opinion. For this lesson, write the introduction and the paragraph presenting the camp you reject (about 160 words).",
          guide: [
            "Introduction: one sentence on why the housing choice divides people, both camps in one balanced sentence, verdict at the end with its criterion named.",
            "Rejected-camp paragraph: its strongest claim first, its own logic, one warm everyday example — no sneering and no refutation inside the presentation.",
            "Vary the attribution as you go; the prompt's sentences must never reappear in your prose.",
          ],
          model: "Introduction: Where we live shapes what our days can hold, and few choices divide families more tidily than city against village. Some people prefer an apartment in the city, with work, shops and evenings within walking distance; others would rather have a house in a village, where space is cheap and the streets are quiet. Both arrangements deliver something real, but I would choose the village house while children are small, because a garden and a safe street are things a city flat cannot post. Camp paragraph, presented at full strength: The apartment camp builds its case on recovered hours. A flat near the workplace hands back the commute that village life spends: the junior accountant who walks home in twelve minutes eats a proper dinner, keeps an evening class, and can still meet friends at nine without checking a timetable, while the same evening from a village begins with a drive and ends early. Convenience of that kind compounds quietly — repairs are a phone call to the building manager rather than a weekend on a ladder, and everything from pharmacies to plumbers sits within a quarter of an hour. For anyone building a career or living alone, the city flat converts its location into time, and time is the one thing the village house, for all its space, cannot manufacture.",
        },
        listening: {
          script: "Feedback on your draft: both camps are present and both are developed, which is this family's first law, and your rejected camp actually gets the fuller paragraph — the fairness reading is easy to award. Two repairs. First, the phrase 'some people believe' appears three times; a reporting kit of five phrases would vary the page. Second, your verdict names its criterion well — 'while the children are small' is doing real work — but let one body paragraph end visibly on that criterion so the lean is felt before the conclusion repeats it.",
          task: "Listen once and note the two repairs, and the phrase the reviewer counts.",
        },
        speaking: {
          task: "Argue the camp you reject, out loud, for forty-five seconds — at its strongest, with no hint of your own verdict.",
          frames: [
            "The strongest case for this view rests on…",
            "Its supporters would point to…",
            "What this argument understands is…",
          ],
          checklist: [
            "Did the camp sound like its best supporter wrote it?",
            "Did the everyday example fit the camp's logic rather than yours?",
            "Did every word stay courteous?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Task response", "All three deliverables are visible in two paragraphs: both camps named and balanced, the verdict closing the introduction with its criterion named."],
          ["Fairness", "The rejected camp receives the fuller paragraph — its own logic, its own warm example, and no refutation inside its presentation."],
          ["Register", "Everyday subject, essay voice: uncontracted and neutral throughout, with warmth carried by content rather than idiom."],
          ["Cohesion", "Each paragraph closes by handing the argument on, so the camps read as evidence assembling toward a verdict already announced."],
          ["Language range", "Attribution varies — 'builds its case on', 'its supporters would point to' — and both camps are rephrased on arrival, so the prompt's wording echoes nowhere."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read both printed views twice and box each camp's best reasons before allowing yourself a verdict; check that both boxes are equally full."],
          ["While the clock runs", "One camp per paragraph with varied attribution; keep the verdict visible from the introduction and let the body earn it."],
          ["If you are stuck", "Return to the rejected camp's planning box and develop its strongest unbuilt reason — the missing third of the task usually hides there."],
          ["Final minutes", "Confirm all three deliverables are locatable — camp one, camp two, your opinion — and check that no attribution phrase has served twice."],
        ],
      },
      {
        type: "summary",
        points: [
          "A discussion prompt prints three deliverables: view one, view two, your verdict — plan all three, deliver all three.",
          "Present each camp in its strongest everyday form: equal length, equal seriousness, equally generous examples, especially for the camp you reject.",
          "State your verdict at the end of the introduction; an opinion that first surfaces in the conclusion cannot have been clear throughout.",
          "A blend verdict is lawful when it leans: name the criterion — life stage, cost, health — that tips your choice.",
          "Hold the semi-formal register and vary your reporting kit; an everyday quarrel argued in chat idiom loses twice.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What does the instruction 'Discuss both these views and give your own opinion' add to the essay's job list?",
            options: ["Two presentations on top of the opinion", "A second topic to choose freely", "A summary of the prompt's background"],
            correctIndex: 0,
            explanation: "The verb prints the deliverables: both camps are owed a fair presentation, and your opinion is owed on top of them, not instead of them.",
            from: "Analysing question requirements",
          },
          {
            question: "What does every paragraph's line in the plan fix?",
            options: ["Its job — the camp or verdict it serves", "Two ideas, balanced evenly", "Whatever fits the word count"],
            correctIndex: 0,
            explanation: "Plans fix jobs, not lengths: one paragraph presents one camp, and the verdict lives where the examiner meets it first.",
            from: "Paragraph organisation",
          },
          {
            question: "Reporting verbs and reference chains serve which scored quality?",
            options: ["Coherence — ideas connected and carried forward without repetition", "Task Response — the count of deliverables", "Grammar — the variety of tenses"],
            correctIndex: 0,
            explanation: "Varied attribution and chained references carry the camps across paragraphs without echo, which is precisely the coherence criterion's ground.",
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
        prompt: "How many deliverables does a discussion prompt print, and what are they?",
        hints: ["Count the jobs named in the instruction before counting words."],
        options: [
          { id: "a", text: "One — your opinion, defended with reasons." },
          { id: "b", text: "Three — both printed views presented fairly, plus your own opinion." },
          { id: "c", text: "Two — the advantages and the disadvantages." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Three — both printed views presented fairly, plus your own opinion.",
          "The instruction names all three jobs in order: each camp is owed a fair, developed presentation, and your opinion is owed on top. Essays in this family are graded against all three, and the missing one is almost always the camp the writer happened to reject.",
          "(a) is the opinion family's single contract; (c) belongs to the weighing family.",
        ),
        tags: ["gwriting", "t2", "discussion", "deliverables"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Audit this essay outline against the family's deliverables.",
        hints: ["Which of the three deliverables never appears?"],
        passageTitle: "An outline under inspection",
        passage: "Essay plan — Introduction: the housing question divides families; report the debate. Body 1: why the village camp wins — a garden for children, quiet streets, neighbours who know each other's names. Body 2: further reasons for the village camp, plus why city flats can feel lonely. Conclusion: repeat that the village camp wins.",
        question: "What has this plan failed to deliver?",
        options: [
          { id: "a", text: "The second view — the apartment camp is never presented on its own terms, so 'discuss both views' is answered on one leg." },
          { id: "b", text: "The opinion — no verdict is stated anywhere in the plan." },
          { id: "c", text: "The examples — the outline contains no everyday cases." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The second view — the apartment camp is never presented on its own terms, so 'discuss both views' is answered on one leg.",
          "The verdict is loud and the everyday material exists, but one printed camp never receives a paragraph: the plan pays two of the three deliverables and loses the fairness reading — this family's signature failure — along with the third.",
          "(b) misreads a plan that states its verdict twice; (c) ignores the garden, the streets and the named neighbours sitting in Body 1.",
        ),
        tags: ["gwriting", "t2", "discussion", "fairness"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Blend verdicts. Complete the rule with the missing noun.",
        hints: ["What must a blend verdict name so that it still leans?"],
        sentence: "A blend verdict is lawful only when it names the ___ that tips the balance toward one camp.",
        acceptedAnswers: ["criterion", "principle", "reason", "standard"],
        feedback: fb(
          "A criterion (or principle) — the thing that tips the balance.",
          "A blend without a named criterion is a shrug dressed as balance: the examiner needs to know what your choice turns on — life stage, cost, health — so the verdict can be tracked as a verdict and defended as one.",
          "'Person' would send the answer back toward 'it depends'; 'opinion' merely names the deliverable the criterion is meant to sharpen.",
        ),
        tags: ["gwriting", "t2", "discussion", "verdict"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence presents the rejected camp in the way this family rewards?",
        hints: [],
        options: [
          { id: "a", text: "Flat-dwellers obviously just want nightlife and cannot be taken seriously." },
          { id: "b", text: "The apartment camp builds its case on recovered hours: a walk-to-work flat hands back the time a village commute spends." },
          { id: "c", text: "Some people prefer the city, but they are wrong for several reasons I will now explain." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The apartment camp builds its case on recovered hours: a walk-to-work flat hands back the time a village commute spends.",
          "The camp's own strongest claim is attributed cleanly and developed in its own logic — no sneer, no refutation inside the presentation. Fairness is this family's second mark, and it is visible in sentences like this one.",
          "(a) sneers, which reads as a failure to discuss; (c) opens the refutation the instruction never requested.",
        ),
        tags: ["gwriting", "t2", "discussion", "fairness"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State what the fairness discipline requires of the example you invent for the camp you reject.",
        hints: [],
        question: "In one sentence: what must the example invented for the rejected camp be like?",
        acceptedAnswers: [
          "as generous and warm as the example for your own camp, at everyday scale and serving that camp's logic",
          "equally developed and sympathetic, fitting the rejected camp's own argument",
          "the same length and seriousness as your own camp's example, showing the camp's claim working",
          "as warm as your own side's example, at the scale of ordinary life, in the camp's own logic",
        ],
        keywords: ["generous", "example", "camp"],
        feedback: fb(
          "As generous and warm as the example for your own camp, at everyday scale and serving that camp's logic.",
          "Fairness is measurable in the examples: a thin, cold scene for the opposition tells the examiner the camp was mentioned rather than discussed, while an equally warm one is the clearest evidence the discussion was fair.",
          "Answers demanding only relevance stop at the floor — relevance is the minimum, and generosity is the measure.",
        ),
        tags: ["gwriting", "t2", "discussion", "examples"],
      }),
    ],
    homework: [
      "Write the two camp boxes for the housework prompt — 'Some parents believe children should help with housework every day. Others believe schoolwork and free play should come first.' — before choosing a verdict, then check that the rejected camp's box is as full as your own.",
      "Rewrite three sneering sentences about a view you reject until each could have been written by that view's own supporter.",
    ],
    assignment: {
      title: "Discussion essay, timed",
      instructions:
        "Write a full General Training Task 2 essay in 40 minutes: 'Some parents believe children should help with housework every day. Others believe schoolwork and free play should come first. Discuss both these views and give your own opinion.' Plan both camp boxes for four minutes, state your verdict at the end of the introduction, give the camp you reject the same architecture as your own, and hold the semi-formal register throughout.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-t2-advantages",
    title: "GT Task 2 — Advantages and disadvantages",
    description:
      "The weighing family on everyday arrangements — second-hand buying, cashless shops, working from home: two fair columns, a stated verdict when the verb asks for one, and the language that shows the scales moving.",
    objectives: [
      "distinguish the family's two prompt shapes — the weighing question and the describe-both inventory — by reading the verb",
      "weigh an everyday arrangement honestly: two or three points per side, each with a mechanism and an example",
      "land a verdict when 'outweigh' is printed, and hold it to the conclusion",
      "deploy weighing language that varies, instead of repeating 'advantage' and 'outweigh' into a drumbeat",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Some prompts print an everyday arrangement — buying second-hand, paying by card only, working from the kitchen table — and ask a question with scales in it: do the advantages outweigh the disadvantages? Others ask simply for the two sides, with no verdict owed. Reading the verb is the whole game, because a verdict missing from a weighing essay leaves the task half-done, while a verdict forced onto an inventory question spends words where nothing was asked. This lesson teaches both shapes, the columns that feed them, and the weighing language that lets the examiner watch the scales actually move.",
        beforeYouStart: [
          "You can find a prompt's instruction verb and say what it demands before planning.",
          "You can develop one point with a mechanism and an everyday example rather than naming it in a sentence.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 2 — the everyday weighing essay, worth roughly twice the letter"],
          ["Task & question types", "Advantages-and-disadvantages prompts in two shapes: 'Do the advantages outweigh the disadvantages?' and 'What are the advantages and disadvantages?'"],
          ["What is assessed", "Task Response: relevant points on both sides, developed rather than listed — plus, for the weighing shape, a clear verdict on which side prevails"],
          ["Why this matters", "The list essay that never judges is the family's signature failure, and it is commonly estimated to cost most of a band of Task Response"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "Two prompt shapes share this family. One presents a trend and asks a judgement question — 'Do the advantages of this arrangement outweigh the disadvantages?' — while the other asks only what the two sides are: 'What are the advantages and disadvantages of…?' The instruction verb settles everything. 'Outweigh' is a judgement word that puts you in charge of a ruling; the inventory verb asks for two fair columns with no verdict attached. Read the verb twice before planning, and read the arrangement's edges too — 'second-hand goods' (which goods?), 'for customers' (not for shopkeepers?) — because the columns must be built on the arrangement as printed.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "The weighing prompt carries three deliverables: the advantages, developed; the disadvantages, developed; and the verdict — which side prevails, stated in the introduction and defended through the weighting of the blocks. The inventory prompt carries two: each side fair, roughly equal, with no obligation to choose. In both shapes the comfortable failure is identical: five points per side, one sentence each, no scale anywhere. The examiner's count of developed ideas stops at two or three per side, each resting on a mechanism of its own — plus, when the verb demands it, one plain ruling on where the balance falls.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "Two columns, one pairing, one verdict",
        intro: "The plan is a pair of scales that you tip on purpose.",
        steps: [
          {
            title: "Step 1: Fill two columns and stop at three",
            text: "Draw the gains column and the costs column and fill each to three items — no more. Two minutes, note form, with a consequence noted against the strongest in each: 'a winter coat at a third of the price → a month's food budget relieved'; 'no warranty → the risk lands with the buyer'. A fourth point is almost always the first point rephrased, and an essay that plans five per side has planned a list.",
            examples: [
              {
                english: "Second-hand columns: GAINS — a third of the new price, goods kept out of landfill, older items often better made; COSTS — no warranty, someone else's wear hidden inside, hours spent searching.",
                note: "Three per side, and then the pen stops.",
              },
            ],
          },
          {
            title: "Step 2: Pair the columns and watch which side survives",
            text: "Read the two columns against each other, pairing items: does the saved money survive the missing warranty? Is the search-time cost permanent or does it shrink as platforms improve? Circle the side that survives the pairing — that circle is your verdict — and mark its two strongest items, because they will carry the developed block.",
            examples: [
              {
                english: "Pairing for the columns above: saved money versus warranty — the risk concentrates in electronics, while the saving applies to everything; the costs column survives only at the edges, so the verdict favours the gains.",
                note: "The verdict is chosen from evidence you can see on the page.",
              },
            ],
          },
          {
            title: "Step 3: Order the blocks — lighter first, heavier last",
            text: "Plan the losing side's block first, briskly and fairly developed, and the winning side's block second, carrying the verdict's weight and closing on a weighing sentence. The second block is the one the reader carries out of the essay, and examiners read it the same way: ending on the side you back is not theatre but the natural posture of an argument that has genuinely weighed its halves.",
            examples: [
              {
                english: "Map for a 'narrowly' verdict: introduction with the scales tipped; block one, the costs, honestly given; block two, the gains, developed, closing on 'weighed against…'; conclusion, the narrow verdict in fresh words.",
                note: "Light first, heavy last — the essay's centre of gravity lands where the verdict lives.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "For a weighing prompt, the verdict comes from the paired columns, not from enthusiasm, and 'narrowly' is a lawful setting — scales may tip slowly, and saying so honestly reads as judgement rather than weakness. Hedge by naming conditions instead of mumbling: 'the gains prevail, provided buyers can inspect what they buy' tells the examiner exactly which world your verdict describes. For an inventory prompt, no position is owed — resist the urge to crown a winner nobody asked for, though a gentle closing lean does no harm.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "Each block runs two or three points, and each point is a miniature paragraph: the point named, the mechanism explained in a sentence or two, one example at the scale of a single life. In this family the examples carry the weighing — 'her winter coat, worn one season by someone else, cost a third of the new price and paid for a month of groceries' is worth more than a paragraph of enthusiasm, because it shows the gain working. Develop the winning side's points more fully than the losing side's, and let the final sentence of the heavier block put both sides on the scale at once.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Everyday scale, one example per side, honestly framed. For the gains: a student furnishing a first flat from charity shelves at a fifth of the new-price total. For the costs: the elderly regular at a card-only café counter, counting coins no till will take. Both scenes are inventions, and both are honest — 'a typical', 'in most towns', 'if' — because a fabricated percentage costs more credibility than a plain scene ever earns. One example per side does the block's work; a second may follow only if it shows a different mechanism.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "The weighing introduction names the arrangement, hints at both columns, and lands the verdict in the same breath: 'the habit saves money and waste at once, and what it risks is usually repairable — so the gains prevail.' The inventory introduction names the arrangement and previews the two columns, one clause each, with no ruling anywhere. Both shapes open in two or three sentences, rephrase the prompt's arrangement rather than quoting it, and refuse the announcement habit — 'this essay will examine both sides' is a route plan where a map, or a verdict, was owed.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "Run the essay as two blocks. The lighter side comes first: brisk, fair, two points with their mechanisms, no sneering and no sabotage — the losing side must look well defended before it loses. The heavier side comes second: the two strongest points, developed, closing on a weighing sentence that sets both blocks on the scale in front of the reader — 'whereas the search costs an hour, the saving buys a week of groceries'. Register stays semi-formal: precise prices and plain nouns rather than 'dirt cheap' and 'a steal'.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Restate the verdict in fresh words for a weighing essay — the side, the breadth ('narrowly' if that was your dial), and the reason in one clause — and stop. One hedged closing judgement is allowed, such as what the balance looks like in the world your conditions describe. For an inventory essay, close by compressing the two columns into one balanced sentence. Nothing new is weighed at this late stage, by either shape.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "The words 'advantage' and 'disadvantage' follow this family's essay everywhere — into the plan, the topic sentences and the writer's head — and a script that lets them repeat turns into a ticking clock. Build a synonym kit before writing: 'gains', 'what the arrangement buys' against 'costs', 'drawbacks', 'what it charges'. Chain references to the arrangement itself — 'second-hand buying … the habit … this shift' — so the subject moves without being renamed, and rotate the weighing verbs: 'outweighs' once, then 'is worth more than', then 'tips the balance'.",
      },
      { type: "heading", text: "Worked example — columns, pairings, verdicts" },
      {
        type: "example",
        title: "The family in everyday action",
        items: [
          {
            english: "WEIGHING PROMPT: 'In many places, buying second-hand goods instead of new ones has become increasingly popular. Do the advantages of this outweigh the disadvantages?'",
            note: "One arrangement, one judgement verb: the essay must tip the scales one way.",
            domain: "exam",
          },
          {
            english: "INVENTORY PROMPT: 'What are the advantages and disadvantages for families of buying second-hand goods?'",
            note: "No judgement verb: two fair columns, no verdict owed — a gentle lean is the most the conclusion may spend.",
            domain: "exam",
          },
          {
            english: "VERDICT, hedged honestly: 'On balance the gains prevail: money saved and waste avoided are worth more than the risk of a dented appliance, provided buyers can inspect what they buy.'",
            note: "The hedge names its condition instead of weakening the claim.",
            domain: "exam",
          },
          {
            english: "HONEST example for the gains: 'A typical student furnishes a first flat from charity shelves and online listings for a fifth of the new-price total, and the difference pays a month of rent.'",
            note: "Everyday scale, honestly framed; one example does the block's work.",
            domain: "everyday",
          },
          {
            english: "COUNTER-example, equally honest: 'At a card-only counter, an elderly regular counts out coins no till will take, and leaves without her coffee — the speed the arrangement buys has a face.'",
            note: "The other side is shown working too; fairness is visible in the examples.",
            domain: "community",
          },
          {
            english: "WEIGHING sentence at a block's close: 'Whereas the search costs an hour, the saving buys a week of groceries — and only one of those recurs every month.'",
            note: "'Whereas' sets both blocks on one scale in a single line.",
            domain: "exam",
          },
          {
            english: "STUDY ritual: plan both shapes from one pair of columns, then check that only the weighing version carries a verdict.",
            note: "The verb, not the topic, sets the deliverables.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          {
            wrong: "I named five gains and five costs, a sentence apiece, so the essay reads like a balanced catalogue.",
            right: "Cut to two or three points per side, develop each with a mechanism and an example, then judge the balance in a stated verdict.",
            reason: "The weighing verb asks for a trial, not a stocktake — an undeveloped list never left the planning stage, whatever its length.",
          },
          {
            wrong: "A balanced essay never chooses, which feels safest of all.",
            right: "For an 'outweigh' prompt, land on one side — even 'narrowly' — and defend the weighting to the end.",
            reason: "The verdict is a printed deliverable of the weighing shape; withholding it answers the question with a shrug, and Task Response records the shrug.",
          },
          {
            wrong: "My verdict says the gains win, but my costs paragraph runs twice as long as my gains paragraph.",
            right: "Match block weight to the verdict: the winning side gets the fuller development and the closing weighing sentence.",
            reason: "Readers weigh paragraphs, not intentions — a longer block on the losing side argues against your own conclusion.",
          },
          {
            wrong: "The topic is shopping and bargains, so I will write it the way I text friends about deals.",
            right: "Everyday arrangement, essay voice: 'a third of the new price' rather than 'dirt cheap', uncontracted verbs, no exclamation marks.",
            reason: "Register slides are the GT hazard of familiar subjects, and the vocabulary criterion notes every chat idiom the essay admits.",
          },
        ],
      },
      { type: "heading", text: "The model — a weighing introduction and the heavier block" },
      {
        type: "four-skills",
        title: "Four skills around one everyday weighing essay",
        reading: {
          text: "A household kept two ledgers for a year: everything bought new, everything bought used. The used column held a winter coat, a bicycle, a dining table and forty books; the new column held socks, a kettle and a phone charger. The used total came to a quarter of the new-equivalent prices, and one item — the table — arrived with a wobbly leg that an afternoon and a screwdriver cured. The coat's line in the ledger reads: 'worn once by someone else; worn every day since by us.'",
          task: "Read once, then sort the details into the two columns of a weighing plan.",
        },
        writing: {
          task: "Task 2 (General Training). In many places, buying second-hand goods instead of new ones has become increasingly popular. Do the advantages of this outweigh the disadvantages? For this lesson, write the introduction and the heavier block (about 160 words), with the verdict landed in the introduction.",
          guide: [
            "Introduction: the arrangement named, both columns hinted at, the verdict landed — one side, 'narrowly' if that is the honest dial.",
            "Heavier block: two points with mechanisms; one everyday example, honestly framed; close on a weighing sentence that sets both sides on one scale.",
            "Hedge by naming conditions — 'provided buyers can inspect goods' — rather than by mumbling balance.",
          ],
          model: "Introduction: A generation ago, second-hand meant charity shelves and Sunday tables; today a phone lists a stranger's winter coat in seconds, and millions of households buy used without a second thought. The habit saves money and keeps goods circulating, though it carries risks a new purchase does not. On balance the advantages prevail, and not narrowly: what second-hand buying saves is money and waste at once, and what it risks is usually repairable. Heavier block: The first gain is arithmetic any household can run. A typical student furnishing a first flat from charity shelves and online listings pays perhaps a fifth of the new-price total, and the difference is not small change — it is a month of rent, or a term without an overdraft. The second gain is quieter: every table, coat and bicycle bought used is one fewer manufactured, shipped and eventually landfilled, so the habit lightens a budget and a bin in the same transaction. Admittedly, used goods arrive without guarantees, and a kettle that fails in a fortnight is money wasted rather than saved; but the failures concentrate in exactly the categories — electronics, safety equipment — where buying new remains sensible, while the goods most often bought used, such as furniture and clothing, can be inspected before money changes hands. Weighed against a saving that recurs every season, the occasional dented appliance is the cheaper loss.",
        },
        listening: {
          script: "Reading your weighing draft as a marker: both sides are present and developed, the verdict lands in the introduction, and the heavier block closes on a weighing sentence — the family's shape, honoured. Two small repairs. The word 'outweigh' appears four times; let 'is worth more than' and 'tips the balance' carry a turn each. And the failed kettle needs its honest frame — 'if a kettle fails' — because it is invented, and invented examples wear their frame like a badge.",
          task: "Listen once and note the two repairs, and the word the marker counts.",
        },
        speaking: {
          task: "Weigh an arrangement you know — working from home, or a card-only corner shop — out loud in sixty seconds: two points per side, then your verdict with its dial.",
          frames: [
            "The strongest gain is…",
            "On the other side sits…",
            "On balance … prevails, because…",
          ],
          checklist: [
            "Did each point get its mechanism?",
            "Did the verdict name how narrowly?",
            "Did the weighing language vary as you spoke?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Verdict discipline", "The scales tip in the introduction — 'prevail, and not narrowly' — so both blocks are read as evidence from the first line."],
          ["Weighing language", "The block closes by setting both sides on one scale — 'weighed against a saving that recurs' — and the weighing verbs vary so no metronome starts."],
          ["Honest hedging", "The condition (inspectable goods) is named in the thesis, and the risk is conceded with a frame — 'a kettle that fails' — rather than a fabricated figure."],
          ["Everyday development", "One furnished flat, one month of rent: the example shows the gain working at the scale of a single life, which is where this family's evidence lives."],
          ["Register", "The shopping topic never pulls the prose into chat: prices are named precisely and the voice stays uncontracted and neutral."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the verb twice — weighing or inventory — and cap your columns at three points per side before writing."],
          ["While the clock runs", "Lighter block first, heavier second; one mechanism and one example per point; weigh openly at the block's close."],
          ["If you are stuck", "Pair an advantage against a disadvantage on paper and ask which survives the comparison — the verdict usually hides in that pairing."],
          ["Final minutes", "Check the conclusion's verdict matches the introduction's dial, and replace any weighing verb that has served twice."],
        ],
      },
      {
        type: "summary",
        points: [
          "Two shapes share the family: 'outweigh' demands a verdict; 'what are the advantages and disadvantages' demands a fair inventory.",
          "Cap the columns at three points per side and develop each with a mechanism — the list is the family's signature failure.",
          "Land the verdict in the introduction of a weighing essay, and let the heavier block argue last.",
          "Examples carry the weighing: show the advantage working in one ordinary life, honestly framed, once per side.",
          "Vary the weighing verbs and the side-naming nouns; repetition turns an argument into a drumbeat.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "Which verb turns a two-column inventory into a trial with you as the scales?",
            options: ["'Outweigh'", "'Describe'", "'Discuss'"],
            correctIndex: 0,
            explanation: "The judgement verb imports the verdict deliverable: 'outweigh' asks which side prevails, and the introduction must answer it.",
            from: "Analysing question requirements",
          },
          {
            question: "What does every line of a five-minute plan fix?",
            options: ["Each paragraph's job and its one developed point", "The essay's final wording", "A count of words per paragraph"],
            correctIndex: 0,
            explanation: "Plans fix jobs, not sentences: which block carries which side, where the verdict lands, and which point is cut.",
            from: "Planning",
          },
          {
            question: "Linkers earn cohesion credit only when they do what?",
            options: ["Match the real relation between the ideas they join", "Appear at the start of every paragraph", "Use long, formal words"],
            correctIndex: 0,
            explanation: "'Whereas' fits contrast and 'by comparison' fits weighing; the criterion rewards the device that tracks the logic, never the device that decorates.",
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
        prompt: "What is the difference between 'Do the advantages outweigh the disadvantages?' and 'What are the advantages and disadvantages?'",
        hints: ["Ask what each instruction verb owes the reader."],
        options: [
          { id: "a", text: "Nothing — both ask for the same essay." },
          { id: "b", text: "The first demands a verdict on the balance; the second asks for a fair inventory with no verdict owed." },
          { id: "c", text: "The first asks only for advantages; the second only for disadvantages." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The first demands a verdict on the balance; the second asks for a fair inventory with no verdict owed.",
          "The judgement verb turns the essay into a trial with a required ruling, while the inventory verb asks for two even columns. Reading the verb twice before planning is this family's first habit, and the plan changes shape with the answer.",
          "(a) ignores the verdict deliverable the first shape prints; (c) reverses what each shape asks for.",
        ),
        tags: ["gwriting", "t2", "advantages", "prompt-shapes"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Diagnose this paragraph.",
        hints: ["Count the points, then count how many were explained, shown or weighed."],
        passageTitle: "A candidate's paragraph",
        passage: "Second-hand shopping has many advantages. It is cheaper. It is also good for the environment. Furthermore, it is interesting and you can find unique things. Moreover, it supports local charities. In addition, it teaches patience. On the other hand, there are disadvantages too. Things may be old. They may be dirty. Also, there is no warranty. Finally, you cannot return them. In conclusion, there are both advantages and disadvantages.",
        question: "What is the paragraph's central failure?",
        options: [
          { id: "a", text: "Grammar — the sentences are too short for the test." },
          { id: "b", text: "Development — ten points are named and none receives a mechanism, an example or a weighing, so the trial the verb demanded never happens." },
          { id: "c", text: "Task Response — the topic is wrong." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Development — ten points are named and none receives a mechanism, an example or a weighing, so the trial the verb demanded never happens.",
          "This is the list answer wearing an essay's clothes: every point may be true, but the criterion rewards developed ideas and a ruling, and there is neither. Three points per side, each with a mechanism and one everyday example, would score more than all ten named in a line.",
          "(a) mistakes a symptom for the disease; (c) is wrong on the evidence — every sentence is on topic.",
        ),
        tags: ["gwriting", "t2", "advantages", "development"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Weighing language. Complete the sentence that closes a block.",
        hints: ["Which past participle puts two things on scales together?"],
        sentence: "____ against a saving that returns every season, the occasional failed appliance is the cheaper loss.",
        acceptedAnswers: ["Weighed", "Set"],
        feedback: fb(
          "'Weighed against' — the family's closing move.",
          "The phrase sets both blocks on one scale in a single line, which is the visible act of judging that the criterion rewards. 'Set against' works the same hinge with a slightly cooler register.",
          "'Compared' names the act loosely and loses the scales; 'taking' would need a different structure entirely.",
        ),
        tags: ["gwriting", "t2", "advantages", "weighing"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which introduction ending lands a verdict correctly for the weighing shape?",
        hints: [],
        options: [
          { id: "a", text: "This essay will look at both sides of the second-hand question and then conclude." },
          { id: "b", text: "On balance the advantages prevail: what the habit saves is money and waste at once, and what it risks is usually repairable." },
          { id: "c", text: "There are both advantages and disadvantages, and everyone must decide for themselves." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "On balance the advantages prevail: what the habit saves is money and waste at once, and what it risks is usually repairable.",
          "The verdict names the winning side and the reason in miniature, so the blocks that follow are read as evidence. A ruling — not a route plan and not a shrug — is what the judgement verb pays for.",
          "(a) announces sightseeing; (c) hands the examiner's question back to the examiner unanswered.",
        ),
        tags: ["gwriting", "t2", "advantages", "verdict"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Explain what a 'narrowly' verdict commits the essay to.",
        hints: [],
        question: "In one sentence: what does 'narrowly' add to a verdict such as 'the advantages prevail narrowly'?",
        acceptedAnswers: [
          "it sets the dial honestly — the scales tip, but only just — committing the body to defend exactly that breadth",
          "it calibrates how far the verdict goes, showing the writer weighed rather than defaulted",
          "it names the width of the win, and the essay must hold that width to the end",
          "it tells the reader the margin is small, so the defence must match the claim's caution",
        ],
        keywords: ["narrowly", "verdict", "dial"],
        feedback: fb(
          "It sets the dial honestly — the scales tip, but only just — committing the body to defend exactly that breadth.",
          "Calibration is part of a verdict's honesty: 'narrowly' promises a close trial and must be defended as one, exactly as the dial words work in the opinion family. A wide-claiming essay with narrow evidence reads as overreach.",
          "Answers treating the word as decoration have missed the commitment it creates for every body paragraph.",
        ),
        tags: ["gwriting", "t2", "advantages", "calibration"],
      }),
    ],
    homework: [
      "Draw the two columns for the cashless-shops prompt — 'Some shops now accept card and phone payments only. Do the advantages of this for customers outweigh the disadvantages?' — cap each at three, pair the items, and write the one-sentence verdict before drafting anything.",
      "Take your last weighing essay and underline every weighing verb; replace any that has appeared more than once with a fresh phrase such as 'is worth more than' or 'tips the balance'.",
    ],
    assignment: {
      title: "Weighing essay, timed",
      instructions:
        "Write a full General Training Task 2 essay in 40 minutes: 'In many jobs, employees now work from home for part or all of the week. Do the advantages of this arrangement outweigh the disadvantages?' Land the verdict in the introduction, give the lighter side its fair block first, close the heavier block on a weighing sentence, and keep the semi-formal register throughout.",
      minWords: 250,
      maxWords: 340,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-t2-problem-solution",
    title: "GT Task 2 — Problem and solution",
    description:
      "The two-contract family for everyday troubles — neighbours who have never met, parks buried in litter: harms developed in ordinary scenes, and solutions matched to the harm they actually fix, each with its cost named.",
    objectives: [
      "read a problem-and-solution prompt as two contracts — the problems and the solutions — and deliver both in full",
      "match every proposed solution to the specific harm it addresses, with a note on who runs it and what it costs",
      "develop harms in calm, concrete scenes rather than moral heat",
      "hold the semi-formal register while writing about frustrations you have personally lived",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Problem-and-solution prompts start closer to home than any other family: the litter in your park, the neighbours you have never met, the street where nobody says good morning. That closeness is a gift and a hazard. You have material; but you also have grievances, and grievance writes badly. The family asks for two contracts delivered in one essay — the problems, developed fairly, and the solutions, each matched to a harm it genuinely fixes and honest about its cost. This lesson teaches the matching discipline that examiners reward, and the cool voice that turns everyday irritation into an argued essay.",
        beforeYouStart: [
          "You can split a two-part prompt into its separate deliverables before planning.",
          "You can support a point with a scene from daily life rather than a complaint.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "General Training Writing Task 2 — the everyday problem-and-solution essay, worth roughly twice the letter"],
          ["Task & question types", "Prompts printing a local or lifestyle problem and asking 'What problems does this cause?' and 'What could be done?' — always two contracts"],
          ["What is assessed", "Task Response: real problems identified and developed, plus solutions that address those problems with workable detail"],
          ["Why this matters", "Essays that moralise about the problem and gesture at solutions answer the easier half of the prompt and leave the harder half unpaid"],
        ],
      },
      { type: "heading", text: "Component 1 — Understanding the question" },
      {
        type: "text",
        text: "The prompt names a situation — 'In many apartment buildings, residents barely know their neighbours' — and prints two questions: what problems arise, and what could be done. Some variants add a third about causes, and some ask only one; count the question marks and read each one before planning anything. The situation itself is given: your essay's material is the consequences and the fixes, not a retelling of the premise, however easy that retelling is to write. And note the edges — 'in many buildings' means write generally, not only about the flat you lived in once.",
      },
      { type: "heading", text: "Component 2 — Identifying the task" },
      {
        type: "text",
        text: "Two deliverables, always. The problems half owes two harms, developed with mechanisms at everyday scale; the solutions half owes two remedies, each matched to one of those harms, each described concretely enough to be judged — who runs it, what it costs, why the harm shrinks. A solution with no matching problem is a stray, and a problem with no matching solution leaves a contract half-paid. The commonest fault is proportion: three paragraphs of complaint and two lines of remedy, when the family's marks sit exactly the other way.",
      },
      { type: "heading", text: "Component 3 — Brainstorming" },
      {
        type: "steps",
        title: "Harm chains, candidate fixes, matching arrows",
        intro: "The plan draws two lists and then the arrows between them.",
        steps: [
          {
            title: "Step 1: Trace the harm chain from the situation",
            text: "From the printed situation, trace concrete consequences in note form: from 'neighbours who have never met' comes 'nobody to collect a parcel', 'an older resident's fall goes unnoticed for a day', 'noise disputes turn hostile because no relationship cushions them'. Keep the harms ordinary and specific — the examiner trusts a small, checkable consequence more than a large, vague one.",
            examples: [
              {
                english: "Harm chain for the neighbours prompt: never met → no parcel rota → small emergencies invisible → disputes escalate without a cushion of acquaintance.",
                note: "Each link is a scene waiting to be written, not an adjective waiting to be deployed.",
              },
            ],
          },
          {
            title: "Step 2: For each harm, list what would actually fix it",
            text: "Write candidate fixes beside the harms they touch: a lift noticeboard with names answers the never-met harm; a shared message group answers the practical favours harm; a residents' association answers the disputes harm. Then test every fix against its harm with one question — does this measure visibly shrink the harm I named? — and delete anything that only sounds relevant.",
            examples: [
              {
                english: "Fix tested and deleted: 'the government should fund community festivals' — it touches the never-met harm only distantly, at a scale the building cannot control, so it goes.",
                note: "Deletion is the step that makes matching real.",
              },
            ],
          },
          {
            title: "Step 3: Note feasibility for each surviving fix",
            text: "For each fix, note three things in pencil: who organises it, what it costs, and what could block it. One hour of a caretaker's time and a laminated sheet is a different order of proposal from a council grant, and the essay that knows the difference sounds like someone who has organised things. Choose the two fixes you can describe in this concrete way.",
            examples: [
              {
                english: "Feasibility notes: lift sheet — caretaker, one hour, near-zero cost; residents' association — volunteer committee, months to found, durable once running.",
                note: "Cost and timescale on paper become credibility in the paragraph.",
              },
            ],
          },
          {
            title: "Step 4: Map the essay around the pairs",
            text: "Introduction: the situation rephrased plus a mapping line naming your two harms and two responses. Body one: the harms, in scenes. Body two: the fixes, matched, in the same order where possible. Conclusion: the deepest harm and the most feasible fix, compressed. The map's arrows become the essay's structure.",
            examples: [
              {
                english: "Map line: 'This silence carries two costs — small emergencies that no one notices, and the loss of everyday favours — and both respond to measures cheaper than the harms they prevent.'",
                note: "One sentence, both contracts visible.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Choosing a position" },
      {
        type: "text",
        text: "This family has no side to take, but it has selections to make, and the selections are the essay's judgement. Choose the two harms you can develop in scenes rather than the two that sound biggest; choose the two fixes whose feasibility you can describe concretely rather than the two that sound generous. If one printed question asks 'do you think…?' about a remedy, that is a verdict deliverable — take a side on the remedy with its dial, exactly as the opinion family taught.",
      },
      { type: "heading", text: "Component 5 — Developing arguments" },
      {
        type: "text",
        text: "A harm paragraph develops the damage: the harm named, how it works in ordinary life, one everyday scene, and — without exaggeration — whom it touches. 'An older resident's fall goes unnoticed for a day because the one person who would have knocked has never been introduced' argues more than any lament about broken society. A solution paragraph develops the fix: what it is, who runs it, what it costs, why the named harm shrinks, and one honest limit. Cool prose is the family's register of seriousness.",
      },
      { type: "heading", text: "Component 6 — Creating examples" },
      {
        type: "text",
        text: "Use the life you know, honestly framed. For harms: the parcel that sat in a hallway for a week because no neighbour was available to take it; the parking row that went to the landlord because two residents had never spoken before the row. For solutions: the noticeboard that introduced a building's residents over one weekend; the ground-floor volunteer who checks on an elderly neighbour each Thursday. Frame inventions with 'a typical' and 'in many buildings', and never dress them as statistics — the everyday scene is this family's evidence, and it needs no numbers to be believed.",
      },
      { type: "heading", text: "Component 7 — Structuring introductions" },
      {
        type: "text",
        text: "Two or three sentences: the situation rephrased in your own words, one clause on why it has become common if the prompt says so, and a mapping line that names both harms and both responses in miniature. Do not copy the prompt's phrasing, and do not open with 'Nowadays, with the development of society' — open inside the situation itself: 'Blocks of flats increasingly house strangers.' The mapping line is the family's introduction signature: it promises the essay's whole architecture in one sentence.",
      },
      { type: "heading", text: "Component 8 — Writing body paragraphs" },
      {
        type: "text",
        text: "Body one delivers the two harms, each as claim, mechanism and scene, in roughly equal weight. Body two delivers the two fixes, each as what-who-cost-why, with the matching made visible by order and by language: 'The first of these harms — the unnoticed emergency — is the one a named volunteer per floor answers most directly.' The turn between the bodies can be one sentence, and it should be: the harms described, the remedies begun, with no paragraph of transition padding between them.",
      },
      { type: "heading", text: "Component 9 — Writing conclusions" },
      {
        type: "text",
        text: "Compress, do not repeat: the situation in a few words, the deepest harm in a clause, the most feasible fix in another, and one closing sentence on what changes if it is taken. No new problems, no new solutions, no escalation of tone. The conclusion of this family should read like the minute after a good meeting — decisions named, costs accepted, next step obvious.",
      },
      { type: "heading", text: "Component 10 — Avoiding repetition" },
      {
        type: "text",
        text: "'Problem' and 'solution' will drumbeat through every paragraph unless you build the alternatives in advance: harms, difficulties, the costs of the silence on one side; remedies, measures, responses on the other. Chain the situation by reference — 'the building … this silence … it' — so the premise moves without renaming, and vary the proposal verbs: 'could establish', 'might introduce', 'one practical answer is'. Vary the harm verbs too: 'goes unnoticed', 'is lost', 'turns hostile' each carry their own weight.",
      },
      { type: "heading", text: "Worked example — chains, matches, feasibility" },
      {
        type: "example",
        title: "The family in everyday action",
        items: [
          {
            english: "PROMPT: 'In many apartment buildings and streets, residents barely know their neighbours. What problems can this cause? What could be done to improve the situation?'",
            note: "Two printed questions, two contracts: harms and remedies.",
            domain: "exam",
          },
          {
            english: "HARM developed in one scene: 'An older resident's fall goes unnoticed for a day, because the one person who would have knocked has never been introduced.'",
            note: "The damage is shown, not asserted — one scene does the work of three adjectives.",
            domain: "everyday",
          },
          {
            english: "MATCHED solution, feasibility on show: 'A laminated sheet by the lift, listing each flat by first name, costs one hour of a caretaker's time and gives residents a way to begin.'",
            note: "What, who, cost, why — a proposal the reader can judge, not a wish.",
            domain: "community",
          },
          {
            english: "FEASIBILITY note, honest: 'A residents' association fixes disputes durably, but it takes a committee and months to found — it cannot be the essay's only remedy.'",
            note: "Naming a measure's cost is a strength: it sounds like someone who has organised things.",
            domain: "work",
          },
          {
            english: "MATCHING made visible: 'The first of these harms — the unnoticed emergency — is the one a named volunteer per floor answers most directly.'",
            note: "Order and phrasing tie each fix to its harm, so the pairing is auditable.",
            domain: "exam",
          },
          {
            english: "STUDY ritual for the park-litter prompt: harm chain on the left of the page, candidate fixes on the right, arrows between them — every fix with no arrow is deleted before drafting.",
            note: "Matching is planned on paper, not hoped for in prose.",
            domain: "study",
          },
          {
            english: "REGISTER repair: 'People just don't care anymore and it's disgusting' becomes 'The volume of dropped packaging has grown faster than the cleaning rota that must collect it.'",
            note: "Cool prose carries more argument than grievance ever does.",
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
            wrong: "The problem makes me angry, so my first paragraph explains how terrible and disgusting it all is.",
            right: "Show the harm working in one ordinary scene, in cool and precise language.",
            reason: "Moral heat is not development: the criterion pays for mechanisms and consequences, and grievance spends the paragraph's words on adjectives instead.",
          },
          {
            wrong: "My solutions paragraph lists five ideas — more bins, more cameras, fines, education and a festival.",
            right: "Choose two solutions that match your two named harms, and give each its feasibility note — who, what cost, why it works.",
            reason: "Five unattached remedies read as a wish list; matching fix to harm is the family's signature skill, and lists demonstrate its absence.",
          },
          {
            wrong: "I rephrased the situation from the prompt for most of the essay, because it was the easiest material to write.",
            right: "One fresh sentence on the situation, then the essay's own material: the consequences and the responses.",
            reason: "Retelling the given premise earns nothing under Task Response — the printed questions ask for problems and solutions, and neither lives in the premise.",
          },
          {
            wrong: "The topic is my own building and my own street, so I wrote it like a message to the residents' group chat: 'honestly it's mad, nobody even says hi'.",
            right: "Hold the semi-formal register: the everyday frustration argued in a composed voice, uncontracted and neutral.",
            reason: "Familiar frustrations pull hardest toward chat register, and every contraction and exclamation is a visible slip in exactly the criterion that rewards control.",
          },
        ],
      },
      { type: "heading", text: "The model — an introduction and the solutions body" },
      {
        type: "four-skills",
        title: "Four skills around one everyday problem-and-solution essay",
        reading: {
          text: "When the new caretaker took over the building, she made one change before any other: a laminated sheet by the lift, listing every flat by first name. Within a month, a parcel rota had appeared on the same sheet, a message group followed it, and when flat 6 flooded on a Tuesday night, three neighbours were at the door with buckets before the plumber answered his phone. Nobody held a meeting. The sheet, she says, simply gave people a way to start.",
          task: "Read once, then decide which of the lesson's harms the sheet and its consequences actually address.",
        },
        writing: {
          task: "Task 2 (General Training). In many apartment buildings and streets, residents barely know their neighbours. What problems can this cause? What could be done to improve the situation? For this lesson, write the introduction and the body paragraph delivering the solutions (about 160 words).",
          guide: [
            "Introduction: the situation rephrased, one clause on why the silence has grown, then the mapping line naming two harms and two responses.",
            "Solutions paragraph: two fixes, each with what it is, who runs it, what it costs and why the named harm shrinks; one honest limit between them.",
            "Make the matching visible through order and phrasing — 'the first of these harms answers most easily to…'.",
          ],
          model: "Introduction: Blocks of flats and quiet streets increasingly house strangers: doorways open and close for years without a word passing between the people behind them, and the pattern deepens as working hours stretch and social lives move online. This silence carries two practical costs — small emergencies that no one notices, and the loss of the everyday favours neighbours once exchanged — and both respond to measures far cheaper than the harms they prevent. Solutions paragraph: The first harm answers most easily to the simplest tool. A laminated sheet by the lift, listing each flat by first name, costs one hour of a caretaker's time and gives residents a way to begin; the message group that usually follows restores the parcel rota, the borrowed key and the warning about a leaking roof within weeks, because the sheet and the group together rebuild the acquaintance on which such favours run. The second harm, the unnoticed emergency, wants the same acquaintance rather than a new institution: a residents' association could formalise a check on older neighbours, though it needs a committee and months to found, and a lighter version — one named volunteer per floor, agreed at a single welcome evening — reaches the same doors without the machinery. Neither measure asks a council, a budget or a law; both ask only that a building decide its residents should not remain strangers.",
        },
        listening: {
          script: "Your harms paragraph is calm and concrete — the flooded flat scene does the work of three adjectives, which is exactly the right trade. In the solutions, the lift-sheet idea is beautifully feasible: you named the cost, the organiser and the timescale. And the association carries its limit as plainly as its promise, so the paragraph now reads as matched pairs, harms to fixes — which is this family's whole shape, and you have built it.",
          task: "Listen once and note which quality of the solutions paragraph the reviewer says completes the family's shape.",
        },
        speaking: {
          task: "Describe a fix for a problem on your own street, in forty-five seconds: what it is, who runs it, what it costs, one honest limit.",
          frames: [
            "The simplest measure would be…",
            "It would cost little more than…",
            "Its limit is …, but…",
          ],
          checklist: [
            "Did each fix touch a named harm?",
            "Did you say who organises and pays?",
            "Did the limit sound honest rather than undermining?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Both contracts delivered", "The introduction maps two harms and two responses, and the solutions paragraph pays both halves in the same order — nothing is owed after the final sentence."],
          ["Matching made visible", "Order and phrasing tie each fix to its harm — 'the first harm answers most easily to' — so the pairing can be audited line by line."],
          ["Feasibility on show", "Every measure carries its cost and organiser — one hour of a caretaker's time — which is what separates a proposal from a wish."],
          ["Honest limits", "The association's committee and months are named beside its promise, showing judgement rather than cheerleading."],
          ["Cool register", "The everyday frustration is argued in a composed voice: no contraction, no exclamation, no grievance anywhere in the paragraph."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Trace the harm chain on paper, list candidate fixes beside it, and delete every fix that touches no named harm."],
          ["While the clock runs", "Keep the proportions honest: harms in scenes, solutions in who-what-cost-why, one honest limit per fix."],
          ["If you are stuck", "Ask what you have personally seen work on your own street or in your own building — the feasible solution usually lives there."],
          ["Final minutes", "Check both printed questions have a paragraph to their name, and sweep for grievance register: exclamation marks, superlatives, contractions."],
        ],
      },
      {
        type: "summary",
        points: [
          "The family prints two contracts: the problems, developed fairly, and the solutions, matched to those problems — deliver both.",
          "Develop harms in ordinary scenes rather than adjectives; one calm consequence outweighs three exclamations.",
          "Give every solution a feasibility note: what it is, who runs it, what it costs, and one honest limit.",
          "Make the matching visible through order and phrasing, so the examiner can audit each fix against its harm.",
          "Everyday frustration argues best in a cool, semi-formal voice — grievance is this family's register trap.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "A prompt that prints two questions owes the essay how many deliverables?",
            options: ["Two — one developed answer per question", "One — a general discussion of the topic", "As many as the word count allows"],
            correctIndex: 0,
            explanation: "Each printed question is a contract: here the harms contract and the remedies contract, and each needs its own developed space in the plan.",
            from: "Analysing question requirements",
          },
          {
            question: "What does a plan fix for every paragraph?",
            options: ["Its job — the contract-half or point it develops", "Its final sentence in full", "A quota of linking words"],
            correctIndex: 0,
            explanation: "Paragraphs earn their place by job: one owns the harms, one owns the remedies, and the plan says so before drafting starts.",
            from: "Planning",
          },
          {
            question: "Which sentence opens a body paragraph in this family's best register?",
            options: ["The silence has two practical costs, both of which respond to cheap measures.", "It is absolutely awful that nobody knows anyone anymore!", "Everyone agrees this is a serious problem in modern society."],
            correctIndex: 0,
            explanation: "The composed option names the harm and promises the response — topic-sentence work in the essay's voice — while the exclamation moralises and the third fills space with agreement nobody asked for.",
            from: "Tone",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What are the family's two contracts?",
        hints: ["Read the prompt's two printed questions literally."],
        options: [
          { id: "a", text: "The problems, developed, and the solutions, matched to them." },
          { id: "b", text: "The causes and the history of the situation." },
          { id: "c", text: "Your opinion and the examiner's opinion." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The problems, developed, and the solutions, matched to them.",
          "The prompt prints two questions, and each is a deliverable: harms shown working in ordinary scenes, then remedies that touch those harms and carry their costs. Both must be locatable in the essay's structure, or the response criterion prices the gap.",
          "(b) answers questions the prompt did not print; (c) is nobody's contract.",
        ),
        tags: ["gwriting", "t2", "problem-solution", "deliverables"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Audit this solutions paragraph.",
        hints: ["Ask what each listed remedy actually touches."],
        passageTitle: "A paragraph under inspection",
        passage: "Nobody in my building knows anyone, and this is a tragedy for society. People are lonely, society is broken, and something must be done. The government should spend more on community centres. Schools should teach friendliness. Television should make programmes about neighbours. Also, perhaps social media companies could help. Finally, I believe that if we all tried a little harder, the world would be a better place.",
        question: "What fails in this paragraph, beyond its register?",
        options: [
          { id: "a", text: "Grammar — the sentences vary too much in length." },
          { id: "b", text: "Matching — four remedies float free of any named harm, so none can be judged against the problem it claims to fix." },
          { id: "c", text: "Length — it is too short to develop anything." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Matching — four remedies float free of any named harm, so none can be judged against the problem it claims to fix.",
          "Not one remedy is tied to a specific harm, none carries a feasibility note, and the paragraph ends in general hope. The family pays for matched, costed fixes, and this is a wish list with an exclamation mark where the matching should be.",
          "(a) misdiagnoses the prose; (c) is false — the paragraph is long enough to have done the work it skipped.",
        ),
        tags: ["gwriting", "t2", "problem-solution", "matching"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Feasibility. Complete the rule with the missing noun.",
        hints: ["Money and effort both belong in this noun."],
        sentence: "Every solution should carry a feasibility note: what it is, who runs it, what it ___, and one honest limit.",
        acceptedAnswers: ["costs"],
        feedback: fb(
          "Costs — the resource half of feasibility.",
          "A remedy described without its cost reads as a wish; naming the price — one hour, one sheet, one committee — is what makes a proposal credible and the essay's judgement visible.",
          "'Needs' and 'does' leave the resource question unanswered, and the resource question is the one feasibility exists to answer.",
        ),
        tags: ["gwriting", "t2", "problem-solution", "feasibility"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Which sentence makes the problem–solution matching auditable?",
        hints: [],
        options: [
          { id: "a", text: "There are many possible solutions to this difficult problem." },
          { id: "b", text: "The first of these harms — the unnoticed emergency — is the one a named volunteer per floor answers most directly." },
          { id: "c", text: "Solutions are very important in essays of this type." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The first of these harms — the unnoticed emergency — is the one a named volunteer per floor answers most directly.",
          "The sentence names the harm, names the fix and states the fit, so an examiner can audit the pairing in a single line. Visible matching is the family's signature skill, and this is what it looks like at sentence level.",
          "(a) and (c) say nothing a marker can check — they are the essay talking about itself.",
        ),
        tags: ["gwriting", "t2", "problem-solution", "matching"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Explain why an honest limit strengthens a solution paragraph.",
        hints: [],
        question: "In one sentence: why does naming a solution's limit strengthen the paragraph rather than weaken it?",
        acceptedAnswers: [
          "because it shows judgement — the writer has weighed the measure's cost against the harm it reduces",
          "it proves the cost was considered, making the proposal credible rather than wishful",
          "it signals realistic assessment, which the response criterion rewards over cheerleading",
          "naming what a measure cannot do demonstrates the comparison the essay exists to make",
        ],
        keywords: ["judgement", "credible", "cost"],
        feedback: fb(
          "Because it shows judgement — the writer has weighed the measure's cost against the harm it reduces.",
          "A limit converts a proposal into a decision: the writer who says the association takes months and a committee has visibly compared the remedy's price with the harm's cost, and that comparison is the family's intellectual work.",
          "Answers claiming limits weaken the essay have reversed the criterion's logic — unexamined cheerleading reads as limited judgement.",
        ),
        tags: ["gwriting", "t2", "problem-solution", "feasibility"],
      }),
    ],
    homework: [
      "Write the harm chain for the park-litter prompt — 'Litter is an increasing problem in many local parks. What problems does this cause? What could help?' — then draw matching arrows to two feasible fixes and delete every fix with no arrow.",
      "Take a complaint you actually made this week, about a delivery, a street or a service, and rewrite it as one calm problem sentence plus one costed solution sentence in the semi-formal voice.",
    ],
    assignment: {
      title: "Problem and solution, timed",
      instructions:
        "Write a full General Training Task 2 essay in 40 minutes: 'In many towns and cities, local parks are increasingly spoilt by litter. What problems does this cause? What could be done about it?' Develop two harms in ordinary scenes, match each to a feasible solution with its cost named, make the matching visible in your phrasing, and keep the voice cool and semi-formal throughout.",
      minWords: 250,
      maxWords: 340,
    },
  },
];
