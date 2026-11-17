/**
 * PROMPT 35 production — Batch B, Chapter 05: Word Reading and Spelling.
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
  MCQ,
  MATCH,
  N,
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

export const ch05Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Three-Letter Words: Reading Fluency
  // =========================================================================
  {
    slug: "ch-05-l-01",
    minutes: 20,
    description:
      "Turn blending into speed: read CVC words in one look, using the three-pass routine that builds real fluency.",
    outcomes: [
      "Read at least fifteen CVC words without blending out loud",
      "Read a CVC word you have never seen before",
      "Use the three-pass routine to build reading speed",
      "Explain how practice turns blending into instant reading",
    ],
    blocks: [
      LI(
        "In Chapter 04 you learned to blend. Now you build speed. Fluent readers do not blend “cat” — they recognise it instantly, like a face. This lesson gives you the three-pass routine: the bridge from slow, careful blending to fast, confident reading.",
        [
          "You can blend CVC words sound by sound (Chapter 04).",
          "You know the five short vowels and the CVC shape (Chapter 04).",
        ],
      ),
      H("From blending to one look"),
      T(
        "When you meet a word for the first time, you blend it. When you meet it again, you blend it a little faster. After a few meetings, the word jumps out at you in one look — no blending needed. That is what fluency is: memory built on blending, never instead of it.",
      ),
      {
        type: "definition",
        term: "fluency",
        partOfSpeech: "noun",
        definition:
          "Fluency means reading smoothly and quickly, without stopping to blend every word.",
        example: {
          english: "cat, hat, map — read at speaking speed, in one look each",
          translation: "No finger, no pausing — just reading.",
        },
      },
      ST(
        "The three-pass routine",
        [
          {
            title: "Pass 1 — Blend every word slowly",
            text: "Read the whole list once, blending any word that is not instant yet. Accuracy first, always.",
            examples: [{ english: "cat → /k/ /æ/ /t/ → cat", note: "Slow and complete." }],
          },
          {
            title: "Pass 2 — Read a little faster",
            text: "Read the list again. Blend only the words that still feel sticky. Let the easy ones go faster.",
            examples: [{ english: "cat, hat, map, van, bag", note: "Smoother this time." }],
          },
          {
            title: "Pass 3 — Read at speaking speed",
            text: "One more pass, as fast as you can speak. This is the speed of real reading — and each list gets you closer to it.",
            examples: [
              { english: "cat, hat, map, van, bag — five seconds", note: "That is one-look reading." },
            ],
          },
        ],
        "Three passes per list — the classic fluency drill.",
      ),
      TB(
        "Read these in one look",
        ["Column 1 (a)", "Column 2 (e)", "Column 3 (i)"],
        [
          ["cat", "bed", "pig"],
          ["hat", "red", "big"],
          ["map", "ten", "sit"],
          ["van", "leg", "win"],
          ["bag", "hen", "fin"],
        ],
        "Fifteen words, three vowels. Run the three-pass routine on this table now.",
      ),
      AU(
        "Listen: read along at speed",
        "cat, hat, map, van, bag. bed, red, ten, leg, hen. pig, big, sit, win, fin. Now read them with me — at my speed.",
        0.95,
      ),
      GR(
        "The fluency rule",
        "Read a word list three times: blend slowly, speed up, then read at speaking speed. Rereading moves words into instant memory.",
        [
          { english: "Pass 1: c-a-t … cat", translation: "Blending carefully." },
          { english: "Pass 2: cat — almost instant", translation: "The word feels familiar." },
          { english: "Pass 3: cat!", translation: "One look, no delay." },
        ],
        [
          "If a word stays hard, blend it again — blending is your safety net, always available.",
        ],
      ),
      EXD(
        "New word? Same skill",
        [
          { english: "jig → /dʒ/ /ɪ/ /g/ → jig", note: "A little dance — and a brand-new word for your eyes.", domain: "social" },
          { english: "nut → /n/ /ʌ/ /t/ → nut", note: "A snack word that blends fast.", domain: "food" },
          { english: "vet → /v/ /e/ /t/ → vet", note: "The animal doctor — three sounds, one job.", domain: "health" },
          { english: "cub → /k/ /ʌ/ /b/ → cub", note: "A baby lion is a cub. New word, old pattern.", domain: "nature" },
          { english: "den → /d/ /e/ /n/ → den", note: "A fox’s home — blend it once and it is yours.", domain: "nature" },
          { english: "jog → /dʒ/ /ɒ/ /g/ → jog", note: "Slow running, quick blending.", domain: "sport" },
          { english: "tag → /t/ /æ/ /g/ → tag", note: "The price says it; you read it.", domain: "shopping" },
          { english: "wig → /w/ /ɪ/ /g/ → wig", note: "Hair you can buy — a shopping word.", domain: "shopping" },
          { english: "mud → /m/ /ʌ/ /d/ → mud", note: "After the rain, the park has mud.", domain: "nature" },
          { english: "lip → /l/ /ɪ/ /p/ → lip", note: "One of the words you already own — now you can read it too.", domain: "health" },
        ],
        "Ten words you have never read before in this course. You read them anyway — that is what phonics gives you.",
      ),
      US(
        [
          {
            situation: "Reading signs",
            example: "EXIT, TAXI, BUS — you read them in one look.",
            note: "Short signs reward fast readers.",
          },
          {
            situation: "Reading a message",
            example: "“Get the milk and the map.” — six words, two seconds.",
            note: "Everyday messages are full of CVC words.",
          },
          {
            situation: "Game cards",
            example: "Your cards say: RUN, WIN, HOP — read them fast or lose your turn.",
            note: "Reading fast is playing well.",
          },
          {
            situation: "Children’s books",
            example: "“The cat sat. The dog ran.”",
            note: "First storybooks are CVC word lists wearing costumes.",
          },
          {
            situation: "Shopping labels",
            example: "JAM — TEA — NUT: short labels, free reading practice.",
            note: "Longer labels come later in the course — grow with them.",
          },
        ],
        "Where one-look reading pays off",
        "Speed matters because real life does not wait for finger blending.",
      ),
      DL(
        "The one-minute race",
        "Sara and Rami race through word lists on a Saturday morning.",
        [
          ["Sara", "Let’s race! Read a column as fast as you can — every word must be right."],
          ["Rami", "Ready… cat, hat, map, van, bag. Done!"],
          ["Sara", "Ten seconds. My turn: bed, red, ten, leg, hen. Eight seconds!"],
          ["Rami", "You win. But watch me on the hard column: pig, big, sit, win, fin."],
          ["Sara", "Nine seconds — and every word correct. Tomorrow we race with four-letter words."],
          ["Rami", "Four letters? Like stop and hand?"],
          ["Sara", "Exactly. New lesson, same routine."],
        ],
      ),
      CMP(
        "Sound-by-sound vs one-look reading",
        ["Blending (sound by sound)", "One-look reading (instant)"],
        [
          ["When to use it", "New or forgotten words", "Words you have met before"],
          ["Speed", "Slow and careful", "At speaking speed"],
          ["What builds it", "The blending routine", "Rereading the same words"],
          ["The risk", "None — this is the learning stage", "Guessing, if you skip the blending stage"],
        ],
        {
          intro: "Both ways of reading are correct — at the right moment.",
          verdict:
            "Blend what is new. Read what you know. Every one-look word was a blended word first.",
        },
      ),
      MS(
        [
          [
            "I blend the same easy word fifty times.",
            "I blend new words; I read known words in one look.",
            "Fluency grows from meeting NEW words, not from repeating the easy ones forever.",
          ],
          [
            "I skip words I do not know.",
            "I blend them: /d/ /ɒ/ /g/ → dog — then read on.",
            "Skipping breaks the meaning. Blending solves the word in seconds.",
          ],
          [
            "I race so fast that I say “hat” for “map”.",
            "I slow down until every word is right, then speed up again.",
            "Speed without accuracy is just fast mistakes.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "How long until instant?",
        "Most words need a few meetings before they jump out at you. That is normal. Your eyes are doing today what your fingers did last week — trust the routine.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Fluency grows from rereading. First you blend a word slowly. Then you read it faster. Soon you read it in one look, like a face you know. Run the three-pass routine on any list: slow, medium, fast. Your speed grows every week — and the words stay with you.",
          task: "Read the text two times. Then say the three passes of the routine from memory.",
        },
        writing: {
          task: "Copy the fifteen words from the lesson table, then write the two fastest ones and the two hardest ones.",
          guide: ["Column 1: cat, hat, …", "Fastest for me: ___", "Hardest for me: ___"],
          model: "Column 1: cat, hat, map, van, bag · Fastest: cat, map · Hardest: van, bag",
        },
        listening: {
          script:
            "Listen and read along. Pass one, slow: cat … hat … map. Pass two, faster: cat, hat, map. Pass three, fast: cat, hat, map! Feel the speed grow.",
          task: "Read the words with the audio on every pass — all three speeds.",
        },
        speaking: {
          task: "Read one column of the table out loud, three times — each pass faster.",
          frames: ["Pass 1 — slow and careful", "Pass 2 — a little faster", "Pass 3 — speaking speed"],
          checklist: [
            "I read five words in each pass.",
            "My third pass was clearly faster than my first.",
          ],
        },
      }),
      LSP(
        [
          gls("Read the word in one look."),
          gls("Say it slowly first, then fast."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Fluency means reading smoothly, without blending every word out loud.",
        "The three-pass routine: blend slowly, speed up, read at speaking speed.",
        "Every one-look word was a blended word first — never skip the blending stage.",
        "New words get blended; known words get read in one look.",
        "Speed without accuracy is just fast mistakes — accuracy first, always.",
      ]),
      RV(
        [
          {
            question: "Blending means…",
            options: [
              "guessing from the first letter",
              "joining sounds into a word",
              "reading very slowly forever",
            ],
            correctIndex: 1,
            explanation: "Blending joins every sound, left to right — the base skill of reading.",
            from: "Chapter 04 · Lesson 5",
          },
          {
            question: "Which word follows the CVC pattern?",
            options: ["chair", "bus", "sheep"],
            correctIndex: 1,
            explanation: "Bus is consonant–vowel–consonant — the three-sound shape.",
            from: "Chapter 04 · Lesson 4",
          },
          {
            question: "To spell a word you hear, you first…",
            options: ["segment it into sounds", "draw it", "say it in your language"],
            correctIndex: 0,
            explanation: "Segmenting — splitting the word into sounds — comes before writing.",
            from: "Chapter 04 · Lesson 6",
          },
        ],
        { title: "Look back — your Chapter 04 toolkit" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "What is the three-pass routine?",
            [
              ["a", "Read three different books"],
              ["b", "Read one list three times: slowly, faster, then at speaking speed"],
              ["c", "Say each word three times very slowly"],
            ],
            "b",
            fb("Slow, faster, speaking speed", "Rereading the same list moves words from blending into instant memory."),
            { hints: ["Think about how many times you read the same words."] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "van",
            ["van"],
            fb("van", "Blend what you hear: /v/ /æ/ /n/ — then write the three letters."),
            { hints: ["Three sounds: /v/ /æ/ /n/."] },
          ),
          MATCH(
            "Match each word with its vowel sound.",
            [
              ["w1", "bed"],
              ["w2", "pig"],
              ["w3", "hop"],
              ["w4", "cup"],
            ],
            [
              ["v1", "/ʌ/"],
              ["v2", "/e/"],
              ["v3", "/ɒ/"],
              ["v4", "/ɪ/"],
            ],
            [
              ["w1", "v2"],
              ["w2", "v4"],
              ["w3", "v3"],
              ["w4", "v1"],
            ],
            fb("bed → /e/, pig → /ɪ/, hop → /ɒ/, cup → /ʌ/", "One short vowel in the heart of every CVC word."),
            { hints: ["Stretch the middle of each word and listen."] },
          ),
          FB(
            "Complete the sentence.",
            "I read known words in one ___ .",
            ["look"],
            fb("look", "One-look reading is instant recognition — built from rereading."),
            { hints: ["What do your eyes do to a word you know?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — read like a fluent beginner.",
        questions: [
          MCQ(
            "You meet the word “jig” for the first time. What do you do?",
            [
              ["a", "Skip it"],
              ["b", "Blend it: /dʒ/ /ɪ/ /g/ → jig"],
              ["c", "Wait for someone to read it to you"],
            ],
            "b",
            fb("Blend it", "New words get blended — that is exactly what the skill is for."),
          ),
          MCQ(
            "Which reading is fluent?",
            [
              ["a", "cat… hat… map… — with long pauses everywhere, even after fifty meetings"],
              ["b", "cat, hat, map — at speaking speed, every word correct"],
              ["c", "hat, map, cat — fast but with wrong words"],
            ],
            "b",
            fb("Speaking speed, every word correct", "Fluency is speed AND accuracy together."),
          ),
          CORR(
            "Find and correct the mistake.",
            "I skip words I do not know.",
            ["I blend words I do not know."],
            fb(
              "I blend words I do not know.",
              "Blending solves the word in seconds; skipping breaks the meaning.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "One-look reading log",
      instructions:
        "Copy the fifteen words from the lesson table. Read them out loud three times (slow, medium, fast) and note your time for each pass. Then write one sentence about how your speed changed across the three passes.",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Reread the word table once a day until every word is instant.",
      "Write five new CVC words you find anywhere and read them with the three-pass routine.",
      "Race a family member on one column — winner chooses tomorrow’s practice word.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Four-Letter Words
  // =========================================================================
  {
    slug: "ch-05-l-02",
    minutes: 25,
    description:
      "Add one more consonant: stop, hand, milk. Learn start blends and end blends — the bridge to full everyday vocabulary.",
    outcomes: [
      "Read CVCC words like hand and milk",
      "Read CCVC words like stop and plan",
      "Blend consonant pairs like st, nd, fr and tr",
      "Spell four-letter words from their sounds",
    ],
    blocks: [
      LI(
        "Three letters made your first words. Now add a fourth. Stop, hand, milk, plan — everyday life is full of four-letter words. The extra consonant usually blends smoothly with its neighbour. Learn start blends and end blends in this lesson, and your reading vocabulary doubles.",
        [
          "You can read CVC words in one look (Lesson 1).",
          "You can blend sounds left to right (Chapter 04).",
        ],
      ),
      H("One more letter"),
      T(
        "Four-letter beginner words add one consonant to a CVC word. Sometimes the extra letter comes at the end: hand, milk, best. Sometimes it comes at the start: stop, plan, frog. The added consonants flow together smoothly — that is why we call them blends.",
      ),
      {
        type: "definition",
        term: "consonant blend",
        partOfSpeech: "noun",
        definition:
          "A consonant blend is two consonants next to each other that keep their own sounds — like st in stop and nd in hand.",
        example: {
          english: "stop → /s/ /t/ /ɒ/ /p/",
          translation: "You can hear both s and t — two sounds, sliding together.",
        },
      },
      TB(
        "Four-letter word patterns",
        ["Pattern", "Examples"],
        [
          ["CVCC (end blend)", "hand, milk, best, sand, jump"],
          ["CCVC (start blend)", "stop, plan, frog, tram, flag"],
          ["Common start blends", "st (stop), pl (plan), fr (frog), fl (flag), tr (tram)"],
          ["Common end blends", "nd (hand), lk (milk), st (best), mp (jump), sk (desk)"],
        ],
        "CVCC adds the consonant at the end; CCVC adds it at the start.",
      ),
      ST(
        "Read a four-letter word in three steps",
        [
          {
            title: "Step 1 — Find the vowel",
            text: "Every word has a vowel in its heart. In “stop” it is the o. Put your finger under it.",
            examples: [{ english: "stop → the o is the heart", note: "The vowel anchors the word." }],
          },
          {
            title: "Step 2 — Blend the letters around it",
            text: "Read the start blend and the end consonant with the vowel: /st/ … /ɒ/ … /p/. Slide the sounds together.",
            examples: [
              { english: "/st/ /ɒ/ /p/ → stop", note: "The st slides into the vowel." },
              { english: "/h/ /æ/ /nd/ → hand", note: "Here the nd closes the word." },
            ],
          },
          {
            title: "Step 3 — Say the whole word, then reread",
            text: "Say it at normal speed. On the second meeting, read it in one look.",
            examples: [
              { english: "milk → /m/ /ɪ/ /lk/ → milk", note: "Once blended, twice fluent." },
            ],
          },
        ],
      ),
      GR(
        "The four-letter rule",
        "CVCC words add a consonant at the end (hand, milk). CCVC words add one at the start (stop, plan). In a blend, each letter keeps its own sound.",
        [
          { english: "stop → /s/ /t/ /ɒ/ /p/", translation: "Start blend st + short o + p." },
          { english: "hand → /h/ /æ/ /n/ /d/", translation: "Short a + end blend nd." },
          { english: "frog → /f/ /r/ /ɒ/ /g/", translation: "Start blend fr + short o + g." },
        ],
        [
          "Careful: s-h is NOT a blend — together they say one single sound /ʃ/. Blends keep two sounds; s-h keeps one. Full lesson on pairs like sh in Lesson 4.",
        ],
      ),
      AU(
        "Listen: blend the clusters",
        "st… stop. fr… frog. pl… plan. Now the end blends: nd… hand. lk… milk. mp… jump. Say each cluster with me.",
        0.8,
      ),
      EXD(
        "Four-letter words in real life",
        [
          { english: "stop", note: "The most important travel word in the world.", domain: "travel" },
          { english: "hand", note: "Wash your hands — four sounds: /h/ /æ/ /n/ /d/.", domain: "health" },
          { english: "milk", note: "Breakfast in one word, end blend lk.", domain: "food" },
          { english: "best", note: "Every family has a best cook.", domain: "family" },
          { english: "sand", note: "Beach days are built on this end blend.", domain: "nature" },
          { english: "jump", note: "Sport number one for start blends? No — this one ENDS in mp.", domain: "sport" },
          { english: "plan", note: "Work words use start blends: pl + short a + n.", domain: "work" },
          { english: "frog", note: "fr + short o + g — a pond word.", domain: "nature" },
          { english: "tram", note: "City travel with a tr start blend.", domain: "travel" },
          { english: "desk", note: "School furniture, ending in sk.", domain: "education" },
          { english: "lamp", note: "Home word: l + short a + mp.", domain: "home" },
          { english: "gift", note: "Birthdays come with this end blend.", domain: "social" },
        ],
        "Twelve words, five start blends and four end blends. Watch the pattern, not just the word.",
      ),
      US(
        [
          {
            situation: "At the bus stop",
            example: "The sign says STOP — you read it before the bus does.",
            note: "Start blends live on street signs.",
          },
          {
            situation: "In the kitchen",
            example: "MILK, BREAD, JAM — the fridge is a reading list.",
            note: "Kitchen labels are full of four-letter words.",
          },
          {
            situation: "Wash your hands",
            example: "The clinic sign: WASH YOUR HANDS.",
            note: "Health words often end in blends: hands, wash.",
          },
          {
            situation: "Camping lists",
            example: "Tent, lamp, plan, map… pack and read at the same time.",
            note: "Planning words are blend words.",
          },
          {
            situation: "In the classroom",
            example: "Desk, test, best — the furniture and the feelings.",
            note: "School vocabulary leans on end blends.",
          },
        ],
        "Where four-letter words live",
        "Once you see blends, you see them everywhere.",
      ),
      DL(
        "Labeling the classroom",
        "A teacher and a student label objects with word cards.",
        [
          ["Teacher", "Let’s label the classroom. Read this card first: desk."],
          ["Rami", "/d/ /e/ /sk/… desk!"],
          ["Teacher", "Good. This one: lamp."],
          ["Rami", "/l/ /æ/ /mp/… lamp. The mp blends at the end."],
          ["Teacher", "Excellent. Last card: flag."],
          ["Rami", "/f/ /l/ /æ/ /g/… flag! The fl starts it."],
          ["Teacher", "Start blends, end blends — four-letter words are yours now."],
        ],
      ),
      CMP(
        "CVC vs four-letter words",
        ["CVC words (cat, bed, sun)", "Four-letter words (stop, hand, milk)"],
        [
          ["Sounds", "Three: /k/ /æ/ /t/", "Four: /s/ /t/ /ɒ/ /p/"],
          ["What is new", "Nothing — your base pattern", "A start blend (st, pl, fr) or an end blend (nd, lk, mp)"],
          ["Examples", "cat, pen, sit, hop, cup", "stop, plan, frog · hand, milk, jump"],
          ["Reading load", "One look after a few meetings", "One look after a few more — blends need extra passes"],
        ],
        {
          intro: "Same vowel skills, one extra consonant.",
          verdict:
            "If your CVC reading is solid, four-letter words are just CVC words with a friendly consonant hanging on.",
        },
      ),
      MS(
        [
          [
            "I read “stop” as “s-top” with a pause in the middle.",
            "I slide the blend: /st/ /ɒ/ /p/ → stop.",
            "S and T flow together. A pause breaks the word apart.",
          ],
          [
            "“Hand” has three sounds, like a CVC word.",
            "“Hand” has four sounds: /h/ /æ/ /n/ /d/.",
            "The extra consonant keeps its own sound. Count again — four.",
          ],
          [
            "I say “sh” at the start of “stop”.",
            "In stop, s and t keep their own sounds: /s/ /t/.",
            "S-T is a blend (two sounds). S-H is one sound. Different pairs, different jobs.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Two letters, two sounds",
        "In stop, s and t keep their own sounds. They do not melt into a new sound the way s and h do. Say /s/ /t/ clearly, then let them slide together.",
      ),
      N(
        "Four-letter words multiply your reading",
        "With stop, hand, milk, best and plan you can read most school lists, kitchen labels and street signs. One new pattern, hundreds of new words.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Four-letter words add one consonant to the CVC shape. Stop adds s at the start: a start blend. Hand adds d at the end: an end blend. In every blend, each letter keeps its own sound. You say /s/ /t/ clearly, then slide them together. Four sounds, one smooth word.",
          task: "Read the text two times. Then say the four sounds of stop and hand.",
        },
        writing: {
          task: "Write these words in sound steps: /s/ /t/ /ɒ/ /p/, /h/ /æ/ /n/ /d/, /m/ /ɪ/ /l/ /k/.",
          guide: ["/s/ /t/ /ɒ/ /p/ → s-t-o-p", "/h/ /æ/ /n/ /d/ → ___"],
          model: "stop · hand · milk",
        },
        listening: {
          script:
            "Listen to the blends. st… stop. pl… plan. fr… frog. Now the endings: nd… hand. lk… milk. mp… jump. One more: tr… tram. Say each word with me.",
          task: "Say each word with the audio — feel the blends slide.",
        },
        speaking: {
          task: "Say five four-letter words — the blend first, then the whole word.",
          frames: ["/st/ → stop", "/nd/ → hand", "/fr/ → frog", "/mp/ → jump", "/pl/ → plan"],
          checklist: [
            "I said the blend separately, then the whole word.",
            "I kept every letter’s sound inside the blend.",
          ],
        },
      }),
      LSP(
        [
          gls("In a blend, each letter keeps its own sound."),
          gls("Join the sounds to read the word."),
          gls("Say it slowly first, then fast."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Four-letter words add one consonant to the CVC shape.",
        "CVCC words end in a blend: hand, milk, best, jump.",
        "CCVC words start with a blend: stop, plan, frog, tram.",
        "In a blend, each letter keeps its own sound — st says /s/ /t/.",
        "S-H is not a blend: it is one sound /ʃ/. Blends keep two sounds.",
      ]),
      RV(
        [
          {
            question: "The three-pass routine reads a list…",
            options: [
              "three times: slowly, faster, at speaking speed",
              "once, very slowly",
              "three different lists",
            ],
            correctIndex: 0,
            explanation: "Rereading the same list builds instant recognition.",
            from: "Chapter 05 · Lesson 1",
          },
          {
            question: "Which is NOT a CVC word?",
            options: ["cat", "stop", "pen"],
            correctIndex: 1,
            explanation: "Stop has four sounds — a start blend plus the CVC shape.",
            from: "Chapter 05 · Lesson 2",
          },
          {
            question: "Segmenting a word means…",
            options: [
              "splitting it into sounds for spelling",
              "reading it three times",
              "guessing it from the first letter",
            ],
            correctIndex: 0,
            explanation: "Segmenting is blending in reverse: word → sounds → letters.",
            from: "Chapter 04 · Lesson 6",
          },
        ],
        { title: "Look back — routines and shapes" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Which pattern does “stop” follow?",
            [
              ["a", "CVCC — the extra consonant is at the end"],
              ["b", "CCVC — the extra consonant is at the start"],
              ["c", "CVC — it has three sounds"],
            ],
            "b",
            fb("CCVC", "Stop starts with the blend st: /s/ /t/ /ɒ/ /p/ — consonant, consonant, vowel, consonant."),
            { hints: ["Where is the extra consonant — at the start or at the end?"] },
          ),
          FB(
            "Write the missing vowel.",
            "h ___ nd (you wash them before eating)",
            ["a"],
            fb("a", "Hand is /h/ /æ/ /n/ /d/ — the short a in the middle."),
            { hints: ["Say /h/ then /nd/ — one short vowel goes between."] },
          ),
          MATCH(
            "Match each word with its start blend.",
            [
              ["w1", "frog"],
              ["w2", "tram"],
              ["w3", "flag"],
              ["w4", "plan"],
            ],
            [
              ["b1", "pl"],
              ["b2", "tr"],
              ["b3", "fr"],
              ["b4", "fl"],
            ],
            [
              ["w1", "b3"],
              ["w2", "b2"],
              ["w3", "b4"],
              ["w4", "b1"],
            ],
            fb("frog → fr, tram → tr, flag → fl, plan → pl", "The first two letters of each word make the start blend."),
            { hints: ["Read each word slowly and listen to the first two sounds."] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "milk",
            ["milk"],
            fb("milk", "Blend what you hear: /m/ /ɪ/ /l/ /k/ — four sounds, four letters, end blend lk."),
            { hints: ["Four sounds: /m/ /ɪ/ /l/ /k/. The last two slide together."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — blend and read on your own.",
        questions: [
          MCQ(
            "How many sounds does “hand” have?",
            [
              ["a", "3"],
              ["b", "4"],
              ["c", "5"],
            ],
            "b",
            fb("4: /h/ /æ/ /n/ /d/", "Every letter keeps its own sound — even inside the end blend nd."),
          ),
          MCQ(
            "Which word has an END blend?",
            [
              ["a", "stop"],
              ["b", "frog"],
              ["c", "jump"],
            ],
            "c",
            fb("jump", "Jump ends in mp: /dʒ/ /ʌ/ /m/ /p/. Stop and frog have start blends."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Hand has three sounds.",
            ["Hand has four sounds."],
            fb(
              "Hand has four sounds.",
              "/h/ /æ/ /n/ /d/ — the extra consonant adds its own sound.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Four-letter builders",
      instructions:
        "Write five four-letter words: two CVCC (like hand), two CCVC (like stop) and one free choice. Show the sound breakdown for each one, like “/s/ /t/ /ɒ/ /p/ → stop”. Then write one sentence using two of your words.",
      minWords: 12,
      maxWords: 55,
    },
    homework: [
      "Find five four-letter words in anything you read today and say whether each has a start or end blend.",
      "Read your five words with the three-pass routine.",
      "Look around one room and find three objects whose names have blends.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Word Families
  // =========================================================================
  {
    slug: "ch-05-l-03",
    minutes: 25,
    description:
      "Change one letter, get a new word: the -at, -an, -it and -op families multiply your reading power for free.",
    outcomes: [
      "Build a word family from a shared ending",
      "Read all the words in four common families",
      "Create a new word by swapping the first sound",
      "Use family words in short sentences",
    ],
    blocks: [
      LI(
        "Here is the cheapest trick in English: keep the ending, change the beginning, and get a new word. Cat becomes hat becomes mat becomes sat — one family, many words. In this lesson you learn to read whole families at once. Your vocabulary is about to grow very fast.",
        [
          "You can hear the final sounds of words and rhyme with them (Chapter 04).",
          "You can read CVC words in one look (Lesson 1).",
        ],
      ),
      H("One family, many words"),
      T(
        "A word family is a set of words that share the same ending. Cat, hat, mat and sat all belong to the -at family. If you can read one member, you can read them all — just swap the first sound. The ending does all the heavy work.",
      ),
      {
        type: "definition",
        term: "word family",
        partOfSpeech: "noun",
        definition:
          "A word family is a group of words that share the same ending letters and the same ending sound — like cat, hat and mat in the -at family.",
        example: {
          english: "-at family: cat, hat, mat, sat, bat, rat",
          translation: "One ending, six words.",
        },
      },
      TB(
        "Four essential families",
        ["Family", "Words"],
        [
          ["-at", "cat, hat, mat, sat, bat, rat"],
          ["-an", "man, pan, ran, fan, van, can"],
          ["-it", "sit, bit, hit, fit, pit, kit"],
          ["-op", "top, mop, hop, pop"],
        ],
        "Read each row aloud as one breath: cat-hat-mat-sat-bat-rat.",
      ),
      ST(
        "Build a family in three steps",
        [
          {
            title: "Step 1 — Take the ending",
            text: "Choose a family ending, for example -at. Read it alone: /æt/.",
            examples: [{ english: "-at → /æt/", note: "The ending is the family engine." }],
          },
          {
            title: "Step 2 — Add a first sound",
            text: "Put a consonant in front of the ending. /b/ + at gives bat. /h/ + at gives hat.",
            examples: [
              { english: "/b/ + at → bat", note: "One swap." },
              { english: "/h/ + at → hat", note: "Another swap — same ending." },
            ],
          },
          {
            title: "Step 3 — Collect the whole family",
            text: "Work through first sounds one by one: cat, mat, sat, rat. Keep the real words; skip the nonsense. Read the family in one breath.",
            examples: [
              { english: "cat, hat, mat, sat, bat, rat", note: "Six words, one ending." },
            ],
          },
        ],
      ),
      GR(
        "The family rule",
        "Keep the ending, change the beginning: -at → bat, cat, hat, mat, sat.",
        [
          { english: "hat → bat (change h to b)", translation: "Same ending, new word." },
          { english: "ran → fan (change r to f)", translation: "The -an family works the same way." },
          { english: "sit → fit (change s to f)", translation: "And the -it family too." },
        ],
        [
          "Not every swap gives a real word — families contain real words, and “zat” is not one of them. When in doubt, check meaning.",
        ],
      ),
      AU(
        "Listen: the -an family",
        "man, pan, ran, fan, van, can. Say each one after me — keep the ending exactly the same.",
        0.85,
      ),
      EXD(
        "Family words in real life",
        [
          { english: "A bat flies at night.", note: "The -at family has wings.", domain: "nature" },
          { english: "My hat is red.", note: "Shopping words live in -at.", domain: "shopping" },
          { english: "The mat is by the door.", note: "Home words too.", domain: "home" },
          { english: "We sat on the bus.", note: "Past actions sit in families.", domain: "travel" },
          { english: "Dad ran to the van.", note: "Two -an family words in one sentence.", domain: "family" },
          { english: "The fan is on.", note: "Summer’s favourite -an word.", domain: "home" },
          { english: "Open the can.", note: "Kitchen -an word.", domain: "food" },
          { english: "One hit wins the game.", note: "Sport lives in the -it family.", domain: "sport" },
          { english: "This sweater fits.", note: "Shopping again: fit from -it.", domain: "shopping" },
          { english: "Mop the floor, please.", note: "Housework lives in -op.", domain: "home" },
          { english: "Hop like a rabbit!", note: "Children’s games use -op words.", domain: "social" },
          { english: "The top spins.", note: "Toy box -op word.", domain: "home" },
        ],
        "Twelve sentences, four families. Every family word arrives with a situation you already know.",
      ),
      US(
        [
          {
            situation: "Spelling tests",
            example: "Learn -at once, spell six words correctly.",
            note: "Families are spelling insurance.",
          },
          {
            situation: "Rhyming books",
            example: "“The Cat in the Hat” — a whole bestseller from one family.",
            note: "Writers love families because they rhyme.",
          },
          {
            situation: "Word games",
            example: "Name three -an words in five seconds — easy now.",
            note: "Family knowledge wins word games.",
          },
          {
            situation: "Fast vocabulary growth",
            example: "Four families equal about twenty-two words.",
            note: "The cheapest vocabulary lesson in English.",
          },
          {
            situation: "First story books",
            example: "Early readers are built family by family.",
            note: "Your first full book is closer than you think.",
          },
        ],
        "Why families matter",
        "One ending learned well is many words owned forever.",
      ),
      DL(
        "Family speed drill",
        "A teacher drills word families with the class.",
        [
          ["Teacher", "Family drill! The ending is -at. I say a sound, you say the word. /b/?"],
          ["Class", "Bat!"],
          ["Teacher", "/h/?"],
          ["Class", "Hat!"],
          ["Teacher", "/r/?"],
          ["Class", "Rat!"],
          ["Teacher", "New ending: -op. /m/?"],
          ["Class", "Mop!"],
          ["Teacher", "Six words in ten seconds — your families are getting fast."],
        ],
      ),
      CMP(
        "Learning word by word vs learning families",
        ["One word at a time", "Word families"],
        [
          ["Effort", "Memorise each word separately", "Learn one ending, get the rest"],
          ["Words gained per lesson", "One or two", "Six to eight"],
          ["Memory", "Isolated words fade fast", "A pattern carries its whole family"],
          ["Example", "Learn “cat”. Then learn “hat” as a new word.", "Learn “-at”: cat, hat, mat, sat arrive together."],
        ],
        {
          intro: "Same effort, very different results.",
          verdict:
            "Memorise less, pattern more. The family ending is the engine — the first sound is just the steering wheel.",
        },
      ),
      MS(
        [
          [
            "I write “mat” when I mean “man”.",
            "I check the ending: -at against -an.",
            "Family endings look similar. Read all the way to the end before you decide.",
          ],
          [
            "Hat and hen are in the same family.",
            "Hat is in the -at family; hen is in the -en family.",
            "The ENDING decides the family — not the first letter.",
          ],
          [
            "Sit and sat are in the same family.",
            "Sit is in the -it family; sat is in the -at family.",
            "The vowel inside the ending changes the family.",
          ],
          [
            "Every word I build with -at is a real word.",
            "Families contain real words: bat, cat, fat, hat, mat, pat, rat, sat.",
            "Some swaps make nonsense words. Keep the real ones; skip the rest.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Families are free vocabulary",
        "Learn one ending and you instantly read six to eight words. Four families equal about twenty-two words — the cheapest vocabulary lesson you will ever get.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "A word family shares the same ending. The -at family has cat, hat, mat, sat, bat and rat. The -an family has man, pan, ran and fan. When you read one member of a family, you can read them all. Swap the first sound and the ending keeps working. That is why families grow your vocabulary so fast.",
          task: "Read the text two times. Then say six words from the -at family from memory.",
        },
        writing: {
          task: "Build two families on paper: -ig and -un. Write at least four words for each.",
          guide: ["-ig: big, dig, ___", "-un: sun, run, ___"],
          model: "-ig: big, dig, pig, wig · -un: sun, run, fun, bun",
        },
        listening: {
          script:
            "Listen to the families. -at: cat, hat, mat, sat. -an: man, pan, ran, fan. -it: sit, bit, hit, fit. -op: top, mop, hop, pop. Now say each family with me, in one breath.",
          task: "Say each family along with the audio — same ending, changing first sound.",
        },
        speaking: {
          task: "Play the swap game out loud: say “cat”, then swap the first sound three times.",
          frames: ["cat → hat → mat → sat", "man → pan → ran → fan", "sit → bit → hit → fit"],
          checklist: [
            "I kept the ending exactly the same.",
            "I changed only the first sound.",
          ],
        },
      }),
      LSP(
        [
          gls("A word family shares the same ending."),
          gls("Words that rhyme end with the same sound."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A word family shares the same ending letters and sound: -at, -an, -it, -op.",
        "Build families by keeping the ending and swapping the first sound.",
        "One ending learned well equals six to eight words owned.",
        "The ending decides the family — mat and man are in different families.",
        "Some swaps make nonsense words: keep the real ones.",
      ]),
      RV(
        [
          {
            question: "In a blend, like st in stop…",
            options: [
              "the two letters make one new sound",
              "each letter keeps its own sound",
              "you say only the first letter",
            ],
            correctIndex: 1,
            explanation: "Blends keep two sounds — that is what makes them different from sh.",
            from: "Chapter 05 · Lesson 2",
          },
          {
            question: "Which word is CCVC?",
            options: ["hand", "frog", "cat"],
            correctIndex: 1,
            explanation: "Frog starts with the blend fr: /f/ /r/ /ɒ/ /g/.",
            from: "Chapter 05 · Lesson 2",
          },
          {
            question: "Two words rhyme when they…",
            options: ["start the same", "end with the same sound", "mean the same"],
            correctIndex: 1,
            explanation: "Rhyme is in the ending — which is exactly where families live.",
            from: "Chapter 04 · Lesson 3",
          },
        ],
        { title: "Look back — blends and rhymes" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Which word belongs to the -an family?",
            [
              ["a", "man"],
              ["b", "hat"],
              ["c", "hop"],
            ],
            "a",
            fb("man", "The -an family keeps the ending -an: man, pan, ran, fan, van, can."),
            { hints: ["Say the ending of each option out loud."] },
          ),
          FB(
            "Write the missing letter to finish the family word.",
            "f ___ n (it cools you in summer)",
            ["a"],
            fb("a", "Fan belongs to the -an family — f + an."),
            { hints: ["The family is -an."] },
          ),
          MATCH(
            "Match each word with its family.",
            [
              ["w1", "rat"],
              ["w2", "kit"],
              ["w3", "pop"],
              ["w4", "van"],
            ],
            [
              ["f1", "-op"],
              ["f2", "-at"],
              ["f3", "-an"],
              ["f4", "-it"],
            ],
            [
              ["w1", "f2"],
              ["w2", "f4"],
              ["w3", "f1"],
              ["w4", "f3"],
            ],
            fb("rat → -at, kit → -it, pop → -op, van → -an", "The ending of each word names its family."),
            { hints: ["Read only the ending of each word."] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "pan",
            ["pan"],
            fb("pan", "Kitchen word from the -an family: /p/ /æ/ /n/."),
            { hints: ["Three sounds, -an family: /p/ + an."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you own these families.",
        questions: [
          MCQ(
            "Swap the first sound of “sit”: /h/ + it gives…",
            [
              ["a", "hat"],
              ["b", "hit"],
              ["c", "hot"],
            ],
            "b",
            fb("hit", "Keep the -it ending and change only the first sound: sit → hit."),
          ),
          MCQ(
            "Which word is NOT in the same family as the others?",
            [
              ["a", "mat"],
              ["b", "sat"],
              ["c", "man"],
            ],
            "c",
            fb("man", "Mat and sat end in -at. Man ends in -an — a different family."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Sit and sat are in the same family.",
            ["Sit and sat are in different families."],
            fb(
              "Sit and sat are in different families.",
              "Sit ends in -it and sat ends in -at. The vowel in the ending sets the family.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Family builder",
      instructions:
        "Build the -ig family and the -un family with at least four words each. Then write one sentence that uses two words from the same family — for example: “The pig is big.”",
      minWords: 10,
      maxWords: 50,
    },
    homework: [
      "Read all four families from the lesson table three times — in one breath each.",
      "Invent your own family using any CVC ending you like, with at least four real words.",
      "Find two family words in a song, story or message today.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Letter Combinations and Syllables
  // =========================================================================
  {
    slug: "ch-05-l-04",
    minutes: 25,
    description:
      "Meet sh, ch, th and ck — two letters acting as one sound — and learn to count syllables, the beats of a word.",
    outcomes: [
      "Read words containing sh, ch, th and ck",
      "Explain what a digraph is with an example",
      "Count syllables in one- and two-syllable words",
      "Segment words with digraphs correctly",
    ],
    blocks: [
      LI(
        "Some letter pairs refuse to be split. When s and h stand together they make one new sound — /ʃ/ — and words like ship and fish become readable. In this lesson you meet the four beginner digraphs, and you learn syllables: the beats that organise every word you say.",
        [
          "You know that blends like st keep two separate sounds (Lesson 2).",
          "You can segment words into sounds for spelling (Chapter 04).",
        ],
      ),
      vocGlossary("New words for this lesson", [
        { word: "digraph", partOfSpeech: "noun", definition: "Two letters that make one sound together, like sh in ship." },
        { word: "syllable", partOfSpeech: "noun", definition: "One beat of a word. Every syllable has one vowel sound." },
        { word: "beat", partOfSpeech: "noun", definition: "One clap of rhythm — syllables are the beats of words." },
        { word: "word family", partOfSpeech: "noun", definition: "Words that share the same ending, like cat, hat and mat." },
      ]),
      H("Two letters, one sound"),
      T(
        "Some letter pairs join into a single new sound. These pairs are called digraphs. The four you meet most in beginner words are sh, ch, th and ck. They are not blends: with a digraph you hear ONE sound, not two.",
      ),
      {
        type: "definition",
        term: "digraph",
        partOfSpeech: "noun",
        definition:
          "A digraph is two letters that make ONE sound together — like sh in ship and ck in duck.",
        example: {
          english: "sh-i-p → /ʃ/ /ɪ/ /p/ → ship",
          translation: "Three sounds, four letters — the sh works as one team.",
        },
      },
      TB(
        "The four beginner digraphs",
        ["Pair", "Sound", "Words"],
        [
          ["sh", "/ʃ/ as in ship", "ship, shop, fish, wish"],
          ["ch", "/tʃ/ as in chip", "chip, chat, chess, lunch"],
          ["th", "/θ/ as in thin", "thin, thick, math, bath"],
          ["ck", "/k/ as in duck", "duck, sock, lock, kick"],
        ],
        "Two letters, one sound — every time you see the pair.",
      ),
      ST(
        "Read a digraph word in three steps",
        [
          {
            title: "Step 1 — See the pair",
            text: "Scan the word for letter pairs before you read. Ship starts with s-h — a digraph, not two separate sounds.",
            examples: [{ english: "ship → s-h at the start", note: "Spot the team first." }],
          },
          {
            title: "Step 2 — Say its ONE sound",
            text: "Say the digraph as a single sound: /ʃ/. Never “s… h” — that turns ship into a different word.",
            examples: [
              { english: "sh → /ʃ/", note: "One sound, two letters." },
              { english: "ck → /k/", note: "Also one sound — never /k/ /k/." },
            ],
          },
          {
            title: "Step 3 — Blend with the rest",
            text: "Blend the digraph into the other sounds and say the whole word.",
            examples: [
              { english: "/ʃ/ /ɪ/ /p/ → ship", note: "Digraph first, then the rest." },
              { english: "/d/ /ʌ/ /k/ → duck", note: "Digraph ck closes this word." },
            ],
          },
        ],
      ),
      GR(
        "The digraph rule",
        "sh, ch, th and ck are two letters making one sound. Never split them, never read them separately.",
        [
          { english: "sh-i-p → ship", translation: "sh says /ʃ/." },
          { english: "ch-a-t → chat", translation: "ch says /tʃ/." },
          { english: "d-u-ck → duck", translation: "ck says /k/ — one /k/, not two." },
        ],
        [
          "The th in “thin” is airy, and the th in “this” buzzes. Same letters, two nearby sounds — but still ONE sound each. You will train both in pronunciation practice.",
        ],
      ),
      H("Syllables: word beats"),
      T(
        "Every syllable is one beat of a word, and every syllable has one vowel sound. Cat has one beat. Rab-bit has two. Clap as you say a word: the number of claps is the number of syllables.",
      ),
      {
        type: "definition",
        term: "syllable",
        partOfSpeech: "noun",
        definition:
          "A syllable is one beat of a word. Every syllable has exactly one vowel sound.",
        example: {
          english: "rabbit → rab·bit",
          translation: "Two beats, two claps, two vowel sounds.",
        },
      },
      TB(
        "Count the beats",
        ["Word", "Syllables", "Why"],
        [
          ["cat", "1", "one vowel sound"],
          ["ship", "1", "one vowel sound — the digraph changes nothing"],
          ["rabbit", "2 (rab·bit)", "two vowel sounds, two claps"],
          ["pencil", "2 (pen·cil)", "two vowel sounds, two claps"],
          ["lesson", "2 (les·son)", "two vowel sounds, two claps"],
        ],
        "Clap as you say each word — your hands count the beats.",
      ),
      AU(
        "Listen: digraphs and beats",
        "ship. chat. thin. duck. Now clap with me: rab-bit — two claps. pen-cil — two claps. les-son — two claps.",
        0.8,
      ),
      EXD(
        "Digraphs and beats in real words",
        [
          { english: "ship → /ʃ/ /ɪ/ /p/", note: "Travel by sea, digraph at the start.", domain: "travel" },
          { english: "shop → /ʃ/ /ɒ/ /p/", note: "The same /ʃ/ opens a shopping word.", domain: "shopping" },
          { english: "fish → /f/ /ɪ/ /ʃ/", note: "Digraph at the END this time — three sounds, four letters.", domain: "food" },
          { english: "wish → /w/ /ɪ/ /ʃ/", note: "Make a wish — it ends with /ʃ/.", domain: "social" },
          { english: "chip → /tʃ/ /ɪ/ /p/", note: "The /tʃ/ of ch opens the word.", domain: "food" },
          { english: "chat → /tʃ/ /æ/ /t/", note: "One chat app, one digraph.", domain: "technology" },
          { english: "lunch → /l/ /ʌ/ /n(t)ʃ/", note: "The midday meal ends with ch — one beat.", domain: "work" },
          { english: "thin → /θ/ /ɪ/ /n/", note: "The airy th starts it — the opposite of thick.", domain: "health" },
          { english: "bath → /b/ /ɑː/ /θ/", note: "Home word ending in the digraph th.", domain: "home" },
          { english: "duck → /d/ /ʌ/ /k/", note: "Swims in the pond, ends in ck.", domain: "nature" },
          { english: "lock → /l/ /ɒ/ /k/", note: "Safety at home: ck again.", domain: "home" },
          { english: "kick → /k/ /ɪ/ /k/", note: "Sport word with ck at the end.", domain: "sport" },
          { english: "rabbit → rab·bit", note: "Two beats, two claps — a nature word with rhythm.", domain: "nature" },
          { english: "pencil → pen·cil", note: "Two beats — school supplies keep time.", domain: "education" },
        ],
        "Digraph words and beat words side by side. Count sounds with your ears, beats with your hands.",
      ),
      US(
        [
          {
            situation: "Children’s books",
            example: "“She sells sea shells…” — sh words everywhere.",
            note: "Early books are digraph training in disguise.",
          },
          {
            situation: "Recipes",
            example: "Chop the onion. Mash the potato.",
            note: "Kitchen instructions lean on ch and sh.",
          },
          {
            situation: "Safety at home",
            example: "Lock the door.",
            note: "One small digraph word, one big job.",
          },
          {
            situation: "School words",
            example: "Math after lunch.",
            note: "The timetable runs on th and ch.",
          },
          {
            situation: "Songs and chants",
            example: "Clap the beats of every line: hap-py birth-day to you.",
            note: "Musicians count syllables for a living.",
          },
        ],
        "Where digraphs and beats live",
        "Once you can hear one sound in two letters, and one beat per vowel, English starts sounding organised.",
      ),
      DL(
        "Clap the name",
        "Sara and Rami turn names and words into rhythm.",
        [
          ["Sara", "New game! We clap the beats in names. Listen: Ho-sein — two claps."],
          ["Rami", "My turn! Ma-ya — two claps."],
          ["Sara", "Right! Now a hard one: A-me-na."],
          ["Rami", "A-me-na… three claps!"],
          ["Sara", "Perfect. Now words: pencil."],
          ["Rami", "Pen-cil — two claps. And fish — one clap."],
          ["Sara", "You can hear beats now. Syllables have no secrets from you."],
        ],
      ),
      CMP(
        "Blend vs digraph",
        ["Blend (st, nd, fr, pl)", "Digraph (sh, ch, th, ck)"],
        [
          ["Letters", "Two consonants", "Two consonants"],
          ["Sounds", "Two — each letter keeps its own", "One — the pair becomes a new sound"],
          ["Example", "stop → /s/ /t/ /ɒ/ /p/", "ship → /ʃ/ /ɪ/ /p/"],
          ["How to say it", "Slide two sounds together", "Say one new sound"],
        ],
        {
          intro: "Both are two consonants standing together — the difference is what you HEAR.",
          verdict:
            "See two consonants? Ask: one sound or two? stop has two (/s/ /t/); ship has one (/ʃ/). Your ears decide.",
        },
      ),
      MS(
        [
          [
            "I read “ship” as “s-hip”.",
            "I read ship as /ʃ/ /ɪ/ /p/.",
            "S-h together say /ʃ/ — one sound, never two.",
          ],
          [
            "“Fish” has four sounds.",
            "“Fish” has three sounds: /f/ /ɪ/ /ʃ/.",
            "Two letters (sh), one sound. Count with your ears, not your eyes.",
          ],
          [
            "“Rabbit” has one syllable because it is one word.",
            "“Rabbit” has two syllables: rab·bit.",
            "Syllables count BEATS (vowel sounds), not words.",
          ],
          [
            "I say “duck” as /d/ /ʌ/ /k/ /k/.",
            "I say duck as /d/ /ʌ/ /k/.",
            "Ck is one /k/ sound. A digraph never doubles.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Digraphs beat letter-counting",
        "When you segment “fish” you hear three sounds but write four letters. Trust your ears first, then choose the letters for the sounds.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "A digraph is two letters that make one sound. Ship starts with sh — one sound, /ʃ/. Duck ends with ck — one sound, /k/. Now count beats: cat has one beat, rabbit has two, and every beat carries one vowel sound. Digraphs change how many LETTERS a word has. Syllables count how many BEATS it has.",
          task: "Read the text two times. Then say the four beginner digraphs from memory.",
        },
        writing: {
          task: "Write five digraph words (with sh, ch, th or ck) and three two-syllable words with a dot between the beats — like rab.bit.",
          guide: ["sh: ship, shop, ___", "Two beats: rab.bit, pen.cil, ___"],
          model: "sh: ship, shop, fish · ch: chip · th: thin · ck: duck · rab.bit · pen.cil · les.son",
        },
        listening: {
          script:
            "ship. chat. thin. duck. Now clap with me. rab-bit — clap, clap. pen-cil — clap, clap. les-son — clap, clap. One more: duck — one clap only.",
          task: "Clap the beats of every word — one clap or two.",
        },
        speaking: {
          task: "Say one word for each digraph, then clap the beats of three family names.",
          frames: ["sh: shop", "ch: chat", "th: thin", "ck: sock", "Ma-ya — clap, clap"],
          checklist: [
            "I said four digraph words with one clear sound each.",
            "I clapped the beats of every name.",
          ],
        },
      }),
      LSP(
        [
          gls("Two letters can make one sound."),
          gls("A syllable is one beat of a word."),
          gls("Clap once for each beat."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A digraph is two letters making one sound: sh, ch, th, ck.",
        "Ship has three sounds but four letters — count with your ears.",
        "A syllable is one beat of a word, and every beat has one vowel sound.",
        "Clap to count beats: cat = 1, rabbit = 2, pencil = 2.",
        "Blends keep two sounds (st); digraphs keep one (/ʃ/). Ask your ears which.",
      ]),
      RV(
        [
          {
            question: "Which family does “rat” belong to?",
            options: ["-at", "-an", "-it"],
            correctIndex: 0,
            explanation: "Rat keeps the -at ending: cat, hat, mat, sat, bat, rat.",
            from: "Chapter 05 · Lesson 3",
          },
          {
            question: "In a blend like st…",
            options: [
              "the two letters make one new sound",
              "each letter keeps its own sound",
              "you say only the second letter",
            ],
            correctIndex: 1,
            explanation: "Blends keep two sounds — /s/ and /t/ both survive in stop.",
            from: "Chapter 05 · Lesson 2",
          },
          {
            question: "How many sounds does “fish” have?",
            options: ["2", "3", "4"],
            correctIndex: 1,
            explanation: "/f/ /ɪ/ /ʃ/ — three sounds. The sh pair writes the single sound /ʃ/.",
            from: "Chapter 04 · Lesson 6",
          },
        ],
        { title: "Look back — families, blends, sounds" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "How many sounds do you hear in “ship”?",
            [
              ["a", "2"],
              ["b", "3"],
              ["c", "4"],
            ],
            "b",
            fb("3: /ʃ/ /ɪ/ /p/", "Sh is two letters but one sound — ship has three sounds and four letters."),
            { hints: ["Remember: some letter pairs make one sound."] },
          ),
          FB(
            "Write the missing digraph.",
            "du ___ (a bird that swims)",
            ["ck"],
            fb("ck", "Duck ends with the digraph ck — two letters saying one /k/ sound."),
            { hints: ["Two letters write the final /k/ sound."] },
          ),
          MATCH(
            "Match each digraph with its example word.",
            [
              ["d1", "sh"],
              ["d2", "ch"],
              ["d3", "th"],
              ["d4", "ck"],
            ],
            [
              ["w1", "duck"],
              ["w2", "ship"],
              ["w3", "thin"],
              ["w4", "chip"],
            ],
            [
              ["d1", "w2"],
              ["d2", "w4"],
              ["d3", "w3"],
              ["d4", "w1"],
            ],
            fb("sh → ship, ch → chip, th → thin, ck → duck", "Each digraph lives inside its example word."),
            { hints: ["Say each word slowly and listen for the pair."] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "shop",
            ["shop"],
            fb("shop", "The digraph sh opens the word: /ʃ/ /ɒ/ /p/."),
            { hints: ["It starts with one sound made of two letters: /ʃ/."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — one sound, two letters.",
        questions: [
          MCQ(
            "How many syllables does “pencil” have?",
            [
              ["a", "1"],
              ["b", "2"],
              ["c", "3"],
            ],
            "b",
            fb("2: pen·cil", "Two vowel sounds means two beats — pen·cil."),
          ),
          MCQ(
            "Which word contains a digraph?",
            [
              ["a", "stop"],
              ["b", "fish"],
              ["c", "plan"],
            ],
            "b",
            fb("fish", "Fish ends with sh — one sound /ʃ/. Stop and plan contain blends, which keep two sounds."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Rabbit has one syllable.",
            ["Rabbit has two syllables."],
            fb(
              "Rabbit has two syllables.",
              "Rab·bit — two beats, two vowel sounds, two claps.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Digraph and syllable list",
      instructions:
        "Write five words with digraphs (sh, ch, th or ck) and three two-syllable words, marking the syllable break with a dot like “rab.bit”. Then write one sentence using one digraph word and one two-syllable word.",
      minWords: 10,
      maxWords: 55,
    },
    homework: [
      "Find four digraph words in anything you read today.",
      "Clap the syllables of five objects around you.",
      "Say the four digraph sounds to someone and ask them to write the letter pairs.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Reading Simple Words Fluently and Chapter Review
  // =========================================================================
  {
    slug: "ch-05-l-05",
    minutes: 25,
    description:
      "Put every pattern together — CVC, blends, families and digraphs — and read mixed word lists and simple sentences at conversational speed.",
    outcomes: [
      "Read a mixed list of three- and four-letter words",
      "Read simple sentences built only from learned patterns",
      "Say which pattern a word uses",
      "Answer the Chapter 05 review questions",
    ],
    blocks: [
      LI(
        "Real reading never sorts words by pattern — it mixes them. A single line can hold cat, stop, fish and plan. In this lesson you read mixed lists and real sentences with everything you have learned. At the end, you take the Chapter 05 review.",
        [
          "You can read CVC words in one look (Lesson 1).",
          "You can read blends, families and digraphs (Lessons 2–4).",
        ],
      ),
      H("Everything together"),
      T(
        "Real reading mixes everything: short vowels, four-letter words, families and digraphs — often in one sentence. Below is a mixed list in the style of a real beginner reader. Run the three-pass routine on it, one last time.",
      ),
      TB(
        "The mixed list",
        ["Set A", "Set B", "Set C"],
        [
          ["cat", "hand", "ship"],
          ["stop", "fish", "chat"],
          ["milk", "hat", "duck"],
          ["plan", "thin", "sock"],
          ["hop", "best", "chip"],
        ],
        "Fifteen words: CVC, CVCC, CCVC and digraphs — all mixed, like a real page.",
      ),
      ST(
        "Read a mixed list in three steps",
        [
          {
            title: "Step 1 — Scan for pairs and blends",
            text: "Before reading, find the sh, ch, th, ck pairs and the st, nd, mp blends. Knowing where the teams are makes reading smoother.",
            examples: [{ english: "ship (sh), stop (st), milk (lk)", note: "Spot the teams first." }],
          },
          {
            title: "Step 2 — Read set by set",
            text: "Read one set at a time. Blend only the words that are new to you; read the rest in one look.",
            examples: [
              { english: "cat, stop, milk, plan, hop", note: "Set A — smooth and steady." },
            ],
          },
          {
            title: "Step 3 — Reread faster",
            text: "Read all three sets again, a little faster. Then one more time at speaking speed. That is the three-pass routine on mixed words.",
            examples: [
              { english: "All fifteen words in under twenty seconds", note: "That is real reading speed for a beginner." },
            ],
          },
        ],
      ),
      GR(
        "The real-reading rule",
        "Real texts mix patterns in every line. When you meet a word, ask: CVC, blend, family or digraph? Then read it with the pattern you know.",
        [
          { english: "The pig sat on the bed.", translation: "CVC words plus the -at family." },
          { english: "The frog hops on the sand.", translation: "Start blend fr and end blend nd in one line." },
          { english: "I wish for fish.", translation: "Digraphs sh at both ends." },
        ],
        [
          "A few very common words do not follow the patterns yet — “the”, “of”, “said”. These are sight words. You will meet them gradually; do not force them into patterns.",
        ],
      ),
      AU(
        "Listen: read along",
        "cat, stop, milk, plan, hop. hand, fish, hat, thin, best. ship, chat, duck, sock, chip. Now read them with me — at speaking speed.",
        0.95,
      ),
      EXD(
        "Real sentences — all yours to read",
        [
          { english: "The cat sat on the mat.", note: "Pure CVC and -at family words — your Chapter 04 skills at work.", domain: "home" },
          { english: "I can hop to the shop.", note: "CVC hop, and shop starts with the digraph sh.", domain: "shopping" },
          { english: "The bus stops here.", note: "CVC bus plus the start blend st in stops.", domain: "travel" },
          { english: "We had fish and chips.", note: "Two digraphs on one plate: sh in fish, ch in chips.", domain: "food" },
          { english: "My hand is clean.", note: "The end blend nd holds up a health sentence.", domain: "health" },
          { english: "The duck swims.", note: "Digraph ck closing a nature word.", domain: "nature" },
          { english: "This is my best pen.", note: "End blend st plus CVC pen — school words.", domain: "education" },
          { english: "Plan the trip with a map.", note: "Start blend pl plus CVC map — work and travel together.", domain: "work" },
          { english: "The flag is red.", note: "Start blend fl plus the -ed family word red.", domain: "education" },
        ],
        "Nine sentences, and every single word follows a pattern you have learned. That is what a reading foundation means.",
      ),
      US(
        [
          {
            situation: "A first children’s book",
            example: "You read a whole page alone — slowly, but you read it.",
            note: "Mixed lists were the training; books are the reward.",
          },
          {
            situation: "Text messages",
            example: "“Get milk. Stop at the shop.” — patterns in your pocket.",
            note: "Short messages are perfect reading practice.",
          },
          {
            situation: "Food labels",
            example: "Jam, chips, nuts, tea — the pantry is a library.",
            note: "Read one label every time you open the cupboard.",
          },
          {
            situation: "Game instructions",
            example: "“Press stop. Pick the red chip.”",
            note: "Games test your speed for you.",
          },
          {
            situation: "Street signs",
            example: "BUS STOP — no blending needed any more.",
            note: "Signs now read themselves in your head.",
          },
        ],
        "Where the mixed reading pays off",
        "The world does not sort words by lesson — and now it does not need to.",
      ),
      DL(
        "The first whole page",
        "Rami tells Sara about reading a book by himself.",
        [
          ["Rami", "Sara, I read a whole page last night!"],
          ["Sara", "A whole page? What was it about?"],
          ["Rami", "A cat, a dog and a big red bus. I only stopped twice."],
          ["Sara", "Which words stopped you?"],
          ["Rami", "“Shop” and “thin”. I blended them and carried on."],
          ["Sara", "Stop, blend, continue — that is exactly what good readers do."],
        ],
      ),
      CMP(
        "Careful reading vs fluent reading",
        ["Careful reading (slow, precise)", "Fluent reading (fast, smooth)"],
        [
          ["Purpose", "Building the skill", "Using the skill"],
          ["Speed", "As slow as needed", "At speaking speed"],
          ["Mistakes", "Almost none — you blend everything", "Rare — you blend when unsure"],
          ["When to use it", "New lists, new books, hard words", "Known words, rereading, everyday signs"],
        ],
        {
          intro: "Beginners think fluent readers never slow down. The truth is the opposite.",
          verdict:
            "Good readers slow down for new words and speed up for known ones — in the same sentence. Flexibility is the skill.",
        },
      ),
      MS(
        [
          [
            "I rush and guess new words to keep my speed.",
            "I blend once slowly, then reread faster.",
            "Speed without accuracy is just fast mistakes.",
          ],
          [
            "I stop dead at every word, even easy ones.",
            "I read known words in one look; I blend only the new ones.",
            "Your energy belongs to the new words.",
          ],
          [
            "I practise only my favourite word type.",
            "I practise mixed lists — real reading is mixed.",
            "Real texts mix CVC, blends and digraphs in every line.",
          ],
        ],
        "Common beginner mistakes",
      ),
      H("Chapter 05 review"),
      T(
        "You can now read CVC words in one look, four-letter words with blends, whole word families, digraph words and mixed lists. You can count syllables and you never guess. Check yourself with the questions below — then take the final reading task.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "This chapter turned you from a blender into a reader. You read CVC words in one look. You added start blends and end blends: stop, hand, milk. You read whole families: cat, hat, mat, sat. You met digraphs — sh, ch, th, ck — two letters with one sound. And you counted syllables, the beats of words. Mixed lists and simple sentences are now within your reach.",
          task: "Read the text two times. Then name the five skills of this chapter in your own words.",
        },
        writing: {
          task: "Copy the fifteen mixed-list words, then write three sentences using any three of them.",
          guide: ["Word 1: cat — “The cat sat.”", "Word 2: ___", "Word 3: ___"],
          model: "The cat sat. The bus stops. We had fish.",
        },
        listening: {
          script:
            "Listening check. Which word do you hear? One: ship or sheep? — ship. Two: hand or hat? — hand. Three: chat or cat? — chat. Four: stop or top? — stop. Well done — your ears now hear digraphs and blends.",
          task: "Choose the word you hear before the audio says it.",
        },
        speaking: {
          task: "Read the fifteen-word mixed list out loud in three passes — each pass faster.",
          frames: ["Pass 1 — slow and careful", "Pass 2 — faster", "Pass 3 — speaking speed"],
          checklist: [
            "I read all fifteen words in every pass.",
            "My final pass was smooth, with every word correct.",
          ],
        },
      }),
      LSP(
        [
          gls("Read the word in one look."),
          gls("Say it slowly first, then fast."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Real reading mixes patterns — CVC, blends, families and digraphs — in every line.",
        "Scan for pairs and blends before reading; blend only what is new.",
        "Known words get one look; new words get one careful blend.",
        "A few sight words (the, of, said) do not follow patterns yet — learn them as they come.",
        "This chapter completed your beginner reading engine: fluency, blends, families, digraphs, syllables.",
      ]),
      RV(
        [
          {
            question: "The three-pass routine is…",
            options: [
              "reading a list slowly, faster, then at speaking speed",
              "reading three books",
              "blending every word three times forever",
            ],
            correctIndex: 0,
            explanation: "Three passes on the same list build instant recognition.",
            from: "Chapter 05 · Lesson 1",
          },
          {
            question: "“Stop” and “plan” are…",
            options: ["CVCC words", "CCVC words with start blends", "digraph words"],
            correctIndex: 1,
            explanation: "Both start with a blend — st and pl — so they are CCVC.",
            from: "Chapter 05 · Lesson 2",
          },
          {
            question: "The -an family includes…",
            options: ["cat, hat", "man, pan", "sit, hit"],
            correctIndex: 1,
            explanation: "The -an ending defines the family: man, pan, ran, fan, van, can.",
            from: "Chapter 05 · Lesson 3",
          },
          {
            question: "A digraph is…",
            options: [
              "two letters making one sound",
              "two letters keeping two sounds",
              "one letter making two sounds",
            ],
            correctIndex: 0,
            explanation: "Sh, ch, th and ck are two letters with ONE sound.",
            from: "Chapter 05 · Lesson 4",
          },
          {
            question: "How many syllables does “lesson” have?",
            options: ["1", "2", "3"],
            correctIndex: 1,
            explanation: "Les·son — two beats, two vowel sounds.",
            from: "Chapter 05 · Lesson 4",
          },
          {
            question: "What do you do with a new word in a sentence?",
            options: ["Skip it", "Blend it once, then read on", "Guess from the first letter"],
            correctIndex: 1,
            explanation: "Stop, blend, continue — the flexible reader’s way.",
            from: "Chapter 05 · Lesson 5",
          },
        ],
        { title: "Chapter 05 review — the whole chapter", intro: "Six questions from Lessons 1 to 5. Can you answer them all?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Which pattern does “ship” use?",
            [
              ["a", "CVC"],
              ["b", "Start blend"],
              ["c", "Digraph"],
            ],
            "c",
            fb("Digraph", "Sh is two letters with one sound /ʃ/ — that is a digraph, not a blend."),
            { hints: ["How many sounds does sh make — one or two?"] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "chat",
            ["chat"],
            fb("chat", "The digraph ch opens the word: /tʃ/ /æ/ /t/."),
            { hints: ["It starts with the sound /tʃ/, written with two letters."] },
          ),
          MATCH(
            "Match each word with its pattern.",
            [
              ["w1", "stop"],
              ["w2", "milk"],
              ["w3", "duck"],
              ["w4", "cat"],
            ],
            [
              ["p1", "Digraph at the end"],
              ["p2", "Start blend"],
              ["p3", "CVC"],
              ["p4", "End blend"],
            ],
            [
              ["w1", "p2"],
              ["w2", "p4"],
              ["w3", "p1"],
              ["w4", "p3"],
            ],
            fb("stop → start blend, milk → end blend, duck → digraph, cat → CVC", "Ask: how many sounds, and where do they team up?"),
            { hints: ["Check the first two letters and the last two letters of each word."] },
          ),
          FB(
            "Complete the sentence.",
            "The word “best” ends with the blend ___.",
            ["st"],
            fb("st", "Best is CVCC: /b/ /e/ /s/ /t/ — the st closes the word."),
            { hints: ["Say the last two sounds of best." ] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you have all the patterns.",
        questions: [
          MCQ(
            "You meet a new word while reading a story. What do you do?",
            [
              ["a", "Skip it and hope it does not matter"],
              ["b", "Blend or read it with its pattern, then continue"],
              ["c", "Close the book"],
            ],
            "b",
            fb("Blend or read it with its pattern, then continue", "Stop, blend, continue — the flexible reader’s way."),
          ),
          MCQ(
            "Which word is a sight word that does NOT follow the patterns yet?",
            [
              ["a", "the"],
              ["b", "cat"],
              ["c", "ship"],
            ],
            "a",
            fb("the", "Cat is CVC and ship has a digraph, but “the” must be learned by sight for now."),
          ),
          CORR(
            "Find and correct the mistake.",
            "I practise only CVC words.",
            ["I practise mixed word lists."],
            fb(
              "I practise mixed word lists.",
              "Real reading mixes CVC, blends, families and digraphs — practise the mix.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My reading record",
      instructions:
        "Copy the fifteen mixed-list words from the lesson table. Read them out loud three times using the three-pass routine, and note your fastest time. Then write three sentences using any three words from the list.",
      minWords: 20,
      maxWords: 65,
    },
    homework: [
      "Reread the mixed list once a day until every word is instant.",
      "Read one page of any simple book or message — stop, blend, continue.",
      "Teach someone the pattern question: “CVC, blend, family or digraph?”.",
    ],
  },
];
