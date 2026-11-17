/**
 * TOEFL Reading Practice Library — Read an Academic Passage, batch 5 (PROMPT 49).
 *
 * Seven advanced exercises (difficulty 5): earth science, complexity theory,
 * linguistics, urban sociology, biotechnology, particle physics and art
 * conservation — the hardest tier, with claims and counterclaims, defined
 * terms and disciplined uncertainty.
 *
 * All passages are original TalkSy practice material; established knowledge
 * only, with open questions stated as open.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const acad5Exercises: ToeflReadingExercise[] = [
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-27",
    title: "Naming an epoch",
    subject: "Earth science",
    difficulty: 5,
    estimatedMinutes: 10,
    passage: {
      heading: "Naming an epoch",
      paragraphs: [
        "A working group of geologists spent over a decade on a question that sounds like a committee's trivia and is in fact a matter of definition with consequences: whether the present should be formally designated as a new epoch of geological time, named for the human species. The case for the proposal is stratigraphic: the record being laid down now differs from the record beneath it in ways that will persist — radionuclides from weapons testing, plastics, concrete, altered carbon chemistry in the air and the sea, and a layer of species changes that future geologists, if any, will read as a boundary.",
        "The case against is procedural and precise. Epochs in the geological column are defined by marker evidence in the rock, and the formal rules require a level of agreement on where the boundary sits and what physical signal defines it; opponents of the proposal argue that the signals listed are real but young, that the boundary has not been laid down yet in the way that would make it identifiable, and that naming the present from within the present is a category error: stratigraphy, on this view, describes what can be recognised in the record by observers who are not the record's authors.",
        "In 2024 the proposal was defeated by a vote of the relevant commission's members, with a large majority against, and the matter is now settled at the level of formal nomenclature for the time being: the present remains within the Holocene. The outcome is frequently misreported as a denial of human impact, and the distinction matters. The scientific case for the scale of human alteration of the earth system is separate from the stratigraphic question of naming, and the voters themselves were, in the main, scientists whose daily work documents that alteration.",
        "What the episode shows about science in public is that names carry work. A formal term signals to other disciplines and to the public that a question has been decided by the agreed procedures of the deciding body; refusing the term, by the same procedures, is not a judgement about the substance but about the rules and their scope. The frustration the vote produced in other fields — and the satisfaction in some quarters — are both responses to a decision that was, strictly, about a word, made by the people whose job is to decide about words.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the stratigraphic case FOR the new epoch, as the passage states it?",
        options: [
          "The record being laid down now differs persistently — radionuclides, plastics, concrete, altered carbon chemistry, species changes",
          "That humans feel recent",
          "That the name sounds good",
          "That older epochs were unnamed",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "radionuclides from weapons testing, plastics, concrete, altered carbon chemistry in the air and the sea, and a layer of species changes" }],
          explanation:
            "The case is a list of physical markers in the strata being formed. The item checks the evidence the first paragraph assembles.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What procedural argument do opponents make, according to the passage?",
        options: [
          "That the signals are real but young, the boundary is not yet laid down identifiable, and naming the present from within it is a category error",
          "That humans have no impact",
          "That geology should be abolished",
          "That the name is illegal",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "opponents of the proposal argue that the signals listed are real but young" }, { block: 0, paragraph: 1, quote: "naming the present from within the present is a category error" }],
          explanation:
            "The objection is about the rules of formal stratigraphy, not about impact. The item checks the opponents' actual reasoning, which concedes the signals while refusing the name.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What happened to the proposal in 2024, and what does that settle?",
        options: [
          "It was defeated by a large majority; the present formally remains within the Holocene",
          "It was adopted unanimously",
          "It was postponed indefinitely",
          "It was never voted on",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "In 2024 the proposal was defeated by a vote of the relevant commission's members, with a large majority against" }],
          explanation:
            "The vote killed the name, not the science. The item checks the outcome and its formal scope, with the present remaining within the Holocene.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say is frequently misreported?",
        options: [
          "The outcome as a denial of human impact, when it was a decision about naming rules",
          "The date of the vote",
          "The name of the commission",
          "The size of the majority",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "main-ideas"],
          evidence: [{ block: 0, paragraph: 2, quote: "The outcome is frequently misreported as a denial of human impact, and the distinction matters" }],
          explanation:
            "The passage separates the stratigraphic question from the earth-system question. The item checks the misreading the paragraph corrects, since the voters document alteration themselves.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Why does the passage say names carry work?",
        options: [
          "A formal term signals to other disciplines and the public that a question has been decided by agreed procedures",
          "Names are legally binding",
          "Names cannot be changed",
          "Names decide funding automatically",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 3, quote: "A formal term signals to other disciplines and to the public that a question has been decided by the agreed procedures of the deciding body" }],
          explanation:
            "Terminology functions as a signal of settled procedure. The item checks the function of formal names the final paragraph assigns.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final paragraph describes the vote as 'strictly, about a word, made by the people whose job is to decide about words'. The tone is best described as",
        options: [
          "precise and quietly deflationary, narrowing the dispute to its actual scope",
          "angry at the voters",
          "dismissive of geology",
          "enthusiastic for the proposal",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "a decision that was, strictly, about a word, made by the people whose job is to decide about words" }],
          explanation:
            "The sentence deflates both the frustration and the satisfaction by restating the decision's exact scope. The item checks the register of that deflation.",
        },
      },
    ],
    vocabulary: [
      { word: "stratigraphy", partOfSpeech: "noun", definition: "the study of layered rock and its dating" },
      { word: "epoch", partOfSpeech: "noun", definition: "a formal division of geological time" },
      { word: "radionuclide", partOfSpeech: "noun", definition: "a radioactive form of an element" },
      { word: "nomenclature", partOfSpeech: "noun", definition: "the official system of names" },
      { word: "category error", partOfSpeech: "noun", definition: "a mistake about the kind of thing being discussed" },
      { word: "Holocene", partOfSpeech: "noun", definition: "the epoch in which the present formally remains" },
    ],
    grammar: [
      "The passage marks its central distinction with a colon and a balancing clause — 'is separate from… and the voters themselves were, in the main, scientists…' — the parenthetical 'in the main' keeping the claim honest.",
      "The final paragraph's reflexive construction ('a decision that was, strictly, about a word') uses the adverb to police the scope of the claim — a hedge doing argumentative work.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-28",
    title: "More is different",
    subject: "Complexity science",
    difficulty: 5,
    estimatedMinutes: 10,
    passage: {
      heading: "More is different",
      paragraphs: [
        "The physical sciences have an awkward relationship with simplicity, and one of the clearest statements of the awkwardness is a short essay whose title has become a slogan: 'more is different'. The claim is not that large systems disobey the laws that small ones obey; it is that knowing the laws of the parts is not, in practice, knowing the behaviour of the whole, because systems with many interacting parts exhibit regularities at their own level that neither appear in nor are predicted from the description of any single part.",
        "The examples are familiar from everyday life, dressed in unfamiliar precision. Water is not wet in any sentence about a single molecule; a market price is not a fact about any participant; a flock's turning is not written into any bird. In each case a new level of description becomes the useful one — the level at which laws can be stated, measured and used — while remaining consistent with, and dependent on, the level below it. The technical term for such level-regularities is emergence, and the term is used both for the phenomenon and for the research programme that studies it.",
        "The programme has real successes to point to. Models of interacting agents following simple local rules reproduce collective behaviour seen in real systems: flocking patterns, traffic jams that move backwards along a road faster than any car travels, the distribution of city sizes, the shape of phase transitions in materials. The method's characteristic move is to build the smallest system that shows the behaviour and then vary it — change one rule at a time and watch which regularities survive, which is the experimental discipline that separates the field from metaphor.",
        "The limits are stated by its practitioners as often as by critics. Emergence does not supply explanation by naming; calling a regularity emergent is a claim that it is real at its level, not an account of why it occurs, and for many systems of public interest — economies above all — the confidence that a model has captured the mechanism remains the exception rather than the rule. The honest summary of the field is the one its own founders offered: nature is organised in levels, each with its own laws, and the study of each level is a science in its own right, whatever the parts are doing underneath.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What is the 'more is different' claim, as the passage states it?",
        options: [
          "Not that large systems disobey the laws of the parts, but that knowing the parts' laws is not knowing the whole's behaviour",
          "That large systems break physics",
          "That small systems are unknowable",
          "That only wholes exist",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "The claim is not that large systems disobey the laws that small ones obey; it is that knowing the laws of the parts is not, in practice, knowing the behaviour of the whole" }],
          explanation:
            "The essay's thesis is about levels of description, not about violating physics. The item checks the 'not… but' formulation the paragraph builds.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Which three everyday examples does the passage use?",
        options: [
          "Wetness, market price, flock turning",
          "Weather, tides, seasons",
          "Bonds, atoms, electrons",
          "Rivers, roads, rails",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "Water is not wet in any sentence about a single molecule; a market price is not a fact about any participant; a flock's turning is not written into any bird" }],
          explanation:
            "The three examples are chosen for being collective facts. The item checks the triple the paragraph lists, each failing to appear at the level of any single part.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage identify as the field's characteristic methodological move?",
        options: [
          "Building the smallest system that shows the behaviour, then varying one rule at a time",
          "Measuring everything at once",
          "Trusting intuition",
          "Averaging over cases",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "build the smallest system that shows the behaviour and then vary it — change one rule at a time and watch which regularities survive" }],
          explanation:
            "The discipline is minimal-model plus controlled variation. The item checks the method that separates the field from metaphor: varying one rule and watching which regularities survive.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "Which modelled regularities does the passage list?",
        options: [
          "Flocking patterns, backward-moving traffic jams, the distribution of city sizes, shapes of phase transitions",
          "Orbits, eclipses, tides, seasons",
          "Prices, wages, rents, taxes",
          "Atoms, bonds, ions, salts",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "flocking patterns, traffic jams that move backwards along a road faster than any car travels, the distribution of city sizes, the shape of phase transitions in materials" }],
          explanation:
            "The list spans biology, traffic, urban scaling and physics. The item checks the range of documented successes the paragraph cites.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What limit does the passage say practitioners themselves state?",
        options: [
          "Emergence does not supply explanation by naming — it claims regularities are real, not why they occur",
          "Emergence explains everything",
          "Models never work",
          "Economies are simple",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "Emergence does not supply explanation by naming; calling a regularity emergent is a claim that it is real at its level, not an account of why it occurs" }],
          explanation:
            "The named limit is the gap between labelling and explaining. The item checks the caveat the paragraph leads with, especially for economies above all.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The passage ends with the founders' summary that nature is organised in levels, each with its own laws. This supports the view that",
        options: [
          "each level of organisation is a legitimate object of science, whatever the parts do underneath",
          "only physics is real science",
          "levels are illusions",
          "the lowest level explains all",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "the study of each level is a science in its own right, whatever the parts are doing underneath" }],
          explanation:
            "The closing formula restores legitimacy to level-specific sciences. The item checks the conclusion the passage attributes to the field's founders.",
        },
      },
    ],
    vocabulary: [
      { word: "emergence", partOfSpeech: "noun", definition: "level-regularities not present in the parts" },
      { word: "regularity", partOfSpeech: "noun", definition: "a repeating pattern in behaviour" },
      { word: "agent", partOfSpeech: "noun", definition: "one interacting unit in a model" },
      { word: "phase transition", partOfSpeech: "noun", definition: "an abrupt change of state, as in freezing" },
      { word: "mechanism", partOfSpeech: "noun", definition: "the account of why something occurs" },
      { word: "metaphor", partOfSpeech: "noun", definition: "figurative comparison standing in for analysis" },
    ],
    grammar: [
      "The passage's first paragraph places its thesis in a semicolon-joined pair — 'The claim is not that…; it is that…' — a structure repeated across this batch for corrective precision.",
      "The second paragraph uses a tricolon of negations ('Water is not wet…; a market price is not…; a flock's turning is not written…'), parallel clauses whose rhythm enacts the point about levels.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-29",
    title: "Does language shape thought?",
    subject: "Linguistics",
    difficulty: 5,
    estimatedMinutes: 10,
    passage: {
      heading: "Does language shape thought?",
      paragraphs: [
        "The strong version of the claim — that the language you speak determines what you can think — has no serious defenders left: every so-called primitive population studied by linguists turns out to think with great subtlety about everything its life involves, and translations, however imperfect, happen constantly. What survived the strong claim's fall is a family of weaker, testable questions: whether a language's habits nudge its speakers' attention in measurable ways, at the moment of speaking and perhaps beyond it.",
        "The best-evidenced answer is in the domains languages mark obligatorily. Every verb in English carries a time; some languages mark source of information instead; others require the shape of an object to be classified on every mention. Where such markings are compulsory, experiments find differences in speed and accuracy of recall in the marked domain — speakers of languages that grammaticise evidence, for example, remember who said what somewhat better than speakers of languages that do not, and the differences are of size and reliability, not of kind.",
        "Colour is the classic testing ground, because languages differ in how they cut the spectrum, and the research history here has changed direction more than once. Early studies were taken to show that speakers of languages without a separate basic term for a hue could not discriminate it; later work, better controlled, found the discrimination intact, while confirming subtler effects at the category boundaries — a hue near a boundary is a shade harder to classify than one near a category's centre, for everyone, in every language, with the boundaries drawn in each speaker's own tongue.",
        "The area where the debate has been most productive is space. Some languages give directions in absolute coordinates, as if on a fixed grid; others use body-relative terms. Speakers of absolute-coordinate languages maintain orientation remarkably well, including indoors and after being blindfolded and turned around — a capacity that does not require the language, but that the language, in these communities, appears to train. The prudent conclusion, and the one most researchers now work with, is that language is one of the forces acting on habitual attention, neither the prison the early claim described nor the transparent window its critics once insisted on.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What does the passage say happened to the strong version of the claim?",
        options: [
          "It has no serious defenders left; the testable weaker questions survived",
          "It was confirmed",
          "It was made law",
          "It renamed the field",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "has no serious defenders left" }],
          explanation:
            "The passage buries the determinism claim and inherits its testable descendants. The item checks the opening move, which keeps only what can be measured.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Where does the passage say the best-evidenced effects are found?",
        options: [
          "In domains languages mark obligatorily, such as time, source of information, or object shape",
          "Everywhere equally",
          "Only in vocabulary size",
          "Only in writing",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "The best-evidenced answer is in the domains languages mark obligatorily" }],
          explanation:
            "Obligatory grammar is the locus of reliable effects. The item checks the domain the paragraph names before its examples, where every utterance must mark time or evidence or shape.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What did later, better-controlled colour research find?",
        options: [
          "Discrimination intact, with subtler effects at category boundaries for every language's speakers",
          "That hue discrimination is impossible without terms",
          "That colour terms are universal",
          "That boundaries do not matter",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "later work, better controlled, found the discrimination intact, while confirming subtler effects at the category boundaries" }],
          explanation:
            "The revision kept the perceptual finding and relocated the effect to boundary costs. The item checks the correction of the early studies.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What capacity do speakers of absolute-coordinate languages maintain, according to the passage?",
        options: [
          "Orientation indoors and after being blindfolded and turned around",
          "Perfect memory for places",
          "Faster speech",
          "Larger vocabularies for space",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 3, quote: "maintain orientation remarkably well, including indoors and after being blindfolded and turned around" }],
          explanation:
            "The finding is maintained orientation under disorienting conditions. The item checks the example the space paragraph leads with, indoors and after turning around blindfolded.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "How does the passage describe the relationship between the language and the capacity?",
        options: [
          "The capacity does not require the language, but the language appears to train it",
          "The language creates the capacity from nothing",
          "The capacity causes the language",
          "They are unrelated",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "a capacity that does not require the language, but that the language, in these communities, appears to train" }],
          explanation:
            "The relationship is training, not requirement — the careful middle position the sentence states. The item checks that hedge, which is what the whole debate turns on.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final sentence calls language 'neither the prison the early claim described nor the transparent window its critics once insisted on'. The figure pairs",
        options: [
          "determinism with neutrality, rejecting both for a trained-attention view",
          "two buildings",
          "two languages",
          "a fact with a fiction",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "neither the prison the early claim described nor the transparent window its critics once insisted on" }],
          explanation:
            "The paired metaphors are strong shaping and no shaping; the passage's conclusion is a measured third position. The item checks the antithesis's function.",
        },
      },
    ],
    vocabulary: [
      { word: "grammaticise", partOfSpeech: "verb", definition: "to make a meaning part of the grammar" },
      { word: "obligatorily", partOfSpeech: "adverb", definition: "in a way that cannot be omitted" },
      { word: "hue", partOfSpeech: "noun", definition: "a shade of colour" },
      { word: "boundary", partOfSpeech: "noun", definition: "the edge between categories" },
      { word: "absolute coordinates", partOfSpeech: "noun", definition: "directions fixed like a compass grid" },
      { word: "habitual", partOfSpeech: "adjective", definition: "of what one usually does without deciding" },
    ],
    grammar: [
      "The passage's first paragraph ends with a colon introducing the surviving questions — a pivot from what died to what lives, common in literature-review openings.",
      "The final sentence's 'neither… nor' construction balances two rejected positions with matched relative clauses, letting the measured middle stand without being stated.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-30",
    title: "Gentrification and the two-market race",
    subject: "Urban sociology",
    difficulty: 5,
    estimatedMinutes: 10,
    passage: {
      heading: "Gentrification",
      paragraphs: [
        "The term was coined in the 1960s to describe what happened when middle-class buyers began moving into working-class London districts: the arrival was described, in the period's metaphor, as if a gentry were colonising the neighbourhood from within. The word has since travelled to every city where rising rents push one population out and pull another in, and the definitional disputes about it — what counts, who counts, over what timescale — are not pedantry: each definition decides who is counted as harmed and what policy is judged relevant.",
        "The mechanism is best described as a race between two markets. An area's housing is cheap relative to its location; artists, students and low-income professionals move in because of the low prices; the arrival of cafés and reputation raises the area's desirability; rents rise; the original low-income residents, and then the earlier arrivals themselves, are priced out. At the level of the housing market this is a story about supply and demand with the usual caveat: in cities where new construction is constrained, the second wave meets a fixed stock, and the displacement is correspondingly sharper.",
        "The evidence on displacement is more careful than the rhetoric. Studies that track individual households over time — rather than comparing snapshots of neighbourhoods — find that direct displacement of existing residents is real but smaller than public discussion assumes, and that the larger effect is exclusion: original residents move less often, and the poor move out of the neighbourhood less, while the composition of who moves in changes the area's character and its services. The visible transformation of a street, on this evidence, is more about replacement than eviction, which is why the argument so often talks past itself.",
        "The policy responses divide by which cause they target. Rent regulation and protection of existing tenancies aim at the displacement margin; increasing supply aims at the price margin, and is argued to help most where the shortage is most acute; ownership of land by public or community bodies aims at the margin that neither market instrument reaches, taking appreciation out of private hands. Each works somewhere and fails somewhere, and the choice among them is less a technical finding than a decision about whose interests the housing system is for — a decision the word 'gentrification' keeps forcing, which is precisely why the word survives.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What metaphor was the term coined from, and when?",
        options: [
          "In the 1960s, describing middle-class buyers as if a gentry were colonising working-class districts",
          "In the 1890s, from banking",
          "In the 1920s, from theatre",
          "In the 2000s, from computing",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 0, quote: "The term was coined in the 1960s to describe what happened when middle-class buyers began moving into working-class London districts" }],
          explanation:
            "The passage dates the coinage and explains its figure. The item checks the origin the first paragraph gives — gentry colonising from within, as the period's metaphor had it.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "Why does the passage say the definitional disputes are not pedantry?",
        options: [
          "Because each definition decides who is counted as harmed and what policy is judged relevant",
          "Because scholars enjoy arguing",
          "Because the word is new",
          "Because courts require it",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "each definition decides who is counted as harmed and what policy is judged relevant" }],
          explanation:
            "Definitions carry consequences for measurement and policy. The item checks the reason the paragraph states after its colon, because who is harmed depends on who is counted.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What usual caveat does the passage attach to the housing-market mechanism?",
        options: [
          "Where construction is constrained, the second wave meets a fixed stock and displacement is sharper",
          "Prices never rise",
          "Supply is infinite",
          "Demand is fixed",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "in cities where new construction is constrained, the second wave meets a fixed stock, and the displacement is correspondingly sharper" }],
          explanation:
            "The caveat concerns constrained supply amplifying displacement. The item checks the conditional the paragraph adds to the mechanism: a fixed stock meets the second wave.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What do longitudinal studies find, according to the passage?",
        options: [
          "Direct displacement is real but smaller than assumed; the larger effect is exclusion — original residents move less, while who moves in changes",
          "Displacement is total",
          "No one moves at all",
          "Only the rich move out",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 2, quote: "direct displacement of existing residents is real but smaller than public discussion assumes, and that the larger effect is exclusion" }],
          explanation:
            "The careful finding distinguishes displacement from exclusion. The item checks the distinction the paragraph builds from tracking households rather than comparing streets.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Which three policy margins does the passage identify?",
        options: [
          "The displacement margin (rent protection), the price margin (supply), and ownership taking appreciation out of private hands",
          "Policing, schooling and transport",
          "Taxes, tariffs and subsidies",
          "None: policy is impossible",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "Rent regulation and protection of existing tenancies aim at the displacement margin; increasing supply aims at the price margin" }],
          explanation:
            "The three responses target three margins, including land ownership. The item checks the mapping of policies to causes: rent rules, supply and who owns the appreciation.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The passage ends by saying the choice among policies is 'less a technical finding than a decision about whose interests the housing system is for'. The claim is that",
        options: [
          "the policy choice is fundamentally a distributive judgement",
          "no evidence exists",
          "one policy is proven best",
          "cities cannot act",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "less a technical finding than a decision about whose interests the housing system is for" }],
          explanation:
            "The closing reclassifies the question as one of values, not technique. The item checks that reclassification, which the final sentence also explains is why the word survives.",
        },
      },
    ],
    vocabulary: [
      { word: "gentry", partOfSpeech: "noun", definition: "the landed class the metaphor borrows" },
      { word: "displacement", partOfSpeech: "noun", definition: "the pushing out of existing residents" },
      { word: "exclusion", partOfSpeech: "noun", definition: "preventing new low-income residents from arriving" },
      { word: "tenancies", partOfSpeech: "noun", definition: "the legal rights of existing occupants to stay" },
      { word: "appreciation", partOfSpeech: "noun", definition: "the rise in an asset's value" },
      { word: "snapshot", partOfSpeech: "noun", definition: "a single moment's picture, here of a neighbourhood" },
    ],
    grammar: [
      "The second paragraph narrates the mechanism as a chain of clauses without conjunctions — a sequence enacting the causal cascade it describes.",
      "The final paragraph distributes its three policies across semicolons, each clause pairing an instrument with the margin it targets — parallel architecture mirroring parallel argument.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-31",
    title: "Gene drives",
    subject: "Biotechnology",
    difficulty: 5,
    estimatedMinutes: 10,
    passage: {
      heading: "Gene drives",
      paragraphs: [
        "In ordinary inheritance, a gene variant present in one parent has a one-in-two chance of appearing in each child, and a variant that harms its carrier tends to be removed over generations. A gene drive is a mechanism that breaks both rules: engineered to copy itself into the corresponding position in the other chromosome, it is inherited by nearly all offspring rather than half, and it therefore spreads through a wild population even where it reduces the fitness of the individuals carrying it. The mathematics is unusual and consequential: within a limited number of generations, a drive released in modest numbers can approach fixation in a population connected by breeding.",
        "The applications proposed are, in the main, public-health and conservation ones: suppressing populations of mosquitoes that transmit human diseases, or removing invasive mammals from islands where they destroy native breeding birds. The technical results in contained studies are encouraging — drives constructed in the laboratory show the expected inheritance advantage, and modelling of release scenarios is an active literature — while the field's own assessments repeat, in every document, that movement from laboratory to open release is a step that existing regulatory categories were not designed to supervise.",
        "The distinctive property that raises the stakes is irreversibility at the population scale. A released drive does not stop at a border, does not expire with the individuals released, and — in the version most often proposed — cannot be recalled by any action short of releasing another drive designed to overwrite the first. This is why the governance discussion is structured differently from other biotechnology debates: containment and reversibility, which are the standard answers to engineered-risk objections, are precisely the properties the technology is designed to lack.",
        "The response within the field has been to invent governance rather than wait for it: staged testing frameworks with defined exit points, molecular brakes built into the construct, and an international consultation record unusual in its early timing, conducted before rather than after any field use. Whether these arrangements suffice is an open question in the full sense — it is a question about institutions, not about molecules — and it is the one on which the technology's future will be decided, since the science, on its own, has already shown that the copying works.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "What two ordinary rules does a gene drive break?",
        options: [
          "The one-in-two inheritance chance and the removal of harmful variants over generations",
          "The laws of chemistry",
          "Mendel's biography",
          "Cell division",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "a gene variant present in one parent has a one-in-two chance of appearing in each child, and a variant that harms its carrier tends to be removed" }],
          explanation:
            "The drive violates both the 50% inheritance ratio and the purging of harmful variants. The item checks the two rules the opening paragraph sets up.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "How does the passage say the copying is achieved?",
        options: [
          "The construct copies itself into the corresponding position on the other chromosome",
          "It is sprayed on crops",
          "It is taught to parents",
          "It is delivered by virus only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "engineered to copy itself into the corresponding position in the other chromosome" }],
          explanation:
            "The mechanism is position-specific self-copying at the chromosome level. The item checks the engineering trick the sentence describes.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "Which applications does the passage say are, in the main, proposed?",
        options: [
          "Suppressing disease-transmitting mosquitoes and removing invasive mammals from islands",
          "Human enhancement",
          "Crop yield alone",
          "Livestock colouring",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "suppressing populations of mosquitoes that transmit human diseases, or removing invasive mammals from islands" }],
          explanation:
            "The two named domains are public health and island conservation. The item checks the purposes the paragraph limits itself to.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What does the passage say about containment and reversibility?",
        options: [
          "They are the standard answers to engineered-risk objections, and precisely the properties the technology is designed to lack",
          "They are fully solved",
          "They are irrelevant",
          "They are guaranteed by treaty",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "main-ideas"],
          evidence: [{ block: 0, paragraph: 2, quote: "containment and reversibility, which are the standard answers to engineered-risk objections, are precisely the properties the technology is designed to lack" }],
          explanation:
            "The paragraph's key reversal: the usual safeguards are what the drive is built to defeat. The item checks the inversion that structures the governance discussion.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "How does the passage say the field has responded on governance?",
        options: [
          "By inventing it: staged testing frameworks, molecular brakes, and consultation conducted before any field use",
          "By waiting for regulation",
          "By denying the issue",
          "By moving offshore",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "staged testing frameworks with defined exit points, molecular brakes built into the construct, and an international consultation record unusual in its early timing" }],
          explanation:
            "The listed responses are procedural and technical inventions, ahead of regulation. The item checks the list the final paragraph supplies.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final paragraph calls the sufficiency question 'a question about institutions, not about molecules'. This distinction implies that",
        options: [
          "the science is settled while the governance is not",
          "molecules are unknowable",
          "institutions cannot act",
          "the question is unanswerable",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "main-ideas"],
          evidence: [{ block: 0, paragraph: 3, quote: "it is a question about institutions, not about molecules" }],
          explanation:
            "The passage separates the demonstrated copying from the undecided governance. The item checks that division of labour, which the closing sentence states the technology's future depends on.",
        },
      },
    ],
    vocabulary: [
      { word: "inheritance", partOfSpeech: "noun", definition: "the passing of genes to offspring" },
      { word: "chromosome", partOfSpeech: "noun", definition: "the structure genes sit on, in pairs" },
      { word: "fixation", partOfSpeech: "noun", definition: "a variant present in essentially all individuals" },
      { word: "invasive", partOfSpeech: "adjective", definition: "of a species introduced and spreading harmfully" },
      { word: "irreversibility", partOfSpeech: "noun", definition: "the quality of being unable to be undone" },
      { word: "construct", partOfSpeech: "noun", definition: "the engineered genetic sequence" },
    ],
    grammar: [
      "The passage's first paragraph sets up two rules with balanced clauses and then breaks them in the second sentence — the rhetorical shape of the whole field's argument.",
      "The final paragraph's antithesis ('about institutions, not about molecules') uses parallel prepositional phrases to divide questions cleanly, a signature of policy-facing science writing.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-32",
    title: "The particles that pass through everything",
    subject: "Physics",
    difficulty: 5,
    estimatedMinutes: 10,
    passage: {
      heading: "The particles that pass through everything",
      paragraphs: [
        "Neutrinos are particles of almost nothing: no electric charge, a mass so small it was long undetectable, and a reluctance to interact that lets trillions of them pass through a human body each second without consequence. They are produced wherever nuclear processes occur — in the sun's core, in the upper atmosphere where cosmic rays strike it, in reactors and, briefly and enormously, in supernovae. Detecting them is an exercise in patience and scale: since almost all pass through any apparatus, experiments are built underground, of enormous volume, and run for years, to catch the rare occasion when one strikes an atom and the atom's recoil is seen.",
        "The scientific history of the particle is a series of inferences from missing quantities. Its existence was proposed to balance the books of a radioactive decay whose energy did not add up; its first detection, decades later, confirmed the bookkeeping. The subsequent findings have each carried a similar flavour of arithmetic vindicated: the neutrinos arriving from the sun were fewer than the sun's physics predicted, and the resolution — that the particles change type in flight — required that they have mass, which the standard description had set at zero and which the observations therefore revised.",
        "That discovery opened the current chapter, in which neutrinos serve as a probe of the highest-energy and most distant events. Detectors watching for them have recorded a handful of particles from beyond the solar system, individually energetic enough to mark their sources as among the most violent places known; a burst of neutrinos was observed arriving from a supernova hours before its light became visible, an early warning inherent in the particle's ability to leave a collapsing star unimpeded; and the long-term programmes now under construction aim to instrument volumes of cubic kilometres to catch enough of the rare events to map the sky in this new channel.",
        "What the field promises, in the long run, extends beyond astronomy. Neutrinos are the only known particles whose behaviour differs between matter and antimatter versions in a way that is measured but not understood, which makes them a candidate thread in the oldest unsolved problem of cosmology: why the universe contains matter at all. The honest position is that the thread is held, and that nothing more is known than that it is worth pulling — a sentence that describes much of the best science, and all of its patience.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why are neutrino experiments built underground, large and long-running?",
        options: [
          "Because almost all neutrinos pass through any apparatus, so years of huge volume catch the rare recoil",
          "Because neutrinos are dangerous",
          "Because they are cheap to build there",
          "Because the sun is underground",
        ],
        correct: 0,
        meta: {
          skills: ["comprehension", "details"],
          evidence: [{ block: 0, paragraph: 0, quote: "since almost all pass through any apparatus, experiments are built underground, of enormous volume, and run for years, to catch the rare occasion when one strikes an atom" }],
          explanation:
            "The design follows from the tiny interaction rate. The item checks the reasoning that dictates the engineering: years of enormous volume underground, catching the rare recoil.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "How was the neutrino's existence first proposed?",
        options: [
          "To balance the books of a radioactive decay whose energy did not add up",
          "By seeing it in a cloud chamber",
          "By mistake",
          "By theory of gravity",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 1, quote: "Its existence was proposed to balance the books of a radioactive decay whose energy did not add up" }],
          explanation:
            "The particle was inferred from missing energy before it was seen. The item checks the inferential origin the paragraph narrates.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "How was the solar neutrino shortage resolved?",
        options: [
          "By the finding that neutrinos change type in flight, which required them to have mass",
          "By recalculating the sun",
          "By abandoning the theory",
          "By better counting only",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "the resolution — that the particles change type in flight — required that they have mass" }],
          explanation:
            "Oscillation solved the shortage and revised the mass assumption. The item checks the two-step resolution the paragraph gives, the standard's zero becoming a measured nonzero.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What early-warning event does the passage describe?",
        options: [
          "A burst of neutrinos arriving from a supernova hours before its light",
          "A power cut",
          "An eclipse prediction",
          "A solar flare alarm",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "a burst of neutrinos was observed arriving from a supernova hours before its light became visible" }],
          explanation:
            "The neutrinos outran the light out of the collapsing star. The item checks the observation the paragraph uses to show the particle's probing value.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "What property of neutrinos does the passage say is measured but not understood?",
        options: [
          "That matter and antimatter versions behave differently, a candidate thread in why the universe contains matter",
          "Their electric charge",
          "Their colour",
          "Their taste",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 3, quote: "the only known particles whose behaviour differs between matter and antimatter versions in a way that is measured but not understood" }],
          explanation:
            "The asymmetry between particle and antiparticle versions is the open datum. The item checks the property tied to the matter-antimatter question.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The closing statement — 'a sentence that describes much of the best science, and all of its patience' — characterises the field's position as",
        options: [
          "holding a thread worth pulling, with no promise of what pulling it will show",
          "complete and closed",
          "hopeless",
          "purely technical",
        ],
        correct: 0,
        meta: {
          skills: ["inference", "vocabulary"],
          evidence: [{ block: 0, paragraph: 3, quote: "the thread is held, and that nothing more is known than that it is worth pulling" }],
          explanation:
            "The metaphor commits to the value of the inquiry while refusing its result in advance. The item checks the epistemic humility the last sentence enacts.",
        },
      },
    ],
    vocabulary: [
      { word: "recoil", partOfSpeech: "noun", definition: "the kick given to a struck atom" },
      { word: "supernova", partOfSpeech: "noun", definition: "the explosive death of a star" },
      { word: "unimpeded", partOfSpeech: "adjective", definition: "without anything blocking the way" },
      { word: "cosmic rays", partOfSpeech: "noun", definition: "high-energy particles arriving from space" },
      { word: "antimatter", partOfSpeech: "noun", definition: "matter's mirror, opposite in charge" },
      { word: "cosmology", partOfSpeech: "noun", definition: "the study of the universe's origin and structure" },
    ],
    grammar: [
      "The passage's first paragraph ends in a purpose clause chain ('built underground, of enormous volume, and run for years, to catch…') — three coordinated participles resolving into one infinitive of purpose.",
      "The final paragraph's reflexive formulation ('a sentence that describes much of the best science') turns the field's own summary into a general epigram — self-quotation as closure.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "academic-passage",
    slug: "toefl-rb-acad-33",
    title: "Bringing a fresco back from the dead",
    subject: "Art conservation",
    difficulty: 5,
    estimatedMinutes: 10,
    passage: {
      heading: "Bringing a fresco back from the dead",
      paragraphs: [
        "A fresco is painted into wet plaster, which means the painting and the wall are one object: the pigment is bound as the plaster sets, and what survives survives as a chemical fact, not as a layer sitting on top. This is why fresco failures are structural. Water moving through a wall carries salts that crystallise and push the surface apart; a fresco dies by losing its face, and the loss is not a surface problem but a building problem — the wall's dampness, its heating, its roof.",
        "The conservation responses are therefore oblique. The first intervention is usually not to the painting at all: it is to the water — repairing roofs, drains and rising damp, and then waiting, sometimes years, until the wall is dry and the salts have stopped their work. Only after the building is stabilised does the conservator address the painted surface, and the treatments there are deliberately modest in ambition: consolidating what is loose, removing what is provably later, filling losses with neutral tone so that the eye reads the composition without being lied to about the damage.",
        "The ethics of the field are unusually explicit, and one episode made them so. A celebrated restoration of a chapel ceiling in the late twentieth century removed centuries of darkened varnish and overpaint and was criticised, in a debate that lasted for years, for going too far — for presenting the work as its maker first painted it rather than as the object that history had made. The settled conventions since then lean the other way: minimum intervention, visible distinctions between original and added material, reversibility of whatever is added, and documentation of every act, so that a future conservator, disagreeing, can undo what was done.",
        "What the public is often unprepared for is that conservation is visible reasoning rather than restoration to a pristine state. The finished wall carries its history in plain sight — losses filled flat, old repairs left legible, the whole governed by the rule that nothing should pretend to be what it is not. The rule has a dignity to it, and it is not an aesthetic preference only: a fresco is a primary source, and the discipline's task is to keep it readable, for everyone, for as long as the building lasts — which is why the field's own summary of its work is not 'we made it new' but 'we kept it honest'.",
      ],
    },
    questions: [
      {
        kind: "mcq", no: 1,
        stem: "Why does the passage say fresco failures are structural?",
        options: [
          "Because the painting is bound into the plaster as it sets — the painting and the wall are one object",
          "Because frescoes are framed separately",
          "Because pigment sits on top",
          "Because walls never fail",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 0, quote: "the painting and the wall are one object: the pigment is bound as the plaster sets" }],
          explanation:
            "The unity of painting and support makes damage structural. The item checks the premise the first paragraph establishes, which is why fixing the wall, not the image, comes first.",
        },
      },
      {
        kind: "mcq", no: 2,
        stem: "What is usually the first intervention, and for how long may it take?",
        options: [
          "Repairing the water — roofs, drains, rising damp — then waiting, sometimes years, for the wall to dry",
          "Repainting at once",
          "Varnishing",
          "Moving the wall",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "The first intervention is usually not to the painting at all: it is to the water — repairing roofs, drains and rising damp, and then waiting, sometimes years" }],
          explanation:
            "Treatment begins outside the image, with the building's water, and patience is part of the method. The item checks the oblique ordering the paragraph describes.",
        },
      },
      {
        kind: "mcq", no: 3,
        stem: "What does the passage say the surface treatments are, in ambition?",
        options: [
          "Deliberately modest: consolidating, removing what is provably later, filling losses with neutral tone",
          "Total repainting",
          "Whitewashing",
          "Replacement with copies",
        ],
        correct: 0,
        meta: {
          skills: ["details", "comprehension"],
          evidence: [{ block: 0, paragraph: 1, quote: "the treatments there are deliberately modest in ambition: consolidating what is loose, removing what is provably later, filling losses with neutral tone" }],
          explanation:
            "The aim is legibility without deception. The item checks the restraint the paragraph spells out, with neutral fills that never pretend to be original.",
        },
      },
      {
        kind: "mcq", no: 4,
        stem: "What criticism followed the celebrated chapel-ceiling restoration?",
        options: [
          "That it went too far, presenting the work as first painted rather than as history had made it",
          "That it was too cautious",
          "That it changed the subject",
          "That it took too long",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "for going too far — for presenting the work as its maker first painted it rather than as the object that history had made" }],
          explanation:
            "The objection was about the object's identity: original moment versus accumulated history. The item checks the exact terms of the criticism.",
        },
      },
      {
        kind: "mcq", no: 5,
        stem: "Which conventions does the passage say have been settled since?",
        options: [
          "Minimum intervention, visible distinctions, reversibility, and documentation of every act",
          "Full repainting",
          "Anonymous work",
          "Speed above all",
        ],
        correct: 0,
        meta: {
          skills: ["details"],
          evidence: [{ block: 0, paragraph: 2, quote: "Minimum intervention, visible distinctions between original and added material, reversibility of whatever is added, and documentation of every act" }],
          explanation:
            "The four-item convention list is the field's settled ethic. The item checks the list, including the rationale that a future conservator can undo.",
        },
      },
      {
        kind: "mcq", no: 6,
        stem: "The final summary 'we kept it honest' expresses the view that conservation's task is to",
        options: [
          "keep the object readable without pretending it is what it is not",
          "return it to its first day",
          "make it decorative",
          "sell it",
        ],
        correct: 0,
        meta: {
          skills: ["main-ideas", "inference"],
          evidence: [{ block: 0, paragraph: 3, quote: "the whole governed by the rule that nothing should pretend to be what it is not" }],
          explanation:
            "The closing formula makes honesty the discipline's product. The item checks the aphorism the passage ends on, which ties ethics to readability.",
        },
      },
    ],
    vocabulary: [
      { word: "fresco", partOfSpeech: "noun", definition: "a painting executed into wet plaster" },
      { word: "plaster", partOfSpeech: "noun", definition: "the wall material that sets around the pigment" },
      { word: "salts", partOfSpeech: "noun", definition: "minerals carried by water that crystallise and push surfaces apart" },
      { word: "consolidating", partOfSpeech: "verb", definition: "stabilising what is loose before anything else is done" },
      { word: "reversibility", partOfSpeech: "noun", definition: "the property of being undoable later" },
      { word: "primary source", partOfSpeech: "noun", definition: "an original record, not a later account" },
    ],
    grammar: [
      "The passage marks its key causal claim with a colon — 'a fresco dies by losing its face, and the loss is not a surface problem but a building problem' — the 'not… but' frame doing the reclassification.",
      "The final paragraph's closing quotation ('we kept it honest') uses the field's own words as verdict, a device of testimony-as-conclusion.",
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
