/**
 * Chapter 1B — Writing foundations (Writing Masterclass, Part B).
 *
 * Five craft lessons that sit underneath every script: cohesion (the visible
 * machinery), coherence (the invisible logic), punctuation (the marks that
 * carry meaning), sentence variety (range the examiner can see) and time
 * management (the sixty-minute arithmetic).
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const awritingFoundationsLessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-cohesion",
    title: "Cohesion",
    description:
      "The visible machinery that binds sentences: devices chosen by function, reference chains, substitution and ellipsis, and the restraint that signals without smothering.",
    objectives: [
      "select cohesive devices by the logical job each joint performs, not from memorised lists",
      "build reference chains that carry one key noun across a whole paragraph",
      "apply the one-signal ceiling: enough linking to guide, never enough to bury the ideas",
      "separate cohesion, the surface machinery, from coherence, the logic it points at",
    ],
    minutes: 15,
    blocks: [
      {
        type: "lesson-intro",
        text: "Cohesion is the machinery on the surface of a script: the however that swings a paragraph round a corner, the this that picks a noun back up, the for instance that turns a claim into evidence. Examiners read for it directly — one of the four Writing scoring areas is named after it — and they meet your cohesion within four sentences of your opening. The craft fails in two opposite directions: scripts with no visible joints, where ideas sit side by side like unlinked carriages, and scripts so stapled together with linkers that the ideas underneath disappear. This lesson installs the machinery function by function, then installs the restraint that makes it look effortless.",
        beforeYouStart: [
          "You can build a paragraph of one controlling idea plus two or three supporting sentences.",
          "You know the four assessment areas from the orientation module's assessment lesson.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — both tasks, both variants: every script is read for connection"],
          ["Task & question types", "Task 2 essays in every question family, Task 1 data reports and GT letters — all are scored for cohesion"],
          ["What is assessed", "How sentences and paragraphs connect: linking devices, reference, substitution, and the accuracy of each"],
          ["Why this matters", "Cohesion is the most visible skill on the page: joints are seen before content is weighed, and a mislabelled linker can undo a good idea"],
        ],
      },
      { type: "heading", text: "Component 1 — What cohesion is, and what it is not" },
      {
        type: "text",
        text: "Definition: cohesion is the set of surface signals that tie a text together — conjunctions, linking adverbials, reference words, substitution and ellipsis. Its working partner, coherence, is the underlying logic those signals point towards. The two can come apart. A script can be densely cohesive and still incoherent: every joint labelled, yet no thread anyone could follow. It can also be coherent and barely cohesive: an argument that holds, but whose reader must do all the assembly alone. The scoring area names both because examiners judge both — cohesion asks whether the connections exist and whether each is used correctly; coherence, the subject of the next lesson, asks whether anything worth connecting is travelling down the wire. Build the joints here; build the journey next.",
      },
      { type: "heading", text: "Component 2 — The six device families" },
      {
        type: "table",
        title: "Devices by the job they do",
        headers: ["Function", "Carriers", "Working example"],
        rows: [
          ["Sequencing", "first, second, finally; subsequently; at this point", "The scheme began in 2004; subsequently, two further phases followed it."],
          ["Contrast", "however, whereas, in contrast, although, nevertheless", "Rural bus services expanded; city congestion, in contrast, grew worse."],
          ["Cause", "because, since, owing to, given that", "Because housing near the port was scarce, rents climbed steeply."],
          ["Addition", "moreover, furthermore, in addition, a second factor", "Furthermore, the new metro changed commuter habits within a year."],
          ["Exemplification", "for instance, such as, to illustrate, a case in point", "To illustrate, one coastal city grew from exactly such a ferry subsidy."],
          ["Consequence", "therefore, consequently, thus, as a result, hence", "As a result, village populations fell by almost a fifth."],
        ],
      },
      { type: "heading", text: "Component 3 — Four moves that install cohesion" },
      {
        type: "steps",
        title: "From function to finished paragraph",
        steps: [
          {
            title: "Move one: name the relation before you choose the word",
            text: "Before writing any linker, ask what the next sentence does to the one before it: extends it, contradicts it, gives its cause, draws a consequence, or hands over an example. Only when that job is named do you open the matching family and pick a carrier. A however bolted onto an addition does more damage than no linker at all, because it mislabels the very logic it was meant to display.",
            examples: [
              {
                english: "Sentence pair: 'Local taxes fell.' / 'Tourist spending rose.' — the relation is contrast, so whereas or in contrast fits, and therefore does not.",
                note: "Function first, word second: the order that keeps every device honest.",
              },
            ],
          },
          {
            title: "Move two: rotate the carrier",
            text: "Each function can ride more than one grammatical horse. Contrast travels as a conjunction (although), an adverb (however), or a prepositional phrase (despite this); cause rides because, owing to, or a participle. Rotating carriers across a paragraph displays range while keeping the logic constant, and repetition of a single carrier is the fastest way for a script to look mechanical.",
            examples: [
              {
                english: "Three carriers, one contrast: 'although demand fell' / 'demand fell; however, prices held' / 'despite falling demand, prices held'.",
                note: "Same relation, three shapes — range without risk.",
              },
            ],
          },
          {
            title: "Move three: chain your key noun with reference",
            text: "Reference is cohesion's quiet workhorse. This, these, such, it, the former and the latter pick nouns back up so they need not be repeated. The discipline is absolute: every reference must have exactly one possible antecedent, and a this standing at the head of a sentence should be followed by a summary noun — this approach, this gap, this shift — so the examiner never has to guess which idea was picked up.",
            examples: [
              {
                english: "Chain inside a body paragraph: 'The subsidy rewards short trips. This payment reaches only registered cyclists, and such riders are already committed commuters. It does nothing for the journeys that matter.'",
                note: "One noun, four mentions, one clear antecedent each time.",
              },
            ],
          },
          {
            title: "Move four: audit the joints and delete a third",
            text: "When the paragraph is drafted, count its signals. If one joint carries two linkers, delete one; if two consecutive sentences open with a linking adverb, demote one signal to mid-sentence or remove it entirely. Enough machinery is enough to guide — a reader who notices the joints has seen too much of them.",
            examples: [
              {
                english: "Draft joint: 'Moreover, furthermore, the tax base shrank.' Repair: 'Moreover, the tax base shrank.' One signal survives the audit.",
                note: "The audit is a deletion exercise, never an addition.",
              },
            ],
          },
        ],
      },
      {
        type: "text",
        text: "Two quieter devices complete the toolkit. Substitution replaces a repeated element with a stand-in: 'Budget flights changed tourism; high-speed rail now does the same' avoids rewriting the verb phrase, and 'the same is true of freight' stands in for a whole clause. Ellipsis omits what the reader can rebuild: 'Some regions charge for water; others, nothing.' Both read as mature prose because they trust the reader to finish the pattern, and both remove one more opportunity for mechanical repetition. Paragraph-level cohesion works at longer range with the same tools: the opening sentence of each new body paragraph should grip something from the paragraph before it — a repeated keyword, a this-clause, a contrast marker — so the essay feels hinged rather than stacked.",
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Joints on display",
        items: [
          {
            english: "An opinion-essay body opening with a hinge to the previous paragraph: 'Money alone, however, explains only part of the shift. The second force is demographic.'",
            note: "The however carries the turn; the numbered force shows progression.",
            domain: "exam",
          },
          {
            english: "Reference chain across a Task 1 report: 'Domestic electricity use climbed steadily after 1990. This rise accelerated in the following decade, when such demand outgrew every other category in the table.'",
            note: "This rise and such demand each point at one antecedent — nothing left to guess.",
            domain: "exam",
          },
          {
            english: "Two policies named in one sentence, then separated: 'A carbon levy and a rebate scheme were both tried. The former raised revenue; the latter changed behaviour.'",
            note: "Former and latter divide a pair — with three items on the table, repeat the noun instead.",
            domain: "exam",
          },
          {
            english: "A learner highlights every linker in a finished draft and sorts them by function: five contrasts, one consequence, no exemplification anywhere.",
            note: "The sort exposes the missing families in ninety seconds flat.",
            domain: "study",
          },
          {
            english: "A team report that runs: 'Pilot bookings doubled in May. The same pattern held through June.' — substitution sparing the reader a repeated clause.",
            note: "'The same pattern' is substitution doing quiet heavy lifting.",
            domain: "work",
          },
          {
            english: "An informal GT letter moving between topics with conversational joints: 'Anyway, the flat is lovely. By the way, could you bring the camera?'",
            note: "Register decides the machinery — friendly letters use friendly joints.",
            domain: "everyday",
          },
          {
            english: "A linker-stacked wreck repaired: 'Moreover, in addition, the city grew. However, nevertheless, costs rose.' becomes 'Moreover, the city grew; costs, however, rose with it.'",
            note: "Two joints, two signals — the repaired version keeps one carrier per joint.",
            domain: "exam",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The cohesion catalogue",
        items: [
          {
            wrong: "I memorised a list of twenty linkers and I scatter them through every paragraph.",
            right: "Choose each device by the function of the joint it marks, and rotate two or three carriers within that function.",
            reason: "Examiners recognise linker-stuffing on sight; volume of devices signals neither range nor control, and a mislabelled relation actively breaks the paragraph's logic.",
          },
          {
            wrong: "Every sentence should begin with a linking word so the paragraph looks connected.",
            right: "Open at most every second sentence with a signal; move some carriers to mid-sentence and let tight logic pass unmarked.",
            reason: "A joint on every sentence becomes noise: the reader stops trusting signals because nothing at all is left unsignalled.",
          },
          {
            wrong: "'This' on its own is fine — the reader will know what I mean.",
            right: "Give this a summary noun (this policy, this gap) and keep one unambiguous antecedent for every reference.",
            reason: "A bare this with two candidate antecedents forces the examiner to choose, and ambiguity in reference reads as lost control of the machinery.",
          },
          {
            wrong: "The former and the latter work after any list of items.",
            right: "Reserve them for exactly two referents; once a list holds three, repeat the key noun instead.",
            reason: "With three items the pair-words lose their fixed meaning, and the sentence collapses into guesswork for every reader.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Cohesion across all four skills",
        reading: {
          text: "Night trams ran empty for their first two years. The city kept them, arguing that late-shift nurses and bakers needed them. Ridership doubled once fares were folded into the monthly pass. This change mattered more than any timetable reform, since it tied the trams to the way people already paid for travel.",
          task: "Name the function each signal performs — sequencing, cause, consequence or addition — for 'once', 'This change' and 'since'.",
        },
        writing: {
          task: "The four sentences below are a scrambled body paragraph. Decide the function of each joint, choose one device per joint, and write the paragraph in a coherent order. (1) Rural clinics closed in the same decade. (2) Bus routes to villages were cut first. (3) Elderly patients now travel two hours for routine care. (4) The pattern repeats across the region's transport map.",
          guide: [
            "Decide what each sentence does to another before ordering anything — which is earliest, which is a consequence, which is the generalisation?",
            "Open with the earliest event and let one sentence carry a consequence marker.",
            "Chain one idea with a this + noun reference near the end.",
            "Close with the generalising sentence, introduced by a colon or an exemplification signal.",
          ],
          model:
            "Bus routes to villages were cut first, and rural clinics closed in the same decade. As a result, elderly patients now travel two hours for routine care. This pattern repeats across the region's transport map: wherever a route ends, a service soon follows it.",
        },
        listening: {
          script: "Our first shop opened next to the station, and footfall was strong from day one. However, the rent doubled within two years. Consequently, we moved two streets inland. That move cost us the passing trade, but it saved the business.",
          task: "Listen for the four signals — however, consequently, that move, but — and note which relation each one marks.",
        },
        speaking: {
          task: "Describe a change that happened in your town or city: what changed, why it changed, and what followed from it.",
          frames: [
            "At first, the city ...",
            "However, ...",
            "As a result of this change, ...",
            "This shift matters because ...",
          ],
          checklist: [
            "I used at least three different functions, not three of the same family.",
            "Every 'this' I said was followed by a noun.",
            "No two sentences in a row opened with a linker.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Orders the sentences by logic before touching any linker", "Cohesion displays a plan; linkers cannot manufacture one, so the ordering work comes first"],
          ["Uses exactly one signal per joint — and, as a result, this pattern, one colon", "Each relation is marked once and correctly: the examiner sees control, not stuffing"],
          ["Chains the key idea forward with 'This pattern'", "A summary-noun reference carries the topic onward without repeating it"],
          ["Closes with a colon doing exemplification work", "The final generalisation arrives as evidence rather than as one more stacked claim"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Bank six functions and two carriers each — sequencing, contrast, cause, addition, exemplification, consequence — and nothing beyond them."],
          ["While the clock runs", "Name the joint's function before choosing the word; chain one key noun per paragraph; rotate carriers between sentences."],
          ["If you are stuck", "If two sentences refuse to connect, suspect the logic before the vocabulary — check that the second sentence truly follows from the first."],
          ["Final minutes", "Scan for double-marked joints and bare 'this' — the two repairs that take seconds and are visible from across the page."],
        ],
      },
      {
        type: "summary",
        points: [
          "Cohesion is the surface machinery — linkers, reference, substitution — that ties sentences together; coherence is the logic running underneath it.",
          "Devices are chosen by function: sequencing, contrast, cause, addition, exemplification, consequence.",
          "Reference works only with a single clear antecedent: this takes a summary noun, and former/latter divide exactly a pair.",
          "One signal per joint: enough machinery to guide the reader, never enough to smother the ideas it serves.",
          "Paragraph links are cohesion at longer range: the opening of each new paragraph grips something from the one before it.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "Which scoring area judges both the links between sentences and the logic beneath them?",
            options: ["Task Achievement", "Coherence and cohesion", "Lexical resource"],
            correctIndex: 1,
            explanation: "Writing is read through four areas, and the connection area covers surface devices and underlying logic together.",
            from: "How Writing and Speaking are assessed",
          },
          {
            question: "An essay paragraph makes a claim and then supports it. Which earlier lesson built that shape?",
            options: ["Task 2 foundations: outline, thesis, paragraphs", "The examination format, section by section", "Cohesion"],
            correctIndex: 0,
            explanation: "The thesis-and-support paragraph is the unit cohesion serves: joints only help when each paragraph already holds one idea.",
            from: "Task 2 foundations: outline, thesis, paragraphs",
          },
          {
            question: "How many signals should a single joint between two sentences carry?",
            options: ["One, correctly chosen", "Two, for safety", "As many as will fit"],
            correctIndex: 0,
            explanation: "The audit rule keeps one carrier per joint, and any second signal on the same joint is deleted on sight.",
            from: "Four moves that install cohesion",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What is the first question to ask when connecting two sentences?",
        hints: ["Decide the job before picking the tool."],
        options: [
          { id: "a", text: "Which linking word is the longest and most academic-looking?" },
          { id: "b", text: "What does the next sentence do to the previous one — extend it, contradict it, cause it or illustrate it?" },
          { id: "c", text: "Which linker did the model essay use at this point?" },
        ],
        correctOptionId: "b",
        feedback: fb(
          "What does the next sentence do to the previous one — extend it, contradict it, cause it or illustrate it?",
          "Function comes before vocabulary in every cohesion decision: naming the relation first keeps the device honest and the paragraph's logic legible to the examiner.",
          "(a) judges decoration rather than function; (c) borrows another writer's logic instead of reading your own sentences.",
        ),
        tags: ["awriting", "cohesion", "method"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the paragraph and audit its joints.",
        hints: ["Look for a joint carrying two signals at once, and check every reference for a clear antecedent."],
        passageTitle: "Joint audit",
        passage:
          "The city widened the footpaths in 2019. Moreover, furthermore, the council planted forty trees along the market street. This encouraged cafés to apply for outdoor seating, and the applications transformed the street within two summers. However, the transformation also raised rents for the oldest shops, although the council had promised otherwise.",
        question: "Which sentence pair shows the clearest cohesion fault?",
        options: [
          { id: "a", text: "The first two sentences — one joint carrying two addition signals at once (Moreover, furthermore)." },
          { id: "b", text: "The last two sentences — contrast is forbidden at the end of a paragraph." },
          { id: "c", text: "The middle sentence — 'This encouraged' should always be rewritten as 'It encouraged'." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The first two sentences — one joint carrying two addition signals at once (Moreover, furthermore).",
          "The opening joint is double-marked: moreover and furthermore both announce addition, while the audit rule keeps a single carrier per joint. Every other signal in the paragraph is single and functional.",
          "(b) invents a rule, since contrast can legitimately close a paragraph; (c) misdiagnoses, because this plus a verb is sound when one antecedent exists, while a bare it would add ambiguity.",
        ),
        tags: ["awriting", "cohesion", "audit"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the joint with the carrier that matches its function.",
        sentence: "Village bus services were withdrawn in the 1990s; ___, car ownership among rural households rose steeply.",
        acceptedAnswers: ["consequently", "therefore", "as a result", "thus", "hence", "accordingly"],
        hints: ["The second sentence follows as a result of the first — which family fits?"],
        feedback: fb(
          "Consequently (or therefore, thus, hence, as a result).",
          "The withdrawal led directly to the rise in car ownership, so the joint carries consequence; any one of the consequence carriers marks it, and one is enough to guide the reader.",
          "A contrast carrier such as however would mislabel the relation, telling the examiner these sentences oppose each other when one actually causes the other.",
        ),
        tags: ["awriting", "cohesion", "consequence"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. An essay names exactly two policies — a levy and a rebate — and must refer back to the rebate. Which device is cleanest?",
        hints: [],
        options: [
          { id: "a", text: "The former, because the rebate was mentioned last." },
          { id: "b", text: "The latter, since with exactly two referents it points to the second-mentioned item — the rebate." },
          { id: "c", text: "Such, which always points to the newest idea in the paragraph." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The latter, since with exactly two referents it points to the second-mentioned item — the rebate.",
          "Former and latter divide a pair: the former takes the first-mentioned item, the latter the second. With a levy named first and a rebate second, the latter can only mean the rebate — no ambiguity anywhere.",
          "(a) reverses the pair's order; (c) invents a rule — such needs a noun after it and does not track mention position at all.",
        ),
        tags: ["awriting", "cohesion", "reference"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the audit rule for linkers in a finished paragraph.",
        question: "What does the cohesion audit do to a paragraph's signals, and what is the ceiling per joint?",
        acceptedAnswers: [
          "count the signals and delete the extras, leaving one carrier per joint",
          "count them and cut the doubles: each joint keeps exactly one signal",
          "count the linkers and remove any second signal on the same joint",
          "audit by counting: one device per joint, doubles deleted",
        ],
        keywords: ["count", "one", "joint"],
        hints: [],
        feedback: fb(
          "Count the signals and delete the extras — each joint keeps exactly one carrier.",
          "The audit is a deletion pass: double-marked joints lose one signal, consecutive linker openings lose one, and what remains marks each relation once and clearly.",
          "The audit never adds devices; adding is precisely what produced the double-marked joint in the first place.",
        ),
        tags: ["awriting", "cohesion", "audit"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Which sentence uses substitution to avoid repeating a verb phrase?",
        hints: [],
        options: [
          { id: "a", text: "Budget flights changed holiday habits; high-speed rail now does the same." },
          { id: "b", text: "Budget flights changed holiday habits, and high-speed rail changed holiday habits too." },
          { id: "c", text: "Budget flights changed holiday habits because they were cheap." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Budget flights changed holiday habits; high-speed rail now does the same.",
          "Does the same substitutes for the whole verb phrase changed holiday habits, replacing repetition with a stand-in — the quiet device that marks mature, trusting prose.",
          "(b) repeats the phrase in full, the exact repetition substitution exists to remove; (c) contains no substitution at all, only a cause clause.",
        ),
        tags: ["awriting", "cohesion", "substitution"],
      }),
    ],
    homework: [
      "Collect the linking devices from two model essays in the mock library and sort them into the six function families; note which families you never use and bank two carriers from each.",
      "Write a six-sentence paragraph about a change in your city, chaining one key noun from first sentence to last without ever repeating it.",
    ],
    assignment: {
      title: "Rewire a dead paragraph",
      instructions:
        "Choose a body paragraph you wrote in an earlier lesson or practice essay. First, label the function of every joint it contains — sequencing, contrast, cause, addition, exemplification, consequence, or nothing at all where two sentences sit unconnected. Then rewrite the paragraph so that each joint carries exactly one correctly chosen device, and one key noun runs through it as a reference chain (this + summary noun, such, or former/latter where a pair exists). Submit the rewritten paragraph with the joint labels beside it.",
      minWords: 70,
      maxWords: 190,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-coherence",
    title: "Coherence",
    description:
      "The invisible logic underneath: a thread the reader can restate, principled ordering, paragraphs that each advance one step, and the so-what test that keeps every paragraph earning its place.",
    objectives: [
      "state your script's controlling thread in one sentence before writing a word",
      "order body paragraphs by a named principle — strength, chronology or data grouping",
      "advance each paragraph one step and link it back to the position",
      "run the so-what test on every paragraph, in both tasks",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Coherence is what remains when the machinery is switched off: the logic a reader can restate after one reading. Ask someone what your essay argued, and their one-sentence answer is your coherence made audible. Examiners run a version of that experiment constantly — a first paragraph read for a position, a skim for progression, a check that the paragraphs arrive in an order rather than a heap. This lesson builds the invisible half of the connection score: the thread stated once, the ordering principles that give body paragraphs a sequence, the one-step paragraph, and the blunt test that catches every paragraph coasting without purpose.",
        beforeYouStart: [
          "You can state a clear position on a Task 2 question in one sentence.",
          "You have worked through cohesion, so the joints between sentences are already under control.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — both tasks, both variants: the logic underneath every script"],
          ["Task & question types", "Task 2 essays in every question family; Task 1 reports in their overview-led shape; GT letters that still need a plan"],
          ["What is assessed", "Coherence: a clear position throughout, logical progression, and paragraphing that serves the argument"],
          ["Why this matters", "The first read settles whether the script has a direction; a heap of good sentences with no thread cannot recover from that verdict"],
        ],
      },
      { type: "heading", text: "Component 1 — The thread, stated once" },
      {
        type: "text",
        text: "Definition: a thread is the single sentence that owns the whole script — in Task 2, your position plus your strongest reason; in Task 1, the headline pattern the data actually show. Write it before the essay, in plain words, and keep it visible while you write. Every paragraph then has a question to answer: does this advance the thread? If a reader can hand your thread back to you at the end, the script is coherent no matter which question family produced it. If they hand back the topic instead — 'it was about education funding' — the essay had a subject but never made a claim about it, and no quantity of linking devices will disguise that absence.",
      },
      { type: "heading", text: "Component 2 — Four tests of a coherent plan" },
      {
        type: "steps",
        title: "The tests, in writing order",
        steps: [
          {
            title: "Test one: the restatement test",
            text: "Write the thread, then imagine a reader closing your script and being asked what it argued. If the sentence they would produce matches your thread, coherence holds; if it produces your examples instead, the examples have stolen the essay. Run this test mentally at the planning stage — it costs ten seconds and rescues forty minutes.",
            examples: [
              {
                english: "Thread for an opinion question: 'Universities should charge one fee for every course, because talent — not career odds — is what they exist to find.'",
                note: "Position and reason in one breath: the whole essay in miniature.",
              },
            ],
          },
          {
            title: "Test two: the ordering test",
            text: "Body paragraphs need a sequence the reader can feel. Name the principle on your plan: order of strength (strongest reason first, or saved as the clincher), chronological order (for history and process), or group-by-data-set (Task 1's natural law). An unnamed order is usually no order — paragraphs arranged as they occurred to the writer, which the examiner experiences as a shuffle.",
            examples: [
              {
                english: "A Task 1 table of six countries across three decades, planned as 'high-income trio first, the rest second' rather than country by country.",
                note: "Grouping by data set turns a list into an argument about patterns.",
              },
            ],
          },
          {
            title: "Test three: the progression test",
            text: "Each body paragraph advances exactly one step — one reason, one group, one stage of the argument — and its opening sentence both announces the step and grips the previous paragraph. A paragraph that re-angles the same point in fresh words is not a step; it is a loop, and readers feel loops as padding even when every sentence inside them is good.",
            examples: [
              {
                english: "A problem–solution essay's second body opening: 'The second pressure is fiscal, and it compounds the first.'",
                note: "The opening advances and connects in the same clause — progression made audible.",
              },
            ],
          },
          {
            title: "Test four: the so-what test",
            text: "For every paragraph ask: if I deleted this, would the thread survive untouched? If the answer is yes, the paragraph is decoration — cut it, compress it, or repurpose it until its removal would leave a visible hole. The test sounds harsh and is meant to: examiners apply a version of it when deciding whether a script progresses or merely continues.",
            examples: [
              {
                english: "A Task 1 paragraph quoting four percentages about train punctuality, never saying what they mean, fails the test until one closing claim is added: 'Punctuality, in short, improved everywhere except on the rural branches.'",
                note: "Data earns its paragraph by serving a claim the overview made.",
              },
            ],
          },
        ],
      },
      {
        type: "text",
        text: "Information flow is coherence at sentence level: the general claim comes first, the specific support follows. A paragraph that opens with an example forces the reader to hold it in suspense until the claim arrives, and suspense is the wrong instrument for report and argument prose. The same given-before-new instinct joins sentences: each sentence should open from something the reader already holds and hand over exactly one new thing. In Task 1 the flow runs overview to group to group; in Task 2 it runs position to reason to example to link back — two shapes, one logic, both built so the reader always knows where they are standing.",
      },
      {
        type: "table",
        title: "Two shapes, one logic",
        headers: ["Move", "Task 1 report", "Task 2 essay"],
        rows: [
          ["Opening", "Paraphrase of the rubric: what the figure shows, for whom, when", "The position stated in one sentence — the thread itself on the page"],
          ["Map", "Overview naming the two or three patterns the detail will prove", "The first reason arriving directly, or a one-line preview of both"],
          ["Body one", "Largest group or biggest change, with the figures that prove it", "Strongest reason, developed through an example, linked back at the close"],
          ["Body two", "Second group or opposing movement, under the same discipline", "Second reason, one fresh step — never a re-angled version of the first"],
          ["Close", "No new data; the overview's patterns stand proven", "The position restated in fresh words — never a new argument"],
        ],
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Threads and steps, on real scripts",
        items: [
          {
            english: "A discuss-both-views thread that survives the restatement test: 'Both sides defend real interests, but only the safety case survives contact with the data.'",
            note: "The thread predicts both body paragraphs and the verdict — nothing left to improvise.",
            domain: "exam",
          },
          {
            english: "A Task 1 plan that groups six countries into an urban trio and a rural trio, one body paragraph each, instead of marching through the table's rows.",
            note: "Group-by-data-set is ordering for a purpose: each paragraph proves part of the overview.",
            domain: "exam",
          },
          {
            english: "A paragraph that lists four figures on museum attendance and stops — repaired by one closing sentence: 'Attendance, then, followed the free-entry policy, not the exhibitions.'",
            note: "The so-what repair usually costs one sentence, not a rewrite.",
            domain: "exam",
          },
          {
            english: "An advantages-essay body that opens 'A quieter benefit is fiscal.' — step two announced, step one assumed, link implicit.",
            note: "Progression language can be a single adjective; the machinery from the cohesion lesson stays light.",
            domain: "exam",
          },
          {
            english: "A learner writes the thread on a card and tapes it above the screen; any paragraph that cannot touch the card gets rewritten before it is finished.",
            note: "The thread made physical — the cheapest coherence audit there is.",
            domain: "study",
          },
          {
            english: "A recommendation memo that opens with the strongest option, then the risks, then the fallback — order of strength in workplace dress.",
            note: "The ordering principles are not exam artefacts; every persuasive document uses them.",
            domain: "work",
          },
          {
            english: "Giving directions to a stranger: the general route first — 'head down to the river' — and only then the specific turns.",
            note: "Claim before detail is how humans naturally package information for strangers.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The coherence catalogue",
        items: [
          {
            wrong: "If I cover enough points about the topic, the essay will feel complete.",
            right: "Run one thread through the script, with every paragraph advancing it — coverage without a claim reads as a list.",
            reason: "Examiners distinguish scripts that argue from scripts that report their own thoughts in sequence; the thread is the difference, and it cannot be retrofitted by a strong conclusion.",
          },
          {
            wrong: "Task 1 means describing every feature in the order it appears on the page.",
            right: "Group the data into the two or three patterns your overview claims, and give each group its own paragraph.",
            reason: "Row-by-row description reproduces the table without interpreting it; the report's whole job is the pattern, not the inventory.",
          },
          {
            wrong: "My conclusion will pull everything together, so the middle can wander a little.",
            right: "Conclusions close threads; they cannot create them — the position must be visible from the first paragraph onward.",
            reason: "A verdict paragraph that introduces the essay's first clear claim simply confesses that the four paragraphs before it had none.",
          },
          {
            wrong: "Extra paragraphs show effort, even when they circle earlier points.",
            right: "Cut or repurpose any paragraph that fails the so-what test against the thread.",
            reason: "Padding dilutes progression, and progression is precisely what the coherence reading measures; two earned steps outperform three and a half.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Coherence across all four skills",
        reading: {
          text: "The library moved its quiet study desks to the ground floor, beside the entrance. Complaints about noise rose within a month. The desks went back upstairs in the spring, and the complaints stopped. The episode taught the staff a lesson they now apply to every layout change: observe what people actually do before deciding what they need.",
          task: "State the thread of the passage in one sentence of your own, then say which sentence carries it most directly.",
        },
        writing: {
          task: "A student's notes for a Task 2 essay read: 'cities — traffic — health — money — example: Bogotá'. Turn the notes into a plan: write the thread sentence, name the ordering principle you choose, and draft the opening and closing sentence of each of two body paragraphs — openings that advance one step, closings that link back to the position.",
          guide: [
            "Write the thread first: position plus strongest reason, in one sentence.",
            "Choose and name an ordering principle for the two body paragraphs — strongest first or strongest last, and say why.",
            "Give each body paragraph an opening that announces its single step.",
            "Give each body paragraph a closing that returns to the thread.",
          ],
          model:
            "Thread: Cities should reclaim street space from cars, because the health and economic gains arrive together and quickly. Order: strongest reason first (health), fiscal second, each with one example. Body one opens: 'The health case is the fastest to arrive: when cars leave a street, air quality and footfall recover within months.' It closes: 'Health, in other words, is the argument's engine — the money follows it.' Body two opens: 'The fiscal case is quieter but compounding.' It closes: 'Which returns the argument to its start: a city that reclaims its streets is buying both gains at once.'",
        },
        listening: {
          script: "So the parking question — look, I'll come back to parking in a moment. The main point is the school run: forty percent of morning traffic is parents driving children two kilometres or less. Fix that habit and the rush hour largely solves itself. Now, parking, as promised: the school-run change is exactly why the residents' bays can stay.",
          task: "Which sentence carries the speaker's thread, and which phrase restores the thread after the digression?",
        },
        speaking: {
          task: "Give a one-minute answer to the question 'Should public transport be free in your city?' using the thread-first shape.",
          frames: [
            "My position in one sentence is ...",
            "The main reason is ...",
            "A second reason, one step further, is ...",
            "That is why ...",
          ],
          checklist: [
            "My first sentence contained a position, not just a topic.",
            "Each reason I gave was one step, not three tangled together.",
            "My final sentence returned to the position in fresh words.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["States position and reason together in the thread", "The examiner can carry the essay's claim from paragraph one — the restatement test passed in advance"],
          ["Names the ordering principle on the plan", "Paragraph sequence is a decision the reader can feel, not an accident the reader must forgive"],
          ["Gives every body paragraph one announced step", "Progression is audible: each opening advances, each closing returns to the thread"],
          ["Links the second reason back to the first", "The essay closes into a shape rather than ending as a pair of separate blocks"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the thread sentence before any paragraph exists, and hold it where your eyes fall."],
          ["While the clock runs", "Open each body paragraph by announcing its single step; close it by touching the thread again."],
          ["If you are stuck", "Run the so-what test on the paragraph causing trouble — it is usually a loop pretending to be a step."],
          ["Final minutes", "Never re-plan; check only that each paragraph's opening still announces a different step from its neighbour."],
        ],
      },
      {
        type: "summary",
        points: [
          "Coherence is the logic a reader can restate: the thread — position plus reason — owns the whole script.",
          "Order body paragraphs by a named principle: strength, chronology, or data grouping.",
          "Each paragraph advances exactly one step; loops that re-angle the same point read as padding.",
          "The so-what test: any paragraph whose deletion leaves the thread intact must be cut, compressed or repurposed.",
          "Both tasks share one flow: general claim first, specific support after — overview to groups in Task 1, position to reasons in Task 2.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "Cohesion and coherence differ how?",
            options: ["Cohesion is surface machinery; coherence is the underlying logic", "They are two names for one thing", "Cohesion covers paragraphs only, coherence sentences only"],
            correctIndex: 0,
            explanation: "The previous lesson built the joints; this lesson built the journey the joints serve — the distinction the scoring area itself carries.",
            from: "Cohesion",
          },
          {
            question: "In a Task 1 report, which sentence owns the headline pattern?",
            options: ["The first figure quoted", "The overview", "The final sentence"],
            correctIndex: 1,
            explanation: "The overview states the patterns the body paragraphs then prove by group — the report's thread in miniature.",
            from: "Task 1 foundations: task analysis and the overview",
          },
          {
            question: "A reader finishes your essay and repeats your examples instead of your argument. Which test failed?",
            options: ["The ordering test", "The progression test", "The restatement test"],
            correctIndex: 2,
            explanation: "When the sentence a reader hands back is your evidence rather than your claim, the thread never took control of the script.",
            from: "Four tests of a coherent plan",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What is the fastest test of an essay's coherence?",
        hints: ["Think about what a reader can say about your essay after reading it once."],
        options: [
          { id: "a", text: "Count the linking devices per paragraph — more means more coherent." },
          { id: "b", text: "Ask a reader to restate the argument in one sentence: if they hand back your thread, the essay is coherent." },
          { id: "c", text: "Check that every paragraph has at least five sentences." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Ask a reader to restate the argument in one sentence: if they hand back your thread, the essay is coherent.",
          "The restatement test makes coherence audible: the sentence your reader produces is the essay's real controlling idea, whatever the writer intended it to be.",
          "(a) measures cohesion, the surface machinery, which can be dense around an absent thread; (c) counts decoration — length has no vote in progression.",
        ),
        tags: ["awriting", "coherence", "thread"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Read the four-paragraph plan and run the so-what test.",
        hints: ["Ask which paragraph could be deleted with the thread surviving untouched."],
        passageTitle: "Plan audit",
        passage:
          "Thread: Remote work widens opportunity because it moves jobs to the workers. Paragraph 1: statistics on remote-work growth since 2020. Paragraph 2: a region where remote hiring raised local wages. Paragraph 3: the history of the home computer and early telecommuting experiments in the 1970s. Paragraph 4: the counter-argument about isolation, answered with hybrid schemes.",
        question: "Which paragraph most clearly fails the so-what test?",
        options: [
          { id: "a", text: "Paragraph 1 — the statistics, because numbers are never persuasive." },
          { id: "b", text: "Paragraph 3 — the 1970s history, because deleting it leaves the thread untouched and proven." },
          { id: "c", text: "Paragraph 4 — the counter-argument, because disagreement weakens a thread." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Paragraph 3 — the 1970s history, because deleting it leaves the thread untouched and proven.",
          "The history paragraph is fascinating and irrelevant: the thread is about opportunity reaching workers today, and the plan already proves it with wages in paragraph 2. Deleting paragraph 3 costs the argument nothing — the so-what test's signature.",
          "(a) is wrong because well-chosen statistics can ground the thread's premise; (c) is wrong because a answered counter-argument strengthens progression rather than breaking it.",
        ),
        tags: ["awriting", "coherence", "so-what"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the rule of information flow.",
        sentence: "In both tasks, prose flows when the ___ claim arrives first and the specific support follows it.",
        acceptedAnswers: ["general", "overall", "broad"],
        hints: ["Which direction does the reader travel: from the wide view or from the detail?"],
        feedback: fb(
          "General.",
          "Information flow runs from the general claim to the specific support: the reader stands on the claim and then inspects the evidence, never the reverse, in reports and essays alike.",
          "Opening with the detail forces the reader to hold it in suspense, and suspense is the wrong instrument for expository prose.",
        ),
        tags: ["awriting", "coherence", "flow"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. A Task 1 table shows six countries' rail investment across three decades. Which ordering principle does the report shape demand?",
        hints: [],
        options: [
          { id: "a", text: "Left to right through the table's rows, so nothing is missed." },
          { id: "b", text: "Country by country in alphabetical order, for tidiness." },
          { id: "c", text: "Group by data set — two or three patterns named in the overview, one body paragraph proving each." },
        ],
        correctOptionId: "c",
        feedback: fb(
          "Group by data set — two or three patterns named in the overview, one body paragraph proving each.",
          "The report's job is the pattern, not the inventory: grouping turns a table into an argument, with each body paragraph earning its place by proving part of the overview's claim.",
          "(a) reproduces the table without interpreting it; (b) imposes an order that carries no meaning for the data at all.",
        ),
        tags: ["awriting", "coherence", "ordering"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the so-what test.",
        question: "What one question does the so-what test ask of every paragraph, and what happens to a paragraph that fails it?",
        acceptedAnswers: [
          "if I deleted this paragraph, would the thread survive untouched? if yes, cut or repurpose it",
          "would the thread survive its deletion? if yes, the paragraph must be cut, compressed or repurposed",
          "delete it in imagination: a thread that survives means the paragraph goes",
          "ask whether removing the paragraph would leave a hole; no hole means cut or repurpose",
        ],
        keywords: ["delete", "thread"],
        hints: [],
        feedback: fb(
          "If I deleted this paragraph, would the thread survive untouched? If yes, cut or repurpose it.",
          "The test imagines removal: a paragraph whose absence changes nothing was decoration, and decoration dilutes the progression that coherence measures.",
          "Answers about whether a paragraph is interesting or well written miss the point — the test is structural, not aesthetic.",
        ),
        tags: ["awriting", "coherence", "so-what"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. What must every body paragraph do under the progression test?",
        hints: [],
        options: [
          { id: "a", text: "Restate the previous paragraph in fresher vocabulary." },
          { id: "b", text: "Advance exactly one new step — one reason or one group — and link back to the position." },
          { id: "c", text: "Cover two or three ideas, to be safe." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Advance exactly one new step — one reason or one group — and link back to the position.",
          "Progression means the essay visibly moves: each paragraph announces its single step at the opening and returns to the thread at the close, so the examiner can hear the argument travelling.",
          "(a) describes a loop, which readers feel as padding; (c) produces paragraphs whose steps cannot be separated or remembered.",
        ),
        tags: ["awriting", "coherence", "progression"],
      }),
    ],
    homework: [
      "Take one practice essay and, without rereading it, write its thread from memory; then open the essay and note where the two versions diverge — the divergence is your coherence gap.",
      "Find any three-paragraph article in English and name the ordering principle its paragraphs follow: strength, chronology or grouping.",
    ],
    assignment: {
      title: "The thread audit",
      instructions:
        "Take an essay you have already written (any practice Task 2). Without rereading it first, write down its thread from memory in one sentence. Then read the essay and answer three questions in your submission: (1) Did the thread you remembered match what the essay actually argues? (2) Which paragraph fails the so-what test, and what should it have done instead? (3) Which ordering principle do the body paragraphs actually follow, and would a different principle have served the argument better? Finish with the rewritten thread and a one-sentence opening for each body paragraph.",
      minWords: 80,
      maxWords: 220,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-punctuation",
    title: "Punctuation",
    description:
      "The marks that carry meaning: the sentence boundary discipline, the comma's three jobs, the splice and its three repairs, apostrophes by register, and the ninety-second final scan.",
    objectives: [
      "mark sentence boundaries deliberately — one complete thought per full stop",
      "place commas in their three roles: lists, fronted openers and subordinate clauses",
      "repair a comma splice with a period, a semicolon or a comma plus conjunction",
      "keep apostrophes honest and let register decide where contractions live",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "Punctuation is grammar made visible. Before an examiner has weighed a single word choice, the marks on the page have announced how much control the writer has: where sentences end, which clauses lean on which, and what belongs to whom. Punctuation errors are also the cheapest errors in the exam — every rule in this lesson can be applied mechanically during the checking minutes — which makes them the fastest repairs available anywhere on the Writing paper. This lesson covers the boundary discipline, the comma's three jobs, the splice and its three repairs, the apostrophe's two owners, and the ninety-second scan that catches what the clock nearly took.",
        beforeYouStart: [
          "You can find the main verb in any sentence you have written.",
          "You know which register each task demands — formal essay or informal letter.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — every script, both variants: punctuation is read as sentence control"],
          ["Task & question types", "Task 2 essays and Task 1 reports (formal, contraction-free); GT letters, where register decides the marks"],
          ["What is assessed", "Grammatical range and accuracy — boundaries, comma placement and apostrophes are its most visible signals"],
          ["Why this matters", "Boundary errors blur every other judgement: an examiner who cannot see your sentences clearly cannot credit the range inside them"],
        ],
      },
      { type: "heading", text: "Component 1 — The boundary discipline" },
      {
        type: "text",
        text: "A sentence is a complete thought carrying a subject and a finite verb, and the full stop is its gate. The discipline is to write sentences you can hear ending: read the draft in your head at speaking speed, and where a speaker would stop, the sentence stops. When a draft sentence runs past two lines, a second complete thought is almost always hiding inside it, asking for its own gate. The most visible boundary failure is the comma splice — two complete thoughts joined by a comma as though the comma could carry a sentence's weight. It is visible from across the page, it multiplies in tired scripts, and it has three repairs, all of them learnable in an afternoon.",
      },
      { type: "heading", text: "Component 2 — The punctuation routine" },
      {
        type: "steps",
        title: "Four passes, in order",
        steps: [
          {
            title: "Pass one: hear the boundaries first",
            text: "Read the draft at speaking speed, in your head. Every place a speaker would stop is a full-stop candidate; every candidate gets the completeness check — subject present, finite verb present. Sentences that pass twice are two sentences wearing one comma between them, and they go to pass three.",
            examples: [
              {
                english: "Draft: 'The ferry was cancelled, the villagers drove forty miles round the loch.' Two complete thoughts — split at the gate.",
                note: "Hearing the stop is the boundary discipline in action.",
              },
            ],
          },
          {
            title: "Pass two: give commas their three jobs",
            text: "Job one: separating items in a list. Job two: marking off a fronted adverbial — a time phrase, a contrast phrase — before the main clause arrives. Job three: closing a subordinate clause that opens the sentence. Beyond these three, a comma between clauses is a suspect splice until proven otherwise, because a comma alone cannot join two complete thoughts.",
            examples: [
              {
                english: "All three jobs at work: 'In 2010, although demand was flat, the firm sold buses, trams and ferries.'",
                note: "Opener, leaning clause, list — the complete legal repertoire.",
              },
            ],
          },
          {
            title: "Pass three: repair every splice with one of three tools",
            text: "A period separates, and it is always correct. A semicolon joins, claiming the two thoughts are so related that a full stop would understate the bond. A comma plus conjunction builds, with and, but, so, while or whereas carrying the logical relation explicitly. Choose by how tightly the two thoughts belong together; when in doubt, take the period — the plainest repair never fails.",
            examples: [
              {
                english: "Splice: 'Congestion charges began in 2003, traffic fell by a fifth.' Repairs: '...in 2003. Traffic fell...' / '...in 2003; traffic fell...' / '...in 2003, and traffic fell...'",
                note: "Three tools, one splice — the choice follows the strength of the bond.",
              },
            ],
          },
          {
            title: "Pass four: run the ninety-second scan",
            text: "With the script finished, scan once for four things only: a capital letter at every sentence opening, a mark at every sentence close, every apostrophe audited for possession versus contraction, and — in formal scripts — every contraction expanded to its full form. The scan is not reading; it is inspection, and ninety seconds of it routinely catches three or four marks that re-reading for pleasure never would.",
            examples: [
              {
                english: "A scan of a practice essay finds 'the two countrys' and a missing capital after a repaired splice — both fixed in seconds.",
                note: "Mechanical errors have mechanical cures; that is the whole bargain.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "The marks and their work",
        headers: ["Mark", "Its work", "Example"],
        rows: [
          ["Full stop", "Closes one complete thought", "The scheme ran for six years."],
          ["Comma — list", "Separates three or more items", "The firm supplied buses, trams and ferries."],
          ["Comma — opener", "Marks a fronted adverbial before the main clause", "By 2015, imports had doubled."],
          ["Comma — subordinate", "Closes a leaning clause that opens the sentence", "Although demand fell, prices held firm."],
          ["Semicolon", "Joins two closely related complete thoughts", "The trams ran late; the buses did not run at all."],
          ["Colon", "Introduces an explanation or a list", "One force drove the change: cheap freight."],
          ["Apostrophe", "Marks possession or contraction", "the region's output / it's (= it is)"],
          ["Dash", "Sets off an aside — sparingly", "The result — a fifth fewer cars — surprised nobody."],
        ],
      },
      {
        type: "text",
        text: "The semicolon and the colon earn their places in exam scripts precisely because they are rare and carry exact promises. A semicolon claims a genuine bond between two complete thoughts; a colon promises that what follows explains, itemises or unpacks what came before. Dashes should stay rationed — one pair per script is plenty — because informal prose leans on them as a substitute for decisions. The apostrophe has exactly two owners: possession (the country's output, the students' fares) and contraction (it's, don't). Plurals never take one, decades never take one, and possessive its never takes one — the mark is a decision, not a decoration.",
      },
      {
        type: "text",
        text: "Register decides contractions. In formal scripts — Academic Task 1 and Task 2, and GT Task 2 — contractions vanish: write it is, do not, cannot. In an informal GT letter to a friend they return and belong: I'd love to visit, we've moved, you'll barely recognise the street. The apostrophe follows the reader — formal pages receive the expanded forms, friendly pages keep the shortened ones — and a script that mixes the two has punctuated its register as well as its sentences.",
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Marks at work and under repair",
        items: [
          {
            english: "A splice given all three repairs in one paragraph: 'The mill closed in 1998, 400 jobs were lost.' → 'The mill closed in 1998; 400 jobs were lost.' → 'The mill closed in 1998, and 400 jobs were lost.' → 'The mill closed in 1998. Four hundred jobs were lost.'",
            note: "Same two thoughts, three legal joins — the writer chooses the bond's strength.",
            domain: "exam",
          },
          {
            english: "A fronted adverbial doing Task 1 work: 'In 1998, just 4 per cent of households were online; a decade later, the figure had passed seventy.'",
            note: "Two opener commas frame the time markers the report runs on.",
            domain: "exam",
          },
          {
            english: "A subordinate clause opened and closed cleanly: 'Although the subsidy survived three governments, its budget never grew by a single line.'",
            note: "The leaning clause opens, the comma announces the main clause, nothing dangles.",
            domain: "exam",
          },
          {
            english: "A colon turning a claim into an explanation: 'Two forces emptied the district: rents that doubled and a school that closed.'",
            note: "The colon promises unpacking, and the sentence keeps the promise.",
            domain: "exam",
          },
          {
            english: "An informal GT letter wearing its contractions: 'It's been a year since we've met, and I'd love to see your mum's new garden.'",
            note: "Contractions and a possessive, both correct for the register the letter chose.",
            domain: "work",
          },
          {
            english: "A ninety-second scan over a practice essay catches two missing capitals, one sentence with no final mark, and a plural that had grown a stray apostrophe.",
            note: "Four repairs, ninety seconds — the cheapest marks recovered all exam.",
            domain: "study",
          },
          {
            english: "A shopping note keeping its list commas: 'Flour, eggs, butter and the good bread from the corner shop.'",
            note: "The list comma is the one mark that survives every register from essay to kitchen note.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The punctuation catalogue",
        items: [
          {
            wrong: "I join sentences with commas because full stops make my writing look choppy.",
            right: "Split them with a period, join them with a semicolon, or build them with a comma plus conjunction.",
            reason: "A comma cannot carry a sentence's weight; the splice is the most visible boundary error on the paper, and every examiner sees it instantly.",
          },
          {
            wrong: "I write long sentences with no commas at all, and the meaning mostly survives.",
            right: "Give every long sentence its legal commas — fronted openers and opening subordinate clauses need their marking.",
            reason: "Missing commas make the reader do the parsing work the marks exist to do, and reading effort spent on structure is effort stolen from your argument.",
          },
          {
            wrong: "Apostrophes make plurals look more careful: 'the 1990's saw many change's.'",
            right: "Plurals take no apostrophe — write the 1990s and changes; the mark belongs to possession and contraction only.",
            reason: "The apostrophe plural is a recognised error pattern, and it appears in exactly the scripts that can least afford visible mechanical flags.",
          },
          {
            wrong: "Semicolons everywhere make a script look sophisticated.",
            right: "Reserve the semicolon for genuinely related complete thoughts — rarely more than twice per script.",
            reason: "A semicolon makes a claim about the tightness of a bond; scattered through a script, those claims read as decoration rather than control.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Punctuation across all four skills",
        reading: {
          text: "Consider two sentences. 'The recruits who had trained for two years were deployed first.' — the clause defines a subset: only those recruits, the two-year ones. 'The recruits, who had trained for two years, were deployed first.' — the clause adds a fact about all of them: every recruit had trained that long, and all went first. The commas are not decoration; they change who is standing on the page.",
          task: "Explain in one sentence each what the two versions tell the reader about how many recruits had trained for two years.",
        },
        writing: {
          task: "Repair this spliced run using all three taught tools at least once, then add one closing sentence that uses a colon to explain the result: 'Congestion fell sharply after 2003, the trams also returned, however the suburbs kept growing, they now house half the city's workers, the motorway could not absorb them, it jammed solid within a year.'",
          guide: [
            "Read the run at speaking speed and mark every complete thought — there are six.",
            "Decide where the bond is tight (semicolon), where a relation should be explicit (comma plus conjunction), and where thoughts merely sit near each other (period).",
            "Check the capital letter at every repaired opening.",
            "Close with a colon sentence that explains the jam in a single clause.",
          ],
          model:
            "Congestion fell sharply after 2003; the trams also returned. However, the suburbs kept growing, and they now house half the city's workers. The motorway could not absorb them, so it jammed solid within a year. The result was predictable: the city had built homes faster than roads.",
        },
        listening: {
          script: "The ferry leaves at nine. The nine o'clock sailing, unlike the later ones, takes cars. If you miss it, the next car ferry is at two.",
          task: "Listen for the three pauses; note which pause is a full boundary and which one sets off extra information.",
        },
        speaking: {
          task: "Read both versions aloud so the difference is audible: 'The trains which run at night are slow.' / 'The trains, which run at night, are slow.'",
          frames: [
            "The first version restricts — it means ...",
            "The second version adds — it tells me ...",
            "The commas are doing the work of ...",
          ],
          checklist: [
            "I paused around the clause in the second version and not the first.",
            "I can say who is slow in each version.",
            "I heard the meaning change before I explained it.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Uses all three splice repairs, each where the bond's strength fits", "Periods separate the loosely related thoughts, the semicolon keeps the tight pair, and the conjunction carries the causal step explicitly"],
          ["Moves 'However' inside its sentence with a comma after it", "The contrast is signalled once and cleanly — machinery visible but not shouting"],
          ["Capitals every opening that a repair created", "Boundary control includes the frame of a sentence, not only its gate"],
          ["Closes with a colon that explains rather than stacks", "A colon earns its place by promising an explanation, and the final clause delivers one"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Accept the hearing rule: any sentence you cannot finish in one breath is hiding a second thought."],
          ["While the clock runs", "Give commas only their three jobs, and treat every comma between complete thoughts as a splice suspect."],
          ["If you are stuck", "Choose the period — the plainest repair is always correct, and semicolons are refinements rather than requirements."],
          ["Final minutes", "Run the ninety-second scan: capitals at openings, marks at closings, apostrophes audited, contractions expanded in formal scripts."],
        ],
      },
      {
        type: "summary",
        points: [
          "A sentence is a complete thought with a subject and a finite verb; the full stop is its gate.",
          "Commas have three jobs — lists, fronted openers, opening subordinate clauses — and nothing else between complete thoughts.",
          "The comma splice has three repairs: period, semicolon, or comma plus conjunction, chosen by the bond's strength.",
          "The apostrophe belongs to possession and contraction only; plurals, decades and possessive its take none.",
          "Register owns the contractions: expanded in formal essays and reports, welcome in informal GT letters.",
          "The ninety-second scan — capitals, closing marks, apostrophes, contractions — is the cheapest repair pass in the exam.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "A writer repairs a splice with 'however' and keeps the comma. What went wrong?",
            options: ["However is an adverb, not a conjunction — it cannot join two complete thoughts with a comma", "However is too informal for essays", "Nothing — however works exactly like and"],
            correctIndex: 0,
            explanation: "The cohesion lesson's carriers have grammatical weights: however needs a period or semicolon before it, while conjunctions like and and but may follow the comma.",
            from: "Cohesion",
          },
          {
            question: "A colon introduces 'the two forces behind the exodus: rents and reputation.' Which flow does that mirror?",
            options: ["Specific detail first, general claim after", "General claim first, specific support after", "Two unrelated claims side by side"],
            correctIndex: 1,
            explanation: "The colon's promise — claim, then unpacking — is the coherence lesson's information flow written in punctuation.",
            from: "Coherence",
          },
          {
            question: "In the four-pass routine, when does the ninety-second scan happen?",
            options: ["During planning, before writing", "Between paragraphs while writing", "At the end, on a finished script"],
            correctIndex: 2,
            explanation: "The scan is an inspection pass over finished prose — capitals, closing marks, apostrophes, contractions — never a planning tool.",
            from: "Four passes, in order",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What exactly is a comma splice?",
        hints: ["Think about what stands on each side of the comma."],
        options: [
          { id: "a", text: "A comma separating items in a long list." },
          { id: "b", text: "Two complete thoughts joined by only a comma, which cannot carry a sentence's weight." },
          { id: "c", text: "A comma placed before a subordinate clause." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Two complete thoughts joined by only a comma, which cannot carry a sentence's weight.",
          "A splice joins what should be separated or properly built: each side could stand as its own sentence, and the comma alone has no power to merge them.",
          "(a) is the list comma doing its legal job; (c) is the subordinate comma, also legal — the splice is specifically the boundary misuse.",
        ),
        tags: ["awriting", "punctuation", "splice"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Find the boundary fault in the paragraph.",
        hints: ["Test every comma: could both sides stand alone as sentences?"],
        passageTitle: "Boundary drill",
        passage:
          "The night market opened in June, it ran for eleven weekends. Stallholders paid a modest fee, and the council waived the rest. Although rain closed two Saturdays, the season turned a profit, the traders voted to return. The council's own report called it the district's best experiment in years.",
        question: "Which sentence contains a comma splice?",
        options: [
          { id: "a", text: "Sentence one — 'opened in June, it ran for eleven weekends' joins two complete thoughts with only a comma." },
          { id: "b", text: "Sentence two — a comma before 'and' is always an error." },
          { id: "c", text: "Sentence four — the apostrophe in 'council's' is misplaced." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Sentence one — 'opened in June, it ran for eleven weekends' joins two complete thoughts with only a comma.",
          "Both sides of that comma carry a subject and a finite verb, so the join is a splice; the third sentence hides another ('turned a profit, the traders voted'), repairable the same three ways.",
          "(b) misstates the rule — a comma before a coordinating conjunction is the legal build; (c) misreads the apostrophe, which correctly marks the council's possession.",
        ),
        tags: ["awriting", "punctuation", "boundary"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the legal join.",
        sentence: "The tram line opened in March, ___ passenger numbers doubled by June.",
        acceptedAnswers: ["and", "so"],
        hints: ["The comma is already in place — what must follow it to make the join legal?"],
        feedback: fb(
          "And (or so, if you read the doubling as a result).",
          "A comma plus a coordinating conjunction is one of the three legal joins between complete thoughts: and builds, so carries a consequence, and the splice disappears.",
          "Leaving the comma alone keeps the splice; adding however would fail too, because adverbs cannot follow the comma as joiners.",
        ),
        tags: ["awriting", "punctuation", "repair"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. What do the commas tell you here: 'The engineers, who had trained abroad, redesigned the bridge.'",
        hints: [],
        options: [
          { id: "a", text: "Only some engineers — the ones who trained abroad — did the redesigning." },
          { id: "b", text: "All the engineers redesigned the bridge, and all of them had trained abroad — the clause adds a fact, it does not restrict." },
          { id: "c", text: "The commas mark a splice that needs a semicolon." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "All the engineers redesigned the bridge, and all of them had trained abroad — the clause adds a fact, it does not restrict.",
          "Paired commas make a clause non-defining: the information rides along as an aside about the whole group. Drop the commas and the sentence changes population, selecting only the engineers who trained abroad.",
          "(a) describes the defining version without commas; (c) misapplies the splice rule to a perfectly legal aside.",
        ),
        tags: ["awriting", "punctuation", "commas"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the three repairs for a comma splice.",
        question: "List the three tools that legally fix a comma splice.",
        acceptedAnswers: [
          "a full stop, a semicolon, or a comma plus a coordinating conjunction",
          "period, semicolon, comma + conjunction (and, but, so)",
          "full stop; semicolon; comma with and/but/so/while/whereas",
          "split with a period, join with a semicolon, or build with comma plus conjunction",
        ],
        keywords: ["period", "semicolon", "conjunction"],
        hints: [],
        feedback: fb(
          "A full stop, a semicolon, or a comma plus a coordinating conjunction.",
          "Those are the three legal joins: the period separates, the semicolon claims a tight bond, and the conjunction builds the two thoughts into one sentence with an explicit relation.",
          "Answers naming however or therefore as joiners confuse adverbs with conjunctions — linking adverbs need a period or semicolon before them.",
        ),
        tags: ["awriting", "punctuation", "repair"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. In which script do contractions belong?",
        hints: [],
        options: [
          { id: "a", text: "An Academic Task 2 essay, to sound natural." },
          { id: "b", text: "An informal GT letter to a friend — register decides, and friendly pages keep the shortened forms." },
          { id: "c", text: "In no IELTS script under any circumstances." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "An informal GT letter to a friend — register decides, and friendly pages keep the shortened forms.",
          "Register owns the contractions: formal scripts expand them (it is, do not), while an informal letter to a friend would sound stiff without them — I'd love to visit is correct for that reader.",
          "(a) ignores the formal register essays demand; (c) overcorrects by banning a form that one task on the paper actively welcomes.",
        ),
        tags: ["awriting", "punctuation", "register"],
      }),
    ],
    homework: [
      "Collect five sentences from your own writing that run longer than two lines; split each at its hidden boundary and label which of the three repairs you chose.",
      "Write a six-line informal letter to a friend about a house move, using contractions naturally; then rewrite it formally for a landlord, expanding every contraction and keeping the content identical.",
    ],
    assignment: {
      title: "The repair shop",
      instructions:
        "Take one paragraph from a Task 2 essay you have written, or write a fresh six-sentence paragraph arguing that cities should pedestrianise their centres. Submit the paragraph with every boundary deliberate: no splices, commas only in their three jobs, one semicolon joining a genuinely related pair, one colon introducing an explanation, and contractions expanded. Under the paragraph, list the repairs you made and name the rule behind each one.",
      minWords: 60,
      maxWords: 180,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-sentence-variety",
    title: "Sentence variety",
    description:
      "The range an examiner can see in thirty seconds: the four sentence shapes, fronted adverbials, the comma consequence of relative clauses, task-specific structures, and the five-sentence scan.",
    objectives: [
      "mix simple, compound, complex and compound-complex sentences deliberately",
      "front adverbials and participles to move emphasis within a sentence",
      "control the comma consequence between defining and non-defining relative clauses",
      "scan any five consecutive sentences and repair a monotonous mix",
    ],
    minutes: 14,
    blocks: [
      {
        type: "lesson-intro",
        text: "Range is the half of the grammar judgement an examiner can audit in thirty seconds: take any five consecutive sentences of a script, label each by shape, and the mix — or the monotony — announces itself. A script whose sentences all begin with the subject and all run to the same length reads as one long sentence wearing different capitals. This lesson builds the four sentence shapes, the devices that move emphasis around inside them, the structures each task rewards most, and the five-sentence scan that keeps your variety honest without wrecking the accuracy it exists to serve.",
        beforeYouStart: [
          "You can write a subordinate clause with although, because or which.",
          "You know the punctuation lesson's comma jobs — one of them returns here with consequences.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — both tasks, both variants: range is read across every sentence you produce"],
          ["Task & question types", "Task 2 arguments (conditionals, concessions, relatives); Task 1 process reports (passives); every script's overall shape mix"],
          ["What is assessed", "Grammatical range and accuracy: a mix of structures used with control — variety that breaks down earns nothing"],
          ["Why this matters", "Two scripts with similar error rates read differently when one shows four shapes and the other repeats one: range is the visible difference"],
        ],
      },
      { type: "heading", text: "Component 1 — The four shapes" },
      {
        type: "text",
        text: "Simple: one clause — 'Rents fell.' Compound: two independent clauses joined — 'Rents fell, and builders paused.' Complex: one independent clause plus a subordinate — 'Although rents fell, builders paused.' Compound-complex: two independents plus a subordinate — 'Although rents fell, builders paused, and lenders tightened terms.' A mature paragraph moves between all four, and the simple sentence, used rarely, lands like a drumbeat precisely because the other shapes surround it. The shapes are not a ladder to climb — complex is not 'better' than simple — they are colours, and the skill is the palette.",
      },
      { type: "heading", text: "Component 2 — Building range you control" },
      {
        type: "steps",
        title: "Four upgrades, each reversible",
        steps: [
          {
            title: "Upgrade one: run the five-sentence scan",
            text: "Take any five consecutive sentences from your draft and label each: S for simple, CD for compound, CX for complex, CD-CX for compound-complex. A healthy run shows at least three different shapes and no shape more than twice. The scan takes one minute, works on any paragraph, and turns 'variety' from a vibe into a number you can move.",
            examples: [
              {
                english: "A scanned learner paragraph reads S, S, S, S, S — five drumbeats, no melody. The repair upgrades two sentences and leaves three alone.",
                note: "Diagnosis before treatment: the scan shows exactly how much variety is missing.",
              },
            ],
          },
          {
            title: "Upgrade two: front the adverbial",
            text: "Move a time phrase or contrast phrase to the head of the sentence: 'By 2015, imports had doubled'; 'In contrast, exports stagnated.' Fronting does two jobs at once — it flags the signal early, the way examiners read for it, and it breaks the subject-first monotony that makes paragraphs blur. Participial openers work the same way: 'Faced with falling demand, the mill closed.'",
            examples: [
              {
                english: "Subject-first: 'The council acted after two winters of flooding.' Fronted: 'After two winters of flooding, the council acted.'",
                note: "Same facts, new emphasis: the front position belongs to the pressure, not the actor.",
              },
            ],
          },
          {
            title: "Upgrade three: attach relatives with the comma decision",
            text: "A defining relative clause restricts, and takes no commas: 'The trains that run at night are slow' — only those trains. A non-defining clause adds, and takes paired commas: 'The trains, which run at night, are slow' — all the trains, incidentally nocturnal. The comma is not decoration; it decides how many things the sentence is about, and choosing it wrongly changes the population of your claim.",
            examples: [
              {
                english: "Pair with a meaning shift: 'The students who revise early do best' (a subset) versus 'The students, who revise early, do best' (all of them, all revising early).",
                note: "The commas change who is being praised — the consequence is semantic, not cosmetic.",
              },
            ],
          },
          {
            title: "Upgrade four: deploy the task structures",
            text: "Each task rewards particular machinery. Task 2 arguments lean on conditionals — 'If governments subsidised night rail, freight would leave the roads' — and on concession complexes. Task 1 process reports run on passives, because the stages matter more than the agents: 'The olives are washed, crushed into paste, and pressed within a day of harvest.' Participial constructions compress cause into a front position and belong in both tasks, sparingly.",
            examples: [
              {
                english: "A second conditional carrying a proposal: 'If cities charged for parking at work, commuting patterns would shift within a term.'",
                note: "Hypothesis grammar fits proposal arguments like a glove — and it is a shape the scan can see.",
              },
            ],
          },
        ],
      },
      {
        type: "text",
        text: "The governing rule is variety without wreckage: a pattern you control is worth more than a pattern you don't. An accurate simple sentence outperforms a broken complex one under every criterion, and variety is measured across five sentences, not awarded per sentence. When the scan shows a wall of simples, upgrade the two that deserve it and leave the rest standing; when it shows five heavy complexes, split the one whose logic is loose. The examiner's range judgement is a reading of the mix — and the mix is the one grammatical feature you can still repair in the checking minutes without rewriting the essay.",
      },
      {
        type: "table",
        title: "Structures and where they earn their keep",
        headers: ["Structure", "Where it earns its keep", "In action"],
        rows: [
          ["Simple", "Overview punch; topic sentences that need no hedge", "Demand outgrew supply in every year shown."],
          ["Compound", "Balancing two results of even weight", "Costs levelled off, yet complaints kept rising."],
          ["Complex", "Concession and condition — the argument's engine", "If the levy were removed, traffic would return within a year."],
          ["Compound-complex", "Body paragraphs carrying the main load", "Although the pilot succeeded, the council delayed, and the funding lapsed."],
          ["Passive", "Process reports, where stages matter and agents don't", "The pulp is pressed, then rolled and dried."],
          ["Participial opener", "Compressing cause into the front position", "Faced with rising seas, the town retreats inland."],
        ],
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "Shapes, scans and repairs",
        items: [
          {
            english: "A five-sentence scan on a real body paragraph: S, S, CX, S, CD — three shapes present, no shape dominant, no repair needed.",
            note: "The scan's verdict can be 'leave it alone' — that verdict is part of the skill.",
            domain: "exam",
          },
          {
            english: "The comma consequence in a Task 2 sentence: 'The drivers who worked nights received a bonus' (only they did) versus 'The drivers, who worked nights, received a bonus' (every driver, all nocturnal, was paid extra).",
            note: "One pair of commas decides whether the company paid a subset or everyone.",
            domain: "exam",
          },
          {
            english: "A Task 1 process chain in the passive: 'The cane is cut, washed, and fed into rollers; the juice is then boiled and spun until the crystals separate.'",
            note: "No agent appears anywhere, because the process, not the workforce, is the report's subject.",
            domain: "exam",
          },
          {
            english: "A Task 2 concession complex at work: 'While the levy undeniably raised revenue, it did so by taxing the journeys that had no alternative, which is regressive by design.'",
            note: "One sentence, two subordinate shapes — the argument's engine running at full compression.",
            domain: "exam",
          },
          {
            english: "A learner upgrades two of five simple sentences, checks the result aloud, and keeps the three originals on purpose.",
            note: "Repair by upgrade, not by demolition — accuracy survives the variety pass.",
            domain: "study",
          },
          {
            english: "A workplace report opening with a fronted adverbial: 'Following the audit, all expense claims now pass through two checks.'",
            note: "Fronting flags the cause before the actor appears — the same trick at the office.",
            domain: "work",
          },
          {
            english: "A GT letter compressing biography into a participle: 'Living two streets from the market, I can confirm the Saturday noise is no legend.'",
            note: "The participial opener carries credential and claim in one breath — informal register, formal machinery.",
            domain: "everyday",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The variety catalogue",
        items: [
          {
            wrong: "Complex sentences score higher, so I make every sentence complex.",
            right: "Mix at least three shapes across any five sentences, and keep every shape one you can control to the last comma.",
            reason: "Range is read as a mix, not a maximum: five heavy complexes are as monotonous as five simples, and each broken one costs accuracy twice.",
          },
          {
            wrong: "Non-defining clauses take no commas — commas are just decoration anyway.",
            right: "Paired commas are exactly what makes a clause non-defining; removing them changes who or what the sentence is about.",
            reason: "The comma consequence is semantic: 'the trains which run at night' restricts, while the commas version comments — and examiners know the difference.",
          },
          {
            wrong: "Variety means a different structure in every single sentence.",
            right: "Aim for at least three shapes per five sentences with no shape more than twice — patterned variety, not chaos.",
            reason: "The judgement reads the mix across a stretch of prose; sentence-by-sentence novelty produces a script that gestures wildly and says little.",
          },
          {
            wrong: "Fronting anything at the start of a sentence counts as range.",
            right: "Front known chunks — adverbial phrases and participles — and never an object yanked out of the verb's word order.",
            reason: "Random fronting breaks grammar while imitating variety; the legal frontings are few, safe, and instantly readable as control.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Sentence variety across all four skills",
        reading: {
          text: "The tunnel opened in March. Costs had doubled by then, and the council hesitated for a week before paying. Although the delay was embarrassing, the opening went ahead, and the first trains ran to schedule. Trains still run. What changed was the city around them: two districts once an hour apart are now fifteen minutes from each other.",
          task: "Label each of the five sentences S, CD, CX or CD-CX, and name the two devices that appear besides the shapes themselves.",
        },
        writing: {
          task: "Write a five-sentence Task 2 body paragraph arguing that cities should invest in night buses. Requirements: at least three different shapes, one fronted adverbial, one non-defining relative clause with its commas justified, and one sentence that stays deliberately simple.",
          guide: [
            "Open with a complex sentence announcing the paragraph's single step.",
            "Front an adverbial in sentence two — time or contrast, your choice.",
            "Carry the example in a compound or compound-complex sentence.",
            "Place the simple sentence where you want the drumbeat, and be ready to say why.",
          ],
          model:
            "Although daytime networks absorb most transport spending, the night is where a city either works or fails its workers. After midnight, options collapse to cars and costly taxis. Night buses, which cost a fraction of a new tram line, restore the shift worker's commute. Hospital cleaners and bakers cannot relocate to follow a bus route, so the route must reach them. The maths is blunt: the poorest journeys are the nocturnal ones.",
        },
        listening: {
          script: "The plant would close if the orders didn't return, and management knew it. The orders didn't return. The site was cleared within the year, and the archive was saved only because one foreman boxed the drawings before the auction.",
          task: "Listen for the conditional sentence and the passive verbs; note what each grammatical choice tells you about who acts and who merely receives.",
        },
        speaking: {
          task: "Argue for a four-day working week in sixty seconds, using one conditional and one concession aloud.",
          frames: [
            "If companies moved to four days, productivity would ...",
            "Although the change looks costly at first, ...",
            "What the pilots actually showed was ...",
          ],
          checklist: [
            "My conditional used the right form in both clauses.",
            "My concession signalled the turn before it arrived.",
            "I finished with one short, simple sentence on purpose.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["Opens complex and closes simple — four shapes in five sentences", "The mix is visible in a single read: the scan would label this paragraph CX, CD, CX, CD-CX, S and pass it"],
          ["Fronts 'After midnight' to flag the collapse", "The adverbial front position signals the paragraph's pivot and breaks subject-first monotony at once"],
          ["Uses a non-defining relative with its paired commas", "'Which cost a fraction of a new tram line' adds a fact about all night buses — the commas make it an aside, not a restriction"],
          ["Ends on a five-word simple sentence", "The drumbeat lands because the longer shapes surround it; brevity is earned by contrast, not by poverty"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Know your four labels — S, CD, CX, CD-CX — and accept that control beats ambition every time."],
          ["While the clock runs", "Vary openings naturally: front an adverbial when a signal matters, attach a relative when a noun needs one, and let some sentences stay short."],
          ["If you are stuck", "Run the scan on the last five sentences you wrote; the missing shape is usually obvious within the labels."],
          ["Final minutes", "Repair monotony only where it is safe: one fronted adverbial or one split run-on — never a structural rewrite under the clock."],
        ],
      },
      {
        type: "summary",
        points: [
          "Four shapes — simple, compound, complex, compound-complex — are a palette, not a ladder; the skill is the mix.",
          "The five-sentence scan turns variety into a number: at least three shapes per five sentences, no shape more than twice.",
          "Fronting adverbials and participles moves emphasis and breaks subject-first monotony in one move.",
          "Defining relatives restrict and take no commas; non-defining relatives add and take paired commas — the comma decides the claim's population.",
          "Task structures: conditionals power Task 2 proposals, passives power process reports, participials compress cause in both.",
          "A pattern you control is worth more than a pattern you don't: accurate simples beat broken complexes under every criterion.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "The paired commas around a non-defining clause follow which earlier rule about the comma's jobs?",
            options: ["Commas separate items in lists only", "Commas set off material that leans or adds rather than restricts", "Commas join complete thoughts"],
            correctIndex: 1,
            explanation: "The punctuation lesson's jobs — marking off openers and asides — extend naturally to the non-defining clause: the commas announce an addition, not a restriction.",
            from: "Punctuation",
          },
          {
            question: "Fronting 'In contrast' at the head of a sentence is also doing which earlier lesson's work?",
            options: ["Exemplification by function", "Cohesion — a contrast carrier in front position", "Reference chaining"],
            correctIndex: 1,
            explanation: "A fronted contrast adverbial is a cohesive device with a new address: the same relation, relocated to the sentence's head where examiners read for it.",
            from: "Cohesion",
          },
          {
            question: "The scan labels five consecutive sentences S, S, S, S, S. What is the recommended repair?",
            options: ["Rewrite all five as complex sentences", "Upgrade two that deserve it and leave three standing", "Delete the paragraph"],
            correctIndex: 1,
            explanation: "Repair by upgrade, not demolition: two added shapes produce a healthy mix while the accuracy of the surviving simples stays intact.",
            from: "Four upgrades, each reversible",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which sentence is compound-complex?",
        hints: ["Count the independent clauses first, then look for a subordinate one."],
        options: [
          { id: "a", text: "Although the pilot succeeded, the council delayed, and the funding lapsed." },
          { id: "b", text: "The pilot succeeded, but the funding lapsed." },
          { id: "c", text: "Although the pilot succeeded, the funding lapsed." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "Although the pilot succeeded, the council delayed, and the funding lapsed.",
          "Two independent clauses (the council delayed; the funding lapsed) plus one subordinate (although the pilot succeeded) make the fourth shape — the full load-carrier of body paragraphs.",
          "(b) is compound — two independents, no subordinate; (c) is complex — one independent plus one subordinate.",
        ),
        tags: ["awriting", "variety", "shapes"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Run the five-sentence scan on the paragraph.",
        hints: ["Label S, CD, CX, CD-CX in order, then count the distinct shapes."],
        passageTitle: "Scan drill",
        passage:
          "The market moved to the square in 2012. Stallholders followed within a season. Because the old site stood empty, the council proposed housing there. Residents objected, and the plans were redrawn twice. Although the dispute dragged on, the market thrived throughout, and the square became the district's living room.",
        question: "What does the scan report for these five sentences?",
        options: [
          { id: "a", text: "S, S, CX, CD, CD-CX — four distinct shapes across five sentences: a healthy mix." },
          { id: "b", text: "S, S, S, S, S — monotony requiring a full rewrite." },
          { id: "c", text: "CX, CX, CX, CX, CX — five complexes, too heavy throughout." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "S, S, CX, CD, CD-CX — four distinct shapes across five sentences: a healthy mix.",
          "The first two are simple, the third complex (one subordinate), the fourth compound (two independents joined), and the fifth compound-complex (two independents plus although) — the scan passes with no shape dominant and none missing.",
          "(b) and (c) mislabel the passage: the third sentence's because and the fourth's and are visible in the text, and the fifth carries both markers at once.",
        ),
        tags: ["awriting", "variety", "scan"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the conditional for a proposal argument.",
        sentence: "If governments ___ night rail, freight would leave the roads within a decade.",
        acceptedAnswers: ["subsidised", "subsidized"],
        hints: ["Second conditional: which form does the if-clause take?"],
        feedback: fb(
          "Subsidised (or subsidized).",
          "A second conditional — hypothetical proposal, imagined result — takes the past simple in the if-clause and would plus the bare verb in the result clause, and the sentence's shapes are now doing argument work.",
          "Subsidise (present) would turn the sentence into a real possibility, changing the argument's claim; would subsidise in the if-clause double-marks the hypothesis and breaks the pattern.",
        ),
        tags: ["awriting", "variety", "conditionals"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. What changes between 'The drivers who worked nights received a bonus.' and 'The drivers, who worked nights, received a bonus.'?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — the commas are optional decoration in relative clauses." },
          { id: "b", text: "The first pays only the night-shift drivers; the second pays all the drivers, all of whom worked nights." },
          { id: "c", text: "The first is grammatically wrong because defining clauses need commas too." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The first pays only the night-shift drivers; the second pays all the drivers, all of whom worked nights.",
          "The paired commas make the clause non-defining: the night work becomes a fact about every driver rather than a filter selecting a subset — a payroll-sized difference carried by two commas.",
          "(a) denies the comma consequence, which is semantic; (c) reverses the rule — defining clauses specifically take no commas.",
        ),
        tags: ["awriting", "variety", "relatives"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the four sentence shapes the scan labels.",
        question: "List the four labels the five-sentence scan uses, in any order.",
        acceptedAnswers: [
          "simple, compound, complex, compound-complex",
          "simple; compound; complex; compound-complex",
          "S, CD, CX, CD-CX — simple, compound, complex, compound-complex",
          "simple compound complex and compound-complex",
        ],
        keywords: ["simple", "compound", "complex"],
        hints: [],
        feedback: fb(
          "Simple, compound, complex, compound-complex.",
          "Those four labels cover every sentence you can write: one clause, two joined independents, one independent plus a subordinate, and the full combination of the last two.",
          "Answers listing passive or conditional are naming structures, not shapes — those belong to the fourth upgrade, not the scan's labels.",
        ),
        tags: ["awriting", "variety", "shapes"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. What is the governing rule when repairing a monotonous paragraph?",
        hints: [],
        options: [
          { id: "a", text: "Rewrite every sentence into the most complex shape you know." },
          { id: "b", text: "Upgrade the two sentences that deserve it and leave the accurate simples standing — a pattern you control beats a pattern you don't." },
          { id: "c", text: "Delete the paragraph and start again with different vocabulary." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Upgrade the two sentences that deserve it and leave the accurate simples standing — a pattern you control beats a pattern you don't.",
          "Variety is measured across the five-sentence run, and accuracy is priced above ambition: two safe upgrades produce a healthy mix while a full rewrite multiplies the error surface for no additional credit.",
          "(a) trades control for display, which the accuracy reading punishes; (c) is demolition of prose that needed two stitches.",
        ),
        tags: ["awriting", "variety", "repair"],
      }),
    ],
    homework: [
      "Scan three paragraphs from your last practice essay with the four labels, and note which shape you over-use and which never appears at all.",
      "Write five sentences about a journey, one in each shape (S, CD, CX, CD-CX) plus one free choice, then mark the sentence where the simple shape landed hardest.",
    ],
    assignment: {
      title: "The five-sentence rewrite",
      instructions:
        "Choose any five consecutive sentences from a draft Task 2 body paragraph. Label each with its shape (simple, compound, complex, compound-complex). Then rewrite the five so the run contains at least three different shapes, one fronted adverbial, and one relative clause whose commas you can justify. Submit both versions with the labels, plus one sentence stating what the rewrite gained and what it risked.",
      minWords: 60,
      maxWords: 170,
    },
  },
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-time",
    title: "Time management",
    description:
      "The sixty-minute arithmetic: Task 2 first at double weight, the 5-29-4-2 and 3-14-2-1 splits, the counting protocol, the top-3 error check, and the emergency protocols for the final ten minutes.",
    objectives: [
      "split the hour as 40 minutes for Task 2 and 20 for Task 1, Task 2 first, with the switch honestly budgeted",
      "hold the phase splits — plan, write, check, count — inside both tasks",
      "check against a personal top-3 error list instead of re-reading for pleasure",
      "execute the ten-minute, five-minute and one-minute protocols without negotiating",
    ],
    minutes: 13,
    blocks: [
      {
        type: "lesson-intro",
        text: "The Writing hour is arithmetic before it is English: two tasks, one clock, and a weighting that makes Task 2 worth roughly twice Task 1. Every timing failure is the same failure — minutes spent where the marks are not. The schedule in this lesson is deliberately unromantic: five planning minutes for the essay that carries double weight, a checking pass aimed at three named errors, a counting protocol that costs almost nothing, and emergency protocols for the moments when the plan breaks. Scripts are lost to panic far more often than to slow typing; the arithmetic exists so panic never gets the last word.",
        beforeYouStart: [
          "You have written both tasks at least once, untimed.",
          "You know from the format lesson that Task 2 carries roughly double weight.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Writing — the single shared hour, both tasks, both variants"],
          ["Task & question types", "Task 2 first (about 40 minutes, 250 words or more), then Task 1 (about 20 minutes, 150 words or more)"],
          ["What is assessed", "Timing is scored only through its results: unfinished scripts lose ground on every criterion at once"],
          ["Why this matters", "An unfinished Task 2 is the heaviest avoidable penalty in Writing; the schedule exists to make finishing routine"],
        ],
      },
      { type: "heading", text: "Component 1 — The arithmetic" },
      {
        type: "text",
        text: "Sixty minutes, two tasks, one honest accounting. The recommended order is Task 2 first, because the essay carries roughly double the weight and deserves the freshest mind and the longest block. The split is 40 plus 20: the 40 breaks into 5 plan, 29 write, 4 check, 2 count; the 20 breaks into 3 read-and-plan, 14 write, 2 check, 1 count. The switch between tasks costs a real minute of re-orientation — a cold new prompt read with a tired mind — and honest transfer means that minute lives inside the budget rather than being stolen from checking. On the computer-delivered test a word counter runs beneath the answer box, so counting is a glance; if you sit the Writing on Paper option or practise on paper, the line-counting protocol below is yours to run.",
      },
      { type: "heading", text: "Component 2 — The hour, phase by phase" },
      {
        type: "steps",
        title: "Eight phases, one habit",
        steps: [
          {
            title: "Minutes 1–5: plan Task 2 on the question",
            text: "Read the question twice and underline its task words — discuss, advantage, to what extent. Write the thread sentence in full, then note two reasons, each with a five-word example. Nothing else: no introduction drafted, no vocabulary rehearsed. Five minutes of planning is the cheapest insurance the hour sells.",
            examples: [
              {
                english: "A five-minute plan for an agree-or-disagree question: thread sentence, 'reason 1: talent spread', 'reason 2: debt burden', 'example: nursing course vs law course'.",
                note: "Twenty-five words of plan writing the next thirty-five minutes of essay.",
              },
            ],
          },
          {
            title: "Minutes 6–34: write the essay from the plan",
            text: "Four paragraphs, straight from the notes, with the clock checked only at phase boundaries. When the display shows 34 and the conclusion is unwritten, compress the conclusion to two sentences rather than overrun — an essay that ends plainly at 260 words outperforms an elegant one the checker never reaches. Writing time is for writing; every decision was made at minute five.",
            examples: [
              {
                english: "A candidate at minute 34 compresses a planned three-sentence conclusion into two and still crosses 250 words with ninety seconds to spare.",
                note: "Compression beats overrun: the phase boundary is a promise kept.",
              },
            ],
          },
          {
            title: "Minutes 35–40: check against your top-3, then count",
            text: "The check pass hunts exactly three named errors — the three your error log says you make most (a typical trio: missing articles, dropped plural -s, comma splices). One fast read, three targets, fixes only. Then count: on screen it is a glance; on paper, count the words in three average lines, multiply by the lines used, and add the partial line.",
            examples: [
              {
                english: "A top-3 check over a 280-word essay finds two dropped plurals and one splice — five fixes inside four minutes, zero rewrites started.",
                note: "Named-error hunting catches more than admiring ever will.",
              },
            ],
          },
          {
            title: "Minutes 41–60: read, plan, write, check, count Task 1",
            text: "Three minutes of reading: chart type, time frame, units, and the two patterns the overview will claim. Fourteen minutes of writing in report shape — introduction, overview, one body per group. Two minutes of the same top-3 check plus one report-specific target: figures copied correctly. The final minute counts, closes the last sentence, and stops writing when the display reaches zero.",
            examples: [
              {
                english: "The three-minute read produces four notes — 'line graph, 1990–2020, millions of litres, rise then plateau' — and the report writes itself into them.",
                note: "The read is planning: the overview is chosen before a sentence exists.",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        title: "The sixty minutes, laid out",
        headers: ["Phase", "Minutes", "The discipline"],
        rows: [
          ["Task 2 — plan", "5", "Thread sentence, two reasons, one example each — and nothing else"],
          ["Task 2 — write", "29", "Four paragraphs from the plan; minute 34 means compress, not continue"],
          ["Task 2 — check", "4", "The top-3 error hunt only: no rewrites, no new ideas, no admiration"],
          ["Task 2 — count", "2", "Glance the on-screen counter, or run the three-line hand count"],
          ["Task 1 — read & plan", "3", "Chart type, time frame, units, and the overview's two patterns"],
          ["Task 1 — write", "14", "Introduction, overview, one body paragraph per data group"],
          ["Task 1 — check", "2", "The same top-3 list plus figures copied correctly"],
          ["Task 1 — count & close", "1", "Count, finish the final sentence, stop writing at zero"],
        ],
      },
      {
        type: "text",
        text: "Two pieces of arithmetic back the Task-2-first order. First, weight: because the essay counts roughly twice as heavily, a minute moved from Task 1 into Task 2 buys about twice the expected return — which is why the essay gets the long, fresh block and the report gets the efficient one. Second, length: scripts under the minimum lose ground on task response, and the missing words are usually cheaper to write than the penalty is to absorb. Fifty missing words at a writing pace of fifteen words a minute is under four minutes of production — one body paragraph, written in the checking window's first minutes, repairs more than any polish applied to a short script. Under length, write; at length, check.",
      },
      {
        type: "text",
        text: "Checking has a job description: it fixes mechanical errors, and nothing else. The efficient check is a hunt for your personal top-3 — the three errors your own practice log says you commit most. Build the list before test week from your last two essays; a typical trio is missing articles, dropped plural -s, and comma splices, but yours belongs to you. Read the finished script once at speed, looking only for those three; fix what appears; stop. Re-reading for style is not checking — it invites re-writing, and re-writing is how candidates turn finished scripts into unfinished ones.",
      },
      { type: "heading", text: "Component 3 — When the plan breaks" },
      {
        type: "steps",
        title: "Three emergency protocols",
        steps: [
          {
            title: "Ten minutes left: cut to the skeleton",
            text: "Whichever task is unfinished receives only its load-bearing parts. If the essay is still running, write a two-sentence conclusion and switch at once. If the report is barely started, write the introduction and overview immediately, then one body paragraph on the largest group — skip the second group entirely. A complete short report outperforms a beautiful half of a longer one, every sitting.",
            examples: [
              {
                english: "A candidate at minute 50 with four sentences of Task 1 written: overview in, one body on the biggest group, done at 59 — a report that reads finished.",
                note: "The skeleton protocol chooses completeness over coverage, and wins.",
              },
            ],
          },
          {
            title: "Five minutes left: buy a clean ending",
            text: "Finish the sentence you are in, then write one closing sentence that completes the shape — a final claim for the report's pattern, or a two-sentence conclusion for the essay. Stop adding groups, reasons or examples: everything not yet written is now officially unnecessary. A clean short ending reads as competence; an abandoned clause reads as the clock winning.",
            examples: [
              {
                english: "Mid-body at minute 55, a candidate closes with 'These two movements, then, explain the decade's shape.' — and the report lands complete.",
                note: "One sentence of closure buys the impression of a finished design.",
              },
            ],
          },
          {
            title: "One minute left: the final mark",
            text: "No new words. Confirm the last sentence ends with its punctuation, confirm nothing the scoring needs is blank, and let the clock run out with the script complete in form. A script with a period is a script; the difference between 279 words and 290 has never decided a band, but a trailing half-sentence has decided many a reader.",
            examples: [
              {
                english: "The final sixty seconds of a sitting: one period confirmed, one counter glanced, zero new words — and the hour ends on the writer's terms.",
                note: "The last minute belongs to the last mark, nothing else.",
              },
            ],
          },
        ],
      },
      { type: "heading", text: "Component 4 — Worked examples" },
      {
        type: "example",
        title: "The hour, logged and stress-tested",
        items: [
          {
            english: "A full sitting logged against the schedule: plan 5:10, write 29:30, check 3:50, count 1:15, switch 1:05, then the report phases — both tasks finished, both counts cleared.",
            note: "The log proves the arithmetic fits: the hour holds both tasks with a minute to spare.",
            domain: "exam",
          },
          {
            english: "Under-length mathematics worked once: a 230-word essay, caught by the count, gains a 55-word reason paragraph in three and a half minutes of the check phase — from short to safe.",
            note: "Counting first converts a hidden penalty into a four-minute repair.",
            domain: "exam",
          },
          {
            english: "The ten-minute protocol executed live: with six Task 1 sentences at minute 50, the candidate writes overview and one strong body paragraph, and the report reads complete at 59.",
            note: "Skeleton thinking under pressure is a rehearsed skill, not an inspiration.",
            domain: "exam",
          },
          {
            english: "A learner's top-3 card reads 'articles, plural -s, splices'; the four-minute pass over a timed essay finds five fixes and rewrites nothing.",
            note: "The card is personal arithmetic — your errors, your minutes, your fixes.",
            domain: "study",
          },
          {
            english: "A manager briefing a client in twenty minutes: three to frame, fourteen to draft, three to check figures — the exam's phases in office dress.",
            note: "Plan-write-check is a universal production rhythm, not an exam artefact.",
            domain: "work",
          },
          {
            english: "Cooking two dishes for one sitting: the slow braise goes in first while the salad waits, because the long task sets the clock for the short one.",
            note: "Weighting logic in a kitchen — the high-stakes, slow task claims the early minutes.",
            domain: "everyday",
          },
          {
            english: "A paper-counting drill: three average lines hold 11 words, the essay runs 21 lines, so roughly 230 — one short paragraph short, written in three minutes.",
            note: "The line protocol lands within a dozen words of the truth, in under a minute.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "Component 5 — The mistakes catalogue" },
      {
        type: "mistakes",
        title: "The timing catalogue",
        items: [
          {
            wrong: "I do Task 1 first because it is printed first in the booklet.",
            right: "Take Task 2 first: the double-weighted task deserves the long, fresh block, and the efficient report fills the tired twenty minutes well.",
            reason: "The order follows the weighting, not the pagination — a schedule built on weight buys roughly twice the return per shared minute.",
          },
          {
            wrong: "Checking means reading my essay again to see whether I still like it.",
            right: "Hunt your three named errors at speed, fix what appears, and stop — re-reading invites re-writing, which is how finished scripts become unfinished.",
            reason: "The check pass has a job description: mechanical fixes only, because mechanical fixes are the only ones reliably available in four minutes.",
          },
          {
            wrong: "Word counts can wait until the end, if any time is left over.",
            right: "Counting owns its own budgeted minutes — two for the essay, one for the report — and happens on schedule, never on leftovers.",
            reason: "Under length is a scoring event, not a style flaw; a count deferred is a penalty discovered after the repair window has closed.",
          },
          {
            wrong: "A polished Task 1 will compensate for a Task 2 that ran out of time.",
            right: "Protect the essay first: the weighting arithmetic means a strong report cannot buy back what a truncated essay loses.",
            reason: "Roughly double weight cuts both ways — excellence in the lighter task pays about half of what it costs in the heavier one.",
          },
        ],
      },
      {
        type: "four-skills",
        title: "Time management across all four skills",
        reading: {
          text: "Candidate A opened with the essay, planned five minutes, wrote twenty-nine, checked four, counted two, then gave the report twenty honest minutes; both scripts were complete, and the last minute confirmed a final period. Candidate B spent thirty-five minutes crafting a 190-word report with a beautiful introduction, then wrote the essay in the twenty-two minutes that remained, stopping mid-paragraph at minute sixty with no conclusion and no count. Both candidates could write; only one had an hour that made sense.",
          task: "Name the two timing errors Candidate B committed, and say which phase of Candidate A's hour prevented each of them.",
        },
        writing: {
          task: "Write the five-minute plan for this question, exactly as the planning phase would produce it: 'University education should be free for everyone. To what extent do you agree or disagree?' Submit the thread sentence, two reasons in five words or fewer each, and one named example per reason — nothing more.",
          guide: [
            "Write the thread first: your position plus its strongest reason, in one sentence.",
            "Give each reason five words or fewer — the plan is notes, not prose.",
            "Attach one concrete example to each reason, named in a word or two.",
            "Check the question type: to-what-extent invites a measured position, not a slogan.",
          ],
          model:
            "Thread: Free tuition is worth the cost, because debt distorts career choices more than taxes do. Reason 1: debt steers graduates (example: banking versus nursing). Reason 2: tax-funded places are predictable (example: Scotland's fee policy). Position note: agree with limits — free tuition, capped places.",
        },
        listening: {
          script: "Right, ten minutes left and you're mid-report. Stop adding detail. Overview in now — two sentences. Then one body paragraph on the biggest group, and let the second group go. At five minutes, finish the sentence you're in and close with one line about the main pattern. At one minute, no new words — just make sure your last sentence has its full stop. Complete and short beats long and abandoned.",
          task: "Note the three moves the coach names for the final ten minutes, and the one thing the writer is told never to do at one minute.",
        },
        speaking: {
          task: "Explain your sixty-minute plan aloud in forty-five seconds, as if briefing a nervous friend the night before the test.",
          frames: [
            "Task 2 goes first because ...",
            "My five planning minutes produce ...",
            "My check phase hunts only ...",
            "If I'm behind at minute fifty, I ...",
          ],
          checklist: [
            "I named both splits — the essay's 40 and the report's 20.",
            "I said what my top-3 errors are.",
            "I stated the ten-minute protocol in one breath.",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it earns the marks"],
        rows: [
          ["States the thread before any paragraph exists", "Five minutes of planning fixes the essay's direction — the cheapest insurance the hour sells"],
          ["Caps every reason at five words with a named example", "Body paragraphs write themselves from notes; no writing minute is spent deciding anything"],
          ["Notes the position's limits inside the plan", "A to-what-extent question receives a measured answer, decided calmly at minute five rather than desperately at minute thirty"],
          ["Keeps the plan as notes, never prose", "Planning that turns into drafting steals from the writing phase and locks in sentences before the essay's shape exists"],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the phase splits where your eyes fall, and decide now that minute 34 means compress, not continue."],
          ["While the clock runs", "Write from the plan, not from inspiration; look at the clock only at phase boundaries, never mid-sentence."],
          ["If you are stuck", "Run the protocol the clock shows — at ten cut to the skeleton, at five buy a clean ending — and never renegotiate mid-writing."],
          ["Final minutes", "The last minute belongs to the final mark and the blank check: end the sentence, confirm nothing is empty, stop."],
        ],
      },
      {
        type: "summary",
        points: [
          "The hour is 40 plus 20, Task 2 first: the double-weighted essay takes the long, fresh block.",
          "The splits: Task 2 in 5 plan, 29 write, 4 check, 2 count; Task 1 in 3 read-and-plan, 14 write, 2 check, 1 count.",
          "Checking is a named-error hunt — your personal top-3, read once at speed, fixed and stopped.",
          "Under length, write: fifty words cost under four minutes, far cheaper than the penalty they prevent.",
          "The emergency protocols are rehearsed, not improvised: skeleton at ten, clean ending at five, final mark at one.",
          "Honest transfer means the switch minute lives inside the budget — no phase borrows from another without a decision.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "One item per earlier lesson.",
        items: [
          {
            question: "The planning phase's first product is which earlier lesson's invention?",
            options: ["The five-sentence scan", "The thread sentence", "The linker families"],
            correctIndex: 1,
            explanation: "The coherence lesson's thread — position plus reason in one sentence — is written at minute five and governs the next twenty-nine.",
            from: "Coherence",
          },
          {
            question: "A top-3 error list that includes comma splices owes its fix to which lesson?",
            options: ["Punctuation", "Cohesion", "Sentence variety"],
            correctIndex: 0,
            explanation: "The splice's three repairs are mechanical fixes — exactly the kind of error the four-minute check pass exists to hunt.",
            from: "Punctuation",
          },
          {
            question: "Under the laid-out schedule, what happens at minute 34?",
            options: ["Start the Task 2 plan", "Compress the conclusion and move toward checking", "Begin the report"],
            correctIndex: 1,
            explanation: "Minute 34 closes the essay's writing phase: a two-sentence conclusion beats an overrun, and the check phase starts on time.",
            from: "Eight phases, one habit",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which task goes first, and for what reason?",
        hints: ["Think about the weighting that drives the whole schedule."],
        options: [
          { id: "a", text: "Task 1 first, because it is shorter and warms up the writing hand." },
          { id: "b", text: "Task 2 first, because the essay carries roughly double weight and deserves the long, fresh block." },
          { id: "c", text: "Whichever task looks easier on the day." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Task 2 first, because the essay carries roughly double weight and deserves the long, fresh block.",
          "The order follows the weighting: a minute invested in the essay buys about twice the expected return of the same minute in the report, so the heavier task claims the freshest mind.",
          "(a) warms up the hand at the cost of the marks that matter; (c) makes the schedule a mood, and moods do not survive minute fifty.",
        ),
        tags: ["awriting", "time", "order"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Diagnose the hour in the passage.",
        hints: ["Compare each phase against the 5-29-4-2 and 3-14-2-1 splits."],
        passageTitle: "Timing post-mortem",
        passage:
          "Mira's log reads: 8 minutes planning the essay, 31 minutes writing it, 6 minutes re-reading the essay and rewriting its second paragraph, no separate count because the on-screen counter was visible, then 15 minutes on the report — 6 of them spent choosing between two possible overviews before writing a word of it. Both scripts were finished, but the report's body gave only eight minutes and never quoted a figure from the second group.",
        question: "Which timing error cost the report its second body paragraph?",
        options: [
          { id: "a", text: "Trusting the on-screen counter instead of counting by hand." },
          { id: "b", text: "The 6-minute overview debate inside the report's writing phase — the 3-minute read-and-plan should have settled the overview before writing began." },
          { id: "c", text: "Spending only 8 minutes planning the essay instead of 5." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The 6-minute overview debate inside the report's writing phase — the 3-minute read-and-plan should have settled the overview before writing began.",
          "The read-and-plan phase exists precisely to choose the overview: deciding during writing burned six of fourteen writing minutes, which is exactly what the missing second body paragraph needed.",
          "(a) is correct behaviour, not an error — the counter replaces hand-counting on computer; (c) misreads the plan overrun, which cost the check phase, not the report's bodies.",
        ),
        tags: ["awriting", "time", "phases"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Complete the weighting fact.",
        sentence: "Task 2 is worth roughly ___ as much as Task 1, which is why it goes first.",
        acceptedAnswers: ["twice", "two times", "double", "twice as much", "2x"],
        hints: ["The schedule's whole order rests on this number."],
        feedback: fb(
          "Twice (roughly double).",
          "The essay counts about twice as heavily as the report, so the long fresh block belongs to it, and every minute moved between tasks is priced by that ratio.",
          "Any answer suggesting equal weight removes the schedule's foundation — with equal weights, order would be a matter of taste rather than arithmetic.",
        ),
        tags: ["awriting", "time", "weighting"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. What exactly does the four-minute check pass do?",
        hints: [],
        options: [
          { id: "a", text: "Re-reads the essay slowly, improving any sentence that could be better." },
          { id: "b", text: "Hunts three named personal errors at speed, fixes what appears, and stops — no rewrites, no new ideas." },
          { id: "c", text: "Rewrites the introduction, because first impressions decide everything." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Hunts three named personal errors at speed, fixes what appears, and stops — no rewrites, no new ideas.",
          "Checking has a job description: mechanical fixes only, aimed at the errors your own log names. Re-reading for style invites re-writing, and re-writing is how finished scripts become unfinished ones under the clock.",
          "(a) spends the pass on taste, which changes nothing scoreable in four minutes; (c) trades a complete script for a half-rewritten one — the worst bargain of the hour.",
        ),
        tags: ["awriting", "time", "checking"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. State the four phases of each task's split, in order.",
        question: "Name the four phases both tasks share, in the taught order.",
        acceptedAnswers: [
          "plan, write, check, count",
          "planning, writing, checking, counting",
          "plan, write, check, count — same four for both tasks",
          "plan write check count",
        ],
        keywords: ["plan", "write", "check", "count"],
        hints: [],
        feedback: fb(
          "Plan, write, check, count.",
          "Both tasks run the same four phases — the essay as 5-29-4-2, the report as 3-14-2-1 — and every phase boundary is a decision point the schedule has already made for you.",
          "Answers that include transfer or re-reading have imported other moments of the hour into the phase list; the four phases are the production spine only.",
        ),
        tags: ["awriting", "time", "phases"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Ten minutes remain and Task 1 has four sentences. What does the protocol order?",
        hints: [],
        options: [
          { id: "a", text: "Write both body paragraphs quickly, skipping the overview to save time." },
          { id: "b", text: "Introduction and overview immediately, then one body paragraph on the largest group — the second group is abandoned on purpose." },
          { id: "c", text: "Start again with a neater plan, since four sentences cannot be rescued." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Introduction and overview immediately, then one body paragraph on the largest group — the second group is abandoned on purpose.",
          "The skeleton protocol protects the load-bearing parts: an examiner reading a short report with a valid overview and one proven pattern scores a report — one with two half-patterns and no overview scores a fragment.",
          "(a) saves the ornament and loses the organ, since the overview carries the report's central judgement; (c) spends the rescue minutes on a plan there is no time to use.",
        ),
        tags: ["awriting", "time", "emergency"],
      }),
    ],
    homework: [
      "Build your top-3 error list from your last two practice essays and copy it onto a card; use it for one full four-minute check pass on your next timed essay.",
      "Run the three-line hand count on three old practice scripts and compare the estimate with the true figure; note your average words per line for test day.",
    ],
    assignment: {
      title: "The minute card and the report",
      instructions:
        "Build your minute card: the eight phases with their minutes, and your personal top-3 error list beside the two check phases. Then run one timed 20-minute Task 1 from any prompt in the mock library, following the 3-14-2-1 split strictly. Submit three things: the minute card, the three-minute plan you produced before writing, and a sixty-word timing report stating where you drifted, which phase stole minutes, and which emergency protocol you needed — if any.",
      minWords: 90,
      maxWords: 260,
    },
  },
];
