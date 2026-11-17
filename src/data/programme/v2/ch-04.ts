/**
 * PROMPT 35 production — Batch B, Chapter 04: Introduction to Phonics.
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
  entries: { word: string; partOfSpeech: string; definition: string }[],
) {
  return VOC(
    "Phonics words for this lesson",
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

export const ch04Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Letter Names vs Letter Sounds
  // =========================================================================
  {
    slug: "ch-04-l-01",
    minutes: 20,
    description:
      "Meet phonics — the link between letters and sounds. Learn the two labels every letter has, and why reading always uses the sound.",
    outcomes: [
      "Say what phonics means in one simple sentence",
      "Give both the name and the sound of b, m, s, t and f",
      "Say a pure consonant sound with no extra vowel",
      "Choose correctly between names and sounds in real situations",
    ],
    blocks: [
      LI(
        "This lesson opens the door to real reading. You will learn phonics — the link between letters and sounds. You will meet the two labels every letter has: its name and its sound. Then you will say pure sounds, the raw material of reading.",
        [
          "You know the 26 letters and their names (Chapter 02).",
          "You can hear the difference between vowels and consonants (Chapter 03).",
        ],
      ),
      vocGlossary([
        { word: "phonics", partOfSpeech: "noun", definition: "The link between written letters and the sounds they make." },
        { word: "letter", partOfSpeech: "noun", definition: "A written mark that represents a sound." },
        { word: "sound", partOfSpeech: "noun", definition: "What you hear when someone speaks." },
        { word: "name", partOfSpeech: "noun", definition: "The word we use to call something." },
      ]),
      H("What is phonics?"),
      T(
        "Phonics is the link between letters and sounds. It teaches you that every letter has a sound. When you know the sounds, you can build words yourself. You do not need to memorise every word in English — the letters tell you how to read it.",
      ),
      {
        type: "definition",
        term: "phonics",
        partOfSpeech: "noun",
        definition:
          "Phonics is the method that connects written letters to the sounds they make, so you can read and build words by yourself.",
        example: {
          english: "The letter b makes the sound /b/.",
          translation: "That single link between mark and sound is phonics.",
        },
      },
      H("Two labels for every letter"),
      T(
        "Every letter has two labels. The name is what you say in the alphabet song. The sound is what the letter says inside a word. The letter b has the name “bee” and the sound /b/. Reading needs the sound. Spelling aloud needs the name.",
      ),
      TB(
        "Names and sounds — nine important letters",
        ["Letter", "Name", "Sound", "A word that starts with it"],
        [
          ["b", "bee", "/b/", "ball"],
          ["m", "em", "/m/", "moon"],
          ["s", "es", "/s/", "sun"],
          ["t", "tee", "/t/", "top"],
          ["f", "ef", "/f/", "fish"],
          ["d", "dee", "/d/", "dog"],
          ["n", "en", "/n/", "net"],
          ["p", "pee", "/p/", "pen"],
          ["h", "aitch", "/h/", "home"],
        ],
        "Say each sound in a short, clipped way — no “-uh” at the end.",
      ),
      AU(
        "Listen: names, then sounds",
        "The name is em. The sound is m. The name is es. The sound is s. The name is bee. The sound is b. Now you try each sound after me.",
        0.8,
      ),
      ST(
        "Say a pure sound in three steps",
        [
          {
            title: "Step 1 — Look at the letter",
            text: "Point at the letter. Do not say its name yet. Names are for spelling aloud, and this is sound practice.",
            examples: [{ english: "b", note: "Just look and point." }],
          },
          {
            title: "Step 2 — Say the sound alone",
            text: "Say a short, clean sound. Do not add “-uh” or “-ee”. The sound of b is /b/, not “buh”.",
            examples: [{ english: "/b/ … /b/ … /b/", note: "Short and clipped, like a small tap." }],
          },
          {
            title: "Step 3 — Test it with a word",
            text: "Find a word that starts with the letter. Say the sound, then the word. If the word opens with your sound, you are right.",
            examples: [
              { english: "/b/ … ball", note: "The sound opens the word." },
              { english: "/m/ … moon", note: "Hum with closed lips, then say the word." },
            ],
          },
        ],
      ),
      GR(
        "The name–sound rule",
        "When you READ, use letter sounds. When you SPELL ALOUD — for example on the phone — use letter names.",
        [
          { english: "c-a-t → /k/ /æ/ /t/ → cat", translation: "Reading: sounds, from left to right." },
          { english: "“My name is Sara: S-A-R-A.”", translation: "Spelling aloud: names — es, ay, ar, ay." },
          { english: "A sign says BUS — read /b/ /ʌ/ /s/ → bus.", translation: "Signs are read, not spelled." },
        ],
        ["Abbreviations are spoken with names — “BBC”, “USB”, “OK”. They are letter names doing a job, not words."],
      ),
      EXD(
        "Sounds at work in real words",
        [
          { english: "b → /b/ in bus", note: "Lips press together, then pop open. No “buh”.", domain: "travel" },
          { english: "m → /m/ in milk", note: "Close your lips and hum: /mmm/.", domain: "food" },
          { english: "s → /s/ in sun", note: "Air hisses between your teeth.", domain: "nature" },
          { english: "t → /t/ in top", note: "The tongue taps behind the teeth and lets go.", domain: "everyday" },
          { english: "f → /f/ in fish", note: "Top teeth on bottom lip — air flows out.", domain: "food" },
          { english: "d → /d/ in dog", note: "Like /t/, but with voice. Feel your throat buzz.", domain: "family" },
          { english: "n → /n/ in net", note: "Tongue up, sound comes through the nose.", domain: "sport" },
          { english: "p → /p/ in pen", note: "Lips together, then a small pop of air.", domain: "education" },
          { english: "h → /h/ in home", note: "Just warm breath — an open, easy sound.", domain: "home" },
        ],
        "Nine letters, nine sounds. Each of them will build words in the next lessons.",
      ),
      US(
        [
          {
            situation: "Spelling your name on the phone",
            example: "“My name is Bilal — B-I-L-A-L.”",
            note: "Letter NAMES — the listener needs names to write the right letters.",
          },
          {
            situation: "Reading a street sign",
            example: "BUS STOP — read it with sounds: /b/ /ʌ/ /s/, /s/ /t/ /ɒ/ /p/.",
            note: "Letter SOUNDS — reading joins sounds.",
          },
          {
            situation: "The alphabet song",
            example: "A, B, C, D… you sing the names.",
            note: "Names are for the song. Sounds are for reading.",
          },
          {
            situation: "Filling in a form with help",
            example: "“Family name? A-H-M-E-D.”",
            note: "You dictate with names, slowly and clearly.",
          },
          {
            situation: "A new word in a game",
            example: "You see “map” and join the sounds /m/ /æ/ /p/.",
            note: "Sounds make you independent — no dictionary needed.",
          },
        ],
        "Names or sounds? Choose by the job",
        "Both labels are useful. The skill is knowing which job calls for which label.",
      ),
      DL(
        "One daughter, two jobs for letters",
        "Lena reads a word with her father, then spells her name for her grandmother on the phone.",
        [
          ["Lena", "Dad, what is this word?"],
          ["Dad", "Let’s read it with sounds. /m/ … /æ/ … /p/ — map."],
          ["Lena", "Map! Like my world map."],
          ["Dad", "Yes. Now phone Grandma and spell your name for her."],
          ["Lena", "L-E-N-A — el, ee, en, ay."],
          ["Dad", "Perfect. Reading used sounds. Spelling used names."],
        ],
      ),
      CMP(
        "Letter name vs letter sound",
        ["Letter NAME (bee, em, es)", "Letter SOUND (/b/, /m/, /s/)"],
        [
          ["What it is", "The label from the alphabet song", "The sound the letter makes inside words"],
          ["Example with b", "“bee” — one full spoken word", "/b/ — a short, clipped sound"],
          ["Use it for", "Spelling aloud, abbreviations, the song", "Reading and blending words"],
          ["Why it matters", "A listener can identify each letter", "Letters turn into speech and meaning"],
        ],
        {
          intro: "Same letter, two jobs. Beginners who mix them read “cat” as “see-ay-tee”.",
          verdict:
            "Keep both labels — but never blend with names. Names carry extra vowel sounds that break the word apart.",
        },
      ),
      MS(
        [
          [
            "I read c-a-t as “see-ay-tee”.",
            "I read c-a-t as /k/ /æ/ /t/ — cat.",
            "“See”, “ay” and “tee” are letter names. Names cannot join into a word.",
          ],
          [
            "The sound of b is “buh”.",
            "The sound of b is /b/, short and clean.",
            "The extra “-uh” is a vowel sound. Later it will break blending: “buh-ig” never makes “big”.",
          ],
          [
            "I spell my name with sounds on the phone.",
            "I spell my name with names: B-I-L-A-L.",
            "The listener knows letter names — that is exactly what spelling aloud is for.",
          ],
          [
            "The name and the sound of m are the same.",
            "The name is “em”; the sound is /m/.",
            "Two different labels for one letter — keep them apart from day one.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Feel the sound in your mouth",
        "Put a hand on your throat. Sounds like /b/, /d/ and /m/ make it buzz. Sounds like /t/, /s/ and /f/ do not. Your mouth and throat give you feedback that a book cannot.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Every letter has a name and a sound. The name of m is “em”. The sound of m is /m/. You use names when you spell aloud. You use sounds when you read. This small difference is the first step of phonics — and of real reading.",
          task: "Read the text two times. Then say the name and the sound of m from memory.",
        },
        writing: {
          task: "Copy this little table and complete it for m, s, t and f: letter — name — sound.",
          guide: ["b — bee — /b/", "m — ___ — /m/", "s — ___ — /s/"],
          model: "m — em — /m/ · s — es — /s/ · t — tee — /t/ · f — ef — /f/",
        },
        listening: {
          script:
            "The name is bee. The sound is b. The name is em. The sound is m. The name is es. The sound is s. Listen once more, and say each sound at the same time as me.",
          task: "Listen and say each sound together with the audio.",
        },
        speaking: {
          task: "Say the sounds of b, m, s, t and f — clean, with no extra vowel.",
          frames: ["/b/ … ball", "/m/ … milk", "/s/ … sun", "/t/ … top", "/f/ … fish"],
          checklist: [
            "I said five sounds with no “-uh”.",
            "I said one word for each sound.",
          ],
        },
      }),
      LSP(
        [
          gls("Phonics connects letters to sounds."),
          gls("A letter has a name and a sound."),
          gls("Reading uses letter sounds, not letter names."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Phonics is the link between written letters and their sounds.",
        "Every letter has a name (for spelling aloud) and a sound (for reading).",
        "Reading joins letter sounds — never letter names.",
        "Pure sounds are short: /b/, not “buh”. Extra vowels break blending later.",
        "Abbreviations like “USB” are the exception — they are spoken with letter names.",
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
            question: "Which five letters are the vowels?",
            options: ["A E I O U", "B C D F G", "A B C D E"],
            correctIndex: 0,
            explanation: "A, E, I, O and U are the vowel letters; every word needs at least one.",
            from: "Chapter 03 · Lesson 1",
          },
          {
            question: "What does every sentence start with?",
            options: ["A small letter", "A capital letter", "A number"],
            correctIndex: 1,
            explanation: "Sentences begin with a capital letter — you learned this in your first week.",
            from: "Chapter 01 · Lesson 4",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier lessons before you go on." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it whenever you are not sure.",
        questions: [
          MCQ(
            "When you READ a word, what do you use?",
            [
              ["a", "The letter sounds"],
              ["b", "The letter names"],
              ["c", "The translation"],
            ],
            "a",
            fb("The letter sounds", "Reading joins sounds from left to right. Names carry extra vowels and cannot blend."),
            { hints: ["What happens if you read c-a-t as “see-ay-tee”?"] },
          ),
          FB(
            "Complete the sentence.",
            "Spelling your name aloud on the phone uses letter ___.",
            ["names"],
            fb("names", "Names identify each letter for a listener. Sounds are for reading."),
            { hints: ["Think about B-I-L-A-L on the phone."] },
          ),
          MATCH(
            "Match each letter with its sound.",
            [
              ["b", "b"],
              ["m", "m"],
              ["s", "s"],
              ["t", "t"],
            ],
            [
              ["snd1", "/m/"],
              ["snd2", "/b/"],
              ["snd3", "/t/"],
              ["snd4", "/s/"],
            ],
            [
              ["b", "snd2"],
              ["m", "snd1"],
              ["s", "snd4"],
              ["t", "snd3"],
            ],
            fb("b → /b/, m → /m/, s → /s/, t → /t/", "Each letter points to one clean sound."),
            { hints: ["Say each sound slowly. What does your mouth do first?"] },
          ),
          LIS(
            "Listen and answer.",
            "milk",
            "What is the FIRST sound you hear?",
            ["/m/", "m"],
            fb("/m/", "Milk opens with the /m/ sound — lips closed, humming."),
            { hints: ["Say the word slowly and listen to the beginning."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which one is a pure sound, ready for blending?",
            [
              ["a", "“buh”"],
              ["b", "/b/"],
              ["c", "“bee”"],
            ],
            "b",
            fb("/b/", "“Buh” has an extra vowel and “bee” is the letter name. Only the clean sound blends."),
          ),
          MCQ(
            "The name of the letter m is…",
            [
              ["a", "“em”"],
              ["b", "/m/"],
              ["c", "“muh”"],
            ],
            "a",
            fb("“em”", "“Em” is the name; /m/ is the sound. Two labels, one letter."),
          ),
          CORR(
            "Find and correct the mistake.",
            "I read the word bus with letter names.",
            ["I read the word bus with letter sounds."],
            fb(
              "I read the word bus with letter sounds.",
              "Reading uses sounds; names are for spelling aloud.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Names and sounds — my table",
      instructions:
        "Write a small table for the letters b, m, s, t and f: name, sound, and one word that starts with each letter (like the table in this lesson). Then write one sentence: which label helps you read, and why?",
      minWords: 12,
      maxWords: 50,
    },
    homework: [
      "Say the pure sounds /b/ /m/ /s/ /t/ /f/ five times each — short, with no “-uh”.",
      "Point at five letters around you (on phones, books or signs) and say only their sounds.",
      "Spell your own name aloud with letter names — two times, slowly and clearly.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Initial Sounds
  // =========================================================================
  {
    slug: "ch-04-l-02",
    minutes: 20,
    description:
      "Train your ear on the FIRST sound of a word — the anchor for reading, spelling and finding words in a dictionary.",
    outcomes: [
      "Catch the first sound of a spoken word",
      "Match words that start with the same sound",
      "Say a new word that starts with a given sound",
      "Explain why first sounds matter for reading",
    ],
    blocks: [
      LI(
        "In this lesson you train your ear. You will learn to catch the FIRST sound of a word — the sound that opens it. First sounds anchor reading, spelling and dictionary work. By the end, you will hear a word and name its first sound with confidence.",
        [
          "You can say the pure sounds of b, m, s, t, f and more (Lesson 1).",
          "You know the five short vowels (Chapter 03).",
        ],
      ),
      H("Why the first sound matters"),
      T(
        "The first sound of a word is the easiest sound to hear. It is also the most useful. Your brain checks the beginning of a word first — that is how you tell “dog” from “log”. Readers, spellers and dictionary users all start at the beginning.",
      ),
      {
        type: "definition",
        term: "first sound",
        partOfSpeech: "noun",
        definition:
          "The first sound of a word is the very first thing you hear when the word is said slowly.",
        example: {
          english: "moon → /m/",
          translation: "The /m/ opens the word.",
        },
      },
      ST(
        "How to catch a first sound",
        [
          {
            title: "Step 1 — Say the word slowly",
            text: "Stretch the word like warm cheese. Do not rush. Slowness makes the sounds clear to your ear.",
            examples: [{ english: "moooon", note: "Slow motion for the ears." }],
          },
          {
            title: "Step 2 — Watch what your mouth does first",
            text: "Notice the very first action. For “moon”, your lips close before anything else happens. That first action makes the first sound.",
            examples: [{ english: "moon — lips close first → /m/", note: "Your mouth knows before you do." }],
          },
          {
            title: "Step 3 — Say the sound alone",
            text: "Isolate that first sound. Say it clean, with no vowel after it. Then check it against the word.",
            examples: [
              { english: "/m/ … moon", note: "The sound opens the word — proof you are right." },
              { english: "/s/ … sun", note: "Hissing air — that is the first sound." },
            ],
          },
        ],
      ),
      GR(
        "The first-sound rule",
        "Say the word slowly. The first sound you hear is the word’s first sound — say it alone, clean, with no vowel added.",
        [
          { english: "bus → /b/", translation: "Lips pop open first." },
          { english: "tea → /t/", translation: "Tongue taps first." },
          { english: "fan → /f/", translation: "Air flows first." },
        ],
        [
          "Some words start with two letters that make ONE sound — “ship” starts with /ʃ/, not /s/. You will meet these pairs properly in Chapter 05.",
        ],
      ),
      TB(
        "Same first sound, different words",
        ["Sound", "Words that share it"],
        [
          ["/m/", "moon, map, milk, market, Monday"],
          ["/s/", "sun, sit, sock, sand, sister"],
          ["/b/", "ball, big, bus, bed, breakfast"],
          ["/t/", "top, ten, tea, taxi, table"],
          ["/f/", "fish, fun, fan, five, family"],
        ],
        "Read each row out loud. Feel the same starting sound again and again.",
      ),
      AU(
        "Listen: catch the first sound",
        "Moon. What is the first sound? /m/. Sun. First sound? /s/. Bus. First sound? /b/. Tea. First sound? /t/. Now you try each one.",
        0.8,
      ),
      EXD(
        "First sounds across your life",
        [
          { english: "moon → /m/", note: "Lips closed, humming — a night-sky word.", domain: "nature" },
          { english: "market → /m/", note: "Same first sound as moon, new situation.", domain: "shopping" },
          { english: "map → /m/", note: "Travel words love the /m/ start.", domain: "travel" },
          { english: "sun → /s/", note: "Air hisses between the teeth.", domain: "nature" },
          { english: "sock → /s/", note: "Say it slowly: sss-ock.", domain: "home" },
          { english: "ball → /b/", note: "A short pop opens the word.", domain: "sport" },
          { english: "bed → /b/", note: "The same /b/ as ball — listen for it.", domain: "home" },
          { english: "tea → /t/", note: "The tongue taps behind the teeth.", domain: "food" },
          { english: "taxi → /t/", note: "Borrowed words follow English sounds too.", domain: "travel" },
          { english: "fan → /f/", note: "Teeth on lip, air flowing.", domain: "home" },
          { english: "family → /f/", note: "The /f/ opens one of your most important words.", domain: "family" },
          { english: "computer → /k/", note: "The first sound is /k/ — even though the letter is c.", domain: "technology" },
        ],
        "Twelve words, five sounds. First sounds are everywhere once you start listening.",
      ),
      US(
        [
          {
            situation: "Using a dictionary",
            example: "Words are sorted by their first letter — /k/ words live under C.",
            note: "First sounds guide you to the right page.",
          },
          {
            situation: "Playing “I spy” with a child",
            example: "“I spy with my little eye something starting with /m/.”",
            note: "A classic game built exactly on first sounds.",
          },
          {
            situation: "Spelling tests",
            example: "Teachers prompt: “It starts with /s/ — sssun.”",
            note: "The first sound is the first spelling clue.",
          },
          {
            situation: "Learning new names",
            example: "“Sara” starts with /s/, “Bilal” with /b/.",
            note: "Names stick better when you anchor their first sound.",
          },
          {
            situation: "Meeting a new word while reading",
            example: "You blend from the first sound forward: /m/ … /æ/ … /p/.",
            note: "Reading always starts at the start.",
          },
        ],
        "First sounds at work",
        "Everyday listening is full of first sounds — you simply never stopped to notice them.",
      ),
      DL(
        "I spy, first-sound edition",
        "Amina plays with her young son on a rainy afternoon.",
        [
          ["Amina", "Let’s play I spy. I spy with my little eye something that starts with /m/."],
          ["Sam", "Mmm… milk!"],
          ["Amina", "Yes! Now I spy something that starts with /t/."],
          ["Sam", "T… table!"],
          ["Amina", "Right. And something that starts with /s/?"],
          ["Sam", "Socks! My socks are wet!"],
          ["Amina", "Perfect listening — /m/, /t/ and /s/. You win the game."],
        ],
      ),
      CMP(
        "First LETTER vs first SOUND",
        ["First LETTER (what you see)", "First SOUND (what you hear)"],
        [
          ["How you find it", "Look at the written word", "Say the word slowly and listen"],
          ["Example", "kite starts with the letter k", "kite starts with the sound /k/"],
          ["A tricky case", "knee also starts with the letter k", "knee starts with the sound /n/ — the k is silent"],
          ["What it is for", "Finding words in a dictionary", "Blending, rhyming and spelling"],
        ],
        {
          intro: "Most of the time the letter and the sound agree. When they disagree, trust your ears.",
          verdict: "Reading is done with sounds. Letters are the map — sounds are the road.",
        },
      ),
      MS(
        [
          [
            "The first sound of moon is “mo”.",
            "The first sound of moon is /m/.",
            "“Mo” is a piece of the word, not a sound. Say just the first sound, clean.",
          ],
          [
            "The first sound of sun is “es”.",
            "The first sound of sun is /s/.",
            "“Es” is the letter NAME. Names are for spelling aloud, not for listening.",
          ],
          [
            "Sun and ship start with the same sound.",
            "Sun starts with /s/. Ship starts with /ʃ/ — a different sound.",
            "S alone says /s/. S with H says /ʃ/. Listen closely: sss against shh.",
          ],
          [
            "The first sound of computer is “see”.",
            "The first sound of computer is /k/.",
            "The letter is c, but the sound it makes here is /k/. Trust your ear, not the alphabet song.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Use a mirror",
        "Say a word slowly in front of a mirror. Watch the first thing your mouth does. Mouth position is a clue your eyes can check — use it when your ears are unsure.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "The first sound of a word is its anchor. Say a word slowly and listen. Moon begins with /m/. Sun begins with /s/. Ball begins with /b/. Good readers hear these openings fast — and you are training that ear now.",
          task: "Read the text two times. Then say the first sound of moon, sun and ball from memory.",
        },
        writing: {
          task: "Write five words you know, and write the first sound of each one.",
          guide: ["moon → /m/", "bus → /b/", "…"],
          model: "moon → /m/ · bus → /b/ · tea → /t/ · fish → /f/ · dog → /d/",
        },
        listening: {
          script:
            "Moon. Map. Milk. What sound do they share? /m/. Sun. Sock. Sand. What sound do they share? /s/. Ball. Bed. Bus. What sound do they share? /b/.",
          task: "Say the shared first sound before the audio reveals it.",
        },
        speaking: {
          task: "Say three words that start with /m/, three with /s/ and three with /b/.",
          frames: ["/m/: moon, map, milk", "/s/: sun, sock, sand", "/b/: bus, ball, bed"],
          checklist: [
            "I said nine words.",
            "Every word started with the right sound.",
          ],
        },
      }),
      LSP(
        [
          gls("Say the word slowly and listen for the first sound."),
          gls("Trust your ears, not your eyes."),
          gls("A letter has a name and a sound."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The first sound is what you hear first when a word is said slowly.",
        "Catch it by slowing the word down and watching what your mouth does first.",
        "Say first sounds clean — /m/, not “mo” or “em”.",
        "Letter and sound usually agree; when they do not (knee → /n/), trust your ears.",
        "First sounds power dictionary work, spelling clues, games and blending.",
      ]),
      RV(
        [
          {
            question: "When you READ, do you use letter names or letter sounds?",
            options: ["Letter names", "Letter sounds", "Both together"],
            correctIndex: 1,
            explanation: "Reading joins sounds. Names are only for spelling aloud.",
            from: "Chapter 04 · Lesson 1",
          },
          {
            question: "The sound of b is…",
            options: ["“bee”", "/b/ — short and clean", "“buh”"],
            correctIndex: 1,
            explanation: "/b/ is a pure sound. “Bee” is the name and “buh” has an extra vowel.",
            from: "Chapter 04 · Lesson 1",
          },
          {
            question: "How many short vowels are there?",
            options: ["Two", "Five", "Twenty-six"],
            correctIndex: 1,
            explanation: "The five vowel letters a, e, i, o, u each have a short sound — one per word like cat, pen, sit.",
            from: "Chapter 03 · Lesson 3",
          },
        ],
        { title: "Look back — names, sounds, vowels" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "What is the first sound of “bus”?",
            [
              ["a", "/s/"],
              ["b", "/b/"],
              ["c", "“bus”"],
            ],
            "b",
            fb("/b/", "Say it slowly: bbbus. The lips pop open first — /b/."),
            { hints: ["Say the word very slowly and listen to the start."] },
          ),
          FB(
            "Write the missing first sound.",
            "moon → /___/",
            ["m"],
            fb("/m/", "Moon opens with the humming /m/ sound."),
            { hints: ["Your lips close and hum at the start."] },
          ),
          MATCH(
            "Match each word with its first sound.",
            [
              ["w1", "sun"],
              ["w2", "tea"],
              ["w3", "fish"],
              ["w4", "dog"],
            ],
            [
              ["s1", "/f/"],
              ["s2", "/t/"],
              ["s3", "/s/"],
              ["s4", "/d/"],
            ],
            [
              ["w1", "s3"],
              ["w2", "s2"],
              ["w3", "s1"],
              ["w4", "s4"],
            ],
            fb("sun → /s/, tea → /t/, fish → /f/, dog → /d/", "Say each word slowly; the opening sound is the answer."),
            { hints: ["Sun starts with hissing air."] },
          ),
          LIS(
            "Listen and answer.",
            "map",
            "What is the FIRST sound you hear?",
            ["/m/", "m"],
            fb("/m/", "Map opens with /m/ — lips closed, humming."),
            { hints: ["Watch what your mouth does first."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you have trained this ear.",
        questions: [
          MCQ(
            "Which word starts with the same sound as “moon”?",
            [
              ["a", "sun"],
              ["b", "market"],
              ["c", "tea"],
            ],
            "b",
            fb("market", "Moon and market both open with /m/. Sun opens with /s/ and tea with /t/."),
          ),
          MCQ(
            "A friend says the first sound of “ship” is /s/. What do you say?",
            [
              ["a", "Correct — s is the first letter"],
              ["b", "Not quite — s and h together say /ʃ/"],
              ["c", "Not quite — it is /h/"],
            ],
            "b",
            fb("/ʃ/ — one sound, two letters", "S-H joins into a single sound. You will meet these pairs in Chapter 05."),
          ),
          CORR(
            "Find and correct the mistake.",
            "The first sound of sun is es.",
            ["The first sound of sun is /s/.", "The first sound of sun is s."],
            fb(
              "The first sound of sun is /s/.",
              "“Es” is the letter name. The first sound is clean /s/.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "First-sound hunt",
      instructions:
        "Write one word for each starting sound: /m/, /s/, /b/, /t/ and /f/. Then write one sentence about a word whose first sound surprised you, and say why.",
      minWords: 8,
      maxWords: 45,
    },
    homework: [
      "Name five objects near you and say the first sound of each.",
      "Find two words that start with the same sound — anywhere: a shop, a bus, a song.",
      "Play one round of I spy with a family member, using sounds, not letters.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Final Sounds
  // =========================================================================
  {
    slug: "ch-04-l-03",
    minutes: 20,
    description:
      "Now catch the LAST sound of a word — the key to rhymes, word families and correct word endings.",
    outcomes: [
      "Identify the final sound of a spoken word",
      "Group words that end with the same sound",
      "Use final sounds to build your first rhymes",
      "Explain why final sounds matter for spelling",
    ],
    blocks: [
      LI(
        "You can hear how a word starts. Now you will hear how it ends. The final sound of a word is where rhymes live, where word families are born — and where many spelling mistakes hide. Train this ear and you prepare a whole chapter of reading power.",
        [
          "You can catch the first sound of a word (Lesson 2).",
          "You can say pure sounds with no extra vowel (Lesson 1).",
        ],
      ),
      H("The end matters too"),
      T(
        "The final sound of a word is what your ear keeps after the word ends. It tells “cat” from “cap” and “bus” from “bun”. Poets, songwriters and spellers all work with word endings. Now you will too.",
      ),
      {
        type: "definition",
        term: "last sound",
        partOfSpeech: "noun",
        definition:
          "The last sound of a word is the very last thing you hear before the word ends.",
        example: {
          english: "cat → /t/",
          translation: "The /t/ closes the word.",
        },
      },
      ST(
        "How to catch a final sound",
        [
          {
            title: "Step 1 — Say the word slowly",
            text: "Do not swallow the ending. Many beginners say “ca-” and stop. Finish the word completely.",
            examples: [{ english: "cat — not “ca”!", note: "Complete the word first." }],
          },
          {
            title: "Step 2 — Stretch the END of the word",
            text: "Hold the last sound a little longer. Give your ear time to catch it.",
            examples: [
              { english: "ca-ttt", note: "The /t/ rings at the end." },
              { english: "su-nnn", note: "The /n/ hums at the end." },
            ],
          },
          {
            title: "Step 3 — Say the last sound alone",
            text: "Isolate the final sound. Say it clean. Then check it against the whole word.",
            examples: [
              { english: "cat → /t/", note: "A little tap of the tongue." },
              { english: "bus → /s/", note: "Hissing air closes the word." },
            ],
          },
        ],
      ),
      GR(
        "The rhyme rule",
        "Two words rhyme when they end with the same sound. The beginnings can be anything at all.",
        [
          { english: "cat — hat", translation: "Both end with /t/." },
          { english: "sun — run", translation: "Both end with /n/." },
          { english: "big — dig", translation: "Both end with /g/." },
        ],
        [
          "Spelling can trick you: “love” and “move” end with the same letters, but they do not rhyme — the vowels before the ending are different.",
        ],
      ),
      TB(
        "Rhyme families by final sound",
        ["Family", "Words"],
        [
          ["-at", "cat, hat, mat, sat"],
          ["-un", "sun, run, fun, bun"],
          ["-ig", "big, dig, pig, wig"],
          ["-op", "top, mop, hop, pop"],
        ],
        "Read each row out loud. Every row is a chain of rhymes.",
      ),
      AU(
        "Listen: words that rhyme",
        "Cat, hat, mat, sat. They all end with /t/. Sun, run, fun, bun. They all end with /n/. Now you say each row with me.",
        0.8,
      ),
      EXD(
        "Final sounds across your life",
        [
          { english: "cat → /t/", note: "One tap of the tongue closes it.", domain: "family" },
          { english: "hat → /t/", note: "Same ending as cat — that is a rhyme.", domain: "shopping" },
          { english: "mat → /t/", note: "The third /t/-ender — hear the chain.", domain: "home" },
          { english: "sun → /n/", note: "A nasal hum closes the word.", domain: "nature" },
          { english: "run → /n/", note: "Sun and run rhyme: /n/ ending.", domain: "sport" },
          { english: "fun → /n/", note: "Games are full of /n/ enders.", domain: "social" },
          { english: "bun → /n/", note: "Bread words rhyme too.", domain: "food" },
          { english: "big → /g/", note: "A soft /g/ closes it.", domain: "everyday" },
          { english: "pig → /g/", note: "Big and pig — a perfect rhyme pair.", domain: "food" },
          { english: "top → /p/", note: "A small pop of air ends the word.", domain: "home" },
          { english: "hop → /p/", note: "Top and hop rhyme with /p/.", domain: "sport" },
        ],
        "Eleven words, four endings. Whole families share one final sound.",
      ),
      US(
        [
          {
            situation: "Songs and poems",
            example: "Twinkle, twinkle, little star… how I wonder what you are.",
            note: "Rhymes are built on final sounds — star/are.",
          },
          {
            situation: "Children’s books",
            example: "“The cat in the hat came back with a bat.”",
            note: "First books rhyme on purpose — the endings carry the fun.",
          },
          {
            situation: "Remembering spellings",
            example: "If you can spell “cat”, you can spell hat, mat and sat.",
            note: "One ending, many correct words — endings are spelling gold.",
          },
          {
            situation: "Word games and rap",
            example: "Players race to name one more word ending in /ʌn/.",
            note: "Final-sound fluency wins these games.",
          },
          {
            situation: "Listening for meaning",
            example: "“cap” against “cat” — one final sound changes the meaning.",
            note: "Endings carry meaning; hear them fully.",
          },
        ],
        "Final sounds at work",
        "Poets and teachers agree: the end of the word does a lot of the work.",
      ),
      DL(
        "A birthday rhyme",
        "Lena and her mother write a funny rhyme for Grandpa’s birthday card.",
        [
          ["Lena", "Let’s write a rhyme for Grandpa’s card."],
          ["Mum", "Good idea. Rhymes end with the same sound. Start here: Grandpa has an old black…"],
          ["Lena", "Cat!"],
          ["Mum", "Then the next line can end with… hat. “He wears a big red hat.”"],
          ["Lena", "Cat — hat. Both end with /t/! Let me try: “He drinks his tea all up.”"],
          ["Mum", "Now find a word that ends like up — listen: /p/."],
          ["Lena", "Cup! “His tea is in a cup — he drinks it all up!”"],
          ["Mum", "Cat, hat, cup, up. You are a rhyme maker now."],
        ],
      ),
      CMP(
        "First sound vs final sound",
        ["First sound (the opener)", "Final sound (the closer)"],
        [
          ["What it anchors", "The start of blending", "Rhymes and word families"],
          ["How to catch it", "Slow the word and watch your mouth begin", "Stretch the end of the word"],
          ["What it unlocks", "Reading new words from the front", "Spelling endings and hearing rhymes"],
          ["Example", "moon → /m/", "moon → /n/"],
        ],
        {
          intro: "Two ends of the same word — two different skills.",
          verdict:
            "Strong readers hear both ends without thinking. Train the start (Lesson 2) and the end (this lesson), and the middle takes care of itself.",
        },
      ),
      MS(
        [
          [
            "Cat and cap rhyme.",
            "Cat and hat rhyme. Cat and cap share only the middle vowel.",
            "Rhyme needs the same final sound: /t/ against /p/ are different endings.",
          ],
          [
            "The last sound of bus is “us”.",
            "The last sound of bus is /s/.",
            "“Us” is two sounds. Cut even closer: only the last one counts.",
          ],
          [
            "Big and pig do not rhyme because they start differently.",
            "Big and pig DO rhyme — they both end with /ɪg/.",
            "Rhyme lives at the END of words. Different starts are fine — even good.",
          ],
          [
            "The last sound of farm is “arm”.",
            "The last sound of farm is /m/.",
            "“Arm” is a whole word. Isolate the single closing sound: /m/.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Final sounds are tomorrow’s families",
        "When you hear that cat, hat and mat share their ending, you are one step from reading whole families of words. That superpower arrives in Chapter 05.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Words that rhyme end with the same sound. Cat, hat and mat all end with /t/. Sun, run and fun all end with /n/. Rhymes make songs sing and poems dance. They also make spelling easier: learn one ending, and you own a whole family of words.",
          task: "Read the text two times. Then say three words that end with /t/ and three that end with /n/.",
        },
        writing: {
          task: "Write two words that rhyme with “cat”, two with “sun” and two with “big”.",
          guide: ["cat → hat, ___", "sun → run, ___", "big → dig, ___"],
          model: "cat → hat, mat · sun → run, bun · big → dig, pig",
        },
        listening: {
          script:
            "Listen to the pairs. Cat — hat. Do they rhyme? Yes. Sun — cap. Do they rhyme? No — /n/ against /p/. Fun — bun. Do they rhyme? Yes. Your ears are getting sharper.",
          task: "Say “yes” or “no” after each pair — before the audio answers.",
        },
        speaking: {
          task: "Build a rhyme chain out loud: I say one word, you say a rhyming word, then stop after five.",
          frames: ["cat → …", "sun → …", "big → …"],
          checklist: [
            "I said a real rhyming word each time.",
            "I listened to the ending, not the start.",
          ],
        },
      }),
      LSP(
        [
          gls("Words that rhyme end with the same sound."),
          gls("Trust your ears, not your eyes."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The last sound is the final thing you hear before a word ends.",
        "Catch it by finishing the word fully and stretching its ending.",
        "Rhyme = same final sound, whatever the beginning is.",
        "Endings build word families: cat, hat, mat, sat.",
        "Endings also carry meaning — cap against cat is one sound apart.",
      ]),
      RV(
        [
          {
            question: "What is the first sound of “moon”?",
            options: ["/m/", "/n/", "“mo”"],
            correctIndex: 0,
            explanation: "Moon opens with the humming /m/ — lips closed.",
            from: "Chapter 04 · Lesson 2",
          },
          {
            question: "Reading uses letter…",
            options: ["names", "sounds", "translations"],
            correctIndex: 1,
            explanation: "Reading joins letter sounds; names are for spelling aloud.",
            from: "Chapter 04 · Lesson 1",
          },
          {
            question: "The short vowel in “cat” is…",
            options: ["/e/", "/æ/", "/ɒ/"],
            correctIndex: 1,
            explanation: "Cat uses the short a — /æ/, the sound from Chapter 03.",
            from: "Chapter 03 · Lesson 3",
          },
        ],
        { title: "Look back — sounds you know" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Which word rhymes with “cat”?",
            [
              ["a", "cap"],
              ["b", "hat"],
              ["c", "cake"],
            ],
            "b",
            fb("hat", "Cat and hat both end with /t/. Cap ends with /p/ and cake ends with a /k/ sound."),
            { hints: ["Say each word slowly and listen to the END."] },
          ),
          FB(
            "Write the missing final sound.",
            "sun → /___/",
            ["n"],
            fb("/n/", "Sun closes with the nasal /n/ sound."),
            { hints: ["The word ends with a hum through your nose."] },
          ),
          MATCH(
            "Match each word with its final sound.",
            [
              ["w1", "bus"],
              ["w2", "pen"],
              ["w3", "top"],
              ["w4", "run"],
            ],
            [
              ["s1", "/n/"],
              ["s2", "/p/"],
              ["s3", "/s/"],
              ["s4", "/n/"],
            ],
            [
              ["w1", "s3"],
              ["w2", "s1"],
              ["w3", "s2"],
              ["w4", "s4"],
            ],
            fb("bus → /s/, pen → /n/, top → /p/, run → /n/", "Two of them rhyme: pen and run both end with /n/."),
            { hints: ["Stretch the end of each word: bussss."] },
          ),
          LIS(
            "Listen and answer.",
            "hat",
            "What is the LAST sound you hear?",
            ["/t/", "t"],
            fb("/t/", "Hat closes with the little tongue tap /t/."),
            { hints: ["Stretch the ending: ha-ttt."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — trust your trained ear.",
        questions: [
          MCQ(
            "Which pair does NOT rhyme?",
            [
              ["a", "sun — fun"],
              ["b", "big — pig"],
              ["c", "cat — cap"],
            ],
            "c",
            fb("cat — cap", "Cat ends with /t/ and cap ends with /p/. Different endings, no rhyme."),
          ),
          MCQ(
            "The last sound of “fun” is…",
            [
              ["a", "/n/"],
              ["b", "“un”"],
              ["c", "/f/"],
            ],
            "a",
            fb("/n/", "Only the last sound counts — a clean /n/."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Cat and cap rhyme.",
            ["Cat and cap do not rhyme."],
            fb(
              "Cat and cap do not rhyme.",
              "Cat ends with /t/ and cap ends with /p/ — different final sounds.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Rhyme time",
      instructions:
        "Write two words that rhyme with “cat”, two that rhyme with “sun”, and two that rhyme with “big”. Then write one short sentence that uses two of your rhyming words together.",
      minWords: 10,
      maxWords: 45,
    },
    homework: [
      "Find three pairs of rhyming words in a song, a poem or a story.",
      "Say the final sound of your own name and of three friends’ names.",
      "Play a rhyme chain game: one person says a word, the next says a rhyming word.",
    ],
  },

  // =========================================================================
  // Lesson 4 — CVC Words
  // =========================================================================
  {
    slug: "ch-04-l-04",
    minutes: 25,
    description:
      "Consonant–vowel–consonant: the shape of your first real reading words. Read it, build it, write it.",
    outcomes: [
      "Explain the CVC pattern with an example",
      "Read at least ten CVC words by blending",
      "Build a CVC word from three given sounds",
      "Hear a CVC word and write its letters",
    ],
    blocks: [
      LI(
        "Now the pieces come together. You know letters, first sounds and final sounds. In this lesson you build CVC words — consonant, vowel, consonant. This three-sound shape is the skeleton of hundreds of beginner words. Reading your first real words starts here.",
        [
          "You can catch the first and last sound of a word (Lessons 2–3).",
          "You know the five short vowel sounds (Chapter 03).",
        ],
      ),
      H("The CVC pattern"),
      T(
        "CVC means consonant–vowel–consonant. One consonant opens the word. One short vowel sits in the middle. One consonant closes it. It is the simplest complete word shape in English — and hundreds of beginner words follow it.",
      ),
      {
        type: "definition",
        term: "CVC word",
        partOfSpeech: "noun",
        definition:
          "A CVC word is a three-sound word: consonant, vowel, consonant — like cat, pen and bus.",
        example: {
          english: "c-a-t → /k/ /æ/ /t/ → cat",
          translation: "Three letters, three sounds, one real word.",
        },
      },
      TB(
        "CVC words by vowel",
        ["Vowel", "Words"],
        [
          ["a", "cat, hat, map, bag, van"],
          ["e", "bed, pen, ten, red, leg"],
          ["i", "sit, big, pig, win, fin"],
          ["o", "hot, dog, box, top, mop"],
          ["u", "sun, run, cup, bus, nut"],
        ],
        "Every word here uses the short vowel sound from Chapter 03.",
      ),
      ST(
        "Build a CVC word in three steps",
        [
          {
            title: "Step 1 — Choose the middle vowel",
            text: "Start with the heart of the word: one short vowel. Let us take /æ/ — the short a.",
            examples: [{ english: "/æ/", note: "The middle sound comes first." }],
          },
          {
            title: "Step 2 — Open it with a consonant",
            text: "Put one consonant in front. Try /k/. Say the two sounds together.",
            examples: [{ english: "/k/ /æ/ → k-a", note: "Not a word yet — keep going." }],
          },
          {
            title: "Step 3 — Close it with a consonant",
            text: "Add one final consonant. Try /t/. Blend all three: a word is born. Swap the first sound and you get a new word for free.",
            examples: [
              { english: "/k/ /æ/ /t/ → cat", note: "Built sound by sound." },
              { english: "change /k/ to /h/ → hat", note: "One swap, new word." },
              { english: "change /t/ to /p/ → cap", note: "Swap the ending too — the family grows." },
            ],
          },
        ],
      ),
      GR(
        "The CVC rule",
        "In a CVC word, the vowel always says its SHORT sound — the five sounds from Chapter 03.",
        [
          { english: "cat → /æ/", translation: "Short a." },
          { english: "bed → /e/", translation: "Short e." },
          { english: "sit → /ɪ/", translation: "Short i." },
          { english: "hot → /ɒ/", translation: "Short o." },
          { english: "cup → /ʌ/", translation: "Short u." },
        ],
        [
          "“Put” looks like a CVC word, but its u says /ʊ/ instead of /ʌ/. It is a small exception — learn it by heart when you meet it.",
        ],
      ),
      AU(
        "Listen: three CVC words",
        "Dog. Cup. Pen. Now blend each one with me. /d/ /ɒ/ /g/ — dog. /k/ /ʌ/ /p/ — cup. /p/ /e/ /n/ — pen.",
        0.8,
      ),
      EXD(
        "CVC words all around you",
        [
          { english: "cat", note: "c-a-t: the classic first word — /k/ /æ/ /t/.", domain: "family" },
          { english: "hat", note: "Change cat’s first sound and you get a hat.", domain: "shopping" },
          { english: "map", note: "m-a-p — short a in the middle.", domain: "travel" },
          { english: "bag", note: "School bag: b-a-g.", domain: "education" },
          { english: "bed", note: "b-e-d — the short e closes down toward /d/.", domain: "home" },
          { english: "pen", note: "p-e-n: write with it, read with it.", domain: "education" },
          { english: "big", note: "b-i-g — short i, quick and small like its meaning.", domain: "everyday" },
          { english: "win", note: "w-i-n — every sport has one.", domain: "sport" },
          { english: "hot", note: "h-o-t — the short o opens round.", domain: "food" },
          { english: "dog", note: "d-o-g — man’s CVC best friend.", domain: "family" },
          { english: "box", note: "b-o-x — ends with the /ks/ sound spelled x.", domain: "shopping" },
          { english: "sun", note: "s-u-n — short u in the middle.", domain: "nature" },
          { english: "cup", note: "c-u-p — breakfast needs one.", domain: "food" },
        ],
        "Thirteen words, five vowels. One pattern, endless words.",
      ),
      US(
        [
          {
            situation: "Labels around the house",
            example: "Boxes say JAM, bags say HAT, cups say TEA.",
            note: "CVC words are short — perfect for labels.",
          },
          {
            situation: "First commands to a pet",
            example: "Sit! The dog sits.",
            note: "Some of the oldest commands in English are CVC.",
          },
          {
            situation: "Children’s first books",
            example: "“The pig is big. The dog can hop.”",
            note: "First readers are built almost completely from CVC words.",
          },
          {
            situation: "Shopping lists",
            example: "A quick list: jam, buns, tea, nuts…",
            note: "Short words are quick to write and read.",
          },
          {
            situation: "Classroom instructions",
            example: "Sit. Stand. Hop.",
            note: "Teachers of young children use CVC verbs all day.",
          },
        ],
        "Where CVC words live",
        "Look around any kitchen, classroom or shop — the shortest words are usually CVC.",
      ),
      DL(
        "Reading with a little brother",
        "Yusuf listens while his little brother reads his first book.",
        [
          ["Yusuf", "Read this page to me, Rami."],
          ["Rami", "Okay. The… /d/ /ɒ/ /g/… dog! The dog can… /s/ /ɪ/ /t/… sit!"],
          ["Yusuf", "Beautiful blending. One more: what does the dog have?"],
          ["Rami", "A… /h/ /æ/ /t/? No, wait — a /b/ /æ/ /g/… bag!"],
          ["Yusuf", "Yes! The dog has a bag on its back."],
          ["Rami", "Reading is like a puzzle. I like it."],
        ],
      ),
      CMP(
        "CVC vs not-CVC",
        ["CVC words (cat, bed, sun)", "Not-CVC words (moon, chair, cake)"],
        [
          ["Shape", "Three sounds: consonant–vowel–consonant", "More letters, or letter teams like oo and ai"],
          ["The vowel", "Always the short sound", "Often long (moon) or a team (chair)"],
          ["Examples", "cat, pen, sit, hot, cup, bus", "moon, cake, chair, sheep, boat"],
          ["When you learn them", "Now — they unlock blending", "After the basic patterns, later in the course"],
        ],
        {
          intro: "Not every short word is CVC. Check the shape before you blend.",
          verdict:
            "If the word has exactly three sounds — opener, short vowel, closer — it is CVC, and the vowel says its short sound.",
        },
      ),
      MS(
        [
          [
            "“Cape” is a CVC word.",
            "“Cape” has four letters and ends with a silent e.",
            "CVC means exactly three sounds. The silent e makes the vowel long — that pattern comes later in the course.",
          ],
          [
            "I read “cap” as “cape”.",
            "I read cap as /k/ /æ/ /p/ — with the short a.",
            "CVC vowels are short. It is the silent e that makes long vowels — not the CVC shape.",
          ],
          [
            "Every three-letter word is CVC.",
            "Only consonant–vowel–consonant words are CVC — like cat, not like “see” or “air”.",
            "CVC describes the shape: a consonant, then a vowel, then a consonant.",
          ],
          [
            "“Put” must be wrong because its u does not say /ʌ/.",
            "“Put” is a CVC-shaped word with a small sound exception: /p/ /ʊ/ /t/.",
            "English has a few exceptions like this. You learn them by heart as you meet them.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "CVC is the skeleton of beginner reading",
        "Learn to read one CVC word and you can read its whole family: cat → hat → mat → sat. That is the power of a pattern over a memory trick.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "A CVC word has three sounds: a consonant, a short vowel and a consonant. Cat is CVC: /k/ /æ/ /t/. Pen is CVC. Bus is CVC. In every CVC word the vowel says its short sound. Once you can blend one of them, you can read them all.",
          task: "Read the text two times. Then find three CVC words in it and say their three sounds.",
        },
        writing: {
          task: "Write these words from the sounds you hear: /m/ /æ/ /p/, /b/ /e/ /d/, /s/ /ɪ/ /t/, /d/ /ɒ/ /g/.",
          guide: ["/m/ /æ/ /p/ → m __ __", "/b/ /e/ /d/ → b __ __"],
          model: "map · bed · sit · dog",
        },
        listening: {
          script:
            "Listen and blend. /k/ /æ/ /t/ — cat. /p/ /e/ /n/ — pen. /s/ /ʌ/ /n/ — sun. /h/ /ɒ/ /t/ — hot. Now three more, without help. /b/ /ɪ/ /g/. /t/ /ɒ/ /p/. /r/ /ʌ/ /n/.",
          task: "Blend the last three sounds yourself before you look at the words.",
        },
        speaking: {
          task: "Say five CVC words slowly — sound by sound — then say them fast.",
          frames: ["/d/ /ɒ/ /g/ → dog", "/k/ /ʌ/ /p/ → cup", "/p/ /e/ /n/ → pen"],
          checklist: [
            "I said each word sound by sound, then whole.",
            "I kept the vowel short every time.",
          ],
        },
      }),
      LSP(
        [
          gls("Sounds join together to make words."),
          gls("A short vowel makes a quick sound."),
          gls("Every word needs at least one vowel."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "CVC = consonant, short vowel, consonant: three sounds, three letters.",
        "The vowel in a CVC word always says its short sound.",
        "Build words by choosing the vowel, then opening and closing it with consonants.",
        "Swap one sound and you get a new word: cat → hat → cap.",
        "Exceptions exist (put says /ʊ/) — learn them by heart when you meet them.",
      ]),
      RV(
        [
          {
            question: "Two words rhyme when they…",
            options: ["start with the same sound", "end with the same sound", "have the same meaning"],
            correctIndex: 1,
            explanation: "Rhyme is about endings — the starts can differ freely.",
            from: "Chapter 04 · Lesson 3",
          },
          {
            question: "What is the last sound of “big”?",
            options: ["/b/", "/g/", "“ig”"],
            correctIndex: 1,
            explanation: "Big closes with the /g/ sound.",
            from: "Chapter 04 · Lesson 3",
          },
          {
            question: "The short vowel sounds are used in…",
            options: ["long words only", "CVC words like cat and sit", "names only"],
            correctIndex: 1,
            explanation: "CVC words are built on the five short vowels from Chapter 03.",
            from: "Chapter 03 · Lesson 3",
          },
        ],
        { title: "Look back — endings and vowels" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Which word follows the CVC pattern?",
            [
              ["a", "moon"],
              ["b", "cat"],
              ["c", "chair"],
            ],
            "b",
            fb("cat", "Cat is consonant–vowel–consonant: three sounds, short vowel in the middle. Moon has two vowels; chair has a two-letter team."),
            { hints: ["Count the sounds: opener, short vowel, closer."] },
          ),
          FB(
            "Write the missing vowel.",
            "m ___ p (you travel with it)",
            ["a"],
            fb("a", "Map is m-a-p — the short a in the middle."),
            { hints: ["Say /m/ then /p/ — one short vowel goes between them."] },
          ),
          MATCH(
            "Match each CVC word with its vowel sound.",
            [
              ["w1", "bed"],
              ["w2", "pig"],
              ["w3", "cup"],
              ["w4", "hot"],
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
              ["w3", "v1"],
              ["w4", "v3"],
            ],
            fb("bed → /e/, pig → /ɪ/, cup → /ʌ/, hot → /ɒ/", "Each CVC word carries one short vowel in its heart."),
            { hints: ["Say each word slowly and stretch the middle."] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "pen",
            ["pen"],
            fb("pen", "Segment what you hear: /p/ /e/ /n/ — write one letter for each sound."),
            { hints: ["Three sounds: /p/ /e/ /n/."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — blend and build on your own.",
        questions: [
          MCQ(
            "Build a word from /h/ /ɒ/ /t/. What is it?",
            [
              ["a", "hat"],
              ["b", "hot"],
              ["c", "hit"],
            ],
            "b",
            fb("hot", "/h/ /ɒ/ /t/ blends into hot — the short o in the middle."),
          ),
          MCQ(
            "Which word is NOT a CVC word?",
            [
              ["a", "sun"],
              ["b", "run"],
              ["c", "moon"],
            ],
            "c",
            fb("moon", "Moon has two vowel letters making one long sound — not the CVC shape."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Moon is a CVC word.",
            ["Moon is not a CVC word."],
            fb(
              "Moon is not a CVC word.",
              "Moon has a long double-o sound — CVC words have one short vowel between two consonants.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My first word list",
      instructions:
        "Write six CVC words: one each with a, e, i, o and u, plus one free choice. Then write one short sentence using two of them, like “The dog is big.”",
      minWords: 10,
      maxWords: 50,
    },
    homework: [
      "Read your six CVC words out loud three times: slowly, then faster, then fast.",
      "Find three CVC words in anything you read today — a sign, a message, a label.",
      "Play the swap game: take the word “cat” and swap sounds to make three new words.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Blending
  // =========================================================================
  {
    slug: "ch-04-l-05",
    minutes: 25,
    description:
      "Join single sounds into whole words — the moment reading truly begins. Learn the routine and never guess again.",
    outcomes: [
      "Blend three sounds into a spoken word",
      "Read new CVC words by blending, not guessing",
      "Explain blending in your own words",
      "Blend with growing speed and accuracy",
    ],
    blocks: [
      LI(
        "You know letter sounds. You know the CVC shape. Now comes the moment reading truly begins: blending. Blending means smoothly joining sounds into a word — /k/ /æ/ /t/ becomes cat. Learn the routine in this lesson and you can read words you have never seen before.",
        [
          "You can read the CVC shape: consonant, short vowel, consonant (Lesson 4).",
          "You can say pure sounds with no extra vowel (Lesson 1).",
        ],
      ),
      H("From sounds to words"),
      T(
        "Blending means smoothly joining sounds together: /k/ /æ/ /t/ → cat. First you say each sound alone. Then you stretch them closer and closer. Then you say the whole word at normal speed. This is the single most important reading mechanic in this course.",
      ),
      {
        type: "definition",
        term: "blending",
        partOfSpeech: "noun",
        definition:
          "Blending means joining letter sounds together to make one word.",
        example: {
          english: "/k/ /æ/ /t/ → cat",
          translation: "Three sounds join into one word.",
        },
      },
      ST(
        "The blending routine — three steps",
        [
          {
            title: "Step 1 — Say each sound alone",
            text: "Point at each letter and say its pure sound. Slow and clean — no names, no extra vowels.",
            examples: [{ english: "/k/ … /æ/ … /t/", note: "Three taps of sound." }],
          },
          {
            title: "Step 2 — Stretch them together",
            text: "Say the sounds again, closer and closer, until they touch. This is the part beginners skip — do not skip it.",
            examples: [
              { english: "k-æ … k-æt", note: "The sounds slide toward each other." },
            ],
          },
          {
            title: "Step 3 — Say the whole word",
            text: "Say the word at normal speaking speed. You have just read a word from its sounds.",
            examples: [
              { english: "cat", note: "One word — built by you." },
              { english: "/m/ /ɒ/ /p/ → m-ɒ … m-ɒp → mop", note: "The same routine, new word." },
            ],
          },
        ],
      ),
      GR(
        "The blending rule",
        "Never guess. Blend every sound, every time, from left to right.",
        [
          { english: "/m/ /ɒ/ /p/ → mop", translation: "Sound by sound, left to right." },
          { english: "/s/ /ɪ/ /t/ → sit", translation: "No letter names anywhere." },
          { english: "/b/ /ʌ/ /s/ → bus", translation: "Guessing is not reading." },
        ],
        [
          "After a few hundred words, blending becomes instant. That is the goal — but instant reading grows OUT of blending, never instead of it.",
        ],
      ),
      AU(
        "Listen: blending step by step",
        "/k/ … /æ/ … /t/. k-æ. k-æt. cat. Again: /m/ … /ɒ/ … /p/. m-ɒ. m-ɒp. mop. Now you: /s/ … /ɪ/ … /t/.",
        0.75,
      ),
      EXD(
        "Blend these — from sounds to meaning",
        [
          { english: "/h/ /ɒ/ /t/ → hot", note: "Be careful — soup says this word a lot.", domain: "food" },
          { english: "/p/ /ɪ/ /g/ → pig", note: "Three sounds, one farm animal.", domain: "food" },
          { english: "/r/ /ʌ/ /n/ → run", note: "Blend it — do not sprint to a guess.", domain: "sport" },
          { english: "/b/ /ʌ/ /s/ → bus", note: "You ride it after you read it.", domain: "travel" },
          { english: "/k/ /ʌ/ /p/ → cup", note: "Tea lives here.", domain: "food" },
          { english: "/n/ /e/ /t/ → net", note: "The ball goes over it.", domain: "sport" },
          { english: "/b/ /e/ /d/ → bed", note: "Read it before you sleep in it.", domain: "home" },
          { english: "/f/ /æ/ /n/ → fan", note: "Summer reading.", domain: "home" },
          { english: "/m/ /æ/ /p/ → map", note: "Every journey starts with a blended word.", domain: "travel" },
          { english: "/w/ /e/ /b/ → web", note: "Even technology words blend.", domain: "technology" },
        ],
        "Ten blends, ten real words. Every one of them was built from pure sounds — not memorised.",
      ),
      US(
        [
          {
            situation: "Reading a menu",
            example: "Tea — bun — jam… you blend each label.",
            note: "Short words on menus blend fast.",
          },
          {
            situation: "Reading signs",
            example: "BUS STOP: /b/ /ʌ/ /s/ — bus.",
            note: "Signs give you time — blend calmly.",
          },
          {
            situation: "New words in games",
            example: "A quest says “net” — you blend /n/ /e/ /t/.",
            note: "Games reward readers who blend.",
          },
          {
            situation: "Helping a child with homework",
            example: "“Say the sounds with me: /d/ /ɒ/ /g/.”",
            note: "Teaching the routine doubles your own practice.",
          },
          {
            situation: "Reading a price tag",
            example: "“Ten” — /t/ /e/ /n/.",
            note: "Numbers as words blend too.",
          },
        ],
        "Where blending earns its keep",
        "Every new written word is a job for the blending routine.",
      ),
      DL(
        "Blend with the class",
        "A teacher leads a small class through new words.",
        [
          ["Teacher", "New word: /k/ /æ/ /n/. Stretch it with me."],
          ["Class", "k-æ… k-æn… can!"],
          ["Teacher", "Good. One more: /n/ /e/ /t/."],
          ["Class", "n-e… n-et… net!"],
          ["Teacher", "Now a tricky one — /b/ /ʌ/ /s/."],
          ["Rami", "b-u… b-us… bus! The bus stops at my street!"],
          ["Teacher", "You blended it — you did not guess it. That is reading."],
        ],
      ),
      CMP(
        "Blending vs guessing",
        ["Guessing (from the first letter)", "Blending (all the sounds)"],
        [
          ["How it works", "See the first letter, say any word that fits", "Say every sound and join them, left to right"],
          ["Example", "See “bag”, say “bus” — same first letter", "See “bag”, blend /b/ /æ/ /g/ — bag"],
          ["How often right", "Sometimes — by luck", "Almost always — by skill"],
          ["What it teaches", "A habit you must unlearn later", "The code of English itself"],
        ],
        {
          intro: "Guessing feels fast. Blending IS fast — after about a month of practice.",
          verdict:
            "A guesser is right by chance; a blender is right by method. Be a blender.",
        },
      ),
      MS(
        [
          [
            "I read only the first letter: map → “moon”.",
            "I blend every sound: /m/ /æ/ /p/ → map.",
            "The first letter is a clue, not the answer. Guessing is not reading.",
          ],
          [
            "I say “buh-ig” for big.",
            "I say clean sounds: /b/ … /ɪ/ … /g/ → big.",
            "The extra “-uh” is a vowel sound that blocks the real vowel /ɪ/.",
          ],
          [
            "I stop before the last sound: bus → “bu-”.",
            "I finish the word: /b/ /ʌ/ /s/ → bus.",
            "The last sound completes the word — bus and bun are one sound apart.",
          ],
          [
            "I blend from right to left: t-a-c.",
            "I blend from left to right: /k/ /æ/ /t/ → cat.",
            "English reads left to right. Blend in the reading direction.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Do not guess",
        "Guessing from the first letter feels fast, but it builds a habit you must unlearn later. Blend every sound, every time, until blending feels automatic — usually after a few dozen words.",
      ),
      N(
        "Speed comes by itself",
        "Do not rush the routine. Accuracy first, speed second. When the sounds are secure, speed arrives without being asked.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Blending joins sounds into words. You say /k/ /æ/ /t/, then k-æt, then cat. Do it slowly at first. Speed grows with practice. Never guess from the first letter — blend every sound. After a few dozen words, many words jump out at you by themselves. That is fluent reading being born.",
          task: "Read the text two times. Then say the three steps of the blending routine from memory.",
        },
        writing: {
          task: "Write three words in sound steps, like /d/ /ɒ/ /g/ → dog. Choose your own words from this lesson.",
          guide: ["/h/ /ɒ/ /t/ → hot", "/m/ /æ/ /p/ → ___", "/b/ /ʌ/ /s/ → ___"],
          model: "/h/ /ɒ/ /t/ → hot · /m/ /æ/ /p/ → map · /b/ /ʌ/ /s/ → bus",
        },
        listening: {
          script:
            "/s/ /ʌ/ /n/. Sun. /m/ /æ/ /p/. Map. /h/ /ɒ/ /t/. Hot. Now you: /b/ /e/ /d/. Say the word before I do. Bed!",
          task: "Blend each group of sounds and say the word before the audio does.",
        },
        speaking: {
          task: "Blend out loud, from slow to fast: sounds, stretch, whole word.",
          frames: ["/p/ /ɪ/ /g/ → p-i-g → pig", "/b/ /ʌ/ /s/ → b-u-s → bus"],
          checklist: [
            "I said the sounds, then the stretch, then the word.",
            "I did not guess from the first letter.",
          ],
        },
      }),
      LSP(
        [
          gls("Join the sounds to read the word."),
          gls("Guessing is not reading."),
          gls("Do not add an extra vowel to a consonant sound."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Blending joins pure sounds into a word: /k/ /æ/ /t/ → cat.",
        "The routine: say each sound, stretch them together, say the word.",
        "Blend left to right — the reading direction.",
        "Never guess from the first letter; guessing is not reading.",
        "With about a few dozen words of practice, blending starts to feel instant.",
      ]),
      RV(
        [
          {
            question: "Which word follows the CVC pattern?",
            options: ["moon", "bus", "chair"],
            correctIndex: 1,
            explanation: "Bus is consonant–vowel–consonant: /b/ /ʌ/ /s/.",
            from: "Chapter 04 · Lesson 4",
          },
          {
            question: "In a CVC word, the vowel says its…",
            options: ["name", "short sound", "translation"],
            correctIndex: 1,
            explanation: "CVC vowels are always short — the five sounds from Chapter 03.",
            from: "Chapter 04 · Lesson 4",
          },
          {
            question: "When you read, you use letter…",
            options: ["names", "sounds", "pictures"],
            correctIndex: 1,
            explanation: "Reading joins letter sounds. Names are for spelling aloud.",
            from: "Chapter 04 · Lesson 1",
          },
        ],
        { title: "Look back — shapes and sounds" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "Blend these sounds: /d/ /ɒ/ /g/. What is the word?",
            [
              ["a", "duck"],
              ["b", "dog"],
              ["c", "dig"],
            ],
            "b",
            fb("dog", "/d/ /ɒ/ /g/ joins into dog — the short o sits in the middle."),
            { hints: ["Say the sounds slowly: /d/ … /ɒ/ … /g/."] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "pig",
            ["pig"],
            fb("pig", "Blend what you hear: /p/ /ɪ/ /g/ — then write the letters."),
            { hints: ["Three sounds: /p/ /ɪ/ /g/."] },
          ),
          MATCH(
            "Match each group of sounds with its word.",
            [
              ["s1", "/h/ /ɒ/ /t/"],
              ["s2", "/k/ /ʌ/ /p/"],
              ["s3", "/n/ /e/ /t/"],
              ["s4", "/m/ /æ/ /p/"],
            ],
            [
              ["w1", "map"],
              ["w2", "net"],
              ["w3", "cup"],
              ["w4", "hot"],
            ],
            [
              ["s1", "w4"],
              ["s2", "w3"],
              ["s3", "w2"],
              ["s4", "w1"],
            ],
            fb("hot, cup, net, map", "Each sound group blends into exactly one of these words."),
            { hints: ["Blend slowly: /k/ /ʌ/ /p/… which word starts with /k/?"] },
          ),
          FB(
            "Complete the blend.",
            "The sounds /m/ /æ/ /p/ blend into the word ___.",
            ["map"],
            fb("map", "/m/ /æ/ /p/ joins into map — the word you travel with."),
            { hints: ["You use it to find your way."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — blend like a reader.",
        questions: [
          MCQ(
            "What is the difference between guessing and blending?",
            [
              ["a", "Guessing is faster and better"],
              ["b", "Guessing uses one letter; blending uses every sound"],
              ["c", "There is no difference"],
            ],
            "b",
            fb("Guessing uses one letter; blending uses every sound", "A guesser is right by chance; a blender is right by method."),
          ),
          MCQ(
            "Blend /t/ /ɒ/ /p/. What is the word?",
            [
              ["a", "tip"],
              ["b", "pot"],
              ["c", "top"],
            ],
            "c",
            fb("top", "/t/ /ɒ/ /p/ joins into top — listen for the short o in the middle."),
          ),
          CORR(
            "Find and correct the mistake.",
            "I guess new words from the first letter.",
            ["I blend every sound of new words."],
            fb(
              "I blend every sound of new words.",
              "Blending is method; guessing is luck. Reading needs the method.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Blend and prove it",
      instructions:
        "Write the sound steps for three words, like “/d/ /ɒ/ /g/ → dog”. Use words from this lesson or your own CVC words. Then write one sentence explaining how blending works, as if you were teaching a friend.",
      minWords: 12,
      maxWords: 50,
    },
    homework: [
      "Blend five new CVC words out loud — slowly, then faster, then fast.",
      "Teach the blending routine to someone at home (or to your mirror).",
      "Catch yourself if you start guessing — stop, and blend the word instead.",
    ],
  },

  // =========================================================================
  // Lesson 6 — Segmenting and Chapter Review
  // =========================================================================
  {
    slug: "ch-04-l-06",
    minutes: 25,
    description:
      "Split words into sounds for spelling — the reverse of blending — then take the Chapter 04 review.",
    outcomes: [
      "Segment a spoken word into its sounds",
      "Write the letters for each sound you hear",
      "Explain how blending and segmenting work together",
      "Answer the Chapter 04 review questions",
    ],
    blocks: [
      LI(
        "Reading has a mirror image: spelling. In this lesson you learn segmenting — splitting a spoken word into its sounds so you can write it. Blending builds words for reading; segmenting breaks words for spelling. Together they make you independent. Then you take the Chapter 04 review.",
        [
          "You can blend sounds into words (Lesson 5).",
          "You can count the first, middle and last sounds of a word (Lessons 2–4).",
        ],
      ),
      H("Segmenting: blending in reverse"),
      T(
        "Blending goes from sounds to a word. Segmenting goes from a word to its sounds. Say “cat” slowly and you hear /k/ /æ/ /t/ — three sounds, three letters. That is segmenting: the writing skill that pairs with the reading skill.",
      ),
      {
        type: "definition",
        term: "segmenting",
        partOfSpeech: "noun",
        definition:
          "Segmenting means splitting a spoken word into its separate sounds, so you can write them down.",
        example: {
          english: "cat → /k/ /æ/ /t/",
          translation: "The word comes apart into three sounds.",
        },
      },
      ST(
        "The segmenting routine — three steps",
        [
          {
            title: "Step 1 — Say the word slowly",
            text: "Say the word at talking speed first, then stretch it. Make every sound audible.",
            examples: [{ english: "sun → suuun", note: "Slow motion again — ears first." }],
          },
          {
            title: "Step 2 — Count the sounds with your fingers",
            text: "Put up one finger for each sound you hear. Sun gives three fingers: /s/ /ʌ/ /n/. The finger count is your spelling plan.",
            examples: [
              { english: "/s/ … /ʌ/ … /n/ — three fingers", note: "One finger per sound, not per letter." },
            ],
          },
          {
            title: "Step 3 — Write one letter for each sound",
            text: "Now write. One letter for each finger: s-u-n. You have just spelled a word from your ears.",
            examples: [
              { english: "s-u-n", note: "Three sounds, three letters, one word." },
              { english: "p-e-n", note: "Pen: /p/ /e/ /n/ → three letters." },
            ],
          },
        ],
      ),
      GR(
        "The spelling rule",
        "To spell a word you hear, segment it first — then write one letter for each sound.",
        [
          { english: "sun → /s/ /ʌ/ /n/ → s-u-n", translation: "Three sounds, three letters." },
          { english: "pen → /p/ /e/ /n/ → p-e-n", translation: "The routine works for any CVC word." },
          { english: "top → /t/ /ɒ/ /p/ → t-o-p", translation: "Reading and writing use the same sounds." },
        ],
        [
          "Sounds and letters do not always match one-to-one: “fish” has three sounds but four letters — s-h writes the single sound /ʃ/. You will meet s-h properly in Chapter 05.",
        ],
      ),
      TB(
        "Sound counting",
        ["Word", "Sounds", "Letters"],
        [
          ["cat", "3: /k/ /æ/ /t/", "3"],
          ["sun", "3: /s/ /ʌ/ /n/", "3"],
          ["fish", "3: /f/ /ɪ/ /ʃ/", "4 — s-h is two letters, one sound"],
          ["bus", "3: /b/ /ʌ/ /s/", "3"],
        ],
        "Count with your ears, not your eyes.",
      ),
      AU(
        "Listen: segment with me",
        "Big. Say it slowly: /b/ … /ɪ/ … /g/. Three sounds. Write: b-i-g. Now you: pen. /p/ … /e/ … /n/. Write: p-e-n.",
        0.75,
      ),
      EXD(
        "Segment words from daily life",
        [
          { english: "map → /m/ /æ/ /p/ → m-a-p", note: "Travel plans start with a segmented word.", domain: "travel" },
          { english: "bed → /b/ /e/ /d/ → b-e-d", note: "The short e sits in the middle.", domain: "home" },
          { english: "pig → /p/ /ɪ/ /g/ → p-i-g", note: "Three sounds, three letters.", domain: "food" },
          { english: "run → /r/ /ʌ/ /n/ → r-u-n", note: "Segment it before you write it.", domain: "sport" },
          { english: "cup → /k/ /ʌ/ /p/ → c-u-p", note: "The /k/ sound is written with the letter c here.", domain: "food" },
          { english: "van → /v/ /æ/ /n/ → v-a-n", note: "The delivery van parks outside the shop.", domain: "work" },
          { english: "pot → /p/ /ɒ/ /t/ → p-o-t", note: "Dinner simmers in it.", domain: "home" },
          { english: "web → /w/ /e/ /b/ → w-e-b", note: "Even a technology word segments cleanly.", domain: "technology" },
          { english: "log → /l/ /ɒ/ /g/ → l-o-g", note: "One syllable, three sounds.", domain: "nature" },
          { english: "hen → /h/ /e/ /n/ → h-e-n", note: "Farm words segment too.", domain: "nature" },
          { english: "net → /n/ /e/ /t/ → n-e-t", note: "Sport equipment, spelled by ear.", domain: "sport" },
        ],
        "Eleven words, one routine: slow down, count the sounds, write one letter each.",
      ),
      US(
        [
          {
            situation: "Writing a shopping list",
            example: "You hear “milk, tea, jam” in your head — segment and write.",
            note: "Segmenting turns memory into spelling.",
          },
          {
            situation: "Texting a friend",
            example: "“Meet at the bus stop.” You spell stop from its sounds.",
            note: "Fast writing leans on segmenting.",
          },
          {
            situation: "Spelling tests",
            example: "The teacher says “hat” — you segment /h/ /æ/ /t/ and write.",
            note: "This IS the test, and you now have the method.",
          },
          {
            situation: "Taking down a name",
            example: "“Her name is Sara.” You segment what you hear before writing.",
            note: "Names are sounds too — segment first, then ask about tricky letters.",
          },
          {
            situation: "Filling in forms",
            example: "Writing your street name from the sounds you know.",
            note: "Ear to hand — that is the segmenting path.",
          },
        ],
        "Where segmenting earns its keep",
        "Every time you write a word you cannot copy, you segment.",
      ),
      DL(
        "Taking a message",
        "Yusuf writes down a message from a neighbour.",
        [
          ["Neighbour", "Hello! Can you tell Sara the meeting is at ten?"],
          ["Yusuf", "Sure, let me write it. Meeting at… ten? T-E-N?"],
          ["Neighbour", "Yes — ten. And it is in the hall."],
          ["Yusuf", "Hall. /h/ … /ɔː/ … /l/. H-A-L-L — two l’s?"],
          ["Neighbour", "Right — one sound /l/, two letters."],
          ["Yusuf", "Good. Sara will get the message. Thanks!"],
        ],
      ),
      CMP(
        "Blending vs segmenting",
        ["Blending (for reading)", "Segmenting (for spelling)"],
        [
          ["Direction", "Sounds → word", "Word → sounds"],
          ["When you use it", "Reading a written word", "Writing a spoken word"],
          ["Example", "/k/ /æ/ /t/ → cat", "cat → /k/ /æ/ /t/ → c-a-t"],
          ["What they share", "The same sounds — only the direction changes", "The same sounds — only the direction changes"],
        ],
        {
          intro: "Two directions, one system. Readers who only blend can read but not write.",
          verdict:
            "Practise both directions and you become independent: read what you hear, write what you say.",
        },
      ),
      MS(
        [
          [
            "“Fish” has four sounds.",
            "“Fish” has three sounds: /f/ /ɪ/ /ʃ/.",
            "S-h is two letters but ONE sound. Count what you hear, not what you see.",
          ],
          [
            "I write “cat” as “ct”.",
            "I catch the middle vowel: /k/ /æ/ /t/ → c-a-t.",
            "Every CVC word has a vowel in the middle. Slow down and hear it.",
          ],
          [
            "Segmenting means cutting the word into letters.",
            "Segmenting means splitting the word into sounds.",
            "Sounds come first; letters are just how the sounds are written down.",
          ],
          [
            "“Ship” starts with two sounds: /s/ and /h/.",
            "“Ship” starts with ONE sound: /ʃ/.",
            "S-h together make a single sound — you will meet them properly in Chapter 05.",
          ],
        ],
        "Common beginner mistakes",
      ),
      H("Chapter 04 review"),
      T(
        "You can now connect letters to sounds. You can catch first and final sounds. You can read and build CVC words. You can blend sounds into words and segment words into sounds. Check yourself with the questions below, then take the final task.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "In this chapter you learned the code of English. Letters have names and sounds — and reading uses the sounds. Words have first sounds and final sounds. CVC words put the sounds together. Blending joins sounds into words for reading. Segmenting splits words into sounds for spelling. With these two skills you can read what you hear and write what you say.",
          task: "Read the text two times. Then say which skill is for reading and which is for spelling.",
        },
        writing: {
          task: "Segment and write these words: map, bed, pig, top, run, hat.",
          guide: ["map → /m/ /æ/ /p/ → m-a-p", "bed → ___", "pig → ___"],
          model: "map · bed · pig · top · run · hat",
        },
        listening: {
          script:
            "Spelling check time. Listen and write. One: pen. Two: sun. Three: dog. Four: cup. Check your letters — one letter for each sound you heard.",
          task: "Write the four words, then check them against the lesson table.",
        },
        speaking: {
          task: "Teach the segmenting routine out loud, as if to a friend. Use your fingers and one example word.",
          frames: [
            "Say the word slowly.",
            "Count the sounds with your fingers.",
            "Write one letter for each sound.",
          ],
          checklist: [
            "I explained all three steps.",
            "I segmented one word completely, with finger counting.",
          ],
        },
      }),
      LSP(
        [
          gls("Segment the word to spell it."),
          gls("Join the sounds to read the word."),
          gls("Trust your ears, not your eyes."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Segmenting splits a spoken word into its sounds for spelling.",
        "The routine: say it slowly, count the sounds with your fingers, write one letter per sound.",
        "Blending and segmenting are one system in two directions — reading and writing.",
        "Count sounds with your ears: fish has three sounds but four letters.",
        "This chapter gave you the complete beginner code: names vs sounds, first and final sounds, CVC words, blending, segmenting.",
      ]),
      RV(
        [
          {
            question: "When you READ, you use letter…",
            options: ["names", "sounds", "pictures"],
            correctIndex: 1,
            explanation: "Reading joins letter sounds; names are for spelling aloud.",
            from: "Chapter 04 · Lesson 1",
          },
          {
            question: "The first sound of “moon” is…",
            options: ["/m/", "/n/", "/uː/"],
            correctIndex: 0,
            explanation: "Moon opens with the humming /m/ — lips closed.",
            from: "Chapter 04 · Lesson 2",
          },
          {
            question: "Which pair rhymes?",
            options: ["cat — cap", "sun — run", "dog — pig"],
            correctIndex: 1,
            explanation: "Sun and run both end with /n/. The others end differently.",
            from: "Chapter 04 · Lesson 3",
          },
          {
            question: "Which word follows the CVC pattern?",
            options: ["moon", "chair", "bus"],
            correctIndex: 2,
            explanation: "Bus is consonant–vowel–consonant: /b/ /ʌ/ /s/.",
            from: "Chapter 04 · Lesson 4",
          },
          {
            question: "Blending means…",
            options: [
              "guessing from the first letter",
              "joining sounds into a word",
              "copying a word twice",
            ],
            correctIndex: 1,
            explanation: "Blending joins every sound, left to right — never guessing.",
            from: "Chapter 04 · Lesson 5",
          },
          {
            question: "Segmenting is used mainly for…",
            options: ["reading", "spelling", "singing"],
            correctIndex: 1,
            explanation: "Segmenting breaks words into sounds so you can write them.",
            from: "Chapter 04 · Lesson 6",
          },
        ],
        { title: "Chapter 04 review — the whole chapter", intro: "Six questions from Lessons 1 to 6. Can you answer them all?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Hints are there when you need them.",
        questions: [
          MCQ(
            "How many sounds do you hear in “fish”?",
            [
              ["a", "2"],
              ["b", "3"],
              ["c", "4"],
            ],
            "b",
            fb("3: /f/ /ɪ/ /ʃ/", "S-h is two letters but one sound. Fish has three sounds and four letters."),
            { hints: ["Remember: some letter pairs make one sound."] },
          ),
          FB(
            "Write the missing letter.",
            "sun → s ___ n",
            ["u"],
            fb("u", "The middle sound /ʌ/ is written with the letter u."),
            { hints: ["It is the vowel from Chapter 03 — the one your mouth opens for."] },
          ),
          REORD(
            "Put the segmenting routine in order.",
            "Say the word slowly. Count the sounds with your fingers. Write one letter for each sound.",
            fb(
              "Slow word, finger count, one letter per sound",
              "The order matters: ears first, fingers second, pencil third.",
            ),
            { hints: ["What do you do before counting? What comes last?"] },
          ),
          DICT(
            "Listen and write the word you hear.",
            "hat",
            ["hat"],
            fb("hat", "Segment what you hear: /h/ /æ/ /t/ — three sounds, three letters."),
            { hints: ["Three sounds: /h/ /æ/ /t/."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints — you have the method.",
        questions: [
          MCQ(
            "Blending and segmenting are…",
            [
              ["a", "opposites that fight each other"],
              ["b", "the same sounds in two directions"],
              ["c", "only for teachers"],
            ],
            "b",
            fb("The same sounds in two directions", "Blending goes sounds → word (reading); segmenting goes word → sounds (spelling)."),
          ),
          MCQ(
            "To spell a word you hear, first you…",
            [
              ["a", "segment it into sounds"],
              ["b", "draw it"],
              ["c", "translate it"],
            ],
            "a",
            fb("Segment it into sounds", "Slow down, count the sounds, then write one letter per sound."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Fish has four sounds.",
            ["Fish has three sounds."],
            fb(
              "Fish has three sounds.",
              "/f/ /ɪ/ /ʃ/ — the letters s-h write the single sound /ʃ/.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Segment and spell",
      instructions:
        "Segment these words into sounds and write the letters: “map”, “bed”, “pig”, “top”, “run”, “hat”. Show your finger count for each one. Then write one short sentence using two of the words.",
      minWords: 12,
      maxWords: 50,
    },
    homework: [
      "Segment five objects around you: say the sounds, count on your fingers, write the letters.",
      "Write tomorrow’s shopping list from sound — segment each word before you write it.",
      "Teach someone the finger-count routine with the word “sun”.",
    ],
  },
];
