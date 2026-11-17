/**
 * PROMPT 57 production — Batch 3, Chapter 07: Understanding Word Categories.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
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
  REORD,
  RD,
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

/**
 * Practice feedback: fb() plus an optional similar example drawn from a
 * validated glossary teaching sentence (English + Urdu/Hindi support).
 */
function fbx(
  correctAnswer: string,
  explanation: string,
  whyWrong?: string,
  similar?: string,
) {
  const g = similar ? gls(similar) : undefined;
  return {
    ...fb(correctAnswer, explanation, whyWrong),
    ...(g ? { similarExample: { english: g.english, translation: `${g.ur} · ${g.hi}` } } : {}),
  };
}

export const ch07Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — What Is a Word?
  // =========================================================================
  {
    slug: "ch-07-l-01",
    minutes: 20,
    description:
      "Meet the idea that organises all grammar: a word is letters with a meaning — and every word has a job.",
    outcomes: [
      "Explain what a word is, in one simple sentence",
      "Tell a word, a letter and a sentence apart",
      "Count the words in a sentence",
      "Say that every word has a job — a word class",
    ],
    blocks: [
      LI(
        "In this lesson you will learn what a word is. You will see how words differ from letters and sentences. You will also meet a big idea: every word has a job. That idea will organise all your grammar from now on.",
        [
          "You can read simple words by blending their sounds (Chapter 05).",
          "You know your first English words: family, animals, food, colours and numbers (Chapter 06).",
        ],
      ),
      H("From letters to words to sentences"),
      T(
        "Letters are the smallest pieces. Letters join together to make words. Words join together to make sentences. “c, a, t” are letters. “cat” is one word with one meaning. “The cat sleeps.” is a sentence — three words, one complete idea.",
      ),
      {
        type: "definition",
        term: "word",
        partOfSpeech: "noun",
        definition: "A word is one or more letters with a meaning.",
        example: {
          english: "cat — three letters, one meaning",
          translation: "It names one animal.",
        },
      },
      vocGlossary("Grammar words for this lesson", [
        { word: "word", partOfSpeech: "noun", definition: "Letters with one meaning. The unit between letters and sentences." },
        { word: "letter", partOfSpeech: "noun", definition: "A written mark with a name and a sound." },
        { word: "sentence", partOfSpeech: "noun", definition: "A group of words that expresses a complete idea." },
        { word: "word class", partOfSpeech: "grammar word", definition: "A group of words with the same job, like naming words or action words." },
      ]),
      TB(
        "The ladder: letter → word → sentence",
        ["Unit", "What it is", "Example"],
        [
          ["Letter", "A written mark with a name and a sound", "c, a, t"],
          ["Word", "One or more letters with ONE meaning", "cat"],
          ["Sentence", "Words that make ONE complete idea", "The cat sleeps."],
        ],
        "Small pieces build bigger pieces. That is how English is built.",
      ),
      ST("How to look at a word — three steps", [
        {
          title: "Step 1 — Find the meaning",
          text: "Ask: what does it mean? A word without a meaning is only letters.",
          examples: [{ english: "cat", note: "One word: an animal that says meow." }],
        },
        {
          title: "Step 2 — Count the letters",
          text: "Say how many letters the word has. Long words are still one word.",
          examples: [
            { english: "cat — three letters", note: "Short word, one meaning." },
            { english: "elephant — eight letters", note: "Long word, still one meaning." },
          ],
        },
        {
          title: "Step 3 — Check the spaces",
          text: "Words end at spaces. Sentences end at full stops. Count the words in a sentence by counting spaces.",
          examples: [{ english: "The cat sleeps.", note: "Three words: the, cat, sleeps." }],
        },
      ]),
      GR(
        "The word rule",
        "A word is one or more letters with a meaning. Words join together to make sentences.",
        [
          { english: "cat — one word (an animal)", translation: "Three letters, one meaning." },
          { english: "c, a, t — three letters", translation: "Letters have names and sounds, but no meaning alone." },
          { english: "The cat sleeps. — one sentence", translation: "Three words make one complete idea." },
        ],
        ["One word can act like a sentence in a situation: “Water, please.” “Yes.” The situation gives the missing words."],
      ),
      AU(
        "Listen: letter, word, sentence",
        "Letter. Word. Sentence. C is a letter. Cat is a word. The cat sleeps — that is a sentence. Listen once more: letter, word, sentence.",
        0.85,
      ),
      EXD(
        "One word, one meaning — all around you",
        [
          { english: "milk — one word", note: "It names a drink. You use it every day.", domain: "food" },
          { english: "school — one word", note: "It names a place. You go there five days a week.", domain: "education" },
          { english: "mother — one word", note: "It names a person in your family.", domain: "family" },
          { english: "chair — one word", note: "It names a thing. You sit on it.", domain: "home" },
          { english: "run — one word", note: "It names an action. Your legs do it.", domain: "sport" },
          { english: "phone — one word", note: "It names a thing in your pocket.", domain: "technology" },
          { english: "The cow eats grass. — one sentence", note: "Four words join into one complete idea.", domain: "nature" },
          { english: "“Bread?” “Yes.”", note: "One-word answers carry meaning in a situation.", domain: "shopping" },
        ],
        "Eight words and sentences from real life. Every one of them carries meaning — that is what makes a word a word.",
      ),
      US(
        [
          {
            situation: "Reading a sign at a bus stop",
            example: "BUS STOP — two words on a sign.",
            note: "Each word has its own meaning: bus and stop.",
          },
          {
            situation: "Sending a short message",
            example: "“Coming.” — one word is a full answer.",
            note: "In context, one word can act like a sentence.",
          },
          {
            situation: "Learning a new word in class",
            example: "The teacher says “chair”. You ask: what does it mean?",
            note: "Meaning is the heart of every word.",
          },
          {
            situation: "Writing a shopping list",
            example: "milk, bread, rice, apples",
            note: "A list uses words only — no sentences needed.",
          },
          {
            situation: "Filling in a form",
            example: "Name: one word. City: one word.",
            note: "Forms ask for single words with single meanings.",
          },
        ],
        "Words are everywhere",
        "You use words all day without noticing. Once you start noticing, you also see their jobs.",
      ),
      DL(
        "One word or many?",
        "A teacher and Rami look at the board.",
        [
          ["Teacher", "Look at the board: c, a, t. What is this?"],
          ["Rami", "Three letters?"],
          ["Teacher", "Good. Now join them: cat."],
          ["Rami", "Cat! One word. Cat means an animal."],
          ["Teacher", "Yes — a word carries meaning. Now read this: “The cat sleeps.”"],
          ["Rami", "That is a sentence. Three words. The cat sleeps."],
          ["Teacher", "Perfect. Letters make words, and words make sentences."],
        ],
      ),
      CMP(
        "One word vs one sentence",
        ["One word (cat)", "One sentence (The cat sleeps.)"],
        [
          ["What it is", "Letters with ONE meaning", "Words with ONE complete idea"],
          ["How big", "One meaning: an animal", "Says that something happens"],
          ["How it ends", "At a space — or nowhere", "At a full stop"],
          ["Example", "cat", "The cat sleeps."],
        ],
        {
          intro: "Beginners often call a whole sentence a word. Keep the two apart.",
          verdict:
            "Spaces end words. Full stops end sentences. A sentence is a group of words — never one long word.",
        },
      ),
      MS(
        [
          [
            "“The cat sleeps” is one word.",
            "“The cat sleeps.” is one sentence — it has three words.",
            "Spaces end words. The full stop ends the sentence.",
          ],
          [
            "Cat has no meaning alone.",
            "Cat is a word: it names an animal.",
            "A word is letters with a meaning. Cat has one.",
          ],
          [
            "Elephant is eight words.",
            "Elephant is one word with eight letters.",
            "Spaces count words. Letters only build words.",
          ],
          [
            "c, a, t is the word cat.",
            "c, a, t are letters; cat is the word.",
            "Letters are the pieces. The word is the whole, and it means something.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "How to count words",
        "Count spaces, not letters. “The cat sleeps” has three words. Every space ends one word and starts the next one.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "A letter is a small mark with a name and a sound. A word is one or more letters with a meaning. A sentence is a group of words with one complete idea. “Cat” is a word. “The cat sleeps.” is a sentence. Spaces end words. Full stops end sentences.",
          task: "Read the text two times. Then say the difference between a word and a sentence in your own words.",
        },
        writing: {
          task: "Copy the ladder and complete it: letter → word → sentence. Write one example for each step.",
          guide: ["letter: c", "word: ___", "sentence: ___"],
          model: "letter: c · word: cat · sentence: The cat sleeps.",
        },
        listening: {
          script:
            "Cat. The cat. The cat sleeps. Letter. Word. Sentence. Listen once more and say each line with me.",
          task: "Listen and repeat each line after the audio.",
        },
        speaking: {
          task: "Say one letter, one word and one sentence of your own. Then count the words in your sentence aloud.",
          frames: ["One letter: …", "One word: …", "One sentence: …", "My sentence has … words."],
          checklist: [
            "I said one letter, one word and one sentence.",
            "I counted the words in my sentence.",
          ],
        },
      }),
      LSP(
        [
          gls("word"),
          gls("word class"),
          gls("A word is one or more letters with a meaning."),
          gls("Words join together to make sentences."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A word is one or more letters with a meaning.",
        "A sentence is a group of words with one complete idea.",
        "Letters make words; words make sentences. Spaces end words, and full stops end sentences.",
        "Every word has a job. The job is called a word class.",
        "The four classes ahead: naming word, action word, describing word, pronoun.",
      ]),
      RV(
        [
          {
            question: "How many letters are in the English alphabet?",
            options: ["25", "26", "30"],
            correctIndex: 1,
            explanation: "The English alphabet has 26 letters — you met them all in the alphabet chapter.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "What does every word need at least one of?",
            options: ["A capital letter", "A vowel", "A full stop"],
            correctIndex: 1,
            explanation: "Every word needs at least one vowel. A, E, I, O and U make words speakable.",
            from: "Chapter 03 · Lesson 1",
          },
          {
            question: "What does every sentence start with?",
            options: ["A small letter", "A capital letter", "A question mark"],
            correctIndex: 1,
            explanation: "Every sentence starts with a capital letter — you learned this rule in Chapter 02.",
            from: "Chapter 02 · Lesson 5",
          },
          {
            question: "Which one of these is a family word?",
            options: ["milk", "mother", "Monday"],
            correctIndex: 1,
            explanation: "Mother is a family word from your first vocabulary chapter. Milk is food and Monday is a day.",
            from: "Chapter 06 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Quick questions from earlier lessons before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it whenever you are not sure.",
        questions: [
          MCQ(
            "Which one is a sentence?",
            [
              ["a", "cat"],
              ["b", "The cat sleeps."],
              ["c", "c, a, t"],
            ],
            "b",
            fbx(
              "The cat sleeps.",
              "A sentence is a group of words with one complete idea. It ends with a full stop.",
              "“Cat” is one word and “c, a, t” is a list of letters.",
              "A sentence is a group of words that expresses a complete idea.",
            ),
            { hints: ["Count the words and look for the full stop."] },
          ),
          FB(
            "Complete the rule.",
            "A ___ is one or more letters with a meaning.",
            ["word"],
            fbx(
              "word",
              "A word carries meaning: cat, run, red. Letters alone do not.",
              "A letter is one mark; a sentence is many words.",
              "A word is one or more letters with a meaning.",
            ),
            { hints: ["It is not a letter and not a sentence. It sits between them."] },
          ),
          MATCH(
            "Match each unit to its example.",
            [
              ["u1", "letter"],
              ["u2", "word"],
              ["u3", "sentence"],
            ],
            [
              ["e1", "c, a, t"],
              ["e2", "cat"],
              ["e3", "The cat sleeps."],
            ],
            [
              ["u1", "e1"],
              ["u2", "e2"],
              ["u3", "e3"],
            ],
            fbx(
              "letter → c, a, t · word → cat · sentence → The cat sleeps.",
              "Letters build words. Words build sentences.",
              undefined,
              "Letters join together to make words.",
            ),
            { hints: ["Ask: one mark, one meaning, or one complete idea?"] },
          ),
          LIS(
            "Listen and answer.",
            "The dog runs.",
            "Is this a word or a sentence?",
            ["a sentence", "sentence", "A sentence"],
            fbx(
              "a sentence",
              "You heard three words and one complete idea: the dog runs. That is a sentence.",
              "One word alone, like “dog”, would not be a sentence.",
              "Words join together to make sentences.",
            ),
            { hints: ["Count the words you hear. How many are there?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which one is a word?",
            [
              ["a", "The dog barks."],
              ["b", "elephant"],
              ["c", "A, B, C"],
            ],
            "b",
            fbx(
              "elephant",
              "Elephant is one word: eight letters, one meaning. The other two are a sentence and a list of letters.",
              undefined,
              "A word is one or more letters with a meaning.",
            ),
          ),
          CORR(
            "Find and correct the mistake.",
            "“Milk” is a sentence.",
            ["“Milk” is a word.", "Milk is a word."],
            fbx(
              "“Milk” is a word.",
              "Milk is one word with one meaning. A sentence needs a group of words with one complete idea.",
              undefined,
              "A word is one or more letters with a meaning.",
            ),
          ),
          DICT(
            "Listen and write the sentence.",
            "The cow eats grass.",
            ["The cow eats grass."],
            fbx(
              "The cow eats grass.",
              "Four words, one complete idea. Cow and grass are naming words; eats is the action word.",
              undefined,
              "Words join together to make sentences.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "The word ladder",
      instructions:
        "Write one letter, one word and one sentence of your own. Then count: how many letters are in your word, and how many words are in your sentence?",
      minWords: 8,
      maxWords: 35,
    },
    homework: [
      "Find three things around you. Say each one as one word: door, cup, phone.",
      "Write one word, then one sentence that uses it. Count the words in your sentence.",
      "Say the ladder to a family member: letters make words, and words make sentences.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Naming Words (Nouns)
  // =========================================================================
  {
    slug: "ch-07-l-02",
    minutes: 25,
    description:
      "Meet your first word class: naming words — what they do, how to spot them, and the capital-letter rule for special names.",
    outcomes: [
      "Define a noun with your own example",
      "Find the nouns in a sentence",
      "Sort nouns into people, places, animals and things",
      "Use capital letters for special names",
    ],
    blocks: [
      LI(
        "In this lesson you meet your first word class: naming words. Naming words are called nouns. You will learn what nouns do. You will learn to find them in any sentence. You will also learn one writing rule: special names take capital letters.",
        [
          "You know people and family words: mother, father, sister, brother (Chapter 06).",
          "You know that every sentence starts with a capital letter (Chapter 02).",
        ],
      ),
      H("Nouns name the world"),
      T(
        "A naming word names a person, a place, an animal or a thing. “Mother” names a person. “School” names a place. “Cat” names an animal. “Milk” names a thing. If you can point at it or take a photo of it, it is probably a noun.",
      ),
      {
        type: "definition",
        term: "noun (naming word)",
        partOfSpeech: "grammar word",
        definition: "A noun is the name of a person, a place, an animal or a thing.",
        example: {
          english: "Sara reads a book.",
          translation: "Sara and book are naming words.",
        },
      },
      vocGlossary("Naming words for this lesson", [
        { word: "noun", partOfSpeech: "grammar word", definition: "A naming word. It names a person, a place, an animal or a thing." },
        { word: "person", partOfSpeech: "noun", definition: "A human being: a man, a woman, a boy or a girl." },
        { word: "place", partOfSpeech: "noun", definition: "A where word: a school, a home, a city." },
        { word: "animal", partOfSpeech: "noun", definition: "A living creature: a cat, a dog, a horse." },
        { word: "thing", partOfSpeech: "noun", definition: "An object you can see or touch: a book, a chair, milk." },
      ]),
      TB(
        "Four kinds of naming words",
        ["Person", "Place", "Animal", "Thing"],
        [
          ["mother, teacher, Sara", "school, home, Karachi", "cat, dog, horse", "book, milk, chair"],
        ],
        "Sort every naming word into one of these four groups.",
      ),
      ST("How to spot a naming word", [
        {
          title: "Step 1 — Ask: who or what?",
          text: "Read the sentence. Ask: who is this about? What do I see?",
          examples: [{ english: "The dog sleeps.", note: "Who? The dog. Dog is the naming word." }],
        },
        {
          title: "Step 2 — Try a or the",
          text: "Put a or the before the word. If it fits, the word is probably a noun.",
          examples: [
            { english: "the kitchen ✓", note: "Kitchen names a place." },
            { english: "the reads ✗", note: "Reads is an action word — it fails the test." },
          ],
        },
        {
          title: "Step 3 — Sort it into its group",
          text: "Person, place, animal or thing? Say the group out loud.",
          examples: [{ english: "doctor — a person", note: "Sort every noun you meet." }],
        },
      ]),
      GR(
        "The noun test",
        "Ask: who or what? If a or the fits before the word, it is probably a noun.",
        [
          { english: "a book / the book ✓", translation: "Book is a naming word." },
          { english: "the kitchen ✓", translation: "Kitchen names a place." },
          { english: "the reads ✗", translation: "Reads is an action word, not a naming word." },
        ],
        ["Words like a and the are helpers. They point at nouns, but they are not nouns."],
      ),
      GR(
        "The capital-letter rule for special names",
        "Common naming words take small letters: girl, city, dog. Special names take capital letters: Sara, Karachi, Simba.",
        [
          { english: "My sister lives in Karachi.", translation: "sister — common, small letter; Karachi — special, capital." },
          { english: "The girl is Sara. The cat is Simba.", translation: "girl and cat are common; Sara and Simba are special names." },
        ],
        ["Days and months are special names too: Monday, January. They always take capitals."],
      ),
      AU(
        "Listen: nouns everywhere",
        "Teacher. School. Cat. Milk. Teacher is a person. School is a place. Cat is an animal. Milk is a thing. Sara lives in Karachi. Sara and Karachi start with a capital letter.",
        0.85,
      ),
      EXD(
        "Naming words in real life",
        [
          { english: "My mother cooks the rice.", note: "Mother names a person; rice names a thing.", domain: "family" },
          { english: "The teacher opens the door.", note: "Teacher and door: a person and a thing at school.", domain: "education" },
          { english: "We buy bread at the market.", note: "Bread names a thing; market names a place.", domain: "shopping" },
          { english: "A horse runs in the field.", note: "Horse names an animal; field names a place.", domain: "nature" },
          { english: "Ali works at a bank.", note: "Ali is a special name — capital A. Bank is a common word.", domain: "work" },
          { english: "The doctor helps my grandmother.", note: "Doctor and grandmother name people.", domain: "health" },
          { english: "The cat sleeps on the bed.", note: "Cat names an animal; bed names a thing.", domain: "home" },
          { english: "The bus stops near the school.", note: "Bus and school: a thing and a place in town.", domain: "travel" },
        ],
        "Find the naming words in each line. Then sort them: person, place, animal or thing.",
      ),
      US(
        [
          {
            situation: "Introducing your family",
            example: "This is my mother. This is my father.",
            note: "Family words are naming words.",
          },
          {
            situation: "Reading a shop sign",
            example: "BAKERY — the special name of the shop.",
            note: "Shop names are special names: capital letters.",
          },
          {
            situation: "Telling a friend where you live",
            example: "I live in Karachi.",
            note: "City names are special names too.",
          },
          {
            situation: "Saving a contact on your phone",
            example: "Grandmother, Doctor Ali, School.",
            note: "Each label names a person, a job or a place.",
          },
          {
            situation: "Describing your classroom",
            example: "The board, the desks, the teacher, the door.",
            note: "Look around: naming words are everywhere.",
          },
        ],
        "Naming words around you",
        "Everything you can point at has a name. Naming words are the biggest word class in English.",
      ),
      DL(
        "Naming words at the market",
        "Sara goes shopping with her mother.",
        [
          ["Mother", "Sara, we need bread, rice and apples."],
          ["Sara", "Bread — a thing. Rice — a thing. Apples — things!"],
          ["Mother", "Good. And where do we buy them?"],
          ["Sara", "At the market. Market is a place — a naming word."],
          ["Mother", "Right. And the fruit man is Mr Ali."],
          ["Sara", "Mr Ali — a special name! It starts with a capital letter."],
          ["Mother", "Yes. Special names always take capitals. Now say hello to him."],
        ],
      ),
      CMP(
        "Common naming word vs special name",
        ["Common naming word (girl, city, dog)", "Special name (Sara, Karachi, Simba)"],
        [
          ["What it names", "Any one of a group", "One special person, place, animal or thing"],
          ["Capital letter", "Small letter: girl, city, dog", "Capital letter: Sara, Karachi, Simba"],
          ["More examples", "teacher, school, cat, milk", "Monday, January, your own name"],
          ["In a sentence", "My sister reads.", "My sister Sara reads."],
        ],
        {
          intro: "Same job — naming. Different weight: one names a group, one names a special one.",
          verdict: "Common words stay small. Special names go big. Check every name you write.",
        },
      ),
      MS(
        [
          [
            "my sister lives in karachi.",
            "My sister lives in Karachi.",
            "The sentence starts with a capital. Special names like Sara and Karachi take capitals too. Common words like sister stay small.",
          ],
          [
            "I like dog.",
            "I like dogs.",
            "For things we like in general, use the plural naming word: dogs. Say “a dog” for one dog.",
          ],
          [
            "Teacher is a special name, so it needs a capital letter.",
            "Teacher is a common naming word — small letter: the teacher.",
            "“Teacher” names any teacher, not one special person. Names like Sara are special.",
          ],
          [
            "Book names a place.",
            "Book names a thing. School names a place.",
            "Sort the noun into its group: person, place, animal or thing.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Small helper words are not nouns",
        "Words like a and the point at naming words. They do not name anything. Do not count them as nouns.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Naming words are called nouns. A noun names a person, a place, an animal or a thing. “Mother” names a person. “School” names a place. “Cat” names an animal. “Milk” names a thing. Special names like Sara and Karachi start with a capital letter. Common words like girl and city stay small.",
          task: "Read the text two times. Then find six naming words in it and say their group.",
        },
        writing: {
          task: "Write four naming words: one person, one place, one animal, one thing. Then use two of them in one sentence.",
          guide: ["person: ___", "place: ___", "animal: ___", "thing: ___", "My sentence: ___"],
          model: "person: mother · place: school · animal: horse · thing: milk — My mother drinks milk at home.",
        },
        listening: {
          script:
            "Mother. School. Cat. Milk. Person, place, animal, thing. My cat Simba sleeps at home. Sara lives in Karachi. Listen once more: Simba, Sara, Karachi — the special names.",
          task: "Listen and find the special names.",
        },
        speaking: {
          task: "Point at four things around you. Name each one. Then say which group it belongs to.",
          frames: ["This is a …", "It is a person / a place / an animal / a thing."],
          checklist: [
            "I named four things.",
            "I said the group for each one.",
          ],
        },
      }),
      LSP(
        [
          gls("noun"),
          gls("naming word"),
          gls("A noun is the name of a person, place, animal or thing."),
          gls("Naming words are called nouns."),
          gls("Use a capital letter for the names of people and places."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Naming words are called nouns.",
        "A noun names a person, a place, an animal or a thing.",
        "Test a noun with a or the: the kitchen, a book.",
        "Common naming words take small letters. Special names take capital letters: Sara, Karachi, Simba.",
        "Days and months are special names too: Monday, January.",
      ]),
      RV(
        [
          {
            question: "Which word is a family word?",
            options: ["bread", "sister", "chair"],
            correctIndex: 1,
            explanation: "Sister is a family word. Bread is food and chair is a thing in your home.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "Which word is an animal word?",
            options: ["horse", "rice", "door"],
            correctIndex: 0,
            explanation: "Horse is an animal word. Rice is food and door is a thing at home.",
            from: "Chapter 06 · Lesson 2",
          },
          {
            question: "The word 'I' is always ___",
            options: ["small", "a capital letter", "silent"],
            correctIndex: 1,
            explanation: "The word 'I' is always a capital letter — a small special rule you met in Chapter 02.",
            from: "Chapter 02 · Lesson 5",
          },
        ],
        { title: "Look back — check your base", intro: "Quick questions from earlier lessons before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it whenever you are not sure.",
        questions: [
          MCQ(
            "Which word is a naming word?",
            [
              ["a", "run"],
              ["b", "teacher"],
              ["c", "big"],
            ],
            "b",
            fbx(
              "teacher",
              "Teacher names a person, so it is a naming word. Run is an action word and big describes.",
              "“Run” happens and “big” describes — neither one names.",
              "A noun is the name of a person, place, animal or thing.",
            ),
            { hints: ["Ask: does the word name a person, a place, an animal or a thing?"] },
          ),
          MATCH(
            "Match each naming word to its group.",
            [
              ["w1", "mother"],
              ["w2", "school"],
              ["w3", "horse"],
              ["w4", "bread"],
            ],
            [
              ["g1", "a place"],
              ["g2", "a thing"],
              ["g3", "a person"],
              ["g4", "an animal"],
            ],
            [
              ["w1", "g3"],
              ["w2", "g1"],
              ["w3", "g4"],
              ["w4", "g2"],
            ],
            fbx(
              "mother → a person · school → a place · horse → an animal · bread → a thing",
              "Sort every naming word into one of the four groups.",
              undefined,
              "Naming words are called nouns.",
            ),
            { hints: ["Ask: who, where, which animal, or what thing?"] },
          ),
          LIS(
            "Listen and answer.",
            "The cat sleeps on the bed.",
            "Which two naming words do you hear?",
            ["cat and bed", "the cat and the bed", "cat, bed"],
            fbx(
              "cat and bed",
              "Cat names the animal and bed names the thing. Sleeps is the action word.",
              undefined,
              "A noun is the name of a person, place, animal or thing.",
            ),
            { hints: ["Listen for a word that names an animal and a word that names a thing."] },
          ),
          FB(
            "Complete the rule.",
            "A ___ is the name of a person, place, animal or thing.",
            ["noun"],
            fbx(
              "noun",
              "Naming words are called nouns. Noun is the grammar word for them.",
              undefined,
              "Naming words are called nouns.",
            ),
            { hints: ["It is the grammar word for naming words. Four letters, starting with n."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          RD(
            "Read the little story and answer.",
            "Sara's cat",
            "Sara is my friend. She lives in London. Her cat is Simba. Simba is small and white. Every day Sara reads a book, and Simba sleeps.",
            "Which naming word in the story is a special name?",
            [
              ["a", "Simba"],
              ["b", "cat"],
              ["c", "friend"],
            ],
            "a",
            fbx(
              "Simba",
              "Simba is the cat's own name, so it takes a capital letter. Cat and friend are common naming words — small letters.",
              undefined,
              "Use a capital letter for the names of people and places.",
            ),
          ),
          CORR(
            "Find and correct the mistake.",
            "my sister sara lives in london.",
            ["My sister Sara lives in London."],
            fbx(
              "My sister Sara lives in London.",
              "Three capitals: My starts the sentence, Sara is a special name, London is a special name. Sister stays small — it is a common word.",
              undefined,
              "Use a capital letter for the names of people and places.",
            ),
          ),
          MCQ(
            "Which one is a special name?",
            [
              ["a", "girl"],
              ["b", "Karachi"],
              ["c", "milk"],
            ],
            "b",
            fbx(
              "Karachi",
              "Karachi is the special name of one city, so it takes a capital letter. Girl and milk are common naming words — small letters.",
              undefined,
              "Use a capital letter for the names of people and places.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Noun collector",
      instructions:
        "Write six naming words: two people, two places, two things. Use a capital letter for any special name. Then write one sentence that uses two of your words.",
      minWords: 12,
      maxWords: 45,
    },
    homework: [
      "Name five things you can see right now. Say which group each one belongs to.",
      "Find two special names around you, on signs, books or phone contacts. Check their capital letters.",
      "Write one sentence about your family using two naming words.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Action Words (Verbs)
  // =========================================================================
  {
    slug: "ch-07-l-03",
    minutes: 25,
    description:
      "Meet action words — how to find the verb in any sentence, and the most important rule in English: every sentence needs one.",
    outcomes: [
      "Define a verb with your own example",
      "Find the verb in any sentence",
      "Build two-word sentences: naming word + action word",
      "Explain why every sentence needs a verb",
    ],
    blocks: [
      LI(
        "Words can name things. Words can also make things happen. In this lesson you meet action words. Action words are called verbs. You will learn to find the verb in any sentence. You will also learn the most important rule in English: every sentence needs a verb.",
        [
          "You know action words from Chapter 06: eat, drink, read, sleep, run, play.",
          "You know that a sentence expresses one complete idea (Chapter 01).",
        ],
      ),
      H("Verbs make sentences move"),
      T(
        "An action word tells us what happens. “Run”, “eat”, “sleep” and “read” are action words. Every complete English sentence needs one. Without a verb, words are just a list. “The dog …” is waiting for something to happen.",
      ),
      {
        type: "definition",
        term: "verb (action word)",
        partOfSpeech: "grammar word",
        definition: "A verb is an action word. It tells us what people or things do.",
        example: {
          english: "The horse runs.",
          translation: "Runs is the action word.",
        },
      },
      vocGlossary("Action words for this lesson", [
        { word: "to eat", partOfSpeech: "verb", definition: "To put food in your mouth." },
        { word: "to read", partOfSpeech: "verb", definition: "To look at words and understand them." },
        { word: "to sleep", partOfSpeech: "verb", definition: "To rest with your eyes closed." },
        { word: "to run", partOfSpeech: "verb", definition: "To move fast on your feet." },
        { word: "to play", partOfSpeech: "verb", definition: "To do something fun." },
      ]),
      TB(
        "Action words you already know",
        ["Action word", "What it means", "Example sentence"],
        [
          ["eat", "put food in your mouth", "We eat rice."],
          ["run", "move fast on your feet", "Horses run."],
          ["read", "look at words and understand", "I read a book."],
          ["sleep", "rest with your eyes closed", "The baby sleeps."],
        ],
        "You met these words in Chapter 06. Now you know their job: they are verbs.",
      ),
      ST("How to find the action word", [
        {
          title: "Step 1 — Ask: what happens?",
          text: "Read the sentence. Ask: what does the person or the thing do?",
          examples: [{ english: "The dog barks.", note: "What happens? Barks. That is the action word." }],
        },
        {
          title: "Step 2 — Feel it in your body",
          text: "Do the action with your body. Words you can act out are usually action words.",
          examples: [{ english: "run, eat, sleep, read", note: "Act each one out." }],
        },
        {
          title: "Step 3 — Check the sentence is complete",
          text: "A sentence without an action word is only a list. Add the verb to finish it.",
          examples: [
            { english: "The baby …", note: "Waiting for the action." },
            { english: "The baby sleeps.", note: "Now it is a complete sentence." },
          ],
        },
      ]),
      GR(
        "The verb rule",
        "Every sentence needs a verb. A sentence without a verb is not a sentence — it is just a list of words.",
        [
          { english: "Cats sleep.", translation: "Two words, one action: sleep." },
          { english: "The dog in the garden barks.", translation: "Many words, but barks is the only action word." },
          { english: "The big dog in the garden.", translation: "No action word — nothing happens. Not a sentence." },
        ],
        ["Commands are full sentences too: “Sit!” “Open the door.” The action word comes first, and the listener knows who does it."],
      ),
      AU(
        "Listen: the verb drill",
        "Eat. Run. Sleep. Read. The baby sleeps. The horses run. The phone rings. Every sentence needs a verb. Listen once more and find the verbs: the baby sleeps, the horses run.",
        0.85,
      ),
      EXD(
        "Action words in real life",
        [
          { english: "Bilal plays football.", note: "Plays is the action word; Bilal and football name.", domain: "sport" },
          { english: "My grandmother cooks dinner.", note: "Cooks is the action word.", domain: "family" },
          { english: "We read at school.", note: "Read is the action; school is a place.", domain: "education" },
          { english: "The bus stops here.", note: "Stops is the action word.", domain: "travel" },
          { english: "I drink water.", note: "Drink is the action; water names a thing.", domain: "health" },
          { english: "The phone rings.", note: "Rings is the action word.", domain: "technology" },
          { english: "Fish swim.", note: "Swim is the action; fish names the animal.", domain: "nature" },
          { english: "Sit! Open the door.", note: "Commands are sentences too — the action word comes first.", domain: "everyday" },
        ],
        "Every line has one action word. Say it aloud, then do the action with your body.",
      ),
      US(
        [
          {
            situation: "A teacher gives commands",
            example: "Stand up. Open your books. Sit down.",
            note: "Commands are full sentences with the action word first.",
          },
          {
            situation: "Telling a friend about your day",
            example: "I read. I play. I sleep.",
            note: "Small sentences need a verb too.",
          },
          {
            situation: "Cooking with your family",
            example: "Wash the rice. Boil the water.",
            note: "Recipes are lists of commands.",
          },
          {
            situation: "Playing sport",
            example: "Run! Kick the ball. Pass it!",
            note: "On the field, one-word commands work.",
          },
          {
            situation: "Asking for help politely",
            example: "Please open the window.",
            note: "Please softens the command; open is still the action word.",
          },
        ],
        "Action words around you",
        "Watch any person for one minute. You will hear and see action words the whole time.",
      ),
      DL(
        "Commands in the classroom",
        "A teacher gives short commands. The class does them.",
        [
          ["Teacher", "Stand up, please. Open your books."],
          ["Teacher", "Read the first line."],
          ["Rami", "“The horse runs.” Runs is the action word."],
          ["Teacher", "Good. Now close your books and sit down."],
          ["Sara", "Commands are sentences too. They start with the action word!"],
          ["Teacher", "Yes. Every sentence needs a verb — even a one-word command."],
        ],
      ),
      CMP(
        "Naming word vs action word",
        ["Naming word (dog, book, milk)", "Action word (runs, reads, sleeps)"],
        [
          ["Its job", "Names a person, place, animal or thing", "Tells us what happens"],
          ["The question", "Who or what?", "What does it do?"],
          ["Example", "The dog barks — dog names", "The dog barks — barks acts"],
          ["In a sentence", "Naming words can sit still", "The sentence dies without it"],
        ],
        {
          intro: "One sentence can hold both: “The dog barks.” Dog names; barks acts.",
          verdict:
            "If you can do it, it is usually an action word. If you can point at it, it is usually a naming word.",
        },
      ),
      MS(
        [
          [
            "The boy in the garden.",
            "The boy in the garden plays.",
            "No action word, no sentence. Plays adds the action.",
          ],
          [
            "She teacher.",
            "She is a teacher.",
            "Every sentence needs a verb. Here the verb is is — it connects she and teacher.",
          ],
          [
            "I to school go.",
            "I go to school.",
            "Urdu and Hindi put the action word at the end. English puts it second: I go to school.",
          ],
          [
            "Cats and dogs.",
            "Cats and dogs play.",
            "A list of naming words is not a sentence. The action word turns it into one.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "No verb, no sentence",
        "“The big dog in the garden” is only a list. Add runs and it becomes a sentence: “The big dog in the garden runs.”",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Action words are called verbs. Every sentence needs a verb. “Birds fly.” is a sentence — fly is the verb. “The big dog in the garden” is not a sentence — nothing happens in it. Commands are sentences too: “Stand up. Open the door.” Even a command needs its action word.",
          task: "Read the text two times. Then find the three verbs in it.",
        },
        writing: {
          task: "Write five two-word sentences: naming word + action word. Use words from Chapter 06, like “Horses run.”",
          guide: ["1. ___ ___", "2. ___ ___", "3. ___ ___", "4. ___ ___", "5. ___ ___"],
          model: "Cats sleep. Fish swim. Horses run. Babies cry. Birds sing.",
        },
        listening: {
          script:
            "The baby sleeps. The horses run. The phone rings. Stand up. Open the door. Listen once more and find the action word in each line.",
          task: "Listen and say the action word in each line.",
        },
        speaking: {
          task: "Watch a person for one minute. Say three things they do, like “She cooks. He reads.”",
          frames: ["She …", "He …", "The baby …"],
          checklist: [
            "I said three action sentences.",
            "Every sentence has its action word.",
          ],
        },
      }),
      LSP(
        [
          gls("verb"),
          gls("action word"),
          gls("Action words are called verbs."),
          gls("Every sentence needs a verb."),
          gls("Action words tell us what people do."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Action words are called verbs.",
        "A verb tells us what happens: run, eat, sleep, read.",
        "Every sentence needs a verb. Without one, you only have a list of words.",
        "The smallest complete sentence is two words: Cats sleep.",
        "Commands are sentences too: Sit! Open the door.",
      ]),
      RV(
        [
          {
            question: "Which one of these is an action word?",
            options: ["bread", "sleep", "chair"],
            correctIndex: 1,
            explanation: "Sleep is an action word — you met eat, drink, read, sleep and run in Chapter 06.",
            from: "Chapter 06 · Lesson 6",
          },
          {
            question: "How do we read a new word?",
            options: ["With letter names", "By blending the sounds", "By guessing"],
            correctIndex: 1,
            explanation: "Reading uses letter sounds, not letter names. Blending joins the sounds into a word.",
            from: "Chapter 04 · Lesson 5",
          },
          {
            question: "What do we call cat, mat and sat?",
            options: ["A word family", "A sentence", "A colour"],
            correctIndex: 0,
            explanation: "They share the same ending: -at. That is a word family from your reading chapter.",
            from: "Chapter 05 · Lesson 3",
          },
        ],
        { title: "Look back — check your base", intro: "Quick questions from earlier lessons before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it whenever you are not sure.",
        questions: [
          FB(
            "Complete the rule.",
            "Every sentence needs a ___.",
            ["verb"],
            fbx(
              "verb",
              "Action words are called verbs. Every sentence needs one — without it, nothing happens.",
              undefined,
              "Every sentence needs a verb.",
            ),
            { hints: ["Run, eat, sleep, read — what kind of word are these?"] },
          ),
          REORD(
            "Put the words in order.",
            "The baby sleeps.",
            fbx(
              "The baby sleeps.",
              "Naming word first, then the action word. Two words make a complete sentence.",
              undefined,
              "A sentence without a verb is not a sentence.",
            ),
            { hints: ["The naming word comes first. Then say what the baby does."] },
          ),
          MCQ(
            "Which word is the action word in “The teacher reads a book.”?",
            [
              ["a", "teacher"],
              ["b", "reads"],
              ["c", "book"],
            ],
            "b",
            fbx(
              "reads",
              "Reads tells us what the teacher does. Teacher and book are naming words.",
              "“Teacher” names a person and “book” names a thing — they do not act.",
              "Action words are called verbs.",
            ),
            { hints: ["Ask: what does the teacher do?"] },
          ),
          LIS(
            "Listen and answer.",
            "The phone rings.",
            "What is the action word you hear?",
            ["rings", "Rings"],
            fbx(
              "rings",
              "Rings is the action word — what the phone does.",
              undefined,
              "Say the sentence out loud and listen for the verb.",
            ),
            { hints: ["Ask: what does the phone do?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which one is a complete sentence?",
            [
              ["a", "The big dog in the garden."],
              ["b", "The big dog barks."],
              ["c", "Big dog garden."],
            ],
            "b",
            fbx(
              "The big dog barks.",
              "Barks is the action word, so something happens. Without a verb there is only a list of words.",
              undefined,
              "A sentence without a verb is not a sentence.",
            ),
          ),
          CORR(
            "Find and correct the mistake.",
            "She teacher.",
            ["She is a teacher."],
            fbx(
              "She is a teacher.",
              "Every sentence needs a verb. Here the verb is is — it connects she and teacher.",
              undefined,
              "Every sentence needs a verb.",
            ),
          ),
          LIS(
            "Listen and answer.",
            "The horse runs in the field.",
            "What is the action word you hear?",
            ["runs", "Runs"],
            fbx(
              "runs",
              "Runs is the action word. Horse and field are naming words.",
              undefined,
              "Read the sentence and find the verb.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Two-word sentences",
      instructions:
        "Build five two-word sentences with a naming word and an action word. Use words from Chapter 06, like “Horses run.” Then underline the action word in each sentence.",
      minWords: 10,
      maxWords: 35,
    },
    homework: [
      "Watch one person for a minute. Name three actions they do.",
      "Write five two-word sentences: naming word + action word, like “Horses run.”",
      "Find the action word in anything you read today. Say it aloud.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Describing Words (Adjectives)
  // =========================================================================
  {
    slug: "ch-07-l-04",
    minutes: 25,
    description:
      "Meet describing words — what kind, which colour, and the two places they go: before the naming word, or after is.",
    outcomes: [
      "Define an adjective with your own example",
      "Put a describing word before its naming word",
      "Use describing words after is, am and are",
      "Make a describing word stronger with very",
    ],
    blocks: [
      LI(
        "You can name things. You can say what happens. Now learn to say what kind. In this lesson you meet describing words. Describing words are called adjectives. You will learn where they go in a sentence. You will also learn to make them stronger with very.",
        [
          "You know colour words: red, blue, green, yellow, black, white (Chapter 06).",
          "You know home object words: chair, table, door, window (Chapter 06).",
        ],
      ),
      H("Adjectives describe"),
      T(
        "A describing word tells us what kind. “Big”, “small”, “red” and “happy” describe. A dog becomes a big dog. An apple becomes a red apple. In English the describing word goes before its naming word. That is a fixed rule.",
      ),
      {
        type: "definition",
        term: "adjective (describing word)",
        partOfSpeech: "grammar word",
        definition: "An adjective is a describing word. It tells us what kind.",
        example: {
          english: "a red apple",
          translation: "Red describes the apple.",
        },
      },
      vocGlossary("Describing words for this lesson", [
        { word: "red", partOfSpeech: "adjective", definition: "The colour of blood and of many apples." },
        { word: "blue", partOfSpeech: "adjective", definition: "The colour of the sky." },
        { word: "green", partOfSpeech: "adjective", definition: "The colour of grass and leaves." },
        { word: "yellow", partOfSpeech: "adjective", definition: "The colour of the sun." },
        { word: "black", partOfSpeech: "adjective", definition: "The colour of the night." },
        { word: "white", partOfSpeech: "adjective", definition: "The colour of milk and snow." },
      ]),
      TB(
        "The describing-word toolbox",
        ["Question", "Describing words", "Example"],
        [
          ["What size?", "big, small, tall, short", "a small cat"],
          ["What colour?", "red, blue, green, yellow, black, white", "a red apple"],
          ["What feeling?", "happy, sad, good, bad, kind", "a happy baby"],
          ["What speed?", "fast, slow", "a slow bus"],
        ],
        "Four questions open the toolbox: size, colour, feeling, speed.",
      ),
      ST("Where does the describing word go?", [
        {
          title: "Step 1 — Find the naming word",
          text: "First find the word that names. The describing word points at it.",
          examples: [{ english: "a big dog", note: "Dog is the naming word; big describes it." }],
        },
        {
          title: "Step 2 — Put it before the naming word",
          text: "In English, describing words come first: a big dog, a red apple.",
          examples: [
            { english: "a small cat ✓", note: "Correct order." },
            { english: "a cat small ✗", note: "Wrong order — never say this." },
          ],
        },
        {
          title: "Step 3 — Or put it after is, am or are",
          text: "For a full sentence about one thing, use is, am or are, then the describing word.",
          examples: [{ english: "The cat is small.", note: "The describing word comes last." }],
        },
      ]),
      GR(
        "The position rule",
        "A describing word goes BEFORE its naming word. After is, am or are, it comes after the verb.",
        [
          { english: "a small cat", translation: "Pattern 1: before the naming word." },
          { english: "The cat is small.", translation: "Pattern 2: after is." },
          { english: "a cat small ✗", translation: "Never between the naming word and its verb." },
        ],
        ["Some languages put the describing word after the noun. English does not. Learn the English order from day one."],
      ),
      GR(
        "The very rule",
        "Very makes a describing word stronger. It goes before the describing word: very big, very happy.",
        [
          { english: "a big dog", translation: "Big." },
          { english: "a very big dog", translation: "A stronger feeling — very strengthens big." },
          { english: "The baby is very happy.", translation: "Very sits before happy, never after it." },
        ],
        ["Use very once. “Very very big” is not good English."],
      ),
      AU(
        "Listen: describing words",
        "Big. Small. Red. Happy. A big dog. The dog is big. A very big dog. The apple is red. Listen once more: the dog is very big, the apple is red.",
        0.85,
      ),
      EXD(
        "Describing words in real life",
        [
          { english: "a red apple", note: "Red describes the apple's colour.", domain: "food" },
          { english: "My bag is heavy.", note: "After is, the describing word comes last.", domain: "education" },
          { english: "The white horse runs.", note: "White describes the horse before the naming word.", domain: "nature" },
          { english: "a slow bus", note: "Slow describes the bus.", domain: "travel" },
          { english: "I have a new phone.", note: "New describes the phone.", domain: "technology" },
          { english: "The market is busy.", note: "Busy describes the market after is.", domain: "shopping" },
          { english: "The tall boy plays basketball.", note: "Tall describes the boy.", domain: "sport" },
          { english: "My grandmother is very kind.", note: "Very makes kind stronger.", domain: "family" },
        ],
        "Two patterns run through every line: describing word first, or describing word last after is.",
      ),
      US(
        [
          {
            situation: "Buying fruit at the market",
            example: "I want the red apples, please.",
            note: "Red picks the apples you want.",
          },
          {
            situation: "Talking about your family",
            example: "My grandmother is very kind.",
            note: "Very makes the describing word stronger.",
          },
          {
            situation: "Shopping for clothes",
            example: "a small blue shirt",
            note: "Two describing words before one naming word.",
          },
          {
            situation: "Describing your school",
            example: "My school is big. My teacher is kind.",
            note: "After is, the describing word comes last.",
          },
          {
            situation: "Saying how you feel",
            example: "I am tired. The baby is hungry.",
            note: "Feelings are describing words for people.",
          },
        ],
        "Describing words around you",
        "Naming words say what things are. Describing words say what things are like.",
      ),
      DL(
        "Describing words at the fruit shop",
        "Sara buys apples at a fruit shop.",
        [
          ["Sara", "I want apples, please."],
          ["Man", "These red apples? Or these green ones?"],
          ["Sara", "The red ones, please. They look sweet."],
          ["Man", "Big apples for a small girl?"],
          ["Sara", "I am not small! I am very tall!"],
          ["Man", "Ha! Two kilos of very red apples for a very tall girl."],
        ],
      ),
      CMP(
        "Pattern 1 vs pattern 2",
        ["Before the naming word (a small cat)", "After is, am or are (The cat is small.)"],
        [
          ["The pattern", "describing word + naming word", "naming word + is/am/are + describing word"],
          ["Example", "a big dog, a red apple", "The dog is big. The apple is red."],
          ["Use it for", "Inside a longer sentence", "A whole sentence about one thing"],
          ["Watch out", "Never “a dog big”", "Never “The dog big” — the verb is missing"],
        ],
        {
          intro: "Two correct patterns — and two famous wrong ones. Learn all four lines.",
          verdict:
            "Describing word first, or describing word last after is. Never in the middle, and never without a verb.",
        },
      ),
      MS(
        [
          [
            "a cat small",
            "a small cat",
            "In English the describing word goes before the naming word.",
          ],
          [
            "The dog big.",
            "The dog is big.",
            "A describing word at the end needs is, am or are before it.",
          ],
          [
            "a big very dog",
            "a very big dog",
            "Very sits before the describing word, never after it.",
          ],
          [
            "The car is very speed.",
            "The car is very fast.",
            "Speed is a naming word. Fast is the describing word we need here.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Two patterns, one meaning",
        "“a big dog” and “The dog is big.” say the same thing in two ways. Use pattern one inside a sentence, and pattern two for a whole sentence about one thing.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Describing words are called adjectives. An adjective tells us what kind: big, small, red, happy. In English the describing word goes before its naming word: a small cat. After is, am or are it comes last: The cat is small. Very makes it stronger: a very big dog.",
          task: "Read the text two times. Then find the two patterns in it.",
        },
        writing: {
          task: "Describe three things around you with two describing words each, like “a small black phone”.",
          guide: ["1. a ___ ___", "2. a ___ ___", "3. a ___ ___"],
          model: "a small black phone · a big brown table · a red apple",
        },
        listening: {
          script:
            "A big dog. A small cat. A red apple. The apple is red. The dog is very big. Listen once more: the dog is very big, the apple is red.",
          task: "Listen and say each describing word you hear.",
        },
        speaking: {
          task: "Describe three things you can see. Use both patterns: “a ___ ___” and “The ___ is ___.”",
          frames: ["a ___ ___", "The ___ is ___."],
          checklist: [
            "I used both patterns.",
            "My describing words sit in the right place.",
          ],
        },
      }),
      LSP(
        [
          gls("adjective"),
          gls("describing word"),
          gls("Describing words are called adjectives."),
          gls("Every colour has a name."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Describing words are called adjectives.",
        "An adjective tells us what kind: size, colour, feeling or speed.",
        "In English the describing word goes before its naming word: a small cat.",
        "After is, am or are, the describing word comes last: The cat is small.",
        "Very makes a describing word stronger: a very big dog.",
      ]),
      RV(
        [
          {
            question: "Which word is a colour word?",
            options: ["chair", "green", "run"],
            correctIndex: 1,
            explanation: "Green is a colour word. You met red, blue, green, yellow, black and white in Chapter 06.",
            from: "Chapter 06 · Lesson 3",
          },
          {
            question: "Which word is a home object?",
            options: ["table", "tiger", "teacher"],
            correctIndex: 0,
            explanation: "Table is a home object. Tiger is an animal and teacher is a person.",
            from: "Chapter 06 · Lesson 5",
          },
          {
            question: "How many sounds are in the word “cat”?",
            options: ["One", "Two", "Three"],
            correctIndex: 2,
            explanation: "Three sounds: /k/ /æ/ /t/. You learned to segment words into sounds in Chapter 04.",
            from: "Chapter 04 · Lesson 6",
          },
        ],
        { title: "Look back — check your base", intro: "Quick questions from earlier lessons before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it whenever you are not sure.",
        questions: [
          MCQ(
            "Which word is the describing word in “The white horse runs.”?",
            [
              ["a", "white"],
              ["b", "horse"],
              ["c", "runs"],
            ],
            "a",
            fbx(
              "white",
              "White describes the horse — it tells us what kind. Horse names and runs is the action word.",
              "“Horse” names and “runs” acts — neither one tells us what kind.",
              "Describing words are called adjectives.",
            ),
            { hints: ["What kind of horse is it? Ask about its colour."] },
          ),
          MATCH(
            "Match each describing word to its question.",
            [
              ["w1", "big"],
              ["w2", "red"],
              ["w3", "happy"],
              ["w4", "slow"],
            ],
            [
              ["q1", "what size?"],
              ["q2", "what speed?"],
              ["q3", "what colour?"],
              ["q4", "what feeling?"],
            ],
            [
              ["w1", "q1"],
              ["w2", "q3"],
              ["w3", "q4"],
              ["w4", "q2"],
            ],
            fbx(
              "big → what size? · red → what colour? · happy → what feeling? · slow → what speed?",
              "Describing words answer “what kind?” in four ways: size, colour, feeling and speed.",
              undefined,
              "Describing words are called adjectives.",
            ),
            { hints: ["Think about size, colour, feeling and speed."] },
          ),
          FB(
            "Complete the rule.",
            "A describing word goes ___ its naming word.",
            ["before"],
            fbx(
              "before",
              "In English the describing word comes first: a small cat, a red apple, a happy baby.",
              undefined,
              "Describing words are called adjectives.",
            ),
            { hints: ["In “a big dog”, where does big sit?"] },
          ),
          LIS(
            "Listen and answer.",
            "The apple is red and sweet.",
            "Which two describing words do you hear?",
            ["red and sweet", "red, sweet"],
            fbx(
              "red and sweet",
              "Red and sweet describe the apple after is. They tell us what kind.",
              undefined,
              "Every colour has a name.",
            ),
            { hints: ["Listen for words that tell you what kind."] },
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
            "My bag heavy.",
            ["My bag is heavy."],
            fbx(
              "My bag is heavy.",
              "A describing word at the end needs is, am or are before it.",
              undefined,
              "Describing words are called adjectives.",
            ),
          ),
          MCQ(
            "Which one is correct English?",
            [
              ["a", "a small cat"],
              ["b", "a cat small"],
              ["c", "The cat small."],
            ],
            "a",
            fbx(
              "a small cat",
              "The describing word goes before the naming word. After is, am or are it comes last: The cat is small.",
              undefined,
              "Describing words are called adjectives.",
            ),
          ),
          DICT(
            "Listen and write the sentence.",
            "The apple is red.",
            ["The apple is red."],
            fbx(
              "The apple is red.",
              "Red describes the apple after is. The describing word comes last in this pattern.",
              undefined,
              "Every colour has a name.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Describe your world",
      instructions:
        "Describe three things around you with two describing words each, like “a small black phone”. Then write one full sentence: “The ___ is ___.”",
      minWords: 12,
      maxWords: 45,
    },
    homework: [
      "Describe your favourite food with two describing words.",
      "Look around your room. Describe three things: “a ___ ___”.",
      "Find three describing words in anything you read today.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Pronouns and Word Classification Review
  // =========================================================================
  {
    slug: "ch-07-l-05",
    minutes: 30,
    description:
      "Meet the replacement words — I, you, he, she, it, we, they — then review and classify the whole chapter.",
    outcomes: [
      "Use the seven basic pronouns",
      "Replace a naming word with the correct pronoun",
      "Classify any word as naming word, action word, describing word or pronoun",
      "Review the four word classes of Chapter 07",
    ],
    blocks: [
      LI(
        "This lesson has two parts. First you meet pronouns: the small words that replace naming words. Then you review the whole chapter. By the end you can classify any word you meet: naming word, action word, describing word or pronoun.",
        [
          "You know people words: man, woman, boy, girl (Chapter 06).",
          "You know animal words: cat, dog, bird, fish (Chapter 06).",
          "You know that the word 'I' is always a capital letter (Chapter 02).",
        ],
      ),
      H("Pronouns replace naming words"),
      T(
        "A pronoun replaces a naming word. It stops the repeat. Instead of “Sara reads and Sara smiles”, say “Sara reads and she smiles”. You need seven pronouns now: I, you, he, she, it, we, they.",
      ),
      {
        type: "definition",
        term: "pronoun",
        partOfSpeech: "grammar word",
        definition: "A pronoun replaces a naming word, so we do not repeat it.",
        example: {
          english: "Sara reads. She smiles.",
          translation: "She replaces Sara.",
        },
      },
      vocGlossary("Chapter words for this lesson", [
        { word: "pronoun", partOfSpeech: "grammar word", definition: "A small word that replaces a naming word: I, he, she, it." },
        { word: "word class", partOfSpeech: "grammar word", definition: "A group of words with the same job." },
        { word: "singular", partOfSpeech: "grammar word", definition: "One: one cat, one book." },
        { word: "plural", partOfSpeech: "grammar word", definition: "More than one: two cats, two books." },
      ]),
      TB(
        "Who is who — the seven pronouns",
        ["Pronoun", "It replaces"],
        [
          ["I", "the person speaking"],
          ["you", "the person listening"],
          ["he", "one male (the man, my brother)"],
          ["she", "one female (the woman, my sister)"],
          ["it", "one thing or animal (the book, the cat)"],
          ["we", "the speaker plus other people"],
          ["they", "more than one person, animal or thing"],
        ],
        "Seven small words replace thousands of names.",
      ),
      ST("How to choose the right pronoun", [
        {
          title: "Step 1 — Count first",
          text: "One or more than one? One uses he, she or it. More than one uses they.",
          examples: [
            { english: "one cat → it", note: "One thing or animal." },
            { english: "two cats → they", note: "More than one." },
          ],
        },
        {
          title: "Step 2 — Check male, female or thing",
          text: "He is for one male. She is for one female. It is for one thing or animal.",
          examples: [
            { english: "my father → he", note: "One male." },
            { english: "my mother → she", note: "One female." },
          ],
        },
        {
          title: "Step 3 — Check who speaks and who listens",
          text: "I is the speaker. You is the listener. We is the speaker plus others.",
          examples: [
            { english: "I am a student.", note: "I = the speaker." },
            { english: "You are my friend.", note: "You = the listener." },
          ],
        },
      ]),
      GR(
        "The pronoun rule",
        "Words that replace nouns are called pronouns. He, she and it replace naming words for one. They replaces naming words for more than one.",
        [
          { english: "The dog runs. → It runs.", translation: "It replaces the dog — one animal." },
          { english: "Sara and Leo sing. → They sing.", translation: "They replaces two people." },
          { english: "I am a student. You are my friend.", translation: "I = the speaker; you = the listener." },
        ],
        ["You is both one person and many people: “You are my friend.” “You are my friends.”"],
      ),
      AU(
        "Listen: the pronoun roll call",
        "I. You. He. She. It. We. They. The dog runs. It runs fast. Sara reads and she smiles. Sara and Leo sing. They sing. Listen once more: he, she, it, they.",
        0.85,
      ),
      EXD(
        "Pronouns in real life",
        [
          { english: "Amina is my sister. She is kind.", note: "She replaces Amina — one female.", domain: "family" },
          { english: "My cat is black. It sleeps on my bed.", note: "It replaces my cat — one animal.", domain: "home" },
          { english: "My friends like football. They play every day.", note: "They replaces my friends — more than one.", domain: "sport" },
          { english: "This is my pen. It is blue.", note: "It replaces the pen — one thing.", domain: "education" },
          { english: "Ali and I go to the market. We buy bread.", note: "We means Ali and me, the speaker.", domain: "shopping" },
          { english: "Where are you? You are late!", note: "You replaces the friend's name — the listener.", domain: "social" },
          { english: "My phone is new. It is fast.", note: "It replaces the phone — one thing.", domain: "technology" },
          { english: "The doctor helps my grandmother. She is kind.", note: "She replaces the doctor — one female.", domain: "health" },
          { english: "The horses live here. They run in the field.", note: "They replaces the horses — more than one animal.", domain: "nature" },
        ],
        "Every pronoun replaces a naming word. Watch who speaks, who listens, and how many.",
      ),
      US(
        [
          {
            situation: "Showing a family photo",
            example: "This is my grandfather. He is kind.",
            note: "Name the person once, then use he or she.",
          },
          {
            situation: "Talking about your pet",
            example: "My cat is black. It sleeps all day.",
            note: "It replaces one animal or one thing.",
          },
          {
            situation: "Sending a message to a friend",
            example: "Where are you? You are late!",
            note: "You replaces your friend's name.",
          },
          {
            situation: "Planning with friends",
            example: "We play on Friday. They watch.",
            note: "We includes the speaker; they is other people.",
          },
          {
            situation: "Talking about your class",
            example: "We read. They write. I listen.",
            note: "Pronouns let you talk fast without repeating names.",
          },
        ],
        "Pronouns around you",
        "Every language you speak has replacement words. English needs seven of them from today.",
      ),
      DL(
        "A family photo",
        "Sara shows Rami a photo of her family.",
        [
          ["Rami", "Who is this man?"],
          ["Sara", "That is my grandfather. He is very kind."],
          ["Rami", "And the woman next to him?"],
          ["Sara", "That is my grandmother. She tells good stories."],
          ["Rami", "And the two boys behind you?"],
          ["Sara", "My brothers. They play football every day."],
          ["Rami", "And where are you?"],
          ["Sara", "I am in the middle. I hold the camera!"],
        ],
      ),
      CMP(
        "he vs she",
        ["he — one male", "she — one female"],
        [
          ["Who it replaces", "One male: the man, my brother, Mr Ali", "One female: the woman, my sister, Sara"],
          ["Example", "My father works. He works at a bank.", "My mother cooks. She cooks rice."],
          ["Common mix-up", "Saying he for a woman — check the person", "Saying she for a thing — things take it"],
          ["With animals and things", "Use he only for a pet you know well", "For things and animals in general, use it"],
        ],
        {
          intro: "he and she are the pair beginners mix most. Slow down and check the person.",
          verdict:
            "he = one male, she = one female, it = one thing or animal, they = more than one. Count, then choose.",
        },
      ),
      MS(
        [
          [
            "My mother is a teacher. He teaches maths.",
            "My mother is a teacher. She teaches maths.",
            "Mother is one female — the pronoun is she.",
          ],
          [
            "Sara reads and Sara smiles and Sara runs.",
            "Sara reads and she smiles and she runs.",
            "Do not repeat the name. She replaces Sara.",
          ],
          [
            "The dog and the cat play. It plays.",
            "The dog and the cat play. They play.",
            "It replaces one. They replaces more than one.",
          ],
          [
            "Me am a student.",
            "I am a student.",
            "The pronoun for the speaker is I. I am a student.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Word classes are called parts of speech",
        "Grammar people call word classes “parts of speech”. There are eight in English. You now know four of them. The other four come later in the programme.",
      ),
      H("Chapter 07 review"),
      T(
        "You have met four word classes now. Naming words name. Action words act. Describing words tell us what kind. Pronouns replace. Read the table, then test yourself in the practice below.",
      ),
      TB(
        "The four word classes of Chapter 07",
        ["Word class", "Grammar word", "Its job", "Example"],
        [
          ["Naming word", "noun", "names a person, place, animal or thing", "cat, school, Sara"],
          ["Action word", "verb", "tells us what happens", "run, eat, sleep"],
          ["Describing word", "adjective", "tells us what kind", "big, red, happy"],
          ["Pronoun", "pronoun", "replaces a naming word", "I, he, she, it, they"],
        ],
        "One chapter, four jobs. Every English word you know now has a label.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Words that replace nouns are called pronouns. The seven pronouns are I, you, he, she, it, we, they. “Sara reads. She smiles.” He replaces one male. She replaces one female. It replaces one thing or animal. They replaces more than one. I is the speaker, and you is the listener.",
          task: "Read the text two times. Then say the seven pronouns from memory.",
        },
        writing: {
          task: "Write three sentences about your family. Name each person once, then use a pronoun: “My mother cooks. She cooks rice.”",
          guide: ["My ___ …", "He / She …", "They …"],
          model: "My father works. He works at a school. My brothers play. They play football.",
        },
        listening: {
          script:
            "I. You. He. She. It. We. They. The dog runs. It runs fast. Sara and Leo sing. They sing. Listen once more and repeat each pronoun with me.",
          task: "Listen and repeat each pronoun after the audio.",
        },
        speaking: {
          task: "Talk about three people you know. Name each person once, then use he or she.",
          frames: ["My ___ is a …", "He / She is …", "They are …"],
          checklist: [
            "I named each person once.",
            "Then I used he, she or they.",
          ],
        },
      }),
      LSP(
        [
          gls("pronoun"),
          gls("word class"),
          gls("singular"),
          gls("plural"),
          gls("Words that replace nouns are called pronouns."),
          gls("He, she and it replace naming words."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Words that replace nouns are called pronouns.",
        "The seven pronouns: I, you, he, she, it, we, they.",
        "He is one male, she is one female, it is one thing or animal, they is more than one.",
        "I is the speaker, you is the listener, we is the speaker plus others.",
        "You can now classify any word: naming word, action word, describing word or pronoun.",
      ]),
      RV(
        [
          {
            question: "Which word is a people word?",
            options: ["man", "milk", "Monday"],
            correctIndex: 0,
            explanation: "Man is a people word. You met man, woman, boy and girl in Chapter 06.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "What are the vowels?",
            options: ["A, E, I, O, U", "B, C, D, F", "A, B, C, D"],
            correctIndex: 0,
            explanation: "A, E, I, O and U are the vowels — every word needs at least one of them.",
            from: "Chapter 03 · Lesson 1",
          },
          {
            question: "Which one of these is an action word?",
            options: ["pen", "write", "window"],
            correctIndex: 1,
            explanation: "Write is an action word from Chapter 06. Pen and window are naming words.",
            from: "Chapter 06 · Lesson 6",
          },
          {
            question: "What are the four skills of English?",
            options: ["Listen, speak, read, write", "Run, walk, sit, stand", "Red, blue, green, white"],
            correctIndex: 0,
            explanation: "Listening, speaking, reading and writing are the four skills from your first chapter.",
            from: "Chapter 01 · Lesson 2",
          },
        ],
        { title: "Look back — check your base", intro: "Quick questions from earlier lessons before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it whenever you are not sure.",
        questions: [
          MCQ(
            "The women read. Which pronoun can replace “the women”?",
            [
              ["a", "she"],
              ["b", "they"],
              ["c", "it"],
            ],
            "b",
            fbx(
              "they",
              "“They” replaces more than one person. “She” is one female and “it” is one thing or animal.",
              "“She” fits one woman only, and “it” fits things and animals.",
              "Words that replace nouns are called pronouns.",
            ),
            { hints: ["Count the people first: one or many?"] },
          ),
          REORD(
            "Put the words in order.",
            "Sara reads a big book.",
            fbx(
              "Sara reads a big book.",
              "Order: naming word, action word, describing word, naming word. English is strict about word order.",
              undefined,
              "English word order is subject, verb, object.",
            ),
            { hints: ["Start with the naming word Sara. End with the naming word book."] },
          ),
          RD(
            "Read the little story and answer.",
            "My family photo",
            "This is my family. My father is a teacher. He works at a school. My mother is kind. She cooks rice. My brothers play football. They play every day.",
            "Which pronoun replaces “my brothers” in the last sentence?",
            [
              ["a", "they"],
              ["b", "he"],
              ["c", "it"],
            ],
            "a",
            fbx(
              "they",
              "“They” replaces more than one person — my brothers. “He” is one male and “it” is one thing or animal.",
              undefined,
              "He, she and it replace naming words.",
            ),
            { hints: ["Count the brothers: one or more than one?"] },
          ),
          FB(
            "Complete the rule.",
            "He, ___ and it replace naming words.",
            ["she"],
            fbx(
              "she",
              "He replaces one male, she replaces one female, it replaces one thing or animal.",
              undefined,
              "He, she and it replace naming words.",
            ),
            { hints: ["The pronoun for one female. Three letters."] },
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
            "Me am a student.",
            ["I am a student."],
            fbx(
              "I am a student.",
              "The pronoun for the speaker is I. I am a student.",
              undefined,
              "Words that replace nouns are called pronouns.",
            ),
          ),
          MCQ(
            "The bus is late. Which pronoun replaces “the bus”?",
            [
              ["a", "he"],
              ["b", "it"],
              ["c", "they"],
            ],
            "b",
            fbx(
              "it",
              "“It” replaces one thing or animal — the bus. “He” is one male and “they” is more than one.",
              undefined,
              "He, she and it replace naming words.",
            ),
          ),
          DICT(
            "Listen and write the sentence.",
            "They play football.",
            ["They play football."],
            fbx(
              "They play football.",
              "They is the pronoun; play is the action word. Three words, one complete idea.",
              undefined,
              "Words that replace nouns are called pronouns.",
            ),
          ),
          MCQ(
            "Which word is a describing word?",
            [
              ["a", "sleep"],
              ["b", "tall"],
              ["c", "milk"],
            ],
            "b",
            fbx(
              "tall",
              "Tall describes — it tells us what kind. Sleep is an action word and milk is a naming word.",
              undefined,
              "Describing words are called adjectives.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "The full label job",
      instructions:
        "Write these three sentences and label every word: “The small cat sleeps.” “She reads a big book.” “They run fast.” Use the labels naming word, action word, describing word and pronoun.",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Talk about your family for one minute. Use he, she and they.",
      "Look at a photo. Name each person once, then use a pronoun for them.",
      "Find one pronoun in anything you read today. Say what it replaces.",
    ],
  },
];
