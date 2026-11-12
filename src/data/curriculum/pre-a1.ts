import type { Lesson } from "./types";

/**
 * Pre-A1 "First Words" lesson library.
 * Content is code: every block and exercise is typed data consumed by the
 * reusable renderer and exercise engine.
 */

// ---------------------------------------------------------------------------
// p1-1-1 — Hello! Everyday Greetings
// ---------------------------------------------------------------------------

const greetings: Lesson = {
  slug: "p1-1-1",
  levelId: "pre-a1",
  unit: 1,
  title: "Hello! Everyday Greetings",
  description:
    "Say hello, goodbye, thank you and sorry — your very first English words for real conversations.",
  estimatedMinutes: 15,
  sections: [
    {
      id: "greeting-words",
      title: "Words to say hello",
      blocks: [
        {
          type: "heading",
          text: "Words to say hello",
          translation: "Palabras para saludar",
        },
        {
          type: "text",
          text: "Every English conversation starts with a greeting. In this lesson you learn the words people use every day — in the morning, in the afternoon, and when they say goodbye.",
          translation:
            "Cada conversación en inglés empieza con un saludo. En esta lección aprenderás las palabras que la gente usa cada día — por la mañana, por la tarde y al despedirse.",
        },
        {
          type: "vocabulary-list",
          title: "Greetings and polite words",
          words: [
            {
              word: "hello",
              partOfSpeech: "exclamation",
              definition: "a word you say when you meet someone",
              translation: "hola",
              example: { english: "Hello! Nice to see you.", translation: "¡Hola! Me alegro de verte." },
            },
            {
              word: "hi",
              partOfSpeech: "exclamation",
              definition: "a short, friendly way to say hello",
              translation: "hola (informal)",
              example: { english: "Hi, Sam!", translation: "¡Hola, Sam!" },
            },
            {
              word: "good morning",
              partOfSpeech: "phrase",
              definition: "a greeting for the morning (before 12 p.m.)",
              translation: "buenos días",
              example: { english: "Good morning, class!", translation: "¡Buenos días, clase!" },
            },
            {
              word: "good afternoon",
              partOfSpeech: "phrase",
              definition: "a greeting from 12 p.m. to about 6 p.m.",
              translation: "buenas tardes",
            },
            {
              word: "good evening",
              partOfSpeech: "phrase",
              definition: "a greeting after about 6 p.m.",
              translation: "buenas noches (al llegar)",
            },
            {
              word: "good night",
              partOfSpeech: "phrase",
              definition: "what you say when you leave at night or go to bed",
              translation: "buenas noches (al despedirse)",
            },
            {
              word: "goodbye",
              partOfSpeech: "exclamation",
              definition: "a word you say when you leave",
              translation: "adiós",
            },
            {
              word: "thank you",
              partOfSpeech: "phrase",
              definition: "a polite word when someone helps you or gives you something",
              translation: "gracias",
            },
            {
              word: "sorry",
              partOfSpeech: "exclamation",
              definition: "a word to say you are sad about a problem",
              translation: "lo siento / perdón",
            },
            {
              word: "excuse me",
              partOfSpeech: "phrase",
              definition: "a polite word before you ask something or pass someone",
              translation: "disculpe / permiso",
            },
          ],
        },
        {
          type: "note",
          title: "Good night is only for leaving",
          text: "In English, 'good night' is a goodbye, not a greeting. When you arrive in the evening, say 'good evening'.",
        },
      ],
    },
    {
      id: "first-dialogue",
      title: "Your first dialogue",
      blocks: [
        {
          type: "heading",
          text: "A short conversation",
          translation: "Una conversación corta",
        },
        {
          type: "text",
          text: "Read and listen to this conversation between Anna and Ben. Notice how short the sentences are — you already know every word!",
          translation:
            "Lee y escucha esta conversación entre Anna y Ben. Fíjate en lo cortas que son las frases — ¡ya conoces todas las palabras!",
        },
        {
          type: "dialogue",
          title: "Anna meets Ben",
          context: "Monday morning, two neighbours meet in the street.",
          lines: [
            { speaker: "Anna", text: "Good morning!", translation: "¡Buenos días!" },
            { speaker: "Ben", text: "Good morning! How are you?", translation: "¡Buenos días! ¿Cómo estás?" },
            { speaker: "Anna", text: "I'm fine, thank you. And you?", translation: "Estoy bien, gracias. ¿Y tú?" },
            { speaker: "Ben", text: "I'm fine too. Goodbye, Anna!", translation: "Yo también estoy bien. ¡Adiós, Anna!" },
            { speaker: "Anna", text: "Goodbye! Have a nice day.", translation: "¡Adiós! Que tengas un buen día." },
          ],
        },
        {
          type: "audio",
          label: "Listen: the full dialogue",
          text: "Good morning! Good morning! How are you? I'm fine, thank you. And you? I'm fine too. Goodbye, Anna! Goodbye! Have a nice day.",
          translation: "Escucha el diálogo completo.",
          rate: 0.85,
        },
        {
          type: "example",
          title: "Greetings for different times",
          items: [
            { english: "Good morning! It's a beautiful day.", translation: "¡Buenos días! Es un día precioso." },
            { english: "Good afternoon. Can I help you?", translation: "Buenas tardes. ¿Puedo ayudarte?" },
            { english: "Good evening. Dinner is ready.", translation: "Buenas noches. La cena está lista." },
          ],
        },
        {
          type: "practice",
          title: "Practice: greetings",
          exerciseIds: ["p1-1-1-mcq-1", "p1-1-1-match-1", "p1-1-1-listen-1"],
        },
      ],
    },
    {
      id: "how-are-you",
      title: "How are you?",
      blocks: [
        {
          type: "heading",
          text: "How are you? — the friendly question",
          translation: "How are you? — la pregunta amable",
        },
        {
          type: "text",
          text: "'How are you?' is the most common question in English. People answer with a short, positive sentence. You don't need to give real medical details — keep it short and friendly.",
          translation:
            "'How are you?' es la pregunta más común en inglés. La gente responde con una frase corta y positiva. No hace falta dar detalles médicos — mantén la respuesta corta y amable.",
        },
        {
          type: "example",
          title: "Ask and answer",
          items: [
            { english: "How are you? — I'm fine, thank you.", translation: "¿Cómo estás? — Estoy bien, gracias." },
            { english: "How are you? — I'm very well, thanks.", translation: "¿Cómo estás? — Estoy muy bien, gracias." },
            { english: "How are you today? — Not bad, and you?", translation: "¿Cómo estás hoy? — No está mal, ¿y tú?" },
          ],
        },
        {
          type: "audio",
          label: "Listen and repeat",
          text: "How are you? I'm fine, thank you. How are you today? I'm very well, thanks.",
          rate: 0.8,
        },
        {
          type: "practice",
          title: "Practice: how are you",
          exerciseIds: ["p1-1-1-rearrange-1", "p1-1-1-dictation-1", "p1-1-1-short-1"],
        },
      ],
    },
    {
      id: "introduce-yourself",
      title: "Introduce yourself",
      blocks: [
        {
          type: "heading",
          text: "Say your name",
          translation: "Di tu nombre",
        },
        {
          type: "text",
          text: "To introduce yourself, use 'My name is ...' or 'I'm ...'. Then it is polite to say 'Nice to meet you' when you meet a person for the first time.",
          translation:
            "Para presentarte usa 'My name is ...' o 'I'm ...'. Luego es educado decir 'Nice to meet you' cuando conoces a alguien por primera vez.",
        },
        {
          type: "example",
          title: "Introductions",
          items: [
            { english: "Hello! My name is Sofia. Nice to meet you.", translation: "¡Hola! Me llamo Sofia. Encantada de conocerte." },
            { english: "Hi, I'm Leo. What's your name?", translation: "Hola, soy Leo. ¿Cómo te llamas?" },
          ],
        },
        {
          type: "note",
          title: "Two ways to say your name",
          text: "'My name is Anna' and 'I'm Anna' mean the same thing. 'I'm' is the short form of 'I am'.",
        },
        {
          type: "practice",
          title: "Practice: introduce yourself",
          exerciseIds: ["p1-1-1-translate-1", "p1-1-1-speak-1"],
        },
        {
          type: "homework",
          title: "Homework",
          tasks: [
            "Say 'hello', 'good morning' and 'good night' out loud five times today — to family, to a mirror, or to your pet.",
            "Write a 3-line introduction: your greeting, your name, and 'Nice to meet you'.",
            "Listen to the lesson dialogue one more time before you sleep and repeat every line.",
          ],
        },
      ],
    },
  ],
  summary: {
    keyPoints: [
      "Use good morning, good afternoon, good evening to greet — good night only to leave at night.",
      "'How are you?' → answer short and positive: 'I'm fine, thank you.'",
      "Introduce yourself with 'My name is ...' or 'I'm ...' + 'Nice to meet you.'",
      "thank you, sorry and excuse me are your first polite words.",
    ],
    vocabulary: ["hello", "hi", "good morning", "good afternoon", "good evening", "good night", "goodbye", "thank you", "sorry", "excuse me", "How are you?", "Nice to meet you"],
  },
  assessment: {
    questionCount: 5,
    passScore: 0.7,
    bank: [
      "p1-1-1-mcq-2",
      "p1-1-1-bank-mcq-1",
      "p1-1-1-bank-fb-1",
      "p1-1-1-bank-dict-1",
      "p1-1-1-bank-mcq-2",
      "p1-1-1-bank-match-1",
      "p1-1-1-bank-sp-1",
    ],
  },
};

