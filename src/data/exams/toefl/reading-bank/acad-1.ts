/**
 * TOEFL Reading Practice Library — Read an Academic Passage, batch 1 (PROMPT 49).
 *
 * Five foundation exercises (difficulty 1): clear academic prose across
 * the disciplines, 4–5 paragraphs, 300–430 words, 5 multiple-choice items
 * each — main idea, supporting details, vocabulary in context, inference
 * and text structure. Every item carries verbatim passage evidence and a
 * 25+ word teaching explanation.
 *
 * All passages are original TalkSy practice material written at textbook
 * level; established knowledge only, no invented findings.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const acad1Exercises: ToeflReadingExercise[] = [
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-01",
    title: "The water cycle in cities",
    subject: "Geography",
    difficulty: 1,
    estimatedMinutes: 8,
    passage: {
      heading: "The water cycle in cities",
      paragraphs: [
        "In the countryside, rain has somewhere to go. It soaks into soil, runs slowly across fields, feeds streams, and returns to the atmosphere through the breath of plants. In a city, the same rain meets something else entirely: roofs, roads and car parks that refuse to absorb anything. Within minutes of a heavy shower, water that would have spent hours crossing a field is racing down gutters, and the stream it joins has suddenly been asked to carry a storm.",
        "Engineers call the problem 'run-off'. Before a city is built, perhaps a tenth of the rain in a storm flows over the surface; in a densely built district, most of it does. The rest of the natural system is disrupted in the same stroke: less water sinks into the ground to refill the supplies beneath, so wells and city sources slowly weaken, while the combined pressure of the sudden flow pushes ageing pipes past what they were designed for.",
        "Cities have therefore begun to copy the field rather than fight it. Flat roofs are planted with vegetation so that they hold rain and release it slowly. Borders and car parks are laid with porous surfaces that let water through. Where space allows, low ground is shaped into basins that fill during a storm and empty over a day or two. None of these measures is dramatic on its own; together they return to the city something the city took away, which is time.",
        "The deeper change is in how the problem is described. For most of the twentieth century, the task was to move water away as fast as possible, and bigger pipes were the answer to every complaint about a flooded street or a surging stream. That approach has a limit, and cities that reach it discover that the cheapest place to store a storm is not underground but everywhere at the surface — in the places water used to go before the city arrived.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the main idea of the passage?",
        options: [
          "Cities should build bigger pipes to handle storms",
          "Cities have disrupted the natural handling of rain, and are now restoring it with surfaces that slow water down",
          "Rural areas suffer more from flooding than cities",
          "Plants are the main cause of water shortages in cities",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas"],
          evidence: [{ block: 0, paragraph: 3, quote: "the cheapest place to store a storm is not underground but everywhere at the surface" }],
          explanation:
            "The passage moves from the problem (sealed surfaces speed water up) to the response (vegetated roofs, porous surfaces, basins that buy time), and its conclusion redefines where a storm should be stored. The other options either contradict the conclusion or belong to the discarded older approach.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "According to paragraph 2, what fraction of rain flows over the surface in a densely built district?",
        options: [
          "About a tenth",
          "About half",
          "Most of it",
          "Almost none",
        ],
        correct: 2,
        lure: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "Before a city is built, perhaps a tenth of the rain in a storm flows over the surface; in a densely built district, most of it does" }],
          explanation:
            "The paragraph contrasts the two figures directly: a tenth before building, most of it after. The lure quotes the countryside figure, which is exactly the number the sentence moves away from.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "The phrase 'the breath of plants' refers to the process by which water",
        options: [
          "freezes overnight",
          "is released by plants as vapour",
          "is absorbed by roots",
          "runs off leaves into streams",
        ],
        correct: 1,
        meta: {
          skills: ["vocabulary", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "feeds streams, and returns to the atmosphere through the breath of plants" }],
          explanation:
            "The 'breath' is the metaphor for transpiration: water passing from the plant to the air. The item asks the reader to translate a literary phrase back into the scientific process it stands for.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say the measures in paragraph 3 accomplish together?",
        options: [
          "They eliminate flooding entirely",
          "They return to the city the time the sealed surfaces took away",
          "They refill underground supplies within hours",
          "They replace the need for streams",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "main-ideas"],
          evidence: [{ block: 0, paragraph: 2, quote: "together they return to the city something the city took away, which is time" }],
          explanation:
            "The paragraph's closing sentence names what the collection of measures buys: time. The claim is deliberately modest — nothing is eliminated, but the water is slowed, which is what the first paragraph showed the city had lost.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Which statement best describes the organisation of the passage?",
        options: [
          "Problem, consequences, responses, and a shift in how the problem is framed",
          "A chronological history of pipe-building",
          "A list of cities ranked by rainfall",
          "An argument between engineers and farmers",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "In a city, the same rain meets something else entirely" }, { block: 0, paragraph: 3, quote: "That approach has a limit" }],
          explanation:
            "The passage states the problem, widens it to consequences, presents the surface-level responses, and closes by reframing the goal itself. Following that arc — rather than any of the content it does not contain — is what the item tests.",
        },
      },
    ],
    vocabulary: [
      { word: "run-off", partOfSpeech: "noun", definition: "water that flows over the surface instead of sinking in" },
      { word: "porous", partOfSpeech: "adjective", definition: "full of holes that let water pass through" },
      { word: "basin", partOfSpeech: "noun", definition: "a low area shaped to hold water" },
      { word: "soak", partOfSpeech: "verb", definition: "to sink into — here, into soil, as rain does in the countryside" },
      { word: "gutter", partOfSpeech: "noun", definition: "the channel that carries street water" },
      { word: "disrupted", partOfSpeech: "verb (past)", definition: "interrupted the normal working of" },
    ],
    grammar: [
      "The opening paragraph sets rural and urban sentences side by side with the same subject 'it' and different predicates — the contrast is carried by the verbs 'soaks' versus 'racing', not by any linking word.",
      "Paragraph 4 uses 'that approach has a limit' with the present tense: a general truth, not a dated event, which is the standard register for concluding claims.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-02",
    title: "Why leaves change colour",
    subject: "Botany",
    difficulty: 1,
    estimatedMinutes: 8,
    passage: {
      heading: "Why leaves change colour",
      paragraphs: [
        "A green leaf is green because it is full of chlorophyll, the molecule that turns sunlight into food. Chlorophyll is so abundant and so good at absorbing red and blue light that the leaf reflects the remaining green to our eyes. As long as the days are long and warm, the leaf keeps making chlorophyll and stays green, and the tree keeps growing on what the leaf supplies.",
        "Autumn begins inside the leaf before it becomes visible outside. As nights lengthen, the leaf stops producing chlorophyll, and the existing supply breaks down. The green disappears, and other pigments that were present all along are suddenly unmasked: yellows and oranges that were simply drowned out all summer. Nothing new is added for these colours; they were waiting.",
        "The reds are different, and less fully understood. In many species, red comes from pigments that the leaf actively manufactures in autumn, which has puzzled researchers, because building a pigment at the moment of shutdown looks like spending money on a closing shop. One leading suggestion is that the red acts as a warning or a signal — to insects looking for a place to lay eggs, or as a form of protection for the leaf's own chemistry while it recovers what it can.",
        "Meanwhile the leaf is not merely dying; it is being dismantled on purpose. The tree withdraws valuable substances — nitrogen and others — and stores them in the wood for spring. Only when this salvage is complete does the connection between leaf and branch weaken, and the leaf falls, and the ground beneath receives what the tree chose to leave behind, where it will feed the soil the next spring depends on. The colour show, in other words, is the visible part of an orderly retreat, and the fallen leaf is the part the tree could afford to lose.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why does a leaf look green, according to paragraph 1?",
        options: [
          "Because chlorophyll reflects green light",
          "Because green pigment is added in spring",
          "Because the leaf absorbs green light",
          "Because sunlight is mostly green",
        ],
        correct: 0,
        meta: {
          skills: ["details", "vocabulary"],
          evidence: [{ block: 0, paragraph: 0, quote: "so good at absorbing red and blue light that the leaf reflects the remaining green to our eyes" }],
          explanation:
            "Chlorophyll absorbs the red and blue parts of daylight; the leftover green is what is reflected, and that reflection is the colour we see. The item checks the causal chain in one sentence of the first paragraph.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What does the passage say about the yellow and orange pigments?",
        options: [
          "They are produced only in autumn",
          "They were present all summer but hidden by chlorophyll",
          "They arrive from the soil in autumn",
          "They are waste products the leaf exports",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "other pigments that were present all along are suddenly unmasked" }],
          explanation:
            "The yellows and oranges are unmasked, not manufactured: the chlorophyll that drowned them out breaks down, and what was waiting all summer becomes visible. The passage's word 'unmasked' carries the whole claim.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "The phrase 'spending money on a closing shop' is used to explain why red pigments seem",
        options: [
          "cheap for the tree",
          "puzzling, because building something at shutdown appears wasteful",
          "necessary for photosynthesis",
          "attractive to insects",
        ],
        correct: 1,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 2, quote: "building a pigment at the moment of shutdown looks like spending money on a closing shop" }],
          explanation:
            "The metaphor makes the theoretical problem vivid: manufacturing something when the operation is closing looks like a waste. The passage then offers candidate explanations, but the phrase itself exists to state the puzzle.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Which of the given suggestions does the passage offer for the red colour?",
        options: [
          "It is a signal to insects or protection for the leaf's chemistry",
          "It is a form of food storage",
          "It is a response to frost only",
          "It is an accident with no function",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "the red acts as a warning or a signal — to insects looking for a place to lay eggs, or as a form of protection for the leaf's own chemistry" }],
          explanation:
            "The passage offers two candidate roles, plainly labelled as suggestions: warning to egg-laying insects, or protection of the salvage chemistry. It claims neither as settled, which the item's wording preserves.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What happens before the leaf finally falls?",
        options: [
          "The tree withdraws valuable substances into the wood for spring",
          "The leaf produces a new supply of chlorophyll",
          "The branch pushes the leaf away",
          "The pigments are exported to the roots",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "The tree withdraws valuable substances — nitrogen and others — and stores them in the wood for spring. Only when this salvage is complete" }],
          explanation:
            "Falling is the last step of a planned salvage: the tree removes what it can reuse, and only then does the joint weaken. The passage's image of the orderly retreat depends on this sequence.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final sentence calls the colour show 'the visible part of an orderly retreat'. This supports the idea that",
        options: [
          "autumn colour is a symptom of a controlled process, not merely death",
          "trees fight winter actively",
          "leaves die at random",
          "colour predicts the weather",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "The colour show, in other words, is the visible part of an orderly retreat" }],
          explanation:
            "The closing image reframes the whole passage: what looks like a spectacle of dying is the outward sign of a managed withdrawal. The item asks the reader to take the metaphor seriously as the passage's thesis.",
        },
      },
    ],
    vocabulary: [
      { word: "chlorophyll", partOfSpeech: "noun", definition: "the green molecule that captures light for photosynthesis" },
      { word: "pigment", partOfSpeech: "noun", definition: "a substance that gives colour" },
      { word: "unmasked", partOfSpeech: "verb (past)", definition: "revealed after being hidden" },
      { word: "nitrogen", partOfSpeech: "noun", definition: "a nutrient element the leaf stores" },
      { word: "salvage", partOfSpeech: "noun", definition: "recovering what can be reused" },
      { word: "dismantled", partOfSpeech: "verb (past)", definition: "taken apart piece by piece" },
    ],
    grammar: [
      "Paragraph 2 uses 'is unmasked' in the passive: the pigments do nothing — something else removes what was hiding them, and the passive keeps the focus on the revealed colours.",
      "The phrase 'in other words' in the final paragraph signals a restatement of the passage's argument, a common signpost in academic prose.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-03",
    title: "Becoming the dog",
    subject: "Archaeology",
    difficulty: 1,
    estimatedMinutes: 8,
    passage: {
      heading: "Becoming the dog",
      paragraphs: [
        "Every dog, from a lap dog to a guard dog, descends from the grey wolf, and the descent happened far earlier than farming, cities or writing. The exact date is contested, but the domestication of the dog is the oldest domestication we know of, older than any crop or herd animal. Wherever humans and wolves overlapped, some wolves began, generation by generation, to live differently.",
        "The old story was that humans trained wolves. The current view reverses the direction: wolves, or at least the boldest and calmest among them, began the approach. Wolves that could tolerate being near people — not aggressive, but not terrified — found a new living at the edge of human camps, feeding on what people left behind. Humans, in this account, did not so much choose the dog as notice it already happening.",
        "What followed was a change in the animals that no one was planning. Over generations, a creature selected for nothing more than tolerance of people begins to look and behave differently: the skull rounds, the tail curls in some lines, the timing of adolescence shifts, and — most importantly for the relationship — an ability appears that wolf pups show only weakly, if at all: the dog puppy will follow a human's gaze or pointing hand. That single capacity, found in an animal that lives beside us, proved to be a door into cooperation.",
        "The archaeological record keeps the story honest. Burials from many thousands of years ago include dogs laid to rest with care, and in some places a dog is buried with grave goods like a person. By the time the first farmers arrived, the partnership was already ancient, and the dog had already travelled with people into every landscape they reached, from the Arctic coast to the edge of the Pacific.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "According to the passage, what is notable about the dog among domesticated animals?",
        options: [
          "It is the oldest known domestication",
          "It is the only one descended from wolves",
          "It was domesticated after farming",
          "It was domesticated twice",
        ],
        correct: 0,
        meta: {
          skills: ["details", "main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "the domestication of the dog is the oldest domestication we know of, older than any crop or herd animal" }],
          explanation:
            "The passage marks the dog as the first domestication, predating crops and herds; the exact date is contested, the priority is not. The item checks the claim the first paragraph stakes out.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "How does the current view differ from the old story?",
        options: [
          "It says humans captured wolf pups first",
          "It says the approach began on the wolf side, with tolerant animals living near camps",
          "It says wolves were trained for hunting first",
          "It says domestication began with farming",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 1, quote: "The current view reverses the direction: wolves, or at least the boldest and calmest among them, began the approach" }],
          explanation:
            "The revision is directional: not humans training wolves, but the calmest wolves drifting toward people and thriving at the camp edge. The passage's word 'reverses' marks the shift the item asks about.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage say was NOT planned?",
        options: [
          "The feeding of wolves",
          "The changes in the animals' appearance and behaviour over generations",
          "The guarding of camps",
          "The wolves' tolerance",
        ],
        correct: 1,
        meta: {
          skills: ["comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "What followed was a change in the animals that no one was planning" }],
          explanation:
            "Paragraph 3 opens by disclaiming intent: the rounded skull, curled tail and shifting adolescence were by-products, not a breeding programme. The item checks that the reader keeps the plan out of the story.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Which capacity does the passage single out as 'a door into cooperation'?",
        options: [
          "Hunting in packs",
          "Following a human's gaze or pointing hand",
          "Barking at strangers",
          "Sleeping beside people",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "an ability appears that wolf pups show only weakly, if at all: the dog puppy will follow a human's gaze or pointing hand" }],
          explanation:
            "The passage contrasts dog puppies with wolf pups on exactly one behaviour: following a human's point or gaze. It then names that capacity as the opening into cooperation, which is the item's answer.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What does the archaeological record show about some dog burials?",
        options: [
          "They are absent before farming",
          "Dogs were laid to rest with care, some with grave goods like a person",
          "Dogs were buried only with tools",
          "Dogs were never buried at all",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 3, quote: "Burials from many thousands of years ago include dogs laid to rest with care, and in some places a dog is buried with grave goods like a person" }],
          explanation:
            "The record includes careful burials, and in some places grave goods of the kind given to people. The passage uses the record to keep the story honest, and the item quotes that use.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The statement 'the dog had already travelled with people into every landscape they reached' implies that",
        options: [
          "dogs spread only with farmers",
          "the partnership was established before the spread described",
          "dogs reached those landscapes on their own",
          "travel ended with farming",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "By the time the first farmers arrived, the partnership was already ancient, and the dog had already travelled with people into every landscape they reached" }],
          explanation:
            "'Already' does the inferential work twice: the partnership predates the farmers, and the dog's spread followed people wherever they went. The item checks the ordering the adverb establishes.",
        },
      },
    ],
    vocabulary: [
      { word: "domestication", partOfSpeech: "noun", definition: "the process of a species adapting to life with humans" },
      { word: "contested", partOfSpeech: "adjective", definition: "disputed, not agreed by all" },
      { word: "tolerance", partOfSpeech: "noun", definition: "the ability to accept without reacting" },
      { word: "adolescence", partOfSpeech: "noun", definition: "the period between young and adult" },
      { word: "grave goods", partOfSpeech: "noun", definition: "objects buried with the dead" },
      { word: "partnership", partOfSpeech: "noun", definition: "a long arrangement of mutual benefit" },
    ],
    grammar: [
      "The passage's second paragraph opens with 'The old story was that… The current view reverses the direction': a paired structure common in academic revisionism — thesis, then its correction.",
      "'Not aggressive, but not terrified' uses parallel negation to define a middle band; the balanced clauses carry the meaning of measured tolerance.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-04",
    title: "Measuring time: from shadows to atoms",
    subject: "History of science",
    difficulty: 1,
    estimatedMinutes: 8,
    passage: {
      heading: "Measuring time: from shadows to atoms",
      paragraphs: [
        "The oldest clocks measured time by watching the sky change. A shadow's length tracks the sun's height; the moon's shape marks the passing of weeks; the stars' rising and setting frame the year. Devices built on these cycles — sundials, water clocks in which a marked vessel drains at a steady rate, candle clocks scored to burn evenly — all shared one limit: they divided the day, but their accuracy was that of the sky, of the craftsman, or of the water, and no better.",
        "The mechanical step was to make timekeeping independent of any natural cycle. In medieval Europe, weight-driven machines appeared that turned gears at a rate set by an oscillating part rather than by a river or a shadow. The first of these were enormous and unreliable by later standards, and they were found in towers, not homes. What they offered was new in kind: a machine that kept its own rhythm, which meant that time could now be measured in a place that had no sun, no water and no view of the sky.",
        "Accuracy improved in steps, each one tied to a steadier oscillation. Springs replaced weights in portable timepieces; the balance wheel gave pocket watches a steady beat; and the pendulum, in the right conditions, made a clock good enough for astronomy and navigation. Sea travel, in fact, supplied the strongest demand of all: knowing one's east-west position at sea requires knowing the time at a reference place, so a ship's navigator needed a clock that kept time through damp, heat and rolling decks — a problem that took a large part of a century to solve well.",
        "The modern step was not to make a better machine but to change what a 'second' is made of. Atomic clocks define time by the natural vibration of atoms, and they are steady to a degree the pendulum could never approach. The results are unglamorous and everywhere: satellite navigation, the timing of networks, and a world in which two laboratories on different continents can say 'at the same moment' and mean it to a precision that would have seemed mystical to the builders of the first towers.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What did all the devices in paragraph 1 share, according to the passage?",
        options: [
          "A dependence on natural cycles or steady rates, with accuracy no better than their source",
          "A supply of electricity",
          "Interchangeable parts",
          "A display of the moon's phase",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "main-ideas"],
          evidence: [{ block: 0, paragraph: 0, quote: "all shared one limit: they divided the day, but their accuracy was that of the sky, of the craftsman, or of the water, and no better" }],
          explanation:
            "The opening paragraph groups sundials, water clocks and candle clocks by their common ceiling: accuracy inherited from whatever drove them. The item asks for the grouping the paragraph explicitly makes.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What was 'new in kind' about the weight-driven machines?",
        options: [
          "They were smaller than earlier clocks",
          "They kept their own rhythm, so time could be measured without sun, water or sky",
          "They were accurate to the second",
          "They were affordable for homes",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "a machine that kept its own rhythm, which meant that time could now be measured in a place that had no sun, no water and no view of the sky" }],
          explanation:
            "The passage is explicit that the innovation was independence from natural cycles, not size or precision — the first machines were enormous and unreliable. The item separates the genuine novelty from properties the passage denies.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Why did navigation at sea create the strongest demand for accurate clocks?",
        options: [
          "Ships needed the moon's phase for tides",
          "East-west position requires knowing the time at a reference place",
          "Crews needed shift schedules",
          "Captains raced each other",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "knowing one's east-west position at sea requires knowing the time at a reference place" }],
          explanation:
            "The passage gives the practical reason: longitude depends on comparing a ship's local time with a reference clock carried on board, so the clock had to survive damp, heat and rolling. The item checks the causal link, not the history of prizes.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "In what way does the passage describe the modern step as different from earlier ones?",
        options: [
          "It made machines larger",
          "It changed the definition of the second itself",
          "It replaced clocks with calendars",
          "It returned timekeeping to the sky",
        ],
        correct: 1,
        meta: {
          skills: ["main-ideas", "details"],
          evidence: [{ block: 0, paragraph: 3, quote: "The modern step was not to make a better machine but to change what a 'second' is made of" }],
          explanation:
            "Atomic timekeeping redefines the second using natural vibrations of atoms; the passage marks this as a change in kind, not degree. The item tests whether the reader catches what was redefined.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The closing sentence says simultaneous claims across continents would 'have seemed mystical to the builders of the first towers'. The passage is noting that",
        options: [
          "the tower builders held mystical beliefs about time",
          "a precision once unimaginable is now routine and unglamorous",
          "modern scientists cannot explain the precision",
          "the towers were built for religious purposes",
        ],
        correct: 1,
        meta: {
          skills: ["inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "a world in which two laboratories on different continents can say 'at the same moment' and mean it to a precision that would have seemed mystical to the builders of the first towers" }],
          explanation:
            "The contrast is between what the first clockmakers could have imagined and what is now ordinary infrastructure. The point is the banality of precision, not anyone's beliefs, and the item checks that reading.",
        },
      },
    ],
    vocabulary: [
      { word: "oscillating", partOfSpeech: "adjective", definition: "swinging steadily back and forth" },
      { word: "pendulum", partOfSpeech: "noun", definition: "a swinging weight that sets a clock's beat" },
      { word: "navigation", partOfSpeech: "noun", definition: "finding and following a position and course" },
      { word: "precision", partOfSpeech: "noun", definition: "exactness of measurement" },
      { word: "sundial", partOfSpeech: "noun", definition: "a clock that reads the sun's shadow" },
      { word: "vibration", partOfSpeech: "noun", definition: "a rapid repeating motion" },
    ],
    grammar: [
      "The passage uses semicolons to build lists inside sentences — 'A shadow's length tracks…; the moon's shape marks…; the stars' rising and setting frame the year' — a rhythm that mirrors the cycles it describes.",
      "'Unglamorous and everywhere' places two adjectives in apposition after the verb 'are': the word order puts the surprise (unglamorous) first.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-05",
    title: "Coral reefs in a warming sea",
    subject: "Marine biology",
    difficulty: 1,
    estimatedMinutes: 8,
    passage: {
      heading: "Coral reefs in a warming sea",
      paragraphs: [
        "A coral reef is built by animals that behave like plants. The coral polyp — a small creature with tentacles — hosts inside its tissue a population of single-celled algae that photosynthesise, and the food they produce feeds the polyp. In return, the algae receive a sheltered, sunlit home inside a living tissue. This partnership is why reefs thrive in water that carries almost no nutrients: the pair recycles everything, and the reef grows anyway, building limestone from the calcium the polyps extract from seawater.",
        "The partnership has a temperature limit, and the limit is being tested. When water becomes too warm, the polyp expels the algae — the relationship breaks on the animal's side — and the coral, now colourless because its pigment has left with its guests, begins to starve. Divers call the result bleaching; it is visible from the surface as a reef turning white, and a bleached reef is not a dead reef, but it is a starving one, and it begins to die if the warm spell lasts.",
        "Bleaching events are recorded around the world, and they track the unusually warm seasons. A reef can recover if the water cools in time and the algae return; recovery is harder where the reef is also stressed by anything else — sediment from building, damage from anchors, fish that are taken faster than they replace themselves. A healthy reef tolerates a shock; a reef already carrying several burdens does not, and warming is now the largest of the burdens being added.",
        "What reefs mean to people is easy to list and hard to price. They break wave energy before it reaches the shore, so the coast behind a reef is protected in a way no sea wall quite matches. They are the nursery ground for a large share of the fish that coastal communities eat and sell, and the visitors they attract support livelihoods built on water that is clear and living. The passage of a reef from colour to white is therefore not only a biological event; it is a change in the economy of a coastline and the safety of one.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why does the passage say reefs can thrive in nutrient-poor water?",
        options: [
          "Because the polyps hunt at night",
          "Because the coral-algae partnership recycles everything, producing food from sunlight",
          "Because reefs feed on limestone",
          "Because waves bring nutrients from far away",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "This partnership is why reefs thrive in water that carries almost no nutrients: the pair recycles everything" }],
          explanation:
            "The algae photosynthesise inside the polyp and feed it, so the reef does not need the water to deliver food; the pair runs on sunlight in a closed loop. The paragraph's causal sentence is the item's whole target.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What is bleaching, in the passage's description?",
        options: [
          "The death of the reef",
          "The polyp expelling its algae, leaving the coral colourless and starving",
          "A disease spread by divers",
          "The loss of the limestone skeleton",
        ],
        correct: 1,
        lure: 0,
        meta: {
          skills: ["details", "vocabulary"],
          evidence: [{ block: 0, paragraph: 1, quote: "the polyp expels the algae" }, { block: 0, paragraph: 1, quote: "begins to starve" }],
          explanation:
            "Bleaching is the expulsion of the algae and the whiteness that follows; the passage is explicit that a bleached reef is not dead yet, but starving. The lure names the end state the passage carefully distinguishes bleaching from.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Under what condition does the passage say recovery is harder?",
        options: [
          "When the reef is close to shore",
          "When the reef carries other stresses such as sediment, anchor damage or overfishing",
          "When the water cools too quickly",
          "When the algae arrive early",
        ],
        correct: 1,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "recovery is harder where the reef is also stressed by anything else — sediment from building, damage from anchors, fish that are taken faster than they replace themselves" }],
          explanation:
            "Recovery depends on the reef's total burden: warm water alone can be survived, but warming on top of sediment, damage and overfishing is harder to absorb. The item checks the compounding logic of the paragraph.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What service does the passage say no sea wall quite matches?",
        options: [
          "Producing fresh water",
          "Breaking wave energy before it reaches the shore",
          "Cooling the water",
          "Marking shipping lanes",
        ],
        correct: 1,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 3, quote: "They break wave energy before it reaches the shore, so the coast behind a reef is protected in a way no sea wall quite matches" }],
          explanation:
            "The protective service is the absorption of wave energy, which protects the coast naturally. The sentence compares the reef favourably to built defences, and the item checks what that comparison concerns.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "The final paragraph argues that bleaching matters beyond biology because",
        options: [
          "it changes coastal economies and safety",
          "it is visible from satellites",
          "it attracts more tourists",
          "it cools the coastline",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "The passage of a reef from colour to white is therefore not only a biological event; it is a change in the economy of a coastline and the safety of one" }],
          explanation:
            "The closing sentence widens the stakes: a bleaching event is also an economic and protective change for the coast. The 'therefore' ties the earlier list — protection, nurseries, livelihoods — to the conclusion the item asks for.",
        },
      },
    ],
    vocabulary: [
      { word: "polyp", partOfSpeech: "noun", definition: "the tiny coral animal that builds the reef" },
      { word: "algae", partOfSpeech: "noun", definition: "the single-celled partners living in the polyp" },
      { word: "bleaching", partOfSpeech: "noun", definition: "the whitening caused by expelled algae" },
      { word: "sediment", partOfSpeech: "noun", definition: "material carried and deposited by water" },
      { word: "nursery ground", partOfSpeech: "noun", definition: "the habitat where young fish grow" },
      { word: "limestone", partOfSpeech: "noun", definition: "the calcium rock reefs are built from" },
    ],
    grammar: [
      "The passage uses paired dashes to insert definitions mid-sentence — 'the coral polyp — a small creature with tentacles — hosts…' — keeping the technical noun and its gloss in one breath.",
      "The final sentence's 'not only… but' structure (here 'not only… it is') signals an escalation from biology to economics, a standard move in concluding paragraphs.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
