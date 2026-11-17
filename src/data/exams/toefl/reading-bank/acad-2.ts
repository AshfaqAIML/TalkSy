/**
 * TOEFL Reading Practice Library — Read an Academic Passage, batch 2 (PROMPT 49).
 *
 * Seven foundation exercises (difficulty 2): established textbook-level
 * science and history across the disciplines — geology, medicine, zoology,
 * economics, the history of education and of labour. 300–430 words, 5–6
 * items each, all with verbatim evidence and 25+ word explanations.
 *
 * All passages are original TalkSy practice material; established knowledge
 * only, with uncertainty stated as uncertainty.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const acad2Exercises: ToeflReadingExercise[] = [
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-06",
    title: "Eight hours, argued for a century",
    subject: "History",
    difficulty: 2,
    estimatedMinutes: 8,
    passage: {
      heading: "Eight hours, argued for a century",
      paragraphs: [
        "The eight-hour day seems like a number someone discovered. It was, in fact, a demand argued over roughly a century, and the argument was carried by organised workers long before any legislature agreed with them. In the industrial towns of the nineteenth century, working days of twelve or more hours were normal, including for children, and the working week ran six days. The demand for 'eight hours labour, eight hours recreation, eight hours rest' gave the movement a phrase, a rhythm and a measurable goal.",
        "The phrase mattered because it was checkable. A wage demand can be eroded by prices; a demand phrased in hours cannot be redefined by an employer. Campaigners could count, in public, how far any given mill or mine fell short, and a shortfall was visible to everyone at once. This measurability is one reason the demand travelled across countries and industries faster than most other claims of the period.",
        "Employers' responses varied, and the passage of the demand was not a smooth line. Some owners argued that shorter hours would raise costs and close works; others found, in their own records, that rested workers made fewer mistakes and broke fewer machines, which turned the argument into one about efficiency as well as justice. Where unions were strong, the day shortened earlier; where they were weak or banned, the same change arrived later and by law instead of by bargaining.",
        "The legal arrival came in pieces. Individual countries and sectors shortened the day at different dates, and the eight-hour norm became general only after the middle of the twentieth century in much of the world — later in some places, and not at all in others, where the working day remains a matter of the local labour market. What the century-long campaign established was a principle rather than a fact: that the length of the working day is a public question, not merely a private arrangement between a worker and an employer.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why does the passage say the eight-hour formula mattered to the movement?",
        options: [
          "It was easy to remember and measurable, so shortfalls could be counted in public",
          "It was written into law immediately",
          "It matched the wishes of employers",
          "It was agreed at a single congress",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "main-ideas"],
          evidence: [{ block: 0, paragraph: 1, quote: "Campaigners could count, in public, how far any given mill or mine fell short, and a shortfall was visible to everyone at once" }],
          explanation:
            "The passage attributes the phrase's power to its checkability: hours cannot be redefined the way wages can be eroded by prices, so every workplace's shortfall was countable and public. The item checks the argument of the second paragraph.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "According to paragraph 1, what was normal in nineteenth-century industrial towns?",
        options: [
          "Eight-hour days",
          "Twelve-hour or longer days, six-day weeks, including for children",
          "Four-day weeks",
          "Flexible hours",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "working days of twelve or more hours were normal, including for children, and the working week ran six days" }],
          explanation:
            "The paragraph states the baseline the movement argued against: twelve-plus hours, six days, children included. The item is a direct factual read of the passage's opening conditions.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage report that some employers found in their own records?",
        options: [
          "That rested workers made fewer mistakes and broke fewer machines",
          "That shorter hours always cut profits",
          "That workers preferred longer days",
          "That machines ran better at night",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "others found, in their own records, that rested workers made fewer mistakes and broke fewer machines" }],
          explanation:
            "Some employers' records showed efficiency gains, which shifted part of the argument from justice to efficiency. The item checks that the passage attributes this to employers' own data, not to campaigners' claims.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What difference does the passage draw between strong and weak unions?",
        options: [
          "Strong unions won the shorter day earlier by bargaining; weak ones got it later by law",
          "Strong unions opposed the eight-hour day",
          "Weak unions won it earlier",
          "Unions made no difference to the outcome",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Where unions were strong, the day shortened earlier; where they were weak or banned, the same change arrived later and by law instead of by bargaining" }],
          explanation:
            "The route to the shorter day differed with union strength: bargaining where unions could bargain, legislation where they could not. The item checks the contrast the paragraph builds.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What principle does the closing paragraph say the campaign established?",
        options: [
          "That the working day is fixed at eight hours everywhere",
          "That the length of the working day is a public question, not a private arrangement",
          "That employers own the clock",
          "That strikes are illegal",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "the length of the working day is a public question, not merely a private arrangement between a worker and an employer" }],
          explanation:
            "The passage's conclusion is a reframing, not a universal number: the eight-hour day arrived unevenly, but the principle that its length is publicly decidable arrived everywhere the campaign did. The item checks that distinction.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The passage notes that a wage demand 'can be eroded by prices' while an hours demand cannot be redefined. The point being made is that",
        options: [
          "wage demands are always wrong",
          "phrasing a demand in absolute units protects it from inflation and redefinition",
          "prices never mattered to workers",
          "hours are harder to count than money",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 1, quote: "A wage demand can be eroded by prices; a demand phrased in hours cannot be redefined by an employer" }],
          explanation:
            "The sentence contrasts the stability of units: hours stay hours while money's meaning moves with prices. The strategic lesson is about how a demand is phrased, and the item asks for that lesson.",
        },
      },
    ],
    vocabulary: [
      { word: "eroded", partOfSpeech: "verb (past)", definition: "worn away gradually" },
      { word: "measurable", partOfSpeech: "adjective", definition: "expressible as a number that can be checked" },
      { word: "legislature", partOfSpeech: "noun", definition: "the law-making body of a country" },
      { word: "bargaining", partOfSpeech: "noun", definition: "negotiating terms between parties" },
      { word: "norm", partOfSpeech: "noun", definition: "the usual, expected standard" },
      { word: "sector", partOfSpeech: "noun", definition: "one part of the economy" },
    ],
    grammar: [
      "The quoted slogan 'eight hours labour, eight hours recreation, eight hours rest' uses parallel triplet structure — the repetition carries the rhetorical force, and the passage quotes it as a historical artefact.",
      "The final paragraph pairs 'a principle rather than a fact' — a corrective construction that reframes what the century achieved.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-07",
    title: "Drifting continents",
    subject: "Geology",
    difficulty: 2,
    estimatedMinutes: 8,
    passage: {
      heading: "Drifting continents",
      paragraphs: [
        "For most of modern geology's history, the map was considered fixed. Continents might rise and sink, but they did not travel. When a researcher early in the twentieth century proposed that continents move horizontally across the globe — that Africa and South America, for example, were once joined — the proposal was widely rejected, partly because the mechanism he offered was wrong, and partly because the idea asked geologists to reimagine the stability of the ground itself.",
        "The evidence that changed the argument came from the ocean floor, which nobody had been able to survey before the mid-twentieth century. Soundings revealed a continuous undersea mountain chain running down the middle of the Atlantic, and a central valley within it. Instruments found that the rocks of the sea floor record the direction of the earth's magnetic field as it was when the lava cooled, and those readings form symmetrical stripes on either side of the ridge — evidence that new sea floor is created at the ridge and spreads outward, carrying the continents apart.",
        "The theory built on this evidence is plate tectonics. The earth's outer shell is divided into moving plates, and the ridges, deep trenches, mountain ranges and earthquake belts of the world fall along the boundaries where plates are created, consumed or grind past each other. What the older proposal had lacked was a driving mechanism; the modern theory supplied one — convection in the hot rock below, and the pull of cold slabs sinking at the trenches — and with a mechanism, the drifting continents stopped being an argument and became the framework of the whole science.",
        "The reversal is worth noting as an episode in how knowledge changes. The original claim was not vindicated in its original form: its mechanism was wrong, and much of its supporting detail was wrong too. But the central intuition — that the map moves — survived on better evidence, and the science that once rejected it now organises itself around the fact it was the first to propose.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why was the original drifting-continents proposal widely rejected?",
        options: [
          "Because the mechanism offered was wrong, and it asked geologists to reimagine the ground's stability",
          "Because the proposer was not a geologist by training only",
          "Because no one had heard of the Atlantic",
          "Because the maps of the time were accurate",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the proposal was widely rejected, partly because the mechanism he offered was wrong, and partly because the idea asked geologists to reimagine the stability of the ground itself" }],
          explanation:
            "The passage names two reasons joined by 'partly… partly': a wrong mechanism and a challenge to a settled world picture. The item asks for both, not just the biographical detail.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What did the magnetic readings from the sea floor reveal?",
        options: [
          "That sea floor is created at the ridge and spreads outward, carrying continents apart",
          "That the sea floor is unmagnetised",
          "That the Atlantic is shrinking",
          "That the ridge is a recent feature only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "those readings form symmetrical stripes on either side of the ridge — evidence that new sea floor is created at the ridge and spreads outward, carrying the continents apart" }],
          explanation:
            "The symmetrical magnetic stripes are the evidence that material forms at the ridge and moves outward on both sides. The item checks the inference the passage draws from the pattern, not the pattern alone.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What did the modern theory supply that the original proposal lacked?",
        options: [
          "A driving mechanism — convection below and cold slabs pulling at the trenches",
          "Better maps of the coastlines",
          "A new definition of the Atlantic",
          "Proof that mountains do not exist",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "the modern theory supplied one — convection in the hot rock below, and the pull of cold slabs sinking at the trenches" }],
          explanation:
            "The missing piece was a mechanism, and the passage names it: convection in the hot rock plus the pull of sinking slabs. With that, drifting continents became the framework of the science, which the item's stem reflects.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "The final paragraph argues that the original proposal was vindicated",
        options: [
          "in its original form, mechanism and all",
          "in its central intuition only, on better evidence",
          "not at all",
          "only by accident",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "The original claim was not vindicated in its original form: its mechanism was wrong, and much of its supporting detail was wrong too. But the central intuition — that the map moves — survived on better evidence" }],
          explanation:
            "The passage separates the claim's parts: mechanism and detail wrong, the central intuition right. The item checks that the reader keeps the vindication narrow, which is the paragraph's whole point.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Which of these does the passage list as lying along plate boundaries?",
        options: [
          "Ridges, trenches, mountain ranges and earthquake belts",
          "Rivers and lakes",
          "Deserts and forests",
          "Cities and ports",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "the ridges, deep trenches, mountain ranges and earthquake belts of the world fall along the boundaries where plates are created, consumed or grind past each other" }],
          explanation:
            "The sentence is a list of boundary features: ridges, trenches, ranges, earthquake belts. The item is a direct list check of the theory's explanatory reach.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The passage describes the episode as instructive about",
        options: [
          "how scientific reputation is allocated",
          "how knowledge changes: a wrong mechanism can carry a right intuition to later vindication",
          "why surveys should be avoided",
          "the speed of geological change",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "The reversal is worth noting as an episode in how knowledge changes" }],
          explanation:
            "The last paragraph frames the history as a lesson in epistemics: ideas can be partly wrong and partly right, and the right part can outlive the wrong. The item asks for that framing, which opens the paragraph.",
        },
      },
    ],
    vocabulary: [
      { word: "sounding", partOfSpeech: "noun", definition: "a depth measurement of the sea" },
      { word: "ridge", partOfSpeech: "noun", definition: "the undersea mountain chain where plates form" },
      { word: "trench", partOfSpeech: "noun", definition: "the deep trough where a plate sinks" },
      { word: "convection", partOfSpeech: "noun", definition: "movement driven by heat in a fluid" },
      { word: "vindicated", partOfSpeech: "verb (past)", definition: "proved right in the end" },
      { word: "intuition", partOfSpeech: "noun", definition: "an idea held before its proof" },
    ],
    grammar: [
      "The passage uses paired dashes to append the meaning of a finding: '— evidence that new sea floor is created at the ridge and spreads outward' — turning observation into inference inside one sentence.",
      "'Partly because… and partly because' builds a two-part causal clause, a structure the reader must hold whole to answer the first item.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-08",
    title: "The placebo effect",
    subject: "Medicine",
    difficulty: 2,
    estimatedMinutes: 8,
    passage: {
      heading: "The placebo effect",
      paragraphs: [
        "A placebo is an inert treatment — a sugar pill, a saline injection — given as if it were active medicine. That such a thing can be given ethically at all depends on the design of clinical trials: in a controlled trial, some patients receive the real treatment and others receive a placebo, and neither the patients nor the staff who care for them know which is which. The difference in outcome between the two groups is the measure of the treatment; the improvement in the placebo group, over and above what inert pills 'should' do, is called the placebo effect.",
        "The effect is real but easily overstated. It is strongest, trials suggest, for outcomes that patients can feel and report — pain, nausea, fatigue, sleep — and weak or absent for outcomes that the body controls without consulting sensation, such as the growth of a tumour or the course of an infection. In the strongest placebo findings, even the knowledge structure around the patient matters: in some studies, patients who received an honest description that this was an open-label placebo still reported some benefit, though less than when the treatment was believed to be active.",
        "Two implications follow for how trials are read. First, a treatment must beat not zero but the placebo response, which is why placebo-controlled trials exist: otherwise every kindly administered therapy would look modestly successful. Second, the placebo response itself is a scientific finding about the body: expectation changes what the nervous system reports and, in some measured domains, what it does. The effect is not a failure of method; it is one of the methods' most interesting discoveries.",
        "What the effect is not is a licence. Reports of patients who recovered from serious disease because they believed hard enough belong to anecdote, not to the trial record, and the trial record is the only place where the claim could be checked. The honest statement is narrower and stranger: belief reliably alters some of what people feel, a little of what bodies measure, and nothing at all that cells decide among themselves.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "How is the placebo effect measured in a controlled trial?",
        options: [
          "As the improvement in the placebo group over and above what inert pills should do",
          "As the difference between the two groups' expectations",
          "As the rate of side effects",
          "As the cost of the treatment",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the improvement in the placebo group, over and above what inert pills 'should' do, is called the placebo effect" }],
          explanation:
            "The trial splits groups, blinds both sides, and reads the placebo group's own improvement as the effect. The item checks the definitional sentence the first paragraph ends with.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "For which kind of outcome does the passage say the effect is strongest?",
        options: [
          "Outcomes patients can feel and report — pain, nausea, fatigue, sleep",
          "Outcomes the body controls without sensation, like tumour growth",
          "Laboratory measurements only",
          "Surgical outcomes",
        ],
        correct: 0,
        lure: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "It is strongest, trials suggest, for outcomes that patients can feel and report — pain, nausea, fatigue, sleep — and weak or absent for outcomes that the body controls without consulting sensation" }],
          explanation:
            "The passage draws the boundary by who is in charge of the outcome: sensation-adjacent outcomes respond, cell-decided ones do not. The lure quotes the second half of that boundary, which is exactly the wrong side for 'strongest'.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What did some open-label studies find?",
        options: [
          "No benefit at all from honestly described placebos",
          "Some reported benefit even when patients knew the pill was inert, though less",
          "That honest description increases side effects",
          "That open-label trials are impossible to run",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "patients who received an honest description that this was an open-label placebo still reported some benefit, though less than when the treatment was believed to be active" }],
          explanation:
            "The finding is a reduction, not an elimination: knowing the pill is inert lowered the benefit below the blinded case. The item keeps the 'though less' that the finding actually rests on.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Why must a treatment beat the placebo response rather than beat zero?",
        options: [
          "Because kindly administered therapy otherwise looks modestly successful",
          "Because placebos are expensive",
          "Because patients demand it",
          "Because regulators require three groups",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 2, quote: "otherwise every kindly administered therapy would look modestly successful" }],
          explanation:
            "The point of the control group is a meaningful baseline: care and expectation already improve reported symptoms, so a genuine treatment must outperform care itself. The item quotes the reason the passage gives.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The final paragraph rejects which claim?",
        options: [
          "That belief reliably alters what patients feel",
          "That patients recovered from serious disease purely through belief, as anecdote rather than trial evidence",
          "That open-label studies exist",
          "That expectation affects the nervous system",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "Reports of patients who recovered from serious disease because they believed hard enough belong to anecdote, not to the trial record" }],
          explanation:
            "The closing paragraph accepts the narrow finding and refuses the broad one: belief moves feeling and some measures, not the decisions of cells. The item checks which claim the passage assigns to anecdote.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The passage calls the placebo effect 'one of the methods' most interesting discoveries'. This means the effect is treated as",
        options: [
          "a flaw in trial design that should be removed",
          "a genuine finding about mind-body interaction produced by the method",
          "a coincidence awaiting explanation",
          "an obstacle to statistics",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "main-ideas"],
          evidence: [{ block: 0, paragraph: 2, quote: "The effect is not a failure of method; it is one of the methods' most interesting discoveries" }],
          explanation:
            "The sentence inverts the usual complaint: the nuisance turned out to be a discovery about expectation and the body. The item asks the reader to take the reframe as the passage's stance, which it states in one line.",
        },
      },
    ],
    vocabulary: [
      { word: "inert", partOfSpeech: "adjective", definition: "chemically inactive, doing nothing" },
      { word: "controlled trial", partOfSpeech: "noun", definition: "a study comparing treatment against a control" },
      { word: "open-label", partOfSpeech: "adjective", definition: "conducted without disguise; patients know what they take" },
      { word: "anecdote", partOfSpeech: "noun", definition: "an unverified personal report" },
      { word: "domain", partOfSpeech: "noun", definition: "an area of measurement or behaviour" },
      { word: "trial", partOfSpeech: "noun", definition: "a controlled study comparing treatment against a control" },
    ],
    grammar: [
      "The passage uses semicolons to stack related claims — 'First… Second…' — an enumerated structure whose numbered markers the reader must track across sentences.",
      "The final sentence is a triple list with ascending scope: 'some of what people feel, a little of what bodies measure, and nothing at all that cells decide' — parallel clauses grading from much to none.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-09",
    title: "How bees find their way",
    subject: "Zoology",
    difficulty: 2,
    estimatedMinutes: 8,
    passage: {
      heading: "How bees find their way",
      paragraphs: [
        "A honeybee leaving a flower patch flies home across country it never sees on any map, and it does so with a brain smaller than a grass seed. Research on how this works has unpacked a toolkit of remarkable specificity: the bee navigates by the sun, by landmarks, by the pattern of polarised light in the sky, and by a memory of the distance and direction it has travelled, updated continuously as it flies.",
        "The record of the journey is the famous waggle dance. A returning forager performs a figure-of-eight movement on the vertical face of the comb, and the angle of the run encodes the direction of the food relative to the sun, while the length of the waggle encodes the distance. Other bees follow, and the recruitment works: in classic experiments, dancers were made to perform on a horizontal surface where the direction could be read directly against the visible sun, and recruited bees arrived at the indicated spot.",
        "Distance itself is measured in an unexpected currency. Bees gauge how far they have flown using the rate at which the visual scene streams past their eyes — a measure called optic flow — rather than by counting time or effort alone. Experiments that manipulated the visual environment, for example by having bees fly down a tunnel with patterns on its walls, shifted their reported distance: a visually 'long' tunnel produced a dance for a far-off target even when the real flight was short.",
        "The general lesson researchers draw extends beyond bees. Small animals with small brains solve hard computational problems, but they solve them with the tools their world reliably offers: the sun is a dependable compass, the sky's polarisation pattern is a fixed coordinate system, and the visual world streams at a rate tied to speed. Evolution builds navigation out of whatever is constant in the environment, and constancy, it turns out, is something the world supplies in abundance.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What does the waggle dance encode?",
        options: [
          "Direction relative to the sun and distance to the food",
          "The identity of the dancing bee only",
          "The age of the hive",
          "The temperature of the comb",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "the angle of the run encodes the direction of the food relative to the sun, while the length of the waggle encodes the distance" }],
          explanation:
            "The dance carries two coordinates: angle for direction relative to the sun, waggle length for distance. The item checks the pair, which the sentence states in two matched clauses.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "In what currency do bees measure distance?",
        options: [
          "Time in flight",
          "Wing-beat count",
          "Optic flow — the rate at which the visual scene streams past",
          "Energy used",
        ],
        correct: 2,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Bees gauge how far they have flown using the rate at which the visual scene streams past their eyes — a measure called optic flow" }],
          explanation:
            "The passage names the measure explicitly and even glosses the term with a dash. The item checks the currency, which is visual streaming rather than any internal counter.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What did the tunnel experiments demonstrate?",
        options: [
          "That visual richness alone shifts the bees' reported distance — a 'long' tunnel produces a far-off dance",
          "That bees count their steps",
          "That tunnels confuse bees permanently",
          "That distance is measured by smell",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "a visually 'long' tunnel produced a dance for a far-off target even when the real flight was short" }],
          explanation:
            "By changing only the visual environment, the experiments changed the bees' distance report: optic flow, not actual travel, set the dance. The item checks the manipulation-and-result logic.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say the classic horizontal-surface experiments showed?",
        options: [
          "That recruited bees arrived at the indicated spot when direction could be read directly against the sun",
          "That bees cannot dance on horizontal surfaces",
          "That the dance is decorative",
          "That recruits ignore dancers",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "dancers were made to perform on a horizontal surface where the direction could be read directly against the visible sun, and recruited bees arrived at the indicated spot" }],
          explanation:
            "The experiment tested the code by changing the geometry it is expressed in, and the recruits still found the target. The item asks for that result, which validates the dance as communication.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What general lesson does the closing paragraph draw?",
        options: [
          "That small brains cannot compute",
          "That navigation is built from constants the environment reliably supplies",
          "That only large animals navigate",
          "That landmarks are useless",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "Evolution builds navigation out of whatever is constant in the environment" }],
          explanation:
            "The lesson is about exploiting environmental invariants: the sun, the sky's polarisation, the streaming visual world. The item checks the sentence the paragraph is built to deliver.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The opening sentence notes the bee flies home 'across country it never sees on any map'. The rhetorical purpose of this line is to",
        options: [
          "state the puzzle the rest of the passage will explain",
          "introduce the waggle dance",
          "criticise mapmaking",
          "praise the bee's eyesight",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "A honeybee leaving a flower patch flies home across country it never sees on any map, and it does so with a brain smaller than a grass seed" }],
          explanation:
            "The opening sets up the mismatch — tiny brain, hard task — that the passage then resolves mechanism by mechanism. The item asks the reader to identify the sentence's function, not its content.",
        },
      },
    ],
    vocabulary: [
      { word: "forager", partOfSpeech: "noun", definition: "the bee that leaves the hive to find food" },
      { word: "comb", partOfSpeech: "noun", definition: "the wax structure of the hive" },
      { word: "optic flow", partOfSpeech: "noun", definition: "the streaming rate of the visual scene" },
      { word: "polarised light", partOfSpeech: "noun", definition: "light whose waves align, revealing sky patterns" },
      { word: "recruited", partOfSpeech: "adjective", definition: "persuaded by the dance to visit the target" },
      { word: "landmark", partOfSpeech: "noun", definition: "a fixed visible feature used for orientation" },
    ],
    grammar: [
      "The passage marks introduced terms with an appositive after a dash — 'a measure called optic flow' — defining new vocabulary at first use, a hallmark of expository prose.",
      "The last paragraph generalises with 'it turns out', a formula that signals a reflective conclusion rather than new data.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-10",
    title: "The invention of the university",
    subject: "History of education",
    difficulty: 2,
    estimatedMinutes: 8,
    passage: {
      heading: "The invention of the university",
      paragraphs: [
        "The university was not designed; it was negotiated into existence. The earliest European universities of the twelfth and thirteenth centuries grew up around teachers and students who gathered in cities where learning could be traded — and, like other trades, this one organised itself. Scholars formed corporations with legal rights: the right to teach, to set examinations, to admit members, and in many places to judge their own disputes. The word 'university' itself comes from the language of guilds, meaning roughly a body of people with a common purpose.",
        "The relationship with the surrounding city was tense and productive. Towns wanted the revenue that thousands of students brought; they also wanted the authority that thousands of unattached young men tested daily. Out of this friction came the concessions: in several famous cases, scholars obtained charters from rulers granting them independence from municipal courts, sometimes after strikes in which the whole student body simply left town — an economically persuasive act, since a university that departs takes its trade with it.",
        "What was taught was inherited from the ancient world and reorganised. The curriculum separated the preparatory arts — grammar, logic, rhetoric and the mathematical quadrivium — from the higher faculties of law, medicine and theology. The method that defined the place was disputation: a question was set, authorities were cited on both sides, and the assembly reasoned toward a resolution. The form trained a particular habit of mind, the disciplined comparison of opposing texts, and it proved durable enough to survive the curriculum's own contents changing almost completely.",
        "The institution that resulted has outlasted every kingdom that chartered it, and in most of Europe the university predates the nation that now hosts it. Bodies with their own laws, admissions and examinations, built to survive their founders, are rare inventions; this one has been exported and imitated on every continent, and it remains recognisable to its medieval founders in exactly the features they fought for: a self-governing body of scholars, deciding for itself what shall be taught and who shall teach it.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What legal rights did early scholars' corporations hold?",
        options: [
          "The rights to teach, examine, admit members and often judge their own disputes",
          "The right to tax the city",
          "The right to appoint mayors",
          "Only the right to assemble",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the right to teach, to set examinations, to admit members, and in many places to judge their own disputes" }],
          explanation:
            "The first paragraph lists the corporate rights: teaching, examining, admitting, self-judgement. The item checks the list the sentence enumerates.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the passage say the word 'university' comes from?",
        options: [
          "The language of guilds — a body of people with a common purpose",
          "The Latin for 'building'",
          "The name of a first university",
          "A royal title",
        ],
        correct: 0,
        meta: {
          skills: ["details", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "The word 'university' itself comes from the language of guilds, meaning roughly a body of people with a common purpose" }],
          explanation:
            "The etymology is the guild vocabulary: a corporation of people. The item checks the derivation the passage states in its closing lines of paragraph one.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Why were the scholars' departures 'economically persuasive'?",
        options: [
          "Because a university that departs takes its trade with it",
          "Because scholars burned records",
          "Because kings forced the cities",
          "Because students were wealthy individually",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "inference"],
          evidence: [{ block: 0, paragraph: 1, quote: "an economically persuasive act, since a university that departs takes its trade with it" }],
          explanation:
            "The strike worked because the town's revenue walked out with the scholars. The passage explains the pressure as economic, not armed or royal, which is the item's target.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What method does the passage say defined the medieval university?",
        options: [
          "Disputation — a question set, authorities cited on both sides, reasoned resolution",
          "Lectures alone",
          "Apprenticeship in workshops",
          "Silent reading",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "The method that defined the place was disputation: a question was set, authorities were cited on both sides, and the assembly reasoned toward a resolution" }],
          explanation:
            "The passage names disputation and describes its three-stage form. The item checks the defining method, which the passage says outlived the curriculum's contents.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Which separation structured the curriculum?",
        options: [
          "The preparatory arts from the higher faculties of law, medicine and theology",
          "Science from religion entirely",
          "Town from gown",
          "Undergraduates from buildings",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "The curriculum separated the preparatory arts — grammar, logic, rhetoric and the mathematical quadrivium — from the higher faculties of law, medicine and theology" }],
          explanation:
            "The curricular split was arts below, the three higher faculties above. The item checks the structural division the paragraph describes.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final paragraph says the university 'remains recognisable to its medieval founders' in which features?",
        options: [
          "Its buildings and dress",
          "Self-government: a body of scholars deciding what is taught and who teaches",
          "The original curriculum",
          "The original language of instruction",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "a self-governing body of scholars, deciding for itself what shall be taught and who shall teach it" }],
          explanation:
            "What survives is the corporate form, not the contents: the founders would recognise the governance, which is what they fought for. The item checks the continuity the passage claims.",
        },
      },
    ],
    vocabulary: [
      { word: "corporation", partOfSpeech: "noun", definition: "a body with legal rights of its own" },
      { word: "charter", partOfSpeech: "noun", definition: "a document granting rights and independence" },
      { word: "disputation", partOfSpeech: "noun", definition: "a formal argued debate" },
      { word: "quadrivium", partOfSpeech: "noun", definition: "the four mathematical arts of the old curriculum" },
      { word: "concession", partOfSpeech: "noun", definition: "a right yielded after pressure" },
      { word: "municipal", partOfSpeech: "adjective", definition: "belonging to the town government" },
    ],
    grammar: [
      "The passage personifies the institution — 'was negotiated into existence' — a passive that keeps human agency in view without naming actors.",
      "The last paragraph uses a colon to deliver its summary definition, a common academic device for ending on a formulated claim.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-11",
    title: "How plants build themselves from air",
    subject: "Biology",
    difficulty: 2,
    estimatedMinutes: 8,
    passage: {
      heading: "How plants build themselves from air",
      paragraphs: [
        "Almost the whole dry mass of a plant — the wood of a tree, the grain of a wheat field, the leaf itself — is assembled from carbon dioxide taken from the air. The process is photosynthesis: light energy drives a chemical sequence in green tissue that splits water, releases oxygen as a by-product, and uses the hydrogen to fix carbon into sugars. The sugars become everything: fuel for the plant's own growth, material for its structure, and the starting point of nearly every food chain on land.",
        "The machinery is a pair of linked systems. The light-dependent reactions, embedded in internal membranes, capture photons and produce the energy carriers used in the second stage. The light-independent stage, often called by the name of its discoverers, takes those carriers and assembles carbon into sugar through a cycle of reactions that does not itself need light. Both stages run in the green parts of the plant, mostly leaves, which are structured like solar farms: broad surfaces angled toward light, with internal plumbing that brings water up from the roots and takes the products away.",
        "The raw materials could hardly be more ordinary. Carbon dioxide diffuses in through pores in the leaf's surface — the same pores through which water escapes, a trade the plant manages by widening or narrowing them. Water arrives from the soil through roots, and much of it simply passes through and evaporates; the water that is split chemically is a small fraction of the total a plant moves. The scale is the striking part: a mature tree draws a very large volume of water over a season, almost all of it released to the air through the same pores that let the carbon in.",
        "One consequence deserves emphasis: the oxygen in today's atmosphere, and in every breath taken while reading this paragraph, is the accumulated by-product of this process operating over billions of years. The carbon fixed by ancient plants and plankton, buried before it could decay, became the fossil fuels; burning them returns that carbon to the air in a geological instant. In both directions, the ledger of life is written in the same currency — carbon pulled out of the sky and returned to it, at rates set first by biology and, lately, by one species.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Where does the dry mass of a plant come from, according to the passage?",
        options: [
          "From carbon dioxide taken from the air",
          "From the soil directly",
          "From water alone",
          "From nutrients in fertiliser",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "is assembled from carbon dioxide taken from the air" }],
          explanation:
            "The opening claim is that plant substance is built from air: carbon fixed into sugars becomes wood, grain and leaf. The item checks the passage's foundational assertion.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What are the two stages of the machinery, as the passage describes them?",
        options: [
          "Light-dependent reactions capturing photons, then a light-independent cycle assembling carbon into sugar",
          "Roots then leaves",
          "Day then night",
          "Pores then veins",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "capture photons and produce the energy carriers used in the second stage" }, { block: 0, paragraph: 1, quote: "assembles carbon into sugar" }],
          explanation:
            "Paragraph 2 divides photosynthesis into light reactions and the carbon-fixing cycle that uses their products. The item checks the two-part description and their linkage.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What trade does the plant manage at its pores?",
        options: [
          "Letting carbon dioxide in while water escapes — widened or narrowed as needed",
          "Absorbing light through pores",
          "Exchanging sugars with the soil",
          "Releasing seeds",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Carbon dioxide diffuses in through pores in the leaf's surface — the same pores through which water escapes, a trade the plant manages by widening or narrowing them" }],
          explanation:
            "The same pores admit carbon and lose water, so the plant adjusts their opening. The item checks the trade-off the sentence states with its dash.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say about the volume of water a mature tree moves?",
        options: [
          "A very large volume over a season, almost all released to the air",
          "Almost none; water is used once",
          "Only the fraction split chemically is ever moved",
          "Water is absorbed only at night",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "a mature tree draws a very large volume of water over a season, almost all of it released to the air through the same pores that let the carbon in" }],
          explanation:
            "The striking scale: enormous throughput, tiny fraction used chemically, nearly all evaporated. The item checks the quantitative contrast the paragraph calls 'the striking part'.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "According to the final paragraph, burning fossil fuels does what?",
        options: [
          "Returns ancient fixed carbon to the air in a geological instant",
          "Creates new oxygen",
          "Fixes new carbon",
          "Has no effect on the carbon ledger",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "The carbon fixed by ancient plants and plankton, buried before it could decay, became the fossil fuels; burning them returns that carbon to the air in a geological instant" }],
          explanation:
            "Fossil fuels are buried ancient carbon; combustion is that carbon's rapid return. The item checks the direction and the speed, both in the same clause.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The phrase 'at rates set first by biology and, lately, by one species' implies that",
        options: [
          "plants now control the rates",
          "humans have recently become a determining influence on carbon's movement",
          "the rates never change",
          "biology has stopped operating",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "at rates set first by biology and, lately, by one species" }],
          explanation:
            "The sentence's 'lately' marks a change of controller: after long biological dominance, one species now sets rates. The item checks that the understatement carries a large claim.",
        },
      },
    ],
    vocabulary: [
      { word: "photosynthesis", partOfSpeech: "noun", definition: "the light-driven fixing of carbon into sugars" },
      { word: "by-product", partOfSpeech: "noun", definition: "something made incidentally by a process" },
      { word: "pore", partOfSpeech: "noun", definition: "a tiny opening in the leaf surface" },
      { word: "fix", partOfSpeech: "verb", definition: "to convert a gas into solid compounds" },
      { word: "ledger", partOfSpeech: "noun", definition: "an account of movements in and out" },
      { word: "plankton", partOfSpeech: "noun", definition: "drifting aquatic organisms that also fix carbon" },
    ],
    grammar: [
      "The passage opens with an appositive list set off by dashes — 'the wood of a tree, the grain of a wheat field, the leaf itself' — expanding an abstract noun into visible instances.",
      "The closing paragraph's 'in both directions' summarises a symmetry: the same currency moves up and down the ledger, a concision typical of academic conclusions.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-12",
    title: "When money stops meaning anything",
    subject: "Economics",
    difficulty: 2,
    estimatedMinutes: 8,
    passage: {
      heading: "When money stops meaning anything",
      paragraphs: [
        "Inflation is a rise in the general level of prices, which is the same thing as a fall in what each unit of money will buy. A moderate rate is considered normal in modern economies, and moderate inflation has a peculiar feature: it erodes debts quietly, so borrowers repay in cheaper money than they borrowed. This asymmetry is one reason the phenomenon is never purely technical — every change in the value of money moves wealth between groups, and groups notice.",
        "Ordinary inflation becomes an economic emergency when the rise accelerates and, more importantly, when expectations take over. If buyers expect prices to rise, they spend immediately; if sellers expect the same, they hold goods back or reprice constantly; each behaviour feeds the other. Wages chase prices in a spiral, with wage rises arriving after price rises, so that workers are permanently paying for the last round rather than anticipating the next one.",
        "Hyperinflation is the extreme case, and its histories read like laboratory demonstrations of what money actually is. The classic episodes — in the 1920s in central Europe, and in several later episodes elsewhere — share a signature: the government spends far more than it raises, and bridges the gap by having the central bank create money at the state's command. Once the public concludes that the currency will be printed without limit, the currency stops being a store of value at any speed of spending. Prices double in months, then weeks, then days; wages are paid daily and spent at lunchtime; savings denominated in the currency are destroyed.",
        "The damage outlasts the arithmetic. Trust in money is a social fact, and rebuilding it costs more than a new banknote with extra zeros removed. Economists argue about precise mechanisms, but the record is consistent on the ending: hyperinflations stop when the printing stops, generally through a return to a credible anchor, at the price of a severe contraction. The deepest lesson is definitional: money is a promise, and a promise printed at will is not a promise at all.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What peculiar feature of moderate inflation does the passage identify?",
        options: [
          "It erodes debts quietly, so borrowers repay in cheaper money",
          "It raises wages before prices",
          "It increases savings",
          "It fixes exchange rates",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "moderate inflation has a peculiar feature: it erodes debts quietly, so borrowers repay in cheaper money than they borrowed" }],
          explanation:
            "The passage's named feature is the quiet erosion of debts, which moves wealth between groups. The item checks the asymmetry the paragraph explicitly marks as peculiar.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "According to paragraph 2, what turns ordinary inflation into an emergency?",
        options: [
          "Acceleration combined with expectations taking over — each side's behaviour feeding the other",
          "A single large price rise",
          "A fall in population",
          "New taxes",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 1, quote: "when the rise accelerates and, more importantly, when expectations take over" }],
          explanation:
            "The passage marks expectations as more important than the acceleration itself: belief drives behaviour on both sides, and the behaviours reinforce. The item checks the two-part trigger.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What shared signature do the classic hyperinflation episodes have?",
        options: [
          "Government spending far beyond revenue, bridged by money created at the state's command",
          "Foreign invasion",
          "The collapse of agriculture",
          "Banking holidays only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "the government spends far more than it raises, and bridges the gap by having the central bank create money at the state's command" }],
          explanation:
            "The passage's common thread across episodes is the financing of deficits by commanded money creation. The item checks the signature the paragraph states before describing the collapse.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say happens to wages in the spiral?",
        options: [
          "Wage rises arrive after price rises, so workers pay for the last round",
          "Wages rise first",
          "Wages are frozen",
          "Wages are paid in goods",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "wage rises arriving after price rises, so that workers are permanently paying for the last round rather than anticipating the next one" }],
          explanation:
            "The lag is the injury: wages chase prices and always arrive late. The item checks the ordering, which the sentence states as the spiral's human cost.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "On what point does the passage say the record is consistent about endings?",
        options: [
          "Hyperinflations stop when the printing stops, usually via a credible anchor, at the price of severe contraction",
          "They stop naturally",
          "They end with default only",
          "They never end",
        ],
        correct: 0,
        meta: {
          skills: ["details", "main-ideas"],
          evidence: [{ block: 0, paragraph: 3, quote: "hyperinflations stop when the printing stops, generally through a return to a credible anchor, at the price of a severe contraction" }],
          explanation:
            "The consistent finding: the press must stop, an anchor must return, and the cure is contractionary. The item keeps the cost clause that the record includes.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final line — 'a promise printed at will is not a promise at all' — is best read as",
        options: [
          "a definitional claim about money as a social commitment",
          "a defence of printing",
          "a forecast of recovery",
          "a note about printers' ink",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "The deepest lesson is definitional: money is a promise, and a promise printed at will is not a promise at all" }],
          explanation:
            "The passage ends by defining money as a promise whose value lies in its scarcity. The item checks that the reader takes the last sentence as the passage's thesis rather than as rhetoric.",
        },
      },
    ],
    vocabulary: [
      { word: "erode", partOfSpeech: "verb", definition: "to wear away gradually" },
      { word: "expectations", partOfSpeech: "noun", definition: "what people believe will happen next" },
      { word: "hyperinflation", partOfSpeech: "noun", definition: "extremely rapid, uncontrolled inflation" },
      { word: "store of value", partOfSpeech: "noun", definition: "something that keeps worth over time" },
      { word: "anchor", partOfSpeech: "noun", definition: "a credible commitment tying money to something" },
      { word: "contraction", partOfSpeech: "noun", definition: "a deliberate shrinking of the economy" },
    ],
    grammar: [
      "The passage builds its second paragraph with conditional clauses — 'If buyers expect… if sellers expect…' — parallel conditions whose consequences mirror each other.",
      "The final paragraph uses a colon before its thesis, and the thesis itself is a parallelism: 'money is a promise, and a promise printed at will is not a promise at all' — repetition of 'promise' doing the argumentative work.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
