/**
 * Listening Lab — BAND EXPANSION activities.
 *
 * Seven new activities covering the PROMPT 37 band requirements:
 * - Elementary: everyday instructions, questions & answers.
 * - Intermediate: narratives, interviews, informational passages.
 * - Advanced: presentations, academic listening.
 *
 * All audio is original TalkSy material synthesised on-device from these
 * scripts — no external audio services.
 */

import type { ListeningActivity } from "./types";

export const expansionActivities: ListeningActivity[] = [
  // =========================================================================
  // Elementary band — Everyday instructions
  // =========================================================================
  {
    id: "ls-x1",
    slug: "following-instructions",
    stage: "instructions",
    title: "Following Instructions",
    description:
      "Recipes, classroom rules and phone directions — catch the verbs and the order they come in.",
    estimatedMinutes: 7,
    tags: ["instructions", "imperatives", "sequencing"],
    transcriptPolicy: "locked",
    audio: { rate: 0.85, gapMs: 500 },
    segments: [
      {
        id: "s1",
        text: "First, wash the rice under cold water for two minutes.",
        translation: "Primero, lava el arroz con agua fría durante dos minutos.",
        pauseAfterMs: 600,
      },
      {
        id: "s2",
        text: "Then, put the rice in a pot with three cups of water and a little salt.",
        translation: "Luego, pon el arroz en una olla con tres tazas de agua y un poco de sal.",
        pauseAfterMs: 600,
      },
      {
        id: "s3",
        text: "Cover the pot and cook it on a low heat for fifteen minutes.",
        translation: "Tapa la olla y cocínalo a fuego lento durante quince minutos.",
        pauseAfterMs: 600,
      },
      {
        id: "s4",
        text: "Don't open the lid while it's cooking — the steam does the work.",
        translation: "No abras la tapa mientras se cocina; el vapor hace el trabajo.",
        pauseAfterMs: 600,
      },
      {
        id: "s5",
        text: "Finally, turn off the heat and wait five minutes before you serve it.",
        translation: "Finalmente, apaga el fuego y espera cinco minutos antes de servirlo.",
        pauseAfterMs: 600,
      },
      {
        id: "s6",
        text: "Excuse me, how do I get to the library from here? Go straight ahead and turn left at the post office. It's the big grey building opposite the park. You can't miss it.",
        translation:
          "Disculpe, ¿cómo llego a la biblioteca desde aquí? Siga recto y gire a la izquierda en la oficina de correos. Es el edificio gris grande frente al parque. No puede perdérselo.",
        pauseAfterMs: 700,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "listen-arrange",
        difficulty: "easy",
        prompt: "Listen to the recipe and put the steps in the order you heard them.",
        hints: ["Order words are your map: 'First…', 'Then…', 'Finally…'."],
        segmentIds: ["s1", "s2", "s3", "s5"],
        items: [
          { id: "i1", text: "Wait five minutes before serving" },
          { id: "i2", text: "Wash the rice" },
          { id: "i3", text: "Cook on a low heat for fifteen minutes" },
          { id: "i4", text: "Put the rice in a pot with water and salt" },
        ],
        correctOrder: ["i2", "i4", "i3", "i1"],
        feedback: {
          correctAnswer: "Wash → pot → cook → wait",
          explanation:
            "The order words give it away: 'First, wash…', 'Then, put…', 'cook… for fifteen minutes', 'Finally… wait five minutes'.",
          revealSegments: [
            "First, wash the rice under cold water for two minutes.",
            "Then, put the rice in a pot with three cups of water and a little salt.",
            "Cover the pot and cook it on a low heat for fifteen minutes.",
            "Finally, turn off the heat and wait five minutes before you serve it.",
          ],
        },
      },
      {
        id: "x2",
        format: "listen-complete",
        difficulty: "medium",
        prompt: "Listen and complete: 'Cover the pot and cook it on a low heat for ______.'",
        hints: ["A number of minutes — listen for the number."],
        segmentIds: ["s3"],
        template: "Cover the pot and cook it on a low heat for {1}.",
        blanks: [{ id: "b1", acceptedAnswers: ["fifteen minutes", "15 minutes", "fifteen"] }],
        feedback: {
          correctAnswer: "fifteen minutes",
          explanation: "'For fifteen minutes' — the speaker says the exact cooking time.",
          revealSegments: ["Cover the pot and cook it on a low heat for fifteen minutes."],
        },
      },
      {
        id: "x3",
        format: "listen-select",
        difficulty: "medium",
        prompt: "What does the speaker say NOT to do while the rice is cooking?",
        hints: ["One instruction is negative — listen for 'don't'."],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "Don't open the lid" },
          { id: "o2", text: "Don't add more salt" },
          { id: "o3", text: "Don't stir the rice" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Don't open the lid",
          explanation:
            "'Don't open the lid while it's cooking — the steam does the work.' Negative imperatives start with 'don't'.",
          whyWrong: "Salt is mentioned earlier as something you DO add; stirring is never mentioned.",
          revealSegments: ["Don't open the lid while it's cooking — the steam does the work."],
        },
      },
      {
        id: "x4",
        format: "specific-info",
        difficulty: "medium",
        prompt: "Listen to the directions. Where is the library?",
        hints: ["Catch the landmark and the building's colour."],
        segmentIds: ["s6"],
        options: [
          { id: "o1", text: "Opposite the park, a big grey building" },
          { id: "o2", text: "Next to the post office, a small white building" },
          { id: "o3", text: "Behind the post office, a big red building" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Opposite the park — a big grey building",
          explanation:
            "'It's the big grey building opposite the park.' You turn left AT the post office, but the library is opposite the park.",
          whyWrong:
            "The post office is where you turn, not where the library is; and the building is grey, not red or white.",
          revealSegments: [
            "Go straight ahead and turn left at the post office. It's the big grey building opposite the park.",
          ],
        },
      },
    ],
  },

  // =========================================================================
  // Elementary band — Questions & answers
  // =========================================================================
  {
    id: "ls-x2",
    slug: "questions-and-answers",
    stage: "question-answer",
    title: "Questions and Answers",
    description:
      "Rapid questions and short answers — catch the question word, and the answer almost writes itself.",
    estimatedMinutes: 7,
    tags: ["questions", "answers", "everyday"],
    speakers: [
      { id: "host", name: "Maya", role: "Presenter" },
      { id: "guest", name: "Tom", role: "Street-interview guest" },
    ],
    transcriptPolicy: "locked",
    audio: { rate: 0.9, gapMs: 500 },
    segments: [
      { id: "s1", speakerId: "host", text: "Hi! Quick questions for our street survey. What's your name?", pauseAfterMs: 400 },
      { id: "s2", speakerId: "guest", text: "Hi, I'm Tom.", pauseAfterMs: 600 },
      { id: "s3", speakerId: "host", text: "Where do you live, Tom?", pauseAfterMs: 400 },
      { id: "s4", speakerId: "guest", text: "I live in the north of the city, near the old bridge.", pauseAfterMs: 600 },
      { id: "s5", speakerId: "host", text: "And what do you do? Do you work or study?", pauseAfterMs: 400 },
      { id: "s6", speakerId: "guest", text: "I work at a bakery. I start at four in the morning, so I sleep early.", pauseAfterMs: 600 },
      { id: "s7", speakerId: "host", text: "Four in the morning! Last question: what do you usually have for breakfast?", pauseAfterMs: 400 },
      { id: "s8", speakerId: "guest", text: "Honestly? Bread, of course. The freshest bread in the city!", pauseAfterMs: 600 },
    ],
    exercises: [
      {
        id: "x1",
        format: "speaker-identify",
        difficulty: "easy",
        prompt: "Who asks the questions in this interview?",
        hints: ["The presenter's voice starts and ends each exchange."],
        segmentIds: ["s1", "s2"],
        options: [
          { id: "o1", text: "Maya, the presenter" },
          { id: "o2", text: "Tom, the guest" },
          { id: "o3", text: "Both together" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Maya, the presenter",
          explanation: "Maya opens with 'Hi! Quick questions for our street survey. What's your name?'",
          revealSegments: ["Hi! Quick questions for our street survey. What's your name?"],
        },
      },
      {
        id: "x2",
        format: "specific-info",
        difficulty: "medium",
        prompt: "Listen: where does Tom live?",
        hints: ["Catch the part of the city and a landmark."],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "In the north of the city, near the old bridge" },
          { id: "o2", text: "In the south of the city, near the station" },
          { id: "o3", text: "In the city centre, near the bakery" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "The north of the city, near the old bridge",
          explanation: "Tom says 'I live in the north of the city, near the old bridge.'",
          revealSegments: ["I live in the north of the city, near the old bridge."],
        },
      },
      {
        id: "x3",
        format: "listen-answer",
        difficulty: "medium",
        prompt: "What time does Tom start work? Type your answer.",
        hints: ["Listen to his answer about the bakery — it's earlier than most jobs."],
        segmentIds: ["s6"],
        acceptedAnswers: ["four in the morning", "4 in the morning", "4am", "4 am", "four am", "at four", "four"],
        keywords: ["four", "morning"],
        feedback: {
          correctAnswer: "Four in the morning",
          explanation: "'I start at four in the morning, so I sleep early.' — that's why he sleeps early!",
          revealSegments: ["I work at a bakery. I start at four in the morning, so I sleep early."],
        },
      },
      {
        id: "x4",
        format: "overall-meaning",
        difficulty: "medium",
        prompt: "Why does Tom say he eats bread for breakfast?",
        hints: ["Think about his job — what does a bakery have plenty of?"],
        segmentIds: ["s8"],
        options: [
          { id: "o1", text: "He works at a bakery, so he always has fresh bread" },
          { id: "o2", text: "He thinks bread is the healthiest breakfast" },
          { id: "o3", text: "Bread is the only food he can afford" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "He works at a bakery — 'The freshest bread in the city!'",
          explanation:
            "Connecting his job (segment 6) with his answer (segment 8) gives the meaning: working at a bakery means the freshest bread is right there.",
          whyWrong: "He never says bread is the healthiest or cheapest — he says it's the freshest.",
          revealSegments: [
            "I work at a bakery. I start at four in the morning, so I sleep early.",
            "Honestly? Bread, of course. The freshest bread in the city!",
          ],
        },
      },
    ],
  },

  // =========================================================================
  // Intermediate band — Narratives
  // =========================================================================
  {
    id: "ls-x3",
    slug: "the-lighthouse-keeper-radio",
    stage: "narratives",
    title: "The Lighthouse Keeper",
    description:
      "A radio story about a keeper, a storm and a decision — longer narrative listening with past tenses.",
    estimatedMinutes: 9,
    tags: ["narrative", "story", "past tenses"],
    transcriptPolicy: "locked",
    audio: { rate: 0.95, gapMs: 550 },
    segments: [
      {
        id: "s1",
        text: "For thirty-one years, Edith Marsh was the keeper of the Point Clare lighthouse.",
        translation: "Durante treinta y un años, Edith Marsh fue la guardiana del faro de Point Clare.",
        pauseAfterMs: 500,
      },
      {
        id: "s2",
        text: "She had inherited the job from her father, who had kept the light burning through two wars.",
        translation: "Había heredado el trabajo de su padre, que había mantenido la luz encendida durante dos guerras.",
        pauseAfterMs: 500,
      },
      {
        id: "s3",
        text: "Every evening at sunset she climbed the hundred and twelve steps, trimmed the wick, and lit the lamp.",
        translation: "Cada tarde al atardecer subía los ciento doce escalones, recortaba la mecha y encendía la lámpara.",
        pauseAfterMs: 500,
      },
      {
        id: "s4",
        text: "On the night of the great storm of 1952, the wind arrived without warning and the rain fell sideways.",
        translation: "La noche de la gran tormenta de 1952, el viento llegó sin aviso y la lluvia caía de lado.",
        pauseAfterMs: 500,
      },
      {
        id: "s5",
        text: "Halfway up the tower, Edith heard the sound every keeper feared: the fog signal from a ship far too close to the rocks.",
        translation: "A mitad de camino en la torre, Edith oyó el sonido que todo guardián temía: la señal de niebla de un barco demasiado cerca de las rocas.",
        pauseAfterMs: 500,
      },
      {
        id: "s6",
        text: "The electricity had failed, and the backup generator refused to start.",
        translation: "La electricidad había fallado y el generador de reserva no arrancaba.",
        pauseAfterMs: 500,
      },
      {
        id: "s7",
        text: "So Edith did what her father had taught her: she carried the old oil lamp up the last fifty steps and signalled by hand until dawn.",
        translation: "Así que Edith hizo lo que su padre le había enseñado: llevó la vieja lámpara de aceite por los últimos cincuenta escalones y hizo señales a mano hasta el amanecer.",
        pauseAfterMs: 500,
      },
      {
        id: "s8",
        text: "The ship, a fishing boat with nine aboard, found the harbour in the dark. All nine men came home.",
        translation: "El barco, un pesquero con nueve tripulantes, encontró el puerto en la oscuridad. Los nueve hombres volvieron a casa.",
        pauseAfterMs: 500,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "listen-select",
        difficulty: "medium",
        prompt: "How long was Edith the keeper of the lighthouse?",
        hints: ["Listen for the number of years at the very start."],
        segmentIds: ["s1"],
        options: [
          { id: "o1", text: "Thirty-one years" },
          { id: "o2", text: "Thirteen years" },
          { id: "o3", text: "Fifty-two years" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Thirty-one years",
          explanation: "'For thirty-one years, Edith Marsh was the keeper…' — the story opens with the duration.",
          whyWrong: "1952 is the year of the storm, not her length of service; thirteen is a distractor.",
          revealSegments: ["For thirty-one years, Edith Marsh was the keeper of the Point Clare lighthouse."],
        },
      },
      {
        id: "x2",
        format: "listen-arrange",
        difficulty: "medium",
        prompt: "Put the storm-night events in the order they happened.",
        hints: ["What failed first — the weather, the power, or the ship's signal?"],
        segmentIds: ["s4", "s5", "s6", "s7"],
        items: [
          { id: "i1", text: "She heard a ship's fog signal near the rocks" },
          { id: "i2", text: "The storm arrived without warning" },
          { id: "i3", text: "She carried an oil lamp up and signalled by hand" },
          { id: "i4", text: "The electricity failed and the generator would not start" },
        ],
        correctOrder: ["i2", "i1", "i4", "i3"],
        feedback: {
          correctAnswer: "Storm → ship's signal → power failure → hand signalling",
          explanation:
            "The storm arrives (s4), she hears the ship (s5), then the power fails (s6), and finally she carries the oil lamp up (s7).",
          revealSegments: [
            "On the night of the great storm of 1952, the wind arrived without warning…",
            "…Edith heard the sound every keeper feared: the fog signal from a ship far too close to the rocks.",
            "The electricity had failed, and the backup generator refused to start.",
            "…she carried the old oil lamp up the last fifty steps and signalled by hand until dawn.",
          ],
        },
      },
      {
        id: "x3",
        format: "listen-answer",
        difficulty: "hard",
        prompt: "How many people were on the fishing boat? Type the number as a word.",
        hints: ["The very last sentence counts the crew."],
        segmentIds: ["s8"],
        acceptedAnswers: ["nine", "9"],
        keywords: ["nine"],
        feedback: {
          correctAnswer: "Nine",
          explanation: "'…a fishing boat with nine aboard… All nine men came home.'",
          revealSegments: [
            "The ship, a fishing boat with nine aboard, found the harbour in the dark. All nine men came home.",
          ],
        },
      },
      {
        id: "x4",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "Why did Edith's father matter to this story?",
        hints: ["What did she inherit from him — and what did he teach her?"],
        segmentIds: ["s2", "s7"],
        options: [
          { id: "o1", text: "He gave her both the job and the skills that saved the boat" },
          { id: "o2", text: "He owned the harbour where the boat arrived" },
          { id: "o3", text: "He was the captain of the fishing boat" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "He gave her the job and the skills",
          explanation:
            "She 'inherited the job from her father' (s2) and 'did what her father had taught her' (s7) — both the position and the rescue skill come from him.",
          whyWrong: "The father is never described as owning the harbour or captaining the boat.",
          revealSegments: [
            "She had inherited the job from her father, who had kept the light burning through two wars.",
            "So Edith did what her father had taught her…",
          ],
        },
      },
    ],
  },

  // =========================================================================
  // Intermediate band — Interviews
  // =========================================================================
  {
    id: "ls-x4",
    slug: "podcast-interview",
    stage: "interviews",
    title: "The Street Food Podcast",
    description:
      "A podcast host interviews a chef about her food truck — opinions, reasons and small talk mixed together.",
    estimatedMinutes: 9,
    tags: ["interview", "podcast", "food"],
    speakers: [
      { id: "host", name: "Daniel", role: "Podcast host" },
      { id: "guest", name: "Aisha", role: "Chef" },
    ],
    transcriptPolicy: "locked",
    audio: { rate: 1, gapMs: 500 },
    segments: [
      { id: "s1", speakerId: "host", text: "Welcome back to City Bites. My guest today runs the most photographed food truck in the East Market. Aisha, welcome!", pauseAfterMs: 500 },
      { id: "s2", speakerId: "guest", text: "Thank you, Daniel. Although I have to say, the photographs are usually of the queue, not the food!", pauseAfterMs: 600 },
      { id: "s3", speakerId: "host", text: "Let's start at the beginning. Why did you leave your restaurant job to cook from a truck?", pauseAfterMs: 500 },
      { id: "s4", speakerId: "guest", text: "Honestly? The restaurant kitchen was a beautiful machine, but I never met the people eating my food. In the truck, I watch their faces with the first bite. That's the whole reason I cook.", pauseAfterMs: 700 },
      { id: "s5", speakerId: "host", text: "Your grandmother's recipes are famous on the menu. How did she react when you started selling them?", pauseAfterMs: 500 },
      { id: "s6", speakerId: "guest", text: "She was suspicious for about a month. Then she tasted the chickpea stew — my biggest seller — and said the spices were almost right. From my grandmother, 'almost right' is a medal of honour.", pauseAfterMs: 700 },
      { id: "s7", speakerId: "host", text: "One final question. What's the one thing people get wrong about street food?", pauseAfterMs: 500 },
      { id: "s8", speakerId: "guest", text: "That it's fast to make. My stew simmers for six hours before the truck even leaves my driveway. Good food takes time, wherever you cook it.", pauseAfterMs: 700 },
    ],
    exercises: [
      {
        id: "x1",
        format: "specific-info",
        difficulty: "medium",
        prompt: "Why did Aisha leave her restaurant job?",
        hints: ["Listen for what she missed in the restaurant kitchen."],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "She never met the people eating her food" },
          { id: "o2", text: "The restaurant paid too little" },
          { id: "o3", text: "The kitchen was too small" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "She never met the people eating her food",
          explanation:
            "'The restaurant kitchen was a beautiful machine, but I never met the people eating my food.' — the 'but' clause carries the real reason.",
          revealSegments: [
            "Honestly? The restaurant kitchen was a beautiful machine, but I never met the people eating my food.",
          ],
        },
      },
      {
        id: "x2",
        format: "listen-select",
        difficulty: "medium",
        prompt: "How did Aisha's grandmother react at first?",
        hints: ["Catch her reaction in the first month."],
        segmentIds: ["s6"],
        options: [
          { id: "o1", text: "She was suspicious for about a month" },
          { id: "o2", text: "She was immediately proud" },
          { id: "o3", text: "She refused to speak to Aisha" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "She was suspicious for about a month",
          explanation:
            "'She was suspicious for about a month. Then she tasted the chickpea stew…' — pride came later.",
          revealSegments: ["She was suspicious for about a month. Then she tasted the chickpea stew…"],
        },
      },
      {
        id: "x3",
        format: "listen-complete",
        difficulty: "hard",
        prompt: "Listen and complete: 'My stew simmers for ______ before the truck even leaves my driveway.'",
        hints: ["How long does good food take?"],
        segmentIds: ["s8"],
        template: "My stew simmers for {1} before the truck even leaves my driveway.",
        blanks: [{ id: "b1", acceptedAnswers: ["six hours", "6 hours", "six"] }],
        feedback: {
          correctAnswer: "six hours",
          explanation: "'My stew simmers for six hours' — the exact cooking time she names.",
          revealSegments: ["My stew simmers for six hours before the truck even leaves my driveway."],
        },
      },
      {
        id: "x4",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "What does Aisha mean by 'From my grandmother, almost right is a medal of honour'?",
        hints: ["Think about how demanding her grandmother is."],
        segmentIds: ["s6"],
        options: [
          { id: "o1", text: "Her grandmother is so demanding that near-praise is high praise" },
          { id: "o2", text: "Her grandmother will give her a real medal" },
          { id: "o3", text: "The recipe is not good enough yet" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Her grandmother rarely praises, so 'almost right' counts as a huge compliment",
          explanation:
            "A medal of honour is a great honour. If 'almost right' feels like one, the grandmother must give praise very rarely.",
          whyWrong: "There is no real medal, and Aisha clearly treats the comment as a triumph, not a failure.",
          revealSegments: ["…said the spices were almost right. From my grandmother, 'almost right' is a medal of honour."],
        },
      },
    ],
  },

  // =========================================================================
  // Intermediate band — Informational passages
  // =========================================================================
  {
    id: "ls-x5",
    slug: "life-in-the-antarctic",
    stage: "informational",
    title: "Life in the Antarctic",
    description:
      "A radio segment about a research station — numbers, facts and comparisons you need to catch.",
    estimatedMinutes: 9,
    tags: ["informational", "science", "numbers"],
    transcriptPolicy: "locked",
    audio: { rate: 0.95, gapMs: 550 },
    segments: [
      {
        id: "s1",
        text: "The Halley Research Station sits on a floating ice shelf, fifteen hundred kilometres from the South Pole.",
        translation: "La estación de investigación Halley se encuentra sobre una plataforma de hielo flotante, a mil quinientos kilómetros del Polo Sur.",
        pauseAfterMs: 500,
      },
      {
        id: "s2",
        text: "During the summer, around seventy scientists live and work there. In the winter, the number drops to sixteen.",
        translation: "Durante el verano, unos setenta científicos viven y trabajan allí. En invierno, la cifra baja a dieciséis.",
        pauseAfterMs: 500,
      },
      {
        id: "s3",
        text: "Temperatures in winter can fall to minus fifty-five degrees, and the sun does not rise for more than one hundred days.",
        translation: "En invierno las temperaturas pueden bajar hasta menos cincuenta y cinco grados, y el sol no sale durante más de cien días.",
        pauseAfterMs: 500,
      },
      {
        id: "s4",
        text: "The station's buildings stand on giant legs that can be raised above the snow, which accumulates by about a metre every year.",
        translation: "Los edificios de la estación se apoyan sobre patas gigantes que se pueden elevar sobre la nieve, que se acumula un metro cada año.",
        pauseAfterMs: 500,
      },
      {
        id: "s5",
        text: "Fresh food arrives just twice a year, so the kitchen keeps months of frozen and tinned supplies.",
        translation: "La comida fresca llega solo dos veces al año, así que la cocina guarda meses de provisiones congeladas y enlatadas.",
        pauseAfterMs: 500,
      },
      {
        id: "s6",
        text: "Despite the cold, the team measures ozone, ice thickness and even penguin colonies from the station.",
        translation: "A pesar del frío, el equipo mide el ozono, el grosor del hielo e incluso colonias de pingüinos desde la estación.",
        pauseAfterMs: 500,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "specific-info",
        difficulty: "medium",
        prompt: "How far is the Halley station from the South Pole?",
        hints: ["The distance is given at the very beginning."],
        segmentIds: ["s1"],
        options: [
          { id: "o1", text: "1,500 kilometres" },
          { id: "o2", text: "15,000 kilometres" },
          { id: "o3", text: "150 kilometres" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "1,500 kilometres",
          explanation: "'…fifteen hundred kilometres from the South Pole' — fifteen hundred = 1,500.",
          revealSegments: [
            "The Halley Research Station sits on a floating ice shelf, fifteen hundred kilometres from the South Pole.",
          ],
        },
      },
      {
        id: "x2",
        format: "listen-complete",
        difficulty: "hard",
        prompt: "Listen and complete: 'In the winter, the number drops to ______.'",
        hints: ["A small number — much smaller than seventy."],
        segmentIds: ["s2"],
        template: "In the winter, the number drops to {1}.",
        blanks: [{ id: "b1", acceptedAnswers: ["sixteen", "16"] }],
        feedback: {
          correctAnswer: "sixteen",
          explanation: "About seventy scientists in summer, but only sixteen stay through the winter.",
          revealSegments: ["During the summer, around seventy scientists live and work there. In the winter, the number drops to sixteen."],
        },
      },
      {
        id: "x3",
        format: "listen-select",
        difficulty: "hard",
        prompt: "Why are the station's buildings on giant legs?",
        hints: ["Listen for what the snow does every year."],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "Because the snow builds up about a metre every year" },
          { id: "o2", text: "Because the ice shelf cracks under heavy buildings" },
          { id: "o3", text: "Because penguins nest under the buildings" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Snow accumulates about a metre a year",
          explanation:
            "'…legs that can be raised above the snow, which accumulates by about a metre every year.' The 'which' refers to the snow.",
          revealSegments: [
            "The station's buildings stand on giant legs that can be raised above the snow, which accumulates by about a metre every year.",
          ],
        },
      },
      {
        id: "x4",
        format: "dictation",
        difficulty: "hard",
        prompt: "Type the sentence you hear about fresh food.",
        hints: ["How often does fresh food arrive? Listen twice if you need to."],
        segmentIds: ["s5"],
        acceptedAnswers: [
          "Fresh food arrives just twice a year, so the kitchen keeps months of frozen and tinned supplies.",
          "Fresh food arrives just twice a year so the kitchen keeps months of frozen and tinned supplies",
        ],
        keywords: ["fresh food", "twice a year", "frozen", "tinned"],
        feedback: {
          correctAnswer: "Fresh food arrives just twice a year, so the kitchen keeps months of frozen and tinned supplies.",
          explanation:
            "The key facts are 'twice a year' and the frozen and tinned supplies — both consequences of the isolation.",
          revealSegments: [
            "Fresh food arrives just twice a year, so the kitchen keeps months of frozen and tinned supplies.",
          ],
        },
      },
    ],
  },

  // =========================================================================
  // Advanced band — Presentations
  // =========================================================================
  {
    id: "ls-x6",
    slug: "conference-talk",
    stage: "presentations",
    title: "The City of Short Trips",
    description:
      "A conference talk about redesigning cities for fifteen-minute journeys — follow the structure and the data.",
    estimatedMinutes: 11,
    tags: ["presentation", "urban", "data"],
    transcriptPolicy: "locked",
    audio: { rate: 1, gapMs: 550 },
    segments: [
      {
        id: "s1",
        text: "Good morning. For the next twelve minutes I'd like to convince you of one idea: that the most important distance in a city is not the longest one, but the shortest one you travel every day.",
        pauseAfterMs: 600,
      },
      {
        id: "s2",
        text: "I'll make three arguments. First, that short trips shape our health. Second, that they shape our local economies. And third, that a simple design principle can transform both.",
        pauseAfterMs: 600,
      },
      {
        id: "s3",
        text: "Let's begin with health. Studies of commuters in forty cities found that people who walk or cycle for trips under two kilometres report measurably lower stress than those who drive the same distance.",
        pauseAfterMs: 600,
      },
      {
        id: "s4",
        text: "In Paris, after the city widened pavements and closed riverside roads to cars, cycling rose by roughly seventy per cent in five years.",
        pauseAfterMs: 600,
      },
      {
        id: "s5",
        text: "Now, my second argument: local economies. When streets slow down, shops survive. On redesigned streets in our study, retail sales per square metre grew about fifteen per cent, while car traffic fell by a quarter.",
        pauseAfterMs: 600,
      },
      {
        id: "s6",
        text: "Which brings me to the principle itself: the fifteen-minute city. The idea, popularised by Professor Carlos Moreno, is that everyone should be able to reach work, school, food and a doctor within fifteen minutes on foot or by bicycle.",
        pauseAfterMs: 600,
      },
      {
        id: "s7",
        text: "Critics say this is a war on cars. I'd answer that it's a war on the assumption that cars are the only way to move — an assumption, by the way, that most of our grandparents' cities never shared.",
        pauseAfterMs: 600,
      },
      {
        id: "s8",
        text: "So here is my closing invitation: measure the shortest trip you take tomorrow. Ask whether it could be walked. If the answer is no, that's not your failure — it's a design brief. Thank you.",
        pauseAfterMs: 600,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "What is the speaker's central idea?",
        hints: ["The opening sentence usually states the thesis."],
        segmentIds: ["s1"],
        options: [
          { id: "o1", text: "The shortest everyday trips matter most for city design" },
          { id: "o2", text: "Cars should be banned from all city centres" },
          { id: "o3", text: "Long commutes are the biggest urban problem" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "The most important distance is the shortest one you travel every day",
          explanation:
            "The thesis is stated in the opening: 'the most important distance in a city is not the longest one, but the shortest one you travel every day.'",
          whyWrong:
            "The speaker explicitly rejects the 'war on cars' framing, and he focuses on short trips rather than long commutes.",
          revealSegments: [
            "…the most important distance in a city is not the longest one, but the shortest one you travel every day.",
          ],
        },
      },
      {
        id: "x2",
        format: "listen-arrange",
        difficulty: "hard",
        prompt: "The talk has a signposted structure. Put the three arguments in the order they were announced.",
        hints: ["Listen to segment 2: 'First… Second… And third…'."],
        segmentIds: ["s2"],
        items: [
          { id: "i1", text: "A design principle: the fifteen-minute city" },
          { id: "i2", text: "Short trips and health" },
          { id: "i3", text: "Short trips and local economies" },
        ],
        correctOrder: ["i2", "i3", "i1"],
        feedback: {
          correctAnswer: "Health → local economies → the design principle",
          explanation:
            "'First, that short trips shape our health. Second, that they shape our local economies. And third, that a simple design principle can transform both.'",
          revealSegments: [
            "I'll make three arguments. First, that short trips shape our health. Second, that they shape our local economies. And third, that a simple design principle can transform both.",
          ],
        },
      },
      {
        id: "x3",
        format: "specific-info",
        difficulty: "hard",
        prompt: "Listen: by how much did cycling rise in Paris after the street changes?",
        hints: ["A percentage, over five years."],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "About seventy per cent" },
          { id: "o2", text: "About seventeen per cent" },
          { id: "o3", text: "About seven per cent" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "About seventy per cent in five years",
          explanation: "'…cycling rose by roughly seventy per cent in five years.'",
          whyWrong: "Seventeen and seven are classic number distractors — the figure is seventy.",
          revealSegments: ["In Paris, after the city widened pavements and closed riverside roads to cars, cycling rose by roughly seventy per cent in five years."],
        },
      },
      {
        id: "x4",
        format: "listen-answer",
        difficulty: "hard",
        prompt: "According to the speaker, who popularised the fifteen-minute city idea? Type the name.",
        hints: ["A professor's surname — spelled like the composer of 'Bella Ciao'? No: listen carefully."],
        segmentIds: ["s6"],
        acceptedAnswers: ["carlos moreno", "moreno", "professor carlos moreno", "professor moreno"],
        keywords: ["moreno"],
        feedback: {
          correctAnswer: "Professor Carlos Moreno",
          explanation: "'The idea, popularised by Professor Carlos Moreno…' — he is credited by name.",
          revealSegments: [
            "The idea, popularised by Professor Carlos Moreno, is that everyone should be able to reach work, school, food and a doctor within fifteen minutes on foot or by bicycle.",
          ],
        },
      },
      {
        id: "x5",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "How does the speaker respond to critics who call the fifteen-minute city 'a war on cars'?",
        hints: ["Listen to the segment about critics — what does he say it is a war on instead?"],
        segmentIds: ["s7"],
        options: [
          { id: "o1", text: "He reframes it as a war on the assumption that cars are the only option" },
          { id: "o2", text: "He accepts the label and says cars must lose" },
          { id: "o3", text: "He ignores the criticism entirely" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "It's a war on an assumption, not on cars",
          explanation:
            "'I'd answer that it's a war on the assumption that cars are the only way to move' — a classic reframe move in academic talks.",
          revealSegments: [
            "Critics say this is a war on cars. I'd answer that it's a war on the assumption that cars are the only way to move…",
          ],
        },
      },
    ],
  },

  // =========================================================================
  // Advanced band — Academic listening
  // =========================================================================
  {
    id: "ls-x7",
    slug: "seminar-discussion",
    stage: "academic",
    title: "The Memory Seminar",
    description:
      "A university seminar on how memory works — hedged claims, disagreement and academic register.",
    estimatedMinutes: 11,
    tags: ["academic", "seminar", "memory"],
    speakers: [
      { id: "tutor", name: "Dr. Okafor", role: "Seminar tutor" },
      { id: "student", name: "Priya", role: "Student" },
      { id: "student2", name: "Marc", role: "Student" },
    ],
    transcriptPolicy: "locked",
    audio: { rate: 1, gapMs: 550 },
    segments: [
      { id: "s1", speakerId: "tutor", text: "Last week we distinguished working memory from long-term memory. Today's question is trickier: is memory a recording, or is it a reconstruction?", pauseAfterMs: 600 },
      { id: "s2", speakerId: "student", text: "Could I start? I'd argue it's clearly a reconstruction. In the Loftus studies, people confidently remembered details that never happened — a stop sign that was actually a yield sign.", pauseAfterMs: 700 },
      { id: "s3", speakerId: "tutor", text: "Good use of evidence. Marc, you look sceptical.", pauseAfterMs: 500 },
      { id: "s4", speakerId: "student2", text: "I take the point about distortion, but I'd want to nuance it. If memory were pure reconstruction, how do we explain people with highly superior autobiographical memory, who can recall almost any day of their lives in detail?", pauseAfterMs: 700 },
      { id: "s5", speakerId: "student", text: "That's fair, but wouldn't you accept that those cases are, by definition, exceptional? What they demonstrate is the ceiling of memory, not its typical mode.", pauseAfterMs: 700 },
      { id: "s6", speakerId: "tutor", text: "Let me sharpen that exchange with a distinction from the reading: storage versus retrieval. It may be that information is stored fairly faithfully, while each act of retrieval edits it.", pauseAfterMs: 700 },
      { id: "s7", speakerId: "student2", text: "That distinction actually resolves some of my objection. The recording metaphor may fail at retrieval rather than at storage.", pauseAfterMs: 700 },
      { id: "s8", speakerId: "tutor", text: "Exactly. So for next week, I'd like you to evaluate one real-world practice — eyewitness testimony, say, or revision timetables — through the lens of storage versus retrieval. Bring examples, and be ready to defend them.", pauseAfterMs: 700 },
    ],
    exercises: [
      {
        id: "x1",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "What is the central question of the seminar?",
        hints: ["The tutor frames it in the opening turn."],
        segmentIds: ["s1"],
        options: [
          { id: "o1", text: "Is memory a recording or a reconstruction?" },
          { id: "o2", text: "How can memory be improved?" },
          { id: "o3", text: "What is the difference between working and long-term memory?" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Recording or reconstruction",
          explanation:
            "'Today's question is trickier: is memory a recording, or is it a reconstruction?' — working versus long-term memory was LAST week's topic.",
          whyWrong: "The working/long-term distinction is explicitly reviewed as previous material.",
          revealSegments: ["Last week we distinguished working memory from long-term memory. Today's question is trickier: is memory a recording, or is it a reconstruction?"],
        },
      },
      {
        id: "x2",
        format: "specific-info",
        difficulty: "hard",
        prompt: "Which detail from the Loftus studies does Priya cite?",
        hints: ["Two road signs are contrasted in her example."],
        segmentIds: ["s2"],
        options: [
          { id: "o1", text: "People remembered a stop sign that was actually a yield sign" },
          { id: "o2", text: "People forgot a red light they had seen" },
          { id: "o3", text: "People remembered a bridge that did not exist" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "A stop sign remembered where there was a yield sign",
          explanation: "'…people confidently remembered details that never happened — a stop sign that was actually a yield sign.'",
          revealSegments: ["…people confidently remembered details that never happened — a stop sign that was actually a yield sign."],
        },
      },
      {
        id: "x3",
        format: "speaker-identify",
        difficulty: "hard",
        prompt: "Who raises the case of people with highly superior autobiographical memory?",
        hints: ["Listen for who says 'I take the point… but I'd want to nuance it.'"],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "Marc" },
          { id: "o2", text: "Priya" },
          { id: "o3", text: "Dr. Okafor" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Marc",
          explanation:
            "Marc is the sceptic: after the tutor invites him ('Marc, you look sceptical'), he raises the exceptional-memory cases.",
          revealSegments: [
            "I take the point about distortion, but I'd want to nuance it. If memory were pure reconstruction, how do we explain people with highly superior autobiographical memory…",
          ],
        },
      },
      {
        id: "x4",
        format: "listen-select",
        difficulty: "hard",
        prompt: "What distinction does the tutor introduce to resolve the disagreement?",
        hints: ["Two words — one about keeping information, one about getting it out."],
        segmentIds: ["s6"],
        options: [
          { id: "o1", text: "Storage versus retrieval" },
          { id: "o2", text: "Short-term versus long-term" },
          { id: "o3", text: "Fact versus fiction" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Storage versus retrieval",
          explanation:
            "'…a distinction from the reading: storage versus retrieval.' Information may be stored faithfully but edited each time it is retrieved.",
          revealSegments: [
            "Let me sharpen that exchange with a distinction from the reading: storage versus retrieval.",
          ],
        },
      },
      {
        id: "x5",
        format: "dictation",
        difficulty: "hard",
        prompt: "Type the tutor's instruction for next week (the main task).",
        hints: ["The task is to evaluate one real-world practice through which lens?"],
        segmentIds: ["s8"],
        acceptedAnswers: [
          "Evaluate one real-world practice through the lens of storage versus retrieval",
          "evaluate one real-world practice through the lens of storage versus retrieval",
        ],
        keywords: ["evaluate", "real-world", "storage", "retrieval"],
        feedback: {
          correctAnswer: "Evaluate one real-world practice (e.g. eyewitness testimony) through the lens of storage versus retrieval",
          explanation:
            "The final turn sets the task: pick a practice like eyewitness testimony or revision timetables and analyse it via storage versus retrieval.",
          revealSegments: [
            "…I'd like you to evaluate one real-world practice — eyewitness testimony, say, or revision timetables — through the lens of storage versus retrieval.",
          ],
        },
      },
    ],
  },
];
