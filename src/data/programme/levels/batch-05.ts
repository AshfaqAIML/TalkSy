/**
 * Core English Programme — Batch 05 (Chapters 17–20).
 *
 * A1 close: present continuous and practical everyday English.
 * A2 open: past simple and past continuous.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, LIS, MCQ, MATCH, N, REORD, TB, T, VOC, W, fb } from "../types";

export const batch05: ChapterSpec[] = [
  chapter("a1", {
    number: 17,
    title: "Present Continuous Tense",
    description:
      "The tense of right now: actions in progress at this moment. You learn the am/is/are + -ing structure with its spelling rules, negatives and questions, and — most importantly — how to choose between present simple (habits) and present continuous (now).",
    objectives: [
      "Explain what the present continuous means and when to use it",
      "Form -ing correctly with all spelling rules",
      "Build affirmative, negative and question forms",
      "Choose correctly between present simple and present continuous",
    ],
    prerequisites: ["CH-13", "CH-16"],
    hours: 3,
    skills: ["grammar", "speaking", "listening"],
    strands: ["communication", "speaking", "listening", "writing", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 questions on -ing forms and the simple/continuous choice. Assignment: describe what is happening in a busy scene.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 5,
    module: "a1-everyday-grammar",
    lessons: [
      {
        title: "Meaning and Usage",
        blurb: "Happening now, around now: the present continuous paints the live picture.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "reading"],
        strands: ["reading", "communication"],
        outcomes: [
          "Explain the core meaning: action in progress now",
          "Recognise signal words (now, right now, at the moment, today)",
          "Match situations to simple vs continuous",
        ],
        blocks: [
          H("The live camera"),
          T(
            "The present continuous is a live camera: it shows what is happening at the moment of speaking. 'I read every day' (habit) vs 'I am reading now' (this minute). Use it for actions in progress and temporary situations: 'She is staying with her aunt this week.'",
          ),
          TB("Two presents compared", ["Present simple", "Present continuous"], [
            ["habits, routines, facts", "actions happening now"],
            ["I work in a bank.", "I am working on a report."],
            ["every day, usually, always", "now, right now, at the moment, today"],
          ]),
          EX("The live picture", [
            ["Look! It is raining.", "¡Mira! Está lloviendo."],
            ["The children are playing in the garden.", "Los niños están jugando en el jardín."],
            ["I'm drinking tea. Do you want some?", "Estoy bebiendo té. ¿Quieres?"],
          ]),
          AU("Listen: happening now", "It is raining. The children are playing. I am drinking tea right now.", 0.85),
          N("Camera check", "Ask: is this a photo of my routine (simple) or a live video of now (continuous)?"),
        ],
        assignment: {
          title: "Right now",
          instructions:
            "Write five sentences about what is happening around you right now, using three different pronouns and the signal word 'right now' at least once.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Describe what three people near you are doing now.", "Report one temporary situation: 'I am reading a good book this week.'"],
      },
      {
        title: "Am, Is, Are + Verb-ing",
        blurb: "Build the continuous: the be-machine plus the -ing engine, with three spelling rules.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "writing"],
        strands: ["writing", "pronunciation"],
        outcomes: [
          "Form -ing with base, silent-e and doubling spellings",
          "Build affirmative continuous sentences with all pronouns",
          "Spell the twenty most common -ing forms correctly",
        ],
        blocks: [
          H("The two-part engine"),
          GR(
            "be + verb-ing",
            "The present continuous needs BOTH parts: am/is/are + the -ing form. 'She is working' — never 'She working' or 'She is work'.",
            [
              ["I am cooking dinner.", "Estoy cocinando la cena."],
              ["He is sleeping.", "Él está durmiendo."],
            ],
          ),
          TB("Three -ing spelling rules", ["Rule", "When", "Examples"], [
            ["+ ing", "most verbs", "work → working, read → reading"],
            ["drop e + ing", "verb ends in silent -e", "make → making, write → writing, dance → dancing"],
            ["double + ing", "short verb, one vowel + one consonant", "run → running, sit → sitting, swim → swimming"],
          ]),
          EX("Spelling in action", [
            ["write → writing, not writeing", "escribir → escribiendo"],
            ["swim → swimming, not swiming", "nadar → nadando"],
          ]),
          AU("Listen: the engine running", "I am working. She is making dinner. They are swimming.", 0.85),
          W("Never drop the be", "'She working now' is the most common continuous error. Check both parts before every continuous sentence: be + ing."),
        ],
        assignment: {
          title: "Spelling gym",
          instructions:
            "Write the -ing form of these verbs and use four in continuous sentences: read, make, run, dance, write, sit, cook, swim, come, take.",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["Say ten continuous sentences with different verbs.", "Check each -ing spelling against the three rules."],
      },
      {
        title: "Affirmative and Negative",
        blurb: "Full statements with the continuous: what is and is not happening.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Build affirmative and negative continuous sentences",
          "Use contractions naturally (I'm, isn't, aren't)",
          "Describe a busy scene in statements",
        ],
        blocks: [
          H("Statements and their shadows"),
          GR(
            "Continuous negatives",
            "be + not + verb-ing: 'She is not sleeping.' Contractions: isn't / aren't. 'I'm not working today.'",
            [
              ["They are watching a film.", "Están viendo una película."],
              ["They aren't watching the news.", "No están viendo las noticias."],
            ],
          ),
          EX("A busy street", [
            ["Cars are moving slowly. People are walking fast. A man is selling fruit. The sun isn't shining today.", "Los coches avanzan despacio. La gente camina rápido. Un hombre vende fruta. El sol no brilla hoy."],
          ]),
          AU("Listen: busy street", "Cars are moving slowly. People are walking fast. The sun isn't shining.", 0.85),
          N("Temporary vs never", "Negative continuous ('He isn't working this week') is about NOW. Permanent facts stay in the simple ('He doesn't work on Sundays')."),
        ],
        assignment: {
          title: "Busy scene",
          instructions:
            "Describe a busy place you know (market, station, playground) with six continuous sentences — four affirmative, two negative.",
          minWords: 22,
          maxWords: 70,
        },
        homework: ["Describe your street right now in three sentences.", "Say one thing that is not happening today."],
      },
      {
        title: "Questions",
        blurb: "What are you doing? Flip be to ask about now.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Form continuous yes/no and WH-questions",
          "Answer with short forms (Yes, I am / No, she isn't)",
          "Run a live 'What are you doing?' conversation",
        ],
        blocks: [
          H("Flipping the live camera"),
          GR(
            "Continuous questions",
            "Move be before the subject: 'You are eating.' → 'Are you eating?' WH: 'What are you eating?'",
            [
              ["Are you listening?", "¿Estás escuchando?"],
              ["What is she doing?", "¿Qué está haciendo ella?"],
              ["Why are they laughing?", "¿Por qué se ríen?"],
            ],
          ),
          DL(
            "Phone call",
            "Two friends talk on the phone.",
            [
              ["Sara", "Hi Ken! What are you doing?"],
              ["Ken", "I'm cooking dinner. And you?"],
              ["Sara", "I'm watching a film. Are the children sleeping?"],
              ["Ken", "No, they aren't. They're playing in their room."],
            ],
          ),
          AU("Listen: the phone call", "What are you doing? I'm cooking dinner. Are the children sleeping? No, they aren't.", 0.85),
          N("The most useful question", "'What are you doing?' opens a thousand conversations. Pair it with 'What do you do?' (job, simple) — two different questions, two different meanings."),
        ],
        assignment: {
          title: "Live interview",
          instructions:
            "Write a five-line phone dialogue between you and a friend: ask 'What are you doing?', follow up with two more continuous questions, answer honestly.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Ask two people 'What are you doing?' today.", "Report their answers."],
      },
      {
        title: "Present Simple vs Present Continuous",
        blurb: "The big A1 decision: habit or now? Train the choice until it is automatic.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Choose between the two presents with confidence",
          "Explain the choice with signal words",
          "Correct mixed-up sentences",
        ],
        blocks: [
          H("The decision table"),
          TB("Choosing the present", ["Signal", "Tense", "Example"], [
            ["every day, usually, always, on Mondays", "simple", "I usually walk to work."],
            ["now, right now, at the moment, today, this week", "continuous", "I'm walking to work right now."],
            ["permanent facts", "simple", "She works in a hospital."],
            ["temporary situations", "continuous", "She is working from home this month."],
          ]),
          EX("Same verb, two meanings", [
            ["He drinks coffee every morning. / He is drinking coffee now.", "Bebe café cada mañana. / Está bebiendo café ahora."],
            ["They live in Rome. / They are living with friends this summer.", "Viven en Roma. / Están viviendo con amigos este verano."],
          ]),
          AU("Listen: the two presents", "I usually walk. ... I'm walking now. She works in a hospital. ... She is working from home this month.", 0.85),
          W("State verbs stay simple", "Verbs of thinking and feeling (know, like, want, need, understand) rarely take the continuous: 'I know' (not 'I am knowing'), 'I want tea' (not 'I am wanting tea')."),
        ],
        assignment: {
          title: "The chooser test",
          instructions:
            "Choose the correct tense and write both sentences: 'I (read / am reading) a book right now.' 'She (speaks / is speaking) three languages.' 'We (go / are going) to the gym on Tuesdays.' 'Look! The dog (runs / is running) fast!' Then write two pairs of your own.",
          minWords: 18,
          maxWords: 70,
        },
        homework: ["Say one habit and one now-action about yourself.", "Explain the difference to someone in your language."],
      },
      {
        title: "Actions Now and Chapter Review",
        blurb: "Describe a live scene with the continuous, then take the Chapter 17 review and the A1 exit task.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing", "speaking"],
        strands: ["communication", "writing", "speaking", "listening"],
        outcomes: [
          "Describe a complete live scene fluently",
          "Mix both presents in one text",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("One scene, two tenses"),
          EX(
            "Sunday afternoon in the park",
            [
              ["It is Sunday afternoon and the park is full. Some children are playing football. An old man is reading a newspaper on a bench. Two women are running around the lake. My brother isn't running — he is eating an ice cream! Every Sunday, families come here and enjoy the sun. Today, a small band is playing music near the café. People always smile here.", "Es domingo por la tarde y el parque está lleno. Algunos niños están jugando al fútbol. Un señor lee un periódico en un banco. Dos mujeres corren alrededor del lago. ¡Mi hermano no corre — está comiendo un helado! Cada domingo, las familias vienen aquí y disfrutan del sol. Hoy, una pequeña banda toca música cerca del café. La gente siempre sonríe aquí."],
            ],
            "Continuous paints the live scene; simple carries the habits and permanent truths.",
          ),
          AU("Listen: the park", "It is Sunday afternoon and the park is full. Some children are playing football. Two women are running.", 0.85),
          H("Chapter 17 review"),
          T("Three questions on the continuous, then the live scene task."),
        ],
        assignment: {
          title: "A place full of life",
          instructions:
            "Describe a lively place (park, market, family dinner) in six to eight sentences: five continuous sentences about what is happening and two simple sentences about what usually happens there.",
          minWords: 35,
          maxWords: 110,
        },
        questions: [
          FB(
            "Write the -ing form: 'make → ___, run → ___, write → ___'",
            "make → ___, run → ___, write → ___",
            ["making, running, writing"],
            fb("making, running, writing", "Drop the silent e (making), double the consonant (running), drop the e again (writing).", "Check the three spelling rules: +ing, drop e, double."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence is correct RIGHT NOW?",
            [["a", "Look! It rains."], ["b", "Look! It is raining."], ["c", "Look! It raining."]],
            "b",
            fb("Look! It is raining.", "Live action needs be + -ing.", "'It rains' is a habit/fact; 'It raining' is missing be."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "'She ___ tea every morning, but today she ___ coffee.'",
            [["a", "drinks / is drinking"], ["b", "is drinking / drinks"], ["c", "drink / drinking"]],
            "a",
            fb("drinks / is drinking", "Habit → simple; today's exception → continuous.", "'Every morning' signals habit; 'today' signals the live/temporary picture."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a1", {
    number: 18,
    title: "Practical Everyday English",
    description:
      "The A1 capstone: using everything you know in real communication. Introducing yourself and your family, talking about routines, asking for information politely, describing people and places, everyday dialogues, and writing your first structured paragraph.",
    objectives: [
      "Introduce yourself and your family in a natural 60-second monologue",
      "Talk about daily routines with times and frequency",
      "Ask for information politely in shops, streets and cafés",
      "Describe people's appearance, personality and places",
      "Write a structured five-sentence paragraph",
    ],
    prerequisites: ["CH-17"],
    hours: 3,
    skills: ["speaking", "writing", "listening", "communication"],
    strands: ["communication", "speaking", "listening", "writing", "vocabulary", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 practical-communication questions. Assignment: the A1 exit task — a full self-introduction paragraph plus a dialogue.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly. Finishing this chapter completes Level A1.",
    batch: 5,
    module: "a1-real-life",
    lessons: [
      {
        title: "Introducing Yourself",
        blurb: "Your 60-second self-introduction: name, origin, work, family, likes and goals.",
        minutes: 25,
        difficulty: 1,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "pronunciation"],
        outcomes: [
          "Give a fluent 60-second self-introduction",
          "Answer the five core introduction questions",
          "Continue a conversation with two follow-up questions",
        ],
        blocks: [
          H("The introduction formula"),
          TB("Five moves, sixty seconds", ["Move", "Language"], [
            ["1. Name + origin", "My name is... I'm from..."],
            ["2. Work or study", "I work as a... / I study... at..."],
            ["3. Family", "I have... (a sister, two children)"],
            ["4. Likes", "In my free time, I like + -ing..."],
            ["5. Goal", "I'm learning English because..."],
          ]),
          DL(
            "First meeting",
            "Two colleagues meet at a conference.",
            [
              ["Mia", "Hello! I'm Mia. What's your name?"],
              ["Dev", "Hi Mia, I'm Dev. Nice to meet you."],
              ["Mia", "Nice to meet you too. Where are you from, Dev?"],
              ["Dev", "I'm from Chennai, but I live in London now. I work as a nurse. And you?"],
              ["Mia", "I'm a graphic designer from Milan. Are you enjoying the conference?"],
              ["Dev", "Yes, I am! It's my first time in this city."],
            ],
          ),
          AU("Listen: the formula in action", "My name is Dev. I'm from Chennai. I work as a nurse. I like swimming. I'm learning English for my job.", 0.85),
          N("Follow-up questions keep it alive", "After each answer, ask one small question back: 'Really? How long have you lived there?' Conversations die when only one person asks."),
        ],
        assignment: {
          title: "My 60 seconds",
          instructions:
            "Write your full self-introduction using the five moves (five to seven sentences), then record yourself saying it or practise it aloud twice.",
          minWords: 40,
          maxWords: 110,
        },
        homework: ["Introduce yourself out loud three times today.", "Time yourself: can you do it in 60 seconds?"],
      },
      {
        title: "Introducing Your Family",
        blurb: "Present the people who matter: names, ages, jobs, personalities.",
        minutes: 20,
        difficulty: 1,
        skills: ["speaking", "vocabulary"],
        strands: ["communication", "speaking", "vocabulary"],
        outcomes: [
          "Introduce three family members with name, age and job",
          "Describe each with one personality adjective",
          "Show a family photo and talk about it",
        ],
        blocks: [
          H("The family presentation"),
          EX(
            "My family",
            [
              ["This is my mother, Elena. She's fifty-eight and she's a teacher. She's very kind and she cooks wonderfully. This is my brother, Marco. He's twenty-four and he works with computers. He's funny but a little lazy! My grandmother lives with us. She's eighty and she's incredibly clever.", "Esta es mi madre, Elena. Tiene cincuenta y ocho años y es maestra. Es muy amable y cocina de maravilla. Este es mi hermano, Marco. Tiene veinticuatro años y trabaja con ordenadores. Es divertido pero un poco perezoso. Mi abuela vive con nosotros. Tiene ochenta años y es increíblemente lista."],
            ],
          ),
          VOC("Family presentation phrases", [
            ["This is...", "phrase", "presents a person", "Este es..."],
            ["He's / She's ... years old", "phrase", "gives age", "Tiene ... años"],
            ["He works as a...", "phrase", "gives a job", "Trabaja de..."],
            ["lives with us", "phrase", "shared home", "vive con nosotros"],
          ]),
          AU("Listen: my family", "This is my mother, Elena. She's fifty-eight and she's a teacher. She's very kind.", 0.85),
          N("Ages: be or have?", "English uses BE for age: 'She is fifty-eight', never 'She has fifty-eight years'. This is a top-five beginner error worldwide."),
        ],
        assignment: {
          title: "Family photo talk",
          instructions:
            "Introduce three family members: name, age, job or study, one personality adjective each. Write six to eight sentences.",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Describe your family aloud twice.", "Teach one family word to someone."],
      },
      {
        title: "Talking About Routines",
        blurb: "A day in your life: times, frequency, weekdays and weekends.",
        minutes: 20,
        difficulty: 1,
        skills: ["speaking", "grammar"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Describe your weekday routine with at least six time markers",
          "Compare weekdays and weekends",
          "Ask about someone else's routine naturally",
        ],
        blocks: [
          H("My weekday, my weekend"),
          EX(
            "Two different days",
            [
              ["On weekdays, I get up at six thirty and leave home at seven forty-five. I always take the bus. Work starts at nine. In the evening, I usually cook and sometimes go for a walk. But at the weekend, everything changes: I never wake up before nine, I have a big breakfast with my family and we often visit my parents.", "Entre semana me levanto a las seis y media y salgo de casa a las siete y tres cuartos. Siempre tomo el autobús. El trabajo empieza a las nueve. Por la tarde suelo cocinar y a veces salgo a caminar. Pero el fin de semana todo cambia: nunca me despierto antes de las nueve, desayuno mucho con mi familia y a menudo visitamos a mis padres."],
            ],
          ),
          TB("Routine time markers", ["Marker", "Example"], [
            ["at + time", "at six thirty"],
            ["in the morning / afternoon / evening", "I study in the evening"],
            ["on weekdays / at the weekend", "On weekdays I'm busy"],
            ["before / after + action", "before breakfast, after work"],
          ]),
          AU("Listen: my routine", "On weekdays, I get up at six thirty. I always take the bus. Work starts at nine.", 0.85),
          N("Contrast sells the story", "'On weekdays... but at the weekend...' makes any routine description twice as interesting. Add one contrast to your talks."),
        ],
        assignment: {
          title: "Weekday vs weekend",
          instructions:
            "Describe your weekday routine (four sentences) and your weekend (three sentences) with a contrast word. Use five different time markers.",
          minWords: 30,
          maxWords: 95,
        },
        homework: ["Ask someone about their weekend routine.", "Report one surprising fact."],
      },
      {
        title: "Asking for Information",
        blurb: "Real requests in shops, streets and cafés — polite, short, effective.",
        minutes: 25,
        difficulty: 1,
        skills: ["speaking", "listening"],
        strands: ["communication", "speaking", "listening", "vocabulary"],
        outcomes: [
          "Ask for prices, directions, opening hours and help",
          "Understand the standard replies",
          "Handle a full shop transaction in English",
        ],
        blocks: [
          H("The five everyday requests"),
          TB("Situational phrases", ["Situation", "You say"], [
            ["Price", "How much is this? / How much are these?"],
            ["Directions", "Excuse me, how do I get to the station?"],
            ["Opening hours", "What time do you open/close?"],
            ["In a café", "Can I have a coffee, please?"],
            ["Help", "Sorry, can you say that again, please?"],
          ]),
          DL(
            "In the café",
            "A customer orders.",
            [
              ["Barista", "Hi! What can I get you?"],
              ["Customer", "Can I have a tea and a cheese sandwich, please?"],
              ["Barista", "To eat here or take away?"],
              ["Customer", "Take away, please. How much is it?"],
              ["Barista", "Four pounds fifty."],
              ["Customer", "Here you are. Thank you!"],
            ],
          ),
          AU("Listen: in the café", "Can I have a tea and a cheese sandwich, please? How much is it? Four pounds fifty.", 0.85),
          N("'Can I have' beats 'Give me'", "'Can I have a coffee, please?' is the universal polite order. 'Give me a coffee' sounds rude to native ears — grammar is not the same as politeness."),
        ],
        assignment: {
          title: "Three transactions",
          instructions:
            "Write three mini-dialogues: buying food, asking for directions, asking about opening hours. Four lines each, using polite forms.",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Role-play a café order out loud twice.", "Learn your local prices in English."],
      },
      {
        title: "Describing People and Places",
        blurb: "Paint pictures with words: appearance, personality and places people can see in their minds.",
        minutes: 20,
        difficulty: 2,
        skills: ["vocabulary", "writing"],
        strands: ["writing", "vocabulary", "communication"],
        outcomes: [
          "Describe a person's appearance and personality in five sentences",
          "Describe a place so a stranger could recognise it",
          "Organise a description logically",
        ],
        blocks: [
          H("The description plan"),
          TB("Describing a person", ["Layer", "Language"], [
            ["Height and build", "tall, short, slim"],
            ["Hair and eyes", "long dark hair, brown eyes"],
            ["Clothes (now)", "She's wearing a blue jacket"],
            ["Personality", "friendly, quiet, very funny"],
          ]),
          EX(
            "Recognisable descriptions",
            [
              ["My friend Ali is tall and slim, with short black hair and glasses. He's wearing his usual grey hoodie. He's the kindest person I know — he always helps everyone. You can't miss him!", "Mi amigo Ali es alto y delgado, con pelo negro corto y gafas. Lleva su sudadera gris de siempre. Es la persona más amable que conozco: siempre ayuda a todos. ¡No puedes no verlo!"],
            ],
          ),
          AU("Listen: describing Ali", "Ali is tall and slim, with short black hair and glasses. He's wearing a blue hoodie.", 0.85),
          N("Appearance vs personality", "Two layers, both useful: 'What does he look like?' asks appearance; 'What is he like?' asks personality. Two different questions — know both."),
        ],
        assignment: {
          title: "Recognisable person",
          instructions:
            "Describe a person a friend could recognise in a crowd: four appearance sentences (including clothes) and two personality sentences.",
          minWords: 25,
          maxWords: 80,
        },
        homework: ["Describe your street so a visitor could draw it.", "Ask someone 'What is your teacher like?'"],
      },
      {
        title: "Everyday Dialogues and First Paragraphs",
        blurb: "Full conversations and your first real paragraph — the A1 exit tasks, then the Chapter 18 review.",
        minutes: 30,
        difficulty: 2,
        skills: ["writing", "communication"],
        strands: ["writing", "communication", "reading", "speaking"],
        outcomes: [
          "Write a complete six-line everyday dialogue",
          "Write a structured paragraph: topic, details, ending",
          "Answer the chapter review and finish Level A1",
        ],
        blocks: [
          H("The paragraph recipe"),
          GR(
            "Three-part paragraph",
            "1) Topic sentence: what the paragraph is about. 2) Detail sentences: three or four supporting facts. 3) Ending sentence: a feeling or summary.",
            [["My street is a friendly place. There are two cafés and a small park. The neighbours always say hello. In the evening, children play football. I feel lucky to live here.", "Mi calle es un lugar amable. Hay dos cafés y un pequeño parque. Los vecinos siempre saludan. Por la tarde, los niños juegan al fútbol. Me siento afortunado de vivir aquí."]],
          ),
          DL(
            "Meeting a neighbour",
            "Full dialogue using the whole A1 system.",
            [
              ["Nora", "Good morning! Are you the new neighbour?"],
              ["Yusuf", "Yes, I am. My name is Yusuf. I'm from Egypt."],
              ["Nora", "Welcome! I'm Nora, from flat two. Do you need anything?"],
              ["Yusuf", "Actually, yes — is there a good supermarket near here?"],
              ["Nora", "There's one on Green Street, next to the pharmacy. It opens at eight."],
              ["Yusuf", "Perfect. And where can I get good coffee?"],
              ["Nora", "Ha! Try the café on the corner. They make the best coffee in town."],
              ["Yusuf", "Thank you so much, Nora. See you around!"],
            ],
          ),
          AU("Listen: the neighbour chat", "Are you the new neighbour? Yes, I am. Is there a good supermarket near here?", 0.85),
          H("Chapter 18 review — Level A1 exit"),
          T("You arrived knowing the alphabet. You leave writing paragraphs and holding conversations. Answer the review, then complete the exit task. A2 awaits."),
        ],
        assignment: {
          title: "A1 exit: me and my world",
          instructions:
            "Write two paragraphs: (1) 'About me' — self-introduction, routine, family (six sentences); (2) 'A place I love' — a full description with there is/are and prepositions (five sentences). Use at least eight different verbs correctly.",
          minWords: 60,
          maxWords: 160,
        },
        questions: [
          MCQ(
            "Someone asks 'What does your sister look like?' — what do they want?",
            [["a", "Her personality"], ["b", "Her appearance"], ["c", "Her job"]],
            "b",
            fb("Her appearance", "'Look like' asks about looks: height, hair, clothes.", "'What is she like?' asks about personality."),
            { skill: "speaking", difficulty: "easy" },
          ),
          MCQ(
            "Which is the polite way to order in a café?",
            [["a", "Give me a coffee."], ["b", "Can I have a coffee, please?"], ["c", "I want coffee now."]],
            "b",
            fb("Can I have a coffee, please?", "Can I have + please is the standard polite order.", "Direct imperatives and 'I want' sound rude in service situations."),
            { skill: "speaking", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence talks about AGE correctly?",
            [["a", "She has thirty years."], ["b", "She is thirty years old."], ["c", "She is thirty years."]],
            "b",
            fb("She is thirty years old.", "English uses be + number + years old for age.", "'Has thirty years' translates literally from many languages but is impossible in English."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 19,
    title: "Past Simple Tense",
    description:
      "The storytelling tense: regular -ed verbs and their pronunciation, the fifty most useful irregular verbs, negatives and questions with did, and time expressions that anchor stories in the past. You finish able to tell what happened yesterday, last year or in 2019.",
    objectives: [
      "Form and pronounce regular past forms (-ed as /d/, /t/, /ɪd/)",
      "Use the fifty core irregular past forms",
      "Build negatives (didn't + base) and questions (Did...?)",
      "Tell a short story with past time expressions",
    ],
    prerequisites: ["CH-18"],
    hours: 3,
    skills: ["grammar", "speaking", "listening"],
    strands: ["communication", "speaking", "listening", "writing", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 questions on irregular forms, did-negatives and -ed pronunciation. Assignment: tell a true story about yesterday in the past simple.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 5,
    module: "a2-past-and-future",
    lessons: [
      {
        title: "Regular Verbs and Meaning",
        blurb: "Add -ed and travel to the past: worked, played, visited — the default past form.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing", "communication"],
        outcomes: [
          "Form regular pasts with the three spelling rules",
          "Explain what the past simple means: finished actions in finished time",
          "Narrate a finished event in regular verbs only",
        ],
        blocks: [
          H("The default past"),
          T(
            "The past simple describes FINISHED actions in FINISHED time: yesterday, last week, in 2019, this morning (if it's over). Regular verbs take -ed: work → worked, play → played, visit → visited.",
          ),
          TB("Three -ed spelling rules", ["Rule", "When", "Examples"], [
            ["+ ed", "most verbs", "work → worked, watch → watched"],
            ["drop e + ed", "ends in silent -e", "live → lived, dance → danced"],
            ["consonant + y → ied", "after a consonant", "study → studied, try → tried"],
          ]),
          EX("Finished and dated", [
            ["Yesterday I worked until six.", "Ayer trabajé hasta las seis."],
            ["We watched a film last night.", "Vimos una película anoche."],
            ["She studied all weekend.", "Estudió todo el fin de semana."],
          ]),
          AU("Listen: yesterday", "Yesterday I worked until six. We watched a film. She studied all weekend.", 0.85),
          W("Finished time = past simple", "If the time is finished and known ('yesterday', 'in 2020', 'when I was a child'), English uses past simple — even if the story feels fresh."),
        ],
        assignment: {
          title: "Yesterday in -ed",
          instructions:
            "Write five sentences about yesterday using five different REGULAR verbs, each with a finished time expression.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["List ten regular verbs you used this week.", "Write their -ed forms."],
      },
      {
        title: "Pronunciation of -ed",
        blurb: "Worked says /t/, played says /d/, visited says /ɪd/ — the sound no one writes.",
        minutes: 20,
        difficulty: 2,
        skills: ["pronunciation", "listening"],
        strands: ["pronunciation", "listening", "speaking"],
        outcomes: [
          "Pronounce -ed endings in all three ways",
          "Predict the sound from the final consonant",
          "Hear the difference between /t/, /d/ and /ɪd/",
        ],
        blocks: [
          H("Three sounds, one spelling"),
          TB("The -ed sound rules", ["Sound", "After", "Examples"], [
            ["/t/", "voiceless sounds (k, p, s, sh, ch, f)", "worked, stopped, watched, finished"],
            ["/d/", "voiced sounds (all others + vowels)", "played, lived, called, studied"],
            ["/ɪd/", "t and d only", "wanted, needed, visited, decided"],
          ]),
          GR("Why it matters", "The -ed ending is usually just one extra sound: 'worked' = work + /t/. Only after t/d does it become its own syllable: want-ed.", [["I visited (3 syllables) London.", "Visité Londres."]]),
          AU("Listen: the three sounds", "worked... /t/. played... /d/. visited... /id/. wanted... /id/.", 0.8),
          N("Touch your throat", "Say the base verb's last sound with fingers on your throat: vibration = /d/, no vibration = /t/, t or d = /ɪd/. Physical, not theoretical."),
        ],
        assignment: {
          title: "Sound sort",
          instructions:
            "Sort these past forms into three sound groups (/t/, /d/, /ɪd/) and say each out loud: worked, played, visited, watched, lived, wanted, stopped, called, decided, finished.",
          minWords: 10,
          maxWords: 40,
        },
        homework: ["Read any past-simple text aloud, marking -ed sounds.", "Record yourself and listen back."],
      },
      {
        title: "Irregular Verbs I",
        blurb: "Go becomes went: the first twenty-five essential irregular pasts.",
        minutes: 25,
        difficulty: 2,
        skills: ["vocabulary", "grammar"],
        strands: ["vocabulary", "reading", "writing"],
        outcomes: [
          "Produce the past of the twenty-five core irregular verbs",
          "Use ten of them in true sentences",
          "Start a personal irregular-verb list",
        ],
        blocks: [
          H("The verbs that refuse -ed"),
          TB("Core irregulars 1–25", ["Base", "Past", "Base", "Past"], [
            ["go", "went", "see", "saw"],
            ["have", "had", "eat", "ate"],
            ["do", "did", "give", "gave"],
            ["say", "said", "take", "took"],
            ["get", "got", "make", "made"],
            ["come", "came", "know", "knew"],
            ["think", "thought", "find", "found"],
            ["tell", "told", "feel", "felt"],
            ["buy", "bought", "bring", "brought"],
            ["write", "wrote", "read", "read /red/"],
            ["run", "ran", "sleep", "slept"],
            ["speak", "spoke", "leave", "left"],
            ["meet", "met", "pay", "paid"],
          ]),
          EX("Irregulars in real stories", [
            ["I went to the market and bought vegetables.", "Fui al mercado y compré verduras."],
            ["She told me a story and I felt happy.", "Me contó una historia y me sentí feliz."],
          ]),
          AU("Listen: irregular drill", "go — went. have — had. see — saw. take — took. make — made.", 0.85),
          N("Small sets, daily", "Learn five irregulars a day as pairs (make–made, take–took). Say them as a rhythm — sound memory beats lists."),
        ],
        assignment: {
          title: "Irregular stories",
          instructions:
            "Write five true sentences about last week using five different irregular pasts, then write the base form next to each verb.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Drill the first twenty-five pairs aloud once a day.", "Test yourself: cover the past column."],
      },
      {
        title: "Irregular Verbs II and Verb Forms",
        blurb: "Twenty-five more irregulars plus the three-column table you will use forever.",
        minutes: 25,
        difficulty: 2,
        skills: ["vocabulary", "grammar"],
        strands: ["vocabulary", "writing", "reading"],
        outcomes: [
          "Complete the fifty-verb core table",
          "Explain base / past / past participle columns",
          "Choose the right column for past simple sentences",
        ],
        blocks: [
          H("The second half"),
          TB("Core irregulars 26–50", ["Base", "Past", "Base", "Past"], [
            ["drink", "drank", "begin", "began"],
            ["sing", "sang", "swim", "swam"],
            ["sit", "sat", "stand", "stood"],
            ["cut", "cut", "put", "put"],
            ["cost", "cost", "hit", "hit"],
            ["lose", "lost", "sell", "sold"],
            ["teach", "taught", "catch", "caught"],
            ["build", "built", "send", "sent"],
            ["spend", "spent", "lend", "lent"],
            ["keep", "kept", "sleep family", "slept"],
            ["choose", "chose", "win", "won"],
            ["wear", "wore", "drive", "drove"],
            ["break", "broke", "fall", "fell"],
          ]),
          TB("The three-column idea", ["Column", "Name", "Example (go)", "Used in"], [
            ["1", "base", "go", "present, after did/didn't"],
            ["2", "past simple", "went", "past simple stories"],
            ["3", "past participle", "gone", "present perfect (Ch. 22)"],
          ]),
          AU("Listen: more pairs", "drink — drank. teach — taught. send — sent. break — broke.", 0.85),
          N("Why column three waits", "You only need columns 1–2 for now. Chapter 22 introduces column three with the present perfect — by then columns 1–2 will be automatic."),
        ],
        assignment: {
          title: "The growing table",
          instructions:
            "Build your own three-column table for fifteen verbs (base, past simple, past participle — copy participle from a list if unknown). Then write four past simple sentences using column two.",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["Review all fifty pairs once aloud.", "Write the ten hardest ones on a card."],
      },
      {
        title: "Negatives and Questions with Did",
        blurb: "The great transfer: didn't takes the base verb, did carries the past.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Form past negatives: didn't + base verb",
          "Form past questions: Did + subject + base verb?",
          "Avoid the double-past mistake (didn't went)",
        ],
        blocks: [
          H("Did takes the past, the verb stays base"),
          GR(
            "Past negatives and questions",
            "Negative: didn't + BASE verb ('I didn't go'). Question: Did + subject + BASE verb ('Did you go?'). The pastness lives in did/didn't — the main verb returns to column one.",
            [
              ["I didn't see the film.", "No vi la película."],
              ["Did she call you yesterday?", "¿Te llamó ayer?"],
              ["Where did they go?", "¿Adónde fueron?"],
            ],
          ),
          EX("Interviewing the past", [
            ["Did you enjoy the party? — Yes, I did. / No, I didn't.", "¿Disfrutaste la fiesta? — Sí. / No."],
            ["What did you eat? — We ate pasta.", "¿Qué comisteis? — Comimos pasta."],
          ]),
          AU("Listen: past questions", "Did you enjoy the party? What did you eat? Where did they go?", 0.85),
          W("The classic double-past", "'I didn't went' is wrong — the past is used once. Train the echo: didn't + BASE. 'I didn't go.'"),
        ],
        assignment: {
          title: "Yesterday interview",
          instructions:
            "Write five questions about yesterday (Did you...? / What did...?) and answer them with a mix of short answers and full sentences. Include one negative answer.",
          minWords: 25,
          maxWords: 80,
        },
        homework: ["Ask someone three 'Did you...?' questions about their weekend.", "Report the answers."],
      },
      {
        title: "Time Expressions and Storytelling",
        blurb: "Tell a real story in the past with sequencers and time anchors, then the Chapter 19 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["speaking", "writing"],
        strands: ["communication", "writing", "speaking", "listening"],
        outcomes: [
          "Sequence a story: first, then, after that, finally",
          "Anchor stories with past time expressions",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The story skeleton"),
          TB("Story sequencers", ["Sequencer", "Job"], [
            ["First / At first", "opening move"],
            ["Then / After that / Next", "next move"],
            ["Suddenly", "surprise turn"],
            ["In the end / Finally", "closing move"],
          ]),
          EX(
            "The lost keys",
            [
              ["Yesterday was a difficult day. First, I woke up late. Then I couldn't find my keys. I looked in the kitchen, in my bag, under the sofa — nothing. Suddenly, my phone rang: it was my mother. 'Did you check your jacket?' she asked. I checked, and there they were! After that, I ran to the bus stop and caught the bus. In the end, I arrived at work only ten minutes late.", "Ayer fue un día difícil. Primero me desperté tarde. Luego no pude encontrar las llaves. Busqué en la cocina, en mi bolso, bajo el sofá — nada. De repente sonó mi teléfono: era mi madre. '¿Revisaste tu chaqueta?', preguntó. Revisé, ¡y allí estaban! Después corrí a la parada y tomé el autobús. Al final llegué al trabajo solo diez minutos tarde."],
            ],
          ),
          AU("Listen: the lost keys", "First, I woke up late. Then I couldn't find my keys. In the end, I arrived only ten minutes late.", 0.85),
          H("Chapter 19 review"),
          T("Three questions on the past system, then the story task."),
        ],
        assignment: {
          title: "A true story",
          instructions:
            "Tell a true story from your life (six to eight sentences) using: at least four irregular pasts, one negative with didn't, one Did-question and three sequencers (first, then, in the end).",
          minWords: 45,
          maxWords: 130,
        },
        questions: [
          FB(
            "Write the past form: 'go → ___, buy → ___, see → ___, eat → ___'",
            "go → ___, buy → ___, see → ___, eat → ___",
            ["went, bought, saw, ate"],
            fb("went, bought, saw, ate", "All four are irregular: no -ed, no rules — memorised pairs.", "If you added -ed, you fell for the regular trap."),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence is correct?",
            [["a", "I didn't went home."], ["b", "I didn't go home."], ["c", "I not go home."]],
            "b",
            fb("I didn't go home.", "didn't + base verb. The past lives in didn't.", "'didn't went' doubles the past; 'not go' has no helper."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "How is the -ed in 'visited' pronounced?",
            [["a", "/t/"], ["b", "/d/"], ["c", "/ɪd/ as its own syllable"]],
            "c",
            fb("/ɪd/ — vis-it-ed", "After t or d, -ed becomes its own syllable.", "worked = /t/, played = /d/ — only t/d verbs get /ɪd/."),
            { skill: "speaking", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),

  chapter("a2", {
    number: 20,
    title: "Past Continuous Tense",
    description:
      "The past with a video camera: actions in progress at a past moment, background scenes, and interrupted actions with while and when. You learn was/were + -ing and, critically, how it divides storytelling work with the past simple: background vs events.",
    objectives: [
      "Form the past continuous with was/were + -ing",
      "Describe background scenes in progress at a past moment",
      "Combine past continuous and past simple for interrupted actions",
      "Choose correctly between the two past tenses",
    ],
    prerequisites: ["CH-19"],
    hours: 2,
    skills: ["grammar", "writing", "listening"],
    strands: ["communication", "writing", "listening", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on was/were + -ing and the interrupted-action pattern. Assignment: write a two-paragraph scene with background and events.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 5,
    module: "a2-past-and-future",
    lessons: [
      {
        title: "Meaning: The Past Camera",
        blurb: "The past continuous films what was ALREADY happening at a past moment.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing"],
        outcomes: [
          "Explain in-progress meaning in the past",
          "Use time anchors: at 8 o'clock, at that moment, while",
          "Set a scene with three continuous sentences",
        ],
        blocks: [
          H("Video vs photo"),
          T(
            "Past simple = a photo of a finished event. Past continuous = a video of an action already running at a past moment. 'At eight o'clock, I was having dinner' — the dinner was in progress when the clock struck eight.",
          ),
          EX("Setting the scene", [
            ["The sun was shining and the birds were singing.", "El sol brillaba y los pájaros cantaban."],
            ["At midnight, we were still driving home.", "A medianoche, todavía íbamos conduciendo a casa."],
          ]),
          AU("Listen: the past video", "The sun was shining. The birds were singing. We were driving home at midnight.", 0.85),
          N("Scenes need it", "Storytellers open with the continuous — weather, music, people's actions — then drop in events with the simple. You will build exactly that in this chapter."),
        ],
        assignment: {
          title: "Scene setter",
          instructions:
            "Write three background sentences for a specific past moment ('At seven yesterday evening...'): weather, one action, one feeling in progress.",
          minWords: 12,
          maxWords: 45,
        },
        homework: ["Describe what was happening at noon today.", "Use was and were at least once."],
      },
      {
        title: "Was, Were + -ing",
        blurb: "The past continuous engine: was with I/he/she/it, were with you/we/they.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Build affirmative, negative and question forms",
          "Apply -ing spelling rules in past contexts",
          "Interview about a past moment",
        ],
        blocks: [
          H("The engine"),
          GR(
            "was/were + verb-ing",
            "I/he/she/it was working. You/we/they were working. Negative: wasn't/weren't working. Question: Was she working? Were they working?",
            [
              ["I was reading. / We were reading.", "Yo leía. / Nosotros leíamos."],
              ["She wasn't listening.", "Ella no escuchaba."],
              ["Were you sleeping at ten?", "¿Dormías a las diez?"],
            ],
          ),
          EX("All forms at once", [
            ["Were they arguing? — Yes, they were.", "¿Discutían? — Sí."],
            ["It wasn't raining, but the wind was blowing.", "No llovía, pero el viento soplaba."],
          ]),
          AU("Listen: the engine", "I was reading. She wasn't listening. Were you sleeping? Yes, I was.", 0.85),
          W("No double past-ing", "'was worked' and 'were working' are different engines. Past continuous is ALWAYS was/were + -ing, nothing else."),
        ],
        assignment: {
          title: "At that moment",
          instructions:
            "Write five sentences about what people were doing at a specific past moment (dinner time yesterday): include one negative and one question with answer.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Ask two people what they were doing at 9 p.m. yesterday.", "Write the answers."],
      },
      {
        title: "Interrupted Actions",
        blurb: "I was cooking when the phone rang — the classic two-tense pattern of English storytelling.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Combine continuous (background) + simple (event) with when/while",
          "Explain which clause carries which tense",
          "Tell three interrupted-action anecdotes",
        ],
        blocks: [
          H("The interruption pattern"),
          GR(
            "was/were + -ing ... when + past simple",
            "The longer background action takes the continuous; the short interrupting event takes the simple. 'I was cooking when the phone rang.' With WHILE the continuous follows: 'While I was cooking, the phone rang.'",
            [
              ["We were watching TV when the lights went out.", "Veíamos la tele cuando se fue la luz."],
              ["While she was driving, she saw an accident.", "Mientras conducía, vio un accidente."],
            ],
          ),
          TB("when vs while", ["Word", "Followed by", "Example"], [
            ["when", "the short event (simple)", "I was sleeping when you called."],
            ["while", "the long background (continuous)", "While I was sleeping, the dog escaped."],
          ]),
          AU("Listen: interruptions", "I was cooking when the phone rang. We were watching TV when the lights went out.", 0.85),
          N("Test the clause", "Point at the action that was already running → continuous. Point at the thing that suddenly happened → simple. The pattern then builds itself."),
        ],
        assignment: {
          title: "Three interruptions",
          instructions:
            "Write three interrupted-action sentences about your life, each using both tenses and when or while correctly.",
          minWords: 12,
          maxWords: 50,
        },
        homework: ["Tell someone one 'I was ___ when ___' story.", "Ask them for one back."],
      },
      {
        title: "Past Simple vs Past Continuous",
        blurb: "Photo or video? Train the decision for every past action you narrate.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Choose the correct past tense by situation",
          "Explain background vs event in one sentence",
          "Edit a mixed-tense story",
        ],
        blocks: [
          H("The decision table"),
          TB("Two pasts, two jobs", ["Past simple", "Past continuous"], [
            ["finished events (photo)", "actions in progress (video)"],
            ["the story's plot: what happened", "the scene: what was happening"],
            ["I wrote three letters.", "I was writing a letter at ten."],
            ["sequence words: first, then", "while, at that moment"],
          ]),
          EX("Same facts, different jobs", [
            ["It rained all night. (fact/event) / It was raining when I left. (background to my leaving)", "Llovió toda la noche. / Llovía cuando salí."],
          ]),
          AU("Listen: both pasts", "It rained all night. ... It was raining when I left.", 0.85),
          W("Two continuous in a row can hang", "'I was eating and I was drinking' floats without an event. Stories need at least one simple-tense anchor to land."),
        ],
        assignment: {
          title: "Tense editor",
          instructions:
            "Choose the correct tense: 'I (watched / was watching) TV when she (arrived / was arriving).' 'While we (walked / were walking), it (started / was starting) to rain.' 'He (broke / was breaking) his leg while he (played / was playing) football.' Then write one sentence of your own with both tenses.",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["Retell yesterday evening in four sentences, using both tenses.", "Mark which sentences are scene, which are events."],
      },
      {
        title: "Describing Past Scenes and Chapter Review",
        blurb: "Full atmospheric scene descriptions, then the Chapter 20 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["writing", "speaking"],
        strands: ["communication", "writing", "reading", "listening"],
        outcomes: [
          "Write a two-layer past scene: background + events",
          "Read a past scene and identify each layer",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("A two-layer scene"),
          EX(
            "The storm",
            [
              ["It was a dark evening. The wind was blowing hard and the rain was falling on the windows. My family was sitting in the living room. My father was reading and my mother was knitting. My little sister was playing with her toys. Suddenly, all the lights went out. We looked for candles, and my father found them in the kitchen. We ate sandwiches by candlelight and told funny stories. When the lights came back, everyone was laughing.", "Era una tarde oscura. El viento soplaba fuerte y la lluvia caía sobre las ventanas. Mi familia estaba sentada en el salón. Mi padre leía y mi madre tejía. Mi hermana pequeña jugaba con sus juguetes. De repente, se fue la luz. Buscamos velas y mi padre las encontró en la cocina. Comimos sándwiches a la luz de las velas y contamos historias divertidas. Cuando volvió la luz, todos se reían."],
            ],
            "First paragraph: all continuous (scene). Second: the events in simple. The pattern of every good story.",
          ),
          AU("Listen: the storm scene", "The wind was blowing hard. My father was reading. Suddenly, all the lights went out.", 0.85),
          H("Chapter 20 review"),
          T("Three questions on the past pair, then the scene task."),
        ],
        assignment: {
          title: "A moment I remember",
          instructions:
            "Write a two-paragraph memory: paragraph one sets the scene with four past continuous sentences; paragraph two tells what happened (four past simple sentences, including one interruption with when/while).",
          minWords: 45,
          maxWords: 130,
        },
        questions: [
          MCQ(
            "Which is correct: 'I ___ dinner when she ___.'",
            [["a", "cooked / was calling"], ["b", "was cooking / called"], ["c", "was cooking / was calling"]],
            "b",
            fb("was cooking / called", "Background action = continuous; interrupting event = simple.", "The call is the short interrupting event, so it takes the simple."),
            { skill: "grammar", difficulty: "medium" },
          ),
          FB(
            "Complete: 'While they ___ (play), it ___ (start) to snow.'",
            "While they ___ , it ___ to snow.",
            ["were playing, started"],
            fb("were playing / started", "While + continuous for the long action; the weather change is the event.", "'While' almost always heads the continuous clause."),
            { skill: "grammar", difficulty: "medium" },
          ),
          MCQ(
            "What was the weather LIKE AS BACKGROUND: 'The sun ___ when we left.'",
            [["a", "shone"], ["b", "was shining"], ["c", "shines"]],
            "b",
            fb("was shining", "Scene-setting background takes the past continuous.", "A single finished event would be 'shone', but scenery runs in progress."),
            { skill: "grammar", difficulty: "medium" },
          ),
        ],
      },
    ],
  }),
];
