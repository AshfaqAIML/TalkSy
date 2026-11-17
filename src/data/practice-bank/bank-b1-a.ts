/**
 * PROMPT 36 practice bank — B1 chapters 29–33 (part A of the B1 set).
 *
 * Tense comparison (29), past perfect and narrative tenses (30), continuous
 * and perfect forms (31), conditionals (32), active and passive voice (33).
 * B1 complexity: subordinate clauses, backshift and two-rule interactions
 * drive the hard and challenge levels.
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
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankB1A: BankEntry[] = [
  // ---------------------------------------- CH-29 Tense Comparison and Usage
  entry(
    29, 1, "present tenses compared",
    qMcq(
      "Choose the correct sentence.",
      [
        ["a", "I have been waiting for an hour, and I am still here."],
        ["b", "I am waiting for an hour, and I still here."],
        ["c", "I wait for an hour, and I have still here."],
        ["d", "I have waited for an hour, and I being still here."],
      ],
      "a",
      fbx(
        "I have been waiting for an hour, and I am still here.",
        "Duration up to now + still in progress = present perfect continuous (have been waiting). The second half confirms the action continues.",
        {
          whyWrong: "The other options break one form each: am waiting cannot carry for an hour, and the be-fragments (I still here / I being) are not English clauses.",
          rule: ["Duration + unfinished = perfect continuous", "I have been waiting for an hour (and counting)."],
          similar: ["She has been studying since six this morning.", "Lleva estudiando desde las seis."],
          revise: ["ch-29-l-01", "Present Tenses Compared sorts the three present options.", "Present Tenses Compared"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["tenses", "present perfect continuous"] },
    ),
  ),
  entry(
    29, 2, "past tenses compared",
    qGid(
      "Label the highlighted verb form in the sentence.",
      "By the time we arrived, the musicians had already packed their instruments.",
      "had already packed",
      "What is the highlighted form?",
      "verb forms",
      [
        ["a", "past perfect — an action completed before another past moment"],
        ["b", "past simple — a single finished event"],
        ["c", "past continuous — a background in progress"],
        ["d", "present perfect — relevant to now"],
      ],
      "a",
      fbx(
        "past perfect (had packed)",
        "Two past events in order: first the packing, then the arrival. Past perfect (had + participle) marks the EARLIER one.",
        {
          whyWrong: "Packed alone (past simple) would leave the sequence ambiguous; had packed explicitly places it before we arrived.",
          rule: ["had + participle = earlier past", "When we arrived, they had packed. (Packing was first.)"],
          similar: ["The film had started when we got in.", "La película había empezado cuando entramos."],
          revise: ["ch-30-l-01", "Past Perfect (CH-30) teaches the earlier-past form.", "Past Perfect"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "past perfect"] },
    ),
  ),
  entry(
    29, 3, "perfect vs past deep dive",
    qCorr(
      "The tense is wrong for the time expression. Write the sentence correctly.",
      "I have seen that film last weekend at Dara's house.",
      ["I saw that film last weekend at Dara's house."],
      fbx(
        "I saw that film last weekend at Dara's house.",
        "A finished past time (last weekend) demands past simple. Present perfect never sits next to a stated past time expression.",
        {
          whyWrong: "Have seen + last weekend is the classic clash: the perfect connects to now, but the weekend is closed history.",
          rule: ["Stated past time → past simple", "Yesterday, last week, in 2023 → saw, went, had."],
          similar: ["We visited Rome in the spring.", "Visitamos Roma en primavera."],
          revise: ["ch-29-l-03", "Present Perfect vs Past Simple: The Deep Dive covers this clash.", "Present Perfect vs Past Simple: The Deep Dive"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "correction"] },
    ),
  ),
  entry(
    29, 4, "choosing the right tense",
    qLis(
      "Listen and answer: is the speaker still reading the book?",
      "I have been reading this book all week, but I still haven't finished the last chapter.",
      "Is the speaker still reading the book?",
      ["yes", "yes she has", "yes he has", "yes they have"],
      fbx(
        "Yes — the activity is unfinished",
        "Have been reading (duration) + haven't finished (result) together mean the reading is ongoing. The continuous carries the unfinished feeling.",
        {
          whyWrong: "Haven't finished could suggest completion in other contexts, but with a duration phrase and still, the book is open.",
          rule: ["Still + not-yet-finished = continuous", "I've been writing — and I haven't finished."],
          similar: ["He has been fixing the car since noon.", "Lleva arreglando el coche desde el mediodía."],
          revise: ["ch-29-l-04", "Choosing the Right Tense rehearses these decisions.", "Choosing the Right Tense and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "tenses"] },
    ),
  ),
  entry(
    29, 4, "tense choice in reading",
    qRd(
      "Read the diary extract and answer the question.",
      "Diary, Tuesday",
      "I have been trying to call the clinic all morning — nobody answers. Meanwhile, the pain in my tooth has got worse, which is exactly what the dentist warned me about in May, when she said I would need treatment if I kept postponing. I finally booked an appointment this afternoon; by the time I see her, the problem will have lasted six weeks.",
      "Which event happened FIRST in the story?",
      [
        ["a", "the dentist's warning in May"],
        ["b", "the phone calls this morning"],
        ["c", "booking the appointment"],
        ["d", "the pain getting worse"],
      ],
      "a",
      fbx(
        "the dentist's warning in May",
        "The story jumps: the warning (May) predates everything else. Sequencing tools — by the time, meanwhile, in May — order the events for the reader.",
        {
          whyWrong: "The calls and the pain belong to today; the booking is this afternoon. Only the warning carries an earlier named date.",
          rule: ["Time markers order the story", "In May → this morning → this afternoon → by the time I see her."],
          similar: ["By the time we ate, the guests had left.", "Cuando comimos, los invitados ya se habían ido."],
          revise: ["ch-30-l-02", "Earlier and Later: Sequencing Tools teaches ordering.", "Earlier and Later: Sequencing Tools"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "narrative"] },
    ),
  ),
  entry(
    29, 3, "tense dictation",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "She had never tasted mango until she travelled to Colombia.",
      ["She had never tasted mango until she travelled to Colombia."],
      fbx(
        "She had never tasted mango until she travelled to Colombia.",
        "The earlier experience (never tasted) is in past perfect; the turning point (until she travelled) is past simple.",
        {
          whyWrong: "Swapping the halves (she never had tasted…) breaks the pattern: had + participle for the earlier, simple for the later.",
          rule: ["Until + past simple ends a had-clause", "I had never flown until I was twenty."],
          similar: ["He had never cooked until he left home.", "Nunca había cocinado hasta que se fue de casa."],
          revise: ["ch-30-l-01", "Past Perfect covers until-patterns.", "Past Perfect"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "past perfect"] },
    ),
  ),
  entry(
    29, 4, "tense writing",
    qWrite(
      "Writing challenge: a timeline paragraph.",
      "Write a five-sentence paragraph about a sequence of events in your life: something you had never done before a certain moment, what happened next, and what has been happening since. Use past perfect once, past simple twice, and present perfect continuous once.",
      55,
      ["had"],
      fbx(
        "A paragraph like: I had never travelled alone until 2024. That summer I took a train to the coast, and I stayed there for a month. Since then I have been saving for a longer trip. My family thought I was mad at first, but they have changed their minds. Travelling alone taught me more than any course.",
        "The machine checks that the past-perfect marker had appears and that you reach 55 words. The craft is the timeline: earlier event (had + participle), turning point (past simple), and the up-to-now consequence (perfect continuous).",
        {
          whyWrong: "The usual failure is flat past simple everywhere, which erases the sequence. The past perfect is what tells the reader which event came first.",
          rule: ["Three-layer timeline", "had done (earliest) → did (turning point) → have been doing (up to now)."],
          similar: ["I had never sung until that night.", "Nunca había cantado hasta esa noche."],
          revise: ["ch-29-l-04", "Choosing the Right Tense builds this exact decision.", "Choosing the Right Tense and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "tenses"], hints: ["Pick a real turning point in your life — a first time.", "Start with what you had never done before it.", "End with what has been happening since then."] },
    ),
  ),
  entry(
    29, 2, "tense challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["when", "we", "arrived", "the", "band", "had", "already", "left", "the", "stage", "did"],
      ["When we arrived, the band had already left the stage."],
      fbx(
        "When we arrived, the band had already left the stage.",
        "The arrival is the later event (past simple); the leaving is earlier (had left). The tile did is the trap — do-support has no place in either half.",
        {
          whyWrong: "The band did already leave would need emphatic do in a present context; here the past perfect carries the sequence alone.",
          rule: ["when + simple; earlier event + had + participle", "When we arrived, they had left."],
          similar: ["When the film ended, most people had gone.", "Cuando terminó la película, la mayoría se había ido."],
          revise: ["ch-30-l-01", "Past Perfect is the earlier-past lesson.", "Past Perfect"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["tenses", "sentence building"], hints: ["Which event happened first — arriving or leaving?", "The first event takes had + participle.", "One tile belongs to questions only — leave it out."] },
    ),
  ),

  // ------------------------------------ CH-30 Past Perfect and Narrative Tenses
  entry(
    30, 1, "past perfect form",
    qFill(
      "Complete the sentence with the past perfect.",
      "The audience ___ before the second act began.",
      ["had left", "had already left", "had gone"],
      fbx(
        "had left",
        "The leaving happened before the second act began: earlier past = had + participle.",
        {
          whyWrong: "Left alone would sequence the two events ambiguously; had left is the explicit earlier-past marker.",
          rule: ["had + participle = the earlier of two pasts", "They had left before it began."],
          similar: ["The shop had closed by the time we got there.", "La tienda había cerrado cuando llegamos."],
          revise: ["ch-30-l-01", "Past Perfect introduces the form.", "Past Perfect"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["past perfect", "form"] },
    ),
  ),
  entry(
    30, 2, "sequencing tools",
    qCorr(
      "The sequencing word is wrong. Write the sentence correctly (keep both events).",
      "After the guests had eaten, the speeches had started.",
      ["After the guests had eaten, the speeches started."],
      fbx(
        "After the guests had eaten, the speeches started.",
        "The later event (speeches started) takes the past simple; past perfect is reserved for the earlier one. After already sequences, so only one had is needed.",
        {
          whyWrong: "Two past perfects erase the sequence — the reader cannot tell which came first. One had, one simple.",
          rule: ["One had per sentence", "After X had happened, Y happened."],
          similar: ["Once the rain had stopped, we went out.", "Una vez que había parado la lluvia, salimos."],
          revise: ["ch-30-l-02", "Earlier and Later: Sequencing Tools teaches the one-had rule.", "Earlier and Later: Sequencing Tools"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["past perfect", "sequencing"] },
    ),
  ),
  entry(
    30, 3, "past perfect continuous",
    qGid(
      "Label the highlighted form in the sentence.",
      "The path was muddy because it had been raining all night.",
      "had been raining",
      "What is the highlighted form?",
      "verb forms",
      [
        ["a", "past perfect continuous — a duration before a past moment"],
        ["b", "past continuous — a background in progress"],
        ["c", "past perfect — a completed earlier action"],
        ["d", "present perfect continuous — relevant to now"],
      ],
      "a",
      fbx(
        "past perfect continuous",
        "The rain ran for a duration BEFORE the muddy morning. Past perfect continuous (had been + -ing) explains a past situation with its earlier cause.",
        {
          whyWrong: "Was raining would describe the night itself; had been raining reaches back before it and explains the mud.",
          rule: ["had been + -ing = earlier duration with a result", "The ground was wet because it had been raining."],
          similar: ["She was tired because she had been working since dawn.", "Estaba cansada porque llevaba trabajando desde el amanecer."],
          revise: ["ch-30-l-03", "Past Perfect Continuous and Narrative Flow teaches the explaining tense.", "Past Perfect Continuous and Narrative Flow"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "past perfect continuous"] },
    ),
  ),
  entry(
    30, 2, "narrative sequencing",
    qReord(
      "Put the words in order to make a correct sentence.",
      "By the time the ambulance arrived, the crowd had dispersed.",
      fbx(
        "By the time the ambulance arrived, the crowd had dispersed.",
        "By the time introduces the later event (arrived, past simple); the earlier one (had dispersed) is in past perfect.",
        {
          whyWrong: "Placing had arrived on the ambulance half reverses the story — the ambulance came after the crowd left.",
          rule: ["By the time + simple; the rest had happened", "By the time X happened, Y had already happened."],
          similar: ["By the time we ate, the food had gone cold.", "Cuando fuimos a comer, la comida se había enfriado."],
          revise: ["ch-30-l-02", "Earlier and Later: Sequencing Tools covers by the time.", "Earlier and Later: Sequencing Tools"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["sequencing", "word order"] },
    ),
  ),
  entry(
    30, 4, "narrative reading",
    qRd(
      "Read the story and answer the question.",
      "The double booking",
      "When Farah got to the studio, the producer was already apologising. Another show had booked the same slot in October, and nobody had noticed the clash until that morning. Farah had been preparing her questions for weeks, so the cancellation hit hard. By the time she left the building, however, she had arranged a new date — and the interview turned out better than the original plan.",
      "What had Farah been doing for weeks?",
      [
        ["a", "preparing her questions"],
        ["b", "apologising to the producer"],
        ["c", "noticing the booking clash"],
        ["d", "arranging the new date"],
      ],
      "a",
      fbx(
        "preparing her questions",
        "Had been preparing is the duration-before-the-shock form. Each character in the story owns different verbs — the producer apologised, the other show booked, Farah prepared.",
        {
          whyWrong: "The apologising belongs to the producer; the clash was noticed by nobody; the new date came after. Track each past-perfect form to its subject.",
          rule: ["Who had been doing what", "Match every had-form to its owner before answering."],
          similar: ["The children had been waiting all afternoon.", "Los niños llevaban toda la tarde esperando."],
          revise: ["ch-30-l-03", "Past Perfect Continuous and Narrative Flow teaches the duration form.", "Past Perfect Continuous and Narrative Flow"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "narrative"] },
    ),
  ),
  entry(
    30, 3, "narrative listening",
    qLis(
      "Listen and answer: what explained the mess in the kitchen?",
      "The kitchen was a disaster because the children had been baking on their own all afternoon.",
      "Why was the kitchen a disaster?",
      ["because the children had been baking", "the children had been baking", "because they had been baking all afternoon", "the children had been baking on their own"],
      fbx(
        "the children had been baking all afternoon",
        "Past perfect continuous explains a past result with an earlier duration: flour everywhere because of hours of baking.",
        {
          whyWrong: "Were baking would put the mess and the baking at the same moment. The had been form reaches back before it.",
          rule: ["Result in past, cause in past perfect continuous", "It was messy because they had been cooking."],
          similar: ["The stadium was empty because the fans had been waiting for hours and left.", "El estadio estaba vacío porque los fans habían esperado horas y se fueron."],
          revise: ["ch-30-l-03", "Past Perfect Continuous and Narrative Flow is the explaining-tense lesson.", "Past Perfect Continuous and Narrative Flow"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "narrative"] },
    ),
  ),
  entry(
    30, 4, "storytelling speaking",
    qSpeak(
      "Speaking challenge: tell a two-step backstory.",
      "Tell a thirty-second story that ends in a result. Use the pattern: things had been happening (background duration) → an event happened (turning point) → the result was visible. Example: The pitch was wet because it had been raining; when the players slid, the match had to stop.",
      ["The floor was wet because it had been raining.", "When she slipped, the performance had to stop."],
      ["had been"],
      fbx(
        "A spoken story, for example: My phone was dead because I had been travelling all day without a charger. When I finally found a plug, the train had already left the station.",
        "The machine checks that had been appears — the past perfect continuous marker. The storytelling skill is layering time: duration first, event second, result last.",
        {
          whyWrong: "Telling it only in past simple flattens the layers. The had been form is what sounds B1.",
          rule: ["Duration → event → result", "It had been raining; then X happened; the result showed."],
          similar: ["He had been driving for hours when the storm began.", "Llevaba horas conduciendo cuando empezó la tormenta."],
          revise: ["ch-30-l-03", "Past Perfect Continuous and Narrative Flow models this layering.", "Past Perfect Continuous and Narrative Flow"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "narrative"] },
    ),
  ),
  entry(
    30, 2, "sequencing challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["by", "the", "time", "we", "sat", "down", "the", "film", "had", "started", "was"],
      ["By the time we sat down, the film had started."],
      fbx(
        "By the time we sat down, the film had started.",
        "By the time introduces the later action (sat down, past simple); the earlier one takes had + participle. The tile was is the trap: no be belongs in either half.",
        {
          whyWrong: "The film was started would be a passive — a completely different meaning from the sequence we are building.",
          rule: ["by the time + simple, had + participle", "By the time we arrived, it had begun."],
          similar: ["By the time she called, I had solved it.", "Cuando llamó, ya lo había resuelto."],
          revise: ["ch-30-l-02", "Earlier and Later: Sequencing Tools is the sequencing lesson.", "Earlier and Later: Sequencing Tools"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["sequencing", "sentence building"], hints: ["Which action happened later — sitting down or the film starting?", "The later action takes the past simple.", "The earlier one takes had + participle. One tile is a passive trap."] },
    ),
  ),

  // -------------------------------------- CH-31 Continuous and Perfect Forms
  entry(
    31, 1, "present perfect continuous form",
    qFill(
      "Complete the sentence with the present perfect continuous.",
      "She ___ for three hours, so she deserves a break.",
      ["has been working", "has been studying", "has been practising"],
      fbx(
        "has been working",
        "Duration up to now with an ongoing feel: has been + -ing. The result clause (deserves a break) shows the effect on the present.",
        {
          whyWrong: "Has worked states completion without the duration-in-progress feeling; the three hours demands the continuous form.",
          rule: ["has been + -ing + duration", "I have been waiting for ages."],
          similar: ["They have been living here since March.", "Viven aquí desde marzo."],
          revise: ["ch-31-l-01", "Present Perfect Continuous introduces the form.", "Present Perfect Continuous"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["tenses", "perfect continuous"] },
    ),
  ),
  entry(
    31, 2, "result vs duration",
    qMcq(
      "You see wet hair and a towel. Which sentence explains it best?",
      [
        ["a", "She has been swimming."],
        ["b", "She has swum twenty lengths."],
        ["c", "She swims every Tuesday."],
        ["d", "She is swimming now."],
      ],
      "a",
      fbx("She has been swimming.", "Visible present evidence + recent activity = present perfect continuous. The hair explains itself through the activity that caused it.", {
        whyWrong: "Has swum reports a completed achievement (with a number); swims every Tuesday is a habit; is swimming would mean right now in the water. The evidence points at a just-finished activity.",
        rule: ["Evidence now → has been + -ing", "Your eyes are red — you have been crying."],
        similar: ["The streets are wet — it has been raining.", "Las calles están mojadas; ha estado lloviendo."],
        revise: ["ch-31-l-02", "Result vs Duration: Perfect vs Perfect Continuous draws this exact line.", "Result vs Duration: Perfect vs Perfect Continuous"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "evidence"] },
    ),
  ),
  entry(
    31, 3, "contrastive errors",
    qCorr(
      "The form is wrong. Write the sentence correctly.",
      "How long are you learning English?",
      ["How long have you been learning English?"],
      fbx(
        "How long have you been learning English?",
        "How long + an activity that started in the past and continues = present perfect continuous. The present continuous cannot carry duration.",
        {
          whyWrong: "Are learning describes this moment only. Duration questions need have been + -ing.",
          rule: ["How long have you been …?", "How long have you been waiting?"],
          similar: ["How long has she been playing the violin?", "¿Cuánto tiempo lleva tocando el violín?"],
          revise: ["ch-31-l-03", "Contrastive Usage and Common Errors collects these slips.", "Contrastive Usage and Common Errors"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "questions"] },
    ),
  ),
  entry(
    31, 4, "all perfect forms",
    qMatch(
      "Match each sentence with what it emphasises.",
      [
        ["l1", "I have read the report."],
        ["l2", "I have been reading the report."],
        ["l3", "I had read the report before the meeting."],
        ["l4", "I have to read the report tonight."],
      ],
      [
        ["r1", "completed achievement — the whole thing is done"],
        ["r2", "ongoing duration — I am still in the middle"],
        ["r3", "an obligation for later — no perfect tense at all"],
        ["r4", "an earlier past — it happened before another past point"],
      ],
      [
        ["l1", "r1"],
        ["l2", "r2"],
        ["l3", "r4"],
        ["l4", "r3"],
      ],
      fbx(
        "have read = achievement; have been reading = duration; had read = earlier past; have to read = obligation (a different have!)",
        "Have wears three hats in English: perfect auxiliary, perfect continuous auxiliary and the obligation verb have to. This question trains all three side by side.",
        {
          whyWrong: "Mixing the obligation have to with the perfect have is the most common confusion at this level — they look identical but behave completely differently.",
          rule: ["Three hats for have", "have done (perfect) / have been doing (duration) / have to do (must)."],
          similar: ["I have written it; I have been writing it; I have to write it.", "Lo he escrito; llevo escribiéndolo; tengo que escribirlo."],
          revise: ["ch-31-l-04", "All Perfect Forms Together sorts the family.", "All Perfect Forms Together and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "contrast"], hints: ["One of the four is not a perfect tense at all.", "Had read reaches back before another past moment.", "Have been reading keeps you in the middle of the action."] },
    ),
  ),
  entry(
    31, 2, "duration listening",
    qLis(
      "Listen and answer: how long has the speaker known Dara?",
      "Dara and I have been friends since our first week at university, and we have been sharing a flat for the last two years.",
      "How long have they been sharing a flat?",
      ["for two years", "two years", "for the last two years", "we have been sharing a flat for two years"],
      fbx(
        "for two years",
        "Since marks the starting point (first week at university); for marks the length (two years). Both sentences are present perfect — states that continue.",
        {
          whyWrong: "Since our first week answers the friendship, not the flat. The flat period is a length — for two years.",
          rule: ["since + start; for + length", "Since 2023, for three years."],
          similar: ["I have been in this job for six months.", "Llevo seis meses en este trabajo."],
          revise: ["ch-31-l-01", "Present Perfect Continuous teaches since/for.", "Present Perfect Continuous"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "duration"] },
    ),
  ),
  entry(
    31, 3, "perfect forms in reading",
    qRd(
      "Read the text and answer the question.",
      "The restoration",
      "The bridge has been closed since February. Engineers have been checking the supports since the first cracks appeared, and they have already replaced two of the beams. The council has been promising a reopening date for months, but the work has taken longer than anyone expected.",
      "Which action is described as COMPLETED?",
      [
        ["a", "replacing two of the beams"],
        ["b", "checking the supports"],
        ["c", "promising a reopening date"],
        ["d", "taking longer than expected"],
      ],
      "a",
      fbx(
        "they have already replaced two beams",
        "Already + perfect marks completion. The other three are ongoing: checking and promising are continuous, and taking longer continues into now.",
        {
          whyWrong: "Have been checking and has been promising carry the -ing of unfinished work; has taken longer is still true now.",
          rule: ["already + perfect = done", "I have already finished. (Compare: I have been finishing — not complete.)"],
          similar: ["She has already sent the email.", "Ya ha enviado el correo."],
          revise: ["ch-31-l-04", "All Perfect Forms Together contrasts done vs ongoing.", "All Perfect Forms Together and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "tenses"] },
    ),
  ),
  entry(
    31, 4, "perfect forms speaking",
    qSpeak(
      "Speaking challenge: your week so far.",
      "Speak for thirty seconds about your current week. Use three different perfect forms: something you have already done (achievement), something you have been doing (duration), and something you have to do before Sunday (obligation).",
      ["I have already finished two assignments.", "I have been training for a race.", "I have to call the bank before Sunday."],
      ["have been", "have to"],
      fbx(
        "A spoken summary, for example: This week I have already submitted my essay. I have been getting up earlier to train. And I still have to book the dentist before Sunday.",
        "The machine checks that both have been and have to appear — the two forms learners most often blur. Speaking them in sequence trains the switch.",
        {
          whyWrong: "Using have to where have been belongs turns a report into a to-do list. Each form answers a different question: done? how long? what next?",
          rule: ["Three perfect-adjacent tools", "have done / have been doing / have to do."],
          similar: ["I have been meaning to call you.", "Llevaba tiempo queriendo llamarte."],
          revise: ["ch-31-l-04", "All Perfect Forms Together is the summary lesson.", "All Perfect Forms Together and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "tenses"] },
    ),
  ),
  entry(
    31, 3, "perfect challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["your", "eyes", "are", "red", "have", "you", "been", "crying", "did"],
      ["Your eyes are red. Have you been crying?"],
      fbx(
        "Your eyes are red. Have you been crying?",
        "Evidence in the present + a question about the activity behind it = present perfect continuous question: have you been crying?",
        {
          whyWrong: "Did you cry would ask about a finished occasion in the past. The red eyes are evidence NOW, so the perfect continuous question fits.",
          rule: ["Present evidence → have you been -ing?", "Why are the streets wet? Has it been raining?"],
          similar: ["You look tired — have you been running?", "Pareces cansado; ¿has estado corriendo?"],
          revise: ["ch-31-l-02", "Result vs Duration is the evidence lesson.", "Result vs Duration: Perfect vs Perfect Continuous"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["tenses", "sentence building"], hints: ["The red eyes are evidence in the present.", "Ask about the activity behind the evidence — which question form?", "One tile belongs to past simple questions — leave it out."] },
    ),
  ),

  // ------------------------------------------------ CH-32 Conditional Sentences
  entry(
    32, 1, "zero and first conditionals",
    qMcq(
      "Which sentence is a first conditional?",
      [
        ["a", "If the train is late, we'll miss the connection."],
        ["b", "If water freezes, it expands."],
        ["c", "If I were taller, I would play basketball."],
        ["d", "If you heat ice, it melts."],
      ],
      "a",
      fbx("If the train is late, we'll miss the connection.", "First conditional: a real future possibility — if + present simple, will + verb. The other two are zero conditionals (b, d) and one second conditional (c).", {
        whyWrong: "Zero conditionals state general truths (present + present); the second conditional imagines an unreal present (were + would).",
        rule: ["First = real future", "If it rains tomorrow, we'll stay in."],
        similar: ["If you help me, I'll finish faster.", "Si me ayudas, terminaré antes."],
        revise: ["ch-32-l-01", "Zero and First Conditionals separates the two.", "Zero and First Conditionals"],
      }),
      { difficulty: "easy", skill: "grammar", tags: ["conditionals", "first"] },
    ),
  ),
  entry(
    32, 2, "second conditional",
    qCorr(
      "The conditional is wrong for an unreal present situation. Write the sentence correctly.",
      "If I have more time, I would learn the guitar.",
      ["If I had more time, I would learn the guitar."],
      fbx(
        "If I had more time, I would learn the guitar.",
        "Second conditional (unreal present): if + past simple, would + verb. Have is first-conditional present; the dream needs had.",
        {
          whyWrong: "If I have mixes the real-future pattern with the would-result. Unreal present pairs past simple with would.",
          rule: ["If + past simple, would + verb", "If I won the lottery, I would travel."],
          similar: ["If she lived nearer, we would see her more.", "Si viviera más cerca, la veríamos más."],
          revise: ["ch-32-l-02", "Second Conditional teaches the unreal present.", "Second Conditional"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["conditionals", "second"] },
    ),
  ),
  entry(
    32, 3, "unless",
    qGid(
      "Label the highlighted word in the sentence.",
      "Call the office unless you receive a text confirmation first.",
      "unless",
      "What is the job of the highlighted word?",
      "conditionals",
      [
        ["a", "an if-not condition — the call is needed only if the text does NOT arrive"],
        ["b", "a cause — the text is the reason to call"],
        ["c", "a time marker — it says when to call"],
        ["d", "a contrast word comparing two options"],
      ],
      "a",
      fbx(
        "unless = if … not",
        "Unless flips the condition: call ONLY IF the text fails to arrive. It is a negative if.",
        {
          whyWrong: "Reading unless as because would make the text the reason for calling — exactly backwards. Unless always carries the not.",
          rule: ["unless = if not", "I won't go unless you come. (I go only if you come.)"],
          similar: ["Unless it rains, the match starts at three.", "Salvo que llueva, el partido empieza a las tres."],
          revise: ["ch-32-l-03", "Unless and Everyday Conditionals teaches the flip.", "Unless and Everyday Conditionals"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["conditionals", "unless"] },
    ),
  ),
  entry(
    32, 2, "conditional forms",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "If I knew her number, I would invite her tonight.",
      ["If I knew her number, I would invite her tonight."],
      fbx(
        "If I knew her number, I would invite her tonight.",
        "Second conditional: knew (past simple) + would invite. The meaning is present-unreal — I don't have her number now.",
        {
          whyWrong: "If I know + would invite mixes the first and second patterns. Match the halves: past simple with would.",
          rule: ["Unreal pairs", "knew/would, had/would, were/would."],
          similar: ["If we had a car, we would drive.", "Si tuviéramos coche, conduciríamos."],
          revise: ["ch-32-l-02", "Second Conditional covers the pairing.", "Second Conditional"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "conditionals"] },
    ),
  ),
  entry(
    32, 4, "choosing your conditional",
    qMcq(
      "Your friend says: 'I'm not rich, so I can't travel the world.' Report the unreal idea as a second conditional.",
      [
        ["a", "If you were rich, you could travel the world."],
        ["b", "If you are rich, you will travel the world."],
        ["c", "If you were rich, you travel the world."],
        ["d", "If you had been rich, you travelled the world."],
      ],
      "a",
      fbx(
        "If you were rich, you could travel the world.",
        "Unreal present: were + could/would. Could keeps the ability meaning of can't in the original.",
        {
          whyWrong: "Are rich states a real future (first conditional); the plain travel drops the modal; the past-perfect version shifts the whole idea into the past. The second conditional needs were + would/could.",
          rule: ["were + would/could for unreal present", "If I were you, I would rest."],
          similar: ["If he spoke French, he could work in Paris.", "Si hablara francés, podría trabajar en París."],
          revise: ["ch-32-l-04", "Choosing Your Conditional compares the three patterns.", "Choosing Your Conditional and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["conditionals", "unreal"] },
    ),
  ),
  entry(
    32, 3, "conditionals in reading",
    qRd(
      "Read the advice page and answer the question.",
      "Cheap travel tips",
      "If you book six weeks ahead, fares usually drop by a third. Unless you travel at peak times, you can also skip the queue at check-in. If I were doing this trip on a budget, I would take the night bus — it saves a hotel night. But remember: if you miss the last connection, the company won't cover your hotel.",
      "Which sentence is a second conditional (an unreal suggestion)?",
      [
        ["a", "If I were doing this trip on a budget, I would take the night bus."],
        ["b", "If you book six weeks ahead, fares usually drop."],
        ["c", "Unless you travel at peak times, you can skip the queue."],
        ["d", "If you miss the last connection, the company won't cover your hotel."],
      ],
      "a",
      fbx(
        "the night-bus sentence",
        "Were + would marks the writer's imagined choice. The others are zero (general truth), unless (if-not) and first (real future warning) conditionals.",
        {
          whyWrong: "Book/drop is a zero conditional pattern; miss/won't cover is a real future warning. Only the were-sentence imagines a hypothetical self.",
          rule: ["Four conditional tools on one page", "Zero (truths), first (real futures), unless (if-not), second (unreal)."],
          similar: ["If I were you, I would take the job.", "Yo en tu lugar aceptaría el trabajo."],
          revise: ["ch-32-l-04", "Choosing Your Conditional sorts them all.", "Choosing Your Conditional and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "conditionals"] },
    ),
  ),
  entry(
    32, 4, "conditional speaking",
    qSpeak(
      "Speaking challenge: the advice round.",
      "Give a friend advice about a problem you can invent. Use three conditional tools in one flow: if + will (real future), unless (if-not), and if I were you + would (unreal advice).",
      ["If you leave early, you'll catch the train.", "Unless it rains, the match is on.", "If I were you, I would take an umbrella."],
      ["will", "unless", "would"],
      fbx(
        "A spoken advice round, for example: If you set two alarms, you'll make the flight. Unless the traffic is terrible, the taxi takes twenty minutes. And if I were you, I would check in online tonight.",
        "The machine checks that will, unless and would all appear — the three markers of the three conditionals. Advice naturally mixes them, which is why this is the B1 exit pattern.",
        {
          whyWrong: "Staying in one conditional makes the advice monotone. The register shifts (real plan → warning → personal suggestion) carry the meaning.",
          rule: ["Three tools, one conversation", "will-futures, unless-warnings, were-would advice."],
          similar: ["If it snows, the school will close.", "Si nieva, la escuela cerrará."],
          revise: ["ch-32-l-04", "Choosing Your Conditional is the decision lesson.", "Choosing Your Conditional and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "conditionals"], hints: ["Open with a real future plan: If you …, you'll …", "Add a warning with unless.", "Close with personal advice: If I were you, I would …"] },
    ),
  ),
  entry(
    32, 2, "conditional challenge",
    qSb(
      "Challenge: build the second conditional from the tiles. One tile is extra.",
      ["if", "i", "were", "you", "i", "would", "apologise", "today", "will"],
      ["If I were you, I would apologise today."],
      fbx(
        "If I were you, I would apologise today.",
        "The advice pattern: were + would. The tile will is the trap — it belongs to first conditionals about real futures.",
        {
          whyWrong: "If I were you, I will apologise mixes the unreal if-half with a real-future result. Unreal pairs with would.",
          rule: ["were you + would", "If I were you, I'd wait."],
          similar: ["If she were here, she would help.", "Si estuviera aquí, ayudaría."],
          revise: ["ch-32-l-02", "Second Conditional is the unreal-present lesson.", "Second Conditional"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["conditionals", "sentence building"], hints: ["This is advice about an unreal situation — which conditional?", "The if-half uses were.", "The result half uses would, not will. One tile is a trap."] },
    ),
  ),

  // ------------------------------------------------ CH-33 Active and Passive Voice
  entry(
    33, 1, "the passive structure",
    qFill(
      "Complete the sentence with the past simple passive.",
      "The bridge ___ in 1932.",
      ["was built"],
      fbx(
        "was built",
        "Passive = be + past participle. The builders are unknown or unimportant; the bridge is the topic, so it takes the subject position.",
        {
          whyWrong: "Built alone has no be; the passive needs its be in the right tense: was built.",
          rule: ["be + participle in any tense", "is made, was made, has been made, will be made."],
          similar: ["These shoes were made in Spain.", "Estos zapatos se fabricaron en España."],
          revise: ["ch-33-l-01", "The Passive Structure introduces be + participle.", "The Passive Structure"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["passive", "form"] },
    ),
  ),
  entry(
    33, 2, "passive across tenses",
    qMatch(
      "Match each passive sentence with its tense.",
      [
        ["l1", "The results are published every May."],
        ["l2", "The results were published last May."],
        ["l3", "The results will be published next May."],
        ["l4", "The results have just been published."],
      ],
      [
        ["r1", "future passive"],
        ["r2", "present simple passive"],
        ["r3", "present perfect passive"],
        ["r4", "past simple passive"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r1"],
        ["l4", "r3"],
      ],
      fbx(
        "are published (present), were published (past), will be published (future), have been published (perfect)",
        "The be carries the tense; the participle never changes. Learn the be-shapes and every passive tense follows.",
        {
          whyWrong: "The participle (published) is identical in all four — only the be-part tells you the tense.",
          rule: ["Only be moves in time", "is done / was done / will be done / has been done."],
          similar: ["The letters are delivered at noon.", "Las cartas se entregan al mediodía."],
          revise: ["ch-33-l-02", "Passive Across Tenses teaches the be-shapes.", "Passive Across Tenses"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["passive", "tenses"] },
    ),
  ),
  entry(
    33, 1, "active to passive",
    qCorr(
      "Turn this active sentence into a passive one.",
      "The storm destroyed the harbour wall.",
      ["The harbour wall was destroyed by the storm."],
      fbx(
        "The harbour wall was destroyed by the storm.",
        "Passive moves the receiver (the wall) into the subject slot: was destroyed + by the storm. The doer can stay with by, or disappear when unimportant.",
        {
          whyWrong: "The wall destroyed by the storm (no was) is a fragment — the passive needs its be.",
          rule: ["Object becomes subject; be + participle + by doer", "X destroyed Y → Y was destroyed by X."],
          similar: ["The novel was written by a teenager.", "La novela fue escrita por un adolescente."],
          revise: ["ch-33-l-01", "The Passive Structure teaches the transformation.", "The Passive Structure"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["passive", "transformation"] },
    ),
  ),
  entry(
    33, 3, "passives with two objects",
    qGid(
      "Label the highlighted sentence.",
      "The committee awarded Samir a research grant, and a fellowship was offered to him as well.",
      "a fellowship was offered to him",
      "What has happened to the second sentence?",
      "voice choices",
      [
        ["a", "it is passive — the receiver became the subject, keeping the person with to"],
        ["b", "it is active — Samir does the offering"],
        ["c", "it is a question inversion"],
        ["d", "it is past perfect"],
      ],
      "a",
      fbx(
        "passive with the person kept after to",
        "Give/offer/send verbs take two objects. In the passive, either can become the subject: Samir was offered a fellowship OR a fellowship was offered to him.",
        {
          whyWrong: "The be + participle (was offered) is the passive marker; the to-phrase preserves the human receiver.",
          rule: ["Two-object passives, two shapes", "He was given a prize. / A prize was given to him."],
          similar: ["The guests were served a cold soup.", "A los invitados se les sirvió una sopa fría."],
          revise: ["ch-33-l-03", "Passives with Two Objects teaches both shapes.", "Passives with Two Objects and Common Patterns"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["passive", "two objects"] },
    ),
  ),
  entry(
    33, 2, "passive listening",
    qLis(
      "Listen and answer: who does the cooking at the retreat?",
      "At the retreat, breakfast is prepared by the hosts, but everything else is cooked together — and the kitchen is cleaned in teams.",
      "Who prepares breakfast?",
      ["the hosts", "the hosts prepare breakfast", "breakfast is prepared by the hosts"],
      fbx(
        "the hosts",
        "The passive appears when the doer matters less than the arrangement. Here the by-phrase names the doer for breakfast only.",
        {
          whyWrong: "Everything else is cooked together — the doers are the guests. Only breakfast belongs to the hosts.",
          rule: ["Passive + by = who does it", "It was written by her."],
          similar: ["The room is cleaned every morning.", "La habitación se limpia cada mañana."],
          revise: ["ch-33-l-02", "Passive Across Tenses practises by-phrases.", "Passive Across Tenses"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "passive"] },
    ),
  ),
  entry(
    33, 4, "voice choices in reading",
    qRd(
      "Read the report extract and answer the question.",
      "Safety report, week 12",
      "Three incidents were reported this week. A window was broken on Tuesday; the repair has already been ordered. Two workers were injured when a shelf collapsed, and both were taken to the clinic by colleagues. The shelf had been overloaded, and a new weight limit will be introduced next month.",
      "Why does the report use the passive throughout?",
      [
        ["a", "the focus stays on events and arrangements, not on blaming people"],
        ["b", "the passive is required after past perfect"],
        ["c", "the writer does not know any verbs in the active"],
        ["d", "reports must avoid the past simple"],
      ],
      "a",
      fbx(
        "focus on events, not blame",
        "Notice-style writing chooses the passive to keep the topic (what happened) in the spotlight. Doers appear only where they matter.",
        {
          whyWrong: "The passive is a choice, never a requirement of another tense. Every sentence here could be active — the writer's focus decides.",
          rule: ["Passive = topic control", "Use it when the receiver of the action is the story."],
          similar: ["Mistakes were made, and changes have been made.", "Se cometieron errores y se han hecho cambios."],
          revise: ["ch-33-l-04", "Voice Choices explains when and why.", "Voice Choices and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "passive"] },
    ),
  ),
  entry(
    33, 4, "voice speaking",
    qSpeak(
      "Speaking challenge: the news round.",
      "Report three imaginary news items in the passive: one present (is being built), one past (was opened), one future (will be held). Say who did it with by where it matters.",
      ["A new library is being built in the town.", "The bridge was opened by the mayor.", "A festival will be held in June."],
      ["was", "will be", "is being"],
      fbx(
        "A spoken news round, for example: A stadium is being built near the river. The old market was reopened by the council. A street festival will be held in August.",
        "The machine checks that was, will be and is being appear — the three passive be-shapes. News English lives in the passive because events, not doers, are the story.",
        {
          whyWrong: "Reporting in the active (they build a stadium) loses the news register. The passive be-shapes are what make it sound like a bulletin.",
          rule: ["News passives", "is being done / was done / will be done."],
          similar: ["The results have been announced.", "Se han anunciado los resultados."],
          revise: ["ch-33-l-04", "Voice Choices discusses register.", "Voice Choices and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["speaking", "passive"] },
    ),
  ),
  entry(
    33, 2, "passive challenge",
    qSb(
      "Challenge: build the news line from the tiles. One tile is extra.",
      ["the", "new", "line", "will", "be", "opened", "by", "the", "mayor", "next", "friday", "did"],
      ["The new line will be opened by the mayor next Friday."],
      fbx(
        "The new line will be opened by the mayor next Friday.",
        "Future passive: will be + participle. The tile did is the trap — do-support never enters a passive verb phrase.",
        {
          whyWrong: "Will did open breaks both the passive and the auxiliary system. Passive shapes are always be + participle.",
          rule: ["will be + participle", "The results will be published on Monday."],
          similar: ["The winners will be announced tonight.", "Los ganadores se anunciarán esta noche."],
          revise: ["ch-33-l-02", "Passive Across Tenses covers future passives.", "Passive Across Tenses"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["passive", "sentence building"], hints: ["Future passive starts with will be.", "The participle of open is opened.", "One tile belongs to active questions — leave it out."] },
    ),
  ),
];
