import type { StructuredCourseLesson } from "../types";
import { draftMeta, makeLessonTools } from "./helpers";

/**
 * P1 · Unit 6 · Lesson 1 — Negative Sentences
 *
 * "Not" flips yes into no. be + not (I am not, isn't, aren't) and the
 * don't/doesn't chunks for other verbs — with an honest note that the
 * full do-grammar comes later in the programme.
 */
export const p1_6_1: StructuredCourseLesson = {
  slug: "p1-6-1",
  title: "Negative Sentences",
  subtitle: "Saying no with not",
  description:
    "I am not tired. It is not cold. She doesn't like coffee. Learn the tiny word that flips every yes-sentence into a no-sentence — plus the friendly short forms isn't and aren't.",
  minutes: 12,
  skills: ["reading", "writing", "listening", "speaking"],
  content: draftMeta(["st03-m03-u01-l01"]),

  introduction:
    "Last lesson you mastered sentences that say yes. Today you learn the most powerful tiny word in English: NOT. With not, you can disagree, refuse, correct and clarify. 'I am NOT tired. That is NOT my bag. We do NOT live there.' Small word, big freedom!",

  objectives: [
    "You can make a be sentence negative: 'I am not tired.'",
    "You can use the short forms isn't and aren't.",
    "You can use don't and doesn't to say what you do not do.",
  ],

  prerequisites: [
    { lessonSlug: "p1-5-5", label: "You know affirmative sentences (lesson 25)." },
    { lessonSlug: "p1-5-1", label: "You know be verbs (lesson 21)." },
  ],

  vocab: [
    {
      id: "p1-6-1-w1",
      term: "negative",
      pos: "adjective",
      definition: "saying no; saying that something is NOT so",
      example: "'I am not tired' is a negative sentence.",
    },
    {
      id: "p1-6-1-w2",
      term: "not",
      pos: "adverb",
      definition: "the no word — it makes a sentence negative",
      example: "The tea is not cold.",
    },
    {
      id: "p1-6-1-w3",
      term: "isn't",
      pos: "verb",
      definition: "the short form of 'is not'",
      example: "It isn't cold today.",
    },
    {
      id: "p1-6-1-w4",
      term: "aren't",
      pos: "verb",
      definition: "the short form of 'are not'",
      example: "We aren't late.",
    },
    {
      id: "p1-6-1-w5",
      term: "don't",
      pos: "verb",
      definition: "the short form of 'do not' — for I, you, we, they",
      example: "I don't like coffee.",
    },
    {
      id: "p1-6-1-w6",
      term: "doesn't",
      pos: "verb",
      definition: "the short form of 'does not' — for he, she, it",
      example: "She doesn't eat meat.",
    },
  ],

  concept: {
    definition: "A negative sentence says something is NOT so. With be verbs, add not after the verb: 'I am not tired. It is not cold.'",
    explanation: [
      "Here is the magic: take any be sentence and drop NOT right after the verb. 'She is happy.' → 'She is not happy.' 'They are here.' → 'They are not here.' That's the whole trick!",
      "In friendly talk, not shrinks and joins the verb: is not → isn't, are not → aren't. 'It isn't cold. We aren't late.' Both forms mean exactly the same.",
      "For other verbs (eat, like, run), English uses a helper: don't (for I, you, we, they) and doesn't (for he, she, it). 'I don't like coffee. He doesn't eat meat.' For now, learn them as friendly chunks — the full grammar story comes later in the programme.",
    ],
  },

  teachingSteps: [
    {
      title: "Step 1 — Meet NOT, the flip word",
      text: "Every affirmative sentence has a negative twin. 'I am tired.' — flip! — 'I am not tired.' One small word, opposite meaning. Not is the flip switch of English.",
      examples: ["I am tired. → I am not tired.", "The tea is cold. → The tea is not cold."],
    },
    {
      title: "Step 2 — be + not: the position rule",
      text: "Where does not go? Right AFTER the be verb. 'She is not happy.' (not after is.) 'We are not late.' (not after are.) Never before the verb, always after it.",
      examples: ["She is not happy.", "We are not late.", "It is not my bag."],
    },
    {
      title: "Step 3 — Short forms: isn't and aren't",
      text: "In speech and messages, is not becomes isn't and are not becomes aren't. 'It isn't cold.' 'They aren't home.' The little mark (') shows where letters went missing. Both forms are correct — short forms are friendlier.",
      examples: ["It isn't cold.", "We aren't late.", "She isn't a teacher."],
    },
    {
      title: "Step 4 — don't and doesn't for other verbs",
      text: "What about 'I like coffee'? The verb like needs a helper to go negative: 'I don't like coffee.' And for he, she, it: 'She doesn't like coffee.' Learn these two as chunks: don't like, doesn't like, don't eat, doesn't eat.",
      examples: ["I don't like coffee.", "She doesn't like coffee.", "We don't eat meat.", "He doesn't drink tea."],
    },
    {
      title: "Step 5 — Say what is true — negatively!",
      text: "Now say true negative facts about yourself: 'I am not tall. I don't drink coffee. I isn't— no, I am not a doctor!' Negatives let you correct people and draw your own borders. Practise three true ones now.",
      examples: ["I am not a doctor.", "I don't like cold tea.", "My city isn't small."],
    },
  ],

  exampleBank: {
    basic: [
      "I am not tired.",
      "It is not cold.",
      "She isn't happy.",
      "We aren't late.",
      "I don't like coffee.",
    ],
    everyday: [
      "That isn't my bag.",
      "The shop isn't open today.",
      "I don't eat meat.",
      "She doesn't drink tea.",
      "We don't live in London.",
    ],
    questions: [
      "Are you tired? — No, I am not tired.",
      "Is this your pen? — No, it isn't.",
      "Do you like coffee? — No, I don't.",
    ],
    negatives: [
      "This lesson is not boring!",
      "I am not a robot.",
      "Note: 'I amn't' is not a word — say 'I'm not'.",
    ],
    corrections: [
      {
        wrong: "I not am tired.",
        right: "I am not tired.",
        note: "Not goes AFTER the be verb: am not, is not, are not.",
      },
      {
        wrong: "She doesn't likes tea.",
        right: "She doesn't like tea.",
        note: "After doesn't, the verb loses its s: doesn't like (not doesn't likes).",
      },
    ],
  },

  dialogue: {
    title: "The wrong order",
    context: "A café worker brings Ben the wrong drink. Ben practises his new negatives.",
    lines: [
      { speaker: "Waiter", text: "Your coffee!" },
      { speaker: "Ben", text: "Sorry — this isn't my order. I don't drink coffee." },
      { speaker: "Waiter", text: "Oh no! You are the tea at table two?" },
      { speaker: "Ben", text: "Yes! I am not at table two, though. I am here, at table five." },
      { speaker: "Waiter", text: "Ha! Tables two and five aren't so different. One tea, coming!" },
      { speaker: "Ben", text: "Thank you! And don't worry — mistakes aren't a problem." },
    ],
  },

  realLife: {
    title: "Your no-toolkit",
    text: "Negatives protect you: 'That isn't my order.' 'This isn't my stop.' 'I don't eat that.' Today, notice three things that are NOT true around you, and say the negative sentences — even just in your head. You are training your English flip switch.",
    examples: [
      "At a shop: 'That isn't my size.'",
      "At a bus stop: 'This isn't my bus.'",
      "About food: 'I don't like cold tea.'",
    ],
  },

  exercises: (() => {
    const t = makeLessonTools("p1-6-1");
    return [
      /* 8 — guided practice */
      t.mcq(
        "guided",
        "Where does NOT go in a be sentence?",
        ["After the be verb", "Before the be verb", "At the end"],
        0,
        "She is + not + happy. Not follows the be verb."
      ),
      t.mcq(
        "guided",
        "Make it negative: 'The tea is cold.'",
        ["The tea is not cold.", "Not the tea is cold.", "The tea not is cold."],
        0,
        "Be verb + not: is not cold."
      ),
      t.fill(
        "guided",
        "Short form: 'is not' = ______",
        ["isn't"],
        "The letters o and v fly away: isn't."
      ),

      /* 9 — independent practice */
      t.mcq(
        "independent",
        "'are not' as a short form is ______.",
        ["aren't", "isn't", "don't"],
        0,
        "are not → aren't."
      ),
      t.mcq(
        "independent",
        "Which negative sentence is correct?",
        ["She doesn't like coffee.", "She doesn't likes coffee.", "She don't like coffee."],
        0,
        "After doesn't, the verb has no s: doesn't like."
      ),
      t.match("independent", "Match each pair with its short form.", [
        { left: "is not", right: "isn't" },
        { left: "are not", right: "aren't" },
        { left: "do not", right: "don't" },
        { left: "does not", right: "doesn't" },
      ]),

      /* 10 — speaking */
      t.speak("Say a true negative about food.", "I don't like coffee."),

      /* 11 — listening */
      t.listenChoice(
        "listening",
        "The shop isn't open today.",
        "Listen. Is the shop open?",
        ["No, it isn't open.", "Yes, it is open.", "It opens at nine."],
        0
      ),
      t.listenType("listening", "I don't eat meat.", "Listen and type the short form you hear.", ["don't", "dont", "do not"]),

      /* 12 — reading */
      t.mcq(
        "reading",
        "Read the story. What does Mika NOT like?",
        ["Cold tea", "Hot tea", "Her cat"],
        0,
        "The story says: 'She doesn't like cold tea.'"
      ),
      t.fill(
        "reading",
        "Read the story. Mika and Ruby ______ go out at night. (do not)",
        ["don't"],
        "do not → don't."
      ),

      /* 13 — writing */
      t.write(
        "Write ONE true negative sentence about you.",
        "I don't like cold tea.",
        "I am not… · I don't… · I isn't→I'm not… pick one and flip it!",
      ),

      /* 16 — assessment */
      t.mcq(
        "assessment",
        "A negative sentence says ______.",
        ["something is NOT so", "something is so", "a question"],
        0,
        "Not flips a yes into a no."
      ),
      t.mcq(
        "assessment",
        "Choose the correct negative: 'We ___ late.'",
        ["aren't", "isn't", "doesn't"],
        0,
        "We are not late → we aren't late."
      ),
      t.fill(
        "assessment",
        "Make it negative: 'He likes cold tea.' → He ______ like cold tea.",
        ["doesn't"],
        "He = one person → doesn't."
      ),
      t.mcq(
        "assessment",
        "Which sentence has a mistake?",
        ["I amn't tired.", "I'm not tired.", "I am not tired."],
        0,
        "'Amn't' is not a word! With I, say: I'm not / I am not."
      ),
      t.order(
        "assessment",
        "Put the words in order to make a negative sentence: 'am / I / not / tired'.",
        "I am not tired",
        "Subject + be + not + adjective."
      ),
    ];
  })(),

  passage: {
    title: "Mika's quiet evening",
    text: "Mika is not a noisy person. She is quiet. In the evening, she doesn't go out. She drinks hot tea — she doesn't like cold tea! Her cat, Ruby, isn't lazy. It plays with a small ball. They aren't bored. Mika reads a book and smiles. 'People think my evenings are boring,' she says. 'They are wrong! My evenings aren't boring. They are perfect.'",
  },

  commonMistakes: [
    {
      wrong: "I not am tired.",
      right: "I am not tired.",
      why: "Not goes after the be verb: am not, is not, are not.",
    },
    {
      wrong: "She doesn't likes tea.",
      right: "She doesn't like tea.",
      why: "After doesn't, the verb loses its s. Doesn't already carries the s!",
    },
    {
      wrong: "I amn't tired.",
      right: "I'm not tired.",
      why: "'Amn't' does not exist in English. With I, use: I'm not or I am not.",
    },
  ],

  revision: {
    keyPoints: [
      "A negative sentence says something is NOT so.",
      "With be: verb + not — 'I am not tired. It is not cold.'",
      "Short forms: isn't (is not), aren't (are not).",
      "With other verbs: don't (I/you/we/they), doesn't (he/she/it) — 'I don't like coffee.'",
      "After doesn't, the verb loses its s.",
    ],
    keyWords: ["negative", "not", "isn't", "aren't", "don't", "doesn't"],
    selfCheck: [
      "Can you flip 'She is happy' into a negative?",
      "What is the short form of 'are not'?",
      "Do you say 'He doesn't likes' or 'He doesn't like'?",
    ],
  },

  homework: {
    tasks: [
      "Write five negative sentences about things that are NOT true about you.",
      "Turn these into negatives: 'I am late.' · 'The tea is cold.' · 'We are tired.'",
      "Write two don't/doesn't sentences about food you do not like.",
      "Find two negative sentences in a song or message today.",
    ],
  },
};
