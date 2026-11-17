import type { Lesson } from "./types";

/**
 * A1 "Building Blocks" lesson library.
 */

// ---------------------------------------------------------------------------
// a1-1-1 — The Verb "To Be"
// ---------------------------------------------------------------------------

const toBe: Lesson = {
  slug: "a1-1-1",
  levelId: "a1",
  unit: 1,
  title: "The Verb \"To Be\"",
  description:
    "Your first English verb: am, is, are. Say who you are, how you feel, and where you are from.",
  estimatedMinutes: 25,
  sections: [
    {
      id: "meet-to-be",
      title: "Meet the verb 'to be'",
      blocks: [
        {
          type: "heading",
          text: "The most important verb in English",
          translation: "El verbo más importante del inglés",
        },
        {
          type: "definition",
          term: "verb",
          partOfSpeech: "grammar word",
          definition: "a word for an action or a state: be, have, go, eat. Every sentence needs one.",
          translation: "verbo",
          example: { english: "She is happy.", translation: "Ella está feliz." },
        },
        {
          type: "definition",
          term: "subject",
          partOfSpeech: "grammar word",
          definition: "the person or thing that does the verb: I, you, my brother, the cat.",
          translation: "sujeto",
        },
        {
          type: "text",
          text: "'To be' changes its form for each subject: I am, you are, he is. This is called conjugation. Learn the table below — it unlocks hundreds of sentences.",
          translation:
            "'To be' cambia de forma para cada sujeto: I am, you are, he is. Esto se llama conjugación. Aprende la tabla de abajo — desbloquea cientos de frases.",
        },
        {
          type: "table",
          title: "The verb 'to be' — positive",
          headers: ["Subject", "Be", "Full example"],
          rows: [
            ["I", "am", "I am a student."],
            ["you", "are", "You are my friend."],
            ["he", "is", "He is tall."],
            ["she", "is", "She is a doctor."],
            ["it", "is", "It is cold."],
            ["we", "are", "We are ready."],
            ["they", "are", "They are from Spain."],
          ],
          caption: "am for I · is for he/she/it · are for you/we/they.",
        },
        {
          type: "audio",
          label: "Listen: I am, you are, he is...",
          text: "I am. You are. He is. She is. It is. We are. They are.",
          rate: 0.75,
        },
      ],
    },
    {
      id: "to-be-rules",
      title: "One rule, three forms",
      blocks: [
        {
          type: "heading",
          text: "Which form for which subject?",
          translation: "¿Qué forma para cada sujeto?",
        },
        {
          type: "grammar-rule",
          title: "The golden rule of 'to be'",
          rule: "I → am · he / she / it → is · you / we / they → are.",
          explanation:
            "The form of 'be' depends only on the subject. Names use 'is' too: 'Maria is here' (she). This rule never changes, in any tense you will learn later.",
          examples: [
            { english: "I am tired.", translation: "Estoy cansado." },
            { english: "My mother is a nurse.", translation: "Mi madre es enfermera." },
            { english: "We are hungry.", translation: "Tenemos hambre." },
          ],
        },
        {
          type: "diagram",
          variant: "steps",
          title: "Build a sentence with 'be'",
          steps: [
            { label: "1. Subject", description: "she" },
            { label: "2. Correct form of 'be'", description: "is" },
            { label: "3. The rest", description: "happy" },
            { label: "Full sentence", description: "She is happy." },
          ],
          caption: "Subject + be + rest = sentence.",
        },
        {
          type: "warning",
          title: "Never say 'I are' or 'he am'",
          text: "'I are happy' and 'He am tall' are wrong. Only 'I am' and 'he is' are correct. This is the number-one beginner mistake!",
        },
        {
          type: "example",
          title: "Short forms (contractions)",
          items: [
            { english: "I am → I'm (I'm ready.)", translation: "I'm = estoy/soy" },
            { english: "she is → she's (She's my sister.)", translation: "she's = ella es" },
            { english: "we are → we're (We're late.)", translation: "we're = estamos" },
          ],
          note: "Short forms are normal in speaking and informal writing.",
        },
      ],
    },
    {
      id: "negatives-and-questions",
      title: "Negative and questions",
      blocks: [
        {
          type: "heading",
          text: "Not happy? Ask a question?",
          translation: "¿No está feliz? ¿Hacer una pregunta?",
        },
        {
          type: "text",
          text: "To make a negative, add 'not' after 'be'. To make a question, move 'be' before the subject. That's all!",
          translation:
            "Para negar, añade 'not' después del verbo. Para preguntar, pon el verbo antes del sujeto. ¡Eso es todo!",
        },
        {
          type: "table",
          title: "Positive → negative → question",
          headers: ["Positive", "Negative", "Question"],
          rows: [
            ["I am late.", "I am not late. / I'm not late.", "Am I late?"],
            ["She is tired.", "She is not tired. / She isn't tired.", "Is she tired?"],
            ["They are ready.", "They are not ready. / They aren't ready.", "Are they ready?"],
          ],
          caption: "is not = isn't · are not = aren't.",
        },
        {
          type: "grammar-rule",
          title: "Questions with 'be'",
          rule: "Be + subject + rest: 'Are you happy?' — never 'You are happy?'",
          explanation:
            "In questions, the verb moves to first position. This is called inversion.",
          examples: [
            { english: "Are you from Spain?", translation: "¿Eres de España?" },
            { english: "Is he your brother?", translation: "¿Es tu hermano?" },
          ],
        },
        {
          type: "practice",
          title: "Practice: forms of 'be'",
          exerciseIds: ["a1-1-1-fb-1", "a1-1-1-fb-2", "a1-1-1-fb-3", "a1-1-1-ms-1"],
        },
      ],
    },
    {
      id: "to-be-practice",
      title: "Use 'to be' about YOU",
      blocks: [
        {
          type: "heading",
          text: "Your turn",
          translation: "Tu turno",
        },
        {
          type: "text",
          text: "Now use 'to be' to talk about yourself: your name, your age, your city, your feelings. These are real sentences you can use today.",
          translation:
            "Ahora usa 'to be' para hablar de ti: tu nombre, tu edad, tu ciudad, tus sentimientos. Son frases reales que puedes usar hoy.",
        },
        {
          type: "example",
          title: "Four real sentences",
          items: [
            { english: "I am Sara. I'm 24 years old.", translation: "Soy Sara. Tengo 24 años." },
            { english: "I'm from Mexico City.", translation: "Soy de Ciudad de México." },
            { english: "I'm happy today, but I'm not rich!", translation: "Hoy estoy feliz, ¡pero no soy rico!" },
          ],
        },
        {
          type: "practice",
          title: "Practice: make it correct",
          exerciseIds: ["a1-1-1-cm-1", "a1-1-1-cm-2", "a1-1-1-ra-1", "a1-1-1-mcq-1", "a1-1-1-mcq-2", "a1-1-1-dd-1", "a1-1-1-wr-1"],
        },
        {
          type: "homework",
          title: "Homework",
          tasks: [
            "Write 5 sentences about you with 'I am' / 'I'm not'.",
            "Ask two questions with 'be' to a friend or family member: 'Are you tired?'",
            "Say the conjugation table out loud every morning this week: I am, you are, he is...",
          ],
        },
      ],
    },
  ],
  summary: {
    keyPoints: [
      "I → am · he/she/it (and names) → is · you/we/they → are.",
      "Negative: be + not → 'She isn't tired.' / 'They aren't ready.'",
      "Question: move 'be' first → 'Are you happy?'",
      "Short forms: I'm, she's, we're — normal in speech.",
    ],
    vocabulary: ["am", "is", "are", "isn't", "aren't", "I'm", "she's", "we're", "to be"],
  },
  assessment: {
    questionCount: 5,
    passScore: 0.7,
    bank: [
      "a1-1-1-b-fb-1",
      "a1-1-1-b-fb-2",
      "a1-1-1-b-ms-1",
      "a1-1-1-b-cm-1",
      "a1-1-1-b-mcq-1",
      "a1-1-1-b-ra-1",
      "a1-1-1-b-wr-1",
    ],
  },
};