// ---------------------------------------------------------------------------
// p1-1-2 — Numbers 1–10
// ---------------------------------------------------------------------------

const numbers: Lesson = {
  slug: "p1-1-2",
  levelId: "pre-a1",
  unit: 1,
  title: "Numbers 1–10",
  description:
    "Count from one to ten, read number words, and use numbers in simple sentences about your life.",
  estimatedMinutes: 18,
  sections: [
    {
      id: "counting-1-5",
      title: "Counting 1–5",
      blocks: [
        {
          type: "heading",
          text: "One, two, three, four, five",
          translation: "Uno, dos, tres, cuatro, cinco",
        },
        {
          type: "text",
          text: "Numbers are everywhere: prices, ages, phone numbers, bus numbers. Start with the first five.",
          translation:
            "Los números están en todas partes: precios, edades, números de teléfono, números de autobús. Empieza con los cinco primeros.",
        },
        {
          type: "table",
          title: "Numbers 1–5",
          headers: ["Digit", "Word", "Example"],
          rows: [
            ["1", "one", "I have one brother."],
            ["2", "two", "Two coffees, please."],
            ["3", "three", "My cat is three years old."],
            ["4", "four", "A dog has four legs."],
            ["5", "five", "Open your books at page five."],
          ],
          caption: "Digit, word and a real example for numbers 1–5.",
        },
        {
          type: "audio",
          label: "Listen: counting 1–5",
          text: "One. Two. Three. Four. Five.",
          rate: 0.7,
        },
        {
          type: "practice",
          title: "Practice: 1–5",
          exerciseIds: ["p1-1-2-mcq-1", "p1-1-2-fb-1"],
        },
      ],
    },
    {
      id: "counting-6-10",
      title: "Counting 6–10",
      blocks: [
        {
          type: "heading",
          text: "Six, seven, eight, nine, ten",
          translation: "Seis, siete, ocho, nueve, diez",
        },
        {
          type: "table",
          title: "Numbers 6–10",
          headers: ["Digit", "Word", "Example"],
          rows: [
            ["6", "six", "It's six o'clock."],
            ["7", "seven", "A week has seven days."],
            ["8", "eight", "An octopus has eight arms."],
            ["9", "nine", "Nine students are here."],
            ["10", "ten", "I have ten fingers."],
          ],
        },
        {
          type: "audio",
          label: "Listen: counting 6–10",
          text: "Six. Seven. Eight. Nine. Ten.",
          rate: 0.7,
        },
        {
          type: "warning",
          title: "Pronunciation: three vs. tree",
          text: "The word 'three' starts with the /θ/ sound — put your tongue between your teeth. 'Tree' (a plant) is a different word!",
        },
        {
          type: "practice",
          title: "Practice: 6–10",
          exerciseIds: ["p1-1-2-ms-1", "p1-1-2-dd-1"],
        },
      ],
    },
    {
      id: "numbers-in-life",
      title: "Numbers in real life",
      blocks: [
        {
          type: "heading",
          text: "Using numbers in sentences",
          translation: "Usar números en frases",
        },
        {
          type: "image",
          src: "/img/numbers.svg",
          alt: "Ten coloured circles in two rows, numbered 1 to 10 with their English words: one, two, three, four, five, six, seven, eight, nine, ten.",
          caption: "Count the circles: one to ten.",
        },
        {
          type: "text",
          text: "When you use a number at the start of a sentence, write the word. In the middle of a sentence you can use the digit or the word.",
          translation:
            "Cuando usas un número al principio de una frase, escribe la palabra. En medio de una frase puedes usar el dígito o la palabra.",
        },
        {
          type: "example",
          title: "Numbers in sentences",
          items: [
            { english: "I have two cats and one dog.", translation: "Tengo dos gatos y un perro." },
            { english: "My sister is nine years old.", translation: "Mi hermana tiene nueve años." },
            { english: "Three apples, please. How much is it?", translation: "Tres manzanas, por favor. ¿Cuánto cuesta?" },
          ],
        },
        {
          type: "diagram",
          variant: "steps",
          title: "How to build a number sentence",
          steps: [
            { label: "1. Choose a number", description: "e.g. three" },
            { label: "2. Choose a thing", description: "e.g. apples" },
            { label: "3. Add a verb", description: "e.g. I have ..." },
            { label: "4. Say the full sentence", description: "I have three apples." },
          ],
          caption: "Number + thing + verb = a real sentence.",
        },
        {
          type: "practice",
          title: "Practice: numbers in life",
          exerciseIds: ["p1-1-2-dict-1", "p1-1-2-tr-1", "p1-1-2-read-1", "p1-1-2-cs-1"],
        },
        {
          type: "homework",
          title: "Homework",
          tasks: [
            "Count ten things in your room out loud, in English.",
            "Write your age and the ages of two family members in words (e.g. 'seven').",
            "Next time you see a price, say the number in English.",
          ],
        },
      ],
    },
  ],
  summary: {
    keyPoints: [
      "Numbers 1–10: one, two, three, four, five, six, seven, eight, nine, ten.",
      "Use numbers with plural things: 'two cats', 'three apples'.",
      "Say ages with 'years old': 'My brother is seven years old.'",
    ],
    vocabulary: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
  },
  assessment: {
    questionCount: 5,
    passScore: 0.7,
    bank: [
      "p1-1-2-b-mcq-1",
      "p1-1-2-b-fb-1",
      "p1-1-2-b-dd-1",
      "p1-1-2-b-dict-1",
      "p1-1-2-b-mcq-2",
      "p1-1-2-b-ms-1",
    ],
  },
};

