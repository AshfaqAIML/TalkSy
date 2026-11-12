/**
 * Intermediate speaking activities (A2 – B1) — the seven required types:
 * describe pictures, talk about past experiences, explain preferences,
 * tell short stories, hold conversations, give directions and express
 * opinions.
 */

import type { SpeakingActivity } from "./types";

/** Original inline SVG: a park scene (used by the picture-description task). */
const PARK_SVG = `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A small park with a fountain, two benches and a dog">
  <rect width="320" height="180" fill="#cfeaf7"/>
  <circle cx="272" cy="34" r="18" fill="#f7c948"/>
  <path d="M0 120 Q80 96 160 116 T320 108 V180 H0 Z" fill="#8fce8f"/>
  <path d="M0 132 Q90 118 320 126 V180 H0 Z" fill="#6fbf6f"/>
  <rect x="150" y="66" width="8" height="60" fill="#8d6e63"/>
  <circle cx="154" cy="52" r="26" fill="#66bb6a"/>
  <circle cx="136" cy="64" r="16" fill="#66bb6a"/>
  <circle cx="172" cy="64" r="16" fill="#66bb6a"/>
  <ellipse cx="60" cy="112" rx="34" ry="8" fill="#64a4e8"/>
  <rect x="58" y="72" width="4" height="40" fill="#90a4ae"/>
  <ellipse cx="60" cy="70" rx="12" ry="10" fill="#b3e5fc"/>
  <g fill="#8d6e63">
    <rect x="220" y="104" width="44" height="5"/>
    <rect x="224" y="109" width="4" height="16"/>
    <rect x="256" y="109" width="4" height="16"/>
  </g>
  <g>
    <ellipse cx="96" cy="146" rx="14" ry="9" fill="#e0a458"/>
    <circle cx="108" cy="138" r="7" fill="#e0a458"/>
    <rect x="114" y="139" width="8" height="3" fill="#e0a458" transform="rotate(18 114 139)"/>
    <rect x="88" y="152" width="3" height="8" fill="#c0842d"/>
    <rect x="98" y="152" width="3" height="8" fill="#c0842d"/>
    <rect x="106" y="146" width="8" height="3" rx="1" fill="#c0842d" transform="rotate(-24 106 146)"/>
  </g>
  <path d="M186 158 q4 -26 20 -30 q-6 16 0 30 z" fill="#a5d6a7"/>
  <path d="M210 158 q2 -18 14 -21 q-4 11 0 21 z" fill="#a5d6a7"/>
</svg>`;

