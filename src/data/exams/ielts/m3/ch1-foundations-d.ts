/**
 * Chapter 1D — Reading foundations (PROMPT 45, Part A).
 *
 * The last three foundation lessons: tone, reference words and paragraph
 * organisation — the structural senses that finish the comprehension core.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const foundationsLessonsD: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-tone",
    title: "Tone",
    description:
      "The writer's temperature: cautious, critical, enthusiastic, neutral and ironic — and the adjective-and-adverb signals that let you read it from the lines.",
    objectives: [
      "classify a passage's tone from its evaluative vocabulary",
      "distinguish cautious enthusiasm from enthusiasm and criticism from neutral reporting",
      "answer attitude items by matching tone adjectives to evidence lines",
    ],
    minutes: 11,
    blocks: [
      {
        type: "lesson-intro",
        text: "Tone is the writer's attitude to the material — warm or cool, certain or hedged, admiring or unimpressed — and the test asks about it directly: 'Which word best describes the writer's attitude?' Tone lives in adjectives, adverbs and evaluative verbs, not in topics: two passages about the same beavers can be written in delight or in weary patience, and the difference sits in single words you already know how to read.",
        beforeYouStart: [
          "You can separate the writer's voice from reported voices.",
          "You can close-read evaluative words in a located line.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — attitude items on academic and GT passages"],
          ["Task & question types", "'The writer's attitude/tone is best described as…' MCQs; tone-dependent YNNG statements"],
          ["What is assessed", "Recognising attitude and tone as expressed in evaluative language"],
          ["Why this matters", "Attitude items are vocabulary-visible: the adjectives are printed, and misreading them is a pure training gap"],
        ],
      },
      { type: "heading", text: "The tone thermometer" },
      {
        type: "table",
        title: "Six tones, their signals and their look-alikes",
        headers: ["Tone", "Printed signals", "Confused with"],
        rows: [
          ["Neutral / measured", "Balanced evidence verbs, hedged conclusions ('suggests', 'appears')", "Cautious enthusiasm (neutral never warms)"],
          ["Cautiously positive", "'promising', 'worth watching', praise followed by 'but'", "Uncritical enthusiasm"],
          ["Enthusiastic", "'remarkable', 'striking', unguarded superlatives", "Irony (check the follow-up sentence)"],
          ["Critical", "'depressing regularity', 'we regret to say', costs counted sharply", "Neutral reporting of criticism (whose voice?)"],
          ["Ironic / wry", "Praise that the next sentence undercuts; deadpan extremes", "Sincere enthusiasm"],
          ["Urgent / concerned", "'must', 'no longer', consequences stressed", "Neutral description of a problem"],
        ],
        caption: "Tone reading is evidence reading: cite the exact evaluative words when you decide, and the look-alike confusion dissolves.",
      },
      {
        type: "steps",
        title: "Reading tone from the lines",
        steps: [
          { title: "Collect the evaluative words, not the topic words", text: "Scan the passage — usually the opening and the verdict paragraphs — for adjectives, adverbs and verbs that carry judgement: 'striking', 'regrettably', 'survives', 'unromantic'. These are the tone's instruments.", examples: [{ english: "'The measurements were striking' and 'we regret to say' — two evaluative hits, one warming and one cooling, in the same passage.", note: "Tone is a weighted sum." }] },
          { title: "Weigh them: who is being evaluated, and by whom", text: "Apply the opinion lesson's voice check: 'depressing regularity' in a REPORTED sentence belongs to the writer's summary of history, while the same phrase in a critic's quote belongs to the critic. Tone belongs to the writer's own sentences.", examples: [{ english: "The traffic passage reports 'critics call it regressive' — the criticism is theirs; the writer's own tone stays measured until the final paragraph.", note: "Voice before tone, always." }] },
          { title: "Test the candidate adjective against one quotable line", text: "For each option in an attitude item, find one line that would prove it. An adjective you cannot quote for is an adjective the writer never wore — this test kills look-alikes mechanically.", examples: [{ english: "Option 'enthusiastic': hunt an unguarded superlative in the writer's voice — none exists; 'cautiously positive' quotes 'narrower and more useful'.", note: "No quote, no tone." }] },
        ],
      },
      {
        type: "example",
        title: "Tones on library material",
        items: [
          { english: "The beaver passage's close — 'Rivers will be re-engineered either way… licence, a compensation scheme, or a trap' — wry and measured at once: the list's last item lands dry.", note: "Lists that end hard carry tone in their final item.", domain: "exam" },
          { english: "The placebo passage: 'the studies were small and far from perfect, but they kept pointing the same way' — cautious positivity, hedged before endorsed.", note: "Hedge-plus-persistence is the cautious-positive signature.", domain: "exam" },
          { english: "The reading-wars passage counts its cost 'in children who reached the middle years of school still unable to read' — critical of the delay, in the writer's own voice.", note: "The critical edge is quotable, which is what the item asks for.", domain: "exam" },
          { english: "The lighthouse passage ends 'the best deal the coast has ever offered' — genial, unguarded warmth: enthusiasm the whole closing paragraph earns.", note: "GT Section 3 features often close warm.", domain: "exam" },
          { english: "A learner highlights every evaluative word in one library passage and tallies warm against cool before answering its attitude question.", note: "Tone as arithmetic, not intuition.", domain: "study" },
          { english: "A candidate reads 'a charming image' as enthusiasm — and misses that the sentence after it ('a plainer story') cools the charm deliberately.", note: "Irony lives in the follow-up sentence.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Tone mistakes corrected",
        items: [
          { wrong: "Tone is a feeling the passage gives me.", right: "Tone is a set of printed evaluative words in the writer's own sentences — collect them, weigh them, quote them.", reason: "Feel-based tone answers drift with the reader's mood; evidence-based ones do not." },
          { wrong: "A passage reporting criticism has a critical tone.", right: "Reported criticism belongs to its reporters; the writer's tone lives in the writer's own framing sentences.", reason: "Voice before tone — the opinion lesson's inventory decides whose adjectives count." },
          { wrong: "'Cautiously positive' and 'enthusiastic' are the same thing.", right: "Cautious praise hedges ('promising', 'worth watching'); enthusiasm is unguarded ('remarkable', 'striking') — the hedge words are the boundary.", reason: "Look-alike tone pairs are the standard option sets, and their distinguishing words are printed." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Decide to cite: every tone decision will name the exact words that carry it."],
          ["While the clock runs", "Collect evaluative words from the opening and verdict paragraphs; weigh them in the writer's voice only."],
          ["If you are stuck", "Test each option's adjective for one quotable line — the one without a quote is the look-alike."],
          ["Final minutes", "Attitude answers rarely change late — re-check only items where a hedge word was misread."],
        ],
      },
      {
        type: "summary",
        points: [
          "Tone is the writer's attitude, carried by printed evaluative words — adjectives, adverbs and judgement verbs.",
          "Read voice before tone: reported criticism cools nothing of the writer's; only the writer's own sentences count.",
          "The tone thermometer: neutral, cautiously positive, enthusiastic, critical, ironic, urgent — each with printed signals.",
          "The quotable-line test kills look-alikes: an attitude option you cannot prove with one line is not the writer's tone.",
          "Irony lives in the follow-up sentence: praise that the next line undercuts is wry, not warm.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Whose sentences carry the writer's tone?", options: ["Every sentence in the passage", "The writer's own framing and verdict sentences", "Only the opening sentence"], correctIndex: 1, explanation: "Voice before tone: reported views carry their owners' attitudes; the writer's tone lives in the writer's own sentences.", from: "The writer's opinion" },
          { question: "Which lesson demands a quotable line before a decision?", options: ["Scanning", "Intensive reading — claim comparison on located lines", "Skimming"], correctIndex: 1, explanation: "The close read's claim comparison is the same discipline the quotable-line test applies to attitude options.", from: "Intensive reading" },
          { question: "Praise that the next sentence undercuts signals which tone?", options: ["Enthusiasm", "Irony or wry humour", "Urgency"], correctIndex: 1, explanation: "Irony lives in the follow-up: the undercut converts warmth into dryness.", from: "Reading tone from the lines" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "Where does a passage's tone live?",
        hints: ["Think printed words, not impressions."],
        options: [
          { id: "a", text: "In the reader's overall feeling about the topic." },
          { id: "b", text: "In the writer's own evaluative words — adjectives, adverbs and judgement verbs." },
          { id: "c", text: "In the topic itself: some topics are objectively critical." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "In the writer's own evaluative words — adjectives, adverbs and judgement verbs.",
          "Tone is printed: 'striking', 'regrettably' and 'survives' carry attitudes on their faces, in the writer's voice — collectible, weighable and quotable.",
          "(a) is the reader's mood; (c) confuses subject with stance.",
        ),
        tags: ["areading", "tone"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the tone — and cite the words that carry it.",
        hints: ["Collect the evaluative words first; then weigh them."],
        passageTitle: "Tone drill",
        passage: "The scheme was not without its teething troubles. Three sensors failed in the first winter, and the dashboard spent a memorable fortnight showing a river that had, according to the data, begun flowing uphill. But the telemetry settled, the flood models held, and by the second spring even the council's loudest sceptics were asking for the dashboard's link rather than its removal.",
        question: "Which phrase best describes the writer's tone here?",
        options: [
          { id: "a", text: "Bitterly critical of the council's incompetence." },
          { id: "b", text: "Wry about the early failures, but cautiously positive about the outcome." },
          { id: "c", text: "Neutral to the point of indifference." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Wry about the early failures, but cautiously positive about the outcome.",
          "The tone instruments are printed: 'a memorable fortnight' and the uphill river are wry; 'the models held' and the sceptics' conversion carry the cautious warmth. Hedge-plus-persistence is the signature.",
          "(a) over-reads the teasing; (c) misses two evaluative passages of vocabulary.",
        ),
        tags: ["areading", "tone", "wry"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. An attitude item offers 'enthusiastic' and 'cautiously positive'. What distinguishes them in the lines?",
        hints: ["One tone hedges; the other does not."],
        options: [
          { id: "a", text: "Nothing — they are synonyms on the paper." },
          { id: "b", text: "Hedge words: cautious praise says 'promising' or 'worth watching'; enthusiasm is unguarded — 'remarkable', 'striking'." },
          { id: "c", text: "Their topics: enthusiasm is for science, caution for policy." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Hedge words: cautious praise says 'promising' or 'worth watching'; enthusiasm is unguarded — 'remarkable', 'striking'.",
          "The boundary between look-alike tones is printed vocabulary: hedges hold the enthusiasm back, and their absence lets it run. Quote the hedge (or its absence) and the item decides itself.",
          "(a) surrenders the distinction; (c) assigns tones to topics, which is not how writers work.",
        ),
        tags: ["areading", "tone", "look-alikes"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Give the quotable-line test.",
        question: "In one sentence: what is the quotable-line test for attitude options?",
        acceptedAnswers: ["for each option, find one line that would prove it — the option you cannot quote for is the look-alike the writer never wore", "each tone adjective must be provable from one printed line; unprovable adjectives are distractors", "find a line proving each option; the one without evidence is not the writer's tone", "test every option for a line that proves it, and reject the unquotable one"],
        keywords: ["line", "prove", "quote", "option"],
        hints: [],
        feedback: fb(
          "For each option, find one line that would prove it — the option you cannot quote for is the look-alike the writer never wore.",
          "The test converts tone reading from impression to evidence: adjectives are cheap to offer, but only the writer's own lines can make one true.",
          "Answers based on feelings or topic-fit have skipped the evidence step.",
        ),
        tags: ["areading", "tone"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A passage reports critics' harsh words at length, then closes with the writer's own measured verdict. A candidate answers that the passage's tone is 'critical'. What was missed?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — harsh words are harsh words." },
          { id: "b", text: "Voice before tone: the criticism belongs to the reported critics; the writer's own verdict paragraph is measured, and the writer's tone is the item's subject." },
          { id: "c", text: "That reported criticism should be ignored entirely as irrelevant." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Voice before tone: the criticism belongs to the reported critics; the writer's own verdict paragraph is measured, and the writer's tone is the item's subject.",
          "Attitude items ask about the writer, and a passage can host a whole choir of reported voices without the conductor's own register changing — the verdict paragraph, not the loudest guest, carries the answer.",
          "(a) counts the guests' temperature; (c) overcorrects — reported voices are evidence of the debate, just not of the writer's tone.",
        ),
        tags: ["areading", "tone", "voice"],
      }),
    ],
    homework: [
      "Highlight every evaluative word in one library passage, tally warm against cool in the writer's voice, and write your tone verdict in one adjective — then check it against the passage's questions.",
      "Find one ironic sentence in any English feature article and write the two halves: the praise and the undercut.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-reference",
    title: "Reference words",
    description:
      "It, this, they, such and the one: the pronoun chains that glue paragraphs together — and the two seconds that decode them.",
    objectives: [
      "resolve it/this/that/these/such/one to their nouns, every time",
      "follow a reference chain across sentence and paragraph boundaries",
      "use reference resolution to speed close reading and matching",
    ],
    minutes: 11,
    blocks: [
      {
        type: "lesson-intro",
        text: "Academic prose avoids repetition by pointing: 'the dams', then 'these structures', then 'they' — a chain of reference words each standing for an earlier noun. The chains save the writer words and cost the reader two seconds each, because an unresolved reference makes the sentence that contains it unreadable. Two seconds is the budget; this lesson installs the reflex that spends them well.",
        beforeYouStart: [
          "You can close-read a located sentence.",
          "You can name a word's grammatical role from its slot.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — dense argumentative paragraphs everywhere"],
          ["Task & question types", "Feeds every type: unresolved references break close reads, summaries and matching alike"],
          ["What is assessed", "Discourse coherence — following the glue that holds the argument together"],
          ["Why this matters", "Most 'the sentence made no sense' moments are unresolved pronouns wearing a difficulty costume"],
        ],
      },
      { type: "heading", text: "The reference kit" },
      {
        type: "table",
        title: "Pointers and how to resolve them",
        headers: ["Pointer", "Stands for", "Resolution rule"],
        rows: [
          ["it / they / them", "A single recent noun (it) or plural (they)", "Take the nearest matching noun BEFORE the pointer"],
          ["this / that (alone)", "The whole previous statement", "Summarise the previous sentence in your own words — the pronoun is that summary"],
          ["this + noun", "A specific earlier noun, re-named", "The noun after 'this' names the referent: 'this arrangement' = the pin-and-slot"],
          ["these / those + noun", "Plural versions of the same", "As above, plural — and 'those' often contrasts with 'these'"],
          ["such + noun", "Anything of the kind just described", "'such devices' = the device type just exemplified"],
          ["the one / the ones", "A member of a just-given set", "The set was named in the previous sentence; pick from it"],
        ],
        caption: "Resolution is always BACKWARDS — the referent precedes the pointer, usually in the same or the previous sentence.",
      },
      {
        type: "steps",
        title: "The two-second resolution",
        steps: [
          { title: "Stop at the pointer and look backwards", text: "The moment a sentence stops making sense, find its pointer and hunt backwards for the nearest noun that matches in number and kind. Never read forward hoping the meaning will arrive — references resolve backwards only.", examples: [{ english: "'The structure leaks constantly' — two sentences earlier: 'A beaver's dam…'. 'The structure' = the dam.", note: "Backwards, nearest, matching." }] },
          { title: "Match number and kind before meaning", text: "'They' needs a plural; 'it' a singular; 'this method' needs a method, not a material. Kind-matching eliminates most false referents before meaning is even weighed.", examples: [{ english: "'These cycles' — hunt plural time-periods: the Metonic and Saros cycles, not the dials.", note: "Grammar filters first." }] },
          { title: "For bare 'this' and 'that', summarise the previous sentence", text: "When the pointer stands alone, its referent is the previous statement's content, not a single noun: compress that sentence into three words and you have the referent.", examples: [{ english: "'…the code hid data in plain sight. This became the industry's religion.' — 'This' = the whole hiding-in-plain-sight principle.", note: "Bare pointers take summaries." }] },
          { title: "Track chains across paragraph boundaries", text: "Paragraph openers often begin mid-chain ('These objections…') referring to the previous paragraph's ending. When a paragraph opens unclearly, the last sentence of the previous paragraph is the referent shelf.", examples: [{ english: "'Not everyone celebrated.' opens a paragraph — and 'everyone' reaches back to the celebration just described.", note: "Chains cross boundaries by design." }] },
        ],
      },
      {
        type: "example",
        title: "Chains on library material",
        items: [
          { english: "Water passage: 'the molecule's shape… each molecule weakly grips its neighbours — scientists call these grips hydrogen bonds. Below four degrees the bonds begin forcing…' — 'the bonds' carries the chain two sentences forward.", note: "Re-naming keeps chains fresh: grips → bonds.", domain: "exam" },
          { english: "Barcode passage: 'The stripes won: circles wasted ink, printed badly on curved surfaces, and were harder to enlarge.' — 'circles' means the bull's-eye code, resolved by kind from two paragraphs back.", note: "Re-usable labels resurface when comparisons return.", domain: "exam" },
          { english: "Placebo passage: 'That is not nothing: those symptoms are why many patients see doctors.' — 'That' = the previous sentence's point (effects cluster in reported symptoms); 'those symptoms' re-names them.", note: "Bare pointer plus re-named plural, one line apart.", domain: "exam" },
          { english: "A candidate misreads 'such studies' as 'all studies' and answers a YNNG statement about every trial — the pointer's kind was 'small, imperfect trials', and the qualifier traveled with it.", note: "Pointers carry their referent's qualifiers.", domain: "exam" },
          { english: "A learner takes one library paragraph and draws arrows from every pointer to its referent — the arrows never point forward.", note: "The backwards law, made visible in two minutes.", domain: "study" },
          { english: "Tall-wood passage: 'The crossing cancels wood's old weaknesses' — 'the crossing' = the ninety-degree layer rotation named the sentence before, re-named as a noun.", note: "Verb phrases become 'this/the + noun' referents routinely.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Reference mistakes corrected",
        items: [
          { wrong: "Pronouns refer forward — the next sentence will explain them.", right: "References resolve backwards: the referent precedes the pointer, nearly always within two sentences.", reason: "Reading forward past an unresolved pointer stacks misunderstanding on misunderstanding — the sentence cannot be read before its glue is set." },
          { wrong: "'It' just means the topic of the paragraph.", right: "'It' means the nearest matching singular noun — often a specific, unglamorous one like 'the structure' or 'the passage'.", reason: "Topic-level guessing makes every sentence roughly right and precisely wrong — the two-second rule is faster and exact." },
          { wrong: "'Such' and 'the one' are interchangeable with 'all'.", right: "'Such studies' and 'the one' carry their referents' qualifiers — small studies, one specific member — never a universal.", reason: "Pointers inherit restrictions; dropping them turns a located true statement into an invented absolute." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the law: references resolve backwards, in two seconds, before the sentence is read."],
          ["While the clock runs", "Stop at any pointer; match number and kind backwards; summarise for bare this/that."],
          ["If you are stuck", "A paragraph that opens unclearly is mid-chain — re-read the previous paragraph's last sentence."],
          ["Final minutes", "Reference errors rarely surface late; protect the qualifier-inheritance rule on flagged items."],
        ],
      },
      {
        type: "summary",
        points: [
          "Reference words point backwards: the referent precedes the pointer, usually within two sentences.",
          "Match number and kind before meaning — 'they' wants a plural, 'this method' wants a method.",
          "Bare 'this'/'that' take the previous sentence's summary as their referent, not a single noun.",
          "Chains cross paragraph boundaries: unclear openers reach back to the previous paragraph's ending.",
          "Pointers inherit qualifiers: 'such studies' are the small, imperfect studies — never all studies.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which close-read job uses the same backwards, grammatical hunting?", options: ["Grammar fit for gaps", "Claim comparison", "Qualifier counting"], correctIndex: 0, explanation: "Gap grammar and referent grammar share one reflex: match the slot's requirements — number, kind, class — before weighing meaning.", from: "Intensive reading" },
          { question: "Paragraph openers that begin mid-chain reach back to what?", options: ["The passage's first paragraph", "The previous paragraph's last sentence", "The questions"], correctIndex: 1, explanation: "Chains cross boundaries by design, and an unclear opener's referent shelf is the paragraph just ended.", from: "The two-second resolution" },
          { question: "Which qualifier rule do pointers obey?", options: ["Pointers drop their referents' qualifiers", "Pointers inherit their referents' qualifiers — 'such studies' are those studies", "Pointers universalise their referents"], correctIndex: 1, explanation: "'Such studies' means the small, imperfect studies named earlier — inheriting their restrictions is what keeps located statements true.", from: "Reference mistakes corrected" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "In which direction do reference words resolve?",
        hints: ["Where does the referent sit relative to the pointer?"],
        options: [
          { id: "a", text: "Forward — the next sentence explains the pronoun." },
          { id: "b", text: "Backwards — the referent precedes the pointer, usually within two sentences." },
          { id: "c", text: "Neither: pronouns mean the passage's general topic." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Backwards — the referent precedes the pointer, usually within two sentences.",
          "References are glue set before use: hunt backwards for the nearest noun matching in number and kind, and never read forward hoping the meaning will catch up.",
          "(a) reads through unset glue; (c) is topic-guessing — roughly right, precisely wrong.",
        ),
        tags: ["areading", "reference"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Resolve the chain.",
        hints: ["Match number and kind backwards from 'these devices'."],
        passageTitle: "Reference drill",
        passage: "The team tested two filtration designs. A sand column cleaned the water but clogged weekly; a membrane cassette never clogged but halved the flow. The trials ran for a season, and by the end the maintenance logs told a clear story: these devices were being chosen by the village committees not for their chemistry but for their patience.",
        question: "What does 'these devices' refer to?",
        options: [
          { id: "a", text: "The sand column and the membrane cassette — the two filtration designs just tested." },
          { id: "b", text: "All filtration devices everywhere." },
          { id: "c", text: "The maintenance logs." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The sand column and the membrane cassette — the two filtration designs just tested.",
          "Kind (devices) and number (plural) both point backwards to the two designs; and the pointer inherits their context — 'their patience' is the clog-tolerance contrast the sentence before established.",
          "(b) universalises the pointer — qualifiers are inherited, not dropped; (c) fails the kind match.",
        ),
        tags: ["areading", "reference", "chains"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A bare 'This' opens a sentence. What is its referent?",
        hints: ["Bare pointers take summaries, not single nouns."],
        options: [
          { id: "a", text: "The nearest singular noun, as with 'it'." },
          { id: "b", text: "The whole content of the previous sentence, compressed into a few words." },
          { id: "c", text: "The passage's title." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The whole content of the previous sentence, compressed into a few words.",
          "Bare 'this'/'that' point at statements, not nouns: summarise the previous sentence in three words and that summary is the referent — the re-named version ('this principle') does the same job openly.",
          "(a) applies the wrong rule for a bare pointer; (c) abandons the sentence entirely.",
        ),
        tags: ["areading", "reference", "bare-pointers"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. State the qualifier-inheritance rule.",
        question: "In one sentence: what does 'such studies' refer to, and what travels with the pointer?",
        acceptedAnswers: ["the studies just named — and their qualifiers travel too: if they were small and imperfect, 'such studies' are small and imperfect", "the specific studies mentioned earlier, with their restrictions intact — never all studies", "the just-described studies, inheriting their qualifiers rather than universalising them", "those specific studies plus their described limitations"],
        keywords: ["qualifiers", "inherit", "studies"],
        hints: [],
        feedback: fb(
          "The studies just named — and their qualifiers travel too: if they were small and imperfect, 'such studies' are small and imperfect.",
          "Pointers inherit restrictions: dropping them turns a carefully located statement into an invented absolute — the mechanism behind many FALSE verdicts.",
          "Answers that allow 'all studies' have dropped the inheritance and invented a universal.",
        ),
        tags: ["areading", "reference", "qualifiers"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A paragraph opens: 'These objections proved harder to answer than the engineers expected.' The previous paragraph ended with farmers describing backed-up ditches and undermined banks. The opener's referent is…",
        hints: [],
        options: [
          { id: "a", text: "Objections raised somewhere later in the passage." },
          { id: "b", text: "The farmers' damage reports just described — the chain crosses the paragraph boundary." },
          { id: "c", text: "A general category of objections known to all engineers." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The farmers' damage reports just described — the chain crosses the paragraph boundary.",
          "Paragraph openers routinely begin mid-chain: 'These objections' reaches back over the boundary to the ditches and banks of the paragraph just ended — the referent shelf for any unclear opener.",
          "(a) breaks the backwards law; (c) universalises instead of inheriting the specific reports.",
        ),
        tags: ["areading", "reference", "boundaries"],
      }),
    ],
    homework: [
      "Take one library paragraph and draw arrows from every pointer to its referent — confirm that no arrow points forward.",
      "Find three bare 'this'-openers in any English article and write each one's three-word summary referent.",
    ],
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-areading-paragraphs",
    title: "Paragraph organisation",
    description:
      "The four shapes an argument takes — problem-solution, compare-contrast, cause-effect and chronology — and the linking words that announce each.",
    objectives: [
      "identify a paragraph's organisational pattern from its linking words",
      "predict where information sits from the pattern alone",
      "use pattern recognition to speed headings, summaries and matching",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Paragraphs are not bags of sentences: they are built to one of a handful of shapes, and the shapes are announced by their linking words. 'However' promises contrast; 'as a result' promises consequence; 'by 1900' promises chronology. Learn the four patterns and their signposts, and you can predict where a paragraph keeps its parts before reading them — which is exactly what fast headings, summaries and matching-information items reward.",
        beforeYouStart: [
          "You can locate topic sentences from the main-ideas lesson.",
          "You can resolve reference chains from the previous lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the architecture beneath every argumentative passage"],
          ["Task & question types", "Headings and summaries ride the patterns; matching items sit at pattern junctions"],
          ["What is assessed", "Following the development of an argument — the coherence skills patterns make visible"],
          ["Why this matters", "Pattern knowledge converts unfamiliar paragraphs into familiar furniture: you know where the answer shelf is"],
        ],
      },
      { type: "heading", text: "The four patterns" },
      {
        type: "table",
        title: "Shapes and their signposts",
        headers: ["Pattern", "Signpost words", "Where information sits"],
        rows: [
          ["Problem → solution", "difficulty, challenge, however, the answer, response", "Problem first, solution second, evaluation last"],
          ["Compare / contrast", "whereas, unlike, by contrast, both, similarly", "Item A fully, then item B against it — differences at the joins"],
          ["Cause → effect", "because, led to, as a result, consequently, so", "Cause first, effect after — effect sentences carry the questions"],
          ["Chronology", "by 1900, later, the following decade, finally", "Events in date order — tables and sequencing items map directly"],
        ],
        caption: "Most paragraphs are primary-pattern with one local deviation — a contrast inside a chronology, a concession inside an argument.",
      },
      {
        type: "steps",
        title: "Reading by pattern",
        steps: [
          { title: "Skim for signposts before content", text: "In the skim's first-sentence pass, note the linking words: 'whereas' declares comparison, 'as a result' declares consequence. Two or three signposts fix the paragraph's pattern before you have read its details.", examples: [{ english: "'The stripes won: circles wasted ink…' — the colon declares a verdict-and-reasons shape inside a comparison.", note: "Punctuation is a signpost too." }] },
          { title: "Predict the shelves, then read to them", text: "Each pattern stores information in a fixed order: problem-solution keeps evaluation last; comparison keeps differences at the joins; chronology keeps dates in rows. Knowing the pattern tells you where to hunt before you read.", examples: [{ english: "A cause-effect paragraph on flooding: the effect sentence — the one questions feed on — is the one after 'as a result'.", note: "Pattern reading is shelf reading." }] },
          { title: "Expect one local deviation", text: "Real paragraphs mix patterns: a chronology with one contrastive aside, an argument with one concession. The deviation is usually signposted ('although', 'by contrast') and usually carries a question.", examples: [{ english: "The beaver passage's stakeholder paragraph is compare-contrast — one concession aside ('Mitigation proved possible') that feeds its own completion items.", note: "Deviations are question magnets." }] },
        ],
      },
      {
        type: "grammar-rule",
        title: "The linker families",
        rule: "Linkers come in four families matching the four patterns: contrast (however, whereas, unlike, yet), consequence (therefore, consequently, as a result, thus), addition (moreover, furthermore, in addition), and sequence (first, then, by 1900, finally, subsequently). Each family announces the shape of what follows.",
        explanation:
          "Reading linkers as families is pattern recognition in miniature: one word tells you the job of the whole sentence that follows it, which is why linker-spotting belongs in the skim.",
        examples: [
          { english: "'Consequently' opens a sentence — the sentence is an effect; if the question asks for the effect, you have already found it.", translation: "Cada conector anuncia la forma de la frase que sigue." },
        ],
        exceptions: ["'Yet' and 'still' can contrast within a single sentence, not only between sentences — check both sides of the comma."],
      },
      {
        type: "example",
        title: "Patterns on library passages",
        items: [
          { english: "The barcode passage is a chronology: 1948 request, 1949–52 patent, 1960 laser, 1973 standard, 1994 descendant — its table items and date blanks ride the order directly.", note: "Chronology passages gift sequencing questions.", domain: "exam" },
          { english: "The reading-wars passage runs compare-contrast for its core: phonics vs whole language, fully described then joined — the joins carry the YNNG items.", note: "Differences live at the joins.", domain: "exam" },
          { english: "The beaver passage's measurement paragraph is cause-effect: dams slow water → sediment settles → life returns; the flowchart item copies the chain.", note: "Flowcharts are printed cause-effect.", domain: "exam" },
          { english: "The traffic passage's fairness paragraph is problem → solution → evaluation: regressive charge, revenue recycling, 'depends on what the price pays for'.", note: "Evaluation-last is the pattern's question shelf.", domain: "exam" },
          { english: "A learner names each paragraph's pattern in the margin during the skim, then checks whether the passage's questions cluster at the deviations.", note: "Pattern-labelling takes ten seconds and predicts question locations.", domain: "study" },
          { english: "A candidate misses that 'however' pivoted a paragraph from cause to contrast and hunts the wrong shelf for two minutes.", note: "One unspotted linker, two minutes — the cost of pattern-blindness, measured.", domain: "exam" },
        ],
      },
      {
        type: "mistakes",
        title: "Organisation mistakes corrected",
        items: [
          { wrong: "Paragraphs are lists of sentences about a topic.", right: "Paragraphs are built to patterns — problem-solution, compare-contrast, cause-effect, chronology — announced by linker families.", reason: "List-thinking reads every sentence as equal; pattern-thinking knows where each kind of information is stored." },
          { wrong: "Linking words are decoration for grammar tests.", right: "Linkers announce the shape of the sentence that follows — they are the skim's fastest structural data.", reason: "'Consequently' or 'whereas' at a skim tells you the paragraph's pattern before a single content word is read." },
          { wrong: "A paragraph has one pattern, strictly.", right: "Primary pattern plus local deviations is the norm — and the deviations, usually signposted, carry questions.", reason: "Real academic prose mixes shapes; expecting the mix is what makes the primary pattern visible." },
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Carry the four patterns and their linker families into the paper as a checklist."],
          ["While the clock runs", "Spot signposts in the skim; predict each paragraph's shelves; hunt questions at deviations."],
          ["If you are stuck", "Name the paragraph's pattern and ask where that pattern keeps the information you need."],
          ["Final minutes", "Sequencing and table items re-check against the chronology's printed order, not memory."],
        ],
      },
      {
        type: "summary",
        points: [
          "Four patterns organise argument: problem-solution, compare-contrast, cause-effect and chronology.",
          "Linker families announce the shapes: contrast, consequence, addition and sequence words.",
          "Each pattern stores information in a fixed order — evaluation last, differences at the joins, effects after 'as a result'.",
          "Real paragraphs are primary-pattern plus local deviations, and the signposted deviations attract questions.",
          "Pattern reading is shelf reading: knowing the shape tells you where to hunt before you read.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier module.",
        items: [
          { question: "Which lesson reads first sentences and structure during the skim?", options: ["Skimming", "Tone", "The writer's purpose"], correctIndex: 0, explanation: "The skim's pass over openers is where signposts are spotted — patterns are skim-level data.", from: "Skimming" },
          { question: "Where does a comparison paragraph keep its differences?", options: ["In the opening sentence only", "At the joins — where item B meets item A", "Nowhere: comparisons state similarities only"], correctIndex: 1, explanation: "Compare-contrast stores differences at the joins, which is where matching and YNNG items cluster.", from: "The four patterns" },
          { question: "Which question family maps directly onto chronology paragraphs?", options: ["Table and sequencing items", "Headings only", "Diagram labelling"], correctIndex: 0, explanation: "Chronologies lay events in date rows — exactly the shape table completion prints.", from: "The four patterns" },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "reading",
        prompt: "What are the four organisational patterns taught in this lesson?",
        hints: ["Think: argument shapes, not sentence types."],
        options: [
          { id: "a", text: "Problem-solution, compare-contrast, cause-effect, chronology." },
          { id: "b", text: "Narrative, dialogue, description, poetry." },
          { id: "c", text: "Introduction, body, example, conclusion." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Problem-solution, compare-contrast, cause-effect, chronology.",
          "Those four shapes organise argumentative prose, each announced by its linker family and each storing information at predictable shelves — the architecture headings and summaries test.",
          "(b) lists literary genres; (c) describes essay skeletons, not paragraph engines.",
        ),
        tags: ["areading", "paragraphs", "patterns"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Name the pattern — and where the evaluation sits.",
        hints: ["The pattern is announced by 'The answer was…'."],
        passageTitle: "Pattern drill",
        passage: "The queues at the returns desk had become the shop's worst advertisement. The answer was a machine: customers scan, tick, print and post their parcels without staff, and refunds travel back to their cards within five working days. By the second quarter, the queue had halved, and staff hours moved from scanning parcels to helping the customers the machine could not.",
        question: "Which pattern organises the paragraph, and where does the evaluation of the solution sit?",
        options: [
          { id: "a", text: "Chronology — the evaluation sits with the earliest date." },
          { id: "b", text: "Problem → solution — evaluation sits last, in the queue-halving and redeployed staff hours." },
          { id: "c", text: "Compare-contrast — the evaluation sits at the join between customer and staff." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Problem → solution — evaluation sits last, in the queue-halving and redeployed staff hours.",
          "The paragraph opens with the problem (queues), pivots at 'The answer was' to the machine, and closes with the pattern's evaluation shelf: halved queues and better-used staff. Questions about outcomes live on that final shelf.",
          "(a) misreads dates as structure; (c) forces a contrast the paragraph only implies.",
        ),
        tags: ["areading", "paragraphs", "problem-solution"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. A sentence begins 'As a result, the flood peak arriving downstream was lower and later.' What does the linker announce — and where is the cause?",
        hints: ["Consequence linkers point backwards for their cause."],
        options: [
          { id: "a", text: "It announces an effect; the cause sits in the sentence(s) before, where the dam's leaking was described." },
          { id: "b", text: "It announces a cause; the effect arrives after it." },
          { id: "c", text: "It announces a comparison of two rivers." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It announces an effect; the cause sits in the sentence(s) before, where the dam's leaking was described.",
          "'As a result' is the consequence family: the sentence it opens is an effect, and effect questions on cause-effect paragraphs resolve one step backwards — the shelf rule doing its work.",
          "(b) reverses the family's direction; (c) confuses consequence with contrast.",
        ),
        tags: ["areading", "paragraphs", "cause-effect"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Name the four linker families and what each announces.",
        question: "List the four linker families in one short answer, with the shape each announces.",
        acceptedAnswers: ["contrast (however, whereas) announces comparison; consequence (therefore, as a result) announces cause-effect; addition (moreover) extends; sequence (then, by 1900) announces chronology", "contrast→comparison, consequence→cause-effect, addition→extension, sequence→chronology", "however-type (contrast), therefore-type (consequence), moreover-type (addition), then-type (sequence)", "contrast, consequence, addition, sequence — comparison, cause-effect, extension, time order"],
        keywords: ["contrast", "consequence", "addition", "sequence"],
        hints: [],
        feedback: fb(
          "Contrast announces comparison; consequence announces cause-effect; addition extends; sequence announces chronology.",
          "The four families are the patterns' flags: spotting one word in the skim fixes the paragraph's shape and its information shelves before content is read.",
          "Lists without the announced shapes have learned the words and missed the point.",
        ),
        tags: ["areading", "paragraphs", "linkers"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A chronology paragraph contains one signposted contrast ('although'). Where do questions tend to cluster on such a paragraph?",
        hints: [],
        options: [
          { id: "a", text: "Uniformly across all the dates." },
          { id: "b", text: "At the deviation — the signposted contrast attracts items the way pattern-junctions always do." },
          { id: "c", text: "Nowhere: deviations are excluded from questions." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "At the deviation — the signposted contrast attracts items the way pattern-junctions always do.",
          "Real paragraphs are primary-pattern plus local deviations, and the deviations — signposted, information-dense, easy to write questions about — are where items cluster. Pattern-blind candidates read past the richest shelf.",
          "(a) ignores the deviation's density; (c) inverts the mechanism entirely.",
        ),
        tags: ["areading", "paragraphs", "deviations"],
      }),
    ],
    homework: [
      "Name each paragraph's pattern in the margin of one library passage during its skim, then check where its questions actually sit — count how many live at deviations.",
      "Collect five linkers from any English article, name their families, and write the shape each one announced.",
    ],
  },
];
