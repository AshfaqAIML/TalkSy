/**
 * PROMPT 57 production — Batch 4, Chapter 10: Nouns and Articles.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the noun-system chapter: common vs proper nouns with real
 * capitalisation consequences, the five plural spelling rules worked with
 * examples, the irregular set taught explicitly (children, men, women,
 * feet, teeth, people), what countable and uncountable MEAN for grammar
 * (a bread → some bread), and article choice by SOUND — an hour,
 * a university, the famous traps included. No bare rule lists anywhere.
 */

import {
  AU,
  CORR,
  DICT,
  DL,
  FB,
  GR,
  H,
  LIS,
  MCQ,
  MATCH,
  N,
  RD,
  REORD,
  T,
  TB,
  VOC,
  W,
  fb,
} from "../types";
import { CMP, EXD, FS, LI, LSP, MS, RV, SM, ST, US, type LessonUpgrade } from "./helpers";
import { gls } from "./glossary";

/** Vocabulary entry built from a validated glossary term. */
function vocGlossary(
  title: string,
  entries: { word: string; partOfSpeech: string; definition: string }[],
) {
  return VOC(
    title,
    entries.map((e) => {
      const g = gls(e.word);
      return [e.word, e.partOfSpeech, e.definition, `${g.ur} · ${g.hi}`] as [
        string,
        string,
        string,
        string,
      ];
    }),
  );
}

/** fb() plus a similar example — used where one more model teaches the pattern. */
function fbx(
  correctAnswer: string,
  explanation: string,
  whyWrong: string,
  example: { english: string; translation: string },
) {
  return { ...fb(correctAnswer, explanation, whyWrong), similarExample: example };
}

