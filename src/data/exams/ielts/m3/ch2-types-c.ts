/**
 * Chapter 2C — The question types (PROMPT 45, Part B).
 *
 * Summary, note and table completion — the family that restructures the
 * passage's information into a new printed shape.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const questionTypeLessonsC: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-summary-completion",
    title: "Summary completion",
    description:
      "A paraphrased miniature of the passage with gaps: prediction, the synopsis-order map, and word-limit discipline on a one-to-three-word budget.",
    objectives: [
      "read the summary as a paraphrase map before hunting any gap",
      "hunt gaps in synopsis order, predicting grammar and content per gap",
      "respect one-to-three-word limits with words from the passage",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "A summary is the passage rewritten small: one paragraph that paraphrases the whole text, with gaps where the key content belongs. Everything about it is paraphrase — the summary's sentences reword the passage's, so locating a gap means matching the summary's dialect to the passage's through the synonym chains you already command. The summary is also a gift: read first, it is a map of exactly what the passage will be asked about.",
        beforeYouStart: [
          "You can run the completion method from the sentence lesson.",
          "You can translate question wording into passage wording.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — summaries appear on narrative and argumentative passages, both variants"],
          ["Task & question types", "Summary completion (ONE WORD ONLY, or NO MORE THAN TWO/THREE WORDS)"],
          ["What is assessed", "Understanding the main ideas through a paraphrased synopsis, and transferring exact words"],
          ["Why this matters", "The summary doubles as a passage map: reading it first previews the questions' territory"],
        ],
      },
      { type: "heading", text: "Components 1–2 — Definition and instructions" },
      {
        type: "text",
        text: "Definition: a paragraph-length paraphrase of the passage (or of part of it) with numbered gaps, completed from the passage inside a printed limit — 'Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.' is the strictest form; two- and three-word limits also print. ONE WORD ONLY means exactly one word, however tempting the two-word phrase it sits inside; the limit's arithmetic is the mark's arithmetic.",
      },
      { type: "heading", text: "Component 3 — The solving strategy" },
      {
        type: "steps",
        title: "The summary method",
        steps: [
          { title: "Step 1: Read the whole summary first — as a map", text: "Read the summary top to bottom before hunting any gap: it paraphrases the passage's arc, so its sentences tell you which paragraphs hold which answers, in order. The summary IS the question set's preview.", examples: [{ english: "A six-gap summary whose sentences run 'origin → mechanism → adoption' tells you the answers live in that paragraph order.", note: "Synopses preserve passage order." }] },
          { title: "Step 2: Predict per gap, hunt in synopsis order", text: "Each gap gets a grammar-and-content prediction before scanning; each hunt starts near the previous gap's location, because summaries follow the passage's order like every ordered type.", examples: [{ english: "Gap 2 sits in a sentence about the laser's arrival: predict an instrument noun; hunt below gap 1's paragraph.", note: "The ratchet, in miniature." }] },
          { title: "Step 3: Match the paraphrase, not the words", text: "The summary's sentence paraphrases the passage's — so locate by meaning through synonym chains, then confirm the exact words the gap needs. The sentence's own vocabulary is the wrong dialect; the summary's is the bridge.", examples: [{ english: "Summary: 'he stretched dots downwards into lines' — passage: 'extended them downward into lines of varying thickness': matched through the verb family.", note: "The chain runs summary-to-passage." }] },
          { title: "Step 4: Copy exact, count at typing", text: "The gap takes the passage's words inside the limit — counted at the moment of typing, with the sweep re-checking spelling and limit together. ONE WORD ONLY is absolute: a correct word plus its neighbour scores zero.", examples: [{ english: "'attenuation' under ONE WORD ONLY: typing 'the attenuation' breaks the count and the mark.", note: "Counting is part of copying." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Worked example" },
      {
        type: "example",
        title: "Summaries filled, on library passages",
        items: [
          { english: "Barcode summary: 'Woodland developed his code by adapting a signalling system learned in childhood: he stretched ___ downwards into lines.' — prediction: the signalling system's unit; located through the verb chain; answer 'dots'.", note: "One word, one chain, one copy.", domain: "exam" },
          { english: "Gorilla summary: 'The experiment is now a staple of psychology teaching… the finding bears the name inattentional ___.' — prediction: the term's head noun; answer 'blindness', copied exact.", note: "Technical terms are summary favourites.", domain: "exam" },
          { english: "Water summary: 'water is at its densest before it ___' — located at the four-degrees sentence; answer 'freezes', fitted grammatically to the slot's tense.", note: "The slot's grammar adjusts the copy.", domain: "exam" },
          { english: "A candidate types 'concentric circles' against ONE WORD ONLY — the right noun broken by its adjective; 'circles' alone restores the mark.", note: "ONE WORD ONLY has no sense of fairness.", domain: "exam" },
          { english: "A learner reads the summary aloud first, naming the passage paragraph each sentence paraphrases, then hunts only in the named neighbourhoods.", note: "The map-first habit, trained.", domain: "study" },
          { english: "GT lighthouse summary: 'Smeaton locked his stones together with ___ joints' — answer 'dovetail', the passage's own noun, located by the joint-mechanism line.", note: "Mechanism nouns cross the variant divide.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "I hunt each gap by matching the summary's own words in the passage.", right: "Summaries paraphrase: translate through synonym chains and locate by meaning, then take the passage's words.", reason: "The summary's dialect is deliberately different — word-matching hunts a dialect the passage never speaks." },
          { wrong: "ONE WORD ONLY is a rough guide to concision.", right: "ONE WORD ONLY is exact: a correct word plus one neighbour scores zero — count at typing.", reason: "The rubric's arithmetic is marking arithmetic; concision is not a scale but a cliff." },
          { wrong: "The summary covers the whole passage, so gaps can live anywhere.", right: "Summaries preserve passage order: hunt each gap below the previous one's location, and use the summary's arc as the neighbourhood map.", reason: "Order-rule reading halves the hunt; anywhere-reading pays full price per gap." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the whole summary as a map; note its arc and the limit's exact wording."],
          ["While the clock runs", "Predict per gap; hunt in synopsis order; locate by paraphrase; copy and count."],
          ["If you are stuck", "Re-read the summary sentence either side of the gap — its context often names the passage neighbourhood."],
          ["Final minutes", "Sweep the block: every gap filled, every limit honoured, every word letter-exact."],
        ],
      },
      {
        type: "summary",
        points: [
          "A summary is the passage paraphrased small — read it first as a map of the questions' territory.",
          "Gaps follow synopsis order: predict per gap, hunt below the previous hit.",
          "Locate by meaning through synonym chains; the summary's own words are the wrong dialect.",
          "The limit is marking arithmetic: ONE WORD ONLY is exact, and counting happens at typing.",
          "The sweep audits all three failure modes together: blank, limit, spelling.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which lesson built synonym-chain translation between dialects?", options: ["Understanding paraphrasing", "Tone", "Reference words"], correctIndex: 0, explanation: "The three operations — synonym chains, grammar flips, reorders — are the summary-to-passage bridge.", from: "Understanding paraphrasing" },
          { question: "What are the completion family's three failure modes?", options: ["Wrong word, broken limit, misspelled copy", "Slow scan, wrong option, blank", "Paraphrase, echo, qualifier"], correctIndex: 0, explanation: "Each destroys the mark independently; the summary inherits all three plus its own paraphrase layer.", from: "Sentence completion" },
          { question: "What does the order rule promise for ordered question types?", options: ["Answers follow passage order within the group", "Every letter is used once", "Options are alphabetical"], correctIndex: 0, explanation: "The ratchet bounds each hunt below the previous located answer — summaries included.", from: "Understanding the reading test" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is a summary-completion passage-summary, in relation to the passage?",
        hints: ["Think paraphrase and order."],
        options: [
          { id: "a", text: "A word-for-word extract of the passage with words removed." },
          { id: "b", text: "A paraphrased miniature that preserves the passage's arc and order — a map of what the questions test." },
          { id: "c", text: "An unrelated paragraph on the same topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A paraphrased miniature that preserves the passage's arc and order — a map of what the questions test.",
          "Summaries reword the passage small: their sentences paraphrase the original's, follow its order, and preview exactly the territory the gaps will ask about.",
          "(a) describes a cloze, not a summary; (c) would make the task unsolvable by design.",
        ),
        tags: ["areading", "summary", "definition"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Fill the gap by the method.",
        hints: ["Read the whole mini-summary first; predict the gap's class; then locate by paraphrase."],
        passageTitle: "Summary drill",
        passage: "The dike was rebuilt three times in a century, and each rebuild used fewer stones than the last. The first wall was dry-laid granite; the second added iron clamps to the joints; the third, after the flood of 1902, was poured concrete faced with the original blocks — the engineers keeping the harbour's silhouette while replacing its bones.",
        question: "Summary: 'Each rebuild lightened the structure: granite gave way to clamped stone, and finally to ___, faced with the original blocks.' (ONE WORD ONLY)",
        options: [
          { id: "a", text: "concrete — the poured material, one word, located by the facing clause." },
          { id: "b", text: "poured concrete — the passage's exact phrase, but two words against ONE WORD ONLY." },
          { id: "c", text: "bones — the summary's own metaphor, echoed from the passage's final clause." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "concrete — the poured material, one word, located by the facing clause.",
          "The summary's final clause paraphrases the passage's facing sentence; the gap's prediction is a building material, and 'concrete' fits the slot and the ONE WORD limit. The passage's two-word phrase breaks the count, and the metaphor is not a material.",
          "(b) has the right content and a broken limit — zero; (c) copies a decorative noun that fills no slot.",
        ),
        tags: ["areading", "summary", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. You cannot find a gap's location by matching any of the summary sentence's words. What is the trained next move?",
        hints: ["The summary speaks a different dialect."],
        options: [
          { id: "a", text: "Conclude the gap is NOT GIVEN and leave it blank." },
          { id: "b", text: "Translate through synonym chains: take the sentence's MEANING into the passage's likely vocabulary, and hunt that." },
          { id: "c", text: "Copy the most frequent noun from the passage." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Translate through synonym chains: take the sentence's MEANING into the passage's likely vocabulary, and hunt that.",
          "A summary that matched the passage's words would not test paraphrase: the miss means the dialect needs translating, exactly as a scan-miss triggers synonym conversion.",
          "(a) abandons an ordered, findable gap; (c) answers by frequency, which is noise.",
        ),
        tags: ["areading", "summary", "paraphrase"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. State why the summary should be read in full before hunting any gap.",
        question: "In one sentence: what two things does a full first read of the summary give you?",
        acceptedAnswers: ["the passage-arc map — which paragraphs hold which gaps — and each gap's context for prediction", "a map of the answers' paragraph order, plus the context that predicts each gap's class", "the arc (gap neighbourhoods) and per-gap context for predictions", "it maps which paragraphs hold which answers and gives each gap prediction context"],
        hints: [],
        feedback: fb(
          "The passage-arc map — which paragraphs hold which gaps — and each gap's context for prediction.",
          "The summary is a two-way instrument: its order previews the answers' neighbourhoods, and its sentences frame each gap's grammar and content predictions.",
          "Answers naming only one of the two gifts have half the instrument.",
        ),
        tags: ["areading", "summary"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A summary gap sits in a sentence paraphrasing the passage's final paragraph, but your hunt keeps landing in the opening paragraphs. What went wrong?",
        hints: [],
        options: [
          { id: "a", text: "The passage is unordered — summaries ignore the order rule." },
          { id: "b", text: "The hunt's target came from the summary's own vocabulary instead of the paraphrased meaning — the opening paragraphs share surface words with the summary's dialect." },
          { id: "c", text: "The gap belongs in the opening paragraphs; the summary's position means nothing." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The hunt's target came from the summary's own vocabulary instead of the paraphrased meaning — the opening paragraphs share surface words with the summary's dialect.",
          "Summaries preserve order, so a final-paragraph sentence's gap lives near the passage's end: landings in the opening paragraphs mean the hunt spoke the summary's dialect, and the passage's opening coincidentally shares its words.",
          "(a) is false — synopses are ordered; (c) discards the map the type gives you.",
        ),
        tags: ["areading", "summary", "dialect"],
      }),
    ],
    homework: [
      "Read one library summary in full and write its arc (three or four words per sentence) before answering; then check your arc against the passage's paragraph map.",
      "Audit your last five summary answers for the limit: count each at typing and note any near-misses the sweep should have caught.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-note-completion",
    title: "Note completion",
    description:
      "The passage's content as a researcher's notes: bullet logic, label-anchored hunting, and grammar prediction in telegraphic sentences.",
    objectives: [
      "read note layouts as compressed arguments — headings, bullets and sub-notes",
      "anchor hunts on note labels and predict each gap's class",
      "copy within limits into telegraphic grammar",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Note completion reprints the passage's content as notes — headed sections, bullet points, telegraphic phrases — and removes the key words. The layout is the gift: notes are organised by topic with visible labels, so each gap's hunt has an anchor more precise than any sentence. The challenge is grammar in miniature: notes strip sentences to their skeletons, and predictions must fit the skeleton's slots.",
        beforeYouStart: [
          "You can run the completion method.",
          "You can predict a gap's class from its neighbours.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — notes appear on explanatory passages and GT workplace documents"],
          ["Task & question types", "Note completion (ONE WORD / NO MORE THAN TWO/THREE WORDS)"],
          ["What is assessed", "Locating and transferring detail from restructured, compressed text"],
          ["Why this matters", "The labels do half the locating work — candidates who read them hunt half as far"],
        ],
      },
      { type: "heading", text: "Components 1–2 — Definition and instructions" },
      {
        type: "text",
        text: "Definition: the passage's information reorganised as headed notes with numbered gaps — completed, like every completion type, with the passage's own words inside a printed limit. Notes are telegraphic: articles and verbs disappear, and what remains is label plus content. The limit is the same marking arithmetic as the family's other members; telegraphic grammar means the copy often fits even when the full sentence would not.",
      },
      { type: "heading", text: "Component 3 — The solving strategy" },
      {
        type: "steps",
        title: "Label, predict, hunt, fit",
        steps: [
          { title: "Step 1: Read the notes' architecture first", text: "Read the section headings and bullet labels before any gap: they name the topics whose paragraphs hold the answers, in passage order. The architecture is a printed map more explicit than any other type's.", examples: [{ english: "Notes headed 'Congestion charging — the essentials' with bullets on pasture, Singapore, buses, transport: four labelled hunts, four neighbourhoods.", note: "Labels are pre-attached scan targets." }] },
          { title: "Step 2: Anchor the hunt on the label, predict from the gap's slot", text: "Hunt the label's concept in the passage, then read the local slot: a gap after 'safety' wants a garment or equipment noun; a gap after 'every' wants a time word. Label anchors the neighbourhood; slot grammar predicts the word.", examples: [{ english: "Bullet: 'Footwear: safety ___ are compulsory' — label 'footwear' plus slot after the adjective: the noun 'boots', located at the boot rule's sentence.", note: "Label plus slot narrows to one candidate family." }] },
          { title: "Step 3: Fit the telegraphic grammar", text: "Notes strip grammar, so check the copy against the note's skeleton: singular or plural as the label implies, no articles the skeleton omits. A word that fits the full sentence but breaks the note's economy still fits — the skeleton defines the slot, not the original sentence.", examples: [{ english: "Note: 'reporting near-misses protects the reporting ___' — plural 'culture' would break the note's sense; 'culture' singular fits and the passage supplies it.", note: "The skeleton is the grammar authority." }] },
          { title: "Step 4: Copy exact and count, label by label", text: "Each bullet's answer is copied inside its limit at typing; the sweep audits the block label by label — blanks, limits, spelling — which is faster than sentence-by-sentence because the labels index the work.", examples: [{ english: "Four bullets, four copies, four counts: the sweep re-runs the labels in ten seconds.", note: "Labels index the audit too." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Worked example" },
      {
        type: "example",
        title: "Notes filled, on library material",
        items: [
          { english: "GT warehouse notes: 'Footwear: safety ___' — label footwear, slot noun: 'boots', located in one sweep at the compulsory-boots sentence.", note: "GT documents are note-shaped already.", domain: "exam" },
          { english: "Traffic notes: 'Singapore 1975: a daily licence to enter the city ___' — label Singapore, slot place: 'centre', located at the city-centre clause.", note: "Labels plus slots are the fastest duo in the family.", domain: "exam" },
          { english: "GT returns notes: 'hand-tighten every screw, then finish with the ___ provided' — label assembly, slot tool: 'key'.", note: "Tool nouns are label gifts.", domain: "exam" },
          { english: "A candidate ignores the note's plural skeleton and copies 'walkway' where the label implies the marked set — the passage's plural 'walkways' was both the fit and the copy.", note: "Skeletons carry number.", domain: "exam" },
          { english: "A learner rewrites one library paragraph as notes from memory, then compares their gaps to the passage's own note block.", note: "Note-making as reverse engineering.", domain: "study" },
          { english: "Placebo notes: 'open-label: patients told ___' — prediction: what patients were told (the truth); located at 'told, plainly and in writing': the gap takes 'plainly' or restructures. The label 'open-label' anchored the hunt.", note: "Labels anchor even awkward slots.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "Notes are sentence fragments, so any related word fits a gap.", right: "The note's skeleton is a grammar authority: number, class and economy are declared by the label and slot, and the copy must fit them.", reason: "Telegraphic does not mean lawless — the skeleton's slots are as strict as a sentence's, and stricter about number." },
          { wrong: "I hunt each gap by reading the passage from the top.", right: "Anchor on the label: the headings name each gap's paragraph, and the order rule holds between bullets.", reason: "Label-anchored hunts are bounded before they begin; top-of-passage reading pays the full price per gap." },
          { wrong: "The passage's phrase for a concept always fits the note.", right: "Fit the skeleton first: the passage's full phrase may break the limit or the note's number, and the note's economy decides what travels.", reason: "Transfer is into the note's grammar, not out of the passage's." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the architecture: headings and labels name every gap's neighbourhood."],
          ["While the clock runs", "Anchor hunts on labels; predict from slots; fit the skeleton; copy and count."],
          ["If you are stuck", "Re-read the label's exact wording — paraphrase between label and passage is the usual missing link."],
          ["Final minutes", "Sweep the block label by label: blank, limit, spelling — the labels index the audit."],
        ],
      },
      {
        type: "summary",
        points: [
          "Notes are the passage compressed into labelled architecture — the labels are pre-attached scan targets.",
          "Anchor each hunt on its label; predict each gap from its slot's telegraphic grammar.",
          "The skeleton is a grammar authority: number and class are declared by the note, and copies must fit them.",
          "Labels index the sweep: the block audits label by label, faster than sentence types.",
          "GT workplace documents are note-shaped by nature — the type is a GT speciality and an Academic regular.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "What anchors a note gap's hunt?", options: ["The passage's title", "The note's label or heading", "The gap's number"], correctIndex: 1, explanation: "Labels name the topic whose paragraph holds the answer — the architecture is a printed map.", from: "The solving strategy" },
          { question: "Which rule governs number in a copied answer?", options: ["The passage's original number", "The note's skeleton — labels and slots declare number and class", "No rule: fragments accept anything"], correctIndex: 1, explanation: "The skeleton is the grammar authority: transfer is INTO the note's economy.", from: "Step 3 — Fit the telegraphic grammar" },
          { question: "Which failure modes does the label-by-label sweep audit?", options: ["Blank, limit, spelling", "Topic, tone, audience", "Frame, content, licence"], correctIndex: 0, explanation: "The completion family's three failure modes, indexed by the labels for speed.", from: "Sentence completion" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What is the fastest anchor for a note gap's hunt?",
        hints: ["The notes are labelled architecture."],
        options: [
          { id: "a", text: "The passage's opening paragraph." },
          { id: "b", text: "The note's label or heading — it names the topic whose paragraph holds the answer." },
          { id: "c", text: "The gap's question number." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The note's label or heading — it names the topic whose paragraph holds the answer.",
          "Labels are pre-attached scan targets: the architecture maps every gap's neighbourhood before the reading begins, which is why note blocks reward label-readers and punish top-of-passage readers.",
          "(a) ignores the printed map; (c) is an index, not an anchor.",
        ),
        tags: ["areading", "notes", "labels"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Predict from the slot's telegraphic grammar.",
        sentence: "Warehouse notes: 'Pedestrians must use the marked ___ when trucks are working.'",
        acceptedAnswers: ["a plural noun for paths or routes", "a plural concrete noun — walkways, paths, routes", "plural noun naming walking routes", "a routes-or-paths plural noun"],
        hints: ["What does 'marked' plus the plural-signal 'the' tell you?"],
        feedback: fb(
          "A plural noun for paths or routes.",
          "The slot after 'marked' with the truck context wants a plural routes noun — and the passage's 'marked walkways' supplies both the meaning and the number the skeleton declares.",
          "Singular predictions ignore the skeleton's number logic.",
        ),
        tags: ["areading", "notes", "grammar"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Anchor on the label, then fill the gap.",
        hints: ["The label names the neighbourhood; the slot declares the class."],
        passageTitle: "Notes drill",
        passage: "Admission: adults £9, seniors £7, children under 12 free with a paying adult. The family ticket — two adults and up to three children — is £24. The café stops serving hot food at 4 pm, an hour before the gates.",
        question: "Notes: 'Admission: family ticket — two adults and up to ___ (NO MORE THAN TWO WORDS AND/OR A NUMBER)'",
        options: [
          { id: "a", text: "three children — the label 'admission' anchors the price sentence; the slot wants the family's other half." },
          { id: "b", text: "£24 — the ticket's price, which the note already implies." },
          { id: "c", text: "4 pm — the café's time, from the wrong labelled paragraph." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "three children — the label 'admission' anchors the price sentence; the slot wants the family's other half.",
          "The admission label bounds the hunt to the price sentences; the slot after 'up to' wants the ticket's composition, and 'three children' copies within the limit — number and class both fitting the note's skeleton.",
          "(b) answers the wrong slot; (c) crosses into another label's neighbourhood entirely.",
        ),
        tags: ["areading", "notes", "worked"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Why does the skeleton have grammar authority over the copied word's form?",
        question: "In one sentence: whose grammar decides the copy's number and class — the passage's sentence or the note's skeleton — and why?",
        acceptedAnswers: ["the note's skeleton: transfer is INTO the note's economy, so its labels and slots declare the number and class the copy must take", "the skeleton — you are writing into the note, so its telegraphic slots, not the passage's full sentences, set number and class", "the note's skeleton decides, because answers are written into its grammar", "the skeleton: copies must fit the note's slots, whose number and class are declared by labels"],
        hints: [],
        feedback: fb(
          "The note's skeleton: transfer is INTO the note's economy, so its labels and slots declare the number and class the copy must take.",
          "The answer is written in the note, not the passage: its telegraphic slots are the destination grammar, and a copy that breaks the skeleton's number breaks the answer.",
          "Answers crediting the passage's sentence have the transfer's direction backwards.",
        ),
        tags: ["areading", "notes"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A note bullet reads 'Assembly: fix the lowest shelf first, marked with a red ___'. Your hunt for 'assembly' lands on two paragraphs: the parts-check paragraph and the fixing-order paragraph. Which holds the answer, and how do you know?",
        hints: [],
        options: [
          { id: "a", text: "The parts-check paragraph — it mentions the shelf set first." },
          { id: "b", text: "The fixing-order paragraph — the bullet's content ('fix the lowest shelf first') names it; the label anchors, the bullet's own words confirm." },
          { id: "c", text: "Either; the label alone cannot separate them." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The fixing-order paragraph — the bullet's content ('fix the lowest shelf first') names it; the label anchors, the bullet's own words confirm.",
          "Labels anchor neighbourhoods; the bullet's remaining words confirm within them. The parts-check paragraph shares the label's topic but not the bullet's specific content — the two-step anchor-and-confirm is the method's answer to label-sharing paragraphs.",
          "(a) trusts the label alone and stops; (c) abandons the confirmation step the method provides.",
        ),
        tags: ["areading", "notes", "anchoring"],
      }),
    ],
    homework: [
      "Take one library note block and write each label's paragraph letter beside it before answering; grade how many labels anchored on the first hunt.",
      "Rewrite one library paragraph as three labelled notes from memory, then check your gaps against the passage's actual note block.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-table-completion",
    title: "Table completion",
    description:
      "Rows and columns as answer grid: column headers as prediction engines, row order as passage order, and one-word cells copied exact.",
    objectives: [
      "read a table's columns as per-cell grammar and content predictions",
      "hunt row by row in passage order with the ratchet",
      "copy into cells inside the limit, honouring the table's own formats",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "A table is the passage's information reorganised into rows and columns — dates against events, prices against categories, stages against outputs — with the key cells removed. The column headers are the type's gift: each header declares what its whole column holds, which means every gap's prediction is printed before you read a word of the passage. Rows follow passage order, cells are short, and the copy discipline is the family's usual.",
        beforeYouStart: [
          "You can run the completion method.",
          "You can read note architecture as labels.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — tables appear on factual, narrative and GT passages"],
          ["Task & question types", "Table completion (ONE WORD / NO MORE THAN TWO/THREE WORDS and/or A NUMBER)"],
          ["What is assessed", "Locating and transferring detail across a reorganised grid"],
          ["Why this matters", "Column headers pre-print every prediction — the type is the completion family's fastest when read correctly"],
        ],
      },
      { type: "heading", text: "Components 1–2 — Definition and instructions" },
      {
        type: "text",
        text: "Definition: a table with headed columns and partially filled rows; you complete the empty cells from the passage. The rubric reads 'Complete the table below. Choose NO MORE THAN TWO WORDS (AND/OR A NUMBER) from the passage for each answer.' — the number clause matters, because tables hoard figures: dates, sums and counts are legal answers wherever the limit's arithmetic admits them.",
      },
      { type: "heading", text: "Component 3 — The solving strategy" },
      {
        type: "steps",
        title: "Columns predict, rows ratchet",
        steps: [
          { title: "Step 1: Read the column headers as prediction engines", text: "Each header names its column's content type — year, event, price, material — so every empty cell inherits a prediction before the passage opens. A 'Date' column's gaps want time expressions; a 'Findings' column's gaps want content nouns.", examples: [{ english: "Columns 'Period' and 'Event': every gap is a time expression or an event noun — the hunt's shape is known in advance.", note: "Headers pre-print the predictions." }] },
          { title: "Step 2: Hunt row by row, ratcheting down the passage", text: "Rows follow the passage's order: locate row 1's known cell, and every later row hunts below it. The known cells in each row (the printed ones) are the row's anchors — hunt THEM, not the empty cell's phantom content.", examples: [{ english: "Row 3 prints '1971' — the hunt for row 3's missing cell starts at the 1971 sentence, anchored by the printed date.", note: "Printed cells anchor; empty cells receive." }] },
          { title: "Step 3: Close-read the anchor's neighbourhood and fit the cell", text: "The answer sits in the anchor cell's sentence or its neighbours; close-read that neighbourhood and fit the empty cell's header-predicted class. Cell grammar is telegraphic like notes — the column's format (a year, a sum, a noun) is the slot.", examples: [{ english: "Anchor '1971' → sentence reveals 'a compact gearbox' → column 'Revelation' takes 'gearbox' or 'compact gearbox' within the limit.", note: "Anchor, neighbourhood, fit." }] },
          { title: "Step 4: Copy exact, count, and honour the table's formats", text: "Cells take the passage's words and figures inside the limit; the table's own formats — currency symbols, year formats — show how the answer should look, and the passage's exact spelling governs regardless.", examples: [{ english: "Column prints '£' beside prices: the cell takes the number, not the symbol; the passage's '£24' becomes '24' in a price column that already prints the pound sign.", note: "Format awareness is copy awareness." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Worked example" },
      {
        type: "example",
        title: "Tables filled, on library passages",
        items: [
          { english: "Antikythera table: rows 'Turn of the 20th century / Mid-century to 1971 / Second or first century BC…' with an 'Event' column — each row's printed period anchors its sentence; answers 'shipwreck', 'gearbox', 'dated' copy inside two-word limits.", note: "Dated rows are anchor paradises.", domain: "exam" },
          { english: "GT Bramble table: 'Adult admission £9' printed; 'Children under 12' row's empty cell takes 'free' — the admission paragraph's own word.", note: "GT prices live in table country.", domain: "exam" },
          { english: "Denim table: '223 lunar months — the ___ cycle' — the number anchors the sentence; the class-predicted noun 'Saros' copies exact.", note: "Numbers and named cycles anchor each other.", domain: "exam" },
          { english: "A candidate writes '£140' into a price column that already prints the currency symbol — the duplicated symbol breaks the cell's format; '140' restores it.", note: "Formats are part of the copy.", domain: "exam" },
          { english: "A learner covers a table's answer column and predicts every cell from the headers alone, then checks predictions against the passage.", note: "Header-prediction, trained blind.", domain: "study" },
          { english: "Water table: 'Property / Consequence' rows — 'expands when freezing' anchors the floating consequence; the cell takes 'floats', the passage's verb.", note: "Two-column causality copies cleanly.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "I hunt the empty cell's content directly.", right: "Hunt the row's PRINTED anchor — the date, name or figure you can see — and read its neighbourhood; the empty cell receives.", reason: "Phantom-content hunting searches for words you cannot yet name; anchor hunting searches for shapes you can already see." },
          { wrong: "Tables are loose about format, so 'around £24' is fine in a price cell.", right: "Cells take the passage's words inside the limit: 'around' spends a word the passage may not support, and the exact figure is the answer.", reason: "Table format is strict — the column shows the shape, and the limit governs the count." },
          { wrong: "Rows can be answered in any order.", right: "Rows follow passage order like every ordered type: ratchet down, and each row's anchor sits below the previous row's.", reason: "Order-free reading re-scans the passage per row — the ratchet exists precisely to prevent that." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the headers as predictions; note the limit's number clause."],
          ["While the clock runs", "Anchor on printed cells; hunt row by row with the ratchet; fit the header's class."],
          ["If you are stuck", "A row with no printed anchor? Use the previous row's location and the header's content type to bound the hunt."],
          ["Final minutes", "Sweep row by row: blanks, limits, spelling, and the table's own formats."],
        ],
      },
      {
        type: "summary",
        points: [
          "Column headers pre-print every cell's prediction — content type is known before reading.",
          "Rows follow passage order: anchor each row's hunt on its printed cells, ratcheting down.",
          "Close-read the anchor's neighbourhood; fit the header-predicted class into the cell's format.",
          "Cells take the passage's words and figures inside the limit; the table's formats show the shape.",
          "Numbers are legal and common answers wherever the limit admits them — tables hoard figures by design.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which type's labels do table headers most resemble?", options: ["Note completion's labels", "Matching headings' bank", "Verdict blocks' statements"], correctIndex: 0, explanation: "Headers are labels that name content type per column — the same architecture-reading as notes, one dimension up.", from: "Note completion" },
          { question: "What anchors a row's hunt?", options: ["The empty cell's imagined content", "The row's printed cells — the date, name or figure you can see", "The table's title"], correctIndex: 1, explanation: "Printed cells anchor, empty cells receive: hunting what you can see bounds the search.", from: "The solving strategy" },
          { question: "What does the number clause in a completion rubric permit?", options: ["Answers made only of digits", "Numbers and words together inside the limit's arithmetic", "One extra word for figures"], correctIndex: 1, explanation: "'AND/OR A NUMBER' admits figures within the count — tables exist to test exactly this.", from: "Sentence completion" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What do a table's column headers give you before any reading?",
        hints: ["Each header names a content type."],
        options: [
          { id: "a", text: "Nothing — headers are decoration." },
          { id: "b", text: "A prediction for every empty cell: each header declares its column's content type." },
          { id: "c", text: "The passage's paragraph order." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A prediction for every empty cell: each header declares its column's content type.",
          "A 'Date' column wants time expressions, a 'Finding' column wants content nouns — the headers pre-print the predictions that other types make you build gap by gap.",
          "(a) wastes the type's gift; (c) is the rows' property, not the headers'.",
        ),
        tags: ["areading", "table", "headers"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Anchor on the printed cell, then fill the empty one.",
        hints: ["Hunt the printed date; read its sentence."],
        passageTitle: "Table drill",
        passage: "The harbour's first lighthouse was a timber tower, raised in 1601 and gone by 1604 — the keepers' fire took it in a winter gale. Its successor lasted eighty years before the sea undermined its footing. The third tower, completed in 1715, was the first in the region built of interlocked stone.",
        question: "Table row: '1715 — the region's first tower built of ___ (NO MORE THAN TWO WORDS)'",
        options: [
          { id: "a", text: "interlocked stone — the 1715 sentence's own phrase, two words, anchored by the printed date." },
          { id: "b", text: "timber — the 1601 tower's material, from the wrong row's anchor." },
          { id: "c", text: "stone — one word, correct class, but the passage's fuller phrase fits the limit too." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "interlocked stone — the 1715 sentence's own phrase, two words, anchored by the printed date.",
          "The printed 1715 anchors the third-tower sentence; the empty cell's header wants a material, and 'interlocked stone' copies inside the two-word limit with the passage's exact wording. Option C's single word is also acceptable where the limit and the passage's phrase both fit — but the fuller phrase is the located copy.",
          "(b) takes another row's anchor entirely; (c) under-copies but stays legal — both count where the marking accepts either.",
        ),
        tags: ["areading", "table", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A price column already prints the currency symbol in its header. The passage says '£24'. What goes in the cell?",
        hints: ["The table's formats show the shape."],
        options: [
          { id: "a", text: "'£24' — copy everything the passage shows." },
          { id: "b", text: "'24' — the symbol lives in the header; the cell takes the figure inside the limit." },
          { id: "c", text: "'twenty-four pounds' — convert figures to words for safety." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'24' — the symbol lives in the header; the cell takes the figure inside the limit.",
          "The table's own formats govern the cell's shape: a header that prints the currency has already spent the symbol, and the cell receives the figure. Copy awareness includes format awareness.",
          "(a) duplicates the symbol the table already prints; (c) converts the passage's figure into words it never used.",
        ),
        tags: ["areading", "table", "formats"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. State the anchor rule for table rows.",
        question: "In one sentence: what should a row's hunt be anchored on, and why?",
        acceptedAnswers: ["the row's printed cells — a visible date, name or figure — because hunting what you can see bounds the search, while the empty cell's content is still unknown", "printed cells anchor the hunt: visible shapes (dates, names, figures) are scannable; phantom content is not", "anchor on the printed cell you can see — the empty cell receives after the neighbourhood is read", "the row's printed anchor, because you can scan what is visible but not what is missing"],
        hints: [],
        feedback: fb(
          "The row's printed cells — a visible date, name or figure — because hunting what you can see bounds the search, while the empty cell's content is still unknown.",
          "The anchor rule is the scan's own logic applied to grids: shapes you can see are scannable, and the empty cell's answer arrives by close reading the anchor's neighbourhood.",
          "Answers anchoring on the empty cell reverse the method's direction.",
        ),
        tags: ["areading", "table"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A row has NO printed anchor — every cell in it is empty except one vague label. How does the method bound the hunt?",
        hints: [],
        options: [
          { id: "a", text: "Give up on the row until the sweep." },
          { id: "b", text: "Use the previous row's location plus the header's content type: the row sits below the last located one, hunting the header's class of content." },
          { id: "c", text: "Read the whole passage to find the row's content." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Use the previous row's location plus the header's content type: the row sits below the last located one, hunting the header's class of content.",
          "The ratchet raises the floor and the header names the class — together they bound the hunt even for anchor-poor rows, which is exactly how the method handles its worst case.",
          "(a) wastes a findable row; (c) pays the whole passage for one cell.",
        ),
        tags: ["areading", "table", "worst-case"],
      }),
    ],
    homework: [
      "Cover the answer column of one library table and predict every cell from its headers and printed anchors; then check predictions against the passage.",
      "Audit your last five table answers for formats: currency symbols, year shapes and number words — note any cell where the table's format and your copy disagreed.",
    ],
  },
];
