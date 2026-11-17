/**
 * TOEFL Reading Practice Library — Read an Academic Passage, batch 4 (PROMPT 49).
 *
 * Seven advanced exercises (difficulty 4): history and archaeology of the
 * Norse in Greenland, computational linguistics, medical microbiology,
 * astrophysics, behavioural economics, conservation bioacoustics and
 * anthropology — established knowledge with genuine uncertainty stated
 * as uncertainty.
 *
 * All passages are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const acad4Exercises: ToeflReadingExercise[] = [
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-20",
    title: "The Norse in Greenland",
    subject: "History",
    difficulty: 4,
    estimatedMinutes: 9,
    passage: {
      heading: "The Norse in Greenland",
      paragraphs: [
        "For roughly four and a half centuries, a European society lived at the edge of the habitable world: Norse settlers and their descendants occupied two fjord regions of Greenland, keeping cattle and sheep, building stone churches, sending ivory and hides to Europe, and receiving in trade the timber and iron their treeless country could not supply. The settlement was never large — at its height a few thousand people — and it was always, economically, an outpost of Norway's trading world rather than a self-sufficient colony.",
        "The end, when it came, came quietly. The written record thins and stops; no battle or massacre is reported, and later ships found the farmsteads empty. Archaeology fills the silence with slow evidence: bones from the last generations show a diet shifting, at the western settlement, from stock toward seal; building timbers in the final phase were reused and increasingly came from driftwood and from sailing wreckage, as the imported supplies stopped arriving; and the climate of the period, reconstructed from ice cores, deteriorated through the years the settlements were failing.",
        "Explanations are layered rather than rival. A cooling climate shortened the hay season that the cattle economy depended on; the trade on which the settlement relied redirected toward other goods, reducing the imports that compensated for what Greenland could not make; and the society's choices constrained its response — the settlers continued, as far as the record shows, to build churches and to keep the pastoral economy, rather than adopting the marine hunting at which their Inuit neighbours, who arrived in northern Greenland during the settlement's lifetime, were expert. Nothing in the record suggests catastrophe in a season; everything in it suggests a contraction across generations that ended in abandonment.",
        "The historiographical lesson is cautionary. For a long time the story was told as a moral about rigidity — a society that refused to adapt and paid for it. The more careful reading is that adaptation is easier to name in hindsight than to choose in advance: the last generations were not refusing options they could see; they were working, within the economy and identity they had inherited, in a world whose margins had moved. The Norse of Greenland are studied now less as a fable than as a case study in what happens when a specialised economy meets a moving baseline.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "In economic terms, how does the passage characterise the settlement?",
        options: [
          "An outpost of Norway's trading world, not self-sufficient",
          "A fully independent colony",
          "A military garrison",
          "A fishing station only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "it was always, economically, an outpost of Norway's trading world rather than a self-sufficient colony" }],
          explanation:
            "The passage defines the settlement by dependency: it exported ivory and hides and imported timber and iron. The item checks that structural characterisation, which the later explanations presuppose.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What slow evidence does archaeology supply from the last generations?",
        options: [
          "A diet shifting from stock toward seal, and timbers reused or taken from driftwood and wreckage",
          "Signs of a single battle",
          "Mass graves",
          "Evidence of migration to Iceland in one season",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "bones from the last generations show a diet shifting, at the western settlement, from stock toward seal; building timbers in the final phase were reused and increasingly came from driftwood and from sailing wreckage" }],
          explanation:
            "The archaeological evidence is gradual: diet change and material reuse, alongside climate deterioration from the ice cores. The item checks the record the paragraph assembles in place of a reported catastrophe.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "How does the passage describe the relationship between the explanations?",
        options: [
          "As layered rather than rival — climate, trade and choices together",
          "As a single cause: climate only",
          "As trade only",
          "As conquest",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Explanations are layered rather than rival" }],
          explanation:
            "The paragraph's opening phrase states the historiography: multiple concurrent causes, not a competition. The item checks that framing before the causes are listed.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say the settlers continued to do, as far as the record shows?",
        options: [
          "To build churches and keep the pastoral economy rather than adopt marine hunting",
          "To adopt Inuit hunting methods fully",
          "To abandon the farms early",
          "To relocate to the coast in a season",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "the settlers continued, as far as the record shows, to build churches and to keep the pastoral economy" }, { block: 0, paragraph: 2, quote: "rather than adopting the marine hunting at which their Inuit neighbours" }],
          explanation:
            "The record shows continuity of the inherited economy, not a documented refusal of visible alternatives. The item checks what the passage is careful to say and not say.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What older telling of the story does the final paragraph correct?",
        options: [
          "A moral about rigidity — a society that refused to adapt and paid for it",
          "A story of heroic survival",
          "A legend of hidden treasure",
          "A climate-only account",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "For a long time the story was told as a moral about rigidity — a society that refused to adapt and paid for it" }],
          explanation:
            "The passage names the older narrative and replaces it with a reading about options visible only in hindsight. The item checks the correction the last paragraph performs.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The phrase 'a world whose margins had moved' refers to",
        options: [
          "the shrinking zone in which the inherited economy remained viable",
          "the borders of Norway",
          "the coastline itself",
          "the church's authority",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "they were working, within the economy and identity they had inherited, in a world whose margins had moved" }],
          explanation:
            "The margins are the conditions — climate and trade — within which the settlement's way of life worked; those boundaries shifted beneath a society that had not changed. The item checks the metaphor's referent.",
        },
      },
    ],
    vocabulary: [
      { word: "outpost", partOfSpeech: "noun", definition: "a distant settlement tied to a centre" },
      { word: "fjord", partOfSpeech: "noun", definition: "a deep sea inlet between cliffs" },
      { word: "pastoral", partOfSpeech: "adjective", definition: "of herding livestock" },
      { word: "driftwood", partOfSpeech: "noun", definition: "wood carried by sea and washed ashore" },
      { word: "abandonment", partOfSpeech: "noun", definition: "the final leaving of a place" },
      { word: "baseline", partOfSpeech: "noun", definition: "the reference condition against which change is measured" },
    ],
    grammar: [
      "The second paragraph uses semicolons to sequence the archaeological findings, each clause adding one class of evidence without a new sentence.",
      "The last paragraph's concessive formula 'less as a fable than as a case study' reclassifies the object of study, a closing move common in revisionist history.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-21",
    title: "Teaching machines to translate",
    subject: "Computational linguistics",
    difficulty: 4,
    estimatedMinutes: 9,
    passage: {
      heading: "Teaching machines to translate",
      paragraphs: [
        "Early machine translation worked by dictionary and rule: look up each word, apply the grammar of the source and target languages, and assemble the output. The approach produced translations that were locally plausible and globally strange, because language does not compose that way — the meaning of a sentence is not the sum of its words' dictionary entries, and the rules that describe a language outnumber any practical rulebook. For several decades the field was, in the honest judgement of one famous report, better at revealing the difficulty of the problem than at solving it.",
        "The change came from statistics. Instead of writing rules, researchers built systems that estimated, from very large collections of translated text, the probability of a target phrase given a source phrase, and assembled the most probable whole. No grammar was written by hand; the regularities were learned, which meant the systems improved simply by being shown more parallel text. The translations became fluent — sometimes startlingly so — and the new weakness moved from fluency to fidelity: a statistical translation could read perfectly and be wrong, because nothing in the method knew what the sentence was about.",
        "The current approach extends the same logic with representation learning: the system builds internal vectors that place words and phrases by their behaviour in context, so that 'bank' near 'river' and 'bank' near 'deposit' are different things to it. Trained at enormous scale, such systems now translate between language pairs with little or no direct parallel text by routing through a shared representation, which was once considered a curiosity of theory.",
        "What has not changed is the position of the human translator at the top of the chain. Machine systems are strongest where volume is high and stakes are moderate; they still fail, in instructive ways, on register, on culturally loaded reference, on documents whose cost of error is high. The realistic division of labour is now routine: machines draft, humans verify, and the translator's craft has moved from producing sentences to judging them — a change of task rather than an abolition of the trade, and one that the translators who work this way describe as editing a very fast, very confident apprentice.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why did rule-based translation produce 'locally plausible and globally strange' output?",
        options: [
          "Because meaning does not compose from dictionary entries, and the rules needed outnumber any rulebook",
          "Because the dictionaries were too small only",
          "Because computers were slow",
          "Because languages share grammar",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the meaning of a sentence is not the sum of its words' dictionary entries, and the rules that describe a language outnumber any practical rulebook" }],
          explanation:
            "The passage gives two reasons: non-compositional meaning and unmanageable rule volume. The item checks the pair the first paragraph uses to bury the approach.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What new weakness appeared when statistical systems made translations fluent?",
        options: [
          "Fidelity: output could read perfectly and be wrong, because nothing knew what the sentence was about",
          "Grammar errors increased",
          "Systems became slower",
          "Vocabulary shrank",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "the new weakness moved from fluency to fidelity: a statistical translation could read perfectly and be wrong, because nothing in the method knew what the sentence was about" }],
          explanation:
            "Fluency improved while correctness became the failure mode. The item checks the relocation of the weakness the sentence names, which is why a beautiful translation can still be a wrong one.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage say representation learning gives the system?",
        options: [
          "Internal vectors placing words by behaviour in context, so 'bank' near 'river' differs from 'bank' near 'deposit'",
          "A built-in dictionary of culture",
          "Perfect knowledge of grammar",
          "Awareness of the reader",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "the system builds internal vectors that place words and phrases by their behaviour in context, so that 'bank' near 'river' and 'bank' near 'deposit' are different things to it" }],
          explanation:
            "The vectors separate senses by context. The item checks the example the paragraph uses to make representation learning concrete, since 'bank' means money in one sentence and a riverside in another.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What ability does the passage describe as 'once considered a curiosity of theory'?",
        options: [
          "Translating between pairs with little or no direct parallel text via a shared representation",
          "Translating faster than humans",
          "Speaking aloud",
          "Reading handwriting",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "translate between language pairs with little or no direct parallel text by routing through a shared representation, which was once considered a curiosity of theory" }],
          explanation:
            "Zero-resource and pivot translation moved from theory to practice. The item checks the technical capability the paragraph identifies, routing meaning through a shared representation no language owns.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Where does the passage say machine systems still fail, in instructive ways?",
        options: [
          "On register, culturally loaded reference and documents whose cost of error is high",
          "On spelling",
          "On short sentences",
          "On Latin only",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 3, quote: "they still fail, in instructive ways, on register, on culturally loaded reference, on documents whose cost of error is high" }],
          explanation:
            "The listed residual weaknesses are tone, cultural reference and high-stakes text. The item checks the triple the paragraph gives.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "How do translators who work with the systems describe the relationship?",
        options: [
          "As editing a very fast, very confident apprentice",
          "As competing with a rival",
          "As teaching a child",
          "As working alone",
        ],
        correct: 0,
        meta: {
          skills: ["details", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "describe as editing a very fast, very confident apprentice" }],
          explanation:
            "The metaphor locates the human as editor and the machine as productive but unsupervised. The item checks the self-description the passage closes on.",
        },
      },
    ],
    vocabulary: [
      { word: "parallel text", partOfSpeech: "noun", definition: "the same content in two languages, aligned" },
      { word: "fidelity", partOfSpeech: "noun", definition: "faithfulness to the source meaning" },
      { word: "register", partOfSpeech: "noun", definition: "the level of formality of language" },
      { word: "vector", partOfSpeech: "noun", definition: "a list of numbers representing meaning" },
      { word: "draft", partOfSpeech: "verb", definition: "to produce a first version" },
      { word: "apprentice", partOfSpeech: "noun", definition: "a learner producing work under supervision" },
    ],
    grammar: [
      "The passage's first paragraph pairs two critiques in one sentence — non-composition and rule volume — joined by 'and', each critique carrying equal weight.",
      "The final paragraph uses a dash to append the practitioners' own metaphor, letting testimony close the analysis rather than the author's verdict.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-22",
    title: "The gut and its microbes",
    subject: "Medical microbiology",
    difficulty: 4,
    estimatedMinutes: 9,
    passage: {
      heading: "The gut and its microbes",
      paragraphs: [
        "The human digestive tract is not a machine processing food alone; it is a habitat containing a microbial population of comparable scale to the body's own cells, and the two parties are in continuous negotiation. The microbes break down compounds the body cannot, manufacture some vitamins it uses, and educate the immune system, which develops abnormally in animals raised without them. In exchange they receive a warm, fed, defended environment.",
        "The evidence for these functions is experimental, and the experiments are sometimes startling. Animals raised germ-free have underdeveloped immune tissue and disordered digestion; transferring gut communities between individuals can transfer metabolic and behavioural traits along with them; and the composition of the population responds to diet within days, which is why it serves as a record of what has recently been eaten. The community is also individual: twins share much of it, strangers much less, and no two people carry precisely the same mixture.",
        "The word that has done the most work in popular discussion — 'dysbiosis', an imbalance of the community — is the one scientists treat most carefully, because imbalance implies a known balance, and the healthy configuration appears to differ from person to person. Claims that specific mixtures cause specific diseases remain, in most cases, associations awaiting mechanism: the field's honest position is that the community is deeply involved in health and that the direction of many involvements is still being established.",
        "The clinical possibilities follow the evidence rather than the enthusiasm. One established therapy exists: transferring a prepared community from a screened donor is a recognised treatment for a recurrent intestinal infection, with success rates that led to its adoption. Beyond that single case, manipulations of the gut community remain research: diets that reshape it do so transiently, and commercial products promising optimised mixtures are selling a promise ahead of the mechanism. The field's own summary of itself is cautious to a degree unusual in biology: a system we all own, that demonstrably matters, and that we do not yet know how to steer.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What three functions does the passage credit the microbes with?",
        options: [
          "Breaking down compounds the body cannot, manufacturing some vitamins, and educating the immune system",
          "Digesting food only",
          "Producing hormones and antibodies only",
          "Regulating sleep and temperature",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "The microbes break down compounds the body cannot, manufacture some vitamins it uses, and educate the immune system" }],
          explanation:
            "The opening paragraph lists the three services. The item checks the list before the passage complicates it with the negotiation described later in the same paragraph.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the passage say happens to germ-free animals?",
        options: [
          "They have underdeveloped immune tissue and disordered digestion",
          "They grow larger",
          "They live longer",
          "They develop normally",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "Animals raised germ-free have underdeveloped immune tissue and disordered digestion" }],
          explanation:
            "The germ-free experiments supply the evidence of function. The item checks the finding the paragraph calls startling, because removing the microbes removes the functions with them.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Why do scientists treat 'dysbiosis' carefully?",
        options: [
          "Because imbalance implies a known balance, and healthy configuration differs from person to person",
          "Because the word is new",
          "Because it is untranslatable",
          "Because lawyers object",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "inference"],
          evidence: [{ block: 0, paragraph: 2, quote: "imbalance implies a known balance, and the healthy configuration appears to differ from person to person" }],
          explanation:
            "The term's logic presumes a single reference state, which the evidence does not support. The item checks the reason the field handles the word carefully.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say about twins and strangers?",
        options: [
          "Twins share much of the community, strangers much less; no two people carry the same mixture",
          "Everyone carries the same mixture",
          "Strangers share more than twins",
          "The mixture is set at birth only",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "twins share much of it, strangers much less, and no two people carry precisely the same mixture" }],
          explanation:
            "The community is individual and partly inherited. The item checks the comparison the paragraph uses to establish individuality, which rules out any single reference mixture.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What is the one established clinical therapy the passage names?",
        options: [
          "Transferring a prepared community from a screened donor for a recurrent intestinal infection",
          "A diet product",
          "Antibiotics for all gut complaints",
          "Surgery",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "transferring a prepared community from a screened donor is a recognised treatment for a recurrent intestinal infection" }],
          explanation:
            "The single adopted therapy is donor-community transfer for recurrent infection. The item checks the one clinical fact the paragraph allows itself.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The closing self-summary — 'a system we all own, that demonstrably matters, and that we do not yet know how to steer' — is best described as",
        options: [
          "a candid statement of established involvement with unsettled control",
          "a rejection of the field",
          "a marketing claim",
          "a promise of cures",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "a system we all own, that demonstrably matters, and that we do not yet know how to steer" }],
          explanation:
            "The formula separates three claims — universality, relevance, and the absence of control — and the item asks the reader to hold all three at once, which is the paragraph's purpose.",
        },
      },
    ],
    vocabulary: [
      { word: "habitat", partOfSpeech: "noun", definition: "the environment a population lives in" },
      { word: "germ-free", partOfSpeech: "adjective", definition: "raised without any microbes" },
      { word: "dysbiosis", partOfSpeech: "noun", definition: "a claimed imbalance of the community" },
      { word: "association", partOfSpeech: "noun", definition: "a link observed before mechanism" },
      { word: "donor", partOfSpeech: "noun", definition: "the screened source of a transferred community" },
      { word: "transiently", partOfSpeech: "adverb", definition: "for a while, not permanently" },
    ],
    grammar: [
      "The passage uses a semicolon-chained pair of clauses for its core discovery sentence, then lets a colon introduce the field's own summary — testimony standing in for conclusion.",
      "The last paragraph's triple ('a system we all own, that demonstrably matters, and that we do not yet know how to steer') is a rising list of relative clauses, each longer than the last.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-23",
    title: "The missing mass",
    subject: "Astronomy",
    difficulty: 4,
    estimatedMinutes: 9,
    passage: {
      heading: "The missing mass",
      paragraphs: [
        "The evidence for dark matter was, at first, an accounting discrepancy. In the 1930s a researcher measured the speeds of galaxies in a cluster and found them moving too fast for the mass he could see; in the 1970s another measured the rotation of individual galaxies and found the same mismatch at larger radius, where the visible matter runs out and, by the old physics, the speeds should fall — and they do not. Something unseen is contributing gravity, and the amount required is several times the amount visible.",
        "The candidate explanations have been tested rather than argued. If the missing mass were ordinary matter in hard-to-see forms — faint stars, cold gas, compact dead objects — searches for the brief brightening they would cause when passing in front of stars found too few of them; the abundances of light elements, fixed in the early universe, cap how much ordinary matter can exist at all. The remaining option on the table is a form of matter that interacts gravitationally and hardly at all otherwise — neither absorbing nor emitting light, and passing through apparatus, planet and observer alike.",
        "That option is not a single theory but a class of possibilities, and its members differ about mass, about how they were produced in the early universe, and about whether anything else — an extra interaction, a decay, a signal — might be observable. Searches now run in three directions at once: direct detectors built underground to catch a rare recoil; accelerators attempting to produce the particle among collision debris; and telescopes looking for a signature in the sky that specific models predict.",
        "What is often missed in popular accounts is the epistemic structure of the case. The inference is not 'we do not know, therefore unknown matter'; it is 'gravitational physics works everywhere it can be checked, and this is the least revision of it that fits the data'. Any replacement theory must match not only galaxy speeds but the pattern of the cosmic background radiation, the formation of structure, the behaviour of colliding clusters where the visible and unseen mass are observed to separate — the same theory surviving many independent tests, which is the ordinary way that physics comes to believe anything.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What were the two original lines of evidence, and what did they show?",
        options: [
          "Cluster galaxy speeds in the 1930s and individual galaxy rotation in the 1970s — both too fast for the visible mass",
          "Two surveys of star brightness",
          "Planetary orbits only",
          "Comet paths",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "found them moving too fast for the mass he could see" }, { block: 0, paragraph: 0, quote: "found the same mismatch at larger radius" }],
          explanation:
            "The two foundational observations are cluster speeds and galaxy rotation curves. The item checks the pair and their common finding.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "How were ordinary-matter candidates ruled out, according to the passage?",
        options: [
          "By searches for their brightening effect and by the abundance of light elements capping ordinary matter",
          "By ignoring them",
          "By vote",
          "Because they were too heavy",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "searches for the brief brightening they would cause when passing in front of stars found too few of them" }, { block: 0, paragraph: 1, quote: "cap how much ordinary matter can exist at all" }],
          explanation:
            "Microlensing surveys and nucleosynthesis abundances together closed the ordinary-matter exits. The item checks the two tests the paragraph names.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "In what three directions do searches now run?",
        options: [
          "Direct detectors underground, accelerator production, and telescope signatures predicted by models",
          "Theory only",
          "Manned flight",
          "Weather balloons",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "direct detectors built underground to catch a rare recoil; accelerators attempting to produce the particle among collision debris; and telescopes looking for a signature in the sky" }],
          explanation:
            "The three programmes are detection, production and observation. The item checks the parallel list the paragraph sets out — one underground, one in collisions, one in the sky.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say is often missed in popular accounts?",
        options: [
          "The epistemic structure: gravity works where checkable, and dark matter is the least revision fitting the data",
          "The names of the researchers",
          "The cost of telescopes",
          "The colour of galaxies",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "The inference is not 'we do not know, therefore unknown matter'; it is 'gravitational physics works everywhere it can be checked, and this is the least revision of it that fits the data'" }],
          explanation:
            "The passage contrasts the sound inference with the slogan it is mistaken for. The item checks the epistemology the final paragraph defends.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What observation does the passage cite where visible and unseen mass are seen to separate?",
        options: [
          "Colliding clusters",
          "Eclipses",
          "Comet tails",
          "Solar flares",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 3, quote: "the behaviour of colliding clusters where the visible and unseen mass are observed to separate" }],
          explanation:
            "The bullet-cluster class of observations separates the components. The item checks the example the paragraph lists among its multiple tests.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The phrase 'the ordinary way that physics comes to believe anything' refers to",
        options: [
          "one theory surviving many independent tests",
          "consensus conferences",
          "majority vote of astronomers",
          "the authority of textbooks",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "the same theory surviving many independent tests, which is the ordinary way that physics comes to believe anything" }],
          explanation:
            "The passage defines scientific belief as survival under independent testing. The item checks the definition the closing clause supplies, which is what makes the colliding-cluster evidence count.",
        },
      },
    ],
    vocabulary: [
      { word: "cluster", partOfSpeech: "noun", definition: "a group of galaxies bound together" },
      { word: "brightening", partOfSpeech: "noun", definition: "the brief flash when an object passes in front of a star" },
      { word: "abundance", partOfSpeech: "noun", definition: "the relative amount present" },
      { word: "recoil", partOfSpeech: "noun", definition: "the kick given to a struck nucleus" },
      { word: "revision", partOfSpeech: "noun", definition: "a change made to a theory" },
      { word: "epistemic", partOfSpeech: "adjective", definition: "about how knowledge is justified" },
    ],
    grammar: [
      "The passage opens its first paragraph with a short declarative — 'The evidence… was, at first, an accounting discrepancy' — whose placing of the adverbial frame prepares the whole argument.",
      "The final paragraph quotes two positions in single quotation marks, setting the fallacy and the sound inference side by side without commentary — the juxtaposition is the argument.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-24",
    title: "The power of defaults",
    subject: "Economics",
    difficulty: 4,
    estimatedMinutes: 9,
    passage: {
      heading: "The power of defaults",
      paragraphs: [
        "A default is the outcome that takes effect if nobody acts, and a series of results across several decades of research has shown that defaults change behaviour at rates that standard economic theory did not predict. Employees are enrolled in retirement saving plans at very different rates depending on whether joining is automatic with an opt-out or a choice with an opt-in; patients' organs are donated at different rates depending on which box the form leaves checked; the share of people buying green electricity changes with how the tariff is presented. In each case the effort of choosing has not changed — only the starting point has.",
        "The explanations are not mysterious, but they are several, and separating them matters. Inertia: acting takes steps, and not acting takes none. Endorsement: people read the default as a recommendation from whoever designed the form. Perception of cost: an opt-in frames the choice as acquiring something, an opt-out as keeping it, and the two frames are not felt identically. Which mechanism dominates varies by case, and research designs that separate them — reminders, changes in wording, forced choice for a day — find different mixtures in different settings.",
        "The ethical interest follows from the power. Designers of forms are making choices for other people whenever they leave anything as it stands, and the honest description is that a default is legislation by layout: it sets policy while appearing to be neutral. Several jurisdictions have responded by regulation — banning defaults in particular domains, or requiring a deliberate choice — and by transparency, publishing the designed starting points and who chose them.",
        "The finding's second life has been in policy where it is used deliberately: automatic enrolment, scheduled increases, pre-filled returns. The results are large by the standards of cheap interventions, and the cautions are equally real: defaults work partly by not being examined, and the same property that makes them effective makes them capable of working against the chooser. The research community's own recommendation is symmetrical: use defaults where the designer is confident the default serves the chooser, and remove them where that confidence is absent.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What has research shown about defaults, in the passage's summary?",
        options: [
          "They change behaviour at rates standard economic theory did not predict",
          "They have no effect",
          "They affect only organ donation",
          "They work only on paper forms",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "defaults change behaviour at rates that standard economic theory did not predict" }],
          explanation:
            "The opening states the anomaly the passage will explain. The item checks the headline finding before the examples of pensions, organs and green tariffs.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Which three mechanisms does the passage list?",
        options: [
          "Inertia, endorsement, and the perception of cost — opt-in as acquiring, opt-out as keeping",
          "Fear, hope and habit",
          "Price, quality and brand",
          "Law, custom and chance",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "an opt-in frames the choice as acquiring something, an opt-out as keeping it" }],
          explanation:
            "The passage enumerates three mechanisms and glosses each. The item checks the list, including the framing asymmetry in the third.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage call 'legislation by layout'?",
        options: [
          "A default — it sets policy while appearing neutral",
          "A written law",
          "An architectural style",
          "A court order",
        ],
        correct: 0,
        meta: {
          skills: ["vocabulary", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "the honest description is that a default is legislation by layout: it sets policy while appearing to be neutral" }],
          explanation:
            "The phrase names the ethical point: designing is governing. The item checks the coinage the paragraph defines with a colon.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "How have several jurisdictions responded, according to the passage?",
        options: [
          "By regulation — banning defaults in some domains or requiring deliberate choice — and by transparency",
          "By ignoring the issue",
          "By outlawing all forms",
          "By privatising design",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "Several jurisdictions have responded by regulation — banning defaults in particular domains, or requiring a deliberate choice — and by transparency" }],
          explanation:
            "The responses are regulatory and transparency-based. The item checks the pair of remedies the paragraph names, since publishing the designed starting point exposes the choice.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What caution does the final paragraph attach to defaults' effectiveness?",
        options: [
          "They work partly by not being examined, so they can work against the chooser",
          "They are always illegal",
          "They stop working after a year",
          "They only work on others",
        ],
        correct: 0,
        meta: {
          skills: ["details", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "defaults work partly by not being examined, and the same property that makes them effective makes them capable of working against the chooser" }],
          explanation:
            "The caution is the double edge of unexamined influence. The item checks the symmetry the sentence draws, effective and risky for the same reason.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "What is the research community's own recommendation?",
        options: [
          "Use defaults where confident they serve the chooser; remove them where that confidence is absent",
          "Use defaults everywhere",
          "Ban defaults everywhere",
          "Let markets decide",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "details"],
          evidence: [{ block: 0, paragraph: 3, quote: "use defaults where the designer is confident the default serves the chooser, and remove them where that confidence is absent" }],
          explanation:
            "The closing recommendation is symmetrical and conditional. The item checks the balanced rule the passage ends on, matching confidence in the default to service of the chooser.",
        },
      },
    ],
    vocabulary: [
      { word: "default", partOfSpeech: "noun", definition: "the outcome if nobody acts" },
      { word: "inertia", partOfSpeech: "noun", definition: "the tendency to keep not acting" },
      { word: "endorsement", partOfSpeech: "noun", definition: "a signal taken as recommendation" },
      { word: "frame", partOfSpeech: "verb", definition: "to present a choice as gaining or keeping" },
      { word: "jurisdiction", partOfSpeech: "noun", definition: "a legal territory or authority" },
      { word: "symmetrical", partOfSpeech: "adjective", definition: "the same in both directions" },
    ],
    grammar: [
      "The passage glosses each mechanism with a colon and a noun-first construction ('Inertia: acting takes steps…'), a definitional pattern common in academic enumeration.",
      "The final paragraph's parallel prescription ('use defaults where… and remove them where…') mirrors its own recommendation of symmetry in form as well as content.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-25",
    title: "Recording a disappearing sound",
    subject: "Ecology",
    difficulty: 4,
    estimatedMinutes: 9,
    passage: {
      heading: "Recording a disappearing sound",
      paragraphs: [
        "Acoustic ecology is the study of sound as an environmental fact, and its central instrument is the sound spectrogram: a picture of sound with time on one axis, frequency on the other, and intensity as darkness. The tool matters because ears are poor archives — memory smooths, and one listener cannot be everywhere — while a permanent, comparable record can be re-read later, by anyone, with instruments that have not been invented yet.",
        "The founding observation of the field is that habitats have characteristic sound signatures. The structure is conventionally described in three layers: a background layer of wind, water and insects; a mid-layer of scattered calls; and, in healthy habitats, a dense, species-specific layer at particular frequencies — birdsong arranged so that, in pristine forest, different singers occupy different bands, with the gaps between them as meaningful as the notes. The technical term for the whole arrangement is a soundscape, and the description of a pristine soundscape is now, in many regions, an archive of something that no longer exists there.",
        "Two findings have travelled furthest outside the field. First, noise changes habitat use: species shift the timing, frequency or volume of their signals in the presence of chronic noise, and in several documented cases avoid noisy areas altogether, so that a habitat can be acoustically degraded while remaining physically intact. Second, comparisons across decades — where recordings from the same place in earlier years survive — have found losses of species richness in the sound layer that match what direct counting would show, establishing recordings as a census method, not merely a documentary one.",
        "The applications run from monitoring to law. Permanent recorders now survey remote sites for months, returning schedules of what called and when; the data feed assessments of restoration, where the return of a soundscape's layered structure is taken as evidence of a biological community rebuilding; and in regulatory settings, recordings have been used as evidence, since a dated, spectrogram-backed record of a protected species' voice is harder to dispute than a witness's recollection. A field that began by listening to landscapes ends by testifying for them.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why does the passage say spectrograms matter, given that ears are poor archives?",
        options: [
          "Because a permanent, comparable record can be re-read later by anyone, with instruments not yet invented",
          "Because they are decorative",
          "Because ears cannot hear birds",
          "Because paper is permanent",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "a permanent, comparable record can be re-read later, by anyone, with instruments that have not been invented yet" }],
          explanation:
            "The justification is archival permanence and future re-analysis. The item checks the reason the paragraph gives for the tool.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "How is the structure of a soundscape conventionally described?",
        options: [
          "Three layers: background of wind, water and insects; scattered mid-layer calls; and a dense, species-specific layer",
          "One undifferentiated mass",
          "Two layers: day and night",
          "Four seasons",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "a background layer of wind, water and insects; a mid-layer of scattered calls; and, in healthy habitats, a dense, species-specific layer at particular frequencies" }],
          explanation:
            "The passage gives the three-band model. The item checks the layered description the paragraph builds, with the dense, species-specific layer as the sign of health.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage say can happen to a habitat in the presence of chronic noise?",
        options: [
          "Species shift timing, frequency or volume, and in documented cases avoid noisy areas — the habitat is acoustically degraded though physically intact",
          "It improves",
          "Nothing measurable",
          "Only insects respond",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "species shift the timing, frequency or volume of their signals in the presence of chronic noise, and in several documented cases avoid noisy areas altogether" }],
          explanation:
            "Noise degrades use, not structure. The item checks the distinction between acoustic and physical degradation the paragraph draws: an intact habitat can be unusable to its singers.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What did decade-scale comparisons of surviving recordings establish?",
        options: [
          "That recordings work as a census method matching direct counting",
          "That old tapes are useless",
          "That species richness is constant",
          "That counting is cheaper",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "have found losses of species richness in the sound layer that match what direct counting would show, establishing recordings as a census method" }],
          explanation:
            "The comparison validated recordings as measurement, not documentation. The item checks the epistemic upgrade the paragraph claims: losses in the sound layer matched direct counting.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "In what regulatory use does the passage say recordings have appeared?",
        options: [
          "As evidence, since a dated spectrogram-backed record of a protected species' voice is hard to dispute",
          "As decoration of courtrooms",
          "As background music",
          "As training data only",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 3, quote: "recordings have been used as evidence, since a dated, spectrogram-backed record of a protected species' voice is harder to dispute than a witness's recollection" }],
          explanation:
            "The legal use rests on the record's evidentiary durability. The item checks the use the paragraph's last sentences describe: a dated voice harder to dispute than memory.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final sentence — 'A field that began by listening to landscapes ends by testifying for them' — summarises",
        options: [
          "the movement from observation to legal standing",
          "the failure of the field",
          "a change of subject to law only",
          "the retirement of its researchers",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "A field that began by listening to landscapes ends by testifying for them" }],
          explanation:
            "The closing line compresses the passage's arc: description becomes evidence. The item checks the progression the aphorism encodes, from listening to testifying for landscapes.",
        },
      },
    ],
    vocabulary: [
      { word: "spectrogram", partOfSpeech: "noun", definition: "a picture of sound over time and frequency" },
      { word: "soundscape", partOfSpeech: "noun", definition: "the characteristic sound of a habitat" },
      { word: "chronic", partOfSpeech: "adjective", definition: "continuous, not one-off" },
      { word: "census", partOfSpeech: "noun", definition: "a systematic count" },
      { word: "restoration", partOfSpeech: "noun", definition: "returning a habitat toward health" },
      { word: "testifying", partOfSpeech: "verb", definition: "giving evidence formally" },
    ],
    grammar: [
      "The passage defines its key term with a colon and an appositive list ('The structure is conventionally described in three layers: …'), the standard form for introducing a technical model.",
      "The final sentence's parallel clauses ('began by listening… ends by testifying') frame the whole field's history in two verbs — compression by antithesis.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-26",
    title: "Living from herds that move",
    subject: "Anthropology",
    difficulty: 4,
    estimatedMinutes: 9,
    passage: {
      heading: "Living from herds that move",
      paragraphs: [
        "Pastoralism is a way of living from livestock that moves, and its logic is a response to a problem agriculture cannot solve in dry lands: in climates where rain falls in some places at some times, the edible growth is scattered and seasonal, and the only way to eat it is to carry the digestive system to the grass. Herding societies therefore convert inedible, scattered, ephemeral vegetation into food, fibre and transport through animals, and the whole society is arranged around the movement the ecology demands.",
        "The arrangement has a distinctive social geometry. Because herds must split and merge as pasture and water shift, the typical unit is a small household group that can move alone, within a larger structure of clans and allies that reassembles for defence, ceremony and exchange. Rights over pasture are rarely private in the cadastral sense; they are held by groups, exercised in rotation, and defended collectively, which is why maps drawn with fences misdescribe the system entirely: a pastoral territory is a schedule, not a shape.",
        "The relationship with neighbouring farmers is neither simple rivalry nor simple exchange, though it has been both in different times and places. Historically, the two economies have traded — grain for animals, manure for stubble grazing — and have raided each other, and the balance has depended on the strength of states: where central authority was weak, the frontier moved each season; where states fixed boundaries and taxed movement, the pastoral advantage eroded. Modern states, with cadastral maps, borders and land-titling, have generally been hard on mobile land use, and the societies that practise it have spent the last century being converted, voluntarily or otherwise, into fixed addresses.",
        "The scholarly reassessment now under way corrects an older narrative. Pastoralism was long described as a stage that societies pass through on the way to farming, or as wasteful and degrading; the ecological record, on the contrary, shows that in the dry lands where it is practised, mobility is the conservation strategy: resting pasture by moving away from it is what keeps it productive, and the degradation documented in some regions tracks the confinement of herds, not the movement of them. A way of life that was called primitive is being re-examined as a sophisticated adaptation to variability — one that modern range science, in several documented cases, has ended up rediscovering.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What ecological problem does the passage say pastoralism answers?",
        options: [
          "Edible growth is scattered and seasonal in dry lands, so animals must be carried to the grass",
          "There is no rain at all",
          "Land is too fertile",
          "Grass grows only in cities",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the edible growth is scattered and seasonal, and the only way to eat it is to carry the digestive system to the grass" }],
          explanation:
            "The passage's founding logic is that in patchy rainfall, harvesting must move. The item checks the reasoning the first paragraph gives.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the passage say about rights over pasture?",
        options: [
          "They are held by groups, exercised in rotation and defended collectively — a schedule, not a shape",
          "They are private and fenced",
          "They do not exist",
          "They are sold annually",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "Rights over pasture are rarely private in the cadastral sense; they are held by groups, exercised in rotation, and defended collectively" }],
          explanation:
            "The passage describes communal, rotating rights and adds the aphorism that a territory is a schedule. The item checks the property model the paragraph contrasts with cadastral maps.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What has the balance between herders and farmers depended on, historically?",
        options: [
          "The strength of states — moving frontiers where authority was weak, fixed boundaries where states imposed them",
          "The weather only",
          "Language",
          "Religion only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "the balance has depended on the strength of states: where central authority was weak, the frontier moved each season; where states fixed boundaries and taxed movement, the pastoral advantage eroded" }],
          explanation:
            "The passage ties the relationship to state capacity. The item checks the conditional structure the paragraph builds, because fixed borders and taxed movement eroded the mobile advantage.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Why does the passage say maps drawn with fences misdescribe the system?",
        options: [
          "Because a pastoral territory is a schedule, not a shape",
          "Because herders cannot read maps",
          "Because no land is used",
          "Because the maps are old",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 1, quote: "maps drawn with fences misdescribe the system entirely: a pastoral territory is a schedule, not a shape" }],
          explanation:
            "The aphorism rejects fixed geometry in favour of time-based rights. The item checks the metaphor the paragraph coins as a direct answer to the cadastral map.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What does the ecological record show about mobility, according to the passage?",
        options: [
          "Resting pasture by moving away is what keeps it productive; degradation tracks confinement, not movement",
          "Mobility always degrades land",
          "Movement and degradation are unrelated",
          "Only farming conserves land",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "resting pasture by moving away from it is what keeps it productive, and the degradation documented in some regions tracks the confinement of herds, not the movement of them" }],
          explanation:
            "The reassessment inverts the older blame: mobility is the conservation strategy. The item checks the inversion the final paragraph performs.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "What does the passage say modern range science has done, in several documented cases?",
        options: [
          "Ended up rediscovering what mobile practice already knew",
          "Confined herds more successfully",
          "Rejected ecology",
          "Nothing relevant",
        ],
        correct: 0,
        meta: {
          skills: ["details", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "one that modern range science, in several documented cases, has ended up rediscovering" }],
          explanation:
            "The closing clause concedes that science has arrived back at pastoral logic. The item checks the conciliatory ending the passage chooses.",
        },
      },
    ],
    vocabulary: [
      { word: "pastoralism", partOfSpeech: "noun", definition: "living from herds that move" },
      { word: "cadastral", partOfSpeech: "adjective", definition: "of mapped, parcelled land ownership" },
      { word: "clan", partOfSpeech: "noun", definition: "a kin group larger than a household" },
      { word: "manure", partOfSpeech: "noun", definition: "animal dung used as fertiliser" },
      { word: "confinement", partOfSpeech: "noun", definition: "keeping herds in one place" },
      { word: "variability", partOfSpeech: "noun", definition: "changeability of conditions" },
    ],
    grammar: [
      "The passage's first paragraph uses a colon to state its core logic — 'the only way to eat it is to carry the digestive system to the grass' — a deliberate, memorable formulation.",
      "The last paragraph's paired corrections ('was long described as… the ecological record, on the contrary, shows…') follow the revisionist pattern seen throughout this batch: stated error, then evidence-led reversal.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
