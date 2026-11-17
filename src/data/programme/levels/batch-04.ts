/**
 * Core English Programme — Batch 04 (Chapters 13–16, Level A1).
 *
 * Present simple, questions and negatives, adjectives and adverbs,
 * prepositions and there is / there are.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, LIS, MCQ, MATCH, N, REORD, TB, T, VOC, W, fb } from "../types";

export const batch04: ChapterSpec[] = [
  chapter("a1", {
    number: 13,
    title: "Present Simple Tense",
    description:
      "The tense of habits, routines and facts: form (including the third-person -s and its spelling), negatives with don't/doesn't, questions with Do/Does, frequency adverbs, and talking about your daily routine from morning to night.",
    objectives: [
      "Explain the two main uses of the present simple: habits/routines and general facts",
      "Form third-person singular correctly (-s, -es, -ies) and pronounce the ending",
      "Build affirmative, negative and interrogative present simple sentences",
      "Describe a full daily routine with time expressions and frequency adverbs",
    ],
    prerequisites: ["CH-12"],
    hours: 3,
    skills: ["grammar", "speaking", "writing"],
    strands: ["communication", "speaking", "writing", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 questions on third-person forms, negatives and questions. Assignment: describe your daily routine in six sentences.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 4,
    module: "a1-everyday-grammar",
    lessons: [
      {
        title: "Meaning and Uses",
        blurb: "When do you use the present simple? Habits, routines, schedules and facts that stay true.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "reading"],
        strands: ["reading", "communication"],
        outcomes: [
          "Name the two core uses of the present simple",
          "Match example sentences to the right use",
          "Find present simple verbs in a text",
        ],
        blocks: [
          H("What the present simple means"),
          T(
            "The present simple describes what happens regularly, generally or always — not what is happening right now. Use it for habits and routines ('I get up at seven'), general facts ('Water boils at 100 degrees') and schedules ('The bus leaves at eight').",
          ),
          TB("Two uses, clear examples", ["Use", "Signal words", "Example"], [
            ["Habits and routines", "every day, always, usually, on Mondays", "I drink tea every morning."],
            ["Facts and general truths", "always true", "The sun rises in the east."],
          ]),
          EX("Present simple in the wild", [
            ["She works in a hospital.", "Ella trabaja en un hospital."],
            ["Cats sleep sixteen hours a day.", "Los gatos duermen dieciséis horas al día."],
            ["The train arrives at 6:45.", "El tren llega a las 6:45."],
          ]),
          AU("Listen: routines and facts", "I get up at seven. The sun rises in the east. She works in a hospital.", 0.85),
          N("Right now is different", "'I read books every week' (habit) vs 'I am reading a book now' (this moment). The second form — present continuous — arrives in Chapter 17."),
        ],
        assignment: {
          title: "Habit or fact?",
          instructions:
            "Write four sentences: two about your habits and routines, two general facts you know. Use the present simple.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Write your three most regular activities.", "Find two present simple facts in anything you read."],
      },
      {
        title: "Structure and the Third-Person -s",
        blurb: "He works, she plays, it rains — the famous -s and its three spellings and three sounds.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "pronunciation"],
        strands: ["pronunciation", "writing", "reading"],
        outcomes: [
          "Add the third-person -s with correct spelling (-s, -es, -ies)",
          "Pronounce the ending as /s/, /z/ or /ɪz/ correctly",
          "Build affirmative sentences with all pronouns",
        ],
        blocks: [
          H("The -s rule"),
          GR(
            "Third-person singular -s",
            "With he, she and it, the present simple verb takes -s. Spelling follows the plural rules: +s (works), +es after s/x/ch/sh (watches), y→ies after consonant (studies).",
            [
              ["I work → he works", "Yo trabajo → él trabaja"],
              ["You watch → she watches", "Tú miras → ella mira"],
              ["We study → he studies", "Nosotros estudiamos → él estudia"],
            ],
            ["have is irregular: he/she/it HAS."],
          ),
          TB("Three pronunciations of the ending", ["Sound", "After", "Examples"], [
            ["/s/", "voiceless sounds (p, t, k, f)", "works, sleeps, eats"],
            ["/z/", "voiced sounds (m, n, l, vowels)", "plays, runs, sings"],
            ["/ɪz/", "s, x, ch, sh, ge", "watches, washes, misses"],
          ]),
          AU("Listen: the three sounds", "works... /s/. plays... /z/. watches... /iz/.", 0.8),
          EX("All pronouns, one verb", [
            ["I live in Lima. She lives in Lima too.", "Vivo en Lima. Ella también vive en Lima."],
          ]),
          W("The most famous mistake in English", "'She work' instead of 'she works'. Make the -s automatic: every time you say he, she or it, feel the -s on the verb."),
        ],
        assignment: {
          title: "The -s workout",
          instructions:
            "Write the he/she forms of these verbs and use three in sentences: work, watch, study, play, go, have, eat, fix.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Say ten he/she sentences out loud, feeling the -s.", "Mark each ending /s/, /z/ or /ɪz/."],
      },
      {
        title: "Affirmative Sentences",
        blurb: "Build full positive present simple statements about your life.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication"],
        outcomes: [
          "Write affirmative present simple sentences with all pronouns",
          "Include time expressions correctly",
          "Describe a typical day in simple statements",
        ],
        blocks: [
          H("Statements that stick"),
          T(
            "Affirmative present simple sentences follow SVO with the -s rule: subject + verb (+ -s for he/she/it) + rest. Add time expressions at the beginning or end to anchor the habit.",
          ),
          EX("A day in statements", [
            ["I wake up at six o'clock.", "Me despierto a las seis."],
            ["My father makes breakfast.", "Mi padre prepara el desayuno."],
            ["We walk to school together.", "Caminamos a la escuela juntos."],
            ["In the evening, she studies English.", "Por la tarde, ella estudia inglés."],
          ]),
          AU("Listen: my day in statements", "I wake up at six. My father makes breakfast. We walk to school.", 0.85),
          N("Time expressions", "every day, every morning, on Mondays, at six o'clock, in the evening — put them at the start or the end, never in the middle of the verb group."),
        ],
        assignment: {
          title: "My day in statements",
          instructions:
            "Write six affirmative present simple sentences about your typical day, from morning to night. Use he/she/it subjects at least twice.",
          minWords: 20,
          maxWords: 65,
        },
        homework: ["Say your six sentences out loud twice.", "Add a time expression to each."],
      },
      {
        title: "Negative Sentences",
        blurb: "Don't and doesn't — how English says what is NOT true.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Form negatives with don't/doesn't + base verb",
          "Avoid the double-s mistake ('doesn't works')",
          "Say what you never or don't usually do",
        ],
        blocks: [
          H("The negative formula"),
          GR(
            "don't / doesn't + base verb",
            "I/you/we/they + don't + verb. He/she/it + doesn't + verb. The main verb NEVER takes -s in the negative — doesn't already carries it.",
            [
              ["I don't drink coffee.", "No bebo café."],
              ["She doesn't eat meat.", "Ella no come carne."],
              ["They don't work on Sundays.", "No trabajan los domingos."],
            ],
          ),
          EX("True negatives", [
            ["He doesn't smoke.", "Él no fuma."],
            ["We don't watch TV in the morning.", "No vemos TV por la mañana."],
          ]),
          AU("Listen: negatives", "I don't drink coffee. She doesn't eat meat. They don't work on Sundays.", 0.85),
          W("One s per sentence", "'She doesn't works' is wrong — the s lives in 'doesn't'. Write 'She doesn't work'."),
        ],
        assignment: {
          title: "Honest negatives",
          instructions:
            "Write six negative present simple sentences about things that are NOT true for you or your family: 'I don't... / My mother doesn't...'",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Say three things you don't do in the morning.", "Say one thing a family member doesn't like."],
      },
      {
        title: "Questions and Frequency Adverbs",
        blurb: "Do you...? Does she...? Plus always, usually, sometimes, never — the habit dials.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Form yes/no and short-answer questions with do/does",
          "Use the five frequency adverbs in the right position",
          "Interview someone about their routine",
        ],
        blocks: [
          H("Asking about habits"),
          GR(
            "Do / Does questions",
            "Do + I/you/we/they + base verb? Does + he/she/it + base verb? Short answers: Yes, I do / No, she doesn't.",
            [
              ["Do you speak English every day?", "¿Hablas inglés todos los días?"],
              ["Does your brother work here?", "¿Trabaja tu hermano aquí?"],
            ],
          ),
          TB("The frequency dial", ["Adverb", "How often (roughly)", "Position"], [
            ["always", "100%", "before the main verb"],
            ["usually", "~90%", "before the main verb"],
            ["sometimes", "~50%", "start or before main verb"],
            ["never", "0%", "before the main verb"],
            ["often", "~70%", "before the main verb"],
          ]),
          EX("Dialled sentences", [
            ["I always have breakfast.", "Siempre desayuno."],
            ["He sometimes plays football.", "Él a veces juega fútbol."],
            ["We never watch TV at lunch.", "Nunca vemos TV en el almuerzo."],
          ]),
          DL(
            "Routine interview",
            "A student interviews a classmate.",
            [
              ["Sara", "Do you always get up early?"],
              ["Ken", "Yes, I do. I get up at six."],
              ["Sara", "Does your sister get up early too?"],
              ["Ken", "No, she doesn't. She never gets up before ten!"],
            ],
          ),
          AU("Listen: the interview", "Do you always get up early? Yes, I do. Does your sister get up early too? No, she doesn't.", 0.85),
        ],
        assignment: {
          title: "Mini interview",
          instructions:
            "Write five questions about routines (Do you...? / Does your friend...?) and answer them honestly with short answers or full sentences. Use three different frequency adverbs.",
          minWords: 25,
          maxWords: 80,
        },
        homework: ["Interview a family member with three do/does questions.", "Report one answer: 'My father usually...'"],
      },
      {
        title: "Talking About Daily Routines and Chapter Review",
        blurb: "Put the whole tense together in a full routine, then take the Chapter 13 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing", "speaking"],
        strands: ["communication", "speaking", "writing", "pronunciation"],
        outcomes: [
          "Describe a complete daily routine fluently",
          "Mix affirmative, negative and question forms",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("A full routine"),
          EX(
            "Ravi's day",
            [
              ["Ravi gets up at six. He doesn't have breakfast at home — he buys bread on the way. He works in a shop from nine to five. At lunch he always eats rice. After work, he plays football with his friends. He usually studies English in the evening. He goes to bed at eleven.", "Ravi se levanta a las seis. No desayuna en casa — compra pan de camino. Trabaja en una tienda de nueve a cinco. En el almuerzo siempre come arroz. Después del trabajo juega fútbol con sus amigos. Normalmente estudia inglés por la tarde. Se acuesta a las once."],
            ],
            "Every sentence is present simple. Notice the -s on every he-verb.",
          ),
          AU("Listen: Ravi's day", "Ravi gets up at six. He works in a shop from nine to five. He goes to bed at eleven.", 0.85),
          TB("Routine word bank", ["Morning", "Afternoon", "Evening"], [
            ["wake up, get up, have breakfast, brush teeth", "have lunch, work, study", "have dinner, watch TV, go to bed"],
          ]),
          H("Chapter 13 review"),
          T("Three questions on the tense system, then the routine task."),
        ],
        assignment: {
          title: "My routine, honestly",
          instructions:
            "Describe your daily routine in six to eight sentences. Include: two always/usually sentences, one negative, one question about a family member, and full time expressions.",
          minWords: 40,
          maxWords: 110,
        },
        questions: [
          FB(
            "Complete: 'She ___ (go) to school by bus, but her brother ___ (not / go) by bus.'",
            "She ___ to school by bus, but her brother ___ by bus.",
            ["goes to school by bus, but her brother doesn't go"],
            fb(
              "goes / doesn't go",
              "Third person affirmative takes -s (goes); the negative uses doesn't + base verb (doesn't go).",
              "The -s moves into 'doesn't' in negatives — never write 'doesn't goes'.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence is correct?",
            [["a", "He doesn't likes tea."], ["b", "He doesn't like tea."], ["c", "He don't like tea."]],
            "b",
            fb("He doesn't like tea.", "doesn't + base verb. The s is inside doesn't.", "'He don't' uses the wrong helper; 'doesn't likes' doubles the s."),
            { skill: "grammar", difficulty: "easy" },
          ),
          REORD(
            "Put the words in order to make a correct question.",
            "Does she work on Saturdays",
            fb("Does she work on Saturdays", "Does + subject + base verb: the standard question order.", "The helping verb always comes first in yes/no questions."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a1", {
    number: 14,
    title: "Questions and Negative Sentences",
    description:
      "The full beginner question system: yes/no questions with be and do, the eight WH-questions (what, where, when, who, why, how, which, whose), question word order, negatives review, imperatives for instructions and requests, and asking for real information politely.",
    objectives: [
      "Build yes/no questions with be and do/does",
      "Build WH-questions with correct word order",
      "Choose the right question word for each situation",
      "Use imperatives for instructions, requests and warnings",
    ],
    prerequisites: ["CH-13"],
    hours: 3,
    skills: ["grammar", "speaking", "listening"],
    strands: ["communication", "speaking", "listening", "writing"],
    assessment:
      "Chapter review quiz: 3 questions on question words and order. Assignment: write a six-question interview and answer it.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 4,
    module: "a1-everyday-grammar",
    lessons: [
      {
        title: "Yes/No Questions",
        blurb: "Questions with two possible answers — the fastest way to get information.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Build yes/no questions with be, do and have",
          "Answer with short answers correctly",
          "Ask follow-up questions in a conversation",
        ],
        blocks: [
          H("Two recipes"),
          GR(
            "Yes/no questions",
            "With be: flip the verb (Are you tired?). With other verbs: Do/Does + subject + base verb (Do you work?).",
            [
              ["You are ready. → Are you ready?", "¿Estás listo?"],
              ["She likes music. → Does she like music?", "¿Le gusta la música?"],
            ],
          ),
          EX("Real yes/no questions", [
            ["Do you live near here?", "¿Vives por aquí?"],
            ["Is this your bag?", "¿Es tu bolso?"],
            ["Does the shop open on Sundays?", "¿Abre la tienda los domingos?"],
          ]),
          AU("Listen: rising questions", "Are you tired? Do you live near here? Does the shop open on Sundays?", 0.85),
          N("Your voice rises", "Yes/no questions end with rising intonation — your voice goes UP on the last word. Practise with the audio."),
        ],
        assignment: {
          title: "Five yes/no questions",
          instructions:
            "Write five yes/no questions for a new classmate (use be, do and does at least once each), then answer them as if you were the classmate.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Ask three yes/no questions to someone today.", "Notice your voice rising."],
      },
      {
        title: "WH-Questions",
        blurb: "What, where, when, who, why, how — the question words that demand real answers.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Name the eight question words and what each asks",
          "Build WH-questions in correct order",
          "Answer WH-questions with full information",
        ],
        blocks: [
          H("The question toolkit"),
          TB("Eight question words", ["Word", "Asks about", "Example"], [
            ["what", "things, actions", "What is this?"],
            ["where", "places", "Where do you live?"],
            ["when", "time", "When does class start?"],
            ["who", "people", "Who is your teacher?"],
            ["why", "reasons", "Why do you study English?"],
            ["how", "manner, way", "How do you go to work?"],
            ["which", "choice from a set", "Which colour do you want?"],
            ["whose", "ownership", "Whose pen is this?"],
          ]),
          GR(
            "WH-question order",
            "Question word + helping verb (be or do/does) + subject + rest. The helping verb ALWAYS comes before the subject.",
            [
              ["Where do you work?", "¿Dónde trabajas?"],
              ["When is the party?", "¿Cuándo es la fiesta?"],
            ],
          ),
          EX("One topic, many angles", [
            ["What do you eat? Where do you eat? When do you eat? Why do you eat early?", "¿Qué comes? ¿Dónde comes? ¿Cuándo comes? ¿Por qué comes temprano?"],
          ]),
          AU("Listen: eight questions", "What is this? Where do you live? When does class start? Who is your teacher?", 0.85),
          W("Subject questions are special", "'Who lives here?' has NO do/does — the question word IS the subject. Compare: 'Who do you call?' (who is the object)."),
        ],
        assignment: {
          title: "The eight angles",
          instructions:
            "Choose one activity you do (for example 'play football'). Write six WH-questions about it using six different question words, and answer each.",
          minWords: 25,
          maxWords: 85,
        },
        homework: ["Ask someone three WH-questions today.", "Write down their answers."],
      },
      {
        title: "Question Formation Practice",
        blurb: "Turn statements into questions and back — the mechanic that makes conversation flow.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Convert statements into yes/no and WH-questions",
          "Order scrambled questions correctly",
          "Choose question words from context",
        ],
        blocks: [
          H("The conversion drill"),
          TB("Statement → question", ["Statement", "Yes/No question", "WH-question"], [
            ["She works in a bank.", "Does she work in a bank?", "Where does she work?"],
            ["They are at home.", "Are they at home?", "Where are they?"],
            ["He gets up at six.", "Does he get up at six?", "When does he get up?"],
          ]),
          EX("Scramble and fix", [
            ["you / do / where / live? → Where do you live?", "¿Dónde vives?"],
            ["she / why / is / tired? → Why is she tired?", "¿Por qué está cansada?"],
          ]),
          AU("Listen: conversions", "She works in a bank. ... Does she work in a bank? ... Where does she work?", 0.85),
          N("Hear the missing piece", "When someone answers vaguely, find the missing information and pick the question word that requests it. That is real conversation strategy."),
        ],
        assignment: {
          title: "Conversion table",
          instructions:
            "Write three statements, then convert each into a yes/no question and a WH-question (nine items total).",
          minWords: 20,
          maxWords: 75,
        },
        homework: ["Turn three statements from a text into questions.", "Answer your own questions."],
      },
      {
        title: "Negatives Review and Imperatives",
        blurb: "Don't worry! Commands, instructions and friendly requests with imperatives.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "pronunciation"],
        outcomes: [
          "Form positive and negative imperatives",
          "Soften commands into polite requests",
          "Give a sequence of instructions",
        ],
        blocks: [
          H("The imperative: no subject needed"),
          GR(
            "Imperatives",
            "Use the base verb with no subject: 'Open the door.' Negative: 'Don't + verb': 'Don't worry.' Add 'please' to soften.",
            [
              ["Sit down, please.", "Siéntate, por favor."],
              ["Don't touch that!", "¡No toques eso!"],
              ["Turn left at the corner.", "Gira a la izquierda en la esquina."],
            ],
          ),
          TB("Imperatives in real life", ["Context", "Examples"], [
            ["Instructions", "Take one pill every morning."],
            ["Directions", "Go straight, then turn right."],
            ["Requests", "Please help me with this bag."],
            ["Warnings", "Don't be late!"],
          ]),
          AU("Listen: instructions", "Open your books. Listen and repeat. Don't write yet. Work in pairs.", 0.85),
          N("Why imperatives here", "The negative imperative 'Don't...' looks like the present simple negative without a subject — same engine, one less piece."),
        ],
        assignment: {
          title: "Instruction sheet",
          instructions:
            "Write instructions for a simple task you know well (making tea, using an app, getting to your house): four positive imperatives and one negative.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Give someone two polite instructions with 'please'.", "Write one warning with Don't."],
      },
      {
        title: "Asking for Information in Real Life and Chapter Review",
        blurb: "Polite information questions for shops, streets and stations, then the Chapter 14 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["speaking", "communication"],
        strands: ["communication", "speaking", "listening", "vocabulary"],
        outcomes: [
          "Ask for information politely in five everyday situations",
          "Understand common answers",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Questions that open doors"),
          DL(
            "At the station",
            "A traveller asks for information.",
            [
              ["Traveller", "Excuse me, when does the next train leave?"],
              ["Officer", "At ten past two, from platform three."],
              ["Traveller", "How much does a ticket cost?"],
              ["Officer", "Twelve pounds. The machine is over there."],
              ["Traveller", "Thank you. Does it stop at Central Station?"],
              ["Officer", "Yes, it does. Have a good trip!"],
            ],
          ),
          EX("Polite starters", [
            ["Excuse me, where is the bank?", "Disculpe, ¿dónde está el banco?"],
            ["Excuse me, what time does the shop open?", "Disculpe, ¿a qué hora abre la tienda?"],
            ["Can you help me, please?", "¿Puede ayudarme, por favor?"],
          ]),
          AU("Listen: at the station", "Excuse me, when does the next train leave? At ten past two, from platform three.", 0.85),
          H("Chapter 14 review"),
          T("Three questions on question words and order, then the interview task."),
        ],
        assignment: {
          title: "The real-world interview",
          instructions:
            "Write a six-question interview for a visitor to your town (where, when, what, how, why, do/does) and answer it as the visitor.",
          minWords: 30,
          maxWords: 100,
        },
        questions: [
          MCQ(
            "'___ does the class start?' — which question word asks about TIME?",
            [["a", "Where"], ["b", "When"], ["c", "What"]],
            "b",
            fb("When", "When asks about time: 'When does the class start?'", "'Where' asks about place and 'What' asks about things."),
            { skill: "grammar", difficulty: "easy" },
          ),
          REORD(
            "Put the words in the correct question order.",
            "Where does your sister work",
            fb("Where does your sister work", "WH-word + does + subject + base verb.", "Never put the subject before the helping verb in questions."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which is a correct POLITE request?",
            [["a", "Give me water."], ["b", "Can you help me, please?"], ["c", "You help me now."]],
            "b",
            fb("Can you help me, please?", "Questions with can + please are polite. Bare imperatives are correct but can sound abrupt to strangers.", "'Give me water.' is grammatically fine but impolite in public."),
            { skill: "speaking", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a1", {
    number: 15,
    title: "Adjectives and Adverbs",
    description:
      "Describing the world in detail: adjective placement and the basic adjective order, adverbs of manner (how you do things), adverbs of frequency in review, adverb position rules, and describing people, places and things with precision.",
    objectives: [
      "Place adjectives correctly before nouns and after be",
      "Apply basic adjective order: opinion before size before colour",
      "Form adverbs of manner with -ly and place them correctly",
      "Describe people, places and daily life with rich detail",
    ],
    prerequisites: ["CH-14"],
    hours: 3,
    skills: ["grammar", "vocabulary", "writing"],
    strands: ["writing", "vocabulary", "communication", "speaking"],
    assessment:
      "Chapter review quiz: 3 questions on adjective order, adverb formation and position. Assignment: describe a person and a place with five descriptive words each.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 4,
    module: "a1-everyday-grammar",
    lessons: [
      {
        title: "Describing People and Things",
        blurb: "Adjectives add the colour: tall, friendly, expensive, old — before the noun or after be.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "communication"],
        outcomes: [
          "Use adjectives in both positions (before nouns, after be)",
          "Describe people's appearance and personality",
          "Describe objects with two adjectives",
        ],
        blocks: [
          H("Two positions, one job"),
          GR(
            "Adjective positions",
            "Before the noun: a big house. After be: the house is big. Adjectives never take -s: 'two tall boys', not 'two talls boys'.",
            [
              ["She is a kind teacher.", "Es una profesora amable."],
              ["The teacher is kind.", "La profesora es amable."],
            ],
          ),
          VOC("Describing people", [
            ["tall", "adjective", "higher than normal", "alto"],
            ["short", "adjective", "not tall", "bajo"],
            ["young", "adjective", "not old", "joven"],
            ["kind", "adjective", "friendly and good to people", "amable"],
            ["funny", "adjective", "makes you laugh", "divertido"],
            ["clever", "adjective", "learns and understands fast", "listo"],
          ]),
          EX("Descriptions at work", [
            ["My grandfather is old but very funny.", "Mi abuelo es mayor pero muy divertido."],
            ["She has long dark hair.", "Tiene el pelo largo y oscuro."],
          ]),
          AU("Listen: describing people", "tall, short, young, kind, funny, clever.", 0.85),
          W("No plural adjectives", "English adjectives never change: 'red cars', 'tall girls'. One adjective form for everything."),
        ],
        assignment: {
          title: "Two people, two descriptions",
          instructions:
            "Describe two people you know with four sentences each, using at least six different adjectives in both positions.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Describe three objects near you with two adjectives each.", "Say the descriptions out loud."],
      },
      {
        title: "Adjective Order",
        blurb: "A nice big old brown table — the exact order English puts stacked adjectives in.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Order stacked adjectives: opinion-size-age-colour",
          "Rewrite wrongly-ordered descriptions",
          "Use commas and 'and' in adjective lists",
        ],
        blocks: [
          H("The stacking rule"),
          GR(
            "Adjective order (beginner set)",
            "OPINION → SIZE → AGE → COLOUR: a nice big new red bag. Use commas between adjectives and 'and' before the last one when the noun follows in speech.",
            [
              ["a beautiful old house", "una casa antigua y bonita"],
              ["two small black cats", "dos gatos negros y pequeños"],
            ],
            ["Never separate opinion-size-age-colour with 'and' when a noun follows: 'a nice big room', not 'a nice and big room'."],
          ),
          EX("Stacking in practice", [
            ["She wears a beautiful long red dress.", "Lleva un vestido rojo, largo y bonito."],
            ["I want a small new phone.", "Quiero un teléfono nuevo y pequeño."],
          ]),
          AU("Listen: stacked adjectives", "a nice big house... a small black cat... a beautiful old red car.", 0.85),
          N("Your own language probably reverses this", "Spanish puts 'un vestido rojo largo' — English flips the order. Train the pattern as a rhythm: opinion, size, age, colour, NOUN."),
        ],
        assignment: {
          title: "Stack them right",
          instructions:
            "Put the adjectives in the correct order and write each phrase: 'black / a / big / car', 'old / a / interesting / book', 'red / three / small / boxes', 'new / a / beautiful / bag'. Then use two phrases in sentences.",
          minWords: 12,
          maxWords: 55,
        },
        homework: ["Describe your favourite outfit with three stacked adjectives.", "Describe your home with two stacks."],
      },
      {
        title: "Adverbs of Manner",
        blurb: "How do you do it? Slowly, quickly, well, badly — adverbs describe actions.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "pronunciation"],
        outcomes: [
          "Form adverbs with -ly from most adjectives",
          "Use irregular adverbs: well, badly, fast, hard",
          "Describe how actions happen",
        ],
        blocks: [
          H("From adjective to adverb"),
          GR(
            "Adverb formation",
            "Most adverbs = adjective + ly: slow → slowly, quick → quickly. If the adjective ends in -y: happy → happily. Irregulars to memorise: good → well, bad → badly, fast → fast, hard → hard.",
            [
              ["She sings beautifully.", "Canta bellamente."],
              ["He drives fast.", "Conduce rápido."],
              ["They speak English well.", "Hablan bien inglés."],
            ],
          ),
          TB("Position of manner adverbs", ["Pattern", "Example"], [
            ["After the verb", "She runs quickly."],
            ["After the object", "He speaks English slowly."],
          ]),
          EX("How do you do it?", [
            ["Please speak slowly.", "Habla despacio, por favor."],
            ["The children play happily.", "Los niños juegan felizmente."],
          ]),
          AU("Listen: how actions happen", "slowly, quickly, well, badly, happily, carefully.", 0.85),
          W("Good vs well", "'Good' describes nouns (a good book); 'well' describes actions (she speaks well). 'She speaks good English' describes the English; 'she speaks English well' describes the speaking."),
        ],
        assignment: {
          title: "How I do things",
          instructions:
            "Write five sentences describing HOW you do activities (cooking, working, driving, studying, sleeping) with a different adverb each, including one irregular.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Turn five adjectives into adverbs out loud.", "Describe how three people you know work or study."],
      },
      {
        title: "Adverbs of Frequency and Placement",
        blurb: "Always, usually, sometimes, never — where exactly they sit in the sentence.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Place frequency adverbs before main verbs and after be",
          "Understand percentage meanings of each adverb",
          "Ask and answer 'How often...?' questions",
        ],
        blocks: [
          H("Two homes for frequency adverbs"),
          GR(
            "Frequency adverb placement",
            "Before the main verb: 'I always eat breakfast.' BUT after be: 'She is always late.'",
            [
              ["He usually walks to work.", "Normalmente camina al trabajo."],
              ["They are never angry.", "Nunca están enfadados."],
            ],
          ),
          TB("How often? The scale", ["Question", "Adverb", "Answer pattern"], [
            ["How often do you cook?", "always / usually / often / sometimes / never", "I cook every day. / I never cook."],
          ]),
          EX("How often questions", [
            ["How often do you exercise? — I usually exercise on Mondays.", "¿Con qué frecuencia haces ejercicio? — Normalmente los lunes."],
          ]),
          AU("Listen: the two positions", "I always eat breakfast. She is always late. They are never angry.", 0.85),
          N("The be exception is automatic for natives", "Train it as muscle memory: verb → before; be → after. Two drills, one rule."),
        ],
        assignment: {
          title: "How often report",
          instructions:
            "Write five 'How often...?' questions and answer them with frequency adverbs. Use both sentence positions (before main verb, after be) at least twice.",
          minWords: 20,
          maxWords: 70,
        },
        homework: ["Track one habit today and report it with a frequency adverb.", "Ask two people 'How often do you...?'"],
      },
      {
        title: "Describing Your World and Chapter Review",
        blurb: "Rich descriptions of people, places and routines, then the Chapter 15 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["writing", "vocabulary"],
        strands: ["writing", "communication", "vocabulary", "reading"],
        outcomes: [
          "Write a rich description mixing adjectives and adverbs",
          "Self-edit adjective order and adverb position",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("A description with everything"),
          EX(
            "My street",
            [
              ["I live on a quiet old street. The houses are small and beautiful. In the morning, the bakery opens early and bakes fresh bread slowly. The people here are friendly and they always say hello. Children play happily in the park, and the birds sing loudly. I sometimes walk slowly to the shop and I never take the car.", "Vivo en una calle antigua y tranquila. Las casas son pequeñas y bonitas. Por la mañana, la panadería abre temprano y hornea pan fresco despacio. La gente aquí es amable y siempre saluda. Los niños juegan felices en el parque y los pájaros cantan fuerte. A veces camino despacio a la tienda y nunca llevo el coche."],
            ],
            "Count the adjectives and adverbs — nine describing words in one small paragraph.",
          ),
          AU("Listen: my street", "I live on a quiet old street. The houses are small and beautiful.", 0.85),
          TB("Self-edit checklist", ["Check", "Question"], [
            ["Adjective order", "Opinion before size before age before colour?"],
            ["Adverb position", "Frequency adverb before main verb, after be?"],
            ["No plural adjectives", "Did any adjective take an -s?"],
          ]),
          H("Chapter 15 review"),
          T("Three questions on order and adverbs, then the description task."),
        ],
        assignment: {
          title: "Person and place",
          instructions:
            "Write one paragraph about a person you admire and one about a place you love (four sentences each). Use at least five describing words in each paragraph and label one adjective order stack and one adverb.",
          minWords: 45,
          maxWords: 130,
        },
        questions: [
          MCQ(
            "Which phrase has the adjectives in the correct order?",
            [["a", "a red big bag"], ["b", "a big red bag"], ["c", "a red, bag big"]],
            "b",
            fb("a big red bag", "Size (big) comes before colour (red): opinion → size → age → colour.", "'a red big bag' puts colour before size."),
            { skill: "grammar", difficulty: "easy" },
          ),
          FB(
            "Write the adverb: 'She is a good singer. She sings ___.'",
            "She is a good singer. She sings ___.",
            ["well"],
            fb("well", "'Good' becomes the irregular adverb 'well' when it describes an action.", "Adjectives describe nouns; adverbs describe actions."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Where does 'always' go? 'She ___ late.' (be sentence)",
            [["a", "She always is late."], ["b", "She is always late."], ["c", "She is late always."]],
            "b",
            fb("She is always late.", "Frequency adverbs go AFTER be but BEFORE main verbs.", "'She always is late' breaks the be rule."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a1", {
    number: 16,
    title: "Prepositions and There Is / There Are",
    description:
      "Where things are and what exists: prepositions of place (in, on, under, next to, between), prepositions of time (at, on, in), movement prepositions, the existential patterns there is / there are, and some vs any. You learn to describe any room, street or schedule.",
    objectives: [
      "Use the eight core prepositions of place",
      "Choose at, on or in for times correctly",
      "Describe existence with there is / there are in all forms",
      "Use some and any with countable and uncountable nouns",
    ],
    prerequisites: ["CH-15"],
    hours: 3,
    skills: ["grammar", "speaking", "vocabulary"],
    strands: ["communication", "speaking", "vocabulary", "writing", "listening"],
    assessment:
      "Chapter review quiz: 3 questions on prepositions and there is/are. Assignment: describe a room with there is/there are and prepositions.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 4,
    module: "a1-everyday-grammar",
    lessons: [
      {
        title: "Prepositions of Place",
        blurb: "In the box, on the table, under the chair — where exactly things are.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "communication", "speaking"],
        outcomes: [
          "Use in, on, under, next to, between, behind, in front of, near",
          "Describe where objects are in a room",
          "Ask 'Where is...?' and answer with prepositions",
        ],
        blocks: [
          H("The place words"),
          TB("Eight core prepositions", ["Preposition", "Meaning", "Example"], [
            ["in", "inside", "The keys are in the bag."],
            ["on", "touching the surface", "The book is on the table."],
            ["under", "below", "The cat is under the chair."],
            ["next to / beside", "at the side of", "The lamp is next to the bed."],
            ["between", "in the middle of two", "The shop is between the bank and the café."],
            ["behind", "at the back of", "The garden is behind the house."],
            ["in front of", "before it", "A car is in front of the school."],
            ["near", "close to", "We live near the park."],
          ]),
          EX("Finding things", [
            ["Where is the cat? — It's under the table.", "¿Dónde está el gato? — Está bajo la mesa."],
            ["The pharmacy is next to the bank.", "La farmacia está al lado del banco."],
          ]),
          AU("Listen: where things are", "in the bag, on the table, under the chair, next to the bed, between the shops.", 0.85),
          W("In vs on", "IN = inside with walls or borders (in the kitchen, in the city). ON = on a surface (on the table, on the wall). 'On the photo' is wrong in most cases: say 'in the photo'."),
        ],
        assignment: {
          title: "Room map",
          instructions:
            "Describe your room with six sentences, each using a different place preposition: 'My bed is near the window.'",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Describe where five things are in your kitchen.", "Ask someone 'Where is your phone?'"],
      },
      {
        title: "Prepositions of Time",
        blurb: "At six, on Monday, in July — the time preposition system in three rules.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "reading"],
        outcomes: [
          "Choose at, on or in for clock times, days and longer periods",
          "Use common time expressions with the right preposition",
          "Talk about schedules accurately",
        ],
        blocks: [
          H("Three time zones"),
          GR(
            "at / on / in for time",
            "AT for clock times and points (at 6 o'clock, at night, at the weekend). ON for days and dates (on Monday, on 5 May, on my birthday). IN for months, seasons, years, long periods (in July, in summer, in 2027, in the morning).",
            [
              ["The class starts at nine.", "La clase empieza a las nueve."],
              ["I work on Saturdays.", "Trabajo los sábados."],
              ["We travel in August.", "Viajamos en agosto."],
            ],
          ),
          TB("Quick chooser", ["Preposition", "Time type", "Examples"], [
            ["at", "clock times, points", "at 7:30, at noon, at night"],
            ["on", "days, dates", "on Friday, on 3 June, on New Year's Day"],
            ["in", "months, seasons, years", "in May, in winter, in 2030, in the morning"],
          ]),
          AU("Listen: time expressions", "at nine o'clock... on Monday... in July... in the morning... at night.", 0.85),
          N("The zoom rule", "Think of a camera zooming out: AT a point (a clock time) → ON a day → IN a longer period. Smaller to bigger, at-on-in."),
        ],
        assignment: {
          title: "My week in time",
          instructions:
            "Write six sentences about your schedule using at, on and in twice each: times, days and months.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Say five true time sentences about your week.", "Check each preposition with the zoom rule."],
      },
      {
        title: "Movement Prepositions",
        blurb: "To, into, out of, across — prepositions that show direction and motion.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "communication", "listening"],
        outcomes: [
          "Use to, into, out of, across, along, through for movement",
          "Give simple directions",
          "Describe a short journey",
        ],
        blocks: [
          H("Prepositions on the move"),
          TB("Movement prepositions", ["Preposition", "Movement", "Example"], [
            ["to", "towards a destination", "I go to school by bus."],
            ["into", "from outside to inside", "She walks into the shop."],
            ["out of", "from inside to outside", "He takes the pen out of the box."],
            ["across", "from one side to the other", "They swim across the river."],
            ["along", "following a line", "Walk along this street."],
            ["through", "in one side, out the other", "The train goes through a tunnel."],
          ]),
          EX("A short journey", [
            ["I walk to the corner, go across the park and come into the office at nine.", "Camino a la esquina, cruzo el parque y entro a la oficina a las nueve."],
          ]),
          AU("Listen: on the move", "to the station, into the house, out of the car, across the bridge.", 0.85),
          N("Home is special", "You go TO school, TO work, TO the shop — but you go HOME (no 'to'). 'I go to home' is a classic mistake."),
        ],
        assignment: {
          title: "My journey",
          instructions:
            "Describe your route from home to a place you go often (four or five sentences) using four different movement prepositions.",
          minWords: 16,
          maxWords: 60,
        },
        homework: ["Give directions from your home to the nearest shop.", "Use 'along' and 'across' once each."],
      },
      {
        title: "There Is / There Are",
        blurb: "English says what exists: there is a park, there are two schools.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "writing"],
        outcomes: [
          "Use there is/there are with singular and plural nouns",
          "Make negatives (there isn't / there aren't) and questions",
          "Describe what exists in a place",
        ],
        blocks: [
          H("The existence pattern"),
          GR(
            "There is / There are",
            "There is + singular/uncountable (There is a park). There are + plural (There are two schools). Negative: there isn't / there aren't. Question: Is there...? / Are there...?",
            [
              ["There is a big park near my house.", "Hay un parque grande cerca de mi casa."],
              ["There are three children in the garden.", "Hay tres niños en el jardín."],
              ["Is there a bank near here? — Yes, there is.", "¿Hay un banco cerca? — Sí."],
            ],
          ),
          EX("Describing a neighbourhood", [
            ["There are two cafés and there isn't a cinema.", "Hay dos cafés y no hay cine."],
            ["Are there any shops open? — No, there aren't.", "¿Hay tiendas abiertas? — No."],
          ]),
          AU("Listen: what exists", "There is a park. There are two schools. There isn't a cinema. Are there any shops?", 0.85),
          W("There is never 'there is two'", "The noun decides: one thing → there is; more than one → there are. 'There is two banks' is impossible."),
        ],
        assignment: {
          title: "My neighbourhood",
          instructions:
            "Write six sentences about your neighbourhood with there is/there are: three affirmative, one negative, two questions with answers.",
          minWords: 22,
          maxWords: 70,
        },
        homework: ["Describe your kitchen: three there is / there are sentences.", "Ask 'Is there a...?' about two things."],
      },
      {
        title: "Some and Any",
        blurb: "Some in positives, any in negatives and questions — the quantity pair.",
        minutes: 20,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "communication", "reading"],
        outcomes: [
          "Use some in affirmative sentences",
          "Use any in negatives and questions",
          "Offer and request with some/any naturally",
        ],
        blocks: [
          H("The quantity pair"),
          GR(
            "some / any",
            "Use SOME in affirmative sentences (There are some apples). Use ANY in negatives (There aren't any apples) and questions (Are there any apples?). Offers/requests may use some: 'Would you like some tea?'",
            [
              ["I have some money.", "Tengo algo de dinero."],
              ["Do you have any brothers?", "¿Tienes hermanos?"],
              ["There isn't any milk.", "No hay leche."],
            ],
          ),
          EX("Shopping dialogue", [
            ["Do we need any eggs? — Yes, and some bread too.", "¿Necesitamos huevos? — Sí, y también pan."],
          ]),
          AU("Listen: some and any", "I have some money. Do you have any money? There isn't any milk.", 0.85),
          N("Full details in Chapter 24", "Some/any also work with uncountable nouns (some water, any time). Chapter 24 completes the quantity system with much, many, few and little."),
        ],
        assignment: {
          title: "Fridge check",
          instructions:
            "Write five sentences about food at home right now: two with 'some', two with 'any' (one negative, one question), one free choice.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Make a shopping list with 'We need some...'.", "Write what you don't have: 'We don't have any...'"],
      },
      {
        title: "Describing Places and Chapter Review",
        blurb: "Full place descriptions with prepositions and existence, then the Chapter 16 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing", "speaking"],
        strands: ["communication", "writing", "speaking", "vocabulary"],
        outcomes: [
          "Write a complete description of a place",
          "Mix prepositions, there is/are and some/any",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("A complete place description"),
          EX(
            "The reading room",
            [
              ["There is a small reading room in our school. There are twelve desks and a long table in the middle. On the table, there are some dictionaries and there aren't any bags. The room is between the library and the science lab. There is a big window in front of the desks, and near the door there is a shelf with some magazines. Students read quietly here in the afternoon.", "Hay una pequeña sala de lectura en nuestra escuela. Hay doce pupitres y una mesa larga en el medio. Sobre la mesa hay algunos diccionarios y no hay bolsas. La sala está entre la biblioteca y el laboratorio. Hay una ventana grande frente a los pupitres y cerca de la puerta hay una estantería con revistas. Los estudiantes leen en silencio aquí por la tarde."],
            ],
          ),
          AU("Listen: the reading room", "There is a small reading room in our school. There are twelve desks and a long table in the middle.", 0.85),
          TB("Description recipe", ["Step", "Do this"], [
            ["1. Existence", "Start with there is/there are + counts"],
            ["2. Position", "Add place prepositions"],
            ["3. Detail", "Add some/any and describing words"],
          ]),
          H("Chapter 16 review"),
          T("Three questions on prepositions and existence, then the room task."),
        ],
        assignment: {
          title: "A place I know well",
          instructions:
            "Describe a room or a place you know in six to eight sentences using: there is, there are, there isn't/aren't, two place prepositions, one time preposition and some/any.",
          minWords: 35,
          maxWords: 110,
        },
        questions: [
          MCQ(
            "'The class starts ___ 9 o'clock ___ Monday.' — choose the correct pair.",
            [["a", "in / on"], ["b", "at / on"], ["c", "on / at"]],
            "b",
            fb("at 9 o'clock, on Monday", "AT for clock times, ON for days.", "Zoom rule: at a point, on a day, in a longer period."),
            { skill: "grammar", difficulty: "easy" },
          ),
          FB(
            "Complete: '___ ___ two banks near my house.' (plural existence)",
            "___ ___ two banks near my house.",
            ["There are"],
            fb("There are", "Plural nouns take there are; singular takes there is.", "Count the noun: two banks = plural."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence uses some/any correctly?",
            [["a", "I don't have some money."], ["b", "Are there any apples?"], ["c", "There aren't some shops."]],
            "b",
            fb("Are there any apples?", "Questions take any.", "Negatives also take any; affirmatives take some."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),
];
