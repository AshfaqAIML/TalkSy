/**
 * PROMPT 57 production — Batch 6, Chapter 16: Prepositions and There Is / There Are.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the "where and what exists" chapter, and every system is taught
 * AS a system, never as a bare list: PLACE with the box-model room map
 * (in = inside, on = touching, under = below…), TIME as the at → on → in
 * zoom (clock point → day → long period, with the "in the morning but on
 * Monday morning" edge), MOVEMENT as crossing a boundary (in vs into —
 * resting vs crossing). There is / there are is taught with the rule that
 * the NOUN decides the verb, and some/any as a positive vs negative/question
 * pair with the polite offer as the one exception. Prepositions are also
 * taught as sound: weak, unstressed little words that hide under the nouns
 * (at almost disappears, some becomes "s'm"). Every beginner mistake comes
 * with a reason: "in Monday" → "on Monday", "in the table" → "on the table",
 * "There is two parks" → "There are two parks", "not some money" → "any
 * money". No bare preposition lists, no "practise more" filler.
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

export const ch16Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Prepositions of Place
  // =========================================================================
  {
    slug: "ch-16-l-01",
    minutes: 25,
    description:
      "Eight small words that answer “where”: in, on, under, next to, between, behind, in front of and near — taught with one picture, the box model.",
    outcomes: [
      "Use all eight place words: in, on, under, next to, between, behind, in front of, near",
      "Say where things are: “The lamp is next to the bed.”",
      "Ask “Where is…?” and “Where are…?” and answer with place words",
      "Hear place words in fast speech — small, quick, unstressed",
    ],
    blocks: [
      LI(
        "Where is your phone? Where are your keys? This lesson gives you the words for where. You will learn eight place words: in, on, under, next to, between, behind, in front of and near. One picture — the box model — holds them all. At the end, you describe a whole room.",
        [
          "You know the home words: chair, table, door and window (Chapter 06 · Lesson 5).",
          "You can already say “The pen is in the bag.” and “on the table” (Chapter 06 · Lesson 5).",
          "You can use is and are with nouns (Chapter 12 · Lesson 1).",
        ],
      ),
      vocGlossary("The eight place words", [
        { word: "preposition", partOfSpeech: "noun", definition: "a small word before a noun: in, on, at, to" },
        { word: "in", partOfSpeech: "preposition", definition: "inside a thing or a place" },
        { word: "on", partOfSpeech: "preposition", definition: "touching the top or side of a thing" },
        { word: "under", partOfSpeech: "preposition", definition: "below a thing" },
        { word: "next to", partOfSpeech: "preposition", definition: "at the side of a thing" },
        { word: "between", partOfSpeech: "preposition", definition: "in the middle of two things" },
        { word: "behind", partOfSpeech: "preposition", definition: "at the back of a thing" },
        { word: "in front of", partOfSpeech: "preposition", definition: "before a thing, facing it" },
        { word: "near", partOfSpeech: "preposition", definition: "close to a thing or place" },
        { word: "park", partOfSpeech: "noun", definition: "a green place in a city, for play and walks" },
        { word: "shop", partOfSpeech: "noun", definition: "a place that sells things" },
      ]),
      H("The box model: one picture for eight words"),
      T(
        "Big words name things. Small words show where things are. Look at a ball and a box. The ball is in the box: the walls go around it. The box is on the table: it touches the surface. One picture — the box model — holds all eight place words. Learn the picture, and the words stick.",
      ),
      {
        type: "definition",
        term: "preposition",
        partOfSpeech: "noun",
        definition:
          "A preposition is a small word before a noun. It shows place, time or movement: in the bag, on Monday, into the shop.",
        example: {
          english: "The keys are in the bag.",
          translation: "in shows place: inside the bag.",
        },
      },
      TB(
        "Eight words, one room",
        ["Place word", "The picture", "Example"],
        [
          ["in", "inside a thing", "The keys are in the bag."],
          ["on", "touching a surface", "The book is on the table."],
          ["under", "below a thing", "The cat is under the chair."],
          ["next to", "at the side", "The lamp is next to the bed."],
          ["between", "in the middle of two", "The shop is between the bank and the café."],
          ["behind", "at the back", "The garden is behind the house."],
          ["in front of", "before it, facing it", "A car is in front of the school."],
          ["near", "close, not touching", "We live near the park."],
        ],
        "Close your eyes and see the room. Every word paints one part of the picture.",
      ),
      AU(
        "Listen: the eight place words",
        "in. on. under. next to. between. behind. in front of. near.",
        0.85,
      ),
      AU(
        "Listen: prepositions are small and fast",
        "The keys are in the bag. The book is on the table. The cat is under the chair. The lamp is next to the bed.",
        0.9,
      ),
      N(
        "The small words hide in speech",
        "Listen again to the second audio. The words in, on and under are quick and quiet. The big words — keys, bag, book, table — carry the beat. Prepositions never carry stress. Rush the small word, stress the noun, and your English sounds natural.",
      ),
      ST(
        "Say where a thing is in three steps",
        [
          {
            title: "Step 1 — Ask with Where",
            text: "Where asks about place. Ask about one thing with is, and about more things with are.",
            examples: [
              { english: "Where is the cat?", note: "One cat → is." },
              { english: "Where are my keys?", note: "Keys is plural → are." },
            ],
          },
          {
            title: "Step 2 — See the picture",
            text: "Before you speak, see the box model. Is the thing inside? Below? At the side? Choose the word that paints the true picture.",
            examples: [
              { english: "inside the bag → in", note: "Walls around it means inside." },
              { english: "below the chair → under", note: "Under is the word for below." },
            ],
          },
          {
            title: "Step 3 — Answer with the full pattern",
            text: "Answer with: the thing + is/are + place word + the + place. The place word sits before the noun it points to.",
            examples: [
              { english: "The cat is under the chair.", note: "thing + is + place word + the + place." },
              { english: "The shop is between the bank and the café.", note: "between always names two things." },
            ],
          },
        ],
      ),
      GR(
        "The place rule",
        "A place word comes after is or are and before the noun: The keys are in the bag. The place word paints one picture — choose the picture before you speak.",
        [
          { english: "The book is on the table.", translation: "on = touching the top of the table." },
          { english: "The cat is under the chair.", translation: "under = below the chair." },
          { english: "The shop is between the bank and the café.", translation: "between needs two things, one on each side." },
          { english: "We live near the park.", translation: "near = close, but not touching." },
        ],
        [
          "The word after the place word can change: in my bag, under this chair, next to your phone.",
        ],
      ),
      EXD(
        "Place words in real life",
        [
          { english: "The phone is on the table, next to my book.", note: "Two place words paint one clear picture.", domain: "home" },
          { english: "Your keys are in the bag — look inside.", note: "in = inside a thing with walls.", domain: "everyday" },
          { english: "The teacher stands in front of the class.", note: "in front of = before, facing the students.", domain: "education" },
          { english: "The shop is between the bank and the café.", note: "between always names two things.", domain: "shopping" },
          { english: "My grandmother sits near the window in the afternoon.", note: "near = close to the window, chair not touching it.", domain: "family" },
          { english: "The children play behind the house, in the garden.", note: "behind = at the back of the house.", domain: "home" },
          { english: "My charger is under my bed again!", note: "under = below — the classic lost-object place.", domain: "technology" },
          { english: "The bus stop is in front of the school gate.", note: "Travel talk is full of place words.", domain: "travel" },
          { english: "The ball is in front of the goal.", note: "Sport positions use place words too.", domain: "sport" },
          { english: "We have a small park near our street.", note: "near works for big places too.", domain: "nature" },
        ],
        "Ten sentences from ten parts of life — all built with eight small words.",
      ),
      US(
        [
          {
            situation: "Looking for your keys",
            example: "“Where are my keys?” — “They are in your bag.”",
            note: "The number one use of place words: finding lost things.",
          },
          {
            situation: "Tidying your room",
            example: "“Put the book on the table, please.”",
            note: "Commands + place words run a tidy home.",
          },
          {
            situation: "Telling a friend about your room",
            example: "“My bed is next to the window.”",
            note: "Paint your room with words.",
          },
          {
            situation: "Finding a shop in the street",
            example: "“The shop is between the bank and the café.”",
            note: "Street directions use place words, not long explanations.",
          },
          {
            situation: "A video call: show your room",
            example: "“The cat? Look — she is under the chair.”",
            note: "Place words point the camera for you.",
          },
        ],
        "Where things are, in daily life",
        "Every room, every street, every desk — place words describe them all.",
      ),
      DL(
        "Where is my phone?",
        "Amina cannot find her phone. She asks her brother Bilal.",
        [
          ["Amina", "Bilal! Where is my phone?"],
          ["Bilal", "Is it on the table?"],
          ["Amina", "No, it isn’t on the table."],
          ["Bilal", "Look under your bag."],
          ["Amina", "No. Not under the bag."],
          ["Bilal", "Hmm. Look next to the television."],
          ["Amina", "Yes! It is next to the television. Thank you!"],
          ["Bilal", "Your phone is always lost, sister!"],
        ],
      ),
      CMP(
        "in vs on: inside or on top",
        ["in = inside", "on = touching a surface"],
        [
          ["The picture", "Walls or a border go around the thing", "The thing rests on a surface"],
          ["The test", "Close it and the thing stays inside: in the bag, in the box", "It touches the top: on the table, on the wall, on the floor"],
          ["Examples", "The keys are in the bag. The milk is in the cup.", "The book is on the table. The picture is on the wall."],
          ["Watch out", "“The book is in the table” — a table has no inside", "“On the bag” means on top of the closed bag — usually not your meaning"],
        ],
        {
          intro: "The number one place-word confusion: inside a thing or on its surface.",
          verdict: "Ask one question: are there walls around it? in. Is there only a surface under it? on.",
        },
      ),
      MS(
        [
          [
            "The book is in the table.",
            "The book is on the table.",
            "A table is a surface, and surfaces take on. in needs a thing with walls, like a bag or a box.",
          ],
          [
            "The lamp is next the bed.",
            "The lamp is next to the bed.",
            "next keeps its to: next to the bed, next to the door. Never drop the to.",
          ],
          [
            "The shop is between the bank.",
            "The shop is next to the bank.",
            "between needs two things: between the bank and the café. With one thing, use next to.",
          ],
          [
            "The garden is behind of the house.",
            "The garden is behind the house.",
            "behind takes no of. Only in front of keeps its of.",
          ],
          [
            "I sit on the car.",
            "I sit in the car.",
            "You sit inside a car, so English says in the car. Big buses and trains take on — copy those phrases whole.",
          ],
        ],
        "Common beginner mistakes",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "This is my room. The bed is next to the window. My books are on the table, under the lamp. My bag is on the chair. My shoes are under the bed. The door is in front of the bed. My cat sleeps behind the door. I love my small room.",
          task: "Read the text two times. Then draw the room on paper — where is the cat?",
        },
        writing: {
          task: "Write four sentences about things in your room. Use four different place words.",
          guide: [
            "My ______ is on the ______.",
            "My ______ is under the ______.",
            "The ______ is next to the ______.",
            "My ______ is behind the ______.",
          ],
          model:
            "My bed is next to the window. My books are on the table. My shoes are under the bed. My bag is behind the door.",
        },
        listening: {
          script:
            "Where is my phone? Is it on the table? No. Is it under the chair? No. Look — it is in the bag, next to your keys!",
          task: "Listen. Where is the phone at the end?",
        },
        speaking: {
          task: "Choose three things near you now. Say where each one is.",
          frames: [
            "The ______ is on the ______.",
            "My ______ is next to the ______.",
            "The ______ is under the ______.",
          ],
          checklist: [
            "I described three things.",
            "I used three different place words.",
            "I said is or are correctly.",
          ],
        },
      }),
      LSP(
        [
          gls("Prepositions show place, time and movement."),
          gls("preposition"),
          gls("in"),
          gls("on"),
          gls("under"),
          gls("next to"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Eight place words: in, on, under, next to, between, behind, in front of, near.",
        "The box model: in = inside, on = touching, under = below, next to = at the side.",
        "The place word comes after is or are: The keys are in the bag.",
        "between needs two things. next to keeps its to. in front of keeps its of.",
        "In speech, place words are small and fast — the noun carries the beat.",
      ]),
      RV(
        [
          {
            question: "Where is the pen? — It is ___ the bag.",
            options: ["in", "at", "of"],
            correctIndex: 0,
            explanation: "Inside the bag takes the inside word — your first place words came with your first objects.",
            from: "Chapter 06 · Lesson 5",
          },
          {
            question: "He, she and it take…",
            options: ["am", "is", "are"],
            correctIndex: 1,
            explanation: "One person or thing takes is — the be rule from the verb chapter.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Where does an adjective go?",
            options: ["after the noun", "before the noun", "at the end"],
            correctIndex: 1,
            explanation: "Adjectives go before nouns: a small park, an old house.",
            from: "Chapter 15 · Lesson 1",
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
            "The ball is ___ the box — inside it, with the box walls around it.",
            [
              ["a", "on"],
              ["b", "in"],
              ["c", "at"],
            ],
            "b",
            fbx(
              "in",
              "Inside a thing with walls around it takes the inside word.",
              "The surface word means touching the top, and the time point word does not show place pictures.",
              { english: "The keys are in the bag.", translation: "Walls around it → the inside word." },
            ),
            { skill: "grammar", hints: ["Think of the box model: the walls go around the ball."] },
          ),
          FB(
            "Complete the sentence.",
            "The lamp is ___ to the bed.",
            ["next"],
            fb(
              "next",
              "The lamp stands at the side of the bed. The pair is next to.",
              "The word to belongs to next — never drop it.",
            ),
            { skill: "grammar", hints: ["Two things stand side by side. The word starts with n."] },
          ),
          MATCH(
            "Match each place word to its picture.",
            [
              ["in", "in"],
              ["on", "on"],
              ["under", "under"],
              ["between", "between"],
            ],
            [
              ["p1", "inside a thing"],
              ["p2", "touching the top of a thing"],
              ["p3", "below a thing"],
              ["p4", "in the middle of two things"],
            ],
            [
              ["in", "p1"],
              ["on", "p2"],
              ["under", "p3"],
              ["between", "p4"],
            ],
            fb(
              "in → inside, on → touching the top, under → below, between → in the middle of two",
              "Each place word paints one picture from the box model.",
              "If the picture is wrong, the sentence paints the wrong room.",
            ),
            { skill: "vocabulary", hints: ["Close your eyes and see the box model for each word."] },
          ),
          LIS(
            "Listen and answer.",
            "The cat is under the chair.",
            "Where is the cat?",
            ["under the chair", "Under the chair."],
            fb(
              "Under the chair",
              "You heard the place word for below — the cat sits below the chair.",
              "Below is the meaning; under is the English word that carries it.",
            ),
            { skill: "listening", hints: ["The cat is below something. Listen for the place word."] },
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
            "The shop is next to the bank.",
            fb(
              "The shop is next to the bank",
              "The order is: thing + is + place word + the + place.",
              "The place word always comes before the noun it points to.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "The book is in the table.",
            ["The book is on the table."],
            fb(
              "The book is on the table.",
              "A table is a surface, and surfaces take on.",
              "The inside word needs a thing with walls, like a bag or a box.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The keys are in the bag.",
            ["The keys are in the bag."],
            fb(
              "The keys are in the bag.",
              "A bag has an inside, so the keys go with the inside word.",
              "On the bag would mean on top of the closed bag.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "The shop is ___ the bank and the café — one shop, one on each side.",
            [
              ["a", "between"],
              ["b", "behind"],
              ["c", "near"],
            ],
            "a",
            fb(
              "between",
              "Two things, one on each side — that picture takes between.",
              "behind means at the back; near means close but not in the middle.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My room map",
      instructions:
        "Draw a simple map of your room. Then write six sentences about it. Use six different place words. Example: “My bed is next to the window. My shoes are under the bed.”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Play the where-is game: ask a family member “Where is my phone?” three times today — in English.",
      "Describe your kitchen in four sentences with four place words.",
      "Close your eyes and see your bedroom. Say five place sentences out loud — with your eyes closed.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Prepositions of Time
  // =========================================================================
  {
    slug: "ch-16-l-02",
    minutes: 20,
    description:
      "Three little words, one system: at for points, on for days, in for periods — the zoom rule, plus the two edge cases every beginner meets.",
    outcomes: [
      "Choose at, on and in for clock times, days, dates, months and years",
      "Talk about your week: “I play football on Saturday.”",
      "Handle the two edge cases: at night and on Monday morning",
      "Hear the weak “at” in fast speech",
    ],
    blocks: [
      LI(
        "English has three small words for time: at, on and in. They look tiny, but they carry a system. In this lesson you learn the zoom rule: at for a point, on for a day, in for a period. You will talk about your week, your months and your plans.",
        [
          "You know the days of the week and the parts of the day from your routines (Chapter 13 · Lesson 1).",
          "You know the numbers 1 to 20 for clock times (Chapter 06 · Lesson 4).",
          "You can use the present simple for habits: “I get up early.” (Chapter 13 · Lesson 3).",
        ],
      ),
      vocGlossary("Time words for this lesson", [
        { word: "day", partOfSpeech: "noun", definition: "twenty-four hours, from one morning to the next" },
        { word: "week", partOfSpeech: "noun", definition: "seven days, Monday to Sunday" },
        { word: "month", partOfSpeech: "noun", definition: "one of the twelve parts of a year" },
        { word: "year", partOfSpeech: "noun", definition: "twelve months together" },
        { word: "morning", partOfSpeech: "noun", definition: "the early part of the day" },
        { word: "afternoon", partOfSpeech: "noun", definition: "the part of the day after noon" },
        { word: "evening", partOfSpeech: "noun", definition: "the end of the day, before night" },
        { word: "night", partOfSpeech: "noun", definition: "the dark hours when you sleep" },
        { word: "weekend", partOfSpeech: "noun", definition: "Saturday and Sunday together" },
        { word: "Monday", partOfSpeech: "noun", definition: "the first day of the working week" },
        { word: "Saturday", partOfSpeech: "noun", definition: "the first day of the weekend" },
      ]),
      H("Three small words, one zoom system"),
      T(
        "Think of a camera. It starts very close: one point on a clock. Then it pulls back: one whole day. Then it pulls far back: a month, a season, a year. English marks each zoom step with a word. At for the point, on for the day, in for the long period. The time gets bigger — at, on, in.",
      ),
      {
        type: "definition",
        term: "weekend",
        partOfSpeech: "noun",
        definition:
          "The weekend is Saturday and Sunday together — the two days at the end of the week.",
        example: {
          english: "We rest on the weekend.",
          translation: "Days take on — and weekend days are days.",
        },
      },
      TB(
        "The zoom table",
        ["Little word", "Time type", "Examples"],
        [
          ["at", "clock times and points", "at six o’clock, at noon, at night"],
          ["on", "days and dates", "on Monday, on 5 May, on my birthday"],
          ["in", "long periods", "in July, in summer, in 2030, in the morning"],
        ],
        "Zoom out like a camera: a point → a day → a month.",
      ),
      GR(
        "The zoom rule for time",
        "at + a point (at six o’clock, at night). on + a day or a date (on Monday, on 5 May). in + a long period (in July, in summer, in 2030, in the morning).",
        [
          { english: "The class starts at nine.", translation: "A clock number is a point → at." },
          { english: "I work on Saturdays.", translation: "Days of the week → on." },
          { english: "We travel in August.", translation: "Months are long periods → in." },
          { english: "I read in the evening.", translation: "Parts of the day are periods → in." },
        ],
        [
          "Night is special: at night — but in the morning, in the afternoon, in the evening.",
          "A day + a part of a day takes on: on Monday morning, on Friday evening.",
        ],
      ),
      AU(
        "Listen: the time words",
        "at six o’clock. on Monday. in July. in the morning. at night. on Friday evening. in summer.",
        0.85,
      ),
      AU(
        "Listen: at almost disappears",
        "The class starts at nine. The shop opens at eight. The bus comes at seven. The film begins at ten.",
        0.9,
      ),
      N(
        "The weakest word in English",
        "In fast speech, at becomes very small: /ət/. “The class starts at nine” sounds like “the class starts ət nine”. Do not worry — the clock number tells you the little word is there. Say it small: at nine, at eight, at ten.",
      ),
      ST(
        "Choose at, on or in for a time in three steps",
        [
          {
            title: "Step 1 — Look at the time words",
            text: "Read the time in the sentence. Is it a clock number, a day, or a longer period?",
            examples: [
              { english: "nine o’clock", note: "A clock number — a point." },
              { english: "Monday", note: "A day of the week." },
              { english: "July", note: "A month — a long period." },
            ],
          },
          {
            title: "Step 2 — Zoom",
            text: "Point → at. Day → on. Long period → in. The bigger the time, the later the word in at-on-in.",
            examples: [
              { english: "at nine o’clock", note: "The smallest time takes the first word." },
              { english: "on Monday", note: "A day takes the middle word." },
              { english: "in July", note: "A month takes the last word." },
            ],
          },
          {
            title: "Step 3 — Check the two edges",
            text: "Night takes the point word: at night. And when a day meets a part of a day, the day wins: on Monday morning.",
            examples: [
              { english: "We sleep at night.", note: "Night is the special one." },
              { english: "I run on Saturday morning.", note: "The day Saturday wins over the morning." },
            ],
          },
        ],
      ),
      EXD(
        "at, on and in with real times",
        [
          { english: "The class starts at nine o’clock.", note: "A clock number is a point → at.", domain: "education" },
          { english: "We play football on Saturday.", note: "A day of the week → on.", domain: "sport" },
          { english: "My birthday is in March.", note: "A month is a long period → in.", domain: "family" },
          { english: "The shop opens at eight and closes at nine.", note: "Two clock times in one sentence — both points.", domain: "shopping" },
          { english: "My father goes to work on Monday morning.", note: "Day + part of day → the day wins.", domain: "work" },
          { english: "We visit our grandmother in August.", note: "A summer month → in.", domain: "travel" },
          { english: "I do my homework in the evening.", note: "Part of the day → in. But night takes the point word.", domain: "home" },
          { english: "The market is busy on Sunday.", note: "Weekend days take on like every day.", domain: "everyday" },
          { english: "We eat dinner at eight and sleep at ten.", note: "Your body clock runs on points.", domain: "health" },
        ],
        "Nine sentences — your whole week, carried by three little words.",
      ),
      US(
        [
          {
            situation: "Reading a school timetable",
            example: "“Maths is at nine on Monday.”",
            note: "Timetables mix points and days in one line.",
          },
          {
            situation: "Planning a picnic",
            example: "“Let us meet on Saturday at ten.”",
            note: "Say the day first, then the clock point.",
          },
          {
            situation: "A party invitation",
            example: "“The party is on Friday, in the evening.”",
            note: "Invitations always carry at, on or in.",
          },
          {
            situation: "Asking about shop hours",
            example: "“When does the shop open?” — “At eight.”",
            note: "Questions with when often answer with a point.",
          },
          {
            situation: "Talking about your year",
            example: "“We travel in summer, in August.”",
            note: "Long periods stack: a season and a month.",
          },
        ],
        "Times in daily life",
        "Schedules, invitations and plans all run on the zoom rule.",
      ),
      DL(
        "Plans for the weekend",
        "Sara and Omar make plans after class.",
        [
          ["Sara", "The school party is on Friday."],
          ["Omar", "What time? At four?"],
          ["Sara", "At five o’clock, in the evening."],
          ["Omar", "Good. I play football in the morning."],
          ["Sara", "Then come to my house at four."],
          ["Omar", "Is your house near the school?"],
          ["Sara", "Yes. And in August we visit our grandmother."],
          ["Omar", "In August? Her city is beautiful!"],
        ],
      ),
      CMP(
        "One habit vs the English zoom",
        ["The easy habit: one word everywhere", "The English system: at → on → in"],
        [
          ["Clock time", "“in six o’clock” — wrong", "“at six o’clock” — a point takes the first word"],
          ["Day", "“in Monday” — wrong", "“on Monday” — a day takes the middle word"],
          ["Month, season, year", "“in July” — right!", "“in July” — a long period takes the last word"],
          [
            "Why the habit exists",
            `Urdu and Hindi use ${gls("in").ur} / ${gls("in").hi} for many of these times`,
            "English zooms out: point → day → period — three words, not one",
          ],
        ],
        {
          intro: "Your language uses one small word for most times. English uses three — and the zoom rule chooses.",
          verdict: "Before you speak, zoom: a clock number? The first word. A day? The middle word. A month, a season, a year? The last word.",
        },
      ),
      MS(
        [
          [
            "I go to school in Monday.",
            "I go to school on Monday.",
            "Days take the middle word: on Monday, on Friday. A day is bigger than a point and smaller than a month.",
          ],
          [
            "The class is on nine o’clock.",
            "The class is at nine o’clock.",
            "Clock times are points, and points take the first word.",
          ],
          [
            "My birthday is on July.",
            "My birthday is in July.",
            "Months are long periods, so they take the last word: in July, in December.",
          ],
          [
            "We sleep in the night.",
            "We sleep at night.",
            "Night is the special one: at night. The other parts of the day take the period word.",
          ],
          [
            "I read on the evening.",
            "I read in the evening.",
            "The evening is a part of the day, and parts take the period word. Only full days take the middle word.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "The one pair everyone forgets",
        "Parts of the day take the period word: in the morning, in the afternoon, in the evening. But night takes the point word: at night. And when a day meets a part of a day, the day wins: on Monday morning, on Friday evening. Two edges, one habit — check night, then check the day.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Ali has a busy week. He gets up at six o’clock every day. On Monday he plays football after school. On Wednesday he visits his grandmother. The school year ends in June. In July his family travels to the sea.",
          task: "Read the text two times. Then find one clock point, two days and one month.",
        },
        writing: {
          task: "Write four true sentences about your week: one with a clock point, one with a day, one with a long period, and one free choice.",
          guide: [
            "I get up at ______.",
            "On ______ I ______.",
            "In ______ we ______.",
            "My favourite day is ______.",
          ],
          model:
            "I get up at seven. On Friday I play football. In August we visit the city. My favourite day is Sunday.",
        },
        listening: {
          script:
            "The party is on Saturday. It starts at five o’clock, in the evening. In summer the evenings are long. Come early — the food goes fast!",
          task: "Listen. When does the party start?",
        },
        speaking: {
          task: "Say your week: three sentences with three different time words.",
          frames: [
            "I ______ at ______.",
            "On ______ I ______.",
            "In ______ I ______.",
          ],
          checklist: [
            "I used a clock point, a day and a long period.",
            "My sentences are true.",
            "I did not read my notes.",
          ],
        },
      }),
      LSP(
        [
          gls("We say in July, on Monday, at six o'clock."),
          gls("morning"),
          gls("night"),
          gls("Monday"),
          gls("weekend"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "at + a point: at six o’clock, at noon, at night.",
        "on + a day or a date: on Monday, on 5 May, on my birthday.",
        "in + a long period: in July, in summer, in 2030, in the morning.",
        "The zoom rule: the time gets bigger — at, on, in.",
        "Two edges: at night (not in the night) and on Monday morning (the day wins).",
      ]),
      RV(
        [
          {
            question: "The present simple talks about…",
            options: ["habits and routines", "only yesterday", "colours"],
            correctIndex: 0,
            explanation: "The present simple describes what you do again and again — the tense of routines.",
            from: "Chapter 13 · Lesson 1",
          },
          {
            question: "Which question word asks about time?",
            options: ["where", "when", "who"],
            correctIndex: 1,
            explanation: "when asks about time — where asks about place, who about people.",
            from: "Chapter 14 · Lesson 2",
          },
          {
            question: "Saturday and Sunday together are the…",
            options: ["weekend", "month", "morning"],
            correctIndex: 0,
            explanation: "The weekend is Saturday and Sunday — the rest at the end of the week.",
            from: "Chapter 13 · Lesson 1",
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
            "Complete the sentence.",
            "The film starts ___ eight o’clock.",
            ["at"],
            fbx(
              "at",
              "A clock time is a point, and points take the smallest zoom word.",
              "Days take the middle word and months take the last word — clock numbers are smaller.",
              { english: "The bus comes at seven.", translation: "A clock point → the first zoom word." },
            ),
            { skill: "grammar", hints: ["Think of the camera zoom: a point on the clock face is the smallest time."] },
          ),
          MCQ(
            "We visit our grandmother ___ Sunday.",
            [
              ["a", "in"],
              ["b", "on"],
              ["c", "at"],
            ],
            "b",
            fb(
              "on",
              "Days of the week take the middle zoom word.",
              "The last word belongs to long periods like July; the first word belongs to clock points.",
            ),
            { skill: "grammar", hints: ["A day is bigger than a clock time and smaller than a month."] },
          ),
          MATCH(
            "Match each time to its little word.",
            [
              ["t1", "six o’clock"],
              ["t2", "Monday"],
              ["t3", "July"],
              ["t4", "the morning"],
            ],
            [
              ["r1", "at six o’clock"],
              ["r2", "on Monday"],
              ["r3", "in July"],
              ["r4", "in the morning"],
            ],
            [
              ["t1", "r1"],
              ["t2", "r2"],
              ["t3", "r3"],
              ["t4", "r4"],
            ],
            fb(
              "six o’clock → at, Monday → on, July → in, the morning → in",
              "Clock points take the first word; days take the middle word; months and parts of the day take the last word.",
              "Zoom before you choose: point → day → period.",
            ),
            { skill: "grammar", hints: ["Zoom the camera: point, then day, then long period."] },
          ),
          LIS(
            "Listen and answer.",
            "The class is at nine on Monday.",
            "When is the class?",
            ["at nine on Monday", "At nine on Monday."],
            fb(
              "At nine on Monday",
              "You heard a clock point and a day — each with its own little word.",
              "The clock number takes the first word; the day takes the middle word.",
            ),
            { skill: "listening", hints: ["Listen for two times: a clock number and a day."] },
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
            "My birthday is in March.",
            fb(
              "My birthday is in March",
              "The order is: time idea + is + little word + month.",
              "Months are long periods — they take the last zoom word.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "We go to the park in Sunday.",
            ["We go to the park on Sunday."],
            fb(
              "We go to the park on Sunday.",
              "Days take the middle word — Sunday, Monday, every day of the week.",
              "The long-period word belongs to months and years like July and 2030.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The shop opens at eight.",
            ["The shop opens at eight."],
            fb(
              "The shop opens at eight.",
              "Eight is a clock point, and points take the first zoom word.",
              "Days would take the middle word — but this is a clock time.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "We sleep ___.",
            [
              ["a", "in the night"],
              ["b", "at night"],
              ["c", "on night"],
            ],
            "b",
            fb(
              "at night",
              "Night is the special one — it takes the point word even though it is a part of the day.",
              "The other parts of the day take the period word — but night is different.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My week in time",
      instructions:
        "Write six true sentences about your week. Use the point word twice, the day word twice and the period word twice. Example: “I get up at six. We visit my grandmother on Sunday. My birthday is in April.”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Say five true time sentences about tomorrow: clock times, days and months.",
      "Check every sentence with the zoom rule: point → day → period.",
      "Write your family’s birthdays: name + month. “My mother’s birthday is in June.”",
    ],
  },

  // =========================================================================
  // Lesson 3 — Movement Prepositions
  // =========================================================================
  {
    slug: "ch-16-l-03",
    minutes: 20,
    description:
      "Words that move: to, into, out of, across and through — crossing doors, rivers and tunnels, and the difference between resting in and moving into.",
    outcomes: [
      "Use to, into, out of, across and through for movement",
      "Describe a short journey from your door to a place you know",
      "Choose in or into correctly: position or movement",
      "Remember the home rule: go home, not go to home",
    ],
    blocks: [
      LI(
        "Where do you go? Where do you come from? Movement words answer these questions. You already know the action verbs go, walk and run. Now you add the words that show the path: to, into, out of, across and through. At the end, you describe your whole walk to school.",
        [
          "You know the action words go, come, walk and run (Chapter 06 · Lesson 6).",
          "You know that in means inside a thing (Lesson 1).",
          "You can use the present simple: “She goes to work.” (Chapter 13 · Lesson 2).",
        ],
      ),
      vocGlossary("Movement words", [
        { word: "into", partOfSpeech: "preposition", definition: "from outside to inside — crossing in" },
        { word: "out of", partOfSpeech: "preposition", definition: "from inside to outside — crossing out" },
        { word: "across", partOfSpeech: "preposition", definition: "from one side to the other side" },
        { word: "through", partOfSpeech: "preposition", definition: "in one side and out the other side" },
        { word: "to go", partOfSpeech: "verb", definition: "move away to a place" },
        { word: "to come", partOfSpeech: "verb", definition: "move to the person who speaks" },
      ]),
      H("The door test: resting or crossing?"),
      T(
        "Look at a door. A cat sleeps behind the door — that is position. The same cat runs through the door — that is movement. The verb tells the story. Resting verbs — is, are — take position words. Action verbs — go, walk, run — take movement words. This is the door test.",
      ),
      TB(
        "Five movement words and one bonus",
        ["Movement word", "The path", "Example"],
        [
          ["to", "towards a place — the journey’s end", "I go to school by bus."],
          ["into", "outside → inside", "She walks into the shop."],
          ["out of", "inside → outside", "He takes the pen out of the box."],
          ["across", "one side → the other side", "They walk across the bridge."],
          ["through", "in one side, out the other", "The train goes through the tunnel."],
          ["along", "following a line", "Walk along this street."],
        ],
        "Every movement word crosses something: a door, a river, a tunnel, a street.",
      ),
      GR(
        "The movement rule",
        "A movement word follows an action verb: go, walk, run, come, take. A position word follows is or are. The verb decides which team you use.",
        [
          { english: "She walks into the shop.", translation: "walks is an action — the crossing word fits." },
          { english: "She is in the shop.", translation: "is is a resting verb — the position word fits." },
          { english: "I go to school every day.", translation: "to points at the end of the journey." },
          { english: "He takes the pen out of the box.", translation: "The pen crosses from inside to outside." },
        ],
        [
          "Home drops the little word: go home, come home — never “go to home”.",
        ],
      ),
      AU(
        "Listen: the movement words",
        "to the station. into the house. out of the car. across the bridge. through the park.",
        0.85,
      ),
      AU(
        "Listen: my walk to school",
        "I walk out of my house. I go along the street. I walk across the park. I come into the school at eight.",
        0.9,
      ),
      N(
        "Movement words are light too",
        "Listen again. The movement words into and out of never carry the beat. The strong words are the verbs and the nouns: walk, house, park, school. Say it with rhythm: I walk OUT of my HOUSE. Rush the small word, stress the big ones.",
      ),
      ST(
        "Describe a journey in three steps",
        [
          {
            title: "Step 1 — Start: leave a place",
            text: "Begin where you begin. Say what you leave, with out of: I walk out of my house.",
            examples: [
              { english: "I walk out of my house.", note: "The day starts at your own door." },
            ],
          },
          {
            title: "Step 2 — Cross: name what you cross",
            text: "Now say what is between you and the end. Cross a street with across. Follow a street with along. Pass in one side and out the other with through.",
            examples: [
              { english: "I go across the street.", note: "From one side to the other." },
              { english: "The bus goes through the tunnel.", note: "In one side, out the other." },
            ],
          },
          {
            title: "Step 3 — Arrive: reach the end",
            text: "Finish with the arrival. Use to for a place in general, and into when you cross into a space.",
            examples: [
              { english: "I come into the school at eight.", note: "Crossing the gate — into." },
              { english: "We go to the park on Sunday.", note: "The park is the journey’s end — to." },
            ],
          },
        ],
      ),
      EXD(
        "Movement words in real life",
        [
          { english: "I go to school with my sister.", note: "to points at the journey’s end.", domain: "education" },
          { english: "She walks into the shop and buys some bread.", note: "The door is crossed — the crossing word marks it.", domain: "shopping" },
          { english: "Take the shoes out of the bag, please.", note: "From inside to outside — out of.", domain: "home" },
          { english: "The bus goes to the city at seven.", note: "A journey with an end and a clock point.", domain: "travel" },
          { english: "The river goes through our city.", note: "In one side of the city, out the other.", domain: "nature" },
          { english: "The milk goes into the cup.", note: "The milk crosses the cup’s edge — into.", domain: "food" },
          { english: "My father comes out of his office at six.", note: "Leaving a work place — out of.", domain: "work" },
          { english: "The dog runs across the street — be careful!", note: "From one side to the other — a street crossing.", domain: "everyday" },
          { english: "The ball goes through the window! Oh no.", note: "The classic broken-window story.", domain: "sport" },
        ],
        "Nine sentences — a whole day of crossings, from your door to the office.",
      ),
      US(
        [
          {
            situation: "The way to your house",
            example: "“Go along the street and then across the bridge.”",
            note: "Simple directions are movement words in a row.",
          },
          {
            situation: "The morning rush",
            example: "“I run out of the house at eight.”",
            note: "Out of the house starts a thousand mornings.",
          },
          {
            situation: "At the market",
            example: "“She walks into the shop. I wait near the door.”",
            note: "One person crosses, one stays — movement and position side by side.",
          },
          {
            situation: "Sports day",
            example: "“Run across the field, then through the gate!”",
            note: "PE teachers speak in movement words.",
          },
          {
            situation: "A bus journey",
            example: "“The bus goes through the tunnel and into the city.”",
            note: "Watch from the window and narrate — free speaking practice.",
          },
        ],
        "Movement in daily life",
        "Journeys, directions and crossings — movement words carry them all.",
      ),
      DL(
        "Which way to the park?",
        "A visitor asks Hina about the way.",
        [
          ["Visitor", "Hello! Is there a park near here?"],
          ["Hina", "Yes. Walk along this street."],
          ["Visitor", "Along the street. Then?"],
          ["Hina", "Then go across the bridge."],
          ["Visitor", "Across the bridge. And then?"],
          ["Hina", "Then you come into the park. It is beautiful in the morning."],
          ["Visitor", "Thank you! Is it far?"],
          ["Hina", "No, it is near. Five minutes!"],
        ],
      ),
      CMP(
        "in vs into: resting or crossing",
        ["in = position (no movement)", "into = movement (crossing a line)"],
        [
          ["Which verb", "is or are — a resting verb", "walk, go, run, come — an action verb"],
          ["The picture", "She is in the shop. (She is there now.)", "She walks into the shop. (She crosses the door.)"],
          ["After the crossing", "The crossing is finished: now she is in the shop.", "The crossing is happening: watch her cross the door"],
          ["Watch out", "“The pen is into the box” — impossible: is never moves", "“She walks in the shop” — for entering, say into"],
        ],
        {
          intro: "Same door, two ideas: standing inside it, or crossing it.",
          verdict: "Look at the verb. is → in. An action verb crossing a line → into.",
        },
      ),
      MS(
        [
          [
            "I go to home at four.",
            "I go home at four.",
            "Home drops the little word: go home, come home. Every other place keeps it: go to school.",
          ],
          [
            "She walks in the shop.",
            "She walks into the shop.",
            "The walk crosses the door — a crossing needs the crossing word. “In the shop” is a resting place, after the crossing.",
          ],
          [
            "The pen is into the box.",
            "The pen is in the box.",
            "is shows position, and position takes the resting word. No crossing, no crossing word.",
          ],
          [
            "He takes the book out the bag.",
            "He takes the book out of the bag.",
            "Out keeps its of before the noun: out of the bag, out of the kitchen.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Home has no to",
        "You go to school, to work, to the shop — but you go home. Home drops the little word: go home, come home, get home. “I go to home” is a classic mistake. Say the pair out loud three times: go home, come home, get home.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My journey to school is short. I walk out of my house and go along the street. Then I walk across the small park. Birds sing in the trees. At the end of the park, I go through the school gate and into the classroom. The walk takes ten minutes.",
          task: "Read the text two times. Then put the journey in order: park, street, gate, house.",
        },
        writing: {
          task: "Describe your walk from home to a place you know. Use three movement words.",
          guide: [
            "I walk out of ______.",
            "I go across ______.",
            "I come into ______ at ______.",
          ],
          model:
            "I walk out of my house. I go across the street. I come into the shop at nine.",
        },
        listening: {
          script:
            "Take the bag out of the car. Now walk to the door. Go into the house. Put the bag on the table. Thank you!",
          task: "Listen. Where does the bag go at the end?",
        },
        speaking: {
          task: "Describe your way to school or to a shop. Use three movement words.",
          frames: [
            "I go out of ______.",
            "I walk across ______.",
            "I come into ______.",
          ],
          checklist: [
            "I used three movement words.",
            "I said the place after every movement word.",
            "I spoke without stopping more than twice.",
          ],
        },
      }),
      LSP(
        [
          gls("Prepositions show place, time and movement."),
          gls("into"),
          gls("out of"),
          gls("across"),
          gls("through"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Movement words follow action verbs: go, walk, run, come, take.",
        "to points at the journey’s end. into crosses into a space. out of leaves a space.",
        "across crosses from side to side. through goes in one side and out the other. along follows a line.",
        "The door test: is → in (position). Action verb crossing a line → into (movement).",
        "Home drops the little word: go home, come home, get home.",
      ]),
      RV(
        [
          {
            question: "Which word is an action word?",
            options: ["run", "big", "table"],
            correctIndex: 0,
            explanation: "Run is an action — and movement words need action verbs.",
            from: "Chapter 06 · Lesson 6",
          },
          {
            question: "Choose the correct sentence.",
            options: ["She go to work.", "She goes to work.", "She going to work."],
            correctIndex: 1,
            explanation: "He, she and it add -s in the present simple.",
            from: "Chapter 13 · Lesson 2",
          },
          {
            question: "Where asks about…",
            options: ["place", "time", "people"],
            correctIndex: 0,
            explanation: "Where asks about place — the question your movement words answer.",
            from: "Chapter 14 · Lesson 2",
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
            "She walks ___ the shop. (She was outside; now she is inside.)",
            [
              ["a", "in"],
              ["b", "into"],
              ["c", "at"],
            ],
            "b",
            fbx(
              "into",
              "The walking crosses the door — movement from outside to inside takes the crossing word.",
              "The resting word describes where she is after the crossing, with no verb of motion.",
              { english: "He comes into the kitchen.", translation: "The verb comes crosses the door — the crossing word follows." },
            ),
            { skill: "grammar", hints: ["The door is crossed. Listen to the verb: walks."] },
          ),
          FB(
            "Complete the sentence.",
            "He takes the pen ___ the box.",
            ["out of"],
            fb(
              "out of",
              "The pen moves from inside the box to the outside — the pair is out of.",
              "Out alone is not enough: out keeps its of before the noun.",
            ),
            { skill: "grammar", hints: ["The pen leaves the inside of the box. The word pair has two parts."] },
          ),
          MATCH(
            "Match each movement to its meaning.",
            [
              ["m1", "into the shop"],
              ["m2", "out of the box"],
              ["m3", "across the river"],
              ["m4", "through the tunnel"],
            ],
            [
              ["r1", "from outside to inside"],
              ["r2", "from inside to outside"],
              ["r3", "from one side to the other"],
              ["r4", "in one side and out the other"],
            ],
            [
              ["m1", "r1"],
              ["m2", "r2"],
              ["m3", "r3"],
              ["m4", "r4"],
            ],
            fb(
              "into → from outside to inside, out of → from inside to outside, across → side to side, through → in one side and out the other",
              "Each movement word draws one path.",
              "If the path is wrong, your directions send people the wrong way.",
            ),
            { skill: "vocabulary", hints: ["Follow the little picture in each phrase."] },
          ),
          LIS(
            "Listen and answer.",
            "The bus goes through the tunnel.",
            "Where does the bus go?",
            ["through the tunnel", "Through the tunnel."],
            fb(
              "Through the tunnel",
              "You heard the word for in one side and out the other — the tunnel is a crossing.",
              "across crosses a flat space like a street; a tunnel is closed, so the crossing word changes.",
            ),
            { skill: "listening", hints: ["The bus enters one side and leaves the other side."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "I go ___ after school. (the place where I live)",
            [
              ["a", "to home"],
              ["b", "home"],
              ["c", "at home"],
            ],
            "b",
            fb(
              "home",
              "Home drops the little word: go home, come home.",
              "Every other place keeps it: go to school, go to the city.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "She walks into the kitchen.",
            fb(
              "She walks into the kitchen",
              "The order is: person + action verb + movement word + the + place.",
              "The movement word sits between the verb and the place it crosses into.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "The pen is into the box.",
            ["The pen is in the box."],
            fb(
              "The pen is in the box.",
              "Is shows a resting place — no crossing, so the resting word comes back.",
              "The crossing word needs an action verb like walk, go or run.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "We walk across the park.",
            ["We walk across the park."],
            fb(
              "We walk across the park.",
              "The walk crosses the park from one side to the other.",
              "through would mean in one gate and out the other side of a closed place.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My journey",
      instructions:
        "Describe your way from home to a place you go often. Write four or five sentences. Use three different movement words. Example: “I walk out of my house. I go across the street. I come into the shop at nine.”",
      minWords: 16,
      maxWords: 60,
    },
    homework: [
      "Give directions from your home to the nearest shop — out loud, with movement words.",
      "Write three sentences about things that cross: a bus, a cat, a ball.",
      "Say your morning journey in English: “I go out of… I walk across… I come into…”",
    ],
  },

  // =========================================================================
  // Lesson 4 — There Is / There Are
  // =========================================================================
  {
    slug: "ch-16-l-04",
    minutes: 25,
    description:
      "Saying what exists: there is for one thing, there are for two or more — statements, negatives, questions and short answers, with the noun always in charge.",
    outcomes: [
      "Use there is and there are with singular and plural nouns",
      "Make negatives and questions: there isn’t, there aren’t, Is there…?, Are there…?",
      "Answer with short answers: “Yes, there is. / No, there aren’t.”",
      "Describe what exists in a street, a room or a school",
    ],
    blocks: [
      LI(
        "How do you say what a place has? English uses there is and there are. There is a park. There are two schools. The noun decides the small verb. In this lesson you make statements, negatives and questions with the existence pattern.",
        [
          "You know is and are with pronouns (Chapter 12 · Lesson 1).",
          "You know singular and plural nouns (Chapter 10 · Lesson 2).",
          "You can ask yes/no questions (Chapter 14 · Lesson 1).",
        ],
      ),
      vocGlossary("Words for describing places", [
        { word: "singular", partOfSpeech: "noun", definition: "one thing: a park, a shop" },
        { word: "plural", partOfSpeech: "noun", definition: "more than one thing: two parks" },
        { word: "room", partOfSpeech: "noun", definition: "one part of a home, with walls" },
        { word: "kitchen", partOfSpeech: "noun", definition: "the room where you cook" },
        { word: "garden", partOfSpeech: "noun", definition: "the green place behind or near a house" },
        { word: "park", partOfSpeech: "noun", definition: "a green place in a city" },
        { word: "shop", partOfSpeech: "noun", definition: "a place that sells things" },
        { word: "city", partOfSpeech: "noun", definition: "a very big place with streets and houses" },
      ]),
      H("Saying what exists"),
      T(
        "Point at a new place. What is in it? English answers with there. There is a park. There are two schools. The word there says: something exists here. Then the noun decides the small verb. One thing takes is. More things take are.",
      ),
      TB(
        "All the forms of the existence pattern",
        ["Form", "One thing (there is)", "Two or more (there are)"],
        [
          ["Statement", "There is a park.", "There are two parks."],
          ["Negative", "There isn’t a cinema.", "There aren’t any shops."],
          ["Question", "Is there a bank?", "Are there any cafés?"],
          ["Short answer", "Yes, there is. / No, there isn’t.", "Yes, there are. / No, there aren’t."],
        ],
        "One pattern, four forms — and the noun always decides is or are.",
      ),
      GR(
        "The existence rule",
        "There is + one thing: There is a park. There are + two or more things: There are two parks. Count the noun first — the noun decides the verb.",
        [
          { english: "There is a park near my home.", translation: "One park → there is." },
          { english: "There are two schools in my street.", translation: "Two schools → there are." },
          { english: "Is there a bank near here? — Yes, there is.", translation: "The question flips is to the front." },
          { english: "There isn’t a cinema in our town.", translation: "The negative: there isn’t + one thing." },
        ],
        [
          "Words you cannot count, like milk and water, take there is: There is some milk in the fridge.",
        ],
      ),
      AU(
        "Listen: there is, there are",
        "There is a park. There is a shop. There are two schools. There are some cafés.",
        0.85,
      ),
      AU(
        "Listen: asking about a new place",
        "Is there a bank near here? Yes, there is. Are there any cafés? No, there aren’t.",
        0.9,
      ),
      N(
        "This there does not point",
        "English has two theres. One points: “The shop is over there.” The existence there only announces: “There is a shop.” In the existence pattern, there is weak and quiet — /ðə/. The noun after it carries the news.",
      ),
      ST(
        "Describe a place in three steps",
        [
          {
            title: "Step 1 — Count what exists",
            text: "Look at the place. Count the things you want to say. One thing → there is. Two or more → there are.",
            examples: [
              { english: "one park → There is a park.", note: "One thing takes the singular verb." },
              { english: "two parks → There are two parks.", note: "The plural noun calls the plural verb." },
            ],
          },
          {
            title: "Step 2 — Add the noun and the place",
            text: "Say what exists, then where it is. Place words from Lesson 1 finish the picture.",
            examples: [
              { english: "There is a park near my home.", note: "Existence + place in one sentence." },
              { english: "There are two shops in my street.", note: "The place word comes after the noun." },
            ],
          },
          {
            title: "Step 3 — Ask and answer",
            text: "Turn the pattern into a question by flipping the verb to the front. Answer short — echo the verb and stop.",
            examples: [
              { english: "Is there a shop near here? — Yes, there is.", note: "Flip is; answer short." },
              { english: "Are there any cafés? — No, there aren’t.", note: "Flip are; echo are in the answer." },
            ],
          },
        ],
      ),
      EXD(
        "What exists, in real life",
        [
          { english: "There are two bedrooms and one kitchen in my home.", note: "Count first: two plural, one singular.", domain: "home" },
          { english: "There is a big library in our school.", note: "One library → there is, even in a big place.", domain: "education" },
          { english: "There are two parks in my street.", note: "The plural noun calls the plural verb.", domain: "everyday" },
          { english: "Is there a bank near here? — Yes, there is.", note: "The classic traveller question and its short answer.", domain: "travel" },
          { english: "There are some cheap shops behind the market.", note: "Existence + some + adjective — a full picture.", domain: "shopping" },
          { english: "There is a river behind my grandfather’s garden.", note: "One river → there is; the place word adds the map.", domain: "nature" },
          { english: "There are four people in my family.", note: "Family counting uses the existence pattern too.", domain: "family" },
          { english: "There is some rice in the kitchen.", note: "Rice has no plural — an uncountable word takes there is.", domain: "food" },
          { english: "Are there any cafés near your office?", note: "A polite question about a new place.", domain: "work" },
        ],
        "Nine sentences — every one answers the silent question: what exists here?",
      ),
      US(
        [
          {
            situation: "New in a city",
            example: "“Is there a park near here?”",
            note: "The first question every visitor asks.",
          },
          {
            situation: "Choosing a home",
            example: "“Are there two bedrooms?”",
            note: "Flat questions are existence questions.",
          },
          {
            situation: "At the hotel",
            example: "“Is there a television in the room? — Yes, there is.”",
            note: "Hotel reception runs on this pattern.",
          },
          {
            situation: "Describing your street",
            example: "“There are two shops and a small park.”",
            note: "Give your street a picture with words.",
          },
          {
            situation: "First day at a new school",
            example: "“There is a library next to our classroom.”",
            note: "New places become real when you say what they hold.",
          },
        ],
        "What exists, in daily life",
        "From hotels to house-hunting, the existence pattern opens every new place.",
      ),
      DL(
        "A new street",
        "Mrs Khan and her daughter move to a new area. They meet a neighbour.",
        [
          ["Neighbour", "Welcome! Is this your first day here?"],
          ["Mrs Khan", "Yes. Is there a shop near here?"],
          ["Neighbour", "Yes, there are two shops in the street."],
          ["Mrs Khan", "Great. And is there a park?"],
          ["Neighbour", "There is a small park behind the shops."],
          ["Mrs Khan", "And a bank?"],
          ["Neighbour", "No, there isn’t a bank. The bank is in the city."],
          ["Mrs Khan", "Thank you. It is a nice street!"],
        ],
      ),
      CMP(
        "there is vs it is",
        ["There is / There are", "It is / They are"],
        [
          ["The job", "Says what EXISTS — new information", "Says what a known thing IS"],
          ["When", "The first time you mention the thing", "The second time — the thing is already known"],
          ["Together", "There is a park near my home.", "It is big. (it = the park you just said)"],
          ["Watch out", "“There is big” — impossible: there is needs a noun", "“It is a park near my home” — it cannot introduce new things"],
        ],
        {
          intro: "Two patterns that look like cousins but do different jobs.",
          verdict: "New thing, first time → there is. Known thing, second time → it is.",
        },
      ),
      MS(
        [
          [
            "There is two parks near my home.",
            "There are two parks near my home.",
            "Two parks is plural, and plural nouns take there are. Count the noun, then choose.",
          ],
          [
            "There are a cinema in my street.",
            "There is a cinema in my street.",
            "A cinema means one thing, and one thing takes there is.",
          ],
          [
            "Is there a park here? — Yes, there is a park.",
            "Is there a park here? — Yes, there is.",
            "Short answers echo the verb and stop. The noun stays in the question.",
          ],
          [
            "There is two bank near the shop.",
            "There are two banks near the shop.",
            "Numbers bigger than one take a plural noun with -s — and two banks takes there are.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "There is never loses its noun",
        "“There is big” is impossible. There is always needs a noun after it: There is a big park. If you only want the adjective, use it: “It is big.” First say what exists, then describe it.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My street is not big. There are ten houses and one shop. There is a small park behind the houses. There are some old trees in the park. There isn’t a café in our street, and there isn’t a bank. But there is a bus stop in front of my house — and that is enough.",
          task: "Read the text two times. Then say two things that are NOT in the street.",
        },
        writing: {
          task: "Write four sentences about your street: two with there is, two with there are.",
          guide: [
            "There is a ______ in my street.",
            "There are ______ in my street.",
            "There isn’t a ______.",
            "There aren’t any ______.",
          ],
          model:
            "There is a shop in my street. There are two parks near my home. There isn’t a cinema. There aren’t any cafés.",
        },
        listening: {
          script:
            "Welcome! There are two rooms and a kitchen. There is a small bathroom next to the kitchen. Is there a garden? Yes, there is a garden behind the house.",
          task: "Listen. How many rooms are there?",
        },
        speaking: {
          task: "Describe your home to a partner: three existence sentences and one question.",
          frames: [
            "There is a ______ in my home.",
            "There are ______.",
            "Is there a ______ in your home?",
          ],
          checklist: [
            "I counted before choosing is or are.",
            "I asked one question.",
            "I answered my partner with a short answer.",
          ],
        },
      }),
      LSP(
        [
          gls("There is and there are say what exists."),
          gls("singular"),
          gls("plural"),
          gls("room"),
          gls("city"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "There is + one thing. There are + two or more things.",
        "The noun decides the verb — count before you choose.",
        "Negatives: there isn’t, there aren’t. Questions: Is there…? Are there…?",
        "Short answers echo the verb: Yes, there is. No, there aren’t.",
        "There is says something exists. It is says what a known thing is.",
      ]),
      RV(
        [
          {
            question: "One cat, one park, one shop — the noun is…",
            options: ["plural", "singular", "a verb"],
            correctIndex: 1,
            explanation: "One thing is singular — and singular nouns take there is.",
            from: "Chapter 10 · Lesson 2",
          },
          {
            question: "Which one is a yes/no question?",
            options: ["Where do you live?", "Do you like tea?", "You like tea."],
            correctIndex: 1,
            explanation: "Do at the front makes a yes/no question — no question word needed.",
            from: "Chapter 14 · Lesson 1",
          },
          {
            question: "The short answer to “Are you ten?” is…",
            options: ["Yes, I am.", "Yes, am.", "Yes, I are."],
            correctIndex: 0,
            explanation: "Short answers echo the verb and stop: Yes, I am.",
            from: "Chapter 12 · Lesson 2",
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
            "Complete the sentence.",
            "___ is a park near my home.",
            ["There"],
            fbx(
              "There",
              "Start the existence sentence with the announcing word, then is for one thing.",
              "This word does not point — it just announces that the park exists.",
              { english: "There is a shop in my street.", translation: "Announce first, then the verb, then the noun." },
            ),
            { skill: "grammar", hints: ["The first word says: something exists here. It starts with the letters T-H."] },
          ),
          MCQ(
            "There ___ two banks near my house.",
            [
              ["a", "is"],
              ["b", "are"],
              ["c", "am"],
            ],
            "b",
            fb(
              "are",
              "Two banks is plural — plural nouns take the plural be-word.",
              "One thing takes the singular be-word; the I-word belongs to I only.",
            ),
            { skill: "grammar", hints: ["Count the banks before you choose."] },
          ),
          MATCH(
            "Match each question to its short answer.",
            [
              ["q1", "Is there a park?"],
              ["q2", "Are there any shops?"],
              ["q3", "Is there a cinema?"],
              ["q4", "Are there two schools?"],
            ],
            [
              ["a1", "Yes, there is."],
              ["a2", "No, there aren’t."],
              ["a3", "No, there isn’t."],
              ["a4", "Yes, there are."],
            ],
            [
              ["q1", "a1"],
              ["q2", "a2"],
              ["q3", "a3"],
              ["q4", "a4"],
            ],
            fb(
              "Is there a park? → Yes, there is. Are there any shops? → No, there aren’t. Is there a cinema? → No, there isn’t. Are there two schools? → Yes, there are.",
              "A short answer echoes the be-word from the question: is → is, are → are.",
              "The noun never comes back in a short answer — it stays in the question.",
            ),
            { skill: "grammar", hints: ["The little be-word in the answer matches the one in the question."] },
          ),
          LIS(
            "Listen and answer.",
            "There are three rooms in my home.",
            "How many rooms are there?",
            ["three", "Three", "three rooms"],
            fb(
              "Three",
              "You heard the number word after there are — three rooms.",
              "The noun after the number tells you what is counted: rooms.",
            ),
            { skill: "listening", hints: ["Listen for the number word after the existence phrase."] },
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
            "There is a big park near my home.",
            fb(
              "There is a big park near my home",
              "The order is: announce + verb + a + adjective + noun + place.",
              "The adjective sits between a and the noun.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "There is two schools in my city.",
            ["There are two schools in my city."],
            fb(
              "There are two schools in my city.",
              "Schools is plural, so the plural be-word comes in.",
              "The noun decides — not the place, not the size of the city.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Are there any shops near here?",
            ["Are there any shops near here?"],
            fb(
              "Are there any shops near here?",
              "The question flips are to the front — and questions take the partner word any.",
              "The statement order would be: There are some shops near here.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Your friend asks about your street. What do you say first?",
            [
              ["a", "It is a park near my home."],
              ["b", "There is a park near my home."],
              ["c", "There is it a park."],
            ],
            "b",
            fb(
              "There is a park near my home.",
              "New information — something that exists — starts with the existence pattern.",
              "The it-pattern describes one known thing; it cannot introduce new information.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My neighbourhood",
      instructions:
        "Write six sentences about your street or area. Use there is twice, there are twice, one negative, and one question with its answer. Example: “There is a park near my home. Are there any shops? — Yes, there are.”",
      minWords: 22,
      maxWords: 70,
    },
    homework: [
      "Describe your kitchen: three there is / there are sentences.",
      "Ask a friend or family member “Is there a… near you?” about three places.",
      "Count the rooms in your home and say: “There are … rooms in my home.”",
    ],
  },

  // =========================================================================
  // Lesson 5 — Some and Any
  // =========================================================================
  {
    slug: "ch-16-l-05",
    minutes: 20,
    description:
      "The quantity pair: some in positives, any in negatives and questions — plus the polite offer that breaks the rule.",
    outcomes: [
      "Use some in positive sentences",
      "Use any in negatives and questions",
      "Make polite offers with some: “Would you like some tea?”",
      "Use some and any with foods and things you cannot count",
    ],
    blocks: [
      LI(
        "How much rice is in the kitchen? Do we have eggs? English answers with two little words: some and any. Some lives in positive sentences. Any lives in negatives and questions. In this lesson you check a fridge and make a shopping list.",
        [
          "You can make negatives with don’t and doesn’t (Chapter 13 · Lesson 4).",
          "You can ask questions with do and does (Chapter 14 · Lesson 1).",
          "You can count nouns: one egg, two eggs (Chapter 10 · Lesson 3).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "some", partOfSpeech: "determiner", definition: "an amount you do not count" },
        { word: "any", partOfSpeech: "determiner", definition: "not one — or: does one exist?" },
        { word: "question", partOfSpeech: "noun", definition: "a sentence that asks" },
        { word: "egg", partOfSpeech: "noun", definition: "a food from a bird — you can count them" },
        { word: "breakfast", partOfSpeech: "noun", definition: "the first meal of the day" },
      ]),
      H("The quantity pair"),
      T(
        "How much? How many? English has a fast answer: some. There are some apples. But questions and negatives need the other word: any. Are there any apples? There aren’t any apples. Two little words, two different jobs. Learn the jobs, and shopping becomes easy.",
      ),
      {
        type: "definition",
        term: "offer",
        partOfSpeech: "noun",
        definition:
          "An offer asks if someone wants something. It looks like a question, but it gives — it does not ask for information.",
        example: {
          english: "Would you like some tea?",
          translation: "The offer takes some — you hope the answer is yes.",
        },
      },
      GR(
        "The some / any rule",
        "some lives in positive sentences: I have some money. any lives in negatives: I don’t have any money — and in questions: Do you have any money?",
        [
          { english: "There are some apples.", translation: "A positive amount → some." },
          { english: "There aren’t any apples.", translation: "The negative swaps some for any." },
          { english: "Are there any apples?", translation: "Questions take any too." },
          { english: "I have some money.", translation: "money has no plural, but the rule is the same." },
        ],
        [
          "Offers and requests take some: Would you like some tea? Can I have some water?",
        ],
      ),
      TB(
        "some and any across the forms",
        ["Sentence type", "Word", "Example"],
        [
          ["Positive", "some", "There are some apples. I have some money."],
          ["Negative", "any", "There aren’t any apples. I don’t have any money."],
          ["Question", "any", "Are there any apples? Do you have any money?"],
          ["Offer", "some", "Would you like some tea?"],
        ],
        "Three types and one special case — the offer is a positive idea in a question’s clothes.",
      ),
      AU(
        "Listen: some and any",
        "I have some money. Do you have any money? There isn’t any milk. Would you like some tea?",
        0.85,
      ),
      AU(
        "Listen: in the kitchen",
        "There are some eggs. There is some rice. There isn’t any bread. Is there any milk? Yes, there is.",
        0.9,
      ),
      N(
        "The sound of some",
        "In fast speech, some loses its vowel and becomes very small: /səm/. “Some eggs” sounds like “s’m eggs”. The partner word keeps its full sound: /ˈeni/, like “enny”. Say both, with rhythm: s’m eggs, enny apples.",
      ),
      ST(
        "Choose some or any in three steps",
        [
          {
            title: "Step 1 — Look at the sentence",
            text: "Read the whole sentence. Is it positive, negative or a question? The type decides the word.",
            examples: [
              { english: "We need some eggs.", note: "No not, no question mark — positive." },
              { english: "We don’t need any eggs.", note: "don’t makes it negative." },
            ],
          },
          {
            title: "Step 2 — Apply the pair",
            text: "Positive → some. Negative → any. Question → any. One look at the sentence type, and the word chooses itself.",
            examples: [
              { english: "There is some rice.", note: "Positive → the amount word." },
              { english: "Is there any rice?", note: "Question → the partner word." },
            ],
          },
          {
            title: "Step 3 — Check for an offer",
            text: "Is the question really an offer? Would you like…? Then take some — offers are positive ideas in question form.",
            examples: [
              { english: "Would you like some tea?", note: "An offer — some, even in a question." },
            ],
          },
        ],
      ),
      EXD(
        "some and any in real life",
        [
          { english: "We need some eggs and some milk.", note: "A shopping-list sentence — positives take the amount word.", domain: "shopping" },
          { english: "There are some apples in the bowl.", note: "Positive existence — the natural pair with there are.", domain: "food" },
          { english: "I don’t have any money today.", note: "don’t makes it negative — the partner word steps in.", domain: "everyday" },
          { english: "Are there any questions?", note: "Every teacher’s line — a question takes the partner word.", domain: "education" },
          { english: "Would you like some tea?", note: "An offer! Offers keep the amount word even in a question.", domain: "social" },
          { english: "There isn’t any bread in the kitchen.", note: "Negative existence: isn’t + partner word.", domain: "home" },
          { english: "My sister doesn’t eat any meat.", note: "A true sentence about food choices.", domain: "family" },
          { english: "Do you have any water? I am thirsty.", note: "Asking for a drink on a journey.", domain: "travel" },
          { english: "I have some new books on my phone.", note: "The amount word works for digital things too.", domain: "technology" },
        ],
        "Nine sentences — the full fridge, the full shop, the full offer.",
      ),
      US(
        [
          {
            situation: "The shopping list",
            example: "“We need some rice, some eggs and some milk.”",
            note: "Lists are positive — the amount word all the way.",
          },
          {
            situation: "Checking the fridge",
            example: "“Is there any butter?” — “No, there isn’t any butter.”",
            note: "Question and negative — the partner word twice.",
          },
          {
            situation: "Offering to a guest",
            example: "“Would you like some tea?”",
            note: "The offer keeps the amount word — hospitality grammar.",
          },
          {
            situation: "At the market",
            example: "“Do you have any fresh bread?”",
            note: "Market questions take the partner word.",
          },
          {
            situation: "A picnic plan",
            example: "“We have some apples. Do we have any water?”",
            note: "Plan with both words — count what you have, ask for what you need.",
          },
        ],
        "some and any in daily life",
        "From the fridge to the market — the pair answers every “how much?”.",
      ),
      DL(
        "The fridge check",
        "Sara and her mother check the food before they go shopping.",
        [
          ["Mother", "Sara, we need food. Is there any milk?"],
          ["Sara", "No, there isn’t any milk."],
          ["Mother", "Are there any eggs?"],
          ["Sara", "Yes, there are some eggs. Four eggs."],
          ["Mother", "Good. Do we have any rice?"],
          ["Sara", "Yes. There is some rice in the kitchen."],
          ["Mother", "Then we need some milk and some bread."],
          ["Sara", "And some apples, please!"],
        ],
      ),
      CMP(
        "some vs any",
        ["some", "any"],
        [
          ["Sentence type", "Positive: There are some apples.", "Negative: There aren’t any apples. Question: Are there any apples?"],
          ["The idea", "An amount you do not count", "Not one — or: does one exist?"],
          ["The offer", "Would you like some tea?", "Offers never take the partner word"],
          ["The sound", "Small and weak: /səm/ — s’m eggs", "Clear and open: /ˈeni/ — enny apples"],
        ],
        {
          intro: "Two little words, one job each — the pair that answers “how much?”.",
          verdict: "Positive → some. Negative or question → any. Offer → some, even in a question.",
        },
      ),
      MS(
        [
          [
            "I don’t have some money.",
            "I don’t have any money.",
            "not sends the partner word into the sentence. The amount word lives in positives only.",
          ],
          [
            "Are there some apples?",
            "Are there any apples?",
            "Questions take the partner word: Are there any apples? Do you have any water?",
          ],
          [
            "There aren’t some shops here.",
            "There aren’t any shops here.",
            "aren’t is a negative, and negatives take the partner word.",
          ],
          [
            "Would you like any tea?",
            "Would you like some tea?",
            "Offers are special. They look like questions, but they give — so they take the amount word.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Milk and water have no plural",
        "Some foods you can count: one egg, two eggs. Some foods you cannot count: milk, water, rice, bread. Never say “a milk” or “two breads”. Say some milk, any rice — and there is some milk, not there are. Chapter 24 finishes this story.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Our fridge is almost empty. There are some eggs and there is some cheese. There is an apple too, but there isn’t any milk. There isn’t any bread. Are there any tomatoes? No, there aren’t any tomatoes. It is time to go shopping!",
          task: "Read the text two times. Then name two foods that ARE in the fridge.",
        },
        writing: {
          task: "Write four sentences about food at home right now: two positives, one negative, one question.",
          guide: [
            "There are some ______.",
            "We have some ______.",
            "There isn’t any ______.",
            "Is there any ______?",
          ],
          model:
            "There are some eggs. We have some rice. There isn’t any milk. Is there any bread?",
        },
        listening: {
          script:
            "Can I help you? Yes, please. Do you have any fresh bread? Yes, we do. And any eggs? Sorry — there aren’t any eggs today.",
          task: "Listen. What food is NOT in the shop?",
        },
        speaking: {
          task: "Ask a partner three food questions, then make one offer.",
          frames: [
            "Do we have any ______?",
            "Is there any ______?",
            "Would you like some ______?",
          ],
          checklist: [
            "I asked my questions with the partner word.",
            "I made one offer with the amount word.",
            "I answered with Yes, there is / No, there isn’t.",
          ],
        },
      }),
      LSP(
        [
          gls("Use some in positive sentences and any in questions and negatives."),
          gls("some"),
          gls("any"),
          gls("question"),
          gls("egg"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "some lives in positive sentences: There are some apples.",
        "any lives in negatives and questions: There aren’t any apples. Are there any apples?",
        "Offers take some, even in a question: Would you like some tea?",
        "Words you cannot count — milk, water, rice, bread — take there is with some or any.",
        "In fast speech, some sounds small: /səm/, s’m eggs.",
      ]),
      RV(
        [
          {
            question: "don’t and doesn’t make…",
            options: ["negatives", "questions", "plurals"],
            correctIndex: 0,
            explanation: "Not makes a negative — and negatives call the partner word any.",
            from: "Chapter 13 · Lesson 4",
          },
          {
            question: "Do and does help verbs make…",
            options: ["questions", "commands", "adjectives"],
            correctIndex: 0,
            explanation: "Do at the front turns a sentence into a question — and questions call any.",
            from: "Chapter 14 · Lesson 1",
          },
          {
            question: "Which food can you NOT count?",
            options: ["egg", "chair", "milk"],
            correctIndex: 2,
            explanation: "Milk has no plural — one milk, two milks is impossible.",
            from: "Chapter 10 · Lesson 3",
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
            "Complete the sentence.",
            "We need ___ eggs for breakfast.",
            ["some"],
            fbx(
              "some",
              "This sentence is positive — no not, no question mark — so the amount word comes in.",
              "Its partner word waits for negatives and questions.",
              { english: "We have some rice.", translation: "Positive sentence → the amount word." },
            ),
            { skill: "grammar", hints: ["Look at the sentence: is it positive, negative or a question?"] },
          ),
          MCQ(
            "I don’t have ___ money.",
            [
              ["a", "some"],
              ["b", "any"],
            ],
            "b",
            fb(
              "any",
              "not signals a negative, and negatives take the partner word.",
              "The amount word never lives in a negative sentence.",
            ),
            { skill: "grammar", hints: ["The word not inside don’t tells you the sentence type."] },
          ),
          MATCH(
            "Match each sentence to its type.",
            [
              ["s1", "There are some apples."],
              ["s2", "There aren’t any apples."],
              ["s3", "Are there any apples?"],
              ["s4", "Would you like some tea?"],
            ],
            [
              ["t1", "positive"],
              ["t2", "negative"],
              ["t3", "question"],
              ["t4", "offer"],
            ],
            [
              ["s1", "t1"],
              ["s2", "t2"],
              ["s3", "t3"],
              ["s4", "t4"],
            ],
            fb(
              "There are some apples. → positive, There aren’t any apples. → negative, Are there any apples? → question, Would you like some tea? → offer",
              "Each sentence type chooses its own word: positives take the amount word; negatives and questions take the partner; offers are special.",
              "The offer looks like a question, but it gives — so it keeps the amount word.",
            ),
            { skill: "grammar", hints: ["Look for not and the question mark first."] },
          ),
          LIS(
            "Listen and answer.",
            "Is there any milk in the fridge?",
            "What food does the speaker ask about?",
            ["milk", "the milk", "Milk"],
            fb(
              "Milk",
              "The question asks about milk — a food you cannot count.",
              "Countable foods like eggs can take numbers; milk cannot.",
            ),
            { skill: "listening", hints: ["Listen for the food word at the end of the question."] },
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
            "There are some apples on the table.",
            fb(
              "There are some apples on the table",
              "The order is: announce + verb + amount word + noun + place.",
              "The amount word sits between the verb and the noun.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I don’t have some money.",
            ["I don’t have any money."],
            fb(
              "I don’t have any money.",
              "don’t makes the sentence negative, and negatives take the partner word.",
              "The amount word belongs to positive sentences only.",
            ),
            { skill: "grammar" },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "There aren’t some shops."],
              ["b", "There aren’t any shops."],
              ["c", "There isn’t any shops."],
            ],
            "b",
            fb(
              "There aren’t any shops.",
              "A negative takes the partner word, and the plural noun shops takes aren’t.",
              "The amount word cannot live in a negative; and the singular verb cannot live with a plural noun.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Would you like some tea?",
            ["Would you like some tea?"],
            fb(
              "Would you like some tea?",
              "An offer keeps the amount word, even inside a question.",
              "A real question — Do you have any tea? — would take the partner word.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Fridge check",
      instructions:
        "Think of your kitchen right now. Write five sentences about food at home: two positives with the amount word, one negative and one question with the partner word, and one offer. Example: “There are some eggs. We need some milk. There isn’t any bread. Is there any rice? Would you like some tea?”",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Make a shopping list in English: “We need some…” — five things.",
      "Write three things you don’t have: “We don’t have any…”",
      "Offer three things to someone today: “Would you like some…?”",
    ],
  },

  // =========================================================================
  // Lesson 6 — Describing Places and Chapter Review
  // =========================================================================
  {
    slug: "ch-16-l-06",
    minutes: 25,
    description:
      "Everything together: describe a real place with existence, position, detail and time — then take the Chapter 16 review.",
    outcomes: [
      "Write a complete description of a place with the four-step recipe",
      "Mix there is/there are, place words, time words and some/any",
      "Answer the Chapter 16 review questions",
      "Give your description a personal ending: why you like the place",
    ],
    blocks: [
      LI(
        "Now you put everything together. A good description paints a picture: what exists, where it is, and one detail. You have all the tools: place words, time words, movement words, there is/there are, and some/any. In this lesson you describe a real place — and take the Chapter 16 review.",
        [
          "You can describe nouns with adjectives (Chapter 15 · Lesson 1).",
          "You know the place words from the box model (Lesson 1).",
          "You know the time zoom: point → day → period (Lesson 2).",
          "You can use there is/there are and some/any (Lessons 4 and 5).",
        ],
      ),
      vocGlossary("Words for your description", [
        { word: "preposition", partOfSpeech: "noun", definition: "a small word before a noun: in, on, at, to" },
        { word: "home", partOfSpeech: "noun", definition: "the place where you live" },
        { word: "bedroom", partOfSpeech: "noun", definition: "the room with your bed" },
        { word: "kitchen", partOfSpeech: "noun", definition: "the room where you cook" },
        { word: "garden", partOfSpeech: "noun", definition: "the green place near a house" },
        { word: "street", partOfSpeech: "noun", definition: "the road with houses on the sides" },
        { word: "park", partOfSpeech: "noun", definition: "a green place in a city" },
      ]),
      H("From words to a real description"),
      T(
        "You know the words. Now make a picture. A good description follows a recipe: say what exists, say where it is, add one detail, add one time. There is a small park behind my school. There are some old trees in it. Children play there in the afternoon. Four sentences — one clear picture.",
      ),
      TB(
        "The description recipe",
        ["Step", "Do this", "Example"],
        [
          ["1. Existence", "Start with there is / there are + a noun", "There is a small park behind my school."],
          ["2. Position", "Add a place word", "The park is between the shop and the bank."],
          ["3. Detail", "Add an adjective, some or any", "There are some old trees in it."],
          ["4. Time", "Add one time word", "Children play there in the afternoon."],
        ],
        "Four steps, one picture — this recipe works for a room, a street or a whole city.",
      ),
      AU(
        "Listen: my bedroom",
        "There is a small bedroom in my home. The bed is next to the window. There are some books on the table. The lamp is behind the books. I read in my bed in the evening.",
        0.85,
      ),
      AU(
        "Listen: my street",
        "There is a shop in front of my home. There are two trees near the door. The park is behind the street. Children play there after school.",
        0.9,
      ),
      N(
        "The music of a description",
        "Read a description out loud. The weak words are there, is, are, in, on, at, some. The strong words are the nouns and adjectives: park, big, trees, old. That is the music of English: small grammar words under, big picture words over.",
      ),
      ST(
        "Describe your room in four steps",
        [
          {
            title: "Step 1 — Name the room and count the big things",
            text: "Start with the biggest things. Count them, then choose the verb.",
            examples: [
              { english: "There is a bed and there are two chairs.", note: "One bed → is; two chairs → are." },
            ],
          },
          {
            title: "Step 2 — Place each thing",
            text: "Give every big thing a place with a place word from Lesson 1.",
            examples: [
              { english: "The bed is next to the window.", note: "Position paints the map." },
              { english: "My books are on the table.", note: "Touching the surface — on." },
            ],
          },
          {
            title: "Step 3 — Add one detail",
            text: "Add some for amounts, or a negative for what is missing. Detail makes the picture real.",
            examples: [
              { english: "There are some books under the lamp.", note: "Amount + position in one sentence." },
              { english: "There isn’t a television in my room.", note: "A negative can be a detail too." },
            ],
          },
          {
            title: "Step 4 — Add one time sentence",
            text: "Finish with life: what happens there, and when. Use the time zoom.",
            examples: [
              { english: "I read there in the evening.", note: "Part of the day → the period word." },
            ],
          },
        ],
      ),
      GR(
        "The description formula",
        "Existence + position + detail + time. Start with there is/there are + noun, add a place word, add one detail with some or any, and finish with one time word.",
        [
          { english: "There is a big park behind my school.", translation: "Existence + place in one sentence." },
          { english: "There are some old trees in it.", translation: "Detail: some + adjective. it now means the park." },
          { english: "I walk there on Sunday.", translation: "One time word finishes the picture." },
        ],
        [
          "After the first sentence, the thing is known — use it: There is a park. It is quiet.",
        ],
      ),
      EXD(
        "One place, piece by piece",
        [
          { english: "There is a small park behind my school.", note: "Step 1: existence — there is + adjective + noun.", domain: "education" },
          { english: "The park is between the shop and the bank.", note: "Step 2: position — a place word paints the map.", domain: "everyday" },
          { english: "There are some old trees in it.", note: "Step 3: detail — some + adjective, and it means the park.", domain: "nature" },
          { english: "I read there with my brother in the afternoon.", note: "Step 4: one time word finishes the picture.", domain: "family" },
          { english: "In my bedroom, there is a bed next to the window.", note: "Room descriptions start with the biggest thing.", domain: "home" },
          { english: "There are some books on the table, but there aren’t any chairs.", note: "some in the positive, the partner word in the negative — one sentence, both.", domain: "education" },
          { english: "There is a bus stop in front of my house.", note: "Street descriptions start at your own door.", domain: "travel" },
          { english: "There are two good cafés near my office.", note: "Adjectives make a description useful: good, cheap, new.", domain: "work" },
          { english: "Is there a shop in your street? — Yes, there are two!", note: "Questions finish a description with real talk.", domain: "social" },
        ],
        "Nine sentences — one recipe, from your bedroom to your whole street.",
      ),
      US(
        [
          {
            situation: "Showing a photo of your home",
            example: "“This is my street. There are some old houses in it.”",
            note: "Photos + there is/are = instant description.",
          },
          {
            situation: "A call about a new flat",
            example: "“There is a small kitchen and there are two rooms.”",
            note: "Existence sentences sell a home.",
          },
          {
            situation: "Welcoming a visitor",
            example: "“The park is behind the shop, near the bus stop.”",
            note: "Guide a guest with place words.",
          },
          {
            situation: "Writing about your school",
            example: "“There is a big playground in front of our class.”",
            note: "One paragraph, four steps — the recipe at school.",
          },
          {
            situation: "A travel tip",
            example: "“There are two good cafés near the station.”",
            note: "Travel tips are existence sentences.",
          },
        ],
        "Describing real places",
        "Photos, flats, visitors and tips — descriptions open every conversation about place.",
      ),
      DL(
        "This is my street",
        "Omar visits Sara’s home for the first time.",
        [
          ["Sara", "This is my street, Omar."],
          ["Omar", "It is quiet. There are some beautiful houses."],
          ["Sara", "There is a small shop between the two white houses."],
          ["Omar", "Is there a park near here?"],
          ["Sara", "Yes, there is a park behind my home. There are some old trees in it."],
          ["Omar", "Look — a cat next to the door!"],
          ["Sara", "That is Mini. She sleeps near the shop in the afternoon."],
          ["Omar", "A cat, a park, old trees — your street has everything!"],
        ],
      ),
      CMP(
        "next to vs near",
        ["next to = directly beside", "near = close, not touching"],
        [
          ["The distance", "Nothing between them: house, shop, house", "Some space between them — a short walk"],
          ["The test", "Is it the FIRST thing beside it?", "Is it close, but not the first?"],
          ["Examples", "My house is next to the park. The lamp is next to the bed.", "We live near the park. The shop is near my school."],
          ["Watch out", "Do not drop the to: “next the park” is impossible", "near is one word — no to, no of"],
        ],
        {
          intro: "Both words say “close” — but only one means directly beside.",
          verdict: "Directly beside, the first neighbour → next to. Close, walking distance → near.",
        },
      ),
      MS(
        [
          [
            "There is some chairs in my room.",
            "There are some chairs in my room.",
            "Chairs is plural — there are. Count the noun before you choose the verb.",
          ],
          [
            "The film starts in Monday.",
            "The film starts on Monday.",
            "Days take the middle zoom word. Point → day → period.",
          ],
          [
            "My bag is next the door.",
            "My bag is next to the door.",
            "next keeps its to: next to the door, next to the window.",
          ],
          [
            "We go across the tunnel.",
            "We go through the tunnel.",
            "A tunnel is closed on all sides — in one side and out the other takes the tunnel word.",
          ],
        ],
        "Common beginner mistakes — chapter review",
      ),
      W(
        "Do not list — describe",
        "A list is not a description. “There is a bed. There is a table. There is a chair.” — flat and dead. Add place and life: “The bed is next to the window. There are some books on the table.” One place word per fact turns a list into a picture.",
      ),
      H("Chapter 16 review"),
      T(
        "Six lessons, five systems, one skill: describing what exists and where it is. Check yourself with the questions below. Then take the final task and describe a place you know well.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "This is my grandmother’s house. It is old and beautiful. There is a small garden in front of the house and a big garden behind it. There are some flowers near the door. Inside, there is one big room, a kitchen and two small bedrooms. My grandmother cooks in the morning, and we eat together at one o’clock. I love her house.",
          task: "Read the text two times. Then answer: how many gardens are there?",
        },
        writing: {
          task: "Describe a place you know well in six sentences. Use the recipe: existence, position, detail, time.",
          guide: [
            "There is a ______ in ______.",
            "It is ______ and ______.",
            "There are some ______ in it.",
            "There isn’t any ______.",
            "I go there on ______.",
            "I love this place because ______.",
          ],
          model:
            "There is a small park in my street. It is quiet and green. There are some old trees in it. There isn’t any noise in the morning. I go there on Sunday. I love this place because it is beautiful.",
        },
        listening: {
          script:
            "My room is small but sunny. There is a bed next to the window. There are some books on the table. There is a lamp behind the books. My shoes are under the bed. I read in my room every evening.",
          task: "Listen. Where is the lamp?",
        },
        speaking: {
          task: "Describe a room in your home for one minute. Then answer two questions from a partner.",
          frames: [
            "There is a ______ next to ______.",
            "There are some ______ on ______.",
            "I ______ there in the ______.",
          ],
          checklist: [
            "I used there is and there are.",
            "I used two place words.",
            "I answered my partner’s questions.",
          ],
        },
      }),
      LSP(
        [
          gls("Prepositions show place, time and movement."),
          gls("There is and there are say what exists."),
          gls("We say in July, on Monday, at six o'clock."),
          gls("Use some in positive sentences and any in questions and negatives."),
          gls("home"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A description is a picture in words: existence, position, detail, time.",
        "There is / there are + noun starts every description — and the noun decides the verb.",
        "Place words position things; the time zoom sets the moment.",
        "some adds amounts in positives; any works in negatives and questions.",
        "After the first sentence the thing is known — use it: There is a park. It is big.",
        "The full picture: There is a small park behind my school. There are some trees in it. Children play there in the afternoon.",
      ]),
      RV(
        [
          {
            question: "The ball is inside the box. Where is it?",
            options: ["on the box", "in the box", "under the box"],
            correctIndex: 1,
            explanation: "Inside takes the inside word — the box model from Lesson 1.",
            from: "Chapter 16 · Lesson 1",
          },
          {
            question: "The film starts ___ seven o’clock.",
            options: ["in", "on", "at"],
            correctIndex: 2,
            explanation: "A clock time is a point — the zoom rule from Lesson 2.",
            from: "Chapter 16 · Lesson 2",
          },
          {
            question: "She walks ___ the shop. (from the street, through the door)",
            options: ["in", "into", "at"],
            correctIndex: 1,
            explanation: "The walk crosses the door — movement takes the crossing word, from Lesson 3.",
            from: "Chapter 16 · Lesson 3",
          },
          {
            question: "There ___ two parks near my home.",
            options: ["is", "are", "am"],
            correctIndex: 1,
            explanation: "Two parks is plural — the noun decides, from Lesson 4.",
            from: "Chapter 16 · Lesson 4",
          },
          {
            question: "I don’t have ___ money.",
            options: ["some", "any", "a"],
            correctIndex: 1,
            explanation: "Negatives take the partner word — the rule from Lesson 5.",
            from: "Chapter 16 · Lesson 5",
          },
          {
            question: "Which word describes a noun?",
            options: ["quiet", "in", "there"],
            correctIndex: 0,
            explanation: "Adjectives describe nouns: a quiet street, an old tree.",
            from: "Chapter 15 · Lesson 1",
          },
        ],
        {
          title: "Chapter 16 review — five systems, one skill",
          intro: "Six questions: one from each lesson, plus one from the chapter before.",
        },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice — chapter review",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          RD(
            "Read and answer.",
            "The street map",
            "My street is small and quiet. There are ten houses and there is one shop. The shop is between two houses. Behind the houses there is a park. There are some old trees in the park. Children play there in the afternoon.",
            "Where is the park?",
            [
              ["a", "In front of the houses."],
              ["b", "Behind the houses."],
              ["c", "Between two houses."],
            ],
            "b",
            fb(
              "Behind the houses.",
              "The text says: Behind the houses there is a park.",
              "Between two houses is the shop’s place — the park is at the back.",
            ),
            { skill: "reading", hints: ["Find the park in the text and read its place word."] },
          ),
          FB(
            "Complete the sentence.",
            "My birthday is ___ March.",
            ["in"],
            fb(
              "in",
              "March is a month — a long period — so it takes the period word.",
              "Clock numbers take the point word and days take the day word.",
            ),
            { skill: "grammar", hints: ["Zoom: point → day → long period. A month is the longest of the three."] },
          ),
          MCQ(
            "There ___ some chairs in my room.",
            [
              ["a", "is"],
              ["b", "are"],
              ["c", "am"],
            ],
            "b",
            fb(
              "are",
              "Chairs is plural, and the plural noun calls the plural be-word.",
              "The singular be-word goes with one thing only.",
            ),
            { skill: "grammar", hints: ["Count the chairs — the word after some is plural."] },
          ),
          LIS(
            "Listen and answer.",
            "My lamp is behind the books on the table.",
            "Where is the lamp?",
            ["behind the books", "Behind the books."],
            fb(
              "Behind the books",
              "You heard the place word for at the back — the lamp hides behind the books.",
              "On the table tells you which books — the place phrase builds a small map.",
            ),
            { skill: "listening", hints: ["Listen for the place word at the back."] },
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
            "There are some books on the table.",
            fb(
              "There are some books on the table",
              "The order is: announce + verb + amount word + noun + place.",
              "Existence first, amount second, place last.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "The cat is under of the chair.",
            ["The cat is under the chair."],
            fb(
              "The cat is under the chair.",
              "Below-words take no of: under the chair, behind the door.",
              "Only in front of keeps its of.",
            ),
            { skill: "grammar" },
          ),
          MCQ(
            "She walks ___ the kitchen with a smile. (from the hall, through the door)",
            [
              ["a", "in"],
              ["b", "into"],
              ["c", "at"],
            ],
            "b",
            fb(
              "into",
              "The walking crosses the door, so the movement word comes in.",
              "The resting word would only tell you where she is — not that she crosses a line.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "There is a park behind my school.",
            ["There is a park behind my school."],
            fb(
              "There is a park behind my school.",
              "One park → there is; behind places it at the back of the school.",
              "Two parks would change the verb — the noun always decides.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "A place I know well",
      instructions:
        "Choose a room, a street or a park you know well. Describe it in six to eight sentences. Use there is and there are, two place words, one time word, and some or any. End with one sentence about why you like it.",
      minWords: 35,
      maxWords: 110,
    },
    homework: [
      "Describe your favourite room to a family member — speaking, not writing.",
      "Write three questions about a friend’s home: “Is there a…?” “Are there any…?”",
      "Review your notes from Lessons 1 to 5. Star the one rule you forget most.",
    ],
  },
];


