/**
 * TOEFL iBT Academy — Module 5, Speaking (T-M5, PROMPT 48, Task 7).
 *
 * Chapter batch 2: the Take an Interview unit (two lessons). Authored at
 * the v3 textbook standard (src/data/exam-academy/textbook-standard.ts);
 * validated by scripts/check-lesson-file.ts.
 *
 * Format facts verified against ETS's published 2026 pages: the interview
 * block closes the Speaking section with four items — each question shown
 * on screen and spoken aloud, a brief preparation moment, then roughly
 * thirty seconds of recorded answer, rated against scoring guides
 * organised around Delivery, Language use and Topic development. Honesty
 * rules honoured here: the items reward natural, spontaneous responses,
 * so memorised scripts are taught against; nothing claims official ETS
 * content, and no practice feedback is presented as an official score.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T5_CH2: LessonSpec[] = [
  {
    slug: "toefl-speaking-interview",
    title: "Take an Interview: short, complete, fluent",
    description:
      "The thirty-second interview answer: one direct idea, one development, a spoken bridge instead of silence, and a deliberate close before the clock does the closing.",
    objectives: [
      "build a complete interview answer inside roughly thirty seconds",
      "commit to one idea per answer and develop it with a reason or an example",
      "bridge aloud through stalls instead of leaving silence",
      "close answers deliberately and protect the final item from fatigue",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "After the seventh sentence, the section changes character: four questions arrive one by one, each with a brief moment to think and about thirty seconds on the clock. This lesson trains the answer that fits that shape — one clear idea, developed with a reason or an example, delivered continuously and closed cleanly. It also trains the two rescues that keep an answer alive: bridging aloud instead of going silent, and finishing before the clock finishes you.",
        beforeYouStart: [
          "You know the interview questions are rated for Delivery, Language use and Topic development.",
          "You can speak continuously for half a minute about a familiar everyday subject.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the four Take-an-Interview items that close the section"],
          ["Task & question types", "Everyday questions with brief preparation and roughly thirty seconds of recorded answer"],
          ["What is assessed", "Delivery, Language use and Topic development inside a short clock — not memorised performance"],
          ["Why this matters", "Four of the eleven items ride on this shape, and the same shape governs every practice interview you will ever record"],
        ],
      },
      { type: "heading", text: "The thirty-second answer" },
      {
        type: "text",
        text: "Half a minute is shorter than it feels and longer than silence. A trained answer uses the shape directly: a first sentence that answers the question, one or two sentences that give a reason or an example, and a closing sentence that lands the point. That is four or five sentences in total — enough for Topic development to register, short enough to hold grammar steady, and naturally paced for Delivery. Answers that try to pack three ideas into the same space spend their seconds on setup and run out before any idea is developed.",
      },
      {
        type: "definition",
        term: "bridging",
        partOfSpeech: "noun (also verb: to bridge)",
        definition: "Speaking a short connector — 'the main thing for me is…', 'let me give an example…' — that keeps the voice moving while the next idea forms, instead of leaving silence.",
        example: {
          english: "That's a good question — the main thing for me is the quiet, because I concentrate better early in the day.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "Building the answer under the clock",
        intro: "Four moves inside half a minute: commit, develop, bridge, close.",
        steps: [
          {
            title: "Answer inside the first sentence",
            text: "Choose one direct response and say it plainly; a clear opening sentence gives the rater the destination immediately.",
            examples: [
              { english: "Definitely mornings — my concentration is sharpest before lunch.", note: "Choice made, reason seeded, all inside one breath.", domain: "personal" },
            ],
          },
          {
            title: "Develop with one reason or one example",
            text: "Pick the single strongest support you actually own, and give it a whole sentence or two rather than listing three half-reasons.",
            examples: [
              { english: "Last term I moved my revision to seven in the morning and finished a week early.", note: "One lived example proves more than three vague ones.", domain: "education" },
            ],
          },
          {
            title: "Bridge aloud, never silently",
            text: "If the next thought is still forming, let a connector carry the voice — silence is the one thing the clock never forgives.",
            examples: [
              { english: "'And the other part of it is…' buys two seconds and keeps Delivery alive.", note: "Bridges are what fluent speakers do while thinking — natural speech, not cheating.", domain: "everyday" },
            ],
          },
          {
            title: "Close before the clock closes you",
            text: "Bring the answer home with a short rounding sentence and stop deliberately; a clean ending reads as control.",
            examples: [
              { english: "So yes — mornings, every time.", note: "A deliberate stop beats trailing off, and it protects the next item's preparation.", domain: "personal" },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "How the half-minute divides",
        headers: ["Moment", "What happens", "What it sounds like"],
        rows: [
          ["Seconds 0–5", "The direct answer lands", "A plain opening sentence that takes a side or names the thing"],
          ["Seconds 5–20", "One idea is developed", "A reason or an example given its own full sentence or two"],
          ["Seconds 20–28", "A rounding sentence closes the answer", "A short summary that returns to the opening choice"],
          ["Any stall", "A bridge keeps the voice alive", "Connectors spoken aloud while the next thought forms"],
        ],
      },
      { type: "heading", text: "Why memorised answers backfire" },
      {
        type: "text",
        text: "A stock answer learned by heart almost never fits the question that arrives: it replies to a near-topic, misses the actual wording, and sounds flat in exactly the way unspontaneous speech sounds flat. Raters are listening for a response to this question, in this clock, in this voice — which is why preparation for this part means drilling the shape across many topics, not scripting one text for one hoped-for topic. The shape transfers to every question; the script transfers to none.",
      },
      {
        type: "dialogue",
        title: "A model item, annotated",
        context: "One interview item, then the tutor's note on what the answer did.",
        lines: [
          { speaker: "Interview item", text: "Do you prefer to plan trips in detail, or decide as you go?" },
          { speaker: "Candidate", text: "I plan the big things and improvise the small ones. For me the frame matters — flights and a place to sleep — because those mistakes are expensive. But inside the frame I like leaving days open. Last spring I kept two days unplanned in Lisbon and found the best meal of the trip by accident. So: detailed about the frame, relaxed inside it." },
          { speaker: "Tutor", text: "Note the shape at work: choice in the first sentence, one reason, one example, and a two-second close. Thirty seconds, no silence, one idea — Topic development and Delivery both get their evidence." },
        ],
      },
      {
        type: "example",
        title: "Six questions, six shapes",
        items: [
          { english: "What do you usually do to relax after a busy week?", note: "Habit question: present simple plus one honest routine, developed with when or where it happens.", domain: "everyday" },
          { english: "Tell me about a time you helped someone solve a problem.", note: "Narrative question: fix the past tense before you start, then tell one event to its end.", domain: "community" },
          { english: "Would you rather work for a large company or a small one?", note: "Preference question: choose immediately, then give the one reason that actually drives the choice.", domain: "work" },
          { english: "How has technology changed the way students take notes?", note: "Change question: present perfect for the shift, then one concrete contrast between old and new.", domain: "academic" },
          { english: "What is one goal you have for the coming year?", note: "Forward question: name the goal first, then one step you are already taking toward it.", domain: "personal" },
          { english: "Is your hometown a good place for young people to live?", note: "Evaluation question: take a position, then support it with one specific feature of the place.", domain: "community" },
        ],
      },
      {
        type: "mistakes",
        title: "Interview errors corrected",
        items: [
          { wrong: "Going silent for five seconds to find the perfect idea.", right: "Bridge aloud — 'the main thing for me is…' — while the idea finishes forming.", reason: "Silence is the one failure that costs Delivery directly; a bridge is normal spoken English and costs nothing." },
          { wrong: "Squeezing three ideas into one thirty-second answer.", right: "Choose the single idea you can develop fully and let the others go.", reason: "Three half-ideas register as no idea: Topic development rewards depth inside the clock, not a survey of the topic." },
          { wrong: "Reciting a prepared answer on a topic close to the question.", right: "Answer the question that was asked, using your drilled shape rather than a script.", reason: "Near-topic answers mismatch the wording, and raters hear the mismatch — the response sounds addressed to a different question." },
          { wrong: "Stopping at ten seconds because the idea feels finished.", right: "Give the idea a reason or an example, then close deliberately near the half-minute mark.", reason: "Half an answer shows the clock who is in charge; a developed one shows the rater what your English can do." },
        ],
      },
      {
        type: "four-skills",
        title: "The interview stage, trained four ways",
        reading: {
          text: "A briefing on the last stretch of the section. Four questions arrive in sequence, each shown on screen and spoken aloud, each followed by a short preparation moment and a recording window of about thirty seconds. The questions stay in everyday territory — routines, preferences, experiences, opinions — and none of them requires specialist knowledge. What they require is a complete little answer every time: a direct response, one developed reason or example, and a clean close. Preparation between now and test day is therefore about drilling that shape across dozens of small topics until it is automatic, because on the day there is no pause button and no second take.",
          task: "From the briefing, what does each of the four questions require, and what does preparation before test day consist of?",
        },
        writing: {
          task: "A coursemate records an interview answer that runs: 'Yes. I like weekends. Because rest. Also family and sport and shopping and travelling and cooking.' Write them 60–90 words of feedback naming what is missing and rebuilding the answer to the trained shape.",
          guide: [
            "Diagnose first: name what the fragments lack — a direct answer, development and a close.",
            "Rebuild the answer sentence by sentence against the trained shape.",
            "Show the timing: which seconds hold the answer, the development and the close.",
            "Explain why one lived example outscores a list of five activities.",
          ],
          model: "Your answer has plenty of words but almost no shape. Start again like this. First sentence, the direct answer: 'I like weekends mainly for the long mornings.' Next two sentences, one reason developed: 'On Saturdays I sleep until nine and then cook a slow breakfast, which the working week never allows.' Final sentence, a deliberate close: 'That two-hour breakfast is what the whole week aims at.' Four sentences, one idea, about twenty-five seconds, no silence. The list of five activities can go: an undeveloped list gives the rater nothing to score, while one lived detail feeds all three rating dimensions.",
        },
        listening: {
          script: "Tutor: Watch the clock with me. Second one: the answer — 'I'd pick the small company.' Seconds five to twenty: the reason, given room — 'In a small team you see your work land, and people trust you with real problems sooner.' Second twenty-five: the close — 'That matters more to me than a famous logo.' Five seconds to spare, zero silence, one idea. That is the whole discipline — count it out next time you record.",
          task: "Which three moves does the tutor count out, and how many seconds does each get?",
        },
        speaking: {
          task: "Answer one of this lesson's six example questions aloud, once, timing yourself against thirty seconds and following the trained shape from first sentence to close.",
          frames: [
            "My first sentence answers directly:…",
            "My reason or example takes the middle seconds:…",
            "If I stall, I bridge aloud with…",
            "I close deliberately with…",
          ],
          checklist: [
            "Did my answer arrive inside the first sentence?",
            "Did I develop exactly one idea?",
            "Did I close before the thirty-second mark, rather than stopping dead?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Diagnosis in order", "The feedback names the answer's real fault — fragments and idea-stuffing — before rebuilding, so the coursemate can hear the problem, not just the cure."],
          ["Rebuilds to the shape", "The replacement answer follows direct answer, one development, clean close — the same shape every question in this family is trained on."],
          ["Concrete wording", "The model shows sayable sentences rather than labels, so the coursemate can imitate the rhythm and length directly from the page."],
          ["Clock-aware", "The rebuilt answer visibly fits half a minute, teaching by example that the shape is a time decision as much as a language one."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Drill the four-sentence shape on twenty different everyday questions across the week — variety of topics, constancy of shape."],
          ["While the clock runs", "Answer in the first sentence, develop one idea, bridge aloud if a stall comes, and close deliberately at the mark."],
          ["If you are stuck", "Name the stall aloud ('the first thing that comes to mind is…') and follow it — momentum recovers more answers than meditation does."],
          ["Final minutes", "The fourth question gets the same shape as the first: fatigue is expected, and the shape is what survives fatigue."],
        ],
      },
      {
        type: "summary",
        points: [
          "One idea per answer: a direct response, one reason or example, and a deliberate close — four or five sentences inside half a minute.",
          "Bridge aloud instead of going silent; connectors are what fluent speech does while thinking.",
          "Memorised answers backfire: drill the shape across topics, never a script for one topic.",
          "A clean early close beats a ragged overrun; stop deliberately and protect the next item.",
          "Every practice interview should be recorded against the same clock the test uses — thirty seconds, no extensions.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions on this module so far.",
        items: [
          { question: "What follows the seven Listen-and-Repeat items?", options: ["A second set of longer sentences", "Four interview questions with brief preparation and about thirty seconds each", "A written reflection on the section"], correctIndex: 1, explanation: "Eleven items in two families: seven repeats, then four interviews — the shape this lesson's clock training assumes.", from: "Understanding the Speaking section" },
          { question: "What are the three dimensions interview answers are rated on?", options: ["Speed, vocabulary rarity and accent", "Delivery, Language use and Topic development", "Grammar accuracy only"], correctIndex: 1, explanation: "The three dimensions reward a clear voice, controlled language and a developed idea — one per move of the trained shape.", from: "Understanding the Speaking section" },
          { question: "Where should the beat fall in a clear spoken sentence?", options: ["On every word equally", "On the content words, with function words shrunk between them", "On the first word of the sentence"], correctIndex: 1, explanation: "Sentence stress marks the skeleton of the message — the habit that keeps this lesson's answers easy to follow.", from: "Pronunciation and intelligibility" },
        ],
      },
    ],
    questions: [
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Interview practice, item one: a habit question, answered in the trained shape.",
        hints: [
          "Open with the routine itself — no introduction.",
          "Give one reason with 'because', then close deliberately.",
        ],
        situation:
          "Interview practice, item one. The question on screen reads: 'What do you usually do to relax after a busy week?' Record your answer: state your routine directly in the first sentence, develop it with one reason or one example, and close deliberately — about thirty seconds in total.",
        targetPhrases: [
          "Most weeks I usually…",
          "I do it mainly because…",
          "So that's my way of switching off.",
        ],
        mustSay: ["usually", "because", "week"],
        feedback: fb(
          "A direct opening on the routine, one developed reason or example, and a deliberate close inside half a minute.",
          "Present-simple habits with one honest reason show Language use and Topic development together, and the prompt close leaves Delivery unhurried.",
          "Introductions ('That's an interesting question…') and idea lists both spend the clock before the idea is developed.",
        ),
        tags: ["toefl", "speaking", "interview"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Interview practice, item two: a preference question, one idea only.",
        hints: [],
        situation:
          "Interview practice, item two. The question reads: 'Would you rather work for a large company or a small one?' Choose your side in the first sentence, give the single reason that actually drives the choice, and close before the half-minute mark.",
        targetPhrases: [
          "I'd rather work for…",
          "The main reason is…",
          "So that's my pick.",
        ],
        mustSay: ["rather", "because", "so"],
        feedback: fb(
          "A first-sentence choice, one driving reason, and a clean sign-off.",
          "Preference questions reward commitment: one side, one reason, one close — the shape that fits the clock and lets each rating dimension find its evidence.",
          "Sitting between both options ('it depends on many things') burns ten seconds without answering anything.",
        ),
        tags: ["toefl", "speaking", "interview"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Interview practice, item three: a narrative question, told to its end.",
        hints: [],
        situation:
          "Interview practice, item three. The question reads: 'Tell me about a time you helped someone solve a problem.' Fix the past tense before you begin, tell one event from start to finish, and close with a short sentence about how it ended.",
        targetPhrases: [
          "Last year, a friend of mine…",
          "The problem was that…",
          "In the end,…",
        ],
        mustSay: ["last", "helped", "because"],
        feedback: fb(
          "One past-tense event, told from problem to resolution, with a deliberate final sentence.",
          "Narrative questions are where tense frames live or die: choosing past simple during the preparation moment and holding it shows exactly the control Language use rewards.",
          "Switching into present tense mid-story ('so then he calls me') is the standard drift; the frame must be chosen, not hoped for.",
        ),
        tags: ["toefl", "speaking", "interview"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Six seconds into an answer, the next thought will not come. What does the trained response sound like?",
        hints: ["Silence is the one thing the clock never forgives."],
        options: [
          { id: "a", text: "A bridge spoken aloud — 'the main thing for me is…' — while the idea finishes forming" },
          { id: "b", text: "A long pause; raters allow thinking time" },
          { id: "c", text: "Repeating the question word for word until something arrives" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A bridge spoken aloud — 'the main thing for me is…' — while the idea finishes forming",
          "Bridges are what fluent speakers actually do while thinking: the voice keeps moving, Delivery keeps its evidence, and the idea usually lands two seconds later.",
          "Pauses read as stalls rather than thought, and reciting the question spends the clock producing no new content at all.",
        ),
        tags: ["toefl", "speaking", "strategy"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Why do memorised answers backfire on the interview items?",
        hints: [],
        options: [
          { id: "a", text: "They are always grammatically weaker than spontaneous speech" },
          { id: "b", text: "They mismatch the question actually asked and sound flat in the way unspontaneous speech sounds flat" },
          { id: "c", text: "Raters can detect them by accent alone" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "They mismatch the question actually asked and sound flat in the way unspontaneous speech sounds flat",
          "A stock answer replies to a near-topic rather than the question; raters hear the mismatch, and the delivery loses the natural movement spoken answers are built to show.",
          "The problem is fit and sound, not grammar — a memorised text is often grammatically perfect, which is precisely why it convinces nobody.",
        ),
        tags: ["toefl", "speaking", "honesty"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "In one phrase: what fills a stall in an interview answer instead of silence?",
        hints: [],
        question: "What keeps Delivery alive when the next idea is still forming?",
        acceptedAnswers: ["a bridging phrase", "a bridge", "a connector spoken aloud", "a spoken bridge"],
        keywords: ["bridge", "connector"],
        feedback: fb(
          "A bridging phrase, spoken aloud.",
          "Bridges such as 'the other part of it is…' keep the voice moving for the two seconds an idea needs — normal spoken English, not a confession of weakness.",
          "Volume and speed do nothing for a stall; only spoken words carry Delivery evidence.",
        ),
        tags: ["toefl", "speaking", "fluency"],
      }),
    ],
    assignment: {
      title: "Your three-shape interview log",
      instructions:
        "Choose three questions from this lesson's examples, record a thirty-second answer to each, and write down for every recording: your first sentence, the one development you chose, and your closing words. Then add one short paragraph on which of the three answers was hardest to keep alive, and what you bridged with.",
      minWords: 60,
      maxWords: 180,
    },
    homework: [
      "Record one thirty-second interview answer every day this week on a new everyday question, and listen back only for the three moves: direct answer, development, clean close.",
      "Collect the questions you found hardest to start; for each, write only the first sentence — the direct answer — and practise saying it aloud until the opening is always immediate.",
    ],
  },
  {
    slug: "toefl-speaking-interview-language",
    title: "Grammar and vocabulary in interview answers",
    description:
      "The two language decisions behind every stable answer: matching the tense frame to the question's time signal, and reaching for the vocabulary that belongs to the topic's territory.",
    objectives: [
      "read a question's opening words as a tense instruction and hold that frame to the close",
      "match habitual, past, experience and future questions to their natural tenses",
      "choose topic-relevant vocabulary over general filler words",
      "self-correct a slip in three words and continue without losing the thread",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "An interview answer lives or dies on two language decisions made in the first two seconds: which tense the question calls for, and which words belong to its territory. This lesson drills both — stable tense control that holds from first verb to last, and topic-relevant vocabulary that sounds natural because it fits the field of the question — plus the professional habit of quick, unembarrassed self-correction.",
        beforeYouStart: [
          "You have trained the four-sentence interview shape: direct answer, development, close.",
          "You can hold a simple past-tense narrative for three sentences without switching.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Speaking — the Language use dimension of the four interview items"],
          ["Task & question types", "Everyday questions whose time signals dictate the tense, and whose territory dictates the vocabulary"],
          ["What is assessed", "Grammar control that stays stable across the answer, and vocabulary that is relevant and natural for the topic"],
          ["Why this matters", "Language use is one of the three rating dimensions, and it is the one most improved by two decisions made before you speak"],
        ],
      },
      { type: "heading", text: "Read the time signal first" },
      {
        type: "text",
        text: "Every interview question carries a time signal, usually in its first three words: 'What do you usually…' points at habits; 'Tell me about a time…' points at a finished past; 'How long have you…' points at experience continuing to now; 'What are your plans…' points forward. The trained move is to let that signal choose the tense before the first verb is spoken, and then to hold that tense for the whole answer. Most unstable answers are not weak in grammar knowledge; they simply never made the decision, so each new verb rolls a dice.",
      },
      {
        type: "grammar-rule",
        title: "Match the tense to the question's time signal",
        rule: "The question's time expression selects the tense of the answer: habits take the present simple, finished past events take the past simple, experience up to now takes the present perfect, and plans take 'going to' or 'will'.",
        explanation: "Choosing once, at the start, gives every following verb a frame to fit; the alternative — choosing verb by verb — is how tense drift enters spontaneous speech.",
        examples: [
          { english: "What do you usually do on Sundays? — I usually cycle along the river, and I cook something big in the evening.", translation: "" },
          { english: "Tell me about a trip you enjoyed. — Last autumn I visited the mountains, and the weather stayed perfect for three days.", translation: "" },
        ],
        exceptions: [
          "Experience questions may move between present perfect for the duration and past simple for one specific memory inside it: 'I've studied English for six years; my best year was the one with the podcast project.'",
        ],
      },
      {
        type: "table",
        title: "Time signals and their tenses",
        headers: ["Question opener", "Time it points to", "Tense to hold"],
        rows: [
          ["'What do you usually…'", "Repeated present habits", "Present simple, all verbs"],
          ["'Tell me about a time…'", "One finished event", "Past simple, all verbs"],
          ["'How long have you…'", "Experience continuing to now", "Present perfect, with past simple for single memories"],
          ["'What are your plans…'", "The future from now", "'Going to' or 'will', kept consistent"],
        ],
      },
      { type: "heading", text: "Vocabulary that belongs to the question" },
      {
        type: "text",
        text: "Every question opens a small territory — cooking, travel, study, sport, neighbourhood — and each territory has its natural words: the nouns, verbs and collocations people who actually do the thing would use. Topic-relevant vocabulary means reaching for those words rather than for general fillers like 'thing', 'stuff' or 'very good'. One specific noun — a second-hand guitar, the night market, a group assignment — does more for Language use than a rare word forced into the wrong context. The habit is simple: as you choose your one idea, let two or three territory words come with it.",
      },
      {
        type: "vocabulary-list",
        title: "Five territories, each with its natural words",
        words: [
          { word: "deadline", partOfSpeech: "noun", definition: "The time by which a piece of work must be finished", translation: "", example: { english: "The report deadline is Friday, so I blocked out Wednesday evening.", translation: "" } },
          { word: "commute", partOfSpeech: "noun", definition: "The regular journey between home and work or study", translation: "", example: { english: "My commute is twenty minutes by tram, which I spend reading.", translation: "" } },
          { word: "handout", partOfSpeech: "noun", definition: "A printed sheet a lecturer gives to students", translation: "", example: { english: "The professor posted the handout after the lecture ended.", translation: "" } },
          { word: "leftovers", partOfSpeech: "noun (plural)", definition: "Food kept from an earlier meal to eat later", translation: "", example: { english: "I cook twice a week and eat leftovers on the other days.", translation: "" } },
          { word: "itinerary", partOfSpeech: "noun", definition: "A planned route or schedule for a journey", translation: "", example: { english: "Our itinerary keeps the first two days completely unplanned.", translation: "" } },
          { word: "volunteer", partOfSpeech: "verb", definition: "To offer time and work without payment", translation: "", example: { english: "I volunteer at the shelter on Saturday mornings.", translation: "" } },
        ],
      },
      {
        type: "steps",
        title: "The two-second language check",
        intro: "Run this check in the preparation moment, before the first word is spoken.",
        steps: [
          {
            title: "Catch the signal",
            text: "Hear or read the question's opening words as a tense instruction, and let them select present, past, perfect or future before you begin.",
            examples: [
              { english: "'What did you…' arrives; past simple is already chosen before the first verb.", note: "The decision costs no speaking time — it happens during the preparation moment.", domain: "everyday" },
            ],
          },
          {
            title: "Hold the frame",
            text: "Keep every verb inside the chosen tense to the closing sentence; a stable simple frame outscores an ambitious unstable one.",
            examples: [
              { english: "I waited, I called, the technician came, it was fixed — four verbs, one tense, no drift.", note: "Stability is what Language use rewards in spontaneous speech.", domain: "community" },
            ],
          },
          {
            title: "Bring the territory words",
            text: "As the idea forms, let two or three words from the question's natural field arrive with it, and use them plainly.",
            examples: [
              { english: "A study question deserves 'deadline', 'notes' or 'revision' rather than 'things I must do'.", note: "Relevant nouns prove vocabulary without any rare-word risk.", domain: "education" },
            ],
          },
          {
            title: "Correct quickly and move on",
            text: "If a verb slips, repair it in three words — 'I go — sorry, I went' — and continue; dwelling on errors costs more than the errors do.",
            examples: [
              { english: "'She cook — sorry, she cooked for the whole floor' repairs in a breath.", note: "Natural self-correction is a fluency signal, not a confession.", domain: "everyday" },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "Questions and their language decisions",
        items: [
          { english: "Where did you grow up?", note: "'Did' fixes past simple before you start: 'I grew up in a coastal town famous for its fishing port.'", domain: "personal" },
          { english: "How long have you studied English?", note: "Duration to now means present perfect — 'for about six years' — with one past-simple memory inside if you want it.", domain: "education" },
          { english: "What will your life look like in five years?", note: "Future frame: 'I'll be working as a nurse' holds will plus a plain occupation noun from the territory.", domain: "work" },
          { english: "What kind of music do you enjoy?", note: "Tastes are present simple; the territory words are genres and instruments, not 'stuff'.", domain: "everyday" },
          { english: "Did you have a part-time job as a student?", note: "Past habit: 'I waited tables at a café near the campus' — job, place and past tense all in one natural line.", domain: "work" },
          { english: "Is your hometown a good place for young people?", note: "Evaluation in the present: name one specific feature — 'public transport is cheap' — rather than general praise.", domain: "community" },
        ],
      },
      {
        type: "mistakes",
        title: "Language errors corrected",
        items: [
          { wrong: "Last summer I go to the coast with my cousins.", right: "Last summer I went to the coast with my cousins.", reason: "The time signal chose past simple and the answer abandoned it on the very first verb — the most common drift in spoken tests." },
          { wrong: "I have many big things to do this semester.", right: "I have deadlines, a group assignment and two presentations this semester.", reason: "General quantity words hide the vocabulary Language use wants to hear; the territory nouns were available and went unnamed." },
          { wrong: "I am studying here since two years.", right: "I have studied here for two years.", reason: "Duration up to now takes present perfect with 'for' — mixing the frames signals an unfinished decision rather than a small slip." },
          { wrong: "My town is very very good and nice for young people.", right: "My town works well for young people: the universities are close together and rents stay reasonable.", reason: "Stacked intensifiers replace evidence; one specific feature carries the evaluation and the vocabulary at once." },
        ],
      },
      {
        type: "four-skills",
        title: "The two decisions, trained four ways",
        reading: {
          text: "A tutor's post-practice note. Listening back to your recording, I marked only two things, because those two carry most of the Language use story. First, every place the tense shifted without the question asking for a shift — 'I joined the club and we meet every Thursday' is fine, but 'I joined and we meet and I will organise' is a frame that lost its footing. Second, every place a general word stood where a territory word was waiting — 'my studies things' where 'deadline' or 'lab report' belonged. Fix the two decisions and the surface errors mostly follow, because most of them are decisions that were never made.",
          task: "Which two things did the tutor mark, and what claim does the tutor make about surface errors?",
        },
        writing: {
          task: "A coursemate's recorded answer to 'Tell me about a job you enjoyed' runs: 'I work in a shop last year and I learn a lot and the manager is very kind and I will never forget it.' Rewrite the answer in 60–90 words: fix the frame, hold it, and bring in three territory words.",
          guide: [
            "Open by fixing the frame: choose past simple once, and show the first corrected sentence.",
            "Hold the frame through the middle, replacing general words with territory nouns as you go.",
            "Close inside the same frame, and point out where the correction happened.",
            "Finish by naming the two decisions the coursemate skipped.",
          ],
          model: "The frame first: 'I worked in a shop last year' — past simple, chosen once. Then hold it: 'I learned a lot about the weekend rush, when the tills never stopped and every customer wanted wrapping paper.' Notice the territory words doing the work — shop, tills, customers, wrapping paper, weekend rush — instead of 'a lot' and 'very kind'. Close inside the frame: 'My manager was patient with my mistakes, and I left knowing how a real counter runs.' One tense, several territory words, one specific memory — and every sentence is sayable aloud exactly as written.",
        },
        listening: {
          script: "Tutor: Quick ear drill. I give the opener, you say the tense out loud before I count three. 'What do you usually…' — present habits, present simple. 'Tell me about the time you…' — one finished event, past simple, held to the end. 'How long have you…' — experience to now, present perfect. 'What are your plans…' — future, going to or will, pick one and stay. Signal, tense, hold — that little drill is worth five minutes of every practice session you will ever do.",
          task: "Which four openers does the tutor call, and what move follows each one?",
        },
        speaking: {
          task: "Take the four openers from the listening drill and answer each aloud with two sentences, holding the chosen tense and using at least one territory word per answer.",
          frames: [
            "The opener 'What do you usually…' means present…",
            "'Tell me about a time…' locks in the past…",
            "'How long have you…' calls for the present perfect with…",
            "My territory words for this answer are…",
          ],
          checklist: [
            "Did the tense stay in one frame from first verb to last?",
            "Did at least one territory word appear naturally?",
            "Did I repair any slip in three words and move on?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Fixes the frame first", "The rewrite opens by choosing past simple once — 'I worked' — so every following verb inherits the decision instead of re-rolling it."],
          ["Holds one tense visibly", "The past frame runs unbroken from first sentence to last, showing the coursemate what stability actually sounds like."],
          ["Brings the territory", "Shop, tills, customers, wrapping paper, weekend rush — the model's nouns come from the shop-job field, replacing 'a lot' and 'very kind' with evidence."],
          ["Stays sayable", "Every sentence in the rewrite is speech-length and natural, so it doubles as a speaking model, not just a correction on paper."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Drill the signal-to-tense match until it is a reflex: hear the opener, say the tense name, then a two-sentence answer."],
          ["While the clock runs", "Make the two decisions in the preparation moment — tense frame and two territory words — then spend the half-minute only on content."],
          ["If you are stuck", "If a verb slips, repair it in three words and continue; if a word is missing, name the thing plainly rather than hunting a rare one."],
          ["Final minutes", "On the last item, check only the frame: fatigue's favourite error is a tense that quietly changes mid-answer."],
        ],
      },
      {
        type: "summary",
        points: [
          "Let the question's opening words choose the tense before the first verb, then hold that frame to the close.",
          "Present simple for habits, past simple for finished events, present perfect for experience to now, will or going to for plans.",
          "Topic-relevant vocabulary means the territory's natural nouns and verbs — one specific word beats any stack of intensifiers.",
          "Self-correct in three words and move on; a quick repair reads as control, while dwelling reads as panic.",
          "Most surface errors are unmade decisions: fix tense and territory first and the rest largely follows.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions on this module so far.",
        items: [
          { question: "What shape should every interview answer follow?", options: ["Three ideas surveyed quickly", "A direct answer, one developed reason or example, then a deliberate close", "A memorised paragraph on a related topic"], correctIndex: 1, explanation: "The four-sentence shape that fits the half-minute — this lesson adds the two language decisions that happen inside it.", from: "Take an Interview: short, complete, fluent" },
          { question: "What should fill a stall instead of silence?", options: ["A bridge spoken aloud", "A deep breath and a pause", "A repetition of the question"], correctIndex: 0, explanation: "Connectors keep Delivery alive while the next thought forms — the rescue the previous lesson drilled.", from: "Take an Interview: short, complete, fluent" },
          { question: "Which word endings did the pronunciation lesson call 'grammar by ear'?", options: ["Final -s and -ed sounds", "Capital letters in written answers", "The first syllable of every word"], correctIndex: 0, explanation: "Number, tense and possession ride on word endings — the same information the tense frame of this lesson protects.", from: "Pronunciation and intelligibility" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "speaking",
        prompt: "The question is 'Tell me about a time you helped a neighbour.' Which tense frame should you choose before the first verb?",
        hints: ["Look at the opening words: 'Tell me about a time…'"],
        options: [
          { id: "a", text: "Present simple, because it is the safest tense" },
          { id: "b", text: "Past simple, held from first verb to last" },
          { id: "c", text: "Present perfect, because experience is involved" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Past simple, held from first verb to last",
          "'A time' names one finished event, and one finished event means past simple for every verb in the story — chosen once, then held.",
          "Present simple drifts the story into a routine, and present perfect belongs to duration questions like 'How long have you…', not single events.",
        ),
        tags: ["toefl", "speaking", "grammar"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Which answer to 'What do you usually do at weekends?' uses topic-relevant vocabulary best?",
        hints: [],
        options: [
          { id: "a", text: "I do many things and activities with many people and it is very nice." },
          { id: "b", text: "I usually cycle along the river, then cook something big and eat leftovers on Sunday." },
          { id: "c", text: "I perform diverse recreational operations during the weekend period." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "I usually cycle along the river, then cook something big and eat leftovers on Sunday.",
          "Concrete territory words — cycle, cook, leftovers — show Language use exactly what it listens for: natural, relevant vocabulary in real collocations.",
          "Option (a) is all quantity and no content; option (c) is rare words forced into the wrong register, which reads as memorised rather than natural.",
        ),
        tags: ["toefl", "speaking", "vocabulary"],
      }),
      ex({
        type: "speak-response",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Interview practice: an experience question in a present-perfect frame.",
        hints: [
          "Duration up to now takes 'have studied' or 've studied'.",
          "Add one past-simple memory inside the answer if you want a second layer.",
        ],
        situation:
          "Interview practice. The question reads: 'How long have you studied English?' Answer with the duration in present perfect, then add one specific memory or reason in a sentence of its own, and close deliberately.",
        targetPhrases: [
          "I've studied English for…",
          "I started around…",
          "I keep going because…",
        ],
        mustSay: ["for", "years", "because"],
        feedback: fb(
          "A present-perfect duration plus one supporting sentence and a clean close.",
          "'How long have you…' points at experience continuing to now, so the frame is present perfect with 'for' — and one concrete detail makes the answer yours rather than a formula.",
          "Answering 'I study English since two years' mixes two frames in four words — the exact drift this lesson exists to prevent.",
        ),
        tags: ["toefl", "speaking", "grammar"],
      }),
      ex({
        type: "speak-response",
        difficulty: "hard",
        skill: "speaking",
        prompt: "Interview practice: a plans question in a future frame.",
        hints: [],
        situation:
          "Interview practice. The question reads: 'What are your plans for the coming year?' Name one goal in your first sentence, give the first step you are already taking, and close with why it matters to you.",
        targetPhrases: [
          "Next year I'm going to…",
          "The first step I've taken is…",
          "It matters to me because…",
        ],
        mustSay: ["going to", "next year", "because"],
        feedback: fb(
          "One goal named early, one real step in progress, and a reason that closes the answer.",
          "Plans questions hold best in 'going to' or 'will' — pick one at the preparation moment and keep it; the step-plus-reason pattern fills the half-minute with development, not padding.",
          "Listing five hopes is the classic plans mistake: five undeveloped names leave Topic development with nothing to score.",
        ),
        tags: ["toefl", "speaking", "grammar"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Complete the frame rule.",
        hints: [],
        sentence: "Duration continuing to now takes the present perfect: 'I ___ studied English for six years.'",
        acceptedAnswers: ["have", "'ve"],
        feedback: fb(
          "have",
          "The present perfect pairs have or has with the past participle for experience stretching from then to now — 'for six years' is the classic duration marker.",
          "'Am studying' is present continuous, which describes right now only; the duration needs the perfect frame.",
        ),
        tags: ["toefl", "speaking", "grammar"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "In your own words: which two language decisions does this lesson train you to make in the preparation moment?",
        hints: [],
        question: "Name the two decisions made before speaking in an interview answer.",
        acceptedAnswers: [
          "the tense frame and the topic vocabulary",
          "tense and vocabulary",
          "which tense to hold and which topic words to use",
          "the tense frame and the territory words",
        ],
        keywords: ["tense", "vocabulary"],
        feedback: fb(
          "The tense frame and the topic vocabulary — the two decisions this lesson makes automatic.",
          "Deciding the frame once and bringing two or three territory words turns most surface errors into non-events, because the decisions were made before the pressure started.",
          "Deciding what to say is the previous lesson's job; this layer is about which language carries it.",
        ),
        tags: ["toefl", "speaking", "strategy"],
      }),
    ],
    assignment: {
      title: "Signal-to-tense sprint log",
      instructions:
        "Choose four question openers — habit, past event, experience and plans — and record a two-sentence answer for each, holding one tense frame per answer and using at least one territory word in each. Then write down your four first sentences, name the tense you held in each, and note any verb that slipped together with the repair you used.",
      minWords: 50,
      maxWords: 160,
    },
    homework: [
      "Build a personal territory list: for five everyday areas (study, work, food, travel, hometown), write five natural nouns or verbs each, and use three of them in tomorrow's recorded answer.",
      "Listen once to any recorded answer from this week and mark only tense changes; write down each change and the question opener that should have prevented it.",
    ],
  },
];
