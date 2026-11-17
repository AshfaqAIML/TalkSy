/**
 * PROMPT 36 practice bank — B1 chapters 34–38 (part B of the B1 set).
 *
 * Reported speech (34), relative clauses (35), gerunds and infinitives (36),
 * complex sentences and cohesion (37), communication and structured writing (38).
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

export const bankB1B: BankEntry[] = [
  // ------------------------------------------------ CH-34 Direct and Reported Speech
  entry(
    34, 1, "backshift",
    qCorr(
      "Report this sentence with backshift.",
      "'I am tired,' she said.",
      ["She said she was tired."],
      fbx(
        "She said she was tired.",
        "Reporting shifts the tense one step back: am → was. The pronoun changes too (I → she).",
        {
          whyWrong: "She said she is tired keeps the direct present — after said, the reported clause backshifts.",
          rule: ["Backshift: present → past", "say am → said was; say works → said worked."],
          similar: ["'I will help,' he said. → He said he would help.", "\"Ayudaré\", dijo. → Dijo que ayudaría."],
          revise: ["ch-34-l-01", "Direct Speech and Backshift teaches the shift table.", "Direct Speech and Backshift"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["reported speech", "backshift"] },
    ),
  ),
  entry(
    34, 2, "pronouns and time words",
    qGid(
      "Label the change in the reported sentence.",
      "Original: 'I saw you here yesterday.' Report: She said she had seen me there the day before.",
      "there the day before",
      "What do the highlighted words show?",
      "reported speech",
      [
        ["a", "place and time words shift with the reporter's viewpoint"],
        ["b", "they are mistakes — yesterday must stay yesterday"],
        ["c", "they mark the past perfect"],
        ["d", "they are polite softeners"],
      ],
      "a",
      fbx(
        "place and time shift too",
        "Reporting re-anchors the scene: here → there, yesterday → the day before. The reporter speaks from a different time and place than the speaker.",
        {
          whyWrong: "Keeping yesterday would place the event on the literal calendar day of the report, which may be another day entirely. The shifted words follow the reporter's now.",
          rule: ["The reporter's viewpoint wins", "here→there, this→that, now→then, yesterday→the day before."],
          similar: ["'I'll call you tomorrow.' → She said she would call me the next day.", "\"Te llamo mañana.\" → Dijo que me llamaría al día siguiente."],
          revise: ["ch-34-l-02", "Pronouns, Time and Reporting Verbs covers the shifts.", "Pronouns, Time and Reporting Verbs"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["reported speech", "time words"] },
    ),
  ),
  entry(
    34, 3, "reported questions",
    qCorr(
      "Report this question.",
      "'Where do you live?' he asked.",
      ["He asked where I lived."],
      fbx(
        "He asked where I lived.",
        "Reported questions use statement order (no do) and end with a full stop: where I lived.",
        {
          whyWrong: "He asked where did I live keeps the direct question inversion — inside a report the subject comes before the verb.",
          rule: ["Reported question = statement order", "She asked what time it was."],
          similar: ["They asked how old I was.", "Me preguntaron qué edad tenía."],
          revise: ["ch-34-l-03", "Reported Questions and Requests teaches the order change.", "Reported Questions and Requests"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["reported speech", "questions"] },
    ),
  ),
  entry(
    34, 2, "reporting verbs",
    qMatch(
      "Match each report with the strongest reporting verb.",
      [
        ["l1", "'Please lend me your notes.'"],
        ["l2", "'Don't touch the wire!'"],
        ["l3", "'I'm sorry I shouted.'"],
        ["l4", "'Yes, it's true — I broke it.'"],
      ],
      [
        ["r1", "admitted"],
        ["r2", "offered to / asked to"],
        ["r3", "warned them not to"],
        ["r4", "apologised for"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r3"],
        ["l3", "r4"],
        ["l4", "r1"],
      ],
      fbx(
        "lend → asked to; don't touch → warned not to; sorry → apologised for; yes I broke it → admitted",
        "Reporting verbs carry the speech act: requests, warnings, apologies and admissions. Choosing the verb is choosing the meaning.",
        {
          whyWrong: "Said and told fit everything but say nothing. The specific verbs are what make reported English natural at B1+.",
          rule: ["Match the verb to the act", "warn, offer, admit, apologise, promise, suggest."],
          similar: ["She apologised for being late.", "Se disculpó por llegar tarde."],
          revise: ["ch-34-l-02", "Pronouns, Time and Reporting Verbs includes the verb set.", "Pronouns, Time and Reporting Verbs"],
        },
      ),
      { difficulty: "hard", skill: "vocabulary", tags: ["reported speech", "reporting verbs"] },
    ),
  ),
  entry(
    34, 3, "reported requests",
    qDict(
      "Listen and type the reported request exactly as you hear it.",
      "She asked me not to leave the door open.",
      ["She asked me not to leave the door open."],
      fbx(
        "She asked me not to leave the door open.",
        "Reported negative requests put not before the to-infinitive: asked me not to leave.",
        {
          whyWrong: "Asked me to not leave splits the infinitive marker oddly, and don't leave is direct speech. The report shape is not to + verb.",
          rule: ["ask + person + not to + verb", "They told us not to wait."],
          similar: ["He warned her not to sign it.", "Le advirtió que no lo firmara."],
          revise: ["ch-34-l-03", "Reported Questions and Requests covers the shape.", "Reported Questions and Requests"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["dictation", "reported speech"] },
    ),
  ),
  entry(
    34, 4, "reporting in reading",
    qRd(
      "Read the message and answer the question.",
      "What the office said",
      "This morning the manager asked whether we had finished the inventory, and she told us not to send it by email. She explained that the system would be down all afternoon, and she suggested bringing the printout to the Monday meeting instead. Finally, she promised that the overtime would be paid by Friday.",
      "What did the manager suggest?",
      [
        ["a", "bringing the printout to the Monday meeting"],
        ["b", "sending the inventory by email"],
        ["c", "finishing the inventory that morning"],
        ["d", "paying the overtime by Friday"],
      ],
      "a",
      fbx(
        "bringing the printout on Monday",
        "Suggest + -ing reports the recommendation. Each reporting verb in the paragraph carries one instruction — find suggest, then read its clause.",
        {
          whyWrong: "The email was what she told them NOT to do; the overtime is a promise (would be paid); the inventory question opened the message.",
          rule: ["suggest + gerund", "She suggested waiting. (Never: suggested to wait.)"],
          similar: ["He suggested taking the earlier train.", "Sugirió coger el tren anterior."],
          revise: ["ch-34-l-04", "Reporting in Real Life practises these exchanges.", "Reporting in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "reported speech"] },
    ),
  ),
  entry(
    34, 4, "reporting speaking",
    qSpeak(
      "Speaking challenge: the messenger.",
      "Someone tells you three things: 'I'm moving to Lisbon in June'; 'Can you water my plants?'; 'Sorry about the noise last night.' Pass the three messages on to a third person, reported.",
      ["She said she was moving to Lisbon in June.", "She asked me to water her plants.", "She apologised for the noise."],
      ["asked", "apologised", "said"],
      fbx(
        "A spoken report, for example: Dara says she's moving to Lisbon in June — she asked me to water her plants, and she apologised for the noise last night.",
        "The machine checks that asked, apologised and said appear — the three reporting verbs for request, apology and statement. Messenger practice is how reported speech becomes automatic.",
        {
          whyWrong: "Repeating the direct words ('Can you water my plants?') is quoting, not reporting. The verbs plus the shifts are the report.",
          rule: ["Statement → said; request → asked to; apology → apologised for", "Three acts, three verbs."],
          similar: ["He told me he had missed the bus.", "Me dijo que había perdido el autobús."],
          revise: ["ch-34-l-04", "Reporting in Real Life rehearses the messenger role.", "Reporting in Real Life and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "reported speech"], hints: ["Statements start with she said that…", "Requests become asked me to…", "Apologies become apologised for + -ing."] },
    ),
  ),
  entry(
    34, 1, "backshift challenge",
    qSb(
      "Challenge: build the reported sentence from the tiles. One tile is extra.",
      ["she", "said", "she", "was", "working", "that", "day", "is", "on", "the", "report"],
      ["She said she was working that day on the report."],
      fbx(
        "She said she was working that day on the report.",
        "Backshift: am → was, today → that day. The tile is is the trap — the direct present cannot survive inside a report after said.",
        {
          whyWrong: "She said she is working reports the present as if nothing changed; the report is anchored to a past moment, so the tense and time word both shift.",
          rule: ["said + past + shifted time words", "that day, the next day, the day before."],
          similar: ["He said he was leaving the next morning.", "Dijo que salía a la mañana siguiente."],
          revise: ["ch-34-l-01", "Direct Speech and Backshift is the shift table.", "Direct Speech and Backshift"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["reported speech", "sentence building"], hints: ["The report is anchored in the past — which tense?", "Today becomes a shifted time word.", "One tile is the direct-speech present — leave it out."] },
    ),
  ),

  // -------------------------------------------------------- CH-35 Relative Clauses
  entry(
    35, 1, "who, which and that",
    qFill(
      "Complete the sentence with the best relative pronoun.",
      "The engineer ___ designed the bridge also planned the tunnel.",
      ["who", "that"],
      fbx(
        "who (or that)",
        "People take who (that also works in defining clauses). Which is for things only.",
        {
          whyWrong: "Which cannot point at a person in standard English — the engineer is a person, so who/that.",
          rule: ["who → people; which → things; that → either (defining)", "The man who called; the book which/that sold out."],
          similar: ["The nurse who helped us was very kind.", "La enfermera que nos ayudó fue muy amable."],
          revise: ["ch-35-l-01", "Who, Which and That teaches the split.", "Who, Which and That"],
        },
      ),
      { difficulty: "easy", skill: "grammar", tags: ["relative clauses", "pronouns"] },
    ),
  ),
  entry(
    35, 2, "whose and where",
    qGid(
      "Label the highlighted word in the sentence.",
      "We stayed at the farmhouse whose walls were three feet thick.",
      "whose",
      "What is the job of the highlighted word?",
      "relative pronouns",
      [
        ["a", "possession — the walls belong to the farmhouse"],
        ["b", "place — it locates the farmhouse"],
        ["c", "time — it says when they stayed"],
        ["d", "choice between two farms"],
      ],
      "a",
      fbx(
        "whose = possession",
        "Whose links a thing to its parts or owner: the farmhouse and its walls. It works for people and for things.",
        {
          whyWrong: "Where would introduce a place clause (the village where we met); whose is possessive.",
          rule: ["whose = of whom / of which", "The boy whose bike was stolen; a house whose roof leaks."],
          similar: ["That's the family whose dog we found.", "Esa es la familia cuyo perro encontramos."],
          revise: ["ch-35-l-02", "Whose and Where covers both.", "Whose and Where"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["relative clauses", "whose"] },
    ),
  ),
  entry(
    35, 3, "defining vs non-defining",
    qCorr(
      "Punctuate and correct this sentence about one specific city (non-defining clause).",
      "Lisbon that is on the Atlantic coast has seven hills.",
      ["Lisbon, which is on the Atlantic coast, has seven hills.", "Lisbon, that is on the Atlantic coast, has seven hills."],
      fbx(
        "Lisbon, which is on the Atlantic coast, has seven hills.",
        "Non-defining clauses (extra information about an already-named thing) take commas and WHICH — never that.",
        {
          whyWrong: "That without commas marks a defining clause, which would imply there are several Lisbons and this one is on the coast. A named city needs the non-defining shape.",
          rule: ["Commas + which for extra info; that for narrowing down", "My brother, who lives in Rome, called. / The brother who lives in Rome called."],
          similar: ["My teacher, who is from Peru, speaks five languages.", "Mi profesora, que es de Perú, habla cinco idiomas."],
          revise: ["ch-35-l-03", "Defining vs Non-Defining teaches the comma rule.", "Defining vs Non-Defining"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["relative clauses", "punctuation"] },
    ),
  ),
  entry(
    35, 4, "omitting pronouns",
    qMcq(
      "In which sentence can the relative pronoun be left out?",
      [
        ["a", "The film we watched last night was terrible."],
        ["b", "The film, we watched last night, was terrible."],
        ["c", "The film that it was terrible lasted two hours."],
        ["d", "The film was terrible we watched last night."],
      ],
      "a",
      fbx("The film we watched last night was terrible.", "When the relative pronoun is the OBJECT of the clause (we watched the film), it can vanish: the film we watched.", {
        whyWrong: "Option (b) leaves comma fragments, (c) doubles the subject with it, and (d) tangles two clauses without a link. Only (a) is a clean defining clause with the object omitted.",
        rule: ["Object pronouns can disappear", "The book (that) I read; the people (that) we met."],
        similar: ["Everything he said was true.", "Todo lo que dijo era verdad."],
        revise: ["ch-35-l-04", "Omitting Pronouns teaches the object rule.", "Omitting Pronouns and Chapter Review"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["relative clauses", "omission"] },
    ),
  ),
  entry(
    35, 1, "relative clauses in reading",
    qRd(
      "Read the description and answer the question.",
      "The workshop",
      "The workshop, which takes place in the old barn, is run by two carpenters who trained in Kyoto. The tools that belonged to the previous owner hang on the far wall, and the bench where the joinery happens sits by the window. Students whose projects need thick timber should book the morning slot.",
      "Which part of the text contains a NON-defining clause (extra information between commas)?",
      [
        ["a", "which takes place in the old barn"],
        ["b", "who trained in Kyoto"],
        ["c", "that belonged to the previous owner"],
        ["d", "where the joinery happens"],
      ],
      "a",
      fbx(
        "which takes place in the old barn",
        "The workshop is already identified — the clause only adds detail, so it sits between commas with which.",
        {
          whyWrong: "The other three are defining: they narrow down which carpenters, which tools and which bench. Defining clauses never take commas.",
          rule: ["Extra info = commas + which; narrowing = no commas", "Paris, which I love, is crowded. / The book that I love is lost."],
          similar: ["My aunt, who is 90, still cycles.", "Mi tía, que tiene 90 años, sigue en bici."],
          revise: ["ch-35-l-03", "Defining vs Non-Defining is the comma lesson.", "Defining vs Non-Defining"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "relative clauses"] },
    ),
  ),
  entry(
    35, 2, "relative listening",
    qLis(
      "Listen and answer: whose phone rang?",
      "The meeting was going well until the participant whose phone rang had to step outside, and the manager, who hates interruptions, restarted her slides.",
      "Whose phone rang?",
      ["the participant's", "the participant", "the participant who had to step outside", "the participant outside"],
      fbx(
        "the participant's phone",
        "Whose links the phone to its owner: the participant whose phone rang. The manager clause is extra information between commas.",
        {
          whyWrong: "The manager hates interruptions — she did not own the ringing phone. Whose pins the sound to the participant.",
          rule: ["whose + noun = the owner", "The student whose essay won…"],
          similar: ["The neighbour whose car was hit called the police.", "El vecino cuyo coche fue golpeado llamó a la policía."],
          revise: ["ch-35-l-02", "Whose and Where teaches the possessive link.", "Whose and Where"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "relative clauses"] },
    ),
  ),
  entry(
    35, 4, "clause writing",
    qWrite(
      "Writing challenge: combine with relative clauses.",
      "Write four sentences about people and things you know, each using a different relative tool: one who, one whose, one where, and one non-defining clause with commas and which.",
      50,
      ["who", "whose"],
      fbx(
        "Sentences like: My cousin who lives in Oslo is a nurse. The friend whose wedding I missed has forgiven me. The café where we first met has closed. My old bike, which I sold last year, is back on sale.",
        "The machine checks that who and whose appear (the task asks for four tools; two are machine-checked) and that you reach 50 words. The craft is choosing defining or non-defining correctly — extra information gets commas.",
        {
          whyWrong: "The standard slip is that without commas around extra information, which accidentally narrows the noun as if there were several of them.",
          rule: ["Four relative tools", "who/that (people), whose (possession), where (place), which + commas (extra info)."],
          similar: ["The house where I grew up is gone.", "La casa donde crecí ya no existe."],
          revise: ["ch-35-l-04", "Omitting Pronouns reviews the family together.", "Omitting Pronouns and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "relative clauses"], hints: ["Start with a person you know + who.", "Then something owned: whose.", "Add a place: where. Finish with extra info between commas: which."] },
    ),
  ),
  entry(
    35, 3, "relative challenge",
    qSb(
      "Challenge: build the non-defining sentence from the tiles. One tile is extra.",
      ["my", "brother", "who", "lives", "in", "oslo", "is", "a", "nurse", "that"],
      ["My brother, who lives in Oslo, is a nurse."],
      fbx(
        "My brother, who lives in Oslo, is a nurse.",
        "One brother already identified by name — the clause only adds detail, so commas + who. The tile that is the trap: that never introduces non-defining clauses.",
        {
          whyWrong: "My brother that lives in Oslo would imply several brothers, narrowing to the Oslo one. With a unique brother the commas are required.",
          rule: ["Non-defining = commas, never that", "My mother, who is 70, walks daily."],
          similar: ["Anna, who speaks Arabic, is translating.", "Anna, que habla árabe, está traduciendo."],
          revise: ["ch-35-l-03", "Defining vs Non-Defining teaches the that-ban.", "Defining vs Non-Defining"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["relative clauses", "sentence building"], hints: ["How many brothers does the writer have? One — so what kind of clause?", "Extra information goes between commas.", "One tile is banned from non-defining clauses — leave it out."] },
    ),
  ),

  // ------------------------------------------------ CH-36 Gerunds and Infinitives
  entry(
    36, 1, "gerunds",
    qFill(
      "Complete the sentence with the best form.",
      "She suggested ___ the meeting until Monday.",
      ["postponing"],
      fbx(
        "postponing",
        "After suggest we use the gerund (-ing). A small set of verbs takes gerunds directly: suggest, enjoy, avoid, mind.",
        {
          whyWrong: "Suggested to postpone is a very common slip — suggest belongs to the gerund group.",
          rule: ["suggest/enjoy/avoid + -ing", "I enjoy reading. He avoided answering."],
          similar: ["Would you mind closing the window?", "¿Te importaría cerrar la ventana?"],
          revise: ["ch-36-l-01", "Gerunds starts the pattern list.", "Gerunds"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["gerunds", "verb patterns"] },
    ),
  ),
  entry(
    36, 2, "to-infinitives",
    qCorr(
      "One pattern is wrong. Write the sentence correctly.",
      "We decided waiting for the next bus.",
      ["We decided to wait for the next bus."],
      fbx(
        "We decided to wait for the next bus.",
        "Decide belongs to the to-infinitive group: decided to wait. The gerund after decide is the classic reversal error.",
        {
          whyWrong: "Decided waiting swaps the two groups. Decide, hope, agree, promise all take to + verb.",
          rule: ["decide/hope/agree/promise + to-verb", "They agreed to help."],
          similar: ["She promised to call me back.", "Prometió devolverme la llamada."],
          revise: ["ch-36-l-02", "To-Infinitives teaches the second group.", "To-Infinitives"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["infinitives", "verb patterns"] },
    ),
  ),
  entry(
    36, 3, "meaning pairs",
    qMcq(
      "Which sentence means the action is FINISHED (already done)?",
      [
        ["a", "I remembered to lock the door."],
        ["b", "I remember locking the door."],
        ["c", "I remembered locking the door last night."],
        ["d", "Both a and b mean the same."],
      ],
      "b",
      fbx("I remember locking the door — the locking is done and lives in memory.", "Remember + gerund = memory of a past action. Remember + to-infinitive = not forgetting a task (then doing it).", {
        whyWrong: "Remembered to lock means I did not forget my duty to lock it (and then did). The gerund version looks back at the completed act.",
        rule: ["Memory pairs", "remember doing (past act) vs remember to do (future duty). Same split for stop, forget, try."],
        similar: ["I'll never forget meeting her.", "Nunca olvidaré conocerla."],
        revise: ["ch-36-l-03", "Bare Infinitives and Meaning Pairs teaches the change-of-meaning verbs.", "Bare Infinitives and Meaning Pairs"],
      }),
      { difficulty: "hard", skill: "grammar", tags: ["verb patterns", "meaning pairs"] },
    ),
  ),
  entry(
    36, 1, "verb patterns",
    qMatch(
      "Match each verb with the pattern it takes.",
      [
        ["l1", "enjoy"],
        ["l2", "hope"],
        ["l3", "avoid"],
        ["l4", "would like"],
      ],
      [
        ["r1", "to + verb (to-infinitive)"],
        ["r2", "verb-ing (gerund)"],
        ["r3", "verb-ing (gerund)"],
        ["r4", "to + verb (to-infinitive)"],
      ],
      [
        ["l1", "r2"],
        ["l2", "r1"],
        ["l3", "r3"],
        ["l4", "r4"],
      ],
      fbx(
        "enjoy + -ing; hope + to; avoid + -ing; would like + to",
        "Verb patterns are arbitrary facts per verb — but they are stable facts. Learn each verb with its pattern, never the translation.",
        {
          whyWrong: "Hope + -ing and enjoy + to are the two most frequent cross-overs. The pattern belongs to the verb, not the meaning.",
          rule: ["Pattern is part of the verb", "Enjoy reading; hope to read."],
          similar: ["I'd like to book a table for two.", "Querría reservar una mesa para dos."],
          revise: ["ch-36-l-04", "Verb Patterns in Use groups the families.", "Verb Patterns in Use and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["verb patterns", "gerunds"] },
    ),
  ),
  entry(
    36, 3, "patterns in listening",
    qLis(
      "Listen and answer: what did the speaker stop doing?",
      "I stopped drinking coffee last year, but I still can't stop thinking about it every morning.",
      "What did the speaker stop doing last year?",
      ["drinking coffee", "they stopped drinking coffee", "he stopped drinking coffee", "she stopped drinking coffee"],
      fbx(
        "drinking coffee",
        "Stop + gerund = quit the activity. Stop + to-infinitive would mean pausing IN ORDER to do something else — a different meaning entirely.",
        {
          whyWrong: "The second half (can't stop thinking) shows the gerund again: thinking about coffee continues. Stop thinking = quit thinking.",
          rule: ["stop + -ing = quit; stop to + verb = pause for", "I stopped smoking. I stopped to smoke (a break)."],
          similar: ["On the way home we stopped to buy bread.", "De camino a casa paramos para comprar pan."],
          revise: ["ch-36-l-03", "Bare Infinitives and Meaning Pairs covers stop/remember/try.", "Bare Infinitives and Meaning Pairs"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["listening", "meaning pairs"] },
    ),
  ),
  entry(
    36, 4, "patterns in reading",
    qRd(
      "Read the note and answer the question.",
      "Flatmate note",
      "Hi — I enjoy cooking for both of us, so don't worry about dinner. I remembered to buy flour on the way home, but I avoided opening the cupboard because I'm trying not to disturb the mouse that we've been trying to catch since Tuesday. If you see it, please don't scream — just text me, and remember closing the door quietly is the best policy.",
      "Which action is described as already done (a memory of a completed act)?",
      [
        ["a", "I avoided opening the cupboard."],
        ["b", "I remembered to buy flour."],
        ["c", "remember closing the door quietly"],
        ["d", "I enjoy cooking for both of us."],
      ],
      "c",
      fbx(
        "remember closing the door quietly (a completed act kept in memory)",
        "Remember + gerund points back at a finished action. Remembered to buy is a duty performed; avoided opening means the opening never happened; enjoy cooking is general.",
        {
          whyWrong: "Avoided opening means the cupboard stayed shut — nothing was done. The only completed-and-remembered act is the door closing softly.",
          rule: ["The gerund looks back", "Avoid + -ing = did NOT do. Remember + -ing = did do, in the past."],
          similar: ["I regret saying that now.", "Ahora me arrepiento de haberlo dicho."],
          revise: ["ch-36-l-03", "Bare Infinitives and Meaning Pairs is the meaning-shift lesson.", "Bare Infinitives and Meaning Pairs"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "verb patterns"] },
    ),
  ),
  entry(
    36, 4, "patterns writing",
    qWrite(
      "Writing challenge: patterns diary.",
      "Write four sentences about your habits using four different verb patterns: one with enjoy + -ing, one with decide + to, one with avoid + -ing, and one with remember + -ing (a past memory).",
      45,
      ["enjoy", "avoid"],
      fbx(
        "Sentences like: I enjoy walking at night. Last month I decided to join the library. I avoid checking my phone before breakfast. I still remember falling into the pond at primary school.",
        "The machine checks that enjoy and avoid appear (with their gerunds) and that you reach 45 words. The craft is that each verb keeps its own pattern — translating from your first language is what causes the slips.",
        {
          whyWrong: "The classic error is distributing one pattern to all verbs (enjoy to walk, avoid to check). Each verb owns its pattern.",
          rule: ["Verbs own their patterns", "enjoy -ing, decide to, avoid -ing, remember -ing (memory)."],
          similar: ["I can't afford to buy a new one.", "No puedo permitirme comprar uno nuevo."],
          revise: ["ch-36-l-04", "Verb Patterns in Use groups them by family.", "Verb Patterns in Use and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "verb patterns"], hints: ["Start with something you enjoy — remember the -ing.", "Then a decision: decided to …", "Then something you avoid — again -ing. Finish with an old memory: remember -ing."] },
    ),
  ),
  entry(
    36, 3, "pattern challenge",
    qSb(
      "Challenge: build the sentence from the tiles. One tile is extra.",
      ["she", "suggested", "postponing", "the", "meeting", "until", "monday", "to"],
      ["She suggested postponing the meeting until Monday."],
      fbx(
        "She suggested postponing the meeting until Monday.",
        "Suggest takes the gerund. The tile to is the trap — it belongs to the decide/hope family, not to suggest.",
        {
          whyWrong: "Suggested to postpone is one of the most frequent B1 errors precisely because suggest feels like a planning verb.",
          rule: ["suggest + -ing, always", "He suggested leaving early."],
          similar: ["They suggested starting without him.", "Sugerieron empezar sin él."],
          revise: ["ch-36-l-01", "Gerunds is the suggest lesson.", "Gerunds"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["verb patterns", "sentence building"], hints: ["Which pattern does suggest take?", "The meeting is the object of the -ing verb.", "One tile belongs to a different verb family — leave it out."] },
    ),
  ),

  // ------------------------------------------- CH-37 Complex Sentences and Cohesion
  entry(
    37, 1, "independent and dependent clauses",
    qGid(
      "Label the highlighted part of the sentence.",
      "Although the forecast was grim, we cycled to the coast.",
      "Although the forecast was grim",
      "What kind of clause is the highlighted part?",
      "clause types",
      [
        ["a", "a dependent clause — it cannot stand alone"],
        ["b", "an independent clause — a complete sentence"],
        ["c", "a relative clause defining we"],
        ["d", "a passive construction"],
      ],
      "a",
      fbx(
        "a dependent (subordinate) clause",
        "Although … cannot live on its own: it needs the main clause (we cycled) to complete the thought.",
        {
          whyWrong: "The forecast was grim alone would be independent, but with although attached it leans on the main clause for meaning.",
          rule: ["Subordinators create dependence", "although, because, if, when — the clause after them is not a sentence."],
          similar: ["Because it was late, we left.", "Como era tarde, nos fuimos."],
          revise: ["ch-37-l-01", "Independent and Dependent Clauses draws the line.", "Independent and Dependent Clauses"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["clauses", "subordination"] },
    ),
  ),
  entry(
    37, 2, "subordinating conjunctions",
    qFill(
      "Complete the sentence with the best subordinator.",
      "___ the instructions were clear, several students asked again.",
      ["although", "though", "even though"],
      fbx(
        "although (or even though)",
        "Clear instructions versus repeated questions — that surprise needs a concession word.",
        {
          whyWrong: "Because would make the clarity the CAUSE of the questions; so would make it a result. Concession admits the surprise and keeps the facts.",
          rule: ["although = surprising contrast", "Although X, (still) Y."],
          similar: ["Even though we warned her, she went.", "Aunque la avisamos, fue."],
          revise: ["ch-37-l-02", "Subordinating Conjunctions sorts them.", "Subordinating Conjunctions"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["conjunctions", "concession"] },
    ),
  ),
  entry(
    37, 3, "sentence variety",
    qCorr(
      "Rewrite the two choppy sentences as ONE complex sentence (keep all the information).",
      "The results were surprising. Nobody had expected them.",
      ["The results were surprising, which nobody had expected.", "The results, which nobody had expected, were surprising."],
      fbx(
        "The results were surprising, which nobody had expected.",
        "A relative clause with which absorbs the second idea. Variety tools: relatives, subordinators, participles.",
        {
          whyWrong: "Keeping two short sentences is not wrong — but B1 writing scores on combining them. The which-clause is the cleanest merge here.",
          rule: ["Merge tools", "which (comment clause), although, because, -ing phrases."],
          similar: ["He arrived late, which annoyed everyone.", "Llegó tarde, lo que molestó a todos."],
          revise: ["ch-37-l-03", "Sentence Variety practises the merges.", "Sentence Variety"],
        },
      ),
      { difficulty: "hard", skill: "grammar", tags: ["clauses", "variety"] },
    ),
  ),
  entry(
    37, 4, "paragraph cohesion",
    qRd(
      "Read the paragraph and answer the question.",
      "Learning to drive",
      "Learning to drive taught me patience more than any course ever did. At first, I stalled at every junction, which embarrassed me terribly. However, my instructor never once raised her voice. As a result, my nerves settled, and by the tenth lesson I was navigating the ring road alone. What stayed with me, above all, was her calm.",
      "Which word signals that the writer's feelings changed direction?",
      [
        ["a", "however"],
        ["b", "as a result"],
        ["c", "at first"],
        ["d", "above all"],
      ],
      "a",
      fbx(
        "however",
        "However marks contrast: embarrassment (before) versus the instructor's calm (after). As a result shows consequence, at first sets the timeline, above all ranks.",
        {
          whyWrong: "As a result connects cause to effect; at first opens the story; above all closes it. Only however turns the paragraph around.",
          rule: ["Cohesion words are signposts", "however (turn), as a result (effect), above all (priority)."],
          similar: ["It rained all day. However, we still went out.", "Llovió todo el día. Sin embargo, salimos igual."],
          revise: ["ch-37-l-04", "Paragraph Cohesion teaches the signpost set.", "Paragraph Cohesion and Chapter Review"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["reading", "cohesion"] },
    ),
  ),
  entry(
    37, 2, "cohesion listening",
    qLis(
      "Listen and answer: what came as a result?",
      "The council widened the cycle lane; as a result, the number of cyclists doubled within a year.",
      "What happened as a result of widening the lane?",
      ["the number of cyclists doubled", "cyclists doubled within a year", "the number of cyclists doubled within a year"],
      fbx(
        "the number of cyclists doubled",
        "As a result connects the cause (widening) to the effect (doubling). Cohesion words are the logic of the paragraph made audible.",
        {
          whyWrong: "The widening is the CAUSE half. The result clause follows the semicolon.",
          rule: ["Cause → as a result → effect", "Read (or hear) for the hinge word."],
          similar: ["Sales fell; consequently, two shops closed.", "Cayeron las ventas; en consecuencia, cerraron dos tiendas."],
          revise: ["ch-37-l-04", "Paragraph Cohesion covers result links.", "Paragraph Cohesion and Chapter Review"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "cohesion"] },
    ),
  ),
  entry(
    37, 3, "sentence variety dictation",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "Having missed the last ferry, we walked the final six kilometres.",
      ["Having missed the last ferry, we walked the final six kilometres."],
      fbx(
        "Having missed the last ferry, we walked the final six kilometres.",
        "A participle clause (having missed) compresses two past events into one sentence — the height of sentence variety.",
        {
          whyWrong: "Because we missed… says the same thing at twice the length. The -ing form marks earlier time plus cause.",
          rule: ["Having + participle = earlier cause", "Having finished, we left."],
          similar: ["Having tried twice, she gave up.", "Tras intentarlo dos veces, se rindió."],
          revise: ["ch-37-l-03", "Sentence Variety introduces participle clauses.", "Sentence Variety"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["dictation", "variety"] },
    ),
  ),
  entry(
    37, 4, "cohesion writing",
    qWrite(
      "Writing challenge: the cohesion paragraph.",
      "Write a five-sentence paragraph about something that was difficult at first and improved. Use at least three cohesion signposts: however or although, as a result or consequently, and above all or finally.",
      55,
      ["however", "although", "as a result", "consequently"],
      fbx(
        "A paragraph like: My first month at the bakery was chaos. I burned three trays on day one, which the head baker found funny. However, she kept teaching me anyway. As a result, by week four I could shape a sourdough alone. Above all, I learned that mistakes are ingredients too.",
        "The machine checks that at least one signpost from the chapter appears (the task asks for three; one is machine-checked) and that you reach 55 words. Cohesion is what turns five sentences into a paragraph.",
        {
          whyWrong: "Five unrelated sentences is the failure mode: each signpost must connect the sentence before it to the sentence after it.",
          rule: ["Signposts connect neighbours", "however turns, as a result concludes, above all ranks."],
          similar: ["The plan failed; consequently, we started again.", "El plan falló; en consecuencia, empezamos de nuevo."],
          revise: ["ch-37-l-04", "Paragraph Cohesion is the signpost lesson.", "Paragraph Cohesion and Chapter Review"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "cohesion"], hints: ["Open with the difficulty in one sentence.", "Turn the story with however or although.", "Close the chain with as a result, then rank with above all."] },
    ),
  ),
  entry(
    37, 2, "subordination challenge",
    qSb(
      "Challenge: build the complex sentence from the tiles. One tile is extra.",
      ["although", "the", "forecast", "was", "grim", "we", "cycled", "to", "the", "coast", "but"],
      ["Although the forecast was grim, we cycled to the coast."],
      fbx(
        "Although the forecast was grim, we cycled to the coast.",
        "One subordinator is enough: although carries the whole contrast. The tile but is the trap — stacking although and but doubles the linking.",
        {
          whyWrong: "Although … but is the double-connector error: each clause needs one link, not two.",
          rule: ["One connector per junction", "Although X, Y — no but."],
          similar: ["Though it was cold, we swam.", "Aunque hacía frío, nadamos."],
          revise: ["ch-37-l-02", "Subordinating Conjunctions includes the double-connector warning.", "Subordinating Conjunctions"],
        },
      ),
      { difficulty: "challenge", skill: "grammar", tags: ["clauses", "sentence building"], hints: ["Pick ONE connector for the contrast.", "The although-clause comes first with a comma.", "A second connector is forbidden — leave one tile out."] },
    ),
  ),

  // ------------------------------ CH-38 Communication and Structured Writing
  entry(
    38, 1, "expressing opinions",
    qMcq(
      "Which phrase is the most balanced way to introduce an opinion in a discussion?",
      [
        ["a", "In my view, the schedule is tight, though I see why it was chosen."],
        ["b", "The schedule is obviously terrible."],
        ["c", "Everyone agrees with me that it is fine."],
        ["d", "I could be wrong but I'm definitely right."],
      ],
      "a",
      fbx(
        "In my view, … though I see why it was chosen.",
        "B1 discussion language marks the opinion (in my view) and leaves room for the other side (though…).",
        {
          whyWrong: "Obviously terrible is aggressive assertion; everyone agrees claims false consensus; the last option contradicts itself. Balanced openings invite discussion.",
          rule: ["Opinion + concession", "In my view… though / while I accept that…"],
          similar: ["Personally, I'd wait, although I understand the pressure.", "Personalmente esperaría, aunque entiendo la prisa."],
          revise: ["ch-38-l-01", "Expressing and Supporting Opinions teaches the register.", "Expressing and Supporting Opinions"],
        },
      ),
      { difficulty: "medium", skill: "grammar", tags: ["discussion", "opinions"] },
    ),
  ),
  entry(
    38, 2, "structuring short essays",
    qGid(
      "Label the highlighted sentence in the mini-essay.",
      "Should cities charge for car entry? This essay will weigh both sides. On one hand, charges reduce traffic in the centre, which several European capitals have shown. On the other hand, small shops outside the charging zone may lose customers. Taking everything into account, a fair charge, with exemptions for residents and delivery vehicles, is the workable middle.",
      "On the other hand, small shops outside the charging zone may lose customers.",
      "What is the job of the highlighted sentence?",
      "essay roles",
      [
        ["a", "the counter-argument — the other side of the debate"],
        ["b", "the thesis — the writer's final position"],
        ["c", "the introduction"],
        ["d", "the conclusion"],
      ],
      "a",
      fbx(
        "the counter-argument",
        "On the other hand signals the opposite side. A short essay needs all four parts: intro, one side, other side, conclusion.",
        {
          whyWrong: "Taking everything into account marks the conclusion; the question opens it. This sentence exists to be answered, not to answer.",
          rule: ["Four-part essay machine", "Introduce → argue A → argue B → conclude."],
          similar: ["On the one hand it saves time; on the other, it costs jobs.", "Por un lado ahorra tiempo; por otro, cuesta puestos de trabajo."],
          revise: ["ch-38-l-02", "Structuring Paragraphs and Short Essays teaches the frame.", "Structuring Paragraphs and Short Essays"],
        },
      ),
      { difficulty: "hard", skill: "reading", tags: ["essays", "structure"] },
    ),
  ),
  entry(
    38, 3, "discussion skills",
    qLis(
      "Listen and answer: what does the speaker concede before disagreeing?",
      "I accept that the tickets are expensive, but if we book today the price drops by half — so it's the cheapest it will ever be.",
      "What does the speaker accept first?",
      ["that the tickets are expensive", "the tickets are expensive", "that tickets are expensive", "tickets are expensive"],
      fbx(
        "that the tickets are expensive",
        "Concede-then-counter: I accept that…, but… This sequence lowers the temperature of a disagreement.",
        {
          whyWrong: "The discount is the COUNTER, not the concession. The concession is the point the speaker grants before pushing back.",
          rule: ["Concede then counter", "I accept X, but Y."],
          similar: ["You're right that it's far; even so, it's worth it.", "Tienes razón en que está lejos; aun así, vale la pena."],
          revise: ["ch-38-l-03", "Discussion Skills teaches the concede-counter move.", "Discussion Skills"],
        },
      ),
      { difficulty: "medium", skill: "listening", tags: ["listening", "discussion"] },
    ),
  ),
  entry(
    38, 3, "storytelling",
    qDict(
      "Listen and type the sentence exactly as you hear it.",
      "By the time the lights came back on, the birthday cake had already been eaten.",
      ["By the time the lights came back on, the birthday cake had already been eaten."],
      fbx(
        "By the time the lights came back on, the birthday cake had already been eaten.",
        "Two tools in one line: by the time (sequencing) and the past perfect passive (had been eaten) — the earliest event, with the doer unnamed.",
        {
          whyWrong: "The cake was eaten alone would lose the sequence; the had-been shape is what marks it earlier than the lights.",
          rule: ["had been + participle = earlier passive", "The work had been finished before we arrived."],
          similar: ["The speech had been written long before the wedding.", "El discurso se había escrito mucho antes de la boda."],
          revise: ["ch-30-l-02", "Earlier and Later (CH-30) backs the sequencing half.", "Earlier and Later: Sequencing Tools"],
        },
      ),
      { difficulty: "hard", skill: "listening", tags: ["dictation", "narrative"] },
    ),
  ),
  entry(
    38, 4, "B1 exit writing",
    qWrite(
      "B1 exit challenge: a short structured essay.",
      "Write a short essay (5–6 sentences) answering: Should phones be allowed in classrooms? Use the four-part machine: introduction, one side (on one hand…), other side (on the other hand…), and your conclusion (taking everything into account…).",
      60,
      ["on the other hand", "on the one hand"],
      fbx(
        "An essay like: Should phones be allowed in class? On the one hand, they give instant access to dictionaries and recordings. On the other hand, notifications fracture attention, which several studies have measured. Taking everything into account, I would allow phones only in locked pouches, released by the teacher for specific tasks.",
        "The machine checks that a two-sided signpost appears (on the one/other hand) and that you reach 60 words. The human checks are balance: both sides stated fairly, and one clear conclusion.",
        {
          whyWrong: "The standard B1 failure is a one-sided rant or a list of sentences with no connective tissue. The four-part machine forces the balance.",
          rule: ["Four-part machine", "Introduce, side A, side B, conclude."],
          similar: ["On the one hand it's cheaper; on the other, it's slower.", "Por un lado es más barato; por otro, es más lento."],
          revise: ["ch-38-l-02", "Structuring Paragraphs and Short Essays is the frame lesson.", "Structuring Paragraphs and Short Essays"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["writing", "essays"], hints: ["Open with the question itself, then announce both sides.", "Give each side one sentence, starting with on one/other hand.", "Conclude with taking everything into account + your position."] },
    ),
  ),
  entry(
    38, 4, "B1 exit speaking",
    qSpeak(
      "B1 exit speaking: the balanced minute.",
      "Speak for one minute on: 'Is it better to live in a city or a small town?' Use: in my view, on the one hand, on the other hand, and taking everything into account.",
      ["In my view, it depends on your stage of life.", "On the one hand, cities offer work.", "On the other hand, towns offer quiet.", "Taking everything into account, I would choose the town."],
      ["in my view", "on the other hand", "taking everything into account"],
      fbx(
        "A balanced minute, for example: In my view, the answer changes with age. On the one hand, cities concentrate work and study. On the other hand, small towns give you time back, which no salary can buy. Taking everything into account, I'd choose the town and visit the city.",
        "The machine checks the three signposts (in my view, on the other hand, taking everything into account). This is the B1 exit performance: balanced, connected, concluded.",
        {
          whyWrong: "A one-sided answer with no signposts reads as B1-minus. The signposts ARE the level.",
          rule: ["Signposts make the level", "in my view / on the one hand / on the other hand / taking everything into account."],
          similar: ["On balance, I prefer trains to planes.", "En conjunto, prefiero el tren al avión."],
          revise: ["ch-38-l-04", "Storytelling, Fluency and B1 Exit rehearses this format.", "Storytelling, Fluency and B1 Exit"],
        },
      ),
      { difficulty: "challenge", skill: "speaking", tags: ["speaking", "B1 exit"], hints: ["Open by marking your opinion: In my view…", "Give one side, then the other with the signposts.", "Land with taking everything into account + your choice."] },
    ),
  ),
  entry(
    38, 2, "essay challenge",
    qSb(
      "Challenge: build the essay line from the tiles. One tile is extra.",
      ["taking", "everything", "into", "account", "i", "would", "allow", "phones", "with", "conditions", "definitely"],
      ["Taking everything into account, I would allow phones with conditions."],
      fbx(
        "Taking everything into account, I would allow phones with conditions.",
        "The conclusion formula: taking everything into account + your position. The tile definitely is the trap — essay register avoids intensifiers that pretend certainty.",
        {
          whyWrong: "Definitely would allow overstates a balanced conclusion. Academic register prefers hedged strength.",
          rule: ["Conclude with measure", "Taking everything into account, … would/could …"],
          similar: ["All things considered, the change is worth trying.", "Considerándolo todo, vale la pena probar el cambio."],
          revise: ["ch-38-l-02", "Structuring Paragraphs and Short Essays covers register.", "Structuring Paragraphs and Short Essays"],
        },
      ),
      { difficulty: "challenge", skill: "writing", tags: ["essays", "sentence building"], hints: ["The conclusion formula starts with a four-word gerund phrase.", "State your position with would.", "One tile is an intensifier that essay register avoids."] },
    ),
  ),
];
