/**
 * PROMPT 57 production — Batch 5, Chapter 13: Present Simple Tense.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the habits chapter: WHEN the tense applies (habit, routine,
 * timetable, fact — with the every-day / usually signals), HOW the
 * third-person -s works (three spellings AND three sounds: /s/ after
 * voiceless, /z/ after voiced, /ɪz/ after hissing sounds), negatives with
 * don't/doesn't + BASE form (the "doesn't goes" trap), do/does questions,
 * and the exact position of frequency adverbs (before main verbs, after
 * be — both placements, with reasons). No bare conjugation tables alone,
 * no "practise more" filler — every form is taught with a reason, a
 * mistake it prevents, and a place in real life.
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

export const ch13Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Meaning and Uses
  // =========================================================================
  {
    slug: "ch-13-l-01",
    minutes: 20,
    description:
      "Meet the tense of every day: when to use the present simple — habits, routines, timetables and facts — and the signal words that ask for it.",
    outcomes: [
      "Name the uses of the present simple: habits, routines, timetables and facts",
      "Spot the signal words: every day, usually, on Mondays, always",
      "Choose between be and the present simple for a sentence",
      "Find present simple verbs in a short text",
    ],
    blocks: [
      LI(
        "This lesson opens the biggest tense in English: the present simple. It does not talk about now. It talks about what happens again and again. You drink tea. You go to school. The sun rises. One tense carries habits, routines and facts.",
        [
          "You know the subject pronouns I, you, he, she, it, we, they (Chapter 11).",
          "You know the verb be: am, is and are (Chapter 12).",
          "You know that every sentence needs a verb (Chapter 08).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "present simple", partOfSpeech: "noun", definition: "The tense for habits, routines, timetables and facts: I work, she works." },
        { word: "habit", partOfSpeech: "noun", definition: "Something you do again and again, like drinking tea every morning." },
        { word: "routine", partOfSpeech: "noun", definition: "The things you do every day, in the same order." },
        { word: "every day", partOfSpeech: "phrase", definition: "A time signal for habits — it happens each day, not only today." },
      ]),
      H("The tense of every day"),
      T(
        "In Chapter 12 you met be: am, is, are. Be is a bridge. It says who you are. The present simple is different. It carries actions. I play. She works. We study. Use it for things that happen again and again — and for things that are always true.",
      ),
      {
        type: "definition",
        term: "present simple",
        partOfSpeech: "tense",
        definition:
          "The present simple is the tense of habits, routines, timetables and facts. It says what happens regularly — not what is happening this second.",
        example: {
          english: "I drink tea every morning.",
          translation: "drink is present simple — a habit that repeats, not this moment.",
        },
      },
      ST("Choose the present simple in three steps", [
        {
          title: "Step 1 — Ask: is it a habit or routine?",
          text: "Does it happen again and again? Every day? Every week? On Mondays? Then the present simple is your tense.",
          examples: [{ english: "I get up at seven o'clock.", note: "Every morning — a habit." }],
        },
        {
          title: "Step 2 — Ask: is it always true?",
          text: "Facts do not change. The sun rises. Water boils. Cats sleep. The present simple carries facts too.",
          examples: [{ english: "The sun rises in the east.", note: "A fact — true yesterday, true tomorrow." }],
        },
        {
          title: "Step 3 — Look for the signal words",
          text: "every day, always, usually, often, sometimes, never, on Mondays — these words shout: present simple!",
          examples: [{ english: "We usually play cricket on Sundays.", note: "usually + on Sundays — two habit signals in one sentence." }],
        },
      ]),
      GR(
        "The two big uses (plus timetables)",
        "Habits and routines: I drink tea every morning. Facts: The sun rises in the east. Timetables: The bus leaves at eight. Signal words: every day, always, usually, often, sometimes, never, on Mondays.",
        [
          { english: "She works in a hospital.", translation: "Her job — a routine that repeats every week." },
          { english: "Cats sleep sixteen hours a day.", translation: "A general fact about all cats." },
          { english: "The train arrives at 6:45.", translation: "A timetable — the present simple makes it official." },
        ],
        [
          "“Right now” is NOT one of the uses. For this moment, English uses a different tense — it arrives in Chapter 17.",
        ],
      ),
      TB(
        "Three uses, clear signals",
        ["Use", "Signal words", "Example"],
        [
          ["Habits and routines", "every day, always, usually, on Mondays", "I drink tea every morning."],
          ["Facts and general truths", "always true, no signal needed", "The sun rises in the east."],
          ["Timetables and schedules", "at eight, from nine to five", "The bus leaves at eight."],
        ],
        "Find the signal word, find the use.",
      ),
      AU(
        "Listen: habits and facts",
        "I get up at seven. She works in a hospital. The sun rises in the east. The bus leaves at eight. We play cricket on Sundays.",
        0.85,
      ),
      AU(
        "Listen: a real routine",
        "Hi! I'm Sara. I get up at six. I have breakfast with my family. Then I walk to school with my brother. In the evening, I study English. I go to bed at ten.",
        0.9,
      ),
      EXD(
        "The present simple in real life",
        [
          { english: "I drink tea every morning.", note: "every morning — the habit signal. With I, the verb stays plain: drink.", domain: "everyday" },
          { english: "She works in a hospital.", note: "One woman → works with -s. Her weekly routine.", domain: "work" },
          { english: "My father cooks dinner on Fridays.", note: "on Fridays — a family routine. cooks takes -s.", domain: "family" },
          { english: "The bus leaves at eight.", note: "Timetables use the present simple. The bus = it → leaves.", domain: "travel" },
          { english: "We study English on Mondays and Thursdays.", note: "Two days, one habit. we → no -s.", domain: "education" },
          { english: "Cats sleep sixteen hours a day.", note: "A general fact — true for all cats, every day.", domain: "nature" },
          { english: "This shop opens at nine and closes at six.", note: "Shop hours are a schedule. opens and closes — both with -s.", domain: "shopping" },
          { english: "My little sister watches television after lunch.", note: "A daily routine at home. watch becomes watches.", domain: "home" },
          { english: "Water boils at 100 degrees.", note: "A fact of science — always true, everywhere.", domain: "food" },
        ],
        "Nine sentences from nine parts of life — one tense carries them all.",
      ),
      US(
        [
          {
            situation: "Telling a friend about your week",
            example: "“I play cricket on Saturdays.”",
            note: "on Saturdays — a weekly habit.",
          },
          {
            situation: "First day at a new job",
            example: "“The shop opens at nine. We close at six.”",
            note: "Work schedules run on the present simple.",
          },
          {
            situation: "Talking about family",
            example: "“My mother teaches maths. My father drives a bus.”",
            note: "Jobs are routines — teach and drive both take -s.",
          },
          {
            situation: "Small talk at the bus stop",
            example: "“The bus comes at eight. It never comes at seven.”",
            note: "never + present simple: a habit that never happens.",
          },
          {
            situation: "Geography in class",
            example: "“The Nile flows through Egypt.”",
            note: "Facts for schoolwork — always true.",
          },
        ],
        "Where the present simple lives",
        "You will hear this tense in the first five minutes of any English conversation.",
      ),
      DL(
        "Ravi's week",
        "Ravi tells his new classmate about his week.",
        [
          ["Nina", "Ravi, what do you do on Saturdays?"],
          ["Ravi", "I help my father in his shop."],
          ["Nina", "Every Saturday?"],
          ["Ravi", "Yes! The shop opens at nine. We sell fruit and milk."],
          ["Nina", "And does the shop open on Sundays?"],
          ["Ravi", "No. On Sundays the shop stays closed. We visit my grandmother."],
          ["Nina", "She lives near the sea, I think."],
          ["Ravi", "Yes! The sea is beautiful there. We swim in the morning."],
        ],
      ),
      CMP(
        "“She works here” or “She is works here”?",
        ["be: who, how, where", "present simple: actions"],
        [
          ["The idea", "She is a nurse. — a description, no action", "She works in a hospital. — an action"],
          ["The verb", "be alone: am, is, are", "the action verb, with -s for he, she, it"],
          ["The mistake", "—", "“She is works in a hospital.” — be never joins an action verb"],
          ["The fix", "A describing word? Use be.", "An action? Use the present simple — alone."],
        ],
        {
          intro: "The number one beginner error with this tense: putting be in front of an action verb.",
          verdict:
            "One verb carries the action. Be describes; the present simple acts. Never write “is works” or “am go”.",
        },
      ),
      MS(
        [
          [
            "She is work in a hospital.",
            "She works in a hospital.",
            "Be never joins an action verb. Work is an action, so the present simple carries it alone.",
          ],
          [
            "I am go to school every day.",
            "I go to school every day.",
            "Every day signals a habit. Habits use the present simple — go alone, with no be.",
          ],
          [
            "He like tea.",
            "He likes tea.",
            "One man → third person → the verb takes -s. The full rule arrives in Lesson 2.",
          ],
          [
            "The sun rise in the east.",
            "The sun rises in the east.",
            "The sun is it → it takes -s. Facts follow the same rule as habits.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "“Now” is different",
        "“I read books every week” is a habit. “I am reading a book now” is this moment. They look similar, but they are different tenses. The now-tense arrives in Chapter 17. Until then, one question decides: does it happen again and again? Use the present simple.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Ravi. I live in a small city. I get up at six every morning. My father opens his fruit shop at eight. The shop closes at six in the evening. On Saturdays I help him. We sell apples, bananas and milk. The people in our street like my father. They say, “Ravi's father sells the best fruit in the city!”",
          task: "Read the text two times. Then find five present simple verbs.",
        },
        writing: {
          task: "Write four sentences: two habits or routines about you, and two facts you know. Use a signal word at least twice.",
          guide: ["I ______ every day.", "On Saturdays I ______.", "The sun ______.", "Cats ______."],
          model: "I drink tea every day. On Saturdays I visit my grandmother. The sun rises in the east. Cats sleep a lot.",
        },
        listening: {
          script:
            "I get up at seven. I have breakfast at eight. The bus leaves at half past eight. School starts at nine. In the evening I watch television. I go to bed at ten.",
          task: "Listen. Write the six times you hear.",
        },
        speaking: {
          task: "Tell a partner two habits and one fact. Use a signal word in each sentence.",
          frames: ["I ______ every day.", "On Saturdays I ______.", "The sun ______."],
          checklist: [
            "I used the present simple — never be + action verb.",
            "I used at least two signal words.",
            "I spoke without reading.",
          ],
        },
      }),
      LSP(
        [
          gls("The present simple describes habits and routines."),
          gls("present simple"),
          gls("habit"),
          gls("routine"),
          gls("every day"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The present simple describes habits, routines, timetables and facts — not this moment.",
        "Signal words: every day, always, usually, often, sometimes, never, on Mondays.",
        "Habits: I drink tea every morning. Facts: The sun rises in the east.",
        "Be never joins an action verb: “She works here”, never “She is works here”.",
        "“Now” is a different tense — it arrives in Chapter 17.",
      ]),
      RV(
        [
          {
            question: "Which word is a helping verb for questions and negatives?",
            options: ["do", "happy", "book"],
            correctIndex: 0,
            explanation: "do and does help other verbs make questions and negatives — you met them in Chapter 12.",
            from: "Chapter 12 · Lesson 5",
          },
          {
            question: "Which pronoun replaces “my sister”?",
            options: ["she", "they", "it"],
            correctIndex: 0,
            explanation: "My sister is one female person, so the subject pronoun is she.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "Every sentence needs a…",
            options: ["question mark", "verb", "colour"],
            correctIndex: 1,
            explanation: "Every sentence needs a verb — and action words count.",
            from: "Chapter 08 · Lesson 4",
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
            "Which sentence is a HABIT?",
            [
              ["a", "I am drinking tea now."],
              ["b", "I drink tea every morning."],
              ["c", "I drank tea yesterday."],
            ],
            "b",
            fbx(
              "I drink tea every morning.",
              "every morning is the habit signal — the action repeats and repeats.",
              "“Now” is this moment; “yesterday” is finished time.",
              { english: "She walks to school every day.", translation: "every day — a habit, so present simple." },
            ),
            { hints: ["Look for the signal words: every day, every morning, usually."] },
          ),
          FB(
            "Complete the sentence about a fact.",
            "The sun ___ in the east.",
            ["rises"],
            fb(
              "rises",
              "The sun is it → third person → rise + s. Facts follow the -s rule too.",
              "The plain form cannot follow the sun: one thing always takes the -s.",
            ),
            { hints: ["The sun = it. What does one thing do to the verb ending?"] },
          ),
          MATCH(
            "Match each sentence to its use.",
            [
              ["s1", "I get up at seven every day."],
              ["s2", "The sun rises in the east."],
              ["s3", "The bus leaves at eight."],
            ],
            [
              ["u1", "timetable"],
              ["u2", "habit"],
              ["u3", "fact"],
            ],
            [
              ["s1", "u2"],
              ["s2", "u3"],
              ["s3", "u1"],
            ],
            fb(
              "I get up at seven every day. → habit · The sun rises in the east. → fact · The bus leaves at eight. → timetable",
              "Ask one question per sentence: does it repeat, stay true always, or run on a clock?",
              "Habits repeat, facts never change, timetables are official — each use has its own signals.",
            ),
            { hints: ["Ask: does it repeat every day, stay true always, or run on a clock?"] },
          ),
          LIS(
            "Listen and answer.",
            "My name is Amna. I get up at six every morning. I have breakfast at seven. Then I walk to school. On Saturdays I help my mother at home.",
            "What does Amna do on Saturdays?",
            ["She helps her mother.", "She helps her mother at home.", "helps her mother"],
            fb(
              "She helps her mother.",
              "On Saturdays points to the weekly routine: she helps her mother at home.",
              "Getting up, breakfast and walking happen on school days, not only Saturdays.",
            ),
            { hints: ["Listen for the day word, then the action after it."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is a general FACT?",
            [
              ["a", "I usually drink tea."],
              ["b", "Water boils at 100 degrees."],
              ["c", "We are at school now."],
            ],
            "b",
            fb("Water boils at 100 degrees.", "A fact is always true — for everyone, every day.", "“Usually” marks a habit; “now” marks this moment."),
          ),
          CORR(
            "Find and correct the mistake.",
            "She is work in a hospital.",
            ["She works in a hospital."],
            fb(
              "She works in a hospital.",
              "Work is an action verb — it never needs be in front of it.",
              "Be joins descriptions, not actions: one verb per idea.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "He plays football on Sundays",
            fb(
              "He plays football on Sundays",
              "Subject (He) + verb with -s (plays) + object (football) + time phrase.",
              "English keeps the verb tight after the subject — time phrases go to the end.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The bus leaves at eight o'clock.",
            ["The bus leaves at eight o'clock."],
            fb(
              "The bus leaves at eight o'clock.",
              "A timetable sentence: the bus = it → leaves with -s.",
              "Timetables use the present simple even for the future journey.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Habit or fact?",
      instructions:
        "Write four sentences with the present simple: two habits or routines about you, and two general facts. Use a signal word (every day, usually, on Mondays…) at least twice. Example: “I drink tea every morning. I help my mother on Saturdays. The sun rises in the east. Cats sleep sixteen hours a day.”",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Write your three most regular activities. Start each with a time signal: “Every morning I…”, “On Saturdays I…”, “After school I…”.",
      "Find two present simple facts in anything you read or watch today. Write them down.",
      "Tell a family member one fact in English: “The sun rises in the east.” Then ask them for one more fact.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Structure and the Third-Person -s
  // =========================================================================
  {
    slug: "ch-13-l-02",
    minutes: 25,
    description:
      "The famous third-person -s: its three spellings (-s, -es, -ies), its three sounds (/s/, /z/, /ɪz/), and the special forms has, goes and does.",
    outcomes: [
      "Add the third-person -s with the right spelling: -s, -es or -ies",
      "Pronounce the ending as /s/, /z/ or /ɪz/",
      "Use the special forms has, goes and does",
      "Spot and fix a missing -s in a sentence",
    ],
    blocks: [
      LI(
        "He works. She plays. It rains. When the subject is he, she or it, the verb takes -s. This little letter is the most famous grammar point in English. In this lesson you learn its three spellings and its three sounds.",
        [
          "You know the subject pronouns I, you, he, she, it, we, they (Chapter 11).",
          "You know that do and does help other verbs (Chapter 12).",
          "You know when to use the present simple: habits, routines and facts (Lesson 1).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "third person", partOfSpeech: "noun", definition: "The person or thing we talk about — not I and not you: he, she, it, one name." },
        { word: "verb", partOfSpeech: "noun", definition: "The action word that carries the sentence." },
        { word: "spelling", partOfSpeech: "noun", definition: "The letters you write for a word — like the -s, -es and -ies endings." },
        { word: "sound", partOfSpeech: "noun", definition: "What you hear — the ending can say /s/, /z/ or /ɪz/." },
      ]),
      H("The most famous -s in English"),
      T(
        "English verbs are lazy. With I, you, we and they, they stay plain: I work, they work. Only one group changes them. That group is he, she and it. It makes the verb take -s: he works, she works, it works.",
      ),
      {
        type: "definition",
        term: "third person",
        partOfSpeech: "noun",
        definition:
          "The third person singular is one other person or thing: he, she, it, my mother, the bus, Sara. In the present simple, the verb adds -s for this group.",
        example: {
          english: "My mother works in a bank.",
          translation: "My mother = she → work becomes works.",
        },
      },
      ST("Add the -s in three steps", [
        {
          title: "Step 1 — Find the subject",
          text: "Who does the action? Say it as a pronoun: he, she, it — or I, you, we, they.",
          examples: [
            { english: "Sara …", note: "One girl → she." },
            { english: "The children …", note: "More than one → they." },
          ],
        },
        {
          title: "Step 2 — Choose the spelling",
          text: "Most verbs take just -s: work → works. Verbs ending in -ch, -sh, -s, -x or -o take -es: watch → watches. Verbs ending in consonant + y change to -ies: study → studies.",
          examples: [
            { english: "She watches television.", note: "watch ends in -ch → watches." },
            { english: "He studies at night.", note: "study → the y leaves, -ies arrives." },
          ],
        },
        {
          title: "Step 3 — Check the special verbs",
          text: "have is special: he has, never “haves”. go and do take -es: goes, does.",
          examples: [
            { english: "He has two brothers.", note: "have → has. An old friend from Chapter 12." },
            { english: "She goes to school by bus.", note: "go → goes with -es." },
          ],
        },
      ]),
      GR(
        "The third-person -s rule",
        "With he, she and it (and one name), the present simple verb takes -s. Spelling: +s (works, plays); +es after -ch, -sh, -s, -x, -o (watches, washes, fixes, goes); consonant + y → -ies (studies, carries).",
        [
          { english: "I work → he works", translation: "Most verbs: just add -s." },
          { english: "You watch → she watches", translation: "After -ch, add -es — the word needs the extra vowel." },
          { english: "We study → he studies", translation: "consonant + y: the y changes to -ies." },
        ],
        [
          "have is irregular: he has, never “he haves”. go and do grow into goes and does.",
        ],
      ),
      TB(
        "The three spellings of the -s ending",
        ["Ending", "Rule", "Examples"],
        [
          ["+s", "most verbs", "work → works, play → plays, eat → eats"],
          ["+es", "after -ch, -sh, -s, -x, -o", "watch → watches, wash → washes, fix → fixes, go → goes"],
          ["y → -ies", "consonant + y", "study → studies, carry → carries, fly → flies"],
          ["irregular", "special verbs", "have → has"],
        ],
        "Say each one with he: he works, he watches, he studies, he has.",
      ),
      TB(
        "The three sounds of the -s ending",
        ["Sound", "After", "Examples"],
        [
          ["/s/", "voiceless sounds: p, t, k, f", "works, sleeps, eats, laughs"],
          ["/z/", "voiced sounds: m, n, l, r, vowels", "plays, runs, sings, comes"],
          ["/ɪz/", "hissing sounds: s, x, ch, sh, ge", "watches, washes, misses, fixes"],
        ],
        "The -es of watches adds a whole new syllable: watch-ES.",
      ),
      AU(
        "Listen: the three sounds",
        "Works. /s/. Sleeps. /s/. Plays. /z/. Runs. /z/. Sings. /z/. Watches. /ɪz/. Washes. /ɪz/. Fixes. /ɪz/. Three sounds, one small ending.",
        0.85,
      ),
      AU(
        "Listen: the -s in real sentences",
        "She works in a bank. He plays cricket. My father watches the news. Sara studies English. The dog runs in the garden. She goes to school by bus.",
        0.9,
      ),
      EXD(
        "he, she and it in real life",
        [
          { english: "Ali gets up at six.", note: "Ali = he → get becomes gets. The -s is not optional.", domain: "everyday" },
          { english: "She teaches maths at our school.", note: "teach ends in -ch → teaches with -es.", domain: "education" },
          { english: "My grandfather watches the news every evening.", note: "watch → watches. every evening — a routine.", domain: "family" },
          { english: "My mother washes the dishes after dinner.", note: "wash ends in -sh → washes, said /ɪz/.", domain: "home" },
          { english: "The bus stops near our street.", note: "The bus = it → stops. p is voiceless, so the ending says /s/.", domain: "travel" },
          { english: "This shop sells fresh bread.", note: "sell → sells. Facts about shops use the present simple.", domain: "shopping" },
          { english: "He fixes phones at the market.", note: "fix ends in -x → fixes, with the extra /ɪz/ syllable.", domain: "technology" },
          { english: "My sister studies medicine.", note: "study → studies. A long routine — five years!", domain: "work" },
          { english: "The baby cries at night.", note: "cry → cries. A fact every new parent knows.", domain: "family" },
        ],
        "Nine third-person sentences — every one carries the -s.",
      ),
      US(
        [
          {
            situation: "Describing a friend",
            example: "“She plays the piano. She sings too.”",
            note: "Two -s verbs in one short introduction.",
          },
          {
            situation: "Talking about your street",
            example: "“The baker opens at seven. He sells bread and cakes.”",
            note: "Shops and their owners live in the third person.",
          },
          {
            situation: "At the bus stop",
            example: "“The eight o'clock bus comes now. It never comes late.”",
            note: "The bus = it: comes.",
          },
          {
            situation: "Homework talk",
            example: "“My brother helps me with maths. He explains everything twice.”",
            note: "help → helps. Routines about family.",
          },
          {
            situation: "Pet talk",
            example: "“My cat sleeps all day. It eats only fish.”",
            note: "The cat = it: sleeps and eats.",
          },
        ],
        "Where the -s lives",
        "He, she and it are everywhere — so the -s is everywhere in real English.",
      ),
      DL(
        "The new teacher",
        "Bilal tells his sister about the new English teacher.",
        [
          ["Sana", "Tell me about the new teacher. What's her name?"],
          ["Bilal", "Her name is Miss Farah. She teaches English, and she speaks very slowly."],
          ["Sana", "Does she give homework?"],
          ["Bilal", "Yes. She gives homework every day! But she helps us a lot."],
          ["Sana", "And Mr Khan? Does he still teach maths?"],
          ["Bilal", "Yes. He always wears his grey coat. And he never smiles!"],
          ["Sana", "Ha! But he teaches well."],
          ["Bilal", "That's true. Everybody says he explains maths very well."],
        ],
      ),
      CMP(
        "“He likes tea” or “He like tea”?",
        ["with the -s ✓", "without the -s ✗"],
        [
          ["The sentence", "He likes tea.", "He like tea."],
          ["Why", "One man = third person → like + s", "he is not they — the -s cannot disappear"],
          ["Say it", "He likeSSS tea — feel the hiss at the end", "“He like tea” sounds cut off to English ears"],
          ["Same rule", "She works. It rains. Sara studies.", "“She work.” “It rain.” — all impossible"],
        ],
        {
          intro: "The most famous mistake in English: dropping the -s after he, she and it.",
          verdict:
            "Every time you say he, she or it, feel the -s on the verb. Make it automatic — like a reflex.",
        },
      ),
      MS(
        [
          [
            "She go to school by bus.",
            "She goes to school by bus.",
            "One girl → third person. go is special: it takes -es, not just -s.",
          ],
          [
            "He watchs television.",
            "He watches television.",
            "After -ch the verb takes -es. “Watchs” is not a possible English spelling.",
          ],
          [
            "She studys English.",
            "She studies English.",
            "consonant + y: the y changes to -ies. study → studies.",
          ],
          [
            "He haves two brothers.",
            "He has two brothers.",
            "have is irregular in the third person: he has. Never “haves”.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "One letter, one big difference",
        "“She work here” and “She works here” are one letter apart — but to an English ear they are different worlds. Dropping the -s is the number one beginner mistake with this tense. Write it, say it, feel it: he works, she works, it works.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "This is my uncle Tariq. He lives in Quetta. He gets up at five every morning. He walks in the garden, and then he opens his small bookshop. The shop closes at eight in the evening. Uncle Tariq sells old books, and he reads one every night. He says, “A book a day keeps the television away!”",
          task: "Read the text two times. Then find six verbs with the -s ending.",
        },
        writing: {
          task: "Write six sentences about ONE person in your family and their day. Use six different verbs with -s, -es or -ies.",
          guide: ["My ______ gets up at ______.", "He / She ______ every morning.", "He / She ______ after lunch.", "In the evening, he / she ______."],
          model: "My grandmother gets up at five. She walks in the garden. She cooks for the family. In the evening she watches television.",
        },
        listening: {
          script:
            "Ammar gets up at six. He runs in the park. He eats breakfast at seven. He goes to school at eight. He plays football after school. He studies English at night.",
          task: "Listen. Count the verbs that end in the /ɪz/ sound.",
        },
        speaking: {
          task: "Describe one friend or family member in five sentences. Every verb must carry its -s.",
          frames: ["My friend's name is ______.", "He / She ______ every day.", "He / She ______ on Sundays.", "He / She never ______."],
          checklist: [
            "Every sentence had he, she or one name as its subject.",
            "Every verb ended in -s, -es or -ies.",
            "I said the ending — I did not swallow it.",
          ],
        },
      }),
      LSP(
        [
          gls("Third person singular adds -s in the present simple."),
          gls("third person"),
          gls("verb"),
          gls("spelling"),
          gls("sound"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "he, she, it and one name → the verb takes -s: he works, Sara works.",
        "Spelling: most verbs +s; after -ch, -sh, -s, -x, -o add -es; consonant + y becomes -ies.",
        "have is irregular: he has. go and do become goes and does.",
        "The ending has three sounds: /s/ after voiceless sounds, /z/ after voiced sounds, /ɪz/ after hissing sounds.",
        "“He like tea” is impossible — the -s is not optional.",
      ]),
      RV(
        [
          {
            question: "Which pronoun replaces “the bus”?",
            options: ["it", "he", "they"],
            correctIndex: 0,
            explanation: "The bus is one thing, so the pronoun is it.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "Which word is the third person of be?",
            options: ["are", "is", "am"],
            correctIndex: 1,
            explanation: "he, she, it → is. The third person of be is is.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which form of have goes with “she”?",
            options: ["have", "has", "haves"],
            correctIndex: 1,
            explanation: "she has — have is the one verb that changes fully in the third person.",
            from: "Chapter 12 · Lesson 4",
          },
          {
            question: "Singular means…",
            options: ["more than one", "one", "two"],
            correctIndex: 1,
            explanation: "Singular means one; plural means more than one.",
            from: "Chapter 10 · Lesson 1",
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
            "One girl watches a programme. Which sentence is correct?",
            [
              ["a", "Sara watch television."],
              ["b", "Sara watches television."],
              ["c", "Sara watchs television."],
            ],
            "b",
            fbx(
              "Sara watches television.",
              "watch ends in -ch, so it takes -es: watches.",
              "“watch” misses the ending; “watchs” is not a possible spelling.",
              { english: "He washes the car on Sundays.", translation: "wash → washes: -sh takes -es." },
            ),
            { hints: ["Look at the last two letters of watch — which spelling rule do they call?"] },
          ),
          FB(
            "Complete with the correct form of study.",
            "My brother ___ English at night.",
            ["studies"],
            fb(
              "studies",
              "study ends in consonant + y → studies, with -ies.",
              "The y never survives in this spelling: not “studys”, not “studies” with a y.",
            ),
            { hints: ["The verb ends in consonant + y. What do those verbs do in the third person?"] },
          ),
          MATCH(
            "Match each verb to its he/she form.",
            [
              ["v1", "go"],
              ["v2", "have"],
              ["v3", "watch"],
            ],
            [
              ["r1", "watches"],
              ["r2", "goes"],
              ["r3", "has"],
            ],
            [
              ["v1", "r2"],
              ["v2", "r3"],
              ["v3", "r1"],
            ],
            fb(
              "go → goes · have → has · watch → watches",
              "Each verb follows its own rule: -es for go, the irregular has, -es for watch.",
              "goes, has and watches are fixed — there is only one right shape for each.",
            ),
            { hints: ["Say each base verb with he out loud, then find its pair."] },
          ),
          LIS(
            "Listen and answer.",
            "My sister gets up at six. She runs in the park. Then she makes breakfast. She goes to work at eight.",
            "What does the speaker's sister do at eight?",
            ["She goes to work.", "She goes to work at eight.", "goes to work"],
            fb(
              "She goes to work.",
              "The last sentence carries the answer: she goes to work at eight.",
              "Getting up, running and breakfast all happen before eight.",
            ),
            { hints: ["The time word eight comes at the very end of the listening."] },
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
              ["a", "He haves a car."],
              ["b", "He has a car."],
              ["c", "He have a car."],
            ],
            "b",
            fb("He has a car.", "have is irregular in the third person: he has.", "“haves” does not exist; “he have” drops the change completely."),
          ),
          CORR(
            "Find and correct the mistake.",
            "She studys medicine at university.",
            ["She studies medicine at university."],
            fb(
              "She studies medicine at university.",
              "consonant + y → -ies: study becomes studies.",
              "The y never survives here: not studys, not studyes.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "He watches television every evening",
            fb(
              "He watches television every evening",
              "Subject (He) + watches with -es + object + time phrase.",
              "The -es spelling belongs to verbs that end in -ch.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My father works in a bank.",
            ["My father works in a bank."],
            fb(
              "My father works in a bank.",
              "My father = he → works, with the /s/ sound after k.",
              "One man = third person, so the verb never stays plain.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "The -s workout",
      instructions:
        "Write the he/she forms of these eight verbs: work, watch, study, play, go, have, fix, eat. Then choose three of them and write one sentence with each. Example: “go → goes. She goes to the market on Fridays.”",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Say ten he/she sentences out loud. Feel the -s every time: he works, she plays, it rains.",
      "Mark the sound of each ending: /s/, /z/ or /ɪz/. Example: works /s/, plays /z/, washes /ɪz/.",
      "Find five third-person verbs in anything you read today. Write them with their subjects.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Affirmative Sentences
  // =========================================================================
  {
    slug: "ch-13-l-03",
    minutes: 25,
    description:
      "Build full positive statements across all the pronouns — and place time phrases correctly: at the start or the end, never in the middle.",
    outcomes: [
      "Build affirmative present simple sentences with every pronoun",
      "Place time phrases correctly: at the start or the end",
      "Choose between plain verbs and -s verbs by counting the doers",
      "Describe a typical day in connected statements",
    ],
    blocks: [
      LI(
        "You know when to use the present simple, and you know the -s. Now you build full positive sentences. Subject, verb, the rest. You will describe your day from morning to night, with every pronoun.",
        [
          "You know English word order: subject, verb, object (Chapter 09).",
          "You know the time words day, week and yesterday (Chapter 12).",
          "You can add the third-person -s with the right spelling (Lesson 2).",
        ],
      ),
      vocGlossary("Words for a day", [
        { word: "morning", partOfSpeech: "noun", definition: "The first part of the day, from sunrise to about twelve o'clock." },
        { word: "afternoon", partOfSpeech: "noun", definition: "The middle of the day, from twelve to about six." },
        { word: "evening", partOfSpeech: "noun", definition: "The end of the day, from six to bedtime." },
        { word: "to get up", partOfSpeech: "verb", definition: "To leave your bed in the morning." },
      ]),
      H("Statements that stick"),
      T(
        "An affirmative sentence says: this happens. It does not ask, and it does not say no. The pattern is the one you know: subject, verb, the rest. Only one thing is new here. With he, she and it, the verb carries the -s from Lesson 2.",
      ),
      {
        type: "definition",
        term: "affirmative sentence",
        partOfSpeech: "noun",
        definition:
          "An affirmative sentence says that something happens: I drink tea. It is the yes-shape of a sentence — no not, no question mark.",
        example: {
          english: "I drink tea every morning.",
          translation: "A statement, plain and true: subject + verb + the rest.",
        },
      },
      ST("Build an affirmative sentence in three steps", [
        {
          title: "Step 1 — Choose the subject",
          text: "Start with the doer: I, my sister, we, the children. The subject decides the verb.",
          examples: [
            { english: "My sister …", note: "One girl → she → the verb will need -s." },
            { english: "The children …", note: "More than one → they → plain verb." },
          ],
        },
        {
          title: "Step 2 — Add the verb (watch the -s)",
          text: "I, you, we and they take the plain verb. He, she and it take the verb with -s, -es or -ies.",
          examples: [
            { english: "I drink tea.", note: "I → drink, plain." },
            { english: "She drinks tea.", note: "she → drinks with -s." },
          ],
        },
        {
          title: "Step 3 — Finish with the rest + a time phrase",
          text: "Add the object, then say when: every morning, at seven, on Mondays. Time phrases live at the start or the end — never between the subject and its verb.",
          examples: [
            { english: "She drinks tea every morning.", note: "Time phrase at the end." },
            { english: "Every morning, she drinks tea.", note: "Time phrase first, then a comma." },
          ],
        },
      ]),
      GR(
        "The affirmative pattern",
        "Subject + verb (+ -s for he, she, it) + the rest. Time phrases go at the start (with a comma) or at the end: every day, at six, in the evening, on Mondays.",
        [
          { english: "I wake up at six o'clock.", translation: "I → plain verb. Time phrase at the end." },
          { english: "My father makes breakfast.", translation: "My father = he → makes with -s." },
          { english: "In the evening, she studies English.", translation: "Time phrase first, comma, then subject + verb." },
        ],
        ["Names count as third person: Sara works. The bus leaves. One name = one -s."],
      ),
      TB(
        "All the pronouns, one verb",
        ["Subject", "Verb", "Example"],
        [
          ["I", "work", "I work in a shop."],
          ["you", "work", "You work hard."],
          ["he", "works", "He works at night."],
          ["she", "works", "She works in a bank."],
          ["it", "works", "The machine works well."],
          ["we", "work", "We work together."],
          ["they", "work", "They work on Sundays."],
        ],
        "Only one group changes: he, she, it. Everyone else shares the plain verb.",
      ),
      AU(
        "Listen: a day in statements",
        "I get up at six. My mother makes breakfast. We eat together. My brother walks to school with me. In the afternoon, I study. In the evening, we watch television.",
        0.85,
      ),
      AU(
        "Listen: feel the -s",
        "She works. He plays. It rains. Sara cooks. The bus stops. Ali studies. Listen for the small hiss at the end of every verb.",
        0.9,
      ),
      EXD(
        "A day in statements",
        [
          { english: "I get up at six o'clock.", note: "I → plain verb get. The first statement of every day.", domain: "everyday" },
          { english: "My father makes breakfast for the family.", note: "My father = he → makes. A morning routine.", domain: "family" },
          { english: "We walk to school together.", note: "we → plain verb. A shared routine.", domain: "education" },
          { english: "The shops open at nine in our street.", note: "The shops = they → open, no -s. Plural subjects stay plain.", domain: "shopping" },
          { english: "In the afternoon, she studies English.", note: "Time phrase first + comma. studies with -ies.", domain: "education" },
          { english: "My mother cooks dinner and my father washes the dishes.", note: "Two statements in one: cooks with -s, washes with -es.", domain: "home" },
          { english: "The last bus leaves at ten.", note: "A timetable fact: the bus = it → leaves.", domain: "travel" },
          { english: "He plays cricket with his friends after work.", note: "he → plays. The -s sound here is /z/.", domain: "sport" },
          { english: "My phone battery lasts one day.", note: "A small fact about a thing: the battery = it → lasts.", domain: "technology" },
        ],
        "Nine true statements about real days — subject, verb, rest, every time.",
      ),
      US(
        [
          {
            situation: "A new friend asks about your day",
            example: "“I get up at seven. I go to school by bus.”",
            note: "Two plain verbs with I — the simplest routine talk.",
          },
          {
            situation: "Describing your family",
            example: "“My mother teaches in a school. My father drives a taxi.”",
            note: "Third-person subjects → -s on both verbs.",
          },
          {
            situation: "Explaining the class timetable",
            example: "“English starts at nine. Maths follows at ten.”",
            note: "Schedules in statements, not questions.",
          },
          {
            situation: "Weekend routines",
            example: "“On Saturdays we visit my grandmother. On Sundays we rest.”",
            note: "On + day — a weekly routine.",
          },
          {
            situation: "Talking about your street",
            example: "“The baker opens at six. The children play there after school.”",
            note: "One shop opens with -s; many children play plain.",
          },
        ],
        "Where statements live",
        "Tell your day in statements — and people know your whole life.",
      ),
      DL(
        "Sameera's day",
        "Sameera describes her typical day to her cousin.",
        [
          ["Cousin", "Sameera, what time do you get up?"],
          ["Sameera", "I get up at half past six. I say my prayers, and then I make breakfast."],
          ["Cousin", "Do your parents get up early too?"],
          ["Sameera", "My mother gets up at five. My father sleeps a little longer!"],
          ["Cousin", "And school? Do you walk?"],
          ["Sameera", "My brother and I walk together. School starts at eight."],
          ["Cousin", "What do you do after school?"],
          ["Sameera", "I do my homework. In the evening, we all watch television. I go to bed at ten."],
        ],
      ),
      CMP(
        "“My brother works” or “My brothers work”?",
        ["One person: he / she / it", "More than one: we / they"],
        [
          ["The subject", "my brother, my sister, the bus, Sara", "my brothers, the buses, Sara and Ali"],
          ["The verb", "works — with -s", "work — plain, no -s"],
          ["Examples", "My brother works in a bank.", "My brothers work in a bank."],
          ["The mistake", "“My brother work…” → add the -s", "“My brothers works…” → drop the -s"],
        ],
        {
          intro: "One letter of the subject changes the verb. Singular takes -s; plural never does.",
          verdict:
            "Count the doers. One → the verb takes -s. More than one → plain verb. The -s belongs to ONE, not to many.",
        },
      ),
      MS(
        [
          [
            "My brothers works in a shop.",
            "My brothers work in a shop.",
            "Two brothers = they. Plural subjects take the plain verb — the -s is only for one.",
          ],
          [
            "I gets up at six.",
            "I get up at six.",
            "I never takes -s. Only he, she and it do.",
          ],
          [
            "She get up at six.",
            "She gets up at six.",
            "One girl → third person → get becomes gets.",
          ],
          [
            "My mother cook dinner every day.",
            "My mother cooks dinner every day.",
            "My mother = she → cooks. One doer needs the -s, even without a pronoun.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Time phrases: start or end — never the middle",
        "Every morning, I run. I run every morning. Both are perfect. But “I every morning run” is impossible in English. The time phrase never comes between the subject and its verb. Put it at the start with a comma, or at the end with nothing.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "This is my friend Hina. She lives near the sea. Hina gets up at five and swims before school. Her mother works at the harbour. She sells fish. Hina's father stays at home. He cooks for the family. In the evening, Hina studies and her little brother plays. On Sundays, they all visit their grandfather.",
          task: "Read the text two times. Then find six verbs with the -s ending.",
        },
        writing: {
          task: "Write six affirmative sentences about your typical day: two with I, two with a family member (he or she), and two with we or they. Add a time phrase to each.",
          guide: ["I ______ at ______.", "My ______ ______s at ______.", "We ______ on ______.", "They ______ in the ______."],
          model: "I get up at six. My father makes breakfast. We walk to school together. My friends play cricket after school.",
        },
        listening: {
          script:
            "Omar gets up at seven. He eats breakfast at half past seven. The school bus comes at eight. Omar plays football in the afternoon. He studies in the evening. He goes to bed at ten.",
          task: "Listen. Write the six things Omar does, in order.",
        },
        speaking: {
          task: "Describe your day in six statements, from morning to night. Use I, one family member and we or they.",
          frames: ["I get up at ______.", "In the morning, I ______.", "My ______ ______s at ______.", "In the evening, we ______."],
          checklist: [
            "Every he/she/it verb carried its -s.",
            "My time phrases came at the start or the end.",
            "I used at least four different verbs.",
          ],
        },
      }),
      LSP(
        [
          gls("English word order is subject, verb, object."),
          gls("third person"),
          gls("morning"),
          gls("afternoon"),
          gls("evening"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Affirmative = subject + verb (+ -s for he, she, it) + the rest.",
        "I, you, we and they take the plain verb: I work, they work.",
        "One name is third person too: Sara works. The bus leaves.",
        "Plural subjects never take -s: my brothers work.",
        "Time phrases go at the start (with a comma) or the end — never in the middle.",
      ]),
      RV(
        [
          {
            question: "Which order is correct English?",
            options: ["Ali reads books.", "Reads Ali books.", "Ali books reads."],
            correctIndex: 0,
            explanation: "Subject, verb, object — the fixed English word order.",
            from: "Chapter 09 · Lesson 4",
          },
          {
            question: "In “The bus stops here.”, what is the subject?",
            options: ["stops", "here", "the bus"],
            correctIndex: 2,
            explanation: "The subject tells us who does the action — the bus does the stopping.",
            from: "Chapter 08 · Lesson 2",
          },
          {
            question: "“The children” is…",
            options: ["singular", "plural", "a name"],
            correctIndex: 1,
            explanation: "Children means more than one child — a plural subject takes a plain verb.",
            from: "Chapter 10 · Lesson 2",
          },
          {
            question: "Which word completes: “Sara ___ two brothers.” (have)?",
            options: ["have", "has", "haves"],
            correctIndex: 1,
            explanation: "Sara = she → has. The third person of have is has.",
            from: "Chapter 12 · Lesson 4",
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
            "Your friend has ONE brother. Which sentence is correct?",
            [
              ["a", "My brother work in a bank."],
              ["b", "My brother works in a bank."],
              ["c", "My brother workes in a bank."],
            ],
            "b",
            fbx(
              "My brother works in a bank.",
              "One brother = he → work + s. After k, the spelling is just -s.",
              "“work” drops the ending; “workes” adds letters that do not belong.",
              { english: "My sister works in a shop.", translation: "One sister → she → works." },
            ),
            { hints: ["Count the doers first: one person or more than one?"] },
          ),
          FB(
            "Complete with the correct form of work.",
            "My sisters ___ in a hospital.",
            ["work"],
            fb(
              "work",
              "My sisters = they. Plural subjects take the plain verb — no -s.",
              "The -s belongs to one doer, not to many: it cannot follow sisters.",
            ),
            { hints: ["The subject is more than one person. What happens to the ending?"] },
          ),
          MATCH(
            "Match each subject to its verb.",
            [
              ["s1", "My mother"],
              ["s2", "The children"],
              ["s3", "My friend and I"],
            ],
            [
              ["v1", "cooks dinner"],
              ["v2", "play in the park"],
              ["v3", "walk to school"],
            ],
            [
              ["s1", "v1"],
              ["s2", "v2"],
              ["s3", "v3"],
            ],
            fb(
              "My mother → cooks dinner · The children → play in the park · My friend and I → walk to school",
              "One doer → verb with -s. More than one → plain verb.",
              "Count the doers before you choose the verb form.",
            ),
            { hints: ["Say each subject as a pronoun first: she, they, we."] },
          ),
          LIS(
            "Listen and answer.",
            "My day is busy. I get up at six. My father drives me to school. Classes start at eight. After school, I play tennis. In the evening, my mother helps me with homework.",
            "Who helps the speaker with homework?",
            ["My mother.", "My mother", "mother"],
            fb(
              "My mother.",
              "The last sentence answers: my mother helps with homework.",
              "The father drives; tennis and classes are other parts of the day.",
            ),
            { hints: ["The answer is in the last sentence."] },
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
              ["a", "My friends plays football."],
              ["b", "My friends play football."],
              ["c", "My friends playing football."],
            ],
            "b",
            fb("My friends play football.", "My friends = they → plain verb play.", "“plays” adds -s to a plural subject; “playing” is not a statement form."),
          ),
          CORR(
            "Find and correct the mistake.",
            "I gets up at seven o'clock.",
            ["I get up at seven o'clock."],
            fb(
              "I get up at seven o'clock.",
              "I never takes the -s — only he, she and it do.",
              "The -s belongs to third person subjects; I is first person.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "She drinks tea every morning",
            fb(
              "She drinks tea every morning",
              "Subject + verb with -s + object + time phrase at the end.",
              "The -s stays on the verb, and the time phrase never splits them.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "In the evening, we watch television.",
            ["In the evening, we watch television."],
            fb(
              "In the evening, we watch television.",
              "Time phrase first, comma, then we + plain verb watch.",
              "we never takes the -s — only he, she and it do.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My day in statements",
      instructions:
        "Write six affirmative present simple sentences about your typical day, from morning to night. Use he, she or a family member at least twice, and a time phrase in every sentence. Example: “I get up at six. My mother makes breakfast. We walk to school together.”",
      minWords: 20,
      maxWords: 65,
    },
    homework: [
      "Say your six sentences out loud twice — once slowly, once fast.",
      "Add a new time phrase to each sentence: every morning, on Mondays, at night, in the afternoon.",
      "Write three sentences about a friend's day. Every verb needs its -s.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Negative Sentences
  // =========================================================================
  {
    slug: "ch-13-l-04",
    minutes: 20,
    description:
      "Don't and doesn't — how English says what is NOT true, with the main verb always in its plain form. The “doesn't works” trap, defused.",
    outcomes: [
      "Form negatives with don't and doesn't + base verb",
      "Avoid the double-s mistake (“doesn't works”)",
      "Match the helper to the subject: don't or doesn't",
      "Say what is not true — and what is true instead",
    ],
    blocks: [
      LI(
        "English says no with two little words: don't and doesn't. They are brothers. Don't works with I, you, we and they. Doesn't works with he, she and it. One rule follows them everywhere. The main verb goes back to its plain form — the -s lives inside doesn't now.",
        [
          "You know that do and does help other verbs (Chapter 12).",
          "You know the third-person -s: she works, he watches (Lesson 2).",
          "You can build affirmative present simple sentences (Lesson 3).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "contraction", partOfSpeech: "noun", definition: "A short form: do + not → don't, does + not → doesn't." },
        { word: "auxiliary verb", partOfSpeech: "noun", definition: "The helping verb. In negatives, do and does carry the not." },
        { word: "to want", partOfSpeech: "verb", definition: "To wish for something: I want water. She wants tea." },
        { word: "to need", partOfSpeech: "verb", definition: "To require something: We need help. He needs sleep." },
      ]),
      H("The negative formula"),
      T(
        "The affirmative says: this happens. The negative says: this does NOT happen. But English action verbs cannot carry not by themselves. So do and does arrive. They pick up the not and walk in front of the main verb. The main verb then relaxes into its plain form.",
      ),
      {
        type: "definition",
        term: "contraction",
        partOfSpeech: "noun",
        definition:
          "don't = do not. doesn't = does not. Two words become one, and the apostrophe holds the place of the missing o.",
        example: {
          english: "She doesn't eat meat.",
          translation: "does + not → doesn't. The main verb eat stays plain.",
        },
      },
      ST("Make a negative in three steps", [
        {
          title: "Step 1 — Say the affirmative first",
          text: "Think the positive version: She works here. Now you know the subject and the verb.",
          examples: [{ english: "She works here.", note: "Start positive — the negative is one change away." }],
        },
        {
          title: "Step 2 — Choose don't or doesn't",
          text: "I, you, we and they take don't. He, she and it take doesn't. The helper stands before the main verb.",
          examples: [
            { english: "They don't work on Sundays.", note: "they → don't." },
            { english: "She doesn't work on Sundays.", note: "she → doesn't." },
          ],
        },
        {
          title: "Step 3 — Return the verb to its plain form",
          text: "After don't or doesn't, the main verb loses every ending. works becomes work. The s is inside doesn't now.",
          examples: [
            { english: "He doesn't work here.", note: "works → work. One s per sentence — doesn't has it." },
          ],
        },
      ]),
      GR(
        "The negative rule",
        "I/you/we/they + don't + plain verb. He/she/it + doesn't + plain verb. The main verb NEVER takes -s in the negative — doesn't already carries it.",
        [
          { english: "I don't drink coffee.", translation: "I → don't. drink stays plain." },
          { english: "She doesn't eat meat.", translation: "she → doesn't. eat stays plain — the s lives inside doesn't." },
          { english: "They don't work on Sundays.", translation: "they → don't. work stays plain." },
        ],
        ["have follows the same rule: I don't have a car. He doesn't have a car — never “doesn't has”."],
      ),
      TB(
        "don't or doesn't?",
        ["Subject", "Helper", "Example"],
        [
          ["I", "don't", "I don't like coffee."],
          ["you", "don't", "You don't listen!"],
          ["he", "doesn't", "He doesn't smoke."],
          ["she", "doesn't", "She doesn't eat meat."],
          ["it", "doesn't", "It doesn't work."],
          ["we", "don't", "We don't watch television."],
          ["they", "don't", "They don't work on Sundays."],
        ],
        "The helper matches the subject — and the main verb always stays plain.",
      ),
      AU(
        "Listen: negatives",
        "I don't drink coffee. She doesn't eat meat. They don't work on Sundays. He doesn't like cold tea. We don't watch television in the morning. It doesn't work.",
        0.85,
      ),
      AU(
        "Listen: saying no politely",
        "Do you want tea? No, thank you. I don't drink tea. Does your brother play cricket? No, he doesn't. He plays football. Do you live here? No, we don't. We live near the park.",
        0.9,
      ),
      EXD(
        "True negatives in real life",
        [
          { english: "I don't drink coffee, but I drink a lot of tea.", note: "Say no first, then what is true. don't for I.", domain: "food" },
          { english: "She doesn't eat meat.", note: "she → doesn't. eat stays plain — one s per sentence.", domain: "food" },
          { english: "He doesn't smoke.", note: "A classic negative about a person's habits.", domain: "health" },
          { english: "We don't watch television in the morning.", note: "A family rule: we → don't.", domain: "home" },
          { english: "The shop doesn't open on Sundays.", note: "The shop = it → doesn't. Timetables say no too.", domain: "shopping" },
          { english: "This bus doesn't stop at the market.", note: "it → doesn't + plain stop. This sentence saves a wrong journey.", domain: "travel" },
          { english: "My phone doesn't work in the basement.", note: "Technology negatives: it → doesn't + plain work.", domain: "technology" },
          { english: "They don't have school on Fridays.", note: "A timetable negative — and have stays plain after don't.", domain: "education" },
          { english: "I don't play cricket, but I watch every match.", note: "A negative and an affirmative, hand in hand.", domain: "sport" },
        ],
        "Nine honest negatives — every main verb plain, every helper chosen by its subject.",
      ),
      US(
        [
          {
            situation: "At a friend's house",
            example: "“No, thank you. I don't drink coffee.”",
            note: "The polite no: don't + plain drink.",
          },
          {
            situation: "Explaining a food rule",
            example: "“We don't eat meat on Mondays.”",
            note: "Family food rules use negatives.",
          },
          {
            situation: "Shop opening hours",
            example: "“I'm sorry. We don't open on Sundays.”",
            note: "The shopkeeper speaks for the shop: we → don't.",
          },
          {
            situation: "Directions at the bus stop",
            example: "“This bus doesn't go to the station. Take the number 12.”",
            note: "doesn't + plain go — it saves a wrong journey.",
          },
          {
            situation: "Talking about hobbies",
            example: "“He doesn't play any sport. He reads.”",
            note: "Negative first, then the true habit.",
          },
        ],
        "Where negatives live",
        "Saying no clearly is a survival skill — don't and doesn't do it politely.",
      ),
      DL(
        "The birthday plan",
        "Sara and her cousin plan a birthday dinner.",
        [
          ["Cousin", "Let's plan the food! Does your grandmother eat meat?"],
          ["Sara", "No, she doesn't. She eats only vegetables and rice."],
          ["Cousin", "Okay, rice then. And your little brother? Does he drink milk?"],
          ["Sara", "He doesn't drink milk, but he loves juice."],
          ["Cousin", "Juice, good. What about cake? We don't want a chocolate cake."],
          ["Sara", "Right. Grandmother doesn't like chocolate. She wants a fruit cake."],
          ["Cousin", "Perfect. Fruit cake, juice, rice and vegetables."],
          ["Sara", "And tea! We all drink tea. Nobody says no to tea."],
        ],
      ),
      CMP(
        "“She doesn't work” or “She doesn't works”?",
        ["doesn't + plain verb ✓", "doesn't + -s verb ✗"],
        [
          ["The pattern", "She doesn't work here.", "She doesn't works here."],
          ["Where the s lives", "inside doesn't: does + not", "nowhere — it is counted twice"],
          ["Say it", "doesn't WORK — the main verb relaxes", "doesn't WORKS — two s-sounds fight"],
          ["The same with don't", "I don't work on Sundays.", "“I don't works” — impossible, same rule"],
        ],
        {
          intro: "The doesn't-goes trap: adding a second s after doesn't.",
          verdict:
            "One sentence, one s. If doesn't is there, the s is already used — the main verb goes plain: doesn't go, doesn't work, doesn't watch.",
        },
      ),
      MS(
        [
          [
            "He don't like tea.",
            "He doesn't like tea.",
            "One man → he → doesn't. don't belongs to I, you, we and they.",
          ],
          [
            "She doesn't works here.",
            "She doesn't work here.",
            "The s already lives inside doesn't. The main verb returns to its plain form: work.",
          ],
          [
            "They no eat meat.",
            "They don't eat meat.",
            "English needs do + not before the verb. “No” answers questions; it never builds negatives.",
          ],
          [
            "I not speak French.",
            "I don't speak French.",
            "Not cannot stand alone before an action verb. don't carries it: do + not → don't.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "One s per sentence",
        "“She doesn't works here” has two s-jobs fighting for one sentence. The rule is strict: the s lives inside doesn't, and the main verb goes back to plain. Write it five times if you must: doesn't work, doesn't go, doesn't watch, doesn't play, doesn't study.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My grandfather is eighty. He doesn't work now, but he doesn't sit all day! He gets up at five. He doesn't drink regular tea — he drinks green tea. He doesn't watch television. He reads. We don't visit him on Mondays, because he walks to the river with his friends. On Sundays, we all eat together. He doesn't eat much, but he talks a lot!",
          task: "Read the text two times. Then find four negatives and say who they are about.",
        },
        writing: {
          task: "Write six negative sentences about you and your family: two with I don't, two with he or she doesn't, and two with we or they don't.",
          guide: ["I don't ______.", "My ______ doesn't ______.", "We don't ______ on ______.", "They don't ______ in the ______."],
          model: "I don't drink coffee. My sister doesn't eat meat. We don't watch television at lunch. My grandparents don't live in this city.",
        },
        listening: {
          script:
            "I don't get up early on Sundays. My mother doesn't like this! We don't eat breakfast at the table. She doesn't cook on Sundays, so we eat bread and eggs. My father doesn't mind. He says Sundays are special.",
          task: "Listen. Who doesn't cook on Sundays?",
        },
        speaking: {
          task: "Tell a partner three true negatives: one about you, one about a family member, one about your family together.",
          frames: ["I don't ______.", "My ______ doesn't ______.", "We don't ______ on ______."],
          checklist: [
            "My helper matched the subject: don't or doesn't.",
            "My main verbs all stayed plain.",
            "I said at least one negative + what is true instead.",
          ],
        },
      }),
      LSP(
        [
          gls("Don't and doesn't make negatives in the present simple."),
          gls("contraction"),
          gls("auxiliary verb"),
          gls("Do and does help other verbs make questions."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Negatives: don't for I, you, we, they; doesn't for he, she, it.",
        "The main verb after don't or doesn't is ALWAYS plain: doesn't work, never “doesn't works”.",
        "don't = do not; doesn't = does not.",
        "“No” answers questions — it never builds a negative sentence.",
        "have follows the rule too: he doesn't have a car.",
      ]),
      RV(
        [
          {
            question: "Which helper goes with “my sister”?",
            options: ["do", "does", "am"],
            correctIndex: 1,
            explanation: "My sister = she → does. Helpers match their subject.",
            from: "Chapter 12 · Lesson 5",
          },
          {
            question: "Which sentence is a correct negative?",
            options: ["He isn't like tea.", "He doesn't like tea.", "He not likes tea."],
            correctIndex: 1,
            explanation: "Action verbs make negatives with doesn't. be never joins an action verb.",
            from: "Chapter 12 · Lesson 6",
          },
          {
            question: "What is the short form of “do not”?",
            options: ["don't", "doesn't", "not do"],
            correctIndex: 0,
            explanation: "do + not → don't. The apostrophe replaces the missing o.",
            from: "Chapter 12 · Lesson 5",
          },
          {
            question: "Which pronoun replaces “the students”?",
            options: ["they", "she", "it"],
            correctIndex: 0,
            explanation: "The students = more than one → they. And they takes don't.",
            from: "Chapter 11 · Lesson 1",
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
            "One man says no to tea. Which sentence is correct?",
            [
              ["a", "He don't like tea."],
              ["b", "He doesn't like tea."],
              ["c", "He doesn't likes tea."],
            ],
            "b",
            fbx(
              "He doesn't like tea.",
              "One man → he → doesn't. And like stays plain after the helper.",
              "“don't” fits I, you, we and they; “likes” doubles the s.",
              { english: "She doesn't drink coffee.", translation: "doesn't + plain drink." },
            ),
            { hints: ["First choose the helper for he. Then check the main verb's ending."] },
          ),
          FB(
            "Complete the negative.",
            "My parents ___ watch television in the morning.",
            ["don't", "do not"],
            fb(
              "don't",
              "My parents = they → don't. watch stays plain.",
              "doesn't fits he, she and it — parents are more than one.",
            ),
            { hints: ["Say the subject as a pronoun: they. Which helper belongs to it?"] },
          ),
          MATCH(
            "Match each statement to its negative.",
            [
              ["s1", "She works here."],
              ["s2", "They work here."],
              ["s3", "I work here."],
            ],
            [
              ["n1", "They don't work here."],
              ["n2", "I don't work here."],
              ["n3", "She doesn't work here."],
            ],
            [
              ["s1", "n3"],
              ["s2", "n1"],
              ["s3", "n2"],
            ],
            fb(
              "She works here. → She doesn't work here. · They work here. → They don't work here. · I work here. → I don't work here.",
              "Keep the subject; swap the verb for don't or doesn't + plain form.",
              "The main verb loses its -s in every negative.",
            ),
            { hints: ["Match the subject first — the helper follows it."] },
          ),
          LIS(
            "Listen and answer.",
            "My name is Kamran. I don't eat breakfast at home. I buy bread on the way to school. My sister doesn't walk with me. She goes by bus. We don't like the same food.",
            "How does Kamran's sister travel to school?",
            ["She goes by bus.", "She goes by bus", "by bus"],
            fb(
              "She goes by bus.",
              "The fourth sentence says it: she goes by bus.",
              "Kamran walks and buys bread — but his sister chooses the bus.",
            ),
            { hints: ["Listen for the sentence about the sister, after the negative."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which negative is correct?",
            [
              ["a", "She doesn't likes meat."],
              ["b", "She doesn't like meat."],
              ["c", "She don't like meat."],
            ],
            "b",
            fb("She doesn't like meat.", "doesn't carries the s; like stays plain.", "“doesn't likes” doubles the s; “don't” fits they, not she."),
          ),
          CORR(
            "Find and correct the mistake.",
            "My brother don't eat eggs.",
            ["My brother doesn't eat eggs."],
            fb(
              "My brother doesn't eat eggs.",
              "My brother = he → doesn't. The helper matches the subject.",
              "don't belongs to I, you, we and they.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the negative sentence.",
            "They don't work on Sundays",
            fb(
              "They don't work on Sundays",
              "Subject + don't + plain verb + time phrase.",
              "The helper hugs the subject; the main verb stays plain after it.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "She doesn't drink coffee.",
            ["She doesn't drink coffee.", "She does not drink coffee."],
            fb(
              "She doesn't drink coffee.",
              "doesn't = does not. One woman → doesn't + plain drink.",
              "The apostrophe replaces the o of not: doesnt and does not both miss the contraction.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Honest negatives",
      instructions:
        "Write six true negative sentences about you and your family: two with I don't, two with he or she doesn't, and two with we or they don't. Then add one sentence saying what IS true instead. Example: “I don't drink coffee. I drink tea.”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Say three things you don't do in the morning. Example: “I don't watch television in the morning.”",
      "Ask a family member what they don't like. Report it: “My father doesn't like loud music.”",
      "Listen for don't and doesn't in a video or song today. Count how many you hear.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Questions and Frequency Adverbs
  // =========================================================================
  {
    slug: "ch-13-l-05",
    minutes: 25,
    description:
      "Do/Does questions with short answers, plus the five frequency dials — always, usually, often, sometimes, never — and their exact position: before main verbs, after be.",
    outcomes: [
      "Form yes/no questions with do and does + base verb",
      "Answer with short answers: Yes, I do. No, she doesn't.",
      "Place the five frequency adverbs before main verbs and after be",
      "Interview someone about their routine",
    ],
    blocks: [
      LI(
        "Two skills in one lesson. First: asking about habits. Do you play cricket? Does she get up early? The helpers do and does move to the front. Second: the frequency dials. Always, usually, often, sometimes, never. They tell us how often — and they have one exact place in the sentence.",
        [
          "You know that do and does help other verbs make questions (Chapter 12).",
          "You know the short answers: Yes, I do. No, she doesn't (Chapter 12).",
          "You can make negatives with don't and doesn't (Lesson 4).",
        ],
      ),
      vocGlossary("The frequency dials", [
        { word: "frequency adverb", partOfSpeech: "noun", definition: "A word that tells us how often: always, usually, often, sometimes, never." },
        { word: "always", partOfSpeech: "adverb", definition: "Every time — one hundred per cent." },
        { word: "usually", partOfSpeech: "adverb", definition: "Most times — about ninety per cent." },
        { word: "sometimes", partOfSpeech: "adverb", definition: "Some times, not others — about half the time." },
        { word: "never", partOfSpeech: "adverb", definition: "At no time — zero. The verb after never stays positive." },
      ]),
      H("Asking about habits"),
      T(
        "In Chapter 12 you met the helpers. Now they do their full job. Do stands before I, you, we and they. Does stands before he, she and it. After the helper, the main verb is plain — always. Then come the short answers. Yes, I do. No, she doesn't.",
      ),
      {
        type: "definition",
        term: "frequency adverb",
        partOfSpeech: "noun",
        definition:
          "A frequency adverb tells us how often something happens: always (every time), usually (most times), often (a lot), sometimes (some times), never (at no time).",
        example: {
          english: "I always have breakfast.",
          translation: "always = every day, without exception.",
        },
      },
      ST("Ask a do/does question in three steps", [
        {
          title: "Step 1 — Put the helper first",
          text: "Do for I, you, we and they. Does for he, she and it. The helper opens the question.",
          examples: [
            { english: "Do you play cricket?", note: "you → do at the front." },
            { english: "Does she play cricket?", note: "she → does at the front." },
          ],
        },
        {
          title: "Step 2 — Add the subject + plain verb",
          text: "After the helper comes the subject, then the main verb in its plain form. works becomes work after does.",
          examples: [
            { english: "Does your brother work here?", note: "does + brother + work. No s on work." },
          ],
        },
        {
          title: "Step 3 — Answer short",
          text: "Echo the helper, never the main verb. Yes, I do. No, she doesn't. Your voice goes up at the end of the question.",
          examples: [
            { english: "Does he like tea? — Yes, he does.", note: "does comes back; like stays away." },
          ],
        },
      ]),
      GR(
        "Do/Does questions",
        "Do + I/you/we/they + plain verb…? Does + he/she/it + plain verb…? Short answers: Yes, I do. / No, she doesn't. The main verb never takes -s in a question — does has it already.",
        [
          { english: "Do you speak English every day?", translation: "do + you + plain speak." },
          { english: "Does your brother work here?", translation: "does + brother + plain work. The s lives in does." },
          { english: "Does she get up early? — No, she doesn't.", translation: "Question with does; short answer with doesn't." },
        ],
        [
          "never means zero — and the verb after it stays positive: “She never eats meat”, never “she never doesn't eat”.",
        ],
      ),
      TB(
        "The frequency dial",
        ["Adverb", "How often", "Example"],
        [
          ["always", "every time (100%)", "I always have breakfast."],
          ["usually", "most times (about 90%)", "He usually walks to school."],
          ["often", "many times (about 70%)", "We often play on Saturdays."],
          ["sometimes", "some times (about 50%)", "She sometimes drinks tea."],
          ["never", "at no time (0%)", "They never watch television."],
        ],
        "Five dials, one question: how often?",
      ),
      GR(
        "Where the frequency adverb goes",
        "Before the main verb: He always eats rice. I never drink coffee. But AFTER be: He is always hungry. She is never late. With be, the adverb jumps over the verb.",
        [
          { english: "He always eats rice.", translation: "always sits before the action verb eats." },
          { english: "He is always hungry.", translation: "With be, always jumps AFTER is." },
          { english: "I am never late for school.", translation: "never follows am — the be-verb." },
        ],
        ["sometimes can also start a sentence: “Sometimes I walk.” That is its special freedom."],
      ),
      AU(
        "Listen: questions with do and does",
        "Do you play cricket? Yes, I do. Does she get up early? No, she doesn't. Do they live here? Yes, they do. Does he like tea? No, he doesn't. He likes milk.",
        0.85,
      ),
      AU(
        "Listen: the frequency dials",
        "I always have breakfast. He usually walks to school. We often play on Saturdays. She sometimes drinks tea. They never watch television. Five dials — hear how often.",
        0.9,
      ),
      EXD(
        "Questions and dials in real life",
        [
          { english: "Do you play cricket after school?", note: "do + you + plain play. The after-school habit question.", domain: "sport" },
          { english: "Does your mother work on Saturdays?", note: "does + one woman + plain work. The s is inside does.", domain: "family" },
          { english: "I always have breakfast at seven.", note: "always before the main verb have.", domain: "food" },
          { english: "He usually walks to school, but sometimes he takes the bus.", note: "Two dials in one sentence — both before their verbs.", domain: "travel" },
          { english: "We often study together in the library.", note: "often before study. A study habit with friends.", domain: "education" },
          { english: "The shop never opens before nine.", note: "The shop = it. never + opens — and never keeps the verb positive.", domain: "shopping" },
          { english: "Does this phone take good photos?", note: "A technology question: does + this phone + plain take.", domain: "technology" },
          { english: "She is never late for work.", note: "With be, never comes after is — never before it.", domain: "work" },
          { english: "Do you often help your grandmother?", note: "A dial can ride inside the question: do + often + plain help.", domain: "social" },
        ],
        "Nine sentences from real life — helpers at the front, dials before the verb.",
      ),
      US(
        [
          {
            situation: "Getting to know a classmate",
            example: "“Do you walk to school? — No, I don't. I take the bus.”",
            note: "The first routine question of every friendship.",
          },
          {
            situation: "Asking about family",
            example: "“Does your father cook? — Yes, he does! Every Sunday.”",
            note: "does + one man + plain cook.",
          },
          {
            situation: "Planning a game",
            example: "“Do you often play on Saturdays? — Sometimes.”",
            note: "Dials answer dial questions.",
          },
          {
            situation: "At the doctor",
            example: "“Do you always eat breakfast? — Usually, doctor.”",
            note: "Health questions run on do + frequency.",
          },
          {
            situation: "Talking about teachers",
            example: "“Is she always strict? — No, she's usually kind.”",
            note: "With be, the dial comes after it: always after is.",
          },
        ],
        "Where the questions live",
        "Interviews, doctors, new friends — everyone asks about habits.",
      ),
      DL(
        "The routine interview",
        "A student interviews her classmate for a school project.",
        [
          ["Sara", "Ken, do you always get up early?"],
          ["Ken", "Yes, I do. I get up at six — even on Sundays!"],
          ["Sara", "Wow. Does your sister get up early too?"],
          ["Ken", "No, she doesn't. She never gets up before ten."],
          ["Sara", "Never! And do you often play sport?"],
          ["Ken", "I sometimes play football. I usually study after school."],
          ["Sara", "Do your parents work on Saturdays?"],
          ["Ken", "My father doesn't. He watches cricket all day!"],
        ],
      ),
      CMP(
        "“He always eats” or “He is always hungry”?",
        ["Action verb: dial BEFORE the verb", "be: dial AFTER the verb"],
        [
          ["The pattern", "always + eats", "is + always"],
          ["Examples", "He always eats rice. I never drink coffee.", "He is always hungry. She is never late."],
          ["The mistake", "“He eats always rice.” — impossible", "“He always is hungry.” — impossible"],
          ["Why", "The dial hugs the main verb from the front", "The dial jumps over the little be-verb"],
        ],
        {
          intro: "One dial, two positions. The verb decides where it goes.",
          verdict:
            "Action verb → the dial goes before it. be → the dial jumps after it. “He always eats” and “He is always hungry” are both right — for different verbs.",
        },
      ),
      MS(
        [
          [
            "Does she works here?",
            "Does she work here?",
            "does carries the s; work stays plain. One s per question.",
          ],
          [
            "I always am happy.",
            "I am always happy.",
            "With be, the dial goes after the verb: am + always.",
          ],
          [
            "He eats always breakfast.",
            "He always eats breakfast.",
            "Frequency adverbs go before the main verb — never after it.",
          ],
          [
            "Do she like music?",
            "Does she like music?",
            "One woman → she → does. The helper matches the subject.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Dials inside questions",
        "Frequency adverbs can ride inside questions too. “Do you often play?” “Does she always win?” The dial still sits before the main verb. The helper do or does simply stands in front of everything.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My friend Zara is very organised. She always writes a list in the morning. She usually walks to school at eight. Her brother Ali is different. He never makes lists! He sometimes forgets his bag. Their mother asks: “Ali, do you often lose things?” Ali laughs. “Sometimes, Ammi. Usually my bag finds me!”",
          task: "Read the text two times. Then find three dials before action verbs and one after be.",
        },
        writing: {
          task: "Write five sentences with five different dials: always, usually, often, sometimes, never. Use an action verb in three sentences and be in two.",
          guide: ["I always ______.", "He usually ______s at ______.", "We often ______ on ______.", "She is sometimes ______.", "They are never ______."],
          model: "I always have breakfast. He usually walks to school. We often play on Fridays. She is sometimes tired. They are never late.",
        },
        listening: {
          script:
            "Do you always get up at six? Yes, I do. Does your brother always get up at six? No, he doesn't. He sometimes gets up at nine! Is he always late for school? No, he's usually on time.",
          task: "Listen. Who sometimes gets up at nine?",
        },
        speaking: {
          task: "Interview a partner with four questions: two with do, two with does. Ask how often with a dial, and answer with short answers.",
          frames: ["Do you always ______?", "Does your ______ often ______?", "Yes, I do. / No, I don't.", "Yes, she does. / No, she doesn't."],
          checklist: [
            "My helpers matched the subjects.",
            "My main verbs all stayed plain.",
            "I used at least two dials in the right position.",
          ],
        },
      }),
      LSP(
        [
          gls("Frequency adverbs tell us how often."),
          gls("Adverbs of frequency go before the main verb."),
          gls("Do and does help other verbs make questions."),
          gls("frequency adverb"),
          gls("always"),
          gls("never"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Questions: Do + I/you/we/they + plain verb; Does + he/she/it + plain verb.",
        "Short answers echo the helper: Yes, I do. No, she doesn't.",
        "The main verb never takes -s in a question — does has it.",
        "Dials: always, usually, often, sometimes, never — they say how often.",
        "Dial position: before action verbs (He always eats), after be (He is always hungry).",
      ]),
      RV(
        [
          {
            question: "Which question is correct for ONE girl?",
            options: ["Do she sing?", "Does she sing?", "Is she sing?"],
            correctIndex: 1,
            explanation: "she → does + plain verb. do fits I, you, we and they.",
            from: "Chapter 12 · Lesson 5",
          },
          {
            question: "Which is the correct short answer: “Do you like tea?”",
            options: ["Yes, I like.", "Yes, I do.", "Yes, I am."],
            correctIndex: 1,
            explanation: "Short answers echo the helper do — never the main verb, never be.",
            from: "Chapter 12 · Lesson 5",
          },
          {
            question: "Which word completes: “The children ___ in the garden.” (be)?",
            options: ["is", "are", "am"],
            correctIndex: 1,
            explanation: "Children = more than one → are. With be, a dial would follow it.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "“Are you ready?” — which verb moved to the front?",
            options: ["be", "do", "have"],
            correctIndex: 0,
            explanation: "be flips to the front alone; action verbs send do instead.",
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
          MCQ(
            "You ask a friend about her ONE sister. Which question is correct?",
            [
              ["a", "Do your sister work here?"],
              ["b", "Does your sister work here?"],
              ["c", "Does your sister works here?"],
            ],
            "b",
            fbx(
              "Does your sister work here?",
              "One sister → does. And work stays plain after the helper.",
              "“Do” fits they-subjects; “works” doubles the s.",
              { english: "Does he play cricket? — Yes, he does.", translation: "does + plain play + short answer does." },
            ),
            { hints: ["Choose the helper for one person first, then check the main verb's ending."] },
          ),
          FB(
            "Complete with the correct form of watch.",
            "My father always ___ the news.",
            ["watches"],
            fb(
              "watches",
              "always sits before the verb, and one man needs watch + es → watches.",
              "The dial never takes the -s — the verb does. And -ch verbs take -es.",
            ),
            { hints: ["Two jobs here: place the dial, then give one man the right verb ending."] },
          ),
          MATCH(
            "Match each question to its short answer.",
            [
              ["q1", "Do you like music?"],
              ["q2", "Does she work here?"],
              ["q3", "Are they at home?"],
            ],
            [
              ["a1", "Yes, she does."],
              ["a2", "Yes, I do."],
              ["a3", "Yes, they are."],
            ],
            [
              ["q1", "a2"],
              ["q2", "a1"],
              ["q3", "a3"],
            ],
            fb(
              "Do you like music? → Yes, I do. · Does she work here? → Yes, she does. · Are they at home? → Yes, they are.",
              "Short answers echo the first verb of the question: do, does or are.",
              "Never repeat the main verb — the helper carries the answer.",
            ),
            { hints: ["Say the first word of each question; that is the word that comes back."] },
          ),
          LIS(
            "Listen and answer.",
            "Do you always walk to school? No, I don't. I usually take the bus. Does the bus come on time? Usually, yes. It is sometimes late on rainy days.",
            "What happens on rainy days?",
            ["The bus is sometimes late.", "The bus is sometimes late", "It is sometimes late."],
            fb(
              "The bus is sometimes late.",
              "The last sentence says it: on rainy days the bus is sometimes late.",
              "Walking and the bus in general are the other parts of the listening.",
            ),
            { hints: ["The answer is in the very last sentence."] },
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
              ["a", "He always is hungry."],
              ["b", "He is always hungry."],
              ["c", "He always hungry."],
            ],
            "b",
            fb("He is always hungry.", "With be, the dial jumps after the verb: is + always.", "“always is” breaks the be-rule; “always hungry” has no verb at all."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Does she works here?",
            ["Does she work here?"],
            fb(
              "Does she work here?",
              "does carries the s; work returns to its plain form.",
              "One s per question — it lives inside does.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the question.",
            "Do you often play tennis",
            fb(
              "Do you often play tennis",
              "Helper + subject + dial + plain verb.",
              "The dial rides inside the question, but always before the main verb.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I never drink coffee at night.",
            ["I never drink coffee at night."],
            fb(
              "I never drink coffee at night.",
              "never + plain drink: the dial sits before the main verb.",
              "never keeps the verb positive — it never needs don't with it.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Mini interview",
      instructions:
        "Write five questions about routines — Do you…? or Does your friend or family member…? — then answer each one honestly with a short answer and one extra sentence. Use three different dials. Example: “Do you always get up early? No, I don't. I usually get up at eight.”",
      minWords: 25,
      maxWords: 80,
    },
    homework: [
      "Interview a family member with three do/does questions. Write their short answers.",
      "Report one answer in your notebook: “My father usually watches the news at nine.”",
      "Say five dial sentences about yourself — one with each dial: always, usually, often, sometimes, never.",
    ],
  },

  // =========================================================================
  // Lesson 6 — Talking About Daily Routines and Chapter Review
  // =========================================================================
  {
    slug: "ch-13-l-06",
    minutes: 25,
    description:
      "The chapter finale: a full daily routine that uses every form — affirmatives, negatives, questions and dials — plus the Chapter 13 review.",
    outcomes: [
      "Describe a complete daily routine from morning to night",
      "Mix affirmative, negative and question forms in one text",
      "Place frequency adverbs correctly in routine talk",
      "Pass the Chapter 13 review",
    ],
    blocks: [
      LI(
        "Everything comes together now. Habits, the -s, negatives, questions, dials — one tense, one real day. In this lesson you describe a full routine, from morning to night. Then you take the Chapter 13 review.",
        [
          "You know be, have and do — the three engine verbs (Chapter 12).",
          "You know the time words day, week and yesterday (Chapter 12).",
          "You can build affirmative, negative and question forms of the present simple (Lessons 2–5).",
        ],
      ),
      vocGlossary("A day in words", [
        { word: "breakfast", partOfSpeech: "noun", definition: "The morning meal. You have breakfast in the morning." },
        { word: "lunch", partOfSpeech: "noun", definition: "The meal in the middle of the day." },
        { word: "dinner", partOfSpeech: "noun", definition: "The evening meal, usually with the family." },
        { word: "weekend", partOfSpeech: "noun", definition: "Saturday and Sunday — the end of the working week." },
      ]),
      H("A full routine, one tense"),
      T(
        "A routine is a story that repeats. Morning, afternoon, evening, night — the same shape every day. Telling it needs everything from this chapter. Statements, negatives, questions, dials. One speaker can use all of them in eight sentences.",
      ),
      {
        type: "definition",
        term: "routine",
        partOfSpeech: "noun",
        definition:
          "A routine is the set of things you do every day, usually in the same order. Breakfast, school, play, dinner, sleep — that is a routine.",
        example: {
          english: "I get up, I have breakfast, I go to school.",
          translation: "Three habits in a row — the shape of every morning.",
        },
      },
      ST("Tell your whole day in three steps", [
        {
          title: "Step 1 — The morning",
          text: "Start with waking up. Get up, have breakfast, go to school or work. Add times: at six, at half past seven.",
          examples: [
            { english: "I get up at six. I have breakfast with my family.", note: "Two I-statements open the day." },
          ],
        },
        {
          title: "Step 2 — The afternoon",
          text: "The middle of the day: work, study, lunch, sport. Mix in a negative or a dial to keep it true.",
          examples: [
            { english: "I work until five. I don't eat lunch at home.", note: "Affirmative + negative — real days have both." },
          ],
        },
        {
          title: "Step 3 — The evening and night",
          text: "Close the day: dinner, family, rest. A dial makes it personal: usually, always, never.",
          examples: [
            {
              english: "In the evening, we usually watch television. I never go to bed after eleven.",
              note: "Time phrase + dial + verb — the whole chapter in one sentence.",
            },
          ],
        },
      ]),
      GR(
        "One verb, four forms",
        "work: I work. / He works. / I don't work. / He doesn't work. / Do you work? / Does he work? The s sits on the verb in statements — and inside does everywhere else.",
        [
          { english: "She works in a shop.", translation: "Statement: the s sits on the verb." },
          { english: "She doesn't work on Sundays.", translation: "Negative: doesn't carries the s; work goes plain." },
          { english: "Does she work on Saturdays? — Yes, she does.", translation: "Question and short answer: does twice, work plain." },
        ],
        ["The complete check: statement → -s on the verb. Negative or question → does + plain verb."],
      ),
      TB(
        "The chapter on one page",
        ["Form", "Pattern", "Example"],
        [
          ["Affirmative", "subject + verb (+ -s for he/she/it)", "She gets up at six."],
          ["Negative", "don't / doesn't + plain verb", "He doesn't eat breakfast."],
          ["Question", "Do / Does + subject + plain verb", "Do they live here?"],
          ["Frequency", "dial + verb (after be)", "I always study. She is never late."],
        ],
        "Four forms, one tense — the whole chapter in a pocket.",
      ),
      AU(
        "Listen: Ravi's day",
        "Ravi gets up at six. He doesn't have breakfast at home — he buys bread on the way. He works in a shop from nine to five. At lunch, he always eats rice. After work, he plays football with his friends. In the evening, he usually studies English. He goes to bed at eleven.",
        0.85,
      ),
      AU(
        "Listen: a weekend routine",
        "On Saturdays, my father doesn't work. We get up late. My mother makes a big breakfast. In the afternoon, we sometimes visit my grandmother. Does she cook for us? She always does! We go home at nine.",
        0.9,
      ),
      EXD(
        "Real routines, full chapter",
        [
          { english: "Ravi gets up at six every morning.", note: "Ravi = he → gets. A routine opening with a time phrase.", domain: "everyday" },
          { english: "He doesn't have breakfast at home.", note: "A negative inside a routine: doesn't + plain have.", domain: "food" },
          { english: "My grandmother always cooks for the family on Sundays.", note: "Dial + -s verb + day phrase — three chapter skills in one line.", domain: "family" },
          { english: "Do you study in the morning or at night?", note: "A routine question: do + plain study.", domain: "education" },
          { english: "The market opens early and closes late.", note: "Two -s verbs: opens, closes. Market hours are a routine too.", domain: "shopping" },
          { english: "We don't work on the weekend.", note: "we → don't. Weekend routines are different for everyone.", domain: "work" },
          { english: "She checks her phone before she gets up.", note: "Two -s verbs in a row: checks, gets. A modern routine.", domain: "technology" },
          { english: "He runs by the river every evening.", note: "run → runs: one man, one habit, one river.", domain: "sport" },
          { english: "I never go to bed without cleaning my teeth.", note: "never + plain go — a healthy routine.", domain: "health" },
        ],
        "Nine sentences, every skill of the chapter — this is what a routine sounds like.",
      ),
      US(
        [
          {
            situation: "Introducing your family to a teacher",
            example: "“My father opens the shop at eight. My mother teaches at home.”",
            note: "Two third-person routines in one introduction.",
          },
          {
            situation: "A doctor asks about your day",
            example: "“Do you eat breakfast? — Usually. I never eat after nine.”",
            note: "Questions and dials: the doctor's daily bread.",
          },
          {
            situation: "Explaining why you are tired",
            example: "“I study at night. I don't sleep much.”",
            note: "Affirmative + negative explain a feeling.",
          },
          {
            situation: "Weekend small talk",
            example: "“What do you do on Saturdays? — I help my father in his shop.”",
            note: "The most common routine question in English.",
          },
          {
            situation: "Describing a friend",
            example: "“Amina never arrives late. She always helps everyone.”",
            note: "Two dials, two -s verbs — a character portrait.",
          },
        ],
        "Where routines live",
        "Interviews, doctors, new friends — your routine is your story.",
      ),
      DL(
        "What do you do?",
        "Two neighbours chat over the garden wall.",
        [
          ["Mrs Ali", "Good morning! You're new here. What do you do?"],
          ["Mr Khan", "I'm a teacher. I teach maths at the boys' school."],
          ["Mrs Ali", "And your wife? Does she work too?"],
          ["Mr Khan", "Yes, she does. She works at the hospital. She doesn't work nights, thank goodness."],
          ["Mrs Ali", "Do you both get up early?"],
          ["Mr Khan", "She gets up at five. I get up at seven — I make the breakfast!"],
          ["Mrs Ali", "Ha! My husband never cooks. He doesn't even make tea."],
          ["Mr Khan", "Send him to me. I teach maths — I can teach tea."],
        ],
      ),
      CMP(
        "be or present simple in your routine?",
        ["be: who, how, where", "present simple: actions"],
        [
          ["The idea", "I am tired at six.", "I get up at six."],
          ["Negatives", "I'm not a morning person.", "I don't get up late."],
          ["Questions", "Are you tired in the morning?", "Do you get up early?"],
          ["Short answers", "Yes, I am.", "Yes, I do."],
        ],
        {
          intro: "One routine, two engines. Be describes the person; the present simple carries the actions.",
          verdict:
            "Feel tired → be. Get up → present simple. A full routine uses both — be for the feelings, present simple for the doing.",
        },
      ),
      MS(
        [
          [
            "She go to school by bus.",
            "She goes to school by bus.",
            "One girl → third person → go becomes goes.",
          ],
          [
            "He don't like tea.",
            "He doesn't like tea.",
            "One man → he → doesn't. don't fits I, you, we and they.",
          ],
          [
            "Does she works here?",
            "Does she work here?",
            "The s lives inside does. The main verb goes plain.",
          ],
          [
            "I always am happy.",
            "I am always happy.",
            "With be, the dial jumps after the verb: am + always.",
          ],
        ],
        "The four mistakes this chapter was built to kill",
      ),
      N(
        "The 1-2-3 check before you speak",
        "One: who is the subject? I, you, we, they → plain verb. He, she, it → -s on the verb. Two: is it negative? don't or doesn't + plain verb. Three: is it a question? Do or Does + subject + plain verb. Three checks, two seconds — and every sentence comes out right.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Amina is a nurse. She works at night, so her routine is upside down. She gets up at four in the afternoon. She has “breakfast” at five, when the sun goes down. She doesn't eat dinner with her family — they eat at one, when she sleeps. On Fridays, she doesn't work. She always visits the market on Friday mornings, and she never goes to bed before midnight. “My routine is strange,” she says, “but I love the quiet nights.”",
          task: "Read the text two times. Then find one negative, one dial sentence, and three -s verbs.",
        },
        writing: {
          task: "Describe your daily routine in six to eight sentences, from morning to night. Include two dials, one negative and one he or she subject.",
          guide: ["I get up at ______.", "In the morning, I ______.", "My ______ ______s at ______.", "I don't ______ in the afternoon.", "In the evening, we usually ______."],
          model: "I get up at six. In the morning, I study English. My mother makes breakfast for us. I don't watch television in the afternoon. In the evening, we usually walk in the park.",
        },
        listening: {
          script:
            "This is my Sunday. I get up late — at nine. I never get up at nine on weekdays! My father makes paratha. We eat together. In the afternoon, I sometimes play cricket with my friends. Does my sister come too? No, she doesn't. She never leaves her books. She studies all weekend!",
          task: "Listen. What does the sister do all weekend?",
        },
        speaking: {
          task: "Describe your full day to a partner: morning, afternoon, evening. Use at least one negative, one dial and one he/she sentence. Then ask your partner one question with do or does.",
          frames: ["I get up at ______.", "Then I ______.", "In the afternoon, I usually ______.", "I don't ______ in the evening.", "Do you ______ too?"],
          checklist: [
            "I used the whole chapter: -s, don't or doesn't, a dial, a question.",
            "My time phrases came at the start or the end.",
            "I spoke for at least one minute.",
          ],
        },
      }),
      LSP(
        [
          gls("The present simple describes habits and routines."),
          gls("Third person singular adds -s in the present simple."),
          gls("Don't and doesn't make negatives in the present simple."),
          gls("Frequency adverbs tell us how often."),
          gls("Adverbs of frequency go before the main verb."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The present simple carries habits, routines, timetables and facts.",
        "he, she, it → the verb takes -s: gets, watches, studies, has.",
        "Negatives: don't or doesn't + plain verb. The s lives inside doesn't.",
        "Questions: Do or Does + subject + plain verb; short answers echo the helper.",
        "Dials go before action verbs and after be: He always eats. He is always hungry.",
      ]),
      RV(
        [
          {
            question: "Which question is correct?",
            options: ["Do you are ready?", "Are you ready?", "Does you ready?"],
            correctIndex: 1,
            explanation: "be flips alone — it never needs do or does.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "Which word completes: “Sara ___ a new phone.” (have)?",
            options: ["have", "has", "haves"],
            correctIndex: 1,
            explanation: "Sara = she → has. have is the verb that changes fully in the third person.",
            from: "Chapter 12 · Lesson 4",
          },
          {
            question: "Which is the correct negative: “He ___ eat meat.”?",
            options: ["don't", "doesn't", "not"],
            correctIndex: 1,
            explanation: "One man → he → doesn't + plain verb.",
            from: "Chapter 12 · Lesson 6",
          },
          {
            question: "Which pronoun replaces “my mother and I”?",
            options: ["we", "they", "she"],
            correctIndex: 0,
            explanation: "Two people including you → we. And we takes plain verbs and don't.",
            from: "Chapter 11 · Lesson 1",
          },
        ],
        { title: "Chapter review — check your base", intro: "Four quick questions from earlier chapters before the final practice." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          RD(
            "Read and answer.",
            "Ravi's day",
            "Ravi gets up at six. He doesn't have breakfast at home — he buys bread on the way. He works in a shop from nine to five. At lunch he always eats rice. After work, he plays football with his friends. In the evening, he usually studies English. He goes to bed at eleven.",
            "What does Ravi always eat for lunch?",
            [
              ["a", "bread"],
              ["b", "rice"],
              ["c", "eggs"],
            ],
            "b",
            fb(
              "rice",
              "The passage says: “At lunch he always eats rice.”",
              "Bread is his breakfast on the way; football and English come later in the day.",
            ),
            { skill: "reading", hints: ["Find the word always in the passage, then read the words after it."] },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "She go to work by bus."],
              ["b", "She goes to work by bus."],
              ["c", "She going to work by bus."],
            ],
            "b",
            fbx(
              "She goes to work by bus.",
              "One woman → she → go becomes goes.",
              "“go” drops the -s; “going” is not the present simple form.",
              { english: "He goes to school by bus.", translation: "he → goes: the -es spelling for go." },
            ),
            { hints: ["One woman = she. What does she do to the verb?"] },
          ),
          FB(
            "Complete the question about ONE brother.",
            "___ your brother work here?",
            ["Does"],
            fb(
              "Does",
              "One brother = he → does at the front, and work stays plain.",
              "do fits I, you, we and they; “Is” cannot join an action verb.",
            ),
            { hints: ["The subject is one man. Which helper opens the question?"] },
          ),
          LIS(
            "Listen and answer.",
            "My mother gets up at five every morning. She makes breakfast for everyone. She doesn't stop until nine at night. Does she ever rest? She never sits down — well, almost never!",
            "How often does the mother sit down?",
            ["Almost never.", "almost never", "Never.", "never"],
            fb(
              "Almost never.",
              "The joke at the end: she never sits down — well, almost never.",
              "She gets up at five and works until nine, but the answer is the last line.",
            ),
            { hints: ["The answer is the very last thing you hear."] },
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
              ["a", "Does she works here?"],
              ["b", "Does she work here?"],
              ["c", "Do she work here?"],
            ],
            "b",
            fb("Does she work here?", "does carries the s; work stays plain after the helper.", "“works” doubles the s; “Do” fits they-subjects, not she."),
          ),
          CORR(
            "Find and correct the mistake.",
            "I always am happy on Fridays.",
            ["I am always happy on Fridays."],
            fb(
              "I am always happy on Fridays.",
              "With be, the dial jumps after the verb: am + always.",
              "Dials only go before action verbs — happy needs be.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the negative sentence.",
            "He doesn't eat meat on Mondays",
            fb(
              "He doesn't eat meat on Mondays",
              "Subject + doesn't + plain verb + object + time phrase.",
              "The s lives inside doesn't — eat never takes an ending here.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "She always gets up at six o'clock.",
            ["She always gets up at six o'clock."],
            fb(
              "She always gets up at six o'clock.",
              "Dial before the verb, -s on the verb, time at the end — the whole chapter in one line.",
              "gets carries the -s; always never does.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My routine, honestly",
      instructions:
        "Describe your daily routine in six to eight sentences, from morning to night. Include: two dial sentences (always, usually…), one negative, one he or she sentence, and one question to a family member. Example: “I get up at six. My mother makes breakfast. I don't watch television in the morning. Do you start work early, Abbu?”",
      minWords: 40,
      maxWords: 110,
    },
    homework: [
      "Record yourself describing your day in eight sentences. Listen back once for the -s sounds.",
      "Write the routine of ONE family member — five sentences, every verb with -s or doesn't.",
      "Ask three people: “What do you do on Sundays?” Report one answer to a friend.",
    ],
  },
];
