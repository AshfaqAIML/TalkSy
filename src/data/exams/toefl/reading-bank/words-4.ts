/**
 * TOEFL Reading Practice Library — Complete the Words, batch 4 (PROMPT 49).
 *
 * Seven advanced exercises (difficulty 4). Academic vocabulary and denser
 * prose: -ation/-ance nouns, -ive/-ous adjectives, participial adjectives,
 * negative prefixes. 9 masked words per passage, every mask embedded in the
 * passage exactly once. All passages are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const words4Exercises: ToeflReadingExercise[] = [
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-22",
    title: "Antibiotic resistance",
    topic: "Medicine",
    difficulty: 4,
    estimatedMinutes: 8,
    passage:
      "Antibiotics changed medicine's odds, and for seventy years doctors spent the winnings as if the fund were inexhaust___. Each finished course left a residue of bacteria, and those survivors passed their resist___ on like an inheritance. Agriculture deepened it, feeding tons of antibiotics to livestock to acceler___ growth rather than to cure. The paradox of the hospital is that the cleaner the ward, the more the surviv___ strains matter, because infect___ control clears the field for the bacteria no drug can treat. An economic reading is the most depress___ one: resistance spreads because each user gains from the drug while the collective loses the resource. Prescribing is now govern___ by stewardship programmes; hospitals that measur___ their use saw resistance fall, though the resource can never again be assum___.",
    questions: [
      {
        kind: "words", no: 1, masked: "inexhaust___", answer: "inexhaustible",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The metaphor treats antibiotics as a fund being drawn down; the negative adjective built on exhaust carries the false assumption that the supply could never run out.",
          grammarNote: "Negative adjective on exhaust with -ible and the prefix in-; 'as if' signals the false premise.",
        },
      },
      {
        kind: "words", no: 2, masked: "resist___", answer: "resistance",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "What the survivors pass on is the acquired immunity; the -ance noun names the inherited trait, and the inheritance metaphor depends on this abstract noun.",
          grammarNote: "Abstract noun in -ance built on the verb resist; it is the direct object of 'passed on'.",
        },
      },
      {
        kind: "words", no: 3, masked: "acceler___", answer: "accelerate",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The drugs were given to speed growth, not to heal; the bare infinitive after 'to' names the purpose, and the misuse is the passage's turning point.",
          grammarNote: "Infinitive of purpose after 'to': to accelerate growth rather than to cure.",
        },
      },
      {
        kind: "words", no: 4, masked: "surviv___", answer: "surviving",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The strains that matter are the ones still standing after treatment; the participle distinguishes them from the cleared majority in the same sentence.",
          grammarNote: "Present participle as an adjective before 'strains' — the ones that survive.",
        },
      },
      {
        kind: "words", no: 5, masked: "infect___", answer: "infection",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The compound noun names the discipline; the -ion noun on infect is fixed in 'infection control', a hospital term the passage uses as a single idea.",
          grammarNote: "Noun in -ion; the compound 'infection control' acts as one noun phrase.",
        },
      },
      {
        kind: "words", no: 6, masked: "depress___", answer: "depressing",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The economic reading makes the reader feel the trap; the -ing participle suits the cause of the feeling, the reading itself rather than the reader feeling it.",
          grammarNote: "Participial adjective after 'the most'; the -ing form characterises the reading, not the reader.",
        },
      },
      {
        kind: "words", no: 7, masked: "govern___", answer: "governed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Prescribing is now controlled by rules; the passive participle reports the new regime, and the agent arrives afterwards as the stewardship programmes.",
          grammarNote: "Past participle in the present passive: is now governed by programmes.",
        },
      },
      {
        kind: "words", no: 8, masked: "measur___", answer: "measured",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The hopeful turn comes from data: only hospitals that tracked their own prescribing saw the decline, so the participle carries the whole conditional lesson.",
          grammarNote: "Past participle inside the relative clause: hospitals that measured their use.",
        },
      },
      {
        kind: "words", no: 9, masked: "assum___", answer: "assumed",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The final clause withdraws the old confidence; the passive participle closes the passage with the lesson about what can no longer be taken for granted.",
          grammarNote: "Past participle in a passive construction: never again assumed.",
        },
      },
    ],
    vocabulary: [
      { word: "course", partOfSpeech: "noun", definition: "one full period of treatment with a drug" },
      { word: "residue", partOfSpeech: "noun", definition: "what is left behind after a process" },
      { word: "strain", partOfSpeech: "noun", definition: "a variant within a species, here of bacteria" },
      { word: "livestock", partOfSpeech: "noun", definition: "farm animals kept for produce" },
      { word: "stewardship", partOfSpeech: "noun", definition: "careful, responsible management of a resource" },
      { word: "ward", partOfSpeech: "noun", definition: "one room or unit of a hospital" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-23",
    title: "The Antikythera mechanism",
    topic: "Archaeology",
    difficulty: 4,
    estimatedMinutes: 8,
    passage:
      "Divers found it as corroded lumps off a Greek island, and the lumps sat in a museum drawer, catalogu___ as statuary debris. X-rays reveal___ something else: gears — thirty of them — cut with a precision the ancient world was not supposed to possess. The device track___ the sun and moon through the zodiac, model___ eclipses by a pin-and-slot arrangement, and display___ the timing of the games cycle that structur___ Greek civic life. Nothing else of its kind survives, which is the problem: one artefact cannot say whether it was a masterpiece or an industry's ordinary product. Scholars handle the bronze with two opposite emotions — admira___ for the craftsmen, and archaeological grief for the miss___ centuries of machines that must have existed and did not surviv___.",
    questions: [
      {
        kind: "words", no: 1, masked: "catalogu___", answer: "catalogued",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The museum mislabelled the find; the passive participle records the filing error, and the spelling keeps the whole of the base before the ending.",
          grammarNote: "Past participle after 'sat' — reduced passive: it was catalogued as debris.",
        },
      },
      {
        kind: "words", no: 2, masked: "reveal___", answer: "revealed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The X-rays exposed the gears; the past tense carries the moment of discovery, and the sentence's reversal depends on this one verb.",
          grammarNote: "Past tense after the compound subject; reveal keeps its e before -ed.",
        },
      },
      {
        kind: "words", no: 3, masked: "track___", answer: "tracked",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The machine followed the heavens; the past tense heads the list of functions, and the doubling of the k follows the short-vowel rule.",
          grammarNote: "Past tense with doubling: track gives tracked, like drop and stop.",
        },
      },
      {
        kind: "words", no: 4, masked: "model___", answer: "modelled",
        alternatives: ["modeled"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The device reproduced eclipses mechanically; the past tense lists the machine's functions in order, and the doubled l follows British spelling with the single-l form also accepted.",
          grammarNote: "Past tense in the function list; model doubles the l in British use, keeps one in American.",
        },
      },
      {
        kind: "words", no: 5, masked: "display___", answer: "displayed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The third function in the list is the games calendar; the past tense continues the catalogue of what the machine could do, parallel with modelled before it.",
          grammarNote: "Past tense coordinated with 'modelled'; the verb keeps the y before -ed.",
        },
      },
      {
        kind: "words", no: 6, masked: "structur___", answer: "structured",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The games cycle organised civic life; the past participle in the relative clause carries that claim, and the machine's third function is therefore political, not just astronomical.",
          grammarNote: "Past participle in the relative clause after 'that'; structure gives structured.",
        },
      },
      {
        kind: "words", no: 7, masked: "admira___", answer: "admiration",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The first of the two emotions is respect for skill; the -ation noun pairs with grief in the list, and the prepositional phrase 'for the craftsmen' completes it.",
          grammarNote: "Abstract noun in -ation built on admire; one of two coordinated nouns.",
        },
      },
      {
        kind: "words", no: 8, masked: "miss___", answer: "missing",
        lure: ["missed"],
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The centuries that produced nothing surviving are absent rather than late; the -ing participle means non-existent, which is the exact distinction from 'missed'.",
          grammarNote: "Participial adjective: 'missing' means absent, not 'missed' (noticed too late).",
        },
      },
      {
        kind: "words", no: 9, masked: "surviv___", answer: "survive",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The final clause states the condition of the grief: other machines must have existed and did not last; the bare infinitive after 'did not' needs no ending at all.",
          grammarNote: "Bare infinitive after the auxiliary 'did not'; the negation is the point.",
        },
      },
    ],
    vocabulary: [
      { word: "corrode", partOfSpeech: "verb", definition: "to be eaten away slowly, as by sea water" },
      { word: "gear", partOfSpeech: "noun", definition: "a toothed wheel that meshes with another" },
      { word: "eclipse", partOfSpeech: "noun", definition: "the passing of one body in front of another" },
      { word: "zodiac", partOfSpeech: "noun", definition: "the band of constellations the sun moves through" },
      { word: "artefact", partOfSpeech: "noun", definition: "an object made by humans, found by archaeologists" },
      { word: "statuary", partOfSpeech: "noun", definition: "statues and similar sculpture, treated as a group" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-24",
    title: "Farms that stand up",
    topic: "Agriculture",
    difficulty: 4,
    estimatedMinutes: 8,
    passage:
      "Vertical farming grows crops in stack___ trays under lights, and its promis___ is measured in units that sound like science fiction: a tenth of the land, a twentieth of the water, no pesticides at all because the rooms are seal___. The obstacles are as concrete. Electricity replac___ sunlight, so the ener___ bill decid___ whether a lettuce is a farm product or an experiment. Engineers answer with LEDs tun___ to the exact red and blue that leafy greens use best, and with aisles measur___ in centimetres rather than metres. What the model cannot fix is cost: a field tomato compet___ with a warehouse tomato and wins on price. The honest pitch is a bet on the future of energy, and founders who admit that are the ones investors trust.",
    questions: [
      {
        kind: "words", no: 1, masked: "promis___", answer: "promise",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The opening noun names what the technology offers; the abstract noun after 'its' is the subject of 'is measured', and the unit-phrase carries the sentence's irony.",
          grammarNote: "Abstract noun; the phrase 'its promise is measured in units' sets up the whole passage.",
        },
      },
      {
        kind: "words", no: 2, masked: "seal___", answer: "sealed",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The rooms are closed to pests, which is why no sprays are needed; the participle as adjective gives the reason the promise of no pesticides can be kept.",
          grammarNote: "Past participle as an adjective after 'are': the state that makes the sterile claim possible.",
        },
      },
      {
        kind: "words", no: 3, masked: "ener___", answer: "energy",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The masked noun names the input that replaced the sun; the shortened form of energy is fixed in compounds like energy bill, and the decision about viability rests on it.",
          grammarNote: "Noun ending in -gy; the compound 'energy bill' is a fixed collocation of the industry.",
        },
      },
      {
        kind: "words", no: 4, masked: "decid___", answer: "decides",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The bill, not the technology, settles the question; the third-person singular -s agrees with 'bill', and the sentence's irony depends on that subject choice.",
          grammarNote: "Third-person singular -s: the subject is 'the energy bill', so the verb takes -s.",
        },
      },
      {
        kind: "words", no: 5, masked: "tun___", answer: "tuned",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The lights are set to the useful wavelengths; the participle as adjective carries the engineering answer, and the phrase 'that leafy greens use best' completes it.",
          grammarNote: "Past participle as an adjective after 'with'; tune gives tuned with no e-drop.",
        },
      },
      {
        kind: "words", no: 6, masked: "measur___", answer: "measured",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The aisles are counted in centimetres; the participle parallels 'tuned' in the list of engineering answers, and both describe deliberate design choices.",
          grammarNote: "Past participle coordinated with 'tuned'; the passive reports the engineers' choices.",
        },
      },
      {
        kind: "words", no: 7, masked: "compet___", answer: "competes",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The two tomatoes are compared on price; the singular subject 'a field tomato' takes the -s verb, and the verb's economics register carries the sentence.",
          grammarNote: "Third-person singular -s in the present; compete gives competes with no e-drop.",
        },
      },
      {
        kind: "words", no: 8, masked: "replac___", answer: "replaces",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Electricity stands in for the sun; the third-person singular -s agrees with 'Electricity', and the substitution is the cost the next clause measures.",
          grammarNote: "Third-person singular -s: the subject 'Electricity' takes the -s verb.",
        },
      },
      {
        kind: "words", no: 9, masked: "stack___", answer: "stacked",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The trays rise in levels; the past participle as adjective describes the arrangement, and the doubling of the k follows the short-vowel rule again.",
          grammarNote: "Past participle as an adjective before 'trays'; stack gives stacked with a doubled k.",
        },
      },
    ],
    vocabulary: [
      { word: "stack", partOfSpeech: "verb", definition: "to arrange one above another" },
      { word: "aisle", partOfSpeech: "noun", definition: "the gap between rows, here of trays" },
      { word: "lettuce", partOfSpeech: "noun", definition: "a salad leaf crop" },
      { word: "warehouse", partOfSpeech: "noun", definition: "a large storage building" },
      { word: "pesticide", partOfSpeech: "noun", definition: "a chemical that kills pests" },
      { word: "founder", partOfSpeech: "noun", definition: "a person who starts a company" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-25",
    title: "Crowds and the physics of walking",
    topic: "Urban studies",
    difficulty: 4,
    estimatedMinutes: 8,
    passage:
      "A pedestrian is a person until the second one arrives; after that, physics starts to apply. Researchers filming stations have measur___ flows the way hydrologists measure rivers: below a certain density, walkers choose their own lines, but past five people per square metre the crowd becomes a fluid, and individu___ choice disappears. At that point the flow can be manag___ but not argued with. Stairs narrow___ the channel and reduce___ capacity sharply, which is why stadium designers obsess over the width of exits; a bottleneck convert___ a comfort___ crowd into a crush in seconds. The safety lesson is counter-intuitive: barriers that slow people down protect them, and the fastest exit is rarely the one that empti___ fastest.",
    questions: [
      {
        kind: "words", no: 1, masked: "measur___", answer: "measured",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The researchers quantify the streams; the participle after 'have' builds the present perfect, and the hydrology comparison depends on this measured evidence.",
          grammarNote: "Past participle after 'have': present perfect reporting completed research.",
        },
      },
      {
        kind: "words", no: 2, masked: "individu___", answer: "individual",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The adjective before 'choice' contrasts one walker with the crowd-fluid; the passage's turn is from personal agency to collective mechanics, and this word carries it.",
          grammarNote: "Adjective in -al built on the noun individual; it modifies 'choice'.",
        },
      },
      {
        kind: "words", no: 3, masked: "manag___", answer: "managed",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The coordinated passive pairs two verbs: the flow can be shaped by design but not persuaded by anyone inside it, and the participle carries the first half.",
          grammarNote: "Past participle after 'can be': a coordinated passive with 'argued with'.",
        },
      },
      {
        kind: "words", no: 4, masked: "narrow___", answer: "narrows",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The stairs act as a choke; the verb describes what the geometry does to the channel, and the third-person -s agrees with the singular 'stairs' again.",
          grammarNote: "Third-person singular -s used as a verb: narrow becomes narrows.",
        },
      },
      {
        kind: "words", no: 5, masked: "reduce___", answer: "reduces",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The stairs cut the flow; the third-person singular -s agrees with the plural-looking subject 'stairs', which is grammatically singular, and the trap is the surface form.",
          grammarNote: "Third-person singular -s: 'stairs' takes a singular verb despite its plural appearance.",
        },
      },
      {
        kind: "words", no: 6, masked: "comfort___", answer: "comfortable",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The crowd before the bottleneck is at ease; the adjective built on comfort with -able contrasts with the crush that follows, and the conversion is the passage's warning.",
          grammarNote: "Adjective in -able on comfort; it modifies 'crowd'.",
        },
      },
      {
        kind: "words", no: 7, masked: "empti___", answer: "empties",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The closing paradox separates speed of motion from speed of clearing; the verb from empty takes -ies in the third person, and the sentence's distinction is the whole point.",
          grammarNote: "Third-person singular: empty becomes empties, the y turning to ies.",
        },
      },
      {
        kind: "words", no: 8, masked: "convert___", answer: "converts",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The bottleneck turns an easy crowd into a dangerous one; the third-person singular -s agrees with 'bottleneck', and the change of state is the passage's warning.",
          grammarNote: "Third-person singular -s: the subject 'a bottleneck' takes the -s verb.",
        },
      },
    ],
    vocabulary: [
      { word: "pedestrian", partOfSpeech: "noun", definition: "a person travelling on foot" },
      { word: "density", partOfSpeech: "noun", definition: "the amount of something per unit of space" },
      { word: "bottleneck", partOfSpeech: "noun", definition: "a narrow point that slows a flow" },
      { word: "crush", partOfSpeech: "noun", definition: "a dangerously compressed crowd" },
      { word: "barrier", partOfSpeech: "noun", definition: "a structure that blocks or slows movement" },
      { word: "hydrologist", partOfSpeech: "noun", definition: "a scientist who studies water flow" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-26",
    title: "The psychology of habits",
    topic: "Psychology",
    difficulty: 4,
    estimatedMinutes: 8,
    passage:
      "A habit is a decision your brain has stopped consulting you about. Psychologists describe a loop — cue, routine, reward — and the loop survives because it is cheap: once a behaviour is automat___, the deliberat___ self is no longer billed for it. The same machinery will repeat___ a harmful routine on request, because the system cannot tell a good habit from a bad one; it only read___ the reward. Marketers understood this before most researchers did, engineer___ cravings by pair___ cues with small, unpredict___ rewards, the schedule that keeps the loop at its strongest. The practical advice that follows is modest: you rarely delet___ a habit, you replac___ its routine while leaving the cue and the reward untouched — which is why the advice that works starts with notic___ the cue.",
    questions: [
      {
        kind: "words", no: 1, masked: "automat___", answer: "automated",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The behaviour runs without deliberation; the past participle after 'is' builds the passive, and the passage's economy metaphor depends on the cost saved.",
          grammarNote: "Past participle after 'is': the passive reports the state the brain achieves.",
        },
      },
      {
        kind: "words", no: 2, masked: "deliberat___", answer: "deliberating",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The self that weighs options is personified as a customer no longer billed; the participle as adjective carries the passage's economic metaphor.",
          grammarNote: "Participial adjective before 'self'; the verb deliberate gives the participle.",
        },
      },
      {
        kind: "words", no: 3, masked: "read___", answer: "reads",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The system registers only the payoff; the third-person singular -s agrees with 'it', and this blindness to good and bad is the passage's dark side.",
          grammarNote: "Third-person singular -s: the subject 'it' takes the -s verb.",
        },
      },
      {
        kind: "words", no: 4, masked: "engineer___", answer: "engineering",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Markets build cravings deliberately; the participle shares its subject with 'understood', and the verb has shifted from a person to a design practice.",
          grammarNote: "Present participle coordinated with 'understood'; the verb means to design deliberately.",
        },
      },
      {
        kind: "words", no: 5, masked: "pair___", answer: "pairing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The technique couples cues with prizes; the gerund after the preposition 'by' names the method, and the slot-machine schedule is its classic form.",
          grammarNote: "Gerund after the preposition 'by'; pair gives pairing with an i.",
        },
      },
      {
        kind: "words", no: 6, masked: "unpredict___", answer: "unpredictable",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The rewards arrive on a variable schedule; the negative adjective with the prefix un- names the pattern that keeps engagement strongest, exactly as slot machines do.",
          grammarNote: "Negative adjective with un- on predict; the -able suffix carries 'can be'.",
        },
      },
      {
        kind: "words", no: 7, masked: "delet___", answer: "delete",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The admission is that removal rarely works; the bare infinitive after 'you rarely' carries the modest claim that sets up the replacement strategy.",
          grammarNote: "Bare infinitive after the adverb 'rarely'; the verb keeps its e.",
        },
      },
      {
        kind: "words", no: 8, masked: "replac___", answer: "replace",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The strategy swaps the middle step only; the present tense after 'you' names the technique, and the cue-reward scaffolding stays untouched by design.",
          grammarNote: "Present tense after 'you'; replace keeps the e of the base verb.",
        },
      },
      {
        kind: "words", no: 9, masked: "notic___", answer: "noticing",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The advice that works begins with awareness of the cue; the gerund after 'starts with' is the final step, and the sentence closes the loop the passage opened.",
          grammarNote: "Gerund after 'starts with'; notice gives noticing with its e.",
        },
      },
    ],
    vocabulary: [
      { word: "cue", partOfSpeech: "noun", definition: "the signal that triggers a routine" },
      { word: "routine", partOfSpeech: "noun", definition: "the repeated behaviour itself" },
      { word: "reward", partOfSpeech: "noun", definition: "the payoff that keeps the loop alive" },
      { word: "craving", partOfSpeech: "noun", definition: "a strong, repeated desire" },
      { word: "machinery", partOfSpeech: "noun", definition: "the system, here the brain's loop" },
      { word: "modest", partOfSpeech: "adjective", definition: "small in scope or claim" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-27",
    title: "Glaciers as archives",
    topic: "Climatology",
    difficulty: 4,
    estimatedMinutes: 8,
    passage:
      "A glacier is a library that melts. Each year's snowfall presses the previous year into a layer, and the layers accumul___ a record of the air that fell with them — ash from a known eruption, pollen from a changed forest. Scientists read the record by drill___ cores and counting layers the way dendrochronologists count tree rings, and where two independ___ archives agree, confidence in both ris___. The worry is time: warmer summers are consum___ the oldest ice, so records that survived ten thousand years are now schedul___ to disappear within a century. The ice has also been preserv___ artefacts at altitudes where no soil keeps anything, and what melts first is precisely what has never been record___ anywhere else — a sentence no archiv___ wants to write.",
    questions: [
      {
        kind: "words", no: 1, masked: "accumul___", answer: "accumulate",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The layers build the record over time; the verb after 'the layers' is plural present tense, and the metaphor of archiving depends on this slow piling up.",
          grammarNote: "Present tense with a plural subject; accumulate takes plain form.",
        },
      },
      {
        kind: "words", no: 2, masked: "drill___", answer: "drilling",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The reading method extracts columns of ice; the gerund after the preposition 'by' names the physical technique, parallel with counting the layers.",
          grammarNote: "Gerund after 'by'; the two gerunds coordinate as the method.",
        },
      },
      {
        kind: "words", no: 3, masked: "independ___", answer: "independent",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The two records come from unrelated methods; the adjective in -ent carries the method's power, because agreement between separate witnesses is what raises confidence.",
          grammarNote: "Adjective in -ent; it modifies 'archives' and carries the evidential logic.",
        },
      },
      {
        kind: "words", no: 4, masked: "consum___", answer: "consuming",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The warmer summers eat the oldest ice; the present progressive needs the participle, and the burning-library metaphor reaches its crisis here.",
          grammarNote: "Present progressive after 'are'; consume gives consuming with no e-drop.",
        },
      },
      {
        kind: "words", no: 5, masked: "schedul___", answer: "scheduled",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The disappearance is a matter of plan rather than possibility; the passive participle carries the grim administrative tone, as if the calendar itself had decided.",
          grammarNote: "Past participle in the present passive: are now scheduled to disappear.",
        },
      },
      {
        kind: "words", no: 6, masked: "preserv___", answer: "preserving",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The ice has kept artefacts intact; the present perfect progressive needs the participle in -ing, and the altitude clause explains why that is remarkable.",
          grammarNote: "Present perfect progressive after 'has been'; preserve gives preserving.",
        },
      },
      {
        kind: "words", no: 7, masked: "record___", answer: "recorded",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The lost evidence exists nowhere else; the passive participle after 'never been' completes the claim, and the final sentence is the archivist's lament.",
          grammarNote: "Past participle in the perfect passive: has never been recorded anywhere else.",
        },
      },
      {
        kind: "words", no: 8, masked: "archiv___", answer: "archivist",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The professional who guards records closes the passage; the -ist noun names the person, and the sentence attributes the dread to her profession.",
          grammarNote: "Agent noun in -ist built on archive; the person who keeps records.",
        },
      },
      {
        kind: "words", no: 9, masked: "ris___", answer: "rises",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "Agreement between two separate records lifts confidence in each; the third-person singular -s agrees with 'confidence', and this sentence carries the method's whole power.",
          grammarNote: "Third-person singular -s: the subject 'confidence' takes the -s verb.",
        },
      },
    ],
    vocabulary: [
      { word: "core", partOfSpeech: "noun", definition: "the column drilled out of a glacier" },
      { word: "ash", partOfSpeech: "noun", definition: "powder left by a volcanic eruption" },
      { word: "pollen", partOfSpeech: "noun", definition: "the dust plants release to reproduce" },
      { word: "dendrochronologist", partOfSpeech: "noun", definition: "a scientist who dates things by tree rings" },
      { word: "eruption", partOfSpeech: "noun", definition: "the explosion of a volcano" },
      { word: "artefact", partOfSpeech: "noun", definition: "an object made by humans, found long after" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-28",
    title: "Two languages, one speaker",
    topic: "Linguistics",
    difficulty: 4,
    estimatedMinutes: 8,
    passage:
      "Bilinguals do not own two separate systems; they own one reperto___ with two settings. The evidence is everywhere once you know to look: a Spanish-English speaker who says 'I have so much tarea' has not failed at either language — she has select___ the word that best does the job. Linguists call the switching a feature, not an error, because the switch respect___ the grammar of both languages at the swap, and it land___ on words the listener shar___. The same competence that produc___ the mixing lets a bilingual refus___ it in an interview, which is the part monoling___ critics miss. The cost of the repertoire is invisible and so is the benefit, so the argument is conduct___ by people who cannot see either side of the ledger.",
    questions: [
      {
        kind: "words", no: 1, masked: "select___", answer: "selected",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The word was chosen, not blurted; the participle after 'has' is the present perfect, and the claim of deliberate choice is the passage's core defence.",
          grammarNote: "Past participle after 'has': present perfect carrying a completed, relevant choice.",
        },
      },
      {
        kind: "words", no: 2, masked: "shar___", answer: "shares",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The audience already knows the words the switch lands on; the third-person singular -s agrees with 'the listener', and the sharing is the second rule of the feature.",
          grammarNote: "Third-person singular -s: the subject 'the listener' takes the -s verb.",
        },
      },
      {
        kind: "words", no: 3, masked: "respect___", answer: "respects",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The switch obeys both grammars at once; the third-person -s agrees with 'it' (the switch), and the rule-following is what makes the mixing a competence.",
          grammarNote: "Third-person singular -s: the subject 'it' takes -s.",
        },
      },
      {
        kind: "words", no: 4, masked: "land___", answer: "lands",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The switch aims at shared vocabulary; the verb from land takes -s with 'it', and the audience-awareness is the second rule of the feature.",
          grammarNote: "Third-person singular -s; land is used of choices that settle on a target.",
        },
      },
      {
        kind: "words", no: 5, masked: "produc___", answer: "produces",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The same skill that makes the mixing can suppress it; the verb after 'competence' takes -s, and the sentence's balance depends on this one faculty.",
          grammarNote: "Third-person singular -s: the subject 'competence' takes -s.",
        },
      },
      {
        kind: "words", no: 6, masked: "refus___", answer: "refuse",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The bilingual can switch the register off in an interview; the bare infinitive after 'let' carries the counter-argument to the error theory.",
          grammarNote: "Bare infinitive after 'lets'; the verb follows let with no to.",
        },
      },
      {
        kind: "words", no: 7, masked: "monoling___", answer: "monolingual",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The critics who miss the point speak one language; the prefix mono- builds the adjective on lingual, and the sentence's irony depends on the contrast with the speaker's repertoire.",
          grammarNote: "Adjective with the prefix mono- on lingual; the opposite prefix is multi-.",
        },
      },
      {
        kind: "words", no: 8, masked: "conduct___", answer: "conducted",
        meta: {
          skills: ["vocabulary", "inference"],
          explanation:
            "The debate is carried on by people blind to both columns; the passive participle closes the metaphor of the ledger, and the wry tone is the passage's signature.",
          grammarNote: "Past participle in the present passive: is conducted by people who cannot see.",
        },
      },
      {
        kind: "words", no: 9, masked: "reperto___", answer: "repertoire",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The opening noun names the combined resource; the French loanword keeps its spelling, and the passage reuses it at the end to close the frame.",
          grammarNote: "Noun borrowed from French; the ending -oire is kept in English spelling.",
        },
      },
    ],
    vocabulary: [
      { word: "bilingual", partOfSpeech: "noun", definition: "a person who speaks two languages" },
      { word: "switch", partOfSpeech: "noun", definition: "the move between languages mid-sentence" },
      { word: "competence", partOfSpeech: "noun", definition: "the underlying skill, whatever the performance" },
      { word: "interview", partOfSpeech: "noun", definition: "a formal meeting, here a job context" },
      { word: "ledger", partOfSpeech: "noun", definition: "a book of accounts, used metaphorically" },
      { word: "repertoire", partOfSpeech: "noun", definition: "the full set of resources available" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
