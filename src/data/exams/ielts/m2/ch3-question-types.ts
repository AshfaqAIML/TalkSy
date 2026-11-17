/**
 * Chapter 3 — Every question type, taught to mastery (PROMPT 44 Part 3).
 *
 * One lesson per official Listening task family, each carrying the
 * seven-component masterclass structure: what the task is, the step-by-step
 * solving method, a fully worked example, the trap catalogue, guided
 * practice, independent practice and per-item answer explanations.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const questionTypeLessons: LessonSpec[] = [
  {
    slug: "ielts-listening-multiple-choice",
    title: "Multiple choice in depth",
    description:
      "Single-answer and choose-TWO-letters variants: stem prediction, the paraphrase rule that separates answers from quotations, and the triplet of builds behind nearly every wrong option.",
    objectives: [
      "run the stem-first routine: restate every stem as a question before the options are touched",
      "apply the paraphrase rule: correct options rephrase the recording while wrong options quote it",
      "reject options by naming their distractor build instead of comparing polish",
      "answer single-letter and two-letter variants without ever leaving a blank",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Multiple choice looks like the safest task in the section and behaves like the sharpest. You get a stem plus three options, or five options and an instruction to choose two letters, and nearly every wrong choice is built from words the recording actually said. This lesson installs the stem-first routine, the paraphrase rule that tells answers from quotations, and the three builds that account for almost every distractor you will meet.",
        beforeYouStart: [
          "You can read a stem and hold its question in mind for ten seconds of audio.",
          "You know the one-hearing rule and the answer-everything habit from the fundamentals chapter.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Multiple choice in this lesson"],
        rows: [
          ["Section", "Listening — all four parts use it; Parts 3 and 4 carry the heaviest items"],
          ["Task & question types", "One stem with three options (choose one letter); longer sets where the rubric asks for two letters"],
          ["What is assessed", "Whether your chosen option answers the stem, proven against a recording you heard exactly once"],
          ["Why this matters", "Wrong options are assembled from the audio's own vocabulary, so word-spotting effort actively loses marks here"],
        ],
      },
      {
        type: "text",
        text: "On screen the task is a question number, a stem of one or two lines, and lettered options stacked underneath. Single-answer items offer three options; the two-letter variant offers five and says exactly how many letters to select. Stems ask about claims, reasons, feelings and plans — the stem's wording is the contract your chosen option must satisfy. What the stem never does is quote the recording: the correct option rephrases what was said, while distractors recycle the recording's exact phrases into statements nobody actually made.",
      },
      {
        type: "steps",
        title: "Solving method: multiple choice",
        intro: "Five moves, run in this order, on every item.",
        steps: [
          {
            title: "Convert the stem into a question",
            text: "Read the stem alone and restate it as a plain question, noting its time frame and its question word. A stem about plans wants future evidence; a stem about feelings wants evaluative language. Hold that question while the audio runs.",
            examples: [
              {
                english: "Stem 'What does the tutor advise Marta to do first?' becomes 'advice plus order — what comes before what?', so your ear hunts sequencing and recommendation language together.",
                note: "The stem is a contract; restate it before reading a single option.",
              },
            ],
          },
          {
            title: "Skim the options for their angle, not their truth",
            text: "Options preview the recording's topic corners: label each one with a two-word angle such as 'cost' or 'timing'. Do not grade them yet — before the audio plays, every option is equally plausible and equally dangerous.",
            examples: [
              {
                english: "Options touching cost, timing and staffing are three corners; you note 'cost / timing / staff' and wait for evidence.",
                note: "Two-word labels keep the set alive without pre-committing.",
              },
            ],
          },
          {
            title: "Self-answer, then match",
            text: "When the relevant stretch of audio ends, state the answer in your own words first. Only then read the options and pick the one that matches your sentence. If the options speak first, the loudest quotation wins and the mark goes.",
            examples: [
              {
                english: "Audio 'the real delay was the permit' becomes your sentence 'permit caused it', and the winning option says 'a permit held the project up'.",
                note: "Self-answer first is the whole defence against polish.",
              },
            ],
          },
          {
            title: "Reject by build, not by feeling",
            text: "Nearly every wrong option is one of three builds: quoted-but-distorted (recording words welded into a false claim), over-absolute (never, only, all where the speaker hedged), or true-but-irrelevant (a real fact that fails the stem's question). Name the build as you strike.",
            examples: [
              {
                english: "Audio 'we've mostly finished' against an option saying 'the work is complete' is the over-absolute build; strike it by name.",
                note: "Naming builds turns rejection into mechanics.",
              },
            ],
          },
          {
            title: "Handle the two-letter variant deliberately",
            text: "Choose-TWO-letters items demand two separate proofs, and a partial selection scores nothing. Treat the item as two questions wearing one number, and confirm both letters in the final sweep.",
            examples: [
              {
                english: "Rubric 'choose TWO letters': find the proof for one letter, mark it, then hunt the second proof independently — never select a pair because the options sound related.",
                note: "Two proofs, two strikes, no partial credit.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — a single-answer item",
        context:
          "Item 4: What does Ines decide to do? A wait for a place in the beginner group B take the evening class C buy her own materials",
        lines: [
          { speaker: "Receptionist", text: "The beginner group is full, but there's space in the evening class if you want it." },
          { speaker: "Ines", text: "Hmm — I'd rather not finish work and then drive here." },
          { speaker: "Receptionist", text: "You could bring your own clay instead of paying the materials charge, if that helps." },
          { speaker: "Ines", text: "That's not the issue. No — go on, put me down for the evenings; it's that or wait a month." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. Step one converts the stem to 'decision — what does she choose?'. Step two labels the options 'wait / evenings / materials'. The evidence arrives wrapped in rejections: waiting dies on 'No', buying clay dies on 'That's not the issue', and the decision lands on 'put me down for the evenings'. Step three self-answers 'she joins the evening class'. Step four checks option B for builds: it rephrases her decision rather than quoting it, it carries no absolutes, and it answers the stem's question about her choice. Option C shows the quoted-but-distorted build in the wild — the materials idea really was discussed, by the receptionist, as a suggestion that Ines refused. A fact from the recording that nobody acted on is worth exactly zero marks, and the stem asked what Ines decided.",
      },
      {
        type: "example",
        title: "Marks won and lost on multiple choice",
        items: [
          {
            english: "An option says 'she will definitely resign'; the speaker said 'I may hand in my notice if things don't improve'. The word 'definitely' is the over-absolute build in a single word.",
            note: "Hedged audio plus absolute option equals strike.",
            domain: "work",
          },
          {
            english: "A student circles an option because its nouns all appeared in the lecture, missing that the verbs were welded on by the item writer.",
            note: "Quoted words, manufactured claim — build number one.",
            domain: "study",
          },
          {
            english: "The stem asks why the pool closed; the correct option reads 'maintenance costs rose', while the recording said 'running it had become too expensive'.",
            note: "The answer rephrases; that is the paraphrase rule working for you.",
            domain: "everyday",
          },
          {
            english: "A two-letter item is answered with one confident letter and one 'related-sounding' letter; the pair scores nothing because only one proof existed.",
            note: "Two letters demand two independent proofs.",
            domain: "exam",
          },
          {
            english: "Two options survive to the end; the candidate rereads the options twice instead of the stem, and the stem's word 'initially' had decided the whole item.",
            note: "When two stand, the stem breaks the tie.",
            domain: "exam",
          },
          {
            english: "The recording mentions a price change for last year and a planned increase for next year; the stem asks about plans, so only the future claim answers it.",
            note: "Time-frame mismatch is build three: true but irrelevant.",
            domain: "work",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Multiple choice traps corrected",
        items: [
          {
            wrong: "The option with the most words from the recording is the safest pick.",
            right: "Pick the option that answers your restated stem, even when it shares no vocabulary with the audio.",
            reason: "Item writers lift distractor wording straight from the script precisely because recycled words feel like proof.",
          },
          {
            wrong: "I read the options first so I know what to listen for.",
            right: "Read the stem first, restate it as a question, and only skim the options for their angles.",
            reason: "Options-first turns listening into quotation hunting, which is exactly the skill the distractors are built to exploit.",
          },
          {
            wrong: "On two-letter items I select the two options that appear in the same sentence.",
            right: "Select two letters only when you can point to separate evidence for each.",
            reason: "Proximity is not proof, and partial selections are marked wrong rather than half-right.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Restate each stem as a question and note its time frame; label every option with a two-word angle."],
          ["While the clock runs", "Self-answer after the evidence arrives, then match; strike wrong options by naming their build."],
          ["If you are stuck", "Narrow to two, reread the stem word by word, and choose — a two-way guess beats a certain zero."],
          ["Final minutes", "Revisit every two-letter item and confirm that exactly two letters are selected."],
        ],
      },
      {
        type: "summary",
        points: [
          "Restate the stem as a question before touching the options; the stem is the contract.",
          "Correct options rephrase the recording; distractors quote it into claims nobody made.",
          "Three builds cover most wrong options: quoted-but-distorted, over-absolute, true-but-irrelevant.",
          "Two-letter items need two independent proofs and score nothing on partial selections.",
          "When two options survive, the stem's exact wording breaks the tie.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three recall items from earlier lessons in the masterclass.",
        items: [
          {
            question: "In what order do answers arrive relative to the questions?",
            options: ["Question order", "Random order", "Reverse order"],
            correctIndex: 0,
            explanation: "The recording delivers evidence in the numbered sequence of the questions, which is what makes position-tracking possible.",
            from: "Understanding the Listening test",
          },
          {
            question: "A recording says 'Friday… no, make it Sunday'. Which date is keyed?",
            options: ["Friday", "Sunday", "Both dates"],
            correctIndex: 1,
            explanation: "Self-corrections replace the first value, so the corrected date is the one the speakers finally rely on.",
            from: "Identifying distractors",
          },
          {
            question: "What does the one-hearing rule make of a blank answer?",
            options: ["A safe choice", "A guaranteed zero", "Half credit"],
            correctIndex: 1,
            explanation: "Nothing is deducted for guessing, so an empty answer discards a free chance to score on every objective item.",
            from: "Time management",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the exchange, then answer.",
        hints: ["Listen for her final decision after both suggestions have been rejected."],
        audioText:
          "Receptionist: The beginner group is full, but there's space in the evening class if you want it. Ines: I'd rather not finish work and then drive here. Receptionist: You could bring your own clay instead of paying the materials charge. Ines: That's not the issue. No — go on, put me down for the evenings; it's that or wait a month.",
        question: "What does Ines finally decide to do? (In a few words.)",
        acceptedAnswers: ["take the evening class", "join the evening class", "book the evening class", "the evening class"],
        keywords: ["evening"],
        feedback: fb(
          "She takes the evening class.",
          "Ines rejects waiting outright ('No') and rejects the clay suggestion ('That's not the issue') before confirming with 'put me down for the evenings'. The decision language is the proof, and it arrives only after both distractors have been aired.",
          "Waiting for the beginner group is refused in her own words, and buying materials was the receptionist's suggestion, never her choice.",
        ),
        tags: ["ielts", "mcq"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "The recording says: 'we may hand in our notice if things don't improve.' Which option is a distractor by build?",
        hints: ["Compare the strength of each option against the strength of the claim."],
        options: [
          { id: "a", text: "The team will definitely resign." },
          { id: "b", text: "The team might resign if conditions stay poor." },
          { id: "c", text: "The team met to discuss conditions." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The team will definitely resign.",
          "The speaker hedged twice, with 'may' and with 'if'; the word 'definitely' converts a condition into a promise, which is the over-absolute build in its purest form. Naming the build makes the rejection mechanical.",
          "Option (b) keeps the recording's hedge inside a fair paraphrase, and option (c) is an unverified detail — only (a) manufactures certainty the speaker never expressed.",
        ),
        tags: ["ielts", "mcq"],
      }),
      ex({
        type: "multi-select",
        difficulty: "medium",
        skill: "listening",
        prompt: "Select the three builds that account for nearly every wrong option.",
        hints: ["One of the four is pure superstition."],
        options: [
          { id: "a", text: "Quoted-but-distorted: recording words welded into a claim" },
          { id: "b", text: "Over-absolute: never, only, all where the audio hedged" },
          { id: "c", text: "True-but-irrelevant: a real fact that fails the stem" },
          { id: "d", text: "Longest-option: the most detailed choice is correct" },
        ],
        correctOptionIds: ["a", "b", "c"],
        feedback: fb(
          "Quoted-but-distorted, over-absolute and true-but-irrelevant are the builds.",
          "Each of the three feels like evidence — recycled words, strong claims, true statements all outshine the quiet paraphrase that is the answer. Knowing the builds converts rejection from an instinct into a checklist.",
          "Length has no marking value; detailed distractors are common precisely because effort feels like proof.",
        ),
        tags: ["ielts", "mcq"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Read the case, then answer.",
        hints: [],
        passageTitle: "Two survivors",
        passage:
          "Stem: 'What does the manager plan to change first?' Surviving options: A 'the rota was adjusted last winter' and B 'a new rota comes in next month'. Recording: 'We altered the rota last winter, and there's a further revision arriving next month — the first thing on my list is the rota review.'",
        question: "Which option answers the stem, and why?",
        options: [
          { id: "a", text: "A — it is stated as a completed fact." },
          { id: "b", text: "B — the stem asks about plans, and a change arriving next month is forward-looking evidence, while A is history." },
          { id: "c", text: "Neither — both mention the rota, so the item is ambiguous." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "B — the stem asks about plans, and a change arriving next month is forward-looking evidence, while A is history.",
          "The stem's word 'plan' sends your ear to future evidence; the winter change is true, finished, and useless. Option B is the forward-looking claim that the stem's contract accepts, which is why build three eliminates its rival.",
          "Option A is the true-but-irrelevant build at full strength, and option (c) misreads a well-formed item: stems exist precisely to separate two true statements.",
        ),
        tags: ["ielts", "mcq"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "In one phrase: what do you produce from the stem before any option is read?",
        hints: ["The routine is stem-first, and the stem gets restated."],
        question: "Before reading options, what should the stem become?",
        acceptedAnswers: ["a question", "a restated question", "my own question", "a plain question"],
        keywords: ["question"],
        feedback: fb(
          "A restated question in your own words.",
          "Restating the stem converts it into a hunting licence: your ear knows the relation to listen for, and the options arrive as candidates rather than commanders. The stem-first order is what stops polished quotations from overwriting what you heard.",
          "Reading options first hands control to the item writer, whose recycled wording is built to feel like proof.",
        ),
        tags: ["ielts", "mcq"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen, then answer with the two claims.",
        hints: [],
        audioText:
          "Guide: Two things to know about the museum pass. First, it no longer covers the sculpture wing — that's a separate ticket now. Second, the pass price dropped this season, so it's actually cheaper than two single entries.",
        question: "The pass now EXCLUDES which part of the museum, and what happened to its price?",
        acceptedAnswers: [
          "the sculpture wing, and the price dropped",
          "the sculpture wing, and it got cheaper",
          "sculpture wing; price dropped",
        ],
        keywords: ["sculpture", "cheaper", "dropped"],
        feedback: fb(
          "It excludes the sculpture wing, and the price is lower than before.",
          "The guide signposts two claims with 'First' and 'Second': the wing exclusion and the price drop. A two-letter item in miniature needs both proofs, exactly as the choose-TWO-letters rubric demands — one claim without the other scores nothing.",
          "The comparison with two single entries is the distractor corner; only the two signposted claims carry marks.",
        ),
        tags: ["ielts", "mcq"],
      }),
    ],
    homework: [
      "Take any short interview transcript; write one single-answer item whose correct option paraphrases a claim and two distractors that quote it into falsehood.",
      "Write one two-letter item with five options, then mark where separate evidence exists for exactly two of them.",
    ],
  },
  {
    slug: "ielts-listening-matching",
    title: "Matching in depth",
    description:
      "Pairing numbered questions with lettered options: attribution across speakers, elimination through a shrinking option set, and the rubric that decides whether options recycle or retire.",
    objectives: [
      "read the matching rubric to learn whether options are used once at most or may repeat",
      "hold two or three live candidates per question while the recording argues",
      "attribute claims by commitment language rather than by which sentence carries the vocabulary",
      "eliminate across the option set so the final questions inherit a smaller field",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Matching hands you a numbered list of questions and a lettered list of options, and asks you to pair them under a rubric that changes the mechanics. When options outnumber questions, each letter is used at most once and the set shrinks as you go. When the rubric allows re-use, elimination stops working and every letter stays live until the end. This lesson trains both modes, plus the attribution discipline that carries the marks in either one.",
        beforeYouStart: [
          "You can follow two or three named speakers through a discussion.",
          "You have the answer-everything habit from the fundamentals chapter.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Matching in this lesson"],
        rows: [
          ["Section", "Listening — Part 3's discussion sets; Part 2 lists and Part 1 amenities also use the family"],
          ["Task & question types", "Match numbered questions (people, places, items) to lettered options; some rubrics permit repeated letters"],
          ["What is assessed", "Attribution under argument: which speaker or item genuinely owns each claim"],
          ["Why this matters", "The recording attaches each option's vocabulary to non-owners on purpose, so mention-matching works against you"],
        ],
      },
      {
        type: "text",
        text: "Most matching sets give you more options than questions and state that you may use each letter once at most — spare options are designed, never accidental, and every confirmed pairing shrinks the field for the questions still open. Occasionally the option list is shorter than the question list and the rubric permits any letter more than once; then options recycle, striking gives you nothing, and a single letter can legitimately serve several questions. The rubric is printed and read aloud, so treat it as the first question of the set: it tells you which mechanics apply for the next five minutes.",
      },
      {
        type: "steps",
        title: "Solving method: matching",
        intro: "Attribution first, mechanics second — in this order.",
        steps: [
          {
            title: "Read the rubric before anything else",
            text: "Count options against questions and note the re-use rule. Whether you strike letters after use or keep every letter live follows from one printed line, and misreading it dismantles the whole method.",
            examples: [
              {
                english: "Five options, three questions, 'use each letter once at most' means two letters are designed never to be chosen.",
                note: "The rubric decides whether elimination is available.",
              },
            ],
          },
          {
            title: "Preview both columns as a cast list",
            text: "The questions are the people or items; the options are the claims they will own. Paraphrase each option into a likely recording phrase so your ear recognises the reworded version when it arrives.",
            examples: [
              {
                english: "The option 'dissatisfied with the service' might surface as 'the whole thing was pretty disappointing' — rehearse the rewording before the audio starts.",
                note: "Options arrive paraphrased; meet them halfway.",
              },
            ],
          },
          {
            title: "Track candidates, not conclusions",
            text: "Early in the block, allow two or three live letters per question. Discussions hedge, reverse and reconsider, and premature commitment is exactly what the design punishes. Write small candidate letters beside each question and prune as verdicts land.",
            examples: [
              {
                english: "Question 22 carries 'B or D' through the first exchange and resolves when a second speaker says 'actually I agree with her on that'.",
                note: "Live candidates convert arguments into evidence.",
              },
            ],
          },
          {
            title: "Attribute by commitment language",
            text: "A claim belongs to the speaker who commits to it: through agreement, refusal, or a plan confirmed in reply. A sentence that merely reports or introduces another person's position never transfers ownership.",
            examples: [
              {
                english: "'Sami thought it was rushed', spoken by Elena, reports Sami's view — the letter goes to Sami, not to Elena.",
                note: "Reporting verbs donate ownership elsewhere.",
              },
            ],
          },
          {
            title: "Let the set shrink for you",
            text: "In once-at-most sets, strike each used letter immediately and reread what remains. The last questions then choose among few options, which is difficulty reduction the task hands you for free.",
            examples: [
              {
                english: "Two letters left for the final question turn a five-way problem into a two-way guess.",
                note: "Elimination compounds like interest.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — opinions to speakers (Part 3 style)",
        context:
          "Questions 21–23: What view does each person hold about the field trip? 21 Ravi · 22 Mei · 23 Tutor. Options: A the timetable was too tight B the guest speaker added value C the venue was hard to reach D the budget was well spent E the tasks needed clearer briefs. Use each letter once at most; two letters will not be used.",
        lines: [
          { speaker: "Tutor", text: "Let's hear your verdicts on the wetlands trip. Ravi?" },
          { speaker: "Ravi", text: "Half the group grumbled about the three bus changes, but honestly the marine biologist made it worthwhile — I've switched my project topic because of her." },
          { speaker: "Mei", text: "They squeezed the whole day into four hours to keep costs down! My group barely finished sampling." },
          { speaker: "Tutor", text: "The savings were real, though. For the money we got more than our value — I'd repeat the booking as is." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. The rubric promises two unused letters. Previewing the five options gives five claim-families: timing, speaker value, access, money, briefing quality. Question 21 (Ravi): the bus grumbling is reported hearsay — 'half the group grumbled' — so option C's vocabulary sits in Ravi's sentence without belonging to him; his commitment is 'made it worthwhile', and the switched project topic seals it, so 21 goes to B. Question 22 (Mei): 'squeezed the whole day into four hours' is a committed complaint about timing, so 22 takes A, and her mention of costs is explanation rather than praise, so D is not hers. Question 23 (Tutor): 'more than our value — I'd repeat the booking' commits the tutor to D. C and E stay unused, exactly as the rubric promised. Every option's vocabulary was placed in a non-owner's sentence at least once, and every mark went to commitment instead.",
      },
      {
        type: "example",
        title: "Matching marks won and lost",
        items: [
          {
            english: "A question keys 'concerned about the deadline' to Jonas; the recording gives the worry to a colleague, and Jonas only agrees to help with scheduling. The letter still belongs to the worried colleague.",
            note: "Agreeing to help is not owning the worry.",
            domain: "work",
          },
          {
            english: "Four diners, three restaurant styles, once-at-most: the final diner's question inherits a two-way choice once two letters have been struck.",
            note: "Strikes made early are difficulty removed late.",
            domain: "everyday",
          },
          {
            english: "A student pairs 'the reading list is too long' with the professor because the professor says the words 'reading list' while introducing it. The student who said 'we'll never get through these' owns the claim.",
            note: "Introducing a topic is not holding an opinion about it.",
            domain: "study",
          },
          {
            english: "The rubric 'you may use any letter more than once' is ignored; a candidate strikes a letter after one use and leaves the last two questions stranded.",
            note: "The re-use rule is printed and spoken — obey it.",
            domain: "exam",
          },
          {
            english: "Two speakers talk over each other and one corrects the allocation mid-sentence; the second version of the plan is the one the answer key follows.",
            note: "Corrections re-allocate ownership.",
            domain: "study",
          },
          {
            english: "Two students independently express the same view, and under a re-allowed rubric the same letter keys to both of their questions.",
            note: "Recycled letters are legal when the rubric says so.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Matching traps corrected",
        items: [
          {
            wrong: "Every letter in the option box gets used exactly once.",
            right: "Use each letter at most once when the rubric says so — spare letters are designed, not mistakes.",
            reason: "Forcing unused letters into open questions converts correct eliminations into wrong answers.",
          },
          {
            wrong: "The person whose sentence contains the option's words is the match.",
            right: "The person who commits to the claim is the match, even when another voice carries the vocabulary.",
            reason: "Recordings deliberately park each option's vocabulary in a non-owner's sentence to sell the mention-based mistake.",
          },
          {
            wrong: "I decide the first question immediately so I can relax into the block.",
            right: "Hold two or three candidate letters per question until the discussion's verdicts land.",
            reason: "Discussions hedge and reverse; early commitment freezes the wrong candidate before the confirming evidence arrives.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the rubric for the re-use rule; preview both columns and paraphrase each option into likely wording."],
          ["While the clock runs", "Keep candidate letters beside each question; attribute by commitment language and strike used letters at once."],
          ["If you are stuck", "Park the unresolved question, serve the next, and let later strikes shrink the field before you return."],
          ["Final minutes", "Serve every question from what remains — a narrowed guess beats a blank, and a leftover letter may be a designed spare."],
        ],
      },
      {
        type: "summary",
        points: [
          "Matching is attribution: letters go to whoever commits to a claim, not to whoever says its words.",
          "Read the rubric first: once-at-most sets shrink by striking; re-allowed sets keep every letter live.",
          "Hold two or three candidates per question while the discussion argues; prune on verdicts.",
          "Reporting and introducing vocabulary do not transfer ownership; agreement and refusal do.",
          "Serve every question — the final questions inherit the smallest, easiest field.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items drawn from earlier lessons.",
        items: [
          {
            question: "Where does correct-option vocabulary usually come from in objective items?",
            options: ["A fresh paraphrase of the claim", "The recording's exact phrasing", "The rubric's wording"],
            correctIndex: 0,
            explanation: "Answers rephrase while distractors quote, so recycled wording is a warning sign rather than a recommendation.",
            from: "Multiple choice in depth",
          },
          {
            question: "How many times is each recorded part played?",
            options: ["Once", "Twice for Part 1 only", "Twice everywhere"],
            correctIndex: 0,
            explanation: "Every part is heard exactly once, which is why candidate-tracking and striking must happen live rather than afterwards.",
            from: "Understanding the Listening test",
          },
          {
            question: "A recording corrects itself: 'let's say Tuesday — actually Thursday suits everyone better.' Which day is keyed?",
            options: ["Tuesday", "Thursday", "Both days"],
            correctIndex: 1,
            explanation: "The second value replaces the first; correction-tracking is what stops the discarded date from being captured.",
            from: "Identifying distractors",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the discussion, then answer with a letter.",
        hints: ["Ask who commits to each claim, not who says its words."],
        audioText:
          "Tutor: Let's hear your verdicts on the wetlands trip. Ravi? Ravi: Half the group grumbled about the three bus changes, but honestly the marine biologist made it worthwhile — I've switched my project topic because of her. Mei: They squeezed the whole day into four hours to keep costs down! My group barely finished sampling. Tutor: The savings were real, though. For the money we got more than our value — I'd repeat the booking as is.",
        question:
          "Which opinion does Mei own? (A the timetable was too tight · B the guest speaker added value · C the venue was hard to reach · D the budget was well spent · E the tasks needed clearer briefs)",
        acceptedAnswers: ["A", "a", "the timetable was too tight", "A — the timetable was too tight"],
        keywords: ["A", "timetable"],
        feedback: fb(
          "A — the timetable was too tight.",
          "Mei's 'squeezed the whole day into four hours' is a committed complaint about timing, and 'my group barely finished sampling' completes it. Her mention of costs is explanation rather than praise, so D stays with the tutor.",
          "D belongs to the tutor's 'more than our value', and the bus grumbling was reported by Ravi, so C is unowned bait.",
        ),
        tags: ["ielts", "matching"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "A rubric says 'you may use any letter more than once' and there are three letters for five questions. What changes in your method?",
        hints: ["What does striking assume about the letters?"],
        options: [
          { id: "a", text: "Nothing — strike every letter after its first use." },
          { id: "b", text: "Elimination stops working: no letter is ever struck, and one letter may legitimately serve several questions." },
          { id: "c", text: "You must use every letter equally often." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Elimination stops working: no letter is ever struck, and one letter may legitimately serve several questions.",
          "Re-allowed rubrics recycle letters, so striking would delete live candidates and manufacture stranded questions. Tracking multiple candidates to the end becomes the whole method instead of a fallback.",
          "Striking under a re-use rubric, option (a), destroys legal answers, and option (c) describes a quota no rubric has ever printed.",
        ),
        tags: ["ielts", "matching"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "In one word: what does a matching mark record — the mention of a claim or its ownership?",
        hints: [],
        question: "What does the mark record: mention or ownership?",
        acceptedAnswers: ["ownership", "ownership of the claim"],
        keywords: ["ownership"],
        feedback: fb(
          "Ownership — the person who commits to the claim.",
          "Mention can land in any sentence, including a report about somebody else's view; the mark follows commitment language such as agreement, refusal or a confirmed plan. This is the rule that separates matching marks from matching vocabulary.",
          "Mention-based matching is the exact habit the distractor design monetises, family after family.",
        ),
        tags: ["ielts", "matching"],
      }),
      ex({
        type: "match",
        difficulty: "medium",
        skill: "listening",
        prompt: "Match each recorded line to what it does to ownership.",
        hints: [],
        leftItems: [
          { id: "l1", text: "'I reckon the workshop was rushed.'" },
          { id: "l2", text: "'Ana thinks the workshop was rushed.'" },
          { id: "l3", text: "'Rushed? No — we just started late.'" },
        ],
        rightItems: [
          { id: "r1", text: "Speaker commits to the claim" },
          { id: "r2", text: "Speaker reports another person's claim" },
          { id: "r3", text: "Speaker rejects the claim" },
        ],
        pairs: [
          { leftId: "l1", rightId: "r1" },
          { leftId: "l2", rightId: "r2" },
          { leftId: "l3", rightId: "r3" },
        ],
        feedback: fb(
          "Line 1 commits, line 2 reports, line 3 rejects.",
          "The verb frames decide everything: 'I reckon' commits the speaker, 'Ana thinks' moves ownership to Ana, and the 'No' after the quoted word rejects the claim outright. Matching marks follow exactly these commitments, whichever letter carries the vocabulary.",
          "Treating all three lines as mentions of 'rushed' would attach one letter to three owners and lose the whole block.",
        ),
        tags: ["ielts", "matching"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "listening",
        prompt: "Complete the method rule.",
        hints: ["The field gets smaller."],
        sentence: "In a once-at-most set, every confirmed pairing is ___ from the option field for the remaining questions.",
        acceptedAnswers: ["struck", "removed", "eliminated"],
        feedback: fb(
          "Struck — removed from the field.",
          "Striking is what turns early certainty into late assistance: each confirmed letter narrows the choices for the questions still open, until the final question often decides between just two. Elimination compounds across the block like interest.",
          "Letters never return mid-block under a once-at-most rubric, so 'parked' and 'reusable' describe no mechanic the task offers.",
        ),
        tags: ["ielts", "matching"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the allocation, then answer.",
        hints: [],
        audioText:
          "Organiser: So, the fundraising stall — who's taking which job? Petra: I can do the flyers, but someone else will have to talk to shoppers. Leo: I'll handle the shoppers, if Petra takes the cash box. Petra: Ah — the cash box clashes with my lecture, so flyers it is, and Leo can add the cash box to the shoppers.",
        question: "Who ends up responsible for the cash box?",
        acceptedAnswers: ["Leo", "leo"],
        keywords: ["Leo"],
        feedback: fb(
          "Leo — he absorbs the cash box at the end.",
          "Petra declines the cash box because of her lecture and settles on flyers; Leo takes the shoppers and then, in the final agreed plan, adds the cash box as well. The last allocation the group confirms is the keyed one.",
          "Petra owned the cash box only briefly inside Leo's proposal, and the organiser never takes a task at all.",
        ),
        tags: ["ielts", "matching"],
      }),
    ],
    homework: [
      "Take a three-speaker discussion transcript: write five opinion options, key three of them, and mark where the two spare letters bait a mention.",
      "Run your block twice — once striking, once holding candidates — and note where a premature commitment would have cost a mark.",
    ],
  },
  {
    slug: "ielts-listening-maps-diagrams",
    title: "Map and diagram labelling in depth",
    description:
      "Tours of plans and processes: starting-point discipline, the direction-language inventory, relocating on the fly, and the format rule that decides between letters and words.",
    objectives: [
      "orient on any plan or diagram before movement language begins",
      "convert direction phrases such as opposite, adjacent and just past into positions in real time",
      "relocate yourself from landmark phrases when the tour outruns you",
      "respect the answer format: select a letter or write words exactly as dictated",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Map and diagram labelling turns the page itself into the question. A plan appears with numbered gaps, the recording walks you through the space, and every label is decided by where you are standing when a phrase lands. The same family labels process diagrams, where the walk happens in time instead of space. This lesson builds the orientation habit, the direction-language inventory, the walker's rotating frame, and the recovery move that saves a whole block after one lost step.",
        beforeYouStart: [
          "You can read a simple floor plan and its landmarks.",
          "You know that answers arrive in question order from the fundamentals chapter.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Map and diagram labelling in this lesson"],
        rows: [
          ["Section", "Listening — Part 2's guided tours; plans and process diagrams also surface in Part 3"],
          ["Task & question types", "Label a plan or diagram from a lettered list, or complete labels with words taken from the recording"],
          ["What is assessed", "Real-time position tracking: being at the right point of the picture when the evidence arrives"],
          ["Why this matters", "One lost step misplaces every later label, so recovery technique is worth several marks per block"],
        ],
      },
      {
        type: "text",
        text: "On screen the item is a picture — a building plan, a site map, a machine cross-section or a process strip — with gaps numbered to match the questions. Some sets print a lettered option list beside the plan, and you select a letter for each gap; others instruct you to complete the labels with words from the recording, spelled correctly and inside a word limit. The recording is a tour either way: one voice leads, movement phrase by movement phrase, and the numbered gaps are visited in the tour's order, never the page's.",
      },
      {
        type: "steps",
        title: "Solving method: map and diagram labelling",
        intro: "Orient, move, check in, recover — and answer in the printed format.",
        steps: [
          {
            title: "Find the start before the audio moves",
            text: "Every tour opens by placing you: an entrance, a reception desk, a car park, a first stage of a machine. During the introduction, find that point on the picture and rest your finger or cursor on it. Until you are standing somewhere, no direction phrase can be interpreted.",
            examples: [
              {
                english: "'Immediately to your left as you enter' is only usable once your finger sits on the entrance — find the entrance first.",
                note: "Orientation is the cheapest mark in the family.",
              },
            ],
          },
          {
            title: "Carry the direction inventory",
            text: "Tours move in a small vocabulary: opposite, adjacent to, next to, just past, immediately before, at the far end, behind, on your right. Read the inventory before test day so each phrase converts to a position without translation delay.",
            examples: [
              {
                english: "'Just past the lifts' means the second of two neighbours after the lifts — one gap further than 'beside the lifts'.",
                note: "Each phrase is an address, not a decoration.",
              },
            ],
          },
          {
            title: "Move with the walker's body",
            text: "Directions are spoken from the walker's point of view, and the walker turns. 'On your left' after a left turn faces a different wall than before it. Convert every turn as it happens rather than trusting the page's fixed north.",
            examples: [
              {
                english: "'Continue past the help desk, then turn right — the study rooms are directly ahead' — 'ahead' now runs along the new corridor, not the old one.",
                note: "Rotate the frame at every turn.",
              },
            ],
          },
          {
            title: "Check in at every numbered gap",
            text: "Each numbered gap is a checkpoint: when the tour reaches it, place the answer and confirm your position before the next movement phrase. If a gap passes unfilled, note it and keep moving — the next checkpoint is your rescue point, never the one behind you.",
            examples: [
              {
                english: "Gap 16 lost? Re-anchor at the tour's next landmark ('at the far end of the corridor') and resume; the lost gap gets a reasoned guess in the sweep.",
                note: "Checkpoints beat backtracking under the one-hearing rule.",
              },
            ],
          },
          {
            title: "Answer in the printed format",
            text: "Lettered sets want a letter, never the label's words; word-completion sets want the recording's exact words inside the limit. Mixing the two formats is a whole-block risk that costs nothing to avoid.",
            examples: [
              {
                english: "An option list reads A café B office C store; the answer is 'A', and typing 'café' into a lettered gap wastes the mark you just earned.",
                note: "The format rule is read from the task box.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — a library plan",
        context:
          "Plan: main entrance at the bottom; help desk straight ahead; lifts to the right of the desk; corridor beyond. Gaps 15–17 are three rooms. Option list: A quiet zone B periodicals C media suite D training room E café. Select one letter per gap; two letters will not be used.",
        lines: [
          { speaker: "Guide", text: "We'll start at the main entrance. Straight ahead is the help desk, and immediately to your left as you come in is the café — handy for the morning crowd." },
          { speaker: "Guide", text: "From the desk, follow the corridor past the lifts. Just past them, on the right, is our media suite — headphones and screens for the film courses." },
          { speaker: "Guide", text: "Keep going to the far end. The last door on the left is the training room, and directly opposite that is where we keep the periodicals." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. Step one places you at the main entrance during the introduction — the finger starts there, and 'immediately to your left as you come in' hands you the café as a free orientation fix, establishing left and right for the walk (letter E can already be struck from gap 15's candidates). Gap 15: the movement chain is 'past the lifts, just past them, on the right', and the phrase 'just past' does real work — 'beside the lifts' would be a different room — so gap 15 takes the media suite, letter C. Gap 16: 'to the far end, last door on the left' places the training room, letter D. Gap 17: 'directly opposite' relocates you across the corridor from where you now stand, and the periodicals take letter B. Every answer was a position first and a name second, which is why hunting room names on the plan fails while tracking movement succeeds; A, the quiet zone, never left the option box at all.",
      },
      {
        type: "example",
        title: "Tour marks won and lost",
        items: [
          {
            english: "A candidate hears 'opposite the café' and writes the café's own number into the gap; opposite is a different room with its own number.",
            note: "Direction words are answers, not flavour.",
            domain: "travel",
          },
          {
            english: "'Adjacent to the loading bay' is read as 'somewhere near it'; adjacent means sharing a boundary, and the gap wants that exact neighbour.",
            note: "Precision phrases deserve precise conversions.",
            domain: "work",
          },
          {
            english: "A process diagram of a printing press: the gap after the drying stage is fed by 'once the sheets are dry, they pass into the folding unit' — the arrow, not the noun, told you the answer.",
            note: "Arrows are the diagram's direction words.",
            domain: "work",
          },
          {
            english: "The tour says 'before you reach the fountain, you'll pass the greenhouse'; a candidate logs the greenhouse after the fountain and reverses two gaps.",
            note: "'Before you reach' is an order instruction.",
            domain: "travel",
          },
          {
            english: "A lettered set is answered with typed room names, and the whole block has to be reformatted in the final minutes at panic speed.",
            note: "Check the task box's format line first.",
            domain: "exam",
          },
          {
            english: "Losing the tour at gap 16, a candidate stops to re-read the plan while the guide finishes the building; two more gaps pass unheard.",
            note: "Re-anchor forward at the next landmark, never backward.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Tour traps corrected",
        items: [
          {
            wrong: "I find each answer by waiting for the room's name.",
            right: "Track the guide's movement and let names confirm positions you have already reached.",
            reason: "Names usually arrive after the position phrase, so name-hunting guarantees you are standing in the wrong place with the right word.",
          },
          {
            wrong: "'On your left' works like a compass reading fixed to the page.",
            right: "Directions rotate with the walker; re-orient at every turn the guide announces.",
            reason: "The recording's frame is the walker's body, and after a turn 'left' points where the page's north never did.",
          },
          {
            wrong: "If I lose my place, I retrace the tour from the beginning.",
            right: "Re-anchor at the next landmark phrase and keep moving forward with the tour.",
            reason: "Backtracking burns the remaining gaps; the next landmark is designed to be findable from anywhere on the plan.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Study the picture during the introduction: entrance, landmarks, the numbered gaps' order, and the letter-or-words format."],
          ["While the clock runs", "Move your cursor on every direction phrase; convert turns immediately; tick each gap as its checkpoint passes."],
          ["If you are stuck", "Jump to the next landmark phrase ('at the far end', 'as you come out'), re-anchor there, and finish the block forward."],
          ["Final minutes", "Every gap holds a letter or a limited word count — verify the format and sweep for empties."],
        ],
      },
      {
        type: "summary",
        points: [
          "Maps and diagrams are tracking tasks: the answer is a position, and the name merely confirms it.",
          "Orient at the tour's opening sentence; until you stand somewhere, direction phrases cannot be decoded.",
          "The direction inventory (opposite, adjacent, just past, at the far end) converts phrases into addresses.",
          "Rotate with the walker at every turn; the page has no north that matters.",
          "When lost, re-anchor at the next landmark and move forward — backtracking costs the whole block.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Recall questions from the lessons already covered.",
        items: [
          {
            question: "What decides the format of a map-labelling answer?",
            options: ["The task box: letters or exact words", "Your preference", "The guide's wording"],
            correctIndex: 0,
            explanation: "The printed instruction says whether to select letters or write words inside a limit, and the marking follows it strictly.",
            from: "Question instructions and answer limits",
          },
          {
            question: "In multiple choice, an option that recycles the recording's exact phrasing is usually…",
            options: ["The answer", "A distractor", "The rubric"],
            correctIndex: 1,
            explanation: "Answers rephrase while distractors quote, a rule that carries into every objective family.",
            from: "Multiple choice in depth",
          },
          {
            question: "How is evidence for the numbered gaps distributed as the recording plays?",
            options: ["In question order, along the tour", "In random order", "From the far end backwards"],
            correctIndex: 0,
            explanation: "The tour visits the numbered gaps in sequence, so your checkpoints arrive in the same order as the questions.",
            from: "Understanding the Listening test",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the tour extract, then answer.",
        hints: ["Follow the movement chain, not the room names."],
        audioText:
          "Guide: From the main entrance, the help desk is straight ahead. Immediately to your left as you come in is the café. Follow the corridor past the lifts — just past them, on the right, is the media suite.",
        question: "Which room is JUST past the lifts on the right?",
        acceptedAnswers: ["the media suite", "media suite", "C"],
        keywords: ["media suite"],
        feedback: fb(
          "The media suite (letter C).",
          "The movement chain runs entrance, past the lifts, then just past them on the right; 'just past' excludes the room beside the lifts and settles the position before the name even arrives. The checkpoint habit places you at the right door as the phrase lands.",
          "The café is the orientation gift on the left at the entrance, and the help desk sits straight ahead — both are designed neighbours, not answers.",
        ),
        tags: ["ielts", "maps"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "The guide says: 'Keep going to the far end of the corridor. The last door on the left is the training room, and directly opposite is the periodicals section.' Gap 17 is the room directly opposite the training room. What is the answer?",
        hints: ["The name is the anchor; the phrase moves you."],
        options: [
          { id: "a", text: "The training room — it is named in the sentence." },
          { id: "b", text: "The periodicals section — 'directly opposite' relocates you across the corridor from the named room." },
          { id: "c", text: "Both rooms share the gap." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The periodicals section — 'directly opposite' relocates you across the corridor from the named room.",
          "The named room is the anchor, and the direction phrase sends you across it; the gap belongs to where you land after the phrase, which is the periodicals section. Position language, not the louder noun, carries the mark.",
          "Option (a) takes the named room instead of the relocated one, and option (c) invents a shared answer the task never allows.",
        ),
        tags: ["ielts", "maps"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "In one phrase: from whose point of view are 'left' and 'right' given on a tour?",
        hints: [],
        question: "Left and right on a guided tour are spoken from whose viewpoint?",
        acceptedAnswers: ["the walker's", "the speaker's", "the guide's"],
        keywords: ["walker", "speaker", "guide"],
        feedback: fb(
          "The walker's (the guide's) viewpoint.",
          "Directions rotate with the guide's body at each turn, so a fixed reading from the page misplaces every label after the first corner. Translating turns live keeps your finger where the audio stands.",
          "The page's compass is fixed while the spoken frame turns — trusting page-north is the family's oldest error.",
        ),
        tags: ["ielts", "maps"],
      }),
      ex({
        type: "multi-select",
        difficulty: "easy",
        skill: "listening",
        prompt: "Select every phrase that relocates you to a new position.",
        hints: ["One of the four names a thing rather than moving you."],
        options: [
          { id: "a", text: "at the far end of" },
          { id: "b", text: "adjacent to" },
          { id: "c", text: "just past" },
          { id: "d", text: "corridor" },
        ],
        correctOptionIds: ["a", "b", "c"],
        feedback: fb(
          "'At the far end of', 'adjacent to' and 'just past' all move you.",
          "Each of the three prepositional phrases converts to a fresh position on the plan, which is the real test the family runs. Movement language is verbal — phrases that relocate the walker — while nouns merely name places.",
          "Counting 'corridor' as a mover clutters the tracking chain with a label that relocates nobody.",
        ),
        tags: ["ielts", "maps"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the process description, then answer.",
        hints: [],
        audioText:
          "Instructor: This is the seed-cleaning machine. The raw hopper is where everything starts. From there, the seeds drop into the tumbler, and once they're clean, they travel up into the sorting drum. Whatever the drum rejects falls into the waste chute at the back.",
        question: "Diagram gap: which unit do the seeds enter immediately AFTER the tumbler?",
        acceptedAnswers: ["the sorting drum", "sorting drum"],
        keywords: ["sorting drum"],
        feedback: fb(
          "The sorting drum.",
          "The process runs hopper, then tumbler, then sorting drum, with the waste chute collecting rejects; the words 'once they're clean' close the tumbler stage before the next one opens. Arrows and sequencing words do in time exactly what direction phrases do in space.",
          "The raw hopper starts the process and the waste chute collects rejects, so both sit at the sequence's edges rather than after the tumbler.",
        ),
        tags: ["ielts", "maps"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "listening",
        prompt: "Complete the recovery rule.",
        hints: ["Something visible and spoken — the tour keeps producing them."],
        sentence: "When a tour outruns you, re-anchor at the next ___ and continue forward, never backward.",
        acceptedAnswers: ["landmark", "checkpoint", "landmark phrase"],
        feedback: fb(
          "Landmark (checkpoint).",
          "A spoken landmark such as 'at the far end' or 'as you come out' is findable from anywhere on the plan, which is exactly why tours keep producing them. Anchoring forward preserves every remaining gap that backtracking would burn.",
          "Backward re-listening is impossible under the one-hearing rule and costs the gaps you could still serve.",
        ),
        tags: ["ielts", "maps"],
      }),
    ],
    homework: [
      "Sketch your home or workplace as a five-room plan; script a 45-second tour using five different direction phrases, and have a friend read it once while you label.",
      "Mark on your script the exact phrase that decided each label, then note which labels could have been reached by two different phrases.",
    ],
  },
  {
    slug: "ielts-listening-form-completion",
    title: "Form completion in depth",
    description:
      "The Part 1 workhorse: personal and practical data inside a printed form — labels as a prediction machine, dictated spellings, the write-as-you-hear number habit, and the limit that governs dates and prices.",
    objectives: [
      "read a form's labels as a prediction machine for content type before the audio",
      "capture names, postcodes and reference numbers as they are dictated, character by character",
      "apply the ONE WORD AND/OR A NUMBER limit to dates, prices and mixed answers",
      "log numbers the moment they are spoken instead of trusting memory",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Form completion is the Part 1 signature: a printed form — a booking, an enrolment, a repair request — with gaps that want personal and practical data. Names are spelled out, addresses arrive street by street, prices come wrapped in correction chains, and dates test whether you can compress 'the third of June' into a legal answer. The form itself is your best friend here: every label announces its gap's content type before a single word is spoken, and this lesson teaches you to read it that way.",
        beforeYouStart: [
          "You can catch letter-by-letter dictation at conversational speed.",
          "You know the word-limit counting rules from the instructions lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Form completion in this lesson"],
        rows: [
          ["Section", "Listening — Part 1's dominant family; enrolment and booking forms also appear in Part 2 talks"],
          ["Task & question types", "Complete a form's gaps with names, addresses, phone numbers, dates, prices and reference numbers inside a word limit"],
          ["What is assessed", "Data capture at dictation speed: exact words, exact figures, exact spellings, inside the printed limit"],
          ["Why this matters", "Part 1 plays the friendliest audio of the day, so marks lost here are almost always format and capture losses"],
        ],
      },
      {
        type: "text",
        text: "A form is a grid of labelled boxes, and each label is a prediction. 'First name' promises a dictated spelling; 'Postcode' promises a letters-and-digits string; 'Total cost' promises a figure beside a currency symbol the form probably already prints; 'Date of arrival' promises a day that must fit the limit. Before the audio begins, walk the labels and mark each gap's expected content type — noun, number, mixed string, weekday. This thirty-second read converts the whole part from transcription into verification, and it flags every gap whose answer will need compression under the limit before that pressure arrives live.",
      },
      {
        type: "steps",
        title: "Solving method: form completion",
        intro: "Predict from the layout, capture as dictated, compress to the limit.",
        steps: [
          {
            title: "Walk the labels, predict the type",
            text: "Read every label in order and note what its gap wants: a name, a figure, a date, a weekday, a mixed reference. Prediction turns the audio into a confirmation exercise and warns you which gaps will need the limit's compression.",
            examples: [
              {
                english: "'Membership type: ____' wants one of a few familiar nouns — student, family, senior — and the label has already narrowed the field.",
                note: "Labels are the item's own answer key.",
              },
            ],
          },
          {
            title: "Note what the form already prints",
            text: "Currency symbols, units and the words around a gap belong to the form, not to your answer. If a dollar sign stands before the gap, the answer is the figure alone; repeating the unit spends words the limit may not refund.",
            examples: [
              {
                english: "A gap printed as 'Fee: $____' takes '85', while '85 dollars' spends a word that ONE WORD AND/OR A NUMBER does not allow.",
                note: "Printed context is not part of your answer.",
              },
            ],
          },
          {
            title: "Write as you hear — numbers immediately",
            text: "Type digits the instant they are spoken and leave them on screen; working memory rearranges digit strings within seconds, and 'oh' in phone numbers is a zero. Names go down letter by letter as dictated, in the dictated spelling, even when your instincts protest.",
            examples: [
              {
                english: "'Reference J-four-one-nine-Q' is captured live as J419Q; reconstructing it afterwards from memory invites transposition.",
                note: "Capture is now; reconstruction is never.",
              },
            ],
          },
          {
            title: "Follow the correction chain to the final value",
            text: "Part 1 speakers restate dates, totals and times while they negotiate. The keyed value is the last one both parties accept, so let the chain run and overwrite your entry as each correction lands.",
            examples: [
              {
                english: "'Say ten past five — actually four thirty's better for us' ends with both parties on four thirty: that is the entry.",
                note: "Final agreement is the answer, not the first offer.",
              },
            ],
          },
          {
            title: "Compress to the limit before you move on",
            text: "'The third of June' becomes '3 June' under ONE WORD AND/OR A NUMBER — one number plus one word. Compress while the sentence is fresh, and re-count every gap's words in the check window.",
            examples: [
              {
                english: "'Nine fifty per session' against a printed currency gap takes '9.50'; the words 'per session' are the form's job, not yours.",
                note: "The limit is arithmetic, not judgement.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — a community gym enrolment (Part 1 style)",
        context:
          "Form — Surname: ____ · Street: ____ · Postcode: ____ · Monthly fee: $____ · Start date: ____ . Limit: ONE WORD AND/OR A NUMBER in each gap.",
        lines: [
          { speaker: "Clerk", text: "A surname to start — and I'll need it spelt exactly." },
          { speaker: "Caller", text: "Whitfield — W-H-I-T, then field. Number eight Alder Street, opposite the bakery, postcode LS7 2PQ." },
          { speaker: "Clerk", text: "The off-peak plan is forty-two a month — no, sorry, forty-two fifty since April." },
          { speaker: "Caller", text: "Still fine. Start me on the third of June, and use my work number for emergencies." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. The labels predicted five content types before the audio moved: a spelled surname, a street with a number, an alphanumeric postcode, a figure and a date. Surname: dictated letter by letter in two chunks, captured as spoken — Whitfield. Street: 'number eight Alder Street' compresses to '8 Alder', which is exactly one number plus one word; the bakery is there to help you hear, not to be typed. Postcode: 'LS7 2PQ' goes down live as a mixed string, characters in spoken order. Monthly fee: the clerk corrects himself mid-sentence, and the chain ends on the spring-update figure, 42.50, with the printed dollar sign meaning the answer is digits alone. Start date: spoken as 'the third of June' and compressed to '3 June' — the article and the 'of' are words the limit refuses. Five gaps, five different capture disciplines, one thirty-second prediction pass that made them all verifications.",
      },
      {
        type: "example",
        title: "Form marks won and lost",
        items: [
          {
            english: "A caller says 'double four, oh two' in a phone number; the candidate types 44O2 with a letter O because the sound suggested it.",
            note: "'Oh' is always a zero in digit strings.",
            domain: "everyday",
          },
          {
            english: "'Fifteen per class' against a gap printed with a currency symbol is answered as '15 pounds' — the printed sign already carries the currency, and the extra word breaks the limit.",
            note: "The form supplies units; you supply the figure.",
            domain: "exam",
          },
          {
            english: "A date dictated as 'the twenty-first of November' is typed whole, and the keyed form '21 November' is what the limit actually rewards.",
            note: "Convert dates in the window, not from memory later.",
            domain: "exam",
          },
          {
            english: "A reference number arrives as 'B-T-zero-oh-9'; the candidate who writes it live, characters in spoken order, beats the one who reconstructs it afterwards and transposes the zero.",
            note: "Live capture beats reconstruction every time.",
            domain: "work",
          },
          {
            english: "An offer of 'sixty a term, reduced to forty-five if you book today' is captured as 60 because the first figure was typed and never overwritten.",
            note: "Correction chains end on the accepted value.",
            domain: "everyday",
          },
          {
            english: "'Alder' is dictated with a pause — 'A-L-D… then E-R' — and the candidate's fingers wait for the whole word; by the pause's end, two letters have already evaporated.",
            note: "Dictation waits for nobody.",
            domain: "study",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Form traps corrected",
        items: [
          {
            wrong: "I hold numbers in my head and type them in the check window.",
            right: "Type each number the moment it is spoken and correct forward if the chain continues.",
            reason: "Working memory rearranges digit strings within seconds, and the check window has no audio left to repair them from.",
          },
          {
            wrong: "The form's printed symbols and units need repeating in my answer for safety.",
            right: "Answer with the value alone; the form carries its own units.",
            reason: "Repeated units add words the limit counts, turning a correct figure into an over-limit zero.",
          },
          {
            wrong: "Names are spelled out for people who can't hear; I'll write the word I recognise.",
            right: "Write the dictated letters in the dictated order, whatever your instincts say.",
            reason: "The spelling is the answer — an instinctively respelt name is a different word to the marker.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Walk every label during the introduction; mark each gap's content type and note the printed units and the limit."],
          ["While the clock runs", "Capture dictated material live; overwrite figures as corrections land; compress dates to the limit as you go."],
          ["If you are stuck", "A missed letter chain is gone — leave the gap, track the next label, and let the sweep place a reasoned guess."],
          ["Final minutes", "Re-count every gap against the limit, re-type currency and date formats, and check double letters in dictated names."],
        ],
      },
      {
        type: "summary",
        points: [
          "A form's labels are a prediction machine: each one announces its gap's content type.",
          "Printed units and symbols stay on the form; your answer supplies the missing value only.",
          "Capture dictated names and numbers live — memory rearranges them within seconds.",
          "Correction chains end on the last accepted value, so overwrite as you go.",
          "'The third of June' is '3 June' under ONE WORD AND/OR A NUMBER — the limit is arithmetic.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks on earlier teaching.",
        items: [
          {
            question: "Which limit governs most form gaps in Part 1?",
            options: ["ONE WORD AND/OR A NUMBER", "NO MORE THAN FIVE WORDS", "No limit at all"],
            correctIndex: 0,
            explanation: "One word plus at most one number is the standard form limit, and it decides how dates and prices must be compressed.",
            from: "Question instructions and answer limits",
          },
          {
            question: "What does the spoken 'oh' inside a phone number stand for?",
            options: ["The letter O", "Zero", "A pause"],
            correctIndex: 1,
            explanation: "Spoken 'oh' in digit strings is a zero, and typing the letter instead corrupts the whole captured number.",
            from: "Numbers and dates",
          },
          {
            question: "A clerk says 'forty — sorry, forty-five'. Which figure is keyed?",
            options: ["Forty", "Forty-five", "Either"],
            correctIndex: 1,
            explanation: "The accepted value after the correction carries the mark, exactly as negotiation chains end on the final agreement.",
            from: "Identifying distractors",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the enrolment exchange, then complete the gap.",
        hints: ["Follow the correction chain to the last accepted value."],
        audioText:
          "Clerk: The off-peak plan is forty-two a month — no, sorry, forty-two fifty since April. Caller: Still fine. Start me on the third of June, and use my work number for emergencies.",
        question: "Monthly fee (digits only, e.g. 42.50):",
        acceptedAnswers: ["42.50", "4250", "forty-two fifty"],
        keywords: ["42.50", "4250"],
        feedback: fb(
          "42.50 — the corrected figure.",
          "The clerk quotes forty-two, marks it wrong himself, and replaces it with forty-two fifty; the chain ends there, and the spring-update price is the keyed fee. The first figure is the suggest value the item is built around, not the answer.",
          "42 stops at the superseded quote, and the June date belongs to a different gap on the same form.",
        ),
        tags: ["ielts", "forms"],
      }),
      ex({
        type: "dictation",
        difficulty: "medium",
        skill: "listening",
        prompt: "Type the surname exactly as dictated.",
        hints: ["Type letter by letter as they arrive, in two chunks."],
        audioText: "Clerk: A surname to start — and I'll need it spelt exactly. Caller: Whitfield — W-H-I-T, then field.",
        acceptedAnswers: ["Whitfield"],
        feedback: fb(
          "Whitfield",
          "The dictation arrives in two chunks — W-H-I-T, then 'field' — and the answer joins them exactly as spoken. Letters captured live and in order are the whole task; recognising the word's familiar shape is a bonus, never the method.",
          "Whitfield with a missing h or an extra t is a different word to the marker, however well the name was heard.",
        ),
        tags: ["ielts", "forms"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "listening",
        prompt: "Complete the limit rule.",
        hints: [],
        sentence:
          "Spoken as 'the third of June', the legal written answer under ONE WORD AND/OR A NUMBER is '3 June' — the figure plus one word, with 'the' and 'of' ___.",
        acceptedAnswers: ["dropped", "removed", "deleted", "left out"],
        feedback: fb(
          "Dropped — 'the' and 'of' are words the limit counts.",
          "The dictated phrasing carries two function words that the limit refuses; compression to figure plus month is what makes a heard date into a scored date. This is the cheapest mark conversion in the whole part.",
          "Writing the date exactly as spoken converts a perfect capture into an over-limit zero.",
        ),
        tags: ["ielts", "forms"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the caller's details, then complete the gap.",
        hints: [],
        audioText:
          "Caller: Whitfield — W-H-I-T, then field. Number eight Alder Street, opposite the bakery, postcode LS7 2PQ.",
        question: "Postcode (exactly as dictated):",
        acceptedAnswers: ["LS7 2PQ", "LS72PQ", "ls7 2pq"],
        keywords: ["LS7", "2PQ"],
        feedback: fb(
          "LS7 2PQ",
          "The postcode arrives as a single dictated string of letters and digits, and the legal capture is exactly that string in spoken order. Case and spacing rarely decide marks, but reordering the characters decides every one of them.",
          "Number eight belongs to the street gap, and the bakery is a landmark to help you hear, not part of any keyed field.",
        ),
        tags: ["ielts", "forms"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: what does a printed currency symbol before a gap tell you about your answer?",
        hints: [],
        question: "A gap printed '$____' wants your answer to contain what?",
        acceptedAnswers: ["the figure only", "the number only", "just the number", "the figure alone"],
        keywords: ["figure", "number"],
        feedback: fb(
          "The figure only — the form carries the currency.",
          "Symbols printed on the form do the unit's work, so your answer supplies digits alone; adding the currency's name spends a word the limit refuses to refund. The form is a teammate, not a blank page.",
          "'The currency and the figure' is the over-limit habit the printed symbol exists to prevent.",
        ),
        tags: ["ielts", "forms"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "A clerk says: 'Sixty a term — though if you enrol this week it comes down to forty-five.' The form gap reads 'Fee: $____ per term'. What is keyed?",
        hints: ["Chains end on the last accepted value."],
        options: [
          { id: "a", text: "60 — the first stated price" },
          { id: "b", text: "45 — the enrolment-week price is the final value in the chain" },
          { id: "c", text: "60–45 — the range the clerk mentioned" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "45 — the enrolment-week price is the final value in the chain",
          "The clerk revises the figure forward and the chain closes on forty-five; the keyed fee is the accepted final value, and the first price is the suggestion the correction exists to replace. The printed dollar sign means digits alone.",
          "Option (a) freezes the superseded figure, and option (c) invents a range format no form key has ever used.",
        ),
        tags: ["ielts", "forms"],
      }),
    ],
    homework: [
      "Build a six-gap enrolment form from any practice transcript: label each gap with its predicted content type before listening once.",
      "After one hearing, audit only formats — digits, symbols, date compression and double letters — and count how many marks the mechanical pass rescued.",
    ],
  },
  {
    slug: "ielts-listening-note-completion",
    title: "Note completion in depth",
    description:
      "The Part 4 workhorse: gapped notes with headings and bullets, where headings are topic locators, grammar predicts the missing part of speech, and the talk walks your notes in order.",
    objectives: [
      "use a note's headings as signposts that locate each gap inside the talk",
      "predict each gap's part of speech from the note's compressed grammar",
      "hold the exact word through academic vocabulary density and light paraphrase",
      "keep pace when a gap resolves late without abandoning the following bullets",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Note completion takes a lecture's skeleton — headings in capitals, bullets underneath, gaps inside the bullets — and asks you to regrow the missing bones while a single academic voice talks for several minutes. The notes are your map: their headings march in the recording's order, their grammar narrows each gap to a part of speech, and their bullets compress whole sentences into the few words the audio will expand. Master the layout and the hardest audio in the section becomes a guided tour of your own page.",
        beforeYouStart: [
          "You can read a page of headed notes and hold its structure for a minute.",
          "You know the word-limit counting rules, especially ONE WORD ONLY.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Note completion in this lesson"],
        rows: [
          ["Section", "Listening — Part 4's signature family; gapped notes also appear in Part 3 briefings"],
          ["Task & question types", "Complete the notes with words from the recording, usually ONE WORD ONLY per gap"],
          ["What is assessed", "Locating by heading, predicting by grammar, and capturing exact single words from dense academic speech"],
          ["Why this matters", "Part 4 plays the section's hardest audio, and the notes' structure is the only scaffolding the task gives you"],
        ],
      },
      {
        type: "text",
        text: "A set of notes is the lecture boiled down: a heading like 'HISTORY OF THE TRADE' collects the sentences about origins, and its bullets each hold one fact with a gap where the fact's key word belongs. The talk almost never says the heading's word — 'History' arrives as 'to understand how this began' — so you locate by paraphrased heading, never by waiting for the printed one. Inside a bullet, the grammar around the gap does the prediction: 'increasingly ____' wants an adjective or adverb; 'the ____ of sediment' wants a noun; a gap straight after a preposition refuses every verb it is offered. Bullets are compressed sentences, and compressed sentences wear their grammar on the outside.",
      },
      {
        type: "steps",
        title: "Solving method: note completion",
        intro: "Headings locate, grammar predicts, exactness scores.",
        steps: [
          {
            title: "Read the headings as the talk's itinerary",
            text: "During the introduction, read the headings top to bottom: they are the lecture's table of contents, and the audio will visit them in printed order. Knowing you are inside heading two of four tells you which gaps are live and which are still ahead.",
            examples: [
              {
                english: "Headings 'ORIGINS / METHODS / FINDINGS / CRITICISMS' promise a four-stop talk; when the speaker says 'but how did we test this', you are crossing from ORIGINS to METHODS.",
                note: "Headings are scheduled stops, not decoration.",
              },
            ],
          },
          {
            title: "Predict each gap's part of speech from its bullet",
            text: "Read the bullet as a sentence and ask what its gap's slot needs: noun after 'the', verb after a subject, adjective before a noun, figure after a quantity word. Mark your prediction with a tiny code letter beside the gap.",
            examples: [
              {
                english: "'Costs rose because of the ____ in raw materials' — the gap follows 'the' and 'of', so a noun is coming, probably one the audio will stress.",
                note: "Grammar-fit prediction is free accuracy.",
              },
            ],
          },
          {
            title: "Locate by heading, not by waiting for its word",
            text: "The talk paraphrases every heading, so trigger on meaning: when the speaker moves from background to method, you have arrived at the METHODS heading whatever words carried you there. Chasing the printed heading word leaves you a sentence behind the first gap.",
            examples: [
              {
                english: "Heading 'FINDINGS'; the audio 'and what did we actually see? Well…' — the question announces the results better than the word 'findings' ever would.",
                note: "Meet the heading's meaning, not its spelling.",
              },
            ],
          },
          {
            title: "Capture the exact word in the bullet's grammar",
            text: "When the answer arrives, write the recording's word adjusted to the bullet's slot: singular or plural as the note demands, and never a synonym chosen for a more academic ring. If your prediction said noun and a verb arrives, you have caught the wrong word — recheck the surrounding sentence.",
            examples: [
              {
                english: "The bullet 'the rats' ____ improved' wants a noun; the audio 'their navigation got sharper' yields 'navigation', not 'got sharper'.",
                note: "The note's grammar is the answer's frame.",
              },
            ],
          },
          {
            title: "Move with the talk; never camp on a gap",
            text: "Gaps resolve in note order, and the talk does not pause for anyone. If a gap fights you, leave it visibly open and move to the next bullet — the heading structure brings the audio back within a sentence or two, and the check window can repair spelling but not absence.",
            examples: [
              {
                english: "Gap 34 unresolved while the speaker announces 'Turning to the funding…' — camp there and gaps 35–36 die with it.",
                note: "One sacrificed gap beats three.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — a talk excerpt on urban bees",
        context:
          "Notes — WHY CITY BEES STRUGGLE: Loss of ____ (gap 33) · Pesticides sprayed on ____ (gap 34). FINDINGS: Bee numbers fell by ____ (gap 35). Limit: ONE WORD ONLY for each gap.",
        lines: [
          { speaker: "Lecturer", text: "So why do bees struggle in cities at all? The first culprit is habitat — as gardens are paved over, the flowers they fed on simply vanish." },
          { speaker: "Lecturer", text: "Second, the chemicals: councils spray herbicides on roadside verges, the very strips of green bees depend on between buildings." },
          { speaker: "Lecturer", text: "When we counted across twelve parks, the populations had dropped by a quarter in only five years." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. Step one read the headings as two stops: causes, then findings. Step two coded the gaps before the lecturer spoke — gap 33 wants a noun after 'Loss of'; gap 34 wants a place noun after 'on'; gap 35 wants a figure or fraction after 'by'. Gap 33: the audio says 'the first culprit is habitat' and explains it with paving and vanishing flowers; the noun in the frame is 'habitat', and 'flowers' is the bait for anyone keying the last noun heard. Gap 34: the note's printed word 'Pesticides' already covers 'herbicides', so the chemical is handled — the gap after 'sprayed on' wants the place being sprayed, which is 'verges'. Gap 35: 'dropped by a quarter' supplies the fraction, while 'twelve parks' and 'five years' are the setting's quantity traps. Three gaps, three parts of speech, every one predicted before a word of audio.",
      },
      {
        type: "example",
        title: "Note marks won and lost",
        items: [
          {
            english: "A gap after 'the ____ of the study' is answered with 'thorough' — an adjective in a noun slot, and a grammar tell that the real noun, 'scope', had been spoken a sentence earlier.",
            note: "Part-of-speech mismatches grade themselves.",
            domain: "study",
          },
          {
            english: "The printed heading says 'HISTORY'; a candidate waits for the word 'history' while the speaker says 'to see where this all started' and moves on — the first gap is already behind them.",
            note: "Headings are paraphrased by design.",
            domain: "exam",
          },
          {
            english: "The audio says 'pollination rates doubled in cities'; the note reads 'Pollination doubled in ____ areas', so the keyed word is 'urban', captured by crossing the paraphrase bridge.",
            note: "The note's grammar reaches across the bridge for its word.",
            domain: "study",
          },
          {
            english: "Under ONE WORD ONLY, a candidate writes 'local parks' for a gap and loses it to 'parks'; the limit refuses the second word however correct both sound.",
            note: "ONE WORD ONLY means exactly one.",
            domain: "exam",
          },
          {
            english: "A lecturer says 'we'll return to funding later' and a candidate stops at the funding gap, filling nothing while two live gaps pass; the promise was structure, not an answer.",
            note: "Promises are headings, not content.",
            domain: "work",
          },
          {
            english: "The answer 'migration' is heard clearly but typed 'immigration'; in the check window, the bullet's verb 'leave each spring' confirms which noun the note wanted.",
            note: "The window can repair hearing-adjacent slips.",
            domain: "study",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Note traps corrected",
        items: [
          {
            wrong: "I wait for the heading's exact word to start filling its gaps.",
            right: "Trigger on the heading's meaning and the talk's structural turns; the printed word rarely appears.",
            reason: "Headings are paraphrased on purpose, so word-waiting starts every gap a sentence late and ends it a mark short.",
          },
          {
            wrong: "Any word from the relevant sentence can fill the gap.",
            right: "Only the word that fits the bullet's grammar and the limit scores.",
            reason: "Notes compress sentences, so the slot's part of speech is the filter that separates the key word from its louder neighbours.",
          },
          {
            wrong: "If a gap won't resolve, I pause there until it does.",
            right: "Leave the gap open and move with the talk; the next heading brings structure back within reach.",
            reason: "A single academic voice never pauses for you, and camping on one gap surrenders every bullet that follows it.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read headings top to bottom as an itinerary; code each gap's part of speech and confirm the limit, usually ONE WORD ONLY."],
          ["While the clock runs", "Locate by heading meaning; capture the exact word in the bullet's grammar; move the instant the talk moves."],
          ["If you are stuck", "Leave the fighting gap open and track the next bullet — structure, not memory, brings the audio back to you."],
          ["Final minutes", "Audit plurals, single-word limits and near-miss nouns such as 'migration' against 'immigration' across the whole set."],
        ],
      },
      {
        type: "summary",
        points: [
          "Notes are the lecture's skeleton: headings are stops, bullets are compressed sentences, gaps are their missing key words.",
          "Predict every gap's part of speech from the surrounding bullet before the audio starts.",
          "Locate by heading meaning, not by hunting the printed heading word.",
          "Capture the recording's exact word fitted to the note's grammar and the ONE WORD ONLY limit.",
          "Never camp on a stubborn gap — the talk walks your notes in order with or without you.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the masterclass so far.",
        items: [
          {
            question: "What typically limits Part 4 note gaps?",
            options: ["ONE WORD ONLY", "NO MORE THAN FIVE WORDS", "No limit at all"],
            correctIndex: 0,
            explanation: "Single-word limits are the Part 4 standard, which is why part-of-speech prediction carries so much weight there.",
            from: "Question instructions and answer limits",
          },
          {
            question: "In what order does the talk visit your notes?",
            options: ["Note order, following the printed headings", "Random order", "Reverse order"],
            correctIndex: 0,
            explanation: "The lecture walks the notes in printed order, so your position on the page mirrors your position in the audio.",
            from: "Understanding the Listening test",
          },
          {
            question: "A bullet reads 'the ____ of sediment' after a preposition. What does the gap want?",
            options: ["A noun", "A verb", "An adverb"],
            correctIndex: 0,
            explanation: "Prepositions take noun phrases, and the article confirms it — grammar-fit prediction narrows the ear before the audio arrives.",
            from: "Predicting answers",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the lecture extract, then complete the note.",
        hints: ["The printed word 'Pesticides' covers the chemical — what is left to capture?"],
        audioText:
          "Lecturer: Second, the chemicals: councils spray herbicides on roadside verges, the very strips of green bees depend on between buildings.",
        question: "Notes gap (ONE WORD ONLY): Pesticides sprayed on ____",
        acceptedAnswers: ["verges", "roadside verges"],
        keywords: ["verges"],
        feedback: fb(
          "Verges (roadside verges).",
          "The note's printed word 'Pesticides' paraphrases 'herbicides', so the chemical is already handled; the gap after 'on' wants the place being sprayed, which is the verges. Grammar prediction — a place noun after 'on' — beats the louder chemical vocabulary.",
          "Herbicides belongs to the printed half of the bullet, and 'strips of green' is the paraphrase that explains the verges rather than naming a second place.",
        ),
        tags: ["ielts", "notes"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "listening",
        prompt: "Complete the grammar prediction.",
        hints: ["What kind of word follows 'fell by' in natural English?"],
        sentence: "In the bullet 'Bee numbers fell by ____', the gap after 'by' predicts a ____ .",
        acceptedAnswers: ["figure", "number", "quantity", "fraction"],
        feedback: fb(
          "A figure (or fraction).",
          "'Fell by' introduces a measurement of change, so the ear should hunt quantities — a percentage, a fraction, a count — and treat named places and years as background rather than candidates. The prediction is what keeps the setting's numbers out of the gap.",
          "Nouns like 'parks' describe the study's setting, not the size of the fall the bullet asks for.",
        ),
        tags: ["ielts", "notes"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "The printed heading is 'FINDINGS'. The lecturer says: 'And what did we actually see? Well, the numbers tell a story.' Where are you in the notes?",
        hints: ["Locate by meaning, not spelling."],
        options: [
          { id: "a", text: "Nowhere — the word 'findings' was never spoken, so the section has not started." },
          { id: "b", text: "At the FINDINGS heading: a question about what was observed is the heading's spoken meaning arriving in paraphrase." },
          { id: "c", text: "At the previous heading — results always come last, so nothing has begun yet." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "At the FINDINGS heading: a question about what was observed is the heading's spoken meaning arriving in paraphrase.",
          "Headings arrive paraphrased, and a question about what was actually seen is the talk's natural way of announcing its results section, whatever words it uses. Triggering on that meaning puts you at the live gaps a full sentence before word-waiters arrive.",
          "Option (a) waits for a word the recording chose not to say, and option (c) treats a scheduling fact as a locating method.",
        ),
        tags: ["ielts", "notes"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the opening of the talk, then complete the note.",
        hints: [],
        audioText:
          "Lecturer: So why do bees struggle in cities at all? The first culprit is habitat — as gardens are paved over, the flowers they fed on simply vanish.",
        question: "Notes gap (ONE WORD ONLY): Loss of ____",
        acceptedAnswers: ["habitat"],
        keywords: ["habitat"],
        feedback: fb(
          "Habitat.",
          "The bullet's frame 'Loss of ____' wants a noun, and the lecturer names the culprit directly before explaining it; 'flowers' and 'gardens' are the supporting cast of the explanation, not the loss itself. The heading located you and the grammar chose the word.",
          "'Flowers' is the last noun before the sentence ends — the classic bait for keying the end of a sentence rather than its subject.",
        ),
        tags: ["ielts", "notes"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: what can the check window realistically repair in note completion?",
        hints: [],
        question: "What can the final check window realistically fix?",
        acceptedAnswers: ["spelling", "spelling and plurals", "spelling, plurals and limits"],
        keywords: ["spelling"],
        feedback: fb(
          "Spelling, plurals and word-limit counts.",
          "The window audits the mechanical layer only: near-miss nouns, single-word limits and endings. It cannot recover a gap that was never filled, because the audio is gone by then and the page holds nothing to re-check.",
          "Re-listening and gap-refilling are the impossible tasks the window is so often wasted on.",
        ),
        tags: ["ielts", "notes"],
      }),
      ex({
        type: "multi-select",
        difficulty: "medium",
        skill: "listening",
        prompt: "Select every job a note's headings do for you.",
        hints: [],
        options: [
          { id: "a", text: "They are the talk's itinerary, visited in order" },
          { id: "b", text: "They locate each gap by meaning when the talk paraphrases them" },
          { id: "c", text: "They predict the exact word each gap wants" },
          { id: "d", text: "They state the word limit for the whole task" },
        ],
        correctOptionIds: ["a", "b"],
        feedback: fb(
          "Headings are the itinerary and the meaning-based locators.",
          "The headings give structure and position — where you are and what comes next — while the grammar inside each bullet does the word-level prediction and the rubric states the limit. Each layer of the layout has its own single job, and loading one with another's work wastes the reading time.",
          "Headings never announce specific answers or limits; expecting them to is how their real value gets overlooked.",
        ),
        tags: ["ielts", "notes"],
      }),
    ],
    homework: [
      "Take any five-minute lecture excerpt; reduce it to two headings and four bullets with one gap each, and code each gap's part of speech.",
      "Have the excerpt read once; fill your own notes, then audit only plurals, near-miss nouns and single-word limits.",
    ],
  },
  {
    slug: "ielts-listening-table-completion",
    title: "Table completion in depth",
    description:
      "Rows are items, columns are categories: how column headers define each answer's type, how row changes act as checkpoints, and how to scan across a row while the audio walks down the rows.",
    objectives: [
      "read column headers as the definition of every gap beneath them",
      "scan across a row while the audio describes one item at a time",
      "use the row-change moment to confirm position and repair drift",
      "keep column answers parallel in type and format",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "A table grids the world into rows and columns: each row is one item — a course, a trip, a product — and each column is one category of information about it, such as the day it runs or what it costs. The gapped cells sit inside this grid, and the grid does half of the work for you: a 'Price' column wants figures, a 'Day' column wants weekdays, and when the speaker finishes one row and starts the next, the change is an audible checkpoint. This lesson teaches reading the grid, scanning the row, and using the seams between rows.",
        beforeYouStart: [
          "You can read a three-by-three table quickly and remember its headers.",
          "You can count an answer's words against a printed limit.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Table completion in this lesson"],
        rows: [
          ["Section", "Listening — a flexible family across Parts 1, 2 and 3, wherever information is compared"],
          ["Task & question types", "Complete a table whose rows are items and whose columns are categories, inside a word limit"],
          ["What is assessed", "Grid discipline: capturing the right cell's answer in the type the column defines"],
          ["Why this matters", "Tables look like the friendliest layout and then punish column-blind capture with a whole row of near-misses"],
        ],
      },
      {
        type: "text",
        text: "Start with the headers, not the gaps: they define the legal contents of every cell in their column. A 'Day' column wants a weekday whatever the audio says about months or times; a 'Price' column wants a figure even when the speaker dresses it in words; an 'Includes' column wants a short noun. Then read the rows: the printed row labels — 'Weekend trip', 'Cookery class' — are the items the speaker will take one at a time, usually in printed order. Your two questions are therefore settled before a word is spoken: what type does each column want, and in what order will the rows arrive.",
      },
      {
        type: "steps",
        title: "Solving method: table completion",
        intro: "Headers legislate, rows arrive in order, seams checkpoint.",
        steps: [
          {
            title: "Annotate the headers with types",
            text: "Write a tiny code over each column — 'day', 'figure', 'noun', 'time' — so that while listening you never have to ask what a cell wants. The header is the column's law down every row.",
            examples: [
              {
                english: "Headers 'Day | Start | Price | Includes' code as weekday, clock time, figure, nouns — four answer types fixed in ten seconds.",
                note: "Headers legislate for the whole column.",
              },
            ],
          },
          {
            title: "Scan the row, anchor on its label",
            text: "While the audio describes one item, your eyes move across that row's cells only. The printed row label is the anchor that tells you which cells are live, and the speaker's name for the item is usually a paraphrase of it.",
            examples: [
              {
                english: "Row 'Cookery class'; the speaker says 'the hands-on cooking session' — same row, new wording, and your eyes stay on its cells.",
                note: "Row labels arrive paraphrased.",
              },
            ],
          },
          {
            title: "Catch the row-change moment",
            text: "The audio signals each new item with a transition — 'the second option', 'then there's', a new speaker in a two-voice table. That moment is your checkpoint: confirm the previous row is complete, drop your eyes one row, and continue. Missing the seam is how one lost second becomes three wrong cells.",
            examples: [
              {
                english: "In a two-voice table the receptionist's 'Right, and the Sunday one?' hands you to the next row mid-sentence — the seam is often a question.",
                note: "Seams are checkpoints, not pauses.",
              },
            ],
          },
          {
            title: "Capture in the column's format",
            text: "Write each answer in the type its column defined: figures for prices, weekday names for days, single nouns where the limit is one word. If an answer will not fit the column's type, you have caught a neighbouring cell's word — rescan the row.",
            examples: [
              {
                english: "'It runs every second Wednesday' in a 'Day' column takes 'Wednesday', not 'every second Wednesday' — the column wants the day name.",
                note: "Type-check is the row's error detector.",
              },
            ],
          },
          {
            title: "Repair drift at the next seam",
            text: "If a cell's answer never arrived, leave it and lock onto the next seam. Tables forgive: the next row's transition re-anchors your position, and the pattern of columns resumes exactly as before.",
            examples: [
              {
                english: "A missed price in row two costs one mark; a candidate who rewinds mentally to find it loses the day and time cells of row three as well.",
                note: "Seams recover what replay cannot.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — a visitor centre activities table (Part 1 style)",
        context:
          "Table — headers: Activity | Day | Price | Includes. Row 'Guided walk' is printed complete (Saturday · $12 · refreshments). Row 'Boat trip' is gapped: Day ____ · Price $____ · Includes ____ . Limit: ONE WORD AND/OR A NUMBER per gap.",
        lines: [
          { speaker: "Clerk", text: "The guided walk runs Saturdays — twelve dollars, and refreshments are included." },
          { speaker: "Visitor", text: "And what about the boat trip? My guidebook's out of date." },
          { speaker: "Clerk", text: "That one moved to Sundays. It's twenty-eight now, with equipment hire included — the café stop is extra." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. Step one coded the headers before the audio: Day wants a weekday, Price wants a figure, Includes wants a noun. The walk row arrives printed and complete — it exists to calibrate you, showing how this table's items are phrased, and its Saturday figure is not your answer. The visitor's question is the seam (step three): eyes drop to the boat-trip row, and its label's paraphrase 'boat trip' arrives unchanged. Day: 'moved to Sundays' is a correction chain in miniature — the old Saturday slot is the suggest value, and the current weekday, Sunday, is the keyed cell. Price: 'twenty-eight' lands without correction, so 28 goes straight in as digits. Includes: 'equipment hire included' names the noun the column wants, while 'the café stop is extra' is the exclusion distractor — a true fact about the row that belongs in no cell. The clerk's next sentence would be the next seam, and any cell still empty would wait for the sweep, not for memory.",
      },
      {
        type: "example",
        title: "Table marks won and lost",
        items: [
          {
            english: "A 'Start time' column is filled with 'morning' because the speaker said 'we set off in the morning'; the column wanted a clock time, and 'morning' fails the column's law.",
            note: "Columns define types, not topics.",
            domain: "travel",
          },
          {
            english: "The audio gives row two's price before row one's, in an order the speaker chose; a candidate who filled cells as sentences arrived put both figures in row one.",
            note: "Rows finish at the seam, not when the sentence does.",
            domain: "exam",
          },
          {
            english: "A two-voice table: the customer asks about 'the afternoon course' and the clerk answers with a price — but the question was the seam, and the price belongs to the new row's cell.",
            note: "Questions are seams too.",
            domain: "everyday",
          },
          {
            english: "'Fifteen per person, or twelve for groups' reaches a Price column; the keyed figure is the standard one unless the row label itself mentions groups.",
            note: "Row labels decide which figure is yours.",
            domain: "work",
          },
          {
            english: "An 'Includes' column under ONE WORD AND/OR A NUMBER receives 'packed lunch and guide'; the legal capture is the single noun the cell's neighbours do not already print.",
            note: "Read what the cell's neighbours already print.",
            domain: "travel",
          },
          {
            english: "A candidate misses the third row's seam, keeps scanning row two, and fills three correct words into three wrong cells — the grid's cruellest scoring pattern.",
            note: "Right words in wrong cells score zero.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Table traps corrected",
        items: [
          {
            wrong: "Any true fact about a row can fill its gaps.",
            right: "Only the fact that matches the gap's column type and its row's position scores.",
            reason: "Tables are grids: a true fact in the wrong cell is marked exactly like a false one.",
          },
          {
            wrong: "The printed, completed row is decoration to skip.",
            right: "Use it to calibrate: it shows how the audio phrases this table's items and how the columns format their answers.",
            reason: "The complete row is the item's own worked example, and skipping it wastes the free orientation it hands you.",
          },
          {
            wrong: "When I lose the audio, I scroll back up the table to find my place.",
            right: "Wait for the next seam — 'the next one is', a new speaker, a returned question — and re-anchor one row down.",
            reason: "The audio never scrolls back, and the seam is guaranteed to arrive because the table's rows must be walked in order.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Code every column's answer type from its header; read the row labels as the audio's itinerary and note the printed complete row."],
          ["While the clock runs", "Scan across the live row only; capture each cell in its column's format; tick the row closed at the seam."],
          ["If you are stuck", "Leave the empty cell and lock onto the next row-change moment; the grid resumes identically one row down."],
          ["Final minutes", "Run a column-eye down each column: days read as weekdays, prices as figures, includes as nouns."],
        ],
      },
      {
        type: "summary",
        points: [
          "Rows are items, columns are categories: the header legislates for every cell beneath it.",
          "Scan across one row at a time; anchor on the printed row label, however paraphrased the audio's version.",
          "The row-change moment is a checkpoint — confirm the row, drop down, continue.",
          "Type-check every capture against its column; a fact in the wrong cell scores like a falsehood.",
          "When drift happens, wait for the next seam instead of scrolling back.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three recall questions from earlier chapters.",
        items: [
          {
            question: "What does a 'Price' column tell you about every gap beneath it?",
            options: ["A figure is wanted", "A currency word is wanted", "A full sentence is wanted"],
            correctIndex: 0,
            explanation: "The header defines the answer type for the whole column, which is why headers are read before gaps.",
            from: "Predicting answers",
          },
          {
            question: "A speaker says 'Saturdays — sorry, that's now Sundays.' Which day fills the Day column?",
            options: ["Saturday", "Sunday", "Both days"],
            correctIndex: 1,
            explanation: "Corrections replace the earlier value, so the current weekday is the keyed cell.",
            from: "Identifying distractors",
          },
          {
            question: "Under ONE WORD AND/OR A NUMBER, which capture is legal for an Includes cell?",
            options: ["equipment", "equipment hire included", "the equipment and the hire"],
            correctIndex: 0,
            explanation: "One word is the safe legal capture; the second adds a word and the third adds two, and limits count every extra.",
            from: "Question instructions and answer limits",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the clerk's answer, then complete the cell.",
        hints: ["Follow the correction to the current day."],
        audioText:
          "Clerk: That one moved to Sundays. It's twenty-eight now, with equipment hire included — the café stop is extra. Visitor: Fine. And does it leave from the same pier?",
        question: "Boat trip — Day (one word):",
        acceptedAnswers: ["Sunday", "Sundays"],
        keywords: ["Sunday"],
        feedback: fb(
          "Sunday (Sundays).",
          "The correction chain 'moved to Sundays' replaces the old Saturday slot, and the Day column wants the current weekday. The pier question arrives after the seam, so it belongs to a later row or to none at all.",
          "Saturday is the superseded value the correction exists to replace, and 'twenty-eight' answers the Price cell, not this one.",
        ),
        tags: ["ielts", "tables"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "listening",
        prompt: "Complete the grid rule.",
        hints: ["What does the header decide about all cells below it?"],
        sentence: "A header at the top of a column defines the answer ____ for every gap beneath it.",
        acceptedAnswers: ["type", "kind", "format"],
        feedback: fb(
          "Type (or format).",
          "The column's header is its law: a Day column takes weekdays down every row, and a Price column takes figures down every row. Reading headers first is what lets you type-check each capture the moment you make it.",
          "Reading gaps without their columns leaves you capturing true facts into cells that never asked for them.",
        ),
        tags: ["ielts", "tables"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "In a two-voice table, the visitor asks: 'And what about the boat trip? My guidebook's out of date.' What has just happened?",
        hints: ["What changes hands when a question names a new item?"],
        options: [
          { id: "a", text: "Nothing — small talk between rows." },
          { id: "b", text: "A seam: the question hands the conversation to the next row, and its cells are now live." },
          { id: "c", text: "A distractor — questions never carry answers." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A seam: the question hands the conversation to the next row, and its cells are now live.",
          "Questions from the other speaker are the most common row-change signal in two-voice tables, and the answer that follows will walk the new row's columns in order. Catching the seam is what keeps your eyes on the right cells while the details arrive.",
          "Option (a) wastes the orientation the question hands you, and option (c) confuses seam signals with content distractors.",
        ),
        tags: ["ielts", "tables"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Read the case, then answer.",
        hints: [],
        passageTitle: "Two rows, one figure",
        passage:
          "Table headers: Course | Day | Price. Row 1 'Pottery — Tuesdays — $40' is printed. The audio says: 'The pottery evening is still Tuesdays, forty dollars. The silver-jewellery workshop runs Wednesdays at sixty, though pensioners pay forty-five.'",
        question: "What goes in the silver-jewellery row's Price cell, and why?",
        options: [
          { id: "a", text: "Forty-five — the last figure spoken about that row." },
          { id: "b", text: "Sixty — the standard price; forty-five belongs to a discounted group the row label does not mention." },
          { id: "c", text: "Forty — the figure from the printed row above." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Sixty — the standard price; forty-five belongs to a discounted group the row label does not mention.",
          "The row label 'silver-jewellery workshop' carries no concession, so the standard sixty is the keyed cell; the pensioner figure is a true fact attached to a narrower group. Row labels decide which figure belongs to which cells.",
          "Option (a) keys the concession instead of the row's own price, and option (c) imports a different row's figure altogether.",
        ),
        tags: ["ielts", "tables"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: what is the row-change moment called in this method?",
        hints: [],
        question: "What is the row-change moment called in this method?",
        acceptedAnswers: ["a seam", "seam", "the seam", "a checkpoint"],
        keywords: ["seam", "checkpoint"],
        feedback: fb(
          "A seam — the row-change checkpoint.",
          "Seams are signposted — a transition phrase, a new speaker, a returned question — and they are the guaranteed re-anchoring points that recover a drifting candidate. The name matters less than the habit: confirm the row, drop down, continue.",
          "Transitions and questions are not decoration; ignoring them is how right words land in wrong cells.",
        ),
        tags: ["ielts", "tables"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the clerk's correction, then complete the cell.",
        hints: [],
        audioText:
          "Clerk: The Sunday cycling tour is eighteen dollars with a helmet included — no, correction, the helmet's a five-dollar extra now, so the tour alone is eighteen.",
        question: "Cycling tour — Price (digits only):",
        acceptedAnswers: ["18", "18.00", "eighteen"],
        keywords: ["18"],
        feedback: fb(
          "18 — the tour price itself.",
          "The correction moves the helmet out of the inclusive price and confirms the tour at eighteen; the Price cell wants the tour's own figure, not the tour-plus-extras total. The column's type law — a figure for the Price column — does the rest of the checking.",
          "Five is the helmet surcharge, and twenty-three is a sum no cell in the table ever asked for.",
        ),
        tags: ["ielts", "tables"],
      }),
    ],
    homework: [
      "Build a four-column table (Day, Time, Price, Includes) over any two-item practice transcript; code each column's type before listening once.",
      "While listening, mark each seam in the margin; afterwards, count how many seams you caught and how many cells each one saved.",
    ],
  },
  {
    slug: "ielts-listening-flowchart-completion",
    title: "Flowchart completion in depth",
    description:
      "Process stages joined by arrows: how the arrows mirror the recording's order, which signal words open each stage, and how stages double as checkpoints when the process outruns you.",
    objectives: [
      "read a flowchart's stages and arrows as a map of the process before the audio",
      "catch the signal words — first of all, once that's done, after that — that open each stage",
      "use stage boundaries as checkpoints to repair drift mid-process",
      "capture each gap in its stage's grammatical frame and inside the limit",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "A flowchart turns a procedure into a picture: boxes for stages, arrows for sequence, and gaps where a stage's key word should be. The tasks are typically Part 3 processes — an application procedure, a research method, a complaints route — negotiated by two or three voices. The design gift is that the arrows obey the recording: the audio walks the stages in arrow order, and every arrow is guarded by a signal word you can hear coming. Learn the signals and the stages become the checkpoints that catch you whenever the discussion moves faster than you do.",
        beforeYouStart: [
          "You can follow a multi-step procedure described in conversation.",
          "You know that gaps are visited in printed order.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Flowchart completion in this lesson"],
        rows: [
          ["Section", "Listening — Part 3's procedural discussions; process talks also appear in Part 2"],
          ["Task & question types", "Complete the flowchart's stages with words from the recording, usually NO MORE THAN TWO WORDS per gap"],
          ["What is assessed", "Sequencing comprehension: matching spoken stages to their boxes and capturing the key word inside the limit"],
          ["Why this matters", "A missed stage misplaces every later gap, so checkpoint discipline is effectively the whole task"],
        ],
      },
      {
        type: "text",
        text: "Read a flowchart as a sentence about order: this happens, then this, then this. The arrows run left to right and top to bottom exactly as the recording will, and each box holds one stage in note form — 'Application submitted', 'Fee paid', 'Interview held' — with gaps where a stage's noun or verb belongs. Two things follow. First, the printed stages are your itinerary: when the audio discusses a stage you can already see, you know exactly where you are. Second, the gaps sit inside grammatical frames: a box reading '____ requested' wants a noun before a passive verb, and the audio will supply that noun in its own wording. The arrows are sequence markers, and the recording obeys them without exception.",
      },
      {
        type: "steps",
        title: "Solving method: flowchart completion",
        intro: "Walk the boxes, arm the signals, follow the agreement.",
        steps: [
          {
            title: "Walk the boxes in arrow order",
            text: "During the introduction, read the flowchart as the process's story: where it starts, what its middle stages are, how it ends. Note how many stages are printed and how many are gapped — the ungapped boxes are your orientation landmarks.",
            examples: [
              {
                english: "A five-box chart about a grant application, two stages printed and three gapped, tells you the talk passes two free landmarks you can re-anchor on.",
                note: "Printed stages are free landmarks.",
              },
            ],
          },
          {
            title: "Arm the signal inventory",
            text: "Process talk is fenced with audible markers: 'first of all', 'once that's done', 'after that', 'the next stage is', 'before you can…', 'at that point'. Have the inventory ready so each marker opens the next box in your mind the moment it is spoken.",
            examples: [
              {
                english: "'Once the reference is in, we move to the interview stage' — 'once… in' closes one box and the interview opens the next.",
                note: "Signals are the arrows, spoken.",
              },
            ],
          },
          {
            title: "Follow the agreed sequence, not every proposal",
            text: "Part 3 processes are negotiated: one speaker proposes a stage, another questions or reorders it, and the agreed version is the flowchart's version. Track the agreement, and let rejected proposals wash past your boxes.",
            examples: [
              {
                english: "'Couldn't we interview first?' — 'The office needs the form before anything else.' The form stage stays first; the interview proposal was discussion, not procedure.",
                note: "Agreed sequences are the chart.",
              },
            ],
          },
          {
            title: "Check in at every box",
            text: "As each stage's discussion closes, confirm its gap is filled and your eyes are on the next box. If a gap will not resolve, leave it and ride the signal word to the following stage — the chart's structure guarantees another checkpoint is seconds away.",
            examples: [
              {
                english: "Gap 27 still empty while the speaker says 'So with the deposit settled…' — 'settled' has just closed the deposit box; be on the next one now.",
                note: "Boxes close on signal words.",
              },
            ],
          },
          {
            title: "Capture in the box's frame and the limit",
            text: "Each gap inherits its box's grammar — a noun before a passive verb, a bare verb after an arrow — and the rubric's limit, often NO MORE THAN TWO WORDS. The recording's exact words, fitted to the frame, are the whole answer.",
            examples: [
              {
                english: "The box 'Await ____ confirmation'; the audio 'we wait for the registrar's go-ahead' supplies 'registrar's' — the frame demanded a possessive noun and got it.",
                note: "The frame tells you the word's shape before the audio says it.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — a lab access procedure (Part 3 style)",
        context:
          "Flowchart — Student requests project room → Supervisor approves online → Student pays ____ (gap 28) → Card collected from ____ (gap 29) → Access begins after ____ (gap 30). NO MORE THAN TWO WORDS for each gap.",
        lines: [
          { speaker: "Administrator", text: "Your supervisor logs the request on the portal first — nothing moves without that." },
          { speaker: "Student", text: "And once that's approved, I come straight to you?" },
          { speaker: "Administrator", text: "You pay the refundable deposit — twenty pounds — then we print the card at the security desk, usually the same day." },
          { speaker: "Administrator", text: "Access only starts the following Monday, mind — the system activates new cards over the weekend." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. Step one walked the chart: five stages, three gapped, with 'Supervisor approves online' printed as the free landmark. Step two armed the signals, and they arrive on schedule: 'first' opens the logging stage, and 'once that's approved' hands the conversation to the deposit box. Gap 28, 'Student pays ____': the administrator's 'the refundable deposit' supplies 'deposit' in the frame's noun slot, and 'twenty pounds' is the amount — a true fact no box asked for. Gap 29, 'Card collected from ____': the frame wants a place after 'from', and 'the security desk' is the location the same-day promise decorates. Gap 30, 'Access begins after ____': the frame wants a time point after 'after', and the closing line supplies 'Monday' — captured bare, because 'the following Monday' spends a third word the limit refuses, and 'the weekend' names the system's processing period rather than the start of access. Every gap was found by signal word, and every answer was shaped by its box's frame before the audio supplied the word.",
      },
      {
        type: "example",
        title: "Flowchart marks won and lost",
        items: [
          {
            english: "A chart about a complaints procedure: the speaker says 'ideally you'd phone first, but formally the form starts it' — the chart's first box follows the formal route, and 'phone' is a rejected proposal.",
            note: "Charts hold the official sequence, not the preferred one.",
            domain: "work",
          },
          {
            english: "'The next stage is the ethics review' arrives while a candidate is still polishing gap 27; the signal has opened the next box and the previous one is closed for good.",
            note: "Signals close boxes behind you.",
            domain: "exam",
          },
          {
            english: "A box reads 'Draft returned for ____'; the audio says 'they send it back so you can make revisions', and 'revisions' fills the frame though 'make' never appears in the box.",
            note: "The frame converts paraphrase into fit.",
            domain: "study",
          },
          {
            english: "Two students disagree about whether training precedes registration; the tutor's 'the office requires training before you register' is the agreed sequence the chart follows.",
            note: "The authority voice settles the order.",
            domain: "study",
          },
          {
            english: "Audio 'access starts from the following Monday' fills a frame 'Access begins after ____' under NO MORE THAN TWO WORDS: 'Monday' scores, and the three-word courtesy phrase dies at the count.",
            note: "Time phrases are where limits bite hardest.",
            domain: "exam",
          },
          {
            english: "A candidate fills gap 30 with 'weekend' because the word is spoken late and loudly; the frame 'Access begins after ____' wanted the start point, not the processing period.",
            note: "Frames grade candidates before the marker does.",
            domain: "work",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Flowchart traps corrected",
        items: [
          {
            wrong: "I fill boxes in the order words arrive, not the order the arrows run.",
            right: "Ride the signal words: each one opens the box the arrows say is next.",
            reason: "Discussions circle back and propose reorders; the chart's arrows, not the conversation's detours, define your position.",
          },
          {
            wrong: "A stage mentioned by any speaker is the agreed stage.",
            right: "Only the version the participants settle on fills the chart.",
            reason: "Part 3 processes are negotiated aloud, and rejected or hypothetical stages are the family's signature distractors.",
          },
          {
            wrong: "If the process outruns me, I re-read the whole chart to find my place.",
            right: "Catch the next signal word, match it to a box, and continue from there.",
            reason: "The chart is short and the signals keep coming; re-reading the whole picture costs the boxes that pass while you read.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Walk the boxes in arrow order; mark the printed stages as landmarks and the gapped ones as live targets."],
          ["While the clock runs", "Let each signal word open the next box; capture the frame-fitted word; close each box as its discussion ends."],
          ["If you are stuck", "Skip to the next signal, re-anchor on its box, and fill the abandoned gap with a reasoned guess in the sweep."],
          ["Final minutes", "Read the completed chart as a story: does each box follow the last, and does each answer fit its frame and limit?"],
        ],
      },
      {
        type: "summary",
        points: [
          "Flowcharts are procedures drawn as sequence: boxes are stages, arrows are order, and the recording obeys the arrows.",
          "Signal words — first of all, once that's done, after that, the next stage — are the arrows made audible.",
          "Discussed processes are negotiated: fill boxes from the agreed sequence, not from every proposal.",
          "Each gap inherits its box's grammatical frame, and the frame shapes the word before the audio supplies it.",
          "Signals close boxes behind you: when one fires, be on the next box.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from previously covered lessons.",
        items: [
          {
            question: "In Part 3, whose version of a process does the flowchart follow?",
            options: ["The agreed sequence", "The first proposal", "The loudest speaker's"],
            correctIndex: 0,
            explanation: "Speakers propose, question and reorder; the chart records the sequence the participants finally settle on.",
            from: "Identifying distractors",
          },
          {
            question: "Under NO MORE THAN TWO WORDS, which capture of 'from the following Monday' is legal?",
            options: ["the following Monday", "Monday", "the Monday after the weekend"],
            correctIndex: 1,
            explanation: "'Monday' fits the frame inside the limit; the three-word version adds a word the rubric refuses.",
            from: "Question instructions and answer limits",
          },
          {
            question: "What do the printed, ungapped boxes of a flowchart give you?",
            options: ["Free landmarks to re-anchor on", "The answers to later gaps", "Nothing at all"],
            correctIndex: 0,
            explanation: "Complete stages are orientation points the audio must pass, which makes them the checkpoints of the method.",
            from: "Predicting answers",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the administrator's closing lines, then complete the stage.",
        hints: ["The frame wants a time point; the limit allows two words at most."],
        audioText:
          "Administrator: You pay the refundable deposit — twenty pounds — then we print the card at the security desk, usually the same day. Access only starts the following Monday, mind — the system activates new cards over the weekend.",
        question: "Flowchart gap: Access begins after ____ (NO MORE THAN TWO WORDS)",
        acceptedAnswers: ["Monday", "the Monday", "following Monday"],
        keywords: ["Monday"],
        feedback: fb(
          "Monday.",
          "The administrator's closing line dates the start of access — 'from the following Monday'. The frame 'after ____' takes the bare weekday, and the limit refuses the three-word courtesy phrase the speaker used, so compression is part of the answer.",
          "The weekend is when cards activate — processing, not access — and 'the same day' belongs to the card-printing stage, not the start date.",
        ),
        tags: ["ielts", "flowcharts"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "listening",
        prompt: "Complete the signal rule.",
        hints: ["What do arrows and signals have in common?"],
        sentence:
          "In process talk, phrases like 'once that's done' and 'after that' function as the flowchart's ____, spoken.",
        acceptedAnswers: ["arrows", "arrow", "sequence markers"],
        feedback: fb(
          "Arrows — sequence markers made audible.",
          "Every arrow in the chart is guarded by an audible signal, which is why arming the inventory before the audio turns each transition into an announced checkpoint rather than a surprise. The signal is the arrow you can hear.",
          "Treating signals as filler leaves you reading boxes while the audio has already moved on to the next one.",
        ),
        tags: ["ielts", "flowcharts"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "A student proposes: 'Couldn't we run the interviews before the forms?' The administrator replies: 'The office needs the form logged before anything else.' What does the flowchart record?",
        hints: ["Who settles the order?"],
        options: [
          { id: "a", text: "Interviews first — the student proposed it." },
          { id: "b", text: "Forms first — the authority's requirement is the agreed sequence the chart follows." },
          { id: "c", text: "Both orders — the chart accepts either." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Forms first — the authority's requirement is the agreed sequence the chart follows.",
          "Charts hold the sequence the participants settle on, and the administrator's requirement settles it: the form stage precedes the interviews despite the proposal. Rejected reorders are discussion, not procedure.",
          "Option (a) keys a rejected proposal, and option (c) invents a flexibility no printed chart has.",
        ),
        tags: ["ielts", "flowcharts"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the tutor's instructions, then complete the stage.",
        hints: [],
        audioText:
          "Tutor: First of all, you'll submit a one-page outline. Once that's signed off, you book a skills interview, and after that interview we register the project title.",
        question: "Which stage comes immediately after the outline is signed off? (Two or three words.)",
        acceptedAnswers: ["a skills interview", "the skills interview", "skills interview", "booking a skills interview"],
        keywords: ["skills interview"],
        feedback: fb(
          "Book a skills interview.",
          "The signal chain is explicit: outline, then 'once that's signed off' opens the interview stage, then 'after that interview' opens registration. The stage following sign-off is the skills interview, and the signal word 'once' is what tells you so.",
          "Registration follows the interview, not the outline, so it sits one box too far along the chain.",
        ),
        tags: ["ielts", "flowcharts"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: what does a flowchart's printed, complete box give you when the process outruns you?",
        hints: [],
        question: "What do ungapped printed boxes provide during the audio?",
        acceptedAnswers: ["landmarks", "checkpoints", "a landmark to re-anchor", "free landmarks"],
        keywords: ["landmark", "checkpoint"],
        feedback: fb(
          "Landmarks — re-anchoring checkpoints.",
          "The audio must pass every printed stage, so a complete box is a guaranteed place to match the discussion to the chart and resume. They cost nothing to use and rescue whole sets of gaps when the discussion accelerates.",
          "Re-reading the entire chart from the start is the slow alternative that costs the boxes passing while you read.",
        ),
        tags: ["ielts", "flowcharts"],
      }),
      ex({
        type: "multi-select",
        difficulty: "medium",
        skill: "listening",
        prompt: "Select every phrase that typically opens a new flowchart stage.",
        hints: [],
        options: [
          { id: "a", text: "first of all" },
          { id: "b", text: "once that's done" },
          { id: "c", text: "the next stage is" },
          { id: "d", text: "as I was saying yesterday" },
        ],
        correctOptionIds: ["a", "b", "c"],
        feedback: fb(
          "'First of all', 'once that's done' and 'the next stage is' all open boxes.",
          "The three signals mark onset, completion-to-transition, and explicit stage naming — the inventory that guards the arrows. The fourth phrase returns to an earlier topic, which closes stages rather than opening them.",
          "Counting 'as I was saying' as a stage-opener drags you backwards along the chart exactly when the audio is moving forwards.",
        ),
        tags: ["ielts", "flowcharts"],
      }),
    ],
    homework: [
      "Take any how-to article; draw a five-box flowchart of its process with two boxes gapped, then have someone read the article aloud once while you fill.",
      "Underline every signal word in the article and mark which arrow each one guards.",
    ],
  },
  {
    slug: "ielts-listening-summary-completion",
    title: "Summary completion in depth",
    description:
      "The heaviest paraphrase task in the section: running text that rewords the whole recording, where paragraph structure mirrors the talk's structure and word limits bite hardest.",
    objectives: [
      "read a gapped summary as a reworded map of the whole recording before the audio",
      "predict each gap's grammar and content from the surrounding text",
      "track meaning across the paraphrase distance between summary and recording",
      "defend marks by counting words against the limit on every gap",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Summary completion condenses an entire recording — minutes of talk — into a short paragraph whose sentences reword what was said, and leaves a handful of gaps in the rewording. Nothing in the question quotes the audio: where the speaker said 'a small charge', the summary says 'a modest fee', and your answer must come from the recording while fitting the summary's grammar. It is the section's heaviest paraphrase task, it lives at the academic end of the test, and its word limits bite harder here than anywhere else.",
        beforeYouStart: [
          "You can read a short paragraph quickly and restate its gist.",
          "You track paraphrase confidently between questions and audio.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Summary completion in this lesson"],
        rows: [
          ["Section", "Listening — Parts 3 and 4, the section's academic end"],
          ["Task & question types", "Complete the summary with words from the recording, inside limits from ONE WORD ONLY to NO MORE THAN THREE WORDS"],
          ["What is assessed", "Reading a reworded map while listening: gist-tracking, grammar prediction and exact capture across paraphrase"],
          ["Why this matters", "The summary previews the recording's structure, so candidates who read it properly hear the talk twice — once in outline"],
        ],
      },
      {
        type: "text",
        text: "A summary is the recording compressed and reworded: its paragraphs correspond to the talk's movements, its sentences to the speakers' points, and its gaps to the points' key words. Two consequences drive the method. First, the summary's paragraph breaks are structural signposts — when the talk changes direction, the summary changes paragraph, so a paragraph turn tells you where you are even when the wording bewilders you. Second, the paraphrase distance is the design: the gap's answer is the recording's word, but the sentence around the gap is the summary's wording, and only grammar bridges the two. The task is bilingual listening — meaning flows from the audio, and form is imposed by the text.",
      },
      {
        type: "steps",
        title: "Solving method: summary completion",
        intro: "Read the map, mark the grammar, cross the bridge, count the words.",
        steps: [
          {
            title: "Read the whole summary in the introduction",
            text: "Read it end to end before the audio moves: its gist is the talk's itinerary, and each paragraph names a stretch you are about to hear. Mark the paragraph turns — they are your mileposts.",
            examples: [
              {
                english: "A two-paragraph summary whose first paragraph ends '…although the scheme faced opposition' promises a talk that introduces, then contests; the second paragraph is the contest.",
                note: "Paragraph turns are mileposts.",
              },
            ],
          },
          {
            title: "Mark each gap's grammar from both sides",
            text: "The words before and after a gap define its slot: 'the ____ of the trial' wants a noun; 'numbers ____ sharply' wants a past-tense verb; a gap between subject and object wants a verb phrase. Code every gap before the audio starts.",
            examples: [
              {
                english: "'Researchers ____ the survey in two stages' — subject, gap, object: a past-tense verb is coming, probably 'conducted' or 'administered'.",
                note: "Both-sides grammar is a free prediction.",
              },
            ],
          },
          {
            title: "Hold the gist while hunting gaps",
            text: "Listen with the summary's argument in mind rather than word-hunting: when the talk reaches the stretch your current paragraph covers, the gap's content is nearby. The gist is the net; individual words are the catch.",
            examples: [
              {
                english: "You know paragraph two covers the opposition; when a speaker begins 'of course, not everyone welcomed this…', your next gap is moments away.",
                note: "Position by paragraph, capture by word.",
              },
            ],
          },
          {
            title: "Cross the paraphrase bridge at each gap",
            text: "The sentence around the gap rewords the audio, so when wording stops matching, meaning is still moving: 'a modest fee' is 'a small charge', 'under-25s' is 'young people'. Write the recording's word, never the summary's.",
            examples: [
              {
                english: "The summary 'The library began to ____ late returns'; the audio 'we started charging a small fee for late books' supplies 'charge' — the summary's frame converts the audio's 'charging' to fit.",
                note: "Grammar-fit plus the recording's word, together.",
              },
            ],
          },
          {
            title: "Count words like a marker",
            text: "Summaries carry the strictest limits and the longest answers, the combination that costs the most marks in the section. Count every gap's words as you fill, count again in the check window, and remember that hyphenated forms count as one word while articles count as words.",
            examples: [
              {
                english: "The audio 'we surveyed nearly two thousand undergraduates' under NO MORE THAN TWO WORDS fills a gap as 'two thousand' — the count stops where the limit stops.",
                note: "Counting is part of answering.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — a summary of a talk on night shifts",
        context:
          "Summary — 'The study followed hospital staff working permanent nights. Managers had assumed that (31) ____ would fall during night shifts, but output stayed level while (32) ____ rose sharply. The report recommends (33) ____ lighting during breaks.' ONE WORD ONLY for each gap.",
        lines: [
          { speaker: "Lecturer", text: "The hospital asked us to test one assumption: that people simply get less done after dark. That turned out to be wrong — productivity was flat across the whole night." },
          { speaker: "Lecturer", text: "What did change was error rates. Between two and four in the morning, mistakes climbed — quietly, consistently, across every ward we watched." },
          { speaker: "Lecturer", text: "Our headline recommendation is embarrassingly simple: brighter break rooms. Light exposure in rest periods resets attention far better than coffee." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. Step one read the summary as a three-move argument: an assumption, a finding that reverses it, a recommendation — and the talk follows the same shape, move for move. Gap 31, 'that ____ would fall': the grammar wants a noun, the thing managers assumed would fall, and the assumption is 'productivity' — the audio's 'get less done' is the paraphrase of the noun the frame wants. Gap 32, 'while ____ rose sharply': the frame wants another noun to contrast with the first, and the finding names 'error rates', with 'mistakes climbed' as the bridge; 'two and four in the morning' is the setting, not the answer. Gap 33, 'recommends ____ lighting': an adjective before 'lighting', and the recommendation supplies 'brighter' — captured as spoken, while 'break rooms' and 'light exposure' are the summary's own rewording of that stretch. Every answer crossed the bridge in one direction only: meaning came from the talk, wording from the recording, frame from the summary.",
      },
      {
        type: "example",
        title: "Summary marks won and lost",
        items: [
          {
            english: "A summary sentence reads 'volunteers received a payment of ____'; the audio says 'we gave each participant thirty pounds' — the frame's 'of' wants the figure 30 under a limit that refuses the currency word.",
            note: "The frame decides the form; the limit decides the length.",
            domain: "study",
          },
          {
            english: "A candidate waits for the summary's word 'opposition' and never hears it, because the speaker said 'pushback from local residents' — the gap was fillable two sentences earlier.",
            note: "Hunt meaning, not vocabulary.",
            domain: "work",
          },
          {
            english: "The summary's second paragraph begins 'Critics, however…'; a candidate still hunting a gap from paragraph one misses that the talk has reversed direction with the same word 'however'.",
            note: "Paragraph turns are shared between text and talk.",
            domain: "exam",
          },
          {
            english: "The audio says 'attendance almost doubled'; a summary gap reads 'Attendance ____.' The verb slot takes 'doubled' — but 'nearly doubled' is not what was said, and the paraphrase scores nothing.",
            note: "Exact words inside the count, or nothing.",
            domain: "study",
          },
          {
            english: "A candidate fills a gap with the summary's own wording because it reads smoothly; the key demands the recording's word, and fluency was the trap.",
            note: "Smooth is not correct.",
            domain: "exam",
          },
          {
            english: "Under NO MORE THAN THREE WORDS, 'the housing stock' fits a gap about property conditions; 'the state of the housing stock' is six words and scores zero with perfect comprehension.",
            note: "Trim to the content words the limit permits.",
            domain: "everyday",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Summary traps corrected",
        items: [
          {
            wrong: "I fill gaps with the summary's own words when they fit the sentence.",
            right: "Fill with the recording's exact words, fitted to the summary's grammar.",
            reason: "The summary is the paraphrase; its words exist to hide the answer, not to be it.",
          },
          {
            wrong: "I start reading the summary when the audio starts.",
            right: "Finish reading it during the introduction: gist, paragraph turns, gap grammar.",
            reason: "Reading mid-audio splits attention exactly when gist-tracking needs it whole, and the introduction is reading time by design.",
          },
          {
            wrong: "Word limits are generous here because the answers are long.",
            right: "Count every gap: summary limits are strict, and hyphenation is the only mercy.",
            reason: "The longest answers and the strictest limits coexist in this task, which is why over-limit losses concentrate here.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the summary end to end; mark paragraph turns as mileposts and code each gap's grammar from both sides."],
          ["While the clock runs", "Track gist by paragraph; cross each paraphrase bridge with the recording's word; count words as you fill."],
          ["If you are stuck", "Leave the fighting gap and stay with the paragraph — the next gap's sentence re-anchors you inside the same stretch."],
          ["Final minutes", "Re-count every gap's words, re-check grammar fit, and verify that no answer came from the summary's own wording."],
        ],
      },
      {
        type: "summary",
        points: [
          "A summary is the whole recording reworded: paragraphs mirror the talk's movements, and gaps sit on the key words.",
          "Read it fully in the introduction — its gist is a map you will follow for the whole recording.",
          "Predict each gap's grammar from both sides; the frame shapes the answer before the audio supplies it.",
          "Cross the paraphrase bridge one way: meaning from the talk, wording from the recording, frame from the summary.",
          "Count words like a marker — this task's limits bite hardest.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three checks on earlier material.",
        items: [
          {
            question: "Where do summary answers come from?",
            options: ["The recording's exact words", "The summary's own wording", "Either, whichever reads more smoothly"],
            correctIndex: 0,
            explanation: "The summary paraphrases the recording; the keyed word is the recording's, fitted into the summary's grammatical frame.",
            from: "Recognising synonyms",
          },
          {
            question: "What corresponds between a summary and the recording?",
            options: ["Paragraph structure mirrors the talk's movements", "Nothing corresponds", "Only the first paragraph corresponds"],
            correctIndex: 0,
            explanation: "Paragraph turns in the text track direction changes in the talk, which makes them mileposts while listening.",
            from: "Understanding the Listening test",
          },
          {
            question: "How does a hyphenated word count under a word limit?",
            options: ["One word", "Two words", "It is banned"],
            correctIndex: 0,
            explanation: "Hyphenated forms count as single words — the one mercy the limit arithmetic offers.",
            from: "Question instructions and answer limits",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "hard",
        skill: "listening",
        prompt: "Listen to the finding, then complete the summary gap.",
        hints: ["The gap's frame wants a plural noun that contrasts with output."],
        audioText:
          "Lecturer: What did change was error rates. Between two and four in the morning, mistakes climbed — quietly, consistently, across every ward we watched.",
        question: "Summary gap (ONE WORD ONLY): '…output stayed level while ____ rose sharply.'",
        acceptedAnswers: ["errors", "error rates", "mistakes"],
        keywords: ["errors", "error rates", "mistakes"],
        feedback: fb(
          "Errors (error rates).",
          "The summary's clause contrasts a flat output with something rising, and the lecturer names it directly: error rates climbed between two and four. The grammar wanted a plural noun, and the recording's own words supply it.",
          "The time window 'two and four' is the setting of the finding, not the noun that rose.",
        ),
        tags: ["ielts", "summaries"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt: "The summary prints 'a modest fee'; the recording says 'a small charge'. What is the relationship?",
        hints: ["Why would the question writer choose different words?"],
        options: [
          { id: "a", text: "A contradiction — one of them must be wrong." },
          { id: "b", text: "A paraphrase pair: the same meaning in different words, and the gap's answer comes from the recording's side." },
          { id: "c", text: "A typo in the test." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A paraphrase pair: the same meaning in different words, and the gap's answer comes from the recording's side.",
          "Paraphrase pairs are the task's design: the summary rewords the recording so that only meaning, not wording, leads you to the gap. Recognising the pair as a pair is the moment the task opens up.",
          "Option (a) treats the design as an error, and option (c) discards the one relationship the whole task runs on.",
        ),
        tags: ["ielts", "summaries"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "listening",
        prompt: "Complete the grammar rule.",
        hints: ["What kind of word sits between a subject and its object?"],
        sentence: "In 'Researchers ____ the survey in two stages', the gap between subject and object predicts a ____ verb.",
        acceptedAnswers: ["past-tense", "past", "past tense"],
        feedback: fb(
          "A past-tense verb.",
          "The sentence reports completed research, so the slot between subject and object wants a finite past verb — 'conducted', 'ran', 'administered'. Coding the gap before the audio means you hear the verb coming rather than meeting it cold.",
          "Noun and adjective predictions ignore the sentence's own syntax and leave the ear unprepared for the word class that is actually coming.",
        ),
        tags: ["ielts", "summaries"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the opening of the talk, then complete the summary gap.",
        hints: [],
        audioText:
          "Lecturer: The hospital asked us to test one assumption: that people simply get less done after dark. That turned out to be wrong — productivity was flat across the whole night.",
        question: "Summary gap (ONE WORD ONLY): 'Managers had assumed that ____ would fall during night shifts.'",
        acceptedAnswers: ["productivity", "output"],
        keywords: ["productivity", "output"],
        feedback: fb(
          "Productivity.",
          "The summary rewords the assumption as a noun clause after 'that', and the recording's 'get less done' is the paraphrase of the noun the frame wants. The confirmation arrives one sentence later: productivity was flat across the whole night.",
          "'Less' and 'done' belong to the paraphrase rather than the noun slot, and 'night' is printed by the summary itself.",
        ),
        tags: ["ielts", "summaries"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: meaning comes from the recording — but which words must you actually write?",
        hints: [],
        question: "Meaning comes from the recording, but which words must you write?",
        acceptedAnswers: ["the recording's words", "the recording's exact words", "the audio's words"],
        keywords: ["recording", "audio"],
        feedback: fb(
          "The recording's exact words, fitted to the summary's grammar.",
          "Meaning travels from the talk and wording travels back with it: the keyed answer is the audio's word in the summary's slot. The summary's own vocabulary exists to reframe, never to answer.",
          "Writing the summary's smoother words is the fluency trap the task is built around.",
        ),
        tags: ["ielts", "summaries"],
      }),
      ex({
        type: "multi-select",
        difficulty: "medium",
        skill: "listening",
        prompt: "Select everything the pre-read of a summary establishes.",
        hints: [],
        options: [
          { id: "a", text: "The talk's gist and itinerary" },
          { id: "b", text: "The paragraph turns that serve as mileposts" },
          { id: "c", text: "Each gap's grammatical slot" },
          { id: "d", text: "The exact answers in advance" },
        ],
        correctOptionIds: ["a", "b", "c"],
        feedback: fb(
          "Gist, paragraph mileposts and gap grammar — the pre-read's three products.",
          "The summary previews structure and narrows form, but the words themselves arrive only from the recording; expecting answers in advance is the one thing a paraphrased text refuses to give.",
          "Treating the summary as an answer sheet is the misreading that turns its wording into a trap instead of a map.",
        ),
        tags: ["ielts", "summaries"],
      }),
    ],
    homework: [
      "Take a five-minute talk; write a two-paragraph, three-gap summary of it in deliberately reworded language, then have it read once while you fill your own gaps.",
      "Audit your fills twice: once for grammar fit against your own frames, and once for word counts against your own limits.",
    ],
  },
  {
    slug: "ielts-listening-sentence-completion",
    title: "Sentence completion in depth",
    description:
      "One gapped sentence at a time: the sentence as a pre-listening contract, the light paraphrase that hides the audio's line, and the difference between completing syntax and completing data.",
    objectives: [
      "read each sentence as a contract that fixes the gap's part of speech before the audio",
      "recognise sentences as lightly reworded versions of the recording's lines",
      "capture the recording's exact words inside the sentence's grammar and the limit",
      "distinguish sentence completion's syntax work from form completion's data work",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Sentence completion strips the layout away: no form, no table, no headings — just a list of complete sentences, each with one gap, each paraphrasing one line of the recording. The sentence is a contract printed before the audio starts: its subject, verb and surrounding nouns fix what the missing word can be, and its limit fixes how much of it you may write. The task appears in every part of the test, from social dialogues to academic monologues, and it rewards one habit above all others: read the contract first, listen second, capture third.",
        beforeYouStart: [
          "You can label the parts of speech in a sentence at a glance.",
          "You can check answers against limits such as ONE WORD ONLY.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "Sentence completion in this lesson"],
        rows: [
          ["Section", "Listening — appears in all four parts; the classic academic companion in Part 3"],
          ["Task & question types", "Complete each sentence with words from the recording inside a printed word limit"],
          ["What is assessed", "Grammar-fit prediction, light-paraphrase tracking and exact capture inside a syntactic frame"],
          ["Why this matters", "Every sentence hands you the answer's shape in advance — the only family that prints its own contract"],
        ],
      },
      {
        type: "text",
        text: "Each sentence restates a recording line in slightly different words — usually lightly: a synonym here, a voice change there, the same information re-ordered. 'The council will close the pool in November' might carry the recording's 'the leisure centre shuts for the winter' inside its frame. Two disciplines follow. First, the contract: before the audio, mark what the gap's slot accepts — a noun after 'the', a verb after a subject, a date after 'in', and never more words than the limit allows. Second, the bridge: when the sentence's wording stops matching the recording, meaning has not stopped — the paraphrase is carrying you towards the very words the gap wants. Sentence completion differs from form completion in exactly this respect: a form's labels want data — names, figures, dates — while a sentence's syntax wants whatever completes its meaning.",
      },
      {
        type: "steps",
        title: "Solving method: sentence completion",
        intro: "Sign the contract, find your line, capture exactly, verify by rereading.",
        steps: [
          {
            title: "Read the sentence set as a sequence",
            text: "The sentences paraphrase the recording in order, so read them all during the introduction: the set previews the stretch of audio it covers, and sentence boundaries are the audio's turning points.",
            examples: [
              {
                english: "Sentences 9–13 about a museum's reopening preview a five-point stretch: dates, prices, rooms, rules, events — in that order.",
                note: "The set is the audio's outline.",
              },
            ],
          },
          {
            title: "Sign each gap's contract",
            text: "For each gap, note the part of speech its slot accepts and a plausible content word or two. The contract is signed before listening; the audio's job is to honour it.",
            examples: [
              {
                english: "'Visitors must ____ the new carpet' — after 'must' comes a bare verb; 'remove shoes for' or 'avoid walking on' are the shapes to expect.",
                note: "Predict the shape, accept the word.",
              },
            ],
          },
          {
            title: "Hear the line inside the sentence",
            text: "Each sentence keys to one recorded line, usually lightly reworded. When you recognise the sentence's meaning arriving in different words, you have found your line — hold position and wait for the gap's slot to be spoken.",
            examples: [
              {
                english: "The sentence 'The tour now excludes the ____'; the audio 'we don't take groups downstairs any more' supplies 'downstairs' — the recording's word inside the sentence's frame.",
                note: "Meaning matches; words come from the audio.",
              },
            ],
          },
          {
            title: "Capture exactly, in the slot's form",
            text: "Write the recording's words, adjusted only where the sentence's grammar demands a different form — 'to reserve' heard where the gap follows 'must' is written bare as 'reserve'. Respect the limit absolutely: one word means one word.",
            examples: [
              {
                english: "The audio 'they've restricted entry to members'; the gap 'Entry is ____ to members' wants a past participle, and 'restricted' arrives in exactly that shape.",
                note: "Grammar-fit is a filter, not a licence to paraphrase.",
              },
            ],
          },
          {
            title: "Verify the contract after filling",
            text: "Read the completed sentence in the check window: grammatical, inside the limit, spelled as the audio spelled it. A sentence that reads wrong is a sentence to re-examine — syntax is this task's built-in error detector.",
            examples: [
              {
                english: "'The fee includes ____ equipment' filled with 'a helmet' reads cleanly; filled with 'helmet's' it does not — the possessive error is visible on the page.",
                note: "The sentence grades itself.",
              },
            ],
          },
        ],
      },
      {
        type: "dialogue",
        title: "Worked example — sentences about a placement",
        context:
          "Complete the sentences below. ONE WORD AND/OR A NUMBER for each answer. 11 The placement lasts for ____ months. 12 Students must submit a ____ before starting. 13 The tutor describes the office as ____.",
        lines: [
          { speaker: "Tutor", text: "The marketing placement runs from January — you're with the firm six months in total." },
          { speaker: "Tutor", text: "Before you start, the company wants a short proposal from you — one page is plenty, just so your supervisor knows what you plan to attempt." },
          { speaker: "Student", text: "What's the office like?" },
          { speaker: "Tutor", text: "Cramped, honestly, but you'll learn more there in a week than in a term of lectures." },
        ],
      },
      {
        type: "text",
        text: "Walkthrough with the method. Step one read three sentences previewing three facts about the placement: duration, paperwork, atmosphere. Step two signed the contracts: gap 11 wants a number before 'months'; gap 12 wants a singular noun after 'a'; gap 13 wants an adjective after 'as'. Gap 11: 'with the firm six months in total' supplies 6, and 'January' is bait for a date-shaped ear that the contract never signed. Gap 12: the paraphrase bridge is crossed when the recording names 'a short proposal' where the sentence expects a document noun; 'one page is plenty' decorates it, and the capture is 'proposal'. Gap 13: the tutor's own word 'cramped' is the adjective the slot contracted for, and the praising second half — 'you'll learn more there' — is the attitude distractor that never reaches the gap. Three contracts, three honoured, and every distractor defeated by a slot that knew what it wanted.",
      },
      {
        type: "example",
        title: "Sentence marks won and lost",
        items: [
          {
            english: "A gap straight after 'must' is filled with 'reserving' — the gerund breaks the contract the bare verb slot signed, and the mark dies on grammar alone.",
            note: "The slot signs for a word class; honour it.",
            domain: "study",
          },
          {
            english: "The sentence reads 'The gallery charges a ____ on weekends'; the audio says 'there's a small supplement on Saturdays and Sundays' — the slot wants 'supplement', the recording's word, not 'charge', the sentence's.",
            note: "Answer from the audio's side of the bridge.",
            domain: "everyday",
          },
          {
            english: "A candidate hears the whole line for sentence 12 but keeps listening for sentence 11's answer, not realising 11 was spoken a minute earlier — sentence order tracks audio order.",
            note: "The set is a sequence, not a buffet.",
            domain: "exam",
          },
          {
            english: "'The talk is aimed at ____ learners' under ONE WORD ONLY takes 'independent'; 'more independent' is a true hearing and an illegal length.",
            note: "Limits cut true words too.",
            domain: "study",
          },
          {
            english: "A date gap after 'in' is answered 'the 14th of June' where the limit allows one word and one number — the legal form depends on what the sentence already prints around the gap.",
            note: "Read what the sentence already prints.",
            domain: "exam",
          },
          {
            english: "The check window rereads every completed sentence in the head; two that 'sound wrong' turn out to hold singulars where plurals were dictated — syntax caught what memory dropped.",
            note: "The sentence is its own error detector.",
            domain: "work",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Sentence traps corrected",
        items: [
          {
            wrong: "I read the sentences while the audio plays, one eye on each.",
            right: "Sign every gap's contract during the introduction; listen with both ears and no reading.",
            reason: "Split attention misses the one lightly-reworded line each sentence keys to, and that line passes exactly once.",
          },
          {
            wrong: "The sentence's own words can fill its gap if they sound right.",
            right: "Only the recording's words fill the gap; the sentence's words are the frame, not the answer.",
            reason: "Sentences are contracts written in paraphrase — their vocabulary hides the answer's place while the audio supplies its content.",
          },
          {
            wrong: "Sentence completion is form completion with longer labels.",
            right: "Forms want data — names, figures, codes; sentences want whatever their syntax lacks, from adjectives to bare verbs.",
            reason: "Treating every gap as a data gap leaves verbs and adjectives unpredicted, and unpredicted slots are missed slots.",
          },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the full sentence set in order; sign each gap's contract — part of speech plus likely content — and note the limit."],
          ["While the clock runs", "Recognise each sentence's reworded line when it arrives; capture the recording's word in the slot's form."],
          ["If you are stuck", "Move to the next sentence — the set runs in the recording's order, and a lost line does not return."],
          ["Final minutes", "Reread every completed sentence for grammar, spelling and limit; wrong-sounding sentences are re-examined first."],
        ],
      },
      {
        type: "summary",
        points: [
          "Each sentence is a pre-listening contract: its syntax fixes the gap's word class and shape.",
          "Sentences lightly paraphrase the recording — recognise your line by meaning, then wait for the slot.",
          "Capture the recording's exact words, adjusted only to the slot's grammatical form.",
          "The sentence set runs in the recording's order; sentence boundaries are the audio's turning points.",
          "Syntax is the built-in error detector: a completed sentence that reads wrong usually is wrong.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three items from the lessons before this one.",
        items: [
          {
            question: "What does a form's label predict that a sentence's syntax also predicts?",
            options: ["The gap's content type and word class", "The exact answer word", "The speaker's opinion"],
            correctIndex: 0,
            explanation: "Both layouts narrow the gap's shape in advance — labels by content type, sentences by grammatical slot.",
            from: "Form completion in depth",
          },
          {
            question: "A sentence gap follows 'must'. What word class does the contract sign for?",
            options: ["A bare verb", "A noun", "An adverb"],
            correctIndex: 0,
            explanation: "Modals take infinitive verbs without 'to', so the slot contracts for a bare verb and refuses gerunds.",
            from: "Predicting answers",
          },
          {
            question: "Where do answers for sentence gaps come from?",
            options: ["The recording's exact words", "The sentence's own vocabulary", "A blend of both"],
            correctIndex: 0,
            explanation: "The sentence frames the answer; the recording words it — exactly as in every completion family.",
            from: "Recognising synonyms",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "listen-answer",
        difficulty: "easy",
        skill: "listening",
        prompt: "Listen to the tutor, then complete the sentence.",
        hints: ["The contract wants a quantity of months, not a calendar point."],
        audioText:
          "Tutor: The marketing placement runs from January — you're with the firm six months in total.",
        question: "Sentence 11 (ONE WORD AND/OR A NUMBER): The placement lasts for ____ months.",
        acceptedAnswers: ["6", "six"],
        keywords: ["6", "six"],
        feedback: fb(
          "6 (six).",
          "The tutor gives the duration as 'six months in total', and the contract signed a number for the slot before 'months'. January names the start, not the length, and the check window confirms the digit reads cleanly inside the sentence.",
          "January is the start month and fills no slot the sentence printed.",
        ),
        tags: ["ielts", "sentences"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "easy",
        skill: "listening",
        prompt: "Complete the contract rule.",
        hints: ["What form follows a modal verb?"],
        sentence: "A gap straight after 'must' signs a contract for a ____ verb.",
        acceptedAnswers: ["bare", "base", "infinitive"],
        feedback: fb(
          "A bare (base) verb.",
          "Modals are followed by the infinitive without 'to', so the slot accepts 'submit', 'reserve' or 'attend' and refuses 'submitting'. Signing the contract before the audio means the right shape is already expected when it is spoken.",
          "'To submit' and 'submitting' both break the contract the modal imposed, however well they were heard.",
        ),
        tags: ["ielts", "sentences"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "listening",
        prompt:
          "Sentence: 'The tutor describes the office as ____.' Audio: 'Cramped, honestly, but you'll learn more there in a week than in a term of lectures.' What fills the gap?",
        hints: ["What is being described, and by which words?"],
        options: [
          { id: "a", text: "Cramped — the tutor's own adjective, which fits the slot after 'as'." },
          { id: "b", text: "Educational — the second half of the tutor's answer, which is the tutor's real opinion." },
          { id: "c", text: "A week — the comparison the tutor makes about learning speed." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Cramped — the tutor's own adjective, which fits the slot after 'as'.",
          "The slot after 'describes … as' wants the descriptive word the tutor attached to the office itself, and 'cramped' is that word. The learning praise is about the experience of the placement, not the room, so the contract refuses it.",
          "Option (b) swaps the office's description for the placement's praise, and option (c) is a noun from a comparison the gap never asked about.",
        ),
        tags: ["ielts", "sentences"],
      }),
      ex({
        type: "listen-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "Listen to the requirement, then complete the sentence.",
        hints: [],
        audioText:
          "Tutor: Before you start, the company wants a short proposal from you — one page is plenty, just so your supervisor knows what you plan to attempt.",
        question: "Sentence 12 (ONE WORD AND/OR A NUMBER): Students must submit a ____ before starting.",
        acceptedAnswers: ["proposal"],
        keywords: ["proposal"],
        feedback: fb(
          "Proposal.",
          "The sentence's frame 'submit a ____' wants a singular document noun, and the recording names it directly: 'a short proposal from you'. The one-page detail decorates the requirement rather than naming it, and the supervisor belongs to the proposal's purpose.",
          "'Page' answers a length question nobody printed, and 'supervisor' fills a role the sentence never gapped.",
        ),
        tags: ["ielts", "sentences"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "listening",
        prompt: "One phrase: what does a completed sentence act as in the check window?",
        hints: [],
        question: "In the check window, what does rereading a completed sentence act as?",
        acceptedAnswers: ["an error detector", "error detector", "its own error detector", "a self-check"],
        keywords: ["error", "detector", "check"],
        feedback: fb(
          "An error detector — syntax grades the capture.",
          "A filled sentence that reads ungrammatically usually holds a wrong word class or form, and rereading catches what hearing missed. The sentence set is the only family that ships with its own marking preview built into the page.",
          "Spelling-only checks miss the class-and-form errors that syntax exposes instantly.",
        ),
        tags: ["ielts", "sentences"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Read the case, then answer.",
        hints: [],
        passageTitle: "The wrong side of the bridge",
        passage:
          "Sentence: 'The gallery charges a ____ on weekends.' Recording: 'There's a small supplement on Saturdays and Sundays — it's included in the online price.' A candidate writes 'charge' because the sentence prints it.",
        question: "Why does 'charge' fail, and what succeeds?",
        options: [
          { id: "a", text: "'Charge' succeeds because the sentence prints it and the meaning matches." },
          { id: "b", text: "'Charge' is the sentence's own framing word; the keyed answer is 'supplement', the recording's word for the weekend cost." },
          { id: "c", text: "'Small' succeeds because it is the first adjective in the recording's line." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'Charge' is the sentence's own framing word; the keyed answer is 'supplement', the recording's word for the weekend cost.",
          "The gap is keyed to the recording's vocabulary: 'supplement' is what the audio calls the weekend cost, while 'charge' is the sentence's paraphrase of it. The sentence frames; the recording words — the bridge runs one way only.",
          "Option (a) takes the frame's word as the answer — the fluency trap — and option (c) keys an adjective to a noun slot the contract never opened.",
        ),
        tags: ["ielts", "sentences"],
      }),
    ],
    homework: [
      "Write five gapped sentences over any short transcript — one noun slot, one verb slot, one adjective slot, one number slot, one date slot — and sign each contract before listening once.",
      "In the check window, reread all five completed sentences in your head and mark any that sound grammatically off; verify those against the transcript.",
    ],
  },
];
