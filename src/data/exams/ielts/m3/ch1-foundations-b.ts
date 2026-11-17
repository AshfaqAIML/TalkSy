/**
 * Chapter 1B — Reading foundations (PROMPT 45, Part A).
 *
 * Four more foundation lessons: intensive reading, main ideas, supporting
 * details and paraphrasing — the comprehension core between the speeds.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const foundationsLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-intensive",
    title: "Intensive reading",
    description:
      "The third speed: two or three lines read word by word, once the scan has found them — where grammar, reference and exact wording decide the mark.",
    objectives: [
      "close-read only the located lines, never the whole paragraph",
      "analyse the grammar of an answer sentence to fit a completion gap",
      "check exact wording against the question's claim before committing",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Intensive reading is the smallest and the most expensive kind of reading on the paper: every word of two or three lines, read once, at full attention. It is expensive because it is slow, which is why it comes LAST in the sequence — after the skim has mapped the passage and the scan has found the street address. Spend intensive reading on a whole paragraph and you are paying gold prices for ground the scan would have covered in seconds.",
        beforeYouStart: [
          "You can run the skim-scan sequence from the earlier lessons.",
          "You can name a word's part of speech on sight.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the deciding move of every located question"],
          ["Task & question types", "Completion tasks directly (grammar fit); verdict and choice tasks through exact-claim checking"],
          ["What is assessed", "Detailed understanding of argument and of exact wording — where single words carry marks"],
          ["Why this matters", "The scan finds candidates; the close read earns the mark. Skipping it turns located answers into guesses"],
        ],
      },
      { type: "heading", text: "What the close read actually does" },
      {
        type: "steps",
        title: "Three jobs, two or three lines",
        steps: [
          { title: "Job one: compare claims, not words", text: "Hold the question's claim in mind and ask whether the located lines state it, contradict it, or stay silent on it. Word overlap proves nothing in either direction — the close read compares MEANINGS, which is why it cannot be skipped even after a perfect scan.", examples: [{ english: "The line says the barrier 'is the balance sheet'; the option says the project is 'economically impossible'. Overlap: money words. Meaning: one says costs block, the other says impossibility — different claims.", note: "Vocabulary overlap is the decoy; claim comparison is the decision." }] },
          { title: "Job two: run the grammar of the gap", text: "For every completion blank, read the sentence around the gap and name what fits: noun, verb, number, time word, plural. Then read the located lines hunting that grammatical shape, not the meaning first — grammar narrows faster.", examples: [{ english: "'Fix the lowest shelf first — the one marked with a red ___' → a singular noun; the located line offers 'dot', and grammar confirms before meaning is even weighed.", note: "Grammar predicts; the passage confirms." }] },
          { title: "Job three: respect the qualifiers", text: "Quantifiers and intensifiers — all, some, most, only, mainly, rarely — are where true answers become false ones. The close read checks each one against the passage's own, because a swapped qualifier is the most common wrong-answer mechanism on the paper.", examples: [{ english: "The passage: 'some farmers reported damage'. The statement: 'all farmers opposed'. One word apart, one mark gone.", note: "Qualifier checks are cheap; qualifier mistakes are expensive." }] },
        ],
      },
      {
        type: "grammar-rule",
        title: "The grammar of a gap",
        rule: "A completion gap declares its part of speech through its neighbours: 'the ___ supplied' wants a singular noun after the determiner; 'every ___' wants a time noun; 'was ___' wants a past participle. Predict the word class and the noun type BEFORE scanning, and the passage confirms rather than reveals.",
        explanation:
          "Grammar prediction converts completion from a reading test into a checking exercise: with the part of speech fixed, the scan has a shape to hunt and the close read has a slot to fill.",
        examples: [
          { english: "'emptied every ___' → predict a time noun (week, season) — the scan hunts the passage's frequency words.", translation: "La previsión gramatical convierte la búsqueda en confirmación." },
        ],
        exceptions: ["Numbers and hyphenated compounds (pin-and-slot, 6.15 pm) count as single words under word limits — do not let them break your count."],
      },
      {
        type: "example",
        title: "Close reads on real lines",
        items: [
          { english: "Located line: 'the dye never reaches the core of the cotton yarn'. Statement: 'indigo penetrates to the core'. The close read finds the contradiction — FALSE, despite four shared words.", note: "Shared vocabulary with opposite meaning: the classic false item.", domain: "exam" },
          { english: "Gap: 'the ponds hold back hundreds of thousands of ___'. Grammar says a plural noun of quantity; the line's 'litres in storm weather' fits exactly.", note: "Grammar fit, then meaning fit — in that order.", domain: "exam" },
          { english: "A candidate reads a full paragraph intensively to find one answer and burns ninety seconds the scan would have spent in ten.", note: "The cost of skipping the sequence, measured.", domain: "exam" },
          { english: "Two options both mention 'the balance sheet'; the close read distinguishes 'the barrier is cost' from 'cost makes it impossible'.", note: "Near-identical options differ in claim strength, not vocabulary.", domain: "exam" },
          { english: "A learner drills by writing the part of speech above each gap of a note-completion task BEFORE reading the passage.", note: "Grammar prediction is trainable as a reflex.", domain: "study" },
          { english: "The sweep catches that a copied answer kept the passage's capital letter where the sentence needed lowercase.", note: "The close read's final gift: copied answers must fit their new sentence.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Close-reading mistakes corrected",
        items: [
          { wrong: "Once I've found the lines, the answer is obvious from the words.", right: "Found lines are candidates, not answers: run the claim comparison, the grammar check and the qualifier check before committing.", reason: "Questions are engineered so that word overlap points at wrong answers as often as right ones." },
          { wrong: "I read the whole paragraph around every hit, to be safe.", right: "Read the hit sentence plus one on each side; the answer's territory is two or three lines.", reason: "Paragraph-length close reading converts located questions into the time sinks the budget lesson bans." },
          { wrong: "Qualifiers are decoration; the topic words decide.", right: "Qualifiers carry the mark: all/some, only/mainly, always/rarely decide TRUE and FALSE as often as the content words do.", reason: "The wrong-answer workshop builds distractors by swapping exactly these small words." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the discipline: close reading happens only after a located hit, never as a search strategy."],
          ["While the clock runs", "Claim comparison, grammar fit, qualifier check — the three jobs, in that order, on two or three lines."],
          ["If you are stuck", "Two candidate lines? Close-read both fully; if still tied, the qualifier is usually the tiebreaker."],
          ["Final minutes", "Re-run only the qualifier check on flagged items — it is the fastest re-verification on the paper."],
        ],
      },
      {
        type: "summary",
        points: [
          "Intensive reading is word-by-word reading of two or three located lines — the last and slowest mode in the sequence.",
          "Its three jobs: compare claims not words, run the grammar of the gap, and check every qualifier.",
          "Found lines are candidates, never answers; the close read is where the mark is actually earned.",
          "Qualifier swaps (all/some, only/mainly) are the most common mechanism behind FALSE statements and wrong options.",
          "Copied answers must fit their new sentence: grammar and even capitalisation travel with the close read's final check.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which reading mode runs immediately before the close read?", options: ["The skim", "The scan", "A paragraph re-read"], correctIndex: 1, explanation: "Skim maps, scan locates, close read decides — the scan's contact hands over to intensive reading.", from: "Scanning" },
          { question: "Where does the close read say answers live?", options: ["Anywhere in the paragraph", "In the hit sentence plus one on each side", "Only in the paragraph's first sentence"], correctIndex: 1, explanation: "Two or three lines: paragraph-wide reading surrenders the speed the sequence was built to protect.", from: "What the close read actually does" },
          { question: "Which words most often flip a TRUE statement into a FALSE one?", options: ["The topic nouns", "The verbs of motion", "The qualifiers — all, some, only, mainly"], correctIndex: 2, explanation: "Distractors are built by swapping quantifiers; the qualifier check is the close read's third job.", from: "Job three: respect the qualifiers" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "When does intensive reading happen?",
        hints: ["Think about its place in the three-mode sequence."],
        options: [
          { id: "a", text: "Before the skim, to build vocabulary familiarity." },
          { id: "b", text: "After the scan has located the lines — as the deciding move on two or three lines." },
          { id: "c", text: "During the final sweep, to re-read flagged answers." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "After the scan has located the lines — as the deciding move on two or three lines.",
          "The close read is the sequence's third and slowest mode: the skim maps, the scan finds, the close read decides. Running it as a search strategy pays gold prices for scan-speed ground.",
          "(a) reverses the sequence; (c) confuses the sweep's checklist with comprehension.",
        ),
        tags: ["areading", "intensive"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Close-read the located line and settle the verdict.",
        hints: ["Compare claims, not shared vocabulary — and check the qualifier."],
        passageTitle: "Verdict drill",
        passage: "The reintroduction programmes have not been without critics. Some farmers along the river reported that drainage ditches backed up after the dams appeared, and a few recorded burrows undermining their field banks; the majority of farms downstream, the survey noted, noticed no change at all.",
        question: "Statement: 'All farmers opposed the reintroduction.' — TRUE, FALSE or NOT GIVEN?",
        options: [
          { id: "a", text: "TRUE — the passage says farmers reported problems." },
          { id: "b", text: "FALSE — 'some farmers' and 'a few' contradict 'all', and the majority noticed no change." },
          { id: "c", text: "NOT GIVEN — the passage gives no farmers' views." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "FALSE — 'some farmers' and 'a few' contradict 'all', and the majority noticed no change.",
          "The located lines report limited opposition (some, a few) and explicit majority neutrality — a located contradiction to 'all', which makes the statement FALSE rather than Not Given.",
          "(a) counts the shared topic and skips the qualifier; (c) ignores lines that plainly report the views.",
        ),
        tags: ["areading", "intensive", "qualifiers"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Grammar prediction: name what fits the gap BEFORE reading any passage.",
        sentence: "The shelf must be fixed to the wall using the ___ supplied. (Which part of speech and what kind of noun?)",
        acceptedAnswers: ["a noun — a fastener or part name, singular", "a singular concrete noun, a part or fitting", "noun, singular — a hardware part", "a singular noun naming an object"],
        hints: ["What follows 'the' and precedes 'supplied'?"],
        feedback: fb(
          "A singular concrete noun — a part or fitting.",
          "The gap after 'the' and before 'supplied' wants a singular, countable, concrete noun — a hardware part. With that prediction, the scan hunts the passage's part names and the close read merely confirms.",
          "Answers naming verbs or adjectives ignore the determiner 'the' directly before the gap.",
        ),
        tags: ["areading", "intensive", "grammar-fit"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A scan lands on a line containing four of the question's six words. What does the close read do with that overlap?",
        hints: [],
        options: [
          { id: "a", text: "Treat the overlap as confirmation and answer immediately." },
          { id: "b", text: "Ignore the overlap entirely — it is always a trap." },
          { id: "c", text: "Use the line as a candidate and compare the CLAIM it makes with the question's claim before deciding." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "Use the line as a candidate and compare the CLAIM it makes with the question's claim before deciding.",
          "Word overlap is evidence of location, not of correctness: engineered distractors quote the passage while altering one relation or qualifier. The close read's first job — claim comparison — is exactly the defence.",
          "(a) is how mention-lures win; (b) overcorrects — overlap does mean you are in the right street, just not yet at the right door.",
        ),
        tags: ["areading", "intensive", "claims"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the close read's three jobs, in order.",
        question: "List the three jobs of the close read in one short answer, in the taught order.",
        acceptedAnswers: ["compare claims not words, run the grammar of the gap, check the qualifiers", "claim comparison, grammar fit, qualifier check", "compare claims, fit the grammar, respect the qualifiers", "claims, grammar, qualifiers"],
        hints: [],
        feedback: fb(
          "Compare claims, fit the grammar, check the qualifiers.",
          "Those three jobs, in that order, are what make a located hit into an earned mark — and each one defeats a different distractor mechanism.",
          "Any list including re-reading or skimming has imported the wrong lesson's moves.",
        ),
        tags: ["areading", "intensive"],
      }),
    ],
    homework: [
      "Take one completed library passage and re-run three answers with the three jobs written beside them: claim, grammar, qualifier — note which job you had been skipping.",
      "In your next practice session, write the predicted part of speech above every completion gap before touching the passage.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-main-ideas",
    title: "Identifying main ideas",
    description:
      "The topic sentence and its disguises: how to find the claim a paragraph exists to make, and how headings and main-idea questions are built on it.",
    objectives: [
      "locate a paragraph's topic sentence, including its disguised positions",
      "separate the paragraph's claim from its examples and evidence",
      "apply main-idea reading to headings and title-choice questions",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every paragraph is a small argument: one claim, plus the support that earns it. The reading test asks about the claim constantly — in matching headings, in choosing titles, in 'what is this paragraph about?' — and it hides the claim in a handful of standard positions. This lesson teaches the positions, the disguises, and the discipline of separating the claim from the evidence that merely serves it.",
        beforeYouStart: [
          "You can skim first sentences from the skimming lesson.",
          "You can tell an example from an assertion in everyday prose.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — every global question, and the skim that feeds them"],
          ["Task & question types", "Matching headings and title choice directly; 'main idea' multiple choice; the skim that powers locating tasks"],
          ["What is assessed", "Reading for gist at paragraph level — identifying the function and central content of each paragraph"],
          ["Why this matters", "Headings and title questions are pure main-idea tests: candidates who read claims instead of examples answer them in seconds"],
        ],
      },
      { type: "heading", text: "Where the claim hides" },
      {
        type: "steps",
        title: "Five positions, one skill",
        steps: [
          { title: "Position one: the classic opener", text: "Most academic paragraphs open with the claim and spend the rest supporting it. Read the first sentence at full attention and the paragraph is usually yours.", examples: [{ english: "'A beaver's dam is not a wall but a filter.' — claim first, mechanism after.", note: "The default shape of academic prose." }] },
          { title: "Position two: the concession build", text: "Paragraphs that open with 'It is often claimed…' or 'Critics argue…' are quoting someone else. The writer's own claim arrives later — usually at the end — and that later sentence is the topic sentence.", examples: [{ english: "Opens with the tram-losses view, closes with the land-sales correction: the closing sentence carries the claim.", note: "Reported views are support, not claims." }] },
          { title: "Position three: the question frame", text: "A paragraph that opens with a question exists to answer it. The answer — again usually at the end — is the paragraph's main idea.", examples: [{ english: "'Could the reef be farmed sustainably?' — the paragraph's claim is the answer sentence, not the question.", note: "Questions are hooks; answers are claims." }] },
          { title: "Position four: the example-first paragraph", text: "Some paragraphs open with a story or a case, then draw the lesson. The lesson sentence — often after the example, marked by 'this', 'such' or 'in other words' — is the claim.", examples: [{ english: "Opens with one diver's find, closes with 'the object kept its silence' — the general point is the closer.", note: "Examples are evidence; the drawn lesson is the idea." }] },
          { title: "Position five: the two-sentence sandwich", text: "Long paragraphs sometimes state a claim, elaborate at length, and restate it in fresh words at the end. When first and last sentences agree, you have the idea twice; when they differ, the LAST one is where the writer landed.", examples: [{ english: "First sentence offers a hypothesis, last sentence pronounces on it — map the paragraph by the last.", note: "Where openers and closers disagree, closers win." }] },
        ],
      },
      {
        type: "text",
        text: "The discipline that unites all five positions: the main idea is the sentence the OTHER sentences exist to support. Test any candidate sentence by deletion — remove it, and the paragraph loses its point; remove an example, and the paragraph merely loses an illustration. Claims survive the deletion test; support does not.",
      },
      {
        type: "example",
        title: "Claims vs their disguises, on library passages",
        items: [
          { english: "Water passage, paragraph B: claim = 'frozen water does the opposite [of shrinking]' — the floating-ice fact; the nine-per-cent figure and the ponds image are support.", note: "Headings match the claim, never the figure.", domain: "exam" },
          { english: "Reading-wars passage, paragraph E: opens with the balanced-literacy compromise, closes with the critics' test for real balance — the closing question IS the paragraph's point.", note: "A claim can be a question the reader is told to apply.", domain: "exam" },
          { english: "Barcode passage, paragraph F: first sentence announces diffusion; the railways, libraries and hospitals list is evidence; the database sentence is the consequence — the heading matched 'the label rebuilds the store', the consequence.", note: "Consequence sentences can carry claims too.", domain: "exam" },
          { english: "A candidate matches a heading containing 'umbrellas' to the lost-property notice because umbrellas appear there — example-lure in miniature.", note: "The notice's idea is the thirty-day rule, not the umbrella count.", domain: "exam" },
          { english: "A learner labels each paragraph of a library passage C (claim) or S (support) in the margin, then answers its headings block from the C labels alone.", note: "The deletion test, trained as a habit.", domain: "study" },
          { english: "On the GT lighthouses passage, a candidate maps paragraph F by its opening 'The people inside the towers gave the institution its human face' — and the headings item falls immediately.", note: "GT Section 3 tests the same skill on gentler material.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Main-idea mistakes corrected",
        items: [
          { wrong: "The main idea is the sentence with the most topic words in it.", right: "The main idea is the sentence the others support — found by position and the deletion test, not by word count.", reason: "Examples and evidence often repeat the topic words MORE than the claim does; frequency is not function." },
          { wrong: "A heading that quotes the paragraph's own words must be right.", right: "Correct headings paraphrase; headings that echo the paragraph's vocabulary are the standard distractors.", reason: "The wrong-answer workshop builds headings from the paragraph's prominent words precisely to catch vocabulary matchers." },
          { wrong: "Every paragraph's first sentence is its topic sentence.", right: "The first sentence is the claim's usual address, but concessions, questions and example-first paragraphs move it — usually to the end.", reason: "Four of the five taught positions put the claim somewhere other than, or in addition to, the opener." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Decide to read for claims, not topics: functions (claim, support, example) are what headings test."],
          ["While the clock runs", "Read the opener; on concession, question or example openers, jump to the closer; run the deletion test if torn."],
          ["If you are stuck", "Two headings both plausible? Ask which one the SUPPORT sentences serve — support is the claim's fingerprint."],
          ["Final minutes", "Never re-derive main ideas in the sweep; trust the earlier decision unless a qualifier is visibly broken."],
        ],
      },
      {
        type: "summary",
        points: [
          "A paragraph is one claim plus support; global questions test the claim, and locating questions live in the support.",
          "The claim hides in five positions: classic opener, concession build, question frame, example-first, and opener-closer sandwich.",
          "The deletion test identifies claims: remove the candidate sentence — a claim's removal destroys the paragraph's point.",
          "Correct headings paraphrase the claim; headings that echo the paragraph's words are engineered distractors.",
          "When opener and closer disagree, the closer wins: it is where the writer landed.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which skim protocol reads first sentences — and which special case sends it to the last sentence?", options: ["Scanning; digits", "Skimming; concession, question and example openers", "Close reading; qualifiers"], correctIndex: 1, explanation: "The skim reads openers at full attention and jumps to closers on concessions, questions and example-first paragraphs — exactly the claim positions taught here.", from: "Skimming" },
          { question: "The deletion test decides between what two kinds of sentence?", options: ["Long and short sentences", "Claims and support", "First and last sentences"], correctIndex: 1, explanation: "Remove a claim and the paragraph loses its point; remove support and it merely loses an illustration.", from: "Where the claim hides" },
          { question: "Why do headings that quote the paragraph's words usually fail?", options: ["Quotations are banned", "Correct answers paraphrase; echoes are engineered as distractors", "Headings must be shorter than paragraphs"], correctIndex: 1, explanation: "The distractor workshop builds wrong headings from the paragraph's prominent vocabulary — echoing is the trap, paraphrase is the answer.", from: "Main-idea mistakes corrected" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is a paragraph's main idea?",
        hints: ["Think function, not content: what job does the sentence do?"],
        options: [
          { id: "a", text: "The sentence containing the paragraph's most frequent topic words." },
          { id: "b", text: "The claim the paragraph's other sentences exist to support." },
          { id: "c", text: "Always the final sentence of the paragraph." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The claim the paragraph's other sentences exist to support.",
          "The main idea is defined by function — the sentence whose removal destroys the paragraph's point — not by position alone and never by word frequency, which belongs to examples and evidence.",
          "(a) confuses frequency with function; (c) is true only for the special cases among the five positions.",
        ),
        tags: ["areading", "main-ideas"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Find the main idea of this concession-built paragraph.",
        hints: ["The opener quotes a view — where does the writer's own claim land?"],
        passageTitle: "Main idea drill",
        passage: "Many commuters insist that the new tram line made their journeys worse. The travel diaries tell a different story. Door-to-door times fell by an average of six minutes once the dedicated lanes opened, and the diary keepers who reported the worst experiences were, almost without exception, those who still drove — watching the trams pass them from the queue.",
        question: "Which sentence carries the paragraph's main idea?",
        options: [
          { id: "a", text: "The first sentence — commuters insist journeys got worse." },
          { id: "b", text: "The closing material — door-to-door times fell, and the worst reports came from drivers stuck in queues." },
          { id: "c", text: "None: the paragraph only reports opinions." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The closing material — door-to-door times fell, and the worst reports came from drivers stuck in queues.",
          "The opener quotes the many-commuters view; the writer's evidence and verdict arrive after it. The claim the paragraph exists to make is the diaries' story, so the closer carries the main idea.",
          "(a) is the reported view the paragraph corrects; (c) ignores the diaries' data, which is an assertion, not an opinion.",
        ),
        tags: ["areading", "main-ideas", "concession"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A headings list contains 'The economics that decide the skyline'. The paragraph's opener reads: 'Whether a tower is built is rarely a question of engineering; it is answered in spreadsheets.' Which heading fits?",
        hints: ["Match the claim, not the vocabulary."],
        options: [
          { id: "a", text: "'The economics that decide the skyline' — money, not engineering, decides; the heading paraphrases the claim." },
          { id: "b", text: "A heading containing the word 'tower', whatever it says." },
          { id: "c", text: "A heading containing 'spreadsheets', because it quotes the paragraph." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "'The economics that decide the skyline' — money, not engineering, decides; the heading paraphrases the claim.",
          "The paragraph's claim is that finance governs construction; the economics heading restates that claim in fresh words. Vocabulary-overlap headings — 'tower', 'spreadsheets' — are the engineered alternative.",
          "(b) and (c) are the echo traps: correct headings paraphrase, they do not quote.",
        ),
        tags: ["areading", "main-ideas", "headings"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. State the deletion test.",
        question: "In one sentence: how does the deletion test tell a claim from support?",
        acceptedAnswers: ["remove the candidate sentence: if the paragraph loses its point it was the claim; if it merely loses an illustration it was support", "delete the sentence — a claim's removal destroys the paragraph's point, support's removal only removes an example", "remove it and see whether the paragraph still has its point; claims fail the paragraph without them", "delete the sentence: claims are load-bearing, support is decoration"],
        hints: [],
        feedback: fb(
          "Remove the sentence: a claim's deletion destroys the paragraph's point; support's deletion removes only an illustration.",
          "The deletion test is the functional definition of a main idea — it works in all five claim positions and never depends on word frequency.",
          "Answers based on position or vocabulary have missed the test's functional logic.",
        ),
        tags: ["areading", "main-ideas"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A long paragraph opens with a hypothesis and closes with a judgement that limits it. Which sentence do you map the paragraph by?",
        hints: [],
        options: [
          { id: "a", text: "The opener — first impressions carry the paragraph." },
          { id: "b", text: "The closer — when opener and closer disagree, the writer landed on the closer." },
          { id: "c", text: "Neither: sandwich paragraphs have no main idea." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The closer — when opener and closer disagree, the writer landed on the closer.",
          "Hypothesis-then-judgement paragraphs walk from a proposal to a position; the position is the paragraph's product, which is why the sandwich rule hands the main idea to the closing sentence.",
          "(a) reads the journey's start as its destination; (c) invents a defect — sandwich paragraphs simply state their claims twice.",
        ),
        tags: ["areading", "main-ideas", "sandwich"],
      }),
    ],
    homework: [
      "Label every paragraph of one library passage C (claim) or S (support) in your notes, then answer its headings block using only the C sentences.",
      "Find one real paragraph in any English article that opens with a question, and write down both the question and the answer sentence that carries its main idea.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-supporting-details",
    title: "Locating supporting details",
    description:
      "Examples, figures and explanations — where detail questions live, how they paraphrase, and how matching-information items are engineered from them.",
    objectives: [
      "identify the four kinds of supporting detail and the questions each kind attracts",
      "match a question's paraphrase to the support line it rewrites",
      "apply the order rule and reuse notes to matching-information banks",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "If main ideas are the skeleton of a passage, supporting details are the muscle — and most questions on the paper test the muscle. Figures, examples, explanations and concessions carry the answers to completion tasks, verdict statements and the whole matching-information family. This lesson teaches where support lives, how it paraphrases into questions, and the discipline that matching banks demand when letters may repeat.",
        beforeYouStart: [
          "You can separate claim from support from the main-ideas lesson.",
          "You can scan for digits, capitals and rare phrases.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the support layer where locating questions live"],
          ["Task & question types", "Matching information in full; completion and verdict items through their evidence lines"],
          ["What is assessed", "Reading for detail: finding and understanding specific information the passage states"],
          ["Why this matters", "Matching-information items are pure support-location tasks, and they appear on nearly every passage"],
        ],
      },
      { type: "heading", text: "The four kinds of support" },
      {
        type: "table",
        title: "What support looks like — and what it answers",
        headers: ["Kind", "Looks like", "Questions it feeds"],
        rows: [
          ["Figures & measurements", "Dates, percentages, sums, sizes, counts", "Table and note completion; TFNG statements that swap a number"],
          ["Examples & cases", "One diver, one farm, one school, one trial", "'Which paragraph gives an example of…'; matching information"],
          ["Explanations & mechanisms", "How something works, in steps or causes", "Flowchart and diagram tasks; 'how' completion items"],
          ["Concessions & objections", "A reported view the writer then handles", "Matching features (whose view?); YNNG attribution traps"],
        ],
        caption: "Every category paraphrases into questions the same way: the question restates the support's meaning in fresh words.",
      },
      {
        type: "steps",
        title: "The matching-information method",
        steps: [
          { title: "Read the statements before the passage — all of them", text: "Matching-information statements are location tasks: each one paraphrases one paragraph's support. Reading them first converts the block into a checklist your skim and scans will tick off paragraph by paragraph.", examples: [{ english: "Four statements read upfront; during the passage, paragraph C's sediment figures tick statement 3 without a second pass.", note: "The checklist converts a search into a recognition." }] },
          { title: "Hunt each statement's rarest concrete element", text: "Scan for the statement's most distinctive noun — the measurement, the species, the mechanism. Rare concrete elements are usually the passage's own words; abstract phrasing ('the economic side') is the question's dialect, not the passage's.", examples: [{ english: "'A device whose reading of the sky survived' → hunt 'sky', not 'device'; the passage says 'a mechanical model of the sky'.", note: "Hunt what the passage can't help saying." }] },
          { title: "Close-read every hit — support, not topic, decides", text: "A statement belongs to the paragraph whose SUPPORT states it, not whose topic resembles it. The close read asks: does this paragraph actually say the thing, in some corner of its support sentences?", examples: [{ english: "Statement about 'rising counts of wetland birds' belongs to the measurements paragraph, not to the wildlife-topic opener that never counts anything.", note: "Topic resemblance is the lure; support content is the answer." }] },
          { title: "Obey the reuse note — letters may repeat", text: "When the rubric allows 'any letter more than once', expect clustering: two or three statements can share a paragraph, and one paragraph can go unused. Never distribute letters by elimination logic.", examples: [{ english: "Statements 5, 7 and 8 all cite paragraph D under a reuse rubric — and statement 6's letter is used twice elsewhere.", note: "Elimination habits are fatal when reuse is legal." }] },
        ],
      },
      {
        type: "example",
        title: "Support under the questions",
        items: [
          { english: "Beaver passage: 'hundreds of thousands of litres in storm weather' — the figure feeds both a matching-information item and a note-completion blank.", note: "One support line can serve several question families.", domain: "exam" },
          { english: "Antikythera passage: the pin-and-slot mechanism — an explanation in three lines — feeds a diagram blank and a TFNG statement at once.", note: "Mechanism explanations are multi-purpose support.", domain: "exam" },
          { english: "A candidate cites paragraph A for 'the environmental cost of cotton' because paragraph A mentions cotton — but the water figure lives in paragraph G's support.", note: "Topic-mention versus support-content, the matching classic.", domain: "exam" },
          { english: "Reading-wars passage: 'some commentators still insist' — a concession that becomes a features item (whose view?) and a YNNG attribution trap.", note: "Concessions are the support family that owns attribution questions.", domain: "exam" },
          { english: "A learner takes ten statements from one library passage and writes, for each, its rarest concrete scan target — then checks hit rates.", note: "The target-choice reflex, trained deliberately.", domain: "study" },
          { english: "Under a reuse rubric, a candidate forces all seven letters into seven different paragraphs — and misses the two-statement cluster in D.", note: "Reuse notes are printed to be obeyed, not survived.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Support-location mistakes corrected",
        items: [
          { wrong: "A statement about birds belongs to the paragraph about wildlife.", right: "A statement belongs to the paragraph whose SUPPORT states it — the bird-count figure, not the wildlife topic.", reason: "Topic resemblance is how matching distractors are built; content is how they are beaten." },
          { wrong: "Each letter is used exactly once, so I can eliminate.", right: "Obey the printed rubric: when reuse is allowed, letters repeat and paragraphs go unused — elimination logic breaks.", reason: "The rubric's reuse note is information about the answer set; ignoring it invents a constraint the task never made." },
          { wrong: "Matching information means reading every paragraph carefully until something feels right.", right: "Read statements first, scan for each one's rarest concrete element, close-read the hits — feelings are not locations.", reason: "The four-step method turns the block into a bounded checklist; reading for resemblance is how the clock dies." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read all matching statements first and underline each one's rarest concrete element."],
          ["While the clock runs", "Scan per statement; close-read every hit for support content; obey the reuse note."],
          ["If you are stuck", "Two paragraphs both plausible? The one with the MEASUREMENT or EXAMPLE — not the topic — is where the statement lives."],
          ["Final minutes", "Unmatched statements get their most plausible letter — never a blank under a no-penalty rule."],
        ],
      },
      {
        type: "summary",
        points: [
          "Support comes in four families — figures, examples, explanations, concessions — and each feeds predictable question types.",
          "Matching-information statements paraphrase support: read them first, and hunt each one's rarest concrete element.",
          "Statements belong to the paragraph whose SUPPORT states them, never to the paragraph whose topic merely resembles them.",
          "Reuse rubrics change the game: letters may repeat, paragraphs may go unused, and elimination logic becomes a trap.",
          "One support line can serve several question families — a figure can fill a blank and settle a statement simultaneously.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which lesson supplies the scan for a statement's rarest concrete element?", options: ["Scanning", "Skimming", "Time management"], correctIndex: 0, explanation: "The scanning lesson's shape-hunting — digits, capitals, rare phrases — is exactly what a matching statement's concrete element needs.", from: "Scanning" },
          { question: "What is the difference between a topic match and a support match?", options: ["Topic matches are faster; support matches are safer", "Topic resemblance is the distractor; the support line's content is the answer", "They are the same thing"], correctIndex: 1, explanation: "Matching distractors borrow topics; correct answers cite the support sentence that actually states the content.", from: "The matching-information method" },
          { question: "Which two exceptions broke the order rule in the format lesson?", options: ["Concessions and examples", "Global questions and reusable matching banks", "Figures and dates"], correctIndex: 1, explanation: "Reusable matching banks — this lesson's subject — were the format lesson's second exception to passage order.", from: "Understanding the reading test" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "Which sentence decides a matching-information statement: the paragraph's topic sentence or its support sentences?",
        hints: ["Ask which sentences actually CONTAIN the statement's content."],
        options: [
          { id: "a", text: "The topic sentence — the paragraph's subject must match the statement." },
          { id: "b", text: "The support sentences — the statement belongs where the support actually states its content." },
          { id: "c", text: "Either, whichever paragraph feels right." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The support sentences — the statement belongs where the support actually states its content.",
          "Matching distractors are built from topic resemblance: the bird-count statement belongs to the paragraph with the count, not to the paragraph about wildlife in general.",
          "(a) is the engineered trap; (c) is not a method.",
        ),
        tags: ["areading", "support", "matching-information"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Match this statement to its paragraph.",
        hints: ["Hunt the rarest concrete element — the measurement."],
        passageTitle: "Matching drill — three mini-paragraphs",
        passage: "A. The reintroduction has drawn an audience. Riverside cameras became minor television attractions, and schoolchildren learned the animals' names.\n\nB. The monitoring results surprised even supporters. Ponds built by the animals held back hundreds of thousands of litres during storms, and the flood peak arriving downstream was measurably lower and later than before.\n\nC. Not every neighbour celebrates. Some farms reported ditches backing up, and anglers worried about salmon passage.",
        question: "Statement: 'a measured reduction in the size and timing of floods' — which paragraph contains it?",
        options: [
          { id: "a", text: "Paragraph A — the beavers are popular." },
          { id: "b", text: "Paragraph B — it holds the litres figure and the lower, later peak." },
          { id: "c", text: "Paragraph C — flooding is mentioned there too." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Paragraph B — it holds the litres figure and the lower, later peak.",
          "The statement paraphrases B's support: 'hundreds of thousands of litres' and 'lower and later' are the measurement the statement rewrites. C mentions flooding only as a complaint, without the measurement.",
          "(a) is a topic lure; (c) names the topic without the support content the statement specifies.",
        ),
        tags: ["areading", "support", "matching-information"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A matching rubric reads: 'You may use any letter more than once.' What does that licence change about your method?",
        hints: ["Think about elimination habits."],
        options: [
          { id: "a", text: "Nothing — each letter is still used once." },
          { id: "b", text: "Clustering becomes legal: several statements may share a paragraph, and elimination-by-used-letter must be abandoned." },
          { id: "c", text: "It means at least one letter is used twice, so you can predict which." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Clustering becomes legal: several statements may share a paragraph, and elimination-by-used-letter must be abandoned.",
          "The reuse note relaxes the answer set's shape: expect clusters and unused paragraphs, and match by content alone — the note never promises that any letter IS reused.",
          "(a) ignores the printed rule; (c) converts a permission into a prediction the rubric never makes.",
        ),
        tags: ["areading", "support", "reuse"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the four families of supporting detail.",
        question: "List the four kinds of support in one short answer.",
        acceptedAnswers: ["figures and measurements, examples and cases, explanations and mechanisms, concessions and objections", "figures, examples, explanations, concessions", "numbers, examples, mechanisms, objections", "measurements, cases, how-it-works, reported views"],
        hints: [],
        feedback: fb(
          "Figures and measurements; examples and cases; explanations and mechanisms; concessions and objections.",
          "Those four families cover the support layer where detail questions live — and each family feeds the question types listed in the lesson's table.",
          "Partial lists usually drop concessions, the family that owns attribution questions.",
        ),
        tags: ["areading", "support"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A statement reads: 'an explanation of how two gears reproduce an irregular motion'. Your scan target should be…",
        hints: [],
        options: [
          { id: "a", text: "The word 'explanation' — it is the statement's first noun." },
          { id: "b", text: "The words 'irregular motion' — the mechanism's name in the passage's dialect (e.g. 'varying speed')." },
          { id: "c", text: "No target: mechanism statements cannot be scanned." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The words 'irregular motion' — the mechanism's name in the passage's dialect (e.g. 'varying speed').",
          "Mechanism statements paraphrase the mechanism's vocabulary: hunt the motion's own words ('varying speed', 'changing speed'), which are rare and concrete — 'explanation' appears in every statement and locates nothing.",
          "(a) hunts the statement's most common word; (c) surrenders the scan's power on exactly the statements that need it most.",
        ),
        tags: ["areading", "support", "targets"],
      }),
    ],
    homework: [
      "Take a library passage with a matching-information block and, before answering, write each statement's rarest concrete scan target — then check how many first sweeps hit.",
      "From any English news article, collect one example of each support family (a figure, a case, a mechanism, a concession) and note which question type each would feed.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-paraphrase",
    title: "Understanding paraphrasing",
    description:
      "The single mechanism behind every question: synonym chains, grammar flips and sentence surgery — and why correct answers paraphrase while distractors echo.",
    objectives: [
      "recognise the three paraphrase operations: synonym, grammar flip and reordering",
      "translate question wording into passage wording and back",
      "apply the paraphrase-first rule: correct answers restate, distractors quote",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Paraphrasing is not one skill among many on the Reading paper — it is THE skill, the mechanism every question is built on. Each question rewrites the passage; each correct answer rewrites it again; each distractor quotes it with one relation changed. Candidates who see paraphrase as a system — three operations, endlessly recombined — stop being surprised by questions and start predicting them.",
        beforeYouStart: [
          "You can scan and close-read from the earlier lessons.",
          "You have met paraphrase as a listening skill in Module 2.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the engineering inside every question on the paper"],
          ["Task & question types", "All thirteen: every type paraphrases the passage in its question and answers"],
          ["What is assessed", "Understanding of opinion and detail THROUGH rewording — the tested ability to match meaning across wording"],
          ["Why this matters", "The paraphrase-first rule (answers restate, distractors echo) is the single most profitable heuristic on the paper"],
        ],
      },
      { type: "heading", text: "The three operations" },
      {
        type: "steps",
        title: "How meaning survives a rewrite",
        steps: [
          { title: "Operation one: the synonym chain", text: "Single words swap within their families: 'majority' → 'most', 'doubt' → 'question', 'not until' → 'only after'. Chains run two or three deep, so translate the question's key words into their families before hunting.", examples: [{ english: "Question 'the majority of residents' ↔ passage 'most local people' — two links, one meaning.", note: "Word families, not dictionaries: hunt the family, catch any member." }] },
          { title: "Operation two: the grammar flip", text: "The same meaning changes grammatical direction: verbs become nouns ('they decided' → 'the decision'), active becomes passive ('X caused Y' → 'Y was caused by X'), and clauses trade places. The flip is why scanning for the question's grammar often misses the passage's.", examples: [{ english: "Passive 'the standard was adopted' flips to active 'the industry adopted the standard' — same event, different subject slot.", note: "Scan for CONTENT words; grammar is a disguise, not a location." }] },
          { title: "Operation three: the reorder", text: "Information redistributes across sentences: two passage clauses fuse into one question sentence, or one dense sentence splits in two. Reordering is why a statement can feel 'scattered' — its halves live in neighbouring lines.", examples: [{ english: "Passage: 'the ponds rose gently because the dam leaks constantly'. Statement: 'the constant leaking of the dam keeps pond levels stable' — fused, reworded, reordered.", note: "When a statement feels split, hunt its halves separately." }] },
        ],
      },
      {
        type: "text",
        text: "The rule that organises it all: correct answers PARAPHRASE the passage, while distractors ECHO it. An option that copies the passage's words with one altered relation — a changed qualifier, a swapped attribution, a shifted time — is quoting precisely to catch the vocabulary matcher. When two options both look right, the one that rewords is usually the one that answers.",
      },
      {
        type: "example",
        title: "Paraphrase on library material",
        items: [
          { english: "Passage: 'water is at its densest at four degrees Celsius'. Statement: 'water reaches maximum density before it freezes' — synonyms (densest → maximum density) plus a reorder (before freezing = at four degrees).", note: "Two operations stacked — the normal depth for a band-7 item.", domain: "exam" },
          { english: "Passage: 'exchanges are issued instantly as a voucher code'. Question option: 'an exchange is issued as a voucher code immediately' — the ECHO version; the correct option said 'refunds wait, exchanges do not'.", note: "Echoes quote; answers restate the relation.", domain: "exam" },
          { english: "Passage: 'The stripes won: circles wasted ink'. Correct heading: 'Two patterns enter, one leaves' — a full paraphrase with zero shared content words.", note: "Headings are the purest paraphrase test.", domain: "exam" },
          { english: "A candidate hunting 'expensive' misses, converts to 'the barrier is the balance sheet', and lands — the synonym chain run in reverse, from question into passage.", note: "Conversion is paraphrase used as a search tool.", domain: "exam" },
          { english: "A learner lists the synonym families of one library passage's key nouns and tests a friend: passage word in, family member out.", note: "Families are trainable vocabulary, not luck.", domain: "study" },
          { english: "An option copies 'stored indoors' but adds 'in winter' — the qualifier the passage never printed. The echo minus one detail equals one lost mark.", note: "Echoes arrive edited; the edit is the answer.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Paraphrase mistakes corrected",
        items: [
          { wrong: "If an option uses the passage's exact words, it must be right — it is clearly supported.", right: "Treat verbatim echoes as suspects: correct answers paraphrase, and echoes are engineered with one edited relation.", reason: "The distractor workshop builds wrong options by quoting the passage and changing a qualifier, owner or time — the echo is the bait." },
          { wrong: "Paraphrase means finding one synonym.", right: "Paraphrase stacks three operations — synonym chains, grammar flips and reorders — often all at once.", reason: "Single-word thinking misses items where the meaning survives a full grammatical reconstruction." },
          { wrong: "I translate the passage into the question's words.", right: "Translate in BOTH directions — question into passage for scanning, passage into question for deciding.", reason: "Locating needs the passage's dialect; deciding needs the question's; fluent candidates swap direction deliberately." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the rule: answers restate, echoes deceive. Say it before every choice-based block."],
          ["While the clock runs", "Run synonym chains from question to passage while scanning; run them back while deciding."],
          ["If you are stuck", "Two candidates both supported? Choose the one that PARAPHRASES the evidence over the one that quotes it."],
          ["Final minutes", "Spot-check flagged choices for edited echoes — the qualifier, owner or time that the passage never printed."],
        ],
      },
      {
        type: "summary",
        points: [
          "Paraphrase is the mechanism inside every question: the question rewrites the passage, and the correct answer rewrites it again.",
          "Three operations carry it: synonym chains, grammar flips and reorders — usually stacked.",
          "The paraphrase-first rule: correct answers restate meaning in fresh words; distractors echo the passage with one edited relation.",
          "Translation runs both directions — question into passage for hunting, passage into question for deciding.",
          "Synonym families, not single words, are the unit of translation; train them per topic from the library's glossaries.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which lesson taught synonym conversion after a failed scan?", options: ["Scanning", "Time management", "Understanding the reading test"], correctIndex: 0, explanation: "The scanning lesson's third step: a miss means the target needs synonym conversion — paraphrase used as a search tool.", from: "Scanning" },
          { question: "The paraphrase-first rule says correct answers do what?", options: ["Quote the passage exactly", "Paraphrase while distractors echo", "Avoid the passage's topic words entirely"], correctIndex: 1, explanation: "Answers restate meaning in fresh words; echoes quote the passage with one edited relation — the engineered trap.", from: "The three operations" },
          { question: "Which close-read job does the paraphrase rule reinforce?", options: ["Grammar fit", "Claim comparison over word overlap", "Qualifier counting"], correctIndex: 1, explanation: "The close read compares claims, not words — the same insight the paraphrase-first rule applies to options.", from: "Intensive reading" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is the paraphrase-first rule?",
        hints: ["Think about what correct options do that wrong options do not."],
        options: [
          { id: "a", text: "Correct answers paraphrase the passage; distractors echo it with one edited relation." },
          { id: "b", text: "Always choose the option with the most synonyms." },
          { id: "c", text: "Paraphrase the question before reading the options." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Correct answers paraphrase the passage; distractors echo it with one edited relation.",
          "The distractor workshop quotes the passage and changes a qualifier, owner or time — so the echo is the bait and the rewording is the answer. This one heuristic outperforms hours of vocabulary study.",
          "(b) confuses surface variety with meaning; (c) is a fine habit but not the rule.",
        ),
        tags: ["areading", "paraphrase"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Identify the paraphrase operations in this pair.",
        hints: ["Name the operations: synonym, grammar flip, reorder."],
        passageTitle: "Paraphrase drill",
        passage: "Because the structure leaks constantly, the pond behind it rises and falls gently rather than flashing from flood to flood.",
        question: "Statement: 'The dam's continual leaking keeps the water level behind it comparatively stable.' Which operations connect statement to passage?",
        options: [
          { id: "a", text: "Synonym chains only ('leaks' → 'leaking')." },
          { id: "b", text: "A grammar flip (because-clause → subject) plus synonym chains (gently → comparatively stable, flashing → stable)." },
          { id: "c", text: "None — the statement is unrelated to the passage line." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A grammar flip (because-clause → subject) plus synonym chains (gently → comparatively stable, flashing → stable).",
          "The passage's causal clause becomes the statement's grammatical subject — a flip — while the vocabulary rewords along synonym chains. Stacking is the norm: most real items carry two operations at once.",
          "(a) undercounts; (c) misses a meaning that survives the surgery intact.",
        ),
        tags: ["areading", "paraphrase", "operations"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Passage: 'The industry adopted the striped standard in April 1973.' Which option is the paraphrase, and which the echo-trap?",
        hints: ["Look for the edited relation in the echoing option."],
        options: [
          { id: "a", text: "The striped design became the trade's chosen standard in the spring of 1973." },
          { id: "b", text: "The striped standard was rejected by the industry in April 1973." },
          { id: "c", text: "Both are echoes; neither paraphrases." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The striped design became the trade's chosen standard in the spring of 1973.",
          "Option A rewords cleanly: industry → trade, adopted → chosen, April → spring. Option B quotes 'striped standard', 'industry' and 'April 1973' verbatim but flips one relation — rejected for adopted — the edited echo in its pure form.",
          "(c) misses that A carries three synonym links and zero edited relations.",
        ),
        tags: ["areading", "paraphrase", "echoes"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the three paraphrase operations.",
        question: "List the three operations in one short answer.",
        acceptedAnswers: ["synonym chains, grammar flips, reorders", "synonym, grammar flip, reordering", "synonyms, grammatical inversion, redistribution/reordering", "word swap, grammar change, sentence reorder"],
        hints: [],
        feedback: fb(
          "Synonym chains, grammar flips and reorders.",
          "Those three operations, usually stacked, carry every rewrite the paper performs — from questions to options to headings.",
          "Answers listing only synonyms have met the shallowest tenth of the mechanism.",
        ),
        tags: ["areading", "paraphrase"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Two options both look supported. One quotes the passage's words almost exactly; the other rewords completely. The rule says…",
        hints: [],
        options: [
          { id: "a", text: "Choose the quoting option — exact words mean exact support." },
          { id: "b", text: "Favour the rewording option, but verify it against the lines — echoes are engineered, paraphrases are usually honest." },
          { id: "c", text: "Skip the question: two plausible options means the item is broken." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Favour the rewording option, but verify it against the lines — echoes are engineered, paraphrases are usually honest.",
          "The paraphrase-first rule is a heuristic, not a law: it tells you where suspicion belongs (on the echo), while the close read settles the case against the lines.",
          "(a) is the trap the rule exists to disarm; (c) abandons a decidable item.",
        ),
        tags: ["areading", "paraphrase", "heuristic"],
      }),
    ],
    homework: [
      "Take one library passage and write the synonym families for its five most question-worthy nouns — then check its questions to see which family members they used.",
      "Find two multiple-choice items in the library where the echo option quotes the passage; write down the single edited relation that makes each echo wrong.",
    ],
  },
];
