/**
 * TOEFL Writing Practice Library — Build a Sentence, word order, batch 2
 * (PROMPT 50). Exercises toefl-wb-sent-11…20, completing four exercises per
 * difficulty tier for the word-order focus.
 *
 * All sentences are original TalkSy practice material.
 */

import { TOEFL_WRITING_BANK_SOURCE_NOTE, type ToeflSentenceExercise } from "./types";

export const sentenceWordOrder2Exercises: ToeflSentenceExercise[] = [
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-11",
    title: "Where does the time go",
    focus: "word-order",
    difficulty: 1,
    estimatedMinutes: 6,
    instructions: "Rebuild each scrambled sentence, deciding whether the time expression belongs at the front or the end of the statement.",
    taskRequirements: [
      "Use every segment exactly once.",
      "Keep the subject and verb adjacent.",
      "Place time expressions in natural slots only.",
    ],
    timeGuidance: "One minute per item; the front slot is allowed but the end slot is the default.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["every twenty minutes", "on weekdays", "the shuttle", "runs"],
        answer: "The shuttle runs every twenty minutes on weekdays.",
        meta: {
          explanation: "The subject and verb open the sentence, the frequency phrase every twenty minutes follows the verb, and the specific condition on weekdays closes it.",
          grammarNote: "Two time expressions stack with the shorter frequency first and the frame second.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["extended", "last semester", "the bookshop", "its opening hours"],
        answer: "Last semester, the bookshop extended its opening hours.",
        alternatives: ["The bookshop extended its opening hours last semester."],
        meta: {
          explanation: "The time phrase last semester fronts the sentence with a comma, and the subject, verb and object follow in standard order; the end position is also correct.",
          grammarNote: "Finished-time phrases may front for emphasis without changing the clause order.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["on Thursday afternoons", "meets", "the study group"],
        answer: "The study group meets on Thursday afternoons.",
        meta: {
          explanation: "The study group is the subject, meets needs no object, and the routine time phrase on Thursday afternoons takes the end slot directly after the verb.",
          grammarNote: "Intransitive verbs are followed immediately by their time adverbial.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["on the fifteenth", "the deadline", "is", "at midnight"],
        answer: "The deadline is at midnight on the fifteenth.",
        meta: {
          explanation: "The verb be links the subject to its clock-time complement at midnight, and the date on the fifteenth follows the clock time in the standard sequence.",
          grammarNote: "Clock time precedes date when both follow be or a verb.",
        },
      },
    ],
    modelResponse: "The keyed orders run the shuttle and the study group with their time phrases after the verb, front last semester before the bookshop sentence with a comma, and stack at midnight before on the fifteenth for the deadline.",
    responseAnalysis: "Time phrases are the most movable pieces in these sentences, and both slots tested here are legal. The skill under the clock is choosing one quickly: end position is the safe default, and fronting is reserved for emphasis or scene setting.",
    usefulExpressions: [
      "time at the end",
      "fronted time phrase",
      "clock before date",
      "default end position",
    ],
    grammarObservations: [
      "When two time expressions appear, English orders the smaller unit first: clock time, then date, then longer frames.",
      "Fronted time phrases take a comma, while end-position time phrases need no punctuation at all.",
    ],
    commonMistakes: [
      "Placing the time expression between subject and verb, which breaks the verb's adjacency to its subject.",
      "Stacking the date before the clock time, reversing the natural sequence.",
    ],
    independentAssignment: "Write three sentences about your weekly routine with time phrases in end position, then move one phrase to the front and add the comma.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-12",
    title: "Who owns the book",
    focus: "word-order",
    difficulty: 1,
    estimatedMinutes: 6,
    instructions: "Possessives and describing words hold fixed slots inside the noun phrase. Rebuild these sentences so every noun phrase keeps its internal order intact.",
    taskRequirements: [
      "Keep possessives before adjectives inside noun phrases.",
      "Never split a noun from its own descriptors.",
      "End each sentence with the correct final punctuation.",
    ],
    timeGuidance: "One minute per item; assemble each noun phrase as a block before placing it.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["disappeared", "my sister's", "blue", "lab notebook"],
        answer: "My sister's blue lab notebook disappeared.",
        meta: {
          explanation: "The possessive my sister's comes first inside the noun phrase, the colour adjective blue follows, and the whole phrase then serves as the subject of disappeared.",
          grammarNote: "Noun phrase order runs determiner or possessive, opinion, colour, then the noun head.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["visited", "the campus museum", "the new", "international students"],
        answer: "The new international students visited the campus museum.",
        meta: {
          explanation: "The adjective new stays inside the subject noun phrase before the head students, and the object the campus museum keeps its own noun string together after the verb.",
          grammarNote: "Attributive adjectives never separate from the noun they modify.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["margin notes", "our professor's", "handwritten", "saved", "the whole class"],
        answer: "Our professor's handwritten margin notes saved the whole class.",
        meta: {
          explanation: "The possessive our professor's opens the subject phrase, handwritten describes the notes, and the complete phrase fronts the verb saved before its object the whole class.",
          grammarNote: "A possessive can anchor a long noun phrase that then acts as one grammatical block.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["visiting researchers", "attracts", "map collection", "rare", "the library's"],
        answer: "The library's rare map collection attracts visiting researchers.",
        meta: {
          explanation: "The possessive the library's comes first, rare follows as the adjective, and the finished noun phrase takes subject position before attracts and its object.",
          grammarNote: "Compound noun strings like map collection keep the classifier noun directly before the head.",
        },
      },
    ],
    modelResponse: "Each keyed sentence assembles one intact noun phrase before placing it: possessive, adjective, then head noun, and the phrase then occupies a single slot as subject or object without splitting.",
    responseAnalysis: "Reconstruction becomes fast when noun phrases are treated as Lego blocks: build the block, then place it. Learners who scatter adjectives between segments lose time and produce word-salad noun phrases, the most visible word-order error in timed writing.",
    usefulExpressions: [
      "possessive first",
      "adjective beside its noun",
      "noun phrase as one block",
      "classifier before head",
    ],
    grammarObservations: [
      "Inside a noun phrase, possessives and determiners compete for the first slot and never co-occur.",
      "Compound nouns place the classifier immediately before the head, which is why map collection cannot become collection map.",
    ],
    commonMistakes: [
      "Separating an adjective from its noun to fit the segments in anywhere.",
      "Putting the head noun before its possessive, which destroys the phrase.",
    ],
    independentAssignment: "Describe three objects you own with a possessive plus two adjectives each, keeping every noun phrase intact.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-13",
    title: "Enough and too",
    focus: "word-order",
    difficulty: 2,
    estimatedMinutes: 7,
    instructions: "The words enough and too sit in different slots around adjectives and nouns. Rebuild each sentence so these tricky quantifiers land in their legal positions.",
    taskRequirements: [
      "Put too before the adjective it intensifies.",
      "Put enough after the adjective it complements.",
      "Keep the to-phrase that follows intact.",
    ],
    timeGuidance: "Ninety seconds per item; decide first whether the item tests too or enough.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["for the visiting audience", "the lecture hall", "was", "too small"],
        answer: "The lecture hall was too small for the visiting audience.",
        meta: {
          explanation: "Too precedes the adjective small, the verb be links the subject to the intensified adjective, and the for-phrase closes the sentence with the affected party.",
          grammarNote: "Too stands immediately before the adjective or adverb it intensifies, never after it.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the whole module", "the reading pack", "is", "long enough", "to last"],
        answer: "The reading pack is long enough to last the whole module.",
        meta: {
          explanation: "Enough follows the adjective long, the linking verb is sits between subject and complement, and the to-infinitive result clause trails the adjective phrase.",
          grammarNote: "Enough follows adjectives and adverbs but precedes nouns.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["enough material", "for a dozen dissertations", "the archives", "hold"],
        answer: "The archives hold enough material for a dozen dissertations.",
        meta: {
          explanation: "Before the noun material, enough takes the pre-noun slot, the verb hold connects the archives to the quantified object, and the for-phrase states the purpose.",
          grammarNote: "The noun-position of enough mirrors that of a quantifier like plenty of.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["too tight", "the deadline", "was", "for careful proofreading"],
        answer: "The deadline was too tight for careful proofreading.",
        meta: {
          explanation: "Too precedes the adjective tight exactly as in item one, and the for-phrase with its gerund names the activity the tightness obstructed.",
          grammarNote: "For plus gerund is the standard companion of a too-adjective judgement.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the field trip", "to lead", "not experienced enough", "are", "the first-years"],
        answer: "The first-years are not experienced enough to lead the field trip.",
        meta: {
          explanation: "Negation precedes the adjective, enough follows it, and the to-infinitive to lead the field trip expresses the result the adequacy is judged against.",
          grammarNote: "Not enough plus to-infinitive is the negative counterpart of the enough result pattern.",
        },
      },
    ],
    modelResponse: "The keyed sentences put too before its adjective every time, enough after adjectives but before nouns, and keep the for- and to-phrases that express the consequence intact after the intensified phrase.",
    responseAnalysis: "Enough is the chameleon: after the adjective, before the noun. Learners who memorise that single rule handle both patterns; the deeper skill is noticing the result phrase, because too and enough almost always announce one.",
    usefulExpressions: [
      "too before the adjective",
      "enough after the adjective",
      "enough before the noun",
      "result phrase follows",
    ],
    grammarObservations: [
      "The meaning of too includes a consequence, which is why too-adjective phrases so often travel with for-phrases or to-infinitives.",
      "Enough inverts its position depending on what it modifies, the only common quantifier with this double life.",
    ],
    commonMistakes: [
      "Writing enough long instead of long enough when the adjective is the target.",
      "Placing too after the adjective, which produces an ungrammatical string in English.",
    ],
    independentAssignment: "Write two sentences with too plus a consequence and two with enough in both of its positions, labelling each use.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-14",
    title: "Also, either and neither",
    focus: "word-order",
    difficulty: 2,
    estimatedMinutes: 7,
    instructions: "Words that add or agree hold strict positions. Rebuild these sentences so also, either and neither land in the slots English gives them.",
    taskRequirements: [
      "Place also in mid-position before the main verb.",
      "Keep either at the end of negative additions.",
      "Give neither its inverted position when it fronts the clause.",
    ],
    timeGuidance: "Ninety seconds per item; the polarity of the sentence decides the particle.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the robotics club", "the exchange students", "also", "joined"],
        answer: "The exchange students also joined the robotics club.",
        meta: {
          explanation: "Also takes mid-position directly before the main verb joined, after the subject the exchange students, adding the club to whatever else the students did.",
          grammarNote: "Also occupies the same mid slot as frequency adverbs, before the main verb.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["either", "the tutor", "did not attend", "the training session"],
        answer: "The tutor did not attend the training session either.",
        meta: {
          explanation: "Either closes a negative addition, sitting at the very end of the clause after the object, because negative sentences cannot host also in that meaning.",
          grammarNote: "Either is the end-position partner of negation; also belongs to positive clauses.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["convinced", "the assessment panel", "neither", "argument"],
        answer: "Neither argument convinced the assessment panel.",
        meta: {
          explanation: "Here neither is a determiner inside the subject noun phrase, standing before argument; the verb stays positive because neither already carries the negation.",
          grammarNote: "Determiner neither precedes its noun and keeps the main verb in positive form.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the second experiment", "nor", "did", "settle", "the question"],
        answer: "Nor did the second experiment settle the question.",
        meta: {
          explanation: "Nor opens the clause and forces inversion: the auxiliary did crosses in front of the subject the second experiment, and the base verb settle follows.",
          grammarNote: "Fronted nor behaves like a negative adverb and triggers auxiliary inversion.",
        },
      },
    ],
    modelResponse: "The keyed answers give also the mid slot before the verb, either the end slot after a negative, neither determiner position before its noun, and nor a fronted inverted clause with did ahead of the subject.",
    responseAnalysis: "Polarity drives every choice here: positive clauses take also in mid-position, negative clauses take either at the end, and clause-initial negatives invert. Learners who check the sentence's polarity first stop mixing these particles, a very visible error in exam writing.",
    usefulExpressions: [
      "also in mid-position",
      "either at the end",
      "neither plus positive verb",
      "nor triggers inversion",
    ],
    grammarObservations: [
      "Also, either and neither divide the labour of addition by polarity, which is why swapping them breaks grammar rather than just style.",
      "Nor and neither in clause-initial position are the only addition words that invert the auxiliary.",
    ],
    commonMistakes: [
      "Using also inside a negative clause where either is required.",
      "Adding not after neither, which double-negates the sentence.",
    ],
    independentAssignment: "Write a short paragraph about a cancelled event using also, either and neither correctly, then underline each one's position.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-15",
    title: "Comparisons keep their axis",
    focus: "word-order",
    difficulty: 3,
    estimatedMinutes: 8,
    instructions: "Comparative sentences thread a fixed sequence: the compared item, the comparative form, the standard with than or as. Rebuild each sentence on that axis.",
    taskRequirements: [
      "Keep the comparative adjective beside its noun.",
      "Place than or as directly after the comparative.",
      "Preserve any the phrases inside the comparison.",
    ],
    timeGuidance: "Ninety seconds per item; find the two compared items before assembling.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["than the morning one", "far more applicants", "attracts", "the evening seminar"],
        answer: "The evening seminar attracts far more applicants than the morning one.",
        meta: {
          explanation: "The compared items are the two seminars; far intensifies the comparative more, which sits beside its noun applicants, and than introduces the standard.",
          grammarNote: "Intensifiers like far and much stand immediately before the comparative form.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["as the old reading room", "the new library wing", "is", "as busy"],
        answer: "The new library wing is as busy as the old reading room.",
        meta: {
          explanation: "Equality comparisons repeat as: the first as modifies the adjective busy, the second introduces the standard, and the linking verb sits before the whole adjective phrase.",
          grammarNote: "As-adjective-as is a fixed frame that no element may interrupt.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["than in their first", "students", "submit", "assignments earlier", "in their final year"],
        answer: "Students submit assignments earlier in their final year than in their first.",
        meta: {
          explanation: "The adverb comparative earlier follows the verb, its frame in their final year narrows the claim, and than in their first supplies the contrasting standard.",
          grammarNote: "Comparative adverbs take the same than-standard as comparative adjectives.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["researchers", "visited", "the more", "the archive digitised", "the more"],
        answer: "The more the archive digitised, the more researchers visited.",
        meta: {
          explanation: "A parallel comparative builds both halves with the plus comparative: the first clause states the cause, the comma joins them, and the second the-clause states the effect.",
          grammarNote: "Correlative the more … the more orders cause before effect with a comma between.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["less convincingly", "the lab report", "reads", "than the field notes"],
        answer: "The lab report reads less convincingly than the field notes.",
        meta: {
          explanation: "The negative comparative less stands directly before the adverb convincingly, the verb reads links subject and adverb, and than the field notes closes the comparison.",
          grammarNote: "Less plus adverb mirrors more plus adverb and takes the same than-standard.",
        },
      },
    ],
    modelResponse: "The keyed comparisons keep every intensifier against its comparative, the than- or as-standard directly after it, and the correlative the-more clauses ordered cause first, effect second, with a comma joining the two halves.",
    responseAnalysis: "Comparison errors are almost always placement errors: the intensifier drifts away from the comparative, or the standard slides ahead of it. Learners who name the two compared items and the axis word first rebuild these sentences in one pass.",
    usefulExpressions: [
      "than-standard after the comparative",
      "as busy as",
      "far more",
      "the more … the more",
    ],
    grammarObservations: [
      "The as-as equality frame is rigid; any word inserted between the two as phrases breaks the comparison.",
      "Correlative comparatives state the cause in the first clause because the effect clause's the echoes forward, not backward.",
    ],
    commonMistakes: [
      "Separating far or much from the comparative it intensifies.",
      "Reversing the two halves of a the more construction, which inverts the logic.",
    ],
    independentAssignment: "Compare two courses you have taken in one sentence with a than-standard, then restate the same comparison with as-as.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-16",
    title: "Tag questions mirror the verb",
    focus: "word-order",
    difficulty: 3,
    estimatedMinutes: 8,
    instructions: "Each scrambled sentence ends in a question tag. Rebuild the statement so the tag matches its verb in both form and polarity.",
    taskRequirements: [
      "Keep the tag at the very end after a comma.",
      "Match the tag's auxiliary to the statement's verb.",
      "Reverse the polarity: positive statements take negative tags.",
    ],
    timeGuidance: "Ninety seconds per item; identify the auxiliary and polarity before you place the tag.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence with its tag.",
        segments: ["doesn't it", "at nine", "starts", "the workshop"],
        answer: "The workshop starts at nine, doesn't it?",
        meta: {
          explanation: "The positive statement with the present-simple verb starts takes the negative tag doesn't it; the comma separates statement from tag, and the tag inverts subject and auxiliary.",
          grammarNote: "Tags copy the auxiliary, and if the statement has none, do-support supplies it.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence with its tag.",
        segments: ["have you", "you haven't", "seen", "the revised timetable"],
        answer: "You haven't seen the revised timetable, have you?",
        meta: {
          explanation: "The negative statement with haven't takes the positive tag have you; the object the revised timetable stays inside the statement, and the tag follows the comma.",
          grammarNote: "Negative statements demand positive tags, the mirror rule of tag formation.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence with its tag.",
        segments: ["won't she", "the registrar", "will confirm", "the room change", "tomorrow"],
        answer: "The registrar will confirm the room change tomorrow, won't she?",
        meta: {
          explanation: "The modal will reappears negated in the tag as won't, the pronoun she replaces the registrar, and the time adverbial tomorrow stays inside the statement before the comma.",
          grammarNote: "Tag pronouns summarise the subject, and tag auxiliaries summarise the verb group.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence with its tag.",
        segments: ["for the demo session", "did they", "nobody", "volunteered"],
        answer: "Nobody volunteered for the demo session, did they?",
        meta: {
          explanation: "The negative-meaning subject nobody keeps a positive verb, so the tag flips to positive did they, with they as the natural pronoun for the human nobody.",
          grammarNote: "Words like nobody and nothing count as negative for tag polarity.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence with its tag.",
        segments: ["because of the storm", "the tour", "was cancelled", "wasn't it"],
        answer: "The tour was cancelled because of the storm, wasn't it?",
        meta: {
          explanation: "The passive verb group was cancelled reappears negated in the tag as wasn't, and the reason phrase because of the storm stays inside the statement before the comma and tag.",
          grammarNote: "Passive verb groups lend their auxiliary be directly to the tag.",
        },
      },
    ],
    modelResponse: "Every keyed tag copies the statement's auxiliary, flips its polarity, and swaps the subject for a pronoun: doesn't it, have you, won't she, did they, wasn't it, each after a comma at the clause's end.",
    responseAnalysis: "Tag building is a three-part checklist: find the auxiliary, flip the polarity, replace the subject with a pronoun. Learners who run the checklist stop producing the two classic errors, matching polarity by accident and repeating the full subject in the tag.",
    usefulExpressions: [
      "copy the auxiliary",
      "flip the polarity",
      "pronoun replaces the subject",
      "comma before the tag",
    ],
    grammarObservations: [
      "Do-support in tags reveals the statement's hidden auxiliary: starts becomes doesn't in the tag.",
      "Negative-meaning subjects like nobody and nothing count as negative statements, so their tags come out positive.",
    ],
    commonMistakes: [
      "Matching the tag's polarity to the statement's instead of reversing it.",
      "Keeping the full noun subject inside the tag instead of the pronoun.",
    ],
    independentAssignment: "Write four tagged statements about your week, one with a modal, one with be, one with a negative subject and one in the passive, and check each tag against the checklist.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-17",
    title: "Emphatic do and inverted conditions",
    focus: "word-order",
    difficulty: 4,
    estimatedMinutes: 9,
    instructions: "Advanced structures such as emphatic do and inverted conditionals rely on strict word order. Rebuild each sentence so the emphasis or inversion lands grammatically.",
    taskRequirements: [
      "Give emphatic do a spot directly before the base verb.",
      "Invert should, had or were in conditional clauses.",
      "Keep the main clause in normal order.",
    ],
    timeGuidance: "Two minutes per item; separate the conditional clause from the main clause first.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct emphatic sentence.",
        segments: ["the original hypothesis", "support", "do", "the results"],
        answer: "The results do support the original hypothesis.",
        meta: {
          explanation: "Emphatic do stands between subject and the base verb support, contradicting an implied doubt; the verb loses any tense ending because do carries the tense.",
          grammarNote: "Emphatic do takes the tense and leaves the main verb in base form.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct inverted conditional.",
        segments: ["the duty technician", "should", "the equipment fail", "again", "call"],
        answer: "Should the equipment fail again, call the duty technician.",
        meta: {
          explanation: "The conditional drops if and inverts: should fronts the clause, the subject the equipment follows, and the main clause stays in imperative order with its comma boundary.",
          grammarNote: "Formal conditionals invert should, had or were instead of using if.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct inverted conditional.",
        segments: ["might have differed", "had", "the review panel", "seen", "the second dataset", "the decision"],
        answer: "Had the review panel seen the second dataset, the decision might have differed.",
        meta: {
          explanation: "Past-perfect inversion fronts had, keeps the subject the review panel after it, and the main clause with might have differed follows the comma in ordinary order.",
          grammarNote: "Had-inversion replaces if the panel had seen, with no change to the main clause.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct inverted conditional.",
        segments: ["would reshuffle", "its tasks", "were", "the deadline", "to move", "the whole team"],
        answer: "Were the deadline to move, the whole team would reshuffle its tasks.",
        meta: {
          explanation: "Were plus infinitive inverts the future conditional: were fronts, the subject the deadline follows, and the main clause would reshuffle its tasks stays behind the comma.",
          grammarNote: "Were to plus verb expresses a hypothetical future and inverts without if.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct emphatic sentence.",
        segments: ["answer", "the candidate", "did", "every probe", "at the viva"],
        answer: "The candidate did answer every probe at the viva.",
        meta: {
          explanation: "Emphatic did stands before the base verb answer, contradicting doubt about the candidate's performance, and the adverbial at the viva closes the sentence.",
          grammarNote: "Emphatic did leaves the verb bare, so answered would be wrong inside this frame.",
        },
      },
    ],
    modelResponse: "The keyed sentences show emphatic do and did directly before base verbs, and three inverted conditionals with should, had and were fronted, subjects after them, and main clauses untouched behind the comma.",
    responseAnalysis: "Both structures are register moves: emphatic do contradicts doubt, inverted conditionals compress formality. Learners who remember that the inverted auxiliary always trades places with the subject, and that the main clause never joins the inversion, rebuild these reliably.",
    usefulExpressions: [
      "emphatic do",
      "base form after do",
      "should the equipment fail",
      "had the panel seen",
    ],
    grammarObservations: [
      "Inverted conditionals are a formal alternative to if-clauses, common in academic prose and rare in speech.",
      "Emphatic do belongs to contradiction and reassurance contexts; without that rhetorical job it sounds odd.",
    ],
    commonMistakes: [
      "Leaving a tense ending on the verb after emphatic do, producing did answered.",
      "Inverting the main clause as well as the conditional, which breaks the sentence.",
    ],
    independentAssignment: "Rewrite two if-conditionals from a textbook chapter in inverted form, and add one emphatic do sentence contradicting a doubt a classmate expressed.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-18",
    title: "Not only but also",
    focus: "word-order",
    difficulty: 4,
    estimatedMinutes: 9,
    instructions: "Correlative conjunctions demand parallel placement: whatever follows not only must follow but also in matching form. Rebuild these sentences with both halves parallel.",
    taskRequirements: [
      "Give not only and but also the same grammatical follower.",
      "Invert when not only fronts the clause.",
      "Keep the two halves grammatically mirror-shaped.",
    ],
    timeGuidance: "Two minutes per item; sketch both halves before assembling.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["public lectures", "hosts", "but also", "the viewing capacity", "doubles", "not only", "the new observatory"],
        answer: "The new observatory not only doubles the viewing capacity but also hosts public lectures.",
        meta: {
          explanation: "Not only stands between subject and the first verb phrase, but also stands before the second verb phrase, and the two halves mirror each other as verb plus object.",
          grammarNote: "Mid-position not only pairs two predicates without disturbing the subject.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct inverted sentence.",
        segments: ["the archive", "not only", "did", "the flood", "close", "the basement labs", "but it also", "damaged"],
        answer: "Not only did the flood close the basement labs, but it also damaged the archive.",
        meta: {
          explanation: "Fronted not only forces inversion: did crosses ahead of the subject the flood; the second half keeps normal order with but it also, and a comma joins the halves.",
          grammarNote: "Clause-initial not only behaves like a negative adverb and triggers inversion.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["a monthly stipend", "the fellowship", "covers", "not only", "tuition fees", "but also"],
        answer: "The fellowship covers not only tuition fees but also a monthly stipend.",
        meta: {
          explanation: "Both correlatives stand before noun phrases: not only tuition fees and but also a monthly stipend, and the single verb covers governs both objects.",
          grammarNote: "When one verb governs both halves, the correlatives sit inside the predicate, before each noun phrase.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["but also", "better documented", "the dataset", "is", "not only", "larger", "than earlier ones"],
        answer: "The dataset is not only larger than earlier ones but also better documented.",
        meta: {
          explanation: "Both correlatives precede adjective phrases: larger than earlier ones and better documented, so the two halves stay parallel as complements of is.",
          grammarNote: "Adjective complements pair as cleanly as verbs and nouns inside the correlative frame.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct inverted sentence.",
        segments: ["faster", "not only", "was", "the method", "but it was also", "less intrusive"],
        answer: "Not only was the method faster, but it was also less intrusive.",
        meta: {
          explanation: "Fronted not only inverts the linking verb was ahead of the subject the method; the second half restores normal order with but it was also, and the comma separates the halves.",
          grammarNote: "Be inverts exactly like an auxiliary when not only fronts the clause.",
        },
      },
    ],
    modelResponse: "The keyed sentences pair matching forms after both correlatives — verbs with verbs, nouns with nouns, adjectives with adjectives — and invert the first clause only when not only takes the opening position, with but also halves in normal order.",
    responseAnalysis: "Parallelism is the whole game: learners who draft the two halves as twins, then insert the correlatives, produce balanced sentences; those who build one half at a time drift into mixed forms, the error these items train you to feel.",
    usefulExpressions: [
      "parallel halves",
      "mid-position not only",
      "fronted not only inverts",
      "but also before the twin",
    ],
    grammarObservations: [
      "The correlative frame is a parallelism test: whatever grammatical shape follows not only must reappear after but also.",
      "Fronting not only adds inversion to the parallelism rule, which makes it the highest-risk member of the family.",
    ],
    commonMistakes: [
      "Pairing a verb after not only with a noun after but also, breaking the parallel frame.",
      "Forgetting the comma between the inverted first clause and the but also clause.",
    ],
    independentAssignment: "Write three not only … but also sentences pairing verbs, nouns and adjectives in turn, then front one of them and add the inversion.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-19",
    title: "Long academic subjects under pressure",
    focus: "word-order",
    difficulty: 5,
    estimatedMinutes: 10,
    instructions: "Journal-style sentences front long noun phrases and stack their verbs late. Rebuild each sentence so the subject block, verb group and tail stay correctly ordered.",
    taskRequirements: [
      "Keep every subject block intact at the front.",
      "Let the verb group follow the full subject.",
      "Order the tail phrases after the verb without splitting the verb group.",
    ],
    timeGuidance: "Two minutes per item; read the whole set before touching any segment.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["in four separate labs", "has since been replicated", "the finding that sleep consolidates vocabulary"],
        answer: "The finding that sleep consolidates vocabulary has since been replicated in four separate labs.",
        meta: {
          explanation: "The subject noun phrase with its appositive that-clause stays whole; the perfect passive has since been replicated follows it, and the place adverbial closes the sentence.",
          grammarNote: "Appositive that-clauses complete a subject's meaning and cannot be separated from their head noun.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["after two years", "the policy of capping resit attempts", "was quietly dropped"],
        answer: "The policy of capping resit attempts was quietly dropped after two years.",
        meta: {
          explanation: "The subject phrase with its embedded of-gerund block fronts the clause; the passive verb group was quietly dropped follows, and the time adverbial after two years ends it.",
          grammarNote: "A gerund complement inside a subject phrase keeps the whole block nominal.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["the region's entire fishing calendar", "the observation that coastal winds reverse seasonally", "underpins"],
        answer: "The observation that coastal winds reverse seasonally underpins the region's entire fishing calendar.",
        meta: {
          explanation: "The long subject block ends at seasonally; the verb underpins follows directly, and the possessive object phrase closes the sentence without any intervening adverbial.",
          grammarNote: "No adverbial may intervene between a completed subject and its verb.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["has been questioned", "by recent behavioural studies", "the assumption that participants behave identically online and offline"],
        answer: "The assumption that participants behave identically online and offline has been questioned by recent behavioural studies.",
        meta: {
          explanation: "The subject with its coordinated adverbial pair stays intact; the perfect passive has been questioned follows, and the agent by recent behavioural studies takes final position.",
          grammarNote: "Coordinated adverbials inside an appositive clause remain inside that clause.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct sentence.",
        segments: ["eleven months", "the delay between data collection and publication", "averages", "in this field"],
        answer: "The delay between data collection and publication averages eleven months in this field.",
        meta: {
          explanation: "The subject noun phrase with its between-complement fronts the clause; the verb averages follows, its object eleven months names the measurement, and in this field closes.",
          grammarNote: "Between-phrases completing a head noun stay inside the subject block.",
        },
      },
    ],
    modelResponse: "Each keyed sentence completes its subject block before the verb arrives: appositive clauses, gerund complements, between-phrases and coordinated adverbials all stay inside the subject, and the verb group plus tail follows in strict order.",
    responseAnalysis: "These items train the reader's memory, which is exactly what the listening and reading sections also demand. The practical method is to bracket the subject mentally at its head noun and refuse to place the verb until the bracket closes.",
    usefulExpressions: [
      "subject block first",
      "verb after the bracket closes",
      "appositive that-clause",
      "tail phrases in order",
    ],
    grammarObservations: [
      "Academic English tolerates very long subjects because readers hold the head noun in memory until its verb arrives.",
      "Every phrase inside the subject — complements, appositives, coordinated pairs — belongs to the subject and may not migrate into the predicate.",
    ],
    commonMistakes: [
      "Pulling the verb forward into the middle of a subject block, which destroys the noun phrase.",
      "Moving an adverbial out of the appositive clause into the main clause tail.",
    ],
    independentAssignment: "Find one sentence with a subject longer than eight words in a journal article, bracket the subject, and label its verb group and tail phrases.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
  {
    taskType: "build-sentence",
    slug: "toefl-wb-sent-20",
    title: "Cleft sentences spotlight one piece",
    focus: "word-order",
    difficulty: 5,
    estimatedMinutes: 10,
    instructions: "Cleft constructions split a sentence to spotlight one element. Rebuild these sentences around it-cleft and what-cleft frames, keeping the spotlighted piece in its cleft slot.",
    taskRequirements: [
      "Open it-clefts with it is or it was plus the spotlighted element.",
      "Open what-clefts with what plus the spotlighted clause.",
      "Keep the remainder inside the second half of the cleft.",
    ],
    timeGuidance: "Two minutes per item; decide what the sentence spotlights before assembling.",
    items: [
      {
        no: 1, kind: "reorder",
        prompt: "Put the segments in order to make a correct it-cleft sentence.",
        segments: ["the contamination", "revealed", "that", "the second pilot study", "it was"],
        answer: "It was the second pilot study that revealed the contamination.",
        meta: {
          explanation: "The cleft fronts it was with the spotlighted subject the second pilot study, the relative that introduces the rest of the message, and the original meaning survives intact.",
          grammarNote: "It-clefts split one clause into a spotlight plus a relative-like remainder.",
        },
      },
      {
        no: 2, kind: "reorder",
        prompt: "Put the segments in order to make a correct it-cleft sentence.",
        segments: ["most", "it is", "the final chapter", "that", "students", "struggle with"],
        answer: "It is the final chapter that students struggle with most.",
        meta: {
          explanation: "The spotlighted object the final chapter moves into the it is slot, and the remainder keeps its own subject students and preposition-stranded verb phrase struggle with most.",
          grammarNote: "Objects can take the cleft spotlight, leaving a preposition stranded inside the remainder.",
        },
      },
      {
        no: 3, kind: "reorder",
        prompt: "Put the segments in order to make a correct what-cleft sentence.",
        segments: ["not the design", "what", "the committee", "rejected", "was", "the budget"],
        answer: "What the committee rejected was the budget, not the design.",
        meta: {
          explanation: "The what-clause fronts the rejected action with its subject, the verb was links it to the spotlighted complement the budget, and the contrast phrase not the design closes.",
          grammarNote: "What-clefts front a whole predicate and spotlight its complement after be.",
        },
      },
      {
        no: 4, kind: "reorder",
        prompt: "Put the segments in order to make a correct what-cleft sentence.",
        segments: ["was", "the sample size", "what", "surprised", "the reviewers"],
        answer: "What surprised the reviewers was the sample size.",
        meta: {
          explanation: "The what-clause carries the entire original clause surprised the reviewers, and the spotlighted subject the sample size stands after was as the new information.",
          grammarNote: "A what-cleft can spotlight the underlying subject by fronting the predicate instead.",
        },
      },
      {
        no: 5, kind: "reorder",
        prompt: "Put the segments in order to make a correct it-cleft sentence.",
        segments: ["that", "it was not until", "the third audit", "the error", "surfaced"],
        answer: "It was not until the third audit that the error surfaced.",
        meta: {
          explanation: "The not-until phrase rides inside the cleft head, the spotlighted time expression the third audit follows it, and the that-clause delivers the delayed main event.",
          grammarNote: "Not-until clefts front a time expression and push the main clause behind that.",
        },
      },
    ],
    modelResponse: "The keyed clefts spotlight a subject, an object, a complement, an underlying subject and a time expression: it was the study, it is the chapter, what the committee rejected was the budget, what surprised the reviewers was the size, it was not until the third audit.",
    responseAnalysis: "Clefts are focus machinery: the writer chooses what to spotlight, and the frame does the rest. Learners who ask which single piece the sentence is stressing rebuild these instantly, because every other segment simply falls into the remainder slot.",
    usefulExpressions: [
      "it-cleft spotlight",
      "what-cleft fronting",
      "stranded preposition",
      "not-until cleft",
    ],
    grammarObservations: [
      "It-clefts and what-clefts repackage the same facts with different focus, which is why they are beloved by academic writers correcting an assumption.",
      "The remainder clause of a cleft behaves like a relative clause, down to stranding prepositions at its end.",
    ],
    commonMistakes: [
      "Leaving the spotlighted element in its original slot as well, duplicating it inside the remainder.",
      "Using how or which to open a cleft, when only it and what license these frames.",
    ],
    independentAssignment: "Take one plain sentence from your notes and spotlight three different elements by rebuilding it as three separate clefts.",
    source: TOEFL_WRITING_BANK_SOURCE_NOTE,
  },
];
