/**
 * PROMPT 57 production — Batch 6, Chapter 17: Present Continuous Tense.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the now chapter: WHEN the tense applies (actions in progress
 * with now / right now / at the moment / Look! / Listen! signals — the
 * live-camera metaphor against the present simple's photo album), HOW the
 * form is built (be + -ing with the three spelling rules: plain -ing,
 * drop the e, double the consonant), negatives with isn't / aren't (the
 * "He don't working" tense-mixing trap), the be-flip questions (Are you
 * listening? What is she doing?), the state-verb rule (know, like and
 * want stay simple — never "I am knowing"), and the big A1 decision
 * between the two present tenses (Lesson 5: every day vs right now).
 * No bare conjugation tables alone, no "practise more" filler — every
 * form is taught with a reason, a mistake it prevents, and a place in
 * real life.
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

export const ch17Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Meaning and Usage
  // =========================================================================
  {
    slug: "ch-17-l-01",
    minutes: 20,
    description:
      "Meet the tense of right now: what the present continuous means, its now-signals (now, right now, at the moment, Look!, Listen!), and the camera test that separates it from the present simple.",
    outcomes: [
      "Explain the core meaning: an action in progress now",
      "Spot the signal words: now, right now, at the moment, today, Look!, Listen!",
      "Tell a live camera from a photo album (now versus habit)",
      "Find continuous verbs in a short live scene",
    ],
    blocks: [
      LI(
        "This lesson opens the tense of right now: the present continuous. It does not talk about habits. It talks about this moment. You are reading. I am teaching. The rain is falling. One tense paints the live picture.",
        [
          "You know the verb be: am, is and are (Chapter 12).",
          "You know the present simple for habits, routines and facts (Chapter 13).",
          "You know that every sentence needs a verb (Chapter 08).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "present continuous", partOfSpeech: "noun", definition: "The tense for actions happening now: I am reading, she is working." },
        { word: "action", partOfSpeech: "noun", definition: "Something you do: eat, run, read, play." },
        { word: "right now", partOfSpeech: "phrase", definition: "At this moment — the strongest now-signal." },
        { word: "now", partOfSpeech: "adverb", definition: "At this time, as you speak." },
      ]),
      H("The live camera"),
      T(
        "The present simple is a photo album. It shows your habits, day after day. The present continuous is a live camera. It shows what is happening at this moment. Look out of the window. If the rain is falling now, say: It is raining.",
      ),
      {
        type: "definition",
        term: "present continuous",
        partOfSpeech: "tense",
        definition:
          "The present continuous describes an action in progress at the moment of speaking. It is built with am, is or are + a verb ending in -ing.",
        example: {
          english: "Look! It is raining.",
          translation: "Look! is evidence — the rain is falling at this moment.",
        },
      },
      ST("Spot a now-action in three steps", [
        {
          title: "Step 1 — Ask: is it happening at this moment?",
          text: "Is the action in progress now? Started, not finished? Then the present continuous is your tense.",
          examples: [{ english: "Look! The baby is sleeping.", note: "Look! is evidence. You can see it now." }],
        },
        {
          title: "Step 2 — Check that it is temporary",
          text: "Now-actions are not forever. You are reading this lesson, but you will stop soon. Temporary situations use this tense too.",
          examples: [{ english: "We are staying with my aunt this week.", note: "A temporary situation — this week only." }],
        },
        {
          title: "Step 3 — Listen for the signal words",
          text: "now, right now, at the moment, today, this week, Look!, Listen! — these words shout: present continuous!",
          examples: [{ english: "Listen! The birds are singing.", note: "Listen! is live evidence for your ears." }],
        },
      ]),
      GR(
        "The core meaning",
        "The present continuous describes an action in progress at the moment of speaking. Use it for now-actions and temporary situations. Signals: now, right now, at the moment, today, this week, Look!, Listen!.",
        [
          { english: "I am reading.", translation: "The action is in progress at this moment." },
          { english: "She is working today.", translation: "today — a temporary now-day, not a habit." },
          { english: "Look! It is raining.", translation: "Look! is evidence you can see now." },
        ],
        ["“I read every day” is a habit — that is the present simple, Chapter 13."],
      ),
      TB(
        "The two presents, side by side",
        ["Present simple (photo album)", "Present continuous (live camera)"],
        [
          ["The idea", "habits, routines, facts", "actions in progress now"],
          ["The time", "again and again", "this moment, this week"],
          ["The signals", "every day, usually, always, on Mondays", "now, right now, at the moment, today, Look!, Listen!"],
          ["Example", "I drink tea every morning.", "I am drinking tea right now."],
        ],
        "One question decides it: photo album or live camera?",
      ),
      AU(
        "Listen: happening now",
        "It is raining. The children are playing in the garden. I am drinking tea right now. Look! The bus is coming. Listen! The birds are singing.",
        0.85,
      ),
      AU(
        "Listen: a live scene",
        "Hi! It's four o'clock and I'm at home. My mother is cooking. My brother is doing his homework. My father is watching the news. Outside, the rain is falling again. We are waiting for dinner.",
        0.9,
      ),
      EXD(
        "The live camera in real life",
        [
          { english: "Look! It is raining.", note: "Look! + is raining — evidence you can see this minute.", domain: "nature" },
          { english: "The children are playing in the garden.", note: "More than one child → are playing. Live action now.", domain: "family" },
          { english: "I am drinking tea. Do you want some?", note: "A now-action plus an offer — two tenses in one line.", domain: "food" },
          { english: "Please be quiet. The baby is sleeping.", note: "is sleeping — the reason for the request.", domain: "home" },
          { english: "Sara is wearing her blue coat today.", note: "is wearing — the outfit on her body at this moment.", domain: "everyday" },
          { english: "We are waiting for the bus.", note: "are waiting — the action started and has not finished.", domain: "travel" },
          { english: "The teacher is writing on the board. Copy quickly!", note: "is writing — in progress, so hurry.", domain: "education" },
          { english: "Look! The shop is closing.", note: "is closing — the action is happening as you watch.", domain: "shopping" },
          { english: "Listen! The man is singing in the street.", note: "Listen! is evidence for your ears, not your eyes.", domain: "social" },
        ],
        "Nine sentences from nine parts of life — one live camera carries them all.",
      ),
      US(
        [
          {
            situation: "Calling a friend",
            example: "“Hi! What are you doing?” “I'm cooking dinner.”",
            note: "The most common now-question in English.",
          },
          {
            situation: "Describing a photo",
            example: "“In this photo, we are swimming. My brother is laughing.”",
            note: "A photo freezes a live moment — the tense stays continuous.",
          },
          {
            situation: "Explaining a busy moment",
            example: "“I can't talk now. I'm helping my mother.”",
            note: "Now-actions explain why you are busy.",
          },
          {
            situation: "Reporting the weather",
            example: "“Take an umbrella. It's raining.”",
            note: "Look outside: the evidence is falling.",
          },
          {
            situation: "Apologising at the door",
            example: "“Sorry! I'm getting dressed. Two minutes!”",
            note: "The now-tense explains a delay.",
          },
        ],
        "Where the now-tense lives",
        "Phone calls, photos, small talk — the live camera runs all day.",
      ),
      DL(
        "The phone call",
        "Two friends talk on the phone.",
        [
          ["Sara", "Hi Ken! What are you doing?"],
          ["Ken", "I'm cooking dinner. And you?"],
          ["Sara", "I'm watching a film. Is it raining there?"],
          ["Ken", "Yes! Look out of the window. The rain is falling."],
          ["Sara", "What are the children doing?"],
          ["Ken", "They aren't sleeping. They're playing in their room."],
          ["Sara", "Are they making a noise?"],
          ["Ken", "Yes! They're laughing loudly. And my dinner is burning!"],
        ],
      ),
      CMP(
        "“I read now” or “I am reading now”?",
        ["present simple with now ✗", "present continuous with now ✓"],
        [
          ["The sentence", "I read a book now.", "I am reading a book now."],
          ["Why", "read is a habit form; now needs the live camera", "am reading — be + -ing shows the progress"],
          ["More examples", "Look! It rains. ✗", "Look! It is raining. ✓"],
          ["The fix", "For now, add be and -ing", "For habits, drop them"],
        ],
        {
          intro: "The number one beginner error with this tense: using the habit tense for a now-action.",
          verdict:
            "If you can see it happening, use am, is or are + -ing. “I am reading now” — the camera is live.",
        },
      ),
      MS(
        [
          [
            "I am go to school now.",
            "I am going to school now.",
            "The -ing is missing. am + going, never am + go.",
          ],
          [
            "Look! It rains.",
            "Look! It is raining.",
            "Look! points at this moment. The live camera needs is raining.",
          ],
          [
            "She is work today.",
            "She is working today.",
            "Both parts must be present: is + working. Never is + work.",
          ],
          [
            "They waiting for the bus.",
            "They are waiting for the bus.",
            "The be-verb cannot disappear. are + waiting.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Camera check",
        "Before you speak, ask one question: is this a photo album or a live camera? Photo album → present simple: I play cricket on Sundays. Live camera → present continuous: I am playing cricket now.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "It is Monday morning at the market. Look! A man is carrying a big box. Two women are laughing near the fruit. A child is crying — his mother is buying him an apple. It isn't raining today. The sun is shining. Everyone is moving quickly, because everyone is working.",
          task: "Read the text two times. Then find six continuous verbs.",
        },
        writing: {
          task: "Write four now-sentences about the people around you. Use Look! or Listen! at least once.",
          guide: ["Look! My ______ is ______ing.", "Right now, I am ______.", "Listen! The ______ are ______ing.", "At the moment, my ______ isn't ______ing."],
          model: "Look! My sister is drawing a picture. Right now, I am learning English. Listen! The birds are singing. At the moment, my father isn't sleeping.",
        },
        listening: {
          script:
            "What am I doing? I am sitting in my room. I am reading a book. My mother is cooking in the kitchen. My little brother is crying. Outside, the rain is falling. Listen! The cat is purring.",
          task: "Listen. What is the little brother doing?",
        },
        speaking: {
          task: "Look around you. Tell a partner three things that are happening now. Use Look! or Listen! once.",
          frames: ["Look! ______ is ______ing.", "Right now, I am ______.", "Listen! The ______ are ______ing."],
          checklist: [
            "Every sentence had be + -ing.",
            "I used one signal word: now, Look!, Listen!.",
            "I spoke without reading.",
          ],
        },
      }),
      LSP(
        [
          gls("The present continuous describes actions happening now."),
          gls("present continuous"),
          gls("action"),
          gls("right now"),
          gls("now"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The present continuous describes actions in progress now.",
        "It is the live camera; the present simple is the photo album.",
        "Signals: now, right now, at the moment, today, this week, Look!, Listen!.",
        "Temporary situations use it too: We are staying with my aunt this week.",
        "Never a bare -ing: she is working, never “she working”.",
      ]),
      RV(
        [
          {
            question: "am, is and are are the present of which verb?",
            options: ["go", "be", "do"],
            correctIndex: 1,
            explanation: "am, is and are are the present of be — the forms you met in Chapter 12.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which tense describes habits: every day, usually, always?",
            options: ["present continuous", "present simple", "past simple"],
            correctIndex: 1,
            explanation: "Habits and routines use the present simple — Chapter 13.",
            from: "Chapter 13 · Lesson 1",
          },
          {
            question: "Which pronoun replaces “the children”?",
            options: ["they", "she", "it"],
            correctIndex: 0,
            explanation: "More than one child → they. And they takes are.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "Which sentence talks about THIS MOMENT?",
            options: ["She works in a bank.", "She is working right now.", "She worked yesterday."],
            correctIndex: 1,
            explanation: "right now is the continuous signal. A job is a habit; yesterday is finished time.",
            from: "Chapter 13 · Lesson 1",
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
            "Which sentence is happening NOW?",
            [
              ["a", "I drink tea every morning."],
              ["b", "Look! It is raining."],
              ["c", "The sun rises in the east."],
            ],
            "b",
            fbx(
              "Look! It is raining.",
              "Look! points at this moment, so the action is in progress: is raining.",
              "“Every morning” is a habit; “rises in the east” is a fact — both use the present simple.",
              { english: "Listen! The baby is crying.", translation: "Listen! is evidence for now — the crying is happening." },
            ),
            { hints: ["Look for a signal word: now, Look!, Listen!, today."] },
          ),
          FB(
            "Complete the now-sentence with the correct form of play.",
            "Right now, the children ___ in the garden.",
            ["are playing"],
            fb(
              "are playing",
              "Right now is the continuous signal. Children = they → are + playing.",
              "The present simple “play” would turn this moment into a habit.",
            ),
            { hints: ["Children = they. Which be-word goes with they? Then add -ing to the verb."] },
          ),
          MATCH(
            "Match each sentence to its time.",
            [
              ["s1", "I am reading a book right now."],
              ["s2", "I read a book every week."],
              ["s3", "We are staying with my aunt this week."],
            ],
            [
              ["t1", "habit (photo album)"],
              ["t2", "now-action (live camera)"],
              ["t3", "temporary situation (this week)"],
            ],
            [
              ["s1", "t2"],
              ["s2", "t1"],
              ["s3", "t3"],
            ],
            fb(
              "right now → live camera · every week → photo album · this week → temporary now",
              "Ask each sentence: does it repeat, happen this moment, or last a short period?",
              "Each signal belongs to one time only — every week can never mean this moment.",
            ),
            { hints: ["Ask: does it happen again and again, or is it in progress?"] },
          ),
          LIS(
            "Listen and answer.",
            "Hi! It's five o'clock. I'm sitting in the park. My brother is playing football. Two old men are talking quietly. Listen! The birds are singing. It isn't raining today — the sun is shining!",
            "What is the weather like today?",
            ["The sun is shining.", "It isn't raining.", "The sun is shining and it isn't raining.", "It is not raining and the sun is shining."],
            fb(
              "The sun is shining.",
              "The last line says it: it isn't raining today — the sun is shining.",
              "The park, the football and the birds are the other parts of the scene.",
            ),
            { hints: ["The answer is in the very last part of the listening."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is a live camera, not a photo album?",
            [
              ["a", "She works in a hospital."],
              ["b", "She is helping her father now."],
              ["c", "They play cricket on Sundays."],
            ],
            "b",
            fb("She is helping her father now.", "now + is helping — the action is in progress.", "The other two carry habit signals: a job and on Sundays."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Look! The children is playing.",
            ["Look! The children are playing."],
            fb(
              "Look! The children are playing.",
              "Children = more than one → are. The be-verb must match its subject.",
              "is belongs to one thing; children are many.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the now-sentence.",
            "Listen! The birds are singing",
            fb(
              "Listen! The birds are singing",
              "Evidence word + be + subject + -ing.",
              "Listen! opens the sentence; are matches the birds.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Right now, I am learning English.",
            ["Right now, I am learning English."],
            fb(
              "Right now, I am learning English.",
              "right now + am learning — be and -ing, both present.",
              "The sentence carries both parts of the continuous.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Right now",
      instructions:
        "Look around you. Write five sentences about what is happening right now. Use three different subjects, and use Look! or Listen! at least once. Example: “Look! It is raining. My mother is cooking. I am learning English.”",
      minWords: 15,
      maxWords: 55,
    },
    homework: [
      "Describe what three people near you are doing now: “My mother is cooking. The children are playing.”",
      "Report one temporary situation: “I am reading a good book this week.”",
      "Look out of your window for one minute. Write two now-sentences about the street.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Am, Is, Are + Verb-ing
  // =========================================================================
  {
    slug: "ch-17-l-02",
    minutes: 25,
    description:
      "The two-part engine — be plus -ing — with the three spelling rules that build every -ing form: plain -ing, drop the e, double the consonant.",
    outcomes: [
      "Build the continuous form: am/is/are + -ing",
      "Spell -ing with all three rules: plain, drop-e, double-consonant",
      "Match the be-verb to every subject",
      "Spot and fix a missing be or a missing -ing",
    ],
    blocks: [
      LI(
        "The present continuous has two parts. Part one is be: am, is or are. Part two is the -ing engine: working, reading, playing. Both parts must be present. In this lesson you build the form — and learn the three -ing spelling rules.",
        [
          "You know be: am with I, is with he, she and it, are with you, we and they (Chapter 12).",
          "You know the present simple and its third-person -s (Chapter 13).",
          "You know that every sentence needs a verb (Chapter 08).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "to make", partOfSpeech: "verb", definition: "To build or create something: make a cake, make dinner." },
        { word: "to sit", partOfSpeech: "verb", definition: "To rest on a chair: sit down, please." },
        { word: "to dance", partOfSpeech: "verb", definition: "To move your body to music." },
        { word: "to write", partOfSpeech: "verb", definition: "To make words on paper: write your name." },
      ]),
      H("The two-part engine"),
      T(
        "One part is not enough. “She working now” is wrong — where is be? “She is work now” is wrong — where is -ing? Say both parts every time: she is working. Be matches the subject. The -ing form never changes for the subject.",
      ),
      {
        type: "definition",
        term: "-ing form",
        partOfSpeech: "verb form",
        definition:
          "The -ing form is the engine of the continuous. You make it from the base verb: work → working. Three spelling rules give you every form.",
        example: {
          english: "She is making dinner.",
          translation: "make drops its e: making. is + making — both parts present.",
        },
      },
      ST("Build the form in three steps", [
        {
          title: "Step 1 — Choose be to match the subject",
          text: "I → am. He, she, it → is. You, we, they → are. This is your Chapter 12 be, back at work.",
          examples: [
            { english: "I am cooking.", note: "am + cooking — I takes am." },
            { english: "They are swimming.", note: "are + swimming — and swim doubles its m." },
          ],
        },
        {
          title: "Step 2 — Add -ing with the right spelling",
          text: "Most verbs just take -ing: work → working. Verbs ending in silent e drop it: make → making. Short verbs with one vowel + one consonant double it: sit → sitting.",
          examples: [
            { english: "He is sitting.", note: "One vowel + one consonant → the t doubles." },
            { english: "She is making tea.", note: "Silent e falls off: making." },
          ],
        },
        {
          title: "Step 3 — Check both parts before you speak",
          text: "Say the sentence slowly. Is be there? Is -ing there? Two ticks — then speak.",
          examples: [{ english: "We are writing.", note: "are + writing — the e drops, the i stays." }],
        },
      ]),
      GR(
        "The form rule",
        "am/is/are + verb-ing. I am working. He is working. They are working. The be-verb matches the subject. The -ing form never changes for the subject.",
        [
          { english: "I am cooking dinner.", translation: "am + cooking: both parts present." },
          { english: "He is sleeping.", translation: "is + sleeping — one man, one be." },
          { english: "They are swimming.", translation: "are + swimming — swim doubles its m." },
        ],
        ["Never write “she working” or “she is work”. Both parts, every time."],
      ),
      TB(
        "The three -ing spelling rules",
        ["Rule", "When", "Examples"],
        [
          ["+ ing", "most verbs", "work → working, read → reading, play → playing"],
          ["drop e + ing", "verb ends in silent -e", "make → making, write → writing, dance → dancing"],
          ["double + ing", "one vowel + one consonant, short verb", "run → running, sit → sitting, swim → swimming"],
        ],
        "Three rules cover every verb you know.",
      ),
      TB(
        "The be-verb matches the subject",
        ["Subject", "be", "Example"],
        [
          ["I", "am", "I am reading."],
          ["you", "are", "You are listening."],
          ["he", "is", "He is sleeping."],
          ["she", "is", "She is dancing."],
          ["it", "is", "It is raining."],
          ["we", "are", "We are waiting."],
          ["they", "are", "They are playing."],
        ],
        "The -ing never changes. Only be changes.",
      ),
      AU(
        "Listen: the engine running",
        "I am working. She is making dinner. They are swimming. He is sitting quietly. We are writing. Look! It is raining.",
        0.85,
      ),
      AU(
        "Listen: a live afternoon",
        "It's four o'clock. I am making tea. My sister is writing a story. My father is sleeping in his chair. The dogs are running in the street. Listen! The kettle is singing.",
        0.9,
      ),
      EXD(
        "The engine in real life",
        [
          { english: "She is making dinner.", note: "make drops the e → making. is + making.", domain: "food" },
          { english: "The baby is sitting on the floor.", note: "sit doubles the t → sitting. One vowel + one consonant.", domain: "home" },
          { english: "Look! The girls are dancing.", note: "dance drops the e → dancing. Look! is evidence.", domain: "social" },
          { english: "I am writing a letter to my grandmother.", note: "write drops the e → writing.", domain: "family" },
          { english: "The kettle is boiling. Rice goes in now.", note: "boil → boiling: two vowels, so no doubling.", domain: "food" },
          { english: "He is running for the bus.", note: "run doubles the n → running.", domain: "travel" },
          { english: "We are reading the same book.", note: "read → reading: the plain rule, just -ing.", domain: "education" },
          { english: "Hurry! The shop is closing.", note: "close drops the e → closing.", domain: "shopping" },
          { english: "My mother is wearing her green shawl today.", note: "wear → wearing: two vowels, no doubling, no e to drop.", domain: "everyday" },
        ],
        "Nine sentences from real life — every one carries both engines.",
      ),
      US(
        [
          {
            situation: "In the kitchen",
            example: "“I'm making tea. The rice is boiling.”",
            note: "Two -ing actions, one busy cook.",
          },
          {
            situation: "At the bus stop",
            example: "“Look! The bus is coming. Run!”",
            note: "The engine powers quick warnings.",
          },
          {
            situation: "Helping with homework",
            example: "“I'm writing my name. Is the spelling right?”",
            note: "Spelling talk uses the continuous.",
          },
          {
            situation: "On the phone",
            example: "“What are you doing? — I'm dancing in the kitchen!”",
            note: "Be honest — the now-tense asks.",
          },
          {
            situation: "Describing a photo",
            example: "“Here we are swimming. Here my cousin is sitting on a wall.”",
            note: "Photos freeze now-actions.",
          },
        ],
        "Where the engine runs",
        "Kitchens, bus stops, phone calls — the two-part engine runs all day.",
      ),
      DL(
        "The spelling game",
        "A brother and sister quiz each other after school.",
        [
          ["Ammar", "Sana, quick! What's the -ing of make?"],
          ["Sana", "Making. The e falls off."],
          ["Ammar", "Good. And sit?"],
          ["Sana", "Sitting. One vowel, one consonant — the t doubles."],
          ["Ammar", "And dance?"],
          ["Sana", "Dancing. Another e falls off."],
          ["Ammar", "Last one. What am I doing now?"],
          ["Sana", "You're sitting on my chair and laughing! Get off!"],
        ],
      ),
      CMP(
        "“She is working” or “She working”?",
        ["one part missing ✗", "be + -ing ✓"],
        [
          ["The sentence", "She working now.", "She is working now."],
          ["Why", "be is missing; -ing cannot stand alone", "is carries the subject, working carries the action"],
          ["The twin error", "“She is work now.” — be without -ing", "Both halves are wrong the same way"],
          ["More", "They waiting. ✗ / They are waiting. ✓", "Check two boxes: be? -ing?"],
        ],
        {
          intro: "The most common continuous error: dropping one of the two parts.",
          verdict:
            "Every continuous sentence has two engines: be (am, is, are) and -ing. Two ticks before you speak: is be there? is -ing there?",
        },
      ),
      MS(
        [
          [
            "She working now.",
            "She is working now.",
            "The be-verb is missing. am, is or are must stand before the -ing form.",
          ],
          [
            "She is work now.",
            "She is working now.",
            "The -ing is missing. be alone cannot carry the action.",
          ],
          [
            "He is makeing tea.",
            "He is making tea.",
            "Silent e verbs drop the e: make → making. “makeing” is impossible.",
          ],
          [
            "The baby is siting on the floor.",
            "The baby is sitting on the floor.",
            "One vowel + one consonant doubles: sit → sitting.",
          ],
          [
            "They are swiming.",
            "They are swimming.",
            "swim has one vowel + one consonant: double the m — swimming.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Two ticks, every time",
        "“She working” and “she is work” are twins: each drops one part of the engine. Before every continuous sentence, check two boxes. Box one: am, is or are. Box two: the -ing form. Two ticks — then speak.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My little brother is learning English. Right now, he is writing ten -ing forms. He is making a list. Make — he is writing “making”. Sit — he is writing “sitting”. Run — he is writing “running”. Dance — he is dancing in his chair! “This is easy!” he is saying. Then he writes “swiming”. Oh dear. The m is lonely. Where is its twin?",
          task: "Read the text two times. Then find the one wrong spelling.",
        },
        writing: {
          task: "Write the -ing forms of these eight verbs, then use four of them in continuous sentences: read, make, run, dance, write, sit, cook, swim.",
          guide: ["read → ______", "make → ______", "run → ______", "I am ______ right now."],
          model: "read → reading, make → making, run → running. I am reading a book right now.",
        },
        listening: {
          script:
            "Listen and repeat the -ing forms. Making. Sitting. Running. Dancing. Writing. Swimming. Now the sentences: she is making tea. They are running. We are dancing.",
          task: "Listen. Write the six -ing forms you hear.",
        },
        speaking: {
          task: "Ask a partner: What are you doing? Your partner answers with be + -ing. Then swap roles.",
          frames: ["What are you doing?", "I'm ______ing. And you?", "Right now, I'm ______ing too."],
          checklist: [
            "My answer had both parts: be and -ing.",
            "My -ing spelling followed one of the three rules.",
            "I answered without reading.",
          ],
        },
      }),
      LSP(
        [
          gls("Use am, is or are with a verb ending in -ing."),
          gls("to make"),
          gls("to sit"),
          gls("to dance"),
          gls("to write"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "The continuous form is two engines: be (am/is/are) + -ing.",
        "Spelling 1: most verbs add -ing — work → working.",
        "Spelling 2: silent e drops — make → making, dance → dancing, write → writing.",
        "Spelling 3: one vowel + one consonant doubles — sit → sitting, run → running, swim → swimming.",
        "Never “she working” or “she is work”. Two ticks: be? -ing?",
      ]),
      RV(
        [
          {
            question: "Which be-word goes with “my friends”?",
            options: ["are", "is", "am"],
            correctIndex: 0,
            explanation: "My friends = they → are. The be-verb matches its subject.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which be-word goes with “the kettle”?",
            options: ["is", "are", "am"],
            correctIndex: 0,
            explanation: "The kettle = it → is. One thing takes is.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Every sentence needs…",
            options: ["a verb", "a colour", "two nouns"],
            correctIndex: 0,
            explanation: "Every sentence needs a verb. Action words are verbs.",
            from: "Chapter 08 · Lesson 2",
          },
          {
            question: "Which sentence is a HABIT (photo album)?",
            options: ["I read every night.", "I am reading now.", "I read this minute."],
            correctIndex: 0,
            explanation: "every night signals a repeating habit — present simple.",
            from: "Chapter 13 · Lesson 1",
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
            "Which sentence has BOTH parts of the engine?",
            [
              ["a", "She working now."],
              ["b", "She is working now."],
              ["c", "She is work now."],
            ],
            "b",
            fbx(
              "She is working now.",
              "be (is) + -ing (working) — both engines running.",
              "The others each drop one part: no be, or no -ing.",
              { english: "They are swimming.", translation: "are + swimming: both parts, and the m doubles." },
            ),
            { hints: ["Check two boxes: is a be-verb there? is -ing there?"] },
          ),
          FB(
            "Complete with the -ing form of make.",
            "Look! Sara is ___ a cake.",
            ["making"],
            fb(
              "making",
              "make drops its silent e → making.",
              "“makeing” is impossible; keeping the e is impossible too.",
            ),
            { hints: ["The verb ends in a silent e. What happens to that e?"] },
          ),
          MATCH(
            "Match each verb to its -ing spelling rule.",
            [
              ["v1", "make"],
              ["v2", "sit"],
              ["v3", "read"],
            ],
            [
              ["r1", "double the consonant"],
              ["r2", "just add -ing"],
              ["r3", "drop the e"],
            ],
            [
              ["v1", "r3"],
              ["v2", "r1"],
              ["v3", "r2"],
            ],
            fb(
              "make → drop the e · sit → double the consonant · read → just add -ing",
              "Each verb follows one of the three spelling rules.",
              "Silent e drops; one vowel + one consonant doubles; most verbs take plain -ing.",
            ),
            { hints: ["Look at the last letters of each verb. What do they tell you?"] },
          ),
          LIS(
            "Listen and answer.",
            "Hi! It's six o'clock. I'm making dinner. The rice is boiling. My brother is sitting at the table. He isn't helping — he's laughing at me!",
            "Who is laughing?",
            ["My brother is laughing.", "My brother.", "The speaker's brother is laughing.", "The brother."],
            fb(
              "My brother is laughing.",
              "The last line says it: he isn't helping — he's laughing at me!",
              "Dinner and rice are the other parts of the scene.",
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
            "Which -ing spelling is correct for run?",
            [
              ["a", "runing"],
              ["b", "runnung"],
              ["c", "running"],
            ],
            "c",
            fb("running", "run has one vowel + one consonant → the n doubles.", "The other two miss the double n."),
          ),
          CORR(
            "Find and correct the mistake.",
            "The baby is siting on the floor.",
            ["The baby is sitting on the floor."],
            fb(
              "The baby is sitting on the floor.",
              "One vowel + one consonant: the t doubles — sitting.",
              "“siting” misses the twin t.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "She is making tea right now",
            fb(
              "She is making tea right now",
              "Subject + be + -ing + object + time signal.",
              "is matches she; the signal word closes the sentence.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "They are swimming in the river.",
            ["They are swimming in the river."],
            fb(
              "They are swimming in the river.",
              "are + swimming — and swim doubles its m.",
              "The sentence carries both engines plus the double consonant.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Spelling gym",
      instructions:
        "Write the -ing form of these ten verbs, then use four of them in continuous sentences: read, make, run, dance, write, sit, cook, swim, come, take. Example: “make → making. My mother is making dinner right now.”",
      minWords: 15,
      maxWords: 60,
    },
    homework: [
      "Say ten continuous sentences with ten different verbs. Check every -ing against the three rules.",
      "Write the -ing forms of the verbs you use most: eat, drink, read, write, sit, run.",
      "Find one -ing word in anything you read today. Which spelling rule made it?",
    ],
  },

  // =========================================================================
  // Lesson 3 — Affirmative and Negative
  // =========================================================================
  {
    slug: "ch-17-l-03",
    minutes: 20,
    description:
      "What is happening and what is not: continuous negatives with isn't, aren't and I'm not, the position of not after be, and the “He don't working” trap.",
    outcomes: [
      "Build affirmative and negative continuous sentences",
      "Use the contractions isn't, aren't and I'm not naturally",
      "Keep the -ing spelling the same in negatives",
      "Describe a busy scene in statements",
    ],
    blocks: [
      LI(
        "Now you can build the form. This lesson adds not. Affirmatives say what is happening. Negatives say what is not happening. “They are watching a film.” “They aren't watching the news.” One small word — not — slides in after be.",
        [
          "You know that be makes negatives with not (Chapter 12).",
          "You know the be-contractions: I'm, isn't, aren't (Chapter 12).",
          "You can build the continuous form: be + -ing (Lesson 2).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "to laugh", partOfSpeech: "verb", definition: "To make a happy sound: he laughs at jokes." },
        { word: "to cry", partOfSpeech: "verb", definition: "To have tears: babies cry." },
        { word: "to sing", partOfSpeech: "verb", definition: "To make music with your voice." },
        { word: "to wear", partOfSpeech: "verb", definition: "To have clothes on your body: she is wearing blue." },
      ]),
      H("Statements and their shadows"),
      T(
        "The affirmative paints the scene. The negative paints what is missing from it. Cars are moving. The sun isn't shining. In speech, not almost always contracts: is not → isn't, are not → aren't. With I, am not becomes I'm not — never “amn't”.",
      ),
      {
        type: "definition",
        term: "negative statement",
        partOfSpeech: "grammar",
        definition:
          "A negative says that something is NOT happening. In the continuous, not stands between be and the -ing form: is + not + working → isn't working.",
        example: {
          english: "He isn't working today.",
          translation: "is not working → isn't working. The -ing is untouched.",
        },
      },
      ST("Build a negative in three steps", [
        {
          title: "Step 1 — Build the affirmative first",
          text: "Start positive: They are watching a film. Now you know the subject and the be-verb.",
          examples: [{ english: "They are watching a film.", note: "The negative is one word away." }],
        },
        {
          title: "Step 2 — Slide not in after be",
          text: "not goes between be and -ing. Then contract it: are not → aren't, is not → isn't.",
          examples: [{ english: "They aren't watching the news.", note: "are + not → aren't. watching keeps its -ing." }],
        },
        {
          title: "Step 3 — Keep -ing exactly the same",
          text: "not never touches the -ing form. The spelling stays. Only be changes shape.",
          examples: [{ english: "She isn't wearing her coat today.", note: "isn't + wearing. wear stays wearing." }],
        },
      ]),
      GR(
        "The negative rule",
        "be + not + verb-ing. Full forms: is not, are not, am not. Contractions: isn't, aren't, I'm not. The -ing form never changes in the negative.",
        [
          { english: "They are watching a film.", translation: "Affirmative: are + watching." },
          { english: "They aren't watching the news.", translation: "aren't = are not. watching is untouched." },
          { english: "I'm not working today.", translation: "am not → I'm not. Never “amn't”." },
        ],
        [
          "“He don't working” mixes two tenses. don't belongs to the present simple; the continuous needs isn't or aren't.",
        ],
      ),
      TB(
        "Affirmative → negative",
        ["Subject", "Affirmative", "Negative"],
        [
          ["I", "I am singing.", "I'm not singing."],
          ["you", "You are laughing.", "You aren't laughing."],
          ["he", "He is crying.", "He isn't crying."],
          ["she", "She is wearing blue.", "She isn't wearing blue."],
          ["it", "It is raining.", "It isn't raining."],
          ["we", "We are waiting.", "We aren't waiting."],
          ["they", "They are dancing.", "They aren't dancing."],
        ],
        "One word — not — turns every statement into its shadow.",
      ),
      AU(
        "Listen: busy street, positive and negative",
        "Cars are moving slowly. People are walking fast. A man is selling fruit. The sun isn't shining today. The children aren't sleeping — they're playing. It isn't raining, but the sky is grey.",
        0.85,
      ),
      AU(
        "Listen: a Monday at home",
        "It's Monday morning. My mother is cooking. My father isn't working today — he's resting. I'm not going to school. I'm helping in the kitchen. My little sister is singing. The neighbours aren't complaining. They're laughing!",
        0.9,
      ),
      EXD(
        "A busy street and other scenes",
        [
          { english: "Cars are moving slowly. People are walking fast.", note: "Two affirmatives — the street scene in motion.", domain: "travel" },
          { english: "A man is selling fruit near the station.", note: "is selling — one man, live action.", domain: "shopping" },
          { english: "The sun isn't shining today.", note: "isn't shining — a negative in the middle of the scene.", domain: "nature" },
          { english: "My father isn't working this week. He's resting.", note: "Negative first, then the true now-action.", domain: "work" },
          { english: "The baby is crying. She isn't sleeping.", note: "is crying / isn't sleeping — the pair explains each other.", domain: "family" },
          { english: "I'm not wearing my school uniform today.", note: "I'm not — the only shape for am not.", domain: "education" },
          { english: "Listen! The fans are singing. The other team isn't scoring.", note: "The match is live — sport runs on the continuous.", domain: "sport" },
          { english: "We are waiting, but the doctor isn't calling us.", note: "are waiting / isn't calling — patience in two parts.", domain: "health" },
          { english: "My grandmother is laughing at my joke. She isn't crying!", note: "laughing / not crying — the twin verbs of feeling.", domain: "social" },
        ],
        "Nine scenes — every negative rides on be, every -ing stays whole.",
      ),
      US(
        [
          {
            situation: "Clarifying on the phone",
            example: "“I'm not sleeping! I'm reading.”",
            note: "A negative corrects a wrong picture.",
          },
          {
            situation: "At the door",
            example: "“She isn't home. She's shopping.”",
            note: "Say where people are not — then where they are.",
          },
          {
            situation: "Weather small talk",
            example: "“It isn't raining today. We're walking to the park.”",
            note: "Weather talk needs the continuous.",
          },
          {
            situation: "In class",
            example: "“I'm not copying — I'm thinking!”",
            note: "Defend yourself with a negative.",
          },
          {
            situation: "Plans change",
            example: "“We aren't going out tonight. We're staying in.”",
            note: "Temporary now-situations, said with aren't.",
          },
        ],
        "Where negatives live",
        "Saying what is not happening is as useful as saying what is.",
      ),
      DL(
        "Where is everybody?",
        "A mother looks for her children.",
        [
          ["Mother", "Bilal! Where are you?"],
          ["Bilal", "I'm in the garden. I'm watering the flowers."],
          ["Mother", "Is your sister with you?"],
          ["Bilal", "No, she isn't. She isn't doing her homework either!"],
          ["Mother", "What's she doing?"],
          ["Bilal", "She's singing in her room. She's wearing a towel like a queen."],
          ["Mother", "And your father? He isn't sleeping again, is he?"],
          ["Bilal", "No, he isn't sleeping. He's laughing at a video!"],
        ],
      ),
      CMP(
        "“He isn't working” or “He don't working”?",
        ["continuous: isn't / aren't ✓", "mixed tenses ✗"],
        [
          ["The sentence", "He isn't working today.", "He don't working today."],
          ["Why", "The continuous needs be: is + not → isn't", "don't is a present-simple helper. It cannot join -ing."],
          ["The twin error", "“He not working.” — bare not cannot build it either", "not needs be or do to carry it"],
          ["More", "They aren't waiting. ✓", "“They no waiting.” ✗ — no never builds negatives"],
        ],
        {
          intro: "The tense-mixing error: a present-simple helper welded onto an -ing form.",
          verdict:
            "In the continuous, not always rides on be: isn't, aren't, I'm not. Don't and doesn't never touch an -ing form.",
        },
      ),
      MS(
        [
          [
            "He don't working today.",
            "He isn't working today.",
            "don't belongs to the present simple. The continuous negative needs isn't or aren't.",
          ],
          [
            "They no waiting for us.",
            "They aren't waiting for us.",
            "no never builds negatives in English. not needs be: aren't waiting.",
          ],
          [
            "She not wearing her coat.",
            "She isn't wearing her coat.",
            "Bare not cannot stand alone. Contract it: is not → isn't.",
          ],
          [
            "I amn't going to school today.",
            "I'm not going to school today.",
            "am not has one shape only: I'm not. “amn't” does not exist.",
          ],
          [
            "He isn't work today.",
            "He isn't working today.",
            "The -ing must stay even in the negative. isn't + working.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Temporary versus never",
        "“He isn't working this week” is about now — this week only. “He doesn't work on Sundays” is about every Sunday — a habit. Negatives follow their tense: continuous for now, simple for habits.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "It's Saturday at the market. The market is full. A man is selling mangoes. Two women are laughing. A child is crying — he isn't getting a toy. The sun isn't shining, but it isn't raining either. Everyone is moving slowly. It's Saturday: nobody is hurrying.",
          task: "Read the text two times. Then find four negatives and say what each one cancels.",
        },
        writing: {
          task: "Describe a busy place you know in six sentences: four affirmative, two negative. Use isn't or aren't for the negatives.",
          guide: ["The ______ are ______ing.", "A man is ______ing.", "The sun isn't ______ today.", "People aren't ______ing — they're ______ing."],
          model: "The market is busy. People are shouting prices. A man is carrying boxes. The sun isn't shining today. The children aren't crying — they're laughing.",
        },
        listening: {
          script:
            "It's Monday morning at our house. My mother is cooking breakfast. My father isn't shaving — he's looking for his glasses! I'm not going to school today. I'm ill. My sister is laughing at me. She isn't ill!",
          task: "Listen. Why isn't the speaker going to school?",
        },
        speaking: {
          task: "Describe your street right now: three affirmative sentences and two negatives. Then tell a partner.",
          frames: ["Right now, the street is busy.", "A ______ is ______ing.", "The ______ aren't ______ing.", "It isn't ______ today."],
          checklist: [
            "My negatives used isn't, aren't or I'm not.",
            "My -ing spelling stayed the same in the negatives.",
            "I painted what is happening AND what is not.",
          ],
        },
      }),
      LSP(
        [
          gls("Use am, is or are with a verb ending in -ing."),
          gls("Don't and doesn't make negatives in the present simple."),
          gls("to laugh"),
          gls("to cry"),
          gls("to sing"),
          gls("to wear"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Affirmative: be + -ing. Negative: be + not + -ing.",
        "Contractions: is not → isn't, are not → aren't, am not → I'm not.",
        "The -ing form never changes in the negative. Only be changes shape.",
        "Continuous negatives are about now: He isn't working this week.",
        "Present-simple negatives are for habits: He doesn't work on Sundays.",
      ]),
      RV(
        [
          {
            question: "Which be-word goes with “the children”?",
            options: ["are", "is", "am"],
            correctIndex: 0,
            explanation: "Children = they → are. The be-verb matches its subject.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "What is the contraction of “are not”?",
            options: ["aren't", "amn't", "not are"],
            correctIndex: 0,
            explanation: "are + not → aren't. You met the be-contractions in Chapter 12.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "Which is the present-simple negative for one man?",
            options: ["He doesn't work on Sundays.", "He isn't working now.", "He don't works now."],
            correctIndex: 0,
            explanation: "on Sundays = habit → doesn't + plain verb. The -ing belongs to the continuous.",
            from: "Chapter 13 · Lesson 4",
          },
          {
            question: "Which sentence is a HABIT negative?",
            options: ["He doesn't work on Sundays.", "He isn't working now.", "He don't working now."],
            correctIndex: 0,
            explanation: "on Sundays is a habit signal, so the negative is doesn't work.",
            from: "Chapter 13 · Lesson 4",
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
            "Which negative is correct?",
            [
              ["a", "He don't working today."],
              ["b", "He isn't working today."],
              ["c", "He not working today."],
            ],
            "b",
            fbx(
              "He isn't working today.",
              "The continuous negative rides on be: is + not → isn't + working.",
              "don't is a present-simple helper; bare not cannot build a negative.",
              { english: "They aren't watching television.", translation: "aren't + watching — be carries the not." },
            ),
            { hints: ["In the continuous, which word carries not?"] },
          ),
          FB(
            "Complete the negative with the short form of not.",
            "Look! The children ___ sleeping — they're playing!",
            ["aren't", "are not"],
            fb(
              "aren't",
              "Children = they → are + not → aren't. sleeping keeps its -ing.",
              "isn't fits one thing; “am not” fits I only.",
            ),
            { hints: ["Children = they. Which be-word goes with them, and where does the short not sit?"] },
          ),
          MATCH(
            "Match each affirmative to its negative.",
            [
              ["s1", "It is raining."],
              ["s2", "They are dancing."],
              ["s3", "I am singing."],
            ],
            [
              ["n1", "I'm not singing."],
              ["n2", "They aren't dancing."],
              ["n3", "It isn't raining."],
            ],
            [
              ["s1", "n3"],
              ["s2", "n2"],
              ["s3", "n1"],
            ],
            fb(
              "It is raining. → It isn't raining. · They are dancing. → They aren't dancing. · I am singing. → I'm not singing.",
              "Keep the subject; slide not after be and contract it.",
              "The -ing never changes in the negative.",
            ),
            { hints: ["Find the be-word in each sentence — not rides on it."] },
          ),
          LIS(
            "Listen and answer.",
            "It's Sunday afternoon. The house is quiet. My father isn't working. He's sleeping in his chair. My mother isn't cooking. She's reading. The dog isn't barking. It's raining outside — quietly.",
            "What is the dog doing?",
            ["The dog isn't barking.", "It isn't barking.", "The dog is not barking.", "It is not barking."],
            fb(
              "The dog isn't barking.",
              "The text says it: the dog isn't barking. It's raining outside.",
              "Father, mother and the rain are the other parts of the quiet scene.",
            ),
            { hints: ["Listen for the dog, then for the words after it."] },
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
              ["a", "I amn't going to school today."],
              ["b", "I'm not going to school today."],
              ["c", "I don't going to school today."],
            ],
            "b",
            fb("I'm not going to school today.", "am not has one shape: I'm not.", "“amn't” does not exist; don't never joins -ing."),
          ),
          CORR(
            "Find and correct the mistake.",
            "They no waiting for us.",
            ["They aren't waiting for us.", "They are not waiting for us."],
            fb(
              "They aren't waiting for us.",
              "no never builds negatives. not rides on be: aren't waiting.",
              "“no waiting” is not English.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the negative sentence.",
            "She isn't wearing her coat today",
            fb(
              "She isn't wearing her coat today",
              "Subject + isn't + -ing + object + time signal.",
              "not sits between is and wearing, then contracts.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "The sun isn't shining today.",
            ["The sun isn't shining today.", "The sun is not shining today."],
            fb(
              "The sun isn't shining today.",
              "isn't = is not, and shining keeps its -ing.",
              "The negative rides on be; the -ing never changes.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Busy scene",
      instructions:
        "Describe a busy place you know (market, station, playground) in six continuous sentences — four affirmative and two negative. Example: “The market is busy. People are shouting. The sun isn't shining. The children aren't crying — they're laughing.”",
      minWords: 22,
      maxWords: 70,
    },
    homework: [
      "Describe your street right now in three sentences — include one negative.",
      "Say one thing that is not happening today: “It isn't raining today.”",
      "Ask a family member: What are you doing? Report it with one negative: “He isn't watching television. He's reading.”",
    ],
  },

  // =========================================================================
  // Lesson 4 — Questions
  // =========================================================================
  {
    slug: "ch-17-l-04",
    minutes: 20,
    description:
      "The be-flip: Are you listening? What is she doing? — yes/no questions, WH-questions, short answers, and the famous “What you doing?” drop.",
    outcomes: [
      "Form continuous yes/no questions with the flip",
      "Form WH-questions: what, where, why, who + be + subject + -ing",
      "Answer with short answers: Yes, I am. No, she isn't.",
      "Tell “What are you doing?” apart from “What do you do?”",
    ],
    blocks: [
      LI(
        "You can build the form. You can add not. Now flip it. Questions move be to the front. “You are listening.” → “Are you listening?” One flip, and the statement becomes a question. WH-words stand before the flip: “What is she doing?”",
        [
          "You know that be makes questions by itself (Chapter 12).",
          "You know the WH-words: what, where, when, who, why, how (Chapter 14).",
          "You can build affirmative and negative continuous sentences (Lessons 2–3).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "question word", partOfSpeech: "noun", definition: "what, where, when, who, why, how — the words that open WH-questions." },
        { word: "short answer", partOfSpeech: "noun", definition: "A quick echo of the question's first verb: Yes, I am." },
        { word: "to listen", partOfSpeech: "verb", definition: "To use your ears: listen to the birds." },
        { word: "to speak", partOfSpeech: "verb", definition: "To say words: speak slowly, please." },
      ]),
      H("Flipping the live camera"),
      T(
        "In Chapter 12, be flipped for questions. Is she tired? Are you ready? The continuous borrows the same flip. Is she working? Are you listening? The be-verb jumps in front of the subject. The -ing form never moves.",
      ),
      {
        type: "definition",
        term: "flip",
        partOfSpeech: "grammar",
        definition:
          "The flip moves the be-verb in front of the subject. Statement: You are eating. Question: Are you eating? The -ing form stays in its place.",
        example: {
          english: "Are you eating?",
          translation: "are jumps in front of you; eating never moves.",
        },
      },
      ST("Ask a continuous question in three steps", [
        {
          title: "Step 1 — Start from the statement",
          text: "Begin with the statement: She is doing her homework. Now you have the be-verb in your hand.",
          examples: [{ english: "She is doing her homework.", note: "is is the word that will flip." }],
        },
        {
          title: "Step 2 — Flip be in front of the subject",
          text: "Move is, am or are before the subject. Add the question mark. Your voice goes up at the end.",
          examples: [{ english: "Is she doing her homework?", note: "is + she + doing. The -ing stays after the subject." }],
        },
        {
          title: "Step 3 — Or open with a WH-word",
          text: "what, where, why, who, how stand before the flip. What is she doing? Why are they laughing?",
          examples: [
            { english: "What is she doing?", note: "what + is + she + doing." },
            { english: "Why are they laughing?", note: "why + are + they + laughing." },
          ],
        },
      ]),
      GR(
        "The question rule",
        "Yes/no questions: be + subject + -ing? — Are you listening? Is he working? WH-questions: WH-word + be + subject + -ing? — What is she doing? Short answers echo be: Yes, I am. No, she isn't.",
        [
          { english: "Are you listening to me?", translation: "are flips in front of you; listening stays." },
          { english: "Is he working today?", translation: "is + he + working." },
          { english: "What are they doing?", translation: "what + are + they + doing — the flip after the WH-word." },
        ],
        [
          "Action verbs never flip by themselves. “What you doing?” is missing be: What are you doing?",
        ],
      ),
      TB(
        "The flip, all subjects",
        ["Statement", "Question"],
        [
          ["I am singing.", "Am I singing?"],
          ["You are laughing.", "Are you laughing?"],
          ["He is crying.", "Is he crying?"],
          ["She is dancing.", "Is she dancing?"],
          ["It is raining.", "Is it raining?"],
          ["We are waiting.", "Are we waiting?"],
          ["They are working.", "Are they working?"],
        ],
        "be flips; -ing never does.",
      ),
      TB(
        "WH-questions with the flip",
        ["WH-word", "Question", "Use it for"],
        [
          ["What", "What is she doing?", "the action itself"],
          ["Where", "Where are they going?", "the place"],
          ["Why", "Why is he crying?", "the reason"],
          ["Who", "Who is singing?", "the person"],
          ["How", "How are you doing?", "a friendly check-in"],
        ],
        "WH-word + be + subject + -ing.",
      ),
      AU(
        "Listen: the flip in questions",
        "Are you listening? Yes, I am. Is she working? No, she isn't. What are you doing? I'm cooking. Why are they laughing? Because the film is funny. Where are you going? To the market.",
        0.85,
      ),
      AU(
        "Listen: a live interview",
        "Hi! Welcome to the show. What are you doing these days? I'm learning English. Are you enjoying it? Yes, I am! Is your family learning too? No, they aren't. They're laughing at my accent! And what is your cat doing right now? She's sleeping on my book.",
        0.9,
      ),
      EXD(
        "Questions in real life",
        [
          { english: "What are you doing?", note: "The most useful now-question in English: what + are + you + doing.", domain: "social" },
          { english: "Am I speaking too fast?", note: "A polite check: am flips with I.", domain: "education" },
          { english: "Is it raining outside?", note: "is + it + raining — a weather check before you leave.", domain: "nature" },
          { english: "Why is the baby crying?", note: "why + is + baby + crying. The reason question.", domain: "family" },
          { english: "What is she wearing today?", note: "is + she + wearing — the now-outfit question.", domain: "everyday" },
          { english: "Are you coming to the match?", note: "are + you + coming — plans in motion.", domain: "sport" },
          { english: "Is the doctor working today?", note: "is + doctor + working — a health check.", domain: "health" },
          { english: "What are they building in the street?", note: "are + they + building. Curiosity about work.", domain: "work" },
          { english: "Excuse me. Is this bus going to the station?", note: "is + bus + going — the traveller's question.", domain: "travel" },
        ],
        "Nine questions from nine parts of life — every one flips be.",
      ),
      US(
        [
          {
            situation: "Phone call opener",
            example: "“Hi! What are you doing?”",
            note: "Every phone call opens with the flip.",
          },
          {
            situation: "Checking understanding",
            example: "“Are you following me?”",
            note: "Teachers and friends check with the flip.",
          },
          {
            situation: "At the door",
            example: "“Is your mother sleeping? Can I come in?”",
            note: "Politeness before you knock.",
          },
          {
            situation: "Street directions",
            example: "“Excuse me. Is this bus going to the station?”",
            note: "The traveller's flip saves a wrong journey.",
          },
          {
            situation: "Caring question",
            example: "“Why are you crying? Tell me.”",
            note: "The flip opens care conversations.",
          },
        ],
        "Where the flip lives",
        "Questions about now are the friendliest questions in English.",
      ),
      DL(
        "The phone call",
        "Two friends talk on the phone.",
        [
          ["Sara", "Hi Ken! What are you doing?"],
          ["Ken", "I'm cooking dinner. And you?"],
          ["Sara", "I'm watching a film. Are the children sleeping?"],
          ["Ken", "No, they aren't. They're playing in their room."],
          ["Sara", "What are they playing?"],
          ["Ken", "They're building a house of cards. It's falling again!"],
          ["Sara", "Why are they making such a noise?"],
          ["Ken", "Because the house is falling! And my dinner is burning. Call you later!"],
        ],
      ),
      CMP(
        "“What you doing?” or “What are you doing?”",
        ["missing be ✗", "WH + be + subject + -ing ✓"],
        [
          ["The question", "What you doing?", "What are you doing?"],
          ["The missing part", "no be-verb between what and you", "are stands before you; doing stays after"],
          ["Why", "-ing cannot ask alone", "the flip needs be to move"],
          ["More", "“Where she going?” ✗", "“Where is she going?” ✓ — the same fix"],
        ],
        {
          intro: "The famous drop: street English says “What you doing?” — but the full form needs be.",
          verdict:
            "WH-word + be + subject + -ing. Four slots, always in that order: What are you doing?",
        },
      ),
      MS(
        [
          [
            "What you doing?",
            "What are you doing?",
            "The be-verb is missing. The flip needs are: what + are + you + doing.",
          ],
          [
            "Why they are laughing?",
            "Why are they laughing?",
            "The flip puts be before the subject: why + are + they + laughing.",
          ],
          [
            "What is she do?",
            "What is she doing?",
            "The question still needs -ing: is she doing, never is she do.",
          ],
          [
            "Do you listening to me?",
            "Are you listening to me?",
            "do is a present-simple helper. The continuous flips be: are you listening.",
          ],
          [
            "Where is going the bus?",
            "Where is the bus going?",
            "The subject stands between be and the -ing: where + is + the bus + going.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "The two now-questions",
        "“What are you doing?” asks about this moment. “What do you do?” asks about your job or your habit. Two questions, two tenses — learn them as a pair.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "At dinner, my family asks questions. “What are you eating?” asks my father. “Are you enjoying it?” asks my mother. My grandmother always asks, “What are you doing these days?” — that question is about this week. Then comes a different one: “Do you like your school?” That is a present-simple question about a habit feeling. At the dinner table, both tenses work together.",
          task: "Read the text two times. Then find three continuous questions and one present-simple question.",
        },
        writing: {
          task: "Write five questions for a friend: three yes/no questions with the flip, and two WH-questions. Answer two of them yourself.",
          guide: ["Are you ______ing tonight?", "Is your ______ ______ing?", "What are you ______ing?", "Why are you ______ing?"],
          model: "Are you watching the match? Is your mother cooking? What are you doing? Why are you laughing?",
        },
        listening: {
          script:
            "What are you doing? I'm fixing my bike. Are you coming to the park? No, I'm not. Why not? Because it's raining! Is it raining there too? Yes, it is. The street is full of water.",
          task: "Listen. Why isn't the friend coming to the park?",
        },
        speaking: {
          task: "Run a live interview: ask a partner four questions with the flip — two yes/no, two WH. Answer with short answers.",
          frames: ["Are you ______ing?", "Is he / she ______ing?", "What are you doing?", "Why are you ______ing?"],
          checklist: [
            "My be-verb flipped in every question.",
            "My -ing stayed after the subject.",
            "My short answers echoed be.",
          ],
        },
      }),
      LSP(
        [
          gls("Be makes questions by itself; other verbs need do."),
          gls("Questions end with a question mark."),
          gls("question word"),
          gls("short answer"),
          gls("to listen"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Questions flip be to the front: Are you listening? Is he working?",
        "WH-questions: WH-word + be + subject + -ing — What is she doing?",
        "Short answers echo be: Yes, I am. No, she isn't.",
        "The -ing form never moves. Only be flips.",
        "“What are you doing?” (now) is not “What do you do?” (job or habit).",
      ]),
      RV(
        [
          {
            question: "Which verb makes questions by itself?",
            options: ["be", "do", "have"],
            correctIndex: 0,
            explanation: "be flips alone. You met the be-flip in Chapter 12.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "Which word opens a place question?",
            options: ["where", "what", "who"],
            correctIndex: 0,
            explanation: "where asks about place — one of the WH-words of Chapter 14.",
            from: "Chapter 14 · Lesson 2",
          },
          {
            question: "Which short answer is correct: “Is he sleeping?”",
            options: ["Yes, he is.", "Yes, he sleeping.", "Yes, he does."],
            correctIndex: 0,
            explanation: "Short answers echo the first verb of the question — here is.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "Which pronoun replaces “my friends and I”?",
            options: ["we", "they", "she"],
            correctIndex: 0,
            explanation: "My friends and I = we. And we takes are.",
            from: "Chapter 11 · Lesson 1",
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
            "Which question is correct?",
            [
              ["a", "What you doing?"],
              ["b", "What are you doing?"],
              ["c", "What is you doing?"],
            ],
            "b",
            fbx(
              "What are you doing?",
              "WH-word + be + subject + -ing: what + are + you + doing.",
              "be must be present, and it must match you (are).",
              { english: "Where is she going?", translation: "where + is + she + going — the same four slots." },
            ),
            { hints: ["Four slots: WH-word, be, subject, -ing. Which be fits you?"] },
          ),
          FB(
            "Complete the question with the be-word for they.",
            "___ the children sleeping?",
            ["Are"],
            fb(
              "Are",
              "Children = they → are. The flip puts are first.",
              "is fits one thing; am fits I only.",
            ),
            { hints: ["Children = they. Which be-word flips to the front?"] },
          ),
          MATCH(
            "Match each question to its short answer.",
            [
              ["q1", "Are you cooking?"],
              ["q2", "Is she working?"],
              ["q3", "Am I speaking clearly?"],
            ],
            [
              ["a1", "Yes, you are."],
              ["a2", "No, she isn't."],
              ["a3", "Yes, I am."],
            ],
            [
              ["q1", "a3"],
              ["q2", "a2"],
              ["q3", "a1"],
            ],
            fb(
              "Are you cooking? → Yes, I am. · Is she working? → No, she isn't. · Am I speaking clearly? → Yes, you are.",
              "Short answers echo the be-verb that opened the question.",
              "Never echo the -ing form in a short answer.",
            ),
            { hints: ["The first word of the question comes back in the answer."] },
          ),
          LIS(
            "Listen and answer.",
            "Hello! What are you doing? I'm waiting for the bus. Is it coming? No, it isn't. It's raining again! Are you getting wet? Yes, I am! The umbrella is at home!",
            "Where is the umbrella?",
            ["The umbrella is at home.", "At home.", "It is at home."],
            fb(
              "The umbrella is at home.",
              "The last line says it: the umbrella is at home.",
              "The bus, the rain and the wet friend are the rest of the scene.",
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
            "Which question is correct?",
            [
              ["a", "Do you listening to me?"],
              ["b", "Are you listening to me?"],
              ["c", "Is you listening to me?"],
            ],
            "b",
            fb("Are you listening to me?", "The continuous flips be; are matches you.", "do never joins -ing; is never matches you."),
          ),
          CORR(
            "Find and correct the mistake.",
            "Why they are laughing?",
            ["Why are they laughing?"],
            fb(
              "Why are they laughing?",
              "The flip puts be before the subject: why + are + they + laughing.",
              "In questions, be comes before the subject.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the question.",
            "What is she doing today",
            fb(
              "What is she doing today",
              "WH-word + be + subject + -ing + time signal.",
              "is flips in front of she; doing stays behind.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the question you hear.",
            "Are they waiting for the bus?",
            ["Are they waiting for the bus?"],
            fb(
              "Are they waiting for the bus?",
              "The flip: are before they; waiting after them.",
              "The question mark ends the flip.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Live interview",
      instructions:
        "Write a six-line phone dialogue. Ask “What are you doing?”, then two more continuous questions (one WH, one yes/no). Answer with short answers. Example: “What are you doing? — I'm cooking. Why are you laughing? — Because the rice is burning!”",
      minWords: 20,
      maxWords: 70,
    },
    homework: [
      "Ask two people today: “What are you doing?” Report their answers.",
      "Write three flip questions for your family: Are you…? Is he…? What are they…?",
      "Watch a video for two minutes. Ask aloud: What is he doing? What is she wearing?",
    ],
  },

  // =========================================================================
  // Lesson 5 — Present Simple vs Present Continuous
  // =========================================================================
  {
    slug: "ch-17-l-05",
    minutes: 25,
    description:
      "The big A1 decision: every day or right now? Train the signal words, the state verbs and the two-tense pairs until the choice is automatic.",
    outcomes: [
      "Choose between the two presents with confidence",
      "Explain the choice with signal words",
      "Keep state verbs simple: know, like, want",
      "Correct mixed-up sentences (wrong tense with wrong signal)",
    ],
    blocks: [
      LI(
        "This is the big decision lesson. Two present tenses, one choice. Habits take the present simple: every day, usually, always. Now-actions take the present continuous: now, at the moment, Look! Read the whole sentence first. The signal words tell you which tense to use.",
        [
          "You know the present simple: habits, routines, facts (Chapter 13).",
          "You know the present continuous: be + -ing for now (Lessons 1–4).",
          "You know the frequency dials: always, usually, sometimes, never (Chapter 13).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "habit", partOfSpeech: "noun", definition: "Something you do again and again: I drink tea every morning." },
        { word: "every day", partOfSpeech: "phrase", definition: "The habit signal — it happens each day, not only today." },
        { word: "usually", partOfSpeech: "adverb", definition: "Most times — about ninety per cent." },
        { word: "now", partOfSpeech: "adverb", definition: "At this moment — the continuous signal." },
      ]),
      H("The decision table"),
      T(
        "The same verb can wear two tenses. “He drinks coffee every morning” — a habit, again and again. “He is drinking coffee now” — this cup, this minute. The meaning changes with the time. Read the signal words before you choose.",
      ),
      {
        type: "definition",
        term: "signal word",
        partOfSpeech: "grammar",
        definition:
          "A signal word tells you which tense to use. Habit signals: every day, usually, always, on Mondays, often, never. Now signals: now, right now, at the moment, today, this week, Look!, Listen!.",
        example: {
          english: "Look! It is raining.",
          translation: "Look! is a now-signal — the tense follows it.",
        },
      },
      ST("Choose the tense in three steps", [
        {
          title: "Step 1 — Read the whole sentence",
          text: "Do not stop at the verb. Read to the end. The signal often sits at the end: He drinks coffee… every morning.",
          examples: [{ english: "She works… on Sundays.", note: "on Sundays at the end — a habit signal." }],
        },
        {
          title: "Step 2 — Find the signal words",
          text: "Habit signals: every day, usually, always, often, on Mondays. Now signals: now, right now, at the moment, today, this week, Look!, Listen!.",
          examples: [
            { english: "I usually walk to school.", note: "usually — a dial for the present simple." },
            { english: "Look! The dog is running fast.", note: "Look! — evidence for now." },
          ],
        },
        {
          title: "Step 3 — Choose, then check the form",
          text: "Habit → present simple: subject + verb (+ -s for he, she, it). Now → continuous: be + -ing. Check the form as well as the tense.",
          examples: [{ english: "He is drinking coffee now.", note: "is + drinking: the now-choice, correctly built." }],
        },
      ]),
      GR(
        "The decision rule",
        "Habit or routine → present simple: I work on Mondays. Fact or job → present simple: She works in a bank. Now or temporary → present continuous: I am working right now. The signal words decide.",
        [
          { english: "He drinks coffee every morning.", translation: "every morning — habit → present simple, drinks with no -ing." },
          { english: "He is drinking coffee now.", translation: "now — the live camera → is drinking." },
          { english: "She usually wears blue. Today she is wearing green.", translation: "usually → simple; today → continuous. Both tenses in one line." },
        ],
        [
          "State verbs stay simple: know, like, want, need, understand. “I know the answer”, not “I am knowing the answer”.",
        ],
      ),
      TB(
        "The decision table",
        ["Signal words", "Tense", "Example"],
        [
          ["every day, on Mondays, usually, always, often, never", "present simple", "I usually walk to work."],
          ["now, right now, at the moment, Look!, Listen!", "present continuous", "Look! The dog is running."],
          ["today, this week (temporary)", "present continuous", "She is working from home this week."],
          ["permanent facts and jobs", "present simple", "She works in a hospital."],
        ],
        "Find the signal, find the tense. Then spell -ing carefully: running, making, sitting.",
      ),
      TB(
        "State verbs stay simple",
        ["Verb", "Say this ✓", "Never this ✗"],
        [
          ["know", "I know the answer.", "I am knowing the answer."],
          ["like", "She likes tea.", "She is liking tea."],
          ["want", "I want water.", "I am wanting water."],
          ["need", "We need help.", "We are needing help."],
          ["understand", "He understands the rule.", "He is understanding the rule."],
        ],
        "States are not actions in progress — they stay simple.",
      ),
      AU(
        "Listen: the two presents",
        "I usually walk to school. But right now I'm waiting for the bus. She works in a bank. This week she's working at home. He drinks tea every morning. Look! He's drinking coffee today.",
        0.85,
      ),
      AU(
        "Listen: a day of changes",
        "My grandfather usually reads his newspaper in the morning. Today he isn't reading it. He's listening to the radio. My mother always cooks on Sundays. Today we aren't cooking. We're eating at my aunt's house. I never understand cricket. But today I'm watching it — and I'm enjoying it!",
        0.9,
      ),
      EXD(
        "Same verb, two meanings",
        [
          { english: "He drinks coffee every morning. / He is drinking coffee now.", note: "One verb, two times: every morning versus now.", domain: "food" },
          { english: "They live in Rome. / They are living with friends this summer.", note: "A permanent home versus a temporary stay.", domain: "family" },
          { english: "She usually wears blue. Today she is wearing green.", note: "usually versus today — the wardrobe tells both tenses.", domain: "everyday" },
          { english: "I usually walk to school. Right now I'm waiting for the bus.", note: "usually → simple; right now → continuous.", domain: "travel" },
          { english: "The shop opens at nine. Look! He is opening the door.", note: "Timetables stay simple; the live action turns continuous.", domain: "shopping" },
          { english: "She works in a hospital. This week she is working from home.", note: "The job is permanent; this week is temporary.", domain: "work" },
          { english: "We study English on Mondays. Today we are studying questions.", note: "The weekly habit versus today's lesson.", domain: "education" },
          { english: "The children play here every evening. Listen! They are playing now.", note: "every evening versus Listen!.", domain: "home" },
          { english: "He never runs in the rain. Look! He is running in the rain.", note: "never versus Look! — even habits break for a moment.", domain: "sport" },
        ],
        "Nine pairs — the same verb, two different worlds.",
      ),
      US(
        [
          {
            situation: "A friend asks about your week",
            example: "“I work on Saturdays, but this week I'm resting.”",
            note: "The habit and the exception in one line.",
          },
          {
            situation: "Small talk about jobs",
            example: "“What do you do? — I teach maths. And right now I'm teaching questions.”",
            note: "Job (simple) versus this lesson (continuous).",
          },
          {
            situation: "Weather talk",
            example: "“It usually rains here. But look — the sun is shining!”",
            note: "Climate is simple; today's sky is continuous.",
          },
          {
            situation: "At the market",
            example: "“He sells fruit here every day. Today he's selling mangoes.”",
            note: "The stall is a habit; today's fruit is now.",
          },
          {
            situation: "Checking on the phone",
            example: "“Are you studying? — Yes, I'm studying for tomorrow's test.”",
            note: "The now-check uses the continuous.",
          },
        ],
        "Where the decision lives",
        "Real life mixes the two tenses in every conversation.",
      ),
      DL(
        "Same verb, two tenses",
        "A sister and brother talk on Sunday morning.",
        [
          ["Sana", "Ammar, what do you do on Sundays?"],
          ["Ammar", "I usually help Father in the shop."],
          ["Sana", "And today? Are you helping him now?"],
          ["Ammar", "No, I'm not. I'm fixing my bike."],
          ["Sana", "Why are you fixing it today?"],
          ["Ammar", "Because it's Sunday and the sun is shining! Look at the sky."],
          ["Sana", "Does Father know?"],
          ["Ammar", "Yes, he does. He's laughing. He says the shop is quiet today!"],
        ],
      ),
      CMP(
        "Every day or right now?",
        ["present simple: photo album", "present continuous: live camera"],
        [
          ["The signals", "every day, usually, always, on Mondays, often, never", "now, right now, at the moment, today, this week, Look!, Listen!"],
          ["The time", "again and again", "in progress at this moment"],
          ["Examples", "I usually walk to school.", "Look! The dog is running."],
          ["The mistake", "“I am walking to school every day.” ✗", "“I walk to school right now.” ✗"],
          ["The fix", "every day → drop be and -ing", "right now → add be and -ing"],
        ],
        {
          intro: "The big A1 decision: put the wrong tense with the wrong signal and the meaning breaks.",
          verdict:
            "Habit signals call the present simple. Now signals call be + -ing. Read the whole sentence, then choose.",
        },
      ),
      MS(
        [
          [
            "I am going to school every day.",
            "I go to school every day.",
            "Every day is a habit signal. Habits use the present simple — no be, no -ing.",
          ],
          [
            "Look! The baby cries.",
            "Look! The baby is crying.",
            "Look! is evidence for now. Now-actions take be + -ing.",
          ],
          [
            "He don't working this week.",
            "He isn't working this week.",
            "don't belongs to the present simple. The continuous negative needs isn't or aren't.",
          ],
          [
            "I am knowing the answer.",
            "I know the answer.",
            "know is a state verb. States stay in the present simple.",
          ],
          [
            "What you doing right now?",
            "What are you doing right now?",
            "The flip needs be: what + are + you + doing.",
          ],
          [
            "She is liking this song.",
            "She likes this song.",
            "like is a state verb. No -ing with like, know or want.",
          ],
        ],
        "The six mistakes this decision was built to kill",
      ),
      W(
        "Read the whole sentence first",
        "“She is working on Mondays” mixes a now-form with a habit signal. So does “She works right now”. Read to the end before you choose. The signal word at the end decides the tense at the beginning.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "On weekdays, Ayesha works in a bank. She gets up at six and walks to work. She always wears blue. But this week everything is different. She isn't working at the bank. She's helping at our uncle's shop. Today she's wearing green! “Uncle is selling mangoes,” she says, “and I'm learning the work.” On Sundays, she usually rests. But look — she's laughing now. She's enjoying the change!",
          task: "Read the text two times. Then find three habit sentences and four now-sentences.",
        },
        writing: {
          task: "Write four pairs: a habit sentence and a now-sentence with the same verb. Use a habit signal and a now signal in each pair.",
          guide: ["I usually ______ on Sundays.", "But today I'm ______ing.", "He ______s every morning.", "Look! He's ______ing now."],
          model: "I usually visit my grandmother on Sundays. But today I'm resting at home. He drinks tea every morning. Look! He's drinking coffee now.",
        },
        listening: {
          script:
            "Does your brother play cricket? Yes, he does. He plays every Saturday. Is he playing now? No, he isn't. It's raining. What's he doing? He's watching the match on television! And is he enjoying it? Yes, he is!",
          task: "Listen. Why isn't the brother playing cricket now?",
        },
        speaking: {
          task: "Tell a partner four pairs: what you usually do, and what you are doing today. Use the two tenses honestly.",
          frames: ["I usually ______ on Saturdays.", "But today I'm ______ing.", "My father usually ______s.", "Right now, he's ______ing."],
          checklist: [
            "My habit sentences used the present simple.",
            "My now-sentences used be + -ing.",
            "I read my signals before choosing.",
          ],
        },
      }),
      LSP(
        [
          gls("The present simple is for habits; the present continuous is for now."),
          gls("Read the whole sentence before you choose the tense."),
          gls("habit"),
          gls("every day"),
          gls("usually"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Habit signals (every day, usually, always, on Mondays) → present simple.",
        "Now signals (now, right now, at the moment, today, this week, Look!, Listen!) → present continuous.",
        "Read the whole sentence before you choose the tense.",
        "State verbs stay simple: know, like, want, need, understand.",
        "Permanent jobs and facts stay simple: She works in a bank.",
      ]),
      RV(
        [
          {
            question: "Which tense means “again and again”?",
            options: ["present continuous", "present simple", "past simple"],
            correctIndex: 1,
            explanation: "Habits and routines use the present simple — Chapter 13.",
            from: "Chapter 13 · Lesson 1",
          },
          {
            question: "Which word is a frequency dial?",
            options: ["always", "now", "look"],
            correctIndex: 0,
            explanation: "always, usually, often, sometimes, never — the dials of Chapter 13.",
            from: "Chapter 13 · Lesson 5",
          },
          {
            question: "Which be-word goes with “the girls”?",
            options: ["are", "is", "am"],
            correctIndex: 0,
            explanation: "The girls = they → are. The be-verb matches its subject.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which sentence is a present-simple negative?",
            options: ["He doesn't work on Sundays.", "He isn't working now.", "He don't working now."],
            correctIndex: 0,
            explanation: "on Sundays = habit → doesn't + plain verb.",
            from: "Chapter 13 · Lesson 4",
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
            "Read the whole sentence. Which tense fits? “She ___ tea every morning.”",
            [
              ["a", "is drinking"],
              ["b", "drinks"],
              ["c", "drink"],
            ],
            "b",
            fbx(
              "drinks",
              "every morning is a habit signal → present simple. One woman → drinks with -s.",
              "“is drinking” belongs with now-signals; “drink” misses the -s.",
              { english: "He drinks coffee every morning.", translation: "every morning + he → drinks: habit, present simple." },
            ),
            { hints: ["Find the signal words first. Is it every day or right now?"] },
          ),
          FB(
            "Complete with the correct tense of work.",
            "Look! He ___ in the garden.",
            ["is working"],
            fb(
              "is working",
              "Look! is a now-signal. One man → is + working.",
              "works would turn the live action into a habit.",
            ),
            { hints: ["Look! means you can see it happening now. Which tense does now call?"] },
          ),
          MATCH(
            "Match each sentence to its tense.",
            [
              ["s1", "I read every night."],
              ["s2", "I'm reading right now."],
              ["s3", "She likes this song."],
            ],
            [
              ["t1", "present continuous (live camera)"],
              ["t2", "present simple — habit"],
              ["t3", "present simple — state verb"],
            ],
            [
              ["s1", "t2"],
              ["s2", "t1"],
              ["s3", "t3"],
            ],
            fb(
              "I read every night. → habit · I'm reading right now. → now · She likes this song. → state verb",
              "Three reasons for three choices: habit, now, state verb.",
              "Read the whole sentence — the signal or the verb type decides.",
            ),
            { hints: ["Ask three questions: habit? now? state verb?"] },
          ),
          LIS(
            "Listen and answer.",
            "Do you play cricket? Yes, I do. I play every Saturday. Are you playing now? No, I'm not. It's raining. I'm watching the match on television. And I'm eating a big bowl of rice!",
            "What is the speaker doing right now?",
            ["Watching the match on television.", "He is watching the match on television.", "Watching the match and eating rice.", "He's watching the match on television."],
            fb(
              "Watching the match on television.",
              "The last lines say it: it's raining, so he's watching the match and eating rice.",
              "Playing cricket is his Saturday habit — not today.",
            ),
            { hints: ["Listen for the now-part: what is happening while it rains?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "Which sentence is correct RIGHT NOW?",
            [
              ["a", "Look! It rains."],
              ["b", "Look! It is raining."],
              ["c", "Look! It raining."],
            ],
            "b",
            fb("Look! It is raining.", "Look! is evidence for now: be + -ing.", "'It rains' is the habit/fact form; 'It raining' has no be."),
          ),
          CORR(
            "Find and correct the mistake.",
            "I am knowing the answer.",
            ["I know the answer."],
            fb(
              "I know the answer.",
              "know is a state verb. States stay in the present simple.",
              "State verbs do not take -ing: know, like, want, need.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the now-sentence.",
            "She is wearing green today",
            fb(
              "She is wearing green today",
              "Subject + be + -ing + time signal.",
              "today goes with the continuous here — a temporary now.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I usually walk, but today I'm taking the bus.",
            ["I usually walk, but today I'm taking the bus."],
            fb(
              "I usually walk, but today I'm taking the bus.",
              "usually → simple; today → continuous. Both tenses in one line.",
              "The two tenses divide the work: habit and exception.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "The chooser test",
      instructions:
        "Choose the correct tense and write the full sentence. Then write two pairs of your own. 1. I (read / am reading) a book right now. 2. She (speaks / is speaking) three languages. 3. We (go / are going) to the gym on Tuesdays. 4. Look! The dog (runs / is running) fast! 5. I (know / am knowing) the answer.",
      minWords: 18,
      maxWords: 70,
    },
    homework: [
      "Say one habit and one now-action about yourself: “I play cricket on Sundays. Right now I'm resting.”",
      "Explain the two tenses to someone in your language. Then ask them to test you.",
      "Find two sentences in anything you read today: one habit, one now. Write them down.",
    ],
  },

  // =========================================================================
  // Lesson 6 — Actions Now and Chapter Review
  // =========================================================================
  {
    slug: "ch-17-l-06",
    minutes: 25,
    description:
      "The chapter finale: describe a full live scene — park, market or family dinner — mixing both present tenses, then pass the Chapter 17 review.",
    outcomes: [
      "Describe a complete live scene fluently",
      "Mix both presents in one text",
      "Answer the Chapter 17 review",
      "Check your own sentences with the 1-2-3 test",
    ],
    blocks: [
      LI(
        "Everything comes together now. Form, negatives, questions, the decision between the tenses. In this lesson you describe a complete live scene — a park, a market, a family dinner. Then you take the Chapter 17 review.",
        [
          "You know be: am, is and are (Chapter 12).",
          "You know the present simple for habits (Chapter 13).",
          "You can build every continuous form — affirmative, negative and question (Lessons 2–5).",
        ],
      ),
      vocGlossary("Words for this lesson", [
        { word: "park", partOfSpeech: "noun", definition: "A green place in the city: we walk in the park." },
        { word: "morning", partOfSpeech: "noun", definition: "The first part of the day, before noon." },
        { word: "evening", partOfSpeech: "noun", definition: "The end of the day, after the sun goes down." },
        { word: "family", partOfSpeech: "noun", definition: "The people you live with: mother, father, brothers, sisters." },
      ]),
      H("One scene, two tenses"),
      T(
        "A live scene needs the continuous. The habits behind the scene need the present simple. Together they paint a full picture. “Families come here every Sunday. Today a band is playing near the café.” One paragraph, both tenses.",
      ),
      {
        type: "definition",
        term: "live scene",
        partOfSpeech: "description",
        definition:
          "A live scene is a description of what is happening in one place at one time. Continuous verbs carry the actions; present-simple lines add the habits and facts behind them.",
        example: {
          english: "The children are playing. Their parents are watching. Every Sunday, the park is full.",
          translation: "Two now-actions plus one habit line — the shape of a live scene.",
        },
      },
      ST("Describe a live scene in three steps", [
        {
          title: "Step 1 — Open with the place and time",
          text: "Set the scene: It is Sunday afternoon. The park is full. Be-statements and continuous verbs open the picture.",
          examples: [{ english: "It is Sunday afternoon and the park is full.", note: "is opens the scene — be from Chapter 12." }],
        },
        {
          title: "Step 2 — Paint the actions with the continuous",
          text: "Name the people and their now-actions. Some children are playing football. Two women are running around the lake.",
          examples: [{ english: "An old man is reading a newspaper on a bench.", note: "One man → is reading." }],
        },
        {
          title: "Step 3 — Close with the habits behind the scene",
          text: "Add what usually happens here: Every Sunday, families come here. People always smile here. The simple carries the permanent truth.",
          examples: [{ english: "Every Sunday, families come and enjoy the sun.", note: "every Sunday → present simple: come, enjoy." }],
        },
      ]),
      GR(
        "The chapter on one page",
        "Affirmative: subject + be + -ing. Negative: be + not + -ing (isn't, aren't, I'm not). Question: be + subject + -ing (Are you listening?). WH: WH-word + be + subject + -ing (What is she doing?). Choice: habits → present simple; now → present continuous.",
        [
          { english: "She is working today.", translation: "Affirmative: is + working." },
          { english: "She isn't working this week.", translation: "Negative: isn't + working — the -ing stays." },
          { english: "What is she doing?", translation: "WH-question: what + is + she + doing?" },
        ],
        ["State verbs stay simple: I know, she likes, we want."],
      ),
      TB(
        "The chapter on one page",
        ["Form", "Pattern", "Example"],
        [
          ["Affirmative", "subject + be + -ing", "She is wearing blue today."],
          ["Negative", "be + not + -ing", "They aren't watching the news."],
          ["Yes/no question", "be + subject + -ing?", "Are you listening?"],
          ["WH-question", "WH + be + subject + -ing?", "What is she doing?"],
          ["The decision", "habit → simple; now → continuous", "I usually walk. I'm waiting now."],
        ],
        "Five rows, one tense — the whole chapter in a pocket.",
      ),
      AU(
        "Listen: the park",
        "It is Sunday afternoon and the park is full. Some children are playing football. An old man is reading a newspaper on a bench. Two women are running around the lake. My brother isn't running — he is eating an ice cream! Every Sunday, families come here. Today, a small band is playing music near the café. People always smile here.",
        0.85,
      ),
      AU(
        "Listen: the family dinner",
        "It's Friday evening. The family is having dinner. My mother is bringing the rice. My father is laughing at my joke. My little sister isn't eating — she's singing! We always have dinner together on Fridays. Tonight, my grandmother is telling a story about her village. We're listening. Even the cat is sitting quietly!",
        0.9,
      ),
      EXD(
        "One live scene, ten lines",
        [
          { english: "It is Sunday afternoon and the park is full.", note: "The scene-setter: be opens the picture (Chapter 12).", domain: "everyday" },
          { english: "Some children are playing football.", note: "are playing — the main action of the scene.", domain: "sport" },
          { english: "An old man is reading a newspaper on a bench.", note: "is reading — one man, one bench, one quiet now.", domain: "social" },
          { english: "Two women are running around the lake.", note: "are running — health in motion, lap after lap.", domain: "health" },
          { english: "My brother isn't running — he is eating an ice cream!", note: "A negative plus the true now-action. Listeners always laugh here.", domain: "food" },
          { english: "A man is selling fruit near the gate.", note: "is selling — the market inside the park.", domain: "shopping" },
          { english: "My grandmother is telling a story under a tree.", note: "is telling — the family's live storyteller.", domain: "family" },
          { english: "My cousins are doing their homework on the grass.", note: "are doing — homework moves outside on Sundays.", domain: "education" },
          { english: "The gardener is watering the flowers.", note: "is watering — one man at work, now.", domain: "work" },
          { english: "Someone is filming the band on a phone.", note: "is filming — the scene goes online.", domain: "technology" },
        ],
        "Ten lines, one live scene — the whole chapter in one picture.",
      ),
      US(
        [
          {
            situation: "Describing a photo on your phone",
            example: "“Here we're swimming. My cousins are laughing.”",
            note: "A photo freezes the now of that day.",
          },
          {
            situation: "Reporting a match",
            example: "“He's running. He's shooting. It's a goal!”",
            note: "Sports commentary lives in the continuous.",
          },
          {
            situation: "Video call with family",
            example: "“Turn the camera — what's Ammi doing? She's making paratha!”",
            note: "The now-tense crosses distances.",
          },
          {
            situation: "Telling a story",
            example: "“So I'm standing there, and the bus is leaving…”",
            note: "Storytellers use the continuous to make you feel the moment.",
          },
          {
            situation: "At the window",
            example: "“Look at the street. It's raining. Everyone is running.”",
            note: "One window, one live scene.",
          },
        ],
        "Where live scenes live",
        "Photos, matches, calls and stories — the continuous paints them all.",
      ),
      DL(
        "Sunday in the park",
        "Two friends sit on a bench and watch.",
        [
          ["Zara", "What a day! Is the band playing again?"],
          ["Bilal", "Yes! They're playing near the café. Listen!"],
          ["Zara", "And what are those children doing?"],
          ["Bilal", "They're playing football — badly! The ball isn't going where they want it."],
          ["Zara", "Ha! And the old man on the next bench?"],
          ["Bilal", "He isn't reading his newspaper. He's sleeping!"],
          ["Zara", "Do you come here every Sunday?"],
          ["Bilal", "Usually. But today the whole city is here. The sun is shining — nobody is staying home!"],
        ],
      ),
      CMP(
        "Which tense for which line?",
        ["present simple: the habits behind the scene", "present continuous: the live scene"],
        [
          ["What it carries", "every Sunday, always, jobs and facts", "the actions in progress right now"],
          ["Examples", "Families come here every Sunday.", "Today, a band is playing near the café."],
          ["Signals", "every Sunday, always, usually", "today, now, Look!, Listen!"],
          ["The mistake", "“Today a band plays near the café.” ✗", "“Every Sunday the band is playing here.” ✗"],
          ["The fix", "habit line → drop be and -ing", "live line → add be and -ing"],
        ],
        {
          intro: "A full scene needs both tenses — each line must carry the right one.",
          verdict:
            "Paint the live actions with the continuous. Add the habits behind the scene with the simple. Two brushes, one picture.",
        },
      ),
      MS(
        [
          [
            "I am go to school now.",
            "I am going to school now.",
            "The continuous needs -ing on the action verb. am + going.",
          ],
          [
            "She is work today.",
            "She is working today.",
            "Both parts must be present: is + working.",
          ],
          [
            "He don't working this week.",
            "He isn't working this week.",
            "don't belongs to the present simple. The continuous negative needs isn't.",
          ],
          [
            "What you doing?",
            "What are you doing?",
            "The flip needs be: what + are + you + doing.",
          ],
          [
            "I am knowing the answer.",
            "I know the answer.",
            "know is a state verb. States stay simple.",
          ],
        ],
        "The five mistakes this chapter was built to kill",
      ),
      N(
        "The 1-2-3 check before you speak",
        "One: is it happening now or again and again? Now → be + -ing. Habit → present simple. Two: negative? Put not on be: isn't, aren't. Three: question? Flip be to the front. Three checks, two seconds — every sentence comes out right.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "It is Saturday morning at the market. The market is full of life. A man is carrying a huge box of mangoes. Two women are laughing at a joke. A child is crying — his mother is buying him a sweet. The sun isn't shining, but nobody is complaining. “We always come on Saturdays,” an old man says. “The mangoes are sweet this month, and my wife is making juice tonight!”",
          task: "Read the text two times. Then find five continuous verbs and two present-simple lines.",
        },
        writing: {
          task: "Describe a lively place in six to eight sentences: five continuous sentences about what is happening, and two present-simple sentences about what usually happens there.",
          guide: ["It is ______ and the ______ is full.", "A ______ is ______ing.", "Two ______ are ______ing.", "Every ______, people ______ here.", "The sun isn't ______ today."],
          model: "It is Sunday and the park is full. Children are playing football. A band is playing near the café. Every Sunday, families come here. The sun isn't shining, but nobody is complaining.",
        },
        listening: {
          script:
            "Where are you? I'm at the station. What's happening there? A train is arriving. People are running with their bags. A guard is blowing his whistle. Is it raining? No, it isn't. The sun is shining. Is your train coming? Yes, it is — I'm running too! Bye!",
          task: "Listen. What is the weather like at the station?",
        },
        speaking: {
          task: "Describe a live scene for one minute: a park, a market or your home right now. Use five continuous sentences and two habit lines. Then ask your partner: What are they doing?",
          frames: ["It is ______ and the ______ is full.", "A ______ is ______ing.", "Look! ______ is ______ing.", "Every ______, ______ comes here.", "What are they doing?"],
          checklist: [
            "My live lines used be + -ing.",
            "My habit lines used the present simple.",
            "I spoke for at least one minute.",
          ],
        },
      }),
      LSP(
        [
          gls("The present simple is for habits; the present continuous is for now."),
          gls("Use am, is or are with a verb ending in -ing."),
          gls("The present continuous describes actions happening now."),
          gls("Read the whole sentence before you choose the tense."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Form: be + -ing — am, is or are, then the -ing form.",
        "Negatives: be + not + -ing (isn't, aren't, I'm not). The -ing never changes.",
        "Questions flip be: Are you listening? What is she doing?",
        "Choice: habit signals → present simple; now signals → present continuous.",
        "State verbs stay simple: know, like, want, need.",
      ]),
      RV(
        [
          {
            question: "Which be-word goes with “the children”?",
            options: ["are", "is", "am"],
            correctIndex: 0,
            explanation: "Children = they → are — the be-forms of Chapter 12.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which is the present-simple negative for one man?",
            options: ["He doesn't work on Sundays.", "He isn't working now.", "He don't working now."],
            correctIndex: 0,
            explanation: "on Sundays = habit → doesn't + plain verb.",
            from: "Chapter 13 · Lesson 4",
          },
          {
            question: "Which question is correct?",
            options: ["Do you are ready?", "Are you ready?", "Does you ready?"],
            correctIndex: 1,
            explanation: "be flips alone — it never needs do.",
            from: "Chapter 12 · Lesson 2",
          },
          {
            question: "What is the he-form of watch in the present simple?",
            options: ["watchs", "watches", "watch"],
            correctIndex: 1,
            explanation: "After -ch, the verb takes -es: watches.",
            from: "Chapter 13 · Lesson 2",
          },
          {
            question: "“What do you do?” asks about…",
            options: ["your job or habit", "this moment", "yesterday"],
            correctIndex: 0,
            explanation: "What do you do? = your job or habit. What are you doing? = now.",
            from: "Chapter 13 · Lesson 5",
          },
        ],
        { title: "Chapter review — check your base", intro: "Five quick questions from earlier chapters." },
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
            "Sunday in the park",
            "It is Sunday afternoon and the park is full. Some children are playing football. An old man is reading a newspaper on a bench. Two women are running around the lake. My brother isn't running — he is eating an ice cream! Every Sunday, families come here and enjoy the sun. Today, a small band is playing music near the café.",
            "What is the brother doing?",
            [
              ["a", "running"],
              ["b", "eating an ice cream"],
              ["c", "reading a newspaper"],
            ],
            "b",
            fb(
              "eating an ice cream",
              "The passage says: my brother isn't running — he is eating an ice cream.",
              "The old man reads; the women run — but the brother eats.",
            ),
            { skill: "reading", hints: ["Find the word brother, then read what follows the dash."] },
          ),
          MCQ(
            "Which sentence is correct RIGHT NOW?",
            [
              ["a", "Look! It rains."],
              ["b", "Look! It is raining."],
              ["c", "Look! It raining."],
            ],
            "b",
            fbx(
              "Look! It is raining.",
              "Look! is evidence for now: be + -ing.",
              "'It rains' is the habit/fact form; 'It raining' has no be.",
              { english: "Listen! The birds are singing.", translation: "Listen! + are singing — evidence calls the continuous." },
            ),
            { hints: ["Look! means you can see it happening now. Which form shows progress?"] },
          ),
          FB(
            "Complete with the correct tense of drink.",
            "She drinks tea every morning, but today she ___ coffee.",
            ["is drinking"],
            fb(
              "is drinking",
              "every morning = habit (drinks); today = the exception → is drinking.",
              "today is the now-signal that switches the tense.",
            ),
            { hints: ["Read to the end. Which time word changes the habit?"] },
          ),
          LIS(
            "Listen and answer.",
            "Where are you? I'm at the market. What's happening there? A man is carrying a big box. Two women are laughing. Is it raining? No, it isn't. The sun is shining. Is your mother with you? Yes, she is. She's buying mangoes!",
            "What is the mother doing?",
            ["She is buying mangoes.", "Buying mangoes.", "She's buying mangoes."],
            fb(
              "She is buying mangoes.",
              "The last line says it: she's buying mangoes.",
              "The box, the laughing women and the sun are the rest of the scene.",
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
            "'She ___ tea every morning, but today she ___ coffee.'",
            [
              ["a", "drinks / is drinking"],
              ["b", "is drinking / drinks"],
              ["c", "drink / drinking"],
            ],
            "a",
            fb("drinks / is drinking", "Habit → present simple; today's exception → continuous.", "'Every morning' signals habit; 'today' signals the live picture."),
          ),
          CORR(
            "Find and correct the mistake.",
            "What you doing right now?",
            ["What are you doing right now?"],
            fb(
              "What are you doing right now?",
              "The flip needs be: what + are + you + doing.",
              "be must sit between the WH-word and the subject.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the live-scene sentence.",
            "The children are playing football",
            fb(
              "The children are playing football",
              "Subject + be + -ing — the heart of every live scene.",
              "are matches children; playing carries the action.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Look! The band is playing near the café.",
            ["Look! The band is playing near the café."],
            fb(
              "Look! The band is playing near the café.",
              "Evidence word + be + subject + -ing — the live-scene formula.",
              "Look! opens the sentence; is matches the band.",
            ),
            { skill: "listening" },
          ),
        ],
      },
    ],
    assignment: {
      title: "A place full of life",
      instructions:
        "Describe a lively place (park, market, family dinner) in six to eight sentences: five continuous sentences about what is happening, and two present-simple sentences about what usually happens there. Example: “It is Sunday and the park is full. Children are playing football. A band is playing. Every Sunday, families come here.”",
      minWords: 35,
      maxWords: 110,
    },
    homework: [
      "Record yourself describing a live scene for one minute. Listen back for be + -ing.",
      "Describe your family dinner tonight: five continuous sentences and one negative.",
      "Write two pairs: a habit and a now-action with the same verb: “I play cricket on Sundays. Right now I'm resting.”",
    ],
  },
];
