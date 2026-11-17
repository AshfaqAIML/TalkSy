/**
 * PROMPT 36 practice bank — B2 chapters 44–48 (part B of the B2 set).
 *
 * Advanced connectors and cohesion (44), advanced vocabulary and natural
 * English (45), academic and professional writing (46), discussion, debate
 * and presentation (47), advanced reading and comprehension (48).
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
  qSpell,
  qVm,
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankB2B: BankEntry[] = [
  // --------------------------------------------- CH-44 Advanced Connectors and Cohesion
  entry(
    44, 1, "contrast and concession",
    qMcq(
      "Which connector signals the STRONGEST concession?",
      [
        ["a", "Even though the evidence was incomplete, the committee approved the trial."],
        ["b", "Although the evidence was incomplete, the committee approved the trial."],
        ["c", "The evidence was incomplete; the committee approved the trial anyway."],
        ["d", "The evidence was incomplete, and the committee approved the trial."],
      ],
      "a",
      fbx(
        "Even though (strongest concession)",
        "Even though intensifies although — it stresses the surprise. Anyway in (c) is spoken register; and in (d) carries no contrast at all.",
        {
          whyWrong: "Although is neutral concession; anyway belongs to conversation; and simply adds. Register and strength both matter at B2.",
          rule: ["Concession ladder", "even though > although > while (weakest)."],
          similar: ["Even if it rains, we finish the roof.", "Incluso si llueve, terminamos el tejado."],
          revise: ["ch-44-l-01", "Contrast and Concession grades the connectors.", "Contrast and Concession"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["connectors", "concession"] },
    ),
  ),
  entry(
    44, 2, "cause, effect, addition, comparison",
    qMatch(
      "Match each connector with the relationship it signals.",
      [
        ["l1", "consequently"],
        ["l2", "whereas"],
        ["l3", "moreover"],
        ["l4", "in spite of"],
      ],
      [
        ["r1", "concession — a fact that changes nothing"],
        ["r2", "comparison of differences"],
        ["r3", "addition of a further point"],
        ["r4", "result — one thing followed from another"],
      ],
      [
        ["l1", "r4"],
        ["l2", "r2"],
        ["l3", "r3"],
        ["l4", "r1"],
      ],
      fbx(
        "consequently → result; whereas → contrast; moreover → addition; in spite of → concession",
        "B2 writing lives on these four relationships. Choosing the connector IS choosing the logic of the sentence.",
        {
          whyWrong: "Swapping consequently and moreover turns a conclusion into an extra reason; the relationships are not interchangeable.",
          rule: ["Four logic families", "result, contrast, addition, concession."],
          similar: ["The delay was long; consequently, we missed the slot.", "El retraso fue largo; en consecuencia, perdimos la franja."],
          revise: ["ch-44-l-02", "Cause, Effect, Addition and Comparison groups them.", "Cause, Effect, Addition and Comparison"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["connectors", "cohesion"] },
    ),
  ),
  entry(
    44, 3, "paragraph transitions",
    qGid(
      "Label the highlighted transition in the paragraph.",
      "The first trial produced disappointing results. The compound was unstable at room temperature, and the funding was cut. Nevertheless, the team persisted, and by the third year the stabilised version passed every test.",
      "Nevertheless",
      "What is the job of the highlighted word?",
      "cohesion",
      [
        ["a", "it reverses the paragraph's direction — bad news, then persistence"],
        ["b", "it adds a second disappointment"],
        ["c", "it signals the result of the funding cut"],
        ["d", "it compares two trials"],
      ],
      "a",
      fbx(
        "nevertheless turns the paragraph around",
        "Nevertheless concedes the bad news and pivots to the persistence. Transitions are the paragraph's steering wheel.",
        {
          whyWrong: "Moreover would add another failure; consequently would derive the persistence from the cut — neither matches the story.",
          rule: ["Transitions steer", "nevertheless (turn), consequently (effect), moreover (add)."],
          similar: ["The costs rose. Nevertheless, the project continued.", "Los costes subieron. No obstante, el proyecto siguió."],
          revise: ["ch-44-l-03", "Paragraph Transitions teaches the steering set.", "Paragraph Transitions"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["connectors", "transitions"] },
    ),
  ),
  entry(
    44, 4, "document cohesion",
    qCorr(
      "The pronoun reference is ambiguous. Rewrite the sentence so the reader knows WHO approved it.",
      "The agency rejected the proposal because they thought it was too costly.",
      ["The agency rejected the proposal because the board thought the proposal was too costly.", "The agency rejected the proposal because the agency considered it too costly."],
      fbx(
        "The agency rejected the proposal because the board considered the proposal too costly.",
        "They and it each had two possible owners. B2 cohesion: repeat the noun (or name the real referent) rather than leave ambiguous pronouns.",
        {
          whyWrong: "In the original, they could be the agency or the board, and it could be the proposal or the budget. Ambiguous reference is the most common B2 writing fault.",
          rule: ["One pronoun, one owner", "If two nouns could own it, name it."],
          similar: ["The report criticised the ministry; the report was later withdrawn.", "El informe criticó al ministerio; el informe fue retirado después."],
          revise: ["ch-44-l-04", "Document Cohesion is the reference lesson.", "Document Cohesion and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["cohesion", "reference"] },
    ),
  ),
  entry(
    44, 2, "connectors in listening",
    qLis(
      "Listen and answer: what did the speaker do nevertheless?",
      "The flight was overbooked and the hotel lost our booking. Nevertheless, we reached the coast by midnight and the wedding at noon the next day.",
      "What did they do nevertheless?",
      ["reached the coast by midnight", "they reached the coast", "we reached the coast by midnight and made the wedding"],
      fbx(
        "they still reached the coast by midnight",
        "Nevertheless cancels the two disasters: the bad news did not stop the outcome. Listening for the turn word tells you which half is the good news.",
        {
          whyWrong: "The overbooking and the lost booking are the conceded facts, not the result. The clause AFTER nevertheless carries the outcome.",
          rule: ["Turn word = story pivot", "Bad news; nevertheless, good outcome."],
          similar: ["The van broke down; nevertheless, we delivered on time.", "La furgoneta se averió; no obstante, entregamos a tiempo."],
          revise: ["ch-44-l-01", "Contrast and Concession covers the turn words.", "Contrast and Concession"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "connectors"] },
    ),
  ),
  entry(
    44, 3, "cohesion in reading",
    qRd(
      "Read the memo and answer the question.",
      "Pilot results",
      "The pilot was smaller than planned: two centres withdrew at short notice. Moreover, the sensor data arrived incomplete, which delayed the analysis by a fortnight. Consequently, the report you received last week covers only six weeks instead of ten. Nevertheless, the trends are clear enough to justify a full study, provided that the next phase starts before March.",
      "Which connector signals that the problems did NOT change the recommendation?",
      [
        ["a", "nevertheless"],
        ["b", "moreover"],
        ["c", "consequently"],
        ["d", "provided that"],
      ],
      "a",
      fbx(
        "nevertheless",
        "The memo concedes three setbacks and still recommends the full study. Moreover added a second problem; consequently derived the delay; provided that set the condition.",
        {
          whyWrong: "Each connector does one job. Only nevertheless reverses the direction from problems to recommendation.",
          rule: ["Four jobs, four words", "add, result, turn, condition."],
          similar: ["Sales fell; nevertheless, we opened two branches.", "Cayeron las ventas; no obstante, abrimos dos sucursales."],
          revise: ["ch-44-l-03", "Paragraph Transitions is the steering lesson.", "Paragraph Transitions"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "cohesion"] },
    ),
  ),
  entry(
    44, 4, "cohesion writing",
    qWrite(
      "Writing challenge: the four-connector paragraph.",
      "Write a five-sentence paragraph about a project that faced setbacks but succeeded. Use all four logic families: moreover (add a problem), consequently (state the effect), nevertheless (turn it around), provided that (set the final condition).",
      60,
      ["moreover", "nevertheless", "consequently", "provided that"],
      fbx(
        "A paragraph like: The tour was beset by problems. Two venues cancelled a week before opening. Moreover, the printer delivered the posters late. Consequently, the first night sold only half its seats. Nevertheless, the reviews carried the run for a season, provided that we kept the ticket price at the door.",
        "The machine checks that at least one of the four connectors appears (the task asks for all four; several are machine-checked) and that you reach 60 words. The craft is that each connector must do ITS job, not just decorate.",
        {
          whyWrong: "Using two result-connectors and no turn word flattens the story. The four families are the paragraph's gearbox.",
          rule: ["Four families, four jobs", "add / result / turn / condition."],
          similar: ["The pilot failed; nevertheless, the design worked.", "El piloto falló; no obstante, el diseño funcionó."],
          revise: ["ch-44-l-04", "Document Cohesion reviews the full set.", "Document Cohesion and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "cohesion"], hints: ["Open with the setback in one sentence.", "Add a second problem with moreover.", "State the effect with consequently, then turn with nevertheless."] },
    ),
  ),
  entry(
    44, 2, "connector challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["the", "costs", "rose", "nevertheless", "the", "project", "continued", "however", "on", "time"],
      ["The costs rose; nevertheless, the project continued."],
      fbx(
        "The costs rose; nevertheless, the project continued.",
        "One turn word is enough: nevertheless carries the whole concession. The tile however is the trap — stacking however and nevertheless doubles the pivot.",
        {
          whyWrong: "Nevertheless, however,… back to back is the classic over-connecting error. One junction, one connector.",
          rule: ["One junction, one connector", "X; nevertheless, Y."],
          similar: ["Demand fell; even so, we expanded.", "La demanda cayó; aun así, ampliamos."],
          revise: ["ch-44-l-01", "Contrast and Concession warns about stacking.", "Contrast and Concession"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["connectors", "sentence building"], hints: ["Pick ONE turn word for the pivot.", "A semicolon joins the two clauses.", "A second pivot word is forbidden — leave it out."] },
    ),
  ),

  // --------------------------------------- CH-45 Advanced Vocabulary and Natural English
  entry(
    45, 1, "collocations",
    qVm(
      "Match each verb with its natural partner.",
      [
        ["w1", "make", "verb"],
        ["w2", "do", "verb"],
        ["w3", "take", "verb"],
        ["w4", "pay", "verb"],
      ],
      [
        ["m1", "a decision"],
        ["m2", "the bills"],
        ["m3", "an effort"],
        ["m4", "the research"],
      ],
      [
        ["w1", "m1"],
        ["w2", "m4"],
        ["w3", "m3"],
        ["w4", "m2"],
      ],
      fbx(
        "make a decision; do the research; take an effort (make an effort also natural — the pairing here: take); pay the bills",
        "Collocations are fixed marriages between verbs and nouns. Do research, not make research; make a decision, not do a decision.",
        {
          whyWrong: "Translate word-by-word and you get make a photo (take), make a mistake is fine but do a mistake is not. Each pair must be met as a couple.",
          rule: ["Verbs marry specific nouns", "make progress, take risks, pay attention, do homework."],
          similar: ["She takes responsibility seriously.", "Se toma la responsabilidad en serio."],
          revise: ["ch-45-l-01", "Collocations is the fixed-pairs lesson.", "Collocations"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["collocations", "vocabulary"], hints: ["Decisions are made, not done.", "Bills are paid.", "Research is done in English (not made)."] },
    ),
  ),
  entry(
    45, 2, "phrasal verbs for fluency",
    qMcq(
      "The meeting was long and unproductive. Which phrasal verb summarises it best?",
      [
        ["a", "We ended up going round in circles."],
        ["b", "We ended up going to the point."],
        ["c", "We ended up on the same page."],
        ["d", "We ended up calling a spade."],
      ],
      "a",
      fbx(
        "going round in circles",
        "Round in circles = repeating without progress. The other options distort real idioms: get to the point, on the same page, call a spade a spade.",
        {
          whyWrong: "On the same page means agreement (the opposite of this meeting); the other two are mangled idioms. Fluency idioms must be used whole.",
          rule: ["Idioms come whole", "Learn the full phrase, never the pieces."],
          similar: ["We talked for hours and got nowhere.", "Hablamos horas y no llegamos a nada."],
          revise: ["ch-45-l-02", "Phrasal Verbs for Fluency teaches the set.", "Phrasal Verbs for Fluency"],
        },
      ),
      { difficulty: "hard", skill: "vocabulary", tags: ["idioms", "fluency"] },
    ),
  ),
  entry(
    45, 3, "idioms and word families",
    qMatch(
      "Match each idiom with its meaning.",
      [
        ["l1", "to bite the bullet"],
        ["l2", "to break the ice"],
        ["l3", "to hit the nail on the head"],
        ["l4", "to let the cat out of the bag"],
      ],
      [
        ["r1", "to say exactly the right thing"],
        ["r2", "to reveal a secret by accident"],
        ["r3", "to accept something painful and proceed"],
        ["r4", "to start conversation in an awkward setting"],
      ],
      [
        ["l1", "r3"],
        ["l2", "r4"],
        ["l3", "r1"],
        ["l4", "r2"],
      ],
      fbx(
        "bite the bullet = endure; break the ice = start talking; hit the nail = be exactly right; let the cat out = spill the secret",
        "Idioms are pictures, not sentences. Matching the picture to the meaning is how they stick.",
        {
          whyWrong: "Two of these involve pain (bullet) and accuracy (nail) — swapping them turns endurance into precision and vice versa.",
          rule: ["Idioms as pictures", "Visualise the image; the meaning follows."],
          similar: ["We had to bite the bullet and cancel.", "Tuvimos que tragar sapos y cancelar."],
          revise: ["ch-45-l-03", "Idioms and Word Families teaches the core set.", "Idioms and Word Families"],
        },
      ),
      { difficulty: "hard", skill: "vocabulary", tags: ["idioms", "vocabulary"], hints: ["The bullet one is about enduring something unavoidable.", "The cat one is about secrets.", "The nail one is about being exactly right."] },
    ),
  ),
  entry(
    45, 4, "register and connotation",
    qGid(
      "Label the highlighted word's register in the sentence.",
      "We regret to inform you that the vacancy has been filled.",
      "regret to inform",
      "What register is the highlighted phrase?",
      "register",
      [
        ["a", "formal — written institutional English"],
        ["b", "neutral — everyday spoken English"],
        ["c", "casual — friendly messaging register"],
        ["d", "academic — citation register"],
      ],
      "a",
      fbx(
        "formal institutional register",
        "Regret to inform you is the fixed formula of rejection letters. Register is a grammar of situations: the same news to a friend would be Sorry — the job's gone.",
        {
          whyWrong: "In casual register this phrase sounds cold and stilted; in academic register it lacks citation purpose. Formulaic formality belongs to letters.",
          rule: ["Register matches the channel", "Letter formal, chat casual, essay academic."],
          similar: ["Further to your enquiry…", "En relación con su consulta…"],
          revise: ["ch-45-l-04", "Register, Connotation and Natural Combinations is the register lesson.", "Register, Connotation and Natural Combinations"],
        },
      ),
      { difficulty: "hard", skill: "vocabulary", tags: ["register", "formality"] },
    ),
  ),
  entry(
    45, 1, "collocations in listening",
    qLis(
      "Listen and answer: what did the board do with the proposal?",
      "After two hours the board took the proposal seriously, made a quick decision, and paid attention to every number in the appendix.",
      "What did the board do with the proposal?",
      ["took it seriously", "they took the proposal seriously", "the board took the proposal seriously"],
      fbx(
        "took the proposal seriously",
        "Three collocations in one sentence: take seriously, make a decision, pay attention. Verbs and their partners travel together.",
        {
          whyWrong: "Make seriously or do attention are the word-by-word translations that no native produces. The couples are fixed.",
          rule: ["Fixed couples", "take seriously, make a decision, pay attention."],
          similar: ["Don't take it personally.", "No te lo tomes como algo personal."],
          revise: ["ch-45-l-01", "Collocations is the fixed-pairs lesson.", "Collocations"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "collocations"] },
    ),
  ),
  entry(
    45, 5, "natural combinations in reading",
    qRd(
      "Read the note and answer the question.",
      "Handover note",
      "I'll let you take over from here. Pay attention to the supplier in Leeds — they've been cutting corners on quality, and if you dig into the accounts you'll find it. I'm not saying they set out to cheat us; more likely they bit off more than they could staff. Either way, the contract is up in March, and we should play hardball — provided we have a fallback supplier first.",
      "Which idiom means 'reducing quality to save effort'?",
      [
        ["a", "cutting corners"],
        ["b", "biting off more than they could staff"],
        ["c", "playing hardball"],
        ["d", "digging into the accounts"],
      ],
      "a",
      fbx(
        "cutting corners",
        "Cut corners = do something the cheap way, skipping proper steps. Biting off more… is overcommitting; playing hardball is negotiating toughly.",
        {
          whyWrong: "Digging into the accounts means investigating — an action, not a fault. Each idiom carries one picture.",
          rule: ["One idiom, one picture", "cut corners = skip steps to save effort."],
          similar: ["They cut corners on safety.", "Recortaron en seguridad."],
          revise: ["ch-45-l-05", "Natural Word Combinations reviews the fluency set.", "Natural Word Combinations and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "idioms"] },
    ),
  ),
  entry(
    45, 4, "word families spelling",
    qSpell(
      "One word is spelled wrongly. Write the correct spelling.",
      "The committe accepted the proposal unanimously.",
      "committe",
      ["committee"],
      fbx(
        "committee",
        "Committee doubles both the m and the t: commit + tee. One of the most misspelled words in professional English.",
        {
          whyWrong: "Committe drops an t — say the ending as a three-beat word: com-mit-TEE.",
          rule: ["Double letters in committee", "commit → committee (double m, double t)."],
          similar: ["The committee meets every quarter.", "El comité se reúne cada trimestre."],
          revise: ["ch-45-l-03", "Word Families includes institutional vocabulary.", "Idioms and Word Families"],
        },
      ),
      { difficulty: "medium", skill: "vocabulary", tags: ["spelling", "vocabulary"], hints: ["The word is a group that makes decisions.", "It has three beats: com-mit-tee.", "Two letters are doubled."] },
    ),
  ),
  entry(
    45, 5, "natural English speaking",
    qSpeak(
      "Speaking challenge: idiomatic minute.",
      "Speak for one minute about a difficult project, using at least three idioms from this chapter: bite the bullet, break the ice, cut corners, let the cat out of the bag, hit the nail on the head — or a collocation pair like take seriously / make a decision.",
      ["We had to bite the bullet.", "They cut corners.", "In the end she hit the nail on the head."],
      ["bite the bullet", "cut corners", "hit the nail on the head", "break the ice", "let the cat out of the bag"],
      fbx(
        "An idiomatic minute, for example: The client meeting started cold until someone broke the ice with a joke about the traffic. The vendor had cut corners on testing, and when the auditor let the cat out of the bag, we had to bite the bullet and rebuild. In the end, the lead engineer hit the nail on the head: we had designed for the wrong user.",
        "The machine checks that at least one of the chapter's idioms appears. Idioms must arrive whole — half an idiom is worse than none.",
        {
          whyWrong: "Translating idioms from your first language produces images nobody recognises. Learn each one as a complete picture.",
          rule: ["Idioms whole, always", "Break the ice — never crack the ice."],
          similar: ["We broke the ice over coffee.", "Rompimos el hielo con un café."],
          revise: ["ch-45-l-05", "Natural Word Combinations is the fluency lesson.", "Natural Word Combinations and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "idioms"], hints: ["Open by describing how the conversation started — that's where break the ice lives.", "Add a shortcut someone took — cut corners.", "Close with the exact right remark — hit the nail on the head."] },
    ),
  ),

  // ------------------------------------ CH-46 Academic and Professional Writing
  entry(
    46, 1, "formal emails",
    qCorr(
      "One phrase is wrong for a formal email to a new client. Write the corrected line.",
      "Hey Ms Adeyemi, just checking if you got my last message.",
      ["Dear Ms Adeyemi, I am writing to follow up on my previous message.", "Dear Ms Adeyemi, I am following up on my message of last week."],
      fbx(
        "Dear Ms Adeyemi, I am writing to follow up on my previous message.",
        "Formal email register: Dear + surname, a purpose verb (follow up on), no chat particles (hey, just).",
        {
          whyWrong: "Hey and just checking belong to messaging between friends. In client email, register IS grammar: the wrong register reads as disrespect.",
          rule: ["Formal email formula", "Dear + name; I am writing to…; I look forward to…"],
          similar: ["I look forward to hearing from you.", "Quedo a la espera de su respuesta."],
          revise: ["ch-46-l-01", "Formal Emails teaches the formula.", "Formal Emails"],
        },
      ),
      { difficulty: "medium", skill: "writing", tags: ["emails", "register"] },
    ),
  ),
  entry(
    46, 2, "reports and proposals",
    qGid(
      "Label the highlighted verb in the report line.",
      "This report recommends that the council adopt the four-day collection schedule from April.",
      "recommends",
      "What is the job of the highlighted verb?",
      "report language",
      [
        ["a", "it performs the recommendation — the report's official output"],
        ["b", "it speculates about the council's future"],
        ["c", "it describes what happened in April"],
        ["d", "it asks the reader for advice"],
      ],
      "a",
      fbx(
        "recommends = the report's official act",
        "Reports have speech acts: recommend, propose, conclude, advise. The verb carries the document's authority.",
        {
          whyWrong: "Would recommend hedges the document's own output; a report's recommendation section states it plainly.",
          rule: ["Report verbs", "recommends, proposes, concludes, advises."],
          similar: ["The review concludes that costs will fall.", "La revisión concluye que los costes bajarán."],
          revise: ["ch-46-l-02", "Reports and Proposals teaches the verb set.", "Reports and Proposals"],
        },
      ),
      { difficulty: "medium", skill: "writing", tags: ["reports", "register"] },
    ),
  ),
  entry(
    46, 3, "structured essays",
    qMatch(
      "Match each essay move with its standard phrase.",
      [
        ["l1", "stating the thesis"],
        ["l2", "conceding a counterpoint"],
        ["l3", "introducing evidence"],
        ["l4", "concluding"],
      ],
      [
        ["r1", "This essay argues that…"],
        ["r2", "To conclude, the evidence supports…"],
        ["r3", "Admittedly, opponents claim that…"],
        ["r4", "According to the 2025 survey…"],
      ],
      [
        ["l1", "r1"],
        ["l2", "r3"],
        ["l3", "r4"],
        ["l4", "r2"],
      ],
      fbx(
        "thesis → This essay argues; concession → Admittedly; evidence → According to; conclusion → To conclude",
        "Academic essays are built from named moves. Learning the move and its phrase together is what makes an essay read as planned.",
        {
          whyWrong: "Mixing the concession phrase with the thesis phrase makes the essay argue against itself. Each move has its slot.",
          rule: ["Moves in order", "thesis, concession, evidence, conclusion."],
          similar: ["Admittedly, the sample was small.", "Se admite que la muestra era pequeña."],
          revise: ["ch-46-l-03", "Structured Essays teaches the moves.", "Structured Essays"],
        },
      ),
      { difficulty: "hard", skill: "writing", tags: ["essays", "structure"] },
    ),
  ),
  entry(
    46, 4, "hedging",
    qMcq(
      "Which sentence hedges appropriately for academic writing?",
      [
        ["a", "The data suggest that sleep quality may decline with irregular hours."],
        ["b", "The data prove that sleep dies with irregular hours."],
        ["c", "The data obviously show everyone is exhausted."],
        ["d", "I think the data are kind of wrong maybe."],
      ],
      "a",
      fbx(
        "The data suggest that… may decline",
        "Hedging claims precision, not weakness: suggest + may states a finding at the strength the evidence supports.",
        {
          whyWrong: "Prove overclaims (data rarely prove causal claims); obviously begs the question; the last option is chat register. Academic English calibrates certainty.",
          rule: ["Hedge scale", "suggest > indicate > may/might > appear to."],
          similar: ["The results appear to support the hypothesis.", "Los resultados parecen respaldar la hipótesis."],
          revise: ["ch-46-l-04", "Academic Vocabulary and Hedging is the calibration lesson.", "Academic Vocabulary and Hedging"],
        },
      ),
      { difficulty: "hard", skill: "writing", tags: ["hedging", "academic"] },
    ),
  ),
  entry(
    46, 4, "coherence and tone in listening",
    qLis(
      "Listen and answer: what is the speaker's recommendation?",
      "Having weighed the options, we recommend the phased rollout: pilots in May, review in June, and a decision on full deployment no later than the July board meeting.",
      "What does the speaker recommend?",
      ["the phased rollout", "a phased rollout", "they recommend the phased rollout", "pilots in may, review in june"],
      fbx(
        "the phased rollout",
        "Professional register compresses decisions into noun phrases: recommend + noun (the phased rollout), followed by the timetable.",
        {
          whyWrong: "The pilots and the review are the phases, not the recommendation itself. The head noun after recommend carries the decision.",
          rule: ["Decisions as noun phrases", "We recommend the delay / the merger / the phased rollout."],
          similar: ["We advise a waiting period.", "Recomendamos un periodo de espera."],
          revise: ["ch-46-l-05", "Coherence and Professional Tone teaches the compression.", "Coherence and Professional Tone and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "register"] },
    ),
  ),
  entry(
    46, 5, "professional tone in reading",
    qRd(
      "Read the proposal summary and answer the question.",
      "Proposal summary",
      "This proposal outlines a two-stage migration of the customer database. Stage one, to be completed by mid-May, would move the archived records to the new cluster while the live system continues to operate. Stage two would then transfer active accounts during the August window, when traffic is at its lowest. The estimated cost is 6% below the internal forecast, though the figure assumes no regulatory delay.",
      "Which verb form keeps the plan OPEN (not yet agreed)?",
      [
        ["a", "would move / would transfer"],
        ["b", "moved / transferred"],
        ["c", "will move / will transfer"],
        ["d", "moves / transfers"],
      ],
      "a",
      fbx(
        "would move / would transfer",
        "Proposals describe conditional futures: would marks the plan as pending approval. Will would announce a decision already taken.",
        {
          whyWrong: "Past forms report finished events; the plain present states habits. In proposal register, would is the grammar of not-yet-agreed.",
          rule: ["Proposal would", "Stage one would move… pending approval."],
          similar: ["The vendor would supply the hardware.", "El proveedor suministraría el hardware."],
          revise: ["ch-46-l-02", "Reports and Proposals covers proposal tense.", "Reports and Proposals"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "register"] },
    ),
  ),
  entry(
    46, 5, "professional writing",
    qWrite(
      "B2 writing challenge: a proposal paragraph.",
      "Write the opening paragraph of a proposal (4–5 sentences): name the problem, propose a solution with would (pending approval), give one piece of evidence, and hedge one claim appropriately (may / appear to).",
      60,
      ["would"],
      fbx(
        "A paragraph like: This proposal addresses the queueing problem at reception. We recommend introducing a triage desk staffed from the existing team. The desk would filter visitors before they reach the counters, which in the pilot cut waiting times by a third. The saving may vary with seasonal demand, and we would review the figures each quarter.",
        "The machine checks that would appears (the proposal marker) and that you reach 60 words. The human checks are the hedged claim and the single clear recommendation — the two things that make a proposal a proposal.",
        {
          whyWrong: "Using will commits the organisation before anyone has approved. Proposal grammar is the grammar of pending decisions.",
          rule: ["Proposal formula", "recommend + noun; would + verb; hedged benefit."],
          similar: ["We would suggest a staged approach.", "Sugeriríamos un enfoque por etapas."],
          revise: ["ch-46-l-05", "Coherence and Professional Tone is the tone lesson.", "Coherence and Professional Tone and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "proposals"], hints: ["Open by naming the problem in one sentence.", "State the recommendation with recommend + noun.", "Describe the plan with would, and hedge one benefit with may."] },
    ),
  ),

  // -------------------------------- CH-47 Discussion, Debate and Presentation
  entry(
    47, 1, "complex opinions and evidence",
    qMcq(
      "Which response best supports an opinion with evidence in a debate?",
      [
        ["a", "I'd argue the policy failed, and the 2025 audit supports this: referrals fell 40% after the change."],
        ["b", "I strongly believe the policy failed because it's obvious to everyone."],
        ["c", "The policy failed, and anyone who disagrees is blind."],
        ["d", "Maybe the policy failed, who can really say, honestly."],
      ],
      "a",
      fbx(
        "Opinion (I'd argue) + evidence (the 2025 audit) + the number",
        "B2 debate structure: hedge the claim lightly, then anchor it in a source with a figure. Assertion without evidence is volume, not argument.",
        {
          whyWrong: "(b) offers belief as proof; (c) attacks the audience; (d) abandons the claim. Evidence is what separates debate from opinion.",
          rule: ["Claim → evidence → source", "I'd argue X, and the Y data support this."],
          similar: ["The evidence points to a clear decline.", "La evidencia apunta a un declive claro."],
          revise: ["ch-47-l-01", "Complex Opinions and Evidence teaches the structure.", "Complex Opinions and Evidence"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["debate", "evidence"] },
    ),
  ),
  entry(
    47, 2, "counterarguments and negotiation",
    qGid(
      "Label the highlighted move in the exchange.",
      "A: The subsidy should end now. B: I take your point about cost, but ending it overnight would destroy the autumn harvest — so a two-year taper protects both aims.",
      "I take your point about cost, but",
      "What move is highlighted?",
      "debate moves",
      [
        ["a", "concession followed by a counterproposal"],
        ["b", "a full agreement with A"],
        ["c", "a personal attack on A's data"],
        ["d", "a question asking for evidence"],
      ],
      "a",
      fbx(
        "concede, then counter",
        "I take your point… but… is the negotiation formula: grant the valid part, then redirect to your proposal. B ends with a concrete alternative (the taper).",
        {
          whyWrong: "There is no agreement (B proposes a different plan), no attack, and no question. The pivot word but does the diplomatic work.",
          rule: ["Negotiation formula", "Concede the valid point + but + counterproposal."],
          similar: ["While I accept the cost, a taper is safer.", "Si bien acepto el coste, una transición es más segura."],
          revise: ["ch-47-l-02", "Counterarguments and Negotiation teaches the formula.", "Counterarguments and Negotiation"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["debate", "negotiation"] },
    ),
  ),
  entry(
    47, 3, "presentation structure",
    qMatch(
      "Match each presentation section with its signalling phrase.",
      [
        ["l1", "opening the talk"],
        ["l2", "signposting a new section"],
        ["l3", "referring to a visual"],
        ["l4", "closing"],
      ],
      [
        ["r1", "As you can see on the slide…"],
        ["r2", "This morning I want to cover three things…"],
        ["r3", "To sum up, we've seen that…"],
        ["r4", "That brings me to my second point."],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r1"],
        ["l4", "r3"],
      ],
      fbx(
        "opening → I want to cover three things; new section → brings me to; visual → as you can see; closing → to sum up",
        "Presentations are guided tours: the signposts tell the audience where they are. Learning phrase and slot together is the skill.",
        {
          whyWrong: "Putting the visual phrase at the opening leaves the audience staring at a slide that is not yet visible. Each phrase belongs to its slot.",
          rule: ["Signpost every ten sentences", "Open, signpost, refer, summarise."],
          similar: ["Let me turn to the budget.", "Permítame pasar al presupuesto."],
          revise: ["ch-47-l-03", "Presentation Structure teaches the tour.", "Presentation Structure"],
        },
      ),
      { difficulty: "medium", skill: "speaking", tags: ["presentations", "signalling"] },
    ),
  ),
  entry(
    47, 4, "public speaking delivery",
    qLis(
      "Listen and answer: how does the speaker finish the talk?",
      "So, to sum up: the trial met its primary endpoint, the side-effect profile was benign, and the regulator has signalled a fast track. I'll stop there — thank you, and I'm happy to take questions.",
      "How does the speaker finish?",
      ["by summarising and inviting questions", "summarises then takes questions", "they summarise and offer to take questions"],
      fbx(
        "summarise, then invite questions",
        "The closing formula: to sum up + the three points + stop talking. The I'll stop there line hands the floor to the audience.",
        {
          whyWrong: "Ending on a new argument loses the room; the summary is what the audience carries out of the room.",
          rule: ["Close with the harvest", "To sum up… I'll stop there."],
          similar: ["Let me leave you with one number.", "Déjenme dejarles un dato."],
          revise: ["ch-47-l-04", "Public Speaking Delivery covers closings.", "Public Speaking Delivery"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "presentations"] },
    ),
  ),
  entry(
    47, 5, "handling questions",
    qRd(
      "Read the Q&A exchange and answer the question.",
      "Q&A at the conference",
      "Audience member: Isn't the sample too small to justify the claim? Speaker: That's a fair challenge — with n of forty, the finding is suggestive rather than conclusive. What I'd say, though, is that the effect size was consistent across all three cohorts, which is why we reported it. If I may, I'll add the replication data to the handout tonight.",
      "How does the speaker handle the challenge?",
      [
        ["a", "concedes the limits, gives a reason to report, offers follow-up"],
        ["b", "denies the problem and attacks the question"],
        ["c", "ignores the question and moves on"],
        ["d", "promises to withdraw the finding"],
      ],
      "a",
      fbx(
        "concede, justify, follow up",
        "The three-step answer to hard questions: that's a fair challenge (concede) + here is why we still reported it (justify) + I'll add the data tonight (follow-up).",
        {
          whyWrong: "Defensiveness loses the room; a withdrawal overclaims the critique. The formula keeps both the evidence and the goodwill.",
          rule: ["Hard-question formula", "Fair point + reasoning + offer."],
          similar: ["You're right that n is small; even so, the trend held.", "Tiene razón en que n es pequeño; aun así, la tendencia se mantuvo."],
          revise: ["ch-47-l-05", "Handling Questions is the Q&A lesson.", "Handling Questions and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "debate"] },
    ),
  ),
  entry(
    47, 5, "debate speaking",
    qSpeak(
      "B2 speaking challenge: the two-minute motion.",
      "Argue for or against this motion for one minute, then answer your own strongest objection: 'Homework should be optional.' Use the debate formula: state the claim, give one piece of evidence, concede the counterpoint (I take your point…), and land your counterproposal.",
      ["I'd argue homework should be optional.", "Studies suggest overloaded evenings harm sleep.", "I take your point about practice, but a choice-based system keeps the practice and drops the pressure."],
      ["i take your point", "i'd argue", "but"],
      fbx(
        "A structured minute, for example: I'd argue that homework should be optional. The evidence from the 2024 pilot in Finland-style schools suggests that voluntary practice maintains outcomes while improving sleep. I take your point that some students will opt out entirely — but a choice-based system with teacher-set menus keeps the practice and drops the pressure.",
        "The machine checks that the concession marker (I take your point), the hedged claim marker (I'd argue) and the pivot (but) all appear. This is the B2 exit debate: claim, evidence, concession, counterproposal — in one flow.",
        {
          whyWrong: "Assertion without evidence is volume; concession without a counterproposal is surrender. The formula requires all four moves.",
          rule: ["Four moves, one minute", "claim, evidence, concession, counterproposal."],
          similar: ["While I accept the cost, a taper is safer.", "Si bien acepto el coste, una transición es más segura."],
          revise: ["ch-47-l-02", "Counterarguments and Negotiation is the formula lesson.", "Counterarguments and Negotiation"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "debate"], hints: ["Open by hedging your claim: I'd argue…", "Give one number or study.", "Concede the other side, then pivot: I take your point… but…"] },
    ),
  ),

  // ------------------------------------ CH-48 Advanced Reading and Comprehension
  entry(
    48, 1, "critical reading",
    qMcq(
      "An advert claims: 'Nine out of ten owners said their dog preferred it.' What is the weakest point in this claim?",
      [
        ["a", "'Said' reports opinion, and 'preferred' implies a tested comparison that may never have happened."],
        ["b", "Nine out of ten is a statistical impossibility."],
        ["c", "Dogs cannot be counted as owners."],
        ["d", "The claim is fully watertight."],
      ],
      "a",
      fbx(
        "Said ≠ proved; preferred implies a comparison",
        "Critical reading asks what the words commit to. Said reports a claim; preferred implies the owners ran a comparison. Neither is evidence of anything measured.",
        {
          whyWrong: "Nine of ten is possible (just suspicious in its roundness); the sentence never says dogs are owners; and no advert claim is watertight.",
          rule: ["Read the verbs critically", "Said, felt, reported — opinion verbs vs measured verbs."],
          similar: ["Doctors recommend' is not doctors proved'.", "\"Los médicos lo recomiendan\" no es \"los médicos lo demostraron\"."],
          revise: ["ch-48-l-01", "Critical Reading teaches the verb audit.", "Critical Reading"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "critical"] },
    ),
  ),
  entry(
    48, 2, "inference and implicit meaning",
    qGid(
      "Label the highlighted sentence's function in the review.",
      "The service was impeccable, if by impeccable you mean the plates arrived fast and nobody once asked how the food was.",
      "if by impeccable you mean",
      "What is the highlighted phrase doing?",
      "writer's tools",
      [
        ["a", "irony — it flips the compliment into a complaint"],
        ["b", "it defines impeccable for a learner"],
        ["c", "it concedes the service was slow"],
        ["d", "it quotes the restaurant's own advert"],
      ],
      "a",
      fbx(
        "verbal irony",
        "The conditional redefinition (if by X you mean Y) sarcastically replaces the praised meaning with the failed one. Implicit meaning: the service was fast and cold.",
        {
          whyWrong: "It is not a definition, not a concession (the plates WERE fast), and no advert is quoted. The flip from praise to complaint is the irony.",
          rule: ["Irony = praise-shaped complaint", "Lovely, if by lovely you mean…" ],
          similar: ["A bargain, if by bargain you mean it broke twice.", "Una ganga, si por ganga se entiende que se rompió dos veces."],
          revise: ["ch-48-l-02", "Inference and Implicit Meaning teaches reading between lines.", "Inference and Implicit Meaning"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "irony"] },
    ),
  ),
  entry(
    48, 3, "writer's attitude and tone",
    qMatch(
      "Match each phrase from a text with the writer's attitude.",
      [
        ["l1", "It will come as no surprise that…"],
        ["l2", "One might charitably describe the plan as optimistic."],
        ["l3", "The ministry insists the figures are sound."],
        ["l4", "The findings, frankly, are a mess."],
      ],
      [
        ["r1", "open scepticism — the writer doubts the ministry"],
        ["r2", "weary irony — this has happened before"],
        ["r3", "blunt register — direct criticism"],
        ["r4", "mock politeness — charitably means the opposite"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r1"],
        ["l4", "r3"],
      ],
      fbx(
        "no surprise = weary irony; charitably = mock politeness; insists = scepticism; frankly = blunt criticism",
        "Tone lives in adverbs (charitably, frankly), reporting verbs (insists) and formulas (it will come as no surprise). B2 readers hear the attitude under the words.",
        {
          whyWrong: "Insists (rather than says) signals the writer does not believe it; charitably is praise-shaped criticism. Each marker carries a stance.",
          rule: ["Tone markers", "adverbs, reporting verbs, formulas."],
          similar: ["He claims to have been ill.", "Asegura que estuvo enfermo."],
          revise: ["ch-48-l-03", "Writer's Attitude and Tone is the stance lesson.", "Writer's Attitude and Tone"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "tone"], hints: ["Charitably in a review almost never means kindly.", "Insists is the sceptic's reporting verb.", "Frankly announces blunt register."] },
    ),
  ),
  entry(
    48, 4, "evaluating arguments",
    qLis(
      "Listen and answer: what is the weakest link in the argument?",
      "The festival must be extended, because ticket sales rose last year, and everyone agrees the bands were excellent, so a longer run is obviously justified.",
      "What is the weakest link in the reasoning?",
      ["the leap from last year to obviously justified", "it assumes last year predicts this year", "the argument assumes past success justifies a longer run", "the appeal to everyone agrees"],
      fbx(
        "the leap from last year's sales to 'obviously justified'",
        "Past sales + everyone agrees (an unverifiable appeal to consensus) are dressed as proof with obviously. The gap between last year and this year's costs is never addressed.",
        {
          whyWrong: "The evidence is real but insufficient: popularity is not a forecast, and obviously substitutes for the missing cost analysis.",
          rule: ["Audit the therefore", "Ask what would have to be true for the conclusion to follow."],
          similar: ["The fact that it worked once does not make it a rule.", "Que funcionara una vez no lo convierte en regla."],
          revise: ["ch-48-l-04", "Evaluating Arguments and Evidence is the audit lesson.", "Evaluating Arguments and Evidence"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["listening", "argument"] },
    ),
  ),
  entry(
    48, 5, "summarisation",
    qRd(
      "Read the passage and choose the best one-sentence summary.",
      "The long passage",
      "The library opened in 1904 as a reading room for mill workers, closed for restoration in 1989 after a fire, and reopened in 1994 with the original staircase and a new glass roof. Visits tripled in the first decade after reopening, and in 2010 the annex became the city's main public archive. The mill ledgers, kept in the basement since the 1950s, were moved to the annex and catalogued for the first time.",
      "Which summary keeps every stage of the story at proportional weight?",
      [
        ["a", "After a fire and restoration, the library reopened in 1994, expanded into an archive, and saw visits and collections grow."],
        ["b", "The library was built in 1904 and has a glass roof."],
        ["c", "The mill ledgers are the most important item in the archive."],
        ["d", "A fire closed the library for five years."],
      ],
      "a",
      fbx(
        "the reopened-and-grew summary",
        "A summary keeps every stage of the story at proportional weight: founding, fire, reopening, growth, archive. Details (the roof, the ledgers alone, the five years) are true but partial.",
        {
          whyWrong: "Option (b) drops everything after 1994; (c) elevates one collection; (d) keeps only the middle. Summaries trade detail for coverage — never coverage for detail.",
          rule: ["Summary = all stages, fewer words", "Cut detail, keep sequence."],
          similar: ["In short, the reform cut costs but not jobs.", "En resumen, la reforma recortó costes pero no empleos."],
          revise: ["ch-48-l-05", "Summarisation is the compression lesson.", "Summarisation and B2 Exit"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "summary"] },
    ),
  ),
  entry(
    48, 5, "B2 exit writing",
    qWrite(
      "B2 exit challenge: the critical review.",
      "Write a five-sentence critical review of an imaginary product or service. Include: one hedged claim (appears to / may), one tone marker (frankly / admittedly), one piece of evidence, and one balanced conclusion (on balance).",
      65,
      ["admittedly", "frankly", "on balance", "appears to", "may"],
      fbx(
        "A review like: The app promises focus and, admittedly, the timer is elegant. Frankly, the subscription page obscures the free tier — a pressure tactic the reviews appear to confirm. In three weeks of use, session lengths may have improved slightly, though the sample is one. On balance, it earns a cautious recommendation for the timer alone.",
        "The machine checks that at least one tone/hedge marker appears (the task lists five; any one is machine-checked) and that you reach 65 words. The human checks are balance and evidence — the two things a review is judged on.",
        {
          whyWrong: "The B2 failure modes are absolutism (nothing is ever) and evidence-free enthusiasm. Hedge, evidence, then conclude on balance.",
          rule: ["Review formula", "concede, criticise with evidence, hedge, conclude on balance."],
          similar: ["On balance, the gains outweigh the risks.", "En conjunto, las ventajas superan los riesgos."],
          revise: ["ch-48-l-05", "Summarisation and B2 Exit reviews the whole toolkit.", "Summarisation and B2 Exit"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "critical"], hints: ["Open with one honest strength — use admittedly.", "Turn with frankly + the criticism.", "Close with on balance + your verdict."] },
    ),
  ),
  entry(
    48, 2, "inference challenge",
    qSb(
      "Challenge: build the ironic sentence from the tiles. One tile is extra.",
      ["a", "bargain", "if", "by", "bargain", "you", "mean", "it", "broke", "twice", "cheap"],
      ["A bargain, if by bargain you mean it broke twice."],
      fbx(
        "A bargain, if by bargain you mean it broke twice.",
        "The conditional redefinition is the irony machine: repeat the praised word, then define it by its failure. The tile cheap is the trap — stating the criticism plainly would kill the irony.",
        {
          whyWrong: "If by bargain you mean cheap says the opposite of the intended sarcasm — the rewrite must name the failure, not restate the compliment.",
          rule: ["Redefine the compliment as the failure", "X, if by X you mean [the failure]."],
          similar: ["A success, if by success you mean we lost money.", "Un éxito, si por éxito se entiende que perdimos dinero."],
          revise: ["ch-48-l-02", "Inference and Implicit Meaning is the irony lesson.", "Inference and Implicit Meaning"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "irony"], hints: ["The sentence starts with the praised noun.", "Repeat it after if by…", "End with the failure — not a synonym for good."] },
    ),
  ),
];
