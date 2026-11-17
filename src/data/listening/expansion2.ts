/**
 * Listening Lab — BAND EXPANSION activities, part 2.
 *
 * A second activity for each of the seven PROMPT 37 stages introduced in
 * expansion.ts, so every stage keeps the library's two-activities-per-stage
 * standard. All audio is original TalkSy material synthesised on-device.
 */

import type { ListeningActivity } from "./types";

export const expansion2Activities: ListeningActivity[] = [
  // =========================================================================
  // Everyday instructions — fire drill announcement
  // =========================================================================
  {
    id: "ls-x8",
    slug: "the-fire-drill",
    stage: "instructions",
    title: "The Fire Drill",
    description:
      "A school announcement walks everyone through a practice evacuation — numbers, rules and order matter.",
    estimatedMinutes: 7,
    tags: ["instructions", "announcements", "school"],
    transcriptPolicy: "locked",
    audio: { rate: 0.9, gapMs: 500 },
    segments: [
      {
        id: "s1",
        text: "Attention, please. This is a practice fire drill. There is no real fire, but you must follow every instruction exactly as if there were.",
        translation:
          "Atención, por favor. Este es un simulacro de incendio. No hay fuego real, pero deben seguir cada instrucción exactamente como si lo hubiera.",
        pauseAfterMs: 700,
      },
      {
        id: "s2",
        text: "When you hear the bell, stop what you are doing and stand behind your chair. Do not take your bag, your phone, or anything else with you.",
        translation:
          "Cuando oigan la campana, dejen lo que están haciendo y párense detrás de su silla. No tomen su mochila, su teléfono ni nada más.",
        pauseAfterMs: 700,
      },
      {
        id: "s3",
        text: "Leave the room in single file, quickly but without running. The student nearest to the door goes first and holds the door open.",
        translation:
          "Salgan del aula en fila india, rápido pero sin correr. El estudiante más cercano a la puerta sale primero y la mantiene abierta.",
        pauseAfterMs: 700,
      },
      {
        id: "s4",
        text: "Classes on the ground floor use the main exit. Classes upstairs use the side stairs by the library — never the main staircase.",
        translation:
          "Las clases de la planta baja usan la salida principal. Las clases de arriba usan las escaleras laterales junto a la biblioteca; nunca la escalera principal.",
        pauseAfterMs: 700,
      },
      {
        id: "s5",
        text: "Once outside, walk to the football field and stand with your class in two lines. Your teacher will count you and report the number to the office.",
        translation:
          "Una vez fuera, caminen al campo de fútbol y párense con su clase en dos filas. Su profesor los contará y reportará el número a la oficina.",
        pauseAfterMs: 700,
      },
      {
        id: "s6",
        text: "Wait quietly until you hear three short bells. That is the signal that the drill is over and you may return to the building.",
        translation:
          "Esperen en silencio hasta oír tres campanas cortas. Esa es la señal de que el simulacro terminó y pueden volver al edificio.",
        pauseAfterMs: 700,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "listen-select",
        difficulty: "easy",
        prompt: "What kind of event is this announcement about?",
        hints: ["The speaker explains it at the very start — and says it is not real."],
        segmentIds: ["s1"],
        options: [
          { id: "o1", text: "A practice fire drill" },
          { id: "o2", text: "A real emergency" },
          { id: "o3", text: "A sports event" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "A practice fire drill",
          explanation: "'This is a practice fire drill. There is no real fire…' — practice, not real.",
          revealSegments: [
            "Attention, please. This is a practice fire drill. There is no real fire…",
          ],
        },
      },
      {
        id: "x2",
        format: "listen-select",
        difficulty: "medium",
        prompt: "What must students NOT take with them?",
        hints: ["Listen for the negative instruction with 'do not take'."],
        segmentIds: ["s2"],
        options: [
          { id: "o1", text: "Their bag, phone, or anything else" },
          { id: "o2", text: "Their coat" },
          { id: "o3", text: "Their notebook" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Bag, phone, or anything else",
          explanation: "'Do not take your bag, your phone, or anything else with you.' — nothing at all.",
          revealSegments: ["Do not take your bag, your phone, or anything else with you."],
        },
      },
      {
        id: "x3",
        format: "specific-info",
        difficulty: "medium",
        prompt: "Which stairs must upstairs classes use?",
        hints: ["Two exits are mentioned — match the class location to the exit."],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "The side stairs by the library" },
          { id: "o2", text: "The main staircase" },
          { id: "o3", text: "The back stairs by the gym" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "The side stairs by the library",
          explanation: "'Classes upstairs use the side stairs by the library — never the main staircase.'",
          whyWrong: "The main staircase is explicitly forbidden; the gym is never mentioned.",
          revealSegments: [
            "Classes on the ground floor use the main exit. Classes upstairs use the side stairs by the library — never the main staircase.",
          ],
        },
      },
      {
        id: "x4",
        format: "listen-arrange",
        difficulty: "medium",
        prompt: "Put the drill steps in the order announced.",
        hints: ["Bell → line up → outside → wait for the signal."],
        segmentIds: ["s2", "s3", "s5", "s6"],
        items: [
          { id: "i1", text: "Walk to the football field and form two lines" },
          { id: "i2", text: "Stand behind your chair when the bell rings" },
          { id: "i3", text: "Return to the building after three short bells" },
          { id: "i4", text: "Leave the room in single file" },
        ],
        correctOrder: ["i2", "i4", "i1", "i3"],
        feedback: {
          correctAnswer: "Bell → stand → single file → field → return",
          explanation:
            "The announcement gives the sequence: stand behind chairs (s2), leave in single file (s3), go to the field (s5), and wait for three bells (s6).",
          revealSegments: [
            "…stop what you are doing and stand behind your chair.",
            "Leave the room in single file, quickly but without running.",
            "…walk to the football field and stand with your class in two lines.",
            "Wait quietly until you hear three short bells.",
          ],
        },
      },
    ],
  },

  // =========================================================================
  // Questions & answers — hotel reception
  // =========================================================================
  {
    id: "ls-x9",
    slug: "at-hotel-reception",
    stage: "question-answer",
    title: "At Hotel Reception",
    description:
      "A guest with questions meets a receptionist with answers — prices, times and rules in quick exchanges.",
    estimatedMinutes: 7,
    tags: ["questions", "travel", "hotel"],
    speakers: [
      { id: "guest", name: "Mr. Silva", role: "Guest" },
      { id: "staff", name: "Nadia", role: "Receptionist" },
    ],
    transcriptPolicy: "locked",
    audio: { rate: 0.95, gapMs: 500 },
    segments: [
      { id: "s1", speakerId: "guest", text: "Good evening. I have a reservation under the name Silva. Is breakfast included?", pauseAfterMs: 500 },
      { id: "s2", speakerId: "staff", text: "Good evening, Mr. Silva. Yes, breakfast is included, from seven to ten in the ground-floor restaurant.", pauseAfterMs: 700 },
      { id: "s3", speakerId: "guest", text: "Perfect. And what time is check-out tomorrow?", pauseAfterMs: 400 },
      { id: "s4", speakerId: "staff", text: "Check-out is at eleven. If you need a late check-out, we can extend it to one o'clock for a small fee.", pauseAfterMs: 700 },
      { id: "s5", speakerId: "guest", text: "I'll think about it. One more question — is the swimming pool open in the evening?", pauseAfterMs: 400 },
      { id: "s6", speakerId: "staff", text: "The pool is open until nine, but please note it's for guests only, and children must be with an adult.", pauseAfterMs: 700 },
      { id: "s7", speakerId: "guest", text: "Of course. And where can I leave my suitcase after check-out?", pauseAfterMs: 400 },
      { id: "s8", speakerId: "staff", text: "We have a luggage room next to the lift. Just ask at the desk and we'll give you a tag for it.", pauseAfterMs: 700 },
    ],
    exercises: [
      {
        id: "x1",
        format: "specific-info",
        difficulty: "easy",
        prompt: "Where and when is breakfast served?",
        hints: ["Catch both the room and the hours."],
        segmentIds: ["s2"],
        options: [
          { id: "o1", text: "Ground-floor restaurant, 7 to 10" },
          { id: "o2", text: "Top-floor restaurant, 7 to 9" },
          { id: "o3", text: "His room, any time" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Ground-floor restaurant, 7:00–10:00",
          explanation: "'Breakfast is included, from seven to ten in the ground-floor restaurant.'",
          revealSegments: ["Yes, breakfast is included, from seven to ten in the ground-floor restaurant."],
        },
      },
      {
        id: "x2",
        format: "listen-complete",
        difficulty: "medium",
        prompt: "Listen and complete: 'Check-out is at ______.'",
        hints: ["A time of day, on the hour."],
        segmentIds: ["s4"],
        template: "Check-out is at {1}.",
        blanks: [{ id: "b1", acceptedAnswers: ["eleven", "11", "eleven o'clock", "11 o'clock"] }],
        feedback: {
          correctAnswer: "eleven",
          explanation: "Standard check-out is at eleven; late check-out until one costs extra.",
          revealSegments: ["Check-out is at eleven. If you need a late check-out, we can extend it to one o'clock for a small fee."],
        },
      },
      {
        id: "x3",
        format: "listen-select",
        difficulty: "medium",
        prompt: "What are the pool rules?",
        hints: ["Two rules are mentioned — who can use it, and who needs an adult."],
        segmentIds: ["s6"],
        options: [
          { id: "o1", text: "Guests only, and children need an adult" },
          { id: "o2", text: "Everyone welcome, children included" },
          { id: "o3", text: "Adults only after six o'clock" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Guests only; children must be with an adult",
          explanation: "'…it's for guests only, and children must be with an adult.'",
          revealSegments: ["The pool is open until nine, but please note it's for guests only, and children must be with an adult."],
        },
      },
      {
        id: "x4",
        format: "listen-answer",
        difficulty: "medium",
        prompt: "Where exactly is the luggage room? Type a short answer.",
        hints: ["A place next to something that moves between floors."],
        segmentIds: ["s8"],
        acceptedAnswers: ["next to the lift", "by the lift", "next to the elevator", "beside the lift"],
        keywords: ["lift", "elevator"],
        feedback: {
          correctAnswer: "Next to the lift",
          explanation: "'We have a luggage room next to the lift' — and the desk gives you a tag for the suitcase.",
          revealSegments: ["We have a luggage room next to the lift. Just ask at the desk and we'll give you a tag for it."],
        },
      },
    ],
  },

  // =========================================================================
  // Narratives — the long walk home
  // =========================================================================
  {
    id: "ls-x10",
    slug: "the-long-walk-home",
    stage: "narratives",
    title: "The Long Walk Home",
    description:
      "A missed bus becomes an unexpected journey — a personal narrative told in past tenses.",
    estimatedMinutes: 9,
    tags: ["narrative", "past tenses", "personal story"],
    transcriptPolicy: "locked",
    audio: { rate: 0.95, gapMs: 550 },
    segments: [
      {
        id: "s1",
        text: "Last October, I missed the last bus home by about thirty seconds. I saw it pull away while I was still crossing the road.",
        translation:
          "El octubre pasado, perdí el último autobús a casa por unos treinta segundos. Lo vi irse mientras todavía cruzaba la calle.",
        pauseAfterMs: 500,
      },
      {
        id: "s2",
        text: "The next bus was not until six the next morning, a taxi would cost more than my weekly food budget, and my phone battery was at four per cent.",
        translation:
          "El siguiente autobús no era hasta las seis de la mañana siguiente, un taxi costaría más que mi presupuesto semanal de comida, y la batería de mi teléfono estaba al cuatro por ciento.",
        pauseAfterMs: 500,
      },
      {
        id: "s3",
        text: "So I made a decision that my comfortable self would never have made: I decided to walk the twelve kilometres home.",
        translation:
          "Así que tomé una decisión que mi yo cómodo nunca habría tomado: decidí caminar los doce kilómetros a casa.",
        pauseAfterMs: 500,
      },
      {
        id: "s4",
        text: "The first hour was miserable. It was cold, the pavement was wet, and I kept imagining my warm bed.",
        translation: "La primera hora fue miserable. Hacía frío, la acera estaba mojada y seguía imaginando mi cama cálida.",
        pauseAfterMs: 500,
      },
      {
        id: "s5",
        text: "But somewhere around the fifth kilometre, something changed. The rain stopped, the clouds opened, and the full moon came out over the fields.",
        translation:
          "Pero alrededor del quinto kilómetro, algo cambió. La lluvia paró, las nubes se abrieron y salió la luna llena sobre los campos.",
        pauseAfterMs: 500,
      },
      {
        id: "s6",
        text: "I passed a farm where a dog barked twice and then, apparently satisfied, walked along the fence with me for a hundred metres, like a small escort.",
        translation:
          "Pasé por una granja donde un perro ladró dos veces y luego, aparentemente satisfecho, caminó conmigo a lo largo de la valla cien metros, como una pequeña escolta.",
        pauseAfterMs: 500,
      },
      {
        id: "s7",
        text: "I arrived home at two in the morning, exhausted and strangely happy. I had walked for three hours and thought about things I hadn't thought about for years.",
        translation:
          "Llegué a casa a las dos de la mañana, agotado y extrañamente feliz. Había caminado tres horas y pensado en cosas en las que no pensaba desde hacía años.",
        pauseAfterMs: 500,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "listen-select",
        difficulty: "medium",
        prompt: "By how much did the narrator miss the last bus?",
        hints: ["A very short time is given right at the start."],
        segmentIds: ["s1"],
        options: [
          { id: "o1", text: "About thirty seconds" },
          { id: "o2", text: "About thirty minutes" },
          { id: "o3", text: "About three minutes" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "About thirty seconds",
          explanation: "'I missed the last bus home by about thirty seconds' — painfully close.",
          revealSegments: ["Last October, I missed the last bus home by about thirty seconds."],
        },
      },
      {
        id: "x2",
        format: "listen-arrange",
        difficulty: "medium",
        prompt: "Put the events of the walk in order.",
        hints: ["Misery comes first; the moon appears after the rain stops; the dog escort comes later; arrival is last."],
        segmentIds: ["s4", "s5", "s6", "s7"],
        items: [
          { id: "i1", text: "The moon came out over the fields" },
          { id: "i2", text: "The first hour was cold and miserable" },
          { id: "i3", text: "A farm dog walked along the fence with the narrator" },
          { id: "i4", text: "The narrator arrived home at two in the morning" },
        ],
        correctOrder: ["i2", "i1", "i3", "i4"],
        feedback: {
          correctAnswer: "Misery → moon → dog escort → arrival",
          explanation: "The story follows the walk chronologically: hour one (s4), the change at kilometre five (s5), the farm dog (s6), and home at two (s7).",
          revealSegments: [
            "The first hour was miserable.",
            "…the clouds opened, and the full moon came out over the fields.",
            "…a dog barked twice and then… walked along the fence with me…",
            "I arrived home at two in the morning…",
          ],
        },
      },
      {
        id: "x3",
        format: "listen-complete",
        difficulty: "hard",
        prompt: "Listen and complete: '…I decided to walk the ______ home.'",
        hints: ["A distance in kilometres."],
        segmentIds: ["s3"],
        template: "I decided to walk the {1} home.",
        blanks: [{ id: "b1", acceptedAnswers: ["twelve kilometres", "12 kilometres", "twelve km", "12 km"] }],
        feedback: {
          correctAnswer: "twelve kilometres",
          explanation: "The whole journey — twelve kilometres, on foot, starting late at night.",
          revealSegments: ["I decided to walk the twelve kilometres home."],
        },
      },
      {
        id: "x4",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "How does the narrator feel about the walk by the end?",
        hints: ["'Exhausted and…' — listen for the second feeling."],
        segmentIds: ["s7"],
        options: [
          { id: "o1", text: "Exhausted but strangely happy" },
          { id: "o2", text: "Angry about the wasted night" },
          { id: "o3", text: "Bored from start to finish" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Exhausted and strangely happy",
          explanation:
            "The ending transforms the trip: three hours of walking gave the narrator time to think about things not considered in years.",
          revealSegments: [
            "I arrived home at two in the morning, exhausted and strangely happy. I had walked for three hours and thought about things I hadn't thought about for years.",
          ],
        },
      },
    ],
  },

  // =========================================================================
  // Interviews — the young inventor
  // =========================================================================
  {
    id: "ls-x11",
    slug: "the-young-inventor",
    stage: "interviews",
    title: "The Young Inventor",
    description:
      "A radio host interviews a seventeen-year-old who built a water filter from waste materials.",
    estimatedMinutes: 9,
    tags: ["interview", "radio", "technology"],
    speakers: [
      { id: "host", name: "Sam", role: "Radio host" },
      { id: "guest", name: "Leila", role: "Student inventor" },
    ],
    transcriptPolicy: "locked",
    audio: { rate: 1, gapMs: 500 },
    segments: [
      { id: "s1", speakerId: "host", text: "My next guest is seventeen years old and has built a water filter out of plastic bottles, sand and charcoal. Leila, welcome to the show.", pauseAfterMs: 500 },
      { id: "s2", speakerId: "guest", text: "Thanks, Sam. And technically, my little sister helped — she tested every version in the garden, which mostly meant making mud.", pauseAfterMs: 700 },
      { id: "s3", speakerId: "host", text: "Let's start with the why. What made you want to build a water filter?", pauseAfterMs: 500 },
      { id: "s4", speakerId: "guest", text: "My grandmother's village lost its pump two summers ago. Carrying clean water home takes the family almost two hours a day. I wanted to see whether we could clean the river water locally instead.", pauseAfterMs: 700 },
      { id: "s5", speakerId: "host", text: "And the filter actually works? What did your tests show?", pauseAfterMs: 500 },
      { id: "s6", speakerId: "guest", text: "It removes about ninety-two per cent of the bacteria we tested for. It's not perfect — you still have to boil the water afterwards — but it makes the river water far safer to handle.", pauseAfterMs: 700 },
      { id: "s7", speakerId: "host", text: "Last question. What's next for you?", pauseAfterMs: 500 },
      { id: "s8", speakerId: "guest", text: "University, I hope, to study environmental engineering. And the village has asked for four more filters, so my sister and I have our summer planned.", pauseAfterMs: 700 },
    ],
    exercises: [
      {
        id: "x1",
        format: "specific-info",
        difficulty: "medium",
        prompt: "Why did Leila build the water filter?",
        hints: ["Listen for what happened in her grandmother's village."],
        segmentIds: ["s4"],
        options: [
          { id: "o1", text: "Her grandmother's village lost its water pump" },
          { id: "o2", text: "She needed a school science project" },
          { id: "o3", text: "A company offered her money" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "The village lost its pump two summers ago",
          explanation:
            "'My grandmother's village lost its pump two summers ago' — and carrying clean water took two hours a day.",
          revealSegments: ["My grandmother's village lost its pump two summers ago. Carrying clean water home takes the family almost two hours a day."],
        },
      },
      {
        id: "x2",
        format: "listen-complete",
        difficulty: "hard",
        prompt: "Listen and complete: 'It removes about ______ of the bacteria we tested for.'",
        hints: ["A percentage, in the high nineties? No — listen carefully."],
        segmentIds: ["s6"],
        template: "It removes about {1} of the bacteria we tested for.",
        blanks: [{ id: "b1", acceptedAnswers: ["92%", "92 per cent", "92 percent", "ninety-two per cent", "ninety-two percent"] }],
        feedback: {
          correctAnswer: "About ninety-two per cent",
          explanation: "Ninety-two per cent — impressive, but the water still needs boiling afterwards.",
          revealSegments: ["It removes about ninety-two per cent of the bacteria we tested for."],
        },
      },
      {
        id: "x3",
        format: "speaker-identify",
        difficulty: "medium",
        prompt: "Who tested every version of the filter in the garden?",
        hints: ["Leila mentions her helper in the first answer."],
        segmentIds: ["s2"],
        options: [
          { id: "o1", text: "Leila's little sister" },
          { id: "o2", text: "Leila's grandmother" },
          { id: "o3", text: "The radio host" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Leila's little sister",
          explanation: "'…my little sister helped — she tested every version in the garden, which mostly meant making mud.'",
          revealSegments: ["And technically, my little sister helped — she tested every version in the garden…"],
        },
      },
      {
        id: "x4",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "What does Leila plan to do next?",
        hints: ["Two plans: one for herself, one for the village."],
        segmentIds: ["s8"],
        options: [
          { id: "o1", text: "Study environmental engineering and build four more filters for the village" },
          { id: "o2", text: "Sell the filter design to a company" },
          { id: "o3", text: "Travel with her sister for the summer" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "University for environmental engineering + four more filters",
          explanation: "'University, I hope, to study environmental engineering. And the village has asked for four more filters…'",
          revealSegments: ["University, I hope, to study environmental engineering. And the village has asked for four more filters…"],
        },
      },
    ],
  },

  // =========================================================================
  // Informational passages — the honey bee
  // =========================================================================
  {
    id: "ls-x12",
    slug: "the-honey-bee-report",
    stage: "informational",
    title: "The Honey Bee Report",
    description:
      "A nature radio segment on how a hive works — numbers, roles and one famous dance.",
    estimatedMinutes: 9,
    tags: ["informational", "nature", "numbers"],
    transcriptPolicy: "locked",
    audio: { rate: 0.95, gapMs: 550 },
    segments: [
      {
        id: "s1",
        text: "A single honey bee colony can hold between twenty and sixty thousand bees, and almost every one of them is female.",
        translation:
          "Una sola colonia de abejas puede albergar entre veinte y sesenta mil abejas, y casi todas son hembras.",
        pauseAfterMs: 500,
      },
      {
        id: "s2",
        text: "There is one queen, whose only job is to lay eggs — up to two thousand a day in summer.",
        translation: "Hay una reina, cuyo único trabajo es poner huevos: hasta dos mil al día en verano.",
        pauseAfterMs: 500,
      },
      {
        id: "s3",
        text: "A few hundred males, called drones, exist to mate with a young queen. They do not collect food and cannot sting.",
        translation:
          "Unos cientos de machos, llamados zánganos, existen para aparearse con una reina joven. No recolectan comida y no pueden picar.",
        pauseAfterMs: 500,
      },
      {
        id: "s4",
        text: "All the work — cleaning, nursing, building, guarding and foraging — is done by thousands of female worker bees.",
        translation:
          "Todo el trabajo — limpiar, cuidar, construir, vigilar y buscar comida — lo hacen miles de abejas obreras hembras.",
        pauseAfterMs: 500,
      },
      {
        id: "s5",
        text: "A worker bee visits fifty to one hundred flowers on a single trip, and communicates the best flower patches by dancing.",
        translation:
          "Una obrera visita de cincuenta a cien flores en un solo viaje y comunica los mejores parches de flores bailando.",
        pauseAfterMs: 500,
      },
      {
        id: "s6",
        text: "This waggle dance tells the other bees both the direction of the flowers, relative to the sun, and how far away they are.",
        translation:
          "Este baile de oscilación les indica a las demás abejas tanto la dirección de las flores, respecto al sol, como la distancia a la que están.",
        pauseAfterMs: 500,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "specific-info",
        difficulty: "medium",
        prompt: "How many bees can a single colony hold?",
        hints: ["A range — listen for the two numbers."],
        segmentIds: ["s1"],
        options: [
          { id: "o1", text: "Between 20,000 and 60,000" },
          { id: "o2", text: "Between 2,000 and 6,000" },
          { id: "o3", text: "Between 200 and 600" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Between twenty and sixty thousand",
          explanation: "The opening fact: a colony holds 20,000–60,000 bees, nearly all female.",
          revealSegments: ["A single honey bee colony can hold between twenty and sixty thousand bees…"],
        },
      },
      {
        id: "x2",
        format: "listen-select",
        difficulty: "medium",
        prompt: "What is true about drone bees?",
        hints: ["The segment about males lists three facts."],
        segmentIds: ["s3"],
        options: [
          { id: "o1", text: "They do not collect food and cannot sting" },
          { id: "o2", text: "They guard the hive entrance" },
          { id: "o3", text: "They lay the eggs" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "They don't collect food and can't sting",
          explanation: "'A few hundred males, called drones, exist to mate with a young queen. They do not collect food and cannot sting.'",
          whyWrong: "Guarding is a worker's job, and only the queen lays eggs.",
          revealSegments: ["A few hundred males, called drones, exist to mate with a young queen. They do not collect food and cannot sting."],
        },
      },
      {
        id: "x3",
        format: "dictation",
        difficulty: "hard",
        prompt: "Type the sentence about what a worker bee does on a single trip.",
        hints: ["Two numbers again — flowers per trip."],
        segmentIds: ["s5"],
        acceptedAnswers: [
          "A worker bee visits fifty to one hundred flowers on a single trip, and communicates the best flower patches by dancing.",
          "A worker bee visits fifty to one hundred flowers on a single trip and communicates the best flower patches by dancing",
        ],
        keywords: ["fifty", "one hundred", "flowers", "dancing"],
        feedback: {
          correctAnswer: "A worker bee visits fifty to one hundred flowers on a single trip, and communicates the best flower patches by dancing.",
          explanation: "Fifty to one hundred flowers per trip — and the dancing is the famous communication system.",
          revealSegments: ["A worker bee visits fifty to one hundred flowers on a single trip, and communicates the best flower patches by dancing."],
        },
      },
      {
        id: "x4",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "What TWO things does the waggle dance communicate?",
        hints: ["One is a direction; one is a distance."],
        segmentIds: ["s6"],
        options: [
          { id: "o1", text: "The direction of the flowers and how far away they are" },
          { id: "o2", text: "The colour of the flowers and their smell" },
          { id: "o3", text: "The time of day and the weather" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Direction (relative to the sun) and distance",
          explanation: "'…tells the other bees both the direction of the flowers, relative to the sun, and how far away they are.'",
          revealSegments: ["This waggle dance tells the other bees both the direction of the flowers, relative to the sun, and how far away they are."],
        },
      },
    ],
  },

  // =========================================================================
  // Presentations — the design project pitch
  // =========================================================================
  {
    id: "ls-x13",
    slug: "the-design-pitch",
    stage: "presentations",
    title: "The Design Pitch",
    description:
      "A design student presents a project — structure, signposts and handling a question from the floor.",
    estimatedMinutes: 10,
    tags: ["presentation", "design", "structure"],
    transcriptPolicy: "locked",
    audio: { rate: 1, gapMs: 550 },
    segments: [
      {
        id: "s1",
        text: "Good afternoon, everyone. I'm Ravi, and for the last eight weeks I've been working on one small, stubborn problem: the campus water fountain queue.",
        pauseAfterMs: 600,
      },
      {
        id: "s2",
        text: "In the next ten minutes I'll show you the problem, three failed prototypes, and the design we finally tested with two hundred students last week.",
        pauseAfterMs: 600,
      },
      {
        id: "s3",
        text: "First, the problem. At lunchtime, the queue at the library fountain reaches twenty-two people, and the average wait is six minutes. Most people give up.",
        pauseAfterMs: 600,
      },
      {
        id: "s4",
        text: "Prototype one was a second fountain — rejected by the budget committee in one afternoon. Prototype two, a bottle-filling sensor, failed because students didn't trust the screen. Prototype three, a simple tap extension, leaked.",
        pauseAfterMs: 600,
      },
      {
        id: "s5",
        text: "The final design, which I call the tandem tap, lets two people fill bottles at once. In testing, it cut the average wait from six minutes to two.",
        pauseAfterMs: 600,
      },
      {
        id: "s6",
        text: "I'll finish with the numbers, the cost, and the question I'd most like your answer to: should we pilot it outside the library, or the gym first?",
        pauseAfterMs: 600,
      },
      {
        id: "s7",
        text: "Yes — the question at the back, please.",
        pauseAfterMs: 400,
      },
      {
        id: "s8",
        text: "You mentioned two hundred testers. How many of them actually preferred the tandem tap?",
        pauseAfterMs: 500,
      },
      {
        id: "s9",
        text: "Seventy-eight per cent preferred it, eleven per cent had no preference, and the rest wanted a third tap. Fair enough — I want a third tap too.",
        pauseAfterMs: 600,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "What problem is the presentation about?",
        hints: ["The presenter names the problem in his opening."],
        segmentIds: ["s1", "s3"],
        options: [
          { id: "o1", text: "Long queues at the campus water fountain" },
          { id: "o2", text: "The cost of bottled water on campus" },
          { id: "o3", text: "Broken fountains in the gym" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "The campus water fountain queue",
          explanation: "'…one small, stubborn problem: the campus water fountain queue' — up to twenty-two people and six-minute waits.",
          revealSegments: ["I've been working on one small, stubborn problem: the campus water fountain queue."],
        },
      },
      {
        id: "x2",
        format: "listen-arrange",
        difficulty: "hard",
        prompt: "Order the three prototypes by what happened to them.",
        hints: ["Listen to segment 4: budget, trust, leak."],
        segmentIds: ["s4"],
        items: [
          { id: "i1", text: "A second fountain — rejected by the budget committee" },
          { id: "i2", text: "A tap extension — leaked" },
          { id: "i3", text: "A bottle-filling sensor — students didn't trust the screen" },
        ],
        correctOrder: ["i1", "i3", "i2"],
        feedback: {
          correctAnswer: "Second fountain → sensor → tap extension",
          explanation:
            "Prototype one (second fountain) was rejected on budget, prototype two (sensor) failed on trust, prototype three (tap extension) leaked.",
          revealSegments: ["Prototype one was a second fountain — rejected… Prototype two, a bottle-filling sensor, failed… Prototype three, a simple tap extension, leaked."],
        },
      },
      {
        id: "x3",
        format: "specific-info",
        difficulty: "hard",
        prompt: "By how much did the tandem tap cut the average wait?",
        hints: ["From six minutes to…?"],
        segmentIds: ["s5"],
        options: [
          { id: "o1", text: "From six minutes to two" },
          { id: "o2", text: "From six minutes to four" },
          { id: "o3", text: "From two minutes to one" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Six minutes down to two",
          explanation: "'…it cut the average wait from six minutes to two.'",
          revealSegments: ["In testing, it cut the average wait from six minutes to two."],
        },
      },
      {
        id: "x4",
        format: "listen-answer",
        difficulty: "hard",
        prompt: "What percentage of the two hundred testers preferred the tandem tap? Type the number.",
        hints: ["It's in the answer to the audience question."],
        segmentIds: ["s9"],
        acceptedAnswers: ["78%", "78 per cent", "78 percent", "seventy-eight per cent", "seventy-eight percent", "78"],
        keywords: ["78", "seventy-eight"],
        feedback: {
          correctAnswer: "Seventy-eight per cent",
          explanation: "78% preferred it, 11% had no preference, and the rest wanted a third tap.",
          revealSegments: ["Seventy-eight per cent preferred it, eleven per cent had no preference…"],
        },
      },
    ],
  },

  // =========================================================================
  // Academic listening — the sleep lecture
  // =========================================================================
  {
    id: "ls-x14",
    slug: "the-sleep-lecture",
    stage: "academic",
    title: "The Sleep Lecture",
    description:
      "A first-year psychology lecture on sleep cycles — definitions, evidence and hedged conclusions.",
    estimatedMinutes: 11,
    tags: ["academic", "lecture", "psychology"],
    transcriptPolicy: "locked",
    audio: { rate: 1, gapMs: 550 },
    segments: [
      {
        id: "s1",
        text: "Today we're going to unpack something you all did last night, mostly badly: sleep. Specifically, we'll define sleep cycles, examine the evidence on memory consolidation, and evaluate the teenage sleep debate.",
        pauseAfterMs: 600,
      },
      {
        id: "s2",
        text: "Let's define our terms. A sleep cycle lasts roughly ninety minutes and includes light sleep, deep sleep, and a stage called REM — rapid eye movement — when most dreaming happens.",
        pauseAfterMs: 600,
      },
      {
        id: "s3",
        text: "Across a normal night, you complete four to six of these cycles, with progressively more REM and less deep sleep as morning approaches.",
        pauseAfterMs: 600,
      },
      {
        id: "s4",
        text: "Now, the evidence on memory. In a widely cited study, students who slept after learning a word list recalled approximately twenty per cent more items the next day than students who stayed awake.",
        pauseAfterMs: 600,
      },
      {
        id: "s5",
        text: "I want to be careful here: this finding suggests a link between sleep and memory consolidation, but the mechanism remains contested. Correlation, as ever, is not causation.",
        pauseAfterMs: 600,
      },
      {
        id: "s6",
        text: "Finally, the teenage sleep debate. Teenagers' natural sleep timing shifts later by one to three hours — a biological fact, not laziness. Yet school schedules rarely reflect it.",
        pauseAfterMs: 600,
      },
      {
        id: "s7",
        text: "When one district moved its start time from seven thirty to eight thirty, attendance rose and reported car accidents among student drivers fell. One study is not a policy, but it is a start.",
        pauseAfterMs: 600,
      },
      {
        id: "s8",
        text: "For Thursday's seminar, read the two contrasting papers on school start times and come prepared to defend one. And yes — get some sleep before then.",
        pauseAfterMs: 600,
      },
    ],
    exercises: [
      {
        id: "x1",
        format: "specific-info",
        difficulty: "hard",
        prompt: "How long does one sleep cycle last, according to the lecture?",
        hints: ["The definition comes right after 'let's define our terms'."],
        segmentIds: ["s2"],
        options: [
          { id: "o1", text: "Roughly ninety minutes" },
          { id: "o2", text: "Roughly nineteen minutes" },
          { id: "o3", text: "Roughly nine hours" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Roughly ninety minutes",
          explanation: "A cycle lasts about ninety minutes and includes light sleep, deep sleep, and REM.",
          revealSegments: ["A sleep cycle lasts roughly ninety minutes…"],
        },
      },
      {
        id: "x2",
        format: "listen-select",
        difficulty: "hard",
        prompt: "How does the sleep pattern change across the night?",
        hints: ["Listen for what increases and what decreases toward morning."],
        segmentIds: ["s3"],
        options: [
          { id: "o1", text: "More REM and less deep sleep as morning approaches" },
          { id: "o2", text: "More deep sleep and less REM as morning approaches" },
          { id: "o3", text: "The pattern stays identical in every cycle" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "More REM, less deep sleep",
          explanation: "'…with progressively more REM and less deep sleep as morning approaches.'",
          revealSegments: ["…you complete four to six of these cycles, with progressively more REM and less deep sleep as morning approaches."],
        },
      },
      {
        id: "x3",
        format: "overall-meaning",
        difficulty: "hard",
        prompt: "How does the lecturer treat the memory study?",
        hints: ["Academic caution — listen for the hedge in the next segment."],
        segmentIds: ["s4", "s5"],
        options: [
          { id: "o1", text: "As suggestive evidence, with the mechanism still contested" },
          { id: "o2", text: "As definitive proof that sleep causes better memory" },
          { id: "o3", text: "As a flawed study that should be ignored" },
        ],
        correctOptionId: "o1",
        feedback: {
          correctAnswer: "Suggestive but not conclusive",
          explanation:
            "'…this finding suggests a link… but the mechanism remains contested. Correlation… is not causation.' Classic academic hedging.",
          revealSegments: ["I want to be careful here: this finding suggests a link between sleep and memory consolidation, but the mechanism remains contested."],
        },
      },
      {
        id: "x4",
        format: "listen-complete",
        difficulty: "hard",
        prompt: "Listen and complete: 'Teenagers' natural sleep timing shifts later by ______.'",
        hints: ["A range of hours."],
        segmentIds: ["s6"],
        template: "Teenagers' natural sleep timing shifts later by {1}.",
        blanks: [{ id: "b1", acceptedAnswers: ["one to three hours", "1 to 3 hours", "one to three", "one-two-three hours"] }],
        feedback: {
          correctAnswer: "One to three hours",
          explanation: "A biological shift of one to three hours — 'a biological fact, not laziness'.",
          revealSegments: ["Teenagers' natural sleep timing shifts later by one to three hours — a biological fact, not laziness."],
        },
      },
      {
        id: "x5",
        format: "listen-answer",
        difficulty: "hard",
        prompt: "What happened when one district moved its school start time from 7:30 to 8:30? Name both effects.",
        hints: ["One effect is about attendance; the other involves student drivers."],
        segmentIds: ["s7"],
        acceptedAnswers: [
          "attendance rose and car accidents among student drivers fell",
          "attendance rose and reported car accidents fell",
          "attendance improved and accidents fell",
        ],
        keywords: ["attendance", "accidents"],
        feedback: {
          correctAnswer: "Attendance rose and car accidents among student drivers fell",
          explanation:
            "The lecturer stays cautious — 'one study is not a policy' — but both effects moved in the predicted direction.",
          revealSegments: ["…attendance rose and reported car accidents among student drivers fell. One study is not a policy, but it is a start."],
        },
      },
    ],
  },
];
