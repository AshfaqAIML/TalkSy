/**
 * Chapter 1A (GT) — General Training Writing foundations (Part A).
 *
 * The first six lessons of the GT Writing Masterclass foundations chapter,
 * taught entirely through the two General Training tasks: the Task 1 letter
 * and the Task 2 everyday essay. Instructions, requirements, planning,
 * paragraph organisation, grammar accuracy and vocabulary — every example a
 * letter or an everyday essay, every practice brief original material
 * written in the style of the test, and every band reference an estimate.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gwritingFoundationsLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-instructions",
    title: "Understanding task instructions",
    description:
      "The printed band above every GT task is a small contract: the situation line, the three 'In your letter' bullets, the fixed opening, the essay's support demand and the two word floors — each line a requirement with consequences you can predict.",
    objectives: [
      "turn every line of a GT task band into a deliverable your answer must visibly contain",
      "treat the 150-word and 250-word floors as scoring rules rather than advice",
      "keep the letter and the everyday essay inside their two separate genres",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every General Training Writing task arrives wrapped in printed wording, and most of that wording is doing scoring work. The letter brief tells you who you are, who is reading, and which three things your letter must do; the essay band attaches demands of its own about reasons and examples; both tasks end with a word floor that examiners take literally. This lesson reads those lines one at a time and converts each into a requirement you can check your own answer against — the cheapest protection available on a paper where coverage is scored before elegance.",
        beforeYouStart: [
          "You know from Module 1 that Task 1 gets about twenty minutes and Task 2 about forty, and that Task 2 counts twice.",
          "You can name the four Writing criteria and know that the task criteria read coverage first.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — General Training Task 1 (the letter) and Task 2 (the everyday essay)"],
          ["Task & question types", "Letter briefs built from a situation, a named reader and three 'In your letter' bullets; essay bands with their standing support demand and word floors"],
          ["What is assessed", "Task Achievement for the letter and Task Response for the essay — the criteria that read your answer against the printed lines"],
          ["Why this matters", "A skipped bullet, a rewritten opening or a missed floor is a coverage failure that fluent language does not repair"],
        ],
      },
      { type: "heading", text: "Component 1 — What the printed band contains" },
      {
        type: "text",
        text: "A GT Task 1 brief has a fixed cast, whatever story it tells. It opens with a situation of one to three sentences: you ordered something, something arrived wrong, you are moving house, you have been asked for help. It then names your reader — the manager, the council, a friend — and hands you three bullets under the words 'In your letter', each one a job the finished letter must be seen doing. Some briefs add a printed opening, introduced by an instruction to begin the letter exactly as shown; that line is part of your answer and part of your word count. A closing note reminds you that postal addresses are not required, and the band finishes with the instruction to write at least 150 words. Task 2's band is shorter but no less binding: the prompt, a standing demand — give reasons for your answer, and include any relevant examples from your own knowledge or experience — and the 250-word floor. Learn the cast now, and test-day wording becomes a checklist you already own rather than new information competing for your attention.",
      },
      { type: "heading", text: "Component 2 — From printed line to scored deliverable" },
      {
        type: "steps",
        title: "The band, line by line",
        intro: "Five lines, five obligations — each converted into something the examiner can find in your answer.",
        steps: [
          {
            title: "Step 1: The situation sentences lend you your facts",
            text: "The brief's little story is the only world your letter needs. You may add detail that the story plausibly allows — a date, a name, what you were told on the phone — but you may not contradict it or wander into a different grievance. Invent specifics freely: a letter that says the delivery arrived 'on Tuesday the fourth' is easier to act on, and easier to credit, than one built of general complaint.",
            examples: [
              {
                english: "Brief: a wrongly inscribed birthday cake. Your paragraph: the order form said 'seventy', the box said 'seventeen' — a detail the brief never supplied, and none it forbids.",
                note: "Invented specifics serve the situation; new grievances break it.",
              },
            ],
          },
          {
            title: "Step 2: The reader line chooses the register for you",
            text: "Before you have written a word, the task has already decided how formal your letter must be, because it has already decided who is reading. A company you have never met, a council office, a newspaper: formal. A manager, a landlord, a teacher you know by name: semi-formal. A friend or a relative: informal. The band is not asking about your mood; it is telling you the setting.",
            examples: [
              {
                english: "'Write a letter to the customer services manager' — a role, not a friend: the letter opens 'Dear Sir or Madam' or 'Dear Ms Okafor', never 'Hi there'.",
                note: "The reader's identity is the register instruction hiding in plain sight.",
              },
            ],
          },
          {
            title: "Step 3: The three bullets are the spine of the letter",
            text: "Each bullet under 'In your letter' is one scored job — describing, requesting, explaining, suggesting or apologising — and the three together define what complete means for this task. The natural shape follows: three jobs, three paragraphs, each opening in a way that makes its job visible. A letter that handles two bullets beautifully and waves at the third is two-thirds of a letter as far as the task criterion is concerned.",
            examples: [
              {
                english: "Bullets: describe the problem / say what you want done / explain the effect on the day — three paragraphs, three visible jobs, nothing merely waved at.",
                note: "The bullets are not suggestions to be absorbed; they are the skeleton.",
              },
            ],
          },
          {
            title: "Step 4: A printed opening is copied, not improved",
            text: "When the band tells you to begin the letter as shown, the printed greeting starts your answer exactly as printed — word for word, comma included. It counts towards your words, and it fixes the level of formality for everything that follows, including the sign-off you must now match. A friendlier greeting of your own devising breaks a printed instruction exactly as a missed bullet does.",
            examples: [
              {
                english: "The band prints 'Dear Sir or Madam'; the letter begins there, ends 'Yours faithfully', and keeps the whole body at that height.",
                note: "The printed opening is a requirement wearing the costume of a pleasantry.",
              },
            ],
          },
          {
            title: "Step 5: The support line and the floors finish the contract",
            text: "The essay band's standing demand is that opinions arrive supported: reasons that explain why your view holds, and examples drawn from your own knowledge and experience that make those reasons concrete. An essay of assertion alone, however fluent, is answering at half strength. Both tasks then close with a minimum word count that works as a scoring rule rather than a stylistic hint — the next component takes that seriously.",
            examples: [
              {
                english: "Claim: street markets deserve a second chance — reason: they keep money circulating near the people who spend it — example: the Saturday market that revived a dead town square.",
                note: "The support line, obeyed in three moves.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — The word floors are scoring rules" },
      {
        type: "text",
        text: "Both printed minima are floors with consequences. An answer that falls visibly short is treated as unfinished work: the task criteria describe partially covered answers low on the scale, and shortness is the most mechanical way to get there (every band statement in this course is an informed estimate, never a promise). Sensible working targets sit clear of the danger zone — around 160 to 190 words for the letter and 270 to 320 for the essay. There is no maximum, but length past the point of coverage buys nothing except fresh opportunities to make mistakes. Count as you go, by lines: learn how many words your handwriting or your typing puts on an average line, and the floor becomes a two-second glance instead of an anxious minute. The letter has a particular trap here, because one hundred and fifty words feels short — and it is. A letter that gives each bullet only a sentence routinely discovers it has finished at a hundred and thirty.",
      },
      { type: "heading", text: "Component 4 — The opening's partner: matching the sign-off" },
      {
        type: "table",
        title: "The greeting and the close it commits you to",
        headers: ["Reader", "Greeting", "Sign-off"],
        rows: [
          ["An organisation, or someone you cannot name", "Dear Sir or Madam,", "Yours faithfully,"],
          ["A person you address by name or role — a manager, a landlord", "Dear Ms Okafor, / Dear Mr Bhatt,", "Yours sincerely,"],
          ["A friend or relative", "Dear Sam,", "Best wishes, / Take care, / Love,"],
        ],
        caption: "When the band prints the greeting, half of this table has been decided for you; supplying the matching close is your job.",
      },
      {
        type: "example",
        title: "The band at work — seven encounters",
        items: [
          {
            english: "A candidate's letter stops at 138 words, two sentences short of the floor; it reads as finished and is scored as unfinished, because the floor is a rule and not a reader's impression.",
            note: "Under length is the most preventable of all scoring losses.",
            domain: "exam",
          },
          {
            english: "The brief prints 'Dear Sir or Madam' as the opening; the candidate copies it exactly, writes the body at the same height of formality, and closes with the matching 'Yours faithfully'.",
            note: "The printed opening obeyed, and allowed to govern the letter.",
            domain: "exam",
          },
          {
            english: "A letter that describes a faulty kettle in loving detail and recounts the family's suffering, but never once says what the writer wants done — the request bullet, and the letter's purpose, missing.",
            note: "The reader is left holding a description and no action.",
            domain: "exam",
          },
          {
            english: "A learner writes the band's five line-types on cards — situation, reader, bullets, opening, floor — and audits one practice brief a day against them for a week.",
            note: "The band memorised as a checklist, not as prose.",
            domain: "study",
          },
          {
            english: "A message to a supplier describes a late delivery in three tidy paragraphs but never names a required date, so the supplier replies with warm apologies and no delivery.",
            note: "Instructions define the reader's next move, in exams and out of them.",
            domain: "work",
          },
          {
            english: "A letting agent's form asks for two references and a move-in date; the applicant who sends the references and forgets the date loses the flat to someone slower but complete.",
            note: "Half an answer is not an answer, in exams or in housing.",
            domain: "life",
          },
          {
            english: "An essay argues that second-hand shopping is wise across four confident paragraphs and supports none of them with so much as one worked example — the support line unanswered in full.",
            note: "Assertion is half an answer, whatever its fluency.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "Instruction mistakes corrected",
        items: [
          {
            wrong: "The instructions are basically the same on every letter task, so I read them once and trust the pattern.",
            right: "Read the whole brief every time: the situation, the reader and all three bullets change from task to task, and some briefs print a fixed opening while others leave the greeting to you.",
            reason: "Half-reading the band is how a deliverable gets skipped by a candidate who knew perfectly well what the band usually says.",
          },
          {
            wrong: "'Write at least 150 words' means roughly 150, and a tight 145 beats a padded 165.",
            right: "Aim comfortably past the floor — around 170 words for the letter and 300 for the essay — and spend the extra words developing each bullet properly rather than padding.",
            reason: "The floor is a requirement the criterion checks; short answers read as unfinished however polished their sentences happen to be.",
          },
          {
            wrong: "A printed greeting is just a friendly default, and I can replace it with something warmer.",
            right: "Copy the printed opening exactly, count it in your words, and match everything else — including the sign-off — to the level it sets.",
            reason: "Improvising around a printed line breaks an instruction just as surely as ignoring a bullet, and it also destroys the register consistency the letter is being judged on.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One brief, audited end to end",
        reading: {
          text: "Practice brief in the style of the test: 'You recently ordered a birthday cake from a local bakery for your mother's seventieth birthday. When you collected it, the inscription on top was misspelled and the sponge was dry. Write a letter to the bakery manager. In your letter, describe the problems with the cake, say what you would like the bakery to do, and explain how the faults affected the celebration. Begin your letter as follows: Dear Sir or Madam,'",
          task: "List every requirement this brief prints, in the order it prints them, before you open the writing tab.",
        },
        writing: {
          task: "Restate the situation in one sentence of your own, name the deliverables the band demands, then draft the letter's opening line and the three topic sentences — one for each bullet.",
          guide: [
            "Situation in my words: I collected my mother's seventieth-birthday cake and found two faults with it.",
            "Deliverables to name: a description of both faults, a clear request, an account of the effect on the day — plus the printed opening and the word floor.",
            "Opening move: the printed greeting, then a purpose sentence at the same height of formality.",
            "Bullet openers: 'The problems were…' / 'What I would ask…' / 'The effect on the afternoon…'",
          ],
          model:
            "Situation, restated: I collected my mother's seventieth-birthday cake last Saturday and found two faults with it. Deliverables: a description of both faults, a clear request for what the bakery should do, an account of how the faults affected the party, the printed greeting copied exactly, and a length safely past the floor. Opening and topic sentences: Dear Sir or Madam, I am writing about the birthday cake I ordered from your bakery, which I collected last Saturday for my mother's seventieth. The cake arrived with two faults, one visible before we cut it and one we discovered as we served. What I would ask is either a full refund or a replacement made properly, ready within the week. The effect on the afternoon was greater than either fault suggests on its own, and I will set out how in the rest of this letter.",
        },
        listening: {
          script:
            "Tutor: Let's audit this letter against its brief, line by line. Situation? Student: Cake for her mother's seventieth, collected last Saturday, wrong inscription, dry sponge. Tutor: All within the brief — good. Reader? Student: The bakery manager. Tutor: And the greeting? Student: I changed 'Dear Sir or Madam' to 'Hello there' — it felt friendlier. Tutor: That is requirement one broken: a printed opening is copied, not improved. Now the three bullets. Student: I described the faults, and I explained the effect on the party. Tutor: And the request? Student: …I implied it. Tutor: The band does not score implications. That is the second break, and it takes the letter's purpose with it.",
          task: "Which two printed requirements did the audit find broken?",
        },
        speaking: {
          task: "Explain to a partner, in under a minute, what a GT letter brief obliges you to deliver — using only the line-types from this lesson.",
          frames: [
            "The situation line hands me my facts, which means…",
            "The reader line decides the register before I write, because…",
            "Each 'In your letter' bullet is…",
            "The printed opening, where there is one, must be…",
          ],
          checklist: [
            "Did I name all five line-types of the letter band?",
            "Did I state the essay's support demand in my own words?",
            "Did I give my working word targets for both tasks?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The audit names the letter's jobs before any prose exists, and the drafted topic sentences then hand each job its own opening line — structure a reader can tick paragraph by paragraph."],
          ["Grammar", "The drafted sentences run at one controlled height — full forms, no contractions — matched to the printed 'Dear Sir or Madam' that governs the whole letter."],
          ["Vocabulary", "Plain, exact words carry the audit: 'faults', 'refund or replacement', 'ready within the week' — each phrase doing work instead of decorating."],
          ["Coherence", "Each drafted sentence announces the paragraph it will open, so the letter's route is legible from the plan alone."],
          ["Task fulfilment", "Every requirement found in the audit reappears in the drafts: the printed greeting, the description, the request, the effect — and a length target safely above the floor."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the brief twice — once for the story, once for the instructions — and mark the three bullets; the second read is where deliverables are found."],
          ["While the clock runs", "Hold the bullets at the top of your mind and tick each one as its paragraph lands; a bullet without a paragraph is a mark already gone."],
          ["If you are stuck", "Return to the printed lines: the situation supplies facts, the reader supplies register, the bullets supply the next paragraph's job."],
          ["Final minutes", "Check the finished answer against the band: greeting copied, every bullet tickable from its own paragraph, the floor cleared, the sign-off matched."],
        ],
      },
      {
        type: "summary",
        points: [
          "A GT letter brief is five line-types — situation, reader, three bullets, printed opening where given, word floor — and each line is a requirement the criterion checks.",
          "The three 'In your letter' bullets are the spine: three scored jobs, three paragraphs, each opening in a way that makes the job visible.",
          "A printed opening is copied word for word and sets the register, including the matching sign-off: 'Dear Sir or Madam' ends 'Yours faithfully'.",
          "The essay band demands support — reasons and examples from your own experience — and both word floors are scoring rules: work to roughly 170 words for the letter and 300 for the essay.",
          "The reader named in the brief has already chosen the register; your job is to notice the choice, not to make it.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          {
            question: "How does the GT Writing paper divide its hour?",
            options: ["Two tasks of thirty minutes each", "About twenty minutes for the letter and about forty for the essay", "About forty minutes for the letter and about twenty for the essay"],
            correctIndex: 1,
            explanation: "Task 1 is guided to roughly a third of the hour and Task 2 to two thirds, which matches Task 2's double weight in the final writing band.",
            from: "The examination format, section by section",
          },
          {
            question: "Which criterion reads your letter against its printed instructions?",
            options: ["Coherence and Cohesion", "Lexical Resource", "Task Achievement for the letter and Task Response for the essay"],
            correctIndex: 2,
            explanation: "The task criteria are the coverage judges: one name for Task 1, another for Task 2, and both read the answer against the brief before admiring its language.",
            from: "How Writing and Speaking are assessed",
          },
          {
            question: "Inside the Writing score, how do the two tasks combine?",
            options: ["The essay counts twice against the letter's once", "The higher of the two bands is awarded", "The two bands are simply averaged"],
            correctIndex: 0,
            explanation: "Task 2 carries double weight, which is why an instruction missed in the essay costs twice the same miss in the letter.",
            from: "The band scoring system",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "In a GT letter brief, what is the scoring status of the three 'In your letter' bullets?",
        hints: ["Each bullet has to be findable in its own right — where would the examiner look?"],
        options: [
          { id: "a", text: "Useful suggestions about possible content, which the letter may adapt freely." },
          { id: "b", text: "Three scored jobs that define completeness — each needs visible coverage, normally its own paragraph." },
          { id: "c", text: "Three alternative openings, of which the letter chooses the easiest one." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Three scored jobs that define completeness — each needs visible coverage, normally its own paragraph.",
          "The bullets are the brief's spine: the task criterion ticks them one by one, and a letter that cannot be ticked three times is a partially addressed letter whatever its prose achieves.",
          "(a) demotes a requirement to a suggestion — the classic half-read; (c) mistakes a job list for a menu of options.",
        ),
        tags: ["gwriting", "instructions", "bullets"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the case and find the two broken requirements.",
        hints: ["Check the greeting first, then count how many of the three bullets the letter actually performs."],
        passageTitle: "The audit that found two breaks",
        passage:
          "Practice brief in the style of the test: 'You joined a new sports centre mainly for its swimming pool. Since you joined, the pool has been closed for repairs. Write a letter to the centre manager. In your letter, describe how the closure affects your routine, say what you would like the centre to do, and suggest how the centre could keep members informed in future.' Rania's letter opens 'Hello there!', praises the gym equipment for a paragraph, describes her broken routine in detail, and closes 'Hope that helps — Rania'.",
        question: "Which two printed requirements does Rania's letter break?",
        options: [
          { id: "a", text: "The word floor and the closing note about addresses." },
          { id: "b", text: "The register demanded by the named reader — 'Hello there!' to a manager — and two of the three bullets: the request and the suggestion never appear." },
          { id: "c", text: "The situation, because she mentions the gym equipment instead of the pool." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The register demanded by the named reader — 'Hello there!' to a manager — and two of the three bullets: the request and the suggestion never appear.",
          "The reader is a manager, so the register should sit at 'Dear Ms…' height, and the bullets are the letter's job list: the description is done, the request and the members-information suggestion are missing entirely, which is a partially addressed letter on the task criterion.",
          "(a) names two requirements the passage gives no evidence about breaking; (c) misreads a paragraph of context as a new grievance — writing about the centre she joined stays inside the situation.",
        ),
        tags: ["gwriting", "instructions", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. What does the printed word floor actually oblige you to do?",
        hints: ["The printed line says 'at least' — what does that word commit you to?"],
        options: [
          { id: "a", text: "Stop exactly at the printed number, because extra words create extra errors." },
          { id: "b", text: "Clear the minimum with a margin — roughly 170 words for the letter and 300 for the essay — because visibly short answers are scored as incomplete." },
          { id: "c", text: "Write as much as you can, since length itself is rewarded by the criteria." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Clear the minimum with a margin — roughly 170 words for the letter and 300 for the essay — because visibly short answers are scored as incomplete.",
          "'At least' sets a floor, not a target: answers that fall short read as unfinished work on the task criterion, while a modest margin above the floor costs nothing and lets each bullet breathe.",
          "(a) treats a minimum as a finish line — the exact misreading the wording forbids; (c) invents a length reward the criteria do not pay.",
        ),
        tags: ["gwriting", "instructions", "word-count"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State your working word targets for the two GT tasks and the reason neither sits at the printed minimum.",
        question: "What word counts will you aim at for the letter and the essay, and why do both sit above the printed numbers?",
        acceptedAnswers: [
          "about 170 for the letter and 300 for the essay, because visibly short answers score as incomplete",
          "roughly 160 to 190 for the letter and 270 to 320 for the essay, clearing the floors with a margin",
          "170 and 300, so each bullet and paragraph is properly developed",
          "about 170 words for task 1 and 300 for task 2 — the minima are floors, not targets",
        ],
        keywords: ["170", "300"],
        hints: [],
        feedback: fb(
          "About 170 words for the letter and about 300 for the essay.",
          "The printed minima are requirements rather than goals: an answer that lands visibly under them is scored as unfinished, while a modest margin costs nothing and gives every bullet the development it needs to be tickable.",
          "Answers that quote the exact minima as targets have read a floor as a finish line.",
        ),
        tags: ["gwriting", "instructions", "word-count"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. What does the essay band's support demand make obligatory in every GT essay?",
        hints: [],
        options: [
          { id: "a", text: "A statistic with a named source in every paragraph, to prove the argument." },
          { id: "b", text: "Support for the view you take: reasons that explain why it holds, and examples from your own knowledge or experience that make the reasons concrete." },
          { id: "c", text: "A short personal story as the introduction, whatever the prompt asks." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Support for the view you take: reasons that explain why it holds, and examples from your own knowledge or experience that make the reasons concrete.",
          "The support line attaches two standing demands to every essay family: opinions travel with reasons, and reasons touch ground in examples you can describe from your own world — assertion alone, however fluent, is half an answer.",
          "(a) over-specifies what counts as support and rewards invented numbers; (c) confuses one possible example type with the demand itself.",
        ),
        tags: ["gwriting", "instructions", "essay-band"],
      }),
    ],
    assignment: {
      title: "The deliverables audit",
      instructions:
        "A practice brief in the style of the test reads: 'You paid online for a furniture store to deliver and assemble a bookshelf. The delivery arrived a day late, parts were missing, and no one has replied to your email. Write a letter to the store's customer service manager. In your letter, describe what went wrong at each stage, say what you want the store to do, and explain how the delays have affected you.' Write (1) the situation restated in one sentence of your own, (2) a numbered list of every requirement the band prints, including register and word floor, and (3) the letter's opening line plus three topic sentences — one per bullet.",
      minWords: 70,
      maxWords: 180,
    },
    homework: [
      "Copy a letter band from memory — all five line-types — then check it against this lesson's list; whatever you left out is the requirement you would have skipped under pressure.",
      "Take one practice brief from the Writing task library, mark its bullets, and write only the opening line and three topic sentences; a full letter built on them later will tell you whether the skeleton was sound.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-requirements",
    title: "Analysing question requirements",
    description:
      "Four questions decode any GT prompt — what is happening, who is reading, why the letter exists, what it must cover — and the deliverable count they produce decides whether the answer counts as complete.",
    objectives: [
      "split any letter brief into its situation, audience, purpose and bullets",
      "let the reader's identity fix the register before the first sentence exists",
      "count a prompt's deliverables and give each one visible space in the answer",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Requirements analysis is the cheapest minute in Writing. Before planning, before language, a GT prompt can be taken apart with four questions — what is happening, who is reading, why am I writing, what must I cover — and the answers convert the prompt into a short list of jobs. This lesson drills the four-question split on letters, extends the same counting discipline to the essay's question parts, and prices the commonest failure on the paper: the answer that does two of three jobs and is marked, unsentimentally, as two-thirds of a task.",
        beforeYouStart: [
          "You can name the five line-types of a letter band and the bullets' status as deliverables.",
          "You have written at least one timed letter or essay, even a rough one.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the opening minute of both GT tasks"],
          ["Task & question types", "Complaints, requests, invitations, apologies, explanations and thank-yous on Task 1; opinion, discussion and two-part prompts on Task 2"],
          ["What is assessed", "Task Achievement and Task Response — partial coverage caps these criteria whatever the surrounding language achieves"],
          ["Why this matters", "Two of three bullets done is a partially addressed letter; one of two essay questions answered is half an essay — arithmetic no fluency repairs"],
        ],
      },
      { type: "heading", text: "Component 1 — The four-question split" },
      {
        type: "text",
        text: "Run the four questions in order and the brief surrenders. The situation: what has happened, in the brief's own two or three sentences — this is the store of facts your letter will draw on. The audience: who receives the letter — a stranger in an office, a person you know by name, a friend — and this answer, as the next component shows, settles almost everything about tone before you have composed a phrase. The purpose: why the letter exists at all — to complain, to request, to invite, to apologise, to explain, to thank, to advise — because each purpose brings its own engine: a complaint narrates and then demands, an invitation describes and then persuades, an apology acknowledges and then repairs. The bullets: the three jobs printed under 'In your letter', which turn the purpose into a to-do list. Write the four answers in the margin — eight words each is plenty — and the letter has been analysed before it has been planned.",
      },
      { type: "heading", text: "Component 2 — The reader fixes the register" },
      {
        type: "steps",
        title: "Meeting the reader before writing",
        intro: "Three kinds of reader, three heights of letter — and one rule that keeps the height steady.",
        steps: [
          {
            title: "Step 1: A stranger or an organisation — formal",
            text: "When the brief sends you to a company, a council, a newspaper or any reader you cannot greet by name, the letter lives at the formal height: 'Dear Sir or Madam', 'Yours faithfully', full forms rather than contractions, requests built with 'would' and 'could', grievances stated as facts rather than feelings.",
            examples: [
              {
                english: "To a bus company about a missed connection: 'I am writing to ask how a service advertised every twenty minutes ran once in two hours.'",
                note: "The formal shelf: measured, factual, unhurried.",
              },
            ],
          },
          {
            title: "Step 2: A person you address by name or role — semi-formal",
            text: "Managers, landlords, teachers, neighbours you address properly: 'Dear Ms Cole' or 'Dear Mr Bhatt', 'Yours sincerely', politeness with a pulse — the register of working respect. You may be on friendly terms with the person in real life; the letter still keeps the surname and the full forms until the relationship is genuinely social.",
            examples: [
              {
                english: "To your landlord, Ms Cole: 'Could we agree a date for someone to look at the roof? The stain has spread since March.'",
                note: "Warmth and correctness are not opposites at this height.",
              },
            ],
          },
          {
            title: "Step 3: A friend or relative — informal",
            text: "Where the relationship is the register: first names, contractions throughout, phrasal verbs, dashes and an exclamation or two, closings like 'Take care' or 'Love'. The informality is a setting, not an excuse — the bullets still all need doing, and the errors still all count.",
            examples: [
              {
                english: "To a cousin: 'I'd completely forgotten the concert was that Friday — I'm still cross with myself!'",
                note: "Contractions and honesty, doing the apology's work.",
              },
            ],
          },
          {
            title: "Step 4: The dial holds one setting to the end",
            text: "Whichever height the reader sets, the whole letter keeps it. A formal letter that turns chatty in its last paragraph, or a friendly note that suddenly says 'I would be grateful for your assistance', has broken consistency — and consistency is the register quality the criterion reads. Decide once, in the analysis minute, and let the decision govern every sentence after it.",
            examples: [
              {
                english: "A complaint that begins 'Dear Sir or Madam' and ends 'Cheers, let me know!' has not become friendlier; it has become two letters stapled together.",
                note: "Register drift reads as carelessness, never as versatility.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Counting deliverables" },
      {
        type: "text",
        text: "The count is the analysis's output. A letter brief prints three bullets, so the letter owns at least three jobs; the essay decides its own count from its question parts. A two-part prompt — why is this happening, and what can be done — is two jobs, each needing real space, usually a body paragraph each. A discussion prompt — discuss both views and give your own opinion — carries two jobs as well: fair airtime for both views, and a position of your own that appears in the introduction and survives to the conclusion. An opinion prompt can hide a job inside its claim: if it tells you that families eat together less 'because everyone now has a screen of their own', your answer must confront that reason, not merely the conclusion it supports. Write the count in the margin, in digits, before planning: the number is what complete means, and every part of the count needs a home you could point at in the finished answer.",
      },
      { type: "heading", text: "Component 4 — The price of one ignored bullet" },
      {
        type: "text",
        text: "What does the missing third actually cost? The published descriptors place answers that touch only part of the task down in the Band 5 region, and a skipped bullet or an unhandled question part is the most mechanical way to get there (as throughout this course, descriptor talk here is an estimate, never a promise). The arithmetic is unforgiving in both directions. In the letter, one bullet of three gone removes a third of the task's coverage, and the criterion scores coverage before it scores anything else. In the essay, the same miss is doubled by Task 2's double weight — and it survives excellent vocabulary, because the language criteria cannot pay a debt the task criterion has booked. This is why analysis comes before planning, and planning before prose: each earlier stage exists to protect the stages after it.",
      },
      {
        type: "example",
        title: "Briefs under the pencil — seven cases",
        items: [
          {
            english: "The bookshelf brief split in thirty seconds — situation: late delivery, missing parts, an ignored email; audience: customer service manager; purpose: complain and request; bullets: describe, demand, explain — written in the margin, eight words a line.",
            note: "The four-question split is fast enough to run every time.",
            domain: "exam",
          },
          {
            english: "A two-part essay prompt about disappearing street markets, counted as two: the causes own a body paragraph, the revival ideas own the other, and the conclusion names both.",
            note: "The count, given homes — nothing left to drift.",
            domain: "exam",
          },
          {
            english: "An invitation brief whose third bullet is 'say why your friend in particular should come'; the candidate describes the event warmly but never once names the friend — the personal-reason bullet unticked.",
            note: "A bullet done without its purpose is half a bullet.",
            domain: "exam",
          },
          {
            english: "A learner keeps a requirements page: every practice brief gets its four answers and its count written at the top, and after two weeks the missing-bullet mistakes have stopped appearing.",
            note: "Counting is a habit before it is a skill.",
            domain: "study",
          },
          {
            english: "A client asks a freelancer three things — availability, a rate, a sample of work — and the reply covering only availability and rate waits a week while the client chases the missing sample.",
            note: "The working world runs the same tick-list the examiner does.",
            domain: "work",
          },
          {
            english: "A family thread about a weekend away answers the dates and the destination and ignores who is driving, so the whole plan waits on one unanswered bullet.",
            note: "Everyday messages fail by the same arithmetic.",
            domain: "life",
          },
          {
            english: "A discussion essay states a strong opinion in every paragraph and never gives the other view fair airtime — one of the two printed jobs undone, with fluent language throughout.",
            note: "Fluency cannot buy back a job the prompt set.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "Analysis mistakes corrected",
        items: [
          {
            wrong: "If my letter is about the right subject, the task is being done.",
            right: "Subject plus jobs plus reader makes a task: the situation says what happened, the bullets say what must be done, and the reader says how it must sound.",
            reason: "The task criterion ticks jobs performed, not topics mentioned — a letter can orbit the right subject and still leave its work undone.",
          },
          {
            wrong: "The essay's second question is a loose end my conclusion can pick up in one sentence.",
            right: "Every question part is a scored job that needs visible space — normally its own body paragraph — not a closing aside.",
            reason: "A deliverable squeezed into a final flourish reads to the examiner as untouched, because there is nowhere to put the tick.",
          },
          {
            wrong: "Register is a style decision I make while drafting, depending how the letter is flowing.",
            right: "The reader's identity sets the register in the analysis minute, and the whole letter holds that one setting.",
            reason: "Register decided mid-draft is register that drifts, and drift is exactly the inconsistency the criterion is built to notice.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Four questions, then a commitment",
        reading: {
          text: "Practice brief in the style of the test: 'You have worked at the same small company for two years, and your current hours clash with a course you want to take. Write a letter to your manager, Mr Silver. In your letter, explain why you want to change your working hours, describe the arrangement you have in mind, and say how the change could help the team. You do not need to write any addresses.' A candidate's first drafted line reads: 'Hey there! Hope the week's going okay — quick thing about my shifts.'",
          task: "Run the four-question split on the brief, then say what the candidate's opening line has already got wrong.",
        },
        writing: {
          task: "For the same brief, write the margin analysis — audience with register, purpose in six words, one keyword line per bullet — then draft the opening greeting, the purpose sentence, and the three bullet topic sentences.",
          guide: [
            "Audience: Mr Silver — known by name, so semi-formal: 'Dear Mr Silver' to 'Yours sincerely', full forms on paper.",
            "Purpose in six words: 'request changed hours, keep the course'.",
            "Bullet lines: why the course matters / the hours I propose / the gain for the team.",
            "Openers: 'The reason I am writing…' / 'The arrangement I have in mind…' / 'For the team, the change would…'",
          ],
          model:
            "Analysis — audience: my manager, Mr Silver: semi-formal, 'Dear Mr Silver' to 'Yours sincerely', no contractions. Purpose: request a change of hours so I can take a course. Bullets: my reason, my proposed pattern, the team's benefit. Drafts: Dear Mr Silver, I am writing to ask whether my working hours could be rearranged from next month. The reason is a Tuesday-evening course I have been offered a place on, which sits squarely across my current finishing time. The arrangement I have in mind is a half-hour earlier start on Tuesdays and Thursdays, with the two lost hours moved to Wednesday mornings, when the phones are quietest. For the team, the change would put me at my desk for the afternoon handover on both days, which is currently the moment we are thinnest on the ground.",
        },
        listening: {
          script:
            "Tutor: Before you write a word — four questions. What is happening? Student: I want to change my hours for a course. Tutor: Reader? Student: My manager, Mr Silver. So — 'Dear Mr Silver', and no jokes in the opening line. Tutor: Which your draft already has. Purpose? Student: Requesting a change — six words: request changed hours, keep the course. Tutor: Bullets? Student: My reason, my proposed pattern, and the benefit for the team. Tutor: Count them. Student: Three. Three paragraphs, then — and the benefit one is not optional, even though it is the hardest.",
          task: "Why does the tutor refuse to let the student treat the third bullet as optional?",
        },
        speaking: {
          task: "Take any letter brief from your practice list and talk a partner through the four questions in under forty-five seconds — situation, audience, purpose, bullets — ending with the count.",
          frames: [
            "The situation, in the brief's own words, is…",
            "The reader is…, which sets the register at…",
            "The purpose is…, so the letter's engine is…",
            "The bullets are…, which makes the count…",
          ],
          checklist: [
            "Did the audience answer name the register, not just the person?",
            "Did every bullet get its own keyword line?",
            "Did I finish with the count, in digits?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The analysis is written before the drafts, and the three drafted openers then map one-to-one onto the brief's bullets — the reader can tick the structure from the plan alone."],
          ["Grammar", "The drafts hold one height throughout: full forms, measured requests, no contractions — the grammar of a letter to someone addressed by surname."],
          ["Vocabulary", "Concrete working nouns carry the persuasion — 'afternoon handover', 'the phones are quietest' — instead of praise-speak about the workplace."],
          ["Coherence", "Each drafted sentence announces its paragraph's job, so the letter's route is legible before any paragraph exists."],
          ["Task fulfilment", "All three bullets are visibly opened, the reader's identity is respected in every line, and the count of three is honoured in the structure."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Run the four questions and write the count in the margin: situation, audience with register, purpose, bullets — forty-five seconds, once."],
          ["While the clock runs", "Work to the count: each job keeps its assigned space, and no paragraph is finished until its job is visibly done."],
          ["If you are stuck", "Re-read only the margin answers: the situation supplies the next fact, the reader supplies the next tone, the bullets supply the next job."],
          ["Final minutes", "Tick the bullets against the count one by one; any unticked job gets its sentence now, however brief, before the paper closes."],
        ],
      },
      {
        type: "summary",
        points: [
          "Four questions decode any letter brief — situation, audience, purpose, bullets — written in the margin inside a minute.",
          "The reader's identity fixes the register before drafting: organisation, formal; named person, semi-formal; friend, informal — one setting held to the end.",
          "The count defines complete: three bullets are three jobs; a two-part essay is two; a discussion prompt is both views plus your position.",
          "A clause hiding inside a prompt is a job hiding with it: confront the reason given, not just the conclusion it supports.",
          "One skipped job makes a partially addressed answer — an outcome on the task criterion that language quality does not repair, and double the damage in Task 2.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson or module.",
        items: [
          {
            question: "What scoring status do the three 'In your letter' bullets carry?",
            options: ["Optional content ideas", "Scored deliverables — the basis of the letter's completeness", "Alternative paragraph starters"],
            correctIndex: 1,
            explanation: "The instructions lesson established each bullet as a job the criterion ticks; this lesson turns that into the count that runs the plan.",
            from: "Understanding task instructions",
          },
          {
            question: "A brief sends you to a city council. What register does that reader set?",
            options: ["Informal — councils are public services", "Formal — an organisation you cannot greet by name", "Semi-formal — a named individual"],
            correctIndex: 1,
            explanation: "The reader decides the register before drafting: unnamed organisations take 'Dear Sir or Madam' and 'Yours faithfully', with full forms throughout.",
            from: "Understanding task instructions",
          },
          {
            question: "Which criteria read coverage rather than language?",
            options: ["Coherence and Cohesion", "Lexical Resource", "Task Achievement for the letter and Task Response for the essay"],
            correctIndex: 2,
            explanation: "The task criteria judge whether the set jobs were done; the other criteria judge the language and organisation the jobs arrived in — coverage is scored first.",
            from: "How Writing and Speaking are assessed",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What are the four questions that decode a letter brief?",
        hints: ["Four questions, in the order the lesson runs them."],
        options: [
          { id: "a", text: "Introduction, body, close, sign-off." },
          { id: "b", text: "Situation, audience, purpose, bullets." },
          { id: "c", text: "Grammar, vocabulary, register, length." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Situation, audience, purpose, bullets.",
          "The four-question split converts a brief into facts, a reader with a register, an engine, and a job list — everything the plan will need, found in under a minute.",
          "(a) lists the answer's furniture, not the brief's parts; (c) lists areas of assessment, not questions to ask of the prompt.",
        ),
        tags: ["gwriting", "requirements", "four-questions"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the case and find the homeless job.",
        hints: ["Count the essay's question parts before judging the outline."],
        passageTitle: "The outline that answered half",
        passage:
          "Practice prompt in the style of the test: 'In many towns, street markets are struggling as more shopping moves online. Why are markets finding life difficult, and what could encourage people to use them again?' A candidate's plan reads: introduction — markets matter to a town's character; body one — market stalls cost more to run than a website; body two — parking in town centres is difficult and expensive; conclusion — towns should value their markets more.",
        question: "Which job does the outline leave without a home?",
        options: [
          { id: "a", text: "The causes — the outline never explains why markets struggle." },
          { id: "b", text: "The second question's job — the ideas that could bring people back — which the conclusion merely wishes at instead of answering." },
          { id: "c", text: "The topic — markets barely appear in the plan." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The second question's job — the ideas that could bring people back — which the conclusion merely wishes at instead of answering.",
          "The prompt prints two jobs: the difficulties and the revival ideas. Both bodies serve the first job; the second gets one sentiment in the close, which is where jobs go to disappear — a margin count written before planning would have caught it.",
          "(a) misreads the two bodies, which do handle causes; (c) is wrong on the facts — the topic is present throughout, and the failure is coverage, not relevance.",
        ),
        tags: ["gwriting", "requirements", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Who decides the register of a GT letter?",
        hints: ["Whose identity is the register decision made by?"],
        options: [
          { id: "a", text: "The writer, as a matter of personal style." },
          { id: "b", text: "The task's named reader — an organisation, a person by name, or a friend — and the decision is made before drafting starts." },
          { id: "c", text: "The purpose, so a complaint is always formal and an invitation always informal." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The task's named reader — an organisation, a person by name, or a friend — and the decision is made before drafting starts.",
          "The brief's reader line settles the register in the analysis minute: organisations take the formal height, named colleagues and landlords the semi-formal, friends the informal — and the dial then holds that one setting to the sign-off.",
          "(a) hands a scoring decision to mood; (c) almost works but breaks on real briefs — a manager receives semi-formal complaints, and a council can receive a formal invitation.",
        ),
        tags: ["gwriting", "requirements", "register"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the counting rule.",
        hints: [],
        sentence: "Each bullet, question part and hidden clause in a prompt is one ___ that must own visible space in the finished answer.",
        acceptedAnswers: ["deliverable", "job", "task part", "requirement"],
        feedback: fb(
          "deliverable",
          "The counting rule converts printed wording into tick-list entries: every bullet, question and buried clause is one unit of work, and complete means every unit has space a reader could point at.",
          "Answers naming paragraphs or sentences confuse the container with the content — deliverables live inside paragraphs but are not themselves paragraphs.",
        ),
        tags: ["gwriting", "requirements", "counting"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. A letter covers two of its three bullets, and its language is strong. What has the task criterion seen?",
        hints: [],
        options: [
          { id: "a", text: "A strong answer with one small gap — the language criteria will average the miss away." },
          { id: "b", text: "A partially addressed letter: a third of the task's coverage is gone, and no accuracy or vocabulary pays that debt back." },
          { id: "c", text: "An automatic zero for format, whatever the prose achieves." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A partially addressed letter: a third of the task's coverage is gone, and no accuracy or vocabulary pays that debt back.",
          "Coverage is scored before language: the descriptors place partial addressing low on the task scale (an estimate, not a promise), and the language criteria cannot compensate for a job the letter never did.",
          "(a) misunderstands how the criteria divide the work — they are scored separately, not averaged; (c) overstates the consequence: the letter is capped, not erased.",
        ),
        tags: ["gwriting", "requirements", "task-achievement"],
      }),
    ],
    assignment: {
      title: "Split, count, commit",
      instructions:
        "Take this practice prompt in the style of the test: 'In many families, children now spend most of their free time on screens. Why has this happened, and what can parents do about it?' Write (1) the prompt's job count, with each job named in a line; (2) a one-sentence position that commits to an extent; and (3) a margin plan showing where each job will live. Then run the same four-question split for one letter brief of your choice from the Writing task library — audience with register, purpose, one keyword line per bullet.",
      minWords: 60,
      maxWords: 170,
    },
    homework: [
      "Collect three practice briefs — one formal, one semi-formal, one informal — and write the four-question margin analysis for each; compare your audience lines with a partner's, and settle any register disagreements by the reader, not the mood.",
      "Find an old answer of yours that lost marks for coverage: write down which of the four questions was skipped — situation, audience, purpose or bullets — and the line that would have supplied the missing job.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-planning",
    title: "Planning",
    description:
      "The two-minute letter plan — reader, purpose, one line per bullet, register — and the four-minute essay plan of position, paragraph map and example bank, in notation brief enough to survive the writing that follows.",
    objectives: [
      "run the two-minute letter plan under test conditions, ending with a register note",
      "run the four-minute essay plan: position first, then the paragraph map and example bank",
      "keep plan notation in keywords and hold the plan frozen once writing starts",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Watch an unplanned letter fail and you will see the same three minutes wasted three times: a stalled opening while the writer hunts for a register, a mid-letter return to the brief to check the third bullet, and a rushed close where the word count is discovered rather than managed. Planning removes all three stalls by moving every decision to the front, where it costs two minutes instead of ten. This lesson builds the two plans the GT paper rewards — four quick notes before any letter, and a position-first map before any essay — plus the notation habits that keep a plan usable while the clock runs.",
        beforeYouStart: [
          "You can run the four-question split on a brief and count its deliverables.",
          "You have written at least one timed letter and felt the minutes disappear.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the opening minutes of both GT tasks"],
          ["Task & question types", "Every letter purpose and every essay family in the General Training paper"],
          ["What is assessed", "Indirectly everything: the plan settles coverage, register and organisation before any language is attempted"],
          ["Why this matters", "The unplanned letter discovers its register at sentence three and its third bullet at minute eighteen — both too late to fix cheaply"],
        ],
      },
      { type: "heading", text: "Component 1 — The two-minute letter plan" },
      {
        type: "steps",
        title: "Four notes, then write",
        intro: "Two minutes, four lines — each line banking one decision the drafting would otherwise keep re-taking.",
        steps: [
          {
            title: "Step 1: Note the reader and the register pair",
            text: "One line, decided from the brief's reader: who receives this, and therefore how the letter opens and closes. Writing the pair down — 'manager, sincere', 'council, faithful', 'cousin, best wishes' — makes the register a decision you have already made rather than one you keep making.",
            examples: [
              {
                english: "Margin note for a letter to a landlord: 'Ms Cole — sincerely, no contractions.'",
                note: "Five words that hold the register for twenty minutes.",
              },
            ],
          },
          {
            title: "Step 2: Note the purpose in one line",
            text: "The letter's reason for existing, in six words or fewer: 'complain, request refund and apology', 'invite, persuade, arrange travel'. This line is the letter's engine — when a paragraph stalls, the purpose line says what the next sentence is for.",
            examples: [
              {
                english: "Purpose line for a letter to neighbours who are away: 'feed the cat, water plants, ask one favour.'",
                note: "The engine, written where drafting can see it.",
              },
            ],
          },
          {
            title: "Step 3: Note one line per bullet",
            text: "Each bullet gets a keyword line containing the concrete material its paragraph will need: names, dates, the specific request. These lines are the difference between a paragraph that arrives finished and one that hunts for details mid-draft — and hunting is where minutes and accuracy go to die.",
            examples: [
              {
                english: "Bullet line: 'describe — kettle, three weeks, two emails unanswered.'",
                note: "The paragraph's facts, banked before the paragraph exists.",
              },
            ],
          },
          {
            title: "Step 4: Note the register reminders and any printed opening",
            text: "Two or three words that keep the height steady: 'formal — full forms, no dashes', or 'warm — contractions fine, one exclamation at most'. If the band prints the opening, copy it onto the plan; the plan then starts with a line you know is right.",
            examples: [
              {
                english: "Register note: 'semi-formal — could we, not can you; Yours sincerely.'",
                note: "The dial setting, written down so it cannot drift.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 2 — The four-minute essay plan" },
      {
        type: "text",
        text: "The essay plan runs position first. Write your view in one sentence of ten words or fewer, including how far you agree and, if you hold one, the drawback you concede. If your view will not fit into ten words, it has not finished forming — and half-formed views have a habit of changing at paragraph three, taking the essay with them. The position then generates the paragraph map: introduction, two body briefs, close — each brief a line of keywords holding the argument, the mechanism and the example, which together are the support the band demands. Then the example bank: two everyday cases, written as fragments — 'my uncle's repair shop', 'the free bus weekend in my old city' — each able to ground a body paragraph. Examples banked in the plan are the difference between an essay that supports its claims and one that gestures at 'for example, in many countries', the emptiest five words in the language.",
      },
      {
        type: "table",
        title: "Where the words go",
        headers: ["Part", "Working length", "What lives there"],
        rows: [
          ["Letter — opening", "about 20 words", "greeting, purpose sentence, one line of context"],
          ["Letter — each bullet paragraph", "about 40 words", "the bullet's job, done with concrete detail"],
          ["Letter — close", "about 20 words", "forward-looking line plus the matched sign-off"],
          ["Essay — introduction", "about 45 words", "topic restated, position, route in one clause"],
          ["Essay — each body", "about 90 words", "one argument: point, mechanism, example"],
          ["Essay — conclusion", "about 45 words", "position restated in fresh words, strongest support named"],
        ],
        caption: "The letter's arithmetic lands near 165 and the essay's near 270, both clearing their floors — which is why neither plan needs extra paragraphs to feel safe.",
      },
      { type: "heading", text: "Component 3 — Notation that survives the writing" },
      {
        type: "text",
        text: "A plan you cannot read at a glance is a plan you will abandon by paragraph two. Keep the notation brutal: keywords, not sentences; arrows for consequence; abbreviations you will still recognise in half an hour. A plan written in full sentences is a first draft with worse grammar, and it has already spent the decisions it existed to bank. Write the plan where the answer will live — the margin, the top of the answer space — because a plan on a drifting scrap protects nothing. And when the plan is finished, it stays finished: an idea that arrives mid-letter gets two words in the margin and a verdict at the final read, never a promotion on the spot. Promoting ideas mid-draft is how one strong paragraph eats the space of two planned ones, and how the third bullet ends up with a single rushed sentence.",
      },
      { type: "heading", text: "Component 4 — Why planning pays in Task 1 too" },
      {
        type: "text",
        text: "Twenty minutes for one hundred and fifty words can feel luxurious; it is not. The letter is short, which means there is no slack anywhere in it: a register that drifts cannot be blamed on fatigue, and a bullet squeezed into one thin sentence has nowhere to hide. Both of those classic failures are planning failures. The register note is what holds the dial at one height from greeting to sign-off, because the height was chosen before the first sentence rather than during it. The bullet lines are what guarantee each paragraph its concrete detail, because the kettle, the three weeks and the two unanswered emails were banked at minute two instead of remembered at minute seventeen. And the plan's arithmetic — twenty words, forty, forty, forty, twenty — is what keeps the word count managed instead of discovered. The essay needs the plan for its argument; the letter needs it for its discipline.",
      },
      {
        type: "example",
        title: "Plans on the page — seven cases",
        items: [
          {
            english: "A letter plan of four lines — 'council, faithful', 'object, propose alternative', 'library use: children's hour, study desk, Saturday crowd', 'formal, full forms' — written in a hundred and ten seconds; the letter then transcribes without a stop.",
            note: "Four notes are enough to carry twenty minutes.",
            domain: "exam",
          },
          {
            english: "An essay plan that reads, in full: 'screens: parents can hold the line — reasons: sleep, shared meals; example: cousin's phone basket; concede: peers matter — counter: habits are learnable.'",
            note: "Position, map and bank in five fragments.",
            domain: "exam",
          },
          {
            english: "A learner times a fortnight of plans and finds her pattern: plans finished inside the time box produced the calmest letters; plans that sprawled past seven minutes produced shorter answers than no plan at all.",
            note: "Over-planning is a real failure mode — time it.",
            domain: "study",
          },
          {
            english: "A team briefed in two minutes before a difficult client call — outcome wanted, two facts, the ask, the fallback — holds its line through an hour of pressure.",
            note: "Decision-banking is a professional habit before it is an exam one.",
            domain: "work",
          },
          {
            english: "At minute fourteen, an unplanned candidate stops mid-sentence to reread the brief for the third bullet's exact wording; the planned candidate is writing that paragraph, because its keyword line has been in the margin since minute two.",
            note: "The stall is a planning hole with a clock on it.",
            domain: "exam",
          },
          {
            english: "A call to an airline planned on the back of a boarding pass — refund wanted, flight number, one sentence of the request, the fallback — survives three transfers and a bad line, and ends in a voucher rather than a shrug.",
            note: "Notes before talking work outside exams too.",
            domain: "life",
          },
          {
            english: "A fresh example strikes mid-essay; the candidate writes 'phone repair story — check later' in the margin, finishes the planned paragraph, and swaps it in during the final read because it genuinely beat the banked one.",
            note: "The freeze rule lets good ideas in without letting them take over.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "Planning mistakes corrected",
        items: [
          {
            wrong: "The letter is only 150 words — planning it wastes two minutes I could spend writing.",
            right: "The two-minute plan is what keeps the letter at one register with every bullet's details banked: it prevents the three stalls that eat more time than the plan costs.",
            reason: "Short tasks punish unplanned writing faster than long ones, because twenty minutes holds no slack for rediscovering the brief mid-draft.",
          },
          {
            wrong: "A good plan records everything I might say, so nothing is lost.",
            right: "A plan is a set of commitments, not a brainstorm: one register note, one purpose line, one line per bullet — nothing else gets a line.",
            reason: "A plan that keeps every option open has made no decisions, and undecided plans produce the drifting letters they were meant to prevent.",
          },
          {
            wrong: "I plan in full sentences so the plan doubles as a draft and saves time twice over.",
            right: "Plan in keywords and draft in sentences: a plan in prose has already spent your decisions, at half the quality, before the real writing starts.",
            reason: "The plan's job is to bank choices cheaply; prose written twice is time spent twice, and the second version is usually the flatter one.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "From brief to plan to opening",
        reading: {
          text: "Practice brief in the style of the test: 'A friend you have not seen for several years is moving to your city next month and has written asking for advice. Write a letter to your friend. In your letter, suggest two or three places they should get to know first, warn them about one thing in the city, and offer to help them settle in.' A candidate's two-minute plan reads: 'Priya — warm, contractions, Best wishes.' 'Welcome + advise.' 'Places: Sunday market, riverside walk, the night food street off Grant Road.' 'Warn: ring road at rush hour — buses, not taxis.' 'Help: airport pickup, spare room first week.'",
          task: "Name everything this plan has decided before any prose exists.",
        },
        writing: {
          task: "For the brief above, write your own two-minute plan in keywords — register note, purpose line, one line per bullet — then draft the letter's first two sentences: the greeting and a purpose sentence that sounds like the register you chose.",
          guide: [
            "Register note first: friend — contractions, first name, a warm close.",
            "Purpose line in six words: 'welcome her, advise her, offer help'.",
            "Bullet lines with concrete material: which places, which warning, which help.",
            "Opening frames: 'Dear Priya, It was wonderful to hear you're moving here at last…' / '…and I can't wait to start showing you the city myself.'",
          ],
          model:
            "Plan: Priya — warm, contractions, Best wishes. Purpose: welcome, advise, offer help. Places: the Sunday market, the riverside walk, the night food street off Grant Road. Warn: the ring road at rush hour — buses beat taxis every time. Help: airport pickup, spare room for the first week. Opening: Dear Priya, It was wonderful to hear you are moving here at last — after three years of hearing about this plan, I can finally start showing you the city myself. There is a lot to get excited about and a few things to get right early, so here is everything I would want told to me on day one.",
        },
        listening: {
          script:
            "Tutor: Two minutes on the clock — plan only, no prose. Reader? Student: Priya — a friend, so warm all the way through: contractions, first name. Tutor: Purpose? Student: Welcome her, advise her, offer help. Tutor: Six words — good. Bullet lines? Student: Places: the market, the riverside walk, the food street. Warning: the ring road at rush hour. Help: airport pickup, spare room. Tutor: Concrete enough to draft from. Now — when you are writing and a better idea arrives, a fourth place, say — what happens? Student: I note it in two words and keep going? Tutor: Exactly. The plan is frozen; the final read is where new ideas get judged.",
          task: "What does the tutor say to do with an idea that arrives after the plan is frozen?",
        },
        speaking: {
          task: "Defend a plan in thirty seconds: state the register note, the purpose line and the bullet lines for a brief your partner chooses, in that order.",
          frames: [
            "My register note reads…, because the reader is…",
            "My purpose line is… — six words, no more.",
            "My bullet lines are…, and each one banks the detail its paragraph needs.",
            "If a new idea arrives mid-letter, I will…",
          ],
          checklist: [
            "Did the register note name the reader as well as the tone?",
            "Did every bullet line contain concrete material, not just a topic?",
            "Did the whole defence take less than a minute?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The plan's four notes convert directly into the letter's shape — register note to opening, purpose line to first sentence, bullet lines to paragraphs — so the structure writes itself."],
          ["Grammar", "The register note decides the grammar before drafting: contractions chosen deliberately for a friend, rather than slipped into a formal letter by accident."],
          ["Vocabulary", "The bullet lines bank concrete nouns — the Sunday market, the food street, the spare room — so drafting spends its attention on sentences, not on remembering content."],
          ["Coherence", "The purpose line acts as the letter's through-line, and any drafted sentence can be checked against it in a glance."],
          ["Task fulfilment", "Every bullet has its banked line before writing starts, which makes the missing-bullet mistake structurally impossible."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Box the planning time as writing time: two minutes for the letter, four for the essay, counted and kept."],
          ["While the clock runs", "Transcribe the plan: one note to each station, and mid-draft ideas noted in two words for the final read, never promoted on arrival."],
          ["If you are stuck", "Read the plan, not the brief: the register note fixes the tone, the purpose line fixes the direction, the bullet lines supply the next fact."],
          ["Final minutes", "Check the answer against the plan: every bullet line landed, the register held at one height, the floor cleared with words to spare."],
        ],
      },
      {
        type: "summary",
        points: [
          "The two-minute letter plan is four notes: reader and register pair, purpose in one line, a keyword line per bullet, and the register reminders with any printed opening.",
          "The four-minute essay plan runs position first — ten words or fewer — then the paragraph map and an example bank of two everyday cases.",
          "Notation stays brutal: keywords, arrows, abbreviations; a plan in sentences is a draft, and drafts are not plans.",
          "The plan is frozen when writing starts: late ideas get two words in the margin and a verdict in the final read.",
          "Planning pays in Task 1 as much as Task 2: the register note prevents drift, and the bullet lines prevent the thin third paragraph.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What must be counted before a plan can be drawn?",
            options: ["The words in the prompt", "The prompt's deliverables — each bullet or question part gets a home in the plan", "The paragraphs in a model answer"],
            correctIndex: 1,
            explanation: "The requirements lesson's count defines completeness: a plan that has not housed every deliverable is a plan to be partially addressed.",
            from: "Analysing question requirements",
          },
          {
            question: "Which standing essay demand does the plan's example bank satisfy before drafting starts?",
            options: ["A quotation in every paragraph", "The support line: reasons and examples from your own knowledge or experience", "A fixed number of words per paragraph"],
            correctIndex: 1,
            explanation: "Banked examples are the instruction band's support demand, converted into planned material instead of improvised filler.",
            from: "Understanding task instructions",
          },
          {
            question: "Who sets the register that the plan's first note records?",
            options: ["The writer's mood on the day", "The reader named in the brief", "The length of the letter"],
            correctIndex: 1,
            explanation: "The audience answer from the four-question split is what the register note writes down — the reader, decided before drafting, held to the end.",
            from: "Analysing question requirements",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What are the two-minute letter plan's four notes?",
        hints: ["Four notes, in the order the lesson runs them."],
        options: [
          { id: "a", text: "Introduction, three bodies, conclusion, title." },
          { id: "b", text: "Reader and register pair; purpose in one line; one keyword line per bullet; register reminders and any printed opening." },
          { id: "c", text: "Grammar check, vocabulary list, word count, sign-off." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Reader and register pair; purpose in one line; one keyword line per bullet; register reminders and any printed opening.",
          "Four notes, each banking one decision — tone, direction, content, consistency — so the drafting that follows is transcription rather than invention.",
          "(a) is essay architecture, not letter planning; (c) lists checking jobs, which belong to the final minutes, not the first two.",
        ),
        tags: ["gwriting", "planning", "letter-plan"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the case and find the two broken planning rules.",
        hints: ["What should a plan be written in — and how long should writing it take?"],
        passageTitle: "The plan that became a draft",
        passage:
          "Ken gave himself four minutes to plan a letter of complaint to a furniture store. He spent six and a half, writing: 'I would like to begin by explaining that my bookshelf arrived on Thursday the twelfth rather than the promised Wednesday, and that when I opened the box the fixing screws were missing entirely.' He then transcribed his plan almost unchanged into the letter, found himself at ninety words with only the first bullet covered, and finished the third bullet in one hurried sentence as time ran out.",
        question: "Which two planning rules did Ken break?",
        options: [
          { id: "a", text: "He planned for too few minutes, and his register was unclear." },
          { id: "b", text: "He wrote the plan in sentences rather than keywords, and he let it run past its time box — so it spent his drafting and squeezed the third bullet." },
          { id: "c", text: "He forgot the register note, and the letter drifted between formal and informal." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "He wrote the plan in sentences rather than keywords, and he let it run past its time box — so it spent his drafting and squeezed the third bullet.",
          "A plan in full sentences is a draft at half quality, and a plan past its box steals minutes from the writing it was meant to protect — the thin third bullet is the visible cost, exactly as the lesson warns.",
          "(a) misdiagnoses the failure: he had too much plan, not too little, and the passage shows no register confusion; (c) invents a drift the passage never describes.",
        ),
        tags: ["gwriting", "planning", "notation"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Why does the letter need a plan when it is only 150 words?",
        hints: ["Think about what the register note and the bullet lines each prevent."],
        options: [
          { id: "a", text: "Because examiners award marks for plans as well as letters." },
          { id: "b", text: "Because the register note holds one height for twenty minutes and the bullet lines bank each paragraph's details — preventing the stalls that short tasks cannot afford." },
          { id: "c", text: "Because planned letters are allowed to be shorter than unplanned ones." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because the register note holds one height for twenty minutes and the bullet lines bank each paragraph's details — preventing the stalls that short tasks cannot afford.",
          "Twenty minutes holds no slack: the register note prevents drift, the purpose line prevents wandering, and the bullet lines prevent the mid-draft hunt for facts — three stalls, all removed before writing begins.",
          "(a) is false — plans are never submitted or scored; (c) invents a privilege the word floor denies to everyone.",
        ),
        tags: ["gwriting", "planning", "task-one"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the essay plan's three contents, in order.",
        question: "What are the four-minute essay plan's three parts, and which comes first?",
        acceptedAnswers: [
          "position, paragraph map, example bank — position first",
          "the position sentence, then the paragraph map, then the example bank — position comes first",
          "position first, then the map of paragraphs, then the bank of examples",
          "position, map, bank — in that order",
        ],
        keywords: ["position", "paragraph", "example"],
        hints: [],
        feedback: fb(
          "Position first, then the paragraph map, then the example bank.",
          "The order is the method: a position in ten words generates the briefs each body will carry, and the bank then stocks those briefs with the everyday cases the support line demands.",
          "Answers that start with examples or paragraph counts have the engine running backwards — the position is always the first thing planned.",
        ),
        tags: ["gwriting", "planning", "essay-plan"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Halfway through body two, a striking example occurs to you that the plan did not bank. What does the planning discipline require?",
        hints: [],
        options: [
          { id: "a", text: "Adopt it immediately — the essay must follow its best material." },
          { id: "b", text: "Note it in two words, finish the planned paragraph, and judge it in the final read; adopt it only if it beats the banked example." },
          { id: "c", text: "Ignore it completely — the plan is a promise and may never change." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Note it in two words, finish the planned paragraph, and judge it in the final read; adopt it only if it beats the banked example.",
          "The freeze rule: promoting an idea mid-draft rewrites the map while the clock runs and eats the space of planned paragraphs, but a two-word note lets the idea compete in the final read, where swapping is cheap.",
          "(a) is how one strong paragraph eats an essay — the close and the coverage pay for the promotion; (c) overcorrects — the final read is exactly where better material is allowed to win.",
        ),
        tags: ["gwriting", "planning", "freeze"],
      }),
    ],
    assignment: {
      title: "Two plans, one page",
      instructions:
        "Brief one, in the style of the test: 'Your local library plans to reduce its opening hours. Write a letter to the council. In your letter, describe how you use the library, explain why shorter hours would cause problems, and suggest one alternative the council could consider.' Brief two: 'Many people now repair broken items instead of buying new ones. Why has this changed, and do you think it is a positive development?' Write the two-minute letter plan for brief one (four notes, keywords only) and the four-minute essay plan for brief two (position, paragraph map, example bank), then draft only the letter's opening two sentences and the essay's introduction.",
      minWords: 60,
      maxWords: 220,
    },
    homework: [
      "Time your next three planning sessions against the boxes — two minutes for letters, four for essays — and cut notation until each fits; anything still over the box is a draft in disguise.",
      "Take one practice brief, write its four-note plan, then write the letter twice: once from the plan and once without it. Compare the registers, the bullet coverage and your finishing times.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-paragraphs",
    title: "Paragraph organisation",
    description:
      "The letter's five stations — greeting, purpose sentence, one paragraph per bullet, forward-looking close, sign-off — beside the essay's four-block build, with opening sentences that make each deliverable tickable from the first line of its own paragraph.",
    objectives: [
      "assemble the letter's five stations in order, each doing its own job",
      "build the essay from introduction, body paragraphs and a close, one controlling idea per block",
      "write opening sentences that let the reader tick each bullet or argument without hunting",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Paragraphing is where coverage becomes visible. The examiner holding your letter is running a tick-list — bullet one, bullet two, bullet three — and paragraphs are the places ticks can land. A letter built as one solid block forces the reader to excavate jobs from inside the prose, and excavation is not what criteria reward. This lesson gives the letter its five stations and the essay its four blocks, then teaches the opening sentences that hand each deliverable to the reader on its own first line. Length discipline arrives with them, because a paragraph is a unit of work, not a unit of ink.",
        beforeYouStart: [
          "You can plan a letter with four notes and an essay with position, map and bank.",
          "You know the bullets are deliverables and that each needs visible space.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — every paragraph of both GT tasks"],
          ["Task & question types", "All letter purposes and all essay families"],
          ["What is assessed", "Coherence and Cohesion — paragraphing with a clear central topic, and progression from block to block"],
          ["Why this matters", "The one-block letter and the one-block essay bury the deliverables the task criterion is trying to find, and capped organisation caps the answer"],
        ],
      },
      { type: "heading", text: "Component 1 — The letter's five stations" },
      {
        type: "table",
        title: "The letter's five stations",
        headers: ["Station", "Job", "Working length"],
        rows: [
          ["1. Greeting", "the opening line — printed or chosen — matched to the reader", "one line"],
          ["2. Purpose sentence", "the letter's reason, stated in the first sentence after the greeting", "one sentence"],
          ["3. Bullet paragraphs", "one paragraph per 'In your letter' bullet, each opening on its job", "about 40 words each"],
          ["4. Forward-looking close", "one line pointing to the next step — a reply, a date, an action", "one or two sentences"],
          ["5. Sign-off", "the close matched to the greeting: faithfully, sincerely, or a friendly word", "one line"],
        ],
        caption: "Five stations, five jobs: a letter that has all five can be ticked by a reader who never glances back at the brief.",
      },
      {
        type: "text",
        text: "The stations run in order, and each earns its place by doing a job nothing else does. The greeting sets the height; the purpose sentence tells the reader why the letter exists before any detail delays the answer; the bullet paragraphs do the task's work in the brief's own order; the close points forward — what you would like to happen next, or what you will do next; and the sign-off matches the greeting, so the letter ends at the height it began. Two of the five stations are furniture and three are work, but all five are scored: a letter with no forward-looking close feels interrupted rather than finished, and a sign-off that contradicts the greeting undoes a register held for a hundred and seventy words.",
      },
      { type: "heading", text: "Component 2 — The essay's four blocks" },
      {
        type: "text",
        text: "The essay builds in four blocks, and their jobs rhyme with the letter's. The introduction restates the prompt's situation in fresh words, states the position, and may promise the route in a clause. Each body paragraph carries one controlling idea — the planned brief — through its point, its mechanism and its example; two bodies are the comfortable maximum at this length. The conclusion restates the position in fresh words, names the strongest support, and adds nothing new. Where the letter's close looks forward to a reply, the essay's close looks back over the argument — but both are short, both echo rather than extend, and neither is a place for material its own essay has not earned. The one-block essay, two hundred and eighty fluent words in a single slab, is the standing trap on the other task, and it fails exactly the way the one-block letter does: with nowhere to put a tick.",
      },
      { type: "heading", text: "Component 3 — Opening sentences that do the paragraph's job" },
      {
        type: "steps",
        title: "First sentences that let the reader tick",
        intro: "The first line of each paragraph either hands over its job or makes the reader hunt for it — and hunting is where marks go missing.",
        steps: [
          {
            title: "Step 1: In the letter, open each bullet paragraph on its bullet",
            text: "The first sentence of each middle paragraph should make its bullet identifiable without a return trip to the brief. A request paragraph opens on the request; an explanation paragraph opens on the effect it explains. Test it: hand the paragraph's first line to a stranger holding the brief, and they should be able to say which bullet it serves.",
            examples: [
              {
                english: "Bullet: 'say what you want the store to do.' Opener: 'What I am asking for is a replacement bookshelf, delivered and assembled, within the next two weeks.'",
                note: "The tick lands on sentence one.",
              },
            ],
          },
          {
            title: "Step 2: In the essay, open each body on its argument",
            text: "An essay body's first sentence argues — it takes the paragraph's brief and states it as a claim someone could push back against. 'Convenience' is a topic; 'being able to shop at any hour mostly serves people whose working day has already swallowed their evening' is an argument, and the paragraph can now carry it.",
            examples: [
              {
                english: "Body brief: repair culture — the wallet case. Opener: 'Repairing what we own keeps a household's biggest costs visible, which replacement quietly hides.'",
                note: "A claim, not a label — the push-back test passes.",
              },
            ],
          },
          {
            title: "Step 3: End paragraphs where their job ends",
            text: "Paragraphs break where the job changes, and only there. A one-sentence paragraph in a letter is usually a stray detail looking for a home; a six-sentence paragraph is usually two jobs sharing one block, with the second job's opener buried mid-paragraph where no tick can find it. When a paragraph feels too long, look for the buried second job and give it the next block.",
            examples: [
              {
                english: "A five-sentence bullet paragraph split at its 'also' — the detail before it stays, the favour after it becomes its own paragraph with its own opener.",
                note: "The buried 'also' is the seam, and seams are where breaks belong.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Length discipline" },
      {
        type: "text",
        text: "Each unit of work deserves its unit of space. A letter's bullet paragraphs run two to four sentences, around forty words — enough for the job plus one concrete detail, short enough that no job hides inside another. An essay body runs four to six sentences, roughly ninety words, carrying point, mechanism and example to a sentence or two each. Below those ranges, jobs go underdone: a one-sentence bullet paragraph almost never gives the criterion anything to tick. Above them, jobs go blurred: a second idea creeps in uninvited and the paragraph stops being about one thing. Length is not scored directly — but a letter of one hundred and seventy words whose five stations are visible, and whose three middle paragraphs are each tickable from their first lines, has done everything organisation asks of it.",
      },
      {
        type: "example",
        title: "Paragraphs under the lens — seven cases",
        items: [
          {
            english: "A complaint letter cut into its five stations: 'Dear Sir or Madam', 'I am writing to request…', one paragraph per bullet, 'I would be glad to discuss this by phone', 'Yours sincerely' — each station one glance wide.",
            note: "The tick-list has somewhere to land five times.",
            domain: "exam",
          },
          {
            english: "An essay body of four sentences — a claim about repair costs, the mechanism (repairs force a price comparison; replacement hides it), an example (a screen repair at a fifth of the price of a new phone), and a wrap — holding one idea end to end.",
            note: "One controlling idea, one chassis.",
            domain: "exam",
          },
          {
            english: "A letter whose third bullet, the request, is folded into the closing line as 'hope you can sort something out': the reader cannot tick a request that was never made as one.",
            note: "The close points forward; it does not do a bullet's work.",
            domain: "exam",
          },
          {
            english: "A learner writes only openers for a week — first sentences for three briefs' worth of paragraphs — and trains the habit of paragraphs that announce their job before they start it.",
            note: "Opener-only drills build the tickable reflex.",
            domain: "study",
          },
          {
            english: "A team update leads its second paragraph with the news that matters — 'the venue has double-booked us, and we already have a plan' — and the whole team reads to the end; the version that opened with the booking history was skimmed past.",
            note: "Readers navigate by openers at work too.",
            domain: "work",
          },
          {
            english: "A neighbour's dispute message, first drafted as one angry block, is re-cut into four short paragraphs — the fence, the promise made in spring, the ask, a suggested date — and gets a friendly reply by evening.",
            note: "Paragraphing is persuasion's scaffolding everywhere.",
            domain: "life",
          },
          {
            english: "A 160-word letter in one solid block: warm, accurate, and structurally invisible — the reader must excavate the three jobs instead of being handed them.",
            note: "The one-block letter fails by architecture, not by language.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "Paragraphing mistakes corrected",
        items: [
          {
            wrong: "Paragraphs break wherever the text looks long enough on the page.",
            right: "Break where the job changes: the brief's bullets already mark the letter's jobs, and the plan's briefs mark the essay's — the break belongs at those seams.",
            reason: "The criterion reads structure, and length-based breaks scatter one job across blocks while burying the next job's opener where ticks cannot reach.",
          },
          {
            wrong: "The closing line can carry the third bullet if the letter is running long.",
            right: "The close looks forward — a reply, a date, a next step — and a bullet done in a closing aside is a bullet the reader cannot tick.",
            reason: "Every deliverable needs its own station; folding one into the furniture is how letters finish a job short.",
          },
          {
            wrong: "An essay this short does not really need a conclusion — the introduction already said my position.",
            right: "The close restates the position in fresh words and names the strongest support; an essay without one reads as unfinished, like a letter with no sign-off.",
            reason: "Both tasks end with furniture that completes their architecture, and the criteria read the completion as well as the content.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The anatomy, assembled",
        reading: {
          text: "Practice brief in the style of the test: 'You joined a new sports centre because of its swimming pool, but the pool has now been closed for repairs for three weeks. Write a letter to the centre manager. In your letter, describe how the closure affects your routine, say what you would like the centre to do, and suggest how the centre could keep members better informed.' A model letter's stations: 'Dear Ms Danquah,' — 'I am writing about the pool closure, which is now into its third week and beginning to cause me real problems.' — 'I joined the centre in March specifically for the morning swims…' / 'What I would ask is either a partial refund of this month's fee or access to a partner pool…' / 'One suggestion, offered in a constructive spirit: a short weekly email to members…' — 'I would be glad to come to the front desk any weekday morning to discuss the options.' — 'Yours sincerely,'",
          task: "Label the five stations, then say which sentence in each bullet paragraph lets you tick its bullet.",
        },
        writing: {
          task: "For the same brief, write the three bullet paragraphs and the forward-looking close — the greeting and purpose sentence are given above — with each bullet paragraph opening on its bullet in the first line.",
          guide: [
            "Description paragraph: your routine before, and the three weeks since — concrete details, at the semi-formal height the greeting sets.",
            "Request paragraph: name the one thing you want in the first sentence — refund, partner access, or the remedy you prefer.",
            "Suggestion paragraph: one workable idea, offered as a suggestion rather than a grievance.",
            "Close: a forward-looking line — an invitation to discuss, or a date by which a reply would help — then the matching sign-off.",
          ],
          model:
            "I joined the centre in March specifically for the morning swims, which fitted neatly before work and kept a recurring back problem quiet; three weeks without them has meant home exercises that help about half as much. What I would ask is either a partial refund of this month's membership or temporary access to the partner pool on Miller Street, both of which other members have mentioned to me. One suggestion, offered in a constructive spirit: a short weekly email to members while the repairs run, saying what has been done and what remains — silence is what turns an inconvenience into a complaint. I would be glad to come to the front desk any weekday morning to discuss the options. Yours sincerely,",
        },
        listening: {
          script:
            "Tutor: Your letter is accurate and the tone is right, but read it as a reader with a checklist. Where is the description? Student: First paragraph — the morning swims, the back problem. Tutor: Good. The request? Student: Second… no, wait — it is in the last line: 'hope something can be done about the fee.' Tutor: That is a wish, not a request, and it sits in the close where nothing gets ticked. Give it its own paragraph, open with 'What I would ask is…', and name one thing. And the suggestion? Student: Also buried — I put it after the request. Tutor: Then it gets the block after that, opening on the suggestion itself. Your close then just points forward, and the letter ends 'Yours sincerely' — which, I note, finally matches 'Dear Ms Danquah'.",
          task: "What three moves does the tutor prescribe for the buried jobs?",
        },
        speaking: {
          task: "Describe the letter's five stations from memory, using one letter you have written as the running example — one sentence per station.",
          frames: [
            "The greeting sets the height, which in my letter was…",
            "The purpose sentence tells the reader why the letter exists — mine said…",
            "Each bullet paragraph opens on its bullet, so…",
            "The close points forward, and the sign-off matches the greeting, so…",
          ],
          checklist: [
            "Did I name all five stations in order?",
            "Did my example letter give each station its own sentence?",
            "Could a listener tick the three bullets from my description alone?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The three bullet paragraphs open in the brief's own order — routine, remedy, suggestion — so the letter's structure mirrors the task's structure and every job is findable."],
          ["Grammar", "The register holds at semi-formal throughout: full forms, measured requests ('What I would ask is…'), and a suggestion framed with 'offered in a constructive spirit' rather than complaint."],
          ["Vocabulary", "Concrete nouns carry each job — the morning swims, the partner pool on Miller Street, the weekly email — instead of general talk about facilities and services."],
          ["Coherence", "Each paragraph's opener announces its job, and the close hands the reader a next step, so the letter progresses station by station rather than drifting."],
          ["Task fulfilment", "All three bullets are tickable from their own opening lines, the forward-looking close does no bullet's work, and the sign-off matches the greeting the brief's reader demanded."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Give each planned bullet line its own station: three middle paragraphs, in the brief's order, before any prose exists."],
          ["While the clock runs", "Open each paragraph on its job — bullet or argument — and break only where the job changes; if a paragraph reaches its sixth sentence, hunt the buried second job."],
          ["If you are stuck", "Read the paragraph's opener back to yourself: it names the job, and the next sentence is always that job's mechanism or detail."],
          ["Final minutes", "Read the first line of every paragraph in sequence: they should recite the letter's jobs or the essay's route, and any job missing from that recitation is missing from the answer."],
        ],
      },
      {
        type: "summary",
        points: [
          "The letter has five stations — greeting, purpose sentence, one paragraph per bullet, forward-looking close, sign-off — and each does a job nothing else does.",
          "The essay builds four blocks: introduction, two bodies, conclusion — one controlling idea per block, with the close restating in fresh words and adding nothing new.",
          "Openers do the tickable work: a bullet paragraph's first line names its bullet; an essay body's first line states its argument as a claim.",
          "Length follows the job: two to four sentences for a letter's bullet paragraphs, four to six for an essay body — below is underdone, above is two jobs in one block.",
          "The one-block letter and the one-block essay fail identically: accurate prose with no architecture for the reader's tick-list to land on.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "What do the plan's bullet lines become once drafting starts?",
            options: ["A word bank for the conclusion", "One paragraph each, opened on their own bullet", "Three sentences inside the same paragraph"],
            correctIndex: 1,
            explanation: "The planning lesson banked one keyword line per bullet precisely so each could become its own station in this lesson's anatomy.",
            from: "Planning",
          },
          {
            question: "How many jobs does a GT letter brief set, and where must they be visible?",
            options: ["Two jobs, in the opening and close", "Three jobs, one per middle paragraph, tickable from each paragraph's first line", "One job, spread across the letter at will"],
            correctIndex: 1,
            explanation: "The requirements lesson's count of three becomes this lesson's architecture: three stations, each opening on its own deliverable.",
            from: "Analysing question requirements",
          },
          {
            question: "Which criterion reads paragraphing directly?",
            options: ["Task Achievement", "Lexical Resource", "Coherence and Cohesion"],
            correctIndex: 2,
            explanation: "The organisation criterion credits a clear central topic per paragraph and progression between them — which is why structural failures cap it before language gets a hearing.",
            from: "How Writing and Speaking are assessed",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What are the letter's five stations, in order?",
        hints: ["Count them off on a letter you know well."],
        options: [
          { id: "a", text: "Introduction, body one, body two, body three, conclusion." },
          { id: "b", text: "Greeting, purpose sentence, one paragraph per bullet, forward-looking close, sign-off." },
          { id: "c", text: "Situation, audience, purpose, bullets, word floor." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Greeting, purpose sentence, one paragraph per bullet, forward-looking close, sign-off.",
          "Five stations, five jobs: the greeting sets the height, the purpose sentence answers why, the bullet paragraphs do the task's work, the close points forward, and the sign-off matches the start.",
          "(a) is essay architecture — close, but the letter's stations are its own; (c) is the four-question split from requirements analysis, not the letter's shape.",
        ),
        tags: ["gwriting", "paragraphs", "stations"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the letter and find the structural flaw.",
        hints: ["Which job has been folded into the furniture?"],
        passageTitle: "The request in the wrong station",
        passage:
          "Rafael's letter to his landlord about a broken gate runs: 'Dear Ms Cole, I am writing about the side gate, which has been hanging loose since the storm two weeks ago. The gate blocks the recycling bins, and the children have started climbing through the gap, which worries me. The hinges look rusted through at the bottom, and the wood has split where the lock sits. Anyway, hope you can send someone at some point — let me know. Best, Rafael.'",
        question: "What is structurally wrong with this letter, and what should change?",
        options: [
          { id: "a", text: "Nothing — the letter covers the gate, the bins and the children, which is three jobs." },
          { id: "b", text: "The request is folded into the close as 'hope you can send someone at some point' — it needs its own paragraph, opening with a specific ask and a timeframe." },
          { id: "c", text: "The greeting is wrong; the letter should open 'Dear Sir or Madam'." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The request is folded into the close as 'hope you can send someone at some point' — it needs its own paragraph, opening with a specific ask and a timeframe.",
          "The letter describes excellently but never requests: an ask inside the closing aside — vague and undated — cannot be ticked by a reader looking for the request job, and 'Best' after 'Dear Ms Cole' wobbles the register at the last step; the request belongs in its own station with a named remedy and date.",
          "(a) counts topics rather than jobs — the brief-shaped work is description plus request, and one of them is homeless; (c) misreads the reader: a landlord known by name takes 'Dear Ms Cole', not the formal pair.",
        ),
        tags: ["gwriting", "paragraphs", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. What should the first sentence of an essay body paragraph do?",
        hints: ["The push-back test tells you which kind of sentence you have written."],
        options: [
          { id: "a", text: "Announce the topic area the paragraph will stay inside." },
          { id: "b", text: "State the paragraph's argument as a claim a reader could push back against." },
          { id: "c", text: "Quote the prompt so the examiner can see it was read." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "State the paragraph's argument as a claim a reader could push back against.",
          "An arguing opener carries the paragraph's brief as a claim — someone could disagree, which is the test — and the paragraph then supports what its first line actually said.",
          "(a) produces a label nobody could dispute, which is a topic sentence doing half its job; (c) spends the paragraph's most valuable sentence on words the examiner already has.",
        ),
        tags: ["gwriting", "paragraphs", "openers"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Complete the visibility rule.",
        hints: [],
        sentence: "A letter paragraph's opening sentence should let the reader ___ its bullet without returning to the brief.",
        acceptedAnswers: ["tick", "tick off", "identify", "spot"],
        feedback: fb(
          "tick",
          "The opener does the tickable work: naming the bullet's job in the first line gives the examiner's checklist a place to land, paragraph by paragraph.",
          "Answers that name summarising or translating describe the paragraph's content job, not the visibility job the opener exists to do.",
        ),
        tags: ["gwriting", "paragraphs", "openers"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. A 165-word letter arrives as one solid block — accurate, warm, and covering all three bullets somewhere in the prose. What has the organisation criterion seen?",
        hints: [],
        options: [
          { id: "a", text: "A valid if unusual layout: the criterion scores sentences, and the sentences are good." },
          { id: "b", text: "A letter without architecture: no stations to find, no openers to tick from, and a structural ceiling that good prose does not lift." },
          { id: "c", text: "An automatic penalty to the task criterion for format, whatever the language achieves." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A letter without architecture: no stations to find, no openers to tick from, and a structural ceiling that good prose does not lift.",
          "Coverage buried in a single block still has to be found before it can be credited: the organisation criterion reads for central topics and progression, and one slab offers neither (a description of how the descriptors behave, never a fixed verdict).",
          "(a) mistakes the criterion's job — it scores structure, and structure is the one thing the block does not have; (c) overstates the outcome: the letter is capped, not zeroed, and the task criterion may still find its jobs with enough digging.",
        ),
        tags: ["gwriting", "paragraphs", "one-block"],
      }),
    ],
    assignment: {
      title: "Five stations, labelled",
      instructions:
        "Write the full letter for this practice brief in the style of the test: 'You recently stayed at a hotel for two nights while attending a family wedding, and several things went wrong. Write a letter to the hotel manager. In your letter, describe the problems you encountered, say what you would like the hotel to do about them, and mention one thing the hotel did well.' Hold the letter to its five stations, and label each in brackets — [greeting], [purpose], [bullet 1], [bullet 2], [bullet 3], [close], [sign-off] — so the architecture is visible to your reader.",
      minWords: 100,
      maxWords: 200,
    },
    homework: [
      "Write openers only: for three practice briefs, draft each middle paragraph's first line and nothing more, then check each with the brief-in-hand test — could a stranger name its bullet from that line alone?",
      "Take one letter you have already written and mark its stations in the margin; if any station is missing or doubled, note what moved where, and rebuild the letter in five clean blocks.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-grammar",
    title: "Grammar accuracy",
    description:
      "The GT accuracy kit — contractions at the register that expects them, tense for telling what happened, articles with everyday nouns, agreement at a distance, fragments and run-ons — with the error log and a two-minute sweep that knows exactly what to hunt.",
    objectives: [
      "match contractions to the letter's register and keep the essay contraction-free",
      "control the tense set that narrates past events and states present requests",
      "run an error log and a final sweep aimed at your own top three patterns",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Accuracy under a clock is not a character trait; it is a system. Candidates who write clean letters in twenty minutes are not calmer or better educated than the rest — they know which small set of error families timed writing actually produces, they know which of those families their own letters commit, and they spend the last two minutes hunting those families by name instead of re-reading everything and catching nothing. This lesson installs the General Training accuracy kit, the log that personalises it, and the sweep that turns the final minutes from a ritual into a repair shop.",
        beforeYouStart: [
          "You can write a full timed letter and a full timed essay.",
          "You can find the subject and the main verb in a long sentence.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — every sentence of both GT tasks"],
          ["Task & question types", "Letters at every register and essays in every family: the accuracy half of the grammar criterion is task-blind"],
          ["What is assessed", "Grammatical Range and Accuracy — the error-free sentence rate first, structural variety second"],
          ["Why this matters", "Six pattern families cause most timed-writing losses in GT answers, and every one of them is a checkable habit rather than a knowledge gap"],
        ],
      },
      { type: "heading", text: "Component 1 — Two halves, one criterion" },
      {
        type: "text",
        text: "The grammar criterion pays two wages. Range pays for variety — sentences that open differently, clauses that stack cleanly, structures chosen rather than repeated. Accuracy pays for survival — sentences that reach their full stop unbroken. Across the middle of the scale it is accuracy that moves answers: the published descriptors track how often errors appear and how far they obstruct, and a page of clean simple sentences outperforms a page of ambitious sentences that keep breaking (descriptor talk throughout this course is an estimate, not a promise). The practical trade follows: attempt complexity where you can carry it, and let plain structures carry the load where you cannot. Range is built in practice, at home, over weeks. Accuracy is protected in the final two minutes, on the page, every time — and this lesson is mostly about the second job.",
      },
      { type: "heading", text: "Component 2 — The kit" },
      {
        type: "steps",
        title: "Six families, six repairs",
        intro: "Every family here shows up in timed GT writing — and every one is repaired by a mechanical move, not by knowing more grammar.",
        steps: [
          {
            title: "Family 1: Contractions at the right height",
            text: "Contractions are not informal spelling mistakes; they are register tools. In a letter to a friend they are correct and expected — 'I'm so sorry', 'we'd love to come' — and their absence reads as stiffness. In the formal letter and in the essay they are banned: 'I am writing', 'do not', 'I would appreciate'. Decide the height from the reader, then let the decision govern every verb on the page.",
            examples: [
              {
                english: "To a friend: 'I can't make Saturday, and I'm gutted about it.' To a company: 'I am unable to attend, and I regret it.'",
                note: "Same writer, two correct settings — the reader decides which.",
              },
            ],
          },
          {
            title: "Family 2: Tense for telling what happened",
            text: "Letters narrate, and narration needs its tenses in order. The past simple carries dated events: 'the gate came off its hinges on the fourteenth'. The present perfect carries unfinished states: 'I have heard nothing since'. The present simple carries what is true now and what you are asking for now: 'the gate is still loose', 'I would like a date'. Drift between them — 'the gate came off and is still hanging there since' — is the commonest tense failure in GT letters.",
            examples: [
              {
                english: "The heater failed on the second night, the receptionist promised a call back the next morning, and I have received nothing since.",
                note: "Past events, a past promise, an unfinished state — three tenses, one clean sentence.",
              },
            ],
          },
          {
            title: "Family 3: Articles with everyday nouns",
            text: "Everyday nouns follow the article logic the whole language follows. 'The' for the specific and shared — the kitchen, the delivery, the gate you have both seen mentioned. 'A' for the new and countable — a plumber, a refund, a replacement. No article for general plural statements — 'buses run late', 'letters like this take time'. The slips are small and visible: 'I would like refund' drops its 'a' at exactly the moment the request lands.",
            examples: [
              {
                english: "'I have contacted a repair service, and the engineer will visit on Tuesday' — a new service introduced, then the engineer it sends, both articles earned.",
                note: "First mention takes 'a'; second mention takes 'the'.",
              },
            ],
          },
          {
            title: "Family 4: Agreement at a distance",
            text: "The verb agrees with the head noun, however far the describing words wander from it. 'The list of repairs is long' — the head is 'list'. The traps are two: phrases that end in a plural ('one of the neighbours has complained'), and subjects stretched so long the verb forgets its owner. Re-read any subject longer than five words and check its head noun before moving on.",
            examples: [
              {
                english: "Wrong: 'The reasons for my complaint are three, and the first one are the noise.' Right: '…and the first one is the noise.'",
                note: "The head of 'the first one' is 'one' — singular.",
              },
            ],
          },
          {
            title: "Family 5: Fragments — the sentence with no engine",
            text: "A fragment is a sentence-sized group with no main verb, and under the clock it usually arrives wearing 'being': 'The main problem being the smell.' The repair is mechanical — give it a real verb ('The main problem is the smell.') or attach it to the previous sentence with a dash. Fragments read as style only when they are chosen; under exam pressure they read as slips.",
            examples: [
              {
                english: "Fragment: 'The reason being that the pool has been shut for three weeks.' Repair: 'The reason is that the pool has been shut for three weeks.'",
                note: "Every fragment under the clock is wearing 'being' — hunt the word first.",
              },
            ],
          },
          {
            title: "Family 6: Run-ons — two sentences on one comma",
            text: "A comma splice joins two complete sentences with a comma that cannot hold them: 'The tap still drips, I have turned it off at the mains.' Three repairs, any of which works: a full stop, a semicolon, or a connector that earns its comma ('and so', 'but'). The hunt is mechanical — find commas with a complete sentence on each side, and fix every one.",
            examples: [
              {
                english: "Splice: 'The delivery arrived on Thursday, the box was already open.' Repairs: '…Thursday. The box…' / '…Thursday; the box…' / '…Thursday, but the box…'",
                note: "Complete sentence, comma, complete sentence — the tell never changes.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — The error log" },
      {
        type: "text",
        text: "The log costs five minutes per practice answer and has three columns. The first column holds the sentence exactly as you wrote it. The second holds the repair, written out. The third holds the rule, in five words or fewer — 'being wants is', 'first mention takes a' — because a rule you cannot say in five words is a rule you will not retrieve under pressure. Log every error from every practice piece for a fortnight, then rank the rows: the top three are your personal error profile, and they are rarely the families a grammar book would predict for you. The log turns checking from a vague promise into a targeted search, because the final sweep can only hunt what has a name — and your top three have names now.",
      },
      { type: "heading", text: "Component 4 — The final two minutes" },
      {
        type: "text",
        text: "Each task's final two minutes run a single drill: sweep the finished answer for your logged top three families and for nothing else. A general re-read runs at skimming speed over sentences your eyes just wrote, and finds almost nothing; a named search reads each sentence once, asking one question — does every long subject's verb agree with its head? does every first-mention noun carry its 'a'? does any comma carry a complete sentence on each side? Candidates who sweep three named families repair more in two minutes than re-readers manage in five, because search with a target beats review with a hope. After every practice piece, log; before every final sweep, re-read the top three rows. That circuit — write, log, sweep — is the entire system.",
      },
      {
        type: "example",
        title: "Families in the wild — seven repairs",
        items: [
          {
            english: "An informal apology repaired for register: 'I am sorry that I did not come to the dinner' becomes 'I'm sorry I didn't make it to dinner' — the contractions the reader expected, restored.",
            note: "Family one, decided by the reader, not the mood.",
            domain: "exam",
          },
          {
            english: "Tense repaired in a complaint: 'The heater stopped working on Tuesday and I am waiting since' becomes '…and I have been waiting since' — the unfinished state gets its present perfect.",
            note: "Family two: dated event, then continuing state.",
            domain: "exam",
          },
          {
            english: "Agreement repaired at a distance: 'The list of problems with the flat are getting longer' becomes '…is getting longer' — the head noun is 'list'.",
            note: "Family four, hiding behind a plural phrase.",
            domain: "exam",
          },
          {
            english: "A splice repaired in one stroke: 'The gate is still loose, the children keep using it' becomes '…loose; the children keep using it' — a semicolon chosen from the three exits.",
            note: "Family six: any exit works, one must be taken.",
            domain: "exam",
          },
          {
            english: "A month of log rows reveals a surprise: the writer's top three are missing articles, 'being'-fragments and drifted tenses — none of them the relative clauses the textbook had her drilling.",
            note: "The log finds what intuition never volunteers.",
            domain: "study",
          },
          {
            english: "A team chat message before a client call — 'the deck is ready, the printer isn't' — gets a semicolon from the account lead, who hunts commas with sentences on both sides as a reflex now.",
            note: "The families are universal, not exam-only.",
            domain: "work",
          },
          {
            english: "A text to a flatmate catches itself mid-send: 'Still at the shop, the reason being we're out of everything' — rebuilt as 'Still at the shop, because we're out of everything' before it goes out.",
            note: "The fragment habit follows writers out of the exam room.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "Accuracy mistakes corrected",
        items: [
          {
            wrong: "Grammar errors mean I am rushing, so the cure is a slower pen.",
            right: "Errors are mostly pattern blindness, not speed: the cure is knowing your families and hunting them by name in the final minutes.",
            reason: "Slow writing under pressure mostly adds hesitation; the errors that survive are the unrecognised patterns, not the hurried ones.",
          },
          {
            wrong: "Contractions are always wrong in exams, so I avoid them everywhere.",
            right: "Contractions are correct and expected in the informal letter, banned in the formal letter and the essay — the reader decides, and a global ban makes friendly letters read like legal notices.",
            reason: "The kit treats contractions as a register tool: the reader named in the brief tells you which setting holds.",
          },
          {
            wrong: "In the final minutes I re-read the whole answer for anything that looks wrong.",
            right: "Sweep for your logged top three families by name — a targeted search finds repairs that a general re-read never does.",
            reason: "Re-reading familiar sentences runs at skim speed; search with a named target reads with a purpose, and purpose is what finds errors.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Repair, then rebuild",
        reading: {
          text: "An informal letter paragraph to a friend, before repair: 'Sorry I haven't written sooner, the new job has swallowed everything. The reason being that we are short-staffed since March. My one free evening is Thursdays, it would be lovely to see you then. I was hoping you can come to dinner next month, and I promise the sofa is more comfortable this time.'",
          task: "Find one example each of the fragment, the run-on, and the tense slip in this paragraph.",
        },
        writing: {
          task: "Repair every fault you found, then write two fresh sentences of your own that reuse two of the repaired structures — one with a correctly set contraction, one with a present perfect for an unfinished state.",
          guide: [
            "Hunt 'being' first: the fragment wants a real verb.",
            "Check the comma with a sentence on each side: it needs a full stop, a semicolon or a connector.",
            "Put the hope in a tense that matches: a present hope about the future is 'I am hoping you can come'.",
            "Keep the contractions that belong: this is a friend, so 'haven't' stays.",
          ],
          model:
            "Repaired paragraph: Sorry I haven't written sooner — the new job has swallowed everything. The reason is that we have been short-staffed since March. My one free evening is Thursdays, and it would be lovely to see you then. I am hoping you can come to dinner next month, and I promise the sofa is more comfortable this time. Fresh sentences: I've finally booked the weekend off, so Thursday the twelfth is ours if you're free. My kitchen has been out of action since the leak, so let's make it the place on the corner instead.",
        },
        listening: {
          script:
            "Tutor: Two minutes left — sweep time. What are your three? Student: Articles on first mention, 'being' fragments, and comma splices. Tutor: Then hunt only those. Line one: 'Sorry I haven't written sooner' — a contraction, but this is a friend, so it stays. Line two: 'The reason being…' — there is your fragment; give it 'is'. Line three: comma with a full sentence either side — splice; 'and' fixes it. Line four: 'I was hoping you can come' — what is that? Student: A tense slip — it should be 'I am hoping'. That one was not on my list. Tutor: Not yet — it goes in the log tonight, and maybe next month's list. Anything else? Student: No, and I am not re-reading for style. Tutor: Then you are done.",
          task: "Which three families did the student sweep for, and what happens to the tense slip?",
        },
        speaking: {
          task: "State your own top three error patterns from memory, with one repaired example of each — then let a partner test you on the repair.",
          frames: [
            "My most frequent family is…, and here is the repaired version:…",
            "My second family shows up whenever…",
            "My final two minutes hunt exactly these three, in this order:…",
          ],
          checklist: [
            "Did each family come with a real example from my own writing?",
            "Could I say each five-word rule without notes?",
            "Did I name the sweep order I will use in the test?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The repair leaves the paragraph's four-sentence shape untouched — the faults were sentence-level, so the sweep is surgical and nothing is rebuilt that did not break."],
          ["Grammar", "Every family is visibly repaired: the fragment gains its verb, the splice gains its connector, the tense slip is reset to a present hope — and the contractions stay, because the reader is a friend."],
          ["Vocabulary", "The register's everyday voice survives the repair intact — 'short-staffed', 'swallowed everything', 'the place on the corner' — because accuracy work should cost the letter nothing."],
          ["Coherence", "The repaired sentences keep their connective tissue: the dash after 'sooner', the 'and' that licenses the comma, the 'so' that carries the fresh sentence's consequence."],
          ["Task fulfilment", "The apology's work survives the edit — the invitation, the promise and the warmth all still land, which is the standard every repair should meet: fix the grammar, keep the letter."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Say your logged top three families and their five-word rules to yourself; they are the sweep's shopping list, and the list is short by design."],
          ["While the clock runs", "Set contractions by the reader in the first line and hold the setting; narrate past events in the past simple; attempt complexity only where you can carry it."],
          ["If you are stuck", "Build the sentence plain first, then upgrade one joint — a connector, a clause — rather than composing a complex sentence from a standing start."],
          ["Final minutes", "Run the three-family sweep: long subjects' verbs, first-mention articles, commas with sentences on both sides — and nothing else."],
        ],
      },
      {
        type: "summary",
        points: [
          "The grammar criterion pays range and accuracy, and accuracy moves answers across the middle of the scale: clean simple sentences outrank broken complex ones.",
          "The kit is six families: contractions by register, tense for narration, articles with everyday nouns, distant agreement, fragments, and run-ons.",
          "Contractions are a register decision — expected in the informal letter, banned in the formal letter and the essay — and the reader named in the brief makes it.",
          "The error log is three columns — what I wrote, the repair, the rule in five words — and its ranked top three is your personal error profile.",
          "The final two minutes sweep for the named top three only: search with a target finds what re-reading with a hope never does.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "Who decides whether contractions belong in your letter?",
            options: ["Your personal style", "The reader named in the brief — friend, named professional, or organisation", "The word count"],
            correctIndex: 1,
            explanation: "The requirements lesson's audience answer sets the register, and contractions live inside that decision: warm letters use them, formal letters and essays do not.",
            from: "Analysing question requirements",
          },
          {
            question: "What does each bullet paragraph's opener give the examiner — and what does a fragment do to it?",
            options: ["A word count, which the fragment reduces", "A tickable line naming the bullet's job — which a fragment weakens by arriving without a main verb", "A sign-off, which the fragment repeats"],
            correctIndex: 1,
            explanation: "The paragraphs lesson made openers the tickable surface of the letter; a fragment opener cannot state the job cleanly because it has no verb to state it with.",
            from: "Paragraph organisation",
          },
          {
            question: "What are the two halves of the grammar criterion, and which one moves answers in the middle bands?",
            options: ["Range and accuracy; accuracy — the error-free rate — is the mover", "Spelling and punctuation; spelling is the mover", "Vocabulary and idiom; idiom is the mover"],
            correctIndex: 0,
            explanation: "Module 1 named both halves, and this lesson's reading of the descriptors makes accuracy the one to protect under pressure — range is built in practice sessions.",
            from: "How Writing and Speaking are assessed",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Your letter is to a close friend. Which line is right?",
        hints: ["Read the reader first: who is this letter for?"],
        options: [
          { id: "a", text: "I am sorry that I am late, and I have brought the tickets." },
          { id: "b", text: "I'm so sorry I'm late — I've got the tickets, though!" },
          { id: "c", text: "Im sorry im late, ive got the tickets though." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I'm so sorry I'm late — I've got the tickets, though!",
          "For a friend, contractions are the correct register — natural, warm, expected — and the line uses them cleanly, with every apostrophe in place.",
          "(a) keeps perfect grammar at the wrong height — full forms to a friend read as stiffness; (c) confuses informality with carelessness, and missing apostrophes are errors at any register.",
        ),
        tags: ["gwriting", "grammar", "contractions"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the sentence with the correct tense of 'break down'.",
        hints: ["Dated event or unfinished state — which does 'three days after' need?"],
        sentence: "The washing machine ___ down three days after the guarantee expired.",
        acceptedAnswers: ["broke"],
        feedback: fb(
          "broke",
          "A dated event in finished time takes the past simple — 'three days after the guarantee expired' anchors it to the past exactly as 'on Monday' would, and the narration family is about holding that anchor.",
          "'has broken' or 'was breaking' drag a finished event into unfinished time; the since-and-for family belongs to states that continue, like 'it has been broken ever since'.",
        ),
        tags: ["gwriting", "grammar", "tense"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the paragraph and find what the sweep would catch.",
        hints: ["Hunt commas with a complete sentence on both sides, and sentences with no main verb."],
        passageTitle: "The sweep's target",
        passage:
          "A candidate's closing paragraph to a landlord reads: 'The gate has been loose since the storm, my children use it every morning on the way to school. The reason being that the bottom hinge rusted through. I have asked two handymen for quotes, neither of them has replied. I would be grateful for a date this week.'",
        question: "Which faults would a family sweep catch in this paragraph?",
        options: [
          { id: "a", text: "A misspelled word and a wrong sign-off." },
          { id: "b", text: "Two run-ons — 'since the storm, my children use it' and 'quotes, neither of them has replied' — and a fragment: 'The reason being…'." },
          { id: "c", text: "A register failure: the paragraph is too formal for a landlord." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Two run-ons — 'since the storm, my children use it' and 'quotes, neither of them has replied' — and a fragment: 'The reason being…'.",
          "Two commas each hold two complete sentences that need a full stop, a semicolon or a connector, and the 'being' line has no main verb — three catches for a sweep hunting splices and fragments, which is exactly how named searching outperforms general re-reading.",
          "(a) invents faults the passage does not contain; (c) misreads the register — measured formality to a landlord is the right height, and the faults here are structural, not tonal.",
        ),
        tags: ["gwriting", "grammar", "run-ons"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Recite the error log's structure from memory.",
        question: "Name the log's three columns, and say how long each rule is allowed to run.",
        acceptedAnswers: [
          "what i wrote, the repair, and the rule in five words or fewer",
          "my version, the corrected version, and a rule of five words maximum",
          "what i wrote; the correction; the rule — five words or fewer",
          "the error, the repair, the rule in under five words",
        ],
        keywords: ["wrote", "rule"],
        hints: [],
        feedback: fb(
          "What I wrote, the repair, and the rule in five words or fewer.",
          "The log works because each row is cheap and specific: the exact error, its exact repair, and a rule short enough to fire in two minutes — long rules are essays, and essays do not fire in sweeps.",
          "Answers that keep the columns but drop the five-word limit have kept the bookkeeping and lost the retrieval discipline the limit exists to force.",
        ),
        tags: ["gwriting", "grammar", "error-log"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. You write reliable simple sentences and unreliable complex ones. What does the accuracy half of the criterion actually reward?",
        hints: [],
        options: [
          { id: "a", text: "Attempting complexity everywhere, because variety is scored before errors are counted." },
          { id: "b", text: "A steady run of error-free sentences — so carry complexity where it holds, and let clean plain structures take the load where they do not." },
          { id: "c", text: "Short sentences only, since one error cancels all the variety on the page." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A steady run of error-free sentences — so carry complexity where it holds, and let clean plain structures take the load where they do not.",
          "The error-free rate dominates the middle of the scale, so a broken complex sentence pays range and loses accuracy at a net loss; the exam-smart trade keeps ambition where it is safe (an estimate of descriptor behaviour, never a promise).",
          "(a) reverses the scoring order; (c) abandons the criterion's other half entirely — range is still scored, and it is built in practice, deployed where it holds.",
        ),
        tags: ["gwriting", "grammar", "range"],
      }),
    ],
    assignment: {
      title: "Repair, then rebuild",
      instructions:
        "Take this faulty extract from a semi-formal letter to a landlord and repair it: 'I am writing about the heating, it has not worked since the last Wednesday in October. The problem being that the boiler is making a loud noise at night. My daughter room is very cold, she is waking up twice a night. I have phone your office two times, nobody has called back.' Write the repaired version of all four sentences, then add two sentences of your own that reuse two repaired structures — one narrating a dated event, one describing an unfinished state.",
      minWords: 60,
      maxWords: 170,
    },
    homework: [
      "Start the log tonight: three columns, five rows from your most recent practice letter, every rule five words or fewer.",
      "Before your next timed letter, read only your log's top three rows for two minutes — then sweep for exactly those families in the letter's final two minutes and count what the sweep catches.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-gwriting-vocabulary",
    title: "Vocabulary",
    description:
      "Vocabulary chosen by its reader: the formal complaint shelf beside the warm-friend shelf, the essay's plain-serious middle ground, prompt paraphrase at sentence level, tone words that move a line along the register dial, and the short spelling list worth fixing forever.",
    objectives: [
      "choose words and whole phrases from the shelf that matches the letter's reader",
      "paraphrase a prompt's situation at sentence level while keeping its key subject words",
      "control spelling risk on the words GT answers use in every paragraph",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Vocabulary is the criterion where candidates reach for decoration and examiners reward fit. A letter to a company is not improved by a friend's slang, and a letter to a friend is not improved by a company's prose; each reader has a shelf of phrases built for them, and Lexical Resource pays for choosing from the right one. This lesson stocks the two letter shelves and the essay's plain-serious middle ground, trains the paraphrase habit that keeps your opening lines yours, and closes with the spelling discipline that stops everyday words from undercutting five uncommonly good paragraphs.",
        beforeYouStart: [
          "You can set a letter's register from its reader and hold it for the whole page.",
          "You can repair your own sentences for the six accuracy families.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — word choice across both GT tasks, with the double-weighted essay most exposed"],
          ["Task & question types", "Complaints, requests, invitations, apologies and thank-yous on Task 1; opinion, discussion and two-part essays on Task 2"],
          ["What is assessed", "Lexical Resource — range, collocation and register fit, with spelling counted inside it"],
          ["Why this matters", "A stiff phrase in a friendly letter and a chatty phrase in a formal one are both misfires the criterion notices, and common-word misspellings undercut every line they touch"],
        ],
      },
      { type: "heading", text: "Component 1 — The shelf principle" },
      {
        type: "text",
        text: "Choose vocabulary by reader, not by ambition. The formal complaint shelf holds measured, latinate phrases that do their work without heat; the warm-friend shelf holds contractions, phrasal verbs and small honest intensifiers; the essay lives between them, plain and serious, closer to a good newspaper column than to either shelf's extreme. Two rules govern all three. First, phrases are filed and deployed whole — 'I would appreciate' is one item, not four words assembled on the page — because collocation is where misfires live. Second, the shelf is chosen once, by the reader, and the whole answer stays on it: mixing shelves mid-letter is the register leak that the accuracy lesson's contraction rule catches in miniature.",
      },
      { type: "heading", text: "Component 2 — The two letter shelves" },
      {
        type: "table",
        title: "Two shelves, one set of jobs",
        headers: ["The letter's job", "Formal complaint shelf", "Warm-friend shelf"],
        rows: [
          ["Stating the purpose", "I am writing to express my disappointment with…", "Just a quick note to say…"],
          ["Making the request", "I would appreciate a replacement at your earliest convenience.", "Could you possibly bring the big pan on Saturday?"],
          ["Explaining the impact", "This has caused considerable inconvenience to my family.", "It threw the whole evening out, to be honest."],
          ["Closing with a next step", "I look forward to hearing from you shortly.", "Let me know — and I can't wait to see you!"],
        ],
        caption: "Each row is the same job done at two heights; the brief's reader decides which column the whole letter lives in.",
      },
      { type: "heading", text: "Component 3 — The essay's middle shelf" },
      {
        type: "text",
        text: "The everyday essay needs neither shelf's extreme. Banned at the bottom: chat idiom — 'loads of people', 'kids these days' — and contractions, which belong to friends. Banned at the top: officialese — 'the populace', 'it is hereby submitted', 'aforementioned'. What remains is plain, serious and exact: 'many households', 'most families now find', 'this shift has quietly changed…'. Everyday nouns are not a poverty — 'the school run', 'a second-hand bicycle', 'the evening shift' are precisely the words the GT essay exists to use, and a prompt about family life is better argued with 'the dinner table' than with 'familial units'. The test for any word on the middle shelf: would a thoughtful columnist write it in a piece about ordinary life? If yes, it fits; if it smells of the group chat or the courtroom, it does not.",
      },
      { type: "heading", text: "Component 4 — Tone words, paraphrase and spelling" },
      {
        type: "steps",
        title: "Four habits that keep the words honest",
        intro: "Register levers, whole phrases, sentence-level paraphrase and a bulletproof spelling list — four small habits, one fitting vocabulary.",
        steps: [
          {
            title: "Step 1: Tone words move a line up and down the dial",
            text: "Small words carry the register: 'unfortunately' lifts a sentence formal-ward; 'to be honest' drops it into the friend's kitchen. 'Therefore' belongs to the essay; 'so' belongs to the note. Learn a handful of these levers and you can hold any line at any height — which is also how you repair a line that has slipped.",
            examples: [
              {
                english: "Formal: 'Unfortunately, the item was no longer available.' Friendly: 'Bad luck — they'd sold out!'",
                note: "Same fact, two heights, moved by four small words.",
              },
            ],
          },
          {
            title: "Step 2: Phrasal verbs live at the friendly end",
            text: "Most phrasal verbs are register signals: 'put off', 'put up with', 'sort out' sit at the warm end of the dial; their quiet single partners — postpone, tolerate, resolve — sit at the formal end. The formal letter and the essay prefer the single verbs; the friendly letter prefers the phrasal ones. Neither is better English; they are different addresses.",
            examples: [
              {
                english: "To a manager: 'Could we postpone the meeting to Thursday?' To a friend: 'Any chance we could put it off till Thursday?'",
                note: "One fact, two addresses — vocabulary knows its postcode.",
              },
            ],
          },
          {
            title: "Step 3: Paraphrase the situation at sentence level",
            text: "Your opening restates the brief's situation in your own words — a fresh sentence around the subject's key words, never the brief's sentence with new paint. The key words stay: a letter about a 'refund' says refund, and an essay about 'second-hand goods' says second-hand, because replacing a subject term with a strained synonym reads as avoidance and costs precision. The sentence around the keywords is what gets rebuilt.",
            examples: [
              {
                english: "Brief: 'your bus journey to work has become unreliable'. Opening: 'For the past month, the bus I take to work has turned from a timetable into a rumour.'",
                note: "Keywords honoured, sentence rebuilt — and personality intact.",
              },
            ],
          },
          {
            title: "Step 4: Hold one spelling convention and a short risk list",
            text: "Choose British or American spelling once per answer and hold it: apologise or apologize, neighbour or neighbor, favourite or favorite. Then keep a never-misspell list of the words GT answers lean on — sincerely, faithfully, apology, convenience, accommodation, opportunity, receive, definitely, separate, committee — and drill it like the accuracy families: written, checked, and copied onto the error log's spelling page when it slips. Spelling sits inside Lexical Resource, and the common words are the ones worth making unbreakable, because they appear in every paragraph you will ever write.",
            examples: [
              {
                english: "'I appologise for the inconvinience' — two slips in one closing line, in exactly the words a complaint letter leans on hardest.",
                note: "The risk list is short; make it bulletproof.",
              },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Word choice at work — seven cases",
        items: [
          {
            english: "A complaint paragraph drawn wholly from the formal shelf — 'I am writing to express my concern', 'I would appreciate a written response within fourteen days' — holds its height from greeting to sign-off.",
            note: "One shelf, one letter, no leaks.",
            domain: "exam",
          },
          {
            english: "A thank-you note on the warm shelf — 'Just a quick note to thank you for the loveliest weekend — I'm still full, and I still haven't finished the cake!' — contractions and honesty doing the warmth.",
            note: "The friendly shelf, used with control.",
            domain: "exam",
          },
          {
            english: "An essay line rewritten off the bottom shelf: 'loads of people reckon working from home is easier' becomes 'many employees find that working from home suits them' — the same claim at the column's height.",
            note: "The middle shelf, chosen over the group chat.",
            domain: "exam",
          },
          {
            english: "A learner's two-shelf notebook: each of the letter's four jobs — purpose, request, impact, close — filed with its formal and friendly versions, and all eight phrases recycled into one real letter within the week.",
            note: "Shelves are built by use, not by listing.",
            domain: "study",
          },
          {
            english: "A team leader's two messages about the same delay: to the client, 'we have encountered a supply issue'; to the team, 'the supplier's dropped the ball again' — both fit, both honest, different addresses.",
            note: "Register fit is a working skill before it is a tested one.",
            domain: "work",
          },
          {
            english: "A note to a neighbour borrows from the wrong shelf — 'I would be grateful if you could kindly refrain from mowing before eight' — and gets a baffled reply; 'could you possibly leave it till after eight?' worked in one line.",
            note: "Everyday readers hear the wrong shelf as noise.",
            domain: "life",
          },
          {
            english: "An essay introduction that keeps 'second-hand goods' and 'repair' from the prompt while rebuilding the sentence around them — keywords intact, structure fresh, no recycled clause.",
            note: "Paraphrase at sentence level, working as designed.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "Vocabulary mistakes corrected",
        items: [
          {
            wrong: "Band 7 vocabulary means rare words, so I will open with the most impressive phrase I can remember.",
            right: "Fit and precision lift the criterion: put the everyday word the flourish would stand in for beside it, and keep the flourish only when it sits exactly right for its shelf.",
            reason: "A rare word at the wrong height is an error in evening dress — the criterion rewards range used accurately and appropriately, and misfit is the opposite of both.",
          },
          {
            wrong: "A friendly letter can borrow a formal phrase now and then to sound polite.",
            right: "Politeness lives on the friendly shelf too — 'could you possibly', 'I'd love it if' — so borrow nothing: one reader, one shelf, the whole way through.",
            reason: "Shelf-mixing is the register leak: each borrowed phrase breaks the consistency the reader — and the criterion — is quietly checking.",
          },
          {
            wrong: "Spelling only matters for long or technical words.",
            right: "The words to bulletproof are the common ones — sincerely, faithfully, convenience, accommodation — because they appear in every letter and undercut every paragraph they misspell.",
            reason: "Recognisability is the minimum for communication, not the standard for the criterion; and the risk list is short enough to make the risk controllable.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One request, two readers",
        reading: {
          text: "The same need — borrowing a tent and two sleeping bags for a weekend trip — written to two readers. Version A, to the manager of an outdoor shop: 'I am writing to ask whether your store offers a weekend hire service for tents and sleeping bags, and if so, what the cost and deposit would be for the first weekend of June.' Version B, to a cousin: 'Quick question — any chance we could borrow your tent and a couple of sleeping bags for the first weekend of June? Ours died at the last festival, and yours survived.'",
          task: "List the shelf markers in each version: the phrases, the verbs and the tone words that fix its height.",
        },
        writing: {
          task: "Write the same request twice, at two heights: a paragraph to a camping equipment shop (formal shelf) and a paragraph to a friend who owns a tent (warm shelf) — four or five sentences each — then list three phrases you swapped between the versions.",
          guide: [
            "Formal version: open with 'I am writing to…', build the request with 'would' or 'could', close with a next step at 'Yours faithfully' height.",
            "Friendly version: open with 'Just a quick…' or a question, contractions throughout, close warm and specific.",
            "Keep the facts identical in both: the items, the dates, the return arrangement.",
            "List your swaps: which verbs, which tone words, which closings changed shelves?",
          ],
          model:
            "To the shop: I am writing to ask whether you offer a weekend hire service for tents and sleeping bags. I would need the equipment for the first weekend of June, from the Friday to the Sunday, and I would be glad to collect and return it myself. If a deposit is required, I would appreciate knowing the amount and the accepted payment methods in advance. I look forward to your reply. To the friend: Quick question — could we possibly borrow your tent and a couple of sleeping bags for the first weekend of June? We'd collect everything on the Friday and have it all back Sunday night, cleaned and dried, I promise. It would honestly save the whole trip — and there's a bottle of something nice in it for you. Swaps: 'I am writing to ask' → 'Quick question'; 'I would be glad to' → 'we'd collect… I promise'; 'I look forward to your reply' → 'there's a bottle of something nice in it for you'.",
        },
        listening: {
          script:
            "Tutor: Read me your request paragraph. Student: 'Dear Mr Hall, I am writing to kindly request that you chuck us your tent for the first weekend of June, as ours has unfortunately perished.' Tutor: Stop — which shelf is 'chuck us your tent' from? Student: The friendly one. And the rest? Student: The formal one. So I have mixed them. Tutor: Both shelves in one sentence, and the reader — a shop manager — needs the formal one throughout. Try 'I am writing to ask whether you offer a weekend hire service', and save 'chuck' for your cousin. Student: And 'perished' for the tent? Tutor: A tent can perish; a sentence should not. 'Ours is no longer usable' — plain is precise.",
          task: "What does the tutor say decides which shelf the whole letter uses?",
        },
        speaking: {
          task: "Say one request three ways — to an organisation, to a named professional, to a friend — changing only the shelf, and let your partner name the three readers from your word choices alone.",
          frames: [
            "To an organisation, I would write: 'I am writing to…'",
            "To someone I address by name: 'Could you possibly…'",
            "To a friend: 'Any chance you could…'",
            "The words that moved the line were…",
          ],
          checklist: [
            "Did each version stay on one shelf for its whole length?",
            "Did the facts stay identical across the three?",
            "Could my partner name all three readers without being told?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Both paragraphs carry the same facts in the same order — request, dates, logistics, close — so the comparison isolates exactly one variable: the shelf."],
          ["Grammar", "The formal paragraph runs full forms and 'would' throughout; the friendly paragraph runs contractions and direct address — each grammar setting matches its shelf without a single leak."],
          ["Vocabulary", "Every swapped phrase is a whole collocation — 'I am writing to ask', 'any chance you could' — filed and deployed as one item, which is how the shelves are meant to be used."],
          ["Coherence", "Each paragraph closes with a next step fitted to its reader — a reply awaited, a favour returned — so the endings complete the letters rather than stopping them."],
          ["Task fulfilment", "The request is explicit and identical in both: items, dates, return arrangement — the job survives the register change, which proves that register and coverage are separate skills."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Name the shelf before naming a single word: organisation, named professional or friend — then take your opening and closing phrases from that shelf only."],
          ["While the clock runs", "Deploy phrases whole, paraphrase situations at sentence level with keywords kept, and reach for the plain exact word over the impressive approximate one."],
          ["If you are stuck", "Ask which shelf you are on, then borrow from it — the shelf always has a plain phrase for the job you are trying to do."],
          ["Final minutes", "Sweep the never-misspell list against the finished answer, and replace any phrase that has wandered onto the wrong shelf with its same-height partner."],
        ],
      },
      {
        type: "summary",
        points: [
          "Vocabulary is chosen by reader: the formal complaint shelf, the warm-friend shelf, and the essay's plain-serious middle ground between them.",
          "Phrases are filed and deployed whole — 'I am writing to express…', 'Just a quick note to…' — because collocation, not word count, is where range is scored.",
          "Tone words and phrasal verbs are the dial's levers: 'unfortunately' against 'to be honest', 'postpone' against 'put off' — one setting per answer.",
          "Paraphrase at sentence level: the situation's key words stay, the sentence around them is rebuilt, and no strained synonym replaces a subject term.",
          "Hold one spelling convention and drill the short common-word risk list — sincerely, faithfully, accommodation, convenience — until it cannot break.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "Where do your three most frequent error patterns go, once the final minutes arrive?",
            options: ["Into a full re-read of the whole answer", "Into a named three-family sweep — and misspellings join the same log on its spelling page", "Into a vocabulary upgrade of every paragraph"],
            correctIndex: 1,
            explanation: "The accuracy lesson's sweep hunts named families; this lesson adds only the never-misspell list to the same final minutes.",
            from: "Grammar accuracy",
          },
          {
            question: "Who decides which shelf your phrases come from?",
            options: ["The length of the letter", "The reader named in the brief — organisation, named professional, or friend", "The rarest words you can remember"],
            correctIndex: 1,
            explanation: "The audience answer from requirements analysis sets the shelf exactly as it set the register — the reader is the decision, and the vocabulary follows it.",
            from: "Analysing question requirements",
          },
          {
            question: "When your opening restates the brief's situation, what must stay and what must change?",
            options: ["It must be quoted exactly, with its keywords highlighted", "The sentence is rebuilt in your own words, while its key subject words survive unchanged", "Every word is replaced with a synonym, keywords included"],
            correctIndex: 1,
            explanation: "The instructions lesson's brief lines become your opening material: fresh sentence, same subject terms — quoting recycles, and synonym-swapping avoids.",
            from: "Understanding task instructions",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which line belongs on the warm-friend shelf?",
        hints: ["Whose letter is each line for — a company or a friend?"],
        options: [
          { id: "a", text: "I am writing to express my disappointment with the service received." },
          { id: "b", text: "Just a quick note to say thanks again for last weekend — I'm still smiling about it!" },
          { id: "c", text: "I would appreciate a response at your earliest convenience." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Just a quick note to say thanks again for last weekend — I'm still smiling about it!",
          "The friendly shelf holds contractions, chat openers and honest warmth — 'Just a quick note' opens, 'I'm' contracts, and the feeling is small and true, which is what that shelf is for.",
          "(a) and (c) are the complaint shelf's standard-issue phrases — correct at their own height, and badly misplaced in a letter to a friend.",
        ),
        tags: ["gwriting", "vocabulary", "shelves"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the formal shelf's phrase.",
        hints: ["Which verb does the formal shelf partner with 'disappointment'?"],
        sentence: "I am writing to ___ my disappointment with the meal we received last Friday evening.",
        acceptedAnswers: ["express"],
        feedback: fb(
          "express",
          "The formal shelf files the whole collocation — 'express my disappointment' — as one item, and 'express' is the verb it travels with; assembling the phrase from a nearer-sounding verb is how shelf misfires happen.",
          "'say' and 'tell' are friendly-shelf verbs asked to do formal work; 'show' is near in meaning and wrong in collocation — the pair is learned whole or misfired separately.",
        ),
        tags: ["gwriting", "vocabulary", "collocation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the letter and find the shelf mix.",
        hints: ["Find the line that has wandered onto the wrong shelf."],
        passageTitle: "The letter in two voices",
        passage:
          "Dario's letter to a hotel manager reads: 'Dear Sir or Madam, I am writing to express my disappointment with our recent stay. The heating in room 214 failed on both nights, and the replacement heater took a day to arrive. This caused considerable discomfort to my elderly mother, who was recovering from a cold at the time. Anyway, cheers for the breakfasts — they were brilliant! I would appreciate a partial refund for the two nights concerned. Yours faithfully, Dario Ruiz.'",
        question: "Which line has slipped onto the wrong shelf, and why does it matter?",
        options: [
          { id: "a", text: "The heating paragraph — rooms should be described more briefly." },
          { id: "b", text: "The breakfast line — 'Anyway, cheers… they were brilliant!' is group-chat warmth inside a formal complaint, and it breaks the register the greeting established." },
          { id: "c", text: "The refund line — formal letters should not mention money." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The breakfast line — 'Anyway, cheers… they were brilliant!' is group-chat warmth inside a formal complaint, and it breaks the register the greeting established.",
          "The letter holds its formal height for four sentences and then drops into the friend's kitchen: praise is welcome in a complaint, but on the same shelf — 'the breakfast service, I should add, was excellent' — because one shelf for the whole letter is the consistency the criterion reads.",
          "(a) offers a style opinion the register question does not need; (c) is simply false — naming the remedy is the complaint's core job, and the formal shelf has exact phrases for it.",
        ),
        tags: ["gwriting", "vocabulary", "register-fit"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the paraphrase rule for openings.",
        question: "When you restate the prompt's situation in your opening, what must stay and what must change?",
        acceptedAnswers: [
          "the key subject words stay, the sentence around them is rebuilt",
          "keep the keywords, rebuild the sentence",
          "the subject terms survive, the sentence is rewritten in your own words",
          "keep key words, change the sentence — no recycled clauses",
        ],
        keywords: ["words", "sentence"],
        hints: [],
        feedback: fb(
          "Keep the key subject words; rebuild the sentence around them.",
          "Paraphrase works at sentence level: a strained synonym for a subject term ('pre-owned goods' for 'second-hand') reads as avoidance and costs precision, while a recycled sentence reads as copying — keeping one half and rebuilding the other is the whole rule.",
          "Answers that change everything, or nothing, have applied the rule to the wrong unit — words stay, sentences go.",
        ),
        tags: ["gwriting", "vocabulary", "paraphrase"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. If you could make only one edit to improve a draft's Lexical Resource, which edit pays best?",
        hints: [],
        options: [
          { id: "a", text: "Replacing every repeated word with a synonym, however strained the fit." },
          { id: "b", text: "Replacing each phrase that has wandered onto the wrong shelf with its same-height partner, and keeping one exact everyday collocation where the argument needs it." },
          { id: "c", text: "Adding an impressive adjective to every noun in the opening paragraph." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Replacing each phrase that has wandered onto the wrong shelf with its same-height partner, and keeping one exact everyday collocation where the argument needs it.",
          "Register fit is the GT paper's signature vocabulary demand: shelf-level repairs remove visible misfires, one well-chosen whole phrase adds visible precision, and neither move risks the false synonyms that strain-swapping produces.",
          "(a) produces the 'pre-owned goods' school of paraphrase — recognisable and discounted; (c) adds decoration, which the criterion reads as noise at any height.",
        ),
        tags: ["gwriting", "vocabulary", "precision"],
      }),
    ],
    assignment: {
      title: "Two shelves, one situation",
      instructions:
        "The situation, in the style of the test: 'You booked a coach trip to a nearby city, but the coach broke down, the replacement arrived three hours late, and you missed the event you had travelled for.' Write the request paragraph twice: once to the coach company (formal shelf, four to five sentences), and once to a friend who is deciding whether to book the same trip (warm shelf, four to five sentences). Close with a list of five phrases you swapped between the versions, naming the shelf each came from.",
      minWords: 80,
      maxWords: 220,
    },
    homework: [
      "Build one shelf page this week: for each of the letter's four jobs — purpose, request, impact, close — file a formal and a friendly version, then recycle all eight phrases in one real letter before the week ends.",
      "Write your personal never-misspell list: ten words you have actually misspelled in your own practice, corrected and copied onto the error log's spelling page, and swept against your next three answers.",
    ],
  },
];