// ---------------------------------------------------------------------------
// a1-1-2 — Out and About
// ---------------------------------------------------------------------------

const outAndAbout: Lesson = {
  slug: "a1-1-2",
  levelId: "a1",
  unit: 1,
  title: "Out and About: Ordering and Asking",
  description:
    "Watch a real café conversation, learn polite requests with 'Can I have ...?' and ask 'How much is it?'.",
  estimatedMinutes: 25,
  sections: [
    {
      id: "cafe-video",
      title: "At the café",
      blocks: [
        {
          type: "heading",
          text: "A morning at the café",
          translation: "Una mañana en la cafetería",
        },
        {
          type: "text",
          text: "Cafés, shops and stations are where English happens. Watch the mini-lesson video, then read the same conversation as a dialogue.",
          translation:
            "Cafeterías, tiendas y estaciones son donde ocurre el inglés. Mira el vídeo de la minilección y luego lee la misma conversación como diálogo.",
        },
        {
          type: "video",
          title: "At the Café — mini-lesson",
          description: "Eva orders a green tea and asks the price. Scenes from the TalkSy beginner library.",
          scenes: [
            { heading: "Good morning!", text: "The waiter greets Eva at the café door.", emoji: "👋" },
            { heading: "Can I have a green tea, please?", text: "Eva orders her drink politely.", emoji: "🍵" },
            { heading: "How much is it?", text: "Eva asks the price.", emoji: "💶" },
            { heading: "Two euros fifty. Here you are!", text: "The waiter says the price and serves the tea.", emoji: "✅" },
          ],
        },
        {
          type: "dialogue",
          title: "Eva at the café",
          context: "Tuesday morning. Eva enters a small café.",
          lines: [
            { speaker: "Waiter", text: "Good morning! What can I get you?", translation: "¡Buenos días! ¿Qué le pongo?" },
            { speaker: "Eva", text: "A green tea, please. How much is it?", translation: "Un té verde, por favor. ¿Cuánto cuesta?" },
            { speaker: "Waiter", text: "Two euros fifty.", translation: "Dos euros con cincuenta." },
            { speaker: "Eva", text: "Here you are. Thank you!", translation: "Aquí tiene. ¡Gracias!" },
            { speaker: "Waiter", text: "Thank you! Have a nice day.", translation: "¡Gracias! Que tenga un buen día." },
          ],
        },
        {
          type: "audio",
          label: "Listen: the café dialogue",
          text: "Good morning! What can I get you? A green tea, please. How much is it? Two euros fifty. Here you are. Thank you! Have a nice day.",
          rate: 0.85,
        },
      ],
    },
    {
      id: "useful-phrases",
      title: "Survival phrases",
      blocks: [
        {
          type: "heading",
          text: "Six phrases that open doors",
          translation: "Seis frases que abren puertas",
        },
        {
          type: "definition",
          term: "phrase",
          partOfSpeech: "grammar word",
          definition: "a short group of words people use together, like 'How much is it?'",
          translation: "frase / expresión",
        },
        {
          type: "vocabulary-list",
          title: "Out-and-about phrases",
          words: [
            { word: "Can I have ..., please?", partOfSpeech: "phrase", definition: "the polite way to order or ask for something", translation: "¿Me da ..., por favor?", example: { english: "Can I have a coffee, please?", translation: "¿Me da un café, por favor?" } },
            { word: "How much is it?", partOfSpeech: "phrase", definition: "ask the price of one thing", translation: "¿Cuánto cuesta?" },
            { word: "How much are they?", partOfSpeech: "phrase", definition: "ask the price of several things", translation: "¿Cuánto cuestan?" },
            { word: "Here you are.", partOfSpeech: "phrase", definition: "what you say when you give something to someone", translation: "Aquí tiene / Toma." },
            { word: "Excuse me, where is ...?", partOfSpeech: "phrase", definition: "polite way to ask for a place", translation: "Disculpe, ¿dónde está ...?" },
            { word: "Have a nice day!", partOfSpeech: "phrase", definition: "a friendly goodbye in shops and cafés", translation: "¡Que tenga un buen día!" },
          ],
        },
        {
          type: "diagram",
          variant: "pyramid",
          title: "From word to conversation",
          levels: [
            { label: "Word", description: "tea" },
            { label: "Phrase", description: "a green tea, please" },
            { label: "Sentence", description: "Can I have a green tea, please?" },
            { label: "Conversation", description: "order + price + thank you" },
          ],
          caption: "Every conversation is built from words and phrases.",
        },
      ],
    },
    {
      id: "polite-requests",
      title: "Can I have ...?",
      blocks: [
        {
          type: "heading",
          text: "The magic request pattern",
          translation: "El patrón mágico para pedir",
        },
        {
          type: "grammar-rule",
          title: "Can I have + thing",
          rule: "Can I have + a/an/the + thing + please? — 'Can I have a coffee, please?'",
          explanation:
            "This pattern works in cafés, shops and restaurants. Adding 'please' at the end makes it polite.",
          examples: [
            { english: "Can I have a tea, please?", translation: "¿Me da un té, por favor?" },
            { english: "Can I have the bill, please?", translation: "¿Me trae la cuenta, por favor?" },
            { english: "Can I have two tickets, please?", translation: "¿Me da dos billetes, por favor?" },
          ],
          exceptions: [
            "With plural things, don't use 'a': 'Can I have two tickets, please?' — not 'two a tickets'.",
          ],
        },
        {
          type: "dialogue",
          title: "Asking for directions",
          context: "Eva looks for the museum.",
          lines: [
            { speaker: "Eva", text: "Excuse me, where is the museum?", translation: "Disculpe, ¿dónde está el museo?" },
            { speaker: "Man", text: "It's near the station. Two minutes that way.", translation: "Está cerca de la estación. A dos minutos por ahí." },
            { speaker: "Eva", text: "Thank you very much!", translation: "¡Muchísimas gracias!" },
          ],
        },
        {
          type: "warning",
          title: "Question order",
          text: "'How much it is?' is wrong. The verb comes first: 'How much IS IT?'",
        },
        {
          type: "practice",
          title: "Practice: polite requests",
          exerciseIds: ["a1-1-2-mcq-1", "a1-1-2-cs-1", "a1-1-2-cm-1", "a1-1-2-ra-1"],
        },
      ],
    },
    {
      id: "real-conversation",
      title: "Your café conversation",
      blocks: [
        {
          type: "heading",
          text: "Put it all together",
          translation: "Todo junto",
        },
        {
          type: "text",
          text: "You now have everything for a real café conversation: greet, order, ask the price, pay, and say goodbye. Practice it here, then use it in real life.",
          translation:
            "Ya tienes todo para una conversación real en una cafetería: saludar, pedir, preguntar el precio, pagar y despedirte. Practícalo aquí y úsalo en la vida real.",
        },
        {
          type: "practice",
          title: "Practice: listen and read",
          exerciseIds: ["a1-1-2-la-1", "a1-1-2-la-2", "a1-1-2-read-1", "a1-1-2-dict-1", "a1-1-2-tr-1"],
        },
        {
          type: "practice",
          title: "Practice: write and speak",
          exerciseIds: ["a1-1-2-wr-1", "a1-1-2-sp-1"],
        },
        {
          type: "homework",
          title: "Homework",
          tasks: [
            "Order your next drink in English (real or imaginary): 'Can I have a ..., please?'",
            "Write a 4-line café dialogue: you and a waiter.",
            "Learn the six survival phrases by heart — test yourself tomorrow.",
          ],
        },
      ],
    },
  ],
  summary: {
    keyPoints: [
      "'Can I have + thing + please?' is the polite way to order.",
      "'How much is it?' asks the price — the verb 'is' comes before 'it'.",
      "'Here you are.' when you give something; 'Excuse me' before you ask.",
      "Greet, order, pay, thank, leave — the full café conversation.",
    ],
    vocabulary: ["Can I have ..., please?", "How much is it?", "Here you are.", "Excuse me, where is ...?", "Have a nice day!", "What can I get you?"],
  },
  assessment: {
    questionCount: 5,
    passScore: 0.7,
    bank: [
      "a1-1-2-b-mcq-1",
      "a1-1-2-b-la-1",
      "a1-1-2-b-cs-1",
      "a1-1-2-b-ra-1",
      "a1-1-2-b-tr-1",
      "a1-1-2-b-read-1",
    ],
  },
};

export const a1Lessons: Lesson[] = [toBe, outAndAbout];
