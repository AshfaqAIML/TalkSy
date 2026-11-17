/**
 * Chapter 2D — The question types (PROMPT 45, Part B).
 *
 * Flowchart completion and diagram labelling — the process-and-picture
 * completion pair, closing the thirteen-type masterclass.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const questionTypeLessonsD: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-flowchart-completion",
    title: "Flowchart completion",
    description:
      "A process printed as arrows and boxes: stage-by-stage hunting on process paragraphs, noun-prediction per box, and the sequence discipline the arrows enforce.",
    objectives: [
      "recognise process paragraphs and their flowchart-shaped description",
      "predict each box's noun from the stage's grammar and the arrows' logic",
      "hunt stages in passage order with the sequence discipline",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "A flowchart prints a process as boxes and arrows — steps in a mechanism, stages in a procedure — and removes the key nouns. The passage's process paragraph is the flowchart's twin: it describes the same sequence in words like 'first', 'then', 'once that is done'. The method is the completion method tuned to sequence: each box's noun sits in its stage's sentence, and the arrows tell you the stages' order before the passage is opened.",
        beforeYouStart: [
          "You can run the completion method.",
          "You can recognise chronology and cause-effect patterns.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — flowcharts appear on mechanism and procedure passages, both variants"],
          ["Task & question types", "Flowchart completion (ONE WORD / NO MORE THAN TWO/THREE WORDS)"],
          ["What is assessed", "Following a process description and transferring its stages exactly"],
          ["Why this matters", "Process paragraphs and flowcharts share one skeleton — reading one is reading the other"],
        ],
      },
      { type: "heading", text: "Components 1–2 — Definition and instructions" },
      {
        type: "text",
        text: "Definition: boxes connected by arrows, each box a stage in a described process, with numbered gaps where the stage's key noun or phrase belongs. The rubric matches the family's — the passage's words, inside a printed limit, one box at a time. The arrows are instructions: stage N's answer precedes stage N+1's in the passage, without exception.",
      },
      { type: "heading", text: "Component 3 — The solving strategy" },
      {
        type: "steps",
        title: "Stages, arrows, nouns",
        steps: [
          { title: "Step 1: Read the flowchart's printed stages as a preview", text: "The printed boxes paraphrase the process's stages in order: read them first and you have the process's outline before touching the passage — the same map-first gift as the summary.", examples: [{ english: "Printed stages: 'dams built of branches, stones and ___' → 'water spreads into shallow ponds' → 'the effect hydrologists call ___': a three-stage outline, huntable in order.", note: "The chart is the process's summary." }] },
          { title: "Step 2: Locate the process paragraph via the printed stages", text: "Hunt the first printed stage's rarest concrete element — its nouns and figures — and land on the process paragraph. One landing bounds every box: the flowchart describes a contiguous description, not a scattered one.", examples: [{ english: "Stage 1's 'branches' lands mid-passage at the dam-building paragraph: all four boxes live there.", note: "Flowcharts are local, not global." }] },
          { title: "Step 3: Walk the stages in order, predicting nouns per box", text: "Walk the paragraph's sequence markers — 'first', 'then', 'once', 'after' — in lockstep with the arrows. Each empty box takes its stage's key noun, predicted from the box's grammar and confirmed in the stage's sentence.", examples: [{ english: "Box after 'sediment and agricultural ___ settle out': the coordinate noun is 'nutrients', the passage's own partner word.", note: "Coordinate slots predict their class." }] },
          { title: "Step 4: Copy exact inside the limit, stage by stage", text: "Each box's answer is copied from its stage's sentence, counted at typing. The sweep audits boxes in arrow order — the fastest block-audit in the family because the chart indexes itself.", examples: [{ english: "Four boxes, four copies, four counts: the sweep walks the arrows and checks blanks, limits and spelling in one pass.", note: "The chart indexes its own audit." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Worked example" },
      {
        type: "example",
        title: "Flowcharts on library material",
        items: [
          { english: "Beaver flowchart: 'Beavers build dams of branches, stones and ___' — stage 1's sentence lists three materials; the box takes 'mud', the passage's third noun.", note: "List sentences fill list boxes.", domain: "exam" },
          { english: "GT returns flowchart: 'Scan the code or type your order ___' → 'choose a refund or an ___' → 'attach the label to the ___' → 'drop it in the yellow ___' — four steps, four step-sentences, four one-word copies: number, exchange, parcel, box.", note: "Instructional texts ARE flowcharts in prose.", domain: "exam" },
          { english: "Timber flowchart possibility: 'layers are — under heat and pressure' — the manufacturing sequence's bonding stage takes 'glued', the passage's verb-as-participle.", note: "Passive slots take participles.", domain: "exam" },
          { english: "A candidate answers box 3 from the paragraph's opening sentence — but the arrows say box 3 follows box 2's stage, and box 2 sat mid-paragraph: the copy belonged lower. Re-walking the markers restored it.", note: "Arrows outrank proximity.", domain: "exam" },
          { english: "A learner draws a five-box flowchart from one library mechanism paragraph from memory, then compares it with the passage's actual flowchart block.", note: "Reverse-engineering trains stage-reading.", domain: "study" },
          { english: "Water-cycle style flowchart: 'the pond behind it rises and falls ___' — the adverbial slot takes 'gently', the passage's own manner word.", note: "Not every box wants a noun — the slot's grammar decides.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "The boxes' answers are scattered across the passage.", right: "Flowcharts describe one contiguous process: one landing bounds every box — hunt the first printed stage and stay in its paragraph.", reason: "The type's design is local by nature; scattered hunting pays the passage price for a local reward." },
          { wrong: "I match boxes to sentences by topic, ignoring the arrows.", right: "Walk the sequence markers in lockstep with the arrows: box N's sentence follows box N-1's, and the markers ('then', 'once', 'after') are the paragraph's own arrows.", reason: "Topic-matching puts the right word in the wrong box — a full-mark error that the arrow discipline prevents." },
          { wrong: "Every box wants a noun.", right: "The box's slot grammar decides: adverbial boxes take manner words, participle boxes take verb forms, and coordinate slots take the passage's partner word.", reason: "Flowchart slots inherit the completion family's grammar prediction — class first, copy second." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read the printed stages as the process's outline; note the arrows' order."],
          ["While the clock runs", "Land once on the process paragraph; walk stages with the sequence markers; predict per slot; copy per stage."],
          ["If you are stuck", "Re-read the previous box's stage sentence — the next stage's marker follows it, and the stuck box lives after that marker."],
          ["Final minutes", "Sweep in arrow order: blanks, limits, spelling — the chart's own index."],
        ],
      },
      {
        type: "summary",
        points: [
          "A flowchart is a process paragraph redrawn: printed stages preview the sequence before reading.",
          "One landing bounds every box — the type is local, never scattered.",
          "Walk the paragraph's sequence markers in lockstep with the arrows; arrows outrank proximity.",
          "Each box's slot grammar predicts its class — nouns, participles, manner words all appear.",
          "The sweep walks the arrows: the chart indexes its own audit.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which passage pattern do process paragraphs belong to?", options: ["Chronology and cause-effect", "Compare-contrast", "Problem-solution"], correctIndex: 0, explanation: "Sequence markers — the pattern lesson's chronology and cause-effect families — are the flowchart's prose skeleton.", from: "Paragraph organisation" },
          { question: "What do printed stages give you before reading?", options: ["The process's outline — a map of the stages in order", "The answers in disguise", "Nothing"], correctIndex: 0, explanation: "The chart is the process's summary: its printed boxes preview the sequence exactly as a summary previews an arc.", from: "Summary completion" },
          { question: "What outranks proximity when two sentences both fit a box?", options: ["The arrows — box N follows box N-1's stage", "The longer sentence", "The sentence with more nouns"], correctIndex: 0, explanation: "Arrow discipline is the type's order rule: the sequence markers, not the sentences' distance, assign stages to boxes.", from: "The solving strategy" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "How scattered are a flowchart's answers across the passage?",
        hints: ["The chart describes one process."],
        options: [
          { id: "a", text: "Widely scattered — expect one box per paragraph." },
          { id: "b", text: "Local — the boxes describe one contiguous process, so one landing bounds them all." },
          { id: "c", text: "Random, like matching banks." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Local — the boxes describe one contiguous process, so one landing bounds them all.",
          "Flowcharts redraw a single process paragraph: land once on the first printed stage's sentence and every box's answer lives in that neighbourhood, stage by stage.",
          "(a) and (c) describe types the flowchart is not.",
        ),
        tags: ["areading", "flowchart", "locality"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Walk the stages and fill the box.",
        hints: ["The arrows give the order; the slot's grammar gives the class."],
        passageTitle: "Flowchart drill",
        passage: "Enrolment runs in one afternoon. First the registrar checks your documents and issues a temporary card. Once the card is issued, you take it to the library desk, where a librarian photographs you and activates your borrowing account. Finally, the IT office sets up your email — usually within the hour — and enrolment is complete.",
        question: "Flowchart: 'Documents checked → temporary card issued → borrowing account ___ → email set up.' (ONE WORD ONLY)",
        options: [
          { id: "a", text: "activated — the librarian's action, located at the once-card-is-issued stage." },
          { id: "b", text: "photographed — the stage's other action, but it photographs you, not the account." },
          { id: "c", text: "complete — the final stage's word, in the wrong box." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "activated — the librarian's action, located at the once-card-is-issued stage.",
          "The arrow order walks the markers: after the card stage comes the library-desk stage, whose account action is 'activates your borrowing account'. The box's slot wants the account's state, and 'activated' copies the passage's own verb form.",
          "(b) takes the stage's neighbouring action with the wrong object; (c) belongs to the final box.",
        ),
        tags: ["areading", "flowchart", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Two sentences in the process paragraph both mention the box's topic. What decides which sentence holds box 4's answer?",
        hints: ["Arrows outrank proximity."],
        options: [
          { id: "a", text: "The nearer sentence to the paragraph's start." },
          { id: "b", text: "The arrow order: box 4 follows box 3's stage, so its sentence follows box 3's marker — walk the sequence markers, not the topic." },
          { id: "c", text: "The sentence with the most nouns." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The arrow order: box 4 follows box 3's stage, so its sentence follows box 3's marker — walk the sequence markers, not the topic.",
          "Arrow discipline is the type's order rule: each box belongs to its stage's sentence, and the paragraph's markers ('then', 'once', 'after') are the stages' signposts.",
          "(a) prefers position over sequence; (c) counts words instead of walking stages.",
        ),
        tags: ["areading", "flowchart", "arrows"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. What do a flowchart's printed stages give you before reading, and what does one landing on the first stage give you?",
        question: "Answer both halves in one sentence.",
        acceptedAnswers: ["the printed stages preview the process's sequence, and one landing bounds every box — the chart is local", "the stages give the process outline in order; the first landing bounds all boxes to one paragraph", "printed stages = the process's outline; one landing = every box's neighbourhood", "the stages preview the sequence, and a single landing bounds the whole chart"],
        keywords: ["stages", "outline", "landing", "bounds"],
        hints: [],
        feedback: fb(
          "The printed stages preview the process's sequence, and one landing bounds every box — the chart is local.",
          "The two gifts compound: the outline tells you the order before reading, and the locality tells you one paragraph serves every box.",
          "Answers naming only one gift have half the type's advantage.",
        ),
        tags: ["areading", "flowchart"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A box reads: '…the pond behind it rises and falls ___'. The passage's sentence ends 'rises and falls gently rather than flashing'. The slot wants…",
        hints: [],
        options: [
          { id: "a", text: "A noun — the flash-flood contrast object." },
          { id: "b", text: "The manner word 'gently' — the slot after the verb pair takes the passage's own adverb, copied exact." },
          { id: "c", text: "The whole contrast phrase, to preserve meaning." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The manner word 'gently' — the slot after the verb pair takes the passage's own adverb, copied exact.",
          "Slot grammar decides class before content is weighed: the adverbial slot after 'rises and falls' takes the manner adverb, one word, letter-exact — the contrast phrase belongs to the sentence, not the box.",
          "(a) misreads the slot's class; (c) breaks the count and the box's economy.",
        ),
        tags: ["areading", "flowchart", "slots"],
      }),
    ],
    homework: [
      "Draw a five-box flowchart of one library mechanism paragraph from memory, then compare your boxes with the passage's own flowchart block.",
      "Take one GT instruction text from the library and number its sequence markers in the margin; then check that its flowchart boxes walk the markers in the same order.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-diagram-labelling",
    title: "Diagram labelling",
    description:
      "The picture completion: parts and processes labelled from their descriptions — anchor on the diagram's printed parts, and let the description's sequence do the rest.",
    objectives: [
      "anchor each blank on the diagram's printed labels and caption",
      "follow the description's spatial or procedural sequence around the diagram",
      "copy one-to-three-word labels inside the limit",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "A diagram prints a machine, a face, a process — with numbered blanks where the parts belong, and a passage that describes the same object in order. The method is picture-anchored completion: the diagram's printed labels and its caption are scannable shapes, and the description walks the picture's own sequence. Nothing here needs visual talent — only the discipline of anchoring on what is printed and following the description's tour.",
        beforeYouStart: [
          "You can run the completion method.",
          "You can anchor hunts on printed cells from the table lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — diagrams appear on mechanism and description passages (Academic-leaning, but the method is universal)"],
          ["Task & question types", "Diagram labelling (NO MORE THAN TWO/THREE WORDS from the passage)"],
          ["What is assessed", "Following a description of a figure and transferring its part names exactly"],
          ["Why this matters", "Printed parts and captions are the strongest anchors in the completion family — the type is fast when anchored and slow when read blind"],
        ],
      },
      { type: "heading", text: "Components 1–2 — Definition and instructions" },
      {
        type: "text",
        text: "Definition: a diagram — a plan, a cross-section, a process sketch — with numbered blanks on its parts, each completed from the passage's description of the same object. The rubric is the family's: the passage's words, inside a printed limit, one blank at a time. The caption often paraphrases the describing paragraph's topic sentence, which makes it a locating gift before the first blank is attempted.",
      },
      { type: "heading", text: "Component 3 — The solving strategy" },
      {
        type: "steps",
        title: "Anchor, tour, copy",
        steps: [
          { title: "Step 1: Read the diagram before the passage — caption, printed parts, blank positions", text: "The caption names the described object; the printed parts are scannable anchors; the blanks' positions show which parts of the description you need. Together they are the type's map, readable in twenty seconds.", examples: [{ english: "Caption 'the mechanism's main features' plus printed parts 'rear spirals' and 'inscriptions': the blanks sit between them — the description's front-face and gearing sentences.", note: "The diagram is the map; the passage is the tour." }] },
          { title: "Step 2: Anchor on a printed part and land on the describing paragraph", text: "Hunt the caption's or a printed part's rarest word — 'spirals', 'crank', 'zodiac' — and land once: the description is contiguous like a flowchart's process, and one landing bounds the block.", examples: [{ english: "'Rear spirals' printed: hunt 'spirals', land on the dial description, and every blank's sentence lives nearby.", note: "Printed parts are proper-noun-grade anchors." }] },
          { title: "Step 3: Follow the description's tour of the picture", text: "Descriptions walk diagrams in order — front to back, top to bottom, clockwise, or step by step. Follow the tour: blank N's sentence sits where the description reaches blank N's part, between its printed neighbours in the tour's order.", examples: [{ english: "The Antikythera description tours front dials → calendar ring → lunar gearing → drive: the diagram's blanks fall in that order, walking the same tour.", note: "The passage's order IS the diagram's order." }] },
          { title: "Step 4: Copy the part's name inside the limit", text: "Each blank takes its part's name — usually one or two words — copied exact and counted at typing. Where the description gives a compound ('pin-and-slot arrangement'), the diagram's slot grammar decides how much travels.", examples: [{ english: "Blank after 'a clever ___': the compound's head noun 'pin-and-slot' fits NO MORE THAN TWO WORDS as one hyphenated word.", note: "Hyphenated compounds are single words." }] },
        ],
      },
      { type: "heading", text: "Component 4 — Worked example" },
      {
        type: "example",
        title: "Diagrams labelled, on library material",
        items: [
          { english: "Antikythera diagram: 'Sun and Moon pointers travel through the twelve signs of the —' — anchored by the printed '365-day' ring; the tour's front-face sentence supplies 'zodiac'.", note: "Printed numbers anchor like printed nouns.", domain: "exam" },
          { english: "Antikythera diagram: 'a clever — — between two gears' — the lunar-gearing stop on the tour; 'pin-and-slot' copies as one hyphenated word inside the two-word limit.", note: "Compounds count as single words.", domain: "exam" },
          { english: "Timber diagram: 'each layer is rotated — degrees to its neighbour' — the manufacturing description's crossing sentence supplies 'ninety'.", note: "Number answers are diagram favourites.", domain: "exam" },
          { english: "A candidate hunts blank 1's part by its own guess — 'some kind of dial' — and burns two sweeps; anchoring on the printed 'crank' beside it lands in one.", note: "Printed neighbours beat imagined parts.", domain: "exam" },
          { english: "A learner sketches a machine from any English article's description, labelling what they drew — then compares their labels with the article's figure.", note: "Tour-following, trained by drawing.", domain: "study" },
          { english: "GT-style possibility: a returns-machine panel sketch with 'print the — and attach it to the parcel' — the procedural description supplies 'label' at its own step.", note: "Procedures are diagrams walking in time.", domain: "exam" },
        ],
      },
      { type: "heading", text: "Component 5 — Common traps" },
      {
        type: "mistakes",
        title: "The trap catalogue",
        items: [
          { wrong: "I imagine what the missing part must be, then hunt my guess.", right: "Anchor on the printed parts and caption: they are scannable shapes, and the description's tour brings you to each blank in order.", reason: "Imagined parts are phantom targets — the anchor rule exists precisely because printed shapes out-hunt guesses." },
          { wrong: "Diagrams need spatial talent I don't have.", right: "Diagrams need sequence-following: the description walks the picture in a fixed order, and the blanks fall along the walk.", reason: "The task is completed from words, not vision — the picture is a printed map of the description's order." },
          { wrong: "The full technical phrase always fits a blank.", right: "The blank's slot grammar and the limit decide what travels: hyphenated heads, single nouns, or number words — counted at typing.", reason: "Copy discipline includes economy: the passage's phrase is the source, the diagram's slot is the destination." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Read caption, printed parts and blank positions as the map — twenty seconds, whole block bounded."],
          ["While the clock runs", "Anchor on printed parts; land once; follow the description's tour; copy each part's name inside the limit."],
          ["If you are stuck", "Find the stuck blank's printed NEIGHBOUR on the diagram: the tour passes it immediately before or after the blank's part."],
          ["Final minutes", "Sweep the blanks in tour order: blanks, limits, spelling — the diagram indexes its own audit."],
        ],
      },
      {
        type: "summary",
        points: [
          "Diagrams are completed from words: caption, printed parts and blank positions form the type's map.",
          "Anchor on printed parts — scannable shapes that bound the whole block with one landing.",
          "Descriptions tour their pictures in a fixed order; the blanks fall along the walk between printed neighbours.",
          "Part names copy inside the limit, with hyphenated compounds counting as single words.",
          "The stuck-move is the printed neighbour: the tour passes it beside the blank's own part.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which type's anchor rule does diagram labelling inherit?", options: ["Table completion's printed cells", "Matching headings' spare audit", "Verdict blocks' boundary rule"], correctIndex: 0, explanation: "Printed cells, printed parts: both types hunt what they can see and let the empty slots receive.", from: "Table completion" },
          { question: "What does a description's structure share with its diagram?", options: ["A fixed tour order — front to back, step by step", "Random access", "Alphabetical order"], correctIndex: 0, explanation: "The passage's order IS the diagram's order: the tour visits each part in turn, and blanks fall along it.", from: "The solving strategy" },
          { question: "How do hyphenated compounds behave under word limits?", options: ["They break limits automatically", "They count as single words", "They are banned in answers"], correctIndex: 1, explanation: "'Pin-and-slot' is one word by the limit's arithmetic — the completion family's counting rule.", from: "Sentence completion" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What talent does diagram labelling actually require?",
        hints: ["The answers are words, not drawings."],
        options: [
          { id: "a", text: "Spatial-visual talent for reading technical drawings." },
          { id: "b", text: "Sequence-following: the description tours the picture in a fixed order, and the blanks fall along the walk." },
          { id: "c", text: "None — the answers are printed beside the diagram." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Sequence-following: the description tours the picture in a fixed order, and the blanks fall along the walk.",
          "The task is completed from words: the diagram is a printed map of the description's order, and following the tour places each blank between its printed neighbours.",
          "(a) chases a talent the task never tests; (c) would make the type pointless.",
        ),
        tags: ["areading", "diagram", "definition"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Anchor, tour, and label.",
        hints: ["Anchor on the printed part; follow the description's walk."],
        passageTitle: "Diagram drill",
        passage: "The pump is honest about its parts. At the base sits the intake chamber, with its filter screen facing the pond floor. Water rises from the chamber through a vertical pipe to the valve assembly at the top, where the handle's rocking motion does the lifting. The whole head is capped by a rain shield, held clear of the handle by two steel struts.",
        question: "Diagram (tour, bottom to top): 'intake chamber (printed) → [1] ___ → valve assembly (printed) → handle (printed) → [2] ___'. Blank 1 asks for the part between chamber and valve. (NO MORE THAN TWO WORDS)",
        options: [
          { id: "a", text: "vertical pipe — the part the water rises through, between the chamber and the valve assembly on the tour." },
          { id: "b", text: "filter screen — a printed-adjacent part, but it faces the pond floor at the base." },
          { id: "c", text: "rain shield — the top of the tour, in the wrong blank." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "vertical pipe — the part the water rises through, between the chamber and the valve assembly on the tour.",
          "The description walks bottom to top: chamber, then the pipe the water rises through, then the valve assembly. Blank 1 sits between two printed neighbours, and the tour's sentence between them names the pipe.",
          "(b) belongs to the base, before the chamber's own tour stop; (c) caps the tour, two stops above blank 2.",
        ),
        tags: ["areading", "diagram", "worked"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A blank sits between two printed parts on the diagram, but you cannot find the describing sentence. What is the stuck-move?",
        hints: ["The tour passes the neighbours too."],
        options: [
          { id: "a", text: "Guess the part's name from the picture." },
          { id: "b", text: "Hunt the blank's printed NEIGHBOUR on the diagram: the description mentions it immediately before or after the blank's own part on the tour." },
          { id: "c", text: "Leave the blank for the sweep." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Hunt the blank's printed NEIGHBOUR on the diagram: the description mentions it immediately before or after the blank's own part on the tour.",
          "Printed neighbours are scannable shapes adjacent on the tour: landing on either one puts the blank's sentence one step away, which is why the stuck-move is always the neighbour.",
          "(a) hunts a phantom; (c) abandons a findable mark under a no-penalty rule.",
        ),
        tags: ["areading", "diagram", "stuck-move"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the three elements of the diagram's pre-reading map.",
        question: "What three things do you read on the diagram before touching the passage?",
        acceptedAnswers: ["the caption, the printed parts, and the blank positions", "caption, printed labels, where the blanks sit", "the caption, the printed part names, and the positions of the numbered blanks", "caption, printed parts, blank positions — the whole map in twenty seconds"],
        keywords: ["caption", "printed", "blanks"],
        hints: [],
        feedback: fb(
          "The caption, the printed parts, and the blank positions.",
          "The caption names the described object, the printed parts are scannable anchors, and the blank positions show which stops of the tour you need — the type's whole map, readable before the passage opens.",
          "Answers missing the blank positions have read the map without planning the route.",
        ),
        tags: ["areading", "diagram"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. The passage names a part as 'the pin-and-slot arrangement between two of the gears'. The blank reads 'a clever ___ between two gears' with a NO MORE THAN TWO WORDS limit. What goes in?",
        hints: [],
        options: [
          { id: "a", text: "'pin-and-slot arrangement' — the full technical phrase, three words by any count." },
          { id: "b", text: "'pin-and-slot' — the hyphenated compound counts as one word, fits the slot, and copies the passage's exact form." },
          { id: "c", text: "'arrangement' — the head noun alone, losing the part's name." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "'pin-and-slot' — the hyphenated compound counts as one word, fits the slot, and copies the passage's exact form.",
          "The limit's arithmetic treats hyphenated compounds as single words: the compound fits the two-word limit with room to spare, keeps the part's identity, and copies letter-exact — economy, identity and exactness in one answer.",
          "(a) breaks the count with the head noun attached; (c) fits but names nothing the diagram's reader could identify.",
        ),
        tags: ["areading", "diagram", "compounds"],
      }),
    ],
    homework: [
      "Take one library diagram block and list its caption, printed parts and blank positions before reading; then check how many blanks your map placed on the tour in advance.",
      "Sketch any machine from an English article's description, labelling your drawing as you go — then compare your labels with the article's own figure.",
    ],
  },
];
