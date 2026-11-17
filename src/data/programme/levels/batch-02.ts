/**
 * Core English Programme — Batch 02 (Chapters 05–08, Level Pre-A1).
 *
 * Word reading and spelling, first core vocabulary, word categories and
 * the first complete English sentences.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, LIS, MCQ, MATCH, N, REORD, TB, T, VOC, W, fb } from "../types";

export const batch02: ChapterSpec[] = [
  chapter("pre-a1", {
    number: 5,
    title: "Word Reading and Spelling",
    description:
      "From single CVC words to real reading fluency: three-letter and four-letter words, word families that multiply your vocabulary for free, the letter combinations sh, ch, th and ck, first syllables, and a reading speed routine that turns slow decoding into confident word recognition.",
    objectives: [
      "Read three-letter (CVC) and four-letter (CVCC/CCVC) words fluently",
      "Generate word families from a shared ending",
      "Read words with the combinations sh, ch, th and ck",
      "Count syllables in simple words",
      "Read a short list of simple words at conversational speed",
    ],
    prerequisites: ["CH-04"],
    hours: 3,
    skills: ["reading", "writing", "vocabulary"],
    strands: ["reading", "writing", "vocabulary", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 questions on word families, letter combinations and syllables. Assignment: read and copy a ten-word mixed list, then write three sentences with them.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 2,
    module: "pre-a1-literacy",
    lessons: [
      {
        title: "Three-Letter Words: Reading Fluency",
        blurb: "Read CVC words without stopping — speed comes from the routine in this lesson.",
        minutes: 20,
        difficulty: 1,
        skills: ["reading"],
        strands: ["reading", "pronunciation"],
        outcomes: [
          "Read at least fifteen CVC words without blending out loud",
          "Read a CVC word you have never seen before",
          "Explain how practice turns blending into instant reading",
        ],
        blocks: [
          H("From blending to reading"),
          T(
            "In Chapter 04 you learned to blend sounds. Now you build speed: read the word in one look instead of sound-by-sound. Fluent readers do not blend 'cat' — they recognise it instantly, like a face.",
          ),
          TB("Read these in one look", ["Column 1", "Column 2", "Column 3"], [
            ["cat", "bed", "pig"],
            ["hat", "red", "big"],
            ["map", "ten", "sit"],
            ["van", "leg", "win"],
            ["bag", "hen", "fin"],
          ]),
          AU("Listen: read along at speed", "cat, hat, map, van, bag. bed, red, ten, leg, hen.", 0.9),
          N("The three-pass routine", "Pass 1: blend every word slowly. Pass 2: read a little faster. Pass 3: read at normal speaking speed. Three passes per list is the classic fluency drill."),
          EX("New word? Same skill", [
            ["jig (new word) → /dʒ/ /ɪ/ /g/ → jig", "jig (palabra nueva)"],
            ["nut (new word) → /n/ /ʌ/ /t/ → nut", "nuez"],
          ], "You can now read words you have never met. That is what phonics gives you."),
        ],
        assignment: {
          title: "One-look reading log",
          instructions:
            "Copy the fifteen words from the table, read them out loud three times (slow, medium, fast), and write one sentence about how your speed changed.",
          minWords: 15,
          maxWords: 50,
        },
        homework: [
          "Reread the word table once a day until every word is instant.",
          "Write five new CVC words you find anywhere and read them.",
        ],
      },
      {
        title: "Four-Letter Words",
        blurb: "Add one more consonant: stop, hand, milk — the bridge to full everyday vocabulary.",
        minutes: 25,
        difficulty: 1,
        skills: ["reading", "vocabulary"],
        strands: ["reading", "vocabulary", "writing"],
        outcomes: [
          "Read CVCC words (hand, milk) and CCVC words (stop, plan)",
          "Spell four-letter words from sounds",
          "Explain blends like st, bl and nd",
        ],
        blocks: [
          H("One more letter"),
          T(
            "Four-letter beginner words usually add one consonant to a CVC word. Sometimes the extra letter is at the end (CVCC: hand, milk, best) and sometimes at the start (CCVC: stop, plan, frog). The added consonants often blend smoothly together.",
          ),
          TB("Four-letter word patterns", ["Pattern", "Examples"], [
            ["CVCC (end blend)", "hand, milk, best, sand, jump"],
            ["CCVC (start blend)", "stop, plan, frog, tram, flag"],
            ["Start blends", "st (stop), pl (plan), fr (frog), fl (flag), tr (tram)"],
          ]),
          EX("Sound them out", [
            ["s-t-o-p → /st/ /ɒ/ /p/ → stop", "parar"],
            ["h-a-n-d → /h/ /æ/ /nd/ → hand", "mano"],
            ["m-i-l-k → /m/ /ɪ/ /lk/ → milk", "leche"],
          ]),
          AU("Listen: blend the clusters", "st... stop. fr... frog. pl... plan.", 0.8),
          W("Two letters, two sounds", "In 'stop', s and t keep their own sounds — they do not merge into one new sound like 'sh' does. Say /s/ /t/ clearly, then slide them together."),
        ],
        assignment: {
          title: "Four-letter builders",
          instructions:
            "Write five four-letter words (two CVCC, two CCVC, one free) and show their sound breakdown like the examples in this lesson.",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Find five four-letter words in anything you read today.",
          "Read them out loud, blending the start or end cluster.",
        ],
      },
      {
        title: "Word Families",
        blurb: "Change one letter, get a new word: the -at, -an, -it and -op families multiply your reading power.",
        minutes: 25,
        difficulty: 1,
        skills: ["reading", "vocabulary"],
        strands: ["reading", "vocabulary"],
        outcomes: [
          "Build a word family from a shared ending",
          "Read all words in four common families",
          "Create a new word by swapping the first letter",
        ],
        blocks: [
          H("One family, many words"),
          T(
            "A word family is a set of words that share the same ending and rhyme: cat, hat, mat, sat all belong to the -at family. If you can read one member, you can read them all — just swap the first sound.",
          ),
          TB("Four essential families", ["Family", "Words"], [
            ["-at", "cat, hat, mat, sat, bat, rat"],
            ["-an", "man, pan, ran, fan, van, can"],
            ["-it", "sit, bit, hit, fit, pit, knit's base 'kit'"],
            ["-op", "top, mop, hop, pop, stop (add s)"],
          ]),
          GR(
            "The family rule",
            "Keep the ending, change the beginning: -at → bat, cat, fat, hat, mat, pat, rat, sat.",
            [
              ["hat → bat (change h to b)", "sombrero → murciélago"],
              ["ran → fan (change r to f)", "corrió → ventilador"],
            ],
          ),
          AU("Listen: the -an family", "man, pan, ran, fan, van, can.", 0.85),
          N("Families are free vocabulary", "Learn one family ending and you instantly read six to eight words. Four families = about twenty-five words in one lesson. That is the power of patterns."),
        ],
        assignment: {
          title: "Family builder",
          instructions:
            "Build the -ig family and the -un family with at least four words each. Then write one sentence that uses two words from the same family.",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Read all four families from the table three times.",
          "Invent your own family using any CVC ending you like.",
        ],
      },
      {
        title: "Letter Combinations and Syllables",
        blurb: "Meet sh, ch, th and ck — two letters acting as one sound — and learn to count syllables.",
        minutes: 25,
        difficulty: 2,
        skills: ["reading", "pronunciation"],
        strands: ["reading", "pronunciation", "listening"],
        outcomes: [
          "Read words containing sh, ch, th and ck",
          "Explain what a syllable is and count syllables in two-syllable words",
          "Read ten words with letter combinations correctly",
        ],
        blocks: [
          H("Two letters, one sound"),
          T(
            "Some letter pairs join into a single new sound. These pairs are called digraphs. The four you meet most in beginner words are sh, ch, th and ck. They are NOT blends: you cannot hear the two letters separately.",
          ),
          TB("The four beginner digraphs", ["Pair", "Sound", "Words"], [
            ["sh", "/ʃ/ as in 'ship'", "ship, shop, fish, wish"],
            ["ch", "/tʃ/ as in 'chip'", "chip, chat, chess, lunch"],
            ["th", "/θ/ as in 'thin'", "thin, thick, math, bath"],
            ["ck", "/k/ as in 'duck'", "duck, sock, lock, kick"],
          ]),
          EX("Digraph words in action", [
            ["sh-i-p → ship", "barco"],
            ["ch-a-t → chat", "charlar"],
            ["th-i-n → thin", "delgado"],
            ["d-u-ck → duck", "pato"],
          ]),
          H("Syllables: word beats"),
          T(
            "Every syllable has one vowel sound — it is a beat of the word. 'Cat' has one beat. 'Rab-bit' has two. Clap as you say a word: the number of claps is the number of syllables.",
          ),
          TB("Count the beats", ["Word", "Syllables", "Why"], [
            ["cat", "1", "one vowel sound"],
            ["rabbit", "2 (rab·bit)", "two vowel sounds"],
            ["pencil", "2 (pen·cil)", "two vowel sounds"],
          ]),
          AU("Listen: digraphs and beats", "ship. chat. thin. duck. ... rab-bit. pen-cil.", 0.8),
          N("Digraphs beat letter-counting", "When segmenting 'fish' you hear three sounds (/f/ /ɪ/ /ʃ/) but write four letters — 'sh' is one sound, two letters. Always trust your ears."),
        ],
        assignment: {
          title: "Digraph and syllable list",
          instructions:
            "Write five words with digraphs (sh, ch, th or ck) and three two-syllable words, marking the syllable break with a dot like 'rab.bit'.",
          minWords: 8,
          maxWords: 50,
        },
        homework: [
          "Find four digraph words in anything you read today.",
          "Clap the syllables of five objects around you.",
        ],
      },
      {
        title: "Reading Simple Words Fluently and Chapter Review",
        blurb: "Put patterns together to read mixed word lists fast, then take the Chapter 05 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["reading", "vocabulary"],
        strands: ["reading", "vocabulary", "pronunciation"],
        outcomes: [
          "Read a mixed list of 3- and 4-letter words including digraphs",
          "Read simple words at conversational speed",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Everything together"),
          T(
            "Real reading mixes everything: short vowels, four-letter words, families and digraphs. Below is a mixed list in the style of a real beginner reader. Use the three-pass routine once more.",
          ),
          TB("The mixed list", ["Set A", "Set B", "Set C"], [
            ["cat", "hand", "ship"],
            ["stop", "fish", "chat"],
            ["milk", "hat", "duck"],
            ["plan", "thin", "sock"],
            ["hop", "best", "chip"],
          ]),
          AU("Listen: read along", "cat, stop, milk, plan, hop. hand, fish, hat, thin, best. ship, chat, duck, sock, chip.", 0.95),
          EX("Read these real sentences", [
            ["The cat sat on the mat.", "El gato se sentó en la estera."],
            ["I can hop.", "Yo puedo saltar."],
          ], "You know every word in these sentences. That is reading."),
          H("Chapter 05 review"),
          T(
            "Check yourself on word families, digraphs and syllables. Three questions below, then the final reading-and-writing task.",
          ),
        ],
        assignment: {
          title: "My reading record",
          instructions:
            "Copy the fifteen mixed-list words, read them out loud three times, then write three sentences using any three words from the list.",
          minWords: 20,
          maxWords: 60,
        },
        questions: [
          MCQ(
            "Which word belongs to the -at family?",
            [
              ["a", "man"],
              ["b", "hat"],
              ["c", "hop"],
            ],
            "b",
            fb(
              "hat",
              "The -at family keeps the ending -at: cat, hat, mat, sat.",
              "'man' is in the -an family and 'hop' is in the -op family.",
            ),
            { skill: "reading", difficulty: "easy" },
          ),
          MCQ(
            "How many sounds do you hear in 'ship'?",
            [
              ["a", "2"],
              ["b", "3"],
              ["c", "4"],
            ],
            "b",
            fb(
              "3: /ʃ/ /ɪ/ /p/",
              "'sh' is one sound made of two letters, so ship has three sounds but four letters.",
              "Do not count letters — count sounds. sh = one sound.",
            ),
            { skill: "listening", difficulty: "easy" },
          ),
          MCQ(
            "Which word has two syllables?",
            [
              ["a", "chat"],
              ["b", "rabbit"],
              ["c", "ship"],
            ],
            "b",
            fb(
              "rabbit (rab·bit)",
              "Rabbit has two vowel sounds, so it has two syllables — two claps.",
              "One vowel sound = one syllable. 'chat' and 'ship' each have one.",
            ),
            { skill: "reading", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("pre-a1", {
    number: 6,
    title: "First Vocabulary",
    description:
      "The essential first 120+ words of English, organised by the places they live: people and family, animals, food and colours, numbers and everyday objects, school and home, and the basic action words that power your first sentences. Every word comes with pronunciation, meaning and an example.",
    objectives: [
      "Name family members and common people words",
      "Name at least ten common animals",
      "Name everyday foods and the eleven basic colours",
      "Count from 1 to 20 and name everyday objects",
      "Name school and home items and use fifteen basic action verbs",
    ],
    prerequisites: ["CH-05"],
    hours: 3,
    skills: ["vocabulary", "listening", "speaking"],
    strands: ["vocabulary", "listening", "speaking", "communication"],
    assessment:
      "Chapter review quiz: 3 questions covering vocabulary from all six word groups. Assignment: write a labelled mini-dictionary of ten words from your own life.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 2,
    module: "pre-a1-first-sentences",
    lessons: [
      {
        title: "People and Family",
        blurb: "The words for the most important people in your life: mother, father, sister, brother and more.",
        minutes: 25,
        difficulty: 1,
        skills: ["vocabulary", "speaking"],
        strands: ["vocabulary", "speaking", "communication"],
        outcomes: [
          "Name the members of a family in English",
          "Introduce two family members in one sentence each",
          "Ask 'Who is this?' and answer it",
        ],
        blocks: [
          H("Family words"),
          VOC("The family", [
            ["mother", "noun", "your female parent", "madre"],
            ["father", "noun", "your male parent", "padre"],
            ["sister", "noun", "a girl with the same parents as you", "hermana"],
            ["brother", "noun", "a boy with the same parents as you", "hermano"],
            ["grandmother", "noun", "your parent's mother", "abuela"],
            ["grandfather", "noun", "your parent's father", "abuelo"],
            ["son", "noun", "a male child", "hijo"],
            ["daughter", "noun", "a female child", "hija"],
          ]),
          EX("Talking about family", [
            ["This is my mother.", "Esta es mi madre."],
            ["I have one sister and two brothers.", "Tengo una hermana y dos hermanos."],
            ["Who is this? — This is my grandfather.", "¿Quién es? — Este es mi abuelo."],
          ]),
          DL(
            "A family photo",
            "Ana shows Leo a photo.",
            [
              ["Leo", "Who is this?"],
              ["Ana", "This is my sister."],
              ["Leo", "And this? Is it your father?"],
              ["Ana", "No, it is my uncle. My father is tall!"],
            ],
          ),
          AU("Listen: family words", "mother, father, sister, brother, grandmother, grandfather.", 0.85),
          N("Draw your tree", "Sketch your family tree and write the English word under every person. Learners who draw remember twice as well."),
        ],
        assignment: {
          title: "My family in English",
          instructions:
            "Write the names of three family members in English (for example 'my mother') and one sentence about each, like 'This is my brother. He is big.'",
          minWords: 12,
          maxWords: 60,
        },
        homework: [
          "Label a family photo with English words.",
          "Say each family word out loud five times.",
        ],
      },
      {
        title: "Animals",
        blurb: "Cat, dog, bird, fish — the animal words English speakers use every day.",
        minutes: 20,
        difficulty: 1,
        skills: ["vocabulary", "listening"],
        strands: ["vocabulary", "listening", "reading"],
        outcomes: [
          "Name at least ten common animals",
          "Say which animals you like and dislike",
          "Ask 'What is it?' about an animal and answer",
        ],
        blocks: [
          H("Animal words"),
          VOC("Common animals", [
            ["cat", "noun", "a small pet that says meow", "gato"],
            ["dog", "noun", "a friendly pet that says woof", "perro"],
            ["bird", "noun", "an animal that can fly", "pájaro"],
            ["fish", "noun", "an animal that lives in water", "pez"],
            ["horse", "noun", "a big animal people ride", "caballo"],
            ["cow", "noun", "a farm animal that gives milk", "vaca"],
            ["sheep", "noun", "a farm animal with wool", "oveja"],
            ["lion", "noun", "a big wild cat", "león"],
            ["elephant", "noun", "a very big grey animal", "elefante"],
            ["monkey", "noun", "an animal that climbs trees", "mono"],
          ]),
          EX("Talking about animals", [
            ["I like cats.", "Me gustan los gatos."],
            ["The lion is big.", "El león es grande."],
            ["What is it? — It is a bird.", "¿Qué es? — Es un pájaro."],
          ]),
          AU("Listen: animal words", "cat, dog, bird, fish, horse, cow, sheep, lion, elephant, monkey.", 0.85),
          TB("Pet, farm or wild?", ["Pet", "Farm", "Wild"], [
            ["cat, dog", "cow, sheep, horse", "lion, elephant, monkey"],
          ]),
          N("Big and small letters", "Notice: 'I like cats' uses the plural for general likes. You will meet plurals properly in Chapter 10."),
        ],
        assignment: {
          title: "Animal sentences",
          instructions:
            "Write three sentences about animals: one you like, one that is big, one that is small. Use 'like', 'big' and 'small'.",
          minWords: 9,
          maxWords: 45,
        },
        homework: [
          "Name five animals you see today (in real life, TV or a book) in English.",
          "Draw two animals and label them.",
        ],
      },
      {
        title: "Food and Colours",
        blurb: "Bread, milk and rice — plus the eleven colour words that describe everything else.",
        minutes: 25,
        difficulty: 1,
        skills: ["vocabulary", "listening"],
        strands: ["vocabulary", "listening", "communication"],
        outcomes: [
          "Name at least ten common foods",
          "Name the eleven basic colours",
          "Describe an object with a colour: 'a red apple'",
        ],
        blocks: [
          H("Food words"),
          VOC("Everyday food", [
            ["bread", "noun", "baked food made from flour", "pan"],
            ["milk", "noun", "the white drink from cows", "leche"],
            ["rice", "noun", "small white grains eaten warm", "arroz"],
            ["egg", "noun", "what hens lay", "huevo"],
            ["apple", "noun", "a round sweet fruit", "manzana"],
            ["banana", "noun", "a long yellow fruit", "plátano"],
            ["water", "noun", "the drink with no colour", "agua"],
            ["cheese", "noun", "food made from milk", "queso"],
          ]),
          H("Colour words"),
          VOC("The eleven colours", [
            ["red", "adjective", "the colour of blood", "rojo"],
            ["blue", "adjective", "the colour of the sky", "azul"],
            ["green", "adjective", "the colour of grass", "verde"],
            ["yellow", "adjective", "the colour of the sun", "amarillo"],
            ["orange", "adjective", "the colour of the fruit", "naranja"],
            ["black", "adjective", "the darkest colour", "negro"],
            ["white", "adjective", "the colour of snow", "blanco"],
            ["brown", "adjective", "the colour of coffee", "marrón"],
            ["pink", "adjective", "a light red colour", "rosa"],
            ["purple", "adjective", "the colour of grapes", "morado"],
            ["grey", "adjective", "a mix of black and white", "gris"],
          ]),
          EX("Food + colour together", [
            ["a red apple", "una manzana roja"],
            ["I like yellow bananas.", "Me gustan los plátanos amarillos."],
            ["The cat is black and white.", "El gato es negro y blanco."],
          ]),
          AU("Listen: colours", "red, blue, green, yellow, orange, black, white, brown, pink, purple, grey.", 0.85),
          N("Colour before the noun", "In English the colour comes BEFORE the thing: 'a red apple', not 'an apple red'. This word order rule becomes very important later."),
        ],
        assignment: {
          title: "My colourful food list",
          instructions:
            "Write five food words, each with a colour: like 'white milk'. Then write two sentences with 'I like...'.",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Name the colours of five things around you.",
          "Plan tomorrow's breakfast in English words.",
        ],
      },
      {
        title: "Numbers 1–20 and Everyday Objects",
        blurb: "Count to twenty and name the objects that fill your day: phone, book, chair, door.",
        minutes: 25,
        difficulty: 1,
        skills: ["vocabulary", "listening"],
        strands: ["vocabulary", "listening", "reading"],
        outcomes: [
          "Count from 1 to 20 out loud",
          "Say your phone number in English digits",
          "Name at least eight everyday objects",
        ],
        blocks: [
          H("Numbers 1 to 20"),
          TB("Count with me", ["1–5", "6–10", "11–15", "16–20"], [
            ["one, two, three, four, five", "six, seven, eight, nine, ten", "eleven, twelve, thirteen, fourteen, fifteen", "sixteen, seventeen, eighteen, nineteen, twenty"],
          ]),
          AU("Listen and count", "One, two, three, four, five, six, seven, eight, nine, ten.", 0.85),
          N("The teen trap", "Thirteen (13) and thirty (30) sound similar. ThirTEEN has a long, stressed ending; THIRty ends fast. Listen carefully in the audio drill."),
          H("Everyday objects"),
          VOC("Things around you", [
            ["phone", "noun", "you call people with it", "teléfono"],
            ["book", "noun", "you read it", "libro"],
            ["chair", "noun", "you sit on it", "silla"],
            ["table", "noun", "you put things on it", "mesa"],
            ["door", "noun", "you open it to enter", "puerta"],
            ["window", "noun", "glass you look through", "ventana"],
            ["bag", "noun", "you carry things in it", "bolso"],
            ["key", "noun", "it opens a lock", "llave"],
          ]),
          EX("Numbers + objects", [
            ["I have two books.", "Tengo dos libros."],
            ["Three chairs and one table.", "Tres sillas y una mesa."],
          ]),
        ],
        assignment: {
          title: "Counting my room",
          instructions:
            "Count three kinds of objects in your room in English (for example 'two windows, one table, four chairs') and write the counts as sentences.",
          minWords: 9,
          maxWords: 45,
        },
        homework: [
          "Count from 1 to 20 out loud twice a day.",
          "Say a phone number you know in English digits.",
        ],
      },
      {
        title: "School and Home",
        blurb: "Words for the two places you spend most time: pen, teacher, kitchen, bed.",
        minutes: 20,
        difficulty: 1,
        skills: ["vocabulary", "speaking"],
        strands: ["vocabulary", "speaking", "communication"],
        outcomes: [
          "Name at least six school words and six home words",
          "Say where an object is: 'in the kitchen'",
          "Describe one room with three words",
        ],
        blocks: [
          H("School words"),
          VOC("At school", [
            ["pen", "noun", "you write with it", "bolígrafo"],
            ["pencil", "noun", "you erase what it writes", "lápiz"],
            ["paper", "noun", "you write on it", "papel"],
            ["teacher", "noun", "the person who teaches", "profesor"],
            ["student", "noun", "a person who studies", "estudiante"],
            ["class", "noun", "a lesson with a teacher", "clase"],
          ]),
          H("Home words"),
          VOC("At home", [
            ["kitchen", "noun", "the room where you cook", "cocina"],
            ["bedroom", "noun", "the room with your bed", "dormitorio"],
            ["bathroom", "noun", "the room with a shower", "baño"],
            ["bed", "noun", "you sleep in it", "cama"],
            ["television", "noun", "you watch it", "televisión"],
            ["garden", "noun", "the green space at home", "jardín"],
          ]),
          EX("Where things are", [
            ["The pen is in the kitchen.", "El bolígrafo está en la cocina."],
            ["My bedroom is small.", "Mi dormitorio es pequeño."],
          ]),
          AU("Listen: school and home", "pen, pencil, paper, teacher, student, class. kitchen, bedroom, bathroom, bed.", 0.85),
          N("Prepositions are next", "You just used 'in' — a preposition. Chapter 16 teaches prepositions properly. For now, copy the pattern 'The X is in the Y'."),
        ],
        assignment: {
          title: "Two rooms, six words",
          instructions:
            "Write three sentences about school words ('The teacher has a pen.') and three about home words ('The bed is in the bedroom.').",
          minWords: 18,
          maxWords: 60,
        },
        homework: [
          "Label five objects at home or school with English words.",
          "Say each new word out loud five times.",
        ],
      },
      {
        title: "Basic Actions and Chapter Review",
        blurb: "Run, eat, sleep, read — the verbs that power your first real sentences, then the chapter review.",
        minutes: 25,
        difficulty: 2,
        skills: ["vocabulary", "grammar"],
        strands: ["vocabulary", "communication", "reading"],
        outcomes: [
          "Use fifteen basic action verbs",
          "Combine an action with a word you know: 'I eat bread'",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Action words"),
          T(
            "Action words (verbs) are the engines of sentences. With the nouns from this chapter plus these verbs, you can already build hundreds of true sentences about your life.",
          ),
          VOC("Fifteen basic actions", [
            ["eat", "verb", "put food in your mouth", "comer"],
            ["drink", "verb", "take liquid into your mouth", "beber"],
            ["sleep", "verb", "rest with your eyes closed", "dormir"],
            ["run", "verb", "move fast on your feet", "correr"],
            ["walk", "verb", "move slowly on your feet", "caminar"],
            ["read", "verb", "look at words and understand", "leer"],
            ["write", "verb", "make words with a pen", "escribir"],
            ["speak", "verb", "say words", "hablar"],
            ["listen", "verb", "hear with attention", "escuchar"],
            ["sit", "verb", "rest on a chair", "sentarse"],
            ["stand", "verb", "be on your feet", "estar de pie"],
            ["open", "verb", "make something not closed", "abrir"],
            ["close", "verb", "make something not open", "cerrar"],
            ["play", "verb", "do something fun", "jugar"],
            ["work", "verb", "do a job", "trabajar"],
          ]),
          EX("Noun + action = sentence", [
            ["I eat bread.", "Yo como pan."],
            ["She reads a book.", "Ella lee un libro."],
            ["The dog runs.", "El perro corre."],
          ]),
          AU("Listen: actions", "eat, drink, sleep, run, walk, read, write, speak, listen.", 0.85),
          H("Chapter 06 review"),
          T(
            "Six word groups, one big vocabulary. Check yourself with three questions, then build your mini-dictionary.",
          ),
        ],
        assignment: {
          title: "My mini-dictionary",
          instructions:
            "Choose ten words from this chapter that you will really use. Write each word with its meaning in your language and one example sentence for three of them.",
          minWords: 15,
          maxWords: 80,
        },
        questions: [
          MCQ(
            "Which word is a family member?",
            [
              ["a", "kitchen"],
              ["b", "sister"],
              ["c", "chair"],
            ],
            "b",
            fb(
              "sister",
              "'Sister' is a family word. 'Kitchen' and 'chair' are home words.",
              "Family words: mother, father, sister, brother, grandmother, grandfather...",
            ),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          MATCH(
            "Match each word to its group.",
            [
              ["w1", "apple"],
              ["w2", "blue"],
              ["w3", "seven"],
            ],
            [
              ["g1", "food"],
              ["g2", "colour"],
              ["g3", "number"],
            ],
            [
              ["w1", "g1"],
              ["w2", "g2"],
              ["w3", "g3"],
            ],
            fb(
              "apple = food, blue = colour, seven = number",
              "Sorting words into groups is how your brain stores vocabulary efficiently.",
            ),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          MCQ(
            "Which word is an ACTION?",
            [
              ["a", "bed"],
              ["b", "sleep"],
              ["c", "bedroom"],
            ],
            "b",
            fb(
              "sleep",
              "'Sleep' is something you DO — an action word (verb). 'Bed' and 'bedroom' are things (nouns).",
              "Ask yourself: can I do it? Then it is an action.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("pre-a1", {
    number: 7,
    title: "Understanding Word Categories",
    description:
      "Words do jobs. This chapter teaches you to see the jobs: naming words (nouns), action words (verbs), describing words (adjectives) and the small but mighty pronouns. You meet the term 'parts of speech' for the first time and learn to classify any word by its job in a sentence.",
    objectives: [
      "Explain what a word is and that every word has a job",
      "Identify naming words (nouns) in sentences",
      "Identify action words (verbs) in sentences",
      "Identify describing words (adjectives) in sentences",
      "Use the pronouns I, you, he, she, it, we, they",
    ],
    prerequisites: ["CH-06"],
    hours: 2,
    skills: ["grammar", "vocabulary"],
    strands: ["vocabulary", "reading", "writing", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on classifying words by category. Assignment: label every word in three sentences with its job.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 2,
    module: "pre-a1-first-sentences",
    lessons: [
      {
        title: "What Is a Word?",
        blurb: "Every word is a worker with a job — meet the idea that organises all grammar.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading"],
        outcomes: [
          "Explain that words have jobs, not just meanings",
          "Name the four word jobs you will meet in this chapter",
          "Look at a sentence and wonder: what is each word doing?",
        ],
        blocks: [
          H("Words are workers"),
          T(
            "Think of a sentence as a small team. Every word on the team has a job. Some words NAME things, some words show ACTIONS, some words DESCRIBE, and some small words REPLACE names so we do not repeat them. Grammar is simply the study of these jobs.",
          ),
          TB("The four jobs of this chapter", ["Job", "Question it answers", "Example"], [
            ["Naming word (noun)", "Who? What?", "dog, teacher, milk"],
            ["Action word (verb)", "What happens? What do they do?", "run, eat, sleep"],
            ["Describing word (adjective)", "What kind? Which one?", "big, red, happy"],
            ["Pronoun", "Who, without the name?", "I, you, he, she, it"],
          ]),
          EX("One sentence, four jobs", [
            ["The big dog runs.", "El perro grande corre. — 'dog' names, 'big' describes, 'runs' is the action"],
          ]),
          AU("Listen: jobs in a sentence", "The big dog runs. Dog is a name. Big describes. Runs is the action.", 0.85),
          N("Why categories matter", "When you know a word's job, you know where it can go in a sentence. That is how you will build correct sentences from Chapter 08 onwards — not by memorising, but by understanding roles."),
        ],
        assignment: {
          title: "Job spotting",
          instructions:
            "Write the sentence 'The small cat sleeps.' and next to each word write its job: naming, describing or action.",
          minWords: 6,
          maxWords: 30,
        },
        homework: [
          "Say the four jobs out loud: naming, action, describing, replacing.",
          "Find one word of each job in anything you read today.",
        ],
      },
      {
        title: "Naming Words (Nouns)",
        blurb: "People, places, things and ideas — nouns name the world.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading"],
        outcomes: [
          "Define a noun with your own example",
          "Find the nouns in a sentence",
          "Sort nouns into people, places and things",
        ],
        blocks: [
          H("Nouns name"),
          T(
            "A noun is a naming word. It names a person (teacher), a place (kitchen), a thing (book) or even an idea (love). If you can point at it, take a photo of it, or think of it as 'something', it is probably a noun.",
          ),
          GR(
            "The noun test",
            "Ask: can I say 'a ...' or 'the ...' before it? If yes, it is probably a noun.",
            [
              ["a book ✓ (noun)", "un libro ✓ (sustantivo)"],
              ["the kitchen ✓ (noun)", "la cocina ✓ (sustantivo)"],
            ],
          ),
          TB("Nouns by type", ["Person", "Place", "Thing"], [
            ["teacher, sister, doctor", "kitchen, school, London", "book, phone, milk"],
          ]),
          EX("Find the nouns", [
            ["The cat sits on the bed.", "cat, bed = nouns"],
            ["My sister reads a book in the garden.", "sister, book, garden = nouns"],
          ]),
          AU("Listen: nouns everywhere", "Teacher. Kitchen. Book. All nouns. They name a person, a place, a thing.", 0.85),
          N("Capital letters return", "Names of SPECIFIC people and places (Sara, London) take capitals — you learned this in Chapter 02. They are called proper nouns, and they return in Chapter 10."),
        ],
        assignment: {
          title: "Noun collector",
          instructions:
            "Write six nouns: two people, two places, two things. Then write one sentence using two of them.",
          minWords: 10,
          maxWords: 40,
        },
        homework: [
          "Name five nouns you can see right now.",
          "Check: which one is a place?",
        ],
      },
      {
        title: "Action Words (Verbs)",
        blurb: "Verbs make sentences move — without one, nothing happens.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading", "communication"],
        outcomes: [
          "Define a verb with your own example",
          "Find the verb in a sentence",
          "Build a two-word sentence: noun + verb",
        ],
        blocks: [
          H("Verbs act"),
          T(
            "A verb is an action word: run, eat, sleep, read. Every complete English sentence needs a verb. Without a verb, words are just a list: 'The dog ...' is waiting for something to happen.",
          ),
          GR(
            "The verb test",
            "Ask: what does it do? The answer is the verb.",
            [
              ["The dog barks. → barks", "El perro ladra. → ladra"],
              ["Birds fly. → fly", "Los pájaros vuelan. → vuelan"],
            ],
          ),
          EX("Two-word sentences", [
            ["Cats sleep.", "Los gatos duermen."],
            ["Fish swim.", "Los peces nadan."],
            ["Students read.", "Los estudiantes leen."],
          ], "Noun + verb = the smallest complete English sentence."),
          AU("Listen: verb power", "Eat. Run. Sleep. Read. Every sentence needs one of these.", 0.85),
          W("No verb, no sentence", "'The big dog in the garden' is not a sentence — nothing happens. Add 'runs' and it becomes one: 'The big dog in the garden runs.'"),
        ],
        assignment: {
          title: "Two-word sentences",
          instructions:
            "Build five two-word sentences (noun + verb) using vocabulary from Chapter 06, like 'Horses run.'",
          minWords: 10,
          maxWords: 35,
        },
        homework: [
          "Watch any person for one minute and name three actions they do.",
          "Write each action as a two-word sentence with their name: 'Ana reads.'",
        ],
      },
      {
        title: "Describing Words (Adjectives)",
        blurb: "Adjectives add colour, size and feeling to your nouns — big, red, happy.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading", "writing"],
        outcomes: [
          "Define an adjective with your own example",
          "Place an adjective before a noun correctly",
          "Describe three things with two adjectives each",
        ],
        blocks: [
          H("Adjectives describe"),
          T(
            "An adjective describes a noun: it tells you what kind, which one, how big, how it feels. 'A dog' becomes 'a big, friendly dog'. Adjectives are the difference between reporting and describing.",
          ),
          GR(
            "The adjective position rule",
            "In English, adjectives go BEFORE the noun they describe.",
            [
              ["a red apple", "una manzana roja"],
              ["a small cat", "un gato pequeño"],
            ],
            ["After 'be' the adjective comes after the verb: 'The cat is small.' Both patterns are correct — but never put the adjective after the noun before a verb: NOT 'a cat small'."],
          ),
          TB("Adjective toolbox", ["Size", "Colour", "Feeling", "Speed"], [
            ["big, small, tall, short", "red, blue, green, black", "happy, sad, good, bad", "fast, slow"],
          ]),
          EX("Describing things", [
            ["a big brown horse", "un caballo grande y marrón"],
            ["The happy dog runs fast.", "El perro feliz corre rápido."],
          ]),
          AU("Listen: describing words", "Big. Small. Red. Happy. Fast. Slow. What kind? Adjectives tell you.", 0.85),
        ],
        assignment: {
          title: "Describe your world",
          instructions:
            "Describe three things around you with two adjectives each, like 'a small black phone'. Then write one full sentence: 'The ___ ___ is ___.'",
          minWords: 12,
          maxWords: 45,
        },
        homework: [
          "Describe your favourite food with two adjectives.",
          "Find three adjectives in anything you read today.",
        ],
      },
      {
        title: "Pronouns and Word Classification Review",
        blurb: "I, you, he, she, it, we, they — the replacement words — then the Chapter 07 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "communication", "reading"],
        outcomes: [
          "Use the seven basic pronouns",
          "Replace a noun with the correct pronoun",
          "Classify words as noun, verb, adjective or pronoun",
        ],
        blocks: [
          H("Pronouns replace"),
          T(
            "A pronoun replaces a noun so you do not repeat it. Instead of 'Sara reads and Sara smiles and Sara runs', you say 'Sara reads and she smiles and she runs.' The seven you need now: I, you, he, she, it, we, they.",
          ),
          TB("Who is who", ["Pronoun", "Replaces"], [
            ["I", "the person speaking"],
            ["you", "the person listening"],
            ["he", "one male (the man, my brother)"],
            ["she", "one female (the woman, my sister)"],
            ["it", "one thing or animal (the book, the cat)"],
            ["we", "the speaker plus others"],
            ["they", "several people or things"],
          ]),
          EX("Replacing nouns", [
            ["The dog runs. → It runs.", "El perro corre. → Corre."],
            ["Sara and Leo sing. → They sing.", "Sara y Leo cantan. → Cantan."],
          ]),
          AU("Listen: pronoun roll call", "I, you, he, she, it, we, they.", 0.85),
          H("Chapter 07 review"),
          T(
            "You can now name the four word jobs and use pronouns. Classify words in the review questions below, then finish with the labelling task.",
          ),
          N("Parts of speech", "The official term for word jobs is 'parts of speech'. You now know four of the eight. The Grammar School area of TalkSy teaches all eight when you are ready."),
        ],
        assignment: {
          title: "The full label job",
          instructions:
            "Write these sentences and label every word as noun, verb, adjective or pronoun: 'The small cat sleeps.' 'She reads a big book.' 'They run fast.'",
          minWords: 15,
          maxWords: 50,
        },
        questions: [
          MCQ(
            "In the sentence 'The tall man reads a book', which word is the VERB?",
            [
              ["a", "tall"],
              ["b", "reads"],
              ["c", "book"],
            ],
            "b",
            fb(
              "reads",
              "'Reads' is the action — what the man does. 'Tall' describes and 'book' names.",
              "Ask: what does the man DO? The answer is the verb.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which word replaces 'the women' in the next sentence?",
            [
              ["a", "she"],
              ["b", "they"],
              ["c", "it"],
            ],
            "b",
            fb(
              "they",
              "'They' replaces more than one person or thing. 'She' is one female and 'it' is one thing or animal.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          MATCH(
            "Match each word to its job.",
            [
              ["w1", "kitchen"],
              ["w2", "happy"],
              ["w3", "drink (an action)"],
            ],
            [
              ["j1", "noun (naming word)"],
              ["j2", "adjective (describing word)"],
              ["j3", "verb (action word)"],
            ],
            [
              ["w1", "j1"],
              ["w2", "j2"],
              ["w3", "j3"],
            ],
            fb(
              "kitchen = noun, happy = adjective, drink = verb",
              "Classification is the foundation of all grammar study ahead.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("pre-a1", {
    number: 8,
    title: "First English Sentences",
    description:
      "Everything so far converges here: what makes a sentence a sentence, the difference between complete and incomplete ideas, the subject and the verb as the two essential parts, the fixed English word order (Subject + Verb, then Subject + Verb + Object), and reading your first real English sentences with understanding.",
    objectives: [
      "Explain what a sentence is and how it starts and ends",
      "Tell complete and incomplete sentences apart",
      "Identify the subject of a sentence",
      "Identify the verb of a sentence",
      "Build correct Subject + Verb and Subject + Verb + Object sentences",
    ],
    prerequisites: ["CH-07"],
    hours: 3,
    skills: ["grammar", "writing", "reading"],
    strands: ["writing", "reading", "communication", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on sentence completeness, subject/verb identification and word order. Assignment: write five original sentences — two SV and three SVO.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly. This is the Pre-A1 graduation chapter.",
    batch: 2,
    module: "pre-a1-first-sentences",
    lessons: [
      {
        title: "What Is a Sentence?",
        blurb: "A complete idea between two signals: a capital letter and a full stop.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Explain the three sentence signals: capital start, complete idea, end mark",
          "Recognise the three end marks: full stop, question mark, exclamation mark",
          "Count sentences in a short text",
        ],
        blocks: [
          H("The sentence contract"),
          T(
            "A sentence is a complete idea. It always does three things: starts with a capital letter, contains at least one verb, and ends with an end mark. When you write, you are making hundreds of small contracts like this.",
          ),
          GR(
            "The three signals",
            "1) Capital letter at the start. 2) A complete idea with a verb. 3) End mark: full stop (.), question mark (?), or exclamation mark (!).",
            [
              ["The dog runs.", "statement → full stop"],
              ["Does the dog run?", "question → question mark"],
              ["The dog runs fast!", "strong feeling → exclamation mark"],
            ],
          ),
          EX("Complete ideas", [
            ["I read books.", "Yo leo libros."],
            ["The sun is hot.", "El sol está caliente."],
          ]),
          AU("Listen: three end marks", "The dog runs. Does the dog run? The dog runs fast!", 0.85),
          N("End marks carry voice", "Read the three example sentences out loud: your voice falls for '.', rises for '?', and jumps for '!'. Punctuation is sound written down."),
        ],
        assignment: {
          title: "Signal check",
          instructions:
            "Write one sentence for each end mark: a statement, a question and an exclamation. Use words you know from Chapters 06 and 07.",
          minWords: 9,
          maxWords: 40,
        },
        homework: [
          "Find a short English text and count its sentences.",
          "Copy three sentences with their end marks.",
        ],
      },
      {
        title: "Complete and Incomplete Sentences",
        blurb: "'The big dog' is not a sentence yet — learn to spot what is missing.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Explain why a group of words without a verb is not a sentence",
          "Turn an incomplete idea into a complete sentence",
          "Spot incomplete sentences in a short text",
        ],
        blocks: [
          H("Is it a sentence?"),
          T(
            "A complete sentence needs a subject (who or what) and a verb (the action or state). If either part is missing, the idea is incomplete — it leaves the listener waiting.",
          ),
          TB("Complete or incomplete?", ["Words", "Verdict", "Why"], [
            ["The cat sleeps.", "Complete", "subject + verb"],
            ["The cat on the bed.", "Incomplete", "no verb — what does the cat do?"],
            ["Runs very fast.", "Incomplete", "no subject — who runs?"],
            ["It runs.", "Complete", "subject + verb"],
          ]),
          GR(
            "The completeness test",
            "Ask two questions: WHO or WHAT? (subject) and WHAT happens / what is it? (verb). Both answers present = complete sentence.",
            [
              ["The milk is white.", "WHO? the milk. WHAT? is white. ✓"],
            ],
          ),
          AU("Listen: complete vs waiting", "The dog runs. (complete) ... The dog in the garden... (waiting for more!)", 0.85),
          W("The most common beginner error", "Writing 'The cat in the garden.' as a full sentence. It looks long and real, but it has no verb. Length is not completeness."),
        ],
        assignment: {
          title: "Fix the fragments",
          instructions:
            "Two of these are incomplete. Find them, add what is missing, and write all four as complete sentences: 'The bird sings.' 'The man with the hat.' 'Sleeps a lot.' 'My sister reads.'",
          minWords: 15,
          maxWords: 50,
        },
        homework: [
          "Write one incomplete phrase and one complete sentence.",
          "Ask someone (or yourself) to spot the difference.",
        ],
      },
      {
        title: "The Subject",
        blurb: "Every sentence is about someone or something — meet the star of the sentence.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Define the subject of a sentence",
          "Find the subject in any simple sentence",
          "Answer 'Who or what...?' to identify subjects",
        ],
        blocks: [
          H("Meet the subject"),
          T(
            "The subject is who or what the sentence is about. It is usually a noun or a pronoun at the beginning. To find it, ask 'Who or what does this?' before the verb.",
          ),
          GR(
            "Finding the subject",
            "Ask the question 'Who or what?' + the verb. The answer is the subject.",
            [
              ["The dog runs. → Who runs? → the dog", "El perro corre."],
              ["My mother cooks. → Who cooks? → my mother", "Mi madre cocina."],
            ],
          ),
          EX("Subjects underlined", [
            ["Sara reads.", "Sara lee. — subject: Sara"],
            ["The cats sleep.", "Los gatos duermen. — subject: The cats"],
            ["It is hot.", "Hace calor. — subject: It"],
          ]),
          AU("Listen: ask who", "Who reads? Sara. Who sleeps? The cats. The subject answers 'who'.", 0.85),
          N("Subjects can be long", "In 'My big brother with the black dog plays football', the whole phrase 'My big brother with the black dog' is the subject. Ask the question and take the whole answer."),
        ],
        assignment: {
          title: "Subject search",
          instructions:
            "Write four sentences using words you know, and underline the subject in each one.",
          minWords: 12,
          maxWords: 45,
        },
        homework: [
          "Look at any text and find the subject of three sentences.",
          "Say each subject out loud with its verb.",
        ],
      },
      {
        title: "The Verb",
        blurb: "The engine of the sentence — find it and the sentence works.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Find the verb in any simple sentence",
          "Explain why no sentence exists without a verb",
          "Match subjects to verbs in short sentences",
        ],
        blocks: [
          H("Meet the verb"),
          T(
            "The verb is the action or state in the sentence: run, eat, sleep, but also is, am, are — the 'being' verbs. Subjects and verbs are a team: the subject is who, the verb is what happens or what is.",
          ),
          TB("Action verbs and being verbs", ["Type", "Examples", "Example sentence"], [
            ["Action verbs", "run, eat, read, play", "The dog runs."],
            ["Being verbs", "is, am, are", "The dog is big."],
          ]),
          EX("Subject + verb teams", [
            ["I read.", "Yo leo."],
            ["She sleeps.", "Ella duerme."],
            ["We are happy.", "Estamos felices."],
          ]),
          GR(
            "The verb test",
            "Ask: what happens? or what is it? The answer is the verb.",
            [
              ["The milk is cold. → is", "La leche está fría. → está"],
            ],
          ),
          AU("Listen: teams", "I read. You read. She reads. We read. Subject plus verb: a team.", 0.85),
          N("Preview of Chapter 12", "Why does 'she' take 'reads' with an s? That is the verb 'to be' and friends — Chapter 12 and Chapter 13 explain everything. For now, copy the teams exactly."),
        ],
        assignment: {
          title: "Team builder",
          instructions:
            "Write four subject + verb teams: use I, she, we and one animal word, each with a different verb.",
          minWords: 8,
          maxWords: 40,
        },
        homework: [
          "Find the verb in three sentences around you.",
          "Say whether each is an action verb or a being verb.",
        ],
      },
      {
        title: "Word Order: Subject + Verb + Object",
        blurb: "English wears its words in a fixed order: SVO. Learn the pattern that builds thousands of sentences.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Explain the SVO pattern with an example",
          "Build SVO sentences from three given words",
          "Correct a sentence with wrong word order",
        ],
        blocks: [
          H("The SVO machine"),
          T(
            "English word order is fixed: Subject first, Verb second, Object third. 'The cat eats fish.' never becomes 'Eats the cat fish.' Once you own this pattern, you can build thousands of correct sentences by slotting words into the three boxes.",
          ),
          TB("The three boxes", ["Box 1: Subject (who)", "Box 2: Verb (what happens)", "Box 3: Object (what receives)"], [
            ["The cat", "eats", "fish"],
            ["My sister", "reads", "books"],
            ["I", "drink", "water"],
          ]),
          GR(
            "The SVO rule",
            "Subject + Verb + Object. The object is the thing that receives the action.",
            [
              ["The dog chases the ball.", "El perro persigue la pelota."],
              ["Students write sentences.", "Los estudiantes escriben frases."],
            ],
            ["Some sentences stop after the verb: 'The dog runs.' That is fine — the object is optional. The ORDER of the boxes never changes."],
          ),
          EX("Build and rebuild", [
            ["reads / Sara / a book → Sara reads a book.", "Sara lee un libro."],
            ["milk / I / drink → I drink milk.", "Yo bebo leche."],
          ]),
          AU("Listen: the pattern again and again", "I drink water. She reads books. The dog eats food. Subject, verb, object.", 0.85),
          W("Adjective placement inside SVO", "Adjectives stay close to their noun: 'I drink cold water', not 'I cold drink water'. The describing word always sits before the thing it describes."),
        ],
        assignment: {
          title: "SVO factory",
          instructions:
            "Build six SVO sentences from these mixed words: 'fish / cats / eat', 'a book / reads / my brother', 'water / we / drink'. Then add two of your own.",
          minWords: 18,
          maxWords: 60,
        },
        homework: [
          "Label S, V and O in three sentences you find today.",
          "Build one SVO sentence about your day so far.",
        ],
      },
      {
        title: "Reading Simple Sentences and Chapter Review",
        blurb: "Read your first paragraph of real English, then take the Pre-A1 graduation review.",
        minutes: 30,
        difficulty: 2,
        skills: ["reading", "writing"],
        strands: ["reading", "writing", "communication", "vocabulary"],
        outcomes: [
          "Read a five-sentence paragraph of simple English with full understanding",
          "Answer questions about a simple text",
          "Answer the chapter review questions and complete the level task",
        ],
        blocks: [
          H("Your first paragraph"),
          T(
            "Read this short paragraph slowly. You know every word, every pattern and every sentence signal in it. This is what Pre-A1 English looks like when it comes together.",
          ),
          EX(
            "My day",
            [
              ["My name is Ana. I am a student. I have a small dog. His name is Rex. Rex is black and white. Every day, Rex runs in the garden. I read books and Rex sleeps. In the morning, we eat bread and drink milk. My family is small and happy.", "Mi nombre es Ana. Soy estudiante. Tengo un perro pequeño. Se llama Rex. Rex es blanco y negro. Todos los días, Rex corre en el jardín. Yo leo libros y Rex duerme. Por la mañana, comemos pan y bebemos leche. Mi familia es pequeña y feliz."],
            ],
            "Read it twice: once for the words, once for the meaning.",
          ),
          AU("Listen: the paragraph, read slowly", "My name is Ana. I am a student. I have a small dog. His name is Rex. Rex is black and white.", 0.8),
          TB("Check your understanding", ["Question", "Answer"], [
            ["Who is Rex?", "Ana's dog"],
            ["What colour is Rex?", "black and white"],
            ["What does Ana do with books?", "she reads them"],
          ]),
          H("Chapter 08 review — Pre-A1 graduation"),
          T(
            "You started this level with the alphabet. You finish it reading paragraphs and writing sentences. Answer the three review questions, then write your own paragraph in the final task. Welcome to beginner English — Level A1 starts next.",
          ),
        ],
        assignment: {
          title: "My first English paragraph",
          instructions:
            "Write a short paragraph about yourself, like Ana's paragraph in this lesson. Use at least five sentences: your name, one 'I am...' sentence, one 'I have...' sentence, two SVO sentences about your daily life.",
          minWords: 30,
          maxWords: 90,
        },
        questions: [
          MCQ(
            "Which option is a COMPLETE sentence?",
            [
              ["a", "The big dog in the garden."],
              ["b", "The big dog runs."],
              ["c", "Runs in the garden every day."],
            ],
            "b",
            fb(
              "The big dog runs.",
              "It has a subject (the big dog) and a verb (runs) — a complete idea.",
              "Option (a) has no verb; option (c) has no subject.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "In 'My sister reads books', what is the OBJECT?",
            [
              ["a", "My sister"],
              ["b", "reads"],
              ["c", "books"],
            ],
            "c",
            fb(
              "books",
              "SVO: 'My sister' is the subject, 'reads' is the verb, 'books' receives the action.",
              "The object answers 'reads WHAT?' — books.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          REORD(
            "Put the words in the correct English order.",
            "The cat drinks milk",
            fb(
              "The cat drinks milk",
              "English word order is fixed: Subject + Verb + Object.",
              "Subject first, verb second, object last — every time.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),
];
