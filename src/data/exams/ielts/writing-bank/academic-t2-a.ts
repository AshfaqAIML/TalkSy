/**
 * Academic Task 2 bank — file A (PROMPT 46, Part C).
 *
 * The first four Academic Task 2 essay tasks: an opinion essay on public
 * funding of museums, a discussion essay on fully online degrees, an
 * advantages-and-disadvantages essay on platform freelancing, and a
 * problem-solution essay on fast fashion. Every task is an original
 * assignment with full model answer, planning notes, the eight-element
 * analysis, a topic vocabulary bank and level samples whose band comments
 * are educational estimates, never official scores.
 *
 * There is no visual and no letter situation here: in Task 2 the prompt
 * itself is the essay question, and the discipline changes with it — a
 * stated position, every part of the question addressed, body paragraphs
 * built from reason, explanation and example, and a conclusion that
 * restates the verdict in new words.
 */

import type { WritingBankTask } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. Opinion essay — public funding of museums and galleries
// ---------------------------------------------------------------------------

export const at2OpinionMuseums: WritingBankTask = {
  slug: "ielts-wb-at2-opinion-museums",
  title: "Opinion essay — public funding of museums and galleries",
  channel: "academic",
  taskType: "task-2",
  family: "opinion",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Some people argue that governments should stop spending public money on museums and art galleries, because only a small proportion of the population ever visits them. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-position",
      description: "States a clear position with its extent in the introduction, and holds the same view through every paragraph.",
      keywords: ["agree", "disagree", "believe", "in my view", "position", "argue", "largely"],
    },
    {
      key: "answer-the-claim",
      description: "Answers the claim on its own ground: tests whether visitor numbers can ever measure a museum's value.",
      keywords: ["visitors", "attendance", "visit", "footfall", "public money", "funding"],
    },
    {
      key: "developed-paragraphs",
      description: "Extends each body paragraph with a reason, an explanation and a concrete example or comparison.",
      keywords: ["for example", "for instance", "because", "such as", "library", "schools"],
    },
    {
      key: "academic-register",
      description: "Keeps academic register throughout: no contractions, no announcement phrases, no conversational asides.",
      keywords: ["moreover", "however", "although", "therefore", "whereas", "in conclusion"],
    },
    {
      key: "verdict-conclusion",
      description: "Closes with a conclusion that restates the verdict in fresh words and adds no new argument.",
      keywords: ["in conclusion", "to conclude", "overall", "therefore", "in my view", "cannot agree"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question (1 minute)",
      notes: [
        "Family: opinion. One claim to judge, and the task phrase is 'to what extent', so the strength of your agreement must be stated, not only its direction.",
        "The claim has two parts: the policy (stop the funding) and the reason offered for it (low attendance). Strong essays attack the reason, which is the weaker half.",
        "Register: academic and mostly third person; first person is welcome for the position itself.",
      ],
    },
    {
      heading: "Step 2 — Choose the position and the reasons",
      notes: [
        "Chosen position: largely disagree — the hedge leaves room for one concession without abandoning the verdict.",
        "Reason 1: attendance is the wrong measure; museums are civic infrastructure preserved for the future.",
        "Reason 2: the subsidy returns value beyond the doors — school education and tourism spending.",
        "Planned concession: where a gallery genuinely serves nobody, its funding formula can be reviewed — that keeps the verdict defensible.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs",
      notes: [
        "Introduction: paraphrase the claim, state the verdict, and preview both reasons in one sentence.",
        "Body 1: the wrong measure — the library comparison, the century-long duty of preservation, then digital and touring reach.",
        "Body 2: the wider returns — school workshops as the classroom's extension, tourism recouping the grant, closing on the false-economy judgement.",
        "Conclusion: restate the verdict in fresh words; end on widening access, never on a new argument.",
      ],
    },
    {
      heading: "Step 4 — Language bank",
      notes: [
        "Position stems: 'I largely disagree', 'in my view', 'I would argue that'.",
        "Extent hedges: 'to a great extent', 'with one reservation', 'almost entirely'.",
        "Concession kit: 'although', 'admittedly', 'that said', 'where a gallery serves nobody'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "It is sometimes argued that public money should no longer be spent on museums and art galleries, because only a small share of the population ever passes through their doors. I largely disagree with this claim. In my view, admission figures measure the wrong kind of value, and these institutions return far more to society than their queues suggest, so the state should keep funding them while finding fairer ways to widen access.",
      "The first reason to reject the attendance test is that a museum is not a shop selling a product; it is civic infrastructure, closer to a public library than to a cinema. Nobody proposes closing a library because few members visited it during one quiet month. Collections are also preserved for the benefit of future generations as much as for today's visitors: a national gallery safeguards paintings that will still be studied in a century, a duty that does not shrink because this year's footfall was modest. Even the raw numbers understate reach: touring exhibitions carry objects to regional towns, and digitised collections serve viewers who never buy a ticket.",
      "Beyond that, the subsidy earns practical returns that a narrowly commercial reading ignores. School groups use museums as extensions of the classroom: in my country, national institutions run free workshops in which children handle historical objects, an experience no textbook can reproduce. Cultural tourism works the same way, since visitors who arrive for a collection stay in local hotels and spend in nearby restaurants, so much of the grant quietly returns to the treasury through taxes raised elsewhere. Cutting the subsidy to save money would therefore be a false economy, weakening exactly the attractions that pull spending into a city.",
      "In conclusion, I cannot agree that thin visitor numbers justify withdrawing public funds from museums and galleries. They educate the young, protect a shared inheritance and quietly support local economies in ways a turnstile could never record. The sensible response to quiet galleries is to bring more people through the doors, not to close the doors themselves.",
    ],
    wordCount: 340,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the position stated",
        analysis:
          "Paraphrases the claim without borrowing its wording, then answers 'to what extent' with a calibrated verdict — 'largely disagree' — and previews both reasons in a single sentence, so the reader knows the whole route before body one begins.",
      },
      {
        role: "Body 1 — the wrong measure",
        analysis:
          "Attacks the claim's premise rather than the policy alone: the library comparison reframes museums as infrastructure, the 'duty that does not shrink' sentence separates preservation from popularity, and the closing move widens 'visitors' to include touring and digital audiences.",
      },
      {
        role: "Body 2 — the wider returns",
        analysis:
          "Adds the practical case the attendance test ignores — education through school workshops, economics through tourism — and closes on the 'false economy' judgement, which converts the two examples into a policy argument.",
      },
      {
        role: "Conclusion — the verdict restated",
        analysis:
          "Restates the disagreement in fresh words, gathers the essay's three benefits into one sentence, and ends with a recommendation that follows from the argument instead of introducing one.",
      },
    ],
    vocabulary: [
      { term: "civic infrastructure", note: "Reframes the museum as a public service the city relies on, like a library — the essay's central reclassification." },
      { term: "footfall", note: "The commercial word for visitor numbers; using it signals the claim's own narrow yardstick before rejecting it." },
      { term: "understate reach", note: "Separates raw attendance from true audience — the pivot on which the whole rebuttal turns." },
      { term: "a narrowly commercial reading", note: "Names and dismisses the opposing logic in three words, a compact evaluative phrase." },
      { term: "false economy", note: "The standard term for a saving that costs more elsewhere; it judges the policy in one noun phrase." },
      { term: "a shared inheritance", note: "Heritage language that lifts the argument from economics to obligation across generations." },
    ],
    grammar: [
      {
        feature: "Semi-colon between independent clauses",
        example: "a museum is not a shop selling a product; it is civic infrastructure",
        note: "The semi-colon equates two full clauses without a conjunction — compact and formal; a comma here would be a splice.",
      },
      {
        feature: "Impersonal passive frame",
        example: "It is sometimes argued that public money should no longer be spent on museums and art galleries",
        note: "Distances the claim from any named holder — the standard academic way to report a view the essay is about to contest.",
      },
      {
        feature: "Hypothetical 'would' evaluating policy",
        example: "Cutting the subsidy to save money would therefore be a false economy",
        note: "The gerund subject names the action and 'would' prices its unreal future consequence — the grammar of policy argument.",
      },
      {
        feature: "Present simple passive for standing facts",
        example: "Collections are also preserved for the benefit of future generations",
        note: "General truths take present simple; the passive keeps the institution, not a person, as the sentence's topic.",
      },
    ],
    coherence:
      "The verdict 'largely disagree' is the spine: the introduction previews both reasons, body one delivers the first, body two the second, and the conclusion recombines them. Paragraph openings advance the argument ('The first reason…', 'Beyond that…'), reference chains ('the attendance test', 'the subsidy') carry key nouns forward, and the door and turnstile imagery returns at the close, tying the ending back to the claim being rejected.",
    alternativeExpressions: [
      { insteadOf: "I largely disagree", use: "my disagreement is qualified, not total" },
      { insteadOf: "passes through their doors", use: "crosses their thresholds / sets foot inside them" },
      { insteadOf: "civic infrastructure", use: "a public service the city could not replace" },
      { insteadOf: "footfall was modest", use: "attendance was thin / few people crossed the threshold" },
      { insteadOf: "a false economy", use: "a saving that costs more than it saves" },
      { insteadOf: "bring more people through the doors", use: "raise attendance by design, not by accident" },
    ],
    commonMistakes: [
      {
        wrong: "In this essay, I will discuss the topic of museums and give my opinion.",
        right: "It is sometimes argued that public money should no longer be spent on museums. I largely disagree.",
        reason: "The 'In this essay I will' announcement is a memorised formula examiners penalise; the essay should open inside the debate with the position already taken.",
      },
      {
        wrong: "I completely agree 100% that museums are useless.",
        right: "I largely disagree, because attendance measures the wrong kind of value.",
        reason: "'To what extent' demands a stated degree; an absolute verdict with no reasoning reads as a memorised position rather than a considered one.",
      },
      {
        wrong: "Museums are educational. They are also cultural. They are moreover historical.",
        right: "School groups use museums as extensions of the classroom, an experience no textbook can reproduce.",
        reason: "Assertion chains without examples cannot extend ideas; Task Response above Band 6 requires support the reader can picture.",
      },
      {
        wrong: "To conclude, as I have already said, I disagree, like I said in the beginning.",
        right: "In conclusion, I cannot agree that thin visitor numbers justify withdrawing public funds.",
        reason: "A conclusion that recycles the introduction word for word sounds memorised; the verdict must be rebuilt in fresh words.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Some people think the government should not give money to museums and art galleries, because only few people visit them every year. In my opinion, I am disagree with this idea, because museums give many benefits to the society, not only for the visitors.",
        "Firstly, museums are very important for the education. Children can learn history by real objects, not only from the books in a class. For example, in my city there is a science museum, and every year the schools visit it, and my younger brother remembered the dinosaurs better than a lesson in school.",
        "Secondly, the museums help the economy of the city. The tourists come to see famous galleries and they spend their money in the hotels and restaurants near it. Also the museums keep the culture and history of the country safe for the next generation. If the government stop the funding, less tourists will come, and the city will lose the income from them.",
        "In conclusion, I disagree strongly that the government should stop the funding of museums. They are good for education and also for the economy, so the state should continue to support them, and maybe make the tickets cheaper for the students and old people.",
      ],
      wordCount: 204,
      justification: [
        { criterion: "Task Response", note: "A consistent disagree position runs from introduction to conclusion and both supporting ideas are present, but at 204 words the essay sits well under the 250-word floor, and 'I am disagree' wobbles the position language rather than the position itself." },
        { criterion: "Coherence and Cohesion", note: "A clear four-paragraph plan with 'Firstly / Secondly' signposting, but cohesion leans on repeated 'and' chains, and paragraph three mixes tourism with heritage without a linking step between them." },
        { criterion: "Lexical Resource", note: "Topic words are adequate ('funding', 'tourists', 'income'), while 'the education', 'the society' and 'less tourists' show the article and quantifier slips that typify Band 6; vocabulary is serviceable rather than precise." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences are mostly accurate, but agreement errors recur ('If the government stop', 'less tourists will come') and range stays narrow; the errors are visible in most paragraphs yet rarely block meaning." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Critics of public spending on culture sometimes argue that museums and galleries no longer earn their budgets, because only a fraction of the population crosses their thresholds in a given year. I disagree with this position for the most part. Visitor counts are a poor proxy for cultural value, and the money invested in these institutions flows back to the public in less visible ways.",
        "The case against funding rests on an assumption that a museum should be judged like any other attraction, by counting entries. This seems to me a category error. A museum is closer to a library or a park: a service the public owns collectively, and one whose purpose is preservation as much as entertainment. A national collection's crowd figures do not measure how many schoolchildren study its Egyptian material online, nor how many regional venues receive its travelling exhibits. Judged by reach rather than by door count, most institutions serve audiences several times larger than their turnstiles record.",
        "There is also a practical case that the arithmetic of subsidy usually ignores. Cities that host major collections attract travellers who sleep and eat locally, so part of the grant re-enters the economy as hotel and restaurant tax. Meanwhile school programmes run inside museums give children the kind of contact with real objects that a classroom cannot offer. If the state withdrew its support, it would save one line of the budget while shrinking several others, which is the definition of a false economy.",
        "On the whole, then, I reject the argument that thin attendance justifies ending public funding for museums and galleries. Their worth shows up in places a counter cannot see — in classrooms, in tourism income, and in the archive kept intact for later generations — and the better response to quiet galleries is smarter pricing and outreach, not closure.",
      ],
      wordCount: 304,
      justification: [
        { criterion: "Task Response", note: "The position is stated in the first paragraph, qualified honestly ('for the most part'), and extended through the proxy-versus-reach distinction; at 304 words it clears the floor comfortably, so the criterion turns on development, which is full." },
        { criterion: "Coherence and Cohesion", note: "Progression is carried by argument stages ('The case against funding rests…', 'There is also a practical case…'), with reference chains ('their thresholds', 'its travelling exhibits') doing the linking work." },
        { criterion: "Lexical Resource", note: "Precise, natural collocation — 'a poor proxy for cultural value', 'category error', 'the arithmetic of subsidy' — with only occasional near-misses ('crowd figures' beside the more expected 'attendance figures')." },
        { criterion: "Grammatical Range and Accuracy", note: "A wide, largely error-free range: counterfactual conditionals ('If the state withdrew its support, it would save…'), passives, and dash-joined appositives; sustained control consistent with the top of the band." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "to fund", partOfSpeech: "verb", meaning: "To pay for an institution from public money rather than sales." },
    { word: "attendance", partOfSpeech: "noun", meaning: "The number of people who visit a place over a period." },
    { word: "footfall", partOfSpeech: "noun", meaning: "A commercial word for visitor numbers, used of shops and venues." },
    { word: "civic infrastructure", partOfSpeech: "noun", meaning: "Services a city needs to function, such as libraries and museums." },
    { word: "false economy", partOfSpeech: "noun", meaning: "A saving that causes larger losses somewhere else." },
    { word: "heritage", partOfSpeech: "noun", meaning: "The culture and traditions inherited from the past." },
    { word: "outreach", partOfSpeech: "noun", meaning: "Work done to bring a service to people who do not come to you." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Discussion essay — fully online university study
// ---------------------------------------------------------------------------

export const at2DiscussionRemoteStudy: WritingBankTask = {
  slug: "ielts-wb-at2-discussion-remote-study",
  title: "Discussion essay — fully online university study",
  channel: "academic",
  taskType: "task-2",
  family: "discussion",
  difficulty: 3,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "Some people believe that universities should now deliver their degree courses entirely online, while others feel that a qualification loses much of its value if students never experience life on a campus. Discuss both these views and give your own opinion.",
  requirements: [
    {
      key: "both-views",
      description: "Represents both views at their strongest, devoting a real paragraph to each before any judgement.",
      keywords: ["some", "others", "view", "argue", "believe", "campus", "online"],
    },
    {
      key: "own-opinion",
      description: "Gives a clear personal verdict on the debate, signalled in the introduction and defended at the end.",
      keywords: ["in my view", "I believe", "opinion", "my own", "side with", "agree"],
    },
    {
      key: "developed-paragraphs",
      description: "Extends every paragraph with a reason, an explanation and a concrete example.",
      keywords: ["for example", "for instance", "because", "such as", "laboratory", "society"],
    },
    {
      key: "academic-register",
      description: "Keeps academic register: no contractions, no 'In this essay I will' announcements, no rhetorical pile-ups.",
      keywords: ["moreover", "however", "although", "therefore", "whereas", "on balance"],
    },
    {
      key: "verdict-conclusion",
      description: "Concludes by restating the personal verdict in fresh words, weighing rather than wavering.",
      keywords: ["in conclusion", "on balance", "to conclude", "overall", "weigh"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: discussion. Two views must both be represented at their strongest, then one personal verdict — three moves the examiner counts separately.",
        "View A: fully online delivery — cheaper, replayable, reaches distant learners.",
        "View B: the degree loses value without campus — practical training and the formative years happen there.",
      ],
    },
    {
      heading: "Step 2 — Choose your verdict",
      notes: [
        "Chosen verdict: side with the campus camp, but keep one reservation for remote learners — absolute verdicts are easier to defeat than qualified ones.",
        "Weighing line to prepare: content can travel; formative experience cannot. That asymmetry decides the essay.",
        "The verdict appears in paragraph one and is defended again in the weighing paragraph — never hidden until the end.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs",
      notes: [
        "Introduction: one clause per view, then 'In my view' with the verdict.",
        "Body 1: view A at full strength — cost, replay, reach — closing on the 'better than no degree' concession.",
        "Body 2: view B at full strength — laboratories, societies, shared flats — with the swimming simile carrying the abstraction.",
        "Body 3: the weighing — concede the lifeline cases, argue the asymmetry, land the verdict.",
        "Conclusion: two sentences; echo the introduction's promise without repeating it.",
      ],
    },
    {
      heading: "Step 4 — Language bank",
      notes: [
        "View stems: 'the opposing view answers that…', 'supporters of remote delivery point to…'.",
        "Weighing stems: 'on balance', 'where X is true, Y matters more', 'I side with…'.",
        "Concession stems: 'admittedly', 'that said', 'for mature students and carers'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Some educationalists now argue that universities should deliver their degree courses entirely online, while others feel that a qualification loses much of its value if the student never experiences life on a campus. In my view, the second camp is closer to the truth: remote delivery can carry a course's content, but much of a degree's worth is produced on campus, among people.",
      "The case for moving fully online deserves a fair hearing, because it rests on real gains. Teaching at scale is far cheaper without lecture theatres and halls of residence; recorded sessions can be replayed, which suits students who work or care for family; and uploaded teaching can reach learners who could never afford to relocate. For a disciplined student with no campus nearby, a remote degree is plainly better than no degree at all.",
      "The opposing view answers that a university teaches more than a syllabus, and it is here that the argument gains force. Scientists are trained in laboratories and engineers in workshops, and neither can be streamed; a chemistry graduate who has never run an experiment has studied the subject rather as someone reads about swimming. Campus life also builds the softer half of a graduate. Running a society teaches organisation, a shared flat teaches negotiation, and friendships formed in person often become the professional network of the following decade.",
      "On balance, I side with the defenders of campus, though not absolutely. The content of a course can travel down a wire, and for mature students, carers and learners far from any city, the online version is a lifeline rather than a loss. But the formative experiences — the seminar argument, the laboratory bench, the team that builds a project together — do not compress into a video call. A degree's worth lies in those experiences as much as in its credits, so the fully online version is a cheaper copy.",
      "In conclusion, online delivery makes university cheaper and more reachable, but the campus remains where much of the education actually happens. The wisest design, in my view, is a degree whose content travels and whose community stays.",
    ],
    wordCount: 351,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — both views, one verdict",
        analysis:
          "Compresses each view into a single clause, then takes sides immediately with 'In my view' — a discussion essay that hides its opinion until paragraph four reads as indecision, and the examiner credits the early verdict.",
      },
      {
        role: "Body 1 — the case for fully online",
        analysis:
          "Gives the first view its strongest form — cost, replayability, reach — through one semi-colon-chained sentence, then closes on the concession that keeps the weighing humane: for the student with no campus nearby, remote beats nothing.",
      },
      {
        role: "Body 2 — the case for campus",
        analysis:
          "Answers with the argument the first view cannot answer: practical training that cannot be streamed, then the 'softer half' — societies, shared flats, networks — with the swimming simile carrying the abstraction.",
      },
      {
        role: "Body 3 — the weighing",
        analysis:
          "Performs the actual judgement: concedes the lifeline cases, then argues the asymmetry — content travels, formative experience does not — and lands the verdict in the final clause, 'a cheaper copy'.",
      },
      {
        role: "Conclusion — the verdict in new words",
        analysis:
          "Two sentences only: what online delivery does well, and where the value actually lives. The closing contrast ('content travels and whose community stays') echoes the introduction's promise without repeating it.",
      },
    ],
    vocabulary: [
      { term: "deserves a fair hearing", note: "Signals fair representation before judgement — the discussion essay's key fairness move." },
      { term: "travel down a wire", note: "A compact metaphor for remote transmission; it sets up the asymmetry argument that decides the essay." },
      { term: "the softer half of a graduate", note: "Names the unexaminable skills — organisation, negotiation — in one memorable noun phrase." },
      { term: "a lifeline rather than a loss", note: "The concession that keeps the verdict honest; parallel nouns sharpen the contrast." },
      { term: "formative experiences", note: "The load-bearing term of the winning side: experiences that shape the person, not the transcript." },
      { term: "a cheaper copy", note: "The verdict compressed to three words — evaluative, final, and earned by the paragraph before it." },
    ],
    grammar: [
      {
        feature: "Calibrated comparative",
        example: "the second camp is closer to the truth",
        note: "'Closer to' ranks the two views instead of accepting one wholesale — the grammar of an honest discussion verdict.",
      },
      {
        feature: "Non-finite 'which' comment clause",
        example: "recorded sessions can be replayed, which suits students who work or care for family",
        note: "The 'which' clause turns the previous statement into the subject of a new judgement — two moves in one sentence.",
      },
      {
        feature: "Concessive 'though' clause",
        example: "On balance, I side with the defenders of campus, though not absolutely",
        note: "Final-position 'though' qualifies the claim it follows; cheaper than a full 'although' clause and just as precise.",
      },
      {
        feature: "Dash-enclosed appositive list",
        example: "the seminar argument, the laboratory bench, the team that builds a project together",
        note: "The dashes insert a three-part definition of 'formative experiences', giving the abstract noun a concrete inventory.",
      },
    ],
    coherence:
      "The essay moves represent, represent, then judge: each view receives one paragraph at its strongest, and only the fourth paragraph weighs them, so the reader meets the verdict last, as in a fair debate. Reference chains ('the second camp', 'the opposing view', 'those experiences') keep the two sides comparable, the travel metaphor threads paragraphs one to four, and the conclusion's 'content travels and whose community stays' mirrors the introduction's promise.",
    alternativeExpressions: [
      { insteadOf: "closer to the truth", use: "nearer the mark / has the stronger case" },
      { insteadOf: "deserves a fair hearing", use: "should be taken seriously before it is judged" },
      { insteadOf: "travel down a wire", use: "be delivered at a distance / reach students remotely" },
      { insteadOf: "the softer half of a graduate", use: "the skills no syllabus lists" },
      { insteadOf: "a lifeline rather than a loss", use: "an opportunity, not a poor substitute" },
      { insteadOf: "a cheaper copy", use: "a reduced version of the original" },
    ],
    commonMistakes: [
      {
        wrong: "Online study is good, so I will explain why it is the best view.",
        right: "The case for moving fully online deserves a fair hearing, because it rests on real gains.",
        reason: "A discussion essay that argues only one side ignores half the task; essays in which one view is never represented cannot rise above Band 5 on Task Response.",
      },
      {
        wrong: "In this essay, I will discuss both views and then I give my opinion.",
        right: "In my view, the second camp is closer to the truth.",
        reason: "The announcement delays the position and wastes the introduction; the opinion belongs in paragraph one, not after a guided tour.",
      },
      {
        wrong: "Campus life teaches teamwork, communication, leadership, confidence, independence and many skills.",
        right: "Running a society teaches organisation, a shared flat teaches negotiation.",
        reason: "Listing skills without instances is a catalogue, not development; two worked examples outrank six labels.",
      },
      {
        wrong: "Last but not least, in a nutshell, we can clearly see that both views are right.",
        right: "On balance, I side with the defenders of campus, though not absolutely.",
        reason: "Memorised closing idioms ('in a nutshell', 'last but not least') signal a template; the verdict should weigh the views, not wave at them.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Nowadays, some people think universities should give all their courses online only, and other people think a degree has less value if the students never go to the campus. In this essay, I will discuss both views and then I give my opinion.",
        "On the one hand, online study is more flexible and more cheap. The students can watch the lectures in their home at any time, and the university does not need so much buildings. Also, students from far countries can join the course without moving to the city, this saves a lot of money. For example, my cousin study a online degree and she can work at the same time.",
        "On the other hand, the campus life is important for young people. They can make friends, join the clubs and use the laboratory for experiments. If you never meet your classmates, your social skills will not develop, and the employers want the graduates who can work in a team.",
        "In my opinion, both views have good points, but the campus is better for the young students, and the online is better for the older students who has a job. So the universities should use both methods together in the future.",
      ],
      wordCount: 202,
      justification: [
        { criterion: "Task Response", note: "Both views receive a paragraph and an opinion finally appears, but the opener 'In this essay, I will discuss both views and then I give my opinion' is a memorised announcement, and at 202 words the essay sits under the floor." },
        { criterion: "Coherence and Cohesion", note: "The 'On the one hand / On the other hand' frame is applied correctly, though inside paragraphs linking is a chain of 'and's, and the comma splice '…moving to the city, this saves…' blurs the boundary between sentences." },
        { criterion: "Lexical Resource", note: "Everyday vocabulary predominates ('watch the lectures', 'make friends'), with imprecision where the task rewards precision — 'more cheap', 'so much buildings' — and the noun 'students' carrying four sentences." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple forms are largely controlled, but agreement slips ('my cousin study', 'students who has a job'), the article error 'a online degree', and tense drift ('then I give') keep accuracy in the Band 6 range; meaning survives." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Should universities teach entirely online, or does a degree lose something essential when the campus disappears from it? Advocates of remote delivery point to cost and reach; defenders of the campus argue that a graduate is formed on it. I lean clearly towards the second view, though the first deserves more credit than it usually receives.",
        "The argument for full online delivery is practical rather than ideological. Once lectures are recorded, they cost almost nothing to replay; a student in a distant province can attend the same class as one in the capital, and those with jobs or small children can study when the household allows. Distance universities have shown for decades that disciplined learners can complete whole degrees this way, and the money saved on buildings could go into better teaching.",
        "The counter-argument is that a degree certifies more than knowledge of a subject. Laboratory sessions, group projects and student societies rehearse the skills that employers actually test for, and these are hard to simulate through a webcam. Someone who has never worked across a bench or a shared desk has read about collaboration rather than practised it, and the friendships formed in a corridor often turn out to be the professional network of the following decade.",
        "On balance, then, I side with the campus camp, with one reservation. For mature students, carers and learners far from any city, the online degree is a genuine opportunity, and it would be harsh to take it away. But for the typical school leaver, the years on campus are where the education actually happens, and a fully remote version would be a cheaper imitation of it.",
      ],
      wordCount: 274,
      justification: [
        { criterion: "Task Response", note: "Both views are represented at their strongest before the verdict, and the verdict is clear and personal; at 274 words the floor is met with room, and the reservation for remote learners keeps the position honest rather than absolute." },
        { criterion: "Coherence and Cohesion", note: "The question opening frames the essay, and paragraphs progress by argument stage; cohesion runs through reference ('those with jobs or small children', 'it would be harsh') rather than mechanical linkers." },
        { criterion: "Lexical Resource", note: "Flexible and largely natural — 'practical rather than ideological', 'rehearse the skills', 'a cheaper imitation' — with collocation occasionally loose ('the campus camp') where a Band 8 writer would vary." },
        { criterion: "Grammatical Range and Accuracy", note: "Confident variety: the opening question, semicolon balance, the participial 'the friendships formed in a corridor', and correct conditionals; errors are rare and never strain the reader." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "delivery (of a course)", partOfSpeech: "noun", meaning: "The way teaching is presented to students, in person or online." },
    { word: "campus", partOfSpeech: "noun", meaning: "The buildings and grounds of a university, and the life lived there." },
    { word: "qualification", partOfSpeech: "noun", meaning: "An official award, such as a degree, recognising completed study." },
    { word: "formative", partOfSpeech: "adjective", meaning: "Shaping a person's development, especially during their youth." },
    { word: "lifeline", partOfSpeech: "noun", meaning: "Something that makes survival or progress possible for a person." },
    { word: "mature student", partOfSpeech: "noun", meaning: "A student who starts university after working age, often older." },
    { word: "to relocate", partOfSpeech: "verb", meaning: "To move to a new place to live or work." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Advantages and disadvantages — platform freelancing and short contracts
// ---------------------------------------------------------------------------

export const at2AdvantagesGigWork: WritingBankTask = {
  slug: "ielts-wb-at2-advantages-gig-work",
  title: "Advantages and disadvantages — platform freelancing and short contracts",
  channel: "academic",
  taskType: "task-2",
  family: "advantages-disadvantages",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "In many countries, a growing number of workers now earn their living through short-term contracts and freelance platforms instead of permanent jobs. Do the advantages of this way of working outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "clear-verdict",
      description: "Answers the weighing question directly — which side is heavier — in the introduction, and holds the verdict.",
      keywords: ["outweigh", "advantages", "disadvantages", "in my view", "on balance", "narrow"],
    },
    {
      key: "both-sides-weighed",
      description: "Gives real coverage to both sides, including the costs, before and while concluding.",
      keywords: ["however", "volatility", "insecurity", "admittedly", "although", "precarity"],
    },
    {
      key: "developed-paragraphs",
      description: "Extends each paragraph with a reason, an explanation and a concrete example or trajectory.",
      keywords: ["for example", "for instance", "because", "such as", "platform", "rider"],
    },
    {
      key: "academic-register",
      description: "Maintains academic register: measured tone, no contractions, no proverb endings.",
      keywords: ["moreover", "however", "therefore", "whereas", "although", "on balance"],
    },
    {
      key: "verdict-conclusion",
      description: "Restates the verdict in new words, together with the condition that earned it.",
      keywords: ["in conclusion", "on balance", "to conclude", "narrowly", "conditionally", "thus"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: advantages and disadvantages with a verdict — 'outweigh' means the essay must conclude which side is heavier, not merely list both.",
        "The topic is fixed: short-term contracts and freelance platforms — the gig economy specifically, not part-time work in general.",
        "The verdict is due twice: signalled in the introduction, then defended again after the disadvantages have been heard.",
      ],
    },
    {
      heading: "Step 2 — Choose the verdict",
      notes: [
        "Chosen verdict: the advantages outweigh — narrowly, and on the condition that freelancing is run as a profession.",
        "Decisive argument to prepare: volatility can be buffered; lost autonomy cannot be bought back — that asymmetry does the weighing.",
        "Honest caveat to keep: for workers with no reserve and one platform, the verdict reverses — admitting this strengthens the essay.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs",
      notes: [
        "Introduction: name the trend, then give the verdict with both its conditions.",
        "Body 1: advantages — autonomy that compounds, global market access, low entry barriers, one real trajectory as the example.",
        "Body 2: disadvantages — bursty income, the benefits gap, algorithm dependency; the delivery rider is the standing example.",
        "Body 3: the weighing — the rhetorical question, the asymmetry, the caveat.",
        "Conclusion: restate 'narrowly and conditionally', then hand the reader the policy implication.",
      ],
    },
    {
      heading: "Step 4 — Language bank",
      notes: [
        "Weighing stems: 'outweigh', 'by a narrow margin', 'the scales tip'.",
        "Advantage nouns: 'autonomy', 'low barriers to entry', 'control that compounds'.",
        "Disadvantage nouns: 'volatility', 'precarity', 'little recourse'.",
        "Condition stems: 'provided that', 'only where', 'on condition that'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Across many economies, a rising share of workers now piece together a living from short-term contracts and freelance platforms rather than a permanent post. In my view, the advantages of this way of working outweigh the disadvantages, but only by a narrow margin, and only where the worker treats freelancing as a profession rather than a series of accidental gigs.",
      "The case for the new arrangement begins with autonomy. A freelancer decides when, where and for whom to work, and that control compounds: a designer in a smaller economy who sells to clients abroad can earn several times the local wage while living at home. Entry barriers are also strikingly low, because platforms reward a visible portfolio more than a curriculum vitae. A friend of mine left a permanent agency job for platform freelancing, and within two years both her income and the variety of her work had doubled.",
      "The disadvantages, however, are far from trivial. Income arrives in bursts, and no employer smooths the quiet weeks; there is no sick pay, no paid holiday and, in most countries, no employer contribution towards a pension. Worse, the platform usually owns the customer relationship: an algorithm can quietly push a rider's profile down the queue, leaving the worker little recourse. Riders paid per drop, with no guaranteed floor, show how thin the line between freelancing and precarity can become.",
      "Why do the advantages still win, in my view? Because the two sides are not symmetrical. Volatility can be managed with buffers — several clients instead of one, a reserve for the lean months, insurance where it exists — but a permanent job cannot be made flexible by saving. Autonomy is the rarer good, and the one workers say they value once they have tasted it. One caution belongs in the weighing: for workers with no reserve and a single platform, the scales tip the other way, which is why minimum-earnings rules matter.",
      "In conclusion, contracting and freelancing offer the deeper benefit — control over one's working life — while their costs, though real, can mostly be planned for. On balance the advantages outweigh the disadvantages, narrowly and conditionally, and the task of governments is to stop the balance tipping.",
    ],
    wordCount: 364,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — the verdict with its condition",
        analysis:
          "States the weighing question's answer up front and attaches two conditions to it — 'by a narrow margin' and 'where the worker treats freelancing as a profession' — so the whole essay exists to defend those qualifications.",
      },
      {
        role: "Body 1 — the advantages",
        analysis:
          "Leads with autonomy, then shows the control compounding through the designer example; the portfolio-over-CV point widens the argument from individuals to entry barriers, and the friend anecdote grounds it in a real trajectory with an outcome.",
      },
      {
        role: "Body 2 — the disadvantages",
        analysis:
          "Gathers the costs in rising order of seriousness — bursty income, missing benefits, then algorithm dependency — with the delivery rider as the standing example of the line between freelancing and precarity.",
      },
      {
        role: "Body 3 — the weighing",
        analysis:
          "The rhetorical question marks the pivot from description to judgement; the asymmetry argument is the essay's decisive move, and the closing caution keeps the verdict honest for the least secure workers.",
      },
      {
        role: "Conclusion — the verdict restated",
        analysis:
          "Compresses the weighing into one contrast — control versus costs that 'can mostly be planned for' — and hands the reader the policy implication rather than a new claim.",
      },
    ],
    vocabulary: [
      { term: "that control compounds", note: "The essay's core advantage claim: the benefit builds on itself — a finance verb doing argumentative work." },
      { term: "income arrives in bursts", note: "Metaphorical precision for irregular earnings; pairs with 'no employer smooths the quiet weeks'." },
      { term: "little recourse", note: "The legal word for having no realistic appeal — the exact term for platform dependency." },
      { term: "precarity", note: "The sociologist's noun for life without security; 'the line between freelancing and precarity' is the essay's sharpest contrast." },
      { term: "buffers", note: "A finance noun reused for clients and savings — one word covering three tactics in the weighing." },
      { term: "the scales tip the other way", note: "Weighing language that keeps the verdict visible while conceding the exception." },
    ],
    grammar: [
      {
        feature: "Rhetorical question as pivot",
        example: "Why do the advantages still win, in my view?",
        note: "One question announces the weighing paragraph — used once it is emphasis; used often it becomes a mannerism.",
      },
      {
        feature: "Passive after 'cannot be made'",
        example: "a permanent job cannot be made flexible by saving",
        note: "The passive lets the verb phrase 'be made flexible' carry the whole argument: autonomy is unbuyable, volatility manageable.",
      },
      {
        feature: "Past perfect for prior completion",
        example: "within two years both her income and the variety of her work had doubled",
        note: "The doubling happened before the two-year reference point — past perfect sequences two past events without dates.",
      },
      {
        feature: "Em-dash inserted appositive",
        example: "several clients instead of one, a reserve for the lean months, insurance where it exists",
        note: "The dashes define 'buffers' by instance, letting one abstract noun stand for three concrete tactics.",
      },
    ],
    coherence:
      "The verdict's two conditions, set in the introduction, are defended in order: body one shows the advantage compounding, body two concedes the costs, and the weighing paragraph resolves them through the asymmetry argument. The question pivot ('Why do the advantages still win?') marks the turn from description to judgement, and the closing paragraph's 'narrowly and conditionally' echoes the introduction's conditions, closing the loop it opened.",
    alternativeExpressions: [
      { insteadOf: "piece together a living", use: "assemble an income from several sources" },
      { insteadOf: "that control compounds", use: "the benefit builds on itself over time" },
      { insteadOf: "income arrives in bursts", use: "earnings are irregular and unpredictable" },
      { insteadOf: "little recourse", use: "no realistic avenue for complaint" },
      { insteadOf: "the scales tip the other way", use: "the balance reverses for these workers" },
      { insteadOf: "narrowly and conditionally", use: "by a slim margin, and only under those conditions" },
    ],
    commonMistakes: [
      {
        wrong: "The gig economy has many advantages and many disadvantages.",
        right: "In my view, the advantages outweigh the disadvantages, but only by a narrow margin.",
        reason: "'Outweigh' asks which side is heavier; a balanced both-sides report with no verdict answers a question the task never asked.",
      },
      {
        wrong: "Freelancers are free. They can work anywhere. They have no boss. They wake up late.",
        right: "A freelancer decides when, where and for whom to work, and that control compounds.",
        reason: "Chained short declaratives flatten the argument; subordination lets one sentence carry the claim together with its explanation.",
      },
      {
        wrong: "For instance, in some countries, some people, in certain situations, prefer freelancing.",
        right: "A friend of mine left a permanent agency job for platform freelancing, and within two years both her income and the variety of her work had doubled.",
        reason: "Hedged, sourceless examples persuade nobody; a named example with a dated outcome is what 'relevant examples from your own knowledge' means.",
      },
      {
        wrong: "To sum up, everything has two sides like a coin, and so does freelancing.",
        right: "On balance the advantages outweigh the disadvantages, narrowly and conditionally.",
        reason: "Proverb endings ('two sides of a coin') are memorised filler; the conclusion must restate this essay's verdict, not a general truth.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 5.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Today many people work like a freelancer in the gig economy, they use apps and websites to find short contracts. Some people thinks this is very good, but other people thinks it is dangerous. In my opinion, the advantages are more than the disadvantages, but not so much.",
        "The main advantage is the freedom. A freelancer can choose when to work and where to work, and he can stop working for one week if he wants. Also, they can find customers from all the world, so a good designer in a poor country can earn money like in a rich country. For example, my friend is a programmer and he works for companies in other countries from his bedroom.",
        "However, the gig work has also big problems. The income is not stable, and if the worker is sick, nobody pays him. There is no holiday pay and no pension from the company. The platform can also delete your account and then you lose all your customers in one day. This is very stressful for the workers with family.",
        "In conclusion, I believe the advantages is bigger, because the freedom is most important for the modern workers. But the governments should make some rules to protect the freelancers, for example a minimum earning every month.",
      ],
      wordCount: 214,
      justification: [
        { criterion: "Task Response", note: "A verdict appears ('the advantages are more than the disadvantages, but not so much') and both sides are present, but the weighing is asserted rather than argued, and at 214 words the response is under length." },
        { criterion: "Coherence and Cohesion", note: "Paragraphing is logical (advantages, disadvantages, verdict), yet the opening sentence is a comma splice ('…short contracts, they use apps…'), and the verdict paragraph adds its rule without preparing the reader for it." },
        { criterion: "Lexical Resource", note: "Vocabulary is serviceable ('freedom', 'stable', 'stressful'), with imprecision typical of the band — 'work like a freelancer', 'earn money like in a rich country' — and little topic-specific lexis beyond 'platform'." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple sentences mostly communicate, but agreement errors are frequent ('some people thinks', 'the advantages is bigger'), pronouns drift between 'he', 'they' and 'your', and range stays narrow; errors appear in most sentences." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "A growing share of the workforce now assembles an income from short contracts and freelance platforms rather than a single employer. Whether this trade serves the people making it is genuinely debatable: the freedom is real, and so is the fragility. My own view is that the advantages outweigh the disadvantages, but narrowly, and only for workers who treat freelancing as a discipline.",
        "The appeal is not hard to see. A freelancer chooses the hours, the clients and the place, and the choice compounds: a designer in a lower-income economy can bill international rates while living at home, something a permanent local job could never offer. Platforms also lower the barriers to entry, since a portfolio speaks louder than a CV, and skills can be traded upward without waiting for a promotion.",
        "The fragility is just as real, however. Income arrives in bursts that no employer smooths, sick pay and pensions are largely the worker's own problem, and the platform, not the person, usually owns the customer relationship. A delivery rider whose ranking quietly drops can lose a livelihood overnight, with no appeal worth the name. For anyone without savings, that is not flexibility but exposure.",
        "On balance, I still come down on the side of the freelancers, because the two risks are not symmetrical. Volatility can be buffered — several clients rather than one, a reserve for the lean months — whereas the autonomy of a permanent job cannot be bought back at any price. That said, my verdict holds only where a safety net exists: for workers with no reserve and one platform, the disadvantages clearly win, which is why minimum-earnings rules belong in any honest weighing.",
      ],
      wordCount: 277,
      justification: [
        { criterion: "Task Response", note: "The verdict is stated in the introduction, weighed explicitly in the final paragraph, and kept honest by the reservation for workers without savings; at 277 words the floor is cleared and both sides receive developed coverage." },
        { criterion: "Coherence and Cohesion", note: "Argument staging is explicit ('The appeal is not hard to see', 'The fragility is just as real, however'), and the closing reservation is signposted with 'That said' rather than bolted on." },
        { criterion: "Lexical Resource", note: "Precise, textured choices — 'assembles an income', 'not flexibility but exposure', 'with no appeal worth the name' — sustaining natural collocation through abstract material." },
        { criterion: "Grammatical Range and Accuracy", note: "A wide range handled with confidence: the relative clause in the rider sentence, a fronted 'whereas' contrast, and dash-embedded appositive lists; errors are rare and never impede." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "short-term contract", partOfSpeech: "noun", meaning: "Work agreed for a fixed period rather than permanently." },
    { word: "freelance platform", partOfSpeech: "noun", meaning: "A website or app that matches independent workers with clients." },
    { word: "autonomy", partOfSpeech: "noun", meaning: "The right to decide for yourself how work is done." },
    { word: "volatility", partOfSpeech: "noun", meaning: "The quality of changing suddenly, used of income here." },
    { word: "precarity", partOfSpeech: "noun", meaning: "A state of life without security, especially in work." },
    { word: "buffer", partOfSpeech: "noun", meaning: "A reserve that softens a shock, here money or clients." },
    { word: "recourse", partOfSpeech: "noun", meaning: "The possibility of complaining or appealing officially." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 4. Problem and solution — fast fashion
// ---------------------------------------------------------------------------

export const at2ProblemSolutionFastFashion: WritingBankTask = {
  slug: "ielts-wb-at2-problem-solution-fast-fashion",
  title: "Problem and solution — fast fashion",
  channel: "academic",
  taskType: "task-2",
  family: "problem-solution",
  difficulty: 4,
  estimatedMinutes: 40,
  wordMinimum: 250,
  timeLimitSec: 40 * 60,
  prompt:
    "The production of very cheap, rapidly changing clothing — often called 'fast fashion' — has become one of the world's most polluting industries. What problems does this cause, and what solutions can you suggest? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  requirements: [
    {
      key: "problems-identified",
      description: "Identifies at least two distinct problems — environmental damage and one other — and explains the mechanism of each.",
      keywords: ["pollution", "water", "waste", "landfill", "wages", "microfibre"],
    },
    {
      key: "solutions-proposed",
      description: "Proposes at least two workable solutions, each naming who acts and by what means.",
      keywords: ["governments", "levy", "regulation", "consumers", "second-hand", "standards"],
    },
    {
      key: "linked-to-problems",
      description: "Ties each solution back to the specific damage it is meant to reduce.",
      keywords: ["would", "reduce", "discourage", "address", "tackle", "because"],
    },
    {
      key: "developed-paragraphs",
      description: "Extends paragraphs with mechanisms and examples rather than lists of labels.",
      keywords: ["for example", "for instance", "because", "such as", "cotton", "polyester"],
    },
    {
      key: "verdict-conclusion",
      description: "Concludes by pairing the problems with the solutions in fresh words, without new claims.",
      keywords: ["in conclusion", "overall", "to conclude", "together", "both ends"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Decode the question",
      notes: [
        "Family: problem-solution, two demands of equal weight — the problems and the solutions should take roughly equal space.",
        "The prompt fixes the industry: very cheap, rapidly changing clothing; solutions may come from governments, brands or shoppers.",
        "'Suggest' invites realistic measures: every solution needs an actor, a mechanism and a reason it would work.",
      ],
    },
    {
      heading: "Step 2 — Choose the problems",
      notes: [
        "Environmental line: thirsty cotton, polyester microfibres, garments landfilled within a year of purchase.",
        "Human line: wages squeezed wherever the contract goes to the lowest bidder.",
        "Two or three developed problems outrank six named ones — depth beats coverage on Task Response.",
      ],
    },
    {
      heading: "Step 3 — Map the paragraphs",
      notes: [
        "Introduction: name the double fault (cheap, quick) and signpost problems then solutions.",
        "Body 1: problems from field to bin, closing on the race to the bottom.",
        "Body 2: solutions from above — levy, durability standards, producer responsibility, with one real national example.",
        "Body 3: solutions from below — resale, renting, buying fewer better garments.",
        "Conclusion: pair the two solution families and end on scale, not sentiment.",
      ],
    },
    {
      heading: "Step 4 — Language bank",
      notes: [
        "Problem nouns: 'footprint', 'microfibres', 'a race to the bottom'.",
        "Solution stems: 'a levy on', 'would push designers towards', 'must collect and pay for'.",
        "Linking problems to solutions: 'to tackle this', 'the answer to X is Y'.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "Clothes are now made so cheaply and replaced so quickly that the industry has become one of the most polluting in the world. The problems fall on water, on waste and on the people who sew the garments, and the remedies lie as much with governments and shoppers as with the brands themselves.",
      "The environmental damage begins at the cotton field and does not end at the bin. Growing conventional cotton consumes enormous volumes of water, much of it in dry regions, and washing polyester releases microscopic plastic fibres that pass through treatment plants into the sea. Because garments are worn a handful of times before disposal, most discarded clothing is landfilled or burned within a year — a waste stream that barely existed a generation ago. Behind the price tag sits a second problem: a race to the bottom in which factories compete on wage costs, so the cheapest garment is usually the one made under the worst conditions.",
      "Governments hold the strongest levers, and the first is to make the price tell the truth. A levy on virgin polyester would push designers towards recycled and durable materials, while legal durability standards — minimum seam strength, colour-fastness, a set number of wash cycles — would outlaw garments designed to fail early. France has already moved in this direction by banning the destruction of unsold clothing. Extended producer responsibility goes further: when a brand must collect and pay for what it sells, the cost of the landfill returns to the seller.",
      "Consumers, meanwhile, are not helpless bystanders. A thriving resale market already moves large volumes of clothing back into use, and renting fits the occasions — a suit for one wedding, a child's coat for one season — where ownership makes no sense. The most direct lever is to buy fewer, better garments and wear them longer, since the largest share of a garment's footprint is fixed at the point of production. Where taxes and standards raise the shelf price, this shift stops being a virtue and becomes ordinary arithmetic.",
      "In conclusion, fast fashion drains rivers, fills landfills and squeezes the people at the sewing machine, and no single actor can undo that alone. Regulation that prices the damage honestly, paired with shoppers who keep clothes in circulation, would attack the problem from both ends at once.",
    ],
    wordCount: 382,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction — scale and signpost",
        analysis:
          "Names the industry's double fault — made cheaply, replaced quickly — and signposts the essay's route: problems on water, waste and workers; remedies from governments and shoppers, not from the brands alone.",
      },
      {
        role: "Body 1 — the problems",
        analysis:
          "Sequences the damage from field to bin: thirsty cotton, microfibres, then the landfill wave, each with its mechanism stated; the paragraph closes by turning the price tag into the second problem, the race to the bottom on wages.",
      },
      {
        role: "Body 2 — solutions from above",
        analysis:
          "Groups the regulatory levers — levy, durability standards, the French ban on destroying unsold stock — and explains extended producer responsibility as a mechanism, not a slogan: the landfill's cost returns to the seller.",
      },
      {
        role: "Body 3 — solutions from below",
        analysis:
          "Gives consumers real agency: resale, renting for short-need occasions, and buying fewer, better garments, with the footprint-fixed-at-production point explaining why less consumption beats better disposal.",
      },
      {
        role: "Conclusion — both ends at once",
        analysis:
          "Restates the problem set in new words — rivers, landfills, the sewing machine — and pairs the two solution families in a single sentence, ending on scale rather than sentiment.",
      },
    ],
    vocabulary: [
      { term: "the price tell the truth", note: "The essay's thesis in three words: prices must carry the real costs — it recurs as 'prices the damage honestly' at the close." },
      { term: "a race to the bottom", note: "The fixed idiom for competition that drives standards down; here it turns a price tag into a human problem." },
      { term: "virgin polyester", note: "The industry term for newly made, non-recycled plastic fibre — precision that 'cheap material' cannot match." },
      { term: "extended producer responsibility", note: "The policy name for making sellers collect and pay for what they sell; naming a mechanism outperforms vague 'rules'." },
      { term: "fixed at the point of production", note: "The argument that settles the consumer paragraph: footprint is created upstream, so buying less beats disposing better." },
      { term: "ordinary arithmetic", note: "The closing reframe of consumer action: once prices are honest, restraint is economics, not virtue." },
    ],
    grammar: [
      {
        feature: "'So + adjective + that' result clause",
        example: "Clothes are now made so cheaply and replaced so quickly that the industry has become one of the most polluting in the world",
        note: "The 'so…that' frame makes the cause produce its effect inside one sentence — the essay's thesis in miniature.",
      },
      {
        feature: "'In which' prepositional relative",
        example: "a race to the bottom in which factories compete on wage costs",
        note: "'In which' is the formal relative after a noun phrase, lifting the sentence above a casual 'where'.",
      },
      {
        feature: "Modal 'would' for proposed measures",
        example: "A levy on virgin polyester would push designers towards recycled and durable materials",
        note: "Solutions that do not yet exist take 'would'; the modal claims a consequence, not a fact.",
      },
      {
        feature: "Passive process reporting",
        example: "most discarded clothing is landfilled or burned within a year",
        note: "The garments undergo the action; the passive keeps the reader's eye on the waste stream, not on who discards it.",
      },
    ],
    coherence:
      "The essay's route is announced in the introduction — problems on water, waste and workers; remedies from governments and shoppers — and each paragraph then delivers its stage of that route. The field-to-bin image in paragraph two ('begins at the cotton field and does not end at the bin') returns as 'attack the problem from both ends' in the conclusion, and every solution is tied back to the damage it targets, so the two halves of the question answer each other.",
    alternativeExpressions: [
      { insteadOf: "make the price tell the truth", use: "make prices reflect the real costs" },
      { insteadOf: "a race to the bottom", use: "competition that drives standards down" },
      { insteadOf: "landfilled or burned", use: "buried in the ground or incinerated" },
      { insteadOf: "helpless bystanders", use: "passive observers with no influence" },
      { insteadOf: "ordinary arithmetic", use: "simple economics rather than an act of virtue" },
      { insteadOf: "attack the problem from both ends", use: "press on the issue from supply and demand at once" },
    ],
    commonMistakes: [
      {
        wrong: "Fast fashion is a big problem and we must solve it together.",
        right: "The problems fall on water, on waste and on the people who sew the garments.",
        reason: "Naming the problems is half the task; 'big problem' with no mechanism leaves the reader with nothing to solve.",
      },
      {
        wrong: "Governments should do something about this issue as soon as possible.",
        right: "A levy on virgin polyester would push designers towards recycled and durable materials.",
        reason: "'Do something' is not a solution; each proposal needs an actor, a tool and a consequence the reader can trace.",
      },
      {
        wrong: "Also the consumers. They buy less. Reuse. Recycle. Repeat.",
        right: "A thriving resale market already moves large volumes of clothing back into use, and buying fewer, better garments shrinks the problem at its source.",
        reason: "Fragment piles without verbs cannot develop an idea; a solution paragraph needs full sentences showing who acts and what changes.",
      },
      {
        wrong: "In conclusion, fast fashion is bad for the environment, as everyone knows.",
        right: "In conclusion, fast fashion drains rivers, fills landfills and squeezes the people at the sewing machine.",
        reason: "'As everyone knows' argues nothing, and a vague 'bad' merely repeats the prompt; conclusions should compress the essay's own findings.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Nowadays the fashion is very cheap and the people buy new clothes every week, because the shops always have new collections. This causes many problems for the environment and for the workers, so we need some solutions.",
        "The first problem is the pollution. To make cotton clothes it needs a lot of water, and the factories use many chemicals. Also, when we wash the polyester clothes, small pieces of plastic go to the rivers and the sea. The second problem is the waste, because the people throw the clothes away after few months, and most of it goes to the landfill.",
        "Another problem is the workers in the poor countries. They work very long hours with small salary, and sometimes the factories are not safe. The cheap price is possible only because somebody else pays the real cost.",
        "For the solutions, the governments should make laws. They can put a tax on the cheap clothes, and the companies must pay for the recycling of the old clothes. The consumers can also buy less clothes, or buy the second-hand clothes in the market. If everybody do a little, the industry will change slowly.",
      ],
      wordCount: 192,
      justification: [
        { criterion: "Task Response", note: "Two problems and two solution directions are present, so the task shape is right, but at 192 words the essay is well under the floor, and the solutions are listed without saying who would enforce them or how." },
        { criterion: "Coherence and Cohesion", note: "Paragraphing follows the question's order (problems, then solutions), though 'For the solutions' is a clumsy topic sentence and 'If everybody do a little' generalises the ending away from the argument." },
        { criterion: "Lexical Resource", note: "Topic words are adequate ('pollution', 'landfill', 'second-hand'), while 'it needs a lot of water' and 'buy less clothes' show the word-choice slips that hold Lexical Resource at Band 6." },
        { criterion: "Grammatical Range and Accuracy", note: "Simple structures are mostly accurate, but agreement errors recur ('If everybody do'), quantifiers slip ('after few months', 'with small salary'), and range stays declarative; meaning survives throughout." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "Few industries have widened their footprint as quickly as the one that sells very cheap, rapidly changing clothing. The damage now spreads across water supplies, landfill sites and the factory floor, and reversing it will require action from legislators and shoppers alike, not from the brands alone.",
        "The problems begin on the farm and end in the bin. Cotton is a desperately thirsty crop, and most of it grows where water is scarcest, while every wash of a polyester garment flushes plastic microfibres towards the sea. Because clothes are now worn a handful of times before disposal, landfills receive tonnes of textile within a year of purchase. And the price tag conceals a human cost: wages are squeezed wherever the contract goes to the lowest bidder, so the cheapest garment tends to carry the worst working conditions.",
        "The solutions are similarly layered. A levy on virgin polyester would steer designers towards recycled material, and legal durability standards would outlaw clothes engineered to fail early, a practice some countries have already begun to restrict. When producers must collect and pay for what they sell, the arithmetic of design changes on its own. Consumers hold the quieter lever: resale platforms already return large volumes of clothing to use, and buying fewer, better garments shrinks the problem at its source, since most of a garment's footprint is fixed at production.",
        "None of this will happen through goodwill alone. The price of a garment must begin to include its true cost, and shoppers must treat keeping clothes in circulation as normal rather than virtuous. Attacked from both ends, the industry's scale would shrink to a size the planet can absorb.",
      ],
      wordCount: 276,
      justification: [
        { criterion: "Task Response", note: "Problems are identified across water, waste and wages, solutions are attributed to specific actors, and each measure is tied to the damage it targets; at 276 words the response is fully developed." },
        { criterion: "Coherence and Cohesion", note: "The essay runs problems, then levers, then consumers, with the farm-and-bin image of paragraph two mirrored by 'both ends' in the conclusion; linking is by argument stage rather than by connector chains." },
        { criterion: "Lexical Resource", note: "Rich, precise items — 'desperately thirsty crop', 'the arithmetic of design changes on its own', 'a practice some countries have already begun to restrict' — collocation is natural and varied." },
        { criterion: "Grammatical Range and Accuracy", note: "Wide and controlled: 'wherever the contract goes to the lowest bidder', the passive 'wages are squeezed', and the participle 'Attacked from both ends' — error-free complex forms throughout." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "fast fashion", partOfSpeech: "noun", meaning: "Clothing made cheaply and changed quickly to follow trends." },
    { word: "footprint", partOfSpeech: "noun", meaning: "The environmental impact of a product across its life." },
    { word: "microfibre", partOfSpeech: "noun", meaning: "A tiny plastic thread shed by synthetic fabrics when washed." },
    { word: "landfill", partOfSpeech: "noun/verb", meaning: "A site for burying waste, or the act of burying it." },
    { word: "levy", partOfSpeech: "noun", meaning: "A tax collected on a product or activity." },
    { word: "durability", partOfSpeech: "noun", meaning: "How long an item survives use without failing." },
    { word: "second-hand", partOfSpeech: "adjective", meaning: "Previously owned; sold on to a new user." },
    { word: "race to the bottom", partOfSpeech: "phrase", meaning: "Competition in which standards fall as prices fall." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};
