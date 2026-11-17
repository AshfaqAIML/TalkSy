/**
 * Chapter 3A — Part 2, the cue-card craft (Part A).
 *
 * The first four lessons of the Speaking Masterclass cue-card chapter: the
 * anatomy of the card, the deliverables hidden in its bullets, the
 * second-by-second budget for the preparation minute, and the four-corner
 * note that survives contact with two minutes of speech. Every card quoted
 * is original practice material written in the shape of the test — never
 * reproduced exam content — and every band reference reads as an estimate.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingPart2CraftLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-cue-cards",
    title: "Understanding cue cards",
    description:
      "The cue card laid open: what the task line, the situation, the three 'You should say' prompts and the 'and explain' extension each demand, where the scoring weight sits, and how the minute-then-two-minutes clock frames the whole turn.",
    objectives: [
      "label the five working parts of any cue card within ten seconds of receiving it",
      "explain why the final 'and explain' line asks for evaluation rather than more story",
      "describe the timing pattern of Part 2 and what follows the moment your talk ends",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Part 2 hands you a small card, a pencil and sixty seconds of silence — and then expects a talk. Candidates who treat the card as a title improvise; candidates who treat it as a script sound recited; candidates who treat it as a map walk confidently across two minutes of speech. This lesson opens the card up layer by layer, shows where the scoring weight sits, and sets the timing frame around the whole turn, so that every later cue-card skill in this chapter builds on a shared anatomy.",
        beforeYouStart: [
          "You can describe the three-part shape of the Speaking test and its eleven-to-fourteen-minute span from the foundations unit.",
          "You know the names of the four criteria and that they carry equal weight.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2, the individual long turn, the same task on Academic and General Training"],
          ["Task & question types", "A description card: one task line, three 'You should say' prompts and a closing 'and explain' extension"],
          ["What is assessed", "Speaking at length on a set subject, organising the material live and covering what the card asks for"],
          ["Why this matters", "How you read the card in its first ten seconds decides what your two minutes will contain"],
        ],
      },
      { type: "heading", text: "Component 1 — The card, opened up" },
      {
        type: "text",
        text: "A Part 2 card is a single short printed paragraph with four distinct layers, and each layer does different work. The task line — 'Describe a meal you cooked for someone' — carries two loads at once: the verb that names the genre (describe) and the situation that bounds it (a meal, cooked by you, for someone who is not you). Below it sit three prompts introduced by 'You should say': what you cooked and who you ate with; how you prepared it; how it turned out. And beneath the prompts waits the extension, introduced by 'and explain': why you remember this meal. Read that way, the card is not a topic at all but a small brief — a client's request, with deliverables attached.",
      },
      { type: "heading", text: "Component 2 — Which line carries the marks" },
      {
        type: "text",
        text: "The examiner holds your card and listens with it in view. The three prompts function as a coverage checklist: material that touches each one is easy to credit, and a prompt left untouched leaves a gap the listener can see. But the extension is where the criteria concentrate. 'And explain why you remember this meal' cannot be answered with more narration — it demands evaluation: significance, feeling, comparison, consequence. A talk that narrates fluently and never evaluates is a talk performing at half its ceiling; the upper-band behaviours — stance, reflection, summed-up judgement — live in that last line (band talk throughout this course reads as an estimate, never a forecast). Learn to see the extension as the card's centre of gravity.",
      },
      {
        type: "steps",
        title: "Reading the card in layers — four passes",
        intro: "Each pass answers one question about the card, and together the four passes take a practised reader about ten seconds.",
        steps: [
          {
            title: "Pass one — read the task line for the family and the situation",
            text: "Ask two questions of the task line: which of the description families is this (person, place, object, event, activity), and what situation does it fix? The family tells your memory which shelf to open; the situation tells you which memories qualify. Ten seconds, done once, never re-litigated mid-talk.",
            examples: [
              {
                english: "Task line 'Describe a time you got lost' — family: event; situation: lost, once, by me; the shelf labelled 'navigational disasters' opens by itself.",
                note: "The family question saves you from grabbing a story that does not fit the situation.",
              },
            ],
          },
          {
            title: "Pass two — read the prompts as a job list",
            text: "Each 'You should say' line is one deliverable. Count them — there are almost always three — and let the count set your coverage ambition. A talk that answers two of three prompts reads as incomplete in exactly the way a letter answering two of three bullets reads as incomplete.",
            examples: [
              {
                english: "Prompts 'where you were going / how you lost your way / how you found the right road' — three jobs: the destination, the wrong turn, the recovery.",
                note: "Saying the jobs in your own words is the first act of paraphrase.",
              },
            ],
          },
          {
            title: "Pass three — read the extension twice",
            text: "The final line deserves a second reading because its verb changes the job: 'explain why', 'explain how you felt', 'explain what it means'. Whatever the wording, the demand is evaluative — reasons, feelings, significance — and it cannot be satisfied by stretching the story further. Mark it mentally as the summit of the talk rather than its afterthought.",
            examples: [
              {
                english: "'…and explain how you felt about the experience' — the card stops asking what happened and starts asking what it was like.",
                note: "The verb after 'explain' names the currency: reasons, feelings or meaning.",
              },
            ],
          },
          {
            title: "Pass four — turn the card into a map",
            text: "The last pass converts reading into planning: the task line becomes your opening, the prompts become your route, and the extension becomes your destination. Nothing on the card demands to be answered in printed order — a map can be walked flexibly — but every printed job needs a place somewhere on the walk.",
            examples: [
              {
                english: "The lost-walk map: open by naming the city and the errand, tell the wrong-turn sequence, close on what the detour taught me about asking for help.",
                note: "Order is yours to choose; coverage is not.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — The clock around the card" },
      {
        type: "text",
        text: "Part 2 runs to a fixed rhythm worth knowing in your bones before test day. The examiner hands over the card, a pencil and paper, and gives you one minute of preparation timed in silence. When the minute ends you are asked to begin, and you speak for between one and two minutes; if your talk runs to the ceiling, the examiner will stop you gently — being stopped is a small success, not a fault. If you dry up well before the floor, you may hear an invitation to say a little more, and most rounds close with one or two short rounding-off questions tied to the same subject. The whole test is recorded, which protects you: any scoring can be reviewed afterwards from the tape.",
      },
      {
        type: "table",
        title: "The card's parts and the job each does",
        headers: ["Part of the card", "The job it gives you"],
        rows: [
          ["Task line", "Names the genre and fixes the situation — your first filter for choosing material"],
          ["The three 'You should say' prompts", "Act as a coverage checklist the examiner holds while you speak"],
          ["The 'and explain' extension", "Demands evaluation — significance, feeling or consequence, never further events"],
          ["The card's silence about order", "Prints no sequence at all — the running order belongs to you, the coverage belongs to the card"],
        ],
      },
      {
        type: "example",
        title: "Five cards, read in ten seconds each",
        items: [
          {
            english: "Card 'Describe a meal you cooked for someone' — family: event; situation: my kitchen, my effort, one guest; extension currency: why it stuck in memory.",
            note: "One line of reading, three planning decisions already made.",
            domain: "exam",
          },
          {
            english: "Card 'Describe an app you use almost every day' — family: object; situation: daily use; its three prompts convert to jobs: what it does, when it entered my life, how it helps.",
            note: "Objects need habit stories; the prompts hand you one.",
            domain: "exam",
          },
          {
            english: "Card 'Describe a time you got lost' read in ten seconds: destination job, wrong-turn job, recovery job, feeling job — four jobs, two minutes, one map.",
            note: "The count of jobs is the coverage target.",
            domain: "exam",
          },
          {
            english: "A student tapes five practice cards above a desk and labels each one's layers in coloured ink: task line in blue, prompts in green, extension in red.",
            note: "Colour-coding trains the eye to find the layers fast.",
            domain: "study",
          },
          {
            english: "A project brief from a manager reads 'walk me through the delay — what happened, what you tried, and what it cost us' — the same three-prompt-plus-evaluation shape as any card.",
            note: "Workplace briefs share the card's anatomy.",
            domain: "work",
          },
          {
            english: "A friend asks about your weekend trip and you answer with what happened, then how it felt — narration first, evaluation after, the card's own order reversed quite naturally.",
            note: "Everyday storytelling already uses both layers.",
            domain: "life",
          },
          {
            english: "Card 'Describe a photograph that means a lot to you' — the prompts ask what it shows and when it was taken, but the extension asks why it matters, and that is where description becomes meaning.",
            note: "The extension is the difference between a list and a talk.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Card-reading mistakes corrected",
        items: [
          {
            wrong: "The card is a title, so I just talk about the general subject in any way I like.",
            right: "Read the card as a brief: its prompts are deliverables and its extension is a required verdict, not an optional extra.",
            reason: "General-topic talk can cover none of the printed jobs, and the listener holding the card notices every gap.",
          },
          {
            wrong: "The last line is just one more prompt, so I treat it the same as the others.",
            right: "Give the final line its own treatment: it asks you to explain a why, a feeling or a meaning, which narration alone never supplies.",
            reason: "Evaluation is the behaviour the strongest performances share, and it lives almost entirely in that closing line.",
          },
          {
            wrong: "I must follow the card's printed order, prompt by prompt, or I lose credit.",
            right: "Choose your own running order as long as every printed job is done somewhere inside the two minutes.",
            reason: "The card prescribes coverage, not sequence; a flexible order sounds natural while a forced one sounds recited.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One card, read the way an examiner reads it",
        reading: {
          text: "Practice card in the style of the test: 'Describe a time you got lost. You should say: where you were going; how you lost your way; how you found the right road again; and explain how you felt about the whole experience.' Beside it, a candidate has written: 'OK — story about the city, the wrong bus, then the kind stranger. Feelings at the end. Don't forget the stranger.'",
          task: "Name the four layers of this card and check the candidate's margin note against them.",
        },
        writing: {
          task: "Take the card above and write a four-line job list — one line per prompt plus one for the extension — each line phrased as a question your talk must answer.",
          guide: [
            "Line one turns 'where you were going' into: which journey, and why was I making it that day?",
            "Line two turns 'how you lost your way' into: what exactly went wrong, and at which moment?",
            "Line three turns the recovery prompt into: who or what put me back on course, and how long did the rescue take?",
            "Line four turns the extension into: what did being lost feel like while it lasted, and what lingers now?",
          ],
          model: "Job list: Where was I heading, and why did that journey matter that day? At which point did the route fall apart, and what exactly did I get wrong? What — or who — set me right again, and how long did the rescue take? Finally, what did being lost feel like while it lasted, and how do I feel about it looking back?",
        },
        listening: {
          script: "Tutor: Read the card once, then tell me the jobs. Student: Um — describe getting lost. Tutor: That's the task line. Now the jobs. Student: Where I was going, how I got lost, how I found the road. Tutor: Three. And? Student: And explain how I felt. Tutor: That one is different — the others want events; that one wants you to step back and weigh the experience. Give it real room near the end, because that's where your best language shows itself.",
          task: "Which job does the tutor say is different, and what does he say it wants instead of events?",
        },
        speaking: {
          task: "Describe to a partner, in under a minute, the anatomy of any card — using one original example card of your own.",
          frames: [
            "Every card opens with a task line that…",
            "The prompts underneath work as…",
            "The final line asks for evaluation, which means…",
            "So before I plan anything, I count…",
          ],
          checklist: [
            "Did I name all four layers?",
            "Did I say what makes the extension different?",
            "Did I give one concrete example card of my own?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The four-line job list converts the card's prose into a sequence the talk can walk, with the evaluation given its own closing space."],
          ["Grammar", "Phrasing jobs as questions forces varied structures — 'what went wrong', 'how long the rescue took' — that seed the tenses the talk will need."],
          ["Vocabulary", "Paraphrasing each prompt in the candidate's own words rehearses the synonyms that keep the talk from echoing the card back at the examiner."],
          ["Coherence", "The list ends on the feeling job, so the speaker arrives at the extension deliberately instead of tumbling into it when the story runs dry."],
          ["Task fulfilment", "One line per prompt plus one for the extension makes coverage visible and checkable before a single sentence is spoken."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read every practice card in layers for a week — family, jobs, extension verb — until the four passes take ten seconds together."],
          ["While the clock runs", "Keep the job count alive in your head: if a job has had no airtime by the halfway point, steer the next sentence towards it."],
          ["If you are stuck", "Return to the card's layers in order: the situation may supply a detail, the prompts a next event, the extension a safe reflection."],
          ["Final minutes", "Reserve your closing stretch for the extension's verdict — the last thing the examiner hears should be evaluation, not events."],
        ],
      },
      {
        type: "summary",
        points: [
          "A cue card has four layers: a task line carrying genre and situation, three prompts as deliverables, an extension demanding evaluation, and silence about order — the route is yours.",
          "The prompts are a coverage checklist the examiner holds; the extension is the card's centre of gravity, where reflective language earns its keep.",
          "Part 2's clock runs: one silent minute of preparation, then between one and two minutes of speech, a gentle stop at the ceiling, and possibly brief rounding-off questions after.",
          "Being stopped at the ceiling is a small success; drying up well inside the floor is the outcome the preparation minute exists to prevent.",
          "Read cards in layers — family, jobs, extension verb — until the whole read takes ten seconds; everything later in this chapter builds on that read.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "How long does the whole Speaking test run from first question to last?",
            options: ["Seven to ten minutes", "Eleven to fourteen minutes", "Fifteen to twenty minutes"],
            correctIndex: 1,
            explanation: "The interview, the long turn and the discussion together occupy eleven to fourteen recorded minutes with a certified examiner.",
            from: "The Speaking examination format",
          },
          {
            question: "How do the four criteria combine into your Speaking band?",
            options: ["Pronunciation dominates the other three", "They count equally and average into the band", "Fluency is double-weighted, like Writing Task 2"],
            correctIndex: 1,
            explanation: "Each criterion contributes an equal share, which is why a strong card read cannot rescue a weak delivery, or the reverse.",
            from: "What the examiner assesses",
          },
          {
            question: "Why does a recited-sounding stretch of answer alarm an examiner?",
            options: [
              "Recited language is usually too grammatical to trust",
              "It suggests prepared text rather than live speech, which the fluency criterion is designed to detect",
              "Examiners are trained to prefer quiet candidates",
            ],
            correctIndex: 1,
            explanation: "The criterion rewards speech produced on the spot, and lifted or scripted stretches stand out against the surrounding live language.",
            from: "Avoiding memorised responses",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt:
          "Guided practice. Look at this card: 'Describe a photograph that means a lot to you. You should say: what it shows; when and where it was taken; why you keep it; and explain the feelings it brings back.' Which part asks for evaluation rather than description?",
        hints: ["Which line contains the word 'explain'?"],
        options: [
          { id: "a", text: "The 'what it shows' prompt." },
          { id: "b", text: "The 'when and where it was taken' prompt." },
          { id: "c", text: "The final line about the feelings it brings back." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "The final line about the feelings it brings back.",
          "The 'and explain' extension moves the job from reporting facts about the picture to weighing its emotional meaning, which description alone cannot deliver — evaluation is what that line exists to collect.",
          "(a) and (b) are description jobs: they can be answered with what and when, needing no stance or feeling at all.",
        ),
        tags: ["speaking", "part2", "cue-cards", "extension"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the scene and find the reading failure.",
        hints: ["Check whether the candidate ever answers the card's last line."],
        passageTitle: "The fluent gap",
        passage:
          "Practice card in the style of the test: 'Describe a meal you cooked for someone. You should say: what you cooked and who you ate with; how you prepared it; how it turned out; and explain why this meal was memorable for you.' Dana talks for a hundred seconds: she names the dish (a lentil stew), the guest (her homesick flatmate), the recipe's origin (her grandmother's notebook) and the evening it was eaten. Her sentences are accurate and well linked. The examiner's note reads: 'Full coverage of prompts — extension never attempted.'",
        question: "What did Dana's talk miss, and what kind of content would have fixed it?",
        options: [
          { id: "a", text: "She missed the third prompt; a sentence on how the stew tasted would have fixed it." },
          { id: "b", text: "She missed the extension; a reflective close on why the evening mattered would have fixed it." },
          { id: "c", text: "She missed the situation; naming her own city at the start would have fixed it." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "She missed the extension; a reflective close on why the evening mattered would have fixed it.",
          "All three prompts were covered through dish, guest and recipe, but the memorable-why verdict never arrived — the one job that asks the speaker to step out of the story and weigh it, and the cheapest place to show reflective language.",
          "(a) misreads the note, since taste belongs to the third prompt she did cover; (c) invents a requirement the card never sets.",
        ),
        tags: ["speaking", "part2", "cue-cards", "coverage"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory — no hints this time.",
        question: "In Part 2, how long do you prepare, and how long may you speak?",
        acceptedAnswers: [
          "one minute to prepare and between one and two minutes to speak",
          "you get one minute of preparation and speak for up to two minutes",
          "a minute of prep, then a talk of one to two minutes",
          "sixty seconds to prepare and one to two minutes for the talk",
        ],
        keywords: ["one", "two"],
        hints: [],
        feedback: fb(
          "One minute of preparation, then a talk of between one and two minutes.",
          "The silent minute is timed by the examiner, and the speaking window has a floor of a minute and a ceiling of two; hitting the ceiling and being stopped is the healthy outcome.",
          "Answers promising three or four minutes of speech have confused the long turn with Part 3's discussion phase.",
        ),
        tags: ["speaking", "part2", "timing"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Your talk reaches the two-minute mark and the examiner interrupts gently. What does that interruption mean?",
        hints: [],
        options: [
          { id: "a", text: "You have broken a timing rule and the fluency score suffers." },
          { id: "b", text: "You have used the available window fully — the stop is routine, not a penalty." },
          { id: "c", text: "You must now summarise your whole talk in one final sentence." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "You have used the available window fully — the stop is routine, not a penalty.",
          "The ceiling exists so that strong talks have a boundary; reaching it means the speaker filled the window, which the fluency criterion reads as a strength rather than a fault.",
          "(a) reverses the meaning of the stop; (c) describes no rule the test contains — no closing summary is ever demanded.",
        ),
        tags: ["speaking", "part2", "timing", "ceiling"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Read a card aloud, then explain its anatomy in speech.",
        hints: [],
        situation:
          "Take any practice card from this lesson — the meal, the photograph or the lost walk — and speak for about forty seconds: name its four layers, and say which layer carries the most marks and why.",
        targetPhrases: [
          "the task line fixes the situation",
          "the prompts work as a checklist",
          "the extension asks for evaluation",
        ],
        mustSay: ["task line", "prompts", "explain"],
        feedback: fb(
          "A forty-second anatomy talk naming the task line, the three prompts and the 'and explain' extension as the marks-bearing layer.",
          "Saying the anatomy aloud fixes it faster than rereading it; the layer names become the working vocabulary of every later cue-card lesson, from note-taking to organising.",
        ),
        tags: ["speaking", "part2", "anatomy"],
      }),
    ],
    assignment: {
      title: "Card anatomy log",
      instructions:
        "Find three practice cue cards from any source you trust, or invent three of your own in the style of this lesson. For each one, write the four layers in your notebook — task line and its family, the three prompts as jobs, the extension with its verb named, and your chosen running order — then add one sentence saying which layer you expect to find hardest and why.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Time yourself reading ten unseen practice cards in layers; note how many you can fully decode within ten seconds and reread any that took longer.",
      "Rewrite the prompts of one card as four questions in your own words, then put the card away and answer your four questions from memory in a one-minute spoken draft.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-cue-requirements",
    title: "Identifying the key requirements",
    description:
      "Reading the card for its deliverables: each bullet is a job, the extension demands a verdict rather than more events, content words carry the work while function words are glue, and complete coverage is a counted, checkable thing.",
    objectives: [
      "convert every 'You should say' bullet into a question your talk must visibly answer",
      "separate content words from function words when reading a card under time pressure",
      "define complete coverage as a counted target and check a talk against it",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "A cue card does not ask for a topic; it issues a work order. Three bullets, one extension, each a separate job the examiner can tick or leave unticked — and the difference between a talk that 'mentions things around the subject' and one that completes its brief is the difference examiners hear first. This lesson installs the conversion routine — bullet to question, question to content, content to count — so that coverage stops being luck and becomes arithmetic you can check while you speak.",
        beforeYouStart: [
          "You can label the four layers of a cue card from the previous lesson.",
          "You can name the kind of demand the extension line always makes.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2, both test variants, the long turn on a description card"],
          ["Task & question types", "Cards whose three bullets quietly hide two or three requirements apiece, plus the evaluative closing line"],
          ["What is assessed", "Coverage of the set brief, and the examiner's sense that every printed requirement was met deliberately"],
          ["Why this matters", "A talk can be fluent and still read as half-finished when a bullet's job is never done"],
        ],
      },
      { type: "heading", text: "Component 1 — Each bullet is a job" },
      {
        type: "text",
        text: "Read 'You should say: what you cooked and who you ate with' as one line doing two jobs: name the dish, name the diner. Bullets double up like this all the time — 'when and where it was taken' wants a time and a place — and the reader who notices the doubling holds more deliverables on the checklist than the reader who sees one line of print. The habit to install is conversion: turn every bullet into question form, and count the questions, not the lines. 'Why you keep it' becomes what the picture stands for; a two-word bullet is still a job, and jobs are what get ticked.",
      },
      { type: "heading", text: "Component 2 — The extension demands a verdict" },
      {
        type: "text",
        text: "The closing line never asks what happened next; it asks what it all amounted to. 'Explain why this meal was memorable', 'explain the feelings it brings back', 'explain what this person means to you' — every version points away from events and towards weight: reasons, emotions, meaning, consequence. Narration answers 'then what?'; evaluation answers 'so what?'. A talk that ends on the last event has told a story; a talk that ends on a verdict has answered the card. The verdict is also where the best language lives — stance words, intensity, comparison and consequence are evaluation currency, and the examiner hears that currency almost exclusively in the extension's airtime.",
      },
      {
        type: "steps",
        title: "From printed card to counted checklist",
        intro: "Four small operations, run in order, turn any card into a list you can hold in your head while you speak.",
        steps: [
          {
            title: "Step 1: Underline the content words in every bullet",
            text: "Content words — nouns, main verbs, adjectives, question words — carry a bullet's job. In 'how you prepared it', the content is prepared and the implied dish; everything else is packaging. Underlining trains the eye to find the work inside the wording and hands your preparation notes their raw material.",
            examples: [
              {
                english: "Bullet 'what you cooked and who you ate with' underlined on cooked, who, with — two jobs surface: the dish itself, and the person at the table.",
                note: "The underline exposes the bullet as two deliverables wearing one line.",
              },
            ],
          },
          {
            title: "Step 2: Turn each underlined job into a question",
            text: "A job in question form is easier to answer and easier to check: 'how it turned out' becomes did it work, and how did I know? Questions also compress into single words on your notes, which is exactly what the preparation minute wants from you.",
            examples: [
              {
                english: "'How you found the right road again' becomes: who or what rescued me, and what did I feel at that exact moment?",
                note: "Two questions from one bullet — count them both.",
              },
            ],
          },
          {
            title: "Step 3: Tag the extension's currency",
            text: "Read the verb after 'and explain': why asks for reasons, how you felt asks for emotion then and perhaps now, what it means asks for significance. Write the currency as one word — why, feeling, meaning — because that word is the instruction your closing minute must obey.",
            examples: [
              {
                english: "'…and explain how you felt about the whole experience' tagged: feeling — so the close must carry emotion words, not more itinerary.",
                note: "The tag prevents the classic error of answering a feeling line with extra facts.",
              },
            ],
          },
          {
            title: "Step 4: Count the jobs and carry the number",
            text: "Add your questions: three bullets usually yield four or five, plus the extension. That number is your definition of complete — a talk is done when every question has had its answer somewhere, not when the story feels finished. Say the number to yourself at the end of the preparation minute; it is the cheapest quality control the turn possesses.",
            examples: [
              {
                english: "The lost-walk card counted: destination, reason for the journey, the wrong turn, the rescue, the feeling — five questions, one verdict, target set.",
                note: "The count travels from card to checklist to talk.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Function words are glue; don't note them" },
      {
        type: "text",
        text: "Function words — articles, prepositions, conjunctions, auxiliaries — hold sentences together but carry none of the card's work. They matter enormously in your spoken grammar and not at all in your preparation notes. The practical consequence: when the minute starts and the pencil moves, only content words earn their place on the paper. 'How you prepared it' notes down as prepped + grandmother's recipe, never as the full clause. This is also the first lesson in paraphrase: notes built from content words cannot echo the card's wording, so your talk cannot either — and language produced in your own shapes is exactly what the memorisation-watchers want to hear.",
      },
      {
        type: "table",
        title: "Narration and evaluation, side by side",
        headers: ["What the listener hears", "Narration supplies", "Evaluation supplies"],
        rows: [
          ["'Then I added the spices and stirred for ten minutes.'", "The next event, in order", "Nothing — this is pure sequence"],
          ["'Honestly, I panicked when the sauce split.'", "An event with a reaction attached", "A first step: feeling named in the moment"],
          ["'Looking back, that evening taught me I cook better when someone's waiting.'", "No new events at all", "The verdict — change, meaning, why it stayed"],
        ],
      },
      {
        type: "example",
        title: "Bullets becoming questions — seven conversions",
        items: [
          {
            english: "Card 'Describe an app you use almost every day': bullet 'what the app does' converts to the job name it and its core function in one breath — 'a dictionary that listens' beats a feature list.",
            note: "One-breath naming is itself a lexical skill worth drilling.",
            domain: "exam",
          },
          {
            english: "Same app card, bullet 'how it helps you' converts to the job give one concrete moment of help — 'checking a word mid-conversation without breaking eye contact'.",
            note: "Concrete beats abstract on every bullet of every card.",
            domain: "exam",
          },
          {
            english: "Card 'Describe a photograph that means a lot to you': bullet 'why you keep it' converts to what the picture stands for — the person, the period, the promise — and gets tagged as a meaning job.",
            note: "'Why' bullets are small extensions hiding in the middle of the card.",
            domain: "exam",
          },
          {
            english: "A student writes WHO / WHEN / WHAT HAPPENED / SO WHAT across the top of a practice card and fills each column with two words — the whole card converted inside half a minute.",
            note: "A fixed conversion grid speeds the whole routine up.",
            domain: "study",
          },
          {
            english: "A team leader's status update runs 'what shipped, what slipped, what it means for Friday' — three bullets and an evaluation, the card's own shape in workplace clothing.",
            note: "Briefings and cue cards share one skeleton.",
            domain: "work",
          },
          {
            english: "Recommending a restaurant to a friend: what to order, when to go, why it suits them — three jobs and a verdict, delivered in ninety seconds without any notes at all.",
            note: "Everyday advice runs the same conversion routine.",
            domain: "life",
          },
          {
            english: "Card 'Describe a decision you found hard to make' counted out: the choice itself, the difficulty, the influences, the outcome, the meaning — five jobs, so the talk is planned to reach all five rather than to fill time.",
            note: "The count turns 'enough' into a number.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Requirement-reading mistakes corrected",
        items: [
          {
            wrong: "If my story is strong and interesting, the examiner won't mind a missing bullet.",
            right: "Treat every bullet as a scored deliverable: a missing job reads as incomplete coverage however entertaining the surrounding material.",
            reason: "The card is the brief, and the listener ticks jobs done, not impressions made.",
          },
          {
            wrong: "The 'and explain' line is where I add one more nice detail about the topic.",
            right: "Reserve the extension for a verdict — a reason, a feeling or a significance — and let the story stop when the story ends.",
            reason: "Extra detail answers 'then what' again; the extension asks 'so what', and only evaluation answers it.",
          },
          {
            wrong: "My notes should copy the card's exact wording so I remember what to cover.",
            right: "Note content words only, in your own words, and rebuild the grammar live when you speak.",
            reason: "Copied wording drags the card's sentences into your talk, which sounds lifted and starves your language of its own shapes.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Converting a card under the clock",
        reading: {
          text: "Practice card in the style of the test: 'Describe an app you use almost every day. You should say: what the app does; when you first started using it; how it helps you; and explain what you would do without it.' A candidate's margin notes read: 'translator app — metro in Lisbon, 2019 — menus, signs, one awkward pharmacy moment — without it: braver but slower.'",
          task: "Check each margin note against the card's four jobs, and say which job the notes cover most thinly.",
        },
        writing: {
          task: "Choose any card from this lesson and write its full conversion: the underlined content words per bullet, the question form of each job, the extension's tag, and the final count.",
          guide: [
            "Bullet one's content words were…",
            "In question form, that job becomes…",
            "The extension verb is 'explain', and its currency here is…",
            "My count for the whole card is… questions plus one verdict.",
          ],
          model: "Conversion of the app card: what-the-app-does becomes 'name it and its core function' (content words: app, does); when-started becomes 'the origin moment' (started, using); how-it-helps becomes 'one concrete rescue' (helps); extension tagged 'without it' — hypothesis currency, imagining absence rather than recalling events. Count: three content jobs, one origin job, one imagined verdict — five deliverables in all.",
        },
        listening: {
          script: "Tutor: Convert this bullet: 'when you first started using it'. Student: When I got the app? Tutor: Closer — it wants an origin story: the moment, the reason, maybe who showed you. Student: So a scene, not a date. Tutor: Exactly. And 'what you would do without it'? Student: I'd say I miss it? Tutor: Try the opposite — imagine the absence and describe the difference. That is the extension doing future-and-hypothesis work while the rest of the card does memory work.",
          task: "What two different kinds of work does the tutor say this one card contains?",
        },
        speaking: {
          task: "Take a practice card and talk for sixty seconds through your conversion only — no story yet: each job as a question, then your one-word answer to each.",
          frames: [
            "The first job, in question form, is…",
            "The second bullet really asks…",
            "The extension's currency is…, so my close will…",
            "That gives me a count of… deliverables.",
          ],
          checklist: [
            "Did every bullet reach question form?",
            "Did I tag the extension's currency?",
            "Did I state the final count out loud?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The conversion ends with a count, and a counted brief is the only kind a speaker can verify against mid-talk when nerves blur the memory of the card."],
          ["Grammar", "Question-form jobs preview the structures the talk needs — when-questions seed past simple, 'what would you do' seeds conditionals — so grammar is chosen before it is needed."],
          ["Vocabulary", "Underlining content words isolates exactly the lexical field the talk must operate in, from cooking verbs to navigation nouns, giving revision a target."],
          ["Coherence", "A verdict tagged in advance guarantees the talk's final movement is evaluative, closing the arc the bullets opened."],
          ["Task fulfilment", "Every printed requirement becomes a visible, countable question, and the talk's completeness becomes checkable by the speaker in real time."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Practise the conversion on five cards a day until underlining, questioning, tagging and counting run as one movement."],
          ["While the clock runs", "Hold your question count in mind and give each question airtime; a question still unanswered at ninety seconds claims the next sentence."],
          ["If you are stuck", "Recite your own converted questions in your head — the unanswered one is almost always the way forward."],
          ["Final minutes", "Spend the last stretch on the tagged verdict; ending on evaluation signals a completed brief rather than an abandoned one."],
        ],
      },
      {
        type: "summary",
        points: [
          "Every bullet is a job, and bullets that double up — 'what and who', 'when and where' — hide two jobs in one line; convert, then count questions rather than lines.",
          "The extension always wants a verdict: reasons, feelings or meaning; it can never be satisfied by more events.",
          "Content words carry the job; function words are grammatical glue, and only content words belong on your preparation paper.",
          "Complete coverage is a number — your counted questions plus the verdict — and the talk is done when the number is reached, not when the story feels over.",
          "Notes built in your own words make lifted wording impossible, which protects against the recited-sound penalty better than any disguise.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "Which layer of a cue card asks you to step outside the story and weigh it?",
            options: ["The task line", "The 'and explain' extension", "The first 'You should say' prompt"],
            correctIndex: 1,
            explanation: "The extension's verbs — why, how you felt, what it means — all demand evaluation, which narration by definition cannot supply.",
            from: "Understanding cue cards",
          },
          {
            question: "Which criterion most directly rewards spoken language produced on the spot rather than recited?",
            options: ["Fluency and Coherence", "Lexical Resource", "Pronunciation"],
            correctIndex: 0,
            explanation: "The fluency criterion listens for live speech behaviours — self-correction, natural pausing, connected responses — that prepared text tends to flatten.",
            from: "Avoiding memorised responses",
          },
          {
            question: "When your long turn finishes, what may the examiner do before moving on?",
            options: [
              "Ask one or two short rounding-off questions on the same subject",
              "Immediately begin Part 3's abstract discussion",
              "Ask you to repeat the talk faster",
            ],
            correctIndex: 0,
            explanation: "A brief rounding exchange commonly closes Part 2, answered in a sentence or two before the discussion phase opens.",
            from: "The Speaking examination format",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. The bullet 'when and where it was taken' is really how many jobs?",
        hints: ["Look for the 'and' — each side of it usually works separately."],
        options: [
          { id: "a", text: "One job, about time only." },
          { id: "b", text: "Two jobs: a time and a place." },
          { id: "c", text: "Three jobs: a time, a place and a photographer." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Two jobs: a time and a place.",
          "Bullets joined by 'and' almost always split into separate deliverables, and the coverage count must include both halves or the checklist runs short.",
          "(a) takes half the bullet; (c) adds a requirement the wording never sets.",
        ),
        tags: ["speaking", "part2", "requirements", "bullets"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Audit this candidate's coverage.",
        hints: ["Convert the card to questions first, then tick them off against the report."],
        passageTitle: "The coverage audit",
        passage:
          "Practice card in the style of the test: 'Describe a photograph that means a lot to you. You should say: what it shows; when and where it was taken; why you keep it; and explain the feelings it brings back.' Leo's talk, summarised: forty seconds on the picture's contents (a harbour at dawn, his father's fishing boat, a gull caught mid-frame), thirty seconds on the morning it was taken and the village where it happened, and a closing line: 'So yes — I keep it on my desk, and I look at it when work gets heavy.' The examiner's note reads: 'Three and a half of four.'",
        question: "Which job did Leo only half-finish?",
        options: [
          { id: "a", text: "The 'what it shows' job, because the gull was irrelevant." },
          { id: "b", text: "The 'why you keep it' job, because he never said what the picture stands for." },
          { id: "c", text: "The extension, because he mentioned the desk but no feelings." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The 'why you keep it' job, because he never said what the picture stands for.",
          "Naming where the picture sits is not a reason; the why-bullet wants meaning — the father, the boat, the working mornings it represents — and without it the audit finds half a tick where a full one was owed.",
          "(a) judges relevance, which the card never asks for; (c) is too harsh — 'when work gets heavy' gestures at feeling, and the extension was at least attempted.",
        ),
        tags: ["speaking", "part2", "requirements", "audit"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory.",
        hints: [],
        question: "Which two short questions does this lesson use to capture what the bullets and the extension each demand?",
        acceptedAnswers: [
          "then what and so what",
          "'then what' for the story and 'so what' for the verdict",
          "then what — narration; so what — evaluation",
          "the story question then what and the verdict question so what",
        ],
        keywords: ["then", "what"],
        feedback: fb(
          "'Then what?' for the bullets' narration, and 'so what?' for the extension's verdict.",
          "The bullets advance events — then what — while the extension demands the meaning those events add up to — so what; holding both questions in mind keeps a talk from ending before its verdict.",
          "Answers describing only sequence or only judgement have kept half the card's demand.",
        ),
        tags: ["speaking", "part2", "requirements", "evaluation"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why are function words left off the preparation notes?",
        hints: [],
        options: [
          { id: "a", text: "Because they are too hard to abbreviate under time pressure." },
          { id: "b", text: "Because they carry grammatical glue rather than the card's jobs, and jobs are what notes exist for." },
          { id: "c", text: "Because examiners penalise any card wording appearing in your notes." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because they carry grammatical glue rather than the card's jobs, and jobs are what notes exist for.",
          "Notes exist to store jobs and material, and jobs live in the content words; the glue rebuilds itself naturally in spoken grammar every time you open your mouth.",
          "(a) is false, since glue is easy to shorten — merely useless; (c) invents a penalty, because nothing forbids copying, it simply wastes the minute and dulls the talk.",
        ),
        tags: ["speaking", "part2", "requirements", "content-words"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Convert a card aloud.",
        hints: [],
        situation:
          "Take the card 'Describe a decision you found hard to make' and speak for about fifty seconds: convert each bullet into a question, tag the extension's currency, and finish by stating your deliverable count.",
        targetPhrases: [
          "the real question this bullet asks is",
          "the extension wants a verdict",
          "so my count comes to",
        ],
        mustSay: ["bullet", "explain", "count"],
        feedback: fb(
          "A fifty-second conversion that turns bullets into questions, tags the explain-line's currency and closes with a stated count.",
          "Speaking the routine aloud converts it from a page habit into a speaking habit, and the count stated at the end becomes your self-check inside the real turn.",
        ),
        tags: ["speaking", "part2", "conversion"],
      }),
    ],
    assignment: {
      title: "The conversion drill",
      instructions:
        "Take two practice cards of your own choosing. For each, submit the full conversion: content words underlined per bullet, every job in question form, the extension's currency tag, the deliverable count, and one sentence explaining where in your two minutes each deliverable will get its airtime.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Convert one new card each day for a week, timing the conversion: the target is a complete job list, tag and count inside thirty seconds.",
      "Listen back to any recorded practice talk and audit it against that card's converted questions, marking each question answered, half-answered or untouched.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-prep-minute",
    title: "The one-minute preparation",
    description:
      "A second-by-second budget for the sixty seconds between card and speech: read for deliverables, choose the material, note it in fragments, fix the doorway and the destination, and keep the nervous system out of the red zone.",
    objectives: [
      "spend the preparation minute to a planned budget instead of watching it evaporate",
      "choose usable material quickly and commit to it without hunting for perfection",
      "settle the body's alarm response inside the minute so the talk starts calm",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Sixty seconds sounds generous until you spend one inside the room: the card is new, the pencil is strange, and the silence has a texture. Unbudgeted, the minute evaporates into re-reading and quiet panic; budgeted, it becomes the most productive minute of the whole test. This lesson divides the minute into five spending blocks — read, choose, note, order, settle — and treats nerves as a scheduling problem with a physical solution, so that the talk begins from a settled base rather than a racing one.",
        beforeYouStart: [
          "You can convert a card's bullets into counted deliverables.",
          "You know the minute ends with the examiner inviting you to begin speaking.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2, the silent preparation minute that opens the long turn"],
          ["Task & question types", "Any description card; the minute itself is identical whatever the topic on the paper"],
          ["What is assessed", "Nothing directly — but every criterion is fed by what the minute produces in material, order and calm"],
          ["Why this matters", "The quality of the following two minutes is largely decided in the sixty seconds before the first word"],
        ],
      },
      { type: "heading", text: "Component 1 — What the minute is for, and what it is against" },
      {
        type: "text",
        text: "The minute has three productive jobs: choose your material, fix a rough order, and bring your body down from alarm. It has one great enemy: the sentence. Candidates who spend it drafting polished sentences manage perhaps three of them, read those aloud when the talk begins, and sound like a person reading — flat pace, recited rhythm, no eye contact. The minute is a planning instrument, not a drafting one. Its proper output is a handful of fragments that trigger your own memory plus a settled breath; its output should never be prose, however tempting the empty paper looks.",
      },
      { type: "heading", text: "Component 2 — The sixty-second budget" },
      {
        type: "steps",
        title: "Five spending blocks for one minute",
        intro: "The budget assigns every second a task; learn the blocks until the handovers between them become automatic.",
        steps: [
          {
            title: "Seconds 0–10: read the card twice for deliverables",
            text: "First read: layers, as practised — task line, prompts, extension verb. Second read: conversion to the question list, in your head. Two readings are enough; a third eats the choosing time that follows, and a sixth signals panic rather than thoroughness.",
            examples: [
              {
                english: "The decision card read twice by second ten: the choice, the difficulty, the influences, the outcome, the meaning — five jobs held in mind.",
                note: "Reading ends the moment the jobs are named.",
              },
            ],
          },
          {
            title: "Seconds 10–25: choose your material and commit",
            text: "Pick the memory that answers the most jobs at once and commit — no auditioning three candidates, no hunting the perfect story. A modest true story you know well beats an exotic one you half-remember, because detail lives in the well-known story, and detail is what fills two minutes.",
            examples: [
              {
                english: "Choosing on the decision card: the city-versus-hometown job offer — modest, recent, rich in people and feelings; committed by second twenty-five.",
                note: "Good enough and vivid beats perfect and vague every time.",
              },
            ],
          },
          {
            title: "Seconds 25–45: note the fragments",
            text: "Twenty seconds of writing, fragments only, spread across the note layout you own — the four-corner format arrives in the next lesson, but whatever layout you use, nouns and verb stems rather than clauses. Ten to fifteen words in total is a realistic and sufficient haul.",
            examples: [
              {
                english: "Notes by second forty-five: 'offer → two cities / father's kitchen talk / spreadsheet nights / relief + doubt'.",
                note: "Four fragments, a dozen words, a whole talk compressed.",
              },
            ],
          },
          {
            title: "Seconds 45–55: fix the doorway and the destination",
            text: "Two decisions close the planning: the doorway — the actual first sentence you will say, chosen but never written — and the destination — the idea your extension will deliver. With an entrance and an exit fixed, the middle largely drives itself, and the fear of starting loses its grip.",
            examples: [
              {
                english: "Doorway chosen: 'I'd say the hardest decision I've made was leaving our family business.' Destination chosen: the trade-off between security and growth.",
                note: "Entrance and exit are the two fixed points of the turn.",
              },
            ],
          },
          {
            title: "Seconds 55–60: settle the machine",
            text: "Look up from the paper. One slow exhale, longer than the inhale before it. Unclench the jaw, drop the shoulders. The examiner will invite you to begin; meeting that invitation with a settled body is the last act of the preparation minute, and it is a trained act, not a temperament.",
            examples: [
              {
                english: "The final five seconds spent on one long out-breath and a glance at the doorway line — the talk starts on the exhale.",
                note: "The long exhale is the cheapest calm that exists.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Three ways the minute goes wrong" },
      {
        type: "text",
        text: "Watch a hundred preparation minutes and three failure patterns account for most of them. The re-reader circulates the card again and again, notes nothing, and begins from a blank page plus adrenaline. The scripter writes connected prose, runs out of seconds mid-sentence, and opens the talk by reading, which flattens intonation and invites the recited-sound judgement. The perfectionist spends the whole minute auditioning memories — the wedding, the exam, the move — commits to none of them firmly, and begins on whichever one the opening second happened to land on. Each failure is a spending error, and the budget exists to prevent all three at once.",
      },
      {
        type: "table",
        title: "Three spenders of the same minute",
        headers: ["Spender", "What the sixty seconds hold", "How the talk opens"],
        rows: [
          ["The re-reader", "Six passes over the card, a blank note page, a rising pulse", "Hesitant and generic, improving only in the final thirty seconds"],
          ["The scripter", "Three drafted sentences, smudged, half a thought unspent", "Read-aloud rhythm, lifted phrasing, panic when the script runs dry"],
          ["The planner", "Jobs named, one story committed, ten fragments, a doorway", "On the exhale, at the doorway, with a map held in the memory"],
        ],
      },
      { type: "heading", text: "Component 4 — Nerves are a schedule item" },
      {
        type: "text",
        text: "The minute is not only cognitive; it is physiological. Adrenaline narrows attention, speeds the heart, and biases the mind towards escape — which is why unbudgeted minutes end in blankness. Treat settling as a scheduled task with seconds attached, not a hope. The long exhale engages the body's braking system; naming the jobs converts vague dread into a finite list; and committing to one story removes the open loop that feeds the alarm. Most candidates who rehearse the budget a few times discover the minute starts feeling short — the surest sign that it is being spent well.",
      },
      {
        type: "example",
        title: "Sixty seconds, spent and mis-spent",
        items: [
          {
            english: "Weather-spoiled-plans card, minute spent to budget: read (jobs: the plan, the weather, the alternative, the aftermath), choose (the beach day that flooded), note ('beach day → clouds at noon / bus home / board games / laughing now'), settle.",
            note: "Every budget phase visible in the outcome.",
            domain: "exam",
          },
          {
            english: "Long-wait card, a re-reader's minute: the card circled five times, the notes empty; the talk opens 'So… waiting… I think the airport?' and only finds its shape at the ninety-second mark.",
            note: "No choosing means no material, and the talk pays the minute's debt.",
            domain: "exam",
          },
          {
            english: "Public-speaking card, a scripter's minute: two polished sentences about the school assembly; they are read out word for word, then the speaker stalls with forty seconds still to fill.",
            note: "Prose notes create a cliff-edge, not a route.",
            domain: "exam",
          },
          {
            english: "A student rehearses the budget with a kitchen timer five evenings running — first a friendly card, then a strange one; by the fifth run, the choosing phase takes ten seconds flat.",
            note: "The budget speeds up with practice; that is its whole point.",
            domain: "study",
          },
          {
            english: "A nurse gets sixty seconds before handing over a shift summary: she reads the notes once, picks the three events that matter, jots four words, breathes — the same budget, worn with scrubs.",
            note: "High-stakes briefings run on identical minutes.",
            domain: "work",
          },
          {
            english: "Before a difficult phone call, a person spends one minute the planned way — reread the purpose, choose the opening line, note two fallback phrases, exhale — then dials.",
            note: "The budget generalises far beyond the test.",
            domain: "life",
          },
          {
            english: "Decision card, a perfectionist's minute: three memories auditioned, none committed; the talk begins on the third one only because it was the last one thought of, and its details are the thinnest.",
            note: "Auditioning steals commitment and detail together.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Preparation-minute mistakes corrected",
        items: [
          {
            wrong: "I'll use the minute to draft my first two sentences properly, so the start is safe.",
            right: "Choose a doorway sentence in your head and spend the saved seconds on material for the middle and the end.",
            reason: "Drafted openings get read aloud, which flattens delivery, and a safe start cannot rescue an unprepared body of talk.",
          },
          {
            wrong: "The perfect story is worth waiting for, so I'll keep searching until the examiner speaks.",
            right: "Commit by the halfway mark to the most vivid story you know well, and spend the rest of the minute equipping it.",
            reason: "Perfection-hunting leaves nothing committed, and committed detail — not story quality — is what carries the two minutes.",
          },
          {
            wrong: "Nerves are a personality; there's nothing to do about them in one minute.",
            right: "Schedule the final seconds for a long exhale, a lifted gaze and a named job list — alarm falls when the task becomes finite.",
            reason: "The minute is long enough to settle the body if settling is planned rather than hoped for.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One minute, run to budget",
        reading: {
          text: "A candidate's stopwatch log of her own preparation minute on the card 'Describe a long wait you once experienced': 0–14 seconds, read the card three times; 14–40 seconds, sat thinking about which wait to use; 40–58 seconds, wrote one full sentence — 'I want to talk about the time I waited seven hours at a border crossing'; 58–60 seconds, no settling. Her talk opened on the written sentence, read aloud, and dried up twice in the first half-minute.",
          task: "Diagnose the log against the budget: name every phase that was skipped or overrun.",
        },
        writing: {
          task: "Write your own budget sheet for the long-wait card: what happens at 0–10, 10–25, 25–45, 45–55 and 55–60, each phase in one sentence, ending with the exact doorway sentence you would speak.",
          guide: [
            "Seconds 0–10: I read for…",
            "Seconds 10–25: I commit to the wait involving…",
            "Seconds 25–45: my fragments will read…",
            "My doorway sentence, spoken and never written, is…",
          ],
          model: "Budget sheet: 0–10, read twice and name the jobs — the wait, the reason, the filling, the feeling; 10–25, commit to the seven-hour border wait, recent, uncomfortable, rich in small scenes; 25–45, note four fragments — 'border, 7 hrs / queue friendships / cold coffee / arrival at 3 a.m.'; 45–55, fix the doorway — 'The longest wait of my life happened at a border crossing in the rain' — and the destination, what waiting taught me about patience; 55–60, one long exhale, look up, start on the out-breath.",
        },
        listening: {
          script: "Coach: Your minute is going to the re-reader. What happened at second ten? Candidate: I was still reading. Coach: Second reading, fine — then the card goes face down. Candidate: Face down? Coach: The jobs are named by then; the card has nothing more to give. Face down, choose your wait, and get four fragments on the paper by second forty-five. The last five seconds belong to your breathing, not your pencil.",
          task: "What does the coach say happens to the card once the jobs are named, and what claims the final seconds?",
        },
        speaking: {
          task: "Run the budget aloud on a new card while a partner holds a watch, narrating each phase as you enter it: 'reading… choosing… noting… doorway… settling.'",
          frames: [
            "First ten seconds: I'm reading for…",
            "Halfway through: I'm committing to…",
            "Final five: my breath goes…, and my doorway is…",
            "With the doorway fixed, the talk will open…",
          ],
          checklist: [
            "Did each phase start on schedule?",
            "Did the pencil produce fragments rather than sentences?",
            "Did the minute end with an exhale and a lifted head?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The budget gives every second a task, so the minute ends with material, an order and an opening — the three things an unplanned minute never yields together."],
          ["Grammar", "Fragments noted in your own words force live grammar at talk time, producing range and self-repair instead of read-aloud monotony."],
          ["Vocabulary", "Choosing early leaves seconds to reach for precise nouns while noting — 'border crossing', 'queue friendships' — rather than generic fillers."],
          ["Coherence", "A doorway and a destination fix the talk's two ends, and the middle is spoken towards a known target instead of into the void."],
          ["Task fulfilment", "The deliverables named in the first ten seconds become the note fragments of the middle twenty, aligning the plan with the card's brief."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rehearse the budget with a timer on five different cards until the phases change hands smoothly at ten, twenty-five, forty-five and fifty-five seconds."],
          ["While the clock runs", "Trust the phase you are in: read while reading, commit while choosing, write while noting — switching backwards doubles the cost of every phase."],
          ["If you are stuck", "If choosing stalls past halfway, commit instantly to the first story that answered two jobs; a firm ordinary story outranks a hunted extraordinary one."],
          ["Final minutes", "Guard the last five seconds for the exhale; starting the talk on a long out-breath sets a pace the whole two minutes inherit."],
        ],
      },
      {
        type: "summary",
        points: [
          "The minute has a budget: read for deliverables (0–10), choose and commit (10–25), note fragments (25–45), fix the doorway and destination (45–55), settle the body (55–60).",
          "The minute's enemy is prose: drafted sentences get read aloud, sound recited, and starve the middle of material.",
          "Commit early to a well-known, vivid story; perfection-hunting costs commitment and detail, the two currencies the talk spends.",
          "A doorway sentence and a destination idea fix the talk's two ends; the middle largely drives itself between them.",
          "Nerves are scheduled, not endured: the long exhale in the final seconds starts the talk from the body's braking system rather than its alarm.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "What does the examiner hand you at the start of Part 2, alongside the card?",
            options: ["A dictionary and a glass of water", "A pencil and paper for the preparation minute", "A microphone to hold"],
            correctIndex: 1,
            explanation: "The long turn begins with the card plus something to write with and on, all returned when the part ends.",
            from: "The Speaking examination format",
          },
          {
            question: "Why does a read-aloud opening work against the speaker?",
            options: [
              "It is too quiet for the recording",
              "It sounds like prepared text rather than live speech, which the fluency criterion is built to catch",
              "It wastes the examiner's question",
            ],
            correctIndex: 1,
            explanation: "Spoken-then-read prose loses the natural rhythm of improvised speech and stands out against everything around it — exactly what the fluency descriptors listen for.",
            from: "Avoiding memorised responses",
          },
          {
            question: "What should the first ten seconds of the minute produce?",
            options: ["A full first sentence", "The card's jobs, named and counted", "Three possible stories"],
            correctIndex: 1,
            explanation: "The reading phase ends when the deliverables are held in mind; everything after that builds on the named job list.",
            from: "Identifying the key requirements",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. According to the budget, what are seconds 25–45 for?",
        hints: ["The pencil's phase — but what is allowed on the paper?"],
        options: [
          { id: "a", text: "Drafting two polished sentences." },
          { id: "b", text: "Writing ten to fifteen words of fragments that trigger memory." },
          { id: "c", text: "Re-reading the card a third time." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Writing ten to fifteen words of fragments that trigger memory.",
          "The noting phase is the pencil's only window, and fragments — nouns and verb stems in your own shorthand — compress a whole talk into a glanceable map that live grammar then expands.",
          "(a) hands the talk over to reading; (c) returns to a finished job and burns the pencil's window.",
        ),
        tags: ["speaking", "part2", "prep-minute", "budget"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the log and find the spending errors.",
        hints: ["Check the log against the five phases and their second marks."],
        passageTitle: "The stopwatch log",
        passage:
          "Marco's log of his minute on the card 'Describe a time when the weather spoiled your plans': 0–8 seconds, two readings, jobs named; 8–35 seconds, auditioned three memories — a picnic, a hike, an outdoor wedding; 35–50 seconds, chose the wedding but changed his mind twice; 50–60 seconds, wrote 'weather + wedding' and started talking immediately on the last word written.",
        question: "Which phases did Marco overrun, and what did the talk lose as a result?",
        options: [
          { id: "a", text: "He overran choosing; the talk lost its doorway sentence and all settling time." },
          { id: "b", text: "He overran noting; the talk lost all its fragments." },
          { id: "c", text: "He spent too long settling; the talk opened too calmly." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "He overran choosing; the talk lost its doorway sentence and all settling time.",
          "Choosing stretched across twenty-seven seconds and swallowed the doorway and settling phases entirely, so the talk opened from a two-word note plus adrenaline — the exact opening the budget exists to prevent.",
          "(b) misreads the arithmetic, since noting got ten seconds rather than zero; (c) invents a fault, because no settling happened at all.",
        ),
        tags: ["speaking", "part2", "prep-minute", "diagnosis"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory.",
        hints: [],
        question: "What are the last five seconds of the preparation minute for, and why that activity?",
        acceptedAnswers: [
          "settling: a long exhale and a lifted gaze, because the exhale calms the body and the talk starts on it",
          "one slow out-breath and looking up, because the long exhale engages the body's braking system",
          "calming down with a long breath out, as it lowers the heart rate before speaking",
          "settling the nerves with a slow exhale so the first words come out calm",
        ],
        keywords: ["breath", "calm"],
        feedback: fb(
          "A long, slow exhale with the gaze lifted, so that the talk begins on the out-breath.",
          "The extended exhale is the body's built-in brake, and beginning speech on it sets a steadier pace than any amount of mental instruction can manage at second sixty.",
          "Answers proposing more reading or more writing spend the calming window on already-finished business.",
        ),
        tags: ["speaking", "part2", "prep-minute", "nerves"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why does the coach tell the candidate to put the card face down once the jobs are named?",
        hints: [],
        options: [
          { id: "a", text: "Because examiners are instructed to remove the card after ten seconds." },
          { id: "b", text: "Because a visible card invites endless re-reading, while the named jobs have already extracted everything useful." },
          { id: "c", text: "Because looking at the card while speaking is against the rules." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because a visible card invites endless re-reading, while the named jobs have already extracted everything useful.",
          "Once deliverables are named, the card's remaining value is zero and its risk — re-reader loops — is real; face down, the minute's attention turns to choosing and noting, where it earns material.",
          "(a) invents an instruction; (c) states a rule that does not exist — you keep the card through the talk, and glancing at it is allowed, merely unhelpful.",
        ),
        tags: ["speaking", "part2", "prep-minute", "habits"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Which of these belongs in the 45–55 second phase?",
        hints: [],
        options: [
          { id: "a", text: "Auditioning a second story as backup." },
          { id: "b", text: "Choosing the doorway sentence and the extension's destination idea." },
          { id: "c", text: "Writing the feelings corner out in full." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Choosing the doorway sentence and the extension's destination idea.",
          "The phase exists to fix the talk's two ends — the spoken entrance and the evaluative exit — so that the middle has something to travel between.",
          "(a) reopens a decision that should already be closed; (c) belongs to the noting window, and in fragments rather than in full.",
        ),
        tags: ["speaking", "part2", "prep-minute", "doorway"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Narrate a minute.",
        hints: [],
        situation:
          "Take any practice card, run the sixty-second budget in real time with a timer, and then speak for thirty seconds describing how you spent each phase and what your doorway sentence will be.",
        targetPhrases: [
          "my first ten seconds went to",
          "I committed to this story because",
          "my doorway sentence is",
        ],
        mustSay: ["read", "choose", "doorway"],
        feedback: fb(
          "A thirty-second narration covering the reading, choosing and noting phases and ending on the chosen doorway sentence.",
          "Narrating the budget aloud confirms that each phase owns its seconds and that the doorway is a spoken sentence rather than a written one — the habit that keeps the opening delivery natural.",
        ),
        tags: ["speaking", "part2", "prep-minute", "narration"],
      }),
    ],
    assignment: {
      title: "Budget log",
      instructions:
        "Run the sixty-second budget on two different practice cards with a visible timer. Submit a log for each: the second at which each phase actually started, the fragments you noted word for word, your doorway sentence, and one line on how your body felt at second sixty compared with second zero.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Practise the minute on one friendly card and one unfamiliar card each day, keeping the card face down after the second read to break the re-reading habit.",
      "Record only the minute itself — pencil sounds and any muttering — then listen back and check whether any drafted sentence crept onto the paper.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-notes",
    title: "Effective note-taking",
    description:
      "The four-corner note — WHAT, STORY, DIFFICULTY, FEELING — built from fragments, arrows and owned abbreviations, with one vivid noun phrase per corner, and the reasons full sentences sabotage the talk that follows.",
    objectives: [
      "lay out a four-corner note for any card inside twenty seconds of writing time",
      "compress material into fragments, arrows and abbreviations that trigger memory rather than replace speech",
      "explain why sentence notes damage delivery, range and recovery in the long turn",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "The paper you are handed at the start of Part 2 is not an essay pad; it is a dashboard. Used well, it holds a dozen words that keep a two-minute talk on the road; used badly, it holds sentences that get read aloud and a talk that dies at the edge of the script. This lesson installs the four-corner layout — WHAT, STORY, DIFFICULTY, FEELING — and the compression habits that fill it: fragments not clauses, arrows for sequence, abbreviations you actually own, and one vivid noun phrase per corner to make each region of the talk glow.",
        beforeYouStart: [
          "You can spend the preparation minute to a budget, with roughly twenty seconds reserved for writing.",
          "You know why the card's own wording should not be copied into your notes.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2, the note-making squeezed inside the preparation minute"],
          ["Task & question types", "Any description card; the notes are private aids, never collected or marked"],
          ["What is assessed", "Only the talk the notes produce — fluency, range and recovery all trace back to note quality"],
          ["Why this matters", "A dozen well-placed fragments feed two minutes of speech; two drafted sentences starve them"],
        ],
      },
      { type: "heading", text: "Component 1 — The four corners" },
      {
        type: "text",
        text: "Divide the paper — mentally, or with one quick cross — into four regions, each answering one standing question. WHAT names the thing itself: the meal, the app, the wrong turn. STORY holds the sequence: what happened, in order, in three or four beats. DIFFICULTY holds the turn: the problem, the doubt, the moment it nearly failed. FEELING holds the evaluation seed: how it felt then, what it means now. The card's prompts map onto the corners naturally — the first prompt usually feeds WHAT, the middle prompts feed STORY and DIFFICULTY, and the extension feeds FEELING — which is why the layout works on any card you are handed, whatever its subject.",
      },
      {
        type: "table",
        title: "The four corners at a glance",
        headers: ["Corner", "The standing question", "Example fragments (weather-spoiled plans card)", "Feeds which part of the talk"],
        rows: [
          ["WHAT", "What exactly are we talking about?", "beach day / June / whole family", "The opening naming move"],
          ["STORY", "What happened, and in what order?", "clouds at noon → packed wet → bus home", "The narrative middle"],
          ["DIFFICULTY", "Where did it turn?", "sandwiches ruined / little brother crying", "The turning-point beat"],
          ["FEELING", "What was it like then, and what is it now?", "furious then / board-game evening = best bit", "The extension's evaluation"],
        ],
      },
      { type: "heading", text: "Component 2 — Fragments, arrows, abbreviations" },
      {
        type: "text",
        text: "A fragment is a noun plus whatever it needs to jog you — 'cold coffee', 'border, 7 hrs' — and nothing more. Arrows carry sequence without grammar: 'clouds → packed → bus' is a route, not a sentence. Abbreviations are yours alone: the test does not grade shorthand, so 'w/' for with, 'b/c' for because, and your own private symbols are all legitimate, provided you can read them under pressure. The single upgrade worth practising is the vivid noun phrase: one corner, one image that glows — 'rain like nails on the tent roof' rather than 'bad weather'. A vivid phrase is easier to find mid-talk than a fact, and easier to say with feeling than a label.",
      },
      { type: "heading", text: "Component 3 — Filling the corners in twenty seconds" },
      {
        type: "steps",
        title: "Four corners, four writing moves",
        intro: "Each corner takes one small act of compression; the whole sheet costs twenty seconds once the moves are familiar.",
        steps: [
          {
            title: "Write WHAT first, as a naming fragment",
            text: "The WHAT corner takes five seconds because it is a single act of naming: the meal, the wait, the photograph. Get it down first and the rest of the note has an anchor; skip it and every later fragment floats free of its subject.",
            examples: [
              {
                english: "WHAT: 'lentil stew for a homesick flatmate' — five words, the whole subject compressed.",
                note: "The subject named once never needs renaming.",
              },
            ],
          },
          {
            title: "Lay STORY as three or four arrowed beats",
            text: "Sequence compresses beautifully: three or four beats joined by arrows, each beat two or three words. The arrows do grammatical work for free — when you speak, 'after that' and 'by the time' grow out of them naturally.",
            examples: [
              {
                english: "STORY: 'market together → steam, small kitchen → she filmed it' — three beats, nine words, a walkable timeline.",
                note: "Arrows are linkers waiting to happen.",
              },
            ],
          },
          {
            title: "Plant DIFFICULTY as the turn",
            text: "Most good talks have a hinge — the doubt, the setback, the moment it could have gone either way. Noting it as one fragment guarantees your talk has a shape beyond 'and then'; the hinge is also where contrast structures and slowed delivery earn their keep.",
            examples: [
              {
                english: "DIFFICULTY: 'sauce split — panic — grandma's trick: cold butter'.",
                note: "A hinge noted is a hinge told; a hinge unnoted is a hinge forgotten.",
              },
            ],
          },
          {
            title: "Seed FEELING with then and now",
            text: "Two feeling fragments beat one: how it felt in the moment, and what it means looking back. The then-now pair is the raw material of the extension — evaluation is largely the measured distance between the two.",
            examples: [
              {
                english: "FEELING: 'then: proud, shaky / now: our ritual, every winter'.",
                note: "The slash marks the then-now gap the extension will explore.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Why full sentences sabotage you" },
      {
        type: "text",
        text: "Sentence notes fail three ways at once. First, time: a sentence costs three or four seconds to write, so three sentences eat the whole writing window and leave the talk's second half unplanned. Second, delivery: what is written as prose gets read as prose — the eyes drop, the pace flattens, the rhythm turns recited, and the talk's flattest passage becomes its opening. Third, flexibility: a scripted sentence commits you, so the moment you miss a word or want to reorder, the script becomes a cage and the blank moment arrives on schedule. Fragments carry none of these costs: they are written fast, they cannot be read aloud because there is nothing to read, and they bend to any order the talk needs. The paradox worth keeping: the less sentence-like your notes, the more sentence-like your speech.",
      },
      {
        type: "example",
        title: "Notes as they actually look",
        items: [
          {
            english: "Meal card, four corners complete: WHAT 'lentil stew / flatmate, homesick' — STORY 'recipe text from mum → market together → steam, laughter' — DIFFICULTY 'sauce split, cold-butter rescue' — FEELING 'then proud / now our winter ritual'.",
            note: "Four corners, under twenty words, a complete map.",
            domain: "exam",
          },
          {
            english: "Device-failure card, one vivid phrase per corner: WHAT 'dying phone, 4% battery' — STORY 'maps open → dark screen → paper map from kiosk' — DIFFICULTY 'meeting in 20 minutes' — FEELING 'then panic / now a good story'.",
            note: "Each corner carries one image that glows.",
            domain: "exam",
          },
          {
            english: "A bad note and a good note for the same beat — bad: 'Then I decided that we should probably take the bus home.' Good: 'bus home?'.",
            note: "Nine written words saved per beat, and the delivery saved with them.",
            domain: "study",
          },
          {
            english: "A student invents three personal abbreviations — 'f2f' for face to face, '~' for roughly, 'gd' for good — then tests each on a week-old note sheet; two survive as instantly readable.",
            note: "Owned shorthand is shorthand you have tested, never shorthand invented on test day.",
            domain: "study",
          },
          {
            english: "A chairperson's flip chart for a stuck meeting: four boxes — 'the facts', 'what we tried', 'the blocker', 'how we feel' — filled in single words while people talk.",
            note: "The four-corner habit is every facilitator's habit.",
            domain: "work",
          },
          {
            english: "A birthday toast planned on the back of a receipt: 'her first job → night school → the phone call' — three beats, two arrows, ninety seconds of warm speech.",
            note: "Life's best short speeches are planned in fragments.",
            domain: "life",
          },
          {
            english: "Photograph card, corners at speed: WHAT 'harbour dawn, dad's boat' — STORY 'last summer / 5 a.m. walk' — DIFFICULTY 'he almost sold it that year' — FEELING 'then ordinary / now precious'.",
            note: "The then-now pair gives the extension its whole arc.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Note-taking mistakes corrected",
        items: [
          {
            wrong: "I write my notes as sentences so that nothing is missing when I look down.",
            right: "Write fragments and trust your grammar to build the sentences live — the notes trigger speech, they never replace it.",
            reason: "Sentence notes are slow to write, tempting to read, and rigid under pressure: three faults for zero extra content.",
          },
          {
            wrong: "I copy the card's bullet points as my notes, so I cover everything.",
            right: "Note your material, not the card's jobs: the bullets say what to cover, your fragments say with what.",
            reason: "Copied bullets contain none of your story, so looking down mid-talk finds instructions instead of content.",
          },
          {
            wrong: "My notes must be neat and complete, or I'll panic.",
            right: "Aim for legible-to-you and finished-in-time; a messy complete map outranks a beautiful half-map.",
            reason: "Nobody collects the paper — its only reader is you, at speed, mid-sentence, exactly once.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Two note sheets, one talk",
        reading: {
          text: "Two candidates prepared the same card — 'Describe a time you spoke in front of a group' — inside the same minute. Dana's sheet: 'Thank you for having me.' 'I remember standing at the front of the class.' 'My hands were shaking but I started anyway.' Ravi's sheet: WHAT 'school debate, year 10' — STORY 'chosen → practised in mirror → hall, 200 seats' — DIFFICULTY 'cards dropped, silence' — FEELING 'then terror / now grateful'.",
          task: "Say which sheet will still be useful at the ninety-second mark, and why.",
        },
        writing: {
          task: "Take the speaking-in-public card, or any card of your own, and write a full four-corner note: one naming fragment, three or four arrowed story beats, one hinge, and a then-now feeling pair — then add one sentence explaining which corner you expect to rescue you if the talk wobbles.",
          guide: [
            "WHAT, in five words or fewer:",
            "STORY, as beats joined by arrows:",
            "DIFFICULTY, the single hinge:",
            "FEELING, then-slash-now:",
          ],
          model: "Four corners for the speaking-in-public card — WHAT: 'year-10 debate, a motion I hated'; STORY: 'volunteered by accident → two nights of mirror practice → hall, 200 seats, opening line landed'; DIFFICULTY: 'cards slipped, three seconds of silence'; FEELING: 'then: terror, survival / now: gratitude, because the silence turned out to be survivable'. The DIFFICULTY corner is the rescuer: a noted hinge can be expanded with detail and feeling whenever the talk needs ballast.",
        },
        listening: {
          script: "Tutor: Show me the sheet. Student: It's messy — is that a problem? Tutor: It's fragments and arrows, which is exactly right. Walk me through it. Student: Top corner is the debate, then the arrows: practising, the hall, the dropped cards. Tutor: And this slash here? Student: Then terror, now grateful. Tutor: That slash is your extension — the distance between those two feelings is your whole last thirty seconds. Don't lose it.",
          task: "What does the tutor say the slash between the two feelings is worth?",
        },
        speaking: {
          task: "Prepare a card with the four corners in one timed minute, then speak for sixty seconds using the sheet only — eyes on the paper no more than once every ten seconds.",
          frames: [
            "My WHAT corner says…, so I open by naming it",
            "The arrows carry me from beat to beat",
            "When I hit the hinge, I slow down because…",
            "My then-now pair gives the close…",
          ],
          checklist: [
            "Did every corner get airtime?",
            "Did the arrows turn into linkers without effort?",
            "Did the talk survive on fragments alone?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Four regions give the talk fixed stations — naming, narrative, hinge, reflection — so the two minutes have a shape even before grammar arrives."],
          ["Grammar", "Fragments cannot be read, so every sentence is assembled live; the arrows seed sequence linkers and the hinge seeds contrast structures."],
          ["Vocabulary", "One vivid noun phrase per corner guarantees a memorable image in every region of the talk, instead of a pile of accurate labels."],
          ["Coherence", "The then-now feeling pair builds the bridge from story to verdict, so the extension arrives as a destination rather than a scramble."],
          ["Task fulfilment", "The corners absorb the card's deliverables — first prompt to WHAT, middle prompts to STORY and DIFFICULTY, extension to FEELING — making coverage structural."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Drill the layout on five cards until the cross and the four labels appear in the first two seconds of the writing window."],
          ["While the clock runs", "Keep the pencil to fragments and arrows; if a full clause appears on the paper, cross it out and halve it on sight."],
          ["If you are stuck", "Look for the least-visited corner and speak into it — every corner is pre-loaded material, and any corner can hold the fort."],
          ["Final minutes", "Let the FEELING corner own the closing stretch; its then-now pair is the extension, ready-made."],
        ],
      },
      {
        type: "summary",
        points: [
          "The four corners — WHAT, STORY, DIFFICULTY, FEELING — give any card the same dashboard: subject, sequence, hinge, evaluation seed.",
          "Fragments, arrows and owned abbreviations compress a talk into a dozen glanceable words; one vivid noun phrase per corner makes each region glow.",
          "Sentence notes cost time, flatten delivery into read-aloud prose, and cage the talk's order; fragment notes force live grammar and bend to any route.",
          "The card's bullets tell you what to cover; your notes record what you will cover it with — never copy jobs where material belongs.",
          "The then-now feeling pair is the extension in embryo: evaluation is mostly the measured distance between the two.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "How many seconds of the preparation minute does the budget reserve for writing?",
            options: ["About ten", "About twenty", "About forty"],
            correctIndex: 1,
            explanation: "The noting window runs roughly from second twenty-five to second forty-five, which is why only fragments can fill it.",
            from: "The one-minute preparation",
          },
          {
            question: "What kind of language does the 'and explain' line demand?",
            options: ["Additional events in the story", "Evaluation — reasons, feelings or significance", "A description of the card's topic in general"],
            correctIndex: 1,
            explanation: "The extension wants a verdict on the material, and the FEELING corner exists precisely to store the raw material of that verdict.",
            from: "Identifying the key requirements",
          },
          {
            question: "Why do lifted or recited stretches of speech stand out to an examiner?",
            options: [
              "They are usually quieter than improvised speech",
              "Their rhythm and phrasing break the pattern of the surrounding live language",
              "They contain no grammar at all",
            ],
            correctIndex: 1,
            explanation: "Prepared text carries a different music — flat pace, written phrasing — and the contrast with improvised stretches is audible, which is why notes that cannot be read aloud protect you.",
            from: "Avoiding memorised responses",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. Which corner stores the hinge — the moment the story could have gone either way?",
        hints: ["One corner is named after exactly that function."],
        options: [
          { id: "a", text: "WHAT" },
          { id: "b", text: "STORY" },
          { id: "c", text: "DIFFICULTY" },
        ],
        correctOptionId: "c",
        feedback: fb(
          "DIFFICULTY",
          "The DIFFICULTY corner exists to guarantee the talk has a turning point — the doubt, setback or near-failure that gives two minutes their shape and hosts some of the richest language.",
          "(a) names the subject; (b) holds the even sequence, of which the hinge is the deliberate interruption.",
        ),
        tags: ["speaking", "part2", "notes", "corners"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Audit the note sheet.",
        hints: ["Check each corner for form: fragments, arrows, vivid phrases."],
        passageTitle: "The sheet under the lamp",
        passage:
          "Card: 'Describe a meal you cooked for someone.' Jo's sheet reads: WHAT: 'biryani — Sunday ritual' — STORY: 'market with aunty → marinated overnight → steam, whole street could smell it' — DIFFICULTY: 'rice stuck to the pot at minute forty' — FEELING: 'then: nervous, measuring everything / now: I cook it when someone needs home'. The tutor circles one corner and writes: 'good vivid work here — now shrink the rest to match'.",
        question: "What is right about Jo's sheet, and what one improvement does the tutor's note point at?",
        options: [
          { id: "a", text: "The sheet rightly uses four corners with fragments; the improvement is compressing the overlong beats into fewer words." },
          { id: "b", text: "The sheet wrongly includes a feeling pair; the improvement is deleting the FEELING corner." },
          { id: "c", text: "The sheet is too short; the improvement is writing full sentences for safety." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The sheet rightly uses four corners with fragments; the improvement is compressing the overlong beats into fewer words.",
          "The layout, fragments, arrows and vivid phrases are all doing their jobs; the tutor's note targets length, because a couple of beats run past the glanceable three-or-four-word ideal, and long fragments slow the eye mid-talk.",
          "(b) removes the very corner that feeds the extension; (c) reverses the entire craft of the lesson.",
        ),
        tags: ["speaking", "part2", "notes", "audit"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory.",
        hints: [],
        question: "Name the four corners of the note layout in the order this lesson teaches them.",
        acceptedAnswers: [
          "WHAT, STORY, DIFFICULTY and FEELING",
          "what story difficulty feeling — the four corners",
          "WHAT then STORY then DIFFICULTY then FEELING",
          "the corners are WHAT STORY DIFFICULTY FEELING",
        ],
        keywords: ["story", "difficulty", "feeling"],
        feedback: fb(
          "WHAT, STORY, DIFFICULTY, FEELING — in that order.",
          "The order mirrors the talk's own arc from naming, through narrative and hinge, to evaluation, which is why the layout can be drawn in two seconds and trusted for two minutes.",
          "Answers that swap the middle two lose the sequence logic: difficulty interrupts story in the talk, and the note order mirrors that interruption.",
        ),
        tags: ["speaking", "part2", "notes", "layout"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. You glance down mid-talk and see: 'clouds → packed → bus'. What does the lesson say those arrows do for your speech?",
        hints: [],
        options: [
          { id: "a", text: "They remind you to say the words 'arrow' and 'then' literally." },
          { id: "b", text: "They seed natural sequence linkers — 'after that', 'by the time' — which grow out of the beats when spoken." },
          { id: "c", text: "They mark places where you should stop and reread your notes." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "They seed natural sequence linkers — 'after that', 'by the time' — which grow out of the beats when spoken.",
          "Arrows store sequence without grammar, and the grammar of time-linkers assembles itself around them at speaking speed — compression in the minute, range in the talk, from the same three strokes of the pencil.",
          "(a) confuses the symbol with its meaning; (c) describes exactly the read-aloud habit the layout exists to prevent.",
        ),
        tags: ["speaking", "part2", "notes", "arrows"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Independent practice. Which note belongs in the FEELING corner of the weather card?",
        hints: [],
        options: [
          { id: "a", text: "furious then / board-game evening = best bit" },
          { id: "b", text: "clouds at noon → packed wet → bus home" },
          { id: "c", text: "beach day / June / whole family" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "furious then / board-game evening = best bit",
          "The FEELING corner wants the then-now pair: emotion in the moment on one side of the slash, present-day meaning on the other — the raw material of the extension.",
          "(b) is the STORY corner's sequence; (c) is the WHAT corner's naming fragment.",
        ),
        tags: ["speaking", "part2", "notes", "feeling"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. From fragments to speech.",
        hints: [],
        situation:
          "Write a four-corner note for the card 'Describe a time when the weather spoiled your plans', then speak for ninety seconds from the fragments alone — no sentence may be read from the paper.",
        targetPhrases: ["the day I'm thinking of", "what happened next", "looking back now"],
        mustSay: ["weather", "felt", "because"],
        feedback: fb(
          "A ninety-second talk grown entirely from four corners of fragments, using the hinge and the then-now pair.",
          "Speaking from fragments proves the layout's central claim — that live grammar outperforms drafted prose for pace, range and recovery — and every successful run makes the fragments-to-speech jump faster.",
        ),
        tags: ["speaking", "part2", "notes", "fragments"],
      }),
    ],
    assignment: {
      title: "Corner sheet practice",
      instructions:
        "Choose three cards from your practice collection. For each, submit the exact four-corner sheet you would write — fragments, arrows, vivid phrases, then-now pair — and one sentence on which corner is thinnest and what you will do to fatten it before test day.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Draw the four corners on a postcard and keep it beside your practice space; before each timed run, fill the corners first, then flip the card over and speak.",
      "Take last week's practice notes and rewrite every clause on them as a fragment; compare the two sheets for speed of writing and speed of glancing.",
    ],
  },
];
