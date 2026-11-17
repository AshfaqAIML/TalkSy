/**
 * PROMPT 36 practice bank — Pre-A1 chapters 06–08.
 *
 * Eight questions per chapter covering the chapter's actual lessons:
 * First Vocabulary (06), Understanding Word Categories (07), First English
 * Sentences (08). Authored at the full PROMPT 36 feedback standard:
 * correct answer + explanation + why-wrong + grammar rule + similar example
 * + suggested revision lesson, with progressive hints on selected questions.
 */

import {
  entry,
  fbx,
  qCorr,
  qDict,
  qFill,
  qGid,
  qLis,
  qMcq,
  qRd,
  qReord,
  qSb,
  qSpeak,
  qSpell,
  qVm,
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankPreA1: BankEntry[] = [
  // ------------------------------------------------------------- CH-06 First Vocabulary
  entry(
    6, 1, "family",
    qVm(
      "Match each family word with its meaning.",
      [
        ["w1", "mother", "noun"],
        ["w2", "father", "noun"],
        ["w3", "sister", "noun"],
        ["w4", "brother", "noun"],
      ],
      [
        ["m1", "a girl with the same parents as you"],
        ["m2", "a boy with the same parents as you"],
        ["m3", "your female parent"],
        ["m4", "your male parent"],
      ],
      [
        ["w1", "m3"],
        ["w2", "m4"],
        ["w3", "m1"],
        ["w4", "m2"],
      ],
      fbx(
        "mother — your female parent; father — your male parent; sister — a girl with the same parents; brother — a boy with the same parents.",
        "Each family word names one person in a family. Matching them to their meanings shows you can use the words, not just recognise them.",
        {
          whyWrong: "A common mix-up is sister and brother: sister is a girl, brother is a boy. Mother and father are the parents, not the children.",
          similar: ["My sister helps my mother at home.", "Mi hermana ayuda a mi madre en casa."],
          revise: ["ch-06-l-01", "People and Family teaches all the family words used here.", "People and Family"],
        },
      ),
      { difficulty: "easy", skill: "vocabulary", tags: ["family", "people"], hints: ["Start with the parents: mother and father.", "Sister is a girl, brother is a boy.", "Match the two parent words first, then the two children words."] },
    ),
  ),
  entry(
    6, 2, "animals",
    qMcq(
      "Which word is an animal?",
      [
        ["a", "horse"],
        ["b", "table"],
        ["c", " spoon"],
        ["d", "shirt"],
      ],
      "a",
      fbx("horse", "Horse is an animal. Table and spoon are things at home; a shirt is clothing.", {
        whyWrong: "Table, spoon and shirt are everyday objects, not animals. This is exactly the word group they belong to in the lesson.",
        rule: ["Animals are living beings", "Animal words name living beings: horse, cat, dog, bird, fish."],
        similar: ["The horse runs in the field.", "El caballo corre en el campo."],
        revise: ["ch-06-l-02", "Animals practises the animal words from this chapter.", "Animals"],
      }),
      { difficulty: "easy", skill: "vocabulary", tags: ["animals", "vocabulary"] },
    ),
  ),
  entry(
    6, 3, "food and colours",
    qSpell(
      "One word in this sentence is spelled wrongly. Write the correct spelling.",
      "I eat a yellow bananna every morning.",
      "bananna",
      ["banana"],
      fbx(
        "banana",
        "Banana has three a letters in a row only once: ba-na-na. The misspelling doubled the middle a.",
        {
          whyWrong: "Bananna doubles the n — banana repeats the syllable na twice: ba-na-na. Say it slowly and the spelling follows the sound.",
          rule: ["Spelling follows syllables", "Break the word into beats: ba-na-na. Each beat gets one a."],
          similar: ["The banana is green now; it is not ripe.", "El plátano está verde ahora; no está maduro."],
          revise: ["ch-06-l-03", "Food and Colours introduces the food words, including banana.", "Food and Colours"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["food", "spelling"], hints: ["Read the sentence aloud — which food word sounds wrong?", "The word comes after yellow.", "Count the beats: ba-na-na."] },
    ),
  ),
  entry(
    6, 4, "numbers",
    qLis(
      "Listen and answer: how many books are on the shelf?",
      "There are thirteen books on the shelf next to my desk.",
      "How many books are on the shelf?",
      ["thirteen", "thirteen books", "13"],
      fbx(
        "thirteen",
        "The sentence says thirteen books. Thirteen and thirty sound similar, so check the ending: thirTEEN has the long teen ending.",
        {
          whyWrong: "Thirty ends in a flat sound and means 30; thirteen ends with teen and means 13. Confusing them changes the answer completely.",
          rule: ["Teen vs -ty numbers", "13–19 end in teen (thirteen, fourteen…). Tens end in -ty (thirty, forty…)."],
          similar: ["Fourteen birds sit on the roof.", "Catorce pájaros se sientan en el tejado."],
          revise: ["ch-06-l-04", "Numbers 1–20 practises hearing the difference between teen and -ty numbers.", "Numbers 1–20 and Everyday Objects"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["numbers", "listening"] },
    ),
  ),
  entry(
    6, 5, "school and home",
    qGid(
      "Look at the sentence and label the highlighted word.",
      "The boy reads his book at school.",
      "reads",
      "What kind of word is reads?",
      "word categories",
      [
        ["a", "a naming word (thing)"],
        ["b", "an action word"],
        ["c", "a describing word"],
        ["d", "a naming word (person)"],
      ],
      "b",
      fbx(
        "reads is an action word (verb)",
        "Reads tells us what the boy does. Naming words name things (book, school) or people (boy); describing words give details (his).",
        {
          whyWrong: "Book and school name things, so they are nouns. Reads is the doing part — every sentence needs one.",
          rule: ["Action words (verbs)", "Verbs tell us what happens: read, eat, run, sleep. Without a verb, nothing happens in the sentence."],
          similar: ["My mother cooks dinner at home.", "Mi madre cocina la cena en casa."],
          revise: ["ch-06-l-06", "Basic Actions teaches action words like reads and cooks.", "Basic Actions and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["word categories", "verbs"] },
    ),
  ),
  entry(
    6, 4, "everyday objects",
    qCorr(
      "One word is wrong. Write the whole sentence correctly.",
      "I have three book on my desk.",
      ["I have three books on my desk."],
      fbx(
        "I have three books on my desk.",
        "After a number bigger than one, the thing word takes -s: three books, two cats, four chairs.",
        {
          whyWrong: "Three book breaks the counting rule: numbers above one need the plural form. One book, two books.",
          rule: ["Plural -s after numbers", "1 book — 2 books. Words after two, three, four… take -s."],
          similar: ["She buys five apples at the market.", "Ella compra cinco manzanas en el mercado."],
          revise: ["ch-06-l-04", "Numbers and Everyday Objects practises counting things with plural -s.", "Numbers 1–20 and Everyday Objects"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["plurals", "numbers"] },
    ),
  ),
  entry(
    6, 2, "animals",
    qRd(
      "Read the short text and answer the question.",
      "Sara's animals",
      "Sara has a cat and a dog. The cat is grey and it sleeps all day. The dog is brown and it runs in the garden every morning. Sara gives food to her animals two times a day.",
      "Which animal is brown?",
      [
        ["a", "the cat"],
        ["b", "the dog"],
        ["c", "both animals"],
        ["d", "neither animal"],
      ],
      "b",
      fbx(
        "the dog",
        "The text says the dog is brown; the cat is grey. The answer is stated in the second and third sentences.",
        {
          whyWrong: "The colour words are attached to one animal each: grey cat, brown dog. Mixing them up means reading the colours too fast.",
          similar: ["My fish is orange and my bird is green.", "Mi pez es naranja y mi pájaro es verde."],
          revise: ["ch-06-l-02", "Animals uses colour + animal sentences like these.", "Animals"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["animals", "reading"] },
    ),
  ),
  entry(
    6, 1, "family",
    qWrite(
      "Writing challenge: describe your family.",
      "Write three short sentences about your family: one about your mother, one about your father, and one about a brother or sister. Use one colour word (blue, green, black, red…) in one of the sentences.",
      25,
      ["mother", "father"],
      fbx(
        "Three sentences naming your family members, each with a verb — for example: My mother has black hair. My father cooks on Sunday. My sister likes blue.",
        "The machine checks that your text mentions your mother and father and reaches 25 words; the brother/sister sentence and the colour word are for you to self-check against the model. Each line needs someone doing something.",
        {
          whyWrong: "Common problems at this level: writing a list (mother, father, sister) instead of sentences, or forgetting a verb. Each line needs a naming word and an action word.",
          rule: ["Sentence = someone + action", "A sentence needs a person word, an action word and a full stop."],
          similar: ["My mother has black hair. My sister likes blue.", "Mi madre tiene el pelo negro. A mi hermana le gusta el azul."],
          revise: ["ch-08-l-01", "What Is a Sentence? explains what makes three lines into sentences.", "What Is a Sentence?"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["family", "writing"] },
    ),
  ),

  // -------------------------------------------------- CH-07 Understanding Word Categories
  entry(
    7, 2, "nouns",
    qMcq(
      "Which word is a naming word for a person?",
      [
        ["a", "teacher"],
        ["b", "slowly"],
        ["c", "green"],
        ["d", "jump"],
      ],
      "a",
      fbx("teacher", "Teacher names a person, so it is a noun. Slowly describes how, green describes colour, and jump is an action.", {
        whyWrong: "Jump is an action word, green is a describing word, and slowly tells how something happens. Only teacher names a person.",
        rule: ["Nouns name people, places, animals or things", "Person nouns: teacher, doctor, sister, friend."],
        similar: ["The teacher writes on the board.", "El profesor escribe en la pizarra."],
        revise: ["ch-07-l-02", "Naming Words (Nouns) is the lesson on person, place and thing words.", "Naming Words (Nouns)"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["nouns", "word categories"] },
    ),
  ),
  entry(
    7, 3, "verbs",
    qGid(
      "Label the highlighted word in the sentence.",
      "My sister paints a picture on Sunday.",
      "paints",
      "What kind of word is paints?",
      "word categories",
      [
        ["a", "an action word (verb)"],
        ["b", "a naming word (noun)"],
        ["c", "a describing word (adjective)"],
        ["d", "a pronoun"],
      ],
      "a",
      fbx(
        "paints is an action word (verb)",
        "Paints tells us what my sister does. The -s on the end is the he/she/it form, covered later in the programme — here we only need the category.",
        {
          whyWrong: "Picture is the thing word (noun) and my is a pronoun word. Paints is the doing part of the sentence.",
          rule: ["Verbs are doing words", "Every sentence has an action word: paints, reads, eats, sleeps."],
          similar: ["My father cooks on Friday.", "Mi padre cocina los viernes."],
          revise: ["ch-07-l-03", "Action Words (Verbs) teaches spotting the doing word in a sentence.", "Action Words (Verbs)"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["verbs", "word categories"], hints: ["Find the person in the sentence first: my sister.", "Ask: what does my sister do?", "The doing word is the one you can act out."] },
    ),
  ),
  entry(
    7, 4, "adjectives",
    qVm(
      "Match each describing word with its meaning.",
      [
        ["w1", "big", "adjective"],
        ["w2", "small", "adjective"],
        ["w3", "fast", "adjective"],
        ["w4", "quiet", "adjective"],
      ],
      [
        ["m1", "makes no noise"],
        ["m2", "large in size"],
        ["m3", "little in size"],
        ["m4", "moves with speed"],
      ],
      [
        ["w1", "m2"],
        ["w2", "m3"],
        ["w3", "m4"],
        ["w4", "m1"],
      ],
      fbx(
        "big — large; small — little; fast — with speed; quiet — no noise.",
        "Describing words add detail to naming words: a big dog, a quiet cat. Matching them to meanings proves you can pick the right one when you speak.",
        {
          whyWrong: "Big and small are opposites — mixing them reverses your meaning. Quiet is about sound, not size.",
          similar: ["We have a small, quiet dog.", "Tenemos un perro pequeño y tranquilo."],
          revise: ["ch-07-l-04", "Describing Words (Adjectives) teaches these detail words.", "Describing Words (Adjectives)"],
        },
      ),
      { difficulty: "easy", skill: "vocabulary", tags: ["adjectives", "describing"] },
    ),
  ),
  entry(
    7, 1, "what is a word",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "A word can be one letter, like a and I.",
      ["A word can be one letter, like a and I."],
      fbx(
        "A word can be one letter, like a and I.",
        "This is exact transcription practice. The capital I is the English word for me — it is always a capital, even in the middle of a sentence.",
        {
          whyWrong: "Typing i instead of I is the classic slip here: the word I never appears lowercase in correct English.",
          rule: ["I is always capital", "The pronoun I is written with a capital letter everywhere in the sentence."],
          similar: ["I am ready and a friend is with me.", "Estoy listo y un amigo está conmigo."],
          revise: ["ch-07-l-01", "What Is a Word? explains one-letter words a and I.", "What Is a Word?"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["words", "dictation"] },
    ),
  ),
  entry(
    7, 5, "pronouns",
    qCorr(
      "One word is wrong. Write the whole sentence correctly.",
      "Me like English.",
      ["I like English."],
      fbx(
        "I like English.",
        "When you are the person doing the action, the subject word is I, not me. Me is used later in the sentence: English helps me.",
        {
          whyWrong: "Me is an object word — it receives the action. A subject does the action, so the sentence needs I at the start.",
          rule: ["Subject pronouns do the action", "I, you, he, she, it, we, they start the sentence. Me, him, her come later."],
          similar: ["She plays with me after school.", "Ella juega conmigo después de la escuela."],
          revise: ["ch-07-l-05", "Pronouns teaches the difference between subject words (I, she) and object words (me, her).", "Pronouns and Word Classification Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["pronouns", "subjects"] },
    ),
  ),
  entry(
    7, 5, "pronouns",
    qSpeak(
      "Speaking practice: introduce yourself.",
      "Say two sentences about yourself out loud. Use the word I in the first sentence and the word my in the second.",
      ["I am a student.", "My name is …", "I like English."],
      ["i", "my"],
      fbx(
        "Two spoken sentences using I and my, for example: I am a student. My name is Sara.",
        "Speaking builds the word categories into muscle memory. I does the action; my shows that something belongs to you.",
        {
          whyWrong: "A common slip is saying Me instead of I at the start. Me never does the action in standard English.",
          rule: ["I does, my owns", "I + verb for actions. My + thing for belonging: my book, my family."],
          similar: ["I read every day. My book is here.", "Leo todos los días. Mi libro está aquí."],
          revise: ["ch-07-l-05", "Pronouns practises using I and my in real speech.", "Pronouns and Word Classification Review"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["pronouns", "speaking"], hints: ["Plan the first sentence: who are you? Start with I.", "For the second sentence, talk about something that is yours: use my.", "Say both sentences out loud, then check them with the button."] },
    ),
  ),
  entry(
    7, 3, "verbs",
    qReord(
      "Put the words in order to make a correct sentence.",
      "The old man walks to the park.",
      fbx(
        "The old man walks to the park.",
        "English word order for statements is: who + action + where. The old man is who, walks is the action, to the park is where.",
        {
          whyWrong: "Placing the action first (Walks the old man…) sounds like a question fragment. Keep who before action.",
          rule: ["Subject + verb", "Someone/something first, then the action: The man walks."],
          similar: ["The young girl runs to school.", "La niña corre a la escuela."],
          revise: ["ch-08-l-05", "Word Order: Subject + Verb + Object is the full lesson on statement order.", "Word Order: Subject + Verb + Object"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["word order", "sentences"] },
    ),
  ),
  entry(
    7, 2, "nouns",
    qSb(
      "Challenge: build a sentence from the tiles. Two tiles are extra.",
      ["the", "cat", "black", "sleeps", "dog", "fast", "under", "the", "tree", "yesterday"],
      ["The black cat sleeps under the tree.", "The cat sleeps under the black tree."],
      fbx(
        "The black cat sleeps under the tree.",
        "Black describes the cat, sleeps is the action, and under the tree says where. The tiles dog, fast and yesterday do not belong in this sentence.",
        {
          whyWrong: "Using dog or fast mixes other naming and describing words into a sentence about the cat — every word must fit one job.",
          rule: ["Every word has one job", "Choose words whose categories fit: a thing word, a describing word, an action word, a place word."],
          similar: ["The white dog runs in the garden.", "El perro blanco corre en el jardín."],
          revise: ["ch-07-l-05", "The Word Classification Review practises choosing words by category.", "Pronouns and Word Classification Review"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["sentence building", "word categories"], hints: ["Pick the person or thing first: which noun is the sentence about?", "The cat is the subject. Now choose the describing word that fits before it.", "Sleeps is the action. Under the tree tells you where it happens."] },
    ),
  ),

  // ------------------------------------------------------ CH-08 First English Sentences
  entry(
    8, 1, "what is a sentence",
    qMcq(
      "Which one is a complete English sentence?",
      [
        ["a", "Birds fly."],
        ["b", "in the garden"],
        ["c", "blue and very big"],
        ["d", "sings every morning"],
      ],
      "a",
      fbx("Birds fly.", "A complete sentence has a subject (birds) and a verb (fly) and makes complete sense on its own.", {
        whyWrong: "In the garden says where but has no subject or verb; blue and very big is only describing words; sings every morning has an action but nobody doing it.",
        rule: ["A sentence = subject + verb", "Every complete sentence needs someone/something and an action or state."],
        similar: ["Fish swim. Flowers grow.", "Los peces nadan. Las flores crecen."],
        revise: ["ch-08-l-02", "Complete and Incomplete Sentences teaches exactly this test.", "Complete and Incomplete Sentences"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["sentences", "completeness"] },
    ),
  ),
  entry(
    8, 3, "subjects",
    qGid(
      "Label the highlighted words in the sentence.",
      "The little dog barks at the postman.",
      "The little dog",
      "What is the job of the highlighted words?",
      "sentence roles",
      [
        ["a", "the subject — who does the action"],
        ["b", "the verb — the action itself"],
        ["c", "the object — receives the action"],
        ["d", "just a describing phrase"],
      ],
      "a",
      fbx(
        "the subject — who does the action. The little dog is the doer: it comes before the verb.",
        "The subject is who does the action. Here the dog does the barking, so The little dog is the subject of the sentence.",
        {
          whyWrong: "Barks is the action word, and the postman receives the action. The subject has to be the doer, before the verb.",
          rule: ["Subject before the verb", "In English the doer comes first: The dog (subject) barks (verb)."],
          similar: ["My tired father sleeps early.", "Mi padre cansado duerme temprano."],
          revise: ["ch-08-l-03", "The Subject is the full lesson on finding the doer.", "The Subject"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["subject", "sentence roles"], hints: ["Ask: who does the action in this sentence?", "The action is barks. Who barks?", "The doer is the subject — it comes before the verb."] },
    ),
  ),
  entry(
    8, 4, "verbs",
    qFill(
      "Complete the sentence with the action word.",
      "Birds ___ in the sky.",
      ["fly", "flies"],
      fbx(
        "fly",
        "Fly is the action word: birds do the flying. The subject is plural (birds), so the plain form fly is used.",
        {
          whyWrong: "Flies belongs with one bird (the bird flies). With the plural birds, the verb stays in its plain form.",
          rule: ["Verb with plural subjects", "They fly, we fly, birds fly — plural subjects take the plain verb."],
          similar: ["Fish swim in the river.", "Los peces nadan en el río."],
          revise: ["ch-08-l-04", "The Verb teaches finding and choosing the action word.", "The Verb"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["verbs", "fill the blank"] },
    ),
  ),
  entry(
    8, 5, "word order",
    qReord(
      "Put the words in order to make a correct sentence.",
      "My family likes pizza.",
      fbx(
        "My family likes pizza.",
        "Statement order is subject + verb + object: my family (who) likes (action) pizza (what).",
        {
          whyWrong: "Likes my family pizza puts the verb first, which is not English statement order. English keeps who before action before what.",
          rule: ["S + V + O", "Subject + Verb + Object: My family likes pizza."],
          similar: ["Our teacher speaks English.", "Nuestro profesor habla inglés."],
          revise: ["ch-08-l-05", "Word Order: Subject + Verb + Object drills this pattern.", "Word Order: Subject + Verb + Object"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["word order", "S+V+O"] },
    ),
  ),
  entry(
    8, 5, "word order",
    qCorr(
      "The words are in the wrong order. Write the sentence correctly.",
      "English like I.",
      ["I like English."],
      fbx(
        "I like English.",
        "The doer comes first: I like English. The original put the object first, which English never does in statements.",
        {
          whyWrong: "English like I reads as a fragment. The subject I must come before the verb like.",
          rule: ["Subject first", "I (subject) like (verb) English (object). Never start a statement with its object."],
          similar: ["We play football after school.", "Jugamos fútbol después de la escuela."],
          revise: ["ch-08-l-05", "Word Order: Subject + Verb + Object explains why order carries meaning.", "Word Order: Subject + Verb + Object"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["word order", "correction"] },
    ),
  ),
  entry(
    8, 6, "reading simple sentences",
    qRd(
      "Read the sentences and answer the question.",
      "Tom's Saturday",
      "Tom plays football on Saturday. He plays in the park with his friends. After the game, they eat sandwiches. Tom drinks tea, not coffee.",
      "What does Tom drink?",
      [
        ["a", "coffee"],
        ["b", "tea"],
        ["c", "sandwiches"],
        ["d", "nothing"],
      ],
      "b",
      fbx(
        "tea",
        "The last sentence says Tom drinks tea, not coffee. The word not cancels coffee — this is why we read to the end.",
        {
          whyWrong: "Coffee appears in the sentence, but not coffee removes it. Sandwiches are food, not a drink.",
          rule: ["Not cancels", "X not Y means X is true and Y is false: tea, not coffee."],
          similar: ["I drink juice, not milk, in the morning.", "Bebo zumo, no leche, por la mañana."],
          revise: ["ch-08-l-06", "Reading Simple Sentences practises reading small details like not.", "Reading Simple Sentences and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "details"] },
    ),
  ),
  entry(
    8, 6, "reading simple sentences",
    qLis(
      "Listen and answer: where is the cat?",
      "The cat sits on the mat, and the dog sleeps under the table.",
      "Where is the cat?",
      ["on the mat", "the mat", "it sits on the mat", "on the mat, and the dog sleeps under the table"],
      fbx(
        "on the mat",
        "The sentence gives two places: the cat is on the mat; the dog is under the table. Place words like on and under tell you who is where.",
        {
          whyWrong: "Under the table belongs to the dog. Listening for the name first (the cat) and then its place word (on) prevents mixing the two.",
          rule: ["On = touching the top; under = below", "On the mat (above it), under the table (below it)."],
          similar: ["The keys are on the table.", "Las llaves están sobre la mesa."],
          revise: ["ch-08-l-06", "Reading Simple Sentences includes place words like on and under.", "Reading Simple Sentences and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["prepositions", "listening"] },
    ),
  ),
  entry(
    8, 5, "sentence building",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["my", "sister", "reads", "a", "book", "every", "night", "tomorrow"],
      ["My sister reads a book every night.", "My sister reads a book every night"],
      fbx(
        "My sister reads a book every night.",
        "My sister is the subject, reads is the verb, a book is the object, every night says when. Tomorrow does not fit: the sentence is about a habit, and tomorrow is an extra tile.",
        {
          whyWrong: "Keeping tomorrow makes the sentence fight itself: every night describes a routine, tomorrow a single future day.",
          rule: ["Time words must agree", "Every night goes with habits; tomorrow goes with future plans. Never both at once."],
          similar: ["My brother watches TV every evening.", "Mi hermano ve la televisión cada tarde."],
          revise: ["ch-08-l-05", "Word Order: Subject + Verb + Object builds the frame this question uses.", "Word Order: Subject + Verb + Object"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["sentence building", "time words"], hints: ["Start with the doer: my sister.", "The action word comes next: what does she do?", "Finish with what she reads and when — but only one time phrase fits."] },
    ),
  ),
];
