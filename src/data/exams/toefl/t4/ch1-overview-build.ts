/**
 * TOEFL iBT Academy — Module 4, Writing · Chapter file 1 (T-M4, PROMPT 48).
 *
 * Chapter coverage of `t4-writing.ts`:
 *   · toefl-writing-overview   (unit "The section")        — 1 lesson
 *   · toefl-build-sentence     (unit "Build a Sentence")   — 2 lessons
 *
 * Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts). Format facts verified
 * against ETS's published 2026 pages: Writing is 12 items in ~23 minutes,
 * linear — ten Build a Sentence reconstruction items (~1 minute each), one
 * Write an Email (~5 minutes, a situation with points to cover, tone fitted
 * to the recipient) and one Write for an Academic Discussion (~10 minutes,
 * professor's question plus classmates' posts, 100+ words). Constructed
 * responses are rated against scoring guides organised around Development,
 * Organization and Language use on the 1.0–6.0 band scale. Practice band
 * labels in these lessons — including AI-assisted ones — are estimates for
 * study purposes, never official ETS scores, and nothing here reproduces
 * official ETS content.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T4_CH1: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  // Unit 1 — The section
  // ---------------------------------------------------------------------------
  {
    slug: "toefl-writing-overview",
    title: "Understanding the Writing section",
    description:
      "The complete map of the 2026 Writing section: twelve items in roughly twenty-three minutes — ten sentence reconstructions, one email and one academic discussion post — plus the scoring-guide areas that decide what graders reward and the minute budget that decides whether they ever see your best work.",
    objectives: [
      "state what the twelve Writing items are, the order they arrive in, and roughly how long each family takes",
      "budget the ~23 minutes across the reconstruction block, the email and the discussion post",
      "describe the three scoring-guide areas and what each one rewards",
      "explain what makes a practice band label an estimate rather than a score",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "You already know the 2026 test has four timed sections; this lesson zooms in on the third of them. Writing asks for twelve items in roughly twenty-three minutes: ten scrambled-sentence rebuilds followed by an email and an academic discussion post. The lesson maps what each family demands, sets the minute budget the section rewards, and introduces the scoring-guide areas that shape every technique lesson that follows.",
        beforeYouStart: [
          "You can name the four sections and their order from the Module 1 format lesson.",
          "You know the 1.0–6.0 band scale, its half steps and its lack of a pass mark.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the third timed section, after Reading and Listening, before Speaking"],
          ["Task & question types", "Build a Sentence (10 items), Write an Email (1), Write for an Academic Discussion (1)"],
          ["What is assessed", "Accuracy and speed at reconstruction; development, organisation and language use on the two written tasks, rated against scoring guides"],
          ["Why this matters", "A candidate who budgets the ~23 minutes badly can write well and still score poorly — the section rewards planning as much as prose"],
        ],
      },
      { type: "heading", text: "Twelve items in three families" },
      {
        type: "text",
        text: "The Writing section is a fixed, linear shape: every candidate meets the same twelve items in the same order. Ten of them are Build a Sentence items — each shows the parts of one sentence out of order, and your job is to rebuild it correctly, at roughly a minute per item. The eleventh is Write an Email: a short everyday or campus situation with points to cover, answered in about five minutes in a tone that fits the recipient. The twelfth is Write for an Academic Discussion: a professor's question plus classmates' posts, answered in about ten minutes with a position of your own. There is no long essay anywhere in the 2026 section — the two constructed tasks are deliberately short and fit for purpose.",
      },
      { type: "heading", text: "The section on one card" },
      {
        type: "table",
        title: "The Writing section at a glance",
        headers: ["Task family", "Items", "Time", "The job"],
        rows: [
          ["Build a Sentence", "10", "~10 minutes", "Reorder scrambled parts into one correct sentence — about a minute each"],
          ["Write an Email", "1", "~5 minutes", "Answer an everyday or campus situation, covering every listed point in the right tone"],
          ["Write for an Academic Discussion", "1", "~10 minutes", "Post a position on the professor's question, engage classmates and support the position with reasons"],
        ],
        caption: "The three published allowances sum to slightly more than the ~23-minute section — treat them as rounded guides and bank your spare seconds on the reconstruction block.",
      },
      { type: "heading", text: "What the scoring guides reward" },
      {
        type: "text",
        text: "Both constructed responses are rated against scoring guides built around three areas. Development is content: the points the situation lists actually covered, a position actually stated, reasons actually given. Organization is shape: ideas sitting in a sensible order, with connections a reader can follow from sentence to sentence. Language use is the machinery: grammar, syntax and vocabulary that stay accurate at the register the task demands. The section band lands on the same 1.0–6.0 scale as every other section, in half steps, and feeds the overall average like the rest. Two honesty notes travel with any score talk in this Academy: practice estimates — including AI-assisted evaluation of your drafts — are estimates for study purposes and never official ETS scores, and nothing in this module reproduces official ETS content.",
      },
      {
        type: "steps",
        title: "Budgeting the twenty-three minutes",
        intro: "The arithmetic of the section decides your technique before a single sentence is written.",
        steps: [
          {
            title: "Step 1: Give the reconstruction block about ten minutes",
            text: "Ten items at about a minute each. Items you solve in forty seconds bank time for the two tasks that need it; items that resist get one calm attempt and a decision, because every minute spent polishing a finished rebuild is a minute the discussion post never sees.",
            examples: [{ english: "Forty seconds per rebuild across ten items leaves two extra minutes for the discussion post.", note: "Speed on the block is speed you spend on prose." }],
          },
          {
            title: "Step 2: Cap the email at five minutes",
            text: "The email is short by design: a greeting, a purpose line, a sentence or two per listed point, a close. If the draft runs past five minutes, something is being over-written — and it is almost always the opening.",
            examples: [{ english: "A three-point email at seventy seconds per point, plus greeting and close, fits inside five minutes with a sweep to spare.", note: "Count the listed points before you type." }],
          },
          {
            title: "Step 3: Protect ten minutes for the discussion",
            text: "The discussion post carries the heaviest constructed weight: position, engagement with classmates, supported reasons, at least a hundred words. It cannot be improvised in a final three minutes, so the budget above it is a promise, not a suggestion.",
            examples: [{ english: "A candidate who reaches the discussion at the twelve-minute mark writes a developed post; one who arrives at nineteen writes a list.", note: "Where the post begins decides what it can become." }],
          },
          {
            title: "Step 4: Hold the final minute for a register sweep",
            text: "One reread of both constructed responses, hunting tone slips in the email and missing engagement in the post — the cheapest marks in the whole section to repair.",
            examples: [{ english: "The sweep catches 'Hey' in a formal email and a post that never names a classmate — two faults, one minute.", note: "Cheap repairs are the point of the last minute." }],
          },
        ],
      },
      { type: "heading", text: "Two constructed tasks, two readers" },
      {
        type: "comparison",
        title: "The email and the discussion post, side by side",
        columns: ["Write an Email", "Write for an Academic Discussion"],
        rows: [
          { aspect: "Reader", left: "A named or unnamed real-world recipient: an office, a landlord, a housemate", right: "A professor and classmates in an online class discussion" },
          { aspect: "Register", left: "Matched to the recipient — formal, semi-formal or informal", right: "Academic but conversational: measured stance, no slang, no stiffness" },
          { aspect: "Shape", left: "Greeting, purpose line, a sentence or two per listed point, close", right: "Position, engagement with at least one classmate, supported reasons" },
          { aspect: "Length", left: "A short screenful — long enough to cover the points, no more", right: "At least 100 words, developed rather than padded" },
        ],
        verdict: "Same scoring areas, different furniture: the email succeeds by fit, the discussion by substance.",
      },
      {
        type: "definition",
        term: "scoring guide",
        partOfSpeech: "noun phrase",
        definition: "The rubric a rater applies to a constructed response, organised around development, organisation and language use; on the 2026 Writing section it produces the band the section reports on the 1.0–6.0 scale.",
        example: {
          english: "A post that states a clear position but supports it with nothing lands low on development, however clean its grammar.",
          translation: "",
        },
      },
      {
        type: "definition",
        term: "constructed response",
        partOfSpeech: "noun phrase",
        definition: "An item answered by producing language rather than selecting or rebuilding it — on this section, the email and the discussion post, graded for content and language quality together.",
        example: {
          english: "A reconstruction item hands you every word; a constructed response expects the words to come from you.",
          translation: "",
        },
      },
      {
        type: "example",
        title: "The three families at the screen",
        items: [
          { english: "A reconstruction item on screen: 'until five' / 'the housing office' / 'is open' / 'on weekdays' / '.' — all four chunks and the full stop are given; only the order is yours.", note: "The task is order, not invention: nothing outside the chunks belongs in the rebuild.", domain: "exam" },
          { english: "An email prompt: your housemate Sam asks whether the two of you should switch to a cheaper phone plan; the situation lists three points to cover — the current cost, one risk of switching, and your recommendation.", note: "Count the listed points before writing: each one is a scored job for a sentence.", domain: "everyday" },
          { english: "A discussion prompt: Professor Okonkwo asks whether first-year students should take a part-time job, and two classmates have already posted opposite views.", note: "The classmates' posts are not scenery — responding to them is part of the scored task.", domain: "academic" },
          { english: "A candidate finishes the reconstruction block at the twelve-minute mark and still writes a stronger section than a faster neighbour who spent those minutes re-checking finished items.", note: "Banked minutes convert into developed prose; re-read minutes convert into nothing.", domain: "exam" },
          { english: "The housing-office email opens 'Dear Sir or Madam,' while the housemate email opens 'Hi Sam,' — same writer, same hour, two different registers.", note: "The recipient sets the register before the first sentence exists.", domain: "everyday" },
          { english: "A practice report labels a discussion post 'estimated 4.0 — organisation strong, development thin', and the writer's next drill is reasons, not vocabulary.", note: "Estimates earn their keep by naming the next action, never by standing in for a certificate.", domain: "study" },
        ],
      },
      {
        type: "four-skills",
        title: "A first tour of the section",
        reading: {
          text: "The section opens with the ten reconstruction items, one at a time, each showing its scrambled chunks. When the block ends, the email situation appears with its listed points; the discussion comes last, carrying the professor's question, two classmate posts and the largest single share of the clock.",
          task: "Before anything else: name the three families in the order you meet them, and attach a minute figure to each.",
        },
        writing: {
          task: "In three or four sentences, tell a friend which of the three task families you expect to find hardest, and one reason why.",
          guide: [
            "Name the family first: 'The family I expect to struggle with is...'",
            "Give one concrete reason connected to time, grammar or tone.",
            "Finish with the fix you will try first.",
          ],
          model:
            "The family I expect to find hardest is the academic discussion, because improvising a position under a clock has never been my strength. Reconstruction feels more solvable: every part is already on the screen, and the grammar decides the order. My first fix is to rehearse a two-sentence position template until it runs without thinking.",
        },
        listening: {
          script:
            "Twelve items, three families, one direction of travel. The reconstruction block goes by fast — a minute an item — and the two minutes you save there are the opening lines of your discussion post. The email gets five; resist giving it six. The discussion needs ten and will absorb fifteen if you let it, so decide in advance where its minutes come from. Last minute of the section: sweep both constructed responses for register slips. That is the whole map — everything else this module teaches is technique inside these boundaries.",
          task: "Listen once, then say where the two saved reconstruction minutes go.",
        },
        speaking: {
          task: "Tell a partner the three families and your minute budget in thirty seconds.",
          frames: [
            "The twelve items break into...",
            "I am giving the reconstruction block about...",
            "The heaviest constructed task is..., because...",
          ],
          checklist: [
            "Did I name all three families?",
            "Did I give each a minute figure?",
            "Did I say which constructed task carries more weight?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Task awareness", "Names one specific family and commits to a reason — the diagnostic habit the whole module is built on"],
          ["Honest self-assessment", "Separates the solvable reconstruction block from the improvisation-heavy discussion instead of claiming weakness everywhere"],
          ["Action orientation", "Ends with a concrete fix — a rehearsed position template — so the diagnosis becomes next week's practice, not a mood"],
          ["Economy", "Four sentences carry position, reason, contrast and fix: the same compactness the email task will demand"],
        ],
      },
      {
        type: "mistakes",
        title: "Misreadings of the section, corrected",
        items: [
          { wrong: "The Writing section is one long essay.", right: "It is twelve items in three families: ten reconstructions, one email and one discussion post.", reason: "The 2026 format has no standalone essay; the constructed weight sits in two short, fit-for-purpose responses instead." },
          { wrong: "Writing adjusts its difficulty to how I am doing, like Reading.", right: "The section is linear — fixed shape, fixed order, the same twelve items for every candidate.", reason: "Confusing adaptive sections with linear ones produces phantom pacing decisions, such as saving energy for a harder second module that never arrives." },
          { wrong: "A longer discussion post always earns a higher band.", right: "Development, organisation and language use decide the band — length only helps when it adds supported content.", reason: "Padding dilutes: an unsupported fifth paragraph is empty development, and raters read for substance, not word count." },
          { wrong: "A practice tool can tell me my official writing score in advance.", right: "Practice evaluation gives estimates for study purposes; only the real test produces the score institutions receive.", reason: "Honest preparation separates feedback from certification — an estimate guides your next session, nothing more." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Recite the section card from memory — ten reconstructions, one email, one discussion post, ~23 minutes — so the budget exists before the first item appears"],
          ["While the clock runs", "Watch the family clocks, not the item clock: the reconstruction block should end near the ten-minute mark however any single item feels"],
          ["If you are stuck", "Name the family you are in and its allowance; over-running a family is the section's one unrecoverable error"],
          ["Final minutes", "Give the last minute to a register sweep of both constructed responses — tone slips and missing engagement are the cheapest marks to repair"],
        ],
      },
      {
        type: "summary",
        points: [
          "Twelve items in roughly twenty-three minutes: ten Build a Sentence reconstructions, then a ~5-minute email, then a ~10-minute discussion post.",
          "The section is linear and identical in shape for every candidate; pacing, not navigation, is the variable you control.",
          "Both constructed responses are rated against scoring guides organised around development, organisation and language use, on the 1.0–6.0 band scale.",
          "The published family allowances sum slightly above the section length — bank spare seconds on easy reconstructions and spend them on the discussion.",
          "Practice band labels, including AI-assisted ones, are estimates for study purposes and never official ETS scores.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions from earlier TOEFL lessons.",
        items: [
          { question: "Which sections of the 2026 test are two-stage adaptive?", options: ["Reading and Listening", "Speaking and Writing", "All four"], correctIndex: 0, explanation: "Reading and Listening adapt between modules; Writing keeps a fixed linear shape, which is why its budget never moves.", from: "Adaptive testing: how the test adjusts to you" },
          { question: "Where does Writing sit among the timed sections?", options: ["First, before Reading", "Third — after Reading and Listening, before Speaking", "Last, after Speaking"], correctIndex: 1, explanation: "The running order is Reading, Listening, Writing, Speaking — you arrive at this section already two sections deep.", from: "The 2026 format, section by section" },
          { question: "Section bands are reported on which scale?", options: ["0–9 in whole bands", "1.0–6.0 in half steps", "0–120 points"], correctIndex: 1, explanation: "Every section reports a band between 1.0 and 6.0 in half steps, and the overall is the four-band average rounded to the nearest half.", from: "The 1–6 band scale" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which list describes the twelve Writing items correctly?",
        hints: ["Three families — count them on the section card."],
        options: [
          { id: "a", text: "Ten sentence reconstructions, one email and one discussion post" },
          { id: "b", text: "One long essay divided into twelve paragraphs" },
          { id: "c", text: "Ten emails and two discussion posts" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Ten sentence reconstructions, one email and one discussion post",
          "The section runs ten Build a Sentence items first, then the email, then the discussion post — three families, one fixed order, roughly twenty-three minutes.",
          "The 2026 section contains no long essay, and no family appears ten times except reconstruction.",
        ),
        tags: ["toefl", "writing", "structure"],
      }),
      ex({
        type: "multi-select",
        difficulty: "medium",
        skill: "writing",
        prompt: "Select every true statement about the 2026 Writing section.",
        hints: ["Three of the four statements match the section card; one belongs to Reading."],
        options: [
          { id: "a", text: "It is linear — the same fixed shape for every candidate" },
          { id: "b", text: "It allows roughly twenty-three minutes in total" },
          { id: "c", text: "Its constructed responses are rated against scoring guides covering development, organization and language use" },
          { id: "d", text: "It adapts its difficulty to your performance, like Reading" },
        ],
        correctOptionIds: ["a", "b", "c"],
        feedback: fb(
          "Linear shape, ~23 minutes, scoring-guide rating — the fourth statement confuses Writing with the adaptive Reading section.",
          "Writing is a fixed-shape section: twelve items in the same order for everyone, judged against the writing scoring guides rather than adapted mid-stream.",
          "Adaptivity belongs to Reading and Listening in the 2026 format; expecting it here leads to wrong pacing decisions.",
        ),
        tags: ["toefl", "writing", "structure"],
      }),
      ex({
        type: "short-answer",
        difficulty: "easy",
        skill: "writing",
        prompt: "Independent practice. One phrase is enough.",
        question: "The email and the discussion post are rated against what?",
        acceptedAnswers: ["scoring guides", "the scoring guides", "the writing scoring guides", "scoring guides for development, organization and language use"],
        keywords: ["scoring guides"],
        hints: [],
        feedback: fb(
          "Scoring guides.",
          "Both constructed responses are judged against scoring guides organised around development, organisation and language use, producing a band on the 1.0–6.0 scale.",
          "'Rubric' names a similar idea, but the scoring-guide phrasing is what your practice reports will use.",
        ),
        tags: ["toefl", "writing", "scoring"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Read the candidate's plan, then answer.",
        hints: [],
        passageTitle: "A minute plan gone wrong",
        passage:
          "Priya writes her plan before the section starts: ten reconstructions at two minutes each, the email in five, and whatever remains for the discussion post. She finishes the reconstruction block at the nineteen-minute mark and begins the discussion with four minutes left.",
        question: "Which budget error did the plan build in?",
        options: [
          { id: "a", text: "The email was given too little time" },
          { id: "b", text: "Reconstructions were allowed double their intended share, starving the discussion post" },
          { id: "c", text: "Nothing — the plan matches the published allowances" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Reconstructions were allowed double their intended share, starving the discussion post",
          "Ten items at about a minute each is the intended share; doubling it hands the discussion's minutes to the one family that needs them least.",
          "The email's five minutes is its published allowance, so (a) misreads the arithmetic, and (c) ignores that the section's total is ~23 minutes, not twenty-five.",
        ),
        tags: ["toefl", "writing", "pacing"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "A practice tool returns an 'estimated 4.5' for your discussion post. What is that figure, honestly?",
        hints: [],
        options: [
          { id: "a", text: "An official ETS score you can report to institutions" },
          { id: "b", text: "A practice estimate for study purposes — not an official ETS score" },
          { id: "c", text: "A guarantee of the band you will receive on test day" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A practice estimate for study purposes — not an official ETS score",
          "Practice evaluation, including AI-assisted feedback, is labelled an estimate in this Academy; only the real test produces the score institutions receive.",
          "No practice tool can issue official scores and no estimate can guarantee a result — both claims are the dishonesty this course refuses.",
        ),
        tags: ["toefl", "writing", "honesty"],
      }),
    ],
    homework: [
      "Write your own one-line-per-family budget card for the ~23 minutes — reconstruction block, email, discussion, final sweep — and pin it where you practise.",
      "Find the three scoring-guide areas (development, organisation, language use) in any practice rubric you own, and mark which of the three your most recent piece of writing was weakest on.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Unit 2 — Build a Sentence
  // ---------------------------------------------------------------------------
  {
    slug: "toefl-writing-build-sentence",
    title: "Build a Sentence: order and speed",
    description:
      "The reconstruction drill itself: what a scrambled item puts on the screen, the anchor-and-slot method that turns it into a committed sentence inside a minute, and the checking habit that catches slips without re-reading everything.",
    objectives: [
      "anchor every rebuild by pinning the opener, the closer and the subject–verb spine before placing any other chunk",
      "use capitalisation, end punctuation and connectors as ordering evidence",
      "commit to an order within about a minute and check with one silent pass instead of re-reading",
      "scramble and rebuild your own sentences as a daily speed drill",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Reconstruction is the quiet bulk of the Writing section: ten of its twelve items ask you to reassemble one scrambled sentence, at roughly a minute each. Nothing in the item is hidden — every word you need is already on the screen — so the skill is method, not invention. This lesson installs a four-step routine that turns a scrambled pile into a committed sentence inside the minute, plus the checking habit that catches slips without re-reading everything.",
        beforeYouStart: [
          "You can find the subject and the main verb of an ordinary English sentence.",
          "You know from 'Understanding the Writing section' that the reconstruction block owns about ten minutes.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the ten Build a Sentence items that open the section"],
          ["Task & question types", "Reconstruction: reorder scrambled parts into one correct sentence, ~1 minute per item, no partial credit"],
          ["What is assessed", "Word order, grammatical accuracy and the connectors that hold a sentence together — judged as one right answer"],
          ["Why this matters", "Ten of twelve items live here: a method that saves fifteen seconds an item banks two-plus minutes for the discussion post"],
        ],
      },
      { type: "heading", text: "What the item puts on the screen" },
      {
        type: "text",
        text: "Each reconstruction item presents the parts of one sentence — usually phrase-sized chunks, not single words — shuffled out of order. You rebuild the sentence and move on; there is no partial credit for a nearly correct order. The design hides two mercies in plain sight: one chunk begins with a capital letter, and one carries the sentence's final punctuation. Those two chunks are pinned before you think about anything else — the opener and the closer — and everything else is arranged between them. Chunks move as blocks, never as loose words: 'the housing office' is one unit with one job, and treating it as three separate words is how the minute disappears.",
      },
      { type: "heading", text: "The anchor-and-slot method" },
      {
        type: "steps",
        title: "Four steps inside the minute",
        intro: "The method runs the same loop on every item, which is exactly why it stays fast under pressure.",
        steps: [
          {
            title: "Step 1: Pin the opener and the closer",
            text: "The capitalised chunk almost always opens the sentence; the chunk holding the full stop, question mark or exclamation mark closes it. Two edges of the puzzle are fixed before any grammar is consulted.",
            examples: [{ english: "Chunks: 'on weekdays' / 'The campus gym' / 'closes early' / '.' — the opener is 'The campus gym', the closer is the full stop.", note: "Two edges pinned, two chunks left to place." }],
          },
          {
            title: "Step 2: Seat the spine",
            text: "English word order runs subject–verb–object: find the chunk that names who or what, and the chunk that holds the main verb, and put them side by side. Agreement usually confirms the pair — a singular subject wants 'closes', not 'close'.",
            examples: [{ english: "'The campus gym' + 'closes early' seat together at once; 'The campus gym close early' fails agreement and the ear.", note: "The subject–verb pair is the sentence's spine." }],
          },
          {
            title: "Step 3: Attach the modifiers after their anchors",
            text: "Time and place phrases usually stack late — clock time before day, day before period. Reason chunks introduced by 'because' explain the main claim, so they follow it. Describing chunks sit immediately beside the noun they describe.",
            examples: [{ english: "'...opens at seven on weekdays in the summer term' — clock, then day, then period, each wider than the last.", note: "Modifiers trail their anchors in a predictable order." }],
          },
          {
            title: "Step 4: Run the five-second check and commit",
            text: "Read the rebuilt sentence once, silently, at speaking speed. A broken rebuild stumbles — a verb that disagrees, a modifier floating loose, a connector pointing the wrong way. One clean pass, then commit and advance.",
            examples: [{ english: "'The campus gym closes early on weekdays' reads clean in one pass; 'Closes early the campus gym on weekdays' stumbles at the first word.", note: "The ear catches in a second what the eye re-reads for a minute." }],
          },
        ],
      },
      { type: "heading", text: "Where the minute goes" },
      {
        type: "text",
        text: "Budget the minute in three slices: fifteen seconds to read the chunks and pin the edges, thirty to seat the spine and attach the modifiers, ten for the silent check — and five in reserve. A chunk that still refuses to seat at the sixty-second mark gets your best-supported order and the item is finished. Ten items run this loop; the two minutes the loop saves on easy items become the discussion post's opening sentences, which is the only place in the section where spare time can still buy marks.",
      },
      {
        type: "sentence-diagram",
        sentence: "The campus gym closes early on weekdays.",
        parts: [
          { label: "Opener (subject chunk)", text: "The campus gym" },
          { label: "Spine (verb chunk)", text: "closes early" },
          { label: "Modifier (time stack)", text: "on weekdays" },
          { label: "Closer (punctuation)", text: "." },
        ],
      },
      {
        type: "example",
        title: "Reconstructions, worked at the screen",
        items: [
          { english: "Chunks: 'every second Friday' / 'The department publishes' / 'a newsletter' / '.' → The department publishes a newsletter every second Friday.", note: "The subject–verb chunk carries the capital; the time phrase parks at the end of the line.", domain: "campus" },
          { english: "Chunks: 'the deadline' / 'which the tutor extended' / 'last week' / 'seemed reasonable' / '.' → The deadline, which the tutor extended last week, seemed reasonable.", note: "A which-chunk must sit beside the noun it describes — the chunk boundary is also the comma boundary.", domain: "campus" },
          { english: "Chunks: 'at the registration desk' / 'You can collect' / 'your student card' / 'until six' / '.' → You can collect your student card at the registration desk until six.", note: "Place before time in the end stack: 'at the desk' lands before 'until six'.", domain: "campus" },
          { english: "Chunks: 'the results of the survey' / 'were surprising' / 'to everyone in the class' / '.' → The results of the survey were surprising to everyone in the class.", note: "A long subject chunk is one block, not four words to interleave — chunks move whole.", domain: "academic" },
          { english: "A rebuild of the campus-gym item reads 'On weekdays the campus gym closes early.' — grammatical, but impossible here: no chunk carries an initial capital on 'On', and the capitalised chunk is 'The campus gym'.", note: "When two orders are both grammatical, the capitalisation decides — read the punctuation before arguing with yourself.", domain: "exam" },
          { english: "A candidate spends two minutes forcing 'every second Friday' in front of 'publishes', then reaches the discussion post with nine minutes instead of eleven.", note: "The minute cap is part of the task; discipline on the block is a scoring decision about the post.", domain: "exam" },
        ],
      },
      {
        type: "four-skills",
        title: "Reconstruction studio",
        reading: {
          text: "A scrambled item as it appears: 'before the seminar' / 'the readings' / 'You should complete' / 'always' / '.' — five chunks, one capitalised, one carrying the full stop.",
          task: "Order the five chunks in your head before opening the writing tab, then check your order against it.",
        },
        writing: {
          task: "Write one eight-to-twelve-word sentence about your own study routine, then cut it into four or five chunks on paper and shuffle them for a partner to rebuild.",
          guide: [
            "Draft the sentence whole, in full, before cutting anything.",
            "Cut at phrase boundaries — where you would pause if reading aloud.",
            "Shuffle so that no chunk keeps its natural neighbour.",
            "Mark which chunk carries the capital and which carries the full stop.",
          ],
          model:
            "Original: I review vocabulary cards after dinner every weekday. Chunks: 'I review' / 'vocabulary cards' / 'after dinner' / 'every weekday' / '.' — shuffled for the partner: 'every weekday' / 'I review' / 'after dinner' / 'vocabulary cards' / '.' The capital pins 'I review' as the opener, the full-stop chunk closes, and the time stack gives 'after dinner' before 'every weekday'.",
        },
        listening: {
          script:
            "Pin the edges first — the capital opens, the full stop closes. Seat the spine next: the doer chunk beside the verb chunk, with agreement checking the marriage. Attach the modifiers after their anchors: clock before day, reason after claim. Then one silent pass at speaking speed, and commit. If a chunk refuses to seat by the sixty-second mark, place it where your ear votes and finish the item — the clock never gives the minute back, and the discussion post needs these seconds more than this item does.",
          task: "Listen once, then name the four steps in order.",
        },
        speaking: {
          task: "Explain the anchor-and-slot method to a partner in forty-five seconds, using one example of your own.",
          frames: [
            "The first move is always to pin...",
            "The spine is..., and agreement is what checks it.",
            "Modifiers attach...",
            "The check is one silent pass, and then I commit because...",
          ],
          checklist: [
            "Did I mention the two edges — capital and full stop?",
            "Did I say what seats the spine?",
            "Did I explain why the minute cap ends the argument?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Method discipline", "Builds the sentence whole before cutting, so chunk boundaries follow speech pauses and the shuffle stays rebuildable"],
          ["Transfer", "Scrambling your own sentence rehearses the exact judgement the item tests: where a chunk begins and what it may attach to"],
          ["Punctuation awareness", "Tracks which chunk holds the capital and which holds the full stop, mirroring the only ordering evidence a live item offers"],
          ["Checking habit", "Writes the silent pass into the drill itself, so the five-second check becomes automatic rather than optional"],
          ["Mutual practice", "Partners rebuild each other's scrambles, giving both sides the same evidence-and-commitment loop the timed block demands"],
        ],
      },
      {
        type: "mistakes",
        title: "Reconstruction traps, corrected",
        items: [
          { wrong: "Rebuilding from whatever chunk the scramble happens to show first.", right: "Pin the capitalised chunk as the opener and the full-stop chunk as the closer before placing anything else.", reason: "The scramble's order is engineered noise; the punctuation is evidence, and reading it first removes two placements from the problem." },
          { wrong: "Rebuilding word by word until a sentence assembles itself.", right: "Move chunks as blocks: seat the subject chunk with the verb chunk, then attach whole modifier chunks.", reason: "Working memory holds about four blocks comfortably; interleaving single words overflows it and burns the minute." },
          { wrong: "Re-reading every finished item in the final minutes to hunt for slips.", right: "Run the silent check as you finish each item, then let it stand.", reason: "The minutes a full re-read eats belong to the discussion post — a committed rebuild plus one check is the method's whole design." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Rehearse the four steps until they run without translation: edges, spine, modifiers, silent check — a method you can recite is a method that survives the clock"],
          ["While the clock runs", "Keep the three-slice minute in view — fifteen seconds of reading, thirty of building, ten of checking — and let any item that exceeds it end at sixty"],
          ["If you are stuck", "Ask which two chunks are arguing: an unseatable modifier belongs beside a noun it has not met, and a because-chunk always trails the claim it explains"],
          ["Final minutes", "Sweep only items you flagged, with the silent pass at speaking speed; trust the committed ones and move the saved minutes forward"],
        ],
      },
      {
        type: "summary",
        points: [
          "Every word you need is on the screen: reconstruction is an ordering task, not an invention task.",
          "Pin the edges first — the capitalised chunk opens, the punctuation chunk closes — then seat the subject–verb spine with agreement as the confirmation.",
          "Modifiers attach after their anchors: clock time before day, reason chunks after the claims they explain, describing chunks beside their nouns.",
          "The minute is budgeted in slices — read, build, check — and an item that exceeds it ends at your best-supported order.",
          "One silent pass at speaking speed replaces re-reading; the minutes that saves are the discussion post's opening lines.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions from earlier lessons.",
        items: [
          { question: "How many of the twelve Writing items are sentence reconstructions?", options: ["Ten", "Eight", "Twelve"], correctIndex: 0, explanation: "Ten Build a Sentence items open the section, before the email and the discussion post arrive.", from: "Understanding the Writing section" },
          { question: "What allowance does the section give a reconstruction item?", options: ["About a minute", "About ten seconds", "About five minutes"], correctIndex: 0, explanation: "Roughly a minute each across ten items — the budget this lesson's method is built to fit.", from: "Understanding the Writing section" },
          { question: "Section bands move in which steps?", options: ["Half steps from 1.0 to 6.0", "Whole numbers only", "Quarter steps"], correctIndex: 0, explanation: "Bands climb in half steps, and the overall is the four-section average rounded to the nearest half.", from: "The 1–6 band scale" },
        ],
      },
    ],
    questions: [
      ex({
        type: "sentence-build",
        difficulty: "easy",
        skill: "writing",
        prompt: "Guided reconstruction. Rebuild the sentence — one tile is a distractor that fails agreement.",
        hints: [
          "The capitalised word opens the sentence and the full-stop tile closes it.",
          "The subject is singular, so only one verb form seats beside it.",
        ],
        tiles: ["The", "campus", "library", "closes", "close", "at", "ten", "on", "weekdays", "."],
        acceptedSentences: ["The campus library closes at ten on weekdays ."],
        feedback: fb(
          "The campus library closes at ten on weekdays.",
          "The capitalised word opens, the singular subject 'the campus library' seats only with 'closes', and the time stack runs clock before day — the distractor 'close' fails agreement and never enters the build.",
          "'The campus library close at ten on weekdays' breaks subject–verb agreement: a singular subject cannot take the bare verb form.",
        ),
        tags: ["toefl", "writing", "build-a-sentence"],
      }),
      ex({
        type: "rearrange",
        difficulty: "easy",
        skill: "writing",
        prompt: "Guided reconstruction. Drag the words into the correct order.",
        hints: [
          "The capitalised word opens the sentence and the full stop closes it.",
          "Clock time comes before the day: 'at seven' before 'on weekdays'.",
        ],
        correctTokens: ["The", "dining", "hall", "opens", "at", "seven", "on", "weekdays", "."],
        correctSentence: "The dining hall opens at seven on weekdays.",
        feedback: fb(
          "The dining hall opens at seven on weekdays.",
          "Spine first — 'The dining hall' beside 'opens' — then the time stack trails it: clock time 'at seven' before the day phrase 'on weekdays', with the full stop closing the line.",
          "Placing 'on weekdays' before 'at seven' reverses the time stack and stumbles in the silent check, even though every word is present.",
        ),
        tags: ["toefl", "writing", "build-a-sentence"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "You have pinned the opener and the closer. What does the anchor-and-slot method seat next?",
        hints: ["Which two chunks form the sentence's spine?"],
        options: [
          { id: "a", text: "The subject chunk and the main-verb chunk, confirmed by agreement" },
          { id: "b", text: "The longest chunk, because it carries the most meaning" },
          { id: "c", text: "The chunk you like the sound of, to build confidence" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The subject chunk and the main-verb chunk, confirmed by agreement",
          "The spine comes next: the doer chunk beside its verb, with agreement confirming the pairing before any modifier is attached.",
          "Length is not a signal and preference is not a method — both leave the spine unseated and the modifiers with nowhere to attach.",
        ),
        tags: ["toefl", "writing", "method"],
      }),
      ex({
        type: "sentence-build",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent reconstruction. Rebuild the sentence — one tile is a distractor.",
        hints: [],
        tiles: ["My", "supervisor", "has", "have", "already", "replied", "to", "the", "schedule", "I", "sent", "yesterday", "."],
        acceptedSentences: ["My supervisor has already replied to the schedule I sent yesterday ."],
        feedback: fb(
          "My supervisor has already replied to the schedule I sent yesterday.",
          "The singular subject seats with 'has', the verb chunk 'already replied' follows it, and the describing chunk 'I sent yesterday' trails the noun it modifies — the distractor 'have' fails agreement with a singular doer.",
          "The plural verb form belongs to plural subjects; here it would leave 'My supervisor' without a grammatical partner.",
        ),
        tags: ["toefl", "writing", "build-a-sentence"],
      }),
      ex({
        type: "rearrange",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent reconstruction. Drag the words into the correct order.",
        hints: [],
        correctTokens: ["The", "seminar", "moved", "online", "because", "the", "storm", "damaged", "the", "roof", "."],
        correctSentence: "The seminar moved online because the storm damaged the roof.",
        feedback: fb(
          "The seminar moved online because the storm damaged the roof.",
          "The main claim leads and the because-clause explains it from behind — cause and result keep their logical order even when the scramble offered the reverse.",
          "Opening with 'Because the storm damaged the roof' is grammatical in prose, but here the capital sits on 'The seminar', so the claim must lead the rebuild.",
        ),
        tags: ["toefl", "writing", "build-a-sentence"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Sixty seconds into an item, two chunks still feel interchangeable. What does this lesson train you to do?",
        hints: [],
        options: [
          { id: "a", text: "Rebuild the whole sentence from scratch to be safe" },
          { id: "b", text: "Place the chunks where your silent read votes, finish, and carry the saved discipline to the discussion post" },
          { id: "c", text: "Skip the item and return to it after the email" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Place the chunks where your silent read votes, finish, and carry the saved discipline to the discussion post",
          "The method caps the item at about a minute: a committed, almost-certain order plus the silent check outperforms an endless polish loop, and the saved minutes buy development later.",
          "Starting again burns the minute twice, and shelving the item hands its time to a family that cannot use it as well.",
        ),
        tags: ["toefl", "writing", "pacing"],
      }),
    ],
    homework: [
      "Take ten sentences from anything you read this week, cut each into four or five chunks, shuffle them, and rebuild every one against the clock — log your times.",
      "Run tomorrow's ten-item drill with the three-slice minute (fifteen, thirty, ten) and note which slice over-runs most often.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Unit 2 (continued) — grammar and syntax for reconstruction
  // ---------------------------------------------------------------------------
  {
    slug: "toefl-writing-syntax",
    title: "Grammar and syntax for reconstruction",
    description:
      "The grammar under every rebuild: agreement, tense consistency, modifier placement and connector logic — taught as ordering evidence, because in Build a Sentence the grammar does not just get marked, it tells you where the parts go.",
    objectives: [
      "use subject–verb agreement to match a subject chunk to its verb chunk before anything else seats",
      "keep tense consistent within each clause and spot the chunk that breaks a time frame",
      "place modifiers beside what they describe and recognise dangling and misplaced modifiers",
      "read connectors — because, although, which, when — as instructions about chunk order",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Speed on the reconstruction block is a grammar dividend. Agreement tells you which verb chunk may sit beside which subject chunk; tense signals tell you which verb forms a clause will accept; modifier rules tell you which noun a describing chunk must touch; connectors tell you which clause leads. This lesson turns those four systems into ordering evidence, then compresses them into a four-question diagnosis that runs in seconds.",
        beforeYouStart: [
          "You can run the anchor-and-slot method from 'Build a Sentence: order and speed'.",
          "You can name a sentence's subject and main verb in ordinary prose.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the grammar engine behind all ten Build a Sentence items"],
          ["Task & question types", "Reconstruction items whose scrambles turn on agreement, tense, modifier placement and connector logic"],
          ["What is assessed", "Grammatical accuracy as a single correct order — the item has one answer and the grammar decides it"],
          ["Why this matters", "A rebuilt sentence with one agreement slip is a wrong answer: accuracy here is binary, not a matter of style"],
        ],
      },
      {
        type: "grammar-rule",
        title: "Agreement is ordering evidence",
        rule: "A subject and its verb agree in number: singular subjects take singular verb forms ('the lab closes'), plural subjects take plural forms ('the labs close'). In a scrambled item only one verb chunk matches the subject chunk on offer, so agreement places the spine before meaning is fully parsed.",
        explanation:
          "In ordinary writing, agreement is correctness; in reconstruction it is also evidence. A mismatch ('the lab close') tells you two chunks are wrongly paired, and a match ('the lab closes') tells you the spine is seated — grammar doing the work of intuition at a minute per item. Match the verb to the head noun of the subject chunk, not to the nearest noun inside a prepositional phrase.",
        examples: [
          { english: "Chunks 'the results' + 'was surprising' refuse each other; 'the results' + 'were surprising' seat the spine at once.", translation: "" },
          { english: "Every morning the researchers check the sensors — 'researchers' is plural, so the verb keeps its bare form.", translation: "" },
        ],
        exceptions: [
          "Collective nouns such as 'the team' or 'the committee' may read as one body or many members; in a rebuild, follow whichever reading the verb chunks on offer support.",
        ],
      },
      { type: "heading", text: "Tense consistency across the rebuild" },
      {
        type: "text",
        text: "A rebuilt sentence usually tells one story at one time: past events stay past, general truths stay present. When chunks from two time frames meet, the signal words arbitrate — 'last semester' demands its past, 'this term' its present, and a clause may legally shift tense when its own time words shift. The slip to catch is contradiction, not shift: 'Yesterday the library was open until midnight' cannot become 'but this term it close at ten' without both a tense repair and an agreement repair. In a scramble, tense-bearing chunks arrive from every direction, so let the time words — yesterday, usually, every spring, nowadays, last week — decide which verb forms may seat.",
      },
      { type: "heading", text: "Connectors are instructions" },
      {
        type: "table",
        title: "Connector logic on the rebuild",
        headers: ["Connector family", "The instruction it gives"],
        rows: [
          ["because / since / as", "A reason follows the claim it explains — seat the main statement first, the reason chunk behind it"],
          ["although / though / while", "A concession stands in tension with the main claim, which usually arrives second and starts fresh"],
          ["which / who", "The describing chunk attaches to the noun immediately before it — seat them as neighbours, comma at the boundary"],
          ["when / after / before", "A time clause may open or close the sentence — the capital and the time words decide which end it takes"],
          ["so / therefore", "A result trails its cause — the because-family in reverse, with the order fixed the same way"],
        ],
        caption: "Read every connector as a placement instruction before you read it as a vocabulary item.",
      },
      { type: "heading", text: "Modifiers must sit beside their targets" },
      {
        type: "text",
        text: "A describing chunk earns its place by touching the noun or verb it serves. When it drifts, the sentence invites a reading the writer never intended: 'the server explained the policy to the students in a low voice' asks whose voice was low. The sharpest trap is the opening -ing phrase: it demands the doer immediately after the comma, so 'Rushing to the lecture hall, the rain soaked my notes' claims the rain was rushing. Rebuild such sentences with the doer in place — 'As I rushed to the lecture hall, the rain soaked my notes' — and in scramble form, treat an -ing chunk as a chunk that must meet its doer at the boundary.",
      },
      {
        type: "definition",
        term: "misplaced modifier",
        partOfSpeech: "noun phrase",
        definition: "A describing word or chunk that sits closer to another noun than the one it describes, inviting a reading the writer never intended; in reconstruction, a modifier chunk placed beside the wrong neighbour produces a grammatical but wrong rebuild.",
        example: {
          english: "'The tutor praised the student with detailed feedback' can be read two ways; 'The tutor gave the student detailed feedback' pins the phrase to its target.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "The four-question diagnosis",
        intro: "When a rebuild looks wrong but you cannot say why, interrogate it in this order:",
        steps: [
          {
            title: "Question 1 — Number: do subject and verb match?",
            text: "Find the head noun of the subject chunk and check the verb form against it, ignoring any plural noun trapped inside a prepositional phrase.",
            examples: [{ english: "'The list of deadlines were long' fails — the subject is 'the list', singular, whatever the phrase carries.", note: "Match the verb to the head noun, not the nearest noun." }],
          },
          {
            title: "Question 2 — Time: does every verb obey its time words?",
            text: "Each clause answers to its own signals: yesterday and last spring hold the past, usually and every hold the present. A legal shift between clauses is fine; a contradiction inside one is the fault.",
            examples: [{ english: "'Last semester the library was open until midnight, but this term it closes at ten' — two times, two tenses, both correct because each clause keeps its own.", note: "Tense may shift between clauses; contradiction, not shift, is the error." }],
          },
          {
            title: "Question 3 — Neighbour: does each describing chunk touch its target?",
            text: "Test a suspicious chunk by asking what it describes; if the answer is a noun two positions away, the chunk has drifted and the rebuild must bring it home.",
            examples: [{ english: "'The tutor praised the student with detailed feedback' — rebuild as 'The tutor gave the student detailed feedback' and the phrase finds its verb.", note: "Ask 'what does this chunk describe?' before trusting the order." }],
          },
          {
            title: "Question 4 — Logic: does each connector point the way its meaning demands?",
            text: "Cause precedes result, concession contrasts with the claim that follows, and a which-chunk hugs its noun. If the rebuild reads against the connector's arrow, two chunks have swapped jobs.",
            examples: [{ english: "'The deadline was extended because the students had requested one' — the request explains the extension, so the logic reads forward even when the scramble offered it backwards.", note: "The connector's meaning fixes the clause order." }],
          },
        ],
      },
      {
        type: "example",
        title: "The four systems on real sentences",
        items: [
          { english: "The committee has published its findings, and the report recommends three changes to the intake process.", note: "'Committee' acts as one body here, so 'has published' matches — the singular reading is the one the verb chunks support.", domain: "campus" },
          { english: "Because the seminar room was double-booked, the department moved the discussion session to the atrium.", note: "The because-clause explains, so the move is the headline; scrambling cannot change which clause leads the logic.", domain: "campus" },
          { english: "The survey, which the class completed in October, suggests that most students prefer afternoon tutorials.", note: "The which-chunk hugs 'the survey' with commas at both boundaries, and 'October' anchors the tense inside it.", domain: "academic" },
          { english: "Rushing to the lecture hall, Yuki's phone fell out of her bag — a rebuild that claims the phone was rushing.", note: "An opening -ing phrase needs its doer immediately after the comma: 'As Yuki rushed to the lecture hall, her phone fell out of her bag.'", domain: "everyday" },
          { english: "Last year the campus store closed at six, but this semester it stays open until nine.", note: "Two time frames, two tense sets — each clause answers to its own time words and neither borrows the other's.", domain: "campus" },
          { english: "The engineers who maintained the roof were praised, while the engineers who installed it were not.", note: "Each who-chunk locks to its own noun; swapping them between clauses reverses the sentence's meaning.", domain: "work" },
          { english: "A diagnosis you can run at speed in three words: number, time, neighbour — with logic waiting in reserve.", note: "The compressed version is what fits inside a minute per item.", domain: "study" },
        ],
      },
      {
        type: "four-skills",
        title: "The diagnosis bench",
        reading: {
          text: "A nearly correct rebuild sits on the bench: 'The results of the survey was surprising to the students who taken the course last spring.' Two faults hide in it.",
          task: "Name both faults, and say which question of the diagnosis catches each.",
        },
        writing: {
          task: "Write two sentences about a campus service you use — one containing a because-clause, one containing a which-chunk — then run the four-question diagnosis on each before calling either finished.",
          guide: [
            "Draft freely first; diagnose second — the questions work on finished sentences.",
            "Check agreement before tense: number errors hide behind long subjects.",
            "Read each sentence aloud once — a modifier fault usually announces itself when spoken.",
            "If a sentence fails twice, rebuild it around a new spine instead of patching.",
          ],
          model:
            "Because the writing centre books out three days ahead, I reserve my slot on Sunday evening. The centre's evening tutors, who mostly teach first-year seminars, will read a draft twice if you bring two printed copies. Diagnosis: 'books out' agrees with 'the writing centre'; each clause obeys its own time signals ('mostly', 'will'); 'who mostly teach' hugs 'tutors'; and the because-clause explains the Sunday habit it logically causes.",
        },
        listening: {
          script:
            "Read the rebuild once at speaking speed. First question: number — does the verb match its subject's head noun? Second: time — does every verb obey the time words in its clause? Third: neighbour — does every describing chunk touch the thing it describes? Fourth: logic — does every connector point the way its meaning demands? Four questions, five seconds, and the sentence either passes all four or shows you exactly where it broke.",
          task: "Listen once, then say the four questions from memory.",
        },
        speaking: {
          task: "Say your two diagnostic sentences aloud to a partner, pausing a beat at every chunk boundary.",
          frames: [
            "My because-sentence is..., and the reason chunk sits...",
            "The which-chunk describes..., so it sits...",
            "The diagnosis question that mattered most here was...",
            "The fault I caught and repaired was...",
          ],
          checklist: [
            "Did I pause at chunk boundaries rather than mid-phrase?",
            "Did I name the diagnosis question that caught my fault?",
            "Could my partner hear the difference between the broken and repaired versions?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Spine first", "Drafts around a subject–verb spine, which is also the first thing the diagnosis checks — writing and checking share one architecture"],
          ["Evidence over feeling", "Each diagnosis question names its evidence: number, time words, neighbours, connector logic — nothing rests on a vague sense of wrongness"],
          ["Repair, not patching", "Rebuilds around a new spine when patching fails twice, matching how raters read whole sentences rather than word patches"],
          ["Transfer to the screen", "Compresses the whole diagnosis into number–time–neighbour, the three-word check that fits inside a minute per item"],
        ],
      },
      {
        type: "mistakes",
        title: "Syntax slips that break rebuilds",
        items: [
          { wrong: "The list of deadlines were posted on the portal.", right: "The list of deadlines was posted on the portal.", reason: "The subject is 'the list' — singular; the plural noun inside the prepositional phrase cannot lend its number to the verb." },
          { wrong: "After the pilot ended, the department realises the software was too slow.", right: "After the pilot ended, the department realised the software was too slow.", reason: "A past frame ('ended') holds the whole story; 'realises' jumps to the present inside a sentence reporting a finished pilot." },
          { wrong: "Walking back from the library, the rain soaked my notes.", right: "Walking back from the library, I was caught in the rain, which soaked my notes.", reason: "The opening -ing phrase needs its doer immediately after the comma; as written, the rain is doing the walking." },
          { wrong: "The course was popular because of the students requested it again.", right: "The course was popular because the students requested it again.", reason: "'Because' introduces a clause with its own subject and verb; 'because of' takes only a noun phrase — the connector decides the chunk's grammar." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Learn the four questions until they run without translation — number, time, neighbour, logic — so the diagnosis is a reflex before it is an analysis"],
          ["While the clock runs", "Spend the first ten seconds of every rebuild finding the spine; agreement and tense seat it faster than meaning can"],
          ["If you are stuck", "Ask which system the item is testing — a because in the chunks means logic, two tense-bearing verbs means time — because the fault type names the fix"],
          ["Final minutes", "Run the three-word check — number, time, neighbour — over any rebuild you flagged, and let the unflagged ones stand"],
        ],
      },
      {
        type: "summary",
        points: [
          "Agreement is ordering evidence: the subject chunk and the verb chunk must match in number before anything else seats.",
          "Tense answers to time words — signal words like yesterday, usually and this term decide which verb forms a clause may hold, and shifts between clauses can be legal.",
          "Modifiers sit beside the noun or verb they serve; an opening -ing phrase demands its doer immediately after the comma.",
          "Connectors are instructions: because wants reason after claim, which wants its noun as a neighbour, so wants cause before result.",
          "The four-question diagnosis — number, time, neighbour, logic — compresses into a three-word check that fits inside the minute.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three quick questions from earlier lessons.",
        items: [
          { question: "In a rebuild, what does a capitalised chunk usually mark?", options: ["The sentence opener", "The verb", "A distractor"], correctIndex: 0, explanation: "The capital pins the first chunk and the full stop pins the last — the edges are settled before grammar enters.", from: "Build a Sentence: order and speed" },
          { question: "Which scoring-guide area rewards stated positions, covered points and given reasons?", options: ["Development", "Organization", "Language use"], correctIndex: 0, explanation: "Development is the content area — the reason this lesson's grammar exists to protect meaning, not decoration.", from: "Understanding the Writing section" },
          { question: "In the preparation strategy, what does phase 2 repair before task drilling begins?", options: ["Language — vocabulary and grammar", "Test-day logistics", "Mock-booking habits"], correctIndex: 0, explanation: "Language repair precedes task drilling: agreement and connectors are the exact machinery reconstruction tests.", from: "Preparation strategy: how this Academy works" },
        ],
      },
    ],
    questions: [
      ex({
        type: "correct-mistake",
        difficulty: "easy",
        skill: "grammar",
        prompt: "Guided practice. Repair the agreement fault — fix either the subject or the verb, but make the pair match.",
        incorrectSentence: "Every morning the researchers checks the sensors that record the greenhouse temperature.",
        acceptedAnswers: [
          "Every morning the researchers check the sensors that record the greenhouse temperature.",
          "Every morning the researcher checks the sensors that record the greenhouse temperature.",
        ],
        hints: [
          "Count the subject: is it one researcher or several?",
          "A plural subject takes the bare verb form; a singular subject takes the -s form.",
        ],
        feedback: fb(
          "Every morning the researchers check the sensors that record the greenhouse temperature. (Or make the subject singular: the researcher checks.)",
          "Agreement is a two-way repair: either the plural subject 'researchers' takes 'check', or the verb 'checks' keeps a singular subject 'the researcher' — what may never survive is the mixed pair.",
          "Leaving 'researchers checks' in a rebuild makes the whole item wrong, because reconstruction accuracy is binary rather than a matter of style.",
        ),
        tags: ["toefl", "writing", "agreement"],
      }),
      ex({
        type: "grammar-identify",
        difficulty: "medium",
        skill: "grammar",
        prompt: "What job does the highlighted phrase do in this sentence?",
        sentence: "The greenhouse, which the botany class maintains, produces vegetables for the dining hall.",
        focus: "which the botany class maintains",
        question: "What is the job of the highlighted phrase?",
        taxonomy: "clause types",
        options: [
          { id: "a", text: "A relative clause adding information about the greenhouse" },
          { id: "b", text: "The main verb of the sentence" },
          { id: "c", text: "A time modifier saying when the vegetables grow" },
        ],
        correctOptionId: "a",
        hints: [
          "The sentence already has its main verb: 'produces'.",
          "The chunk opens with 'which' — what does a which-chunk always attach to?",
        ],
        feedback: fb(
          "A relative clause adding information about the greenhouse",
          "The which-chunk hugs the noun immediately before it, adds extra information between commas, and leaves the main verb 'produces' untouched — in a rebuild, that attachment rule fixes its position.",
          "Calling it the main verb ignores that 'produces' already holds that job, and nothing in the chunk mentions time.",
        ),
        tags: ["toefl", "writing", "clauses"],
      }),
      ex({
        type: "correct-mistake",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Independent practice. Repair the tense contradiction.",
        incorrectSentence: "Last semester the library was open until midnight, but this term it close at ten.",
        acceptedAnswers: [
          "Last semester the library was open until midnight, but this term it closes at ten.",
          "Last semester the library was open until midnight, but this term it is open only until ten.",
        ],
        hints: [],
        feedback: fb(
          "Last semester the library was open until midnight, but this term it closes at ten.",
          "Each clause obeys its own time words: the past frame holds 'was open', and the present frame of 'this term' demands 'closes' — the bare form 'close' satisfies neither subject nor tense.",
          "Writing 'closed at ten' would drag the present clause into the past and contradict 'this term', so the repair must fix agreement and tense together.",
        ),
        tags: ["toefl", "writing", "tense"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Independent practice. Choose the connector that fits the logic.",
        sentence: "The tutor extended the deadline ___ several students had reported illness during the week.",
        acceptedAnswers: ["because", "since", "as"],
        hints: [],
        feedback: fb(
          "because / since / as",
          "The clause that follows carries its own subject and verb — 'several students had reported' — so a reason conjunction that introduces a full clause is required, and all three do that work.",
          "'Because of' would fit only a noun phrase ('because of the illness reports'), and 'despite' would reverse the logic.",
        ),
        tags: ["toefl", "writing", "connectors"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "grammar",
        prompt: "Which sentence places its opening phrase where the reader can attach it?",
        hints: [],
        options: [
          { id: "a", text: "Rushing to the lecture hall, Yuki's phone fell out of her bag." },
          { id: "b", text: "While Yuki was rushing to the lecture hall, her phone fell out of her bag." },
          { id: "c", text: "Her phone fell out of her bag rushing to the lecture hall." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "While Yuki was rushing to the lecture hall, her phone fell out of her bag.",
          "The time clause names its own doer — Yuki — so the -ing action has an owner and the main clause can follow cleanly; that is the neighbour principle doing its job.",
          "(a) leaves the phone doing the rushing, and (c) drifts the describing phrase onto the bag — both are misplaced-modifier faults the diagnosis catches at the neighbour question.",
        ),
        tags: ["toefl", "writing", "modifiers"],
      }),
      ex({
        type: "correct-mistake",
        difficulty: "hard",
        skill: "grammar",
        prompt: "Independent practice. Give the opening phrase a doer.",
        incorrectSentence: "Walking to the lab, the rain started falling on the exchange students.",
        acceptedAnswers: [
          "Walking to the lab, the exchange students were caught in the rain.",
          "As the exchange students were walking to the lab, the rain started falling.",
          "While the exchange students were walking to the lab, the rain started falling on them.",
        ],
        hints: [],
        feedback: fb(
          "Walking to the lab, the exchange students were caught in the rain. (Or name the doer in a full clause: as the exchange students were walking to the lab...)",
          "An opening -ing phrase hands its action to whatever follows the comma, so the doer must arrive there; both repairs either seat the students in that slot or rebuild the phrase as a while-clause with its own subject.",
          "Leaving 'the rain' after the comma claims the weather was walking — the classic dangling fault, and a wrong rebuild in its own right.",
        ),
        tags: ["toefl", "writing", "modifiers"],
      }),
    ],
    homework: [
      "Take five sentences from your own recent writing and run the four-question diagnosis on each; log which question catches the most faults.",
      "Rewrite every sentence that failed, repairing the fault the diagnosis named, and read the broken and repaired versions aloud to hear the difference.",
    ],
  },
];