export const ch10Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Common and Proper Nouns
  // =========================================================================
  {
    slug: "ch-10-l-01",
    minutes: 20,
    description:
      "Two families of nouns: general words like city and girl, and special names like Mumbai and Sara — with the capital letter that tells them apart.",
    outcomes: [
      "Tell common nouns and proper nouns apart",
      "Use capital letters with proper nouns correctly",
      "Turn a common noun into a proper noun in a sentence",
    ],
    blocks: [
      LI(
        "This lesson sorts your nouns into two families. Common nouns name general things: a city, a girl, a month. Proper nouns name one special thing: Mumbai, Sara, March. Proper nouns always start with a capital letter. By the end, your capitals will be right every time.",
        [
          "You know that naming words are called nouns (Chapter 07 · Lesson 2).",
          "You know that names of people start with a capital letter (Chapter 02).",
          "You know many naming words for people, places and things (Chapter 06).",
        ],
      ),
      vocGlossary("Noun words for this lesson", [
        { word: "noun", partOfSpeech: "noun", definition: "a word that names a person, place, animal or thing" },
        { word: "common noun", partOfSpeech: "noun", definition: "a general name: city, girl, month" },
        { word: "proper noun", partOfSpeech: "noun", definition: "the name of one special thing: Mumbai, Sara, March" },
        { word: "name", partOfSpeech: "noun", definition: "the word a person or thing is called" },
        { word: "capital letter", partOfSpeech: "noun", definition: "the big form of a letter: A, B, C" },
        { word: "small letter", partOfSpeech: "noun", definition: "the small form of a letter: a, b, c" },
      ]),
      H("Two families of nouns"),
      T(
        "Common nouns name general things. A city is any city. A girl is any girl. Proper nouns name one special thing. Mumbai is one city. Sara is one girl. The difference is easy to see — and easy to write. Proper nouns always take a capital letter.",
      ),
      {
        type: "definition",
        term: "proper noun",
        partOfSpeech: "noun",
        definition:
          "A proper noun is the name of one special person, place or thing. It always starts with a capital letter.",
        example: {
          english: "I live in Mumbai.",
          translation: "Mumbai names one city, so it starts with a big M.",
        },
      },
      TB(
        "Common vs proper — same idea, two forms",
        ["Common noun (general)", "Proper noun (one name)", "What it is"],
        [
          ["city", "Mumbai, London", "a place"],
          ["girl", "Sara, Priya", "a person"],
          ["month", "March, November", "a time"],
          ["day", "Monday, Friday", "a day"],
          ["language", "English, Urdu", "a language"],
        ],
        "Both columns are nouns. Only the right column takes a capital letter.",
      ),
      AU(
        "Listen: common and proper",
        "city. Mumbai. girl. Sara. month. March. day. Monday. language. English. Common nouns are general. Proper nouns are names.",
        0.85,
      ),
      AU(
        "Listen: capitals in sentences",
        "I live in a city. I live in Mumbai. Her birthday is in March. We speak English. My friend is a girl. Her name is Sara.",
        0.9,
      ),
      ST(
        "Turn a common noun into a proper noun in three steps",
        [
          {
            title: "Step 1 — Find the general word",
            text: "Read your sentence. Find the general naming word: city, girl, month, dog.",
            examples: [{ english: "I live in a city.", note: "City is the common noun — it means any city." }],
          },
          {
            title: "Step 2 — Give it its name",
            text: "Now name the one you mean. Your city has a name. Your friend has a name.",
            examples: [
              { english: "I live in a city. → I live in Mumbai.", note: "Mumbai names one city only." },
            ],
          },
          {
            title: "Step 3 — Write the capital",
            text: "The proper noun always starts with a capital letter. Check it before you finish the sentence.",
            examples: [
              { english: "My friend sara → My friend Sara.", note: "Names start big, every time." },
            ],
          },
        ],
      ),
      GR(
        "The capital rule for proper nouns",
        "Common nouns take a small letter: city, girl, month. Proper nouns take a capital letter: Mumbai, Sara, March.",
        [
          {
            english: "I live in a city. I live in Mumbai.",
            translation: "city = small letter · Mumbai = capital letter.",
          },
          {
            english: "My friend is a girl. Her name is Sara.",
            translation: "girl is general · Sara is one person.",
          },
          {
            english: "Her birthday is in March.",
            translation: "Months are proper nouns in English.",
          },
        ],
        [
          "Days, months and languages are proper nouns in English: Monday, March, English. Urdu and Hindi write many of these small — English writes them big.",
        ],
      ),
      EXD(
        "Common and proper nouns in real life",
        [
          {
            english: "I live in a city. My city is Lahore.",
            note: "First the common noun, then its proper name.",
            domain: "home",
          },
          {
            english: "My friend Sara lives in London.",
            note: "Two proper nouns, two capital letters.",
            domain: "social",
          },
          {
            english: "My sister goes to school in Delhi.",
            note: "School is common — any school. Delhi is proper.",
            domain: "education",
          },
          {
            english: "We eat bread and rice at home.",
            note: "Food words are common nouns — always small letters.",
            domain: "food",
          },
          {
            english: "My doctor works in a hospital in Karachi.",
            note: "Job words are common; the city is proper.",
            domain: "health",
          },
          {
            english: "I read a book about a lion in Africa.",
            note: "Africa is a proper noun — one continent, one name.",
            domain: "nature",
          },
          {
            english: "The shop on Bank Street sells phones.",
            note: "Streets have proper names with capitals.",
            domain: "shopping",
          },
          {
            english: "My uncle works for a company in Dubai.",
            note: "Cities are proper nouns at work too.",
            domain: "work",
          },
          {
            english: "My phone says Monday, March 3.",
            note: "Days and months start big — even on a phone screen.",
            domain: "technology",
          },
        ],
        "Nine sentences, nine places — and every proper noun wears its capital letter.",
      ),
      US(
        [
          {
            situation: "Writing your address",
            example: "“I live in Karachi. My street is Garden Street.”",
            note: "City names and street names are proper nouns.",
          },
          {
            situation: "A birthday card",
            example: "“Happy birthday, Sara! Your party is on Saturday.”",
            note: "Names and days take capitals.",
          },
          {
            situation: "Talking about school",
            example: "“My teacher speaks English and Urdu.”",
            note: "Languages are proper nouns too.",
          },
          {
            situation: "Filling in a form",
            example: "“Name: Ali. City: Mumbai.”",
            note: "Forms ask for proper nouns — your name and your city.",
          },
          {
            situation: "Reading a news app",
            example: "“Rain in Lahore today.”",
            note: "News is full of place names with capitals.",
          },
        ],
        "Where the two families meet",
        "You write proper nouns every day — in forms, messages and cards.",
      ),
      DL(
        "A form at the library",
        "Omar helps Sara fill in her first library form.",
        [
          ["Omar", "Write your name here. Start with a capital letter."],
          ["Sara", "Sara Khan. Is that right?"],
          ["Omar", "Yes. Names are proper nouns. They start big."],
          ["Sara", "And my city? I write mumbai?"],
          ["Omar", "No — Mumbai. Cities are proper nouns too."],
          ["Sara", "City: Mumbai. And school? Small or big?"],
          ["Omar", "School is a common noun — small letter. But the name of your school starts big."],
          ["Sara", "Green School. Got it. Common nouns are small, proper nouns are big."],
        ],
      ),
      CMP(
        "common noun vs proper noun",
        ["Common noun — general", "Proper noun — one name"],
        [
          ["What it names", "Any member of a group", "ONE special person, place or thing"],
          ["Letter", "Small letter: city, girl, month", "Capital letter: Mumbai, Sara, March"],
          ["Example", "“I live in a city.”", "“I live in Mumbai.”"],
          ["How many are there?", "Many cities, many girls", "Only one Mumbai, only one Sara"],
        ],
        {
          intro: "One idea, two forms. The capital letter is the signal.",
          verdict:
            "General → small letter. One name → capital letter. Say it as a chant: common is small, proper is big.",
        },
      ),
      MS(
        [
          [
            "I live in mumbai.",
            "I live in Mumbai.",
            "Mumbai is the name of one city — a proper noun. Proper nouns always take a capital letter.",
          ],
          [
            "My Friend is a teacher.",
            "My friend is a teacher.",
            "Friend is a common noun — any friend. Keep the small letter.",
          ],
          [
            "We speak english at home.",
            "We speak English at home.",
            "Languages are proper nouns in English. Write English with a big E.",
          ],
          [
            "Her birthday is in march.",
            "Her birthday is in March.",
            "Months are proper nouns too. March starts with a capital M.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "The names English writes big",
        "People (Sara), cities (Lahore), days (Monday), months (March) and languages (English) are proper nouns. Urdu and Hindi write many of these small. English writes them big. Check every name before you finish a sentence.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Ayesha. I live in Lahore. My best friend is Sara. Sara speaks English and Urdu. Her birthday is in March. On Monday, we go to our school library. Our city is big and busy. I love Lahore.",
          task: "Read the text two times. Then say five proper nouns from it.",
        },
        writing: {
          task: "Write four sentences about you: your city, a friend, your language and your birthday month. Use one proper noun in each sentence.",
          guide: ["I live in ______.", "My friend is ______.", "I speak ______.", "My birthday is in ______."],
          model: "I live in Lahore. My friend is Sara. I speak English. My birthday is in March.",
        },
        listening: {
          script:
            "My name is Ali. I live in Karachi. My sister studies in London. She speaks English. Her birthday is in November.",
          task: "Listen and write the proper nouns you hear.",
        },
        speaking: {
          task: "Say three sentences about you and your city. Use one proper noun in each sentence.",
          frames: ["I live in ______.", "My friend ______ lives in ______.", "My birthday is in ______."],
          checklist: [
            "I used a capital letter for every name.",
            "I kept common nouns small.",
            "I said three full sentences.",
          ],
        },
      }),
      LSP(
        [
          gls("noun"),
          gls("common noun"),
          gls("proper noun"),
          gls("Use a capital letter for the names of people and places."),
          gls("A noun is the name of a person, place, animal or thing."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Common nouns name general things: city, girl, month, language.",
        "Proper nouns name one special thing: Mumbai, Sara, March, English.",
        "Proper nouns always start with a capital letter.",
        "Common nouns stay small — unless they start the sentence.",
        "People, cities, days, months and languages are proper nouns in English.",
      ]),
      RV(
        [
          {
            question: "Naming words are called…",
            options: ["nouns", "verbs", "adjectives"],
            correctIndex: 0,
            explanation: "A noun is the name of a person, place, animal or thing.",
            from: "Chapter 07 · Lesson 2",
          },
          {
            question: "Every sentence starts with…",
            options: ["a small letter", "a capital letter", "a number"],
            correctIndex: 1,
            explanation: "The first word of a sentence is always big — the rule from your alphabet chapter.",
            from: "Chapter 02 · Lesson 5",
          },
          {
            question: "Which word is a naming word for a place?",
            options: ["run", "city", "quickly"],
            correctIndex: 1,
            explanation: "A city is a place, so city is a noun.",
            from: "Chapter 07 · Lesson 2",
          },
          {
            question: "Mother, father and sister are…",
            options: ["family words", "food words", "colour words"],
            correctIndex: 0,
            explanation: "Mother, father and sister name your family — your first word group.",
            from: "Chapter 06 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Which noun is a proper noun?",
            [
              ["a", "girl"],
              ["b", "Sara"],
              ["c", "month"],
            ],
            "b",
            fb(
              "Sara",
              "Sara is the name of one girl, so it is a proper noun with a capital letter.",
              "Girl and month are common nouns — they name any girl, any month.",
            ),
            { skill: "grammar", hints: ["Which word is the name of one special person?"] },
          ),
          FB(
            "Complete with Monday or monday.",
            "We go to school on ___.",
            ["Monday"],
            fbx(
              "Monday",
              "Days of the week are proper nouns. Monday always starts with a capital M.",
              "Write monday with a small m and the day stops being proper.",
              { english: "Her birthday is in March.", translation: "Months are proper nouns too." },
            ),
            { skill: "grammar", hints: ["Is a day a general thing or the name of one day?"] },
          ),
          MATCH(
            "Match each common noun to its proper noun.",
            [
              ["c1", "city"],
              ["c2", "girl"],
              ["c3", "month"],
              ["c4", "language"],
            ],
            [
              ["p1", "March"],
              ["p2", "English"],
              ["p3", "London"],
              ["p4", "Sara"],
            ],
            [
              ["c1", "p3"],
              ["c2", "p4"],
              ["c3", "p1"],
              ["c4", "p2"],
            ],
            fb(
              "city → London, girl → Sara, month → March, language → English",
              "Each common noun names a group. Each proper noun names one member of that group.",
              "The common noun stays small; its proper partner starts big.",
            ),
            { skill: "vocabulary", hints: ["Think: a place, a person, a time, a language."] },
          ),
          LIS(
            "Listen and answer.",
            "My friend Sara lives in London.",
            "Which city does Sara live in?",
            ["London"],
            fb(
              "London",
              "You heard London — the proper noun that names Sara's city.",
              "Cities are proper nouns, so London starts with a big L.",
            ),
            { skill: "listening", hints: ["Listen for the name of the place."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is written correctly?",
            [
              ["a", "my friend lives in delhi."],
              ["b", "My friend lives in Delhi."],
              ["c", "My Friend lives in delhi."],
            ],
            "b",
            fb(
              "My friend lives in Delhi.",
              "Friend is a common noun — small letter. Delhi is a proper noun — capital letter.",
              "Sentence (a) starts small and misses both capitals. Sentence (c) makes Friend big for no reason.",
            ),
            { skill: "writing" },
          ),
          CORR(
            "Find and correct the mistake.",
            "We speak english at home.",
            ["We speak English at home."],
            fb(
              "We speak English at home.",
              "Languages are proper nouns. English takes a capital E.",
              "English written small is one of the most common beginner mistakes.",
            ),
            { skill: "writing" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My birthday is in March.",
            ["My birthday is in March."],
            fb(
              "My birthday is in March.",
              "Months are proper nouns: March with a capital M.",
              "The sentence starts big too — My begins with a capital M.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Is the word school a common noun or a proper noun?",
            [
              ["a", "a common noun"],
              ["b", "a proper noun"],
            ],
            "a",
            fb(
              "a common noun",
              "School names any school — a general idea, so it is a common noun.",
              "A proper noun would be the school's own name, like Green School.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "General or specific",
      instructions:
        "Write five pairs of common and proper nouns, like “city → London”. Then write two full sentences, each with one proper noun. Check every capital letter before you finish.",
      minWords: 12,
      maxWords: 45,
    },
    homework: [
      "Find five proper nouns in anything you read today. Write them down with their capital letters.",
      "Write the days of the week from memory. Check every capital letter.",
      "Say the rule to yourself five times today: common is small, proper is big.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Singular and Plural
  // =========================================================================
  {
    slug: "ch-10-l-02",
    minutes: 25,
    description:
      "One cat, two cats — and the five spelling rules that cover almost every plural in English.",
    outcomes: [
      "Say what singular and plural mean",
      "Form plurals with -s, -es, -ies and -ves",
      "Choose between the two y rules: babies vs boys",
      "Use plural nouns in full sentences",
    ],
    blocks: [
      LI(
        "One cat, two cats. English nouns change when you count them. This lesson teaches singular and plural. Then you learn the five spelling rules for plurals. Say each plural out loud. Your ears will teach your hands.",
        [
          "You can count from one to twenty (Chapter 06 · Lesson 4).",
          "You know that naming words are called nouns (Chapter 07 · Lesson 2).",
          "You can hear the last sound of a word (Chapter 04 · Lesson 3).",
        ],
      ),
      vocGlossary("Number words for this lesson", [
        { word: "singular", partOfSpeech: "noun", definition: "the form for one thing: one cat" },
        { word: "plural", partOfSpeech: "noun", definition: "the form for more than one: two cats" },
        { word: "number", partOfSpeech: "noun", definition: "a word like two or five that tells us how many" },
        { word: "spelling", partOfSpeech: "noun", definition: "the letters a word is made of" },
        { word: "word", partOfSpeech: "noun", definition: "one unit of meaning: one letter or more" },
      ]),
      H("One and more than one"),
      T(
        "Singular means one. Plural means more than one. One cat, two cats. Most plurals are easy: add -s. But some words need -es. Some change their y. Some change their f. This lesson gives you all five rules, one by one.",
      ),
      {
        type: "definition",
        term: "plural",
        partOfSpeech: "noun",
        definition:
          "The plural is the form of a noun for more than one thing: two cats, three books.",
        example: {
          english: "I have two brothers.",
          translation: "One brother → two brothers. Add -s.",
        },
      },
      TB(
        "The five plural rules",
        ["Rule", "When to use it", "Examples"],
        [
          ["+ s", "most nouns", "cat → cats, book → books, egg → eggs"],
          ["+ es", "word ends in s, x, z, ch, sh", "bus → buses, box → boxes, watch → watches"],
          ["y → ies", "consonant + y", "baby → babies, city → cities"],
          ["y → ys", "vowel + y", "boy → boys, day → days"],
          ["f / fe → ves", "some nouns", "leaf → leaves, knife → knives"],
        ],
        "Five rules cover almost every noun in English. Learn them in this order.",
      ),
      AU(
        "Listen: singular to plural",
        "one cat, two cats. one book, three books. one bus, two buses. one box, two boxes. one baby, two babies. one city, three cities. one boy, two boys. one leaf, two leaves.",
        0.85,
      ),
      AU(
        "Listen: plurals in sentences",
        "I have one sister and two brothers. Three buses pass my school. The cities are big. My baby brother plays with two boxes.",
        0.9,
      ),
      ST(
        "Make a plural in three steps",
        [
          {
            title: "Step 1 — Count first",
            text: "Ask: how many? One thing is singular. Two or more is plural. Numbers bigger than one need a plural noun.",
            examples: [{ english: "one egg → two eggs", note: "After two, the noun changes." }],
          },
          {
            title: "Step 2 — Look at the end of the word",
            text: "Look at the last letters before you add anything. Most words just take -s. Words ending in s, x, z, ch or sh take -es.",
            examples: [
              { english: "bus → buses", note: "Bus ends in s, so it takes -es. Hear the extra beat: bus-es." },
            ],
          },
          {
            title: "Step 3 — Check the y and the f",
            text: "Consonant + y becomes -ies: baby → babies. But vowel + y just takes -s: boy → boys. Some f words become -ves: leaf → leaves.",
            examples: [
              { english: "city → cities, but day → days", note: "Say both out loud and listen to the difference." },
            ],
          },
        ],
      ),
      GR(
        "The plural rules",
        "For more than one, most nouns add -s. Words ending in s, x, z, ch or sh add -es. Consonant + y changes to -ies. Vowel + y adds -s. Some nouns ending in f or fe change to -ves.",
        [
          { english: "one cat, two cats", translation: "Most nouns: just add -s." },
          {
            english: "one bus, two buses",
            translation: "After s, x, z, ch, sh: add -es — and hear the extra beat.",
          },
          { english: "one baby, two babies", translation: "Consonant + y → -ies. The baby rule." },
        ],
        [
          "Some nouns break all the rules: man → men, child → children. These irregular plurals come in Lesson 3 — you will learn them one by one.",
        ],
      ),
      EXD(
        "Plurals in real life",
        [
          {
            english: "I have two brothers and one sister.",
            note: "Numbers bigger than one need a plural noun: brothers.",
            domain: "family",
          },
          {
            english: "Three buses pass my school every morning.",
            note: "Bus ends in s, so it takes -es: buses — never busses.",
            domain: "travel",
          },
          {
            english: "Many families live in my city.",
            note: "Family ends in consonant + y: one family, many families.",
            domain: "home",
          },
          {
            english: "We buy five eggs and two apples.",
            note: "Most food words just take -s: eggs, apples.",
            domain: "shopping",
          },
          {
            english: "The students read their books in class.",
            note: "Book takes the simple -s plural — the most common rule of all.",
            domain: "education",
          },
          {
            english: "The boys play cricket after school.",
            note: "Boy ends in vowel + y, so it only takes -s: boys.",
            domain: "sport",
          },
          {
            english: "The green leaves fall in October.",
            note: "Leaf ends in f, so it becomes leaves. October keeps its capital.",
            domain: "nature",
          },
          {
            english: "My father sells watches at his shop.",
            note: "Watch ends in ch, so the plural is watches.",
            domain: "work",
          },
          {
            english: "My two phones sit on the table.",
            note: "One phone, two phones. Add -s and read it aloud.",
            domain: "technology",
          },
        ],
        "Nine plurals, nine places — every one made with the five rules.",
      ),
      US(
        [
          {
            situation: "A shopping list",
            example: "“six eggs, two apples, four bananas”",
            note: "Shopping lists are free plural practice.",
          },
          {
            situation: "Counting your family",
            example: "“I have two uncles and three cousins.”",
            note: "Every number over one needs a plural.",
          },
          {
            situation: "In the classroom",
            example: "“Open your books.”",
            note: "Teachers say plurals all day: books, pencils, chairs.",
          },
          {
            situation: "At the bus stop",
            example: "“Two buses are late today.”",
            note: "Bus takes -es — you will hear the extra beat.",
          },
          {
            situation: "Describing your street",
            example: "“My street has ten shops and two banks.”",
            note: "Count your street in English plurals.",
          },
        ],
        "Plurals all day long",
        "You already count things every day — now the spelling catches up.",
      ),
      DL(
        "The school list",
        "Imran packs his school bag. His sister Ayesha checks his list.",
        [
          ["Ayesha", "Imran, your list says “two book”. Fix it."],
          ["Imran", "Two books. Yes — more than one, so I add -s."],
          ["Ayesha", "And three pencil?"],
          ["Imran", "Three pencils. And one ruler."],
          ["Ayesha", "What about your keys?"],
          ["Imran", "Two keys. And my bus card — I take the bus every day."],
          ["Ayesha", "One bus, two buses. Your list is plural-perfect now!"],
        ],
      ),
      CMP(
        "baby → babies vs boy → boys",
        ["consonant + y → -ies", "vowel + y → -s"],
        [
          ["The letter before y", "A consonant: b, c, t…", "A vowel: a, e, o, u…"],
          ["What happens", "y changes to -ies", "Just add -s"],
          ["Examples", "baby → babies, city → cities", "boy → boys, day → days"],
          ["Say it", "ba-bies — the y disappears", "boys — the y stays"],
        ],
        {
          intro: "The letter BEFORE the y decides. Look left before you spell.",
          verdict: "Consonant + y → -ies. Vowel + y → -s. Check the letter before the y every time.",
        },
      ),
      MS(
        [
          [
            "I have two childs.",
            "I have two children.",
            "Child is irregular. Its plural is children — never childs. Lesson 3 teaches the irregular set.",
          ],
          [
            "Three busses pass my school.",
            "Three buses pass my school.",
            "Bus ends in one s; add -es: buses. Busses doubles the s — English does not do that here.",
          ],
          [
            "The two babys are sleeping.",
            "The two babies are sleeping.",
            "Baby ends in consonant + y, so the y changes to -ies: babies.",
          ],
          [
            "I can see five leafs on the table.",
            "I can see five leaves on the table.",
            "Leaf ends in f, so it changes to -ves: leaves. Leaf and knife are the famous pair.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Say the plural out loud",
        "Buses has two beats: bus-es. Watches has two beats: watch-es. Learners who write busses usually never said the word out loud. Say it, hear the extra beat, then write it.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Look at my street. One bus stops. Two buses wait. Three boys ride their cycles. Two girls carry their bags. The shops sell phones and watches. Five trees drop their leaves. Many families live here. My street is never quiet.",
          task: "Read the text two times. Then say five plural nouns from it.",
        },
        writing: {
          task: "Write the plural of these nouns and use three of them in sentences: book, watch, baby, day, box, city, leaf, girl.",
          guide: ["book → ______", "watch → ______", "baby → ______"],
          model: "books · watches · babies · days · boxes · cities · leaves · girls",
        },
        listening: {
          script:
            "One cat, two cats. One bus, two buses. One baby, two babies. One leaf, two leaves. One boy, two boys.",
          task: "Listen and repeat each pair. Clap for the plurals with an extra beat.",
        },
        speaking: {
          task: "Count five things around you. Say each one with a number and its plural.",
          frames: ["I can see two ______.", "My ______ are ______.", "One ______, two ______."],
          checklist: [
            "I counted five things.",
            "I said a plural for every number over one.",
            "I said the -es plurals with two beats.",
          ],
        },
      }),
      LSP(
        [
          gls("singular"),
          gls("plural"),
          gls("Singular means one. Plural means more than one."),
          gls("number"),
          gls("spelling"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Singular means one. Plural means more than one.",
        "Most nouns add -s: cat → cats, book → books.",
        "Words ending in s, x, z, ch or sh add -es: bus → buses, box → boxes.",
        "Consonant + y → -ies: baby → babies. Vowel + y → -s: boy → boys.",
        "Some f and fe words change to -ves: leaf → leaves, knife → knives.",
      ]),
      RV(
        [
          {
            question: "Which word names a person in a family?",
            options: ["uncle", "under", "open"],
            correctIndex: 0,
            explanation: "An uncle is a family word — your father's or mother's brother.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "Words like one, two, three are called…",
            options: ["numbers", "colours", "days"],
            correctIndex: 0,
            explanation: "Numbers tell us how many — you learned them after the colours.",
            from: "Chapter 06 · Lesson 4",
          },
          {
            question: "The words cat, hat and mat form a…",
            options: ["word family", "sentence", "plural"],
            correctIndex: 0,
            explanation: "They share the same ending -at — a word family.",
            from: "Chapter 05 · Lesson 3",
          },
          {
            question: "What does a full stop do?",
            options: ["ends a statement", "starts a question", "names a thing"],
            correctIndex: 0,
            explanation: "A full stop ends a statement — one of the three sentence signals.",
            from: "Chapter 08 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "What is the plural of box?",
            [
              ["a", "boxs"],
              ["b", "boxes"],
              ["c", "boxies"],
            ],
            "b",
            fb(
              "boxes",
              "Box ends in x, so it takes -es: boxes.",
              "Boxs forgets the e. Boxies uses the y rule — but there is no y.",
            ),
            { skill: "grammar", hints: ["Look at the last letter of the word. Is it s, x, z, ch or sh?"] },
          ),
          FB(
            "Write the plural.",
            "one baby → two ___",
            ["babies"],
            fbx(
              "babies",
              "Baby ends in consonant + y, so the y changes to -ies.",
              "Two babys forgets the y rule — the y disappears.",
              { english: "one city, two cities", translation: "The same rule: consonant + y → -ies." },
            ),
            { skill: "grammar", hints: ["Look at the letter before the y."] },
          ),
          MATCH(
            "Match each singular to its plural.",
            [
              ["s1", "bus"],
              ["s2", "city"],
              ["s3", "boy"],
              ["s4", "leaf"],
            ],
            [
              ["p1", "boys"],
              ["p2", "leaves"],
              ["p3", "buses"],
              ["p4", "cities"],
            ],
            [
              ["s1", "p3"],
              ["s2", "p4"],
              ["s3", "p1"],
              ["s4", "p2"],
            ],
            fb(
              "bus → buses, city → cities, boy → boys, leaf → leaves",
              "Each singular finds its plural partner from the five rules.",
              "Every pair follows a different rule — say each one aloud.",
            ),
            { skill: "vocabulary", hints: ["Say each pair out loud and listen for the rule."] },
          ),
          LIS(
            "Listen and answer.",
            "I have one sister and two brothers.",
            "How many brothers do I have?",
            ["two", "2"],
            fb(
              "two",
              "You heard two brothers — the plural with -s.",
              "One sister is singular; two brothers is plural.",
            ),
            { skill: "listening", hints: ["Listen for the number before the family word."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which plural is correct?",
            [
              ["a", "three knifes"],
              ["b", "three knives"],
              ["c", "three knivees"],
            ],
            "b",
            fb(
              "three knives",
              "Knife ends in fe, so it changes to -ves: knives.",
              "Knifes keeps the f. Knivees is not English at all.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "The two babys are happy.",
            ["The two babies are happy."],
            fb(
              "The two babies are happy.",
              "Baby ends in consonant + y, so the plural is babies.",
              "After two, the noun must change its y to -ies.",
            ),
            { skill: "grammar" },
          ),
          FB(
            "Complete with the plural.",
            "My street has two ___ (bus).",
            ["buses"],
            fb(
              "buses",
              "Bus ends in s, so it takes -es: buses.",
              "Bus + s alone is hard to say — English adds the e for the extra beat.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The cities are big and busy.",
            ["The cities are big and busy."],
            fb(
              "The cities are big and busy.",
              "City ends in consonant + y, so the plural is cities.",
              "Citys and cities both sound the same — the spelling follows the rule.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Plural practice",
      instructions:
        "Write the plural of these eight nouns: book, watch, baby, day, box, city, leaf, girl. Then choose three plurals and use each one in a full sentence.",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Find five plural nouns in your home today. Say each one out loud.",
      "Write the five plural rules from memory. Check them against the table.",
      "Count your family in English: every number over one takes a plural.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Irregular Plurals and Countable Nouns
  // =========================================================================
  {
    slug: "ch-10-l-03",
    minutes: 25,
    description:
      "The rule-breakers — men, children, feet, teeth — and the difference between nouns you can count and nouns you cannot.",
    outcomes: [
      "Use ten high-frequency irregular plurals",
      "Explain what countable and uncountable mean",
      "Use a/an and numbers with countable nouns",
      "Use some with uncountable nouns like water and rice",
    ],
    blocks: [
      LI(
        "Some plurals break every rule. Man becomes men. Child becomes children. Foot becomes feet. You will learn these famous rule-breakers one by one. Then you learn to count nouns. Some nouns can be counted: one egg, two eggs. Others cannot: milk, water, rice. That difference changes your grammar.",
        [
          "You can form plurals with the five rules (Lesson 2).",
          "You know the words man, woman, person and baby (Chapter 06 · Lesson 1).",
          "You know food words like bread, milk, rice and water (Chapter 06 · Lesson 3).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "irregular plural", partOfSpeech: "noun", definition: "a plural that breaks the rules: man → men" },
        { word: "countable noun", partOfSpeech: "noun", definition: "a noun you can count: one egg, two eggs" },
        { word: "uncountable noun", partOfSpeech: "noun", definition: "a noun you cannot count: milk, water" },
        { word: "person", partOfSpeech: "noun", definition: "one human being" },
        { word: "food", partOfSpeech: "noun", definition: "what you eat" },
      ]),
      H("Count it or not?"),
      vocGlossary("Countable and uncountable food", [
        { word: "egg", partOfSpeech: "noun", definition: "you can count them: one egg, two eggs" },
        { word: "apple", partOfSpeech: "noun", definition: "you can count them: one apple, three apples" },
        { word: "banana", partOfSpeech: "noun", definition: "you can count them: one banana, six bananas" },
        { word: "water", partOfSpeech: "noun", definition: "you cannot count it — it has no plural" },
        { word: "milk", partOfSpeech: "noun", definition: "you cannot count it — it has no plural" },
        { word: "rice", partOfSpeech: "noun", definition: "you cannot count it — it has no plural" },
        { word: "bread", partOfSpeech: "noun", definition: "you cannot count it — ask for some bread" },
      ]),
      T(
        "Five rules cover most nouns. But some nouns ignore every rule. Man does not become mans. It becomes men. Child does not become childs. It becomes children. English calls these irregular plurals. Learn them like new words — one by one.",
      ),
      {
        type: "definition",
        term: "irregular plural",
        partOfSpeech: "noun",
        definition:
          "An irregular plural is a plural that does not follow the five rules. You must remember it: man → men, child → children.",
        example: {
          english: "Two children play in the garden.",
          translation: "Child → children. No rule helps — memory only.",
        },
      },
      TB(
        "The irregular plurals you must know",
        ["Singular", "Plural", "Watch out"],
        [
          ["man", "men", "not mans"],
          ["woman", "women", "not womans"],
          ["child", "children", "not childs"],
          ["person", "people", "one person, two people"],
          ["foot", "feet", "not feets"],
          ["tooth", "teeth", "not tooths"],
          ["mouse", "mice", "not mouses"],
          ["fish", "fish", "one fish, two fish"],
          ["sheep", "sheep", "one sheep, twenty sheep"],
        ],
        "Say each pair out loud three times: man-men, child-children, foot-feet.",
      ),
      AU(
        "Listen: the irregular pairs",
        "man, men. woman, women. child, children. person, people. foot, feet. tooth, teeth. mouse, mice. fish, fish. sheep, sheep.",
        0.85,
      ),
      AU(
        "Listen: irregulars in sentences",
        "The children play in the garden. Three people are waiting. My feet are cold. Two men work here. The women read books.",
        0.9,
      ),
      ST(
        "Learn an irregular plural in three steps",
        [
          {
            title: "Step 1 — Say the pair aloud",
            text: "Say the singular and the plural together, three times. Your mouth learns the shape.",
            examples: [{ english: "one tooth, two teeth", note: "Say it three times: tooth-teeth, tooth-teeth." }],
          },
          {
            title: "Step 2 — Use it in a true sentence",
            text: "Put the plural into a real sentence about your life. Memory loves full sentences.",
            examples: [
              { english: "Two children live next door.", note: "A true sentence sticks better than a list." },
            ],
          },
          {
            title: "Step 3 — Test yourself tomorrow",
            text: "Cover the plural column and say each pair. Come back the next day and do it again.",
            examples: [
              { english: "person → ? (say it before you look)", note: "person → people. Test, wait, test again." },
            ],
          },
        ],
      ),
      GR(
        "Countable and uncountable nouns",
        "Countable nouns have a plural: one egg, two eggs. You can use a or an with them. Uncountable nouns have no plural and no a or an: water, milk, rice, bread. Use some with uncountable nouns: some water, some bread.",
        [
          {
            english: "I eat an egg and two bananas.",
            translation: "Eggs and bananas are countable — they take numbers and plurals.",
          },
          {
            english: "I drink milk. I eat rice.",
            translation: "Milk and rice are uncountable — no a, no plural.",
          },
          {
            english: "I want some water, please.",
            translation: "Some works with uncountable nouns when you want a bit.",
          },
        ],
        [
          "Fish and sheep look the same in singular and plural: one fish, two fish. One sheep, twenty sheep.",
        ],
      ),
      EXD(
        "Irregular plurals and counting in real life",
        [
          {
            english: "The children play in the park after school.",
            note: "Child → children. The most famous irregular plural of all.",
            domain: "everyday",
          },
          {
            english: "Three men and two women work in this shop.",
            note: "Man → men and woman → women. Both change their vowel.",
            domain: "shopping",
          },
          {
            english: "My feet are cold in winter.",
            note: "Foot → feet. The vowel changes from oo to ee.",
            domain: "health",
          },
          {
            english: "The children brush their teeth every morning.",
            note: "Tooth → teeth. One tooth, thirty-two teeth.",
            domain: "home",
          },
          {
            english: "I eat an egg and some bread for breakfast.",
            note: "Egg is countable — an egg. Bread is uncountable — some bread.",
            domain: "food",
          },
          {
            english: "Five people live in my grandmother's home.",
            note: "Person → people. Say one person, two people.",
            domain: "family",
          },
          {
            english: "Two mice live behind the garden wall.",
            note: "Mouse → mice. The plural changes the whole word.",
            domain: "nature",
          },
          {
            english: "The farmer counts his sheep before he sleeps.",
            note: "Sheep stays sheep in the plural — no change at all.",
            domain: "work",
          },
          {
            english: "The students count the fish in their book: one fish, two fish.",
            note: "Fish stays fish — the plural looks the same.",
            domain: "education",
          },
        ],
        "Nine sentences with the words that break the rules — and the ones you cannot count.",
      ),
      US(
        [
          {
            situation: "At the market",
            example: "“Six eggs, some milk, and two apples, please.”",
            note: "Count the countable; say some for the rest.",
          },
          {
            situation: "At the doctor",
            example: "“My teeth hurt and my feet are cold.”",
            note: "Body words come in irregular plurals: teeth, feet.",
          },
          {
            situation: "A family photo",
            example: "“Five people — two men, three women.”",
            note: "People is already plural. Never say one people.",
          },
          {
            situation: "In the classroom",
            example: "“Children, open your books!”",
            note: "Teachers say children all day — now you know why it sounds like that.",
          },
          {
            situation: "Ordering food",
            example: "“I want some rice and some water.”",
            note: "Rice and water are uncountable — some is the helper word.",
          },
        ],
        "Rule-breakers and counters in daily life",
        "Irregular plurals and uncountable nouns come up every time you eat, shop or visit the doctor.",
      ),
      DL(
        "At the market",
        "Amal buys food for the week. The shopkeeper counts with her.",
        [
          ["Amal", "Good morning! I need eggs, please."],
          ["Shopkeeper", "How many?"],
          ["Amal", "Six eggs. And some milk, please."],
          ["Shopkeeper", "Milk — of course. Anything else?"],
          ["Amal", "Some rice and one apple. No — two apples!"],
          ["Shopkeeper", "Two apples. You count very well!"],
          ["Amal", "Thank you. My mother says I eat like three children!"],
        ],
      ),
      CMP(
        "countable vs uncountable",
        ["Countable — you can count it", "Uncountable — you cannot count it"],
        [
          ["The test", "one, two, three… it works", "one, two, three… it does not work"],
          ["Plural", "Has a plural: eggs, apples", "No plural: milk, water, rice"],
          ["With a / an", "an egg, an apple", "never a milk, never a bread"],
          ["How to ask for some", "two eggs, three bananas", "some milk, some rice, some bread"],
        ],
        {
          intro: "Countable nouns line up for counting. Uncountable nouns flow like water.",
          verdict: "Try counting: one, two, three. If it works, the noun is countable. If not, use some.",
        },
      ),
      MS(
        [
          [
            "I have two childs.",
            "I have two children.",
            "Child is irregular. Its plural is children — no rule, only memory.",
          ],
          [
            "One people is waiting outside.",
            "One person is waiting outside.",
            "People is already plural. Say one person, two people.",
          ],
          [
            "I want a bread, please.",
            "I want some bread, please.",
            "Bread is uncountable. It takes no a — use some bread.",
          ],
          [
            "Three womans work in the school.",
            "Three women work in the school.",
            "Woman is irregular: one woman, two women. The a changes to e.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "People is plural",
        "One people is wrong. Say one person, two people. This is one of the most common beginner mistakes in English. Fix it once, and you sound years more fluent.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My grandmother's home is busy. Five people live there. The children play in the garden. My grandmother cooks rice for six people. We drink water and milk. My grandfather counts his sheep — one sheep, two sheep… he falls asleep at twenty.",
          task: "Read the text two times. Then say four irregular plurals from it.",
        },
        writing: {
          task: "Write three sentences with three different irregular plurals. Use a number or the word some.",
          guide: ["Two ______ play outside.", "I eat some ______.", "My ______ are cold."],
          model: "Two children play outside. I eat some rice. My feet are cold.",
        },
        listening: {
          script:
            "One man, two men. One child, two children. One foot, two feet. One tooth, two teeth. One person, two people.",
          task: "Listen and repeat each pair. Then cover the plurals and say them from memory.",
        },
        speaking: {
          task: "Say three true sentences about your family or your home. Use an irregular plural in each one.",
          frames: ["Two ______ live near me.", "The ______ are ______.", "I eat some ______."],
          checklist: [
            "I used three irregular plurals.",
            "I never said childs or mans.",
            "I used some with an uncountable noun at least once.",
          ],
        },
      }),
      LSP(
        [
          gls("irregular plural"),
          gls("countable noun"),
          gls("uncountable noun"),
          gls("person"),
          gls("food"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Irregular plurals break the rules: man → men, woman → women, child → children.",
        "Foot → feet, tooth → teeth, person → people, mouse → mice — learn them one by one.",
        "Fish and sheep stay the same: one fish, two fish; one sheep, twenty sheep.",
        "People is already plural: one person, two people.",
        "Countable nouns take a, an and plurals. Uncountable nouns like milk, water and rice take some.",
      ]),
      RV(
        [
          {
            question: "Which of these is a food word?",
            options: ["bread", "blue", "chair"],
            correctIndex: 0,
            explanation: "Bread is a food word — one of your first vocabulary groups.",
            from: "Chapter 06 · Lesson 3",
          },
          {
            question: "Action words tell us…",
            options: ["what people do", "what people own", "how people look"],
            correctIndex: 0,
            explanation: "Action words are verbs — they tell us what people do.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "What comes at the end of a statement?",
            options: ["a full stop", "a question mark", "a capital letter"],
            correctIndex: 0,
            explanation: "Statements end with a full stop — the voice goes down.",
            from: "Chapter 08 · Lesson 1",
          },
          {
            question: "Man, woman, boy and girl are…",
            options: ["people words", "food words", "place words"],
            correctIndex: 0,
            explanation: "They name people — your first word group.",
            from: "Chapter 06 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "What is the plural of child?",
            [
              ["a", "childs"],
              ["b", "children"],
              ["c", "childrens"],
            ],
            "b",
            fb(
              "children",
              "Child is irregular — the plural is children.",
              "Childs and childrens are not English words.",
            ),
            { skill: "vocabulary", hints: ["This plural breaks all the rules. It starts with childr-."] },
          ),
          FB(
            "Complete with one word.",
            "Two ___ (man) work at my school.",
            ["men"],
            fb(
              "men",
              "Man is irregular: one man, two men.",
              "Mans is not English — the a changes to e.",
            ),
            { skill: "vocabulary", hints: ["The vowel inside the word changes. Say the pair aloud."] },
          ),
          MATCH(
            "Match each singular to its irregular plural.",
            [
              ["i1", "person"],
              ["i2", "foot"],
              ["i3", "tooth"],
              ["i4", "mouse"],
            ],
            [
              ["r1", "teeth"],
              ["r2", "people"],
              ["r3", "mice"],
              ["r4", "feet"],
            ],
            [
              ["i1", "r2"],
              ["i2", "r4"],
              ["i3", "r1"],
              ["i4", "r3"],
            ],
            fb(
              "person → people, foot → feet, tooth → teeth, mouse → mice",
              "These four plurals change their vowels — say each pair aloud.",
              "None of them simply add -s — they are all rule-breakers.",
            ),
            { skill: "vocabulary", hints: ["Most of these plurals change a vowel: oo becomes ee."] },
          ),
          LIS(
            "Listen and answer.",
            "I drink some milk with my rice.",
            "What do I drink?",
            ["milk", "some milk"],
            fb(
              "some milk",
              "You heard some milk — milk is uncountable, so it takes some.",
              "You cannot count milk — no plural, no a.",
            ),
            { skill: "listening", hints: ["Listen for the uncountable drink."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "She eats a bread every day."],
              ["b", "She eats some bread every day."],
              ["c", "She eats breads every day."],
            ],
            "b",
            fb(
              "She eats some bread every day.",
              "Bread is uncountable — no a and no plural. Some bread is correct.",
              "A bread and breads are impossible — bread has no plural form.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "One people is at the door.",
            ["One person is at the door."],
            fb(
              "One person is at the door.",
              "People is plural. For one, say person.",
              "One people is one of the most common beginner mistakes in English.",
            ),
            { skill: "grammar" },
          ),
          FB(
            "Complete with some or a.",
            "I want ___ rice, please.",
            ["some"],
            fb(
              "some",
              "Rice is uncountable, so it takes some — never a or an.",
              "A rice is impossible — you cannot count rice one by one.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The children brush their teeth.",
            ["The children brush their teeth."],
            fb(
              "The children brush their teeth.",
              "Two irregular plurals in one sentence: children and teeth.",
              "Childs and tooths are not English.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Irregular sentences",
      instructions:
        "Write five sentences. Use five different irregular plurals — one per sentence. Add a number or the word some to each sentence. Example: “Two children play in my street.”",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Write the ten irregular pairs from memory: man-men, woman-women… Check them against the table.",
      "Look in your kitchen. Write three countable things and three uncountable things.",
      "Say one person, two people in a real sentence today.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Articles: A, An and The
  // =========================================================================
  {
    slug: "ch-10-l-04",
    minutes: 30,
    description:
      "The three little words before nouns: a and an chosen by sound, the for the one you both know — and when English uses no article at all.",
    outcomes: [
      "Choose between a and an by sound",
      "Use the for specific, known things",
      "Recognise when no article is needed",
      "Avoid the famous traps: an hour, a university",
    ],
    blocks: [
      LI(
        "Three tiny words sit in front of English nouns: a, an and the. They are small, but they are everywhere. You will learn to choose them by sound, not by spelling. An hour. A university. You will also learn when English uses no article at all.",
        [
          "You know the vowels: A, E, I, O, U (Chapter 03 · Lesson 1).",
          "You can hear the first sound of a word (Chapter 04 · Lesson 2).",
          "You know that countable nouns take a or an (Lesson 3).",
        ],
      ),
      vocGlossary("Article words for this lesson", [
        { word: "article", partOfSpeech: "noun", definition: "a little word before a noun: a, an, the" },
        { word: "vowel", partOfSpeech: "noun", definition: "the letters A, E, I, O, U — and their sounds" },
        { word: "consonant", partOfSpeech: "noun", definition: "every letter that is not a vowel" },
        { word: "sound", partOfSpeech: "noun", definition: "what you hear when you say a word" },
        { word: "word", partOfSpeech: "noun", definition: "one unit of meaning: one letter or more" },
      ]),
      H("Three little words"),
      T(
        "A, an and the are articles. They come before nouns. A and an mean one. Use them with singular countable nouns. The points at one specific thing. Sometimes English uses no article at all. Ask one question: does your listener know which one you mean?",
      ),
      {
        type: "definition",
        term: "article",
        partOfSpeech: "noun",
        definition:
          "An article is a little word before a noun. English has three: a, an and the.",
        example: {
          english: "I see a cat. The cat is black.",
          translation: "A cat first — any cat. The cat next — that one cat.",
        },
      },
      ST(
        "Choose your article in three steps",
        [
          {
            title: "Step 1 — Is the noun countable and singular?",
            text: "First check the noun. Is it one thing you can count? Then a or an is possible. Is it uncountable, like milk? Then no a or an.",
            examples: [
              { english: "I eat an apple. I drink milk.", note: "Apple: countable → an. Milk: uncountable → no article." },
            ],
          },
          {
            title: "Step 2 — Listen to the next sound",
            text: "A and an choose by sound. A vowel sound takes an: an apple, an egg. A consonant sound takes a: a cat, a book.",
            examples: [{ english: "an apple / a cat", note: "Say the next word aloud. Your ears decide." }],
          },
          {
            title: "Step 3 — Does your listener know which one?",
            text: "If both of you know the thing, use the: the sun, the door, the cat we saw. If it is new to them, use a or an.",
            examples: [
              { english: "I have a dog. The dog is black.", note: "New dog first — a. Known dog next — the." },
            ],
          },
        ],
      ),
      GR(
        "The article rules",
        "Use a before consonant sounds and an before vowel sounds. Use the when both speakers know which one. Use no article for plurals in general statements and for most names.",
        [
          {
            english: "I see a cat. The cat is sleeping.",
            translation: "First mention: a. Second mention: the.",
          },
          { english: "She is an engineer.", translation: "Engineer starts with a vowel sound: an." },
          { english: "I like books.", translation: "Books in general — no article." },
        ],
        [
          "Choose by sound, not spelling: an hour (the h is silent), a university (it starts with a yoo sound).",
          "Days and months take no article: Monday, March. Say on Monday, not on the Monday.",
        ],
      ),
      TB(
        "Choosing fast",
        ["Situation", "Article", "Example"],
        [
          ["First mention, one of many", "a / an", "I see a cat."],
          ["Both know which one", "the", "The cat is sleeping."],
          ["Plural in a general statement", "—", "Cats sleep a lot."],
          ["One unique thing", "the", "the sun, the moon"],
          ["Days and months", "—", "on Monday, in March"],
          ["Most names of people and cities", "—", "Sara, London"],
        ],
        "Six situations cover almost every noun you will meet this month.",
      ),
      AU(
        "Listen: a or an?",
        "a cat. an apple. an egg. a book. an hour. a university. A before consonant sounds. An before vowel sounds.",
        0.85,
      ),
      AU(
        "Listen: articles in sentences",
        "I see a cat. The cat is black. I see an apple. The apple is red. She is an engineer. He is a teacher. The sun is hot. I like books.",
        0.9,
      ),
      EXD(
        "Articles in real life",
        [
          {
            english: "I have a dog. The dog is brown.",
            note: "New information takes a. Known information takes the.",
            domain: "family",
          },
          {
            english: "She is an engineer at a phone company.",
            note: "Jobs take a or an. Engineer starts with a vowel sound.",
            domain: "work",
          },
          {
            english: "I eat an apple and some bread.",
            note: "An before the vowel sound of apple. Bread is uncountable — no article.",
            domain: "food",
          },
          {
            english: "The sun is hot today.",
            note: "There is only one sun — unique things take the.",
            domain: "nature",
          },
          {
            english: "I wait for a bus. The bus is late.",
            note: "First the bus is new information, then it is known.",
            domain: "travel",
          },
          {
            english: "Close the door, please.",
            note: "We both know which door — the one right here.",
            domain: "home",
          },
          {
            english: "My mother is a teacher.",
            note: "Teacher starts with a consonant sound: a teacher.",
            domain: "education",
          },
          {
            english: "I read for an hour every evening.",
            note: "Hour starts with a vowel sound — the h is silent. An hour is correct.",
            domain: "everyday",
          },
          {
            english: "The shop near my home sells phones.",
            note: "We both know the shop — the one near my home. The points at it.",
            domain: "shopping",
          },
        ],
        "Nine sentences, three little words — chosen by sound and by what your listener knows.",
      ),
      US(
        [
          {
            situation: "Meeting someone new",
            example: "“I am a student. I live in a small home.”",
            note: "Jobs and first mentions take a or an.",
          },
          {
            situation: "In the classroom",
            example: "“Open the door, please. Close the window.”",
            note: "Classroom commands use the — everyone knows which door.",
          },
          {
            situation: "At the market",
            example: "“The apples are good today.”",
            note: "The seller points at the apples — you both see them.",
          },
          {
            situation: "Talking about your family",
            example: "“My sister is a teacher. The school is near our home.”",
            note: "A or an for the job. The for the school both of you know.",
          },
          {
            situation: "Reading the weather",
            example: "“The sun is hot today. The sky is blue.”",
            note: "Unique things take the — one sun, one sky.",
          },
        ],
        "Articles all day long",
        "Every sentence you say this week will have an article in it — or a good reason not to.",
      ),
      DL(
        "The new dog",
        "Omar tells Sara about a dog near his house.",
        [
          ["Omar", "Sara, I saw a dog near my house."],
          ["Sara", "A dog? What colour is the dog?"],
          ["Omar", "The dog is white and brown. It is big."],
          ["Sara", "Is it an old dog?"],
          ["Omar", "No, it is a young dog. Maybe one year old."],
          ["Sara", "The dog needs a home. Ask your family!"],
        ],
      ),
      CMP(
        "a / an vs the",
        ["a / an — one, new", "the — we know which one"],
        [
          ["Meaning", "One of many. New to the listener.", "One specific thing. Known to both."],
          ["When to use it", "First mention, jobs, any one thing", "Second mention, unique things, shared things"],
          ["Example", "“I see a cat.”", "“The cat is black.”"],
          ["Ask yourself", "Does my listener know it? No.", "Does my listener know it? Yes."],
        ],
        {
          intro: "The article is a message to your listener. A says: this is new. The says: you know which one.",
          verdict: "New thing → a or an. Known thing → the. Say both sentences and feel the difference.",
        },
      ),
      MS(
        [
          [
            "I eat a apple every day.",
            "I eat an apple every day.",
            "Apple starts with a vowel sound. Use an before vowel sounds.",
          ],
          [
            "She studies at an university.",
            "She studies at a university.",
            "University starts with a yoo sound — a consonant sound. Use a.",
          ],
          [
            "We play cricket on the Monday.",
            "We play cricket on Monday.",
            "Days take no article. Say on Monday, not on the Monday.",
          ],
          [
            "I go to the school every day.",
            "I go to school every day.",
            "You go to school as a student — a general idea, no article. Use the school only for the building.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "The two famous traps",
        "An hour. A university. Hour starts with a vowel sound, because the h is silent. University starts with a consonant sound, because u here says yoo. Do not trust the letter. Trust the sound. Say the word aloud and let your ears choose.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "I live in a small city. The city is busy. I study at a school near my home. My teacher is an old friend of my mother. Every morning, I eat an egg and some bread. Then I take a bus. The bus is old but the driver is kind. On Monday, we visit a library. The library has a garden.",
          task: "Read the text two times. Then find one a, one an and two the words — and say why each one is there.",
        },
        writing: {
          task: "Write five sentences about your day. Use a once, an once, the once — and no article once.",
          guide: ["I see a ______.", "I eat an ______.", "The ______ is ______.", "I like ______.", "I go to ______ on Monday."],
          model: "I see a bird. I eat an egg. The bird is small. I like books. I go to school on Monday.",
        },
        listening: {
          script: "a cat, an apple, an egg, a book, an hour, a university. Listen again: an hour, a university.",
          task: "Listen and repeat. Two of these are famous traps — which two?",
        },
        speaking: {
          task: "Say three sentences about things you can see. Introduce a thing with a or an, then say more about it with the.",
          frames: ["I see a ______.", "The ______ is ______.", "I see an ______."],
          checklist: [
            "I chose a or an by sound.",
            "I used the for the second mention.",
            "I said the word aloud before choosing.",
          ],
        },
      }),
      LSP(
        [
          gls("article"),
          gls("Use a before consonant sounds and an before vowel sounds."),
          gls("The points at one specific thing."),
          gls("vowel"),
          gls("sound"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A, an and the are articles. They come before nouns.",
        "Use a before consonant sounds and an before vowel sounds.",
        "Choose by sound, not spelling: an hour, a university.",
        "The points at one specific thing both speakers know.",
        "Plurals in general statements take no article: I like books. Days and months too: on Monday, in March.",
      ]),
      RV(
        [
          {
            question: "The vowels are…",
            options: ["A, E, I, O, U", "B, C, D, F, G", "the last five letters"],
            correctIndex: 0,
            explanation: "A, E, I, O and U are the vowels — every other letter is a consonant.",
            from: "Chapter 03 · Lesson 1",
          },
          {
            question: "Reading uses letter…",
            options: ["sounds", "names", "colours"],
            correctIndex: 0,
            explanation: "Reading joins letter sounds, not letter names.",
            from: "Chapter 04 · Lesson 1",
          },
          {
            question: "In English statements, the verb comes…",
            options: ["after the subject", "before the subject", "at the very end"],
            correctIndex: 0,
            explanation: "English is subject, verb, object — the verb follows the subject.",
            from: "Chapter 08 · Lesson 5",
          },
          {
            question: "What is a noun?",
            options: ["a naming word", "an action word", "a describing word"],
            correctIndex: 0,
            explanation: "A noun is the name of a person, place, animal or thing.",
            from: "Chapter 07 · Lesson 2",
          },
        ],
        { title: "Look back — check your base", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "I eat a apple."],
              ["b", "I eat an apple."],
              ["c", "I eat apple."],
            ],
            "b",
            fb(
              "I eat an apple.",
              "Apple starts with a vowel sound, so it takes an.",
              "A apple ignores the vowel sound. I eat apple misses the article.",
            ),
            { skill: "grammar", hints: ["Say the word after the article. Does it start with a vowel sound?"] },
          ),
          FB(
            "Complete with a or an.",
            "She is ___ engineer.",
            ["an"],
            fbx(
              "an",
              "Engineer starts with a vowel sound (e-), so it takes an.",
              "A engineer breaks the sound rule — listen, do not look.",
              { english: "He is an old man.", translation: "An before the vowel sound o-." },
            ),
            { skill: "grammar", hints: ["Say engineer out loud. What is the first sound you hear?"] },
          ),
          MCQ(
            "The sun, the moon and the sky take the. Why?",
            [
              ["a", "Because they are unique — there is only one"],
              ["b", "Because they are new to the listener"],
              ["c", "Because they are plurals"],
            ],
            "a",
            fb(
              "Because they are unique — there is only one",
              "Unique things take the: one sun, one moon, one sky.",
              "A and an mean one of many — the sun is not one of many suns.",
            ),
            { skill: "grammar", hints: ["How many suns do you see in the sky?"] },
          ),
          LIS(
            "Listen and answer.",
            "I see an elephant at the zoo.",
            "What animal do I see?",
            ["an elephant", "elephant"],
            fb(
              "an elephant",
              "You heard an elephant — elephant starts with a vowel sound.",
              "Elephant begins with e, a vowel — an comes before it.",
            ),
            { skill: "listening", hints: ["Listen for the animal word. It starts with a vowel sound."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          CORR(
            "Find and correct the mistake.",
            "My mother is a engineer.",
            ["My mother is an engineer."],
            fb(
              "My mother is an engineer.",
              "Engineer starts with a vowel sound, so the article is an.",
              "Jobs need a or an — and the sound decides which one.",
            ),
            { skill: "grammar" },
          ),
          FB(
            "Complete with a, an or the.",
            "We have a cat. ___ cat is white.",
            ["The"],
            fb(
              "The",
              "Second mention takes the — you both know the cat now.",
              "A cat again would sound like a new, different cat.",
            ),
            { skill: "grammar" },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "I like the books."],
              ["b", "I like books."],
              ["c", "I like a books."],
            ],
            "b",
            fb(
              "I like books.",
              "A general statement about plurals takes no article.",
              "The books means specific books. A books is impossible — a is singular.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I read for an hour every day.",
            ["I read for an hour every day."],
            fb(
              "I read for an hour every day.",
              "Hour starts with a vowel sound — the h is silent — so it takes an.",
              "A hour is wrong: the letter h is there, but the sound is not.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "The article chooser",
      instructions:
        "Complete these sentences with a, an, the or nothing: “___ water is cold.” “She has ___ orange.” “I like ___ dogs.” “___ sun is hot.” “He is ___ teacher.” Then write two sentences of your own: one with a or an, and one with the.",
      minWords: 15,
      maxWords: 60,
    },
    homework: [
      "Read any English text today. Circle every a, an and the you find.",
      "Say these aloud and choose the article: hour, university, egg, book, apple, cat.",
      "Write three sentences about your street. Use the for the things your neighbour knows.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Nouns in Real Sentences and Chapter Review
  // =========================================================================
  {
    slug: "ch-10-l-05",
    minutes: 25,
    description:
      "Nouns, plurals and articles together in real sentences — then the Chapter 10 review.",
    outcomes: [
      "Write correct sentences mixing plurals and articles",
      "Edit noun and article mistakes with reasons",
      "Use the noun checklist before you finish a sentence",
      "Answer the Chapter 10 review questions",
    ],
    blocks: [
      LI(
        "This is the chapter review. You know common and proper nouns. You know the five plural rules and the irregular plurals. You can count nouns and choose articles by sound. Now everything comes together in real sentences. Then you take the Chapter 10 review.",
        [
          "You can use capital letters for proper nouns (Lesson 1).",
          "You can form plurals with the five rules (Lesson 2).",
          "You know the irregular plurals and the word some (Lesson 3).",
          "You can choose a, an and the by sound and situation (Lesson 4).",
        ],
      ),
      vocGlossary("Review words for this lesson", [
        { word: "noun", partOfSpeech: "noun", definition: "a word that names a person, place, animal or thing" },
        { word: "article", partOfSpeech: "noun", definition: "a little word before a noun: a, an, the" },
        { word: "singular", partOfSpeech: "noun", definition: "the form for one thing" },
        { word: "plural", partOfSpeech: "noun", definition: "the form for more than one" },
        { word: "countable noun", partOfSpeech: "noun", definition: "a noun you can count: one egg, two eggs" },
        { word: "uncountable noun", partOfSpeech: "noun", definition: "a noun you cannot count: milk, water" },
      ]),
      H("The whole noun machine in one lesson"),
      T(
        "A noun sentence has moving parts. Is the noun proper? Give it a capital letter. Is it plural? Check the five rules — or the irregular list. Is it countable? Choose an article. Ask these questions in order, and the sentence builds itself.",
      ),
      {
        type: "definition",
        term: "noun",
        partOfSpeech: "noun",
        definition:
          "A noun is the name of a person, place, animal or thing.",
        example: {
          english: "The children eat apples.",
          translation: "Children and apples are both nouns — one irregular plural, one regular.",
        },
      },
      ST(
        "Build a noun sentence in three steps",
        [
          {
            title: "Step 1 — Choose your noun",
            text: "Pick the thing you want to talk about. Ask: is it a person, a place or a thing? Can I count it?",
            examples: [
              { english: "apple → countable. water → uncountable.", note: "Countable first — it decides your article." },
            ],
          },
          {
            title: "Step 2 — Choose the number and the article",
            text: "One apple? An apple or the apple. More than one? Apples — no article in general statements. Uncountable? Some water.",
            examples: [
              { english: "I eat an apple. I drink some water.", note: "The noun type chooses the little word." },
            ],
          },
          {
            title: "Step 3 — Check spelling and capitals",
            text: "More than one? Apply the plural rule. Is it a name? Capital letter. Read the sentence aloud at the end.",
            examples: [
              { english: "Two babies play in Mumbai.", note: "Plural rule plus capital letter in one sentence." },
            ],
          },
        ],
      ),
      GR(
        "The noun checklist",
        "Before you finish a noun sentence, check four things: proper noun — capital letter; more than one — correct plural; uncountable — some, not a; article — a or an by sound, the for known things.",
        [
          {
            english: "The children eat apples in the garden.",
            translation: "Irregular plural + regular plural + the for a known place.",
          },
          {
            english: "I want an egg and some milk.",
            translation: "An before a vowel sound; some before an uncountable noun.",
          },
          {
            english: "My friend Sara lives in London.",
            translation: "Names are proper nouns — capital letters.",
          },
        ],
        [
          "Fish and sheep never change: two fish, ten sheep. Days and months take no article: on Friday, in June.",
        ],
      ),
      TB(
        "Common fixes",
        ["Wrong", "Right", "Why"],
        [
          ["I have two cat.", "I have two cats.", "Numbers above one need a plural."],
          ["The London is big.", "London is big.", "City names take no article."],
          ["She is teacher.", "She is a teacher.", "Jobs take a or an."],
          ["I want a bread.", "I want some bread.", "Bread is uncountable — use some."],
        ],
        "Four fixes, four lessons — this table is the whole chapter in one look.",
      ),
      AU(
        "Listen: the noun machine",
        "a cat, two cats. a child, two children. an apple, some bread. a city, London. a teacher, the teacher.",
        0.85,
      ),
      AU(
        "Listen: noun sentences",
        "The children eat apples. A man is waiting at the bus stop. I need two eggs and some milk. My friend Sara lives in London.",
        0.9,
      ),
      EXD(
        "The full system in real sentences",
        [
          {
            english: "The children eat apples in the garden.",
            note: "Irregular plural + regular plural + the for the known garden.",
            domain: "family",
          },
          {
            english: "A man is waiting at the bus stop.",
            note: "First mention takes a. The bus stop is known — the.",
            domain: "travel",
          },
          {
            english: "I need two eggs and some milk.",
            note: "Countable eggs with a number; uncountable milk with some.",
            domain: "shopping",
          },
          {
            english: "My friend Sara works in a hospital in Delhi.",
            note: "Friend is common — small letter. Sara and Delhi are proper nouns.",
            domain: "work",
          },
          {
            english: "The students open their books on Monday.",
            note: "A plural with the, and a day with no article — two rules in one sentence.",
            domain: "education",
          },
          {
            english: "We watch the moon from our window.",
            note: "The moon is unique — one moon, so the.",
            domain: "home",
          },
          {
            english: "Two women sell fish at the market.",
            note: "Woman → women. Fish stays fish — no change.",
            domain: "food",
          },
          {
            english: "My teeth hurt after the game.",
            note: "Tooth → teeth — an irregular plural about health.",
            domain: "health",
          },
          {
            english: "An hour on my phone, and my mother is not happy!",
            note: "An hour — the famous silent-h trap, live at home.",
            domain: "technology",
          },
        ],
        "Nine sentences that use the whole chapter — capitals, plurals, counting and articles together.",
      ),
      US(
        [
          {
            situation: "The honest shopping list",
            example: "“six eggs, four bananas, some milk, some rice”",
            note: "Count the countables; use some for the rest — Lesson 3 at work.",
          },
          {
            situation: "A message to your teacher",
            example: "“I am sick. My teeth hurt. I stay at home today.”",
            note: "Irregular plurals and no-article places in one short message.",
          },
          {
            situation: "Introducing a friend",
            example: "“This is Sara. She is an engineer.”",
            note: "Names take no article; jobs take a or an.",
          },
          {
            situation: "Planning the week",
            example: "“On Monday we clean the house. On Friday we play cricket.”",
            note: "Days take no article; the house is the known one.",
          },
          {
            situation: "At the market",
            example: "“How many eggs? — Six, please. And some bread.”",
            note: "Numbers for countables, some for the rest.",
          },
        ],
        "The noun system in daily life",
        "Every list, message and plan you make this week is chapter practice.",
      ),
      DL(
        "The honest shopping list",
        "Amal and her father plan the weekly shopping.",
        [
          ["Father", "Amal, write the list. What do we need?"],
          ["Amal", "Six eggs, two apples and some milk."],
          ["Father", "Good. Eggs and apples — you counted them. Milk?"],
          ["Amal", "Some milk. We cannot count milk, Father."],
          ["Father", "Right! And rice?"],
          ["Amal", "Some rice. And one bread — no! Some bread."],
          ["Father", "Ha! You learn fast. Bread is uncountable."],
          ["Amal", "The list is ready. Can we buy an ice cream?"],
          ["Father", "One ice cream for my best shopper!"],
        ],
      ),
      CMP(
        "dogs vs the dogs",
        ["Plural, general — no article", "The + plural — specific ones"],
        [
          ["Meaning", "All dogs, dogs in general", "Particular dogs we both know"],
          ["Example", "“I like dogs.”", "“The dogs next door are loud.”"],
          ["Question it answers", "Do you like dogs at all?", "Which dogs do you mean?"],
          ["More examples", "Books are good. Cats sleep a lot.", "The books on my table. The cats in our street."],
        ],
        {
          intro:
            "One small word changes everything. I like dogs is about all dogs. I like the dogs is about certain dogs.",
          verdict: "General statement about plurals → no article. Specific ones you both know → the.",
        },
      ),
      MS(
        [
          [
            "I have two childs.",
            "I have two children.",
            "Child is irregular: the plural is children. Never childs, never childrens.",
          ],
          [
            "She is a engineer.",
            "She is an engineer.",
            "Engineer starts with a vowel sound. Use an before vowel sounds.",
          ],
          [
            "The Monday is my busy day.",
            "Monday is my busy day.",
            "Days take no article. Say on Monday, every Monday — never the Monday.",
          ],
          [
            "I drink a milk every morning.",
            "I drink milk every morning.",
            "Milk is uncountable. No a, no plural — or say some milk.",
          ],
        ],
        "Chapter review mistakes",
      ),
      N(
        "Read it aloud at the end",
        "Your ears are your best teacher. Two childs sounds wrong the moment you say it. A apple sounds wrong too. Say every sentence out loud before you write it down. Trust your ears, not your eyes.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Amal. I live in a big city. Every morning I go to the market with a list. Today the list says: six eggs, four bananas, some milk and some rice. I buy the eggs from an old man. He knows my family. His son sells fish: one fish, two fish — fish never changes. On Monday we eat bread and eggs. The bread is warm. The city is busy. My list is short, but my English is growing.",
          task: "Read the text two times. Then say three plurals, one article rule and one proper noun from it.",
        },
        writing: {
          task: "Write your own shopping list: four countable things with numbers, and two uncountable things with some. Then write two sentences about your list.",
          guide: ["______ eggs", "some ______", "I buy ______ from the ______."],
          model: "six eggs · two apples · some milk · some rice — I buy the eggs from an old man. The milk is cold.",
        },
        listening: {
          script:
            "Two children wait at the bus stop. A woman gives them an apple each. The children say thank you. An hour later, the bus comes.",
          task: "Listen and answer: how many children are there, and what fruit do they get?",
        },
        speaking: {
          task: "Describe your kitchen or your bag: three countable things and two uncountable things.",
          frames: ["I have two ______.", "I have some ______.", "The ______ is ______."],
          checklist: [
            "I used numbers with countable nouns.",
            "I used some with uncountable nouns.",
            "I read my sentences aloud at the end.",
          ],
        },
      }),
      LSP(
        [
          gls("noun"),
          gls("article"),
          gls("Singular means one. Plural means more than one."),
          gls("Use a before consonant sounds and an before vowel sounds."),
          gls("The points at one specific thing."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Proper nouns take capital letters: Sara, Mumbai, Monday, March, English.",
        "Most plurals add -s. Use -es after s, x, z, ch, sh. Mind the y and the f rules.",
        "Irregular plurals break the rules: children, men, women, feet, teeth, people.",
        "Countable nouns take a, an and numbers. Uncountable nouns take some: some milk, some bread.",
        "The points at one specific thing both speakers know.",
        "Plurals in general statements take no article: I like books. Days and months too: on Monday, in March.",
      ]),
      RV(
        [
          {
            question: "Which noun needs a capital letter?",
            options: ["city", "London", "street"],
            correctIndex: 1,
            explanation: "London is a proper noun — the name of one city. City and street are common nouns.",
            from: "Chapter 10 · Lesson 1",
          },
          {
            question: "What is the plural of baby?",
            options: ["babys", "babies", "babyes"],
            correctIndex: 1,
            explanation: "Baby ends in consonant + y, so the y changes to -ies.",
            from: "Chapter 10 · Lesson 2",
          },
          {
            question: "One person, two…",
            options: ["people", "persons", "peoples"],
            correctIndex: 0,
            explanation: "Person has an irregular plural: people. Say one person, two people.",
            from: "Chapter 10 · Lesson 3",
          },
          {
            question: "Which pair is correct?",
            options: ["an hour, a university", "a hour, an university", "an hour, an university"],
            correctIndex: 0,
            explanation: "Hour starts with a vowel sound; university starts with a yoo sound. Choose by sound.",
            from: "Chapter 10 · Lesson 4",
          },
          {
            question: "Which sentence is a general statement?",
            options: ["I like dogs.", "I like the dogs next door.", "The dogs are hungry."],
            correctIndex: 0,
            explanation: "I like dogs talks about all dogs — plurals in general take no article.",
            from: "Chapter 10 · Lesson 4",
          },
          {
            question: "A noun is the name of…",
            options: ["a person, place, animal or thing", "an action", "a describing word"],
            correctIndex: 0,
            explanation: "A noun names a person, place, animal or thing — the Chapter 07 definition, still true.",
            from: "Chapter 07 · Lesson 2",
          },
        ],
        {
          title: "Chapter 10 review — the whole chapter",
          intro: "Six questions from this chapter and the ones before it. Can you answer them all?",
        },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "What is the plural of foot?",
            [
              ["a", "foots"],
              ["b", "feet"],
              ["c", "feets"],
            ],
            "b",
            fb(
              "feet",
              "Foot is irregular: one foot, two feet.",
              "Foots and feets are not English — the vowel changes to ee.",
            ),
            { skill: "vocabulary", hints: ["Say the pair aloud: one foot, two…"] },
          ),
          FB(
            "Complete with a or an.",
            "I read ___ book about animals.",
            ["a"],
            fbx(
              "a",
              "Book starts with a consonant sound, so it takes a.",
              "An book breaks the sound rule.",
              { english: "I read a book every night.", translation: "A before the consonant sound b-." },
            ),
            { skill: "grammar", hints: ["Say book out loud. Listen to the first sound — vowel or consonant?"] },
          ),
          CORR(
            "Find and correct the mistake.",
            "She is teacher at my school.",
            ["She is a teacher at my school."],
            fb(
              "She is a teacher at my school.",
              "Jobs take a or an. Teacher starts with a consonant sound: a teacher.",
              "Without the article, the job word sounds broken in English.",
            ),
            { skill: "grammar", hints: ["Jobs need one little word before them."] },
          ),
          RD(
            "Read and answer.",
            "Sara's list",
            "Sara goes to the market. Her list says: six eggs, two apples, some milk and some bread. She buys the eggs from an old man. On Monday, her family eats bread and eggs.",
            "How many eggs does Sara buy?",
            [
              ["a", "two"],
              ["b", "six"],
              ["c", "some"],
            ],
            "b",
            fb(
              "six",
              "The list says six eggs — a countable noun with a number.",
              "Two is the number of apples. Some is for uncountable nouns.",
            ),
            { skill: "reading", hints: ["Find the number before the word eggs."] },
          ),
          LIS(
            "Listen and answer.",
            "The children eat two apples.",
            "What do the children eat?",
            ["apples", "two apples", "the apples"],
            fb(
              "two apples",
              "You heard two apples — apples is countable, so it takes a number and a plural.",
              "Some is for uncountable nouns — apples can be counted.",
            ),
            { skill: "listening", hints: ["Listen for the countable food word."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is completely correct?",
            [
              ["a", "I have two childrens."],
              ["b", "I have two children."],
              ["c", "I have two childs."],
            ],
            "b",
            fb(
              "I have two children.",
              "Child → children. Irregular plurals never take -s on top.",
              "Childrens and childs are not English words.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Put the words in order: milk / I / drink / some.",
            "I drink some milk",
            fb(
              "I drink some milk",
              "Milk is uncountable — some milk, never a milk.",
              "A milk is impossible; milk has no plural.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "We go to the school on the Monday.",
            ["We go to school on Monday."],
            fb(
              "We go to school on Monday.",
              "School as a student's place, and days like Monday, take no article.",
              "The school is the building; the Monday is never right.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My friends live in London.",
            ["My friends live in London."],
            fb(
              "My friends live in London.",
              "Friends takes the simple -s plural. London is a proper noun — capital letter.",
              "Friend needs -s after my friends, and cities never take the.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "The honest shopping list",
      instructions:
        "Write a shopping list with four countable things (with numbers) and two uncountable things (with some). Then write three sentences about your list: one with a or an, one with the, and one about a proper noun.",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Take the chapter review again tomorrow. Can you answer all six questions?",
      "Write five sentences about your family. Use a plural, an irregular plural and an article in each one.",
      "Find three proper nouns and three plurals in anything you read today.",
    ],
  },
];
