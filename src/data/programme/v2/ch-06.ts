/**
 * PROMPT 57 production — Batch 3, Chapter 06: First Vocabulary.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the vocabulary chapter: every word group is taught with meaning
 * (glossary-backed Urdu/Hindi), sound (audio drills), use (worked example
 * sentences), contrast (a/an, my/the, colour order, in/on, statement vs
 * command), the mistakes beginners really make, and mixed-skill practice.
 * No bare word lists anywhere.
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

export const ch06Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — People and Family
  // =========================================================================
  {
    slug: "ch-06-l-01",
    minutes: 25,
    description:
      "Your first big word group: the people in your life. Family words, people words, and how to introduce your family with my, he and she.",
    outcomes: [
      "Name the members of a family in English",
      "Introduce family members with “This is my …”",
      "Ask “Who is this?” and answer it",
      "Choose he or she correctly for family words",
    ],
    blocks: [
      LI(
        "This lesson starts your first big word group: people. You will learn the family words — mother, father, sister, brother and more. You will also meet man, woman, boy, girl and baby. Then you will introduce your family in English.",
        [
          "You can read three-letter words with phonics (Chapter 04).",
          "You can read word families like -at and -an (Chapter 05).",
          "You know that names of people start with a capital letter (Chapter 02).",
        ],
      ),
      vocGlossary("Family words", [
        { word: "mother", partOfSpeech: "noun", definition: "your female parent" },
        { word: "father", partOfSpeech: "noun", definition: "your male parent" },
        { word: "sister", partOfSpeech: "noun", definition: "a girl with the same parents as you" },
        { word: "brother", partOfSpeech: "noun", definition: "a boy with the same parents as you" },
        { word: "grandmother", partOfSpeech: "noun", definition: "the mother of your mother or father" },
        { word: "grandfather", partOfSpeech: "noun", definition: "the father of your mother or father" },
        { word: "son", partOfSpeech: "noun", definition: "a male child in a family" },
        { word: "daughter", partOfSpeech: "noun", definition: "a female child in a family" },
        { word: "uncle", partOfSpeech: "noun", definition: "your father’s or mother’s brother" },
        { word: "aunt", partOfSpeech: "noun", definition: "your father’s or mother’s sister" },
        { word: "cousin", partOfSpeech: "noun", definition: "the child of your uncle or aunt" },
      ]),
      vocGlossary("People words", [
        { word: "family", partOfSpeech: "noun", definition: "a group of people who live together or love each other" },
        { word: "man", partOfSpeech: "noun", definition: "one male person" },
        { word: "woman", partOfSpeech: "noun", definition: "one female person" },
        { word: "boy", partOfSpeech: "noun", definition: "a young male person" },
        { word: "girl", partOfSpeech: "noun", definition: "a young female person" },
        { word: "baby", partOfSpeech: "noun", definition: "a very young child" },
        { word: "friend", partOfSpeech: "noun", definition: "a person you like and know well" },
      ]),
      H("Why start with people?"),
      T(
        "Think about your day. You see people everywhere. At home, you see your family. Outside, you see men, women, boys and girls. People words are the most useful first words in any language.",
      ),
      {
        type: "definition",
        term: "family",
        partOfSpeech: "noun",
        definition:
          "A family is a group of people who live together or love each other — parents, children, grandparents and more.",
        example: {
          english: "This is my family.",
          translation: "Mother, father, sister and brother are family words.",
        },
      },
      TB(
        "Family words at a glance",
        ["Word", "Who it is", "Example"],
        [
          ["mother", "your female parent", "This is my mother."],
          ["father", "your male parent", "This is my father."],
          ["sister", "a girl with the same parents as you", "I have one sister."],
          ["brother", "a boy with the same parents as you", "I have two brothers."],
          ["grandmother", "the mother of your mother or father", "My grandmother makes bread."],
          ["grandfather", "the father of your mother or father", "This is my grandfather."],
        ],
        "Grandmother and grandfather cover both sides of the family.",
      ),
      AU(
        "Listen: family and people words",
        "mother. father. sister. brother. grandmother. grandfather. son. daughter. uncle. aunt. cousin. man. woman. boy. girl. baby.",
        0.85,
      ),
      AU(
        "Listen: my family",
        "This is my mother. This is my father. This is my baby brother. Who is this? This is my grandmother.",
        0.9,
      ),
      ST(
        "Introduce a family member in three steps",
        [
          {
            title: "Step 1 — Point at the person",
            text: "Look at a family photo. Point at one person. Say the family word quietly to yourself first.",
            examples: [{ english: "(point) mother", note: "Say the word to yourself — no pressure yet." }],
          },
          {
            title: "Step 2 — Say the full sentence",
            text: "Now say it with the pattern: This is my + family word. The small word my shows the person is yours.",
            examples: [
              { english: "This is my mother.", note: "my = this person is in my family." },
              { english: "This is my uncle.", note: "The same pattern fits every family word." },
            ],
          },
          {
            title: "Step 3 — Add one true sentence",
            text: "Add one more sentence about the person. Use he for a man and she for a woman.",
            examples: [
              { english: "This is my aunt. She is a teacher.", note: "An aunt is a woman — she." },
              { english: "This is my father. He is tall.", note: "A father is a man — he." },
            ],
          },
        ],
      ),
      GR(
        "The my rule for family words",
        "When you talk about your own family, put my before the family word: my mother, my brother, my cousin.",
        [
          { english: "This is my sister.", translation: "my makes the sister yours." },
          { english: "My grandfather is old.", translation: "Every family word takes my the same way." },
          { english: "I love my family.", translation: "One my covers the whole family." },
        ],
        [
          "Do not use the when you introduce your family. “This is the mother” sounds like a stranger, not your mother.",
        ],
      ),
      EXD(
        "Family words in real life",
        [
          { english: "This is my mother. She is kind.", note: "Introduce first, then add he or she.", domain: "family" },
          { english: "I have one sister and two brothers.", note: "Use I have + numbers to describe your family.", domain: "family" },
          { english: "Who is this? — This is my cousin.", note: "Ask Who for people; answer with This is my …", domain: "social" },
          { english: "The woman in the shop is my aunt.", note: "People words work outside the family too.", domain: "shopping" },
          { english: "My grandfather walks with me to school.", note: "Family words fit into longer sentences.", domain: "education" },
          { english: "My mother works in a hospital.", note: "Tell a friend about your family’s work.", domain: "work" },
          { english: "My baby brother sleeps all day.", note: "Baby can come before another family word.", domain: "home" },
          { english: "That boy is my brother. He plays with my friends.", note: "Boy and girl work outside the family too.", domain: "sport" },
          { english: "My grandmother makes good bread.", note: "Family words meet food words.", domain: "food" },
        ],
        "Nine sentences you can say today — each one about a real person.",
      ),
      US(
        [
          {
            situation: "Showing a photo on your phone",
            example: "“Who is this?” “This is my grandfather.”",
            note: "The photo question every new friend asks.",
          },
          {
            situation: "Meeting a friend’s family",
            example: "“Hello! I am Sara. This is my brother.”",
            note: "Introductions start with names, then family words.",
          },
          {
            situation: "Talking to your teacher",
            example: "“My mother is a teacher too.”",
            note: "Family word + job word = a full sentence.",
          },
          {
            situation: "A form at the hospital",
            example: "“Family: mother, father, two sisters.”",
            note: "Forms often ask for a simple family list.",
          },
          {
            situation: "A video call with family",
            example: "“Look! The baby can stand.”",
            note: "People words carry the family news.",
          },
        ],
        "People words in daily life",
        "People words open every conversation about your life.",
      ),
      DL(
        "A family photo",
        "Sara shows her friend Omar a photo of her family.",
        [
          ["Omar", "Sara! Is this your family?"],
          ["Sara", "Yes! This is my mother and this is my father."],
          ["Omar", "Who is this? Is it your sister?"],
          ["Sara", "No, she is my cousin. Her name is Hana."],
          ["Omar", "And the baby?"],
          ["Sara", "The baby is my brother. He is one!"],
          ["Omar", "One! A beautiful family, Sara."],
        ],
      ),
      CMP(
        "my mother vs the mother",
        ["my + family word", "the + family word"],
        [
          ["Meaning", "The person belongs to YOUR family", "A mother — but not yours"],
          ["When to use it", "Introducing your family", "Talking about someone else’s mother"],
          ["Example", "“This is my mother.”", "“Where is the baby’s mother?”"],
          ["How it sounds", "Warm and personal", "About another person"],
        ],
        {
          intro: "English needs my before family words when you introduce your people.",
          verdict: "Say my with your own family. Keep the for people both speakers know — and for things.",
        },
      ),
      MS(
        [
          [
            "This is the mother.",
            "This is my mother.",
            "When you show YOUR family, say my. “The mother” sounds like any woman with a child.",
          ],
          [
            "I have one sister and two brother.",
            "I have one sister and two brothers.",
            "After two, the noun takes -s: two brothers. You will learn plurals fully in Chapter 10.",
          ],
          [
            "This is my aunt. He is a teacher.",
            "This is my aunt. She is a teacher.",
            "An aunt is a woman. Women take she; men take he.",
          ],
          [
            "This is my Mother.",
            "This is my mother.",
            "Family words are not names. Use a small letter — only names like Sara take capitals (Chapter 02).",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "he and she: one small word, big news",
        "In Urdu and Hindi, one word can cover he and she. English has two. Train the habit: think man or woman first, then choose he or she.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "This is my family. My mother is a teacher. My father works in a shop. I have one sister and one baby brother. My grandmother lives with us. She makes good bread. My grandfather walks with me to school. I love my family.",
          task: "Read the text two times. Then say three family words from it.",
        },
        writing: {
          task: "Write about three people in your family. Use “This is my …” and one more sentence for each person.",
          guide: ["This is my ______.", "She is ______.", "He is ______."],
          model: "This is my mother. She is kind. This is my brother. He is five.",
        },
        listening: {
          script:
            "Who is this? This is my grandmother. She is my father’s mother. And this is my baby cousin. He is one.",
          task: "Listen and count the family words you hear.",
        },
        speaking: {
          task: "Show a family photo, or think of one. Introduce three people from it.",
          frames: ["Who is this? — This is my …", "She is …", "He is …"],
          checklist: [
            "I introduced three people.",
            "I used my before every family word.",
            "I used he and she correctly.",
          ],
        },
      }),
      LSP(
        [
          gls("This is my mother."),
          gls("I have one sister and two brothers."),
          gls("Who is this? — This is my grandfather."),
          gls("family"),
          gls("mother"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Family words name the people closest to you: mother, father, sister, brother and more.",
        "Introduce family with “This is my …” — the word my makes the person yours.",
        "Ask “Who is this?” about people. Ask “What is it?” about animals and things.",
        "He is for men and boys. She is for women and girls.",
        "Family words use small letters — only names like Sara use capitals.",
      ]),
      RV(
        [
          {
            question: "How many letters are in the English alphabet?",
            options: ["25", "26", "30"],
            correctIndex: 1,
            explanation: "The alphabet has 26 letters — you met them all in the alphabet chapter.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "Which word family do “cat”, “hat” and “mat” belong to?",
            options: ["-at", "-an", "-it"],
            correctIndex: 0,
            explanation: "They all end with -at — a word family from your reading chapter.",
            from: "Chapter 05 · Lesson 3",
          },
          {
            question: "When you read a word, you use letter…",
            options: ["names", "sounds", "colours"],
            correctIndex: 1,
            explanation: "Reading joins letter sounds; names are for spelling aloud.",
            from: "Chapter 04 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "You show a photo of your father. What do you say?",
            [
              ["a", "This is the father."],
              ["b", "This is my father."],
              ["c", "He father is this."],
            ],
            "b",
            fb(
              "This is my father.",
              "my shows that the person is YOUR father. This is the standard way to introduce family.",
              "“The father” sounds like any father — not yours.",
            ),
            { skill: "vocabulary", hints: ["Think about the small word before father."] },
          ),
          FB(
            "Complete the sentence.",
            "This is ___ sister.",
            ["my"],
            fb("my", "The word my makes the sister yours. It comes before every family word.", "The and a do not introduce your own family."),
            { skill: "vocabulary", hints: ["The word has two letters. It means the person is yours."] },
          ),
          MATCH(
            "Match each family word to the person it names.",
            [
              ["mother", "mother"],
              ["father", "father"],
              ["grandmother", "grandmother"],
              ["uncle", "uncle"],
            ],
            [
              ["p1", "your female parent"],
              ["p2", "your male parent"],
              ["p3", "your mother’s mother"],
              ["p4", "your father’s or mother’s brother"],
            ],
            [
              ["mother", "p1"],
              ["father", "p2"],
              ["grandmother", "p3"],
              ["uncle", "p4"],
            ],
            fb(
              "mother → your female parent, father → your male parent, grandmother → your mother’s mother, uncle → your father’s or mother’s brother",
              "Each family word names one person in the family tree.",
            ),
            { skill: "vocabulary", hints: ["Think about who each person is in a family."] },
          ),
          LIS(
            "Listen and answer.",
            "This is my grandmother.",
            "Who is it?",
            ["grandmother", "my grandmother", "It is my grandmother."],
            fb(
              "My grandmother",
              "You heard the family word grandmother — the mother of a parent.",
              "Mother and father are parents; grandmother is one step up the family tree.",
            ),
            { skill: "listening", hints: ["The family word comes after my."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Your aunt is a woman. Which word do you use for her?",
            [
              ["a", "he"],
              ["b", "she"],
              ["c", "it"],
            ],
            "b",
            fb(
              "she",
              "An aunt is a woman, and she is the word for women.",
              "He is for men and boys; it is for things and animals.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "This is my grandfather.",
            fb(
              "This is my grandfather",
              "The order is: This + is + my + family word.",
              "My comes before the family word, never after it.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "This is my uncle. She is my father’s brother.",
            ["This is my uncle. He is my father’s brother.", "He is my father’s brother."],
            fb(
              "He is my father’s brother.",
              "An uncle is a man, so the pronoun is he.",
              "She is only for women and girls — aunts, mothers, sisters.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I have one sister and two brothers.",
            ["I have one sister and two brothers."],
            fb(
              "I have one sister and two brothers.",
              "One sister is singular; two brothers is plural with -s.",
              "After numbers bigger than one, the noun takes -s.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My family in English",
      instructions:
        "Write about four people in your family. Start each one with “This is my …”. Then add one more sentence with he or she. Example: “This is my mother. She is kind.”",
      minWords: 16,
      maxWords: 60,
    },
    homework: [
      "Draw your family tree and write the English word under every person.",
      "Say each family word out loud five times: mother, father, sister, brother, grandmother, grandfather, son, daughter, uncle, aunt, cousin.",
      "Show a family photo to a friend and introduce two people in English.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Animals
  // =========================================================================
  {
    slug: "ch-06-l-02",
    minutes: 25,
    description:
      "Ten animal words, the question “What is it?”, the pattern “I like cats” — and the small word an before elephant.",
    outcomes: [
      "Name ten common animals in English",
      "Ask “What is it?” and answer with “It is a …”",
      "Say which animals you like with “I like …”",
      "Choose a or an before an animal word",
    ],
    blocks: [
      LI(
        "Animals are everywhere: in homes, on farms, in books and on screens. In this lesson you learn ten animal words. You learn to ask “What is it?” and to answer. You also learn to say which animals you like.",
        [
          "You can read three-letter words like cat and sun (Chapter 05 · Lesson 1).",
          "You can hear the first sound of a word (Chapter 04 · Lesson 2).",
          "You know that “Who is this?” asks about people (Lesson 1).",
        ],
      ),
      vocGlossary("Animal words", [
        { word: "animal", partOfSpeech: "noun", definition: "a living thing that is not a person or a plant" },
        { word: "cat", partOfSpeech: "noun", definition: "a small pet that says meow" },
        { word: "dog", partOfSpeech: "noun", definition: "a friendly pet that says woof" },
        { word: "bird", partOfSpeech: "noun", definition: "an animal that can fly" },
        { word: "fish", partOfSpeech: "noun", definition: "an animal that lives in water" },
        { word: "horse", partOfSpeech: "noun", definition: "a big animal that people ride" },
        { word: "cow", partOfSpeech: "noun", definition: "a farm animal that gives milk" },
        { word: "sheep", partOfSpeech: "noun", definition: "a farm animal with wool" },
        { word: "lion", partOfSpeech: "noun", definition: "a big wild cat" },
        { word: "elephant", partOfSpeech: "noun", definition: "a very big grey animal" },
        { word: "monkey", partOfSpeech: "noun", definition: "an animal that climbs trees" },
      ]),
      H("Animals in three groups"),
      T(
        "Animal words are easy to remember in groups. Some animals live with people. Some live on farms. Some live free in the wild. Put each new word into a group, and your memory holds it better.",
      ),
      TB(
        "Pet, farm or wild?",
        ["Group", "Meaning", "Animals"],
        [
          ["Pet", "lives with people at home", "cat, dog"],
          ["Farm", "lives on a farm and works or gives food", "horse, cow, sheep"],
          ["Wild", "lives free in nature", "lion, elephant, monkey"],
        ],
        "Birds and fish live everywhere: with people, on farms and in the wild.",
      ),
      AU(
        "Listen: animal words",
        "cat. dog. bird. fish. horse. cow. sheep. lion. elephant. monkey.",
        0.85,
      ),
      AU(
        "Listen: at the zoo",
        "What is it? It is a lion. It is an elephant. I like lions. I like elephants.",
        0.9,
      ),
      ST(
        "Ask and answer about an animal",
        [
          {
            title: "Step 1 — Ask with What",
            text: "People take Who. Animals and things take What. Ask: What is it?",
            examples: [{ english: "What is it?", note: "What asks about animals and things." }],
          },
          {
            title: "Step 2 — Answer with It is a or an",
            text: "Start the answer with It is. Then choose a or an by the first sound of the animal word.",
            examples: [
              { english: "It is a cat.", note: "Cat starts with the consonant sound /k/." },
              { english: "It is an elephant.", note: "Elephant starts with the vowel sound /e/." },
            ],
          },
          {
            title: "Step 3 — Say what you like",
            text: "Now tell people your favourite animals. Use I like + the animal word with -s. The plural means animals in general.",
            examples: [
              { english: "I like cats.", note: "All cats, everywhere — not one special cat." },
              { english: "I like horses.", note: "Horses with -s: the general like." },
            ],
          },
        ],
      ),
      GR(
        "a or an?",
        "Use an before a vowel SOUND: an elephant, an apple. Use a before a consonant sound: a cat, a dog.",
        [
          { english: "It is a dog.", translation: "Dog starts with the consonant sound /d/." },
          { english: "It is an elephant.", translation: "Elephant starts with the vowel sound /e/." },
          { english: "I see a bird and an egg.", translation: "The choice follows the sound of the next word." },
        ],
        [
          "Listen to the sound, not the letter: an hour (silent h) but a house.",
        ],
      ),
      EXD(
        "Animal words in real life",
        [
          { english: "What is it? — It is a bird.", note: "The basic animal question and answer.", domain: "nature" },
          { english: "I like cats.", note: "Plural cats means cats in general — all cats, everywhere.", domain: "everyday" },
          { english: "The cow gives us milk.", note: "Farm animals connect to food words.", domain: "food" },
          { english: "My dog sleeps near the door.", note: "Pet words plus home words make true sentences.", domain: "home" },
          { english: "The monkey has my bag!", note: "A zoo story: animals can take things.", domain: "travel" },
          { english: "My sister likes fish.", note: "Family words and animal words mix easily.", domain: "family" },
          { english: "Look at the big elephant!", note: "Look at + animal turns eyes the right way.", domain: "social" },
          { english: "The lion runs fast.", note: "Animal words meet action words in Lesson 6.", domain: "sport" },
        ],
        "Eight sentences with animals — from your home to the zoo.",
      ),
      US(
        [
          {
            situation: "A video call with a friend",
            example: "“What is it? A cat? Sweet!”",
            note: "Animal questions start friendly talk.",
          },
          {
            situation: "At the market",
            example: "“Fish, please. I like fish.”",
            note: "Animal words appear on market signs too.",
          },
          {
            situation: "Reading a child’s book",
            example: "“The cat sat on the mat.”",
            note: "First storybooks are full of animals — and word families you already know.",
          },
          {
            situation: "On the road",
            example: "“Look! Cows on the road.”",
            note: "Name what you see — a free English game.",
          },
          {
            situation: "Searching online",
            example: "“I like monkey videos.”",
            note: "Animal words power your searches too.",
          },
        ],
        "Animal words everywhere",
        "From the market to the internet, animals fill English talk.",
      ),
      DL(
        "At the zoo",
        "Bilal and his daughter Hana look at the animals.",
        [
          ["Hana", "Dad! What is it?"],
          ["Bilal", "It is an elephant. A very big elephant."],
          ["Hana", "And this? What is it?"],
          ["Bilal", "It is a lion. The lion sleeps."],
          ["Hana", "I like lions."],
          ["Bilal", "Me too. And look — the baby monkey!"],
          ["Hana", "The baby is small. I like monkeys too."],
        ],
      ),
      CMP(
        "“I like cats” vs “I like the cat”",
        ["I like cats (plural)", "I like the cat (one cat)"],
        [
          ["What it means", "Cats in general — all cats everywhere", "One special cat that you both know"],
          ["When to use it", "Talking about favourites", "Pointing at one animal"],
          ["Example", "“I like cats. They are beautiful.”", "“I like the cat next door.”"],
          ["Watch out", "“I like cat.” sounds like meat on a plate", "The points at one cat only"],
        ],
        {
          intro: "English uses plurals for general likes. This is new for many Urdu and Hindi speakers.",
          verdict: "For general likes, say I like cats, dogs and horses — with -s.",
        },
      ),
      MS(
        [
          [
            "I like cat.",
            "I like cats.",
            "General likes need the plural. “I like cat” sounds like you want to eat one.",
          ],
          [
            "It is a elephant.",
            "It is an elephant.",
            "Elephant starts with a vowel sound. Vowel sounds take an.",
          ],
          [
            "Who is it? — It is a dog.",
            "What is it? — It is a dog.",
            "Who is for people. Animals and things take What.",
          ],
          [
            "I like the cats.",
            "I like cats.",
            "The means special cats. For animals in general, drop the and add -s.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "The food trap",
        "“I like cat.” and “I like dog.” sound like food on your plate. Add -s — “I like cats.” — and you mean the living animal. This small -s changes everything.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Animals are all around us. The cat and the dog live in our homes. The cow, the sheep and the horse live on farms. The lion, the elephant and the monkey live in the wild. What is your favourite animal? I like cats.",
          task: "Read the text two times. Then name the three farm animals in it.",
        },
        writing: {
          task: "Write three sentences about animals: one animal you like, one big animal, one small animal.",
          guide: ["I like ______.", "The ______ is big.", "The ______ is small."],
          model: "I like horses. The elephant is big. The cat is small.",
        },
        listening: {
          script:
            "What is it? It is a sheep. It is white. And look — what is it now? It is an elephant. A big, grey elephant.",
          task: "Listen and say the two animals you hear.",
        },
        speaking: {
          task: "Name five animals you see today — at home, outside or in a book. Say if you like them.",
          frames: ["What is it? — It is a …", "It is an …", "I like …"],
          checklist: [
            "I named five animals.",
            "I used an before a vowel sound.",
            "I said one animal I like.",
          ],
        },
      }),
      LSP(
        [
          gls("I like cats."),
          gls("What is it? — It is a bird."),
          gls("animal"),
          gls("cat"),
          gls("dog"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Ten animal words: cat, dog, bird, fish, horse, cow, sheep, lion, elephant, monkey.",
        "Ask “What is it?” about animals. Answer with “It is a …” or “It is an …”.",
        "an comes before vowel sounds: an elephant. a comes before consonant sounds: a cat.",
        "For general likes use the plural: “I like cats.” — never “I like cat.”",
        "Group animals as pets, farm animals and wild animals to remember them.",
      ]),
      RV(
        [
          {
            question: "Which word rhymes with “cat”?",
            options: ["dog", "hat", "sun"],
            correctIndex: 1,
            explanation: "Cat and hat end with the same sound — a rhyme from your phonics chapter.",
            from: "Chapter 04 · Lesson 3",
          },
          {
            question: "What is the first sound of “fish”?",
            options: ["/f/", "/s/", "/i/"],
            correctIndex: 0,
            explanation: "Fish starts with /f/ — top teeth on bottom lip.",
            from: "Chapter 04 · Lesson 2",
          },
          {
            question: "Which letters are the vowels?",
            options: ["A, E, I, O, U", "B, C, D", "S, T, P"],
            correctIndex: 0,
            explanation: "A, E, I, O and U are the vowel letters. an comes before words that start with these sounds.",
            from: "Chapter 03 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Which sentence means you like cats in general?",
            [
              ["a", "I like cat."],
              ["b", "I like cats."],
              ["c", "I like the cat."],
            ],
            "b",
            fb(
              "I like cats.",
              "The plural cats means all cats — cats in general.",
              "“I like cat” sounds like food. “I like the cat” means one special cat.",
            ),
            { skill: "vocabulary", hints: ["General likes use a plural word with -s."] },
          ),
          FB(
            "Write a or an.",
            "It is ___ elephant.",
            ["an"],
            fb("an", "Elephant starts with the vowel sound /e/, so it takes an.", "a is only for consonant sounds, like /k/ in cat."),
            { skill: "grammar", hints: ["Say the first sound of the animal word."] },
          ),
          MATCH(
            "Match each animal to the true fact.",
            [
              ["cow", "cow"],
              ["lion", "lion"],
              ["sheep", "sheep"],
              ["bird", "bird"],
            ],
            [
              ["f1", "it gives milk"],
              ["f2", "it is a big wild cat"],
              ["f3", "it has wool"],
              ["f4", "it can fly"],
            ],
            [
              ["cow", "f1"],
              ["lion", "f2"],
              ["sheep", "f3"],
              ["bird", "f4"],
            ],
            fb(
              "cow → it gives milk, lion → it is a big wild cat, sheep → it has wool, bird → it can fly",
              "One true fact anchors each animal word in your memory.",
            ),
            { skill: "vocabulary", hints: ["Think about what each animal does or gives us."] },
          ),
          LIS(
            "Listen and answer.",
            "I like horses.",
            "Which animal does the speaker like?",
            ["horses", "horse", "I like horses."],
            fb(
              "Horses",
              "You heard “I like horses” — the plural with -s, because the speaker likes horses in general.",
              "Listen for the -s at the end: horse is one, horses is many.",
            ),
            { skill: "listening", hints: ["Listen for the animal word at the end of the sentence."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "You see an animal at the zoo. Which question is correct?",
            [
              ["a", "Who is it?"],
              ["b", "What is it?"],
              ["c", "Who is this?"],
            ],
            "b",
            fb(
              "What is it?",
              "Animals and things take What. Who is only for people.",
              "“Who is this?” works for your family, not for a monkey.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I like dog.",
            ["I like dogs."],
            fb(
              "I like dogs.",
              "General likes take the plural: dogs with -s.",
              "“I like dog” sounds like food on a plate.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "It is an elephant.",
            ["It is an elephant."],
            fb(
              "It is an elephant.",
              "Elephant starts with a vowel sound, so the sentence uses an.",
              "a cat, a dog — but an elephant, an egg.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My animal sentences",
      instructions:
        "Write three sentences about animals: one animal you like, one big animal, one small animal. Use “I like …” with a plural, and use a or an correctly.",
      minWords: 9,
      maxWords: 45,
    },
    homework: [
      "Name five animals you see today — at home, outside, on TV or in a book.",
      "Say “I like …” with the plural of three animals you love.",
      "Draw two animals and write their English words under them.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Food and Colours
  // =========================================================================
  {
    slug: "ch-06-l-03",
    minutes: 25,
    description:
      "Food words and the six basic colour words — with the pattern “a red apple”, the question “What colour is it?”, and the milk-and-water rule.",
    outcomes: [
      "Name seven common foods and drinks",
      "Name the six basic colours",
      "Put a colour before a noun: “a red apple”",
      "Ask “What colour is it?” and answer with “It is …”",
    ],
    blocks: [
      LI(
        "You know animals now. This lesson brings food — the words you use at every meal. It also brings the six basic colours. Food words plus colour words describe your whole kitchen.",
        [
          "You know a and an: a cat, an elephant (Lesson 2).",
          "You can read words with two-letter sounds like sh and ch (Chapter 05 · Lesson 4).",
          "You can blend sounds to read new words (Chapter 04 · Lesson 5).",
        ],
      ),
      vocGlossary("Food and drink words", [
        { word: "food", partOfSpeech: "noun", definition: "everything people eat" },
        { word: "bread", partOfSpeech: "noun", definition: "baked food made from flour" },
        { word: "milk", partOfSpeech: "noun", definition: "the white drink from cows" },
        { word: "rice", partOfSpeech: "noun", definition: "small white grains, eaten warm" },
        { word: "water", partOfSpeech: "noun", definition: "the drink with no colour" },
        { word: "egg", partOfSpeech: "noun", definition: "the food a hen makes" },
        { word: "apple", partOfSpeech: "noun", definition: "a round sweet fruit" },
        { word: "fruit", partOfSpeech: "noun", definition: "sweet food that grows on trees and plants" },
      ]),
      H("The six basic colours"),
      vocGlossary("Colour words", [
        { word: "red", partOfSpeech: "adjective", definition: "the colour of blood" },
        { word: "blue", partOfSpeech: "adjective", definition: "the colour of the sky" },
        { word: "green", partOfSpeech: "adjective", definition: "the colour of grass" },
        { word: "yellow", partOfSpeech: "adjective", definition: "the colour of the sun" },
        { word: "black", partOfSpeech: "adjective", definition: "the darkest colour" },
        { word: "white", partOfSpeech: "adjective", definition: "the colour of snow" },
      ]),
      T(
        "Colours describe the world. The sky is blue. Grass is green. Milk is white. Learn these six colour words now. More colours come later in the programme.",
      ),
      TB(
        "Colours around you",
        ["Colour", "Things that are this colour"],
        [
          ["red", "apples, blood, many flags"],
          ["blue", "the sky, the sea"],
          ["green", "grass, leaves, trees"],
          ["yellow", "the sun, many flowers"],
          ["black", "the night, some cats"],
          ["white", "milk, rice, snow"],
        ],
        "Say the colours of five things near you right now.",
      ),
      AU(
        "Listen: food and colour words",
        "bread. milk. rice. water. egg. apple. red. blue. green. yellow. black. white.",
        0.85,
      ),
      AU(
        "Listen: what colour is it?",
        "What colour is the apple? The apple is green. What colour is the egg? The egg is white.",
        0.9,
      ),
      ST(
        "Describe food with a colour",
        [
          {
            title: "Step 1 — Say the food word first",
            text: "Choose the food you want to describe. Say the word alone, clearly.",
            examples: [{ english: "apple", note: "One word, short and clear." }],
          },
          {
            title: "Step 2 — Put the colour BEFORE",
            text: "In English the colour comes BEFORE the food word. This order never changes.",
            examples: [
              { english: "a red apple", note: "a + colour + food." },
              { english: "white milk", note: "Not “milk white” — colour first." },
            ],
          },
          {
            title: "Step 3 — Use is for the colour alone",
            text: "There is a second pattern. After is, the colour stands alone. This answers the question What colour is it?",
            examples: [
              { english: "The apple is red.", note: "After is: colour only, no noun." },
              { english: "What colour is it? — It is white.", note: "The question and answer pair for colours." },
            ],
          },
        ],
      ),
      GR(
        "Colour before the thing",
        "Put the colour word BEFORE the noun: a red apple, green fruit. After the verb is, the colour stands ALONE: The apple is red.",
        [
          { english: "I have a red apple.", translation: "The colour sits between a and the noun." },
          { english: "The milk is white.", translation: "After is, the colour stands alone." },
          { english: "I like green fruit.", translation: "Colour first, food second — always." },
        ],
      ),
      EXD(
        "Food and colours in real life",
        [
          { english: "I like red apples.", note: "Colour before the noun: red apples.", domain: "food" },
          { english: "Water has no colour.", note: "Some things have no colour — say it simply.", domain: "everyday" },
          { english: "The baby drinks milk.", note: "Food words plus family words make daily news.", domain: "family" },
          { english: "I eat rice and bread.", note: "Name your meals with food words.", domain: "food" },
          { english: "The black pen is on the white table.", note: "Two colours in one sentence — colour + object each time.", domain: "home" },
          { english: "The shop has green apples and red apples.", note: "Market stalls are full of colour words.", domain: "shopping" },
          { english: "My school bag is blue.", note: "Colours describe the things you own.", domain: "education" },
          { english: "The white sheep eats green grass.", note: "Animals, colours and nature in one true sentence.", domain: "nature" },
          { english: "The man with the black bag is my uncle.", note: "Colours help you point at people.", domain: "work" },
        ],
        "Nine colour-filled sentences from real life.",
      ),
      US(
        [
          {
            situation: "Ordering tea",
            example: "“Tea with milk, please.”",
            note: "Milk is one of the first words travellers use.",
          },
          {
            situation: "Shopping for fruit",
            example: "“I like the red apples.”",
            note: "Point and choose with colour words.",
          },
          {
            situation: "Cooking with family",
            example: "“Rice or bread? — Rice, please.”",
            note: "Meal-time questions use food words.",
          },
          {
            situation: "Describing your home",
            example: "“My door is blue and my chairs are white.”",
            note: "Colours describe every object you own.",
          },
          {
            situation: "Asking for a drink",
            example: "“Water, please. Cold water.”",
            note: "Water may be the most useful word in any language.",
          },
        ],
        "From kitchen to market",
        "You will use these words at every meal and every shop.",
      ),
      DL(
        "At the breakfast table",
        "Hana and her mother talk about breakfast.",
        [
          ["Mother", "Rice or bread, Hana?"],
          ["Hana", "Bread and an egg, please."],
          ["Mother", "Good choice. And milk? You like milk."],
          ["Hana", "Yes! And an apple. A red apple."],
          ["Mother", "Red apples for my girl. Here you are."],
          ["Hana", "Thank you, Mother!"],
        ],
      ),
      CMP(
        "“a red apple” vs “an apple red”",
        ["Colour FIRST (correct)", "Colour SECOND (wrong)"],
        [
          ["The pattern", "a + colour + noun: a red apple", "a + noun + colour: an apple red"],
          ["Is it English?", "Yes — this is the only correct order", "No — listeners stop and think"],
          ["Why learners say it", "They practise the order early", "Their language puts the colour after the noun"],
          ["How to fix it", "Say “a red apple” three times fast", "Stop and rebuild: a… red… apple"],
        ],
        {
          intro: "This is the biggest word-order difference between English and Urdu/Hindi in this chapter.",
          verdict: "Train the order like a drum: a — RED — apple.",
        },
      ),
      MS(
        [
          [
            "I drink a milk.",
            "I drink milk.",
            "Milk, water and rice take no a. You cannot count them — no a, no an.",
          ],
          [
            "It is a apple red.",
            "It is a red apple.",
            "Two errors: an before vowel sounds, and the colour goes first.",
          ],
          [
            "The egg is a white.",
            "The egg is white.",
            "After is, the colour stands alone — no a before it.",
          ],
          [
            "I like a rice.",
            "I like rice.",
            "Rice is uncountable, like milk and water. Say rice, bread and water with no a.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Count it or not?",
        "Some foods you can count: one egg, two eggs, three apples. Some foods you cannot count: milk, water, rice, bread. Countable foods take a or an. Uncountable foods stand alone. You will learn this fully in a later chapter.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My family eats good food. In the morning we have bread, eggs and milk. My father likes rice. My mother likes fruit. Our apples are red. Our table is white. I drink water with my food. What colour is your food?",
          task: "Read the text two times. Then say the four food words you found.",
        },
        writing: {
          task: "Write about five foods you like. Give each one a colour.",
          guide: ["I like ______ (food).", "It is ______ (colour).", "My ______ is ______."],
          model: "I like rice. It is white. My apples are red.",
        },
        listening: {
          script:
            "Look at the apple. What colour is it? It is red. And the egg? The egg is white. The milk is white too. But the pen — the pen is black.",
          task: "Listen and say the four colours you hear.",
        },
        speaking: {
          task: "Look around your room. Describe five things with a colour.",
          frames: ["What colour is it? — It is …", "My … is …", "The … is …"],
          checklist: [
            "I described five things.",
            "I put every colour before its noun.",
            "I answered with “It is …” at least once.",
          ],
        },
      }),
      LSP(
        [
          gls("Every colour has a name."),
          gls("food"),
          gls("colour"),
          gls("apple"),
          gls("water"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Food words: bread, milk, rice, water, egg, apple, fruit.",
        "Six colour words: red, blue, green, yellow, black, white.",
        "The colour comes BEFORE the noun: a red apple.",
        "After is, the colour stands alone: The apple is red.",
        "Milk, water and rice take no a or an — you cannot count them.",
        "Ask “What colour is it?” and answer “It is …”",
      ]),
      RV(
        [
          {
            question: "The sh in “sheep” makes…",
            options: ["one sound", "two sounds", "no sound"],
            correctIndex: 0,
            explanation: "S-h is a digraph: two letters, one sound — from your reading chapter.",
            from: "Chapter 05 · Lesson 4",
          },
          {
            question: "How many sounds are in “fish”?",
            options: ["2", "3", "4"],
            correctIndex: 1,
            explanation: "Fish has three sounds: /f/ /ɪ/ /ʃ/ — s-h counts as one sound.",
            from: "Chapter 04 · Lesson 6",
          },
          {
            question: "What do we call words that end with the same sound, like cat and hat?",
            options: ["rhymes", "colours", "letters"],
            correctIndex: 0,
            explanation: "Cat and hat rhyme — they end with the same sound.",
            from: "Chapter 04 · Lesson 3",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Which word order is correct?",
            [
              ["a", "an apple red"],
              ["b", "a red apple"],
              ["c", "a apple red"],
            ],
            "b",
            fb(
              "a red apple",
              "The colour comes before the noun, and apple takes a.",
              "“An apple red” has two problems: wrong order and the wrong small word.",
            ),
            { skill: "grammar", hints: ["In English, the colour comes before the food word."] },
          ),
          FB(
            "Complete the sentence with a colour.",
            "The milk is ___.",
            ["white"],
            fb("white", "Milk is white — after is, the colour stands alone.", "Red, blue and green do not fit milk."),
            { skill: "vocabulary", hints: ["Think about the colour of milk."] },
          ),
          MATCH(
            "Match each food to its clue.",
            [
              ["apple", "apple"],
              ["milk", "milk"],
              ["egg", "egg"],
              ["rice", "rice"],
            ],
            [
              ["c1", "a red or green fruit"],
              ["c2", "a cow makes it"],
              ["c3", "a hen makes it"],
              ["c4", "small white grains"],
            ],
            [
              ["apple", "c1"],
              ["milk", "c2"],
              ["egg", "c3"],
              ["rice", "c4"],
            ],
            fb(
              "apple → a red or green fruit, milk → a cow makes it, egg → a hen makes it, rice → small white grains",
              "A clue anchors each food word in your memory.",
            ),
            { skill: "vocabulary", hints: ["Think about where each food comes from."] },
          ),
          LIS(
            "Listen and answer.",
            "What colour is the apple? The apple is green.",
            "What colour is the apple?",
            ["green"],
            fb(
              "Green",
              "You heard “The apple is green.” — the colour comes after is.",
              "Apples can be red too, but the audio says green.",
            ),
            { skill: "listening", hints: ["Listen for the colour word after “is”."] },
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
              ["a", "I drink a water."],
              ["b", "I drink water."],
              ["c", "I drink an water."],
            ],
            "b",
            fb(
              "I drink water.",
              "Water is uncountable — it takes no a or an.",
              "“A water” and “an water” both break the rule for drinks you cannot count.",
            ),
            { skill: "grammar" },
          ),
          RD(
            "Read and answer.",
            "My breakfast",
            "My name is Amna. My breakfast is simple. I eat bread and one egg. I drink milk. My apple is green today. I like my breakfast.",
            "What colour is Amna’s apple?",
            [
              ["a", "red"],
              ["b", "green"],
              ["c", "white"],
            ],
            "b",
            fb(
              "green",
              "The text says “My apple is green today.” — the colour word tells you.",
              "Red and white are colour words, but the text says green.",
            ),
            { skill: "reading", difficulty: "medium" },
          ),
          CORR(
            "Find and correct the mistake.",
            "The egg is a white.",
            ["The egg is white."],
            fb(
              "The egg is white.",
              "After is, the colour stands alone — drop the a.",
              "a and an come before nouns, not after is.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My colourful food list",
      instructions:
        "Write five foods you like. Give each food a colour. Then write two full sentences, like “I like white milk.”",
      minWords: 10,
      maxWords: 50,
    },
    homework: [
      "Name the colours of five things in your room, out loud.",
      "Plan tomorrow’s breakfast in English words.",
      "At your next meal, say each food in English before you eat it.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Numbers 1–20 and Everyday Objects
  // =========================================================================
  {
    slug: "ch-06-l-04",
    minutes: 25,
    description:
      "Count from one to twenty, say your age, and count the objects around you — chairs, tables, doors, windows and more.",
    outcomes: [
      "Count from 1 to 20 out loud",
      "Say how old you are: “I am twelve.”",
      "Count objects with plural -s: “two books”",
      "Name eight everyday objects",
    ],
    blocks: [
      LI(
        "Numbers are the most international words in the world. In this lesson you count from one to twenty. You count the things around you. You also learn to say your age — a question everyone asks.",
        [
          "You can read four-letter words like stop and hand (Chapter 05 · Lesson 2).",
          "You know the sounds of all 26 letters (Chapter 02 · Lesson 1).",
          "You know the colour words and food words (Lessons 1–3).",
        ],
      ),
      vocGlossary("Numbers 1–10", [
        { word: "one", partOfSpeech: "number", definition: "the number 1" },
        { word: "two", partOfSpeech: "number", definition: "the number 2" },
        { word: "three", partOfSpeech: "number", definition: "the number 3" },
        { word: "four", partOfSpeech: "number", definition: "the number 4" },
        { word: "five", partOfSpeech: "number", definition: "the number 5" },
        { word: "six", partOfSpeech: "number", definition: "the number 6" },
        { word: "seven", partOfSpeech: "number", definition: "the number 7" },
        { word: "eight", partOfSpeech: "number", definition: "the number 8" },
        { word: "nine", partOfSpeech: "number", definition: "the number 9" },
        { word: "ten", partOfSpeech: "number", definition: "the number 10" },
      ]),
      vocGlossary("Numbers 11–20", [
        { word: "eleven", partOfSpeech: "number", definition: "the number 11" },
        { word: "twelve", partOfSpeech: "number", definition: "the number 12" },
        { word: "thirteen", partOfSpeech: "number", definition: "the number 13 — three + teen" },
        { word: "fourteen", partOfSpeech: "number", definition: "the number 14 — four + teen" },
        { word: "fifteen", partOfSpeech: "number", definition: "the number 15 — five + teen, new spelling" },
        { word: "sixteen", partOfSpeech: "number", definition: "the number 16 — six + teen" },
        { word: "seventeen", partOfSpeech: "number", definition: "the number 17 — seven + teen" },
        { word: "eighteen", partOfSpeech: "number", definition: "the number 18 — eight + teen" },
        { word: "nineteen", partOfSpeech: "number", definition: "the number 19 — nine + teen" },
        { word: "twenty", partOfSpeech: "number", definition: "the number 20 — the first -ty number" },
      ]),
      H("Everyday objects to count"),
      vocGlossary("Everyday objects", [
        { word: "chair", partOfSpeech: "noun", definition: "you sit on it" },
        { word: "table", partOfSpeech: "noun", definition: "you put things on it" },
        { word: "door", partOfSpeech: "noun", definition: "you open it to go in or out" },
        { word: "window", partOfSpeech: "noun", definition: "glass you look through" },
        { word: "bag", partOfSpeech: "noun", definition: "you carry things in it" },
        { word: "pen", partOfSpeech: "noun", definition: "you write with it, in ink" },
        { word: "pencil", partOfSpeech: "noun", definition: "you write with it, and you can erase it" },
        { word: "book", partOfSpeech: "noun", definition: "you read it" },
      ]),
      T(
        "Numbers tell us how many. Say each number while you point at things: one, two, three. Numbers stick when your eyes, your hands and your mouth work together.",
      ),
      TB(
        "The number patterns",
        ["Group", "Numbers", "Watch out"],
        [
          ["1–10", "one, two, three, four, five, six, seven, eight, nine, ten", "Learn them by heart."],
          ["11–12", "eleven, twelve", "Special words — no pattern."],
          ["13–19", "thirteen to nineteen", "Add -teen. Fifteen changes its spelling."],
          ["20", "twenty", "The first -ty number."],
        ],
        "Say the -teen numbers slowly — the ending is long: thirTEEN.",
      ),
      AU(
        "Listen: count from one to twenty",
        "One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten. Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty.",
        0.85,
      ),
      AU(
        "Listen: numbers in sentences",
        "How old are you? I am thirteen. How many books? Four books. How many chairs? Ten chairs.",
        0.9,
      ),
      ST(
        "Count the things around you",
        [
          {
            title: "Step 1 — Point and count",
            text: "Touch or point at each thing as you say its number. Do not skip a thing.",
            examples: [{ english: "one chair… two chairs… three chairs", note: "One point, one number." }],
          },
          {
            title: "Step 2 — Add the plural -s",
            text: "After one, say the noun alone: one book. After two and bigger numbers, add -s: two books.",
            examples: [
              { english: "one window, two windows", note: "One window — two windows with -s." },
              { english: "I have three pens.", note: "Numbers over one always take -s." },
            ],
          },
          {
            title: "Step 3 — Say your age",
            text: "Age uses the verb be, not have. Say: I am + number. Ask a friend: How old are you?",
            examples: [
              { english: "I am twelve.", note: "Not “I have twelve years”." },
              { english: "How old are you? — I am nine.", note: "The age question and answer." },
            ],
          },
        ],
      ),
      GR(
        "The counting rule",
        "Numbers bigger than one take a plural noun with -s: two books, ten chairs. After one, the noun stands alone: one book.",
        [
          { english: "I have two books.", translation: "Two needs books with -s." },
          { english: "Four chairs and one table.", translation: "Four chairs — but one table, no -s." },
          { english: "My school has sixteen windows.", translation: "Big numbers follow the same rule." },
        ],
      ),
      EXD(
        "Numbers in real life",
        [
          { english: "I have two brothers.", note: "Family plus numbers — true sentences about you.", domain: "family" },
          { english: "Four chairs and one table.", note: "Describe a room in five words.", domain: "home" },
          { english: "My bag has three books and five pens.", note: "School counting you can check right now.", domain: "education" },
          { english: "Two eggs and one apple, please.", note: "Ordering and shopping start with numbers.", domain: "shopping" },
          { english: "I see six birds.", note: "Count nature as a game with friends.", domain: "nature" },
          { english: "My baby brother is two.", note: "Ages are numbers too: am + number.", domain: "everyday" },
          { english: "Sixteen boys and girls play at my school.", note: "Sport and school counting mix naturally.", domain: "sport" },
          { english: "I take the number ten bus.", note: "Buses and roads have numbers — say them in English.", domain: "travel" },
          { english: "My breakfast has two eggs.", note: "Meals are easy to count.", domain: "food" },
          { english: "My mother comes home at five.", note: "Times of day use numbers — clock practice comes later.", domain: "work" },
        ],
        "Ten number sentences — all true somewhere.",
      ),
      US(
        [
          {
            situation: "Saying a phone number",
            example: "“Three, one, five, eight, two, six…”",
            note: "Say each digit alone — do not rush.",
          },
          {
            situation: "Buying eggs or fruit",
            example: "“Six eggs, please.”",
            note: "Shops run on numbers.",
          },
          {
            situation: "Telling your age",
            example: "“How old are you? — I am fourteen.”",
            note: "A question you will hear in every English class.",
          },
          {
            situation: "Counting people at a table",
            example: "“We are five today.”",
            note: "Families and restaurants count heads.",
          },
          {
            situation: "Giving your address",
            example: "“I live at number twelve.”",
            note: "House numbers are numbers too.",
          },
        ],
        "Numbers everywhere",
        "From phone numbers to prices, numbers never stop.",
      ),
      DL(
        "How old are you?",
        "Two students meet on the first day of class.",
        [
          ["Imran", "Hello! My name is Imran. What is your name?"],
          ["Lucia", "I am Lucia. Nice to meet you."],
          ["Imran", "Nice to meet you too. How old are you?"],
          ["Lucia", "I am thirteen. And you?"],
          ["Imran", "I am fourteen. My brother is in this class too. He is twelve."],
          ["Lucia", "Great! Our class has twenty students."],
          ["Imran", "Twenty! Big class, new friends."],
        ],
      ),
      CMP(
        "How many? vs How old?",
        ["How many…? (counting)", "How old…? (age)"],
        [
          ["What it asks", "The number of things", "The number of years of a person"],
          ["Example question", "“How many chairs?”", "“How old are you?”"],
          ["Example answer", "“Six chairs.”", "“I am six.”"],
          ["Watch out", "Plural -s after numbers over one", "Use am or is — never “I have six years”"],
        ],
        {
          intro: "Two number questions, two different jobs.",
          verdict: "Things → How many. People’s age → How old.",
        },
      ),
      MS(
        [
          [
            "I have two book.",
            "I have two books.",
            "Numbers bigger than one need the plural -s: books.",
          ],
          [
            "I have fourteen years.",
            "I am fourteen.",
            "Age in English uses be: I am, she is, he is. Never “have years”.",
          ],
          [
            "I am twelve year old.",
            "I am twelve years old.",
            "Year takes -s when the number is over one.",
          ],
          [
            "One chairs and two table.",
            "One chair and two tables.",
            "After one, the noun has no -s. After two, add -s.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Say numbers out loud — every day",
        "Numbers live in your mouth, not on paper. Count everything in English: steps, doors, eggs, books. One week of counting beats one month of reading about numbers.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My classroom is small. It has one door and two windows. I count ten chairs and one long table. My bag is on a chair. It has four books and two pens. Twenty students sit in this room. We are happy in our small room.",
          task: "Read the text two times. Then say how many chairs are in the room.",
        },
        writing: {
          task: "Count three kinds of objects in your room. Write the counts as sentences.",
          guide: ["I have one ______.", "I have two ______s.", "My room has ______ ______s."],
          model: "I have one window. I have two chairs. My room has four books.",
        },
        listening: {
          script:
            "Number check. Listen and repeat. Five. Nine. Eleven. Fourteen. Sixteen. Twenty. Now answer: how many fingers on two hands? Ten. Yes — ten.",
          task: "Listen and repeat each number. Then answer the question at the end.",
        },
        speaking: {
          task: "Count from one to twenty out loud. Then say your age and the age of one family member.",
          frames: ["I am ______.", "My ______ is ______.", "I have ______ ______s."],
          checklist: [
            "I counted to twenty without stopping.",
            "I said my age with am.",
            "I counted one group of things in my room.",
          ],
        },
      }),
      LSP(
        [
          gls("Numbers tell us how many."),
          gls("number"),
          gls("one"),
          gls("two"),
          gls("twenty"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Count from one to twenty: 1–10 by heart, 11–12 special, 13–19 with -teen, then twenty.",
        "Numbers over one take a plural noun: two books, ten chairs.",
        "Say your age with be: “I am twelve.” — never “I have twelve years”.",
        "Ask “How many?” for things and “How old?” for people.",
        "Count objects out loud every day — numbers live in your mouth.",
      ]),
      RV(
        [
          {
            question: "Which word family does “hand” belong to?",
            options: ["-and (hand, sand)", "-at (cat, hat)", "-ig (pig, big)"],
            correctIndex: 0,
            explanation: "Hand ends with -and — a four-letter word family from your reading chapter.",
            from: "Chapter 05 · Lesson 2",
          },
          {
            question: "How many syllables are in “elephant”?",
            options: ["1", "2", "3"],
            correctIndex: 2,
            explanation: "El-e-phant — three beats. You clapped syllables in your reading chapter.",
            from: "Chapter 05 · Lesson 4",
          },
          {
            question: "Which letter is a vowel?",
            options: ["B", "E", "T"],
            correctIndex: 1,
            explanation: "E is one of the five vowels: A, E, I, O, U.",
            from: "Chapter 03 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          FB(
            "Write the missing number word.",
            "fourteen, fifteen, ___",
            ["sixteen"],
            fb("sixteen", "After fifteen comes sixteen: six + teen.", "The -teen numbers run from thirteen to nineteen."),
            { skill: "vocabulary", hints: ["Count on your fingers after fifteen."] },
          ),
          MATCH(
            "Match each digit to its word.",
            [
              ["n3", "3"],
              ["n8", "8"],
              ["n12", "12"],
              ["n15", "15"],
            ],
            [
              ["w12", "twelve"],
              ["w3", "three"],
              ["w15", "fifteen"],
              ["w8", "eight"],
            ],
            [
              ["n3", "w3"],
              ["n8", "w8"],
              ["n12", "w12"],
              ["n15", "w15"],
            ],
            fb(
              "3 → three, 8 → eight, 12 → twelve, 15 → fifteen",
              "Every digit has one English word. Learn them as pairs.",
            ),
            { skill: "vocabulary", hints: ["Say the numbers from one to twenty in your head."] },
          ),
          LIS(
            "Listen and write the number word you hear.",
            "seventeen",
            "What number do you hear?",
            ["seventeen", "17"],
            fb(
              "Seventeen",
              "Seventeen is seven + teen — with the long -teen ending.",
              "Sixteen is one less; eighteen is one more.",
            ),
            { skill: "listening", hints: ["It is between sixteen and eighteen."] },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "I have two book."],
              ["b", "I have two books."],
              ["c", "I have two a book."],
            ],
            "b",
            fb(
              "I have two books.",
              "Numbers over one take the plural -s: two books.",
              "“Two book” misses the -s. “Two a book” adds a wrong little word.",
            ),
            { skill: "grammar", hints: ["What happens to a word after two, three or ten?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          DICT(
            "Listen and write the sentence you hear.",
            "I am thirteen.",
            ["I am thirteen."],
            fb(
              "I am thirteen.",
              "Age uses am + number — no “years” needed.",
              "“I have thirteen years” is a translation mistake many learners make.",
            ),
            { skill: "listening" },
          ),
          REORD(
            "Make the sentence.",
            "My bag has four books.",
            fb(
              "My bag has four books",
              "The order is: what + has + number + plural noun.",
              "Numbers over one always take the -s on the noun.",
            ),
            { skill: "grammar" },
          ),
          MCQ(
            "Your friend asks “How old are you?” You are 12. What do you say?",
            [
              ["a", "I have twelve years."],
              ["b", "I am twelve."],
              ["c", "It is twelve."],
            ],
            "b",
            fb(
              "I am twelve.",
              "Age in English uses be: I am + the number.",
              "“I have twelve years” translates your language, not English. “It is twelve” talks about a thing, not you.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I am twelve year old.",
            ["I am twelve years old."],
            fb(
              "I am twelve years old.",
              "Year takes -s after numbers over one: twelve years.",
              "One year — but twelve years.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Counting my room",
      instructions:
        "Count three kinds of objects near you. Write one sentence for each count. Then write your age. Example: “I have one window. I have four chairs. I am fifteen.”",
      minWords: 12,
      maxWords: 45,
    },
    homework: [
      "Count from one to twenty out loud twice a day — once fast, once slow.",
      "Say a phone number you know in English digits.",
      "Count ten things in your home in English, with the plural -s.",
    ],
  },

  // =========================================================================
  // Lesson 5 — School and Home
  // =========================================================================
  {
    slug: "ch-06-l-05",
    minutes: 25,
    description:
      "The words for your two main places — school words like teacher, student and book, home words like chair, table, door and window — plus in and on.",
    outcomes: [
      "Name seven school words and five home words",
      "Say where a thing is: “The pen is in the bag.”",
      "Give a short classroom command: “Open the door.”",
      "Sort new words by place — a memory strategy",
    ],
    blocks: [
      LI(
        "Your day lives in two places: school and home. This lesson gives you the words for both. You will also learn two tiny place words, in and on, to say where things are.",
        [
          "You can read words with ch and sh — like chair and sheep (Chapter 05 · Lesson 4).",
          "You know the object words bag, pen, pencil and book (Lesson 4).",
          "You can count from one to twenty (Lesson 4).",
        ],
      ),
      vocGlossary("School words", [
        { word: "school", partOfSpeech: "noun", definition: "the place where students learn" },
        { word: "teacher", partOfSpeech: "noun", definition: "the person who teaches" },
        { word: "student", partOfSpeech: "noun", definition: "a person who studies" },
        { word: "book", partOfSpeech: "noun", definition: "you read it" },
        { word: "pen", partOfSpeech: "noun", definition: "you write with it, in ink" },
        { word: "pencil", partOfSpeech: "noun", definition: "you write with it, and you can erase it" },
        { word: "bag", partOfSpeech: "noun", definition: "you carry your school things in it" },
      ]),
      H("Words for home"),
      vocGlossary("Home words", [
        { word: "home", partOfSpeech: "noun", definition: "the place where you live" },
        { word: "chair", partOfSpeech: "noun", definition: "you sit on it" },
        { word: "table", partOfSpeech: "noun", definition: "you put things on it" },
        { word: "door", partOfSpeech: "noun", definition: "you open it to go in or out" },
        { word: "window", partOfSpeech: "noun", definition: "glass you look through" },
      ]),
      T(
        "Sort your words by place. School words live at school. Home words live at home. Your brain remembers words better in small groups — this is how word groups work.",
      ),
      {
        type: "definition",
        term: "school",
        partOfSpeech: "noun",
        definition:
          "A school is a place where students learn with teachers — and it is full of words you now know.",
        example: {
          english: "I go to school with my bag.",
          translation: "School, teacher and student belong together.",
        },
      },
      TB(
        "Two places, one day",
        ["At school", "At home"],
        [
          ["I write with my pen and pencil.", "I eat at the table."],
          ["My teacher reads from a book.", "My chair is near the window."],
          ["My bag is on my chair.", "I open the door and I am home."],
        ],
        "One pattern — This is my … — works for both places.",
      ),
      AU(
        "Listen: school and home words",
        "school. teacher. student. book. pen. pencil. bag. home. chair. table. door. window.",
        0.85,
      ),
      AU(
        "Listen: where is it?",
        "Where is the pen? The pen is in the bag. Where is the book? The book is on the table.",
        0.9,
      ),
      ST(
        "Say where a thing is",
        [
          {
            title: "Step 1 — Name the thing",
            text: "Start with the thing you want to find. Say it with the: the pen, the book.",
            examples: [{ english: "The pen…", note: "The points at one pen we both know." }],
          },
          {
            title: "Step 2 — Add is + in or on",
            text: "Now add is, then the place word. In means inside. On means on top.",
            examples: [
              { english: "The pen is in the bag.", note: "in = inside the bag." },
              { english: "The book is on the table.", note: "on = on top of the table." },
            ],
          },
          {
            title: "Step 3 — Copy the pattern everywhere",
            text: "Use the same pattern for every thing and every place: The X is in the Y. The X is on the Y.",
            examples: [
              { english: "The milk is on the table.", note: "Food words fit the pattern too." },
              { english: "The baby is on the chair.", note: "People fit too — and it can be funny." },
            ],
          },
        ],
      ),
      GR(
        "in and on",
        "Use in for inside a thing: in the bag, in the school. Use on for the top of a thing: on the table, on the chair.",
        [
          { english: "The pen is in the bag.", translation: "Inside — you cannot see the pen." },
          { english: "The book is on the table.", translation: "On top — you can see the book." },
          { english: "The cat is on the chair.", translation: "Animals sit on things too." },
        ],
        [
          "More place words — at, under, next to — come in Chapter 16. In and on cover most of your day.",
        ],
      ),
      EXD(
        "School and home words in real life",
        [
          { english: "This is my school bag.", note: "School + bag make one idea: a bag for school.", domain: "education" },
          { english: "My teacher has twenty students.", note: "School words plus numbers.", domain: "education" },
          { english: "Open the door, please.", note: "Commands use the bare action word — more in Lesson 6.", domain: "everyday" },
          { english: "The chairs are white and the table is black.", note: "Colours describe your furniture.", domain: "home" },
          { english: "My pen and pencil are in my bag.", note: "in = inside — the pattern from this lesson.", domain: "everyday" },
          { english: "My home has one door and six windows.", note: "Count your home in English.", domain: "home" },
          { english: "My friend has a new pencil.", note: "Talk about the people you study with.", domain: "social" },
          { english: "My uncle is a teacher at my school.", note: "Family words meet school words.", domain: "work" },
          { english: "I see birds from my window.", note: "Home words open the door to nature talk.", domain: "nature" },
        ],
        "Nine sentences from your two places.",
      ),
      US(
        [
          {
            situation: "First day at a new school",
            example: "“This is my bag. This is my pen.”",
            note: "Show your things with This is my.",
          },
          {
            situation: "A classroom command",
            example: "“Open the door, please. Close the window, please.”",
            note: "Commands keep a classroom running.",
          },
          {
            situation: "Finding something at home",
            example: "“Where is my book? — It is on the table.”",
            note: "The lost-and-found game of every home.",
          },
          {
            situation: "A quiet house at night",
            example: "“Close the door, please. The baby sleeps.”",
            note: "Home words and family words in one kind sentence.",
          },
          {
            situation: "Packing your school bag",
            example: "“My pen, my pencil, my book — in the bag.”",
            note: "Name each thing as it goes in.",
          },
        ],
        "Two places, many small talks",
        "School and home words carry your whole day.",
      ),
      DL(
        "Where is my pen?",
        "Imran cannot find his pen. His sister Ayesha helps him.",
        [
          ["Imran", "Ayesha, where is my pen?"],
          ["Ayesha", "Is it in your bag?"],
          ["Imran", "No… my bag has my book and my pencil."],
          ["Ayesha", "Look — it is on the table!"],
          ["Imran", "Ha! My pen is on the table. Thank you, Ayesha."],
          ["Ayesha", "Your books are on the table too. School night, little brother!"],
        ],
      ),
      CMP(
        "in vs on",
        ["in = inside", "on = on top"],
        [
          ["Meaning", "The thing is INSIDE something", "The thing is ON TOP of something"],
          ["Example", "The pen is in the bag.", "The book is on the table."],
          ["Can you see it?", "Often no — it is covered", "Yes — nothing covers it"],
          ["More examples", "in the school, in my home", "on the chair, on the table"],
        ],
        {
          intro: "Two small words, two different pictures in your head.",
          verdict: "Ask yourself: is it inside? Use in. Is it on top? Use on.",
        },
      ),
      MS(
        [
          [
            "The book is in the table.",
            "The book is on the table.",
            "A book sits on top of a table — on. In is for inside spaces like a bag.",
          ],
          [
            "This is a my pen.",
            "This is my pen.",
            "Never put a or an before my. Say my pen, not a my pen.",
          ],
          [
            "She is teacher.",
            "She is a teacher.",
            "Words for jobs take a or an: a teacher, a student.",
          ],
          [
            "The pen is on the bag.",
            "The pen is in the bag.",
            "If the pen is inside the bag, use in. On the bag means on top of the closed bag.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Word groups build memory",
        "Do not learn one long word list. Learn small groups: school words together, home words together. Then test yourself — cover the English, look at the Urdu or Hindi, and say the English word.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Imran. I am a student. My school is small and my teacher is kind. My bag has two books, one pen and one pencil. At home, I sit on a chair near the window. The table is white. My home is small, but I love it.",
          task: "Read the text two times. Then say three school words and three home words from it.",
        },
        writing: {
          task: "Write three sentences about school words and three about home words. Use in or on at least once.",
          guide: ["My ______ is in my bag.", "The ______ is on the table.", "I write with my ______."],
          model: "My pen is in my bag. The book is on the table. I write with my pencil.",
        },
        listening: {
          script:
            "Look at the classroom. The teacher is at the table. The students are on their chairs. The books are in the bag. One pen is on the table. The door is open and the window is open too.",
          task: "Listen and draw the classroom: where is each thing?",
        },
        speaking: {
          task: "Look around you. Say where five things are, with in or on.",
          frames: ["The … is in the …", "The … is on the …", "This is my …"],
          checklist: [
            "I said five sentences with in or on.",
            "I used my school and home words.",
            "I asked someone “Where is the …?” at least once.",
          ],
        },
      }),
      LSP(
        [
          gls("school"),
          gls("teacher"),
          gls("student"),
          gls("home"),
          gls("Say each new word out loud."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "School words: school, teacher, student, book, pen, pencil, bag.",
        "Home words: home, chair, table, door, window.",
        "in means inside: The pen is in the bag. on means on top: The book is on the table.",
        "Jobs take a or an: a teacher, a student — and never a before my.",
        "Learn words in small groups by place, not in one long list.",
      ]),
      RV(
        [
          {
            question: "The ch in “chair” makes…",
            options: ["one sound", "two sounds", "no sound"],
            correctIndex: 0,
            explanation: "C-h is a digraph: two letters, one sound — from your reading chapter.",
            from: "Chapter 05 · Lesson 4",
          },
          {
            question: "Which of these is a naming word — a person, place or thing?",
            options: ["read", "table", "slowly"],
            correctIndex: 1,
            explanation: "A table is a thing, so it is a naming word. You met this idea in your first chapter.",
            from: "Chapter 01 · Lesson 4",
          },
          {
            question: "Every sentence starts with…",
            options: ["a small letter", "a capital letter", "a number"],
            correctIndex: 1,
            explanation: "Sentences begin with a capital letter — the rule from your alphabet chapter.",
            from: "Chapter 02 · Lesson 5",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "The pen is inside the bag. Which sentence is correct?",
            [
              ["a", "The pen is on the bag."],
              ["b", "The pen is in the bag."],
              ["c", "The pen is in bag."],
            ],
            "b",
            fb(
              "The pen is in the bag.",
              "Inside means in, and places like bag take the: in the bag.",
              "On means on top, and “in bag” is missing the little word the.",
            ),
            { skill: "grammar", hints: ["Inside or on top? And do not forget the little word before bag."] },
          ),
          FB(
            "Complete with in or on.",
            "The book is ___ the table.",
            ["on"],
            fb("on", "A book sits on top of a table — on.", "in is for inside spaces like a bag."),
            { skill: "grammar", hints: ["Think where a book usually is when you read at a table."] },
          ),
          MATCH(
            "Match each word to its partner.",
            [
              ["teacher", "teacher"],
              ["student", "student"],
              ["chair", "chair"],
              ["window", "window"],
            ],
            [
              ["d1", "teaches at a school"],
              ["d2", "learns at a school"],
              ["d3", "you sit on it"],
              ["d4", "you look through it"],
            ],
            [
              ["teacher", "d1"],
              ["student", "d2"],
              ["chair", "d3"],
              ["window", "d4"],
            ],
            fb(
              "teacher → teaches at a school, student → learns at a school, chair → you sit on it, window → you look through it",
              "Each word has a job — match the word to its job.",
            ),
            { skill: "vocabulary", hints: ["Is each word a person or a thing? What does it do?"] },
          ),
          LIS(
            "Listen and answer.",
            "The book is on the chair.",
            "Where is the book?",
            ["on the chair", "the chair", "on a chair", "chair"],
            fb(
              "On the chair",
              "You heard “on the chair” — on top, not inside.",
              "In the chair is not English — chairs are sat on, not put in.",
            ),
            { skill: "listening", hints: ["Listen for the two place words: inside or top?"] },
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
              ["a", "She is a teacher."],
              ["b", "She is teacher."],
              ["c", "She is an teacher."],
            ],
            "a",
            fb(
              "She is a teacher.",
              "Jobs take a or an. Teacher starts with a consonant sound, so it is a teacher.",
              "“She is teacher” is missing a. “An teacher” breaks the vowel rule.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "This is a my book.",
            ["This is my book."],
            fb(
              "This is my book.",
              "My already points at your book — a is not needed before my.",
              "a and my never stand together.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The pen is in the bag.",
            ["The pen is in the bag."],
            fb(
              "The pen is in the bag.",
              "Inside the bag means in, and the bag takes the.",
              "On the bag would mean on top of it.",
            ),
            { skill: "listening" },
          ),
          FB(
            "Complete the sentence with one word.",
            "My school has ten ___ and one teacher.",
            ["students"],
            fb("students", "The people who learn are students — and ten takes the plural -s.", "One teacher is singular, but ten needs the -s."),
            { skill: "vocabulary" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My two places",
      instructions:
        "Write six sentences: three about school words (“My teacher has a red pen.”) and three about home words (“The table is in my home.”). Use in or on at least once.",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Label five objects at home and five at school with English words.",
      "Play the where-is game: ask “Where is the …?” and answer with in or on.",
      "Pack your bag for tomorrow and name each thing in English as it goes in.",
    ],
  },

  // =========================================================================
  // Lesson 6 — Basic Actions and Chapter Review
  // =========================================================================
  {
    slug: "ch-06-l-06",
    minutes: 25,
    description:
      "Fifteen action words — eat, drink, run, read and more — turn your vocabulary into real sentences. Then take the Chapter 06 review.",
    outcomes: [
      "Use fifteen basic action verbs in sentences",
      "Build sentences with action + word: “I eat bread.”",
      "Give short commands: “Open the door.”",
      "Answer the Chapter 06 review questions",
    ],
    blocks: [
      LI(
        "You now have many words: people, animals, food, colours, numbers and things. Actions bring these words to life. In this lesson you learn fifteen action words. Each one turns your words into true sentences. At the end, you take the Chapter 06 review.",
        [
          "You know the food words: bread, milk, rice, water (Lesson 3).",
          "You know the object words: door, window, book, bag (Lessons 4–5).",
          "You can blend sounds to read new words (Chapter 04 · Lesson 5).",
        ],
      ),
      vocGlossary("Fifteen action words", [
        { word: "to eat", partOfSpeech: "verb", definition: "put food in your mouth" },
        { word: "to drink", partOfSpeech: "verb", definition: "take water or milk into your mouth" },
        { word: "to read", partOfSpeech: "verb", definition: "look at words and understand them" },
        { word: "to write", partOfSpeech: "verb", definition: "make words with a pen or pencil" },
        { word: "to sleep", partOfSpeech: "verb", definition: "rest with your eyes closed" },
        { word: "to run", partOfSpeech: "verb", definition: "move fast on your feet" },
        { word: "to walk", partOfSpeech: "verb", definition: "move slowly on your feet" },
        { word: "to play", partOfSpeech: "verb", definition: "do something fun" },
        { word: "to sit", partOfSpeech: "verb", definition: "rest on a chair" },
        { word: "to stand", partOfSpeech: "verb", definition: "be on your feet" },
        { word: "to open", partOfSpeech: "verb", definition: "make a door or window not closed" },
        { word: "to close", partOfSpeech: "verb", definition: "make a door or window not open" },
        { word: "to listen", partOfSpeech: "verb", definition: "hear with attention" },
        { word: "to speak", partOfSpeech: "verb", definition: "say words" },
        { word: "to see", partOfSpeech: "verb", definition: "look at something and notice it" },
      ]),
      H("Two more actions: come and go"),
      vocGlossary("Bonus actions", [
        { word: "to come", partOfSpeech: "verb", definition: "move to the person who speaks" },
        { word: "to go", partOfSpeech: "verb", definition: "move away to a place" },
      ]),
      T(
        "Action words tell us what people do. I eat. You read. She runs. With fifteen actions and your new words, you can build hundreds of true sentences about your day.",
      ),
      TB(
        "Action words at a glance",
        ["Action word", "It means", "Example sentence"],
        [
          ["to eat", "put food in your mouth", "I eat bread."],
          ["to drink", "take water or milk into your mouth", "I drink milk."],
          ["to read", "look at words and understand them", "She reads a book."],
          ["to sleep", "rest with your eyes closed", "The baby sleeps."],
          ["to open", "make a door or window not closed", "Open the door."],
          ["to play", "do something fun", "The boys play."],
        ],
        "Notice the -s with she and the baby: she reads, the baby sleeps. Commands have no -s: Open the door.",
      ),
      AU(
        "Listen: action words",
        "eat. drink. read. write. sleep. run. walk. play. sit. stand. open. close. listen. speak. see.",
        0.85,
      ),
      AU(
        "Listen: my day",
        "I eat bread. I drink milk. I write with my pen. I read my book. I sleep at ten.",
        0.9,
      ),
      ST(
        "Build a sentence with an action",
        [
          {
            title: "Step 1 — Choose the person",
            text: "Start with who does the action: I, he, she — or a noun like my sister or the dog.",
            examples: [
              { english: "I …", note: "Talking about yourself." },
              { english: "My sister …", note: "Talking about another person." },
            ],
          },
          {
            title: "Step 2 — Add the action word",
            text: "Add the action. With I and you, use the plain word: I eat. With he and she, add -s: she eats.",
            examples: [
              { english: "I eat bread.", note: "I + plain action word." },
              { english: "She eats rice.", note: "She + action word with -s." },
            ],
          },
          {
            title: "Step 3 — Add a word you know",
            text: "Finish with a noun from this chapter: a food, an animal, a thing. Action plus noun makes a true sentence.",
            examples: [
              { english: "I drink water.", note: "Action + drink word." },
              { english: "The dog runs.", note: "Animal + action — a complete sentence." },
              { english: "I read my book.", note: "Add my for things that are yours." },
            ],
          },
        ],
      ),
      GR(
        "The little word to",
        "In word lists, actions appear with to: to eat, to sleep. In sentences, drop the to: I eat bread. With he and she, add -s: she eats.",
        [
          { english: "I eat bread.", translation: "I takes the plain action word — no to." },
          { english: "She eats rice.", translation: "She takes the action word with -s." },
          { english: "Open the door.", translation: "Commands use the bare action word." },
        ],
        [
          "You will meet to again later, with like: “I like to read.” Copy full phrases when you meet them.",
        ],
      ),
      EXD(
        "Action words in real life",
        [
          { english: "I eat bread and eggs.", note: "Breakfast in four words plus your action.", domain: "food" },
          { english: "I drink water after I run.", note: "Actions chain into a day story.", domain: "sport" },
          { english: "My baby brother sleeps now.", note: "Family words plus action words make news.", domain: "family" },
          { english: "She reads a book on the chair.", note: "Lesson 5’s place words fit here.", domain: "home" },
          { english: "The students write with pencils.", note: "School words meet action words.", domain: "education" },
          { english: "I listen to the teacher.", note: "Listen usually brings to with it — copy the pair.", domain: "education" },
          { english: "I speak English with my friend.", note: "One true sentence about your English life.", domain: "social" },
          { english: "I open the window and see the birds.", note: "Two actions in one sentence — you are ready.", domain: "nature" },
          { english: "The shop opens at nine.", note: "Work words take actions too — with -s.", domain: "work" },
          { english: "I walk to school every day.", note: "Walking is healthy — and it is a true sentence for millions.", domain: "health" },
          { english: "My father goes to work at eight.", note: "Come and go: the last two actions of the chapter.", domain: "travel" },
        ],
        "Eleven sentences — your first real English about your life.",
      ),
      US(
        [
          {
            situation: "In the classroom",
            example: "“Open your books. Listen. Read with me.”",
            note: "Teachers run classes with commands.",
          },
          {
            situation: "At the dinner table",
            example: "“I eat rice. My sister drinks milk.”",
            note: "Describe your meal with actions.",
          },
          {
            situation: "Ending a phone call",
            example: "“I go to school now. Bye!”",
            note: "Come and go end many phone calls.",
          },
          {
            situation: "Explaining your day",
            example: "“I read. I write. I play. I sleep.”",
            note: "Four actions tell your whole day.",
          },
          {
            situation: "At the playground",
            example: "“The boys run. The girls play. The baby walks.”",
            note: "Watch and narrate — free speaking practice.",
          },
        ],
        "Actions power your first real talk",
        "Every sentence from now on needs an action word.",
      ),
      DL(
        "A day with Grandfather",
        "Hana spends a day with her grandfather.",
        [
          ["Grandfather", "Good morning, Hana! I come with bread and milk."],
          ["Hana", "Good morning, Grandfather! I eat bread every morning."],
          ["Grandfather", "Good girl. I drink water. Then we walk to the shop."],
          ["Hana", "I like the shop. I see my friend there. We play."],
          ["Grandfather", "And I speak with Mr Ali at the shop."],
          ["Hana", "Then we come home and I sleep!"],
          ["Grandfather", "Ha! Yes — after our walk, everyone sleeps."],
        ],
      ),
      CMP(
        "Statement vs command",
        ["I open the door. (statement)", "Open the door. (command)"],
        [
          ["What it does", "Tells what someone does", "Tells someone to do it"],
          ["Who is in it", "A person: I, she, the boy", "Nobody — the listener knows"],
          ["Example", "“She opens the window.”", "“Open the window, please.”"],
          ["Watch out", "He and she add -s: opens", "No -s in commands: “Opens the door” is wrong"],
        ],
        {
          intro: "The same action word does two jobs.",
          verdict: "Talking about doing → I open. Telling someone to do → Open!",
        },
      ),
      MS(
        [
          [
            "I to eat bread.",
            "I eat bread.",
            "The to is only for word lists. In sentences, use the action word alone.",
          ],
          [
            "She read a book.",
            "She reads a book.",
            "With she, he and it, the action word takes -s: reads.",
          ],
          [
            "Opens the door.",
            "Open the door.",
            "Commands never take -s. The -s is only for he, she and it.",
          ],
          [
            "I eat a bread.",
            "I eat bread.",
            "Bread is like milk and rice — no a, no an. You cannot count it.",
          ],
        ],
        "Common beginner mistakes",
      ),
      H("Chapter 06 review"),
      T(
        "Six lessons, six word groups, one big step. People, animals, food, colours, numbers, things and actions — this is your first real English vocabulary. Check yourself with the questions below, then take the final task.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "My name is Ali. I am a student. I go to school with my sister. At school, I read and write. I eat bread and an apple. I drink water. My teacher speaks English. We listen. After school, I play with my friends. My dog runs with me. At night, I sleep. English words fill my day.",
          task: "Read the text two times. Then say six action words from it.",
        },
        writing: {
          task: "Write five sentences about your day. Use a different action word in each one.",
          guide: ["I eat …", "I drink …", "I read …", "I play …", "I sleep …"],
          model: "I eat rice. I drink milk. I read my book. I play with my brother. I sleep at ten.",
        },
        listening: {
          script:
            "Listen to my morning. I open the door. I see the sun. I walk to the table. I eat bread. I drink milk. I close the door and go to school.",
          task: "Listen and put the actions in order.",
        },
        speaking: {
          task: "Say five sentences about your day with five different action words. Then teach a friend two commands.",
          frames: ["I … every day.", "She / He …s …", "Open the …, please."],
          checklist: [
            "I used five action words.",
            "I used -s after he or she.",
            "I gave two commands with please.",
          ],
        },
      }),
      LSP(
        [
          gls("Action words tell us what people do."),
          gls("Use each new word in a sentence today."),
          gls("to eat"),
          gls("to drink"),
          gls("to read"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Fifteen action words: eat, drink, read, write, sleep, run, walk, play, sit, stand, open, close, listen, speak, see.",
        "Two bonus actions: come and go.",
        "Action + noun = a true sentence: “I eat bread.” “The dog runs.”",
        "Drop to in sentences, and add -s after he, she and it: she reads.",
        "Commands use the bare action word: “Open the door.”",
        "You now have six word groups — people, animals, food, colours, numbers, things — and the actions to use them.",
      ]),
      RV(
        [
          {
            question: "Which one is a family word?",
            options: ["window", "aunt", "green"],
            correctIndex: 1,
            explanation: "Aunt is a family word — your father’s or mother’s sister, from Lesson 1.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "Which sentence means a general like?",
            options: ["I like cat.", "I like cats.", "I like the cat."],
            correctIndex: 1,
            explanation: "Cats with -s means cats in general — the pattern from Lesson 2.",
            from: "Chapter 06 · Lesson 2",
          },
          {
            question: "Where does the colour go?",
            options: ["an apple red", "a red apple", "an apple of red"],
            correctIndex: 1,
            explanation: "The colour comes before the noun — Lesson 3’s big rule.",
            from: "Chapter 06 · Lesson 3",
          },
          {
            question: "Your friend is 14. What does he say?",
            options: ["I have fourteen years.", "I am fourteen.", "It is fourteen."],
            correctIndex: 1,
            explanation: "Age uses be: I am fourteen — from Lesson 4.",
            from: "Chapter 06 · Lesson 4",
          },
          {
            question: "The book is on top of the table. Where is it?",
            options: ["in the table", "on the table", "at the table"],
            correctIndex: 1,
            explanation: "On top means on — the place word from Lesson 5.",
            from: "Chapter 06 · Lesson 5",
          },
          {
            question: "Which word family does “hand” belong to?",
            options: ["-and (hand, sand)", "-at (cat, hat)", "-en (pen, ten)"],
            correctIndex: 0,
            explanation: "Hand ends with -and — a word family from the chapter before this one.",
            from: "Chapter 05 · Lesson 2",
          },
        ],
        {
          title: "Chapter 06 review — six word groups",
          intro: "Six questions: one from each lesson, plus one from before the chapter.",
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
            "Which sentence is correct?",
            [
              ["a", "I to drink milk."],
              ["b", "I drink milk."],
              ["c", "I drinks milk."],
            ],
            "b",
            fb(
              "I drink milk.",
              "With I, use the plain action word — no to, no -s.",
              "“To drink” belongs in word lists. “Drinks” is for he and she.",
            ),
            { skill: "grammar", hints: ["What does the action word look like after I?"] },
          ),
          FB(
            "Complete the sentence.",
            "She ___ a book every night.",
            ["reads"],
            fb("reads", "She takes the action word with -s: she reads.", "With I you say read — the -s comes only after he, she and it."),
            { skill: "grammar", hints: ["Think about the small letter at the end of the action word."] },
          ),
          MATCH(
            "Match the action to its words.",
            [
              ["eat", "eat"],
              ["drink", "drink"],
              ["open", "open"],
              ["sleep", "sleep"],
            ],
            [
              ["a1", "bread and rice"],
              ["a2", "water and milk"],
              ["a3", "the door"],
              ["a4", "at night"],
            ],
            [
              ["eat", "a1"],
              ["drink", "a2"],
              ["open", "a3"],
              ["sleep", "a4"],
            ],
            fb(
              "eat → bread and rice, drink → water and milk, open → the door, sleep → at night",
              "Actions and nouns belong together — match the natural pairs.",
            ),
            { skill: "vocabulary", hints: ["Which things go naturally with which action?"] },
          ),
          LIS(
            "Listen and answer.",
            "I write with my pen.",
            "What does the speaker do?",
            ["write", "writes", "I write with my pen."],
            fb(
              "Write",
              "You heard “I write with my pen” — the action word after I is write.",
              "With I there is no -s: write, not writes.",
            ),
            { skill: "listening", hints: ["Listen for the action word after “I”."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the sentence.",
            "I drink water every day.",
            fb(
              "I drink water every day",
              "The order is: person + action + thing.",
              "Water comes after the action word drink.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "She open the door.",
            ["She opens the door."],
            fb(
              "She opens the door.",
              "With she, the action word takes -s: opens.",
              "Open without -s is for I, you and commands.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The students read books.",
            ["The students read books."],
            fb(
              "The students read books.",
              "Students is plural, so the action word has no -s.",
              "Only he, she and it take the -s.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which one is a command?",
            [
              ["a", "I open the window."],
              ["b", "Open the window."],
              ["c", "She opens the window."],
            ],
            "b",
            fb(
              "Open the window.",
              "A command tells someone to do something — the person is not named.",
              "The other two are statements about people opening windows.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My day in five actions",
      instructions:
        "Write five sentences about your day. Use five different action words from this lesson. Example: “I eat bread. I read my book. I sleep at ten.”",
      minWords: 15,
      maxWords: 60,
    },
    homework: [
      "Say five true action sentences about your day before you sleep tonight.",
      "Give three commands to a family member in English: “Open the door, please.”",
      "Choose your ten favourite words from the whole chapter. Write each one in a sentence.",
    ],
  },
];
