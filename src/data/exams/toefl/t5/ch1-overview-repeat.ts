/**
 * TOEFL iBT Academy — Module 5, Speaking (T-M5, PROMPT 48, Task 7).
 *
 * Chapter batch 1: the section overview unit plus the Listen and Repeat
 * unit (three lessons). Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts); validated by
 * scripts/check-lesson-file.ts.
 *
 * Format facts verified against ETS's published 2026 pages: Speaking is
 * 11 items in ~8 minutes, linear — seven Listen-and-Repeat sentences, each
 * played once and repeated aloud inside a fixed window (8 seconds for the
 * first items, 10 for the middle, 12 for the longest; the windows grow with
 * sentence length), followed by four Take-an-Interview items (question
 * shown and spoken, brief preparation, ~30-second spoken answer) rated
 * against scoring guides organised around Delivery, Language use and
 * Topic development. Honesty rules honoured here: pronunciation teaching
 * is accent-neutral (intelligibility, stress, rhythm and clarity — no
 * national accent is ever treated as a target), memorised answers are
 * taught against, practice feedback is framed as an estimate for study
 * purposes, and nothing reproduces official ETS content.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T5_CH1: LessonSpec[] = [
  // -------------------------------------------------------------------------
  // Unit 1 — The section
  // -------------------------------------------------------------------------
  {
    slug: "toefl-speaking-overview",
    title: "Understanding the Speaking section",
    description:
      "The complete map of the 2026 Speaking section: eleven items in about eight minutes, the two task families, the single-play rule, the 8/10/12-second windows, and the three dimensions interview answers are rated on.",
    objectives: [
      "recite the Speaking section's item count, order and timing without notes",
      "describe how a Listen-and-Repeat item and an interview item actually run",
      "name the three dimensions the interview scoring guides are organised around",
      "explain why practice feedback is an estimate rather than an official result",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Speaking closes the timed part of your test day: eleven items delivered in roughly eight minutes, with no examiner in the room. This lesson maps the section item by item — seven Listen-and-Repeat sentences followed by four interview questions — and shows what the raters listen for in each family, so that every practice hour you spend afterwards matches the real test.",
        beforeYouStart: [
          "You can recite the 2026 format card: 50 Reading, 47 Listening, 11 Speaking and 12 Writing items.",
          "You know the four sections run in a fixed order and that Speaking arrives last.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the last of the four timed sections, about eight minutes long"],
          ["Task & question types", "Seven Listen-and-Repeat sentences plus four interview questions, all answered into a microphone"],
          ["What is assessed", "Accurate, complete repetition of heard sentences, and interview answers rated against scoring guides for Delivery, Language use and Topic development"],
          ["Why this matters", "Training the wrong task shape wastes weeks; knowing the exact machinery lets every drill transfer to the real screen"],
        ],
      },
      { type: "heading", text: "The shape of the eight minutes" },
      {
        type: "text",
        text: "The section is linear: everyone answers the same eleven items in the same order, and nothing adapts. The seven Listen-and-Repeat sentences come first, arranged roughly from shorter to longer, and the four interview questions follow. Each sentence is played exactly once, and you repeat it aloud inside a recording window whose length matches the sentence — eight seconds for the shortest items, ten for the middle ones and twelve for the longest. After the seventh sentence, the interview begins: a question appears on screen with the audio, you get a brief moment to gather one idea, and then you speak for roughly half a minute while the clock runs.",
      },
      {
        type: "definition",
        term: "Listen and Repeat",
        partOfSpeech: "noun phrase",
        definition: "A Speaking task in which a recorded sentence plays a single time and you say the whole sentence back into the microphone, completely and accurately, before the recording window closes.",
        example: {
          english: "The audio plays 'The library closes at midnight during exam week' and you bring that same sentence back inside the window.",
          translation: "",
        },
      },
      {
        type: "definition",
        term: "Take an Interview",
        partOfSpeech: "noun phrase",
        definition: "A Speaking task in which an everyday question is shown and spoken, a short preparation moment follows, and you record a spoken answer of about thirty seconds.",
        example: {
          english: "The screen asks which season of the year you enjoy most, and half a minute of recorded answer is yours to fill.",
          translation: "",
        },
      },
      { type: "heading", text: "What the raters listen for" },
      {
        type: "text",
        text: "Interview answers are scored against guides organised around three dimensions: Delivery — how clear, fluid and well-paced your voice is; Language use — how well grammar and vocabulary serve the answer; and Topic development — how fully and relevantly the idea is carried inside the time given. Repeated sentences are marked on a plainer yardstick: how accurately and completely the sentence comes back, with the key words in place and nothing essential missing. Any band figure a study platform prints under your recording is that platform's estimate for training purposes; official results come only from ETS scoring after a real sitting.",
      },
      {
        type: "table",
        title: "The eleven items on one card",
        headers: ["Item block", "How it runs", "What it rewards"],
        rows: [
          ["Listen and Repeat, early items", "Short sentences, single play, 8-second windows", "Complete, accurate reproduction at a steady pace"],
          ["Listen and Repeat, middle items", "Notice-length sentences, single play, 10-second windows", "The same standard held over a longer stretch"],
          ["Listen and Repeat, final items", "The longest sentences, single play, 12-second windows", "Chunk-by-chunk accuracy with no dropped words"],
          ["Take an Interview, four items", "Question shown and spoken, brief prep, about 30 seconds of speech", "Delivery, Language use and Topic development"],
        ],
      },
      {
        type: "comparison",
        title: "Two families, two demands",
        columns: ["Listen and Repeat", "Take an Interview"],
        rows: [
          { aspect: "Direction of the task", left: "You reproduce language the test gives you", right: "You construct language of your own" },
          { aspect: "Main skill", left: "Listening accuracy plus speech reproduction", right: "Idea development under a short clock" },
          { aspect: "Time pressure", left: "Windows of 8, 10 or 12 seconds", right: "Roughly thirty seconds of speaking after brief preparation" },
          { aspect: "What wins marks", left: "Completeness and accuracy of the repeated sentence", right: "Clear voice, controlled language and one developed idea" },
        ],
        verdict: "The section tests two halves of speaking — receiving and re-producing, then generating — and each half is trained by its own kind of drill.",
      },
      {
        type: "warning",
        title: "The single-play rule",
        text: "Each sentence reaches you exactly once, and no button will bring it back — so your preparation must build single-hearing habits from the first week, not replay-and-perfect habits that the test will never let you use.",
      },
      {
        type: "steps",
        title: "How one Listen-and-Repeat item runs",
        intro: "From the moment the audio starts to the moment the window closes, about twenty seconds pass. Here is the trained way through them.",
        steps: [
          {
            title: "Absorb the whole sentence",
            text: "Listen to the end without mouthing along; your job on the single hearing is to capture meaning groups, not isolated words.",
            examples: [
              { english: "A nine-word announcement is caught as three chunks, not nine separate items.", note: "Chunks are the unit of memory — loose words overflow it.", domain: "everyday" },
            ],
          },
          {
            title: "Read the window honestly",
            text: "The countdown shows how much room you have; an eight-second window means a short sentence, while a twelve-second window means you can afford measured pacing.",
            examples: [
              { english: "Twelve seconds with a long sentence still asks for steady rhythm, not a race.", note: "The window is calibrated to the sentence, not to your top speed.", domain: "everyday" },
            ],
          },
          {
            title: "Start promptly and keep going",
            text: "Begin within the first second and hold a continuous rhythm; if a word slips, carry the sentence forward rather than restarting from zero.",
            examples: [
              { english: "A small stumble in the middle costs less than a full restart that runs out of time.", note: "Completeness beats perfection inside these windows.", domain: "everyday" },
            ],
          },
          {
            title: "Finish inside the window",
            text: "Land the final words with half a second to spare so nothing is clipped by the recording cut-off.",
            examples: [
              { english: "Ending cleanly at eleven and a half seconds of a twelve-second window keeps every word audible.", note: "Clipped endings lose the very words that complete the meaning.", domain: "everyday" },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Six items, as they feel in the room",
        items: [
          { english: "The dining hall opens at seven on weekdays.", note: "A short, early item: eight seconds is generous for nine words at a calm pace — accuracy, not speed, is the target.", domain: "campus" },
          { english: "All visitors must report to the front desk before entering the laboratory.", note: "A middle item: ten seconds invites two natural chunks — the obligation and the destination that follows it.", domain: "work" },
          { english: "The professor has moved Thursday's seminar to a smaller room on the third floor.", note: "A late item: twelve seconds for fourteen words, and the details (day, room, floor) are exactly where marks are won and lost.", domain: "academic" },
          { english: "Which season of the year do you enjoy most, and why?", note: "A first-interview style question: one clear choice plus one honest reason fills the half minute without strain.", domain: "everyday" },
          { english: "Describe a skill you would like to learn in the future.", note: "A forward-looking question; the answer lives in future language plus the vocabulary of the skill you name.", domain: "personal" },
          { english: "Some students prefer studying alone, while others prefer study groups. Which do you prefer?", note: "A choice question: pick one side early, then give your reason — sitting on the fence wastes a third of the answer time.", domain: "campus" },
        ],
      },
      {
        type: "mistakes",
        title: "Section myths corrected",
        items: [
          { wrong: "A live examiner will sit across from me and ask the questions.", right: "The whole section runs through the computer: audio plays, questions appear on screen, and your voice is recorded for rating.", reason: "Candidates who expect a face-to-face conversation misread the medium — eye contact and gestures are worth nothing here, while voice quality is worth everything." },
          { wrong: "If I miss a sentence the first time, I can ask for it to be played again.", right: "Every sentence is played exactly once, and the recording window opens the moment it ends.", reason: "Replay expectations produce hesitation at the exact moment the format rewards a prompt, committed start." },
          { wrong: "Speaking comes early, so the earlier sections will warm me up.", right: "Speaking is the fourth and final timed section, arriving after Reading, Listening and Writing.", reason: "By the time the microphone opens you will have been working for over an hour — stamina and vocal readiness belong in your plan." },
          { wrong: "The band number my practice app prints under a recording is my official TOEFL score.", right: "Platform feedback is an estimate produced for study purposes; official results come from ETS scoring after the real sitting.", reason: "Estimates are useful for tracking your own trend, but treating them as results either inflates confidence or poisons it without basis." },
        ],
      },
      {
        type: "four-skills",
        title: "The section, walked end to end",
        reading: {
          text: "A practice briefing in the style of a tutor's walkthrough. The Speaking section arrives at the end of about eighty minutes of timed work, and it lasts roughly eight. Eleven items appear in a fixed order: seven Listen-and-Repeat sentences that grow from eight-second windows to twelve-second ones, then four interview questions delivered in text and audio. Each sentence is heard once and repeated once; each interview question offers a brief preparation moment and about thirty seconds of recorded answer. There is no examiner in the room, no replay of any audio, and no returning to an earlier item. Raters later score the interview answers against guides organised around Delivery, Language use and Topic development, and the repeated sentences are judged on how completely and accurately they come back.",
          task: "From the briefing, list the two task families in order and state how many items each carries.",
        },
        writing: {
          task: "A classmate insists that TOEFL Speaking is a fifteen-minute conversation with an examiner who can be asked to repeat any question. Correct the picture in 60–90 words: what the section actually contains, how long it lasts, how the audio works, and how the answers are rated.",
          guide: [
            "Open with the biggest correction: there is no examiner — audio, screen and microphone carry the whole section.",
            "Give the inventory in order: seven repeat sentences, then four questions, about eight minutes in total.",
            "State the audio rule plainly: one play per sentence, with windows of eight, ten and twelve seconds.",
            "Close with the three dimension names the interview answers are rated against.",
          ],
          model: "Your picture of TOEFL Speaking needs one large correction: no examiner is in the room. The section lasts about eight minutes and contains eleven items — seven Listen-and-Repeat sentences first, then four interview questions. Every sentence plays exactly once, and nothing will replay it; you repeat each one into the microphone inside a window of eight, ten or twelve seconds that grows with the sentence's length. The interview questions appear on screen with audio, and you record about thirty seconds of speech for each. Raters later score those answers against guides built on Delivery, Language use and Topic development — so clear, developed, well-held speech is the whole game.",
        },
        listening: {
          script: "Tutor: Let me set the Speaking clock for you. Seven sentences come first — the early ones are short and get eight-second windows, the middle ones ten, and the longest twelve. One play each, and the window opens the moment the audio ends. Then four interview questions: each arrives in text and audio, you take a breath to fix one idea, and you speak for about thirty seconds. Eight minutes, eleven items, one microphone — and no replays anywhere in it.",
          task: "Which three window lengths does the tutor name, and what decides which one an item gets?",
        },
        speaking: {
          task: "Describe the whole Speaking section aloud to a partner in under a minute, using only facts you can stand behind: the item count, the two families, the windows and the rating dimensions.",
          frames: [
            "The whole section lasts about…",
            "It opens with seven sentences that…",
            "The windows are eight, ten and twelve seconds, and they grow with…",
            "Then four interview questions, each rated for…",
          ],
          checklist: [
            "Did I give the item count and the two families in order?",
            "Did I state the window lengths and the single-play rule?",
            "Did I name the three rating dimensions?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Order", "The correction walks the section in delivery order — items, then audio rules, then rating — so the reader rebuilds the same mental map the lesson teaches."],
          ["Task fulfilment", "Each false belief is met with its exact counterpart: the examiner becomes a microphone, the repeat requests become the single-play rule, the invented length becomes the real one."],
          ["Vocabulary", "Format words appear in their plain sense — items, windows, raters, dimensions — the working vocabulary of the section itself."],
          ["Accuracy", "Numbers are stated the way the format states them: eleven items, about eight minutes, windows of eight, ten and twelve seconds, answers near thirty seconds."],
          ["Honesty", "The model sends practice feedback to its right place — an estimate for training, never a stand-in for official results."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Memorise the section card — eleven items, two families, windows of eight, ten and twelve seconds — until you can write it out from memory."],
          ["While the clock runs", "Treat every item as its own small world: a finished sentence is released, and a heard question gets one idea, chosen and started."],
          ["If you are stuck", "In a repeat item, say what you hold rather than nothing; in an interview item, bridge aloud ('the main thing for me is…') while the idea arrives."],
          ["Final minutes", "The last interview question deserves the same full half-minute as the first — fatigue is the only opponent left by then."],
        ],
      },
      {
        type: "summary",
        points: [
          "The Speaking section is linear and fixed: seven Listen-and-Repeat sentences followed by four interview questions — eleven items in about eight minutes.",
          "Sentences play once; you repeat them inside windows of eight, ten or twelve seconds that grow with sentence length.",
          "Interview answers run about thirty seconds after brief preparation, and are rated for Delivery, Language use and Topic development.",
          "No examiner sits in the room — audio, screen and microphone carry the whole section.",
          "Practice feedback from study platforms is an estimate for training, not an official ETS result.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions on earlier modules and this lesson.",
        items: [
          { question: "Which sections of the 2026 test adapt to your performance?", options: ["Reading and Listening", "Speaking and Writing", "All four sections"], correctIndex: 0, explanation: "Only Reading and Listening arrive in adaptive modules; Speaking runs as a fixed, linear set of items for every candidate.", from: "Adaptive testing: how the test adjusts to you" },
          { question: "How many items does each timed section carry?", options: ["Reading 40, Listening 40, Speaking 15, Writing 2", "Reading 50, Listening 47, Speaking 11, Writing 12", "The counts change for every candidate"], correctIndex: 1, explanation: "Those four counts are the arithmetic behind every pacing budget this Academy teaches.", from: "The 2026 format, section by section" },
          { question: "Who decides whether a band is high enough for your purpose?", options: ["The test centre", "Each receiving institution, through its own published minimums", "Whoever runs your preparation course"], correctIndex: 1, explanation: "The scale describes ability; the receiver sets the threshold — which is why your target comes from an institution's list, never from folklore.", from: "What is TOEFL iBT and who needs it?" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "What does the Speaking section of the 2026 TOEFL iBT contain?",
        hints: ["Two task families — count the items in each."],
        options: [
          { id: "a", text: "A live conversation with an examiner, followed by a written summary" },
          { id: "b", text: "Seven Listen-and-Repeat sentences and four interview questions — eleven items in all" },
          { id: "c", text: "Ten sentence reconstructions and one prepared presentation" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Seven Listen-and-Repeat sentences and four interview questions — eleven items in all",
          "The section runs eleven items in about eight minutes: the seven single-play sentences come first, then the four questions, each with roughly half a minute of recorded answer.",
          "A live examiner never enters the room — audio, screen and microphone carry the whole section, and no summary is written anywhere in it.",
        ),
        tags: ["toefl", "speaking", "format"],
      }),
      ex({
        type: "multi-select",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Select every true fact about the Listen-and-Repeat items.",
        hints: ["Think about how often the audio plays and how the window sizes are decided."],
        options: [
          { id: "a", text: "Each sentence is played exactly once" },
          { id: "b", text: "The recording windows grow with sentence length — eight, ten or twelve seconds" },
          { id: "c", text: "You may ask for a second play if the first hearing was unclear" },
          { id: "d", text: "The seven sentences are marked for accurate, complete repetition" },
        ],
        correctOptionIds: ["a", "b", "d"],
        feedback: fb(
          "Statements a, b and d are true; there is no second play.",
          "Single play, length-matched windows and a reproduction standard — that is the whole contract of the first seven items, and every drill in the next lesson is built on it.",
          "Statement (c) invents a service the format does not offer: hesitation at the opening is exactly what the single-play rule punishes.",
        ),
        tags: ["toefl", "speaking", "format"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Complete the interview fact.",
        hints: [],
        sentence: "After a brief preparation moment, each interview answer is recorded for about ___ seconds.",
        acceptedAnswers: ["30", "thirty"],
        feedback: fb(
          "30",
          "Roughly thirty seconds of recorded speaking time per question — the figure every practice interview in this module is timed against.",
          "A full minute belongs to other formats, and ten seconds starves Topic development; the half-minute is the target.",
        ),
        tags: ["toefl", "speaking", "format"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Read the practice briefing, then answer.",
        hints: [],
        passageTitle: "How your interview answers are rated",
        passage: "Practice briefings on the Speaking section usually describe the rating of interview answers with three named dimensions. Delivery covers the sound of the answer: clarity, fluidity, pace and how much effort a listener spends following it. Language use covers grammar and vocabulary — whether forms stay controlled and whether words fit the topic. Topic development covers the content: whether the answer addresses the question asked and how fully the idea is carried inside the time. Repeated sentences, by contrast, are judged on a plainer yardstick: how completely and accurately the sentence comes back.",
        question: "According to the briefing, what does the Delivery dimension cover?",
        options: [
          { id: "a", text: "The accuracy and completeness of repeated sentences" },
          { id: "b", text: "The sound of the answer — clarity, fluidity, pace and listener effort" },
          { id: "c", text: "The number of ideas an answer contains" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The sound of the answer — clarity, fluidity, pace and listener effort",
          "Delivery is the voice dimension; sentence accuracy belongs to the repeats' plainer yardstick, and idea count lives inside Topic development.",
          "Option (a) wires the two task families together — a classic mix-up the section card exists to prevent.",
        ),
        tags: ["toefl", "speaking", "scoring"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Six seconds into an interview answer, a candidate's mind goes blank and the silence stands. What has actually been lost?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — silence is not assessed" },
          { id: "b", text: "Delivery evidence: silent seconds show none of the fluidity the dimension listens for" },
          { id: "c", text: "The whole item is voided and will be repeated at the end of the section" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Delivery evidence: silent seconds show none of the fluidity the dimension listens for",
          "Silence produces no evidence for the raters, which is exactly why the interview lessons train bridging aloud as the standard rescue rather than quiet thinking.",
          "Neither forgiveness (a) nor repetition (c) exists: the clock runs once, and the rating reads what was actually said.",
        ),
        tags: ["toefl", "speaking", "strategy"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Name, in any order, the three dimensions interview answers are rated on.",
        hints: [],
        question: "Which three dimensions appear on the interview scoring guides?",
        acceptedAnswers: [
          "Delivery, Language use and Topic development",
          "Delivery, Language use, Topic development",
        ],
        keywords: ["Delivery", "Language use", "Topic development"],
        feedback: fb(
          "Delivery, Language use and Topic development.",
          "Those three names are the vocabulary of every piece of speaking feedback you will read in this Academy — learn them once, here, and every later lesson snaps into place.",
          "Naming essay criteria or listening skills imports other sections' machinery into the one section that runs on these three.",
        ),
        tags: ["toefl", "speaking", "scoring"],
      }),
    ],
    homework: [
      "Write the Speaking section card from memory — item count, task families, window lengths, answer length and rating dimensions — then check it against this lesson and note anything you missed.",
      "Find one quiet ten-minute slot today and speak continuously into your phone's voice recorder about a familiar topic; listen back once and note only whether every word you said came out clear.",
    ],
  },

  // -------------------------------------------------------------------------
  // Unit 2 — Listen and Repeat
  // -------------------------------------------------------------------------
  {
    slug: "toefl-speaking-listen-repeat",
    title: "Listen and Repeat: accuracy in the window",
    description:
      "How to hear a sentence once and bring it back whole: chunk-based listening, prompt starts, an even rhythm, and the defence of load-bearing words inside windows that never grow.",
    objectives: [
      "catch a heard sentence as a frame plus detail packages rather than loose words",
      "repeat sentences completely inside eight-, ten- and twelve-second windows",
      "defend the load-bearing words of a sentence — numbers, days, times and negatives",
      "recover from a stumble without restarting the whole sentence",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Seven of your eleven speaking items ask you to hear a sentence once and bring it back whole — inside a window that may be as short as eight seconds. This lesson trains the routine that makes that possible: catching sentences as chunks, holding them, and repeating them completely at a steady pace before the window closes. The exercises below play each sentence a single time, exactly as the test does.",
        beforeYouStart: [
          "You know from the overview lesson that each sentence plays once and that windows run eight, ten or twelve seconds.",
          "You can already catch the main idea of a short announcement played at normal speed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the seven Listen-and-Repeat items that open the section"],
          ["Task & question types", "Single-play sentences to repeat completely inside 8-, 10- or 12-second recording windows"],
          ["What is assessed", "Listening accuracy and speech reproduction — every key word of the sentence, in place, before the cut-off"],
          ["Why this matters", "These seven items are nearly two-thirds of the section, so the routine you drill here is the routine your band is built on"],
        ],
      },
      { type: "heading", text: "Why sentences escape you" },
      {
        type: "text",
        text: "A spoken sentence does not arrive word by word; it arrives as a small number of meaning groups — a chunk about who or what, a chunk about the action, a chunk about the circumstances. Working memory holds three or four such groups comfortably, but it drops a list of twelve unrelated words within seconds. Candidates who try to store individual words watch the middle of the sentence evaporate while they are still saying the beginning. The fix is not a better memory; it is a better unit of listening.",
      },
      {
        type: "definition",
        term: "chunking",
        partOfSpeech: "noun (also verb: to chunk)",
        definition: "Grouping the words of a heard sentence into meaningful units — typically the subject group, the verb group and the detail group — so that memory carries three or four packages instead of a dozen loose words.",
        example: {
          english: "The bus to the airport / leaves every twenty minutes / during the morning rush — three packages, one sentence, held whole.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "The hear–hold–repeat routine",
        intro: "Four moves, drilled until they run without thought: frame, packages, launch, rhythm.",
        steps: [
          {
            title: "Catch the frame first",
            text: "On the single play, let the subject and its verb register as the spine of the sentence; details hang off that spine afterwards.",
            examples: [
              { english: "'The training session…' followed by 'has been rescheduled' — frame caught, details now expected.", note: "Expecting details after the frame is how experienced listeners buy themselves memory room.", domain: "work" },
            ],
          },
          {
            title: "Package the details",
            text: "As the sentence finishes, attach its circumstances — time, place, condition — to the frame as one or two extra packages.",
            examples: [
              { english: "'…to Friday at two in the afternoon' rides along as a single time package.", note: "A package is recalled as a unit, which is why dates and places survive the wait for the window.", domain: "work" },
            ],
          },
          {
            title: "Launch inside the first second",
            text: "Start repeating as soon as the window opens; the packages are freshest now, and an early start buys silence at the end for any repair.",
            examples: [
              { english: "Beginning at second one of eight leaves the last second free for a clean final word.", note: "Late starts convert the window into pressure at exactly the moment memory is fading.", domain: "everyday" },
            ],
          },
          {
            title: "Keep the rhythm to the end",
            text: "Say the sentence in the same chunks you caught it in, at an even pace, and land the final words clearly before the cut-off.",
            examples: [
              { english: "Delivering the airport bus sentence as its three groups keeps every word audible and nothing dropped.", note: "The rhythm itself protects completeness — words go missing where the rhythm breaks.", domain: "travel" },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "The windows and what they ask",
        headers: ["Window", "Typical sentence", "The trained response"],
        rows: [
          ["8 seconds", "A short everyday line of eight or nine words", "Prompt start, calm pace, finished with a second to spare"],
          ["10 seconds", "A notice-length sentence carrying one added detail", "Two chunks delivered evenly, the detail word said clearly"],
          ["12 seconds", "A long sentence, often with two details attached", "Three chunks, measured pacing, no acceleration at the end"],
        ],
      },
      { type: "heading", text: "What accuracy means here" },
      {
        type: "text",
        text: "Marking rewards accurate, complete repetition: the key words of the sentence — nouns, verbs, numbers, times, negatives — in their places, with nothing essential missing. You are not asked to imitate the speaker's voice, and you are not asked to perform; you are asked to bring the sentence back. A repeat that swaps one word ('every twenty minutes' becoming 'every thirty minutes') has lost the exact content the item was built to test, which is why numbers, days and negatives deserve the sharpest corner of your attention.",
      },
      {
        type: "note",
        title: "Train at test speed",
        text: "Practise at the speed real announcements are spoken from the first week: slow-motion drills build slow-motion habits, and on test day the window will not slow down with you.",
      },
      {
        type: "example",
        title: "Six sentences, caught and packaged",
        items: [
          { english: "The bus to the airport leaves every twenty minutes during the morning rush.", note: "Three packages — route, frequency, time frame — and the number word 'twenty' is the one to defend.", domain: "travel" },
          { english: "Students who lose their ID cards must request a replacement at the registrar's office.", note: "Catch 'students who lose their ID cards' as one group; the obligation 'must request' plus 'replacement' carries the meaning.", domain: "campus" },
          { english: "The training session has been rescheduled to Friday at two in the afternoon.", note: "The frame is a passive verb; the load is the time package — day, hour and part of day together.", domain: "work" },
          { english: "Please make sure your phone is switched off before the performance begins.", note: "A request frame followed by a condition; 'before' is the hinge that keeps the two halves in the right order.", domain: "everyday" },
          { english: "Our team finished the project ahead of schedule despite several unexpected delays.", note: "'Despite' signals a contrast package — finishing early and the delays both belong in the repeat.", domain: "work" },
          { english: "The museum offers free guided tours on the first Sunday of every month.", note: "Two detail packages — price and schedule; 'free' and 'first Sunday' are the words the item lives on.", domain: "culture" },
        ],
      },
      {
        type: "mistakes",
        title: "Repetition errors corrected",
        items: [
          { wrong: "Repeating the sentence word by word, with a pause between each word.", right: "Repeat in the natural chunks you caught, with the rhythm of a normal sentence.", reason: "Word-by-word delivery spends the window before the sentence ends and makes the response harder to score, even when every word is technically present." },
          { wrong: "Restarting the whole sentence after a small stumble.", right: "Continue from where the stumble happened, or simply carry the rhythm forward to the end.", reason: "A restart spends the window twice on the opening words and usually clips the ending — the most valuable words — off the record." },
          { wrong: "Paraphrasing because the exact words have slipped away.", right: "Give back whatever exact material you hold, in order, rather than an invented equivalent.", reason: "These items are built to measure reproduction; a fluent paraphrase demonstrates invention, which is the interview's job, not this task's." },
          { wrong: "Waiting through the first seconds of the window to get ready.", right: "Launch within the first second — the preparation was the listening, and the listening is already finished.", reason: "Hesitation at the opening is the most common way strong hearers still miss windows: memory fades on a delay curve, and the window does not." },
        ],
      },
      {
        type: "four-skills",
        title: "One item, trained four ways",
        reading: {
          text: "A short training note on how memory handles speech. Simultaneous interpreters and live subtitlers face the same constraint a test taker does: speech arrives once, at speed, and cannot be replayed. Their shared habit is packing what they hear into the largest meaningful units available — a full subject, a whole event, a complete time expression — rather than tracking individual words. Studies of sentence recall tell the same story from the other side: people reliably reproduce the meaning of three or four clauses, and reliably lose long strings of unrelated items. The practical conclusion for a speaking candidate is blunt: the size of the unit you listen in decides how much sentence survives to the window.",
          task: "According to the note, what does the size of your listening unit decide?",
        },
        writing: {
          task: "A friend preparing for the same test writes: 'I keep losing the middle of long sentences when I repeat them.' Reply in 60–90 words explaining the chunk-based routine — what to catch on the single play, how to package details, and how to spend the window.",
          guide: [
            "Name the real problem first: the unit of listening, not the quantity of effort.",
            "Introduce the routine in three words — frame, packages, window — with one sentence each.",
            "Give the two window rules: launch inside the first second, and never restart a stumble.",
            "End with a practice instruction the friend can act on today.",
          ],
          model: "The problem isn't your memory — it's the unit you're listening in. On the single play, catch the frame first: who or what, doing what. Let the details arrive as one bundled package — a time, a place, a condition — instead of as separate words. When the window opens, start inside the first second and say the sentence back in those same two or three chunks, at an even pace. If you stumble, carry on; a restart spends the window twice and clips the ending. Run this routine on every announcement you hear today, and the middle of the sentence will stop disappearing.",
        },
        listening: {
          script: "Tutor: Try this with any announcement you hear today — a bus stop, a station platform, a shop loudspeaker. Catch the frame first: who or what, doing what. Then let the details arrive as one bundled extra — a time, a place, a condition. Say it back to yourself in those same two or three beats. Do that ten times today, and the window tomorrow will feel longer than it looks on the countdown bar.",
          task: "What does the tutor tell you to do with the announcements you hear during the day?",
        },
        speaking: {
          task: "Take any three-line notice around you — a lift sign, a library poster, a canteen menu board — and repeat each line aloud in its natural chunks, three times, at an even pace.",
          frames: [
            "The frame is who or what, doing…",
            "The details arrive bundled as…",
            "I start inside the first second and…",
            "If I stumble, I carry the rhythm…",
          ],
          checklist: [
            "Did I say each line in two or three natural chunks?",
            "Did I keep an even pace instead of racing the countdown?",
            "Did the endings of my lines stay audible?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Diagnosis first", "The reply names the friend's real problem — middle-of-sentence loss — before offering the fix, which is the order a useful reply always follows."],
          ["Method in one breath", "Frame, packages, window: three words that each carry one move of the routine, so the reply can be remembered without notes."],
          ["Concrete anchors", "Every abstract instruction is pinned to something sayable — 'catch the frame', 'bundle the details', 'spend the window' — the language of doing, not of theory."],
          ["Realistic scope", "The reply promises a routine that fits inside eight to twelve seconds, not a memory course; the promise matches the actual size of the task."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Drill the hear–hold–repeat routine on real announcements at normal speed until chunking is automatic rather than effortful."],
          ["While the clock runs", "Launch inside the first second, keep the rhythm even, and defend the number, day and negative words above all others."],
          ["If you are stuck", "Say the packages you hold, in order, and finish the sentence rather than restarting it — partial completeness beats a clipped restart."],
          ["Final minutes", "The seventh sentence is the longest: budget your breath at the window's opening and give the final words their full ending."],
        ],
      },
      {
        type: "summary",
        points: [
          "Catch sentences as frames plus detail packages, never as loose word lists — the unit you listen in decides what survives to the window.",
          "Launch inside the first second of the window; memory fades fastest while you hesitate.",
          "Keep an even rhythm in the same chunks you caught the sentence in; completeness, not speed, is what the marking rewards.",
          "Defend the load-bearing words — numbers, days, times and negatives — because the item is built on them.",
          "Never restart a stumbled sentence; carry it forward and land the ending cleanly inside the window.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions on this module so far.",
        items: [
          { question: "How many times is each Listen-and-Repeat sentence played?", options: ["Twice — once to listen, once to check", "Exactly once, with the recording window opening immediately", "As many times as you request"], correctIndex: 1, explanation: "A single play followed by the window is the whole item — which is why the routine begins and ends with listening.", from: "Understanding the Speaking section" },
          { question: "Why do the recording windows differ in length?", options: ["They are fixed at ten seconds for everyone", "They grow with sentence length — eight, ten or twelve seconds", "They depend on how fast the previous candidate spoke"], correctIndex: 1, explanation: "The window is calibrated to the sentence: longer sentences are given more room, not a demand for more speed.", from: "Understanding the Speaking section" },
          { question: "What discipline did the adaptive-testing lesson teach for single-hearing work?", options: ["Replay each recording until it is clear", "Commit on one hearing — prediction and focus replace the second chance", "Skip hard items and return to them at the end"], correctIndex: 1, explanation: "Forward-only, single-hearing commitment is the listening habit this speaking task inherits directly.", from: "Adaptive testing: how the test adjusts to you" },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen-and-Repeat training, item one. Play the audio once — as the test does — then type the sentence exactly as you heard it.",
        hints: [
          "Catch the frame first: which place, and what happens to it.",
          "The load-bearing detail is the schedule — 'first Monday of each month'.",
        ],
        audioText: "The campus bookstore is closed on the first Monday of each month.",
        question: "Type the sentence you heard, word for word.",
        acceptedAnswers: ["The campus bookstore is closed on the first Monday of each month."],
        keywords: ["bookstore", "first Monday"],
        feedback: fb(
          "The campus bookstore is closed on the first Monday of each month.",
          "The frame is place plus state; the detail package is the schedule — exactly the two chunks that make the sentence holdable after one hearing.",
          "Missing the schedule words is the classic single-hearing loss: the frame survives while the detail evaporates.",
        ),
        tags: ["toefl", "speaking", "listen-and-repeat"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Item two. One play, then type exactly what you heard.",
        hints: [],
        audioText: "Passengers should keep their tickets ready until the final stop.",
        question: "Type the sentence you heard, word for word.",
        acceptedAnswers: ["Passengers should keep their tickets ready until the final stop."],
        keywords: ["tickets", "final stop"],
        feedback: fb(
          "Passengers should keep their tickets ready until the final stop.",
          "An obligation frame plus a condition package — 'until the final stop' is the detail the item is built on and the one to defend in the window.",
          "Swapping 'until' for 'before' quietly reverses the condition, which is why small function words deserve the same protection as numbers.",
        ),
        tags: ["toefl", "speaking", "listen-and-repeat"],
      }),
      ex({
        type: "dictation",
        difficulty: "hard",
        skill: "listening",
        prompt: "Item three, a longer sentence. One play, then write it exactly.",
        hints: [
          "Catch the frame — what kind of event, and what happened to it.",
          "The destination package ('the larger auditorium') is the finish; hold it as one unit.",
        ],
        audioText: "The lecture on climate research has been moved to the larger auditorium.",
        acceptedAnswers: ["The lecture on climate research has been moved to the larger auditorium."],
        feedback: fb(
          "The lecture on climate research has been moved to the larger auditorium.",
          "Subject package, passive verb, destination package — three chunks that fit a ten-second window comfortably at a calm pace.",
          "Losing 'larger' drops the very word the move is about; comparison words are load-bearing too.",
        ),
        tags: ["toefl", "speaking", "listen-and-repeat"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Item four. One play, then write it exactly.",
        hints: [],
        audioText: "All applications must be submitted before noon on Friday.",
        acceptedAnswers: ["All applications must be submitted before noon on Friday."],
        feedback: fb(
          "All applications must be submitted before noon on Friday.",
          "Obligation plus deadline: the time package 'before noon on Friday' is the sentence's whole purpose, and it travels as one bundle.",
          "Deadlines split across pauses tend to lose their prepositions — 'before noon' and 'on Friday' stay together.",
        ),
        tags: ["toefl", "speaking", "listen-and-repeat"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Halfway through repeating a long sentence you stumble on one word. What does the trained routine tell you to do?",
        hints: ["Think about what a restart costs inside a twelve-second window."],
        options: [
          { id: "a", text: "Begin the whole sentence again from the first word" },
          { id: "b", text: "Carry the rhythm forward from where you stumbled and finish the sentence" },
          { id: "c", text: "Stop speaking and wait for the window to reopen" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Carry the rhythm forward from where you stumbled and finish the sentence",
          "A restart spends the window twice on the opening words and usually clips the ending; continuity protects completeness, which is what the marking rewards.",
          "Restarts feel careful but are the most expensive habit in this task — the window never grows to fit them, and windows never reopen.",
        ),
        tags: ["toefl", "speaking", "strategy"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "In your own words: what unit should you catch a sentence in on its single play, and why?",
        hints: [],
        question: "What is the unit of listening that makes a sentence holdable?",
        acceptedAnswers: ["chunks", "meaning chunks", "meaning groups", "chunks or meaning groups"],
        keywords: ["chunk"],
        feedback: fb(
          "Chunks — the meaning groups a sentence naturally divides into.",
          "Three or four packages fit working memory comfortably; a dozen loose words do not, which is why the routine packages rather than memorises.",
          "Word-by-word listening is the direct cause of vanishing middles — the unit, not the effort, is what fails.",
        ),
        tags: ["toefl", "speaking", "technique"],
      }),
    ],
    homework: [
      "Collect five real sentences from announcements around you today — transport, shops, campus — and run each through the hear–hold–repeat routine aloud three times before writing the chunks down.",
      "Record yourself repeating one ten-word sentence every day this week; listen back only for dropped endings and missing detail words, and note what changed by day seven.",
    ],
  },
  {
    slug: "toefl-speaking-pronunciation",
    title: "Pronunciation and intelligibility",
    description:
      "The accent-safe guide to being understood: word stress, sentence rhythm, finished endings and an even pace — clarity habits that work inside any variety of English.",
    objectives: [
      "explain intelligibility and why it, not any national accent, is what the guides reward",
      "place word stress correctly on common noun–verb pairs",
      "finish word endings so tense, number and possession reach the listener's ear",
      "hold an even, content-word-beat rhythm across a full spoken answer",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Raters can only score the voice they can follow. This lesson works on the things that make speech easy to follow — stress, rhythm and finished word endings — and on the honest headline of the whole area: the test rewards intelligibility, not any national accent, and your own accent, spoken clearly, is an asset rather than a liability. Every habit here is trained inside the voice you already have.",
        beforeYouStart: [
          "You can repeat a ten-word sentence completely inside a ten-second window.",
          "You know the interview answers are rated for Delivery among their three dimensions.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — every one of the eleven items, since all of them are spoken"],
          ["Task & question types", "Listen-and-Repeat accuracy and interview Delivery both depend on word-level clarity"],
          ["What is assessed", "Intelligibility: stress, rhythm and word endings that let a rater follow you without strain"],
          ["Why this matters", "Clear speech is the cheapest band-points upgrade available — it costs habits, not a new identity"],
        ],
      },
      { type: "heading", text: "Intelligibility, not imitation" },
      {
        type: "text",
        text: "The scoring guides describe speech in terms a listener can act on: how easily the message comes through, how much effort the listener spends, and where breakdowns happen. Nowhere do they name a target accent, because none is required — a clear speaker of any variety of English is a strong speaker on this scale. What loses marks is not origin but obstruction: misplaced word stress that turns one word into another, swallowed endings that erase grammar, and a flat battering of syllables that hides which words matter. Those faults are trainable in any accent, which is exactly why this lesson attacks them and nothing else.",
      },
      {
        type: "definition",
        term: "intelligibility",
        partOfSpeech: "noun",
        definition: "The degree to which a listener can understand your speech without repeated effort; the quality the speaking guides actually describe, distinct from accent.",
        example: {
          english: "A speaker with a strong regional accent who stresses and finishes every word clearly can be perfectly intelligible.",
          translation: "",
        },
      },
      {
        type: "definition",
        term: "word stress",
        partOfSpeech: "noun phrase",
        definition: "The syllable of a word made longer, louder and higher in pitch than the others; moving it can change a word's meaning or make it unrecognisable to the ear.",
        example: {
          english: "Please reCORD the vote — but keep a REcord of it: the noun and the verb trade stress.",
          translation: "",
        },
      },
      {
        type: "comparison",
        title: "Accent versus intelligibility",
        columns: ["Accent", "Intelligibility"],
        rows: [
          { aspect: "What it is", left: "The sound pattern of the variety of English you learned", right: "How easily any listener follows what you say" },
          { aspect: "Does the test reward it?", left: "No level of the guides names an accent as the target", right: "Every level describes ease of understanding" },
          { aspect: "Can it change?", left: "Only over years, and there is no reason to abandon it", right: "Within weeks, through stress, rhythm and endings" },
          { aspect: "Training response", left: "Keep it — it is part of your voice", right: "Drill the habits inside it that remove strain for the listener" },
        ],
        verdict: "Train the habits, keep the accent — that is the whole strategy, and any advice to sound native can be safely ignored.",
      },
      {
        type: "steps",
        title: "The clarity routine",
        intro: "Four habits, each small enough to drill in a week and strong enough to change how every item sounds.",
        steps: [
          {
            title: "Stress the words that carry meaning",
            text: "In every sentence, content words — nouns, main verbs, adjectives, adverbs and question words — take the beat, while function words shrink between them.",
            examples: [
              { english: "I'd LIKE to BOOK a TAble for FOUR near the WINdow.", note: "Six beats carry the whole message; the small words ride between them.", domain: "everyday" },
            ],
          },
          {
            title: "Finish every word",
            text: "Word endings are grammar by ear: the -s that marks plurals and third persons, and the -ed that marks the past.",
            examples: [
              { english: "She works late and walked home — without the endings, both facts disappear from the ear.", note: "A finished ending costs a fraction of a second and saves a whole meaning.", domain: "everyday" },
            ],
          },
          {
            title: "Keep the pace even",
            text: "Choose a speed you can hold for thirty seconds and stay at it; acceleration is where syllables collapse and words fuse together.",
            examples: [
              { english: "A calm, even twenty-eight seconds beats a frantic, fused thirty-five.", note: "Raters hear steadiness as control, never as slowness.", domain: "everyday" },
            ],
          },
          {
            title: "Give every sound its full shape",
            text: "Articulate vowels openly and let consonants finish, especially at the ends of chunks where your breath naturally falls.",
            examples: [
              { english: "'Must report to the front desk' survives a fast room only when each consonant lands.", note: "Chunk-final positions are where clarity is lost first.", domain: "work" },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "Where clarity is won and lost",
        headers: ["Feature", "The habit", "Why the listener's ear follows it"],
        rows: [
          ["Word stress", "Put the beat on the right syllable of long words", "A misplaced beat turns DESert into dessert — a different word entirely"],
          ["Sentence stress", "Make content words prominent and let function words shrink", "The beat pattern marks the sentence's skeleton for the listener"],
          ["Final consonants", "Finish -s and -ed endings every single time", "Endings carry number, tense and possession by ear"],
          ["Vowel length", "Hold long vowels fully — ship and sheep live apart", "Length is often the only signal separating similar words"],
          ["Pausing", "Breathe at chunk boundaries, never mid-word", "Pauses at boundaries confirm the structure you caught"],
        ],
      },
      {
        type: "warning",
        title: "Do not remodel your voice before a test",
        text: "Attempting a new sound system in the weeks before a sitting produces inconsistent speech, which is harder to follow than a consistent accent of any kind. Clarity habits, yes; identity surgery, no.",
      },
      {
        type: "example",
        title: "Clarity decisions in real sentences",
        items: [
          { english: "Please record the minutes of today's meeting.", note: "As a verb, record carries its beat on the second syllable, and the -ed sounds as a light /d/ after the hard consonant.", domain: "work" },
          { english: "My cousin presented her research at a conference in Toronto.", note: "Presented takes its beat on SENT, and the -ed after /t/ adds a small /ɪd/ syllable — finishing it marks the past.", domain: "academic" },
          { english: "She works at one of the biggest hospitals in the city.", note: "The final -s on works is the only audible signal of third person; hospitals needs its plural heard too.", domain: "everyday" },
          { english: "We decided to walk home instead of waiting for the taxi.", note: "Decided takes a full /ɪd/ ending after the /d/; swallowing it turns decided into decide and the tense with it.", domain: "everyday" },
          { english: "Discount tickets are sold at the counter near the main entrance.", note: "Discount takes its beat on the first syllable; keeping 'sold at' distinct from 'sold-a' protects the passive meaning.", domain: "travel" },
          { english: "Can you send me the file before the meeting?", note: "Four beats — send, file, before, meeting — carry the request, with the polite opener 'can you' riding unstressed.", domain: "work" },
        ],
      },
      {
        type: "mistakes",
        title: "Pronunciation traps corrected",
        items: [
          { wrong: "I must sound American or British to score well in speaking.", right: "The guides reward speech a rater can follow easily; a consistently clear version of your own accent meets that bar.", reason: "Accent imitation divides attention, produces mid-test switching and inconsistent sounds — three clarity losses bought for zero gain." },
          { wrong: "Speaking as fast as possible proves fluency.", right: "Fluency sounds like an even, unhurried pace with clean chunk boundaries.", reason: "Speed that collapses syllables forces the listener to reconstruct — which is effort, the exact thing the guides measure." },
          { wrong: "Word endings are decoration; the meaning lives in the big words.", right: "Endings are grammar by ear: tense, number and possession ride on final -s and -ed sounds.", reason: "Losing them makes she walked and she walks identical to a listener who cannot see the words." },
          { wrong: "Every word deserves equal emphasis so nothing is missed.", right: "Content words take the beat; function words shrink between them.", reason: "Flat emphasis hides the sentence's skeleton — listeners locate meaning through the rise and fall of prominence, not through volume." },
        ],
      },
      {
        type: "four-skills",
        title: "Clarity, trained four ways",
        reading: {
          text: "A tutor's briefing on reading practice feedback. When study platforms analyse a recording, their most reliable observations are the mechanical ones: which words carried stress, whether endings were finished, how long the pauses ran and whether the pace held steady. Their least reliable output is any single overall number — a practice estimate built on those mechanics, useful for tracking your own trend and nothing more. The professional move is to read the mechanical detail, act on the three habits it exposes, and treat the headline figure as a mirror, not a verdict.",
          task: "According to the briefing, which platform observations are reliable, and which are not?",
        },
        writing: {
          task: "A friend writes: 'My tutor says I should lose my accent before the test or my speaking band will suffer.' Reply in 60–90 words: what actually earns the band, why losing the accent is the wrong goal, and which habits are the right ones.",
          guide: [
            "Open by replacing the tutor's goal: intelligibility, not accent removal.",
            "Explain why imitation backfires: switching sound systems under pressure creates inconsistency, which is harder to follow than any single accent.",
            "List the trainable habits — word stress, finished endings, even pace — with one example each.",
            "Close by keeping the friend's own voice at the centre of the plan.",
          ],
          model: "Your tutor has pointed you at the wrong goal. The speaking guides never name a target accent — at any level they reward speech a rater can follow easily, and your own accent, spoken clearly, meets that bar. Losing the accent is both impossible in weeks and counterproductive: switching sound systems under pressure produces inconsistency, which is harder to follow than any single variety. The habits worth your hours are word stress (the beat on the right syllable), finished endings (the final -s and -ed that carry grammar by ear) and an even pace. Drill those inside your own voice, and the band follows the clarity.",
        },
        listening: {
          script: "Tutor: Say this after me, once slowly, once at speaking speed: 'The exam begins at nine.' Feel where the beat falls — exAM beGINS at NINE. Now drop the ending: 'The exam begin at nine.' Hear what happened? That missing /s/ was tense and person, gone from the ear. Same sentence, one habit, one meaning saved. Endings first, beats second, speed last — that is the order of value.",
          task: "Which order of value does the tutor give, and what does the missing -s take with it?",
        },
        speaking: {
          task: "Read one paragraph of any English text aloud for sixty seconds, deliberately beating the content words and finishing every -s and -ed; then read it again at your natural accent and speed, keeping both habits.",
          frames: [
            "I put the beat on the nouns, main verbs and…",
            "The small words shrink between…",
            "I finish every -s and -ed because…",
            "My pace stays even from the first word to…",
          ],
          checklist: [
            "Could a listener hear my stressed words clearly?",
            "Did every ending land, especially at chunk boundaries?",
            "Did my pace hold steady for the full minute?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Sets the record straight", "The reply opens by naming what the guides actually reward — speech a rater can follow — which reframes the friend's fear before answering it."],
          ["Replaces, not just rejects", "The wrong goal is swapped for three concrete habits, so the reply corrects and equips in the same breath."],
          ["Keeps the friend's voice", "The model endorses keeping the friend's own accent, protecting confidence as well as clarity — panic is no training partner."],
          ["Ends with an order of value", "Stress, endings, pace — a priority the friend can carry into every practice recording from today."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Record one minute of your speech, listen only for endings and beat placement, and pick the single habit your next week of drills will attack."],
          ["While the clock runs", "Trust your trained habits: beat the content words, finish the endings, and hold your pace — nothing new is invented mid-test."],
          ["If you are stuck", "Slow one notch rather than raising volume; lost clarity recovers with pace, never with force."],
          ["Final minutes", "Fatigue eats endings first — spend the last answers' attention on final consonants, the cheapest clarity to lose."],
        ],
      },
      {
        type: "summary",
        points: [
          "The test rewards intelligibility — how easily a rater follows you — and names no target accent at any level.",
          "Beat the content words and shrink the function words: the rhythm marks the sentence's skeleton for the listener.",
          "Final -s and -ed endings are grammar by ear; finishing them saves tense, number and possession.",
          "An even pace beats raw speed; collapsed syllables create listener effort, which the guides measure.",
          "Keep your accent and train the habits inside it — consistent speech of any variety beats inconsistent imitation.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions on this module so far.",
        items: [
          { question: "What are the interview answers rated for?", options: ["Vocabulary size, spelling and speed", "Delivery, Language use and Topic development", "Accent accuracy and humour"], correctIndex: 1, explanation: "Three dimensions — and Delivery is where the clarity habits of this lesson do their work.", from: "Understanding the Speaking section" },
          { question: "What unit should you catch a Listen-and-Repeat sentence in?", options: ["Individual words, recalled one by one", "Meaning chunks — a frame plus detail packages", "The first half only, then guess the rest"], correctIndex: 1, explanation: "Chunks are the unit of memory; this lesson adds that they are also the natural pause points of clear delivery.", from: "Listen and Repeat: accuracy in the window" },
          { question: "How do the four section bands combine into an overall?", options: ["They are averaged and rounded to the nearest half band", "The highest section counts alone", "They are summed into a total out of 120 in whole numbers"], correctIndex: 0, explanation: "The overall is the average of the four section bands, rounded to the nearest half step — every section, speaking included, carries equal weight.", from: "The 1–6 band scale" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "In the sentence 'Please record the minutes of today's meeting', where does the stress fall on 'record'?",
        hints: ["Decide first whether record is a noun or a verb in this sentence."],
        options: [
          { id: "a", text: "On the first syllable: RE-cord" },
          { id: "b", text: "On the second syllable: re-CORD" },
          { id: "c", text: "Equally on both syllables" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "On the second syllable: re-CORD",
          "Used as a verb, record carries its beat on the second syllable; the noun REcord keeps it on the first — the pair swaps meaning with the beat.",
          "First-syllable stress here turns the action into a thing, and the listener briefly hears a noun where the sentence needs a verb.",
        ),
        tags: ["toefl", "speaking", "pronunciation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Read the practice log, then answer.",
        hints: [],
        passageTitle: "Two words, two beats",
        passage: "A learner's practice log notes two trouble spots. First, the pair DESert (a dry place, noun) and deSERT (to abandon, verb), where the beat alone separates them. Second, the noun PREsent (a gift) against the verb preSENT (to show something). The log adds that in fast speech the unstressed syllables shrink but never disappear, and that the stressed syllable stays longer, louder and higher in pitch however fast the sentence runs.",
        question: "According to the log, what three qualities keep a stressed syllable recognisable at speed?",
        options: [
          { id: "a", text: "It stays longer, louder and higher in pitch" },
          { id: "b", text: "It becomes shorter and quieter than its neighbours" },
          { id: "c", text: "It disappears entirely, leaving only the unstressed syllables" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It stays longer, louder and higher in pitch",
          "The beat is physical — length, force and pitch together — which is why it survives speed while unstressed syllables merely shrink.",
          "Option (b) describes the unstressed syllables; option (c) describes no syllable at all in healthy speech.",
        ),
        tags: ["toefl", "speaking", "pronunciation"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "What does the final -s in 'She works at the hospital' tell a listener who cannot see the words?",
        hints: ["Think tense and person, not plurals."],
        options: [
          { id: "a", text: "That there are several hospitals" },
          { id: "b", text: "That the verb is present simple with a third-person subject" },
          { id: "c", text: "That the sentence is a question" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "That the verb is present simple with a third-person subject",
          "Endings are grammar by ear: that one /s/ marks present simple third person, and swallowing it removes the tense information with it.",
          "Plural -s lives on nouns, and here the hospital is singular; questions rise at the end — they do not add -s to verbs.",
        ),
        tags: ["toefl", "speaking", "pronunciation"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "A tutor tells a candidate to adopt a different national accent before test day to raise the speaking band. What is the honest correction?",
        hints: [],
        options: [
          { id: "a", text: "The advice is sound — native accents score highest" },
          { id: "b", text: "The guides reward speech that is easy to follow, in any accent; consistent clarity beats imitated accent" },
          { id: "c", text: "Only one specific accent scores well, so the candidate should switch targets" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The guides reward speech that is easy to follow, in any accent; consistent clarity beats imitated accent",
          "No level of the scoring guides names a target accent; intelligibility is the described quality, and remodelling your sound system under pressure produces inconsistency, which costs clarity.",
          "Both other options invent an accent hierarchy the guides do not contain — and both would send training hours to the wrong place.",
        ),
        tags: ["toefl", "speaking", "honesty"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "In one phrase: what quality do the speaking guides actually reward, instead of any particular accent?",
        hints: [],
        question: "What is the target quality of spoken delivery on this test?",
        acceptedAnswers: ["intelligibility", "being easy to understand", "being easy to follow", "clarity"],
        keywords: ["intelligibility", "understand", "follow", "clarity"],
        feedback: fb(
          "Intelligibility — speech a rater can follow without strain.",
          "Intelligibility is the described target at every level: stress on the right syllables, finished endings and an even pace carry it, whatever your accent is.",
          "Accent, speed and vocabulary size are proxies; the real target is how little effort your listener spends.",
        ),
        tags: ["toefl", "speaking", "scoring"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Clarity practice. Read the sentence aloud with the beat on the content words and every ending finished.",
        hints: [
          "Beat the nouns and the main verb; let the small words shrink.",
          "Finish the -ed on 'decided' as a full extra syllable.",
        ],
        situation:
          "Recording drill. Say this sentence aloud, first slowly, then at your natural speed: 'We decided to walk home instead of waiting for the taxi.' Put the beat on the content words, finish the -ed ending on 'decided', and keep an even pace to the end.",
        targetPhrases: [
          "We deCIDed to WALK home…",
          "…inSTEAD of WAITing for the TAxi.",
          "even pace from the first word to the last",
        ],
        mustSay: ["decided", "instead", "taxi"],
        feedback: fb(
          "A calm delivery with the beat on walk, instead and taxi, and a full -ed on decided.",
          "The -ed after /d/ adds a small extra syllable — finishing it marks the past tense for the ear, and the content-word beat keeps the sentence followable at any speed.",
          "Rushing the ending turns decided into decide and quietly changes when the story happened.",
        ),
        tags: ["toefl", "speaking", "pronunciation"],
      }),
    ],
    homework: [
      "Record one minute of your speech every day this week and listen back only for two things: misplaced beats and unfinished endings; keep a tally and watch it fall.",
      "Take ten words you use often that shift stress between noun and verb (record, present, discount, increase…), and say each pair aloud in two short sentences you invent.",
    ],
  },
];
