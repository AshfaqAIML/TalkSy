/**
 * PROMPT 36 practice bank — C1 chapters 49–52 (part A of the C1 set).
 *
 * Advanced grammatical structures (49), nuance, hedging and modality (50),
 * rhetoric, register and style (51), sophisticated vocabulary (52). C1
 * difficulty: the same sentence twice with different emphasis; meaning
 * carried by word order, hedging degree and register rather than new words.
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
  qVm,
  qWrite,
  type BankEntry,
} from "./helpers";

export const bankC1A: BankEntry[] = [
  // --------------------------------------- CH-49 Advanced Grammatical Structures
  entry(
    49, 1, "inversion",
    qMcq(
      "Which sentence places the NEGATIVE idea first for emphasis (inversion)?",
      [
        ["a", "Not once did the manager apologise for the delay."],
        ["b", "The manager did not once apologise for the delay."],
        ["c", "The manager never apologised for the delay, not once."],
        ["d", "It is true that the manager never apologised."],
      ],
      "a",
      fbx(
        "Not once did the manager apologise",
        "Front a negative adverbial (not once, never, rarely, under no circumstances) and the subject-auxiliary order inverts: did the manager apologise.",
        {
          whyWrong: "(b) keeps normal order with merely emphatic did; (c) appends the negative as an afterthought; (d) states it flatly. Only (a) moves the negative to the front and inverts.",
          rule: ["Negative adverbial + inversion", "Not once did he… / Never had she… / Rarely do we…"],
          similar: ["Under no circumstances should you sign.", "Bajo ninguna circunstancia debe firmar."],
          revise: ["ch-49-l-01", "Inversion is the C1 word-order lesson.", "Inversion"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["inversion", "emphasis"] },
    ),
  ),
  entry(
    49, 2, "cleft sentences",
    qGid(
      "Label the highlighted structure in the sentence.",
      "It was the delay in permits, not the budget, that sank the project.",
      "It was the delay in permits, not the budget, that",
      "What is the highlighted structure doing?",
      "emphasis tools",
      [
        ["a", "a cleft — it splits the sentence to spotlight one cause"],
        ["b", "a passive construction hiding the doer"],
        ["c", "a relative clause adding detail about the project"],
        ["d", "an inversion for a negative adverbial"],
      ],
      "a",
      fbx(
        "an it-cleft for emphasis",
        "It was X that Y picks X out of the sentence and lights it. Here the writer is ruling the budget out and the permits in.",
        {
          whyWrong: "No doer is hidden (no passive participle); the that-clause is not adding description but receiving the emphasis. Clefts rearrange, not report.",
          rule: ["It-cleft = spotlight", "It was the rain that ruined it. / What ruined it was the rain."],
          similar: ["What we need is time, not money.", "Lo que necesitamos es tiempo, no dinero."],
          revise: ["ch-49-l-02", "Cleft Sentences and Emphasis teaches the spotlight.", "Cleft Sentences and Emphasis"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["clefts", "emphasis"] },
    ),
  ),
  entry(
    49, 3, "ellipsis and substitution",
    qCorr(
      "Complete the exchange using substitution (one …) or ellipsis — never repeating the full phrase.",
      "A: I think the morning slot works better. B: Yes, the morning one does — for the reasons we discussed.",
      ["Yes, the morning one does — for the reasons we discussed.", "Yes — the morning one does."],
      fbx(
        "the morning one does",
        "One substitutes for a repeated noun (slot); does substitutes for the verb phrase (works better). C1 conversation avoids repeating full phrases.",
        {
          whyWrong: "Repeating I think the morning slot works better in B's turn doubles the information the listener already holds. Substitution keeps the exchange light.",
          rule: ["Substitution toolkit", "one (noun), do/does (verb), so (clause)."],
          similar: ["I'll take the red one, if you take the small one.", "Yo me quedo el rojo, si tú te quedas el pequeño."],
          revise: ["ch-49-l-03", "Ellipsis and Substitution is the economy lesson.", "Ellipsis and Substitution"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["ellipsis", "substitution"] },
    ),
  ),
  entry(
    49, 4, "advanced clause patterns",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "Rarely does a first novel command this much attention, and never before have the reviews been so divided.",
      ["Rarely does a first novel command this much attention, and never before have the reviews been so divided."],
      fbx(
        "Rarely does… and never before have…",
        "Double inversion: two negative adverbials (rarely, never before) each trigger their own subject-auxiliary inversion in the two clauses.",
        {
          whyWrong: "Without the inversions (rarely a first novel commands…) the negatives sit inside the clause and the emphasis dies.",
          rule: ["Each negative adverbial inverts its own clause", "Rarely does X…; never before have Y…"],
          similar: ["Seldom have I read such a defence; not once did he falter.", "Rara vez he leído tal defensa; ni una vez titubeó."],
          revise: ["ch-49-l-04", "Advanced Clause Patterns collects the C1 shapes.", "Advanced Clause Patterns and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["dictation", "inversion"] },
    ),
  ),
  entry(
    49, 1, "inversion in reading",
    qRd(
      "Read the review and answer the question.",
      "A career, reassessed",
      "Not until the third volume did the biographer name her sources, and even then only in an appendix. Little did readers know that the letters had been sold to her by the subject's own estate. Only after the archive opened in 2020 was the sequence of payments reconstructable, and what emerged was a portrait at odds with the authorised one.",
      "Which inversion signals that readers were unaware of something important?",
      [
        ["a", "Little did readers know"],
        ["b", "Not until the third volume did the biographer name her sources"],
        ["c", "only in an appendix"],
        ["d", "what emerged was a portrait"],
      ],
      "a",
      fbx(
        "Little did readers know",
        "Little + inversion is the classic marker of hidden information. The other inversions (not until, only after) locate events in time instead.",
        {
          whyWrong: "(c) is a plain adverbial without a verb inversion; (d) is a what-cleft, emphasising the result. Each emphasiser has its own job.",
          rule: ["Emphasis inventory", "little (hidden), not until (time), only after (sequence), what-cleft (result)."],
          similar: ["Little did we suspect the truth.", "Poco sospechábamos la verdad."],
          revise: ["ch-49-l-04", "Advanced Clause Patterns reviews the inventory.", "Advanced Clause Patterns and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "inversion"] },
    ),
  ),
  entry(
    49, 4, "emphasis speaking",
    qSpeak(
      "C1 speaking challenge: the emphasis minute.",
      "Talk for one minute about a decision that went wrong, using three different emphasis tools: one negative inversion (Not once… / Little…), one it-cleft or what-cleft (It was X that…), and one substitution (the one / does).",
      ["Not once did we question the forecast.", "It was the deadline that sank us.", "The Lisbon one does — for the reasons we discussed."],
      ["did", "that", "one"],
      fbx(
        "An emphasised minute, for example: Little did we suspect the tender was flawed. Not once did the auditors flag the clause. And when it collapsed, what saved us was the fallback supplier — the Munich one, which had hedged its costs and, crucially, does so to this day.",
        "The machine checks that did (inversion), that (cleft) and one (substitution) appear. C1 emphasis is heard as control: the same facts, arranged so the listener cannot miss the point.",
        {
          whyWrong: "Stating the facts in neutral order loses the salience. Emphasis tools are how speakers direct attention without raising their voice.",
          rule: ["Three emphasis tools", "inversion, cleft, substitution."],
          similar: ["What changed everything was the second offer.", "Lo que lo cambió todo fue la segunda oferta."],
          revise: ["ch-49-l-02", "Cleft Sentences and Emphasis is the spotlight lesson.", "Cleft Sentences and Emphasis"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "emphasis"] },
    ),
  ),
  entry(
    49, 2, "cleft challenge",
    qSb(
      "Challenge: build the cleft sentence from the tiles. One tile is extra.",
      ["it", "was", "the", "delay", "in", "permits", "that", "sank", "the", "project", "which"],
      ["It was the delay in permits that sank the project."],
      fbx(
        "It was the delay in permits that sank the project.",
        "The it-cleft needs it, the spotlighted noun phrase, and that + the rest. The tile which is the trap: clefts take that (or who for people), not which.",
        {
          whyWrong: "It was X which sank… is not the standard cleft: which belongs to non-defining relatives, not to the cleft frame.",
          rule: ["It + was + spotlight + that", "It was the delay that sank it."],
          similar: ["It was the silence that undid them.", "Fue el silencio lo que los hundió."],
          revise: ["ch-49-l-02", "Cleft Sentences and Emphasis teaches the frame.", "Cleft Sentences and Emphasis"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["clefts", "sentence building"], hints: ["Start with It was…", "Spotlight one noun phrase.", "Close with that + the rest. One tile belongs to relatives, not clefts."] },
    ),
  ),

  // ---------------------------------------------- CH-50 Nuance, Hedging and Modality
  entry(
    50, 1, "the certainty ladder",
    qMatch(
      "Rank these markers by certainty: match each sentence with its degree.",
      [
        ["l1", "The fault lies with the sensor."],
        ["l2", "The fault would seem to lie with the sensor."],
        ["l3", "The fault might conceivably lie with the sensor."],
        ["l4", "The fault can't lie with the sensor."],
      ],
      [
        ["r1", "confident negative — ruled out"],
        ["r2", "bare assertion — full confidence"],
        ["r3", "distant, hedged possibility"],
        ["r4", "soft professional claim"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r4"],
        ["l3", "r3"],
        ["l4", "r1"],
      ],
      fbx(
        "assertion > would seem to > might conceivably > can't (negative)",
        "The certainty ladder runs from bare assertion (is) through softened claims (would seem to, might conceivably) to confident denial (can't).",
        {
          whyWrong: "Would seem to is the professional soft claim — stronger than might conceivably but weaker than assertion. The ladder is graded, not binary.",
          rule: ["Ladder rungs", "is > would seem to > may/might > might conceivably > can't."],
          similar: ["The delay would appear to be procedural.", "El retraso parecería ser de trámite."],
          revise: ["ch-50-l-01", "The Certainty Ladder grades every rung.", "The Certainty Ladder"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["hedging", "modality"], hints: ["Might conceivably is the weakest positive rung.", "Would seem to is professional hedging.", "Can't is confident denial."] },
    ),
  ),
  entry(
    50, 2, "academic and professional hedging",
    qCorr(
      "The claim overstates the evidence (one survey, twenty responses). Rewrite the sentence with appropriate hedging.",
      "Gamers hate slow servers.",
      ["Survey respondents appear to dislike slow servers.", "The evidence suggests that slow servers may reduce satisfaction.", "Respondents tended to report disliking slow servers."],
      fbx(
        "The evidence suggests that slow servers may reduce satisfaction.",
        "C1 hedging calibrates the claim to its evidence: appears to / may / tended to. Absolute verbs (hate, prove, always) belong to stronger data.",
        {
          whyWrong: "Hate is an absolute attitudinal verb; with n of 20 the claim outruns its evidence. Hedging is intellectual honesty, not weakness.",
          rule: ["Match claim strength to evidence strength", "appears to / tends to / may + the finding."],
          similar: ["The results point to a modest effect.", "Los resultados apuntan a un efecto modesto."],
          revise: ["ch-50-l-02", "Academic and Professional Hedging is the calibration lesson.", "Academic and Professional Hedging"],
        },
      ),
      { difficulty: "hard", skill: "writing", tags: ["hedging", "register"] },
    ),
  ),
  entry(
    50, 3, "stance and qualification",
    qGid(
      "Label the highlighted adverb's job in the sentence.",
      "Curiously, the same ministry that cut the budget now laments the shortfall.",
      "Curiously",
      "What is the highlighted word doing?",
      "stance markers",
      [
        ["a", "it signals the writer's ironic stance towards the ministry"],
        ["b", "it describes how the lament was expressed"],
        ["c", "it hedges the claim about the shortfall"],
        ["d", "it introduces a condition for the lament"],
      ],
      "a",
      fbx(
        "a stance adverb",
        "Comment adverbs (curiously, tellingly, predictably) carry the writer's attitude to the whole clause. Here curiously says: this contradiction is no accident.",
        {
          whyWrong: "It does not describe the manner of the lament (that would be tearfully), does not hedge, and sets no condition. It comments on the irony.",
          rule: ["Stance adverbs open the sentence", "Tellingly, … / Predictably, … / Curiously, …"],
          similar: ["Tellingly, the report never mentions costs.", "Significativamente, el informe nunca menciona costes."],
          revise: ["ch-50-l-03", "Stance and Qualification teaches comment adverbs.", "Stance and Qualification"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["stance", "adverbs"] },
    ),
  ),
  entry(
    50, 4, "degree of certainty",
    qLis(
      "Listen and answer: how certain is the speaker, on the ladder?",
      "The outage would seem to stem from the provider's side, though I wouldn't rule out a local routing issue.",
      "How certain is the speaker about the provider being at fault?",
      ["fairly confident but hedged", "confident but hedged", "she seems fairly confident", "he seems fairly confident"],
      fbx(
        "fairly confident but hedged",
        "Would seem to = professional confidence; wouldn't rule out = a hedge against the alternative. Two rungs in one sentence.",
        {
          whyWrong: "Bare assertion (the outage stems from) or full doubt (it might be anything) would be different rungs. The speaker holds a confident-but-hedged position.",
          rule: ["Hedge, then hedge the hedge", "X would seem to…, though I wouldn't rule out Y."],
          similar: ["The delay appears to be weather-related, though sabotage hasn't been excluded.", "El retraso parece deberse al clima, aunque no se descarta el sabotaje."],
          revise: ["ch-50-l-04", "Degree of Certainty is the ladder summary.", "Degree of Certainty and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["listening", "hedging"] },
    ),
  ),
  entry(
    50, 3, "stance in reading",
    qRd(
      "Read the commentary and answer the question.",
      "The memo, leakeaked",
      "Predictably, the ministry describes the memo as a routine exercise. Curiously, the same paragraph that calls it routine also instructs staff to avoid creating a paper trail. Tellingly, no date appears on the document; one might charitably attribute this to clerical oversight, were it not for the fact that every other page in the file is meticulously dated.",
      "Which stance adverb carries the strongest implicit accusation?",
      [
        ["a", "tellingly"],
        ["b", "predictably"],
        ["c", "curiously"],
        ["d", "charitably"],
      ],
      "a",
      fbx(
        "tellingly",
        "Tellingly says: this detail is the confession. The missing date is presented as the fact that gives the game away. Charitably is mock politeness, a weaker accusation; predictably and curiously are observations.",
        {
          whyWrong: "Each adverb has a different force. Predictably expects the behaviour; curiously marks surprise; charitably pretends generosity. Tellingly turns the detail into evidence.",
          rule: ["Stance adverbs are evidence markers", "Tellingly, X — X is the smoking gun."],
          similar: ["Tellingly, the clause was never sent to legal.", "Significativamente, la cláusula nunca llegó a asesoría legal."],
          revise: ["ch-50-l-03", "Stance and Qualification grades the adverbs.", "Stance and Qualification"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "stance"] },
    ),
  ),
  entry(
    50, 4, "hedging writing",
    qWrite(
      "C1 writing challenge: the calibrated paragraph.",
      "Write a five-sentence assessment of a claim you doubt, using the full ladder: one bare assertion of fact, one professional hedge (would seem to / appears to), one weak possibility (might conceivably), one stance adverb (curiously / tellingly), and one confident negative (cannot be).",
      65,
      ["would seem to", "appears to", "might conceivably", "tellingly", "curiously", "cannot be"],
      fbx(
        "A calibrated paragraph, for example: The trial data are published and peer-reviewed, which is a fact. The reported effect would seem to depend on the剔除 of two outliers — a point the paper never addresses. A coding error might conceivably explain the asymmetry, but curiously, the asymmetry always favours the sponsor's product. Tellingly, the replication file omits the raw logs. On the evidence published, the headline claim cannot be sustained as stated.",
        "The machine checks that at least one ladder marker appears (several are machine-checked) and that you reach 65 words. The human checks are that each sentence's strength matches its evidence — the whole point of C1 register.",
        {
          whyWrong: "The C1 failure is a flat register: every sentence asserted, or every sentence hedged. The ladder is what lets a reader trust the writer's strong claims.",
          rule: ["Ladder in every paragraph", "assert, hedge, doubt, accuse, deny — each at its own strength."],
          similar: ["The pattern appears deliberate.", "El patrón parece deliberado."],
          revise: ["ch-50-l-02", "Academic and Professional Hedging is the calibration lesson.", "Academic and Professional Hedging"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "hedging"], hints: ["Open with one undisputed fact.", "Move to a hedged reading of that fact.", "Close with a confident negative: cannot be."] },
    ),
  ),
  entry(
    50, 2, "hedging challenge",
    qSb(
      "Challenge: build the hedged claim from the tiles. One tile is extra.",
      ["the", "delay", "would", "seem", "to", "stem", "from", "the", "provider", "proves"],
      ["The delay would seem to stem from the provider."],
      fbx(
        "The delay would seem to stem from the provider.",
        "Would seem to is the professional middle rung. The tile proves is the trap: it claims the top of the ladder without the evidence to carry it.",
        {
          whyWrong: "The delay proves to stem… asserts certainty about an undiagnosed fault — exactly the overclaim C1 writing exists to avoid.",
          rule: ["Hedge unverified claims", "would seem to / appears to, until the evidence arrives."],
          similar: ["The fault would appear to be local.", "El fallo parecería ser local."],
          revise: ["ch-50-l-02", "Academic and Professional Hedging teaches the rung.", "Academic and Professional Hedging"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["hedging", "sentence building"], hints: ["This is an unverified diagnosis — which rung fits?", "Would seem to keeps the claim professional.", "One tile claims certainty you do not have."] },
    ),
  ),

  // ------------------------------------------------ CH-51 Rhetoric, Register and Style
  entry(
    51, 1, "register and formality",
    qMcq(
      "Which version shifts the same news into the most formal register?",
      [
        ["a", "We are pleased to announce the appointment of Dr Ifor ap Gwyn as Chief Examiner."],
        ["b", "Great news — Dr Ifor ap Gwyn is our new Chief Examiner!"],
        ["c", "Guess what? We got a new Chief Examiner, Dr Ifor ap Gwyn."],
        ["d", "Dr Ifor ap Gwyn: new Chief Examiner, just so you know."],
      ],
      "a",
      fbx(
        "the announcement version",
        "Formal register uses full names with titles, passive-friendly frames (are pleased to announce), and no chat particles. The others are celebration (b), gossip (c) and memo-casual (d).",
        {
          whyWrong: "Exclamation marks, guess what and just so you know belong to spoken and messaging registers. Register is choosing grammar for the occasion.",
          rule: ["Register ladder", "announcement > email > chat — pick the right rung for the reader."],
          similar: ["It has been decided that…", "Se ha decidido que…"],
          revise: ["ch-51-l-01", "Register and Formality grades the ladders.", "Register and Formality"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["register", "formality"] },
    ),
  ),
  entry(
    51, 2, "rhetorical devices",
    qGid(
      "Label the highlighted device in the sentence.",
      "We asked for examples; they gave us a slogan. We asked for numbers; they gave us a slogan.",
      "they gave us a slogan",
      "What device is at work here?",
      "rhetoric",
      [
        ["a", "anaphora — deliberate repetition that builds the accusation"],
        ["b", "a typo — accidental duplication"],
        ["c", "a passive construction"],
        ["d", "a mixed metaphor"],
      ],
      "a",
      fbx(
        "anaphora (repetition at clause beginnings)",
        "Repeating they gave us a slogan after each we asked turns the sentence into an indictment. Repetition here is a rhetorical choice, not a writing error.",
        {
          whyWrong: "The duplication is too pointed to be accidental; there is no passive and no metaphor. The structure IS the argument.",
          rule: ["Anaphora = political repetition", "Same shape, twice or more: I came; I saw; I conquered."],
          similar: ["We asked for a plan. We received a presentation.", "Pedimos un plan. Recibimos una presentación."],
          revise: ["ch-51-l-02", "Rhetorical Devices teaches the toolkit.", "Rhetorical Devices"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["rhetoric", "repetition"] },
    ),
  ),
  entry(
    51, 3, "tone and persuasion",
    qMatch(
      "Match each tone marker with the persuasion strategy.",
      [
        ["l1", "Let me be clear about one thing."],
        ["l2", "I may be wrong, and I often am."],
        ["l3", "Others will have to judge that."],
        ["l4", "Draw your own conclusions."],
      ],
      [
        ["r1", "invites the listener to do the arguing (empowerment)"],
        ["r2", "projects authority by pre-announcing firmness"],
        ["r3", "buys goodwill through mock humility"],
        ["r4", "declines to claim, which claims anyway"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r3"],
        ["l3", "r4"],
        ["l4", "r1"],
      ],
      fbx(
        "let me be clear = authority; I may be wrong = mock humility; others will judge = refusal that implies; draw your own conclusions = empowerment",
        "Persuasion lives in phrases that do the arguing by implication. C1 listeners hear the strategy under the sentence.",
        {
          whyWrong: "Each phrase pursues a different effect on the audience. Confusing mock humility with weakness misses the persuasion entirely.",
          rule: ["Tone = strategy", "Authority, humility, refusal, empowerment."],
          similar: ["Make of that what you will.", "Saque usted sus conclusiones."],
          revise: ["ch-51-l-03", "Tone and Persuasion decodes the strategies.", "Tone and Persuasion"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["rhetoric", "persuasion"], hints: ["One phrase builds authority; one builds sympathy.", "One declines to judge — and thereby judges.", "One hands the argument to the listener."] },
    ),
  ),
  entry(
    51, 3, "style in listening",
    qLis(
      "Listen and answer: which device does the speaker use to close?",
      "So here is where we stand: the trial worked, the budget held, and the regulator is satisfied. The trial worked, the budget held, and the regulator is satisfied — and still the board hesitates.",
      "Which device carries the close?",
      ["anaphora — repetition of the summary line", "repetition of the summary line", "anaphora repeating the three-part summary"],
      fbx(
        "anaphora — the summary line repeated",
        "The three-part list is stated, then repeated word for word before the pivot (and still…). Repetition builds the pressure that the hesitates releases.",
        {
          whyWrong: "No metaphor or question is involved; the power comes entirely from hearing the same clause twice.",
          rule: ["Repeat to escalate", "Say it; pause; say it again."],
          similar: ["We delivered. On time, we delivered. Under budget, we delivered.", "Cumplimos. A tiempo, cumplimos. Por debajo del presupuesto, cumplimos."],
          revise: ["ch-51-l-02", "Rhetorical Devices includes the escalation pattern.", "Rhetorical Devices"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["listening", "rhetoric"] },
    ),
  ),
  entry(
    51, 4, "stylistic choices in reading",
    qRd(
      "Read the two sentences and answer the question.",
      "Two openings",
      "A: The results are in, and they are mixed. B: The results are in; whether they are mixed depends on which of the two boards one answers to.",
      "What does version B add that A lacks?",
      [
        ["a", "a stake — it implies a conflict between boards before stating any finding"],
        ["b", "a hedge of the word mixed"],
        ["c", "a definition of the two boards"],
        ["d", "a passive construction"],
      ],
      "a",
      fbx(
        "it plants the conflict",
        "B's clause whether they are mixed depends on… turns a neutral summary into an implication: there are two audiences, and they will not agree. Style does the arguing.",
        {
          whyWrong: "Mixed is not hedged (it is relativised, which is stronger); no boards are defined; and no passive appears. B's move is to take a side by pretending not to.",
          rule: ["Relativise to implicate", "It depends on… is a claim wearing a hedge."],
          similar: ["Whether it is a failure depends on the shareholder.", "Si es un fracaso depende del accionista."],
          revise: ["ch-51-l-04", "Stylistic Choices teaches these moves.", "Stylistic Choices and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "reading", tags: ["reading", "style"] },
    ),
  ),
  entry(
    51, 4, "rhetoric writing",
    qWrite(
      "C1 writing challenge: the rhetorical close.",
      "Write a four-sentence persuasive close to an argument: use one anaphora (a repeated clause), one stance adverb (tellingly / predictably), and one empowerment hand-off (draw your own conclusions / make of that what you will).",
      55,
      ["tellingly", "predictably", "curiously", "draw your own conclusions", "make of that what you will"],
      fbx(
        "A close like: We asked for the numbers; we were sent a deck. We asked for the numbers again; we were invited to a workshop. Tellingly, the numbers exist — the regulator has them. Draw your own conclusions.",
        "The machine checks that a stance adverb or hand-off phrase appears (several are machine-checked) and that you reach 55 words. The human check is the repetition doing rhetorical work, not decoration.",
        {
          whyWrong: "Repetition without escalation is a stutter, and assertion without the hand-off forfeits the audience's complicity. Rhetoric is engineering, not ornament.",
          rule: ["Rhetorical close", "repeat, mark (tellingly), hand off."],
          similar: ["Make of that what you will.", "Saque usted sus conclusiones."],
          revise: ["ch-51-l-02", "Rhetorical Devices builds the toolkit.", "Rhetorical Devices"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "rhetoric"], hints: ["Open with a request that was refused — then repeat the shape.", "Mark the key fact with tellingly.", "Hand the verdict to the reader."] },
    ),
  ),

  // ------------------------------------------------ CH-52 Sophisticated Vocabulary
  entry(
    52, 1, "advanced collocations",
    qVm(
      "Match each adjective with its most natural noun partner.",
      [
        ["w1", "moot", "adjective"],
        ["w2", "telling", "adjective"],
        ["w3", "foregone", "adjective"],
        ["w4", "uphill", "adjective"],
      ],
      [
        ["m1", "point — one open to debate, now settled"],
        ["m2", "detail — one that reveals the truth"],
        ["m3", "conclusion — an inevitable result"],
        ["m4", "battle — a struggle that starts hard"],
      ],
      [
        ["w1", "m1"],
        ["w2", "m2"],
        ["w3", "m3"],
        ["w4", "m4"],
      ],
      fbx(
        "a moot point; a telling detail; a foregone conclusion",
        "Sophisticated collocations carry precision: moot (debatable), telling (revelatory), foregone (predetermined), uphill (hard from the start). The pairs — not the adjectives alone — are the vocabulary.",
        {
          whyWrong: "A telling conclusion is possible as a string, but the idiomatic pairs are fixed: moot goes with point, foregone with conclusion, uphill with battle.",
          rule: ["Learn the pair, not the word", "moot point, telling detail, foregone conclusion."],
          similar: ["The verdict was a foregone conclusion.", "El veredicto era una conclusión anticipada."],
          revise: ["ch-52-l-01", "Advanced Collocations teaches the pairs.", "Advanced Collocations"],
        },
      ),
      { difficulty: "hard", skill: "vocabulary", tags: ["collocations", "precision"], hints: ["Foregone pairs with conclusion.", "Moot pairs with point.", "Telling pairs with detail."] },
    ),
  ),
  entry(
    52, 2, "nuanced synonyms",
    qMcq(
      "The report admits the error but presents it as minor. Which verb does this best?",
      [
        ["a", "The report glosses over the error."],
        ["b", "The report ignores the error."],
        ["c", "The report denies the error."],
        ["d", "The report magnifies the error."],
      ],
      "a",
      fbx(
        "glosses over",
        "Gloss over = mention lightly to make it disappear — exactly admitting-but-minimising. Ignore and deny remove the admission; magnify does the opposite job.",
        {
          whyWrong: "Deny contradicts the facts; ignore means no mention at all; magnify exaggerates. Nuanced synonyms differ by what they concede.",
          rule: ["Concession spectrum", "gloss over > downplay > admit > magnify."],
          similar: ["The review glossed over the costs.", "La reseña pasó por alto los costes."],
          revise: ["ch-52-l-02", "Nuanced Synonyms grades the spectrum.", "Nuanced Synonyms"],
        },
      ),
      { difficulty: "hard", skill: "vocabulary", tags: ["synonyms", "nuance"] },
    ),
  ),
  entry(
    52, 3, "idiomatic sophistication",
    qMatch(
      "Match each sophisticated idiom with its precise meaning.",
      [
        ["l1", "a Pyrrhic victory"],
        ["l2", "a Trojan horse"],
        ["l3", "the elephant in the room"],
        ["l4", "a level playing field"],
      ],
      [
        ["r1", "fair conditions for all competitors"],
        ["r2", "the issue everyone avoids mentioning"],
        ["r3", "a win whose cost cancels its value"],
        ["r4", "a gift that conceals a threat"],
      ],
      [
        ["l1", "r3"],
        ["l2", "r4"],
        ["l3", "r2"],
        ["l4", "r1"],
      ],
      fbx(
        "Pyrrhic victory = won at ruinous cost; Trojan horse = treacherous gift; elephant in the room = the unmentionable; level playing field = fair conditions",
        "C1 idioms carry arguments inside images. Knowing the image's source (Pyrrhus, Troy) makes the meaning impossible to forget.",
        {
          whyWrong: "Pyrrhic is about cost, Trojan about hidden danger, the elephant about silence. Swapping them reverses the argument.",
          rule: ["Idioms carry arguments", "Choose the image that matches the logic."],
          similar: ["The settlement was a Pyrrhic victory.", "El acuerdo fue una victoria pírrica."],
          revise: ["ch-52-l-03", "Idiomatic Sophistication teaches the set.", "Idiomatic Sophistication"],
        },
      ),
      { difficulty: "challenge", skill: "vocabulary", tags: ["idioms", "sophistication"], hints: ["Pyrrhic always involves ruinous cost.", "The Trojan horse is about hidden intent.", "The elephant is about silence, not size."] },
    ),
  ),
  entry(
    52, 4, "precision and context",
    qGid(
      "Label the highlighted word's precision in the sentence.",
      "The minister's reply was economical with the truth.",
      "economical with the truth",
      "What is the highlighted phrase doing?",
      "precision",
      [
        ["a", "a euphemism — it accuses the minister of lying without using the word"],
        ["b", "a compliment about the reply's brevity"],
        ["c", "a hedge about the minister's honesty"],
        ["d", "a metaphor about budget discipline"],
      ],
      "a",
      fbx(
        "a euphemism for lying",
        "Economical with the truth is the established ironic euphemism: it says lied while remaining quotable in print. Precision here is choosing how hard the word hits.",
        {
          whyWrong: "It is not brevity praise (economical alone might be), not a hedge, and not about money. The phrase is a calibrated accusation.",
          rule: ["Euphemism = calibrated force", "Choose the word that lands at the intended strength."],
          similar: ["The report was economical with the figures.", "El informe fue parco con las cifras."],
          revise: ["ch-52-l-04", "Precision and Context is the force-calibration lesson.", "Precision and Context and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "vocabulary", tags: ["euphemism", "precision"] },
    ),
  ),
  entry(
    52, 2, "precision in listening",
    qLis(
      "Listen and answer: what does the speaker accuse the report of, in one phrase?",
      "The methodology section is sound; the same cannot be said for the way the findings are presented, which can only be described as selective.",
      "What is the presentation of findings called?",
      ["selective", "selective presentation of findings", "the findings are presented selectively"],
      fbx(
        "selective",
        "Selective is the precision word: not dishonest, not incomplete — curated. The concession (methodology sound) makes the accusation land harder.",
        {
          whyWrong: "Calling it dishonest would overclaim; calling it fine would concede everything. Selective is the word calibrated to the evidence.",
          rule: ["Concede, then calibrate", "Sound on method; selective on presentation."],
          similar: ["The account is, at best, partial.", "El relato es, como mucho, parcial."],
          revise: ["ch-52-l-02", "Nuanced Synonyms is the calibration lesson.", "Nuanced Synonyms"],
        },
      ),
      { difficulty: "challenge", skill: "listening", tags: ["listening", "precision"] },
    ),
  ),
  entry(
    52, 4, "sophistication writing",
    qWrite(
      "C1 writing challenge: the precise paragraph.",
      "Write a five-sentence assessment of a public statement you distrust. Use one sophisticated collocation (telling detail / moot point / foregone conclusion), one nuanced verb from the concession spectrum (glossed over / downplayed / magnified), and one precise accusation word (selective / economical with the truth).",
      65,
      ["telling", "moot", "foregone", "glossed over", "downplayed", "selective", "economical with the truth"],
      fbx(
        "A paragraph like: The statement's methodology is, to its credit, published in full. What is glossed over is the sequence of dates — a telling detail, since the policy was announced after the results were known. Whether that ordering was deliberate is, at this distance, a moot point. What is not moot is that the summary is selective: of forty sites, four are named. The press release was, in the kindest reading, economical with the truth.",
        "The machine checks that at least one of the chapter's precision markers appears (several are machine-checked) and that you reach 65 words. The human check is calibration: each accusation must be exactly as strong as its evidence.",
        {
          whyWrong: "The C1 failure is binary language: lied / honest. Precision words let the reader trust the strength of every claim you make.",
          rule: ["Precision = trust", "Calibrated words are the currency of C1."],
          similar: ["The account was economical with the truth.", "El relato fue parco con la verdad."],
          revise: ["ch-52-l-04", "Precision and Context is the calibration lesson.", "Precision and Context and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "precision"], hints: ["Open by conceding one true strength.", "Introduce the concealed detail with telling.", "Close with a calibrated accusation word, not an insult."] },
    ),
  ),
];
