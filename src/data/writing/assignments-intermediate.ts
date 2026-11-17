/**
 * Intermediate writing assignments — the eight required kinds: paragraph
 * construction, descriptive writing, narrative writing, personal
 * experiences, letters, emails, summaries and short essays.
 */

import type { WritingAssignment } from "./types";

export const intermediateWritingAssignments: WritingAssignment[] = [
  {
    id: "wrt-int-paragraph",
    slug: "paragraph-construction",
    tier: "intermediate",
    kind: "paragraph-construction",
    title: "Paragraph Construction",
    description:
      "One topic sentence, three supporting sentences, one closing sentence — the shape every paragraph shares.",
    estimatedMinutes: 15,
    tags: ["writing", "structure"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "pc1",
        title: "Build one perfect paragraph",
        prompt:
          "Write ONE paragraph (5–7 sentences) about why breakfast matters. Follow the topic → support → closing shape.",
        instructions: [
          "Sentence 1 (topic): state the main idea clearly.",
          "Sentences 2–4 (support): give two reasons and one example.",
          "Sentence 5+ (closing): restate the idea in new words.",
          "Keep every sentence about the same idea — if it wanders, cut it.",
        ],
        hints: [
          "A reader should understand the whole paragraph from sentence 1 alone.",
          "Support moves from reason → reason → example, never example → example → example.",
        ],
        difficulty: "medium",
        minWords: 60,
        maxWords: 150,
        targetMinutes: 10,
        checklist: [
          { id: "topic", label: "A clear topic sentence at the start", anyOf: ["breakfast is", "breakfast matters", "eating breakfast", "important", "the most important"] },
          { id: "reason1", label: "A first supporting reason", anyOf: ["first", "one reason", "because", "gives", "energy", "helps"] },
          { id: "reason2", label: "A second supporting reason", anyOf: ["second", "also", "moreover", "another", "in addition", "furthermore"] },
          { id: "example", label: "A concrete example", anyOf: ["for example", "for instance", "such as", "in my", "when i", "students who"] },
          { id: "closing", label: "A closing sentence", anyOf: ["in short", "overall", "that is why", "so ", "clearly", "these benefits", "for these reasons"] },
        ],
        topicKeywords: ["breakfast", "energy", "morning", "because", "important"],
        expectedParagraphs: { min: 1, max: 1 },
        modelText:
          "Eating a good breakfast is one of the simplest ways to improve a whole day. First, a morning meal gives the body energy after ten hours without food, which helps concentration in early classes and meetings. Second, people who eat breakfast are less likely to snack on sugar in the afternoon, so their mood stays steadier. For example, when I eat eggs and fruit at seven, I work steadily until lunch; when I skip breakfast, I am hungry and impatient by ten. In short, twenty minutes in the morning can buy a better ten hours.",
        modelTextNotes:
          "The paragraph never leaves the topic: every sentence is about breakfast's effect on the day.",
      },
    ],
  },
  {
    id: "wrt-int-descriptive",
    slug: "descriptive-writing",
    tier: "intermediate",
    kind: "descriptive-writing",
    title: "Descriptive Writing",
    description:
      "Bring a scene alive through the five senses — without ever naming the feeling you want the reader to feel.",
    estimatedMinutes: 15,
    tags: ["writing", "description"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "dw1",
        title: "A market morning",
        prompt:
          "Describe a busy market in the morning: 8–11 sentences. Use sight, sound and smell; show the atmosphere through details, not adjectives.",
        instructions: [
          "Open with a wide view (the whole market).",
          "Zoom in on two stalls or people.",
          "Include at least one sound and one smell.",
          "Close with a small detail that captures the mood.",
        ],
        hints: [
          "Show, don't tell: instead of 'it was noisy', write 'sellers called prices over each other'.",
          "Precise nouns beat vague adjectives: 'crates of silver fish' beats 'a lot of food'.",
        ],
        difficulty: "medium",
        minWords: 80,
        maxWords: 200,
        targetMinutes: 10,
        checklist: [
          { id: "wide", label: "Wide opening view", anyOf: ["market", "stalls", "street", "square", "everywhere", "full of"] },
          { id: "zoom1", label: "A first close-up detail", anyOf: ["one", "a woman", "a man", "an old", "the fish", "the fruit", "first stall", "nearby"] },
          { id: "zoom2", label: "A second close-up detail", anyOf: ["next", "beside", "another", "behind", "second"] },
          { id: "sound", label: "A sound", anyOf: ["sound", "noise", "called", "shout", "music", "radio", "laughed", "clatter", "bell", "voices"] },
          { id: "smell", label: "A smell", anyOf: ["smell", "smelled", "smelt", "scent", "aroma", "fresh bread", "coffee", "spices", "fish"] },
          { id: "mood", label: "A closing detail that captures the mood", anyOf: ["nobody", "everyone", "still", "already", "by ", "as the"] },
        ],
        topicKeywords: ["market", "stalls", "people", "fresh", "morning"],
        expectedParagraphs: { min: 1, max: 3 },
        modelText:
          "By seven the market street is already full. Crates of silver fish shine under white lamps, and the stone floor is wet from the ice. A woman in a green apron arranges tomatoes into a red pyramid, turning each one so its shiny side faces the buyers. Beside her, an old man sells coffee from a metal pot, and the smell of it mixes with the salt of the fish. Sellers call their prices over each other, half singing, and somewhere behind the stalls a radio plays old love songs. Two boys push a trolley through the crowd, shouting for space. By nine, the best tomatoes are gone, and the woman in the green apron is already planning tomorrow's pyramid.",
        modelTextNotes:
          "No sentence says 'busy' or 'lively' — the details say it instead.",
      },
    ],
  },
  {
    id: "wrt-int-narrative",
    slug: "narrative-writing",
    tier: "intermediate",
    kind: "narrative-writing",
    title: "Narrative Writing",
    description:
      "Tell a story with pace: set the scene, complicate it, resolve it — and let the last line land.",
    estimatedMinutes: 20,
    tags: ["writing", "story"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "nw1",
        title: "The missed bus",
        prompt:
          "Write a short story (10–14 sentences) that starts with 'The bus left without me.' Use past simple for events and past continuous for background.",
        instructions: [
          "Paragraph 1: scene + what happened (the complication).",
          "Paragraph 2: what you did about it.",
          "Paragraph 3: how it ended — ideally with a small surprise or change.",
        ],
        hints: [
          "Past continuous paints the background: 'It was raining, and I was holding…'",
          "The ending should echo or answer the opening — a story is a circle.",
        ],
        difficulty: "medium",
        minWords: 100,
        maxWords: 250,
        targetMinutes: 14,
        checklist: [
          { id: "opening", label: "Story starts with the given line", anyOf: ["the bus left without me"] },
          { id: "scene", label: "Scene set with background detail", anyOf: ["was raining", "was ", "were ", "morning", "cold", "late", "street"] },
          { id: "complication", label: "A complication or obstacle", anyOf: ["but", "suddenly", "problem", "realised", "realized", "couldn't", "could not", "no ", "forgot", "lost"] },
          { id: "action", label: "What you did about it", anyOf: ["i decided", "i ran", "i called", "i walked", "i asked", "so i", "i looked"] },
          { id: "resolution", label: "How it ended", anyOf: ["in the end", "finally", "eventually", "at last", "after that", "when i finally", "by the time"] },
          { id: "past", label: "Past tenses used", anyOf: [" was ", " were ", " had ", " went ", " saw ", " came ", " said ", " took ", " left ", " got "] },
        ],
        topicKeywords: ["bus", "was", "went", "then", "finally"],
        expectedParagraphs: { min: 2, max: 4 },
        modelText:
          "The bus left without me. It was raining lightly, and I was standing under the shelter with a cardboard box of books in my arms, so I could not run. The next bus was in forty minutes, and the interview was in thirty. I looked up and down the street: no taxis, one bicycle, a café with a warm light. I decided to walk. The rain got heavier, and by the third street my shoes were making strange noises. When I finally arrived, twenty minutes late and wet, the receptionist looked at me and smiled. 'You're the one who called from the café phone?' she asked. It was then I remembered: while walking, I had called the office from a phone borrowed in that café — and apologised so politely that the manager had already decided to wait for me. Sometimes the detour is the interview.",
        modelTextNotes:
          "The story answers its own problem: the phone call made during the walk becomes the reason everything works out.",
      },
    ],
  },
  {
    id: "wrt-int-experiences",
    slug: "personal-experiences",
    tier: "intermediate",
    kind: "personal-experiences",
    title: "Personal Experiences",
    description:
      "Write a true experience with the structure of a story: situation, moment, meaning.",
    estimatedMinutes: 15,
    tags: ["writing", "personal"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "pe1",
        title: "A day that changed something small",
        prompt:
          "Write about a real experience that changed you a little (9–12 sentences). End with what it taught you.",
        instructions: [
          "Set the situation: when, where, who.",
          "Describe the key moment slowly — this is the heart of the text.",
          "Say what changed afterwards.",
          "Close with the lesson, in one honest sentence.",
        ],
        hints: [
          "Choose a small event with a real effect — not 'moving abroad' but 'the evening I burnt the rice'.",
          "The meaning sentence should surprise you a little; if you could have written it before the story, the story is not doing its job.",
        ],
        difficulty: "medium",
        minWords: 90,
        maxWords: 220,
        targetMinutes: 12,
        checklist: [
          { id: "situation", label: "Situation: when, where, who", anyOf: ["when i was", "at the time", "years ago", "one ", "last ", "my ", "in "] },
          { id: "moment", label: "The key moment described closely", anyOf: ["i remember", "suddenly", "at that moment", "then i", "the moment", "i saw", "i heard", "i realised", "i realized"] },
          { id: "feelings", label: "How you felt", anyOf: ["felt", "afraid", "nervous", "proud", "happy", "embarrassed", "ashamed", "excited", "relieved", "angry", "sad"] },
          { id: "change", label: "What changed afterwards", anyOf: ["after that", "since then", "from that day", "changed", "never", "always", "started to"] },
          { id: "lesson", label: "The lesson, stated honestly", anyOf: ["taught me", "learned", "learnt", "i understand", "now i know", "i realised", "i realized"] },
        ],
        topicKeywords: ["i", "was", "me", "because", "learned"],
        expectedParagraphs: { min: 2, max: 4 },
        modelText:
          "When I was sixteen, I worked in my uncle's shop every Saturday. One afternoon an old woman came in to buy a radio, and she could not read the price tags. I was bored and tired, and I answered her questions without looking up from my phone. She thanked me politely, bought the cheapest radio, and left. Outside the window I watched her cross the street slowly, holding the bag with both hands, and suddenly I felt ashamed. Since that day, when someone asks me a question, I put my phone down and look at them. It cost me nothing, but it taught me that respect is mostly just attention.",
        modelTextNotes:
          "One sentence carries the change ('suddenly I felt ashamed') — the whole text leans on it.",
      },
    ],
  },
  {
    id: "wrt-int-letters",
    slug: "letters",
    tier: "intermediate",
    kind: "letters",
    title: "Letters",
    description:
      "Write a friendly informal letter with the classic shape: greeting, reason, news, questions, closing.",
    estimatedMinutes: 15,
    tags: ["writing", "letters"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "lt1",
        title: "A letter to an old friend",
        prompt:
          "Write an informal letter (10–14 sentences) to a friend you have not seen for a year.",
        instructions: [
          "Greeting: 'Dear…,' on its own line.",
          "Opening: say why you are writing.",
          "Middle: two or three pieces of news.",
          "Ask at least two questions about them.",
          "Closing: a warm sign-off line, then 'Best, / Love,' + your name.",
        ],
        hints: [
          "Informal contractions (I'm, don't, it's) are correct in friendly letters.",
          "Questions are the fuel of friendship — real ones, not 'How are you?' alone.",
        ],
        difficulty: "medium",
        minWords: 90,
        maxWords: 220,
        targetMinutes: 10,
        checklist: [
          { id: "greeting", label: "A greeting line", anyOf: ["dear "] },
          { id: "reason", label: "Why you are writing", anyOf: ["i'm writing", "i am writing", "i wanted to", "i thought i", "it's been", "its been", "i just"] },
          { id: "news", label: "Two or three pieces of news", anyOf: ["i've", "ive", "i have started", "i started", "we moved", "i got", "my new", "i began"] },
          { id: "questions", label: "Questions about them", anyOf: ["how are you", "how is", "how's", "what are you", "are you still", "did you", "how's your"] },
          { id: "closing", label: "A closing sign-off", anyOf: ["best,", "love,", "take care", "see you", "write back", "yours,"] },
        ],
        topicKeywords: ["you", "i", "how", "dear", "hope"],
        expectedParagraphs: { min: 3, max: 5 },
        modelText:
          "Dear Elena,\n\nIt's been almost a year since you moved to Lisbon, and yesterday I found the photo of us at the beach, so I decided to write you a real letter — with paper, like the old days.\n\nI have big news: I finally changed jobs. I'm working at a small veterinary clinic now, and although the pay is lower, I come home happy, which I did not know was possible. My sister got married in June, and your favourite cake — the lemon one — was the wedding cake. She thought of you.\n\nHow are you? Is the new studio as sunny as you hoped? Did your Portuguese class survive the winter? I want to hear everything.\n\nWrite back when you can — real letters, remember.\n\nLove,\nMarta",
        modelTextNotes:
          "Notice the paragraph jobs: reason → news → questions → closing. Each does exactly one thing.",
      },
    ],
  },
  {
    id: "wrt-int-emails",
    slug: "emails",
    tier: "intermediate",
    kind: "emails",
    title: "Emails",
    description:
      "A clear everyday email: subject, purpose in line one, short paragraphs, polite close.",
    estimatedMinutes: 12,
    tags: ["writing", "email"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "em1",
        title: "Email about a broken delivery",
        prompt:
          "Write an email (8–11 sentences) to a shop: your online order arrived broken. Ask politely for a solution.",
        instructions: [
          "Subject line that summarises the email in a few words.",
          "First sentence: state the purpose immediately.",
          "Give the facts: order number, what happened, when.",
          "Ask clearly for what you want (replacement or refund).",
          "Close politely with your name.",
        ],
        hints: [
          "Polite but direct: 'I am writing because…' beats 'I wanted to maybe ask if…'.",
          "Facts first, feelings second — the reader needs the order number more than your anger.",
        ],
        difficulty: "medium",
        minWords: 70,
        maxWords: 180,
        targetMinutes: 8,
        checklist: [
          { id: "subject", label: "A subject line", anyOf: ["subject:", "subject :"] },
          { id: "purpose", label: "Purpose stated in the first sentence", anyOf: ["i am writing", "i'm writing", "i write to", "this email is about", "i would like to inform"] },
          { id: "facts", label: "The facts (order, item, date)", anyOf: ["order", "#", "number", "on ", "arrived", "delivered", "received"] },
          { id: "problem", label: "What is wrong", anyOf: ["broken", "damaged", "cracked", "does not work", "doesn't work", "missing", "wrong"] },
          { id: "request", label: "A clear, polite request", anyOf: ["could you", "would it be possible", "i would like", "i would appreciate", "please send", "please replace", "refund"] },
          { id: "close", label: "A polite close and name", anyOf: ["kind regards", "best regards", "regards", "sincerely", "thank you", "best,"] },
        ],
        topicKeywords: ["order", "broken", "please", "thank", "regards"],
        expectedParagraphs: { min: 2, max: 4 },
        modelText:
          "Subject: Broken blender in order #48213\n\nDear Customer Service,\n\nI am writing about order #48213, which arrived on Tuesday, 3 June. The box was in good condition, but the blender inside was cracked and does not turn on.\n\nI have attached two photos of the damage. Could you please send a replacement, or, if that is not possible, refund the amount to my card? I am happy to return the broken item if you send me a label.\n\nThank you for your help.\n\nKind regards,\nAna Oliveira",
        modelTextNotes:
          "Every paragraph has one job: purpose → facts → request → close. Nothing extra.",
      },
    ],
  },
  {
    id: "wrt-int-summaries",
    slug: "summaries",
    tier: "intermediate",
    kind: "summaries",
    title: "Summaries",
    description:
      "Say the same thing in a third of the words: find the spine of a text and keep only that.",
    estimatedMinutes: 15,
    tags: ["writing", "summary"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "sm1",
        title: "Summarise the sleep passage",
        prompt:
          "Read the passage in the instructions, then write a summary of 40–60 words. Your own words, no new ideas.",
        instructions: [
          "THE PASSAGE: 'Sleep researchers have found that the hours before midnight are not magic — what matters is regularity. People who go to bed and wake up at the same time every day, even at weekends, report better concentration and mood than those who sleep the same total hours at irregular times. One study of 2,000 office workers found that a fixed wake-up time improved afternoon focus by roughly 20%, while going to bed late but regularly had no measurable cost. The researchers' conclusion is simple: the body rewards a schedule, not a number.'",
          "Write the main idea in your first sentence.",
          "Include the key finding (regularity beats total hours).",
          "Include ONE supporting detail (the study or the 20% figure).",
          "Do not add your own opinion.",
        ],
        hints: [
          "A summary answers: what is this about, and what is the one thing it proves?",
          "If a word appears in the passage, you may use it; if a whole sentence does, you may not.",
        ],
        difficulty: "medium",
        minWords: 30,
        maxWords: 80,
        targetMinutes: 10,
        checklist: [
          { id: "main", label: "The main idea in your own words", anyOf: ["regular", "schedule", "same time", "routine", "consistency"] },
          { id: "finding", label: "The key finding included", anyOf: ["more important than", "matters more", "not the total", "beats", "than hours", "regularity"] },
          { id: "detail", label: "One supporting detail", anyOf: ["study", "20", "workers", "researchers", "concentration", "focus"] },
          { id: "ownwords", label: "No personal opinion added", anyOf: ["i think", "in my opinion", "i believe", "i agree"] },
        ],
        topicKeywords: ["sleep", "regular", "time", "hours", "study"],
        expectedParagraphs: { min: 1, max: 2 },
        modelText:
          "According to sleep researchers, a regular schedule matters more than the total number of hours slept. In one study of 2,000 office workers, keeping fixed bed and wake times improved afternoon concentration by about 20%, while sleeping late — but at consistent times — had no measurable cost. The body rewards routine, not a number.",
        modelTextNotes:
          "46 words from a 120-word passage: main idea, key finding, one detail, nothing else.",
      },
    ],
  },
  {
    id: "wrt-int-essays",
    slug: "short-essays",
    tier: "intermediate",
    kind: "short-essays",
    title: "Short Essays",
    description:
      "The four-paragraph machine: introduction, two body paragraphs, conclusion.",
    estimatedMinutes: 20,
    tags: ["writing", "essay"],
    passThreshold: 60,
    tasks: [
      {
        type: "free",
        id: "se1",
        title: "Should phones be allowed in classrooms?",
        prompt:
          "Write a short essay (12–16 sentences) with a clear structure: introduction, two body paragraphs, conclusion.",
        instructions: [
          "Introduction: present the question and your position.",
          "Body 1: your strongest argument + one example.",
          "Body 2: a second argument, and answer the opposite view.",
          "Conclusion: restate your position in new words.",
        ],
        hints: [
          "Signpost the structure: 'First…', 'However…', 'In conclusion…'.",
          "One paragraph = one argument. Two arguments in one paragraph is half an argument each.",
        ],
        difficulty: "hard",
        minWords: 130,
        maxWords: 280,
        targetMinutes: 16,
        checklist: [
          { id: "intro", label: "Introduction with your position", anyOf: ["in my opinion", "i believe", "this essay", "should", "i think", "in my view"] },
          { id: "arg1", label: "First argument signposted", anyOf: ["first", "the main", "one reason", "to begin", "the strongest"] },
          { id: "example1", label: "An example supporting it", anyOf: ["for example", "for instance", "in my school", "when i", "students who", "many schools"] },
          { id: "arg2", label: "Second argument signposted", anyOf: ["second", "moreover", "another", "furthermore", "in addition", "additionally"] },
          { id: "counter", label: "The opposite view answered", anyOf: ["however", "critics", "opponents", "some people say", "on the other hand", "of course", "admittedly"] },
          { id: "conclusion", label: "A conclusion signal", anyOf: ["in conclusion", "to conclude", "in summary", "overall", "to sum up"] },
        ],
        topicKeywords: ["phones", "students", "classroom", "learning", "because"],
        expectedParagraphs: { min: 4, max: 5 },
        modelText:
          "Few questions divide teachers more than mobile phones in the classroom. In my opinion, phones should be allowed, but only under clear rules, because a ban wastes a teaching opportunity that is already in every pocket.\n\nFirst, phones are the cheapest research tool schools have ever had. For example, in my school's geography class, students use them to check live earthquake maps — something no textbook can offer. A complete ban would remove this resource to solve a problem that rules can solve instead.\n\nSecond, learning to manage a phone is itself a life skill. Critics argue that phones distract students, and this is true; but distraction does not disappear after school. Schools that require phones face-down on the desk report that students gradually learn self-control, which is exactly what exams and jobs will later demand.\n\nIn conclusion, the question is not whether students carry phones — they do — but whether schools teach them to use those phones well. Rules, not bans, are the better answer.",
        modelTextNotes:
          "Four paragraphs, four jobs: position, argument + example, argument + counter, restated position.",
      },
    ],
  },
];
