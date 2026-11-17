/**
 * PROMPT 57 production — Batch 6, Chapter 18: Practical Everyday English.
 *
 * The A1 capstone. Every lesson below is rewritten to the full v2 teaching
 * standard: lesson introduction + prerequisites, concept explanation,
 * step-by-step teaching, rules and patterns, 8+ worked examples with teaching
 * notes, real-life usage, comparison, common mistakes (wrong → right →
 * reason), guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary, revision
 * questions from earlier chapters, assignment and homework.
 *
 * This chapter is where A1 becomes USE. The lessons teach conversation
 * management — how to open (Hi, I am… / Excuse me…), how to keep a talk
 * alive (And you? / What about you?) and how to close (Nice to meet you. /
 * See you later) — plus register (short answers vs full sentences) and, in
 * the final lesson, the shape of a real paragraph: topic sentence,
 * supporting sentences, closing line, with a worked model analysed line
 * by line. No isolated sentences and no "practise more" filler.
 */

import {
  AU,
  CORR,
  DICT,
  DL,
  FB,
  GR,
  H,
  LIS,
  MCQ,
  MATCH,
  N,
  RD,
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
  title: string,
  entries: { word: string; partOfSpeech: string; definition: string }[],
) {
  return VOC(
    title,
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

export const ch18Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Introducing Yourself
  // =========================================================================
  {
    slug: "ch-18-l-01",
    minutes: 25,
    description:
      "The five moves of a real first meeting: name, country, job, family and a polite close — the full self-introduction exchange.",
    outcomes: [
      "Open a first meeting with “Hi, I am …” or “My name is …”",
      "Answer the five introduction questions: name, country, job, family, health",
      "Keep a conversation going with “And you?”",
      "Close a first meeting politely with “Nice to meet you.”",
    ],
    blocks: [
      LI(
        "This is the first lesson of the A1 capstone. You now put everything together. You will meet a new person and hold a real exchange. You open, give your name, your country and your job, then close politely. The whole conversation takes less than a minute.",
        [
          "You can use am, is and are: “I am Sara.” “She is a teacher.” (Chapter 12 · Lesson 1).",
          "You know the question words what, where, who and how (Chapter 14 · Lesson 2).",
          "You can put my, your, his and her before nouns (Chapter 11 · Lesson 3).",
          "You know the people words: family, friend, teacher and student (Chapter 06 · Lesson 1).",
        ],
      ),
      vocGlossary("The words of an introduction", [
        { word: "name", partOfSpeech: "noun", definition: "the word people call you" },
        { word: "country", partOfSpeech: "noun", definition: "a big place like Pakistan, Egypt or India" },
        { word: "city", partOfSpeech: "noun", definition: "a big town, like Lahore or Delhi" },
        { word: "job", partOfSpeech: "noun", definition: "the work you do for money" },
        { word: "student", partOfSpeech: "noun", definition: "a person who studies" },
        { word: "teacher", partOfSpeech: "noun", definition: "a person who helps you learn" },
        { word: "to meet", partOfSpeech: "verb", definition: "to see and talk to a person for the first time" },
        { word: "friend", partOfSpeech: "noun", definition: "a person you like and know well" },
        { word: "family", partOfSpeech: "noun", definition: "the people closest to you" },
        { word: "English", partOfSpeech: "noun", definition: "the language you are learning" },
      ]),
      H("Why the first minute matters"),
      T(
        "A good introduction opens doors. People remember a friendly first minute. The good news: English introductions follow one small pattern. Learn the pattern, and every first meeting becomes easy.",
      ),
      {
        type: "definition",
        term: "introduction",
        partOfSpeech: "noun",
        definition:
          "An introduction is the first talk with a new person. You give your name, your country and your job.",
        example: {
          english: "Hi, I am Sara. I am from Pakistan.",
          translation: "Name, country, job — the three facts of a first meeting.",
        },
      },
      TB(
        "The five introduction moves",
        ["Move", "You say", "Example"],
        [
          ["1. Name", "My name is … / I am …", "My name is Sara."],
          ["2. Country", "I am from …", "I am from Pakistan."],
          ["3. Job or study", "I am a …", "I am a student."],
          ["4. Family", "I have …", "I have one brother."],
          ["5. Close", "Nice to meet you.", "Nice to meet you!"],
        ],
        "Five moves, one minute. Learn them in this order.",
      ),
      AU(
        "Listen: the words of an introduction",
        "name. country. city. job. student. teacher. friend. family. Nice to meet you.",
        0.85,
      ),
      AU(
        "Listen: a full first meeting",
        "Hi, I am Sara. — Hi Sara, I am Omar. Nice to meet you. — Nice to meet you too. Where are you from? — I am from Pakistan. And you? — I am from Egypt.",
        0.9,
      ),
      N(
        "And you? — the two words that keep a talk alive",
        "After any answer, say “And you?” The same question goes back to the other person. One small phrase, and the conversation never dies.",
      ),
      ST(
        "Build your introduction in four steps",
        [
          {
            title: "Step 1 — Open with your name",
            text: "Say hello, then your name. Two patterns work: Hi, I am … or My name is …",
            examples: [
              { english: "Hi, I am Sara.", note: "Short and friendly — the everyday open." },
              { english: "Hello. My name is Yusuf Khan.", note: "A little more formal — good at work or school." },
            ],
          },
          {
            title: "Step 2 — Give your country",
            text: "Add where you are from. The question will come to you: Where are you from?",
            examples: [
              { english: "I am from Pakistan.", note: "Country alone — no city needed." },
              { english: "I am from Lahore.", note: "A city works too." },
            ],
          },
          {
            title: "Step 3 — Give your job or study",
            text: "The question is What do you do? Answer with I am a + job.",
            examples: [
              { english: "What do you do? — I am a student.", note: "The standard job question and answer." },
              { english: "I am a teacher. And you?", note: "And you? passes the question back." },
            ],
          },
          {
            title: "Step 4 — Close politely",
            text: "End the first meeting with one warm line. Nice to meet you works every time.",
            examples: [
              { english: "Nice to meet you.", note: "The classic first-meeting closer." },
              { english: "Nice to meet you too.", note: "Too returns the same words." },
            ],
          },
        ],
      ),
      GR(
        "The introduction exchange",
        "An introduction is a pattern of pairs: question → answer → And you? Learn the five questions with their answers, and the exchange runs itself.",
        [
          { english: "What is your name? — My name is Sara.", translation: "Name question and answer." },
          { english: "Where are you from? — I am from Pakistan.", translation: "Country question and answer." },
          { english: "What do you do? — I am a student.", translation: "Job question and answer." },
          { english: "How are you? — I am fine, thank you.", translation: "Health question and its short polite answer." },
        ],
        [
          "“What is your job?” is correct — but native speakers almost always say “What do you do?”",
        ],
      ),
      EXD(
        "Introductions across life",
        [
          { english: "Hi, I am Sara. I am from Pakistan.", note: "Open plus country in two short sentences.", domain: "social" },
          { english: "What do you do? — I am a student.", note: "The job question with its standard answer.", domain: "education" },
          { english: "I am Yusuf. I work in a shop.", note: "Work + place also answers the job question.", domain: "work" },
          { english: "I am a teacher. And you?", note: "Two words return the question — the conversation keeper.", domain: "everyday" },
          { english: "This is my friend Omar. He is from Egypt.", note: "You can introduce other people too.", domain: "social" },
          { english: "I live in Lahore with my family.", note: "City plus family — one extra true fact.", domain: "home" },
          { english: "Nice to meet you. — Nice to meet you too.", note: "The first-meeting closer, both sides.", domain: "social" },
          { english: "My name is Hana. I study English every day.", note: "Name plus one study fact.", domain: "education" },
          { english: "I am a doctor at the city hospital.", note: "Job plus place — a strong one-line answer.", domain: "health" },
        ],
        "Nine lines you can say today — each one a real first-meeting move.",
      ),
      US(
        [
          {
            situation: "First day at a new school",
            example: "“Hi, I am Hana. I am a new student.”",
            note: "Classmates expect your name plus one fact.",
          },
          {
            situation: "Meeting your neighbour",
            example: "“Hello! I am Yusuf. I am from flat four.”",
            note: "Neighbours love a friendly open.",
          },
          {
            situation: "At a wedding or a party",
            example: "“Hi! I am Omar. I am Sara's brother.”",
            note: "Name plus one link explains why you are there.",
          },
          {
            situation: "A new job",
            example: "“Good morning. My name is Amina. I am the new teacher.”",
            note: "Full forms sound professional on day one.",
          },
          {
            situation: "An English class online",
            example: "“Hello! My name is Bilal. I am from Multan.”",
            note: "Online classes always start with introductions.",
          },
        ],
        "Where you will introduce yourself",
        "Every new place asks the same five questions.",
      ),
      DL(
        "First day at English class",
        "Sara and Yusuf meet before their first English lesson.",
        [
          ["Sara", "Hi! Are you a new student here?"],
          ["Yusuf", "Yes, I am. My name is Yusuf. What is your name?"],
          ["Sara", "I am Sara. Nice to meet you, Yusuf."],
          ["Yusuf", "Nice to meet you too. Where are you from, Sara?"],
          ["Sara", "I am from Pakistan. And you?"],
          ["Yusuf", "I am from Egypt. I am a doctor — and my English is not so good!"],
          ["Sara", "Your English is fine! I am a student. I want to be a doctor too."],
          ["Yusuf", "Really? Then we have a lot to talk about. See you in class!"],
          ["Sara", "See you later!"],
        ],
      ),
      CMP(
        "What do you do? vs What are you doing?",
        ["What do you do? (the job)", "What are you doing? (right now)"],
        [
          ["What it asks", "Your job or study — every day", "The action at this moment"],
          ["The answer", "“I am a student.” / “I am a nurse.”", "“I am reading a book.”"],
          ["The tense", "Present simple (Chapter 13)", "Present continuous (Chapter 17)"],
          ["Watch out", "It never asks about this minute", "It never asks about your job"],
        ],
        {
          intro: "Two questions that look like cousins. They are not.",
          verdict: "Job for life → What do you do? Action now → What are you doing?",
        },
      ),
      MS(
        [
          [
            "What is your job?",
            "What do you do?",
            "Both questions are correct. But people say “What do you do?” — “What is your job?” sounds like a form, not a conversation.",
          ],
          [
            "I am fine and you?",
            "I am fine, and you?",
            "Put a comma before “and you?” — it is a small extra question inside the sentence.",
          ],
          [
            "Where you from?",
            "Where are you from?",
            "Questions need their be-word: Where are you from? Never drop the are.",
          ],
          [
            "My name Sara.",
            "My name is Sara.",
            "My name needs is: My name is Sara. The pattern is my + name + is + name.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Do not ask three questions in a row",
        "Question, answer, question, answer — that is a conversation. Three questions in a row is an interview. After one answer, give one fact about yourself, or say “And you?”",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Ali. I am from Faisalabad, and I live with my family. I am a student, and I study English every evening. My father is a teacher and my mother is a doctor. I have one sister. Her name is Hana. Nice to meet you!",
          task: "Read the text two times. Then say the five moves in order.",
        },
        writing: {
          task: "Write your own introduction with the five moves: name, country, job or study, family, close.",
          guide: ["Hi, I am ______.", "I am from ______.", "I am a ______.", "I have ______.", "Nice to meet you."],
          model: "Hi, I am Rania. I am from Karachi. I am a student. I have two brothers. Nice to meet you!",
        },
        listening: {
          script: "Hi, I am Maya. I am from Delhi. I am a nurse. I have one daughter. Nice to meet you!",
          task: "Listen one time. Which five moves do you hear?",
        },
        speaking: {
          task: "Say your introduction out loud with all five moves. Then say it to a real person today.",
          frames: ["Hi, I am …", "I am from …", "I am a …", "Nice to meet you."],
          checklist: [
            "I said my name.",
            "I said my country.",
            "I said my job or study.",
            "I closed with Nice to meet you.",
          ],
        },
      }),
      LSP(
        [
          gls("My name is Sara."),
          gls("Nice to meet you."),
          gls("Where are you from? — I am from Pakistan."),
          gls("How are you? — I am fine, thank you."),
          gls("What do you do? — I am a student."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Introductions follow five moves: name, country, job, family, close.",
        "“What do you do?” asks about your job. Answer: “I am a student.”",
        "“And you?” sends the question back and keeps the talk alive.",
        "Close a first meeting with “Nice to meet you.”",
        "“What is your job?” is correct — but “What do you do?” is what people really say.",
      ]),
      RV(
        [
          {
            question: "Which be-word fits? “I ___ from Multan.”",
            options: ["am", "is", "are"],
            correctIndex: 0,
            explanation: "With I, use am — the be-word from your first be lesson.",
            from: "Chapter 12 · Lesson 1",
          },
          {
            question: "Which question asks about a job?",
            options: ["What are you doing?", "What do you do?", "How are you?"],
            correctIndex: 1,
            explanation: "What do you do? is the job question from the WH-questions lesson.",
            from: "Chapter 14 · Lesson 2",
          },
          {
            question: "“___ name is Sara.” Which word fits?",
            options: ["My", "I", "Me"],
            correctIndex: 0,
            explanation: "My comes before the noun it owns — the possessive adjective.",
            from: "Chapter 11 · Lesson 3",
          },
          {
            question: "How do you answer “How are you?”",
            options: ["I am fine, thank you.", "I am from Pakistan.", "I am a student."],
            correctIndex: 0,
            explanation: "How are you? asks about you today — not your country or your job.",
            from: "Chapter 12 · Lesson 2",
          },
        ],
        { title: "Look back — your A1 base", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "A new classmate says: “Hi, I am Omar.” What is the natural reply?",
            [
              ["a", "I am from Pakistan."],
              ["b", "Hi, I am Sara. Nice to meet you."],
              ["c", "My mother is a teacher."],
            ],
            "b",
            fb(
              "Hi, I am Sara. Nice to meet you.",
              "Give your name back, then say Nice to meet you — the standard reply to a first hello.",
              "The other options answer different questions nobody asked yet.",
            ),
            { skill: "speaking", hints: ["Reply with your name and a friendly closer."] },
          ),
          FB(
            "Complete the question.",
            "Where ___ you from?",
            ["are"],
            fb(
              "are",
              "With you, use are: Where are you from? — the standard country question.",
              "Is and am do not fit with you.",
            ),
            { skill: "grammar", hints: ["The be-word that goes with you."] },
          ),
          MCQ(
            "A new classmate asks “What do you do?” You are a nurse. What do you answer?",
            [
              ["a", "I am a nurse."],
              ["b", "I am fine, thank you."],
              ["c", "I am from Egypt."],
            ],
            "a",
            fb(
              "I am a nurse.",
              "Answer the job question with I am a + job.",
              "I am fine answers How are you? I am from Egypt answers Where are you from?",
            ),
            { skill: "speaking", hints: ["Answer with I am a + your job."] },
          ),
          LIS(
            "Listen and answer.",
            "Hello! My name is Amina. I am from Egypt. I am a doctor.",
            "What is Amina's job?",
            ["doctor", "a doctor", "She is a doctor."],
            fb(
              "A doctor",
              "You heard “I am a doctor.” — the job comes after a.",
              "Egypt is her country, not her job.",
            ),
            { skill: "listening", hints: ["Listen for the words after “I am a”."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the introduction.",
            "My name is Sara and I am a student.",
            fb(
              "My name is Sara and I am a student.",
              "Name first, then one fact about you — joined with and.",
              "English puts the name first in an introduction.",
            ),
            { skill: "writing" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I am from Pakistan country.",
            ["I am from Pakistan."],
            fb(
              "I am from Pakistan.",
              "The country name is enough. English does not add the word country after the name.",
              "One name, no extra word — from answers the question alone.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My name is Sara. I am from Pakistan.",
            ["My name is Sara. I am from Pakistan."],
            fb(
              "My name is Sara. I am from Pakistan.",
              "Two short sentences: the name move, then the country move.",
              "A full stop separates the two moves.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Someone says “I am a teacher. And you?” What do they want to know?",
            [
              ["a", "Your job too"],
              ["b", "Your name"],
              ["c", "Your age"],
            ],
            "a",
            fb(
              "Your job too",
              "“And you?” sends the same question back — here, your job.",
              "It is not a new question; it returns the last one.",
            ),
            { skill: "speaking" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My one-minute introduction",
      instructions:
        "Write your full introduction with the five moves: name, country, job or study, family, close. Five to seven sentences. Then say it out loud two times.",
      minWords: 35,
      maxWords: 90,
    },
    homework: [
      "Say your introduction out loud three times today. Time yourself: can you do it in one minute?",
      "Introduce yourself to one real person in English — a classmate, a colleague or online.",
      "Write the five introduction questions on a card. Keep it in your pocket for the next first meeting.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Introducing Your Family
  // =========================================================================
  {
    slug: "ch-18-l-02",
    minutes: 20,
    description:
      "Present your people with real facts: This is my…, ages and jobs with is, and have/has for how many — plus one describing word each.",
    outcomes: [
      "Introduce family members with “This is my …” plus a name",
      "Give age and job with is: “She is fifty-eight years old.”",
      "Say how many people you have with have and has",
      "Add one describing word to make each person real",
    ],
    blocks: [
      LI(
        "You can introduce yourself. Now introduce your people. In this lesson you present family members with real facts: name, age, job and personality. The tools are old friends: This is my…, have and has, and your describing words.",
        [
          "You know the family words: mother, father, sister, brother and more (Chapter 06 · Lesson 1).",
          "You can use have and has for possession: “I have one sister.” (Chapter 12 · Lesson 4).",
          "You know describing words come before nouns: “a kind mother” (Chapter 15 · Lesson 1).",
          "You can choose he and she for people (Chapter 06 · Lesson 1).",
        ],
      ),
      vocGlossary("Family words for your presentation", [
        { word: "mother", partOfSpeech: "noun", definition: "your female parent" },
        { word: "father", partOfSpeech: "noun", definition: "your male parent" },
        { word: "sister", partOfSpeech: "noun", definition: "a girl with the same parents as you" },
        { word: "brother", partOfSpeech: "noun", definition: "a boy with the same parents as you" },
        { word: "grandmother", partOfSpeech: "noun", definition: "the mother of your mother or father" },
        { word: "grandfather", partOfSpeech: "noun", definition: "the father of your mother or father" },
        { word: "family", partOfSpeech: "noun", definition: "the people closest to you" },
        { word: "children", partOfSpeech: "noun", definition: "young people, boys and girls" },
        { word: "son", partOfSpeech: "noun", definition: "a male child in a family" },
        { word: "daughter", partOfSpeech: "noun", definition: "a female child in a family" },
      ]),
      H("One person, three facts"),
      T(
        "A good family introduction gives three facts about each person. First who they are. Then their age or job. Then one describing word. Three facts make a picture. One fact makes only a name.",
      ),
      {
        type: "definition",
        term: "age",
        partOfSpeech: "noun",
        definition:
          "Your age is how old you are. In English, age uses the verb be: She is thirty years old.",
        example: {
          english: "My grandmother is seventy years old.",
          translation: "be + number + years old — never have.",
        },
      },
      TB(
        "The family fact patterns",
        ["Fact", "Pattern", "Example"],
        [
          ["Who", "This is my …", "This is my mother, Elena."],
          ["Age", "She is … years old.", "She is fifty-eight years old."],
          ["Job", "She is a …", "She is a teacher."],
          ["How many", "I have + number + person", "I have two brothers."],
          ["Personality", "She is very …", "She is very kind."],
        ],
        "Three facts per person: who, what, and one describing word.",
      ),
      AU(
        "Listen: family words and describing words",
        "mother. father. sister. brother. grandmother. grandfather. family. kind. old. young. tall. busy.",
        0.85,
      ),
      AU(
        "Listen: a family introduction",
        "This is my mother. She is fifty-eight and she is a teacher. She is very kind. — She sounds wonderful! And your brother? — He is twenty-four. He is very busy, but he is happy.",
        0.9,
      ),
      ST(
        "Introduce one family member in three steps",
        [
          {
            title: "Step 1 — Name the person",
            text: "Start with This is my + family word. Add the name after a comma.",
            examples: [
              { english: "This is my mother, Elena.", note: "Family word first, name second." },
              { english: "This is my brother, Marco.", note: "The same pattern for every person." },
            ],
          },
          {
            title: "Step 2 — Add facts with is",
            text: "Give the age and the job. Age and job both use is, never have.",
            examples: [
              { english: "She is fifty-eight years old.", note: "Age: be + number + years old." },
              { english: "He is a student.", note: "Job: is + a + job." },
            ],
          },
          {
            title: "Step 3 — Add one describing word",
            text: "Finish the picture with one adjective. Very makes it stronger.",
            examples: [
              { english: "She is very kind.", note: "Kind describes personality." },
              { english: "My grandmother is old but happy.", note: "But joins two true facts." },
            ],
          },
        ],
      ),
      GR(
        "Have and has show possession",
        "Use have with I, you, we and they. Use has with he, she and it. Say how many people you have, then describe them.",
        [
          { english: "I have one sister and two brothers.", translation: "I takes have." },
          { english: "She has two children.", translation: "She takes has." },
          { english: "My father has a shop in the city.", translation: "My father = he, so has." },
        ],
        ["Age does not use have. Say “She is thirty years old.” — never “She has thirty years.”"],
      ),
      EXD(
        "Family facts in real life",
        [
          { english: "This is my mother. She is fifty and she is a teacher.", note: "Who + age + job — the full picture.", domain: "family" },
          { english: "I have one brother and two sisters.", note: "Have + numbers says how many.", domain: "family" },
          { english: "My grandfather is old but strong.", note: "But joins two sides of one person.", domain: "health" },
          { english: "My sister is a student. She is very busy.", note: "Job plus one describing word.", domain: "education" },
          { english: "My grandmother lives with us. She is kind.", note: "One home fact plus one personality word.", domain: "home" },
          { english: "My uncle has a shop in the city.", note: "Has because my uncle = he.", domain: "work" },
          { english: "My cousin plays football with me.", note: "Family plus an action — a real memory.", domain: "sport" },
          { english: "My aunt makes delicious rice.", note: "Family words meet food words.", domain: "food" },
          { english: "My father is tall. My mother is short.", note: "Two facts, one line each.", domain: "everyday" },
        ],
        "Nine family sentences — three facts make each person real.",
      ),
      US(
        [
          {
            situation: "Showing a photo on your phone",
            example: "“This is my sister. She is a nurse.”",
            note: "Photo plus two facts — a complete introduction.",
          },
          {
            situation: "Meeting a friend's family",
            example: "“Good evening! I am Sara. This is my mother.”",
            note: "Introduce yourself first, then your people.",
          },
          {
            situation: "A video call with family",
            example: "“Look! The children are growing fast.”",
            note: "Family news in three words.",
          },
          {
            situation: "A form at the school",
            example: "“Mother: teacher. Father: driver. Children: two.”",
            note: "Forms want facts only — job words and numbers.",
          },
          {
            situation: "Talking about your grandmother",
            example: "“My grandmother lives with us. She is eighty and very kind.”",
            note: "Age plus one describing word makes a warm picture.",
          },
        ],
        "Family talk in daily life",
        "Every photo, call and form is a chance to present your people.",
      ),
      DL(
        "The photo on the phone",
        "Omar shows Sara a photo of his family.",
        [
          ["Sara", "Is this your family, Omar?"],
          ["Omar", "Yes! This is my mother, Nadia. She is a teacher."],
          ["Sara", "She looks kind. And this man?"],
          ["Omar", "That is my father. He has a small shop in the city."],
          ["Sara", "Nice! Do you have brothers or sisters?"],
          ["Omar", "I have one sister, Layla. She is nineteen and very busy — she studies all day."],
          ["Sara", "And who is this little one?"],
          ["Omar", "My cousin! He is two years old."],
          ["Sara", "A beautiful family, Omar."],
          ["Omar", "Thank you! Now show me your photo."],
        ],
      ),
      CMP(
        "Age with be vs age with have",
        ["She is thirty years old.", "She has thirty years."],
        [
          ["The verb", "be — is, am, are", "have — the wrong verb for age"],
          ["Why", "English says age like a quality: she IS thirty", "Many languages use “have” — English does not"],
          ["The full pattern", "be + number + years old", "have + number + years"],
          ["More examples", "“I am sixteen.” “He is seventy.”", "“I have sixteen years.” — impossible in English"],
        ],
        {
          intro: "The number-one age mistake in the world.",
          verdict: "Age uses be: She is thirty years old. Never has.",
        },
      ),
      MS(
        [
          [
            "My mother she is a teacher.",
            "My mother is a teacher.",
            "Do not say the person twice. My mother is the subject — she is not needed. And jobs take a: a teacher.",
          ],
          [
            "She has fifty-eight years.",
            "She is fifty-eight years old.",
            "Age uses be, not have: She is fifty-eight years old.",
          ],
          [
            "I have one sister and two brother.",
            "I have one sister and two brothers.",
            "After two, the noun takes -s: two brothers.",
          ],
          [
            "My father is teacher.",
            "My father is a teacher.",
            "Jobs need a or an before them: a teacher, an engineer.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "he and she: check the person, then choose",
        "In Urdu and Hindi, one word can mean he and she. English needs the right one. Think man or woman first, then say he or she. Your family story depends on it.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "This is my family. My mother is a nurse and my father is a teacher. I have one brother and one sister. My brother is twenty and he is very tall. My sister is twelve and she is very noisy! My grandmother lives with us. She is seventy years old and she is kind to everyone. I love my family.",
          task: "Read the text two times. Then say three facts about the grandmother.",
        },
        writing: {
          task: "Introduce three people from your family. Give each one a name, one fact with is, and one describing word.",
          guide: ["This is my ______.", "She / He is ______.", "She / He is very ______."],
          model: "This is my aunt, Rosa. She is a doctor. She is very kind.",
        },
        listening: {
          script: "This is my brother, Sami. He is twenty-four years old and he is a student. He is very busy, but he is happy.",
          task: "Listen one time. How old is Sami?",
        },
        speaking: {
          task: "Show a family photo, or think of one. Introduce three people out loud.",
          frames: ["This is my …", "He / She is … years old.", "He / She is very …"],
          checklist: [
            "I introduced three people.",
            "I used is for age and job.",
            "I added one describing word for each person.",
          ],
        },
      }),
      LSP(
        [
          gls("This is my mother."),
          gls("I have one sister and two brothers."),
          gls("Have and has show possession."),
          gls("family"),
          gls("kind"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Present a person in three parts: This is my…, facts with is, one describing word.",
        "Age uses be: “She is thirty years old.” Never have.",
        "have goes with I, you, we, they. has goes with he, she, it.",
        "Do not repeat the subject: “My mother is a teacher.” Not “My mother she is a teacher.”",
        "Describing words make the picture: kind, busy, old, young, tall.",
      ]),
      RV(
        [
          {
            question: "Which word means your father's father?",
            options: ["grandfather", "uncle", "cousin"],
            correctIndex: 0,
            explanation: "Grandfather is your parent's father — the first family lesson.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "“She ___ two children.” Which word fits?",
            options: ["have", "has", "is"],
            correctIndex: 1,
            explanation: "She takes has — the possession lesson of be, have and do.",
            from: "Chapter 12 · Lesson 4",
          },
          {
            question: "Where does the describing word go?",
            options: ["a kind mother", "a mother kind", "a mother of kind"],
            correctIndex: 0,
            explanation: "Adjectives come before the noun — the first describing lesson.",
            from: "Chapter 15 · Lesson 1",
          },
          {
            question: "Your sister is sixteen. Which sentence is correct?",
            options: ["She has sixteen years.", "She is sixteen years old.", "She is sixteen years."],
            correctIndex: 1,
            explanation: "Age is be + number + years old.",
            from: "Chapter 12 · Lesson 1",
          },
        ],
        { title: "Look back — people and possession", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Your friend shows you a photo. Which sentence starts the introduction?",
            [
              ["a", "This is my mother."],
              ["b", "This my mother."],
              ["c", "My mother this is."],
            ],
            "a",
            fb(
              "This is my mother.",
              "This is my + family word — the standard way to present a person.",
              "The pattern needs its is, and it starts with This.",
            ),
            { skill: "speaking", hints: ["Start with This is my + the family word."] },
          ),
          FB(
            "Complete the sentence.",
            "My sister ___ two children.",
            ["has"],
            fb(
              "has",
              "My sister means she — and she takes has.",
              "Have is for I, you, we and they.",
            ),
            { skill: "grammar", hints: ["One sister means she — which form of the verb to have?"] },
          ),
          MATCH(
            "Match each family word to the person it names.",
            [
              ["grandmother", "grandmother"],
              ["uncle", "uncle"],
              ["cousin", "cousin"],
              ["daughter", "daughter"],
            ],
            [
              ["p1", "your mother's mother"],
              ["p2", "your father's or mother's brother"],
              ["p3", "your aunt's or uncle's child"],
              ["p4", "a female child in a family"],
            ],
            [
              ["grandmother", "p1"],
              ["uncle", "p2"],
              ["cousin", "p3"],
              ["daughter", "p4"],
            ],
            fb(
              "grandmother → your mother's mother, uncle → your father's or mother's brother, cousin → your aunt's or uncle's child, daughter → a female child in a family",
              "Each family word names one place in the family tree.",
            ),
            { skill: "vocabulary", hints: ["Think about the family tree: who is whose child or parent?"] },
          ),
          LIS(
            "Listen and answer.",
            "This is my brother, Ali. He is twenty-one and he is a student.",
            "Who is Ali?",
            ["brother", "my brother", "the brother"],
            fb(
              "The brother",
              "You heard “This is my brother, Ali.” — the introduction pattern.",
              "Ali is also a student, but he is the brother first.",
            ),
            { skill: "listening", hints: ["Listen for the family word after This is my."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the sentence.",
            "My mother is a teacher.",
            fb(
              "My mother is a teacher.",
              "The order is: person + is + a + job.",
              "English puts the person first, then the fact.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "My mother she is teacher.",
            ["My mother is a teacher."],
            fb(
              "My mother is a teacher.",
              "Say the person once, and give the job its a.",
              "My mother is already the subject — she repeats it.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I have one sister and two brothers.",
            ["I have one sister and two brothers."],
            fb(
              "I have one sister and two brothers.",
              "I takes have, and two brothers takes -s.",
              "One sister is singular; two brothers is plural.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Your grandfather is seventy. Which sentence is correct?",
            [
              ["a", "He has seventy years."],
              ["b", "He is seventy years old."],
              ["c", "He is seventy years."],
            ],
            "b",
            fb(
              "He is seventy years old.",
              "Age is be + number + years old — the full pattern.",
              "Age never uses have, and years old needs its old.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My family, in English",
      instructions:
        "Write about three people in your family. For each person: This is my…, one fact with is, and one describing word. Six to eight sentences.",
      minWords: 25,
      maxWords: 80,
    },
    homework: [
      "Describe your family out loud two times today — three people, three facts each.",
      "Show a family photo to a friend and introduce two people in English.",
      "Write the age of every person in your family the English way: She is … years old.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Talking About Routines
  // =========================================================================
  {
    slug: "ch-18-l-03",
    minutes: 20,
    description:
      "Narrate your day in the present simple: time + action links, frequency words, and one weekend contrast that turns a list into a story.",
    outcomes: [
      "Narrate your weekday with time + action links",
      "Add how often with always, usually, often, sometimes and never",
      "Contrast weekdays with the weekend using but",
      "Ask about another person's routine naturally",
    ],
    blocks: [
      LI(
        "Your day is a story, and English tells it with one tense: the present simple. In this lesson you narrate your weekday from morning to night. You add times, days and how often. Then you contrast the weekday with the weekend.",
        [
          "You can make present simple sentences: “I get up. She gets up.” (Chapter 13 · Lesson 2).",
          "You know the frequency words: always, usually, often, sometimes, never (Chapter 13 · Lesson 5).",
          "You can say clock times with at: “at six o'clock” (Chapter 16 · Lesson 2).",
          "You know the day words and the weekend (Chapter 13 · Lesson 6).",
        ],
      ),
      vocGlossary("The words of a routine", [
        { word: "routine", partOfSpeech: "noun", definition: "the things you do every day, in order" },
        { word: "habit", partOfSpeech: "noun", definition: "something you do again and again" },
        { word: "every day", partOfSpeech: "phrase", definition: "all seven days of the week" },
        { word: "morning", partOfSpeech: "noun", definition: "the first part of the day" },
        { word: "afternoon", partOfSpeech: "noun", definition: "the middle part of the day" },
        { word: "evening", partOfSpeech: "noun", definition: "the end of the day, before night" },
        { word: "night", partOfSpeech: "noun", definition: "the dark hours when you sleep" },
        { word: "weekend", partOfSpeech: "noun", definition: "Saturday and Sunday" },
        { word: "to get up", partOfSpeech: "verb", definition: "to leave your bed in the morning" },
        { word: "to study", partOfSpeech: "verb", definition: "to learn from books and lessons" },
        { word: "breakfast", partOfSpeech: "noun", definition: "the first meal of the day" },
        { word: "dinner", partOfSpeech: "noun", definition: "the evening meal" },
      ]),
      H("A day is a chain of times"),
      T(
        "Listen to any routine: I get up at six. I eat breakfast at seven. I go to school at eight. The chain is time + action, time + action. Break your day into five or six links, and the story tells itself.",
      ),
      TB(
        "Time markers for routines",
        ["Marker", "Use it for", "Example"],
        [
          ["at + clock time", "one point in the day", "I get up at six o'clock."],
          ["in the morning / afternoon / evening", "a part of the day", "I study in the evening."],
          ["on weekdays", "Monday to Friday", "On weekdays, I start at nine."],
          ["at the weekend", "Saturday and Sunday", "At the weekend, I sleep late."],
          ["every day", "all seven days", "I drink milk every day."],
        ],
        "Five markers. Six links. One day.",
      ),
      AU(
        "Listen: routine words",
        "routine. habit. every day. morning. afternoon. evening. night. weekend. always. usually. often. sometimes. never.",
        0.85,
      ),
      AU(
        "Listen: a routine conversation",
        "What time do you get up? — I get up at six thirty. — Do you always walk to work? — Yes, I always walk. What about you? — I usually take the bus.",
        0.9,
      ),
      ST(
        "Tell your routine in three steps",
        [
          {
            title: "Step 1 — Start with time + action",
            text: "Begin each link with the action, then add the time.",
            examples: [
              { english: "I get up at six o'clock.", note: "Action + at + time." },
              { english: "Work starts at nine.", note: "Third person -s: starts." },
            ],
          },
          {
            title: "Step 2 — Say how often",
            text: "Put always, usually, often, sometimes or never before the action word.",
            examples: [
              { english: "I always eat breakfast.", note: "always comes before eat." },
              { english: "She never drinks coffee.", note: "never comes before drinks." },
            ],
          },
          {
            title: "Step 3 — Contrast the weekend",
            text: "Add one but sentence. On weekdays… but at the weekend… makes the story twice as interesting.",
            examples: [
              { english: "On weekdays, I am busy. But at the weekend, I relax.", note: "But changes the picture." },
              { english: "I never get up late. But on Sunday, I sleep until nine!", note: "A small surprise makes a good story." },
            ],
          },
        ],
      ),
      GR(
        "Routines use the present simple",
        "Habits and routines take the present simple. With he, she and it, the action word takes -s. Put frequency words before the action.",
        [
          { english: "I get up at six every day.", translation: "I takes the plain form." },
          { english: "She gets up at five.", translation: "She takes gets." },
          { english: "We always eat dinner together.", translation: "always sits before eat." },
        ],
        [
          "Actions happening right now are different: “I am eating.” You met that tense in Chapter 17.",
        ],
      ),
      EXD(
        "Routines across the week",
        [
          { english: "I get up at six o'clock every day.", note: "Action + at + time + every day.", domain: "everyday" },
          { english: "She starts work at nine.", note: "Third person -s with a routine.", domain: "work" },
          { english: "We always eat breakfast together.", note: "always before the action word.", domain: "food" },
          { english: "I usually study in the evening.", note: "Part of the day with in.", domain: "education" },
          { english: "My brother never drinks tea.", note: "never makes a strong habit fact.", domain: "food" },
          { english: "On weekdays, I take the bus.", note: "on weekdays starts the line.", domain: "travel" },
          { english: "At the weekend, I play cricket with my friends.", note: "The weekend contrast line.", domain: "sport" },
          { english: "My grandmother walks in the park every morning.", note: "A routine that keeps her well.", domain: "health" },
          { english: "I go to bed at ten and sleep well.", note: "The last link of the day chain.", domain: "home" },
        ],
        "Nine links — together they are one whole day.",
      ),
      US(
        [
          {
            situation: "A new friend asks about your day",
            example: "“What time do you get up?” “At six. And you?”",
            note: "Time questions open routine talk.",
          },
          {
            situation: "At the doctor",
            example: "“I sleep six hours every night.”",
            note: "Doctors ask about habits — answer with frequency words.",
          },
          {
            situation: "A first day at work",
            example: "“Work starts at nine. We have lunch at one.”",
            note: "New jobs come with new routines — listen for the times.",
          },
          {
            situation: "A call with your grandmother",
            example: "“I always eat breakfast before school, Dadi.”",
            note: "Family calls love routine news.",
          },
          {
            situation: "Meeting a study partner",
            example: "“I study in the evening. When do you study?”",
            note: "Compare routines to find shared time.",
          },
        ],
        "Routines in daily life",
        "Everyone's day is a story — ask for it, then tell yours.",
      ),
      DL(
        "Two very different days",
        "Amina is a nurse. Bilal is a student. They compare routines.",
        [
          ["Bilal", "Amina, your day starts so early!"],
          ["Amina", "Yes! On weekdays, I get up at five thirty. The hospital is far."],
          ["Bilal", "Five thirty! I get up at eight. My classes start at nine."],
          ["Amina", "And when do you study?"],
          ["Bilal", "I usually study in the evening, from seven to nine."],
          ["Amina", "I never study at night. After work, I am too tired!"],
          ["Bilal", "What about the weekend? Do you still get up at five thirty?"],
          ["Amina", "Never! At the weekend, I sleep until nine. Then I cook a big breakfast."],
          ["Bilal", "Now that is my kind of morning!"],
        ],
      ),
      CMP(
        "Present simple vs present continuous",
        ["I get up at six. (routine)", "I am getting up. (now)"],
        [
          ["What it is", "A habit — every day, again and again", "One action — happening this minute"],
          ["Time words", "always, every day, on weekdays, at the weekend", "now, right now, at the moment"],
          ["The form", "get / gets — no be-word", "am / is / are + verb-ing"],
          ["Example", "“She starts work at nine.”", "“She is starting work now.”"],
        ],
        {
          intro: "The big A1 choice, one more time.",
          verdict: "Every day → present simple. Right now → present continuous.",
        },
      ),
      MS(
        [
          [
            "She get up at six o'clock.",
            "She gets up at six o'clock.",
            "With she, the action word takes -s: gets. The -s rule from Chapter 13.",
          ],
          [
            "I go to work in seven o'clock.",
            "I go to work at seven o'clock.",
            "Clock times take at: at seven, at six thirty. In is for parts of the day — in the morning.",
          ],
          [
            "Every day I am going to school.",
            "Every day I go to school.",
            "Every day signals a habit — habits take the present simple, not the -ing form.",
          ],
          [
            "I always am tired at night.",
            "I am always tired at night.",
            "With be, the frequency word comes after it: I am always… With other actions, it comes before: I always eat.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "One contrast makes the story",
        "A list of times is a timetable. Add one “But at the weekend…” sentence, and it becomes a story. Listeners remember the surprise.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My sister Amina is a nurse. On weekdays, she gets up at five thirty. She starts work at seven. She never eats breakfast at home. She has lunch at the hospital at one o'clock. In the evening, she is tired, but she is happy. At the weekend, everything changes. She sleeps until nine and cooks a big breakfast.",
          task: "Read the text two times. Then say three facts about her weekday.",
        },
        writing: {
          task: "Write your weekday routine in four sentences, then your weekend in two. Use four different time markers and one contrast with but.",
          guide: [
            "I get up at ______.",
            "I always ______ in the morning.",
            "On weekdays, I ______.",
            "But at the weekend, I ______.",
          ],
          model:
            "I get up at seven. I always walk to school. On weekdays, I study in the evening. But at the weekend, I play football with my friends.",
        },
        listening: {
          script: "On weekdays, I get up at six. I always walk to school. I study in the afternoon. At the weekend, I never get up early.",
          task: "Listen one time. Does the speaker walk or take the bus?",
        },
        speaking: {
          task: "Say your routine out loud: three weekday sentences and one weekend contrast.",
          frames: ["I get up at …", "I always / usually / never …", "But at the weekend, I …"],
          checklist: [
            "I used three time markers.",
            "I used one frequency word.",
            "I added a weekend contrast.",
          ],
        },
      }),
      LSP(
        [
          gls("The present simple describes habits and routines."),
          gls("Third person singular adds -s in the present simple."),
          gls("Frequency adverbs tell us how often."),
          gls("routine"),
          gls("every day"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Routines use the present simple. He, she and it take -s.",
        "Clock times take at: at six o'clock. Parts of the day take in: in the evening.",
        "Frequency words come before the action: I always eat. After be: I am always tired.",
        "On weekdays… but at the weekend… turns a list into a story.",
        "Right-now actions use am/is/are + -ing (Chapter 17).",
      ]),
      RV(
        [
          {
            question: "“My mother ___ up at six.” Which word fits?",
            options: ["get", "gets", "getting"],
            correctIndex: 1,
            explanation: "My mother means she — and she takes the -s form.",
            from: "Chapter 13 · Lesson 2",
          },
          {
            question: "Which word tells you HOW OFTEN?",
            options: ["always", "morning", "six o'clock"],
            correctIndex: 0,
            explanation: "Always is a frequency word — it says how often.",
            from: "Chapter 13 · Lesson 5",
          },
          {
            question: "“I start work ___ seven o'clock.” Which little word fits?",
            options: ["in", "at", "on"],
            correctIndex: 1,
            explanation: "Clock times take at — at seven o'clock.",
            from: "Chapter 16 · Lesson 2",
          },
          {
            question: "Which sentence is happening RIGHT NOW?",
            options: ["I am cooking dinner.", "I cook dinner every day."],
            correctIndex: 0,
            explanation: "am + -ing means now; every day means habit.",
            from: "Chapter 17 · Lesson 5",
          },
        ],
        { title: "Look back — tense and time", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          FB(
            "Complete the sentence.",
            "She ___ up at six in the morning.",
            ["gets"],
            fb(
              "gets",
              "She takes the -s form: gets. The plain form is only for I, you, we and they.",
              "Get without -s breaks the third-person rule.",
            ),
            { skill: "grammar", hints: ["She takes the same ending as reads and eats."] },
          ),
          MCQ(
            "Which sentence is a routine — every day?",
            [
              ["a", "I am eating breakfast now."],
              ["b", "I eat breakfast at seven every day."],
              ["c", "She is eating breakfast now."],
            ],
            "b",
            fb(
              "I eat breakfast at seven every day.",
              "Every day is a habit signal — habits take the present simple.",
              "The -ing sentences describe this minute only.",
            ),
            { skill: "grammar", hints: ["Look for the habit signal word."] },
          ),
          RD(
            "Read and answer.",
            "Amina's weekday",
            "My sister Amina is a nurse. On weekdays, she gets up at five thirty. She starts work at seven. She never eats breakfast at home. She has lunch at the hospital at one o'clock. In the evening, she is tired, but she is happy.",
            "What time does Amina start work?",
            [
              ["a", "At five thirty."],
              ["b", "At seven."],
              ["c", "At one."],
            ],
            "b",
            fb(
              "At seven.",
              "The text says: She starts work at seven.",
              "Five thirty is when she gets up; one o'clock is lunch time.",
            ),
            { skill: "reading", hints: ["Find the sentence with “starts work”."] },
          ),
          LIS(
            "Listen and answer.",
            "On weekdays, I get up at six. I always walk to school. I study in the afternoon. At the weekend, I never get up early.",
            "How does the speaker go to school?",
            ["walk", "on foot", "I walk."],
            fb(
              "Walk",
              "You heard “I always walk to school.” — the action word tells you how.",
              "The bus is not in this routine.",
            ),
            { skill: "listening", hints: ["Listen for the action word after always."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the sentence.",
            "I get up at six every day.",
            fb(
              "I get up at six every day.",
              "The order is: person + action + at + time + every day.",
              "The time comes after the action, and every day comes last.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "She get up at six in the morning.",
            ["She gets up at six in the morning."],
            fb(
              "She gets up at six in the morning.",
              "With she, the action word takes -s: gets up.",
              "Get without -s is for I, you, we and they.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "I usually study in the evening.",
            ["I usually study in the evening."],
            fb(
              "I usually study in the evening.",
              "usually comes before study, and in goes with the evening.",
              "Frequency words sit before the action word.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Where does always go?",
            [
              ["a", "I always drink tea."],
              ["b", "I drink always tea."],
              ["c", "Always I drink tea."],
            ],
            "a",
            fb(
              "I always drink tea.",
              "Frequency words go before the action word — after the person.",
              "Between the action and its object, or at the start, the word sounds wrong.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My weekday, my weekend",
      instructions:
        "Describe your weekday routine in four sentences and your weekend in two. Use four different time markers, one frequency word, and one contrast with but.",
      minWords: 30,
      maxWords: 90,
    },
    homework: [
      "Say your routine out loud twice today — morning links first, then the weekend contrast.",
      "Ask one person about their weekend routine in English. Report one surprising fact tomorrow.",
      "Write your six routine links on paper. Check every he/she verb for its -s.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Asking for Information
  // =========================================================================
  {
    slug: "ch-18-l-04",
    minutes: 25,
    description:
      "Real requests in shops, streets and cafés: open with Excuse me, ask for prices, times and places, order politely, and close with thank you.",
    outcomes: [
      "Open a question to a stranger with “Excuse me…”",
      "Ask prices with “How much is/are…?” and times with “What time do…?”",
      "Order politely with “Can I have…, please?”",
      "Ask for a repeat politely and close with thank you",
    ],
    blocks: [
      LI(
        "You are in a new city. You need bread, a bus and a bank. This lesson gives you the real questions: prices, times and places. You will open politely, ask clearly, and close with a thank you.",
        [
          "You can make questions with do and does (Chapter 14 · Lesson 1).",
          "You know the question words what, where, when and how (Chapter 14 · Lesson 2).",
          "You can say where things are: next to, between, near (Chapter 16 · Lesson 1).",
          "You know the city places: the shop, the bank, the café, the station (Chapter 16 · Lesson 1).",
        ],
      ),
      vocGlossary("The polite traveller's toolkit", [
        { word: "please", partOfSpeech: "phrase", definition: "makes a request polite — at the end" },
        { word: "excuse me", partOfSpeech: "phrase", definition: "opens a question to a stranger" },
        { word: "thank you", partOfSpeech: "phrase", definition: "closes an exchange politely" },
        { word: "sorry", partOfSpeech: "phrase", definition: "polite word before asking again" },
        { word: "how much", partOfSpeech: "phrase", definition: "asks a price" },
        { word: "what time", partOfSpeech: "phrase", definition: "asks about clocks and hours" },
        { word: "open", partOfSpeech: "adjective", definition: "a place that is ready for you to enter" },
        { word: "shop", partOfSpeech: "noun", definition: "a place that sells things" },
        { word: "café", partOfSpeech: "noun", definition: "a small place for coffee and tea" },
        { word: "station", partOfSpeech: "noun", definition: "where trains and buses stop" },
        { word: "bank", partOfSpeech: "noun", definition: "the place for money" },
        { word: "map", partOfSpeech: "noun", definition: "a picture of streets and places" },
      ]),
      H("Polite opens the door"),
      T(
        "In English, politeness is grammar. Can I have…, please? gets you the coffee. Give me the coffee gets you a cold face. Learn the polite forms once — they work in every shop on earth.",
      ),
      TB(
        "Five everyday requests",
        ["Situation", "You say", "They answer"],
        [
          ["Price", "How much is this?", "It is two pounds."],
          ["Directions", "Excuse me, where is the station?", "Go along this street."],
          ["Opening hours", "What time do you open?", "We open at eight."],
          ["In a café", "Can I have a tea, please?", "Anything else?"],
          ["Help again", "Sorry, can you say that again, please?", "Of course. …"],
        ],
        "The question carries the situation. Please carries the smile.",
      ),
      AU(
        "Listen: polite request words",
        "please. excuse me. thank you. sorry. How much is this? What time do you open? Where is the station?",
        0.85,
      ),
      AU(
        "Listen: a full shop exchange",
        "Excuse me, how much is this bread? — It is one pound fifty. — Can I have two, please? — Of course. Anything else? — No, thank you. How much is it? — Three pounds. — Here you are. Thank you! — Thank you. Have a good day!",
        0.9,
      ),
      ST(
        "Ask for information in three steps",
        [
          {
            title: "Step 1 — Open politely",
            text: "With strangers, open with Excuse me. It says: I need one small thing, and I respect your time.",
            examples: [
              { english: "Excuse me, where is the bank?", note: "Excuse me + question — the classic open." },
              { english: "Excuse me, what time is it?", note: "Works for any quick question." },
            ],
          },
          {
            title: "Step 2 — Ask the real question",
            text: "Three patterns cover almost everything: How much…, What time…, Where…",
            examples: [
              { english: "How much are these eggs?", note: "How much + is or are + thing." },
              { english: "What time do you close?", note: "Other verbs need do to ask." },
              { english: "Is there a café near here?", note: "There is asks what exists." },
            ],
          },
          {
            title: "Step 3 — Thank and close",
            text: "Close every exchange with thank you. If you did not understand, ask again politely — once.",
            examples: [
              { english: "Thank you very much.", note: "The universal closer." },
              { english: "Sorry, can you say that again, please?", note: "The polite repeat — use it, do not guess." },
            ],
          },
        ],
      ),
      GR(
        "Polite questions",
        "Make requests with Can I have…, please? Ask prices with How much is/are…? Ask times with What time do…? The word please comes at the end of a request, never at the start.",
        [
          { english: "Can I have a coffee, please?", translation: "please ends the request." },
          { english: "How much is this map?", translation: "is for one thing." },
          { english: "How much are the eggs?", translation: "are for more than one." },
          { english: "What time do you open?", translation: "do helps open make a question." },
        ],
        [
          "Do not start a question with please. Say “Excuse me, where is the station?” — not “Please, where is the station?”",
        ],
      ),
      EXD(
        "Real questions in real places",
        [
          { english: "Excuse me, where is the station?", note: "The directions open — Excuse me + where.", domain: "travel" },
          { english: "How much is this bread, please?", note: "Price question with a soft please.", domain: "shopping" },
          { english: "What time do you open?", note: "do + open — the hours question.", domain: "shopping" },
          { english: "Can I have a tea, please?", note: "The universal polite order.", domain: "food" },
          { english: "Sorry, can you say that again, please?", note: "The polite repeat — better than guessing.", domain: "everyday" },
          { english: "Is there a bank near here?", note: "There is asks what exists.", domain: "everyday" },
          { english: "Thank you very much. — You are welcome.", note: "Thanks and reply — a closed exchange.", domain: "social" },
          { english: "How much are the eggs?", note: "are because eggs is plural.", domain: "shopping" },
          { english: "Excuse me, is this seat free?", note: "A bus-stop question — small and polite.", domain: "travel" },
        ],
        "Nine questions that work in any city on earth.",
      ),
      US(
        [
          {
            situation: "Buying bread at the corner shop",
            example: "“How much is this bread?” “One pound.” “Can I have two, please?”",
            note: "Price, then order, then thanks — the three-step shop exchange.",
          },
          {
            situation: "Lost near the station",
            example: "“Excuse me, where is the station?” “Go along this street and turn left.”",
            note: "Directions start with Excuse me.",
          },
          {
            situation: "At the café counter",
            example: "“Can I have a tea and a cheese sandwich, please?”",
            note: "Can I have + please = the universal order.",
          },
          {
            situation: "At the bus stop",
            example: "“Excuse me, what time is the next bus?” “At ten past nine.”",
            note: "Bus stops are for small polite questions.",
          },
          {
            situation: "You did not hear the price",
            example: "“Sorry, can you say that again, please?”",
            note: "Better one polite repeat than three wrong guesses.",
          },
        ],
        "Requests in daily life",
        "Shop, street, café, bus stop — the same three steps everywhere.",
      ),
      DL(
        "In the corner shop",
        "A customer buys breakfast at a small shop.",
        [
          ["Customer", "Good morning! How much is this bread?"],
          ["Shopkeeper", "One pound fifty."],
          ["Customer", "And the eggs?"],
          ["Shopkeeper", "Two pounds for six."],
          ["Customer", "OK. Can I have the bread and six eggs, please?"],
          ["Shopkeeper", "Of course. Anything else?"],
          ["Customer", "No, thank you. How much is that?"],
          ["Shopkeeper", "Three pounds fifty."],
          ["Customer", "Here you are. Thank you!"],
          ["Shopkeeper", "Thank you! Have a good day."],
        ],
      ),
      CMP(
        "Can I have…, please? vs Give me…",
        ["Can I have a coffee, please?", "Give me a coffee."],
        [
          ["What it is", "A polite request — a question", "An order — a command"],
          ["How it sounds", "Friendly and normal", "Rude to a stranger"],
          ["Grammar", "Can I have + thing + please", "Imperative — no subject, no please"],
          ["When it works", "Cafés, shops, restaurants — everywhere", "Only with close family: “Give me the salt, please!”"],
        ],
        {
          intro: "Same coffee, two very different conversations.",
          verdict: "Grammar is not the same as politeness. Questions with can and please get service.",
        },
      ),
      MS(
        [
          [
            "Give me a coffee.",
            "Can I have a coffee, please?",
            "Give me is an order. In shops and cafés, ask with Can I have…, please?",
          ],
          [
            "How much this?",
            "How much is this?",
            "Questions need their verb: How much is this? For more things: How much are these?",
          ],
          [
            "What time you open?",
            "What time do you open?",
            "Other verbs need do to make questions: What time do you open?",
          ],
          [
            "Please, where is the station?",
            "Excuse me, where is the station?",
            "Please does not open a question in English. Excuse me does. Please comes at the end of a request.",
          ],
        ],
        "Common beginner mistakes",
      ),
      W(
        "Do not guess numbers",
        "Prices and times are numbers. If you are not sure, say: “Sorry, can you say that again, please?” One polite repeat is normal. Guessing with money is expensive.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "The corner shop is small but friendly. It opens at eight in the morning and closes at ten at night. The bread is fresh every day. A bottle of milk is one pound. Six eggs are two pounds. The shopkeeper always says: “Good morning!” The neighbours love this shop.",
          task: "Read the text two times. Then answer: how much are six eggs?",
        },
        writing: {
          task: "Write one mini-dialogue in a shop. Four lines: greeting, price question, order, thank you.",
          guide: [
            "A: Good morning! How much is the ______?",
            "B: It is ______.",
            "A: Can I have ______, please?",
            "A: Thank you!",
          ],
          model:
            "A: Good morning! How much is this bread? B: One pound. A: Can I have one, please? B: Of course. A: Thank you!",
        },
        listening: {
          script: "Excuse me, what time do you close? — We close at nine. — And what time do you open? — We open at eight in the morning. — Thank you very much!",
          task: "Listen one time. What time does the shop open?",
        },
        speaking: {
          task: "Role-play a shop visit out loud. Play both parts: ask a price, order, and close politely.",
          frames: ["Excuse me, how much is …?", "Can I have …, please?", "Thank you very much."],
          checklist: [
            "I opened with Excuse me.",
            "I asked a clear question.",
            "I closed with thank you.",
          ],
        },
      }),
      LSP(
        [
          gls("Please makes a request polite."),
          gls("excuse me"),
          gls("how much"),
          gls("what time"),
          gls("thank you"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Open with Excuse me. Close with thank you.",
        "Can I have…, please? is the polite order. Give me… is not.",
        "How much is this? / How much are these? asks prices.",
        "What time do you open? needs do — action verbs cannot ask alone.",
        "Sorry, can you say that again, please? — the polite repeat.",
      ]),
      RV(
        [
          {
            question: "“___ you open on Sunday?” Which helper fits?",
            options: ["Do", "Are", "Is"],
            correctIndex: 0,
            explanation: "Open is an action verb, so its question needs do.",
            from: "Chapter 14 · Lesson 1",
          },
          {
            question: "The shop is ___ the bank and the café.",
            options: ["between", "under", "on"],
            correctIndex: 0,
            explanation: "Between names two things, one on each side.",
            from: "Chapter 16 · Lesson 1",
          },
          {
            question: "“___ there a café near here?” — asking what exists.",
            options: ["Is", "Are", "Do"],
            correctIndex: 0,
            explanation: "A café is one thing, so: there is. Are is for plurals.",
            from: "Chapter 16 · Lesson 4",
          },
          {
            question: "Which request is polite?",
            options: ["Can I have a tea, please?", "Tea. Now.", "I want tea."],
            correctIndex: 0,
            explanation: "Can I have…, please? is the polite request pattern from the information lesson.",
            from: "Chapter 14 · Lesson 5",
          },
        ],
        { title: "Look back — questions and places", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "You want a coffee in a café. Which is polite?",
            [
              ["a", "Give me a coffee."],
              ["b", "Can I have a coffee, please?"],
              ["c", "I want coffee now."],
            ],
            "b",
            fb(
              "Can I have a coffee, please?",
              "Can I have + please is the standard polite order.",
              "Direct orders and I want sound rude in cafés.",
            ),
            { skill: "speaking", hints: ["Look for the question form with please at the end."] },
          ),
          FB(
            "Complete the question.",
            "___ me, where is the station?",
            ["Excuse", "excuse"],
            fb(
              "Excuse",
              "Excuse me opens a question to a stranger — then comes the real question.",
              "Sorry is for apologies; it does not open a new question.",
            ),
            { skill: "vocabulary", hints: ["Two words: ___ me. It opens talks with strangers."] },
          ),
          LIS(
            "Listen and answer.",
            "Excuse me, what time do you close? — We close at nine.",
            "What time does the shop close?",
            ["nine", "at nine", "nine o'clock", "9"],
            fb(
              "At nine",
              "You heard “We close at nine.” — the closing time.",
              "The opening time is not in this exchange.",
            ),
            { skill: "listening", hints: ["Listen for the clock time after “We close at”."] },
          ),
          RD(
            "Read and answer.",
            "The corner shop",
            "The corner shop is small but friendly. It opens at eight in the morning and closes at ten at night. The bread is fresh every day. A bottle of milk is one pound. Six eggs are two pounds.",
            "How much is the milk?",
            [
              ["a", "One pound."],
              ["b", "Two pounds."],
              ["c", "Ten pounds."],
            ],
            "a",
            fb(
              "One pound.",
              "The text says: A bottle of milk is one pound.",
              "Two pounds is the price of the eggs.",
            ),
            { skill: "reading", hints: ["Find the price in the sentence with the word milk."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the polite request.",
            "Can I have a tea, please?",
            fb(
              "Can I have a tea, please?",
              "The order is: Can I have + thing + please.",
              "Please comes at the end of a request — never at the start.",
            ),
            { skill: "speaking" },
          ),
          CORR(
            "Find and correct the mistake.",
            "How much this?",
            ["How much is this?"],
            fb(
              "How much is this?",
              "The price question needs its verb: How much is this?",
              "For more than one thing, ask: How much are these?",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Excuse me, what time do you open?",
            ["Excuse me, what time do you open?"],
            fb(
              "Excuse me, what time do you open?",
              "Excuse me opens, do helps open ask, and the clock word comes last.",
              "Without do, the question cannot stand.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "You did not hear the price. What do you say?",
            [
              ["a", "Sorry, can you say that again, please?"],
              ["b", "What?!"],
              ["c", "Speak English!"],
            ],
            "a",
            fb(
              "Sorry, can you say that again, please?",
              "Sorry + can you say that again + please asks for a repeat politely.",
              "Short rude replies stop the conversation.",
            ),
            { skill: "speaking" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Three real conversations",
      instructions:
        "Write three mini-dialogues: buying food, asking for directions, asking about opening times. Four lines each. Open politely and close with a thank you.",
      minWords: 25,
      maxWords: 85,
    },
    homework: [
      "Role-play a café order out loud two times — play both parts.",
      "Say the prices of five things in your home in English.",
      "Ask one real question politely today: Excuse me first, thank you last.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Describing People and Places
  // =========================================================================
  {
    slug: "ch-18-l-05",
    minutes: 20,
    description:
      "Paint pictures with words: appearance with “What does she look like?”, personality with “What is she like?”, and places with there is / there are.",
    outcomes: [
      "Answer “What does she look like?” with height, hair and clothes",
      "Answer “What is she like?” with personality words",
      "Describe places with “There is…” and “There are…”",
      "Stack adjectives correctly: a beautiful blue dress",
    ],
    blocks: [
      LI(
        "Can your friend find your cousin in a crowd? Can a visitor recognise your street? This lesson paints pictures with words. You describe people: height, looks and personality. Then you describe places with there is and there are.",
        [
          "You know describing words come before nouns (Chapter 15 · Lesson 1).",
          "You can stack two adjectives in the right order (Chapter 15 · Lesson 2).",
          "You can say what exists: there is a park, there are two cafés (Chapter 16 · Lesson 4).",
          "You can describe actions happening now: “She is wearing a blue jacket.” (Chapter 17 · Lesson 2).",
        ],
      ),
      vocGlossary("Describing words for people and places", [
        { word: "tall", partOfSpeech: "adjective", definition: "high, like a tree or a tall man" },
        { word: "short", partOfSpeech: "adjective", definition: "not tall" },
        { word: "big", partOfSpeech: "adjective", definition: "large in size" },
        { word: "small", partOfSpeech: "adjective", definition: "little in size" },
        { word: "old", partOfSpeech: "adjective", definition: "not new; not young" },
        { word: "young", partOfSpeech: "adjective", definition: "not old" },
        { word: "happy", partOfSpeech: "adjective", definition: "feeling good" },
        { word: "kind", partOfSpeech: "adjective", definition: "good to people, warm-hearted" },
        { word: "quiet", partOfSpeech: "adjective", definition: "making little sound" },
        { word: "noisy", partOfSpeech: "adjective", definition: "making a lot of sound" },
        { word: "clean", partOfSpeech: "adjective", definition: "not dirty" },
        { word: "beautiful", partOfSpeech: "adjective", definition: "very good to look at" },
        { word: "busy", partOfSpeech: "adjective", definition: "with many things to do" },
        { word: "long", partOfSpeech: "adjective", definition: "not short, from end to end" },
      ]),
      H("Two questions, two pictures"),
      T(
        "English asks about people in two ways. What does she look like? asks about the outside: height, hair, clothes. What is she like? asks about the inside: kind, quiet, funny. Hear the difference, and you answer the right question.",
      ),
      {
        type: "definition",
        term: "appearance",
        partOfSpeech: "noun",
        definition:
          "Appearance is how a person looks: tall or short, young or old, the clothes they wear.",
        example: {
          english: "What does she look like? — She is tall, with long dark hair.",
          translation: "Look like asks about appearance, not personality.",
        },
      },
      TB(
        "Describe a place with there is / there are",
        ["Sentence type", "Use it for", "Example"],
        [
          ["There is + one thing", "one thing exists", "There is a small park behind the shop."],
          ["There are + plural", "more things exist", "There are two cafés on my street."],
          ["There is not / There are not", "it does not exist", "There is not a bank near here."],
          ["Is there…? / Are there…?", "asking what exists", "Is there a café near here?"],
        ],
        "Places are described by what they have — start with there.",
      ),
      AU(
        "Listen: describing words",
        "tall. short. big. small. old. young. happy. kind. quiet. noisy. clean. beautiful.",
        0.85,
      ),
      AU(
        "Listen: two questions, two answers",
        "What does she look like? — She is tall and quiet. She is wearing a green jacket. — What is she like? — She is very kind. She always helps everyone.",
        0.9,
      ),
      ST(
        "Describe a person in three steps",
        [
          {
            title: "Step 1 — Start with the general look",
            text: "Begin with height and build. One sentence is enough.",
            examples: [
              { english: "My friend Ali is tall.", note: "Height first — the biggest fact." },
              { english: "My grandmother is short.", note: "Short works for people too." },
            ],
          },
          {
            title: "Step 2 — Add what they are wearing now",
            text: "Clothes are now-actions: use is wearing. This pattern comes from Chapter 17.",
            examples: [
              { english: "He is wearing a blue jacket.", note: "is wearing + clothes = right now." },
              { english: "She is wearing a beautiful green dress.", note: "Opinion word before colour word." },
            ],
          },
          {
            title: "Step 3 — Finish with personality",
            text: "Answer What is he like? with inside words: kind, quiet, funny, busy.",
            examples: [
              { english: "He is very kind.", note: "Kind describes personality." },
              { english: "She is quiet but very funny.", note: "But joins two sides of one person." },
            ],
          },
        ],
      ),
      GR(
        "Describing words: the be-rule and the noun-rule",
        "Describe with be + adjective (He is tall) or adjective + noun (a tall man). For places, start with There is or There are and say what exists.",
        [
          { english: "My teacher is kind.", translation: "be + adjective." },
          { english: "She is a kind teacher.", translation: "adjective + noun." },
          { english: "There is a quiet park near my house.", translation: "There is + adjective + noun." },
          { english: "There are two noisy cafés on the corner.", translation: "There are + number + adjective + noun." },
        ],
        ["“He is a tall.” is impossible — a tall needs a noun after it."],
      ),
      EXD(
        "Pictures with words",
        [
          { english: "My friend Ali is tall and quiet.", note: "Height plus personality in one line.", domain: "social" },
          { english: "She is wearing a beautiful blue dress.", note: "Opinion before colour — Chapter 15 order.", domain: "everyday" },
          { english: "My teacher is kind and always happy.", note: "Two personality words with and.", domain: "education" },
          { english: "Our city is old but beautiful.", note: "But joins two true sides of a place.", domain: "travel" },
          { english: "There are two cafés on my street.", note: "There are for more than one thing.", domain: "home" },
          { english: "There is a small park behind the shop.", note: "There is + place word paints a map.", domain: "nature" },
          { english: "The market is noisy but cheap.", note: "Sound plus price — a place with character.", domain: "shopping" },
          { english: "My little sister is very noisy at breakfast.", note: "Family plus one true describing word.", domain: "family" },
          { english: "The boy in the red shirt is very fast.", note: "Looks plus an action — spot him in a crowd.", domain: "sport" },
        ],
        "Nine description lines — enough to paint any person or place.",
      ),
      US(
        [
          {
            situation: "Finding a friend at the station",
            example: "“I am tall and I am wearing a red hat.”",
            note: "Height plus one colour — how friends find each other.",
          },
          {
            situation: "Helping a visitor",
            example: "“My street is quiet. There are two cafés and a small park.”",
            note: "There is and there are paint a map in words.",
          },
          {
            situation: "Talking about your teacher",
            example: "“She is kind and always happy.”",
            note: "What is she like? — the personality question.",
          },
          {
            situation: "Choosing a flat",
            example: "“It is small but clean. There is a big window.”",
            note: "Size, then quality, then one detail — that is a place description.",
          },
          {
            situation: "Describing your city to a tourist",
            example: "“My city is old and beautiful. There is a famous bridge.”",
            note: "Age, beauty, one landmark — tourists remember three facts.",
          },
        ],
        "Descriptions in daily life",
        "Every crowd, street and city asks for word pictures.",
      ),
      DL(
        "Who is that woman?",
        "At the bus stop, Sara sees a woman with a blue bag. She asks Omar.",
        [
          ["Sara", "Omar, who is that woman with the blue bag?"],
          ["Omar", "Which one? There are two women at the stop."],
          ["Sara", "The tall one, near the tree. She is wearing a green jacket."],
          ["Omar", "Ah, that is Mrs Kahn. She is my neighbour."],
          ["Sara", "What is she like?"],
          ["Omar", "She is very kind. She always says hello. And she makes delicious bread!"],
          ["Sara", "Better and better!"],
          ["Omar", "Yes, but she is also a little noisy. She sings all morning!"],
          ["Sara", "Ha! Then everyone knows when she is happy."],
        ],
      ),
      CMP(
        "What does she look like? vs What is she like?",
        ["What does she look like?", "What is she like?"],
        [
          ["What it asks", "Appearance — the outside", "Personality — the inside"],
          ["The answers", "tall, short, long dark hair, blue jacket", "kind, quiet, funny, busy"],
          ["Watch out", "Not “How does she look like?”", "Not “How is she like?”"],
          ["A similar question", "“How does she look?” — also appearance", "“How is she?” — health or mood today"],
        ],
        {
          intro: "One word changes the whole question.",
          verdict: "Look like = looks. Be like = personality.",
        },
      ),
      MS(
        [
          [
            "She is wearing a blue beautiful dress.",
            "She is wearing a beautiful blue dress.",
            "Opinion words come before colour words: beautiful blue, nice green (Chapter 15).",
          ],
          [
            "My city have a park.",
            "My city has a park.",
            "My city means it — and it takes has.",
          ],
          [
            "There is two cafés on my street.",
            "There are two cafés on my street.",
            "Two things take there are. There is is for one thing only.",
          ],
          [
            "My friend is very high.",
            "My friend is very tall.",
            "People are tall. High is for mountains, walls and prices.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Two questions, two answers",
        "What does he look like? — He is tall, with short black hair. What is he like? — He is kind and funny. Learn the pair. Hear one, answer that one.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My friend Ali is tall, with short black hair. He is twenty years old. Today he is wearing a grey shirt and old shoes. Ali is quiet, but he is very kind. He always helps everyone. On Saturday, he plays football in the park. You cannot miss him — he is the tallest boy there!",
          task: "Read the text two times. Then say two appearance facts and two personality facts about Ali.",
        },
        writing: {
          task: "Describe a person your friend could find in a crowd: two appearance sentences, one clothes sentence, two personality sentences.",
          guide: [
            "My friend ______ is tall / short.",
            "He / She has ______ hair.",
            "He / She is wearing ______.",
            "He / She is very ______.",
          ],
          model:
            "My friend Nida is short and happy. She has long black hair. She is wearing a yellow dress. She is very kind and a little noisy. You cannot miss her!",
        },
        listening: {
          script: "My city is old and beautiful. There is a famous bridge. There are two parks near the river. The streets are small and quiet.",
          task: "Listen one time. How many parks are there?",
        },
        speaking: {
          task: "Describe a person in your family for one minute. Then describe your street with there is and there are.",
          frames: [
            "He / She is tall and …",
            "He / She is wearing …",
            "There is a … near my house.",
            "There are … on my street.",
          ],
          checklist: [
            "I described looks and clothes.",
            "I described personality.",
            "I used there is and there are for my street.",
          ],
        },
      }),
      LSP(
        [
          gls("Adjectives go before nouns in English."),
          gls("There is and there are say what exists."),
          gls("beautiful"),
          gls("tall"),
          gls("kind"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "What does she look like? asks appearance. What is she like? asks personality.",
        "Describe people with be + adjective: He is tall. She is kind.",
        "Clothes are now-actions: She is wearing a blue jacket.",
        "Describe places with There is (one thing) and There are (more things).",
        "Opinion before colour: a beautiful blue dress.",
      ]),
      RV(
        [
          {
            question: "Which order is correct?",
            options: ["a small black cat", "a black small cat", "a cat small black"],
            correctIndex: 0,
            explanation: "Size comes before colour — the adjective order lesson.",
            from: "Chapter 15 · Lesson 2",
          },
          {
            question: "“There ___ two cafés on my street.”",
            options: ["is", "are", "am"],
            correctIndex: 1,
            explanation: "Two cafés is plural, so there are.",
            from: "Chapter 16 · Lesson 4",
          },
          {
            question: "Which sentence describes an action NOW?",
            options: ["He is wearing a blue jacket.", "He wears a blue jacket every day."],
            correctIndex: 0,
            explanation: "is wearing means now; every day is a habit.",
            from: "Chapter 17 · Lesson 2",
          },
          {
            question: "“What is she like?” — what do you talk about?",
            options: ["Her personality", "Her clothes", "Her age"],
            correctIndex: 0,
            explanation: "Be like asks about the inside: kind, funny, quiet.",
            from: "Chapter 15 · Lesson 1",
          },
        ],
        { title: "Look back — adjectives and existence", intro: "Four quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Which question asks about looks?",
            [
              ["a", "What does she look like?"],
              ["b", "What is she like?"],
              ["c", "What does she do?"],
            ],
            "a",
            fb(
              "What does she look like?",
              "Look like asks about appearance: height, hair, clothes.",
              "What is she like? asks about personality. What does she do? asks about her job.",
            ),
            { skill: "speaking", hints: ["Look for the word look — it means appearance here."] },
          ),
          FB(
            "Complete the sentence.",
            "There ___ two cafés on my street.",
            ["are"],
            fb(
              "are",
              "Two cafés is more than one — plural nouns take there are.",
              "There is works for one thing only.",
            ),
            { skill: "grammar", hints: ["Count the cafés — two is more than one."] },
          ),
          MATCH(
            "Match each describing word to its opposite.",
            [
              ["tall", "tall"],
              ["old", "old"],
              ["big", "big"],
              ["clean", "clean"],
            ],
            [
              ["o1", "young"],
              ["o2", "small"],
              ["o3", "short"],
              ["o4", "dirty"],
            ],
            [
              ["tall", "o3"],
              ["old", "o1"],
              ["big", "o2"],
              ["clean", "o4"],
            ],
            fb(
              "tall → short, old → young, big → small, clean → dirty",
              "Describing words work in opposite pairs — learn them as couples.",
            ),
            { skill: "vocabulary", hints: ["Choose the word that means the opposite."] },
          ),
          LIS(
            "Listen and answer.",
            "My friend Karim is tall and quiet. He always wears a green jacket.",
            "What is Karim like?",
            ["tall and quiet", "quiet", "tall"],
            fb(
              "Tall and quiet",
              "You heard “tall and quiet” — looks first, personality second.",
              "The green jacket is clothes, not personality.",
            ),
            { skill: "listening", hints: ["Listen for the two describing words after is."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the sentence.",
            "There is a small park behind my house.",
            fb(
              "There is a small park behind my house.",
              "The order is: There is + a + adjective + noun + place.",
              "The place word comes last, after the thing that exists.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "She is wearing a blue beautiful dress.",
            ["She is wearing a beautiful blue dress."],
            fb(
              "She is wearing a beautiful blue dress.",
              "Opinion words come before colour words: beautiful blue.",
              "Colour first is the classic adjective-order error.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My city is old and beautiful.",
            ["My city is old and beautiful."],
            fb(
              "My city is old and beautiful.",
              "Two adjectives joined with and — a complete place description.",
              "The two describing words both come after is.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "“What is your teacher like?” — what do you talk about?",
            [
              ["a", "Her personality"],
              ["b", "Her clothes"],
              ["c", "Her age"],
            ],
            "a",
            fb(
              "Her personality",
              "Be like asks about the inside: kind, quiet, funny.",
              "Clothes answer look like; age answers how old.",
            ),
            { skill: "speaking" },
          ),
        ],
      },
    ],
    assignment: {
      title: "A person and a place",
      instructions:
        "Describe one person in three sentences (looks, clothes, personality) and one place in three sentences with there is / there are.",
      minWords: 25,
      maxWords: 80,
    },
    homework: [
      "Describe a family member out loud: looks, clothes, personality.",
      "Describe your street so a visitor could draw it. Use there is and there are.",
      "Write five opposite pairs from this lesson. Say each pair out loud.",
    ],
  },

  // =========================================================================
  // Lesson 6 — Everyday Dialogues and First Paragraphs
  // =========================================================================
  {
    slug: "ch-18-l-06",
    minutes: 30,
    description:
      "The A1 exit lesson: whole conversations with open, keep-going and close moves, and your first real paragraph — topic sentence, supporting sentences, closing line.",
    outcomes: [
      "Hold a full conversation: open, keep going, close",
      "Write a paragraph with a topic sentence, supporting sentences and a closing line",
      "Choose between short answers and full sentences by situation",
      "Complete the Chapter 18 review and finish Level A1",
    ],
    blocks: [
      LI(
        "The last lesson of A1. Two final skills. First, whole conversations: open, keep going, close. Second, your first real paragraph: one idea, a topic sentence, supporting sentences and a closing line. Finish both, and Level A1 is complete.",
        [
          "You know the sentence order: subject, verb, object (Chapter 09 · Lesson 4).",
          "You can use there is and there are for places (Chapter 16 · Lesson 4).",
          "You can choose the present simple or the present continuous (Chapter 17 · Lesson 5).",
          "You know the introduction moves and polite questions (Chapter 18 · Lessons 1–4).",
        ],
      ),
      vocGlossary("The words of this lesson", [
        { word: "paragraph", partOfSpeech: "noun", definition: "a short group of sentences about one idea" },
        { word: "sentence", partOfSpeech: "noun", definition: "a group of words with one complete idea" },
        { word: "question", partOfSpeech: "noun", definition: "a sentence that asks" },
        { word: "answer", partOfSpeech: "noun", definition: "the words that reply to a question" },
        { word: "polite", partOfSpeech: "adjective", definition: "friendly and respectful with people" },
        { word: "to meet", partOfSpeech: "verb", definition: "to see and talk to a person for the first time" },
        { word: "friend", partOfSpeech: "noun", definition: "a person you like and know well" },
        { word: "family", partOfSpeech: "noun", definition: "the people closest to you" },
        { word: "city", partOfSpeech: "noun", definition: "a big town" },
      ]),
      H("A conversation has three parts"),
      T(
        "Every good talk has a start, a middle and an end. Open with a greeting or Excuse me. Keep going with questions and And you? Close with a thank you or See you later. Manage the three parts, and you manage the talk.",
      ),
      {
        type: "definition",
        term: "paragraph",
        partOfSpeech: "noun",
        definition:
          "A paragraph is a short group of sentences about ONE idea. It starts on a new line and ends with a full stop.",
        example: {
          english: "My street is a friendly place. There are two cafés and a small park. The neighbours always say hello. I love my street.",
          translation: "One idea — the street — in four sentences.",
        },
      },
      TB(
        "The paragraph plan",
        ["Line", "Its job", "Example"],
        [
          ["1. Topic sentence", "Names the one idea", "My street is a friendly place."],
          ["2. Supporting sentence", "Gives fact one", "There are two cafés and a small park."],
          ["3. Supporting sentence", "Gives fact two", "The neighbours always say hello."],
          ["4. Closing line", "Ends with a feeling or summary", "I love my street."],
        ],
        "Topic + two or three facts + a feeling. That is a paragraph.",
      ),
      TB(
        "The model paragraph, line by line",
        ["Line", "Why it works"],
        [
          ["“My street is a friendly place.”", "Topic sentence — it names the idea and gives the main word: friendly."],
          ["“There are two cafés and a small park.”", "Supporting fact — there are paints the place."],
          ["“The neighbours always say hello.”", "Supporting fact — always shows a habit."],
          ["“In the evening, children play football.”", "Supporting fact — a time marker starts the line."],
          ["“I feel lucky to live here.”", "Closing line — a feeling, not a new fact."],
        ],
        "Five lines, one idea, one feeling at the end.",
      ),
      AU(
        "Listen: the words of a paragraph",
        "paragraph. sentence. topic sentence. supporting sentence. closing line. polite. Nice to meet you. See you later.",
        0.85,
      ),
      AU(
        "Listen: a full neighbour conversation",
        "Good morning! Are you the new neighbour? — Yes, I am. My name is Yusuf. — Welcome! I am Nora. — Is there a shop near here? — Yes, there is one on Green Street. It opens at eight. — Perfect. Thank you, Nora! — See you around!",
        0.9,
      ),
      ST(
        "Build your first paragraph in four steps",
        [
          {
            title: "Step 1 — Choose ONE idea",
            text: "One paragraph, one idea. My street. My mother. My day. Choose one, and hold it.",
            examples: [
              { english: "My street is a friendly place.", note: "The idea: my street. The main word: friendly." },
            ],
          },
          {
            title: "Step 2 — Write the topic sentence",
            text: "The first line names the idea and gives your feeling about it. Keep it short.",
            examples: [
              { english: "My mother is the busiest person I know.", note: "Idea plus main word: busiest." },
            ],
          },
          {
            title: "Step 3 — Add two or three supporting sentences",
            text: "Give facts: what there is, what happens, when. Use your A1 systems: there is/are, the present simple, time markers.",
            examples: [
              { english: "There are two cafés and a small park.", note: "There is and there are say what exists." },
              { english: "In the evening, children play football.", note: "Time + action — the routine pattern." },
            ],
          },
          {
            title: "Step 4 — Close with a feeling",
            text: "The last line ends the idea. Share a feeling, not a new fact.",
            examples: [
              { english: "I feel lucky to live here.", note: "A feeling closes the door softly." },
              { english: "I love my street.", note: "Four words — a perfect ending." },
            ],
          },
        ],
      ),
      GR(
        "The paragraph rule",
        "A paragraph is a group of sentences about one idea. Line one names the idea (topic sentence). The middle lines give facts (supporting sentences). The last line ends with a feeling or summary (closing line).",
        [
          {
            english: "My mother is the busiest person I know. She gets up at five and cooks for eight people. In the evening, she still helps me with my homework. I do not know how she does it!",
            translation: "Topic — a busy mother. Facts — times and actions. Closing — wonder.",
          },
          {
            english: "My city is old and beautiful. There is a famous bridge and two parks. Tourists visit it every summer. I am proud of my city.",
            translation: "Topic — the city. Facts — what exists. Closing — a feeling.",
          },
        ],
        ["Do not start a new idea inside a paragraph. New idea, new paragraph."],
      ),
      EXD(
        "Whole exchanges and paragraph lines",
        [
          { english: "Hi! How are you? — I am fine, thank you. And you?", note: "Open, answer, send back — the daily exchange.", domain: "social" },
          { english: "Excuse me, is this the right bus for the station?", note: "Excuse me opens a real travel question.", domain: "travel" },
          { english: "See you later! — Bye!", note: "A closer and its echo — talks must end.", domain: "social" },
          { english: "My street is a friendly place.", note: "A topic sentence: idea plus main word.", domain: "home" },
          { english: "There are two cafés and a small park near my house.", note: "A supporting sentence paints the place.", domain: "home" },
          { english: "I feel lucky to live here.", note: "A closing line shares a feeling.", domain: "everyday" },
          { english: "Really? Tell me more!", note: "Two small phrases that keep any talk alive.", domain: "social" },
          { english: "What about you? Do you like this city?", note: "What about you? opens the way back.", domain: "social" },
          { english: "Welcome to the class! My name is Sara.", note: "A warm open for a first day.", domain: "education" },
        ],
        "Nine lines — the moves of a whole conversation and a whole paragraph.",
      ),
      US(
        [
          {
            situation: "Meeting the new neighbour",
            example: "“Good morning! Are you the new neighbour?”",
            note: "Open warm, ask one easy question.",
          },
          {
            situation: "At the school gate",
            example: "“How are you? — I am fine, thank you. And you?”",
            note: "The daily parent exchange — short and warm.",
          },
          {
            situation: "Saying goodbye at the bus stop",
            example: "“OK — my bus is here. See you later!”",
            note: "A reason plus a closer ends things naturally.",
          },
          {
            situation: "Writing about your street",
            example: "“My street is a friendly place. There are two cafés… I love it here.”",
            note: "The paragraph pattern works for any place you know.",
          },
          {
            situation: "Writing about a person",
            example: "“My grandfather is very kind. He walks with me to school. He is my best friend.”",
            note: "Person paragraphs follow the same plan.",
          },
        ],
        "Talks and paragraphs in daily life",
        "The same shape — start, middle, end — fits conversations and writing.",
      ),
      DL(
        "Meeting the new neighbour",
        "Nora meets Yusuf, the new neighbour in flat four. The whole A1 system in one talk.",
        [
          ["Nora", "Good morning! Are you the new neighbour?"],
          ["Yusuf", "Yes, I am. My name is Yusuf. I am from Egypt."],
          ["Nora", "Welcome! I am Nora, from flat two. How are you today?"],
          ["Yusuf", "I am fine, thank you — but a little lost!"],
          ["Nora", "Ha! New city, new questions. What do you need?"],
          ["Yusuf", "Is there a good shop near here?"],
          ["Nora", "Yes, there is one on Green Street, next to the bank. It opens at eight."],
          ["Yusuf", "Perfect. And a café? I need good coffee!"],
          ["Nora", "Try the corner café. They make the best coffee in town."],
          ["Yusuf", "Thank you so much, Nora. See you around!"],
          ["Nora", "See you later, Yusuf — and welcome again!"],
        ],
      ),
      CMP(
        "Short answers vs full sentences",
        ["Short answer", "Full sentence"],
        [
          ["What it is", "A word or two: “Fine.” “Two pounds.” “Yes.”", "A full pattern: “I am fine, thank you.”"],
          ["Where it is normal", "Quick shop and bus exchanges", "First meetings, teachers, new people"],
          ["How it sounds", "Fast and natural — among equals", "Polite and friendly — when respect matters"],
          ["Example", "“How much is it?” “Two pounds.”", "“How are you?” “I am fine, thank you. And you?”"],
        ],
        {
          intro: "Both are correct. The skill is knowing when each one fits.",
          verdict: "In shops, short is normal. With new people and teachers, give the full sentence — it is the polite choice.",
        },
      ),
      MS(
        [
          [
            "I like very much this city.",
            "I like this city very much.",
            "Very much comes at the end, after the thing you like: I like this city very much.",
          ],
          [
            "Nice to meet.",
            "Nice to meet you.",
            "Meet needs its person: Nice to meet you. The same with “Pleased to meet you.”",
          ],
          [
            "Hello I am Yusuf I am from Egypt.",
            "Hello. I am Yusuf. I am from Egypt.",
            "Writing needs full stops. Three ideas, three sentences — not one long line.",
          ],
          [
            "My street there are two cafés.",
            "There are two cafés on my street.",
            "There are starts the sentence. Then say what exists, and where.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Manage the three parts",
        "Open: “Hi!” or “Excuse me…”. Keep going: “And you?” “Really?” “What about you?”. Close: “Nice to meet you.” “Thank you!” “See you later!” Three moves — every conversation you will ever have.",
      ),
      H("Chapter 18 review — Level A1 exit"),
      T(
        "You started with the alphabet. You finish with conversations and paragraphs. Answer the review questions, write your first paragraph, and Level A1 is complete. A2 waits for you.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "My friend Sara lives on a small street. The street is not big, but it is friendly. There are two cafés and one shop. The neighbours always say hello. In the evening, the children play football. Sara feels lucky to live there.",
          task: "Read the paragraph two times. Find the topic sentence and the closing line.",
        },
        writing: {
          task: "Write your first real paragraph about a place you know: your street, your school or a park. Topic sentence, two or three supporting sentences, closing line.",
          guide: [
            "My ______ is a ______ place.",
            "There is / There are ______.",
            "The people always / usually ______.",
            "I feel ______.",
          ],
          model:
            "My street is a quiet place. There are six houses and one small shop. The neighbours always say hello. In the morning, birds sing in the trees. I feel lucky to live here.",
        },
        listening: {
          script: "Hi! How are you? — I am fine, thank you. And you? — I am fine too. Are you the new student? — Yes, I am. My name is Ali. — Nice to meet you, Ali! See you in class! — See you later!",
          task: "Listen one time. How does the talk end?",
        },
        speaking: {
          task: "Hold a full conversation with a partner or out loud: greet, ask two questions, answer two, then close. Then say your paragraph from memory.",
          frames: ["Hi! How are you?", "And you? / What about you?", "Nice to meet you. / See you later!", "My street is a … place."],
          checklist: [
            "I opened the talk.",
            "I asked and answered two questions.",
            "I closed the talk politely.",
            "I said my paragraph from memory.",
          ],
        },
      }),
      LSP(
        [
          gls("paragraph"),
          gls("sentence"),
          gls("polite"),
          gls("Nice to meet you."),
          gls("Practice a little every day."),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Conversations have three parts: open, keep going, close.",
        "“And you?” and “What about you?” send questions back.",
        "A paragraph is one idea: topic sentence, supporting sentences, closing line.",
        "The closing line shares a feeling, not a new fact.",
        "Short answers are fine in shops. Full sentences are polite with new people and teachers.",
        "You can introduce yourself, ask, describe and write a paragraph — Level A1 complete.",
      ]),
      RV(
        [
          {
            question: "Which one is a family word?",
            options: ["aunt", "station", "breakfast"],
            correctIndex: 0,
            explanation: "Aunt is your father's or mother's sister — from the first family lesson.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "“My father is ___ teacher.” Which article fits?",
            options: ["a", "an", "the"],
            correctIndex: 0,
            explanation: "Jobs take a or an. Teacher starts with a consonant sound, so a teacher.",
            from: "Chapter 10 · Lesson 4",
          },
          {
            question: "“She ___ English at a school.”",
            options: ["teach", "teaches", "teaching"],
            correctIndex: 1,
            explanation: "She takes the -s form in the present simple.",
            from: "Chapter 13 · Lesson 2",
          },
          {
            question: "“There is a park ___ my house.”",
            options: ["next to", "between", "under"],
            correctIndex: 0,
            explanation: "Next to means at the side — one house, one park. Between needs two things.",
            from: "Chapter 16 · Lesson 1",
          },
          {
            question: "Which sentence is about NOW?",
            options: ["It is raining.", "It rains in July."],
            correctIndex: 0,
            explanation: "is raining happens now; rains in July is a habit.",
            from: "Chapter 17 · Lesson 5",
          },
          {
            question: "“How are you?” — choose the best reply.",
            options: ["I am fine, thank you.", "I am a student.", "I am from Egypt."],
            correctIndex: 0,
            explanation: "How are you? asks about you today — the be-questions lesson.",
            from: "Chapter 12 · Lesson 2",
          },
        ],
        {
          title: "Capstone review — the whole of A1",
          intro: "Six questions from six chapters. This is your A1 base — check it before you write.",
        },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice — chapter review",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          RD(
            "Read and answer.",
            "A first paragraph",
            "My street is a friendly place. There are two cafés and a small park. The neighbours always say hello. In the evening, children play football. I feel lucky to live here.",
            "Which sentence is the topic sentence?",
            [
              ["a", "My street is a friendly place."],
              ["b", "There are two cafés and a small park."],
              ["c", "I feel lucky to live here."],
            ],
            "a",
            fb(
              "My street is a friendly place.",
              "The topic sentence comes first and names the one idea — the street and its main word, friendly.",
              "The other lines give facts and the closing feeling.",
            ),
            { skill: "reading", hints: ["The topic sentence comes first and names the one idea."] },
          ),
          FB(
            "Complete the topic sentence.",
            "My street is a ___ place.",
            ["friendly"],
            fb(
              "friendly",
              "The topic sentence names the idea and gives the main word — friendly is the main word here.",
              "New facts come later, in the supporting sentences.",
            ),
            { skill: "writing", hints: ["It describes a street where people are good to each other."] },
          ),
          MCQ(
            "The conversation is ending. What is a natural closer?",
            [
              ["a", "See you later!"],
              ["b", "And you?"],
              ["c", "Excuse me?"],
            ],
            "a",
            fb(
              "See you later!",
              "See you later closes a friendly conversation.",
              "And you? keeps a talk going. Excuse me opens a question.",
            ),
            { skill: "speaking", hints: ["Choose the goodbye line."] },
          ),
          LIS(
            "Listen and answer.",
            "Hi, I am Yusuf. — Hello, I am Nora. Nice to meet you, Yusuf. — Nice to meet you too. See you later!",
            "What is the last line of the talk?",
            ["See you later", "see you later!"],
            fb(
              "See you later",
              "See you later is the closer — it ends the talk.",
              "Nice to meet you comes first, at the meeting moment.",
            ),
            { skill: "listening", hints: ["Listen to the very last words of the talk."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          REORD(
            "Make the topic sentence.",
            "My street is a friendly place.",
            fb(
              "My street is a friendly place.",
              "The order is: the idea + is + a + main word + noun.",
              "The main word comes before its noun, at the end of the line.",
            ),
            { skill: "writing" },
          ),
          CORR(
            "Find and correct the mistake.",
            "I like very much this city.",
            ["I like this city very much."],
            fb(
              "I like this city very much.",
              "Very much comes at the end — after the thing you like.",
              "Between like and its object, very much breaks the pattern.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Nice to meet you. See you later!",
            ["Nice to meet you. See you later!"],
            fb(
              "Nice to meet you. See you later!",
              "Two moves: the first-meeting line, then the closer.",
              "A full stop separates the meeting from the goodbye.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which reply keeps the conversation going?",
            [
              ["a", "And you?"],
              ["b", "Yes."],
              ["c", "OK."],
            ],
            "a",
            fb(
              "And you?",
              "And you? returns the question — the best conversation keeper.",
              "Yes. and OK. close the topic down.",
            ),
            { skill: "speaking" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My first paragraph",
      instructions:
        "Write one paragraph about a place you know well — your street, your school or a park. Start with a topic sentence. Add two or three supporting sentences (use there is / there are or a time marker). End with a closing line about your feeling. Four to six sentences.",
      minWords: 40,
      maxWords: 90,
    },
    homework: [
      "Read your paragraph out loud two times. Then say it from memory.",
      "Have one real conversation in English today: open, ask two questions, close politely.",
      "Write a second paragraph about a person: My grandfather, My mother or My friend.",
    ],
  },
];
