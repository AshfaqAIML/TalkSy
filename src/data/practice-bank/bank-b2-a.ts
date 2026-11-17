/**
 * PROMPT 36 practice bank — B2 chapters 39–43 (part A of the B2 set).
 *
 * Advanced tense and aspect (39), advanced conditionals (40), advanced modals
 * (41), advanced passives and causatives (42), participles and advanced
 * clauses (43). B2 difficulty: rule interaction, backshift stacking, register
 * and meaning change — never just longer sentences.
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
  type BankEntry,
} from "./helpers";

export const bankB2A: BankEntry[] = [
  // ------------------------------------------- CH-39 Advanced Tense and Aspect
  entry(
    39, 2, "future perfect",
    qFill(
      "Complete the sentence with the future perfect.",
      "By June, the restoration team ___ every window in the palace.",
      ["will have replaced", "will have restored"],
      fbx(
        "will have replaced",
        "Future perfect (will have + participle) looks at a COMPLETED state from a future viewpoint: by June, the work is already done.",
        {
          whyWrong: "Will replace leaves the action unfinished at June; the by-phrase demands completion before that future moment.",
          rule: ["by + future time → will have done", "By Friday, we will have signed."],
          similar: ["By 2030 the line will have carried a billion passengers.", "Para 2030, la línea habrá transportado mil millones de pasajeros."],
          revise: ["ch-39-l-02", "Future Perfect and Future Continuous teaches the form.", "Future Perfect and Future Continuous"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["tenses", "future perfect"] },
    ),
  ),
  entry(
    39, 2, "future continuous",
    qGid(
      "Label the highlighted form in the sentence.",
      "Don't call at nine — we'll be having dinner with the neighbours.",
      "we'll be having",
      "What is the highlighted form?",
      "verb forms",
      [
        ["a", "future continuous — an action in progress at a future moment"],
        ["b", "future perfect — a completed future action"],
        ["c", "a polite request"],
        ["d", "present continuous for an arrangement"],
      ],
      "a",
      fbx(
        "future continuous",
        "Will be + -ing describes what will be IN PROGRESS at that future time. It often softens a warning (don't call — we'll be eating).",
        {
          whyWrong: "An arrangement would use the present continuous (we're having dinner), with no will. The will-be shape places the progress in the future.",
          rule: ["will be + -ing at a future time", "This time tomorrow I'll be flying."],
          similar: ["At noon they'll be announcing the results.", "Al mediodía estarán anunciando los resultados."],
          revise: ["ch-39-l-02", "Future Perfect and Future Continuous covers both future shapes.", "Future Perfect and Future Continuous"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["tenses", "future continuous"] },
    ),
  ),
  entry(
    39, 3, "narrative selection",
    qCorr(
      "Choose the wrong half and write the sentence correctly (keep both ideas).",
      "When the committee finally met, the deadline had already been passing.",
      ["When the committee finally met, the deadline had already passed."],
      fbx(
        "When the committee finally met, the deadline had already passed.",
        "States and single finished events take the perfect, not the perfect continuous: had passed. Continuous perfects are for durations with results, and a deadline passing is instantaneous.",
        {
          whyWrong: "Had been passing would imply a measurable duration of passing — the deadline either passes or it does not. Choice of aspect is the B2 skill.",
          rule: ["Aspect = how the event is framed", "Single events: perfect. Durations with results: perfect continuous."],
          similar: ["The train had already left when we arrived.", "El tren ya había salido cuando llegamos."],
          revise: ["ch-39-l-03", "Future Perfect Continuous and Narrative Selection teaches aspect choice.", "Future Perfect Continuous and Narrative Selection"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["aspect", "narrative"] },
    ),
  ),
  entry(
    39, 1, "aspect deep dive",
    qMcq(
      "Which pair is correct?",
      [
        ["a", "I have spoken to her; I've been speaking to her all morning."],
        ["b", "I have spoken to her; I have spoken to her all morning."],
        ["c", "I have been speaking to her; I have been speaking to her."],
        ["d", "I spoke to her; I speak to her all morning."],
      ],
      "a",
      fbx(
        "have spoken (achievement) + have been speaking (duration) — both correct, different meanings.",
        "The simple perfect reports a completed act; the continuous reports ongoing duration. B2 English keeps both available and chooses by meaning.",
        {
          whyWrong: "Repeating the same form twice says the same thing twice; the mixed pair is the only one that carries both meanings naturally.",
          rule: ["Two aspects, two jobs", "I've read it (done). I've been reading it (ongoing)."],
          similar: ["We've prepared the room; we've been preparing since noon.", "Hemos preparado la sala; llevamos preparándola desde el mediodía."],
          revise: ["ch-39-l-01", "Aspect Deep Dive is the whole-clause lesson.", "Aspect Deep Dive"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["aspect", "contrast"] },
    ),
  ),
  entry(
    39, 4, "contextual tense use",
    qLis(
      "Listen and answer: what will be happening at midnight?",
      "This time tomorrow the counters will have closed, but the screens in the square will be showing the results live.",
      "What will the screens be doing at midnight?",
      ["showing the results live", "be showing the results", "the screens will be showing the results"],
      fbx(
        "the screens will be showing the results live",
        "Two future shapes side by side: will have closed (completed before then) and will be showing (in progress at that moment).",
        {
          whyWrong: "The closing is the finished half; the showing is the in-progress half. Context selects the aspect.",
          rule: ["Completed by then vs in progress then", "will have done vs will be doing."],
          similar: ["At six the stands will have shut and the music will be starting.", "A las seis los puestos habrán cerrado y la música estará empezando."],
          revise: ["ch-39-l-04", "Contextual Tense Use trains the selection.", "Contextual Tense Use and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["listening", "tenses"] },
    ),
  ),
  entry(
    39, 4, "tense selection in reading",
    qRd(
      "Read the forecast and answer the question.",
      "Project update",
      "By the end of the quarter, the data team will have migrated the records, and the auditors will have been reviewing the old files for three weeks. Meanwhile, the support desk will be answering questions in both systems. If the migration slips, we will have been living with two databases for six months — which nobody wants to admit in the board meeting.",
      "Which activity will have been going on for three weeks by the end of the quarter?",
      [
        ["a", "the auditors reviewing the old files"],
        ["b", "the team migrating the records"],
        ["c", "the desk answering questions"],
        ["d", "living with two databases"],
      ],
      "a",
      fbx(
        "the auditors reviewing the old files",
        "Will have been reviewing is the future perfect continuous — a duration measured up to a future point. The migration is a completion (will have migrated) and the desk work is in-progress (will be answering).",
        {
          whyWrong: "Each future shape answers a different question: completed? in progress? how long by then? Only the reviewing carries a for-duration.",
          rule: ["Future tense selector", "will have done / will be doing / will have been doing."],
          similar: ["By May she will have been teaching here for a decade.", "En mayo llevará una década enseñando aquí."],
          revise: ["ch-39-l-03", "Future Perfect Continuous is the duration lesson.", "Future Perfect Continuous and Narrative Selection"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "tenses"] },
    ),
  ),
  entry(
    39, 4, "aspect speaking",
    qSpeak(
      "Speaking challenge: the deadline report.",
      "Report on an imaginary project in three future shapes: one thing that will have been finished by Friday (will have done), one thing your team will have been doing for a month by then, and one thing that will still be happening.",
      ["By Friday we will have signed the contract.", "We will have been testing for a month.", "The designers will be polishing the last screens."],
      ["will have been", "will be"],
      fbx(
        "A spoken update, for example: By Friday, we will have migrated the data. The auditors will have been reviewing files for three weeks by then. And the support desk will still be answering questions in both systems.",
        "The machine checks that will have been and will be appear — the two future shapes learners most often blur. Report English lives on this distinction.",
        {
          whyWrong: "Using will have done for a duration erases the length; using will be doing for a completed item promises too little. Each shape is a commitment.",
          rule: ["Three futures, three commitments", "finished by then / measured length / still going on."],
          similar: ["By June, I will have been working here for two years.", "En junio llevaré dos años trabajando aquí."],
          revise: ["ch-39-l-04", "Contextual Tense Use builds the selector.", "Contextual Tense Use and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "tenses"] },
    ),
  ),
  entry(
    39, 2, "future perfect challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["by", "june", "the", "team", "will", "have", "replaced", "every", "window", "was"],
      ["By June, the team will have replaced every window."],
      fbx(
        "By June, the team will have replaced every window.",
        "will have + participle, anchored by by June. The tile was is the trap — no past be belongs in a future perfect.",
        {
          whyWrong: "Will was replaced would drift into a passive future-perfect hybrid that English does not need here.",
          rule: ["will have + past participle", "By then, it will have happened."],
          similar: ["By Monday, the report will have gone out.", "Para el lunes, el informe habrá salido."],
          revise: ["ch-39-l-02", "Future Perfect and Future Continuous is the form lesson.", "Future Perfect and Future Continuous"],
        }
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["tenses", "sentence building"], hints: ["The anchor is by June — which future shape fits a completed state?", "will have + participle.", "One tile is a past be — leave it out."] },
    ),
  ),

  // ------------------------------------------------ CH-40 Advanced Conditionals
  entry(
    40, 1, "third conditional",
    qCorr(
      "Complete the third conditional correctly.",
      "If we left earlier, we would have caught the ferry.",
      ["If we had left earlier, we would have caught the ferry."],
      fbx(
        "If we had left earlier, we would have caught the ferry.",
        "Third conditional: unreal PAST. If + past perfect (had left), would have + participle. The version in the question mixes second-conditional if-half with a third-conditional result.",
        {
          whyWrong: "If we left pairs the past simple with would have — a mixed conditional that means something else (unreal past + past result). For a pure past regret both halves shift.",
          rule: ["had + participle → would have + participle", "If I had known, I would have called."],
          similar: ["If she had studied, she would have passed.", "Si hubiera estudiado, habría aprobado."],
          revise: ["ch-40-l-01", "Third Conditional teaches the full shift.", "Third Conditional"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["conditionals", "third"] },
    ),
  ),
  entry(
    40, 2, "mixed conditionals",
    qMcq(
      "Which sentence is a correct MIXED conditional (unreal past with a present result)?",
      [
        ["a", "If I had taken that job, I would be living in Berlin now."],
        ["b", "If I took that job, I would have lived in Berlin now."],
        ["c", "If I had taken that job, I would have lived in Berlin now."],
        ["d", "If I take that job, I would live in Berlin now."],
      ],
      "a",
      fbx(
        "If I had taken that job, I would be living in Berlin now.",
        "Mixed: past-perfect if-half (the decision happened in the past) + present-continuous result (would be living now).",
        {
          whyWrong: "(c) is a pure third conditional (past result too). (b) pairs past simple with would have. (d) mixes a real if with would. Only (a) spans past cause → present consequence.",
          rule: ["Mixed = past cause, present result", "If I had + participle…, I would be + -ing now."],
          similar: ["If we had bought the flat, we would be rich today.", "Si hubiéramos comprado el piso, hoy seríamos ricos."],
          revise: ["ch-40-l-02", "Mixed Conditionals teaches the two mixing patterns.", "Mixed Conditionals"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["conditionals", "mixed"] },
    ),
  ),
  entry(
    40, 3, "hypotheticals beyond if",
    qGid(
      "Label the highlighted construction in the sentence.",
      "Had the alarm been tested, the residents would have been warned.",
      "Had the alarm been tested",
      "What is the highlighted construction?",
      "conditionals",
      [
        ["a", "inverted third conditional — if omitted, had moved to the front"],
        ["b", "a question about the alarm"],
        ["c", "past perfect passive question"],
        ["d", "a relative clause about the alarm"],
      ],
      "a",
      fbx(
        "inversion replaces if",
        "Formal English can drop if and invert: Had X happened… = If X had happened…. Common in reports and formal writing.",
        {
          whyWrong: "The clause is not asking anything — the inversion is conditional, not interrogative. No question mark fits.",
          rule: ["Inverted conditionals", "Had I known… / Were it true… / Should you need…"],
          similar: ["Should you require assistance, please ring.", "Si necesita ayuda, por favor llame."],
          revise: ["ch-40-l-03", "Hypotheticals Beyond If and Inversion teaches the set.", "Hypotheticals Beyond If and Inversion"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["conditionals", "inversion"] },
    ),
  ),
  entry(
    40, 4, "unless and provided that",
    qFill(
      "Complete the sentence with the strongest conditional word.",
      "___ the invoice is paid by Friday, the service stops.",
      ["unless"],
      fbx(
        "unless",
        "Unless = if not: the service continues only if the invoice is paid. Provided that / as long as would keep it alive under the same condition — but the sentence frames stopping as the default.",
        {
          whyWrong: "Reading the sentence as a threat: only unless carries both the condition and the negative default.",
          rule: ["unless = if not", "Unless it rains, we go. (We go if it doesn't rain.)"],
          similar: ["Unless the part arrives, the line stays down.", "Salvo que llegue la pieza, la línea queda parada."],
          revise: ["ch-40-l-04", "Unless, Provided That compares the connectives.", "Unless, Provided That and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["conditionals", "unless"] },
    ),
  ),
  entry(
    40, 2, "conditional listening",
    qLis(
      "Listen and answer: what would be true now?",
      "If the council had approved the plan in 2022, the tram would be running by now and the city centre would be car-free.",
      "What would be true now if the plan had been approved?",
      ["the tram would be running", "the tram would be running by now and the centre would be car-free", "the tram would be running and the city centre would be car-free"],
      fbx(
        "the tram would be running (and the centre would be car-free)",
        "Mixed conditional: a past decision (had approved) with present results (would be running / would be car-free).",
        {
          whyWrong: "Would have run would place the result in the past too — but the sentence reports today's streets.",
          rule: ["Past cause, present result", "had + participle → would be + -ing now."],
          similar: ["If we had left then, we would be there now.", "Si hubiéramos salido entonces, ahora estaríamos allí."],
          revise: ["ch-40-l-02", "Mixed Conditionals is the mixing lesson.", "Mixed Conditionals"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["listening", "conditionals"] },
    ),
  ),
  entry(
    40, 3, "conditionals in reading",
    qRd(
      "Read the review and answer the question.",
      "A missed classic",
      "The gallery had a chance to buy this canvas in 1998 and passed. Had the trustees acted, the painting would hang in the north room today, and visitors would have been queuing for a decade. As it is, the work lives in a private collection; unless the family lends it, the public will never see it again.",
      "Which sentence uses INVERSION instead of if?",
      [
        ["a", "Had the trustees acted, the painting would hang in the north room today."],
        ["b", "The gallery had a chance to buy this canvas in 1998 and passed."],
        ["c", "As it is, the work lives in a private collection."],
        ["d", "Unless the family lends it, the public will never see it again."],
      ],
      "a",
      fbx(
        "Had the trustees acted…",
        "Inversion (Had + subject + participle) replaces if in formal register. The sentence is also mixed: past decision, present result (would hang today).",
        {
          whyWrong: "The unless-sentence is a first conditional; the others are plain statements. Only the had-fronted clause is the inverted one.",
          rule: ["Inversion = formal if", "Had they acted… = If they had acted…"],
          similar: ["Were this true, we would act differently.", "Si esto fuera cierto, actuaríamos de otra forma."],
          revise: ["ch-40-l-03", "Hypotheticals Beyond If and Inversion is the inversion lesson.", "Hypotheticals Beyond If and Inversion"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "conditionals"] },
    ),
  ),
  entry(
    40, 3, "regret speaking",
    qSpeak(
      "Speaking challenge: the review meeting.",
      "Review a past decision three ways in one minute: one third conditional regret (if we had…, …would have…), one mixed conditional with a present result, and one inversion (Had we…).",
      ["If we had started earlier, we would have finished.", "If we had hired her, we would be thriving now.", "Had we listened, none of this would have happened."],
      ["would have", "had"],
      fbx(
        "A spoken review, for example: If we had opened on Sundays, we would have doubled our trade. If we had kept the old menu, we would be busier today. Had the owners invested then, the roof would not leak now.",
        "The machine checks that had and would have appear — the two markers of past-unreal English. This is the register of post-mortems in real workplaces.",
        {
          whyWrong: "Plain past simple (we didn't start, so we didn't finish) states the facts but carries no review weight. The unreal forms are what make it an analysis.",
          rule: ["Three unreal tools", "third (past-past), mixed (past-present), inversion (formal)."],
          similar: ["Had I known, I would never have signed.", "Si lo hubiera sabido, nunca habría firmado."],
          revise: ["ch-40-l-03", "Hypotheticals Beyond If and Inversion teaches all three.", "Hypotheticals Beyond If and Inversion"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "conditionals"] },
    ),
  ),
  entry(
    40, 1, "third conditional challenge",
    qSb(
      "Challenge: build the third conditional from the tiles. One tile is extra.",
      ["if", "we", "had", "left", "earlier", "we", "would", "have", "caught", "the", "ferry", "did"],
      ["If we had left earlier, we would have caught the ferry."],
      fbx(
        "If we had left earlier, we would have caught the ferry.",
        "Both halves shift: had left (past perfect) and would have caught. The tile did is the trap — do-support belongs to no perfect form.",
        {
          whyWrong: "If we did leave earlier is emphatic present; the regret needs the double shift of the third conditional.",
          rule: ["Double shift for past regret", "had + participle → would have + participle."],
          similar: ["If the driver had stopped, the crash would not have happened.", "Si el conductor hubiera parado, el choque no habría ocurrido."],
          revise: ["ch-40-l-01", "Third Conditional is the regret lesson.", "Third Conditional"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["conditionals", "sentence building"], hints: ["This is a past regret — which conditional?", "The if-half needs past perfect: had + participle.", "The result needs would have + participle. One tile is from another tense family."] },
    ),
  ),

  // ------------------------------------------------ CH-41 Advanced Modal Verbs
  entry(
    41, 1, "deduction and certainty",
    qMcq(
      "The lights are on and two cars are outside. What is the strongest deduction?",
      [
        ["a", "They must be at home."],
        ["b", "They might be at home."],
        ["c", "They could be anywhere, honestly."],
        ["d", "They can't be at home."],
      ],
      "a",
      fbx(
        "They must be at home.",
        "Must + be is a confident deduction from evidence. Might/could are weaker possibilities; can't be is a confident negative deduction.",
        {
          whyWrong: "Might and could suggest the evidence is thin — but lights plus cars is strong. Can't contradicts the evidence entirely.",
          rule: ["Certainty ladder", "must (sure) > may/might (possible) > can't (sure it's false)."],
          similar: ["The floor is wet — it must have rained.", "El suelo está mojado; debe de haber llovido."],
          revise: ["ch-41-l-01", "Deduction and Certainty builds the ladder.", "Deduction and Certainty"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["modals", "deduction"] },
    ),
  ),
  entry(
    41, 2, "speculation about the past",
    qGid(
      "Label the highlighted form in the sentence.",
      "The parcel can't have arrived on Friday — the office was closed all day.",
      "can't have arrived",
      "What is the highlighted form doing?",
      "modals",
      [
        ["a", "a confident deduction that a past event did NOT happen"],
        ["b", "a prohibition about the future"],
        ["c", "a request for permission"],
        ["d", "an ability in the past"],
      ],
      "a",
      fbx(
        "can't have + participle = past deduction (negative)",
        "Modal + have + participle speculates about the past. Can't have arrived means: I'm confident it did NOT arrive.",
        {
          whyWrong: "As prohibition, can't would need a plain verb (you can't arrive). The have-arrived shape points the deduction backwards.",
          rule: ["modal + have + participle", "must have (sure it did), can't have (sure it didn't), might have (maybe)."],
          similar: ["She must have left her phone at home.", "Debe de haber dejado el teléfono en casa."],
          revise: ["ch-41-l-02", "Speculation About the Past teaches the shape.", "Speculation About the Past"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["modals", "speculation"] },
    ),
  ),
  entry(
    41, 3, "should have",
    qCorr(
      "Rewrite the omission as a criticism with should have.",
      "Nobody checked the calendar.",
      ["Somebody should have checked the calendar.", "Someone should have checked the calendar.", "They should have checked the calendar."],
      fbx(
        "Somebody should have checked the calendar.",
        "Should have + participle criticises a past omission: the right thing was not done. The regret reads backwards.",
        {
          whyWrong: "Should check would advise the future. The missed deadline is finished history, so the have-form is required.",
          rule: ["should have + participle = past criticism/regret", "I should have known."],
          similar: ["We should have booked earlier.", "Deberíamos haber reservado antes."],
          revise: ["ch-41-l-03", "Should Have, Could Have is the regret lesson.", "Should Have, Could Have: Regret and Criticism"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["modals", "criticism"] },
    ),
  ),
  entry(
    41, 3, "could have",
    qMatch(
      "Match each modal-perfect with its meaning.",
      [
        ["l1", "You could have warned me."],
        ["l2", "You must have been exhausted."],
        ["l3", "You needn't have brought food."],
        ["l4", "You might have told me earlier."],
      ],
      [
        ["r1", "you did something unnecessary"],
        ["r2", "I deduce it strongly (past)"],
        ["r3", "a reproach: the option existed and was missed"],
        ["r4", "mild reproach: it was possible and you didn't"],
      ],
      [
        ["l1", "r3"],
        ["l2", "r2"],
        ["l3", "r1"],
        ["l4", "r4"],
      ],
      fbx(
        "could have = missed chance; must have = strong deduction; needn't have = unnecessary act; might have = soft reproach",
        "Modal + have + participle is the B2 workhorse: each modal keeps its character but points into the past. These four are the ones conversation lives on.",
        {
          whyWrong: "Could and might are close cousins — could stresses the missed possibility, might the mild annoyance. Needn't have praises nobody: it says the effort was not needed.",
          rule: ["Four past modals", "could have / must have / needn't have / might have."],
          similar: ["You needn't have waited so long.", "No tenías por qué esperar tanto."],
          revise: ["ch-41-l-03", "Should Have, Could Have covers the family.", "Should Have, Could Have: Regret and Criticism"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["modals", "meaning"], hints: ["Needn't have is about unnecessary effort.", "Must have is deduction, not obligation, in this family.", "Could have and might have differ in strength of reproach."] },
    ),
  ),
  entry(
    41, 2, "speculation listening",
    qLis(
      "Listen and answer: what does the speaker deduce?",
      "The kitchen smells of smoke and the toast is black — someone must have left the grill on again.",
      "What must have happened?",
      ["someone left the grill on", "someone must have left the grill on", "somebody left the grill on again"],
      fbx(
        "someone must have left the grill on",
        "Present evidence (smell, black toast) + past deduction (must have left). The again suggests it is a habit.",
        {
          whyWrong: "Can't have left would deny it against the evidence; might have would understate the burnt toast.",
          rule: ["Evidence now → modal + have + participle then", "It must have happened."],
          similar: ["He must have missed the train.", "Debe de haber perdido el tren."],
          revise: ["ch-41-l-02", "Speculation About the Past is the deduction lesson.", "Speculation About the Past"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "modals"] },
    ),
  ),
  entry(
    41, 4, "nuanced modality in reading",
    qRd(
      "Read the note and answer the question.",
      "After the storm",
      "The fence is down and the greenhouse glass is everywhere, so the wind must have reached the garden before midnight. The neighbours' trampoline is in our pool — they can't have tied it down. We needn't have worried about the apple tree, though: it's still standing. I suppose we should have secured the chairs; hindsight is cheap.",
      "Which sentence expresses that an effort was UNNECESSARY?",
      [
        ["a", "We needn't have worried about the apple tree."],
        ["b", "The wind must have reached the garden before midnight."],
        ["c", "They can't have tied it down."],
        ["d", "We should have secured the chairs."],
      ],
      "a",
      fbx(
        "We needn't have worried",
        "Needn't have + participle: the action happened but was unnecessary (the tree was fine). The worry was wasted, not wrong.",
        {
          whyWrong: "Must have and can't have are deductions; should have secured is a regret. Only needn't have evaluates effort as unnecessary.",
          rule: ["needn't have = wasted effort, done anyway", "You needn't have cooked — we ate already."],
          similar: ["I needn't have hurried; the meeting was cancelled.", "No tenía que haberme dado prisa; cancelaron la reunión."],
          revise: ["ch-41-l-04", "Nuanced Modality compares all four.", "Nuanced Modality and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "modals"] },
    ),
  ),
  entry(
    41, 4, "regret speaking",
    qSpeak(
      "Speaking challenge: the post-mortem minute.",
      "Review an imaginary failed event in one minute using four past modals: must have (deduction), can't have (negative deduction), should have (regret), needn't have (unnecessary effort).",
      ["The caterers must have got stuck in traffic.", "They can't have read the plan.", "We should have ordered extra.", "We needn't have hired the marquee — it never rained."],
      ["must have", "should have", "can't have", "needn't have"],
      fbx(
        "A spoken post-mortem, for example: The singer must have taken the wrong train — she can't have seen our messages. We should have booked a hotel for her. And we needn't have rented the extra chairs; half the guests stood anyway.",
        "The machine checks that the four past-modal markers appear. This is exactly the register of event reviews and retrospectives.",
        {
          whyWrong: "Plain past narrative (she took the wrong train) loses the reasoning voice. The modals mark each sentence as a deduction or a judgement.",
          rule: ["Four past modals, four attitudes", "deduce, deny, regret, dismiss."],
          similar: ["You needn't have paid upfront.", "No tenías por qué pagar por adelantado."],
          revise: ["ch-41-l-04", "Nuanced Modality is the full palette.", "Nuanced Modality and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "modals"] },
    ),
  ),
  entry(
    41, 2, "modal challenge",
    qSb(
      "Challenge: build the deduction from the tiles. One tile is extra.",
      ["the", "lights", "are", "on", "they", "must", "have", "come", "home", "early", "did"],
      ["The lights are on. They must have come home early."],
      fbx(
        "The lights are on. They must have come home early.",
        "Present evidence + must have + participle = confident past deduction. The tile did is the trap — deduction never uses do-support.",
        {
          whyWrong: "They must came home is ungrammatical: after a modal, the bare infinitive or have + participle are the only options.",
          rule: ["must have + participle", "She must have forgotten."],
          similar: ["He must have left the window open.", "Debe de haber dejado la ventana abierta."],
          revise: ["ch-41-l-02", "Speculation About the Past is the deduction lesson.", "Speculation About the Past"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["modals", "sentence building"], hints: ["The evidence is present; the deduction is past.", "Use must have + participle.", "One tile is do-support — leave it out."] },
    ),
  ),

  // --------------------------------------- CH-42 Advanced Passive Constructions
  entry(
    42, 1, "passive with modals",
    qFill(
      "Complete the notice with the modal passive.",
      "Candidates ___ (must not / bring) phones into the exam hall.",
      ["must not bring", "mustn't bring", "may not bring", "cannot bring"],
      fbx(
        "must not be brought — or, addressed to people: must not bring.",
        "Modal passives: modal + be + participle (phones must not be brought). Notices often address readers directly (must not bring), which is the active twin of the same rule.",
        {
          whyWrong: "Must not bringing mixes a modal with a gerund — the passive after a modal needs be + participle, or the active must + plain verb.",
          rule: ["modal + be + participle", "The form must be signed. Results will be posted."],
          similar: ["Applications must be received by noon.", "Las solicitudes deben recibirse antes del mediodía."],
          revise: ["ch-42-l-01", "Passive with Modals and Reporting Passive teaches the shape.", "Passive with Modals and Reporting Passive"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["passive", "modals"] },
    ),
  ),
  entry(
    42, 2, "causative have",
    qCorr(
      "Rewrite the sentence as a causative arrangement with have.",
      "The mechanic inspected our brakes.",
      ["We had the brakes inspected.", "We had our brakes inspected."],
      fbx(
        "We had the brakes inspected.",
        "Causative have: have + object + participle. You arranged the service; somebody else performed it.",
        {
          whyWrong: "We had inspected the brakes would mean WE inspected them before something else. The participle after the object marks the causative.",
          rule: ["have + thing + participle", "I had the car serviced; she had her hair cut."],
          similar: ["We're having the kitchen painted next week.", "Nos van a pintar la cocina la semana que viene."],
          revise: ["ch-42-l-02", "Causative Have is the arrangement lesson.", "Causative Have"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["causative", "have"] },
    ),
  ),
  entry(
    42, 3, "causative get",
    qGid(
      "Label the highlighted construction in the sentence.",
      "After weeks of calls, we finally got the landlord to fix the roof.",
      "got the landlord to fix",
      "What is the highlighted construction?",
      "causatives",
      [
        ["a", "causative get + to-infinitive — persuasion after effort"],
        ["b", "causative have + participle — a paid arrangement"],
        ["c", "a passive with get"],
        ["d", "reported speech"],
      ],
      "a",
      fbx(
        "get + person + to + verb = persuasion",
        "Causative get works on people, with to: we got him to fix it (we talked him into it). Have + participle arranges a service; get + to-infinitive wins cooperation.",
        {
          whyWrong: "Get + participle (get something done) is informal for arranging. With the landlord persuaded after weeks of calls, the to-infinitive carries the effort.",
          rule: ["get someone to do; have something done", "I got her to sign; I had the document signed."],
          similar: ["We got the team to stay late.", "Conseguimos que el equipo se quedara hasta tarde."],
          revise: ["ch-42-l-03", "Causative Get and Complex Passives contrasts the two.", "Causative Get and Complex Passives"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["causative", "get"] },
    ),
  ),
  entry(
    42, 1, "reporting passive",
    qMatch(
      "Match each reporting passive with what it hides.",
      [
        ["l1", "It is believed that the manuscript predates the printing press."],
        ["l2", "The minister is said to be considering a inquiry."],
        ["l3", "The results are expected to be published tomorrow."],
        ["l4", "The leak is understood to have come from inside."],
      ],
      [
        ["r1", "people say so; nobody will be named"],
        ["r2", "official expectation about timing"],
        ["r3", "an anonymous consensus of scholars"],
        ["r4", "an insider account given to journalists"],
      ],
      [
        ["l1", "r3"],
        ["l2", "r1"],
        ["l3", "r2"],
        ["l4", "r4"],
      ],
      fbx(
        "It is believed (consensus); is said (anonymous sources); is expected (official timing); is understood (insider account)",
        "The reporting passive (is said/believed/expected/understood + to…) lets news and academia report claims without naming who claims them.",
        {
          whyWrong: "Each verb carries a different flavour of source. Choosing among them is choosing how much responsibility the writer takes.",
          rule: ["Reporting passives", "X is said to be… / It is believed that…"],
          similar: ["She is thought to be in Lisbon.", "Se cree que está en Lisboa."],
          revise: ["ch-42-l-01", "Passive with Modals and Reporting Passive covers the set.", "Passive with Modals and Reporting Passive"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["passive", "reporting"], hints: ["Believed belongs to scholarly consensus.", "Understood is the journalists' insider verb.", "Expected carries timing."] },
    ),
  ),
  entry(
    42, 3, "causative listening",
    qLis(
      "Listen and answer: what did the family arrange for the move?",
      "For the move, we had the piano professionally crated, we got the neighbours to look after the dog, and we're having the new floors sanded before Saturday.",
      "Which service did the family ARRANGE to be done (have + object + participle)?",
      ["crating the piano", "having the piano crated", "the piano was crated", "sanding the floors", "having the floors sanded"],
      fbx(
        "having the piano crated (and the floors sanded)",
        "Two causative-have arrangements in the text: the piano crated and the floors sanded. The dog was persuasion (got + to-infinitive).",
        {
          whyWrong: "Got the neighbours to look after the dog is causative get — persuasion of a person, not a paid service.",
          rule: ["have + thing + participle vs get + person + to", "Services vs favours."],
          similar: ["I had the suit dry-cleaned and got my brother to lend me shoes.", "Llevé el traje a la tintorería y conseguí que mi hermano me prestara zapatos."],
          revise: ["ch-42-l-02", "Causative Have is the service arrangement.", "Causative Have"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["listening", "causative"] },
    ),
  ),
  entry(
    42, 4, "voice style choices",
    qRd(
      "Read the two versions and answer the question.",
      "Two announcements",
      "A: 'Management regrets that someone misfiled the reports, and we will talk to the team.' B: 'It has come to light that the reports were misfiled, and the matter is being discussed with the team.'",
      "Which version softens blame by hiding the doer?",
      [
        ["a", "Version B"],
        ["b", "Version A"],
        ["c", "both equally"],
        ["d", "neither"],
      ],
      "a",
      fbx(
        "Version B",
        "The passive (were misfiled, is being discussed) removes the doer from the sentence. Institutional writing uses exactly this to soften responsibility.",
        {
          whyWrong: "Version A names an action by someone and an active promise (we will talk). B's passives are the corporate voice.",
          rule: ["Passive = distance", "The more distant the writer wants to be, the more passive the sentence."],
          similar: ["Mistakes were made, and lessons have been learned.", "Se cometieron errores y se han aprendido lecciones."],
          revise: ["ch-42-l-04", "Voice Style Choices discusses the ethics and effect.", "Voice Style Choices and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "register"] },
    ),
  ),
  entry(
    42, 2, "causative challenge",
    qSb(
      "Challenge: build the arrangement from the tiles. One tile is extra.",
      ["we", "are", "having", "the", "kitchen", "painted", "next", "week", "are"],
      ["We are having the kitchen painted next week."],
      fbx(
        "We are having the kitchen painted next week.",
        "Causative have in a continuous arrangement: are having + object + participle. The tile are is doubled — one is enough.",
        {
          whyWrong: "We are having painted the kitchen scrambles the pattern: the object must sit between have and the participle.",
          rule: ["have + object + participle", "I'm having the car serviced."],
          similar: ["She's having her thesis bound today.", "Está encuadernando su tesis hoy."],
          revise: ["ch-42-l-02", "Causative Have is the arrangement pattern.", "Causative Have"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["causative", "sentence building"], hints: ["The arrangement is in progress — which tense?", "The object (kitchen) goes between having and painted.", "One tile is a duplicate auxiliary."] },
    ),
  ),

  // ------------------------------------- CH-43 Participles and Advanced Clauses
  entry(
    43, 1, "participial phrases",
    qGid(
      "Label the highlighted phrase in the sentence.",
      "Exhausted by the climb, the rescuers still pressed on to the ridge.",
      "Exhausted by the climb",
      "What is the highlighted phrase?",
      "clause types",
      [
        ["a", "a participial phrase — it replaces a full clause (who were exhausted)"],
        ["b", "a passive main clause"],
        ["c", "a relative clause with which"],
        ["d", "an adverb of manner"],
      ],
      "a",
      fbx(
        "a participial phrase",
        "The -ed participle compresses a whole clause into three words: (although they were) exhausted by the climb. Formal and written English loves this economy.",
        {
          whyWrong: "As a passive main clause it would need a finite verb (were exhausted). Participial phrases deliberately drop the finite verb.",
          rule: ["Participle = clause without a subject/verb", "Exhausted, they pressed on. (= Although they were exhausted…)"],
          similar: ["Written in 1847, the novel still shocks.", "Escrita en 1847, la novela todavía impacta."],
          revise: ["ch-43-l-01", "Participles and Participial Phrases introduces the compression.", "Participles and Participial Phrases"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["participles", "compression"] },
    ),
  ),
  entry(
    43, 2, "reduced relative clauses",
    qCorr(
      "Reduce the relative clause to a participle.",
      "The candidates who were selected for the second round will be contacted by Friday.",
      ["The candidates selected for the second round will be contacted by Friday."],
      fbx(
        "The candidates selected for the second round will be contacted by Friday.",
        "Who were + participle reduces to the bare participle: candidates selected. Meaning unchanged, form much tighter.",
        {
          whyWrong: "Keeping who were is grammatical but loses the B2 economy. The reduced form is standard in professional writing.",
          rule: ["Reduce passive relatives to participles", "the man who was hired → the man hired."],
          similar: ["Items damaged in transit must be reported.", "Los artículos dañados en el transporte deben notificarse."],
          revise: ["ch-43-l-02", "Reduced Relative Clauses teaches the reduction.", "Reduced Relative Clauses"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["participles", "reduction"] },
    ),
  ),
  entry(
    43, 3, "participle clauses for reason",
    qMcq(
      "Which sentence uses the participle clause to give a REASON?",
      [
        ["a", "Having lost the key, she called a locksmith."],
        ["b", "Losing the key, she called a locksmith every day that week."],
        ["c", "She called a locksmith, losing the key."],
        ["d", "To lose the key, she called a locksmith."],
      ],
      "a",
      fbx(
        "Having lost the key, she called a locksmith.",
        "Having + participle marks an earlier completed action as the cause of the main clause. Reason, sequence and formality all live in that having.",
        {
          whyWrong: "(c) attaches the participle as an afterthought — a dangling modifier that reads as if the calling caused the losing. (d) makes the losing a goal.",
          rule: ["Having + participle = earlier cause", "Having missed the bus, I walked."],
          similar: ["Having finished the draft, she sent it.", "Tras terminar el borrador, lo envió."],
          revise: ["ch-43-l-03", "Participle Clauses for Reason, Time and Result maps the functions.", "Participle Clauses for Reason, Time and Result"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["participles", "reason"] },
    ),
  ),
  entry(
    43, 4, "dangling participles",
    qCorr(
      "Fix the dangling participle.",
      "Walking to the station, the rain soaked my coat.",
      ["While I was walking to the station, the rain soaked my coat.", "Walking to the station, I felt the rain soak my coat."],
      fbx(
        "While I was walking to the station, the rain soaked my coat.",
        "A participle attaches to the subject of the main clause. As written, the rain was walking — the classic dangling participle. Either give the sentence the walking subject (I) or restore a full clause.",
        {
          whyWrong: "In the original, the doer of walking (I) never appears, so the modifier grabs the nearest noun (the rain). Dangling participles are the most-mocked error in English writing.",
          rule: ["The participle's subject must be the main subject", "Walking home, I saw a fox — not the fox saw me."],
          similar: ["Having read the report, the editor made changes.", "Tras leer el informe, la editora hizo cambios."],
          revise: ["ch-43-l-04", "Dangling Participles is the repair lesson.", "Dangling Participles and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["participles", "dangling"] },
    ),
  ),
  entry(
    43, 2, "participles in listening",
    qLis(
      "Listen and answer: why was the delivery delayed, in one clause?",
      "Held up by a customs inspection, the shipment missed the connecting flight and arrived a day late.",
      "Why was the shipment held up?",
      ["a customs inspection", "by a customs inspection", "it was held up by a customs inspection"],
      fbx(
        "held up by a customs inspection",
        "The participial phrase compresses the cause: (because it was) held up by customs. The main clause carries the consequences.",
        {
          whyWrong: "The missed flight is the RESULT, not the cause. The opening -ed phrase is the reason half.",
          rule: ["Opening participle = background/cause", "Delayed by X, the main event followed."],
          similar: ["Delayed by fog, the train arrived at midnight.", "Retrasado por la niebla, el tren llegó a medianoche."],
          revise: ["ch-43-l-03", "Participle Clauses for Reason, Time and Result covers the compression.", "Participle Clauses for Reason, Time and Result"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["listening", "participles"] },
    ),
  ),
  entry(
    43, 3, "participles in reading",
    qRd(
      "Read the passage and answer the question.",
      "The archive",
      "Discovered in a cellar in 1961, the letters changed everything historians thought about the poet's last years. Written in a barely legible hand, they describe an illness nobody had recorded. Having verified the paper against period samples, the lab dated them to the winter of 1820. Published last spring, the collection sold out within a week.",
      "Which participle phrase gives the CAUSE of the dating claim?",
      [
        ["a", "Having verified the paper against period samples"],
        ["b", "Discovered in a cellar in 1961"],
        ["c", "Written in a barely legible hand"],
        ["d", "Published last spring"],
      ],
      "a",
      fbx(
        "Having verified…",
        "Having + participle marks an earlier completed action that grounds the main clause (the lab dated them). The other three are circumstances: discovery, description, publication.",
        {
          whyWrong: "Discovered and written describe the letters; published is later than the dating. Only the having-clause is the reason the dating is credible.",
          rule: ["Having done → therefore", "The verification precedes and licenses the conclusion."],
          similar: ["Having tested the sample, the team published.", "Tras analizar la muestra, el equipo publicó."],
          revise: ["ch-43-l-03", "Participle Clauses for Reason, Time and Result teaches the function map.", "Participle Clauses for Reason, Time and Result"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "participles"] },
    ),
  ),
  entry(
    43, 4, "compression speaking",
    qSpeak(
      "Speaking challenge: the compressed report.",
      "Report an imaginary sequence in three compressed moves, each starting with a participle: one -ed circumstance (Damaged by…), one having-cause (Having checked…), and one -ing simultaneous action (Opening the door, …).",
      ["Damaged by the storm, the roof leaked.", "Having checked the pipes, the plumber ruled them out.", "Opening the hatch, she found the source."],
      ["having", "damaged"],
      fbx(
        "A compressed report, for example: Delayed by the ferry strike, we arrived at midnight. Having missed the last bus, we walked. Reaching the hotel at two, we found the doors locked.",
        "The machine checks that a having-participle and an -ed participle appear. Spoken compression is rare — which is exactly why it marks C-level control.",
        {
          whyWrong: "Full clauses (because we were delayed) say the same thing at twice the length. The participle is the compression tool.",
          rule: ["Three participle slots", "circumstance (-ed), cause (having done), simultaneity (-ing)."],
          similar: ["Turning the corner, we saw the sea.", "Al doblar la esquina, vimos el mar."],
          revise: ["ch-43-l-03", "Participle Clauses for Reason, Time and Result is the function map.", "Participle Clauses for Reason, Time and Result"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "participles"] },
    ),
  ),
  entry(
    43, 4, "participle challenge",
    qSb(
      "Challenge: build the compressed sentence from the tiles. One tile is extra.",
      ["having", "lost", "the", "key", "she", "called", "a", "locksmith", "was"],
      ["Having lost the key, she called a locksmith."],
      fbx(
        "Having lost the key, she called a locksmith.",
        "Having lost = the earlier cause. The tile was is the trap — the participle phrase exists precisely to drop the finite verb.",
        {
          whyWrong: "Having was lost would create a passive inside the phrase — the losing is something she did, actively.",
          rule: ["having + participle, no finite verb", "Having finished, we left."],
          similar: ["Having said that, she left the room.", "Dicho esto, salió de la sala."],
          revise: ["ch-43-l-03", "Participle Clauses is the compression lesson.", "Participle Clauses for Reason, Time and Result"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["participles", "sentence building"], hints: ["The cause happened first — which opening marks that?", "Having + participle replaces a full because-clause.", "One tile is a finite be — leave it out."] },
    ),
  ),
];
