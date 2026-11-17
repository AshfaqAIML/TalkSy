/**
 * Chapter 4 — The four parts, one lesson each (PROMPT 44 Part 4).
 *
 * The section rises in complexity: Part 1's predictable transaction is the
 * entry point, Part 2's single voice is the first stamina test, Part 3's
 * multi-voice seminar is the steep middle, and Part 4's unbroken academic
 * monologue is the summit. Each lesson carries a worked mini-example in the
 * part's signature task, and the study-planning note in each says where the
 * part belongs in a training week.
 *
 * Format facts verified against official IELTS pages on 2026-11-12: four
 * parts heard once only, answers in question order, computer-delivered only
 * since mid-2026 (type as you listen, about two minutes to check). All
 * scripts and questions are original practice material.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const partsLessons: LessonSpec[] = [
  {
    slug: "ielts-listening-part1",
    title: "Part 1 — Everyday conversations and practical information",
    description:
      "The transactional opener: two voices, a predictable form, names and figures at dictation speed — where prediction is easiest, 10/10 is a realistic target, and the whole section's habits get installed.",
    objectives: [
      "describe Part 1's transactional contexts and its dominant task, form completion",
      "predict gap content from form labels before the audio runs",
      "follow question order through fast turn-taking and confirmation read-backs",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Part 1 is the friendly face of the section: two speakers, an everyday transaction — a booking, an enrolment, an insurance claim — and a form whose labels announce most of the answers in advance. It is also the part where a perfect ten is a realistic target, which makes it the right place to install the habits every later part will demand: pre-reading, prediction, capture, compliance.",
        beforeYouStart: [
          "You know the completion routine and the word-limit families.",
          "You can capture dictated names and figures at conversation speed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening Part 1 — questions 1 to 10, the opening transaction of the section"],
          ["Task & question types", "Form completion dominates; note and table completion appear; gaps want names, addresses, dates, prices and phone numbers"],
          ["What is assessed", "Practical information captured exactly: spellings, figures and formats inside limits"],
          ["Why this matters", "Part 1 sets the section's confidence budget — ten cheap marks, and the habits that pay for the other thirty"],
        ],
      },
      {
        type: "text",
        text: "Every Part 1 is a service encounter with a paper trail: joining a library, claiming on insurance, booking a course. The form on your screen mirrors the agent's form on theirs, so the layout is a prediction engine — 'Name', 'Address', 'Date of birth', 'Contact number' are not just labels, they are announcements. Two voices alternate in short turns, which keeps tracking easy, and the agent reads details back for confirmation — a free audit line for every capture you made.",
      },
      {
        type: "steps",
        title: "The Part 1 routine",
        steps: [
          { title: "Read the form as a picture", text: "During the introduction, scan the whole form top to bottom: how many gaps, what type each wants, where the dictated spellings will come.", examples: [{ english: "A form with Surname, Postcode, Start date and Fee announces a spelled name, a mixed code, a date conversion and a figure — four known jobs before any audio.", note: "The labels are the question paper's own predictions." }] },
          { title: "Serve the gaps in order, at speaking speed", text: "Part 1 answers arrive in question order inside a fast exchange, so the discipline is typing at the moment of hearing. If one turn contains two answers, take both; if the agent moves on, so do you.", examples: [{ english: "'That's the thirteenth of June, and the fee's forty-two' serves a date gap and a fee gap in a single turn — both typed before the next turn starts.", note: "Turn-taking is the part's pacing rhythm." }] },
          { title: "Use the read-back as your audit", text: "Agents confirm details — 'So that's Kowalski, K-O-W, starting the twelfth' — and each confirmation is a second hearing of your answer. Compare silently, repair instantly, and never stop listening to fix a typing slip.", examples: [{ english: "You typed 'twelth'; the read-back says 'the twelfth' — the missing v repaired while the call continues.", note: "Read-backs are the part's built-in check window." }] },
        ],
      },
      {
        type: "dialogue",
        title: "Worked mini-example — joining a community pottery course",
        context: "Form gaps: Surname (spelled on the recording) · First session (date, ONE WORD AND/OR A NUMBER) · Fee (the box prints $).",
        lines: [
          { speaker: "Clerk", text: "Community Arts Centre, good morning." },
          { speaker: "Caller", text: "Hello — I'd like to join the pottery course. My name's Fenwick, that's F-E-N-W-I-C-K." },
          { speaker: "Clerk", text: "Fenwick, got it. The first session is on the ninth of May, then weekly." },
          { speaker: "Caller", text: "And the cost?" },
          { speaker: "Clerk", text: "It's thirty-six dollars for the term, materials included." },
        ],
      },
      {
        type: "text",
        text: "Marking the script. Surname → 'Fenwick', captured letter by letter exactly as dictated — the spelling contains no traps, and typing it as heard beats typing it as remembered. First session → the clerk says 'the ninth of May', the limit allows one number and one word, so the gap takes '9 May' — the ceremony deletes at the keyboard. Fee → the box already prints the dollar sign, so the gap takes '36' alone; '36 dollars' would spend a word the box never asked for. Three gaps, three disciplines: dictation, conversion, format.",
      },
      {
        type: "note",
        title: "Study planning",
        text: "The four parts rise in complexity, and study weeks should follow that order. Part 1 is the entry point: train it first, and to perfection — its predictable forms are where pre-reading, capture and compliance become automatic before Part 2 removes the safety rails.",
      },
      {
        type: "example",
        title: "Part 1 marks, won and lost",
        items: [
          { english: "A candidate who pre-reads the form hears 'that's F-E-N-W-I-C-K' with fingers already waiting on the letter keys.", note: "Prediction is easiest where the form announces the job.", domain: "exam" },
          { english: "An insurance claim form asks for a policy number; the caller reads 'V, oh, seven, triple-three, M' and the capture is V0733M.", note: "Codes mix letters and digits, and the keyboard takes both as dictated.", domain: "work" },
          { english: "A gym enrolment says 'we open at six thirty on weekdays'; the gap 'Opens: ____' takes '6.30' under a number allowance.", note: "Clock times convert to digits at the moment of capture.", domain: "daily" },
          { english: "A library form gap 'Address: ____' hears 'forty-two, Rawdon Street' and takes '42 Rawdon Street' — one number, two words, legal under NO MORE THAN THREE WORDS AND/OR A NUMBER.", note: "Address gaps test limit arithmetic as much as hearing.", domain: "daily" },
          { english: "A booking agent says 'the room's available from the twenty-third'; typed as 'the 23rd' under ONE WORD AND/OR A NUMBER, the check-window repair is '23'.", note: "The limit pass exists for exactly these small overdrafts.", domain: "exam" },
          { english: "Two neighbours sit the same mock: both hear every answer; one banks nine, the other six — the difference is spelled names and converted dates.", note: "Ten out of ten is a formatting target before it is a listening target.", domain: "study" },
        ],
      },
      {
        type: "mistakes",
        title: "Part 1 mistakes corrected",
        items: [
          { wrong: "Part 1 is easy, so I'll save energy and read the form during the audio.", right: "Part 1 is where the habits are installed: pre-read the form fully, predict every gap, capture at speaking speed.", reason: "The part's predictability is a resource — spending it on relaxation donates the section's cheapest marks." },
          { wrong: "The agent's read-back is just politeness.", right: "Treat every read-back as a second hearing of your answers and audit against it.", reason: "Confirmation lines close almost every transaction, and they repair errors the first pass missed." },
          { wrong: "I'll write what the caller says, word for word.", right: "Capture what the gap asks for, inside its limit and format — transcripts are not answers.", reason: "The typed answer must obey the printed limit even when the audio's phrasing does not." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the whole form in the introduction; label each gap: name? date? figure? code?"],
          ["While the clock runs", "Type at the moment of hearing; take both answers from a two-answer turn; ride the read-backs."],
          ["If you are stuck", "Miss a dictated name? Guess from the letters you caught and re-anchor on the next label."],
          ["Final minutes", "Give Part 1's answers the spelling and limit passes first — they are the likeliest ten marks on the page."],
        ],
      },
      {
        type: "summary",
        points: [
          "Part 1: two speakers, one everyday transaction, questions 1 to 10, form completion dominant.",
          "The form's labels are predictions — read the layout in the introduction and the part half-solves itself.",
          "Names, dates, prices and phone numbers arrive at dictation speed; the exactness lessons are this part's toolkit.",
          "The read-back is a free audit — compare silently and repair instantly.",
          "Study planning: train Part 1 first and to perfection; its habits are the section's operating system.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "Under ONE WORD AND/OR A NUMBER, 'the ninth of May' becomes…", options: ["9 May", "the 9th of May", "May the ninth"], correctIndex: 0, explanation: "One figure plus one word; the article and 'of' breach the count at the keyboard.", from: "Numbers and dates" },
          { question: "What does a dictated name demand at the keyboard?", options: ["The letters exactly as spoken", "The most familiar spelling", "Any recognisable version"], correctIndex: 0, explanation: "Dictation is the answer key; correcting it replaces the tested answer with a guess.", from: "Spelling requirements" },
          { question: "Which two parts are monologues?", options: ["Parts 2 and 4", "Parts 1 and 3", "Parts 3 and 4"], correctIndex: 0, explanation: "The section alternates: two conversations (1 and 3) around two single-voice talks (2 and 4).", from: "Understanding the Listening test" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the enrolment call, then type the number as digits.",
        hints: ["Decode the codes as they arrive: oh, double, triple."],
        audioText: "Clerk: And a contact number? Caller: It's oh-eight-four, double-two, nine-one-oh — I'm usually in after six.",
        question: "Type the caller's contact number as one string of digits.",
        acceptedAnswers: ["08422910", "084 22 910", "08422 910"],
        keywords: ["08422910"],
        feedback: fb(
          "08422910",
          "Oh decodes to zero at both ends and double-two writes two twos — eight digits assembled in dictation order, exactly how the gap wants them.",
          "0842910 drops one of the twos; 'double' always means the digit appears twice.",
        ),
        tags: ["ielts", "part-1"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "Why is prediction easiest in Part 1?",
        hints: ["What does the layout give away?"],
        options: [
          { id: "a", text: "The speakers talk more slowly than in other parts." },
          { id: "b", text: "The form's labels announce the content type of every gap before the audio runs." },
          { id: "c", text: "The questions are printed with their answers." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The form's labels announce the content type of every gap before the audio runs.",
          "A label like 'Postcode' or 'Date of birth' fixes the content type in advance, so listening becomes verification rather than discovery.",
          "(a) is a myth — pace stays broadly constant across the section; (c) describes no exam in existence.",
        ),
        tags: ["ielts", "part-1"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the agent, then type the street name exactly as dictated.",
        hints: [],
        audioText: "Agent: The pickup address is fifty-one Marrowgate Lane — that's M-A-double R-O-W-G-A-T-E.",
        acceptedAnswers: ["Marrowgate"],
        feedback: fb(
          "Marrowgate",
          "The double r was spelled aloud precisely because the word looks unlikely; dictation questions answer themselves when the letters are captured in order.",
          "'Marowgate' drops a letter the audio gave; 'Marrow Gate' splits a word the speaker joined.",
        ),
        tags: ["ielts", "part-1"],
      }),
      ex({
        type: "multi-select",
        difficulty: "easy",
        skill: "listening",
        prompt: "Select every context that belongs to Part 1.",
        hints: [],
        options: [
          { id: "a", text: "Reporting a stolen laptop to an insurance agent" },
          { id: "b", text: "Enrolling in a beginners' swimming course" },
          { id: "c", text: "A lecture on the history of canal engineering" },
          { id: "d", text: "A tutor and two students reviewing a draft essay" },
        ],
        correctOptionIds: ["a", "b"],
        feedback: fb(
          "The insurance call and the swimming enrolment",
          "Part 1 pairs two voices in an everyday transaction; the lecture belongs to Part 4 and the essay review to Part 3.",
          "Single-voice academic talks and multi-voice seminars are the later parts' territory.",
        ),
        tags: ["ielts", "part-1"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: what makes ten out of ten a realistic Part 1 target?",
        hints: [],
        question: "Why is full marks realistic in Part 1?",
        acceptedAnswers: ["the predictable context", "predictable context", "the form announces the answers"],
        keywords: ["predict"],
        feedback: fb(
          "Its predictable transactional context",
          "The labels, the read-backs and the strict question order make Part 1 the most forecastable ten questions in the whole test.",
          "'It is easier' and 'the audio is slower' are myths — the contexts are predictable, not the speech simple.",
        ),
        tags: ["ielts", "part-1"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "listening",
        prompt: "Complete the Part 1 habit.",
        hints: ["The agent confirms what you typed."],
        sentence: "Every read-back in Part 1 should be treated as a free ____ of your captures.",
        acceptedAnswers: ["audit", "check", "verification"],
        feedback: fb(
          "An audit",
          "Agents read details back for the caller's benefit and yours: each confirmation is a second hearing of an answer you have already typed.",
          "Politeness is the surface; the marking value is the confirmation.",
        ),
        tags: ["ielts", "part-1"],
      }),
    ],
    homework: [
      "Take one Part 1 practice: before playing, write beside each gap what it wants (spelled name, date, figure, code) — then score your predictions against the audio.",
      "Build your own Part 1 form from a real transaction you made this week (a booking, a repair call) and note every read-back you hear in it.",
    ],
  },
  {
    slug: "ielts-listening-part2",
    title: "Part 2 — The individual speaker",
    description:
      "One voice for several minutes: a tour, a briefing, an announcement. Signpost words replace the second speaker as your anchor, maps and note completion dominate, and the long-stretch discipline becomes the skill.",
    objectives: [
      "follow a single speaker through a whole talk using signpost words",
      "work map and plan questions with the tour's direction chains",
      "hold concentration across a monologue stretch without a second voice to re-anchor",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Part 2 removes the comfort Part 1 gave you: no second voice, no read-back, no alternating turns — one speaker, several minutes, everything. What replaces the conversation's rhythm is the speaker's own structure: 'First of all… Now… Finally…' are the seams of the talk, and each seam is where a question group begins. Learn to hear the seams and a monologue becomes a guided tour of your own question page.",
        beforeYouStart: [
          "You can track monologue signposts (core skills lesson).",
          "You have completed Part 1 training and the completion lessons.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening Part 2 — questions 11 to 20, one voice in an everyday or social context"],
          ["Task & question types", "Map and plan labelling is at home here; note completion and choosing from a list complete the set"],
          ["What is assessed", "Following an unbroken talk: orientation, direction chains and block structure"],
          ["Why this matters", "Part 2 is the first stamina test — the habits built here are what Part 4 will demand, doubled"],
        ],
      },
      {
        type: "text",
        text: "In a conversation, a new voice re-anchors you every turn; in a monologue, one lapse of concentration can outlast two questions. The defence is structural: speakers announce their blocks aloud — 'First of all, the timetable', 'Now, moving on to parking', 'Finally, a word about fees' — and each announcement is both a re-anchoring point and a question-group boundary. Lose the thread and the next signpost hands it back within a sentence.",
      },
      {
        type: "steps",
        title: "Staying with one voice",
        steps: [
          { title: "Convert signposts into page positions", text: "Before the audio, note where each question group sits on the page; when the speaker says 'Now, the car park', your eyes go to that group. The signpost-to-page link is the monologue equivalent of speaker tracking.", examples: [{ english: "Questions 14-16 sit under a map; 'Right, let's start the walking tour' sends your attention — and your finger — to the plan.", note: "Signposts are addresses; learn your page's street names." }] },
          { title: "Follow maps by movement, not vocabulary", text: "Map tours are chains of direction words — 'past the fountain, opposite the café, second on the left' — and each phrase moves you one step. Miss one step and the later labels land wrong.", examples: [{ english: "'As you come in, reception is straight ahead, just before the stairs' — two moves place reception without any compass work.", note: "Movement phrases are the map's grammar; translate turns as they land." }] },
          { title: "Survive the list-choosing traps", text: "Where Part 2 asks you to choose from a list, two of the three options are usually mentioned and then rejected. Listen for the verdict language — 'we decided against', 'that turned out to be' — and mark the survivor.", examples: [{ english: "'We looked at the beach and the park, but the hall has the best acoustics' — the hall wins; the other two were auditioning.", note: "Mentioned options audition; verdicts appoint." }] },
        ],
      },
      {
        type: "dialogue",
        title: "Worked mini-example — a community hub briefing",
        context: "Note gaps: 11 'Workshop capacity: ____' (ONE WORD AND/OR A NUMBER) · 12 'Evening class day: ____' (ONE WORD ONLY) · 13 'New facility: ____' (ONE WORD ONLY).",
        lines: [
          { speaker: "Coordinator", text: "Welcome, volunteers. First of all, the building itself: the workshop downstairs seats twenty-four people, though we cap classes at twenty." },
          { speaker: "Coordinator", text: "Now, the evening programme. The pottery class runs on Thursday evenings this term — Tuesdays were fully booked within a day." },
          { speaker: "Coordinator", text: "And finally, the new facility everyone's asking about: yes, we've added a café in the old storeroom." },
        ],
      },
      {
        type: "text",
        text: "Marking the script. Gap 11, capacity → '24': the correction 'we cap classes at twenty' is about class sizes, not the room's capacity — the question word decides which figure is the answer. Gap 12, evening class day → 'Thursday': the fully-booked Tuesdays are the rejection that proves it, and one word is exactly what the limit allows. Gap 13, new facility → 'café': 'storeroom' is the old facility, and the question's word 'new' does the sorting. Three gaps, three monologue disciplines: correction filtering, rejection reading, question-word precision.",
      },
      {
        type: "note",
        title: "Study planning",
        text: "Part 2 is the second rung: schedule it once Part 1's habits are automatic, because it withdraws the second voice while keeping the everyday vocabulary. It is the entry ticket to Parts 3 and 4 — the first place stamina, not skill, becomes the limit.",
      },
      {
        type: "example",
        title: "Part 2 marks, won and lost",
        items: [
          { english: "A museum guide opens with 'First of all, the ground floor'; a candidate already reading questions 11-13 lands on the right group before the first exhibit is named.", note: "The first signpost is the cheapest re-anchor in the part.", domain: "study" },
          { english: "A briefing says 'the market used to be on Saturdays; it's Sundays now' — the gap 'Market day: ____' takes 'Sunday', and 'used to' was the rejection.", note: "Time markers sort old arrangements from current ones.", domain: "daily" },
          { english: "A sports-centre tour runs 'past the main hall, and the physio room is the second door on your right' — two direction phrases place the physio room on the plan.", note: "Direction chains are a map's only grammar.", domain: "daily" },
          { english: "An organiser lists 'a raffle, a quiz and live music', then adds 'though the quiz depends on numbers' — for a 'which two are confirmed' item, the raffle and the music survive.", note: "Hedges disqualify; certainty survives.", domain: "work" },
          { english: "A candidate drifts during a three-minute induction, misses two gaps, and returns at 'Finally…' — the signpost hands back the thread.", note: "Recovery in monologues is structural, not lucky.", domain: "exam" },
          { english: "A volunteer coordinator reads a rota line as 'oh-double-two, six-four-one'; the note gap takes it as digits.", note: "Dictated codes live in Part 2 as much as Part 1.", domain: "work" },
        ],
      },
      {
        type: "mistakes",
        title: "Part 2 mistakes corrected",
        items: [
          { wrong: "A monologue means I can relax — one voice is easier than a conversation.", right: "One voice means no partner re-anchors you; the speaker's structure words must do the anchoring.", reason: "Conversations reset attention every turn; monologues punish drift with multi-question losses." },
          { wrong: "On maps I'll locate landmarks by their names on the plan.", right: "Track the walker's movement — position words place the answers, and the plan's names are labels to fill.", reason: "The audio gives positions like 'opposite the entrance'; the printed names are blanks, not clues." },
          { wrong: "If an option is mentioned, it must be the answer.", right: "In list-choosing items, mentions audition and verdict language appoints — wait for the decision.", reason: "Part 2's list items are built on mention-then-reject patterns; the verdict, not the mention, carries the mark." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Map the question groups to the page; on map items, find the orientation point and put your eyes on it."],
          ["While the clock runs", "Ride the signposts ('First of all… Now… Finally…'); translate direction phrases as they land."],
          ["If you are stuck", "Drifted? Stop, breathe once, catch the next signpost — the structure returns you within a sentence."],
          ["Final minutes", "Audit the rejected options: every list item you marked should name a survivor, not a mention."],
        ],
      },
      {
        type: "summary",
        points: [
          "Part 2: one voice, an everyday or social context, questions 11 to 20 — the section's first stamina test.",
          "Signposts ('First of all… Now… Finally…') mark the block boundaries the question groups stand under.",
          "Maps move by direction chains: translate 'past, opposite, second left' the moment you hear it.",
          "List-choosing items run on mention-then-reject; verdict language appoints the answer.",
          "Study planning: train Part 2 once Part 1's habits are automatic — it is the entry ticket to Parts 3 and 4.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "On a plan, whose frame do directions use?", options: ["The walker's — the speaker's moving frame", "The page's north", "Whoever is listening"], correctIndex: 0, explanation: "'On your left' rotates as the tour turns, so translate immediately rather than trusting the page.", from: "Map and diagram labelling in depth" },
          { question: "What do 'First of all… Now… Finally…' do in a talk?", options: ["Mark block boundaries", "Fill dead air", "Signal accent changes"], correctIndex: 0, explanation: "They open the blocks that question groups stand under — structure made audible.", from: "Core skills: conversations, specific information, main ideas, opinions" },
          { question: "An unfamiliar narrator starts Part 2. What is the published accent range?", options: ["British, Australian, New Zealand, North American", "British only", "One accent per test"], correctIndex: 0, explanation: "The range is published, so a new voice at part-open is format rather than emergency.", from: "Recognising different accents" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the briefing, then answer.",
        hints: ["'Finally' opens the last block."],
        audioText: "Coordinator: First of all, thanks for coming. The main hall is being repainted, so this week only the small hall is in use. Now, parking: the riverside car park is closed on Sundays. Finally, the evening class moves to the annex for the rest of term.",
        question: "Where does the evening class meet this term?",
        acceptedAnswers: ["the annex", "annex"],
        keywords: ["annex"],
        feedback: fb(
          "The annex",
          "'Finally' opens the last block and the move is stated plainly — the hall and the car park lines belong to earlier question groups in the same talk.",
          "'The small hall' belongs to the first block, and 'this week only' expires long before the term does.",
        ),
        tags: ["ielts", "part-2"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "What makes a Part 2 monologue followable?",
        hints: ["What replaces the second voice?"],
        options: [
          { id: "a", text: "The speaker's signposts, which mark each block and its question group." },
          { id: "b", text: "The questions being read aloud during the talk." },
          { id: "c", text: "A second speaker summarising at the end." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The speaker's signposts, which mark each block and its question group.",
          "Signposts verbalise the talk's structure; mapping them to the page replaces the anchoring a conversation's voices provide.",
          "(b) never happens — the audio never reads your questions; (c) describes no part of the section.",
        ),
        tags: ["ielts", "part-2"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the guide, then type the weekday opening time as digits.",
        hints: [],
        audioText: "Guide: The Visitor Centre opens at nine forty-five on weekdays, and the last entry is at four thirty sharp.",
        acceptedAnswers: ["9.45", "9:45", "09.45"],
        feedback: fb(
          "9.45",
          "Two clock times were spoken and the question asked for opening; digits capture the right one without spending any word allowance.",
          "4.30 is the last-entry time — a neighbour figure placed there to catch the hurried.",
        ),
        tags: ["ielts", "part-2"],
      }),
      ex({
        type: "multi-select",
        difficulty: "easy",
        skill: "listening",
        prompt: "Select every typical Part 2 context.",
        hints: [],
        options: [
          { id: "a", text: "A guided tour of a restored manor house" },
          { id: "b", text: "A briefing for new museum volunteers" },
          { id: "c", text: "Two flatmates arguing about chores" },
          { id: "d", text: "A seminar on research methods" },
        ],
        correctOptionIds: ["a", "b"],
        feedback: fb(
          "The manor tour and the volunteer briefing",
          "Part 2 is one voice in an everyday or social setting; the flatmates are a conversation and the seminar is academic territory.",
          "The two-voice and academic contexts belong to Parts 3 and 4 respectively.",
        ),
        tags: ["ielts", "part-2"],
      }),
      ex({
        type: "complete-sentence",
        difficulty: "medium",
        skill: "listening",
        prompt: "Complete the tracking rule.",
        hints: [],
        sentenceStart: "When a Part 2 speaker says 'Now, moving on to the ticket prices', a trained listener ",
        sentenceEnd: " immediately.",
        acceptedAnswers: ["moves to the price question group", "shifts to the price question group"],
        keywords: ["price", "questions"],
        feedback: fb(
          "Moves to the price question group immediately",
          "Each signpost names the next block, and the matching questions are waiting on your page — the shift is trained, not optional.",
          "Waiting to hear the figures first leaves the questions unread exactly when they arrive.",
        ),
        tags: ["ielts", "part-2"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: with no second voice, what anchors you through a Part 2 talk?",
        hints: [],
        question: "What carries the anchoring load in a monologue?",
        acceptedAnswers: ["signpost words", "the signposts", "the speaker's signposts"],
        keywords: ["signpost"],
        feedback: fb(
          "The signpost words",
          "Block announcements like 'Now…' and 'Finally…' replace conversational turn-taking as the structure cue, and they map directly onto question groups.",
          "Concentration alone is not a system — structure words are.",
        ),
        tags: ["ielts", "part-2"],
      }),
    ],
    homework: [
      "Listen to one five-minute single-voice talk — a museum audio guide or a council webcast — once only; write the signposts as they land, then check the talk's actual structure against your list.",
      "Take one map practice: put your finger on the orientation point before play, and write the direction chain in order as the tour unfolds.",
    ],
  },
  {
    slug: "ielts-listening-part3",
    title: "Part 3 — Educational and training conversations",
    description:
      "Two to four voices on one project: matching and multiple choice dominate, opinions must be attributed to their owners, paraphrase density rises sharply, and speaker-change tracking becomes the tested skill.",
    objectives: [
      "track two to four voices and attribute each opinion to its owner",
      "follow paraphrased questions through dense educational discussion",
      "separate attitude from fact in tutor and student speech",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Part 3 is where the section changes gear: two to four speakers — usually students, sometimes a tutor — discussing a project, an assignment or a course. The talk is educational but human: people propose, doubt, agree and change their minds, and the questions are built on exactly those moves. Matching and multiple choice dominate, and both live or die on attribution: hearing not just what was said, but who owns it. Train the tracking first; the task types reward it.",
        beforeYouStart: [
          "You know the matching and multiple-choice routines.",
          "You can follow two voices through corrections and overlaps.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening Part 3 — questions 21 to 30, an educational or training discussion"],
          ["Task & question types", "Matching and multiple choice dominate; sentence completion and choosing from a list appear"],
          ["What is assessed", "Attribution and attitude: who claims, who doubts, who agrees — and how strongly"],
          ["Why this matters", "Part 3's paraphrase density is the section's steepest step; attribution is the rope over it"],
        ],
      },
      {
        type: "text",
        text: "The part's difficulty is structural, and it comes in three layers. First, voices: two to four of them, overlapping at the liveliest moments, with each speaker's stance attached to their own sentences. Second, paraphrase: the questions rarely quote the audio — a question about 'the students agreeing on the timeline' is asked while the audio says 'we're both happy with May, then'. Third, attitude versus fact: a tutor's 'that's an interesting approach' can be praise or polite doubt, and the multiple-choice item will ask which. Every technique in this lesson exists to keep those three balls in the air.",
      },
      {
        type: "steps",
        title: "The Part 3 routine",
        steps: [
          { title: "Voice-map the speakers in the first thirty seconds", text: "Names arrive early — 'So, Amira, have you…?' — and you should fix each voice to a name the moment it speaks, refreshing the map whenever a new voice enters. Attribution starts as sound recognition, not analysis.", examples: [{ english: "Three participants: Amira low and steady, Josh faster, the tutor asking questions only — the map set by the second exchange.", note: "Voice maps are built, not given." }] },
          { title: "Follow stance language, not topics", text: "Opinions ride small words: 'I'd say', 'to be honest', 'I'm not sure that works', 'supposedly'. The questions ask who believes what, so your ear hunts the stance words and their owners first, the facts underneath second.", examples: [{ english: "'It's comprehensive, though maybe too long' — one speaker, two stances, and a matching item may live on either half.", note: "Stance words are the answer's skeleton." }] },
          { title: "Track disagreement to resolution", text: "Disagreements in Part 3 usually resolve: someone concedes, or a compromise lands — 'what if we split it?'. The resolved position is the answer; the opening positions are the distractors.", examples: [{ english: "Josh wants surveys, Amira wants interviews, the tutor suggests both on a smaller scale — 'both' is where the mark lives.", note: "Resolutions close questions; openings open them." }] },
        ],
      },
      {
        type: "dialogue",
        title: "Worked mini-example — a fieldwork project review",
        context: "Questions: 'Who runs the pilot interviews?' (options: Amira · Josh · the tutor) and 'What is the tutor's main concern?' (options: the sample size · the interview method · the write-up).",
        lines: [
          { speaker: "Tutor", text: "So the pilot study — who's running the interviews?" },
          { speaker: "Amira", text: "I could, but my pronunciation of the technical terms is shaky." },
          { speaker: "Josh", text: "Happy to take that on — I've interviewed before." },
          { speaker: "Tutor", text: "Good. My only real worry is the sample size; ten feels thin for a pilot." },
        ],
      },
      {
        type: "text",
        text: "Marking the script. Who runs the pilot interviews → Josh: Amira declines with a reason — a hedged refusal is still a refusal — and Josh's 'happy to take that on' is plain ownership. The tutor's main concern → the sample size: 'my only real worry' labels it as a concern and as the main one, while the interviews were already settled business. Two question types, one skill: attach each claim to its owner and read the stance labels the speakers hand you.",
      },
      {
        type: "note",
        title: "Study planning",
        text: "Part 3 is the steep middle of the section: schedule it after Parts 1 and 2, when capture is automatic and signpost-following is a habit. It needs everything they taught plus voice maps — do not start your part-by-part training here.",
      },
      {
        type: "example",
        title: "Part 3 marks, won and lost",
        items: [
          { english: "A student says 'I'm not sure the data supports that'; the matching option 'confident about conclusions' dies in four words.", note: "Hedges are stance markers, not filler.", domain: "exam" },
          { english: "Two voices overlap — '—I'll write it up — actually, I'd rather' — and the second voice's preference is the surviving claim.", note: "Overlaps resolve to the last stance standing.", domain: "study" },
          { english: "A tutor says 'that's certainly one way to frame it'; the multiple-choice answer is 'reserved about the idea', not 'enthusiastic'.", note: "Politeness reads as reservation in attitude questions.", domain: "study" },
          { english: "The question says 'the students agree to shorten the report'; the audio says 'maybe trim section two a bit' — a paraphrase bridge crossed by meaning, not words.", note: "Agreement items are paraphrase items in disguise.", domain: "exam" },
          { english: "Four voices allocate a presentation's sections in under a minute; a candidate with a voice map catches all four assignments while a note-taker catches two.", note: "Speed of allocation is why voice maps precede note-taking.", domain: "work" },
          { english: "A candidate hears all four voices clearly and still scores four out of ten — every opinion was attributed to the most confident speaker instead of its owner.", note: "Confidence is not ownership; attribution is the skill.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Part 3 mistakes corrected",
        items: [
          { wrong: "The most confident-sounding speaker must be right.", right: "Confidence is a voice quality; answers follow ownership — who actually claims the position.", reason: "Part 3 attaches correct stances to hesitant speakers and wrong ones to confident voices, because that is what real discussions do." },
          { wrong: "I'll listen for the question's exact words in the audio.", right: "Listen for meaning paraphrased — the audio rewords every question stem.", reason: "Question writers compress the audio's sentences, so hunting exact wording misses the answer by a synonym." },
          { wrong: "The tutor's opinions and the students' count the same.", right: "Track who is speaking: tutor claims and student claims are different matching answers.", reason: "Attribution items deliberately spread views across roles, and the role is part of the answer." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read stems and options in the introduction; predict the paraphrase each option might wear."],
          ["While the clock runs", "Keep the voice map current; log stances with their owners; follow disagreements to resolution."],
          ["If you are stuck", "Two candidates for one matching item? Park it and serve the next — the shrunk set decides it later."],
          ["Final minutes", "Check that every Part 3 answer names an owner wherever the question asks for one."],
        ],
      },
      {
        type: "summary",
        points: [
          "Part 3: two to four speakers, an educational or training discussion, questions 21 to 30.",
          "Attribution is the skill: stances belong to owners, and the confident voice is not always the owning voice.",
          "Paraphrase density rises sharply — hunt meaning, never exact question wording.",
          "Disagreements resolve; the resolution is the answer, and the openings are distractors.",
          "Study planning: schedule Part 3 after Parts 1 and 2 — it needs their habits plus voice maps.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "What carries the mark in a matching item?", options: ["Ownership of the statement", "Mention of its words", "Speaking longest"], correctIndex: 0, explanation: "The audio attaches option vocabulary to non-owners on purpose; the owner takes the mark.", from: "Matching in depth" },
          { question: "Which distractor build uses 'never' and 'only'?", options: ["Too-absolute", "Mentioned-but-wrong", "Right-words-wrong-time"], correctIndex: 0, explanation: "Absolute words overstate cautious audio — a named distractor family you can reject on sight.", from: "Multiple choice in depth" },
          { question: "What must every completion answer survive after the audio ends?", options: ["The spelling and limit passes", "A second hearing", "Peer review"], correctIndex: 0, explanation: "The check window audits spelling and word limits; nothing in the format re-hears audio.", from: "Spelling requirements" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the tutorial, then answer.",
        hints: ["Decline, then ownership."],
        audioText: "Tutor: So who's analysing the survey results? Amira: I'd rather not — statistics make me nervous. Ben: I did a stats module last term, so that's fine by me. Amira: Great — I'll handle the write-up instead.",
        question: "Who will analyse the survey results?",
        acceptedAnswers: ["Ben"],
        keywords: ["Ben"],
        feedback: fb(
          "Ben",
          "Amira declines with a reason and trades the task away; Ben's 'that's fine by me' is ownership, and the write-up trade confirms the allocation.",
          "Amira spoke first and most, but first is not ownership — she refused the task in her opening sentence.",
        ),
        tags: ["ielts", "part-3"],
      }),
      ex({
        type: "match",
        difficulty: "medium",
        skill: "listening",
        prompt: "Match each spoken line to the attribution it deserves.",
        hints: ["Hunt each line's stance words."],
        leftItems: [
          { id: "l1", text: "'I'd rather not, if that's OK — statistics make me nervous.'" },
          { id: "l2", text: "'Happy to take that on — I've done it before.'" },
          { id: "l3", text: "'That's certainly one way to frame the question.'" },
        ],
        rightItems: [
          { id: "r1", text: "a refusal, politely dressed" },
          { id: "r2", text: "plain ownership of a task" },
          { id: "r3", text: "reserved agreement, not enthusiasm" },
          { id: "r4", text: "a correction of a figure" },
        ],
        pairs: [
          { leftId: "l1", rightId: "r1" },
          { leftId: "l2", rightId: "r2" },
          { leftId: "l3", rightId: "r3" },
        ],
        feedback: fb(
          "Nervous refusal → politely dressed refusal; happy to take that on → task ownership; certainly one way → reserved agreement",
          "Each line carries its stance in the small words — 'rather not' refuses, 'happy to' owns, 'certainly one way' reserves — which is exactly the attribution skill Part 3 marks.",
          "None of the three lines corrects a figure; the fourth option exists to be left unused.",
        ),
        tags: ["ielts", "part-3"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "A tutor says: 'That's an interesting approach — it might struggle with the sample size, though.' What is the tutor's stance?",
        hints: [],
        options: [
          { id: "a", text: "Enthusiastic approval of the approach." },
          { id: "b", text: "Qualified interest with a practical reservation." },
          { id: "c", text: "Complete rejection of the approach." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Qualified interest with a practical reservation.",
          "'Interesting' grants attention and 'might struggle' plants the reservation — Part 3 attitude answers live in exactly this two-part balance.",
          "(a) ignores the reservation; (c) ignores the granted interest — both read only half the sentence.",
        ),
        tags: ["ielts", "part-3"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: what rises sharply in Part 3 compared with Parts 1 and 2?",
        hints: [],
        question: "Which language feature increases most in Part 3's questions?",
        acceptedAnswers: ["paraphrase", "paraphrase density", "paraphrasing"],
        keywords: ["paraphrase"],
        feedback: fb(
          "Paraphrase density",
          "Questions reword the audio instead of quoting it, so meaning-following replaces word-matching as the listening mode from this part onwards.",
          "Speed and accent change little between parts; density of rewording is the designed step-up.",
        ),
        tags: ["ielts", "part-3"],
      }),
      ex({
        type: "dictation",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the student, then type the sentence exactly.",
        hints: [],
        audioText: "Student: To be honest, the conclusion feels rushed — the rest of the argument is solid.",
        acceptedAnswers: ["To be honest, the conclusion feels rushed — the rest of the argument is solid."],
        feedback: fb(
          "To be honest, the conclusion feels rushed — the rest of the argument is solid.",
          "'To be honest' flags the stance before the claim arrives; capturing both halves intact keeps the attribution data on the page.",
          "Dropping the opener loses the stance marker the part's questions are built on.",
        ),
        tags: ["ielts", "part-3"],
      }),
      ex({
        type: "multi-select",
        difficulty: "easy",
        skill: "listening",
        prompt: "Select every feature that belongs to Part 3.",
        hints: ["Count the voices, then the task types."],
        options: [
          { id: "a", text: "Two to four speakers in an educational discussion" },
          { id: "b", text: "Matching and multiple choice as the dominant families" },
          { id: "c", text: "Opinions attributed to named speakers" },
          { id: "d", text: "One continuous academic lecture with no pauses" },
        ],
        correctOptionIds: ["a", "b", "c"],
        feedback: fb(
          "The multi-voice discussion, the matching and MCQ dominance, and attributed opinions",
          "Part 3 is conversational and educational; the unbroken lecture is Part 4's signature, not this part's.",
          "One voice for ten questions belongs to the academic monologue that closes the section.",
        ),
        tags: ["ielts", "part-3"],
      }),
    ],
    homework: [
      "Watch one panel or group-discussion clip with three or more voices once; pause every thirty seconds and write who owns the last claim — then re-watch and score your attributions.",
      "Take any Part 3 transcript: underline every stance marker ('I'd say', 'not sure', 'happy to') and label each with its owner.",
    ],
  },
  {
    slug: "ielts-listening-part4",
    title: "Part 4 — Academic monologues",
    description:
      "The summit: one lecturer, one continuous academic talk, ten questions and no pauses — note completion usually under ONE WORD ONLY, lecture signposting as your only map, and the stamina to hold ten gaps through a single hearing.",
    objectives: [
      "pre-read a page of notes into a lecture map before the audio runs",
      "follow lecture signposting through one unbroken academic talk",
      "hold ten note-completion gaps across a single listening without drifting",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Part 4 is the section's summit: one lecturer, one academic topic — history, biology, urban planning — one continuous talk and ten questions with no pauses to regroup. Note completion dominates, usually under ONE WORD ONLY, so every answer is one exact word captured at lecture pace. The part rewards everything the module has built: pre-reading becomes lecture mapping, signposts become the only voice guidance, and the two-pass habit becomes a stamina discipline.",
        beforeYouStart: [
          "You have trained Parts 1 to 3 and note completion.",
          "You can follow a five-minute single-voice talk without drifting.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening Part 4 — questions 31 to 40, the academic close of the section"],
          ["Task & question types", "Note and summary completion dominate, usually ONE WORD ONLY; multiple choice appears occasionally"],
          ["What is assessed", "One exact word, heard, spelled and numbered correctly, from ten minutes of academic speech"],
          ["Why this matters", "Part 4 is where stamina meets strictness — the last ten questions decide whether the earlier work holds its value"],
        ],
      },
      {
        type: "text",
        text: "Before the audio, the page of notes is your only map, and you get about a minute to read it — so read it structurally, not word by word. Run your eyes down the headings and the surrounding text and ask what each section is about: the notes compress the lecture's route into a page, and once you hold that route, the lecturer's signposts simply tell you where along it you are.",
      },
      {
        type: "steps",
        title: "The Part 4 routine",
        steps: [
          { title: "Build the lecture map in the introduction", text: "Read the notes' headings and the sentences around each gap; mark what kind of word every gap wants — noun, verb, figure, date. A mapped page means every signpost has an address to arrive at.", examples: [{ english: "Notes reading 'Background · Early attempts · The 1998 survey · Criticism' announce four blocks, with the gaps clustered two to a block.", note: "Headings are the lecture's timetable." }] },
          { title: "Ride the lecture's signposts", text: "Academic speakers signpost as a habit: 'I'll begin with…', 'Turning now to…', 'Before I conclude…'. Each phrase opens the block your next questions sit under — the monologue equivalent of a new speaker arriving.", examples: [{ english: "'Turning now to the funding question' arrives exactly when the notes' Funding section starts — eyes to those gaps.", note: "Signposts are section changes made audible." }] },
          { title: "Capture one word, exactly, and move", text: "Under ONE WORD ONLY there are no second choices: the answer is the lecture's exact word, singular or plural as spoken, spelled correctly or doomed. Capture it, check the next gap, keep walking — this part gives no time to dwell.", examples: [{ english: "The lecture says 'the population declined quite sharply'; the gap after 'Population ____' takes 'declined' — the gap's grammar named the word class.", note: "The gap's grammar predicts; the lecture supplies." }] },
        ],
      },
      {
        type: "dialogue",
        title: "Worked mini-example — a mini-lecture on urban beekeeping",
        context: "Note gaps: 31 'Cities kept bees for ____' · 32 'Hives gained popularity after a 2007 ____' · 33 'Critics worry about ____ with wild species' — all ONE WORD ONLY.",
        lines: [
          { speaker: "Lecturer", text: "I'll begin with some history. Urban beekeeping is older than most people assume — Victorian cities kept hives for honey more than a century ago." },
          { speaker: "Lecturer", text: "Turning now to the modern boom: interest surged after a 2007 report on colony collapse, when municipal rooftops began hosting hives." },
          { speaker: "Lecturer", text: "Before I conclude, the criticism: some ecologists fear competition — urban bees may outcompete wild pollinators for flowers." },
        ],
      },
      {
        type: "text",
        text: "Marking the script. Gap 31 → 'honey': 'kept hives for honey' gives the noun after the preposition, and 'more than a century ago' was decoration for a gap with no date. Gap 32 → 'report': the gap's 'a 2007 ____' wanted the noun that follows the year, while 'boom' and 'interest' belonged to the surrounding sentence. Gap 33 → 'competition': the lecturer's own label — 'the criticism: some ecologists fear competition' — hands the answer over. Three blocks, three signposts, three exact words: the whole part in miniature.",
      },
      {
        type: "note",
        title: "Study planning",
        text: "Part 4 is the summit: schedule it last in your part-by-part plan, when note-completion habits and stamina are built. Ten gaps in one listening is an endurance event — train it on the foundation of Parts 1 to 3, never as a starting point.",
      },
      {
        type: "example",
        title: "Part 4 marks, won and lost",
        items: [
          { english: "A candidate reads the notes' headings in the introduction and knows the lecture has four blocks before its first sentence is spoken.", note: "The map is built from the page, not the audio.", domain: "exam" },
          { english: "'Turning now to the second experiment' arrives; a candidate whose finger was on the notes' second-experiment gap is already waiting.", note: "Signposts plus map equals position.", domain: "study" },
          { english: "A gap after 'The toxin affects the ____' takes 'liver' — the lecturer's exact word — while 'kidneys', a mentioned neighbour, is the trap.", note: "ONE WORD ONLY rewards exactness, not thoroughness.", domain: "exam" },
          { english: "A lecturer calls the scheme 'a modest success'; a gap reading 'The scheme was described as ____' takes 'modest', the lecturer's own adjective.", note: "The notes' grammar names which word of the phrase is the answer.", domain: "work" },
          { english: "Halfway through a ten-minute talk a candidate drifts for a sentence; the next signpost restores position without loss.", note: "Signposts are the stamina safety net.", domain: "study" },
          { english: "A gap wants reasons in the plural ('Reasons: ____'); the lecture says 'two main concerns' — and the plural -s must reach the page.", note: "Even one-word answers obey number agreement.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Part 4 mistakes corrected",
        items: [
          { wrong: "I'll read the notes word by word in the introduction to memorise them.", right: "Read for structure — headings, block boundaries, each gap's word class — the map, not the words.", reason: "One minute cannot memorise a page, but it can map one, and the map is what the signposts plug into." },
          { wrong: "Part 4 must be much faster, so I'll read and type faster too.", right: "The pace is a steady lecture pace; the density rises — keep your rhythm and let the map carry the position.", reason: "Rushing breaks the two-pass habit exactly where stamina matters most." },
          { wrong: "One-word answers are easy marks — no limits to break.", right: "One word is the strictest limit of all: the exact word, the right plural, the right spelling — no articles to lean on.", reason: "ONE WORD ONLY removes every safety margin; exactness becomes the whole mark." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Build the lecture map: headings, block count, each gap's word class — in the introduction, not the audio."],
          ["While the clock runs", "Ride 'I'll begin… Turning now… Before I conclude…'; capture each exact word and step straight to the next gap."],
          ["If you are stuck", "A missed word is gone — leave the gap, hold the map, and be waiting at the next signpost."],
          ["Final minutes", "Give every Part 4 answer the one-word audit: exact word, plural if spoken, spelling pass."],
        ],
      },
      {
        type: "summary",
        points: [
          "Part 4: one academic voice, one continuous talk, ten questions, no pauses — the summit of the section.",
          "Note completion dominates, usually ONE WORD ONLY: the exact word, the right plural, correct spelling.",
          "The lecture map is built from the notes' headings before the audio; signposts then announce position.",
          "Lecture signposts — 'I'll begin with… Turning now to… Before I conclude…' — are the only voice guidance.",
          "Study planning: schedule Part 4 last; it spends the habits of Parts 1 to 3 and repays them with the final ten.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          { question: "What does 'NO MORE THAN TWO WORDS' permit that 'ONE WORD ONLY' does not?", options: ["A second word", "Numbers in place of words", "Nothing — they are the same"], correctIndex: 0, explanation: "The ceiling rises from one word to two; number allowances belong to the AND/OR A NUMBER rubrics.", from: "Question instructions and answer limits" },
          { question: "In note completion, what does a gap's surrounding text give you before the audio?", options: ["The content type and grammar of the answer", "The exact answer words", "The speaker's accent"], correctIndex: 0, explanation: "Layout and surrounding text predict each gap — the completion family's core routine.", from: "Completion: forms, notes, tables, flow-charts, sentences" },
          { question: "How do signposts rescue a drifted listener?", options: ["They restore position within a sentence", "They repeat the missed answer", "They slow the speaker down"], correctIndex: 0, explanation: "The next block announcement tells you where you are on the map even after a lapse — recovery without replay.", from: "Core skills: conversations, specific information, main ideas, opinions" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the lecture extract, then answer.",
        hints: ["The date anchors the clause you need."],
        audioText: "Lecturer: Early planners treated the river as a drain. Only in the 1960s did cities begin restoring the banks, and by 1980 the waterfront had become public space again.",
        question: "According to the lecture, what had the waterfront become by 1980?",
        acceptedAnswers: ["public space"],
        keywords: ["public space"],
        feedback: fb(
          "Public space",
          "The date 1980 anchors the clause, and the banks-to-waterfront paraphrase must be followed to the exact noun phrase the question asks for.",
          "'A drain' is the earlier description of the river, and the restoration work belongs to the banks rather than the outcome.",
        ),
        tags: ["ielts", "part-4"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt: "What is the right use of Part 4's introduction time?",
        hints: ["One minute, one map."],
        options: [
          { id: "a", text: "Read the notes end to end for structure: headings, blocks, each gap's word class." },
          { id: "b", text: "Memorise the notes word by word." },
          { id: "c", text: "Rest — the lecture will explain everything." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Read the notes end to end for structure: headings, blocks, each gap's word class.",
          "A structural map is buildable in the available minute, and it is what the signposts plug into for the whole talk.",
          "(b) overloads a one-minute window; (c) hands away the part's only prediction resource.",
        ),
        tags: ["ielts", "part-4"],
      }),
      ex({
        type: "dictation",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the lecturer, then type the sentence exactly.",
        hints: [],
        audioText: "Lecturer: The survey covered fourteen cities, and the pattern was consistent: greener streets reported measurably lower summer temperatures.",
        acceptedAnswers: ["The survey covered fourteen cities, and the pattern was consistent: greener streets reported measurably lower summer temperatures."],
        feedback: fb(
          "The survey covered fourteen cities, and the pattern was consistent: greener streets reported measurably lower summer temperatures.",
          "Academic dictation trains the exactness Part 4 marks: figures, adverbs and comparatives must all survive the keyboard intact.",
          "Paraphrasing during dictation practice breaks the exact-capture habit this part depends on.",
        ),
        tags: ["ielts", "part-4"],
      }),
      ex({
        type: "multi-select",
        difficulty: "medium",
        skill: "listening",
        prompt: "Select every fact about Part 4.",
        hints: [],
        options: [
          { id: "a", text: "One speaker delivering an academic talk" },
          { id: "b", text: "Ten questions with no pauses between them" },
          { id: "c", text: "Note completion usually under ONE WORD ONLY" },
          { id: "d", text: "The recording is played twice" },
        ],
        correctOptionIds: ["a", "b", "c"],
        feedback: fb(
          "One academic voice, ten unbroken questions, one-word notes",
          "Part 4 is a single continuous lecture followed by ten questions heard once — the strictest format facts in the section.",
          "No part of the Listening test is ever played twice.",
        ),
        tags: ["ielts", "part-4"],
      }),
      ex({
        type: "complete-sentence",
        difficulty: "medium",
        skill: "listening",
        prompt: "Complete the pre-reading rule.",
        hints: [],
        sentenceStart: "Before the lecture begins, the pre-read turns the page of notes into ",
        sentenceEnd: " of the whole talk.",
        acceptedAnswers: ["a map", "a route map"],
        keywords: ["map"],
        feedback: fb(
          "A map of the whole talk",
          "Headings and surrounding text give the lecture's route in advance, so each signpost becomes a position fix rather than a surprise.",
          "A transcript or a word list is neither available nor useful; structure is what the minute buys.",
        ),
        tags: ["ielts", "part-4"],
      }),
      ex({
        type: "short-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "One phrase: which word limit usually governs Part 4's notes?",
        hints: [],
        question: "What limit usually sits above Part 4's note gaps?",
        acceptedAnswers: ["ONE WORD ONLY", "one word only", "one word"],
        keywords: ["one word"],
        feedback: fb(
          "ONE WORD ONLY",
          "The academic notes are strict: one exact word per gap, which makes spelling and number agreement the whole of the mark.",
          "'No limit' and 'three words' describe easier regimes Part 4 does not offer.",
        ),
        tags: ["ielts", "part-4"],
      }),
    ],
    homework: [
      "Take one five-minute single-voice academic talk — a public lecture podcast — and read its summary page first as your notes; then listen once and fill ten self-made one-word gaps.",
      "Collect five lecture signpost phrases from any academic talk this week and note exactly where each lands relative to the speaker's sections.",
    ],
  },
];