// ---------------------------------------------------------------------------
// p1-1-3 — Colors All Around
// ---------------------------------------------------------------------------

const colors: Lesson = {
  slug: "p1-1-3",
  levelId: "pre-a1",
  unit: 1,
  title: "Colors All Around",
  description:
    "Learn ten color words and the golden rule: the color always comes before the thing.",
  estimatedMinutes: 15,
  sections: [
    {
      id: "color-words",
      title: "Ten colors",
      blocks: [
        {
          type: "heading",
          text: "Color words",
          translation: "Palabras de colores",
        },
        {
          type: "text",
          text: "Colors are some of the most useful words in any language. Look at the picture, then learn the words.",
          translation:
            "Los colores son de las palabras más útiles en cualquier idioma. Mira la imagen y luego aprende las palabras.",
        },
        {
          type: "image",
          src: "/img/colors.svg",
          alt: "A palette of ten color swatches with their English names: red, blue, green, yellow, orange, purple, pink, brown, black, white.",
          caption: "The ten basic color words.",
        },
        {
          type: "vocabulary-list",
          title: "Colors",
          words: [
            { word: "red", partOfSpeech: "adjective", definition: "the color of blood and strawberries", translation: "rojo", example: { english: "a red apple", translation: "una manzana roja" } },
            { word: "blue", partOfSpeech: "adjective", definition: "the color of the sky on a sunny day", translation: "azul", example: { english: "a blue car", translation: "un coche azul" } },
            { word: "green", partOfSpeech: "adjective", definition: "the color of grass and leaves", translation: "verde" },
            { word: "yellow", partOfSpeech: "adjective", definition: "the color of the sun and bananas", translation: "amarillo" },
            { word: "orange", partOfSpeech: "adjective", definition: "the color of oranges and carrots", translation: "naranja" },
            { word: "purple", partOfSpeech: "adjective", definition: "the color of grapes and violets", translation: "morado" },
            { word: "pink", partOfSpeech: "adjective", definition: "a light red color", translation: "rosa" },
            { word: "brown", partOfSpeech: "adjective", definition: "the color of chocolate and wood", translation: "marrón" },
            { word: "black", partOfSpeech: "adjective", definition: "the darkest color", translation: "negro" },
            { word: "white", partOfSpeech: "adjective", definition: "the color of snow and milk", translation: "blanco" },
          ],
        },
        {
          type: "audio",
          label: "Listen: the ten colors",
          text: "Red. Blue. Green. Yellow. Orange. Purple. Pink. Brown. Black. White.",
          rate: 0.7,
        },
      ],
    },
    {
      id: "adjective-rule",
      title: "The color rule",
      blocks: [
        {
          type: "heading",
          text: "Color + thing, in that order",
          translation: "Color + cosa, en ese orden",
        },
        {
          type: "grammar-rule",
          title: "Adjective before noun",
          rule: "In English, the color word comes BEFORE the thing it describes.",
          explanation:
            "This is the opposite of Spanish, where you say 'una manzana roja' (thing + color). In English the color always comes first: 'a red apple'.",
          examples: [
            { english: "a blue car", translation: "un coche azul" },
            { english: "a green door", translation: "una puerta verde" },
            { english: "two yellow bananas", translation: "dos plátanos amarillos" },
          ],
          exceptions: [
            "With 'the thing is ...' the color comes after the verb: 'The car is blue.'",
          ],
        },
        {
          type: "example",
          title: "Two patterns",
          items: [
            { english: "I have a red bag. (color + thing)", translation: "Tengo un bolso rojo." },
            { english: "My bag is red. (thing + is + color)", translation: "Mi bolso es rojo." },
          ],
          note: "Both sentences are correct — the grammar changes with the verb 'is'.",
        },
        {
          type: "warning",
          title: "Common mistake",
          text: "'I have a phone black' is WRONG. Say 'I have a black phone.' The color comes first!",
        },
        {
          type: "practice",
          title: "Practice: the color rule",
          exerciseIds: ["p1-1-3-mcq-1", "p1-1-3-ms-1"],
        },
      ],
    },
    {
      id: "colors-in-sentences",
      title: "What color is it?",
      blocks: [
        {
          type: "heading",
          text: "Asking about colors",
          translation: "Preguntar por colores",
        },
        {
          type: "dialogue",
          title: "In the classroom",
          context: "A teacher and a student look at a picture.",
          lines: [
            { speaker: "Teacher", text: "Look! What color is the cat?", translation: "¡Mira! ¿De qué color es el gato?" },
            { speaker: "Student", text: "The cat is black.", translation: "El gato es negro." },
            { speaker: "Teacher", text: "Good! And the flowers?", translation: "¡Bien! ¿Y las flores?" },
            { speaker: "Student", text: "The flowers are pink and yellow.", translation: "Las flores son rosas y amarillas." },
          ],
        },
        {
          type: "example",
          title: "What color is ...? / What color are ...?",
          items: [
            { english: "What color is it? — It's green.", translation: "¿De qué color es? — Es verde." },
            { english: "What color are your shoes? — They're white.", translation: "¿De qué color son tus zapatos? — Son blancos." },
          ],
        },
        {
          type: "practice",
          title: "Practice: colors in sentences",
          exerciseIds: ["p1-1-3-match-1", "p1-1-3-cs-1", "p1-1-3-cm-1"],
        },
      ],
    },
    {
      id: "your-favorite-color",
      title: "Your favorite color",
      blocks: [
        {
          type: "heading",
          text: "Talk about your favorite color",
          translation: "Habla de tu color favorito",
        },
        {
          type: "text",
          text: "'Favorite' means the one you like most. Use this question and answer in real conversations today.",
          translation:
            "'Favorite' significa el que más te gusta. Usa esta pregunta y respuesta en conversaciones reales hoy.",
        },
        {
          type: "example",
          title: "Favorite things",
          items: [
            { english: "What's your favorite color? — My favorite color is blue.", translation: "¿Cuál es tu color favorito? — Mi color favorito es el azul." },
            { english: "I like green. Green is my favorite color.", translation: "Me gusta el verde. El verde es mi color favorito." },
          ],
        },
        {
          type: "practice",
          title: "Practice: talk about colors",
          exerciseIds: ["p1-1-3-sa-1", "p1-1-3-wr-1"],
        },
        {
          type: "homework",
          title: "Homework",
          tasks: [
            "Find three things around you and say their colors out loud: 'The door is brown.'",
            "Ask a friend or family member: 'What's your favorite color?' — in English!",
            "Write one sentence with a color + thing ('I have a red ...').",
          ],
        },
      ],
    },
  ],
  summary: {
    keyPoints: [
      "Ten color words: red, blue, green, yellow, orange, purple, pink, brown, black, white.",
      "Color comes BEFORE the thing: 'a red apple', not 'an apple red'.",
      "Ask with 'What color is ...?' and answer with 'It's ... / They're ...'.",
    ],
    vocabulary: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "What color is it?", "favorite"],
  },
  assessment: {
    questionCount: 5,
    passScore: 0.7,
    bank: [
      "p1-1-3-b-mcq-1",
      "p1-1-3-b-cm-1",
      "p1-1-3-b-match-1",
      "p1-1-3-b-cs-1",
      "p1-1-3-b-sa-1",
    ],
  },
};

