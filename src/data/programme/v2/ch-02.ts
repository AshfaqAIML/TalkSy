/**
 * PROMPT 35 production — Batch B, Chapter 02: English Alphabet.
 *
 * Full v2 teaching standard (see ch-01.ts header). The five lessons take
 * the learner from the 26 letters and their names, through uppercase and
 * lowercase pairs, letter recognition, handwriting and alphabetical order,
 * to the capitalisation rules — each with worked examples, mistakes,
 * guided/independent practice, four skills and validated Urdu/Hindi support.
 */

import {
  AU,
  CORR,
  DL,
  FB,
  GR,
  H,
  MCQ,
  MATCH,
  N,
  REORD,
  T,
  TB,
  W,
  fb,
} from "../types";
import { CMP, EXD, FS, LI, LSP, MS, RV, SM, ST, US, type LessonUpgrade } from "./helpers";
import { gls } from "./glossary";

export const ch02Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — The 26 Letters: A to Z
  // =========================================================================
  {
    slug: "ch-02-l-01",
    minutes: 25,
    description:
      "Meet all 26 letters of the English alphabet, learn their names in order, and spell your own name out loud.",
    outcomes: [
      "Say all 26 letter names in order",
      "Recognise every letter when you see or hear it",
      "Spell your own name and one friend’s name out loud",
      "Use “How do you spell…?” in a real question",
    ],
    blocks: [
      LI(
        "The alphabet is the box of pieces that all English words are built from. In this lesson you meet all 26 letters, learn their names in the fixed A-to-Z order, and practise spelling names out loud — the first real-life use of the alphabet for every learner.",
        [
          "You know that letters build words (Chapter 1, Lesson 4).",
          "You can hear the difference between spoken and written English (Chapter 1, Lesson 3).",
        ],
      ),
      H("What is an alphabet?"),
      T(
        "An alphabet is a fixed set of letters, in a fixed order, that a language uses to write its words. English uses 26 letters. Every English word you have ever seen — from “hi” to “university” — is built from these same 26 pieces.",
      ),
      {
        type: "definition",
        term: "alphabet",
        partOfSpeech: "noun",
        definition:
          "An alphabet is the complete set of letters of a language, in their fixed order. The English alphabet has 26 letters, from A to Z.",
        example: {
          english: "A B C … X Y Z",
          translation: "26 letters, one fixed order.",
        },
      },
      N(
        "Letter name ≠ letter sound",
        "Each letter has a NAME (what you say when you spell: “bee”, “see”, “dee”) and often one or more SOUNDS (what the letter says inside a word). This lesson teaches the names. The sounds come in Chapter 4 — do not mix them up.",
      ),
      TB(
        "The English alphabet",
        ["Group", "Letters", "How many"],
        [
          ["A – E", "A, B, C, D, E", "5"],
          ["F – J", "F, G, H, I, J", "5"],
          ["K – O", "K, L, M, N, O", "5"],
          ["P – T", "P, Q, R, S, T", "5"],
          ["U – Z", "U, V, W, X, Y, Z", "6"],
        ],
        "26 letters in five groups. Learn them group by group, not all at once.",
      ),
      ST(
        "Learn the alphabet in five steps",
        [
          {
            title: "Step 1 — Group A–E",
            text: "Say the names slowly: “ay, bee, see, dee, ee.” These five names all end in the same “ee” sound — that makes them easy to remember as a family.",
          },
          {
            title: "Step 2 — Group F–J",
            text: "“ef, jee, aitch, eye, jay.” Watch out: H is called “aitch”, not “haitch”, and I is called “eye”, like the word for your eye.",
          },
          {
            title: "Step 3 — Group K–O",
            text: "“kay, el, em, en, oh.” L, M and N are called “el, em, en” — three little names that rhyme.",
          },
          {
            title: "Step 4 — Group P–T",
            text: "“pee, cue, ar, es, tee.” Q is always followed by U in English words (quiz, quick, queen) — remember them as a team.",
          },
          {
            title: "Step 5 — Group U–Z",
            text: "“you, vee, double-you, ex, why, zed (or zee).” W is the only letter whose name is two words: “double-you”.",
          },
        ],
        "Five small groups beat one long list. Say each group out loud three times before moving to the next.",
      ),
      GR(
        "The alphabet always sounds out words the same way",
        "To spell a word out loud, say each letter name in order. To ask someone else, say: “How do you spell …?” — never “How do you write the alphabet of …?”.",
        [
          { english: "— How do you spell your name?", translation: "The question you will use most." },
          { english: "— M-A-R-I-A. Maria.", translation: "Say each letter name, then the whole word." },
        ],
      ),
      EXD(
        "Spelling out loud — real situations",
        [
          {
            english: "— What’s your name? — Amina. A-M-I-N-A.",
            note: "Spelling your name at a hotel desk.",
            domain: "travel",
          },
          {
            english: "— How do you spell ‘bus’? — B-U-S.",
            note: "Asking about a new word in class.",
            domain: "education",
          },
          {
            english: "My email is omar dot ali at mail dot com — O-M-A-R.",
            note: "Emails are always spelled letter by letter.",
            domain: "work",
          },
          {
            english: "— Wi-Fi password? — It’s ‘sunny’: S-U-N-N-Y.",
            note: "Sharing passwords and codes.",
            domain: "technology",
          },
          {
            english: "The flight is B-A-2-0-4, BA two-oh-four.",
            note: "Flight numbers mix letters and numbers.",
            domain: "travel",
          },
          {
            english: "— My son is in class 2-B. — Sorry, 2-D? — No, B. B as in book.",
            note: "B and D sound similar — people clarify with ‘B as in book’.",
            domain: "family",
          },
          {
            english: "Room 12, K-I-N-G Street.",
            note: "Addresses are spelled over the phone every day.",
            domain: "home",
          },
          {
            english: "— Your name, please? — Zara. Z as in zebra, A-R-A.",
            note: "Z is the last letter and often needs clarifying.",
            domain: "everyday",
          },
        ],
        "Spelling out loud is one of the most useful English skills you can learn this month.",
      ),
      DL(
        "At the hotel desk",
        "A guest is checking in. The receptionist needs her name.",
        [
          ["Receptionist", "Good evening. Your name, please?"],
          ["Guest", "Good evening. Amina Khan."],
          ["Receptionist", "How do you spell your first name?"],
          ["Guest", "A-M-I-N-A. Amina."],
          ["Receptionist", "Thank you, Ms Khan. Room 214. Here is your key."],
          ["Guest", "Thank you very much."],
        ],
      ),
      US(
        [
          {
            situation: "Hotels and airports",
            example: "— Your name, please? — Khan. K-H-A-N.",
            note: "Check-in desks spell every name.",
          },
          {
            situation: "Classrooms",
            example: "— How do you spell ‘holiday’? — H-O-L-I-D-A-Y.",
            note: "Asking about a new word — the most useful classroom question.",
          },
          {
            situation: "Phone calls",
            example: "— Is that T as in tea? — Yes, T-E-A.",
            note: "Bad lines are spelled through, letter by letter.",
          },
          {
            situation: "Online forms",
            example: "Email: omar.ali@mail.com — O-M-A-R dot A-L-I.",
            note: "Emails are always given letter by letter, with ‘at’ and ‘dot’.",
          },
        ],
        "Where spelling out loud happens",
        "These four situations cover most of the alphabet use in real life — practise them and the letter names become automatic.",
      ),
      CMP(
        "Letter name vs letter sound",
        ["Letter NAME (spelling)", "Letter SOUND (reading)"],
        [
          ["What it is", "What you call the letter: “bee”", "What the letter says in a word: /b/"],
          ["Used for", "Spelling out loud, dictionaries, emails", "Reading and pronouncing words"],
          ["Example (B)", "“B!” — B-U-S spells bus", "“/b/” — the first sound of bus, book, big"],
          ["Taught in", "This chapter", "Chapter 4 · Introduction to Phonics"],
        ],
        {
          intro: "The biggest beginner confusion in English — fix it today.",
          verdict:
            "Names are for spelling. Sounds are for reading. Chapter 1 gave you the names; Chapter 4 gives you the sounds.",
        },
      ),
      MS(
        [
          [
            "My name is H-A-M-Z-A.",
            "My name is Hamza. H-A-M-Z-A.",
            "Say the word normally, then spell it. The letters are extra information, not a replacement for the word.",
          ],
          [
            "How do you write your name?",
            "How do you spell your name?",
            "For letter-by-letter information, English uses “spell”, not “write”.",
          ],
          [
            "My email is amina AT symbol mail.",
            "My email is amina at mail dot com.",
            "Say “at” for @ and “dot” for . — the two words you need for every email address.",
          ],
        ],
        "Common mistakes",
      ),
      AU(
        "Listen: the first ten letters",
        "A, B, C, D, E, F, G, H, I, J. Ay, bee, see, dee, ee, ef, jee, aitch, eye, jay.",
        0.8,
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "The English alphabet has 26 letters. Five of them are vowels: A, E, I, O and U. The other 21 are consonants. The most common letter in English words is E. The least common is Z. Every word needs at least one vowel — this is why vowels are the five most important letters.",
          task: "Read the text. Then say the five vowels out loud.",
        },
        writing: {
          task: "Write the alphabet in five groups: A–E, F–J, K–O, P–T, U–Z. Then spell your own name under it.",
          guide: ["A B C D E", "F G H I J", "…", "My name is … : …-…-…"],
          model: "A B C D E · F G H I J · K L M N O · P Q R S T · U V W X Y Z. My name is AMINA: A-M-I-N-A.",
        },
        listening: {
          script:
            "Hello! Can you help me? How do you spell ‘hotel’? H, O, T, E, L. Hotel. And ‘taxi’? T, A, X, I. Taxi. Thank you!",
          task: "Listen and write the two words that are spelled out.",
        },
        speaking: {
          task: "Spell your name and your city out loud, at normal speed.",
          frames: [
            "My name is … — …-…-…",
            "I am from … — …-…-…",
          ],
          checklist: [
            "I said each letter name clearly.",
            "I said the whole word after the letters.",
          ],
        },
      }),
      LSP(
        [
          gls("The English alphabet has 26 letters."),
          gls("A letter has a name and a sound."),
          gls("Every word needs at least one vowel."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "English has 26 letters in a fixed order, A to Z.",
        "Each letter has a name (for spelling) and one or more sounds (for reading — Chapter 4).",
        "Five letters are vowels: A, E, I, O, U. Every word needs at least one vowel.",
        "“How do you spell…?” + letter names = the most useful alphabet skill.",
        "Say “at” for @ and “dot” for . when you give an email address.",
      ]),
      RV(
        [
          {
            question: "Which is the smallest building block of written English?",
            options: ["A letter", "A word", "A sentence"],
            correctIndex: 0,
            explanation: "Letters build words; words build phrases and sentences.",
            from: "Chapter 01 · Lesson 4",
          },
          {
            question: "How many letters are in the English alphabet?",
            options: ["21", "26", "30"],
            correctIndex: 1,
            explanation: "26 letters — 5 vowels plus 21 consonants.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "What does a complete sentence end with?",
            options: ["A space", "A full stop, ? or !", "A small letter"],
            correctIndex: 1,
            explanation: "Statements end with . questions with ? strong feelings with !",
            from: "Chapter 01 · Lesson 4",
          },
        ],
        { title: "Revision — earlier lessons" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "How many letters does the English alphabet have?",
            [
              ["a", "24"],
              ["b", "26"],
              ["c", "28"],
            ],
            "b",
            fb("26", "A to Z — 26 letters: 5 vowels and 21 consonants."),
            { hints: ["The last letter is Z. Count in groups of five, plus one extra group of six."] },
          ),
          MCQ(
            "Which letter comes right after H?",
            [
              ["a", "G"],
              ["b", "I"],
              ["c", "J"],
            ],
            "b",
            fb("I", "The order is F, G, H, I, J — I is called “eye”."),
            { hints: ["Say the group out loud: ef, jee, aitch, …?"] },
          ),
          FB(
            "Complete the question.",
            "How do you ___ your name?",
            ["spell"],
            fb("spell", "“How do you spell…?” asks for the letters, one by one."),
            { hints: ["Which word means ‘say the letters one by one’?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "Which of these is a vowel?",
            [
              ["a", "B"],
              ["b", "E"],
              ["c", "T"],
            ],
            "b",
            fb("E", "The five vowels are A, E, I, O, U."),
          ),
          MCQ(
            "In the email ‘omar.ali@mail.com’, what do you say for the ‘.’ before com?",
            [
              ["a", "point"],
              ["b", "dot"],
              ["c", "stop"],
            ],
            "b",
            fb("dot", "Say “at” for @ and “dot” for every period in an email address."),
          ),
          CORR(
            "Find and correct the mistake.",
            "how do you spell bus",
            ["How do you spell bus?"],
            fb(
              "How do you spell bus?",
              "A written question starts with a capital letter and ends with a question mark.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My letters check",
      instructions:
        "Write the alphabet in five groups (A–E, F–J, K–O, P–T, U–Z). Then write your full name and spell it with capital letters and hyphens (for example: A-M-I-N-A K-H-A-N). Add the name of your city, spelled the same way.",
      minWords: 10,
      maxWords: 60,
    },
    homework: [
      "Say the alphabet song (A–Z) three times this week — group by group.",
      "Spell your name for one friend or family member, in English.",
      "Find five objects at home and write their first letter (for example: door → D).",
    ],
  },

  // =========================================================================
  // Lesson 2 — Uppercase and Lowercase
  // =========================================================================
  {
    slug: "ch-02-l-02",
    minutes: 20,
    description:
      "Every letter has two shapes: big (A) and small (a). Learn when each shape is used and how to write both clearly.",
    outcomes: [
      "Match every uppercase letter with its lowercase partner",
      "Explain the two jobs of uppercase letters (sentence starts + special names)",
      "Write a short text mixing uppercase and lowercase correctly",
      "Recognise the rare all-caps situations",
    ],
    blocks: [
      LI(
        "Look at these two letters: A and a. They are the SAME letter in two shapes — the big shape (uppercase) and the small shape (lowercase). In this lesson you learn all 26 pairs, when to use each shape, and why English needs both.",
        [
          "You know the 26 letter names and their order (Lesson 1).",
          "You know that a sentence starts with a capital letter (Chapter 1, Lesson 4).",
        ],
      ),
      H("One letter, two shapes"),
      T(
        "English writes every letter in two shapes. The big shape is called uppercase (or capital): A, B, C. The small shape is called lowercase: a, b, c. “Upper” and “lower” come from the old print shops, where the big letters were kept in the upper case and the small letters in the lower case. Same letter, different boxes — the names stayed.",
      ),
      {
        type: "definition",
        term: "uppercase (capital) letter",
        partOfSpeech: "noun phrase",
        definition:
          "An uppercase letter is the big shape of a letter: A, B, C … Z. Uppercase letters start sentences and mark special names.",
        example: { english: "Anna lives in London.", translation: "A for Anna, L for London — special names." },
      },
      {
        type: "definition",
        term: "lowercase letter",
        partOfSpeech: "noun phrase",
        definition:
          "A lowercase letter is the small shape of a letter: a, b, c … z. Lowercase is the normal shape for all other words.",
        example: { english: "The cat is on the bed.", translation: "Every word here is lowercase except the first." },
      },
      TB(
        "The 26 pairs",
        ["Uppercase", "Lowercase", "Uppercase", "Lowercase", "Uppercase", "Lowercase"],
        [
          ["A", "a", "J", "j", "S", "s"],
          ["B", "b", "K", "k", "T", "t"],
          ["C", "c", "L", "l", "U", "u"],
          ["D", "d", "M", "m", "V", "v"],
          ["E", "e", "N", "n", "W", "w"],
          ["F", "f", "O", "o", "X", "x"],
          ["G", "g", "P", "p", "Y", "y"],
          ["H", "h", "Q", "q", "Z", "z"],
          ["I", "i", "R", "r", "", ""],
        ],
        "Most pairs clearly match (C c, S s). Some change shape between big and small: A a, D d, E e, G g, L l, Q q — give these extra practice.",
      ),
      ST(
        "How to write both shapes clearly",
        [
          {
            title: "Step 1 — Learn the four line positions",
            text: "Handwriting lines guide the shapes: some letters sit on the base line (a, c, e), some rise tall (b, d, k), some drop below the line (g, j, p, q, y).",
          },
          {
            title: "Step 2 — Match the pairs that look alike first",
            text: "C–c, K–k, O–o, P–p, S–s, U–u, V–v, W–w, X–x, Y–y, Z–z are easy: same shape, different size.",
            examples: [{ english: "S s · K k · W w", note: "Same shape, bigger or smaller." }],
          },
          {
            title: "Step 3 — Study the tricky pairs separately",
            text: "Some pairs change shape between big and small: A–a, B–b, D–d, E–e, G–g, L–l, Q–q. Give these extra practice.",
            examples: [
              { english: "A a · D d · G g · Q q", note: "The four pairs that surprise most beginners." },
            ],
          },
          {
            title: "Step 4 — Keep writing movement slow and even",
            text: "Write rows of the same pair: Aa Aa Aa. Slow, even rows train your hand faster than fast, messy ones.",
          },
        ],
      ),
      GR(
        "The two jobs of uppercase letters",
        "Job 1: Start every sentence with an uppercase letter. Job 2: Mark special names — people, places, days, months, languages, the word “I”. Everything else is lowercase.",
        [
          { english: "My name is Sara.", translation: "Job 1: the sentence starts with M." },
          { english: "Sara lives in Rome.", translation: "Job 2: Sara and Rome are special names." },
          { english: "I am learning English.", translation: "Both “I” and language names are always capital." },
        ],
      ),
      EXD(
        "The same word, big and small",
        [
          {
            english: "china (dishes) vs China (the country)",
            note: "Small c means plates; big C means the country. The shape changes the meaning!",
            domain: "everyday",
          },
          {
            english: "march (to walk) vs March (the month)",
            note: "Small m is a verb; big M is a month of the year.",
            domain: "everyday",
          },
          {
            english: "turkey (the bird) vs Turkey (the country)",
            note: "One letter changes your dinner plans into geography.",
            domain: "food",
          },
          {
            english: "polish (to clean) vs Polish (from Poland)",
            note: "Small p is a verb; big P is a nationality.",
            domain: "work",
          },
          {
            english: "My name is Amina. I work at home.",
            note: "Names take capitals; normal words like “work” and “home” do not.",
            domain: "work",
          },
          {
            english: "Monday, February, Eid, Diwali, Christmas",
            note: "Days, months and festivals always take capitals — in every position in the sentence.",
            domain: "family",
          },
          {
            english: "I read the Quran. She studies Spanish.",
            note: "Names of holy books and languages are capitals too.",
            domain: "education",
          },
          {
            english: "I am fine, thank you.",
            note: "The word “I” is the only pronoun that is always a capital — anywhere in the sentence.",
            domain: "everyday",
          },
        ],
        "Capital letters are not decoration — they carry meaning.",
      ),
      US(
        [
          {
            situation: "All-caps signs",
            example: "STOP · EXIT · SALE · HOTEL",
            note: "Signs shout in all capitals to be seen from far away.",
          },
          {
            situation: "Text messages",
            example: "HI! HOW ARE YOU?",
            note: "In messages, ALL CAPS feels like SHOUTING. Use it rarely.",
          },
          {
            situation: "Names and titles",
            example: "Dr Khan · Mr Ali · Ms Lopez",
            note: "Titles before names always take capitals.",
          },
          {
            situation: "School and work writing",
            example: "My project is due on Monday.",
            note: "Normal sentences: capitals only for starts and special names.",
          },
        ],
        "Where each shape lives",
      ),
      DL(
        "Big or small?",
        "A teacher checks a student’s homework.",
        [
          ["Teacher", "Look at this sentence: “my name is omar.” — what is missing?"],
          ["Student", "Capital letters? “My name is Omar.”"],
          ["Teacher", "Perfect. Which words?"],
          ["Student", "M at the start, and O in Omar — it’s a name."],
          ["Teacher", "And if the word is not a name — like “cat” or “school”?"],
          ["Student", "Small letters, except at the start of the sentence."],
        ],
      ),
      CMP(
        "Uppercase vs lowercase",
        ["UPPERCASE (A B C)", "lowercase (a b c)"],
        [
          ["When to use", "Sentence starts + special names", "Everything else"],
          ["How much of a text", "Very little — 2–5% of letters", "95%+ of every text"],
          ["Signal", "“Something starts here” or “this is a name”", "Normal, everyday writing"],
          ["In messages", "ALL CAPS = shouting", "Normal, friendly tone"],
          ["Example", "Anna went to London on Monday.", "She took a bus and read a book."],
        ],
        {
          intro: "A quick way to check yourself: capitals are the mountain peaks of a text — rare and easy to spot.",
          verdict:
            "When in doubt, ask: “Is this the start of a sentence, a special name, or the word I?” If not — lowercase.",
        },
      ),
      MS(
        [
          [
            "my name is omar and i am a student.",
            "My name is Omar and I am a student.",
            "Four capitals: M (sentence start), O (name), I (always capital), and the sentence ends with a full stop.",
          ],
          [
            "I Am A Student At A Big School.",
            "I am a student at a big school.",
            "Capital letters belong at sentence starts and names — not on every word. Too many capitals are as wrong as too few.",
          ],
          [
            "hello, mr ali. how are you?",
            "Hello, Mr Ali. How are you?",
            "“Mr” is a title with a capital, and “how are you?” starts a new sentence, so H is capital.",
          ],
          [
            "MY FRIEND IS HERE.",
            "My friend is here.",
            "All caps is for signs and shouting. Normal sentences use normal capitals.",
          ],
        ],
        "Common mistakes",
      ),
      W(
        "The shape that changes meaning",
        "Never write country names, languages or days with a small letter. “i speak english” is a double mistake: I and English are both always capitals.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "my name is rana. i live in karachi. on monday, i start my new job at a school. the school is called city light academy. my boss is ms farah. i am a little nervous, but i am ready.",
          task: "This text has SEVEN capital-letter mistakes. Find them all and say the corrected text out loud.",
        },
        writing: {
          task: "Write four sentences about you using: your name, your city, a day of the week, and the word “I”.",
          guide: ["My name is …", "I live in …", "On …, I …", "I am …"],
          model: "My name is Daniel. I live in Lisbon. On Saturday, I play football with my friends. I am a student.",
        },
        listening: {
          script:
            "A — as in Apple. B — as in Boy. C — as in Cat. D — as in Dog. E — as in Egg.",
          task: "Listen and repeat each letter name with its word: A as in Apple, B as in Boy…",
        },
        speaking: {
          task: "Spell your name using “as in …” for every letter.",
          frames: ["M as in mother. A as in apple. …", "My name is …"],
          checklist: [
            "I used a clear word for each letter.",
            "I said the whole name at the end.",
          ],
        },
      }),
      LSP(
        [
          gls("The English alphabet has 26 letters."),
          gls("A letter has a name and a sound."),
          gls("Every sentence starts with a capital letter."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Every letter has two shapes: uppercase (A) and lowercase (a).",
        "Most pairs look the same at different sizes; the tricky ones are A a, B b, D d, E e, G g, L l, Q q.",
        "Uppercase has two jobs: start sentences, mark special names (people, places, days, months, languages, I).",
        "All caps (STOP, SALE) is for signs — and feels like shouting in messages.",
        "A capital can change meaning: china (dishes) vs China (country); march (walk) vs March (month).",
      ]),
      RV(
        [
          {
            question: "How do you ask for letter-by-letter information?",
            options: [
              "How do you spell…?",
              "How do you write the alphabet…?",
              "What is your letter?",
            ],
            correctIndex: 0,
            explanation: "“How do you spell…?” is the fixed question for spelling.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "Which five letters are the vowels?",
            options: [
              "A E I O U",
              "B C D F G",
              "A B C D E",
            ],
            correctIndex: 0,
            explanation: "A, E, I, O and U are the vowels; every English word needs at least one.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "What are the two building levels between letter and sentence?",
            options: [
              "Word and phrase",
              "Sound and name",
              "Uppercase and lowercase",
            ],
            correctIndex: 0,
            explanation: "The ladder: letters → words → phrases → sentences.",
            from: "Chapter 01 · Lesson 4",
          },
        ],
        { title: "Revision — do you remember?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "What is the lowercase partner of G?",
            [
              ["a", "g"],
              ["b", "G is the same in both shapes"],
              ["c", "j"],
            ],
            "a",
            fb("g", "The pair G–g is one of the tricky ones — the shapes are different."),
            { hints: ["The lowercase shape of this letter is a circle with a tail."] },
          ),
          MCQ(
            "Which word needs a capital letter in the middle of a sentence?",
            [
              ["a", "cat"],
              ["b", "monday"],
              ["c", "school"],
            ],
            "b",
            fb("Monday", "Days of the week always take a capital: Monday, Tuesday, Wednesday…"),
            { hints: ["Which one is a special name, not a normal word?"] },
          ),
          FB(
            "Fix the word: write the day correctly.",
            "See you on ___ (monday).",
            ["Monday"],
            fb("Monday", "Days of the week are special names — always capital."),
            { hints: ["Special names start with a big letter."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "“i am learning english” — how many capital-letter mistakes?",
            [
              ["a", "One"],
              ["b", "Two"],
              ["c", "Three"],
            ],
            "b",
            fb("Two", "“I” is always capital, and language names like “English” are always capital."),
          ),
          MCQ(
            "Which sentence is correctly capitalised?",
            [
              ["a", "My Sister Lives In Paris."],
              ["b", "My sister lives in Paris."],
              ["c", "my sister lives in paris."],
            ],
            "b",
            fb(
              "My sister lives in Paris.",
              "Capital M for the sentence start and P for the city — nothing else.",
            ),
          ),
          CORR(
            "Find and correct the mistake.",
            "we visit turkey in march.",
            ["We visit Turkey in March."],
            fb(
              "We visit Turkey in March.",
              "W starts the sentence, and Turkey (country) and March (month) are special names.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Fix the letter forms",
      instructions:
        "Write these words twice — once all in uppercase, once all in lowercase: book, family, morning, english, monday, city. Then write one sentence that uses at least two of the words correctly (with the right capital letters!).",
      minWords: 10,
      maxWords: 60,
    },
    homework: [
      "Write the five tricky pairs, three rows each: Aa, Dd, Gg, Ll, Qq.",
      "Find three all-caps signs on your street or on products at home.",
      "Write today’s date with a capital letter for the day and month (for example: Thursday, 12 March).",
    ],
  },

  // =========================================================================
  // Lesson 3 — Letter Recognition Practice
  // =========================================================================
  {
    slug: "ch-02-l-03",
    minutes: 20,
    description:
      "Train your eyes and ears: recognise letters fast in different fonts and sizes, hear letter names in fast speech, and clear up the letter pairs that confuse everyone.",
    outcomes: [
      "Recognise all 26 letters in different fonts and sizes without hesitating",
      "Distinguish the confusable pairs: b/d, p/q, m/n, u/v/w, i/l",
      "Hear letter names correctly in fast speech",
      "Use “B as in book” to clarify a letter on the phone",
    ],
    blocks: [
      LI(
        "Knowing the alphabet on paper is not the same as recognising letters at speed — in a strange font, on a sign, or in fast speech. This lesson is a training session for your eyes and ears. You will meet the letter pairs that confuse everyone and learn the professional trick for clarifying letters on the phone.",
        [
          "You know all 26 letter names and their order (Lesson 1).",
          "You know the uppercase and lowercase shapes (Lesson 2).",
        ],
      ),
      H("Why recognition is hard at first"),
      T(
        "In the classroom, letters are big, clear and always the same. In real life they change: a shop sign uses fat letters, a phone screen uses thin ones, handwriting uses joined ones. Your brain needs to meet each letter in many shapes before it recognises them all instantly. That is normal — and it comes with practice.",
      ),
      GR(
        "Recognition, not memory",
        "The goal is not to recite the alphabet (memory). The goal is to see or hear a letter and know it instantly, in any shape (recognition). Recognition comes from meeting the letters again and again in real words.",
        [
          { english: "b d b d b d", translation: "Train the pair, not the single letter." },
          { english: "quiet · quite · quilt", translation: "Real words train recognition faster than lists." },
        ],
      ),
      TB(
        "The five pairs that confuse everyone",
        ["Pair", "Why it confuses", "Quick trick"],
        [
          ["b / d", "Same shape, mirrored", "b has a belly on the right; d has it on the left. “bed” looks like a bed."],
          ["p / q", "Same shape, mirrored", "p drops its tail on the right; q on the left — like b/d below the line."],
          ["m / n", "Three humps vs two", "m has three legs; n has two. m = “mmm” (more), n = “nnn” (nine humps? no — two!)"],
          ["u / v / w", "Round vs sharp points", "u is round at the bottom, v is sharp, w is two v’s joined."],
          ["i / l", "Dot is everything", "i has a dot; l does not. In fast handwriting, the dot is the difference."],
        ],
        "Say the pair, write the pair, then read three real words with the pair.",
      ),
      ST(
        "Train a confusable pair in four steps",
        [
          {
            title: "Step 1 — See the difference",
            text: "Write the pair large: b d. Point at the direction of the tall stroke. Say the names as you point: “bee, dee”.",
          },
          {
            title: "Step 2 — Write the pair",
            text: "Write rows: bd bd bd. Your hand teaches your eyes — muscle memory is recognition memory.",
          },
          {
            title: "Step 3 — Read real words",
            text: "Read words that contain the pair. Do not use single letters — real words anchor the shapes to meaning.",
            examples: [
              { english: "bed · bad · big · book", note: "b words" },
              { english: "dog · day · red · read", note: "d words" },
            ],
          },
          {
            title: "Step 4 — Listen and sort",
            text: "Have someone say letter names in random order while you write them. Sorting b and d by ear builds the complete skill.",
          },
        ],
        "Use the same four steps for p/q, m/n, u/v/w and i/l.",
      ),
      EXD(
        "Letters in real places — recognise them anywhere",
        [
          {
            english: "b / d on a number plate: BD-51",
            note: "Number plates mix confusable letters on purpose.",
            domain: "travel",
          },
          {
            english: "Size labels: S · M · L · XL",
            note: "Clothes sizes are pure letter recognition at speed.",
            domain: "shopping",
          },
          {
            english: "M-S-G sent. A-SAP.",
            note: "Texting abbreviations are letter names in fast speech.",
            domain: "technology",
          },
          {
            english: "Vitamin C · Vitamin D",
            note: "Science and medicine label everything with letters.",
            domain: "health",
          },
          {
            english: "Bus lines: B3 · D7 · M12",
            note: "Cities name bus routes with letters and numbers.",
            domain: "everyday",
          },
          {
            english: "Class 2-B · Level A · Group C",
            note: "Schools and gyms label rooms and groups with letters.",
            domain: "education",
          },
          {
            english: "USB · HDMI · Wi-Fi",
            note: "Technology names are spoken as letter names: “U-S-B”.",
            domain: "technology",
          },
          {
            english: "— Is that ‘b’ as in boy, or ‘d’ as in dog? — ‘B’, as in boy.",
            note: "The professional clarification trick — use it every time.",
            domain: "work",
          },
        ],
      ),
      DL(
        "On the phone",
        "Sara gives her address over the phone. The line is bad.",
        [
          ["Sara", "It’s flat B, 14 King Road."],
          ["Agent", "Sorry — flat D?"],
          ["Sara", "No, B. B as in book."],
          ["Agent", "B as in book — flat B. And the street?"],
          ["Sara", "King Road. K-I-N-G."],
          ["Agent", "Perfect. Thank you, Ms Sara."],
        ],
      ),
      N(
        "“As in …” — the pro trick",
        "When a line is bad, professionals never repeat a letter alone. They anchor it to a word: “B as in book”, “N as in November”, “F as in France”. Choose words you are sure about.",
      ),
      US(
        [
          {
            situation: "Phone calls",
            example: "It’s B as in book, 14 King Road.",
            note: "Any call centre, hotel or delivery.",
          },
          {
            situation: "Classrooms",
            example: "— Is that ‘d’ or ‘b’? — ‘B’. Look: belly on the right.",
            note: "Ask and answer with the shape trick.",
          },
          {
            situation: "Forms and IDs",
            example: "Name: K-H-A-N. Flight: B-A-2-0-4.",
            note: "Airports and offices spell everything.",
          },
          {
            situation: "Shops and labels",
            example: "Size M? — No, L. L as in large.",
            note: "Sizes, rooms and shelves are letters in real life.",
          },
        ],
        "Where recognition matters",
      ),
      CMP(
        "b vs d — the mirror pair",
        ["b (bee)", "d (dee)"],
        [
          ["Shape", "Tall stroke on the LEFT, belly on the RIGHT", "Tall stroke on the RIGHT, belly on the LEFT"],
          ["First sound", "/b/ as in book, big, bed", "/d/ as in dog, day, red"],
          ["In the word “bed”", "b is the head of the bed", "d is the foot of the bed"],
          ["Memory picture", "b = bat then ball: stick first, belly after", "d = drum then stick: belly first, stick after"],
        ],
        {
          intro: "The most confusable pair in English — for children and adults alike.",
          verdict:
            "Write the word “bed” and draw a person lying on it: b is the pillow (head), d is the blanket (feet). One picture fixes the pair forever.",
        },
      ),
      MS(
        [
          [
            "dqdd (writing “bd bd”)",
            "bd bd",
            "Write the pairs slowly. Mirroring both letters trains the wrong habit. Slow and correct beats fast and mirrored.",
          ],
          [
            "It’s D as in dog. B as in boy.",
            "It’s B as in boy. D as in dog.",
            "When you clarify, keep letter and word together — mixing them up confuses everyone, including you.",
          ],
          [
            "My class is 2-l. 2-L.",
            "My class is 2-L.",
            "Decide one way to say it and say it clearly — do not repeat in two different ways in one sentence.",
          ],
        ],
        "Common mistakes",
      ),
      AU(
        "Listen: confusable pairs",
        "B. D. B. D. B. P. Q. M. N. U. V. W. I. L. Listen again and write each letter you hear.",
        0.85,
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Sara’s new job is at a big store. Her section is D, next to section B. Her locker is number 51-M. On her first day, she wears a name card: SARA — SECTIONS B AND D. A customer asks: “Where is section P?” — “Sorry,” says Sara, “we have B, D and M. P is upstairs.”",
          task: "Find all the letters in the text. Which confusable pairs appear?",
        },
        writing: {
          task: "Write your own “letter card” — the way a delivery service would: your name, your flat, your street, using letters and numbers.",
          guide: ["Name: …", "Flat / Section: …", "Street: …", "Spelling: B as in …"],
          model: "Name: Sara Khan. Flat B, 14 King Road. B as in book. K-I-N-G, King.",
        },
        listening: {
          script:
            "Can you repeat that, please? Is it P as in Paris, or B as in Berlin? Ah — B as in Berlin. And the number? 15? No, 50. Five-zero. Thank you!",
          task: "Listen. Which letter is confirmed, and which number is correct at the end?",
        },
        speaking: {
          task: "Say your address with two clarifications, using “as in …”.",
          frames: [
            "It’s flat …, … as in …",
            "The street is … — …-…-…",
          ],
          checklist: [
            "I clarified at least one letter with “as in …”.",
            "I spelled the street name letter by letter.",
          ],
        },
      }),
      LSP(
        [
          gls("A letter has a name and a sound."),
          gls("Read the sentence out loud."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Recognition (knowing a letter instantly in any shape) matters more than reciting the alphabet.",
        "The five confusable pairs: b/d, p/q, m/n, u/v/w, i/l — train them with real words.",
        "The word “bed” is a picture: b = head, d = feet. One image fixes b/d forever.",
        "“B as in book” is the professional way to clarify letters on the phone.",
        "Real life uses letters everywhere: sizes, bus lines, rooms, USB, flight codes.",
      ]),
      RV(
        [
          {
            question: "Which pair of shapes is mirrored?",
            options: ["m / n", "b / d", "s / t"],
            correctIndex: 1,
            explanation: "b and d are the same shape, mirrored — the classic beginner trap.",
            from: "Chapter 02 · Lesson 3",
          },
          {
            question: "How do you clarify a letter on the phone?",
            options: [
              "Say it louder",
              "B as in book",
              "Say the whole alphabet",
            ],
            correctIndex: 1,
            explanation: "Anchoring the letter to a word makes it unmistakable.",
            from: "Chapter 02 · Lesson 3",
          },
          {
            question: "Which are the five vowels?",
            options: ["A E I O U", "B D P Q M", "I L U V W"],
            correctIndex: 0,
            explanation: "A, E, I, O, U — every English word needs at least one of them.",
            from: "Chapter 02 · Lesson 1",
          },
        ],
        { title: "Revision — do you remember?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "Which letter looks like a mirrored “b”?",
            [
              ["a", "p"],
              ["b", "d"],
              ["c", "q"],
            ],
            "b",
            fb("d", "b and d are mirror shapes — use the “bed” picture: b is the head, d is the feet."),
            { hints: ["Think of the word “bed” as a drawing of a bed."] },
          ),
          FB(
            "Complete the clarification.",
            "It’s flat B — B as in ___.",
            ["book", "boy", "Berlin"],
            fb("book", "Any clear word starting with B works: book, boy, Berlin. “Book” is the classic."),
            { hints: ["The word must start with the letter B."] },
          ),
          MCQ(
            "Which pair has THREE and TWO legs (humps)?",
            [
              ["a", "u and v"],
              ["b", "m and n"],
              ["c", "i and l"],
            ],
            "b",
            fb("m and n", "m has three legs, n has two — count the strokes."),
            { hints: ["One of these letters is literally called ‘double-you’… no, that’s w."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "“USB” is spoken as…",
            [
              ["a", "the word ‘usb’"],
              ["b", "letter names: U-S-B"],
              ["c", "‘you-say-bee’ — a word"],
            ],
            "b",
            fb("Letter names: U-S-B", "Like Wi-Fi (W is ‘double-you’), HDMI and many technology names."),
          ),
          MCQ(
            "Which letter has a dot?",
            [
              ["a", "l"],
              ["b", "i"],
              ["c", "t"],
            ],
            "b",
            fb("i", "The dot is everything — in fast handwriting, i and l differ only by the dot."),
          ),
          CORR(
            "Find and correct the mistake.",
            "my locker is 51-m.",
            ["My locker is 51-M."],
            fb(
              "My locker is 51-M.",
              "Sentence starts with a capital M… and the letter label M is also written as a capital.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Tricky letter drill",
      instructions:
        "Write five rows, one for each tricky pair (bd, pq, mn, uvw, il), like this: bd bd bd bd bd. Then write one real word for each pair (for example: bed, quiet, Monday, university, little) and mark the pair letters in them.",
      minWords: 10,
      maxWords: 50,
    },
    homework: [
      "Find five letter codes around you this week (buses, products, rooms) and note them.",
      "Spell your street name to a friend using “as in …” twice.",
      "Rewrite the b/d word list from this lesson from memory: bed, bad, big, dog, day, red.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Writing Letters and Alphabetical Order
  // =========================================================================
  {
    slug: "ch-02-l-04",
    minutes: 20,
    description:
      "Practise clear handwriting and learn alphabetical order — the system behind dictionaries, contact lists and every index you will ever use.",
    outcomes: [
      "Write all 26 letters legibly in uppercase and lowercase",
      "Put words in alphabetical order using first, second and third letters",
      "Find a word in a list or dictionary quickly",
      "Explain why alphabetical order matters in real life",
    ],
    blocks: [
      LI(
        "Two practical skills complete your alphabet foundation: writing the letters clearly by hand, and putting words in A-to-Z order. The second skill runs dictionaries, phone contact lists, class registers, indexes and filing systems. After this lesson, you can use all of them.",
        [
          "You know the uppercase and lowercase pairs (Lesson 2).",
          "You can recognise all letters, including b/d and p/q (Lesson 3).",
        ],
      ),
      H("Clear handwriting: the three rules"),
      T(
        "Nobody needs beautiful handwriting — everybody needs CLEAR handwriting. Clear means: (1) every letter has its full shape, (2) the space between words is bigger than the space between letters, (3) tall letters are tall and small letters are small. Write rows of pairs slowly and you will get there.",
      ),
      GR(
        "Alphabetical order (A→Z)",
        "To put words in order, compare the FIRST letter of each word. If the first letters are the same, compare the second letter. If those are the same too, compare the third — and so on.",
        [
          { english: "apple · banana · orange", translation: "First letters a, b, o — already ordered." },
          { english: "banana · bed · big", translation: "All start with b — so compare the second letters: a, e, i." },
          { english: "cat · can · cap", translation: "Same start c-a — the third letter decides: n, p, t." },
        ],
      ),
      ST(
        "How to alphabetise any word list",
        [
          {
            title: "Step 1 — Look at the first letter only",
            text: "Sort the list into A-words, B-words, C-words… using the alphabet order A=1, B=2, C=3…",
            examples: [{ english: "tea · apple · milk", note: "a(1) → m(13) → t(20): apple, milk, tea." }],
          },
          {
            title: "Step 2 — Break ties with the second letter",
            text: "When two words start with the same letter, move to letter two and compare again.",
            examples: [{ english: "bread · butter", note: "Both b — compare r(18) and u(21): bread before butter." }],
          },
          {
            title: "Step 3 — Keep going deeper if needed",
            text: "Long shared beginnings need the third, fourth or later letter. Dictionaries do exactly this.",
            examples: [{ english: "sing · sink · site", note: "All three start with s-i. The third letter decides: g (sing) and k (sink) both come before t (site). And g comes before k, so the order is: sing, sink, site." }],
          },
          {
            title: "Step 4 — Ignore capitals when sorting",
            text: "Alphabetical order ignores big and small shapes: A and a count as the same letter.",
            examples: [{ english: "Ankara · apple · Boston", note: "Ankara before apple (second letters n before p), and both come before Boston (a before b)." }],
          },
        ],
        "Practise with your own name list — family, classmates, contacts.",
      ),
      EXD(
        "Alphabetical order in real life",
        [
          {
            english: "Dictionary: apple — page 12, apply — page 12, approach — page 13.",
            note: "Dictionaries order every word alphabetically — that is how you find them.",
            domain: "education",
          },
          {
            english: "Phone contacts: Ali, Amina, Daniel, David, Sara.",
            note: "Your contact list is sorted for you — now you know the system.",
            domain: "technology",
          },
          {
            english: "Class register: Ahmed, Bilal, Fatima, Zara.",
            note: "Teachers call names in A-to-Z order.",
            domain: "education",
          },
          {
            english: "Index: capital letters 34 · countries 88 · vowels 121.",
            note: "Every book index at the back is alphabetical.",
            domain: "education",
          },
          {
            english: "Filing: clients from A-C, D-F, G-L…",
            note: "Offices file papers by first letter — a wall of A-to-Z.",
            domain: "work",
          },
          {
            english: "Shop shelves: coffee, rice, sugar, tea.",
            note: "Supermarkets sort some shelves alphabetically by brand.",
            domain: "shopping",
          },
          {
            english: "Airport departure board: flights AZ204, BA118, TK1988.",
            note: "Airline codes are alphabetical: AZ before BA before TK.",
            domain: "travel",
          },
          {
            english: "Website menu: About, Contact, Home, Products.",
            note: "Menus and site maps often follow the alphabet.",
            domain: "technology",
          },
        ],
        "Once you see it, you cannot unsee it: A-to-Z order runs the world’s information.",
      ),
      DL(
        "Where is my name on the list?",
        "Two students look for their names on a class list.",
        [
          ["Teacher", "The list is in alphabetical order. Find your name and remember your number."],
          ["Student 1", "I’m Ali — I look at the top, under A."],
          ["Student 2", "I’m Sara — I look at the bottom, under S."],
          ["Student 1", "Your name is after mine. A is before S."],
          ["Teacher", "Correct. And if two names start with S — Sara and Sami?"],
          ["Student 2", "We look at the second letter: a and a — the same! Then the third: m before r. Sami first."],
        ],
      ),
      CMP(
        "Alphabetical order vs keyboard order",
        ["A-to-Z (alphabet)", "QWERTY (keyboard)"],
        [
          ["What it is", "The fixed order of the alphabet", "The layout of letters on a keyboard"],
          ["Where you use it", "Dictionaries, lists, indexes, files", "Typing"],
          ["Does it change?", "Never — A is always first", "Rarely — layouts differ by country"],
          ["Which to learn first", "First — it organises information", "Second — it speeds up writing"],
        ],
        {
          intro: "Two different orders you meet in English — do not mix them up.",
          verdict:
            "The keyboard is a tool; the alphabet is a system. Knowing A-to-Z order lets you find anything in any list.",
        },
      ),
      MS(
        [
          [
            "Sorting: banana, apple, orange → banana, apple, orange (no change)",
            "apple, banana, orange",
            "A-to-Z order means A words first: apple (a), banana (b), orange (o).",
          ],
          [
            "Sorting: bed, bad, big",
            "bad, bed, big",
            "All three start with b. Compare the second letters: a, e, i — a is first, so bad comes before bed, and bed before big.",
          ],
          [
            "Sorting: Karim, ahmed, Sara (mixed capitals confuse the sorter)",
            "Ahmed, Karim, Sara",
            "Ignore capitals when sorting: Ahmed counts as an A word, Karim as a K word, Sara as an S word.",
          ],
          [
            "Sorting: cat, can, cap → can, cat, cap",
            "can, cap, cat",
            "All three start with c-a. The third letter decides: n, p, t — so can, cap, cat. Watch out: ‘cat’ and ‘cap’ both have c-a, and p comes before t.",
          ],
        ],
        "Common mistakes — sorting errors",
      ),
      N(
        "Name order around the world",
        "Alphabetical order is a European tradition. Arabic uses a different order (abjad), and Urdu follows its own alphabet order. When you use English lists, you use A-to-Z — one order per language.",
      ),
      US(
        [
          {
            situation: "Using a dictionary",
            example: "Find ‘pronunciation’: p-r-o — go to P, then PR…",
            note: "Alphabetical order + letter-by-letter comparison.",
          },
          {
            situation: "Looking for a form",
            example: "Forms are filed A–Z by family name.",
            note: "Offices, schools, hospitals — the same system.",
          },
          {
            situation: "Reading a book index",
            example: "Topics at the back, A to Z, with page numbers.",
            note: "The fastest way to find information in any textbook.",
          },
          {
            situation: "Organising your own notes",
            example: "Keep a vocabulary notebook in A-to-Z order.",
            note: "Your own dictionary — add new words in the right place.",
          },
        ],
        "Why this skill matters daily",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "The school office keeps a list of all students in alphabetical order. Students with family names A to G wait in Room 1. Family names H to P wait in Room 2. Family names Q to Z wait in Room 3. Sara Farooq reads the list: F is between A and G, so she goes to Room 1. Her friend Bilal Qureshi — Q — goes to Room 3.",
          task: "Which room do YOU go to? Find your family name’s place between A and Z.",
        },
        writing: {
          task: "Write five words from this chapter in alphabetical order — then add three more words of your own in the correct places.",
          guide: ["Start: alphabet · capital · letter · order · word", "Now insert: …", "Final list: …"],
          model: "alphabet, capital, letter, order, word → insert: alphabet, capital, handwriting, letter, order, spelling, word",
        },
        listening: {
          script:
            "I’ll read the names in order, A to Z. Ali. Amina. Bilal. David. Fatima. Maria. Omar. Sara. Youssef. Zara. If your name is called, please stand.",
          task: "Listen and write the first name and the last name you hear.",
        },
        speaking: {
          task: "Say three names (family or friends) in alphabetical order, and explain your choice.",
          frames: [
            "First …, because … comes before …",
            "Then …",
            "Last …, because … is the last letter.",
          ],
          checklist: [
            "I said the names in the right order.",
            "I explained one comparison with letter positions.",
          ],
        },
      }),
      LSP(
        [
          gls("The English alphabet has 26 letters."),
          gls("Letters join together to make words."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Clear handwriting needs full shapes, wide word spaces and correct heights — not beauty.",
        "Alphabetical order: compare first letters; ties go to the second letter, then the third…",
        "Dictionaries, contacts, registers, indexes and files all use A-to-Z order.",
        "Capitals do not matter when sorting: Ankara and apple both count as A words.",
        "Keep your vocabulary notebook in A-to-Z order — your own dictionary.",
      ]),
      RV(
        [
          {
            question: "How do you clarify “B” on a bad phone line?",
            options: ["Say it twice", "B as in book", "Say the alphabet"],
            correctIndex: 1,
            explanation: "Anchoring to a word makes the letter unmistakable.",
            from: "Chapter 02 · Lesson 3",
          },
          {
            question: "Which pair is mirrored?",
            options: ["m / n", "p / q", "u / v"],
            correctIndex: 1,
            explanation: "p and q mirror each other below the writing line, like b and d above it.",
            from: "Chapter 02 · Lesson 3",
          },
          {
            question: "Which word comes first in A-to-Z order?",
            options: ["milk", "apple", "tea"],
            correctIndex: 1,
            explanation: "a < m < t: apple, milk, tea.",
            from: "Chapter 02 · Lesson 4",
          },
        ],
        { title: "Revision — do you remember?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "Which list is in correct alphabetical order?",
            [
              ["a", "tea, apple, milk"],
              ["b", "apple, milk, tea"],
              ["c", "milk, tea, apple"],
            ],
            "b",
            fb("apple, milk, tea", "a comes before m, and m before t."),
            { hints: ["Compare the first letters: a, m, t — which comes first in the alphabet?"] },
          ),
          MCQ(
            "Which comes first: “sing” or “sink”?",
            [
              ["a", "sing"],
              ["b", "sink"],
              ["c", "They are the same"],
            ],
            "a",
            fb("sing", "Both start s-i. Compare the third letters: g (7th letter) comes before k (11th letter), so sing comes first."),
            { hints: ["Both words start with s-i. Which letter is earlier: g or k?"] },
          ),
          FB(
            "Complete the rule.",
            "If two words start with the same letter, compare the ___ letter.",
            ["second"],
            fb("second", "First letter the same → second letter decides. Still the same → third letter, and so on."),
            { hints: ["First, ___, third…"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "Put in order: bed, apple, dog, cat",
            [
              ["a", "apple, bed, cat, dog"],
              ["b", "apple, cat, bed, dog"],
              ["c", "bed, apple, cat, dog"],
            ],
            "a",
            fb("apple, bed, cat, dog", "a < b < c < d — first letters decide everything here."),
          ),
          MCQ(
            "In a dictionary, which word is on the earlier page?",
            [
              ["a", "water"],
              ["b", "wash"],
              ["c", "watch"],
            ],
            "b",
            fb("wash", "All start w-a. Third letters: s (19) before t (20): wash, then watch, then water? Careful — wa-s vs wa-t: s < t, so wash first."),
          ),
          REORD(
            "Put the words in alphabetical order as one list: bus, apple, big.",
            "apple big bus",
            fb(
              "apple big bus",
              "apple (a) first, then big (b-i) before bus (b-u) — second letters i < u.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Alphabetise your world",
      instructions:
        "Write six words: three from this lesson (alphabet, capital, order) and three of your own choice. Put all six in alphabetical order and explain ONE comparison in a sentence (for example: “ ‘big’ comes before ‘bus’ because i comes before u.”).",
      minWords: 12,
      maxWords: 60,
    },
    homework: [
      "Alphabetise your family’s names on paper.",
      "Find one book index and look up one topic.",
      "Write the alphabet once in uppercase, once in lowercase — as clearly as you can.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Capitalisation Rules and Chapter Review
  // =========================================================================
  {
    slug: "ch-02-l-05",
    minutes: 30,
    description:
      "The complete capital-letter system in six rules — sentence starts, the word I, names, places, days and months, languages and countries — then the full chapter review.",
    outcomes: [
      "Apply the six capitalisation rules in your own writing",
      "Explain why capitals matter for meaning (china vs China)",
      "Self-check a text for capital-letter mistakes",
      "Pass the Chapter 2 review quiz",
    ],
    blocks: [
      LI(
        "This lesson collects every capital-letter rule into one clear system of six rules, then reviews the whole alphabet chapter. Master these six rules and your writing will look educated in every situation — emails, forms, messages and school work.",
        [
          "You know uppercase and lowercase shapes (Lesson 2).",
          "You can write and recognise all 26 letters (Lessons 1–4).",
        ],
      ),
      H("Six rules, one system"),
      T(
        "English capital letters follow a small set of rules — not taste, not decoration. Learn the six rules once, check your writing against them, and you will make almost no capital-letter mistakes again.",
      ),
      GR(
        "Rule 1 — Sentence starts",
        "The first word of every sentence starts with a capital letter. Also after a full stop, question mark or exclamation mark — each new sentence starts big.",
        [
          { english: "My name is Sara. I am a student.", translation: "M starts sentence 1; I starts sentence 2." },
        ],
      ),
      GR(
        "Rule 2 — The word “I”",
        "The pronoun “I” is always a capital letter, everywhere in the sentence. It is the only pronoun with this rule: you, he, she, we, they stay small.",
        [
          { english: "Ali and I are friends.", translation: "Even in the middle of the sentence: capital I." },
        ],
      ),
      GR(
        "Rule 3 — Names of people",
        "People’s first names and family names always take capitals — plus titles before names: Mr, Ms, Dr, Captain.",
        [
          { english: "Mr Ali · Ms Khan · Dr Farah", translation: "Titles + names, all capitals." },
        ],
      ),
      GR(
        "Rule 4 — Names of places",
        "Cities, countries, streets, rivers, mountains, buildings — every specific place name takes capitals. But “city”, “country”, “river” alone stay small.",
        [
          { english: "I live in Cairo, Egypt.", translation: "Cairo and Egypt are specific names; ‘city’ and ‘country’ are not." },
        ],
      ),
      GR(
        "Rule 5 — Days, months, festivals",
        "Days of the week and months of the year always take capitals — Monday to Sunday, January to December — and so do festivals: Eid, Diwali, Christmas, Ramadan.",
        [
          { english: "See you on Friday, 14 August.", translation: "Day and month, both capitals." },
        ],
      ),
      GR(
        "Rule 6 — Languages, nationalities, religions",
        "Names of languages (English, Urdu, Hindi), nationalities (Pakistani, Brazilian) and religions (Islam, Christianity) always take capitals.",
        [
          { english: "She speaks English and Urdu.", translation: "Language names are proper names." },
        ],
      ),
      ST(
        "How to check your capitals — the self-edit routine",
        [
          {
            title: "Step 1 — Read your text aloud, only the capitals",
            text: "Read your sentence and say “BIG” every time you meet a capital letter. This slows you down exactly where mistakes live.",
            examples: [{ english: "my name is Sara → my name is BIG-Sara…", note: "Two capitals found: none at the start — a mistake!" }],
          },
          {
            title: "Step 2 — Test every capital against the six rules",
            text: "For each BIG letter ask: is it a sentence start, the word I, a name, a place, a day/month/festival, or a language? If yes — correct. If no — make it small.",
            examples: [{ english: "My Teacher is kind. → My teacher is kind.", note: "“Teacher” is a job word, not a name — small t." }],
          },
          {
            title: "Step 3 — Scan for missing capitals",
            text: "Check the first word of every sentence, every name, and every place. Then check “i” — it must always be “I”.",
            examples: [{ english: "i am from cairo. → I am from Cairo.", note: "The three fixes the scan finds instantly." }],
          },
        ],
        "Run this routine on every message before you send it. It takes ten seconds once it is a habit.",
      ),
      TB(
        "The six rules at a glance",
        ["Rule", "Example", "Watch out"],
        [
          ["1 · Sentence start", "My name is Sara.", "After every . ? ! the next word is big"],
          ["2 · The word I", "Ali and I are friends.", "Only I — not you, he, she"],
          ["3 · People + titles", "Mr Ali · Ms Khan", "No capital without a name: “my teacher” stays small"],
          ["4 · Places", "Cairo, Egypt, King Road", "city / country / street alone stay small"],
          ["5 · Days, months, festivals", "Monday · August · Eid", "Seasons are small: summer, winter"],
          ["6 · Languages, nationalities", "English · Pakistani · Islam", "school subjects: Maths (UK) / math (US)"],
        ],
        "Print this table mentally — it covers 95% of all capital-letter decisions.",
      ),
      EXD(
        "All six rules in one mini-text",
        [
          {
            english: "My name is Amina Khan.",
            note: "Rules 1 + 3: sentence start, person’s name.",
            domain: "family",
          },
          {
            english: "I live in Lahore, Pakistan.",
            note: "Rules 2 + 4: capital I, city and country names.",
            domain: "home",
          },
          {
            english: "I work on Mondays and Thursdays.",
            note: "Rule 5: days of the week.",
            domain: "work",
          },
          {
            english: "My holiday starts in July.",
            note: "Rule 5: months — but seasons like ‘summer’ stay small.",
            domain: "travel",
          },
          {
            english: "I speak English, Urdu and a little Punjabi.",
            note: "Rule 6: language names.",
            domain: "everyday",
          },
          {
            english: "My teacher is Ms Farah, and Dr Ali is our doctor.",
            note: "Rule 3: titles with names.",
            domain: "education",
          },
          {
            english: "We celebrate Eid in my family.",
            note: "Rule 5: festivals always take capitals.",
            domain: "family",
          },
          {
            english: "I am learning English at TalkSy.",
            note: "Rules 1, 2 and 6 in one short sentence.",
            domain: "technology",
          },
        ],
        "Read the mini-text out loud — then cover it and write it from memory.",
      ),
      CMP(
        "Capital NEEDED vs capital FORBIDDEN",
        ["Always capital", "Always small (in normal sentences)"],
        [
          ["People", "Names: Sara, Ali, Khan", "job words: teacher, doctor, student"],
          ["Places", "Cities and countries: Cairo, Pakistan, King Road", "common place words: city, river, street"],
          ["Time", "Days + months: Monday, July", "seasons + times: summer, morning, evening"],
          ["Languages", "English, Urdu, Hindi", "school words: class, lesson, homework"],
          ["Pronouns", "The pronoun I", "all other pronouns: you, he, she, it, we, they"],
          ["Celebrations", "Festivals: Eid, Christmas, Diwali", "general words: holiday, party, weekend"],
        ],
        {
          intro: "The fast self-check: is it a NAME or a GENERAL word? Names are big, general words are small.",
          verdict:
            "Special = capital. General = small. When you hesitate, ask: “Could many things have this word as their name?”",
        },
      ),
      MS(
        [
          [
            "my name is amina and i am from cairo.",
            "My name is Amina and I am from Cairo.",
            "Five capitals: M (start), A (name), I (always), C (city) — and the sentence needs its full stop.",
          ],
          [
            "I Study English On monday.",
            "I study English on Monday.",
            "Only I, English and Monday are capitals. Verbs like “study” and the preposition “on” stay small.",
          ],
          [
            "She is a Teacher in a big School.",
            "She is a teacher in a big school.",
            "Job words and general words stay small — capitals are for names, not importance.",
          ],
          [
            "we visit my uncle in summer, in august.",
            "We visit my uncle in summer, in August.",
            "Seasons are small (summer), months are capitals (August) — one of English’s little traps.",
          ],
          [
            "Happy eid! See you on friday.",
            "Happy Eid! See you on Friday.",
            "Festivals and days of the week are always capitals.",
          ],
        ],
        "Common mistakes — the big five",
      ),
      US(
        [
          {
            situation: "Emails",
            example: "Dear Ms Khan, thank you for your message.",
            note: "Rule 3 + Rule 1: correct capitals open professional doors.",
          },
          {
            situation: "Job applications",
            example: "I am applying for the position of teacher at City School.",
            note: "One wrong “i am from cairo” can cost you the interview — recruiters notice.",
          },
          {
            situation: "Forms",
            example: "First name: Amina · City: Lahore · Country: Pakistan.",
            note: "Forms are full of names — capitals everywhere.",
          },
          {
            situation: "Messages",
            example: "See you Friday! — Sameer",
            note: "Even fast messages keep capitals for days and names — it is automatic for strong writers.",
          },
        ],
        "Where capitals are checked",
      ),
      DL(
        "The email check",
        "A student writes her first email in English. Her teacher checks the capitals.",
        [
          ["Teacher", "Read your email aloud — only the capitals: “dear mr ali … i am amina from multan …”"],
          ["Student", "Dear Mr Ali … I am Amina from Multan. Better?"],
          ["Teacher", "Much better! What did you fix?"],
          ["Student", "Mr + name, I, my name, and my city — all capitals."],
          ["Teacher", "And one more: “i study english on tuesday.” → ?"],
          ["Student", "I study English on Tuesday. The I, the language and the day!"],
        ],
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "dear ms farah, my name is bilal and i am a student in class 2-b. i am writing because i want to join the english club. we meet on wednesdays after school, in room 12. my friend zara is in the club, and she says it is fun. thank you, bilal ahmed.",
          task: "This letter has NINE capital-letter mistakes. Find them all and write the corrected letter.",
        },
        writing: {
          task: "Write a short email (3–4 sentences) to a teacher, applying for an English club. Use: a name, a day, a language, and the word I.",
          guide: ["Dear Ms/Mr …,", "My name is … and I am …", "I want to join … because …", "Thank you, …"],
          model:
            "Dear Ms Farah, my name is Bilal Ahmed and I am a student in Class 2-B. I want to join the English club because I need more speaking practice. We meet on Wednesdays — I will be there. Thank you, Bilal Ahmed.",
        },
        listening: {
          script:
            "Welcome to Chapter Two review. A sentence starts with a capital letter. The word I is always big. Names of people and places are capitals. Days and months are capitals: Monday, Tuesday, January, February. Languages too: English, Urdu, Hindi. And remember: china with a small c is a plate — China with a big C is a country!",
          task: "Listen. What is the difference between china and China?",
        },
        speaking: {
          task: "Say three sentences about yourself, each using one capital rule — then say which rule you used.",
          frames: [
            "My name is … (Rule 3)",
            "I am from … (Rules 2 and 4)",
            "I study English on … (Rules 5 and 6)",
          ],
          checklist: [
            "I said each sentence with correct capitals in mind.",
            "I named the rule I used.",
          ],
        },
      }),
      LSP(
        [
          gls("The English alphabet has 26 letters."),
          gls("Every sentence starts with a capital letter."),
          gls("Use a capital letter for the names of people and places."),
          gls("The word 'I' is always a capital letter."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Six rules cover almost every capital decision: sentence starts, I, people + titles, places, days/months/festivals, languages/nationalities.",
        "Names are capital; general words (teacher, city, summer) are small.",
        "Seasons are small but months are capitals — a classic trap.",
        "china vs China, march vs March: capitals can change meaning.",
        "Correct capitals make your emails and forms look educated — recruiters and teachers notice.",
      ]),
      RV(
        [
          {
            question: "How many letters does English have?",
            options: ["21", "26", "30"],
            correctIndex: 1,
            explanation: "26 letters — 5 vowels (A E I O U) and 21 consonants.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "Which is the mirrored pair?",
            options: ["b / d", "m / n", "s / t"],
            correctIndex: 0,
            explanation: "b and d mirror each other — the “bed” picture fixes them.",
            from: "Chapter 02 · Lesson 3",
          },
          {
            question: "Which word comes first in the dictionary?",
            options: ["wash", "water", "watch"],
            correctIndex: 0,
            explanation: "All start w-a; the third letter decides: s before t.",
            from: "Chapter 02 · Lesson 4",
          },
          {
            question: "How do you spell “cat”?",
            options: ["K-A-T", "C-A-T", "S-A-T"],
            correctIndex: 1,
            explanation: "c-a-t — the letter names are “see, ay, tee”.",
            from: "Chapter 02 · Lesson 1",
          },
        ],
        { title: "Chapter 2 review — the whole chapter", intro: "Four questions from Lessons 1–4 plus the capital rules from today." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice — the six rules",
        questions: [
          MCQ(
            "Which word needs a capital in the middle of a sentence?",
            [
              ["a", "summer"],
              ["b", "july"],
              ["c", "teacher"],
            ],
            "b",
            fb("July", "Months are capitals (Rule 5); seasons like summer stay small."),
            { hints: ["Is it a NAME with a calendar date, or a general season word?"] },
          ),
          FB(
            "Fix the pronoun.",
            "My brother and ___ play football.",
            ["I"],
            fb("I", "The word “I” is always a capital — the only pronoun with this rule."),
            { hints: ["Which English pronoun is always written big?"] },
          ),
          MCQ(
            "Which sentence is fully correct?",
            [
              ["a", "We visit Turkey in march."],
              ["b", "We visit turkey in March."],
              ["c", "We visit Turkey in March."],
            ],
            "c",
            fb(
              "We visit Turkey in March.",
              "Country names and month names both take capitals (Rules 4 and 5).",
            ),
            { hints: ["Check the country AND the month."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Chapter review quiz",
        note: "No hints — your chapter test.",
        questions: [
          MCQ(
            "How many capital letters are missing? “my friend sara and i visit paris.”",
            [
              ["a", "Two"],
              ["b", "Three"],
              ["c", "Four"],
            ],
            "c",
            fb(
              "Four",
              "my→My (Rule 1), sara→Sara (Rule 3), i→I (Rule 2), paris→Paris (Rule 4). Four capitals missing.",
            ),
          ),
          MCQ(
            "Which pair changes meaning with its capitals?",
            [
              ["a", "Book / book"],
              ["b", "China / china"],
              ["c", "School / school"],
            ],
            "b",
            fb("China / china", "China is a country; china (small) means fine dishes."),
          ),
          CORR(
            "Find and correct the mistakes.",
            "on monday, i have an english lesson with ms khan.",
            ["On Monday, I have an English lesson with Ms Khan."],
            fb(
              "On Monday, I have an English lesson with Ms Khan.",
              "Six capitals: O (start), M (Monday), I, E (English), M + K (Ms Khan).",
            ),
          ),
          REORD(
            "Put the words in alphabetical order: month, monday, money.",
            "monday money month",
            fb(
              "monday, money, month",
              "All start m-o. Third letters: n, n, n — same! Fourth letters: d, e, t — so monday, money, month.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Capital letters in my life",
      instructions:
        "Write five sentences about your real life, using all five of these: (1) your name, (2) the word I, (3) your city or country, (4) a day or month, (5) a language. Check every capital against the six rules — then check it once more.",
      minWords: 20,
      maxWords: 80,
    },
    homework: [
      "Write today’s date correctly: day, number, month (for example: Friday, 13 November).",
      "Find and fix three capital-letter mistakes in any message you send this week.",
      "Before Chapter 3, redo this lesson’s review quiz and aim for 4 of 4.",
    ],
  },
];
