/**
 * PROMPT 35 production — Batch A, Chapter 01: Introduction to English.
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
  DL,
  EX,
  FB,
  GR,
  H,
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
  entries: { word: string; partOfSpeech: string; definition: string; example: string }[],
) {
  return VOC(
    "Your first words",
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

export const ch01Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — What Is English?
  // =========================================================================
  {
    slug: "ch-01-l-01",
    minutes: 25,
    description:
      "Meet the English language itself: what it is, where people speak it, why it opens doors — and the English words you already know.",
    outcomes: [
      "Say what English is in one simple sentence",
      "Name at least four countries where people speak English",
      "Recognise at least six English words you may already know",
      "Introduce yourself with “Hello! My name is …”",
    ],
    blocks: [
      LI(
        "Today you take your very first step into English. You will learn what English is, where people speak it, and why it is useful for you. At the end of the lesson you will introduce yourself in English — your very first complete act of communication in the language.",
        [
          "You can say hello (in any language).",
          "You know a few English words from daily life — for example ‘hello’, ‘taxi’ or ‘internet’.",
        ],
      ),
      H("What is a language?"),
      T(
        "A language is a system of sounds and words that people use to share ideas. When you speak, you send a message. When you listen, you receive a message. People use language to ask for things, to tell stories, to work together and to make friends. Every language does this job — Urdu, Hindi, Arabic, Spanish, Chinese and English.",
      ),
      {
        type: "definition",
        term: "language",
        partOfSpeech: "noun",
        definition:
          "A language is a system of sounds and words that people use to communicate — to share ideas, feelings and information.",
        example: {
          english: "English is a language.",
          translation: "So are Urdu, Hindi, Arabic, Spanish and Chinese.",
        },
      },
      H("So what is English?"),
      T(
        "English is one language among thousands. It started in England about 1,500 years ago, and today it is the world’s most used second language. Around 400 million people speak English as their first language. More than a billion people use it as an additional language — at work, at school, online and while travelling.",
      ),
      T(
        "Why is English everywhere? Trade, science, technology and travel have moved it around the world. When a scientist from Brazil meets a scientist from Japan, they usually speak English together. When you install a new app, English is usually the first language on the list.",
      ),
      TB(
        "Where people speak English",
        ["Country", "Continent", "English there"],
        [
          ["The United Kingdom", "Europe", "First language for most people"],
          ["The United States", "North America", "First language for most people"],
          ["Australia", "Oceania", "First language for most people"],
          ["India", "Asia", "Official language, used in work and study"],
          ["Nigeria", "Africa", "Official language, used in schools"],
          ["Pakistan", "Asia", "Official language, used in law and business"],
        ],
        "English is an official language in more than 50 countries.",
      ),
      AU(
        "Listen: what is English?",
        "English is a language. People speak English in many countries. You are learning English now.",
        0.85,
      ),
      H("You already know some English"),
      EXD(
        "English words you may already know",
        [
          { english: "hello", note: "People say this when they meet someone.", domain: "everyday" },
          { english: "taxi", note: "The same word is used in many languages.", domain: "travel" },
          { english: "internet", note: "Technology words are shared across languages.", domain: "technology" },
          { english: "pizza", note: "Food names travel between languages.", domain: "food" },
          { english: "football", note: "Sport words are often similar too.", domain: "sport" },
          { english: "bus", note: "A short, useful travel word.", domain: "travel" },
          { english: "phone", note: "You use this word every day.", domain: "technology" },
          { english: "university", note: "A place of study — similar in many languages.", domain: "education" },
        ],
        "If you know some of these words, you have already started. Learning English is not starting from zero — it is adding to words you already have.",
      ),
      US(
        [
          {
            situation: "The internet",
            example: "Most websites offer an English version.",
            note: "When you buy a phone or install an app, English is usually the first choice.",
          },
          {
            situation: "Travel",
            example: "Airport signs say: GATE 12 · EXIT · BAGGAGE.",
            note: "Airports use English almost everywhere in the world.",
          },
          {
            situation: "Work",
            example: "Job adverts often ask for “good English”.",
            note: "English can open better jobs and higher salaries.",
          },
          {
            situation: "Games and films",
            example: "Play the game in English. Watch the film with English sound.",
            note: "Fun is one of the best ways to practise.",
          },
          {
            situation: "Study",
            example: "Most scientific papers are written in English.",
            note: "Students use English textbooks in many countries.",
          },
        ],
        "Where you meet English",
        "English is not only in classrooms. It is already around you, every day.",
      ),
      DL(
        "Two neighbours meet in the street",
        "Amina and David are neighbours. They meet in the morning.",
        [
          ["Amina", "Hello, David!"],
          ["David", "Hello, Amina! How are you?"],
          ["Amina", "I’m fine, thank you. And you?"],
          ["David", "I’m very well, thanks. See you later!"],
          ["Amina", "Goodbye!"],
        ],
      ),
      ST(
        "Your first three steps in English",
        [
          {
            title: "Step 1 — Listen to the sound",
            text: "Play the audio in this lesson and listen two times before you read. Your ears learn the music of English before your eyes learn the words.",
            examples: [{ english: "English is a language.", note: "Just listen — no reading yet." }],
          },
          {
            title: "Step 2 — Say one word out loud",
            text: "Choose one word you already know, like “hello”, and say it five times. Speaking starts on day one, not “later”.",
            examples: [{ english: "Hello!", note: "One word is a real start." }],
          },
          {
            title: "Step 3 — Introduce yourself",
            text: "Use the frame “Hello! My name is …” with your own name. You have just communicated a real message in English.",
            examples: [{ english: "Hello! My name is Sara.", note: "Your first complete English sentence." }],
          },
        ],
      ),
      CMP(
        "First language vs additional language",
        ["First language (mother tongue)", "Additional language"],
        [
          ["How you learned it", "At home, as a small child", "At school, with lessons like this one"],
          ["When you started", "From birth", "You choose the moment — today works"],
          ["How it feels", "Automatic, effortless", "Built step by step — and every step counts"],
          ["Good news", "You did it once already!", "Your first language HELPS you learn English"],
        ],
        {
          intro: "Most people on Earth speak more than one language — you are joining the majority.",
          verdict:
            "You already learned one language as a child. Now you are learning one as an adult — with better tools and a clear plan.",
        },
      ),
      N(
        "How to use this lesson",
        "Say every example out loud — even quietly. Speaking builds memory faster than reading silently. This is your first habit of the course.",
      ),
      MS(
        [
          [
            "Me Maria.",
            "I am Maria.",
            "In English we introduce ourselves with “I am + name”, not “Me + name”.",
          ],
          [
            "english is easy.",
            "English is easy.",
            "The name of a language always starts with a capital (big) letter: English, Urdu, Hindi.",
          ],
          [
            "I am student.",
            "I am a student.",
            "English needs the little word “a” before a job: “a student”, “a teacher”, “a doctor”.",
          ],
        ],
        "Common beginner mistakes",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Sara. I am from Egypt. English is a new language for me, but I already know some words. I use “hello” every day at work. This year, I want to learn more English.",
          task: "Read the text two times — silently first, then out loud.",
        },
        writing: {
          task: "Write three or four sentences about you. Use the sentence starters.",
          guide: ["My name is …", "I am from …", "I want to learn English because …"],
          model:
            "My name is Omar. I am from Morocco. I want to learn English because I love football. My favourite team plays in England.",
        },
        listening: {
          script:
            "Hello! Welcome to your first English lesson. English is a language. People speak English in many countries. Let’s begin!",
          task: "Listen and count: how many times do you hear the word “English”?",
        },
        speaking: {
          task: "Say hello and introduce yourself out loud. Use the sentence frames.",
          frames: ["Hello! My name is …", "I am from …", "I am learning English."],
          checklist: [
            "I said my name clearly.",
            "I used “My name is …” or “I am …”.",
          ],
        },
      }),
      LSP(
        [
          gls("English is a language. People speak it in many countries."),
          gls("A small mistake is not a problem. Keep trying."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "English is a language — a system of sounds and words used for communication.",
        "About 400 million people speak English as a first language; over a billion use it as an additional language.",
        "English is an official language in more than 50 countries, including India, Nigeria and Pakistan.",
        "You already know English words such as “hello”, “taxi”, “internet”, “football” and “bus”.",
        "You meet English on the internet, in airports, at work, in games and in study.",
      ]),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question here has a hint. Use it whenever you are not sure.",
        questions: [
          MCQ(
            "What is English?",
            [
              ["a", "A language"],
              ["b", "A country"],
              ["c", "A school subject only"],
            ],
            "a",
            fb("A language", "English is a system of sounds and words people use to communicate."),
            { hints: ["Think about what English is used for: sharing ideas."] },
          ),
          FB(
            "Complete the sentence.",
            "People ___ English in many countries.",
            ["speak"],
            fb("speak", "“Speak English” is the normal verb for using a language."),
            { hints: ["Which verb do you use with a language?"] },
          ),
          MATCH(
            "Match each country with its continent.",
            [
              ["uk", "The United Kingdom"],
              ["in", "India"],
              ["au", "Australia"],
            ],
            [
              ["europe", "Europe"],
              ["asia", "Asia"],
              ["oceania", "Oceania"],
            ],
            [
              ["uk", "europe"],
              ["in", "asia"],
              ["au", "oceania"],
            ],
            fb("UK–Europe, India–Asia, Australia–Oceania", "These three countries are on three different continents."),
            { hints: ["The United Kingdom is in Europe."] },
          ),
          MCQ(
            "Which of these is an English word you may already know?",
            [
              ["a", "taxi"],
              ["b", "libro"],
              ["c", "书"],
            ],
            "a",
            fb("taxi", "“Taxi” is used in English and in many other languages."),
            { hints: ["Which word do you see on cars in the street?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          MCQ(
            "About how many people speak English as a FIRST language?",
            [
              ["a", "About 4 million"],
              ["b", "About 400 million"],
              ["c", "About 40 billion"],
            ],
            "b",
            fb("About 400 million", "Around 400 million people speak English as a first language; over a billion use it as a second language."),
          ),
          MCQ(
            "English is useful for…",
            [
              ["a", "travel only"],
              ["b", "study only"],
              ["c", "travel, study, work and the internet"],
            ],
            "c",
            fb("All of these", "English is useful in almost every part of modern life."),
          ),
          CORR(
            "Find and correct the mistake.",
            "i am learning english.",
            ["I am learning English."],
            fb(
              "I am learning English.",
              "“I” is always a capital letter, and the name of a language starts with a capital letter too.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My first English sentences",
      instructions:
        "Write two or three short sentences about why you are learning English. Start with: “I am learning English because …”. Do not worry about mistakes — you will fix them as you learn.",
      minWords: 10,
      maxWords: 60,
    },
    homework: [
      "Say “Hello! My name is …” out loud five times today.",
      "Find three English words around you (on clothes, phones or signs) and write them down.",
      "Listen to one English song or watch one game this week — just enjoy the sound.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Language and Communication
  // =========================================================================
  {
    slug: "ch-01-l-02",
    minutes: 25,
    description:
      "Discover what communication really is, meet the four skills — listening, speaking, reading and writing — and see which ones you already use every day.",
    outcomes: [
      "Explain what communication means with a simple example",
      "Name the four language skills and say what each one does",
      "Identify which skills you use in everyday situations",
      "Follow a message from sender to receiver",
    ],
    blocks: [
      LI(
        "In this lesson you learn what communication is, and you meet the four language skills: listening, speaking, reading and writing. You will discover which skills you already use every day in your own language — and how English lessons will train all four.",
        [
          "You can say what English is (Lesson 1).",
          "You know some English words, for example “hello” and “taxi”.",
        ],
      ),
      H("What is communication?"),
      T(
        "Communication is sharing ideas between people. One person sends a message — with sounds, words or writing. Another person receives it and understands it. When the message arrives and is understood, communication is successful.",
      ),
      {
        type: "definition",
        term: "communication",
        partOfSpeech: "noun",
        definition:
          "Communication is the act of sharing ideas, feelings and information between people.",
        example: {
          english: "You say “Hello!” and your friend answers “Hello!”.",
          translation: "That is communication.",
        },
      },
      GR(
        "Every message has a sender and a receiver",
        "Every act of communication has two roles: the sender (the person who speaks or writes) and the receiver (the person who listens or reads). If the receiver does not understand, communication fails — even if the words were correct.",
        [
          { english: "Amina says: “Hello, David!”", translation: "Amina is the sender." },
          { english: "David hears and answers: “Hello, Amina!”", translation: "David is the receiver — then he becomes the sender." },
        ],
      ),
      H("The four language skills"),
      T(
        "Learners use four skills. Two of them receive messages and two of them send messages. Here is the important news: you already use all four in your own language, every single day. Learning English means training these four skills in a new language.",
      ),
      TB(
        "The four skills",
        ["Skill", "Your job", "Everyday example"],
        [
          ["Listening", "Receive spoken messages", "You understand a friend on the phone."],
          ["Speaking", "Send spoken messages", "You order a coffee."],
          ["Reading", "Receive written messages", "You read a message from your family."],
          ["Writing", "Send written messages", "You write a shopping list."],
        ],
        "Listening and reading RECEIVE. Speaking and writing SEND.",
      ),
      ST(
        "How a message travels",
        [
          {
            title: "Step 1 — The idea",
            text: "Communication starts with an idea in the sender’s head.",
            examples: [{ english: "Maria thinks: “I want to invite Leo for tea.”" }],
          },
          {
            title: "Step 2 — The message",
            text: "The sender turns the idea into words — spoken or written.",
            examples: [{ english: "Maria says: “Leo, would you like some tea?”" }],
          },
          {
            title: "Step 3 — The channel",
            text: "The message travels through a channel: sound through the air, or writing on paper or a screen.",
            examples: [{ english: "Leo hears Maria’s words in the kitchen." }],
          },
          {
            title: "Step 4 — Understanding and answer",
            text: "The receiver understands and can answer. Now the roles switch: Leo becomes the sender.",
            examples: [{ english: "Leo answers: “Yes, please! Tea would be lovely.”" }],
          },
        ],
        "Follow one simple conversation from idea to answer.",
      ),
      GR(
        "Real communication mixes skills",
        "In real life the four skills work together. A phone call uses listening and speaking. A text chat uses reading and writing. A good English lesson trains all four — and so does this course.",
        [
          { english: "On the phone", translation: "listening + speaking" },
          { english: "In a text chat", translation: "reading + writing" },
          { english: "In English class", translation: "all four skills" },
        ],
      ),
      EXD(
        "One message, many channels",
        [
          { english: "Can you buy milk? (said at home)", note: "Speaking — quick, informal, with face and hands.", domain: "home" },
          { english: "Can you buy milk? (sent as a message)", note: "Writing — the same message, now in marks.", domain: "technology" },
          { english: "Milk, please. (at the shop counter)", note: "Speaking — shorter, because the situation says the rest.", domain: "shopping" },
          { english: "MILK (on a shopping list)", note: "Writing — one word is enough for you.", domain: "shopping" },
          { english: "Excuse me, do you have milk? (asking in a big store)", note: "Speaking — polite and complete for a stranger.", domain: "shopping" },
          { english: "Dear Mr Patel, could you add milk to our order?", note: "Writing — formal messages use full sentences.", domain: "work" },
          { english: "milk? (a quick text to a family member)", note: "Writing — real messages can be one word when the context is clear.", domain: "family" },
          { english: "Listen: “We need milk and eggs.”", note: "Listening — the same request arrives through your ears.", domain: "everyday" },
        ],
        "The same simple message travels through different skills and situations. Notice how the words change with each one.",
      ),
      US(
        [
          {
            situation: "At the market",
            example: "You listen to the price, then say: “Two kilos, please.”",
            note: "listening + speaking",
          },
          {
            situation: "On social media",
            example: "You read a post and write a comment.",
            note: "reading + writing",
          },
          {
            situation: "At work",
            example: "You listen in a meeting and write short notes.",
            note: "listening + writing",
          },
          {
            situation: "Watching a film",
            example: "You listen to the actors and read the subtitles.",
            note: "listening + reading",
          },
          {
            situation: "In English class",
            example: "You listen, speak, read and write.",
            note: "all four skills",
          },
        ],
        "Which skills do you use?",
        "Look at each situation and notice which skills it needs. You already do this every day in your own language.",
      ),
      DL(
        "At the fruit market",
        "Rania is buying fruit. Watch how listening and speaking work together.",
        [
          ["Seller", "Good morning! Apples are fresh today."],
          ["Rania", "Good morning. How much are the apples?"],
          ["Seller", "Ten pounds a kilo."],
          ["Rania", "One kilo, please."],
          ["Seller", "Here you are. Anything else?"],
          ["Rania", "No, thank you. Goodbye!"],
        ],
      ),
      CMP(
        "Receiving skills vs sending skills",
        ["Receiving (IN)", "Sending (OUT)"],
        [
          ["The skills", "Listening and reading", "Speaking and writing"],
          ["Your job", "Understand the message", "Create the message"],
          ["The speed", "The sender chooses the speed", "You choose the speed"],
          ["Learning focus", "Learn to recognise words and sounds", "Learn to build words and sentences"],
          ["Best practice habit", "Listen and read a lot every day", "Speak and write a little every day"],
        ],
        {
          intro: "The four skills divide into two pairs. Understanding the pairs helps you plan your practice.",
          verdict:
            "Good learners train all four skills — they receive a lot, and they send a little every day.",
        },
      ),
      MS(
        [
          [
            "I am learning English for listen to music.",
            "I am learning English to listen to music.",
            "Use “to + verb” to give a reason: “to listen”, “to work”, “to travel”.",
          ],
          [
            "I can to speak a little English.",
            "I can speak a little English.",
            "After “can”, use the plain verb: “can speak”, not “can to speak”.",
          ],
          [
            "He is teacher.",
            "He is a teacher.",
            "Jobs need “a”: “a teacher”, “a doctor”, “a student”.",
          ],
        ],
        "Common mistakes",
      ),
      AU("Listen: the four skills", "Listening. Speaking. Reading. Writing. These are the four skills.", 0.8),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Kenji lives in Japan. His English is new. Every morning he listens to English songs on the train, and he reads the words of the songs on his phone. In the evening, he writes one English sentence in his notebook and says it out loud. Kenji uses all four skills every day.",
          task: "Find the four skills in the text. What does Kenji do for each one?",
        },
        writing: {
          task: "Write four sentences about you — one for each skill.",
          guide: ["I listen to …", "I speak … with …", "I read …", "I write …"],
          model:
            "I listen to English songs. I speak English with my teacher. I read easy English stories. I write new words in my notebook.",
        },
        listening: {
          script:
            "Amina: Hello, Leo! How are you? Leo: I’m fine, thank you. And you? Amina: I’m very well. Let’s practise English today! Leo: Yes! Let’s speak English together.",
          task: "Listen. How many times do you hear the word “English”?",
        },
        speaking: {
          task: "Choose two situations from this lesson and say what you do in them.",
          frames: [
            "At the market, I listen and speak.",
            "On social media, I read and write.",
            "In class, I use all four skills.",
          ],
          checklist: [
            "I named two skills for each situation.",
            "I said the sentences out loud.",
          ],
        },
      }),
      LSP(
        [
          gls("Communication means sharing ideas with other people."),
          gls("Listening, speaking, reading and writing are the four skills."),
          gls("Listen first, then speak."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Communication is sharing ideas between a sender and a receiver.",
        "The four skills are listening, speaking, reading and writing.",
        "Listening and reading receive messages; speaking and writing send messages.",
        "Real communication usually mixes two or more skills at the same time.",
        "You already use all four skills in your own language — English trains them again.",
      ]),
      RV(
        [
          {
            question: "What is English?",
            options: ["A language", "A country", "A school subject only"],
            correctIndex: 0,
            explanation:
              "English is a language — a system of sounds and words people use to communicate.",
            from: "Chapter 01 · Lesson 1",
          },
          {
            question: "English is an official language in…",
            options: ["only England", "more than 50 countries", "only two countries"],
            correctIndex: 1,
            explanation:
              "English is official in more than 50 countries, including India, Nigeria and Pakistan.",
            from: "Chapter 01 · Lesson 1",
          },
          {
            question: "Which word from Lesson 1 is an English word?",
            options: ["libro", "internet", "书"],
            correctIndex: 1,
            explanation:
              "“Internet” is an English technology word used in many languages.",
            from: "Chapter 01 · Lesson 1",
          },
        ],
        { title: "Revision — do you remember Lesson 1?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Stuck? Every question has a hint.",
        questions: [
          MCQ(
            "What is communication?",
            [
              ["a", "Speaking very fast"],
              ["b", "Sharing ideas between people"],
              ["c", "A school subject"],
            ],
            "b",
            fb("Sharing ideas between people", "Communication needs a sender and a receiver — and understanding."),
            { hints: ["Think about the sender and the receiver."] },
          ),
          MCQ(
            "Which two skills SEND messages?",
            [
              ["a", "Listening and reading"],
              ["b", "Speaking and writing"],
              ["c", "Reading and writing"],
            ],
            "b",
            fb("Speaking and writing", "Speaking sends sound; writing sends marks. Listening and reading receive."),
            { hints: ["Which skills produce a message that travels to someone?"] },
          ),
          FB(
            "Complete the sentence.",
            "On the phone, I listen and ___.",
            ["speak"],
            fb("speak", "A phone call uses listening (in) and speaking (out)."),
            { hints: ["What is the OUT skill of a phone call?"] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "How many language skills are there?",
            [
              ["a", "Two"],
              ["b", "Four"],
              ["c", "Six"],
            ],
            "b",
            fb("Four", "Listening, speaking, reading and writing."),
          ),
          MCQ(
            "In a text chat you use…",
            [
              ["a", "listening and speaking"],
              ["b", "reading and writing"],
              ["c", "all four skills"],
            ],
            "b",
            fb("Reading and writing", "You read the messages and write your answers."),
          ),
          CORR(
            "Find and correct the mistake.",
            "She speak English.",
            ["She speaks English."],
            fb(
              "She speaks English.",
              "With he, she and it, the verb takes -s: “she speaks”.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My four-skills plan",
      instructions:
        "Write four short sentences about your English week: what will you listen to, who will you speak with, what will you read, and what will you write? Use the starters from the four-skills card.",
      minWords: 15,
      maxWords: 70,
    },
    homework: [
      "Choose one song in English. Listen to it two times this week.",
      "Say “Hello! How are you?” to a friend or family member — in English.",
      "Write one new English word in a notebook every day this week.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Spoken and Written English
  // =========================================================================
  {
    slug: "ch-01-l-03",
    minutes: 25,
    description:
      "The same language reaches you through your ears and through your eyes. Learn how spoken and written English differ — and why knowing the difference makes learning faster.",
    outcomes: [
      "Explain the difference between spoken and written English",
      "Recognise short forms like I’m, she’s, we’re in listening",
      "Use full stops, question marks and exclamation marks in writing",
      "Write a short invitation message with one short form",
    ],
    blocks: [
      LI(
        "English reaches you in two ways: through your ears and through your eyes. In this lesson you learn how spoken English (what you hear) and written English (what you read) differ — and why understanding the difference makes you a faster learner.",
        [
          "You know the four skills: listening, speaking, reading and writing (Lesson 2).",
          "You can introduce yourself with “Hello! My name is …” (Lesson 1).",
        ],
      ),
      H("Two forms of one language"),
      T(
        "English is one language, but it comes in two main forms. Spoken English is sound — it enters through your ears. Written English is marks on paper or a screen — it enters through your eyes. Both forms carry the same language, but they behave differently.",
      ),
      {
        type: "definition",
        term: "spoken English",
        partOfSpeech: "noun phrase",
        definition: "Spoken English is English that people say and hear.",
        example: {
          english: "“See you tomorrow!” — said on the phone.",
          translation: "Sound, gone as soon as it is said.",
        },
      },
      {
        type: "definition",
        term: "written English",
        partOfSpeech: "noun phrase",
        definition: "Written English is English that people write and read.",
        example: {
          english: "“See you tomorrow.” — written in a message.",
          translation: "Marks that stay and can be read again.",
        },
      },
      CMP(
        "Spoken English vs written English",
        ["Spoken English", "Written English"],
        [
          ["How it travels", "Sound through the air", "Marks on paper or a screen"],
          ["How long it lasts", "It disappears quickly", "It stays — you can read it again"],
          ["Extra help", "Tone, face and hands help the message", "Punctuation marks ( . ? ! ) do this job"],
          ["Typical places", "Conversations, phone calls, songs", "Books, messages, signs, websites"],
          ["Skills used", "Listening and speaking", "Reading and writing"],
        ],
        {
          intro: "The same language behaves differently in your ears and in your eyes.",
          verdict: "Neither form is “better” — strong learners use both every day.",
        },
      ),
      ST(
        "How to hear and see the difference",
        [
          {
            title: "Step 1 — Listen for short forms",
            text: "In natural speech, speakers join words and shorten them. “I am” becomes “I’m”. “She is” becomes “She’s”. “We are” becomes “We’re”.",
            examples: [
              { english: "I am fine.", note: "Full form — careful and clear." },
              { english: "I’m fine.", note: "Short form — natural speech." },
              { english: "She’s at home. We’re ready.", note: "Two more short forms you will hear every day." },
            ],
          },
          {
            title: "Step 2 — Look for punctuation in writing",
            text: "Writing cannot use tone of voice, so marks do the work. A full stop ( . ) ends a sentence. A question mark ( ? ) asks. An exclamation mark ( ! ) shows strong feeling.",
            examples: [
              { english: "My name is Sara.", note: "A statement ends with a full stop." },
              { english: "What is your name?", note: "A question ends with a question mark." },
              { english: "What a beautiful day!", note: "Strong feeling ends with an exclamation mark." },
            ],
          },
          {
            title: "Step 3 — Expect speech to be less exact",
            text: "People say “wanna” for “want to” and “gonna” for “going to”. In writing, always use the full forms.",
            examples: [
              { english: "Do you wanna come?", note: "Spoken only — never write this in school work." },
              { english: "Do you want to come?", note: "Write this." },
            ],
          },
        ],
      ),
      EXD(
        "Written English around you",
        [
          { english: "EXIT", note: "Signs use short, clear words.", domain: "travel" },
          { english: "OPEN 9:00 – 22:00", note: "Shops show their hours in writing.", domain: "shopping" },
          { english: "Wi-Fi password: coffee123", note: "Technical information is written down.", domain: "technology" },
          { english: "Sale! 50% off everything", note: "Adverts are written English.", domain: "shopping" },
          { english: "Dear Mr Ali, thank you for your message.", note: "Emails start politely.", domain: "work" },
          { english: "Gate 12 closes at 18:45.", note: "Airport screens repeat announcements in writing.", domain: "travel" },
          { english: "Homework: pages 4–6, exercise 2.", note: "Teachers write instructions.", domain: "education" },
          { english: "Milk, eggs, bread, tea", note: "Even a shopping list is written English.", domain: "home" },
        ],
        "You read hundreds of English words every week — often without noticing.",
      ),
      EXD(
        "Spoken English around you",
        [
          { english: "Excuse me, where is the bus stop?", note: "A question you say, not write.", domain: "travel" },
          { english: "One coffee, please.", note: "The shortest useful sentence in a café.", domain: "everyday" },
          { english: "Could you repeat that, please?", note: "Say this when you do not understand. It always works.", domain: "social" },
          { english: "Nice to meet you!", note: "Spoken when you meet someone new.", domain: "work" },
          { english: "I’ll be there in five minutes.", note: "“I’ll” is the spoken short form of “I will”.", domain: "everyday" },
          { english: "See you later!", note: "A friendly goodbye.", domain: "social" },
        ],
        "Notice how short and quick spoken sentences are.",
      ),
      DL(
        "A call and a message",
        "First Priya calls Tom. Then she sends him a message about the same thing.",
        [
          ["Priya (speaking)", "Hi Tom! I’m at the station. Where are you?"],
          ["Tom (speaking)", "Hi Priya! I’m on the bus. I’ll be there in ten minutes."],
          ["Priya (writing)", "At the station. Coffee shop near gate 2."],
          ["Tom (writing)", "Coming! 10 min."],
        ],
      ),
      N(
        "Spot the difference",
        "The phone call uses full, friendly sentences. The messages cut everything short: “Coming! 10 min.” Both are correct English — for their situation.",
      ),
      US(
        [
          {
            situation: "Phone calls",
            example: "You listen and speak in real time.",
            note: "Spoken English — short forms are normal.",
          },
          {
            situation: "WhatsApp or SMS",
            example: "You read and write quick messages.",
            note: "Written English — but short and fast, like speech.",
          },
          {
            situation: "Meetings",
            example: "You listen, speak and read slides at the same time.",
            note: "Both forms together.",
          },
          {
            situation: "Forms and documents",
            example: "You read and write careful English.",
            note: "Written English — full forms, no shortcuts.",
          },
        ],
        "Where each form lives",
      ),
      MS(
        [
          [
            "what is your name",
            "What is your name?",
            "Written questions need a capital letter at the start and a question mark ( ? ) at the end.",
          ],
          [
            "I wanna learn english",
            "I want to learn English.",
            "Write full forms (“want to”, not “wanna”) and use a capital E for English.",
          ],
          [
            "i’m fine",
            "I’m fine.",
            "The word “I” is always a capital letter, and a written sentence ends with a full stop.",
          ],
        ],
        "Common mistakes",
      ),
      GR(
        "The punctuation rules of written English",
        "Rule 1: A statement ends with a full stop ( . ). Rule 2: A question ends with a question mark ( ? ). Rule 3: A strong feeling ends with an exclamation mark ( ! ). Punctuation does in writing what your voice does in speech.",
        [
          { english: "I am from Cairo.", translation: "Statement — voice goes down, pen writes a full stop." },
          { english: "Where are you from?", translation: "Question — voice goes up, pen writes a question mark." },
          { english: "What a city!", translation: "Strong feeling — voice lifts, pen writes an exclamation mark." },
        ],
      ),
      W(
        "Spelling is not sound",
        "English spelling does not always match pronunciation. The word “know” starts with a silent k. Do not worry — Chapters 3, 4 and 5 teach you the sound–spelling patterns step by step.",
      ),
      AU(
        "Listen: short forms",
        "I’m fine. She’s at home. We’re ready. They’re students.",
        0.8,
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Hi Ana! The party starts at 8. It’s at Marco’s flat, King Street 14. Bring something to drink! See you there — Sam",
          task: "This is a written message. Find: one short form, two numbers and two punctuation marks.",
        },
        writing: {
          task: "Write a short invitation message to a friend. Use at least one short form (I’m, It’s, We’re).",
          guide: ["Hi …!", "The party is at …", "It starts at …", "See you there!"],
          model:
            "Hi Leila! We’re having dinner at my flat on Friday. It starts at 7. Bring a friend! See you there — Nadia",
        },
        listening: {
          script:
            "Hi! It’s me, Sam. I’m at the station now. The train is late — ten minutes, maybe more. Wait for me at the café. See you soon!",
          task: "Listen. Where is Sam, and where should you wait?",
        },
        speaking: {
          task: "Say this phone message out loud — first slowly, then at natural speed.",
          frames: ["Hi! It’s …", "I’m at …", "See you soon!"],
          checklist: [
            "I used a short form like “I’m”.",
            "I said the whole message without stopping.",
          ],
        },
      }),
      LSP(
        [
          gls("Spoken English is the English you hear."),
          gls("Written English is the English you read."),
          gls("Listen first, then speak."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Spoken English arrives through your ears; written English arrives through your eyes.",
        "Speech disappears quickly; writing stays and can be re-read.",
        "Speakers use short forms (I’m, she’s, we’re) and punctuation does the job of tone in writing.",
        "Write full forms (“want to”, not “wanna”) in school and work.",
        "You learn to speak by listening, and to write by reading — input first, output second.",
      ]),
      RV(
        [
          {
            question: "How many language skills are there?",
            options: ["Two", "Four", "Six"],
            correctIndex: 1,
            explanation: "Listening, speaking, reading and writing — the four skills.",
            from: "Chapter 01 · Lesson 2",
          },
          {
            question: "Which two skills RECEIVE messages?",
            options: [
              "Listening and reading",
              "Speaking and writing",
              "Writing and listening",
            ],
            correctIndex: 0,
            explanation: "Listening receives sound; reading receives writing.",
            from: "Chapter 01 · Lesson 2",
          },
          {
            question: "What does every message need?",
            options: [
              "A sender and a receiver",
              "A phone",
              "Long words",
            ],
            correctIndex: 0,
            explanation:
              "The sender creates the message; the receiver understands it.",
            from: "Chapter 01 · Lesson 2",
          },
        ],
        { title: "Revision — do you remember Lesson 2?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "Spoken English reaches you through your…",
            [
              ["a", "ears"],
              ["b", "eyes"],
              ["c", "hands"],
            ],
            "a",
            fb("Ears", "Spoken English is sound. Written English reaches you through your eyes."),
            { hints: ["Is sound for hearing or seeing?"] },
          ),
          FB(
            "Write the short form.",
            "She is at home. → She___ at home.",
            ["’s", "'s"],
            fb("She’s", "“She is” becomes “she’s” in natural speech and friendly writing."),
            { hints: ["Short forms use an apostrophe ( ’ )."] },
          ),
          MCQ(
            "Which sentence is correct for school work?",
            [
              ["a", "I wanna read this book."],
              ["b", "I want to read this book."],
              ["c", "I want read this book."],
            ],
            "b",
            fb("I want to read this book.", "Write full forms. “Wanna” is only for casual speech."),
            { hints: ["Full form of “wanna” = want to."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "Which mark ends a question?",
            [
              ["a", "A full stop ( . )"],
              ["b", "A question mark ( ? )"],
              ["c", "An exclamation mark ( ! )"],
            ],
            "b",
            fb("A question mark", "Questions end with “?” — in writing, the question mark does the job of a questioning voice."),
          ),
          MCQ(
            "Why does writing need punctuation marks?",
            [
              ["a", "Writing cannot use tone of voice"],
              ["b", "They make sentences longer"],
              ["c", "They are only for decoration"],
            ],
            "a",
            fb(
              "Writing cannot use tone of voice",
              "Marks like . ? ! show where a sentence ends and what feeling it carries.",
            ),
          ),
          CORR(
            "Find and correct the mistake.",
            "i am fine",
            ["I am fine.", "I’m fine."],
            fb(
              "I am fine. / I’m fine.",
              "“I” is always a capital letter, and a written sentence ends with a full stop.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "One message, two forms",
      instructions:
        "Write the same short message twice. First, write it as a spoken phone message (full sentences, friendly). Then write it as a text message (short, quick). Example topic: you are late for coffee with a friend.",
      minWords: 15,
      maxWords: 80,
    },
    homework: [
      "Listen to two minutes of English audio today (a song, a game, or a video).",
      "Send one written message today — a shopping list or a note counts.",
      "Find one written English sign on your street and copy it into your notebook.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Letters, Words, Phrases and Sentences
  // =========================================================================
  {
    slug: "ch-01-l-04",
    minutes: 25,
    description:
      "Climb the ladder of English: letters build words, words build phrases, phrases build sentences. Learn how one sentence is put together piece by piece.",
    outcomes: [
      "Explain what a letter, a word, a phrase and a sentence are",
      "Break a simple sentence into its words",
      "Recognise that a sentence starts with a capital letter and ends with a full stop",
      "Build a two-word phrase and a complete simple sentence",
    ],
    blocks: [
      LI(
        "Every language is built like a tower. Small pieces join to make bigger pieces. In this lesson you climb the English ladder: letters make words, words make phrases, and phrases make sentences. At the top of the ladder you will read your first complete English sentences and see exactly how they are built.",
        [
          "You know the difference between spoken and written English (Lesson 3).",
          "You can read simple English words like “hello” and “bus” (Lesson 1).",
        ],
      ),
      H("The ladder of language"),
      T(
        "Look at a word like “cat”. It is built from three letters: c, a, t. Now look at a sentence like “The cat is black.” It is built from four words. English builds from small to large — every piece has its name.",
      ),
      {
        type: "definition",
        term: "letter",
        partOfSpeech: "noun",
        definition:
          "A letter is a single written mark. English has 26 letters, from A to Z. Letters are the smallest building blocks of written English.",
        example: { english: "c · a · t", translation: "Three letters." },
      },
      {
        type: "definition",
        term: "word",
        partOfSpeech: "noun",
        definition:
          "A word is one or more letters with a meaning. Words are separated by spaces when we write.",
        example: { english: "cat", translation: "One word — an animal." },
      },
      {
        type: "definition",
        term: "phrase",
        partOfSpeech: "noun",
        definition:
          "A phrase is a small group of words that belongs together, but it is not a complete sentence on its own.",
        example: { english: "the black cat", translation: "A phrase — you know what it is, but nothing happens." },
      },
      {
        type: "definition",
        term: "sentence",
        partOfSpeech: "noun",
        definition:
          "A sentence is a group of words that expresses a complete idea. A written sentence starts with a capital letter and ends with a full stop, a question mark or an exclamation mark.",
        example: { english: "The black cat is sleeping.", translation: "A complete idea — this is a sentence." },
      },
      TB(
        "The ladder: from letter to sentence",
        ["Level", "Example", "What it is"],
        [
          ["Letters", "c · a · t · b · l · k", "Single written marks — the smallest pieces"],
          ["Words", "cat · black · is · sleeping", "Letters with a meaning, separated by spaces"],
          ["Phrases", "the black cat", "A small word group — not a complete idea"],
          ["Sentences", "The black cat is sleeping.", "A complete idea: capital letter → full stop"],
        ],
        "Small pieces join to make bigger pieces. Climb the ladder from bottom to top.",
      ),
      GR(
        "Two rules of every written sentence",
        "Rule 1: A sentence starts with a capital (big) letter. Rule 2: A sentence ends with a full stop ( . ), a question mark ( ? ) or an exclamation mark ( ! ).",
        [
          { english: "My name is Sara.", translation: "Statement → full stop." },
          { english: "What is your name?", translation: "Question → question mark." },
          { english: "What a big cat!", translation: "Strong feeling → exclamation mark." },
        ],
      ),
      ST(
        "How to build a sentence, step by step",
        [
          {
            title: "Step 1 — Choose your words",
            text: "Pick the words you need for your idea: “I”, “drink”, “tea”, “every morning”.",
          },
          {
            title: "Step 2 — Put them in order",
            text: "English word order matters. The doer comes first, then the action, then the rest: “I drink tea”.",
            examples: [{ english: "I drink tea.", note: "doer + action + thing" }],
          },
          {
            title: "Step 3 — Add the sentence signals",
            text: "Start with a capital letter and end with a full stop: “I drink tea every morning.”",
            examples: [
              { english: "I drink tea every morning.", note: "A complete, correct sentence." },
            ],
          },
        ],
        "Follow the three steps and you can build any simple sentence.",
      ),
      EXD(
        "The ladder in real life — letters → words → phrases → sentences",
        [
          {
            english: "Letters: b · u · s → Word: bus",
            note: "Three letters, one word.",
            domain: "travel",
          },
          {
            english: "Word: bus → Phrase: the school bus → Sentence: The school bus is late.",
            note: "Watch the phrase grow into a complete idea.",
            domain: "education",
          },
          {
            english: "Letters: t · e · a → Word: tea → Sentence: I drink tea.",
            note: "From three letters to a full sentence.",
            domain: "everyday",
          },
          {
            english: "Word: family → Phrase: my family → Sentence: My family is big.",
            note: "Possession first, then the complete idea.",
            domain: "family",
          },
          {
            english: "Word: open → Phrase: the open shop → Sentence: The shop is open.",
            note: "Signs often shorten this to one word: OPEN.",
            domain: "shopping",
          },
          {
            english: "Word: work → Phrase: at work → Sentence: My father is at work.",
            note: "Phrases tell us where and when; sentences tell us the whole idea.",
            domain: "work",
          },
          {
            english: "Word: phone → Phrase: my phone → Sentence: My phone is new.",
            note: "The same ladder works for technology words.",
            domain: "technology",
          },
          {
            english: "Word: read → Phrase: read a book → Sentence: I read a book at home.",
            note: "One more word (“at home”) still keeps the sentence complete.",
            domain: "home",
          },
        ],
        "Every example climbs the same ladder: letters → words → phrases → sentences.",
      ),
      vocGlossary([
        { word: "book", partOfSpeech: "noun", definition: "Pages with words that you read.", example: "I read a book." },
        { word: "school", partOfSpeech: "noun", definition: "The place where children learn.", example: "The school is big." },
        { word: "teacher", partOfSpeech: "noun", definition: "A person who helps you learn.", example: "My teacher is kind." },
        { word: "student", partOfSpeech: "noun", definition: "A person who learns.", example: "I am a student." },
        { word: "family", partOfSpeech: "noun", definition: "Parents, children, brothers and sisters.", example: "My family is big." },
        { word: "friend", partOfSpeech: "noun", definition: "A person you like and know well.", example: "My friend is here." },
      ]),
      US(
        [
          {
            situation: "Street signs",
            example: "STOP · EXIT · HOTEL",
            note: "Signs often stop at the word level — one strong word says everything.",
          },
          {
            situation: "Shopping lists",
            example: "milk · bread · tea",
            note: "Lists use words, not sentences.",
          },
          {
            situation: "Messages",
            example: "At the shop. Back in 10 min.",
            note: "Quick messages mix words and phrases.",
          },
          {
            situation: "Emails and letters",
            example: "Dear Sara, thank you for your message.",
            note: "Careful writing uses complete sentences.",
          },
        ],
        "Words or sentences? Choose the right size",
        "Real communication chooses the right level of the ladder for the job — quick words for quick messages, full sentences for careful writing.",
      ),
      DL(
        "Big pieces and small pieces",
        "A teacher builds a sentence on the board with her class.",
        [
          ["Teacher", "Give me one word. Any word."],
          ["Student", "Dog!"],
          ["Teacher", "Good. Now let’s make a phrase: “a big dog”."],
          ["Student", "A big dog."],
          ["Teacher", "Now a sentence: “A big dog is running.”"],
          ["Student", "A big dog is running."],
          ["Teacher", "Perfect. You just climbed the whole ladder."],
        ],
      ),
      CMP(
        "Phrase vs sentence — the completion test",
        ["Phrase (incomplete)", "Sentence (complete)"],
        [
          ["Animals", "the black cat", "The black cat is sleeping."],
          ["Time", "after school", "We play football after school."],
          ["Food", "a cup of tea", "I want a cup of tea."],
          ["Home", "on the table", "Your keys are on the table."],
          ["Technology", "my new phone", "My new phone is fast."],
        ],
        {
          intro: "The test: can you say it alone and people nod, waiting for more? That is a phrase. If they nod, satisfied — it is a sentence.",
          verdict:
            "A phrase names something. A sentence says something ABOUT it — with an action or a state.",
        },
      ),
      MS(
        [
          [
            "my name is omar",
            "My name is Omar.",
            "Three fixes: a capital M at the start, a capital O for the name Omar, and a full stop at the end.",
          ],
          [
            "Ihave abrother.",
            "I have a brother.",
            "Words need spaces between them. Letters join inside a word; spaces separate words.",
          ],
          [
            "She is reading a book the book is new.",
            "She is reading a book. The book is new.",
            "Two complete ideas are two sentences — end the first one with a full stop and start the second with a capital letter.",
          ],
        ],
        "Common mistakes",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Ali is a student. He has one brother and two sisters. His family is big. Ali reads a book every evening. The book is about cars. Ali loves cars.",
          task: "Count the sentences. Then find one phrase with two words (“one brother” is one example).",
        },
        writing: {
          task: "Build three sentences with the ladder. Start with one word, make a phrase, then finish the sentence.",
          guide: ["Word: …", "Phrase: the … / my …", "Sentence: …"],
          model: "Word: cat. Phrase: my cat. Sentence: My cat is black. — Word: tea. Phrase: hot tea. Sentence: I drink hot tea.",
        },
        listening: {
          script:
            "A sentence starts with a big letter. A sentence ends with a full stop. Words need spaces. Letters make words. Words make sentences.",
          task: "Listen and write down the first sentence you hear.",
        },
        speaking: {
          task: "Say the ladder out loud with your own example.",
          frames: [
            "Word: …",
            "Phrase: my …",
            "Sentence: My … is …",
          ],
          checklist: [
            "I said a single word clearly.",
            "I finished with a complete sentence.",
          ],
        },
      }),
      LSP(
        [
          gls("A word is one or more letters with a meaning."),
          gls("A sentence is a group of words that expresses a complete idea."),
          gls("Letters join together to make words."),
          gls("Words join together to make sentences."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Letters are the smallest building blocks; English has 26 of them.",
        "Words are letters with a meaning, separated by spaces.",
        "Phrases are small word groups (“the black cat”) — not complete ideas.",
        "Sentences express complete ideas and start with a capital letter and end with . ? or !",
        "Real life uses every level of the ladder: words for signs and lists, sentences for messages and letters.",
      ]),
      RV(
        [
          {
            question: "Which two skills does a phone call use?",
            options: [
              "Listening and speaking",
              "Reading and writing",
              "Speaking and writing",
            ],
            correctIndex: 0,
            explanation: "On a call you listen to the other person and speak to them.",
            from: "Chapter 01 · Lesson 3",
          },
          {
            question: "What is the spoken short form of “I am”?",
            options: ["I’m", "I have", "I do"],
            correctIndex: 0,
            explanation: "“I am” becomes “I’m” in natural speech.",
            from: "Chapter 01 · Lesson 3",
          },
          {
            question: "Which skill pair RECEIVES messages?",
            options: [
              "Listening and reading",
              "Speaking and writing",
              "Listening and speaking",
            ],
            correctIndex: 0,
            explanation: "Listening receives sound; reading receives writing.",
            from: "Chapter 01 · Lesson 2",
          },
        ],
        { title: "Revision — do you remember Lessons 2 and 3?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "How many letters are there in the English alphabet?",
            [
              ["a", "20"],
              ["b", "26"],
              ["c", "30"],
            ],
            "b",
            fb("26", "The English alphabet runs from A to Z — 26 letters in total."),
            { hints: ["The alphabet ends with the letter Z, the 26th letter."] },
          ),
          MCQ(
            "“the black cat” is a…",
            [
              ["a", "letter"],
              ["b", "phrase"],
              ["c", "full sentence"],
            ],
            "b",
            fb(
              "Phrase",
              "It is a group of words, but it does not express a complete idea — nothing happens.",
            ),
            { hints: ["Does anything happen in “the black cat”? A sentence needs a complete idea."] },
          ),
          FB(
            "Complete the sentence.",
            "My name ___ Sara.",
            ["is"],
            fb("is", "“My name is + name” is the standard pattern."),
            { hints: ["The linking verb here has only two letters."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        questions: [
          MCQ(
            "Which one is a complete sentence?",
            [
              ["a", "the red apple"],
              ["b", "on the table"],
              ["c", "The apple is red."],
            ],
            "c",
            fb("The apple is red.", "Only this one expresses a complete idea, starts with a capital and ends with a full stop."),
          ),
          MCQ(
            "Words in writing are separated by…",
            [
              ["a", "spaces"],
              ["b", "full stops"],
              ["c", "nothing"],
            ],
            "a",
            fb("Spaces", "Letters join inside a word; spaces separate one word from the next."),
          ),
          REORD(
            "Put the words in order to make a sentence.",
            "I drink tea every morning",
            fb(
              "I drink tea every morning.",
              "The doer (I) comes first, then the action (drink), then the rest.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "Build your ladder",
      instructions:
        "Choose three words from this lesson (for example: book, family, friend). For each one, write the word, then a phrase with the word, then a complete sentence — exactly like the ladder. You will write nine short lines.",
      minWords: 15,
      maxWords: 60,
    },
    homework: [
      "Find three signs near your home (one word each) and copy them.",
      "Write one complete sentence about your family. Check the capital letter and the full stop.",
      "Read your sentences out loud before you sleep.",
    ],
  },

  // =========================================================================
  // Lesson 5 — How English Learning Works (chapter review)
  // =========================================================================
  {
    slug: "ch-01-l-05",
    minutes: 30,
    description:
      "Learn how language learning really works — input, practice, mistakes — and set up the three habits that carry you through the whole programme. Then review the whole chapter.",
    outcomes: [
      "Explain the learning loop: hear it, say it, read it, write it, use it",
      "Name the three study habits: little and often, repetition, no fear of mistakes",
      "Set a personal daily English goal",
      "Answer review questions on the whole chapter",
    ],
    blocks: [
      LI(
        "This is the final lesson of Chapter 1. First you learn how language learning actually works — what makes it stick, and what makes it fail. Then you set up your personal study habits. At the end, the chapter review checks everything you have learned in Lessons 1 to 4.",
        [
          "You know what English is and where people speak it (Lesson 1).",
          "You know the four skills and the difference between spoken and written English (Lessons 2–3).",
          "You can build a sentence with the ladder: letters → words → phrases → sentences (Lesson 4).",
        ],
      ),
      H("How language learning really works"),
      T(
        "A language is not a list of facts to remember. It is a skill, like swimming or cooking. You learn it by doing it — a little, every day, with real messages that matter to you. Your brain needs three things: input (English coming in), practice (you using English), and patience (mistakes are part of the process).",
      ),
      ST(
        "The learning loop",
        [
          {
            title: "Hear it (input)",
            text: "Meet the new English in your ears and eyes: a word, a phrase, a sentence.",
            examples: [{ english: "Good morning!", note: "You hear it in a video." }],
          },
          {
            title: "Say it (output)",
            text: "Copy it out loud immediately. Your mouth learns the shape of the words.",
            examples: [{ english: "Good morning!", note: "You say it three times." }],
          },
          {
            title: "Read it and write it",
            text: "See the written form and write it by hand once. Now four skills have met the same words.",
            examples: [{ english: "Good morning.", note: "You write it in your notebook." }],
          },
          {
            title: "Use it (real life)",
            text: "Use the new English for a real message today — a greeting, a note, a message. Words you USE are words you KEEP.",
            examples: [{ english: "Good morning, Mum!", note: "You say it to someone real." }],
          },
        ],
        "Every new piece of English should travel this loop. This course is built around it.",
      ),
      EXD(
        "Study plans that work — and why",
        [
          { english: "Every morning on the bus: one lesson, 15 minutes.", note: "Same time, same place — the habit does the work for you.", domain: "everyday" },
          { english: "Lunch break: read one short English post.", note: "Real input, tiny dose — input first.", domain: "work" },
          { english: "While cooking: an English song, twice.", note: "Dead time becomes listening time.", domain: "home" },
          { english: "Evening: write one sentence about your day.", note: "Output — even one sentence keeps the loop moving.", domain: "family" },
          { english: "Before bed: repeat the day’s new words out loud.", note: "Sleep consolidates what you repeat.", domain: "education" },
          { english: "Friday: say your week’s sentences to a friend.", note: "Use it or lose it — real communication locks words in.", domain: "social" },
          { english: "Weekend: watch 10 minutes of a game or video in English.", note: "Fun counts. Your brain learns best when you enjoy it.", domain: "technology" },
          { english: "Sunday: review the week’s notebook — 5 minutes.", note: "The seventh meeting with each word (the repetition rule).", domain: "education" },
        ],
        "Eight small habits, about 15 minutes a day. This is what “little and often” looks like in real life.",
      ),
      GR(
        "The three habits of successful learners",
        "Habit 1: Little and often — 15 minutes every day beats 3 hours once a week. Habit 2: Repetition — meet every new word at least seven times. Habit 3: No fear — mistakes are information, not failure.",
        [
          { english: "15 minutes × 7 days", translation: "About 2 hours of strong learning per week." },
          { english: "7 meetings per word", translation: "Hear it, say it, read it, write it, use it — again and again." },
          { english: "“I am fine” → “I am good”", translation: "A correction taught you something new." },
        ],
      ),
      CMP(
        "Studying English vs using English",
        ["Studying (about the language)", "Using (the language itself)"],
        [
          ["What you do", "Read rules, memorise lists", "Listen, speak, read, write real messages"],
          ["Where it happens", "At a desk, in a lesson", "Everywhere — home, street, phone"],
          ["How it feels", "Careful, slow, correct", "Fast, natural, sometimes wrong"],
          ["What it gives you", "Knowledge about English", "The ability to actually communicate"],
          ["Best amount", "A little, focused", "A lot, every day"],
        ],
        {
          intro: "Both are necessary — but they are not the same thing.",
          verdict:
            "Study a little, use a lot. A language is learned by using it, the way swimming is learned by swimming.",
        },
      ),
      MS(
        [
          [
            "I will study English 5 hours every Sunday.",
            "I will study English 15–20 minutes every day.",
            "Little and often wins. Your brain keeps small daily doses far better than one big weekly dose.",
          ],
          [
            "I will not speak until my English is perfect.",
            "I will speak from today, with mistakes.",
            "Speaking with mistakes today beats perfect silence. Mistakes show you exactly what to learn next.",
          ],
          [
            "I only need to read the lesson.",
            "I will hear it, say it, read it, write it and use it.",
            "The learning loop moves new English through all four skills and into real life.",
          ],
        ],
        "Common learner mistakes",
      ),
      US(
        [
          {
            situation: "Your daily 15 minutes",
            example: "One lesson, or one review session, every day.",
            note: "Same time every day works best — after breakfast, on the bus, before bed.",
          },
          {
            situation: "Dead time",
            example: "Listen to English songs while you cook or travel.",
            note: "Your ears can learn even when your hands are busy.",
          },
          {
            situation: "Your phone",
            example: "Change one app to English.",
            note: "Free daily reading practice with words you already know by position.",
          },
          {
            situation: "Your notebook",
            example: "One page per day: new words + one sentence you built yourself.",
            note: "Writing by hand slows you down — in a good way.",
          },
        ],
        "Where the habits live",
        "Habits need a time and a place. Choose yours now.",
      ),
      DL(
        "One month later",
        "Two friends talk about learning English.",
        [
          ["Rana", "How is your English course?"],
          ["Yusuf", "Good! I study fifteen minutes every morning."],
          ["Rana", "Every day? I study five hours, one day a week."],
          ["Yusuf", "Try every day. Small pieces stay in your head."],
          ["Rana", "And if I make mistakes?"],
          ["Yusuf", "Mistakes are free lessons. My teacher says: use the language, and the language teaches you."],
        ],
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "Lena is learning English. Every morning she listens to one English song and reads the words. On the bus, she says new words quietly to herself. At night, she writes three sentences in her notebook. Last week she made many mistakes. This week she made fewer. Lena is happy — she uses her English every day.",
          task: "Find the four skills in the text. Which habit from this lesson does Lena follow?",
        },
        writing: {
          task: "Write your personal English plan: three sentences about when, where and how you will practise.",
          guide: ["Every day at …, I will …", "I will listen to …", "I will speak with …"],
          model:
            "Every day at breakfast, I will study English for fifteen minutes. I will listen to one song and read the words. I will speak English with my cousin on Fridays.",
        },
        listening: {
          script:
            "Welcome to the review of Chapter One. English is a language. It has four skills: listening, speaking, reading and writing. A sentence starts with a capital letter and ends with a full stop. Little and often — that is how you learn. Good luck!",
          task: "Listen. How many of the four skills can you hear in the audio?",
        },
        speaking: {
          task: "Say your English plan out loud, as a promise to yourself.",
          frames: [
            "I will practise English every day.",
            "I will listen to …",
            "Mistakes are information. I am not afraid.",
          ],
          checklist: [
            "I said my plan out loud.",
            "I named one time and one place for my daily practice.",
          ],
        },
      }),
      LSP(
        [
          gls("Practice a little every day."),
          gls("A small mistake is not a problem. Keep trying."),
          gls("Listen first, then speak."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "A language is a skill — you learn it by using it, like swimming by swimming.",
        "The learning loop: hear it → say it → read and write it → use it in real life.",
        "Three habits: little and often, repetition (7 meetings per word), no fear of mistakes.",
        "Study a little (rules, lists), use a lot (real messages every day).",
        "Choose a fixed time and place for your daily 15 minutes.",
      ]),
      RV(
        [
          {
            question: "What is English?",
            options: ["A language", "A country", "A phone app"],
            correctIndex: 0,
            explanation: "English is a language — sounds and words used to share ideas.",
            from: "Chapter 01 · Lesson 1",
          },
          {
            question: "Which two skills SEND messages?",
            options: [
              "Listening and reading",
              "Speaking and writing",
              "Reading and writing",
            ],
            correctIndex: 1,
            explanation: "Speaking sends sound; writing sends marks.",
            from: "Chapter 01 · Lesson 2",
          },
          {
            question: "“I’m” is the short form of…",
            options: ["I am", "I have", "I do"],
            correctIndex: 0,
            explanation: "Short forms are normal in speech and friendly writing.",
            from: "Chapter 01 · Lesson 3",
          },
          {
            question: "A written sentence ends with…",
            options: [
              "a capital letter",
              "a full stop, question mark or exclamation mark",
              "a space",
            ],
            correctIndex: 1,
            explanation: "Statements end with . questions with ? strong feelings with !",
            from: "Chapter 01 · Lesson 4",
          },
          {
            question: "“the black cat” is…",
            options: ["a sentence", "a phrase", "a letter"],
            correctIndex: 1,
            explanation: "It is a group of words without a complete idea — a phrase.",
            from: "Chapter 01 · Lesson 4",
          },
          {
            question: "Which plan works best?",
            options: [
              "Five hours every Sunday",
              "Fifteen minutes every day",
              "No plan at all",
            ],
            correctIndex: 1,
            explanation: "Little and often — the brain keeps small daily doses best.",
            from: "Chapter 01 · Lesson 5",
          },
        ],
        { title: "Chapter 1 review — the whole chapter", intro: "Six questions from Lessons 1 to 5. Can you answer them all?" },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        questions: [
          MCQ(
            "What is the best daily study time?",
            [
              ["a", "Five hours once a week"],
              ["b", "Fifteen minutes every day"],
              ["c", "All day, one day a month"],
            ],
            "b",
            fb("Fifteen minutes every day", "Little and often — small daily doses stay in your memory."),
            { hints: ["Think about how your memory keeps new words."] },
          ),
          FB(
            "Complete the learning loop.",
            "Hear it, ___ it, read it, write it, use it.",
            ["say"],
            fb("say", "Saying it immediately trains your mouth and your ear."),
            { hints: ["The loop starts in your ears. What comes next?"] },
          ),
          MATCH(
            "Match each idea with the lesson it came from.",
            [
              ["s", "Sender and receiver"],
              ["p", "Phrase vs sentence"],
              ["h", "Spoken short forms"],
            ],
            [
              ["l2", "Lesson 2 · Communication"],
              ["l4", "Lesson 4 · The ladder"],
              ["l3", "Lesson 3 · Spoken vs written"],
            ],
            [
              ["s", "l2"],
              ["p", "l4"],
              ["h", "l3"],
            ],
            fb("All matched", "Each idea belongs to one lesson of this chapter."),
            { hints: ["Communication is Lesson 2."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Chapter review quiz",
        note: "No hints — this is your chapter test.",
        questions: [
          MCQ(
            "About how many people use English as an ADDITIONAL language?",
            [
              ["a", "About a billion"],
              ["b", "About a million"],
              ["c", "About a thousand"],
            ],
            "a",
            fb("About a billion", "400 million first-language speakers, over a billion more who use it as a second language."),
          ),
          MCQ(
            "Which of these is NOT one of the four skills?",
            [
              ["a", "Listening"],
              ["b", "Translating"],
              ["c", "Writing"],
            ],
            "b",
            fb("Translating", "The four skills are listening, speaking, reading and writing."),
          ),
          MCQ(
            "Which is a complete sentence?",
            [
              ["a", "in the kitchen"],
              ["b", "my new phone"],
              ["c", "My phone is new."],
            ],
            "c",
            fb("My phone is new.", "Complete idea + capital letter + full stop = a sentence."),
          ),
          CORR(
            "Find and correct the mistake.",
            "she is teacher.",
            ["She is a teacher."],
            fb(
              "She is a teacher.",
              "Capital S at the start, the word “a” before the job, and a full stop at the end — three small fixes.",
            ),
          ),
        ],
      },
    ],
    assignment: {
      title: "My English learning plan",
      instructions:
        "Write your personal plan in four or five sentences: when you will study, where, what you will listen to, who you will speak with, and what you will write. End with one sentence about mistakes (for example: “Mistakes are information.”).",
      minWords: 20,
      maxWords: 90,
    },
    homework: [
      "Put your plan somewhere you see it every day — a wall, a phone note, a diary.",
      "Start tomorrow: 15 minutes, one song or one lesson.",
      "Before Chapter 2, review this chapter’s revision quiz one more time.",
    ],
  },
];