// ---------------------------------------------------------------------------
// p1-2-1 — My Family
// ---------------------------------------------------------------------------

const family: Lesson = {
  slug: "p1-2-1",
  levelId: "pre-a1",
  unit: 2,
  title: "My Family",
  description:
    "Name the people in your family and introduce them with 'This is my ...'.",
  estimatedMinutes: 20,
  sections: [
    {
      id: "family-words",
      title: "Family words",
      blocks: [
        {
          type: "heading",
          text: "The people in your family",
          translation: "Las personas de tu familia",
        },
        {
          type: "text",
          text: "Family is one of the first things we talk about when we meet people. Learn these six words first.",
          translation:
            "La familia es de los primeros temas de conversación al conocer a alguien. Aprende primero estas seis palabras.",
        },
        {
          type: "vocabulary-list",
          title: "Close family",
          words: [
            {
              word: "mother",
              partOfSpeech: "noun",
              definition: "your female parent",
              translation: "madre",
              example: { english: "My mother is a nurse.", translation: "Mi madre es enfermera." },
            },
            {
              word: "father",
              partOfSpeech: "noun",
              definition: "your male parent",
              translation: "padre",
              example: { english: "My father cooks dinner.", translation: "Mi padre cocina la cena." },
            },
            {
              word: "sister",
              partOfSpeech: "noun",
              definition: "a girl with the same parents as you",
              translation: "hermana",
              example: { english: "I have one sister.", translation: "Tengo una hermana." },
            },
            {
              word: "brother",
              partOfSpeech: "noun",
              definition: "a boy with the same parents as you",
              translation: "hermano",
              example: { english: "My brother is ten.", translation: "Mi hermano tiene diez años." },
            },
            {
              word: "grandmother",
              partOfSpeech: "noun",
              definition: "your mother's or father's mother",
              translation: "abuela",
            },
            {
              word: "grandfather",
              partOfSpeech: "noun",
              definition: "your mother's or father's father",
              translation: "abuelo",
            },
          ],
        },
        {
          type: "definition",
          term: "parents",
          partOfSpeech: "noun (plural)",
          definition: "your mother and your father together",
          translation: "padres",
          example: { english: "My parents are teachers.", translation: "Mis padres son profesores." },
        },
        {
          type: "note",
          title: "Mum and Dad",
          text: "In friendly English, people often say 'mum'/'mom' and 'dad' instead of 'mother' and 'father'.",
        },
      ],
    },
    {
      id: "this-is-my",
      title: "This is my ...",
      blocks: [
        {
          type: "heading",
          text: "Introduce your family",
          translation: "Presenta a tu familia",
        },
        {
          type: "text",
          text: "When you show a photo or point at a person, start with 'This is my ...'. That is all you need for your first family conversation.",
          translation:
            "Cuando enseñas una foto o señalas a alguien, empieza con 'This is my ...'. Eso es todo lo que necesitas para tu primera conversación sobre la familia.",
        },
        {
          type: "dialogue",
          title: "Sofia shows a photo",
          context: "Sofia shows her friend Mia a family photo.",
          lines: [
            { speaker: "Mia", text: "Oh, a photo! Who is she?", translation: "¡Oh, una foto! ¿Quién es ella?" },
            { speaker: "Sofia", text: "This is my sister. Her name is Ana.", translation: "Esta es mi hermana. Se llama Ana." },
            { speaker: "Mia", text: "She's tall! And who is this?", translation: "¡Es alta! ¿Y quién es este?" },
            { speaker: "Sofia", text: "This is my grandfather. He is seventy.", translation: "Este es mi abuelo. Tiene setenta años." },
          ],
        },
        {
          type: "audio",
          label: "Listen: who is she?",
          text: "Who is she? This is my sister. Her name is Ana. And who is this? This is my grandfather.",
          rate: 0.8,
        },
        {
          type: "practice",
          title: "Practice: this is my ...",
          exerciseIds: ["p1-2-1-ra-1", "p1-2-1-match-1", "p1-2-1-mcq-1"],
        },
      ],
    },
    {
      id: "family-possessives",
      title: "My, your, his, her",
      blocks: [
        {
          type: "heading",
          text: "Say who things belong to",
          translation: "Decir de quién son las cosas",
        },
        {
          type: "table",
          title: "Possessive words",
          headers: ["Person", "Possessive", "Example"],
          rows: [
            ["I", "my", "This is my mother."],
            ["you", "your", "Is this your sister?"],
            ["he", "his", "His brother is tall."],
            ["she", "her", "Her father is a doctor."],
          ],
          caption: "One possessive word for each person.",
        },
        {
          type: "grammar-rule",
          title: "Possessive with 's",
          rule: "Add 's to a person to show something belongs to them: Ana's brother = the brother of Ana.",
          explanation:
            "You can also say who owns a thing with a name + 's. This is very common in questions like 'What's your sister's name?'",
          examples: [
            { english: "This is Ana's bag.", translation: "Este es el bolso de Ana." },
            { english: "My brother's name is Leo.", translation: "Mi hermano se llama Leo." },
          ],
        },
        {
          type: "warning",
          title: "his vs. her",
          text: "'His' is for a boy or a man, 'her' is for a girl or a woman — it depends on the OWNER, not on the thing. 'Her brother' = the brother of a girl.",
        },
        {
          type: "practice",
          title: "Practice: my, your, his, her",
          exerciseIds: ["p1-2-1-tr-1", "p1-2-1-tr-2", "p1-2-1-cs-1"],
        },
      ],
    },
    {
      id: "family-reading",
      title: "Read about a family",
      blocks: [
        {
          type: "heading",
          text: "Reading time",
          translation: "Hora de leer",
        },
        {
          type: "text",
          text: "Read this short text slowly. You know all the words. Then answer the questions.",
          translation:
            "Lee este texto corto despacio. Ya conoces todas las palabras. Luego responde las preguntas.",
        },
        {
          type: "practice",
          title: "Reading practice",
          exerciseIds: ["p1-2-1-read-1", "p1-2-1-read-2", "p1-2-1-dict-1", "p1-2-1-sa-1"],
        },
        {
          type: "practice",
          title: "Writing and speaking",
          exerciseIds: ["p1-2-1-wr-1", "p1-2-1-sp-1"],
        },
        {
          type: "homework",
          title: "Homework",
          tasks: [
            "Draw or find a family photo and say out loud: 'This is my ...' for three people.",
            "Write two sentences: one with 'my sister's name' or 'my brother's name'.",
            "Teach the six family words to someone at home — in English.",
          ],
        },
      ],
    },
  ],
  summary: {
    keyPoints: [
      "Family words: mother, father, sister, brother, grandmother, grandfather.",
      "Introduce people with 'This is my ...'.",
      "my / your / his / her show who things belong to.",
      "Name + 's = belonging: 'Ana's brother'.",
    ],
    vocabulary: ["mother", "father", "sister", "brother", "grandmother", "grandfather", "parents", "This is my...", "Who is she?", "my brother's name"],
  },
  assessment: {
    questionCount: 5,
    passScore: 0.7,
    bank: [
      "p1-2-1-b-mcq-1",
      "p1-2-1-b-match-1",
      "p1-2-1-b-tr-1",
      "p1-2-1-b-read-1",
      "p1-2-1-b-cm-1",
      "p1-2-1-b-ra-1",
    ],
  },
};

export const preA1Lessons: Lesson[] = [greetings, numbers, colors, family];
