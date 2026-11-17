/**
 * PROMPT 36 practice bank — A1 chapters 14–18 (part B of the A1 set).
 *
 * Questions and negatives (14), adjectives and adverbs (15), prepositions and
 * there is/are (16), present continuous (17), practical everyday English (18).
 */

import {
  entry,
  fbx,
  qCorr,
  qDict,
  qFill,
  qGid,
  qLis,
  qMatch,
  qMcq,
  qRd,
  qReord,
  qSb,
  qSpeak,
  qVm,
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankA1B: BankEntry[] = [
  // ------------------------------------------- CH-14 Questions and Negative Sentences
  entry(
    14, 1, "yes/no questions",
    qReord(
      "Put the words in order to make a correct question.",
      "Do you like chocolate ice cream?",
      fbx(
        "Do you like chocolate ice cream?",
        "Yes/no questions with other verbs use do/does + subject + plain verb: Do you like…?",
        {
          whyWrong: "Like you chocolate… keeps statement order. Questions invert: the auxiliary do comes first.",
          rule: ["Do + subject + plain verb", "Do you like? Does she work?"],
          similar: ["Does your brother play an instrument?", "¿Toca tu hermano un instrumento?"],
          revise: ["ch-14-l-01", "Yes/No Questions teaches the do/does inversion.", "Yes/No Questions"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["questions", "yes-no"] },
    ),
  ),
  entry(
    14, 2, "wh-questions",
    qFill(
      "Complete the question with the missing question word.",
      "___ do you get up on weekdays?",
      ["when", "what time"],
      fbx(
        "When (or what time)",
        "The answer is a time (at six), so the question word is when or what time. Ask about the missing piece: time → when.",
        {
          whyWrong: "Where asks about place, who about people, why about reasons. The answer here is a time.",
          rule: ["Question words match answers", "When → time. Where → place. Who → person. Why → reason."],
          similar: ["When does the film start?", "¿Cuándo empieza la película?"],
          revise: ["ch-14-l-02", "WH-Questions maps every question word to its use.", "WH-Questions"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["questions", "wh-words"] },
    ),
  ),
  entry(
    14, 3, "question formation",
    qCorr(
      "One word is wrong. Write the question correctly.",
      "What time does the shop opens in the morning?",
      ["What time does the shop open in the morning?"],
      fbx(
        "What time does the shop open in the morning?",
        "After does, the main verb returns to its plain form: does the shop open. The -s moves onto does.",
        {
          whyWrong: "Does + opens doubles the third-person marking. The -s lives on the auxiliary only: does open.",
          rule: ["does + plain verb", "Does she work? — never does she works."],
          similar: ["Where does your cousin live?", "¿Dónde vive tu primo?"],
          revise: ["ch-14-l-03", "Question Formation Practice drills does + plain verb.", "Question Formation Practice"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["questions", "does"] },
    ),
  ),
  entry(
    14, 2, "wh-questions in listening",
    qLis(
      "Listen and answer the question.",
      "My brother studies medicine because he wants to be a doctor like our mother.",
      "Why does the brother study medicine?",
      ["because he wants to be a doctor", "he wants to be a doctor", "to be a doctor", "because he wants to be a doctor like our mother"],
      fbx(
        "Because he wants to be a doctor",
        "Why asks for the reason. The sentence gives it with because: he wants to be a doctor like their mother.",
        {
          whyWrong: "What and where would ask for things and places. Why hunts the reason clause that starts with because.",
          rule: ["Why → because", "Questions with why are answered with because + reason."],
          similar: ["She cycles to work because it keeps her healthy.", "Va en bici al trabajo porque le mantiene sana."],
          revise: ["ch-14-l-02", "WH-Questions teaches why/because pairs.", "WH-Questions"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "why"] },
    ),
  ),
  entry(
    14, 4, "imperatives",
    qMcq(
      "Which sentence is an imperative (a command or instruction)?",
      [
        ["a", "Please close the door."],
        ["b", "He closes the door."],
        ["c", "The door is closed."],
        ["d", "Do you close the door?"],
      ],
      "a",
      fbx("Please close the door.", "Imperatives use the plain verb with no subject: close the door. Please softens it into a polite instruction.", {
        whyWrong: "He closes is a statement about a third person, the door is closed describes a state, and the last one is a question. Only the first has no subject.",
        rule: ["Imperative = plain verb, no subject", "Open the book. Don't be late. Please sit down."],
        similar: ["Please turn off your phone.", "Por favor, apaga el teléfono."],
        revise: ["ch-14-l-04", "Negatives Review and Imperatives teaches commands and their negatives.", "Negatives Review and Imperatives"],
      }),
      { difficulty: "medium", skill: "grammar", tags: ["imperatives", "sentence types"] },
    ),
  ),
  entry(
    14, 4, "negative imperatives",
    qCorr(
      "Make this a negative instruction without changing the meaning of the warning.",
      "Don't forget your umbrella.",
      ["Do not forget your umbrella."],
      fbx(
        "Do not forget your umbrella.",
        "Negative imperatives use don't + plain verb. This version spells it out as do not — both are correct.",
        {
          whyWrong: "Not forget your umbrella misses the do. English negatives need do/don't even for commands.",
          rule: ["Don't + verb", "Don't worry. Don't be late."],
          similar: ["Don't open the window at night.", "No abras la ventana de noche."],
          revise: ["ch-14-l-04", "Negatives Review and Imperatives covers don't commands.", "Negatives Review and Imperatives"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["imperatives", "negatives"] },
    ),
  ),
  entry(
    14, 5, "asking for information",
    qRd(
      "Read the dialogue and answer the question.",
      "At the ticket office",
      "Customer: Excuse me, when does the last bus to the airport leave? Assistant: It leaves at eleven thirty, madam. The gate closes ten minutes before, so please don't arrive late. Customer: Thank you. And how much is a ticket? Assistant: Six pounds for one passenger.",
      "How much does one ticket cost?",
      [
        ["a", "six pounds"],
        ["b", "eleven thirty"],
        ["c", "ten pounds"],
        ["d", "the text does not say"],
      ],
      "a",
      fbx(
        "six pounds",
        "How much asks about price, and the assistant answers six pounds for one passenger. Eleven thirty is the departure time.",
        {
          whyWrong: "The ten in the text belongs to minutes before the gate closes — a time detail, not a price. Match each number to its question.",
          rule: ["How much = price; when = time", "Scan the dialogue for the question word that matches yours."],
          similar: ["How much is the milk? — Two euros.", "¿Cuánto cuesta la leche? — Dos euros."],
          revise: ["ch-14-l-05", "Asking for Information in Real Life practises these exchanges.", "Asking for Information in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "questions"] },
    ),
  ),
  entry(
    14, 3, "question building",
    qSb(
      "Challenge: build the question from the tiles. One tile is extra.",
      ["where", "does", "your", "sister", "work", "is", "on", "mondays"],
      ["Where does your sister work?"],
      fbx(
        "Where does your sister work?",
        "The order is question word + does + subject + plain verb. Is is the trap: no be is needed in a question about an action.",
        {
          whyWrong: "Where is your sister work mixes be and the main verb — questions use one machine at a time.",
          rule: ["WH + do/does + subject + verb", "Where does she work? Where is she? (be only for states.)"],
          similar: ["Why do they study at night?", "¿Por qué estudian de noche?"],
          revise: ["ch-14-l-03", "Question Formation Practice mixes these patterns deliberately.", "Question Formation Practice"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["questions", "sentence building"], hints: ["Start with the question word: where.", "Add the auxiliary: does or is? The question is about an action.", "Then the subject and the plain verb."] },
    ),
  ),

  // --------------------------------------------------- CH-15 Adjectives and Adverbs
  entry(
    15, 1, "describing people",
    qVm(
      "Match each adjective with the person it describes.",
      [
        ["w1", "generous", "adjective"],
        ["w2", "patient", "adjective"],
        ["w3", "polite", "adjective"],
        ["w4", "clever", "adjective"],
      ],
      [
        ["m1", "quick to learn and understand"],
        ["m2", "happy to give and share"],
        ["m3", "speaks kindly to everyone"],
        ["m4", "stays calm when things are slow"],
      ],
      [
        ["w1", "m2"],
        ["w2", "m4"],
        ["w3", "m3"],
        ["w4", "m1"],
      ],
      fbx(
        "generous — happy to give; patient — stays calm; polite — speaks kindly; clever — quick to learn.",
        "Character adjectives describe what people are like, not what they look like. Matching them to meanings prepares you for describing people in writing and speaking.",
        {
          whyWrong: "Polite and patient are easy to swap: polite is about words, patient is about waiting and staying calm.",
          similar: ["My boss is patient but not always polite.", "Mi jefe es paciente pero no siempre educado."],
          revise: ["ch-15-l-01", "Describing People and Things teaches this vocabulary set.", "Describing People and Things"],
        },
      ),
      { difficulty: "easy", skill: "vocabulary", tags: ["adjectives", "people"] },
    ),
  ),
  entry(
    15, 2, "adjective order",
    qMcq(
      "Which sentence puts the adjectives in the natural order?",
      [
        ["a", "a small old black bag"],
        ["b", "a black small old bag"],
        ["c", "an old black small bag"],
        ["d", "a black old small bag"],
      ],
      "a",
      fbx("a small old black bag", "English orders adjectives: size → age → colour. A small old black bag sounds native; other orders feel wrong even though every word is correct.", {
        whyWrong: "The other orders use the same three adjectives against the size-age-colour sequence — the most common learner error at this level.",
        rule: ["Size before age before colour", "a big new red car — never a red new big car."],
        similar: ["She wears long brown leather boots.", "Lleva botas marrones largas de cuero."],
        revise: ["ch-15-l-02", "Adjective Order teaches the full sequence.", "Adjective Order"],
      }),
      { difficulty: "medium", skill: "grammar", tags: ["adjectives", "order"] },
    ),
  ),
  entry(
    15, 3, "adverbs of manner",
    qGid(
      "Label the highlighted word in the sentence.",
      "The children sang beautifully at the concert.",
      "beautifully",
      "What kind of word is the highlighted word?",
      "word categories",
      [
        ["a", "an adjective describing the children"],
        ["b", "an adverb describing how they sang"],
        ["c", "a verb"],
        ["d", "a noun"],
      ],
      "b",
      fbx(
        "an adverb describing how they sang. The -ly word tells you HOW — adjectives describe nouns; adverbs describe actions.",
        "The -ly word describes the action (how they sang), not a person. Adjectives describe nouns; adverbs describe verbs.",
        {
          whyWrong: "Beautiful (no -ly) would describe the children or the concert. The -ly form is needed after a verb.",
          rule: ["adjective → noun; adverb → verb", "They are beautiful. They sing beautifully."],
          similar: ["He drives carefully in the rain.", "Conduce con cuidado bajo la lluvia."],
          revise: ["ch-15-l-03", "Adverbs of Manner teaches the -ly family.", "Adverbs of Manner"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["adverbs", "manner"] },
    ),
  ),
  entry(
    15, 3, "adjective or adverb",
    qCorr(
      "One word is wrong. Write the sentence correctly.",
      "Please speak more slow — the baby is sleeping.",
      ["Please speak more slowly — the baby is sleeping.", "Please speak more slow. — the baby is sleeping."],
      fbx(
        "Please speak more slowly — the baby is sleeping.",
        "Speak is a verb, so the describing word must be the adverb slowly. Slow is the adjective (a slow train).",
        {
          whyWrong: "More slow uses the adjective after a verb. Manner words after verbs take -ly.",
          rule: ["Verb + adverb", "Drive slowly. Eat quickly. Sleep well."],
          similar: ["Read carefully before you answer.", "Lee con atención antes de responder."],
          revise: ["ch-15-l-03", "Adverbs of Manner contrasts slow/slowly pairs.", "Adverbs of Manner"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["adverbs", "correction"] },
    ),
  ),
  entry(
    15, 4, "adverb placement",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "My grandmother is always cheerful in the morning.",
      ["My grandmother is always cheerful in the morning."],
      fbx(
        "My grandmother is always cheerful in the morning.",
        "After the verb be, frequency adverbs come AFTER the verb: is always. (Before other verbs: she always smiles.)",
        {
          whyWrong: "Writing always is cheerful moves the adverb in front of be — the position for main verbs, not for be.",
          rule: ["be + adverb; adverb + main verb", "She is often tired. She often works late."],
          similar: ["The shops are usually busy on Saturdays.", "Las tiendas suelen estar llenas los sábados."],
          revise: ["ch-15-l-04", "Adverbs of Frequency and Placement teaches both positions.", "Adverbs of Frequency and Placement"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "adverbs"] },
    ),
  ),
  entry(
    15, 1, "describing in reading",
    qRd(
      "Read the text and answer the question.",
      "My new classmate",
      "Our new classmate is a tall, quiet girl from Lima. She speaks softly, even when she answers questions in class. She is generous with her notes — she shares them freely before every test. She never arrives late, and she always thanks the teacher at the end of the lesson.",
      "Which two words describe HOW she speaks?",
      [
        ["a", "softly and freely"],
        ["b", "tall and quiet"],
        ["c", "generous and quiet"],
        ["d", "late and always"],
      ],
      "a",
      fbx(
        "softly and freely — the two -ly words describe how she speaks and shares.",
        "How-words are adverbs: softly, freely. Tall and quiet describe what she is like (adjectives before a noun).",
        {
          whyWrong: "Tall, quiet and generous describe the girl (adjectives). The -ly words describe her actions.",
          rule: ["-ly words describe actions", "Speaks softly, shares freely."],
          similar: ["The old man walked slowly up the hill.", "El anciano subió la colina despacio."],
          revise: ["ch-15-l-03", "Adverbs of Manner trains spotting -ly words in texts.", "Adverbs of Manner"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "adverbs"] },
    ),
  ),
  entry(
    15, 5, "describing your world",
    qSpeak(
      "Speaking practice: describe a person you know well.",
      "Choose one person you know well. Say three sentences: one with an adjective before a noun (my patient teacher), one with an adverb (she explains slowly), and one with a frequency adverb (she never shouts).",
      ["My teacher is patient.", "She explains slowly.", "She never shouts."],
      ["never", "slowly"],
      fbx(
        "Three spoken sentences using an adjective, a manner adverb and a frequency adverb — for example: My grandfather is patient. He walks slowly. He always tells stories.",
        "The machine checks that a -ly adverb and a frequency adverb appear. Speaking the three patterns in one breath trains the difference between describing people and describing actions.",
        {
          whyWrong: "Using only adjectives (he is slow) describes the person, not the action. Add the -ly word after the verb.",
          rule: ["Three describing tools", "adjective + noun; adverb + verb; frequency adverb before the verb."],
          similar: ["She sings beautifully and often performs.", "Canta bellamente y actúa a menudo."],
          revise: ["ch-15-l-05", "Describing Your World mixes all three tools.", "Describing Your World and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "description"], hints: ["First sentence: what is the person like? Use an adjective before a noun.", "Second sentence: how do they do something? Add -ly to the verb.", "Third sentence: how often? Use always, usually or never before the verb."] },
    ),
  ),
  entry(
    15, 2, "adjective order challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["she", "wears", "beautiful", "long", "brown", "boots", "red", "in", "winter"],
      ["She wears beautiful long brown boots in winter."],
      fbx(
        "She wears beautiful long brown boots in winter.",
        "Order: opinion (beautiful) → size (long) → colour (brown). Red is the extra tile — three adjectives is what the sentence holds.",
        {
          whyWrong: "Adding red gives four adjectives, which the pattern cannot hold in a natural order — one tile must be left out.",
          rule: ["Opinion → size → age → colour", "beautiful long brown boots."],
          similar: ["He bought a nice big new car.", "Compró un coche nuevo, grande y bonito."],
          revise: ["ch-15-l-02", "Adjective Order is the lesson behind every tile choice.", "Adjective Order"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["adjectives", "sentence building"], hints: ["Start with the subject and verb: she wears.", "Pick the opinion word first: beautiful.", "Then size, then colour. One colour tile is a trap."] },
    ),
  ),

  // -------------------------------- CH-16 Prepositions and There Is / There Are
  entry(
    16, 1, "prepositions of place",
    qMcq(
      "Choose the correct preposition: The cat is ___ the box.",
      [
        ["a", "in"],
        ["b", "on"],
        ["c", "at"],
        ["d", "of"],
      ],
      "a",
      fbx("in", "In means inside: the cat is inside the box. On means touching the top; at marks a point.", {
        whyWrong: "On the box would put the cat on top of it; at is for points like at the door; of shows belonging, not place.",
        rule: ["in / on / at", "In = inside, on = on a surface, at = a specific point."],
        similar: ["The keys are in my pocket.", "Las llaves están en mi bolsillo."],
        revise: ["ch-16-l-01", "Prepositions of Place teaches the three basic place words.", "Prepositions of Place"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["prepositions", "place"] },
    ),
  ),
  entry(
    16, 2, "prepositions of time",
    qFill(
      "Complete the sentence with the best preposition of time.",
      "My birthday is ___ the 14th of March.",
      ["on"],
      fbx(
        "on",
        "Dates take on: on the 14th of March. Days and dates use on; months and years use in (in March, in 2026); clock times use at.",
        {
          whyWrong: "In March is correct for the month alone, but the full date with a day number needs on.",
          rule: ["on days/dates; in months/years; at times", "on Monday, in May, at six o'clock."],
          similar: ["The meeting is on Tuesday at ten.", "La reunión es el martes a las diez."],
          revise: ["ch-16-l-02", "Prepositions of Time teaches on/in/at for time.", "Prepositions of Time"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["prepositions", "time"] },
    ),
  ),
  entry(
    16, 4, "there is / there are",
    qCorr(
      "One word is wrong. Write the sentence correctly.",
      "There is many people waiting outside.",
      ["There are many people waiting outside."],
      fbx(
        "There are many people waiting outside.",
        "Many people is plural, so the form is there are. There is goes with one thing (there is a person).",
        {
          whyWrong: "There is + plural is the classic slip. Match the verb to what follows: one person → is; many people → are.",
          rule: ["There is + singular; there are + plural", "There is a bus. There are two buses."],
          similar: ["There are some eggs in the fridge.", "Hay algunos huevos en la nevera."],
          revise: ["ch-16-l-04", "There Is / There Are teaches number agreement.", "There Is / There Are"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["there is", "agreement"] },
    ),
  ),
  entry(
    16, 5, "some and any",
    qFill(
      "Complete the sentence with some or any.",
      "We don't have ___ milk left in the fridge.",
      ["any"],
      fbx(
        "any",
        "Negative sentences take any: we don't have any. Some appears in positives and offers (would you like some?).",
        {
          whyWrong: "Some is for positive statements. After don't, the negative word is any.",
          rule: ["some in +; any in − and ?", "I have some money. I don't have any. Do you have any?"],
          similar: ["Is there any bread on the table?", "¿Hay pan en la mesa?"],
          revise: ["ch-16-l-05", "Some and Any teaches the positive/negative split.", "Some and Any"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["quantifiers", "some-any"] },
    ),
  ),
  entry(
    16, 3, "movement prepositions",
    qLis(
      "Listen and answer: where does the bus go at the end?",
      "The number 12 bus goes along the high street, past the cinema, and into the station car park.",
      "Where does the bus go at the end?",
      ["into the station car park", "the station car park", "into the car park", "it goes into the station car park"],
      fbx(
        "into the station car park",
        "Movement prepositions tell the story: along (following the street), past (beyond the cinema), into (entering the car park).",
        {
          whyWrong: "Along and past describe the middle of the journey. The end point is marked by into.",
          rule: ["Movement: along, past, into, out of", "Walk along the road, past the shop, into the office."],
          similar: ["The dog ran out of the garden.", "El perro salió corriendo del jardín."],
          revise: ["ch-16-l-03", "Movement Prepositions teaches this set.", "Movement Prepositions"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["prepositions", "listening"] },
    ),
  ),
  entry(
    16, 1, "prepositions in reading",
    qRd(
      "Read the description and answer the question.",
      "My street",
      "Our flat is above a small bakery on Baker Street. The bus stop is in front of the building, between a café and a newsagent. Behind the flat there is a quiet garden, and the market is opposite the garden, across the road.",
      "What is directly below the flat?",
      [
        ["a", "the bakery"],
        ["b", "the café"],
        ["c", "the garden"],
        ["d", "the market"],
      ],
      "a",
      fbx(
        "the bakery",
        "Above a bakery means the bakery is underneath. The other places are in front of, behind or opposite the building.",
        {
          whyWrong: "The café and newsagent sit beside the bus stop; the garden is behind; the market is opposite. Only the bakery is below.",
          rule: ["Above/below are vertical", "Above = higher up, below = lower down — the same stack, different floors."],
          similar: ["The office is below our apartment.", "La oficina está debajo de nuestro piso."],
          revise: ["ch-16-l-01", "Prepositions of Place includes above/below.", "Prepositions of Place"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "prepositions"] },
    ),
  ),
  entry(
    16, 6, "describing places",
    qWrite(
      "Writing challenge: describe a room you know well.",
      "Write four sentences describing a room you know well. Use at least three different place prepositions (in, on, under, next to, between, behind, opposite…) and there is or there are at least twice.",
      35,
      ["there is", "there are"],
      fbx(
        "Four sentences like: My bedroom is small but tidy. There is a bed under the window. There are two lamps next to the desk. My shoes are behind the door.",
        "The machine checks that there is or there are appears twice (the task says at least twice — one of the two forms is checked) and that you reach 35 words. Watch number agreement: there is + one thing, there are + several.",
        {
          whyWrong: "Typical slips: there is two chairs (agreement), and on the wall pictures (order). Check the count after every there is/are.",
          rule: ["There is/are + place preposition", "There is a mirror on the wall. There are chairs around the table."],
          similar: ["There is a park between the two schools.", "Hay un parque entre las dos escuelas."],
          revise: ["ch-16-l-06", "Describing Places reviews the full toolbox.", "Describing Places and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "prepositions"], hints: ["Start with the biggest thing in the room: There is a …", "Say where it is: under, next to or between something.", "Add a plural detail with there are."] },
    ),
  ),
  entry(
    16, 4, "there is / there are challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["there", "are", "two", "apples", "in", "the", "fruit", "bowl", "is"],
      ["There are two apples in the fruit bowl.", "In the fruit bowl there are two apples."],
      fbx(
        "There are two apples in the fruit bowl.",
        "Two apples is plural → there are. The tile is is the trap: it belongs to singular sentences only.",
        {
          whyWrong: "There is two apples breaks number agreement — the verb must match what follows it.",
          rule: ["Match there is/are to the noun", "There is an apple. There are apples."],
          similar: ["There are three chairs in the hall.", "Hay tres sillas en el pasillo."],
          revise: ["ch-16-l-04", "There Is / There Are drills the agreement rule.", "There Is / There Are"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["there is", "sentence building"], hints: ["Count first: how many apples are there?", "Two things — which form: is or are?", "Then say where they are: in the fruit bowl."] },
    ),
  ),

  // ------------------------------------------------ CH-17 Present Continuous Tense
  entry(
    17, 1, "meaning and usage",
    qMcq(
      "Which sentence is happening right now?",
      [
        ["a", "Look — the baby is smiling at you."],
        ["b", "The baby smiles a lot."],
        ["c", "The baby smiled yesterday."],
        ["d", "The baby will smile soon."],
      ],
      "a",
      fbx("Look — the baby is smiling at you.", "Am/is/are + -ing describes an action in progress right now. The word look points at this moment.", {
        whyWrong: "The baby smiles a lot is present simple — a general fact about the baby. -ing forms are for now (or around now).",
        rule: ["be + verb-ing = in progress", "She is cooking. They are playing."],
        similar: ["Listen — someone is knocking.", "Escucha — alguien está llamando."],
        revise: ["ch-17-l-01", "Meaning and Usage explains when to choose the continuous.", "Meaning and Usage"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["present continuous", "meaning"] },
    ),
  ),
  entry(
    17, 2, "be + -ing form",
    qFill(
      "Complete the sentence with the correct present continuous form.",
      "The students ___ for their exam this week.",
      ["are studying", "are studying for their exam this week"],
      fbx(
        "are studying",
        "Students is plural → are + studying. This week shows the action is in progress around now.",
        {
          whyWrong: "Is studying would fit one student; with the plural students, be must be are.",
          rule: ["Plural subject + are + -ing", "They are waiting. She is waiting."],
          similar: ["My parents are travelling this month.", "Mis padres están viajando este mes."],
          revise: ["ch-17-l-02", "Am, Is, Are + Verb-ing builds the form piece by piece.", "Am, Is, Are + Verb-ing"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["present continuous", "form"] },
    ),
  ),
  entry(
    17, 3, "continuous negatives",
    qCorr(
      "One form is wrong. Write the sentence correctly.",
      "She no is sleeping — she is reading in bed.",
      ["She is not sleeping — she is reading in bed.", "She isn't sleeping — she is reading in bed."],
      fbx(
        "She is not sleeping — she is reading in bed.",
        "Negatives with be + -ing put not after be: is not sleeping. Then the second action is positive: is reading.",
        {
          whyWrong: "No is again the translation trap — English negatives need not (or n't), attached to be.",
          rule: ["be + not + -ing", "He isn't watching TV. They aren't listening."],
          similar: ["We aren't working today; we are resting.", "Hoy no trabajamos; descansamos."],
          revise: ["ch-17-l-03", "Affirmative and Negative covers be + not + -ing.", "Affirmative and Negative"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["present continuous", "negatives"] },
    ),
  ),
  entry(
    17, 5, "simple vs continuous",
    qMcq(
      "Choose the correct sentence for this situation: your friend generally drinks tea, but right now she has a coffee in her hand.",
      [
        ["a", "She usually drinks tea, but today she is drinking coffee."],
        ["b", "She usually is drinking tea, but today she drinks coffee."],
        ["c", "She usually drink tea, but today she is drink coffee."],
        ["d", "She usually drinks tea, but today she drink coffee."],
      ],
      "a",
      fbx("She usually drinks tea, but today she is drinking coffee.", "Habit (usually) → present simple. Right now (today, in her hand) → present continuous. Both halves must switch correctly.", {
        whyWrong: "The other options break one half each: usually is drinking (wrong tense for a habit), is drink / drink coffee (broken forms).",
        rule: ["Habit = simple; now = continuous", "I usually walk, but today I am taking the bus."],
        similar: ["He often cooks, but tonight he is ordering food.", "Cocina a menudo, pero esta noche pide comida."],
        revise: ["ch-17-l-05", "Present Simple vs Present Continuous is the dedicated contrast lesson.", "Present Simple vs Present Continuous"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "contrast"] },
    ),
  ),
  entry(
    17, 4, "continuous questions",
    qDict(
      "Listen and type the question exactly as you hear it.",
      "Why are you laughing at that photo?",
      ["Why are you laughing at that photo?"],
      fbx(
        "Why are you laughing at that photo?",
        "Continuous questions invert be: why ARE you laughing. No do — be builds its own questions.",
        {
          whyWrong: "Why do you laughing mixes the two machines. With -ing, the verb be does the inverting.",
          rule: ["Q-word + be + subject + -ing", "What are you doing? Where is she going?"],
          similar: ["What are they building outside?", "¿Qué están construyendo fuera?"],
          revise: ["ch-17-l-04", "Questions covers continuous question forms.", "Questions"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "questions"] },
    ),
  ),
  entry(
    17, 6, "actions now in reading",
    qRd(
      "Read the message and answer the question.",
      "A voice note from Dad",
      "Hi Sara, it's Dad. I'm standing outside the station and it's starting to rain. Your brother isn't answering his phone — he's probably sleeping. I usually take the bus, but today the buses aren't running, so I'm walking home. See you in twenty minutes.",
      "How is Dad getting home today?",
      [
        ["a", "by bus, as usual"],
        ["b", "on foot, because no buses are running"],
        ["c", "by car with Sara"],
        ["d", "the message does not say"],
      ],
      "b",
      fbx(
        "on foot — he is walking because the buses aren't running",
        "The contrast is the point: usually take the bus (habit) vs today I'm walking (now). The present continuous carries the today information.",
        {
          whyWrong: "The bus is his habit, not today's plan. The -ing sentences (it's starting, buses aren't running, I'm walking) describe this moment.",
          rule: ["Simple for habits, continuous for now", "Usually take vs today I'm taking."],
          similar: ["I normally drive, but this week I am cycling.", "Normalmente conduzco, pero esta semana voy en bici."],
          revise: ["ch-17-l-05", "Present Simple vs Present Continuous is the exact contrast tested here.", "Present Simple vs Present Continuous"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "tenses"] },
    ),
  ),
  entry(
    17, 6, "actions now speaking",
    qSpeak(
      "Speaking practice: what is happening around you right now?",
      "Look around you. Say three sentences about what is happening right now: one about a person (my sister is cooking), one about a thing (the radio is playing), and one negative (the neighbours aren't making noise).",
      ["My sister is cooking.", "The radio is playing.", "The neighbours aren't making noise."],
      ["is", "are"],
      fbx(
        "Three spoken present-continuous sentences, for example: My mother is working. The kettle is boiling. The children aren't sleeping.",
        "The machine checks that is or are appears — the be part of the continuous. Saying the be out loud is what stops learners dropping it later (she cooking).",
        {
          whyWrong: "Forgetting be (she cooking) is the most common continuous error. Every sentence needs am/is/are + -ing.",
          rule: ["am/is/are + -ing — never drop the be", "I am eating. Not: I eating."],
          similar: ["The dog is barking at the postman.", "El perro está ladrando al cartero."],
          revise: ["ch-17-l-02", "Am, Is, Are + Verb-ing trains the be part.", "Am, Is, Are + Verb-ing"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "tenses"] },
    ),
  ),
  entry(
    17, 5, "tense choice challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["i", "usually", "drink", "tea", "but", "today", "i", "am", "drinking", "coffee", "drink"],
      ["I usually drink tea but today I am drinking coffee."],
      fbx(
        "I usually drink tea but today I am drinking coffee.",
        "The habit side uses present simple (usually drink); the now side uses present continuous (am drinking). The extra tile drink cannot appear twice on the right side.",
        {
          whyWrong: "Using drink twice gives today I drink coffee — that describes a habit, not what is in your cup now.",
          rule: ["Usually + simple; today/now + continuous", "The time words choose the tense for you."],
          similar: ["He often reads, but this evening he is watching a film.", "A menudo lee, pero esta tarde ve una película."],
          revise: ["ch-17-l-05", "Present Simple vs Present Continuous gives the full decision rule.", "Present Simple vs Present Continuous"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["tenses", "sentence building"], hints: ["Split the sentence at but: habit on the left, now on the right.", "The left side has usually — which tense?", "The right side has today — which form of drink?"] },
    ),
  ),

  // ------------------------------------------- CH-18 Practical Everyday English
  entry(
    18, 1, "introductions",
    qCorr(
      "One part sounds wrong. Write the corrected introduction.",
      "Hello, I am Sara and this is my brother Omar. He is teacher of music.",
      ["He is a music teacher.", "He is a teacher of music."],
      fbx(
        "He is a music teacher.",
        "Jobs take a/an: he is a teacher. Saying a profession without the article is the classic introduction slip.",
        {
          whyWrong: "He is teacher of music misses the article. English requires a before a singular job: a teacher, an engineer.",
          rule: ["Jobs need a/an", "I'm a student. She's an accountant."],
          similar: ["My father is a dentist in Sevilla.", "Mi padre es dentista en Sevilla."],
          revise: ["ch-18-l-01", "Introducing Yourself covers job introductions.", "Introducing Yourself"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["introductions", "articles"] },
    ),
  ),
  entry(
    18, 2, "introducing family",
    qLis(
      "Listen and answer: who is the youngest in the family?",
      "This is my family: my father David, my mother Lucia, and my little sister Nina. Nina is six — she is the youngest.",
      "Who is the youngest in the family?",
      ["nina", "nina is", "my little sister nina", "nina is the youngest", "my little sister"],
      fbx(
        "Nina, the little sister",
        "Superlatives pick one out of a group: the youngest. Nina is six, so she is the youngest of the four people named.",
        {
          whyWrong: "Little describes size, not age order. The superlative the youngest is what the question asks for.",
          rule: ["the + -est for one out of a group", "The youngest, the oldest, the tallest."],
          similar: ["My grandfather is the oldest in our house.", "Mi abuelo es el mayor de nuestra casa."],
          revise: ["ch-18-l-02", "Introducing Your Family practises family descriptions.", "Introducing Your Family"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "family"] },
    ),
  ),
  entry(
    18, 3, "talking about routines",
    qMatch(
      "Match each question with its natural answer.",
      [
        ["l1", "What time do you get up?"],
        ["l2", "How do you come to school?"],
        ["l3", "What do you do on Sundays?"],
        ["l4", "Where do you have lunch?"],
      ],
      [
        ["r1", "At the café near the library."],
        ["r2", "At half past six, usually."],
        ["r3", "By bus with my neighbour."],
        ["r4", "I relax and visit my cousins."],
      ],
      [
        ["l1", "r2"],
        ["l2", "r3"],
        ["l3", "r4"],
        ["l4", "r1"],
      ],
      fbx(
        "get up → 6:30; come to school → by bus; Sundays → relax and visit; lunch → at the café",
        "Everyday questions pair with short natural answers. The question word decides the answer type: when → time, how → transport, where → place, what → activity.",
        {
          whyWrong: "Mixing them gives a time answer to a place question. Read the question word first, then choose.",
          rule: ["Question word → answer type", "What time → clock. How → way. Where → place. What → activity."],
          similar: ["How do you travel? — By train, usually.", "¿Cómo viajas? — En tren, normalmente."],
          revise: ["ch-18-l-03", "Talking About Routines practises these exchanges.", "Talking About Routines"],
        },
      ),
      { difficulty: "easy", skill: "vocabulary", tags: ["routines", "questions"] },
    ),
  ),
  entry(
    18, 4, "asking for information",
    qGid(
      "Label the highlighted word in the request.",
      "Excuse me, could you tell me how much this costs?",
      "could",
      "What is the job of the highlighted word?",
      "polite requests",
      [
        ["a", "it makes the request polite"],
        ["b", "it asks about possession"],
        ["c", "it is the past of can meaning ability"],
        ["d", "it introduces the price"],
      ],
      "a",
      fbx(
        "could makes the request polite",
        "Could you…? softens a question into a polite request. Can also works but sounds more direct.",
        {
          whyWrong: "Here could is not past ability — it is the polite form used in shops and streets every day.",
          rule: ["Could you…? for polite requests", "Could you tell me…? Would you help me…?"],
          similar: ["Could you repeat that, please?", "¿Podría repetirlo, por favor?"],
          revise: ["ch-18-l-04", "Asking for Information teaches polite request forms.", "Asking for Information"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["politeness", "requests"] },
    ),
  ),
  entry(
    18, 5, "describing people and places",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "The market is always busy, but the staff are friendly and the fruit is fresh.",
      ["The market is always busy, but the staff are friendly and the fruit is fresh."],
      fbx(
        "The market is always busy, but the staff are friendly and the fruit is fresh.",
        "Three descriptions in one sentence: busy market, friendly staff, fresh fruit. Adjective before noun each time.",
        {
          whyWrong: "The traps are word order (market busy instead of busy market) and dropping the adverb always.",
          rule: ["Adjective + noun", "Fresh fruit, friendly staff, busy market."],
          similar: ["The streets are quiet and the cafés are cheap.", "Las calles son tranquilas y los cafés baratos."],
          revise: ["ch-18-l-05", "Describing People and Places trains this sentence shape.", "Describing People and Places"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "description"] },
    ),
  ),
  entry(
    18, 6, "everyday dialogues",
    qRd(
      "Read the dialogue and answer the question.",
      "Meeting a neighbour",
      "Ana: Good morning! Are you new to the building? Birgit: Yes, we moved in on Saturday. I'm Birgit — this flat is ours now. Ana: Welcome! I'm Ana from flat 4. If you need anything, knock on my door. Birgit: Thank you — actually, could you tell me where the nearest supermarket is? Ana: Of course. Go straight on and turn left at the post office. It's opposite the park.",
      "Where does Birgit have to turn?",
      [
        ["a", "left at the post office"],
        ["b", "right at the park"],
        ["c", "straight on at flat 4"],
        ["d", "she doesn't need to turn"],
      ],
      "a",
      fbx(
        "left at the post office",
        "The directions say go straight on, then turn left at the post office. The park is the landmark opposite the supermarket, not the turning point.",
        {
          whyWrong: "Choosing the park confuses the landmark (opposite the shop) with the instruction (turn left at the post office).",
          rule: ["Follow the instruction words", "Turn left/right at + the landmark mentioned in the instruction."],
          similar: ["Take the second right after the bridge.", "Toma la segunda a la derecha después del puente."],
          revise: ["ch-18-l-06", "Everyday Dialogues practises following real directions.", "Everyday Dialogues and First Paragraphs"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "directions"] },
    ),
  ),
  entry(
    18, 6, "first paragraphs",
    qWrite(
      "Writing challenge: your first paragraph about a place you love.",
      "Write one paragraph (4–5 sentences) about a place you love. Introduce it with there is/there are, describe it with two adjectives, say what people do there, and finish with how it makes you feel.",
      40,
      ["there is", "there are"],
      fbx(
        "A paragraph like: My favourite place is our kitchen. There is a long table in the middle, and there are always flowers on it. It is warm and noisy. We cook together on Sundays and tell long stories. It makes me feel at home.",
        "The machine checks that there is or there are appears and that you reach 40 words. The human checks — warm adjectives, one clear topic sentence, and a feeling at the end — are what make it a paragraph rather than a list.",
        {
          whyWrong: "Writing four unrelated sentences is the common failure: a paragraph needs one topic developed, not four topics listed.",
          rule: ["Paragraph = one topic + development", "Topic sentence, two details, one feeling."],
          similar: ["The library is quiet and bright. There are long shelves everywhere.", "La biblioteca es tranquila y luminosa. Hay estanterías largas por todas partes."],
          revise: ["ch-18-l-06", "Everyday Dialogues and First Paragraphs teaches paragraph shape.", "Everyday Dialogues and First Paragraphs"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "paragraphs"], hints: ["Open with your topic sentence: My favourite place is …", "Add there is / there are with one detail about it.", "Close with a feeling sentence: It makes me feel …"] },
    ),
  ),
  entry(
    18, 4, "requests challenge",
    qSb(
      "Challenge: build the polite request from the tiles. One tile is extra.",
      ["could", "you", "tell", "me", "where", "the", "station", "is", "does"],
      ["Could you tell me where the station is?"],
      fbx(
        "Could you tell me where the station is?",
        "Indirect questions keep statement order after the question phrase: where the station is (not where is the station). The tile does is the trap.",
        {
          whyWrong: "Where is the station? alone is fine as a direct question, but inside Could you tell me… the subject comes before the verb: where the station is.",
          rule: ["Indirect question = statement order", "Could you tell me where it is? — never where is it?"],
          similar: ["Do you know when the shop opens?", "¿Sabes cuándo abre la tienda?"],
          revise: ["ch-18-l-04", "Asking for Information covers indirect questions.", "Asking for Information"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["questions", "politeness"], hints: ["Start with the polite opener: Could you …", "The question word where comes next, then the subject.", "Inside a polite request, the verb goes AFTER the subject — no inversion."] },
    ),
  ),
];
