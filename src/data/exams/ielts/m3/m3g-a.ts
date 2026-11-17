/**
 * Module 3G chapter A — General Training Reading (PROMPT 45, Part C).
 *
 * The first four of seven GT lessons: the GT paper itself, and the
 * Section 1–2 practical texts — notices, advertisements and instructions.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const gtLessonsA: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-greading-test",
    title: "Understanding the GT Reading paper",
    description:
      "Three sections of practical English, forty questions, sixty minutes: the GT structure, the 15/20/25 budget, and what the variant shares with Academic.",
    objectives: [
      "describe the three GT sections and their text types",
      "apply the GT time budget: fast early, slow at the end",
      "state what transfers from the Academic technique lessons and what changes",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "The General Training Reading paper keeps the Academic clock and question bank but reorganises everything else: Section 1 gives you two or three short practical texts, Section 2 two work-related documents, and Section 3 one longer general-interest passage. Forty questions in sixty minutes — and the winning budget is the reverse of cautious: speed early, patience late. This lesson installs the structure and the budget that make GT a pacing game before it is a comprehension game.",
        beforeYouStart: [
          "You know the Academic paper's shape from Module 3A's first lesson.",
          "You can scan for dates, prices and capitalised names.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "GT Reading — 3 sections, 40 questions, 60 minutes"],
          ["Task & question types", "The same thirteen-type bank as Academic, on practical and general-interest material"],
          ["What is assessed", "Survival English and workplace reading first, extended comprehension last"],
          ["Why this matters", "GT bands are won and lost on Sections 1–2 pacing: the most common failure is spending 25 minutes on short texts"],
        ],
      },
      { type: "heading", text: "The three sections" },
      {
        type: "table",
        title: "What each section holds",
        headers: ["Section", "Texts", "Reading purpose", "Typical questions"],
        rows: [
          ["1", "2–3 short texts: notices, advertisements, timetables", "Locate facts fast: prices, times, conditions", "Completion, TRUE/FALSE/NOT GIVEN, MCQ"],
          ["2", "2 work-related texts: policies, instructions, job descriptions", "Extract obligations, entitlements, procedures", "Completion, verdict tasks, matching"],
          ["3", "1 longer general-interest passage (magazine-style)", "Full comprehension: argument, tone, inference", "The full type bank, headings included"],
        ],
        caption: "Sections get longer and denser; the technique transfers, the pacing does not.",
      },
      {
        type: "steps",
        title: "The 15/20/25 budget",
        steps: [
          { title: "Section 1 in about fifteen minutes", text: "The short texts are lookup material: glance to identify each text, then work question-first. Every minute saved here is a minute Section 3 will spend on real comprehension.", examples: [{ english: "Four advertisements answered question-first in twelve minutes — eight minutes banked before Section 2 opens.", note: "Early speed is currency." }] },
          { title: "Section 2 in about twenty minutes", text: "Workplace documents are denser than notices but still purposeful: modal verbs (must, may, only) carry the content, and the questions test exactly them. Twenty minutes, then move.", examples: [{ english: "A holiday-and-sickness policy answered in nineteen minutes with the modal-verb discipline from the workplace lesson.", note: "Obligations are the content." }] },
          { title: "Section 3 in about twenty-five minutes", text: "The long passage behaves like an Academic passage: skim, then questions, with headings last. This is where the banked minutes pay.", examples: [{ english: "A lighthouse history with headings, verdicts and a summary — answered in the borrowed time the early sections saved.", note: "Patience late, on purpose." }] },
        ],
      },
      {
        type: "text",
        text: "What transfers from the Academic lessons: everything. The thirteen type methods, the skim-scan-close-read sequence, the paraphrase rule, the verdict boundary, the sweep — all of it was built for both variants. What changes is emphasis: GT Sections 1–2 reward aggressive question-first scanning, and GT Section 3 rewards the full Academic protocol on gentler material.",
      },
      {
        type: "example",
        title: "GT structure in practice",
        items: [
          { english: "Section 1 with four advertisements: a one-second glance each — guitar lessons, bicycle, dog walking, language exchange — then straight to the questions, which name the product.", note: "Identification, not reading.", domain: "exam" },
          { english: "Section 2 with an employee policy: the candidate underlines every 'must', 'only' and 'within' during the first pass — the questions' future answers, pre-marked.", note: "Modals are Section 2's signposts.", domain: "exam" },
          { english: "Section 3's lighthouses passage skimmed in ninety seconds, then answered with the Academic method — headings last.", note: "The full protocol, on friendlier material.", domain: "exam" },
          { english: "A candidate reads Section 1's notices 'properly' and arrives at Section 3 with eighteen minutes — the paper's most common GT defeat.", note: "The failure mode the budget exists to prevent.", domain: "exam" },
          { english: "A learner times each section of a GT simulation and writes the three clock times beside the score.", note: "Budget auditing, one line per mock.", domain: "study" },
          { english: "The same candidate meets a matching-information bank in Section 3 and applies the reuse licence exactly as the Academic lesson taught — the method is variant-proof.", note: "Technique transfers; only pacing changes.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "GT structure mistakes corrected",
        items: [
          { wrong: "GT is easier, so I can read everything carefully.", right: "GT is differently paced: Sections 1–2 are speed games that bank minutes for Section 3's real comprehension.", reason: "The 15/20/25 arithmetic fails completely under careful-everything reading." },
          { wrong: "The three sections are just Academic passages in disguise.", right: "Sections 1–2 are practical documents with different purposes — lookup and obligation extraction — and only Section 3 resembles an Academic passage.", reason: "Applying passage protocol to notices spends three minutes where a glance and a scan spend thirty seconds." },
          { wrong: "I will save time by skipping the rubrics on short texts.", right: "Rubrics carry scoring information everywhere: word limits on completions and the verdict family word are printed exactly as in Academic.", reason: "The types are identical; their instructions are too." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Recite the budget — 15/20/25 — and the sections' text types."],
          ["While the clock runs", "Question-first on Section 1; modal-marking on Section 2; full protocol on Section 3."],
          ["If you are stuck", "Name the section you are in and its purpose: lookup, obligation or comprehension — the purpose names the method."],
          ["Final minutes", "The sweep runs on all three sections: blanks, limits, spelling."],
        ],
      },
      {
        type: "summary",
        points: [
          "GT Reading: three sections, 40 questions, 60 minutes — same type bank, different material.",
          "The budget is 15/20/25: speed early banks minutes for Section 3's comprehension.",
          "Section 1 is lookup (glance, then question-first); Section 2 is obligation extraction (modal-marking); Section 3 is an Academic passage in friendlier clothes.",
          "Every Academic technique lesson transfers; only the pacing changes.",
          "The classic GT defeat is careful reading of short texts — the budget's whole purpose is to prevent it.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "What budget did the Academic time lesson teach, for comparison?", options: ["15/20/25", "18/18/20 plus a sweep", "20/20/20"], correctIndex: 1, explanation: "Academic runs 18/18/20 with a four-minute sweep; GT runs 15/20/25 because its early sections are cheaper.", from: "Reading time management" },
          { question: "Which lesson owns question-first scanning on short texts?", options: ["Scanning", "Skimming", "Note completion"], correctIndex: 0, explanation: "The scan's shape-hunting is Section 1's whole method — question first, then hunt the named fact.", from: "Scanning" },
          { question: "How does Section 3 behave?", options: ["Like a notice", "Like an Academic passage — full protocol, headings last", "Like a workplace policy"], correctIndex: 1, explanation: "Section 3 is a general-interest passage that takes the full Academic method, funded by the early sections' banked minutes.", from: "Understanding the reading test" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is the GT time budget taught in this lesson?",
        hints: ["Fast early, patient late."],
        options: [
          { id: "a", text: "20 / 20 / 20 — even shares." },
          { id: "b", text: "Roughly 15 / 20 / 25 — speed on the short sections banks time for the long passage." },
          { id: "c", text: "25 / 20 / 15 — careful start." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Roughly 15 / 20 / 25 — speed on the short sections banks time for the long passage.",
          "Section 1's notices are answered in minutes, Section 2's documents take their twenty, and Section 3 — the only real passage — receives the largest block, funded by the early speed.",
          "(a) ignores the sections' unequal weight; (c) spends the patience where the paper is cheapest.",
        ),
        tags: ["greading", "budget"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "What is Section 1's reading method?",
        hints: ["How long does a notice deserve?"],
        options: [
          { id: "a", text: "Read each notice carefully from top to bottom, then read the questions." },
          { id: "b", text: "Glance to identify each text, then work question-first: the questions name the product or notice, and the scan finds its facts." },
          { id: "c", text: "Skim the whole section as one long passage." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Glance to identify each text, then work question-first: the questions name the product or notice, and the scan finds its facts.",
          "Section 1 texts are lookup material: a one-second glance labels each text, and every question then names its target. Careful reading spends three minutes where the method spends thirty seconds.",
          "(a) is the classic GT defeat; (c) applies passage protocol to notices.",
        ),
        tags: ["greading", "section-1"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Name the reading purpose of each of the three sections.",
        question: "Give Section 1, Section 2 and Section 3's reading purposes in one short answer.",
        acceptedAnswers: ["lookup (locate facts), obligation extraction (duties and procedures), full comprehension (argument and tone)", "locate facts; extract obligations and procedures; full comprehension of a longer passage", "lookup, obligation, comprehension", "finding facts; extracting duties; understanding argument"],
        keywords: ["lookup", "obligation", "comprehension"],
        hints: [],
        feedback: fb(
          "Lookup (locate facts), obligation extraction (duties and procedures), full comprehension (argument and tone).",
          "The three purposes name the three methods: question-first scanning, modal-marked reading, and the full Academic protocol — purpose first, method second.",
          "Answers naming the text types without the purposes have described the material, not the job.",
        ),
        tags: ["greading", "sections"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Which statement about technique transfer between the variants is true?",
        hints: [],
        options: [
          { id: "a", text: "Nothing transfers — GT needs its own methods from scratch." },
          { id: "b", text: "Everything transfers — the thirteen type methods, the reading speeds, the paraphrase rule and the sweep; only the pacing changes." },
          { id: "c", text: "Only completion types transfer." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Everything transfers — the thirteen type methods, the reading speeds, the paraphrase rule and the sweep; only the pacing changes.",
          "The paper keeps the same type bank and the same underlying skills; GT reorganises the material and inverts the pacing, which is why Module 3A's lessons are GT lessons too.",
          "(a) ignores the shared bank; (c) undercounts the transfer massively.",
        ),
        tags: ["greading", "transfer"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A candidate finishes Section 1 after 24 minutes. What has happened, and what is the repair?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — 24 minutes is inside the budget." },
          { id: "b", text: "The classic GT defeat: careful reading of short texts has stolen Section 3's time. The repair is question-first scanning — glance, name the target, hunt the fact." },
          { id: "c", text: "The candidate should skip Section 2 entirely to recover." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The classic GT defeat: careful reading of short texts has stolen Section 3's time. The repair is question-first scanning — glance, name the target, hunt the fact.",
          "Nine minutes over budget on Section 1 arrives at Section 3 with sixteen minutes instead of twenty-five — the difference between a completed passage and a guessed one, spent on notices.",
          "(a) misstates the budget; (c) sacrifices a whole section to save a defect that scanning fixes for free.",
        ),
        tags: ["greading", "pacing"],
      }),
    ],
    homework: [
      "Time each section of your next GT practice set and write the three clock times beside your score — the budget audit takes one line.",
      "From the GT library, read one Section 1 item with the glance-then-question method and time it against your usual careful read.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-greading-notices",
    title: "Section 1: reading notices",
    description:
      "The noticeboard as exam material: dates, charges and exceptions — the headline-bait, small-print-answer structure every notice shares.",
    objectives: [
      "extract dates, closures and conditions from notices at speed",
      "apply the headline-versus-small-print rule: the bait is the headline, the answer is the exception",
      "scan noticeboards question-first without reading every notice",
    ],
    minutes: 11,
    blocks: [
      {
        type: "lesson-intro",
        text: "A notice exists to change your behaviour — the pool is closed, the deadline moved, the rule applies to you — and it is written to be scanned: bold headlines, dates, and a small-print clause that carries the exception the question will test. Reading notices for IELTS is reading them the way hurried adults do: shapes first, then the specific fact, then the exception clause.",
        beforeYouStart: [
          "You can scan for digits, capitals and rare phrases.",
          "You know the GT section structure from the previous lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "GT Reading — Section 1's notices and announcements"],
          ["Task & question types", "TRUE/FALSE/NOT GIVEN, completion and MCQ items on notice facts"],
          ["What is assessed", "Extracting specific, practical information at speed"],
          ["Why this matters", "Notice questions live in the exceptions — the small print under the loud headline"],
        ],
      },
      { type: "heading", text: "The notice's anatomy" },
      {
        type: "steps",
        title: "Reading a notice in three moves",
        steps: [
          { title: "Move one: the headline tells you the topic — one second", text: "POOL CLOSED, TIMETABLE CHANGE, LOST PROPERTY: the headline labels the notice so the glance can file it. One second per notice labels a whole board.", examples: [{ english: "Three notices, three one-second labels — the questions then name their notice by topic and the scan starts warm.", note: "Labels before reading." }] },
          { title: "Move two: the dates and figures carry the facts", text: "Closures run from-date to-date 'inclusive'; reopenings are printed; prices print beside who they exempt. The digits and weekday words are the notice's load-bearing facts — and its best scan targets.", examples: [{ english: "'From Monday 3 March to Sunday 9 March inclusive… reopen at 6.30 am on Monday 10 March' — two dates, one reopening, all the question needs.", note: "Inclusive means both ends count." }] },
          { title: "Move three: the exception clause is the answer's home", text: "Every notice carries a softening clause — 'your pass is accepted at no extra charge', 'classes continue as normal in the small pool', 'we do not post items out'. The question's FALSE and NOT GIVEN items are built from exactly these clauses.", examples: [{ english: "Headline says CLOSURE; the clause says classes continue as normal — the question asks whether classes are cancelled, and the clause answers FALSE.", note: "The clause outranks the headline." }] },
        ],
      },
      {
        type: "warning",
        title: "The word 'inclusive' — and its cousins",
        text: "Date ranges that close 'inclusive' count BOTH end dates; 'from Monday 3 to Sunday 9 inclusive' is seven days, not five. Its cousins matter equally: 'throughout the works' means during the closure, 'within thirty days' starts from purchase, and 'reopens at 6.30 am' is a morning, not a midnight. One date word can flip a verdict.",
      },
      {
        type: "example",
        title: "Notices under the questions",
        items: [
          { english: "'Your Ashford pass is accepted there at no extra charge' — the statement 'members must pay extra at Ferndale' is FALSE by one clause.", note: "Charges live in clauses.", domain: "exam" },
          { english: "'Aqua classes continue as normal in the small pool throughout the works' — the closure headline baited a TRUE; the clause made it FALSE.", note: "Headline bait, clause answer.", domain: "exam" },
          { english: "'Items found are kept for thirty days… we can hold anything you have described for forty-eight hours' — two numbers, two different rules: the question's 'described' points to forty-eight.", note: "Adjacent numbers, different conditions.", domain: "exam" },
          { english: "A candidate answers 'the charity shop charges a fee' as FALSE — the notice says items go to the shop but never prices them: NOT GIVEN, silence.", note: "Notices end in silence too.", domain: "exam" },
          { english: "A learner rewrites one library notice as three Q&A pairs — question, answer, clause — as a drill.", note: "Clause-spotting, trained by authoring.", domain: "study" },
          { english: "'Valuables are kept in the safe and released only with proof of ownership' — the release condition is the whole answer to the custody question.", note: "Conditions are clauses in uniform.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Notice mistakes corrected",
        items: [
          { wrong: "The headline is the notice's main information.", right: "The headline is the topic; the load-bearing facts are the dates and figures, and the answer usually lives in the exception clause.", reason: "Notice questions are engineered on the gap between the loud headline and the quiet clause." },
          { wrong: "All the numbers in a notice answer the same rule.", right: "Adjacent numbers often carry different conditions — thirty days for storage, forty-eight hours for holds: read the condition, not just the count.", reason: "Number-matching without condition-reading is how near-miss answers are born." },
          { wrong: "If a notice does not mention it, it must be false.", right: "Notices end in silence like any text: unmentioned claims are NOT GIVEN, and shops may charge fees the notice never priced.", reason: "The verdict boundary applies on noticeboards exactly as on passages." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Glance-label every notice in one second each — the board is now indexed."],
          ["While the clock runs", "Hunt the question's named notice; read its dates, figures and exception clause; decide."],
          ["If you are stuck", "Re-read the clause under the loudest word — the exception hiding beneath the headline."],
          ["Final minutes", "Notice blanks are cheap guesses: the condition's number is usually adjacent to the matched topic."],
        ],
      },
      {
        type: "summary",
        points: [
          "A notice changes behaviour: headline (topic), dates and figures (facts), exception clause (the answer's home).",
          "Glance-label the board in one second per notice; questions then name their target.",
          "Questions are built on the headline-clause gap — 'classes continue as normal' under a CLOSURE headline.",
          "Adjacent numbers carry different conditions: read the rule, not just the count.",
          "Notices end in silence: unmentioned charges and policies are NOT GIVEN.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which boundary rule do notice verdicts obey?", options: ["Located contradiction is FALSE; silence is NOT GIVEN", "Unmentioned means FALSE", "Headlines decide verdicts"], correctIndex: 0, explanation: "The verdict family's boundary is variant-proof: notices contradict with clauses and fall silent on the rest.", from: "True / False / Not Given" },
          { question: "What is Section 1's method, from the GT structure lesson?", options: ["Glance, then question-first scanning", "Careful full reading", "Skim as one passage"], correctIndex: 0, explanation: "Noticeboards are lookup material: labels first, questions second, scans third.", from: "Understanding the GT Reading paper" },
          { question: "Which scan targets do notices supply in abundance?", options: ["Digits, weekday words and capitalised places", "Abstract nouns", "Reported speech"], correctIndex: 0, explanation: "Dates, times, prices and place names — the notice's load-bearing facts are its loudest shapes.", from: "Scanning" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "Where does a notice question's answer usually live?",
        hints: ["Loud or quiet?"],
        options: [
          { id: "a", text: "In the headline — it states the notice's main point." },
          { id: "b", text: "In the exception clause under the headline — the softening small print the question is engineered around." },
          { id: "c", text: "In the notice's signature." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "In the exception clause under the headline — the softening small print the question is engineered around.",
          "Headlines carry topics; answers carry clauses: 'classes continue as normal', 'at no extra charge', 'we do not post items out' — the quiet qualifications under the loud words.",
          "(a) is the bait the workshop builds on; (c) is scenery.",
        ),
        tags: ["greading", "notices", "clauses"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the notice's dates and clause, then decide.",
        hints: ["What does 'inclusive' do to the dates — and what does the clause say about the class?"],
        passageTitle: "Notice drill",
        passage: "SOUND CHECK: the main hall is closed for audio rewiring from Tuesday 14 to Friday 17 May inclusive, reopening Saturday 18 at 9 am. The evening choir rehearses as normal throughout — the stage's side door has its own power. Recordings scheduled that week move to the following Tuesday.",
        question: "Statement: 'The choir's rehearsal is cancelled during the closure.' — TRUE, FALSE or NOT GIVEN?",
        options: [
          { id: "a", text: "TRUE — the hall is closed, so the choir cannot rehearse." },
          { id: "b", text: "FALSE — the clause says the choir rehearses as normal throughout, using the side door's power." },
          { id: "c", text: "NOT GIVEN — the notice never mentions the choir." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "FALSE — the clause says the choir rehearses as normal throughout, using the side door's power.",
          "The closure headline is the bait; the clause under it is the answer — the choir rehearses as normal throughout, which contradicts the cancellation claim by the notice's own small print.",
          "(a) trusts the headline over the clause; (c) denies a clause printed in the same notice.",
        ),
        tags: ["greading", "notices", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A notice prints two numbers: 'items kept for thirty days' and 'described items held for forty-eight hours'. A question asks how long a DESCRIBED item is held. What is the answer, and why not the other number?",
        hints: ["Read the condition attached to each number."],
        options: [
          { id: "a", text: "Thirty days — it is the larger, more general rule." },
          { id: "b", text: "Forty-eight hours — the question's 'described' matches that number's condition; adjacent numbers carry different rules." },
          { id: "c", text: "Either — notice numbers are interchangeable." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Forty-eight hours — the question's 'described' matches that number's condition; adjacent numbers carry different rules.",
          "Notice arithmetic is conditional: each number belongs to its clause, and question wording selects the clause — 'described' points at the hold rule, not the storage rule.",
          "(a) prefers the general rule over the matched condition; (c) treats conditions as decoration.",
        ),
        tags: ["greading", "notices", "conditions"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Give the notice-reading method's three moves.",
        question: "List the three moves in one short answer.",
        acceptedAnswers: ["glance-label the headline, read the dates and figures, read the exception clause", "label in one second, extract the dates and charges, find the exception clause", "headline label, dates/figures, exception clause", "glance the headline, take the dates, find the clause"],
        keywords: ["headline", "dates", "clause"],
        hints: [],
        feedback: fb(
          "Glance-label the headline, read the dates and figures, read the exception clause.",
          "The three moves mirror a notice's anatomy — topic, facts, exception — and together they answer every question a noticeboard carries.",
          "Answers without the clause move have read the notice's costume and missed its content.",
        ),
        tags: ["greading", "notices"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A question asks whether the charity shop charges for unclaimed items. The notice says items 'go to the charity shop next door' and nothing about prices. The verdict is…",
        hints: [],
        options: [
          { id: "a", text: "FALSE — charity shops do not charge." },
          { id: "b", text: "TRUE — shops charge by nature." },
          { id: "c", text: "NOT GIVEN — the notice is silent on prices; outside knowledge of shops is banned." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "NOT GIVEN — the notice is silent on prices; outside knowledge of shops is banned.",
          "Notices end in silence like any text: the destination is stated, the pricing is not, and both the confident FALSE and the confident TRUE import knowledge the notice never printed.",
          "(a) and (b) are the same error in opposite costumes — world knowledge answering a text question.",
        ),
        tags: ["greading", "notices", "silence"],
      }),
    ],
    homework: [
      "Take the library's noticeboard item and write, for each notice, its headline topic, its two load-bearing figures and its exception clause — then answer its questions from your notes.",
      "Photograph a real notice this week and write one TRUE, one FALSE and one NOT GIVEN statement about it, each justified by a clause or a silence.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-greading-advertisements",
    title: "Section 1: reading advertisements",
    description:
      "Classifieds as exam material: prices, conditions and contact rules — the offer, the small print, and the contact discipline questions love.",
    objectives: [
      "extract offers, prices and conditions from short advertisements",
      "apply the condition rule: the offer's fine print decides the question",
      "obey contact rules and formats when completion asks for them",
    ],
    minutes: 11,
    blocks: [
      {
        type: "lesson-intro",
        text: "An advertisement is an offer with conditions: a price, a discount with a trigger, a service with hours and limits, and a contact rule printed in the last line. The questions test exactly the gaps between offer and condition — the half-price lesson that needs the advertisement shown, the phone rule that bans calls at work. Reading ads for IELTS is reading them as contracts in miniature.",
        beforeYouStart: [
          "You can scan for digits and capitalised names.",
          "You know the notice's headline-clause anatomy from the previous lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "GT Reading — Section 1's advertisements and classifieds"],
          ["Task & question types", "MCQ, TRUE/FALSE/NOT GIVEN and completion items on offers and conditions"],
          ["What is assessed", "Extracting specific practical information: prices, conditions, contact rules"],
          ["Why this matters", "Ad questions are condition questions — the offer is bait, the fine print is the answer"],
        ],
      },
      { type: "heading", text: "The advertisement's anatomy" },
      {
        type: "steps",
        title: "Reading an advertisement in three moves",
        steps: [
          { title: "Move one: the offer names the product — one second", text: "GUITAR LESSONS, FOR SALE, DOG WALKING, LANGUAGE EXCHANGE: the headline labels the ad for the glance, and the questions will name the product back. One second per ad indexes the whole set.", examples: [{ english: "Four ads, four labels — a question about 'the dog-walking service' starts warm.", note: "Labels index the set." }] },
          { title: "Move two: prices and figures carry the offer's arithmetic", text: "£18 per hour, £140 or nearest offer, £10 per walk, free entry: the figures print beside their conditions — per hour, per walk, with a paying adult — and the condition words are half the fact.", examples: [{ english: "'£10 per walk, discounts for a weekly booking' — the price's unit and its discount trigger are one fact in two parts.", note: "Units and triggers travel with figures." }] },
          { title: "Move three: the condition and contact lines hold the answers", text: "Every ad's last lines carry its rules: 'first lesson half price with this advertisement', 'no calls at work', 'just turn up'. Questions are built on these lines — the trigger for the discount, the banned contact route, the booking requirement.", examples: [{ english: "'Half price with this advertisement' — the MCQ's correct option mentions the advertisement; the distractor mentions block booking.", note: "Triggers are answers in disguise." }] },
        ],
      },
      {
        type: "warning",
        title: "Contact rules are verdicts wearing pyjamas",
        text: "'No calls at work', 'text only', 'after 5 pm': contact lines look like housekeeping and test like statements. Before answering any contact-based item, re-read the ad's final line — the banned or preferred route is printed there, and the statement will contradict or confirm exactly it.",
      },
      {
        type: "example",
        title: "Ads under the questions",
        items: [
          { english: "'Home visits within 5 km of Northgate at no extra cost' — the completion asks for the radius: '5 km' copies with its unit, a number-and-unit answer.", note: "Radii are number-plus-unit facts.", domain: "exam" },
          { english: "'Email or text only, please — no calls at work' — the statement 'the seller welcomes daytime calls' is FALSE by one contact line.", note: "Contact rules are verdict factories.", domain: "exam" },
          { english: "'Fifteen years' experience' against the statement 'more than a decade' — TRUE through the number-to-phrase paraphrase.", note: "Ads test paraphrase at its smallest.", domain: "exam" },
          { english: "'Free entry — you buy your own coffee' — the completion 'you buy your own ___' takes 'coffee', the ad's own noun.", note: "The clause supplies the copy.", domain: "exam" },
          { english: "A learner collects five real classifieds and writes each one's offer, condition and contact rule on one line.", note: "Anatomy-reading, trained on live material.", domain: "study" },
          { english: "A candidate assumes 'or nearest sensible offer' means the seller negotiates freely — the question's answer needed only the price's presence: £140 copied exact.", note: "Offer conventions are not answer content.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Advertisement mistakes corrected",
        items: [
          { wrong: "The offer line contains the answers.", right: "The offer is the bait; the condition and contact lines carry what questions test — triggers, limits, banned routes.", reason: "Ad distractors quote the offer while the answer cites the fine print — the same echo mechanism as passages." },
          { wrong: "Prices stand alone as facts.", right: "Prices travel with units and triggers: per hour, per walk, with a paying adult, weekly booking — the condition is half the fact.", reason: "Completion and verdict items both test the price's conditions, not just its digits." },
          { wrong: "Contact details are decoration after the real content.", right: "Contact rules ('no calls at work', 'booking required') are among the most-tested lines in Section 1.", reason: "Practical reading is the section's purpose, and contacting the advertiser is the practical act." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Glance-label every ad in one second — product names index the set."],
          ["While the clock runs", "Hunt the named ad; read its figures with their conditions; check the final lines for triggers and contact rules."],
          ["If you are stuck", "Re-read the ad's last two lines — the answer lives there more often than in the offer."],
          ["Final minutes", "Price and radius completions re-check for units: '5 km' not '5', '£140' not '140' where the column expects currency."],
        ],
      },
      {
        type: "summary",
        points: [
          "An advertisement is an offer with conditions: headline (product), figures with units and triggers (the offer's arithmetic), final lines (conditions and contact rules).",
          "Glance-label the set; questions name their ad by product.",
          "Questions are built on offer-condition gaps: the discount's trigger, the banned contact route, the booking requirement.",
          "Prices travel with their conditions — per walk, weekly, with a paying adult — and completions take number-plus-unit copies.",
          "The last two lines of an ad outscore its offer line as an answer source.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which anatomy does the advertisement share with the notice?", options: ["Headline, figures, exception clause", "Claim, support, evaluation", "Rubric, items, key"], correctIndex: 0, explanation: "Both are practical texts with loud topics and quiet qualifications — the anatomy transfers from notices to ads.", from: "Section 1: reading notices" },
          { question: "What does a completion answer take when the fact is a radius?", options: ["The number alone", "The number plus its unit, copied exact", "The nearest paraphrase"], correctIndex: 1, explanation: "'5 km' is one fact in two parts: the copy takes the unit, per the completion family's exactness rule.", from: "Sentence completion" },
          { question: "The number-to-phrase paraphrase ('fifteen years' → 'more than a decade') belongs to which lesson's mechanism?", options: ["The paraphrase operations — synonym chains with a grammar flip", "The reference chain", "The tone thermometer"], correctIndex: 0, explanation: "Numbers paraphrase through synonym chains and grammar flips exactly like any other content — the operations are universal.", from: "Understanding paraphrasing" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is an advertisement, structurally, for exam purposes?",
        hints: ["Think contract, not poster."],
        options: [
          { id: "a", text: "An offer with conditions — plus a contact rule in the final lines." },
          { id: "b", text: "A piece of persuasive writing with no factual content." },
          { id: "c", text: "A notice with prices added." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "An offer with conditions — plus a contact rule in the final lines.",
          "Ads are contracts in miniature: product headline, figures with units and triggers, and final-line conditions — and the questions test the gaps between offer and condition.",
          "(b) denies the facts the section exists to test; (c) misses the offer-condition structure.",
        ),
        tags: ["greading", "advertisements", "anatomy"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the offer, the condition, and the contact rule.",
        hints: ["The condition line decides; the contact line polices."],
        passageTitle: "Advertisement drill",
        passage: "PIANO TUNING — £45 per visit, £80 for the annual pair booked together. Tunings after 6 pm cost £10 more, because evenings are the busy season. Ring the workshop on weekdays; the tuner himself answers only on Mondays.",
        question: "Statement: 'An evening tuning costs the same as a daytime one.' — TRUE, FALSE or NOT GIVEN?",
        options: [
          { id: "a", text: "TRUE — the ad prices tunings at £45." },
          { id: "b", text: "FALSE — the condition line adds £10 after 6 pm: evenings cost more." },
          { id: "c", text: "NOT GIVEN — the ad gives no time information." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "FALSE — the condition line adds £10 after 6 pm: evenings cost more.",
          "The offer line prints £45; the condition line immediately qualifies it with the evening surcharge — the classic offer-condition gap the statement tests, and the located contradiction makes it FALSE.",
          "(a) trusts the offer over its condition; (c) denies the condition line the ad plainly prints.",
        ),
        tags: ["greading", "advertisements", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. An ad offers 'first lesson half price with this advertisement'. An MCQ asks how to claim the discount. What does the correct option say?",
        hints: ["Triggers are answers in disguise."],
        options: [
          { id: "a", text: "Book a block of lessons in advance." },
          { id: "b", text: "Mention the advertisement when booking — the discount's printed trigger." },
          { id: "c", text: "Take the lesson at home instead of the studio." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Mention the advertisement when booking — the discount's printed trigger.",
          "The condition line names its own trigger, and the correct option paraphrases it — while the distractors borrow neighbouring facts (block booking, the home-visit radius) as echo bait.",
          "(a) and (c) are true facts of other lines wearing a discount costume.",
        ),
        tags: ["greading", "advertisements", "triggers"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the three parts of an advertisement's anatomy and what each carries.",
        question: "One short answer: headline (what?), figures (what?), final lines (what?).",
        acceptedAnswers: ["headline carries the product; figures carry prices with units and triggers; final lines carry conditions and contact rules", "product label; prices plus conditions; conditions and contact rules", "headline names the product, figures carry the offer's arithmetic with units and triggers, final lines hold conditions and contacts", "product; priced offer with units; conditions and contacts"],
        keywords: ["headline", "figures", "conditions"],
        hints: [],
        feedback: fb(
          "Headline carries the product; figures carry prices with units and triggers; final lines carry conditions and contact rules.",
          "The anatomy indexes every ad on a Section 1 board: one second per label, one read per named target, and the final lines checked before any option is trusted.",
          "Answers without the final-lines part have read the offer and missed the contract.",
        ),
        tags: ["greading", "advertisements"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A completion asks for a dog-walking price. The ad says '£10 per walk, discounts for a weekly booking'. A TWO-WORD limit prints. What is the safest copy?",
        hints: [],
        options: [
          { id: "a", text: "'£10 per walk' — the full fact, three tokens." },
          { id: "b", text: "'£10' — the figure alone, inside any limit; the question's own wording carried 'per walk' if it needed it." },
          { id: "c", text: "'discounts' — the ad's other money word." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'£10' — the figure alone, inside any limit; the question's own wording carried 'per walk' if it needed it.",
          "Copy discipline includes economy: the limit's arithmetic governs the count, and the safest copy is the smallest exact unit the question asks for — the figure, with the unit already printed in the question.",
          "(a) risks breaking a two-word count; (c) answers a discount question the item never asked.",
        ),
        tags: ["greading", "advertisements", "limits"],
      }),
    ],
    homework: [
      "Take the library's advertisements item and write each ad's offer, condition and contact rule on one line before answering.",
      "Collect three real classifieds this week and write one completion question for each, with its condition-line answer.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-greading-instructions",
    title: "Section 2: following instructions",
    description:
      "Procedural reading: steps, warnings and the before/after logic that sequencing questions test — read with a finger on the order.",
    objectives: [
      "follow step-numbered and signposted procedures accurately",
      "answer before/after and condition questions from sequence markers",
      "extract warnings and prohibitions into completion answers",
    ],
    minutes: 11,
    blocks: [
      {
        type: "lesson-intro",
        text: "An instruction text tells you what to do, in order, with warnings where the order matters: scan the code, choose the refund, print the label — and do not tighten any screw fully until all are in place. The questions test exactly the order and the warnings: what comes before what, which condition gates which step, which action is banned. Reading instructions for IELTS is reading with a finger on the sequence.",
        beforeYouStart: [
          "You can follow sequence markers from the flowchart lesson.",
          "You know Section 2's obligation-extraction purpose.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "GT Reading — Section 2's instruction and procedure texts"],
          ["Task & question types", "Flowchart completion, TRUE/FALSE/NOT GIVEN, note completion on steps and warnings"],
          ["What is assessed", "Following and reorganising procedural detail"],
          ["Why this matters", "Sequence questions are free marks for marker-readers and traps for browsers"],
        ],
      },
      { type: "heading", text: "The instruction's anatomy" },
      {
        type: "steps",
        title: "Reading a procedure in three moves",
        steps: [
          { title: "Move one: number the steps — printed or implied", text: "Some procedures print numbers; others signpost with 'first', 'then', 'once', 'finally'. Either way, your first read builds the step list — the text's spine that every question will reference.", examples: [{ english: "'1 Scan… 2 Tick… 3 Choose… 4 Print… 5 Drop' — five printed steps, five question anchors.", note: "Printed numbers are gifts." }] },
          { title: "Move two: read the gates — conditions between steps", text: "Between steps sit gates: 'without a receipt, we can offer exchange only', 'do not tighten any screw fully until all are in place'. Gates are the text's warnings, and before/after questions live on them.", examples: [{ english: "The gate 'until all are in place' makes 'tighten fully' the LAST screw action — a sequencing answer.", note: "Gates hold the order." }] },
          { title: "Move three: collect the prohibitions and exceptions", text: "Procedures end with bans and exceptions: 'do not put unlabelled parcels in the box', 'missing parts are replaced free within a year'. Verdict statements and completion blanks are built from exactly these lines.", examples: [{ english: "'Do not use any truck whose tag is red or missing' — the prohibition becomes both a verdict statement and a one-word completion ('missing').", note: "Bans are answer mines." }] },
        ],
      },
      {
        type: "grammar-rule",
        title: "The grammar of commands",
        rule: "Procedures speak in imperatives ('Check the pack', 'Fix the lowest shelf first') and their grammar carries the order: 'before starting' precedes everything, 'only when X' gates Y, 'then' sequences, and 'do not' bans. The imperative's verb names the step; the adverbial clause around it names the gate.",
        explanation:
          "Reading the grammar is reading the order: a procedure's sentence shape — imperative plus condition — encodes the sequence the questions test.",
        examples: [
          { english: "'Do not tighten any screw fully until all are in place' — imperative (tighten) + ban (not fully) + gate (until all are in place): three order facts in one sentence.", translation: "El imperativo más la condición es la secuencia entera." },
        ],
        exceptions: ["Passive instructions ('the label is printed') still sequence — the step happens where the passive sits, between its neighbours."],
      },
      {
        type: "example",
        title: "Procedures under the questions",
        items: [
          { english: "Returns flowchart: 'scan the QR code, or type your order ___' — step 1's alternative input method takes 'number', the passage's own noun.", note: "Alternatives within a step still belong to the step.", domain: "exam" },
          { english: "Shelf assembly: 'fix the lowest shelf first — the one marked with a red ___' — the marked-first gate takes 'dot', and the colour is printed in the question.", note: "Gates carry completion nouns.", domain: "exam" },
          { english: "'Refunds go back within five working days; exchanges are issued instantly' — the statement 'exchanges are issued immediately' is TRUE through the instant-paraphrase.", note: "Contrast pairs test paraphrase.", domain: "exam" },
          { english: "A candidate answers 'cash refund without a receipt' as TRUE — the gate says 'exchange only', and the located contradiction makes it FALSE.", note: "Gates contradict politely.", domain: "exam" },
          { english: "A learner writes any real instruction leaflet as six boxes of a flowchart, then checks which boxes the leaflet's own warnings would gate.", note: "Procedure-reading, trained by drawing.", domain: "study" },
          { english: "'Hand-tighten everything, then give each screw a final quarter-turn with the ___ provided' — the two-stage fastening step's tool takes 'key'.", note: "Two-stage steps carry two nouns.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Instruction mistakes corrected",
        items: [
          { wrong: "I read instructions for general understanding, like a passage.", right: "Read instructions for ORDER and GATES: steps, the conditions between them, and the bans at the end — general understanding is the by-product.", reason: "Procedure questions test sequence and condition, which general reading collects incidentally at best." },
          { wrong: "The steps' order is flexible if the meaning is clear.", right: "The printed order is the answer key: before/after items score on the text's sequence, not on the procedure's plausibility.", reason: "A sensible reordering is still a wrong answer — the text's order is the contract." },
          { wrong: "Warnings are emphasis, not content.", right: "Warnings, bans and exceptions are the most-tested lines in the type — they gate steps and fill completions.", reason: "The workshop builds statements from prohibitions because browsers read past them." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Build the step list on the first read — printed numbers or signpost words."],
          ["While the clock runs", "Walk steps in order; read every gate; collect bans and exceptions as you pass them."],
          ["If you are stuck", "Re-read the gate between the two steps the question names — the answer usually gates one of them."],
          ["Final minutes", "Sequencing answers re-check against the step list, never against memory of sense."],
        ],
      },
      {
        type: "summary",
        points: [
          "An instruction text is steps, gates and bans: the spine is the sequence, and questions reference it constantly.",
          "Build the step list on the first read — printed numbers or signposts ('first', 'then', 'once', 'finally').",
          "Gates — conditions between steps — hold before/after answers and completion nouns.",
          "Bans and exceptions are the most-tested lines: verdict statements and one-word completions come from them.",
          "The printed order is the answer key, not the procedure's plausibility.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which type is the printed form of a procedure?", options: ["Flowchart completion", "Matching headings", "Diagram labelling"], correctIndex: 0, explanation: "Flowcharts ARE procedures redrawn — the lesson's arrows and the text's markers are the same sequence.", from: "Flowchart completion" },
          { question: "What did the notice lesson call the quiet line under the loud headline?", options: ["The exception clause", "The signature", "The rubric"], correctIndex: 0, explanation: "The instruction's gates and bans are the same species — quiet qualifications carrying the answers.", from: "Section 1: reading notices" },
          { question: "Which verdict does a located gate give a statement that ignores it?", options: ["FALSE — the gate contradicts the ungated claim", "TRUE — the claim matches the step's main action", "NOT GIVEN — gates are not information"], correctIndex: 0, explanation: "'Exchange only' contradicts 'cash refund': gates are located contradictions in miniature.", from: "True / False / Not Given" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is the spine of an instruction text?",
        hints: ["Steps, and what sits between them."],
        options: [
          { id: "a", text: "The topic sentence of each paragraph." },
          { id: "b", text: "The step sequence — printed numbers or signpost words — with gates and bans attached." },
          { id: "c", text: "The final warning." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The step sequence — printed numbers or signpost words — with gates and bans attached.",
          "Procedures are order plus conditions: the step list is the spine, the gates between steps hold the before/after logic, and the bans at the end feed completions and verdicts.",
          "(a) is passage anatomy; (c) is one part of the whole.",
        ),
        tags: ["greading", "instructions", "anatomy"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the gate, then answer the sequencing question.",
        hints: ["Which action is gated until another is complete?"],
        passageTitle: "Instruction drill",
        passage: "Assembling the stand: lay both uprights on the box lid and fix the cross-bars with the short bolts, leaving every bolt a quarter-turn loose. Only when all four cross-bars hang on their bolts should you tighten anything — then work from the centre outwards, one quarter-turn at a time, until the frame is square.",
        question: "When may you tighten the bolts?",
        options: [
          { id: "a", text: "As soon as each cross-bar is hung — tightening as you go." },
          { id: "b", text: "Only when all four cross-bars hang on their bolts — the gate — and then from the centre outwards." },
          { id: "c", text: "Before assembly begins, to pre-tension the frame." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Only when all four cross-bars hang on their bolts — the gate — and then from the centre outwards.",
          "The gate ('Only when all four… should you tighten anything') answers the sequencing question outright, and the follow-up instruction (centre outwards) completes the procedure's second stage.",
          "(a) ignores the gate the text printed in bold logic; (c) reverses the order entirely.",
        ),
        tags: ["greading", "instructions", "gates"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A procedure ends: 'Keep your receipt until the refund arrives: without it, we can offer exchange only, and only within thirty days of purchase.' A statement reads: 'Customers without a receipt can still receive a cash refund.' The verdict is…",
        hints: ["The gate contradicts the claim."],
        options: [
          { id: "a", text: "TRUE — a refund is available." },
          { id: "b", text: "FALSE — the gate offers exchange only: a located contradiction of the cash-refund claim." },
          { id: "c", text: "NOT GIVEN — the text is silent on receipts." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "FALSE — the gate offers exchange only: a located contradiction of the cash-refund claim.",
          "The gate's 'exchange only' stands against the statement's 'cash refund' — a located contradiction, whatever the surrounding procedure allows with a receipt.",
          "(a) reads the ungated main clause; (c) denies the gate its plain words.",
        ),
        tags: ["greading", "instructions", "verdicts"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the three elements of a procedure and the questions each feeds.",
        question: "One short answer: steps feed which items? Gates feed which? Bans feed which?",
        acceptedAnswers: ["steps feed flowcharts and sequencing items; gates feed before/after and condition questions; bans feed verdict statements and completions", "steps → flowchart and order items; gates → before/after conditions; bans → verdicts and completions", "steps feed sequencing and flowchart questions, gates feed condition and before/after items, bans feed statements and one-word answers", "steps, gates, bans — flowcharts/order, conditions, statements/completions"],
        keywords: ["steps", "gates", "bans"],
        hints: [],
        feedback: fb(
          "Steps feed flowcharts and sequencing items; gates feed before/after and condition questions; bans feed verdict statements and completions.",
          "The three-part anatomy maps onto the type bank: knowing which element a question names tells you where its answer lives before you scan.",
          "Answers collapsing gates and bans have merged the type's two most-tested elements.",
        ),
        tags: ["greading", "instructions"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A flowchart blank reads: 'the whole display advanced by turning a single hand ___'. The passage's step sentence reads 'All of this was driven by turning a single hand crank'. The blank takes…",
        hints: [],
        options: [
          { id: "a", text: "'crank' — the step's tool noun, copied exact into the slot after 'hand'." },
          { id: "b", text: "'a single hand crank' — the full phrase, four tokens against the slot." },
          { id: "c", text: "'driven' — the sentence's verb, in the wrong slot entirely." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "'crank' — the step's tool noun, copied exact into the slot after 'hand'.",
          "The slot's grammar (after 'hand') names the noun the copy takes, and the passage's own compound 'hand crank' supplies it: one word, letter-exact, in the right box of the procedure's sequence.",
          "(b) over-copies into a slot that already printed 'hand'; (c) fills the verb's slot with a verb the blank never asked for.",
        ),
        tags: ["greading", "instructions", "slots"],
      }),
    ],
    homework: [
      "Take the library's instructions item and list its steps, gates and bans on one page before answering its questions.",
      "Rewrite any real instruction leaflet as a five-box flowchart, marking the gates on the arrows between boxes.",
    ],
  },
];
