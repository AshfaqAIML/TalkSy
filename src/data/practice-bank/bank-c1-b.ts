/**
 * PROMPT 36 practice bank — C1 chapters 53–56 (part B of the C1 set).
 *
 * Critical and analytical reading (53), advanced professional writing (54),
 * advanced spoken communication (55), pronunciation, fluency and capstone (56).
 */

import {
  entry,
  fbx,
  qCorr,
  qDict,
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

export const bankC1B: BankEntry[] = [
  // ------------------------------------ CH-53 Critical and Analytical Reading
  entry(
    53, 1, "analysing arguments",
    qMcq(
      "A column argues: 'Crime fell after the cameras were installed, so the cameras worked.' What is the strongest analytical objection?",
      [
        ["a", "Correlation is not causation — crime had been falling for three years before the cameras went up."],
        ["b", "Cameras are expensive, and the writer likes them."],
        ["c", "Crime never falls, statistically speaking."],
        ["d", "The column is too short to contain an argument."],
      ],
      "a",
      fbx(
        "the trend preceded the cause",
        "If the fall began before the cameras, the cameras cannot be the cause. C1 analysis attacks the inferential step, not the writer's taste.",
        {
          whyWrong: "(b) is ad hominem; (c) is false; (d) is about length. The only analytical move is testing the causal claim against the timeline.",
          rule: ["Test the because", "Ask what else could have produced the same numbers."],
          similar: ["Sales rose after the rebrand — and after the recession ended.", "Las ventas subieron tras el rebranding, y tras el fin de la recesión."],
          revise: ["ch-53-l-01", "Analysing Arguments teaches the audit steps.", "Analysing Arguments"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["argument", "causation"] },
    ),
  ),
  entry(
    53, 2, "assumptions and bias",
    qGid(
      "Label the highlighted word's function in the sentence.",
      "Of course, any reasonable person accepts that the market will correct itself.",
      "any reasonable person",
      "What is the highlighted phrase doing?",
      "bias tools",
      [
        ["a", "it smuggles the conclusion in by defining disagreement as unreasonableness"],
        ["b", "it politely invites the reader to disagree"],
        ["c", "it hedges the claim about the market"],
        ["d", "it defines the term reasonable person"],
      ],
      "a",
      fbx(
        "loaded framing (poisoning the well)",
        "Of course + any reasonable person presupposes the conclusion: if you disagree, you are by definition unreasonable. C1 readers spot the presupposition under the courtesy.",
        {
          whyWrong: "No invitation to disagree exists, no hedge, no definition. The phrase is doing persuasion while pretending to state a consensus.",
          rule: ["Watch for consensus words", "Of course, everyone knows, any reasonable person — all smuggle conclusions."],
          similar: ["Naturally, no serious economist would deny it.", "Naturalmente, ningún economista serio lo negaría."],
          revise: ["ch-53-l-02", "Assumptions and Bias teaches the spotting.", "Assumptions and Bias"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["bias", "presupposition"] },
    ),
  ),
  entry(
    53, 3, "synthesising sources",
    qMatch(
      "Match each reporting phrase with the synthesis move it makes.",
      [
        ["l1", "Where the two studies converge…"],
        ["l2", "Where they part company…"],
        ["l3", "What neither addresses…"],
        ["l4", "Taken together…"],
      ],
      [
        ["r1", "combines both sources into one claim"],
        ["r2", "isolates the shared finding"],
        ["r3", "names the common gap"],
        ["r4", "locates the disagreement precisely"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r3"],
        ["l4", "r1"],
      ],
      fbx(
        "converge = shared finding; part company = the disagreement; neither addresses = the gap; taken together = the combined claim",
        "Synthesis has four moves: converge, diverge, gap, combine. Each has its phrase; C1 writing uses all four in one paragraph.",
        {
          whyWrong: "Conflating divergence with the gap erases the most interesting part — two sources can agree on the finding and disagree on the cause.",
          rule: ["Four synthesis moves", "converge / diverge / gap / combine."],
          similar: ["Taken together, the trials point one way.", "En conjunto, los ensayos apuntan en una dirección."],
          revise: ["ch-53-l-03", "Synthesising Sources is the four-moves lesson.", "Synthesising Sources"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["synthesis", "sources"], hints: ["Converge is about agreement.", "Part company is about the disagreement.", "Neither addresses is about the gap."] },
    ),
  ),
  entry(
    53, 4, "reading complex texts",
    qRd(
      "Read the passage and answer the question.",
      "The two ledgers",
      "The stewards' accounts, kept in duplicate, diverge in one respect only: the second ledger records a payment to the carrier in the March of that year which the first omits. As the first ledger was kept for the estate and the second for the family, the omission is best explained not by error but by audience: entries the family might question were quietly left out of the estate's copy, whose readers were the family itself.",
      "What does the writer infer from the divergence?",
      [
        ["a", "The omission was deliberate — each ledger was written for a different reader."],
        ["b", "The carrier was never paid."],
        ["c", "The first ledger is the more accurate one."],
        ["d", "The stewards could not add up."],
      ],
      "a",
      fbx(
        "a deliberate omission for the family's eyes",
        "The inference: duplicate ledgers differ only where the family might object — the best explanation is audience management, not arithmetic failure. (This is inference to the best explanation.)",
        {
          whyWrong: "(b) contradicts the second ledger; (c) and (d) both ignore the pattern: only the sensitive entry differs. C1 reading tests the explanation against ALL the data.",
          rule: ["Inference to the best explanation", "Choose the account that explains every detail, not just one."],
          similar: ["The pattern fits design, not chance.", "El patrón encaja con diseño, no con azar."],
          revise: ["ch-53-l-04", "Reading Complex Texts trains the inference.", "Reading Complex Texts and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["inference", "reading"] },
    ),
  ),
  entry(
    53, 2, "bias in listening",
    qLis(
      "Listen and answer: what does the speaker treat as settled that is actually contested?",
      "Everyone agrees the reform was a success — the numbers speak for themselves, and it is only the usual sceptics who quibble about the method.",
      "What does the speaker treat as settled?",
      ["the numbers speak for themselves", "that the reform was a success", "everyone agrees it was a success"],
      fbx(
        "that the reform was a success",
        "Three bias tools in one breath: consensus (everyone agrees), self-evidence (numbers speak for themselves) and dismissal (the usual sceptics). Each treats a contestable claim as settled.",
        {
          whyWrong: "The method questions are real objections, not quibbles; the numbers have not yet been shown to mean success. C1 listeners separate evidence from framing.",
          rule: ["Bias flags", "everyone agrees / speaks for itself / the usual critics."],
          similar: ["Only the naive would deny it.", "Solo un ingenuo lo negaría."],
          revise: ["ch-53-l-02", "Assumptions and Bias lists the flags.", "Assumptions and Bias"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["listening", "bias"] },
    ),
  ),
  entry(
    53, 4, "analytical writing",
    qWrite(
      "C1 writing challenge: the source synthesis.",
      "Write a five-sentence synthesis of two imaginary studies on the same question (e.g. does remote work improve output). Use all four moves: where they converge, where they part company, what neither addresses, and taken together.",
      65,
      ["converge", "part company", "neither addresses", "taken together"],
      fbx(
        "A synthesis like: The two studies converge on one point: output did not fall. They part company on hours worked — the Stanford replication finds longer days, the Lisbon study shorter ones. What neither addresses is team quality: both samples skew senior. Taken together, the evidence supports stability of output, but says nothing yet about junior staff.",
        "The machine checks that at least one of the four move-phrases appears (the task asks for all four; several are machine-checked) and that you reach 65 words. The human check is precision: each move must be located in the sources, not invented.",
        {
          whyWrong: "The C1 failure is quotation without synthesis — two summaries stapled together. The four moves are what make it a synthesis.",
          rule: ["Four moves, one paragraph", "converge, diverge, gap, combine."],
          similar: ["Taken together, the case is strong.", "En conjunto, el caso es sólido."],
          revise: ["ch-53-l-03", "Synthesising Sources is the four-moves lesson.", "Synthesising Sources"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "synthesis"], hints: ["Open with the point of agreement.", "Then locate the disagreement precisely.", "Name the shared gap, then combine with taken together."] },
    ),
  ),
  entry(
    53, 2, "presupposition challenge",
    qSb(
      "Challenge: build the loaded sentence from the tiles. One tile is extra.",
      ["naturally", "no", "serious", "economist", "would", "deny", "it", "everyone", "again"],
      ["Naturally, no serious economist would deny it."],
      fbx(
        "Naturally, no serious economist would deny it.",
        "The consensus frame: naturally + no serious X — disagreement is defined away before it can begin. The tile everyone is the trap: stacking two consensus markers overloads the frame.",
        {
          whyWrong: "Naturally, everyone, no serious economist… triples the frame and tips it into parody. One consensus marker is how real writing hides the load.",
          rule: ["One loaded marker per sentence", "Naturally / of course / any reasonable person — choose one."],
          similar: ["Of course, the market will correct itself.", "Por supuesto, el mercado se corregirá solo."],
          revise: ["ch-53-l-02", "Assumptions and Bias teaches the loading.", "Assumptions and Bias"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["bias", "sentence building"], hints: ["The frame opens with a consensus adverb.", "Then the no serious + profession group.", "One tile is a second consensus word — leave it out."] },
    ),
  ),

  // ------------------------------------ CH-54 Advanced Professional Writing
  entry(
    54, 1, "research-style writing",
    qCorr(
      "The sentence mixes registers. Rewrite it in research style, keeping the finding.",
      "Basically the treatment totally worked, which is huge for the field.",
      ["The treatment was associated with a significant improvement in primary outcomes.", "The trial found a significant improvement in primary outcomes."],
      fbx(
        "The treatment was associated with a significant improvement in primary outcomes.",
        "Research register: was associated with (never caused, unless designed to), significant in its statistical sense, outcomes named. Basically, totally and huge belong to conversation.",
        {
          whyWrong: "Worked claims more than association; huge is an intensifier with no measure. Research writing calibrates every verb to the design of the study.",
          rule: ["Research verbs", "was associated with / was observed in / correlated with."],
          similar: ["The effect was observed across all cohorts.", "El efecto se observó en todas las cohortes."],
          revise: ["ch-54-l-01", "Research-Style Writing teaches the register.", "Research-Style Writing"],
        },
      ),
      { difficulty: "hard", skill: "writing", tags: ["register", "research"] },
    ),
  ),
  entry(
    54, 2, "analytical reports",
    qGid(
      "Label the highlighted move in the report line.",
      "Against this backdrop, the committee examined three options, of which the phased closure emerged as the least disruptive.",
      "Against this backdrop",
      "What is the highlighted phrase doing?",
      "report moves",
      [
        ["a", "it links the analysis to the situation already described"],
        ["b", "it hedges the committee's preference"],
        ["c", "it introduces a new topic unrelated to the previous section"],
        ["d", "it reports the committee's vote"],
      ],
      "a",
      fbx(
        "a cohesive anchor",
        "Against this backdrop ties the options to the difficulties of the previous paragraph. Professional writing is stitched: every section opens by inheriting the last one.",
        {
          whyWrong: "It neither hedges nor votes; and it is precisely about NOT changing topic. The phrase is cohesion, not content.",
          rule: ["Anchor every section", "Against this backdrop / In this context / Given the above."],
          similar: ["In this context, the board approved a review.", "En este contexto, el consejo aprobó una revisión."],
          revise: ["ch-54-l-02", "Analytical Reports and Proposals teaches the stitching.", "Analytical Reports and Proposals"],
        },
      ),
      { difficulty: "hard", skill: "writing", tags: ["cohesion", "reports"] },
    ),
  ),
  entry(
    54, 3, "analytical essays",
    qMatch(
      "Match each essay sentence with its move.",
      [
        ["l1", "This paper examines the claim that austerity raised productivity."],
        ["l2", "Methodologically, the study relies on a single decade."],
        ["l3", "An alternative reading attributes the gains to the devaluation."],
        ["l4", "The evidence, then, supports a cautious conclusion at most."],
      ],
      [
        ["r1", "qualifies the strength of the finding"],
        ["r2", "states the question under examination"],
        ["r3", "concedes a limitation of the evidence"],
        ["r4", "presents the rival explanation"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r3"],
        ["l3", "r4"],
        ["l4", "r1"],
      ],
      fbx(
        "examines = the question; methodologically = the limitation; an alternative reading = the rival; then, at most = the calibrated conclusion",
        "Analytical essays run on named moves: question, limitation, rival explanation, calibrated conclusion. Each has its signature phrase.",
        {
          whyWrong: "Swapping the rival and the limitation turns a competing theory into a weakness of one's own — a different argument entirely.",
          rule: ["Essay move inventory", "question, limitation, rival, conclusion."],
          similar: ["An alternative account stresses the currency effect.", "Una explicación alternativa subraya el efecto divisa."],
          revise: ["ch-54-l-03", "Analytical Essays is the moves lesson.", "Analytical Essays"],
        },
      ),
      { difficulty: "hard", skill: "writing", tags: ["essays", "moves"] },
    ),
  ),
  entry(
    54, 4, "professional correspondence",
    qCorr(
      "The closing is wrong for a formal complaint reply. Write the corrected closing line.",
      "Anyway, hope that sorts it. Cheers.",
      ["I trust this resolves the matter; please contact me if further clarification is required.", "Should you require anything further, please do not hesitate to contact me."],
      fbx(
        "I trust this resolves the matter; please contact me if further clarification is required.",
        "Formal correspondence closes with a formula: resolution + availability. Anyway, hope and cheers are messaging register.",
        {
          whyWrong: "Cheers signals friendship, not service. In professional correspondence, the closing formula is part of the contract with the reader.",
          rule: ["Close with the formula", "I trust… / Should you require…"],
          similar: ["I trust this meets with your approval.", "Confío en que cuente con su aprobación."],
          revise: ["ch-54-l-04", "Professional Correspondence teaches the formulas.", "Professional Correspondence"],
        },
      ),
      { difficulty: "medium", skill: "writing", tags: ["correspondence", "register"] },
    ),
  ),
  entry(
    54, 5, "editing and revision",
    qMcq(
      "Which revision most improves the sentence: 'It was decided by the committee that a postponement of the launch would be undertaken'?",
      [
        ["a", "The committee decided to postpone the launch."],
        ["b", "It was the committee's decision that the launch be postponed by them."],
        ["c", "A postponement of the launch was what was decided."],
        ["d", "The launch was postponed by a decision of the committee."],
      ],
      "a",
      fbx(
        "The committee decided to postpone the launch.",
        "Editing at C1 removes zombie nouns (postponement → postpone; undertaking → decide) and the passives they force. Six words carry the whole decision.",
        {
          whyWrong: "Every other option keeps either the zombie noun, the passive, or both. Revision is deletion in the service of the actor and the action.",
          rule: ["Cut zombie nouns", "make a decision → decide; undertake a postponement → postpone."],
          similar: ["We came to the conclusion that… → We concluded that…", "Llegamos a la conclusión de que… → Concluimos que…"],
          revise: ["ch-54-l-05", "Editing and Revision is the deletion lesson.", "Editing and Revision and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "writing", tags: ["editing", "style"] },
    ),
  ),
  entry(
    54, 5, "professional writing",
    qWrite(
      "C1 writing challenge: the decision memo.",
      "Write a five-sentence decision memo: state the situation (against this backdrop…), name the option chosen (the committee decided to…), give one reason with a hedge (appears to / would seem to), note one limitation (methodologically / admittedly), and close with the availability formula (should you require…).",
      70,
      ["against this backdrop", "admittedly", "appears to", "would seem to", "should you require"],
      fbx(
        "A memo like: Against this backdrop of falling enrolment, the committee decided to merge the two departments from September. The merger would seem to protect the smaller unit's teaching load, which pilot data appear to confirm. Admittedly, the savings depend on vacancies that have not yet arisen. Should you require the modelling behind these figures, please contact me directly.",
        "The machine checks that at least one register marker appears (several are machine-checked) and that you reach 70 words. The human checks are actor-first sentences and one honest limitation — the two habits C1 editors look for.",
        {
          whyWrong: "The C1 failure is nominalisation: a decision was undertaken by the committee. Actors first, actions as verbs, one admitted limit.",
          rule: ["Memo formula", "anchor, decision, hedged reason, admitted limit, availability."],
          similar: ["Should you require further detail, I am at your disposal.", "Si requiere más detalle, quedo a su disposición."],
          revise: ["ch-54-l-05", "Editing and Revision reviews the whole toolkit.", "Editing and Revision and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "register"], hints: ["Open by inheriting the situation: Against this backdrop…", "State the decision with actors and verbs, not nouns.", "Close with the availability formula."] },
    ),
  ),

  // ------------------------------------ CH-55 Advanced Spoken Communication
  entry(
    55, 1, "negotiation",
    qMcq(
      "Which reply best keeps a negotiation alive after a first refusal?",
      [
        ["a", "I understand the price is a sticking point — suppose we stage the payments against delivery milestones instead."],
        ["b", "Take it or leave it, I'm afraid."],
        ["c", "You're wrong about the price, and I can prove it."],
        ["d", "Fine, we accept your price with no changes."],
      ],
      "a",
      fbx(
        "acknowledge, then reframe the variable",
        "Professional negotiation: name the obstacle (sticking point), then move the argument to a different variable (staged payments). Neither surrender nor ultimatum.",
        {
          whyWrong: "The ultimatum (b) ends the negotiation; the counter-attack (c) ends the relationship; the surrender (d) ends the margin. Reframing continues all three.",
          rule: ["Negotiation move", "Acknowledge the block, reframe the variable."],
          similar: ["If price is fixed, let's discuss timing instead.", "Si el precio es fijo, hablemos del calendario."],
          revise: ["ch-55-l-01", "Negotiation teaches the moves.", "Negotiation"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["negotiation", "speaking"] },
    ),
  ),
  entry(
    55, 2, "debate at level",
    qGid(
      "Label the highlighted move in the debate line.",
      "My opponent says the scheme is unaffordable. On the figures he cites, it is — which is precisely why the figures he cites are the wrong measure.",
      "which is precisely why the figures he cites are the wrong measure",
      "What is the highlighted move?",
      "debate moves",
      [
        ["a", "concede the frame, then challenge the criterion — turning the concession into the attack"],
        ["b", "a full retraction of his own position"],
        ["c", "a personal remark about the opponent's maths"],
        ["d", "a hedge about the affordability claim"],
      ],
      "a",
      fbx(
        "concede the point, contest the measure",
        "The speaker grants the arithmetic and attacks the yardstick: even if true on those figures, those figures are the wrong test. This is the highest-value move in formal debate.",
        {
          whyWrong: "Nothing is retracted, no person is attacked, and there is no hedge. The move works because the concession does the attacking.",
          rule: ["Concede the fact, contest the frame", "Yes — and that is exactly the problem with the frame."],
          similar: ["Even on his own numbers, the conclusion doesn't follow.", "Incluso con sus propias cifras, la conclusión no se sigue."],
          revise: ["ch-55-l-02", "Debate is the advanced-moves lesson.", "Debate"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["debate", "concession"] },
    ),
  ),
  entry(
    55, 3, "presentations at level",
    qMatch(
      "Match each advanced signpost with its function.",
      [
        ["l1", "That's the background; now to the substance."],
        ["l2", "I want to dwell on this figure for a moment."],
        ["l3", "I'll come back to that in the final section."],
        ["l4", "So much for the mechanics."],
      ],
      [
        ["r1", "parks a question without dismissing it"],
        ["r2", "closes a section with a spoken flourish"],
        ["r3", "moves from context to core content"],
        ["r4", "slows the audience down on purpose"],
      ],
      [
        ["l1", "r3"],
        ["l2", "r4"],
        ["l3", "r1"],
        ["l4", "r2"],
      ],
      fbx(
        "now to the substance = transition; dwell on = deliberate slow-down; come back to that = parking; so much for = section close",
        "C1 presenting controls time in the audience's head: transitions, deliberate dwelling, parking questions, closing sections with a flourish.",
        {
          whyWrong: "Parking is not refusing — the question is honoured and scheduled. Each phrase manages attention differently.",
          rule: ["Four time tools", "transition, dwell, park, close."],
          similar: ["I'll park that until the Q&A.", "Aparcaré eso hasta el turno de preguntas."],
          revise: ["ch-55-l-03", "Public Presentations at Level teaches the set.", "Public Presentations at Level"],
        },
      ),
      { difficulty: "hard", skill: "speaking", tags: ["presentations", "signposting"], hints: ["Dwell on = slow down deliberately.", "So much for = section close.", "Come back to that = parking, not refusal."] },
    ),
  ),
  entry(
    55, 4, "interview performance",
    qLis(
      "Listen and answer: what does the candidate do with the weakness question?",
      "My weakest area used to be delegation — I would hold on to work. What changed it was a rule I now follow: nothing sits with me for more than a day without a named owner.",
      "How does the candidate handle the weakness?",
      ["names it and shows the change", "admits it and explains the fix", "she names the weakness and gives the mechanism that fixed it"],
      fbx(
        "names the weakness, then shows the mechanism",
        "The strong interview formula: one real weakness (delegation), a turning point, and a named rule that proves the change. Weakness theatre (I work too hard) convinces nobody.",
        {
          whyWrong: "Naming a strength as a weakness is the classic failure; over-apologising is the other. Evidence of change is what the question is for.",
          rule: ["Weakness formula", "real weakness + turning point + operating rule."],
          similar: ["I now timebox every decision.", "Ahora limito el tiempo de cada decisión."],
          revise: ["ch-55-l-04", "Interview Performance teaches the formula.", "Interview Performance"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["interviews", "speaking"] },
    ),
  ),
  entry(
    55, 5, "spontaneity and storytelling",
    qRd(
      "Read the anecdote and answer the question.",
      "The anecdote",
      "When I arrived, the hall was already full, and the technician handed me a microphone that didn't work. I put it down, stepped to the front of the stage, and said: the last time I spoke without amplification, I was a schoolboy arguing about cricket. It was the best speech I ever gave, and not because of what I said — because for ten minutes, two hundred people and I shared one room properly.",
      "What carries the story's point?",
      [
        ["a", "the final reflection — the room shared properly beats the technology"],
        ["b", "the broken microphone"],
        ["c", "the cricket argument"],
        ["d", "the size of the audience"],
      ],
      "a",
      fbx(
        "the closing reflection",
        "C1 storytelling: incident (broken mic), decision (step forward), detail (cricket), and then the reflection that converts anecdote into meaning. The reflection is the payload.",
        {
          whyWrong: "The mic, the cricket and the two hundred are the materials; only the last sentence says what they mean. Stories without the reflection are merely events.",
          rule: ["Story → meaning", "Tell the incident; land the reflection."],
          similar: ["And that day I learned to stop rehearsing.", "Y ese día aprendí a dejar de ensayar."],
          revise: ["ch-55-l-05", "Spontaneity, Nuance and Storytelling is the payload lesson.", "Spontaneity, Nuance and Storytelling"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["storytelling", "reading"] },
    ),
  ),
  entry(
    55, 5, "capstone speaking",
    qSpeak(
      "C1 capstone: the ninety-second argument.",
      "Speak for ninety seconds on a motion of your choice. Use: a concession that becomes your attack (granted — and that is precisely why…), a hedged claim (would seem to), an inversion or cleft for emphasis, and close with a reflection (and that is the point).",
      ["Granted — and that is precisely why the measure fails the test it sets itself.", "The pattern would seem deliberate.", "Not once did the board ask for the numbers. And that is the point: governance is a habit, not a document."],
      ["granted", "would seem to", "not once", "and that is the point"],
      fbx(
        "A capstone performance, for example: Granted, the scheme is affordable on the figures the ministry cites — and that is precisely why the figures are the wrong test, for affordability was never the constraint. The delay would seem deliberate: not once in two years did the board request the raw numbers. And that is the point: governance is a habit, not a document.",
        "The machine checks that a concession marker (granted), a hedge (would seem to), an emphasis inversion (not once) and the reflection close all appear. This is the programme's highest speaking bar.",
        {
          whyWrong: "Assertion without the concession loses the room; reflection without the evidence loses the argument. The four moves are the capstone.",
          rule: ["Four capstone moves", "concede-to-attack, hedge, invert, reflect."],
          similar: ["Granted, the cost is real; even so, the design is sound.", "Concedido, el coste es real; aun así, el diseño es sólido."],
          revise: ["ch-55-l-02", "Debate is the concession lesson.", "Debate"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "capstone"] },
    ),
  ),

  // -------------------------------- CH-56 Pronunciation, Fluency and Capstone
  entry(
    56, 1, "connected speech",
    qLis(
      "Listen and answer: how many words do you hear in the phrase (as spoken naturally)?",
      "I would have asked for a piece of cake, but there wasn't any left.",
      "How does would have sound in natural speech?",
      ["would've", "would of", "wuda", "it contracts to would've"],
      fbx(
        "would've (the contraction of would have)",
        "In connected speech, would have reduces to would've — often written wrongly as would of. Hearing the contraction is the first step to using it.",
        {
          whyWrong: "Would of is a spelling error based on the sound. The full form would have survives only in careful speech.",
          rule: ["Contract in speech, expand in writing", "would've, could've, should've — never of."],
          similar: ["I should've known better.", "Debería haberlo sabido."],
          revise: ["ch-56-l-01", "Connected Speech teaches the reductions.", "Connected Speech"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["pronunciation", "connected speech"] },
    ),
  ),
  entry(
    56, 2, "stress and rhythm",
    qGid(
      "Label the highlighted pattern in the sentence (read it aloud).",
      "The minister RESPONSIBLE for the delay has since been PROMOTED.",
      "RESPONSIBLE",
      "What is the highlighted word doing in the sentence's rhythm?",
      "pronunciation",
      [
        ["a", "the content-word stresses that carry the rhythm"],
        ["b", "three spelling mistakes in capitals"],
        ["c", "a shout, for emphasis"],
        ["d", "the weak forms of the sentence"],
      ],
      "a",
      fbx(
        "content-word stress",
        "English rhythm lives on the content words (nouns, verbs, adjectives); the grammar words reduce around them. Stress placement changes meaning more than volume does.",
        {
          whyWrong: "The capitals mark stress, not spelling; a shout raises volume without rhythm; the weak forms are the UNstressed words.",
          rule: ["Stress content, reduce grammar", "The MINISTER RESPONSIBLE for the DELAY…"],
          similar: ["It's not what you SAY, it's what you MEAN.", "No es lo que dices, es lo que quieres decir."],
          revise: ["ch-56-l-02", "Stress and Rhythm is the beat lesson.", "Stress and Rhythm"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["pronunciation", "stress"] },
    ),
  ),
  entry(
    56, 3, "intonation",
    qMatch(
      "Match each intonation pattern with its meaning (say each line aloud).",
      [
        ["l1", "You're coming. ↘"],
        ["l2", "You're coming? ↗"],
        ["l3", "You're coming… ↘︡ (fall, then slight rise)"],
        ["l4", "YOU'RE coming. ↘ (stress on you're)"],
      ],
      [
        ["r1", "surprise or checking — a rise checks the information"],
        ["r2", "a statement — a fall closes the information"],
        ["r3", "contrast — someone else is not coming"],
        ["r4", "reservation or hesitation — not fully settled"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r1"],
        ["l3", "r4"],
        ["l4", "r3"],
      ],
      fbx(
        "fall = statement; rise = checking; fall-rise = reservation; stress on you're = contrast",
        "Intonation is grammar you hear: the same two words can state, question, doubt or contrast. C1 learners control the tune, not just the words.",
        {
          whyWrong: "A rise does not merely question — it checks; a fall does not merely end — it concludes. The fall-rise carries the unspoken but.",
          rule: ["Four tunes", "fall (done), rise (check), fall-rise (but…), contrastive stress (not him)."],
          similar: ["She's ready… (or is she?)", "Está lista… (¿o no?)."],
          revise: ["ch-56-l-03", "Intonation is the tune lesson.", "Intonation"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["pronunciation", "intonation"], hints: ["The plain fall states; the rise checks.", "The fall-rise leaves a but hanging.", "Stress on you're contrasts with someone else."] },
    ),
  ),
  entry(
    56, 4, "clarity at speed",
    qDict(
      "Listen and type the sentence exactly as you hear it (it is spoken quickly).",
      "She'd already rewritten the conclusion twice before the supervisor even opened the file.",
      ["She'd already rewritten the conclusion twice before the supervisor even opened the file."],
      fbx(
        "She'd already rewritten the conclusion twice…",
        "At speed, she had contracts to she'd and already reduces — but the content words (rewritten, conclusion, twice, supervisor, opened) stay clear. Clarity at speed means keeping the content words intact while the grammar reduces.",
        {
          whyWrong: "Writing she had here is correct English but mishears the speech; the dictation trains the ear for the reductions while the meaning stays recoverable.",
          rule: ["Reduce grammar, never content", "Fast speech is clear about the payload words."],
          similar: ["He'd've told you if he'd known.", "Te lo habría dicho si lo hubiera sabido."],
          revise: ["ch-56-l-04", "Clarity at Speed trains fast listening.", "Clarity at Speed and Integrated Projects"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["dictation", "fluency"] },
    ),
  ),
  entry(
    56, 5, "programme review reading",
    qRd(
      "Read the capstone brief and answer the question.",
      "Capstone brief",
      "For your final assessment you will present a five-minute analysis of a public decision of your choosing. The markers will listen for four things: a claim you can defend under questioning; evidence you present at the strength it supports; at least one concession that sharpens rather than softens your position; and a closing reflection that tells the audience why the decision matters beyond itself.",
      "What must your concession do, according to the brief?",
      [
        ["a", "sharpen your position — granted, and here is why it still stands"],
        ["b", "soften your claim so nobody disagrees"],
        ["c", "list every possible objection in advance"],
        ["d", "apologise for having a position at all"],
      ],
      "a",
      fbx(
        "sharpen, not soften",
        "A C1 concession grants ground and gains force: granted — and that is precisely why… The brief asks for the concession that does the attacking.",
        {
          whyWrong: "Softening invites the audience to discount the claim; listing objections is a survey, not an argument; apologising forfeits the position.",
          rule: ["Concession that attacks", "Granted, X — and X is exactly why Y."],
          similar: ["Granted, it is expensive; that is the argument for it.", "Concedido, es caro; ese es precisamente el argumento a favor."],
          revise: ["ch-55-l-02", "Debate (CH-55) is the concession lesson.", "Debate"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["capstone", "reading"] },
    ),
  ),
  entry(
    56, 5, "capstone writing",
    qWrite(
      "Programme capstone: the five-minute script.",
      "Write the opening thirty seconds of your capstone analysis (4–5 sentences): a hook that states the decision under review, one hedged claim (would seem to / appears to), one concession that sharpens (granted — and precisely because…), and a signpost of what the audience will hear (I'll show you three things…).",
      75,
      ["granted", "would seem to", "appears to", "i'll show you"],
      fbx(
        "A capstone opening, for example: In March, the council sold a hundred-year-old water system to a fund it cannot name. The decision would seem to have saved the budget — and that, precisely, is where the analysis must begin. Granted, the sale price was fair; my question tonight is what was sold with it. I'll show you three things: the contract, the clause nobody read, and the two sentences that decided it all.",
        "The machine checks that at least one marker appears (granted / would seem to / I'll show you) and that you reach 75 words. The human checks are the calibrated claim and the sharpening concession — the two signatures of the whole programme.",
        {
          whyWrong: "The capstone failure is flat assertion read aloud. Hedge the claim, sharpen the concession, signpost the route — the three habits fifty-six chapters built.",
          rule: ["Capstone formula", "hook, hedged claim, sharpening concession, signpost."],
          similar: ["Tonight I want to show you one document.", "Esta noche quiero enseñarles un documento."],
          revise: ["ch-56-l-05", "Final Proficiency Assessment and Programme Review is the capstone lesson.", "Final Proficiency Assessment and Programme Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["capstone", "writing"], hints: ["Open with the decision and one concrete detail.", "Hedge the obvious reading: would seem to…", "Concede with granted — and turn it: and precisely because…"] },
    ),
  ),
];
