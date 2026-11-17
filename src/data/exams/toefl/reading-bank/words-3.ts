/**
 * TOEFL Reading Practice Library — Complete the Words, batch 3 (PROMPT 49).
 *
 * Seven standard exercises (difficulty 3). Academic-adjacent general topics
 * with the morphology that carries the step up: -tion/-ation/-ment nouns,
 * -ous/-ive adjectives, y-to-ies plurals, participial phrases. 9 masked
 * words per passage. All passages are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const words3Exercises: ToeflReadingExercise[] = [
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-15",
    title: "The printing revolution",
    topic: "History of books",
    difficulty: 3,
    estimatedMinutes: 7,
    passage:
      "Before printing, a book cost what a house costs a worker today. Copyists in monasteries produc___ perhaps two manuscripts a year, so a library of a hundred volumes was a princely treas___. Gutenberg's press changed the economics of the page: by 1500, print___ workshops had spread through two hundred European cities, and eight million books were already in circul___. The change was not only in quantity. Errors that copyists had reproduc___ faithfully for centuries could now be corrected in one edit___ and stay corrected in every copy after it. Scholars could cite exact pages, and disagree___ with another scholar became a conversation carried on in print rather than an insult deliv___ in person. Within a century, the price of ideas had detach___ itself from the price of sheepskin.",
    questions: [
      {
        kind: "words", no: 1, masked: "produc___", answer: "produced",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Two manuscripts a year was the industry's entire output; the past tense reports the pre-print economy of the page, before the press multiplied it.",
          grammarNote: "Past tense after 'copyists'; the e is kept and the c stays soft before -ed.",
        },
      },
      {
        kind: "words", no: 2, masked: "treas___", answer: "treasury",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "A hundred hand-copied volumes were wealth on the level of a noble estate; the noun names the store, and 'princely' scales it to a ruler's fortune.",
          grammarNote: "Noun in -ury naming the store of treasure; the adjective 'princely' sets the scale.",
        },
      },
      {
        kind: "words", no: 3, masked: "print___", answer: "printing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The workshops are named after the new technology; the -ing form acts as an adjective, naming the trade each city ran on after 1500.",
          grammarNote: "Gerund as an adjective before 'workshops' — the present participle names the trade.",
        },
      },
      {
        kind: "words", no: 4, masked: "circul___", answer: "circulation",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Eight million copies existed in readers' hands; the -ation noun is the fixed phrase for money or books passing around an economy.",
          grammarNote: "Noun in -ation built on the verb circulate; 'in circulation' is the fixed phrase.",
        },
      },
      {
        kind: "words", no: 5, masked: "reproduc___", answer: "reproduced",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Copyists repeated even the mistakes of their exemplar; the past perfect carries the irony that fidelity preserved errors as faithfully as text.",
          grammarNote: "Past participle after 'had'; the errors were copied along with the text.",
        },
      },
      {
        kind: "words", no: 6, masked: "edit___", answer: "edition",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "A single corrected printing run fixes an error everywhere at once; the noun names the whole print run, which is the unit that changed.",
          grammarNote: "Noun in -ion; 'one edition' means one corrected print run, not one book.",
        },
      },
      {
        kind: "words", no: 7, masked: "disagree___", answer: "disagreement",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Quarrels between scholars turned into published debate; the -ment noun lets the sentence treat the abstract conflict as a thing that changed form.",
          grammarNote: "Noun built on the verb disagree with -ment; it becomes the subject of 'became'.",
        },
      },
      {
        kind: "words", no: 8, masked: "deliv___", answer: "delivered",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The contrast is between printed argument and personal slight; the participle modifies the noun passively, the insult being given face to face.",
          grammarNote: "Past participle in a reduced relative clause: an insult delivered in person.",
        },
      },
      {
        kind: "words", no: 9, masked: "detach___", answer: "detached",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Ideas stopped costing what their medium cost; the participle reports the separation of price from material, and 'within a century' measures the speed.",
          grammarNote: "Past perfect participle after 'had'; the price separated itself from the old material.",
        },
      },
    ],
    vocabulary: [
      { word: "copyist", partOfSpeech: "noun", definition: "a person whose job was to copy books by hand" },
      { word: "manuscript", partOfSpeech: "noun", definition: "a hand-written book, before printing" },
      { word: "volume", partOfSpeech: "noun", definition: "one book, especially in a library" },
      { word: "sheepskin", partOfSpeech: "noun", definition: "parchment, the writing material of manuscripts" },
      { word: "quantity", partOfSpeech: "noun", definition: "the amount of something, here the number of copies" },
      { word: "princely", partOfSpeech: "adjective", definition: "on the scale of a ruler's wealth" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-16",
    title: "Bees, blossoms and the economics of pollination",
    topic: "Biology",
    difficulty: 3,
    estimatedMinutes: 7,
    passage:
      "A third of the food on your plate owes its exist___ to a pollin___, and most of that work is done by bees. The trade works because both parties leave satisfi___: the flower pays in nectar, the bee carries pollen between bloss___ while hunting for it. A single colony visits millions of flowers in a season, so a meadow of plants is a supermarket arrang___ shelf by shelf. Farmers rent hives the way they rent machinery, and orchards bargain for boxes of bees at blossom time. The arrangement is fragile: sprays that protect a crop can weaken the colon___ that serve it, and a meadow flatt___ into a parking lot feeds no one. Protect___ pollinators is less charity than bookkeep___: the ledger clears only if both sides stay in business.",
    questions: [
      {
        kind: "words", no: 1, masked: "exist___", answer: "existence",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The sentence credits pollinators for a third of our food; the -ence noun turns the verb into the thing owed, and the phrase is standard.",
          grammarNote: "Abstract noun in -ence built on the verb exist; 'owes its existence to' is the fixed phrase.",
        },
      },
      {
        kind: "words", no: 2, masked: "pollin___", answer: "pollinator",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The opening names the worker before naming the bee; the -ator noun covers bees and everything else that moves pollen for a living.",
          grammarNote: "Agent noun in -ator built on the verb pollinate; the doer of the work.",
        },
      },
      {
        kind: "words", no: 3, masked: "satisfi___", answer: "satisfied",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The exchange benefits flower and bee at once; the -ed participle after 'leave' reports the resulting state of both parties.",
          grammarNote: "Resultative participle after 'leave': both parties leave satisfied — the state each side ends in.",
        },
      },
      {
        kind: "words", no: 4, masked: "bloss___", answer: "blossoms",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Pollen rides from flower to flower; the plural matches the millions of visits, and the preposition 'between' needs more than one landing place.",
          grammarNote: "Plural noun after 'between'; blossom takes -s, and the bee's legs do the carrying.",
        },
      },
      {
        kind: "words", no: 5, masked: "arrang___", answer: "arranged",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The meadow is compared to a laid-out shop; the participle carries a passive meaning, describing what the meadow looks like to a foraging bee.",
          grammarNote: "Past participle as a reduced passive: a supermarket arranged shelf by shelf.",
        },
      },
      {
        kind: "words", no: 6, masked: "colon___", answer: "colonies",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The sprays harm the very hives that serve the crop; the plural of colony swaps y for ies, and the sentence turns on that one word.",
          grammarNote: "The plural of colony turns its y into ies — the classic y-plural rule.",
        },
      },
      {
        kind: "words", no: 7, masked: "flatt___", answer: "flattened",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Development is the other threat; the participle reports what happens to the meadow, and the parking lot is the image of loss.",
          grammarNote: "Past participle after 'a meadow'; the passive result of development.",
        },
      },
      {
        kind: "words", no: 8, masked: "Protect___", answer: "Protecting",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The closing definition recasts conservation as accounting; the gerund lets an activity serve as the sentence's subject, which is why the -ing form is the only possible completion here.",
          grammarNote: "Gerund as the subject of 'is'; the -ing noun names the whole activity.",
        },
      },
      {
        kind: "words", no: 9, masked: "bookkeep___", answer: "bookkeeping",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The metaphor is a ledger; the compound noun bookkeeping names the whole activity of keeping accounts, and the comparison is with charity.",
          grammarNote: "Compound gerund noun: book + keeping, with the double k at the join.",
        },
      },
    ],
    vocabulary: [
      { word: "nectar", partOfSpeech: "noun", definition: "the sugary liquid flowers offer visitors" },
      { word: "pollen", partOfSpeech: "noun", definition: "the powder that fertilises other flowers" },
      { word: "orchard", partOfSpeech: "noun", definition: "a field of fruit trees" },
      { word: "hive", partOfSpeech: "noun", definition: "the box a bee colony lives in" },
      { word: "ledger", partOfSpeech: "noun", definition: "the book of accounts in the metaphor" },
      { word: "charity", partOfSpeech: "noun", definition: "kind help given freely, here the wrong frame" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-17",
    title: "Mapping the ocean floor",
    topic: "Geography",
    difficulty: 3,
    estimatedMinutes: 7,
    passage:
      "Until the twentieth centur___, the ocean floor was geography's blank page: sailors crossed it daily and could describe nothing beneath their keels. The first usable map___ of the seabed came from sound, not sight — a war technique repurpos___. Ships ping___ the bottom and timed the echo; the delay told them the depth. By the 1960s these surveys had reveal___ something nobody expect___: a mountain chain forty thousand kilometres long, running down the middle of the Atlantic. That find___ turned the drifting continents from a crank's idea into testable geology. Today the floor is chart___ in finer detail than some cities, and the map keeps filling in one survey at a time.",
    questions: [
      {
        kind: "words", no: 1, masked: "centur___", answer: "century",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The opening frames the timeline; the noun century is the unit the whole first sentence measures against, and the y stays in the singular.",
          grammarNote: "Singular noun in -y; the phrase 'the twentieth century' is a fixed ordinal expression.",
        },
      },
      {
        kind: "words", no: 2, masked: "map___", answer: "mapping",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The product of the surveys is the thing shared with geography; the -ing nominal names the activity whose result is the chart.",
          grammarNote: "Gerund noun before 'of the seabed'; the -ing form turns the verb into the product.",
        },
      },
      {
        kind: "words", no: 3, masked: "repurpos___", answer: "repurposed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Sonar was built to find submarines and ended up drawing the seabed; the past participle carries the second life of the technique.",
          grammarNote: "Past participle after the dash, a reduced passive: a technique that was repurposed.",
        },
      },
      {
        kind: "words", no: 4, masked: "ping___", answer: "pinged",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The ships sent a pulse and waited; the past tense of the borrowed verb ping takes plain -ed, and the sentence explains echo sounding.",
          grammarNote: "Past tense of ping, an onomatopoeic verb taking regular -ed.",
        },
      },
      {
        kind: "words", no: 5, masked: "reveal___", answer: "revealed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The surveys exposed the mid-ocean ridge; the past perfect places the discovery before the 1960s' reinterpretation of it, and in time it re-drew every map of the floor.",
          grammarNote: "Past participle after 'had'; the pluperfect orders discovery before explanation.",
        },
      },
      {
        kind: "words", no: 6, masked: "expect___", answer: "expected",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Nobody predicted a forty-thousand-kilometre mountain range; the participle after 'nobody' carries the surprise the sentence is built on.",
          grammarNote: "Past participle after the indefinite pronoun 'nobody'; reduced relative clause.",
        },
      },
      {
        kind: "words", no: 7, masked: "find___", answer: "finding",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The ridge was the evidence that moved continental drift from ridicule to science; the -ing noun names the discovery as a unit.",
          grammarNote: "Noun in -ing built on the verb find; 'that finding' is the subject of 'turned'.",
        },
      },
      {
        kind: "words", no: 8, masked: "chart___", answer: "charted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The passive reports the state of the map today; the -ed participle after 'is' means the floor has been drawn in detail.",
          grammarNote: "Past participle in a present passive: 'is charted' — state, not action.",
        },
      },
    ],
    vocabulary: [
      { word: "keel", partOfSpeech: "noun", definition: "the beam along the bottom of a ship" },
      { word: "seabed", partOfSpeech: "noun", definition: "the ground under the ocean" },
      { word: "echo", partOfSpeech: "noun", definition: "the reflected sound that returns" },
      { word: "survey", partOfSpeech: "noun", definition: "a systematic measuring of an area" },
      { word: "crank", partOfSpeech: "noun", definition: "a person dismissed as obsessive or wrong" },
      { word: "drifting", partOfSpeech: "adjective", definition: "slowly moving, here the continents" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-18",
    title: "The origins of writing",
    topic: "Linguistics",
    difficulty: 3,
    estimatedMinutes: 7,
    passage:
      "Writing began, as far as we can tell, with accountants, not poets. The earliest tablets from Mesopotamia record grain and goats, not epics. Each shipment was mark___ with a symbol press___ into clay, and the symbols grad___ grew into signs for sounds. Egyptian scribes trimm___ the system further; Chinese scholars develop___ theirs independently, and Mesoamerican peoples did the same without any contact. What all three lines share is the drive to make speech surviv___ its speaker. Humans spoke for tens of thousands of years before anything was written, yet once writing appear___, the number of symbols fell and their power rose. A child today learn___ in a few years what took civiliz___ millennia to work out.",
    questions: [
      {
        kind: "words", no: 1, masked: "mark___", answer: "marked",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Each delivery carried its symbol; the past participle builds the passive, the shipment being the thing recorded on the tablet.",
          grammarNote: "Past participle after 'was': the passive records the practice on the tablets.",
        },
      },
      {
        kind: "words", no: 2, masked: "press___", answer: "pressed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The stylus went into wet clay; the participle modifies 'symbol' passively, the pressing done by the scribe's hand, and it sits parallel to 'marked' in the same clause.",
          grammarNote: "A second participle in the same clause, parallel with 'marked'.",
        },
      },
      {
        kind: "words", no: 3, masked: "grad___", answer: "gradually",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The change happened over generations; the adverb in -ly scales the verb 'grew', and the sentence's whole point is its slowness.",
          grammarNote: "Adverb in -ly modifying 'grew'; the -ual adjective gradual gives the adverb.",
        },
      },
      {
        kind: "words", no: 4, masked: "trimm___", answer: "trimmed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Egyptian practice cut the sign list down; the past tense needs the doubled m, the short-vowel rule again, and the meaning is pruning.",
          grammarNote: "Past tense with doubling: trim gives trimmed, like drop and stop.",
        },
      },
      {
        kind: "words", no: 5, masked: "develop___", answer: "developed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Chinese writing arose on its own; the past tense reports the independent invention, and the -ed form keeps the e.",
          grammarNote: "Past tense of develop, the e kept; the clause parallels 'trimmed'.",
        },
      },
      {
        kind: "words", no: 6, masked: "surviv___", answer: "survive",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The definition of writing is speech outlasting its speaker; the bare infinitive after 'make' needs no ending, and that is the point.",
          grammarNote: "Bare infinitive after 'make': make speech survive — no to, no -s.",
        },
      },
      {
        kind: "words", no: 7, masked: "appear___", answer: "appeared",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Once writing existed, symbols shrank and power grew; the past tense anchors the contrast clause in the historical moment, and the whole surprise of the passage hangs on that 'yet'.",
          grammarNote: "Past tense after 'once'; the clause sets the condition for the whole contrast.",
        },
      },
      {
        kind: "words", no: 8, masked: "learn___", answer: "learns",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The present tense states a standing fact; the third-person singular takes -s, and the child is the subject of the closing comparison.",
          grammarNote: "Third-person singular -s in the present: 'a child today learns'.",
        },
      },
      {
        kind: "words", no: 9, masked: "civiliz___", answer: "civilizations",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The plural subject of 'took' is whole societies; the -ization noun gets the plural -s, and the closing line measures the bargain.",
          grammarNote: "Plural noun in -izations; the subject of 'took' needs the plural form.",
        },
      },
    ],
    vocabulary: [
      { word: "tablet", partOfSpeech: "noun", definition: "a flat slab of clay used for writing" },
      { word: "epic", partOfSpeech: "noun", definition: "a long poem about heroes" },
      { word: "shipment", partOfSpeech: "noun", definition: "a delivery of goods, here grain and goats" },
      { word: "scribe", partOfSpeech: "noun", definition: "a professional writer in ancient societies" },
      { word: "millennia", partOfSpeech: "noun", definition: "thousands of years — singular millennium" },
      { word: "symbol", partOfSpeech: "noun", definition: "a mark that stands for something else" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-19",
    title: "Sleep and memory",
    topic: "Psychology",
    difficulty: 3,
    estimatedMinutes: 7,
    passage:
      "Sleep is not the pause button students wish it were. During deep sleep the brain replays the day's learning at a compress___ speed, and the replay is not decoration: neurons that fired together while you practic___ fire again while you sleep, strengthen___ the connections between them. In one experiment, two groups learn___ the same finger sequence; the group allow___ to sleep improved signific___ more than the group kept awake. The effect extends to insight: volunteers puzzl___ over a hidden rule were twice as likely to spot it after eight hours of sleep. Nobody understands the machinery, but the practical lesson is uncomfort___: revision that costs sleep is not revision; the night is part of the work, and the examin___ that follows rewards the sleeper, not the martyr.",
    questions: [
      {
        kind: "words", no: 1, masked: "compress___", answer: "compressed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The replay runs faster than life; the past participle acts as an adjective before 'speed', and compression is the experiment's finding.",
          grammarNote: "Past participle as an adjective before the noun it modifies.",
        },
      },
      {
        kind: "words", no: 2, masked: "practic___", answer: "practiced",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The firing happened while awake; the past tense after 'while you' carries the daytime half of the comparison, and the completion restores the -ed of the verb.",
          grammarNote: "Past tense after 'while you'; American spelling practiced, British practised — the blank accepts the stem's natural ending.",
        },
      },
      {
        kind: "words", no: 3, masked: "strengthen___", answer: "strengthening",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The replay has a result; the present participle attaches the outcome to the firing, and the verb is the mechanism of learning itself.",
          grammarNote: "Participial phrase of result: the -ing form carries the consequence.",
        },
      },
      {
        kind: "words", no: 4, masked: "learn___", answer: "learned",
        alternatives: ["learnt"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Both groups got the same input; the past tense sets up the controlled comparison, and both regular and irregular forms are accepted.",
          grammarNote: "Past tense of learn: learned in American use, learnt in British — both accepted.",
        },
      },
      {
        kind: "words", no: 5, masked: "allow___", answer: "allowed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The design difference is permission to sleep; the past participle builds the reduced passive that names the experimental group, and everything the passage concludes depends on it.",
          grammarNote: "Past participle after 'the group'; reduced passive: the group that was allowed.",
        },
      },
      {
        kind: "words", no: 6, masked: "signific___", answer: "significantly",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The size of the gap is the finding; the adverb in -ly scales 'more', and without it the sentence loses its whole quantitative point.",
          grammarNote: "Adverb in -ly modifying the comparative 'more'; significant gives significantly.",
        },
      },
      {
        kind: "words", no: 7, masked: "puzzl___", answer: "puzzling",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The volunteers worked at the rule before sleeping; the participle attaches their struggling to the main clause about the night's effect.",
          grammarNote: "Present participle after the noun, a reduced clause: who were puzzling over it.",
        },
      },
      {
        kind: "words", no: 8, masked: "uncomfort___", answer: "uncomfortable",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The lesson costs the reader something; the negative adjective built on comfort carries the pressure of the closing argument, and only that word has the required prefix.",
          grammarNote: "Adjective built on comfort with -able and the negative prefix un-.",
        },
      },
      {
        kind: "words", no: 9, masked: "examin___", answer: "examination",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The formal noun closes the argument; the -ation form fits the register better than the clipped word, and the sleeper is its subject.",
          grammarNote: "Noun in -ation; the formal register suits the final sentence of the passage.",
        },
      },
    ],
    vocabulary: [
      { word: "neuron", partOfSpeech: "noun", definition: "a nerve cell that carries signals" },
      { word: "replay", partOfSpeech: "noun", definition: "a repeat performance of something" },
      { word: "sequence", partOfSpeech: "noun", definition: "an ordered series, here of finger movements" },
      { word: "insight", partOfSpeech: "noun", definition: "a sudden understanding of a hidden pattern" },
      { word: "martyr", partOfSpeech: "noun", definition: "someone who suffers, here needlessly, for a cause" },
      { word: "revision", partOfSpeech: "noun", definition: "studying material again before an exam" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-20",
    title: "The salt roads of the Sahara",
    topic: "History of trade",
    difficulty: 3,
    estimatedMinutes: 7,
    passage:
      "Salt is cheap now because geolog___ made it common and engineers made it easy; for most of history it was neither. In the Sahara, slabs of salt were cut from desert mines and carri___ by camel caravan to the river towns, where a trader could exchange one slab for its weight in gold — not because gold was rare there, but because salt was rarer. Empires tax___ the routes and grew rich on the duties; cities rose where the caravans water___, and fell when the routes shift___. Soldiers in Rome were paid in salt money, the salarium, which is where the word salary surviv___. A bag of salt buys less gold now, but the desert rememb___ who carried the season___ on the backs of camels.",
    questions: [
      {
        kind: "words", no: 1, masked: "geolog___", answer: "geology",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The opening credits two forces for salt's modern price; the -y noun names the science, paired with engineers for the second half.",
          grammarNote: "Noun in -y naming the science; the pair 'geology and engineers' shares the verb 'made'.",
        },
      },
      {
        kind: "words", no: 2, masked: "carri___", answer: "carried",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The slabs travelled by camel; the irregular verb changes its y to i before -ed, and the passive 'were cut and carried' carries the trade.",
          grammarNote: "Irregular spelling change: carry becomes carried, the y turning to ied.",
        },
      },
      {
        kind: "words", no: 3, masked: "tax___", answer: "taxed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The empires lived on the levies; the past tense joins 'grew rich' in a coordinated pair, and the duties are the tariff on the route.",
          grammarNote: "Past tense of tax, the x taking plain -ed; coordinated with 'grew'.",
        },
      },
      {
        kind: "words", no: 4, masked: "water___", answer: "watered",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The cities grew at the wells where camels drank; the verb is used of animals and places alike, and the past tense carries the oasis economy.",
          grammarNote: "Past tense of water used of livestock and caravans: to take in water.",
        },
      },
      {
        kind: "words", no: 5, masked: "shift___", answer: "shifted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The towns died when the trade moved; the past tense pairs with 'rose' earlier, and the sentence turns on the word 'when'.",
          grammarNote: "Past tense in the when-clause; the pair 'rose and fell' frames it.",
        },
      },
      {
        kind: "words", no: 6, masked: "surviv___", answer: "survives",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The etymology is the passage's gift; the third-person singular -s keeps the present tense for a fact that still holds in English.",
          grammarNote: "Third-person singular -s in the present: the word salary survives to this day.",
        },
      },
      {
        kind: "words", no: 7, masked: "season___", answer: "seasoning",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The closing image is the camel trains; the -ing noun means the thing that seasons food, and the phrase is deliberately humble.",
          grammarNote: "Noun in -ing built on the verb season; 'the seasoning' = what makes food taste.",
        },
      },
      {
        kind: "words", no: 8, masked: "rememb___", answer: "remembers",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The desert is given a memory; the third-person singular takes -s, and the personification carries the closing line's regret.",
          grammarNote: "Third-person singular -s in the present: the singular subject 'the desert' takes -s.",
        },
      },
    ],
    vocabulary: [
      { word: "slab", partOfSpeech: "noun", definition: "a thick flat piece of something" },
      { word: "caravan", partOfSpeech: "noun", definition: "a group of travellers with animals, crossing together" },
      { word: "duties", partOfSpeech: "noun", definition: "taxes charged on trade goods" },
      { word: "salarium", partOfSpeech: "noun", definition: "the Roman soldier's salt money, origin of 'salary'" },
      { word: "route", partOfSpeech: "noun", definition: "the established way traders travel" },
      { word: "trader", partOfSpeech: "noun", definition: "a person who makes a living by exchange" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-21",
    title: "The physics of bicycle gears",
    topic: "Physics",
    difficulty: 3,
    estimatedMinutes: 7,
    passage:
      "A bicycle is a machine for trad___ force for distance, and gears are its bargain___ table. On a hill the chain moves to a larger sprock___ at the wheel and a smaller one at the pedals: each pedal turn spins the wheel fewer times, so you climb at the cost of speed. The deal obey___ a conservation law — no gear gives you something for nothing. Gears manage your cadence: your legs are an engine with a narrow comfort band, roughly sixty to ninety revolut___ a minute, and the gear train keeps the engine inside it. The first derailleur was ban___ from racing for being unfair; it now hides inside every commut___'s frame, doing quietly what a century of physics has refine___.",
    questions: [
      {
        kind: "words", no: 1, masked: "trad___", answer: "trading",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The definition of the machine is an exchange; the gerund after 'for' names the activity, and force-for-distance is the whole physics of it.",
          grammarNote: "Gerund after the preposition 'for'; the -ing noun names the exchange.",
        },
      },
      {
        kind: "words", no: 2, masked: "bargain___", answer: "bargaining",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The metaphor extends the trade image; the -ing noun modifies 'table', and the gears negotiate on the rider's behalf, which is why the gerund is required here.",
          grammarNote: "Gerund as an adjective before 'table', continuing the trade metaphor.",
        },
      },
      {
        kind: "words", no: 3, masked: "obey___", answer: "obeys",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The law has authority over the machine; the third-person singular -s agrees with 'the deal', and conservation is the passage's spine.",
          grammarNote: "Third-person singular -s: the subject is 'the deal', so the verb takes -s.",
        },
      },
      {
        kind: "words", no: 4, masked: "revolut___", answer: "revolutions",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Cadence is counted per minute; the plural noun matches 'sixty to ninety', and the phrase is the standard measure of pedalling rate.",
          grammarNote: "Plural noun in -ions; the range 'sixty to ninety' forces the plural.",
        },
      },
      {
        kind: "words", no: 5, masked: "sprock___", answer: "sprocket",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The chain runs on toothed wheels; the noun names the part, and the larger one at the wheel is what eases the climb.",
          grammarNote: "Noun in -et built on the root sprock; the part name is the passage's key technical term.",
        },
      },
      {
        kind: "words", no: 6, masked: "ban___", answer: "banned",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The racing authorities treated the new part as cheating; the passive 'was banned' carries the anecdote, and the doubled n follows the doubling rule.",
          grammarNote: "Passive past participle with doubling: ban gives banned, like running and planning.",
        },
      },
      {
        kind: "words", no: 7, masked: "commut___", answer: "commuter",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The closing contrast is racer and everyday rider; the -er noun names the person who travels to work, and the possessive follows.",
          grammarNote: "Agent noun in -er built on the verb commute; the possessive 's attaches after it.",
        },
      },
      {
        kind: "words", no: 8, masked: "refine___", answer: "refined",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The perfect tense spans the century; the past participle completes 'has', and the quiet verb closes the passage's argument with the smallest possible fanfare.",
          grammarNote: "Present perfect with 'has'; the past participle is refined, the e kept.",
        },
      },
    ],
    vocabulary: [
      { word: "sprocket", partOfSpeech: "noun", definition: "the toothed wheel the chain runs on" },
      { word: "cadence", partOfSpeech: "noun", definition: "the rhythm or rate of pedalling" },
      { word: "derailleur", partOfSpeech: "noun", definition: "the mechanism that moves the chain between gears" },
      { word: "conservation", partOfSpeech: "noun", definition: "the physics principle that totals stay constant" },
      { word: "band", partOfSpeech: "noun", definition: "a range between two limits" },
      { word: "pedal", partOfSpeech: "noun", definition: "the lever your foot pushes" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
