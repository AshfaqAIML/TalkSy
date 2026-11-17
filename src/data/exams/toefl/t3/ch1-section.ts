/**
 * TOEFL iBT Academy — Module 3, Listening (T-M3, PROMPT 48 blueprint).
 * Chapter 1: The section (unit `toefl-listening-overview`, 1 lesson).
 *
 * Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts). Format facts carried
 * consistently through the module, verified against official ETS pages:
 *   Listening  up to 47 items, ~29 minutes, two-stage adaptive,
 *              forward-only — each recording plays once and a confirmed
 *              item never reopens. Four task types: Listen and Choose a
 *              Response, Listen to a Conversation, Listen to an
 *              Announcement, Listen to an Academic Talk.
 *   Sitting order: Reading → Listening → Writing → Speaking; ~90 minutes
 *   of timed sections, ~2 hours end to end. Recordings use a range of
 *   native-speaker accents; no accent is scored higher than another.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T3_CH1: LessonSpec[] = [
  {
    slug: "toefl-listening-overview",
    title: "Understanding the Listening section",
    description:
      "The operating rules of the 2026 Listening section: up to 47 items inside roughly 29 minutes, two-stage adaptivity, and the forward-only design that makes prediction — not replay — the skill worth training.",
    objectives: [
      "state the section's operating rules: item ceiling, time envelope, two-stage adaptivity and forward-only navigation",
      "explain why single-play delivery makes prediction and live commitment the core listening behaviours",
      "outline the four task families and the situations their recordings are drawn from",
      "run a personal readiness check before opening the task lessons in the next chapter",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "The Listening section is the second timed stretch of your TOEFL iBT sitting: up to 47 items inside roughly 29 minutes, every recording played once, and no item reopened after it has passed. This lesson fixes those operating rules — what the clock does, how two-stage adaptivity behaves between blocks, and why a rewind button will never rescue you — so that every technique lesson in this module trains something the format actually rewards rather than habits imported from other tests.",
        beforeYouStart: [
          "You have completed Module 1 and can recite the four sections, their item counts and their order.",
          "You can follow a short spoken exchange in English at close to normal speed.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Listening — sat straight after Reading and before the two productive sections"],
          ["Task & question types", "The four families this module covers one by one: Choose a Response, Conversation, Announcement, Academic Talk"],
          ["What is assessed", "Comprehension of spoken English from everyday exchanges to lecture passages, delivered once, under navigation that only moves forward"],
          ["Why this matters", "Technique that ignores the one-play, no-return design drills reflexes the test will never let you use"],
        ],
      },
      { type: "heading", text: "The numbers and the clock" },
      {
        type: "text",
        text: "Plan around an envelope, not a fixed count: up to 47 items inside about 29 minutes. The ceiling is 'up to' because the section adapts in two stages — your work in the first block of items routes you to a second block pitched easier or harder, so two candidates can meet different second halves within the same minutes. The clock runs across the section as a whole, which means your real budget is a rhythm: a steady walk through the families, not a sprint that arrives at the academic talks exhausted.",
      },
      { type: "heading", text: "One play, one pass: the forward-only rule" },
      {
        type: "text",
        text: "Each recording is delivered a single time, and once an answer is confirmed the item closes behind you — the screen will not show it again. This is the rule that separates Listening from every other section of the test: Reading and Writing allow you to move around within their material, while Listening only moves onward. The flag-and-revisit loop you may enjoy elsewhere has no equivalent here, and the practical consequence is simple: an item left blank on the promise of 'coming back later' is an item surrendered, not deferred.",
      },
      {
        type: "definition",
        term: "forward-only delivery",
        partOfSpeech: "noun phrase",
        definition: "A navigation design in which items are answered in sequence and never reopened; in the 2026 Listening section it applies both to the recordings, which play once, and to the on-screen items, which cannot be revisited after confirmation.",
        example: {
          english: "You hear a student query a library fine, answer the item about the outcome, and the section rolls on — the audio, the question and the chance are spent together.",
          translation: "",
        },
      },
      { type: "heading", text: "Why prediction replaces replay" },
      {
        type: "text",
        text: "Because nothing can be heard twice, marks are won before and during the first play, never after it. Prediction is the lawful substitute for replay: when you expect a date, a price or a change of plan, the arriving speech is checked against a hypothesis instead of decoded cold, and expected material is processed far faster than surprise material. Candidates who train anticipation report the same effect — the section feels slower, not because the audio slowed down, but because their ears were waiting in the right place.",
      },
      {
        type: "steps",
        title: "A preview routine you will reuse in every task lesson",
        intro: "Four moves that convert the forward-only rule from a threat into a routine.",
        steps: [
          {
            title: "Move 1: Read whatever is on screen before the audio starts",
            text: "Item stems, visible options, even the task name are free information. Two seconds of reading tells you whether to expect a date, a room number, a person's role or a reason — and that prediction decides what your pen is ready to catch.",
          },
          {
            title: "Move 2: Form the prediction as a slot, not a sentence",
            text: "Write a label like 'day?', 'cost?' or 'who acts?' rather than a guess in prose. A slot is cheap to hold, easy to fill, and it keeps your attention outward on the audio instead of inward on your own words.",
          },
          {
            title: "Move 3: Verify while the audio is live",
            text: "When the expected slot fills, capture it in your abbreviation system immediately, because the recording will not pause for your note and the next speaker may already be correcting the value you just wrote.",
          },
          {
            title: "Move 4: Commit before the item advances",
            text: "Choose, confirm, release. A decision taken while the audio is fresh beats a sharper decision taken never, and the forward-only rule guarantees that 'later' is not a real time in this section.",
          },
        ],
      },
      {
        type: "dialogue",
        title: "Two candidates compare notes on the operating rules",
        context: "A candidate who has just finished a full practice section explains the mechanics to a study partner.",
        lines: [
          { speaker: "Dana", text: "The part that unsettled me most was the navigation. Once I confirmed an answer, that screen was finished — no scrolling back, not even to the previous item." },
          { speaker: "Marek", text: "So the answer you give is the answer you keep, first time every time?" },
          { speaker: "Dana", text: "Exactly. And every recording played once, so while I was still polishing a note on one conversation, the announcement had already started." },
          { speaker: "Marek", text: "Then the discipline is obvious: decide while it plays, or the chance is gone." },
          { speaker: "Dana", text: "One more thing — the adaptivity is real. My second half felt noticeably denser because the early items had gone well." },
          { speaker: "Marek", text: "So a harder stretch midway means the machine thinks you are doing fine, not that you are collapsing." },
        ],
      },
      {
        type: "example",
        title: "The operating rules meeting real candidates",
        items: [
          { english: "A candidate clears the first block confidently and meets longer, denser exchanges in the second — the adaptive route rewards a strong start with harder material.", note: "Difficulty shifting between blocks is routing, not a verdict on your level; treat it as weather, not news.", domain: "exam" },
          { english: "A learner drills with a podcast she pauses and replays, posts high practice scores, then loses half her marks under one-play conditions.", note: "Replay practice measures memory plus a second chance; the section measures first-pass listening only.", domain: "study" },
          { english: "A shift manager reads new start times aloud once at a warehouse huddle; the picker who predicted 'times, not explanations' and wrote them down is the one who clocks in correctly.", note: "One-pass listening with prediction is a workplace skill long before it is a test skill.", domain: "work" },
          { english: "At a rail station a platform change crackles over the noise of a departing train; travellers who expected 'a platform number and a time' catch both, and the rest queue at the help desk.", note: "Public announcements grant exactly one clean hearing — the condition the Announcement task recreates.", domain: "everyday" },
          { english: "A student misses a seminar room change because the tutor announced it while handing back essays and the class was shuffling papers.", note: "Position predictions — where information tends to surface — work alongside content predictions.", domain: "education" },
          { english: "A candidate leaves a hard item blank, promising himself the final minutes to revisit it — a plan the forward-only rule converts into a guaranteed zero.", note: "Blank-and-return is a habit from sections that allow review; in Listening it is simply a forfeit.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Operating rules misread, marks lost",
        items: [
          { wrong: "The recordings will play a second time, the way listening tests used to.", right: "Every recording is delivered exactly once, and passed items never reopen.", reason: "Waiting for a replay changes how you listen to the first play — you relax at the exact moment the section demands full attention, and no second hearing arrives to repair it." },
          { wrong: "I will skip the difficult ones now and come back at the end with fresh eyes.", right: "Answer every item in sequence, because the section never shows an earlier item again.", reason: "The revisit loop belongs to other sections and other tests; carried into Listening, it converts a hard item into a lost one instead of a deferred one." },
          { wrong: "Adaptive means the test punishes me when I answer badly.", right: "Stage one routes you by performance — a strong start leads to a harder second block, a weak one to an easier one.", reason: "Adaptivity is routing, not punishment, and understanding this stops the mid-section difficulty shift from becoming panic that costs the following three items." },
        ],
      },
      {
        type: "four-skills",
        title: "The section rules in one classroom card",
        reading: {
          text: "Orientation card for the 2026 Listening section. Position: second timed section, after Reading, before Writing and Speaking. Envelope: up to 47 items in roughly 29 minutes. Delivery: each recording plays once, with no replay control. Navigation: forward only — a confirmed item closes and never returns. Adaptivity: the first block of items routes each candidate to an easier or harder second block. Coverage: four task families — the response task, the conversation, the announcement and the academic talk.",
          task: "Label each line of the card with the technique it forces: pace, commitment, routing or coverage.",
        },
        writing: {
          task: "A friend who last sat a paper-based listening test a decade ago asks what has changed. In 60–120 words, explain the three operating rules and what each one demands from the listener.",
          guide: [
            "Their memory: a recording played twice, an answer sheet to revisit…",
            "Rule one — delivery: each audio plays once, so the listener must…",
            "Rule two — navigation: items run forward only, so the listener must…",
            "Rule three — adaptivity: two stages route by performance, so a difficulty shift means…",
          ],
          model: "The section you remember has changed in three ways. First, delivery: each recording now plays once, so I have to predict what is coming and decide while the audio is still live rather than checking against a second play. Second, navigation: items run forward only, and once an answer is confirmed that screen never returns — which kills the skip-and-revisit habit and rewards committing on partial certainty. Third, adaptivity: the section routes by performance in two stages, so the difficulty I meet in the second half depends on the first half; a mid-section shift means the machine is working, not that I am failing.",
        },
        listening: {
          script: "Tutor: Quick orientation before you open the task chapters. The section gives you up to forty-seven items in about twenty-nine minutes, and every recording is played once. Once an item is answered, it is closed — the section moves forward and never back. It also adapts: your first block of items decides whether the second block runs easier or harder. So the habits worth building now are prediction, usable notes and quick commitment. Replay is not one of your tools in there.",
          task: "Which three habits does the tutor name as worth building?",
        },
        speaking: {
          task: "Without notes, explain to a partner in under a minute how the Listening section is organised and why prediction matters inside it.",
          frames: [
            "The section fits inside…",
            "Each recording plays…",
            "Once an item passes…",
            "Because there is no replay, the trainable skill is…",
          ],
          checklist: [
            "Did I give the item ceiling and the time envelope?",
            "Did I state the forward-only rule in my own words?",
            "Did I connect single-play delivery to prediction?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Accuracy", "Every claim in the model is a current format fact — item ceiling, time envelope, single play, forward-only navigation, two-stage routing — so the friend receives rules, not folklore."],
          ["Organisation", "The reply walks the three rules in the order a listener meets them — delivery, navigation, adaptivity — so the explanation reads as a timeline rather than a list."],
          ["Register", "The model answers a friend, so contractions and direct address carry the explanation while the facts underneath stay exact."],
          ["Technique link", "Each rule ends in its behavioural consequence — decide live, commit early, expect difficulty shifts — which is what makes the card usable under pressure rather than merely quotable."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Recite the operating card to yourself — one play, forward only, two stages, four families — thirty seconds that prime the whole section."],
          ["While the clock runs", "Keep the ~29-minute envelope in mind and commit on each item while its audio is warm; the next recording does not wait for your doubts."],
          ["If you are stuck", "Choose the most defensible option and advance — a committed guess is a live answer, and an abandoned item is nothing at all."],
          ["Final minutes", "There is no review loop to spend them on, so give the closing seconds to the final item's check instead of regret about earlier ones."],
        ],
      },
      {
        type: "summary",
        points: [
          "Up to 47 items inside roughly 29 minutes, sat after Reading and before Writing and Speaking.",
          "Every recording plays once, and a confirmed item never reopens: the section runs forward only.",
          "Two-stage adaptivity routes you by stage-one performance, so difficulty shifting between blocks is expected.",
          "Prediction, live commitment and usable notes are the behaviours the format rewards; replay and revisiting are not available.",
          "The four families — response, conversation, announcement and academic talk — each receive a full lesson in the next chapter.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from the Module 1 foundation lessons.",
        items: [
          { question: "Where does Listening sit in the sitting order?", options: ["First, before Reading", "Second, after Reading and before the productive sections", "Last, after Speaking"], correctIndex: 1, explanation: "The fixed order runs Reading, Listening, Writing, Speaking — so Listening arrives with one timed section already behind you.", from: "toefl-format-2026" },
          { question: "What does two-stage adaptivity mean for this section?", options: ["Everyone answers an identical second block", "Stage one routes each candidate to an easier or harder stage two", "Candidates choose their own difficulty"], correctIndex: 1, explanation: "The first block of items decides the pitch of the second — a routing system, not a choice and not a punishment.", from: "toefl-adaptive-testing" },
          { question: "Which habit from other sections must you leave behind here?", options: ["Flagging an item and returning to it later", "Reading stems before answering", "Watching the section clock"], correctIndex: 0, explanation: "Revisiting belongs to sections that allow review; forward-only navigation turns the flagged item into a forfeited one.", from: "toefl-time-management" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "listening",
        prompt: "Which set of operating rules describes the 2026 Listening section?",
        hints: ["Three constraints: the envelope, the delivery, the navigation."],
        options: [
          { id: "a", text: "Up to 47 items in about 29 minutes, one play per recording, no returning to passed items" },
          { id: "b", text: "A fixed 40 items in 30 minutes with each recording played twice" },
          { id: "c", text: "47 items with a ten-minute review window at the end of the section" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Up to 47 items in about 29 minutes, one play per recording, no returning to passed items",
          "The envelope, the single play and the forward-only navigation are the three constraints every technique in this module is built around, because together they decide when marks are won: during the audio, not after it.",
          "Option (b) imports an older two-play design, and option (c) invents a review window that would cancel the very rule this lesson exists to teach.",
        ),
        tags: ["toefl", "listening", "format"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the tutor's orientation remark, then answer.",
        hints: ["Listen for a passive phrase built on 'pitched'."],
        audioText:
          "Tutor: The section adapts in two stages. If your first block goes well, the second one will be pitched harder — that is the routing system working, not a sign that you are suddenly losing your touch.",
        question: "According to the tutor, how is the second block described after a strong first block?",
        acceptedAnswers: ["pitched harder", "harder"],
        keywords: ["harder", "pitched"],
        feedback: fb(
          "Pitched harder",
          "The tutor's phrase links adaptivity to consequence: a strong stage one routes you to a harder stage two, and recognising that reframes mid-section difficulty as evidence of success rather than collapse.",
          "Choosing 'easier' reverses the tutor's conditional; 'the same for everyone' ignores the routing that defines the section's two-stage design.",
        ),
        tags: ["toefl", "listening", "adaptivity"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Type the sentence you hear, word for word.",
        hints: [],
        audioText: "Each recording is played exactly once, so decide while it plays.",
        acceptedAnswers: ["Each recording is played exactly once, so decide while it plays."],
        feedback: fb(
          "Each recording is played exactly once, so decide while it plays.",
          "This single sentence carries the section's central discipline: single-play delivery plus live decision-making. If your version drifted into 'played twice' or 'decide later', you wrote the habit the format punishes rather than the rule it enforces.",
          "Common slips include 'played only once' for 'played exactly once' and 'when it plays' for 'while it plays' — small words, but they change the rule being stated.",
        ),
        tags: ["toefl", "listening", "dictation"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Read the practice report, then answer.",
        hints: [],
        passageTitle: "A candidate's practice log",
        passage:
          "Maya has been preparing with podcast episodes that she pauses and replays, and her untimed practice scores are high. In her first timed section she lost her place after the second recording: she was still mentally replaying the previous conversation when the announcement began, and three items had passed before she rejoined the audio.",
        question: "Which preparation habit most directly failed Maya?",
        options: [
          { id: "a", text: "She practised with replay instead of one-play, forward-only conditions" },
          { id: "b", text: "She chose podcasts instead of recorded lectures" },
          { id: "c", text: "She spent too little time memorising vocabulary lists" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "She practised with replay instead of one-play, forward-only conditions",
          "Maya's scores measured memory with a safety net, and the moment the net was removed her rhythm collapsed: the test does not pause between recordings, so training must include that reality.",
          "Option (b) targets her material rather than her method, and option (c) invents a vocabulary problem the log never mentions — the log describes a conditions problem, not a knowledge problem.",
        ),
        tags: ["toefl", "listening", "practice"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "listening",
        prompt: "Why does this module train prediction instead of memory drills?",
        hints: ["Think about what happens to expected speech versus surprise speech."],
        options: [
          { id: "a", text: "Because expected material is processed faster than surprise material when there is no replay" },
          { id: "b", text: "Because memory drills are banned by the test publishers" },
          { id: "c", text: "Because the section's clock is shorter than the span of human memory" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Because expected material is processed faster than surprise material when there is no replay",
          "Prediction converts unknown speech into expected speech: a listener waiting for a date checks arriving numbers against a hypothesis instead of decoding cold, and that speed advantage is the entire value of the preview routine.",
          "Option (b) is invention, and option (c) confuses retention with processing speed — the clock does not shorten; the listening load does, when prediction has done its work.",
        ),
        tags: ["toefl", "listening", "prediction"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "Listen to the clerk's instruction, then answer.",
        hints: [],
        audioText:
          "Clerk: Your practice-booth session is booked for ten past two, and please come ten minutes early so we can check the headphones before you start.",
        question: "How early does the clerk ask the candidate to arrive?",
        acceptedAnswers: ["ten minutes early", "ten minutes"],
        keywords: ["ten", "early"],
        feedback: fb(
          "Ten minutes early",
          "The arrival instruction rides on the end of a longer sentence that also carries a booking time, and detail questions of exactly this shape appear throughout the section — the value asked for is the early-arrival margin, not the session time itself.",
          "Answering 'ten past two' grabs the booking time the question never asked for; it is the classic right number for the wrong slot.",
        ),
        tags: ["toefl", "listening", "detail"],
      }),
    ],
    assignment: {
      title: "The operating card, in your own words",
      instructions:
        "Imagine a classmate who missed the first lesson of this module and sits a practice section tomorrow. In 40–120 words, write them a message that covers the item ceiling and time envelope, the delivery and navigation rules, and the one behaviour you most want them to change — with a reason for each.",
      minWords: 40,
      maxWords: 120,
    },
    homework: [
      "Write your own three-line operating card — envelope, navigation rule, adaptivity rule — and recite it before every practice set in this module.",
      "Take any two-minute podcast clip: listen once with notes, then again with replay allowed, and compare what you captured; bring both note sets to the next lesson.",
    ],
  },
];
