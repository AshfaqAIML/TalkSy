/**
 * Core English Programme — Batch 03 (Chapters 09–12, Level A1).
 *
 * Beginner English: sentence structure, nouns and articles, pronouns and
 * possessives, and the three great verbs be, have and do.
 */

import { chapter } from "../types";
import type { ChapterSpec } from "../types";
import { AU, CORR, DL, DICT, GR, EX, FB, H, LIS, MCQ, MATCH, N, REORD, TB, T, VOC, W, fb } from "../types";

export const batch03: ChapterSpec[] = [
  chapter("a1", {
    number: 9,
    title: "Understanding Sentence Structure",
    description:
      "The anatomy of English sentences, properly named: subject, predicate, verb, object and complement. You learn the patterns that generate hundreds of correct sentences and the word-order rules that keep adjectives and adverbs in their places.",
    objectives: [
      "Name and find the subject and predicate of any simple sentence",
      "Identify verbs, objects and complements",
      "Apply the five basic sentence patterns with your own words",
      "Place adjectives and adverbs in correct positions",
    ],
    prerequisites: ["CH-08"],
    hours: 3,
    skills: ["grammar", "writing"],
    strands: ["writing", "reading", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on sentence parts and word order. Assignment: write one sentence for each of three patterns and label the parts.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 3,
    module: "a1-sentence-building",
    lessons: [
      {
        title: "Subject and Predicate",
        blurb: "Every sentence splits into two halves: who it is about, and what is said about them.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "reading"],
        strands: ["reading", "writing"],
        outcomes: [
          "Split a sentence into subject and predicate",
          "Write a predicate for a given subject",
          "Explain the difference between subject and object",
        ],
        blocks: [
          H("Two halves"),
          T(
            "The subject is who or what the sentence is about. The predicate is everything else — what is said about the subject, always containing the verb. 'My brother | drinks tea in the morning': subject | predicate.",
          ),
          TB("Subjects and predicates", ["Sentence", "Subject", "Predicate"], [
            ["The cat sleeps.", "The cat", "sleeps"],
            ["My mother cooks rice.", "My mother", "cooks rice"],
            ["Ana and Leo play tennis.", "Ana and Leo", "play tennis"],
          ]),
          EX("You try it", [
            ["The dog | runs in the garden.", "El perro | corre en el jardín."],
            ["We | are students.", "Nosotros | somos estudiantes."],
          ]),
          AU("Listen: two halves", "The cat ... sleeps. Subject ... predicate.", 0.85),
          N("The line moves", "The subject is not always short: 'My big brother with the black dog' is one subject. Ask 'who or what?' and take the whole answer."),
        ],
        assignment: {
          title: "Split and label",
          instructions:
            "Write four sentences and draw a vertical line between subject and predicate in each.",
          minWords: 12,
          maxWords: 50,
        },
        homework: ["Split three sentences from anything you read today.", "Write two new predicates for the subject 'My friend'."],
      },
      {
        title: "Verbs and Objects",
        blurb: "Some verbs act on something; others stand alone. Learn direct objects and verbs that need them.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Identify the direct object of a verb",
          "Know which common verbs take objects and which do not",
          "Write transitive and intransitive sentences",
        ],
        blocks: [
          H("Receiving the action"),
          T(
            "The object receives the action of the verb. In 'She reads a book', 'a book' is what gets read. Verbs that need an object are transitive (read, eat, want); verbs that stand alone are intransitive (sleep, run, arrive).",
          ),
          TB("Two kinds of verbs", ["Transitive (needs an object)", "Intransitive (no object)"], [
            ["read a book, eat rice, want water", "sleep, run, arrive, smile"],
          ]),
          EX("Objects in action", [
            ["I drink milk. — object: milk", "Yo bebo leche."],
            ["The baby sleeps. — no object needed", "El bebé duerme."],
          ]),
          GR("Finding the object", "Ask the verb + 'what?' or 'who?'. If there is an answer, it is the object.", [["She calls her sister. → calls WHO? → her sister", "Ella llama a su hermana."]]),
          AU("Listen: with and without objects", "I read a book. I sleep. She eats an apple. She runs.", 0.85),
          W("Objects are not prepositional phrases", "'I run in the park' has no object — 'in the park' tells WHERE, not WHAT. Only 'verb + what/who' reveals true objects."),
        ],
        assignment: {
          title: "Transitive or not?",
          instructions:
            "Write five sentences: three with objects (label the object) and two without objects. Use verbs from this lesson.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Find three objects in sentences you read today.", "Test 'sleep' and 'eat': which needs an object?"],
      },
      {
        title: "Complements",
        blurb: "After 'be', sentences finish with a complement — the word that completes the meaning.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar"],
        strands: ["reading", "writing"],
        outcomes: [
          "Explain what a complement is",
          "Complete 'be' sentences with nouns and adjectives",
          "Tell complements apart from objects",
        ],
        blocks: [
          H("Completing the idea"),
          T(
            "After the verb 'be' (am, is, are) there is no action and no object. Instead, a complement completes the meaning: a noun ('She is a doctor') or an adjective ('She is happy'). The complement describes or identifies the subject.",
          ),
          GR(
            "The be-complement rule",
            "Subject + be + complement (noun or adjective). The complement tells you WHAT the subject is or HOW it is.",
            [
              ["I am a student.", "Soy estudiante."],
              ["The milk is cold.", "La leche está fría."],
              ["They are teachers.", "Ellos son profesores."],
            ],
          ),
          EX("Object vs complement", [
            ["She reads a book. (object — book receives 'reads')", "Ella lee un libro."],
            ["She is happy. (complement — happy describes 'she')", "Ella está feliz."],
          ]),
          AU("Listen: be + complement", "I am a student. He is tall. We are happy.", 0.85),
          N("A quick test", "Try reversing: 'a book reads her' is nonsense, so 'book' is an object. 'Happy is she' sounds poetic but the meaning survives — complements describe, objects are acted upon."),
        ],
        assignment: {
          title: "Complete the be",
          instructions:
            "Write six 'be' sentences: three with noun complements ('He is a teacher.') and three with adjective complements ('It is cold.').",
          minWords: 18,
          maxWords: 50,
        },
        homework: ["Write three true 'I am / I have / I like' sentences about yourself.", "Find two complements in anything you read."],
      },
      {
        title: "Word Order Rules",
        blurb: "Where adjectives, adverbs and time phrases sit — the traffic rules of English.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading"],
        outcomes: [
          "Place adjectives before nouns",
          "Place frequency adverbs correctly (before the main verb)",
          "Place time expressions at the beginning or end of a sentence",
        ],
        blocks: [
          H("The traffic rules"),
          TB("Position rules", ["Element", "Position", "Example"], [
            ["Adjective", "before its noun", "a small black cat"],
            ["Frequency adverb (always, never)", "before the main verb", "She always reads."],
            ["Time expression", "start or end of sentence", "In the morning, I run. / I run in the morning."],
            ["Where information", "usually at the end", "We eat in the kitchen."],
          ]),
          EX("Order in practice", [
            ["I always drink tea.", "Siempre bebo té."],
            ["She never eats meat.", "Ella nunca come carne."],
            ["We study English at school.", "Estudiamos inglés en la escuela."],
          ]),
          AU("Listen: the rules at work", "I always drink tea. She never eats meat. We study English at school.", 0.85),
          W("Adjective order preview", "When two adjectives share a noun, opinion comes before size: 'a nice big house', not 'a big nice house'. Full adjective order arrives in Chapter 15."),
        ],
        assignment: {
          title: "Traffic control",
          instructions:
            "Fix the word order in these sentences and write them correctly: 'I drink always coffee.' 'She eats in the kitchen rice.' 'We on Mondays study English.'",
          minWords: 15,
          maxWords: 50,
        },
        homework: ["Write three sentences about your routine using always, usually and never.", "Check the adverb position in each."],
      },
      {
        title: "Basic Sentence Patterns and Chapter Review",
        blurb: "Five reusable patterns that build most beginner English, then the Chapter 09 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "reading", "communication"],
        outcomes: [
          "Produce sentences in the patterns SV, SVO, SVC and SVOO",
          "Choose the right pattern for an idea",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("The pattern toolbox"),
          TB("Five patterns", ["Pattern", "Structure", "Example"], [
            ["SV", "Subject + Verb", "The baby sleeps."],
            ["SVO", "Subject + Verb + Object", "I read books."],
            ["SVC", "Subject + be + Complement", "She is a doctor."],
            ["SVOO", "Subject + Verb + Object1 + Object2", "He gives her flowers."],
            ["SV + place", "Subject + Verb + where", "We eat in the kitchen."],
          ]),
          EX("One idea, different patterns", [
            ["My brother (SV) works.", "Mi hermano trabaja."],
            ["My brother (SVO) sells cars.", "Mi hermano vende coches."],
            ["My brother (SVC) is a mechanic.", "Mi hermano es mecánico."],
          ]),
          AU("Listen: the patterns", "The baby sleeps. I read books. She is a doctor. He gives her flowers.", 0.85),
          H("Chapter 09 review"),
          T("Three questions on sentence anatomy, then the labelling task."),
        ],
        assignment: {
          title: "Pattern portfolio",
          instructions:
            "Write one sentence for each pattern — SV, SVO, SVC — about your family, and label the parts (subject, verb, object, complement).",
          minWords: 15,
          maxWords: 60,
        },
        questions: [
          MCQ(
            "In 'My father makes breakfast', which word is the OBJECT?",
            [["a", "My father"], ["b", "makes"], ["c", "breakfast"]],
            "c",
            fb("breakfast", "Ask: makes WHAT? — breakfast. The object receives the action.", "'My father' is the subject and 'makes' is the verb."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence follows the SVC pattern (be + complement)?",
            [["a", "She reads a book."], ["b", "She is a teacher."], ["c", "She runs fast."]],
            "b",
            fb("She is a teacher.", "SVC uses 'be' plus a noun or adjective complement. 'a teacher' completes the meaning.", "'reads a book' is SVO; 'runs fast' is SV with an adverb."),
            { skill: "grammar", difficulty: "easy" },
          ),
          REORD(
            "Put the words in the correct order.",
            "My sister always drinks coffee",
            fb("My sister always drinks coffee", "Frequency adverbs like 'always' go before the main verb.", "Subject + frequency adverb + verb + object."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a1", {
    number: 10,
    title: "Nouns and Articles",
    description:
      "The noun system of English: common vs proper nouns, singular and plural with all five plural endings, countability, and the three articles a, an and the — including the situations where no article at all is correct. By the end you choose articles automatically.",
    objectives: [
      "Distinguish common and proper nouns with correct capitals",
      "Form regular plurals (-s, -es, -ies, -ves) and use ten common irregular plurals",
      "Explain what makes a noun countable or uncountable",
      "Choose correctly between a, an, the and no article",
    ],
    prerequisites: ["CH-09"],
    hours: 3,
    skills: ["grammar", "vocabulary"],
    strands: ["vocabulary", "reading", "writing", "communication"],
    assessment:
      "Chapter review quiz: 3 questions on plurals and article choice. Assignment: write a shopping list with plurals and use each article once.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 3,
    module: "a1-sentence-building",
    lessons: [
      {
        title: "Common and Proper Nouns",
        blurb: "Cat or Cairo? General things take lowercase; specific names take capitals.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "writing"],
        strands: ["writing", "vocabulary"],
        outcomes: [
          "Define common and proper nouns",
          "Apply capital letters to proper nouns correctly",
          "Convert common nouns to proper nouns in context",
        ],
        blocks: [
          H("Two families of nouns"),
          T(
            "Common nouns name general things: city, girl, river, month. Proper nouns name ONE specific thing and take a capital letter: London, Sara, the Nile, March. Common = category; proper = member with a name.",
          ),
          TB("Common vs proper", ["Common (general)", "Proper (specific name)"], [
            ["city", "London, Madrid"],
            ["girl", "Sara, Priya"],
            ["month", "March, November"],
            ["language", "English, Spanish"],
          ]),
          EX("Capitals in sentences", [
            ["I live in a city. → I live in Mumbai.", "Vivo en una ciudad. → Vivo en Bombay."],
            ["Her birthday is in march. → in March", "Su cumpleaños es en marzo."],
          ]),
          AU("Listen: names take capitals", "city... London. month... March. Common nouns are general; proper nouns are names.", 0.85),
          N("Days, months, languages, nationalities", "All proper in English: Monday, July, English, Indian. This surprises speakers of many languages — write them with capitals always."),
        ],
        assignment: {
          title: "General or specific",
          instructions:
            "Write five pairs of common and proper nouns (like 'dog → Rex'), then use two proper nouns in full sentences.",
          minWords: 12,
          maxWords: 45,
        },
        homework: ["Find five proper nouns in anything you read today.", "Check their capital letters."],
      },
      {
        title: "Singular and Plural",
        blurb: "One cat, two cats — and the five spelling rules that cover almost every plural.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "writing", "reading"],
        outcomes: [
          "Form regular plurals with -s, -es, -ies and -ves",
          "Explain when a plural takes -es instead of -s",
          "Use plural nouns in sentences",
        ],
        blocks: [
          H("Making more than one"),
          TB("The five plural rules", ["Rule", "When", "Examples"], [
            ["+ s", "most nouns", "cat→cats, book→books"],
            ["+ es", "ends in s, x, z, ch, sh", "bus→buses, box→boxes, watch→watches"],
            ["y → ies", "consonant + y", "baby→babies, city→cities"],
            ["y → ys", "vowel + y", "boy→boys, day→days"],
            ["f/fe → ves", "some nouns", "leaf→leaves, knife→knives"],
          ]),
          EX("Plurals at work", [
            ["I have two brothers.", "Tengo dos hermanos."],
            ["Three buses pass my house.", "Tres autobuses pasan por mi casa."],
            ["The cities are big.", "Las ciudades son grandes."],
          ]),
          AU("Listen: singular to plural", "one cat, two cats. one bus, two buses. one baby, two babies.", 0.85),
          W("Say the -es", "'Buses' has two syllables: bus-es. Learners who write 'busses' usually never said the word out loud. Sound and spelling work together."),
        ],
        assignment: {
          title: "Plural practice",
          instructions:
            "Write the plural of these nouns and use three in sentences: book, watch, baby, day, box, city, leaf, girl.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Write five plural nouns you can see around you.", "Say each plural out loud."],
      },
      {
        title: "Irregular Plurals and Countable Nouns",
        blurb: "Children, men, feet, teeth — the plurals that break the rules, and what 'countable' means.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "vocabulary"],
        strands: ["vocabulary", "reading"],
        outcomes: [
          "Use ten high-frequency irregular plurals",
          "Explain what a countable noun is",
          "Use 'a/an' and numbers with countable nouns",
        ],
        blocks: [
          H("The rule-breakers"),
          TB("Ten irregular plurals to memorise", ["Singular", "Plural"], [
            ["man", "men"],
            ["woman", "women"],
            ["child", "children"],
            ["person", "people"],
            ["foot", "feet"],
            ["tooth", "teeth"],
            ["mouse", "mice"],
            ["fish", "fish"],
            ["sheep", "sheep"],
            ["knife / knives family already met", "—" ],
          ]),
          EX("Irregulars in sentences", [
            ["The children play in the park.", "Los niños juegan en el parque."],
            ["Three people are waiting.", "Tres personas están esperando."],
            ["My feet are cold.", "Tengo los pies fríos."],
          ]),
          AU("Listen: irregular plurals", "man, men. child, children. person, people. foot, feet.", 0.85),
          H("Countable nouns"),
          T(
            "A countable noun can be counted: one apple, two apples; a book, three books. Countable nouns have both singular and plural forms and can take 'a/an' or a number. (Uncountable nouns like milk and water come in Chapter 24.)",
          ),
          N("People is already plural", "'One people' is wrong: say 'one person, two people'. This is one of the most frequent beginner errors in English."),
        ],
        assignment: {
          title: "Irregular sentences",
          instructions:
            "Write five sentences using five different irregular plurals from the table, each with a number or quantity.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Write the singular and plural of the ten irregular nouns from memory.", "Use 'people' in two true sentences."],
      },
      {
        title: "Articles: A, An and The",
        blurb: "The three little words that sit in front of nouns — and how to pick the right one.",
        minutes: 30,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "reading"],
        outcomes: [
          "Choose between a and an based on sound",
          "Use the for specific things both speaker and listener know",
          "Recognise when no article is needed",
        ],
        blocks: [
          H("A, an and the"),
          GR(
            "The article rules",
            "Use 'a/an' for one non-specific countable noun (first mention). Use 'the' when both people know WHICH one. Use no article for plurals in general statements.",
            [
              ["I have a dog. The dog is black.", "Tengo un perro. El perro es negro."],
              ["She is an engineer.", "Ella es ingeniera."],
              ["I like books.", "Me gustan los libros (en general)."],
            ],
            ["'a/an' depends on SOUND, not spelling: 'a university' (yoo-), 'an hour' (the h is silent)."],
          ),
          TB("Choosing fast", ["Situation", "Article", "Example"], [
            ["First mention, one of many", "a / an", "I see a cat."],
            ["Both know which one", "the", "The cat is sleeping."],
            ["Plural in general", "—", "Cats sleep a lot."],
            ["Unique things", "the", "the sun, the moon"],
          ]),
          EX("A or an?", [
            ["an apple, an egg, an hour", "una manzana, un huevo, una hora"],
            ["a book, a cat, a university", "un libro, un gato, una universidad"],
          ]),
          AU("Listen: a, an, the", "I see a cat. The cat is black. I see an apple. The apple is red.", 0.85),
          W("Sound check, always", "Say the next word out loud: if it starts with a vowel SOUND, use 'an'. 'An hour' (silent h) but 'a house' (h pronounced)."),
        ],
        assignment: {
          title: "Article chooser",
          instructions:
            "Complete with a, an, the or nothing: '___ water is cold.' 'She has ___ orange.' 'I like ___ dogs.' '___ sun is hot.' 'He is ___ teacher.' Then write one sentence of your own for each article.",
          minWords: 15,
          maxWords: 60,
        },
        homework: ["Read any English text and circle every 'the'.", "Ask yourself why 'the' is there each time."],
      },
      {
        title: "Nouns in Real Sentences and Chapter Review",
        blurb: "Put nouns, plurals and articles together in everyday sentences, then take the Chapter 10 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "reading"],
        outcomes: [
          "Write correct sentences mixing plurals and articles",
          "Edit noun and article mistakes",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Nouns under pressure"),
          EX("Everyday sentences with the full system", [
            ["The children eat apples.", "Los niños comen manzanas."],
            ["A man is waiting at the bus stop.", "Un hombre espera en la parada de autobús."],
            ["I need two knives and a spoon.", "Necesito dos cuchillos y una cuchara."],
          ]),
          TB("Common fixes", ["Wrong", "Right", "Why"], [
            ["I have two cat.", "I have two cats.", "Numbers above one need a plural"],
            ["The London is big.", "London is big.", "City names take no article"],
            ["She is teacher.", "She is a teacher.", "Jobs need a/an"],
          ]),
          AU("Listen: noun sentences", "The children eat apples. A man is waiting at the bus stop.", 0.85),
          H("Chapter 10 review"),
          T("Three questions on plurals and articles, then the shopping list task."),
        ],
        assignment: {
          title: "The honest shopping list",
          instructions:
            "Write a shopping list with six plural items and three single items. Then write three sentences about the list using 'a', 'an' and 'the' correctly.",
          minWords: 18,
          maxWords: 60,
        },
        questions: [
          MCQ(
            "What is the plural of 'child'?",
            [["a", "childs"], ["b", "children"], ["c", "childrens"]],
            "b",
            fb("children", "'Child' has an irregular plural: children. Never 'childs' or 'childrens'.", "Irregular plurals must be memorised — there is no rule to follow."),
            { skill: "vocabulary", difficulty: "easy" },
          ),
          FB(
            "Complete with a or an: 'She is ___ engineer. He is ___ teacher.'",
            "She is ___ engineer. He is ___ teacher.",
            ["an engineer. He is a teacher"],
            fb(
              "an engineer, a teacher",
              "'Engineer' starts with a vowel sound (e-), so 'an'; 'teacher' starts with a consonant sound, so 'a'.",
              "Listen to the first SOUND of the next word, not the letter.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence is correct?",
            [["a", "I like the books."], ["b", "I like books."], ["c", "I like a books."]],
            "b",
            fb("I like books.", "General statements about plurals take no article.", "'The books' means specific books; 'a books' is impossible — 'a' is singular."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a1", {
    number: 11,
    title: "Pronouns and Possessives",
    description:
      "The complete beginner pronoun system: subject pronouns, object pronouns, possessive adjectives, possessive pronouns and demonstratives (this, that, these, those). You learn to point precisely and to show who owns what — without repeating nouns.",
    objectives: [
      "Use all seven subject pronouns and seven object pronouns correctly",
      "Choose between possessive adjectives (my) and possessive pronouns (mine)",
      "Point with this/that/these/those by distance and number",
      "Avoid the classic mistakes: 'me and John go', 'her is my sister'",
    ],
    prerequisites: ["CH-10"],
    hours: 3,
    skills: ["grammar", "speaking"],
    strands: ["communication", "speaking", "writing", "reading"],
    assessment:
      "Chapter review quiz: 3 questions on pronoun forms and possessives. Assignment: describe your belongings using five possessive forms.",
    completion:
      "Complete all 5 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 3,
    module: "a1-sentence-building",
    lessons: [
      {
        title: "Subject Pronouns",
        blurb: "I, you, he, she, it, we, they — the subjects of the English world.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking"],
        outcomes: [
          "List all seven subject pronouns",
          "Replace any subject noun with the right pronoun",
          "Avoid the double-subject mistake ('My mother she...')",
        ],
        blocks: [
          H("The seven subjects"),
          TB("Subject pronouns", ["Singular", "Plural"], [
            ["I (me, the speaker)", "we (speaker + others)"],
            ["you (the listener)", "you (several listeners)"],
            ["he / she / it (one male / one female / one thing)", "they (several people or things)"],
          ]),
          EX("Replacing subjects", [
            ["Sara reads. → She reads.", "Sara lee. → Ella lee."],
            ["The cats sleep. → They sleep.", "Los gatos duermen."],
            ["The book is new. → It is new.", "El libro es nuevo."],
          ]),
          GR("One subject only", "Never repeat the subject with a pronoun: NOT 'My mother she cooks' but 'My mother cooks' or 'She cooks'.", [["My father works. / He works.", "Mi padre trabaja. / Él trabaja."]]),
          AU("Listen: the seven", "I, you, he, she, it, we, they.", 0.85),
          N("Animals and countries", "Use 'it' for animals in general English, and for countries, machines and weather. 'My dog? It sleeps all day.'"),
        ],
        assignment: {
          title: "Pronoun replacement",
          instructions:
            "Write five sentences with noun subjects, then rewrite each with the correct pronoun.",
          minWords: 15,
          maxWords: 55,
        },
        homework: ["Say the seven pronouns from memory.", "Rewrite three sentences from a text with pronouns."],
      },
      {
        title: "Object Pronouns",
        blurb: "Me, you, him, her, it, us, them — who receives the action.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "reading"],
        outcomes: [
          "Use all seven object pronouns after verbs and prepositions",
          "Choose subject vs object pronouns correctly",
          "Fix 'her is my sister' type errors",
        ],
        blocks: [
          H("Subjects act, objects receive"),
          TB("Subject → object", ["Subject", "Object"], [
            ["I", "me"],
            ["you", "you"],
            ["he", "him"],
            ["she", "her"],
            ["it", "it"],
            ["we", "us"],
            ["they", "them"],
          ]),
          EX("Objects in sentences", [
            ["She calls me every day.", "Ella me llama cada día."],
            ["I see him at school.", "Lo veo en la escuela."],
            ["We help them.", "Les ayudamos."],
          ]),
          GR("Position rule", "Object pronouns go AFTER the verb or a preposition: 'with me', 'to him', 'for us'.", [["This gift is for her.", "Este regalo es para ella."]]),
          AU("Listen: subject then object", "I ... me. He ... him. She ... her. They ... them.", 0.85),
          W("Her = object only", "'Her is my sister' is wrong — the subject form is 'she'. And 'between you and I' is wrong too: prepositions take objects, so 'between you and me'."),
        ],
        assignment: {
          title: "Two-sided pronouns",
          instructions:
            "Write four sentences: two with subject pronouns first ('They play.') and two with object pronouns ('She knows us.'). Then write one sentence with a pronoun after a preposition.",
          minWords: 12,
          maxWords: 50,
        },
        homework: ["Convert the seven subjects to objects from memory.", "Find three object pronouns in any text."],
      },
      {
        title: "Possessive Adjectives",
        blurb: "My, your, his, her, its, our, their — the words that show ownership before a noun.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "writing"],
        strands: ["writing", "communication", "vocabulary"],
        outcomes: [
          "Match each pronoun with its possessive adjective",
          "Distinguish his vs her by owner, not by object",
          "Use its (no apostrophe) for things and animals",
        ],
        blocks: [
          H("Whose is it?"),
          TB("Possessive adjectives", ["Pronoun", "Possessive", "Example"], [
            ["I", "my", "my book"],
            ["you", "your", "your pen"],
            ["he", "his", "his car"],
            ["she", "her", "her bag"],
            ["it", "its", "its colour"],
            ["we", "our", "our house"],
            ["they", "their", "their children"],
          ]),
          EX("Ownership lines", [
            ["This is my phone.", "Este es mi teléfono."],
            ["Her brother is a teacher.", "Su hermano es profesor."],
            ["Our dog is small.", "Nuestro perro es pequeño."],
          ]),
          GR("His vs her: the owner decides", "The possessive matches the OWNER, not the thing owned: 'her son' (son of a woman), 'his daughter' (daughter of a man).", [["Maria loves her son. / John loves his son.", "María ama a su hijo. / Juan ama a su hijo."]]),
          AU("Listen: my, your, his, her", "my book, your pen, his car, her bag, our house, their children.", 0.85),
          W("Its vs it's", "'its' shows ownership; 'it's' means 'it is'. 'The dog eats its food' vs 'It's cold today.' Apostrophes do not make plurals or possessive adjectives."),
        ],
        assignment: {
          title: "My things, their things",
          instructions:
            "Write six sentences about belongings using six different possessive adjectives: 'My bag is black. Her phone is new...'",
          minWords: 18,
          maxWords: 55,
        },
        homework: ["Describe three objects and their owners with possessive adjectives.", "Write its and it's in one sentence each."],
      },
      {
        title: "Possessive Pronouns and Demonstratives",
        blurb: "Mine, yours, hers — ownership without a noun. Plus pointing words: this, that, these, those.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "reading"],
        outcomes: [
          "Use possessive pronouns to avoid repeating nouns",
          "Choose this/that/these/those by distance and number",
          "Point at and claim objects naturally",
        ],
        blocks: [
          H("Mine stands alone"),
          T(
            "Possessive pronouns replace 'possessive + noun' when the noun is already known: 'my book' becomes 'mine'. They never take a noun after them.",
          ),
          TB("Possessive pronouns", ["Possessive adjective + noun", "Possessive pronoun"], [
            ["my book", "mine"],
            ["your car", "yours"],
            ["his bag", "his"],
            ["her phone", "hers"],
            ["our house", "ours"],
            ["their ideas", "theirs"],
          ]),
          EX("Whose phone?", [
            ["Is this your phone? — No, it's hers.", "¿Es tu teléfono? — No, es suyo."],
            ["That idea is theirs.", "Esa idea es de ellos."],
          ]),
          H("Pointing words"),
          TB("Demonstratives", ["Near", "Far"], [
            ["this (one thing)", "that (one thing)"],
            ["these (several)", "those (several)"],
          ]),
          EX("Pointing in practice", [
            ["This apple is red; that apple is green.", "Esta manzana es roja; esa manzana es verde."],
            ["These shoes are mine; those are yours.", "Estos zapatos son míos; esos son tuyos."],
          ]),
          AU("Listen: pointing", "This is my pen. That is your book. These are our keys. Those are their bags.", 0.85),
          N("Memory shortcut", "Demonstratives with T (that, those) = disTant. This/these = close enough to touch."),
        ],
        assignment: {
          title: "Point and claim",
          instructions:
            "Write six sentences: three with possessive pronouns ('The red bag is mine.') and three with demonstratives ('Those books are new.').",
          minWords: 18,
          maxWords: 55,
        },
        homework: ["Point at four things near and far, saying this/that/these/those.", "Ask 'Whose...?' about two objects and answer with possessive pronouns."],
      },
      {
        title: "Pronoun Power and Chapter Review",
        blurb: "All five pronoun families in one conversation, then the Chapter 11 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Use all pronoun families in a natural conversation",
          "Self-correct the classic pronoun mistakes",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("One conversation, every form"),
          DL(
            "Whose is this?",
            "Two friends find a jacket after class.",
            [
              ["Leo", "Look at this jacket. Is it yours?"],
              ["Ana", "No, mine is blue. Ask Tom — I think it's his."],
              ["Leo", "Tom! Is this jacket yours?"],
              ["Tom", "Yes! Thank you! And those books are mine too."],
              ["Ana", "Here you are. We always help our friends!"],
            ],
          ),
          AU("Listen: the conversation again", "Is it yours? ... I think it's his. ... Is this jacket yours? ... Those books are mine.", 0.85),
          TB("Self-correction table", ["Mistake", "Correction", "Rule"], [
            ["Me and Ana go.", "Ana and I go.", "Subjects use subject pronouns"],
            ["Her is my sister.", "She is my sister.", "'Her' is an object form"],
            ["The book is mine's.", "The book is mine.", "Possessive pronouns never take 's"],
          ]),
          H("Chapter 11 review"),
          T("Three questions on pronouns and possessives, then the description task."),
        ],
        assignment: {
          title: "My belongings report",
          instructions:
            "Write six sentences about things you own and things friends or family own, using at least four different possessive forms and one demonstrative.",
          minWords: 20,
          maxWords: 70,
        },
        questions: [
          MCQ(
            "Complete: 'She calls ___ every morning.'",
            [["a", "I"], ["b", "me"], ["c", "my"]],
            "b",
            fb("me", "After a verb we need the object pronoun: she calls me.", "'I' is a subject; 'my' is possessive — neither works after 'calls'."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence is correct?",
            [["a", "This books are mine."], ["b", "These books are mine."], ["c", "These books are my."]],
            "b",
            fb("These books are mine.", "'These' matches the plural 'books', and 'mine' stands without a noun.", "'This' is singular; 'my' needs a noun after it."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MATCH(
            "Match each pronoun to its possessive adjective.",
            [["p1", "they"], ["p2", "she"], ["p3", "we"]],
            [["q1", "her"], ["q2", "their"], ["q3", "our"]],
            [["p1", "q2"], ["p2", "q1"], ["p3", "q3"]],
            fb("they → their, she → her, we → our", "Each subject pronoun has one possessive adjective partner."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),

  chapter("a1", {
    number: 12,
    title: "Be, Have and Do",
    description:
      "The three verbs that power English conversation: be (am/is/are, was/were), have (have/has) and do (do/does) — as main verbs and as helping verbs. You learn the forms, contractions, negatives and questions that make everyday English run.",
    objectives: [
      "Use am/is/are in affirmative, negative and contracted forms",
      "Use was/were for the past of be",
      "Use have/has correctly with all pronouns",
      "Use do/does as main verb and helping verb",
      "Build questions and negatives with all three verbs",
    ],
    prerequisites: ["CH-11"],
    hours: 3,
    skills: ["grammar", "speaking", "listening"],
    strands: ["communication", "speaking", "listening", "pronunciation"],
    assessment:
      "Chapter review quiz: 3 questions on be/have/do forms. Assignment: write a self-introduction using all three verbs.",
    completion:
      "Complete all 6 lessons, submit each writing assignment, and answer at least 2 of the 3 review questions correctly.",
    batch: 3,
    module: "a1-sentence-building",
    lessons: [
      {
        title: "Am, Is, Are: Affirmative",
        blurb: "The present of 'be' — the most used verb in English — with contractions.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "pronunciation"],
        outcomes: [
          "Match am/is/are with the correct pronouns",
          "Use contractions (I'm, she's, we're) naturally",
          "Introduce yourself with 'be' sentences",
        ],
        blocks: [
          H("The be machine"),
          TB("be in the present", ["Pronoun", "Full form", "Contraction"], [
            ["I", "am", "I'm"],
            ["you / we / they", "are", "you're / we're / they're"],
            ["he / she / it", "is", "he's / she's / it's"],
          ]),
          EX("Be in real sentences", [
            ["I am a student. I'm from India.", "Soy estudiante. Soy de la India."],
            ["She is my sister. She's a doctor.", "Es mi hermana. Es médica."],
            ["We are happy. We're ready.", "Estamos felices. Estamos listos."],
          ]),
          AU("Listen: contractions", "I'm. You're. He's. She's. We're. They're.", 0.85),
          N("Contract in conversation", "Full forms ('I am ready') are correct but formal. In conversation, English contracts by default: 'I'm ready.' Train your ear on the short forms."),
        ],
        assignment: {
          title: "Be introduction",
          instructions:
            "Write five sentences introducing yourself with be: name, origin, job or study, one feeling today, one description of a family member. Use contractions at least twice.",
          minWords: 20,
          maxWords: 60,
        },
        homework: ["Say the be table from memory with contractions.", "Describe three people you know with 'is' + noun or adjective."],
      },
      {
        title: "Am, Is, Are: Negatives and Questions",
        blurb: "Be makes negatives and questions by itself — no 'do' needed. Learn the flip.",
        minutes: 25,
        difficulty: 1,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "listening"],
        outcomes: [
          "Form be-negatives with isn't/aren't",
          "Form yes/no questions by flipping be",
          "Answer be-questions with short answers",
        ],
        blocks: [
          H("The be flip"),
          GR(
            "Negatives and questions with be",
            "Negative: be + not (isn't, aren't, 'm not). Question: move be BEFORE the subject. Short answers: Yes, I am. / No, I'm not.",
            [
              ["She is not tired. → She isn't tired.", "No está cansada."],
              ["You are ready. → Are you ready?", "¿Estás listo?"],
              ["Are you a student? — Yes, I am.", "¿Eres estudiante? — Sí."],
            ],
          ),
          TB("The flip in action", ["Statement", "Question"], [
            ["He is at home.", "Is he at home?"],
            ["They are brothers.", "Are they brothers?"],
            ["It is cold.", "Is it cold?"],
          ]),
          EX("Short answers", [
            ["Are you tired? — No, I'm not.", "¿Estás cansado? — No."],
            ["Is she a teacher? — Yes, she is.", "¿Es profesora? — Sí."],
          ]),
          AU("Listen: the flip", "He is at home. ... Is he at home? ... Yes, he is.", 0.85),
          W("Never add do with be", "'Do you are ready?' and 'Are you do ready?' are both impossible. Be flips alone: 'Are you ready?'"),
        ],
        assignment: {
          title: "Flip practice",
          instructions:
            "Write four statements, then flip each into a question, then write a negative version. Use is, are and am at least once.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Ask three be-questions to someone (or aloud).", "Answer each with a short answer."],
      },
      {
        title: "Was and Were",
        blurb: "Be in the past: was with I/he/she/it, were with you/we/they.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "listening"],
        strands: ["communication", "listening", "reading"],
        outcomes: [
          "Use was/were correctly with all pronouns",
          "Make past be questions and negatives",
          "Talk about yesterday with be",
        ],
        blocks: [
          H("Be in the past"),
          TB("was and were", ["Pronoun", "Past of be"], [
            ["I / he / she / it", "was"],
            ["you / we / they", "were"],
          ]),
          EX("Yesterday with be", [
            ["I was at home yesterday.", "Estuve en casa ayer."],
            ["They were tired after school.", "Estaban cansados después de la escuela."],
            ["Was it cold? — Yes, it was.", "¿Hacía frío? — Sí."],
          ]),
          AU("Listen: was and were", "I was. You were. He was. She was. We were. They were.", 0.85),
          N("Same flip as present", "Past be questions flip exactly like present: 'You were there.' → 'Were you there?' Negative: 'wasn't / weren't'."),
        ],
        assignment: {
          title: "Yesterday report",
          instructions:
            "Write five sentences about yesterday: where you were, how you felt, who was with you. Include one question.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Say where you were at three times yesterday.", "Ask someone 'Were you tired yesterday?'"],
      },
      {
        title: "Have and Has",
        blurb: "Possession English-style: I have, she has — plus got for emphasis.",
        minutes: 20,
        difficulty: 1,
        skills: ["grammar", "vocabulary"],
        strands: ["communication", "vocabulary", "speaking"],
        outcomes: [
          "Use have/has correctly with all pronouns",
          "Talk about family and possessions",
          "Ask 'Do you have...?' questions",
        ],
        blocks: [
          H("Have across the pronouns"),
          TB("have and has", ["Pronoun", "Verb"], [
            ["I / you / we / they", "have"],
            ["he / she / it", "has"],
          ]),
          EX("Having things", [
            ["I have two brothers.", "Tengo dos hermanos."],
            ["She has a new phone.", "Ella tiene un teléfono nuevo."],
            ["Do you have a pen? — Yes, I do.", "¿Tienes un bolígrafo? — Sí."],
          ]),
          GR("Questions and negatives with have", "At A1, use do/does: 'Do you have...?', 'She doesn't have...'. (British 'Have you got...?' exists — understand it, use the do form.)", [["He doesn't have a car.", "No tiene coche."]]),
          AU("Listen: have, has", "I have. You have. He has. She has. We have. They have.", 0.85),
          W("She has, not she have", "Third person singular takes 'has' in every sentence: 'She has a dog', 'Does she have a dog?' (the does carries the s)."),
        ],
        assignment: {
          title: "Possession survey",
          instructions:
            "Write six sentences about what you and your family have: 'I have...', 'My mother has...', 'We have...'. Include one question.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["List five things you have and five you don't have.", "Ask a friend 'Do you have...?' about two objects."],
      },
      {
        title: "Do and Does",
        blurb: "Do as a main verb (do homework) and as a helper (Do you like tea?).",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking"],
        strands: ["communication", "speaking", "reading"],
        outcomes: [
          "Use do/does as a main verb",
          "Recognise do/does as a helping verb",
          "Give short answers with do/does",
        ],
        blocks: [
          H("Two jobs of do"),
          TB("do and does", ["Job", "Example"], [
            ["Main verb (the action itself)", "I do my homework. She does the shopping."],
            ["Helping verb (for questions/negatives)", "Do you like tea? She doesn't smoke."],
          ]),
          EX("Both jobs in one conversation", [
            ["Do you do sports? — Yes, I do.", "¿Haces deporte? — Sí."],
            ["He does his work at night. Does he do it well?", "Hace su trabajo de noche. ¿Lo hace bien?"],
          ]),
          GR("Short answers", "Yes, I do. / No, I don't. Yes, she does. / No, she doesn't. — never repeat the main verb.", [["Do you work here? — Yes, I do.", "¿Trabajas aquí? — Sí."]]),
          AU("Listen: do and does", "Do you like tea? Yes, I do. Does she work? No, she doesn't.", 0.85),
          N("Why helpers exist", "English verbs cannot flip by themselves ('Like you tea?' is impossible), so do/does steps in to carry the question. Chapter 14 practises this fully."),
        ],
        assignment: {
          title: "Do duty",
          instructions:
            "Write three sentences with do/does as the MAIN verb and three questions where do/does is only the HELPER. Label which job each do has.",
          minWords: 18,
          maxWords: 60,
        },
        homework: ["Ask three 'Do you...?' questions to someone.", "Answer with short answers."],
      },
      {
        title: "The Three Verbs Together and Chapter Review",
        blurb: "Be, have and do in one natural conversation, then the Chapter 12 review.",
        minutes: 25,
        difficulty: 2,
        skills: ["grammar", "speaking", "listening"],
        strands: ["communication", "speaking", "listening", "pronunciation"],
        outcomes: [
          "Combine be, have and do naturally",
          "Choose the right verb for each idea",
          "Answer the chapter review questions",
        ],
        blocks: [
          H("Three verbs, one chat"),
          DL(
            "New in class",
            "A new student meets a classmate.",
            [
              ["Nina", "Hi! Are you new here?"],
              ["Omar", "Yes, I am. I'm Omar. I'm from Egypt."],
              ["Nina", "Welcome! Do you have the class list?"],
              ["Omar", "Yes, I do. But I don't have a pen."],
              ["Nina", "No problem. Here — this pen is a gift. What does your father do?"],
              ["Omar", "He's an engineer. He has his own company."],
              ["Nina", "That's great! We were all new last year. It's easy here."],
            ],
          ),
          AU("Listen: the conversation core", "Are you new here? Yes, I am. Do you have the class list? Yes, I do.", 0.85),
          TB("Quick chooser", ["Idea", "Verb", "Example"], [
            ["identity, feeling, place", "be", "She is a nurse."],
            ["possession", "have", "He has a bike."],
            ["actions, activities", "do", "They do yoga."],
          ]),
          H("Chapter 12 review"),
          T("Three questions on the three verbs, then the self-introduction task."),
        ],
        assignment: {
          title: "Three-verb self-introduction",
          instructions:
            "Write a short self-introduction (five or six sentences) using be at least twice, have at least twice and do at least once. Include one question to the reader.",
          minWords: 30,
          maxWords: 90,
        },
        questions: [
          FB(
            "Complete with the right form of be: 'They ___ at school now. She ___ tired yesterday.'",
            "They ___ at school now. She ___ tired yesterday.",
            ["are at school now. She was tired"],
            fb(
              "are / was",
              "Present: they are. Past: she was. Be changes with pronoun AND time.",
              "'They' takes are; 'she' in the past takes was.",
            ),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "Which sentence is correct?",
            [["a", "She have a dog."], ["b", "She has a dog."], ["c", "She is have a dog."]],
            "b",
            fb("She has a dog.", "Third person singular (he/she/it) takes 'has'.", "Never combine be with have for possession."),
            { skill: "grammar", difficulty: "easy" },
          ),
          MCQ(
            "'Does she work here?' — what is the correct short answer for YES?",
            [["a", "Yes, she does."], ["b", "Yes, she works."], ["c", "Yes, she is."]],
            "a",
            fb("Yes, she does.", "Short answers echo the helping verb: does.", "Full verbs and 'is' are wrong here — the question used does."),
            { skill: "grammar", difficulty: "easy" },
          ),
        ],
      },
    ],
  }),
];
