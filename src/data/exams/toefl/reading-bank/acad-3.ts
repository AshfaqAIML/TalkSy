/**
 * TOEFL Reading Practice Library — Read an Academic Passage, batch 3 (PROMPT 49).
 *
 * Seven standard exercises (difficulty 3): comparative biology, materials
 * archaeology, agronomy, ornithology, political science, climatology and
 * psychology — established knowledge only, with genuine uncertainty stated
 * as uncertainty.
 *
 * All passages are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const acad3Exercises: ToeflReadingExercise[] = [
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-13",
    title: "Sleep across species",
    subject: "Zoology",
    difficulty: 3,
    estimatedMinutes: 9,
    passage: {
      heading: "Sleep across species",
      paragraphs: [
        "Sleep, at its simplest, is a state in which the brain tunes out the world and the body stops moving, and it is found wherever nervous systems are found, in forms from the very simple to the profoundly complex. What varies across species is not whether sleep happens but how it is arranged: how much, when in the day, in what posture, and — in mammals and birds — whether it comes in one block or is distributed across the day.",
        "The amounts differ by startling margins. Bats sleep many hours a day; large grazing mammals sleep only a few, some of it standing, some lying. The variation tracks, roughly, the animal's ecology: species that must eat almost constantly, or that cannot safely lose attention for long, sleep in shorter and more fragmented instalments. Marine mammals add a further arrangement — in some, one half of the brain sleeps while the other remains awake, so that the animal can surface to breathe.",
        "The most discussed pattern in sleep research is the alternation within mammalian and avian sleep between states distinguishable by eye movement and by the electrical signature of the brain. One of these states, in which the brain's activity resembles waking while the body is paralysed, is the state associated with the dreams people remember, and it occupies a larger share of sleep early in life. Whether the function of that state is memory consolidation, development, rehearsal or something else remains genuinely open; the passage of decades has refined the question more than it has settled it.",
        "What no serious account now questions is that sleep is functional rather than incidental. Experiments that deprive animals of sleep produce measurable impairments, and the impairments are not merely of tired behaviour: the machinery of memory, of immune response and of the brain's housekeeping shows the loss. Sleep, on this record, is not the absence of activity but one of the body's activities, scheduled with the same seriousness as eating.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What does the passage say varies across species?",
        options: [
          "Whether sleep happens at all",
          "How much, when, in what posture, and whether in one block or distributed",
          "Only the posture",
          "The number of dreams",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "What varies across species is not whether sleep happens but how it is arranged" }],
          explanation:
            "The passage moves variation from existence to arrangement: amount, timing, posture and distribution. The item checks that the reader keeps the negative ('not whether') with the list that follows it.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What arrangement do some marine mammals use to breathe during sleep?",
        options: [
          "One half of the brain sleeps while the other remains awake",
          "They sleep floating upright",
          "They stop breathing for hours",
          "They sleep only on land",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "in some, one half of the brain sleeps while the other remains awake, so that the animal can surface to breathe" }],
          explanation:
            "The passage's example is hemispheric sleep: half the brain rests, half keeps the animal surfacing. The item checks the arrangement the sentence explains with its purpose clause.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage say about the state associated with remembered dreams?",
        options: [
          "Its function remains genuinely open — decades refined the question more than they settled it",
          "Its function is settled as memory consolidation",
          "It occurs only in adulthood",
          "It is absent in birds",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Whether the function of that state is memory consolidation, development, rehearsal or something else remains genuinely open" }],
          explanation:
            "The passage lists candidate functions and states that the decades refined rather than settled the question. The item checks that the reader keeps the openness the passage insists on.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What pattern does the passage say the variation in amounts roughly tracks?",
        options: [
          "The animal's ecology — constant feeders or animals that cannot lose attention sleep in shorter instalments",
          "Body size alone",
          "Lifespan",
          "Diet type only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "species that must eat almost constantly, or that cannot safely lose attention for long, sleep in shorter and more fragmented instalments" }],
          explanation:
            "The passage attributes shortened, fragmented sleep to ecological pressure. The item checks the explanation the paragraph offers for the startling margins it opens with.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What does the passage say about that dream-associated state early in life?",
        options: [
          "It occupies a larger share of sleep",
          "It disappears",
          "It is absent before birth",
          "It shortens with age only in birds",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "it occupies a larger share of sleep early in life" }],
          explanation:
            "One clause records the developmental fact: the state takes a larger share early in life. The item checks the reader's grip on a single-sentence finding inside a long third paragraph.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final paragraph concludes that sleep is",
        options: [
          "functional — one of the body's activities, scheduled as seriously as eating",
          "incidental downtime",
          "a habit that can be trained away",
          "unique to mammals and birds",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "Sleep, on this record, is not the absence of activity but one of the body's activities, scheduled with the same seriousness as eating" }],
          explanation:
            "The conclusion reframes sleep from absence to activity, backed by the deprivation experiments' measurable impairments. The item checks the reframe, which is the passage's exit line.",
        },
      },
    ],
    vocabulary: [
      { word: "fragmented", partOfSpeech: "adjective", definition: "broken into pieces" },
      { word: "instalments", partOfSpeech: "noun", definition: "separate portions of a total" },
      { word: "posture", partOfSpeech: "noun", definition: "the position in which an animal sleeps" },
      { word: "consolidation", partOfSpeech: "noun", definition: "the stabilising of memory over time" },
      { word: "impairment", partOfSpeech: "noun", definition: "a measurable loss of function" },
      { word: "housekeeping", partOfSpeech: "noun", definition: "the brain's maintenance work" },
    ],
    grammar: [
      "The passage's second paragraph opens its examples with a semicolon rather than a full stop, binding the two extreme cases (bats, grazers) into one comparative sentence.",
      "'Not merely of tired behaviour' uses 'not merely' to escalate: the clause that follows moves from behaviour to machinery, a standard academic deepening move.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-14",
    title: "Roman concrete",
    subject: "Materials archaeology",
    difficulty: 3,
    estimatedMinutes: 9,
    passage: {
      heading: "Roman concrete",
      paragraphs: [
        "The concrete used around the ancient Mediterranean was made from lime, volcanic ash and water, mixed with rock. Rome's particular recipe relied on a specific volcanic ash, available in quantity near the bay of Naples, and the resulting material built harbours, domes and walls that have survived two millennia of weather, earthquakes and, in the marine case, permanent immersion in salt water.",
        "The durability has long been a puzzle, and modern analysis has added two findings. First, the ash reacts with the lime over years and centuries to produce a family of compounds that bind the material unusually well; this chemistry differs from that of modern concrete, whose binder behaves differently and needs steel inside it for the tensile strength that Roman structures got from geometry — arches, vaults and domes that carry load in compression.",
        "Second, and more surprisingly, the marine structures appear to be strengthened by the sea rather than merely surviving it. Where seawater reaches the interior, it reacts with the ash compounds to grow crystals that fill the very cracks that time opens; analyses of harbour cores drilled from ancient piers show these crystals threading through the fabric. Modern concrete in the same environment tends to lose binder and corrode its reinforcing steel, and its service life, in the same conditions, is measured in decades rather than millennia.",
        "Whether the lesson can be transferred is an open engineering question. The Roman material sets slowly, which suits a harbour built over years and not a road opened in a week; it is also weaker per unit than reinforced modern concrete, which is why no one proposes rebuilding skylines from it. But the direction of the interest is clear: a material that heals its own cracks in the harshest common environment on earth is being studied less as an antique curiosity than as a research programme.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What were the ingredients of Roman concrete, as the passage lists them?",
        options: [
          "Lime, volcanic ash and water, mixed with rock",
          "Cement, sand and steel",
          "Clay and straw",
          "Bitumen and gravel",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "The concrete used around the ancient Mediterranean was made from lime, volcanic ash and water, mixed with rock" }],
          explanation:
            "The recipe is stated in the first sentence: lime, ash, water, aggregate. The item checks the baseline before the chemistry begins.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Where did Roman structures get the tensile strength that modern concrete needs steel for?",
        options: [
          "From geometry — arches, vaults and domes carrying load in compression",
          "From hidden iron bars",
          "From thicker walls only",
          "From the ash itself",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "needs steel inside it for the tensile strength that Roman structures got from geometry — arches, vaults and domes that carry load in compression" }],
          explanation:
            "The passage answers with shapes, not material: compression-carrying forms do the work that steel does today. The item checks that substitution, which the sentence sets up as a contrast.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What do the drilled harbour cores show?",
        options: [
          "Crystals grown from seawater reactions threading through the fabric and filling cracks",
          "That the piers were rebuilt in the middle ages",
          "That the ash was added later",
          "That the cores are modern",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "analyses of harbour cores drilled from ancient piers show these crystals threading through the fabric" }],
          explanation:
            "The cores are the physical evidence for the self-sealing claim. The item checks what the cores are evidence of, which the paragraph builds from the seawater reaction.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "In the same marine conditions, how does modern concrete behave, according to the passage?",
        options: [
          "It loses binder, corrodes its steel, and lasts decades rather than millennia",
          "It lasts longer than Roman concrete",
          "It self-heals faster",
          "It is unaffected by salt",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Modern concrete in the same environment tends to lose binder and corrode its reinforcing steel, and its service life, in the same conditions, is measured in decades rather than millennia" }],
          explanation:
            "The comparison is explicit: degradation by binder loss and steel corrosion, with a service life of decades. The item checks the contrast the paragraph draws to its last clause.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Why does the passage say no one proposes rebuilding skylines from the Roman material?",
        options: [
          "It sets slowly and is weaker per unit than reinforced modern concrete",
          "The ash is no longer available anywhere",
          "It cannot be cast",
          "It is too heavy to lift",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "it is also weaker per unit than reinforced modern concrete, which is why no one proposes rebuilding skylines from it" }],
          explanation:
            "Two limits are named: slow setting, which suits harbours not roads, and lower unit strength. The item checks the reasons the paragraph gives for its own realism.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The closing line says the material is being studied 'less as an antique curiosity than as a research programme'. This means the interest is now chiefly",
        options: [
          "scientific and forward-looking",
          "touristic",
          "art historical",
          "commercial only",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "less as an antique curiosity than as a research programme" }],
          explanation:
            "The comparative 'less as… than as' reclassifies the object of study: the material is a current research programme, not a relic. The item checks the direction of that reclassification.",
        },
      },
    ],
    vocabulary: [
      { word: "binder", partOfSpeech: "noun", definition: "the ingredient that holds a composite together" },
      { word: "tensile", partOfSpeech: "adjective", definition: "resisting being pulled apart" },
      { word: "compression", partOfSpeech: "noun", definition: "being squeezed, as in an arch" },
      { word: "immersion", partOfSpeech: "noun", definition: "being permanently submerged" },
      { word: "cores", partOfSpeech: "noun", definition: "cylinders drilled out for analysis" },
      { word: "curiosity", partOfSpeech: "noun", definition: "an object of idle interest" },
    ],
    grammar: [
      "The passage uses 'First… Second, and more surprisingly…' to enumerate findings while grading them by interest — the adverbial phrase does the ranking.",
      "The final paragraph's concessive structure ('Whether the lesson can be transferred is an open engineering question') subordinates a whole clause as subject, a hallmark of cautious academic prose.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-15",
    title: "The Green Revolution",
    subject: "Agronomy",
    difficulty: 3,
    estimatedMinutes: 9,
    passage: {
      heading: "The Green Revolution",
      paragraphs: [
        "In the middle of the twentieth century, agricultural researchers bred new varieties of wheat and rice that responded dramatically to fertiliser and controlled water. The plant behind the change was, above all, shorter: traditional tall cereals invested a large share of their growth in stalk, and when fed heavily and watered well they grew tall enough to fall over — a failure that dwarfing solved by redirecting the same resources into the grain. The new varieties, combined with irrigation and nutrients, raised yields per hectare in the adopting regions by multiples rather than percentages.",
        "The programme was deliberately international. Research stations crossed lines from different countries, and the resulting seeds travelled with training and credit; governments in the adopting regions built the irrigation and distribution the new varieties assumed. Where the package arrived whole, the results matched the forecasts: countries that had been importing grain in the tens of millions of tonnes began exporting it, and the famines that had been forecast for the 1970s did not, on the whole, occur.",
        "The costs took longer to appear, and the accounting is still argued. The new agriculture favoured large, level, well-watered farms and farmers who could afford the inputs, and where landownership was uneven the gains were uneven too. Water tables fell in regions where irrigation was pumped; the disappearance of older seed varieties narrowed the genetic base of the world's most important crops, a fact that gene banks now work to repair; and heavier chemical use changed the biology of fields and the water that left them.",
        "The balanced verdict is easier to state than to settle: without the yield transformation, feeding the doubled population of the later twentieth century would have required clearing a vastly larger area of land, and the counterfactual famines were real risks. With it came concentrations of dependence on inputs, on irrigation and on a narrow genetic base. The lesson most agronomists draw is not that the revolution should or should not have happened, but that the next one is being designed with its costs in the specification from the start.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What plant change was central, and what did it solve?",
        options: [
          "Dwarfing: shorter stalks stopped the heavily fed crop falling over, redirecting growth into grain",
          "Taller stalks for more sunlight",
          "Deeper roots only",
          "Leaf colour changes",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "they grew tall enough to fall over — a failure that dwarfing solved by redirecting the same resources into the grain" }],
          explanation:
            "The key trait was shortness: dwarf varieties did not lodge, and the same resources went to the grain. The item checks the mechanism the paragraph explains.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the passage say happened where the whole package arrived?",
        options: [
          "Importing regions became exporters, and the forecast famines did not occur",
          "Yields fell after a decade",
          "Only wheat responded",
          "Irrigation was unnecessary",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "countries that had been importing grain in the tens of millions of tonnes began exporting it, and the famines that had been forecast for the 1970s did not, on the whole, occur" }],
          explanation:
            "The outcomes named are the import-to-export shift and the famines that did not happen. The item checks both, including the honest 'on the whole'.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Which cost does the passage attribute to uneven landownership?",
        options: [
          "That the gains were uneven too",
          "That yields fell on small farms",
          "That the seeds failed on small farms",
          "That irrigation refused to work",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 2, quote: "where landownership was uneven the gains were uneven too" }],
          explanation:
            "The passage distributes the gains with the land: where ownership was uneven, so were the benefits. The item checks the social cost the paragraph specifies.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say gene banks now work to repair?",
        options: [
          "The narrowed genetic base of the major crops",
          "The falling water tables",
          "The lost exports",
          "The price of fertiliser",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "the disappearance of older seed varieties narrowed the genetic base of the world's most important crops, a fact that gene banks now work to repair" }],
          explanation:
            "The listed cost paired with gene banks is genetic narrowing. The item checks which of the paragraph's several costs the gene banks address.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What counterfactual does the final paragraph weigh?",
        options: [
          "Feeding the doubled population would have required clearing vastly more land",
          "Population would have fallen",
          "Famines would have increased exports",
          "Yields would have doubled anyway",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "feeding the doubled population of the later twentieth century would have required clearing a vastly larger area of land" }],
          explanation:
            "The verdict's first scale is land: without the yield gains, feeding the doubled population would have demanded much more acreage. The item checks the counterfactual the passage actually uses.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "What lesson does the passage say most agronomists draw?",
        options: [
          "That the revolution should not have happened",
          "That the next one is designed with its costs in the specification from the start",
          "That yields no longer matter",
          "That genetics is finished",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "the next one is being designed with its costs in the specification from the start" }],
          explanation:
            "The drawn lesson is procedural, not verdictive: the next revolution builds its costs into the requirements. The item checks the forward-looking conclusion, which the paragraph frames as 'easier to state than to settle'.",
        },
      },
    ],
    vocabulary: [
      { word: "dwarfing", partOfSpeech: "noun", definition: "breeding for much shorter stalks" },
      { word: "multiples", partOfSpeech: "noun", definition: "several times over, not mere percentages" },
      { word: "irrigation", partOfSpeech: "noun", definition: "supplying water to fields artificially" },
      { word: "inputs", partOfSpeech: "noun", definition: "fertiliser, seed, water and chemicals bought in" },
      { word: "genetic base", partOfSpeech: "noun", definition: "the variety of genes available to a crop" },
      { word: "counterfactual", partOfSpeech: "noun", definition: "a comparison with what did not happen" },
    ],
    grammar: [
      "The passage marks concessions with 'and the accounting is still argued' — a clause that withholds settlement while listing the costs honestly.",
      "The final sentence's 'not that… but that' structure converts a verdict question into a design principle, the passage's closing rhetorical move.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-16",
    title: "Bird migration",
    subject: "Ornithology",
    difficulty: 3,
    estimatedMinutes: 9,
    passage: {
      heading: "Bird migration",
      paragraphs: [
        "Every year, birds weighing a few grams cross deserts, seas and mountain ranges on journeys measured in thousands of kilometres, and they do so on schedules that return them to the same breeding site within days of the same date. The scale is familiar; the mechanisms have been worked out only in the last few decades, and the finding that organises them all is inheritance: the itinerary is largely written before the bird flies, in genes, and refined afterward by experience.",
        "The guidance systems run in layers. The simplest is innate direction: a young bird on its first migration flies in an inherited compass direction for an inherited length of time. The sun provides one compass, compensated for its movement across the sky by an internal clock; the stars provide another, learned in the nest from the rotation pattern of the night sky; and the earth's magnetic field provides a third, whose receptors are still being identified. Layered on top comes true navigation: the capacity, once a bird has been somewhere, to return there from an unfamiliar release point, which implies a map sense whose substrate remains one of the field's open problems.",
        "The journeys are timed and fuelled like planned expeditions. Before departure, migrants undergo hyperphagia — eating far beyond normal — and deposit fat at rates that can double their mass; the fat is the fuel, and departures are timed to weather systems, particularly for sea crossings, where birds wait for following winds. Ringing and, latterly, tracking devices have replaced inference with observation: individual birds are now followed across their whole routes, and the tracks show both the inherited program and the corrections that experience adds to it.",
        "The conservation consequence follows directly. A migrant depends on a chain of sites — breeding ground, staging wetlands, wintering range — and the loss of any link breaks the chain. Species whose staging areas have been drained or built over have declined accordingly, and the international treaties that protect migrants exist precisely because no single country's protection can cover a bird that spends its year in several.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What finding does the passage say organises all the mechanisms?",
        options: [
          "That the itinerary is largely inherited — written in genes before the first flight",
          "That birds learn everything from parents",
          "That migration is purely opportunistic",
          "That only adults navigate",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "the finding that organises them all is inheritance: the itinerary is largely written before the bird flies, in genes, and refined afterward by experience" }],
          explanation:
            "The organising finding is the inherited program refined by experience. The item checks the sentence the paragraph builds toward, and it is what separates a first-time migrant's route from its parents' routes.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the passage say a young bird does on its first migration?",
        options: [
          "Flies an inherited compass direction for an inherited length of time",
          "Follows its parents throughout",
          "Waits for a guide",
          "Flies at random until it finds land",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "a young bird on its first migration flies in an inherited compass direction for an inherited length of time" }],
          explanation:
            "The first journey runs on the innate program: direction and duration both inherited. The item checks the description of the simplest layer.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "How do birds compensate for the sun's movement across the sky?",
        options: [
          "With an internal clock",
          "By flying only at noon",
          "By following other birds",
          "They cannot compensate",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "The sun provides one compass, compensated for its movement across the sky by an internal clock" }],
          explanation:
            "The solar compass works because an internal clock adjusts for the sun's apparent motion. The item checks the mechanism named in the same clause.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What is hyperphagia, as the passage describes it?",
        options: [
          "Eating far beyond normal before departure, depositing fat that can double mass",
          "A disease of migrants",
          "Flying in flocks",
          "Sleeping during migration",
        ],
        correct: 0,
        meta: {
          skills: ["vocabulary", "details"],
          evidence: [{ block: 0, paragraph: 2, quote: "migrants undergo hyperphagia — eating far beyond normal — and deposit fat at rates that can double their mass" }],
          explanation:
            "The passage glosses the term with dashes: over-eating to build flight fuel. The item checks that the reader took the gloss at first use.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What have tracking devices replaced, according to the passage?",
        options: [
          "Inference with observation — following individuals across whole routes",
          "Ringing entirely",
          "The need for conservation",
          "Genetic studies",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "Ringing and, latterly, tracking devices have replaced inference with observation: individual birds are now followed across their whole routes" }],
          explanation:
            "The change is epistemic: whole-route observation of individuals instead of deduction from recovered rings. The item checks what the technology changed.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "Why do international treaties protect migrants, in the passage's logic?",
        options: [
          "Because no single country's protection can cover a bird using several countries yearly",
          "Because migrants are worth money",
          "Because treaties are traditional",
          "Because only breeding grounds matter",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "the international treaties that protect migrants exist precisely because no single country's protection can cover a bird that spends its year in several" }],
          explanation:
            "The chain logic forces multi-state protection: each link lies in a different jurisdiction. The item checks the reason the final paragraph deduces.",
        },
      },
    ],
    vocabulary: [
      { word: "itinerary", partOfSpeech: "noun", definition: "the route and schedule of a journey" },
      { word: "compass", partOfSpeech: "noun", definition: "a system giving direction" },
      { word: "staging", partOfSpeech: "noun", definition: "used by resting and refuelling birds en route" },
      { word: "hyperphagia", partOfSpeech: "noun", definition: "eating far beyond normal need" },
      { word: "ringing", partOfSpeech: "noun", definition: "fitting marked bands to identify birds" },
      { word: "wetland", partOfSpeech: "noun", definition: "marsh habitat used for staging" },
    ],
    grammar: [
      "The passage lists compass mechanisms in parallel clauses — 'The sun provides one compass…; the stars provide another…; and the earth's magnetic field provides a third' — semicolons pacing the inventory.",
      "The final paragraph opens with 'The conservation consequence follows directly', a formula that signals derivation from what came before.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-17",
    title: "The mathematics of voting",
    subject: "Political science",
    difficulty: 3,
    estimatedMinutes: 9,
    passage: {
      heading: "The mathematics of voting",
      paragraphs: [
        "A voting system is a rule for converting a set of individual rankings into a collective decision, and it turns out that such rules have properties that can be proved, in the way that properties of machines can. Two criteria are almost universally agreed. If every voter prefers one option to another, the collective result should rank it higher; and if the preferences of every individual are complete and ordered — each voter can compare every pair — then the collective result should be too.",
        "The surprising result, established in the middle of the last century, is that for three or more options no rank-order rule can satisfy a further, innocent-looking set of demands simultaneously. The proof works by example: construct a distribution of voters in which collective preferences form a cycle — option A is collectively preferred to B, B to C, and C to A — so that 'the collective preference' does not exist as a consistent ordering at all, and any rule that must output one will do so only by arbitrariness somewhere in the procedure.",
        "The practical consequence is that different reasonable systems, given identical voters, elect different winners. Majority between pairs, ranking by positions, sequential elimination, points awarded across ranks: each is used somewhere in the world, each has defensible properties, and each fails somewhere the others succeed. Political scientists therefore treat the choice of a system not as finding the correct one but as choosing which imperfection to accept — the version of the arithmetic that best fits the kind of decision being taken.",
        "None of this is a counsel of despair. Systems are regularly chosen and used, and the analysis tells the chooser what to expect. A body that knows its rule rewards broad second-choice support will nominate differently than one that knows its rule rewards intense first-choice support; a voter who understands the rule can rank sincerely or tactically with an informed view of the consequences. The mathematics does not remove judgement. It prices it.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is a voting system, in the passage's definition?",
        options: [
          "A rule converting individual rankings into a collective decision, with provable properties",
          "A ceremony",
          "A count of hands only",
          "A constitutional court",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "A voting system is a rule for converting a set of individual rankings into a collective decision" }],
          explanation:
            "The passage defines the object functionally, then treats it like a machine with provable properties. The item checks the definition the first sentence supplies.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "How does the proof of the central result work, as the passage describes it?",
        options: [
          "By example: voter distributions where collective preferences form a cycle, so no consistent ordering exists",
          "By surveying real elections",
          "By appeal to authority",
          "By computer simulation only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "The proof works by example: construct a distribution of voters in which collective preferences form a cycle" }],
          explanation:
            "The impossibility is demonstrated by constructing cyclic profiles where the collective preference does not exist. The item checks the method the paragraph names.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What practical consequence does the third paragraph draw?",
        options: [
          "Different reasonable systems elect different winners from identical voters",
          "All systems elect the same winner",
          "Voting should be abolished",
          "Only one system is legal",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 2, quote: "different reasonable systems, given identical voters, elect different winners" }],
          explanation:
            "The consequence is divergence: identical inputs, different outputs under different fair rules. The item checks the sentence the paragraph opens with.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "How does the passage say political scientists treat the choice of a system?",
        options: [
          "As choosing which imperfection to accept, fitting the decision being taken",
          "As finding the correct system",
          "As a matter of tradition only",
          "As a lottery",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "not as finding the correct one but as choosing which imperfection to accept" }],
          explanation:
            "The reframe is from correctness to trade-offs. The item checks the 'not as… but as' construction that carries the paragraph's conclusion.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What does the passage say a voter who understands the rule can do?",
        options: [
          "Rank sincerely or tactically with an informed view of consequences",
          "Vote twice safely",
          "Ignore the system",
          "Change the rule personally",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 3, quote: "a voter who understands the rule can rank sincerely or tactically with an informed view of the consequences" }],
          explanation:
            "The informed voter chooses between sincere and tactical ranking knowingly. The item checks the clause the final paragraph attaches to its example.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The closing statement 'The mathematics does not remove judgement. It prices it.' means that the analysis",
        options: [
          "quantifies the consequences of each choice rather than deciding for you",
          "forbids judgement",
          "settles every dispute",
          "makes voting unnecessary",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "The mathematics does not remove judgement. It prices it." }],
          explanation:
            "'Prices' is the operative verb: the theory makes the costs of each rule visible so judgement can be exercised knowingly. The item checks the metaphor's meaning.",
        },
      },
    ],
    vocabulary: [
      { word: "ranking", partOfSpeech: "noun", definition: "an ordered list of preferences" },
      { word: "ranking", partOfSpeech: "noun", definition: "an ordered list of preferences, one per voter" },
      { word: "cycle", partOfSpeech: "noun", definition: "A beats B, B beats C, C beats A" },
      { word: "sequential", partOfSpeech: "adjective", definition: "one after another in stages" },
      { word: "tactical", partOfSpeech: "adjective", definition: "chosen for effect, not preference alone" },
      { word: "arbitrariness", partOfSpeech: "noun", definition: "deciding without a reason" },
    ],
    grammar: [
      "The passage defines by apposition — 'a voting system is a rule for converting…' — putting the definition in the predicate before any example.",
      "The last paragraph's two short final sentences ('The mathematics does not remove judgement. It prices it.') use ellipsis of the object: the second sentence inherits 'judgement' from the first, a device for aphoristic endings.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-18",
    title: "Volcanic winters",
    subject: "Climatology",
    difficulty: 3,
    estimatedMinutes: 9,
    passage: {
      heading: "Volcanic winters",
      paragraphs: [
        "A large explosive eruption does its climatic work from above, not below: it is not the lava that cools the world but the fine ash and sulphur gases lofted into the stratosphere, where the ash falls out within weeks while the sulphur, converted to droplets of sulphuric acid, remains for years. Those droplets scatter a fraction of the incoming sunlight back to space, and the fraction, spread over the whole globe, is enough to lower average surface temperatures for a year or two after the event.",
        "The historical record links several of these episodes to documented hardship. The summer after the great 1815 eruption in Indonesia was abnormal across the northern hemisphere — frosts in summer in temperate latitudes, failed harvests, and a year without the usual warmth that was named, in New England, 'the year without a summer'. Contemporary accounts and later measurements agree on the pattern: a cooler season lasting a year or more, then recovery, with the size of the effect tracking the mass of sulphur injected rather than the volume of lava or the height of the plume.",
        "The mechanism has two useful properties for science. It is global, so records on different continents can be compared against the same event; and it is dated, because the sulphur layer settles into annual layers in ice sheets, where drilling recovers it as a band of acid snow whose position counts the years. Tree rings add a second, independent archive: narrow rings in the years after an eruption appear in trees far from any volcano, and the two records — ice and wood — can be checked against each other.",
        "The same physics that cools the planet after an eruption has been discussed as a deliberate intervention: scattering sunlight to offset warming. The proposal is serious in the sense that the mechanism works, and it inherits every difficulty the natural record displays — uneven effects by region and season, no reduction of the underlying cause, and an arrangement that, once begun, must be maintained, since the masking ends when the maintenance does.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What actually cools the world after a large eruption, according to the passage?",
        options: [
          "Sulphur droplets in the stratosphere scattering sunlight, not the lava",
          "The lava fields",
          "Ash falling on fields",
          "Reduced sunlight from smoke",
        ],
        correct: 0,
        meta: {
          skills: ["details", "main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "it is not the lava that cools the world but the fine ash and sulphur gases lofted into the stratosphere" }],
          explanation:
            "The passage separates the visible eruption from its climatic agent: stratospheric sulphur acid droplets persisting for years. The item checks the opening distinction.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What was named 'the year without a summer'?",
        options: [
          "The season after the 1815 Indonesian eruption, in New England",
          "A drought year in Asia",
          "A winter in Iceland",
          "A season in Rome",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "a year without the usual warmth that was named, in New England, 'the year without a summer'" }],
          explanation:
            "The 1815 eruption's aftermath was named in New England. The item checks the anchor the paragraph uses for its documented hardship.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage say the size of the climatic effect tracks?",
        options: [
          "The mass of sulphur injected, not lava volume or plume height",
          "The number of casualties",
          "The distance from the volcano",
          "The depth of the crater",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "with the size of the effect tracking the mass of sulphur injected rather than the volume of lava or the height of the plume" }],
          explanation:
            "The dose metric is sulphur mass, an inference later confirmed by ice-core band analysis. The item checks which measurement the record supports.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Why are eruptions scientifically useful, in the passage's words?",
        options: [
          "The events are global and dated, so archives on different continents can be compared",
          "They are predictable",
          "They repeat every year",
          "They affect only one region",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 2, quote: "It is global, so records on different continents can be compared against the same event; and it is dated" }],
          explanation:
            "The two properties — global and dated — make eruptions calibration events for ice and tree-ring archives. The item checks the pair the paragraph opens with.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What second, independent archive does the passage say tree rings provide?",
        options: [
          "Narrow rings far from any volcano in the years after an eruption",
          "Ash layers in bark",
          "Annual flowering dates",
          "Records of rainfall only",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "narrow rings in the years after an eruption appear in trees far from any volcano, and the two records — ice and wood — can be checked against each other" }],
          explanation:
            "Distant narrow rings are the second archive, cross-checkable against the ice record. The item checks the independent line of evidence the paragraph adds.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "Which inherited difficulties does the passage list for deliberate sunlight scattering?",
        options: [
          "Uneven effects by region and season, no reduction of the cause, and maintenance that must continue",
          "Cost alone",
          "Legal barriers only",
          "Public opinion",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "uneven effects by region and season, no reduction of the underlying cause, and an arrangement that, once begun, must be maintained" }],
          explanation:
            "The three named difficulties are distributional, causal and operational. The item checks the list the closing paragraph inherits from the natural record.",
        },
      },
    ],
    vocabulary: [
      { word: "stratosphere", partOfSpeech: "noun", definition: "the stable upper atmosphere above weather" },
      { word: "plume", partOfSpeech: "noun", definition: "the eruption column" },
      { word: "band", partOfSpeech: "noun", definition: "a visible layer in ice or rock" },
      { word: "archive", partOfSpeech: "noun", definition: "a long-term record that can be read later" },
      { word: "intervention", partOfSpeech: "noun", definition: "a deliberate act on a system" },
      { word: "masking", partOfSpeech: "noun", definition: "covering a symptom without changing its cause" },
    ],
    grammar: [
      "The passage's first paragraph uses a colon to correct an expected cause: 'its climatic work from above, not below' — the paired prepositions carry the whole point.",
      "The final paragraph's list after the dash gives three parallel nominal phrases, a compact way of packing objections without verbs.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-19",
    title: "Stress and performance",
    subject: "Psychology",
    difficulty: 3,
    estimatedMinutes: 9,
    passage: {
      heading: "Stress and performance",
      paragraphs: [
        "The relationship between pressure and performance is not a straight line. At very low pressure, people under-perform because nothing demands attention; at moderate pressure, performance peaks; beyond a certain point, further pressure degrades it. The classic description of this curve is taught under the name of the researchers who first formalised it, and whatever the disputes about its exact shape, the central observation survives every refinement: there is an optimum, and it is not at zero and not at maximum.",
        "The mechanisms behind the falling half of the curve have been studied with tools from physiology and from cognitive science. Pressure raises arousal, and raised arousal narrows attention — useful for a well-practised, single-track task, harmful for one that requires holding several possibilities in mind. The body's response also consumes capacity: monitoring for threat, suppressing the impulse to withdraw, and regulating emotion all draw on the same limited resources the task itself needs.",
        "One of the most productive findings concerns practice. A skill that has been practised until it runs largely without deliberate control is far more resistant to pressure than one that still requires step-by-step thought; the automatic pathway has less to lose when working memory shrinks. This explains a pattern familiar from public performance: the same person who performs flawlessly in rehearsal falters when observed, because observation shifts control from the practised system to the deliberate one at the worst possible moment.",
        "The applied lessons follow from the mechanisms rather than from slogans. Training under mild, increasing pressure, so that the practised system is the one stress-tested; designing tasks so that critical steps are practised to automaticity; and structuring the environment so that the sources of pressure are visible and predictable — these translate the curve into practice. The naive remedies — trying to feel calm, or avoiding all pressure — either do not touch the mechanism or, by removing all demand, slide back down the left side of the curve.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the central observation the passage says survives every refinement?",
        options: [
          "That there is an optimum pressure that is neither zero nor maximum",
          "That more pressure always improves performance",
          "That pressure has no effect",
          "That performance is constant",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "there is an optimum, and it is not at zero and not at maximum" }],
          explanation:
            "The inverted-U finding is the passage's foundation: performance peaks at moderate pressure. The item checks the sentence the first paragraph builds to.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why does raised arousal hurt some tasks, according to paragraph 2?",
        options: [
          "It narrows attention, which helps single-track tasks but harms those needing several possibilities in mind",
          "It slows the heart",
          "It improves memory for everything",
          "It has no cognitive effect",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "raised arousal narrows attention — useful for a well-practised, single-track task, harmful for one that requires holding several possibilities in mind" }],
          explanation:
            "The narrowing cuts both ways by task type. The item checks the differential effect the paragraph states across the dash.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage say about well-practised skills under pressure?",
        options: [
          "They are far more resistant, because the automatic pathway has less to lose when working memory shrinks",
          "They collapse first",
          "They are unaffected by practice",
          "They need more deliberate control",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "a skill that has been practised until it runs largely without deliberate control is far more resistant to pressure" }],
          explanation:
            "Automaticity protects performance because the practised system needs less working memory. The item checks the protective mechanism the paragraph explains.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What pattern from public performance does the passage use as its example?",
        options: [
          "Flawless in rehearsal, faltering when observed, because observation shifts control to the deliberate system",
          "Better when watched",
          "Rehearsal is always worse",
          "Observation improves memory",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "observation shifts control from the practised system to the deliberate one at the worst possible moment" }],
          explanation:
            "Being watched pulls the task back into deliberate control, which pressure then starves. The item checks the explanation of the familiar failure.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Which applied lesson does the passage endorse?",
        options: [
          "Training under mild, increasing pressure so the practised system is stress-tested",
          "Avoiding all pressure",
          "Trying to feel calm during performance",
          "Reducing practice to lower stakes",
        ],
        correct: 0,
        lure: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "Training under mild, increasing pressure, so that the practised system is the one stress-tested" }],
          explanation:
            "The endorsed lesson is graded exposure in training. The lure is one of the naive remedies the paragraph explicitly rejects, along with trying to feel calm and removing all demand.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "What does the passage say happens if all pressure is removed?",
        options: [
          "Performance slides back down the left side of the curve",
          "Performance peaks",
          "Nothing changes",
          "Skills become automatic",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "by removing all demand, slide back down the left side of the curve" }],
          explanation:
            "No demand returns the performer to the under-stimulated left side. The item checks the closing sentence's use of the curve the passage opened with.",
        },
      },
    ],
    vocabulary: [
      { word: "arousal", partOfSpeech: "noun", definition: "physiological activation and alertness" },
      { word: "automaticity", partOfSpeech: "noun", definition: "the quality of running without deliberate control" },
      { word: "working memory", partOfSpeech: "noun", definition: "the capacity holding items in mind at once" },
      { word: "rehearsal", partOfSpeech: "noun", definition: "a practice run before performance" },
      { word: "stress-tested", partOfSpeech: "adjective", definition: "tried under the conditions it must survive" },
      { word: "slogan", partOfSpeech: "noun", definition: "a memorable phrase standing in for analysis" },
    ],
    grammar: [
      "The passage marks the pivot finding with 'One of the most productive findings concerns practice' — a topic sentence announcing the paragraph's function.",
      "The final paragraph lists applied lessons as three parallel gerund phrases before the dash, then sets them against the 'naive remedies' — contrast by coordination.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
