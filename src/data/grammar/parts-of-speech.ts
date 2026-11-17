import type { PartOfSpeechModule } from "./types";

/**
 * The eight parts of speech — the Grammar School's reference data.
 * Every module carries the full treatment: definition, purpose, categories,
 * examples, use in sentences, common mistakes and skill-based activities.
 */

export const partsOfSpeech: PartOfSpeechModule[] = [
  {
    id: "nouns",
    name: "Nouns",
    roleKey: "subject",
    definition:
      "A noun is a word for a person, place, thing or idea — 'teacher', 'Madrid', 'car', 'love'.",
    purpose:
      "Nouns name things. Almost every English sentence has a noun: they are the subjects we talk about and the objects we act on.",
    categories: [
      {
        name: "Common vs. proper",
        description: "Common nouns are general ('city'); proper nouns name one specific thing and start with a capital letter ('London').",
        examples: ["dog / Rex", "city / London", "day / Monday"],
      },
      {
        name: "Countable vs. uncountable",
        description: "Countable nouns have a plural ('book → books'); uncountable nouns do not ('information', never 'informations').",
        examples: ["two books ✓", "an information ✗ → information ✓", "three advices ✗ → advice ✓"],
      },
      {
        name: "Concrete vs. abstract",
        description: "Concrete nouns are physical ('table'); abstract nouns are ideas ('freedom', 'happiness').",
        examples: ["table, water, teacher", "freedom, love, time"],
      },
      {
        name: "Singular vs. plural",
        description: "Most plurals add -s or -es; some are irregular ('child → children', 'man → men').",
        examples: ["cat → cats", "box → boxes", "person → people"],
      },
    ],
    examples: [
      { sentence: "The dog is sleeping.", highlight: ["dog"], note: "Subject of the sentence." },
      { sentence: "I live in Barcelona.", highlight: ["Barcelona"], note: "Proper noun — capital letter." },
      { sentence: "Happiness is important.", highlight: ["Happiness"], note: "Abstract noun as subject." },
      { sentence: "She reads two books every month.", highlight: ["books"], note: "Countable plural." },
    ],
    useInSentences: [
      {
        pattern: "Subject — the sentence is about the noun",
        examples: [
          { english: "Coffee is hot.", translation: "El café está caliente." },
          { english: "My brother works here.", translation: "Mi hermano trabaja aquí." },
        ],
      },
      {
        pattern: "Object — the action lands on the noun",
        examples: [
          { english: "I need a pen.", translation: "Necesito un bolígrafo." },
          { english: "She loves music.", translation: "Le encanta la música." },
        ],
      },
      {
        pattern: "After a preposition",
        examples: [{ english: "The keys are in the box.", translation: "Las llaves están en la caja." }],
      },
    ],
    commonMistakes: [
      {
        wrong: "I have two book.",
        right: "I have two books.",
        explanation: "Numbers above one need a plural noun: two books, ten apples.",
        category: "countability",
      },
      {
        wrong: "She gave me many informations.",
        right: "She gave me a lot of information.",
        explanation: "'Information' is uncountable — it has no plural and never takes 'an'.",
        category: "countability",
      },
      {
        wrong: "This is my mother house.",
        right: "This is my mother's house.",
        explanation: "Use 's to show belonging: my mother's house.",
        category: "word-choice",
      },
    ],
    skillActivities: [
      {
        title: "Build SVO sentences",
        description: "Use nouns as subjects and objects in the Sentence Lab's basic-structure stage.",
        target: { kind: "lab", stage: 2 },
      },
      {
        title: "Expand with nouns",
        description: "Grow 'I read.' into 'I read a book.' in the expansion stage.",
        target: { kind: "lab", stage: 5 },
      },
      {
        title: "Check your own sentences",
        description: "Submit sentences with nouns to the Grammar Error Clinic and get instant corrections.",
        target: { kind: "clinic" },
      },
    ],
  },
  {
    id: "pronouns",
    name: "Pronouns",
    roleKey: "subject",
    definition:
      "A pronoun replaces a noun so you don't repeat it — 'she', 'it', 'they', 'mine'.",
    purpose:
      "Pronouns keep sentences short and natural. Instead of 'Maria likes Maria's cat', we say 'Maria likes her cat'.",
    categories: [
      {
        name: "Subject pronouns",
        description: "Do the action: I, you, he, she, it, we, they.",
        examples: ["She is my sister.", "They are ready."],
      },
      {
        name: "Object pronouns",
        description: "Receive the action: me, you, him, her, it, us, them.",
        examples: ["Call me tonight.", "I saw them."],
      },
      {
        name: "Possessive pronouns & adjectives",
        description: "Show belonging: my/mine, your/yours, his, her/hers, our/ours, their/theirs.",
        examples: ["This is my bag. / This bag is mine.", "Her car is red."],
      },
      {
        name: "Reflexive pronouns",
        description: "Point back to the subject: myself, yourself, himself, herself, ourselves.",
        examples: ["I hurt myself.", "She taught herself English."],
      },
    ],
    examples: [
      { sentence: "She is my best friend.", highlight: ["She"], note: "Subject pronoun." },
      { sentence: "This gift is for you.", highlight: ["you"], note: "Object pronoun after a preposition." },
      { sentence: "We cleaned the house ourselves.", highlight: ["We", "ourselves"], note: "Subject + reflexive." },
      { sentence: "That phone is mine.", highlight: ["mine"], note: "Possessive pronoun — no noun after it." },
    ],
    useInSentences: [
      {
        pattern: "Replace the subject",
        examples: [
          { english: "Tom is late. → He is late.", translation: "Tom llega tarde. → Él llega tarde." },
        ],
      },
      {
        pattern: "Replace the object",
        examples: [
          { english: "I like this song. I play it often.", translation: "Me gusta esta canción. La pongo a menudo." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Me and John went to the park.",
        right: "John and I went to the park.",
        explanation: "Use subject pronouns ('I') for the person doing the action — and put yourself last out of politeness.",
        category: "word-choice",
      },
      {
        wrong: "Her is a doctor.",
        right: "She is a doctor.",
        explanation: "'Her' is an object pronoun; the subject form is 'she'.",
        category: "subject-verb-agreement",
      },
      {
        wrong: "This is between you and I.",
        right: "This is between you and me.",
        explanation: "After a preposition, use the object pronoun: 'me'.",
        category: "word-choice",
      },
    ],
    skillActivities: [
      {
        title: "Pronoun practice in the Lab",
        description: "Identify subjects and replace nouns with pronouns while building sentences.",
        target: { kind: "lab", stage: 1 },
      },
      {
        title: "Family pronouns",
        description: "Practise my/your/his/her in the Pre-A1 family lesson.",
        target: { kind: "lesson", slug: "p1-2-1" },
      },
    ],
  },
  {
    id: "verbs",
    name: "Verbs",
    roleKey: "verb",
    definition:
      "A verb is a word for an action ('run') or a state ('be', 'have', 'know').",
    purpose:
      "Verbs are the engine of the sentence — every complete sentence needs one. Verbs change for tense (time), person (I go / she goes) and mood (questions, negatives).",
    categories: [
      {
        name: "Action vs. linking verbs",
        description: "Action verbs show activity ('eat'); linking verbs connect a subject to a description ('is', 'seem', 'become').",
        examples: ["They eat rice.", "She is tired.", "It seems easy."],
      },
      {
        name: "Main vs. helping (auxiliary) verbs",
        description: "Helping verbs support the main verb: be, do, have + modals (can, will, must).",
        examples: ["She is working.", "Do you agree?", "He has finished.", "I can swim."],
      },
      {
        name: "Regular vs. irregular",
        description: "Regular verbs form the past with -ed ('play → played'); irregular verbs change ('go → went').",
        examples: ["work → worked", "go → went", "be → was/were", "have → had"],
      },
      {
        name: "Transitive vs. intransitive",
        description: "Transitive verbs need an object ('read a book'); intransitive verbs don't ('sleep').",
        examples: ["I read a book.", "The baby sleeps."],
      },
    ],
    examples: [
      { sentence: "She runs every morning.", highlight: ["runs"], note: "Action verb, third person -s." },
      { sentence: "They are happy.", highlight: ["are"], note: "Linking verb 'be'." },
      { sentence: "He has written three letters.", highlight: ["has", "written"], note: "Helping verb + past participle." },
      { sentence: "I can swim.", highlight: ["can", "swim"], note: "Modal + base verb (no -s!)." },
    ],
    useInSentences: [
      {
        pattern: "Subject + Verb — the minimum sentence",
        examples: [{ english: "Birds fly.", translation: "Los pájaros vuelan." }],
      },
      {
        pattern: "Subject + Verb + Object",
        examples: [{ english: "Sara reads books.", translation: "Sara lee libros." }],
      },
      {
        pattern: "Subject + Linking verb + Complement",
        examples: [{ english: "The soup is hot.", translation: "La sopa está caliente." }],
      },
    ],
    commonMistakes: [
      {
        wrong: "She play the piano.",
        right: "She plays the piano.",
        explanation: "With he/she/it, add -s to the verb in the present simple.",
        category: "third-person",
      },
      {
        wrong: "I am agree with you.",
        right: "I agree with you.",
        explanation: "'Agree' is already a verb in English — 'am' is not needed.",
        category: "word-choice",
      },
      {
        wrong: "He can plays the guitar.",
        right: "He can play the guitar.",
        explanation: "After a modal (can, will, must), use the base verb with no -s.",
        category: "third-person",
      },
    ],
    skillActivities: [
      {
        title: "Compare all 12 tenses",
        description: "See how verbs change across tenses, side by side, in the Tense Explorer.",
        target: { kind: "tenses" },
      },
      {
        title: "Verb transformations",
        description: "Practise active/passive and tense transformations in the Lab.",
        target: { kind: "lab", stage: 7 },
      },
      {
        title: "'To be' workout",
        description: "Master am/is/are in the A1 verb lesson.",
        target: { kind: "lesson", slug: "a1-1-1" },
      },
    ],
  },
  {
    id: "adjectives",
    name: "Adjectives",
    roleKey: "modifier",
    definition:
      "An adjective describes or modifies a noun — 'big', 'red', 'interesting', 'three'.",
    purpose:
      "Adjectives add detail: they tell us what kind, how many or which one. They make communication precise.",
    categories: [
      {
        name: "Quality",
        description: "What kind: big, small, beautiful, interesting.",
        examples: ["a big house", "an interesting book"],
      },
      {
        name: "Quantity & number",
        description: "How many: some, many, three.",
        examples: ["some water", "many friends", "two cats"],
      },
      {
        name: "Demonstrative & possessive",
        description: "Which one / whose: this, that, these, those; my, your, his.",
        examples: ["this car", "those shoes", "my phone"],
      },
      {
        name: "Comparative & superlative",
        description: "Compare: bigger than / the biggest; more interesting / the most interesting.",
        examples: ["cheaper than", "the fastest", "more expensive"],
      },
    ],
    examples: [
      { sentence: "She has a red car.", highlight: ["red"], note: "Before the noun." },
      { sentence: "The movie was boring.", highlight: ["boring"], note: "After a linking verb." },
      { sentence: "This is the tallest building.", highlight: ["tallest"], note: "Superlative with 'the'." },
      { sentence: "I bought three oranges.", highlight: ["three"], note: "Number adjective." },
    ],
    useInSentences: [
      {
        pattern: "Before the noun: a + adjective + noun",
        examples: [{ english: "It is a quiet street.", translation: "Es una calle tranquila." }],
      },
      {
        pattern: "After a linking verb: subject + is + adjective",
        examples: [{ english: "The street is quiet.", translation: "La calle es tranquila." }],
      },
    ],
    commonMistakes: [
      {
        wrong: "I have a phone black.",
        right: "I have a black phone.",
        explanation: "In English the adjective comes BEFORE the noun.",
        category: "word-order",
      },
      {
        wrong: "This book is more better.",
        right: "This book is better.",
        explanation: "'Better' is already comparative — never add 'more'.",
        category: "comparatives",
      },
      {
        wrong: "It is the most easiest exam.",
        right: "It is the easiest exam.",
        explanation: "Short adjectives take -est, not 'most + -est'.",
        category: "comparatives",
      },
    ],
    skillActivities: [
      {
        title: "Expand with adjectives",
        description: "Turn 'I read a book' into 'I read an interesting book' in the Lab.",
        target: { kind: "lab", stage: 5 },
      },
      {
        title: "Colors are adjectives",
        description: "Practise the color + noun rule in the Pre-A1 colors lesson.",
        target: { kind: "lesson", slug: "p1-1-3" },
      },
    ],
  },
  {
    id: "adverbs",
    name: "Adverbs",
    roleKey: "modifier",
    definition:
      "An adverb describes a verb, an adjective or another adverb — 'quickly', 'always', 'very'.",
    purpose:
      "Adverbs tell us HOW, WHEN, WHERE or HOW OFTEN something happens, and how strong a description is.",
    categories: [
      {
        name: "Manner (how?)",
        description: "Slowly, quickly, well, badly. Most end in -ly.",
        examples: ["He runs quickly.", "She sings well."],
      },
      {
        name: "Time (when?)",
        description: "Today, yesterday, now, later.",
        examples: ["Call me later.", "I'm busy now."],
      },
      {
        name: "Frequency (how often?)",
        description: "Always, usually, often, sometimes, never.",
        examples: ["I always drink tea.", "She never smokes."],
      },
      {
        name: "Degree (how much?)",
        description: "Very, really, too, quite — these strengthen or weaken another word.",
        examples: ["very good", "too expensive", "quite easy"],
      },
    ],
    examples: [
      { sentence: "He speaks slowly.", highlight: ["slowly"], note: "Manner — how he speaks." },
      { sentence: "I usually walk to work.", highlight: ["usually"], note: "Frequency — before the main verb." },
      { sentence: "This tea is very hot.", highlight: ["very"], note: "Degree — strengthening 'hot'." },
      { sentence: "She plays the piano well.", highlight: ["well"], note: "'Well' is the adverb of 'good'." },
    ],
    useInSentences: [
      {
        pattern: "Frequency adverb BEFORE the main verb",
        examples: [{ english: "They often cook together.", translation: "Cocinan juntos a menudo." }],
      },
      {
        pattern: "Manner adverb AFTER the object",
        examples: [{ english: "She closed the door quietly.", translation: "Cerró la puerta silenciosamente." }],
      },
    ],
    commonMistakes: [
      {
        wrong: "He speaks English good.",
        right: "He speaks English well.",
        explanation: "Describing HOW he speaks needs the adverb 'well', not the adjective 'good'.",
        category: "word-choice",
      },
      {
        wrong: "I like very much this song.",
        right: "I like this song very much.",
        explanation: "'Very much' goes at the end, after the object.",
        category: "word-order",
      },
      {
        wrong: "He is a quickly runner.",
        right: "He is a fast runner.",
        explanation: "Use an adjective before a noun — 'quickly' describes actions, not people.",
        category: "word-choice",
      },
    ],
    skillActivities: [
      {
        title: "Expand with adverbs",
        description: "Add 'every evening' style time phrases in the expansion stage.",
        target: { kind: "lab", stage: 5 },
      },
      {
        title: "Time expressions by tense",
        description: "See which time words signal each tense in the Tense Explorer.",
        target: { kind: "tenses" },
      },
    ],
  },
  {
    id: "prepositions",
    name: "Prepositions",
    roleKey: "preposition",
    definition:
      "A preposition shows the relationship between a noun and another word — 'in', 'on', 'at', 'with'.",
    purpose:
      "Prepositions express time ('on Monday'), place ('in the box') and direction ('to school'). They are small words with big meaning.",
    categories: [
      {
        name: "Time",
        description: "in (months, years), on (days, dates), at (times, night).",
        examples: ["in July", "on Monday", "at 8 o'clock", "at night"],
      },
      {
        name: "Place",
        description: "in (inside), on (surface), at (point).",
        examples: ["in the kitchen", "on the table", "at the bus stop"],
      },
      {
        name: "Direction & movement",
        description: "to, from, into, out of.",
        examples: ["go to school", "come from Spain"],
      },
      {
        name: "Other relationships",
        description: "with (company), about (topic), of (belonging), for (purpose).",
        examples: ["with friends", "a book about dogs", "the door of the house"],
      },
    ],
    examples: [
      { sentence: "The keys are in the box.", highlight: ["in"], note: "Inside." },
      { sentence: "The cup is on the table.", highlight: ["on"], note: "Surface." },
      { sentence: "We meet at the station.", highlight: ["at"], note: "A point." },
      { sentence: "I go to the gym on Mondays.", highlight: ["to", "on"], note: "Direction + day." },
    ],
    useInSentences: [
      {
        pattern: "Preposition + noun (never a verb!)",
        examples: [{ english: "She is good at painting.", translation: "Se le da bien pintar." }],
      },
      {
        pattern: "Fixed pairs you must memorise",
        examples: [
          { english: "It depends on the weather.", translation: "Depende del tiempo." },
          { english: "He is married to Ana.", translation: "Está casado con Ana." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "It depends of you.",
        right: "It depends on you.",
        explanation: "'Depend' always goes with 'on'.",
        category: "prepositions",
      },
      {
        wrong: "I'm good in English.",
        right: "I'm good at English.",
        explanation: "Skills take 'good at'.",
        category: "prepositions",
      },
      {
        wrong: "She is married with a doctor.",
        right: "She is married to a doctor.",
        explanation: "'Married' goes with 'to', not 'with'.",
        category: "prepositions",
      },
    ],
    skillActivities: [
      {
        title: "Preposition clinic",
        description: "Submit your own sentences — the clinic catches preposition errors instantly.",
        target: { kind: "clinic" },
      },
      {
        title: "Café prepositions",
        description: "Practise 'Can I have…' requests with places in the café lesson.",
        target: { kind: "lesson", slug: "a1-1-2" },
      },
    ],
  },
  {
    id: "conjunctions",
    name: "Conjunctions",
    roleKey: "conjunction",
    definition:
      "A conjunction joins words, phrases or sentences — 'and', 'but', 'because', 'although'.",
    purpose:
      "Conjunctions connect ideas. Without them, writing becomes short and repetitive: 'I was tired. I went to bed.' → 'I was tired, so I went to bed.'",
    categories: [
      {
        name: "Coordinating (FANBOYS)",
        description: "for, and, nor, but, or, yet, so — join equal parts.",
        examples: ["tea and coffee", "small but comfortable", "I was tired, so I slept."],
      },
      {
        name: "Subordinating",
        description: "because, although, when, if, while, since — join a dependent clause to a main clause.",
        examples: ["because it rained", "although it was late", "when I arrive"],
      },
      {
        name: "Correlative",
        description: "Paired conjunctions: either…or, neither…nor, both…and.",
        examples: ["either tea or coffee", "both fast and cheap"],
      },
    ],
    examples: [
      { sentence: "I like tea and coffee.", highlight: ["and"], note: "Joining two nouns." },
      { sentence: "Although it rained, we walked home.", highlight: ["Although"], note: "Subordinating clause first." },
      { sentence: "I was tired, so I went to bed.", highlight: ["so"], note: "Result conjunction." },
      { sentence: "We stayed in because it was cold.", highlight: ["because"], note: "Reason conjunction." },
    ],
    useInSentences: [
      {
        pattern: "Compound sentence: sentence + , + and/but/so + sentence",
        examples: [{ english: "I called her, but she didn't answer.", translation: "La llamé, pero no respondió." }],
      },
      {
        pattern: "Complex sentence: because/although + clause + , + main clause",
        examples: [{ english: "Because I was late, I took a taxi.", translation: "Como llegaba tarde, tomé un taxi." }],
      },
    ],
    commonMistakes: [
      {
        wrong: "Because I was tired, so I slept.",
        right: "Because I was tired, I slept.",
        explanation: "Use ONE connector, not two: 'because' or 'so', never both.",
        category: "word-choice",
      },
      {
        wrong: "Despite of the rain, we went out.",
        right: "Despite the rain, we went out.",
        explanation: "'Despite' never takes 'of' (but 'in spite of' does).",
        category: "prepositions",
      },
    ],
    skillActivities: [
      {
        title: "Sentence combination",
        description: "Practise joining sentences with conjunctions in the Lab.",
        target: { kind: "lab", stage: 6 },
      },
      {
        title: "Sentence types",
        description: "See how conjunctions create compound and complex sentences.",
        target: { kind: "lab", stage: 7 },
      },
    ],
  },
  {
    id: "interjections",
    name: "Interjections",
    roleKey: "determiner",
    definition:
      "An interjection is a short word that expresses emotion — 'Wow!', 'Ouch!', 'Oh!', 'Um…'.",
    purpose:
      "Interjections add feeling to speech. They usually stand alone or start a sentence, and are often followed by an exclamation mark.",
    categories: [
      {
        name: "Emotion",
        description: "Wow! Ouch! Yay! Oops! Oh no!",
        examples: ["Wow! That's amazing!", "Ouch! That hurts."],
      },
      {
        name: "Greeting & reaction",
        description: "Hey! Hi! Oh? Really!",
        examples: ["Hey! Long time no see.", "Oh, really?"],
      },
      {
        name: "Hesitation",
        description: "Um, er, well — used while thinking.",
        examples: ["Well, I'm not sure.", "Um… let me think."],
      },
    ],
    examples: [
      { sentence: "Wow! That's amazing!", highlight: ["Wow"], note: "Surprise." },
      { sentence: "Oops! I dropped it.", highlight: ["Oops"], note: "Small mistake." },
      { sentence: "Yay! We won the match.", highlight: ["Yay"], note: "Joy." },
    ],
    useInSentences: [
      {
        pattern: "Interjection + ! + sentence",
        examples: [{ english: "Oh no! I forgot my keys.", translation: "¡Oh no! Olvidé mis llaves." }],
      },
    ],
    commonMistakes: [
      {
        wrong: "Wow, that movie was very amazing.",
        right: "Wow! That movie was amazing.",
        explanation: "'Amazing' is already a strong word — don't add 'very' (and don't over-use interjections in writing).",
        category: "word-choice",
      },
      {
        wrong: "Hello?, is this the office?",
        right: "Hello? Is this the office?",
        explanation: "A question mark ends the whole sentence — capitalize the next word.",
        category: "punctuation",
      },
    ],
    skillActivities: [
      {
        title: "Say it with feeling",
        description: "Use interjections in the speaking exercises across the course.",
        target: { kind: "lesson", slug: "p1-1-1" },
      },
      {
        title: "Sentence types",
        description: "Interjections pair with exclamatory sentences — practise them in the Lab.",
        target: { kind: "lab", stage: 3 },
      },
    ],
  },
];

const byId = new Map(partsOfSpeech.map((m) => [m.id, m]));

export function getPosModule(id: string): PartOfSpeechModule | undefined {
  return byId.get(id);
}

/** Maps a part-of-speech module to the lesson that teaches it. */
export const POS_LESSON_MAP: Record<string, string> = {
  nouns: "grammar-pos-1",
  pronouns: "grammar-pos-1",
  verbs: "grammar-pos-2",
  adjectives: "grammar-pos-3",
  adverbs: "grammar-pos-3",
  prepositions: "grammar-pos-4",
  conjunctions: "grammar-pos-4",
  interjections: "grammar-pos-4",
};
