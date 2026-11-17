/**
 * Academic Task 2 practice bank — batch C (PROMPT 54 question-bank expansion).
 *
 * Nine additional Academic Task 2 essay tasks, all practice tier: three
 * opinion essays (machine translation, arts funding, school uniforms),
 * three discussion essays (remote work, city versus countryside childhoods,
 * compulsory science) and three advantages-and-disadvantages essays
 * (single-use plastic bans, online shopping, health-tracking apps). Every
 * task is an original assignment with a full model answer, planning notes,
 * the eight-element analysis and a topic vocabulary bank — a complete but
 * leaner payload than the flagship tasks, with no level samples, so the
 * expansion library can grow without thinning any teaching element below
 * its floor. Band labels are educational estimates, never official scores.
 *
 * There is no visual and no letter situation here: in Task 2 the prompt
 * itself is the essay question, and the discipline is a stated position,
 * every part of the question addressed, body paragraphs built from reason,
 * explanation and example, and a conclusion that restates the verdict in
 * new words.
 */

import { WRITING_BANK_SOURCE_NOTE, type WritingBankTask } from "./types";

// ---------------------------------------------------------------------------
// 1. Opinion — machine translation and language learning
// ---------------------------------------------------------------------------

const at2OpinionAiTranslation: WritingBankTask = {
  slug: "ielts-wb-at2-opinion-ai-translation",
  title: "Machine translation and language learning",
  channel: "academic",
  taskType: "task-2",
  family: "opinion",
  tier: "practice",
  topic: "technology",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Some people believe that machine translation tools have made learning foreign languages unnecessary. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-position",
      description:
        "States the extent of agreement or disagreement in the introduction and keeps the same calibrated position in every paragraph.",
      keywords: ["agree", "disagree", "largely", "believe", "in my view", "position", "extent"],
    },
    {
      key: "test-the-claim",
      description:
        "Tests what translation tools genuinely deliver against what language learning provides, rather than praising or condemning technology in general.",
      keywords: ["translation", "translate", "machine", "tools", "device", "software", "apps"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Extends every body paragraph with a reason, an explanation and a concrete example or remembered case.",
      keywords: ["for example", "for instance", "because", "such as", "tourist", "negotiation", "colleague"],
    },
    {
      key: "concede-and-hold",
      description:
        "Concedes the genuine gains of instant translation without letting the concession swallow the stated verdict.",
      keywords: ["admittedly", "although", "it is true", "while", "granted", "that said"],
    },
    {
      key: "academic-register",
      description:
        "Keeps academic register: no contractions, no announcement phrases, no conversational asides.",
      keywords: ["moreover", "however", "although", "therefore", "whereas", "in conclusion"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: opinion. One claim to judge, and the task phrase is 'to what extent', so the strength of agreement must be stated, not only its direction.",
        "The claim's premise is that translation software now covers everything a language does — the strongest essays ask what a language is actually for.",
        "Register: academic and mostly third person; first person is welcome for the position itself.",
      ],
    },
    {
      heading: "Step 2 — Choose the position and the reasons",
      notes: [
        "Chosen position: largely disagree — the hedge leaves room for one honest concession without abandoning the verdict.",
        "Concession to grant: transactional exchanges (menus, signs, sales emails) really have been transformed.",
        "Reason 1: language builds trust, shows respect and carries nuance that no software reproduces in high-stakes settings.",
        "Reason 2: the learner's own gains — mental training and direct access to a culture — cannot be outsourced to an app.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: paraphrase the claim, give the calibrated verdict, preview both lines of defence in one sentence.",
        "Body 1: the concession — what machines genuinely changed, stated fairly so the disagreement that follows looks measured.",
        "Body 2: the deeper uses — trust and nuance first, then the learner's private gains, ending on a single remembered scene.",
        "Conclusion: restate the verdict in fresh words; name what the technology changed and what it cannot change.",
        "Language bank: extent hedges ('largely', 'to a great extent'), concession kit ('it is true that', 'while'), and the depth metaphor ('shallow end', 'where the stakes rise').",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Instant translation, once a fantasy of science fiction, now sits in every pocket, and some conclude from this that spending years on a foreign language has become pointless. I largely disagree with that conclusion. While translation software handles the routine exchanges of travel and trade remarkably well, it cannot perform the deeper functions of a language, and it cannot hand the learner the benefits that come from acquiring one.",
      "It is true that the technology has changed the shallow end of communication. A tourist can read a menu, decipher a road sign or ask for directions through a phone, and a small firm can draft a sales email in a language none of its staff has ever studied. For such transactional moments the claim is sound: a barrier that once made ordinary cross-border contact impossible has genuinely been lowered.",
      "My disagreement begins where the stakes rise. Language does more than carry information; it builds trust, shows respect and carries shades of meaning that no software yet reproduces. A negotiation conducted through a handheld device reminds everyone present that a machine stands between them, and a joke that has to be processed by an algorithm is rarely still funny when it arrives. The gains on the learner's side are just as hard to outsource. Studying a language trains attention and memory, and it opens a culture's films, literature and friendships in a form a translation overlay can only summarise. A colleague of mine won a contract in Osaka because she opened the meeting in hesitant but respectful Japanese, a gesture no app could have performed on her behalf.",
      "In conclusion, machine translation has made casual contact across borders easier, and that is a real achievement. But a language is not merely an obstacle to be routed around: it is a set of relationships, a form of mental training and a mark of respect towards the people who speak it. Learning one therefore remains as worthwhile as ever, and I cannot agree that the technology has made it unnecessary.",
    ],
    wordCount: 337,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the calibrated verdict",
        analysis:
          "Paraphrases the claim into 'pointless', rejects it with a hedge ('largely disagree') and previews both lines of defence — the functions machines cannot perform and the benefits only learners obtain.",
      },
      {
        role: "Body 1 — the concession",
        analysis:
          "Grants the claim its genuine territory first: menus, signs and sales emails are transactional, and the barrier really has been lowered there — a concession that makes the next paragraph's disagreement look measured rather than defensive.",
      },
      {
        role: "Body 2 — the deeper uses",
        analysis:
          "Moves from trust and nuance (the negotiation, the processed joke) to the learner's private gains (attention, memory, culture), then lands on the Osaka anecdote, which converts the abstraction of respect into a single remembered scene.",
      },
      {
        role: "Conclusion — the verdict restated",
        analysis:
          "Rebuilds the verdict in fresh words — language as relationships, training and respect — and closes by separating what the technology changed from what it cannot change.",
      },
    ],
    vocabulary: [
      { term: "the shallow end of communication", note: "A swimming-pool metaphor that sorts language use into easy transactional exchanges and the deeper water the essay will defend." },
      { term: "transactional moments", note: "The precise name for exchanges that carry information and nothing else — exactly the territory the concession grants." },
      { term: "where the stakes rise", note: "A gambling metaphor marking the turn from casual use to consequential use; it pivots the essay from concession to argument." },
      { term: "shades of meaning", note: "The standard phrase for nuance; it names what the second paragraph claims software cannot yet reproduce." },
      { term: "a translation overlay", note: "A technology-industry word for software layered on top of an experience; it frames translation as a surface, not a substitute." },
      { term: "routed around", note: "A navigation metaphor that treats language as an obstacle rather than a possession — the view the conclusion rejects." },
    ],
    grammar: [
      {
        feature: "Concessive 'while' clause",
        example: "While translation software handles the routine exchanges of travel and trade remarkably well, it cannot perform the deeper functions of a language",
        note: "The concession and the rebuttal share one sentence, so the disagreement is heard at the very moment the claim is granted.",
      },
      {
        feature: "Semi-colon between independent clauses",
        example: "Language does more than carry information; it builds trust, shows respect and carries shades of meaning",
        note: "The semi-colon balances two full clauses and lets a tripartite list carry the second; a comma here would be a splice.",
      },
      {
        feature: "Present perfect for recent change",
        example: "the technology has changed the shallow end of communication",
        note: "The present perfect links a recent past change to the present situation the essay must judge.",
      },
      {
        feature: "Gerund subject naming an activity",
        example: "Studying a language trains attention and memory",
        note: "The gerund makes the activity itself the subject — the standard academic move when an activity is being evaluated.",
      },
    ],
    coherence:
      "The verdict 'largely disagree' is stated in the introduction, conceded to in body one and defended in body two, so the reader always knows which side is being argued. The depth metaphor ('the shallow end', 'where the stakes rise', 'the deeper functions') threads the essay together, reference chains ('the technology', 'the claim', 'the learner') keep the two camps distinct, and the conclusion's 'obstacle to be routed around' answers the introduction's 'pointless' in kind.",
    alternativeExpressions: [
      { insteadOf: "I largely disagree", use: "my disagreement is qualified but firm" },
      { insteadOf: "the shallow end of communication", use: "the simplest exchanges between strangers" },
      { insteadOf: "where the stakes rise", use: "as the importance of the exchange grows" },
      { insteadOf: "shades of meaning", use: "fine differences of sense and tone" },
      { insteadOf: "routed around", use: "treated as a mere obstacle to avoid" },
    ],
    commonMistakes: [
      {
        wrong: "I 100% agree that translation apps are perfect and languages are dead.",
        right: "I largely disagree: the apps handle routine exchanges, but a language builds trust and trains the mind.",
        reason: "'To what extent' asks for a measured degree; an unqualified absolute reads as a memorised slogan and blocks the higher Task Response bands.",
      },
      {
        wrong: "Technology is bad for students and makes them lazy in everything.",
        right: "While translation software handles routine exchanges well, it cannot perform the deeper functions of a language.",
        reason: "Attacking technology in general drifts away from the question, which is specifically about translation tools and language learning.",
      },
      {
        wrong: "In this essay, I will discuss both sides of machine translation and give my opinion at the end.",
        right: "I largely disagree with that conclusion.",
        reason: "The announcement formula delays the position; examiners expect the verdict inside the first paragraph, not a guided tour before it.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to outsource", partOfSpeech: "verb", meaning: "To hand a task to an outside provider instead of doing it oneself." },
    { word: "nuance", partOfSpeech: "noun", meaning: "A small difference of meaning, tone or feeling." },
    { word: "transactional", partOfSpeech: "adjective", meaning: "Describing an exchange that transfers information or goods and nothing deeper." },
    { word: "barrier", partOfSpeech: "noun", meaning: "Something that blocks progress or contact between people." },
    { word: "to decipher", partOfSpeech: "verb", meaning: "To work out the meaning of something difficult to read." },
    { word: "overlay", partOfSpeech: "noun", meaning: "A layer added on top of something, here software placed over an experience." },
    { word: "hesitant", partOfSpeech: "adjective", meaning: "Uncertain and slow, especially when speaking." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Opinion — should governments fund the arts?
// ---------------------------------------------------------------------------

const at2OpinionArtsFunding: WritingBankTask = {
  slug: "ielts-wb-at2-opinion-arts-funding",
  title: "Should governments fund the arts?",
  channel: "academic",
  taskType: "task-2",
  family: "opinion",
  tier: "practice",
  topic: "culture",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Some people believe that governments spend too much money on the arts, and that these funds should be redirected towards essential public services such as healthcare and housing. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-position",
      description:
        "States the extent of agreement with the reallocation proposal in the introduction and holds the same position to the final paragraph.",
      keywords: ["agree", "disagree", "largely", "in my view", "cannot", "extent", "conclusion"],
    },
    {
      key: "weigh-the-trade-off",
      description:
        "Engages the prioritisation argument directly, weighing arts spending against core services rather than praising art in the abstract.",
      keywords: ["budget", "spending", "funds", "healthcare", "housing", "services", "money"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Extends each body paragraph with a reason, an explanation and a concrete example, figure or mechanism.",
      keywords: ["for example", "for instance", "because", "choir", "per cent", "tax", "theatres"],
    },
    {
      key: "concede-and-hold",
      description:
        "Concedes what is reasonable in the claim — services matter and budgets are finite — without surrendering the verdict.",
      keywords: ["admittedly", "although", "granted", "it is true", "of course", "honest"],
    },
    {
      key: "verdict-conclusion",
      description:
        "Closes by restating the verdict in fresh words and naming the debate that is actually worth having.",
      keywords: ["in conclusion", "overall", "therefore", "to conclude", "balance", "honest"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: opinion. The claim has two joined parts — too much is spent on the arts, and the money should move to services — and a strong essay answers both.",
        "'To what extent' requires a stated degree; the verdict can be hedged but must not waver between paragraphs.",
        "The trap is writing a general essay in praise of art; the question is about budget priorities, so the answer must speak in costs, returns and shares.",
      ],
    },
    {
      heading: "Step 2 — Choose the position and the reasons",
      notes: [
        "Chosen position: largely disagree — the claim fails on arithmetic and on its picture of what the arts do.",
        "Reason 1 (arithmetic): culture budgets are a sliver of public spending, so the proposed transfer would barely help services while destroying the sector outright.",
        "Reason 2 (false rivalry): the arts return value to health and the economy — employment, visitor spending, and arts-on-prescription programmes.",
        "Concession to keep: core services genuinely come first in a crisis — but that is an argument about timing, not about the arts being overfunded.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: name the claim's seductive logic, reject it with a hedge, preview the two flaws — arithmetic and rivalry.",
        "Body 1: the arithmetic flaw — percentage shares, days of health funding, the real large items a serious government would examine.",
        "Body 2: the false rivalry — economic returns first, then the medical evidence that reframes the arts as preventive healthcare.",
        "Conclusion: refuse both halves of the claim in fresh words and reframe the honest debate as efficiency and access.",
        "Language bank: budget nouns ('line item', 'subsidy', 'share'), weighing verbs ('outweigh', 'returns'), and the fairness move ('seductively simple').",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Whenever public budgets tighten, spending on the arts is among the first items to be questioned, and the reasoning is seductively simple: theatres, galleries and orchestras are luxuries, while hospitals and housing are necessities, so the money should move from the first to the second. I largely disagree with this argument. It rests on an arithmetic mistake and on a false picture of what the arts do for the societies that pay for them.",
      "The arithmetic first. In most developed economies, the entire culture budget amounts to well under one per cent of public spending, while health alone typically consumes a share many times larger every month. Closing every theatre in a mid-sized country would fund its health service for a matter of days, so the proposed transfer would barely register on the receiving side while destroying the giving side outright. A government that is serious about hospitals does not begin with the smallest line item on the page; it looks at the large ones — procurement, defence, debt service — where the real money sits. Scapegoating the arts is a way of appearing decisive while doing almost nothing.",
      "The second flaw is the assumption that the arts and public wellbeing are rivals rather than partners. Cultural institutions employ performers, curators, technicians and builders, and their audiences spend in the restaurants and hotels around them, so part of the subsidy returns as tax revenue. More strikingly, medicine itself is beginning to prescribe what the arts supply: dance programmes for people with Parkinson's disease, gallery visits for anxiety, choirs for chronic loneliness — an approach some health systems have formally named arts on prescription. If a weekly singing session keeps an isolated older person away from a clinic for a year, the supposedly frivolous line item turns out to be preventive healthcare at a bargain price.",
      "In conclusion, I cannot agree that the arts take too much public money, nor that health and housing would feel the difference if it were taken. The honest debate is not art against medicine but efficiency and access within both. A country wealthy enough to argue about this at all is wealthy enough to fund the body and the imagination together.",
    ],
    wordCount: 363,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the verdict on a two-part claim",
        analysis:
          "Names the claim's seductive logic before rejecting it with a hedge, then previews the two flaws — arithmetic and rivalry — that the body paragraphs each repair in turn.",
      },
      {
        role: "Body 1 — the arithmetic flaw",
        analysis:
          "Quantifies the comparison the claim leaves vague: under one per cent against a share many times larger monthly, days of health funding against the sector's total destruction. The closing sentence converts the numbers into a political judgement about appearing decisive.",
      },
      {
        role: "Body 2 — the false rivalry",
        analysis:
          "First the economic return, then the medical evidence — Parkinson's dance, gallery prescriptions, loneliness choirs — ending on the reclassification that wins the essay: the arts as preventive healthcare at a bargain price.",
      },
      {
        role: "Conclusion — the debate reframed",
        analysis:
          "Refuses both halves of the claim in fresh words and replaces the art-versus-medicine contest with the honest questions — efficiency and access — that survive the rebuttal.",
      },
    ],
    vocabulary: [
      { term: "seductively simple", note: "Admits the claim's persuasive charm before dismantling it — a fairness move that makes the rebuttal more convincing." },
      { term: "line item", note: "Budget language for a single entry in accounts; it frames culture as one figure among many, which is exactly the claim's blind spot." },
      { term: "scapegoating", note: "The political word for blaming a small, visible target in order to avoid the larger, harder one." },
      { term: "arts on prescription", note: "A named health policy in which clinicians refer patients to cultural activities; the essay's strongest single piece of evidence." },
      { term: "preventive healthcare", note: "The reclassification that wins the argument: spending that stops illness before it starts." },
      { term: "at a bargain price", note: "An evaluative aside that prices the benefit against its cost in four words." },
    ],
    grammar: [
      {
        feature: "'Would'-conditional pricing a proposal",
        example: "Closing every theatre in a mid-sized country would fund its health service for a matter of days",
        note: "The conditional prices the claim's own proposal, showing what would happen without asserting that it ever has.",
      },
      {
        feature: "Semi-colon joining paired policies",
        example: "A government that is serious about hospitals does not begin with the smallest line item on the page; it looks at the large ones",
        note: "The semi-colon sets the wrong behaviour and the right one side by side in a single balanced sentence.",
      },
      {
        feature: "Dash-enclosed tripartite list",
        example: "dance programmes for people with Parkinson's disease, gallery visits for anxiety, choirs for chronic loneliness",
        note: "Three parallel noun phrases, each pairing an art with a medical purpose, compress three programmes into one sentence.",
      },
      {
        feature: "Subordinated 'while' comparison",
        example: "while health alone typically consumes a share many times larger every month",
        note: "The subordinated clause does the comparing, keeping the paragraph's topic sentence short and its claim foregrounded.",
      },
    ],
    coherence:
      "The essay is built on the two flaws announced in the introduction — 'an arithmetic mistake and a false picture' — and the body paragraphs deliver them in order, each opening by naming its flaw ('The arithmetic first', 'The second flaw'). Financial language ('line item', 'subsidy', 'share', 'price') keeps the register consistent with the budget claim being tested, and the conclusion's 'the body and the imagination' mirrors the claim's 'hospitals and housing' to close the frame.",
    alternativeExpressions: [
      { insteadOf: "seductively simple", use: "attractive at first glance" },
      { insteadOf: "barely register on the receiving side", use: "make no noticeable difference where it arrived" },
      { insteadOf: "line item", use: "single entry in the budget" },
      { insteadOf: "at a bargain price", use: "remarkably cheaply by comparison" },
      { insteadOf: "fund the body and the imagination together", use: "pay for treatment and for culture alike" },
    ],
    commonMistakes: [
      {
        wrong: "Art is beautiful and everyone loves it, so the government must pay for art.",
        right: "The subsidy partly returns as tax revenue, and clinicians now prescribe choirs for chronic loneliness.",
        reason: "Emotive praise of art does not engage the prioritisation claim; the question is about budget choices, so the answer must speak in costs and returns.",
      },
      {
        wrong: "I completely disagree because healthcare is not important at all.",
        right: "I largely disagree: core services matter, but cutting a budget of under one per cent will not help them.",
        reason: "Dismissing the other side's concern makes the position look careless; a hedged disagreement that grants what is reasonable is far harder to fault.",
      },
      {
        wrong: "Firstly, secondly, thirdly, fourthly, the arts are good for economy, society, education, tourism, health and so on.",
        right: "Cultural institutions employ performers, curators, technicians and builders, and their audiences spend in the restaurants and hotels around them.",
        reason: "A list of benefits without development is a catalogue, not an argument; one worked mechanism outranks six labels.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to redirect", partOfSpeech: "verb", meaning: "To send money or effort towards a different purpose." },
    { word: "subsidy", partOfSpeech: "noun", meaning: "Public money paid to keep a service or activity affordable." },
    { word: "procurement", partOfSpeech: "noun", meaning: "The process by which governments buy goods and services." },
    { word: "preventive", partOfSpeech: "adjective", meaning: "Intended to stop a problem before it begins." },
    { word: "to prescribe", partOfSpeech: "verb", meaning: "Of a doctor: to order a treatment or activity for a patient." },
    { word: "frivolous", partOfSpeech: "adjective", meaning: "Not serious or useful — the charge this essay answers." },
    { word: "wellbeing", partOfSpeech: "noun", meaning: "A person's general health and happiness." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Opinion — school uniforms
// ---------------------------------------------------------------------------

const at2OpinionUniforms: WritingBankTask = {
  slug: "ielts-wb-at2-opinion-uniforms",
  title: "School uniforms",
  channel: "academic",
  taskType: "task-2",
  family: "opinion",
  tier: "practice",
  topic: "education",
  difficulty: 2,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Some people think that school uniforms should be abolished because they restrict students' individuality and are expensive for parents. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-position",
      description:
        "Answers the abolition question directly in the introduction and keeps the same side to the end of the essay.",
      keywords: ["agree", "disagree", "believe", "in my view", "abolish", "should", "position"],
    },
    {
      key: "answer-both-complaints",
      description:
        "Responds to both stated reasons for abolition — restricted individuality and cost — rather than only one of them.",
      keywords: ["individuality", "express", "cost", "money", "expensive", "cheaper", "clothes"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each point with a reason, an explanation and an example drawn from ordinary school life.",
      keywords: ["for example", "for instance", "because", "playground", "labels", "schools", "parents"],
    },
    {
      key: "measured-tone",
      description:
        "Keeps a measured academic tone while arguing about children: no contractions, no exaggeration, no insults.",
      keywords: ["however", "although", "therefore", "moreover", "in conclusion", "while"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: opinion. The claim comes with two given reasons — individuality and cost — and both must be answered, not just the one that is easier.",
        "'To what extent' invites a hedged verdict: agree, disagree, or disagree with the reasons while accepting a small part of them.",
        "Register: academic but simple; the topic is everyday school life, so concrete vocabulary beats abstract vocabulary.",
      ],
    },
    {
      heading: "Step 2 — Choose the position and the reasons",
      notes: [
        "Chosen position: disagree with abolition — uniforms do a job almost nothing else can do as cheaply.",
        "Reason 1: clothes at school mostly express household income, so uniforms remove a visible ranking rather than a real freedom.",
        "Reason 2: the cost complaint is partly true but has small, known remedies — second-hand sales, capped lists, quiet help.",
        "Reform to propose in the conclusion: make uniforms cheaper and more comfortable instead of removing them.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: paraphrase both complaints, state the disagreement, promise to answer both without getting rid of uniforms.",
        "Body 1: individuality — the outlet list, the income point, the playground teasing that follows brand sorting.",
        "Body 2: cost — the year-long comparison with a fashion wardrobe, then the remedies that cost less than abolition.",
        "Conclusion: gather the gains, replace abolition with the sensible reform, keep the position identical to paragraph one.",
        "Language bank: school-life nouns ('playground', 'labels', 'wardrobe'), simple comparatives ('cheaper than'), and evaluation phrases ('an unwelcome trade').",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "In some countries the school uniform is quietly disappearing, and there are calls for it to disappear everywhere, on the grounds that it flattens children's individuality and empties family wallets. I disagree with the call to abolish it. In my view, a uniform does a job that almost nothing else can do as cheaply or as well, and the two complaints made against it can both be answered without getting rid of it.",
      "The complaint about individuality assumes that clothes are the main way a young person shows who they are. A school day already offers dozens of other outlets: the subjects a student chooses, the instrument they learn, the teams they join and the arguments they have. What clothes mostly show at school, in fact, is how much money a family has. Once fashion labels walk into the classroom, they sort children into visible ranks, and the sorting follows them into the playground. This is why teachers at schools that have dropped uniforms so often report new pressure on parents and new teasing about brands — an unwelcome trade for a freedom children were barely using.",
      "The cost argument sounds practical, and partly is, but it proves less than it claims. A sturdy uniform worn every day is frequently cheaper over a whole year than the rotating wardrobe a child demands when anything goes, because one set of clothes replaces the race to keep up with trends. Where uniforms genuinely strain a budget, the remedies are well known and cost far less than abolition: second-hand sales run by the school, a capped list of required items and quiet help for the families in greatest difficulty.",
      "In conclusion, I believe uniforms should stay. They make the school day calmer and fairer, they tend to save money over time, and they leave young people plenty of room to be themselves. The sensible reform is to make uniforms more comfortable and more affordable, not to remove them.",
    ],
    wordCount: 324,
    bandEstimate: "Band 8.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the verdict stated",
        analysis:
          "Paraphrases both complaints before answering them with a clear 'I disagree', and previews the essay's method — solving the two problems rather than denying them.",
      },
      {
        role: "Body 1 — individuality answered",
        analysis:
          "Reframes what clothes actually express at school — household income — and backs the reframe with the outlet list and the playground teasing example, ending on an evaluative aside that measures the trade.",
      },
      {
        role: "Body 2 — cost answered",
        analysis:
          "Meets the practical complaint on its own ground, comparing yearly costs, then converts familiar school practices — second-hand sales, capped lists — into remedies that cost less than abolition.",
      },
      {
        role: "Conclusion — the reasonable reform",
        analysis:
          "Gathers the essay's three gains into one sentence and replaces abolition with the reform that answers both original complaints, keeping the position consistent to the last line.",
      },
    ],
    vocabulary: [
      { term: "outlets", note: "Named opportunities for expression; listing them shows individuality has other homes than clothing." },
      { term: "visible ranks", note: "The metaphor of military sorting applied to fashion labels; it makes inequality something a child can see." },
      { term: "the sorting follows them into the playground", note: "Extends the ranking beyond the classroom into social life, where no teacher can police it." },
      { term: "proves less than it claims", note: "A compact way of granting a point while stripping it of force — the essay's fairest move." },
      { term: "a capped list of required items", note: "Concrete policy vocabulary showing that the cost problem has precise, small solutions." },
      { term: "an unwelcome trade", note: "Weighing language that prices the swap: a freedom nobody used against teasing everybody sees." },
    ],
    grammar: [
      {
        feature: "Cleft sentence spotlighting a reframe",
        example: "What clothes mostly show at school, in fact, is how much money a family has",
        note: "The 'What…is' structure foregrounds the essay's central reframe; the comma-enclosed 'in fact' marks it as a correction.",
      },
      {
        feature: "'Where' clause for recurring cases",
        example: "Where uniforms genuinely strain a budget, the remedies are well known",
        note: "'Where' works like 'whenever', presenting the problem as a recurring case that already has a standing answer.",
      },
      {
        feature: "Comparative with a time span",
        example: "A sturdy uniform worn every day is frequently cheaper over a whole year than the rotating wardrobe",
        note: "The comparative does the essay's cost weighing inside a single sentence, with 'over a whole year' fixing the fair basis of comparison.",
      },
    ],
    coherence:
      "Both complaints named in the introduction return as the topics of the two body paragraphs, in the same order, so a reader can track each promise being kept. The money thread runs through the whole essay ('empties family wallets', 'how much money a family has', 'cheaper over a whole year', 'more affordable'), and the conclusion mirrors the introduction's promise to answer both complaints by naming the reform that does.",
    alternativeExpressions: [
      { insteadOf: "flattens children's individuality", use: "stops children from showing who they are" },
      { insteadOf: "visible ranks", use: "groups everyone can see at a glance" },
      { insteadOf: "the sorting follows them into the playground", use: "the ranking continues outside lesson time" },
      { insteadOf: "proves less than it claims", use: "is weaker than it first appears" },
      { insteadOf: "an unwelcome trade", use: "a poor exchange" },
    ],
    commonMistakes: [
      {
        wrong: "Uniforms are good and everyone who disagrees hates children.",
        right: "In my view, a uniform does a job that almost nothing else can do as cheaply or as well.",
        reason: "Exaggerated claims and personal attacks undermine an academic essay; the position should be stated calmly and defended with reasons.",
      },
      {
        wrong: "Uniforms stop bullying completely, so all schools must have them.",
        right: "A shared uniform removes one visible ranking, which is why many teachers report less teasing about brands.",
        reason: "Absolute claims are easy to disprove with a single counter-example; hedged claims that survive contact with reality earn higher bands.",
      },
      {
        wrong: "In my essay I will write about uniforms and tell you my opinion.",
        right: "I disagree with the call to abolish it.",
        reason: "The memorised announcement wastes the introduction; the examiner expects the position inside the first paragraph.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to abolish", partOfSpeech: "verb", meaning: "To end an official practice or system completely." },
    { word: "individuality", partOfSpeech: "noun", meaning: "The qualities that make one person different from others." },
    { word: "outlet", partOfSpeech: "noun", meaning: "A way of expressing a feeling or talent." },
    { word: "to strain (a budget)", partOfSpeech: "verb", meaning: "To put something under pressure almost to breaking point." },
    { word: "second-hand", partOfSpeech: "adjective", meaning: "Previously owned and sold on rather than bought new." },
    { word: "sturdy", partOfSpeech: "adjective", meaning: "Strongly made and likely to last." },
    { word: "teasing", partOfSpeech: "noun", meaning: "Unkind remarks intended to mock someone." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Discussion — the office versus the home desk
// ---------------------------------------------------------------------------

const at2DiscussionRemoteWork: WritingBankTask = {
  slug: "ielts-wb-at2-discussion-remote-work",
  title: "The office versus the home desk",
  channel: "academic",
  taskType: "task-2",
  family: "discussion",
  tier: "practice",
  topic: "workplace",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Many employers now require their staff to return to the office, while other companies allow most employees to work from home permanently. Discuss both these views and give your own opinion.",
  requirements: [
    {
      key: "both-views",
      description:
        "Devotes a full paragraph to each view at its strongest, with reasons specific to working life rather than generalities.",
      keywords: ["case for", "argument", "view", "office", "home", "employers", "staff"],
    },
    {
      key: "own-opinion",
      description:
        "Gives a clear personal verdict in the introduction and defends it after both views have been heard.",
      keywords: ["in my view", "my view", "opinion", "I believe", "for me", "in my opinion"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports every claim with reasons, explanations and workplace examples rather than bare assertions.",
      keywords: ["for example", "for instance", "because", "colleagues", "commute", "teams", "juniors"],
    },
    {
      key: "weighing-move",
      description:
        "Performs an explicit weighing of the two views instead of describing them neutrally until the end.",
      keywords: ["both", "however", "while", "on balance", "which is why", "therefore"],
    },
    {
      key: "academic-register",
      description:
        "Keeps academic register: no contractions, no anecdotal pile-ups, no memorised linking phrases.",
      keywords: ["moreover", "however", "although", "therefore", "whereas", "in conclusion"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: discussion. Two views must both be represented at their strongest, then one personal verdict — three moves the examiner counts separately.",
        "View A: the mandatory return — collaboration, apprenticeship of junior staff and shared culture.",
        "View B: permanent home working — concentration, a wider talent pool, inclusion and erased commutes.",
        "The verdict should appear in paragraph one and be defended again after both views, never hidden until the end.",
      ],
    },
    {
      heading: "Step 2 — Choose the verdict",
      notes: [
        "Chosen verdict: neither extreme wins — the deciding distinction is the kind of work, so a deliberately split week beats both camps.",
        "Weighing line to prepare: collective work needs rooms, solitary work needs silence — that distinction assigns each view its territory.",
        "Avoid the fence-sitting trap: 'both are right' must become 'each is right about different work', which is a real position.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: one clause per camp with its motive, then the verdict — flexibility by type of work.",
        "Body 1: the return case — mentoring, the table-versus-video-calls comparison, the unplanned conversation.",
        "Body 2: the home case — concentration, output figures, the talent pool, carers and disabled workers, erased commutes.",
        "Body 3: the weighing — the paired list assigning each kind of work its place, then the employer behaviour that follows.",
        "Conclusion: each camp holds half the truth; the right response is scheduling for both. Language bank: 'the case for', 'answers with', 'on balance'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Few arguments inside modern companies burn as hot as the question of where work should happen. Watching their offices stand half-empty, some employers have ordered everyone back to their desks; watching output survive or even improve, others have closed buildings and told staff to work from home for good. In my view, both camps are defending something real, and the wisest employers will refuse to choose between them: the office for work that needs other people, the home for work that needs quiet.",
      "The case for the return is strongest wherever work is made with other people. New staff learn a craft by sitting near experienced colleagues, and a design argued out across a table in one afternoon can swallow a week of scheduled video calls. Then there is the unplanned conversation — the problem half-solved at the coffee machine, the idea borrowed from the next desk — which comes to nobody working alone. Managers also worry, not always wrongly, that a scattered workforce slowly loses its shared habits, and that juniors in particular receive tasks without ever being shown how the tasks are done.",
      "The case for home answers with evidence of a different kind. Many knowledge workers report longer unbroken stretches of concentration, and several large firms have published figures showing output steady or improved outside the office. The talent argument may matter even more: a company that hires only within commuting distance of one building competes for people against every firm with a laptop policy, and it excludes carers and workers with disabilities who do the job superbly but cannot travel daily. Add the hours and carbon that erased commutes save, and the return-to-office case looks narrower still.",
      "Both views, in my opinion, are right about different kinds of work, which is why the quarrel between them is misplaced. Drafting, coding and analysis need silence and belong at home; onboarding, brainstorms and difficult conversations need a room and belong in an office. The employers I would trust are those who split the week deliberately and explain which days are for what, rather than those who pick one side for the sake of simplicity.",
      "In conclusion, the return-to-office camp and the permanent-home camp each hold half the truth. Work is neither purely collective nor purely solitary, and the companies that will do best are those that stop choosing between the two and start scheduling for both.",
    ],
    wordCount: 396,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — both views, early verdict",
        analysis:
          "Gives each camp its motive in one clause, then takes a clear third position immediately — flexibility by type of work — so the essay never reads as a neutral tour of two opinions.",
      },
      {
        role: "Body 1 — the return case",
        analysis:
          "Argues from collaboration and apprenticeship: the table-versus-video-calls comparison, the coffee-machine conversation, the junior learning a craft — each example a different mechanism rather than a repetition of the last.",
      },
      {
        role: "Body 2 — the home case",
        analysis:
          "Leads with concentration and output evidence, then widens to the talent-pool and inclusion arguments, closing on the commute savings that shrink the opposing case further.",
      },
      {
        role: "Body 3 — the weighing",
        analysis:
          "Performs the judgement with a paired list that assigns each kind of work its place, then names the employer behaviour that follows from it — the move a discussion essay is graded on.",
      },
      {
        role: "Conclusion — the verdict in fresh words",
        analysis:
          "Two sentences only: each camp holds half the truth, and the right response is scheduling for both. The 'purely collective nor purely solitary' echo restates the weighing without repeating it.",
      },
    ],
    vocabulary: [
      { term: "for good", note: "An idiom meaning permanently; it marks the second camp's decisiveness before the essay tests it." },
      { term: "the unplanned conversation", note: "Names the office's most defended product — accidental collaboration — as a single countable thing." },
      { term: "a laptop policy", note: "A compressed noun phrase for remote-friendly hiring; it embodies the talent argument in three words." },
      { term: "commuting distance", note: "The invisible boundary that defines one firm's talent pool; naming it makes the exclusion argument concrete." },
      { term: "for the sake of simplicity", note: "An evaluative phrase that accuses the extreme positions of laziness rather than error." },
      { term: "half the truth", note: "The verdict in three words: both sides are partly right, which is why neither deserves to win outright." },
    ],
    grammar: [
      {
        feature: "Colon-delivered matched pair",
        example: "the office for work that needs other people, the home for work that needs quiet",
        note: "The colon presents the thesis as two mirrored noun phrases, compressing the whole essay plan into one line.",
      },
      {
        feature: "'Wherever' clause of condition",
        example: "The case for the return is strongest wherever work is made with other people",
        note: "'Wherever' turns a place into a condition, quietly building the kind-of-work logic the verdict will rest on.",
      },
      {
        feature: "Semi-colon antithesis in the weighing",
        example: "Drafting, coding and analysis need silence and belong at home; onboarding, brainstorms and difficult conversations need a room",
        note: "The semi-colon balances two parallel clauses, each a list, so the judgement reads as a sorting rather than an opinion.",
      },
      {
        feature: "Dash-enclosed definition of a benefit",
        example: "the problem half-solved at the coffee machine, the idea borrowed from the next desk",
        note: "The dashes insert two concrete instances inside the abstract noun they define, giving 'unplanned conversation' a physical setting.",
      },
    ],
    coherence:
      "The introduction's matched pair — 'the office for work that needs other people, the home for work that needs quiet' — is the essay's spine: body one proves the first half, body two the second, and the weighing paragraph converts the pair into a policy. Reference chains ('the return', 'the case for home', 'the quarrel') keep the two camps distinct, and the conclusion's 'scheduling for both' answers the introduction's 'refuse to choose' in fresh words.",
    alternativeExpressions: [
      { insteadOf: "for good", use: "on a permanent basis" },
      { insteadOf: "the unplanned conversation", use: "the exchanges nobody schedules" },
      { insteadOf: "a laptop policy", use: "rules that allow remote hiring" },
      { insteadOf: "half the truth", use: "only part of the picture" },
      { insteadOf: "scheduling for both", use: "planning the week around both settings" },
    ],
    commonMistakes: [
      {
        wrong: "Home working is obviously the best and offices are obsolete.",
        right: "In my view, both camps are defending something real, and the wisest employers will refuse to choose.",
        reason: "A discussion essay that argues only one side leaves half the task undone; the examiner marks representation of both views separately from the opinion.",
      },
      {
        wrong: "On the one hand, on the other hand, on the other hand, another point is also.",
        right: "The case for the return is strongest wherever work is made with other people.",
        reason: "Mechanical linker strings replace argument; paragraph openings should advance a claim, not merely signal a turn.",
      },
      {
        wrong: "Everyone knows that working from home is more productive, it is a fact.",
        right: "Several large firms have published figures showing output steady or improved outside the office.",
        reason: "'Everyone knows' and the comma splice that follows are both penalised; claims need sources or examples, and sentences need boundaries.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "commute", partOfSpeech: "noun", meaning: "The journey between home and the workplace." },
    { word: "to scatter", partOfSpeech: "verb", meaning: "To spread people or things widely apart." },
    { word: "concentration", partOfSpeech: "noun", meaning: "Focused attention on one task for a period." },
    { word: "carer", partOfSpeech: "noun", meaning: "Someone who looks after a relative who is ill, young or disabled." },
    { word: "onboarding", partOfSpeech: "noun", meaning: "The process of settling and training a new employee." },
    { word: "commuting distance", partOfSpeech: "noun phrase", meaning: "The area from which daily travel to a workplace is realistic." },
    { word: "for good", partOfSpeech: "idiom", meaning: "Permanently, with no plan to return." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 5. Discussion — where should children grow up?
// ---------------------------------------------------------------------------

const at2DiscussionCityVsCountry: WritingBankTask = {
  slug: "ielts-wb-at2-discussion-city-vs-country",
  title: "Where should children grow up?",
  channel: "academic",
  taskType: "task-2",
  family: "discussion",
  tier: "practice",
  topic: "society",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Some families believe that children are better off growing up in the countryside, while others think that a big city offers them far greater opportunities. Discuss both these views and give your own opinion.",
  requirements: [
    {
      key: "both-views",
      description:
        "Gives each setting a full paragraph at its strongest, with benefits specific to children rather than to adults.",
      keywords: ["countryside", "city", "children", "space", "schools", "opportunities", "childhood"],
    },
    {
      key: "own-opinion",
      description:
        "States a clear personal verdict early and defends it in a dedicated weighing paragraph before concluding.",
      keywords: ["I side", "in my view", "my own", "opinion", "on balance", "for me"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Extends each benefit with a reason, an explanation and a concrete example from childhood.",
      keywords: ["for example", "for instance", "play", "museums", "neighbours", "because", "such as"],
    },
    {
      key: "weighing-move",
      description:
        "Weighs the two settings explicitly, giving a reason why one set of benefits matters more for children in particular.",
      keywords: ["on balance", "whereas", "while", "both", "however", "timing", "later"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: discussion. Two views about children's interests, and the verdict must choose between them rather than average them away.",
        "View A: the countryside — space, safety, community and the developmental gifts of outdoor play.",
        "View B: the big city — schools, institutions, diversity and the spectacle of working life.",
        "The trap is a conclusion that says 'both are nice'; the opinion must take a side and defend it with a principle.",
      ],
    },
    {
      heading: "Step 2 — Choose the verdict",
      notes: [
        "Chosen verdict: side with the countryside, on the timing principle.",
        "Decisive argument: a city's advantages stay available to the adult the child becomes, while a rural childhood's gifts exist only during childhood.",
        "The timing principle is the essay's distinctive move — most candidates argue about which place is 'better' in general.",
        "Concession to keep: city children gain ease with difference and widened ambition — the verdict must survive hearing that at full strength.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: one clause per camp, then the verdict with the timing principle stated in embryo.",
        "Body 1: the countryside — bodily freedom, the named community, the research on outdoor play.",
        "Body 2: the city — institutions within a bus ride, ease with difference, the spectacle of trades widening ambition.",
        "Body 3: the weighing by timing — what waits against what expires, ending on 'not refunded later'.",
        "Conclusion: the countryside to be young, the city to arrive afterwards. Language bank: 'whereas', 'remains available', 'retrospectively'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Where a child should grow up is a question more families now weigh seriously, and opinion divides along a familiar line. One camp prizes the countryside's space, safety and slower rhythm; the other points to the sheer density of opportunity that only a big city can offer a young mind. While I accept that cities open doors, I side on balance with the countryside: most of what a city gives can be collected later in life, whereas the gifts of a rural childhood are available only while the child is young.",
      "The countryside's case begins with what it allows children to do with their own bodies and time. There is room to roam, water to splash in and trees to climb, and children given that freedom tend to carry its confidence through life. Communities are smaller and life moves more slowly: neighbours know the local children by name, and traffic is light enough that a ten-year-old can walk to a friend's house unaccompanied. Researchers studying outdoor play have repeatedly linked it to stronger motor skills, calmer behaviour and longer attention spans — findings that sit oddly beside a childhood spent moving between classrooms, screens and supervised activities.",
      "The city's case is not thin. Its schools are usually better resourced, its libraries, museums, swimming pools and theatres lie within a single bus ride, and a child raised among strangers, languages and unfamiliar food learns an ease with difference that a sheltered upbringing rarely produces. City children also watch adults practise every trade from surgery to stage lighting, and that daily spectacle quietly widens the range of futures a child dares to imagine.",
      "What settles the weighing, for me, is timing. Nearly everything a city offers a child — the schools, the networks, the cultural wealth, the professional spectacle — remains fully available at eighteen or twenty-five, when a young adult can move towards it deliberately and put it to use. The countryside's gifts are different in kind: unstructured play, daily contact with nature and the run of a safe community cannot be claimed retrospectively by a grown person. A childhood spent indoors between lessons and screens, however well intentioned, is not refunded later.",
      "In conclusion, both places raise children successfully, and city parents need not despair. But where the choice is genuinely open, the countryside is the better place to be young, and the city the better place to arrive afterwards. Opportunity keeps; childhood does not.",
    ],
    wordCount: 402,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — both views, one verdict",
        analysis:
          "Presents each camp in a single clause, then announces the deciding idea at once — availability over time — so the essay's distinctive argument is visible before either view is developed.",
      },
      {
        role: "Body 1 — the countryside at full strength",
        analysis:
          "Argues from the body outward: freedom first, then the named community and the unaccompanied walk, then the research on outdoor play, closing on the contrast with a scheduled urban childhood.",
      },
      {
        role: "Body 2 — the city at full strength",
        analysis:
          "Gives the opposing view its genuine force — resources, institutions, diversity of people — and ends on widened ambition, the benefit hardest to argue against, so the weighing that follows has real work to do.",
      },
      {
        role: "Body 3 — the weighing by timing",
        analysis:
          "The decisive move: sorts the two sets of benefits into those that wait (the city's) and those that expire (the countryside's), then prices the loss with 'is not refunded later'.",
      },
      {
        role: "Conclusion — the verdict distilled",
        analysis:
          "Two short sentences gather the weighing and hand the reader the closing antithesis — 'Opportunity keeps; childhood does not' — which is the timing argument compressed to four words.",
      },
    ],
    vocabulary: [
      { term: "sheer density of opportunity", note: "'Sheer' concedes the scale of the city's case before the essay contests its timing — a fairness move that strengthens the verdict." },
      { term: "room to roam", note: "An alliterative phrase for unstructured space; it names the countryside's core gift in three words." },
      { term: "an ease with difference", note: "The sociological benefit of urban diversity stated as one calm noun phrase — the city's subtlest argument." },
      { term: "the daily spectacle", note: "Reframes the city's visible working life as a show a child watches, linking exposure to imagination." },
      { term: "retrospectively", note: "The adverb that powers the weighing: what cannot be claimed after the fact cannot be postponed." },
      { term: "not refunded", note: "A commerce metaphor for an unrecoverable loss; it converts the timing argument into a price." },
    ],
    grammar: [
      {
        feature: "Contrastive 'whereas' clause",
        example: "most of what a city gives can be collected later in life, whereas the gifts of a rural childhood are available only while the child is young",
        note: "'Whereas' places the two half-truths in one sentence — the discussion essay's core weighing structure.",
      },
      {
        feature: "Dash-appended evaluative comment",
        example: "stronger motor skills, calmer behaviour and longer attention spans — findings that sit oddly beside a childhood spent moving between classrooms",
        note: "The dash turns the research list into a judgement by attaching a comment clause to it.",
      },
      {
        feature: "Semi-colon antithesis with ellipsis",
        example: "Opportunity keeps; childhood does not.",
        note: "The semi-colon balances two clipped clauses; the omitted verb in the second half does the compressing.",
      },
      {
        feature: "Modal passive of availability",
        example: "cannot be claimed retrospectively by a grown person",
        note: "Modal passives state what is and is not possible — the grammar of the essay's whole availability argument.",
      },
    ],
    coherence:
      "The introduction plants the timing principle ('collected later in life… only while the child is young'), the body paragraphs test each view against it, and the weighing paragraph returns to it by name. The keep-and-expire opposition runs beneath the whole essay — 'carries its confidence through life', 'remains fully available', 'cannot be claimed retrospectively', 'not refunded' — so the final antithesis is the thread's last, shortest expression rather than a decorative flourish.",
    alternativeExpressions: [
      { insteadOf: "room to roam", use: "open space to explore freely" },
      { insteadOf: "an ease with difference", use: "comfortable with people unlike themselves" },
      { insteadOf: "the daily spectacle", use: "the constant display of working life" },
      { insteadOf: "cannot be claimed retrospectively", use: "cannot be recovered once childhood ends" },
      { insteadOf: "Opportunity keeps; childhood does not", use: "Opportunity can wait; a childhood cannot" },
    ],
    commonMistakes: [
      {
        wrong: "The countryside is boring and cities are exciting, so city children are always happier.",
        right: "While I accept that cities open doors, I side on balance with the countryside.",
        reason: "Asserting one setting's superiority without representing the other leaves half the discussion undone and reads as prejudice rather than argument.",
      },
      {
        wrong: "Both views are correct and every family should choose what they like.",
        right: "I side on balance with the countryside, because a city's advantages remain available in adulthood.",
        reason: "A verdict that agrees with everything answers nothing; the task asks for a personal opinion, which requires taking a side and defending it.",
      },
      {
        wrong: "Countryside children play outside every days and become more healthier.",
        right: "Children given that freedom tend to carry its confidence through life.",
        reason: "Double comparatives and agreement slips ('every days', 'more healthier') are exactly the errors that keep Lexical Resource and Grammatical Range in the middle bands.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to roam", partOfSpeech: "verb", meaning: "To move about freely over a wide area." },
    { word: "unaccompanied", partOfSpeech: "adjective", meaning: "Without an adult or guardian present." },
    { word: "motor skills", partOfSpeech: "noun", meaning: "The body's abilities to move and coordinate precisely." },
    { word: "attention span", partOfSpeech: "noun", meaning: "The length of time a person can concentrate." },
    { word: "sheltered", partOfSpeech: "adjective", meaning: "Protected from difficult or unfamiliar experience." },
    { word: "retrospectively", partOfSpeech: "adverb", meaning: "Looking back at or applying something to the past." },
    { word: "to refund", partOfSpeech: "verb", meaning: "To give back what was paid; here, to restore what was lost." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 6. Discussion — science for every student?
// ---------------------------------------------------------------------------

const at2DiscussionScienceSubjects: WritingBankTask = {
  slug: "ielts-wb-at2-discussion-science-subjects",
  title: "Science for every student?",
  channel: "academic",
  taskType: "task-2",
  family: "discussion",
  tier: "practice",
  topic: "education",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Some people believe that science should remain a compulsory school subject until the age of 18, while others argue that students should be free to abandon it earlier in order to focus on their strengths. Discuss both these views and give your own opinion.",
  requirements: [
    {
      key: "both-views",
      description:
        "Represents the compulsion case and the freedom case at full strength before judging between them.",
      keywords: ["compulsory", "freedom", "some", "others", "argue", "believe", "view"],
    },
    {
      key: "civic-and-career-reasons",
      description:
        "Develops the compulsion case with civic arguments about citizens and voters, not only economic ones about jobs.",
      keywords: ["citizens", "voters", "democracy", "climate", "vaccination", "graph", "evidence"],
    },
    {
      key: "freedom-case-fairness",
      description:
        "Takes the freedom case seriously: motivation, individual talent and the cost of coerced study.",
      keywords: ["motivation", "talent", "specialise", "enthusiasm", "resistance", "timetable", "craft"],
    },
    {
      key: "own-opinion",
      description:
        "Gives a clear personal verdict that resolves, rather than merely repeats, the dilemma between the two views.",
      keywords: ["in my view", "my position", "opinion", "I support", "I believe", "closer"],
    },
    {
      key: "verdict-conclusion",
      description:
        "Closes with the verdict restated in fresh words and its underlying principle named.",
      keywords: ["in conclusion", "therefore", "overall", "literacy", "judgement", "conclusion"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: discussion. The two views share a premise — science matters — and differ over who decides and until when.",
        "The strongest essays notice that 'science' itself is ambiguous: specialist physics and chemistry, or general scientific literacy for citizens.",
        "The verdict must resolve the collision, not sit above it; a principle the examiner can test is the reward for the harder route.",
      ],
    },
    {
      heading: "Step 2 — Choose the verdict",
      notes: [
        "Chosen verdict: keep science compulsory to the end of school, but redefined — a universal course in reasoning for citizens, not forced specialisation.",
        "The compulsion case: democratic judgement depends on citizens who can read evidence; early exit also closes career doors quietly.",
        "The freedom case to honour fully: teenagers differ, coerced study fades after the exam, and the timetable is zero-sum.",
        "The redefinition is the resolution: claim-testing can be compulsory without boring the historian, while specialisms remain choices.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: name the collision of two goods, align with one camp, signal the redefinition that will resolve it.",
        "Body 1: the compulsion case — the electorate's toolkit, the mood-versus-evidence antithesis, the four careers that need foundations.",
        "Body 2: the freedom case — the historian and the young cook, the thinned classroom, the zero-sum timetable.",
        "Body 3: the redefinition — interrogating claims rather than balancing equations; the slim universal course.",
        "Conclusion: compulsory the way literacy is compulsory. Language bank: 'dissolves', 'interrogate claims', 'zero-sum'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "How long the state should compel the study of science is a genuinely hard question, because two legitimate goods collide: a democracy's need for scientifically literate citizens and a teenager's need to shape an education around emerging strengths. Some therefore want science kept compulsory until 18; others would release students from it as soon as the core curriculum allows. My position lies closer to the first camp, but with the subject redefined: science should be compulsory to the end of school, though as literacy for citizens rather than as forced specialisation.",
      "The argument for compulsion is civic before it is professional. Today's voters are asked to judge climate targets, vaccination campaigns, food safety and algorithms that curate their news, and an electorate that cannot read a graph, weigh a risk or tell correlation from causation will make those judgements by mood rather than evidence. Compulsion also protects the undecided: at fifteen, few students know that meteorology, nursing, data science and pharmacy all begin with the same foundations, so an early exit quietly closes doors that cannot easily be reopened at twenty.",
      "The opposing case deserves its full strength. Teenagers differ, and a timetable that marches a gifted historian or a committed young cook through three further years of physics serves neither: the reluctant student learns little, while the enthusiast's class is thinned by resistance. Research on motivation has long shown that coerced study rarely outlives the examination hall, and a school week is zero-sum: every compulsory hour is taken from music, languages or craft, whose loss is just as real.",
      "In my view, the disagreement largely dissolves once 'science' is specified. What a democracy requires of everyone is not the ability to balance equations but the ability to interrogate claims — to ask for the sample, the control group, the margin of error. A slim, rigorous course in that kind of reasoning, taught through climate, health and technology in the news, could be compulsory to 18 without boring the historian, while full physics, chemistry and biology remained specialisms for those who choose them.",
      "In conclusion, I support compulsory science until the end of school, but compulsory in the way literacy is compulsory: universal, modest and aimed at judgement rather than content. The deeper failure would be releasing citizens into a scientific century unable to read its language.",
    ],
    wordCount: 386,
    bandEstimate: "Band 8.5–9.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the dilemma named, the verdict hinted",
        analysis:
          "States the collision of goods precisely, aligns with one camp, and signals the redefinition that will resolve the clash — an advanced move that sets up the fourth paragraph.",
      },
      {
        role: "Body 1 — the compulsion case",
        analysis:
          "Leads with the civic argument (graphs, risks, correlation) rather than jobs, then adds the closed-doors point with four concrete careers; the mood-versus-evidence antithesis carries the paragraph.",
      },
      {
        role: "Body 2 — the freedom case",
        analysis:
          "Grants the opposition its strongest form — the historian and the cook, the thinned classroom, the zero-sum timetable — showing the essay can argue both sides before judging either.",
      },
      {
        role: "Body 3 — the redefinition",
        analysis:
          "The decisive move: specifies 'science' as claim-testing rather than content, and shows the slim universal course escaping every objection raised in the previous paragraph.",
      },
      {
        role: "Conclusion — the principle named",
        analysis:
          "Compresses the verdict into the literacy analogy — universal, modest, aimed at judgement — and closes on the principle that earns it: reading the language of a scientific century.",
      },
    ],
    vocabulary: [
      { term: "scientifically literate", note: "The civic standard the compulsion case rests on; 'literate' rather than 'trained' shifts the debate from careers to citizenship." },
      { term: "by mood rather than evidence", note: "The antithesis that prices an unscientific electorate in five words." },
      { term: "thinned by resistance", note: "A classroom image for the cost coerced students impose on willing ones — the freedom case's subtlest point." },
      { term: "zero-sum", note: "The technical term for a fixed budget in which one gain must be another's loss; it dignifies the timetable argument." },
      { term: "interrogate claims", note: "The redefinition in two words: science as questioning rather than content." },
      { term: "dissolves", note: "A chemistry metaphor for an argument that disappears once its terms are defined — apt for this subject." },
    ],
    grammar: [
      {
        feature: "Parallel infinitives of ability",
        example: "cannot read a graph, weigh a risk or tell correlation from causation",
        note: "Three parallel verb phrases define the citizen's toolkit without repeating the auxiliary — compact and rhythmically strong.",
      },
      {
        feature: "Colon-unpacked abstract noun",
        example: "two legitimate goods collide: a democracy's need for scientifically literate citizens and a teenager's need to shape an education",
        note: "The colon announces that the abstract noun will be unpacked immediately — a structure repeated when the verdict is specified.",
      },
      {
        feature: "Balanced 'neither' sentence with colon and 'while'",
        example: "serves neither: the reluctant student learns little, while the enthusiast's class is thinned by resistance",
        note: "One policy is shown harming both parties in a single sentence — the fairest sentence in the essay.",
      },
      {
        feature: "'Could'-conditional for a proposal",
        example: "could be compulsory to 18 without boring the historian",
        note: "'Could' presents the redesigned course as a real option to be weighed, not a decree — the grammar of curriculum design.",
      },
    ],
    coherence:
      "The introduction's promise — a verdict 'with the subject redefined' — is the thread: body one and body two stage the clash at full strength, and the third body paragraph resolves it by defining the term both camps left vague. The definition vocabulary ('specified', 'requires of everyone is not… but…') returns in the conclusion as the literacy analogy, so the ending reads as the introduction's promise kept rather than a new idea bolted on.",
    alternativeExpressions: [
      { insteadOf: "collide", use: "pull against each other" },
      { insteadOf: "by mood rather than evidence", use: "on feeling instead of facts" },
      { insteadOf: "zero-sum", use: "a fixed budget of hours" },
      { insteadOf: "interrogate claims", use: "question the evidence behind statements" },
      { insteadOf: "dissolves", use: "falls away" },
    ],
    commonMistakes: [
      {
        wrong: "Science is very important so everybody must study it until 18, no discussion.",
        right: "My position lies closer to the first camp, but with the subject redefined.",
        reason: "Insisting without arguing ignores the task's demand to represent both views; the verdict must be reached through the debate, not announced before it.",
      },
      {
        wrong: "Students who don't like science are just lazy and stupid.",
        right: "A timetable that marches a gifted historian or a committed young cook through three further years of physics serves neither.",
        reason: "Contempt for one side of a discussion reads as bias; representing the opposition generously is what distinguishes the higher bands.",
      },
      {
        wrong: "Science should be compulsory because of the economy, the society, the culture and the environment etc.",
        right: "An electorate that cannot read a graph, weigh a risk or tell correlation from causation will make those judgements by mood.",
        reason: "A list of domains is not development; one mechanism explained — how illiteracy corrupts democratic judgement — outranks four labels.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "compulsory", partOfSpeech: "adjective", meaning: "Required by law or rule, with no opt-out." },
    { word: "electorate", partOfSpeech: "noun", meaning: "All the people entitled to vote in a country." },
    { word: "causation", partOfSpeech: "noun", meaning: "The act of causing; the link between cause and effect." },
    { word: "to curate", partOfSpeech: "verb", meaning: "To select and organise content, as algorithms do for news feeds." },
    { word: "coerced", partOfSpeech: "adjective", meaning: "Done under pressure or force rather than willingness." },
    { word: "specialism", partOfSpeech: "noun", meaning: "A branch of a subject studied in depth." },
    { word: "margin of error", partOfSpeech: "noun phrase", meaning: "The stated range within which a measurement may be inaccurate." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 7. Advantages and disadvantages — banning single-use plastics
// ---------------------------------------------------------------------------

const at2AdvantagesPlasticBan: WritingBankTask = {
  slug: "ielts-wb-at2-advantages-plastic-ban",
  title: "Banning single-use plastics",
  channel: "academic",
  taskType: "task-2",
  family: "advantages-disadvantages",
  tier: "practice",
  topic: "environment",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Some governments have banned single-use plastic items such as carrier bags, straws and disposable food packaging. Do the advantages of such bans outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-verdict",
      description:
        "Answers the weighing question directly — which side is heavier — in the introduction and holds the verdict to the end.",
      keywords: ["outweigh", "advantages", "disadvantages", "in my view", "on balance", "trade"],
    },
    {
      key: "advantages-developed",
      description:
        "Develops the environmental gains with mechanisms and measurable outcomes rather than slogans.",
      keywords: ["waste", "rivers", "sea", "microplastics", "litter", "beaches", "centuries"],
    },
    {
      key: "disadvantages-honest",
      description:
        "Gives the disadvantages real coverage: substitute footprints, business costs and accessibility for disabled consumers.",
      keywords: ["substitutes", "cotton", "cost", "businesses", "disabled", "exemptions", "straws"],
    },
    {
      key: "weighing-move",
      description:
        "Performs an explicit weighing that explains why one side wins even though the other side is real.",
      keywords: ["on balance", "transitional", "permanent", "however", "while", "solve"],
    },
    {
      key: "academic-register",
      description:
        "Keeps academic register: measured tone, no contractions, no campaign slogans or exclamation marks.",
      keywords: ["moreover", "however", "therefore", "although", "whereas", "in conclusion"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: advantages and disadvantages with a weighing question — 'outweigh' demands a conclusion about which side is heavier, not a neutral list.",
        "The topic is fixed: bans on single-use items specifically, not plastic in general or recycling policy.",
        "The verdict is due twice: signalled in the introduction, then defended again after the disadvantages have been heard in full.",
      ],
    },
    {
      heading: "Step 2 — Choose the verdict",
      notes: [
        "Chosen verdict: the advantages comfortably outweigh the disadvantages.",
        "Decisive distinction to prepare: the ban's costs are transitional and self-correcting, while the harms it prevents are permanent and compounding.",
        "Disadvantages to state honestly: substitute footprints (the cotton tote), retooling costs, and flexible straws that disabled consumers depend on.",
        "Each disadvantage must be answered in the weighing, not buried — an honest ledger is the essay's credibility.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: the banned items as an opening list, then the verdict with its measure — transitional costs against permanent harms.",
        "Body 1: the advantages — the arithmetic of waste, escape-rivers-microplastics mechanism, then measurable falls in collected litter.",
        "Body 2: the disadvantages in rising order of seriousness, ending on the disabled consumer's objection.",
        "Body 3: the weighing — each cost tested against permanence and shown to dissolve into refinements.",
        "Conclusion: the trade named, then the paired recommendation — refine, not regret. Language bank: 'compounds', 'transitional', 'ledger'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Carrier bags, straws, coffee cups, food trays: a growing number of governments have legislated against the whole family of single-use plastics, and the results are now visible in shops on several continents. In my view the advantages of these bans comfortably outweigh the disadvantages. The costs they create are real but transitional, while the harms they prevent are permanent.",
      "The advantages begin with the arithmetic of waste. A carrier bag is used for minutes yet persists for centuries, and the items the bans target are precisely those most likely to escape bins, travel down rivers and end up in the sea, where they fragment into microplastics that re-enter the food chain. Where bans have run longest, the effects are measurable: countries that charged for or prohibited bags have recorded steep falls in the numbers collected from rivers and beaches, and municipal crews report less litter to gather at public expense. Few environmental policies deliver results that are visible, cheap and quick at the same time.",
      "The disadvantages deserve an honest hearing. Substitutes carry footprints of their own — a cotton tote must be reused dozens of times before it beats the plastic bag it replaced, and the paper straw has become shorthand for well-meant annoyance. Small businesses face retooling costs when packaging rules change overnight, and disabled consumers objected, rightly, when the flexible straws they depend on disappeared without a workable alternative.",
      "On the weighing, however, the comparison is between costs that fade and harms that accumulate. The substitute problem is an argument for designing better substitutes, not for returning to an item that never decomposes; the business costs fall once and are typically absorbed within a season; and the needs of disabled consumers are now met by exemptions in most carefully drafted laws. Every disadvantage of the ban, in short, is a problem the ban's own evolution can solve, whereas the disadvantage of no ban compounds for centuries.",
      "In conclusion, single-use plastic bans exchange a brief period of inconvenience for a lasting reduction in permanent waste, and that is a trade any honest ledger should accept. The reasonable response to their imperfections is to refine them, not to regret them.",
    ],
    wordCount: 360,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the verdict with its measure",
        analysis:
          "Opens with the banned items as a list, then answers the weighing question at once with a doubled qualification — costs transitional, harms permanent — that the third body paragraph will prove.",
      },
      {
        role: "Body 1 — the advantages",
        analysis:
          "Builds the case from time spans (minutes against centuries) to mechanism (escape, rivers, microplastics) to measured outcomes (river and beach counts), ending on the rare triple virtue: visible, cheap and quick.",
      },
      {
        role: "Body 2 — the disadvantages",
        analysis:
          "Concedes in rising order of seriousness — tote footprints, annoyance, business costs, the disabled consumer — proving the weighing is honest enough to state the other side's best points in full.",
      },
      {
        role: "Body 3 — the weighing",
        analysis:
          "Tests each admitted disadvantage against the transitional-versus-permanent distinction and shows each dissolving into refinements — better substitutes, one-off costs, exemptions — so the verdict is earned rather than asserted.",
      },
      {
        role: "Conclusion — the trade named",
        analysis:
          "Compresses the weighing into a single exchange — inconvenience for permanent waste — and closes with a paired recommendation, 'refine, not regret', that follows from the argument.",
      },
    ],
    vocabulary: [
      { term: "the arithmetic of waste", note: "Frames the environmental case as a calculation of time spans rather than a matter of sentiment." },
      { term: "persists for centuries", note: "The verb 'persists' names the problem precisely: not existence but endurance." },
      { term: "shorthand for well-meant annoyance", note: "A compact cultural reference that concedes the paper straw's reputation without conceding the policy." },
      { term: "footprints of their own", note: "Extends the carbon-footprint metaphor to substitutes; it is the disadvantage side's best evidence." },
      { term: "compounds", note: "A finance verb for harm that builds on itself; it anchors the permanent-versus-transitional weighing." },
      { term: "an honest ledger", note: "An accounting metaphor that judges the ban as a book-keeper would: costs set against lasting gains." },
    ],
    grammar: [
      {
        feature: "Contrastive 'yet' clause",
        example: "A carrier bag is used for minutes yet persists for centuries",
        note: "'Yet' joins two clauses whose time expressions clash, compressing the whole advantage case into eight words.",
      },
      {
        feature: "'Where' clause introducing evidence",
        example: "Where bans have run longest, the effects are measurable",
        note: "'Where' presents the evidence as a condition, keeping the paragraph's claims attached to observable cases.",
      },
      {
        feature: "Paired gerund phrases in a frame",
        example: "an argument for designing better substitutes, not for returning to an item that never decomposes",
        note: "The balanced frame rejects one response and proposes the other in a single breath — the grammar of the weighing move.",
      },
      {
        feature: "Dash-appended example",
        example: "Substitutes carry footprints of their own — a cotton tote must be reused dozens of times before it beats the plastic bag it replaced",
        note: "The dash attaches the instance directly to the claim, conceding evidence without weakening the verdict.",
      },
    ],
    coherence:
      "The transitional-versus-permanent distinction announced in the introduction organises everything that follows: body one proves the permanence of the harm, body two admits the costs, and the weighing paragraph tests each cost against the distinction and watches it dissolve. Time expressions thread the essay together ('minutes', 'centuries', 'overnight', 'within a season', 'compounds for centuries'), and the conclusion's 'refine, not regret' mirrors the introduction's 'real but transitional'.",
    alternativeExpressions: [
      { insteadOf: "comfortably outweigh", use: "are clearly heavier than" },
      { insteadOf: "the arithmetic of waste", use: "the simple mathematics of rubbish" },
      { insteadOf: "shorthand for well-meant annoyance", use: "a byword for clumsy good intentions" },
      { insteadOf: "compounds for centuries", use: "builds up decade after decade" },
      { insteadOf: "an honest ledger", use: "any fair accounting" },
    ],
    commonMistakes: [
      {
        wrong: "Plastic is destroying the planet!!! We must ban everything plastic now!!!",
        right: "In my view the advantages of these bans comfortably outweigh the disadvantages.",
        reason: "Campaign slogans and exclamation marks breach academic register; a weighing question needs a measured verdict, not a protest banner.",
      },
      {
        wrong: "There are advantages and disadvantages to everything, so it is impossible to decide.",
        right: "On the weighing, the comparison is between costs that fade and harms that accumulate.",
        reason: "'Outweigh' questions cannot be answered with a shrug; refusing to weigh is a Task Response failure, not a show of balance.",
      },
      {
        wrong: "The disadvantages are that people don't like it and it's annoying and also expensive.",
        right: "A cotton tote must be reused dozens of times before it beats the plastic bag it replaced.",
        reason: "Vague stacked complaints convince no one; one quantified disadvantage earns more credit than three impressions.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "single-use", partOfSpeech: "adjective", meaning: "Made to be used once and then thrown away." },
    { word: "to decompose", partOfSpeech: "verb", meaning: "To break down naturally into harmless substances." },
    { word: "microplastics", partOfSpeech: "noun", meaning: "Tiny plastic fragments that pollute water and food chains." },
    { word: "substitute", partOfSpeech: "noun", meaning: "A replacement that does the same job as something else." },
    { word: "footprint", partOfSpeech: "noun", meaning: "The total environmental impact of making and using a thing." },
    { word: "exemption", partOfSpeech: "noun", meaning: "An official release from a rule that binds everyone else." },
    { word: "to retool", partOfSpeech: "verb", meaning: "To change a business's equipment or processes for new requirements." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 8. Advantages and disadvantages — the growth of online shopping
// ---------------------------------------------------------------------------

const at2AdvantagesOnlineShopping: WritingBankTask = {
  slug: "ielts-wb-at2-advantages-online-shopping",
  title: "The growth of online shopping",
  channel: "academic",
  taskType: "task-2",
  family: "advantages-disadvantages",
  tier: "practice",
  topic: "economics",
  difficulty: 2,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "In many countries, shopping online has become more popular than buying from physical stores. What are the advantages and disadvantages of this trend for consumers and for local communities? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "both-sides",
      description:
        "Presents real advantages and real disadvantages, giving each a full paragraph rather than a passing mention.",
      keywords: ["advantages", "disadvantages", "however", "while", "benefits", "drawbacks", "costs"],
    },
    {
      key: "both-groups",
      description:
        "Covers the two named groups — consumers and local communities — across the essay, not just one of them.",
      keywords: ["consumers", "customers", "shoppers", "community", "communities", "town", "local"],
    },
    {
      key: "developed-paragraphs",
      description:
        "Supports each point with a reason, an explanation and a familiar example from shopping life.",
      keywords: ["for example", "for instance", "because", "prices", "delivery", "high street", "jobs"],
    },
    {
      key: "evaluative-conclusion",
      description:
        "Ends with an overall evaluation that weighs the two sides rather than leaving them perfectly level.",
      keywords: ["on balance", "overall", "in my view", "outweigh", "conclusion", "answer"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: advantages and disadvantages without a formal weighing phrase, but a concluding evaluation is still expected.",
        "The question names two groups — consumers and local communities — so each side must be judged for both, which is the task's real difficulty.",
        "Register: academic but concrete; everyday shopping vocabulary is appropriate at this level, provided the sentences stay varied.",
      ],
    },
    {
      heading: "Step 2 — Choose the evaluation",
      notes: [
        "Chosen evaluation: the advantages are larger, because they reach people the high street never served well.",
        "Consumer advantages to develop: price comparison, range, opening hours, and convenience for those with children, mobility limits or no car.",
        "Community disadvantages to state fairly: lost trade, lost town-centre jobs, plus consumer costs like packaging waste and unverifiable quality.",
        "The answer to the loss: rebuild town centres around what the internet cannot deliver, rather than trying to reverse the trend.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: state the trend plainly, name the two groups, give the evaluation early.",
        "Body 1: consumer advantages — price, range, hours, then the reclassification of convenience as small freedoms.",
        "Body 2: community disadvantages first, then the consumer's own costs so both groups appear on this side too.",
        "Conclusion: weigh the sides, explain why the consumer case wins, and recommend adaptation over reversal.",
        "Language bank: comparatives ('cheaper', 'wider'), trade nouns ('trade', 'jobs', 'traffic'), and the closing reframe ('what the internet cannot deliver').",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Buying with a phone has become the default for millions of households, and in many countries more shopping now happens online than in physical stores. This change brings obvious gains for consumers and equally obvious losses for the places they live in. In my view, the advantages are the larger, but communities will have to work to stop them from costing too much.",
      "For the consumer, the advantages are not hard to list. Prices can be compared across dozens of sellers within seconds, and that competition keeps them low. The range of goods dwarfs any high street, from unusual clothing sizes to rare hobby parts, and the shop never closes, which matters greatly to people who work long or irregular hours. Shopping is also quicker in its own way: there is no travelling, no queueing and no hunting for a parking space. For customers with small children, limited mobility or no car, these conveniences are not luxuries but small freedoms.",
      "The disadvantages weigh more heavily on communities. Every purchase moved online takes trade away from local shops, and once a town loses its bookshop, its shoe shop and its chemist, it begins to lose the reason people visit at all. The jobs that disappear with those shops often suited students and part-time workers particularly well. There are costs for consumers too: delivery vans add traffic and packaging waste, and it is far harder to judge the quality of a coat through a photograph than through a shop rail.",
      "On balance, I think the advantages for consumers — lower prices, wider choice and easier access — outweigh the disadvantages, because they reach people the high street never served well. But the loss to communities is real, and the sensible answer is not to reverse a trend no law could reverse, but to rebuild town centres around what the internet cannot deliver: cafés, clinics, markets and places to meet.",
    ],
    wordCount: 316,
    bandEstimate: "Band 8.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the trend and the shape of the answer",
        analysis:
          "States the trend in plain terms, names the two groups the question asks about, and gives the evaluation early so the body paragraphs can be read as evidence for it.",
      },
      {
        role: "Body 1 — the consumer advantages",
        analysis:
          "Works through price, range and opening hours, then closes by reclassifying convenience as 'small freedoms' for the customers the high street served badly — the paragraph's most persuasive move.",
      },
      {
        role: "Body 2 — the disadvantages",
        analysis:
          "Follows the damage from shop to street to job, then turns to the consumer's own costs — vans and packaging, photographs versus shop rails — so both named groups appear on this side too.",
      },
      {
        role: "Conclusion — the evaluation and its condition",
        analysis:
          "Weighs the sides explicitly, explains why the consumer case wins, and answers the community loss with adaptation rather than reversal, ending on a concrete list of what survives online competition.",
      },
    ],
    vocabulary: [
      { term: "the default", note: "A computing term for the option used unless changed; it frames online buying as the automatic, unchosen choice." },
      { term: "dwarfs", note: "A strong comparative verb: the high street is not merely smaller but made to look small by contrast." },
      { term: "takes trade away", note: "Plain economic phrasing for the mechanism of high-street decline — cause and effect in four words." },
      { term: "through a photograph", note: "A concrete stand-in for the general information problem of buying goods one has not handled." },
      { term: "what the internet cannot deliver", note: "The closing reframe: competition on the high street's own terms, in services rather than goods." },
    ],
    grammar: [
      {
        feature: "Tripartite 'no + gerund' list",
        example: "there is no travelling, no queueing and no hunting for a parking space",
        note: "Three parallel phrases turn convenience into rhythm — a simple structure that reads as control rather than repetition.",
      },
      {
        feature: "'It is + comparative' spotlight",
        example: "it is far harder to judge the quality of a coat through a photograph than through a shop rail",
        note: "The dummy subject fronts the judgement, and paired prepositional phrases hold the comparison open at the end.",
      },
      {
        feature: "Reduced relative clause inside a claim",
        example: "the sensible answer is not to reverse a trend no law could reverse",
        note: "The embedded clause ('no law could reverse') gives the reason inside the recommendation itself, saving a whole sentence.",
      },
    ],
    coherence:
      "The two groups named in the introduction — consumers and communities — organise the whole essay: the first body paragraph grants the consumer case, the second concedes the community case while adding consumer costs, and the conclusion weighs the two in the order they were introduced. Trade and traffic imagery runs through the essay ('takes trade away', 'delivery vans add traffic', 'what the internet cannot deliver'), tying the economic argument to its physical consequences.",
    alternativeExpressions: [
      { insteadOf: "has become the default", use: "is now the normal choice" },
      { insteadOf: "dwarfs any high street", use: "makes any shopping street look small" },
      { insteadOf: "small freedoms", use: "genuine everyday advantages" },
      { insteadOf: "weigh more heavily on communities", use: "fall mostly on local people" },
      { insteadOf: "what the internet cannot deliver", use: "services no website can provide" },
    ],
    commonMistakes: [
      {
        wrong: "Online shopping is the best thing ever and shops should all close.",
        right: "In my view, the advantages are the larger, but communities will have to work to stop them from costing too much.",
        reason: "One-sided enthusiasm ignores the question, which explicitly asks about disadvantages for communities as well as consumers.",
      },
      {
        wrong: "Online shopping has advantages and also disadvantages in today's modern world.",
        right: "Prices can be compared across dozens of sellers within seconds, and that competition keeps them low.",
        reason: "Announcing that both sides exist develops nothing; every sentence after the introduction should add a mechanism, an example or a judgement.",
      },
      {
        wrong: "All people like online shopping because it is more better and convenient.",
        right: "For customers with small children, limited mobility or no car, these conveniences are not luxuries but small freedoms.",
        reason: "'More better' is a double comparative and 'all people' an overgeneralisation; precise groups and precise claims earn the higher bands.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "consumer", partOfSpeech: "noun", meaning: "A person who buys goods or services." },
    { word: "high street", partOfSpeech: "noun", meaning: "The main shopping street of a British town." },
    { word: "to dwarf", partOfSpeech: "verb", meaning: "To make something seem small by comparison." },
    { word: "to queue", partOfSpeech: "verb", meaning: "To wait in a line of people." },
    { word: "mobility", partOfSpeech: "noun", meaning: "The ability to move around easily." },
    { word: "packaging", partOfSpeech: "noun", meaning: "The boxes, bags and wrapping goods are delivered in." },
    { word: "to reverse", partOfSpeech: "verb", meaning: "To turn a trend back the way it came." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 9. Advantages and disadvantages — health-tracking apps
// ---------------------------------------------------------------------------

const at2AdvantagesHealthApps: WritingBankTask = {
  slug: "ielts-wb-at2-advantages-health-apps",
  title: "Health-tracking apps",
  channel: "academic",
  taskType: "task-2",
  family: "advantages-disadvantages",
  tier: "practice",
  topic: "health",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 2400,
  prompt:
    "Millions of people now use apps on their phones to track their exercise, sleep, heart rate and diet. Do the advantages of monitoring one's health in this way outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-verdict",
      description:
        "Answers the weighing question directly in the introduction and states the condition the verdict depends on.",
      keywords: ["outweigh", "advantages", "disadvantages", "in my view", "provided", "on balance"],
    },
    {
      key: "advantages-developed",
      description:
        "Develops the gains with mechanisms — awareness, feedback loops, early warnings, clinical records — rather than enthusiasm.",
      keywords: ["awareness", "feedback", "steps", "sleep", "records", "doctor", "habits"],
    },
    {
      key: "disadvantages-honest",
      description:
        "Gives the costs real coverage: anxiety, data privacy and motivation distorted by gamification.",
      keywords: ["anxiety", "privacy", "data", "companies", "gamification", "worry", "wrongly"],
    },
    {
      key: "weighing-move",
      description:
        "Performs an explicit weighing that explains why the advantages win and on what terms they do so.",
      keywords: ["on balance", "however", "while", "curable", "condition", "settings", "contrast"],
    },
    {
      key: "verdict-conclusion",
      description:
        "Restates the verdict in fresh words with its condition attached, and recommends the sensible practice.",
      keywords: ["in conclusion", "used", "weekly", "therefore", "overall", "guesswork"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: advantages and disadvantages with a weighing question; the verdict must say which side is heavier and may attach a condition.",
        "The topic is health tracking specifically — exercise, sleep, heart rate, diet — not smartphones or social media in general.",
        "A conditioned verdict ('outweigh, provided…') is legitimate and often stronger than a bare one, as long as the condition is defended later.",
      ],
    },
    {
      heading: "Step 2 — Choose the verdict",
      notes: [
        "Chosen verdict: the advantages outweigh for most users, provided the numbers are treated as a guide rather than a score.",
        "Advantages to develop: revealed habits, compounding micro-changes, life-saving rhythm alerts, and records that help clinicians.",
        "Disadvantages to state honestly: tracking that curdles into anxiety, health data sold onwards, and motives inverted by gamification.",
        "Decisive weighing: the harms depend on how the app is held and can be switched off; the benefits exist no other way.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs and the language",
      notes: [
        "Introduction: the devices as a paired image, the two reactions, then the verdict with its condition.",
        "Body 1: the advantages — two misjudged-habit portraits, then feedback loops, alerts and clinical records.",
        "Body 2: the disadvantages — anxiety and wrong numbers, the data market, the uncharged battery ending.",
        "Body 3: the weighing by curability — harms that settings can fix against benefits nothing else supplies.",
        "Conclusion: the condition turned into three habits — watched weekly, doubted occasionally, owned firmly. Language bank: 'feedback loops', 'gamification', 'curable'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "A wristwatch now counts steps, grades sleep and takes an electrocardiogram, while the phone beside it logs every meal and stairway. Some people find this constant measurement empowering; others find it quietly oppressive. My view is that the advantages of health-tracking apps outweigh the disadvantages for most users, provided the numbers are treated as a gentle guide rather than a score to be obeyed.",
      "The advantages begin with awareness, because most people misjudge their own habits. An office worker convinced she is active is shown, on one screen, nine sedentary hours; a sleeper who blames his afternoons on the weather sees a year of six-hour nights. Small feedback loops then produce small changes that compound: closed rings nudge users towards staircases, standing reminders break up long sittings, and irregular-rhythm alerts have sent people to doctors in time to prevent strokes. There is a quieter advantage, too: a patient who arrives at a clinic with a year of readings gives the doctor far more to work with than one reporting a guess.",
      "The disadvantages deserve equal honesty. A minority of users slide from tracking into anxiety, eating or exercising to satisfy an app rather than a body, and clinicians increasingly report patients distressed by numbers the device read wrongly. Privacy is the quieter cost: health data is valuable, flows towards companies whose incentives are advertising rather than medicine, and once sold cannot be recalled. Gamification can also invert motives, until a walk counts only when the battery is charged.",
      "Why do the advantages still win? Because most of the harms are curable by how the tool is held, while the benefits are not otherwise available. Anxiety fades when notifications are switched off and trends are read weekly; privacy is a matter of settings and regulation; a dead battery should end the walk, not the habit. Awareness, by contrast, cannot be summoned without measurement, and a stroke prevented by a timely alert has no counterweight on the cost side of the ledger.",
      "In conclusion, these apps make the invisible measurable, and for most users the measurement helps. Used loosely — watched weekly, doubted occasionally, owned firmly — they tilt the balance of health in their users' favour, and the sensible response to their flaws is better habits and better rules, not a return to guesswork.",
    ],
    wordCount: 381,
    bandEstimate: "Band 8.5–9.0 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the verdict with its condition",
        analysis:
          "Opens with the devices as a paired image, stages the two reactions in one balanced sentence, and answers the weighing question with an attached condition — 'a gentle guide rather than a score' — that the third body paragraph will defend.",
      },
      {
        role: "Body 1 — the advantages",
        analysis:
          "Starts from the psychology of misjudged habits with two recognisable portraits, then compounding micro-changes, life-saving alerts, and the clinical-records argument — four advantages, four distinct mechanisms.",
      },
      {
        role: "Body 2 — the disadvantages",
        analysis:
          "Concedes the anxiety cases, the misread numbers, the data market and the inverted motives, with the uncharged-battery image carrying the last point; the honesty here is what makes the weighing credible.",
      },
      {
        role: "Body 3 — the weighing by curability",
        analysis:
          "The decisive distinction: harms that depend on usage and can be switched off, against benefits that exist no other way; the ledger image closes the arithmetic.",
      },
      {
        role: "Conclusion — the verdict and the practice",
        analysis:
          "Restates the guide-not-score condition as three adverbial habits — watched weekly, doubted occasionally, owned firmly — and ends with a paired recommendation: habits and rules, not guesswork.",
      },
    ],
    vocabulary: [
      { term: "empowering", note: "One of the introduction's paired adjectives; it states the enthusiasts' case in a single word." },
      { term: "quietly oppressive", note: "The paired adjective for the sceptics' case — 'quietly' concedes that the harm is subtle rather than dramatic." },
      { term: "feedback loops", note: "The systems term for self-reinforcing cycles of measurement and adjustment; it explains why small nudges compound." },
      { term: "invert motives", note: "Names gamification's deepest cost: the app's goal replaces the body's as the reason for the action." },
      { term: "curable", note: "The weighing's load-bearing adjective: harms that depend on handling can be treated; missing awareness cannot." },
      { term: "guesswork", note: "The closing noun for the alternative to tracking; it prices what abandoning the apps would cost." },
    ],
    grammar: [
      {
        feature: "'Provided' conditional attached to a verdict",
        example: "provided the numbers are treated as a gentle guide rather than a score to be obeyed",
        note: "'Provided' attaches the condition directly to the verdict — the exact grammar an 'outweigh' question rewards.",
      },
      {
        feature: "Semi-colon balancing two portraits",
        example: "An office worker convinced she is active is shown, on one screen, nine sedentary hours; a sleeper who blames his afternoons on the weather sees a year of six-hour nights",
        note: "Two mini-narratives prove the same point from opposite habits; the semi-colon keeps them parallel and distinct.",
      },
      {
        feature: "Fronted causal answer to a rhetorical question",
        example: "Because most of the harms are curable by how the tool is held, while the benefits are not otherwise available.",
        note: "The fragment is deliberate and controlled: the question mark licenses it, and the fronted 'Because' lands the weighing at once.",
      },
      {
        feature: "Dash-enclosed list of adverbial habits",
        example: "Used loosely — watched weekly, doubted occasionally, owned firmly — they tilt the balance of health",
        note: "Three participial phrases convert the condition into practice, compressing the essay's advice into six words.",
      },
    ],
    coherence:
      "The condition stated in the introduction — guide, not score — is tested everywhere: the advantages paragraph shows the guide working, the disadvantages paragraph shows the score taking over, and the weighing paragraph shows that the difference lies in how the app is held. The measurement metaphor threads the essay ('counts', 'grades', 'measurable', 'read wrongly', 'guesswork'), and the conclusion's three adverbial habits convert the introduction's condition into practice, closing the frame it opened.",
    alternativeExpressions: [
      { insteadOf: "quietly oppressive", use: "a subtle burden" },
      { insteadOf: "feedback loops", use: "cycles of measurement and response" },
      { insteadOf: "invert motives", use: "turn the reason for exercising upside down" },
      { insteadOf: "has no counterweight", use: "cannot be matched on the other side" },
      { insteadOf: "a return to guesswork", use: "going back to estimating blindly" },
    ],
    commonMistakes: [
      {
        wrong: "Health apps are 100% good and there is literally no downside.",
        right: "My view is that the advantages outweigh the disadvantages for most users, provided the numbers are treated as a gentle guide.",
        reason: "Absolute claims collapse under a single counter-example; a conditioned verdict is both more honest and easier to defend.",
      },
      {
        wrong: "The disadvantage is privacy and also anxiety and also addiction and also wrong data.",
        right: "Health data is valuable, flows towards companies whose incentives are advertising rather than medicine, and once sold cannot be recalled.",
        reason: "Stacking 'also' lists four labels without explaining one; a developed disadvantage needs its mechanism shown.",
      },
      {
        wrong: "In conclusion, as I have already said before, to sum up, the advantages outweigh.",
        right: "In conclusion, these apps make the invisible measurable, and for most users the measurement helps.",
        reason: "Recycled summary formulas add nothing; the conclusion should restate the verdict with its condition, in fresh words.",
      },
    ],
  },
  levelSamples: [],
  vocabularyBank: [
    { word: "to track", partOfSpeech: "verb", meaning: "To record the progress or level of something over time." },
    { word: "sedentary", partOfSpeech: "adjective", meaning: "Involving little movement or exercise." },
    { word: "to compound", partOfSpeech: "verb", meaning: "To build on itself over time, growing larger." },
    { word: "gamification", partOfSpeech: "noun", meaning: "Adding game features, such as rewards, to an activity." },
    { word: "notification", partOfSpeech: "noun", meaning: "An alert a phone or app displays to its user." },
    { word: "to recall (data)", partOfSpeech: "verb", meaning: "To take back information once it has been shared." },
    { word: "ledger", partOfSpeech: "noun", meaning: "A book of accounts; here, a metaphor for weighing costs and gains." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// The batch — PROMPT 54 Academic Task 2 practice expansion, file C
// ---------------------------------------------------------------------------

export const at2CPracticeTasks: WritingBankTask[] = [
  at2OpinionAiTranslation, // opinion, technology, difficulty 3
  at2OpinionArtsFunding, // opinion, culture, difficulty 4
  at2OpinionUniforms, // opinion, education, difficulty 2
  at2DiscussionRemoteWork, // discussion, workplace, difficulty 3
  at2DiscussionCityVsCountry, // discussion, society, difficulty 3
  at2DiscussionScienceSubjects, // discussion, education, difficulty 4
  at2AdvantagesPlasticBan, // advantages-disadvantages, environment, difficulty 3
  at2AdvantagesOnlineShopping, // advantages-disadvantages, economics, difficulty 2
  at2AdvantagesHealthApps, // advantages-disadvantages, health, difficulty 3
];