export const intermediateSpeakingActivities: SpeakingActivity[] = [
  {
    id: "spk-int-describe-picture",
    slug: "describe-pictures",
    tier: "intermediate",
    kind: "describe-picture",
    title: "Describe Pictures",
    description:
      "Look at a scene and describe what you see: place, people, actions, colours and one guess about what is happening.",
    estimatedMinutes: 7,
    tags: ["speaking", "vocabulary"],
    tasks: [
      {
        id: "dp1",
        type: "open",
        title: "A day in the park",
        prompt:
          "Look at the picture. Describe the place, the objects you can see, the weather, and guess what is happening.",
        hints: [
          "Structure: place → things → people/animals → weather → your guess.",
          "Use 'There is / There are' for things you can see.",
          "Guesses: 'Maybe…', 'It looks like…', 'I think…'",
        ],
        image: {
          svg: PARK_SVG,
          alt: "A sunny park with a big tree, a small fountain, one bench, a brown dog and two bushes",
        },
        checklist: [
          { id: "place", label: "You named the place", anyOf: ["park", "garden", "outside", "outdoors"] },
          { id: "there", label: "You used 'there is' or 'there are'", anyOf: ["there is", "there are", "there's"] },
          { id: "objects", label: "You described objects in the scene", anyOf: ["tree", "bench", "fountain", "bush", "grass"] },
          { id: "actions", label: "You described an action or person/animal", anyOf: ["dog", "sitting", "walking", "playing", "running", "standing"] },
          { id: "weather", label: "You described the weather or light", anyOf: ["sunny", "sun", "day", "bright", "blue sky", "weather", "warm", "summer"] },
          { id: "guess", label: "You made a guess about the scene", anyOf: ["maybe", "perhaps", "i think", "it looks", "probably", "seems"] },
        ],
        topicKeywords: ["park", "picture", "tree", "dog", "sunny", "there"],
        minWords: 35,
        targetSeconds: 60,
        maxSeconds: 150,
        difficulty: "medium",
        modelAnswer:
          "The picture shows a small park on a sunny day. There is a big green tree in the middle and a small fountain on the left. On the right there is a wooden bench. A brown dog is standing on the grass near the fountain, and maybe it is waiting for its owner. The sky is blue and the sun is bright, so I think it is a warm summer morning.",
      },
    ],
  },
  {
    id: "spk-int-past-experiences",
    slug: "past-experiences",
    tier: "intermediate",
    kind: "past-experiences",
    title: "Talk About Past Experiences",
    description:
      "Tell true stories from your past using past simple and present perfect — a trip, a childhood memory, a first job.",
    estimatedMinutes: 8,
    tags: ["speaking", "grammar"],
    tasks: [
      {
        id: "pe1",
        type: "open",
        title: "A trip you remember",
        prompt:
          "Describe a trip you took in the past: where and when you went, who you went with, and two things you did there.",
        hints: [
          "Past simple moves the story: 'I went…, I visited…, we ate…'",
          "End with a feeling: 'It was amazing because…'",
        ],
        cues: [
          { id: "c1", label: "Where and when" },
          { id: "c2", label: "Who went with you" },
          { id: "c3", label: "Two things you did" },
          { id: "c4", label: "How you felt about it" },
        ],
        checklist: [
          { id: "where", label: "You said where you went", anyOf: ["went to", "visited", "travelled", "traveled", "trip to"] },
          { id: "when", label: "You said when it happened", anyOf: ["last", "ago", "when i was", "in 20", "summer", "year", "month", "week"] },
          { id: "who", label: "You said who went with you", anyOf: ["with my", "alone", "by myself", "friend", "family", "we"] },
          { id: "actions", label: "You described at least two activities", anyOf: ["visited", "ate", "saw", "walked", "swam", "took", "bought", "watched", "played", "went", "made", "met"] },
          { id: "feeling", label: "You shared a feeling about the trip", anyOf: ["amazing", "wonderful", "beautiful", "tired", "happy", "loved", "enjoyed", "unforgettable", "fun", "best"] },
        ],
        topicKeywords: ["went", "visited", "was", "we", "because"],
        minWords: 40,
        targetSeconds: 70,
        maxSeconds: 180,
        difficulty: "medium",
        modelAnswer:
          "Two years ago I went to the south coast with two friends from university. We travelled by bus and stayed in a small hotel near the beach. Every morning we walked along the sea and took photos of the boats. One evening we ate grilled fish at a little restaurant — it was the best meal of the whole trip. I felt very happy because it was our first holiday together.",
      },
      {
        id: "pe2",
        type: "open",
        title: "Have you ever…?",
        prompt:
          "Answer these experience questions with 'Yes, I have…' or 'No, I haven't…' plus one detail for each.",
        hints: [
          "Present perfect for the experience, past simple for the detail:",
          "'Yes, I have tried sushi. I ate it in Lima in 2019.'",
        ],
        cues: [
          { id: "q1", label: "Have you ever tried food from another country?" },
          { id: "q2", label: "Have you ever travelled by plane?" },
          { id: "q3", label: "Have you ever learned another language?" },
        ],
        checklist: [
          { id: "ever1", label: "You answered about food", anyOf: ["food", "sushi", "pizza", "tried", "eaten", "dish", "cuisine"] },
          { id: "ever2", label: "You answered about flying", anyOf: ["plane", "flight", "fly", "airport", "flown"] },
          { id: "ever3", label: "You answered about languages", anyOf: ["language", "english", "spanish", "french", "learned", "learnt", "studied"] },
          { id: "form", label: "You used 'have/has' + participle at least once", anyOf: ["i have", "i've", "i have never", "haven't", "have you"] },
        ],
        topicKeywords: ["have", "ever", "been", "tried"],
        minWords: 30,
        targetSeconds: 50,
        maxSeconds: 150,
        difficulty: "medium",
        modelAnswer:
          "Yes, I have tried food from many countries. My favourite foreign dish is Thai soup — I ate it for the first time in 2022. Yes, I have flown many times; my longest flight was six hours to Panama. And of course I have learned English for years, but this is my first serious speaking practice.",
      },
    ],
  },
  {
    id: "spk-int-preferences",
    slug: "explain-preferences",
    tier: "intermediate",
    kind: "explain-preferences",
    title: "Explain Preferences",
    description:
      "'I prefer… because…' — compare two options and defend your choice with real reasons, not just feelings.",
    estimatedMinutes: 6,
    tags: ["speaking", "opinion"],
    tasks: [
      {
        id: "pr1",
        type: "open",
        title: "City or countryside?",
        prompt:
          "Compare living in a big city with living in the countryside. Say which you prefer and give three reasons.",
        hints: [
          "Comparatives help: 'quieter', 'more exciting', 'cheaper', 'healthier'.",
          "Reason connectors: 'because', 'so', 'that's why', 'moreover'.",
        ],
        cues: [
          { id: "c1", label: "Your choice" },
          { id: "c2", label: "Reason 1 (daily life)" },
          { id: "c3", label: "Reason 2 (money, time or health)" },
          { id: "c4", label: "Reason 3 (people or free time)" },
        ],
        checklist: [
          { id: "choice", label: "You stated your preference clearly", anyOf: ["i prefer", "i'd rather", "i would rather", "i like", "for me", "i'd choose", "i would choose"] },
          { id: "compare", label: "You compared both options", anyOf: ["city", "countryside", "country", "town", "village"] },
          { id: "reasons", label: "You gave reasons with connectors", anyOf: ["because", "so", "that's why", "since", "moreover", "also", "and"] },
          { id: "comparative", label: "You used a comparative form", anyOf: ["quieter", "cheaper", "bigger", "cleaner", "faster", "slower", "more ", "better", "worse", "easier", "healthier", "safer"] },
        ],
        topicKeywords: ["prefer", "because", "city", "countryside", "life"],
        minWords: 35,
        targetSeconds: 60,
        maxSeconds: 150,
        difficulty: "medium",
        modelAnswer:
          "I prefer the countryside because life is quieter and healthier than in a big city. The air is cleaner, so I feel better every day. Also, things are cheaper — rent, food, transport. Cities are more exciting, that's true, but I need calm after work. In the countryside I can walk, garden and see the stars at night, and for me that is a better life.",
      },
    ],
  },
  {
    id: "spk-int-tell-story",
    slug: "tell-short-stories",
    tier: "intermediate",
    kind: "tell-story",
    title: "Tell Short Stories",
    description:
      "A good story has a beginning, one problem, and an ending. Practise the shape with a story you can tell in under a minute.",
    estimatedMinutes: 8,
    tags: ["speaking", "narrative"],
    tasks: [
      {
        id: "ts1",
        type: "open",
        title: "The day everything went wrong",
        prompt:
          "Tell a short true (or invented) story about a day when things went wrong. Set the scene, describe the problem, and say how it ended.",
        hints: [
          "Story spine: 'One day…' → 'Suddenly…' → 'In the end…'",
          "Past simple for events; past continuous for background ('It was raining…').",
        ],
        cues: [
          { id: "c1", label: "When and where it started" },
          { id: "c2", label: "The problem" },
          { id: "c3", label: "What you did" },
          { id: "c4", label: "How it ended" },
        ],
        checklist: [
          { id: "scene", label: "You set the scene", anyOf: ["one day", "last", "when i was", "it was", "yesterday", "morning", "one morning"] },
          { id: "problem", label: "You described the problem", anyOf: ["suddenly", "problem", "but", "unfortunately", "realised", "realized", "lost", "forgot", "missed", "broke", "wrong"] },
          { id: "action", label: "You said what you did", anyOf: ["i called", "i went", "i asked", "i ran", "i decided", "i tried", "so i", "i looked"] },
          { id: "ending", label: "You gave the story an ending", anyOf: ["in the end", "finally", "at last", "luckily", "eventually", "after that"] },
        ],
        topicKeywords: ["was", "went", "because", "then", "finally"],
        minWords: 45,
        targetSeconds: 75,
        maxSeconds: 180,
        difficulty: "medium",
        modelAnswer:
          "One day last winter I was walking to an important meeting when my phone battery died. Suddenly I realised I did not remember the address — it was only on my phone. I asked a woman in a shop, and luckily she knew the building. I ran there and arrived only five minutes late. In the end, the client was very kind, and now I always print my addresses on paper.",
      },
    ],
  },
  {
    id: "spk-int-hold-conversation",
    slug: "hold-conversations",
    tier: "intermediate",
    kind: "hold-conversation",
    title: "Hold Conversations",
    description:
      "Keep a small talk conversation alive: react, ask a question back, and add one new detail to every answer.",
    estimatedMinutes: 8,
    tags: ["speaking", "conversation"],
    tasks: [
      {
        id: "hc1",
        type: "open",
        title: "Small talk: the weekend",
        prompt:
          "Someone asks you: 'Did you have a good weekend?' Answer with a detail, react to them, and ask a question back — all in one short recording.",
        hints: [
          "The three-step move: answer → add a detail → ask back.",
          "'What about you?' is the smallest question back; a specific question is better.",
        ],
        checklist: [
          { id: "answer", label: "You answered the question", anyOf: ["yes", "no", "it was", "i did", "weekend", "saturday", "sunday"] },
          { id: "detail", label: "You added a detail", anyOf: ["i went", "i watched", "i visited", "i cooked", "i played", "i stayed", "because"] },
          { id: "askback", label: "You asked a question back", anyOf: ["what about you", "how about you", "and you", "did you", "how was your", "what did you"] },
        ],
        topicKeywords: ["weekend", "you", "i", "what", "how"],
        minWords: 20,
        targetSeconds: 30,
        maxSeconds: 90,
        difficulty: "medium",
        modelAnswer:
          "Yes, I had a lovely weekend, thank you! On Saturday I visited my aunt and we cooked dumplings together — it was a lot of fun. What about you? Did you do anything interesting?",
      },
      {
        id: "hc2",
        type: "open",
        title: "Reacting and continuing",
        prompt:
          "A friend says: 'I just started a new job at a hospital.' Record a natural reaction, one follow-up question, and one comment or offer.",
        hints: [
          "React first: 'Congratulations!', 'That's great news!', 'Really?'",
          "Follow-up questions: open questions (What…? How…?) keep talk alive better than yes/no questions.",
        ],
        checklist: [
          { id: "react", label: "You reacted warmly", anyOf: ["congratulations", "that's great", "that's wonderful", "great news", "wow", "amazing", "nice", "how exciting", "good luck"] },
          { id: "question", label: "You asked a follow-up question", anyOf: ["what", "how", "when", "where", "do you", "are you", "is it"] },
          { id: "comment", label: "You added a comment or offer", anyOf: ["i hope", "i'm sure", "i'm happy", "you'll", "if you", "let me know", "tell me"] },
        ],
        topicKeywords: ["job", "hospital", "new", "you"],
        minWords: 18,
        targetSeconds: 25,
        maxSeconds: 90,
        difficulty: "medium",
        modelAnswer:
          "Congratulations, that's wonderful news! What do you do there — are you working with patients? I remember you told me you wanted a job that helps people, so I'm really happy for you. Tell me all about it when you have time!",
      },
    ],
  },
  {
    id: "spk-int-give-directions",
    slug: "give-directions",
    tier: "intermediate",
    kind: "give-directions",
    title: "Give Directions",
    description:
      "Guide a visitor from the station to your favourite café: turns, landmarks, distances and one warning about a tricky corner.",
    estimatedMinutes: 6,
    tags: ["speaking", "practical"],
    tasks: [
      {
        id: "gd1",
        type: "open",
        title: "From the station to my favourite café",
        prompt:
          "A visitor is at the train station. Give them directions to your favourite café. Say the turns, the streets, one landmark, and how long it takes.",
        hints: [
          "Direction kit: 'go straight', 'turn left/right', 'take the second street', 'opposite', 'next to', 'past'.",
          "Landmarks beat street names: 'until you see a red church'.",
        ],
        cues: [
          { id: "c1", label: "First steps out of the station" },
          { id: "c2", label: "The turns" },
          { id: "c3", label: "A landmark" },
          { id: "c4", label: "Time or distance" },
        ],
        checklist: [
          { id: "start", label: "You started the directions clearly", anyOf: ["go out", "leave the station", "from the station", "when you exit", "start"] },
          { id: "turns", label: "You gave at least one turn", anyOf: ["turn left", "turn right", "go left", "go right", "left", "right", "corner"] },
          { id: "landmark", label: "You mentioned a landmark", anyOf: ["opposite", "next to", "in front of", "you will see", "you'll see", "until you", "church", "park", "bank", "supermarket", "square", "bridge", "traffic light"] },
          { id: "distance", label: "You said the time or distance", anyOf: ["minutes", "minute", "metres", "meters", "blocks", "walk", "about", "kilometre", "kilometer"] },
        ],
        topicKeywords: ["go", "turn", "left", "right", "street", "minutes"],
        minWords: 30,
        targetSeconds: 50,
        maxSeconds: 150,
        difficulty: "medium",
        modelAnswer:
          "When you leave the station, go straight along the main road for about two minutes. Then turn left at the bank — it's a big stone building, you can't miss it. Walk past the small park and my favourite café is on the right, opposite the flower shop. It takes about five minutes on foot. Careful: the café sign is small, so look at the flowers, not the buildings!",
      },
    ],
  },
  {
    id: "spk-int-opinions",
    slug: "express-opinions",
    tier: "intermediate",
    kind: "express-opinions",
    title: "Express Opinions",
    description:
      "State an opinion, support it with a reason and an example, and acknowledge the other side — the full B1 argument kit.",
    estimatedMinutes: 7,
    tags: ["speaking", "opinion"],
    tasks: [
      {
        id: "op1",
        type: "open",
        title: "Should children learn English at primary school?",
        prompt:
          "Give your opinion on teaching English in primary schools. State your position, give two reasons with examples, and mention one argument from the other side.",
        hints: [
          "Opinion starters: 'In my opinion…', 'I strongly believe…', 'I think…'",
          "Balance: 'Some people say…, but…'",
        ],
        cues: [
          { id: "c1", label: "Your position" },
          { id: "c2", label: "Reason 1 + example" },
          { id: "c3", label: "Reason 2 + example" },
          { id: "c4", label: "The other side, answered" },
        ],
        checklist: [
          { id: "position", label: "You stated your opinion", anyOf: ["in my opinion", "i think", "i believe", "for me", "i strongly", "in my view", "i agree", "i disagree"] },
          { id: "reasons", label: "You gave at least two reasons", anyOf: ["first", "second", "also", "moreover", "because", "one reason", "another"] },
          { id: "example", label: "You included an example", anyOf: ["for example", "for instance", "such as", "like when", "in my country", "when i was"] },
          { id: "otherside", label: "You acknowledged the other side", anyOf: ["some people", "others say", "on the other hand", "however", "of course", "critics", "parents worry"] },
        ],
        topicKeywords: ["opinion", "english", "children", "school", "because"],
        minWords: 45,
        targetSeconds: 75,
        maxSeconds: 180,
        difficulty: "medium",
        modelAnswer:
          "In my opinion, children should start English at primary school. First, young children learn sounds naturally — for example, my cousin moved to Canada at seven and now speaks like a native. Second, English opens doors later: most good universities and jobs need it. Some people say two languages confuse small children, but research and my own experience show the opposite — children simply mix both worlds without any problem.",
      },
    ],
  },
];
