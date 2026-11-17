/**
 * Core English Programme — Batch 01 (Chapters 01–04, Level Pre-A1).
 *
 * English from Zero: what English is, the alphabet, vowels and consonants,
 * and first phonics. Authored content, reviewable like code; seeded into
 * the CMS by scripts/seed-programme.ts.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, LIS, MCQ, MATCH, N, REORD, TB, T, VOC, W, fb } from "../types";

export const batch01: ChapterSpec[] = [
  chapter("pre-a1", {
    number: 1,
    title: "Introduction to English",
    description:
      "Your very first step into English. You meet the language itself: what it is, how people use it to communicate, how spoken and written English differ, and how words, phrases and sentences are built from small pieces. You also learn how language study actually works and set up the habits that carry you through the whole programme.",
    objectives: [
      "Explain what English is and name several countries where people speak it",
      "Describe the four communication skills: listening, speaking, reading and writing",
      "Tell spoken English and written English apart",
      "Break language down from letters to words to phrases to sentences",
      "Apply three basic learning strategies: little and often, repetition, and not fearing mistakes",
    ],
    prerequisites: [],
    hours: 2,
    skills: ["vocabulary", "reading", "listening"],
    strands: ["vocabulary", "communication", "listening", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on what English is, the four skills, and the letter-word-phrase-sentence ladder. Assignment: write two sentences about why you are learning English.",
    completion:
      "Complete all 5 lessons, submit the writing assignment in each, and answer at least 2 of the 3 review questions correctly.",
    batch: 1,
    module: "pre-a1-foundations",
    lessons: [
      {
        title: "What Is English?",
        blurb: "Meet the English language: where people speak it, what it sounds like, and why it opens doors.",
        minutes: 20,
        difficulty: 1,
        skills: ["vocabulary", "reading"],
        strands: ["vocabulary", "communication"],
        outcomes: [
          "Say what English is in one simple sentence",
          "Name at least four countries where people speak English",
          "Recognise several English words you may already know",
        ],
        blocks: [
          H("Welcome to English"),
          T(
            "English is a language — a system of sounds and words that people use to share ideas. It started in England, but today it is spoken all over the world. Around 400 million people speak English as their first language, and more than a billion people use it as a second language.",
          ),
          T(
            "You already know more English than you think. Words like 'hello', 'taxi', 'internet', 'football' and 'pizza' are used in many languages every day.",
          ),
          EX("English words you may already know", [
            ["hello", "hola"],
            ["taxi", "taxi"],
            ["internet", "internet"],
            ["pizza", "pizza"],
            ["football", "fútbol"],
          ], "If you know any of these words, you have already started."),
          TB("Where people speak English", ["Country", "Continent"], [
            ["The United Kingdom", "Europe"],
            ["The United States", "North America"],
            ["Australia", "Oceania"],
            ["India", "Asia"],
            ["Nigeria", "Africa"],
          ], "English is an official language in more than 50 countries."),
          AU("Listen: what is English?", "English is a language. People speak English in many countries.", 0.85),
          N("Why learn English?", "English helps you travel, study, work and make friends across the world. One step at a time, you will get there."),
        ],
        assignment: {
          title: "My first English sentence",
          instructions:
            "Write two or three short sentences about why you are learning English. You may use this starter: 'I am learning English because...'",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Say 'hello' out loud five times today.",
          "Find three English words around you (on clothes, phones, or signs) and write them down.",
        ],
      },
      {
        title: "Language and Communication",
        blurb: "Discover the four skills — listening, speaking, reading and writing — and how they work together.",
        minutes: 20,
        difficulty: 1,
        skills: ["vocabulary", "listening"],
        strands: ["listening", "speaking", "communication"],
        outcomes: [
          "Name the four language skills",
          "Explain what communication means with a simple example",
          "Identify which skills you use in everyday situations",
        ],
        blocks: [
          H("What is communication?"),
          T(
            "Communication is sharing ideas between people. One person sends a message — with words, sounds or writing — and another person receives it. Language is the tool that makes this possible.",
          ),
          TB("The four language skills", ["Skill", "You use it when you..."], [
            ["Listening", "understand sounds and speech"],
            ["Speaking", "say words and sentences out loud"],
            ["Reading", "understand written words and texts"],
            ["Writing", "create written words and messages"],
          ]),
          T(
            "When you talk with a friend, you listen and speak. When you use a phone, you might read a message and write a reply. Real communication usually mixes two or more skills at the same time.",
          ),
          DL(
            "Communication in action",
            "Two colleagues meet at work in the morning.",
            [
              ["Priya", "Good morning!"],
              ["Tom", "Good morning! How are you?"],
              ["Priya", "I'm fine, thank you. And you?"],
              ["Tom", "I'm very well, thanks."],
            ],
          ),
          AU("Listen: the four skills", "Listening, speaking, reading and writing. These are the four language skills.", 0.85),
          N("Speaking is a physical skill", "Your mouth needs practice, just like your memory. Say new words out loud — silently reading is not enough."),
        ],
        assignment: {
          title: "My skills plan",
          instructions:
            "Which skill do you want most: listening, speaking, reading or writing? Write two or three sentences about it and where you will use it.",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Listen to any English audio (a song or a video) for five minutes.",
          "Say the four skills out loud: listening, speaking, reading, writing.",
        ],
      },
      {
        title: "Spoken and Written English",
        blurb: "Hear the difference between English sounds and English letters — the first key to reading well.",
        minutes: 20,
        difficulty: 1,
        skills: ["listening", "reading"],
        strands: ["listening", "pronunciation", "reading"],
        outcomes: [
          "Explain the difference between spoken and written English",
          "Match a spoken word to its written form",
          "Understand that English spelling and sounds do not always match",
        ],
        blocks: [
          H("Two forms of one language"),
          T(
            "Spoken English is sound: you say it and hear it. Written English is marks on paper or a screen: you write it and read it. Children learn to speak first; reading and writing come later — just like in this programme.",
          ),
          TB("Spoken vs written English", ["Spoken English", "Written English"], [
            ["Made of sounds", "Made of letters"],
            ["You hear it", "You see it"],
            ["Fast and immediate", "Stays on the page"],
            ["Uses tone and pauses", "Uses punctuation"],
          ]),
          T(
            "Here is a surprise: English letters and sounds do not always match. The word 'knee' starts with a silent 'k'. The word 'phone' starts with a 'ph' that sounds like 'f'. Do not worry — the next chapters teach you the system step by step.",
          ),
          EX("Same word, two forms", [
            ["hello (you say it)", "hola — lo dices"],
            ["hello (you write it)", "hola — lo escribes"],
            ["one, two, three (sounds)", "uno, dos, tres"],
          ]),
          AU("Listen and repeat", "Hello. One, two, three. Thank you.", 0.8),
          W("Do not panic about spelling", "English spelling looks strange at first. Every learner thinks so. The phonics chapters ahead give you clear rules for reading most words."),
        ],
        assignment: {
          title: "Sound or letter?",
          instructions:
            "Write two or three sentences: one thing you say out loud today, and one thing you write today (a message, a note). Which was easier and why?",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Listen to the audio block again and repeat each word three times.",
          "Look at any English text and find a word you recognise.",
        ],
      },
      {
        title: "Letters, Words, Phrases and Sentences",
        blurb: "See how English is built like bricks: letters make words, words make phrases, phrases make sentences.",
        minutes: 25,
        difficulty: 1,
        skills: ["vocabulary", "grammar"],
        strands: ["vocabulary", "reading", "writing"],
        outcomes: [
          "Explain the ladder: letter → word → phrase → sentence",
          "Separate words in a short sentence",
          "Write one simple sentence of your own",
        ],
        blocks: [
          H("The building blocks of English"),
          T(
            "English is built in levels. The smallest piece is a letter. Letters join to make words. Words join to make phrases. And phrases (or words) join to make sentences — complete ideas that communicate meaning.",
          ),
          TB("From small to big", ["Level", "Example"], [
            ["Letter", "c, a, t"],
            ["Word", "cat"],
            ["Phrase", "a black cat"],
            ["Sentence", "A black cat is sleeping."],
          ]),
          T(
            "Every sentence in this course is built from the same pieces. When you understand the ladder, big sentences stop being scary: they are just small pieces in a row.",
          ),
          EX("Building one idea", [
            ["dog", "perro"],
            ["a big dog", "un perro grande"],
            ["A big dog runs.", "Un perro grande corre."],
          ]),
          AU("Listen: the ladder", "C. A. T. Cat. A black cat. A black cat is sleeping.", 0.8),
          N("Spaces matter", "English separates words with spaces. 'Abigdog' is not a word — 'a big dog' is three words."),
        ],
        assignment: {
          title: "Build your ladder",
          instructions:
            "Choose any English word you know. Write it alone, then in a phrase, then in a short sentence — exactly like the ladder in this lesson.",
          minWords: 5,
          maxWords: 40,
        },
        homework: [
          "Find any English sentence (on a phone or a sign) and count its words.",
          "Copy the sentence by hand.",
        ],
      },
      {
        title: "How English Learning Works",
        blurb: "Learn the three habits of successful language learners and take the final chapter review.",
        minutes: 25,
        difficulty: 1,
        skills: ["vocabulary", "reading"],
        strands: ["communication", "reading", "vocabulary"],
        outcomes: [
          "Describe the three learning strategies: little and often, spaced repetition, and learning from mistakes",
          "Set a simple personal study rule for this course",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Three habits of successful learners"),
          TB("The learning strategies", ["Strategy", "What it means"], [
            ["Little and often", "15–20 minutes every day beats 3 hours once a week"],
            ["Repeat and review", "Come back to old words and lessons — memory needs repeats"],
            ["Learn from mistakes", "A wrong answer teaches more than no answer"],
          ]),
          T(
            "Your brain stores language through repetition and use. Every lesson in this programme ends with practice and a small writing task, because using the language — not just reading about it — is what makes it stick.",
          ),
          N("Mistakes are data", "In this course a mistake is not a failure. It shows you exactly what to review. Keep going even when it feels slow — that is how learning looks from the inside."),
          AU("Listen: your learning promise", "Every day, a little English. I listen, I speak, I read, I write.", 0.85),
          H("Chapter 01 review"),
          T(
            "Time to check what you have learned: what English is, the four skills, spoken vs written English, and the ladder from letters to sentences. Answer the questions below, then complete the final writing task.",
          ),
        ],
        assignment: {
          title: "My English learning plan",
          instructions:
            "Write three or four sentences about your plan: when you will study, which skill you will practise most, and one rule you give yourself (for example: 'I will not be afraid of mistakes').",
          minWords: 15,
          maxWords: 60,
        },
        questions: [
          MCQ(
            "Which list contains the four language skills?",
            [
              ["a", "Listening, speaking, reading, writing"],
              ["b", "Letters, words, phrases, sentences"],
              ["c", "English, Spanish, French, German"],
            ],
            "a",
            fb(
              "Listening, speaking, reading, writing",
              "These are the four skills. The other answers describe the building ladder and languages — not skills.",
              "Letters, words, phrases, sentences are levels of building language, not skills you practise.",
            ),
            { skill: "vocabulary", difficulty: "easy", hints: ["Which answer names things you can practise?"] },
          ),
          MCQ(
            "What is the correct ladder from small to big?",
            [
              ["a", "Sentence → word → letter → phrase"],
              ["b", "Letter → word → phrase → sentence"],
              ["c", "Word → letter → sentence → phrase"],
            ],
            "b",
            fb(
              "Letter → word → phrase → sentence",
              "Letters make words, words make phrases, and phrases make complete sentences.",
              "The sentence is the biggest piece — a complete idea — so it comes last.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          FB(
            "Complete the learning rule: studying 15 minutes every day is better than studying ___ hours once a week.",
            "Studying 15 minutes every day is better than studying ___ hours once a week.",
            ["3", "three"],
            fb(
              "three",
              "Little and often wins: your brain keeps language better with daily short practice.",
              "Think about the strategy table in the lesson.",
            ),
            { skill: "vocabulary", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("pre-a1", {
    number: 2,
    title: "English Alphabet",
    description:
      "The 26 letters of English from A to Z: uppercase and lowercase forms, recognising letters quickly, writing them correctly, putting them in alphabetical order, and the first capitalisation rules. This chapter makes every later reading and spelling skill possible.",
    objectives: [
      "Name all 26 letters of the English alphabet in order",
      "Match every uppercase letter with its lowercase partner",
      "Recognise easily confused letters (b/d, p/q, i/l, m/n) reliably",
      "Write all letters by hand with correct form",
      "Apply the first capitalisation rules: names, the word 'I', and sentence beginnings",
    ],
    prerequisites: ["CH-01"],
    hours: 2,
    skills: ["vocabulary", "reading", "writing"],
    strands: ["reading", "writing", "pronunciation", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on letter names, alphabetical order and capitalisation. Assignment: write the alphabet and your own name with correct capitals.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 1,
    module: "pre-a1-foundations",
    lessons: [
      {
        title: "The 26 Letters: A to Z",
        blurb: "Meet the full English alphabet with letter names and example words.",
        minutes: 25,
        difficulty: 1,
        skills: ["vocabulary", "reading"],
        strands: ["reading", "vocabulary", "listening"],
        outcomes: [
          "Say the names of all 26 letters in order",
          "Give an example word for at least ten letters",
          "Recognise the letters by sight",
        ],
        blocks: [
          H("The English alphabet"),
          T(
            "English has 26 letters. Five of them are vowels (a, e, i, o, u) and the other twenty-one are consonants. Every English word you will ever read is built from these 26 letters.",
          ),
          TB(
            "The alphabet with example words (1/2)",
            ["Letter", "Name", "Example"],
            [
              ["A a", "ay", "apple"],
              ["B b", "bee", "book"],
              ["C c", "see", "cat"],
              ["D d", "dee", "dog"],
              ["E e", "ee", "egg"],
              ["F f", "ef", "fish"],
              ["G g", "jee", "girl"],
              ["H h", "aych", "hat"],
              ["I i", "eye", "ice"],
              ["J j", "jay", "jam"],
              ["K k", "kay", "kite"],
              ["L l", "el", "lion"],
              ["M m", "em", "moon"],
            ],
          ),
          TB(
            "The alphabet with example words (2/2)",
            ["Letter", "Name", "Example"],
            [
              ["N n", "en", "nose"],
              ["O o", "oh", "orange"],
              ["P p", "pee", "pen"],
              ["Q q", "cue", "queen"],
              ["R r", "ar", "red"],
              ["S s", "es", "sun"],
              ["T t", "tee", "table"],
              ["U u", "you", "umbrella"],
              ["V v", "vee", "violin"],
              ["W w", "double-you", "water"],
              ["X x", "ex", "box"],
              ["Y y", "why", "yellow"],
              ["Z z", "zed / zee", "zebra"],
            ],
          ),
          AU("Listen: the alphabet song", "A B C D E F G, H I J K L M N, O P Q R S, T U V, W X Y and Z.", 0.8),
          N("Sing it", "The melody is not childish — it is a memory tool. Most English teachers still sing it in their heads when checking alphabetical order."),
        ],
        assignment: {
          title: "My letters check",
          instructions:
            "Write the five letters that are hardest for you, each with an example word from the tables. Then write the letters of your first name.",
          minWords: 5,
          maxWords: 40,
        },
        homework: [
          "Say the alphabet out loud once every day this week.",
          "Spell your name in English letters out loud.",
        ],
      },
      {
        title: "Uppercase and Lowercase",
        blurb: "Every letter has two forms — big and small. Learn when each one appears.",
        minutes: 20,
        difficulty: 1,
        skills: ["reading", "writing"],
        strands: ["reading", "writing"],
        outcomes: [
          "Match uppercase and lowercase letter pairs quickly",
          "Explain where uppercase letters appear",
          "Rewrite a sentence with correct letter forms",
        ],
        blocks: [
          H("Two forms of every letter"),
          T(
            "Every English letter has two forms. The uppercase form (A, B, C — also called 'capital letters') is larger. The lowercase form (a, b, c) is smaller and appears in most normal text. 'A' and 'a' are the same letter.",
          ),
          TB("Letter pairs that look different", ["Uppercase", "Lowercase"], [
            ["A", "a"],
            ["B", "b"],
            ["D", "d"],
            ["G", "g"],
            ["Q", "q"],
            ["R", "r"],
          ], "Some pairs look very different; others, like S/s and W/w, are almost the same shape."),
          EX("One sentence, both forms", [
            ["Anna has a dog.", "Anna tiene un perro."],
            ["Tom reads a book.", "Tom lee un libro."],
          ], "Names and sentence beginnings are uppercase; everything else here is lowercase."),
          AU("Listen: same letter, two shapes", "Big A, small a. Big D, small d. Same letter, different shape.", 0.85),
          N("Why two forms?", "Uppercase letters mark the starts of sentences and important words like names. That is why most text is lowercase — capitals are signals, not decoration."),
        ],
        assignment: {
          title: "Fix the letter forms",
          instructions:
            "Rewrite these words with one uppercase letter and the rest lowercase, then check your work: 'PARIS', 'english', 'MoNdAy'. Add one sentence about what you fixed.",
          minWords: 5,
          maxWords: 40,
        },
        homework: [
          "Write all 26 lowercase letters in order.",
          "Circle the uppercase letters in any English text you find today.",
        ],
      },
      {
        title: "Letter Recognition Practice",
        blurb: "Train your eyes on the tricky letters that learners mix up: b/d, p/q, i/l and m/n.",
        minutes: 20,
        difficulty: 1,
        skills: ["reading"],
        strands: ["reading", "pronunciation"],
        outcomes: [
          "Tell apart the letter pairs b/d, p/q, i/l and m/n without hesitation",
          "Read short letter sequences correctly",
          "Explain a memory trick for at least one confusing pair",
        ],
        blocks: [
          H("The look-alike letters"),
          T(
            "Some letters are mirror images of each other, and your eyes need training to tell them apart instantly. The four classic trouble pairs are b/d, p/q, i/l and m/n.",
          ),
          TB("Confusing pairs and tricks", ["Pair", "How to tell them apart"], [
            ["b / d", "b starts with a line then a circle; d starts with a circle then a line. Word trick: 'bed' looks like a bed."],
            ["p / q", "p points down-left; q points down-right. Like b/d, but with tails below the line."],
            ["i / l", "i is short with a dot; l is tall with no dot."],
            ["m / n", "m has two humps; n has one hump."],
          ]),
          EX("Read these words carefully", [
            ["bad / dad", "mal / papá"],
            ["pat / tap", "golpecito / tocar"],
            ["mill / nail", "molino / clavo"],
          ], "One letter changes the whole word — reading carefully matters."),
          AU("Listen: b and d sounds", "b... ball. d... dog. b... book. d... door.", 0.8),
          W("Slow down on short words", "Reading 'bad' as 'dad' changes the meaning completely. When a word looks wrong, check the first letter twice."),
        ],
        assignment: {
          title: "Tricky letters drill",
          instructions:
            "Write each pair from this lesson (b/d, p/q, i/l, m/n) three times by hand, then write one short sentence explaining your favourite memory trick.",
          minWords: 8,
          maxWords: 40,
        },
        homework: [
          "Find and write down three English words that start with b and three that start with d.",
          "Read them out loud to check the difference.",
        ],
      },
      {
        title: "Writing Letters and Alphabetical Order",
        blurb: "Practise writing letters correctly and putting words in A-to-Z order like a dictionary.",
        minutes: 25,
        difficulty: 1,
        skills: ["writing", "reading"],
        strands: ["writing", "reading"],
        outcomes: [
          "Write all 26 letters with correct basic form",
          "Put five words in alphabetical order",
          "Use alphabetical order to find a word in a short list",
        ],
        blocks: [
          H("Writing by hand"),
          T(
            "Writing letters by hand builds a motor memory that helps you recognise and spell words. Write slowly and carefully at first: shape first, speed later. Keep letters sitting on the line, with tall letters (b, d, k, l) rising above and tailed letters (g, p, q, y) dropping below.",
          ),
          TB("Letter heights", ["Type", "Letters", "Example word"], [
            ["Small letters", "a c e m n o", "cat, sun"],
            ["Tall letters", "b d f h k l t", "book, hat"],
            ["Tailed letters", "g j p q y", "girl, yes"],
          ]),
          H("Alphabetical order"),
          T(
            "English lists are sorted from A to Z — dictionaries, contact lists and indexes all follow this rule. To order words, compare their first letters; if those match, look at the second letter, and so on.",
          ),
          EX("Ordering words", [
            ["apple, banana, cherry", "manzana, plátano, cereza (already A → B → C)"],
            ["cat, can, car", "gato, lata, coche (all start c-a, then n < r < t)"],
          ]),
          N("Say it out loud", "When sorting, many learners quietly sing the alphabet song to compare letters. That is a correct method, not cheating."),
        ],
        assignment: {
          title: "Alphabet practice",
          instructions:
            "Put these words in alphabetical order and write them: 'tiger, apple, moon, zebra, cat'. Then write the alphabet from A to Z by hand.",
          minWords: 5,
          maxWords: 45,
        },
        homework: [
          "Alphabetise five objects around you (in English or your language).",
          "Write the alphabet in lowercase once more, from memory.",
        ],
      },
      {
        title: "Capitalisation Rules and Chapter Review",
        blurb: "Learn where capitals always go, then take the Chapter 02 review questions.",
        minutes: 25,
        difficulty: 1,
        skills: ["writing", "grammar"],
        strands: ["writing", "reading"],
        outcomes: [
          "Apply the three core capitalisation rules",
          "Find capitalisation mistakes in a sentence",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Where capitals go"),
          GR(
            "The three capital rules for now",
            "Use a capital letter: (1) at the beginning of every sentence, (2) for names of people and places, (3) always for the word 'I'.",
            [
              ["My name is Sara.", "Mi nombre es Sara."],
              ["She lives in Madrid.", "Ella vive en Madrid."],
              ["Tom and I are friends.", "Tom y yo somos amigos."],
            ],
            ["Days and months also take capitals: Monday, January. Full details come later in the programme."],
          ),
          EX("Correct and incorrect", [
            ["my name is omar. → My name is Omar.", "Corrección: mayúscula al inicio y en el nombre"],
            ["she and i study english. → She and I study English.", "Corrección: 'I' siempre va con mayúscula"],
          ]),
          AU("Listen: capital letters", "Names start with capital letters. Tom. Sara. London.", 0.85),
          H("Chapter 02 review"),
          T(
            "Check yourself on the alphabet: letter names, alphabetical order and capitalisation. Three questions below, then the final writing task.",
          ),
        ],
        assignment: {
          title: "Capital letters in my life",
          instructions:
            "Write your full name, your city and one sentence about yourself — all with correct capital letters.",
          minWords: 8,
          maxWords: 40,
        },
        questions: [
          MCQ(
            "Which word must ALWAYS contain a capital letter?",
            [
              ["a", "the"],
              ["b", "I"],
              ["c", "and"],
            ],
            "b",
            fb(
              "I",
              "The pronoun 'I' is always capitalised, everywhere in the sentence.",
              "'the' and 'and' are common small words and are never capitalised except at a sentence start.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which list is in correct alphabetical order?",
            [
              ["a", "banana, apple, cherry"],
              ["b", "apple, cherry, banana"],
              ["c", "apple, banana, cherry"],
            ],
            "c",
            fb(
              "apple, banana, cherry",
              "A comes before B, and B comes before C. Compare first letters when sorting.",
            ),
            { skill: "reading", difficulty: "easy" },
          ),
          CORR(
            "Fix the capitalisation mistakes in this sentence.",
            "my friend lucia lives in rome.",
            ["My friend Lucia lives in Rome."],
            fb(
              "My friend Lucia lives in Rome.",
              "Sentence start ('My'), the name 'Lucia' and the city 'Rome' all need capitals.",
              "Only three words need changes: the first word, the name and the city.",
            ),
            { skill: "writing", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("pre-a1", {
    number: 3,
    title: "Vowels and Consonants",
    description:
      "The great division of English letters: five vowels and twenty-one consonants. You learn what each group does, hear the difference between short and long vowel sounds, practise identifying vowel sounds in real words, and meet the spelling patterns that explain most vowel spellings.",
    objectives: [
      "Name the five vowels and explain what makes them special",
      "Recognise the twenty-one consonants",
      "Hear and produce the five short vowel sounds",
      "Hear and produce the five long vowel sounds",
      "Apply the first spelling patterns: magic-e and double-vowel spellings",
    ],
    prerequisites: ["CH-02"],
    hours: 2,
    skills: ["listening", "reading", "pronunciation"],
    strands: ["pronunciation", "listening", "reading", "vocabulary"],
    assessment:
      "Chapter review quiz: 3 questions on vowels vs consonants and short vs long sounds. Assignment: sort ten words by vowel sound.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 1,
    module: "pre-a1-foundations",
    lessons: [
      {
        title: "What Is a Vowel?",
        blurb: "Meet a, e, i, o, u — the five letters that carry the voice of every English word.",
        minutes: 20,
        difficulty: 1,
        skills: ["listening", "vocabulary"],
        strands: ["pronunciation", "vocabulary", "listening"],
        outcomes: [
          "Name the five vowels",
          "Explain why every English word needs a vowel sound",
          "Find the vowel in any simple word",
        ],
        blocks: [
          H("The five vowels"),
          T(
            "The vowels are a, e, i, o and u. When you say a vowel, your mouth stays open and the air flows freely — no lip, tongue or teeth block the sound. Vowels are the music of words; they carry your voice.",
          ),
          T(
            "Every English word has at least one vowel sound. Try to make a word without one — it is impossible. That is why vowels get their own chapter.",
          ),
          EX("Vowels in simple words", [
            ["c-a-t — the vowel is a", "gato — la vocal es a"],
            ["p-e-n — the vowel is e", "bolígrafo — la vocal es e"],
            ["f-i-sh — the vowel is i", "pez — la vocal es i"],
          ]),
          AU("Listen: the five vowels", "a... e... i... o... u.", 0.8),
          N("Sometimes y", "The letter 'y' sometimes acts like a vowel, for example in 'my' and 'happy'. For now, remember the main five: a, e, i, o, u."),
        ],
        assignment: {
          title: "Vowel hunt",
          instructions:
            "Write these words and underline the vowel in each: 'sun', 'hat', 'bed', 'big', 'hot'. Then write one sentence about which vowel sound was easiest to hear.",
          minWords: 6,
          maxWords: 40,
        },
        homework: [
          "Say the five vowels out loud five times.",
          "Find three objects around you and name their vowels (in English if you can).",
        ],
      },
      {
        title: "What Is a Consonant?",
        blurb: "The other twenty-one letters: sounds that your lips, teeth and tongue shape and stop.",
        minutes: 20,
        difficulty: 1,
        skills: ["listening", "vocabulary"],
        strands: ["pronunciation", "vocabulary", "listening"],
        outcomes: [
          "Name several consonants and describe how they feel to say",
          "Explain the difference between vowels and consonants",
          "Separate the vowels and consonants in a word",
        ],
        blocks: [
          H("The consonants"),
          T(
            "Every letter that is not a vowel is a consonant: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y and z. When you say a consonant, something in your mouth touches or narrows: your lips close for 'm', your teeth touch your lip for 'f', your tongue taps for 't'.",
          ),
          TB("Feel the difference", ["Sound", "What your mouth does"], [
            ["m", "lips close and hum"],
            ["f", "top teeth touch the lower lip"],
            ["t", "tongue taps behind the top teeth"],
            ["s", "air hisses between tongue and teeth"],
          ]),
          EX("Vowels and consonants together", [
            ["dog = d (consonant) + o (vowel) + g (consonant)", "perro"],
            ["map = m + a + p", "mapa"],
          ]),
          AU("Listen: open vs closed sounds", "ah... (open vowel) ... mm (closed consonant) ... ah ... mm", 0.8),
          N("Consonants are the frame", "If vowels are the music, consonants are the beat: they give words their shape and rhythm. You need both to make a word."),
        ],
        assignment: {
          title: "Sort the letters",
          instructions:
            "Write the letters of these words in two groups, vowels and consonants: 'table', 'music', 'water'. Example: sun = vowel u, consonants s and n.",
          minWords: 6,
          maxWords: 40,
        },
        homework: [
          "Say 'm', 'f', 't' and 's' slowly and feel where your mouth closes.",
          "Choose five letters and decide: vowel or consonant?",
        ],
      },
      {
        title: "Short Vowel Sounds",
        blurb: "The five short vowels — the sounds inside cat, pen, sit, hot and cup.",
        minutes: 25,
        difficulty: 1,
        skills: ["listening", "pronunciation"],
        strands: ["pronunciation", "listening", "reading"],
        outcomes: [
          "Produce the five short vowel sounds correctly",
          "Match short vowels to their key words: cat, pen, sit, hot, cup",
          "Hear which short vowel a word contains",
        ],
        blocks: [
          H("Five short sounds"),
          T(
            "Each vowel letter has a short sound. These five sounds appear in thousands of simple English words. Learn the key words below and you hold the key to early reading.",
          ),
          TB("The short vowel key words", ["Vowel", "Sound", "Key word", "More words"], [
            ["a", "/æ/", "cat", "hat, map, bag"],
            ["e", "/e/", "pen", "bed, red, ten"],
            ["i", "/ɪ/", "sit", "big, fish, six"],
            ["o", "/ɒ/", "hot", "dog, box, top"],
            ["u", "/ʌ/", "cup", "bus, sun, run"],
          ]),
          AU("Listen and repeat: the five short sounds", "cat. pen. sit. hot. cup.", 0.8),
          EX("Hear the difference", [
            ["cat (a) vs cut (u)", "gato vs taza"],
            ["bed (e) vs bad (a)", "cama vs malo"],
            ["sit (i) vs sat (a)", "sienta vs sentó"],
          ], "One vowel changes the word completely."),
          W("Short does not mean small", "'Short' describes the sound, not importance. Short vowels are the most common vowel sounds in beginner words — master them first."),
        ],
        assignment: {
          title: "Short vowel sentences",
          instructions:
            "Write five short sentences, one for each short vowel key word pattern (a word like 'cat', 'pen', 'sit', 'hot', 'cup'). Example: 'The cat is big.'",
          minWords: 15,
          maxWords: 50,
        },
        homework: [
          "Repeat the audio drill three times, copying the sounds exactly.",
          "Find one real word for each short vowel in anything you read today.",
        ],
      },
      {
        title: "Long Vowel Sounds",
        blurb: "When vowels say their own names: the sounds inside cake, these, bike, home and cute.",
        minutes: 25,
        difficulty: 1,
        skills: ["listening", "pronunciation"],
        strands: ["pronunciation", "listening", "reading"],
        outcomes: [
          "Produce the five long vowel sounds",
          "Explain the magic-e pattern in simple words",
          "Tell short and long vowels apart by listening",
        ],
        blocks: [
          H("Five long sounds"),
          T(
            "Each vowel also has a long sound — the vowel simply says its own name. In 'cake' the a says 'ay'; in 'bike' the i says 'eye'. Long vowels usually appear in words with a specific spelling shape.",
          ),
          TB("Long vowel key words", ["Vowel", "Long sound says", "Key word", "Short partner"], [
            ["a", "ay", "cake", "cat"],
            ["e", "ee", "these", "pen"],
            ["i", "eye", "bike", "sit"],
            ["o", "oh", "home", "hot"],
            ["u", "you", "cute", "cup"],
          ]),
          GR(
            "The magic-e pattern",
            "A word that ends in vowel + consonant + e usually makes the vowel long: the final e is silent and 'makes the vowel say its name'.",
            [
              ["hat → hate", "sombrero → odiar"],
              ["hop → hope", "saltar → esperanza"],
              ["cut → cute", "cortar → lindo"],
            ],
          ),
          AU("Listen: short then long", "cat... cake. bit... bike. not... note.", 0.8),
          N("Listen with your ears, not your eyes", "You cannot guess from spelling alone whether a vowel is short or long — you must hear the word. Listening practice is not optional; it is the method."),
        ],
        assignment: {
          title: "Magic-e pairs",
          instructions:
            "Change these short-vowel words into long-vowel words by adding magic-e, and write both: 'tap', 'win', 'rod', 'plan'. Then write one sentence using one long-vowel word.",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Say each pair (tap/tape, win/wine, rod/rode) out loud three times.",
          "Find two magic-e words in anything you read today.",
        ],
      },
      {
        title: "Identifying Vowel Sounds and Spelling Patterns",
        blurb: "Practise hearing vowel sounds in real words, meet the double-vowel spellings, and take the chapter review.",
        minutes: 25,
        difficulty: 2,
        skills: ["reading", "listening"],
        strands: ["reading", "pronunciation", "listening"],
        outcomes: [
          "Identify the vowel sound in unfamiliar simple words",
          "Recognise common vowel teams: ee, ea, oa, ai",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Vowel teams"),
          T(
            "Two vowels often join to make one long sound. The most common teams are 'ee', 'ea', 'oa' and 'ai'. A useful saying: 'when two vowels go walking, the first one does the talking' — the first vowel says its name.",
          ),
          TB("Common vowel teams", ["Team", "Sound", "Examples"], [
            ["ee", "long e", "see, tree, feet"],
            ["ea", "long e", "sea, eat, read"],
            ["oa", "long o", "boat, coat, road"],
            ["ai", "long a", "rain, train, paint"],
          ]),
          EX("One sound, different spellings", [
            ["see / sea — both say long e", "ver / mar"],
            ["rain / plane — both say long a", "lluvia / avión"],
          ]),
          AU("Listen: vowel teams", "see, sea. boat. rain, train.", 0.8),
          H("Chapter 03 review"),
          T(
            "You now know the vowel/consonant split, the five short sounds, the five long sounds and the first spelling patterns. Three review questions below, then the sorting task.",
          ),
        ],
        assignment: {
          title: "Vowel sound sort",
          instructions:
            "Sort these words into short-vowel and long-vowel lists: 'hat, cake, pen, bike, hot, home, sit, cute, sun, rain'. Write both lists.",
          minWords: 10,
          maxWords: 50,
        },
        questions: [
          MCQ(
            "Which letter is NOT a vowel?",
            [
              ["a", "u"],
              ["b", "e"],
              ["c", "o"],
            ],
            "c",
            fb(
              "o",
              "The vowels are a, e, i, o, u. The letter o is a vowel.",
              "Check the list of five vowels: a, e, i, o, u.",
            ),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          MCQ(
            "Which word has a LONG vowel sound?",
            [
              ["a", "cat"],
              ["b", "cake"],
              ["c", "cup"],
            ],
            "b",
            fb(
              "cake",
              "Magic-e makes the a long: cake rhymes with 'make'. 'cat' and 'cup' have short vowels.",
              "Say the words out loud: which one says the vowel's name?",
            ),
            { skill: "listening", difficulty: "easy" },
          ),
          MATCH(
            "Match each word to its vowel sound.",
            [
              ["w1", "pen"],
              ["w2", "bike"],
              ["w3", "bus"],
            ],
            [
              ["s1", "short e"],
              ["s2", "long i"],
              ["s3", "short u"],
            ],
            [
              ["w1", "s1"],
              ["w2", "s2"],
              ["w3", "s3"],
            ],
            fb(
              "pen = short e, bike = long i, bus = short u",
              "'pen' has the short e sound; 'bike' has long i (magic-e); 'bus' has short u.",
            ),
            { skill: "listening", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("pre-a1", {
    number: 4,
    title: "Introduction to Phonics",
    description:
      "Phonics connects letters to sounds so you can read and build words yourself. You learn the difference between letter names and letter sounds, practise hearing initial and final sounds, build and read CVC words, and master blending (joining sounds) and segmenting (splitting sounds) — the two core mechanics of early reading.",
    objectives: [
      "Say the sound of each letter separately from its name",
      "Identify the first and last sound of a spoken word",
      "Read and build CVC words (consonant-vowel-consonant)",
      "Blend three sounds into a word",
      "Segment a word into its sounds for spelling",
    ],
    prerequisites: ["CH-03"],
    hours: 3,
    skills: ["reading", "listening", "pronunciation"],
    strands: ["reading", "pronunciation", "listening", "writing"],
    assessment:
      "Chapter review quiz: 3 questions on letter sounds, CVC structure and blending. Assignment: read and write six CVC words from sounds.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 1,
    module: "pre-a1-literacy",
    lessons: [
      {
        title: "Letter Names vs Letter Sounds",
        blurb: "Every letter has a name and a sound — and reading uses the sound, not the name.",
        minutes: 20,
        difficulty: 1,
        skills: ["reading", "pronunciation"],
        strands: ["pronunciation", "reading", "listening"],
        outcomes: [
          "Explain the difference between a letter's name and its sound",
          "Say the sound of the most common consonants",
          "Read two letters by their sounds, not their names",
        ],
        blocks: [
          H("Two labels for every letter"),
          T(
            "The letter 'b' has the name 'bee' and the sound /b/ — a short, clipped sound. When you READ, you use sounds. When you SPELL ALOUD, you use names. Mixing them up is the number-one beginner reading mistake.",
          ),
          TB("Names vs sounds", ["Letter", "Name", "Sound", "Example"], [
            ["b", "bee", "/b/", "ball"],
            ["m", "em", "/m/", "moon"],
            ["s", "es", "/s/", "sun"],
            ["t", "tee", "/t/", "top"],
            ["f", "ef", "/f/", "fish"],
          ]),
          AU("Listen: names, then sounds", "The name is em. The sound is /m/... /m/... moon.", 0.8),
          EX("Reading with sounds", [
            ["s + u + n → sun (not 'es-you-en')", "s + u + n → sol"],
            ["m + a + p → map", "m + a + p → mapa"],
          ]),
          W("Do not spell-read", "If you read c-a-t as 'see-ay-tee', you are saying names. Slow down and use pure sounds: /k/ /æ/ /t/ → cat."),
        ],
        assignment: {
          title: "Name or sound?",
          instructions:
            "For the letters b, m, s, t and f, write the name and the sound of each (like the table in this lesson). Then write one sentence about which is more useful for reading.",
          minWords: 10,
          maxWords: 45,
        },
        homework: [
          "Say the sounds /b/ /m/ /s/ /t/ /f/ five times each.",
          "Point at any five letters around you and say only their sounds.",
        ],
      },
      {
        title: "Initial Sounds",
        blurb: "Train your ear on the FIRST sound of words — the anchor of reading and spelling.",
        minutes: 20,
        difficulty: 1,
        skills: ["listening", "pronunciation"],
        strands: ["listening", "pronunciation", "vocabulary"],
        outcomes: [
          "Identify the first sound of a spoken word",
          "Match words that start with the same sound",
          "Say a word that starts with a given sound",
        ],
        blocks: [
          H("First things first"),
          T(
            "The first sound of a word is the easiest to hear and the most useful for reading. When you meet a new word, your brain checks its beginning first — that is how you tell 'dog' from 'log'.",
          ),
          EX("What do you hear first?", [
            ["moon → /m/", "luna → /m/"],
            ["sun → /s/", "sol → /s/"],
            ["top → /t/", "arriba → /t/"],
          ]),
          TB("Same first sound", ["Sound", "Words that share it"], [
            ["/m/", "moon, map, milk, mouth"],
            ["/s/", "sun, sit, sock, sand"],
            ["/b/", "ball, big, bus, bed"],
          ]),
          AU("Listen: catch the first sound", "Moon. What is the first sound? ... /m/. Sun. First sound? ... /s/.", 0.8),
          N("Feel it in your mouth", "Say the word very slowly and notice what your mouth does FIRST. For 'moon', your lips close for /m/ before anything else happens."),
        ],
        assignment: {
          title: "First-sound hunt",
          instructions:
            "Write one word for each starting sound: /m/, /s/, /b/, /t/, /f/. Then write one sentence about a word whose first sound surprised you.",
          minWords: 6,
          maxWords: 40,
        },
        homework: [
          "Name five objects near you and say their first sound.",
          "Find two words that start with the same sound.",
        ],
      },
      {
        title: "Final Sounds",
        blurb: "Now catch the LAST sound of a word — the key to word families and rhymes.",
        minutes: 20,
        difficulty: 1,
        skills: ["listening", "pronunciation"],
        strands: ["listening", "pronunciation", "vocabulary"],
        outcomes: [
          "Identify the final sound of a spoken word",
          "Group words that end with the same sound",
          "Use final sounds to make your first rhymes",
        ],
        blocks: [
          H("The end matters too"),
          T(
            "The final sound of a word is how rhymes work — and rhymes are a powerful memory tool. Words like 'cat', 'hat' and 'sit' are told apart by their last sound as much as their first.",
          ),
          EX("What do you hear last?", [
            ["cat → /t/", "gato → /t/"],
            ["man → /n/", "hombre → /n/"],
            ["bus → /s/", "autobús → /s/"],
          ]),
          TB("Rhyme families by final sound", ["Family", "Words"], [
            ["-at", "cat, hat, mat, sat"],
            ["-un", "sun, run, fun, bun"],
            ["-ig", "big, dig, pig, wig"],
          ]),
          AU("Listen: rhyming words", "cat, hat, mat. They all end the same: /t/.", 0.8),
          N("Final sounds unlock word families", "Once you can hear that 'cat' and 'hat' share their ending, you can read entire families of words by changing only the first sound. That is the next lesson's superpower."),
        ],
        assignment: {
          title: "Rhyme time",
          instructions:
            "Write two words that rhyme with 'cat', two that rhyme with 'sun', and two that rhyme with 'big'. Then write one sentence using two of your rhyming words.",
          minWords: 10,
          maxWords: 45,
        },
        homework: [
          "Find three pairs of rhyming words in a song or story.",
          "Say the final sound of your own name.",
        ],
      },
      {
        title: "CVC Words",
        blurb: "Consonant-vowel-consonant: the shape of your first real reading words.",
        minutes: 25,
        difficulty: 1,
        skills: ["reading", "vocabulary"],
        strands: ["reading", "vocabulary", "writing"],
        outcomes: [
          "Explain the CVC pattern with an example",
          "Read at least ten CVC words",
          "Write the letters for a CVC word you hear",
        ],
        blocks: [
          H("The CVC pattern"),
          T(
            "CVC means consonant–vowel–consonant: one consonant, one short vowel, one consonant. It is the simplest complete word shape in English, and hundreds of beginner words follow it.",
          ),
          TB("CVC words by vowel", ["Vowel", "Words"], [
            ["a", "cat, hat, map, bag, van"],
            ["e", "bed, pen, ten, red, leg"],
            ["i", "sit, big, pig, win, fin"],
            ["o", "hot, dog, box, top, mop"],
            ["u", "sun, run, cup, bus, nut"],
          ]),
          EX("Break the code", [
            ["d-o-g = /d/ /ɒ/ /g/ = dog", "perro"],
            ["c-u-p = /k/ /ʌ/ /p/ = cup", "taza"],
          ]),
          AU("Listen: three CVC words", "dog. cup. pen.", 0.8),
          N("CVC words are everywhere", "Notice that all these words use the short vowel sounds from Chapter 03. The system is already connecting: letters, sounds, words."),
        ],
        assignment: {
          title: "My first word list",
          instructions:
            "Write six CVC words: one each with a, e, i, o and u, plus one free choice. Then write one short sentence using two of them, like 'The dog is big.'",
          minWords: 10,
          maxWords: 50,
        },
        homework: [
          "Read your six CVC words out loud three times.",
          "Find three CVC words in anything you read today.",
        ],
      },
      {
        title: "Blending",
        blurb: "Join single sounds into whole words — the moment reading truly begins.",
        minutes: 25,
        difficulty: 2,
        skills: ["reading", "pronunciation"],
        strands: ["reading", "pronunciation", "listening"],
        outcomes: [
          "Blend three sounds into a spoken word",
          "Read new CVC words by blending without guessing",
          "Explain blending in your own words",
        ],
        blocks: [
          H("From sounds to words"),
          T(
            "Blending means smoothly joining sounds together: /k/ /æ/ /t/ → cat. At first, say each sound, then stretch them together, then say the word at normal speed. This is the single most important reading mechanic you will learn.",
          ),
          GR(
            "The blending routine",
            "1) Say each sound: /k/ ... /æ/ ... /t/. 2) Stretch them: k-æ-t. 3) Say the word: cat.",
            [
              ["/m/ /ɒ/ /p/ → mop", "/m/ /ɒ/ /p/ → fregadero"],
              ["/s/ /ɪ/ /t/ → sit", "/s/ /ɪ/ /t/ → sentarse"],
              ["/b/ /ʌ/ /s/ → bus", "/b/ /ʌ/ /s/ → autobús"],
            ],
          ),
          AU("Listen: blending step by step", "/k/ ... /æ/ ... /t/ ... k-æ-t ... cat.", 0.75),
          EX("Blend these", [
            ["/h/ /ɒ/ /t/ → hot", "caliente"],
            ["/p/ /ɪ/ /g/ → pig", "cerdo"],
            ["/r/ /ʌ/ /n/ → run", "correr"],
          ]),
          W("Do not guess", "Guessing from the first letter is not reading. Blend every sound, every time, until blending feels automatic — usually after a few dozen words."),
        ],
        assignment: {
          title: "Blend and prove it",
          instructions:
            "Write the sound steps for three words, like '/d/ /ɒ/ /g/ → dog'. Then write one sentence explaining how blending works to a friend.",
          minWords: 12,
          maxWords: 50,
        },
        homework: [
          "Blend five new CVC words out loud, slowly then fast.",
          "Teach someone (or your mirror) the blending routine.",
        ],
      },
      {
        title: "Segmenting and Chapter Review",
        blurb: "Split words into sounds for spelling — then take the Chapter 04 review questions.",
        minutes: 25,
        difficulty: 2,
        skills: ["writing", "reading"],
        strands: ["writing", "reading", "pronunciation"],
        outcomes: [
          "Segment a spoken word into its sounds",
          "Write the letters for each sound you hear",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Segmenting: blending in reverse"),
          T(
            "Segmenting means splitting a word into its sounds: cat → /k/ /æ/ /t/. Blending builds words for reading; segmenting breaks words for spelling. Together they make you independent: you can read what you hear and write what you say.",
          ),
          GR(
            "The segmenting routine",
            "Say the word slowly and count the sounds with your fingers, then write one letter for each sound.",
            [
              ["sun → /s/ /ʌ/ /n/ → s-u-n", "sol → s-u-n"],
              ["pen → /p/ /e/ /n/ → p-e-n", "bolígrafo → p-e-n"],
            ],
          ),
          AU("Listen: segment with me", "Big. Say it slowly: /b/ ... /ɪ/ ... /g/. Three sounds. Write: b-i-g.", 0.75),
          TB("Sound counting", ["Word", "Sounds", "Letters"], [
            ["cat", "3: /k/ /æ/ /t/", "3"],
            ["fish", "3: /f/ /ɪ/ /sh/", "4 — 'sh' is two letters, one sound"],
          ], "Sounds and letters do not always match one-to-one. Trust your ears first."),
          H("Chapter 04 review"),
          T(
            "You can now connect letters to sounds, catch first and last sounds, read CVC words and blend and segment. Three review questions below, then the final task.",
          ),
        ],
        assignment: {
          title: "Segment and spell",
          instructions:
            "Segment these words into sounds and write the letters: 'map', 'bed', 'pig', 'top', 'run', 'hat'. Then write one sentence using two of them.",
          minWords: 12,
          maxWords: 50,
        },
        questions: [
          MCQ(
            "When you READ a word, what do you use?",
            [
              ["a", "The letter names"],
              ["b", "The letter sounds"],
              ["c", "The translation"],
            ],
            "b",
            fb(
              "The letter sounds",
              "Reading works by joining sounds. Letter names are for spelling aloud.",
              "If you read c-a-t as 'see-ay-tee' you are using names — that blocks blending.",
            ),
            { skill: "reading", difficulty: "easy" },
          ),
          MCQ(
            "Which word follows the CVC pattern?",
            [
              ["a", "moon"],
              ["b", "cat"],
              ["c", "chair"],
            ],
            "b",
            fb(
              "cat",
              "cat = consonant c + vowel a + consonant t. 'moon' has a vowel team and 'chair' has a consonant digraph.",
              "CVC means exactly three letters: consonant, vowel, consonant.",
            ),
            { skill: "reading", difficulty: "easy" },
          ),
          DICT(
            "Listen and write the word you hear.",
            "map",
            ["map"],
            fb(
              "map",
              "Segment what you hear: /m/ /æ/ /p/ — write one letter for each sound.",
              "If it sounded like 'map', it is m-a-p.",
            ),
            { skill: "listening", difficulty: "easy", hints: ["Three sounds: /m/ /æ/ /p/."] },
          ),
        ],
      },
    ],
  }),
];
