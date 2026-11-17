/**
 * TOEFL Reading Practice Library — Complete the Words, batch 5 (PROMPT 49).
 *
 * Six advanced exercises (difficulty 5): the hardest tier. Dense academic
 * prose with the full morphology the task draws on — nominalisation,
 * negative prefixes, participial adjectives, borrowed spellings. 9–10
 * masked words per passage, every mask embedded exactly once. All passages
 * are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const words5Exercises: ToeflReadingExercise[] = [
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-29",
    title: "The economics of attention",
    topic: "Economics",
    difficulty: 5,
    estimatedMinutes: 9,
    passage:
      "Attention is the one market in which every buyer arrives with the same budget. No one can purchase a twenty-fifth hour, so advertisers compet___ for slices of a supply that cannot be expand___, and the price of a slice is set by how cleverly it can be taken. Economists were slow to treat attention as a scarce resource because it leaves no invoice; the cost of a distract___ evening is never itemis___ anywhere. The platforms that solved this did not sell anything to the people whose attention they traded — they sold the audience, aggregat___ and measur___, to whoever paid for certain___. The critic___ who call the arrange___ exploit___ are using an old word for a new transaction, but the word fits: the resource was never the customers' to sell.",
    questions: [
      {
        kind: "words", no: 1, masked: "compet___", answer: "compete",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The advertisers fight for slices; the bare infinitive after the plural verb carries the struggle, and the fixed budget is what makes it a zero-sum contest.",
          grammarNote: "Present tense after a plural subject; compete keeps its final e.",
        },
      },
      {
        kind: "words", no: 2, masked: "expand___", answer: "expanded",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The supply of hours is fixed; the passive participle after 'cannot be' states the constraint the whole market argument rests on, and no other completion fits the slot.",
          grammarNote: "Past participle after 'cannot be': the passive states an impossibility.",
        },
      },
      {
        kind: "words", no: 3, masked: "distract___", answer: "distracted",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The evening whose cost is never billed is the one spent nowhere; the participle as adjective names the state, and the sentence's point is its invisibility in accounts.",
          grammarNote: "Participial adjective before 'evening': the state produced by the platforms' design.",
        },
      },
      {
        kind: "words", no: 4, masked: "itemis___", answer: "itemised",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The cost of distraction appears on no bill; the participle after 'is never' borrows the language of invoices, and the s spelling is the British form of the ending.",
          grammarNote: "Past participle in the present passive; itemise gives itemised with its s.",
        },
      },
      {
        kind: "words", no: 5, masked: "aggregat___", answer: "aggregated",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The platform's product is the crowd in bulk; the participle as adjective means gathered into a mass, and it is precisely what an individual user cannot see happening.",
          grammarNote: "Past participle as an adjective; it sits in apposition to 'measured'.",
        },
      },
      {
        kind: "words", no: 6, masked: "measur___", answer: "measured",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The audience is sold as counted numbers; the participle as adjective carries the commodity logic — people converted into metrics on someone else's sheet.",
          grammarNote: "Past participle as an adjective; it coordinates with 'aggregated' in the same phrase.",
        },
      },
      {
        kind: "words", no: 7, masked: "certain___", answer: "certainty",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "What the buyer purchases is predictability about people; the abstract noun in -ty names the product, and the irony is that people are the goods, not the clients.",
          grammarNote: "Abstract noun in -ty; certain gives certainty with the a kept.",
        },
      },
      {
        kind: "words", no: 8, masked: "critic___", answer: "critics",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The passage's opening voices return at the close; the plural noun names them, and the final sentence's ledger language is addressed to them.",
          grammarNote: "Plural noun; the base critic takes plain -s in the plural.",
        },
      },
      {
        kind: "words", no: 9, masked: "arrange___", answer: "arrangement",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The neutral noun lets the passage hold the deal at arm's length before judging it; the -ment nominalisation turns the verb arrange into the thing being criticised.",
          grammarNote: "Noun in -ment built on arrange; the noun is the subject of the criticism.",
        },
      },
      {
        kind: "words", no: 10, masked: "exploit___", answer: "exploitative",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The critics reach for an old moral vocabulary; the -ative adjective names the transaction's character, and the passage's question is whether the old word fits the new deal.",
          grammarNote: "Adjective in -ative built on exploit; the spelling keeps the whole of the base word.",
        },
      },
    ],
    vocabulary: [
      { word: "slice", partOfSpeech: "noun", definition: "a share of something divided" },
      { word: "invoice", partOfSpeech: "noun", definition: "a bill listing charges" },
      { word: "platform", partOfSpeech: "noun", definition: "the digital service that mediates the trade" },
      { word: "transaction", partOfSpeech: "noun", definition: "a deal between parties" },
      { word: "scarce", partOfSpeech: "adjective", definition: "available in too small an amount" },
      { word: "budget", partOfSpeech: "noun", definition: "the fixed amount available to spend" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-30",
    title: "Epigenetics: the inheritance above the genes",
    topic: "Biology of heredity",
    difficulty: 5,
    estimatedMinutes: 9,
    passage:
      "The genome was once imagin___ as a sealed library: fixed at conception, consult___ by every cell, identical until death. The second half of the twentieth century complicated the picture with a mechanism that does not change the text but changes which volumes are open. Chemical marks attach to the DNA and to the proteins around it, silenc___ some genes and amplif___ others in response to famine, stress or tobacco smoke. The awkward finding is that a few marks survive the boundary between generations, so a grandmother's depriv___ can echo in a grandchild's metabol___. Journalists overstat___ the reach of the effect, and geneticists spend their conferences apologis___ for the exaggerat___ headlines, but the core discovery stands: hered___ has a second, softer channel, and the environment writes in it.",
    questions: [
      {
        kind: "words", no: 1, masked: "imagin___", answer: "imagined",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The library metaphor needs the passive participle: the genome was pictured as fixed, and the participle completes the image the sentence then dismantles.",
          grammarNote: "Past participle after 'was once': the passive carries the old assumption.",
        },
      },
      {
        kind: "words", no: 2, masked: "consult___", answer: "consulted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The cells read the fixed text; the participle continues the library metaphor, and the whole point is that the metaphor later breaks.",
          grammarNote: "Past participle in a reduced passive, parallel with 'fixed'.",
        },
      },
      {
        kind: "words", no: 3, masked: "silenc___", answer: "silencing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The marks can switch volumes off; the participle pairs with 'amplifying' later, and the library metaphor is completed by this verb's direction.",
          grammarNote: "Present participle; the verb keeps the e of its noun form silence.",
        },
      },
      {
        kind: "words", no: 4, masked: "amplif___", answer: "amplify",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The marks work in both directions, silencing and boosting; the bare infinitive pairs with 'silencing', and the y-to-i family shows the i in the base.",
          grammarNote: "Bare form coordinated with 'silencing'; amplify keeps its y in the base.",
        },
      },
      {
        kind: "words", no: 5, masked: "depriv___", answer: "deprivation",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The grandmother's hardship is named by the -ation noun; famine and hunger would fit the sense, but the required completion builds the abstract noun the register demands.",
          grammarNote: "Abstract noun in -ation built on deprive; the singular matches 'a grandmother's'.",
        },
      },
      {
        kind: "words", no: 6, masked: "metabol___", answer: "metabolism",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The echo lands in the body's chemistry; the noun in -ism names the process, and the sentence's point is the distance the signal travels across generations.",
          grammarNote: "Noun in -ism; the singular is required after 'a grandchild's'.",
        },
      },
      {
        kind: "words", no: 7, masked: "overstat___", answer: "overstate",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The press inflates the finding; the verb with the prefix over- carries the passage's complaint, and the plural subject 'journalists' takes the bare form.",
          grammarNote: "Verb with the prefix over-; plural subject, present tense, no -s.",
        },
      },
      {
        kind: "words", no: 8, masked: "apologis___", answer: "apologising",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The geneticists spend conferences saying sorry; the participle after 'spend' takes the -ing form, and the British s spelling matches the passage's register.",
          grammarNote: "Spend + gerund: 'spend their conferences apologising' — the -ing form follows 'spend'.",
        },
      },
      {
        kind: "words", no: 9, masked: "exaggerat___", answer: "exaggerated",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The headlines claimed too much; the participle as adjective carries the reproach, and the geneticists' apologies are aimed at exactly those words.",
          grammarNote: "Past participle as an adjective before 'headlines'; the state the articles are in.",
        },
      },
      {
        kind: "words", no: 10, masked: "hered___", answer: "heredity",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The closing sentence redefines the term; the abstract noun names the transmission of traits, and the passage's discovery is that it has two channels, one hard and one soft.",
          grammarNote: "Abstract noun in -ty; the sentence's subject is the redefined concept.",
        },
      },
    ],
    vocabulary: [
      { word: "genome", partOfSpeech: "noun", definition: "the complete set of an organism's genes" },
      { word: "conception", partOfSpeech: "noun", definition: "the moment a new organism begins" },
      { word: "mark", partOfSpeech: "noun", definition: "the chemical tag attached to DNA" },
      { word: "famine", partOfSpeech: "noun", definition: "a severe shortage of food" },
      { word: "channel", partOfSpeech: "noun", definition: "a route through which something passes" },
      { word: "geneticist", partOfSpeech: "noun", definition: "a scientist who studies genes" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-31",
    title: "What the Silk Road actually carried",
    topic: "History",
    difficulty: 5,
    estimatedMinutes: 9,
    passage:
      "The romantic name suggests a single road with silk upon it; the reality was a shift___ web of relays where nothing travel___ the distance. A merchant in Chang'an hand___ a bale to a caravan bound for Dunhuang; a Sogdian middleman carri___ it to Samarkand; a Persian trader took it west of the Euphrates. No one crossed more than a segment, yet ideas cross___ the entire web: Buddhism used the routes for centuries before silk did, and paper, printing and the recipe for gunpowder mov___ along the same relays. Historians argue that the goods were incidental___ to the traffic: the road's last___ exports were techniques and beliefs. The myth of the single road was an export, coin___ by a nineteenth-century geologist who needed a market___ name for a map.",
    questions: [
      {
        kind: "words", no: 1, masked: "shift___", answer: "shifting",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The web moved over time; the participle as adjective carries the instability that separates the reality from the single-road myth of the opening sentence.",
          grammarNote: "Participial adjective before 'web'; the present participle means ever-changing.",
        },
      },
      {
        kind: "words", no: 2, masked: "travel___", answer: "travelled",
        alternatives: ["traveled"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The sentence's point is that no single item covered the route; the participle after 'nothing' builds the passive, and both the doubled and single l spellings are accepted.",
          grammarNote: "Past participle in the passive after 'nothing'; British doubled l, American single — both accepted.",
        },
      },
      {
        kind: "words", no: 3, masked: "hand___", answer: "handed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The Chang'an merchant passes the bale to the next carrier; the past tense starts the relay chain, and the whole passage's structure is this handing-on.",
          grammarNote: "Past tense after 'a merchant'; hand gives handed with plain -ed.",
        },
      },
      {
        kind: "words", no: 4, masked: "carri___", answer: "carried",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The middleman's role is the relay; the past tense of carry turns its y to i, and the sentence's chain of hands depends on this verb.",
          grammarNote: "Past tense with the y-to-ied change; the verb's spelling shift is the point.",
        },
      },
      {
        kind: "words", no: 5, masked: "cross___", answer: "crossed",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "Ideas outdistance goods; the past tense after 'yet ideas' carries the contrast, and the doubled s follows the short-vowel rule like drop and plan.",
          grammarNote: "Past tense with doubling; the contrast clause turns on this verb.",
        },
      },
      {
        kind: "words", no: 6, masked: "mov___", answer: "moved",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Paper and the recipes travelled the same relays; the past tense continues the list, and the claim upgrades techniques over merchandise.",
          grammarNote: "Past tense of move with no e-drop; the verb keeps its e.",
        },
      },
      {
        kind: "words", no: 7, masked: "last___", answer: "lasting",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The exports that endure are the ones nobody billed for; the participle as adjective ranks the cargo by survival rather than by price, and it pairs with the beliefs at the end of the list.",
          grammarNote: "Participial adjective before 'exports'; the verb last gives lasting.",
        },
      },
      {
        kind: "words", no: 8, masked: "incidental___", answer: "incidentally",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The goods were almost accidental to the traffic; the adverb in -ly modifies the whole claim, and the argument upgrades techniques and beliefs to the road's true cargo.",
          grammarNote: "Adverb in -ly built on the adjective incidental; it scales the entire predicate.",
        },
      },
      {
        kind: "words", no: 9, masked: "coin___", answer: "coined",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The name was invented for commerce; the passive participle carries the irony, the myth being the road's last export, made for a map.",
          grammarNote: "Past participle in the passive; 'coin' means to invent a word.",
        },
      },
      {
        kind: "words", no: 10, masked: "market___", answer: "marketable",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The name was chosen to sell; the -able adjective on market carries the joke that the road's name is itself a piece of merchandise.",
          grammarNote: "Adjective in -able built on market; the geologist's motive is the punchline.",
        },
      },
    ],
    vocabulary: [
      { word: "relay", partOfSpeech: "noun", definition: "a stage in a chain, each handing to the next" },
      { word: "bale", partOfSpeech: "noun", definition: "a large bundle of goods, pressed and bound" },
      { word: "caravan", partOfSpeech: "noun", definition: "a group travelling together across a desert" },
      { word: "middleman", partOfSpeech: "noun", definition: "a trader between producer and buyer" },
      { word: "geologist", partOfSpeech: "noun", definition: "a scientist who studies rocks and terrain" },
      { word: "gunpowder", partOfSpeech: "noun", definition: "the explosive mixture invented in China" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-32",
    title: "Quantum sensing",
    topic: "Physics of measurement",
    difficulty: 5,
    estimatedMinutes: 9,
    passage:
      "The strangest properties of quantum mechanics were once discuss___ only as paradoxes; engineers have since learned to sell them. A sensor built on entangl___ particles can be more sensitive than any classical instrument, because entanglement allows measurem___ below the limit that noise impos___ on ordinary devices. The uses are unglamor___ and close to home: locating pipes under streets, spotting tumours earlier, navigating without satellites. What the technology trades on is precis___ obtained at cost — quantum sensors are delicat___, and a passing lorry can wipe the state they have prepared. Laboratories publish with defens___ caution, because the field is littered with claims that had to be retract___ after a fridge or a passing researcher's watch interfer___ with an experiment nobody had thought to shield.",
    questions: [
      {
        kind: "words", no: 1, masked: "discuss___", answer: "discussed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The paradoxes began as seminar talk; the passive participle after 'were once' marks the change from philosophy to engineering, which is the passage's arc.",
          grammarNote: "Past participle in the passive after 'were once'; the arc is the point.",
        },
      },
      {
        kind: "words", no: 2, masked: "entangl___", answer: "entangled",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The linked particles are the sensor's resource; the past participle as adjective names the state, and the sentence's claim of superior sensitivity rests entirely on it.",
          grammarNote: "Past participle as an adjective before 'particles'; the state is the device's engine.",
        },
      },
      {
        kind: "words", no: 3, masked: "measurem___", answer: "measurement",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The advantage is in the reading itself; the -ment noun built on measure names the act, and the sentence's point is the classical noise floor being beaten.",
          grammarNote: "Noun in -ment; the completion restores the abstract term the field runs on.",
        },
      },
      {
        kind: "words", no: 4, masked: "impos___", answer: "imposes",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Noise sets the classical floor; the third-person singular -s agrees with 'limit', and the sentence's whole advantage is measured against this boundary.",
          grammarNote: "Third-person singular -s: the subject is 'the limit', so the verb takes -s.",
        },
      },
      {
        kind: "words", no: 5, masked: "unglamor___", answer: "unglamorous",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The uses are ordinary and near home; the negative adjective with the prefix un- carries the contrast with the field's paradox origins, and the list makes it concrete.",
          grammarNote: "Negative adjective with un- on glamour; the -ous suffix carries 'full of'.",
        },
      },
      {
        kind: "words", no: 6, masked: "precis___", answer: "precision",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The trade is exactness bought at a price; the noun in -sion names the commodity, and the sentence's 'at cost' completes the bargain the passage describes.",
          grammarNote: "Noun in -sion built on precise; the spelling keeps the whole of the base.",
        },
      },
      {
        kind: "words", no: 7, masked: "delicat___", answer: "delicate",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The instruments are easily ruined; the adjective in -ate names their fragility, and the passing lorry is the example that follows the claim.",
          grammarNote: "Adjective in -ate; the completion restores the physical fragility.",
        },
      },
      {
        kind: "words", no: 8, masked: "defens___", answer: "defensive",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The labs publish like people expecting attack; the adjective in -ive carries the reason, and the history of retracted claims explains the posture.",
          grammarNote: "Adjective in -ive built on defend; it modifies 'caution'.",
        },
      },
      {
        kind: "words", no: 9, masked: "retract___", answer: "retracted",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The withdrawn claims are the field's cautionary tales; the passive participle after 'had to be' carries the embarrassment, and the fridge and the watch are the punchline.",
          grammarNote: "Past participle in the passive after 'had to be'; retract means to withdraw.",
        },
      },
      {
        kind: "words", no: 10, masked: "interfer___", answer: "interfered",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The watch and the fridge are comic villains; the past tense after 'had' carries the final laugh, and the sentence ends with the unshielded experiment.",
          grammarNote: "Past tense of interfere, the e kept before -red; the subject is the list of intruders.",
        },
      },
    ],
    vocabulary: [
      { word: "entanglement", partOfSpeech: "noun", definition: "the linked state of separated particles" },
      { word: "sensor", partOfSpeech: "noun", definition: "a device that detects something" },
      { word: "tumour", partOfSpeech: "noun", definition: "an abnormal growth, here detected early" },
      { word: "lorry", partOfSpeech: "noun", definition: "a large goods vehicle" },
      { word: "shield", partOfSpeech: "verb", definition: "to protect from outside influence" },
      { word: "paradox", partOfSpeech: "noun", definition: "a claim that seems to contradict itself" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-33",
    title: "Restoration ecology",
    topic: "Ecology",
    difficulty: 5,
    estimatedMinutes: 9,
    passage:
      "Restoration ecology begins with a confess___: some damages are revers___ only on paper. A restor___ wetland can be survey___, plant___ and fenc___, but the centuries of peat that made it a wetland cannot be re-grown on a schedule, and the animals that once used it as a corridor have reorganis___ their lives elsewhere. The field's honest practition___ distinguish between repairing an ecosystem and rebrand___ one, and they publish their failures openly. The optimist's case rests on time: give a river back its floodplain and, within decad___, it does most of the work itself. The pessimist's case rests on the same evidence read backwards: that time is exactly what the ledger no longer has.",
    questions: [
      {
        kind: "words", no: 1, masked: "confess___", answer: "confession",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The field opens by admitting its limits; the -ion noun built on confess names the admission, and the tone of honesty it sets runs through the whole passage.",
          grammarNote: "Abstract noun in -ion; the completion restores the field's opening admission.",
        },
      },
      {
        kind: "words", no: 2, masked: "revers___", answer: "reversible",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The admission is that some repair exists only in documents; the -ible adjective built on reverse carries the gap between the plan on paper and the peat on the ground.",
          grammarNote: "Adjective in -ible on reverse; 'only on paper' is the qualifier the word carries.",
        },
      },
      {
        kind: "words", no: 3, masked: "restor___", answer: "restored",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The adjective carries the field's claim on the wetland; the participle as adjective is what the passage then interrogates, asking what the word can honestly mean.",
          grammarNote: "Past participle as an adjective before 'wetland'; the claim, not the fact.",
        },
      },
      {
        kind: "words", no: 4, masked: "survey___", answer: "surveyed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The paperwork of restoration is listed first; the participle after 'can be' builds the passive, and it pairs with 'planted and fenced' as the cheap part of the job.",
          grammarNote: "Past participle in a coordinated passive: surveyed, planted and fenced.",
        },
      },
      {
        kind: "words", no: 5, masked: "plant___", answer: "planted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The second cheap task is vegetation; the participle sits in the coordinated passive list, and the expensive work is everything the list cannot buy.",
          grammarNote: "Past participle coordinated in the list after 'can be'.",
        },
      },
      {
        kind: "words", no: 6, masked: "fenc___", answer: "fenced",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The third administrative act is enclosure; the participle closes the list, and the drop of the e follows the soft c spelling of the base.",
          grammarNote: "Past participle with the e kept; fence gives fenced.",
        },
      },
      {
        kind: "words", no: 7, masked: "reorganis___", answer: "reorganised",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The animals moved on and rebuilt their lives elsewhere; the past participle completes the saddest clause in the passage, and the s spelling is the British form.",
          grammarNote: "Past participle after 'have'; the British s spelling is used (American z also exists).",
        },
      },
      {
        kind: "words", no: 8, masked: "practition___", answer: "practitioners",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The honest workers are distinguished from public-relations ecology; the plural noun in -ers names them, and the sentence's praise depends on the plural.",
          grammarNote: "Agent noun in -ers built on practise; the plural subject takes the bare verb.",
        },
      },
      {
        kind: "words", no: 9, masked: "rebrand___", answer: "rebranding",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The wry alternative to repair is a new label; the gerund after the preposition pairs with 'repairing', and the sentence's bite depends on the contrast.",
          grammarNote: "Gerund after 'between'; the -ing noun pairs with 'repairing'.",
        },
      },
      {
        kind: "words", no: 10, masked: "decad___", answer: "decades",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The optimist's timescale is the plural noun; the passage closes by reading the same word backwards as too long, and the ledger metaphor lands on it.",
          grammarNote: "Plural noun; decad gives decades with -es after the d.",
        },
      },
    ],
    vocabulary: [
      { word: "wetland", partOfSpeech: "noun", definition: "land covered by shallow water for much of the year" },
      { word: "peat", partOfSpeech: "noun", definition: "compressed plant matter, built over centuries" },
      { word: "corridor", partOfSpeech: "noun", definition: "a route animals travel along" },
      { word: "practitioner", partOfSpeech: "noun", definition: "a person who does the work, not only studies it" },
      { word: "floodplain", partOfSpeech: "noun", definition: "the flat land a river spreads onto" },
      { word: "ledger", partOfSpeech: "noun", definition: "a book of accounts, used figuratively for time" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-34",
    title: "Oral epic poetry",
    topic: "Literature",
    difficulty: 5,
    estimatedMinutes: 9,
    passage:
      "Before writing, poetry was an engineering problem: how to move ten thousand lines across generations without paper anywhere. The answer was metre and formula. A fixed rhythm tells the performer where the next foot must fall, and stock phrases — the ships with dark prows, the gods who gather like flies — slot into the metre where the story needs a pause. Scholars studying oral poets in the Balkans discov___ that a 'text' is not missing but misplaced: each perform___ is a new assembl___ of remember___ pieces, and two recit___ of the 'same' epic differ as two tell___ of a joke. What the form protect___ is not the words but the structure, so a story survives the death of its languages, and surfa___ centuries later, translat___ but recognisable by its skeleton.",
    questions: [
      {
        kind: "words", no: 1, masked: "discov___", answer: "discovered",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The fieldwork finding is the passage's pivot; the past tense after 'scholars' carries the discovery that texts are assemblies, not missing documents.",
          grammarNote: "Past tense with a plural subject; discover gives discovered with its o kept.",
        },
      },
      {
        kind: "words", no: 2, masked: "perform___", answer: "performance",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Each night's delivery is one instance; the -ance noun names the event, and the passage's theory of composition lives in this word.",
          grammarNote: "Noun in -ance built on perform; each occasion is a separate assembly.",
        },
      },
      {
        kind: "words", no: 3, masked: "assembl___", answer: "assembly",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The metaphor is manufacturing; the -ly noun built on assemble names the putting-together, and the pieces being pre-cut is the theory's core.",
          grammarNote: "Noun in -ly built on assemble; an assembly of parts, not a stream of words.",
        },
      },
      {
        kind: "words", no: 4, masked: "remember___", answer: "remembered",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The pieces are stock elements held in the performer's head; the participle as adjective modifies 'pieces', and the assembly metaphor depends on the parts being pre-cut.",
          grammarNote: "Past participle as an adjective before 'pieces'; the state of being held in memory.",
        },
      },
      {
        kind: "words", no: 5, masked: "recit___", answer: "recitations",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The two performances are compared; the plural noun in -ations names them, and the joke comparison measures how different the 'same' story can be.",
          grammarNote: "Plural noun; the completion restores the plural the comparison needs.",
        },
      },
      {
        kind: "words", no: 6, masked: "tell___", answer: "tellings",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The parallel is with jokes; the plural gerund noun names the versions, and no two of them match word for word, which is the point of the comparison.",
          grammarNote: "Gerund noun in the plural; telling gives tellings with plain -s.",
        },
      },
      {
        kind: "words", no: 7, masked: "protect___", answer: "protects",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The form guards the skeleton, not the wording; the third-person singular -s agrees with 'the form', and the sentence's redefinition of what survives is the key claim.",
          grammarNote: "Third-person singular -s: the subject is 'the form', so the verb takes -s.",
        },
      },
      {
        kind: "words", no: 8, masked: "surfa___", answer: "surface",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The story reappears after centuries; the verb from the noun surface carries the final image, the skeleton rising again in a new skin.",
          grammarNote: "Verb built on the noun surface; the e returns as the verb's ending.",
        },
      },
      {
        kind: "words", no: 9, masked: "translat___", answer: "translated",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The story reappears in a new language; the participle as adjective carries the passage's final image, the skeleton being recognisable whatever clothes it wears.",
          grammarNote: "Past participle as an adjective; it coordinates with 'still recognisable'.",
        },
      },
    ],
    vocabulary: [
      { word: "metre", partOfSpeech: "noun", definition: "the fixed rhythm of a line of verse" },
      { word: "formula", partOfSpeech: "noun", definition: "a stock phrase reused wherever the metre needs it" },
      { word: "prow", partOfSpeech: "noun", definition: "the front of a ship" },
      { word: "recitation", partOfSpeech: "noun", definition: "one act of performing a poem aloud" },
      { word: "epic", partOfSpeech: "noun", definition: "a long narrative poem about heroes" },
      { word: "skeleton", partOfSpeech: "noun", definition: "the structure that outlives the words" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
