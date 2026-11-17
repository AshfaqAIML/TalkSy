/**
 * PROMPT 57 production — Batch 5, Chapter 15: Adjectives and Adverbs.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the describing chapter: adjectives are taught in BOTH homes
 * (before the noun and after be — with the reason "The quiet is street"
 * is impossible), stacked adjectives follow the real ladder
 * (opinion → size → age → colour) with worked stacks, adverbs of manner
 * carry the -ly rule AND the irregular family (good → well, fast → fast,
 * hard → hard), and frequency adverbs come with the percentage scale and
 * the two placement homes (before main verbs, after be). Every lesson
 * prevents the real beginner mistakes with reasons, never a bare word
 * list, never "practise more" filler.
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

/** fb() plus a similar example drawn from a validated glossary sentence. */
function fbx(
  correctAnswer: string,
  explanation: string,
  whyWrong: string,
  glossaryKey: string,
) {
  const g = gls(glossaryKey);
  return {
    ...fb(correctAnswer, explanation, whyWrong),
    similarExample: { english: g.english, translation: `${g.ur} · ${g.hi}` },
  };
}

export const ch15Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Describing People and Things
  // =========================================================================
  {
    slug: "ch-15-l-01",
    minutes: 25,
    description:
      "Your first describing toolkit: adjectives in both homes — before the noun (a quiet street) and after be (The street is quiet) — plus twenty-seven new describing words for people, things and places.",
    outcomes: [
      "Put adjectives in both homes: before nouns and after be",
      "Describe people's looks and character with new adjectives",
      "Describe things and places with two adjectives and but or and",
      "Explain why “The quiet is street” is impossible",
    ],
    blocks: [
      LI(
        "This chapter teaches you to describe. Adjectives say what people and things are like. In this lesson you learn the two homes of an adjective. It sits before a noun, or after the verb be. You also learn many new describing words.",
        [
          "You met describing words — adjectives — as a word class (Chapter 07 · Lesson 3).",
          "You know be joins a person to a word about them: She is happy (Chapter 12 · Lesson 1).",
          "You know be and the noun carry the -s: two boys, she walks (Chapter 10 · Lesson 2).",
        ],
      ),
      vocGlossary("Adjectives for people", [
        { word: "tall", partOfSpeech: "adjective", definition: "higher than most people" },
        { word: "short", partOfSpeech: "adjective", definition: "not tall" },
        { word: "young", partOfSpeech: "adjective", definition: "not old; early in life" },
        { word: "old", partOfSpeech: "adjective", definition: "having lived many years" },
        { word: "happy", partOfSpeech: "adjective", definition: "feeling good" },
        { word: "sad", partOfSpeech: "adjective", definition: "feeling unhappy" },
        { word: "kind", partOfSpeech: "adjective", definition: "friendly and good to people" },
        { word: "strong", partOfSpeech: "adjective", definition: "having a lot of power in the body" },
        { word: "weak", partOfSpeech: "adjective", definition: "having little power in the body" },
        { word: "tired", partOfSpeech: "adjective", definition: "needing rest" },
        { word: "busy", partOfSpeech: "adjective", definition: "having a lot to do" },
        { word: "ready", partOfSpeech: "adjective", definition: "prepared for something" },
      ]),
      vocGlossary("Adjectives for things and places", [
        { word: "big", partOfSpeech: "adjective", definition: "large in size" },
        { word: "small", partOfSpeech: "adjective", definition: "little in size" },
        { word: "new", partOfSpeech: "adjective", definition: "made a short time ago" },
        { word: "hot", partOfSpeech: "adjective", definition: "having a high temperature" },
        { word: "cold", partOfSpeech: "adjective", definition: "having a low temperature" },
        { word: "clean", partOfSpeech: "adjective", definition: "not dirty" },
        { word: "dirty", partOfSpeech: "adjective", definition: "not clean" },
        { word: "quiet", partOfSpeech: "adjective", definition: "making little noise" },
        { word: "noisy", partOfSpeech: "adjective", definition: "making a lot of noise" },
        { word: "expensive", partOfSpeech: "adjective", definition: "costing a lot of money" },
        { word: "cheap", partOfSpeech: "adjective", definition: "costing little money" },
        { word: "easy", partOfSpeech: "adjective", definition: "not difficult to do" },
        { word: "difficult", partOfSpeech: "adjective", definition: "not easy to do" },
        { word: "famous", partOfSpeech: "adjective", definition: "known by many people" },
        { word: "delicious", partOfSpeech: "adjective", definition: "very good to taste" },
      ]),
      H("Two homes, one job"),
      T(
        "One adjective has two homes. Home 1 is before the noun: a quiet street. Home 2 is after be: The street is quiet. Same word, same job. Only the place changes. This lesson trains both homes.",
      ),
      {
        type: "definition",
        term: "adjective",
        partOfSpeech: "word class",
        definition:
          "An adjective is a word that describes a noun. It says what a person or a thing is like. It never changes: one tall boy, two tall boys.",
        example: {
          english: "The street is quiet.",
          translation: "quiet describes the street — one adjective, no -s, no plural.",
        },
      },
      TB(
        "One adjective, two homes",
        ["Adjective", "Home 1 — before the noun", "Home 2 — after be"],
        [
          ["quiet", "a quiet street", "The street is quiet."],
          ["expensive", "an expensive phone", "The phone is expensive."],
          ["delicious", "delicious food", "The food is delicious."],
          ["strong", "a strong man", "The man is strong."],
          ["busy", "a busy day", "The day is busy."],
        ],
        "Both columns are correct English. Choose the home that fits your sentence.",
      ),
      AU(
        "Listen: describing words",
        "tall. short. young. old. quiet. noisy. clean. dirty. expensive. cheap. easy. difficult. strong. weak. famous. delicious.",
        0.85,
      ),
      AU(
        "Listen: both homes",
        "The street is quiet. I live on a quiet street. The food is delicious. This is delicious food. My father is strong. He is a strong man.",
        0.9,
      ),
      ST(
        "Describe a thing in three steps",
        [
          {
            title: "Step 1 — Name the thing",
            text: "Start with the thing you want to describe. The noun is the thing itself.",
            examples: [
              { english: "the street …", note: "The noun names the thing you will describe." },
              { english: "this phone …", note: "Point at it, then name it." },
            ],
          },
          {
            title: "Step 2 — Choose the adjective",
            text: "Pick one word that says what the thing is like. One good adjective is enough.",
            examples: [
              { english: "the street → quiet", note: "Ask: what is it like? Answer with one word." },
              { english: "this phone → expensive", note: "Money words describe things every day." },
            ],
          },
          {
            title: "Step 3 — Choose the home",
            text: "Put the adjective before the noun, or after be. Both sentences are correct English.",
            examples: [
              { english: "My street is quiet.", note: "Home 2: after be. A full statement." },
              { english: "I live on a quiet street.", note: "Home 1: before the noun, inside a phrase." },
            ],
          },
        ],
      ),
      GR(
        "The two homes of an adjective",
        "Adjectives go before nouns: a quiet street, an expensive phone. Or after be: The street is quiet, The phone is expensive. Adjectives never take -s, and a/an needs a noun after them.",
        [
          { english: "She is a kind teacher.", translation: "Home 1: kind sits just before the noun." },
          { english: "The teacher is kind.", translation: "Home 2: kind sits after be." },
          { english: "I see two tall boys.", translation: "No -s on tall. Only the noun takes the plural." },
          { english: "It is a very beautiful room.", translation: "a/an needs a noun after it — here room." },
        ],
        [
          "Never put the adjective where the noun goes. “The quiet is street” is impossible: quiet is not a thing, and street cannot describe anything.",
        ],
      ),
      EXD(
        "Adjectives in real life",
        [
          { english: "My grandmother is old and kind.", note: "Two adjectives after be, joined with and.", domain: "family" },
          { english: "I live on a quiet street.", note: "Home 1: the adjective sits right before street.", domain: "home" },
          { english: "This phone is expensive, but that one is cheap.", note: "but joins two descriptions — a real shopping sentence.", domain: "shopping" },
          { english: "The soup is hot, and the bread is delicious.", note: "Each noun gets its own adjective after be.", domain: "food" },
          { english: "The new book is difficult, but the old book is easy.", note: "Old and new describe the same noun in contrast.", domain: "education" },
          { english: "The bus is cheap and the train is fast.", note: "Compare two things — a travel decision in one line.", domain: "travel" },
          { english: "My father is busy in the morning and tired at night.", note: "Times can follow the adjective after be.", domain: "work" },
          { english: "Clean water and good food keep you strong.", note: "Adjectives before nouns carry a whole health rule.", domain: "health" },
          { english: "The tall boy in my class plays basketball.", note: "Adjective + noun inside a longer sentence — still Home 1.", domain: "sport" },
        ],
        "Nine sentences you can say today — each one describing something real.",
      ),
      US(
        [
          {
            situation: "Choosing in a shop",
            example: "“This bag is expensive. Do you have a cheap one?”",
            note: "Describe first, then ask — shops understand fast.",
          },
          {
            situation: "Talking about a new friend",
            example: "“My friend Sara is kind and very funny.”",
            note: "Character words make a person real in one line.",
          },
          {
            situation: "At the doctor",
            example: "“I am tired and weak.”",
            note: "Two body words help the doctor immediately.",
          },
          {
            situation: "Recommending a place to eat",
            example: "“The food there is delicious and cheap.”",
            note: "Taste + money: the two words people care about.",
          },
          {
            situation: "Describing your street",
            example: "“Our street is quiet at night, but busy in the morning.”",
            note: "One place, two times, two adjectives.",
          },
        ],
        "Describing in daily life",
        "One good adjective saves ten empty words.",
      ),
      DL(
        "Two friends compare phones",
        "Ali and Hana talk about their phones after class.",
        [
          ["Hana", "Ali! Your phone is new. Is it expensive?"],
          ["Ali", "It is not expensive, Hana. It is cheap — and the camera is good."],
          ["Hana", "My phone is old. The battery is weak."],
          ["Ali", "Then your phone is tired! Like me after the test."],
          ["Hana", "The test was difficult. Now I am tired and hungry."],
          ["Ali", "Come to my house. My mother's food is delicious."],
          ["Hana", "Good idea. And your street is quiet — we can study there."],
        ],
      ),
      CMP(
        "a quiet street vs The street is quiet",
        ["Home 1: a quiet street", "Home 2: The street is quiet"],
        [
          ["Where the adjective sits", "Just before the noun", "After the verb be"],
          ["What the sentence does", "Names the thing inside a phrase", "Makes a full statement about the thing"],
          ["With two adjectives", "Stack them: a quiet old street (Lesson 2)", "Join the last two with and: The street is quiet and old"],
          ["Watch out", "a/an needs a noun after it: an expensive phone", "The adjective stands alone: never “an expensive”"],
        ],
        {
          intro: "One adjective, two homes — and both sentences are correct English.",
          verdict: "Naming the thing inside a phrase → before the noun. Making a statement about it → after be.",
        },
      ),
      MS(
        [
          [
            "The quiet is street.",
            "The street is quiet.",
            "The adjective cannot be the subject. Street is the thing; quiet only describes it. Never swap their homes.",
          ],
          [
            "It is a very beautiful.",
            "It is very beautiful.",
            "a/an needs a noun after it. With no noun, drop the a — or name the thing: a very beautiful room.",
          ],
          [
            "I see two talls boys.",
            "I see two tall boys.",
            "English adjectives never take -s. Only the noun changes: two boys (Chapter 10).",
          ],
          [
            "This phone is an expensive.",
            "This phone is expensive.",
            "an + adjective with no noun is impossible. After be, the adjective stands alone.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "One form for everything",
        "In many languages, adjectives change for one and many. English adjectives never change. One tall boy, two tall boys, ten tall boys — the adjective stays tall. Only the noun takes the plural.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "I live on a quiet street in an old city. The houses are small and beautiful. My mother is a kind woman. She cooks delicious food. Our kitchen is clean and busy. At night the street is quiet, and I am happy.",
          task: "Read the text two times. Then say five adjectives from it.",
        },
        writing: {
          task: "Describe three things near you. Use each adjective twice: once before the noun, once after be.",
          guide: ["My ___ is ___.", "It is a ___ ___.", "The ___ is ___."],
          model: "My bag is heavy. It is a heavy bag. The room is quiet.",
        },
        listening: {
          script:
            "This is my street. It is a quiet street. The street is quiet at night. But in the morning it is busy and noisy.",
          task: "Listen and count the adjectives you hear.",
        },
        speaking: {
          task: "Describe your street and one person you know. Use four adjectives in both homes.",
          frames: ["My ___ is ___ (and ___).", "I have a ___ ___.", "It is a ___ ___."],
          checklist: [
            "I used four adjectives.",
            "I used both homes: before the noun and after be.",
            "My adjectives have no -s.",
          ],
        },
      }),
      LSP(
        [
          gls("Adjectives go before nouns in English."),
          gls("Describing words are called adjectives."),
          gls("adjective"),
          gls("quiet"),
          gls("delicious"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Adjectives describe nouns: a quiet street, delicious food, a kind teacher.",
        "They have two homes: before the noun, or after be — The street is quiet.",
        "Adjectives never take -s: two tall boys, red cars.",
        "a/an needs a noun after it: an expensive phone — never “an expensive” alone.",
        "The noun is the thing; the adjective only describes it: “The quiet is street” is impossible.",
      ]),
      RV(
        [
          {
            question: "What do we call describing words?",
            options: ["nouns", "adjectives", "verbs"],
            correctIndex: 1,
            explanation: "Describing words are called adjectives — the word class you met in Chapter 07.",
            from: "Chapter 07 · Lesson 3",
          },
          {
            question: "Which sentence uses be correctly?",
            options: ["She are a kind teacher.", "She is a kind teacher.", "She am a kind teacher."],
            correctIndex: 1,
            explanation: "She takes is — the be form you learned in Chapter 12.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which one is right for a thing that costs a lot?",
            options: ["a expensive phone", "an expensive phone", "a an expensive phone"],
            correctIndex: 1,
            explanation: "expensive starts with a vowel sound, so an fits — the article rule from Chapter 10.",
            from: "Chapter 10 · Lesson 4",
          },
          {
            question: "Where does a colour go?",
            options: ["an apple red", "a red apple", "a apple red"],
            correctIndex: 1,
            explanation: "Colours come before the noun — the rule from your first vocabulary chapter.",
            from: "Chapter 06 · Lesson 3",
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
            "Which sentence puts the adjective in the right home?",
            [
              ["a", "The quiet is street."],
              ["b", "The street is quiet."],
              ["c", "The street quiet is."],
            ],
            "b",
            fb(
              "The street is quiet.",
              "The noun street is the thing; the adjective quiet follows be and describes it.",
              "“The quiet is street” puts the adjective where the thing belongs — that home does not exist.",
            ),
            { skill: "grammar", hints: ["Find the thing itself first — the noun is the subject.", "The describing word follows the little be-verb."] },
          ),
          FB(
            "Complete the sentence with an adjective.",
            "The food is ___.",
            ["delicious"],
            fb(
              "delicious",
              "After be, the adjective stands alone — delicious says what the food tastes like.",
              "Words like eat and cook are actions here, not descriptions of the food.",
            ),
            { skill: "vocabulary", hints: ["Taste words come after be. Which word says it tastes very good?"] },
          ),
          MATCH(
            "Match each adjective to its meaning.",
            [
              ["quiet", "quiet"],
              ["expensive", "expensive"],
              ["delicious", "delicious"],
              ["strong", "strong"],
            ],
            [
              ["p1", "a thing with no noise"],
              ["p2", "costs a lot of money"],
              ["p3", "tastes very good"],
              ["p4", "has a lot of power"],
            ],
            [
              ["quiet", "p1"],
              ["expensive", "p2"],
              ["delicious", "p3"],
              ["strong", "p4"],
            ],
            fb(
              "quiet → no noise, expensive → costs a lot, delicious → tastes very good, strong → a lot of power",
              "Each adjective names one quality — match the quality to the word.",
            ),
            { skill: "vocabulary", hints: ["Read each little definition and find the word that matches it."] },
          ),
          LIS(
            "Listen and answer.",
            "My street is quiet at night.",
            "What is the street like at night?",
            ["quiet", "It is quiet.", "quiet at night"],
            fb(
              "quiet",
              "You heard “My street is quiet at night” — the adjective after be describes the street.",
              "Noisy and busy are the opposite words — the audio said the night street has no noise.",
            ),
            { skill: "listening", hints: ["Listen for the describing word after is."] },
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
            "The food is delicious today.",
            fb(
              "The food is delicious today",
              "Home 2: subject + be + adjective, then a time if you like.",
              "The adjective never jumps in front of the noun in this home.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "This phone is an expensive.",
            ["This phone is expensive."],
            fb(
              "This phone is expensive.",
              "After be the adjective stands alone — an only appears when a noun follows.",
              "“an expensive” promises a noun that never comes.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I see two tall boys.",
            ["I see two tall boys."],
            fb(
              "I see two tall boys.",
              "The adjective tall has no -s; the plural lives on boys only.",
              "Adjectives never take the plural in English.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which one is correct?",
            [
              ["a", "two tall boys"],
              ["b", "two talls boys"],
              ["c", "two tall boy"],
            ],
            "a",
            fb(
              "two tall boys",
              "The adjective stays tall; the noun carries the plural -s.",
              "“talls” and “boy” without -s both break the number rule.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Two things, two homes",
      instructions:
        "Choose four adjectives from this lesson. Write each one twice: once before a noun, and once after be. Example: “a quiet street” and “The street is quiet.”",
      minWords: 16,
      maxWords: 60,
    },
    homework: [
      "Look around your room. Say five sentences with adjectives — mix both homes.",
      "Describe two people in your family with two adjectives each, joined with and or but.",
      "Find three adjectives in a shop sign or a menu today. Write the phrase you found them in.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Adjective Order
  // =========================================================================
  {
    slug: "ch-15-l-02",
    minutes: 25,
    description:
      "When adjectives stack up, English has one ladder: opinion → size → age → colour. Learn the exact order with worked stacks, the two-adjective rule after be, and why “a red big bag” sounds wrong.",
    outcomes: [
      "Order stacked adjectives: opinion → size → age → colour → noun",
      "Rewrite wrongly-ordered phrases like “a red big bag”",
      "Join adjectives after be with and: The bag is big and red",
      "Stack three adjectives in one natural phrase",
    ],
    blocks: [
      LI(
        "One adjective was easy. Now we stack them. English puts stacked adjectives in one fixed order. This lesson teaches that ladder with real stacks. You will build phrases like a beautiful long red dress.",
        [
          "You can put adjectives before nouns: a quiet street (Chapter 15 · Lesson 1).",
          "You know the colour words: red, blue, green, black, white (Chapter 06 · Lesson 3).",
          "You know adjectives never take -s (Chapter 10 · Lesson 2).",
        ],
      ),
      vocGlossary("Words we stack", [
        { word: "beautiful", partOfSpeech: "adjective", definition: "very nice to look at — an opinion word" },
        { word: "big", partOfSpeech: "adjective", definition: "large — a size word" },
        { word: "small", partOfSpeech: "adjective", definition: "little — a size word" },
        { word: "long", partOfSpeech: "adjective", definition: "having length from end to end — a size word" },
        { word: "tall", partOfSpeech: "adjective", definition: "high — a size word for people and buildings" },
        { word: "new", partOfSpeech: "adjective", definition: "made recently — an age word" },
        { word: "old", partOfSpeech: "adjective", definition: "from long ago — an age word" },
        { word: "young", partOfSpeech: "adjective", definition: "early in life — an age word" },
        { word: "red", partOfSpeech: "adjective", definition: "the colour of blood — a colour word" },
        { word: "blue", partOfSpeech: "adjective", definition: "the colour of the sky — a colour word" },
        { word: "black", partOfSpeech: "adjective", definition: "the darkest colour — a colour word" },
        { word: "white", partOfSpeech: "adjective", definition: "the colour of snow — a colour word" },
      ]),
      H("One adjective is not enough"),
      T(
        "Look around: a big red bag. A quiet old street. English speakers stack adjectives every day. But the stack has rules. Say the ladder with me: opinion, size, age, colour — noun.",
      ),
      {
        type: "definition",
        term: "adjective order",
        partOfSpeech: "rule",
        definition:
          "When several adjectives come before one noun, they follow a fixed ladder: opinion → size → age → colour. The noun always comes last.",
        example: {
          english: "a beautiful long red dress",
          translation: "opinion (beautiful) + size (long) + colour (red) + noun (dress).",
        },
      },
      TB(
        "The order ladder",
        ["Step", "Group", "Example words"],
        [
          ["1", "Opinion — what you think of it", "beautiful, delicious, famous"],
          ["2", "Size — how big", "big, small, long, tall"],
          ["3", "Age — how old", "new, old, young"],
          ["4", "Colour", "red, blue, black, white"],
          ["5", "NOUN — the thing itself", "bag, street, dress, phone"],
        ],
        "Say it as a rhythm: opinion, size, age, colour — NOUN.",
      ),
      AU(
        "Listen: the ladder in action",
        "a nice big house. a small black cat. a beautiful old red car. a new blue bag. a quiet old street.",
        0.85,
      ),
      AU(
        "Listen: stacks in sentences",
        "She wears a beautiful long red dress. I want a small new phone. We live on a quiet old street.",
        0.9,
      ),
      ST(
        "Build a stack in three steps",
        [
          {
            title: "Step 1 — Choose the noun",
            text: "Start with the thing itself. The noun always ends the phrase.",
            examples: [
              { english: "… bag", note: "First decide what you are describing." },
              { english: "… dress", note: "The noun is the last word of the stack." },
            ],
          },
          {
            title: "Step 2 — Pick two or three adjectives",
            text: "Choose adjectives from different groups: one opinion, one size, one colour. Two or three is enough.",
            examples: [
              { english: "bag → big + red", note: "One size word, one colour word." },
              { english: "dress → beautiful + long + red", note: "Opinion, size, colour — three groups." },
            ],
          },
          {
            title: "Step 3 — Order them by the ladder",
            text: "Sort the words: opinion, then size, then age, then colour. Then the noun. No and inside the stack.",
            examples: [
              { english: "a big red bag", note: "size (big) before colour (red)." },
              { english: "a beautiful long red dress", note: "opinion, size, colour — a full stack." },
            ],
          },
        ],
      ),
      GR(
        "The stacking rule",
        "Stacked adjectives follow one ladder: opinion → size → age → colour → noun. No and between them: a nice big room, not “a nice and big room”. After be, the rule changes: join the last two with and.",
        [
          { english: "a big red bag", translation: "size before colour — the natural order." },
          { english: "a beautiful old house", translation: "opinion (beautiful) before age (old)." },
          { english: "The bag is big and red.", translation: "After be, join the last two adjectives with and." },
          { english: "She wears a beautiful long red dress.", translation: "A full stack: opinion, size, colour, noun." },
        ],
        [
          "Two adjectives from the same group usually sound wrong together. Instead of “a big large bag”, pick one from each group.",
        ],
      ),
      EXD(
        "Worked stacks in real life",
        [
          { english: "She wears a beautiful long red dress.", note: "The classic stack: opinion, size, colour, noun.", domain: "social" },
          { english: "I want a small new phone.", note: "Size (small) comes before age (new).", domain: "technology" },
          { english: "We live on a quiet old street.", note: "Quality (quiet) sits before age (old).", domain: "home" },
          { english: "He bought two small black cats.", note: "Number + size + colour — numbers sit before everything.", domain: "family" },
          { english: "The shop sells cheap hot bread.", note: "Two qualities stack fine when they come from different groups.", domain: "shopping" },
          { english: "My city has a famous old university.", note: "Famous (opinion) before old (age).", domain: "education" },
          { english: "We took a fast new train to the sea.", note: "Fast is a quality here — it sits before the age word.", domain: "travel" },
          { english: "They play with a big white ball in the park.", note: "Size before colour inside a longer sentence.", domain: "sport" },
          { english: "My grandmother makes delicious hot soup.", note: "Taste word first, temperature second, noun last.", domain: "food" },
        ],
        "Nine real stacks — say each one out loud as a rhythm.",
      ),
      US(
        [
          {
            situation: "Shopping for clothes",
            example: "“Do you have this shirt in a small white size?”",
            note: "Size + colour rolls off the tongue in shops.",
          },
          {
            situation: "Describing your home",
            example: "“We live in a small old house near the park.”",
            note: "Two or three adjectives paint your home fast.",
          },
          {
            situation: "Talking about a phone you want",
            example: "“I want a cheap new phone with a good camera.”",
            note: "Order your wish list: the stack comes before the noun.",
          },
          {
            situation: "Telling a friend about a film",
            example: "“It is a beautiful old story about a strong young king.”",
            note: "Two stacks in one sentence — you are ready for this.",
          },
          {
            situation: "Ordering food",
            example: "“Can I have the hot delicious soup, please?”",
            note: "Menus are full of stacked adjectives — read them aloud.",
          },
        ],
        "Stacking in daily life",
        "English speakers stack without thinking. Now you know the hidden ladder.",
      ),
      DL(
        "Shopping for a bag",
        "Hana helps Ali choose a bag for his sister.",
        [
          ["Ali", "Hana, look. I want a bag for my sister."],
          ["Hana", "What kind? A big bag or a small bag?"],
          ["Ali", "A small bag. She likes small things."],
          ["Hana", "What colour? This shop has black bags, red bags and blue bags."],
          ["Ali", "A red bag. She loves red."],
          ["Hana", "Then take this one: a small red bag. It is cheap, too."],
          ["Ali", "A small cheap red bag — my sister will be happy!"],
        ],
      ),
      CMP(
        "Stack before the noun vs and-list after be",
        ["a big red bag (before the noun)", "The bag is big and red (after be)"],
        [
          ["Word order", "Ladder: opinion → size → age → colour", "Join the last two with and"],
          ["and inside?", "Never: “a big and red bag” is wrong", "Always: “big and red” needs and"],
          ["When you use it", "Naming the thing inside a phrase", "Making a full statement about the thing"],
          ["Example", "I want a quiet old street to live on.", "My street is quiet and old."],
        ],
        {
          intro: "The same adjectives, two homes — and the two homes use different glue.",
          verdict: "Before the noun → stack with no and. After be → join the last two with and.",
        },
      ),
      MS(
        [
          [
            "a red big bag",
            "a big red bag",
            "Size comes before colour on the ladder. Colour is the last step before the noun.",
          ],
          [
            "a nice and big room",
            "a nice big room",
            "No and inside a stack before a noun. Save and for the home after be.",
          ],
          [
            "an old beautiful house",
            "a beautiful old house",
            "Opinion comes first. What you think of it (beautiful) sits before how old it is.",
          ],
          [
            "The bag is big red.",
            "The bag is big and red.",
            "After be, join the last two adjectives with and. A bare list after be is not English.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Your own language probably reverses this",
        "Most languages put colour or age first. English flips the order. Train the ladder as a rhythm: opinion, size, age, colour — NOUN. Say it ten times today.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My aunt lives in a famous old city. She has a small white house with a big green garden. In the garden there is a quiet wooden bench. Her street is narrow and busy, but her house is calm and beautiful. I love her long red table. We eat delicious hot food on Sundays.",
          task: "Read the text two times. Then say three adjective stacks from it.",
        },
        writing: {
          task: "Describe three things you own, using a stack of two or three adjectives for each.",
          guide: ["I have a ___ ___ ___.", "My ___ is a ___ ___ ___.", "It is ___ and ___."],
          model: "I have a small black phone. My room is quiet and clean.",
        },
        listening: {
          script:
            "I want a new blue bag. Not a small one — a big new blue bag. And my sister wants a beautiful long red dress.",
          task: "Listen and write the two stacks you hear.",
        },
        speaking: {
          task: "Describe your favourite outfit and one thing in your home. Use a stack for each.",
          frames: ["I wear a ___ ___ ___.", "My home has a ___ ___ ___.", "It is ___ and ___."],
          checklist: [
            "I stacked adjectives in the ladder order.",
            "I used no and inside a stack.",
            "After be I joined the last two with and.",
          ],
        },
      }),
      LSP(
        [
          gls("Adjectives go before nouns in English."),
          gls("Every colour has a name."),
          gls("adjective order"),
          gls("beautiful"),
          gls("colour"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Stacked adjectives follow one ladder: opinion → size → age → colour → noun.",
        "No and inside a stack before a noun: a nice big room.",
        "After be, join the last two adjectives with and: The bag is big and red.",
        "Numbers sit before the whole stack: two small black cats.",
        "One word per group: avoid “a big large bag” — pick the best word from each group.",
      ]),
      RV(
        [
          {
            question: "Where does a colour word go before a noun?",
            options: ["a red apple", "an apple red", "a apple red"],
            correctIndex: 0,
            explanation: "The colour comes just before the noun — the rule from your first vocabulary chapter.",
            from: "Chapter 06 · Lesson 3",
          },
          {
            question: "Which be-form fits “The bags ___ big and red.”?",
            options: ["is", "am", "are"],
            correctIndex: 2,
            explanation: "Bags is plural, so be becomes are — the form you learned with be.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which phrase needs an?",
            options: ["a old house", "an old house", "a an old house"],
            correctIndex: 1,
            explanation: "old starts with a vowel sound, so an fits — the article rule from Chapter 10.",
            from: "Chapter 10 · Lesson 4",
          },
          {
            question: "Which word is an adjective in “a beautiful old house”?",
            options: ["house", "a", "beautiful"],
            correctIndex: 2,
            explanation: "beautiful describes the house — house is the noun and a is an article.",
            from: "Chapter 07 · Lesson 3",
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
            "Which phrase puts the adjectives in the right order?",
            [
              ["a", "a red big bag"],
              ["b", "a big red bag"],
              ["c", "a bag big red"],
            ],
            "b",
            fbx(
              "a big red bag",
              "Size (big) comes before colour (red) — the ladder ends at colour, then the noun.",
              "Colour never jumps ahead of size on the ladder.",
              "Adjectives go before nouns in English.",
            ),
            { skill: "grammar", hints: ["Say the ladder out loud: size comes before colour."] },
          ),
          FB(
            "Complete the stack with the opinion word.",
            "She wears a ___ long red dress.",
            ["beautiful"],
            fb(
              "beautiful",
              "The opinion word opens the stack: beautiful + long + red + dress.",
              "Size and colour words cannot open the stack when an opinion word is available.",
            ),
            { skill: "grammar", hints: ["The opinion word goes first — the word for very nice to look at."] },
          ),
          MATCH(
            "Match each adjective to its ladder group.",
            [
              ["big", "big"],
              ["new", "new"],
              ["red", "red"],
              ["beautiful", "beautiful"],
            ],
            [
              ["g1", "size group"],
              ["g2", "age group"],
              ["g3", "colour group"],
              ["g4", "opinion group"],
            ],
            [
              ["big", "g1"],
              ["new", "g2"],
              ["red", "g3"],
              ["beautiful", "g4"],
            ],
            fb(
              "big → size, new → age, red → colour, beautiful → opinion",
              "Every stacking word belongs to one group on the ladder.",
            ),
            { skill: "vocabulary", hints: ["Ask: does the word say what I think, how big, how old, or what colour?"] },
          ),
          LIS(
            "Listen and answer.",
            "I want a small new phone.",
            "What kind of phone does the speaker want?",
            ["a small new phone", "small new phone", "a small new phone."],
            fb(
              "a small new phone",
              "You heard the full stack: size (small) before age (new), then the noun.",
              "The words came in ladder order — never colour-first here.",
            ),
            { skill: "listening", hints: ["Listen for the size word first, then the age word."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the phrase.",
            "He has a big red car.",
            fb(
              "He has a big red car",
              "size (big) → colour (red) → noun (car), with a in front.",
              "The article opens the phrase; the noun closes it.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "She wears a red beautiful dress.",
            ["She wears a beautiful red dress."],
            fb(
              "She wears a beautiful red dress.",
              "Opinion (beautiful) comes before colour (red) on the ladder.",
              "Colour-first order is the most common stacking mistake.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I live on a quiet old street.",
            ["I live on a quiet old street."],
            fb(
              "I live on a quiet old street.",
              "Quality (quiet) before age (old), then the noun street.",
              "The stack keeps its order inside a longer sentence too.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "You describe the bag after be. Which one is right?",
            [
              ["a", "The bag is big and red."],
              ["b", "The bag is big red."],
              ["c", "The bag is big, red."],
            ],
            "a",
            fb(
              "The bag is big and red.",
              "After be, join the last two adjectives with and.",
              "A bare list or a comma cannot glue adjectives after be.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Stack them right",
      instructions:
        "Put each group in the correct order and write the phrase: “black / a / big / car”, “old / a / famous / university”, “red / three / small / boxes”, “new / a / beautiful / bag”. Then use two of them in full sentences.",
      minWords: 12,
      maxWords: 55,
    },
    homework: [
      "Describe your favourite outfit with one stack of three adjectives. Say it aloud five times.",
      "Describe your home with two stacks: one before a noun, one after be with and.",
      "Find one adjective stack in an advert or a menu today and copy the phrase.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Adverbs of Manner
  // =========================================================================
  {
    slug: "ch-15-l-03",
    minutes: 25,
    description:
      "How do you do it? Adverbs of manner describe actions: the -ly family (slowly, carefully), the irregulars (good → well, fast → fast, hard → hard), and the adjective-vs-adverb mistake every beginner makes.",
    outcomes: [
      "Form adverbs of manner with -ly from most adjectives",
      "Use the irregular family: well, badly, fast, hard",
      "Describe how actions happen, after the verb or object",
      "Choose between adjective and adverb: “She sings beautifully”, not “beautiful”",
    ],
    blocks: [
      LI(
        "Adjectives describe things. Adverbs describe actions. In this lesson you learn the -ly family. You also learn the irregular family: well, badly, fast, hard. Then you can say how you do everything.",
        [
          "You know every sentence needs a verb (Chapter 08 · Lesson 4).",
          "You know some verbs act on objects: He speaks English (Chapter 09 · Lesson 2).",
          "You know be joins a person to a description: She is happy (Chapter 12 · Lesson 1).",
        ],
      ),
      vocGlossary("Adverbs of manner", [
        { word: "well", partOfSpeech: "adverb", definition: "in a good way — the adverb of good" },
        { word: "badly", partOfSpeech: "adverb", definition: "in a bad way — the adverb of bad" },
        { word: "quickly", partOfSpeech: "adverb", definition: "with speed" },
        { word: "slowly", partOfSpeech: "adverb", definition: "without speed; taking time" },
        { word: "carefully", partOfSpeech: "adverb", definition: "with care and attention" },
        { word: "loudly", partOfSpeech: "adverb", definition: "with a lot of noise" },
        { word: "hard", partOfSpeech: "adverb", definition: "with a lot of effort — the adverb of hard work" },
        { word: "together", partOfSpeech: "adverb", definition: "with each other, at the same time" },
      ]),
      H("From things to actions"),
      T(
        "Adjectives say what things are like: a quiet street. Adverbs say how actions happen: she walks quietly. In this lesson, one small word family changes everything you can say about your day.",
      ),
      {
        type: "definition",
        term: "adverb of manner",
        partOfSpeech: "word class",
        definition:
          "An adverb of manner describes how an action happens. It usually comes after the verb, or after the object. Many end in -ly.",
        example: {
          english: "She sings beautifully.",
          translation: "beautifully describes the singing — the action, not the singer.",
        },
      },
      TB(
        "The -ly family and the irregulars",
        ["Adjective", "Adverb", "Example"],
        [
          ["slow", "slowly", "She walks slowly."],
          ["quick", "quickly", "He runs quickly."],
          ["careful", "carefully", "Listen carefully."],
          ["happy", "happily", "They play happily."],
          ["good", "well", "She sings well."],
          ["bad", "badly", "He plays badly."],
          ["fast", "fast", "The train runs fast."],
          ["hard", "hard", "He works hard."],
        ],
        "Four words refuse the -ly pattern. Learn them as a family: well, badly, fast, hard.",
      ),
      AU(
        "Listen: adverbs of manner",
        "slowly. quickly. carefully. loudly. well. badly. hard. together.",
        0.85,
      ),
      AU(
        "Listen: how actions happen",
        "She sings well. He drives fast. They speak English slowly. Please listen carefully. We work hard together.",
        0.9,
      ),
      ST(
        "Describe an action in three steps",
        [
          {
            title: "Step 1 — Find the action",
            text: "Find the verb. The adverb will sit next to it.",
            examples: [
              { english: "She sings …", note: "The action is sings." },
              { english: "He speaks English …", note: "The action is speaks; English is the object." },
            ],
          },
          {
            title: "Step 2 — Ask HOW",
            text: "Ask: how does it happen? Answer with one word — the adverb.",
            examples: [
              { english: "sings → how? beautifully", note: "The -ly word describes the singing." },
              { english: "speaks English → how? slowly", note: "How he speaks, not how English looks." },
            ],
          },
          {
            title: "Step 3 — Place the adverb",
            text: "Put the adverb after the verb, or after the object. Never between the verb and its object.",
            examples: [
              { english: "She sings beautifully.", note: "No object, so the adverb follows the verb." },
              { english: "He speaks English slowly.", note: "With an object, the adverb follows the object." },
            ],
          },
        ],
      ),
      GR(
        "The -ly rule and its exceptions",
        "Most adverbs of manner = adjective + ly: slow → slowly, careful → carefully. Adjectives ending in -y change to -ily: happy → happily. Four words are irregular: good → well, bad → badly, fast → fast, hard → hard.",
        [
          { english: "She sings beautifully.", translation: "beautiful + ly — describing the singing." },
          { english: "They play happily.", translation: "happy → happily: the y becomes an i." },
          { english: "He speaks English very well.", translation: "good never becomes an adverb: the word is well." },
          { english: "He works hard.", translation: "hard is already an adverb — no -ly needed." },
        ],
        [
          "“She sings goodly” does not exist. good → well is the one you must memorise.",
          "hardly is not the adverb of hard. He works hard means he works with effort.",
        ],
      ),
      EXD(
        "How actions happen in real life",
        [
          { english: "Please speak slowly. I am learning.", note: "The classroom sentence every beginner needs.", domain: "everyday" },
          { english: "The students listen carefully to the teacher.", note: "Adverb after the verb listen — no object here.", domain: "education" },
          { english: "My grandfather walks slowly with his stick.", note: "One adverb paints a whole picture.", domain: "family" },
          { english: "I cook carefully because the oil is hot.", note: "Safety rules live in adverbs.", domain: "home" },
          { english: "The builders work hard from morning to night.", note: "hard is the adverb — no -ly.", domain: "work" },
          { english: "The children play happily in the park.", note: "happy → happily: the y becomes an i.", domain: "sport" },
          { english: "We walk together to school every day.", note: "together says how, at the end of the sentence.", domain: "social" },
          { english: "The train moves fast through the mountains.", note: "fast stays fast — adjective and adverb are one word.", domain: "travel" },
          { english: "Eat slowly and carefully when the food is hot.", note: "Two adverbs stack after one action.", domain: "health" },
        ],
        "Nine sentences — each one tells you HOW something happens.",
      ),
      US(
        [
          {
            situation: "In an English class",
            example: "“Please read slowly. Repeat carefully.”",
            note: "Teachers run lessons with manner adverbs.",
          },
          {
            situation: "On the phone",
            example: "“Can you speak slowly, please? My English is new.”",
            note: "The most useful sentence of this whole course.",
          },
          {
            situation: "Describing a player",
            example: "“He plays football well, but he shouts loudly.”",
            note: "Praise and teasing both need adverbs.",
          },
          {
            situation: "Cooking with family",
            example: "“Stir it slowly. Add the salt carefully.”",
            note: "Recipes are adverb machines.",
          },
          {
            situation: "At work",
            example: "“She types quickly and checks carefully.”",
            note: "Two adverbs describe one worker.",
          },
        ],
        "Adverbs of manner in daily life",
        "Adjectives sell the thing; adverbs sell the action.",
      ),
      DL(
        "How is your English?",
        "Hana asks Ali about his English class.",
        [
          ["Hana", "Ali, how is your English class?"],
          ["Ali", "It is good. The teacher speaks slowly and clearly."],
          ["Hana", "Do you understand her?"],
          ["Ali", "Yes. I listen carefully now. Before, I listened badly."],
          ["Hana", "And your speaking?"],
          ["Ali", "I speak slowly, but I speak well for one year of English."],
          ["Hana", "That is good. Practice carefully and you will speak quickly one day."],
        ],
      ),
      CMP(
        "good vs well",
        ["good (adjective)", "well (adverb)"],
        [
          ["Describes", "Things and people: a good book, a good boy", "Actions: she reads well"],
          ["Where it sits", "Before a noun, or after be", "After the verb or object"],
          ["Making it", "No change needed", "good → well (never “goodly”)"],
          ["With be", "I am good at football — a thing you are", "I play well — an action you do"],
          ["Watch out", "“He speaks English very good” — describes the English, not the speaking", "“He speaks English very well” — this is the one you want"],
        ],
        {
          intro: "The most common adjective/adverb mistake in the world.",
          verdict: "Describing a thing → good. Describing an action → well. “I am good at football, and I play well.”",
        },
      ),
      MS(
        [
          [
            "She sings beautiful.",
            "She sings beautifully.",
            "The adverb describes the singing — the action — so it takes the -ly form.",
          ],
          [
            "He speaks English very good.",
            "He speaks English very well.",
            "The word describes how he speaks, not how English looks. Actions take well.",
          ],
          [
            "She sings goodly.",
            "She sings well.",
            "goodly does not exist. good → well is irregular: memorise it once and keep it forever.",
          ],
          [
            "He works hardly.",
            "He works hard.",
            "hard is already the adverb. Add -ly and the meaning changes completely.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "One word, two jobs in your own language",
        "In Urdu and Hindi, one word often does both jobs. English splits them. Ask one question before you speak: am I describing a thing or an action? Thing → adjective. Action → adverb.",
      ),
      N(
        "Where the adverb sits",
        "Manner adverbs sit after the verb, or after the object. He speaks English slowly — never “He speaks slowly English”. The object sticks to its verb.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My sister is a careful driver. She drives slowly and watches the road carefully. My brother is different. He drives fast and turns quickly. My mother says, “Drive carefully, please.” My father listens well and never shouts loudly. Our street is quiet, and I sleep well.",
          task: "Read the text two times. Then say five adverbs from it.",
        },
        writing: {
          task: "Write five sentences about how you do things: cook, study, speak, sleep, play. Use a different adverb each time.",
          guide: ["I cook ___ (carefully / badly).", "I study ___ .", "I speak English ___ ."],
          model: "I study slowly but carefully. I sleep well.",
        },
        listening: {
          script:
            "Please listen carefully. Read this slowly. Write your name clearly. Then close your book quietly and wait.",
          task: "Listen and put the four instructions in order.",
        },
        speaking: {
          task: "Describe how three people you know do something: work, cook, drive or study. Use five adverbs.",
          frames: ["My ___ works ___ .", "She / He cooks ___ .", "I speak English ___ ."],
          checklist: [
            "I used five adverbs of manner.",
            "I used the irregular family at least once (well, badly, fast, hard).",
            "My adverbs sit after the verb or object.",
          ],
        },
      }),
      LSP(
        [
          gls("Adjectives describe nouns; adverbs describe verbs."),
          gls("Many adverbs end in -ly."),
          gls("adverb"),
          gls("well"),
          gls("carefully"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Adverbs of manner describe how actions happen: she walks slowly.",
        "Most adverbs = adjective + ly; adjectives in -y take -ily: happily.",
        "Four irregulars: good → well, bad → badly, fast → fast, hard → hard.",
        "The adverb sits after the verb, or after the object: He speaks English slowly.",
        "Adjective for things, adverb for actions: “a good player” but “she plays well”.",
      ]),
      RV(
        [
          {
            question: "What does every sentence need?",
            options: ["an adjective", "a verb", "a colour"],
            correctIndex: 1,
            explanation: "Every sentence needs a verb — the rule from your first sentences chapter.",
            from: "Chapter 08 · Lesson 1",
          },
          {
            question: "In “He speaks English”, what is English?",
            options: ["the subject", "the object", "a verb"],
            correctIndex: 1,
            explanation: "English receives the action — the object, from the sentence-structure chapter.",
            from: "Chapter 09 · Lesson 2",
          },
          {
            question: "Which be-form fits “She ___ a careful driver.”?",
            options: ["are", "is", "am"],
            correctIndex: 1,
            explanation: "She takes is — the be form from Chapter 12.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which word describes an action in “The baby sleeps quietly”?",
            options: ["baby", "quietly", "sleeps"],
            correctIndex: 1,
            explanation: "quietly says how the sleeping happens — an adverb of manner.",
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
            "Which sentence tells us HOW she sings?",
            [
              ["a", "She is a beautiful singer."],
              ["b", "She sings beautifully."],
              ["c", "She sings beautiful."],
            ],
            "b",
            fbx(
              "She sings beautifully.",
              "The -ly word describes the singing — the action itself.",
              "“Beautiful” after the verb is the adjective doing the adverb’s job.",
              "Many adverbs end in -ly.",
            ),
            { skill: "grammar", hints: ["Ask: does the sentence describe the singer, or the singing?"] },
          ),
          FB(
            "Complete the sentence with the irregular adverb.",
            "He plays football ___.",
            ["well"],
            fb(
              "well",
              "The adverb of good is well: it describes how he plays.",
              "good is the adjective — for actions English uses its adverb.",
            ),
            { skill: "grammar", hints: ["Think of the irregular adverb — the one that comes from the adjective for things you like."] },
          ),
          MATCH(
            "Match each adjective to its adverb.",
            [
              ["slow", "slow"],
              ["quick", "quick"],
              ["careful", "careful"],
              ["loud", "loud"],
            ],
            [
              ["a1", "slowly"],
              ["a2", "quickly"],
              ["a3", "carefully"],
              ["a4", "loudly"],
            ],
            [
              ["slow", "a1"],
              ["quick", "a2"],
              ["careful", "a3"],
              ["loud", "a4"],
            ],
            fb(
              "slow → slowly, quick → quickly, careful → carefully, loud → loudly",
              "The -ly family: two letters turn an adjective into an adverb.",
            ),
            { skill: "vocabulary", hints: ["Most pairs just add two letters at the end of the adjective."] },
          ),
          LIS(
            "Listen and answer.",
            "The children play happily.",
            "How do the children play?",
            ["happily", "They play happily.", "play happily"],
            fb(
              "happily",
              "You heard the -ly word after the action play — it describes the playing.",
              "The adjective form would describe the children, not the playing.",
            ),
            { skill: "listening", hints: ["Listen for the -ly word that follows the action."] },
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
            "She sings beautiful.",
            ["She sings beautifully."],
            fb(
              "She sings beautifully.",
              "The word describes the singing, an action — actions take the adverb.",
              "An adjective after a verb is the classic beginner mistake.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "The students listen carefully.",
            fb(
              "The students listen carefully",
              "Subject + verb + adverb: the adverb closes the sentence.",
              "The adverb never jumps in front of the verb.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "He speaks English very well.",
            ["He speaks English very well."],
            fb(
              "He speaks English very well.",
              "The adverb follows the object English — and good becomes its adverb.",
              "The adjective form would describe the English, not the speaking.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Your friend asks “How is your English?” Which answer is right?",
            [
              ["a", "I speak English very good."],
              ["b", "I speak English very well."],
              ["c", "I speak English goodly."],
            ],
            "b",
            fb(
              "I speak English very well.",
              "well describes the action of speaking — the irregular adverb of good.",
              "“very good” describes a thing; “goodly” does not exist.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "How I do things",
      instructions:
        "Write five sentences describing HOW you do things: cooking, studying, speaking, sleeping, playing. Use a different adverb each time, and include at least one irregular (well, badly, fast, hard).",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Turn five adjectives into adverbs out loud: slow, quick, careful, loud, happy.",
      "Describe how three people you know work or study. Use an adverb in every sentence.",
      "On your next phone call in English, say: “Please speak slowly.” Report what happened.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Adverbs of Frequency and Placement
  // =========================================================================
  {
    slug: "ch-15-l-04",
    minutes: 25,
    description:
      "How often? The frequency scale from always (100%) to never (0%), its two placement homes — before main verbs, after be — and the question “How often …?” with do.",
    outcomes: [
      "Place frequency adverbs before main verbs: I always eat breakfast",
      "Place frequency adverbs after be: She is always late",
      "Read the scale as percentages: always 100%, usually 90%, sometimes 50%, never 0%",
      "Ask and answer “How often …?” questions",
    ],
    blocks: [
      LI(
        "You met these words with routines: always, usually, often, sometimes, never. This lesson adds the placement rules. Frequency adverbs have two homes, like adjectives. One sits before main verbs. The other sits after be.",
        [
          "You met frequency adverbs with the present simple (Chapter 13 · Lesson 5).",
          "You know be makes its own forms: am, is, are (Chapter 12 · Lesson 1).",
          "You know other verbs need do for questions: How often do you …? (Chapter 14 · Lesson 2).",
        ],
      ),
      vocGlossary("The frequency scale", [
        { word: "always", partOfSpeech: "adverb", definition: "every time; 100 per cent" },
        { word: "usually", partOfSpeech: "adverb", definition: "most times; about 90 per cent" },
        { word: "often", partOfSpeech: "adverb", definition: "many times; about 70 per cent" },
        { word: "sometimes", partOfSpeech: "adverb", definition: "some times; about 50 per cent" },
        { word: "never", partOfSpeech: "adverb", definition: "no times; 0 per cent" },
        { word: "every day", partOfSpeech: "phrase", definition: "on each day, without exception" },
      ]),
      H("Two homes for frequency adverbs"),
      T(
        "Frequency adverbs tell us how often. They have two homes. With main verbs, they sit before the verb. With be, they sit after it. Learn the two homes once, and every routine sentence you make becomes correct.",
      ),
      {
        type: "definition",
        term: "frequency adverb",
        partOfSpeech: "word class",
        definition:
          "A frequency adverb says how often something happens. It goes before main verbs and after be.",
        example: {
          english: "She is always late.",
          translation: "always follows be — never “She always is late”.",
        },
      },
      TB(
        "The frequency scale",
        ["Adverb", "How often", "Example"],
        [
          ["always", "100 per cent — every time", "I always eat breakfast."],
          ["usually", "about 90 per cent — most days", "She usually walks to school."],
          ["often", "about 70 per cent — many times", "We often play on Saturday."],
          ["sometimes", "about 50 per cent — some days", "Sometimes I cook dinner."],
          ["never", "0 per cent — not one time", "He never drinks tea."],
        ],
        "Read the scale like a ruler: 100, 90, 70, 50, 0.",
      ),
      AU(
        "Listen: the two homes",
        "I always eat breakfast. She is always late. He usually walks to work. They are never angry. We often play together. Sometimes I cook dinner.",
        0.85,
      ),
      AU(
        "Listen: how often?",
        "How often do you cook? I usually cook on Sundays. How often is he late? He is never late.",
        0.9,
      ),
      ST(
        "Place the adverb in three steps",
        [
          {
            title: "Step 1 — Find the verb",
            text: "Look at the verb. Is it be, or is it a main verb like eat, walk, play?",
            examples: [
              { english: "She ___ late.", note: "The verb is be — is." },
              { english: "I ___ breakfast.", note: "The verb is a main verb — eat." },
            ],
          },
          {
            title: "Step 2 — Choose the home",
            text: "Main verb → the adverb goes before it. Be → the adverb goes after it.",
            examples: [
              { english: "I always eat breakfast.", note: "Home 1: before the main verb." },
              { english: "She is always late.", note: "Home 2: after be." },
            ],
          },
          {
            title: "Step 3 — Say it with a question",
            text: "Ask How often …? with do. Then answer with your adverb in the right home.",
            examples: [
              { english: "How often do you cook? — I usually cook on Sundays.", note: "do carries the question; the adverb sits before cook." },
              { english: "How often is he late? — He is never late.", note: "be makes its own question; the adverb follows is." },
            ],
          },
        ],
      ),
      GR(
        "The two placement homes",
        "Frequency adverbs go before main verbs: I always eat breakfast, He never drinks tea. With be, they go after it: She is always late, They are never angry.",
        [
          { english: "He usually walks to work.", translation: "usually sits before the main verb walks." },
          { english: "They are never angry.", translation: "never sits after be — are." },
          { english: "How often do you cook? — I usually cook on Sundays.", translation: "do carries the question; the adverb keeps its home." },
          { english: "Sometimes I cook dinner.", translation: "sometimes can also open the whole sentence." },
        ],
        [
          "sometimes, usually and often can start a sentence: Sometimes I cook dinner. always and never cannot.",
        ],
      ),
      EXD(
        "How often in real life",
        [
          { english: "I always eat breakfast before school.", note: "Home 1: always sits before the main verb.", domain: "everyday" },
          { english: "She usually walks to school, but she sometimes takes the bus.", note: "Two adverbs, one sentence, two habits.", domain: "education" },
          { english: "My mother is never tired. She is usually busy and happy.", note: "Home 2: after be, twice in a row.", domain: "family" },
          { english: "We often clean the kitchen together on Fridays.", note: "often before the main verb; together at the end.", domain: "home" },
          { english: "He always works hard and is never late.", note: "A main-verb home and a be home in one sentence.", domain: "work" },
          { english: "I sometimes run in the park, but I never run on the road.", note: "Safety rules love frequency adverbs.", domain: "health" },
          { english: "We usually watch the match together on Saturday.", note: "usually + a time phrase: a full routine.", domain: "sport" },
          { english: "The bus is often full, so I sometimes walk home.", note: "After be first, then before a main verb.", domain: "travel" },
          { english: "They are usually happy to help, and they never shout.", note: "Character in two homes: after be and before a verb.", domain: "social" },
        ],
        "Nine routine sentences — each one true for millions of people.",
      ),
      US(
        [
          {
            situation: "A job interview",
            example: "“I always arrive early, and I usually work late on Fridays.”",
            note: "Interviewers love frequency adverbs — they sound like habits.",
          },
          {
            situation: "At the doctor",
            example: "“I sometimes eat late at night, and I never exercise.”",
            note: "Doctors ask how often — answer with the scale.",
          },
          {
            situation: "Planning with friends",
            example: "“How often do you play? — We often play on Saturdays.”",
            note: "How often builds plans faster than yes/no questions.",
          },
          {
            situation: "Talking to a teacher",
            example: "“I usually do my homework, but I sometimes forget it.”",
            note: "Honesty sounds better with usually than with always.",
          },
          {
            situation: "Describing a friend",
            example: "“She is always kind. She never says a bad word.”",
            note: "Character descriptions live after be.",
          },
        ],
        "Frequency in daily life",
        "Say how often, and people trust the habit.",
      ),
      DL(
        "How often do you cook?",
        "Hana interviews Ali about his week for a class project.",
        [
          ["Hana", "Ali, how often do you cook?"],
          ["Ali", "I usually cook on Sundays. My mother cooks on the other days."],
          ["Hana", "How often do you eat out?"],
          ["Ali", "Sometimes. We sometimes go to a restaurant on Fridays."],
          ["Hana", "And your brother? Is he often late for dinner?"],
          ["Ali", "Ha! He is always late. He is never on time."],
          ["Hana", "I am usually late too. My mother is never happy about it."],
        ],
      ),
      CMP(
        "Before the main verb vs after be",
        ["I always eat breakfast.", "She is always late."],
        [
          ["Which verb", "A main verb: eat, walk, play", "The verb be: is, am, are"],
          ["Where the adverb sits", "Just before the main verb", "Just after be"],
          ["Wrong version", "“I eat always breakfast.”", "“She always is late.”"],
          ["Why", "The adverb hugs the verb it describes", "be is strong — the adverb follows it"],
        ],
        {
          intro: "One scale, two homes — the adverb always hugs the right verb.",
          verdict: "Main verb → before it. Be → after it. Two drills, one rule.",
        },
      ),
      MS(
        [
          [
            "She always is late.",
            "She is always late.",
            "With be, the adverb follows the verb. “Always is” breaks the be home.",
          ],
          [
            "I eat always breakfast.",
            "I always eat breakfast.",
            "With a main verb, the adverb sits before the verb — not inside the phrase.",
          ],
          [
            "Always I drink tea in the morning.",
            "I always drink tea in the morning.",
            "always cannot open the sentence. Keep it in its home, before drink.",
          ],
          [
            "How often you cook?",
            "How often do you cook?",
            "Main verbs need do for questions — the rule from your questions chapter.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "The be exception is automatic for natives",
        "Native speakers never think about this rule — they feel it. Train it as muscle memory: verb → before; be → after. Two drills, one rule.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My father always gets up at six. He usually walks to work. He is never late. My mother often cooks on Sundays, and she is usually happy in the kitchen. I sometimes help her. We are always together on Sundays, and we never watch television during dinner.",
          task: "Read the text two times. Then say the two homes you find in it.",
        },
        writing: {
          task: "Write five “How often …?” questions and answer them. Use both homes at least twice.",
          guide: ["How often do you ___ ? — I ___ ___ .", "How often is he / she ___ ? — He / She is ___ ___ ."],
          model: "How often do you cook? — I usually cook on Sundays. How often is he late? — He is never late.",
        },
        listening: {
          script:
            "How often do you play football? I usually play on Saturdays. How often are you tired? I am sometimes tired, but I am never sad.",
          task: "Listen and note which home each answer uses.",
        },
        speaking: {
          task: "Interview a partner with five “How often …?” questions. Report one answer to the class.",
          frames: ["How often do you ___ ?", "How often are you ___ ?", "He / She usually ___ .", "He / She is never ___ ."],
          checklist: [
            "I asked with do for main verbs.",
            "I put adverbs before main verbs and after be.",
            "I reported one answer in the third person.",
          ],
        },
      }),
      LSP(
        [
          gls("Frequency adverbs tell us how often."),
          gls("Adverbs of frequency go before the main verb."),
          gls("frequency adverb"),
          gls("always"),
          gls("sometimes"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The frequency scale: always 100%, usually 90%, often 70%, sometimes 50%, never 0%.",
        "Before main verbs: I always eat breakfast, He never drinks tea.",
        "After be: She is always late, They are never angry.",
        "sometimes, usually and often can open a sentence; always and never cannot.",
        "Ask How often …? with do for main verbs; be makes its own question.",
      ]),
      RV(
        [
          {
            question: "What does the present simple describe?",
            options: ["habits and routines", "one finished action", "future plans"],
            correctIndex: 0,
            explanation: "The present simple describes habits and routines — the tense from Chapter 13.",
            from: "Chapter 13 · Lesson 1",
          },
          {
            question: "He usually walks to school. Why walks?",
            options: ["be takes -s", "he is third person singular", "usually adds -s"],
            correctIndex: 1,
            explanation: "Third person singular adds -s in the present simple — the rule from Chapter 13.",
            from: "Chapter 13 · Lesson 2",
          },
          {
            question: "Which question is right?",
            options: ["How often you cook?", "How often do you cook?", "How often cook you?"],
            correctIndex: 1,
            explanation: "Main verbs need do for questions — the rule from your questions chapter.",
            from: "Chapter 14 · Lesson 2",
          },
          {
            question: "Which sentence puts never after be?",
            options: ["They never are angry.", "They are never angry.", "They are angry never."],
            correctIndex: 1,
            explanation: "Frequency adverbs follow be — the placement you met with Chapter 13’s routines.",
            from: "Chapter 13 · Lesson 5",
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
            "Where does always go in this be-sentence?",
            [
              ["a", "She always is late."],
              ["b", "She is always late."],
              ["c", "She is late always."],
            ],
            "b",
            fbx(
              "She is always late.",
              "With be, the frequency adverb follows the verb: is always.",
              "“Always is” puts the adverb in the main-verb home — the wrong one.",
              "Adverbs of frequency go before the main verb.",
            ),
            { skill: "grammar", hints: ["Find the be-verb first. The frequency word sits right after it."] },
          ),
          FB(
            "Complete the sentence with a frequency adverb.",
            "I ___ eat breakfast. (100 per cent — every day)",
            ["always"],
            fb(
              "always",
              "100 per cent means every time — the word for that is at the top of the scale.",
              "usually and sometimes are lower on the scale — they would not be true for you.",
            ),
            { skill: "grammar", hints: ["This word means 100 per cent — every single day, no exceptions."] },
          ),
          MATCH(
            "Match each adverb to its percentage.",
            [
              ["always", "always"],
              ["usually", "usually"],
              ["sometimes", "sometimes"],
              ["never", "never"],
            ],
            [
              ["p1", "100 per cent"],
              ["p2", "about 90 per cent"],
              ["p3", "about 50 per cent"],
              ["p4", "0 per cent"],
            ],
            [
              ["always", "p1"],
              ["usually", "p2"],
              ["sometimes", "p3"],
              ["never", "p4"],
            ],
            fb(
              "always → 100%, usually → 90%, sometimes → 50%, never → 0%",
              "The scale reads like a ruler: 100, 90, 70, 50, 0.",
            ),
            { skill: "vocabulary", hints: ["Match each word to its share of the week."] },
          ),
          LIS(
            "Listen and answer.",
            "He never drinks tea.",
            "How often does he drink tea?",
            ["never", "He never drinks tea.", "never drinks tea"],
            fb(
              "never",
              "You heard the frequency word before the action drink — 0 per cent.",
              "The other scale words would mean he sometimes drinks it.",
            ),
            { skill: "listening", hints: ["Listen for the frequency word before the action."] },
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
            "We often play football on Saturday.",
            fb(
              "We often play football on Saturday",
              "often sits before the main verb; the time phrase closes the sentence.",
              "The adverb never separates the verb from its object.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I eat always breakfast.",
            ["I always eat breakfast."],
            fb(
              "I always eat breakfast.",
              "With a main verb, the adverb goes before the verb.",
              "“Eat always breakfast” splits the verb from its object.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "She is usually happy.",
            ["She is usually happy."],
            fb(
              "She is usually happy.",
              "With be, the adverb follows the verb — and happy closes the sentence.",
              "Before be, the adverb would sit in the wrong home.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "You want to ask about frequency. Which question is right?",
            [
              ["a", "How often you cook?"],
              ["b", "How often do you cook?"],
              ["c", "How often cook you?"],
            ],
            "b",
            fb(
              "How often do you cook?",
              "Main verbs need do for questions — How often do you …?",
              "Without do, the question has no engine for its verb.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "How often report",
      instructions:
        "Write five “How often …?” questions and answer them with frequency adverbs. Use both homes at least twice: before a main verb, and after be. Example: “How often is your brother late? — He is always late.”",
      minWords: 20,
      maxWords: 70,
    },
    homework: [
      "Track one habit today and report it with a frequency adverb at dinner.",
      "Ask two people “How often do you …?” and write their answers.",
      "Say the two homes out loud five times: “I always eat” — “I am always hungry”.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Describing Your World and Chapter Review
  // =========================================================================
  {
    slug: "ch-15-l-05",
    minutes: 30,
    description:
      "Put the whole toolkit together: rich descriptions that mix stacked adjectives, adverbs of manner and frequency adverbs — then edit your own work and take the Chapter 15 review.",
    outcomes: [
      "Write rich descriptions mixing adjectives and adverbs",
      "Self-edit adjective order and adverb position",
      "Explain the adjective/adverb choice with a reason",
      "Answer the Chapter 15 review questions",
    ],
    blocks: [
      LI(
        "You now have a full describing toolkit. Adjectives paint things. Adverbs paint actions. Frequency adverbs paint routines. In this lesson you mix all three, edit your own work, and take the Chapter 15 review.",
        [
          "You know be forms: am, is, are (Chapter 12 · Lesson 1).",
          "You know the present simple for routines (Chapter 13 · Lesson 1).",
          "You met every colour word and the numbers (Chapter 06).",
        ],
      ),
      vocGlossary("Describing words for your world", [
        { word: "quiet", partOfSpeech: "adjective", definition: "making little noise" },
        { word: "noisy", partOfSpeech: "adjective", definition: "making a lot of noise" },
        { word: "clean", partOfSpeech: "adjective", definition: "not dirty" },
        { word: "beautiful", partOfSpeech: "adjective", definition: "very nice to look at" },
        { word: "famous", partOfSpeech: "adjective", definition: "known by many people" },
        { word: "delicious", partOfSpeech: "adjective", definition: "very good to taste" },
        { word: "tired", partOfSpeech: "adjective", definition: "needing rest" },
        { word: "carefully", partOfSpeech: "adverb", definition: "with care and attention" },
        { word: "loudly", partOfSpeech: "adverb", definition: "with a lot of noise" },
        { word: "together", partOfSpeech: "adverb", definition: "with each other, at the same time" },
      ]),
      H("A description with everything"),
      T(
        "Here is the model. Read it once, slowly. I live on a quiet old street. The houses are small and beautiful. The bakery opens early and bakes slowly. People here are kind, and they always say hello. Children play happily in the park. I sometimes walk slowly to the shop, and I never take the car.",
      ),
      {
        type: "definition",
        term: "description",
        partOfSpeech: "genre",
        definition:
          "A description paints a picture with words. It mixes adjectives for things, adverbs for actions, and frequency adverbs for routines.",
        example: {
          english: "The children play happily in the quiet park.",
          translation: "happily paints the action; quiet paints the thing — one sentence, both tools.",
        },
      },
      TB(
        "Self-edit checklist",
        ["Check", "Ask yourself"],
        [
          ["Adjective order", "Did my stacks follow opinion → size → age → colour?"],
          ["Two homes", "Before the noun, or after be — did I pick the right home?"],
          ["Adverb position", "Frequency adverb before main verbs, after be?"],
          ["Adjective or adverb", "Am I describing a thing or an action? beautiful or beautifully?"],
          ["No -s on adjectives", "Did any adjective take an -s by mistake?"],
        ],
        "Edit with this list before you submit any description.",
      ),
      AU(
        "Listen: the model description",
        "I live on a quiet old street. The houses are small and beautiful. People here are kind, and they always say hello. Children play happily in the park. I sometimes walk slowly to the shop.",
        0.85,
      ),
      AU(
        "Listen: one day, two tools",
        "The morning is cold and quiet. My mother cooks carefully. The bread smells delicious. We eat slowly together. The street is busy in the afternoon, and the birds sing loudly.",
        0.9,
      ),
      ST(
        "Build a rich description in three steps",
        [
          {
            title: "Step 1 — Paint the things",
            text: "Start with the nouns: street, houses, food. Give each one an adjective in the right home.",
            examples: [
              { english: "I live on a quiet old street.", note: "A stack before the noun paints the place." },
              { english: "The houses are small and beautiful.", note: "After be, the last two join with and." },
            ],
          },
          {
            title: "Step 2 — Paint the actions",
            text: "Now describe what happens there. Adverbs of manner follow the verb or object.",
            examples: [
              { english: "Children play happily in the park.", note: "happily paints the playing." },
              { english: "The bakery bakes bread slowly.", note: "The adverb follows the object bread." },
            ],
          },
          {
            title: "Step 3 — Add the routines",
            text: "Finish with frequency adverbs in their two homes. Now the place feels alive.",
            examples: [
              { english: "People here always say hello.", note: "always before the main verb." },
              { english: "The street is never noisy at night.", note: "never after be." },
            ],
          },
        ],
      ),
      GR(
        "One sentence, both tools",
        "A rich sentence can carry an adjective and an adverb at once. The adjective paints a thing; the adverb paints an action. Choose with one question: thing or action?",
        [
          { english: "The busy street is noisy, and people walk quickly.", translation: "busy and noisy paint things; quickly paints the walking." },
          { english: "My kind grandmother cooks delicious food carefully.", translation: "Stack before food; adverb after the object." },
          { english: "The famous old bakery always smells delicious.", translation: "A stack before the noun; always before the main verb smells; delicious after it." },
          { english: "We are usually tired in the evening, but we never complain.", translation: "After be first, then before a main verb." },
        ],
        [
          "Never mix the tools: “The children play happy” is wrong — the playing is an action, so it takes happily.",
        ],
      ),
      EXD(
        "Rich descriptions in real life",
        [
          { english: "My street is quiet and old. The neighbours are kind.", note: "Two homes in two short sentences.", domain: "home" },
          { english: "The famous old baker works hard and sings loudly.", note: "A stack, then two adverbs after one verb.", domain: "work" },
          { english: "My grandmother makes delicious hot soup, and we eat slowly together.", note: "Stack before soup; two adverbs close the sentence.", domain: "food" },
          { english: "The children play happily in the quiet green park.", note: "An adverb for the action, a stack for the place.", domain: "sport" },
          { english: "Our teacher speaks slowly and clearly, and she is never angry.", note: "Two manner adverbs, then a frequency adverb after be.", domain: "education" },
          { english: "The fast new train is usually full, so I sometimes walk.", note: "A stack, then two frequency adverbs in two homes.", domain: "travel" },
          { english: "The tall young doctor listens carefully and explains slowly.", note: "Stack before doctor; two adverbs after two verbs.", domain: "health" },
          { english: "In the mountains the mornings are cold, and the birds sing loudly.", note: "Nature descriptions use be and manner adverbs.", domain: "nature" },
          { english: "My funny friend always laughs loudly, but he never shouts.", note: "Character after be; habits before main verbs.", domain: "social" },
        ],
        "Nine sentences — each one mixes at least two tools from this chapter.",
      ),
      US(
        [
          {
            situation: "Describing your neighbourhood to a visitor",
            example: "“It is a quiet old street. People always say hello here.”",
            note: "Place + routine: the visitor picture in two sentences.",
          },
          {
            situation: "Recommending a restaurant",
            example: "“The food is delicious, the place is clean, and the staff work hard.”",
            note: "Three tools in one recommendation.",
          },
          {
            situation: "Describing your school to a new student",
            example: "“The teachers explain slowly, and the students usually help you.”",
            note: "Adverbs sell the atmosphere.",
          },
          {
            situation: "A review of a phone or a shop",
            example: "“It is a cheap small phone, but it works well.”",
            note: "A stack, then a well — the internet review formula.",
          },
          {
            situation: "Introducing your family to a friend",
            example: "“My father is busy but kind. He always helps us.”",
            note: "Character first, then the habit that proves it.",
          },
        ],
        "Describing your world",
        "Rich descriptions make people see what you see.",
      ),
      DL(
        "My street, your street",
        "Ali describes his street to Hana, who is visiting tomorrow.",
        [
          ["Hana", "Tell me about your street, Ali. I am coming tomorrow."],
          ["Ali", "It is a quiet old street near the market."],
          ["Hana", "Is it noisy in the morning?"],
          ["Ali", "Sometimes. The baker starts early, and he works loudly."],
          ["Hana", "And the people?"],
          ["Ali", "They are kind. They always say hello, and they never shout."],
          ["Hana", "The children? Are they noisy?"],
          ["Ali", "They play happily in the park — but they are usually quiet at night."],
          ["Hana", "Perfect. I usually sleep badly in new places. Your street sounds good for me."],
        ],
      ),
      CMP(
        "Adjective or adverb?",
        ["Adjective — describes a thing", "Adverb — describes an action"],
        [
          ["Answers the question", "What is it like?", "How does it happen?"],
          ["Where it sits", "Before the noun, or after be", "After the verb, or after the object"],
          ["Examples", "a quiet street / The street is quiet", "She sings beautifully / He works hard"],
          ["How to make one", "No change needed", "Often adjective + ly — but good → well, fast → fast"],
          ["Classic mistake", "“She sings beautiful.”", "The singing is an action — it takes beautifully."],
        ],
        {
          intro: "The one question that sorts every describing word: thing or action?",
          verdict: "Describing a thing → adjective. Describing an action → adverb. Ask before you speak.",
        },
      ),
      MS(
        [
          [
            "My street is quiet old.",
            "My street is quiet and old.",
            "After be, join the last two adjectives with and. Stacks are for the home before the noun.",
          ],
          [
            "The children play happy.",
            "The children play happily.",
            "The playing is an action. Actions take the adverb — happily.",
          ],
          [
            "I am good at football and I play good.",
            "I am good at football and I play well.",
            "good fits after be (a thing you are); the action needs its adverb: well.",
          ],
          [
            "My grandmother cooks delicious.",
            "My grandmother cooks delicious food.",
            "delicious describes food, not the cooking. Either name the food, or say she cooks well.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "The one-question test",
        "Before every describing word, ask: thing or action? Thing → adjective, in one of its two homes. Action → adverb, after the verb or object. This one question fixes most of the mistakes in this chapter.",
      ),
      H("Chapter 15 review"),
      T(
        "Five lessons, one toolkit. Adjectives in two homes, the stacking ladder, adverbs of manner, and the frequency scale. Check yourself with the questions below, then take the final task.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "My aunt is a famous cook in a small old city. She works in a beautiful clean kitchen. She cooks carefully and quickly, and the food is always delicious. Her soup is famous. The customers usually wait happily, and they never complain. My aunt is usually tired in the evening, but she is never unhappy.",
          task: "Read the text two times. Then find one stack, one adverb of manner and one frequency adverb.",
        },
        writing: {
          task: "Write one paragraph about a person you admire and one about a place you love. Use five describing words in each — at least one stack, one adverb of manner and one frequency adverb.",
          guide: ["My ___ is a ___ ___ person.", "He / She works ___ .", "It is a ___ ___ place.", "People there usually ___ ."],
          model: "My grandfather is a kind old man. He walks slowly, and he always helps us. I love his quiet garden.",
        },
        listening: {
          script:
            "My street is quiet in the morning. The baker works loudly, but the bread smells delicious. Children sometimes play here, and they always play happily. I never walk fast on my street — I walk slowly and enjoy it.",
          task: "Listen and count the describing words: adjectives, adverbs and frequency adverbs together.",
        },
        speaking: {
          task: "Describe your world in six sentences: your street, one person, and one thing you do often. Use all three tools.",
          frames: ["My street is ___ and ___ .", "It is a ___ ___ place.", "He / She always ___ .", "I usually ___ ___ ."],
          checklist: [
            "I used a stack in ladder order.",
            "I used a manner adverb after a verb.",
            "I used a frequency adverb in the right home.",
          ],
        },
      }),
      LSP(
        [
          gls("Adjectives describe nouns; adverbs describe verbs."),
          gls("Adverbs of frequency go before the main verb."),
          gls("Frequency adverbs tell us how often."),
          gls("adjective"),
          gls("adverb"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Adjectives describe things, in two homes: before the noun, or after be.",
        "Stacked adjectives follow the ladder: opinion → size → age → colour → noun.",
        "Adverbs of manner describe actions, usually with -ly — but good → well, fast → fast, hard → hard.",
        "Frequency adverbs go before main verbs and after be: I always eat; she is never late.",
        "The one-question test: thing or action? Thing → adjective. Action → adverb.",
        "Edit every description with the self-edit checklist before you share it.",
      ]),
      RV(
        [
          {
            question: "Which question needs do?",
            options: ["How often are you tired?", "How often do you cook?", "How often is she late?"],
            correctIndex: 1,
            explanation: "Main verbs need do for questions; be makes its own — the rule from Chapter 14.",
            from: "Chapter 14 · Lesson 2",
          },
          {
            question: "Which sentence puts never after be?",
            options: ["They never are angry.", "They are never angry.", "They are angry never."],
            correctIndex: 1,
            explanation: "Frequency adverbs follow be — the placement you met with Chapter 13’s routines.",
            from: "Chapter 13 · Lesson 5",
          },
          {
            question: "The colour words go …",
            options: ["after the noun", "before the noun", "inside the noun"],
            correctIndex: 1,
            explanation: "Colours come before the noun — the rule from your first vocabulary chapter.",
            from: "Chapter 06 · Lesson 3",
          },
          {
            question: "Which be-form fits “The houses ___ small and beautiful.”?",
            options: ["is", "am", "are"],
            correctIndex: 2,
            explanation: "Houses is plural, so be becomes are — from your be chapter.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "In “He speaks English slowly”, what is English?",
            options: ["the subject", "the object", "a verb"],
            correctIndex: 1,
            explanation: "English receives the action — the object, from your sentence-structure chapter.",
            from: "Chapter 09 · Lesson 2",
          },
          {
            question: "Which word is an adjective in “a famous old bakery”?",
            options: ["famous", "bakery", "a"],
            correctIndex: 0,
            explanation: "famous describes the bakery — bakery is the noun and a is an article, from Chapter 07.",
            from: "Chapter 07 · Lesson 3",
          },
        ],
        {
          title: "Chapter 15 review — the describing toolkit",
          intro: "Six questions from the chapters that built this one.",
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
            "In “People walk slowly”, what does slowly describe?",
            [
              ["a", "the people (a thing)"],
              ["b", "the walking (an action)"],
              ["c", "the street (a place)"],
            ],
            "b",
            fbx(
              "the walking (an action)",
              "slowly follows the verb walk — it paints how the action happens.",
              "The people themselves would take an adjective: slow people.",
              "Adjectives describe nouns; adverbs describe verbs.",
            ),
            { skill: "grammar", hints: ["Is the word telling you what something is — or how something happens?"] },
          ),
          FB(
            "Complete the description.",
            "My street is ___ and old.",
            ["quiet"],
            fb(
              "quiet",
              "After be, the last two adjectives join with and — quiet paints the street.",
              "An adverb here would paint an action, and the street does not do anything.",
            ),
            { skill: "vocabulary", hints: ["It is the word for a street with no noise."] },
          ),
          MATCH(
            "Match each adjective to its adverb.",
            [
              ["good", "good"],
              ["slow", "slow"],
              ["quick", "quick"],
              ["careful", "careful"],
            ],
            [
              ["a1", "well"],
              ["a2", "slowly"],
              ["a3", "quickly"],
              ["a4", "carefully"],
            ],
            [
              ["good", "a1"],
              ["slow", "a2"],
              ["quick", "a3"],
              ["careful", "a4"],
            ],
            fb(
              "good → well, slow → slowly, quick → quickly, careful → carefully",
              "Three pairs take -ly; the first pair is the irregular you must memorise.",
            ),
            { skill: "vocabulary", hints: ["One pair does not follow the -ly pattern. Which one?"] },
          ),
          RD(
            "Read and answer.",
            "My quiet street",
            "I live on a quiet old street. The houses are small and clean. In the morning, the baker works loudly, but the street is usually quiet again by nine. Children play happily in the park after school. Their parents walk slowly, and they always smile.",
            "Which word describes how the children play?",
            [
              ["a", "happy"],
              ["b", "happily"],
              ["c", "the park"],
            ],
            "b",
            fb(
              "happily",
              "The playing is an action — the adverb happily follows the verb play.",
              "happy would describe the children, a thing — not the action.",
            ),
            { skill: "reading", hints: ["The word sits right after the action."] },
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
            "My street is quiet old.",
            ["My street is quiet and old."],
            fb(
              "My street is quiet and old.",
              "After be, the last two adjectives join with and.",
              "A stack without and belongs in the home before the noun.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "I sometimes walk slowly to the shop.",
            fb(
              "I sometimes walk slowly to the shop",
              "sometimes before the main verb; slowly after it; the place closes the sentence.",
              "Both adverbs keep their own homes in one sentence.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The birds sing loudly in the morning.",
            ["The birds sing loudly in the morning."],
            fb(
              "The birds sing loudly in the morning.",
              "The adverb follows the verb sing; the time phrase ends the sentence.",
              "The adjective form would describe the birds, not the singing.",
            ),
            { skill: "listening" },
          ),
          RD(
            "Read and answer.",
            "My aunt's kitchen",
            "My aunt is a famous cook. She works in a small clean kitchen. She cooks quickly and carefully, and the food is always delicious. The customers usually wait happily and talk quietly.",
            "What describes how she cooks?",
            [
              ["a", "quickly and carefully"],
              ["b", "quick and careful"],
              ["c", "the kitchen"],
            ],
            "a",
            fb(
              "quickly and carefully",
              "The cooking is an action — two adverbs follow the verb.",
              "quick and careful would describe things, like a quick cook or a careful kitchen.",
            ),
            { skill: "reading" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Person and place",
      instructions:
        "Write one paragraph about a person you admire and one about a place you love — four sentences each. Use at least five describing words in each paragraph, and label one adjective stack and one adverb in your text.",
      minWords: 45,
      maxWords: 130,
    },
    homework: [
      "Describe your street in five sentences. Use one stack, one manner adverb and one frequency adverb.",
      "Edit a friend's English message with the self-edit checklist. Tell them one fix you made.",
      "Choose your ten favourite describing words from the chapter. Use each one in a sentence today.",
    ],
  },
];
