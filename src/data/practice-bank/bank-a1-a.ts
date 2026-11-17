/**
 * PROMPT 36 practice bank — A1 chapters 09–13 (part A of the A1 set).
 *
 * Sentence structure (09), nouns and articles (10), pronouns and possessives
 * (11), be/have/do (12), present simple (13). Eight questions per chapter at
 * the full feedback standard.
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
  qSpell,
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankA1A: BankEntry[] = [
  // ------------------------------------------- CH-09 Understanding Sentence Structure
  entry(
    9, 1, "subject and predicate",
    qGid(
      "Label the highlighted words in the sentence.",
      "The children play in the park every day.",
      "in the park every day",
      "What is the job of the highlighted words?",
      "sentence roles",
      [
        ["a", "the subject — who does the action"],
        ["b", "part of the predicate — the rest after the subject"],
        ["c", "only a describing word"],
        ["d", "the object of the sentence"],
      ],
      "b",
      fbx(
        "part of the predicate — the rest after the subject. The highlighted words add detail to the action.",
        "The predicate is everything after the subject: the verb play plus the details in the park every day. The subject is only the children.",
        {
          whyWrong: "The subject is the children (the doer). In the park every day adds detail to the action, so it belongs to the predicate.",
          rule: ["Subject + predicate", "Subject = the doer. Predicate = the verb plus everything else."],
          similar: ["My father cooks dinner in the kitchen.", "Mi padre cocina la cena en la cocina."],
          revise: ["ch-09-l-01", "Subject and Predicate draws the line this question tests.", "Subject and Predicate"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["predicate", "sentence roles"], hints: ["Find the doer first: who plays?", "The doer is the children. Everything after the verb belongs to the predicate.", "Ask: what comes after the action word play?"] },
    ),
  ),
  entry(
    9, 2, "objects",
    qMcq(
      "What is the object of this sentence: She reads a book every night?",
      [
        ["a", "a book"],
        ["b", "she"],
        ["c", "every night"],
        ["d", "reads"],
      ],
      "a",
      fbx("a book", "The object receives the action: she reads WHAT? A book. Every night only says when.", {
        whyWrong: "She is the subject (the doer), reads is the verb, and every night is a time expression. Only a book receives the reading.",
        rule: ["S + V + O", "The object answers the verb question: reads what? — a book."],
        similar: ["They watch films on Fridays.", "Ellos ven películas los viernes."],
        revise: ["ch-09-l-02", "Verbs and Objects teaches finding the receiver of the action.", "Verbs and Objects"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["objects", "patterns"] },
    ),
  ),
  entry(
    9, 3, "complements",
    qGid(
      "Label the highlighted word in the sentence.",
      "The soup tastes delicious after a long day.",
      "delicious",
      "What is the job of the highlighted word?",
      "sentence roles",
      [
        ["a", "the object — it receives the action"],
        ["b", "the complement — it describes the subject after the verb"],
        ["c", "the verb of the sentence"],
        ["d", "a time expression"],
      ],
      "b",
      fbx(
        "the complement — it describes the subject after the verb. Delicious describes the soup, not an action.",
        "After linking verbs like be, taste, seem, the word that describes the subject is the complement. Delicious describes the soup, not an action.",
        {
          whyWrong: "There is no object here: the soup does not taste something — the soup IS something. Words after linking verbs describe the subject.",
          rule: ["Linking verb + complement", "Taste, smell, be, seem connect the subject to a description: the soup tastes delicious."],
          similar: ["The music sounds beautiful tonight.", "La música suena hermosa esta noche."],
          revise: ["ch-09-l-03", "Complements teaches description words after linking verbs.", "Complements"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["complements", "linking verbs"] },
    ),
  ),
  entry(
    9, 4, "word order",
    qCorr(
      "The words are in the wrong order. Write the sentence correctly.",
      "Speaks English my teacher very well.",
      ["My teacher speaks English very well."],
      fbx(
        "My teacher speaks English very well.",
        "The subject comes first (my teacher), then the verb (speaks), then the object (English), and the manner detail goes last.",
        {
          whyWrong: "Starting with the verb makes the sentence unreadable in English. Who does it? My teacher. Then what? Speaks English. How? Very well.",
          rule: ["S + V + O + how", "Subject, verb, object, then the manner word: My teacher speaks English well."],
          similar: ["My sister plays the piano beautifully.", "Mi hermana toca el piano bellamente."],
          revise: ["ch-09-l-04", "Word Order Rules covers where each part goes.", "Word Order Rules"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["word order", "correction"] },
    ),
  ),
  entry(
    9, 5, "sentence patterns",
    qSb(
      "Challenge: build the sentence from the tiles. Two tiles are extra.",
      ["she", "gives", "her", "son", "a", "gift", "to", "every", "friday", "them", "yesterday"],
      ["She gives her son a gift every Friday.", "She gives a gift to her son every Friday."],
      fbx(
        "She gives her son a gift every Friday.",
        "Give takes two objects: who receives it (her son) and what (a gift). The tiles them and yesterday do not fit the routine meaning.",
        {
          whyWrong: "Them is a pronoun for people already mentioned — here the receiver is named (her son). Yesterday fights every Friday.",
          rule: ["S + V + IO + DO", "Give can name the receiver first: she gives her son (indirect) a gift (direct)."],
          similar: ["I send my friend a message on Mondays.", "Le envío un mensaje a mi amiga los lunes."],
          revise: ["ch-09-l-05", "Basic Sentence Patterns includes the two-object pattern.", "Basic Sentence Patterns and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["patterns", "sentence building"], hints: ["Start with the doer: she.", "The verb is gives. It needs two things after it: who gets it, and what they get.", "Every Friday says when; the other time tiles are traps."] },
    ),
  ),
  entry(
    9, 2, "objects",
    qLis(
      "Listen and answer: what does Maria teach?",
      "Maria plays the piano on Mondays, and she teaches music at a school near the park.",
      "What does Maria teach?",
      ["music", "she teaches music", "music at a school"],
      fbx(
        "music",
        "The sentence says she teaches music. The piano is what she plays — listening for the verb (teaches vs plays) gives the answer.",
        {
          whyWrong: "The piano belongs to plays, not teaches. Two actions in one sentence means you must pair each verb with its own object.",
          rule: ["Match each verb to its object", "Plays → piano. Teaches → music. Do not swap them."],
          similar: ["He cooks rice and sells cars.", "Él cocina arroz y vende coches."],
          revise: ["ch-09-l-02", "Verbs and Objects practises separating the two actions.", "Verbs and Objects"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "objects"] },
    ),
  ),
  entry(
    9, 1, "reading structure",
    qRd(
      "Read the text and answer the question.",
      "Two friends",
      "Leila studies medicine and works at a hospital on weekends. Her friend Omar builds websites for small shops. He gives his clients honest advice, and they like him a lot.",
      "What does Omar build?",
      [
        ["a", "hospitals"],
        ["b", "websites"],
        ["c", "shops"],
        ["d", "nothing — he only gives advice"],
      ],
      "b",
      fbx(
        "websites",
        "The text says Omar builds websites for small shops. Hospitals belong to Leila; shops are his clients, not what he builds.",
        {
          whyWrong: "Mixing the two people swaps their objects: Leila studies medicine (hospital), Omar builds websites. Track who does what.",
          rule: ["Read for who + does what", "Each person has their own verb and object; keep them apart."],
          similar: ["Sara paints houses and Ali repairs cars.", "Sara pinta casas y Ali repara coches."],
          revise: ["ch-09-l-02", "Verbs and Objects trains exactly this separation.", "Verbs and Objects"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "structure"] },
    ),
  ),
  entry(
    9, 4, "word order",
    qReord(
      "Put the words in order to make a correct sentence.",
      "My mother bought my brother a bicycle.",
      fbx(
        "My mother bought my brother a bicycle.",
        "The pattern is subject + verb + indirect object + direct object: who bought (my mother), who received (my brother), what (a bicycle).",
        {
          whyWrong: "A common slip is putting the thing before the receiver: bought a bicycle my brother reads as broken English. Receiver first, then the thing.",
          rule: ["IO before DO", "Buy/give/send + person + thing: bought my brother a bicycle."],
          similar: ["Our uncle sent us a postcard from Turkey.", "Nuestro tío nos envió una postal desde Turquía."],
          revise: ["ch-09-l-05", "Basic Sentence Patterns covers the two-object order.", "Basic Sentence Patterns and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["word order", "two objects"] },
    ),
  ),

  // ------------------------------------------------------- CH-10 Nouns and Articles
  entry(
    10, 1, "proper nouns",
    qMcq(
      "Which word is a proper noun?",
      [
        ["a", "March"],
        ["b", "month"],
        ["c", "spring"],
        ["d", "calendar"],
      ],
      "a",
      fbx("March", "March names one specific month, so it is a proper noun and takes a capital letter. Month, spring and calendar name general things.", {
        whyWrong: "Month, spring and calendar are common nouns: they name a kind of thing, not one specific one, so they stay lowercase.",
        rule: ["Proper nouns name specific things", "Names of people, places, months, days and languages take capitals: March, Sara, London, English."],
        similar: ["We visit Madrid in June.", "Visitamos Madrid en junio."],
        revise: ["ch-10-l-01", "Common and Proper Nouns teaches the capital-letter clue.", "Common and Proper Nouns"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["nouns", "proper nouns"] },
    ),
  ),
  entry(
    10, 2, "plurals",
    qFill(
      "Complete the sentence with the plural form.",
      "The three ___ are on the table. (box)",
      ["boxes"],
      fbx(
        "boxes",
        "Box ends in -x, so the plural adds -es: box → boxes. Words ending in -s, -x, -ch, -sh take -es.",
        {
          whyWrong: "Boxs is missing the e: after x, ch, sh and s, the plural is -es so the word stays pronounceable.",
          rule: ["-es after s, x, ch, sh", "box → boxes, bus → buses, watch → watches."],
          similar: ["She has two watches and five dresses.", "Ella tiene dos relojes y cinco vestidos."],
          revise: ["ch-10-l-02", "Singular and Plural covers the -s/-es spelling rules.", "Singular and Plural"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["plurals", "spelling"] },
    ),
  ),
  entry(
    10, 3, "irregular plurals",
    qMatch(
      "Match each singular noun with its plural.",
      [
        ["l1", "one child"],
        ["l2", "one foot"],
        ["l3", "one man"],
        ["l4", "one tooth"],
      ],
      [
        ["r1", "teeth"],
        ["r2", "children"],
        ["r3", "feet"],
        ["r4", "men"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r3"],
        ["l3", "r4"],
        ["l4", "r1"],
      ],
      fbx(
        "child → children, foot → feet, man → men, tooth → teeth",
        "These nouns change their inside vowel instead of adding -s. They must be memorised as pairs.",
        {
          whyWrong: "Adding -s (childs, foots, mans, tooths) is the natural guess, but these nouns are irregular: the vowel changes instead.",
          rule: ["Irregular plurals change the vowel", "man→men, foot→feet, tooth→teeth, child→children (the odd one out: no vowel change, just -ren)."],
          similar: ["Two women cleaned their teeth.", "Dos mujeres se limpiaron los dientes."],
          revise: ["ch-10-l-03", "Irregular Plurals lists every pair used here.", "Irregular Plurals and Countable Nouns"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["plurals", "irregular"], hints: ["Start with the two that rhyme: foot and tooth change the same way.", "Child is the strange one — its plural does not change a vowel at all.", "Man is short and its plural is even shorter."] },
    ),
  ),
  entry(
    10, 4, "articles",
    qMcq(
      "Choose the correct article: She is ___ honest girl.",
      [
        ["a", "an"],
        ["b", "a"],
        ["c", "the"],
        ["d", "no article"],
      ],
      "a",
      fbx("an", "Honest starts with a vowel SOUND (the h is silent), so the article is an: an honest girl.", {
        whyWrong: "A goes before consonant sounds. The h in honest is silent, so the word begins with a vowel sound — an, not a.",
        rule: ["A/an follows sound, not spelling", "An hour, an honest girl (silent h). A university (y sound), a European city (y sound)."],
        similar: ["We waited for an hour at a university gate.", "Esperamos una hora en la puerta de una universidad."],
        revise: ["ch-10-l-04", "Articles: A, An and The teaches the sound rule.", "Articles: A, An and The"],
      }),
      { difficulty: "medium", skill: "grammar", tags: ["articles", "a-an"] },
    ),
  ),
  entry(
    10, 4, "articles",
    qCorr(
      "There are two article mistakes. Write the sentence correctly.",
      "I have a apple in the my bag.",
      ["I have an apple in my bag."],
      fbx(
        "I have an apple in my bag.",
        "Apple starts with a vowel sound, so the article is an. Possessives (my, your) never take the before them.",
        {
          whyWrong: "A apple breaks the vowel-sound rule, and the my is impossible in English: my already means the one that is mine.",
          rule: ["An + vowel sound; no the before possessives", "an apple; my bag (never the my bag)."],
          similar: ["She saw an owl in our garden.", "Ella vio un búho en nuestro jardín."],
          revise: ["ch-10-l-04", "Articles: A, An and The covers both errors made here.", "Articles: A, An and The"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["articles", "correction"] },
    ),
  ),
  entry(
    10, 2, "plural spelling",
    qSpell(
      "One word is spelled wrongly. Write the correct spelling.",
      "The two busess arrive at seven in the morning.",
      "busess",
      ["buses"],
      fbx(
        "buses",
        "Bus ends in -s, so the plural adds only -es: buses. Doubling the s (busess) adds a sound that is not there.",
        {
          whyWrong: "Say the word: BU-siz. One s at the end, plus es for the plural.",
          rule: ["-s/-x/-ch/-sh → -es", "bus → buses, box → boxes. Never double the final consonant."],
          similar: ["Three buses leave the station together.", "Tres autobuses salen de la estación juntos."],
          revise: ["ch-10-l-02", "Singular and Plural practises these spellings.", "Singular and Plural"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["spelling", "plurals"], hints: ["Say the plural out loud: how many s sounds do you hear?", "The word is the plural of bus.", "Bus ends in one s; the plural adds es, not another s."] },
    ),
  ),
  entry(
    10, 1, "nouns in reading",
    qRd(
      "Read the text and answer the question.",
      "A message from Sara",
      "Dear Omar, I am writing from Madrid. My sister Anna starts a new job in March. She will work at a hospital in the city centre. Our cousin Lucas visits us every summer, and we eat together at a restaurant near our flat.",
      "Which noun in the text is a proper noun for a place?",
      [
        ["a", "job"],
        ["b", "Madrid"],
        ["c", "hospital"],
        ["d", "restaurant"],
      ],
      "b",
      fbx(
        "Madrid",
        "Madrid names one specific city, so it is a proper noun with a capital letter. Hospital, job and restaurant are common nouns — any one of them.",
        {
          whyWrong: "Job, hospital and restaurant name kinds of things (common nouns, lowercase). Only Madrid names one particular place.",
          rule: ["Places are proper nouns", "Cities, countries, streets: Madrid, Spain, Oxford Street — always capitals."],
          similar: ["We live in Lisbon and work in Porto.", "Vivimos en Lisboa y trabajamos en Oporto."],
          revise: ["ch-10-l-01", "Common and Proper Nouns teaches this distinction.", "Common and Proper Nouns"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "nouns"] },
    ),
  ),
  entry(
    10, 5, "nouns in real sentences",
    qSb(
      "Challenge: build the sentence from the tiles. Two tiles are extra.",
      ["a", "cat", "sleeps", "on", "the", "sofa", "an", "some", "every", "afternoon"],
      ["A cat sleeps on the sofa every afternoon.", "The cat sleeps on the sofa every afternoon."],
      fbx(
        "A cat sleeps on the sofa every afternoon.",
        "The article a introduces the cat for the first time; on the sofa says where; every afternoon says when. An (vowel word) and some (plural word) do not fit a single cat.",
        {
          whyWrong: "An needs a vowel-sounding next word, and some needs a plural — neither matches cat.",
          rule: ["A + consonant sound", "A cat, a dog. An apple, an hour. The for a specific one already known."],
          similar: ["A dog barks at the postman.", "Un perro ladra al cartero."],
          revise: ["ch-10-l-04", "Articles: A, An and The is the lesson behind every tile choice here.", "Articles: A, An and The"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["articles", "sentence building"], hints: ["First word is the article before cat — is it a, an or the?", "Cat starts with a consonant sound, so the article is a.", "Where does it sleep? On the sofa. When? Every afternoon."] },
    ),
  ),

  // ------------------------------------------- CH-11 Pronouns and Possessives
  entry(
    11, 1, "subject pronouns",
    qFill(
      "Complete the sentence with the subject pronoun.",
      "Maria likes tea. ___ drinks it every morning.",
      ["she"],
      fbx(
        "she",
        "Maria is a girl, so the subject pronoun that replaces her is she. We avoid repeating the name in the second sentence.",
        {
          whyWrong: "Her is possessive (her tea) or object (help her). As the doer of drinks, the word must be she.",
          rule: ["Subject pronouns replace names", "Maria → she, Omar → he, my parents → they."],
          similar: ["Ali plays football. He plays it on Saturdays.", "Ali juega al fútbol. Juega los sábados."],
          revise: ["ch-11-l-01", "Subject Pronouns teaches replacing names with I, you, he, she, it, we, they.", "Subject Pronouns"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["pronouns", "subjects"] },
    ),
  ),
  entry(
    11, 2, "object pronouns",
    qGid(
      "Label the highlighted word in the sentence.",
      "Can you help me with these bags, please?",
      "me",
      "What kind of word is the highlighted word?",
      "sentence roles",
      [
        ["a", "a subject pronoun — it does the action"],
        ["b", "an object pronoun — it receives the action"],
        ["c", "a possessive adjective"],
        ["d", "a reflexive pronoun"],
      ],
      "b",
      fbx(
        "an object pronoun — it receives the action. Me cannot be the doer; the doer is you.",
        "Help is the action; me receives the help. Object pronouns (me, you, him, her, it, us, them) come after the verb.",
        {
          whyWrong: "I would be the doer form; me cannot do the action. Possessive my would need a noun after it (my bags).",
          rule: ["Subject does, object receives", "I help her. She helps me."],
          similar: ["The teacher praised them after the test.", "El profesor los elogió después del examen."],
          revise: ["ch-11-l-02", "Object Pronouns teaches the receiving forms.", "Object Pronouns"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["pronouns", "objects"] },
    ),
  ),
  entry(
    11, 3, "possessive adjectives",
    qCorr(
      "One word is wrong. Write the sentence correctly.",
      "The dog wagged it tail when we arrived.",
      ["The dog wagged its tail when we arrived."],
      fbx(
        "The dog wagged its tail when we arrived.",
        "Its (no apostrophe) is the possessive: the tail belongs to the dog. It's with an apostrophe means it is.",
        {
          whyWrong: "It tail has no possessor. Its is the possessive adjective that matches his/her for things and animals.",
          rule: ["its = belonging to it", "The dog wagged its tail. It's = it is: It's cold today."],
          similar: ["The cat licked its paws.", "El gato se lamió las patas."],
          revise: ["ch-11-l-03", "Possessive Adjectives teaches its vs it's.", "Possessive Adjectives"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["possessives", "its"] },
    ),
  ),
  entry(
    11, 4, "possessive pronouns",
    qMatch(
      "Match each possessive adjective with its pronoun form.",
      [
        ["l1", "my book"],
        ["l2", "your car"],
        ["l3", "her idea"],
        ["l4", "our house"],
      ],
      [
        ["r1", "ours"],
        ["r2", "mine"],
        ["r3", "hers"],
        ["r4", "yours"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r3"],
        ["l4", "r1"],
      ],
      fbx(
        "my → mine, your → yours, her → hers, our → ours",
        "The pronoun form stands alone: this book is mine. It never takes a noun after it.",
        {
          whyWrong: "Mine book is impossible: the pronoun form replaces the noun, so it appears on its own.",
          rule: ["Adjective + noun vs pronoun alone", "my book (adjective) — this is mine (pronoun, no noun after)."],
          similar: ["That coat is hers, not yours.", "Ese abrigo es suyo, no tuyo."],
          revise: ["ch-11-l-04", "Possessive Pronouns and Demonstratives teaches the two forms.", "Possessive Pronouns and Demonstratives"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["possessives", "pronouns"] },
    ),
  ),
  entry(
    11, 4, "demonstratives",
    qMcq(
      "Choose the correct word: ___ keys are these in your hand?",
      [
        ["a", "Whose"],
        ["b", "Who"],
        ["c", "Which one"],
        ["d", "What"],
      ],
      "a",
      fbx("Whose", "Whose asks about possession: whose keys? The keys are in your hand, so the question is about the owner.", {
        whyWrong: "Who asks about people (who is that?), not possession. Whose is the possessive question word.",
        rule: ["Whose = belonging", "Whose bag is this? — It's mine."],
        similar: ["Whose phone is ringing outside?", "¿De quién es el teléfono que suena fuera?"],
        revise: ["ch-11-l-04", "Possessive Pronouns and Demonstratives covers whose.", "Possessive Pronouns and Demonstratives"],
      }),
      { difficulty: "medium", skill: "grammar", tags: ["question words", "possessives"] },
    ),
  ),
  entry(
    11, 3, "possessives in listening",
    qLis(
      "Listen and answer: whose chairs are they?",
      "This is our classroom, and those are your chairs by the window.",
      "Whose chairs are they?",
      ["yours", "they are yours", "your chairs", "the chairs are yours"],
      fbx(
        "yours",
        "The sentence says those are your chairs — the chairs belong to you, so the standalone pronoun is yours.",
        {
          whyWrong: "Our describes the classroom; the chairs are introduced with your. Listening for the word before chairs (your) gives the owner.",
          rule: ["your + noun; yours alone", "Your chairs (before the noun) — they are yours (standing alone)."],
          similar: ["This is my seat and that is yours.", "Este es mi asiento y ese es tuyo."],
          revise: ["ch-11-l-04", "Possessive Pronouns and Demonstratives teaches your vs yours in speech.", "Possessive Pronouns and Demonstratives"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "possessives"] },
    ),
  ),
  entry(
    11, 4, "pronouns in dictation",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "She lent me her pen because mine was broken.",
      ["She lent me her pen because mine was broken."],
      fbx(
        "She lent me her pen because mine was broken.",
        "Three pronoun forms in one sentence: she (subject), me (object), her (possessive adjective), mine (possessive pronoun).",
        {
          whyWrong: "The classic slips: writing I instead of me after lent, or my instead of mine at the end. Check each word's job.",
          rule: ["Each pronoun has one job", "She does it, me receives it, her pen belongs to her, mine stands alone."],
          similar: ["He gave us his notes because ours were lost.", "Nos dio sus apuntes porque los nuestros se perdieron."],
          revise: ["ch-11-l-04", "Possessive Pronouns and Demonstratives covers mine vs my.", "Possessive Pronouns and Demonstratives"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["dictation", "pronouns"] },
    ),
  ),
  entry(
    11, 5, "pronoun power",
    qSpeak(
      "Speaking challenge: describe Omar and his dog.",
      "Imagine a boy called Omar and his dog. Say three sentences out loud using the words he and his at least once each.",
      ["He is my friend.", "His dog is playful.", "He walks his dog every day."],
      ["he", "his"],
      fbx(
        "Three spoken sentences about Omar using he and his, for example: He is my neighbour. His dog is old. He walks it in the park.",
        "The machine checks that both words appear; the rest is your fluency practice. Saying pronouns out loud fixes the he/him and his/him slips faster than reading.",
        {
          whyWrong: "Saying Omar repeatedly is not wrong, but the exercise trains pronouns: use he for the doer and his for what belongs to him.",
          rule: ["he does, his owns", "He plays. His dog barks."],
          similar: ["She sings and her sister listens.", "Ella canta y su hermana escucha."],
          revise: ["ch-11-l-05", "Pronoun Power reviews all the pronoun forms together.", "Pronoun Power and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "pronouns"], hints: ["Start with a simple identity sentence: He is …", "Add something that belongs to Omar: His dog is …", "Finish with an action: He + verb."] },
    ),
  ),

  // --------------------------------------------------------------- CH-12 Be, Have and Do
  entry(
    12, 1, "be affirmative",
    qFill(
      "Complete the sentence with the correct form of be.",
      "My parents ___ teachers at the same school.",
      ["are"],
      fbx(
        "are",
        "Parents is plural, so the plural form of be is are: my parents are teachers.",
        {
          whyWrong: "Is goes with one (my mother is). With two or more people, be becomes are.",
          rule: ["Be matches the subject", "I am, he/she/it is, you/we/they are."],
          similar: ["We are students in the same class.", "Somos estudiantes de la misma clase."],
          revise: ["ch-12-l-01", "Am, Is, Are: Affirmative teaches the forms of be.", "Am, Is, Are: Affirmative"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["be", "agreement"] },
    ),
  ),
  entry(
    12, 2, "be negative",
    qCorr(
      "One word is wrong. Write the sentence correctly.",
      "She no is happy today.",
      ["She is not happy today.", "She isn't happy today."],
      fbx(
        "She is not happy today.",
        "English makes negatives with be + not: is not (isn't). The word no belongs to nouns (no time), not to verbs.",
        {
          whyWrong: "No before a verb is a direct translation trap. English puts not after be: is not, are not, am not.",
          rule: ["be + not", "She is not / She isn't. They are not / They aren't."],
          similar: ["The shops are not open on Sunday.", "Las tiendas no abren los domingos."],
          revise: ["ch-12-l-02", "Am, Is, Are: Negatives and Questions teaches be + not.", "Am, Is, Are: Negatives and Questions"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["be", "negatives"] },
    ),
  ),
  entry(
    12, 3, "was and were",
    qGid(
      "Label the highlighted word in the sentence.",
      "The children were noisy yesterday morning.",
      "were",
      "What is the highlighted word?",
      "verb forms",
      [
        ["a", "the past plural of be"],
        ["b", "the present of be"],
        ["c", "the past of have"],
        ["d", "an auxiliary for questions"],
      ],
      "a",
      fbx(
        "were is the past plural of be",
        "Be has two past forms: was (I, he, she, it) and were (you, we, they). Children is plural, so the sentence needs were.",
        {
          whyWrong: "Was belongs to one child (the child was). With children, the plural form were is required.",
          rule: ["was / were", "I was, he was. We were, they were, you were."],
          similar: ["The students were tired after the trip.", "Los estudiantes estaban cansados después del viaje."],
          revise: ["ch-12-l-03", "Was and Were teaches the two past forms of be.", "Was and Were"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["be", "past"] },
    ),
  ),
  entry(
    12, 4, "have and has",
    qMcq(
      "Choose the correct form: My brother ___ two cats.",
      [
        ["a", "has"],
        ["b", "have"],
        ["c", "haves"],
        ["d", "is"],
      ],
      "a",
      fbx("has", "He/she/it takes has in the present: my brother has. I/you/we/they take have.", {
        whyWrong: "Have goes with I, you, we, they. One brother is he, so the form is has.",
        rule: ["have vs has", "I have, they have. He, she, it has."],
        similar: ["She has a bicycle and we have a car.", "Ella tiene una bicicleta y nosotros tenemos un coche."],
        revise: ["ch-12-l-04", "Have and Has teaches the third-person form.", "Have and Has"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["have", "agreement"] },
    ),
  ),
  entry(
    12, 5, "do and does",
    qLis(
      "Listen and answer: does the sister work here?",
      "Does your sister work here? No, she doesn't. She works at the hospital.",
      "Does the sister work here?",
      ["no", "no she doesn't", "she doesn't", "no, she doesn't"],
      fbx(
        "No, she doesn't",
        "The short answer to a do/does question is yes/no + pronoun + does/doesn't. The answer also tells you where she really works.",
        {
          whyWrong: "She don't is the common slip: with she, the negative short form is doesn't.",
          rule: ["Short answers with do/does", "Does she work? — Yes, she does. / No, she doesn't."],
          similar: ["Do you live here? — Yes, I do.", "¿Vives aquí? — Sí."],
          revise: ["ch-12-l-05", "Do and Does teaches short answers.", "Do and Does"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["do", "questions"] },
    ),
  ),
  entry(
    12, 3, "be in reading",
    qRd(
      "Read the text and answer the question.",
      "Yesterday at the farm",
      "Yesterday my cousins and I visited a farm. The weather was cold, and the animals were hungry. The farmer was happy to see us. He gave the horses food, and they were quiet after that. We were tired on the way home, but it was a good day.",
      "How were the animals at the start of the visit?",
      [
        ["a", "hungry"],
        ["b", "quiet"],
        ["c", "tired"],
        ["d", "cold and hungry"],
      ],
      "d",
      fbx(
        "cold and hungry",
        "Careful: the weather was cold (not the animals), and the animals were hungry at the start. Quiet came later, after the food. The trap answer is hungry alone — the text gives two facts about the start.",
        {
          whyWrong: "Quiet describes the horses after eating; tired describes the visitors. Each past form of be belongs to its own subject — read who was/were before the adjective.",
          rule: ["Track was/were subjects", "The weather was… the animals were… they were… — match each description to its owner."],
          similar: ["The soup was hot and the plates were cold.", "La sopa estaba caliente y los platos fríos."],
          revise: ["ch-12-l-03", "Was and Were practises past description sentences like these.", "Was and Were"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "was-were"] },
    ),
  ),
  entry(
    12, 6, "verb choice",
    qCorr(
      "One verb is wrong. Write the sentence correctly.",
      "Do you are hungry after school?",
      ["Are you hungry after school?"],
      fbx(
        "Are you hungry after school?",
        "Hungry is a state, so the question uses be alone: are you hungry? Do is for actions (do you play?). Do and be never stack up in one question.",
        {
          whyWrong: "Do you are mixes two question machines. With be, the verb itself moves to the front: Are you…?",
          rule: ["Be questions invert", "You are hungry → Are you hungry? No do needed."],
          similar: ["Is she a doctor? Are they at home?", "¿Es ella doctora? ¿Están en casa?"],
          revise: ["ch-12-l-06", "The Three Verbs Together compares be, have and do questions.", "The Three Verbs Together and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["questions", "be"] },
    ),
  ),
  entry(
    12, 6, "be questions",
    qSb(
      "Challenge: build the question from the tiles. One tile is extra.",
      ["where", "are", "you", "from", "do", "originally"],
      ["Where are you from?"],
      fbx(
        "Where are you from?",
        "Questions with be move the verb before the subject: where ARE you from. The tile do is the trap — do never joins a be question.",
        {
          whyWrong: "Where do you are from stacks two verbs. Be questions invert be and the subject, nothing more.",
          rule: ["Q-word + be + subject", "Where are you from? What is your name? How old are you?"],
          similar: ["How is your mother today?", "¿Cómo está tu madre hoy?"],
          revise: ["ch-12-l-06", "The Three Verbs Together shows which verb builds which question.", "The Three Verbs Together and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["questions", "sentence building"], hints: ["Questions with be start with the question word.", "Then comes the verb — which one: are or do?", "The subject you follows the verb. One tile is a trap."] },
    ),
  ),

  // ------------------------------------------------------- CH-13 Present Simple Tense
  entry(
    13, 1, "uses of present simple",
    qMcq(
      "Which sentence describes a routine?",
      [
        ["a", "I drink tea every morning."],
        ["b", "I am drinking tea now."],
        ["c", "I drank tea yesterday."],
        ["d", "I will drink tea later."],
      ],
      "a",
      fbx("I drink tea every morning.", "Present simple + every morning describes a habit. The -ing form is happening now; the other two are past and future.", {
        whyWrong: "Am drinking is the present continuous (right now). Drank is past, will drink is future. Routines use the plain present simple.",
        rule: ["Present simple = habits and facts", "Every day, usually, on Mondays → present simple."],
        similar: ["She catches the bus at eight.", "Ella coge el autobús a las ocho."],
        revise: ["ch-13-l-01", "Meaning and Uses explains when present simple is the right tense.", "Meaning and Uses"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["present simple", "routines"] },
    ),
  ),
  entry(
    13, 2, "third-person -s",
    qFill(
      "Complete the sentence with the correct present simple form.",
      "She ___ to school by bus.",
      ["goes"],
      fbx(
        "goes",
        "With he, she and it, the present simple verb takes -s: she goes. Go adds -es because it ends in -o.",
        {
          whyWrong: "Go is the I/you/we/they form. The third person she needs goes.",
          rule: ["Third person singular + s", "He works, she goes, it rains."],
          similar: ["He watches TV after dinner.", "Él ve la televisión después de cenar."],
          revise: ["ch-13-l-02", "Structure and the Third-Person -s teaches exactly this form.", "Structure and the Third-Person -s"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["present simple", "third person"] },
    ),
  ),
  entry(
    13, 3, "affirmative errors",
    qCorr(
      "One verb form is wrong. Write the sentence correctly.",
      "My father work in a bank near the station.",
      ["My father works in a bank near the station."],
      fbx(
        "My father works in a bank near the station.",
        "My father is he, so the verb takes the third-person -s: works.",
        {
          whyWrong: "Work is the form for I/you/we/they. One father = he → works.",
          rule: ["He/she/it + verb-s", "My father works. They work."],
          similar: ["My sister plays the violin.", "Mi hermana toca el violín."],
          revise: ["ch-13-l-03", "Affirmative Sentences drills the -s form.", "Affirmative Sentences"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["present simple", "agreement"] },
    ),
  ),
  entry(
    13, 4, "negative sentences",
    qCorr(
      "One verb is wrong. Write the sentence correctly.",
      "She don't like coffee in the evening.",
      ["She doesn't like coffee in the evening."],
      fbx(
        "She doesn't like coffee in the evening.",
        "With he/she/it, the negative auxiliary is does + not (doesn't), and the main verb returns to its plain form: doesn't like.",
        {
          whyWrong: "Don't belongs to I/you/we/they. Also note: after doesn't, the -s disappears — never doesn't likes.",
          rule: ["doesn't + plain verb", "She doesn't like. They don't like."],
          similar: ["He doesn't eat meat.", "Él no come carne."],
          revise: ["ch-13-l-04", "Negative Sentences teaches don't/doesn't.", "Negative Sentences"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["present simple", "negatives"] },
    ),
  ),
  entry(
    13, 5, "frequency adverbs",
    qMcq(
      "Which sentence puts the frequency adverb in the right place?",
      [
        ["a", "He always eats breakfast at seven."],
        ["b", "He eats always breakfast at seven."],
        ["c", "He eats breakfast always at seven."],
        ["d", "Always he eats breakfast at seven."],
      ],
      "a",
      fbx("He always eats breakfast at seven.", "Frequency adverbs (always, usually, often, sometimes, never) go before the main verb but after be.", {
        whyWrong: "Splitting the verb from its object (eats always breakfast) or starting with the adverb breaks the normal pattern. Before the main verb is the home position.",
        rule: ["Adverb before main verb", "She often smiles. He is always late. (After be!)"],
        similar: ["We usually walk to school together.", "Normalmente caminamos juntos a la escuela."],
        revise: ["ch-13-l-05", "Questions and Frequency Adverbs teaches adverb placement.", "Questions and Frequency Adverbs"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["adverbs", "word order"] },
    ),
  ),
  entry(
    13, 5, "dictation of routines",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "We sometimes play football after school.",
      ["We sometimes play football after school."],
      fbx(
        "We sometimes play football after school.",
        "The frequency adverb sometimes sits before the verb play — that position is the point of this dictation.",
        {
          whyWrong: "Writing We play sometimes football moves the adverb between the verb and its object — understandable but not the standard position.",
          rule: ["sometimes/usually/always before the verb", "We sometimes play. They never watch TV."],
          similar: ["I never drink coffee at night.", "Nunca bebo café de noche."],
          revise: ["ch-13-l-05", "Questions and Frequency Adverbs covers adverb positions.", "Questions and Frequency Adverbs"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "adverbs"] },
    ),
  ),
  entry(
    13, 6, "routines in reading",
    qRd(
      "Read the text and answer the question.",
      "Ana's week",
      "Ana gets up at six and waters her plants before work. On Mondays and Wednesdays she teaches a morning class, and her students arrive on time. At the weekend she doesn't work: she visits her grandmother, cooks a big lunch, and reads in the afternoon.",
      "What does Ana do at the weekend?",
      [
        ["a", "She works at a school."],
        ["b", "She visits her grandmother and reads."],
        ["c", "She teaches a morning class."],
        ["d", "She waters her plants before work."],
      ],
      "b",
      fbx(
        "She visits her grandmother and reads",
        "The text says at the weekend she doesn't work — she visits, cooks and reads. The other options are weekday activities.",
        {
          whyWrong: "Morning classes are Mondays and Wednesdays; watering plants is a weekday morning habit. The weekend sentence starts with doesn't work, then lists the real weekend activities.",
          rule: ["Skim for the time phrase first", "Find at the weekend, then read only that part."],
          similar: ["On Sundays he doesn't study; he plays tennis.", "Los domingos no estudia; juega al tenis."],
          revise: ["ch-13-l-06", "Talking About Daily Routines practises reading weekly schedules.", "Talking About Daily Routines and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "routines"] },
    ),
  ),
  entry(
    13, 6, "routine writing",
    qWrite(
      "Writing challenge: your weekday routine.",
      "Write four sentences about your weekday routine. Use two frequency adverbs (always, usually, often, sometimes, never) and the words morning and evening at least once each.",
      30,
      ["always", "usually"],
      fbx(
        "Four present-simple sentences describing your routine, for example: I always get up at seven. In the morning I usually study English. My sister often cooks in the evening. We never watch TV late.",
        "The machine checks that always or usually appears (plus one more frequency adverb listed in the task) and that you reach 30 words. Third-person -s is the detail to watch if you write about family members.",
        {
          whyWrong: "Typical slips: forgetting the -s (my mother cook…), or placing the adverb after the verb (I get always up).",
          rule: ["Present simple for routines", "Habit verbs in present simple; adverbs before the main verb."],
          similar: ["My brother usually studies at night.", "Mi hermano suele estudiar de noche."],
          revise: ["ch-13-l-05", "Questions and Frequency Adverbs teaches the adverb placement you need here.", "Questions and Frequency Adverbs"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "routines"], hints: ["Start with your morning: what do you always do first?", "Add frequency words before the verbs.", "If you write about another person, remember the -s on the verb."] },
    ),
  ),
];
