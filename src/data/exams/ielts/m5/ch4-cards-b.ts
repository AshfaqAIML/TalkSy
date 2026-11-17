/**
 * Chapter 4B — Part 2 cue-card families (Part B).
 *
 * The remaining five family lessons of the cue-card chapter: achievements,
 * books, films, travel and learning experiences. Each lesson carries one
 * complete ORIGINAL cue card and its full seven-element teaching payload:
 * the prompt, the author's one-minute note, vocabulary suggestions, a
 * natural sample response, response analysis, alternative approaches and
 * follow-up practice.
 *
 * Honesty rules held throughout: every sample response is a demonstration
 * of method, and each lesson warns explicitly against memorising it word
 * for word, because examiners detect rehearsed scripts; the band-style
 * label on every sample is an educational estimate only, never an official
 * score; no national accent is treated as scoring higher than another —
 * the pronunciation criterion rewards being easy to understand; and every
 * card is original practice material written in the style of the test,
 * never reproduced examination content.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingCueCardLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-achievements",
    title: "Cue card family: Achievements",
    description:
      "One complete original Achievements card — an achievement you are particularly proud of — taught through the transformation arc from before to after, with the author's one-minute note, persistence vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "state an achievement concretely, with its before and after visible",
      "narrate a process in steps, helpers and setbacks rather than a triumphant summary",
      "answer a duration prompt precisely and close by redefining what the pride is about",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Achievements cards ask you to tell the story of a transformation: who you were before, what you did in the middle, and who you are now. The trap is that achievements arrive with their triumph attached, and triumph makes candidates skip the middle — the steps, the helpers, the setbacks — which is exactly the material the card prints a prompt for. This lesson carries one complete achievements card about fourteen months of patience with a frightened dog, shows the preparation minute as it was written, and demonstrates a closing that locates pride somewhere more interesting than the certificate. The sample wears an estimate label and demonstrates shape only; a recited triumph is the least convincing speech there is.",
        beforeYouStart: [
          "You can map any cue card's four lines to four note corners within a minute.",
          "You can narrate a past process in the past simple with time markers like 'after that' and 'by then'.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, taken this time through an achievements card"],
          ["Task & question types", "A personal-history prompt with outcome, process and duration prompts plus an explain line about pride; one minute to note, up to two to speak"],
          ["What is assessed", "Narrative sequencing of effort, duration language, vocabulary of perseverance and setback, and a reflection that goes beyond the trophy"],
          ["Why this matters", "The process-plus-reflection pattern is exactly what Part 3 questions about success and effort ask you to discuss in the abstract"],
        ],
      },
      { type: "heading", text: "What an achievements card is really asking" },
      {
        type: "text",
        text: "An achievement is only visible against its before: a frightened dog, a failed mock exam, an empty savings account. The first prompt therefore wants two states — what the situation was, and what it became — because a transformation stated once, in a single sentence, gives the examiner nothing to weigh. The second prompt, the how, is the card's engine: it wants method (what you actually did, in steps), helpers (trainers, friends, the person who believed in you), and at least one setback, because an achievement without an obstacle reads as luck and gives the fluency criterion nothing to chew on. The duration prompt, meanwhile, is the one candidates skip most often — and precise time ('fourteen months, with a failed attempt at month ten') is among the cheapest credibility available anywhere on the card.",
      },
      { type: "heading", text: "Process narration, and the redefinition of pride" },
      {
        type: "text",
        text: "Process narration has its own grammar of honesty: steps in order, helpers credited, setbacks admitted. 'I did it slowly' is a summary; 'one new sound a week, a hundred repetitions of watch me, treats for every brave moment' is a process, and only one of them can fill half a minute without repeating itself. The closing line then asks why you are proud, and the strongest answers redefine the pride: not the certificate, but what sticking with the thing proved about you, or what it gave to others. Pride located outside the trophy is also the safest pride — it never drifts into boasting, because it is about the doing rather than the ranking.",
      },
      {
        type: "steps",
        title: "The transformation arc, in four moves",
        intro: "Before, process, time, meaning.",
        steps: [
          {
            title: "Move 1: State it against its before",
            text: "Name the achievement and immediately give the 'before' it replaced: what the situation was when the story started. Two sentences — before and after — and the examiner can already measure the distance you are about to narrate.",
            examples: [
              {
                english: "She arrived from the shelter terrified of doorways; fourteen months later she was lying calmly while a whole care home made a fuss of her.",
                note: "Before and after in one sentence pair — the transformation visible before the process begins.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Move 2: Narrate the process in steps",
            text: "Give the how in ordered steps with a method named and a helper credited: the trainer, the course, the friend at mile twenty. Lists of steps are easy to follow and easy to speak — the two qualities examiners most enjoy scoring.",
            examples: [
              {
                english: "The first month was literally sitting on the floor; then one new sound a week; then a hundred repetitions of 'watch me'.",
                note: "Three steps in time order, each concrete enough to expand if the clock allows.",
                domain: "study",
              },
            ],
          },
          {
            title: "Move 3: Admit a setback",
            text: "Every real achievement contains a backwards step: a failed attempt, a regression, a month of nothing. Name yours and the story becomes an arc instead of a slope — and the recovery is often the proudest sentence in the talk.",
            examples: [
              {
                english: "We failed the first assessment — well, I failed it; it was my nerves she picked up on.",
                note: "Blame honestly taken, then transferred to the right shoulders: a setback told with a light touch.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Move 4: Time it, then redefine the pride",
            text: "Answer the duration prompt with a number and, if you have one, a failed first attempt. Then close by relocating the pride: what the doing proved, what it changed in you, what it gives to others now. The trophy gets one sentence at most.",
            examples: [
              {
                english: "Fourteen months, one failed attempt — and what I'm actually proud of is that patience turned out to mean showing up a hundred times.",
                note: "Duration, setback and redefinition in a single closing move.",
                domain: "life",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Achievements",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "In front of you sits an achievement card; the examiner will stop the preparation clock in one minute."],
          ["Task line", "Describe an achievement you are particularly proud of"],
          ["Prompt 1", "what you achieved"],
          ["Prompt 2", "how you did it"],
          ["Prompt 3", "how long it took"],
          ["Explain line", "…and explain why it makes you proud"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "rescue dog Poppy → certified therapy dog · care-home visits", "The achievement plus its one-line meaning: what the certificate actually allows."],
          ["Corner two — the anchor", "shelter, aged 1 · terrified of noises, hats, doorways · trainer from local club", "The 'before' and the helper, pre-written: the transformation's starting line and its first credit."],
          ["Corner three — the detail bank", "floor-sitting month · 1 new sound/week · 100× 'watch me' · firework regression · failed attempt at month 10", "Three steps, one setback, one failure: the process prompt's material, ordered by time."],
          ["Corner four — the reason", "stuck with her through setbacks · resident spoke her name · patience = showing up · no audience, still hardest thing", "Pride relocated outside the certificate: persistence, effect on others, and a redefinition of patience."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the long middle",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["a milestone", "Frame the finish: 'passing the assessment was the milestone, but not the point'."],
          ["months in the making", "Compress duration with texture: 'the whole thing was months, honestly years in the making'."],
          ["sheer persistence", "Credit the right force: 'no talent anywhere in sight — just sheer persistence'."],
          ["to pay off", "The turnaround verb: 'all those evenings of practice eventually paid off'."],
          ["a setback", "Name the backwards step plainly: 'the firework season was a proper setback'."],
          ["to bounce back", "The recovery: 'it took us a month to bounce back from that'."],
          ["against the odds", "One phrase of scale, used once: 'she qualified against the odds, really'."],
          ["a sense of accomplishment", "Name the feeling with precision, in the explain line, not before it."],
          ["to see something through", "The achievement's other name: 'the point was seeing it through'."],
        ],
      },
      {
        type: "example",
        title: "Six achievements and the sentences that carry them",
        items: [
          {
            english: "I went from failing the practice test three times to teaching the module myself the following year.",
            note: "Before and after in one line, with the humiliation kept in — that is what makes the arrival land.",
            domain: "work",
          },
          {
            english: "Corner three of my note: 'mock exams: 41%, 47%, 53% · then the method change · then 71%'.",
            note: "Numbers tell the whole process story in eleven words — and numbers are impossible to recite hollowly.",
            domain: "study",
          },
          {
            english: "Saving the deposit took two winters of declining things, which I mention because the declining was the actual achievement.",
            note: "An honest redefinition of the achievement — the boring part named as the real part.",
            domain: "life",
          },
          {
            english: "The night before the recital I nearly chose a safe piece; the proud thing is that I didn't.",
            note: "A decision as the achievement — a subtle angle that gives the explain line real depth.",
            domain: "exam",
          },
          {
            english: "My proudest moment wasn't the medal; it was my father learning to film sideways so he could capture the finish.",
            note: "Pride relocated onto someone else's small effort — generous, visual, and impossible to boast with.",
            domain: "life",
          },
          {
            english: "Twelve of us started the training group; four of us finished, and we still meet on the anniversary.",
            note: "The attrition statistic proves difficulty better than any adjective, and the anniversary ritual proves meaning.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Where achievements talks go wrong" },
      {
        type: "mistakes",
        title: "Achievements-card traps corrected",
        items: [
          {
            wrong: "I announced the achievement — 'I won a national competition' — described the award ceremony, and never said what I had actually done to get there.",
            right: "Give the ceremony one sentence and the process a full minute: steps, method, helpers, in order.",
            reason: "The 'how you did it' prompt is the card's engine room; a podium photo answers none of it, and the talk runs dry at the exact moment it should be richest.",
          },
          {
            wrong: "I said I was proud because 'I am simply better at this than most people I know', thinking confidence would read as strength.",
            right: "Locate the pride in the doing: what sticking with it proved, what it changed, what it gives — not where you rank.",
            reason: "The explain line asks why you are proud, not whether you are superior; ranking invites comparison, while reflection invites depth, and only one of them is on the card.",
          },
          {
            wrong: "When the duration prompt came I said 'oh, some time — quite a while', because I had never actually counted.",
            right: "Count before the talk and give the number with texture: 'fourteen months, including one failed attempt at month ten'.",
            reason: "Duration is the most skippable prompt and the cheapest to answer well; a counted number proves the achievement was real and hands the examiner a timeline to follow.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The achievements card, end to end",
        reading: {
          text: "Read an achievements talk as a transformation arc: before, process, setback, time, redefined pride. The examiner is listening for the distance between the two states you name, and the middle of the talk is where that distance is earned in steps. Setbacks deserve special care: a talk without one sounds like luck, while a talk that dwells on one becomes a complaint — a single backwards step, named lightly and recovered from, is the correct dose. One caution travels with this family: pre-written victory speeches are common, and their tell is always the same — flawless process, no setbacks, no helpers, and a rhythm that never varies. Speak your own imperfect middle, and the talk defends itself.",
          task: "Write your before-state and after-state in one sentence each before attempting the tasks below.",
        },
        writing: {
          task: "Draft your own achievements talk against this card using the guide, then compare your middle minute with the model's — and take only the architecture, since a borrowed victory fools nobody and the words are not yours to claim.",
          guide: [
            "Two-state opener: 'When I started, …; by the end, …'",
            "Process opener: 'How I did it was a series of small steps: first…'",
            "Setback opener: 'There was a moment when it nearly collapsed:…'",
            "Duration and pride: 'It took…, and what I'm proud of isn't the…, it's the…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nI'd like to talk about something that took me fourteen months and a lot of dog biscuits: training my rescue dog, Poppy, until she qualified as a therapy dog — meaning she passed the assessment that lets her visit people in care homes as a comfort dog.\n\nSo, what I achieved: Poppy came from a shelter at a year old, absolutely terrified of everything — loud noises, men with hats, other dogs, doorways, you name it. Fourteen months later she'd passed the temperament test and the supervised visits, and now we go to a care home on the first Saturday of most months, where she has her own fan club.\n\nHow did I do it? Slowly, is the honest answer. We started with a trainer from a local club who specialised in anxious dogs, and the first month was just sitting on the floor and letting Poppy decide I existed. Then it was tiny steps: one new sound a week, a hundred repetitions of 'watch me', treats for every brave moment. There were setbacks — she regressed badly after a firework season and we started the noise training again — no, not from zero, but from month three, which felt like zero.\n\nHow long did it take? Fourteen months from the shelter to the certificate, with an assessment attempt at month ten that we failed — well, that I failed, because it was my nerves she picked up on. The second attempt, three months later, she sailed through.\n\nWhy does it make me proud? Not the certificate itself. It's that I stuck with a frightened animal through a year of setbacks without either of us giving up, and now she gives something back — I've watched a resident who hadn't spoken in weeks say her name. Also, if I'm honest, it changed how I think about patience: it's not waiting, it's showing up a hundred times. I'm proud that the hardest thing I've done involves no competition and no audience.",
        },
        listening: {
          script:
            "Tutor: I want to be fair to your talk, so let's start with what worked: the before-and-after of your language exam was crystal clear, and I believed every word of the certificate moment. What I never heard was March. You told me you started in January and passed in June, and the four months between are just 'I worked hard'. Worked how? Every evening? With which app? Who checked your writing? And where was the week it all fell apart — because there is always a week it falls apart. Give me March, and your talk goes from an announcement to a story.",
          task: "Note which month the tutor keeps asking about, and the three kinds of missing detail she lists.",
        },
        speaking: {
          task: "Run this card end to end for an achievement of your own — large or small, public or private: one minute of notes, one to two recorded minutes, then the checklist, listening specifically for your own 'March'.",
          frames: [
            "The thing I'm proudest of is…, which meant…",
            "When I started, the situation was…",
            "The way I did it was…, and then…",
            "It took…, and what I'm actually proud of is…",
          ],
          checklist: [
            "Did I state the achievement against its before-state, not on its own?",
            "Does my middle minute contain steps, a named helper and one setback?",
            "Did I answer the duration prompt with a counted number?",
            "Does the closing line locate the pride somewhere other than the trophy?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, move by move",
        headers: ["Move of the talk", "What the sample does there"],
        rows: [
          ["The opening", "Leads with duration ('fourteen months') and a joke about biscuits, setting an affectionate tone and promising a process rather than a podium story."],
          ["The two states", "The shelter's inventory of fears gives the before; the fan-club care home gives the after — the transformation measured in two images, not adjectives."],
          ["The process", "A named trainer, then three steps in strict time order: floor-sitting, one sound a week, a hundred repetitions — method made audible."],
          ["The setback", "The firework regression and the self-corrected 'not from zero, but from month three' admit the backwards step without letting it become the story."],
          ["The duration", "Fourteen months, a failed attempt at month ten correctly blamed on the speaker's own nerves, and a second attempt that sailed — timeline as drama."],
          ["The redefinition", "Pride moves from certificate to persistence to effect on others ('a resident who hadn't spoken in weeks said her name') and ends on a redefinition of patience."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Before, process, setback, duration, redefined pride — the transformation arc in card order, with each prompt audibly served."],
          ["Grammar", "Past simple carries the steps, a modal construction admits the failure ('it was my nerves she picked up on'), and the present tense takes over only for the ongoing care-home visits."],
          ["Vocabulary", "The language of patience — regressed, repetitions, brave moment, showing up — replaces the language of triumph almost entirely."],
          ["Coherence", "The fear motif returns in every section: inventory of fears, noise training, firework regression, and finally a frightened animal comforting the frightened."],
          ["Task fulfilment", "All three prompts receive dedicated material, the duration is counted and textured, and the extension relocates pride from trophy to doing — evaluation at full depth."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["Passing a professional licence while working night shifts", "Raises the stakes to career survival: the process is stolen hours, the helper is a study partner in another time zone, and the pride is in the exhaustion survived."],
          ["Paying off a student loan two years early", "Swaps certificates for numbers: the process is a budget spreadsheet and declined invitations, and the pride is self-restraint made visible."],
          ["Founding a neighbourhood litter-picking group", "Makes the achievement collective: the process is one poster and a rain-or-shine promise, and the pride lives in other people's hands now holding the grabbers."],
          ["Completing a first 10-kilometre race after illness", "Gives the before-state a medical history: the process is a couch-to-race plan, the setback is a relapse month, and the pride is reclaimed ownership of a body."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Is it better to celebrate achievements privately or publicly?' — give a view with one example of each."],
          ["Rounding-off question two", "'Why do you think some people play down what they have achieved?' — offer two reasons, one cultural."],
          ["Practice card A", "'Describe a goal you set and reached' — full cycle; keep the goal measurable and the process in steps."],
          ["Practice card B", "'Describe something difficult you worked for' — borrow the setback move and make the recovery your climax."],
          ["Practice card C", "'Describe an occasion when you were recognised for something' — practise keeping the recognition small and the work large."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose the achievement you can narrate in steps — not the biggest one you own — and fill the corners with before, steps, setback, counted time and relocated pride."],
          ["While the clock runs", "If you reach the award moment with a minute left, you have skipped the process: double back with 'but the actual how was…' and give March its airtime."],
          ["If you are stuck", "Return to the smallest step you can remember — one exercise, one spreadsheet cell, one floor-sitting session — and expand it; small steps carry big stretches of talk."],
          ["Final minutes", "Deliver the counted duration, then the redefinition — what the doing proved, what it changed, whom it helps — and stop inside that reflection."],
        ],
      },
      {
        type: "summary",
        points: [
          "An achievement only exists against its before: state both, and let the distance between them set up the process.",
          "The how prompt is the card's engine — steps in order, a helper credited, and one setback admitted lightly.",
          "Count the duration before the talk; a number with texture ('fourteen months, one failed attempt') proves the story better than any adjective.",
          "Close by relocating the pride: what the doing proved, what it changed, whom it serves — the trophy gets one sentence at most.",
          "Tell your own imperfect middle: flawless pre-written victories are the family's commonest give-away, and examiners hear them at once.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft lessons behind this family.",
        items: [
          {
            question: "What does 'identifying key requirements' tell you to do with a card before planning?",
            options: [
              "Translate it into your first language for accuracy",
              "Turn every line — prompts and explain line alike — into a counted checklist of deliverables",
              "Estimate how many words you can say in two minutes",
            ],
            correctIndex: 1,
            explanation: "Counting lines converts the card into deliverables, and the count is what stops a whole prompt — like duration — from quietly going unanswered.",
            from: "Identifying key requirements",
          },
          {
            question: "Halfway through your talk you lose the thread for a moment. What is the taught repair?",
            options: [
              "Stop speaking and start the talk again",
              "Use a bridging phrase to restate where you are, then continue — a repair spoken aloud scores as coherence",
              "Switch to a different achievement entirely",
            ],
            correctIndex: 1,
            explanation: "A spoken bridge — 'so, where was I — the training, month three' — keeps the sound continuous and shows control of the talk's structure, which is precisely what the criterion rewards.",
            from: "Maintaining continuity",
          },
          {
            question: "Why does the craft chapter insist you keep speaking past the one-minute mark?",
            options: [
              "Because stopping early is recorded as an incomplete turn",
              "Because the explain line's best material belongs to the final third of the two minutes",
              "Because examiners penalise short sentences",
            ],
            correctIndex: 1,
            explanation: "The closing line is the card's highest-value prompt, and it lives at the end of the clock — candidates who finish early surrender it along with the fluency evidence of the final stretch.",
            from: "Speaking at length",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. What does the 'how you did it' prompt of an achievements card actually want from you?",
        hints: ["Think verbs in sequence, and remember that backwards steps count as part of the how."]
        ,
        options: [
          { id: "a", text: "A description of the ceremony or moment the achievement was recognised." },
          { id: "b", text: "The process in ordered steps, with a method named, a helper credited and at least one setback admitted." },
          { id: "c", text: "An explanation of why other people fail at the same thing." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The process in ordered steps, with a method named, a helper credited and at least one setback admitted.",
          "The how prompt is the card's engine room: ordered steps give the fluency criterion material to carry, helpers give the story warmth, and a setback turns a slope into an arc — the shape evaluators listen for.",
          "(a) answers the recognition, which the card never printed; (c) shifts the spotlight onto absent strangers and away from the only process you can actually narrate.",
        ),
        tags: ["speaking", "cue-cards", "achievements"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's competition talk and answer the question.",
        hints: ["Locate the gap between January and June on his timeline."]
        ,
        passageTitle: "The missing March",
        passage:
          "Bruno's achievements talk opened strongly: 'I won a national coding competition, and I'm particularly proud of it.' He then described the auditorium, the trophy's weight, and the congratulations message from his old teacher. His structure was clear and his delivery confident. His tutor interrupted the playback at the halfway point and asked a single question: 'What did you do in March?' Bruno thought, then admitted that the qualifying rounds, the study group he had joined, and the two months of failed attempts before the finals had all happened — and that none of them had made it into the talk.",
        question: "Which prompt had Bruno's talk left unanswered?",
        options: [
          { id: "a", text: "The what — he never named the achievement clearly." },
          { id: "b", text: "The how — the process of qualifying, studying and failing had been replaced by the ceremony." },
          { id: "c", text: "The explain line — he never said why he was proud." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The how — the process of qualifying, studying and failing had been replaced by the ceremony.",
          "The talk honoured the trophy and skipped the months: study groups, failed attempts and qualifying rounds are exactly the steps-and-setback material the second prompt exists to collect, and their absence empties the talk's middle.",
          "(a) misreads the opening, which names the achievement immediately; (c) goes beyond the passage — the tutor's question targets the missing months, not the missing pride.",
        ),
        tags: ["speaking", "cue-cards", "achievements", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in a phrase, using this lesson's terms.",
        question: "Which printed prompt do candidates skip most often on an achievements card, and what kind of answer does this lesson want for it?",
        acceptedAnswers: [
          "how long it took — the timeline prompt, answered with a counted number and texture",
          "the how-long prompt: duration, given as a counted number plus a failed attempt if there was one",
          "the timeline prompt, how long the achievement took — answered precisely, not vaguely",
          "how long it took — duration, stated as a counted stretch of time with its setbacks",
        ],
        keywords: ["how long", "timeline"],
        hints: [],
        feedback: fb(
          "The duration prompt — how long it took — answered with a counted number and its texture, not 'quite a while'.",
          "Duration is the easiest prompt to skip and the cheapest to impress with: a counted stretch of time proves the achievement was real, gives the examiner a timeline, and leaves room for a failed first attempt as a bonus.",
          "Answers naming the explain line or the how have picked the prompts candidates find hardest, not the one this lesson flags as most often quietly dropped.",
        ),
        tags: ["speaking", "cue-cards", "achievements"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. A talk closes with: 'I'm proud because I'm simply better at this than anyone I know.' What is wrong with that explain line?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — confidence is exactly what the closing line rewards." },
          { id: "b", text: "It answers ranking instead of pride: the line asks why the achievement matters to you, and comparison invites neither reflection nor depth." },
          { id: "c", text: "It is too short — closing lines must always be at least three sentences." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It answers ranking instead of pride: the line asks why the achievement matters to you, and comparison invites neither reflection nor depth.",
          "Pride located in the doing — what it proved, what it changed, whom it helps — reads as character, while pride located in ranking reads as boasting and usually collapses under one follow-up question.",
          "(a) confuses confidence with evaluation, and only evaluation scores; (c) invents a length rule — the fault is content, not sentence count.",
        ),
        tags: ["speaking", "cue-cards", "achievements"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a neighbouring achievements card — spoken, timed, with setbacks included.",
        hints: ["Two states, three steps, one setback, a counted duration, and pride relocated from the trophy."]
        ,
        situation:
          "A related achievements card: 'Describe a goal you set and reached.' Prepare for up to one minute, then speak for one to two minutes, ending on what reaching the goal actually gave you.",
        targetPhrases: [
          "The goal I set myself was…",
          "The plan broke down into…",
          "What reaching it gave me was…",
        ],
        mustSay: ["goal", "proud", "because"],
        feedback: fb(
          "A one-to-two-minute talk with a stated goal, its before-state, ordered steps, one admitted setback, a counted duration and relocated pride.",
          "Goal cards are achievements cards with the future opened up: the strongest versions describe the moment of choosing the goal as well as reaching it, because a decision is part of the achievement.",
        ),
        tags: ["speaking", "cue-cards", "achievements", "long-turn"],
      }),
    ],
    assignment: {
      title: "A second achievement, timed and redefined",
      instructions:
        "Choose a different achievement you are genuinely proud of — private counts, small counts — and write 40 to 160 words: first, your four-corner note as fragments (before-state, steps, setback, counted time, relocated pride); second, the exact sentence you would use to answer the duration prompt, giving a counted stretch of time plus any failed first attempt.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Interview yourself in writing for two minutes about the middle of your achievement — the boring month, the flat week — and keep any fragment that surprises you; surprises are the material you would never have planned.",
      "Record your talk, then count the seconds between the start and the first mention of the process; if it is more than twenty, your ceremony is eating your March.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-books",
    title: "Cue card family: Books",
    description:
      "One complete original Books card — a book that had a significant effect on you — taught through summary discipline and the traceable effect, with the author's one-minute note, reader vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "summarise a book's real subject in three sentences without retelling its plot",
      "date a reading memory with your age, the place and the circumstance",
      "trace one idea from the page into a change of habit or outlook",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Books cards look like literature exams and behave like memory cards: the examiner has no interest in the plot, and every interest in what the book did to you. That means two disciplines — a summary held to three sentences, and an effect traced all the way down to a habit, a route or a phrase you banned from your own vocabulary. This lesson carries one complete books card about a battered field guide found on a rainy holiday, shows the preparation minute in fragments, and demonstrates a sample talk built almost entirely from afterlife rather than plot. Its label is an estimate; its sentences are a map, and reciting a map is not the same as travelling.",
        beforeYouStart: [
          "You can compress a story into its essence without narrating it scene by scene.",
          "You can say what changed in your life with concrete evidence rather than the word 'inspiring'.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, read this time through a books card"],
          ["Task & question types", "A reading prompt with subject, timing and residue prompts plus an explain line about effect; one minute to note, up to two to speak"],
          ["What is assessed", "Summary discipline, past-tense reading memories, vocabulary of impression and change, and the depth of the traced effect"],
          ["Why this matters", "Books questions appear in Part 1 as well, and the summary-to-effect move works for films, articles and any influence you are asked to describe"],
        ],
      },
      { type: "heading", text: "What a books card is really asking" },
      {
        type: "text",
        text: "The three prompts divide the labour cleanly: what it is about earns three sentences, when you read it earns two or three, and what stayed with you — the reader's residue — earns the rest of the talk. The proportions are inverted in almost every struggling performance: the plot arrives scene by scene, the reading date goes unmentioned, and the effect is compressed into 'it was really inspiring' at the death. Examiners call those performances book reports. A talk, by contrast, is a reading history: where you were, what was going on in your life, the sentence that lodged, and the habit that formed afterwards. The book is the guest; your life is the house it changed.",
      },
      { type: "heading", text: "Three sentences, one line, one habit" },
      {
        type: "text",
        text: "The compression tool is the real subject. Novels are about jealousy or migration even when they are about a family weekend; a guidebook is about attention even when it is about birds; a biography is about persistence even when it is about a physicist. Name the real subject in one sentence, support it with the book's shape in another, and stop — three sentences of summary buys you a minute of effect. Then find the line: one sentence, quoted if you can, paraphrased if you cannot, that you still think about. And then the habit: the walk you now take, the notebook you keep, the phrase you retired. A traced habit is evidence, and evidence is what the explain line is scored on.",
      },
      {
        type: "steps",
        title: "Reading a book card in four moves",
        intro: "Subject, circumstance, line, habit.",
        steps: [
          {
            title: "Move 1: Name the real subject",
            text: "Say what the book is about at the level that reached you — its theme rather than its events. One sentence of subject, one of shape, one of honest verdict: three sentences, then stop summarising.",
            examples: [
              {
                english: "On the surface it's an identification guide; underneath, it's a short course in paying attention.",
                note: "The two-layer subject sentence: surface content and real theme named together in under twenty words.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Move 2: Date the reading with circumstance",
            text: "When you read a book matters as much as what it said. Give your age, the place and the situation — boredom, heartbreak, a long train — because a book that arrives at the right hour hits harder, and saying so is evaluation.",
            examples: [
              {
                english: "I was twenty, stuck in a beach house with terrible weather, and I opened it on day three out of pure boredom.",
                note: "Age, place, circumstance: the reading memory given a date and a mood.",
                domain: "life",
              },
            ],
          },
          {
            title: "Move 3: Find the line that stayed",
            text: "The 'what stayed with you' prompt wants one sentence — quoted if memory allows, honestly paraphrased if not — plus a note on why it lodged. One line, examined properly, outperforms a page of plot.",
            examples: [
              {
                english: "Something in the introduction like 'you cannot protect what you cannot name' — and I think about that sentence far beyond birds.",
                note: "A paraphrase flagged as a paraphrase, then opened outward — honesty plus generalisation in one move.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Move 4: Trace the effect to the ground",
            text: "The explain line asks how your thinking or life changed, and the answer should be visible: a route you now take, a notebook you keep, a phrase you banned, copies you have given away. Habits are the receipts of reading.",
            examples: [
              {
                english: "I take the long way along the river now, and six years of little notebooks sit on my shelf like a second library.",
                note: "Two habits as evidence — the change traced from page to pavement.",
                domain: "study",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Books",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "You have one minute with pencil and paper before speaking on this round's book card."],
          ["Task line", "Describe a book that had a significant effect on you"],
          ["Prompt 1", "what the book is about"],
          ["Prompt 2", "when you read it"],
          ["Prompt 3", "what stayed with you"],
          ["Explain line", "…and explain how it affected your thinking or life"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "field guide to garden birds · plates + maps · real subject = attention", "The book identified twice: what it says it is, and what it actually taught."],
          ["Corner two — the anchor", "age 20 · uncle's beach house · rain, no internet, day 3 boredom", "The reading circumstance in four fragments — the memory's date, place and mood."],
          ["Corner three — the detail bank", "read it twice by the last day · uncle's puzzled delight · 'cannot protect what you cannot name'", "Two reading events and the one line — the residue prompt's material, ready to expand."],
          ["Corner four — the reason", "river routes changed · notebook, 90 species · banned the phrase 'just a' · 6 copies given", "Four traced effects, so the explain line can select the best and rank them live."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for a reading history",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["hard to put down", "Praise with proof: 'no plot to speak of, and still hard to put down'."],
          ["to strike a chord", "Name the collision of book and moment: 'it struck a chord because I was at a crossroads that year'."],
          ["dog-eared", "Physical evidence of love: 'my copy is dog-eared and water-stained in equal measure'."],
          ["to read it cover to cover", "The reading event itself: 'I read it cover to cover twice before the holiday ended'."],
          ["food for thought", "Use for the line that stayed: 'that one sentence was real food for thought'."],
          ["it opened my eyes", "One honest cliché, deployed once, followed immediately by the specific thing the eyes opened to."],
          ["to press a book on someone", "The effect with a social life: 'I've pressed copies on at least six people since'."],
          ["a slow burn", "Honest pacing: 'nothing explodes in it — it's a slow burn that rewires you quietly'."],
          ["to change my outlook", "The explain-line verb: 'it changed my outlook more than any novel I've finished'."],
        ],
      },
      {
        type: "example",
        title: "Six reading histories and their openings",
        items: [
          {
            english: "It's a slim novel about a lighthouse keeper, but really it's about how many silences a marriage can hold.",
            note: "The two-layer subject sentence working on fiction: surface plot and real theme in one breath.",
            domain: "exam",
          },
          {
            english: "I bought it at a station kiosk because my train was delayed five hours, which is the least romantic origin a favourite book has ever had.",
            note: "Circumstance with self-deprecation — the least glamorous reading memory is often the most convincing.",
            domain: "life",
          },
          {
            english: "Corner four of my note: 'stopped finishing sentences for people · kept her rule of ten minutes' silence a day'.",
            note: "Effects written as fragments of behaviour — habits, not adjectives, are the residue prompt's currency.",
            domain: "study",
          },
          {
            english: "The biography of a bridge engineer taught me more about project management than any course my employer paid for.",
            note: "A work-relevant reading history: the effect traced straight into professional behaviour.",
            domain: "work",
          },
          {
            english: "There's one sentence in it I still say to myself before difficult meetings, and it has never once failed.",
            note: "A single quoted line put to daily use — the strongest possible evidence of effect.",
            domain: "exam",
          },
          {
            english: "I have reread that children's book every winter since I was nine, and it gets shorter and heavier at the same time.",
            note: "Rereading as effect: the paradox phrase earns its place because it is felt rather than borrowed.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where books talks go wrong" },
      {
        type: "mistakes",
        title: "Books-card traps corrected",
        items: [
          {
            wrong: "I spent ninety seconds retelling the thriller scene by scene — the robbery, the twist, the second twist — and never reached my own life.",
            right: "Hold the summary to three sentences — subject, shape, verdict — and spend the recovered minute on the line that stayed and the habit it started.",
            reason: "The card prints one prompt about content and two about you; plot is the only infinite resource in the family, and infinity is exactly what two minutes cannot hold.",
          },
          {
            wrong: "I named an impressive classic I half-remembered from school, and when the residue prompt came I could not produce a single sentence from it.",
            right: "Choose the book you can quote or paraphrase one line from, however modest it looks on a shelf.",
            reason: "The residue prompt is scored on evidence, and a half-remembered classic supplies none; a dog-eared paperback you actually reread supplies it every time.",
          },
          {
            wrong: "For the effect I said 'it was very interesting and inspiring, I learned a lot', and moved on to thanking the author.",
            right: "Trace the effect to the ground: a habit formed, a route changed, a phrase retired, copies given away.",
            reason: "'Inspiring' is a claim; a habit is a receipt — and the explain line is scored on the receipts.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The books card, end to end",
        reading: {
          text: "A books talk runs on a proportion: roughly three sentences of subject, two or three of circumstance, and everything else on residue and effect. Two habits make the family safe. First, the paraphrase flag — saying 'something like' before a half-remembered line is honest and fluent, while pretending to quote exactly is a trap for your grammar and your credibility. Second, the modesty rule — a book you truly reread beats a classic you merely revere, because the residue prompt asks what stayed, and only the books we revisit can answer. Candidates who pre-write a books talk in polished sentences report the same experience in the room: the sentences arrive, and the examiner's follow-up questions — which character, which chapter — arrive right behind them.",
          task: "Before the tasks below, write your three-sentence summary and check that not one of the three contains a scene.",
        },
        writing: {
          task: "Draft your own books talk against this card using the guide — and read the model for its proportions and its honesty markers, not for its sentences, because a borrowed reading history is the emptiest thing a candidate can carry into the room.",
          guide: [
            "Subject opener: 'On the surface it's…; really, it's about…'",
            "Circumstance opener: 'I read it when…, in the middle of…'",
            "Residue opener: 'The one thing that stayed is a sentence, something like…'",
            "Effect opener: 'Concretely, it changed…; and more than that, it…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nSo, the book I want to talk about isn't a novel or a self-help classic — it's a battered field guide to garden birds that I found on a shelf in a rented cottage, and it changed how I move through the world.\n\nWhat it's about: on the surface, an identification guide — colour plates, maps, entries on a couple of hundred species with notes on song and behaviour. There's no plot. But the book's real subject, once you spend a few weeks with it, is attention: it teaches you that the ordinary birds around you — the ones you've ignored your whole life — have names, habits, schedules, and that knowing them changes your relationship with where you live.\n\nWhen I read it: I was twenty, at my uncle's beach house for a fortnight with terrible weather and no internet, and I picked it up out of boredom on the third day. I finished — well, 'finished' is the wrong word; it's not that kind of book — I'd read it cover to cover twice by the last day, and before I left I asked my uncle if I could take it. He looked delighted, in a puzzled way.\n\nWhat stayed with me is really one sentence from the introduction, something like: 'you cannot protect what you cannot name.' I think about that constantly, and not just about birds.\n\nHow did it affect me? Concretely, my walking routes changed — I started taking the long way along the river just to see what was on the water. I keep a little notebook now, the way the guide's author suggested, and six years on it holds about ninety species. But the bigger effect is on my attention: I notice more, and I've become suspicious of the phrase 'just a' — just a crow, just a weed, just a Tuesday. That habit started with that book, and it's the reason I've pressed copies of it into the hands of at least six people since.",
        },
        listening: {
          script:
            "Book club host: Two of you reviewed the same memoir this month, and I want to hold your summaries side by side, because they prove something. Amir: your ninety seconds gave us the whole life — the childhood, the exile, the comeback, every award. Beautifully told. Rosa: your ninety seconds gave us three sentences of the life and then the summer your father was ill, the page you read aloud to him in the hospital, and the voicemails you now leave your sister. Rosa, you made the rest of us feel the book. Amir, you made us feel the blurb.",
          task: "Note what the host says each reviewer made the club feel, and which of the two summaries this lesson trains.",
        },
        speaking: {
          task: "Run the full cycle for a book of your own — any format, any shelf: one minute of notes, one to two recorded minutes, then the checklist, listening for the moment the plot tries to take over.",
          frames: [
            "The book I'd have to name is…",
            "I read it when…, which matters because…",
            "The sentence that stayed is something like…",
            "Concretely, what it changed is…",
          ],
          checklist: [
            "Did my summary stop at three sentences, none of them a scene?",
            "Did I date the reading with age, place and circumstance?",
            "Did I flag my paraphrase honestly instead of faking a quotation?",
            "Is the effect traced to at least one visible habit?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, move by move",
        headers: ["Move of the talk", "What the sample does there"],
        rows: [
          ["The opening", "Chooses a guide over a novel and names the stakes — 'it changed how I move through the world' — a promise the rest of the talk must keep, and does."],
          ["The two-layer summary", "Surface content in one sentence, real subject — attention — in the next, with 'there's no plot' admitted and immediately made interesting."],
          ["The circumstance", "Age twenty, a rainy beach house, no internet and day-three boredom: the reading memory dated with a mood, so the effect feels earned rather than claimed."],
          ["The residue", "One sentence, flagged as a paraphrase ('something like'), then opened outward — 'not just about birds' — generalising the line without over-reading it."],
          ["The effect close", "Routes changed, a six-year notebook with ninety species, and a phrase banned from the speaker's own vocabulary: three habits as receipts."],
          ["The spoken surface", "One visible self-correction ('I finished — well, finished is the wrong word'), light fillers, and a closing rhythm that ends inside the explain line."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Subject, circumstance, residue, effect — the card's order — with the summary capped at three sentences and the effect given the whole final third."],
          ["Grammar", "Past simple for the holiday, present perfect for the habits that continue ('I've pressed copies'), and a modal for the paraphrase — time layers kept clean."],
          ["Vocabulary", "Reader's words rather than critic's words — dog-eared implies love, 'pressed copies' implies evangelism, and no literary jargon appears anywhere."],
          ["Coherence", "The attention theme announced in the summary returns in the banned phrase and the notebook, so the talk reads as one thought unfolding."],
          ["Task fulfilment", "All three prompts are answered with dedicated material, and the extension is traced to three pieces of ground-level evidence — the family's definition of a full answer."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["A novel about an immigrant family", "Gives fiction a turn: the summary works at theme level, the circumstance is your own family's dinner table, and the effect is a phone call you finally made."],
          ["A biography of a quiet scientist", "Adds admiration to the mix: the line that stayed is a working habit rather than a sentence, and the effect lands on your own study routine."],
          ["A secondhand cookbook inherited with notes in the margins", "Makes the book an object as well as a text: two previous readers appear, and the effect is a Sunday dish you now cook their way."],
          ["A children's book reread as an adult", "Allows nostalgia with a twist: the circumstance is the rereading, not the first reading, and the effect is what you now notice about the original ending."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Do you think people read fewer books than they did twenty years ago?' — take a view and support it with one observation from your own circle."],
          ["Rounding-off question two", "'Should children be free to choose what they read, or should adults guide them?' — argue one side with a school memory."],
          ["Practice card A", "'Describe a book you would recommend to a friend' — full cycle; keep the recommendation honest and specific."],
          ["Practice card B", "'Describe a story that impressed you as a child' — practise circumstance and rereading rather than plot."],
          ["Practice card C", "'Describe a magazine or article you found interesting' — shrink the unit of reading and keep the method intact."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Pick the book you can quote or paraphrase one line from, then fill the corners: two-layer subject, dated circumstance, the line, three traced habits."],
          ["While the clock runs", "Count your summary sentences on your fingers; the moment a third scene tries to start, say 'anyway' — and mean it — and move to the residue."],
          ["If you are stuck", "Return to the circumstance corner — the day, the weather, the person who owned the book — because memory of place always produces language."],
          ["Final minutes", "Trace the effect to the ground: one habit, one route, one phrase — and if the clock allows, name the people you have pressed copies on."],
        ],
      },
      {
        type: "summary",
        points: [
          "A books card is a reading history, not a book report: three sentences of subject, then circumstance, residue and effect.",
          "Name the real subject — the theme that reached you — rather than the events that filled the pages.",
          "Date the reading with age, place and circumstance; a book that arrived at the right hour explains its own effect.",
          "The residue prompt wants one line, honestly flagged as quote or paraphrase, examined rather than stacked.",
          "Trace the effect to visible habits — routes, notebooks, retired phrases — and build the talk yourself: a borrowed reading history cannot survive a single follow-up question.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft chapter underneath this family.",
        items: [
          {
            question: "Which line of a cue card converts description into evaluation?",
            options: [
              "The situation line, because it sets the scene",
              "The 'and explain' closing line, which asks for the speaker's judgement",
              "The middle prompt, which carries the details",
            ],
            correctIndex: 1,
            explanation: "The prompts collect facts; the explain line asks what those facts are worth — which is why every family in this course protects its final third for it.",
            from: "Understanding cue cards",
          },
          {
            question: "Why does the note method store the explain line's material in the final corner?",
            options: [
              "Because the examiner reads the note after the talk",
              "Because material noted last is spoken last, and last place protects the evaluation from being squeezed out",
              "Because the reason is the least important content",
            ],
            correctIndex: 1,
            explanation: "Corner order is speaking order: parking the reason at the bottom of the note is the simplest possible guarantee that the card's most valuable line still gets its airtime.",
            from: "Effective note-taking",
          },
          {
            question: "You draw a books card and your mind offers only books you were forced to read at school. What is the taught move?",
            options: [
              "Refuse the card and wait for a friendlier one",
              "Take the school book you remember most and dig for one honest line, scene or effect — forced reading still leaves residue",
              "Describe a film instead, since films are similar",
            ],
            correctIndex: 1,
            explanation: "Excavation beats invention: even set texts leave a trace worth tracing, and honest thin material outperforms an invented passion every time — while swapping the family abandons the card.",
            from: "Handling unfamiliar topics",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. How much of a two-minute books talk should the plot summary receive?",
        hints: ["Count the card's prompts: how many are about the book's content, and how many are about you?"]
        ,
        options: [
          { id: "a", text: "At least a minute — the examiner needs the story to judge the effect." },
          { id: "b", text: "About three sentences: subject, shape and verdict — the card's weight lies in your reading history, not the book's events." },
          { id: "c", text: "None at all; skip straight to your feelings about the cover." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "About three sentences: subject, shape and verdict — the card's weight lies in your reading history, not the book's events.",
          "The card prints one content prompt and two reader prompts, so the proportions invert the book report: compress the subject, expand the circumstance, the line that stayed and the habits that formed.",
          "(a) spends the talk's centre on material the card barely asks for; (c) overcorrects into content-free enthusiasm that leaves the first prompt unanswered.",
        ),
        tags: ["speaking", "cue-cards", "books"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's thriller talk and answer the question.",
        hints: ["Notice what the tutor had time to ask about at the end — and didn't."]
        ,
        passageTitle: "The two twists",
        passage:
          "Elena's books talk was gripping for ninety of its one hundred and twenty seconds: the heist, the betrayal, the detective's secret, the final twist and the second final twist, all narrated with real excitement and mostly in the present tense. In the last thirty seconds she remembered the card and said: 'So, when I read it — last year, I think — it was very exciting and it affected me a lot.' Her tutor asked one question afterwards: 'Which of the twists is the one you think about on the bus?' Elena stared at her, then laughed. 'I don't think about any of them on the bus.'",
        question: "What had the talk failed to deliver?",
        options: [
          { id: "a", text: "Grammar — narrating a plot in the present tense broke the time frame." },
          { id: "b", text: "Residue and effect: no line that stayed, no habit formed, no trace of the reader's afterlife — the card's two reader prompts were served with one rushed sentence." },
          { id: "c", text: "Enthusiasm — the examiner needs to hear that the candidate enjoyed the book." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Residue and effect: no line that stayed, no habit formed, no trace of the reader's afterlife — the card's two reader prompts were served with one rushed sentence.",
          "The tutor's bus question is a residue test, and the honest answer — 'none of them' — reveals the talk's centre of gravity: ninety seconds of story and thirty seconds of reader, the exact inversion of what the card rewards.",
          "(a) is a real but minor fault beside the structural one; (c) misreads the examiner's interest, which runs to depth of effect, not volume of praise.",
        ),
        tags: ["speaking", "cue-cards", "books", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in a phrase, using the lesson's terms.",
        question: "What does this lesson recommend offering as the content of the 'what stayed with you' prompt?",
        acceptedAnswers: [
          "one sentence from the book — quoted if you can, honestly paraphrased if you cannot",
          "a single sentence, quoted or flagged as a paraphrase, plus why it lodged",
          "one line or sentence from the book, examined rather than summarised",
          "one sentence that stayed with you, with a note on why it lodged",
        ],
        keywords: ["one", "sentence"],
        hints: [],
        feedback: fb(
          "One sentence — quoted if memory allows, honestly flagged as a paraphrase if not — examined for why it lodged.",
          "A single line, looked at properly, gives the residue prompt depth and honesty at once, and the paraphrase flag protects both your grammar and your credibility.",
          "Answers offering a chapter, a character list or the ending have chosen more plot — the family's most abundant and least valuable resource.",
        ),
        tags: ["speaking", "cue-cards", "books"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. You are choosing between a famous classic you half-remember from school and a modest guidebook you reread every year. Which serves the card better, and why?",
        hints: [],
        options: [
          { id: "a", text: "The classic — examiners expect serious literature, and its prestige reflects on the speaker." },
          { id: "b", text: "The guidebook — you can date the reading, quote the line and trace the habits, which is exactly what the two reader prompts score." },
          { id: "c", text: "Whichever is shorter, so the summary leaves more time." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The guidebook — you can date the reading, quote the line and trace the habits, which is exactly what the two reader prompts score.",
          "Prestige buys nothing on this card: residue does, and residue lives in books we revisit — the reread guide supplies dates, lines and habits, while the half-remembered classic supplies a blur.",
          "(a) confuses the examiner's interest with a syllabus; (c) optimises the wrong variable — summary length is capped by method, not by the book's thickness.",
        ),
        tags: ["speaking", "cue-cards", "books"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a neighbouring books card — spoken, not written.",
        hints: ["Three sentences of subject, the circumstance, one line, and the habit it started."]
        ,
        situation:
          "A related books card: 'Describe a book you would recommend to a friend.' Prepare for up to one minute, then speak for one to two minutes, ending with who you would give it to and why.",
        targetPhrases: [
          "The one I keep lending out is…",
          "It's really about…",
          "The friend I'd give it to is…, because…",
        ],
        mustSay: ["recommend", "because", "book"],
        feedback: fb(
          "A one-to-two-minute recommendation naming the book's real subject, the circumstance of your reading, one line that stayed, and the friend it suits.",
          "Recommendation cards add an audience: the strongest answers match the book to a specific person and a specific reason, which turns the effect prompt into a small act of friendship.",
        ),
        tags: ["speaking", "cue-cards", "books", "long-turn"],
      }),
    ],
    assignment: {
      title: "A second reading history",
      instructions:
        "Choose a different book that left something behind in you — a reread favourite beats a revered classic — and write 40 to 160 words: first, your four-corner note as fragments (two-layer subject, dated circumstance, the line, traced habits); second, the exact sentences you would use to date the reading, giving your age, the place and what was going on in your life at the time.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Reread the first page of your chosen book tonight and copy out one sentence by hand; copied sentences are remembered sentences, and remembered sentences are talkable sentences.",
      "Ask one person which book changed something for them and note the habit they mention — practising the follow-up question is half of this family's reality.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-films",
    title: "Cue card family: Films",
    description:
      "One complete original Films card — a film that made you think differently — taught through the premise-theme split and the scene told slowly, with the author's one-minute note, cinema vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "identify a film with title, era and one credit fact inside two sentences",
      "separate a film's premise from its theme and give each its own brief",
      "tell one scene almost shot by shot and trace a named change in your view",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Films cards are books cards at twenty-four frames a second: the same plot trap, the same summary discipline, and one powerful addition — the scene prompt, which invites you to do what cinema itself does, slow the moment down until it means something. This lesson carries one complete films card about a man discovering his whole world is a television set, shows the preparation minute in fragments, and demonstrates how a nearly silent scene can carry the emotional centre of a talk. The sample response carries an estimate label; it teaches architecture, and architecture is exactly what reciting would destroy.",
        beforeYouStart: [
          "You can summarise a story without narrating it scene by scene.",
          "You can name a film's title, approximate year and one person involved in making it.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, screened this time through a films card"],
          ["Task & question types", "A viewing prompt with identity, content and scene prompts plus an explain line about a changed view; one minute to note, up to two to speak"],
          ["What is assessed", "Economical summary, narration of a single sequence, cinema-appropriate vocabulary, and a before-and-after statement of belief"],
          ["Why this matters", "Film and media questions surface in Part 1 and Part 3 across many test versions, so the summary-scene-change pattern earns repeat interest"],
        ],
      },
      { type: "heading", text: "What a films card is really asking" },
      {
        type: "text",
        text: "The three prompts give you a strict division of labour. 'What the film is' wants identification: title, rough year, one credit — a director, a star — and a genre word, all inside two sentences. 'What it is about' wants the idea, not the inventory of events: premise in one sentence, theme in one more, and then stop, because a film's plot is even more infinite than a book's and the clock does not care. 'What scene struck you most' is the card's gift: one sequence, told almost shot by shot, with one line of dialogue if you own one. A talk that serves all three in these proportions sounds like a person who has actually sat with a film — which is precisely the impression the criterion of task response is built to reward.",
      },
      { type: "heading", text: "The scene method, and the belief change" },
      {
        type: "text",
        text: "A scene told well obeys film grammar: establish where we are, follow one physical action, quote at most one line, and land on the shot you would freeze. Almost-silent scenes — a boat's bow punching through a painted sky, a hand hesitating over a door handle — are gold, because describing stillness forces slow speech, and slow speech at the emotional peak is the single most effective delivery choice a speaker can make. The explain line then needs a belief with a before and an after: the view you held when the lights went down, and the view you walked out with. 'It changed how I see everything' is a claim; 'comfortable is not the same as chosen' is a view, and views can be scored.",
      },
      {
        type: "steps",
        title: "Screening the film card in four shots",
        intro: "Identify, split, slow, change.",
        steps: [
          {
            title: "Shot 1: Identify it cleanly",
            text: "Title, approximate year, one credit and a genre word — two sentences maximum, delivered once and not repeated. Identification is a door, not a room; walk through it.",
            examples: [
              {
                english: "It's The Truman Show, the 1998 one with Jim Carrey — famous mostly for being the film where he plays it straight.",
                note: "Title, year, star and one distinguishing fact: the film on the table in twenty-five words.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Shot 2: Split premise from theme",
            text: "Premise is what happens; theme is what it is about. Give each one sentence — 'his whole life is a TV set' then 'it's about the comfort of never asking questions' — and resist the third sentence, because the third sentence is always plot.",
            examples: [
              {
                english: "The premise is one man's unknowing life inside a television show; the theme is how easily we accept the walls we were raised inside.",
                note: "The split done in one balanced pair — premise concrete, theme abstract, both brief.",
                domain: "study",
              },
            ],
          },
          {
            title: "Shot 3: Tell the scene slowly",
            text: "Choose one sequence — ideally quiet, mostly physical — and narrate it in order: establish, action, one line of dialogue, freeze-frame. Slow down as the scene tightens; the examiner should feel the projector dim.",
            examples: [
              {
                english: "The boat's prow punches through the painted sky — an actual wall with a horizon printed on it — and a voice from above offers him everything to stay.",
                note: "Two shots and one line of dialogue: a scene compressed for speech without losing its scale.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Shot 4: Name the belief change",
            text: "State the view you held before and the view you hold now, in that order, and keep each to one sentence. A belief with a before and an after is evidence of thinking; a belief with neither is decoration.",
            examples: [
              {
                english: "I used to treat my routine as neutral; now I audit it — and I stopped confusing comfortable with chosen.",
                note: "Before, after, and the distinction that carries them: the explain line in three clauses.",
                domain: "life",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Films",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "The film card lies face up; your minute of thinking time has started, and short notes are allowed."],
          ["Task line", "Describe a film that made you think differently"],
          ["Prompt 1", "what the film is"],
          ["Prompt 2", "what it is about"],
          ["Prompt 3", "what scene struck you most"],
          ["Explain line", "…and explain how it changed your view"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "The Truman Show · 1998 · Jim Carrey plays it straight", "Identification only: title, year and one fact, pre-loaded so the opening never stumbles."],
          ["Corner two — the anchor", "premise: life as unknowing TV star · theme: comfort of unexamined life", "The premise-theme split, written as two fragments — the summary prompt answered in advance."],
          ["Corner three — the detail bank", "boat prow through painted sky · voice from above · dark doorway out · 'nothing left to explore' teacher", "The chosen scene in four shots plus one supporting detail — the slow middle of the talk, ready."],
          ["Corner four — the reason", "routine no longer neutral · sympathetic to leavers · comfortable ≠ chosen", "The belief change with its before and after — the explain line's cargo, separated from story."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the darkened room",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["premise", "The setup named in one word: 'the premise is simple, and that's its power'."],
          ["thought-provoking", "One adjective of weight, applied to the film's question rather than its quality."],
          ["glued to the screen", "Your viewing state: 'even knowing the twist, I was glued to the screen'."],
          ["a plot twist", "Mention, never narrate: 'there's a twist I won't ruin'."],
          ["cinematography", "For the visual scene: 'the cinematography does the arguing in that sequence'."],
          ["haunting", "The afterimage: 'the final image is genuinely haunting'."],
          ["a character study", "Genre precision beyond 'drama': 'it's really a character study with weather'."],
          ["to rewatch", "Viewing as evidence: 'I've rewatched it four times, and the wall scene still works'."],
          ["visually striking", "For a scene you cannot narrate: 'the whole film is visually striking, but that shot especially'."],
        ],
      },
      {
        type: "example",
        title: "Six film talks and their key shots",
        items: [
          {
            english: "It's a small documentary about the people who repair the city's neon signs, and it is secretly about who a city belongs to.",
            note: "The premise-theme split applied to non-fiction — works identically on documentaries.",
            domain: "exam",
          },
          {
            english: "Corner three of my note: 'kitchen table, two teas, the sentence she doesn't finish'.",
            note: "A scene reduced to three fragments — props, gesture and an unfinished line beat any explosion.",
            domain: "study",
          },
          {
            english: "I went in expecting a cartoon for my nephew and came out taking notes for myself.",
            note: "A viewing circumstance that doubles as a joke — the double-layer viewing of animation acknowledged.",
            domain: "life",
          },
          {
            english: "The whole film happens in one office over one night, which sounds like a meeting and plays like a thriller.",
            note: "Constraint described instead of plot — the shape of a film can stand in for its story.",
            domain: "exam",
          },
          {
            english: "Our whole team quoted that film for a year; one line became the unofficial motto of the project.",
            note: "A film's effect traced into the workplace — evidence that the viewing actually changed behaviour.",
            domain: "work",
          },
          {
            english: "I watched it on a plane, which is the worst possible way, and it still rearranged my week.",
            note: "Honest viewing circumstance with a built-in contrast: bad conditions, big effect.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where films talks go wrong" },
      {
        type: "mistakes",
        title: "Films-card traps corrected",
        items: [
          {
            wrong: "I retold the film in order — opening, middle, climax, ending — and ran out of clock somewhere in act two.",
            right: "Identify in two sentences, split premise from theme in two more, and spend the recovered minute inside one scene told slowly.",
            reason: "The card prints exactly one scene prompt; a full plot spends ninety seconds answering a question nobody asked and starves the one they did.",
          },
          {
            wrong: "I talked about the lead actor's career, awards and personal life for most of the two minutes because I knew those facts well.",
            right: "One credit fact for identification, then back to the film's idea and your scene — the actor is a door, not a destination.",
            reason: "The card asks about the film and your thinking; a star biography answers a different card entirely and reads as borrowed general knowledge.",
          },
          {
            wrong: "For the change I said 'it made me see life completely differently', and when my partner asked how, I had nothing.",
            right: "Name the belief before, the belief after, and the distinction that carries you between them.",
            reason: "The explain line is scored on content, and 'differently' is a direction, not a destination — a named before-and-after belief is what turns the claim into evidence.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The films card, end to end",
        reading: {
          text: "A films talk is three small rooms and one large one: identification, premise, theme, then the scene — and the scene should be the largest room in the house. Told well, a scene does the work of a hundred adjectives, because physical action described in order lets the examiner see it rather than hear about it. Two disciplines protect the proportions. First, the twist rule: mention that a twist exists, never narrate it — the examiner may one day watch the film, and more importantly, the clock is shorter than the plot. Second, the rewatch rule: prefer a film you have seen more than once, because second viewings are where scenes and themes become speakable. As with every family in this course, the talk must be yours; film talks are the second most commonly memorised after objects, and examiners recognise a rehearsed monologue faster than any twist.",
          task: "Before the tasks below, write your identification sentence and check that it contains title, year and one credit fact.",
        },
        writing: {
          task: "Draft your own films talk against this card with the guide's four openings, then study the model's scene paragraph for its pacing — and leave its sentences on the page, because a recited film talk has all the life of a trailer on mute.",
          guide: [
            "Identification: 'It's…, the… one, with/directed by…'",
            "Split: 'The premise is…; underneath, it's about…'",
            "Scene: 'The scene that stays with me is near the end:…'",
            "Change: 'I used to think…; now I…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nThe film I've chosen is The Truman Show — the 1998 one with Jim Carrey — and I've picked it because it made me start questioning my own routine, which I know sounds dramatic, but hear me out.\n\nWhat it is: a comedy-drama directed by Peter Weir, famous mostly for being the one where Jim Carrey plays it straight. The premise is that Truman Burbank has spent his entire life, unknowingly, as the star of a reality television show — his town is a set, his neighbours are actors, his wife was cast, and thousands of cameras follow his every move from inside a giant studio dome.\n\nWhat it's about, underneath that premise, is the comfort of an unexamined life. Everything in Truman's world is designed to keep him from asking questions — the teacher who tells him there's nothing left to explore, the fear of water planted by his 'father's' death. It's a film about how easily we accept the walls we were raised inside.\n\nThe scene that struck me most is near the end, and it's almost silent: Truman sails to the edge of his world and the boat's prow punches through the painted sky — an actual wall with a horizon printed on it. And then a voice from above offers him everything to stay. And this small, frightened man who has never made a real decision in his life chooses the dark doorway out instead. I've watched it four — no, five times now, and that moment still makes my chest tight.\n\nHow did it change my view? Two ways. The small one: I stopped treating my daily routine as neutral — I audit it now, the way you'd check a suspicious bill. And the bigger one: I became far more sympathetic to people who leave stable lives — jobs, cities, marriages — because the film taught me that the safest room can still be a set. Comfortable is not the same as chosen. That distinction moved into my head and never left.",
        },
        listening: {
          script:
            "Maya: I'm doing the film card tomorrow and I've decided to tell the whole plot, because the twist is the best part.\nSam: The whole plot? You have two minutes.\nMaya: Fine — the twist, then. The twist is the best part.\nSam: The twist is the part you can't use. If you narrate it, you've spent your centre on something the listener can't verify, and you still owe the card a scene. Tell the scene where she burns the letter. It's forty seconds of her hands and the kettle, no dialogue, and you can slow right down.\nMaya: And the twist?\nSam: 'There's a twist I won't ruin.' That sentence is worth more to your band than the twist itself.",
          task: "Note the two reasons Sam gives for protecting the twist, and the scene she offers instead.",
        },
        speaking: {
          task: "Run the full cycle for a film of your own — one you have seen more than once: a minute of notes, one to two recorded minutes, then the checklist, listening for the moment you speed up.",
          frames: [
            "The film I'd pick is…, the… one",
            "The premise is…; underneath, it's about…",
            "The scene that stayed with me is…",
            "Before it, I thought…; since then, I…",
          ],
          checklist: [
            "Did my identification finish inside two sentences, title to credit?",
            "Did premise and theme each get exactly one sentence?",
            "Did I slow down inside the scene instead of summarising it?",
            "Did I name a belief with a before and an after — and keep my own voice, not a trailer voice?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, shot by shot",
        headers: ["Shot of the talk", "What the sample does there"],
        rows: [
          ["The identification", "Title, year and the 'plays it straight' fact in one breath, plus an honest promise — 'I know it sounds dramatic' — that buys goodwill for the ending."],
          ["The premise", "One long sentence of setup, list-shaped and concrete: set, actors, cast wife, cameras, dome — the inventory that proves viewing."],
          ["The theme", "'The comfort of an unexamined life' — an abstract named cleanly — then two supporting details and the walls sentence that the ending will echo."],
          ["The scene", "Almost silent, told in order: the sail, the prow through the painted sky, the voice from above, the dark doorway — with a self-corrected rewatch count as testimony."],
          ["The belief change", "Two changes ranked small then large: the audited routine, and sympathy for leavers — closing on 'comfortable is not the same as chosen'."],
          ["The spoken surface", "One self-correction ('four — no, five times'), direct address ('hear me out'), and a deliberate slow-down at the wall that the transcription can only hint at."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Identify, premise, theme, scene, change — the card's five rooms in order, with the scene as the largest and the change given the final third."],
          ["Grammar", "Present tense for the film's world ('his town is a set'), past simple for the viewing, and 'used to' plus present for the belief change — the family's core tense work, done cleanly."],
          ["Vocabulary", "Film words used precisely and sparingly — premise, scene, shot — with the argument carried by ordinary language: painted sky, suspicious bill, chosen."],
          ["Coherence", "The walls motif runs from theme to scene to belief, so the talk's three abstractions are tied by one image."],
          ["Task fulfilment", "Each prompt is served in its own room, the twist is mentioned but never narrated, and the extension closes on a distinction that can be scored."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["A documentary about the clothing industry", "Swaps fiction for evidence: the scene is a warehouse or a river, and the changed view is a wardrobe — labels checked, one brand quietly dropped."],
          ["An animated film watched with a child", "Adds a double viewing: the child laughs while you take notes, and the changed view is about what children are actually being told."],
          ["A science-fiction film about recorded memories", "Moves the theme to memory itself: the scene is a character replaying one afternoon, and the change is how you now treat your camera roll."],
          ["A foreign-language film first watched without subtitles", "Makes language the subject: the scene carries meaning without dialogue, and the changed view is about how much faces say."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Do you think films shape how young people see the world?' — give a position with one named example."],
          ["Rounding-off question two", "'Should governments spend public money on local cinema?' — argue one side and acknowledge the other."],
          ["Practice card A", "'Describe a film you would happily watch again' — full cycle; let the rewatch justify the scene detail."],
          ["Practice card B", "'Describe a documentary you found interesting' — apply the premise-theme split to non-fiction."],
          ["Practice card C", "'Describe a character from a film you remember well' — practise character through one scene, not a biography."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose a film you have seen twice or more, then fill the corners: identification facts, the premise-theme pair, four scene fragments, before-and-after beliefs."],
          ["While the clock runs", "Watch for the pull of plot: the moment you hear yourself saying 'and then', return to your scene corner and slow the telling down."],
          ["If you are stuck", "Freeze the frame — describe the single shot you would photograph from the film, and the talk will restart itself inside the scene prompt."],
          ["Final minutes", "Deliver the belief change in ranked order — the small change, then the large — and stop on the distinction in your final sentence."],
        ],
      },
      {
        type: "summary",
        points: [
          "Identification is a door, not a room: title, year, one credit, two sentences, then walk through.",
          "Split premise from theme and give each a single sentence; the third sentence is always plot, and plot is what the clock cannot hold.",
          "The scene prompt is the card's gift: one quiet sequence, told almost shot by shot, slowing as it tightens.",
          "The explain line wants a belief with a before and an after — a named distinction, not the word 'differently'.",
          "Build the talk from a film you actually rewatch, in your own words and your own voice — a memorised film monologue is the second-easiest thing in the test to detect.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft lessons beneath this family.",
        items: [
          {
            question: "What does 'identifying key requirements' train you to do with the card's lines?",
            options: [
              "Memorise them word for word before speaking",
              "Convert each printed line into a deliverable you can tick off as the talk proceeds",
              "Rank them by how easy they are to answer",
            ],
            correctIndex: 1,
            explanation: "A card is a checklist in disguise: converting its lines into deliverables guarantees that none — identification, premise, scene or change — quietly goes unanswered.",
            from: "Identifying key requirements",
          },
          {
            question: "During the preparation minute, what comes first?",
            options: [
              "Writing the opening sentence in full",
              "Choosing the subject and anchoring it, then filling detail fragments with the time left",
              "Nothing — the minute is for silent thought only",
            ],
            correctIndex: 1,
            explanation: "Subject first, fragments after: a chosen subject with a thin note always outscores a perfect note about a subject chosen too late to plan.",
            from: "The one-minute preparation",
          },
          {
            question: "The card asks for a film you barely remember watching once. What is the taught response?",
            options: [
              "Invent a plausible film from its poster",
              "Name the gap honestly and talk about the one scene or impression that did survive, at depth",
              "Switch to a book, since the examiner allows family swaps",
            ],
            correctIndex: 1,
            explanation: "Honest depth beats invented breadth: one surviving scene, examined properly, answers the card's most valuable prompt better than a fabricated whole — and family swaps are not an option.",
            from: "Handling unfamiliar topics",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. The card's second prompt asks what the film is about. What content does this lesson train for it?",
        hints: ["One sentence for what happens; one sentence for what it means."]
        ,
        options: [
          { id: "a", text: "A full account of the story from opening scene to final twist." },
          { id: "b", text: "The premise in one sentence and the theme in another — what happens, then what it means." },
          { id: "c", text: "A review of the film's production history and box office." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The premise in one sentence and the theme in another — what happens, then what it means.",
          "The split gives the content prompt two clean sentences and hands the saved time to the scene, where the family's richest material lives; anything longer starts retelling.",
          "(a) is the plot trap that empties the scene prompt's airtime; (c) answers a film magazine's questions rather than the card's.",
        ),
        tags: ["speaking", "cue-cards", "films"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's film talk and answer the question.",
        hints: ["Ask whose story was being told: the film's, or its star's?"]
        ,
        passageTitle: "The biography screening",
        passage:
          "Kwame's films talk was fluent and full: he introduced the film by its star, then charted the actor's rise from television, his awards, his famous lifestyle, his most-quoted interviews, and his next project. The film itself appeared twice — once as a title, once as 'the one where he's a pilot'. The scene prompt got one sentence: 'the ending was incredible, everyone says so'. At the end of the playback, his tutor said quietly: 'I now know everything about the man and nothing about the movie. Which one did the card ask for?'",
        question: "What had gone wrong with Kwame's talk?",
        options: [
          { id: "a", text: "He had replaced the film with its star's biography, leaving the scene and change prompts almost empty." },
          { id: "b", text: "His fluency had suffered because he knew too many facts." },
          { id: "c", text: "He had chosen a film that was too old for the examiner to know." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "He had replaced the film with its star's biography, leaving the scene and change prompts almost empty.",
          "The card asks about a film and your thinking: one credit fact identifies it, but the star's career is a different subject entirely — and the talk's two richest rooms, the scene and the belief change, were closed for the whole two minutes.",
          "(b) contradicts the passage's word 'fluent'; (c) invents a problem of taste — a film's age is irrelevant to the criteria, as is the examiner's viewing history.",
        ),
        tags: ["speaking", "cue-cards", "films", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in one sentence, using this lesson's terms.",
        question: "How does the lesson say the scene prompt should be delivered in a films talk?",
        acceptedAnswers: [
          "slowly, almost shot by shot, with at most one line of dialogue — the scene told, not summarised",
          "slowly and in order, like shots in a sequence, pausing on the frame you would freeze",
          "slowly: one scene narrated almost shot by shot, with one quoted line at most",
          "slowly, scene by shot rather than summary, freezing on the final image",
        ],
        keywords: ["slowly", "shot"],
        hints: [],
        feedback: fb(
          "Slowly, almost shot by shot — one sequence narrated in order, with at most one line of dialogue, ending on the frame you would freeze.",
          "Ordered physical detail lets the examiner see the scene rather than hear about it, and the deliberate slow-down at the emotional peak is the most effective delivery choice the family offers.",
          "Answers promising a quick summary of the best bits have chosen speed — exactly the quality that makes scene prompts sound like trailers.",
        ),
        tags: ["speaking", "cue-cards", "films"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which closing best answers 'how did it change your view'?",
        hints: [],
        options: [
          { id: "a", text: "'It completely changed my life and my thinking about everything, honestly.'" },
          { id: "b", text: "'I used to treat my routine as neutral; since the film, I audit it — because comfortable is not the same as chosen.'" },
          { id: "c", text: "'The film was very popular, so many people must have changed their views too.'" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'I used to treat my routine as neutral; since the film, I audit it — because comfortable is not the same as chosen.'",
          "The strongest belief changes carry three parts: the before, the after and the distinction that moved you — every one of them nameable, and therefore scoreable.",
          "(a) is a claim without content; (c) hands the change to an anonymous crowd and abandons the only mind the card asked about — yours.",
        ),
        tags: ["speaking", "cue-cards", "films"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a non-fiction cousin of this card — spoken, with the clock running.",
        hints: ["Identify, premise, theme, one scene, and the belief it moved."]
        ,
        situation:
          "A related films card: 'Describe a documentary you found interesting.' Prepare for up to one minute, then speak for one to two minutes, giving the documentary one scene and one thing it changed in your thinking.",
        targetPhrases: [
          "The documentary I'd name is…",
          "On the surface it follows…; really, it's about…",
          "The sequence that stayed with me shows…",
        ],
        mustSay: ["documentary", "learned", "because"],
        feedback: fb(
          "A one-to-two-minute documentary talk with clean identification, the premise-theme split, one slowly told sequence, and a named change of mind.",
          "Documentaries reward the same disciplines as fiction — and one more: facts you cite should be framed as the film's claims rather than universal truths, which keeps the talk honest and the grammar clean.",
        ),
        tags: ["speaking", "cue-cards", "films", "long-turn"],
      }),
    ],
    assignment: {
      title: "A second film, noted and framed",
      instructions:
        "Choose a different film that genuinely shifted something in your thinking — one you have seen more than once — and write 40 to 160 words: first, your four-corner note as fragments (identification facts, premise-theme pair, four scene fragments, before-and-after beliefs); second, the exact two sentences you would use to tell the scene, in order, with at most one line of dialogue.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Rewatch your chosen film's key scene once with the sound off, then write down the three physical actions you saw — silent viewing is where scene vocabulary comes from.",
      "Record your talk, then play the scene paragraph to someone and ask them to draw what they heard; if the drawing is blank, your scene was a summary.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-travel",
    title: "Cue card family: Travel",
    description:
      "One complete original Travel card — a journey that took much longer than expected — taught as a plan-disruption-coping-arrival story, with the author's one-minute note, journey vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "frame a journey with its plan and expected duration before the disruption arrives",
      "narrate a delay through its estimates and realities rather than a list of grievances",
      "answer a coping prompt with tactics and named allies, then land on layered arrival feelings",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Travel cards about delay are problem stories, and problem stories need a yardstick: the plan. Say where you were going and how long it should have taken, and every subsequent hour of chaos becomes measurable — six became twenty-two, two became seven. This lesson carries one complete travel card about an overnight train that met a storm, demonstrates the preparation minute, and shows how coping with allies and small rations beats complaining, and how an arrival can be layered: relief, gratitude, and something unexpected. The sample talk carries an estimate label and shows its method; memorising its sentences would hand the examiner a borrowed delay, and borrowed delays have no weather in them.",
        beforeYouStart: [
          "You can narrate a sequence of past events with time markers and the past perfect for causes.",
          "You can name feelings in layers — relief, exhaustion, surprise — rather than one flat adjective.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, travelled this time through a delay card"],
          ["Task & question types", "A journey prompt with destination, incident and coping prompts plus an explain line about arrival feelings; one minute to note, up to two to speak"],
          ["What is assessed", "Narrative tenses across a disrupted timeline, vocabulary of transport and mishap, emotional range at the close, sustained fluency through frustration"],
          ["Why this matters", "Transport and holiday questions run through Part 1 as well, and delay stories are the anecdotes friends actually ask for"],
        ],
      },
      { type: "heading", text: "What a travel card is really asking" },
      {
        type: "text",
        text: "A delay card is not asking for a holiday review. The destination's restaurants, the hotel, the weather at the beach — all of it lives off the card, because the card is about the journey's length, not the trip's quality. What it wants instead is a small drama in four beats: the plan (where, how far, how long it should have taken), the disruption (what actually happened, and the gap between the first estimate and the truth), the coping (tactics, allies, surrenders), and the arrival (how you felt when the doors finally opened). The plan is the beat candidates forget, and it is the one that makes everything after it legible: 'twenty-two hours' means nothing until the listener knows it should have been six.",
      },
      { type: "heading", text: "Coping material, and the layered arrival" },
      {
        type: "text",
        text: "The coping prompt is where delay talks earn their character. Three kinds of material work: allies (the retired nurse with the thermos, the stranger who knew the back roads), rations (battery percentage, the last bottle of water, the single message home), and surrenders (the moment you gave up on the schedule and found it oddly liberating). Complaint, by contrast, is not coping — a catalogue of the company's failures fills time and develops nothing. The arrival then deserves a layered close: the body's state, the named emotions, and ideally one unexpected gain, because the best delay stories end with the traveller slightly sorry the journey is over. That final twist of feeling is evaluation, and it is exactly what the closing line exists to collect.",
      },
      {
        type: "steps",
        title: "Telling the delay, in four beats",
        intro: "Plan, disruption, coping, arrival.",
        steps: [
          {
            title: "Beat 1: State the plan and its arithmetic",
            text: "Open with where you were going, the distance and the expected duration — the tidy version of the night. 'Four hundred kilometres, the eleven p.m. sleeper, home for breakfast' gives the listener the yardstick every later hour will be measured against.",
            examples: [
              {
                english: "The plan was beautifully simple: sleeper train at eleven, asleep by midnight, home for breakfast.",
                note: "The tidy plan told in one sentence — order established so chaos can break it.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Beat 2: Narrate the disruption with its estimates",
            text: "Say what stopped you, then track the gap between promise and reality: the two-hour estimate, the seven-hour truth. Estimate-versus-reality is a structure, and structures keep fluency upright when the story is frustrating.",
            examples: [
              {
                english: "The guard promised two hours; we sat in that halt for six — no, seven — while one lamp flickered.",
                note: "A self-corrected count does double duty: honest detail plus the passage of time felt.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Beat 3: Cope with allies and rations",
            text: "Give the coping prompt a named ally, one rationing decision and one surrender. Kindness received from strangers is the richest travel material there is, and the rationing detail proves the situation was real.",
            examples: [
              {
                english: "A retired nurse opposite us produced a thermos and sandwiches for a cricket team, and refused all payment.",
                note: "An ally with a name, an object and a refusal: coping as human warmth rather than logistics.",
                domain: "life",
              },
            ],
          },
          {
            title: "Beat 4: Land the arrival in layers",
            text: "Close on the body first (grimy, lenses like gravel), then the named feelings (relief, gratitude, elation), then the twist — the delay produced something the plan never would have. End inside that feeling, not at the door.",
            examples: [
              {
                english: "I've never been so pleased to see an ugly bus station — and I was almost sorry to arrive. Almost.",
                note: "The layered close with a two-word final turn: relief, then the unexpected reluctance.",
                domain: "exam",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Travel",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "This round asks for a journey; plan on paper for sixty seconds, then speak until stopped."],
          ["Task line", "Describe a journey that took much longer than expected"],
          ["Prompt 1", "where you were going"],
          ["Prompt 2", "what happened"],
          ["Prompt 3", "how you coped"],
          ["Explain line", "…and explain how you felt when you finally arrived"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "cousin's wedding → home · 400 km · 11 p.m. sleeper, 6 hrs planned", "The plan with its arithmetic: destination, distance, scheduled duration — the yardstick."],
          ["Corner two — the anchor", "2 a.m., storm, tree on the line · 'two hours' promised · 6–7 hrs reality · orange-soda vending machine", "The disruption with its estimate gap and one absurd detail — chaos made specific."],
          ["Corner three — the detail bank", "phone at 30%: rationed, one text · Hana's thermos + sandwiches · card school with the guard · surrendered the schedule", "Coping in four fragments: a ration, an ally, a game and a surrender — the prompt's whole meal."],
          ["Corner four — the reason", "grimy, lenses like gravel · elated + relieved + grateful · strangers → temporary village · almost sorry to arrive", "The arrival pre-layered: body, feelings and the twist, ready for the final third."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the long way round",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["to be held up", "The neutral verb of delay: 'we were held up somewhere with no name at two in the morning'."],
          ["stranded", "The state after hope of moving fades: 'properly stranded, one platform, one flickering lamp'."],
          ["in the middle of nowhere", "Location as atmosphere — three words that save you a sentence of geography."],
          ["a fellow passenger", "Turn strangers into characters: 'a fellow passenger, a retired nurse, saved the whole carriage'."],
          ["to ration", "Resource management as detail: 'I rationed my last thirty per cent of battery to one message home'."],
          ["to make the best of it", "The coping prompt in one idiom — then prove it with what you actually did."],
          ["to stretch your legs", "The small mercies of delay: 'they let us stretch our legs on the platform, carefully'."],
          ["weary", "The honest arrival word — pair it with something warmer immediately afterwards."],
          ["elated", "The surprise of arrivals: 'weary, yes, but strangely elated at the sight of that ugly station'."],
        ],
      },
      {
        type: "example",
        title: "Six delays and the sentences they deserved",
        items: [
          {
            english: "A four-hour flight became a two-day story involving three airports and one borrowed toothbrush.",
            note: "The arithmetic of escalation in one line — small plan, large reality, one intimate detail.",
            domain: "exam",
          },
          {
            english: "Corner two of my note: 'snow above the pass, gate locked, guesthouse with seven beds and nine of us'.",
            note: "A disruption captured in two fragments of number and mismatch — material a scriptwriter would keep.",
            domain: "study",
          },
          {
            english: "The man next to me missed his own daughter's wedding, and still shared his sandwiches around the taxi.",
            note: "An ally whose story out-scales yours — generosity under worse pressure is powerful coping material.",
            domain: "life",
          },
          {
            english: "We missed the ferry by ninety seconds and watched it leave with our hire car on it.",
            note: "A tiny margin with a huge consequence — the comedy of near-misses keeps frustration talkable.",
            domain: "exam",
          },
          {
            english: "Our whole cohort slept in the terminal; the cleaning staff taught us dominoes at three in the morning.",
            note: "Work travel delays count too — and the domino detail proves nobody slept through the night.",
            domain: "work",
          },
          {
            english: "The last bus left without me, so I walked the final fifteen kilometres and met the sunrise doing it.",
            note: "The small-scale epic: no drama, no airline, just distance — and an arrival that doubles as a view.",
            domain: "life",
          },
        ],
      },
      { type: "heading", text: "Where travel talks go wrong" },
      {
        type: "mistakes",
        title: "Travel-card traps corrected",
        items: [
          {
            wrong: "I reviewed the whole holiday — the hotel, the beach, the restaurant with the octopus — and mentioned the delayed flight for twenty seconds at the end.",
            right: "Keep the trip's sights out of it: open on the plan, and give every minute to the journey whose length went wrong.",
            reason: "The card is about a journey's duration, not a holiday's quality; the sights answer nothing the card printed and steal the delay's airtime.",
          },
          {
            wrong: "I spent the middle minute listing the rail company's failures — the announcements, the vouchers, the rudeness — and never said what I did with myself.",
            right: "Name the frustration once, then move to coping: allies, rations, surrenders — the prompt asks for your behaviour, not the company's.",
            reason: "Grievance fills time and develops nothing; coping is character in action, and only action scores on the criteria.",
          },
          {
            wrong: "The delay story was so good that the examiner's stopwatch caught me still at the platform, and I never described arriving at all.",
            right: "Budget the beats: plan short, disruption medium, coping medium, arrival protected — the final third belongs to how you felt when it ended.",
            reason: "The explain line lives at the end of this family more visibly than any other; a delay talk without an arrival has no ending, only a stop.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The travel card, end to end",
        reading: {
          text: "A delay talk runs on four beats with a strict budget: the plan in two or three sentences, the disruption for roughly forty seconds, the coping for a similar stretch, and the arrival protected for the final third. Two behaviours separate the fluent from the frantic. First, numbers do the narrating — six hours became twenty-two, thirty per cent battery, nine travellers and seven beds — because arithmetic survives nerves where adjectives evaporate. Second, the closing feelings arrive in layers: the body's state, the named emotions, and one unexpected gain, which is the twist that turns a complaint into a story. And the standing warning applies with force here: rehearsed travel anecdotes are common, and they are detectable precisely because their delays contain no absurd specifics — no orange-soda vending machine, no dominoes at three in the morning.",
          task: "Before the tasks below, write your plan's arithmetic — distance, scheduled duration — in one sentence.",
        },
        writing: {
          task: "Write your own delay story against this card, beat by beat, with the guide's openings — then study the model for its budget and its layers, not its sentences, because your delay deserves its own vending machine.",
          guide: [
            "Plan opener: 'The plan was…: … kilometres, … hours'",
            "Disruption opener: 'And then, at…, everything…'",
            "Coping opener: 'What got us through was…'",
            "Arrival opener: 'When we finally arrived, I was…, but…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nSo I want to tell you about a train journey from my cousin's wedding back to my city, which should have been an uneventful six-hour overnight trip and turned into a twenty-two-hour epic.\n\nWhere we were going: I'd been at the wedding in a small town about four hundred kilometres from home, and the plan was simple — the eleven p.m. sleeper train, a compartment with my partner, asleep by midnight, home for breakfast.\n\nWhat happened: at about two in the morning, in the middle of absolutely nowhere, the train stopped. And then it kept being stopped. Eventually the guard came through and explained that a storm had brought a tree down across the line ahead, and we'd have to wait for a crew to come from the other direction. The estimate was two hours. We sat there for six — no, seven hours in the end, in a halt with one platform, one flickering lamp, and a vending machine that sold only orange soda.\n\nHow did I cope? Honestly, better than I expected. My phone was at thirty per cent, so I rationed it — airplane mode, one message home. The woman opposite us, a retired nurse called Hana, produced a thermos and enough sandwiches for a cricket team, and refused all payment. Someone found a pack of cards, so there was a rotating card school in our compartment — we even taught the guard a game I still can't name. And at some point I gave up on the schedule, which was weirdly liberating. I watched the sun come up over fields I'd otherwise have slept through.\n\nHow did I feel when we finally arrived? I've never been so pleased to see an ugly bus station. I was grimy, my contact lenses felt like gravel — but genuinely elated. Partly relief, partly gratitude, and partly something else: those seven hours of nothing had somehow turned a compartment of strangers into a temporary little village. I was almost sorry to arrive. Almost.",
        },
        listening: {
          script:
            "Sister: Where are you? Mum's made soup.\nTraveller: Still on the train. Or rather, next to the train. There's a tree on the line and we've been in a halt since two.\nSister: Two in the morning? What are people doing?\nTraveller: Rationing phone batteries, mostly. And the woman across from me has started a sandwich initiative — she's a nurse, she's very calm, and she has a thermos the size of a fire extinguisher. Someone's producing a pack of cards.\nSister: Are you furious?\nTraveller: I was. Then I gave up on Thursday entirely, and now I'm watching the sunrise over fields I'd normally sleep through. Tell Mum the soup will keep.",
          task: "Note the three coping measures mentioned in the call, and the moment the traveller's mood turns.",
        },
        speaking: {
          task: "Run this card end to end for a delay of your own — transport, weather or human error: one minute of notes, one to two recorded minutes, then the checklist, checking especially that your arrival survived.",
          frames: [
            "The plan was…, which should have taken…",
            "And then, at…, we…",
            "What got me through was…",
            "When I finally arrived, I felt…, and strangely…",
          ],
          checklist: [
            "Did my opening give the plan's arithmetic before any chaos?",
            "Did the disruption include an estimate and its reality?",
            "Does the coping contain an ally and a ration?",
            "Is the final third spent on layered arrival feelings, with one unexpected gain?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, beat by beat",
        headers: ["Beat of the talk", "What the sample does there"],
        rows: [
          ["The opening", "States the route and the arithmetic — six hours planned, twenty-two delivered — so the whole story's scale is set inside two sentences."],
          ["The plan", "Sleeper train, compartment, breakfast: the tidy version of the night, told warmly so its collapse has something to collapse."],
          ["The disruption", "Two a.m., a tree, a guard's estimate and its betrayal — plus the orange-soda vending machine, an absurd detail that anchors the halt in memory."],
          ["The coping", "A rationed phone, Hana and her thermos, the card school with the guard, and the surrender of the schedule — coping as character, not logistics."],
          ["The arrival", "The ugly bus station welcomed, the body's griminess admitted (lenses like gravel), then relief, gratitude and the temporary-village reflection."],
          ["The spoken surface", "One self-corrected count ('six — no, seven hours'), conversational fragments kept short, and a two-word final turn — 'Almost.' — that lands the talk inside feeling."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Plan, disruption, coping, arrival — the four beats in card order, with the arrival protected as the largest final third."],
          ["Grammar", "Past perfect for causes ('a storm had brought a tree down'), past simple for events, and a past continuous for atmosphere ('we sat there for six hours') — disrupted time, cleanly managed."],
          ["Vocabulary", "Transport and mishap words — held up, halt, line — plus human warmth words: thermos, card school, little village."],
          ["Coherence", "The schedule motif runs from 'home for breakfast' through the surrendered timetable to the sunrise watched instead of slept through."],
          ["Task fulfilment", "Destination, incident and coping each own a beat, and the extension closes on three named feelings plus a twist — arrival as evaluation."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["A diverted flight ending in a night bus", "Raises the stakes with aviation vocabulary — tarmac, vouchers, rebooking — and the arrival happens at dawn in the wrong terminal, right but disorienting."],
          ["A mountain pass closed by snow", "Gives the delay a landscape: an overnight guesthouse, nine travellers and seven beds, and an arrival in chains-tyred silence."],
          ["A missed connection cascade on a student budget", "Adds money to the mix: the coping is terminal floors and shared headphones, and the arrival brings the first hot meal in a day."],
          ["The last bus missed, fifteen kilometres walked", "Scales the epic down to one person on foot: no announcements, no allies, just distance — and an arrival at a lit kitchen window."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Are long journeys easier to deal with now than they were for earlier generations?' — take a view with one comparison."],
          ["Rounding-off question two", "'Why do some people actually enjoy long train journeys?' — give two reasons, one of them psychological."],
          ["Practice card A", "'Describe a long journey you enjoyed' — same family, opposite sign; notice what replaces the disruption beat."],
          ["Practice card B", "'Describe a trip that did not go as planned' — widen the mishap beyond transport and keep the layered close."],
          ["Practice card C", "'Describe a time you travelled with someone memorable' — practise the ally as the subject rather than the supporting cast."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose the delay you can tell with numbers, then fill the corners: plan arithmetic, estimate gap, ally-ration-surrender, layered arrival."],
          ["While the clock runs", "Watch the beat budget: if the disruption passes forty-five seconds, close it with the reality's arrival time and move to coping."],
          ["If you are stuck", "Return to the halt and describe its furniture — platform, lamp, vending machine — because absurd specifics restart a stalled delay story every time."],
          ["Final minutes", "Deliver the arrival in layers — body, feelings, twist — and stop inside the unexpected gain rather than at the door."],
        ],
      },
      {
        type: "summary",
        points: [
          "A delay card is about the journey's length, not the holiday's quality: keep the destination's sights off the card entirely.",
          "State the plan's arithmetic first — distance and scheduled duration — because it is the yardstick that makes every later hour measurable.",
          "Narrate the disruption through estimates and their betrayal; numbers survive nerves where adjectives evaporate.",
          "Cope with allies, rations and surrenders — one named fellow passenger beats a catalogue of the company's failures.",
          "Protect the final third for layered arrival feelings: the body, the named emotions, and one unexpected gain. And tell your own delay, weather and vending machines included — a borrowed delay has none.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the craft lessons behind this family.",
        items: [
          {
            question: "What does the craft chapter recommend when you move between a story's beats?",
            options: [
              "Pause silently for three seconds as a boundary",
              "Mark the move aloud — 'so, how did I cope?' — so the sound and the structure stay continuous",
              "Repeat the last sentence of the previous beat",
            ],
            correctIndex: 1,
            explanation: "Spoken signposts carry the listener across the joints of a talk and show the examiner the card's prompts being served in order.",
            from: "Maintaining continuity",
          },
          {
            question: "Why keep speaking until the examiner stops you?",
            options: [
              "Because extra speaking cannot lower your band",
              "Because the final third — and the explain line — belongs to the end of the clock, and stopping early hands it back",
              "Because silence is scored as an error",
            ],
            correctIndex: 1,
            explanation: "The long turn runs one to two minutes, and its highest-value line lives at the close: candidates who stop at one minute surrender the very material this course teaches you to protect.",
            from: "Speaking at length",
          },
          {
            question: "What belongs in the third corner of the four-corner note?",
            options: [
              "The explain line's reasons",
              "A bank of expandable details — fragments you can grow into sentences when the clock demands it",
              "The examiner's likely follow-up questions",
            ],
            correctIndex: 1,
            explanation: "Corner three is the pantry: allies, objects and absurd specifics that any beat can draw on, which is why delay talks keep their vending machines there.",
            from: "Effective note-taking",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Why does this lesson insist you state the plan and its arithmetic before telling the disruption?",
        hints: ["How would a listener know that seven hours is a disaster rather than a schedule?"]
        ,
        options: [
          { id: "a", text: "Because the examiner awards marks for mentioning distances in kilometres." },
          { id: "b", text: "Because the plan is the yardstick: 'six hours expected' is what makes 'twenty-two hours actual' measurable and the story legible." },
          { id: "c", text: "Because the plan fills time safely while you think of the interesting part." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because the plan is the yardstick: 'six hours expected' is what makes 'twenty-two hours actual' measurable and the story legible.",
          "Delay is a ratio, not a fact: without the tidy version of the night — distance, departure, breakfast at the end — the chaos has nothing to be measured against and the drama never registers.",
          "(a) invents a rule about units; (c) treats the plan as filler when it is the load-bearing sentence of the whole talk.",
        ),
        tags: ["speaking", "cue-cards", "travel"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's holiday talk and answer the question.",
        hints: ["Count how many of her sentences were about the journey itself."]
        ,
        passageTitle: "The wrong card",
        passage:
          "Zofia drew the delay card and produced a polished two minutes on her island holiday: the hotel's two pools, the breakfast buffet, the octopus restaurant, the fish she saw snorkelling, the price of the boat trip. In the final stretch she remembered the card and added: 'Unfortunately the return flight was cancelled and the airline was terrible, they gave us nothing, so I was very angry.' Her practice partner looked at the card, then at her notes, and said: 'Everything you described is what the delay stopped you from getting home from. Where were you going, what happened on the way, and what did you do?'",
        question: "What was the fundamental error in Zofia's talk?",
        options: [
          { id: "a", text: "She had answered a holiday-review card instead of a journey-delay card, giving the trip's sights the airtime the journey needed." },
          { id: "b", text: "Her anger about the airline made her grammar collapse." },
          { id: "c", text: "She should not have mentioned the airline at all." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "She had answered a holiday-review card instead of a journey-delay card, giving the trip's sights the airtime the journey needed.",
          "The card asks where you were going, what happened en route and how you coped — pools and buffets serve none of those prompts, and the actual delay received twenty seconds of verdict instead of two minutes of story.",
          "(b) blames emotion for a structural failure the passage never suggests; (c) overcorrects — the airline can be named once, as part of what happened, before the talk moves to coping.",
        ),
        tags: ["speaking", "cue-cards", "travel", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in one sentence, using the lesson's beat names in order.",
        question: "Name the four beats this lesson teaches for a delay story.",
        acceptedAnswers: [
          "plan, disruption, coping, arrival — in that order",
          "the plan, then the disruption, then the coping, then the arrival",
          "plan (with its arithmetic), disruption (with its estimates), coping (with allies), arrival (with layered feelings)",
          "plan, disruption, coping and finally the arrival feelings",
        ],
        keywords: ["plan", "arrival"],
        hints: [],
        feedback: fb(
          "Plan, disruption, coping, arrival — in that order, with the final beat protected for the explain line.",
          "The four beats mirror the card's prompts while giving the story a shape: order established, order broken, character shown, character resolved — and the arrival owns the last third.",
          "Answers that end on coping have stopped one beat short, abandoning the explain line that carries the family's strongest marks.",
        ),
        tags: ["speaking", "cue-cards", "travel"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Your flight was cancelled, you missed a family dinner, and you were genuinely furious. How should the anger be handled in the talk?",
        hints: [],
        options: [
          { id: "a", text: "Let it run — a full minute of complaint proves the delay was serious." },
          { id: "b", text: "Name the feeling once, honestly, then move to coping: the card asks what you did and how you felt on arrival, not how badly the company behaved." },
          { id: "c", text: "Hide it completely and pretend the night was enjoyable from the start." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Name the feeling once, honestly, then move to coping: the card asks what you did and how you felt on arrival, not how badly the company behaved.",
          "One honest sentence of anger gives the story its temperature; a catalogue of grievances fills the coping prompt's airtime with material that develops nothing and shows no character.",
          "(a) mistakes volume for content — complaint is the one thing this family scores at zero; (c) discards honest emotion that would have added a layer to the arrival.",
        ),
        tags: ["speaking", "cue-cards", "travel"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on the sunnier twin of this card — spoken, timed, layered.",
        hints: ["Route, duration, what you did on the way, and what the journey gave you."]
        ,
        situation:
          "A related travel card: 'Describe a long journey you enjoyed.' Prepare for up to one minute, then speak for one to two minutes, ending on what the journey itself — not the destination — gave you.",
        targetPhrases: [
          "The journey I actually miss was…",
          "It took…, which sounds like a waste, but…",
          "What the hours themselves gave me was…",
        ],
        mustSay: ["journey", "long", "because"],
        feedback: fb(
          "A one-to-two-minute talk naming the route and duration, filling the middle with on-board detail, and closing on the journey's own gift.",
          "Enjoyment cards invert the delay structure: the plan still opens, but the 'disruption' beat becomes observation — what you saw, read, or were told — and the arrival closes on what the time itself was worth.",
        ),
        tags: ["speaking", "cue-cards", "travel", "long-turn"],
      }),
    ],
    assignment: {
      title: "A second delay, planned and landed",
      instructions:
        "Choose another journey that overstayed its schedule — the smaller and sillier the cause, the better the material — and write 40 to 160 words: first, your four-corner note as fragments (plan arithmetic, estimate gap, ally-ration-surrender, layered arrival); second, the exact sentence you would use to close the talk, naming at least two feelings and one unexpected gain.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Write down the three most absurd specifics you can remember from your delay — objects, announcements, food — and check that at least one of them has a place in your talk.",
      "Record the talk and listen only for the arrival: if the recording ends while you are still at the halt, your disruption beat has stolen the explain line's time.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-card-learning",
    title: "Cue card family: Learning experiences",
    description:
      "One complete original Learning-experiences card — a skill you learned outside school or work — taught through the learning journey arc from first attempt to present feeling, with the author's one-minute note, learner vocabulary, a two-minute sample talk, its analysis, alternative angles and follow-up practice.",
    objectives: [
      "scope a self-taught skill precisely, separating what you can now do from what you could do before",
      "narrate a learning route through its helper, resource, ritual and record",
      "prove difficulty with one physical obstacle, then close in the present tense on a feeling with its reason",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Learning-experiences cards ask for a journey with a visible route: the skill named and scoped, the helper and the resources credited, one honest difficulty, and a feeling about it all now, in the present tense. Candidates usually own several self-taught skills and reach for the most impressive, when the talkable choice is the one with the messiest middle. This lesson carries one complete learning card about a summer spent in a small motorbike garage, shows the preparation minute exactly as it was scribbled, and demonstrates a close that measures feeling with evidence rather than pride. The sample wears its estimate label and teaches architecture only — recited word for word, it becomes the one thing no criterion rewards: a borrowed education.",
        beforeYouStart: [
          "You can narrate a past learning process in the past simple and switch deliberately to the present tense for feelings.",
          "You can name one specific moment when your skill nearly defeated you, with its size, its sound or its date.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking, Part 2 — the long turn, learned this time through a self-taught-skill card"],
          ["Task & question types", "A self-teaching prompt with what, how and difficulty prompts plus an explain line about present feelings; one minute to note, up to two to speak"],
          ["What is assessed", "Precise naming of an informal skill, narration of a self-directed route, vocabulary of effort and progress, and a present-tense reflection with reasons"],
          ["Why this matters", "Part 3 returns to how adults learn, so the journey you narrate here doubles as evidence for those abstract discussions"],
        ],
      },
      { type: "heading", text: "What a learning card is really asking" },
      {
        type: "text",
        text: "The three prompts trace a route, not a list. 'What the skill is' wants a precise name plus a sentence of scope — what you can do now that you could not do before — because a skill described loosely cannot be believed and cannot be developed. 'How you learned it' wants the route's stations: the relative who showed you, the videos at midnight, the Sunday ritual, the notebook of failures. 'What was difficult' is the prompt candidates dread and examiners value most, because difficulty is the proof that learning happened at all. The extension then shifts tense on purpose — how you feel about it now, not how proud you were then — and the strongest candidates treat that shift as the talk's destination rather than its afterthought.",
      },
      { type: "heading", text: "Difficulty done properly, and the present-tense close" },
      {
        type: "text",
        text: "A difficulty beat earns its place by being physical. The screw the size of a rice grain, the chord that refused to sound, the afternoon you nearly sold the bike: an obstacle with a size and a sound can be pictured, and what can be pictured can be scored. 'It was quite hard' is a verdict; a named obstacle is a scene, and scenes are the currency of every strong long turn. The close then asks for a present feeling, and feelings convince when they travel with luggage — a reason, plus one visible change the skill has worked in you, such as a calmer attitude to being a beginner. One honest feeling with its cause outperforms a parade of proud adjectives every single time.",
      },
      {
        type: "steps",
        title: "The learning journey, in four stops",
        intro: "Scope, route, obstacle, feeling.",
        steps: [
          {
            title: "Stop 1: Name the skill with its scope",
            text: "Give the skill its proper name and one sentence of boundaries — what you can do now that you could not do before. Scope proves the skill is real; a bare noun only proves you know the noun.",
            examples: [
              {
                english: "Not 'computers' but 'I can build a working website from an empty file, without help'.",
                note: "The skill scoped as a capability: the bare noun replaced by something a listener could test.",
                domain: "study",
              },
            ],
          },
          {
            title: "Stop 2: Give the route its stations",
            text: "Credit the people and materials that taught you — the uncle with the spanner, the videos, the library book — and give the learning a rhythm, one repeated occasion. Rhythms are easy to narrate, pleasant to hear, and impossible to fake.",
            examples: [
              {
                english: "The retired carpenter next door showed me one joint each Saturday, and my notebook of dovetails got steadily less wobbly.",
                note: "Helper, ritual and record inside a single sentence — the stations a how prompt needs, told as a scene.",
                domain: "life",
              },
            ],
          },
          {
            title: "Stop 3: Let one obstacle carry the difficulty",
            text: "Choose a single obstacle you can describe physically — a size, a sound, a moment of near-surrender — and say what it demanded of you. The strongest difficulty beats end with the principle the obstacle taught.",
            examples: [
              {
                english: "Putting your face in the water sounds trivial until you watch your own hands trembling on the pool edge.",
                note: "Fear given a body part and a location: the listener is stood inside the obstacle rather than told about it.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Stop 4: Arrive in the present tense",
            text: "Answer 'how you feel about it now' with a named feeling, the reason behind it, and one line of change — what you do differently because of the skill. Then stop inside that feeling, before modesty or boasting can dilute it.",
            examples: [
              {
                english: "Now, when a lamp dies, I don't sigh and shop — I unscrew the plug and look, and the looking is the part I love.",
                note: "The present-tense close with its change built in: a new instinct described as an action.",
                domain: "work",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "The card on the desk" },
      {
        type: "table",
        title: "The complete cue card — Learning",
        headers: ["Line", "What the card prints"],
        rows: [
          ["Situation line", "The examiner slides a learning card across the desk; your sixty seconds of thinking time begins now."],
          ["Task line", "Describe a skill you learned outside school or work"],
          ["Prompt 1", "what the skill is"],
          ["Prompt 2", "how you learned it"],
          ["Prompt 3", "what was difficult"],
          ["Explain line", "…and explain how you feel about it now"],
        ],
      },
      {
        type: "table",
        title: "The author's one-minute note, corner by corner",
        headers: ["Corner", "Fragments actually written", "Why this corner holds this"],
        rows: [
          ["Corner one — the subject", "motorbike maintenance + fault-finding · 20-yr-old commuter, bought for almost nothing · uncle's garage", "The skill with its scope and its home — the first prompt answered before the talk begins."],
          ["Corner two — the anchor", "Sundays in the garage · uncle: one spanner, one job · weeknight videos · greasy failure notebook", "The route's four stations — helper, resource, ritual, record — pre-loaded as fragments."],
          ["Corner three — the detail bank", "rice-grain screws, ruined two · respect for the electrics · wheel refitted backwards — uncle caught it", "Three obstacles of rising seriousness, so the talk can choose its difficulty live."],
          ["Corner four — the reason", "engine started under my palms → grinned for an hour · 'who can fix this?' → 'let's have a look' · helpless → curious", "The feeling with its reason and its change — the extension's cargo, noted last on purpose."],
        ],
      },
      {
        type: "table",
        title: "Vocabulary for the learning journey",
        headers: ["Item", "How to use it in this talk"],
        rows: [
          ["to pick up (a skill)", "The informal learner's verb, and the card's own territory: 'I picked the whole thing up outside any classroom'."],
          ["self-taught", "The family's honest label, best worn with credit attached: 'self-taught — though my uncle supervised'."],
          ["trial and error", "Summarise the method's mess without shame: 'most of it was trial and error, and I wrote the errors down'."],
          ["to get the hang of", "Mark the breakthrough: 'the carburettor took a whole summer to get the hang of'."],
          ["out of my comfort zone", "Frame difficulty as growth: 'every Sunday morning put me out of my comfort zone, and I got to like that'."],
          ["a steep learning curve", "Admit an unfinished climb: 'the electrics are a curve I'm still on'."],
          ["hands-on", "Contrast watching with doing: 'the videos explained it, but only hands-on work taught it'."],
          ["to break something down", "Describe a teacher's core method: 'he'd break each job into steps short enough to say in one breath'."],
          ["second nature", "Prove present mastery with a hedge: 'diagnosing a rattle has become second nature — mostly'."],
          ["a sense of achievement", "Reserve for the close, with a comparison attached: 'it has outlived every certificate I own'."],
        ],
      },
      {
        type: "example",
        title: "Six self-taught skills and the routes behind them",
        items: [
          {
            english: "I taught myself to knit from a library book, and my first scarf was a triangle with ambitions.",
            note: "The failed first attempt kept inside the sentence — beginner artefacts make a learning talk warm and believable.",
            domain: "life",
          },
          {
            english: "Corner three of my note: 'chess: sixty online losses · engine explained why · one opening learned deeply'.",
            note: "Progress written as losses — in self-taught stories, the losing counts are the tellable counts.",
            domain: "study",
          },
          {
            english: "The instructor called me her 'most determined floater', which I later understood was kindness for 'most terrified adult'.",
            note: "A borrowed quotation that carries both teacher and difficulty in one line — double value per word.",
            domain: "exam",
          },
          {
            english: "I learned to rewire a lamp, then a room, then my neighbour's kitchen — each job banked a little more courage for the next.",
            note: "The escalation structure: three noun phrases that let a listener climb the whole learning curve with you.",
            domain: "work",
          },
          {
            english: "A potter at the weekend market let me ruin her clay for a month, and my first bowl still leaks — it holds pencils now.",
            note: "The helper named and the imperfect artefact kept: a first bowl that fails usefully is better evidence than a perfect one.",
            domain: "life",
          },
          {
            english: "Six months of tutorials and one very patient forum taught me to bake bread that finally sounds hollow when tapped.",
            note: "The resource named precisely and the success given a test the listener can hear.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Where learning talks go wrong" },
      {
        type: "mistakes",
        title: "Learning-card traps corrected",
        items: [
          {
            wrong: "I spent the middle minute listing everything I can now do — oil changes, brake pads, chain adjustment — and never said how any of it was learned.",
            right: "Give the skill's scope a single sentence, then spend the recovered time on the route: who helped, what you learned from, when you practised, what you wrote down.",
            reason: "The how prompt asks for the learning, not the competence; a skills inventory answers a job interview, and a job interview is a different exam.",
          },
          {
            wrong: "For the difficulty prompt I said 'it was quite hard but I succeeded in the end', believing that struggle would make me sound weak.",
            right: "Name the obstacle physically — the stripped screw, the wheel refitted backwards, the hands trembling on the pool edge — and let the near-failure carry the drama.",
            reason: "Difficulty is the proof that learning happened, and proof is what the criterion scores; an obstacle described in detail is competence in disguise, never weakness on display.",
          },
          {
            wrong: "I closed with 'so now I feel very happy and proud about this skill', and the examiner's follow-up — why? — left me silent.",
            right: "Attach a reason and a change to the feeling: what the skill gives you, and what you do differently because of it.",
            reason: "The extension asks how you feel and, implicitly, why; a feeling without a cause lasts one sentence, while a feeling with its cause can carry the whole final third.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The learning card, end to end",
        reading: {
          text: "A learning talk runs on a four-stop arc — what, how, difficulty, now — and the stops are not equally sized. The what earns two sentences, the how the longest stretch, the difficulty half of what remains, and the present-tense feeling closes the talk. Two habits keep the family safe. First, credit your sources by name: the uncle, the instructor, the forum, the library book — self-taught does not mean taught by nobody, and named helpers make the method believable. Second, keep one artefact of your beginner self in the talk: the stripped screw, the triangle scarf, the sixty lost games. And heed the standing warning: memorised learning talks reach examiners often, and their tell is always the same — an internet-perfect route with no ruined part, no flat month and no notebook of failures. Speak your own garage, your own kitchen, your own swimming pool.",
          task: "Before the tasks below, write your skill's scope sentence — what you can do now that you could not do before — in twenty-five words or fewer.",
        },
        writing: {
          task: "Draft your own learning talk against this card using the guide's four openings, then study the model for its route and its present-tense close — and leave its sentences on the page, because a recited journey tells the examiner nothing about your speaking.",
          guide: [
            "Skill opener: 'The skill I'd pick is…, which means I can now…'",
            "Route opener: 'The way I learned it was…: a helper called…, plus…'",
            "Difficulty opener: 'The hardest part was…, and I nearly…'",
            "Feeling opener: 'These days I feel…, because it changed…'",
          ],
          model:
            "Band 8.0 estimate — an educational estimate, not an official score.\n\nI'd like to talk about learning to repair motorbikes — basic maintenance and fault-finding, the kind of thing most people pay a garage to do. It's a skill I picked up entirely outside classrooms and offices, and it started with a twenty-year-old commuter bike I'd bought for almost nothing.\n\nWhat the skill actually is: I can service a bike myself — oil, filters, chain tension, brake pads — and, more usefully, I can diagnose a strange noise. A rattle, a cough, a smell of petrol each mean something different, and I've slowly learned to read them.\n\nHow did I learn it? My uncle ran a tiny repair shop, and one summer he let me hang around — I say 'let me'; honestly, I refused to leave. He'd hand me a spanner and one job at a time: check these spark plugs, clean that carburettor. At home, most weeknights, I watched repair videos for half an hour, and I kept a greasy notebook of everything I got wrong. Then I'd go back the next Sunday and try again on my own bike.\n\nWhat was difficult? Two things. The patience — some jobs involve screws the size of rice grains, and I ruined two of them before accepting that force is usually the enemy. And the electrics, which I still approach with respect. My lowest moment was refitting a wheel the wrong way round; my uncle spotted it before I rode off, thankfully.\n\nAnd how do I feel about it now? Well, it changed how I see myself. There's a particular quiet confidence that comes from fixing something with your own hands — the first time an engine started under my palms, I grinned for an hour. These days, when something breaks, my first thought isn't 'who can fix this?' It's 'let's have a look.' That shift, from helpless to curious, is what that garage taught me.",
        },
        listening: {
          script:
            "Tutor: Your talk on learning to swim had everything — the instructor, the timetable, the first whole length. One prompt got four words.\nStudent: The difficult one. I said 'it was hard at first' and moved on.\nTutor: Why so brief?\nStudent: Because I didn't fail, really. I just turned up and slowly got better.\nTutor: Then say that properly. The fear of putting your face in the water, the Wednesday you swallowed half the pool, the moment you stood in the shallow end deciding whether to come back on Thursday. Difficulty isn't only disaster — dread is difficulty, boredom is difficulty, slowness is difficulty.\nStudent: So the prompt wants the cost, not the catastrophe?\nTutor: It wants the price you paid. Name the currency, and the talk doubles in weight.",
          task: "Note the three forms of difficulty the tutor lists, and the two nouns the student's closing question sets against each other.",
        },
        speaking: {
          task: "Run this card end to end for a skill of your own — practical, artistic or entirely private: one minute of notes, one to two recorded minutes, then the checklist, listening especially for a difficulty beat that tells a story instead of making a claim.",
          frames: [
            "The skill I'd talk about is…, which means I can now…",
            "The way I picked it up was…",
            "The hardest part was…, and I nearly…",
            "Looking back now, I feel…, because…",
          ],
          checklist: [
            "Did I scope the skill in one sentence instead of inventorying everything I can do?",
            "Does my how minute name a helper, a resource and a repeated occasion?",
            "Does the difficulty beat contain one obstacle I can describe physically?",
            "Did I close in the present tense, with the feeling, its reason and one change?",
          ],
        },
      },
      {
        type: "table",
        title: "Response analysis — the sample, move by move",
        headers: ["Move of the talk", "What the sample does there"],
        rows: [
          ["The opening", "Names the skill and its scope in the first breath — 'basic maintenance and fault-finding' — and places it outside classrooms before the card needs to ask."],
          ["The what", "Defines the skill as two capabilities, servicing and diagnosing, with diagnosis called the more useful half — a small early judgement that promises evaluation later."],
          ["The how", "A named helper, a resource, a ritual and a record — spanner jobs from the uncle, weeknight videos, the greasy notebook — told in the order they were used."],
          ["The difficulty", "Two obstacles ranked, patience before electrics, with the backwards wheel as the near-miss and the uncle's watchfulness as the quiet safety net."],
          ["The present-tense close", "The feeling given its cause — the first engine start — and its evidence, a changed first thought, ending on the shift from helpless to curious."],
          ["The spoken surface", "One visible self-correction ('I say let me — honestly, I refused to leave'), contractions kept natural, and a final sentence that lands on curiosity rather than pride."],
          ["The estimate label", "Carries the Band 8.0 estimate — an educational estimate, not an official score — a description of a demonstration, never a promise about the real test."],
        ],
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "What, how, difficulty, now — the learning journey arc in card order, with the how given the longest stretch and the feeling protected for the close."],
          ["Grammar", "Past simple for the garage summer, 'would' for the repeated Sunday jobs, and an audible switch into the present the moment the extension arrives."],
          ["Vocabulary", "A learner's own register — spanner, carburettor, fault-finding — carried by learning phrases: picked up, the hang of it, second nature."],
          ["Coherence", "The hands motif runs from the spanner handed over, through the engine started under the speaker's palms, to fixing things with your own hands."],
          ["Task fulfilment", "All three prompts receive dedicated material, the difficulty is proved rather than claimed, and the extension answers with feeling, reason and change at full depth."],
        ],
      },
      {
        type: "table",
        title: "Alternative approaches to the same card",
        headers: ["Angle", "What it changes"],
        rows: [
          ["Swimming learned as an adult", "Adds fear to the arc: the route runs through a patient instructor and a public timetable, and the difficulty becomes the body's panic rather than the task's complexity."],
          ["A new language learned through apps and a pen-friend", "Makes progress measurable: the route is a daily streak and a weekly letter, and the close lands on connection rather than competence."],
          ["Photography through a photo-a-week project", "Turns the ritual into the story: fifty-two small assignments become the how, and the hard part is learning to see, not learning to press."],
          ["Gardening learned from a grandmother", "Stretches the timescale across seasons: the difficulty is patience with a clock nobody controls, and the close becomes gratitude with soil under its nails."],
        ],
      },
      {
        type: "table",
        title: "Follow-up practice",
        headers: ["Item", "Your task"],
        rows: [
          ["Rounding-off question one", "'Can anyone learn a practical skill, or are some people simply better with their hands?' — take a view and support it with someone you have watched learn."],
          ["Rounding-off question two", "'Which teaches better — a patient relative or the internet?' — argue one side while conceding one point to the other."],
          ["Practice card A", "'Describe something you learned quickly' — full cycle; notice how the difficulty beat shrinks but never disappears."],
          ["Practice card B", "'Describe a skill that is useful in everyday life' — practise scope: one sentence of what you can do, then straight to the route."],
          ["Practice card C", "'Describe a time you taught something to someone else' — flip the roles and notice how the difficulty prompt becomes an explaining problem."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Choose the skill with the messiest middle rather than the most impressive one you own, then fill the corners: scope, helper-resource-ritual, one physical obstacle, feeling with its reason."],
          ["While the clock runs", "March the how through its stations — helper, resource, ritual, record — and when a station runs long, close it with a fragment and move to the next."],
          ["If you are stuck", "Return to the difficulty corner and describe the obstacle physically — its size, its sound, the day it beat you — because objects restart a stalled talk faster than opinions."],
          ["Final minutes", "Shift audibly into the present — 'and these days…' — deliver the feeling, its reason and the change it made, and stop inside that sentence."],
        ],
      },
      {
        type: "summary",
        points: [
          "A learning card wants the journey, not the competence: scope the skill in one sentence and give the route your longest minute.",
          "Credit your sources by name — the uncle, the app, the instructor, the forum — because self-taught never means taught by nobody.",
          "The difficulty prompt is this family's proof of learning: one obstacle with a size, a sound and a near-failure beats any quantity of 'quite hard'.",
          "The extension changes tense on purpose: answer in the present, naming the feeling, its cause and one change the skill has worked in you.",
          "Build the talk from your own garage, kitchen or swimming pool — borrowed learning journeys are common, detectable, and worthless once detected.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from the craft lessons that underpin this family.",
        items: [
          {
            question: "According to the note-taking lesson, what form should the fragments in your one-minute note take?",
            options: [
              "Short sentences, so they can be read aloud if nerves strike",
              "Fragments — noun phrases and arrows, never sentences — because a written sentence invites reciting rather than speaking",
              "Single vocabulary words with translations underneath",
            ],
            correctIndex: 1,
            explanation: "A note you cannot read as a script forces you to compose aloud, which is exactly the skill the long turn assesses; fragments also survive any reordering the talk demands.",
            from: "Effective note-taking",
          },
          {
            question: "Your learning talk finishes the how at fifty seconds, with difficulty and feeling still to come. What does the continuity lesson advise?",
            options: [
              "Repeat the best fragment of the how to buy thinking time",
              "Signpost the move aloud — something like 'right, the hard part' — and let the bridge carry you into the next corner",
              "Pause silently for two seconds to reset",
            ],
            correctIndex: 1,
            explanation: "A spoken signpost keeps the sound continuous while it reorganises the thought, and it buys the second you need to find the difficulty corner.",
            from: "Maintaining continuity",
          },
          {
            question: "All three prompts are answered and one minute remains. What does the lesson on speaking at length recommend?",
            options: [
              "Stop there — a complete set of prompts shows control of the clock",
              "Ask the examiner whether more is expected",
              "Keep going into the extension's material, because the present-tense feeling earns the final third and the examiner will stop you",
            ],
            correctIndex: 2,
            explanation: "A complete set of prompts is not a complete turn: the window runs towards two minutes, and this family's highest-value line — the feeling with its reason — lives at the end of the clock.",
            from: "Speaking at length",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. What does the 'what was difficult' prompt of a learning card actually want from you?",
        hints: [
          "Think of something you can describe physically — a size, a sound, a moment — rather than an adjective.",
        ],
        options: [
          { id: "a", text: "An admission that you are not very good at the skill, offered as a weakness." },
          { id: "b", text: "One specific, physical obstacle — its size, its sound, the day it beat you — together with the lesson it taught." },
          { id: "c", text: "A comparison proving your skill was harder to learn than other people's." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "One specific, physical obstacle — its size, its sound, the day it beat you — together with the lesson it taught.",
          "Difficulty is the proof that learning happened: a named obstacle gives the fluency criterion something to carry and the examiner a story that cannot be faked.",
          "(a) mistakes difficulty for failure, when the prompt wants obstacles overcome; (c) turns your talk into a contest the card never asked to judge.",
        ),
        tags: ["speaking", "cue-cards", "learning"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read about one candidate's learning talk and answer the question.",
        hints: [
          "Ask which printed prompts a list of finished products can actually serve.",
        ],
        passageTitle: "The showreel",
        passage:
          "Daniel's learning talk began well: 'I taught myself video editing from online tutorials.' Then, for a full minute, he listed outcomes — a friend's wedding film, a charity's advert, a montage that got three thousand views — each one named, dated and praised. His tutor stopped the recording and read the card aloud: what the skill is, how you learned it, what was difficult. Daniel could point to the first prompt instantly. For the second, he offered 'tutorials, like I said'. For the third, he thought for a while and answered, 'Nothing, really — it came naturally.'",
        question: "Which two prompts did Daniel's list of outcomes leave unfed?",
        options: [
          { id: "a", text: "The how and the difficulty — the route he took and the obstacles on it were replaced by a catalogue of finished products." },
          { id: "b", text: "The what and the explain line — he never named the skill or reported a feeling." },
          { id: "c", text: "Only the difficulty — the how was fully served by the tutorials." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The how and the difficulty — the route he took and the obstacles on it were replaced by a catalogue of finished products.",
          "Outcomes answer what you can do, not how you learned or what it cost: a learning talk's middle minute belongs to the route and its obstacles, and a product list fills neither.",
          "(b) misreads the opening, which names the skill in the first sentence; (c) accepts two words — 'tutorials, like I said' — as an answer, when a mention is not a method.",
        ),
        tags: ["speaking", "cue-cards", "learning", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Answer in a phrase, naming the stations in this lesson's terms.",
        question: "According to this lesson, which three ingredients should the how prompt name — and which fourth can follow if time allows?",
        acceptedAnswers: [
          "a helper, a resource and a ritual — plus the record of failures",
          "the helper, the resource and the ritual, with the record if time allows",
          "a named helper, a learning resource and a repeated ritual",
          "helper, resource, ritual — and the written record as the fourth",
        ],
        keywords: ["helper", "ritual"],
        hints: [],
        feedback: fb(
          "A named helper, a resource and a ritual — with the record of failures as the optional fourth.",
          "Naming the sources makes self-teaching believable: the helper gives the story warmth, the resource gives it credibility, and the ritual gives it a shape the clock can follow.",
          "Answers built around talent or hours spent describe the learning's speed rather than its route — and the how prompt asks for the route.",
        ),
        tags: ["speaking", "cue-cards", "learning"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Which closing best answers 'and explain how you feel about it now'?",
        hints: [],
        options: [
          { id: "a", text: "'I felt very proud when I finally finished learning it, and everyone said so.'" },
          { id: "b", text: "'These days I feel quietly confident, because the skill rewired my first instinct: when something breaks, I reach for tools instead of the phone.'" },
          { id: "c", text: "'I believe everyone should learn a skill outside school, because it builds character.'" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'These days I feel quietly confident, because the skill rewired my first instinct: when something breaks, I reach for tools instead of the phone.'",
          "The extension asks for a present feeling with its cause: a named emotion, the reason behind it and the change it produced give the examiner three scoreable things inside one sentence.",
          "(a) answers in the past tense about the finish line, ignoring the now the card prints; (c) drifts into preaching about people in general when the card asked about exactly one person's feelings.",
        ),
        tags: ["speaking", "cue-cards", "learning"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. A mini long turn on a card from the same family — spoken, timed, with the arc intact.",
        hints: [
          "Scope, route, one physical obstacle, and a present-tense feeling with its reason.",
        ],
        situation:
          "A related learning card: 'Describe a skill you learned from a friend or family member.' Prepare for up to one minute, then speak for one to two minutes, ending on how learning it changed the relationship as well as you.",
        targetPhrases: [
          "The skill I owe to one person is…",
          "The way it worked was…",
          "What nearly defeated me was…",
          "Nowadays, when I use it, I think of…",
        ],
        mustSay: ["learned", "because", "now"],
        feedback: fb(
          "A one-to-two-minute talk naming the skill with its scope, the person and method behind it, one specific obstacle, and a present-tense feeling tied to the relationship.",
          "Relationship cards add a second thread to the arc: the strongest answers braid the skill's growth and the friendship's growth together, so the final feeling belongs to both at once.",
        ),
        tags: ["speaking", "cue-cards", "learning", "long-turn"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Another mini long turn, this time facing forward — spoken, timed, self-assessed.",
        hints: [],
        situation:
          "A future-facing cousin of this card: 'Describe a skill you would like to learn in the future.' Prepare for up to one minute, then speak for one to two minutes, ending on how you imagine the skill will change your everyday life.",
        targetPhrases: [
          "The skill at the top of my list is…",
          "My route into it would be…",
          "I expect the hard part to be…",
          "Once I can do it, I imagine…",
        ],
        mustSay: ["skill", "future", "because"],
        feedback: fb(
          "A one-to-two-minute talk naming a wanted skill, a realistic route, an expected difficulty, and an imagined future feeling with its reason.",
          "Future cards flip the arc's tenses — intention replaces history, and the difficulty prompt becomes a prediction — but the route still needs its stations, now spoken in future forms.",
        ),
        tags: ["speaking", "cue-cards", "learning", "long-turn"],
      }),
    ],
    assignment: {
      title: "A second skill, scoped and felt",
      instructions:
        "Choose a different skill you taught yourself — the messier its middle, the better its material — and write 40 to 160 words: first, your four-corner note as fragments (skill with its scope, helper-resource-ritual, one physical obstacle, feeling with reason and change); second, the exact sentence you would use for the extension, in the present tense, with the feeling, its cause and the change it has made.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "List the three worst moments of your learning journey — the ruined part, the flat month, the session you nearly quit — and check that at least one has a place in your talk; a learning story with no worst moment is an advert, and adverts are not conversations.",
      "Teach the first step of your skill to somebody in under two minutes, then note what explaining it revealed; most people only discover the shape of their own learning when they try to hand it over.",
    ],
  },
];
