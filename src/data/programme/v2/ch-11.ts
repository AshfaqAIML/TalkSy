/**
 * PROMPT 57 production — Batch 4, Chapter 11: Pronouns and Possessives.
 *
 * Every lesson below is rewritten to the full v2 teaching standard:
 * lesson introduction + prerequisites, concept explanation, step-by-step
 * teaching, rules and patterns, 8+ worked examples with teaching notes,
 * real-life usage, comparison, common mistakes (wrong → right → reason),
 * guided practice (with hints), independent practice (no hints),
 * four-skill integration, validated Urdu/Hindi support, summary,
 * revision questions from earlier lessons, assignment and homework.
 *
 * This is the pronoun chapter: the paradigm is never a bare table. Every
 * family of forms gets usage situations, worked examples with notes,
 * comparisons (subject vs object, my + noun vs mine alone, its vs it's,
 * this/these vs that/those), the mistakes beginners really make with
 * reasons, listening drills for the weak unstressed pronouns of natural
 * speech, and mixed-skill practice that makes the system automatic.
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

export const ch11Upgrades: LessonUpgrade[] = [
  // =========================================================================
  // Lesson 1 — Subject Pronouns
  // =========================================================================
  {
    slug: "ch-11-l-01",
    minutes: 25,
    description:
      "Seven little words run the English sentence: I, you, he, she, it, we, they. Learn what each one replaces, the verb forms they trigger, and how to use one subject only.",
    outcomes: [
      "Name all seven subject pronouns and say what each one replaces",
      "Replace any subject noun with the correct pronoun",
      "Match pronouns with the right verb form: I am, he is, they are, she eats",
      "Avoid the double-subject mistake (“My mother she cooks”)",
    ],
    blocks: [
      LI(
        "Pronouns are the shortcuts of English. In this lesson you meet the seven subject pronouns: I, you, he, she, it, we, they. You learn what each one replaces. You also learn the verb forms they trigger — am, is, are, and the -s of he, she and it.",
        [
          "You know that “I” is always a capital letter (Chapter 02 · Lesson 2).",
          "You have met he, she, it, we and they as words that replace naming words (Chapter 07 · Lesson 5).",
          "You know that the subject tells us who does the action (Chapter 08 · Lesson 3).",
        ],
      ),
      vocGlossary("The seven subject pronouns", [
        { word: "I", partOfSpeech: "pronoun", definition: "the person who is speaking" },
        { word: "you", partOfSpeech: "pronoun", definition: "the person or people you speak to" },
        { word: "he", partOfSpeech: "pronoun", definition: "one male person" },
        { word: "she", partOfSpeech: "pronoun", definition: "one female person" },
        { word: "it", partOfSpeech: "pronoun", definition: "one thing, animal or idea" },
        { word: "we", partOfSpeech: "pronoun", definition: "the speaker and other people with them" },
        { word: "they", partOfSpeech: "pronoun", definition: "more than one person, animal or thing" },
      ]),
      H("Why pronouns exist"),
      T(
        "Say this: “Sara reads a book. Sara likes the book. Sara reads every day.” It repeats Sara three times. English does not like that. Say instead: “Sara reads a book. She likes the book. She reads every day.” The pronoun she replaces Sara. Pronouns replace nouns so we do not repeat them.",
      ),
      {
        type: "definition",
        term: "subject pronoun",
        partOfSpeech: "grammar word",
        definition:
          "A subject pronoun does the action of the verb: I, you, he, she, it, we, they.",
        example: {
          english: "Sara reads. → She reads.",
          translation: "She replaces Sara, the subject of the sentence.",
        },
      },
      TB(
        "The seven subject pronouns",
        ["Pronoun", "It replaces", "Example"],
        [
          ["I", "the person speaking", "I am a student."],
          ["you", "the person or people listening", "You are my friend."],
          ["he", "one male person", "He is my brother."],
          ["she", "one female person", "She is my teacher."],
          ["it", "one thing, animal or idea", "It is a big city."],
          ["we", "the speaker and others", "We are happy."],
          ["they", "two or more people, animals or things", "They are new books."],
        ],
        "Seven small words replace thousands of names — and they never change form.",
      ),
      AU("Listen: the seven subject pronouns", "I. you. he. she. it. we. they.", 0.85),
      AU(
        "Listen: pronouns with be",
        "I am a student. You are my friend. He is tall. She is kind. It is small. We are happy. They are new.",
        0.9,
      ),
      ST("Choose the right subject pronoun in four steps", [
        {
          title: "Step 1 — Count first",
          text: "Is the subject one or more than one? One person takes he, she or it. More than one takes they.",
          examples: [
            { english: "one boy → he", note: "One male person." },
            { english: "two boys → they", note: "More than one person, animal or thing." },
          ],
        },
        {
          title: "Step 2 — Check male, female or thing",
          text: "One male is he. One female is she. One thing, animal or idea is it.",
          examples: [
            { english: "My father works. → He works.", note: "A father is one male." },
            { english: "The window is open. → It is open.", note: "A window is a thing." },
          ],
        },
        {
          title: "Step 3 — Ask who is speaking",
          text: "The person speaking is I. The person listening is you. Use we for yourself plus other people.",
          examples: [
            { english: "I read every night.", note: "You are the speaker." },
            { english: "We play tennis.", note: "You plus your friends together." },
          ],
        },
        {
          title: "Step 4 — Check the verb",
          text: "The pronoun decides the verb. I takes am. He, she and it take is and the -s form. You, we and they take are and the plain verb.",
          examples: [
            { english: "She is kind. She helps us.", note: "she → is, and the -s form helps." },
            { english: "They are teachers. They work here.", note: "they → are, and no -s on work." },
          ],
        },
      ]),
      GR(
        "The pronoun decides the verb",
        "I takes am. He, she and it take is, has and the -s form of the verb. You, we and they take are, have and the plain verb.",
        [
          { english: "I am happy. I eat rice.", translation: "I → am, and the plain verb eat." },
          { english: "He is tall. He eats rice.", translation: "he → is, and eats with -s." },
          { english: "They are students. They eat together.", translation: "they → are, and the plain verb eat." },
        ],
        [
          "You always takes are — even for one listener: “You are my best friend.”",
        ],
      ),
      EXD(
        "Subject pronouns in real life",
        [
          { english: "My mother is a nurse. She works at night.", note: "She replaces my mother — one woman.", domain: "family" },
          { english: "The students open their books. They read together.", note: "They replaces the students — more than one.", domain: "education" },
          { english: "This phone is new. It has a big screen.", note: "Things take it — never he or she.", domain: "technology" },
          { english: "My brother and I play football. We play every Friday.", note: "My brother and I together are we.", domain: "sport" },
          { english: "The bread is hot. It comes from the baker.", note: "It works for food too.", domain: "food" },
          { english: "My grandmother walks in the garden. She likes the flowers.", note: "One woman, one pronoun, no repeats.", domain: "home" },
          { english: "The buses stop here. They go to the city.", note: "They fits people, animals and things.", domain: "travel" },
          { english: "Ali and Omar are doctors. They help sick people.", note: "Two names become they.", domain: "health" },
          { english: "My cat sleeps all day. It wakes up at night.", note: "Animals take it in general English.", domain: "everyday" },
        ],
        "Nine sentences — each pronoun replaces a noun you already know.",
      ),
      US(
        [
          {
            situation: "Talking about your family",
            example: "“My sister studies maths. She is very good at it.”",
            note: "Introduce the name once, then use the pronoun.",
          },
          {
            situation: "In class",
            example: "“We read the book. Then we write our names.”",
            note: "The teacher speaks for the group with we.",
          },
          {
            situation: "On the phone",
            example: "“Hello, this is Omar.” “Hi Omar! How are you?”",
            note: "On the phone, this introduces yourself — and you is the listener.",
          },
          {
            situation: "Telling a story about friends",
            example: "“Ali and his friends play cricket. They play every evening.”",
            note: "Names first, then they carries the story.",
          },
          {
            situation: "Talking about the weather",
            example: "“Look at the rain. It is heavy today.”",
            note: "Weather is always it.",
          },
        ],
        "Subject pronouns in daily life",
        "Every conversation repeats names less than you think — pronouns do the work.",
      ),
      DL(
        "After school",
        "Two friends talk on the way home.",
        [
          ["Omar", "Sara, look at that dog. It is very big."],
          ["Sara", "Yes! It runs fast too."],
          ["Omar", "And the dog has a friend — a small cat."],
          ["Sara", "Ha! They play together every day."],
          ["Omar", "My brother and I come here after school. We like the animals."],
          ["Sara", "You are lucky. I sit at home and do homework."],
          ["Omar", "Come with us tomorrow! It is fun."],
        ],
      ),
      CMP(
        "he and she vs it",
        ["he / she (people)", "it (things and animals)"],
        [
          ["Meaning", "One real person: a man, a woman, a boy or a girl", "One thing, animal, idea — or the weather"],
          ["Examples", "father, mother, teacher, Sara", "phone, city, dog, rain, idea"],
          ["Say it", "“He is my teacher.” “She is a doctor.”", "“It is cold.” “It is a big city.”"],
          ["Watch out", "Never use it for a person you know", "Never use he or she for a thing — not “she” for a car"],
        ],
        {
          intro:
            "Urdu and Hindi use one word for he, she and it. English asks one question first: person or thing?",
          verdict:
            "Person → he or she. Thing or animal → it. Weather, time and money are always it.",
        },
      ),
      MS(
        [
          [
            "My mother she cooks dinner.",
            "My mother cooks dinner.",
            "One subject only. Say the noun or the pronoun — never both.",
          ],
          [
            "Me like pizza.",
            "I like pizza.",
            "The person who does the action is the subject. Subjects use I, not me.",
          ],
          [
            "Me and Ana go to school.",
            "Ana and I go to school.",
            "Subjects use I — and polite English says the other person first.",
          ],
          [
            "She eat rice every day.",
            "She eats rice every day.",
            "He, she and it take the -s form of the verb: eats.",
          ],
          [
            "The books is new.",
            "The books are new.",
            "The books means more than one, so the verb is are.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Animals, countries and machines",
        "Use it for animals in general English: “My dog? It sleeps all day.” Also use it for countries, machines and the weather: “It is hot today.” You may hear people say he or she for a pet they love. That is warm — but it is always safe.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Hana. I am seven years old. My brother is Omar. He is ten. We go to the same school. Our teacher is Miss Ali. She is very kind. The school is big. It has two gardens. My friends are Sara and Bilal. They sit with me. I love my school.",
          task: "Read the text two times. Then say all the pronouns you find in it.",
        },
        writing: {
          task: "Write about three people you know. Use each name one time, then use he or she.",
          guide: ["My ______ is ______.", "He / She is ______.", "He / She likes ______."],
          model: "My uncle is Rashid. He is a cook. He likes rice.",
        },
        listening: {
          script:
            "Ali and I are brothers. We have a small dog. The dog is black. It runs in the garden. My mother watches us. She laughs.",
          task: "Listen and count the pronouns you hear.",
        },
        speaking: {
          task: "Talk about your family for one minute. Use each person’s name one time only. Then use pronouns.",
          frames: ["This is my ______.", "He / She is ______.", "We ______ together."],
          checklist: [
            "I said each name only one time.",
            "I used he and she for people.",
            "I used it for a thing or animal.",
          ],
        },
      }),
      LSP(
        [
          gls("Pronouns replace nouns so we do not repeat them."),
          gls("He, she and it replace naming words."),
          gls("subject pronoun"),
          gls("he"),
          gls("she"),
          gls("it"),
          gls("we"),
          gls("they"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Seven subject pronouns run English sentences: I, you, he, she, it, we, they.",
        "The pronoun decides the verb: I am, he is, you are, she eats, they eat.",
        "He is for one male and she is for one female. It is for things, animals and the weather.",
        "We means the speaker plus others. They means two or more of anything.",
        "One subject only: say “My mother cooks” or “She cooks” — never “My mother she cooks”.",
      ]),
      RV(
        [
          {
            question: "Which word can replace “the teacher” in “The teacher is kind”?",
            options: ["She or he", "It", "They"],
            correctIndex: 0,
            explanation: "A teacher is a person, so you choose she or he — never it.",
            from: "Chapter 07 · Lesson 5",
          },
          {
            question: "Find the subject: “The cat sleeps on the bed.”",
            options: ["sleeps", "The cat", "the bed"],
            correctIndex: 1,
            explanation: "The subject does the action — the cat is who sleeps.",
            from: "Chapter 09 · Lesson 1",
          },
          {
            question: "What is the plural of “bus”?",
            options: ["buss", "buses", "bus"],
            correctIndex: 1,
            explanation: "Nouns ending in -s take -es: one bus, two buses.",
            from: "Chapter 10 · Lesson 2",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "The window is open. Which pronoun replaces “the window”?",
            [
              ["a", "She"],
              ["b", "It"],
              ["c", "They"],
            ],
            "b",
            fb(
              "It",
              "A window is a thing, and things take it.",
              "She is only for people; they is for more than one.",
            ),
            { skill: "grammar", hints: ["Things and animals have their own pronoun."] },
          ),
          FB(
            "Complete the sentence.",
            "___ am a student.",
            ["I"],
            fb(
              "I",
              "The speaker is the subject, and the word is always a capital letter.",
              "Me is the object form — it cannot start this sentence.",
            ),
            { skill: "grammar", hints: ["The person speaking writes one capital letter."] },
          ),
          MATCH(
            "Match each noun to its pronoun.",
            [
              ["n1", "my father"],
              ["n2", "my mother"],
              ["n3", "my friends"],
              ["n4", "the dog"],
            ],
            [
              ["p1", "he"],
              ["p2", "she"],
              ["p3", "it"],
              ["p4", "they"],
            ],
            [
              ["n1", "p1"],
              ["n2", "p2"],
              ["n3", "p4"],
              ["n4", "p3"],
            ],
            fb(
              "my father → he, my mother → she, my friends → they, the dog → it",
              "People take he or she; things and animals take it; more than one takes they.",
            ),
            { skill: "grammar", hints: ["Think: person or thing? One or many?"] },
          ),
          LIS(
            "Listen and answer.",
            "They play football every Friday.",
            "Who plays football?",
            ["They play football.", "they", "They"],
            fb(
              "They play football.",
              "You heard they — more than one person doing the action.",
              "One person would be he or she.",
            ),
            { skill: "listening", hints: ["Listen for the word at the start — it means more than one person."] },
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
            "She is my sister.",
            fb(
              "She is my sister",
              "The pronoun comes first, then the verb, then the family word.",
              "Every sentence needs its verb before the family word.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "My father he works in a bank.",
            ["My father works in a bank."],
            fb(
              "My father works in a bank.",
              "Use the noun or the pronoun — one subject only.",
              "The double subject “father he” is a very common mistake.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "We read books at school.",
            ["We read books at school."],
            fb(
              "We read books at school.",
              "We means the speaker plus others — more than one person.",
              "One speaker alone would use a different word.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "Me and Sara play tennis."],
              ["b", "Sara and I play tennis."],
              ["c", "Sara and me play tennis."],
            ],
            "b",
            fb(
              "Sara and I play tennis.",
              "The subject of the sentence uses I — and the other person comes first.",
              "Me never works as the subject of a verb.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Name to pronoun",
      instructions:
        "Write five sentences about people and things you know. Use the name or noun first. Then write the sentence again with the correct pronoun. Example: “My aunt is a cook. She makes bread.”",
      minWords: 20,
      maxWords: 70,
    },
    homework: [
      "Say the seven subject pronouns from memory: I, you, he, she, it, we, they.",
      "Find five sentences in any book. Say each subject out loud, then say it again with a pronoun.",
      "Tell a friend about your family for one minute. Use each name only one time.",
    ],
  },

  // =========================================================================
  // Lesson 2 — Object Pronouns
  // =========================================================================
  {
    slug: "ch-11-l-02",
    minutes: 25,
    description:
      "The same seven people come back in a new shape: me, you, him, her, it, us, them. Learn where they go — after a verb or a preposition — and how to choose between she and her.",
    outcomes: [
      "Name all seven object pronouns",
      "Use object pronouns after verbs: “She calls me.”",
      "Use object pronouns after prepositions: “Sit with us.”",
      "Choose correctly between subject and object pronouns in one sentence",
    ],
    blocks: [
      LI(
        "Lesson 1 gave you the seven doers: I, you, he, she, it, we, they. This lesson gives you the seven receivers: me, you, him, her, it, us, them. They go after a verb or a preposition. By the end, one sentence will hold both: “She helps us.”",
        [
          "You can find the object of a sentence — the receiver of the action (Chapter 09 · Lesson 2).",
          "You know English word order: subject, verb, object (Chapter 08 · Lesson 5).",
          "You can choose the seven subject pronouns by person and number (Lesson 1).",
        ],
      ),
      vocGlossary("The seven object pronouns", [
        { word: "me", partOfSpeech: "pronoun", definition: "the speaker receiving the action" },
        { word: "you", partOfSpeech: "pronoun", definition: "the listener receiving the action" },
        { word: "him", partOfSpeech: "pronoun", definition: "one male person receiving the action" },
        { word: "her", partOfSpeech: "pronoun", definition: "one female person receiving the action" },
        { word: "it", partOfSpeech: "pronoun", definition: "one thing, animal or idea receiving the action" },
        { word: "us", partOfSpeech: "pronoun", definition: "the speaker and others receiving the action" },
        { word: "them", partOfSpeech: "pronoun", definition: "more than one person, animal or thing receiving the action" },
      ]),
      H("Subjects act, objects receive"),
      T(
        "Look at this sentence: “The boy kicks the ball.” The boy does the action. The ball receives it. Now replace both nouns: “He kicks it.” He is the subject. It is the object. The subject goes before the verb. The object goes after it.",
      ),
      {
        type: "definition",
        term: "object pronoun",
        partOfSpeech: "grammar word",
        definition:
          "An object pronoun receives the action of the verb or follows a preposition: me, you, him, her, it, us, them.",
        example: {
          english: "I see him.",
          translation: "him receives the action of see.",
        },
      },
      TB(
        "Subject and object — seven pairs",
        ["Subject (before the verb)", "Object (after the verb or a preposition)"],
        [
          ["I", "me"],
          ["you", "you"],
          ["he", "him"],
          ["she", "her"],
          ["it", "it"],
          ["we", "us"],
          ["they", "them"],
        ],
        "Two of the seven never change: you and it look the same in both jobs.",
      ),
      AU(
        "Listen: subject then object",
        "I ... me. he ... him. she ... her. we ... us. they ... them.",
        0.85,
      ),
      AU(
        "Listen: pronouns are small in speech",
        "She calls me. I see him. We help them. Come with us.",
        0.9,
      ),
      ST("Use an object pronoun in three steps", [
        {
          title: "Step 1 — Find the receiver",
          text: "Read the verb and ask whom? or what? The answer is the object.",
          examples: [
            { english: "She calls her grandmother. → calls whom?", note: "The receiver is her grandmother." },
          ],
        },
        {
          title: "Step 2 — Choose the object form",
          text: "Change the receiver to an object pronoun. One girl is her. One boy is him. More than one is them.",
          examples: [
            { english: "her grandmother → her", note: "One woman receiving the call → her." },
            { english: "the boys → them", note: "More than one receiver → them." },
          ],
        },
        {
          title: "Step 3 — Place it after the verb or the preposition",
          text: "The object pronoun stands right after the verb. After a preposition — with, for, to, at — it takes the same object form.",
          examples: [
            { english: "She calls her every day.", note: "Object form after the verb calls." },
            { english: "Sit with us.", note: "After the preposition with, use us." },
          ],
        },
      ]),
      GR(
        "After a verb or a preposition, use the object form",
        "Object pronouns follow verbs (call me) and prepositions (with me). Prepositions never take subject pronouns.",
        [
          { english: "I know him.", translation: "him follows the verb know." },
          { english: "This gift is for her.", translation: "her follows the preposition for." },
          { english: "We walk to school with them.", translation: "them follows the preposition with." },
        ],
        [
          "You and it never change: “I see you.” “You see me.” — same words, two jobs.",
        ],
      ),
      EXD(
        "Object pronouns in real life",
        [
          { english: "My sister calls me every morning.", note: "The speaker receives the call → me.", domain: "family" },
          { english: "The teacher helps us in class.", note: "The whole group receives the help → us.", domain: "education" },
          { english: "I see him at the shop every Friday.", note: "One male friend receives the seeing → him.", domain: "shopping" },
          { english: "Please wait for me!", note: "After the preposition for → me.", domain: "everyday" },
          { english: "She shares her food with them.", note: "More than one friend receives → them.", domain: "food" },
          { english: "The bus takes us to the city.", note: "The passengers receive the ride → us.", domain: "travel" },
          { english: "Send her a message tonight.", note: "Commands take object pronouns too.", domain: "technology" },
          { english: "Our coach trains them after school.", note: "The players receive the training → them.", domain: "sport" },
          { english: "The doctor listens to him carefully.", note: "After the preposition to → him.", domain: "health" },
        ],
        "Nine sentences — the receiver always comes after the verb or the little word.",
      ),
      US(
        [
          {
            situation: "Meeting a friend’s family",
            example: "“This is my mother. She makes wonderful food — come and eat with us.”",
            note: "Us includes the speaker and the family.",
          },
          {
            situation: "In the classroom",
            example: "“I don’t understand. Can you help me?”",
            note: "Ask for help with me after the verb help.",
          },
          {
            situation: "Saying goodbye",
            example: "“Call me tonight!” “Yes, I will call you.”",
            note: "Both speakers use object pronouns after call.",
          },
          {
            situation: "Sharing at the table",
            example: "“This apple is for you.” “Thank you! And this one is for her.”",
            note: "For takes an object pronoun.",
          },
          {
            situation: "At the bus stop",
            example: "“The bus is coming. Look at it!”",
            note: "Things receive actions too — it after at.",
          },
        ],
        "Object pronouns in daily life",
        "Small words, big work: receivers appear in every conversation.",
      ),
      DL(
        "The new student",
        "A new student joins the class. Miss Ali introduces her.",
        [
          ["Miss Ali", "Class, this is Hana. She is new. Please help her."],
          ["Omar", "Welcome, Hana! Sit with us. We sit near the window."],
          ["Hana", "Thank you! My old school was small. The teachers there knew me well."],
          ["Sara", "Our teacher is kind. She always listens to us."],
          ["Hana", "That is good. And can you show me the books?"],
          ["Omar", "Of course! I bring them to you every morning."],
          ["Hana", "Thanks! I like this school already."],
        ],
      ),
      CMP(
        "she vs her",
        ["she (subject)", "her (object)"],
        [
          ["Job", "Does the action: she calls", "Receives the action: call her"],
          ["Position", "Before the verb", "After the verb or a preposition"],
          ["Example", "“She is my sister.”", "“I see her at school.”"],
          ["The classic error", "“Her is my sister.” — wrong", "“I see she at school.” — wrong"],
        ],
        {
          intro: "Same person, two different words. The job in the sentence decides the word.",
          verdict:
            "Before the verb → she. After the verb or a little word like for and with → her.",
        },
      ),
      MS(
        [
          [
            "Her is my sister.",
            "She is my sister.",
            "The subject of the sentence takes she. Her is an object form.",
          ],
          [
            "I see she at school.",
            "I see her at school.",
            "After the verb see, the receiver takes the object form her.",
          ],
          [
            "This gift is for I.",
            "This gift is for me.",
            "Prepositions like for take object pronouns: for me.",
          ],
          [
            "We help they after class.",
            "We help them after class.",
            "The receivers of help are them — the object form.",
          ],
          [
            "Call I tonight.",
            "Call me tonight.",
            "Commands still put the receiver after the verb: call me.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "Small words, small sounds",
        "In natural speech, object pronouns are weak and quick. The verb carries the beat, and the pronoun rides behind it. Say each audio sentence two times: slowly first, then fast like real speech. Your ear will learn to catch the little word after the verb.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Bilal. My friends call me Bil. My grandmother lives with us. I visit her every evening. She tells me stories, and I listen to them. My little sister listens too. My parents watch us and smile. Our family is small, but our evenings are full.",
          task: "Read the text two times. Then say every object pronoun you find in it.",
        },
        writing: {
          task: "Write four sentences about people you know. Use an object pronoun after the verb in each one.",
          guide: ["I call ______ every day.", "I help ______ at home.", "I visit ______ on Friday.", "I listen to ______."],
          model: "I call my grandmother every day. I help her in the kitchen.",
        },
        listening: {
          script:
            "Please help me. This bag is heavy. Thank you! Now come with us. We drink tea with our teacher. She makes it for us every day.",
          task: "Listen and count the object pronouns you hear.",
        },
        speaking: {
          task: "Ask a partner three questions with object pronouns. Answer with full sentences.",
          frames: [
            "Do you know Omar? — Yes, I know ______.",
            "Who calls you at night? — My ______ calls ______.",
            "Who helps you? — My ______ helps ______.",
          ],
          checklist: [
            "I asked three questions.",
            "My pronouns came after verbs.",
            "I used her, him and them correctly.",
          ],
        },
      }),
      LSP(
        [
          gls("English word order is subject, verb, object."),
          gls("object pronoun"),
          gls("me"),
          gls("him"),
          gls("her"),
          gls("us"),
          gls("them"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Seven object pronouns receive actions: me, you, him, her, it, us, them.",
        "They stand after the verb: “She calls me.”",
        "They also stand after prepositions: “Sit with us.” “This is for him.”",
        "You and it never change between the two jobs.",
        "She does the action; her receives it. The same person, two different words.",
      ]),
      RV(
        [
          {
            question: "Find the object: “She reads a book.”",
            options: ["She", "reads", "a book"],
            correctIndex: 2,
            explanation: "The object receives the action of reading — the book is read.",
            from: "Chapter 09 · Lesson 2",
          },
          {
            question: "Which word order is correct English?",
            options: ["Object verb subject", "Subject verb object", "Verb subject object"],
            correctIndex: 1,
            explanation: "English sentences run subject, verb, object — the pattern from the sentence chapter.",
            from: "Chapter 08 · Lesson 5",
          },
          {
            question: "“The book is on the table.” What is “on”?",
            options: ["A verb", "A place word", "A name"],
            correctIndex: 1,
            explanation: "On tells you where the book is — one of the place words from the vocabulary chapter.",
            from: "Chapter 06 · Lesson 5",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Complete: “She calls ___ every morning.”",
            [
              ["a", "I"],
              ["b", "me"],
              ["c", "my"],
            ],
            "b",
            fb(
              "me",
              "The receiver of the call comes after the verb — the object form me.",
              "I is a subject; my shows ownership — neither works after calls.",
            ),
            { skill: "grammar", hints: ["The word after the verb receives the action."] },
          ),
          FB(
            "Complete the sentence.",
            "This gift is for ___.",
            ["her"],
            fb(
              "her",
              "After the preposition for, use the object form her for one woman.",
              "She is a subject — it cannot follow for.",
            ),
            { skill: "grammar", hints: ["Look at the little word before the blank — it needs a receiver."] },
          ),
          MATCH(
            "Match each subject pronoun to its object partner.",
            [
              ["s1", "I"],
              ["s2", "he"],
              ["s3", "we"],
              ["s4", "they"],
            ],
            [
              ["o1", "him"],
              ["o2", "them"],
              ["o3", "me"],
              ["o4", "us"],
            ],
            [
              ["s1", "o3"],
              ["s2", "o1"],
              ["s3", "o4"],
              ["s4", "o2"],
            ],
            fb(
              "I → me, he → him, we → us, they → them",
              "Each subject pronoun has one object partner — learn them as pairs.",
            ),
            { skill: "grammar", hints: ["Say each pair out loud: one word acts, the other receives."] },
          ),
          LIS(
            "Listen and answer.",
            "We help them after school.",
            "Who receives the help?",
            ["them", "the students", "We help them."],
            fb(
              "them",
              "You heard them — the receivers of the help.",
              "The helpers are we; the receivers are them.",
            ),
            { skill: "listening", hints: ["Listen for the small word after the verb."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          CORR(
            "Find and correct the mistake.",
            "I see she at the market.",
            ["I see her at the market."],
            fb(
              "I see her at the market.",
              "After the verb see, one woman becomes her.",
              "She is a subject pronoun — it stands before verbs.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "Please sit with us.",
            fb(
              "Please sit with us",
              "Please can start the sentence; the preposition with takes us after it.",
              "Us never stands before the verb.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My brother calls me every night.",
            ["My brother calls me every night."],
            fb(
              "My brother calls me every night.",
              "The speaker receives the calls — me after calls.",
              "The subject form would be wrong here: the speaker is receiving, not doing.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "Her is my teacher."],
              ["b", "She is my teacher."],
              ["c", "Is her my teacher."],
            ],
            "b",
            fb(
              "She is my teacher.",
              "The subject before the verb is takes she.",
              "Her receives actions — it cannot be the subject of the sentence.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Two sides of one sentence",
      instructions:
        "Write five sentences about people in your life. Each sentence needs a subject pronoun AND an object pronoun. Example: “She calls me every day.” “We visit them on Sunday.”",
      minWords: 20,
      maxWords: 70,
    },
    homework: [
      "Say the seven pairs from memory: I–me, you–you, he–him, she–her, it–it, we–us, they–them.",
      "Find five object pronouns in any text you read today. Say the verb in front of each one.",
      "Tell a family member three true sentences with us and them.",
    ],
  },

  // =========================================================================
  // Lesson 3 — Possessive Adjectives
  // =========================================================================
  {
    slug: "ch-11-l-03",
    minutes: 25,
    description:
      "My, your, his, her, its, our, their — the seven ownership words that stand before a noun. Learn the owner rule for his and her, and the apostrophe trap of its and it’s.",
    outcomes: [
      "Match every subject pronoun with its possessive adjective",
      "Put possessive adjectives before nouns: “my book”, “their house”",
      "Choose his or her by the owner, never by the thing",
      "Tell its and it’s apart — the apostrophe trap",
    ],
    blocks: [
      LI(
        "You can already say “This is my mother.” Now learn the whole family of ownership words: my, your, his, her, its, our, their. They always stand before a noun. One rule runs the lesson: the owner decides the word — not the thing owned.",
        [
          "You know that adjectives go before nouns in English (Chapter 07 · Lesson 4).",
          "You can make plural nouns: two books, three cities (Chapter 10 · Lesson 2).",
          "You know the seven subject pronouns and their partners (Lessons 1–2).",
        ],
      ),
      vocGlossary("The seven possessive adjectives", [
        { word: "my", partOfSpeech: "grammar word", definition: "belongs to the speaker" },
        { word: "your", partOfSpeech: "grammar word", definition: "belongs to the listener" },
        { word: "his", partOfSpeech: "grammar word", definition: "belongs to one male" },
        { word: "her", partOfSpeech: "grammar word", definition: "belongs to one female" },
        { word: "its", partOfSpeech: "grammar word", definition: "belongs to one thing or animal" },
        { word: "our", partOfSpeech: "grammar word", definition: "belongs to the speaker and others" },
        { word: "their", partOfSpeech: "grammar word", definition: "belongs to more than one person" },
      ]),
      H("Whose is it?"),
      T(
        "People own things. Books, bags, houses, phones — everything has an owner. English shows the owner with one small word before the noun: my book, your bag, his phone. Ask the question with whose: “Whose book is this?” — “It is my book.”",
      ),
      {
        type: "definition",
        term: "possessive adjective",
        partOfSpeech: "grammar word",
        definition:
          "A possessive adjective stands before a noun and shows who owns it: my, your, his, her, its, our, their.",
        example: {
          english: "This is my pen.",
          translation: "my shows the pen belongs to the speaker.",
        },
      },
      TB(
        "Pronoun to possessive — seven pairs",
        ["Subject pronoun", "Possessive adjective", "Example"],
        [
          ["I", "my", "my book"],
          ["you", "your", "your bag"],
          ["he", "his", "his phone"],
          ["she", "her", "her keys"],
          ["it", "its", "its colour"],
          ["we", "our", "our house"],
          ["they", "their", "their children"],
        ],
        "The possessive word comes immediately before the noun — no a, no the, no of.",
      ),
      AU(
        "Listen: the seven ownership words",
        "my book. your bag. his phone. her keys. its colour. our house. their children.",
        0.85,
      ),
      AU(
        "Listen: whose is it?",
        "Whose pen is this? It is my pen. Whose bag is that? It is her bag. Our house is small. Their car is new.",
        0.9,
      ),
      ST("Show who owns it in three steps", [
        {
          title: "Step 1 — Find the owner",
          text: "Ask: whose thing is it? The owner can be the speaker, the listener, or any other person or thing.",
          examples: [
            { english: "the book of Sara → the owner is Sara", note: "One woman owns the book." },
          ],
        },
        {
          title: "Step 2 — Choose the matching word",
          text: "The owner picks the word. One woman owner → her. One man owner → his. The speaker → my. Do not look at the thing — look at the owner.",
          examples: [
            { english: "Sara → her book", note: "Sara is a woman, so her — even if the book is about football." },
            { english: "Omar → his book", note: "Omar is a man, so his — even if the book is pink." },
          ],
        },
        {
          title: "Step 3 — Put it before the noun",
          text: "Say the possessive word, then the noun. Never add of, and never add a or the between them.",
          examples: [
            { english: "Her book is new.", note: "her + noun, nothing between." },
            { english: "Their house is big.", note: "their + noun — the same pattern for every owner." },
          ],
        },
      ]),
      GR(
        "The owner decides — his and her",
        "Choose his or her by the OWNER, not by the thing owned. A man’s daughter is his daughter. A woman’s son is her son.",
        [
          { english: "Ali loves his daughter.", translation: "Ali is the owner — one man → his." },
          { english: "Sara loves her son.", translation: "Sara is the owner — one woman → her." },
          { english: "My mother and her brother live together.", translation: "her brother = the brother of my mother." },
        ],
        [
          "Urdu and Hindi use one word for his and her. English checks the owner first — train this habit early.",
        ],
      ),
      EXD(
        "Possessive adjectives in real life",
        [
          { english: "My school bag is heavy today.", note: "The speaker owns the bag → my before bag.", domain: "education" },
          { english: "Our dog sleeps in its basket.", note: "The family owns the dog; the dog owns the basket → its.", domain: "home" },
          { english: "Her phone is new, but his phone is old.", note: "Two owners, two words — the phones do not matter.", domain: "technology" },
          { english: "Their kitchen smells of bread.", note: "More than one owner → their.", domain: "food" },
          { english: "The team plays its first game on Friday.", note: "One team — a thing — owns the game → its.", domain: "sport" },
          { english: "My father washes his car every Sunday.", note: "The father owns the car → his.", domain: "family" },
          { english: "Your city is beautiful!", note: "The listener owns the city → your.", domain: "travel" },
          { english: "The shop sells their bread early.", note: "The bakers own the bread → their.", domain: "shopping" },
          { english: "The doctor sees her patients in the morning.", note: "One woman doctor owns the visit time → her.", domain: "health" },
        ],
        "Nine sentences — every one answers the question whose?",
      ),
      US(
        [
          {
            situation: "Showing a family photo",
            example: "“This is my brother. His name is Omar. His wife is a teacher.”",
            note: "Whose name? The brother’s — his.",
          },
          {
            situation: "In the classroom",
            example: "“Open your books, please. Close your notebooks.”",
            note: "The teacher speaks to the listeners → your.",
          },
          {
            situation: "Buying food",
            example: "“Your bread is ready.” “Thank you! And my milk?”",
            note: "Shop talk is full of your and my.",
          },
          {
            situation: "Visiting friends",
            example: "“Your house is lovely. Is this your garden?”",
            note: "Polite compliments use your before every noun.",
          },
          {
            situation: "At the clinic",
            example: "“The dog hurt its leg. Its owner is worried.”",
            note: "Animals and things take its — no apostrophe.",
          },
        ],
        "Ownership words in daily life",
        "My, your, his and her show who owns something — the most social words in English.",
      ),
      DL(
        "Whose bag is this?",
        "After class, Sara finds a bag under a chair.",
        [
          ["Sara", "Miss Ali! Look at this bag. Whose bag is it?"],
          ["Miss Ali", "I don’t know. It is not your bag, Sara. Your bag is green."],
          ["Omar", "Is it Hana’s bag? Her bag is blue."],
          ["Sara", "No, wait. Look inside. There is a book with a name on it."],
          ["Omar", "It says “Bilal”. It’s his bag! His books are heavy — he carries them every day."],
          ["Miss Ali", "Bilal! Come here, please. Your friends found your bag."],
          ["Bilal", "Oh, thank you! My mother makes this bag for me. I am so happy!"],
        ],
      ),
      CMP(
        "its vs it’s",
        ["its (possessive — no apostrophe)", "it’s (it is — with apostrophe)"],
        [
          ["Meaning", "Shows ownership: the thing belongs to it", "Short for it is or it has"],
          ["Test", "Say “belonging to it” — does the sentence still work?", "Say “it is” — does the sentence still work?"],
          ["Example", "“The dog eats its food.”", "“It’s cold today.” = “It is cold today.”"],
          ["The trap", "Apostrophes do not make ownership here", "The apostrophe means a missing letter — nothing more"],
        ],
        {
          intro:
            "One apostrophe changes everything. This is the most common spelling trap in English writing.",
          verdict:
            "Ownership → its. It is → it’s. When in doubt, say the sentence with it is — if it works, use the apostrophe.",
        },
      ),
      MS(
        [
          [
            "She is sister of my.",
            "She is my sister.",
            "English puts my before the noun — never “of my” after it.",
          ],
          [
            "Maria loves his son.",
            "Maria loves her son.",
            "The owner is Maria, a woman → her. The son being a boy does not matter.",
          ],
          [
            "The dog eats it’s food.",
            "The dog eats its food.",
            "It’s means it is. Ownership takes its, with no apostrophe.",
          ],
          [
            "They family is big.",
            "Their family is big.",
            "Before a noun, they becomes their.",
          ],
          [
            "We house is small.",
            "Our house is small.",
            "Before a noun, we becomes our.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "One word for his — hers comes later",
        "His does double work: “his book” (before a noun) and “This book is his” (alone). The other ownership words change when they stand alone — mine, yours, hers. You will meet them in the next lesson.",
      ),
      W(
        "Never write my’s, her’s or their’s",
        "Possessive adjectives never take apostrophes. My’s, her’s, their’s and your’s are not English words. Write my book, her keys, their house. Keep apostrophes away from these seven words.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "My name is Sara. Our family is small. My father is a cook. His food is famous in our street. My mother is a teacher. Her school is near our house. My brother is five. His toys are everywhere — in our kitchen, under my bed, behind their big chair. I love our loud, happy home.",
          task: "Read the text two times. Then say every ownership word you find in it.",
        },
        writing: {
          task: "Write six sentences about things your family owns. Use six different possessive adjectives.",
          guide: ["My ______ is ______.", "Her / His ______ is ______.", "Our ______ is ______."],
          model: "My bag is black. His phone is old. Our kitchen is small.",
        },
        listening: {
          script:
            "This is our classroom. My desk is near the window. Her desk is near the door. Their books are on the table. Its windows are big.",
          task: "Listen and count the ownership words you hear.",
        },
        speaking: {
          task: "Play a memory game with a partner. Say one sentence about a thing in the room and its owner. Your partner repeats it and adds one more.",
          frames: ["This is my ______.", "That is your ______.", "That is his / her ______."],
          checklist: [
            "I used five different ownership words.",
            "The word stood before the noun.",
            "I chose his and her by the owner.",
          ],
        },
      }),
      LSP(
        [
          gls("My, your, his and her show who owns something."),
          gls("possessive adjective"),
          gls("my"),
          gls("your"),
          gls("his"),
          gls("her"),
          gls("its"),
          gls("our"),
          gls("their"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Seven possessive adjectives stand before nouns: my, your, his, her, its, our, their.",
        "The owner decides the word: Maria’s son is her son; Ali’s daughter is his daughter.",
        "Never put a or the after them: my book, not the my book.",
        "Its has no apostrophe. It’s means it is.",
        "Ask about ownership with whose: “Whose pen is this?” — “It is my pen.”",
      ]),
      RV(
        [
          {
            question: "Where does an adjective stand in English?",
            options: ["After the noun", "Before the noun", "Either place"],
            correctIndex: 1,
            explanation: "Adjectives go before nouns — a red apple, a big city. Possessive words do the same.",
            from: "Chapter 07 · Lesson 4",
          },
          {
            question: "What is the plural of “child”?",
            options: ["childs", "children", "childes"],
            correctIndex: 1,
            explanation: "Child is irregular: one child, two children — from the noun chapter.",
            from: "Chapter 10 · Lesson 3",
          },
          {
            question: "Which sentence has an object after the verb?",
            options: ["The baby sleeps.", "She reads a book.", "It is cold."],
            correctIndex: 1,
            explanation: "Reads acts on a book — the book receives the action. Sleeps and is take no object.",
            from: "Chapter 09 · Lesson 2",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Omar is a boy. Which word goes before “sister” when the sister belongs to Omar?",
            [
              ["a", "his"],
              ["b", "her"],
              ["c", "its"],
            ],
            "a",
            fb(
              "his",
              "Omar is the owner — one man. The owner decides: his sister.",
              "Her needs a woman owner; its needs a thing or animal owner.",
            ),
            { skill: "grammar", hints: ["Ask: who is the owner — a man, a woman or a thing?"] },
          ),
          FB(
            "Complete the sentence.",
            "We live in ___ house.",
            ["our"],
            fb(
              "our",
              "Before a noun, we becomes our: our house.",
              "We is a subject pronoun — it cannot stand before a noun.",
            ),
            { skill: "grammar", hints: ["The word is the partner of we, and it stands before a noun."] },
          ),
          MATCH(
            "Match each subject pronoun to its ownership word.",
            [
              ["o1", "I"],
              ["o2", "she"],
              ["o3", "we"],
              ["o4", "they"],
            ],
            [
              ["w1", "their"],
              ["w2", "my"],
              ["w3", "our"],
              ["w4", "her"],
            ],
            [
              ["o1", "w2"],
              ["o2", "w4"],
              ["o3", "w3"],
              ["o4", "w1"],
            ],
            fb(
              "I → my, she → her, we → our, they → their",
              "Every subject pronoun has one ownership partner before nouns.",
            ),
            { skill: "grammar", hints: ["Each doer has one ownership word — learn them as families."] },
          ),
          LIS(
            "Listen and answer.",
            "Her phone is new.",
            "Who owns the phone?",
            ["a woman", "a girl", "her"],
            fb(
              "A woman",
              "Her tells you the owner is one woman.",
              "A man owner would use a different word; more than one owner would too.",
            ),
            { skill: "listening", hints: ["Listen to the first word — it names the owner."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          CORR(
            "Find and correct the mistake.",
            "The cat drinks it’s milk.",
            ["The cat drinks its milk."],
            fb(
              "The cat drinks its milk.",
              "The milk belongs to the cat — ownership takes its, with no apostrophe.",
              "It’s means it is: that would say “it is milk”.",
            ),
            { skill: "grammar" },
          ),
          REORD(
            "Make the sentence.",
            "Their house is very big.",
            fb(
              "Their house is very big",
              "The ownership word stands immediately before the noun.",
              "Their never stands alone — it always needs a noun after it.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "My father drives his car to work.",
            ["My father drives his car to work."],
            fb(
              "My father drives his car to work.",
              "My opens the sentence; the car belongs to the father, a man.",
              "The owner of the car is the father — not the speaker.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "She is sister of my."],
              ["b", "She is my sister."],
              ["c", "She is sister my."],
            ],
            "b",
            fb(
              "She is my sister.",
              "My stands before the noun sister — English never says “of my” here.",
              "“Sister of my” copies the pattern of another language; English puts the owner word first.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My things, their things",
      instructions:
        "Write six sentences about things that belong to people. Use six different possessive adjectives. Example: “My bag is black. Her phone is new. Our kitchen is small.”",
      minWords: 18,
      maxWords: 60,
    },
    homework: [
      "Walk through one room of your home. Say five sentences about who owns what: “This is my bed. That is her chair.”",
      "Write its and it’s in one true sentence each. Say both sentences out loud.",
      "Ask a family member “Whose is this?” about five objects. Answer with the right ownership word.",
    ],
  },

  // =========================================================================
  // Lesson 4 — Possessive Pronouns and Demonstratives
  // =========================================================================
  {
    slug: "ch-11-l-04",
    minutes: 30,
    description:
      "Ownership without a noun — mine, yours, hers, theirs — and the pointing words this, that, these, those. Learn what stands alone, and how English points by distance and number.",
    outcomes: [
      "Use possessive pronouns alone: “The red bag is mine.”",
      "Choose my + noun or mine alone, every time",
      "Point with this, that, these, those by distance and number",
      "Match demonstratives with is and are: “This is…”, “These are…”",
    ],
    blocks: [
      LI(
        "Lesson 3 put ownership words before nouns: my book, her bag. This lesson takes the noun away: my book becomes mine. Then you learn to point: this, that, these, those. Distance and number decide the word — near or far, one or many.",
        [
          "You can count nouns and make plurals: one book, two books (Chapter 10 · Lesson 2).",
          "You can ask “Who is this?” about people in photos (Chapter 06 · Lesson 1).",
          "You know the seven possessive adjectives (Lesson 3).",
        ],
      ),
      vocGlossary("Possessive pronouns — ownership alone", [
        { word: "mine", partOfSpeech: "pronoun", definition: "the thing that belongs to the speaker" },
        { word: "yours", partOfSpeech: "pronoun", definition: "the thing that belongs to the listener" },
        { word: "his", partOfSpeech: "pronoun", definition: "the thing that belongs to one man" },
        { word: "hers", partOfSpeech: "pronoun", definition: "the thing that belongs to one woman" },
        { word: "theirs", partOfSpeech: "pronoun", definition: "the thing that belongs to more than one person" },
      ]),
      vocGlossary("Demonstratives — the pointing words", [
        { word: "this", partOfSpeech: "grammar word", definition: "one thing near the speaker" },
        { word: "that", partOfSpeech: "grammar word", definition: "one thing far from the speaker" },
        { word: "these", partOfSpeech: "grammar word", definition: "two or more things near the speaker" },
        { word: "those", partOfSpeech: "grammar word", definition: "two or more things far from the speaker" },
      ]),
      H("Mine stands alone"),
      T(
        "When both speakers know the noun, English drops it. “Is this your phone? — No, it’s mine.” Mine means my phone — but the word phone is gone. Possessive pronouns never take a noun after them: never “mine phone”.",
      ),
      {
        type: "definition",
        term: "possessive pronoun",
        partOfSpeech: "grammar word",
        definition:
          "A possessive pronoun stands alone and shows who owns something: mine, yours, his, hers, ours, theirs.",
        example: {
          english: "This book is mine.",
          translation: "mine = my book — the noun is not repeated.",
        },
      },
      TB(
        "Possessive adjective + noun → possessive pronoun",
        ["With the noun", "Without the noun"],
        [
          ["my book", "mine"],
          ["your car", "yours"],
          ["his bag", "his"],
          ["her phone", "hers"],
          ["its food", "— (almost never alone)"],
          ["our house", "ours"],
          ["their children", "theirs"],
        ],
        "Two of these need care: his stays his, and its almost never stands alone.",
      ),
      TB(
        "The four pointing words",
        ["Number", "Near (in my hand)", "Far (over there)"],
        [
          ["One", "this — this apple", "that — that apple"],
          ["Two or more", "these — these apples", "those — those apples"],
        ],
        "Distance first, then number: near or far, one or many.",
      ),
      AU(
        "Listen: mine, yours, hers",
        "This book is mine. That car is yours. This phone is hers. Those bags are theirs.",
        0.85,
      ),
      AU(
        "Listen: pointing near and far",
        "This is my pen. That is your book. These are our keys. Those are their bags.",
        0.9,
      ),
      ST("Point and claim in four steps", [
        {
          title: "Step 1 — Ask: near or far?",
          text: "Can you touch the thing? Use this or these. Is it over there, across the room? Use that or those.",
          examples: [
            { english: "(book in your hand) this book", note: "Near — you hold it." },
            { english: "(picture on the far wall) that picture", note: "Far — you point across the room." },
          ],
        },
        {
          title: "Step 2 — Ask: one or many?",
          text: "One thing near → this. Many things near → these. One thing far → that. Many things far → those.",
          examples: [
            { english: "one key → this key", note: "One, near." },
            { english: "two keys → these keys", note: "More than one, near." },
          ],
        },
        {
          title: "Step 3 — Match is or are",
          text: "This and that mean one, so they take is. These and those mean many, so they take are.",
          examples: [
            { english: "This is my seat.", note: "One thing → is." },
            { english: "Those are her shoes.", note: "Many things → are." },
          ],
        },
        {
          title: "Step 4 — Claim it with a possessive pronoun",
          text: "When someone asks whose, answer with a possessive pronoun alone: mine, yours, hers, theirs.",
          examples: [
            { english: "Whose umbrella is this? — It’s mine.", note: "mine = my umbrella." },
            { english: "Are those your books? — Yes, they’re ours.", note: "ours = our books." },
          ],
        },
      ]),
      GR(
        "Two tests for the pointing words",
        "Test one — distance: touch it → this or these; point across the room → that or those. Test two — number: one → this or that; many → these or those.",
        [
          { english: "This apple is red; that apple is green.", translation: "One apple near, one apple far." },
          { english: "These shoes are mine; those shoes are yours.", translation: "Many shoes near, many shoes far." },
          { english: "Those birds fly to the city every winter.", translation: "Many birds, far away." },
        ],
        [
          "On the phone, this introduces yourself: “Hello, this is Sara.” The distance idea does not apply there — it is a fixed phrase.",
        ],
      ),
      EXD(
        "Pointing and claiming in real life",
        [
          { english: "Whose phone is this? — It’s hers.", note: "One phone, near — then ownership alone with hers.", domain: "everyday" },
          { english: "These are my books, and those are yours.", note: "Near books with these; far books with those.", domain: "education" },
          { english: "That is our house, and this is our garden.", note: "Point across the street with that; point down with this.", domain: "home" },
          { english: "These apples are two for one dollar!", note: "Market sellers point at near fruit with these.", domain: "shopping" },
          { english: "I like this photo. It’s mine, not theirs.", note: "Claim your own things with a word that stands alone.", domain: "social" },
          { english: "Those buses go to the old city.", note: "Far buses, more than one → those.", domain: "travel" },
          { english: "This keyboard is new; that one is old.", note: "One near, one far — one replaces the repeated noun.", domain: "technology" },
          { english: "Are these your forks? — No, ours are in the kitchen.", note: "Ours stands alone: it means our forks.", domain: "food" },
          { english: "That team always wins. Their fans are happy, and the cup is theirs.", note: "Far team with that; theirs claims the cup.", domain: "sport" },
        ],
        "Nine sentences — point first, claim second.",
      ),
      US(
        [
          {
            situation: "In a shop",
            example: "“How much is this?” “Which one?” “This blue shirt.” “That one is five dollars.”",
            note: "Shops run on pointing words.",
          },
          {
            situation: "Lost and found",
            example: "“Is this your umbrella?” “No, mine is black. Is it his?”",
            note: "Lost-property talk uses this plus possessive pronouns.",
          },
          {
            situation: "Sharing food",
            example: "“These biscuits are yours. Those are for the children.”",
            note: "Near plate versus far plate — these and those.",
          },
          {
            situation: "In class",
            example: "“Look at this sentence on the board. Now look at that picture on the wall.”",
            note: "Teachers point near and far all day.",
          },
          {
            situation: "On the phone",
            example: "“Hello, this is Omar. Is that you, Sara?”",
            note: "On the phone, this is the caller and that is the listener.",
          },
        ],
        "Pointing words in daily life",
        "This and that point at things — with number built in.",
      ),
      DL(
        "Whose is this jacket?",
        "Two friends find a jacket after class.",
        [
          ["Leo", "Ana, look at this jacket. Is it yours?"],
          ["Ana", "No, mine is blue. Ask Tom — I think it’s his."],
          ["Leo", "Tom! Is this jacket yours?"],
          ["Tom", "Yes! Thank you! And those books are mine too."],
          ["Ana", "Here you are. These gloves are also yours, I think."],
          ["Tom", "You’re right. My pockets are full — my hands need them!"],
        ],
      ),
      CMP(
        "my book vs mine",
        ["my + noun (possessive adjective)", "mine (possessive pronoun)"],
        [
          ["What follows", "A noun must follow: my book", "Nothing follows — it stands alone"],
          ["Example", "“This is my phone.”", "“This phone is mine.”"],
          ["Wrong version", "“This is mine phone.” — wrong", "“This phone is my.” — wrong"],
          ["When to use it", "First time you name the thing", "Both speakers know the thing already"],
        ],
        {
          intro: "Same owner, two shapes. The noun decides which one you need.",
          verdict: "Noun after it → my. No noun after it → mine.",
        },
      ),
      CMP(
        "this / these vs that / those",
        ["Near: this, these", "Far: that, those"],
        [
          ["One thing", "this — “This chair is mine.”", "that — “That chair is yours.”"],
          ["Many things", "these — “These chairs are new.”", "those — “Those chairs are old.”"],
          ["The verb", "this takes is; these take are", "that takes is; those take are"],
          ["Memory tip", "Reach out and touch it", "The T words are disTant"],
        ],
        {
          intro: "English builds the pointing words from two questions: how far, and how many.",
          verdict:
            "Near and one → this. Near and many → these. Far and one → that. Far and many → those.",
        },
      ),
      MS(
        [
          [
            "This books are new.",
            "These books are new.",
            "Books is more than one — the near pointing word becomes these.",
          ],
          [
            "The red bag is mine’s.",
            "The red bag is mine.",
            "Mine never takes ’s. It already means my bag.",
          ],
          [
            "Is this pen your?",
            "Is this pen yours?",
            "Without a noun after it, the word is yours.",
          ],
          [
            "Those is my shoes.",
            "Those are my shoes.",
            "Those means many things, and many things take are.",
          ],
          [
            "These are my books. That books are yours.",
            "These are my books. Those books are yours.",
            "Far and many → those.",
          ],
        ],
        "Common beginner mistakes",
      ),
      N(
        "One word in Urdu and Hindi, four in English",
        "Urdu and Hindi use one word for this and these, and one word for that and those. English asks a second question: how many? Train the habit — count first, then point.",
      ),
      FS({
        title: "Practise all four skills",
        reading: {
          text: "Look at this photo of my family. This tall man is my father. That small woman next to him is my grandmother. These two boys are my brothers. Their names are Ali and Omar. Those flowers behind them are from our garden. The photo is old, but the garden is still beautiful. It is my favourite photo.",
          task: "Read the text two times. Then say the four pointing words you find in it.",
        },
        writing: {
          task: "Write six sentences about things near you and far from you. Use this, that, these and those — then claim two things with mine or yours.",
          guide: ["This is my ______.", "That is ______.", "These are ______.", "Those are ______.", "The ______ is mine."],
          model: "This is my pen. That is the door. These are my books. Those are windows.",
        },
        listening: {
          script:
            "This is my bag. That is your chair. These are our keys. Those are their coats. The red coat is hers.",
          task: "Listen and count the pointing words you hear.",
        },
        speaking: {
          task: "Stand in a room with a partner. Point at four things — two near, two far. Name each one with the right pointing word, then say who owns it.",
          frames: [
            "This is ______. It is mine / yours / hers.",
            "These are ______.",
            "That is ______.",
            "Those are ______.",
          ],
          checklist: [
            "I used all four pointing words.",
            "I matched is and are.",
            "I claimed one thing with a possessive pronoun.",
          ],
        },
      }),
      LSP(
        [
          gls("This and that point at things."),
          gls("possessive pronoun"),
          gls("demonstrative"),
          gls("mine"),
          gls("yours"),
          gls("hers"),
          gls("theirs"),
          gls("this"),
          gls("that"),
          gls("these"),
          gls("those"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Possessive pronouns stand alone: mine, yours, his, hers, ours, theirs.",
        "My book → mine. If a noun follows, use my; if nothing follows, use mine.",
        "This and these point near. That and those point far.",
        "This and that mean one and take is. These and those mean many and take are.",
        "Ask whose to get a possessive pronoun: “Whose is this? — It’s mine.”",
      ]),
      RV(
        [
          {
            question: "What is the plural of “city”?",
            options: ["citys", "cities", "cityes"],
            correctIndex: 1,
            explanation: "Consonant plus y becomes -ies: one city, two cities — from the plural lesson.",
            from: "Chapter 10 · Lesson 2",
          },
          {
            question: "“My mother’s brother is my ______.”",
            options: ["uncle", "cousin", "grandfather"],
            correctIndex: 0,
            explanation: "Your mother’s brother is your uncle — a family word from the vocabulary chapter.",
            from: "Chapter 06 · Lesson 1",
          },
          {
            question: "How do you ask about a person in a photo?",
            options: ["What is this?", "Who is this?", "Whose is this?"],
            correctIndex: 1,
            explanation: "People take who: “Who is this? — This is my grandfather.”",
            from: "Chapter 06 · Lesson 1",
          },
        ],
        { title: "Look back — check your base", intro: "Three quick questions from earlier chapters." },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "The shopkeeper holds one shirt near you. Which word do you use?",
            [
              ["a", "that"],
              ["b", "this"],
              ["c", "these"],
            ],
            "b",
            fb(
              "this",
              "One thing, near the speaker → this.",
              "That is far; these is near but many.",
            ),
            { skill: "grammar", hints: ["Ask two questions: how far, and how many?"] },
          ),
          FB(
            "Complete the sentence.",
            "These books are ___.",
            ["mine"],
            fb(
              "mine",
              "Without a noun after it, the ownership word is mine.",
              "My needs a noun after it: my books.",
            ),
            { skill: "grammar", hints: ["No noun comes after the blank — the word stands alone."] },
          ),
          MATCH(
            "Match each pair to its possessive pronoun.",
            [
              ["p1", "my bag"],
              ["p2", "her phone"],
              ["p3", "our house"],
              ["p4", "their car"],
            ],
            [
              ["r1", "hers"],
              ["r2", "theirs"],
              ["r3", "mine"],
              ["r4", "ours"],
            ],
            [
              ["p1", "r3"],
              ["p2", "r1"],
              ["p3", "r4"],
              ["p4", "r2"],
            ],
            fb(
              "my bag → mine, her phone → hers, our house → ours, their car → theirs",
              "Drop the noun and the word changes shape — his is the only one that stays the same.",
            ),
            { skill: "grammar", hints: ["Say each pair without the noun — the word changes shape."] },
          ),
          LIS(
            "Listen and answer.",
            "Those are her shoes.",
            "Are the shoes near or far?",
            ["far", "far away", "not near"],
            fb(
              "Far",
              "Those points at things far from the speaker.",
              "This and these are for near things.",
            ),
            { skill: "listening", hints: ["The pointing word at the start tells you the distance."] },
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
            "These are my new shoes.",
            fb(
              "These are my new shoes",
              "Many things near → these, and they take are.",
              "This would mean one shoe only.",
            ),
            { skill: "grammar" },
          ),
          CORR(
            "Find and correct the mistake.",
            "That shoes are very old.",
            ["Those shoes are very old."],
            fb(
              "Those shoes are very old.",
              "Shoes is more than one, so the far word becomes those.",
              "That is for one thing far away.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Is this jacket yours?",
            ["Is this jacket yours?"],
            fb(
              "Is this jacket yours?",
              "One jacket near → this; ownership alone → yours.",
              "Your would need a noun after it.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which sentence is correct?",
            [
              ["a", "This books are mine."],
              ["b", "These books are mine."],
              ["c", "These books are my."],
            ],
            "b",
            fb(
              "These books are mine.",
              "Books is many, so the near word is these — and mine stands alone.",
              "This is for one thing; my needs a noun after it.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "Point and claim",
      instructions:
        "Write six sentences: four with pointing words (this, that, these, those — one each) and two with possessive pronouns. Example: “This is my pen. Those are her shoes. The red bag is mine.”",
      minWords: 18,
      maxWords: 65,
    },
    homework: [
      "Walk around one room. Point at four things — two near, two far — and say the right word for each.",
      "Ask “Whose is this?” about three objects at home. Answer with mine, yours, hers or theirs.",
      "Draw two shelves — one near, one far. Draw two things on each. Label them with this, that, these and those.",
    ],
  },

  // =========================================================================
  // Lesson 5 — Pronoun Power and Chapter Review
  // =========================================================================
  {
    slug: "ch-11-l-05",
    minutes: 30,
    description:
      "All five pronoun families in one place: subject, object, possessive adjective, possessive pronoun and demonstrative. Watch the whole system work in one conversation — then fix the classic mistakes and take the Chapter 11 review.",
    outcomes: [
      "Use all five pronoun families in one conversation",
      "Build each family from one pronoun: I → me → my → mine",
      "Self-correct the five classic pronoun mistakes",
      "Answer the Chapter 11 review questions",
    ],
    blocks: [
      LI(
        "You have collected five families of small words: subject pronouns, object pronouns, possessive adjectives, possessive pronouns and demonstratives. This lesson puts them together. Watch one conversation use them all. Then check yourself with the Chapter 11 review.",
        [
          "You can find the subject and the object of a sentence (Chapter 09 · Lessons 1–2).",
          "You know English word order: subject, verb, object (Chapter 08 · Lesson 5).",
          "You have met all five families this chapter (Lessons 1–4).",
        ],
      ),
      vocGlossary("The grammar words of this chapter", [
        { word: "pronoun", partOfSpeech: "grammar word", definition: "a small word that replaces a noun" },
        { word: "subject pronoun", partOfSpeech: "grammar word", definition: "does the action: I, he, she, we, they" },
        { word: "object pronoun", partOfSpeech: "grammar word", definition: "receives the action: me, him, her, us, them" },
        { word: "possessive adjective", partOfSpeech: "grammar word", definition: "shows ownership before a noun: my, her, our, their" },
        { word: "possessive pronoun", partOfSpeech: "grammar word", definition: "shows ownership alone: mine, hers, theirs" },
        { word: "demonstrative", partOfSpeech: "grammar word", definition: "points by distance and number: this, that, these, those" },
      ]),
      H("One person, four forms"),
      T(
        "Take one man: Ali. Before the verb, he is he: “He reads.” After the verb, he is him: “I see him.” Before his things, he is his: “his book”. Alone with his things, he is still his: “This book is his.” Learn each person as a family of forms, not as separate words.",
      ),
      TB(
        "The whole system — seven people, four jobs",
        ["Person", "Subject", "Object", "Possessive + noun", "Alone"],
        [
          ["the speaker", "I", "me", "my book", "mine"],
          ["the listener", "you", "you", "your book", "yours"],
          ["one man", "he", "him", "his book", "his"],
          ["one woman", "she", "her", "her book", "hers"],
          ["one thing", "it", "it", "its colour", "—"],
          ["speaker + others", "we", "us", "our book", "ours"],
          ["more than one", "they", "them", "their book", "theirs"],
        ],
        "Read one row aloud every day for a week — the system becomes automatic.",
      ),
      AU(
        "Listen: the families together",
        "I ... me ... my ... mine. he ... him ... his. she ... her ... her ... hers. we ... us ... our ... ours. they ... them ... their ... theirs.",
        0.85,
      ),
      AU(
        "Listen: one conversation, every family",
        "She calls me every day. I see him at school. This is our classroom. That book is hers. Those bags are theirs.",
        0.9,
      ),
      ST("Build a pronoun sentence in four steps", [
        {
          title: "Step 1 — Choose the job",
          text: "Ask what the small word does. Does it act? Does it receive? Does it own? Does it point?",
          examples: [
            { english: "The boy sees the girls.", note: "Find the doer, the receivers, and any owners." },
          ],
        },
        {
          title: "Step 2 — Pick the family form",
          text: "The doer is he or she. The receivers are them. The owner word comes before a noun; alone, it becomes theirs.",
          examples: [
            { english: "The boy sees the girls. → He sees them.", note: "Subject first, object after the verb." },
          ],
        },
        {
          title: "Step 3 — Check the verb agreement",
          text: "He, she and it take is, has and the -s verb. Plural subjects take are, have and the plain verb.",
          examples: [
            { english: "She is here. They are here.", note: "One person → is; many → are." },
          ],
        },
        {
          title: "Step 4 — Check the position",
          text: "Possessive adjectives need a noun after them. Possessive pronouns stand alone. Object pronouns stand after verbs and prepositions.",
          examples: [
            { english: "This is her pen. The pen is hers.", note: "her + noun first, then hers alone." },
          ],
        },
      ]),
      GR(
        "One test for each family",
        "Subject test: who does it? Object test: verb + whom or what? Possessive test: whose is it? Demonstrative test: near or far, one or many?",
        [
          { english: "She writes to us.", translation: "she does the writing; us receives it." },
          { english: "Their dog licks my hand.", translation: "their and my show two owners before nouns." },
          { english: "These keys are mine.", translation: "these points near and many; mine claims them alone." },
        ],
        [
          "When two pronouns stand together after a preposition, both take the object form: “between you and me”, “for him and her”.",
        ],
      ),
      EXD(
        "The whole system in real life",
        [
          { english: "My sister and I cook together. We make our dinner.", note: "Two people become we; the dinner becomes our dinner.", domain: "family" },
          { english: "The teacher shows them their results.", note: "them receives the showing; their sits before results.", domain: "education" },
          { english: "I love this city. Its streets are full of light.", note: "this points near; its has no apostrophe.", domain: "travel" },
          { english: "That shop sells their bread and our milk.", note: "Far shop with that; two owners before nouns.", domain: "shopping" },
          { english: "She sends me her photos every week.", note: "she acts, me receives, her owns the photos.", domain: "technology" },
          { english: "These chairs are ours; those are theirs.", note: "Near and many, far and many — then two claims alone.", domain: "work" },
          { english: "We watch them play. Their team is better than ours.", note: "Four forms of they in two sentences.", domain: "sport" },
          { english: "The doctor tells him his results are good.", note: "him receives the news; his results belong to him.", domain: "health" },
          { english: "I give the cat its food. It eats and sleeps.", note: "its for the cat’s food; it for the cat itself.", domain: "everyday" },
        ],
        "Nine sentences — the whole pronoun system at work.",
      ),
      US(
        [
          {
            situation: "A phone call to a friend",
            example: "“Hi! It’s me. Is that you, Sara? This is my new number — save it!”",
            note: "Phone calls use the small words in fixed, natural ways.",
          },
          {
            situation: "Family dinner",
            example: "“Give them their plates, please. Mine is the small one.”",
            note: "One sentence: object, possessive adjective, possessive pronoun.",
          },
          {
            situation: "In the library",
            example: "“These books are mine. Those two are hers — she asked me to hold them.”",
            note: "Pointing plus claiming in one breath.",
          },
          {
            situation: "At work",
            example: "“Our team is small, but our ideas are big. Their team copies us!”",
            note: "Our and their compare two teams.",
          },
          {
            situation: "Helping a lost child",
            example: "“Don’t cry. What is your name? Where is your mother? We can call her.”",
            note: "Kind words need ownership words: your name, your mother.",
          },
        ],
        "Pronoun power in daily life",
        "Fluent speakers choose these forms in half a second — practise the tests until you do too.",
      ),
      DL(
        "The school bag",
        "End of the school day. Sara, Omar and Hana look for their things.",
        [
          ["Omar", "Whose bag is this? It is not mine — my bag is black."],
          ["Sara", "It’s hers. Hana! This bag is yours!"],
          ["Hana", "Oh, thank you! My books are in it. I need them tonight."],
          ["Omar", "And these gloves? Whose are they?"],
          ["Sara", "They’re mine. My hands are always cold."],
          ["Hana", "Look at that poster! Those colours are beautiful."],
          ["Sara", "The art class made it. Their teacher helps us every Friday."],
          ["Omar", "She is great. We love her classes!"],
        ],
      ),
      CMP(
        "Pronouns vs possessives",
        ["Pronouns (I, me, he, him)", "Possessives (my, mine, his)"],
        [
          ["Main job", "Replace a person or a thing", "Show who owns something"],
          ["Position", "Subject: before the verb. Object: after it", "Adjective: before a noun. Pronoun: alone"],
          ["Example", "“He helps me.”", "“His help makes my day.”"],
          ["Test", "Who does it? Who receives it?", "Whose is it?"],
        ],
        {
          intro:
            "Two systems, one small word: his sits in both. Most pronouns change shape when they own things: I → my → mine.",
          verdict: "Person doing or receiving → pronoun. Something owned → possessive.",
        },
      ),
      TB(
        "Self-correction table — the five classics",
        ["Mistake", "Correction", "Why"],
        [
          ["Me and Ana go.", "Ana and I go.", "Subjects use subject pronouns — and the other person comes first."],
          ["Her is my sister.", "She is my sister.", "Before the verb, the subject form is she."],
          ["She is sister of my.", "She is my sister.", "Ownership stands before the noun — no of."],
          ["The book is mine’s.", "The book is mine.", "Possessive pronouns never take ’s."],
          ["This books are new.", "These books are new.", "Many things near → these, with are."],
        ],
        "Say each correction out loud three times — your ear will start to catch the mistakes.",
      ),
      MS(
        [
          [
            "Me and my brother plays football.",
            "My brother and I play football.",
            "The subject uses I — and two subjects take the plain verb play.",
          ],
          [
            "Her car is fast, but my is old.",
            "Her car is fast, but mine is old.",
            "Alone, my becomes mine.",
          ],
          [
            "Its a big city, and it airport is new.",
            "It’s a big city, and its airport is new.",
            "It’s means it is; its shows the airport belongs to the city.",
          ],
          [
            "Those woman is my aunt.",
            "That woman is my aunt.",
            "One woman, far away → that.",
          ],
          [
            "We see they at the market every Sunday.",
            "We see them at the market every Sunday.",
            "The receivers of see are them — the object form.",
          ],
        ],
        "Common beginner mistakes",
      ),
      H("Chapter 11 review"),
      T(
        "Five lessons, five families, one system. You started with I, you, he, she, it, we, they. You end by pointing, claiming and choosing forms by their job. Take the review questions below, then finish with the final task.",
      ),
      FS({
        title: "Practise all four skills — chapter review",
        reading: {
          text: "My name is Omar, and this is my family. We live in a small house. My father is a bus driver. His bus is old, but he loves it. My mother works in a school near our house. Her students love her. My sister Hana is five. Her toys are everywhere — under my bed, behind our sofa, on their shelf. Every evening, we sit together. Mother makes our food, Father tells us his stories, and Hana gives me her biggest smile. Those evenings are mine forever.",
          task: "Read the text two times. Then find one subject pronoun, one object pronoun, one possessive adjective and one possessive pronoun in it.",
        },
        writing: {
          task: "Write six sentences about your family and your things. Use one subject pronoun, one object pronoun, one possessive adjective, one possessive pronoun and one pointing word.",
          guide: [
            "I ______ every day.",
            "My ______ helps me.",
            "This / These ______ is / are ______.",
            "The ______ is mine / hers / theirs.",
          ],
          model: "I read every night. My sister helps me. These books are old, but that lamp is new. The small room is mine.",
        },
        listening: {
          script:
            "This is my room. That is my brother’s bed. These are my books, and those are his. Our room is small, but its window is big. My mother calls us from the kitchen. We go to her.",
          task: "Listen and count the possessive words you hear.",
        },
        speaking: {
          task: "Describe a room you know well for one minute. Point at things near and far. Say who owns what. Use at least one word from each family.",
          frames: [
            "This is ______. It is mine / his / hers.",
            "That is ______.",
            "These / Those are ______.",
            "My ______ always helps me.",
          ],
          checklist: [
            "I used one subject and one object pronoun.",
            "I showed ownership two ways — before a noun and alone.",
            "I pointed with all four pointing words.",
          ],
        },
      }),
      LSP(
        [
          gls("Pronouns replace nouns so we do not repeat them."),
          gls("My, your, his and her show who owns something."),
          gls("This and that point at things."),
          gls("subject pronoun"),
          gls("object pronoun"),
          gls("possessive adjective"),
          gls("possessive pronoun"),
          gls("demonstrative"),
        ],
        "Language support — اردو / हिन्दी",
      ),
      SM([
        "Five families, one system: subject pronouns act, object pronouns receive, possessives own, demonstratives point.",
        "Every person has a family of forms: I → me → my → mine.",
        "Position decides the form: before the verb, after the verb, before a noun, or alone.",
        "He, she and it take is and the -s verb; you, we and they take are and the plain verb.",
        "Point by distance and number: this, that, these, those.",
        "Watch the five classics: “me and Ana”, “her is my sister”, “sister of my”, “mine’s”, “this books”.",
      ]),
      RV(
        [
          {
            question: "Which pronoun replaces “my mother” in “My mother cooks dinner”?",
            options: ["She", "Her", "It"],
            correctIndex: 0,
            explanation: "The subject of the sentence is one woman → she — Lesson 1’s big rule.",
            from: "Chapter 11 · Lesson 1",
          },
          {
            question: "Complete: “This gift is for ______.”",
            options: ["I", "me", "my"],
            correctIndex: 1,
            explanation: "After the preposition for, use the object form — Lesson 2’s position rule.",
            from: "Chapter 11 · Lesson 2",
          },
          {
            question: "Maria is a woman, and her son is Ali. Which word shows the owner?",
            options: ["his", "her", "their"],
            correctIndex: 1,
            explanation: "The owner is Maria, a woman → her — the owner rule from Lesson 3.",
            from: "Chapter 11 · Lesson 3",
          },
          {
            question: "Complete: “______ books are new.” (many books, near you)",
            options: ["This", "That", "These"],
            correctIndex: 2,
            explanation: "Near and many → these — the pointing system from Lesson 4.",
            from: "Chapter 11 · Lesson 4",
          },
          {
            question: "What is the plural of “child”?",
            options: ["childs", "children", "childrens"],
            correctIndex: 1,
            explanation: "One child, two children — the irregular plural from the noun chapter.",
            from: "Chapter 10 · Lesson 3",
          },
        ],
        {
          title: "Chapter 11 review — the pronoun system",
          intro: "Five questions: one from each lesson, plus one from before the chapter.",
        },
      ),
    ],
    practiceSets: [
      {
        variant: "guided",
        title: "Guided practice",
        note: "Every question has a hint. Use it when you are not sure.",
        questions: [
          MCQ(
            "Complete: “Ali and ___ go to school together.”",
            [
              ["a", "me"],
              ["b", "I"],
              ["c", "my"],
            ],
            "b",
            fb(
              "I",
              "The subject of go takes I — and the other person comes first.",
              "Me is an object form; my shows ownership.",
            ),
            { skill: "grammar", hints: ["Who does the action — a doer or a receiver?"] },
          ),
          FB(
            "Complete the sentence.",
            "My father helps ___ every day.",
            ["us"],
            fb(
              "us",
              "The receivers of help come after the verb — we becomes us.",
              "We is a subject form; it cannot follow helps.",
            ),
            { skill: "grammar", hints: ["The word after the verb receives the help."] },
          ),
          MATCH(
            "Match each subject pronoun to its ownership word.",
            [
              ["s1", "he"],
              ["s2", "she"],
              ["s3", "we"],
              ["s4", "they"],
            ],
            [
              ["p1", "her"],
              ["p2", "their"],
              ["p3", "his"],
              ["p4", "our"],
            ],
            [
              ["s1", "p3"],
              ["s2", "p1"],
              ["s3", "p4"],
              ["s4", "p2"],
            ],
            fb(
              "he → his, she → her, we → our, they → their",
              "Every subject pronoun has one ownership partner before nouns.",
            ),
            { skill: "grammar", hints: ["Think of each pair as a family: the doer and its ownership word."] },
          ),
          LIS(
            "Listen and answer.",
            "This bag is mine, and those keys are hers.",
            "Who owns the keys?",
            ["a woman", "a girl", "her"],
            fb(
              "A woman",
              "Hers claims the keys for one woman.",
              "Mine would claim them for the speaker.",
            ),
            { skill: "listening", hints: ["Listen for the claiming word at the very end."] },
          ),
        ],
      },
      {
        variant: "independent",
        title: "Independent practice",
        note: "No hints this time — trust what you have learned.",
        questions: [
          RD(
            "Read and answer.",
            "Breakfast at home",
            "My family is small. My mother is a nurse. Her work starts early, so my father makes our breakfast. He cooks eggs, and I make the tea. My little sister says his eggs are better than mine. We eat together, and then they go to work and we go to school.",
            "Who makes better eggs?",
            [
              ["a", "the mother"],
              ["b", "the father"],
              ["c", "the sister"],
            ],
            "b",
            fb(
              "the father",
              "The text says his eggs are better than mine — his refers to the father’s eggs.",
              "The mother starts work early; the sister only judges the eggs.",
            ),
            { skill: "reading" },
          ),
          CORR(
            "Find and correct the mistake.",
            "Them are my friends.",
            ["They are my friends."],
            fb(
              "They are my friends.",
              "Before the verb, the subject form is they.",
              "Them receives actions — it comes after verbs.",
            ),
            { skill: "grammar" },
          ),
          DICT(
            "Listen and write the sentence you hear.",
            "Those shoes are hers, not mine.",
            ["Those shoes are hers, not mine."],
            fb(
              "Those shoes are hers, not mine.",
              "Far and many → those; then two claims standing alone: hers and mine.",
              "This and these are for near things.",
            ),
            { skill: "listening" },
          ),
          MCQ(
            "Which sentence uses every family correctly?",
            [
              ["a", "She gives me my book, and this one is hers."],
              ["b", "Her gives I my book, and this one is hers."],
              ["c", "She gives me mine book, and these one is hers."],
            ],
            "a",
            fb(
              "She gives me my book, and this one is hers.",
              "Subject she, object me, possessive adjective my, pointing this, possessive pronoun hers — all in one sentence.",
              "The other two break the system: “Her gives I” and “mine book”.",
            ),
            { skill: "grammar" },
          ),
        ],
      },
    ],
    assignment: {
      title: "My belongings report",
      instructions:
        "Write six sentences about things you own and things your family or friends own. Use at least four different possessive forms and one pointing word. Example: “My bag is old. This phone is mine. Her bicycle is new, and that scooter is theirs.”",
      minWords: 20,
      maxWords: 70,
    },
    homework: [
      "Copy the whole-system table from this lesson. Say one row aloud every day this week.",
      "Record yourself speaking for one minute about your family. Listen for the five classic mistakes.",
      "Find a short text in English. Circle every pronoun and possessive you can find. Name the family of each one.",
    ],
  },
];
