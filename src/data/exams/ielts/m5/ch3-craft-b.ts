/**
 * Chapter 3B — Part 2, the cue-card craft (Part B).
 *
 * The second four lessons of the Speaking Masterclass cue-card chapter:
 * the four-move shape of a two-minute talk, the continuity machinery that
 * crosses gaps without panic, the five growth moves that fill the speaking
 * window, and the four honest routes into a card from an unfamiliar world.
 * Every card quoted is original practice material written in the shape of
 * the test — never reproduced exam content — and every band reference
 * reads as an estimate.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const speakingPart2CraftLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-organising",
    title: "Organising your ideas",
    description:
      "The architecture of a two-minute talk: an opening that names and justifies the choice, a body that walks the story with spoken linkers, a turning point that interrupts the sequence, and a reflection that answers the extension — held together by signposts that sound spoken, not written.",
    objectives: [
      "shape any long turn into four moves — opening, body, turning point, reflection",
      "sequence events with spoken linkers instead of essay-style connectors",
      "signpost the talk's route so a listener can follow it without ever seeing the card",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Two minutes is a long time to improvise and a short time to wander. The strongest long turns share a shape: a doorway that names the subject and says why it was chosen, a middle that walks the story in order, a hinge where the story turns, and a closing reflection that weighs what it all meant. This lesson teaches that shape as four moves with rough time shares, the linkers that hold a spoken sequence together, and the signposts that let a listener follow your route without ever seeing your map.",
        beforeYouStart: [
          "You can fill a four-corner note for any card.",
          "You know which corner holds the material for the extension's evaluation.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2, the two-minute talk itself, on both test variants"],
          ["Task & question types", "Any description card; the moves adapt to the subject, the architecture stays constant"],
          ["What is assessed", "Coherence above all — the criterion that reads whether ideas arrive in an order a listener can follow"],
          ["Why this matters", "A shaped talk sounds organised at any level of language; a shapeless one sounds lost at every level"],
        ],
      },
      { type: "heading", text: "Component 1 — The four moves" },
      {
        type: "text",
        text: "Move one, the opening: name the subject in one sentence and give one reason it was chosen — 'The meal I want to describe is a lentil stew I cooked for my homesick flatmate, because it's the first thing I ever cooked that mattered to someone.' Move two, the body: walk the story in sequence, two or three beats from your STORY corner, each beat expanded with a detail. Move three, the turning point: the DIFFICULTY corner's hinge, given room to breathe — this is where a talk stops being a list and becomes a story. Move four, the reflection: the extension, answered from the FEELING corner with the then-now pair. Four moves, each with a job, each feeding the next.",
      },
      {
        type: "table",
        title: "The four moves and their time shares",
        headers: ["Move", "Job in the talk", "Spoken signals", "Rough share of two minutes"],
        rows: [
          ["Opening", "Name the subject; say why this one", "'The one I'd pick is…', '…because it's the first time I…'", "About fifteen seconds"],
          ["Body", "Walk the story in order, a detail per beat", "'At first…', 'After that…', 'By the time…'", "About sixty seconds"],
          ["Turning point", "Interrupt the sequence with the hinge", "'What made it hard was…', 'And then everything changed when…'", "About twenty seconds"],
          ["Reflection", "Answer the extension: meaning, feeling, change", "'Looking back…', 'What it taught me was…'", "About twenty-five seconds"],
        ],
      },
      { type: "heading", text: "Component 2 — Spoken linkers, not essay glue" },
      {
        type: "text",
        text: "A spoken story is stitched with conversation's own connectors: 'at first', 'after that', 'in the end', 'by the time we got there'. They are short, they sit at the front of clauses, and they sound like people talking. Essay connectors — 'furthermore', 'moreover', 'in conclusion', 'firstly and secondly' — do the opposite in speech: they announce a written mind inside an oral task, and they overload small steps of sequence with heavy machinery. Density matters too: one linker every two or three sentences is guidance; one per sentence is scaffolding left up after the building is finished. The arrows on your note sheet already hold the sequence — the linkers are simply those arrows, spoken.",
      },
      {
        type: "steps",
        title: "Building the shape on the note sheet",
        intro: "Four marks, made in the doorway-and-destination window of the minute, turn the four-corner note into a route plan.",
        steps: [
          {
            title: "Star the opening corner",
            text: "Before you speak, put a star beside the corner that opens the talk — usually WHAT. The star's only job is to answer the first-second question: where do I start? A starred corner gets the first sentence and the first breath, and the talk begins moving from beat one.",
            examples: [
              {
                english: "Star on WHAT: 'lentil stew, homesick flatmate' — the opening names both in its first sentence, and the talk is rolling.",
                note: "The first sentence's raw material, chosen in advance.",
              },
            ],
          },
          {
            title: "Number the story beats",
            text: "Put small numbers on the STORY corner's beats, left to right along the arrows. Numbers kill the commonest body-chaos — telling beat three, remembering beat one, doubling back — and they free your attention for language instead of order.",
            examples: [
              {
                english: "STORY beats numbered: 1 market together, 2 steam and laughter, 3 she filmed it — walked in order, no doubling back.",
                note: "Order handled on paper is attention freed for speech.",
              },
            ],
          },
          {
            title: "Circle the hinge",
            text: "Circle the DIFFICULTY fragment so it cannot be forgotten in the flow — the hinge is the most commonly dropped beat in unpractised talks. When you reach the circle, slow down: hinges deserve half-speed delivery and the listener's full attention.",
            examples: [
              {
                english: "Circled 'sauce split' reached at the seventy-second mark: pace drops, voice drops, detail rises — the talk's best half-minute.",
                note: "The circled hinge gets the talk's best delivery.",
              },
            ],
          },
          {
            title: "Bracket the reflection",
            text: "Draw a bracket round the FEELING pair and think 'destination'. Everything before the bracket is journey; the bracket is where the talk lands. If the examiner's stop arrives first, so be it — but aim your final movement at the bracket every single time.",
            examples: [
              {
                english: "Bracket round 'then: proud, shaky / now: our winter ritual' — the closing sentences measure the distance between the two.",
                note: "The bracket is the extension's landing pad.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Signposting without sounding scripted" },
      {
        type: "text",
        text: "Signposts are the spoken gestures that tell a listener where the talk is going: 'so, as I was saying, the person I want to describe…', 'anyway, moving on to what actually happened…', 'the part I haven't mentioned yet is…', 'which brings me to why it mattered'. Used sparingly — one every fifteen or twenty seconds — they make a talk feel guided; used industrially, they make it feel canned. The test of a signpost is whether it could occur in a conversation over coffee: 'to conclude my account' fails it, 'so, the reason I keep going back to that day' passes. Signposts also buy recovery time, because one second of 'right, where was I' is a bridging phrase in formal dress, and the next section begins on schedule.",
      },
      {
        type: "example",
        title: "The moves in the wild",
        items: [
          {
            english: "Opening move on a food card: 'The first thing I ever tried that wasn't from a packet was pho, at a night market in my second year — I chose it because I still think about the broth.'",
            note: "Name, reason, memory-hook: the opening's three jobs in two sentences.",
            domain: "exam",
          },
          {
            english: "Body linkers at work: 'At first I just copied the vendor's movements… after that, my friend took over the chopsticks… by the time the bowl was done, the whole row was watching.'",
            note: "Three linkers, three beats, sixty seconds of ordered story.",
            domain: "exam",
          },
          {
            english: "Turning-point language: 'And then — this is the part I still can't believe — I dropped the whole tray of herbs into the pot.'",
            note: "The dash and the aside slow the hinge down; speed of delivery is part of meaning.",
            domain: "exam",
          },
          {
            english: "Reflection move: 'Looking back, that clumsy bowl taught me that cooking for people is mostly courage — I've done it ever since.'",
            note: "Then-now distance crossed in one sentence; the extension answered.",
            domain: "exam",
          },
          {
            english: "A student labels four recorded practice talks with the move names and discovers every one of them skipped the turning point; the diagnosis alone fixes the habit within a week.",
            note: "Hearing the missing move is faster than reading about it.",
            domain: "study",
          },
          {
            english: "A nurse reporting to a doctor: 'The patient is Mrs Osei, night two after surgery — the key event was the fever spike at three, and what it means is we hold the discharge.'",
            note: "Opening, hinge, reflection: clinical handover runs on the same four moves.",
            domain: "work",
          },
          {
            english: "Telling friends about a missed flight: 'So the gate changed, right, and I was busy buying chocolate — the moment I realised was when my name went out over the speakers, and honestly, I'm at airports three hours early forever now.'",
            note: "Coffee-table talk uses the identical architecture without any notes.",
            domain: "life",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Organisation mistakes corrected",
        items: [
          {
            wrong: "I'll open with 'Firstly, I would like to describe…' because it sounds organised.",
            right: "Open by naming the subject and your reason for choosing it, in spoken register — 'The one I'd pick is… because…'.",
            reason: "Essay connectors inside a spoken turn announce written English in an oral task and waste the opening's naming job.",
          },
          {
            wrong: "Once my story is finished, the talk is finished — I'll stop there.",
            right: "Finish the story, then land the reflection: the extension's verdict is the talk's planned destination, not an optional extra.",
            reason: "A talk that ends on the last event has answered 'then what' and left 'so what' hanging — the exact job the extension prints.",
          },
          {
            wrong: "Signposts like 'moving on to my second point' keep the examiner oriented.",
            right: "Use conversational signposts — 'anyway, what happened next', 'the part I haven't mentioned' — sparingly, one every fifteen or twenty seconds.",
            reason: "Formal-listing signposts sound canned and belong to presentations; spoken ones guide without breaking the talk's voice.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One card, built in four moves",
        reading: {
          text: "A ninety-second transcript on the card 'Describe a food you tried for the first time': 'The food I want to talk about is fresh figs — my grandfather grew them, and I'd never eaten one until I was fourteen. At first I just watched him pick them. He cut one open and handed me half. And then the wasp appeared — out of nowhere, honestly — and I dropped my half in the grass, and he laughed so hard he had to sit down. We ate the rest sitting on an upturned crate. Looking back, the fig tasted like honey and the afternoon tasted like being let into his world, which is why I grow them on my balcony now.'",
          task: "Mark the four moves in the transcript and estimate each one's share of the ninety seconds.",
        },
        writing: {
          task: "Choose any card and write the plan for your four moves: the opening's two sentences (name plus reason), the body's three numbered beats with a linker chosen for each, the hinge, and the reflection's then-now line.",
          guide: [
            "Opening: 'The … I want to describe is …, because…'",
            "Body beats and their linkers: 'At first… / After that… / By the time…'",
            "Hinge: 'And then everything changed when…'",
            "Reflection: 'Looking back, … , which is why…'",
          ],
          model: "Plan on a neighbour card — Opening: 'The neighbour I know best is Mrs Ferreira from the flat opposite, because she taught me to make bread.' Body: 1 'at first, we only met at the lift' → 2 'after that, the flour incident — she knocked on my door with a recipe' → 3 'by the time winter came, Sunday baking was fixed'. Hinge: 'And then her son called to say she should move to his city.' Reflection: 'Looking back, those Sundays turned a corridor into a friendship, which is why I still bake badly and happily every weekend.'",
        },
        listening: {
          script: "Trainer: Where would you put the hinge in that talk? Candidate: The flour incident — it's the funny bit. Trainer: It's a beat, not the hinge. The hinge is the son's phone call — the moment the story stops being charming and starts mattering. Give that sentence half-speed and a pause on either side; the listener should feel the turn. Candidate: So a hinge is where the meaning changes, not where the laugh is. Trainer: Exactly — a hinge carries weight, and weight gets time.",
          task: "How does the trainer tell a beat from a hinge, and what delivery does the hinge receive?",
        },
        speaking: {
          task: "Deliver a two-minute talk on any card from this chapter, announcing nothing — but make each move audible: a name-and-reason opening, a linked body, a slowed hinge, a reflective close.",
          frames: [
            "The one I've picked is…, and I chose it because…",
            "At first… / After that… / By the time…",
            "And then — this is the part that changed things — …",
            "Looking back, what it gave me was…",
          ],
          checklist: [
            "Could a listener draw my four moves on paper?",
            "Did the hinge get slower delivery than the body?",
            "Did the final movement land on meaning rather than events?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Four moves with time shares turn two minutes into stations on a route — the listener always knows roughly where the talk is and what is still to come."],
          ["Grammar", "The plan's frames preview the tense journey: present for naming, past narrative in the body, a slow-down at the hinge, and a present-perfect reflection at the close."],
          ["Vocabulary", "Each move owns its own small lexicon — naming nouns at the opening, action verbs in the body, intensity at the hinge, evaluation currency at the close."],
          ["Coherence", "Spoken linkers and light signposts stitch the moves without essay glue, so the talk stays inside conversational register while still being guided."],
          ["Task fulfilment", "The reflection is planned as a destination, so the extension is answered on schedule even if the story runs long and the stop arrives early."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Mark the note sheet — star, numbers, circle, bracket — during the doorway-and-destination phase of the minute."],
          ["While the clock runs", "Trust the marks: star to open, numbers for order, circle for the slow-down, bracket for the landing; improvise inside beats, never across them."],
          ["If you are stuck", "Skip forward to the next marked station and say so — 'anyway, the part that really mattered was' — a missing beat costs less than a stalled talk."],
          ["Final minutes", "Aim the closing stretch at the bracketed reflection so the last thing scored is your best evaluative language."],
        ],
      },
      {
        type: "summary",
        points: [
          "A two-minute talk has four moves — opening (name plus reason), body (linked sequence), turning point (the hinge), reflection (the extension answered) — with rough shares of fifteen, sixty, twenty and twenty-five seconds.",
          "Spoken linkers — 'at first', 'after that', 'by the time' — stitch sequence naturally; essay connectors weigh a talk down and break its register.",
          "Mark the note sheet before speaking: a star on the opener, numbers on the beats, a circle on the hinge, a bracket on the reflection.",
          "The hinge deserves half-speed delivery; it is where a talk stops being a list and becomes a story.",
          "Signposts pass the coffee test or fail it: conversational ones guide, formal-listing ones sound canned.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "Which corner of the note sheet holds the hinge that becomes the turning point?",
            options: ["WHAT", "DIFFICULTY", "FEELING"],
            correctIndex: 1,
            explanation: "The DIFFICULTY corner stores the moment the story could have gone either way, which the talk then delivers at half speed as its turning point.",
            from: "Effective note-taking",
          },
          {
            question: "How does the extension line of a card usually read?",
            options: ["'You should say' followed by three prompts", "'And explain' followed by a reason, feeling or meaning", "'Describe' followed by a noun phrase"],
            correctIndex: 1,
            explanation: "The closing line asks for evaluation, and the four-move shape gives that evaluation its own final movement — the reflection.",
            from: "Understanding cue cards",
          },
          {
            question: "In the preparation budget, what gets fixed in the 45–55 second window?",
            options: ["The doorway sentence and the destination idea", "The story beats and their linkers", "The examiner's rounding-off questions"],
            correctIndex: 0,
            explanation: "Entrance and exit are chosen before the final settling seconds, and the four-move shape is the doorway-to-destination route made explicit.",
            from: "The one-minute preparation",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. What two jobs does the opening move do?",
        hints: ["Look at the frame: 'The one I'd pick is…, and I chose it because…'"],
        options: [
          { id: "a", text: "It names the subject and gives a reason for choosing it." },
          { id: "b", text: "It tells the story's ending first, then the beginning." },
          { id: "c", text: "It thanks the examiner and reads the card aloud." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It names the subject and gives a reason for choosing it.",
          "The opening names what the talk is about and says why this example was picked — two sentences that orient the listener and start the clock productively.",
          "(b) describes a film-trailer structure the talk never needs; (c) spends the opening on ceremony the test does not ask for.",
        ),
        tags: ["speaking", "part2", "organising", "opening"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Find the missing move.",
        hints: ["Count the moves in the summary: opening, body, hinge — and what?"],
        passageTitle: "The transcript with a hole in it",
        passage:
          "Practice card in the style of the test: 'Describe a neighbour you know well. You should say: how you first met; what kind of person they are; how you help each other; and explain why the relationship matters to you.' A candidate's talk, summarised: twelve seconds naming Mrs Ferreira and the flat opposite; fifty seconds walking the first meeting, the flour incident and the Sunday baking; twenty seconds on the son's phone call and the possibility of her moving away. The talk then ends: 'So yes, that's my neighbour.' The trainer's note reads: 'Three good moves — one missing, and it's the one the card prints.'",
        question: "Which move is missing, and which printed line does it answer?",
        options: [
          { id: "a", text: "The body is missing; it answers the 'how you help each other' prompt." },
          { id: "b", text: "The reflection is missing; it answers the 'and explain why it matters' extension." },
          { id: "c", text: "The opening is missing; it answers the task line." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The reflection is missing; it answers the 'and explain why it matters' extension.",
          "Naming, story and hinge all arrived, but the talk closed on 'that's my neighbour' without ever weighing the relationship — the extension's verdict is the missing fourth move, and the one the card explicitly prints.",
          "(a) contradicts the summary, which places the helping detail inside the fifty seconds; (c) is plainly present in the first twelve seconds.",
        ),
        tags: ["speaking", "part2", "organising", "moves"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory.",
        hints: [],
        question: "Name the four moves of a two-minute talk in the order this lesson teaches them.",
        acceptedAnswers: [
          "opening, body, turning point and reflection",
          "the moves are opening body turning point reflection",
          "opening then body then turning point then reflection",
          "opening, body, turning point, reflection — in that order",
        ],
        keywords: ["opening", "turning", "reflection"],
        feedback: fb(
          "Opening, body, turning point, reflection.",
          "The four moves convert two minutes into stations — name and reason, linked story, the hinge, the verdict — and their order doubles as the talk's running order.",
          "Answers that merge the hinge into the body lose the move that gives the talk its shape and its slowest, most memorable delivery.",
        ),
        tags: ["speaking", "part2", "organising", "shape"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why does the lesson give the hinge half-speed delivery?",
        hints: [],
        options: [
          { id: "a", text: "Because speaking slowly hides grammar mistakes at that point." },
          { id: "b", text: "Because the turning point carries the story's weight, and weight needs time for the listener to feel the change." },
          { id: "c", text: "Because the examiner expects a pause after every linker." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because the turning point carries the story's weight, and weight needs time for the listener to feel the change.",
          "The hinge is where the talk changes direction and meaning, and pace is part of meaning — slowing down marks the turn as surely as any linker marks sequence.",
          "(a) treats a delivery choice as camouflage; (c) invents a mechanical rule the lesson never sets.",
        ),
        tags: ["speaking", "part2", "organising", "hinge"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Independent practice. Which linker set belongs in a spoken body rather than an essay?",
        hints: [],
        options: [
          { id: "a", text: "'Furthermore… moreover… in conclusion…'" },
          { id: "b", text: "'At first… after that… by the time…'" },
          { id: "c", text: "'Firstly… secondly… lastly…'" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'At first… after that… by the time…'",
          "Conversation's own connectors are short, front-loaded and oral; they carry sequence without the written-formal weight that breaks a talk's register.",
          "(a) and (c) are essay and list machinery — organised on paper, stiff in the mouth.",
        ),
        tags: ["speaking", "part2", "organising", "linkers"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. A two-minute shape.",
        hints: [],
        situation:
          "Take the card 'Describe a food you tried for the first time' and deliver a full two-minute talk using the four-move shape — a name-and-reason opening, a linked body, a clearly slowed turning point, and a reflective close.",
        targetPhrases: ["the one I'd pick is", "what happened next was", "looking back"],
        mustSay: ["because", "after that", "looking back"],
        feedback: fb(
          "A two-minute talk that opens with name and reason, links its body, slows at the hinge and closes on a reflective verdict.",
          "Delivering the whole shape on one card turns the four moves from a diagram into a habit, and the hinge's half-speed moment is the part listeners — including examiners — remember.",
        ),
        tags: ["speaking", "part2", "organising", "delivery"],
      }),
    ],
    assignment: {
      title: "Four-move plan",
      instructions:
        "Take one card from your collection and submit a four-move plan: the opening's two sentences, the body's three beats with a linker chosen for each, the hinge with one line on how you will slow it down, and the reflection's then-now sentence. End with one line naming the move you skip most often in practice.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Record two two-minute talks this week and listen only for the moves, holding a pen over a drawn four-box grid; tick each box as you hear its move arrive.",
      "Collect five spoken linkers from interviews or podcasts you enjoy, and check each against the coffee test before adopting it into your own body delivery.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-continuity",
    title: "Maintaining continuity",
    description:
      "Keeping the talk moving when the road runs out: the next-thought habit, bridging phrases sorted by the job they do, a rehearsed recovery sentence for the full blank moment, and repairs that leave no damage behind.",
    objectives: [
      "run the next-thought habit so the mouth always has somewhere to go",
      "deploy bridging phrases by function — moving on, adding, returning, buying time",
      "recover from a blank moment inside five seconds using a fixed routine",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every long turn meets a gap: a word refuses to come, a beat ends and the next has not loaded, the mind presents a white page mid-sentence. What separates steady speakers is not the absence of gaps but the machinery they carry for crossing them. This lesson builds that machinery: the habit of always holding one thought ahead, a small stock of bridging phrases sorted by the job they do, and a three-move recovery routine for the full blank — because a talk that repairs smoothly reads as fluent, while the same gap met with silence reads as its opposite.",
        beforeYouStart: [
          "You can deliver a talk in four moves with a slowed hinge and a reflective close.",
          "You know the fluency criterion listens across the whole turn, not sentence by sentence.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2 under pressure, and the same skills in Part 3's discussion"],
          ["Task & question types", "Any card, plus the follow-up exchanges where a lost thread also costs you"],
          ["What is assessed", "Fluency and Coherence — pauses, fillers, self-repair and the connectedness of the whole turn"],
          ["Why this matters", "One silence handled well is invisible; one silence left to grow dominates the score the way a crash dominates a driving test"],
        ],
      },
      { type: "heading", text: "Component 1 — The next-thought habit" },
      {
        type: "text",
        text: "Amateurs finish a sentence and then decide what comes next; steady speakers decide what comes next while the sentence is still leaving. The habit is trainable: as you speak beat three, your eyes flick to the note sheet's number four; as you deliver the link, your mind has already half-formed the next clause. The note layout does half the work — numbered beats are a conveyor belt — but the habit itself is a glance discipline, practised until it is reflex. Its reward is that gaps stop being cliffs: with the next thought pre-loaded, the mouth closes one sentence and opens the next in the same breath, and the listener hears continuity where the speaker is merely keeping one page ahead.",
      },
      {
        type: "table",
        title: "Bridging phrases by function",
        headers: ["Function", "Phrase", "Use it when"],
        rows: [
          ["Moving the story on", "'What happened next was…'", "A beat ends and the next is loaded — the bridge says so out loud"],
          ["Adding a layer", "'And that actually reminds me…'", "A detail from another corner fits the beat you are telling"],
          ["Returning to route", "'Going back to what I was saying…'", "A detour has run its course and the main story wants resuming"],
          ["Buying a second", "'Let me think for a moment here…'", "The next thought needs one second to load — say the loading out loud"],
          ["Stalling into the close", "'Which brings me to the main reason this mattered…'", "The reflection is due and the hinge has just finished"],
        ],
      },
      { type: "heading", text: "Component 2 — The recovery sentence" },
      {
        type: "text",
        text: "Sometimes the page goes white anyway: no next thought, no bridge, nothing. For that moment you carry one rehearsed sentence — not a script for the talk, but a tool for the gap: 'Sorry, let me just gather my thoughts for a second.' Say it calmly, let the eyes drop to the note sheet, pick the least-finished corner, and start again from its fragment. The sentence works because it is what a fluent first-language speaker says in the same predicament: it is natural, it is short, it announces a pause instead of suffering one, and it gives the mind a three-second runway. One recovery per talk is unremarkable; three long silences are not — the sentence is the difference between them.",
      },
      { type: "heading", text: "Component 3 — The three-move repair" },
      {
        type: "steps",
        title: "Repairing a blank in three moves",
        intro: "The routine caps a blank at five seconds; every move in it is practised separately before it is ever needed together.",
        steps: [
          {
            title: "Move one: say the fixed line, calmly and once",
            text: "The moment you feel the blank, say your recovery sentence at conversational speed — no apology tour, no panic laughter, no second repetition. The line's job is to convert an unexplained silence into an announced pause, and it does that job in under two seconds.",
            examples: [
              {
                english: "'Sorry — one second, I want to get this right.' Calm tone, a slight smile, the eyes already moving to the notes.",
                note: "Announced, not suffered: the pause now belongs to the speaker.",
              },
            ],
          },
          {
            title: "Move two: drop the eyes to the least-finished corner",
            text: "While the sentence is still leaving your mouth, the eyes go to the note sheet and find the corner with the most unused material — the story beat not yet told, the detail not yet expanded. The sheet is the emergency stockroom, and every corner in it is pre-loaded talk.",
            examples: [
              {
                english: "Eyes land on 'cold coffee / border, 7 hrs' — two fragments, fifteen seconds of rescue material, instantly available.",
                note: "Prepared fragments exist precisely for blank moments like this one.",
              },
            ],
          },
          {
            title: "Move three: bridge back in from the fragment",
            text: "Re-enter speech through a bridge: 'Right — so, where was I… by hour three even the coffee had given up.' The bridge plus the fragment makes a complete sentence, the talk has motion again, and the whole episode lasted five seconds and sounded like composure.",
            examples: [
              {
                english: "'Right, so — going back to the wait itself, by hour three even the coffee had given up on us.'",
                note: "Bridge, fragment, motion: the five-second restart.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Why repair beats panic" },
      {
        type: "text",
        text: "The fluency criterion is read across the whole turn, and that is mathematics in your favour: a two-minute talk contains perhaps twenty sentences, and one repaired blank touches three of them. Panic converts the same blank into much more — repeated apologies, the whispered surrender of 'I have nothing to say', a flattening of the voice long after the silence ends. Each panic behaviour extends the gap's shadow across the remaining turn. Repair does the opposite: it caps the incident at five seconds and even adds currency, because a calm gathering line is itself a fluency behaviour — the sound of a speaker who manages speech, not one whom speech manages.",
      },
      {
        type: "example",
        title: "Gaps crossed, big and small",
        items: [
          {
            english: "Beat four ends, beat five has not loaded: 'What happened next was — actually, this is the funny part — the guard offered us his own sandwiches.'",
            note: "A moving-on bridge carrying a small aside while the next thought loads.",
            domain: "exam",
          },
          {
            english: "Mid-hinge blank on the device card: the fixed line spoken once, the eyes drop, then 'Right — so, the screen went black with the meeting twenty minutes away.'",
            note: "The full repair: fixed line, corner fragment, bridge back in.",
            domain: "exam",
          },
          {
            english: "A detour about phone brands runs long: 'Going back to what I was saying, the real problem wasn't the phone — it was that all my tickets were inside it.'",
            note: "The returning bridge closes the detour and reopens the route.",
            domain: "exam",
          },
          {
            english: "A learner writes four bridging phrases on a card, shuffles them, and deals one at random into each practice talk, using it exactly once wherever it fits.",
            note: "Dealing bridges at random builds deployment speed without a scripted feel.",
            domain: "study",
          },
          {
            english: "A consultant loses her slide in a client pitch: 'Let me think for a moment here — right, the key number was the twelve percent.' One sentence, and the room relaxes.",
            note: "The buying-a-second bridge earns its keep in every profession.",
            domain: "work",
          },
          {
            english: "Mid-anecdote at dinner, a speaker loses a name entirely: 'Sorry, give me a second — the friend I mean is the one with the canoe.' The table waits happily; the story continues.",
            note: "Recovery language is native to all situations, not test furniture.",
            domain: "life",
          },
          {
            english: "A candidate's talk contains one five-second blank, repaired calmly; the fluency note afterwards reads 'occasional natural hesitation — good self-management'.",
            note: "One repair reads as composure rather than failure (band-style notes are illustrative estimates, never promises).",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Continuity mistakes corrected",
        items: [
          {
            wrong: "If I go blank, silence is safer than saying something wrong.",
            right: "Say the recovery line, drop to your notes and bridge back in — announced pauses are fluency behaviour; unexplained silences are what the criterion penalises.",
            reason: "Silence stretches seconds into score-damaging gaps, while the repair routine caps the incident at five seconds and sounds composed.",
          },
          {
            wrong: "I'll apologise properly when I blank — 'Sorry, I'm so sorry, my English is bad…'",
            right: "One calm fixed line, then straight back to the material; apologies are the gap growing, not the gap closing.",
            reason: "Each extra apology adds hesitation language and signals loss of control — the exact behaviours the fluency descriptors count.",
          },
          {
            wrong: "Bridging phrases are just fillers — I should only speak when I have the sentence ready.",
            right: "Bridges are load-bearing: they point forward, hold the listener and buy the second the next sentence needs.",
            reason: "Fillers fill space, but bridges move a talk — 'what happened next was' announces motion even while the mind is still loading.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "A blank, repaired on tape",
        reading: {
          text: "A transcript fragment from a long turn on the card 'Describe a time when a device let you down': '…so there I am with four percent battery and the maps open, and the screen — the screen — [two-second pause] sorry, let me just gather my thoughts for a second. [pause] Right, so — going back to the phone, it died at the exact corner I needed, and the kiosk man printed me a paper map like it was nineteen ninety-five.' The trainer's margin note reads: 'This is the repair working. Note the fixed line, the return to the fragment, and the joke that lands afterwards.'",
          task: "Identify each of the three repair moves in the transcript, and say what the joke contributes.",
        },
        writing: {
          task: "Write your own repair routine in three sentences: your fixed recovery line in your own natural wording, the corner you would drop your eyes to (name its fragments), and the bridge you would use to re-enter speech.",
          guide: [
            "My fixed line, in wording I would actually say, is…",
            "The corner that would rescue me holds…",
            "My bridge back in would sound like…",
            "The whole episode should last no longer than…",
          ],
          model: "My repair routine: the fixed line — 'Sorry, give me a second, I want to get this right.' The rescue corner: DIFFICULTY, holding 'sauce split / cold-butter trick', which is unexpanded and rich. The re-entry bridge — 'Right, so — the thing I haven't told you yet is the sauce.' Target length: five seconds from blank to motion, with the voice returning at full strength rather than apologetic volume.",
        },
        listening: {
          script: "Trainer: I'm going to stop you mid-sentence at random and you repair. Ready? Student: Ready. Trainer: You were saying 'and then the bus finally—' — stop. Student: [beat] Sorry, let me just gather my thoughts for a second. [beat] Right — so, the bus finally came, but by then we'd missed the first half. Trainer: Two seconds of blank, one fixed line, one bridge, story resumed. That's the whole skill. Again — and this time smile while you say it.",
          task: "List the three things the trainer counts in the student's repair.",
        },
        speaking: {
          task: "Run the interruption drill with a partner: speak on any card for ninety seconds while your partner calls 'stop' twice; each time, run the three-move repair and continue.",
          frames: [
            "My fixed line is…",
            "The corner I'm dropping to says…",
            "Right, so — going back to…",
            "Which brings me to…",
          ],
          checklist: [
            "Did each repair stay under five seconds?",
            "Did the voice come back at full strength?",
            "Did the talk still reach its reflective close?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Numbered beats and stocked corners mean the next thought is pre-loaded, so the talk has somewhere to go even when a sentence collapses."],
          ["Grammar", "Bridges sit at the front of clauses and stay grammatically light, so they survive panic; the fragment-then-bridge restart builds a full sentence from two pre-made parts."],
          ["Vocabulary", "A small stock of function-sorted phrases covers every gap type — moving, adding, returning, buying — without topic-specific wording that blanks together with the memory."],
          ["Coherence", "The recovery line announces a pause and the bridge names the return, so the listener follows the gap and the resumption as parts of one connected turn."],
          ["Task fulfilment", "Repairs cap incidents at five seconds, protecting both the remaining airtime and the reflective close the extension is waiting for."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Fix your personal recovery line now, in your own wording, and rehearse it until it arrives without searching — the one sentence this course will ever ask you to hold ready."],
          ["While the clock runs", "Keep one thought ahead: eyes on the next numbered beat while the mouth finishes the current one, and spend bridges one at a time."],
          ["If you are stuck", "Run the three moves — fixed line, eyes to the least-finished corner, bridge back in — and never apologise twice."],
          ["Final minutes", "If a blank hits near the close, bridge straight to the reflection — 'which brings me to why it mattered' — and let the extension's material carry you home."],
        ],
      },
      {
        type: "summary",
        points: [
          "The next-thought habit keeps one beat pre-loaded while the mouth finishes the current one; the note sheet's numbers are the conveyor belt.",
          "Bridging phrases are function-sorted tools — moving on, adding, returning, buying a second, stalling into the close — and each one points forward.",
          "The recovery sentence converts an unexplained silence into an announced pause, in the same words a fluent first-language speaker would use.",
          "The three-move repair — fixed line, corner fragment, bridge back in — caps a blank at five seconds and reads as composure.",
          "Fluency is scored across the whole turn: one repaired gap is negligible, while panic, repeated apologies and surrender extend one gap into a whole turn's character.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "Which two marks on the note sheet keep the body's order while you speak?",
            options: ["The star and the bracket", "The numbers on the story beats and the circle on the hinge", "The four labels and the cross"],
            correctIndex: 1,
            explanation: "Numbers carry the sequence and the circle carries the hinge, so the eye can find the next beat even in the middle of a repair.",
            from: "Organising your ideas",
          },
          {
            question: "What does the four-corner layout store in its DIFFICULTY corner?",
            options: ["The subject's name", "The hinge — the problem or turning moment", "The then-now feeling pair"],
            correctIndex: 1,
            explanation: "The hinge fragment is pre-loaded rescue material: rich, unexpanded and ready to rebuild speech after a blank.",
            from: "Effective note-taking",
          },
          {
            question: "Which criterion most directly reads pauses, self-repair and connectedness across the turn?",
            options: ["Lexical Resource", "Fluency and Coherence", "Grammatical Range and Accuracy"],
            correctIndex: 1,
            explanation: "The fluency criterion listens to the flow of the whole turn — which is why a five-second repair protects it and a growing silence erodes it.",
            from: "What the examiner assesses",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. What is the first move of the three-move repair?",
        hints: ["What comes before looking at the notes?"],
        options: [
          { id: "a", text: "Repeat your last sentence twice, louder." },
          { id: "b", text: "Say your fixed recovery line calmly, once." },
          { id: "c", text: "Ask the examiner for a new card." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Say your fixed recovery line calmly, once.",
          "The fixed line converts the blank into an announced pause and buys the eyes two seconds to reach the notes — composure first, content second.",
          "(a) adds noise without direction; (c) is not an option the test offers, because the card stays with you.",
        ),
        tags: ["speaking", "part2", "continuity", "repair"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Read the transcript and find the failure mode.",
        hints: ["Compare what the speaker does after the pause with the three repair moves."],
        passageTitle: "The apology spiral",
        passage:
          "Transcript fragment from a long turn: '…and the tent started leaking, and then — [pause] — sorry, sorry, I'm so sorry, my mind went blank, I'm not very good at this, sorry — [long pause] — I don't know, the tent, the tent was… it doesn't matter, sorry.' The trainer writes underneath: 'The blank lasted two seconds. The apology spiral lasted twelve. The turn never recovered its voice.'",
        question: "According to the trainer's note, what lasted longer than the blank — and what was its effect?",
        options: [
          { id: "a", text: "The recovery sentence lasted longer, and it saved the turn." },
          { id: "b", text: "The apology spiral lasted longer, and it flattened the rest of the talk." },
          { id: "c", text: "The pause itself lasted longer, and the examiner stopped the talk." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The apology spiral lasted longer, and it flattened the rest of the talk.",
          "The two-second blank was minor; the repeated apologies turned it into twelve seconds of hesitation language, after which the speaker's voice never regained strength — panic, not the gap, did the damage.",
          "(a) names a sentence that never appears in the fragment; (c) contradicts the note, which describes recovery failing, not the talk being stopped.",
        ),
        tags: ["speaking", "part2", "continuity", "panic"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory.",
        hints: [],
        question: "Write the recovery sentence this lesson recommends for a full blank moment.",
        acceptedAnswers: [
          "sorry, let me just gather my thoughts for a second",
          "sorry — let me just gather my thoughts",
          "let me just gather my thoughts for a second",
          "sorry, let me gather my thoughts for a second",
        ],
        keywords: ["gather", "thoughts"],
        feedback: fb(
          "'Sorry, let me just gather my thoughts for a second.'",
          "The line is natural, short and pre-rehearsed, so it arrives without searching and turns an unexplained silence into an announced pause the listener accepts.",
          "Variants that apologise repeatedly or announce inability ('I can't remember anything') extend the gap instead of closing it.",
        ),
        tags: ["speaking", "part2", "continuity", "recovery-line"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why is the fluency criterion described as mathematics in your favour after a single repaired blank?",
        hints: [],
        options: [
          { id: "a", text: "Because examiners are instructed to ignore the first mistake." },
          { id: "b", text: "Because the criterion is read across the whole turn, and one five-second repair touches only a few of the turn's twenty-odd sentences." },
          { id: "c", text: "Because repaired blanks count as advanced grammar." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because the criterion is read across the whole turn, and one five-second repair touches only a few of the turn's twenty-odd sentences.",
          "A long turn holds many sentences, and a capped, well-repaired blank contaminates only a few of them — which is why composure inside the gap matters more than the gap itself.",
          "(a) invents an instruction; (c) confuses fluency behaviours with the grammar criterion.",
        ),
        tags: ["speaking", "part2", "continuity", "fluency"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Which phrase is a returning bridge — one that closes a detour and reopens the main story?",
        hints: [],
        options: [
          { id: "a", text: "'Going back to what I was saying…'" },
          { id: "b", text: "'And that actually reminds me…'" },
          { id: "c", text: "'Which brings me to the main reason this mattered…'" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "'Going back to what I was saying…'",
          "The returning bridge names the resumption of the main route after a side-path; the adding bridge opens a detour, and the stalling bridge launches the reflection.",
          "(b) opens new material rather than closing it; (c) points forward to the extension's close.",
        ),
        tags: ["speaking", "part2", "continuity", "bridges"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. The interruption drill.",
        hints: [],
        situation:
          "Speak for ninety seconds on any card you have prepared in this chapter; a partner must call 'stop' twice at moments of their choosing. Each time, use your fixed recovery line, drop to a corner, and bridge back in, continuing to a reflective close.",
        targetPhrases: [
          "sorry, let me just gather my thoughts for a second",
          "right, so — going back to",
          "which brings me to",
        ],
        mustSay: ["sorry", "gather", "right"],
        feedback: fb(
          "A ninety-second talk containing two visibly repaired stops that still reaches its reflective close.",
          "Practising repair under real interruption makes the routine automatic, and an automatic routine is what turns test-day blanks into five-second episodes nobody scores.",
        ),
        tags: ["speaking", "part2", "continuity", "interruption"],
      }),
    ],
    assignment: {
      title: "Repair rehearsal log",
      instructions:
        "Run the interruption drill three times on three different cards with a partner or a random timer. Submit the log: where each stop landed, which corner rescued you each time, the exact bridge you used, and one sentence on how the second and third repairs felt compared with the first.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Choose your four favourite bridges — one per function — and deploy each exactly once a day in ordinary conversation until they feel like your own speech.",
      "Record a talk and deliberately blank yourself once by looking away from the notes mid-beat; rehearse the fixed line until it arrives at conversational speed with a smile.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-at-length",
    title: "Speaking at length",
    description:
      "Filling the window: five expansion moves that grow any sentence by detail, feeling, comparison, background or consequence, the so-what move that owns the airtime after the last bullet, and a timer protocol that builds two-minute stamina week by week.",
    objectives: [
      "expand any thin sentence using the five growth moves",
      "keep talking productively past the last bullet with the so-what move",
      "train two-minute stamina with a recorded, timed protocol",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "The long turn's cruellest arithmetic: a talk that stops at forty seconds has committed no language errors at all, and still cost itself more than any mistake could — because the criteria feed on airtime. Length is not padding; it is opportunity. This lesson teaches five repeatable moves that grow a sentence — detail, feeling, comparison, background and consequence — plus the so-what move that owns the minute after your last bullet, and a timer protocol that turns forty-second speakers into two-minute speakers over a fortnight of honest practice.",
        beforeYouStart: [
          "You can deliver the four-move shape and repair a blank without panic.",
          "You know the talk's floor and ceiling: at least a minute, at most two.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2's speaking window, from your first sentence to the examiner's stop"],
          ["Task & question types", "Any description card; every card can be grown to the ceiling with the same five moves"],
          ["What is assessed", "Fluency through sustained speech, and Lexical Resource through the range the extra airtime displays"],
          ["Why this matters", "A forty-second talk shows the examiner a fraction of your language, however accurate the fraction"],
        ],
      },
      { type: "heading", text: "Component 1 — What length is actually for" },
      {
        type: "text",
        text: "Two minutes of speech is two minutes of evidence. Every additional sentence is a fresh chance to display vocabulary, a fresh structure to display range, a fresh link to display coherence — which is why the strongest candidates aim to be stopped rather than to stop. The examiner's gentle interruption at the ceiling is not a cut-off but a receipt: it certifies the window was filled. The floor works the same way in reverse: a talk well inside a minute, even a fluent one, starves every criterion simultaneously. That is why this lesson's title is 'at length' and not 'accurately' — accuracy is assumed; length is what you train.",
      },
      { type: "heading", text: "Component 2 — The five growth moves" },
      {
        type: "steps",
        title: "Five ways to grow a sentence",
        intro: "Each move expands a sentence along a different axis; between them, they can enlarge any beat on any card.",
        steps: [
          {
            title: "Detail — open the senses",
            text: "Take the sentence and add what a camera would record: colour, sound, smell, texture, weather. 'We waited at the border' grows into 'We waited at the border in a queue of lorries, windows fogging, one windscreen wiper going for no reason.' Sensory detail is the cheapest expansion, because memory — or invention — holds endless amounts of it.",
            examples: [
              {
                english: "'The market was busy' grows to 'The market was so packed that the fish seller had to shout her prices over three rows of umbrellas.'",
                note: "One camera pan, twice the sentence, three concrete nouns gained.",
              },
            ],
          },
          {
            title: "Feeling — name the interior",
            text: "Add what the people felt, then and there: 'Honestly, by hour six I'd stopped checking my phone — I'd started checking other people's faces for news.' Feeling moves are not decoration; they are the extension's currency arriving early, and they invite the intensifier and stance language that examiners listen for.",
            examples: [
              {
                english: "'I was nervous' grows to 'I was the kind of nervous where you rehearse saying hello in case you've forgotten how.'",
                note: "Specific nerves beat generic nerves; the range shows in the specifying.",
              },
            ],
          },
          {
            title: "Comparison — set it beside something",
            text: "Compare the moment with its opposite: other visits, other people, your expectations, the version of you from before it. 'The library was quiet' grows as 'The library was quiet in a way my flat never is — the silence had furniture.' Comparisons pull in extra tenses and structures for free.",
            examples: [
              {
                english: "'It was a long wait' grows to 'Longer than any airport queue I'd known, and I'd once spent a delayed night in Frankfurt.'",
                note: "A comparison imports a second scene and a past-perfect into one sentence.",
              },
            ],
          },
          {
            title: "Background — open the context",
            text: "Zoom out one frame: who was there, why you were there, what had happened that morning. Background is the move that rescues openings, because a story with a setting has somewhere to stand. 'I made biryani' grows with 'I'd been planning it all week, partly because my flatmate had stopped cooking after her mother called.'",
            examples: [
              {
                english: "'We went to the harbour' grows to 'We went to the harbour — my father's last summer on the boat, though none of us had said that out loud yet.'",
                note: "Context turns an event into a chapter of a larger story.",
              },
            ],
          },
          {
            title: "Consequence — say what it changed",
            text: "Zoom forward instead: what happened afterwards, what you do differently now, what you tell people about it. This is the so-what move, and it deserves special status — after your last bullet is answered, consequence is what owns the remaining airtime. 'I got home eventually' grows into 'I got home eventually, and I've never left the house without a paper map since.'",
            examples: [
              {
                english: "'That's why I remember it' grows to 'That's why I remember it: it's the story my family now tells at every wedding, and I've stopped minding.'",
                note: "Consequence is memory's afterlife — endless material.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 3 — Why stopping at forty seconds costs more than errors" },
      {
        type: "text",
        text: "Candidates fear errors and shorten talks to avoid them — the exact wrong trade. The criteria are fed by the language you produce: a two-minute talk with eight small errors shows vastly more evidence than a flawless forty seconds, and the fluency descriptors read sustained, connected speech as the behaviour of the stronger performances while short, guarded turns read as the behaviour of the weaker ones (band outcomes in this course are informed estimates, never promises). Silence is not neutral; it is the one behaviour that displays nothing. Train the instinct: when a sentence ends and the next has not loaded, the correct reflex is a bridge, a growth move or a corner — never a stop.",
      },
      {
        type: "table",
        title: "The growth moves on one sentence",
        headers: ["Base sentence", "Move", "Grown sentence"],
        rows: [
          ["'We took the bus home.'", "Detail", "'We took the last bus home, fogged windows, the driver's radio playing something half the passengers knew.'"],
          ["'We took the bus home.'", "Feeling", "'We took the bus home giggling — the kind of giggling that only happens after a plan has completely collapsed.'"],
          ["'We took the bus home.'", "Comparison", "'We took the bus home, which somehow felt shorter than the walk to the beach had felt that morning.'"],
          ["'We took the bus home.'", "Background", "'We took the bus home — my mother had packed for sun, so the whole family sat wrapped in beach towels.'"],
          ["'We took the bus home.'", "Consequence", "'We took the bus home, and now, honestly, a rainy day makes me smile before it makes me sigh.'"],
        ],
      },
      { type: "heading", text: "Component 4 — Training with a timer" },
      {
        type: "text",
        text: "Stamina is built, not wished for, and the protocol is simple. Record yourself on a fresh card; speak until stopped by the two-minute mark or by your own silence; note the length honestly. Then grow: take the same card, add one growth move per beat, and speak again — most candidates add twenty to thirty seconds in a single iteration. Across a fortnight of daily timed runs, the ceiling stops feeling distant. Two rules protect the protocol: never write the talk out between runs, because growth must stay live; and alternate familiar and strange cards, so the stamina does not depend on easy material.",
      },
      {
        type: "example",
        title: "Growth in the wild",
        items: [
          {
            english: "Thin opening: 'I want to talk about my grandmother's garden.' Grown opening: 'I want to talk about my grandmother's garden — the size of a tennis court, tomatoes tied to bed-frame wire, and a fig tree she guarded like a bank.'",
            note: "The detail move: three images where one label stood.",
            domain: "exam",
          },
          {
            english: "A candidate covers all four bullets of an apology card by second fifty-five, then runs consequence for the last minute: what the friendship looks like now, the running joke it created, the rule she has kept since.",
            note: "The so-what move owning the post-bullet minute.",
            domain: "exam",
          },
          {
            english: "'I was scared' grown by comparison: 'Scared the way you are before results day — awake at three, rehearsing both outcomes.'",
            note: "Comparison borrows a second scene and doubles the emotion's precision.",
            domain: "exam",
          },
          {
            english: "A timed-run log across two weeks reads 0:45, 0:52, 1:05, 1:18, 1:34, 1:51, 2:00 — one extra growth move per run, ceiling reached on day twelve.",
            note: "Stamina responds to measured, honest practice within days.",
            domain: "study",
          },
          {
            english: "A team briefing that must fill exactly ten minutes: the engineer grows each point with background and consequence rather than reading slides faster.",
            note: "Professional airtime is grown with the same moves.",
            domain: "work",
          },
          {
            english: "A grandparent telling the same childhood story for the fortieth time, still two minutes long: the details have grown, the comparisons have multiplied, the consequences have matured.",
            note: "Natural storytellers grow tales with every telling — the moves are native.",
            domain: "life",
          },
          {
            english: "Bullets finished at ninety seconds on a childhood-place card; the speaker bridges — 'which brings me to why I still go back' — and the final half-minute belongs to meaning.",
            note: "Post-bullet airtime is the extension's natural home.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Length mistakes corrected",
        items: [
          {
            wrong: "If I've answered everything on the card, I should stop — anything more is waffle.",
            right: "After the last bullet, switch to the so-what move: consequences, meaning and present-day habits own the remaining airtime.",
            reason: "The window belongs to you until the ceiling; stopping early trades scored airtime for silence, which no criterion rewards.",
          },
          {
            wrong: "To fill time I repeat the sentence with different words.",
            right: "Grow instead of reword: add sense detail, interior feeling, comparison, background or consequence — each adds new language, which repetition cannot.",
            reason: "Rephrasing displays the same narrow vocabulary twice; growth moves display new vocabulary, structures and links.",
          },
          {
            wrong: "Long practice talks will make me speak too long in the test.",
            right: "Train to the ceiling deliberately — in the test the examiner's stop is routine, and reaching it is the healthy outcome.",
            reason: "Overshooting cannot happen, because the ceiling is enforced for you; stamina training therefore carries no timing risk at all.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Forty seconds to two minutes",
        reading: {
          text: "Two openings on the card 'Describe a place you went to often as a child': Opening A — 'I want to talk about my grandfather's workshop. I went there every summer. It was interesting. I learned about tools.' Opening B — 'The place I kept returning to as a child was my grandfather's workshop, down the lane behind the house — sawdust on everything, a radio that only got one station, and the smell of oil and oranges, because he kept his lunch on the windowsill.' Both speakers know the same material; speaker A's talk lasted fifty seconds in total, and speaker B's was stopped at the ceiling.",
          task: "Name the growth move in opening B, and say where speaker A's talk lost its airtime.",
        },
        writing: {
          task: "Take the three thinnest sentences from your last practice talk and grow each one twice, with two different growth moves; submit the six sentences in pairs, labelled with the moves used.",
          guide: [
            "Pair one, thin sentence: …; grown with the detail move: …",
            "Pair two: grow the feeling sentence with a comparison",
            "Pair three: grow the background sentence with a consequence",
            "Mark which grown sentence you would actually keep in the talk",
          ],
          model: "Pair one — thin: 'The park was near our flat.' Grown with detail: 'The park was one gate away from our flat, close enough that my mother could shout us home from the balcony and be heard over the fountains.' Pair two — thin: 'I felt happy there.' Grown with comparison: 'I felt happy there in a way school never managed — at school you waited for the bell, and at the park the day simply ran out.' Pair three — thin: 'My grandfather took me.' Grown with consequence: 'My grandfather took me, and I still can't walk past a chess table without hearing him complain about my opening moves.' Keep: all three, because each pair earns its seconds.",
        },
        listening: {
          script: "Coach: How long? Student: Fifty seconds, and I'd said everything. Coach: Everything, or every bullet? Student: Same thing? Coach: Not even close. Bullets are the skeleton — at fifty seconds you've shown me bones. Grow the market beat. Student: Add what I bought? Coach: Add what you could smell, what the seller shouted, whether you'd have gone back. That's three moves on one beat. Again — same card, and don't stop until I raise my hand.",
          task: "What distinction does the coach draw, and which three moves does she name?",
        },
        speaking: {
          task: "Run the timer protocol once: speak on a new card until you stop or two minutes end, then immediately re-run the same card adding one growth move per beat.",
          frames: [
            "The detail I could add here is…",
            "What I felt at that moment was…",
            "Compared with other times, this one…",
            "And the consequence, even today, is…",
          ],
          checklist: [
            "Did the second run beat the first by twenty seconds or more?",
            "Did every growth move add new language rather than rewording?",
            "Did I finish on consequence rather than on silence?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Growth moves attach to beats, so expansion happens inside the four-move shape instead of distorting it — the route stays fixed while the scenery thickens."],
          ["Grammar", "Each move imports its own structures: detail invites noun-phrase building, comparison imports past perfect, and consequence reaches for present perfect and future habits."],
          ["Vocabulary", "Sense nouns, emotion specifics and comparative frames are exactly the ranges Lexical Resource listens for, and each move forces a different family of them."],
          ["Coherence", "Consequence language links past events to present habits, stitching the talk's end back to its beginning and giving the reflection a running start."],
          ["Task fulfilment", "Post-bullet airtime is owned by meaning, so the extension receives more than the bare minimum and the window is filled to its ceiling."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Drill the five moves as a litany — detail, feeling, comparison, background, consequence — until a stalled sentence triggers the next move by reflex."],
          ["While the clock runs", "Attach one move per beat as standard, and treat any sentence ending before a breath as an invitation to grow it by one more."],
          ["If you are stuck", "Grow the beat you just finished — add its smell, its feeling, its comparison — rather than hunting for a new beat; the richest material is always the current one."],
          ["Final minutes", "After the last bullet, hold the floor with consequence — what changed, what remains, what you tell others — until the examiner's stop arrives."],
        ],
      },
      {
        type: "summary",
        points: [
          "Length is evidence: two minutes of speech displays your language to the criteria in a way forty polished seconds never can.",
          "Five growth moves expand any sentence: detail (senses), feeling (interior), comparison (beside), background (context), consequence (aftermath).",
          "The so-what move owns the airtime after the last bullet — consequences and present-day meaning until the examiner stops you.",
          "Silence displays nothing, while errors at least display language — so the error-avoiding short talk is the worst trade the turn offers.",
          "The timer protocol — record, measure, grow one move per beat, repeat — builds two-minute stamina within a fortnight of honest practice.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "Which move of the four-move shape answers the card's extension line?",
            options: ["The opening", "The body", "The reflection"],
            correctIndex: 2,
            explanation: "The reflection delivers the then-now verdict the extension prints, and growth by consequence is what feeds it past the bare minimum.",
            from: "Organising your ideas",
          },
          {
            question: "What should carry you forward when a sentence ends and the next has not loaded?",
            options: [
              "A bridge, a growth move or a corner fragment — never a stop",
              "A repetition of the previous sentence",
              "A thank-you to the examiner",
            ],
            correctIndex: 0,
            explanation: "The continuity machinery exists precisely for the loaded-gap moment, and the same reflex protects length: bridges and corners keep airtime alive.",
            from: "Maintaining continuity",
          },
          {
            question: "How does the examiner signal that the speaking window is full?",
            options: ["By switching off the recorder", "By gently stopping the talk at the two-minute ceiling", "By asking you to speak more quietly"],
            correctIndex: 1,
            explanation: "The ceiling stop is routine and even desirable — it certifies the window was filled, which is why stamina training carries no timing risk.",
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
        prompt:
          "Guided practice. 'The market was busy' becomes 'The market was so packed that the fish seller had to shout her prices over three rows of umbrellas.' Which move was used?",
        hints: ["What did the added material appeal to — sight, sound, smell?"],
        options: [
          { id: "a", text: "Comparison" },
          { id: "b", text: "Detail" },
          { id: "c", text: "Consequence" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Detail",
          "The sentence grew by opening the senses — packed rows, shouting, umbrellas — which is the camera-pan move that adds concrete nouns fastest.",
          "(a) would have set the market beside another market; (c) would have said what changed afterwards.",
        ),
        tags: ["speaking", "part2", "length", "growth-moves"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Diagnose the fifty-second talk.",
        hints: ["Count what the speaker did after the final bullet."],
        passageTitle: "Fifty seconds, all bullets",
        passage:
          "Card: 'Describe a time you had to apologise to someone. You should say: what you had done; how you apologised; how the person responded; and explain what you learned from it.' The candidate covers the three bullets cleanly — the forgotten promise, the doorstep apology, the slow forgiveness — and finishes the learned line ('I learned to write things down') at second fifty. She then says 'That's all, I think,' and folds her hands. The examiner invites: 'Can you tell me a little more about how the friendship changed?'",
        question: "What did the candidate leave unused, and what move should have owned it?",
        options: [
          { id: "a", text: "She left the bullets unused; the detail move should have owned them." },
          { id: "b", text: "She left seventy seconds of window unused; the so-what move — consequences and present-day meaning — should have owned it." },
          { id: "c", text: "She left the preparation minute unused; the noting move should have owned it." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "She left seventy seconds of window unused; the so-what move — consequences and present-day meaning — should have owned it.",
          "The bullets were finished but the window was not: the friendship now, the running joke, the habit of writing things down — all of that had seventy seconds of airtime available and a move built to fill exactly that space.",
          "(a) contradicts the passage; (c) confuses the preparation minute with the speaking window.",
        ),
        tags: ["speaking", "part2", "length", "so-what"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory.",
        hints: [],
        question: "Name three of the five growth moves.",
        acceptedAnswers: [
          "detail, feeling and comparison",
          "detail, feeling, comparison, background and consequence — any three of them",
          "for example: detail, background and consequence",
          "feeling, comparison and background",
        ],
        keywords: ["detail", "feeling"],
        feedback: fb(
          "Any three of: detail, feeling, comparison, background, consequence.",
          "The five moves form a litany worth knowing in full — each grows a sentence along a different axis, and between them they can expand any beat on any card.",
          "Answers naming repetition, rewording or silence have mistaken the counterfeits for the currency.",
        ),
        tags: ["speaking", "part2", "length", "moves"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why does the lesson call a flawless forty-second talk a worse outcome than an error-bearing two-minute one?",
        hints: [],
        options: [
          { id: "a", text: "Because examiners reward speed over accuracy in Part 2." },
          { id: "b", text: "Because the criteria are fed by the language produced, and forty seconds shows only a fraction of the evidence two minutes displays." },
          { id: "c", text: "Because short talks are penalised by an automatic deduction." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because the criteria are fed by the language produced, and forty seconds shows only a fraction of the evidence two minutes displays.",
          "Every criterion needs material to read: sustained speech shows range, links and management that a guarded short turn simply never exhibits, whatever its accuracy — and band outcomes always remain estimates.",
          "(a) invents a speed reward; (c) invents a mechanical deduction, when the true cost is evidential rather than administrative.",
        ),
        tags: ["speaking", "part2", "length", "evidence"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. In the timer protocol, what are you forbidden to do between the first run and the second?",
        hints: [],
        options: [
          { id: "a", text: "Take a short rest before speaking again." },
          { id: "b", text: "Write the talk out and read it." },
          { id: "c", text: "Add one growth move per beat." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Write the talk out and read it.",
          "Growth must stay live: a written script converts practice into recitation, forfeiting the very fluency the stamina training is building.",
          "(a) is unproblematic, since the protocol governs material rather than breaks; (c) is the protocol's own instruction, not a prohibition.",
        ),
        tags: ["speaking", "part2", "length", "protocol"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Grow it twice.",
        hints: [],
        situation:
          "Speak for about ninety seconds on the card 'Describe a place you went to often as a child', using at least three different growth moves, and finish the talk on consequence — what remains with you today.",
        targetPhrases: ["what I remember most is", "compared with other places", "and even now"],
        mustSay: ["remember", "compared", "now"],
        feedback: fb(
          "A ninety-second talk in which three distinct growth moves appear and the closing sentences carry present-day consequence.",
          "Hearing yourself grow beats and close on consequence trains the reflex the window rewards — and the recorded evidence of stamina is the protocol's own proof of progress.",
        ),
        tags: ["speaking", "part2", "length", "stamina"],
      }),
    ],
    assignment: {
      title: "The timed-run log",
      instructions:
        "Run the timer protocol three times on three different cards this week. Submit the log: each run's honest length, the moves you added between runs, the sentence you grew best (quote it thin and grown), and one line on which move you will make your default and why.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Take any recording of your own speaking and find your three thinnest sentences; grow each with a different move, then re-record only those sentences and compare the two versions aloud.",
      "Watch one storyteller — a relative, a colleague, a podcaster — and tally which growth moves they use per minute; natural speakers run three or four without noticing.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-speaking-unfamiliar-topics",
    title: "Handling unfamiliar topics",
    description:
      "When the card opens a world you have never visited: choosing an honest angle, borrowing from adjacent experience, making the unfamiliarity itself the content, and inventing with the confidence that the test measures language, not biography.",
    objectives: [
      "open an unfamiliar card with an honest framing move instead of silence",
      "borrow material from adjacent experiences when the direct one is missing",
      "invent coherent, specific detail freely, knowing what the test does and does not check",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Sooner or later the card arrives from outside your life: a boat you never took, a gallery you never entered, a sport whose rules you only half-know. The instinct is to freeze — or worse, to perform expertise you do not have. Both instincts misread the test. Part 2 is a language window, not a biography check: the examiner never verifies your past, only the English that comes out of your mouth. This lesson builds four routes into an unfamiliar card — the honest frame, the adjacent borrow, unfamiliarity-as-content, and free invention — so that no card, however foreign, can cost you the two minutes that are rightfully yours.",
        beforeYouStart: [
          "You can keep a talk moving with bridges and repairs when material runs thin.",
          "You can expand any sentence with the five growth moves.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — Part 2 on the day the card is not your friend; the same moves serve Part 3's harder questions"],
          ["Task & question types", "Cards from unfamiliar worlds — hobbies you don't hold, places you've never been, pastimes you've never tried"],
          ["What is assessed", "Language under stretch: framing, hypothesising and inventing in fluent, connected English"],
          ["Why this matters", "Every candidate meets an alien card eventually; the prepared treat it as a language opportunity, not a verdict on their life"],
        ],
      },
      { type: "heading", text: "Component 1 — Unfamiliar is normal, and it is not a penalty" },
      {
        type: "text",
        text: "The card pool samples the whole of ordinary life, and no life contains all of it. Meeting a card you cannot answer from experience is a design feature of the test, not a personal failure — which is why examiners are trained to score the language of what you say, never the authenticity of the life behind it. The two real dangers are behavioural: the freeze, which converts unfamiliarity into silence; and the fake-expert performance, which produces strained, memorised-sounding English about statistics you cannot sustain. Between those two failures lies a broad, well-lit road: honest framing, borrowed material and confident invention, all in fully scored language.",
      },
      { type: "heading", text: "Component 2 — Four routes in" },
      {
        type: "steps",
        title: "Four routes into an alien card",
        intro: "Every route lands inside the printed prompts; they differ only in where the material comes from.",
        steps: [
          {
            title: "Route one: the honest frame",
            text: "Name the gap out loud, lightly, and move straight on: 'The one that springs to mind is actually the only boat trip I've ever taken — a ten-minute ferry, so I hope that counts.' The frame costs five seconds, signals composure, and converts the gap into personality: far from hurting you, it hands the examiner real, natural English in the very act of framing.",
            examples: [
              {
                english: "'I've never actually been to a proper gallery, but there's one picture I've stared at for years — it hangs in my dentist's waiting room.'",
                note: "The confession plus the rescue: a gap named and filled in a single move.",
              },
            ],
          },
          {
            title: "Route two: the adjacent borrow",
            text: "Reach sideways for the nearest experience that shares the card's DNA. Never sailed? The ferry crossing, the lakeside picnic, the pedalo incident of 2019. Never played the sport? The school tournament you watched, the friend who lives for it, the highlights on your feed. The borrow works because the card's prompts — where, when, who, how you felt — attach to borrowed material exactly as easily as to direct experience.",
            examples: [
              {
                english: "A boat-trip card answered on a ferry: 'It was only the cross-channel crossing, but the deck, the gulls and my paper cup of tea made it a voyage as far as I was concerned.'",
                note: "Adjacent material ticked the card's prompts and kept the language alive.",
              },
            ],
          },
          {
            title: "Route three: unfamiliarity as content",
            text: "Make the gap itself the subject: why you never encountered it, what you imagine it is like, what you would want from it. 'I've never held a fishing rod, and I suspect the appeal is exactly the stillness — my uncle used to call it thinking with a stick in your hands.' Speculation language — would, might, I imagine, I've always suspected — is rich, natural and fully scored, and the card's feeling prompts answer themselves in this mode.",
            examples: [
              {
                english: "'Why do people love it? I imagine it's the two hours of permission to do nothing — the fish are almost an excuse.'",
                note: "Speculation filling the explain-line: hypothesising is high-value language.",
              },
            ],
          },
          {
            title: "Route four: free invention, done specifically",
            text: "When even adjacency fails, invent — openly in your own mind, seamlessly in your speech. The craft is specificity: small nouns, mild imperfections, one sensory image, no statistics. An invented trip needs a departure time, a wet jacket and a sandwich, not a maritime itinerary. Small details are easy to sustain and impossible to interrogate; expert claims invite follow-up questions you cannot continue, while an invented personal evening invites only questions about feelings — your strongest territory.",
            examples: [
              {
                english: "'We hired the little boat at nine, and by ten my jacket had already lost its argument with the lake.'",
                note: "Invented, specific, sustainable — and completely uncheckable, because nothing in it can be wrong.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "Four routes, one card",
        headers: ["Route", "Opening move", "The line it produces"],
        rows: [
          ["Honest frame", "Name the gap lightly and offer what you have", "'The only artwork I know well is a poster I've owned since I was fifteen — I hope that counts.'"],
          ["Adjacent borrow", "Import the nearest shared experience", "'I've never sailed, but one cross-channel ferry taught me everything I know about decks and gulls.'"],
          ["Unfamiliarity as content", "Explain and imagine the gap", "'Fishing has always been mysterious to me — I suspect people love the stillness more than the fish.'"],
          ["Free invention", "Build a specific small memory", "'We took the boat out at nine; by ten, my jacket had lost its argument with the lake.'"],
        ],
      },
      { type: "heading", text: "Component 3 — What the test checks, and what it never checks" },
      {
        type: "text",
        text: "Worth saying plainly: nothing in Part 2 is fact-checked. The examiner has no interest in whether the boat existed, and the recording exists to protect the fairness of scoring, not to audit your Saturdays. What is checked is everything linguistic: whether the framing was fluent, whether the speculation used conditionals well, whether the invented detail arrived with vivid nouns and connected linkers. The one strategic caution: invent experiences, not expertise. Personal evenings, borrowed ferries and imagined stillness generate follow-up questions you can answer forever; invented statistics, famous paintings you cannot describe and rules of play you cannot explain generate follow-up questions that expose the performance. Keep the invention intimate, and it is unassailable.",
      },
      {
        type: "example",
        title: "Alien cards, opened well",
        items: [
          {
            english: "An art card, honest frame deployed: 'I'm the least artistic person in my family, so the piece I know best is a print of a harbour that has hung in our kitchen since before I was born.'",
            note: "The gap named in a few words, then forty seconds of perfectly good material.",
            domain: "exam",
          },
          {
            english: "A boat-trip card, borrow in action — notes read: 'ferry / deck, gulls / tea, white cliffs / felt like a proper traveller'. Four corners, zero sailing.",
            note: "The layout does not care where the material was borrowed from.",
            domain: "exam",
          },
          {
            english: "A fishing card, unfamiliarity as content: 'I've never fished, which my uncle says is a tragedy — he calls it thinking with a stick, and I've started to believe him.'",
            note: "A borrowed quotation carries the evaluation for you.",
            domain: "exam",
          },
          {
            english: "A learner writes five unfamiliar topics on slips — sailing, opera, chess, pottery, horse riding — and draws one daily for a week; by Friday the honest frame takes three seconds and the talk runs the full window.",
            note: "Rehearsing strangeness is the fastest way to defuse it.",
            domain: "study",
          },
          {
            english: "A new hire from another field in a technical meeting: 'I've never worked in logistics, so forgive the outsider's question — is the bottleneck the trucks or the paperwork?' — the honest frame, working for a living.",
            note: "Professional credibility survives, and even grows, from naming what you don't know.",
            domain: "work",
          },
          {
            english: "At a wedding full of strangers who play cricket: 'I've never played, but everyone here seems to live for it — what's the bit you love?' — curiosity replaces expertise, and the conversation lasts an hour.",
            note: "Unfamiliarity as content, in its natural habitat.",
            domain: "life",
          },
          {
            english: "An opera card, invention kept intimate: 'It was a student-ticket evening, the cheapest seats, and I spent half the time watching the audience watch it — which, honestly, was the best part.'",
            note: "Small, specific, sustainable: an invented evening no question can puncture.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Unfamiliar-topic mistakes corrected",
        items: [
          {
            wrong: "If I don't know the topic, there's nothing to say — I'll admit that and wait for the next part.",
            right: "Open with the honest frame and take one of the four routes in; the window is yours whatever the card contains.",
            reason: "Surrender converts unfamiliarity into silence — the one behaviour that displays nothing and cannot be compensated later in the turn.",
          },
          {
            wrong: "I'll impress the examiner with facts about the topic — dates, famous names, technical terms.",
            right: "Invent experience rather than expertise: specific personal moments generate follow-ups you can answer, while facts generate questions you cannot.",
            reason: "The test scores language, not knowledge, and factual performances strain the fluency they are meant to display — then collapse under questioning.",
          },
          {
            wrong: "Switching to a different, familiar topic is safer than struggling with the printed one.",
            right: "Stay inside the card's world: frame honestly, borrow adjacent material, or invent within the prompt — the examiner marks relevance to the printed brief.",
            reason: "Off-card talk may be fluent, but it is fluent about the wrong job, and coverage of the card's bullets is what the long turn exists to hear.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "The alien card, worked end to end",
        reading: {
          text: "Practice card in the style of the test: 'Describe a boat trip you have taken. You should say: where you went; who was with you; what the journey was like; and explain how you felt about it.' A candidate who has never taken anything bigger than a pedalo opens: 'I should confess straight away that my boating career is one ferry crossing and a capsizing pedalo, so the ferry is my flagship voyage. It was the cross-channel run, a school trip actually, grey sea, shouting gulls, a paper cup of tea that cost more than it felt worth.' The talk then develops the crossing for a full ninety seconds and closes: 'For ten minutes I felt like a proper traveller, which is presumably what people buy boats for.'",
          task: "Name the route the candidate took, and list the card's prompts the talk visibly answered.",
        },
        writing: {
          task: "Choose the card 'Describe a piece of art you have seen and liked' and write your opening thirty seconds — around four sentences — using the honest frame plus one other route of your choice, ending by naming the route you used.",
          guide: [
            "The honest frame: 'I'm not really a gallery person, but…'",
            "The material you actually hold: a poster, a mural, a school corridor, a book cover",
            "One specific sensory detail from that material",
            "Close the opening by naming your route",
          ],
          model: "My opening: 'I should say first that I've never knowingly stood in front of a famous painting, so my piece is a street mural — three storeys of a swimming woman on the side of a car park, painted by someone whose name nobody in the city seems to know. The blues actually shift shade as the day goes on, which I only noticed because my bus stop is opposite. I've missed buses for that wall.' Route used: the honest frame into the adjacent borrow — the mural standing in for the gallery.",
        },
        listening: {
          script: "Tutor: Boat trip. Go. Student: I've never… can I change it to a train journey? Tutor: The card stays. What's the nearest thing you've got? Student: A ferry? Two years ago, to an island. Tutor: Then the ferry is your boat trip — where, who, what it was like, how you felt. The card doesn't know how big the boat was. Student: So I just answer the four prompts on the ferry honestly? Tutor: Frame it in one sentence, borrow with pride, and give me the gulls and the tea. Nobody in that room is checking the harbour master's records.",
          task: "What does the tutor say the card doesn't know, and what does she say nobody is checking?",
        },
        speaking: {
          task: "Draw the strangest card you can find — or take the fishing or opera card from this lesson — and speak for ninety seconds using two of the four routes, naming each route silently to yourself as you enter it.",
          frames: [
            "The honest frame first: I've never…, but…",
            "The nearest thing I've got is…",
            "I imagine the appeal is…",
            "If I picture it, the first thing I see is…",
          ],
          checklist: [
            "Did the frame cost less than five seconds?",
            "Did the borrowed or invented material stay specific and small?",
            "Did speculation language appear where experience ran out?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "The four routes give unfamiliar cards the same dependable entry a four-corner note gives familiar ones — a first move, every time, whatever the subject."],
          ["Grammar", "The routes import valuable structures by design: framing clauses, conditional speculation for imagined appeal, and past narrative for borrowed or invented scenes."],
          ["Vocabulary", "Adjacent borrowing carries its own concrete nouns — gulls, decks, paper cups — which unfamiliar expertise could never supply from memory."],
          ["Coherence", "The honest frame connects confession to material in one sentence, so the talk never strays from the printed brief while being entirely truthful about its limits."],
          ["Task fulfilment", "Every route lands inside the card's prompts, so coverage survives even when direct experience is zero — the brief answered, honestly or imaginatively."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Build a weekly strangeness drill: five slips of unfamiliar topics, one drawn and spoken daily, until the honest frame is reflex and fast."],
          ["While the clock runs", "Spend your first sentence framing rather than apologising, then commit fully to the borrowed or invented material as if it were the easiest card you drew all week."],
          ["If you are stuck", "Ask yourself what the nearest thing you own is — the ferry for the voyage, the mural for the gallery — and answer the printed prompts on that."],
          ["Final minutes", "Close on speculation or consequence — what the unfamiliar thing must give its devotees, and what your ten-minute version gave you — both fully scored language."],
        ],
      },
      {
        type: "summary",
        points: [
          "Every candidate meets cards from outside their life; the test scores the language of the response, never the biography behind it.",
          "Four routes in: the honest frame (name the gap, offer what you hold), the adjacent borrow (nearest shared experience), unfamiliarity as content (why, and what you imagine), and free invention (specific, small, intimate).",
          "Specificity sustains invention: a wet jacket and a sandwich beat a maritime itinerary, because details cannot be wrong while expertise invites questions that expose it.",
          "Invent experiences, not expertise — personal material generates follow-ups you can answer forever; facts generate traps.",
          "The honest frame is personality, not weakness: naming the gap in fluent English is itself scored behaviour.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from earlier lessons.",
        items: [
          {
            question: "Which move keeps airtime alive when a sentence ends and the next thought is missing?",
            options: ["A bridge such as 'what happened next was…'", "A repetition of the card's task line", "A long silence"],
            correctIndex: 0,
            explanation: "Bridges buy the second the next thought needs, and the same continuity machinery carries unfamiliar cards past their thin moments.",
            from: "Maintaining continuity",
          },
          {
            question: "After the last bullet is answered, what should own the remaining airtime?",
            options: ["A restatement of the first sentence", "The so-what move: consequences and present-day meaning", "A thank-you to the examiner"],
            correctIndex: 1,
            explanation: "Consequence and meaning fill the post-bullet window, and speculation about an unfamiliar topic is one of the richest sources of both.",
            from: "Speaking at length",
          },
          {
            question: "How should you treat a question on an unfamiliar subject in any part of the test?",
            options: [
              "Refuse it and ask for another",
              "Answer honestly around it — nearby experience, honest framing, speculation",
              "Say only 'I don't know' and stop",
            ],
            correctIndex: 1,
            explanation: "The whole test rewards the language of framing, borrowing and hypothesising, and Part 2's alien card is the same challenge in long-turn form.",
            from: "Handling unfamiliar questions",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Guided practice. What is the honest frame?",
        hints: ["It has two halves: a confession and an offer."],
        options: [
          { id: "a", text: "Apologetically telling the examiner you cannot do the task." },
          { id: "b", text: "Lightly naming the gap in your experience and immediately offering the nearest material you do hold." },
          { id: "c", text: "Pretending from the first word that you are an expert on the topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Lightly naming the gap in your experience and immediately offering the nearest material you do hold.",
          "The frame converts a confession into an opening move — five seconds of natural English that buy the whole talk its direction and tone.",
          "(a) is surrender with better manners; (c) walks straight into the follow-up trap the lesson warns about.",
        ),
        tags: ["speaking", "part2", "unfamiliar", "honest-frame"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Guided practice. Find the trap in this performance.",
        hints: ["What kind of material invites questions the speaker cannot survive?"],
        passageTitle: "The gallery expert",
        passage:
          "Card: 'Describe a piece of art you have seen and liked.' The candidate, who has visited no gallery since primary school, opens: 'I am huge fan of impressionism, my favourite movement, which began in Paris in the 1870s with painters who loved light and everyday scenes.' The talk continues in this register — movements, centuries, techniques — for seventy accurate-sounding seconds, then slows as the material runs out. In the follow-up exchange the examiner asks which painting the candidate stood in front of longest, and why that painter over his contemporaries. The talk that follows is quiet, short and full of pauses.",
        question: "What went wrong, and which lesson rule did the performance break?",
        options: [
          { id: "a", text: "The talk was too long, breaking the two-minute ceiling." },
          { id: "b", text: "The candidate performed expertise instead of experience, and the follow-up questions exposed it." },
          { id: "c", text: "The candidate used the honest frame, which is forbidden." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The candidate performed expertise instead of experience, and the follow-up questions exposed it.",
          "Factual performance language ran out exactly when the material did, and the follow-up questions — which intimate, invented or borrowed experience would have answered easily — found nothing behind the expertise to ask its way into.",
          "(a) contradicts the passage's timings; (c) reverses the lesson, which teaches the frame precisely because it works.",
        ),
        tags: ["speaking", "part2", "unfamiliar", "expertise"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. Answer from memory.",
        hints: [],
        question: "Does the examiner check whether your Part 2 story really happened? What is actually being measured instead?",
        acceptedAnswers: [
          "no — the examiner checks only the language you produce, not your biography",
          "no, nothing is fact-checked; your English — fluency, vocabulary, grammar — is what's measured",
          "no, the story is never verified; the criteria score the language of the talk",
          "no; the test measures English, not truth — the recording protects scoring fairness",
        ],
        keywords: ["no", "language"],
        feedback: fb(
          "No — nothing in the long turn is fact-checked; the measured thing is the English itself.",
          "The examiner scores fluency, vocabulary, grammar and pronunciation as they appear in your speech, which is why borrowed and invented material earns identically to lived material — provided it stays specific and sustainable.",
          "Answers suggesting the story must be true, or that invention is penalised, have misread what the recording and the criteria exist to do.",
        ),
        tags: ["speaking", "part2", "unfamiliar", "honesty"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. Why invent experiences rather than expertise?",
        hints: [],
        options: [
          { id: "a", text: "Because personal stories are easier to memorise before the test." },
          { id: "b", text: "Because invented experiences generate follow-up questions you can keep answering, while invented expertise generates questions that expose the performance." },
          { id: "c", text: "Because examiners dislike facts on principle." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Because invented experiences generate follow-up questions you can keep answering, while invented expertise generates questions that expose the performance.",
          "Intimate material — feelings, small scenes, mild mishaps — can be extended in any direction the examiner pushes; factual claims can only be pushed until they crack.",
          "(a) turns invention into memorisation, which this course never teaches; (c) is absurd, since facts are fine when they are genuinely yours and sustainable.",
        ),
        tags: ["speaking", "part2", "unfamiliar", "invention"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Independent practice. The card asks about sailing; you have only a cross-channel ferry. What does the lesson advise?",
        hints: [],
        options: [
          { id: "a", text: "Declare the ferry off-topic and talk about something else entirely." },
          { id: "b", text: "Borrow the ferry openly — frame it as your flagship voyage — and answer the card's prompts on it." },
          { id: "c", text: "Invent a full regatta history with dates and technical terms." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Borrow the ferry openly — frame it as your flagship voyage — and answer the card's prompts on it.",
          "Adjacent borrowing keeps the talk inside the printed brief while staying truthful, and the card's prompts — where, who, what it was like, how you felt — attach perfectly to the borrowed material.",
          "(a) abandons the brief; (c) chooses exactly the unsustainable expertise the lesson warns against.",
        ),
        tags: ["speaking", "part2", "unfamiliar", "borrowing"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Independent practice. The strangest card you have.",
        hints: [],
        situation:
          "Take a topic you genuinely know nothing about — or use 'Describe a fishing trip you have been on' — and speak for ninety seconds using the honest frame plus one other route, keeping every detail specific and small.",
        targetPhrases: [
          "I should confess straight away",
          "the nearest thing I've got is",
          "I imagine the appeal is",
        ],
        mustSay: ["never", "imagine", "because"],
        feedback: fb(
          "A ninety-second talk that frames its own unfamiliarity honestly, borrows or invents specifically, and closes on speculation or meaning.",
          "Turning your strangest card into ninety seconds of fluent, scored English is the final proof of the chapter: the craft, not the topic, decides the turn — and the craft now lives in your reading, your notes, your shape, your continuity and your growth.",
        ),
        tags: ["speaking", "part2", "unfamiliar", "routes"],
      }),
    ],
    assignment: {
      title: "Strangeness inventory",
      instructions:
        "List five card topics you would dread drawing. For each, write the honest frame (one sentence), the nearest adjacent experience you could borrow (one sentence), and one specific, small detail you would invent to make the material live. Finish with a sentence naming which of the four routes you will default to and why.",
      minWords: 40,
      maxWords: 160,
    },
    homework: [
      "Write seven unfamiliar-topic slips — sports you don't play, arts you don't follow, vehicles you've never ridden — and draw one each morning for a week of short honest-frame practices.",
      "Re-listen to your last unfamiliar-card practice and check it against the two traps: count the seconds of any freeze, and count any factual claim you could not sustain if questioned.",
    ],
  },
];
