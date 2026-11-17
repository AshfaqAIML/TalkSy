/**
 * PROMPT 35 production — Batch C, Chapter 03: Vowels and Consonants.
 *
 * Full v2 teaching standard (see ch-01.ts header). Five lessons: what a
 * vowel is, what a consonant is, short vowel sounds, long vowel sounds and
 * the spelling patterns that identify them — each with worked examples,
 * confusions, mistakes, guided/independent practice, four skills and
 * validated Urdu/Hindi support.
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

export const ch03Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — What Is a Vowel?
  // =========================================================================
  {
    slug: "ch-03-l-01",
    minutes: 20,
    description:
      "Meet the five most important letters in English: A, E, I, O, U — the vowels. Learn why every word needs one and how to find them.",
    outcomes: [
      "Name the five vowels instantly",
      "Explain what makes a vowel special (open mouth, unblocked air)",
      "Find the vowels in any word",
      "Explain the special case of the letter Y",
    ],
    blocks: [
      LI(
        "Five letters do most of the work in English: A, E, I, O and U — the vowels. Without them, no English word can exist. In this lesson you learn what a vowel is, why vowels are different from all other letters, and how to find them in any word.",
        [
          "You know all 26 letters by name and shape (Chapter 2).",
          "You know that letters have names AND sounds (Chapter 2, Lesson 1).",
        ],
      ),
      H("Five letters that carry every word"),
      T(
        "Try to say a word without opening your mouth: “mmm”. You just made a consonant sound. Now open your mouth and let your voice out freely: “aaa”. That is a vowel. Vowels are the open, free-flowing sounds of English — and the letters A, E, I, O, U represent them. Every English word contains at least one vowel, because every word needs at least one open sound.",
      ),
      {
        type: "definition",
        term: "vowel",
        partOfSpeech: "noun",
        definition:
          "A vowel is a speech sound made with an open mouth and free, unblocked air. In English spelling, the vowel letters are A, E, I, O and U. Every English word has at least one vowel.",
        example: {
          english: "c-a-t · t-e-a · b-o-o-k",
          translation: "One, two, two vowels — every word needs at least one.",
        },
      },
      TB(
        "The five vowels",
        ["Letter", "Letter name", "Keyword", "Feel it",
      ],
        [
          ["A a", "“ay”", "apple", "mouth open wide: aaa"],
          ["E e", "“ee”", "egg", "mouth slightly open: eh"],
          ["I i", "“eye”", "igloo", "mouth stretched: ih"],
          ["O o", "“oh”", "orange", "mouth round: oh"],
          ["U u", "“you”", "umbrella", "mouth small then open: uh"],
        ],
        "Say each keyword and hold the vowel: a-a-apple, e-e-egg…",
      ),
      ST(
        "How to feel and find a vowel",
        [
          {
            title: "Step 1 — Say the word slowly",
            text: "Take a word like “sun”. Say it very slowly: ssss-uuu-nnn.",
          },
          {
            title: "Step 2 — Find the open sound",
            text: "Which part opens your mouth completely and lets the voice flow freely? In “sun” it is the “uuu” in the middle — the vowel.",
            examples: [{ english: "s-uuu-n", note: "The uuu is the vowel; s and n close the sound." }],
          },
          {
            title: "Step 3 — Write the vowel letters",
            text: "Mark the vowel letters in the written word: s-U-n. You have found the word’s vowel.",
          },
          {
            title: "Step 4 — Check with your hand",
            text: "Put your fingers lightly on your throat. Vowel sounds make your throat buzz freely (they are voiced). Say “aaaa” — you feel the vibration. Say “sss” — almost none.",
          },
        ],
        "Slow it down, open it up, mark it down.",
      ),
      GR(
        "Every word needs at least one vowel",
        "No English word is written without a vowel letter. Long words often have several. This is why vowels are the first five letters to learn deeply.",
        [
          { english: "cat — 1 vowel", translation: "c-a-t" },
          { english: "family — 2 vowels (a, i)", translation: "f-a-m-i-l-y — and y sometimes helps" },
          { english: "education — 5 vowels", translation: "e-d-u-c-a-t-i-o-n" },
        ],
      ),
      N(
        "The letter Y — the part-time vowel",
        "Y sometimes works as a vowel: in “my”, “happy” and “city” it makes vowel sounds and there is no other vowel (my) or it joins one (happy). Remember the phrase: “A, E, I, O, U — and sometimes Y.”",
      ),
      EXD(
        "Finding vowels in real words",
        [
          { english: "book → b-OO-k", note: "Double O = one vowel sound, two vowel letters.", domain: "education" },
          { english: "tea → t-EA", note: "EA works together as one vowel sound.", domain: "food" },
          { english: "milk → m-I-lk", note: "One short i in the middle.", domain: "food" },
          { english: "family → f-A-m-I-ly", note: "Two vowel letters plus a helping Y.", domain: "family" },
          { english: "computer → c-O-mp-U-t-E-r", note: "Three vowels in a technology word.", domain: "technology" },
          { english: "school → sch-OO-l", note: "A long word with one vowel sound — OO.", domain: "education" },
          { english: "bus → b-U-s", note: "One vowel is enough.", domain: "travel" },
          { english: "university → U-n-I-v-E-rs-I-ty", note: "Five vowel letters — a word full of open sounds.", domain: "education" },
        ],
        "Say each word slowly and feel where your mouth opens.",
      ),
      US(
        [
          {
            situation: "Spelling new words",
            example: "Is it “receve” or “receive”? Check the vowels first.",
            note: "Vowel letters are where most spelling mistakes live.",
          },
          {
            situation: "Reading slowly",
            example: "Stuck on a long word? Find the vowels first, then the pieces around them.",
            note: "Vowels are the skeleton of every word.",
          },
          {
            situation: "Dictionary work",
            example: "Sound it out: c-a-t… the vowel tells you the word family.",
            note: "Chapter 4 turns this into full phonics training.",
          },
          {
            situation: "Texting",
            example: "PPL 2NL? (people tonight?) — even vowel-less text slang is READ with imagined vowels.",
            note: "Your brain fills the vowels in — proof of how central they are.",
          },
        ],
        "Why vowels matter daily",
      ),
      DL(
        "The vowel hunt",
        "A teacher and a student sort the letters on cards.",
        [
          ["Teacher", "All the cards are mixed. Put the five vowels on this side.",
          ],
          ["Student", "A… E… I… O… U.",
          ],
          ["Teacher", "Good. Now this word: “hat”. Which card goes in the middle?",
          ],
          ["Student", "H, A, T — the A. It’s the vowel.",
          ],
          ["Teacher", "And “sit”?",
          ],
          ["Student", "S-I-T: the I.",
          ],
          ["Teacher", "Perfect. You are hunting vowels like a reader.",
          ],
        ],
      ),
      CMP(
        "Vowel sounds vs vowel letters",
        ["Vowel SOUND (what you hear)", "Vowel LETTER (what you write)"],
        [
          ["What it is", "The open sound: aaa, eee, ooo", "The written letter: a, e, i, o, u"],
          ["How many in English", "About 15 vowel sounds", "Exactly 5 vowel letters (+ sometimes y)"],
          ["Why the difference matters", "“book” and “moon” have the same OO letters but different sounds", "Same letters, different sounds — English spelling is not perfectly one-to-one"],
          ["This chapter trains", "Hearing the difference (short vs long)", "Seeing the letters and patterns"],
        ],
        {
          intro: "One of the most important ideas in this chapter — English has more sounds than letters.",
          verdict:
            "Five letters, about fifteen sounds. That is why English spelling takes practice — and why Chapters 3–5 exist.",
        },
      ),
      MS(
        [
          [
            "“S. M. S.” has no vowels.",
            "SMS is an abbreviation — spoken as letter names: S has no vowel sound… but the WORDS behind it (Short Message Service) all have vowels.",
            "Only abbreviations skip vowels. Every real English word contains at least one vowel letter.",
          ],
          [
            "Every vowel letter makes exactly one sound.",
            "One vowel letter can make several sounds (short a in “cat”, long a in “cake”).",
            "Letters are stable; sounds change by pattern. Short and long vowels are Lessons 3 and 4.",
          ],
          [
            "Y is always a vowel.",
            "Y is sometimes a vowel (“my”, “happy”) and sometimes a consonant (“yes”, “yellow”).",
            "At the start of a word, Y is a consonant. At the end or the middle, it often acts as a vowel.",
          ],
        ],
        "Common mistakes",
      ),
      AU(
        "Listen: the five vowel sounds",
        "A — apple. E — egg. I — igloo. O — orange. U — umbrella. Say each sound after me: a, e, i, o, u.",
        0.8,
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Every English word needs a vowel. The five vowel letters are A, E, I, O and U. Sometimes Y helps, like in “my” and “happy”. Vowels are open sounds — your mouth opens and the air flows freely. Consonants close or block the air. In this text, count the vowel letters in the word “sometimes”: s-o-m-e-t-i-m-e-s. How many did you find?",
          task: "Find all the vowel letters in “sometimes”, then in “English”.",
        },
        writing: {
          task: "Write these words and circle the vowel letters: cat, book, milk, family, bus, school.",
          guide: ["c(a)t — circle the a", "b(oo)k", "…"],
          model: "cat: a · book: o, o · milk: i · family: a, i (and y helps) · bus: u · school: o, o",
        },
        listening: {
          script:
            "Apple. Egg. Igloo. Orange. Umbrella. Now you: apple starts with… A! Egg starts with… E! Igloo starts with… I! Orange starts with… O! Umbrella starts with… U!",
          task: "Listen and say the vowel letter for each word with the audio.",
        },
        speaking: {
          task: "Say the five vowel keywords in order, then say each vowel sound alone.",
          frames: ["A — apple — aaa", "E — egg — eh", "I — igloo — ih", "O — orange — oh", "U — umbrella — uh"],
          checklist: [
            "I said all five keywords.",
            "I held each vowel sound for two seconds.",
          ],
        },
      }),
      LSP(
        [
          gls("The vowels are A, E, I, O and U."),
          gls("Every word needs at least one vowel."),
          gls("A letter has a name and a sound."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Vowels are open, free sounds; the vowel letters are A, E, I, O, U.",
        "Every English word needs at least one vowel letter.",
        "Say words slowly and feel where your mouth opens — that is the vowel.",
        "Y is the part-time vowel: vowel in “my” and “happy”, consonant in “yes”.",
        "English has about 15 vowel sounds but only 5 vowel letters — patterns matter (Lessons 3–4).",
      ]),
      RV(
        [
          {
            question: "Which five letters are the vowels?",
            options: ["A E I O U", "B C D F G", "A B C D E"],
            correctIndex: 0,
            explanation: "A, E, I, O and U are the vowel letters; every English word needs at least one.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "What is the fixed question for letter-by-letter information?",
            options: ["How do you spell…?", "How do you say…?", "What is your letter?"],
            correctIndex: 0,
            explanation: "“How do you spell…?” asks for the letters in order.",
            from: "Chapter 02 · Lesson 1",
          },
          {
            question: "Which takes a capital letter in the middle of a sentence?",
            options: ["summer", "Monday", "teacher"],
            correctIndex: 1,
            explanation: "Days of the week always take capitals; seasons and job words stay small.",
            from: "Chapter 02 · Lesson 5",
          },
        ],
        { title: "Revision — do you remember Chapter 2?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "Which letter is NOT a vowel?",
            [
              ["a", "U"],
              ["b", "K"],
              ["c", "I"],
            ],
            "b",
            fb("K", "The vowels are A, E, I, O, U. K is a consonant."),
            { hints: ["Say the five vowels in order — the odd one out is the answer."] },
          ),
          FB(
            "Write the vowel letters in “bus”.",
            "b___s",
            ["u"],
            fb("u", "b-u-s: the only vowel letter is u."),
            { hints: ["Say it slowly: b-uuu-s. Which letter makes the open sound?"] },
          ),
          MCQ(
            "In which word does Y work as a VOWEL?",
            [
              ["a", "yellow"],
              ["b", "yes"],
              ["c", "my"],
            ],
            "c",
            fb("my", "In “my”, Y makes a vowel sound and there is no other vowel. At the start of words (yes, yellow) Y is a consonant."),
            { hints: ["Which word has NO other vowel letter?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "How many vowel letters are in “education”?",
            [
              ["a", "3"],
              ["b", "4"],
              ["c", "5"],
            ],
            "c",
            fb("5", "e-d-u-c-a-t-i-o-n: e, u, a, i, o — five vowel letters."),
          ),
          MCQ(
            "Every English word must contain…",
            [
              ["a", "at least one vowel"],
              ["b", "at least one consonant"],
              ["c", "the letter E"],
            ],
            "a",
            fb("At least one vowel", "Vowels are the skeleton of every word. Some words are ALL vowel (I, a)."),
          ),
          CORR(
            "Find and correct the mistake.",
            "the five vowels is a, e, i, o, u.",
            ["The five vowels are A, E, I, O and U."],
            fb(
              "The five vowels are A, E, I, O and U.",
              "Three fixes: capital T at the start, “are” for a plural subject, and capital letters for the letter names.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Vowel hunt",
      instructions:
        "Write eight words you know from this course (for example: book, family, school). Underline the vowel letters in each word, and write how many vowels each word has. Finish with one sentence: which word surprised you and why?",
      minWords: 10,
      maxWords: 60,
    },
    homework: [
      "Say the five vowel keywords (apple, egg, igloo, orange, umbrella) three times today.",
      "Find five objects around you and write the vowels of each word.",
      "Say “A, E, I, O, U — and sometimes Y” from memory.",
    ],
  },

  // =========================================================================
  // Lesson 2 — What Is a Consonant?
  // =========================================================================
  {
    slug: "ch-03-l-02",
    minutes: 20,
    description:
      "Meet the other 21 letters: the consonants. Learn how they block or shape the air, sort any letter in seconds, and read your first sound-level analysis.",
    outcomes: [
      "Name the 21 consonant letters",
      "Explain what makes a consonant (blocked or shaped air)",
      "Sort any letter as vowel or consonant instantly",
      "Break simple words into vowel and consonant positions",
    ],
    blocks: [
      LI(
        "If vowels are the open doors of English, consonants are the doors that open and close. In this lesson you meet the other 21 letters. You will learn what makes them different from vowels. And you will practise sorting letters at speed — a skill you will use in every reading lesson from now on.",
        [
          "You know the five vowel letters: A, E, I, O, U (Lesson 1).",
          "You know that Y is sometimes a vowel and sometimes a consonant.",
        ],
      ),
      H("The other 21 letters"),
      T(
        "English has 26 letters. Five are vowels. The other 21 are consonants: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z. Consonant sounds are made when your lips, tongue or teeth block or shape the air — “b” closes both lips, “s” pushes air through a narrow gap, “t” taps the tongue.",
      ),
      {
        type: "definition",
        term: "consonant",
        partOfSpeech: "noun",
        definition:
          "A consonant is a speech sound made by blocking or shaping the air with your lips, tongue or teeth. In English spelling, the consonant letters are all the letters except A, E, I, O and U (with Y sometimes joining them).",
        example: {
          english: "b (lips close) · s (narrow gap) · t (tongue tap)",
          translation: "Three different ways to block the air.",
        },
      },
      ST(
        "Feel three kinds of consonant",
        [
          {
            title: "Lip blockers",
            text: "Say “b”, “p”, “m”. Your two lips close and then open. B and P pop the air out; M hums through the nose with closed lips.",
            examples: [{ english: "b · p · m", note: "Lips together, then open." }],
          },
          {
            title: "Tongue shapers",
            text: "Say “t”, “d”, “n”, “l”, “s”. Your tongue touches or comes near the top of your mouth. T and D tap; S hisses through a narrow gap.",
            examples: [{ english: "t · d · n · l · s", note: "Tongue to the top — the biggest consonant family." }],
          },
          {
            title: "Teeth and throat sounds",
            text: "Say “f”, “v”, “th”, “k”, “g”. Air moves between lip and teeth (f, v), through the tongue between the teeth (th), or from the throat (k, g).",
            examples: [{ english: "f · v · th · k · g", note: "Teeth and throat join the team." }],
          },
        ],
        "You do not need the fancy names — you need the FEEL. Say each group three times.",
      ),
      GR(
        "The two-second sort",
        "To sort any letter: say the letter’s SOUND (not its name) and check your mouth. Open and free = vowel. Blocked or shaped = consonant. When in doubt: A, E, I, O, U (and sometimes Y at the end of a word) are the only vowel letters.",
        [
          { english: "s — air through a narrow gap", translation: "consonant" },
          { english: "o — open, free, round", translation: "vowel" },
          { english: "y in “yes” — tongue near the top", translation: "consonant; y in “my” — open sound → vowel" },
        ],
      ),
      TB(
        "The 21 consonant letters — sorted by feel",
        ["Family", "Letters", "Feel"],
        [
          ["Lip sounds", "B, P, M, W", "lips close or round"],
          ["Tongue-tip sounds", "T, D, N, L, S, Z, R", "tongue to the top of the mouth"],
          ["Back-of-mouth sounds", "K, G, NG*", "back of the tongue lifts"],
          ["Teeth sounds", "F, V, TH*, CH*", "air through lips and teeth"],
          ["Others", "C, H, Q, X, Y", "each pairs with a friend: c=k/s, q+u, x=ks"],
        ],
        "*NG, TH and CH are sounds made by letter teams — you will meet them in Chapter 4. The LETTERS are still single consonants.",
      ),
      EXD(
        "Consonants in real words — feel the block",
        [
          { english: "book → b / oo / k", note: "Blocked–open–blocked: the vowel sits between two consonants.", domain: "education" },
          { english: "tea → t / ea", note: "Start blocked, finish open and long.", domain: "food" },
          { english: "phone → ph / o / n / e", note: "PH is a two-letter consonant team with one sound: f.", domain: "technology" },
          { english: "family → f / a / m / i / l / y", note: "Consonants and vowels alternate — very common in English.", domain: "family" },
          { english: "street → s / t / r / ee / t", note: "Three consonants in a row (str!) around one vowel sound.", domain: "home" },
          { english: "shop → sh / o / p", note: "SH is a consonant team with one hissing sound.", domain: "shopping" },
          { english: "music → m / u / s / i / c", note: "Two vowels, two consonant sounds around them.", domain: "everyday" },
          { english: "travel → t / r / a / v / e / l", note: "TR opens the word — another common consonant team.", domain: "travel" },
        ],
        "Say each word slowly and feel where the air is blocked (consonant) and where it flows (vowel).",
      ),
      DL(
        "Vowel or consonant?",
        "A father and daughter play a sorting game at breakfast.",
        [
          ["Father", "Game time. Vowel or consonant: B?"],
          ["Daughter", "Buh — lips close. Consonant!"],
          ["Father", "O?"],
          ["Daughter", "Oh — mouth open, free. Vowel!"],
          ["Father", "Tricky one: Y in “gym”?"],
          ["Daughter", "Gym… g-y-m. The y sounds like a short i. It’s a vowel there!"],
          ["Father", "Champion. Last one: Y in “yogurt”?"],
          ["Daughter", "Yogurt… y at the start. It blocks a little — consonant!"],
        ],
      ),
      CMP(
        "Vowels vs consonants",
        ["Vowels (A, E, I, O, U + sometimes Y)", "Consonants (the other 21 letters)"],
        [
          ["Air flow", "Open and free", "Blocked or shaped"],
          ["Mouth", "Wide open, still", "Lips, tongue or teeth move"],
          ["Voice buzz", "Strong and steady", "Some buzz (b, d, g), some do not (s, t, k)"],
          ["In words", "The skeleton — every word has one", "The frame around the skeleton"],
          ["How many letters", "5 (+ part-time Y)", "21"],
          ["Job in reading", "Carry the loud, singing part of words", "Start, close and connect sounds"],
        ],
        {
          intro: "The complete picture of the alphabet in one table.",
          verdict:
            "Vowels sing, consonants shape. Together they build every word you will ever read.",
        },
      ),
      MS(
        [
          [
            "There are 26 consonants in English.",
            "There are 21 consonant letters (and about 24 consonant sounds).",
            "26 letters − 5 vowels = 21 consonant letters. Do not mix letters and sounds.",
          ],
          [
            "“B” is a consonant because it is not at the start of the alphabet.",
            "“B” is a consonant because its SOUND blocks the air (lips close).",
            "The vowel/consonant question is about SOUND and airflow, not alphabet position.",
          ],
          [
            "“Church” has three consonants: C, H, R… plus more.",
            "“Church” has three consonant SOUNDS: ch-ur-ch — and letters C, H, R, C, H.",
            "Count sounds with your mouth, letters with your eyes. CH is one sound but two letters.",
          ],
        ],
        "Common mistakes",
      ),
      US(
        [
          {
            situation: "Reading new words",
            example: "See “strong”? Find the vowel (o), then read the frame s-t-r…ng around it.",
            note: "Vowel first, consonant frame second — a reading strategy you will refine in Chapter 4.",
          },
          {
            situation: "Spelling",
            example: "Is it “fisical” or “physical”? Listen: f sound, spelled PH.",
            note: "Consonant teams (PH, SH, CH, TH) are spelling’s little traps.",
          },
          {
            situation: "Pronunciation practice",
            example: "TH: tongue truly between the teeth — think, three, thank you.",
            note: "The TH sound does not exist in many languages — train it slowly.",
          },
          {
            situation: "Typing",
            example: "Left hand: Q W E R T · right hand: Y U I O P.",
            note: "Consonants and vowels alternate on the keyboard too.",
          },
        ],
        "Consonants at work",
      ),
      AU(
        "Listen: blocked vs open",
        "Ssss. Shhh. Tuh. Buh. — blocked. Ahh. Eee. Ohh. — open. Feel the difference with every sound.",
        0.8,
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My little sister loves sounds. She says “mmm” when she eats — that is M, a lip consonant. She says “ssss” like a snake — a narrow-gap consonant. She sings “aaaa” in the bath — an open vowel. And she laughs “hahaha” — H is a breathy consonant from the throat. Every sound she loves is either blocked or open.",
          task: "Find one lip consonant, one tongue consonant, one throat consonant and one vowel in the text.",
        },
        writing: {
          task: "Write five words. For each one, mark vowels with V and consonants with C (example: cat = C-V-C).",
          guide: ["cat → C V C", "book → C V V C", "…"],
          model: "cat: C-V-C · book: C-V-V-C · tea: C-V-V · street: C-C-C-V-C · my: C-V (y as vowel)",
        },
        listening: {
          script:
            "Listen and sort. Ahh — open! Vowel. Buh — blocked. Consonant. Eee — vowel. Tuh — consonant. Ooo — vowel. Ssss — consonant. Mmm — consonant. Ih — vowel.",
          task: "Listen and write V for vowel and C for consonant, in order. You should have eight letters.",
        },
        speaking: {
          task: "Say the alphabet slowly. After each letter name, say V or C for its sound.",
          frames: ["A — vowel. B — consonant. C — consonant. …", "Stop at F and check with me."],
          checklist: [
            "I sorted at least the first ten letters.",
            "I said each letter’s sound, not just its name.",
          ],
        },
      }),
      LSP(
        [
          gls("The vowels are A, E, I, O and U."),
          gls("Consonants are all the other letters."),
          gls("A letter has a name and a sound."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Consonants block or shape the air with lips, tongue or teeth.",
        "There are 21 consonant letters; three families by feel: lips, tongue tip, teeth/throat.",
        "Two-second sort: open and free = vowel; blocked or shaped = consonant.",
        "Consonant teams (SH, CH, TH, PH) are one sound, two letters.",
        "In words, vowels carry the singing part; consonants build the frame around them.",
      ]),
      RV(
        [
          {
            question: "Which letter is the part-time vowel?",
            options: ["W", "Y", "H"],
            correctIndex: 1,
            explanation: "Y is a vowel in “my” and “happy”, a consonant in “yes” and “yellow”.",
            from: "Chapter 03 · Lesson 1",
          },
          {
            question: "How many vowel letters does English have?",
            options: ["5", "21", "26"],
            correctIndex: 0,
            explanation: "A, E, I, O, U — five vowel letters (about 15 vowel sounds).",
            from: "Chapter 03 · Lesson 1",
          },
          {
            question: "Which is a capital-letter trap?",
            options: [
              "Summer is written with a capital",
              "July is written with a capital",
              "Teacher is written with a capital",
            ],
            correctIndex: 1,
            explanation: "Months are capitals; seasons and job words stay small.",
            from: "Chapter 02 · Lesson 5",
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
            "How many consonant letters does English have?",
            [
              ["a", "5"],
              ["b", "21"],
              ["c", "26"],
            ],
            "b",
            fb("21", "26 letters − 5 vowels = 21 consonant letters."),
            { hints: ["26 letters in total, 5 of them vowels."] },
          ),
          MCQ(
            "Say the sound of M. Where is the air blocked?",
            [
              ["a", "Lips (closed)"],
              ["b", "Teeth"],
              ["c", "It is not blocked — M is a vowel"],
            ],
            "a",
            fb("Lips (closed)", "M closes both lips and hums through the nose — a lip consonant."),
            { hints: ["Say “mmm” and watch your mouth in a mirror."] },
          ),
          FB(
            "Mark the pattern: milk = C___CC",
            "milk: the vowel is ___ (C–V–C–C pattern).",
            ["i"],
            fb("i", "m-i-l-k: the i is the only vowel, sitting between consonants."),
            { hints: ["Where does your mouth open in “milk”?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "Which word starts with a consonant TEAM (two letters, one sound)?",
            [
              ["a", "shop"],
              ["b", "pot"],
              ["c", "top"],
            ],
            "a",
            fb("shop", "SH is a consonant team — one hissing sound, two letters."),
          ),
          MCQ(
            "“street” has how many consonant letters before the double E?",
            [
              ["a", "Two"],
              ["b", "Three"],
              ["c", "Four"],
            ],
            "b",
            fb("Three", "s-t-r — three consonant letters (str) before the vowel sound ee."),
          ),
          REORD(
            "Order the steps of the two-second sort.",
            "say the letter sound check the air open vowel blocked consonant",
            fb(
              "Say the letter sound → check the air → open = vowel, blocked = consonant",
              "Sound first, airflow second, answer third.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Sound map",
      instructions:
        "Choose five words from this lesson (for example: book, street, phone). For each word write: (1) the word, (2) the vowel letters, (3) the consonant letters, (4) the V-C pattern like C-V-C. Finish with one sentence about the most interesting pattern you found.",
      minWords: 15,
      maxWords: 70,
    },
    homework: [
      "Say the lip family (b, p, m, w) and the tongue family (t, d, n, l, s) five times each.",
      "Find three words with consonant teams (sh, ch, th, ph) in anything you read today.",
      "Play the two-second sort with a friend: ten letters each.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Short Vowel Sounds
  // =========================================================================
  {
    slug: "ch-03-l-03",
    minutes: 25,
    description:
      "The five short vowels — the quick sounds of cat, bed, sit, hot and cup — and the CVC pattern that makes reading your first hundred words possible.",
    outcomes: [
      "Hear and say the five short vowel sounds",
      "Read CVC words (consonant–vowel–consonant) confidently",
      "Sort words by their short vowel sound",
      "Use short vowels in your own spelling",
    ],
    blocks: [
      LI(
        "Today you learn the five SHORT vowel sounds — the quick, snappy sounds in cat, bed, sit, hot and cup. They are the engine of thousands of simple English words. The CVC pattern (consonant–vowel–consonant) built on them is your key to reading your first hundred words.",
        [
          "You know the vowel letters A, E, I, O, U (Lesson 1).",
          "You know that letters have names and sounds (Chapter 2).",
        ],
      ),
      H("Five short, quick sounds"),
      T(
        "Each vowel letter has a SHORT sound — the quick sound it makes in simple words. The short A of “cat”, the short E of “bed”, the short I of “sit”, the short O of “hot” and the short U of “cup”. Short vowels are quick: you cannot sing them for long without the word falling apart.",
      ),
      TB(
        "The five short vowels",
        ["Letter", "Short sound", "Keyword", "Say it"],
        [
          ["A", "/æ/ aaa", "cat", "mouth wide: c-aaa-t"],
          ["E", "/e/ eh", "bed", "mouth half-open: b-eh-d"],
          ["I", "/ɪ/ ih", "sit", "mouth stretched: s-ih-t"],
          ["O", "/ɒ/ oh*", "hot", "mouth round and short: h-oh-t"],
          ["U", "/ʌ/ uh", "cup", "mouth relaxed: c-uh-p"],
        ],
        "*The short O is quick and round — not the long “oh” of “go”. Keywords beat symbols: cat, bed, sit, hot, cup.",
      ),
      GR(
        "The CVC pattern",
        "Consonant–Vowel–Consonant: one short vowel between two consonants makes the simplest, most reliable word family in English. In CVC words, the vowel is almost always short.",
        [
          { english: "c-a-t · b-e-d · s-i-t", translation: "Three letters, one short vowel, one word." },
          { english: "h-o-t · c-u-p · d-o-g", translation: "The pattern repeats with every vowel." },
        ],
      ),
      ST(
        "Read a CVC word in three steps",
        [
          {
            title: "Step 1 — Find the vowel",
            text: "Look at the word “pan”. The vowel is A in the middle.",
            examples: [{ english: "p-A-n", note: "Vowel found in the middle." }],
          },
          {
            title: "Step 2 — Say the short sound",
            text: "Say the short A: “aaa”, like in cat.",
            examples: [{ english: "aaa", note: "Short A, quick and wide." }],
          },
          {
            title: "Step 3 — Blend the sounds together",
            text: "Say all three sounds smoothly, faster and faster until they join: p-aaa-n → paaan → pan.",
            examples: [{ english: "p-aaa-n → pan", note: "Blending — the core reading skill of Chapter 4." }],
          },
        ],
        "Find the vowel, say its short sound, blend. This is a preview of full phonics.",
      ),
      EXD(
        "Short vowel word families",
        [
          { english: "cat · hat · mat · sat · fan · man", note: "Short A family — change the first letter only.", domain: "everyday" },
          { english: "bed · red · leg · pen · ten · hen", note: "Short E family.", domain: "everyday" },
          { english: "sit · big · dig · win · fish · milk", note: "Short I family — the most common short vowel.", domain: "food" },
          { english: "hot · top · dog · box · shop · stop", note: "Short O family.", domain: "shopping" },
          { english: "cup · bus · sun · run · jump · lunch", note: "Short U family.", domain: "travel" },
          { english: "bed and breakfast — B&B", note: "Two CVC words in one famous travel phrase.", domain: "travel" },
          { english: "pin number · PIN", note: "PIN = Personal Identification Number — and a short-I word.", domain: "technology" },
          { english: "bus stop · hot dog · cup cake", note: "CVC words team up in real compound words.", domain: "everyday" },
        ],
        "Read each family out loud — the rhyme trains your ear faster than any rule.",
      ),
      DL(
        "Shopping with short vowels",
        "A customer buys breakfast items at a corner shop.",
        [
          ["Customer", "Hello! A carton of milk, please."],
          ["Shopkeeper", "Milk… here you are. Anything else?"],
          ["Customer", "Six eggs and a pen — I need to write a list."],
          ["Shopkeeper", "Eggs and a pen. That’s it?"],
          ["Customer", "Yes — and one hot bun, please! It smells wonderful."],
          ["Shopkeeper", "One bun! Milk, eggs, a pen and a bun. Enjoy your breakfast!"],
        ],
      ),
      CMP(
        "Short A vs short E — the closest pair",
        ["Short A (cat, hat, man)", "Short E (bed, red, men)"],
        [
          ["Mouth shape", "Wide open", "Half open, relaxed"],
          ["Feel", "“aaa” — the doctor sound", "“eh” — the thinking sound"],
          ["Test words", "cat, fan, bag, hat", "bed, pen, leg, red"],
          ["Classic confusion", "“bad” vs “bed”", "Say both slowly — a is wider than e"],
          ["Practice pair", "“I feel bad about the bed.”", "One sentence, both vowels: bad (a) and bed (e)."],
        ],
        {
          intro: "Most languages do not separate these two sounds — English does, and words depend on it.",
          verdict:
            "Drill the pair “cat/bed” ten times and check your mouth in a mirror: A is wider, E is more relaxed.",
        },
      ),
      MS(
        [
          [
            "Reading “pan” as “pane” or “pain”",
            "pan (short a: paaa-n)",
            "In a CVC word the vowel is short. Long sounds need a pattern from Lesson 4 (like the magic e in “pane”).",
          ],
          [
            "Spelling “bed” as “bad”",
            "bed (short e: b-eh-d)",
            "Say the word and check your mouth: wide = a (bad), relaxed = e (bed). The sentence “The bed is bad” has both!",
          ],
          [
            "“ship” and “sheep” are the same word.",
            "ship (short i) ≠ sheep (long ee)",
            "Short I is quick (“ih”); long EE is the letter name (“ee”). Lesson 4 trains the long sounds.",
          ],
        ],
        "Common mistakes",
      ),
      US(
        [
          {
            situation: "Ordering food",
            example: "A hot dog and a cup of tea, please.",
            note: "hot (short o) · cup (short u) — lunch is full of CVC words.",
          },
          {
            situation: "Catching a bus",
            example: "Which bus goes to the stop near the bank?",
            note: "bus · stop · bank — three CVC words in one question.",
          },
          {
            situation: "At school",
            example: "Sit on the mat and read the big red book.",
            note: "Children’s first reading books are CVC on purpose.",
          },
          {
            situation: "Texting",
            example: "Get milk n eggs plz (please)",
            note: "Even in slang, the short vowels stay: milk, eggs.",
          },
        ],
        "Short vowels in daily life",
      ),
      AU(
        "Listen: five short vowels in CVC words",
        "Cat. Bed. Sit. Hot. Cup. Again: cat, bed, sit, hot, cup. Say each word after me.",
        0.8,
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Sam has a red pen. He sits on a mat. His cat runs to the box. The sun is hot. Sam gets a cup of milk for himself and a big hug for the cat.",
          task: "Read the story twice. Then write every CVC word you find (there are at least ten).",
        },
        writing: {
          task: "Write three CVC words for each short vowel — your own word families.",
          guide: ["Short a: c_t, h_t, m_t…", "Short e: b_d, r_d…", "Short i, o, u: …"],
          model: "Short a: cat, hat, map. Short e: bed, pen, leg. Short i: sit, big, win. Short o: hot, top, dog. Short u: cup, bus, run.",
        },
        listening: {
          script:
            "Listen carefully. Is the vowel short or long? Cat — short! Cake — long! Bed — short! Sit — short! Bike — long! Hot — short! Cup — short! Cute — long!",
          task: "Listen and write S for short and L for long. You will hear eight words.",
        },
        speaking: {
          task: "Say this short-vowel sentence at speed: “Sam sits on a mat with his cat and a cup of milk.”",
          frames: ["Sam sits on a mat…", "…with his cat…", "…and a cup of milk."],
          checklist: [
            "I said all the CVC words clearly.",
            "I kept the vowels short and quick.",
          ],
        },
      }),
      LSP(
        [
          gls("The vowels are A, E, I, O and U."),
          gls("A short vowel makes a quick sound."),
          gls("Sounds join together to make words."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Five short vowels: a (cat), e (bed), i (sit), o (hot), u (cup).",
        "In CVC words (consonant–vowel–consonant), the vowel is almost always short.",
        "Reading a CVC word: find the vowel → say the short sound → blend.",
        "Short A vs short E is the classic confusion: “bad” vs “bed” — check your mouth width.",
        "ship (short i) ≠ sheep (long ee) — short and long vowels change meaning.",
      ]),
      RV(
        [
          {
            question: "What does CVC stand for?",
            options: [
              "Consonant–Vowel–Consonant",
              "Clear–Voice–Clear",
              "Consonant–Vowel–Consonant–Vowel",
            ],
            correctIndex: 0,
            explanation: "CVC = consonant–vowel–consonant: cat, bed, sit, hot, cup.",
            from: "Chapter 03 · Lesson 3",
          },
          {
            question: "How many consonant letters does English have?",
            options: ["5", "21", "26"],
            correctIndex: 1,
            explanation: "26 − 5 vowels = 21 consonants.",
            from: "Chapter 03 · Lesson 2",
          },
          {
            question: "Which is a lip consonant?",
            options: ["m", "t", "s"],
            correctIndex: 0,
            explanation: "M closes both lips — the lip consonant family is B, P, M, W.",
            from: "Chapter 03 · Lesson 2",
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
            "Which word has a short A sound?",
            [
              ["a", "bed"],
              ["b", "cat"],
              ["c", "cup"],
            ],
            "b",
            fb("cat", "Short A is the “aaa” in cat, hat, man — mouth wide open."),
            { hints: ["Say “aaa” like at the doctor’s — which word has it?"] },
          ),
          FB(
            "Complete with the right short vowel: c__p (a drink holder).",
            "c ___ p (a drink holder)",
            ["u"],
            fb("u", "c-u-p: short U, as in cup, bus, run."),
            { hints: ["The word is what you drink tea from. Which vowel makes the “uh” sound?"] },
          ),
          MCQ(
            "“sit” and “sat” differ in…",
            [
              ["a", "the consonants"],
              ["b", "the vowel sound only"],
              ["c", "nothing"],
            ],
            "b",
            fb("The vowel sound only", "s-i-t (short i) vs s-a-t (short a) — one vowel changes the whole word."),
            { hints: ["Say both words. Which letter changes?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "Which word does NOT belong to the short I family?",
            [
              ["a", "big"],
              ["b", "fish"],
              ["c", "hot"],
            ],
            "c",
            fb("hot", "Hot has short O. Big and fish have short I."),
          ),
          MCQ(
            "Which pair has the SAME vowel sound?",
            [
              ["a", "bed / bad"],
              ["b", "pen / ten"],
              ["c", "cup / cap"],
            ],
            "b",
            fb("pen / ten", "Both have short E. Bed/bad differ (e vs a); cup/cap differ (u vs a)."),
          ),
          CORR(
            "Read the word and fix the spelling.",
            "I s_t on the mat. (past of “sit”)",
            ["sat", "sot", "sut"],
            fb(
              "sat",
              "The past of “sit” is “sat” with a short A — s-a-t rhymes with cat and hat.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My CVC families",
      instructions:
        "Build your own short-vowel families: write five words for each short vowel (a, e, i, o, u) — real words only, and at least three of the twenty-five words must be new to you. Then write one sentence that uses at least four CVC words.",
      minWords: 20,
      maxWords: 80,
    },
    homework: [
      "Read the CVC word families out loud three times this week.",
      "Find ten CVC words in anything you read today (signs and messages count).",
      "Practise the tricky pair: “The bed is bad.” — ten times, checking your mouth.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Long Vowel Sounds
  // =========================================================================
  {
    slug: "ch-03-l-04",
    minutes: 25,
    description:
      "When vowels say their own names — the long sounds of cake, keep, bike, home and cute — and the two patterns that create them: magic-e and vowel teams.",
    outcomes: [
      "Hear and say the five long vowel sounds",
      "Explain the magic-e pattern (cake, bike, home)",
      "Recognise vowel teams (ai, ee, oa…) as long-sound markers",
      "Sort words into short-vowel and long-vowel groups",
    ],
    blocks: [
      LI(
        "In Lesson 3 the vowels made quick, short sounds. Today they say their own NAMES — the long sounds in cake, keep, bike, home and cute. Two spelling patterns create most long vowels: the famous magic-e and the vowel teams. Learn both and hundreds of new words open up.",
        [
          "You can hear and say the five short vowels (Lesson 3).",
          "You can read CVC words (Lesson 3).",
        ],
      ),
      H("The long vowel says its own name"),
      T(
        "A long vowel says the letter’s NAME. Long A sounds like “ay” (cake), long E like “ee” (keep), long I like “eye” (bike), long O like “oh” (home) and long U like “you” (cute). This gives you a simple test: if the vowel in the word says its own name, it is long.",
      ),
      {
        type: "definition",
        term: "long vowel",
        partOfSpeech: "noun phrase",
        definition:
          "A long vowel is a vowel sound that says the letter’s own name: a = “ay”, e = “ee”, i = “eye”, o = “oh”, u = “you”. Long vowels usually appear with a spelling pattern: magic-e or a vowel team.",
        example: {
          english: "cake · keep · bike · home · cute",
          translation: "Five words, five long vowels, five name-sounds.",
        },
      },
      ST(
        "The two patterns that make long vowels",
        [
          {
            title: "Pattern 1 — Magic-e (a_e, i_e, o_e, u_e)",
            text: "One consonant + vowel + silent final E. The silent E reaches back and makes the vowel say its name: c-a-k-e → “ay”.",
            examples: [
              { english: "cap → cape", note: "Short a becomes long a when magic-e joins." },
              { english: "kit → kite · hop → hope · cub → cube", note: "The same trick for i, o, u." },
            ],
          },
          {
            title: "Pattern 2 — Vowel teams (ai, ee, oa, ea…)",
            text: "Two vowels together usually team up: the first says its name, the second stays silent. “Rain” (ay), “meat” (ee), “boat” (oh).",
            examples: [
              { english: "ai — rain, train, wait", note: "Team says “ay”." },
              { english: "ee — see, tree, week · ea — eat, meat, sea", note: "Teams say “ee”." },
              { english: "oa — boat, road, coat", note: "Team says “oh”." },
            ],
          },
          {
            title: "Watch out — teams are not always long",
            text: "Some teams make unexpected sounds: “bread” (short e sound), “book” (short oo). Learn the common teams first; the exceptions come with reading practice.",
            examples: [{ english: "read (present: “ee”) vs read (past: “e”)", note: "Even spelling keeps surprises — context decides." }],
          },
        ],
      ),
      GR(
        "The magic-e rule",
        "Vowel + consonant + silent E at the end of a word → the vowel is long and says its name. The final E is silent: it is a signal, not a sound.",
        [
          { english: "hat → hate · bit → bite", translation: "Add magic-e, hear the change." },
          { english: "not → note · cut → cute", translation: "One silent letter, one long sound." },
        ],
        ["The E is silent — but never useless. It is working from the end of the word."],
      ),
      CMP(
        "Short vowel vs long vowel",
        ["SHORT (Lesson 3)", "LONG (this lesson)"],
        [
          ["Sound", "Quick: aaa, eh, ih, oh, uh", "The letter’s name: ay, ee, eye, oh, you"],
          ["Pattern", "CVC, no helper: cat, bed, sit", "Magic-e (cake) or vowel team (rain)"],
          ["Test", "Say it fast — it stays short", "The vowel “sings” its name"],
          ["Word pairs", "cap / cape · bit / bite · not / note", "One letter changes the meaning"],
          ["Example sentence", "“I sit with a big cat.”", "“I ride my bike and smile.”"],
        ],
        {
          intro: "The same five letters, two sound systems — and meaning depends on them.",
          verdict:
            "Check the pattern: CVC alone = short. Magic-e or a vowel team = usually long.",
        },
      ),
      EXD(
        "Short vs long — minimal pairs",
        [
          { english: "cap (hat) / cape (hero wears one)", note: "Short a vs long a (magic-e).", domain: "everyday" },
          { english: "bit (a little) / bite (with teeth)", note: "Short i vs long i.", domain: "food" },
          { english: "not / note (a short message)", note: "Short o vs long o.", domain: "work" },
          { english: "cub (baby animal) / cube (square box)", note: "Short u vs long u.", domain: "education" },
          { english: "pin (sharp point) / pine (tree)", note: "Short i vs long i — one letter apart.", domain: "nature" },
          { english: "plan (what you will do) / plane (flies)", note: "Short a vs long a.", domain: "travel" },
          { english: "hope you feel fine on the plane", note: "Two long vowels in one friendly sentence.", domain: "travel" },
        ],
        "Read each pair twice: short first, then long. Feel the vowel stretch.",
      ),
      US(
        [
          {
            situation: "Travel",
            example: "Take the plane, not the train — wait, both are long A!",
            note: "ai in train, a_e in plane: two patterns, one sound.",
          },
          {
            situation: "Food",
            example: "I like rice with meat. Nice, sweet, complete.",
            note: "Long vowels dominate food words: rice, meat, sweet.",
          },
          {
            situation: "Messages",
            example: "See you at three, by the sea. 🙂",
            note: "ee and ea both say “ee” — the most common long vowel.",
          },
          {
            situation: "Shopping",
            example: "The price of these shoes is fine.",
            note: "Long I (price) and long O (those) in one sentence.",
          },
        ],
        "Long vowels in the wild",
      ),
      DL(
        "Cake or cat?",
        "A baker and a child play with word cards in the shop.",
        [
          ["Baker", "Word game! Read this card: c-a-t."],
          ["Child", "Cat! Mmm… but I smell cake."],
          ["Baker", "Then read THIS one: c-a-k-e."],
          ["Child", "Cake! The E makes it long — cayek!"],
          ["Baker", "The E is silent, but it changes the A. Cat, hat — short. Cake, late — long."],
          ["Child", "Like pin and pine!"],
          ["Baker", "Exactly. You get a slice of cake for that one."],
        ],
      ),
      MS(
        [
          [
            "Reading “cape” as “cap”",
            "cape (long a: c-ay-p)",
            "The final E is the magic signal — the vowel says its name. Missing it changes a hero’s coat into a hat.",
          ],
          [
            "“I hate this hit song.” → reading both vowels short",
            "hate (long a) · hit (short i)",
            "Each word needs its own pattern check: hate has magic-e, hit is plain CVC.",
          ],
          [
            "Spelling “meet” as “met” or “meat”",
            "meet (ee) / meat (ea) — both “ee” sounds; met is short e.",
            "Long E has two common teams (ee, ea). Meaning and spelling practice decide: “Nice to meet you. I eat meat.”",
          ],
          [
            "Pronouncing “u” in “cup” as “kyoop”",
            "cup (short u) — no magic-e, no team",
            "Long U needs a pattern (cute, cube). Without one, U stays short: cup, bus, sun.",
          ],
        ],
        "Common mistakes",
      ),
      AU(
        "Listen: short → long",
        "Cap. Cape. Bit. Bite. Not. Note. Pin. Pine. Cub. Cube. Hear the vowel say its name when the magic-e arrives.",
        0.8,
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Jake likes to ride his bike by the lake. He takes his cute dog, Rose. They sit on the wide green grass and wait for the sun to go down. Jake eats a snack: a cake and a ripe plum. Life is fine by the lake.",
          task: "Find five long-vowel words and five short-vowel words in the story.",
        },
        writing: {
          task: "Write five word pairs like cap/cape — one for each vowel.",
          guide: ["a: cap → cape", "i: bit → bite", "…"],
          model: "cap→cape · bit→bite · not→note · cub→cube · (e: pet→Pete — a name! · or use the team: met→meet)",
        },
        listening: {
          script:
            "Listen and repeat. Short or long? Hat — short. Hate — long. Sit — short. Site — long. Hop — short. Hope — long. Cut — short. Cute — long.",
          task: "Listen and mark S or L for each of the eight words.",
        },
        speaking: {
          task: "Say the magic-e chant: “The E is silent, the vowel is long!” Then read: cap–cape, bit–bite, not–note.",
          frames: ["The E is silent…", "…the vowel says its name!", "cap — cape…"],
          checklist: [
            "I said the chant and the three pairs.",
            "I stretched the long vowels clearly.",
          ],
        },
      }),
      LSP(
        [
          gls("A short vowel makes a quick sound."),
          gls("A long vowel says its own name."),
          gls("Every word needs at least one vowel."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Long vowels say the letter’s name: cake, keep, bike, home, cute.",
        "Pattern 1 — magic-e: vowel + consonant + silent E (cap → cape).",
        "Pattern 2 — vowel teams: ai (rain), ee (tree), ea (meat), oa (boat) — first vowel says its name.",
        "Minimal pairs change meaning: bit/bite, not/note, pin/pine, cub/cube.",
        "Teams are usually long — but bread and book remind you English keeps exceptions.",
      ]),
      RV(
        [
          {
            question: "What does a short vowel sound like in a CVC word?",
            options: [
              "The letter’s name",
              "A quick sound: cat, bed, sit, hot, cup",
              "A silent sound",
            ],
            correctIndex: 1,
            explanation: "Short vowels are quick: aaa, eh, ih, oh, uh.",
            from: "Chapter 03 · Lesson 3",
          },
          {
            question: "What does the final E do in “bike”?",
            options: [
              "It is pronounced separately",
              "It is silent and makes the I long",
              "It makes the word plural",
            ],
            correctIndex: 1,
            explanation: "Magic-e is silent — it signals that the vowel says its name.",
            from: "Chapter 03 · Lesson 4",
          },
          {
            question: "Which is a vowel TEAM with a long sound?",
            options: ["rain", "ran", "run"],
            correctIndex: 0,
            explanation: "ai says “ay” — the first vowel of a team says its name.",
            from: "Chapter 03 · Lesson 4",
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
            "Which word has a LONG vowel?",
            [
              ["a", "hop"],
              ["b", "hope"],
              ["c", "hoppy"],
            ],
            "b",
            fb("hope", "Magic-e: the silent E makes the O say its name — “oh”."),
            { hints: ["Look for the silent E at the end."] },
          ),
          FB(
            "Make it long: not → n__e.",
            "not → ___ (long vowel with a silent e — it means a quick written message)",
            ["note"],
            fb("note", "Add magic-e and the short O of “not” becomes the long O of “note”."),
            { hints: ["Add one silent letter at the end."] },
          ),
          MCQ(
            "Which team says “ee”?",
            [
              ["a", "oa (boat)"],
              ["b", "ai (rain)"],
              ["c", "ea (meat)"],
            ],
            "c",
            fb("ea (meat)", "EA usually says “ee”: eat, meat, sea, teacher."),
            { hints: ["Read the three words out loud — which one rhymes with “see”?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "Short or long? “The pin is on the pine tree.”",
            [
              ["a", "Both words are short",
              ],
              ["b", "pin = short i, pine = long i"],
              ["c", "Both words are long"],
            ],
            "b",
            fb(
              "pin short, pine long",
              "pin is CVC (short i); pine has magic-e (long i, “eye”).",
            ),
          ),
          MCQ(
            "Which word does NOT have a long vowel?",
            [
              ["a", "cake"],
              ["b", "team"],
              ["c", "cup"],
            ],
            "c",
            fb("cup", "cup is plain CVC — short u. cake (magic-e) and team (ea) are long."),
          ),
          CORR(
            "Fix the word choice.",
            "I hope a bit of cake. (I ___ a bit of cake.)",
            ["want"],
            fb(
              "want",
              "“I want a bit of cake.” Hope means wish-for-big-things; for food, English uses “want”. And note: bit (short) and cake (long) — both vowels correct!",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Magic-e collection",
      instructions:
        "Collect ten magic-e words (five short→long pairs like cap/cape) and five vowel-team words. For each word, write a check: what is the vowel sound — short or long? Finish with one sentence using at least three of your words.",
      minWords: 20,
      maxWords: 80,
    },
    homework: [
      "Read your magic-e pairs out loud three times: cap–cape, bit–bite, not–note, pin–pine, cub–cube.",
      "Find five vowel-team words in anything you read today.",
      "Say the chant before you sleep: “The E is silent, the vowel says its name!”",
    ],
  },

  // =========================================================================
  // Lesson 5 — Identifying Vowel Sounds and Spelling Patterns (chapter review)
  // =========================================================================
  {
    slug: "ch-03-l-05",
    minutes: 30,
    description:
      "Put the whole vowel system together: hear a sound, name it (short or long), find its spelling pattern — then pass the Chapter 3 review.",
    outcomes: [
      "Identify the vowel sound in any simple word (short or long)",
      "Name the spelling pattern behind it (CVC, magic-e, vowel team)",
      "Use the sound→pattern check when spelling new words",
      "Pass the Chapter 3 review quiz",
    ],
    blocks: [
      LI(
        "This lesson puts the whole vowel system together into one working method: HEAR a vowel sound, NAME it (short or long), and FIND its spelling pattern. This check — sound → name → pattern — is the exact method strong spellers use, and it is your bridge into full phonics in Chapter 4. Then the chapter review tests everything.",
        [
          "You know the five short vowels and CVC words (Lesson 3).",
          "You know the long vowels, magic-e and vowel teams (Lesson 4).",
        ],
      ),
      H("The sound → name → pattern check"),
      T(
        "When you meet a new word, run the check: (1) Say the word slowly and find the vowel sound. (2) Ask: is it short and quick, or does it say its name (long)? (3) Look at the letters: what pattern do you see — plain CVC, magic-e, or a vowel team? The pattern usually confirms what your ear already heard.",
      ),
      GR(
        "The pattern table",
        "CVC → short vowel. Vowel + consonant + silent E → long vowel (magic-e). Two vowels together → usually long (team). This table covers the great majority of simple English words.",
        [
          { english: "CVC: cat, bed, sit, hot, cup", translation: "Short." },
          { english: "a_e / i_e / o_e / u_e: cake, bike, home, cute", translation: "Long (magic-e)." },
          { english: "ai / ee / ea / oa: rain, tree, meat, boat", translation: "Usually long (team)." },
        ],
        ["Exceptions exist (bread, book) — but learn the patterns first; they win most of the time."],
      ),
      ST(
        "Run the check on three words",
        [
          {
            title: "Check 1 — “pan”",
            text: "Hear: p-aaa-n → the vowel is quick. Name: short A. Pattern: CVC, no helpers. Result: short A, correct spelling PAN.",
            examples: [{ english: "pan / pane", note: "Add magic-e and a cooking pan becomes a window pane!" }],
          },
          {
            title: "Check 2 — “rain”",
            text: "Hear: r-ay-n → the vowel says its name. Name: long A. Pattern: vowel team AI at the start of the word. Result: long A, spelled R-A-I-N.",
            examples: [{ english: "rain / ran", note: "Drop the I and the long A collapses back to short." }],
          },
          {
            title: "Check 3 — “hope”",
            text: "Hear: h-oh-p → the vowel says its name. Name: long O. Pattern: o + consonant + silent E (magic-e). Result: long O, spelled H-O-P-E.",
            examples: [{ english: "hope / hop", note: "Remove the E and hope becomes a little jump." }],
          },
        ],
        "Three words, three patterns, one method.",
      ),
      TB(
        "The complete vowel map",
        ["Sound", "Type", "Pattern", "Example words"],
        [
          ["aaa", "short a", "CVC", "cat, hat, bag, family"],
          ["ay", "long a", "a_e · ai · ay", "cake, rain, day"],
          ["eh", "short e", "CVC", "bed, pen, red, egg"],
          ["ee", "long e", "e_e · ee · ea", "these, tree, meat, sea"],
          ["ih", "short i", "CVC", "sit, big, milk, fish"],
          ["eye", "long i", "i_e · igh · y", "bike, night, my"],
          ["oh (quick)", "short o", "CVC", "hot, top, dog, box"],
          ["oh (name)", "long o", "o_e · oa · ow", "home, boat, show"],
          ["uh", "short u", "CVC", "cup, bus, sun, jump"],
          ["you", "long u", "u_e · ue · ew", "cute, blue, new"],
        ],
        "Keep this map — it is the reference table for Chapters 4 and 5.",
      ),
      EXD(
        "Sound → pattern in real words",
        [
          { english: "hotel → h-o(h)-t-e-l: two vowels, both quick", note: "Two short O and E sounds in one travel word.", domain: "travel" },
          { english: "email → e-m-ai-l: long E + long A", note: "A technology word with two long vowels.", domain: "technology" },
          { english: "weekend → ee (long) + e (short)", note: "week (long e) + end (short e): a compound of two patterns.", domain: "work" },
          { english: "backpack → a (short) + a (short)", note: "Two short A sounds in one bag.", domain: "travel" },
          { english: "notebook → o (long, magic-e) + oo (team)", note: "note + book: a long O and the OO team in one school word.", domain: "education" },
          { english: "takeaway → a_e (long) + ay (long)", note: "Two long A patterns in one food word.", domain: "food" },
          { english: "sunrise → u (short) + i (long)", note: "sun (CVC) + rise (magic-e).", domain: "nature" },
          { english: "deadline → ea (long e) + i_e (long i)", note: "A work word with two long-vowel patterns.", domain: "work" },
        ],
        "Real words mix patterns. The check handles them one part at a time.",
      ),
      DL(
        "The spelling bee",
        "A class plays a spelling game. The teacher says a word; the students run the check.",
        [
          ["Teacher", "Next word: “notebook”. Sara, spell it."],
          ["Sara", "Note — N-O-T-E, magic-e, long O. Book — B-O-O-K, the OO team."],
          ["Teacher", "Excellent. Bilal, “sunrise”."],
          ["Bilal", "Sun — S-U-N, CVC, short U. Rise — R-I-S-E, magic-e, long I."],
          ["Teacher", "Last one: “backpack”. Zara?"],
          ["Zara", "Back — B-A-C-K, short A. Pack — P-A-C-K, short A again. Two CVC words in one!"],
          ["Teacher", "Perfect. That is the sound → name → pattern check in action."],
        ],
      ),
      CMP(
        "Guessing vs checking",
        ["Guessing the spelling", "Running the check"],
        [
          ["Method", "Write what it looks like, hope for the best", "Hear it → name the sound → find the pattern"],
          ["Result", "fisical, becos, reely", "physical, because, really"],
          ["Speed", "Fast, wrong often", "Slower at first, right far more often"],
          ["Long term", "Bad habits hard to fix", "The method works on every new word"],
        ],
        {
          intro: "Spelling is not luck — it is a check you can run.",
          verdict:
            "Strong spellers are not born; they check. Learn the check once and use it for life.",
        },
      ),
      MS(
        [
          [
            "Spelling “becos”",
            "because",
            "Run the check: the word starts like “be” (long e) and ends with the “oz” sound. The spelling is fixed by tradition — memorise the small list of pattern-breakers.",
          ],
          [
            "Reading “read” the same way every time",
            "read (present, “ee”) vs read (past, “e”)",
            "The team EA is usually “ee” — but the past tense of “read” rhymes with “bed”. Context decides; the check still narrows it to two options.",
          ],
          [
            "“All vowels are short unless they are long.” (a tautology)",
            "Use the pattern table: CVC = short; magic-e / team = usually long",
            "Vague rules do not help. The pattern table gives you something to check against.",
          ],
        ],
        "Common mistakes",
      ),
      US(
        [
          {
            situation: "Writing messages",
            example: "See you at three. (ee + ee + ea)",
            note: "The check confirms the common teams before you send.",
          },
          {
            situation: "Filling forms",
            example: "Name: Amina. City: Cape Town.",
            note: "Cape (magic-e) — one silent E on a form that matters.",
          },
          {
            situation: "Reading signs",
            example: "BAKE SALE TODAY — three long vowels on one sign.",
            note: "bake (a_e), sale (a_e), today (ay).",
          },
          {
            situation: "Learning new words",
            example: "“Deadline? Deadline. D-E-A-D-L-I-N-E.”",
            note: "Say it, check it, write it — the loop from Chapter 1, now with a spelling method inside.",
          },
        ],
        "The check in daily life",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "Kate makes cakes at home. She takes her bike to the lake and rides back at sunrise. Her cat likes to sit on the warm seat by the window and watch the rain. Kate eats a big breakfast: eggs, meat, and a cup of tea. Life is sweet.",
          task: "Find and list: three magic-e words, three vowel-team words, and three short-vowel (CVC) words.",
        },
        writing: {
          task: "Write four sentences about your day. In each sentence use at least one long-vowel word and one short-vowel word — and mark them (L) and (S).",
          guide: ["I wake (L) up (S) at…", "I eat (L) a hot (S)…", "…", "…"],
          model:
            "I wake (L) up (S) at seven. I eat (L) a big (S) breakfast. I take (L) the bus (S) to work. Life (L) is fun (S)!",
        },
        listening: {
          script:
            "Chapter three review. Short vowels: cat, bed, sit, hot, cup. Long vowels: cake, keep, bike, home, cute. Magic-e makes the vowel say its name. Vowel teams like AI, EE, EA and OA usually say the name too. Remember: every word needs at least one vowel!",
          task: "Listen and write the five long-vowel keywords you hear.",
        },
        speaking: {
          task: "Say the complete vowel map from memory: five short sounds, then five long sounds.",
          frames: [
            "Short: cat, bed, sit, hot, cup.",
            "Long: cake, keep, bike, home, cute.",
            "Magic-e and vowel teams make them long!",
          ],
          checklist: [
            "I said all ten keywords.",
            "I stretched the long vowels clearly.",
          ],
        },
      }),
      LSP(
        [
          gls("The vowels are A, E, I, O and U."),
          gls("A short vowel makes a quick sound."),
          gls("A long vowel says its own name."),
          gls("Every word needs at least one vowel."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The check: HEAR the vowel sound → NAME it (short or long) → FIND the pattern.",
        "CVC = short. Magic-e (a_e, i_e, o_e, u_e) = long. Vowel teams (ai, ee, ea, oa) = usually long.",
        "Real words mix patterns: notebook = magic-e + OO team; weekend = long e + short e.",
        "A few pattern-breakers (because, bread, book) are memorised, not guessed.",
        "The complete vowel map (10 rows) is your reference for Chapters 4 and 5.",
      ]),
      RV(
        [
          {
            question: "How many vowel letters does English have?",
            options: ["5", "21", "26"],
            correctIndex: 0,
            explanation: "A, E, I, O, U — plus part-time Y.",
            from: "Chapter 03 · Lesson 1",
          },
          {
            question: "What makes a consonant sound?",
            options: [
              "Blocked or shaped air",
              "A fully open mouth",
              "The letter’s name",
            ],
            correctIndex: 0,
            explanation: "Lips, tongue or teeth block or shape the air.",
            from: "Chapter 03 · Lesson 2",
          },
          {
            question: "cap → cape: what happened?",
            options: [
              "The A changed to a different letter",
              "Magic-e made the A long",
              "Nothing — they sound the same",
            ],
            correctIndex: 1,
            explanation: "The silent final E signals a long vowel — the A says its name.",
            from: "Chapter 03 · Lesson 4",
          },
          {
            question: "Which word is plain CVC with a SHORT vowel?",
            options: ["hope", "rain", "bus"],
            correctIndex: 2,
            explanation: "bus = CVC with short U. hope has magic-e; rain has a vowel team.",
            from: "Chapter 03 · Lessons 3–4",
          },
        ],
        { title: "Chapter 3 review — the whole chapter", intro: "Four questions from Lessons 1–4 plus the check from today." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice — the check",
        questions: [
          MCQ(
            "“team” — what is the vowel sound and pattern?",
            [
              ["a", "Short e — CVC"],
              ["b", "Long e — vowel team EA"],
              ["c", "Long a — magic-e"],
            ],
            "b",
            fb("Long e — EA team", "EA says “ee”: eat, meat, sea, teacher — and team."),
            { hints: ["Does the vowel say its name or stay quick? Then look at the letters."] },
          ),
          FB(
            "Run the check: “cup” has a ___ vowel (short/long).",
            "cup — the u is ___.",
            ["short"],
            fb("short", "CVC, no helpers — the U stays quick: c-uh-p."),
            { hints: ["Is there a magic-e or a vowel team in “cup”?"] },
          ),
          MCQ(
            "Which word has BOTH a short and a long vowel?",
            [
              ["a", "sunrise"],
              ["b", "rainbow"],
              ["c", "notebook"],
            ],
            "a",
            fb("sunrise", "sun (short u) + rise (magic-e, long i). rainbow has two long teams; notebook has long o + the OO team."),
            { hints: ["Split each word into its parts and check each vowel."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Chapter review quiz",
        note: "No hints — your chapter test.",
        questions: [
          MCQ(
            "Which word is a pattern-breaker (the team does NOT say the long sound)?",
            [
              ["a", "meat"],
              ["b", "bread"],
              ["c", "boat"],
            ],
            "b",
            fb("bread", "EA in bread says the short “e” of bed — one of the few famous breakers. meat and boat follow the team rule."),
          ),
          MCQ(
            "Which pair is short → long for the SAME vowel letter?",
            [
              ["a", "pin / pine"],
              ["b", "cup / cape"],
              ["c", "bed / bike"],
            ],
            "a",
            fb("pin / pine", "Same letter I: short (pin) → magic-e long (pine). The other pairs change vowel letters too."),
          ),
          REORD(
            "Put the check in order.",
            "hear the vowel sound name it short or long find the pattern",
            fb(
              "Hear the vowel sound → name it (short or long) → find the pattern",
              "The three steps of the spelling check.",
            ),
          ),
          CORR(
            "Fix the spelling.",
            "I will meat you at three. (future of “meet”)",
            ["meet"],
            fb(
              "meet",
              "Meet (with a person) is spelled EE. Meat (food) is EA. Same sound, different word: “Nice to meet you. I eat meat.”",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My vowel map",
      instructions:
        "Build your own version of the complete vowel map: for each of the five vowels write one short-vowel word and one long-vowel word from YOUR life (a food, a place, a name, a thing). Mark the pattern of every word (CVC, magic-e, or team). Ten words total.",
      minWords: 20,
      maxWords: 90,
    },
    homework: [
      "Keep the vowel map in your notebook — you will use it in Chapter 4.",
      "Run the check on five new words you meet this week.",
      "Before Chapter 4, reread the pattern table and say the ten keywords out loud.",
    ],
  },
];
