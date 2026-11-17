/**
 * Audio question bank — PROMPT 54 expansion, Part 3 batch A.
 *
 * Seven new Part 3 exercises (academic and training discussions, two or
 * three speakers): tutorial debriefs, note comparisons, survey planning and
 * a design-brief debate. Every recording is original TalkSy practice
 * material written in the style of the test — opinions, disagreement,
 * hedging, corrections and attribution traps throughout.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP3AExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p3-trade-routes",
    title: "Reviewing a history essay on trade routes",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 8,
    topic: "history",
    accentMix: ["british"],
    intro:
      "You will hear a tutorial in which a history tutor and two undergraduates review a draft essay about medieval trade routes. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "greaves", name: "Dr Greaves", role: "history tutor reviewing a draft essay on the Baltic trade", accent: "british" },
      { id: "marcus", name: "Marcus", role: "undergraduate who drafted the essay's opening half", accent: "british" },
      { id: "aisha", name: "Aisha", role: "undergraduate who drafted the essay's closing half", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "greaves", text: "Right, you two — settle in. I've read both halves of your draft on the Baltic trade routes, and I'll open with the good news: the argument is visible from page one, which is rarer than you'd think in a first draft." },
      { id: "s2", speakerId: "aisha", text: "Oh, thank goodness. I'd convinced myself we'd buried it under all the citing." },
      { id: "s3", speakerId: "greaves", text: "You haven't. Now, the sources. Marcus, you've anchored the whole first section on the Lübeck harbour toll registers?" },
      { id: "s4", speakerId: "marcus", text: "Forty years of them — every cargo taxed at the quay. I put them in the section on ships and shipping." },
      { id: "s5", speakerId: "greaves", text: "And there's my quibble. A toll register lists what crossed the quay; it tells you nothing about how a hull was built. Those figures belong with the money, not the vessels." },
      { id: "s6", speakerId: "aisha", text: "Honestly, that suits me — my section on the merchants leans on the account books already, and the registers would sit happily beside them." },
      { id: "s7", speakerId: "marcus", text: "So what holds up the shipping section once the tolls move out? The wreck photographs, I suppose?" },
      { id: "s8", speakerId: "greaves", text: "Precisely — with the wreck you can count the planks. You told me the divers photographed the entire hull?" },
      { id: "s9", speakerId: "marcus", text: "With the cargo still in place, even. It's the nearest thing we have to a manifest that never survived." },
      { id: "s10", speakerId: "aisha", text: "Can I jump in about the ending, though? I've written that the trade fell apart because Dutch ships undercut everyone, and the set reading backs me up — but it feels too tidy to me." },
      { id: "s11", speakerId: "marcus", text: "It's what the chapters say: cheaper vessels, lower running costs. I'd have left it in." },
      { id: "s12", speakerId: "greaves", text: "Leave it in, but with your eyes open. Ask yourself who wrote those chapters — most of them are Danish historians, and Denmark collected the Sound dues. They had every reason to blame foreign ships rather than their own toll policy. Every account is angled; saying so in the essay will earn you marks." },
      { id: "s13", speakerId: "aisha", text: "Fine — then I'll argue the tolls did at least as much damage as the Dutch ever did." },
      { id: "s14", speakerId: "greaves", text: "Good. Now, structure, before we run out of time. Marcus, your opening lands us in 1550, which is like walking into a film during the credits. Wind it back to the founding charter and give your reader the long view." },
      { id: "s15", speakerId: "marcus", text: "The charter it is. And the back half — is the fairs section doing any work?" },
      { id: "s16", speakerId: "greaves", text: "Some, but trim the herring fairs down to a paragraph. They explain where the ports sprang up, and that's all they need to do." },
      { id: "s17", speakerId: "aisha", text: "The treaty timeline can go altogether, then — it's half a page of dates." },
      { id: "s18", speakerId: "greaves", text: "It's background, not argument, so yes. Redrafts to me by Thursday, both halves — and check each other's references before they reach me.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Dr Greaves's overall opinion of the essay draft?",
        options: [
          "Its argument is clear from the first page, although some material needs repositioning.",
          "The citations have swamped the argument beyond recovery.",
          "The reading behind the essay is far too thin to support its claims.",
        ],
        correct: [0],
        meta: {
          skills: ["gist", "opinion", "negation"],
          keywords: ["good news", "argument is visible from page one", "buried"],
          trap: {
            family: "negation",
            lure: ["buried"],
            note: "Aisha fears the argument is buried under the citations, but the tutor's verdict is the opposite — the worry you hear first belongs to a student, not to the marker.",
          },
          explanation:
            "Dr Greaves opens with the good news that the argument is visible from page one, and every correction she makes is about placement — the toll registers move, the opening rewinds — rather than a hidden thesis. Aisha's fear of burying the argument is her own worry, which the tutor immediately dismisses.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why does Dr Greaves object to the toll registers appearing in the shipping section?",
        options: [
          "They list taxed goods rather than revealing how the vessels were built.",
          "They cover too short a period of years to show a pattern.",
          "They repeat information already contained in the account books.",
        ],
        correct: [0],
        meta: {
          skills: ["reason", "paraphrase", "detail"],
          keywords: ["toll register", "quay", "hull", "account books"],
          explanation:
            "Her objection is about fit, not quality: a toll register lists what crossed the quay and says nothing about how a hull was built, so the figures belong with the merchants' money. The account books are mentioned only as a welcoming home for the registers, never as a reason against them.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to Marcus, what makes the wreck photographs so valuable?",
        options: [
          "They show the cargo still on board, standing in for a missing manifest.",
          "They let historians count the planks of the hull.",
          "They prove the ship sailed from Lübeck itself.",
        ],
        correct: [0],
        meta: {
          skills: ["attribution", "detail", "paraphrase"],
          keywords: ["cargo still in place", "manifest", "count the planks"],
          trap: {
            family: "attribution",
            lure: ["count the planks"],
            note: "Counting the planks is the tutor's enthusiasm, not Marcus's — the stem asks what Marcus says, so his cargo-in-place point scores and her remark misleads.",
          },
          explanation:
            "Marcus's point is that the photographs show the cargo still in place, the nearest thing to a manifest that never survived. Counting the planks is Dr Greaves's remark in the turn before, so the option quoting her words misattributes them to the student.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Greaves point out about the set reading on the trade's decline?",
        options: [
          "Its authors had an interest in blaming foreign ships rather than toll policy.",
          "It dates the decline several decades too early.",
          "It draws on Dutch customs records that have since been lost.",
        ],
        correct: [0],
        meta: {
          skills: ["inference", "paraphrase", "attitude"],
          keywords: ["Danish historians", "Sound dues", "toll policy", "angled"],
          explanation:
            "She asks who wrote the chapters — mostly Danish historians, writing when Denmark collected the Sound dues — so they had every reason to blame foreign ships rather than their own tolls. The point concerns the authors' interest, not the dating of the decline or any lost records.",
        },
      },
      {
        id: "q5",
        type: "matching",
        label: "Questions 5–8",
        instruction:
          "What does Dr Greaves advise the students to do with each part of the essay? Choose FOUR answers from the box and write the correct letter, A–F, next to questions 5–8. You may use each letter once only.",
        items: [
          "5 the toll data from Lübeck harbour",
          "6 the photographic record of the wreck",
          "7 the opening paragraph, which begins in 1550",
          "8 the section on the herring fairs",
        ],
        options: [
          "keep it exactly as drafted",
          "move it beside the account books in the merchants section",
          "let it carry the shipping section",
          "cut it from the essay entirely",
          "shorten it to a single paragraph",
          "rewrite it around the founding charter",
        ],
        correct: [1, 2, 5, 4],
        meta: {
          skills: ["paraphrase", "detail", "decision-tracking"],
          keywords: ["herring fairs", "founding charter", "treaty timeline", "trim"],
          explanation:
            "The toll figures belong with money, so they move beside the account books (B); the wreck photographs carry the shipping section in their place (C); the opening rewinds from 1550 to the founding charter (F); and the herring fairs are trimmed to one paragraph (E). Only the treaty timeline is cut outright (D), and that is not one of the listed parts.",
        },
      },
    ],
    transcriptNote:
      "Watch who owns each verdict: Aisha fears the argument is buried, but the tutor's opening praise is the true state of the draft. The planks belong to Dr Greaves's enthusiasm while the cargo is Marcus's evidence, and the treaty timeline — not the fairs — is the only part cut outright.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-field-study",
    title: "A tutorial on a biology field study",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "science",
    accentMix: ["british", "australian"],
    intro:
      "You will hear a marine biology tutorial in which two students describe a pilot study on a rocky shore to their tutor. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "halloran", name: "Dr Halloran", role: "marine biology tutor debriefing a pilot study", accent: "british" },
      { id: "georgia", name: "Georgia", role: "student who ran the rocky-shore transect", accent: "australian" },
      { id: "theo", name: "Theo", role: "student who recorded the shore counts", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "halloran", text: "Come in, the pair of you — I want to hear about the rocky shore before the details go cold. You sampled at Point Kerford on Tuesday, yes?" },
      { id: "s2", speakerId: "georgia", text: "We did. We ran a transect line from the low-water mark up to the cliff base — fifty metres, with a sampling point every five." },
      { id: "s3", speakerId: "theo", text: "At each point we'd drop a quadrat, a one-metre square frame, and count every animal inside it — limpets, barnacles, periwinkles, the lot." },
      { id: "s4", speakerId: "halloran", text: "Textbook procedure. So what did the counts give you?" },
      { id: "s5", speakerId: "georgia", text: "Limpets climbed steadily as we moved up the shore, then fell away right at the top, near the cliff." },
      { id: "s6", speakerId: "theo", text: "Barnacles did the opposite — carpeted the upper rocks, and next to nothing down at the waterline. Which is backwards from what the handbook promised, by the way." },
      { id: "s7", speakerId: "halloran", text: "Now that's worth an afternoon. Why might the shore you met differ from the shore in the book?" },
      { id: "s8", speakerId: "georgia", text: "There'd been a big storm the night before. The swell was still washing right over the upper rocks while we sampled — everything up there was soaked." },
      { id: "s9", speakerId: "halloran", text: "So your top-of-shore rocks were wetter than a calm day would ever make them, and barnacles love a wet rock — limpets, rather less. You've found yourselves a confound." },
      { id: "s10", speakerId: "theo", text: "Should we bin Tuesday's numbers, then, and go back on a calm day?" },
      { id: "s11", speakerId: "halloran", text: "I'd resist binning anything. Go back by all means, but treat the second visit as a comparison rather than a rerun — storm day beside calm day. The contrast is your finding." },
      { id: "s12", speakerId: "georgia", text: "That's actually a better story than a clean repeat. I'd been feeling rotten about the whole trip." },
      { id: "s13", speakerId: "halloran", text: "Don't. Messy data you can explain beats tidy data you can't — but the limitations section must say plainly that the weather was a confound. Own it, in writing." },
      { id: "s14", speakerId: "theo", text: "Noted. Oh — the apparatus list. I've written quadrat, metre rule, light meter…" },
      { id: "s15", speakerId: "halloran", text: "You never once used the light meter; it stayed in the van all day. An equipment list records what you used, not what you packed." },
      { id: "s16", speakerId: "georgia", text: "That's my doing — I'll take it off. Anything else before we book the minibus again?" },
      { id: "s17", speakerId: "halloran", text: "Book it for a spring tide — check the tide tables first, so the water's at its lowest, or the lower shore stays hidden and you'll never sample it. And take a camera this time: photographs of each quadrat make the method section far easier to defend.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What pattern did the students record along the transect?",
        options: [
          "Limpet numbers rose up the shore but dropped near the cliff.",
          "Barnacles were almost absent from the upper rocks.",
          "Both species were spread evenly along the whole transect.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["limpets", "barnacles", "upper rocks", "waterline"],
          explanation:
            "Georgia reports limpets climbing steadily up the shore and then falling away right at the top, while Theo's barnacles carpeted the upper rocks with next to nothing at the waterline — the reverse of option B — and nobody describes an even spread along the line.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What explanation does the group settle on for the unexpected pattern?",
        options: [
          "Storm spray had kept the upper rocks wetter than usual.",
          "The handbook's counts were made on a different kind of shore.",
          "Some animals were counted twice at the waterline.",
        ],
        correct: [0],
        meta: {
          skills: ["cause", "paraphrase", "detail"],
          keywords: ["storm", "swell", "soaked", "confound"],
          explanation:
            "Georgia links the pattern to the previous night's storm, whose swell kept the upper shore soaked while they sampled, and the tutor agrees that wetter rocks favour barnacles over limpets. Neither a miscount nor the handbook's shore type is ever raised as the cause.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Halloran advise the students to do with Tuesday's data?",
        options: [
          "Discard it and repeat the survey exactly as before.",
          "Keep it and set it beside a second dataset from a calm day.",
          "Publish it separately as a note on storm conditions.",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "paraphrase", "intention"],
          keywords: ["bin", "rerun", "comparison", "calm day"],
          trap: {
            family: "negation",
            lure: ["bin"],
            note: "Theo proposes binning the storm-day numbers and the tutor resists — the refused option is the trap, and the advice that scores is keeping the data and comparing it.",
          },
          explanation:
            "When Theo asks whether to bin the numbers, Dr Halloran says he would resist binning anything: the calm-day visit becomes a comparison beside the storm data, and the contrast itself is the finding. Discarding and repeating, or publishing the data separately, are both refused.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What fault does Dr Halloran find in the write-up so far?",
        options: [
          "The apparatus list names the light meter, which was never used.",
          "The transect's length is recorded in the wrong units.",
          "The limitations section denies that the study has weaknesses.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "negation", "paraphrase"],
          keywords: ["light meter", "van", "equipment list", "limitations"],
          explanation:
            "Theo's draft apparatus list includes the light meter, which stayed in the van all day, and the tutor insists that an equipment list records what was used rather than what was packed. Far from denying weaknesses, the limitations section is being told to own the weather confound in writing.",
        },
      },
      {
        id: "q5",
        type: "sentence",
        label: "Questions 5–7",
        instruction: "Complete the sentences below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "At each point along the transect, the students dropped a square frame known as a" }, { kind: "blank", no: 5 }, { kind: "text", text: "before counting every animal inside it." }],
          [{ kind: "text", text: "Dr Halloran calls the storm a" }, { kind: "blank", no: 6 }, { kind: "text", text: "that the write-up must acknowledge in its limitations section." }],
          [{ kind: "text", text: "For the next visit, the group will consult the" }, { kind: "blank", no: 7 }, { kind: "text", text: "tables so that they can sample at a spring tide." }],
        ],
        blanks: [
          { no: 5, answer: "quadrat", alternatives: [] },
          { no: 6, answer: "confound", alternatives: [] },
          { no: 7, answer: "tide", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "method"],
          keywords: ["quadrat", "confound", "tide tables", "spring tide"],
          explanation:
            "The frame the students dropped at each sampling point is named in Theo's description of the method; the tutor twice calls the storm a confound that the limitations section must own; and the tide tables are what the group must check to catch the low water of a spring tide.",
        },
      },
    ],
    transcriptNote:
      "Theo's offer to bin the storm-day data is refused — the comparison is the finding — and the light meter stayed in the van despite appearing on the apparatus list. The tutor names the weather a confound twice, which is the cue for question 6.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-marketing",
    title: "Comparing notes on a marketing lecture",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 9,
    topic: "economics",
    accentMix: ["british", "north-american"],
    intro:
      "You will hear two business students comparing their notes after a lecture on pricing psychology. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "freddie", name: "Freddie", role: "business student rebuilding his lecture notes", accent: "british" },
      { id: "naomi", name: "Naomi", role: "business student who underlined the lecturer's conditions", accent: "north-american" },
    ],
    segments: [
      { id: "s1", speakerId: "freddie", text: "Naomi, wait up! Is your head still spinning from that pricing lecture? My notes fall to pieces after the first twenty minutes." },
      { id: "s2", speakerId: "naomi", text: "Mine are a mosaic, so let's rebuild them before Thursday's seminar. Start at the top: charm pricing, the whole ninety-nine-pence habit." },
      { id: "s3", speakerId: "freddie", text: "That part I have. We read prices left to right, so two ninety-nine registers as 'two-something' rather than 'three'. She called it the left-digit effect." },
      { id: "s4", speakerId: "naomi", text: "And here's the bit I underlined: the effect really bites when the left digit drops. Five ninety-nine against six pounds works; five ninety-nine against five sixty barely does." },
      { id: "s5", speakerId: "freddie", text: "See, I'd written something different — that it works best on everyday purchases like groceries. Shall we flag that and check the slides before the seminar?" },
      { id: "s6", speakerId: "naomi", text: "Flag it, definitely. Misquote her claim in front of her and we'll never hear the end of it." },
      { id: "s7", speakerId: "freddie", text: "Next, the café study. She spent a month pricing the campus café by weight instead of a flat charge, right?" },
      { id: "s8", speakerId: "naomi", text: "The best section of the whole hour. Portions shrank even though prices barely moved — people watched the scale climb and bought like misers." },
      { id: "s9", speakerId: "freddie", text: "Because you can see the meter running. I do exactly that at the salad bar, if I'm honest." },
      { id: "s10", speakerId: "naomi", text: "Then anchoring — which a certain someone slept through." },
      { id: "s11", speakerId: "freddie", text: "Slander. My page says 'burger menu' with three question marks, and that's it." },
      { id: "s12", speakerId: "naomi", text: "So: the enormous platter at twelve pounds that nobody ever orders. It isn't there to sell; it's there to make the eight-pound burger look reasonable. That's a price anchor." },
      { id: "s13", speakerId: "freddie", text: "Right — the overpriced item does a job even when it never sells. That's the decoy effect, isn't it?" },
      { id: "s14", speakerId: "naomi", text: "Close, but not quite. A decoy is an option built to be rejected so that a third choice shines by comparison; an anchor is simply the first number you see, framing everything that follows." },
      { id: "s15", speakerId: "freddie", text: "A fine line I keep blurring. Let's take the definitions from her office hours rather than guess — I'll email tonight." },
      { id: "s16", speakerId: "naomi", text: "Good plan. Oh, the discount-code warning — I nearly missed it myself. Weekly codes train shoppers to hold out and never pay full price, and retailers struggle to switch that habit off once it forms." },
      { id: "s17", speakerId: "freddie", text: "Which explains why the sofa shop has been 'closing down' since spring. Would that count as an example for the presentation?" },
      { id: "s18", speakerId: "naomi", text: "Fresh examples, one per concept — but not her café study, which she's banned us from using. I'll take charm pricing and the decoy; you draft the anchoring slide and send it across.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to Naomi, when does charm pricing work most strongly?",
        options: [
          "when the item is an everyday purchase such as groceries",
          "when the left-hand digit of the price drops",
          "when the product is bought only occasionally",
        ],
        correct: [1],
        meta: {
          skills: ["attribution", "detail", "paraphrase"],
          keywords: ["left digit drops", "everyday purchases", "underlined"],
          trap: {
            family: "attribution",
            lure: ["everyday purchases"],
            note: "The groceries condition comes from Freddie's doubtful notes, not from the lecture — Naomi's underlined claim is the dropping left digit, so the misattributed note is the lure.",
          },
          explanation:
            "Naomi reports the lecturer's condition: the effect really bites when the left digit drops, as five ninety-nine against six pounds. The groceries version is what Freddie wrote down and himself doubts, which is why he promises to check the slides rather than trust his own page.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What happened when the campus café priced food by weight?",
        options: [
          "Customers bought less even though prices had hardly changed.",
          "Customers demanded bigger portions once the flat charge ended.",
          "The café's takings rose sharply for the rest of the month.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase", "cause"],
          keywords: ["by weight", "portions shrank", "scale climb"],
          explanation:
            "Naomi's account is that portions shrank although prices barely moved, because customers watched the scale climb and bought like misers. Neither bigger portions nor rising takings appear anywhere in either set of notes.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Naomi use the twelve-pound platter on the burger menu to illustrate?",
        options: [
          "the decoy effect",
          "charm pricing",
          "a price anchor",
        ],
        correct: [2],
        meta: {
          skills: ["paraphrase", "detail", "concept-matching"],
          keywords: ["platter", "nobody ever orders", "eight-pound burger", "price anchor"],
          trap: {
            family: "mention-lure",
            lure: ["decoy effect"],
            note: "Freddie labels the unsold platter a decoy and Naomi corrects him immediately — the tempting label is spoken a beat before the correction, which is exactly where the trap sits.",
          },
          explanation:
            "The platter exists to flatter the eight-pound burger, which Naomi names a price anchor. Freddie guesses the decoy effect and is corrected in the very next turn, so the label floating nearest the example is the wrong one.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to the lecturer, what do weekly discount codes train shoppers to do?",
        options: [
          "wait for a code rather than buy at full price",
          "distrust any price ending in ninety-nine",
          "spend more on each visit once a code arrives",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase"],
          keywords: ["discount-code", "hold out", "full price", "habit"],
          explanation:
            "Naomi relays the warning that weekly codes train shoppers to hold out and never pay full price, a habit retailers struggle to switch off. The ninety-nine ending belongs to charm pricing, and heavier baskets per visit are never mentioned.",
        },
      },
      {
        id: "q5",
        type: "mcq-single",
        label: "Question 5",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What restriction has the lecturer placed on the presentation?",
        options: [
          "Each concept needs one fresh real-world example, and not her café study.",
          "The definitions must be quoted from the lecture slides.",
          "All three concepts must be illustrated from a single industry.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase", "instruction-following"],
          keywords: ["fresh examples", "one per concept", "café study", "banned"],
          explanation:
            "Naomi recalls the rule at the end: fresh examples, one per concept, with the lecturer's own café study banned because she has heard it a hundred times. The slides are only a checking aid, and nothing limits the examples to one industry.",
        },
      },
      {
        id: "q6",
        type: "matching",
        label: "Questions 6–8",
        instruction:
          "The students explain each pricing concept in their own words. Choose THREE answers from the box and write the correct letter, A–E, next to questions 6–8. You may use each letter once only.",
        items: [
          "6 a price anchor",
          "7 a decoy",
          "8 charm pricing",
        ],
        options: [
          "a price set just below a round number so it feels smaller",
          "an overpriced item whose job is to flatter a cheaper one",
          "an option built to be rejected so that a rival choice looks good",
          "a flat charge replaced by payment according to weight",
          "a code that rewards shoppers for delaying a purchase",
        ],
        correct: [1, 2, 0],
        meta: {
          skills: ["paraphrase", "detail", "concept-matching"],
          keywords: ["price anchor", "decoy", "charm pricing", "two-something"],
          explanation:
            "The anchor is the overpriced platter that flatters the eight-pound burger (B); the decoy is constructed to be rejected so that a third choice shines (C); and charm pricing is the two-ninety-nine trick that reads as 'two-something' (A). Pricing by weight (D) belongs to the café study and the delayed-purchase code (E) to the discount warning.",
        },
      },
    ],
    transcriptNote:
      "Naomi corrects Freddie twice — groceries belong to his doubtful notes, and the unsold platter is an anchor rather than a decoy — so the words spoken just before each correction are the trap. The definitions are the students' own and still await the lecturer's approval at her office hours.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-survey",
    title: "Planning a sociology survey",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "society",
    accentMix: ["british"],
    intro:
      "You will hear a sociology tutorial in which two students plan a street survey with their tutor. First you have some time to look at questions 1 to 5. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "marlow", name: "Dr Marlow", role: "sociology tutor helping plan a high-street survey", accent: "british" },
      { id: "kwame", name: "Kwame", role: "student drafting the shopper questionnaire", accent: "british" },
      { id: "elena", name: "Elena", role: "student organising the street interviews", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "marlow", text: "Right, let's knock the high-street survey into shape. You've drafted twelve questions between you — walk me through the difficult ones." },
      { id: "s2", speakerId: "kwame", text: "I'll start with age. I've asked for exact ages, but typing numbers into a tablet on a windy street feels optimistic." },
      { id: "s3", speakerId: "marlow", text: "Then don't ask. Offer bands — eighteen to twenty-four, twenty-five to thirty-four, and so on. You'll get cleaner data and fewer refusals." },
      { id: "s4", speakerId: "elena", text: "The pedestrianisation one is mine, and I've fallen out of love with it: 'Do you agree that pedestrianisation has improved the high street?' Said aloud, it practically tells people to say yes." },
      { id: "s5", speakerId: "marlow", text: "It does — that's a textbook leading question, so out it goes. If you want opinions on the scheme, ask people how their visits have changed." },
      { id: "s6", speakerId: "kwame", text: "There's a parking one as well — where delivery drivers stop now the bollards are up. Shoppers honestly won't know." },
      { id: "s7", speakerId: "elena", text: "But the shopkeepers will — they watch the vans every morning. Could it go into our interviews with them?" },
      { id: "s8", speakerId: "marlow", text: "That's exactly where it belongs. Move it across." },
      { id: "s9", speakerId: "kwame", text: "Income. I included household income because the council's report bands everything that way, but…" },
      { id: "s10", speakerId: "marlow", text: "But a stranger with a tablet asking about wages on a Saturday morning? Cut it — that's far too personal for a street survey, whatever the council does." },
      { id: "s11", speakerId: "elena", text: "The last one is the open question — 'What would most improve the high street?' I'd keep that exactly as it stands; it's the answer I actually want to read." },
      { id: "s12", speakerId: "marlow", text: "Keep it as your final question, then — people answer it better once the quick ones have warmed them up. And bank anything else you cut for a spring follow-up; good questions shouldn't be wasted." },
      { id: "s13", speakerId: "kwame", text: "While we're here — could we run the whole survey online instead? We'd get hundreds of responses by Friday." },
      { id: "s14", speakerId: "elena", text: "Hundreds of people who never set foot on the high street, more likely. The whole point is catching actual visitors — the council already did an online consultation, and it heard from the same twenty laptop enthusiasts every single time." },
      { id: "s15", speakerId: "marlow", text: "Put less colourfully, the sample point stands: on the street you question the people the scheme actually affects." },
      { id: "s16", speakerId: "kwame", text: "Do we need the council's permission for that — stopping shoppers with tablets?" },
      { id: "s17", speakerId: "marlow", text: "For a class project, no — just be polite and take no for an answer. Before the real thing, though, pilot the questionnaire on your flatmates: ten minutes each, and fix whatever confuses them. Then we'll talk about timing." },
      { id: "s18", speakerId: "elena", text: "Pilot first, streets second. I'll book us the kitchen table tonight.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "matching",
        label: "Questions 1–5",
        instruction:
          "What do the speakers decide to do with each question in the draft survey? Choose FIVE answers from the box and write the correct letter, A–F, next to questions 1–5. You may use each letter once only.",
        items: [
          "1 the question asking for respondents' exact age",
          "2 the question 'Do you agree that pedestrianisation has improved the high street?'",
          "3 the question about where delivery drivers park",
          "4 the question on household income",
          "5 the open question 'What would most improve the high street?'",
        ],
        options: [
          "keep it as it stands",
          "reword it into banded answer options",
          "cut it as too personal for a street survey",
          "cut it as a leading question",
          "move it to the interviews with shopkeepers",
          "save it for a spring follow-up survey",
        ],
        correct: [1, 3, 4, 2, 0],
        meta: {
          skills: ["detail", "paraphrase", "decision-tracking"],
          keywords: ["exact ages", "leading question", "household income", "open question", "shopkeepers"],
          explanation:
            "The age question becomes banded options (B); the pedestrianisation question is dropped as leading (D); the parking question moves to the shopkeeper interviews (E); household income is cut as too personal (C); and the open question stays exactly as written (A). The spring follow-up (F) is only a suggestion for banking any other cut questions.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 6",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why do the speakers reject running the survey online?",
        options: [
          "Responses would come mainly from people who never visit the high street.",
          "The students' budget cannot cover the software needed.",
          "The council has forbidden the class from repeating its consultation.",
        ],
        correct: [0],
        meta: {
          skills: ["inference", "paraphrase", "detail"],
          keywords: ["online consultation", "never set foot", "actual visitors"],
          trap: {
            family: "mention-lure",
            lure: ["online consultation"],
            note: "The council's online consultation is mentioned as evidence that web surveys miss real visitors — nobody forbids anything, so the option that turns the mention into a ban is the trap.",
          },
          explanation:
            "Elena argues that online responses would arrive from people who never set foot on the high street, and the tutor agrees the sample must be actual visitors. The council's consultation is cited as evidence of that bias, not as a prohibition, and money is never mentioned.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What was wrong with the question about pedestrianisation?",
        options: [
          "It used vocabulary that many shoppers would not understand.",
          "It pushed respondents towards agreeing with its wording.",
          "It combined two separate issues in a single question.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase", "reason"],
          keywords: ["leading question", "tells people to say yes", "how their visits have changed"],
          explanation:
            "Elena and the tutor agree the wording practically tells people to say yes, which makes it a leading question that has to go. Neither jargon nor double-barrelled phrasing is raised, and the tutor's replacement asks how visits have changed instead.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What will the students do before collecting data on the street?",
        options: [
          "obtain the council's written permission",
          "pilot the questionnaire on their flatmates",
          "cut the survey down to five questions",
        ],
        correct: [1],
        meta: {
          skills: ["negation", "detail", "intention"],
          keywords: ["permission", "pilot", "flatmates", "ten minutes"],
          trap: {
            family: "negation",
            lure: ["permission"],
            note: "Kwame raises the council's permission and the tutor waves it away for a class project — the refused requirement is the trap, and the flatmates pilot is the genuine next step.",
          },
          explanation:
            "When Kwame asks about permission, Dr Marlow says none is needed for a class project; the required step before fieldwork is piloting the questionnaire on the flatmates for ten minutes each and fixing whatever confuses them.",
        },
      },
    ],
    transcriptNote:
      "Elena condemns her own leading question before the tutor confirms the verdict, and the parking question is rescued into the shopkeeper interviews rather than cut. Note the negation near the end: no council permission is needed for the class survey.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-chemistry",
    title: "Preparing a chemistry presentation",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "science",
    accentMix: ["british"],
    intro:
      "You will hear two chemistry students discussing their presentation on a vitamin C experiment with their tutor. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 7.",
    speakers: [
      { id: "ashworth", name: "Dr Ashworth", role: "chemistry tutor advising on the practical presentation", accent: "british" },
      { id: "jodie", name: "Jodie", role: "student who ran the titration experiment", accent: "british" },
      { id: "ravi", name: "Ravi", role: "student preparing the presentation slides", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ashworth", text: "Jodie, Ravi — your slot is Friday week, so let's hear where the vitamin C practical has got to. What did you actually run?" },
      { id: "s2", speakerId: "jodie", text: "The DCPIP titration on three juices: fresh orange, the supermarket smoothie, and apple from a carton. Same method for each, three runs apiece." },
      { id: "s3", speakerId: "ravi", text: "Which is where the fun starts. We expected the smoothie to walk it — the label practically sings about vitamin content — but the fresh orange came out highest by a street." },
      { id: "s4", speakerId: "jodie", text: "The smoothie was middling, and the apple barely registered. That label claim is what I want the presentation to be about, honestly." },
      { id: "s5", speakerId: "ashworth", text: "Good instinct — a surprising result beats a tidy one. Before you build the story, though: how solid are the numbers? Any wobbles among the runs?" },
      { id: "s6", speakerId: "jodie", text: "One, and it's mine. On the second smoothie run I… well, I rinsed the pipette between juices. I'm sure I did." },
      { id: "s7", speakerId: "ravi", text: "You didn't, though — I was writing up beside you. You went straight from the orange into the smoothie, and I made you repeat that whole run." },
      { id: "s8", speakerId: "jodie", text: "So the first smoothie reading went in the bin, and the repeat matched the others. Fine — I'll own that on the limitations slide." },
      { id: "s9", speakerId: "ashworth", text: "Own it loudly. A contaminated run that you spot and repeat is good science dressed as bad; hide it, and it becomes the reverse." },
      { id: "s10", speakerId: "ravi", text: "Here's my explanation for the smoothie, though: it was two days past its best-before date. The vitamin just fades, doesn't it?" },
      { id: "s11", speakerId: "ashworth", text: "Over months, perhaps — not over two days. Think about how smoothies are made: they're heat-treated to survive the shelf, and heat is rough on vitamin C. Pasteurisation is your likely culprit, not the date." },
      { id: "s12", speakerId: "jodie", text: "So the label isn't lying — it's quoting the fruit before it was processed." },
      { id: "s13", speakerId: "ashworth", text: "That's the nuance I'd put at the centre — though find a source on processing losses before Friday, because 'Dr Ashworth reckons' is not a citation." },
      { id: "s14", speakerId: "ravi", text: "Noted. Structure-wise, I'd planned to open with titration theory, then method, then results. Standard and safe." },
      { id: "s15", speakerId: "ashworth", text: "Standard, safe, and asleep by slide two. Open with the question instead — 'which drink actually gives you the most vitamin C?' — and the theory lands once the audience wants it." },
      { id: "s16", speakerId: "ravi", text: "So don't cut the theory, just move it behind the results." },
      { id: "s17", speakerId: "ashworth", text: "Precisely. And put the method on one slide as a flow: you measured each juice with the pipette, ran in DCPIP until the blue colour just held, repeated every titration three times, and worked from the averages. A stranger should be able to repeat it from that slide alone." },
      { id: "s18", speakerId: "jodie", text: "One slide, three repeats, averages. I'll draft it tonight and you can tear it apart tomorrow.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What surprised the students about their results?",
        options: [
          "The fresh orange contained the most vitamin C, ahead of the smoothie.",
          "The apple juice beat the smoothie by a wide margin.",
          "The three juices gave almost identical titration figures.",
        ],
        correct: [0],
        meta: {
          skills: ["detail", "paraphrase", "gist"],
          keywords: ["fresh orange", "smoothie", "apple", "label"],
          explanation:
            "Ravi says they expected the smoothie to win because of the label, but the fresh orange came out highest by a street, with the smoothie middling and the apple barely registering. The gap between the label claim and the measured result is the story Jodie wants to tell.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Jodie finally admit about the second smoothie run?",
        options: [
          "She rinsed the pipette carefully before starting it.",
          "She carried orange residue into the smoothie by skipping the rinse.",
          "She recorded the reading before the colour change finished.",
        ],
        correct: [1],
        meta: {
          skills: ["correction", "detail", "paraphrase"],
          keywords: ["rinsed the pipette", "repeat", "writing up", "smoothie"],
          trap: {
            family: "correction",
            lure: ["rinsed the pipette"],
            note: "Jodie's first version is that she rinsed the pipette; Ravi's challenge forces the retraction, and the admitted mistake — no rinse — is the answer that scores.",
          },
          explanation:
            "Jodie begins by insisting she rinsed the pipette between juices, but Ravi, who was writing up beside her, corrects her: she went straight from the orange into the smoothie and had to repeat the whole run. Her first, retracted claim is the trap.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What explanation does Dr Ashworth offer for the smoothie's result?",
        options: [
          "The juice was two days past its best-before date.",
          "The fruit was picked before it was properly ripe.",
          "Heat treatment during manufacture destroys some of the vitamin.",
        ],
        correct: [2],
        meta: {
          skills: ["attribution", "paraphrase", "cause"],
          keywords: ["best-before date", "heat-treated", "pasteurisation", "processed"],
          trap: {
            family: "attribution",
            lure: ["best-before date"],
            note: "The fading-vitamin theory is Ravi's, and the tutor rejects it for a two-day gap — heat treatment is Dr Ashworth's explanation, so check whose voice carries the claim.",
          },
          explanation:
            "Ravi blames the best-before date, but Dr Ashworth rejects that because vitamin fades over months, not days; the tutor's explanation is that smoothies are heat-treated to survive the shelf, making pasteurisation the likely culprit. Jodie's gloss about the label quoting the fruit summarises his point, not Ravi's.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How does Dr Ashworth advise changing the presentation's structure?",
        options: [
          "Open with the research question and let the theory come later.",
          "Cut the theory section to leave room for the results.",
          "Move the method into a printed handout for the audience.",
        ],
        correct: [0],
        meta: {
          skills: ["negation", "paraphrase", "intention"],
          keywords: ["titration theory", "open with the question", "slide two", "move it"],
          trap: {
            family: "negation",
            lure: ["cut the theory"],
            note: "Ravi asks whether to cut the theory and the tutor's 'precisely' endorses moving it, not cutting it — the negation inside the student's question is the trap.",
          },
          explanation:
            "The tutor wants the presentation to open with the question of which drink gives the most vitamin C, so the theory arrives once the audience wants it; when Ravi asks about cutting the theory, the answer is to move it behind the results. The method stays on one slide, not in a handout.",
        },
      },
      {
        id: "q5",
        type: "flowchart",
        label: "Questions 5–7",
        instruction: "Complete the flowchart below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "VITAMIN C PRACTICAL — the method for each juice" }],
          [{ kind: "text", text: "Step 1 — Use the" }, { kind: "blank", no: 5 }, { kind: "text", text: "to measure out a portion of juice." }],
          [{ kind: "text", text: "Step 2 — Run in DCPIP until the blue" }, { kind: "blank", no: 6 }, { kind: "text", text: "just holds." }],
          [{ kind: "text", text: "Step 3 — Repeat every titration and calculate the results from the" }, { kind: "blank", no: 7 }],
        ],
        blanks: [
          { no: 5, answer: "pipette", alternatives: [] },
          { no: 6, answer: "colour", alternatives: [] },
          { no: 7, answer: "averages", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["process-tracking", "detail", "method"],
          keywords: ["pipette", "blue colour", "three times", "averages"],
          explanation:
            "The flow follows the tutor's summary of the method: each juice was measured with the pipette, DCPIP ran in until the blue colour just held, and every titration was repeated three times with the results worked from the averages.",
        },
      },
    ],
    transcriptNote:
      "Jodie retracts her pipette claim once Ravi corrects her, and the best-before theory is Ravi's rather than the tutor's — heat treatment is the endorsed explanation. The tutor's advice to Ravi is to move the theory behind the results, not to cut it.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-research-paper",
    title: "Discussing an education research paper",
    part: 3,
    difficulty: 3,
    estimatedMinutes: 8,
    topic: "education",
    accentMix: ["british", "nz"],
    intro:
      "You will hear two education students discussing a research paper about school start times with their tutor. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "campbell", name: "Dr Campbell", role: "education tutor leading a research-paper discussion", accent: "nz" },
      { id: "imogen", name: "Imogen", role: "education student critiquing the start-times study", accent: "british" },
      { id: "daniel", name: "Daniel", role: "education student defending the start-times study", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "campbell", text: "Kia ora, you two. The Hollowgate study, then — the school that shifted its morning start from half past eight to quarter past nine. You've both read it properly?" },
      { id: "s2", speakerId: "imogen", text: "Twice. It's the one where attendance at first lessons shot up, and—" },
      { id: "s3", speakerId: "daniel", text: "—and the grades rose, surely? That's what I took from the abstract. I'd swear the grades rose." },
      { id: "s4", speakerId: "imogen", text: "Read Table Two again. Attendance climbed, no argument — but the grades didn't budge overall. Flat as the Fens." },
      { id: "s5", speakerId: "campbell", text: "A caution for your literature reviews, Daniel: the abstract is a trailer, not the film. So the headline finding is first-lesson attendance up markedly, results broadly level. What do we make of the design?" },
      { id: "s6", speakerId: "imogen", text: "My gripe is that everyone at Hollowgate knew the researchers were in the building. Pupils behave differently when they know they're being watched — you can't tell me that changes nothing." },
      { id: "s7", speakerId: "daniel", text: "I'm not sure it's fatal. My worry is the sample, honestly — it's one school, one timetable change. You can't generalise from a single site." },
      { id: "s8", speakerId: "campbell", text: "Both fair as cautions, neither fatal. Two terms is long enough for attendance patterns to settle, and the design answers part of it anyway — what did the neighbouring school give them?" },
      { id: "s9", speakerId: "daniel", text: "Greendene. It kept the half-past-eight start and served as the control, and its attendance held steady while Hollowgate's climbed, so the rise wasn't some city-wide drift." },
      { id: "s10", speakerId: "campbell", text: "For me, that control school is the making of the study. And before you ask — nothing was held back: the school handed over registers going back five years, which gave the researchers a proper baseline." },
      { id: "s11", speakerId: "imogen", text: "There's still the sleep part I can't square. The whole point of a later start is more sleep, but the questionnaire found pupils simply went to bed later — they gained barely half an hour." },
      { id: "s12", speakerId: "campbell", text: "Against every expectation, yes. The form tutors' interviews are the interesting side note there: mornings were calmer, they said, with fewer yawns in first lessons, whatever the bedtimes were doing." },
      { id: "s13", speakerId: "daniel", text: "So attendance and mood improved, sleep barely moved, grades stood still. It's a more human study than the abstract sounds." },
      { id: "s14", speakerId: "campbell", text: "It is. Now, next week's seminar: you've spent this hour as prosecution and defence, so for once I want the follow-up instead. Design me a study that tests the sleep question properly — actigraphy watches, a decent sample, the lot. One page, both names on it." },
      { id: "s15", speakerId: "imogen", text: "Could we interview teachers at Greendene instead? It'd be quicker." },
      { id: "s16", speakerId: "campbell", text: "It would, and it still wouldn't answer the question. No fieldwork yet — a design on paper, and I'll find you the watches if the plan earns them." },
      { id: "s17", speakerId: "daniel", text: "Then I'll take the sampling and Imogen can argue for the watches. Same table in the library, Thursday?" },
      { id: "s18", speakerId: "imogen", text: "Thursday. I'll bring the paper and a red pen.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What did the Hollowgate study actually find?",
        options: [
          "Attendance at first lessons improved while exam results stayed broadly level.",
          "Exam results improved while attendance stayed level.",
          "Both attendance and exam results improved markedly.",
        ],
        correct: [0],
        meta: {
          skills: ["correction", "detail", "paraphrase"],
          keywords: ["attendance", "grades", "didn't budge", "first lessons"],
          trap: {
            family: "correction",
            lure: ["grades rose"],
            note: "Daniel's confident summary — that the grades rose — comes from the abstract and is corrected against Table Two; the retracted claim is the trap and the corrected finding scores.",
          },
          explanation:
            "Daniel insists the grades rose, but Imogen sends him back to Table Two: first-lesson attendance climbed markedly while the grades didn't budge overall. The corrected pair — attendance up, results level — is the study's actual finding.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What weakness does Imogen find in the study?",
        options: [
          "It followed only a single school through one timetable change.",
          "Pupils knew they were being studied, which may have altered their behaviour.",
          "It ran too briefly for attendance patterns to become clear.",
        ],
        correct: [1],
        meta: {
          skills: ["attribution", "paraphrase", "opinion"],
          keywords: ["knew the researchers were in the building", "watched", "one school", "settle"],
          trap: {
            family: "attribution",
            lure: ["one school"],
            note: "The single-school complaint belongs to Daniel, while Imogen's worry is the observers in the building — the neighbouring objection is the lure for anyone tracking the wrong speaker.",
          },
          explanation:
            "Imogen's gripe is that pupils at Hollowgate knew the researchers were in the building and may have behaved differently, which no design feature fully removes. The single-school worry is Daniel's, and the tutor notes that two terms was long enough for patterns to settle.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Campbell describe as 'the making of' the study?",
        options: [
          "the neighbouring school that carried on with the earlier start",
          "the five years of registers used to set a baseline",
          "the honesty of the sleep questionnaire's answers",
        ],
        correct: [0],
        meta: {
          skills: ["attitude", "detail", "paraphrase"],
          keywords: ["the making of", "control", "held steady", "baseline"],
          explanation:
            "Dr Campbell says the control school — Greendene, which kept the earlier start while its attendance held steady — is the making of the study, because it rules out a city-wide drift. The five-year registers are praised as a proper baseline but are never called the making of it.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What have the students been asked to prepare for next week's seminar?",
        options: [
          "a one-page design for a follow-up study",
          "a pair of opposing summaries of the paper",
          "interviews with teachers at the nearby school",
        ],
        correct: [0],
        meta: {
          skills: ["intention", "detail", "negation"],
          keywords: ["follow-up", "one page", "actigraphy watches", "fieldwork"],
          explanation:
            "Dr Campbell sets a one-page design for a follow-up study testing the sleep question with actigraphy watches and a decent sample. Imogen's suggestion of interviewing Greendene's teachers is refused — no fieldwork yet — and the opposing summaries are what the students have already been doing.",
        },
      },
      {
        id: "q5",
        type: "matching",
        label: "Questions 5–8",
        instruction:
          "What did each element contribute to the Hollowgate study? Choose FOUR answers from the box and write the correct letter, A–F, next to questions 5–8. You may use each letter once only.",
        items: [
          "5 the attendance registers",
          "6 the school that kept the earlier start",
          "7 the form tutors' interviews",
          "8 the questionnaire on pupils' sleep habits",
        ],
        options: [
          "the main evidence that the policy had an effect",
          "a comparison showing the change was not a general trend",
          "a day-to-day picture of how the change felt",
          "a finding that ran against the researchers' expectations",
          "the proof that examination grades improved",
          "the records the school refused to hand over",
        ],
        correct: [0, 1, 2, 3],
        meta: {
          skills: ["paraphrase", "detail", "concept-matching"],
          keywords: ["registers", "held steady", "form tutors", "went to bed later"],
          explanation:
            "The registers supply the main evidence, the marked rise in first-lesson attendance (A); Greendene's steady figures show the rise was not city-wide (B); the form tutors describe calmer mornings in practice (C); and the sleep questionnaire found pupils simply going to bed later, against expectation (D). Grades never improved (E), and the school withheld nothing (F).",
        },
      },
    ],
    transcriptNote:
      "Daniel's abstract-led summary is corrected against Table Two, and each student owns a different objection to the design. The tutor refuses early fieldwork — next week is a one-page design on paper — and the sleep questionnaire produced the study's most unexpected finding.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p3-design-module",
    title: "Debating a design module brief",
    part: 3,
    difficulty: 4,
    estimatedMinutes: 9,
    topic: "technology",
    accentMix: ["british"],
    intro:
      "You will hear a product-design tutor and two students debating the brief for their current module. First you have some time to look at questions 1 to 4. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "sandhu", name: "Dr Sandhu", role: "product-design tutor moderating a debate over the module brief", accent: "british" },
      { id: "tilly", name: "Tilly", role: "student proposing a sensor-based composter", accent: "british" },
      { id: "craig", name: "Craig", role: "student arguing for a low-tech composter", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "sandhu", text: "Settle in, both of you. Composting for flat-dwellers — the brief I set last week. Before anything else: where have you two landed?" },
      { id: "s2", speakerId: "tilly", text: "Sensor bin, no question. A moisture probe in the drum, reading out to a phone app, so people know the moment their compost goes wrong. The technology's all off the shelf." },
      { id: "s3", speakerId: "craig", text: "And I'd keep it deliberately dumb — a rotating drum on a stand, no batteries, nothing to update. People don't want to debug a compost bin at midnight." },
      { id: "s4", speakerId: "tilly", text: "The brief asks for smart features, Craig. This is a technology module." },
      { id: "s5", speakerId: "craig", text: "Read page two again: 'smart features are encouraged' — encouraged, not required. The actual requirement is that it works in a flat the size of a shoebox." },
      { id: "s6", speakerId: "tilly", text: "Huh. I'd built my whole pitch on that sentence. Fine — encouraged it is." },
      { id: "s7", speakerId: "sandhu", text: "Good, because that sentence catches half the class every year. Now argue me through the features. Tilly, your sensor." },
      { id: "s8", speakerId: "tilly", text: "The moisture sensor flags a soggy mix before it starts to smell — and smell is the number one reason people give up composting." },
      { id: "s9", speakerId: "craig", text: "And it's one more thing to fail. My nan's bin would have a dead sensor within a month and she'd never notice; the smell would come back anyway. And nobody wants an app for their bin — it's compost, not a step counter." },
      { id: "s10", speakerId: "tilly", text: "Alright, the app can go. But I'm not pretending the smell solves itself." },
      { id: "s11", speakerId: "sandhu", text: "Which brings us to the odour filter, and here I'll referee: a carbon filter is the one feature I'd fight for. Indoors, an odour problem is a dead product, so it stays at the heart of the design." },
      { id: "s12", speakerId: "tilly", text: "Then I'd buy the filter cartridge in, rather than printing a housing for it." },
      { id: "s13", speakerId: "sandhu", text: "The brief asks you to design, not to assemble shop parts — so print the housing. Craig, you had a winter idea?" },
      { id: "s14", speakerId: "craig", text: "A heated mat under the tray, since compost slows right down in the cold. I take the point about complexity, but a flat in February is a different planet." },
      { id: "s15", speakerId: "sandhu", text: "Park it for version two and note it as such — the panel loves a roadmap. Now the honest question: you've spent this hour arguing about what you would want, and neither of you composts. The user panel next week is the judge that matters." },
      { id: "s16", speakerId: "tilly", text: "So we prototype Craig's drum for the panel, and I keep the sensor on the bench until they ask for it." },
      { id: "s17", speakerId: "sandhu", text: "Exactly — evidence first, electronics second. Bring the drum sketch to Thursday's crit, both names on the sheet." },
      { id: "s18", speakerId: "craig", text: "And I'll draft the roadmap slide with the heated mat on it. Version two, coming to a balcony near you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "mcq-single",
        label: "Question 1",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the module brief actually say about smart features?",
        options: [
          "They are encouraged, but they are not a requirement.",
          "Every design must include an electronic component.",
          "Designs without electronics lose marks at the crit.",
        ],
        correct: [0],
        meta: {
          skills: ["negation", "detail", "paraphrase"],
          keywords: ["smart features", "encouraged", "required", "page two"],
          trap: {
            family: "negation",
            lure: ["required"],
            note: "Tilly reads the brief as demanding electronics and Craig corrects her from page two — encouraged, not required — so the corrected reading of the brief is what scores.",
          },
          explanation:
            "Tilly claims the brief asks for smart features, but Craig reads page two aloud: smart features are encouraged, not required, while the actual requirement is a design that works in a small flat. The negation inside Craig's correction carries the answer.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 2",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is Craig's main objection to Tilly's sensor design?",
        options: [
          "It adds parts that can fail and that users will not maintain.",
          "It pushes the build far above the module budget.",
          "It copies a product already on the market.",
        ],
        correct: [0],
        meta: {
          skills: ["opinion", "paraphrase", "detail"],
          keywords: ["one more thing to fail", "dead sensor", "step counter", "midnight"],
          explanation:
            "Craig argues the sensor is one more thing to fail — his nan's bin would carry a dead sensor within a month — and that nobody wants an app for their compost. Budget is never raised, and copying an existing product is not his complaint.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 3",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does Dr Sandhu suggest the students have been getting wrong?",
        options: [
          "They have been designing for themselves rather than for the people who will use the bin.",
          "They have spent too long on sketching and too little on building.",
          "They have treated the module as a competition against each other.",
        ],
        correct: [0],
        meta: {
          skills: ["attitude", "inference", "paraphrase"],
          keywords: ["arguing about what you would want", "neither of you composts", "user panel", "judge"],
          explanation:
            "Dr Sandhu points out that the pair have spent the hour arguing about what they would want, although neither of them composts, and that next week's user panel is the judge that matters. Sketching time and rivalry are never mentioned.",
        },
      },
      {
        id: "q4",
        type: "mcq-single",
        label: "Question 4",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What do the students finally agree to do?",
        options: [
          "Prototype the simple drum first and let the panel decide on the sensor.",
          "Build Tilly's sensor version and simplify it after the crit.",
          "Submit two separate designs under one team name.",
        ],
        correct: [0],
        meta: {
          skills: ["intention", "detail", "paraphrase"],
          keywords: ["prototype", "bench", "user panel", "drum"],
          explanation:
            "Tilly accepts prototyping Craig's drum for the user panel while keeping her sensor on the bench until the panel asks for it, and Dr Sandhu seals the compromise with evidence first, electronics second. No split submission is ever discussed.",
        },
      },
      {
        id: "q5",
        type: "matching",
        label: "Questions 5–8",
        instruction:
          "What verdict does the group reach on each proposed feature? Choose FOUR answers from the box and write the correct letter, A–E, next to questions 5–8. You may use each letter once only.",
        items: [
          "5 the moisture sensor",
          "6 the companion phone app",
          "7 the carbon odour filter",
          "8 the heated mat for winter",
        ],
        options: [
          "keep it at the heart of the design",
          "drop it from this project",
          "park it for a later version",
          "bench it until the user panel asks for it",
          "replace it with a bought-in commercial part",
        ],
        correct: [3, 1, 0, 2],
        meta: {
          skills: ["paraphrase", "detail", "decision-tracking"],
          keywords: ["moisture sensor", "app", "carbon filter", "heated mat"],
          explanation:
            "The sensor waits on the bench until the user panel demands it (D); the app is dropped once Tilly concedes (B); the carbon filter stays at the heart of the design (A); and the heated mat is parked for version two (C). Buying in the cartridge (E) is proposed and refused.",
        },
      },
    ],
    transcriptNote:
      "Craig's page-two correction settles the brief — encouraged, not required — and Dr Sandhu referees the features rather than ruling on all of them. The compromise keeps the sensor alive on the bench, so question 5 turns on Tilly's exact wording.",
    source: BANK_SOURCE_NOTE,
  },
];
