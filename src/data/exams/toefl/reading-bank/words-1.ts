/**
 * TOEFL Reading Practice Library — Complete the Words, batch 1 (PROMPT 49).
 *
 * Seven foundation exercises (difficulty 1). Everyday scenes, short masked
 * passages (85–130 words), 8 masked words each: plurals, -ing forms, agent
 * nouns, participles — the morphology the task lives on. Every masked word
 * carries a grammar observation; every exercise carries a glossary.
 *
 * All passages are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const words1Exercises: ToeflReadingExercise[] = [
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-01",
    title: "Moving into Hartley Hall",
    topic: "Campus life",
    difficulty: 1,
    estimatedMinutes: 5,
    passage:
      "Moving into Hartley Hall was chaos at first. My roommate and I spent the whole aftern___ unpacking, and by evening the floor was buried under empty box___. Someone had mend___ the door sign, so at least that worked. On the first morning I woke up tired and sleep___, dragged myself to the show___, and found no hot water. Our neighb___ across the corridor had the same problem, and we ended up laughing about it in the stairwell; nervous laugh___ is how friendships start here. Later the floor guide knocked, handed us two clean tow___, and showed us where the laundry room hides. By Sunday, Hartley Hall felt less like a maze and more like home.",
    questions: [
      {
        kind: "words", no: 1, masked: "aftern___", answer: "afternoon",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The sentence needs a time noun after 'the whole', and 'by evening' later in the passage confirms the day's arc from afternoon to evening. The compound is spelled as one word.",
          grammarNote: "Compound noun: after + noon writes as one word; 'the whole afternoon' is a fixed time expression.",
        },
      },
      {
        kind: "words", no: 2, masked: "box___", answer: "boxes",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "'Under empty ___' follows 'the floor was buried', so a plural noun is required — the packing produced many containers, and nouns ending in -x pluralise with -es.",
          grammarNote: "Nouns ending in -x take -es in the plural; the quantifier 'under empty ___' needs a plural.",
        },
      },
      {
        kind: "words", no: 3, masked: "mend___", answer: "mended",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "After 'Someone had', only a past participle can follow; the repair happened before the events of the sentence, which is exactly what the past perfect signals.",
          grammarNote: "Past participle after 'had': the pluperfect 'had mended' places the repair before move-in day.",
        },
      },
      {
        kind: "words", no: 4, masked: "sleep___", answer: "sleepy",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "'Woke up tired and ___' coordinates two adjectives; sleepy supplies the adjective form, while sleep or slept would break the coordination.",
          grammarNote: "Adjective needed after 'tired and ___'; the -y adjective keeps the parallel structure.",
        },
      },
      {
        kind: "words", no: 5, masked: "show___", answer: "showers", lure: ["shower"],
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The narrator goes to wash in a shared facility; dorm bathrooms are named in the plural, and 'the' with no other article points to the communal showers.",
          grammarNote: "Shared facilities take the plural in hall speech: 'the showers', like 'the kitchens'.",
        },
      },
      {
        kind: "words", no: 6, masked: "neighb___", answer: "neighbours", alternatives: ["neighbors"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The corridor room holds people, and 'our' plus the later 'had the same problem' requires a plural noun; the -ours spelling matches the passage's British convention.",
          grammarNote: "Plural noun for the pair of students; both -ours and -ors spellings exist, so the alternative is accepted.",
        },
      },
      {
        kind: "words", no: 7, masked: "laugh___", answer: "laughter", lure: ["laughed", "laughing"],
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The clause 'nervous ___ is how friendships start' needs a noun as subject; laughed would leave the sentence without one, so laughter completes both grammar and idiom.",
          grammarNote: "Noun required as subject of 'is'; 'nervous laughter' is a fixed expression, so the noun form must be used.",
        },
      },
      {
        kind: "words", no: 8, masked: "tow___", answer: "towels", lure: ["towel"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Numbers above one demand plural nouns, so the guide's gift must be towels; the singular towel would clash with 'two clean' earlier in the clause.",
          grammarNote: "Quantified plural: 'two clean ___' forces the plural form after the number two.",
        },
      },
    ],
    vocabulary: [
      { word: "roommate", partOfSpeech: "noun", definition: "the person you share a room with" },
      { word: "corridor", partOfSpeech: "noun", definition: "a long passage in a building with doors along it" },
      { word: "stairwell", partOfSpeech: "noun", definition: "the vertical shaft containing a staircase" },
      { word: "laundry", partOfSpeech: "noun", definition: "clothes needing washing, or the room where they are washed" },
      { word: "chaos", partOfSpeech: "noun", definition: "complete disorder and confusion" },
      { word: "maze", partOfSpeech: "noun", definition: "a network of paths that is hard to navigate" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-02",
    title: "The coffee cart by the science building",
    topic: "Daily routine",
    difficulty: 1,
    estimatedMinutes: 5,
    passage:
      "The coffee cart by the science building opens before the library does. Every morn___ I join the short line, watching steam rise from the little silver pot. The owner, a retired jazz sing___ named Rosa, brews each cup while chatt___ with the regul___. She remembers everyone's order, slips an extra bisc___ to students who look tired, and refuses any tip. The cup___ are compost___, the milk is oat by default, and the price stays below two dollars. On cold days she hums between orders, and the queue moves slowly on purpose: nobody wants to rush the one warm minute between lectur___.",
    questions: [
      {
        kind: "words", no: 1, masked: "morn___", answer: "morning",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "'Every ___ I join the short line' needs the time noun; morning is the only completion that keeps the adverbial expression, and the scene sits before lectures.",
          grammarNote: "Time noun after 'every'; the -ing noun is fixed inside the adverbial 'every morning'.",
        },
      },
      {
        kind: "words", no: 2, masked: "sing___", answer: "singer",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The apposition 'a retired jazz ___ named Rosa' describes the owner's former profession; singer is the agent noun that fits both the noun phrase and the story.",
          grammarNote: "Agent noun: the -er suffix turns the verb into the person who does it.",
        },
      },
      {
        kind: "words", no: 3, masked: "chatt___", answer: "chatting",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "'While ___ with the regulars' shares its subject with 'brews', so a participle is required; the doubled t in chatting is the spelling rule after a short vowel.",
          grammarNote: "Present participle after 'while' expresses the simultaneous action; the doubled t keeps the vowel short.",
        },
      },
      {
        kind: "words", no: 4, masked: "regul___", answer: "regulars",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Rosa talks with the people who come daily; the phrase needs a noun for those customers, and regulars is the noun built from the adjective regular.",
          grammarNote: "Noun formed from the adjective regular: the -ar suffix noun names the habitual customers.",
        },
      },
      {
        kind: "words", no: 5, masked: "bisc___", answer: "biscuit",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The object of 'slips' is a small baked thing students eat; biscuit is the countable noun that follows 'an extra', and its ending is silent.",
          grammarNote: "Noun after 'an extra'; the -uit ending is a silent cluster, so the word is learned as a spelling unit.",
        },
      },
      {
        kind: "words", no: 6, masked: "cup___", answer: "cups",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The subject of 'are compostable' must be plural to agree with the verb; the cart serves drinks in many cups, so the plural form fits the claim.",
          grammarNote: "Plural noun as subject: 'the ___ are compostable' needs the plural for the verb 'are'.",
        },
      },
      {
        kind: "words", no: 7, masked: "compost___", answer: "compostable",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The sentence praises the material of the cups; compostable means they can break down in a compost heap, and the -able suffix builds that meaning onto the verb.",
          grammarNote: "Adjective built on the verb compost with -able: it means 'can be composted'.",
        },
      },
      {
        kind: "words", no: 8, masked: "lectur___", answer: "lectures",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "'Between ___' refers to the two teaching blocks that surround the coffee break; the plural noun completes the time expression the closing line leans on.",
          grammarNote: "Plural after 'between': the preposition takes the plural noun for the two blocks the minute sits between.",
        },
      },
    ],
    vocabulary: [
      { word: "cart", partOfSpeech: "noun", definition: "a small wheeled stall" },
      { word: "queue", partOfSpeech: "noun", definition: "a line of people waiting their turn" },
      { word: "default", partOfSpeech: "noun", definition: "the standard option when no choice is made" },
      { word: "tip", partOfSpeech: "noun", definition: "a small extra payment for service" },
      { word: "compostable", partOfSpeech: "adjective", definition: "able to break down in a compost heap" },
      { word: "regular", partOfSpeech: "noun", definition: "a customer who comes every day" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-03",
    title: "The Saturday market",
    topic: "Food and markets",
    difficulty: 1,
    estimatedMinutes: 5,
    passage:
      "On Saturdays the market square fills before nine. Farmers unload crat___ of apples while a baker slides trays of warm loav___ out of a stone oven. The cheese stall is my first stop; the owner cuts thick wedg___ of aged cheddar and lets you taste before buying. Next door, a woman sells honey from her own hiv___, label___ by the flowers the bees visited. By noon the crowds thick___, the smell of grilled saus___ drifts across the square, and busk___ play for coins near the fountain. My mother taught me to shop late: stallholders drop prices rather than carry unsold goods home, so the last hour buys the same bread for half.",
    questions: [
      {
        kind: "words", no: 1, masked: "crat___", answer: "crates",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Farmers carry containers of apples in numbers, so the plural is required after 'unload'; crates adds just -s to the singular with its silent e.",
          grammarNote: "Plain plural with -s after a silent -e; 'unload' implies many containers.",
        },
      },
      {
        kind: "words", no: 2, masked: "loav___", answer: "loaves",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The baker pulls trays from the oven, so the noun after 'warm' must be plural; loaf takes the irregular -ves plural, and the trays hold many.",
          grammarNote: "Nouns of this family swap -f for -ves in the plural: loaf becomes loaves.",
        },
      },
      {
        kind: "words", no: 3, masked: "wedg___", answer: "wedges",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The cheese is cut into pieces for tasting; the noun after 'thick' needs the plural because a market stall cuts many, and the soft g keeps its sound.",
          grammarNote: "Soft g keeps its sound before the plural -es; the tasting custom means more than one piece.",
        },
      },
      {
        kind: "words", no: 4, masked: "hiv___", answer: "hives",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The honey comes from the beekeeper's own colonies; the noun after 'her own' is plural because one hive would not supply a market stall all season.",
          grammarNote: "Plural noun after 'her own'; the possessive phrase needs the colonies that produced the honey.",
        },
      },
      {
        kind: "words", no: 5, masked: "label___", answer: "labelled", alternatives: ["labeled"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The jars carry the flower names the bees visited; the past participle after the noun acts as a reduced passive, and British English doubles the l.",
          grammarNote: "Past participle as a reduced passive; British spelling doubles the l, American does not — both are accepted.",
        },
      },
      {
        kind: "words", no: 6, masked: "saus___", answer: "sausages",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The smell comes from the food stall grilling meat; the plural noun matches 'the smell of grilled ___', and many pieces cook on one grill.",
          grammarNote: "Long noun plural: the completion restores 'ages' onto the stem; the plural simply adds -s to the full word.",
        },
      },
      {
        kind: "words", no: 7, masked: "busk___", answer: "buskers",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Musicians perform for coins near the fountain; the noun after 'and' is the subject of 'play', so the plural agent noun fits the scene.",
          grammarNote: "Agent noun in -ers: the verb busk yields the person; the plural agrees with 'play'.",
        },
      },
      {
        kind: "words", no: 8, masked: "thick___", answer: "thicken",
        lure: ["thickens"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "As noon approaches more people arrive; the sentence needs the verb that means 'become thick', built from the adjective with the -en suffix.",
          grammarNote: "Verb built from the adjective thick with -en; the plural subject 'crowds' takes the bare form.",
        },
      },
    ],
    vocabulary: [
      { word: "stall", partOfSpeech: "noun", definition: "a table where goods are sold at a market" },
      { word: "stallholder", partOfSpeech: "noun", definition: "the person who runs a market stall" },
      { word: "wedge", partOfSpeech: "noun", definition: "a thick triangular cut of something" },
      { word: "busker", partOfSpeech: "noun", definition: "a street performer who plays for coins" },
      { word: "aged", partOfSpeech: "adjective", definition: "matured, usually for months or years" },
      { word: "unsold", partOfSpeech: "adjective", definition: "not yet bought by anyone" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-04",
    title: "Joining the university swim club",
    topic: "Hobbies and clubs",
    difficulty: 1,
    estimatedMinutes: 5,
    passage:
      "The swim club trains at six in the morning, which sounded impos___ to me until I tried it. New members swim in the slow lane, where the coach drills the basics: breath___ to the side, streamline glid___ off every wall, and a kick that stays inside the water. She films us underwat___, plays the record___ back in slow motion, and circles every fault with a red marker. After a month my times dropped, my shoulders stopped ach___, and the alarm stopped being an enem___. What nobody tells you is that the cold water is the easy part; getting out of a warm bed is the whole batt___.",
    questions: [
      {
        kind: "words", no: 1, masked: "impos___", answer: "impossible",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The narrator found the early hour unthinkable at first; the complement after 'sounded' must be an adjective, and impossible builds im- onto possible.",
          grammarNote: "Adjective after 'sounded'; the im- prefix carries the negation, -ible the possibility.",
        },
      },
      {
        kind: "words", no: 2, masked: "breath___", answer: "breathing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The coach's drills are listed as gerunds; breathing to the side names the stroke skill, and the -ing form keeps the list parallel.",
          grammarNote: "Gerund in a list of drills; the noun phrase tells you when to turn the head — parallel with 'gliding'.",
        },
      },
      {
        kind: "words", no: 3, masked: "glid___", answer: "gliding",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The second drill in the colon list is another gerund; gliding off the wall means pushing off in a straight line, matching 'streamline' before it.",
          grammarNote: "Gerund parallel to 'breathing'; the verb glide drops nothing before -ing.",
        },
      },
      {
        kind: "words", no: 4, masked: "underwat___", answer: "underwater",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The camera films the swimmers from below the surface; underwater is a compound that acts as an adverb here, fixing where the filming happens.",
          grammarNote: "Compound adverb: under + water; the film is shot beneath the surface.",
        },
      },
      {
        kind: "words", no: 5, masked: "record___", answer: "recording",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The coach plays the video back; the object of 'plays' is a noun, and the -ing nominal turns the verb record into the thing played.",
          grammarNote: "The -ing nominal 'recording' is the object of 'plays back'.",
        },
      },
      {
        kind: "words", no: 6, masked: "ach___", answer: "aching",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "After 'stopped' a gerund follows; the shoulders quit hurting once the body adapted, and aching keeps its silent e before -ing.",
          grammarNote: "The verb ache keeps the e before -ing; 'stopped aching' uses the gerund after 'stopped'.",
        },
      },
      {
        kind: "words", no: 7, masked: "enem___", answer: "enemy",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The alarm is compared to an opponent; the noun after 'an' must be singular, and enemy names the thing the sleeper fights each morning.",
          grammarNote: "Predicate noun after 'being an'; the singular matches the single alarm.",
        },
      },
      {
        kind: "words", no: 8, masked: "batt___", answer: "battle",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The closing contrast says the hard part is leaving bed, not the cold water; battle completes the idiom and the metaphor of the fight.",
          grammarNote: "Fixed phrase 'the whole battle'; the noun completes the metaphor of struggle.",
        },
      },
    ],
    vocabulary: [
      { word: "lane", partOfSpeech: "noun", definition: "a marked section of the pool for one swimmer" },
      { word: "streamline", partOfSpeech: "noun", definition: "a body position that reduces drag in the water" },
      { word: "drill", partOfSpeech: "verb", definition: "to practise a skill repeatedly" },
      { word: "fault", partOfSpeech: "noun", definition: "a mistake in technique" },
      { word: "alarm", partOfSpeech: "noun", definition: "the clock that wakes you" },
      { word: "enemy", partOfSpeech: "noun", definition: "the thing you have to fight" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-05",
    title: "The library during exam week",
    topic: "Study and libraries",
    difficulty: 1,
    estimatedMinutes: 5,
    passage:
      "During exam week the library changes character. Tables that sat empty all term are occup___ from opening time, and the silence feels heavier, almost solid. Librarians walk the floors with softly ring___ trolleys, reshelv___ the returns and leaving trail___ of paper slips that mark where someone studied until clos___. Outside, the quad is empty; inside, highlight___ click, pages turn, and somewhere a pen taps a nervous rhythm. At midnight the lights dim to half, the heating drops, and the last readers wrap scarv___ around their necks and file out into the cold, promis___ themselves the same seat tomorrow.",
    questions: [
      {
        kind: "words", no: 1, masked: "occup___", answer: "occupied",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The tables fill with students; the passive are-structure needs the past participle, and occupied reports the state from opening time onward.",
          grammarNote: "Passive participle: 'are ___ from opening time' — the tables do not fill themselves.",
        },
      },
      {
        kind: "words", no: 2, masked: "ring___", answer: "ringing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The trolleys make a quiet sound as they roll; the present participle ringing modifies the noun and carries the continuous sound of the wheels.",
          grammarNote: "The -ing participle acts as an adjective before 'trolleys' — softly ringing wheels.",
        },
      },
      {
        kind: "words", no: 3, masked: "reshelv___", answer: "reshelving",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The librarians do two things as they walk; the second action is a participle, and reshelving means putting returned books back in place.",
          grammarNote: "Participle phrase sharing the subject of 'walk': reshelving the returns.",
        },
      },
      {
        kind: "words", no: 4, masked: "trail___", answer: "trails",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The slips left behind are plural, like footprints; trail is the noun the image needs, and the plural matches the many slips on the floor.",
          grammarNote: "Plural noun after 'leaving'; the -s plural fits the scattered paper slips.",
        },
      },
      {
        kind: "words", no: 5, masked: "clos___", answer: "closing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Someone studied right up to the end of the day; closing is the -ing nominal for the hour the library shuts, after the preposition 'until'.",
          grammarNote: "The noun 'closing' = the time the library shuts; 'until closing' is a fixed time expression.",
        },
      },
      {
        kind: "words", no: 6, masked: "highlight___", answer: "highlighters",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The pens that mark text in colour click in the quiet room; the -er noun names the tool, plural because the sound comes from many.",
          grammarNote: "Agent noun in -ers built on the verb highlight; the plural matches the plural verb 'click'.",
        },
      },
      {
        kind: "words", no: 7, masked: "scarv___", answer: "scarves",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Several readers leave at midnight; the noun after 'wrap' must be plural, and scarf takes the irregular -ves plural exactly like loaf.",
          grammarNote: "Plural of scarf swaps the -f for -ves; 'their necks' confirms more than one reader.",
        },
      },
      {
        kind: "words", no: 8, masked: "promis___", answer: "promising",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "As the readers leave they make a quiet vow to themselves; the participle attaches the second action to the first, with no conjunction needed.",
          grammarNote: "Participle after 'file out', sharing the subject 'readers' — the promise is simultaneous.",
        },
      },
    ],
    vocabulary: [
      { word: "trolley", partOfSpeech: "noun", definition: "a small wheeled cart" },
      { word: "returns", partOfSpeech: "noun", definition: "books brought back to the library" },
      { word: "slip", partOfSpeech: "noun", definition: "a small piece of paper" },
      { word: "quad", partOfSpeech: "noun", definition: "the open square at the centre of a campus" },
      { word: "heating", partOfSpeech: "noun", definition: "the system that warms a building" },
      { word: "file", partOfSpeech: "verb", definition: "to walk in a line, one after another" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-06",
    title: "My host family's garden",
    topic: "Home life",
    difficulty: 1,
    estimatedMinutes: 5,
    passage:
      "My host family treats their small garden like an extra room. In March we sow tomato seeds in trays on the windowsill; by May the seedl___ are strong enough to plant out, and by August the vines need tying to stak___ or they sprawl across the path. Mrs Adeyemi grows mint in a pot she moves around the yard, chas___ the sun. Everything planted is eventually eaten: courgettes grat___ into bread, plums boil___ into jam, green tomato___ fried at the end of summer. On Sundays we carry chairs under the plum tree, and the neighbour's cat, having giv___ up on catching birds, curls up on the warm step. Gardening, I have learned, is mostly wait___: you water, you weed, and then one morning everything is ready at once.",
    questions: [
      {
        kind: "words", no: 1, masked: "seedl___", answer: "seedlings",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The seeds have sprouted by May; the subject of 'are' must be plural, and seedlings names the young plants grown from the seeds sown in March.",
          grammarNote: "Plural noun as subject: 'the ___ are strong' — the plural verb 'are' forces the plural noun.",
        },
      },
      {
        kind: "words", no: 2, masked: "stak___", answer: "stakes",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Tomato vines are tied to posts so they grow upward; stakes are the supports, plural because several vines each need one to climb.",
          grammarNote: "Plural noun after 'tying to'; the supports are counted per vine, so the plural fits.",
        },
      },
      {
        kind: "words", no: 3, masked: "chas___", answer: "chasing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Mrs Adeyemi moves the mint pot to follow the sunlight; the present participle attaches this purpose to the action of moving around the yard.",
          grammarNote: "Participle phrase after the object clause; the pot follows the sunlight around the yard.",
        },
      },
      {
        kind: "words", no: 4, masked: "grat___", answer: "grated",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The list of cooked things uses reduced passives; grated describes what happens to the courgettes before they reach the bread, exactly as boiled does for the plums.",
          grammarNote: "Past participle as a reduced passive: courgettes that are grated into the bread.",
        },
      },
      {
        kind: "words", no: 5, masked: "boil___", answer: "boiled",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The plums become jam; the participle keeps the list parallel, and the meaning is passive — the plums do not do the boiling themselves.",
          grammarNote: "Second reduced passive in the list; parallel with 'grated'.",
        },
      },
      {
        kind: "words", no: 6, masked: "tomato___", answer: "tomatoes",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The green unripe fruits are fried at summer's end; the plural of tomato takes -es, a spelling pattern shared with potato and hero.",
          grammarNote: "Nouns ending in -o add -es: potato, tomato, hero — the classic primary-school plural.",
        },
      },
      {
        kind: "words", no: 7, masked: "giv___", answer: "given",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The cat stopped hunting before settling on the step; 'having ___ up' needs the participle given to build that earlier-in-the-past meaning.",
          grammarNote: "Past participle after 'having'; the perfect participle places the cat's surrender before the curling up.",
        },
      },
      {
        kind: "words", no: 8, masked: "wait___", answer: "waiting",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The closing line names what gardening really is; waiting turns the verb into a noun, and the colon's list explains what fills that waiting.",
          grammarNote: "Predicate noun after 'is mostly'; the -ing nominal makes the verb into the garden's whole activity.",
        },
      },
    ],
    vocabulary: [
      { word: "sow", partOfSpeech: "verb", definition: "to plant seeds in the ground or in trays" },
      { word: "sprawl", partOfSpeech: "verb", definition: "to spread out untidily in all directions" },
      { word: "courgette", partOfSpeech: "noun", definition: "a small green vegetable, also called zucchini" },
      { word: "windowsill", partOfSpeech: "noun", definition: "the flat shelf at the bottom of a window" },
      { word: "weed", partOfSpeech: "verb", definition: "to remove unwanted plants from a garden" },
      { word: "stake", partOfSpeech: "noun", definition: "a wooden post a plant is tied to" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-07",
    title: "The night bus to the coast",
    topic: "Travel",
    difficulty: 1,
    estimatedMinutes: 5,
    passage:
      "The night bus to the coast leaves at eleven, when the station is quiet and the ven___ machines hum. I chose the seat behind the driver, stow___ my bag in the overhead rack and drap___ my coat over my knees. The driver checks her mirrors, signs a logbook, and pulls out into empty streets. City lights thin out; the road climb___ through pinewoods, and fog press___ against the glass. Near dawn the smell of the sea pours through the vents, salt___ and cold. By the time we stop, the quay is awake: boats unload their nets, and a café with steam___-up windows is fry___ the first bread of the day. You pay for the fare with sleep, and the refund is a sunrise over water.",
    questions: [
      {
        kind: "words", no: 1, masked: "ven___", answer: "vending",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The machines sell snacks in the quiet station; vending modifies the noun, and the -ing participle tells what the machine does there.",
          grammarNote: "The -ing form acts as an adjective before 'machines' — a machine that vends.",
        },
      },
      {
        kind: "words", no: 2, masked: "stow___", answer: "stowing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The actions of settling in share one subject; the -ing participle attaches stowing to chose, and the y changes to i before the suffix.",
          grammarNote: "Participle phrase after 'I chose'; stow becomes stowing with the y-to-i change.",
        },
      },
      {
        kind: "words", no: 3, masked: "drap___", answer: "draping",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The second half of the participial phrase needs the same -ing form; draping runs parallel to stowing, and the e is kept before -ing.",
          grammarNote: "Parallel participle with 'stowing'; drape adds -ing directly, keeping the e.",
        },
      },
      {
        kind: "words", no: 4, masked: "climb___", answer: "climbs",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The present tense narrative describes the route; a singular subject takes the -s verb ending, and climbs agrees with 'the road'.",
          grammarNote: "Third-person singular -s: the road is the subject, so the verb takes -s.",
        },
      },
      {
        kind: "words", no: 5, masked: "press___", answer: "presses",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Fog acts on the glass along the climbing road; the singular subject needs the -es form of press, matching the agreement of climbs above.",
          grammarNote: "Singular subject 'fog': the verb takes -es after the -ss ending.",
        },
      },
      {
        kind: "words", no: 6, masked: "salt___", answer: "salted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The smell arriving through the vents is described by two coordinated adjectives; salted is the participle that tells what the air tastes of.",
          grammarNote: "Adjective built as a past participle; 'salted and cold' coordinates two adjectives after 'smell'.",
        },
      },
      {
        kind: "words", no: 7, masked: "steam___", answer: "steamed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The café windows are covered in condensation as the passengers arrive; the -ed participle builds the compound adjective that pictures them from outside.",
          grammarNote: "Compound adjective with -ed: 'steamed-up windows' — the participle forms the first half of the compound.",
        },
      },
      {
        kind: "words", no: 8, masked: "fry___", answer: "frying", lure: ["fryed"],
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The café is cooking as the passengers arrive; the progressive needs the -ing participle, and fry changes its y to i rather than doubling anything.",
          grammarNote: "Present progressive after 'is'; fry changes y to i before -ing — the spelling point of the item.",
        },
      },
    ],
    vocabulary: [
      { word: "quay", partOfSpeech: "noun", definition: "the stone platform where boats load and unload" },
      { word: "logbook", partOfSpeech: "noun", definition: "a notebook where events are officially recorded" },
      { word: "rack", partOfSpeech: "noun", definition: "a frame for holding luggage above a seat" },
      { word: "vent", partOfSpeech: "noun", definition: "an opening that lets air pass through" },
      { word: "pinewood", partOfSpeech: "noun", definition: "a forest of pine trees" },
      { word: "refund", partOfSpeech: "noun", definition: "money given back for something" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
