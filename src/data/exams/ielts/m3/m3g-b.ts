/**
 * Module 3G chapter B — General Training Reading (PROMPT 45, Part C).
 *
 * The last three GT lessons: workplace documents, everyday informational
 * texts, and the longer Section 3 passages.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gtLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-greading-workplace",
    title: "Section 2: workplace documents",
    description:
      "Policies, handbooks and entitlements: the modal-verb method — must, may, only, within — that extracts obligations from staff documents.",
    objectives: [
      "extract obligations, entitlements and procedures from policy documents",
      "apply the modal-verb method: the modals are the content",
      "answer entitlement questions from figures with their conditions",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "A workplace document is a machine for distributing permission: who must do what, who may do what, and what happens when they don't. The grammar that runs the machine is the modal verb — must, may, can, should — plus its bouncer, 'only', and its clock, 'within'. Reading policies for IELTS is reading the modals: underline them on the first pass, and half the questions are answered before they are asked.",
        beforeYouStart: [
          "You can extract conditions from instructions.",
          "You know Section 2's purpose: obligation extraction.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "GT Reading — Section 2's workplace documents: policies, handbooks, agreements"],
          ["Task & question types", "TRUE/FALSE/NOT GIVEN, completion and MCQ items on entitlements and duties"],
          ["What is assessed", "Extracting detailed factual information about rules and conditions"],
          ["Why this matters", "Policy questions are modal questions — candidates who hunt the modals answer in seconds"],
        ],
      },
      { type: "heading", text: "The modal-verb method" },
      {
        type: "steps",
        title: "Reading a policy in three moves",
        steps: [
          { title: "Move one: underline every modal on the first pass", text: "Must, may, can, should, will — plus 'only', 'within', 'up to' and 'no longer than'. These words ARE the document's content, and underlining them builds the answer key as you read.", examples: [{ english: "'You may carry up to five unused days' — 'may' (permission) + 'up to' (cap): one underline, two facts.", note: "Modals are the content." }] },
          { title: "Move two: attach each figure to its modal", text: "Policies run on numbers with conditions: 25 days plus public holidays, three weeks' notice, two colleagues off at a time, seven calendar days self-certified. The figure without its modal is half a fact — and questions test the other half.", examples: [{ english: "'Full pay for the first ten working days in any rolling year' — ten, working (not calendar), rolling (not per illness): three conditions on one figure.", note: "Conditions outnumber figures." }] },
          { title: "Move three: note the procedures and the protections", text: "Policies end with process ('telephone your manager before 9 am') and reassurance ('your job is protected'). Both feed questions: the procedure's deadline and the protection's scope are classic completion and verdict material.", examples: [{ english: "'A phased-return meeting with HR — a conversation, not an assessment' — the meeting's nature is a definition the MCQ will paraphrase.", note: "Reassurances are content too." }] },
        ],
      },
      {
        type: "grammar-rule",
        title: "The modal ladder of a policy",
        rule: "Policy modals rank by force: 'must' is obligation, 'may/may not' is permission and its denial, 'should' is expectation, 'only' restricts whatever it touches, and 'within/up to/no longer than' set clocks and caps. A statement that upgrades a 'may' to a 'must' — or a cap to a right — contradicts the policy.",
        explanation:
          "The ladder is the marking key in miniature: policy statements are engineered by shifting items up or down it, and reading the shift is reading the answer.",
        examples: [
          { english: "'Members may book up to seven days ahead' becomes a statement 'members must book seven days in advance' — permission upgraded to obligation, cap upgraded to duty: FALSE twice over.", translation: "El verbo modal es la nota: cambiarlo es cambiar la respuesta." },
        ],
        exceptions: ["'Only' can restrict either side of its clause — 'only two colleagues off' restricts the people, 'booked only online' restricts the method. Read what sits beside it."],
      },
      {
        type: "example",
        title: "Policies under the questions",
        items: [
          { english: "'Part-time staff receive leave on a pro-rata basis' — the statement 'part-timers get the same 25 days' is FALSE by one clause: pro-rata is the policy's arithmetic.", note: "Entitlement arithmetic is clause arithmetic.", domain: "exam" },
          { english: "'Anything above five is lost' — the statement 'unused leave above five expires with the leave year' is TRUE through the lost-paraphrase.", note: "Loss is expiry in policy dialect.", domain: "exam" },
          { english: "'A text message is accepted only where speaking is genuinely impossible' — the statement 'texting is acceptable in all circumstances' is FALSE by the 'only' gate.", note: "The bouncer earns its keep.", domain: "exam" },
          { english: "Warehouse induction: 'headphones are banned on the floor entirely' — the statement about low-volume permission is FALSE by one adverb.", note: "'Entirely' closes every door the statement reopens.", domain: "exam" },
          { english: "A learner underlines the modals in one library policy and answers its questions from the underlines alone.", note: "The method, tested to its extreme.", domain: "study" },
          { english: "'No one here has ever been in trouble for reporting one' — the statement 'workers have been disciplined for reporting near-misses' is FALSE by the closing reassurance.", note: "Culture statements are content statements.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Workplace mistakes corrected",
        items: [
          { wrong: "Policies are read for their general spirit.", right: "Policies are read for their modals and figures: the spirit is decor, the conditions are the key.", reason: "Every policy question is engineered on a modal shift or a figure's condition — spirit-reading answers both wrongly." },
          { wrong: "A figure is a figure: ten days is ten days.", right: "Attach the conditions: working days versus calendar days, rolling year versus per illness — the figure's modifiers are the question.", reason: "Adjacent figures carry different conditions, and policies are the condition-densest texts on the paper." },
          { wrong: "The reassurances at the end are politeness.", right: "Closing protections ('your job is protected') are content: statements are built from them, and they flip FALSEs.", reason: "The workshop mines exactly the lines browsers skip." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Decide to underline: modals, 'only', 'within', 'up to' — the document's answer key."],
          ["While the clock runs", "Attach figures to their conditions; note procedures' deadlines and protections' scope."],
          ["If you are stuck", "Re-read the underlines around the question's topic — the modal shift is usually visible on sight."],
          ["Final minutes", "Spot-check entitlement answers against the underline list; blanks take the condition's nearest figure."],
        ],
      },
      {
        type: "summary",
        points: [
          "Workplace documents are permission machines: the modals — must, may, only, within — are the content.",
          "Underline modals on the first pass: the underline list is the answer key.",
          "Figures travel with their conditions: working versus calendar, rolling versus per-incident, pro-rata versus flat.",
          "Procedures' deadlines and protections' scope feed completions and verdicts alike.",
          "Policy statements are engineered by modal shifts — reading the shift is reading the answer.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which qualifier family did the close read's third job audit?", options: ["All, some, only, mainly, rarely", "Dates and figures only", "Adjectives of tone"], correctIndex: 0, explanation: "The qualifier audit is the policy reader's engine — 'only' and its cousins carry the verdicts.", from: "Intensive reading" },
          { question: "What do gates and bans share with policy conditions?", options: ["Both are quiet qualifications that decide questions", "Both are decorative", "Both appear only in GT"], correctIndex: 0, explanation: "Gates, bans, modals and caps are one species: qualifications that carry answers while headlines carry topics.", from: "Section 2: following instructions" },
          { question: "Which scan targets do policies supply in abundance?", options: ["Figures with units and time words", "Capitalised surnames only", "Italicised titles"], correctIndex: 0, explanation: "Days, weeks, notice periods and caps — policies are figure-dense, and every figure wears its conditions.", from: "Scanning" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What carries the content of a workplace policy?",
        hints: ["Which words distribute the permissions?"],
        options: [
          { id: "a", text: "The topic sentences of its paragraphs." },
          { id: "b", text: "The modal verbs and their restrictors — must, may, only, within — with figures attached to their conditions." },
          { id: "c", text: "The document's title and headings." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The modal verbs and their restrictors — must, may, only, within — with figures attached to their conditions.",
          "Policies are permission machines: the modals run the machine, the restrictors police it, and the figures wear their conditions — the underline list is the answer key.",
          "(a) and (c) describe the document's furniture, not its law.",
        ),
        tags: ["greading", "workplace", "modals"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the modals and the figure's conditions.",
        hints: ["Attach the figure to its conditions before deciding."],
        passageTitle: "Policy drill",
        passage: "Study leave is granted for one course per academic year, up to five working days, and only where the course is job-related. Attendance at the course's final assessment is required; failing to attend converts the leave to unpaid time, however good the reason.",
        question: "Statement: 'Employees may take five days' paid study leave each year for any course they choose.' — TRUE, FALSE or NOT GIVEN?",
        options: [
          { id: "a", text: "TRUE — five working days of study leave exists in the policy." },
          { id: "b", text: "FALSE — the cap is real but the conditions contradict the statement: the leave applies to one job-related course, not any course." },
          { id: "c", text: "NOT GIVEN — the policy never mentions courses." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "FALSE — the cap is real but the conditions contradict the statement: the leave applies to one job-related course, not any course.",
          "The figure (five working days) is printed, but its conditions — 'one course per academic year' and 'only where job-related' — contradict the statement's 'any course they choose'. The underline list catches it on sight.",
          "(a) counts the figure and drops the conditions; (c) denies a policy the statement plainly tests.",
        ),
        tags: ["greading", "workplace", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A policy reads: 'A text message is accepted only where speaking is genuinely impossible.' A statement reads: 'Reporting sickness by text is acceptable in all circumstances.' The verdict is…",
        hints: ["What does 'only' do to the statement's 'all'?"],
        options: [
          { id: "a", text: "TRUE — texting is accepted." },
          { id: "b", text: "FALSE — 'only where genuinely impossible' restricts texting to a narrow case; 'all circumstances' removes the restriction the policy printed." },
          { id: "c", text: "NOT GIVEN — the policy gives no contact rules." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "FALSE — 'only where genuinely impossible' restricts texting to a narrow case; 'all circumstances' removes the restriction the policy printed.",
          "The bouncer 'only' holds the door for a narrow case, and the statement's 'all' tries to take the door off its hinges — a modal shift engineered exactly as the ladder teaches.",
          "(a) reads the permission and drops its gate; (c) denies the contact rule the policy prints.",
        ),
        tags: ["greading", "workplace", "only"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. State the modal-shift mechanism.",
        question: "In one sentence: how are policy statements engineered, and what does reading the shift mean?",
        acceptedAnswers: ["statements are built by shifting items up or down the modal ladder — permission to obligation, cap to right — and reading the shift is reading the answer", "policy distractors upgrade or downgrade modals (may to must, cap to right); spotting the shift decides the verdict", "by moving claims along the modal ladder — and the shift, once seen, is the verdict", "statements shift modals up or down the ladder; the visible shift is the answer"],
        keywords: ["shift", "ladder", "modal"],
        hints: [],
        feedback: fb(
          "Statements are built by shifting items up or down the modal ladder — permission to obligation, cap to right — and reading the shift is reading the answer.",
          "The ladder is the workshop's own tool: every FALSE policy statement is a shift, and the underline list makes shifts visible on sight.",
          "Answers without the ladder have the mechanism without its unit of analysis.",
        ),
        tags: ["greading", "workplace", "ladder"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A policy closes: 'During any adjustment period arranged with occupational health, your job is protected.' A statement reads: 'Employees on adjusted duties are reassigned to another department.' The verdict is…",
        hints: [],
        options: [
          { id: "a", text: "TRUE — adjusted duties mean reassignment." },
          { id: "b", text: "FALSE — the policy protects the existing job; reassignment appears nowhere, and protection contradicts removal." },
          { id: "c", text: "NOT GIVEN — the policy says nothing about adjusted duties." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "FALSE — the policy protects the existing job; reassignment appears nowhere, and protection contradicts removal.",
          "The closing reassurance is content: 'your job is protected' cannot stand beside 'reassigned to another department' — a located contradiction from the policy's most-skipped lines.",
          "(a) invents a mechanism the policy never printed; (c) denies the reassurance its plain words.",
        ),
        tags: ["greading", "workplace", "protections"],
      }),
    ],
    homework: [
      "Underline every modal, 'only', 'within' and 'up to' in one library policy, then answer its questions from the underline list alone — grade the difference.",
      "Take any real staff policy (a gym's terms, an app's conditions) and write one modal-shift statement for it, FALSE by exactly one rung of the ladder.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-greading-informational",
    title: "Everyday informational texts",
    description:
      "Leaflets, guides and web pages: the mixed-format reading of real-world information — hours, prices, rules and the multi-text sets Section 1–2 print.",
    objectives: [
      "navigate mixed-format informational texts: headings, boxes, bullet lists",
      "extract hours, prices and rules with their exceptions",
      "handle multi-text sets where one question spans several blocks",
    ],
    minutes: 11,
    blocks: [
      {
        type: "lesson-intro",
        text: "Real-world information rarely arrives as paragraphs: it arrives as leaflets — a heading, some boxed hours, a bulleted price list, a rules paragraph in smaller type — and often as SETS of such texts, each block a different document about the same place or service. The method is format-aware reading: use each format's natural anchors (headings, boxes, bullets) as the scan targets they were designed to be.",
        beforeYouStart: [
          "You can extract conditions from notices and advertisements.",
          "You can anchor hunts on printed cells and labels.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "GT Reading — Sections 1 and 2's leaflets, guides and web-page-style texts"],
          ["Task & question types", "Table completion, verdict tasks, MCQ and matching items across multi-text sets"],
          ["What is assessed", "Navigating reorganised, real-world information formats at speed"],
          ["Why this matters", "The format's anchors — headings, boxes, bullets — are designed for scanning; using them is the whole method"],
        ],
      },
      { type: "heading", text: "Reading by format" },
      {
        type: "steps",
        title: "Format-aware moves",
        steps: [
          { title: "Move one: read the format map — headings, boxes, bullets", text: "Before reading words, read shapes: which block holds hours, which holds prices, which holds rules. The layout is the text's own index, printed before any content.", examples: [{ english: "A visitor guide with a heading ('Welcome'), a boxed price list, a rules paragraph and a ferry notice: four blocks, four question territories.", note: "The map precedes the reading." }] },
          { title: "Move two: harvest each block's facts with their exceptions", text: "Hours carry seasons ('October to March'), prices carry qualifiers ('with a paying adult'), rules carry halves ('on the cliff path but not on the beach'). Harvest fact-plus-exception as one unit.", examples: [{ english: "'Dogs on leads are welcome on the cliff path but not on the beach' — one rule, two halves, and the question will test the half you skipped.", note: "Half-permissions are the type's signature." }] },
          { title: "Move three: span the set when questions do", text: "Multi-text sets print questions that cross blocks — the café's closing time against the park's, the film's schedule against the ferry's. When a question names two things, expect two blocks and two harvests.", examples: [{ english: "'What rule applies to dogs on the ferry?' — the dog rules live in the park block AND the ferry block, and the question asks about the ferry's.", note: "Same subject, different blocks, different rules." }] },
        ],
      },
      {
        type: "warning",
        title: "The half-permission trap",
        text: "Informational texts love permissions with an exception: dogs welcome here but not there, entry free with one condition, the film included in one ticket but not another. The permitted half is bait; the excluded half is the answer. Never answer a rule question from the half you read first.",
      },
      {
        type: "example",
        title: "Leaflets under the questions",
        items: [
          { english: "Bramble guide: 'children under 12 free with a paying adult' — the table's free cell takes 'free', and the qualifier prints in the table's own condition column.", note: "Tables and leaflets share cell logic.", domain: "exam" },
          { english: "'The café serves hot food until 4 pm' while the park closes at 5 or 7 — the question comparing kitchen and gate times spans two blocks and two harvests.", note: "Comparative questions are span questions.", domain: "exam" },
          { english: "'Bicycles travel free. Dogs must wear a muzzle on board' — the ferry's animal-and-object rules sit in neighbouring sentences, and mixing them is the designed error.", note: "Adjacent rules, different subjects.", domain: "exam" },
          { english: "A candidate answers the film question with the ferry's schedule — both print times, and the format map was skipped.", note: "Block discipline is subject discipline.", domain: "exam" },
          { english: "A learner takes any leaflet and writes its four blocks' territories on one line — hours, prices, rules, extra — before reading.", note: "The map, trained on real paper.", domain: "study" },
          { english: "'Last sailing back is at 6 pm (5 pm, November to February)' — the seasonal bracket is the exception the winter question tests.", note: "Seasons are exceptions in brackets.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Informational mistakes corrected",
        items: [
          { wrong: "I read informational texts top to bottom like passages.", right: "Read the format map first: headings, boxes and bullets index the content, and questions name their block before you need to read it.", reason: "The layout is a designed index — ignoring it pays paragraph prices for boxed facts." },
          { wrong: "A permission is a permission.", right: "Harvest fact-plus-exception as one unit: half-permissions are this type's signature trap.", reason: "The excluded half answers the question as often as the permitted half baits it." },
          { wrong: "Questions about one subject live in one block.", right: "Multi-text sets repeat subjects across blocks with different rules — span the set when the question spans it.", reason: "Block discipline (which document am I in?) is the type's location skill." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the format map: which block holds hours, prices, rules and extras."],
          ["While the clock runs", "Harvest fact-plus-exception; check the block's own territory before answering span questions."],
          ["If you are stuck", "Ask which block the question's subject belongs to — the wrong block is the usual miss."],
          ["Final minutes", "Span questions re-check both blocks' harvests, not the more memorable one."],
        ],
      },
      {
        type: "summary",
        points: [
          "Informational texts arrive as formats — headings, boxes, bullets — that index their own content.",
          "Read the format map before the words: each block's territory names its questions.",
          "Harvest fact-plus-exception as one unit; half-permissions are the type's signature trap.",
          "Multi-text sets repeat subjects across blocks with different rules: span the set when questions do.",
          "Seasonal brackets and condition columns are exceptions printed as design — read them as content.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which lesson's anchors do leaflet boxes and headings resemble?", options: ["Note completion's labels", "Verdict blocks' statements", "The writer's purpose options"], correctIndex: 0, explanation: "Headings and boxes are labels — pre-attached scan targets exactly like note architecture.", from: "Note completion" },
          { question: "What does the notice lesson call the quiet line under a loud permission?", options: ["The exception clause", "The headline", "The signature"], correctIndex: 0, explanation: "Half-permissions are exception clauses in everyday clothing — the anatomy transfers across Section 1's types.", from: "Section 1: reading notices" },
          { question: "A question comparing café and gate closing times needs what?", options: ["One harvest from either block", "Two harvests from two blocks — span questions span", "A fresh skim of the whole set"], correctIndex: 1, explanation: "Comparative questions are span questions: each comparand lives in its own block with its own conditions.", from: "Reading by format" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What indexes an informational text's content?",
        hints: ["Look at the page, not the words."],
        options: [
          { id: "a", text: "Its paragraph order." },
          { id: "b", text: "Its format — headings, boxes and bullet lists are the text's own index." },
          { id: "c", text: "Its title only." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Its format — headings, boxes and bullet lists are the text's own index.",
          "Leaflets are designed for hurried readers: the layout tells you where hours, prices and rules live before a word is read, and using that index is the whole method.",
          "(a) is passage logic on a non-passage; (c) is one anchor where the format supplies many.",
        ),
        tags: ["greading", "informational", "format"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Harvest the fact with its exception.",
        hints: ["One rule, two halves — which half does the question ask for?"],
        passageTitle: "Leaflet drill",
        passage: "GARDEN OPENING: The walled garden opens at 10 am daily; the glasshouses, which need a steward present, open at noon on weekdays and 11 am at weekends. The tea room serves until half past four, an hour before the gates close.",
        question: "A visitor arrives at 11.30 am on a Tuesday. Which parts of the garden can they enter immediately?",
        options: [
          { id: "a", text: "The walled garden and the glasshouses — both are 'the garden'." },
          { id: "b", text: "The walled garden only — the glasshouses open at noon on weekdays, and Tuesday is a weekday." },
          { id: "c", text: "Nothing until noon." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The walled garden only — the glasshouses open at noon on weekdays, and Tuesday is a weekday.",
          "The glasshouse rule is a half-permission with a weekday/weekend split: at 11.30 on a Tuesday, the glasshouses are still shut for thirty minutes, while the walled garden opened at ten.",
          "(a) merges the two rules; (c) over-blocks — the walled garden opened hours earlier.",
        ),
        tags: ["greading", "informational", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A question asks about dogs on the ferry. The set's park block says 'dogs on leads welcome on the cliff path but not on the beach'; the ferry block says 'dogs must wear a muzzle on board'. Where is the answer?",
        hints: ["Block discipline."],
        options: [
          { id: "a", text: "The park block — it has the fuller dog rules." },
          { id: "b", text: "The ferry block — the question names the ferry, and each block's rules govern its own territory." },
          { id: "c", text: "Both blocks, averaged." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The ferry block — the question names the ferry, and each block's rules govern its own territory.",
          "Multi-text sets repeat subjects with different rules: the ferry's muzzle rule answers the ferry question, and the park's lead rules are another block's business — block discipline is the span skill.",
          "(a) answers the wrong block; (c) averages rules that were never meant to merge.",
        ),
        tags: ["greading", "informational", "blocks"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. What is a half-permission, and how is it harvested?",
        question: "One short sentence defining the half-permission and its harvest rule.",
        acceptedAnswers: ["a permission with an exception (welcome here but not there) — harvested as one unit, both halves together", "a permission whose excluded half is the trap — harvest fact and exception as a single fact", "welcome-here-not-there rules: take both halves at once, never the first alone", "permission plus exclusion, read as one rule in two halves"],
        keywords: ["permission", "exception", "halves"],
        hints: [],
        feedback: fb(
          "A permission with an exception (welcome here but not there) — harvested as one unit, both halves together.",
          "The type's signature trap is the first half read alone; the harvest rule makes the exception part of the fact, and the question then tests a unit you already own.",
          "Answers defining only the permission have met the trap and adopted it.",
        ),
        tags: ["greading", "informational"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A leaflet prints: 'Last sailing back is at 6 pm (5 pm, November to February).' A question asks when the last sailing back is in December. What does the seasonal bracket make this question?",
        hints: [],
        options: [
          { id: "a", text: "A trick — December is not mentioned." },
          { id: "b", text: "An exception question: December falls inside November-to-February, so the answer is the bracket's 5 pm, not the headline's 6 pm." },
          { id: "c", text: "A NOT GIVEN — the bracket cancels the rule." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "An exception question: December falls inside November-to-February, so the answer is the bracket's 5 pm, not the headline's 6 pm.",
          "Seasonal brackets are exceptions printed as design: the date logic (which season am I in?) selects the half of the rule that answers, and the headline half is the bait.",
          "(a) treats calendar reasoning as a trick; (c) turns an exception into a silence.",
        ),
        tags: ["greading", "informational", "seasons"],
      }),
    ],
    homework: [
      "Take the library's visitor-guide item and write its blocks' territories on one line before answering — then check how many questions your map placed.",
      "Collect one real leaflet this week and write its half-permissions as one-line rules with both halves.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-greading-longer",
    title: "Section 3: longer general-interest passages",
    description:
      "The GT finale: one long feature article with the full Academic protocol — skim, headings last, verdict discipline — on friendlier material.",
    objectives: [
      "run the full reading protocol on a Section 3 feature: skim, locate, close-read",
      "apply headings and summary methods to magazine-style material",
      "hold the borrowed minutes from Sections 1–2 through the hardest GT block",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Section 3 is where GT stops being a lookup test and becomes a reading test: one passage of six hundred to nine hundred words, written like a magazine feature, carrying the full question bank — headings, verdicts, summaries, the lot. The method is Module 3A's method, unchanged: skim the map, locate by order, close-read the claims. Only the register is friendlier, and the stakes are the banked minutes from the early sections.",
        beforeYouStart: [
          "You have the thirteen type methods from Module 3A.",
          "You can budget a full passage from the time lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "GT Reading — Section 3's single long general-interest passage"],
          ["Task & question types", "The full bank: headings, verdicts, matching, summaries and completions on feature prose"],
          ["What is assessed", "Extended comprehension: argument, tone, inference on general-interest material"],
          ["Why this matters", "Section 3 carries the paper's hardest GT items, funded by the minutes Sections 1–2 banked"],
        ],
      },
      { type: "heading", text: "The full protocol, on gentler ground" },
      {
        type: "steps",
        title: "Section 3, stage by stage",
        steps: [
          { title: "Stage one: the skim, ninety seconds", text: "Title at full attention, first sentences properly, closers on concessions: the feature's arc — history, argument or profile — falls out in a paragraph map exactly as Academic passages' do.", examples: [{ english: "A lighthouse history skims into 'purpose / antiquity / economics / engineering / optics / keepers / afterlife' — seven paragraphs, seven notes.", note: "Features map like academic prose." }] },
          { title: "Stage two: locating tasks first, headings last", text: "Work the completions, verdicts and matchings first — they build the map's detail — and save the headings and title items for the end, when the map is fully drawn. The triage rule is variant-proof.", examples: [{ english: "A GT summary and verdict block answered in twelve minutes; the headings block then costs four, reading a map it helped draw.", note: "Global last, always." }] },
          { title: "Stage three: the borrowed minutes are working minutes", text: "The minutes Sections 1–2 saved arrive here as checking time: the sweep — blanks, limits, spelling — runs better on Section 3 than anywhere, because feature answers are copied words like all the rest.", examples: [{ english: "Eight banked minutes become a full sweep plus a re-check of the two hardest verdict boundaries.", note: "Banked minutes are for the sweep, not for a slow start." }] },
        ],
      },
      {
        type: "text",
        text: "What changes at Section 3's register: features quote people more, joke more and wander more than academic prose. Two cautions follow. Quotes are reported voices — the opinion lesson's attribution frames apply exactly as in Academic passages. And the wry aside — the joke in parentheses — is tone content: an attitude question may hang entirely on the sentence you were tempted to skip as decoration.",
      },
      {
        type: "example",
        title: "Section 3 passages, worked",
        items: [
          { english: "Lighthouses: the headings block falls from the skim map — 'Fire and wonder' for antiquity, 'Glass that multiplied the flame' for optics — pure paraphrase matching on claim-notes.", note: "The map answered headings before the block opened.", domain: "exam" },
          { english: "Denim: the origins paragraph hosts two features in one paragraph — Nîmes for the cloth, Genoa for the trousers — and the features block separates them by frame.", note: "Features logic, GT venue.", domain: "exam" },
          { english: "A verdict statement about sandblasting bans — 'banned in several countries' against the statement's 'every country' — is the qualifier audit on feature ground.", note: "Boundary discipline is register-independent.", domain: "exam" },
          { english: "A candidate reads the lighthouse passage's postcard opening and skips the wry closing deal — and loses the attitude item that lived on 'the best deal the coast has ever offered'.", note: "The aside was the answer's home.", domain: "exam" },
          { english: "A learner answers one GT Section 3 with the Academic protocol end-to-end and times each stage: skim, locate, headings, sweep.", note: "Protocol timing, measured once, trusted after.", domain: "study" },
          { english: "'Its cost was not measured in research grants… but in children' — the reading-wars verdict sentence works identically in Academic and GT venues; the method does not know the variant.", note: "One protocol, two papers.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Section 3 mistakes corrected",
        items: [
          { wrong: "Section 3 is easy GT reading, so I skip the skim.", right: "Section 3 takes the full protocol: skim the map, locate by order, headings last — the register is friendlier, the method is identical.", reason: "Skipping the skim on the longest GT text re-pays its minute several times over, exactly as in Academic." },
          { wrong: "Quotes in features are the writer's voice.", right: "Quotes are reported voices: apply the attribution frames before answering any views question.", reason: "Features quote liberally — the four-voice inventory is more useful here, not less." },
          { wrong: "The jokes and asides are decoration to read past.", right: "Wry asides are tone content: attitude and purpose items hang on exactly the sentences browsers skip.", reason: "Feature writers put their stance in the aside; the test knows it." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Recite the protocol: skim, locate, global last, sweep — and note the banked minutes available."],
          ["While the clock runs", "Full method, feature register: map from openers, frames on quotes, close-read the asides."],
          ["If you are stuck", "Ask which Module 3A lesson owns the stuck item — every type has its method here too."],
          ["Final minutes", "The borrowed minutes fund the sweep: blanks, limits, spelling — then the boundary audit on marked verdicts."],
        ],
      },
      {
        type: "summary",
        points: [
          "Section 3 is the full Academic protocol on feature material: skim, locate, global last, sweep.",
          "The register is friendlier — more quotes, more humour, more wandering — but the method is unchanged.",
          "Quotes are reported voices: attribution frames apply exactly as in Academic passages.",
          "Wry asides are tone content: attitude and purpose items live on the sentences browsers skip.",
          "The banked minutes from Sections 1–2 are the sweep's budget, not a licence for a slow start.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "What did the GT structure lesson say Section 3 deserves?", options: ["About twenty-five minutes, funded by early speed", "Ten minutes, like Section 1", "The whole hour"], correctIndex: 0, explanation: "15/20/25: the long passage takes the largest block, paid for by Sections 1–2's banked minutes.", from: "Understanding the GT Reading paper" },
          { question: "Which frames decide a views question on a quoted feature?", options: ["Attribution frames — whose sentence is it?", "Paragraph length", "The quote's position"], correctIndex: 0, explanation: "Quotes are reported voices; the frame holds the view for its owner, exactly as the opinion lesson teaches.", from: "The writer's opinion" },
          { question: "Where do attitude items live in features?", options: ["In the wry asides browsers skip", "In the first paragraph only", "In the headline"], correctIndex: 0, explanation: "Feature writers put stance in the aside — the test builds attitude items on exactly those lines.", from: "Tone" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What method does a Section 3 passage take?",
        hints: ["One protocol, two papers."],
        options: [
          { id: "a", text: "The lookup method from Section 1." },
          { id: "b", text: "The full Academic protocol: skim the map, locate by order, global questions last, sweep to finish." },
          { id: "c", text: "Careful reading from top to bottom, then the questions." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The full Academic protocol: skim the map, locate by order, global questions last, sweep to finish.",
          "Section 3 is a passage in feature clothing: the register is friendlier, but the method — built in Module 3A — is variant-proof, and the borrowed minutes pay for its full run.",
          "(a) is Section 1's method; (c) is the GT defeat in its final form.",
        ),
        tags: ["greading", "section-3", "protocol"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the aside, then answer the tone item.",
        hints: ["The joke is the stance."],
        passageTitle: "Feature drill",
        passage: "The museum's new wing was delivered on time and on budget — a sentence curators repeat to visiting architects with the fondness of people describing a comet. Whether the comet returns, the ledgers do not say; the wing's heating bill alone has been described, privately, as a second construction project.",
        question: "What is the writer's tone toward the new wing, and which words carry it?",
        options: [
          { id: "a", text: "Enthusiastic — 'on time and on budget' is praise." },
          { id: "b", text: "Wry — the comet comparison ('fondness of people describing a comet') and the heating-bill joke undercut the official pride, carrying a gently ironic stance." },
          { id: "c", text: "Neutral — the passage only reports facts." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Wry — the comet comparison ('fondness of people describing a comet') and the heating-bill joke undercut the official pride, carrying a gently ironic stance.",
          "The aside is the attitude: the comet image and the 'second construction project' line are the tone instruments the quotable-line test demands — praise printed, then cooled by the sentence after it.",
          "(a) reads the bait; (c) denies two visible evaluative images.",
        ),
        tags: ["greading", "section-3", "tone"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A feature quotes a campaigner at length, then the writer's own sentence says 'the evidence is thinner than the advocacy'. A views statement reads: 'The writer accepts the campaigner's claim.' The verdict is…",
        hints: ["Frames before feelings."],
        options: [
          { id: "a", text: "YES — the quote is long and detailed." },
          { id: "b", text: "NO — the quote is a reported voice, and the writer's own sentence ('thinner than the advocacy') rejects it: a located rejection." },
          { id: "c", text: "NOT GIVEN — the writer expresses no view." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "NO — the quote is a reported voice, and the writer's own sentence ('thinner than the advocacy') rejects it: a located rejection.",
          "The attribution frame decides: the campaigner holds the claim, the writer's own sentence distances — and YES/NO logic scores the writer's stance, not the quote's length.",
          "(a) counts reporting; (c) denies a rejection printed in plain words.",
        ),
        tags: ["greading", "section-3", "attribution"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the two register cautions this lesson adds for Section 3.",
        question: "One short answer naming both cautions.",
        acceptedAnswers: ["quotes are reported voices needing attribution frames; wry asides are tone content, not decoration", "treat quotes as reported voices, and read the jokes as attitude content", "attribution on quotes; asides carry tone", "quotes need frames; jokes are answers' homes"],
        keywords: ["quotes", "asides"],
        hints: [],
        feedback: fb(
          "Quotes are reported voices needing attribution frames; wry asides are tone content, not decoration.",
          "The two cautions cover the feature register's whole difference: more voices (frames) and more humour (asides) — both handled by lessons you already own.",
          "Answers naming one caution have armed half the defence.",
        ),
        tags: ["greading", "section-3"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. You banked eight minutes in Sections 1–2 and arrive at Section 3 with thirty-three minutes. What is the banked time FOR, per this lesson?",
        hints: [],
        options: [
          { id: "a", text: "A slower skim — enjoy the feature." },
          { id: "b", text: "The protocol's full run with a funded sweep: blanks, limits, spelling and the boundary audit on marked verdicts." },
          { id: "c", text: "Re-reading Sections 1–2 to check the early answers." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The protocol's full run with a funded sweep: blanks, limits, spelling and the boundary audit on marked verdicts.",
          "Banked minutes are working minutes: the full method runs un-rushed, and the sweep — the paper's cheapest mark-recovery — receives the time Sections 1–2 saved.",
          "(a) spends the bank on comfort; (c) re-buys answers the sweep of the whole paper audits anyway.",
        ),
        tags: ["greading", "section-3", "budget"],
      }),
    ],
    homework: [
      "Run one library Section 3 passage end-to-end with the Academic protocol, timing each stage — skim, locate, headings, sweep — and compare with your Academic timings.",
      "Find one wry aside in any English feature article and write the attitude item it would carry, with its answer and its quotable line.",
    ],
  },
];
