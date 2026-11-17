/**
 * TOEFL Writing Practice Library — Build a Sentence, word order (PROMPT 50).
 *
 * Twenty original exercises (toefl-wb-sent-01…20) testing WORD ORDER:
 * subject–verb–object sequence, adverbial placement, question inversion,
 * fronted structures and the positions of objects and complements. Items
 * are mostly scrambled-segment reorders, with error-repair items at the
 * higher tiers (misplaced modifiers). Four exercises per difficulty tier.
 *
 * All sentences are original TalkSy practice material.
 */

import { TOEFL_WRITING_BANK_SOURCE_NOTE, type ToeflSentenceExercise } from "./types";

export const sentenceWordOrderExercises: ToeflSentenceExercise[] = [
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-01",
    title: "Subject first, verb second",
    focus: "word-order",
    difficulty: 1,
    estimatedMinutes: 6,
    instructions: "Each item gives you the pieces of one sentence in the wrong order. Click or write them in the order English requires: subject, then verb, then the rest.",
    taskRequirements: [
      "Use every segment exactly once.",
      "Start with the subject — the person or thing that acts.",
      "Put the verb immediately after the subject.",
    ],
    timeGuidance: "About one minute per item; the real test gives you roughly a minute for each reconstruction.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["every Friday", "the exam timetable", "posts", "the registrar"],
        answer: "The registrar posts the exam timetable every Friday.",
        meta: {
          explanation: "The registrar is the actor, posts is the action, the exam timetable is what is posted, and every Friday tells us when, so it moves to the end of the statement.",
          grammarNote: "A basic English statement runs subject, verb, object, then time adverbial.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["almost every day", "my roommate", "borrows", "my charger"],
        answer: "My roommate borrows my charger almost every day.",
        meta: {
          explanation: "My roommate performs the action, borrows is the verb, my charger receives it, and almost every day is a frequency adverbial that follows the object.",
          grammarNote: "Frequency adverbials of this type sit at the end, not between the verb and its object.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["at half past seven", "the campus café", "opens"],
        answer: "The campus café opens at half past seven.",
        meta: {
          explanation: "The campus café is the subject and opens is an intransitive verb here, so the time phrase follows the verb directly with no object in between.",
          grammarNote: "Verbs that take no object are followed straight by their adverbial.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the lab reports", "on Mondays", "our tutor", "collects"],
        answer: "Our tutor collects the lab reports on Mondays.",
        meta: {
          explanation: "Our tutor acts, collects is the verb, the lab reports is the object, and on Mondays closes the sentence as a time adverbial after the object.",
          grammarNote: "Time expressions normally come after the object, never between verb and object.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the north gate", "the bus", "leaves", "at ten past eight"],
        answer: "The bus leaves the north gate at ten past eight.",
        meta: {
          explanation: "The bus is the subject; leaves takes the north gate as its object here, and the clock time at ten past eight follows it as the final adverbial.",
          grammarNote: "When two adverbials compete, place follows manner and time usually comes last.",
        },
      },
    ],
    modelResponse: "The keyed orders are: registrar posts timetable, roommate borrows charger, café opens, tutor collects reports, bus leaves the gate. In every case the doer comes first, the verb comes second, and time information closes the sentence.",
    responseAnalysis: "A strong response reads the segments for meaning before touching them: finding the actor, then the action, then what receives it. Learners who sort segments into who, what and when groups rarely misorder them, because each group has only one legal slot.",
    usefulExpressions: [
      "the subject comes first",
      "verb before object",
      "time phrases at the end",
      "who does what to whom",
    ],
    grammarObservations: [
      "English statements follow the subject–verb–object frame so strictly that moving any piece changes the meaning or breaks the sentence.",
      "Adverbials of time and frequency are the most movable elements, but their safest default position is the end of the clause.",
    ],
    commonMistakes: [
      "Placing the time adverbial between the verb and its object, which English avoids.",
      "Starting with the object because it was listed first among the scrambled pieces.",
    ],
    independentAssignment: "Write three sentences about your own week using the subject–verb–object–time frame, then scramble each one for a classmate to rebuild.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-02",
    title: "Questions turn the engine around",
    focus: "word-order",
    difficulty: 1,
    estimatedMinutes: 6,
    instructions: "These scrambled sentences are questions. Remember that questions invert the auxiliary and the subject, and question words always open the sentence.",
    taskRequirements: [
      "Open every question with its question word or auxiliary.",
      "Invert the auxiliary and the subject.",
      "Keep the main verb after the subject.",
    ],
    timeGuidance: "Roughly a minute per item; treat inversion as a pattern you recognise, not one you build from scratch.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct question.",
        segments: ["close", "the writing centre", "does", "when"],
        answer: "When does the writing centre close?",
        meta: {
          explanation: "The question word when opens the question, the auxiliary does inverts with the subject the writing centre, and the bare verb close follows, with no second auxiliary.",
          grammarNote: "Questions invert auxiliary and subject; the main verb stays in its base form after them.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct question.",
        segments: ["need", "how many credits", "do", "first-year students"],
        answer: "How many credits do first-year students need?",
        meta: {
          explanation: "How many credits is the questioned phrase and must lead; the auxiliary do then inverts with first-year students before the verb need.",
          grammarNote: "A questioned quantity behaves as the fronted object of the verb it belongs to.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct question.",
        segments: ["our graduation gowns", "where", "can", "we", "collect"],
        answer: "Where can we collect our graduation gowns?",
        meta: {
          explanation: "Where opens the question, the modal can inverts with we, and the verb phrase collect our graduation gowns follows the subject as a unit.",
          grammarNote: "Modal auxiliaries invert exactly like do, does and did.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct question.",
        segments: ["extend", "the essay deadline", "did", "the professor"],
        answer: "Did the professor extend the essay deadline?",
        meta: {
          explanation: "A yes/no question opens with the auxiliary did, which inverts with the subject the professor; extend keeps its base form because did carries the past tense.",
          grammarNote: "After do, does or did the main verb never keeps a tense ending.",
        },
      },
    ],
    modelResponse: "The keyed questions are: When does the writing centre close? How many credits do first-year students need? Where can we collect our graduation gowns? Did the professor extend the essay deadline? Each opens with the question element, then the inverted auxiliary and subject.",
    responseAnalysis: "Strong responses treat inversion as a fixed engine: question element, auxiliary, subject, verb, leftovers. Learners who try to translate word for word from statement order usually misplace the auxiliary, so practising the pattern as a chant pays off immediately.",
    usefulExpressions: [
      "invert the auxiliary",
      "question word first",
      "base form after do",
      "yes/no questions open with the auxiliary",
    ],
    grammarObservations: [
      "Inversion moves only the auxiliary; the main verb and its objects stay in statement order behind the subject.",
      "Questioned phrases such as how many credits move to the front even though they are grammatically objects.",
    ],
    commonMistakes: [
      "Leaving the main verb in the past tense after did, producing did extended.",
      "Forgetting the question mark, which the reconstruction also has to restore.",
    ],
    independentAssignment: "Turn five statements from your notes into questions, checking each time that only the auxiliary inverted.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-03",
    title: "Adverbs find their slots",
    focus: "word-order",
    difficulty: 2,
    estimatedMinutes: 7,
    instructions: "Each scrambled sentence contains an adverb. Watch where frequency adverbs sit compared with manner and time adverbs, and rebuild the sentence accordingly.",
    taskRequirements: [
      "Place frequency adverbs before the main verb.",
      "Place manner adverbs after the object.",
      "Keep time expressions at the end unless the sentence fronts them deliberately.",
    ],
    timeGuidance: "A minute per item; decide the adverb type before you place it.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["labels", "the lab technician", "carefully", "every sample"],
        answer: "The lab technician carefully labels every sample.",
        alternatives: ["The lab technician labels every sample carefully."],
        meta: {
          explanation: "Carefully can sit between subject and verb or after the object; the keyed order puts it before the verb, where manner adverbs sit naturally when the object is long.",
          grammarNote: "Manner adverbs are mobile, but the slot before the verb keeps focus on how the action is done.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["before ten", "meets", "rarely", "our seminar group"],
        answer: "Our seminar group rarely meets before ten.",
        meta: {
          explanation: "Rarely is a frequency adverb, so it takes the slot immediately before the main verb meets, while the time phrase before ten closes the sentence.",
          grammarNote: "Frequency adverbs stand before the main verb but after the verb be.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["on Sunday evenings", "the librarian", "always", "sends", "reminder emails"],
        answer: "The librarian always sends reminder emails on Sunday evenings.",
        meta: {
          explanation: "Always precedes the main verb sends, its object reminder emails follows, and the longer time expression on Sunday evenings takes the final slot.",
          grammarNote: "Longer time phrases prefer the end of the clause, leaving only single-word adverbs near the verb.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["on a single point", "the two debaters", "never", "agreed"],
        answer: "The two debaters never agreed on a single point.",
        meta: {
          explanation: "Never sits directly before the main verb agreed, and the prepositional phrase on a single point follows the verb as its complement.",
          grammarNote: "Negative frequency adverbs like never occupy the same pre-verb slot as always.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the exhibition stands", "after the fair", "the volunteers", "quietly", "packed up"],
        answer: "The volunteers quietly packed up the exhibition stands after the fair.",
        alternatives: ["The volunteers packed up the exhibition stands quietly after the fair."],
        meta: {
          explanation: "Quietly modifies packed up and sits before the verb here; the object the exhibition stands follows, and after the fair closes the sequence.",
          grammarNote: "Phrasal verbs keep their object between or after the parts, and the adverb may front the whole verb phrase.",
        },
      },
    ],
    modelResponse: "The keyed sentences put carefully and quietly before their verbs, rarely, always and never in the standard pre-verb frequency slot, and the heavier time phrases at the end. Both accepted orders for the manner adverbs show that the meaning survives the move.",
    responseAnalysis: "The distinguishing skill is classifying the adverb before placing it: frequency adverbs hug the main verb, manner adverbs float around the verb phrase, and long time expressions claim the end. Learners who ask which type each adverb is make almost no placement errors.",
    usefulExpressions: [
      "before the main verb",
      "after the object",
      "end position for time phrases",
      "frequency adverbs hug the verb",
    ],
    grammarObservations: [
      "The mid-position slot before the main verb belongs to frequency adverbs, which is why always and never sound natural exactly there.",
      "Manner adverbs in end position can sound emphatic, so writers often move them mid-position when the object grows long.",
    ],
    commonMistakes: [
      "Placing always after the verb, as in sends always, which English never permits.",
      "Squeezing a long time phrase between the verb and its object.",
    ],
    independentAssignment: "Take three sentences from a news article, mark every adverb, and state why each one sits where it does.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-04",
    title: "Indirect objects take two routes",
    focus: "word-order",
    difficulty: 2,
    estimatedMinutes: 7,
    instructions: "Verbs like send, give and show allow two objects. Rebuild each sentence so the person and the thing keep legal positions, using to or for where the order demands it.",
    taskRequirements: [
      "Decide whether the person comes before or after the thing.",
      "Add to or for only when the person follows the thing.",
      "Keep every segment in your answer.",
    ],
    timeGuidance: "Allow yourself ninety seconds on the items with prepositions; the choice of to or for matters.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the scholarship letter", "the awards office", "sent", "to the student"],
        answer: "The awards office sent the scholarship letter to the student.",
        alternatives: ["The awards office sent the student the scholarship letter."],
        meta: {
          explanation: "Sent allows both object orders; the keyed version names the thing first and introduces the person with to, which is the safer order when the thing is the news.",
          grammarNote: "The preposition to marks the receiver when it follows the direct object.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the summer research post", "me", "offered", "my supervisor"],
        answer: "My supervisor offered me the summer research post.",
        meta: {
          explanation: "Offered takes the person first and the thing second with no preposition; reversing them here would require to before me.",
          grammarNote: "The double-object pattern is person, then thing, with nothing in between.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["to every first-year", "the chemistry store", "lends", "safety goggles"],
        answer: "The chemistry store lends safety goggles to every first-year.",
        alternatives: ["The chemistry store lends every first-year safety goggles."],
        meta: {
          explanation: "Lends works like sent: thing first with to, or person first without; the keyed order keeps the goggles in focus and marks the borrower with to.",
          grammarNote: "When the receiver is a longer phrase, the to-order keeps the sentence balanced.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["for the anxious applicant", "the careers service", "booked", "a mock interview"],
        answer: "The careers service booked a mock interview for the anxious applicant.",
        meta: {
          explanation: "Booked benefits its receiver rather than sending something to them, so the person is introduced with for once the thing has been named.",
          grammarNote: "For marks the beneficiary when it follows the direct object.",
        },
      },
    ],
    modelResponse: "The keyed answers show both legal routes: the person-first double object in the supervisor item, and the thing-first order with to or for in the rest. The preposition choice tracks whether the person receives the thing or benefits from it.",
    responseAnalysis: "Two-object verbs reward learners who ask one question: does the person receive the thing or simply gain from it? To answers the first, for the second. The person-first route drops the preposition entirely, and knowing that the two routes are interchangeable removes most hesitation.",
    usefulExpressions: [
      "person before thing",
      "to the receiver",
      "for the beneficiary",
      "double-object verbs",
    ],
    grammarObservations: [
      "Verbs of giving pair with to, while verbs of service or preparation pair with for, and the choice is fixed by the verb.",
      "The double-object order cannot take a preposition, which is why offered me the post needs nothing between the objects.",
    ],
    commonMistakes: [
      "Writing to before the person in the person-first order, as in offered to me the post.",
      "Choosing for with send-type verbs, which reverses the meaning of the sentence.",
    ],
    independentAssignment: "Write two versions of three sentences with give, send and buy, one in each object order, and notice which version you would actually say.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-05",
    title: "Place before time",
    focus: "word-order",
    difficulty: 3,
    estimatedMinutes: 8,
    instructions: "When a sentence carries both place and time information, English orders them in a fixed sequence. Rebuild these scrambled sentences so every adverbial lands in its natural slot.",
    taskRequirements: [
      "Put manner, then place, then time when several adverbials appear.",
      "Never split a verb from its object with an adverbial.",
      "Keep prepositional phrases intact.",
    ],
    timeGuidance: "Ninety seconds per item; long adverbial chains reward a quick mental sort into manner, place and time.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["on the ridge", "before dawn", "the field researchers", "set up", "their weather station"],
        answer: "The field researchers set up their weather station on the ridge before dawn.",
        meta: {
          explanation: "The object their weather station stays glued to the verb; the place phrase on the ridge follows it, and the time phrase before dawn closes the sentence.",
          grammarNote: "English orders end-position adverbials place before time, a fixed sequence.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["carefully", "the technician", "calibrated", "the telescope", "in the dome", "last night"],
        answer: "The technician calibrated the telescope carefully in the dome last night.",
        meta: {
          explanation: "Manner comes first among the trailing adverbials, so carefully precedes the place in the dome, and the time last night takes the final slot.",
          grammarNote: "The full end sequence is manner, place, time, and each element may itself be a phrase.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["on Saturday morning", "at the conference", "her paper", "delivered", "the visiting lecturer"],
        answer: "The visiting lecturer delivered her paper at the conference on Saturday morning.",
        meta: {
          explanation: "Her paper is the object and follows the verb directly; at the conference marks place and precedes the time phrase on Saturday morning.",
          grammarNote: "Longer time expressions always follow place phrases in end position.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["in a single morning", "the volunteers", "planted", "two hundred saplings", "along the riverbank"],
        answer: "The volunteers planted two hundred saplings along the riverbank in a single morning.",
        meta: {
          explanation: "The object two hundred saplings keeps its place after the verb; along the riverbank locates the action and in a single morning times it, in that order.",
          grammarNote: "Place-before-time holds even when both adverbials are long prepositional phrases.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["during the audit", "the archivists", "reboxed", "the fragile maps", "gently", "in the climate room"],
        answer: "The archivists reboxed the fragile maps gently in the climate room during the audit.",
        meta: {
          explanation: "The object the fragile maps follows the verb; the adverbial chain then runs gently for manner, in the climate room for place, and during the audit for time.",
          grammarNote: "All three adverbial types can stack, and their order does not change with length.",
        },
      },
    ],
    modelResponse: "Every keyed sentence keeps the object next to its verb, then stacks the trailing adverbials in the order manner, place, time: carefully or gently first, the location phrase second, and the time expression last.",
    responseAnalysis: "The reliable method is to clear the verb's vicinity first: attach the object, then sort the loose phrases into the three adverbial classes. Learners who memorise the manner-place-time chain as a single rhythm rebuild these sentences almost automatically.",
    usefulExpressions: [
      "manner, place, time",
      "object next to the verb",
      "place before time",
      "adverbial chain",
    ],
    grammarObservations: [
      "The manner-place-time sequence is a default, and skilled writers exploit its predictability to foreground time by moving it to the front instead.",
      "No adverbial may interrupt a verb and its object, which makes the post-object zone the loading area for every trailing phrase.",
    ],
    commonMistakes: [
      "Placing the time phrase before the place phrase in end position, a direct word-order error.",
      "Inserting a place phrase between the verb and a required object.",
    ],
    independentAssignment: "Describe yesterday using one sentence with a manner, place and time adverbial in the correct chain, then rewrite it with the time phrase fronted.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-06",
    title: "Fronting for emphasis",
    focus: "word-order",
    difficulty: 4,
    estimatedMinutes: 8,
    instructions: "English allows adverbials to move to the front for emphasis. Rebuild these sentences with the marked element fronted, watching for the comma and for any inversion the fronting triggers.",
    taskRequirements: [
      "Open with the fronted element and follow it with a comma.",
      "Do not invert unless the fronted element is negative.",
      "Keep the rest of the clause in normal order.",
    ],
    timeGuidance: "Two minutes per item; decide first whether the fronted element demands inversion.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["had submitted", "their ethics forms", "before the deadline", "the whole cohort"],
        answer: "Before the deadline, the whole cohort had submitted their ethics forms.",
        meta: {
          explanation: "The time phrase moves to the front for emphasis, takes a comma, and the clause behind it keeps its normal subject-before-verb order because fronted time phrases do not invert.",
          grammarNote: "Positive fronted adverbials invert nothing; they simply claim the first slot.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["a first-year seminar", "rarely", "has", "attracted", "such a waiting list"],
        answer: "Rarely has a first-year seminar attracted such a waiting list.",
        meta: {
          explanation: "Fronting the negative adverb rarely forces inversion: the auxiliary has moves ahead of the subject, and the main verb attracted follows the subject in its base position.",
          grammarNote: "Negative and restrictive adverbs trigger auxiliary inversion when fronted.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the unfinished dataset", "share", "participants", "should", "under no circumstances"],
        answer: "Under no circumstances should participants share the unfinished dataset.",
        meta: {
          explanation: "The negative prepositional phrase opens the sentence, the modal should inverts with participants, and the verb phrase share the unfinished dataset follows the subject.",
          grammarNote: "Negative prepositional phrases behave like negative adverbs and demand inversion.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the revised article", "only after the review", "did", "the journal", "accept"],
        answer: "Only after the review did the journal accept the revised article.",
        meta: {
          explanation: "Only after the review is fronted, and because only carries a restrictive sense, the auxiliary did inverts with the subject the journal before the base verb accept.",
          grammarNote: "Fronted only-phrases invert exactly like negative adverbs, so the auxiliary crosses the subject.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["notes furiously", "in the back row", "two exchange students", "were taking"],
        answer: "In the back row, two exchange students were taking notes furiously.",
        meta: {
          explanation: "The place phrase fronts for scene-setting without inversion; the subject two exchange students still precedes the verb were taking, and the manner adverbial closes the sentence.",
          grammarNote: "Locative fronting is descriptive, not negative, so the subject keeps first position in the clause.",
        },
      },
    ],
    modelResponse: "The keyed sentences split into two behaviours: plain fronting with a comma and no inversion for time and place phrases, and mandatory inversion after rarely, under no circumstances and only after the review, where the auxiliary crosses in front of the subject.",
    responseAnalysis: "The decision that matters is negative or not. Fronted negatives and only-phrases invert; everything else merely takes a comma. Learners who test each fronted element with that single question avoid both the missing inversion and the false one.",
    usefulExpressions: [
      "fronted for emphasis",
      "no inversion without negation",
      "auxiliary before subject",
      "comma after the fronted phrase",
    ],
    grammarObservations: [
      "Inversion after fronted negatives is grammatical obligation, not style, and its absence reads as an error.",
      "Fronting a place phrase to open a narrative sentence is a common academic scene-setting move that leaves clause order untouched.",
    ],
    commonMistakes: [
      "Inverting after a fronted time phrase, producing before the deadline had the cohort submitted.",
      "Forgetting the comma that separates a long fronted adverbial from its clause.",
    ],
    independentAssignment: "Write one sentence with a fronted negative adverb and one with a fronted place phrase, and label which of the two needed inversion.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-07",
    title: "Modifiers keep their distance",
    focus: "word-order",
    difficulty: 4,
    estimatedMinutes: 9,
    instructions: "Each sentence below contains a modifier that has drifted into the wrong position. Rebuild the sentence so every modifier sits next to what it describes.",
    taskRequirements: [
      "Repair the misplaced modifier without deleting any content.",
      "Keep the modifier beside its target word.",
      "Preserve the original meaning.",
    ],
    timeGuidance: "Two minutes per item; locate the target of the modifier before you move anything.",
    items: [
      {
        no: 1, kind: "correct",
        prompt: "This sentence has a misplaced modifier. Rewrite it correctly.",
        source: "The student almost read all the assigned chapters before the seminar.",
        answer: "The student read almost all the assigned chapters before the seminar.",
        meta: {
          explanation: "Almost modifies all the assigned chapters, not the verb read, so it must sit beside the quantity; the original claims the student merely almost read, which distorts the meaning.",
          grammarNote: "Almost belongs inside the noun phrase it limits, directly before the quantifier.",
        },
      },
      {
        no: 2, kind: "correct",
        prompt: "This sentence has a misplaced modifier. Rewrite it correctly.",
        source: "The department only accepts applications that are complete by Friday.",
        answer: "The department accepts only applications that are complete by Friday.",
        meta: {
          explanation: "Only restricts applications, not the verb accepts, so it moves in front of the noun; the original wording wrongly suggests the department does nothing else with applications.",
          grammarNote: "Only should stand immediately before the element it restricts.",
        },
      },
      {
        no: 3, kind: "correct",
        prompt: "This sentence has a misplaced modifier. Rewrite it correctly.",
        source: "Wrapped in bubble wrap, the technician carried the microscope to the new lab.",
        answer: "The technician carried the microscope, wrapped in bubble wrap, to the new lab.",
        meta: {
          explanation: "The participial phrase wrapped in bubble wrap describes the microscope, not the technician, so it must follow its noun; the original paints a technician wrapped in bubble wrap.",
          grammarNote: "A participial phrase attaches to the nearest noun, so place it beside the noun it describes.",
        },
      },
      {
        no: 4, kind: "correct",
        prompt: "This sentence has a misplaced modifier. Rewrite it correctly.",
        source: "The librarian returned the atlas to the shelf that was torn.",
        answer: "The librarian returned the torn atlas to the shelf.",
        alternatives: ["The librarian returned the atlas that was torn to the shelf."],
        meta: {
          explanation: "The relative clause that was torn modifies the atlas, not the shelf, so it must follow the atlas directly; the original blames the shelf for the damage.",
          grammarNote: "A relative clause binds to the noun immediately before it, so its position decides the meaning.",
        },
      },
      {
        no: 5, kind: "correct",
        prompt: "This sentence has a misplaced modifier. Rewrite it correctly.",
        source: "We nearly finished the group project in a single afternoon which was due on Monday.",
        answer: "We nearly finished the group project, which was due on Monday, in a single afternoon.",
        meta: {
          explanation: "The relative clause describes the project, so it must close up to project; stranded at the end of the original, it absurdly modifies the afternoon.",
          grammarNote: "Interrupting phrases set off by commas keep a relative clause anchored to its noun.",
        },
      },
    ],
    modelResponse: "Each repair moves the modifier beside its target: almost before the quantifier, only before applications, the participial phrase after microscope, the relative clauses after atlas and project. The meaning of every sentence changes when the modifier drifts, which is why position is grammar.",
    responseAnalysis: "The trained reflex is to ask what each modifier describes, then close the distance. Misplaced modifiers are quiet errors because sentences stay grammatical; only the meaning tips the reader off, so the check must be semantic, not just structural.",
    usefulExpressions: [
      "misplaced modifier",
      "beside its target",
      "relative clause binds to its noun",
      "position decides meaning",
    ],
    grammarObservations: [
      "Quantifiers like almost and only are the most frequently misplaced modifiers in academic drafts.",
      "Participial and relative phrases must touch their nouns, or they attach themselves to whatever noun is nearest.",
    ],
    commonMistakes: [
      "Letting only drift in front of the verb, which quietly changes the claim the sentence makes.",
      "Stacking a relative clause at the end of a sentence full of nouns, leaving its target ambiguous.",
    ],
    independentAssignment: "Find one sentence in your own recent writing with only or almost, and check whether the modifier restricts the word beside it.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-08",
    title: "Passive and heavy subjects",
    focus: "word-order",
    difficulty: 5,
    estimatedMinutes: 9,
    instructions: "Academic English often fronts long subjects and passivises verbs. Rebuild these sentences so the agent, verb and patient occupy the slots academic prose expects.",
    taskRequirements: [
      "Keep by-phrases at the end of passive clauses.",
      "Let heavy subjects stand intact at the front.",
      "Preserve the tense of every verb.",
    ],
    timeGuidance: "Two minutes per item; identify patient, agent and verb before you assemble.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct passive sentence.",
        segments: ["by the faculty committee", "without a formal review", "the funding proposal", "was rejected"],
        answer: "The funding proposal was rejected by the faculty committee without a formal review.",
        meta: {
          explanation: "The patient the funding proposal takes subject position in the passive, the verb group was rejected follows, and the agent by the faculty committee with its adverbial trails at the end.",
          grammarNote: "Passive clauses order patient, verb group, then optional by-agent, then other adverbials.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["reshaped", "the discovery that bacteria communicate chemically", "whole research programmes"],
        answer: "The discovery that bacteria communicate chemically reshaped whole research programmes.",
        meta: {
          explanation: "The long subject the discovery that bacteria communicate chemically stays whole at the front, the verb reshaped follows, and the object whole research programmes closes the clause.",
          grammarNote: "A heavy subject with an embedded clause is never split; the verb waits until the subject finishes.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct passive sentence.",
        segments: ["by the graduate school", "for citation consistency", "is checked", "every thesis chapter"],
        answer: "Every thesis chapter is checked for citation consistency by the graduate school.",
        meta: {
          explanation: "The patient every thesis chapter fronts the passive, is checked carries the verb group, the prepositional phrase for citation consistency follows, and the by-agent closes.",
          grammarNote: "Purpose and manner phrases precede the by-agent in passive end position.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["by three separate excavations", "the claim that the ruins predate the empire", "has been challenged"],
        answer: "The claim that the ruins predate the empire has been challenged by three separate excavations.",
        meta: {
          explanation: "The heavy subject keeps its appositive clause intact; the perfect passive has been challenged follows it, and the agent phrase by three separate excavations ends the sentence.",
          grammarNote: "Long subjects pair naturally with passives because the verb group absorbs the weight shift.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["at the December meeting", "the committee's decision to fund the pilot study", "was announced"],
        answer: "The committee's decision to fund the pilot study was announced at the December meeting.",
        meta: {
          explanation: "The subject noun phrase with its infinitive complement stays whole; the passive verb was announced follows, and the time adverbial at the December meeting closes the sentence with the agent left unstated.",
          grammarNote: "Agentless passives end directly with their adverbials, which keeps academic prose impersonal.",
        },
      },
    ],
    modelResponse: "The keyed orders keep every heavy subject intact at the front, follow with the passive verb group, and close with prepositional phrases and by-agents in end position. Tense stays untouched throughout: was, has been, is.",
    responseAnalysis: "Advanced reconstruction is a patience exercise: the reader holds a long subject open until its verb arrives. Learners who try to interleave the pieces produce fractured sentences, while those who finish each block first — subject, verb, tail — rebuild these accurately under time pressure.",
    usefulExpressions: [
      "patient as subject",
      "by-agent at the end",
      "heavy subject stays whole",
      "agentless passive",
    ],
    grammarObservations: [
      "Academic passives demote the agent to a final by-phrase or delete it, which changes the clause's information order without changing its facts.",
      "Subjects with embedded that-clauses or infinitives grow long, and English tolerates the length only because the verb group anchors the clause after them.",
    ],
    commonMistakes: [
      "Splitting a heavy subject to bring the verb forward, which destroys the noun phrase.",
      "Placing the by-agent before other adverbials, an order English reserves for emphasis.",
    ],
    independentAssignment: "Rewrite one active sentence from your field as a passive with a by-agent, then again without the agent, and compare what each version foregrounds.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-09",
    title: "Reporting verbs in the middle",
    focus: "word-order",
    difficulty: 5,
    estimatedMinutes: 9,
    instructions: "Reported speech allows the reporting clause to sit before, inside or after the quoted words. Rebuild these sentences so the reporting clause occupies the position indicated by the segments.",
    taskRequirements: [
      "Keep quoted material inside quotation marks where the answer uses them.",
      "Let mid-position reporting clauses interrupt at a natural boundary.",
      "Match the punctuation of the keyed sentence exactly.",
    ],
    timeGuidance: "Two minutes per item; the comma placement around the reporting clause is part of the task.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence with the reporting clause first.",
        segments: ["that the effect vanished", "in larger samples", "the lead author", "wrote"],
        answer: "The lead author wrote that the effect vanished in larger samples.",
        meta: {
          explanation: "The reporting clause opens the sentence, the reported content follows as a that-clause, and the adverbial in larger samples stays inside the reported clause where it belongs.",
          grammarNote: "A fronted reporting clause keeps the entire reported clause behind it, adverbials included.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence with the reporting clause at the end.",
        segments: ["the reviewers conceded", "the results were robust", "under every sensitivity test"],
        answer: "The results were robust under every sensitivity test, the reviewers conceded.",
        meta: {
          explanation: "The reported clause comes first with its own adverbial inside it, and the reporting subject and verb close the sentence as an appended comment clause.",
          grammarNote: "End-position reporting clauses work like comment adverbs and take a comma before them.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["belonged to one scroll", "that the fragments", "argued", "the museum's curator"],
        answer: "The museum's curator argued that the fragments belonged to one scroll.",
        meta: {
          explanation: "The reporting verb argued takes a that-clause; the subject the fragments and its predicate belonged to one scroll stay together inside the report.",
          grammarNote: "Nothing may intrude between the reporting verb and its that-clause subject.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["would be unnecessary", "further trials", "the regulator concluded"],
        answer: "Further trials, the regulator concluded, would be unnecessary.",
        meta: {
          explanation: "The reporting clause splits the reported clause at its subject-predicate boundary: further trials opens, the regulator concluded interrupts, and would be unnecessary completes the thought.",
          grammarNote: "A mid-position reporting clause interrupts between subject and predicate and takes commas on both sides.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["in three of five regions", "the survey findings", "according to the report", "were inconclusive"],
        answer: "The survey findings, according to the report, were inconclusive in three of five regions.",
        meta: {
          explanation: "The attribution phrase according to the report interrupts between the subject and its verb phrase, and the adverbial in three of five regions stays inside the predicate.",
          grammarNote: "Attribution phrases behave like mid-position reporting clauses and always pair with commas.",
        },
      },
    ],
    modelResponse: "The keyed sentences show the three reporting positions: fronted clauses that own everything after them, end-position comment clauses after a comma, and mid-position interruptions between subject and predicate, where according to the report and the regulator concluded sit fenced by commas.",
    responseAnalysis: "Reporting position is a focus decision: fronted reporters foreground the source, mid-position reporters keep the claim in view, and end-position reporters concede after the fact. Learners who see the rhetorical job of each slot rebuild these sentences and understand why writers choose one over another.",
    usefulExpressions: [
      "reporting clause",
      "comment clause at the end",
      "interrupt between subject and predicate",
      "commas on both sides",
    ],
    grammarObservations: [
      "Mid-position reporting clauses may only interrupt at clause boundaries, which is why they sit between subject and verb or between clauses.",
      "The adverbials of the reported clause must remain inside the report regardless of where the reporting clause sits.",
    ],
    commonMistakes: [
      "Dragging an adverbial out of the reported clause when moving the reporting verb.",
      "Omitting the paired commas around a mid-position reporting clause.",
    ],
    independentAssignment: "Write one sentence three times, moving its reporting clause through all three positions, and note how the emphasis shifts each time.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-10",
    title: "There is and there are",
    focus: "word-order",
    difficulty: 3,
    estimatedMinutes: 7,
    instructions: "Existential sentences put there first, then the verb, then the real subject. Rebuild these scrambled sentences around the existential frame, matching the verb to the subject that follows it.",
    taskRequirements: [
      "Open with there and the verb be.",
      "Match be to the noun that follows it, not to anything earlier.",
      "Keep place and time expressions at the end.",
    ],
    timeGuidance: "About a minute per item; find the notional subject before you choose the verb form.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["three computer labs", "in the engineering building", "there", "are"],
        answer: "There are three computer labs in the engineering building.",
        meta: {
          explanation: "There opens the existential frame, are agrees with the plural real subject three computer labs, and the place phrase in the engineering building closes the sentence.",
          grammarNote: "The verb in an existential agrees with the notional subject that follows it.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["a quiet study lounge", "there", "is", "on the top floor"],
        answer: "There is a quiet study lounge on the top floor.",
        meta: {
          explanation: "The singular real subject a quiet study lounge takes is, and the location on the top floor follows the full noun phrase in the standard end slot.",
          grammarNote: "Existential there is a dummy subject; agreement looks past it to the noun after the verb.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["to the proposed schedule", "several objections", "were", "there"],
        answer: "There were several objections to the proposed schedule.",
        meta: {
          explanation: "The past plural were matches several objections, and the prepositional phrase to the proposed schedule completes the clause by naming what the objections targeted.",
          grammarNote: "Tense and number both travel to be from the following noun phrase.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["since 2024", "there", "has been", "a sharp increase", "in library e-book loans"],
        answer: "There has been a sharp increase in library e-book loans since 2024.",
        meta: {
          explanation: "The perfect has been agrees with the singular a sharp increase; the complement in library e-book loans and the time phrase since 2024 follow in that order.",
          grammarNote: "Existential clauses carry full verb groups, not just bare be, and agreement still follows the noun.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["about the dataset", "there", "remain", "two unresolved questions"],
        answer: "There remain two unresolved questions about the dataset.",
        meta: {
          explanation: "A verb other than be can head the existential; remain agrees with the plural two unresolved questions, and about the dataset closes the clause.",
          grammarNote: "Verbs like remain, exist and appear can replace be in the existential frame with the same agreement rule.",
        },
      },
    ],
    modelResponse: "Every keyed sentence opens with there plus a verb group that agrees with the following noun: are with labs, is with lounge, were with objections, has been with increase, remain with questions. The trailing phrases never move ahead of their noun.",
    responseAnalysis: "The trap in existential sentences is agreement: there means nothing, so the verb must be tuned to the noun after it. Learners who first find that noun, then set the verb, stop producing there is three labs errors entirely.",
    usefulExpressions: [
      "existential there",
      "agreement after the verb",
      "dummy subject",
      "notional subject",
    ],
    grammarObservations: [
      "Existential there fills the subject slot so the real subject can sit after the verb, which is why agreement ignores there completely.",
      "The frame exists to introduce new information, so the noun after the verb is almost always new to the reader.",
    ],
    commonMistakes: [
      "Matching the verb to there instead of the following noun, the classic there is many students error.",
      "Fronting the place phrase inside the existential, which collapses the frame.",
    ],
    independentAssignment: "Write four existential sentences about your campus, two with be in different tenses and two with remain or exist, checking agreement each time.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
];
