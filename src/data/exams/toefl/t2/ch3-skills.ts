/**
 * TOEFL iBT Academy — Module 2, Reading (T-M2, PROMPT 48, Task 2).
 *
 * Chapter 3 — Reading skills (4 lessons): vocabulary in context and word
 * forms, main ideas and supporting details, inference, and academic
 * vocabulary. Authored at the v3 textbook standard
 * (src/data/exam-academy/textbook-standard.ts).
 *
 * The four skills taught here run underneath all three task families: masks
 * need word-form knowledge, everyday texts need context reading, and
 * academic passages need claim-support reading and evidence-forced
 * inference. All worked passages and items are original material written
 * for this platform; nothing official is reproduced, and any raw-to-band
 * figure quoted anywhere in the module is a practice estimate.
 */

import type { LessonSpec } from "../../ielts/types";
import { ex, fb } from "../../ielts/types";

export const T2_CH3: LessonSpec[] = [
  {
    slug: "toefl-reading-vocabulary",
    title: "Vocabulary in context and word forms",
    description:
      "The two vocabulary skills the section actually tests: deriving an unfamiliar word's meaning from the context a passage supplies, and tracking one word's forms as a text moves through it. Clue types, the substitution test, and affixation as a family habit.",
    objectives: [
      "identify the four context clue types and use them to derive a working meaning",
      "test a derived meaning by substituting it back into the sentence's logic",
      "track a word's family — root, prefixes and suffixes — across a passage's forms",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Every Reading item rides on vocabulary: the masks ask for a word's form, the passages ask for a word's meaning, and both ask at speed. This lesson teaches the two vocabulary skills the section actually tests — working out a meaning from the context a passage supplies, and recognising the forms one word takes as a text moves through it. A word like analyse may appear in one paragraph and return as analysis, analytical and analytically two paragraphs later; a reader who knows families reads all four as one meeting. Context and form together turn unknown words from stops into slowdowns.",
        beforeYouStart: [
          "You can identify parts of speech in a sentence at sight.",
          "You have completed the mask lesson's three-source method.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the skill layer beneath all three task families"],
          ["Task & question types", "Vocabulary questions inside both comprehension task types, and word-form knowledge inside every mask"],
          ["What is assessed", "Working out an unfamiliar word's meaning from its context, and tracking one word's forms across a passage"],
          ["Why this matters", "Dictionary-free reading is the section's default mode: the clock allows a lookup habit only in the rarest cases"],
        ],
      },
      { type: "heading", text: "Meaning from context" },
      {
        type: "text",
        text: "A passage that uses a hard word usually supplies the tools to decode it in the same sentence or the next. Four clue types cover most cases. A definition clue simply states the meaning: 'arboreal animals — those that live in trees —'. An example clue lists instances whose shared feature is the meaning: 'transient visitors, such as migrating geese and day-trippers'. A contrast clue opposes the word to its opposite: 'unlike the permanent staff, the seasonal workers'. And a cause-effect clue lets the logic carry the meaning: 'the leachate poisoned the well, so the water was undrinkable'. Naming the clue type is the skill: it tells you how tightly the word is pinned, from exact to approximate.",
      },
      {
        type: "grammar-rule",
        title: "Affixation: one root, a family of forms",
        rule: "Prefixes attach to the front of a root and adjust its meaning; suffixes attach to the end and usually change its word class.",
        explanation:
          "Academic prose moves through a word's family as it develops an argument, so recognising a root plus its affixes is reading one word four times rather than four words once.",
        examples: [
          { english: "analyse (verb) → analysis (noun) → analytical (adjective) → analytically (adverb)", translation: "" },
          { english: "First the team analyses the samples, then the analysis is checked, and the reviewers ask for a more analytical summary.", translation: "" },
        ],
        exceptions: [
          "Some suffixes do not change class: 'friendly' is an adjective despite its -ly, and 'information' keeps noun class while marking a noun made from a verb.",
        ],
      },
      {
        type: "steps",
        title: "The context-clue protocol",
        intro: "Five moves that keep reading moving when an unknown word appears.",
        steps: [
          {
            title: "Hold your reading and read on",
            text: "When an unknown word appears, do not stop: finish the sentence and read the next. Most clues sit immediately around the word, and the sentence's job often names the word's job before any clue is consulted.",
            examples: [
              {
                english: "Meeting 'the remedy was ephemeral', the reader finishes the clause — 'it faded by morning' — and holds 'short-lived' as the working meaning.",
                note: "The next clause is the cheapest dictionary in the test.",
              },
            ],
          },
          {
            title: "Name the clue type",
            text: "Decide whether the evidence is a definition, an example, a contrast or a cause-effect. The type tells you how tightly the word is pinned: definitions are exact, examples and contrasts are approximate.",
            examples: [
              {
                english: "'Unlike the gregarious seniors, the first-years ate alone' pins gregarious by contrast with alone — sociable, roughly.",
                note: "Contrast gives the meaning's neighbourhood, not its doorstep.",
              },
            ],
          },
          {
            title: "Paraphrase into a phrase",
            text: "Reduce the working meaning to three or four plain words and hold them in mind as you read on; a paraphrase you can repeat is a meaning you own.",
            examples: [
              {
                english: "'Ephemeral' becomes 'lasting a very short time' — short enough to carry through four more paragraphs.",
                note: "Precision can be refined later; portability cannot be improvised.",
              },
            ],
          },
          {
            title: "Test against the sentence's logic",
            text: "Substitute the paraphrase back into the sentence. If the sentence still works — grammar and sense both — the meaning stands; if it grates, one of the two candidates, word or clue, was misread.",
            examples: [
              {
                english: "'The remedy was lasting a very short time; it faded by morning' — coherent, so the meaning stands.",
                note: "Substitution is the test the item formats run.",
              },
            ],
          },
          {
            title: "Carry the sense through the passage",
            text: "A word's chosen sense holds for the whole passage: when the root returns in paragraph four, it carries paragraph one's meaning with it. Families make this cheap — the root is the same, only the form changes.",
            examples: [
              {
                english: "A reader who fixed 'constraint' as 'limiting factor' in paragraph one reads 'constrained by cost' in paragraph four without pause.",
                note: "Consistency is a reading skill, not a memory feat.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "One root, four jobs",
        headers: ["Form", "Word class", "The slot it fills", "In a sentence"],
        rows: [
          ["analyse", "verb", "After a subject or after 'to'", "The team analyses the samples each morning."],
          ["analysis", "noun", "After 'the' or another determiner", "The analysis covered two years of data."],
          ["analytical", "adjective", "Before a noun, or after 'is'", "An analytical summary was requested."],
          ["analytically", "adverb", "Beside a verb", "The reviewers argued analytically."],
        ],
        caption: "Four forms, one meeting: the root carries the meaning, the suffix carries the slot.",
      },
      {
        type: "example",
        title: "Clues and families in the wild",
        items: [
          {
            english: "Definition clue: 'The nocturnal animals — those active at night — avoided the midday heat.' The phrase between the dashes hands over the meaning whole.",
            note: "Dashes, commas and colons are a definition clue's usual packaging.",
            domain: "study",
          },
          {
            english: "Example clue: 'Transit options proliferated: trams, water taxis and a funicular all opened within a decade.' 'Proliferated' means grew rapidly in number — the list does the defining.",
            note: "A colon before a list is an example clue's flag.",
            domain: "everyday",
          },
          {
            english: "Contrast clue: 'The senior staff were garrulous at dinners; the new hires stayed silent.' Garrulous means talkative — the semicolon's contrast carries it.",
            note: "Contrast clues supply near-opposites, and the meaning sits between.",
            domain: "work",
          },
          {
            english: "Cause-effect clue: 'The levee was breached, and the streets below filled within the hour.' Breached means broken open — the consequence names its cause.",
            note: "Result clauses define their causes.",
            domain: "exam",
          },
          {
            english: "A candidate meets 'scrutinise' in a mask and restores it from the s-c-r letters plus the verb slot, then meets 'scrutiny' in the next paragraph and reads it as the same meeting in noun form.",
            note: "Family recognition halves the number of new words a passage contains.",
            domain: "exam",
          },
          {
            english: "A student reads 'the data are inconclusive' and substitutes 'not settling the question' — the sentence's logic accepts it, so the meaning stands without a dictionary.",
            note: "Substitution is the protocol's final test.",
            domain: "study",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Vocabulary mistakes corrected",
        items: [
          {
            wrong: "I stop at every unknown word and translate it.",
            right: "Read on one sentence, name the clue, paraphrase and substitute — the passage supplies its own gloss in most cases.",
            reason: "The lookup habit spends the section's scarcest resource, and translation imports senses the academic context may not carry.",
          },
          {
            wrong: "'Analysis' and 'analyse' are different words I must learn separately.",
            right: "They are one family: fix the root's meaning once and track its forms by slot.",
            reason: "Academic prose deliberately recycles roots across forms; family reading converts four lookups into one.",
          },
          {
            wrong: "The everyday meaning of a word always applies.",
            right: "Test the everyday sense against the sentence's logic; academic contexts narrow and shift common words.",
            reason: "'Discipline' in a passage about universities is a field of study, not punishment — substitution catches the mismatch.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One word, met properly",
        reading: {
          text: "The marsh's seasonal rhythms defeated early surveyors. In spring the water rose without warning, and in high summer the flats contracted — the wetlands were, in the words of one engineer, 'capricious', expanding and retreating on schedules no instrument could predict. Later teams learned to read the signs: a flush of particular grasses announced the coming contraction weeks in advance.",
          task: "Find the word 'capricious' and name the clue type that pins its meaning before opening the writing tab.",
        },
        writing: {
          task: "In 50–90 words, explain what 'capricious' means in the passage, name the clue type that supplies the meaning, and use the word in one new sentence of your own.",
          guide: [
            "State the meaning in plain words: changing unpredictably.",
            "Name and quote the clue: the explanation set between the commas after the word.",
            "Write one fresh sentence where a person, a market or a machine is capricious.",
            "Check the new sentence's logic — the word must earn its place.",
          ],
          model:
            "In the passage, 'capricious' means changing unpredictably, with no pattern an observer can rely on. The clue is a definition set between commas: the wetlands were 'expanding and retreating on schedules no instrument could predict', which restates the meaning in plainer words. Used afresh: the old boiler was capricious — hot on Mondays, cold on Fridays, indifferent to every repair — so the family scheduled showers by its moods rather than the clock.",
        },
        listening: {
          script:
            "Tutor: New word in paragraph two: 'ubiquitous'. What do you do? Student: I keep reading — the sentence says the sensors are ubiquitous, 'balconies, schools, bus shelters, even a bakery's roof'. Tutor: What clue is that? Student: Examples — a list of everywhere-places. So it means present everywhere. Tutor: Test it. Student: 'The sensors are present everywhere, even on a bakery's roof' — works, so the meaning stands. Tutor: And when paragraph four says 'ubiquity'? Student: Same root, noun slot — the state of being everywhere. One meeting, two forms.",
          task: "Which clue type solved 'ubiquitous', and how did the student handle the later form 'ubiquity'?",
        },
        speaking: {
          task: "Teach a partner one context clue type in under a minute, with an invented example sentence.",
          frames: [
            "The clue type I chose is the ___ clue.",
            "It looks like … in a sentence.",
            "My example: …",
            "The meaning it pins is …",
          ],
          checklist: [
            "Did I show the clue's flag — dashes, a colon, 'unlike', a result clause?",
            "Did my example sentence actually contain the clue?",
            "Did I state how tightly the clue pins the meaning?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Meaning, clue, new use — the three moves the task asked for arrive in the order a reader meets them in a real passage."],
          ["Grammar", "The model's fresh sentence gives the adjective a noun to modify and a dash-borne elaboration, showing the word's slot rather than describing it."],
          ["Vocabulary", "A plain paraphrase sits beside the quoted clue, demonstrating the protocol's centre: the passage's own words are the evidence, the paraphrase is the product."],
          ["Coherence", "The boiler sentence ends by tying behaviour to consequence — the same cause-effect logic the clue types teach, reused as writing craft."],
          ["Task fulfilment", "Definition stated, clue named and quoted, and one original sentence supplied — all three instructions answered with evidence."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the deal: the passage glosses most of its own hard words; your job is to read the gloss, not to know every word in advance."],
          ["While the clock runs", "Read one sentence past an unknown word before deciding anything; then name the clue, paraphrase, substitute and continue."],
          ["If you are stuck", "Check the word's family — a known root nearby usually carries the meaning — and check the slot's word class before guessing."],
          ["Final minutes", "Revisit items where a guessed meaning changed an answer; substitute your paraphrase once more against the located line."],
        ],
      },
      {
        type: "summary",
        points: [
          "Passages gloss their own vocabulary: definition, example, contrast and cause-effect clues cover most unknown words.",
          "The protocol is read on, name the clue, paraphrase into a few plain words, substitute back into the sentence, carry the sense forward.",
          "Prefixes adjust meaning, suffixes usually change word class — one root known is a family recognised.",
          "A word's chosen sense holds across the passage; later forms of the same root carry the earlier meaning with them.",
          "The everyday sense of a word must earn its place by substitution — academic contexts narrow and shift common words.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from each of the module's earlier lessons.",
        items: [
          {
            question: "Which evidence source fixes a mask's word form?",
            options: ["The slot's grammar and visible letters", "The passage's topic alone", "The question's wording"],
            correctIndex: 0,
            explanation: "Morphology and syntax pin the ending while context and collocation pick the word — the three-source method's third leg.",
            from: "toefl-reading-complete-words",
          },
          {
            question: "What does the academic-passage routine do before any item is read?",
            options: ["A structural map from first sentences and the final sentence", "A vocabulary list of unknown words", "A full summary of each paragraph"],
            correctIndex: 0,
            explanation: "The map costs under two minutes and converts items from searches into lookups.",
            from: "toefl-reading-academic-passage",
          },
          {
            question: "Roughly how many of the section's items are Complete the Words?",
            options: ["About thirty", "About twenty", "About ten"],
            correctIndex: 0,
            explanation: "Thirty masked-word items on short texts, with twenty comprehension items beside them.",
            from: "toefl-reading-overview",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "vocab-match",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. Match each academic word with the meaning a context clue would supply.",
        hints: ["Start with the word you know best; cross meanings off as you use them."],
        words: [
          { id: "w1", word: "ephemeral", partOfSpeech: "adjective" },
          { id: "w2", word: "proliferate", partOfSpeech: "verb" },
          { id: "w3", word: "gregarious", partOfSpeech: "adjective" },
          { id: "w4", word: "constrain", partOfSpeech: "verb" },
        ],
        meanings: [
          { id: "m1", meaning: "to limit or hold within bounds" },
          { id: "m2", meaning: "lasting only a short time" },
          { id: "m3", meaning: "to multiply or spread rapidly in number" },
          { id: "m4", meaning: "sociable; fond of company" },
        ],
        pairs: [
          { wordId: "w1", meaningId: "m2" },
          { wordId: "w2", meaningId: "m3" },
          { wordId: "w3", meaningId: "m4" },
          { wordId: "w4", meaningId: "m1" },
        ],
        feedback: fb(
          "Ephemeral = short-lived; proliferate = spread rapidly; gregarious = sociable; constrain = limit.",
          "Each pair is the one this module's worked examples pinned by clue — ephemeral by cause-effect, proliferate by a list of examples, gregarious by contrast, constrain by its noun 'constraint' used as a limiting factor.",
          "Pairing short-lived with proliferate reverses brevity and growth; sociable belongs to people, and constrain never means to spread.",
        ),
        tags: ["toefl", "reading", "vocabulary"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. 'Unlike the permanent staff, the seasonal workers were transient.' Which clue type pins 'transient'?",
        hints: ["What does 'unlike' set up?"],
        options: [
          { id: "a", text: "A contrast clue: 'transient' is opposed to 'permanent', so it means not lasting." },
          { id: "b", text: "A definition clue: the sentence defines the word directly." },
          { id: "c", text: "An example clue: the seasonal workers are listed as instances." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "A contrast clue: 'transient' is opposed to 'permanent', so it means not lasting.",
          "'Unlike' sets the unknown word against a known opposite, and the contrast carries the meaning across — passing or short-lived, which the workers' seasonality confirms.",
          "No definition is stated (b), and the workers are the subject of the contrast, not examples of the word (c).",
        ),
        tags: ["toefl", "reading", "vocabulary"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Complete the word-family rule.",
        hints: [],
        sentence: "Prefixes adjust a root's meaning, while suffixes usually change its ___ .",
        acceptedAnswers: ["word class", "part of speech", "class", "word class (part of speech)"],
        feedback: fb(
          "Word class (part of speech).",
          "Analyse the verb becomes analysis the noun and analytical the adjective — the root's meaning travels while the slot changes, which is why family recognition reads four forms as one word.",
          "Answers saying 'spelling' or 'length' miss the grammatical job the suffix performs.",
        ),
        tags: ["toefl", "reading", "vocabulary"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Derive the meaning, then answer.",
        hints: [],
        passageTitle: "One clue at work",
        passage:
          "The early canals were temperamental: a hard rain could raise the water past the towpaths, and a dry month could strand barges for weeks. Engineers of the period complained that no single chart captured the system, because the channels were forever shifting — widening here, silting up there.",
        question: "In this passage, 'temperamental' most nearly means…",
        options: [
          { id: "a", text: "behaving irregularly and hard to predict" },
          { id: "b", text: "having a bad temperature record" },
          { id: "c", text: "expensive to maintain" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "behaving irregularly and hard to predict",
          "The colon introduces the evidence — floods one week, stranded barges the next — and 'forever shifting' restates it, so the cause-effect and restatement clues jointly pin the meaning to irregular, unpredictable behaviour.",
          "Option (b) is trapped by the word's resemblance to 'temperature'; option (c) imports a cost claim no line supports.",
        ),
        tags: ["toefl", "reading", "vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Name the four context clue types taught in this lesson.",
        hints: [],
        question: "List the four clue types in one short answer.",
        acceptedAnswers: [
          "definition, example, contrast and cause-effect",
          "definition, example, contrast, cause and effect",
          "definition clue, example clue, contrast clue, cause-effect clue",
        ],
        keywords: ["definition", "example", "contrast", "cause"],
        feedback: fb(
          "Definition, example, contrast and cause-effect.",
          "The four types cover most passage glosses, and each tells you how tightly the meaning is pinned — exact from a definition, approximate from examples or contrast.",
          "Lists including translation or word families mix the protocol with its inputs.",
        ),
        tags: ["toefl", "reading", "vocabulary"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "vocabulary",
        prompt: "Independent practice. 'Constraint' is fixed as 'limiting factor' in paragraph one of a passage. Paragraph four reads 'constrained by cost'. What should you do?",
        hints: [],
        options: [
          { id: "a", text: "Re-derive the meaning from scratch, since the form changed." },
          { id: "b", text: "Carry the established sense: constrained by cost means limited by cost — the root keeps its meaning across forms." },
          { id: "c", text: "Skip the phrase; different forms mean different words." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Carry the established sense: constrained by cost means limited by cost — the root keeps its meaning across forms.",
          "A word's chosen sense holds across the passage, and families make the carry cheap: the root is identical, only the slot has changed from noun to verb.",
          "Re-deriving (a) pays twice for one meaning; skipping (c) abandons a phrase the items may well ask about.",
        ),
        tags: ["toefl", "reading", "vocabulary"],
      }),
    ],
    homework: [
      "From your next practice passage, collect five unknown words; for each, write the clue sentence, the clue type, a three-word paraphrase and one substitution check.",
      "Build a family card for one root: base form, two derived forms, and a sentence using three of the forms in one breath.",
    ],
    assignment: {
      title: "Word detective log",
      instructions:
        "Choose two unfamiliar words from any English text you read this week. For each word, write the sentence it appeared in, name the context clue type (or admit the context gave none), give a plain paraphrase, and write one new sentence of your own that uses the word correctly.",
      minWords: 60,
      maxWords: 150,
    },
  },
  {
    slug: "toefl-reading-ideas-details",
    title: "Main ideas and supporting details",
    description:
      "Academic prose argues: a central claim, paragraphs that make supporting claims, and details that serve them as evidence, examples or concessions. The claim-support distinction, the deletion test, and scope — the axis main-idea items really score.",
    objectives: [
      "distinguish a main idea from the details that serve it, using the deletion test",
      "locate thesis and topic sentences and label the services details perform",
      "test candidate main ideas by scope, and route detail items by the structural map",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Academic passages argue, and arguments have an architecture: a central claim, paragraphs that make supporting claims, and details that serve those claims as evidence, examples or concessions. The section's comprehension items test whether you can see that architecture — separating the point from its support, and a detail from the job the detail does. This lesson teaches the claim-support distinction, where main ideas live in academic prose, and the scope test that tells a main idea from a prominent detail at pace.",
        beforeYouStart: [
          "You can draw a passage's structural map from the academic-passage lesson.",
          "You can locate the evidence line for an item without rereading the passage.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the comprehension layer of both task types, and the heart of the academic passage"],
          ["Task & question types", "Main-idea and detail items inside the twenty comprehension items, including their select-two forms"],
          ["What is assessed", "Separating a passage's central claim from the material that supports it, and identifying the function a detail performs"],
          ["Why this matters", "Main-idea items are among the most mis-answered in the section because prominent details impersonate claims — the distinction is trainable"],
        ],
      },
      { type: "heading", text: "Claim and support" },
      {
        type: "text",
        text: "A main idea is a claim: something the passage asserts and stands behind. A supporting detail is a service: something presented to make a claim easier to accept — a number, a study, an example, a concession. The test is deletion: remove the sentence and ask what the paragraph loses. Delete a main idea and the paragraph loses its point; delete a detail and the paragraph loses a step of proof but keeps its point. Items exploit the confusion in both directions — options that are detailed but not main, and options that are main but belong to a different paragraph.",
      },
      {
        type: "definition",
        term: "thesis statement",
        partOfSpeech: "noun phrase",
        definition: "The sentence, usually in the opening paragraph, that states the passage's central claim — the idea every other paragraph exists to support, qualify or answer.",
        example: {
          english: "In a passage about urban heat, the thesis 'volunteer sensors are changing municipal policy' is the claim the cause, the objection and the results paragraphs all serve.",
          translation: "",
        },
      },
      {
        type: "comparison",
        title: "The claim and its service",
        columns: ["Main idea (the claim)", "Supporting detail (the service)"],
        rows: [
          {
            aspect: "What it is",
            left: "An assertion the passage stands behind.",
            right: "Material offered to make an assertion easier to accept.",
          },
          {
            aspect: "Where it lives",
            left: "The thesis in paragraph one; each paragraph's topic sentence after that.",
            right: "Anywhere after the topic sentence — mid-paragraph, inside examples, in parentheses.",
          },
          {
            aspect: "The deletion test",
            left: "Remove it and the paragraph, or the passage, loses its point.",
            right: "Remove it and the argument loses a step of proof, not its point.",
          },
          {
            aspect: "How items use it",
            left: "Main-idea items ask for the claim; select-two items ask which claims the passage supports.",
            right: "Detail items ask what a specific line contributes — evidence, example or concession.",
          },
        ],
        verdict: "Ask of every sentence: is this the point, or is this in service of the point?",
      },
      {
        type: "steps",
        title: "Reading the architecture at pace",
        intro: "Five moves, run on the map you already draw.",
        steps: [
          {
            title: "Find the thesis in the opening",
            text: "The first paragraph frames the topic and usually commits to a claim; read its last sentence first if the opening hedges. The thesis is the passage's promise, and every later paragraph exists to keep it.",
            examples: [
              {
                english: "A passage opens with two sentences of context and closes its first paragraph with 'the sensors are changing municipal policy' — that is the promise the rest must keep.",
                note: "Openings set up; thesis sentences commit.",
              },
            ],
          },
          {
            title: "Read each paragraph for its topic sentence",
            text: "Most paragraphs open with the claim the paragraph will develop; note it in three words on your map. When the opening sentence is a transition or a hook, the topic sentence sits second.",
            examples: [
              {
                english: "'Skeptics note…' opens a paragraph with a concession claim — the map note reads 'objection', and detail items about that paragraph route there.",
                note: "Topic sentences are claims, not summaries of everything the paragraph holds.",
              },
            ],
          },
          {
            title: "Label the services",
            text: "For each following sentence ask: evidence (a number, a result, a citation), example (an instance that grounds the claim), concession (a point granted to the other side) or restatement (the claim in new words). Labelling is faster than translating, and detail items ask for exactly these labels.",
            examples: [
              {
                english: "'Two streets a hundred metres apart can differ by several degrees' is evidence; 'a bakery's roof hosted a sensor' is an example; 'placement favours balconies' is a concession.",
                note: "Function words often announce the service: 'for instance', 'however', 'indeed'.",
              },
            ],
          },
          {
            title: "Test candidate main ideas by scope",
            text: "A correct main idea covers the passage's paragraphs without covering the world: it must include what every paragraph serves, and exclude what only one paragraph owns. Too-broad and too-narrow options are near-misses of scope.",
            examples: [
              {
                english: "'Sensors help cities' is too broad for a passage about policy change; 'one city planted trees' is too narrow to be the thesis.",
                note: "Scope is the main-idea item's real axis.",
              },
            ],
          },
          {
            title: "Answer detail items by routing",
            text: "A detail item names or implies its paragraph; use the map, verify the line, and answer with the service the line performs. Never reread the passage for a detail your map can route.",
            examples: [
              {
                english: "'Why does the author mention the bakery's roof?' routes to the example label — the mention grounds the sensors' spread in an instance.",
                note: "Function questions are routing questions.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "The services and their signals",
        headers: ["Service", "What it contributes", "Typical signals"],
        rows: [
          ["Evidence", "A number, result or finding that makes the claim harder to deny", "figures, dates, study verbs: found, showed, measured"],
          ["Example", "A concrete instance that grounds the claim in the world", "such as, for instance, including, a named case"],
          ["Concession", "A point granted to the other side, usually before a counter", "admittedly, skeptics note, of course, it is true that"],
          ["Restatement", "The claim in fresh words, often to fix its limits", "in other words, that is, put simply"],
        ],
        caption: "Function items usually name the service in the stem: 'why does the author mention…' asks for a service label.",
      },
      {
        type: "example",
        title: "Architecture, item by item",
        items: [
          {
            english: "Passage claim: sensor maps change policy. Detail: 'several cities now target tree-planting where sensors show heat concentrating.' The detail is evidence — policy acting on data.",
            note: "Evidence answers 'how do we know?'",
            domain: "exam",
          },
          {
            english: "Passage claim: expectations of speed reset with each medium. Detail: 'a message that crossed a country in minutes demanded an answer within the hour.' The detail is an example — one medium, one case.",
            note: "Examples answer 'like what?'",
            domain: "study",
          },
          {
            english: "Passage claim: volunteer data is dense. Concession: 'equipment varies and balconies outnumber parks.' The concession grants the objection before the next paragraph answers it.",
            note: "Concessions answer 'what about the other side?'",
            domain: "exam",
          },
          {
            english: "A main-idea item offers 'trees cool streets' as an option; the passage's thesis is about policy change. The option is a true detail of the wrong scope — too narrow to be the claim.",
            note: "Scope, not truth, is the main-idea axis.",
            domain: "exam",
          },
          {
            english: "A student labels each paragraph of a course reading claim, evidence, example in the margin and finds the article's argument visible at a glance during the seminar.",
            note: "The architecture habit serves reading beyond the test.",
            domain: "work",
          },
          {
            english: "A select-two item asks which two sentences support the central claim; the reader who labelled services on the map answers from the labels, not from rereading.",
            note: "Labels are pre-computed answers.",
            domain: "study",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Architecture mistakes corrected",
        items: [
          {
            wrong: "The main idea is whatever the passage spends most words on.",
            right: "The main idea is the claim the words serve: find the thesis and the topic sentences, then test candidates by scope.",
            reason: "Passages spend most of their words on evidence and examples, so word-counting promotes a detail to a claim.",
          },
          {
            wrong: "A striking statistic is the main idea because it is memorable.",
            right: "A statistic is a service: label it evidence and ask which claim it serves.",
            reason: "Memorability is a property of details; main-idea items are lost to exactly the most vivid numbers.",
          },
          {
            wrong: "Topic sentences always come first in a paragraph.",
            right: "Claim the paragraph's claim wherever it sits — usually first, sometimes second after a transition, occasionally last as a conclusion.",
            reason: "Position is a habit of prose, not a law; the deletion test, not the position, identifies the claim.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One passage, dissected",
        reading: {
          text: "Reading on paper declined steadily for a decade — then flattened. Analysts first credited the pandemic's screen fatigue, but the timing was wrong: the flattening began two years earlier. A second explanation lies in format: short-form video absorbed the idle minutes that magazines once owned, yet book sales rose in the same years. The most persuasive account is structural — libraries. Renewed public investment made borrowing free at exactly the moment discretionary budgets tightened, and library circulation, unlike sales, is invisible in the publishing industry's figures.",
          task: "Before the writing tab, mark the thesis and label each rejected explanation's service.",
        },
        writing: {
          task: "In 60–100 words, state the passage's central claim, name the service the library evidence performs for it, and explain in one sentence why the screen-fatigue explanation fails.",
          guide: [
            "Sentence one: the central claim — the structural account about libraries and invisible circulation.",
            "Sentence two: the library evidence's service — it explains what sales figures cannot see.",
            "Sentence three: why screen fatigue fails — the timeline mismatch.",
            "Keep each claim anchored to the passage's own words where you can.",
          ],
          model:
            "The passage's central claim is structural: renewed library investment made free borrowing coincide with tightened budgets, so reading survived while sales-based figures stopped seeing it. The library evidence performs the claim's key service — it explains the flattening from a direction the industry's numbers cannot record, since circulation is invisible in sales data. The screen-fatigue explanation fails on timing: the flattening began two years before the pandemic, so a cause that arrives late cannot explain a change that arrived early.",
        },
        listening: {
          script:
            "Tutor: Your map of that reading-habits passage? Student: Thesis in the last sentence of paragraph one — the structural account about libraries. Paragraph two is the rejected explanation, screen fatigue, with the timing objection as its evidence. Paragraph three is the alternative, short-form video, with book sales as the counter-detail. Paragraph four is the thesis's own evidence: circulation is invisible in sales figures. Tutor: So if an item asks why the author mentions book sales rising? Student: It's evidence against the video explanation — a counter-detail. The mention serves the rejection, not the thesis directly.",
          task: "According to the student's map, what service does the rising-sales detail perform, and for which claim?",
        },
        speaking: {
          task: "Explain the deletion test to a partner in under a minute, using one paragraph of the reading-habits passage as your worked case.",
          frames: [
            "The deletion test asks …",
            "Take the sentence …: delete it and the paragraph loses …",
            "Now delete the sentence …: the argument keeps its point but loses …",
            "So the first is the …, and the second is the …",
          ],
          checklist: [
            "Did I perform the test on two different sentences?",
            "Did I name what each deletion costs the paragraph?",
            "Did I state which sentence is the claim?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Claim, service, rejection — three sentences that mirror the passage's own architecture, so the model demonstrates the analysis it reports."],
          ["Grammar", "Attribution verbs ('performs', 'explains', 'fails') keep the passage's claims and the writer's judgement grammatically separate."],
          ["Vocabulary", "Architecture vocabulary works throughout — thesis, service, evidence, counter-detail — naming the parts the items ask about."],
          ["Coherence", "The model's third sentence wins by evidence, not assertion: the timing mismatch is the passage's own grounds for rejection, reused as the writer's grounds."],
          ["Task fulfilment", "The central claim is stated, the library evidence's service is named, and the failed explanation is dispatched with the passage's own timeline logic."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Map with intent: beside each paragraph note claim and services, not just topics — the labels are pre-computed answers."],
          ["While the clock runs", "Route detail items by the map's service labels, and test any main-idea candidate by scope before trusting it."],
          ["If you are stuck", "Run the deletion test on the two sentences you are choosing between; the one whose removal costs the paragraph its point is the claim."],
          ["Final minutes", "Re-check only the stem of main-idea items — 'mainly about' and 'primary purpose' are scope questions wearing different coats."],
        ],
      },
      {
        type: "summary",
        points: [
          "A main idea is a claim; a supporting detail is a service — evidence, example, concession or restatement — offered to a claim.",
          "The deletion test identifies claims: removing a claim costs the paragraph its point; removing a detail costs a step of proof.",
          "The thesis lives in the opening paragraph; topic sentences carry each paragraph's claim, usually first, sometimes after a transition.",
          "Main-idea items are scope questions: the right option covers every paragraph without covering the world.",
          "Function items ('why does the author mention…') ask for a service label — route them by the map, verify one line, answer.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from each of the module's earlier lessons.",
        items: [
          {
            question: "What does the structural map record for each paragraph?",
            options: ["A three-word topic note from each paragraph's first sentence plus the final sentence", "Its word count and reading level", "Every sentence in compressed form"],
            correctIndex: 0,
            explanation: "The map reads the first sentence of every paragraph and the passage's final sentence, noting each paragraph's topic in three words.",
            from: "toefl-reading-academic-passage",
          },
          {
            question: "Which near-miss states something true from the passage but answers a different question?",
            options: ["True but unasked for", "The overstatement", "The half-pair"],
            correctIndex: 0,
            explanation: "Re-reading the item's question against a prediction is the test that kills it.",
            from: "toefl-reading-academic-passage",
          },
          {
            question: "What does a context clue supply for an unknown word?",
            options: ["Evidence in the same or a neighbouring sentence from which the meaning can be derived", "A dictionary definition in a footnote", "The word's origin language"],
            correctIndex: 0,
            explanation: "Definition, example, contrast and cause-effect clues gloss most unknown words where they stand.",
            from: "toefl-reading-vocabulary",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Find the claim, then choose the option that matches its scope.",
        hints: ["Test each option by deletion: which one does the whole passage serve?"],
        passageTitle: "Bee lines",
        passage:
          "Urban beekeeping boomed for a decade, and rooftop hives became a visible badge of green intent. The bees themselves told a harder story: honey yields per hive fell as hive numbers rose, and winter losses climbed in the densest districts. Pollination rates in city gardens, meanwhile, stayed steady — the wild bees, not the managed hives, were doing most of that work. The boom, researchers concluded, had outpaced the forage: cities simply could not feed the number of hives their residents had installed.",
        question: "Which option states the passage's central claim?",
        options: [
          { id: "a", text: "Rooftop hives are a badge of green intent." },
          { id: "b", text: "Cities cannot support the number of beehives their residents have installed, and the bees are paying for it." },
          { id: "c", text: "Wild bees pollinate city gardens better than managed hives." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Cities cannot support the number of beehives their residents have installed, and the bees are paying for it.",
          "The final sentence states the claim outright — the boom outpaced the forage — and the falling yields and climbing losses are its evidence, with the steady pollination a detail about wild bees doing the work.",
          "Option (a) is a detail from the opening context; option (c) is a true detail of paragraph three promoted beyond its scope.",
        ),
        tags: ["toefl", "reading", "main-idea"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Read the paragraph, then choose the sentence that carries its claim.",
        hints: ["Run the deletion test on each candidate."],
        passage:
          "For decades, textbook illustrations showed the water cycle as a closed loop: ocean to cloud to rain to river and back. Recent measurements complicate the picture. Almost a third of the rain that falls over land, it turns out, never reaches a river — plants intercept it first and return it directly to the air. The classic diagram, tidy as it is, quietly omits the busiest exchange of all.",
        options: [
          { id: "a", text: "For decades, textbook illustrations showed the water cycle as a closed loop: ocean to cloud to rain to river and back." },
          { id: "b", text: "Almost a third of the rain that falls over land, it turns out, never reaches a river — plants intercept it first and return it directly to the air." },
          { id: "c", text: "The classic diagram, tidy as it is, quietly omits the busiest exchange of all." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "The classic diagram, tidy as it is, quietly omits the busiest exchange of all.",
          "Delete that sentence and the paragraph loses its point — the illustration is incomplete; the other two sentences are the setup and the evidence whose only job is to earn it.",
          "The textbook sentence (a) is context and the one-third measurement (b) is evidence: deleting either costs a step of proof, not the point.",
        ),
        tags: ["toefl", "reading", "main-idea"],
      }),
      ex({
        type: "sentence-build",
        difficulty: "easy",
        skill: "reading",
        prompt: "Guided practice. Assemble the deletion test from the tiles.",
        hints: ["The test has two halves — delete, then ask what is lost."],
        tiles: ["Delete", "the", "sentence,", "then", "ask", "what", "the", "paragraph", "loses."],
        acceptedSentences: ["Delete the sentence, then ask what the paragraph loses."],
        feedback: fb(
          "Delete the sentence, then ask what the paragraph loses.",
          "The two halves of the test mirror the two possible outcomes: a claim's deletion costs the point, a detail's deletion costs only a step of proof — which is why the test works at pace.",
          "Any ordering that asks what the paragraph 'wins' or 'proves' loses the test's asymmetry between claim and service.",
        ),
        tags: ["toefl", "reading", "main-idea"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Name the four services details perform for a claim, as taught in this lesson.",
        hints: [],
        question: "List the four services in one short answer.",
        acceptedAnswers: [
          "evidence, example, concession and restatement",
          "evidence, examples, concessions, restatements",
          "evidence, example, concession, restatement",
        ],
        keywords: ["evidence", "example", "concession", "restatement"],
        feedback: fb(
          "Evidence, example, concession and restatement.",
          "The four services answer the four questions a claim attracts — how do we know, like what, what about the other side, and what exactly — and function items ask for these labels by name.",
          "Lists including 'summary' or 'conclusion' import services the lesson's table deliberately excludes, because those serve the reader, not the claim.",
        ),
        tags: ["toefl", "reading", "main-idea"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Complete the main-idea rule.",
        hints: [],
        sentence: "Main-idea items are ___ questions: the right option covers every paragraph without covering the world.",
        acceptedAnswers: ["scope"],
        feedback: fb(
          "Scope.",
          "The right option's coverage must match the passage's — too broad borrows importance from the world, too narrow promotes one paragraph's claim to the whole passage's.",
          "'Truth' is not the axis: most wrong options on main-idea items are true statements of the wrong size.",
        ),
        tags: ["toefl", "reading", "main-idea"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A passage about volunteer sensing mentions that 'a bakery's roof hosted one of the first sensors'. What service does this mention perform?",
        hints: [],
        options: [
          { id: "a", text: "Evidence — it proves the sensors are accurate." },
          { id: "b", text: "Example — it grounds the sensors' spread in one concrete instance." },
          { id: "c", text: "Concession — it grants that placement is biased." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Example — it grounds the sensors' spread in one concrete instance.",
          "A named, concrete case is the example service's signature: it answers 'like what?' for the claim it follows, here the spread of volunteer sensing across unlikely places.",
          "The bakery proves nothing about accuracy (a) and concedes nothing (c) — it is one instance doing an instance's job.",
        ),
        tags: ["toefl", "reading", "main-idea"],
      }),
    ],
    homework: [
      "Take one practice passage and label every sentence of two paragraphs with its job — claim, evidence, example, concession or restatement — then check your labels against the items the passage carries.",
      "Write one sentence stating the thesis of an article you read this week, then delete it mentally and note what the article loses — the practice makes scope visible.",
    ],
    assignment: {
      title: "Architecture report",
      instructions:
        "Using the 'Reading on paper' passage from this lesson's reading tab, write 60–150 words that (1) state the passage's central claim, (2) name the service each of the two rejected explanations performs, and (3) explain why the library evidence is the claim's strongest support.",
      minWords: 60,
      maxWords: 150,
    },
  },
  {
    slug: "toefl-reading-inference",
    title: "Inference",
    description:
      "What the author implies but never states: the smallest step the printed evidence forces, tested against every relevant line, with outside knowledge checked at the door. The inference protocol and the traps that impersonate conclusions.",
    objectives: [
      "define a testable inference as the smallest step the located lines force",
      "apply the inference protocol: question, evidence, smallest step, consistency test",
      "resist outside-knowledge options and merely consistent options on inference items",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Some items ask what a passage suggests rather than what it states, and those are the inference items — among the most misread in the section, because the everyday meaning of 'infer' (guess, surmise, suspect) is exactly what the test forbids. A testable inference is a small step the printed evidence forces: not stated, but unavoidable. This lesson defines the line, installs the protocol that keeps every inference anchored to located lines, and teaches the discipline the items actually test — leaving your outside knowledge at the door.",
        beforeYouStart: [
          "You can locate an item's evidence zone using a structural map.",
          "You have completed the near-miss catalogue in the academic-passage lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — inference items inside both comprehension task types, single-answer and select-two"],
          ["Task & question types", "Items asking what the passage suggests, implies or most likely holds, on everyday and academic texts alike"],
          ["What is assessed", "Taking the smallest step the evidence forces, and testing it against the passage rather than the world"],
          ["Why this matters", "Inference items are where outside knowledge most reliably costs marks — the discipline is the score"],
        ],
      },
      { type: "heading", text: "The line between stated and forced" },
      {
        type: "text",
        text: "An inference item's correct option is not in the passage — if it were, the item would be a detail item — but the passage makes it unavoidable. If a text says the bakery opened at dawn and the queue had formed by first light, the passage has not stated that customers arrived before opening, yet nothing else can be true. That is the size of step the items demand: one step, forced by the printed lines, contradicted by nothing in the passage. Options that require two steps — or that the world could doubt even if the passage is true — are near-misses, however plausible they feel.",
      },
      {
        type: "definition",
        term: "inference",
        partOfSpeech: "noun",
        definition: "A conclusion the printed evidence forces but the passage never states: one small step beyond the located lines, consistent with every line of the text.",
        example: {
          english: "'The clinic's waiting room held only staff chairs by six' supports the inference that patients were no longer being seen that evening — never stated, nowhere contradicted.",
          translation: "",
        },
      },
      {
        type: "steps",
        title: "The inference protocol",
        intro: "Five moves, run in order, every time.",
        steps: [
          {
            title: "Hold the item's exact question",
            text: "Note whether the item asks what the passage suggests, implies or most likely believes — the verbs differ slightly, but all of them demand evidence-forced steps, not opinions.",
            examples: [
              {
                english: "'What can be inferred about the festival's second year?' must be answered from the passage's second-year lines, not from festival history in general.",
                note: "The question names the evidence zone.",
              },
            ],
          },
          {
            title: "Collect the located lines",
            text: "Find the one or two zones the item depends on and read them at word level; an inference lives in its evidence or it lives nowhere.",
            examples: [
              {
                english: "An inference about the clinic's evening rests on one line about chairs and one about closing time — both located, both read closely.",
                note: "Inference is detail reading plus a step.",
              },
            ],
          },
          {
            title: "Take the smallest forced step",
            text: "Ask: if these lines are true, what else must be true? The answer that adds least — one fact, no embellishment — is the candidate, because it is the only step the evidence guarantees.",
            examples: [
              {
                english: "Queue at first light plus doors open at dawn forces 'customers arrived before opening' — nothing about why, how many, or what they bought.",
                note: "Smallest step wins because it is the only guaranteed step.",
              },
            ],
          },
          {
            title: "Test against every relevant line",
            text: "Check the candidate against the whole zone and the passage's stance: a single contradiction kills the inference, whatever its plausibility.",
            examples: [
              {
                english: "A candidate inference of 'the bakery was popular' dies if a line attributes the queue to a bread shortage elsewhere — same lines, different force.",
                note: "The test is consistency, not charm.",
              },
            ],
          },
          {
            title: "Check outside knowledge at the door",
            text: "Ask of every option: does the passage alone make this true? If the option needs your world knowledge to feel right, it is a near-miss by construction.",
            examples: [
              {
                english: "'The bakery's bread is organic' feels right to a reader who queues at organic bakeries; the passage never says it, so it dies.",
                note: "Plausibility is the trap's camouflage.",
              },
            ],
          },
        ],
      },
      {
        type: "comparison",
        title: "Two steps that look alike",
        columns: ["Inference (evidence-forced)", "Assumption (knowledge-driven)"],
        rows: [
          {
            aspect: "Origin",
            left: "The passage's located lines.",
            right: "The reader's world knowledge or expectations.",
          },
          {
            aspect: "The step",
            left: "The smallest conclusion the lines force.",
            right: "A conclusion the lines permit but do not require.",
          },
          {
            aspect: "Test result",
            left: "Consistent with every relevant line.",
            right: "Often contradicted by a line the reader skipped.",
          },
          {
            aspect: "On the test",
            left: "The correct option on inference items.",
            right: "The most attractive wrong option on inference items.",
          },
        ],
        verdict: "Ask of every inference candidate: could a careful reader who knew nothing about the world still force this step from the lines alone?",
      },
      {
        type: "table",
        title: "How inference items ask",
        headers: ["Item wording", "What it demands", "What it forbids"],
        rows: [
          ["What does the passage suggest about X?", "The smallest step X's lines force", "Your opinion of X, or the world's"],
          ["What can be inferred from the passage?", "A conclusion no line contradicts and some line requires", "A restatement of a printed line — that is a detail item"],
          ["The author most likely believes…", "The stance the passage's choices of word and example reveal", "A biography of the author, or their other works"],
          ["Which two statements follow from the passage?", "Two evidence-forced steps, selected as a pair", "Two merely consistent statements — permitted is not forced"],
        ],
        caption: "Different stems, one bar: forced by the lines, contradicted by nothing.",
      },
      {
        type: "example",
        title: "Forced and unforced, side by side",
        items: [
          {
            english: "Passage: 'The ferry ran twice daily until the bridge opened; by the following summer, the operator had sold both vessels.' Inference: the ferry lost its passengers to the bridge — the sale forces it.",
            note: "One step from two lines: no stated cause, no other cause the lines allow.",
            domain: "exam",
          },
          {
            english: "Passage: 'The laboratory's night permits were issued to eleven researchers in its first year.' Inference: some researchers worked past 21:00 in year one — the permit system exists precisely for that.",
            note: "Existence inferences from systems and their rules are among the safest steps.",
            domain: "campus",
          },
          {
            english: "A reader infers the bakery's bread is organic because the queue 'stretched past the organic grocer' — the line locates a queue, not a certificate; the inference is an assumption in costume.",
            note: "Adjacency licenses nothing: neighbouring facts are not evidence.",
            domain: "everyday",
          },
          {
            english: "Passage: 'The mayor's office declined to comment; its earlier statement praising the sensors remains on the city website.' Inference: the office has not withdrawn its support — remaining online is the forcing fact.",
            note: "Continuity inferences rest on stated continuities, not on silence.",
            domain: "work",
          },
          {
            english: "A select-two inference item offers two forced steps, one permitted-but-unforced statement and one contradiction; the reader who tests each option against the zone banks the pair in ninety seconds.",
            note: "The protocol scales to pairs unchanged.",
            domain: "exam",
          },
          {
            english: "A candidate 'saves time' by choosing the option that matches her own city's parking policy; the passage is about a different city and the option dies on one line.",
            note: "Outside knowledge is fast, confident and wrong in exactly this family.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Inference mistakes corrected",
        items: [
          {
            wrong: "An inference is a good guess about what the author probably means.",
            right: "An inference is the smallest conclusion the located lines force — a step the passage guarantees, not a guess it permits.",
            reason: "The everyday sense of infer is the test's own trap: the items are built to fail exactly the readers who guess well.",
          },
          {
            wrong: "If an option is consistent with the passage, it is a valid inference.",
            right: "Consistency is the floor; being forced is the bar — the option must be required by the lines, not merely compatible with them.",
            reason: "Test writers pair each forced option with a merely consistent one, because consistency is where the untrained reader stops checking.",
          },
          {
            wrong: "My background reading on the topic will help me here.",
            right: "The passage alone decides: any option that needs outside support to feel right is a near-miss by construction.",
            reason: "Inference items are the one place where knowing more is a measured liability — the test prices evidence, not erudition.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One archive, forced and unforced",
        reading: {
          text: "The archive's reading room filled by ten each morning in term time, and the librarians installed a ticket machine at the door by November. In the vacation weeks the room fell quiet, though the machine stayed. A visiting researcher, told she could simply walk in during February, noted that the machine now issued admission tickets year-round, and asked whether the term-time queue had ever been turned away.",
          task: "Before the writing tab: what do the machine's persistence and the researcher's question each force?",
        },
        writing: {
          task: "In 50–90 words, state one inference the passage forces about February admissions, and one inference it does not force — naming the lines that force the first and the outside knowledge that tempts the second.",
          guide: [
            "First sentence: the forced inference — during February the room was not full, and walk-in entry was possible.",
            "Name the forcing lines: the vacation quiet plus the machine issuing tickets year-round.",
            "Second half: a tempting but unforced inference — for example that the machine was installed to restrict entry.",
            "Say why it is unforced: the passage never states that any queue was turned away.",
          ],
          model:
            "The passage forces this: in February the reading room was not full, and a visitor could enter without queuing — the vacation lines say the room fell quiet while the machine kept issuing tickets, so entry remained open and uncontested. It does not force the tempting claim that the machine was installed to keep people out: no line says any queue was ever turned away, and the researcher's question is a question, not a fact. That claim would need outside assumptions about how institutions behave — exactly the knowledge the item format prices out.",
        },
        listening: {
          script:
            "Tutor: Inference item on the ferry passage: 'The operator sold both vessels by the following summer.' What can we infer? Student: That the ferry stopped being viable when the bridge opened — the sale forces it, because nobody sells both vessels of a running service. Tutor: What can't we infer? Student: That the operator was angry about the bridge, or that passengers preferred the bridge's price. Tutor: Why not? Student: Nothing in the lines forces feelings or preferences — those are two steps, and the second needs facts about fares the passage never gives. Tutor: So the rule? Student: One step, forced by the lines, contradicted by nothing.",
          task: "State the rule the student ends with, and name one inference she rejected as two steps.",
        },
        speaking: {
          task: "Explain to a partner, in under a minute, the difference between a forced and a permitted conclusion, using one example of each.",
          frames: [
            "A forced conclusion starts from lines that say …",
            "From those lines, the smallest step is …, because …",
            "A permitted conclusion would be …, which the lines allow but never …",
            "So the test on test day is …",
          ],
          checklist: [
            "Did I read my forcing lines out loud?",
            "Did my permitted example fail the 'forced' bar, not the 'consistent' bar?",
            "Did I state the one-step rule?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Forced inference first, unforced temptation second — the model's order mirrors the protocol, and each half is anchored to named lines."],
          ["Grammar", "The model separates what the passage 'forces' from what it 'does not force', keeping the grammar of obligation on the evidence, not on the writer's hunches."],
          ["Vocabulary", "Protocol vocabulary carries the analysis: force, permit, contradict, step — the same terms the items' stems trade in."],
          ["Coherence", "The closing sentence names the outside-knowledge trap as the reason the second inference fails, linking the example back to the lesson's central discipline."],
          ["Task fulfilment", "One forced inference with its lines, one unforced inference with its source in outside assumption — both instructions answered with the passage's own evidence."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Fix the rule in mind: one small step, forced by located lines, contradicted by nothing — and the passage alone counts as evidence."],
          ["While the clock runs", "Collect the zone before considering options; a candidate inference without located lines is an assumption by definition."],
          ["If you are stuck", "Ask which option a reader with no world knowledge could still force from the lines — that question deletes the outside-fact near-misses instantly."],
          ["Final minutes", "Re-test any doubted inference against one relevant line; a single contradiction is a full refutation, and it takes seconds to find."],
        ],
      },
      {
        type: "summary",
        points: [
          "An inference is the smallest conclusion the printed lines force — not stated, not contradicted, and not a guess.",
          "The protocol: hold the question, locate the zone, take the smallest forced step, test against every relevant line, leave outside knowledge at the door.",
          "Consistency is the floor and being forced is the bar: options the passage permits are near-misses dressed as conclusions.",
          "Implication stems — suggest, imply, most likely, can be inferred — all demand evidence-forced steps; a restated line is a detail item, not an inference.",
          "Select-two inference items scale the protocol unchanged: score each option alone, take the pair the lines force.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from each of the module's earlier lessons.",
        items: [
          {
            question: "Which near-miss is an option that needs world knowledge to feel right?",
            options: ["The outside fact", "The overstatement", "True but unasked for"],
            correctIndex: 0,
            explanation: "Outside facts are true in the world and absent from the passage — the near-miss type most at home on inference items.",
            from: "toefl-reading-academic-passage",
          },
          {
            question: "On a select-two item, how are the options scored?",
            options: ["Independently, then selected as a pair", "As a group, by overall feel", "By choosing the strongest and adding one"],
            correctIndex: 0,
            explanation: "Pairs are earned option by option — assuming a set is how the half-pair trap wins.",
            from: "toefl-reading-academic-passage",
          },
          {
            question: "Which service does a detail perform when the author grants a point to the other side?",
            options: ["Concession", "Evidence", "Restatement"],
            correctIndex: 0,
            explanation: "Concessions are the granted points, usually signalled by 'admittedly' or 'skeptics note', and they matter for inference about the author's stance.",
            from: "toefl-reading-ideas-details",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Locate the lines, take the smallest step.",
        hints: ["What must be true if the final sentence is true?"],
        passageTitle: "The night bus",
        passage:
          "When the city cancelled the 2 a.m. bus in March, the transport authority's own data showed night-shift ridership at its highest in five years. The authority explained the cancellation as part of a route simplification, and its press release thanked 'the dedicated riders of the night network'. No replacement service was announced, and the release listed the simplified network's routes in full.",
        question: "What can be inferred from the passage?",
        options: [
          { id: "a", text: "Night-shift workers preferred the 2 a.m. bus to other routes." },
          { id: "b", text: "After March, riders of the cancelled route had no replacement announced for their journeys." },
          { id: "c", text: "The transport authority collected no ridership data before five years ago." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "After March, riders of the cancelled route had no replacement announced for their journeys.",
          "The release lists the new network in full and announces no replacement — one small step forces that the cancelled route's riders were left without an announced alternative, and no line contradicts it.",
          "Option (a) imports preferences the data never records; option (c) turns 'highest in five years' into a claim about all earlier data — two steps, and both unforced.",
        ),
        tags: ["toefl", "reading", "inference"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "reading",
        prompt: "Guided practice. Which question deletes outside-fact options fastest?",
        hints: ["Strip the reader's memory, not the passage."],
        options: [
          { id: "a", text: "Which option is the most interesting?" },
          { id: "b", text: "Could a reader with no world knowledge force this option from the lines alone?" },
          { id: "c", text: "Which option matches what usually happens in such cases?" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Could a reader with no world knowledge force this option from the lines alone?",
          "The question isolates the passage as the only evidence source: an option that survives it is evidence-forced, and an option that dies was living on your knowledge — the exact near-miss the family tests.",
          "Interest (a) and usual practice (c) are both popularity tests, and popularity is what outside facts trade in.",
        ),
        tags: ["toefl", "reading", "inference"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. State the inference rule in one sentence.",
        hints: [],
        question: "What three conditions must a testable inference meet?",
        acceptedAnswers: [
          "the smallest step the lines force, contradicted by nothing in the passage",
          "forced by the lines, not stated, contradicted by nothing",
          "one small forced step, consistent with every line, passage-only evidence",
        ],
        keywords: ["force", "step", "contradict"],
        feedback: fb(
          "The smallest step the located lines force, contradicted by nothing in the passage.",
          "Forced, small and uncontradicted — the three conditions separate an inference from the assumptions and restatements that impersonate it on every inference item.",
          "Answers built on 'consistent with the passage' stop at the floor: consistency permits, but only being forced concludes.",
        ),
        tags: ["toefl", "reading", "inference"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Take the smallest forced step.",
        hints: [],
        passageTitle: "Silent hours",
        passage:
          "The residence's quiet hours, posted since the building opened, run from ten at night to seven in the morning. In October the hall council added a second notice beside it: the ground-floor study lounge, open around the clock, would host no group activities after nine. No notice mentions the upper-floor lounges, which continued to be booked for birthday parties on Saturday nights.",
        question: "What does the passage suggest about the ground-floor lounge after nine?",
        options: [
          { id: "a", text: "It closes at nine each evening." },
          { id: "b", text: "It remains open, but only for individual, quiet use after nine." },
          { id: "c", text: "Group activities were banned because of complaints from the ground floor." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "It remains open, but only for individual, quiet use after nine.",
          "The lounge is 'open around the clock' and only group activities are excluded after nine — one step forces continued, quieter use; no line closes the lounge or names complainants.",
          "Option (a) contradicts 'around the clock'; option (c) adds a cause the notice never states — a second, unforced step.",
        ),
        tags: ["toefl", "reading", "inference"],
      }),
      ex({
        type: "multi-select",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Select-two: choose the two statements the silent-hours passage forces.",
        hints: [],
        options: [
          { id: "a", text: "Group activities could take place in the ground-floor lounge before nine in the evening." },
          { id: "b", text: "The hall council received complaints about noise in the study lounge." },
          { id: "c", text: "Birthday parties continued to be held in the upper-floor lounges after the October notice." },
          { id: "d", text: "The ground-floor lounge is the only room in the building open around the clock." },
        ],
        correctOptionIds: ["a", "c"],
        feedback: fb(
          "Group activities could take place in the ground-floor lounge before nine in the evening, and birthday parties continued in the upper-floor lounges after the notice.",
          "Both are one-step conclusions: a restriction 'after nine' leaves the hours before it open to the activity it names, and 'continued to be booked' states an ongoing practice into the present — neither is contradicted anywhere.",
          "Complaints (b) invent a cause no line names; the only-room claim (d) generalises from one mention to the whole building.",
        ),
        tags: ["toefl", "reading", "inference"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "reading",
        prompt: "Independent practice. Complete the bar an option must clear.",
        hints: [],
        sentence: "Consistency with the passage is the floor; being ___ by the located lines is the bar.",
        acceptedAnswers: ["forced", "required", "made necessary"],
        feedback: fb(
          "Forced.",
          "A valid inference is not merely compatible with the passage — the lines require it, which is why the smallest forced step beats every larger, more interesting alternative.",
          "'Permitted' and 'suggested' name the floor: options the passage allows but never demands are this family's signature near-miss.",
        ),
        tags: ["toefl", "reading", "inference"],
      }),
    ],
    homework: [
      "From your next practice passage, write one forced inference with its lines quoted, and one permitted-but-unforced statement that tempts you — label which outside knowledge does the tempting.",
      "Convert a detail item you answered correctly into an inference item: cover the answer's line and ask what the neighbouring lines still force.",
    ],
  },
  {
    slug: "toefl-reading-academic-vocabulary",
    title: "Academic vocabulary",
    description:
      "The cross-disciplinary word stock that recurs across TOEFL passages — the plumbing that carries claims, not the furniture that decorates topics — and the building routine that grows it from the common curriculum's Word World sets.",
    objectives: [
      "distinguish academic plumbing vocabulary from topic-specific furniture",
      "mine word families from practice passages and log them with their slots",
      "build the stock deliberately through the Word World sets in spaced batches",
    ],
    minutes: 12,
    blocks: [
      {
        type: "lesson-intro",
        text: "Beneath every task family sits one shared asset: the academic word stock — the cross-disciplinary words that carry an argument's plumbing rather than its topic's furniture. Words like analyse, significant, derive, indicate and constraint appear in passage after passage whatever the subject, because academic prose uses them to move claims around. A learner who owns this stock reads masks faster, maps passages faster and verifies options faster. This lesson defines the stock, separates it from topic jargon, and installs the building routine that grows it from the platform's Word World sets.",
        beforeYouStart: [
          "You know the context-clue protocol from the vocabulary lesson.",
          "You have completed at least one practice passage in this module.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Reading — the shared layer beneath masks, everyday texts and academic passages"],
          ["Task & question types", "Every task family draws on the same academic stock; vocabulary items ask about it directly"],
          ["What is assessed", "Speed and reliability of access to the words academic prose is actually built from"],
          ["Why this matters", "The stock is finite and learnable: time spent on it compounds across every item in the section"],
        ],
      },
      { type: "heading", text: "The plumbing, not the furniture" },
      {
        type: "text",
        text: "Every academic passage has two vocabularies. The furniture is the topic's own: photosynthesis, inflation, tectonic — words you meet in one subject and rarely elsewhere. The plumbing is shared across subjects: analyse, significant, derive, indicate, constraint, facilitate — the words that carry claims, evidence and conclusions wherever the topic goes. The test's passages change subjects freely, but their plumbing barely changes, which makes the plumbing the efficient thing to learn. And the plumbing is exactly what the common curriculum's Word World sets organise: cross-topic words in spaced, thematic batches you can study a set at a time.",
      },
      {
        type: "definition",
        term: "academic vocabulary",
        partOfSpeech: "noun phrase",
        definition: "The cross-disciplinary word stock that carries argument across subjects — verbs of analysis, nouns of evidence, adjectives of significance — as distinct from any single field's technical terms.",
        example: {
          english: "A passage on glaciers and a passage on markets both need 'fluctuate', 'substantial' and 'attribute' — plumbing both subjects draw on.",
          translation: "",
        },
      },
      {
        type: "comparison",
        title: "Two vocabularies, two strategies",
        columns: ["Academic plumbing (cross-disciplinary)", "Topic furniture (field-specific)"],
        rows: [
          {
            aspect: "Examples",
            left: "analyse, significant, derive, indicate, constraint, facilitate",
            right: "photosynthesis, inflation, tectonic, sonata",
          },
          {
            aspect: "Where it appears",
            left: "Every passage, whatever the subject.",
            right: "One subject's passages, and its lectures.",
          },
          {
            aspect: "How to learn it",
            left: "Deliberately, as spaced sets — the Word World academic collections.",
            right: "Incidentally, from context, when a passage introduces it.",
          },
          {
            aspect: "Payoff in the section",
            left: "Faster masks, faster maps, faster verification everywhere.",
            right: "Comfort on the rare passage that shares the field.",
          },
        ],
        verdict: "Learn the plumbing deliberately and let the furniture come to you — the stock is where the hours compound.",
      },
      {
        type: "table",
        title: "Six plumbing words and their slots",
        headers: ["Word", "What it does in a sentence", "Family forms"],
        rows: [
          ["analyse", "Verb of examination — takes the object being broken into parts", "analysis, analytical, analytically"],
          ["significant", "Adjective of importance or statistical weight — qualifies a finding", "significance, significantly"],
          ["derive", "Verb of sourcing — states where a result or a word comes from", "derivation, derivative"],
          ["indicate", "Verb of pointing — states what evidence shows", "indication, indicative"],
          ["constraint", "Noun of limit — names what holds a process back", "constrain, constrained"],
          ["facilitate", "Verb of enabling — names what makes a process easier", "facilitation"],
        ],
        caption: "Six words, six argument moves — and eighteen forms the section may visit.",
      },
      {
        type: "steps",
        title: "The building routine",
        intro: "Five moves, run as a loop, measured honestly.",
        steps: [
          {
            title: "Mine ten words per passage",
            text: "After each practice passage, harvest ten words that carried meaning — the verbs of the claims, the nouns of the evidence — and leave the furniture aside. Mining trains the eye to see plumbing while reading.",
            examples: [
              {
                english: "From an urban-heat passage: indicate, density, target, concentrate, bias — five plumbing words doing argument's work.",
                note: "Choose words the passage leans on, not words it decorates with.",
              },
            ],
          },
          {
            title: "Log the family, not the word",
            text: "Enter each mined word as a family: base form, its usual derivations, and the slot each fills. One family entry replaces four word-list items.",
            examples: [
              {
                english: "The entry for 'indicate' runs: indicate (verb, after a subject), indication (noun, after 'an'), indicative (adjective, before 'of').",
                note: "Families are how passages revisit a root.",
              },
            ],
          },
          {
            title: "Study the Word World sets in batches",
            text: "Work the common curriculum's academic word sets a set at a time, spaced — today's set reviewed before tomorrow's new one. The sets are pre-organised cross-topic stock, which is precisely the layer the section draws on.",
            examples: [
              {
                english: "A learner completes the 'evidence and claims' Word World set in two sittings and meets five of its words in her next practice passage.",
                note: "Spaced batches beat marathon lists on retention.",
              },
            ],
          },
          {
            title: "Recycle through use",
            text: "Each week, write one sentence per mined family — used in your own field if you have one. Production fixes what recognition merely visits.",
            examples: [
              {
                english: "An engineering student writes 'the design is constrained by weight' and never again hesitates on the family.",
                note: "Use transfers words from the page to the hand.",
              },
            ],
          },
          {
            title: "Re-measure through the section, honestly",
            text: "Every few weeks, run a timed Reading practice and convert the raw score with the platform's practice-estimate table — labelled as an estimate, since ETS publishes no public conversion — and watch the vocabulary items' share of your errors.",
            examples: [
              {
                english: "Three weeks of Word World batches drop vocabulary-linked errors from five per practice to one — the estimate line in the log moves with them.",
                note: "The error count is the routine's feedback loop.",
              },
            ],
          },
        ],
      },
      {
        type: "example",
        title: "The stock at work",
        items: [
          {
            english: "A candidate meets 'the data indicate' in a mask and restores indicate in seconds — partnership and plumbing both known — then banks the seconds for the passage's select-two item.",
            note: "Known plumbing converts mask time into passage time.",
            domain: "exam",
          },
          {
            english: "A student reads 'a significant constraint on expansion' in a business passage and 'a significant constraint on growth' in an ecology passage a week later — same plumbing, different furniture.",
            note: "The stock's cross-subject returns are the point of learning it.",
            domain: "study",
          },
          {
            english: "A learner mines 'derive' from a passage on word origins — 'the term derives from Latin' — and uses the family in her own essay on film genres two weeks later.",
            note: "Production recycles recognition into ownership.",
            domain: "study",
          },
          {
            english: "An office worker reads a budget memo built on facilitate, prioritise and implement — corporate prose runs on the same stock academic prose does.",
            note: "Academic plumbing is professional plumbing.",
            domain: "work",
          },
          {
            english: "A candidate who studied an evidence-and-claims Word World set maps a dense methodology paragraph faster, because its verbs — measure, indicate, attribute — arrive pre-known.",
            note: "Maps are drawn with plumbing words.",
            domain: "exam",
          },
          {
            english: "A learner skips the furniture — 'photosynthesis' in a botany passage — reads it as 'the process', and loses nothing: the item's answer never hinged on the term.",
            note: "Furniture can be carried as a label; plumbing cannot.",
            domain: "exam",
          },
        ],
      },
      {
        type: "mistakes",
        title: "Stock-building mistakes corrected",
        items: [
          {
            wrong: "I will memorise the glossary of my weakest school subject to prepare.",
            right: "Build the cross-subject plumbing through the Word World academic sets, and let subject glossaries wait for a passage that actually uses them.",
            reason: "The section changes subjects freely; hours on one field's furniture buy comfort on one passage at most.",
          },
          {
            wrong: "Learning a word means learning its dictionary form.",
            right: "Learn the family: base form, derivations and the slot each fills — passages revisit roots in new shapes.",
            reason: "A word known in one form is unknown again when the passage's grammar shifts it, which is exactly the shift masks test.",
          },
          {
            wrong: "Vocabulary study is separate from Reading practice.",
            right: "Mine each practice passage for families and feed them back into your Word World batches — the routine is a loop, not a shelf.",
            reason: "Words learned without passage contact decay before the test; words mined from passages return to passages reinforced.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "One paragraph, running on plumbing",
        reading: {
          text: "The study attributed the corridor's revival to two factors. First, a significant constraint had been lifted: the toll, abolished in 2019, had deterred commercial traffic for decades. Second, the city's grants facilitated small-scale restoration, and the data indicate that storefront occupancy derived most of its gains from these two changes alone — a finding the authors analyse at length before conceding its limits.",
          task: "Before the writing tab, underline the six plumbing words this paragraph runs on.",
        },
        writing: {
          task: "In 60–100 words, define any two of the paragraph's plumbing words as used there, and write one sentence of your own — about your own field or interest — that uses a form of each.",
          guide: [
            "Choose two words whose work in the paragraph you can name: attributing, limiting, enabling, pointing, sourcing or analysing.",
            "Define each in plain words as the paragraph uses it.",
            "Write your own sentence using one form of each word, in your own subject.",
            "Check each use against the slot the form requires.",
          ],
          model:
            "In the paragraph, 'constraint' names a limit holding a process back — the toll constrained commercial traffic for decades — and 'facilitate' means to make a process easier, as the grants facilitated restoration. From my own field of study: 'Storage space is the binding constraint on our lab's sample collection, and the new freezer facility should facilitate a doubling of the archive.' The noun keeps its 'a constraint on' slot, and the verb takes the process it eases as its object.",
        },
        listening: {
          script:
            "Tutor: Quick stock check. I say a word, you give me the family and the slot. 'Significant.' Student: Adjective, before a noun or after 'is' — significance as a noun, significantly as an adverb. Tutor: 'Derive.' Student: Verb — a result or a word derives from a source; derivation as the noun, derivative as the adjective. Tutor: Last one: 'attribute.' Student: Two families to watch — attribute a finding to a cause, verb, and an attribute of a system, noun — the stress moves. Tutor: And that stress pair is why families are logged with their slots, not just their spellings.",
          task: "Which word did the tutor flag as two families, and what moves between them?",
        },
        speaking: {
          task: "Explain to a partner, in under a minute, the difference between plumbing and furniture vocabulary, with one example of each from a text you have read.",
          frames: [
            "Plumbing vocabulary is the stock that …",
            "Furniture vocabulary belongs to …",
            "From a passage I read, the plumbing included …",
            "The furniture I could safely skip was …",
          ],
          checklist: [
            "Did I name the distinction's payoff — cross-subject return?",
            "Did my examples sit on the right side of the line?",
            "Did I state where the plumbing is deliberately built?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["Aspect", "What the model does"],
        rows: [
          ["Organisation", "Two definitions, then one produced sentence — the model moves from recognition to use in the exact order the building routine prescribes."],
          ["Grammar", "Each definition names the slot before the meaning — 'before a noun', 'takes the process as its object' — teaching grammar and vocabulary as one system."],
          ["Vocabulary", "The model's own sentence demonstrates the taught words in a lived context, with commentary naming the slot each form occupies."],
          ["Coherence", "The closing commentary links both uses back to their slots, so the sentence is not just correct but explained — the difference between use and display."],
          ["Task fulfilment", "Two words defined as the paragraph uses them, one original sentence with a form of each, and both uses checked against their slots."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the stock's economics: plumbing compounds across every passage, furniture pays on one — schedule Word World batches accordingly."],
          ["While the clock runs", "Treat unknown furniture as a label to carry ('the process'), and spend your decoding seconds on unknown plumbing, which usually carries the claim."],
          ["If you are stuck", "If a mask or option hinges on a word you half-know, check its family — the root you know is usually the same root wearing a suffix."],
          ["Final minutes", "Sweep flagged vocabulary items by re-testing the option's word against the located line's slot, not against your memory of its dictionary entry."],
        ],
      },
      {
        type: "summary",
        points: [
          "Academic vocabulary is the cross-disciplinary plumbing that carries claims, evidence and conclusions across every subject's passages.",
          "Topic furniture — one field's terms — can be carried as labels; the plumbing cannot, because it moves the argument.",
          "Build the stock deliberately: mine families from practice passages, study the Word World academic sets in spaced batches, and recycle through use.",
          "Log families with their slots — base form, derivations, and where each sits in a sentence — because the section revisits roots in new shapes.",
          "Measure honestly: timed practices converted with the platform's practice-estimate table show whether vocabulary-linked errors are falling.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item from each of the module's earlier lessons.",
        items: [
          {
            question: "What does a suffix usually do to a root word?",
            options: ["Changes its word class, as in analyse → analysis", "Changes its core meaning only", "Nothing at all"],
            correctIndex: 0,
            explanation: "Suffixes usually shift word class while prefixes adjust meaning — the family rule that makes four forms read as one word.",
            from: "toefl-reading-vocabulary",
          },
          {
            question: "What separates a valid inference from a merely permitted statement?",
            options: ["Being forced by the located lines", "Being consistent with the passage", "Being interesting"],
            correctIndex: 0,
            explanation: "Consistency is the floor and being forced is the bar — the inference lesson's central distinction.",
            from: "toefl-reading-inference",
          },
          {
            question: "Which evidence source restores a masked word's identity fastest?",
            options: ["A habitual partnership like 'draw a conclusion'", "The length of the mask", "The item's position in the section"],
            correctIndex: 0,
            explanation: "Collocation supplies candidates whole, while the slot's grammar and visible letters fix the form — the three-source method's second leg.",
            from: "toefl-reading-complete-words",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "vocab-match",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. Match each plumbing word with the job it does in academic prose.",
        hints: ["Two of the jobs are about limits and pointing — start there."],
        words: [
          { id: "w1", word: "facilitate", partOfSpeech: "verb" },
          { id: "w2", word: "constraint", partOfSpeech: "noun" },
          { id: "w3", word: "indicate", partOfSpeech: "verb" },
          { id: "w4", word: "attribute", partOfSpeech: "verb" },
        ],
        meanings: [
          { id: "m1", meaning: "to show or point to what evidence supports" },
          { id: "m2", meaning: "to make a process easier" },
          { id: "m3", meaning: "a limit that holds a process back" },
          { id: "m4", meaning: "to assign a result to a cause" },
        ],
        pairs: [
          { wordId: "w1", meaningId: "m2" },
          { wordId: "w2", meaningId: "m3" },
          { wordId: "w3", meaningId: "m1" },
          { wordId: "w4", meaningId: "m4" },
        ],
        feedback: fb(
          "Facilitate = make easier; constraint = a limit; indicate = point to what evidence shows; attribute = assign to a cause.",
          "Each match pairs a plumbing word with the argument job this lesson's table gave it — enabling, limiting, pointing and assigning are the moves academic prose makes constantly.",
          "Pairing facilitate with pointing confuses enabling with showing; constraint is never an assignment — it is what holds the process back.",
        ),
        tags: ["toefl", "reading", "academic-vocabulary"],
      }),
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "vocabulary",
        prompt: "Guided practice. A botany passage uses 'photosynthesis', 'significant', 'indicate' and 'mycorrhiza'. Which pair is the plumbing?",
        hints: ["Which words would a market-research passage also use?"],
        options: [
          { id: "a", text: "photosynthesis and mycorrhiza" },
          { id: "b", text: "significant and indicate" },
          { id: "c", text: "None — all four belong to botany." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "significant and indicate",
          "The plumbing is the cross-disciplinary stock: a passage on markets could use both words unchanged, while photosynthesis and mycorrhiza are the topic's furniture — learned incidentally, carried as labels.",
          "Choosing the topic pair (a) reverses the distinction; claiming all four are botany (c) ignores that argument words travel between subjects.",
        ),
        tags: ["toefl", "reading", "academic-vocabulary"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Guided practice. Complete the mining rule.",
        hints: ["What does mining log instead of single forms?"],
        sentence: "Mine each practice passage for ten words, then log each as a ___ : base form, derivations and the slot each fills.",
        acceptedAnswers: ["family", "word family", "family entry"],
        feedback: fb(
          "A family.",
          "Families are how passages revisit roots — the same word returns in new shapes, and a family entry with slots turns four meetings into one.",
          "Logging single forms leaves the root unknown again when the passage's grammar shifts it — the exact shift masks test.",
        ),
        tags: ["toefl", "reading", "academic-vocabulary"],
      }),
      ex({
        type: "short-answer",
        difficulty: "medium",
        skill: "vocabulary",
        prompt: "Independent practice. Where does this course send you to build the academic stock deliberately, and in what doses?",
        hints: [],
        question: "Name the resource and the dosing rule.",
        acceptedAnswers: [
          "the Word World academic sets, studied a set at a time with spaced review",
          "Word World sets in the common curriculum, one set per session, spaced",
          "the Word World sets — batches, spaced, today's set reviewed before tomorrow's new one",
        ],
        keywords: ["word world", "sets", "spaced"],
        feedback: fb(
          "The Word World academic sets in the common curriculum, a set at a time, spaced.",
          "The sets are pre-organised cross-topic stock — precisely the layer the section draws on — and spaced batches beat marathon lists because retention, not exposure, is what you are buying.",
          "Naming any dictionary or glossary route misses that the stock is deliberately organised for spaced study.",
        ),
        tags: ["toefl", "reading", "academic-vocabulary"],
      }),
      ex({
        type: "read-answer",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. Read the line, then answer.",
        hints: [],
        passageTitle: "One plumbing-heavy line",
        passage:
          "The decline cannot be attributed to a single cause: wage growth lagged for a decade, training budgets contracted, and the data indicate that experienced staff retired faster than replacements were trained — a constraint the reform package aimed to relieve but did not eliminate.",
        question: "In this line, what job does 'constraint' do?",
        options: [
          { id: "a", text: "It names the limit — retiring faster than training replaces — that the reform only partly relieved." },
          { id: "b", text: "It signals that the passage is about to change topic." },
          { id: "c", text: "It attributes the decline to wage growth alone." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "It names the limit — retiring faster than training replaces — that the reform only partly relieved.",
          "The noun names what holds the process back, and the line's own colon points to its content: retirements outpacing training, a limit the reform aimed at and did not remove.",
          "A topic-change signal (b) is a transition's job, not a noun's; attributing the decline to wages alone (c) contradicts the line's opening claim that no single cause suffices.",
        ),
        tags: ["toefl", "reading", "academic-vocabulary"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "reading",
        prompt: "Independent practice. A mask reads 'the findings s___ that costs fell'. Which family and form does the slot force?",
        hints: [],
        options: [
          { id: "a", text: "suggest — verb, base form after a plural subject" },
          { id: "b", text: "suggestion — noun, after a determiner" },
          { id: "c", text: "significant — adjective, before a noun" },
        ],
        correctOptionId: "a",
        feedback: fb(
          "suggest — verb, base form after a plural subject",
          "The slot wants a present-tense verb agreeing with 'the findings', and the partnership 'findings suggest' is plumbing the section reuses constantly — meaning, partnership and form agreeing on one word.",
          "A noun (b) cannot follow a plural subject without a verb; 'significant' (c) ignores both the slot and the visible letters.",
        ),
        tags: ["toefl", "reading", "academic-vocabulary"],
      }),
    ],
    homework: [
      "Mine ten plumbing words from your next practice passage, log each as a family with slots, and add them to your current Word World batch for spaced review.",
      "Write three sentences this week — one each from study, work and everyday life — each using a different form of one academic family (for example indicate, indication, indicative).",
    ],
  },
];
