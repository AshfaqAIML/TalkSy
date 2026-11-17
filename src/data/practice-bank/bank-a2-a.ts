/**
 * PROMPT 36 practice bank — A2 chapters 19–23 (part A of the A2 set).
 *
 * Past simple (19), past continuous (20), the future (21), present perfect
 * foundations (22), modal verbs (23). Language complexity steps up with the
 * level: two-clause sentences appear, and difficulty follows structure, not
 * word count.
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
  qSb,
  qSpeak,
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankA2A: BankEntry[] = [
  // ------------------------------------------------------- CH-19 Past Simple Tense
  entry(
    19, 1, "regular past",
    qFill(
      "Complete the sentence with the past simple form.",
      "We ___ the museum on Friday afternoon. (visit)",
      ["visited"],
      fbx(
        "visited",
        "Regular verbs form the past with -ed: visit → visited. The time word on Friday confirms past simple.",
        {
          whyWrong: "Visiting is the -ing form; visit is the present. A finished time (on Friday) needs the past form.",
          rule: ["Regular past = verb + ed", "visit → visited, play → played, work → worked."],
          similar: ["They watched a film last night.", "Vieron una película anoche."],
          revise: ["ch-19-l-01", "Regular Verbs and Meaning introduces -ed forms.", "Regular Verbs and Meaning"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["past simple", "regular verbs"] },
    ),
  ),
  entry(
    19, 3, "irregular verbs",
    qMatch(
      "Match each verb with its past simple form.",
      [
        ["l1", "go"],
        ["l2", "buy"],
        ["l3", "take"],
        ["l4", "write"],
      ],
      [
        ["r1", "took"],
        ["r2", "went"],
        ["r3", "wrote"],
        ["r4", "bought"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r1"],
        ["l4", "r3"],
      ],
      fbx(
        "go → went, buy → bought, take → took, write → wrote",
        "Irregular pasts change the inside of the word. They carry the past meaning by themselves — no did needed in positive sentences.",
        {
          whyWrong: "Adding -ed (goed, buyed) is the natural instinct, but these four are irregular: the whole word changes.",
          rule: ["Irregulars carry past alone", "She went early. (Not: she did go early in plain statements.)"],
          similar: ["I wrote to him last week.", "Le escribí la semana pasada."],
          revise: ["ch-19-l-03", "Irregular Verbs I starts the irregular list.", "Irregular Verbs I"],
        },
      ),
      { difficulty: "easy", skill: "vocabulary", tags: ["irregular verbs", "past simple"], hints: ["Two of these change their vowel: go and take.", "Buy adds a t sound at the end: bought.", "Write keeps the i and changes to o."] },
    ),
  ),
  entry(
    19, 5, "negatives with did",
    qCorr(
      "One verb is wrong. Write the sentence correctly.",
      "She didn't went to the party because she was tired.",
      ["She didn't go to the party because she was tired."],
      fbx(
        "She didn't go to the party because she was tired.",
        "After didn't, the main verb returns to its plain form: didn't go. The past is already carried by did.",
        {
          whyWrong: "Didn't went doubles the past marking. Did holds the past; go stays plain.",
          rule: ["did + plain verb", "I didn't see it. She didn't come."],
          similar: ["We didn't hear the announcement.", "No oímos el anuncio."],
          revise: ["ch-19-l-05", "Negatives and Questions with Did teaches the plain-verb rule.", "Negatives and Questions with Did"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["past simple", "negatives"] },
    ),
  ),
  entry(
    19, 2, "pronunciation of -ed",
    qLis(
      "Listen and answer: how is the -ed pronounced in the verb you hear?",
      "Last weekend we visited my grandparents, walked by the river, and cooked a big dinner together.",
      "Which verb in the sentence ends the -ed with an extra syllable (an extra beat)?",
      ["visited", "visited does"],
      fbx(
        "visited (it has the extra -id beat)",
        "-ed after t and d sounds adds a whole syllable: visi-ted. After other sounds it is just a t or d sound with no extra beat.",
        {
          whyWrong: "Walked ends in a t sound and cooked ends in a d sound — no extra syllable. Only verbs whose base ends in t or d (visit, need) get the extra beat.",
          rule: ["t/d endings → -id syllable", "visited, wanted, needed — three beats, not two."],
          similar: ["She needed help and started to worry.", "Necesitaba ayuda y empezó a preocuparse."],
          revise: ["ch-19-l-02", "Pronunciation of -ed teaches the three -ed sounds.", "Pronunciation of -ed"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["pronunciation", "past simple"] },
    ),
  ),
  entry(
    19, 4, "verb forms in stories",
    qGid(
      "Label the highlighted verb in the sentence.",
      "While we were having dinner, the phone rang twice.",
      "rang",
      "What is the highlighted verb?",
      "verb forms",
      [
        ["a", "the past simple — a short finished action"],
        ["b", "the past continuous — a longer background action"],
        ["c", "the present perfect"],
        ["d", "an imperative"],
      ],
      "a",
      fbx(
        "rang is past simple",
        "The phone call is the short event that happened inside the longer dinner. Long background action → past continuous (were having); short interrupting event → past simple (rang).",
        {
          whyWrong: "Were having is the background half. Rang reports what happened — a complete event, so simple, not continuous.",
          rule: ["Interrupted actions", "While + continuous (background), past simple (interruption)."],
          similar: ["When the lights went out, we were eating.", "Cuando se fue la luz, estábamos comiendo."],
          revise: ["ch-20-l-03", "Interrupted Actions (CH-20) is the full lesson on this pattern.", "Interrupted Actions"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["past tenses", "narrative"] },
    ),
  ),
  entry(
    19, 6, "time expressions in stories",
    qRd(
      "Read the story and answer the question.",
      "The missed train",
      "Last summer we arrived at the station twenty minutes early. While we were waiting, my sister realised she had left the tickets at home. She ran to a phone box, called our father, and he drove to the station immediately. We got on the train just before the doors closed.",
      "What happened while the family was waiting?",
      [
        ["a", "the sister realised the tickets were at home"],
        ["b", "the father drove to the station"],
        ["c", "the doors closed"],
        ["d", "they arrived twenty minutes early"],
      ],
      "a",
      fbx(
        "the sister realised the tickets were at home",
        "While we were waiting sets the background; the short event inside it is the sister realising she had left the tickets at home. Arriving early and the doors closing happened at other points in the story.",
        {
          whyWrong: "The other events are real but sit outside the while-frame: the father drove after the call, the doors closed at the end, arriving early opened the story.",
          rule: ["While-frame = the long action", "Anything inside while we were waiting answers this question."],
          similar: ["While he was speaking, someone dropped a glass.", "Mientras hablaba, alguien dejó caer un vaso."],
          revise: ["ch-20-l-03", "Interrupted Actions teaches the while-frame.", "Interrupted Actions"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "narrative"] },
    ),
  ),
  entry(
    19, 6, "storytelling",
    qWrite(
      "Writing challenge: tell a small story from last week.",
      "Write a five-sentence story about something that happened last week. Use at least three past simple verbs, one past continuous (was/were + -ing), and one time expression (yesterday, last night, on Tuesday…).",
      45,
      ["yesterday", "last night", "last week", "on tuesday", "last month"],
      fbx(
        "A story like: Last Tuesday I was walking home when I met an old friend. We talked for an hour. She told me about her new job. We laughed about our school days. Finally, we exchanged numbers and promised to meet again.",
        "The machine checks that a time expression appears (one of the list) and that you reach 45 words. The craft part is yours: one clear chain of events, in order, each verb in a past form that matches its role.",
        {
          whyWrong: "The usual slips: present forms mixed into a past story (she tells me), or -ed added to irregular verbs (goed, eated).",
          rule: ["Past narrative toolbox", "Past simple for events, past continuous for backgrounds, time words to anchor the reader."],
          similar: ["When the film ended, we were crying.", "Cuando terminó la película, estábamos llorando."],
          revise: ["ch-19-l-06", "Time Expressions and Storytelling builds exactly this skill.", "Time Expressions and Storytelling"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "narrative"], hints: ["Pick one small real event from last week — keep it tiny.", "Start with the background: I was … -ing when …", "Then move the story forward with past simple verbs."] },
    ),
  ),
  entry(
    19, 4, "irregular forms challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["my", "cousin", "bought", "two", "tickets", "for", "the", "concert", "them", "yesterday"],
      ["My cousin bought two tickets for the concert yesterday."],
      fbx(
        "My cousin bought two tickets for the concert yesterday.",
        "Bought is the irregular past of buy — it carries the past by itself. The tiles them and yesterday are traps: them is an object pronoun with nothing to refer to, and yesterday duplicates the finished-time meaning already in the sentence.",
        {
          whyWrong: "Buyed does not exist; and only one time tile can stay — the sentence already ends with yesterday.",
          rule: ["Irregular pasts never take -ed", "buy → bought, already past."],
          similar: ["She brought sandwiches for the trip.", "Trajo sándwiches para el viaje."],
          revise: ["ch-19-l-04", "Irregular Verbs II extends the irregular list.", "Irregular Verbs II and Verb Forms"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["irregular verbs", "sentence building"], hints: ["Start with the subject: my cousin.", "The verb is the irregular past of buy.", "Two tickets is what he bought. One tile is a pronoun with no reference — leave it out."] },
    ),
  ),

  // -------------------------------------------------- CH-20 Past Continuous Tense
  entry(
    20, 1, "meaning of past continuous",
    qMcq(
      "Which sentence gives the background action?",
      [
        ["a", "The sun was setting when we left the beach."],
        ["b", "We left the beach at seven."],
        ["c", "The sun set at seven."],
        ["d", "We are leaving the beach."],
      ],
      "a",
      fbx("The sun was setting when we left the beach.", "The continuous paints the scene in progress (the sun setting) while a short event happens inside it (we left).", {
        whyWrong: "The sun set at seven reports a finished event with no background. The continuous is the camera that stays on.",
        rule: ["Continuous = the long shot", "While/when + short event inside a longer -ing action."],
        similar: ["It was raining when the bus arrived.", "Llovía cuando llegó el autobús."],
        revise: ["ch-20-l-01", "Meaning: The Past Camera introduces the idea.", "Meaning: The Past Camera"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["past continuous", "meaning"] },
    ),
  ),
  entry(
    20, 2, "was/were + -ing",
    qFill(
      "Complete the sentence with the past continuous.",
      "The students ___ quietly when the inspector walked in.",
      ["were working", "were studying", "were reading"],
      fbx(
        "were working (or another calm classroom activity)",
        "Students is plural → were + -ing. The background (working quietly) is interrupted by the short event (walked in).",
        {
          whyWrong: "Was working fits one student; the plural students needs were.",
          rule: ["were + -ing for plural subjects", "They were waiting. She was waiting."],
          similar: ["The dogs were sleeping by the fire.", "Los perros dormían junto al fuego."],
          revise: ["ch-20-l-02", "Was, Were + -ing builds the form.", "Was, Were + -ing"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["past continuous", "form"] },
    ),
  ),
  entry(
    20, 3, "interrupted actions",
    qCorr(
      "The two halves are in the wrong tenses. Write the sentence correctly.",
      "I was watched TV when the lights went out.",
      ["I was watching TV when the lights went out."],
      fbx(
        "I was watching TV when the lights went out.",
        "The long action (watching TV) takes the continuous; the short event (the lights went out) takes the past simple.",
        {
          whyWrong: "Was watched mixes be + past participle — that is a passive shape, not a continuous. The -ing form is required after was.",
          rule: ["be + -ing for the long action", "I was watching. Not: I was watched."],
          similar: ["She was cooking when the phone rang.", "Cocinaba cuando sonó el teléfono."],
          revise: ["ch-20-l-03", "Interrupted Actions teaches the frame.", "Interrupted Actions"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["past continuous", "correction"] },
    ),
  ),
  entry(
    20, 4, "simple vs continuous",
    qMcq(
      "Choose the sentence with the correct tense in BOTH halves.",
      [
        ["a", "While I was washing up, my brother fixed my bike."],
        ["b", "While I washed up, my brother was fixing my bike."],
        ["c", "While I was washing up, my brother was fixing my bike."],
        ["d", "While I washed up, my brother fixed my bike."],
      ],
      "a",
      fbx("While I was washing up, my brother fixed my bike.", "The while-half is the long background (continuous); the other half is the completed event (simple). Option (c) is possible English but loses the interruption meaning — the standard pattern keeps one finished action.", {
        whyWrong: "Both halves in the same tense either lose the interruption (both continuous) or lose the background (both simple). The mix is the point.",
        rule: ["While + continuous, then simple", "While she was reading, he arrived."],
        similar: ["While they were playing, it started to snow.", "Mientras jugaban, empezó a nevar."],
        revise: ["ch-20-l-04", "Past Simple vs Past Continuous is the contrast lesson.", "Past Simple vs Past Continuous"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["past tenses", "contrast"] },
    ),
  ),
  entry(
    20, 5, "describing past scenes",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "The wind was blowing and the waves were crashing against the rocks.",
      ["The wind was blowing and the waves were crashing against the rocks."],
      fbx(
        "The wind was blowing and the waves were crashing against the rocks.",
        "Scene-setting uses continuous verbs for parallel background actions — two things in progress at once.",
        {
          whyWrong: "Swapping to simple (the wind blew) turns the painting into a list of events. The -ing forms keep the scene alive.",
          rule: ["Parallel backgrounds", "A was happening and B was happening — both continuous."],
          similar: ["Birds were singing and children were playing in the park.", "Los pájaros cantaban y los niños jugaban en el parque."],
          revise: ["ch-20-l-05", "Describing Past Scenes practises scene-setting.", "Describing Past Scenes and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "scenes"] },
    ),
  ),
  entry(
    20, 5, "past scenes in reading",
    qRd(
      "Read the description and answer the question.",
      "The night market",
      "The rain had stopped, and the market was drying out. Vendors were relighting their lamps, and the smell of grilled corn was drifting between the stalls. A boy was chasing a cat between the tables while his mother was arguing loudly with a fruit seller. Everyone laughed when the cat jumped into a basket of oranges.",
      "What was happening when the cat jumped?",
      [
        ["a", "A boy was chasing it between the tables."],
        ["b", "Vendors were relighting their lamps."],
        ["c", "The rain had just stopped."],
        ["d", "The mother was buying fruit."],
      ],
      "a",
      fbx(
        "the boy was chasing the cat",
        "The laugh sentence is the short event; the chasing had been in progress around it. Every option is true of the scene, but only the chasing involves the cat directly.",
        {
          whyWrong: "The lamps and the rain belong to earlier moments in the paragraph; the mother was arguing, not buying.",
          rule: ["Find the subject of the short event, then its background", "The cat jumped — who was doing something to the cat at that moment?"],
          similar: ["When the glass broke, the waiter was carrying a tray.", "Cuando se rompió el vaso, el camarero llevaba una bandeja."],
          revise: ["ch-20-l-04", "Past Simple vs Past Continuous trains this reading skill.", "Past Simple vs Past Continuous"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "scenes"] },
    ),
  ),
  entry(
    20, 5, "scene speaking",
    qSpeak(
      "Speaking practice: set a scene from your past.",
      "Describe a moment you remember well. Say three sentences: two background actions in the past continuous (people were …ing), then one short event in the past simple that happened inside them.",
      ["The sun was shining. People were laughing. Suddenly the power went out."],
      ["was", "were"],
      fbx(
        "Three spoken sentences, for example: It was raining. My friends were waiting under the roof. Then a taxi stopped in front of us.",
        "The machine checks that was or are appears — the be of the continuous. The real practice is keeping the long actions in -ing and letting one past simple land in the middle.",
        {
          whyWrong: "Putting all three verbs in past simple flattens the scene into a list. Two -ing, one simple.",
          rule: ["Two long, one short", "A was …ing, B was …ing, then C happened."],
          similar: ["The band was playing and everyone was dancing when the lights failed.", "La banda tocaba y todo el mundo bailaba cuando fallaron las luces."],
          revise: ["ch-20-l-05", "Describing Past Scenes gives more models.", "Describing Past Scenes and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "narrative"] },
    ),
  ),
  entry(
    20, 4, "tense choice challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["while", "we", "were", "eating", "the", "waiter", "brought", "the", "dessert", "was"],
      ["While we were eating, the waiter brought the dessert."],
      fbx(
        "While we were eating, the waiter brought the dessert.",
        "The while-half needs were + -ing (long action). The other half is the completed delivery — past simple brought. The extra was would double the be.",
        {
          whyWrong: "While we were eating the waiter was brought mixes a passive shape into the event half. One be is enough.",
          rule: ["while + were -ing; event + past simple", "While we were eating, he brought."],
          similar: ["While she was speaking, a plane flew over.", "Mientras hablaba, pasó un avión."],
          revise: ["ch-20-l-04", "Past Simple vs Past Continuous is the decision lesson here.", "Past Simple vs Past Continuous"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["past tenses", "sentence building"], hints: ["The while-half is the long action: which form of eat?", "The second half is a completed action: what form of bring?", "Only one be tile belongs in the sentence."] },
    ),
  ),

  // ------------------------------------------------ CH-21 Talking About the Future
  entry(
    21, 1, "will",
    qFill(
      "Complete the prediction with will or won't.",
      "I think it ___ rain tomorrow — look at those clouds.",
      ["will"],
      fbx(
        "will",
        "Predictions based on opinion (I think) take will: it will rain. The clouds are evidence, and will states the prediction.",
        {
          whyWrong: "Won't would deny the evidence. Will + base verb is the prediction form.",
          rule: ["will for predictions", "I think she'll win. It will be hard."],
          similar: ["They will love this city.", "Les encantará esta ciudad."],
          revise: ["ch-21-l-01", "Will introduces predictions and instant decisions.", "Will"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["future", "will"] },
    ),
  ),
  entry(
    21, 2, "be going to",
    qCorr(
      "The tickets are already bought, so a plain prediction (will) is the wrong future form. Write the corrected sentence.",
      "We will travel to Peru in July — we already bought the tickets.",
      ["We are going to travel to Peru in July — we already bought the tickets.", "We're going to travel to Peru in July — we already bought the tickets."],
      fbx(
        "We are going to travel to Peru in July.",
        "Be going to + verb states a plan decided before the moment of speaking. The version in the question was already correct in shape — the test is that you recognised a plan and kept going to, not will.",
        {
          whyWrong: "Will travel would turn the plan into a prediction. With evidence of a prior decision (tickets bought), going to is the right form.",
          rule: ["going to = plan; will = decision now", "We're going to move. OK, I'll help you (decided this second)."],
          similar: ["She's going to study medicine.", "Va a estudiar medicina."],
          revise: ["ch-21-l-02", "Be Going To teaches planned futures.", "Be Going To"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["future", "going to"] },
    ),
  ),
  entry(
    21, 3, "arrangements",
    qGid(
      "Label the highlighted form in the sentence.",
      "I can't meet at six — I'm playing football with Omar that evening.",
      "I'm playing",
      "What is the highlighted form doing?",
      "future forms",
      [
        ["a", "a fixed arrangement (present continuous for the future)"],
        ["b", "an action happening right now"],
        ["c", "a prediction with will"],
        ["d", "a plan with going to"],
      ],
      "a",
      fbx(
        "a fixed arrangement",
        "Present continuous + a future time (that evening) = a diary arrangement. This is stronger than a plan: it is in the calendar.",
        {
          whyWrong: "Right now would need a present moment; the future time that evening moves it forward. Will and going to would work but miss the fixed-arrangement flavour.",
          rule: ["Present continuous = diary future", "I'm flying on Monday. We're meeting at seven."],
          similar: ["They're getting married in June.", "Se casan en junio."],
          revise: ["ch-21-l-03", "Present Continuous for Arrangements teaches the diary future.", "Present Continuous for Arrangements"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["future", "arrangements"] },
    ),
  ),
  entry(
    21, 4, "future questions",
    qDict(
      "Listen and type the question exactly as you hear it.",
      "What are you doing this weekend?",
      ["What are you doing this weekend?"],
      fbx(
        "What are you doing this weekend?",
        "The question about plans uses the present continuous with a future time. Asking about someone's diary needs this form.",
        {
          whyWrong: "What do you do this weekend would ask about a habit, which the weekend is not.",
          rule: ["Ask plans with be + -ing + future time", "What are you doing tomorrow?"],
          similar: ["When are they arriving?", "¿Cuándo llegan?"],
          revise: ["ch-21-l-04", "Future Questions practises asking about plans.", "Future Questions"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["questions", "future"] },
    ),
  ),
  entry(
    21, 5, "choosing your future form",
    qMcq(
      "You have just decided, this second, to help your friend. What do you say?",
      [
        ["a", "Don't worry — I'll help you."],
        ["b", "Don't worry — I help you."],
        ["c", "Don't worry — I'm helping you every day."],
        ["d", "Don't worry — I helped you."],
      ],
      "a",
      fbx("I'll help you", "Decisions made at the moment of speaking take will: I'll (= I will) help you.", {
        whyWrong: "The plain present states a habit, the continuous describes something already in progress, and the past is finished. Instant decisions need will.",
        rule: ["will = decided now", "I'll call him. I'll have the soup."],
        similar: ["That bag looks heavy — I'll carry it.", "Esa bolsa parece pesada; la llevo yo."],
        revise: ["ch-21-l-05", "Choosing Your Future compares all three future forms.", "Choosing Your Future and Chapter Review"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["future", "will"] },
    ),
  ),
  entry(
    21, 5, "future plans in reading",
    qRd(
      "Read the message and answer the question.",
      "A note from Dina",
      "Hi! Quick plan for Friday: Dina has already booked the restaurant, so we're meeting at eight outside the cinema — she's driving, so we don't need tickets for the bus. I'm going to bring my camera because the light at the river is beautiful at sunset. If it rains, we'll just stay in the café until it stops.",
      "What is a fixed arrangement (in the diary)?",
      [
        ["a", "meeting at eight outside the cinema"],
        ["b", "bringing the camera"],
        ["c", "staying in the café"],
        ["d", "the rain stopping"],
      ],
      "a",
      fbx(
        "meeting at eight outside the cinema",
        "The diary arrangement is the present continuous one: we're meeting at eight. The camera is a going-to plan; the café and the rain are conditional futures with will.",
        {
          whyWrong: "Each future form carries a different certainty. Only the present continuous is a booked, fixed time in the diary.",
          rule: ["Three futures, three certainties", "Arrangement (diary) > plan (going to) > prediction (will)."],
          similar: ["I'm flying at six and I'm going to sleep on the plane.", "Vuelo a las seis y voy a dormir en el avión."],
          revise: ["ch-21-l-05", "Choosing Your Future sorts the three forms.", "Choosing Your Future and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "future"] },
    ),
  ),
  entry(
    21, 5, "future speaking",
    qSpeak(
      "Speaking practice: your next weekend.",
      "Say three sentences about your next weekend: one fixed arrangement (I'm …ing), one plan (I'm going to …), and one prediction (I think it will …).",
      ["I'm visiting my aunt on Saturday.", "I'm going to cook with her.", "I think it will be fun."],
      ["going to", "will"],
      fbx(
        "Three spoken sentences with the three future forms, for example: On Saturday I'm meeting friends. We're going to cook together. I think it will rain, but we don't care.",
        "The machine checks that going to and will both appear. The real training is hearing yourself choose the form that matches the certainty.",
        {
          whyWrong: "Using will for a booked arrangement sounds like a promise, not a diary entry. Match the form to how fixed the event is.",
          rule: ["Arrangement / plan / prediction", "I'm seeing. I'm going to see. I'll see."],
          similar: ["We're leaving at dawn and we're going to walk all day.", "Salimos al amanecer y vamos a caminar todo el día."],
          revise: ["ch-21-l-05", "Choosing Your Future gives the decision rules.", "Choosing Your Future and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "future"] },
    ),
  ),
  entry(
    21, 3, "future form challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["i'm", "meeting", "my", "dentist", "at", "five", "tomorrow", "will", "evening"],
      ["I'm meeting my dentist at five tomorrow."],
      fbx(
        "I'm meeting my dentist at five tomorrow.",
        "A booked appointment is a diary arrangement: present continuous + future time. The tile will is the trap — it belongs to predictions, not calendars.",
        {
          whyWrong: "I will meet my dentist turns a booked time into a promise. The diary form is be + -ing.",
          rule: ["Appointments love the continuous", "I'm seeing the doctor on Thursday."],
          similar: ["They're arriving on the 9:40 train.", "Llegan en el tren de las 9:40."],
          revise: ["ch-21-l-03", "Present Continuous for Arrangements is the lesson behind this.", "Present Continuous for Arrangements"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["future", "sentence building"], hints: ["Is this a booked appointment or a prediction?", "Booked events take am/is/are + -ing.", "One tile belongs to a different future form — leave it out."] },
    ),
  ),

  // ---------------------------------------------- CH-22 Present Perfect Foundations
  entry(
    22, 1, "past participles",
    qMatch(
      "Match each verb with its past participle.",
      [
        ["l1", "see"],
        ["l2", "eat"],
        ["l3", "be"],
        ["l4", "do"],
      ],
      [
        ["r1", "been"],
        ["r2", "seen"],
        ["r3", "done"],
        ["r4", "eaten"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r1"],
        ["l4", "r3"],
      ],
      fbx(
        "see → seen, eat → eaten, be → been, do → done",
        "The present perfect is have/has + past participle. These four participles are the engine of the tense.",
        {
          whyWrong: "Mixing past simple with participle (saw instead of seen) is the most common error: I have saw is impossible.",
          rule: ["have/has + participle", "I have seen. She has eaten. They have been."],
          similar: ["Have you ever done that?", "¿Has hecho eso alguna vez?"],
          revise: ["ch-22-l-01", "Have, Has and Past Participles starts the tense.", "Have, Has and Past Participles"],
        },
      ),
      { difficulty: "easy", skill: "vocabulary", tags: ["participles", "present perfect"], hints: ["Been belongs to be — it is the one that starts with b.", "Eaten is the long one: eat grows a syllable.", "Done and seen keep their vowels."] },
    ),
  ),
  entry(
    22, 2, "ever and never",
    qCorr(
      "One form is wrong. Write the sentence correctly.",
      "Have you ever went to Japan?",
      ["Have you ever been to Japan?"],
      fbx(
        "Have you ever been to Japan?",
        "Ever questions in present perfect use the participle been: have you ever been. Went is past simple and cannot follow have.",
        {
          whyWrong: "Have + went mixes two tenses. After have/has, the third form (participle) is required: been.",
          rule: ["have + been", "Have you ever been there? I have never been."],
          similar: ["I have never eaten sushi.", "Nunca he comido sushi."],
          revise: ["ch-22-l-02", "Life Experiences: Ever and Never teaches the question form.", "Life Experiences: Ever and Never"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["present perfect", "experiences"] },
    ),
  ),
  entry(
    22, 3, "just, already, yet",
    qFill(
      "Complete the sentence with the best particle.",
      "Hurry up! The film has ___ started — we are late.",
      ["already"],
      fbx(
        "already",
        "Already means sooner than expected: it has started and we are late. Yet belongs to negatives and questions; just means a moment ago.",
        {
          whyWrong: "Yet would make it a question or negative (hasn't started yet). Just would say it started seconds ago — but the point here is lateness, so already.",
          rule: ["already = sooner than expected", "He has already finished. Have you finished yet?"],
          similar: ["She has already left the office.", "Ya ha salido de la oficina."],
          revise: ["ch-22-l-03", "Just, Already, Yet teaches the three particles.", "Just, Already, Yet"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["present perfect", "particles"] },
    ),
  ),
  entry(
    22, 4, "since and for",
    qMcq(
      "Choose the correct word: We have lived in this street ___ 2019.",
      [
        ["a", "since"],
        ["b", "for"],
        ["c", "from"],
        ["d", "during"],
      ],
      "a",
      fbx("since 2019", "Since takes a starting point (a date, a moment); for takes a length (six years).", {
        whyWrong: "For needs a duration (for six years). From and during do not build present-perfect time phrases this way.",
        rule: ["since + point; for + period", "Since Monday, since 2019. For a week, for two hours."],
        similar: ["I have known her for ten years.", "La conozco desde hace diez años."],
        revise: ["ch-22-l-04", "Since and For draws the line.", "Since and For"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["present perfect", "time"] },
    ),
  ),
  entry(
    22, 5, "perfect vs past simple",
    qGid(
      "Label the highlighted verb form in the sentence.",
      "I have finished my homework, so I watched a film last night.",
      "have finished",
      "What is the highlighted form?",
      "verb forms",
      [
        ["a", "present perfect — a finished action with present relevance"],
        ["b", "past simple — a finished time in the past"],
        ["c", "present continuous — happening now"],
        ["d", "past perfect — before another past action"],
      ],
      "a",
      fbx(
        "present perfect",
        "Have finished connects the homework to now (it is done — relevance for tonight). Watched a film has a finished time (last night), so it is past simple.",
        {
          whyWrong: "Last night pins the film to the past. The homework has no stated time — its result matters now, which is perfect territory.",
          rule: ["Perfect = now-relevant; simple = then-finished", "I have finished (now I'm free). I watched (last night)."],
          similar: ["She has lost her keys, so she can't get in.", "Ha perdido las llaves, así que no puede entrar."],
          revise: ["ch-22-l-05", "Present Perfect vs Past Simple is the dedicated contrast lesson.", "Present Perfect vs Past Simple and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "contrast"] },
    ),
  ),
  entry(
    22, 5, "experience listening",
    qLis(
      "Listen and answer: has the speaker tried sushi?",
      "I have tried sushi twice — the first time I didn't like it, but the second time I loved it.",
      "Has the speaker tried sushi?",
      ["yes", "yes twice", "yes, twice", "yes he has", "yes she has"],
      fbx(
        "Yes — twice",
        "Have tried (present perfect) reports experience up to now, including how many times. The past simple didn't like / loved describe those specific occasions.",
        {
          whyWrong: "The negative didn't like belongs to the first occasion, not to the whole experience. The perfect form have tried answers the question.",
          rule: ["Experience = perfect; occasions = simple", "I have been there. I went last year."],
          similar: ["Have you ever failed an exam?", "¿Has suspendido algún examen alguna vez?"],
          revise: ["ch-22-l-02", "Life Experiences teaches the experience form.", "Life Experiences: Ever and Never"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "experiences"] },
    ),
  ),
  entry(
    22, 4, "perfect in reading",
    qRd(
      "Read the text and answer the question.",
      "Moving cities",
      "Ayaan has lived in Manchester for three years, and he has already made close friends there. He arrived in 2023 with two suitcases and no job. Since then, he has worked in two different cafés and has saved enough for a small flat. Last month he passed his driving test on the first attempt.",
      "Which sentence is about a specific finished occasion?",
      [
        ["a", "He passed his driving test last month."],
        ["b", "He has lived in Manchester for three years."],
        ["c", "He has made close friends."],
        ["d", "He has worked in two cafés."],
      ],
      "a",
      fbx(
        "he passed his driving test last month",
        "A stated past time (last month) with a finished event = past simple. The other three are present perfect: ongoing states or experiences up to now.",
        {
          whyWrong: "For three years and since then are perfect-time markers. Only last month names one finished occasion.",
          rule: ["Named time → past simple; up-to-now → perfect", "Last month he passed. Since 2023 he has worked."],
          similar: ["I have been here since May; I arrived on the 3rd.", "Llevo aquí desde mayo; llegué el día 3."],
          revise: ["ch-22-l-05", "Present Perfect vs Past Simple gives the decision rule.", "Present Perfect vs Past Simple and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "tenses"] },
    ),
  ),
  entry(
    22, 2, "experience challenge",
    qSb(
      "Challenge: build the question from the tiles. One tile is extra.",
      ["have", "you", "ever", "eaten", "street", "food", "in", "another", "country", "did"],
      ["Have you ever eaten street food in another country?"],
      fbx(
        "Have you ever eaten street food in another country?",
        "Experience questions: have + subject + ever + participle. The tile did is the trap — it belongs to past simple questions, not to perfect ones.",
        {
          whyWrong: "Did you ever eat… asks about finished occasions in a past period; with ever and no past time, the perfect is the standard choice.",
          rule: ["have/has + ever + participle", "Have you ever tried? Has she ever travelled?"],
          similar: ["Have you ever broken a bone?", "¿Te has roto algún hueso alguna vez?"],
          revise: ["ch-22-l-02", "Life Experiences: Ever and Never covers the pattern.", "Life Experiences: Ever and Never"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["questions", "sentence building"], hints: ["Start with have or has — the subject is you.", "Ever sits between subject and participle.", "The participle of eat ends in -en. One tile belongs to a different tense."] },
    ),
  ),

  // ------------------------------------------------------------- CH-23 Modal Verbs
  entry(
    23, 1, "can and could",
    qFill(
      "Complete the sentence with can, can't or couldn't.",
      "I ___ swim when I was four, but I still can't dive.",
      ["couldn't"],
      fbx(
        "couldn't",
        "Couldn't is the past of can't for ability: I was not able to swim then. The present half stays with can't.",
        {
          whyWrong: "Can't would place the inability in the present, but was four sets a past frame. Could is the past of can.",
          rule: ["could = past ability", "I could read at five. I couldn't swim then."],
          similar: ["My grandmother could knit without looking.", "Mi abuela sabía tejer sin mirar."],
          revise: ["ch-23-l-01", "Can and Could teaches past ability.", "Can and Could"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["modals", "ability"] },
    ),
  ),
  entry(
    23, 2, "may and might",
    qMcq(
      "Which sentence asks for permission most politely?",
      [
        ["a", "May I leave early today, please?"],
        ["b", "Can I leave early today?"],
        ["c", "I leave early today."],
        ["d", "Might I leaving early today?"],
      ],
      "a",
      fbx("May I leave early today, please?", "May is the formal permission modal; can is more casual. Both are grammatical — may is the polite register.", {
        whyWrong: "Can I…? is correct but informal. The other two break the form: one drops the modal, one mixes -ing into it.",
        rule: ["may = formal permission", "May I come in? Can I borrow a pen? (casual)"],
        similar: ["May I open the window?", "¿Puedo abrir la ventana?"],
        revise: ["ch-23-l-02", "May and Might covers permission and possibility.", "May and Might"],
      }),
      { difficulty: "medium", skill: "grammar", tags: ["modals", "permission"] },
    ),
  ),
  entry(
    23, 3, "must and have to",
    qCorr(
      "One modal is wrong for the meaning. Write the sentence correctly (keep the obligation).",
      "You don't must shout in the library — visitors have to speak quietly.",
      ["You mustn't shout in the library — visitors have to speak quietly.", "You mustn't shout in the library. Visitors have to speak quietly."],
      fbx(
        "You mustn't shout in the library.",
        "The negative of must (prohibition) is mustn't. Don't must is not a form in English: negatives with do never attach to modals.",
        {
          whyWrong: "Modals make their own negatives (mustn't, can't, shouldn't). Do-support belongs to ordinary verbs.",
          rule: ["mustn't = prohibited", "You mustn't smoke here. You don't have to come (no obligation)."],
          similar: ["You mustn't cross when the light is red.", "No debes cruzar cuando el semáforo está en rojo."],
          revise: ["ch-23-l-03", "Must and Have To teaches obligation and prohibition.", "Must and Have To"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["modals", "prohibition"] },
    ),
  ),
  entry(
    23, 4, "should",
    qGid(
      "Label the highlighted word in the sentence.",
      "You should rest for a few days after the journey.",
      "should",
      "What is the job of the highlighted word?",
      "modals",
      [
        ["a", "advice — it says what is a good idea"],
        ["b", "obligation — it says what is required"],
        ["c", "ability — it says what is possible"],
        ["d", "permission — it says what is allowed"],
      ],
      "a",
      fbx(
        "should gives advice",
        "Should recommends the good action without forcing it. Must would make it an obligation; can would report ability.",
        {
          whyWrong: "Must rest would sound like a doctor's order. Should keeps it as friendly advice.",
          rule: ["should = it's a good idea", "You should sleep more. You shouldn't eat so late."],
          similar: ["We should book before we travel.", "Deberíamos reservar antes de viajar."],
          revise: ["ch-23-l-04", "Should is the advice modal lesson.", "Should"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["modals", "advice"] },
    ),
  ),
  entry(
    23, 5, "choosing your modal",
    qMcq(
      "Your friend looks pale and says he feels ill. What is the best advice?",
      [
        ["a", "You should see a doctor today."],
        ["b", "You must see a doctor today."],
        ["c", "You can see a doctor today."],
        ["d", "You might see a doctor today."],
      ],
      "a",
      fbx("You should see a doctor today.", "Between friends, should gives strong advice without commanding. Must would turn you into his boss.", {
        whyWrong: "Must is for rules and obligations from authorities; can states possibility; might speculates. Advice between equals is should.",
        rule: ["Advice register", "Friends advise with should; rules demand with must."],
        similar: ["You should drink some water.", "Deberías beber un poco de agua."],
        revise: ["ch-23-l-05", "Choosing Your Modal compares all the modals by strength.", "Choosing Your Modal and Chapter Review"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["modals", "register"] },
    ),
  ),
  entry(
    23, 3, "obligation listening",
    qLis(
      "Listen and answer: is the jacket necessary?",
      "You don't have to wear a jacket inside, but you must carry your ID at all times.",
      "Is a jacket necessary inside?",
      ["no", "no it isn't", "no, it isn't", "no you don't have to"],
      fbx(
        "No — it isn't necessary",
        "Don't have to = no obligation (it's optional). Must carry your ID is the real obligation. The two forms are the classic contrast pair.",
        {
          whyWrong: "Mustn't wear would PROHIBIT the jacket — a different meaning. Don't have to leaves the choice open.",
          rule: ["don't have to = optional; mustn't = banned", "You don't have to come. You mustn't smoke."],
          similar: ["You don't have to hurry, but you mustn't be late after ten.", "No tienes que correr, pero no debes llegar tarde después de las diez."],
          revise: ["ch-23-l-03", "Must and Have To teaches both obligation forms.", "Must and Have To"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "modals"] },
    ),
  ),
  entry(
    23, 5, "modals in reading",
    qRd(
      "Read the notice and answer the question.",
      "Pool rules",
      "Welcome to the Lido. Guests must shower before entering the pool. You don't have to bring your own towel — we provide clean ones. Children under twelve can't swim without an adult, and everyone should dry off before entering the café.",
      "Which rule is a prohibition (something banned)?",
      [
        ["a", "Children under twelve can't swim without an adult."],
        ["b", "Guests must shower before entering."],
        ["c", "You don't have to bring a towel."],
        ["d", "Everyone should dry off before the café."],
      ],
      "a",
      fbx(
        "can't swim without an adult",
        "Can't here is prohibition: it is banned. Must shower is an obligation, don't have to removes one, and should recommends.",
        {
          whyWrong: "Mixing obligation (must), no-obligation (don't have to) and prohibition (can't) changes what happens if you break the rule — only the can't rule is a ban.",
          rule: ["Four strengths", "must (required) > should (advised) > can't (banned) / don't have to (optional)."],
          similar: ["You can't park here at any hour.", "No se puede aparcar aquí a ninguna hora."],
          revise: ["ch-23-l-05", "Choosing Your Modal sorts the strengths.", "Choosing Your Modal and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "modals"] },
    ),
  ),
  entry(
    23, 4, "advice challenge",
    qSb(
      "Challenge: build the advice from the tiles. One tile is extra.",
      ["you", "should", "drink", "more", "water", "before", "running", "must", "in", "the", "morning"],
      ["You should drink more water before running in the morning."],
      fbx(
        "You should drink more water before running in the morning.",
        "Advice takes should + plain verb. The tile must is the trap: it would turn friendly advice into a rule.",
        {
          whyWrong: "You must drink… is an order, not advice — the wrong register for a friend's habit.",
          rule: ["should + base verb", "You should sleep. You shouldn't worry."],
          similar: ["He should stretch before every match.", "Debería estirarse antes de cada partido."],
          revise: ["ch-23-l-04", "Should is the advice lesson.", "Should"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["modals", "sentence building"], hints: ["Is this friendly advice or a strict rule?", "Advice takes should + plain verb.", "One tile belongs to obligations — leave it out."] },
    ),
  ),
];
