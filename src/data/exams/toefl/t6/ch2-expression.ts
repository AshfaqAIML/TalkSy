/**
 * TOEFL iBT Academy — Module 6, Chapter 2 (T-M6, PROMPT 48, Task 8).
 *
 * "Expression": paraphrasing and natural academic communication. Paraphrasing
 * sits behind every comprehension item — stems and options restate passages,
 * and the best Choose-a-Response reply rewords the situation before
 * responding. Register, stance and unscripted answers carry the discussion
 * and interview tasks. Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts); format facts as in the
 * chapter 1 header. Honesty rules: no memorised answers, no formulaic
 * filler, and paraphrase is taught as fidelity first, variety second.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T6_CH2: LessonSpec[] = [
  // -------------------------------------------------------------------------
  // Unit 3, Lesson 1 — Paraphrasing
  // -------------------------------------------------------------------------
  {
    slug: "toefl-language-paraphrasing",
    title: "Paraphrasing",
    description:
      "Restating without distorting: the moves that keep a paraphrase faithful, and the traps that quietly change what a sentence means.",
    objectives: [
      "restate academic sentences through synonym shift, class change, voice change and reordering",
      "keep the original proposition intact — a paraphrase that distorts is a wrong answer",
      "spot paraphrased stems and options in reading and listening items",
      "open a discussion reply by paraphrasing the classmate's point before responding to it",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Paraphrasing is the quiet skill behind half the test. Reading options restate the passage; listening stems reword the talk; the strongest discussion reply first mirrors a classmate's point, then answers it. The craft has one non-negotiable rule — fidelity — and a toolkit of moves that change the wording without touching the meaning. This lesson installs the rule, drills the moves, and exposes the traps that turn a restatement into a different claim.",
        beforeYouStart: [
          "You can find the subject, verb and object of any sentence you read.",
          "You bring the word-family and collocation habits — paraphrase moves run on both of them.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "All four — comprehension items paraphrase their sources, and constructed tasks reward restating over repeating"],
          ["Task & question types", "Reading stems and options reword passages; listening items reword talks and dialogues; the discussion task invites paraphrase-plus-response"],
          ["What is assessed", "Whether you can recognise a faithful restatement and produce one without distortion"],
          ["Why this matters", "Distractors are usually distorted paraphrases — fidelity is the difference between the matched option and the near miss"],
        ],
      },
      { type: "heading", text: "Fidelity first, variety second" },
      {
        type: "text",
        text: "A paraphrase keeps the proposition and changes the packaging. The proposition is the claim itself: who did what, to whom, how strongly, and under what condition. The packaging is everything else — word choice, word class, voice, order, sentence count. Amateurs invert the priority: they chase impressive variety and let the proposition drift, swapping most for all, only if for if, and may for is. A rater or an item writer notices the drift immediately, because distorted paraphrases are exactly how distractors are built. Learn the moves in this order: lock the proposition, then vary the packaging, then check the two against each other before trusting the result.",
      },
      {
        type: "definition",
        term: "paraphrase",
        partOfSpeech: "noun / verb",
        definition: "A restatement of a source's meaning in different words, keeping the original proposition — agents, quantities, conditions and strength of claim — fully intact.",
        example: {
          english: "'Only students who have completed the safety training may use the workshop after 6 p.m.' becomes 'After 6 p.m., workshop use is limited to students who have completed the safety training.'",
          translation: "",
        },
      },
      {
        type: "table",
        title: "Five moves, one test each",
        headers: ["Move", "Worked example", "Fidelity check"],
        rows: [
          ["Synonym shift", "sharply → steeply; findings → results", "The synonym must keep the strength and direction of the original word"],
          ["Word-class change", "the regions differ → there is a difference", "The new grammar must carry the same relation between the same ideas"],
          ["Voice change", "The committee rejected the plan → The plan was rejected by the committee", "Agent and action stay attached; nobody new enters the sentence"],
          ["Reordering", "The team, because funding arrived late, shortened the survey", "Emphasis may shift; the causal relation must not"],
          ["Combine or split", "Two sentences become one; one becomes two", "Nothing merges that was contrastive, and nothing splits that was one claim"],
        ],
        caption: "Apply at most two moves per paraphrase; more moves raise the risk that the proposition drifts.",
      },
      { type: "heading", text: "Where the payoff lands" },
      {
        type: "text",
        text: "In reading, the correct option is almost never a quotation: it is the passage's claim wearing different packaging, while the distractors are distorted paraphrases — broader, narrower, or reversed. In listening, a stem like 'What does the speaker imply about the timetable?' expects you to reword the talk in your head before judging the options. In the discussion task, the strongest reply opens by paraphrasing the classmate's point — it proves you read it — and then extends or challenges it. In your email tasks, paraphrasing the situation back to the recipient ('You asked whether the report could be ready by Friday') is the politest opening available, and it costs one sentence.",
      },
      {
        type: "steps",
        title: "The faithful paraphrase routine",
        intro: "Four steps, in this order, every time.",
        steps: [
          {
            title: "Lock the proposition",
            text: "Write or underline the bare claim in your own shortest words: who, did what, to whom, how strongly, under what condition. This is the thing that must survive every move you make afterwards.",
            examples: [
              {
                english: "Proposition of 'Most respondents supported the proposal, though several wanted revisions': majority support; minority wanted changes; both halves matter.",
                note: "Three facts, none of them optional — dropping any one is a distortion.",
                domain: "study",
              },
            ],
          },
          {
            title: "Apply one or two moves",
            text: "Choose from synonym shift, class change, voice change, reordering, combine or split. Two moves is usually enough; three invites drift, and the drift is invisible to the writer who caused it.",
            examples: [
              {
                english: "Class change plus voice change: 'The committee rejected the plan' → 'The plan was rejected by the committee, a rejection the minutes record.'",
                note: "Two moves, one meaning — the second half adds nothing and claims nothing.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Check the quantifiers and conditions",
            text: "Run the trap list: most/some/all, only if / provided that, may / must, more than / as many as. If any of these changed strength, the paraphrase is wrong no matter how fluent it sounds.",
            examples: [
              {
                english: "'Only members may borrow equipment' restated as 'Members may borrow equipment' loses the restriction — the one word the rule protected.",
                note: "Restrictions and permissions are where paraphrases go to die.",
                domain: "everyday",
              },
            ],
          },
          {
            title: "Compare against the original, aloud if possible",
            text: "Read the original, then your paraphrase, then the original again. The ear catches a changed condition or a hardened hedge faster than the eye, which has already forgiven its own work.",
            examples: [
              {
                english: "A learner reads 'the results may suggest' next to 'the results show' and hears the hedge disappear in the second version.",
                note: "May to show is a strength change — a distortion in academic clothing.",
                domain: "work",
              },
            ],
          },
        ],
      },
      {
        type: "comparison",
        title: "Faithful versus distorted",
        intro: "The right-hand column is how distractors are manufactured.",
        columns: ["Faithful paraphrase", "Distorted paraphrase"],
        rows: [
          { aspect: "Quantifiers", left: "most → the majority of", right: "most → all, or most → some" },
          { aspect: "Conditions", left: "only if → provided that", right: "only if → if (restriction dropped)" },
          { aspect: "Hedging", left: "may suggest → could indicate", right: "may suggest → proves" },
          { aspect: "Agents", left: "the team criticised the design", right: "the design was criticised (agent deleted or reassigned)" },
          { aspect: "Comparatives", left: "twice as many → double the number of", right: "twice as many → far more than" },
        ],
        verdict: "A distorted paraphrase is not a weaker paraphrase; it is a different sentence — which is precisely the job of a distractor.",
      },
      {
        type: "example",
        title: "Paraphrase at work",
        note: "In each item, find the move and check the fidelity before reading the note.",
        items: [
          {
            english: "Original: 'Enrolment doubled after the shuttle bus was made free.' Faithful option: 'Making the shuttle bus free was followed by a twofold rise in enrolment.'",
            note: "Voice change plus reordering; the causal order survives and no agent is invented.",
            domain: "exam",
          },
          {
            english: "A distractor for the same item reads 'Free transport caused enrolment to double at every campus site' — broader scope, harder claim, wrong answer.",
            note: "Distractors are distorted paraphrases: 'every campus site' was never in the original.",
            domain: "exam",
          },
          {
            english: "A discussion reply opens: 'If I understand Jae's point, the delay helped quality because the team re-tested twice — I'd add that it also raised costs.'",
            note: "Paraphrase first, then extend: the classmate sees their idea reflected before the new one lands.",
            domain: "study",
          },
          {
            english: "An email opens: 'You asked whether the report could be ready by Friday — I can confirm it will, with the full appendix.'",
            note: "Restating the request is the politest possible opening and takes one clause.",
            domain: "work",
          },
          {
            english: "A listening stem asks what the speaker implies about the timetable; the talk said 'we are unlikely to finish before June', and the matched option says 'June is optimistic' — hedged strength preserved.",
            note: "Unlikely maps to optimistic — same hedge, different packaging.",
            domain: "exam",
          },
          {
            english: "A housing rule — 'Guests must be accompanied by a resident after 10 p.m.' — is paraphrased in a roommate's message as 'after ten, a resident has to be with any guest'.",
            note: "Everyday register, same obligation; the condition 'after 10 p.m.' survives both versions.",
            domain: "everyday",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Paraphrase mistakes corrected",
        items: [
          {
            wrong: "I paraphrase by replacing every word with its longest synonym.",
            right: "Change the packaging where it helps — one or two moves — and keep the proposition untouched.",
            reason: "Synonym saturation invites drift: near-synonyms differ in strength and register, and every extra swap is another chance to change the claim.",
          },
          {
            wrong: "'Most respondents supported the proposal' can be paraphrased as 'Respondents supported the proposal'.",
            right: "Keep the quantifier: 'A majority of respondents supported the proposal'.",
            reason: "Dropping most turns a measured finding into a universal one — the exact move that manufactures a distractor.",
          },
          {
            wrong: "In the discussion task I jump straight to my own opinion.",
            right: "Open by paraphrasing the point you are answering, then agree, extend or push back.",
            reason: "A reply that skips the mirror reads as talking past the classmate; the paraphrase proves the point was read, which is half the criterion.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Paraphrasing across the four sections",
        reading: {
          text: "The festival moved to the autumn after two summers of heat cancellations. Organisers said the change protected performers, and early ticket sales suggest the audience agrees.",
          task: "Write two faithful paraphrases of the paragraph: one using a voice change, one combining the two sentences — then check each against the trap list.",
        },
        writing: {
          task: "A classmate posted: 'I think the library should stay open later during exams, because the dorms are too noisy for revision.' Paraphrase the post faithfully in one sentence, then agree or push back with one supported reason of your own.",
          guide: [
            "Lock the proposition first: what exactly did the classmate claim, and how strongly?",
            "Open with the mirror: 'If I understand your point, ...' and restate using one or two moves only.",
            "Signal your stance in the next sentence — 'I'd add', 'I'd push back' — so the reply has two visible parts.",
            "Finish by rereading the paraphrase against the original post, checking quantifiers and conditions.",
          ],
          model:
            "If I understand your point, the library should open later in exam weeks because the dorms are too noisy for revision. I'd add a second reason: buses stop running at midnight, so a late library serves commuters too. That said, the counter-argument about staffing costs is real, and a pilot of two weeks would test it cheaply.",
        },
        listening: {
          script: "The archive will open on Saturdays from next month. We know that weekend access has been requested for years, and the new staffing roster finally makes it possible, though the reading room will close an hour earlier on weekdays.",
          task: "Restate the announcement in one sentence, keeping both changes and the hedge about staffing.",
        },
        speaking: {
          task: "Answer this interview item in about thirty seconds: 'Some people prefer to study alone; others learn better in groups. What works for you, and why?' Restate the question in your own words first, then answer.",
          frames: [
            "So the question is really about ...",
            "In my own words: ...",
            "For me, the deciding factor is ...",
            "Which is why I ...",
          ],
          checklist: [
            "I restated the question before answering it.",
            "My restatement kept the question's scope — no 'all people' and no 'always'.",
            "My answer gave one reason and one example, then stopped.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it lifts the band"],
        rows: [
          ["Mirrors the classmate's post before responding", "Discussion criteria reward engagement with the other posts; the paraphrase is visible engagement in one sentence"],
          ["Adds a reason of its own rather than restating only", "Development means the reply advances the discussion, not just echoes it"],
          ["Acknowledges the counter-argument and proposes a test", "Concession plus a concrete proposal reads as academic judgement, the register the task is named for"],
          ["Rereads the paraphrase against the original", "Fidelity is the difference between a strong reply and an accidental straw man"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Memorise the trap list — quantifiers, conditions, hedges, agents, comparatives — as five words on a card."],
          ["While the clock runs", "In comprehension items, ask of each option: is this a faithful rewording or a distorted one? Check the five traps in order."],
          ["If you are stuck", "Two options that both sound plausible: compare their scope words against the passage's — the one that keeps 'most', 'only if' or 'may' is the match."],
          ["Final minutes", "Sweep discussion replies for the mirror sentence — every reply should show the classmate's point before the new one."],
        ],
      },
      {
        type: "summary",
        points: [
          "A paraphrase keeps the proposition and changes the packaging; fidelity outranks variety in every context.",
          "Five moves cover the craft: synonym shift, class change, voice change, reordering, combine or split — two per paraphrase is plenty.",
          "The trap list is where distractors live: quantifiers, conditions, hedges, agents, comparatives.",
          "Reading and listening items are paraphrase tests in disguise: the matched option is the faithful rewording, the near misses are distorted ones.",
          "A discussion reply opens with the mirror — restate the classmate's point, then agree, extend or push back.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson in this module's chain.",
        items: [
          {
            question: "Which Listening task family asks you to pick the best reply?",
            options: ["Listen and Choose a Response", "Listen to an Announcement", "Listen and Repeat"],
            correctIndex: 0,
            explanation: "The response family presents a situation and replies; the best reply typically rewords the situation before responding — paraphrase in action.",
            from: "toefl-format-2026",
          },
          {
            question: "In the accuracy lesson, how is grammar progress measured?",
            options: ["Errors per constructed task, tracked in a log", "Hours of grammar study", "Number of rules memorised"],
            correctIndex: 0,
            explanation: "The error budget counts survivors per task; the falling count, not study hours, is what a rater sees.",
            from: "toefl-language-grammar-accuracy",
          },
          {
            question: "Which partnership belongs in an email describing a problem?",
            options: ["pose a challenge", "make a challenge", "do a challenge"],
            correctIndex: 0,
            explanation: "Challenges are posed; make and do are broken partners of this noun, whatever the register.",
            from: "toefl-language-collocations",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Original: 'Only students who have completed the safety training may use the workshop after 6 p.m.' Which paraphrase is faithful?",
        hints: ["Watch the restriction 'only' and the condition 'after 6 p.m.'."],
        options: [
          { id: "a", text: "Students may use the workshop after 6 p.m. only if they have completed the safety training." },
          { id: "b", text: "Students who have completed the safety training may use the workshop at any time." },
          { id: "c", text: "The workshop is open after 6 p.m. to everyone who has finished any training course." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Students may use the workshop after 6 p.m. only if they have completed the safety training.",
          "Option (a) keeps the restriction (only if), the condition (after 6 p.m.) and the exact scope of the training — a reordering, not a new claim.",
          "Option (b) drops the time condition entirely, and option (c) broadens the training to any course — both are classic distractor distortions.",
        ),
        tags: ["toefl", "language", "paraphrasing"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Complete the paraphrase with the noun that rewords 'differ'.",
        hints: ["The noun of differ is the word you need here."],
        sentence: "Original: 'The two regions differ sharply in rainfall.' Paraphrase: 'There is a sharp ___ in rainfall between the two regions.'",
        acceptedAnswers: ["difference"],
        feedback: fb(
          "difference",
          "The class change turns the verb differ into the noun difference, and sharply becomes the adjective sharp — two coordinated moves, one intact proposition.",
          "Differing or different would leave the sentence without the noun head the article 'a sharp' demands.",
        ),
        tags: ["toefl", "language", "paraphrasing"],
      }),
      ex({
        type: "grammar-identify",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Analyse the highlighted phrase in this passive paraphrase.",
        hints: ["In a passive clause, who does the action?"],
        sentence: "The plan was rejected by the committee after two reviews.",
        focus: "by the committee",
        question: "In this passive construction, what does the highlighted phrase name?",
        taxonomy: "voice",
        options: [
          { id: "a", text: "The agent — the performer of the action." },
          { id: "b", text: "The recipient — the thing acted upon." },
          { id: "c", text: "The time of the action." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The agent — the performer of the action.",
          "In the passive, 'by the committee' names who did the rejecting; keeping the agent in the paraphrase is what preserves the proposition, because deleting it would leave the rejection ownerless.",
          "The recipient in this sentence is the plan (b), and no phrase here marks time (c) — the by-phrase is the voice-change fingerprint.",
        ),
        tags: ["toefl", "language", "paraphrasing"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Read the extract, then answer.",
        hints: [],
        passageTitle: "A service announcement",
        passage: "The archive will open on Saturdays from next month. Weekend access has been requested for years, and the new staffing roster finally makes it possible, though the reading room will close an hour earlier on weekdays.",
        question: "Which option restates the announcement faithfully?",
        options: [
          { id: "a", text: "Saturday opening arrives next month after years of requests; weekday hours shrink by an hour." },
          { id: "b", text: "Saturday opening arrives next month, and weekday hours will be extended." },
          { id: "c", text: "The archive will open on Saturdays only after further requests are collected." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Saturday opening arrives next month after years of requests; weekday hours shrink by an hour.",
          "Option (a) keeps both changes and their direction — the long-requested Saturday opening and the weekday reduction — reworded at partnership level (shrink for close earlier).",
          "Option (b) reverses the weekday change, and option (c) invents a condition (further requests) the announcement never made.",
        ),
        tags: ["toefl", "language", "paraphrasing"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "grammar",
        prompt: "Name the paraphrase move in two words.",
        hints: [],
        question: "Turning 'The committee rejected the plan' into 'The plan was rejected by the committee' is which move?",
        acceptedAnswers: ["voice change", "changing the voice", "passive voice", "a change of voice"],
        keywords: ["voice", "passive"],
        feedback: fb(
          "A voice change — active to passive.",
          "The active-to-passive move swaps agent and recipient while keeping both attached; it is one of the five moves and the safest of them, because it cannot add or lose a participant.",
          "Reordering or class change would leave the clause active, and combining would need a second sentence to work on.",
        ),
        tags: ["toefl", "language", "paraphrasing"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "A passage states: 'Enrolment doubled after the shuttle bus was made free.' A reading option says: 'Free transport caused enrolment to double at every campus site.' What is the option doing?",
        hints: [],
        options: [
          { id: "a", text: "Faithfully paraphrasing the passage." },
          { id: "b", text: "Distorting the paraphrase — it hardens 'after' into 'caused' and broadens the site scope." },
          { id: "c", text: "Quoting the passage directly." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Distorting the paraphrase — it hardens 'after' into 'caused' and broadens the site scope.",
          "Sequence became causation and one site became every site: two distortions stacked inside one fluent-sounding sentence — the exact recipe item writers use for distractors.",
          "Nothing here is a quotation (c), and the stacked traps are precisely what disqualifies it as faithful (a).",
        ),
        tags: ["toefl", "language", "paraphrasing"],
      }),
    ],
    homework: [
      "Collect three sentences from a reading passage this week; for each, write two faithful paraphrases — one with a voice change, one with a class change — and check both against the trap list.",
      "In your next discussion practice, open every reply with a one-sentence mirror of the classmate's point before adding your own.",
    ],
    assignment: {
      title: "Paraphrase pack",
      instructions:
        "Choose three sentences from a reading passage or a campus notice. For each sentence, write two paraphrases using different moves (synonym shift, class change, voice change, reordering, combine or split). Under each paraphrase, note the move used and run the trap list: quantifier, condition, hedge, agent, comparative. Finish with one paragraph stating which move felt safest and which most easily drifted, and why.",
      minWords: 50,
      maxWords: 150,
    },
  },
  // -------------------------------------------------------------------------
  // Unit 3, Lesson 2 — Natural academic communication
  // -------------------------------------------------------------------------
  {
    slug: "toefl-language-academic-communication",
    title: "Natural academic communication",
    description:
      "Register, stance and the sound of natural academic English: how to choose formality per recipient, hedge and boost with control, and answer interview items without scripts.",
    objectives: [
      "match register to recipient across the email, discussion and interview tasks",
      "signal stance with hedges and boosters instead of flat assertion",
      "reply to a classmate's post by engaging its point, not just praising it",
      "answer interview items directly, then support, in unscripted English",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "The scoring language for speaking and writing keeps praising one quality above others: naturalness. Not long words, not speed — the sound of English as it is actually used by educated speakers, matched to its recipient. An email to a professor, a discussion post and an interview answer are three different rooms, and register is the door between them. This lesson maps the three rooms, installs the stance toolkit that keeps claims discussable, and replaces memorised scripts with a four-beat answer routine.",
        beforeYouStart: [
          "You can write a grammatically correct sentence and read it aloud.",
          "You bring the paraphrase habit — natural replies begin by mirroring the other speaker's point.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing and Speaking directly; the register choices are visible in every constructed response"],
          ["Task & question types", "Write an Email; Write for an Academic Discussion; the four Take-an-Interview items"],
          ["What is assessed", "Register match to recipient, stance signalling, and responses that engage rather than recite"],
          ["Why this matters", "Raters listen for natural academic English — translated phrasing and memorised filler are the two fastest ways to sound unlike it"],
        ],
      },
      { type: "heading", text: "Three rooms, one speaker" },
      {
        type: "text",
        text: "Register is the level of formality a situation expects, and it changes with the recipient, not with your mood. The email to a professor is polite, purposeful and brief: greeting, purpose in the first sentence, request, close. The discussion post is semi-formal but conversational — it agrees, extends and pushes back, and it addresses classmates as peers. The interview answer is spoken English at its most natural: contractions are correct there, directness is a virtue, and the best answers start with the answer itself. One warning travels with all three: nothing here is a script. Memorised answers collapse at the first follow-up question, and raters are trained to hear them — the aim is routines you can adapt, not sentences you can recite.",
      },
      {
        type: "definition",
        term: "register",
        partOfSpeech: "noun",
        definition: "The variety of language appropriate to a situation — its formality, vocabulary and tone — chosen by the recipient and the setting rather than by habit.",
        example: {
          english: "'I am writing to ask whether an extension might be possible' (email) and 'Yeah, I got it done, but the last section took ages' (interview) are both correct English in their own rooms.",
          translation: "",
        },
      },
      {
        type: "comparison",
        title: "One candidate, three rooms",
        intro: "The same learner, the same week, three registers.",
        columns: ["Email to a professor", "Discussion post"],
        rows: [
          { aspect: "Opening", left: "Dear Professor Okafor, I am writing to ask ...", right: "I'd like to build on Dana's point about ...", },
          { aspect: "Contractions", left: "Avoided — 'I am writing', 'it is not clear'", right: "Natural — 'I'd argue', 'that's the strongest reason'" },
          { aspect: "Stance", left: "Requests hedged: 'would it be possible to ...'", right: "Claims hedged but engaged: 'I'd push back gently ...'" },
          { aspect: "Close", left: "Yours sincerely, with a next step offered", right: "A question back to the group, or a concession to the counter-argument" },
        ],
        verdict: "The interview room sits further along the same line: 'Honestly? I'd say group work suits me better — here's why.' Direct, contracted, unscripted.",
      },
      { type: "heading", text: "The stance toolkit" },
      {
        type: "table",
        title: "Hedges, boosters and attitude",
        headers: ["Device", "Examples", "What it signals"],
        rows: [
          ["Hedges", "may, might, appears to, tends to, I would argue", "A claim is offered for discussion, not announced as fact"],
          ["Boosters", "clearly, undoubtedly, the evidence is strong", "Confidence in a claim — used sparingly to stay credible"],
          ["Attitude markers", "unfortunately, remarkably, oddly", "The speaker's evaluation, shown openly"],
          ["Softeners", "I'd push back gently; if I understand you correctly", "Disagreement delivered inside courtesy"],
        ],
        caption: "Hedge claims you cannot support; boost the ones you can. A post made only of boosters reads as brittle; one made only of hedges reads as unsure.",
      },
      { type: "heading", text: "Reacting, not reciting" },
      {
        type: "text",
        text: "A discussion reply has three honest moves: agree and add, extend with new evidence, or push back with a reason. All three begin the same way — with a one-sentence mirror of the classmate's point. What the reply must never be is praise with nothing under it ('Great point! I totally agree.'), because praise is not engagement, and raters read the difference directly. The interview items reward the same directness in miniature: answer the question in your first sentence, give the reason in the second, land one example in the third, and stop. Routines, not scripts: the four beats survive any follow-up, because you assembled them from your own material at the moment of speaking.",
      },
      {
        type: "steps",
        title: "The direct-answer routine",
        intro: "Four beats, about thirty seconds, no script.",
        steps: [
          {
            title: "Beat one: answer the question",
            text: "The first sentence answers it — plainly, in your own words. No preamble, no restating the question at length, no warm-up anecdote.",
            examples: [
              {
                english: "Item: 'Do you prefer studying alone or with others?' First sentence: 'With others, most of the time.'",
                note: "The answer arrives before the reasons; the rater hears control immediately.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Beat two: give the reason",
            text: "One reason, chosen before you speak, not three reasons discovered while speaking. The reason is the sentence a follow-up question will aim at.",
            examples: [
              {
                english: "'I learn faster when someone else catches what I miss.'",
                note: "One reason, concrete and personal — exactly what a follow-up can build on.",
                domain: "exam",
              },
            ],
          },
          {
            title: "Beat three: land one example",
            text: "A single specific example, dated and placed, outperforms three vague ones. It also gives the answer texture that no template could have supplied.",
            examples: [
              {
                english: "'Last term our study group rebuilt a statistics problem set the night before, and every one of us passed it.'",
                note: "Specific time, specific task, specific outcome — the texture raters trust.",
                domain: "study",
              },
            ],
          },
          {
            title: "Beat four: stop",
            text: "End on the example or a short conclusion. The most common interview error is the fifth beat nobody asked for — trailing generalities that undo the control the first three beats built.",
            examples: [
              {
                english: "A learner finishes on the example, waits for the next item, and has time left over instead of words left over.",
                note: "Stopping is a skill; the clock rewards it and so does the rater.",
                domain: "exam",
              },
            ],
          },
        ],
      },
      {
        type: "warning",
        title: "The two fastest ways to sound unnatural",
        text: "Translated phrasing ('I am agree', 'make attention') and memorised filler ('in my personal opinion, from my own perspective, as we all know'). The first is repaired by the collocation log; the second by refusing to memorise sentences — routines survive follow-ups, and recited answers never do.",
      },
      {
        type: "example",
        title: "Register at work",
        note: "Each item is one register decision, made in the wild.",
        items: [
          {
            english: "An email opens 'Dear Professor Okafor, I am writing to ask whether an extension of a few days might be possible' — hedged request, purpose in sentence one.",
            note: "Politeness carried by structure, not by apology paragraphs.",
            domain: "exam",
          },
          {
            english: "A discussion reply reads 'I'd push back gently on the cost point — the pilot showed the opposite, and that's the strongest evidence we have.'",
            note: "Softener, disagreement, evidence: three devices, one natural sentence.",
            domain: "exam",
          },
          {
            english: "An interview answer begins 'Honestly? Mornings, by a mile — I get my best work done before anyone else is awake.'",
            note: "Contraction and directness are correct in the interview room; they would be wrong one room over.",
            domain: "exam",
          },
          {
            english: "A seminar reply opens 'If I understand Jae's point, the delay helped quality because the team re-tested twice — I'd add that it also raised costs.'",
            note: "Mirror first, extension second: the paraphrase habit doing register work.",
            domain: "study",
          },
          {
            english: "A message to a supervisor runs 'Quick update: the draft is with the editors, and I'll flag anything that changes the timeline.'",
            note: "Workplace register is brief, forward-looking, and unhedged where facts are known.",
            domain: "work",
          },
          {
            english: "A flat-mate arrangement is settled with 'I'll do the shop on Saturdays if you take the bins — deal?'",
            note: "Everyday English: condition, offer, close, all inside fifteen words.",
            domain: "everyday",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Register mistakes corrected",
        items: [
          {
            wrong: "I am agree with the point about funding.",
            right: "I agree with the point about funding.",
            reason: "Agree is a verb in English, not an adjective; 'I am agree' is translated phrasing that raters hear in the first word.",
          },
          {
            wrong: "Every answer needs a formal opening: 'In my personal opinion, as we all know ...'",
            right: "Answer the question in your first sentence; drop the filler phrases entirely.",
            reason: "Memorised filler fills seconds without content, and the naturalness criterion penalises exactly the seconds it wastes.",
          },
          {
            wrong: "In the discussion task I write 'Great point! I totally agree.' and move on.",
            right: "Mirror the point in one sentence, then agree with a reason, extend with evidence, or push back.",
            reason: "Praise is not engagement; the criteria reward responses that interact with the other posts, and one exclamation never shows that.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Register across the four sections",
        reading: {
          text: "Posted by Prof. Ibarra: 'This week's question — should first-year students be required to live on campus? Post your view and respond to at least one classmate.' Reply from Dana: 'I'd say yes, mostly. Living on campus gave me a ready study group in my first term, and I doubt I'd have found one off campus. But the cost side is real, and I'd want a hardship exemption.'",
          task: "Mark every hedge, booster and attitude marker in Dana's reply, then name the register signals that make it natural.",
        },
        writing: {
          task: "Write a discussion reply to Dana's post: mirror her point in one sentence, take a stance with at least one hedge or booster, and close with a question or a concession.",
          guide: [
            "Open with the mirror — 'If I understand your point, ...' — using one paraphrase move only.",
            "State your stance in the second sentence with one hedge or one booster, chosen for the claim's strength.",
            "Support with one specific example from your own experience or reading.",
            "Close with a question back to the group or a concession to the strongest counter-argument.",
          ],
          model:
            "If I understand your point, the ready-made study group is the strongest argument for required campus living, and the cost is the strongest against. I'd add a third: first-year students off campus miss the evening workshops, which in my experience are where the course actually clicks. That said, I'd stop short of requiring it for everyone — a hardship exemption like yours, Dana, would cover most of the cases that worry me. Would the workshops also stream for students who live far out?",
        },
        listening: {
          script: "Two interview answers to the same item — 'What do you do when a plan stops working?' First: 'Well, you know, in my personal opinion, as we all know, plans are things that sometimes, in life, do not work.' Second: 'I rewrite the plan the same day. Last spring our survey lost its venue a week out, and we moved it to the annex by Friday — so my habit is: cut the plan, keep the goal.'",
          task: "Say which answer is natural and why, naming the devices the second answer uses.",
        },
        speaking: {
          task: "Answer this interview item in about thirty seconds: 'Do you prefer working in the morning or at night? Why?' Use the four-beat routine and stop on the example.",
          frames: [
            "Mornings, by a mile — ...",
            "The main reason is ...",
            "Last term, for example, ...",
            "So that's why I ...",
          ],
          checklist: [
            "My first sentence answered the question.",
            "I gave one reason and one dated example, not a list.",
            "I stopped on the example — no trailing generalities.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it lifts the band"],
        rows: [
          ["Mirrors the classmate's post before taking a stance", "Engagement with other posts is a named criterion; the mirror shows it in one sentence"],
          ["Adds a third argument instead of restating hers", "Development means the reply advances the thread — new content, not echo"],
          ["Concedes the counter-argument before closing", "Concession is academic judgement made audible, the register the task is named for"],
          ["Ends with a question back to the group", "A discussion post that reopens the discussion reads as discussion, not as an essay pasted into a forum"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Know the three rooms: email formal-brief, discussion semi-formal-conversational, interview natural-direct — and never cross them."],
          ["While the clock runs", "In the email, state your purpose in sentence one; in the discussion, mirror before you argue; in the interview, answer before you explain."],
          ["If you are stuck", "If words fail, return to the four beats: answer, reason, example, stop — the routine works without any prepared sentences."],
          ["Final minutes", "Sweep for translated phrasing and filler: 'I am agree', 'in my personal opinion' — one read-aloud catches both."],
        ],
      },
      {
        type: "summary",
        points: [
          "Register is chosen by the recipient: email formal and brief, discussion semi-formal and conversational, interview natural and direct.",
          "The stance toolkit — hedges, boosters, attitude markers, softeners — keeps claims discussable and disagreement courteous.",
          "A discussion reply has three honest moves: agree and add, extend with evidence, or push back with a reason — all after the mirror.",
          "The interview routine is four beats: answer, reason, example, stop — routines survive follow-ups; scripts never do.",
          "Translated phrasing and memorised filler are the two fastest ways to sound unnatural; the collocation log repairs one, refusal to memorise repairs the other.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson in this module's chain.",
        items: [
          {
            question: "In the paraphrasing lesson, what must a paraphrase keep intact?",
            options: ["The proposition — quantifiers, conditions, hedges, agents", "The original word order", "The original sentence count"],
            correctIndex: 0,
            explanation: "Fidelity outranks variety: the packaging may change, the proposition may not.",
            from: "toefl-language-paraphrasing",
          },
          {
            question: "How many interview items does the Speaking section carry?",
            options: ["Four", "Seven", "One"],
            correctIndex: 0,
            explanation: "Four interview items alongside seven Listen-and-Repeat sentences — eleven items in about eight minutes.",
            from: "toefl-format-2026",
          },
          {
            question: "Which is the natural partnership?",
            options: ["raise awareness", "lift awareness", "make awareness"],
            correctIndex: 0,
            explanation: "Awareness is raised; lift and make are broken partners of this noun in every register.",
            from: "toefl-language-collocations",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "You must email a professor to ask for a short extension. Which opening matches the email room?",
        hints: ["Purpose in sentence one; hedge the request."],
        options: [
          { id: "a", text: "Hey, I need more time on the essay." },
          { id: "b", text: "Dear Professor Okafor, I am writing to ask whether a short extension might be possible for the essay." },
          { id: "c", text: "I hereby demand an extension of the essay deadline." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Dear Professor Okafor, I am writing to ask whether a short extension might be possible for the essay.",
          "Greeting, purpose in sentence one, and a hedged request — the three register signals the email room expects, all before the second line.",
          "Option (a) is a register mismatch on contact, and option (c) is hostile and formulaic — both wrong rooms for a first request.",
        ),
        tags: ["toefl", "language", "natural academic communication"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Complete the hedge. Both 'seems' and 'appears' are accepted.",
        hints: ["The claim needs softening, not strengthening."],
        sentence: "The evidence ___ to support the earlier estimate, though more data is needed.",
        acceptedAnswers: ["seems", "appears"],
        feedback: fb(
          "seems (or appears)",
          "The hedge converts an assertion into a claim offered for discussion — exactly what the stance toolkit does for a sentence whose support is incomplete.",
          "Proves or shows would harden the claim beyond what 'more data is needed' can carry.",
        ),
        tags: ["toefl", "language", "natural academic communication"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "speaking",
        prompt: "What does the direct-answer routine recommend for an interview item?",
        hints: [],
        options: [
          { id: "a", text: "Open with background context for about thirty seconds." },
          { id: "b", text: "Answer the question in the first sentence, give one reason, land one example, then stop." },
          { id: "c", text: "Repeat the question back before answering, for composure." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Answer the question in the first sentence, give one reason, land one example, then stop.",
          "Four beats, about thirty seconds, no script: the routine survives follow-up questions because it is assembled from your own material at the moment of speaking.",
          "Preambles (a) spend the clock without content, and echoing the question (c) is a filler habit raters hear as exactly that.",
        ),
        tags: ["toefl", "language", "natural academic communication"],
      }),
      ex({
        type: "correct-mistake",
        difficulty: "easy",
        skill: "speaking",
        prompt: "Repair the translated phrasing.",
        hints: ["Agree is a verb in English."],
        incorrectSentence: "I am agree with the point about funding.",
        acceptedAnswers: [
          "I agree with the point about funding.",
          "I agree with the point about funding",
        ],
        feedback: fb(
          "I agree with the point about funding.",
          "Agree is a verb, so it takes no 'am'; the repaired sentence is natural in every register from seminar to interview.",
          "Keeping 'am' is translated phrasing — the single most audible marker of a non-native template.",
        ),
        tags: ["toefl", "language", "natural academic communication"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Read the extract, then answer.",
        hints: [],
        passageTitle: "A discussion thread",
        passage: "Dana posted: 'I'd say yes, mostly. Living on campus gave me a ready study group in my first term, and I doubt I'd have found one off campus. But the cost side is real, and I'd want a hardship exemption.'",
        question: "Which reply meets the discussion criteria best?",
        options: [
          { id: "a", text: "Great point, Dana! I totally agree with everything you said." },
          { id: "b", text: "If I understand your point, the study group is the strongest argument for and the cost the strongest against — I'd add that evening workshops matter too, though a hardship exemption would cover most worries." },
          { id: "c", text: "This topic reminds me of a completely different question about transport." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "If I understand your point, the study group is the strongest argument for and the cost the strongest against — I'd add that evening workshops matter too, though a hardship exemption would cover most worries.",
          "The mirror proves the post was read, the extension advances the thread, and the concession shows judgement — three criteria visible in two sentences.",
          "Praise without engagement (a) and changing the subject (c) fail the interaction criterion outright, whatever their grammar.",
        ),
        tags: ["toefl", "language", "natural academic communication"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "speaking",
        prompt: "Type a two-word hedge that could replace 'definitely' in 'The data definitely prove this.'",
        hints: [],
        question: "Which two-word hedge softens 'definitely prove' into a discussable claim?",
        acceptedAnswers: ["may well", "might well", "may possibly"],
        keywords: ["may", "might", "well"],
        feedback: fb(
          "may well (or might well)",
          "The hedge keeps the claim alive while marking it as offered for discussion — the stance toolkit's commonest device in one breath.",
          "Definitely prove is a booster with no support behind it; the hedge converts it into a claim a reader can work with.",
        ),
        tags: ["toefl", "language", "natural academic communication"],
      }),
    ],
    homework: [
      "Write the same request twice — once as an email to a professor, once as a message to a classmate — and mark every register difference between the two versions.",
      "Record thirty-second answers to three interview items using the four-beat routine; play them back and cut any trailing generalities after the example.",
    ],
    assignment: {
      title: "Register rewrite",
      instructions:
        "Take one paragraph you have written this month — an email, a post or a recorded answer. Rewrite it twice for two different recipients: once for a professor (formal, purpose first, hedged requests) and once for a classmate (semi-formal, conversational, mirror before stance). Under each version, list the register signals you changed — contractions, hedges, greetings, closers — and finish with one sentence naming which version was harder to write and why.",
      minWords: 60,
      maxWords: 160,
    },
  },
];

