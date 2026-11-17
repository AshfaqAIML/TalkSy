/**
 * TOEFL Reading Practice Library — Complete the Words, batch 2 (PROMPT 49).
 *
 * Seven foundation exercises (difficulty 2). Everyday scenes with richer
 * morphology than batch 1: past forms, participial adjectives, doubling
 * rules, agent and abstract nouns, third-person -s. 8–9 masked words per
 * passage. All passages are original TalkSy practice material.
 */

import { TOEFL_READING_BANK_SOURCE_NOTE, type ToeflReadingExercise } from "./types";

export const words2Exercises: ToeflReadingExercise[] = [
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-08",
    title: "Baking with grandmother",
    topic: "Family traditions",
    difficulty: 2,
    estimatedMinutes: 6,
    passage:
      "Every December my grandmother bakes the same twelve plait___ loaves she learned from her mother in Kraków. The kitchen turns into a flour storm: counters dust___ white, windows fogg___ with warmth, the mixer humm___ over a mountain of dough. She never measur___ anything. Butter the size of an egg, she says, hold___ up a fist; flour until the dough stops stick___. The loaves must rest under a cloth for one hour, and woe to anyone who peeks. When the braids come out gold___, we brush them with butter and stack them on the windowsill. Neighbours receive two each; nobody remembers when that tradition start___, but nobody has ever had to ask. Recipes like this are less instruction than inheritance — the amounts live in her hands, not on paper.",
    questions: [
      {
        kind: "words", no: 1, masked: "plait___", answer: "plaited",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The loaves are braided in the shape her mother taught; the participle before the noun describes the finished pattern, and plaited means the same as braided.",
          grammarNote: "Past participle as an adjective before 'loaves'; plait = braid, and the -ed form describes the result.",
        },
      },
      {
        kind: "words", no: 2, masked: "dust___", answer: "dusted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The flour has settled on every surface; the past participle describes the state the storm left behind, like a room dusted with snow.",
          grammarNote: "Participle after 'counters': a passive result — counters dusted white.",
        },
      },
      {
        kind: "words", no: 3, masked: "fogg___", answer: "fogged",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The warm kitchen steams the glass; the participle fogged takes a doubled g because the base ends in a short vowel plus consonant.",
          grammarNote: "Doubling: a single syllable ending in consonant-vowel-consonant doubles — fogged with two g's.",
        },
      },
      {
        kind: "words", no: 4, masked: "humm___", answer: "humming",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The mixer works over the dough for minutes; the -ing form needs the doubled m, exactly the rule that produced fogged two sentences earlier.",
          grammarNote: "The same doubling rule as fogged: humm- before -ing keeps the vowel short.",
        },
      },
      {
        kind: "words", no: 5, masked: "measur___", answer: "measured",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Grandmother cooks without cups and spoons; the negated adverb 'never' takes the past verb, and measured keeps the e the noun measurement carries.",
          grammarNote: "The verb measure drops nothing before -ed; 'never ___ anything' needs the past tense for the habitual story.",
        },
      },
      {
        kind: "words", no: 6, masked: "hold___", answer: "holding",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Her demonstration accompanies the words; the present participle attaches the gesture to the speech, and holding keeps its silent d.",
          grammarNote: "Participial phrase inserting the gesture: 'she says, holding up a fist'.",
        },
      },
      {
        kind: "words", no: 7, masked: "stick___", answer: "sticking",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The flour is added until the dough stops being tacky; after 'stops' a gerund follows, and sticking needs no doubled consonant.",
          grammarNote: "Stops + gerund: 'stops sticking' — the dough ceases to be tacky; ck is never doubled.",
        },
      },
      {
        kind: "words", no: 8, masked: "gold___", answer: "golden",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The braided loaves come out of the oven with the colour the task names; golden is the -en adjective built on gold, as wooden is built on wood.",
          grammarNote: "Adjective built from the noun gold with -en: golden, like wooden and silken.",
        },
      },
      {
        kind: "words", no: 9, masked: "start___", answer: "started",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The sentence asks when the custom began; the embedded clause after 'remembers when' needs the past tense, and started carries it.",
          grammarNote: "Past tense in the relative clause: 'when that tradition started' — nobody remembers the origin.",
        },
      },
    ],
    vocabulary: [
      { word: "plait", partOfSpeech: "verb", definition: "to twist strands together into a braid" },
      { word: "dough", partOfSpeech: "noun", definition: "the flour-and-water mixture before baking" },
      { word: "braid", partOfSpeech: "noun", definition: "a plaited strip of bread or hair" },
      { word: "inheritance", partOfSpeech: "noun", definition: "something handed down within a family" },
      { word: "peek", partOfSpeech: "verb", definition: "to look quickly and secretly" },
      { word: "woe", partOfSpeech: "noun", definition: "trouble or misfortune (used as a warning)" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-09",
    title: "The night of the talent show",
    topic: "School events",
    difficulty: 2,
    estimatedMinutes: 6,
    passage:
      "The talent show was the one evening the gym lost its echo. Mr Dlamini, who usually guards the equipment room, strung fairy lights across the hoops and drap___ the bleachers in blue paper. Backstage smelled of hairspray and panic. The magician from Year 10 dropp___ his cards twice during rehears___, the dancers argued over the running order, and someone's guitar amp humm___ a note nobody could find. Yet when the lights dimm___, everything held together. The headteacher laughed until she wiped tears; the juniors' play about a talking lift won the biggest applause, and the magician, having finally nail___ his shuffle, took his bow. Cleaning up afterwards, Mr Dlamini said the best acts are always the nervous ones — confid___ performers rehearse, but frighten___ ones remember every word.",
    questions: [
      {
        kind: "words", no: 1, masked: "drap___", answer: "draped",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Mr Dlamini did two things to the gym; the second verb parallels 'strung', and draped keeps its e before the ending.",
          grammarNote: "Past participle in a coordinate clause with 'strung'; the -ed form keeps the silent e.",
        },
      },
      {
        kind: "words", no: 2, masked: "dropp___", answer: "dropped",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The magician fumbles in rehearsal; the past tense needs the doubled p that all short vowel-plus-consonant verbs take.",
          grammarNote: "Doubling rule: drop has one syllable ending in p, so the p doubles in the past.",
        },
      },
      {
        kind: "words", no: 3, masked: "rehears___", answer: "rehearsal",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The practice run happens before the show; the preposition needs a noun, and rehearsal is the -al noun that names the whole event.",
          grammarNote: "Noun in -al built on the verb rehearse; 'during' takes the noun as its object.",
        },
      },
      {
        kind: "words", no: 4, masked: "humm___", answer: "hummed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The amplifier makes a stray note; the past tense of hum doubles the m exactly as drop doubles its p in the same paragraph.",
          grammarNote: "The same doubling family as dropped: humm- with a double m in the past.",
        },
      },
      {
        kind: "words", no: 5, masked: "dimm___", answer: "dimmed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The moment of transition is the lights going down; the past tense doubles the m like hummed, and the clause fixes the timing.",
          grammarNote: "A third doubling of the passage: dim gives dimmed, and 'when the lights dimmed' sets the scene change.",
        },
      },
      {
        kind: "words", no: 6, masked: "nail___", answer: "nailed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The perfect participle places the success after the two failures; having finally nailed means the shuffle worked only at the third attempt.",
          grammarNote: "Perfect participle after 'having finally'; the past participle is nailed with the silent e kept.",
        },
      },
      {
        kind: "words", no: 7, masked: "confid___", answer: "confident",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The closing contrast pairs two kinds of performers; the adjective needed is the one built on confidence, and it contrasts with frightened.",
          grammarNote: "Adjective before 'performers'; the -ent adjective is built on the noun confidence.",
        },
      },
      {
        kind: "words", no: 8, masked: "frighten___", answer: "frightened",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The nervous performers are the ones who remember every word; the -ed adjective built on the verb frighten completes the paired contrast.",
          grammarNote: "Second adjective of the contrast; frighten + -ed gives the participial adjective 'frightened'.",
        },
      },
    ],
    vocabulary: [
      { word: "bleachers", partOfSpeech: "noun", definition: "the tiered benches at the side of a gym" },
      { word: "hairspray", partOfSpeech: "noun", definition: "spray that holds hair in place" },
      { word: "amp", partOfSpeech: "noun", definition: "an amplifier, making electric instruments louder" },
      { word: "shuffle", partOfSpeech: "noun", definition: "a quick rearrangement of cards" },
      { word: "applause", partOfSpeech: "noun", definition: "clapping from an audience" },
      { word: "bow", partOfSpeech: "noun", definition: "the performer's bend to the audience" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-10",
    title: "A visit to the dentist",
    topic: "Health",
    difficulty: 2,
    estimatedMinutes: 6,
    passage:
      "I put off the dentist for a year, which is exactly a year too long. By the time I called, the receptionist could fit me in only on a Thursday at eight, and I spent the waiting room read___ a poster about flossing. The dentist, cheerful to a suspici___ degree, look___ at one tooth, said 'hmm' in two different tones, and pronounc___ the word 'crown' with the calm of a weather report. I asked how much it would cost. She answer___ without pause, and I gripp___ the armrests. What I feared was not the drill but the bill. The treatment plann___ saved me: spread over three visits, the work was afford___, and the fear I had carried for a year dissolved in fifteen minutes.",
    questions: [
      {
        kind: "words", no: 1, masked: "read___", answer: "reading",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The narrator passes the wait with a poster; after 'spent' a gerund continues the clause, and reading names the activity that filled the time.",
          grammarNote: "Spend + gerund: 'spent the waiting room reading' — the -ing form follows 'spent'.",
        },
      },
      {
        kind: "words", no: 2, masked: "suspici___", answer: "suspicious",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The cheerfulness is almost too bright to trust; the adjective built on suspicion colours the degree, telling you how the narrator reads it.",
          grammarNote: "Adjective from the noun suspicion; -ious carries the meaning 'full of'.",
        },
      },
      {
        kind: "words", no: 3, masked: "look___", answer: "looked",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The dentist examines one tooth; the past tense is the regular form, and the two tones of 'hmm' carry the sentence's suspense forward.",
          grammarNote: "Past tense after 'the dentist'; the regular -ed form follows the verb look.",
        },
      },
      {
        kind: "words", no: 4, masked: "pronounc___", answer: "pronounced",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The word 'crown' is spoken with studied calm; the past tense follows 'said', and pronounce drops nothing before its ending.",
          grammarNote: "Past tense of pronounce; the noun pronunciation keeps the -iation, the verb takes plain -ed.",
        },
      },
      {
        kind: "words", no: 5, masked: "answer___", answer: "answered",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "Her reply comes instantly, without hesitation; the past tense of answer carries the exact moment the narrator braces for the number.",
          grammarNote: "Past tense in the narration; 'without pause' follows the verb, so the -ed form stands alone.",
        },
      },
      {
        kind: "words", no: 6, masked: "gripp___", answer: "gripped",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The narrator holds the armrests at the news; the doubled p follows the short-vowel doubling rule that grip shares with stop and plan.",
          grammarNote: "Doubling again: grip gives gripped, one p in the base, two in the past.",
        },
      },
      {
        kind: "words", no: 7, masked: "plann___", answer: "planned",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The schedule of visits is the thing that saves the narrator money; planned doubles the n exactly as gripped doubled its p.",
          grammarNote: "Past participle inside the noun phrase 'the treatment planned'; the double n matches the doubling rule.",
        },
      },
      {
        kind: "words", no: 8, masked: "afford___", answer: "affordable",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The work becomes possible because it is spread out; affordable builds the -able adjective on afford, the pattern behind compostable.",
          grammarNote: "Adjective built on the verb afford with -able: it means 'can be afforded'.",
        },
      },
    ],
    vocabulary: [
      { word: "receptionist", partOfSpeech: "noun", definition: "the person who books appointments at a desk" },
      { word: "flossing", partOfSpeech: "noun", definition: "cleaning between the teeth with thread" },
      { word: "crown", partOfSpeech: "noun", definition: "an artificial cover fitted over a tooth" },
      { word: "armrest", partOfSpeech: "noun", definition: "the padded support on the side of a chair" },
      { word: "treatment", partOfSpeech: "noun", definition: "the medical or dental work done" },
      { word: "dissolve", partOfSpeech: "verb", definition: "to disappear gradually" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-11",
    title: "The street that learned to sort its rubbish",
    topic: "Community action",
    difficulty: 2,
    estimatedMinutes: 6,
    passage:
      "Our street's recycling drive began as an argument at a party and ended with forty households sort___ their rubbish within a month. Priya print___ a one-page guide: which plastics the plant accept___, why greasy cardboard ruin___ a batch, and where batteries must never go. We measur___ results in wheelie bins, not in speeches. The first week was confus___ — bins stood out on the wrong morning, labels argu___ with each other — but by the third collection the street had a rhythm. The council sent an inspector, expect___ nothing, and left impressed enough to double our bins. Priya's final report ran to two lines: people will sort their waste when the rules fit on one page and someone they trust explains them once.",
    questions: [
      {
        kind: "words", no: 1, masked: "sort___", answer: "sorted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The drive's outcome is forty homes separating their waste; the participle completes 'ended with', describing the achieved state a month later.",
          grammarNote: "Past participle after 'households': the households ended by sorting their own rubbish.",
        },
      },
      {
        kind: "words", no: 2, masked: "print___", answer: "printed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The guide is the tool that makes the rules shareable; the past tense carries Priya's one decisive action at the start.",
          grammarNote: "Past tense in the narration; the single action that starts the whole system.",
        },
      },
      {
        kind: "words", no: 3, masked: "accept___", answer: "accepts",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The guide lists what the facility can take; the present tense with a singular subject needs -s, and accepts agrees with 'the plant'.",
          grammarNote: "Third-person singular -s: the plant is singular, so the verb takes -s in the present.",
        },
      },
      {
        kind: "words", no: 4, masked: "ruin___", answer: "ruins",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The rule explains a general fact; the singular subject 'cardboard' takes the -s verb in the present, like accepts before it.",
          grammarNote: "Another third-person singular: greasy cardboard ruins a batch — a general truth in the present.",
        },
      },
      {
        kind: "words", no: 5, masked: "measur___", answer: "measured",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The street counted success in bins rather than rhetoric; the past tense reports how the group tracked progress each week.",
          grammarNote: "Past tense of measure, the e kept before -ed; 'we measured' reports the method.",
        },
      },
      {
        kind: "words", no: 6, masked: "confus___", answer: "confusing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The first week produced mistakes and mismatched rules; the -ing adjective suits the cause of the trouble, not the people feeling it.",
          grammarNote: "Participial adjective after 'was': the week itself felt confusing, so the -ing form describes the cause.",
        },
      },
      {
        kind: "words", no: 7, masked: "argu___", answer: "argued",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The printed instructions contradicted one another; the past tense of argue carries the comic image of labels quarrelling at the kerb.",
          grammarNote: "Past tense of argue, the e kept before -d; the labels disagreed with each other.",
        },
      },
      {
        kind: "words", no: 8, masked: "expect___", answer: "expecting",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The inspector's low expectations are attached to his arrival; the present participle shares the subject of 'sent', and the surprise follows.",
          grammarNote: "Participle after 'sent': the inspector arrived expecting nothing — a reduced clause.",
        },
      },
    ],
    vocabulary: [
      { word: "household", partOfSpeech: "noun", definition: "one home, the people living at one address" },
      { word: "batch", partOfSpeech: "noun", definition: "a group of things processed together" },
      { word: "wheelie bin", partOfSpeech: "noun", definition: "a wheeled rubbish container" },
      { word: "council", partOfSpeech: "noun", definition: "the local government body" },
      { word: "inspector", partOfSpeech: "noun", definition: "an official sent to check something" },
      { word: "speech", partOfSpeech: "noun", definition: "talk given to a crowd, here contrasted with results" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-12",
    title: "Saturday mornings at the animal shelter",
    topic: "Volunteering",
    difficulty: 2,
    estimatedMinutes: 6,
    passage:
      "The shelter smells of disinfect___ and warm fur. On Saturday mornings I clean the kennels while the dogs bark their opinion___ of breakfast; by ten they are walk___, fed. The work is less cute than people imagine: litter trays, washing machin___ running all day, and a clipboard that tracks every cat's mood. The staff taught me to read the animals quickly — a dog that turns its head away is not stubborn, it is frighten___. Last month a terrier arrived tremb___; he was simply new. Two weeks of patience later he slept in the sun. Nothing about that transform___ was magic; it was repetition, and someone show___ up day after day. The shelter's motto hangs over the sink: 'They arrived scared. We arrive daily.'",
    questions: [
      {
        kind: "words", no: 1, masked: "disinfect___", answer: "disinfectant",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The first sentence sets the scene through smell; disinfectant is the -ant noun for the chemical, the pattern of assistant and applicant.",
          grammarNote: "Noun built on the verb disinfect with -ant; the smell names the substance.",
        },
      },
      {
        kind: "words", no: 2, masked: "opinion___", answer: "opinions",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The dogs are jokingly given views on breakfast; the possessive 'their' forces the plural noun, and the humour of the image depends on it.",
          grammarNote: "Plural noun after 'their'; the -s plural follows the possessive determiner.",
        },
      },
      {
        kind: "words", no: 3, masked: "walk___", answer: "walked",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "By ten the morning routine is complete; the participle coordinates with 'fed' to report the dogs' resulting state, not an action in progress.",
          grammarNote: "Passive-style participle after 'are': walked, fed — a coordinated result state.",
        },
      },
      {
        kind: "words", no: 4, masked: "machin___", answer: "machines",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The laundry never stops at a shelter; the plural matches 'running all day', because one machine could not survive the workload.",
          grammarNote: "Plural noun; the subject of 'running' is counted per load, so the plural fits the reality.",
        },
      },
      {
        kind: "words", no: 5, masked: "frighten___", answer: "frightened",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The lesson reinterprets the head-turn; the -ed adjective names the emotional state, and the sentence teaches the volunteer what the posture means.",
          grammarNote: "Participial adjective after 'is': frightened describes the dog's state, not an action.",
        },
      },
      {
        kind: "words", no: 6, masked: "tremb___", answer: "trembling",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The terrier shakes as he comes through the door; the participle attaches the shaking to the arrival, sharing its subject.",
          grammarNote: "Present participle after 'arrived' as a reduced clause: he arrived trembling.",
        },
      },
      {
        kind: "words", no: 7, masked: "transform___", answer: "transformation",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The closing reflection names the change the terrier underwent; transformation is the -ation noun, and the sentence denies it was magic.",
          grammarNote: "Noun in -ation built on the verb transform; the abstract noun names the whole change.",
        },
      },
      {
        kind: "words", no: 8, masked: "show___", answer: "showing",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The secret of the shelter is somebody returning every day; the gerund after 'someone' names the continuing action, and 'day after day' underlines it.",
          grammarNote: "Someone + present participle: 'someone showing up day after day' — the reduced clause carries the habitual meaning.",
        },
      },
    ],
    vocabulary: [
      { word: "kennel", partOfSpeech: "noun", definition: "the individual indoor box an animal sleeps in" },
      { word: "litter tray", partOfSpeech: "noun", definition: "the shallow box a cat uses" },
      { word: "clipboard", partOfSpeech: "noun", definition: "a board holding paper for notes" },
      { word: "terrier", partOfSpeech: "noun", definition: "a small, energetic breed of dog" },
      { word: "motto", partOfSpeech: "noun", definition: "a short sentence expressing a rule" },
      { word: "repetition", partOfSpeech: "noun", definition: "doing the same thing again and again" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-13",
    title: "The lost backpack",
    topic: "Personal narrative",
    difficulty: 2,
    estimatedMinutes: 6,
    passage:
      "I lost my backpack between the lecture hall and the bus stop — a two-minute walk, so the mystery was attention, not distance. It held my laptop, a three-weeks-overdue library book, and a sandwich I was regret___. The university's lost proper___ office runs on honesty and cardboard boxes. Two days later an email arriv___: a first-year had found the bag under a bench, guard___ it through one lecture, and left his own note — 'your book is good, chapter six is the best one'. The laptop was untouch___; the book now smell___ of another person's coffee. The sandwich, the office told me, had been deal___ with. I have decid___ that losing things on a small campus is not really losing: it is lending them to whoever finds them first.",
    questions: [
      {
        kind: "words", no: 1, masked: "regret___", answer: "regretting",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The past progressive needs the -ing form; regretting doubles the t, and the joke is that the regret started before the bag was lost.",
          grammarNote: "Was + already + gerund: the progressive of the sandwich regret; a double t after the short vowel.",
        },
      },
      {
        kind: "words", no: 2, masked: "proper___", answer: "property",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The office that stores lost items is named by what it handles; property is the -ty noun for possessions, and lost property is the fixed compound.",
          grammarNote: "Noun built on proper with -ty; the compound noun names the office's purpose.",
        },
      },
      {
        kind: "words", no: 3, masked: "arriv___", answer: "arrived",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The recovery arrives by message two days later; the past tense carries the moment, and the e is kept before the d.",
          grammarNote: "Past tense of arrive keeping the e; the email is the event that ends the mystery.",
        },
      },
      {
        kind: "words", no: 4, masked: "guard___", answer: "guarded",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The finder's three actions share the past perfect; guarded is the participle that parallels found and left in the list.",
          grammarNote: "Past participle coordinating with 'had found': the participle shares the auxiliary 'had'.",
        },
      },
      {
        kind: "words", no: 5, masked: "untouch___", answer: "untouched",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The state of the laptop is reported as a result; the -ed participle means nobody had opened or harmed it during its journey.",
          grammarNote: "Past participle as an adjective: the laptop was untouched — nothing happened to it.",
        },
      },
      {
        kind: "words", no: 6, masked: "smell___", answer: "smells",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The present tense reports a lasting state; a singular subject takes the -s ending, and smells agrees with the book that travelled.",
          grammarNote: "Third-person singular -s: the subject is 'the book', so the verb takes -s.",
        },
      },
      {
        kind: "words", no: 7, masked: "deal___", answer: "dealt",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "The office's euphemism hides the sandwich's fate; deal is irregular, and the passive 'had been dealt with' needs the participle dealt.",
          grammarNote: "Irregular past participle: deal becomes dealt, used in the passive 'had been dealt with'.",
        },
      },
      {
        kind: "words", no: 8, masked: "decid___", answer: "decided",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The narrator closes with a philosophy; the present perfect needs the participle, and decided keeps the e of decide, never dropping it.",
          grammarNote: "Present perfect after 'I have'; the past participle completes the decision.",
        },
      },
    ],
    vocabulary: [
      { word: "overdue", partOfSpeech: "adjective", definition: "later than the allowed date" },
      { word: "honesty", partOfSpeech: "noun", definition: "the quality of telling the truth" },
      { word: "bench", partOfSpeech: "noun", definition: "a long seat, usually outdoors" },
      { word: "note", partOfSpeech: "noun", definition: "a short written message" },
      { word: "cardboard", partOfSpeech: "noun", definition: "stiff brown packing material" },
      { word: "lecture", partOfSpeech: "noun", definition: "a teaching talk at university" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "complete-words",
    slug: "toefl-rb-words-14",
    title: "Weather on the mountain",
    topic: "Weather",
    difficulty: 2,
    estimatedMinutes: 6,
    passage:
      "The mountain makes its own weather, the guides say, and by noon I believ___ them. We started in valley fog so thick the rope line seemed decor___; an hour higher, the same fog lay below us like a grey lake. The guide read the sky — squint___ at the far ridge, count___ minutes between a flash and its thund___. When the count fell below ten, we left the ridge. Rain on a mountain is not an event; it is a schedule. By three the clouds had lift___, the air had turned glass-clear, and the valley we had walked out of looked like a place I had only been told about. My legs ach___, my boots were soak___ through, and I would sign up for the same walk tomorrow.",
    questions: [
      {
        kind: "words", no: 1, masked: "believ___", answer: "believed",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The conversion happens by noon; the past tense of believe carries the moment the forecast saying became the narrator's own experience.",
          grammarNote: "Past tense of believe, the e kept; the narrative point where the saying proved true.",
        },
      },
      {
        kind: "words", no: 2, masked: "decor___", answer: "decorative",
        meta: {
          skills: ["vocabulary", "comprehension"],
          explanation:
            "In thick fog the fixed rope cannot be seen, so it only looks pretty; the -ative adjective carries the wry meaning that the line had no function.",
          grammarNote: "Adjective from the verb decorate — here 'seemed decorative', i.e. useless in the fog.",
        },
      },
      {
        kind: "words", no: 3, masked: "squint___", answer: "squinting",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The guide's technique is physical as well as mental; the present participle attaches the squinting to the reading of the sky.",
          grammarNote: "Participle after the dash, sharing the subject 'the guide' — his reading method.",
        },
      },
      {
        kind: "words", no: 4, masked: "count___", answer: "counting",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The seconds between flash and thunder measure the storm's distance; the participle runs parallel to squinting, and the method is the guide's arithmetic.",
          grammarNote: "A participle parallel with 'squinting'; count takes -ing with no change.",
        },
      },
      {
        kind: "words", no: 5, masked: "thund___", answer: "thunder",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The flash comes first and its sound follows; thunder is the -er noun for the sound, and the counting measures the gap between them.",
          grammarNote: "Noun built on the verb with -er; the noun names the sound that follows the flash.",
        },
      },
      {
        kind: "words", no: 6, masked: "lift___", answer: "lifted",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The change happened before three o'clock; the past perfect 'had lifted' reports the clouds gone, and the participle keeps its e.",
          grammarNote: "Past participle after 'had'; the pluperfect places the clearing before the view.",
        },
      },
      {
        kind: "words", no: 7, masked: "ach___", answer: "ached",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The body's verdict on the day arrives at the end; the past tense of ache keeps its silent e exactly as believe did at the opening.",
          grammarNote: "Past tense of ache, the e kept before -d; the plural subject needs no -s in the past.",
        },
      },
      {
        kind: "words", no: 8, masked: "soak___", answer: "soaked",
        meta: {
          skills: ["vocabulary"],
          explanation:
            "The result of the day's rain is the boots' condition; the -ed participle as an adjective reports the state the walk left behind.",
          grammarNote: "Participial adjective after 'were': the boots' state, its cause understood.",
        },
      },
    ],
    vocabulary: [
      { word: "rope line", partOfSpeech: "noun", definition: "the fixed cable climbers clip onto" },
      { word: "ridge", partOfSpeech: "noun", definition: "the narrow top edge of a mountain" },
      { word: "flash", partOfSpeech: "noun", definition: "a sudden burst of light" },
      { word: "glass-clear", partOfSpeech: "adjective", definition: "completely transparent, like clean glass" },
      { word: "guide", partOfSpeech: "noun", definition: "the trained leader of a mountain walk" },
      { word: "squint", partOfSpeech: "verb", definition: "to look with half-closed eyes" },
    ],
    source: TOEFL_READING_BANK_SOURCE_NOTE,
  },
];
