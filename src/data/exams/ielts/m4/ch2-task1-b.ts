/**
 * Chapter 2B — Task 1 masterclass, families part B (PROMPT 46, Part B).
 *
 * The last three Academic Task 1 visual families, each taught through the
 * ten-component masterclass anatomy: mixed charts (two visuals joined by one
 * prompt), process diagrams (the passive-voice report) and maps (the language
 * of change and position across eras). Every worked mini-model, dataset,
 * process and map pair in this file is original TalkSy teaching material; no
 * official examination content is reproduced, and every band reference reads
 * as an educational estimate.
 */

import type { LessonSpec } from "../types";
import { ex, fb } from "../types";

export const awritingTask1LessonsB: LessonSpec[] = [
  // ---------------------------------------------------------------------------
  // Lesson 1 — Mixed charts
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t1-mixed",
    title: "Task 1 — Mixed charts",
    description:
      "Two visuals, one report: how to read a bar-plus-line or bar-plus-pie prompt as a single story, give each visual its own key feature, join them with connective reporting, and never report the same fact twice.",
    objectives: [
      "extract the shared frame of a two-visual prompt: subject, period and the differing units of each visual",
      "assign each key feature to the visual that owns it, so every body paragraph has one master",
      "link the pair with connective reporting, such as 'this shift is reflected in' and 'a pattern mirrored by'",
      "edit out double-reporting so that no fact appears twice in the report",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "Some Task 1 prompts put two visuals in front of you at once: a bar chart of quantities beside a line graph of the same movement across time, or bars paired with pies. The failure mode is familiar — two small reports stapled together, each with its own overview, and a word count spent twice on one fact. The cure is to read the pair as a single story told from two angles: decide which visual owns which key feature, join them with connective reporting, and let every figure earn its place exactly once.",
        beforeYouStart: [
          "You can write the four-part single-visual report: paraphrased introduction, overview, two figure-carrying bodies.",
          "You can describe a trend's direction and pace, and name its endpoints.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Academic Writing Task 1 — mixed prompts pair two linked visuals, most often bars with a line graph, or bars with pies"],
          ["Task & question types", "The 20-minute, 150-word report: select and report the main features of BOTH visuals, and compare where relevant"],
          ["What is assessed", "Task Achievement above all: one clear overview spanning the pair, selective reporting, and no invented or duplicated facts"],
          ["Why this matters", "Two visuals double the data surface but not the word count; the estimated Task Achievement band usually follows how well the pair is treated as one report"],
        ],
      },
      { type: "heading", text: "Component 1 — How to analyse the visual" },
      {
        type: "text",
        text: "Read the prompt sentence twice before touching either visual, because the frame of a mixed task is written into it: the subject both visuals share, the period they cover, and the two different measures they use. Write three lines on the question paper — family A with its units, family B with its units, and the shared span — and check the units line twice, since mixed pairs are usually built on a deliberate contrast such as thousands against per cent. The pairing is never decoration: the task sets two visuals because each shows something the other cannot, and your report is expected to notice exactly what that is.",
      },
      { type: "heading", text: "Component 2 — How to identify the main features" },
      {
        type: "text",
        text: "Hunt for features that need both visuals to exist. Does the quantity story agree with the share story, or does one run against the other? Which visual carries the headline — usually the one that moves through time — and which carries the scale or the structure? Cap yourself at two headline features for the whole task, and give each one a home, because a feature with no owner paragraph is a feature the report will either forget or report twice. A detail that matters only inside one visual, and adds nothing to the pair's story, is a body-paragraph citizen, never an overview citizen.",
      },
      { type: "heading", text: "Component 3 — How to select important data" },
      {
        type: "text",
        text: "The figure budget does not double just because the prompt did: four to six numbers for the whole report, shared out between the visuals. Spend them at the endpoints, the extremes and the biggest single jump, because those positions carry claims. The mixed task adds one discipline of its own: never quote the same fact from both visuals. If the bars show a trebling and the line shows the same growth, report it once, from the visual whose units make the claim cleanest, and let the second visual confirm the pattern in a figure-free clause. One fact, one appearance.",
      },
      { type: "heading", text: "Component 4 — How to compare information" },
      {
        type: "text",
        text: "Two comparison directions are available, and mature reports use both. Inside a visual you compare its own members — tallest against smallest bar, steepest against flattest stretch of line. Across visuals you connect rather than compare: 'membership almost doubled, and this growth is mirrored in the pie charts, where beginners took a growing share of new sign-ups'. One law governs the cross-visual move: raw numbers from different units never meet in a comparison. Twenty-four thousand bicycles and fourteen per cent are different currencies, and joining them with 'more than' manufactures a claim neither visual makes.",
      },
      { type: "heading", text: "Component 5 — How to identify trends" },
      {
        type: "text",
        text: "Give the trend language to the visual that earns it. A time series — line graph, or bars stepping through years — owns the words of direction and pace: climbed, levelled off, accelerated, slowed. The partner visual usually supplies scale, structure or composition, and its job in your report is to say how big the trend was or where it was concentrated. Check whether the two stories agree; when they diverge, the divergence is a gift, because a single overview clause — 'although the count fell, its share held steady' — proves you read the pair rather than one chart twice.",
      },
      { type: "heading", text: "Component 6 — How to organise the response" },
      {
        type: "steps",
        title: "Building the mixed report",
        intro: "The four-part shape survives; only the ownership changes.",
        steps: [
          {
            title: "Step 1: Frame the pair",
            text: "Note both families, both units and the shared period in one line, and name the single story the pair tells before planning any paragraph.",
            examples: [
              {
                english: "Bars in thousands, line in per cent, both covering 1995 to 2015: one story — cycling grew from a marginal habit into a visible one.",
                note: "The frame line, written before any planning, is where unit errors are prevented rather than repaired.",
              },
            ],
          },
          {
            title: "Step 2: Write the one-sentence introduction",
            text: "Paraphrase both visuals in a single sentence joined by 'while' or 'and', varying the reporting verb between the two halves so the pair does not sound like a photocopy.",
          },
          {
            title: "Step 3: Write the two-clause overview",
            text: "One clause per visual, no figures, the shared direction named; place it directly after the introduction, never at the end of the report.",
          },
          {
            title: "Step 4: Build two owner paragraphs",
            text: "Body one takes the primary visual's biggest feature and closes with a linking clause toward the partner; body two takes the partner's key feature and may echo back once — once only.",
          },
        ],
      },
      { type: "heading", text: "Component 7 — How to write an introduction" },
      {
        type: "text",
        text: "The introduction is one sentence that paraphrases both visuals — never two sentences, and never the prompt's own wording. Join the halves with 'while' or 'whereas', and vary the reporting verb so the pair does not read as a copy: 'The bar chart illustrates how many bicycles were registered in the city of Millbrook in 1995, 2005 and 2015, while the line graph compares the proportion of daily commutes made by bicycle over the same two decades.' Notice that the second half can drop the years when the period is shared — 'over the same two decades' carries them — and notice that neither half expresses an opinion. None ever will.",
      },
      { type: "heading", text: "Component 8 — How to write an overview" },
      {
        type: "text",
        text: "Write the overview as one sentence with a clause per visual, joined by a semicolon or a linking word, and keep every figure out of it. The pattern is direction plus direction, or direction plus structure: 'Overall, library visits fell in every age band, a decline matched by the shrinking share of households borrowing print books.' If the two visuals disagree, the disagreement becomes the overview: 'Overall, membership grew strongly even as the average member visited less often.' Put the overview straight after the introduction, because a reader who meets it late has already been left to assemble the story alone.",
      },
      { type: "heading", text: "Component 9 — How to develop detail paragraphs" },
      {
        type: "text",
        text: "Each body paragraph serves one visual's key feature, and the paragraph's last sentence is where the pair shakes hands. Open with the feature, support it with two or three figures doing real evidential work, and close with a connective clause pointing forward: 'this shift is reflected in…', 'a pattern mirrored by…', 'the second visual confirms the same movement…'. The second paragraph opens with its own visual's key feature and may echo back once, in its final sentence. Two echoes per report read as stitching; three read as padding, and padding in a 170-word report is expensive.",
      },
      { type: "heading", text: "Component 10 — How to avoid irrelevant data" },
      {
        type: "mistakes",
        title: "The mixed-family trap catalogue",
        items: [
          {
            wrong: "The bar chart shows 68,000 bicycles and the line graph shows 14 per cent, so bicycles became the most popular way to travel.",
            right: "Registrations reached 68,000, yet cycling still accounted for only 14 per cent of commutes — a growing minority, never a majority.",
            reason: "Counts and shares are different currencies; mixing them manufactures a claim that neither visual makes, and examiners mark it as inaccuracy, not insight.",
          },
          {
            wrong: "Writing two mini-reports: an overview for the bar chart, then a second overview for the line graph, then two thin conclusions.",
            right: "One report: one introduction spanning the pair, one two-clause overview, two owner paragraphs joined by a linking clause.",
            reason: "Task Achievement's demand for a clear overview is singular; a stapled double report reads as unfinished work, whatever the language quality around it.",
          },
          {
            wrong: "Perhaps people cycled more because fuel prices rose during the period.",
            right: "Report the growth, park the cause: the visuals record what happened, and no arrow explains why.",
            reason: "No mixed prompt shows causes; speculation imports outside knowledge, which the report must live without from first word to last.",
          },
          {
            wrong: "Reporting the same rise twice — once from the bars with their figures, once from the line with its own.",
            right: "State the fact from its cleanest visual, then let the partner confirm it in a linking clause that carries no numbers.",
            reason: "Double-reporting burns the word budget twice over one fact and signals that the pair was never analysed as a single story.",
          },
        ],
      },
      { type: "heading", text: "The pattern bank — connective reporting in action" },
      {
        type: "example",
        title: "Six moves every mixed report needs",
        items: [
          {
            english: "LINK, MATCHING DIRECTION: 'Ownership doubled in a decade, and this growth is reflected in the line graph, where the commuting share climbed in every five-year interval.'",
            note: "The standard link: one clause states the fact, the second names the partner visual's confirmation.",
            domain: "exam",
          },
          {
            english: "LINK, DIVERGING DIRECTION: 'Although the number of tickets sold fell after 2016, the pie charts show local audiences taking a growing share of a shrinking market.'",
            note: "Divergence earns its overview clause — the pair disagrees, and the report is big enough to say so.",
            domain: "exam",
          },
          {
            english: "SPLIT OWNERSHIP: the counts paragraph opens 'Registrations stood at 24,000 in 1995…'; the share paragraph opens 'The commuting share, by contrast, began at just 4 per cent…'",
            note: "The phrase 'by contrast' re-orients the reader across the unit change between owner paragraphs in four words.",
            domain: "exam",
          },
          {
            english: "DOUBLE-REPORT CATCH: a draft ends body one with 'the share rose from 4 to 14 per cent' and then opens body two with the same two figures; the fix deletes the body-one copy.",
            note: "The editing rule: when both halves carry one number, the weaker copy goes.",
            domain: "study",
          },
          {
            english: "WORKPLACE: 'Unit sales rose 18 per cent year on year, a shift mirrored in the satisfaction survey, where delivery scores recovered from their winter dip.'",
            note: "Managers' reports join metrics the same way — two sources, one claim, no repetition.",
            domain: "work",
          },
          {
            english: "EVERYDAY: 'Season-ticket use is well up, and the crowded 7:40 platform tells the same story — the counts and the experience agree.'",
            note: "News and small talk link sources constantly; the exam version simply drops the direct address.",
            domain: "everyday",
          },
          {
            english: "DRILL: cover the line graph, write the overview from the bars alone, uncover the line, then add the second clause.",
            note: "A ten-minute drill that trains the two-clause overview shape until it is automatic.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "The worked mini-model — one story, two visuals" },
      {
        type: "four-skills",
        title: "Worked mini-model: bicycles in Riverford",
        reading: {
          text: "A two-visual report invites three questions from a reader acting as examiner: does one overview span both visuals, does each body paragraph serve a single visual, and does any fact appear twice? The first question is usually the decisive one, because a report with two overviews reads as two halves of different tasks, while a single spanning overview tells the reader the pair was analysed together. The third is the quiet killer — inside a tight word count, repetition looks like padding even when every repeated sentence is perfectly accurate.",
          task: "Read the model, then find the two sentences that mention both visuals, and check where each figure appears.",
        },
        writing: {
          task: "The bar chart shows the number of bicycles registered in the city of Riverford in 1995, 2005 and 2015. The line graph shows the percentage of daily commutes made by bicycle in Riverford over the same period. (Bar chart: 24,000 registrations in 1995; 39,000 in 2005; 68,000 in 2015. Line graph, cycling's share of commutes: 4 per cent in 1995, 5 in 2000, 7 in 2005, 10 in 2010, 14 in 2015.) Write the introduction, the overview and the first body paragraph only; the body paragraph should belong to the bar chart and close by linking to the line graph.",
          guide: [
            "The bar chart illustrates…, while the line graph compares…",
            "Overall, the pair tells a single story of…",
            "In 1995…, a figure that…",
            "This shift is reflected in…, where…",
          ],
          model:
            "Introduction: The bar chart illustrates how many bicycles were registered in the city of Riverford in 1995, 2005 and 2015, while the line graph compares the percentage of daily commutes made by bicycle over the same two decades.\n\nOverview: Overall, the pair tells a single story of steady growth: registrations almost trebled across the period, and cycling's share of commuting rose in every interval, although it remained a minority choice for travellers.\n\nBody paragraph 1: In 1995, Riverford residents registered 24,000 bicycles, a figure that climbed to 39,000 by 2005 and reached 68,000 at the end of the period, nearly three times the starting count. This shift is reflected in the line graph, where the commuting share rose steadily from 4 per cent in 1995 to 14 per cent in 2015, with the steepest climb coming in the final five years.",
        },
        listening: {
          script:
            "Right, look at this pair together before anything else. Bars on the left, line on the right — and they are measured differently: thousands of bicycles against a percentage of trips. So the line cannot 'beat' the bars; the two are telling one story in two currencies. Which visual owns the headline? The line, because it moves through time — direction and pace live there. The bars own scale: how big the change actually was. So plan one overview with a clause for each, first body for the bars with the scale figures, second body for the line, and one linking sentence where the two halves shake hands. And if you catch yourself quoting four per cent in both bodies — you have double-reported, and one of those copies has to go.",
          task: "Listen and answer: which visual owns the headline trend, and which owns the scale?",
        },
        speaking: {
          task:
            "Explain the mixed-chart method out loud in sixty seconds: the frame, the owner rule, the linking move, and the double-reporting edit.",
          frames: [
            "A mixed prompt gives me two visuals in different units, so first I…",
            "The time-series visual owns the…, while its partner owns…",
            "The two paragraphs shake hands when…",
            "If the same fact appears twice, I…",
          ],
          checklist: [
            "Did I name both families and both units?",
            "Did I say which visual owns the headline?",
            "Did I give one example linking phrase?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["One introduction spans the pair", "A single sentence joined by 'while' paraphrases both visuals, telling the examiner from line one that this is one report, not two."],
          ["The overview carries two clauses and no figures", "Direction plus direction, pattern without numbers — the shape a clear overview is commonly read to require."],
          ["A linking clause closes body one", "'This shift is reflected in…' hands the reader from the bars to the line, the signature move of the family."],
          ["Every figure appears exactly once", "The endpoints and the steepest interval carry the claims; the commuting share is never re-quoted from the bars' paragraph."],
          ["The report stays silent on causes", "Growth is reported without a word about why, keeping every sentence inside what the two visuals show."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the frame — both families, both units, the shared span — and name in one line the story the pair tells."],
          ["While the clock runs", "One visual per body paragraph, one linking clause per join, and four to six figures in the whole report."],
          ["If you are stuck", "Give the headline to whichever visual moves through time, and give its partner the scale, structure or composition."],
          ["Final minutes", "Hunt repetition: one fact reported from both visuals loses its weaker copy and frees words for the thinner paragraph."],
        ],
      },
      {
        type: "summary",
        points: [
          "Read a mixed pair as one story in two currencies: shared subject, shared period, different units.",
          "One introduction, one overview, two owner paragraphs — never two mini-reports stapled together.",
          "The trend visual owns direction and pace; its partner owns scale, structure or composition.",
          "Connective reporting joins the visuals: 'this shift is reflected in', 'a pattern mirrored by'.",
          "Double-reporting is the family's cardinal sin: one fact, one visual, one appearance.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from the foundations chapter.",
        items: [
          {
            question: "Which planning habit from the foundations chapter does the mixed task sharpen?",
            options: [
              "Writing the frame — families, units, period — before planning any paragraph",
              "Counting every tick on both axes",
              "Choosing a title for the report",
            ],
            correctIndex: 0,
            explanation:
              "Planning taught the frame line; with two visuals it becomes three lines, and the units line is where mixed tasks are won or lost.",
            from: "Planning",
          },
          {
            question: "In cohesion terms, what work does 'this shift is reflected in the line graph' perform?",
            options: [
              "It signals a new topic with no connection to what came before",
              "It points back to the stated fact and forward to the partner visual in one clause",
              "It apologises for a missing figure",
            ],
            correctIndex: 1,
            explanation:
              "Cohesion's reference chains work across sentences exactly as within them; the linking clause is a bridge built from a backward-pointing 'this shift'.",
            from: "Cohesion",
          },
          {
            question: "A line graph covers 1995 to 2015, a finished period. Which verb forms does its paragraph need?",
            options: [
              "Present simple throughout, because charts are always current",
              "Past simple forms for the movements, with past perfect where one change precedes another",
              "Future forms, because the data continues beyond the chart",
            ],
            correctIndex: 1,
            explanation:
              "Grammar accuracy work ties tense to the period: finished spans take past simple, and earlier changes inside the span can take past perfect for sequence.",
            from: "Grammar accuracy",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "A mixed prompt gives you a bar chart of registration counts and a line graph of the commuting share. What must the overview do?",
        hints: ["Think about span, not figures."],
        options: [
          { id: "a", text: "Report the largest figure from each visual, with exact numbers." },
          { id: "b", text: "Cover both visuals in one or two clauses, stating the shared direction without figures." },
          { id: "c", text: "Describe only the line graph, since trends matter more than quantities." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Cover both visuals in one or two clauses, stating the shared direction without figures.",
          "The overview of a two-visual prompt must span the pair: one or two clauses, the shared direction named, and every figure held back for the body paragraphs.",
          "(a) drags figures into the overview, which exists to carry the pattern; (c) abandons half the task, and one visual alone cannot carry Task Achievement.",
        ),
        tags: ["awriting", "t1", "mixed", "overview"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Which sentence links the two visuals correctly?",
        hints: ["A link points backward to a fact and forward to the partner visual."],
        options: [
          { id: "a", text: "The bars are nice, and the line goes up as well." },
          { id: "b", text: "This tripling of registrations is mirrored in the line graph, where the commuting share climbed in every five-year interval." },
          { id: "c", text: "The line graph is more important than the bar chart because percentages are better than raw numbers." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "This tripling of registrations is mirrored in the line graph, where the commuting share climbed in every five-year interval.",
          "A linking clause points backward to the stated fact and forward to the partner visual, joining the pair's evidence inside one sentence without repeating the figures.",
          "(a) offers vague praise with no data relationship; (c) ranks the visuals instead of reporting them, and the task set both, so both count.",
        ),
        tags: ["awriting", "t1", "mixed", "linking"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Decide which visual owns the key feature.",
        hints: ["Counts live in one visual; shares live in the other."],
        passageTitle: "A mixed prompt in numbers",
        passage:
          "The bar chart records membership of a city gym in three years: 2,100 members in 2010, 3,400 in 2015 and 5,800 in 2020. The pie charts show how members first heard about the gym: in 2010, 44 per cent came through word of mouth and 21 per cent through street posters; in 2020, word of mouth had fallen to 19 per cent while online adverts accounted for 52 per cent.",
        question: "Which key feature belongs to the pie charts rather than the bars?",
        options: [
          { id: "a", text: "Membership almost trebled across the decade." },
          { id: "b", text: "Online advertising overtook every other recruitment channel, while word of mouth collapsed from the leading position." },
          { id: "c", text: "The gym had 5,800 members in 2020." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Online advertising overtook every other recruitment channel, while word of mouth collapsed from the leading position.",
          "Shares and their reshuffling belong to the pies, while the counts belong to the bars; the report keeps the two currencies apart, feature by feature.",
          "(a) and (c) are count facts, so they belong to the bar chart's owner paragraph, not the pies'.",
        ),
        tags: ["awriting", "t1", "mixed", "ownership"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Complete the linking clause.",
        sentence: "This fall in print borrowing is ___ in the pie charts, where the share of e-book loans doubled.",
        acceptedAnswers: ["mirrored", "reflected"],
        hints: [],
        feedback: fb(
          "mirrored (or reflected)",
          "The connective pair 'mirrored' and 'reflected' states that the second visual carries the same pattern as the first, without quoting its figures again.",
          "Answers like 'shown' waste the connective move the sentence is built for, and 'increased' contradicts the fall the clause points back to.",
        ),
        tags: ["awriting", "t1", "mixed", "linking"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Define the family's signature error.",
        question: "What is double-reporting in a mixed-chart report? One sentence.",
        acceptedAnswers: [
          "stating the same fact from both visuals, so one piece of information occupies two sentences",
          "reporting one fact twice, once from each visual",
          "quoting the same information from both charts instead of letting one visual confirm the other",
        ],
        keywords: ["same", "both"],
        hints: [],
        feedback: fb(
          "Stating the same fact from both visuals, so one piece of information occupies two sentences.",
          "Double-reporting means one fact is stated from both visuals, so the same information takes two sentences and two paragraphs; the edit keeps the cleaner copy and frees the words.",
          "Definitions about having 'too many figures' miss the target — the quantity of figures is a separate issue from their duplication.",
        ),
        tags: ["awriting", "t1", "mixed", "editing"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Your report states the rise from the bar chart, with figures. The line graph shows the same rise. What does its second appearance look like in a well-edited report?",
        hints: [],
        options: [
          { id: "a", text: "The same rise restated with the line graph's figures, for completeness." },
          { id: "b", text: "A linking clause noting that the line graph confirms the pattern, without repeating the figures." },
          { id: "c", text: "A second overview of the rise, placed at the top of the line graph's paragraph." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A linking clause noting that the line graph confirms the pattern, without repeating the figures.",
          "A confirmation clause names the partner visual's agreement without figures; restating the rise with new numbers spends the budget twice on one fact, and a second overview breaks the single-report rule.",
          "(a) is double-reporting with extra steps; (c) installs the stapled-double-report fault the whole method exists to prevent.",
        ),
        tags: ["awriting", "t1", "mixed", "editing"],
      }),
    ],
    assignment: {
      title: "Two visuals, one opening",
      instructions:
        "Choose a mixed prompt — bars with a line graph, or bars with pies — from the Academic Task 1 bank or any practice source you trust. Write only the introduction, the overview and the first body paragraph, roughly 90 to 140 words. Underline your linking clause, and check that no fact appears twice across your three parts.",
      minWords: 90,
      maxWords: 170,
    },
    homework: [
      "Take any two-visual prompt from the writing bank and write only its two-clause overview; then swap the clauses and check the sentence still works — if it does not, one clause has been carrying the other.",
      "Re-read one mixed report you have written previously and run the double-reporting audit: underline every fact, and delete the weaker of any pair that appears twice.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Lesson 2 — Process diagrams
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t1-process",
    title: "Task 1 — Process diagrams",
    description:
      "The passive-voice report: a diagram's arrows become present-simple passive stages — is poured, are mixed, is transported — sequenced by first, once, after this and subsequently, under an overview that names the shape, the count, the start and the end.",
    objectives: [
      "convert a diagram's arrows into passive-voice steps in the present simple (is poured, are mixed, is transported)",
      "sequence stages with varied devices: first, next, once, after this, at this point, meanwhile, subsequently",
      "write the process overview: linear or cyclical, the number of stages, the start and the end",
      "describe manufacture with precise everyday verbs, naming human agents only where the diagram shows them",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "A process diagram asks for a different report from any chart: no trends, no comparisons of size — instead a chain of actions in the present simple passive, one clause per stage, strung together with sequencing devices. The material, not the workers, is the star of every sentence: apples are picked, glass is melted, water is treated. This lesson builds the passive report outward from the diagram — stage counting, the linear-versus-cyclical question, the overview that names start, end and number of stages, and the sequencing ladder that keeps the chain readable without a single repeated 'then'.",
        beforeYouStart: [
          "You can write the standard Task 1 introduction and overview pair.",
          "You can form the present simple passive (is added, are transported) without hesitating.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Academic Writing Task 1 — process diagrams appear as one of the seven visual families, usually a manufacturing chain or a natural cycle"],
          ["Task & question types", "The 20-minute report on how something is made, treated or recycled — stages, not figures"],
          ["What is assessed", "Task Achievement: complete stage coverage with an overview naming the process's shape, plus passive-voice control as a visible range signal"],
          ["Why this matters", "Process reports are the most grammar-visible Task 1 family: examiners commonly read the passive and sequencer control they display as a range estimate"],
        ],
      },
      { type: "heading", text: "Component 1 — How to analyse the visual" },
      {
        type: "text",
        text: "Before reading any label, count the stages and find the two ends of the chain: where the raw material enters and where the product leaves. Then follow the arrows with your pen, once in each direction, because diagrams hide their logic in junctions — places where two flows merge, one flow splits, or something enters mid-process, such as water added or labels applied. Note where human figures appear, since a worker holding a tool is diagram grammar for 'this stage is manual'. Write the material's journey on your plan in one line — orchard to bottle, collection to furnace — and the report's spine already exists.",
      },
      { type: "heading", text: "Component 2 — How to identify the main features" },
      {
        type: "text",
        text: "A process has only a few main features, and all of them are visible from a distance: the shape (does the last stage feed the first?), the number of stages, where the material changes state — crushed, melted, filtered, dried — and where people intervene. These four facts are the overview's raw material. The state change deserves special respect: it is usually the hinge of the whole diagram, the moment liquid becomes solid or raw becomes refined, and it makes the natural split point between your two body paragraphs.",
      },
      { type: "heading", text: "Component 3 — How to select important data" },
      {
        type: "text",
        text: "In this family the 'data' is the stages themselves. Every stage must appear exactly once — omitting a stage cuts Task Achievement — but not every stage deserves a full clause of its own. Give the milestones their own clauses: the state changes, the junctions, the manual stages. Fold small steps into a neighbour's clause with one verb, so that 'the bottles are washed and inspected' covers two boxes in five words. What you may never do is invent a stage the diagram does not show, however obvious real-world knowledge insists it must exist.",
      },
      { type: "heading", text: "Component 4 — How to compare information" },
      {
        type: "text",
        text: "Process diagrams offer no bars to compare, so the rubric's 'make comparisons where relevant' translates into contrast inside the flow: manual stages against mechanical ones, the raw material at entry against the product at exit, the two halves of the process on either side of the state change. A sentence such as 'unlike the earlier stages, which rely on machinery, the final inspection is carried out by hand' answers the rubric honestly. What never counts as comparison is ranking — the report does not decide which stage matters most; it reports the chain.",
      },
      { type: "heading", text: "Component 5 — How to identify the direction of change" },
      {
        type: "text",
        text: "Ask one question of the whole diagram before writing anything: does the chain end, or does it curve back on itself? A linear process runs one way — raw material in, product out, the final arrow pointing off the page. A cyclical process closes the loop: the output of the last stage becomes the input of the first, and the diagram's final arrow points home. The answer belongs in your overview, because it is the single fact that proves you saw the whole design. Describing a loop as a line is this family's most expensive reading error.",
      },
      { type: "heading", text: "Component 6 — How to organise the response" },
      {
        type: "steps",
        title: "Assembling the passive report",
        intro: "Four moves, diagram to report.",
        steps: [
          {
            title: "Step 1: Count and classify",
            text: "Number the stages on the question paper, mark the state change and any human figures, and answer in writing the one-word question: linear or cyclical?",
            examples: [
              {
                english: "Six boxes, one worker drawn at the start, no arrow returning home — a linear process with manual bookends.",
                note: "The classification line is written before any sentence, and the overview will quote it.",
              },
            ],
          },
          {
            title: "Step 2: Write the introduction",
            text: "One passive sentence paraphrasing the diagram's caption: what is produced or treated, and where the chain begins and ends.",
          },
          {
            title: "Step 3: Apply the overview formula",
            text: "Shape, stage count, start point, end point — plus the loop-closing line if the process is cyclical, and the human-involvement note if the diagram shows people.",
          },
          {
            title: "Step 4: Build two stage halves",
            text: "Body one takes the stages up to the hinge, body two the rest; one clause per stage, a fresh sequencer at every join, and the present simple passive as the engine throughout.",
          },
        ],
      },
      { type: "heading", text: "Component 7 — How to write an introduction" },
      {
        type: "text",
        text: "The introduction paraphrases the diagram's caption in one sentence, present simple, with the product in the passive: 'The diagram illustrates the stages by which clay bricks are produced in a rural workshop, from the digging of the soil to the stacking of the finished load.' Swap the caption's verbs for your own — shows becomes illustrates, made becomes produced — and never copy its noun string wholesale. If the caption names a place or a scale, keep it: a farm, a factory or a single town anchors the paraphrase and proves the caption was read rather than scanned.",
      },
      { type: "heading", text: "Component 8 — How to write an overview" },
      {
        type: "text",
        text: "The process overview is a formula with four slots: the shape, the number of stages, the start and the end — 'Overall, the procedure is linear, comprising six stages from the collection of used bottles to the dispatch of new glass.' A cyclical process adds the loop: 'Overall, the recycling system runs as a continuous five-stage loop, in which used paper is gathered, processed and returned to readers as fresh print.' A fifth slot opens when the diagram shows people: 'with human involvement limited to the first and final stages.' Resist the urge to explain any stage here — the overview flies over the factory, it does not walk through it.",
      },
      { type: "heading", text: "Component 9 — How to develop detail paragraphs" },
      {
        type: "text",
        text: "Each body paragraph runs a stretch of the chain with one clause per stage, and the sequencing devices are the paragraph's connective tissue: first, next, once, after this, at this point, meanwhile, subsequently. Vary them deliberately, because a chain of four 'then's reads as notes rather than prose, and let some sequencers do double duty as subordinate clauses — 'once the apples are clean' carries both time and logic in four words. The passive keeps the material as every sentence's subject: the apples are washed, the pulp is pressed, the juice is filtered. Name an agent only where the diagram shows one — 'are picked by hand' — and let the agent vanish everywhere the diagram's people vanish.",
      },
      { type: "heading", text: "Component 10 — How to avoid irrelevant data" },
      {
        type: "mistakes",
        title: "The process-family trap catalogue",
        items: [
          {
            wrong: "Workers pick the apples, and then they wash them and crush them.",
            right: "The apples are picked by hand, washed in cold water, and then crushed into a coarse pulp.",
            reason: "The report's subject is the material, not the workforce; active voice invents agents the diagram may not show and stacks up ambiguous 'they' pronouns along the way.",
          },
          {
            wrong: "Finally, the process ends and the old bottles are thrown away.",
            right: "The newly moulded bottles are then returned to customers, and the cycle begins again.",
            reason: "A returning arrow is a main feature of the whole design; closing a cyclical process as if it ended misreports the diagram the examiner is holding.",
          },
          {
            wrong: "The pomace subsequently undergoes enzymatic maceration in a centrifugal chamber.",
            right: "The remaining solids are then filtered out of the liquid.",
            reason: "Precision in this family means everyday verbs used exactly; borrowed technical terms risk describing a stage that is not on the page.",
          },
          {
            wrong: "First the fruit is washed, then it is crushed, then it is pressed, then the juice is bottled.",
            right: "First the fruit is washed; once it is clean, it is crushed, and the pulp is subsequently pressed before the juice is finally bottled.",
            reason: "Sequencer variety is a cohesion display — a then-chain shows the stages but hides the writer, and the cohesion score notices.",
          },
        ],
      },
      { type: "heading", text: "The pattern bank — voice and sequence in action" },
      {
        type: "example",
        title: "Six moves every process report needs",
        items: [
          {
            english: "PASSIVE CONVERSION: the caption 'workers pick the apples' becomes 'the apples are picked by hand in the orchard'.",
            note: "The material takes the subject position; the worker survives in the sentence only because the diagram shows one.",
            domain: "exam",
          },
          {
            english: "SEQUENCE LADDER: 'The mixture is heated; once it boils, impurities are skimmed off, and at this point the colour is checked before the liquid is poured into moulds.'",
            note: "Four stages, four different joins — once, at this point, before — with no 'then' in sight.",
            domain: "exam",
          },
          {
            english: "CYCLE-CLOSING LINE: 'The purified water is then returned to the reservoir, and the cycle begins again.'",
            note: "The final sentence of a cyclical report walks the loop shut; without it, the loop reads as a line.",
            domain: "exam",
          },
          {
            english: "WORKPLACE: 'The invoice is submitted, checked against the purchase order, approved by the budget holder, and paid within thirty days.'",
            note: "Office workflows are described in exactly this voice — the document, not the clerk, is the subject.",
            domain: "work",
          },
          {
            english: "EVERYDAY: 'The onions are chopped, fried until golden, and simmered with the stock while the rice is rinsed.'",
            note: "Recipe talk and process reports share the grammar, and 'while' covers the two-track kitchen.",
            domain: "everyday",
          },
          {
            english: "DRILL: list the six stages of making a cup of tea, then retell them twice — once with a different sequencer on every clause, once with none at all.",
            note: "The no-sequencer version shows how much of the chain's logic the connectives were quietly carrying.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "The worked mini-model — from orchard to bottle" },
      {
        type: "four-skills",
        title: "Worked mini-model: apple juice on a small farm",
        reading: {
          text: "Process reports are judged first on coverage and shape: every stage present, the overview naming the process's architecture, and nothing invented. They are judged second on voice. The passive is not a stylistic flourish here — it is how technical English standardly reports manufacture, because the reader's interest rides with the material: what happens to the fruit, not who happens to be holding it. A report in the active voice does more than sound informal; it keeps placing unshown people between the reader and the process, and it invites pronoun confusion wherever 'they' could mean the pickers, the owners or the bottles.",
          task: "Read the model and mark every passive verb; then count the sequencing devices — no two should be the same.",
        },
        writing: {
          task: "The diagram shows the process by which apple juice is produced on a small farm. The six stages are: the apples are picked by hand; they are washed in cold water; the fruit is crushed into a pulp; the pulp is pressed to release the juice; the raw juice is filtered; and the bottles are filled, labelled and stored in a cool cellar. Write the introduction, the overview and the first body paragraph, covering the first three stages only.",
          guide: [
            "The diagram illustrates the six stages by which…",
            "Overall, the process is…, beginning with… and ending with…",
            "The process begins…, where…",
            "Once the apples…, they are…",
          ],
          model:
            "Introduction: The diagram illustrates the six stages involved in producing apple juice on a small farm, from the picking of the fruit to the labelling and storage of the finished bottles.\n\nOverview: Overall, the process is linear and largely mechanical, comprising six stages from the hand-picking of the fruit to the labelling of the bottles, with human involvement limited to the picking at the start and the labelling at the end.\n\nBody paragraph 1: The process begins in the orchard, where ripe apples are picked by hand and taken to a washing tank. Here the fruit is rinsed in cold water to remove soil and leaves, and once the apples are clean, they are fed into a crusher and reduced to a coarse pulp. This crushing stage marks the hinge of the process, after which the material is closer to juice than to fruit: pressing, filtering and bottling follow in the second half of the chain.",
        },
        listening: {
          script:
            "Count with me before you write a word. Stages — six. Start — the orchard. End — the cellar. Shape — a straight line, no arrow curling home, so this one is linear, and your overview has to say so out loud. Now the people: a figure with a basket at stage one, another figure with a crate at the end, nothing human in between. That earns half a sentence in the overview — 'largely mechanical', 'human involvement limited to the start and the end'. And where does the material change state? In the crusher the fruit stops being fruit, so the crusher is your hinge: three stages in the first paragraph, three in the second. Split anywhere else, and the paragraphs fight over the hinge.",
          task: "Listen and answer: where do the two body paragraphs split, and why there?",
        },
        speaking: {
          task:
            "Describe a process you know well — making tea, doing laundry, charging a phone — in six passive stages, out loud, using six different sequencing devices.",
          frames: [
            "The process begins when…",
            "Once this is done, the… is…",
            "After this, the… is…",
            "At this point, the… is checked for…",
            "Meanwhile, the… is…",
            "Subsequently, the… is…, and the cycle repeats.",
          ],
          checklist: [
            "Did every stage get exactly one clause?",
            "Did the passive survive the whole minute?",
            "Did any 'then' appear twice?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["The overview carries the formula", "Shape (linear), stage count (six), start (picking) and end (labelling) all appear, plus the human-involvement note the diagram earns."],
          ["The passive never breaks", "Apples are picked, fruit is rinsed, pulp is reduced — the material stays the subject of every clause in the chain."],
          ["Sequencers never repeat", "Where, here, once, after which — each join is a different hinge, and the paragraph reads as crafted prose rather than notes."],
          ["Agents appear only where drawn", "'By hand' marks the one manual stage; the mechanical stages carry no invented workers between the reader and the material."],
          ["Plain verbs carry the manufacture", "Picked, rinsed, crushed, reduced — everyday verbs describe the whole process without a single borrowed technical term."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Number every stage, mark the state change and any human figures, and answer one question in writing: linear or cyclical?"],
          ["While the clock runs", "One clause per stage, a fresh sequencer at every join, and the present simple passive as the engine of every sentence."],
          ["If you are stuck", "Follow the material, not the machinery — trace the substance through the arrows, and the next clause writes itself."],
          ["Final minutes", "Audit every verb for active voice and every join for a repeated 'then', and check the loop line closes the cycle if the diagram has one."],
        ],
      },
      {
        type: "summary",
        points: [
          "Process reports run on the present simple passive with the material as subject: is poured, are mixed, is transported.",
          "The overview is a formula: shape (linear or cyclical), stage count, start point, end point.",
          "Sequencing devices are the cohesion display: first, next, once, after this, at this point, meanwhile, subsequently.",
          "Close the loop if the diagram closes one: cyclical processes end where they begin, and the report says so.",
          "Everyday verbs used exactly beat invented technical vocabulary, and human agents appear only where the diagram shows them.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from the foundations chapter.",
        items: [
          {
            question: "Which tense family does a process report live in, and why?",
            options: [
              "Present simple — the process is timeless, shown as a system that always works this way",
              "Past simple — the diagram describes finished history",
              "Future forms — the product has not been made yet",
            ],
            correctIndex: 0,
            explanation:
              "Grammar accuracy lessons fixed the principle: diagrams show systems rather than events, so the timeless present simple passive carries every stage.",
            from: "Grammar accuracy",
          },
          {
            question: "The foundations chapter taught a split point for two body paragraphs. Where do process reports usually split?",
            options: [
              "After the second stage, whatever it happens to be",
              "At the state change or hinge stage, so each paragraph owns half the chain",
              "Nowhere — processes take one long paragraph",
            ],
            correctIndex: 1,
            explanation:
              "Planning's paragraph-map rule lands on the material's transformation: the hinge gives each body paragraph a stretch of chain of its own.",
            from: "Planning",
          },
          {
            question: "Which cohesion device does 'once the apples are clean' use?",
            options: [
              "A subordinating conjunction carrying time and logic together",
              "A passive auxiliary with no linking role",
              "An opinion marker that softens the claim",
            ],
            correctIndex: 0,
            explanation:
              "Cohesion work includes subordinate time clauses: 'once' joins two stages and orders them in a single word, which is why the ladder varies its devices.",
            from: "Cohesion",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "Which set of facts belongs in the overview of a process report?",
        hints: ["Think architecture, not machinery names."],
        options: [
          { id: "a", text: "The shape of the process, the number of stages, and the start and end points." },
          { id: "b", text: "The name of every machine shown in the diagram, in order." },
          { id: "c", text: "A guess about why the factory was built in that region." },
        ],
        correctOptionId: "a",
        feedback: fb(
          "The shape of the process, the number of stages, and the start and end points.",
          "Shape, stage count and the two endpoints are the four facts a process overview carries; machinery names and motivations are never main features of the design.",
          "(b) turns the overview into an inventory; (c) imports outside knowledge the diagram does not show.",
        ),
        tags: ["awriting", "t1", "process", "overview"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Which sentence reports a manufacturing stage in the voice Task 1 rewards?",
        hints: ["Who is the subject of the sentence?"],
        options: [
          { id: "a", text: "The workers take the apples and they crush them and then they press them." },
          { id: "b", text: "Once the apples have been washed, they are crushed into a pulp, which is subsequently pressed to release the juice." },
          { id: "c", text: "The apples are being crushed right now in the machine." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Once the apples have been washed, they are crushed into a pulp, which is subsequently pressed to release the juice.",
          "The passive keeps the material as subject while the sequencers vary: 'once' and 'subsequently' show time control riding alongside voice control.",
          "(a) invents agents and stacks ambiguous 'they' pronouns; (c) uses present continuous for a timeless system, which the present simple passive exists to report.",
        ),
        tags: ["awriting", "t1", "process", "passive"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Decide what the report must do with the diagram's final arrow.",
        hints: ["Where does the last arrow point?"],
        passageTitle: "A recycling loop",
        passage:
          "Collected bottles are taken to a plant, where they are sorted by colour and crushed into small pieces. The crushed glass is melted in a furnace, and the molten material is moulded into new bottles. These are filled, sold and, once empty, collected again for the same journey.",
        question: "The diagram's final arrow runs from the filled bottles back to the collection point. What should the report do with this?",
        options: [
          { id: "a", text: "Ignore the returning arrow — the report ends once the product is made." },
          { id: "b", text: "Close the loop in the overview and the final sentence, naming the process as cyclical." },
          { id: "c", text: "Explain that recycling is good for the environment." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Close the loop in the overview and the final sentence, naming the process as cyclical.",
          "A returning arrow is the diagram's most important single feature: the overview names the process cyclical, and the closing sentence walks the loop shut.",
          "(a) misreads a loop as a line, the family's costliest error; (c) replaces reporting with opinion, which the task never asks for.",
        ),
        tags: ["awriting", "t1", "process", "cycle"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Complete the stage in the report's voice.",
        sentence: "After the pulp is pressed, the raw juice ___ to remove any remaining solids.",
        acceptedAnswers: ["is filtered"],
        hints: [],
        feedback: fb(
          "is filtered",
          "Filtering is the fifth stage of the model process, and the clause needs the present simple passive to stay inside the report's voice.",
          "Active forms like 'filters' or 'the farm filters' drag an agent back into a stage the diagram shows no people performing.",
        ),
        tags: ["awriting", "t1", "process", "passive"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Justify the passive in one sentence.",
        question: "Why is active voice ('workers crush the apples') risky in a process report? Give both reasons in one sentence.",
        acceptedAnswers: [
          "it invents agents the diagram may not show, and it pushes the material out of the subject position where the reader follows it",
          "it adds unshown workers and buries the material, which should be the subject of every clause",
          "it invents people the diagram does not show and shifts attention away from the material",
        ],
        keywords: ["agents"],
        hints: [],
        feedback: fb(
          "It invents agents the diagram may not show, and it pushes the material out of the subject position where the reader follows it.",
          "Active voice invents agents the diagram may not show and pushes the material out of the subject position, which is exactly where the reader needs to follow it.",
          "Answers claiming active voice is grammatically wrong miss the point: the issue is invented agents and lost focus, not broken grammar.",
        ),
        tags: ["awriting", "t1", "process", "passive"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Halfway through a linear process you cannot remember which stage follows pressing. What is the recovery move?",
        hints: [],
        options: [
          { id: "a", text: "Invent a plausible stage to keep the paragraph moving." },
          { id: "b", text: "Return to the diagram and follow the material — the arrows name the next stage, and the sequencer will absorb the pause invisibly." },
          { id: "c", text: "Skip to the final stage and let the reader fill the gap." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Return to the diagram and follow the material — the arrows name the next stage, and the sequencer will absorb the pause invisibly.",
          "The diagram always holds the answer: follow the substance through the arrows, and the sequencing device will carry the join so the reader never feels the hesitation.",
          "(a) manufactures a stage that is not on the page, an accuracy cut; (c) leaves a hole in the chain that Task Achievement counts as a missing stage.",
        ),
        tags: ["awriting", "t1", "process", "recovery"],
      }),
    ],
    assignment: {
      title: "Half a process, whole discipline",
      instructions:
        "Choose a process-diagram prompt from the Academic Task 1 bank, or sketch your own six-stage process for an everyday product and label its boxes. Write the introduction, the overview and the first body paragraph — the first half of the chain only. Use a different sequencing device at every join, keep every verb in the present simple passive, and name an agent only if your diagram shows one.",
      minWords: 80,
      maxWords: 160,
    },
    homework: [
      "Take any process diagram from the writing bank and write its overview sentence five different ways — linear, cyclical, five stages, eight stages, and with people — until the four-slot formula is automatic.",
      "Rewrite one active-voice paragraph from an old report of yours in full passive, then read both versions aloud and mark where 'they' had been hiding an unclear agent.",
    ],
  },
  // ---------------------------------------------------------------------------
  // Lesson 3 — Maps
  // ---------------------------------------------------------------------------
  {
    slug: "ielts-awriting-t1-map",
    title: "Task 1 — Maps",
    description:
      "One place across two or three eras: the change toolkit (was demolished, was converted into, was replaced by, remained unchanged), the position language that anchors every change, and the overview that names the transformation.",
    objectives: [
      "read a map pair as a before-and-after, fixing the era labels, the orientation and the surviving skeleton first",
      "deploy the change toolkit: was demolished, was converted into, was replaced by, was built to the north of, remained unchanged",
      "anchor every change in position — in the north-east corner, to the left of the main road, along the river",
      "write the overview of transformation and compare eras feature by feature instead of leading a tour",
    ],
    minutes: 16,
    blocks: [
      {
        type: "lesson-intro",
        text: "A map task hands you the same place twice — sometimes three times — and asks what time did to it. Nothing is counted and nothing trends; instead, buildings are demolished, converted, extended and built, while a few stubborn features survive every era untouched. The report is written from above: organised by zone or by theme, comparing eras feature by feature, in the passive with time markers holding the sequence together. This lesson covers the language of change, the language of position, and the overview that names the transformation — what kind of place this was, and what kind of place it became.",
        beforeYouStart: [
          "You can write a paraphrased introduction and a figure-free overview.",
          "You can use the past simple passive (was built, were demolished) with confidence.",
        ],
      },
      {
        type: "table",
        title: "Examination relevance",
        headers: ["Aspect", "This lesson"],
        rows: [
          ["Section", "Academic Writing Task 1 — maps appear as one of the seven visual families, usually a settlement or site shown across two or three eras"],
          ["Task & question types", "The 20-minute report comparing layouts of one place over time — changes, survivals and positions, not figures"],
          ["What is assessed", "Task Achievement: an overview naming the transformation; accurate change vocabulary; organised comparison of eras rather than a guided tour"],
          ["Why this matters", "Map reports reward precise verbs of change and position, which makes this the most teachable Task 1 family — the vocabulary is a closed set"],
        ],
      },
      { type: "heading", text: "Component 1 — How to analyse the visual" },
      {
        type: "text",
        text: "Start with the skeleton, not the changes. Find the features that persist across every era — the main road, the river, the railway line, the coastline — because they are your coordinate system, and every change you report will be positioned against them. Check the era labels and their order, and note whether the final map is dated or marked 'today', since that single word decides your tense plan. Then list each map's features and match them across the eras: the shop that becomes a supermarket, the field that becomes an estate, the church that simply stays. That matched list is the report's raw material.",
      },
      { type: "heading", text: "Component 2 — How to identify the main features" },
      {
        type: "text",
        text: "Three main features exist in every map task, and all three belong in or near the overview. First, the transformation label — the place's before-and-after identity: a farming village becomes a commuter settlement, a dockland becomes a leisure quarter. Second, the single biggest change on the map, the one a returning resident would notice first. Third, what survived: the river, the church, the street plan that time left alone. A fourth candidate separates careful reports from thorough ones — the pattern behind the changes, such as growth pressing northward away from the river.",
      },
      { type: "heading", text: "Component 3 — How to select important data" },
      {
        type: "text",
        text: "Maps drown the undisciplined in detail, so ration yourself: five to seven changes and one or two survivals are enough for a full report. Take major structures and land uses — estates, stations, supermarkets, parks — and leave the minor furniture out unless it is the point; the post office that closes matters, the bench beside it does not. Spread the selection across the map so both body paragraphs have work, and prefer changes that pair a position with a verb ('the farmland was replaced by housing across the whole north') over vague entries that name neither what went nor what came.",
      },
      { type: "heading", text: "Component 4 — How to compare information" },
      {
        type: "text",
        text: "Compare eras, never maps: each sentence places one feature in two moments, rather than two features in one tour. The working tool is a three-column sort run on the question paper — survived, disappeared, appeared — filled by matching features across the eras. Each column has its own language: survivors take 'remained unchanged' and 'survived the period'; disappearances take 'was demolished' and 'made way for'; arrivals take 'was built', 'was added' and 'was constructed'. Contrast connectives then join the columns inside sentences: 'whereas the church survived intact, the shop beside it had become a supermarket by 2020.'",
      },
      { type: "heading", text: "Component 5 — How to identify the transformation" },
      {
        type: "text",
        text: "The direction of change in a map task is the place's identity shift: from rural to residential, from industrial to leisure, from isolated to connected. Naming it is not decoration — it is the overview's first duty, because thirty separate changes are noise until 'the village became a suburb' turns them into a story. Ask what drove the change only if the map shows it, such as a new station implying a link to a nearby city; otherwise report the arc and its biggest steps, and let the features carry the proof without a word of explanation.",
      },
      { type: "heading", text: "Component 6 — How to organise the response" },
      {
        type: "steps",
        title: "Building the map report",
        intro: "Four moves, maps to report.",
        steps: [
          {
            title: "Step 1: Fix the frame",
            text: "Copy the era labels onto your plan in order, trace the surviving skeleton, and decide the tense plan each era licenses.",
            examples: [
              {
                english: "1980 map and 2020 map, both dated: past simple for the first, past perfect for changes completed by the second, and no present forms anywhere.",
                note: "The tense plan is settled before the first sentence, not negotiated during it.",
              },
            ],
          },
          {
            title: "Step 2: Sort the features",
            text: "Run the three-column sort — survived, disappeared, appeared — and choose five to seven changes plus one or two survivors.",
          },
          {
            title: "Step 3: Draft the transformation overview",
            text: "One sentence naming the arc, the biggest change and the survivors; positions stay out of it, because positions are body-paragraph currency.",
          },
          {
            title: "Step 4: Write two zone or theme paragraphs",
            text: "Each paragraph owns one zone across both eras, and every change carries a verb, a position and an era marker.",
          },
        ],
      },
      { type: "heading", text: "Component 7 — How to write an introduction" },
      {
        type: "text",
        text: "The introduction paraphrases the map caption in one sentence that names the place and every era shown: 'The two maps compare the coastal town of Harbourne as it stood in 1960 with the same settlement's current layout.' Two habits keep the paraphrase honest: vary the caption's verbs — shows becomes compares or illustrates — and treat 'today' as an era worth naming, so the final map's tense licence is on record from the first line. Never open with 'The first map shows…', because that sentence shape leads straight into the two-mini-reports fault this family shares with mixed charts.",
      },
      { type: "heading", text: "Component 8 — How to write an overview" },
      {
        type: "text",
        text: "The map overview is the transformation sentence: from what the place was to what it became, plus the biggest single change, plus the survivors. 'Overall, the island developed from an empty stretch of coast into a resort: hotels replaced the dunes along the whole western shore, and only the lighthouse survived the development intact.' Two disciplines apply: no compass positions in the overview — they are body-paragraph currency — and no inventory, because the overview names the arc and its pillars and leaves the rest to the bodies. Where the arc is elusive, name the dominant theme: 'the settlement expanded steadily northward while its historic core was preserved.'",
      },
      { type: "heading", text: "Component 9 — How to develop detail paragraphs" },
      {
        type: "text",
        text: "Every sentence in a map body carries four loads: the feature, the change verb, the position and the era marker — 'the farmland in the north had been replaced by a housing estate by 2020'. The passive plus a time marker keeps the sequence honest: past simple for what the first map shows ('a shop stood on the western side of the main road'), past perfect for transitions completed by the later era ('had been converted into a supermarket'), and present simple only where the final map is marked today. Positions anchor to the skeleton and the map's own orientation: in the north-east corner, to the left of the main road, along the river, at the southern end of the bridge.",
      },
      { type: "heading", text: "Component 10 — How to avoid irrelevant data" },
      {
        type: "mistakes",
        title: "The map-family trap catalogue",
        items: [
          {
            wrong: "When you enter the village you can see a shop on your left, and if you keep walking north you will reach the church.",
            right: "The shop that stood to the left of the main road had become a supermarket by 2020, while the church to its north survived unchanged.",
            reason: "The reader cannot walk a paper map: the report compares eras from above, and second-person guiding imports a journey the data never shows.",
          },
          {
            wrong: "The farmland was sold because the village needed housing for newcomers.",
            right: "The farmland in the north was replaced by a housing estate during the period.",
            reason: "Maps record what changed, never why; causes are invisible on any era pair, and speculation spends words on claims the visuals cannot support.",
          },
          {
            wrong: "In 1980 a shop stands on Main Street, and in 2020 it becomes a supermarket.",
            right: "In 1980 a shop stood on Main Street; by 2020 it had become a supermarket.",
            reason: "Grammar accuracy ties tense to era markers: dated maps take past forms, and transitions completed by the later era take the past perfect.",
          },
          {
            wrong: "The river runs along the south in the first map, and the river still runs along the south in the second map, and the main road also appears in both maps.",
            right: "The river and the main road survived the period unchanged, and every new building was positioned against them.",
            reason: "Unchanged geography is scaffolding: state it once, ideally in the overview, and then use it silently as the anchor for every position you report.",
          },
        ],
      },
      { type: "heading", text: "The pattern bank — change and position in action" },
      {
        type: "example",
        title: "Six moves every map report needs",
        items: [
          {
            english: "CHANGE VERBS: 'The warehouse was demolished, the mill was converted into apartments, and the farmland was replaced by a housing estate.'",
            note: "Three different verbs for three different fates — destroyed, repurposed, substituted — and the precision is countable.",
            domain: "exam",
          },
          {
            english: "ARRIVAL WITH POSITION: 'A station was constructed in the north-east corner, on the existing railway line.'",
            note: "An arrival sentence earns its keep only when the new feature lands somewhere specific, anchored to something that already exists.",
            domain: "exam",
          },
          {
            english: "SURVIVOR SENTENCE: 'The church, the school and the river remained unchanged throughout the forty-year period.'",
            note: "Survivors are evidence of a complete read; bundle two or three into one sentence to save words.",
            domain: "exam",
          },
          {
            english: "TIME-MARKER PASSIVE: 'By 2020, the orchard had been cleared and a car park built in its place.'",
            note: "The past perfect plus a dated marker pins the transition between the two eras exactly where it belongs.",
            domain: "exam",
          },
          {
            english: "WORKPLACE: 'The open-plan floor was divided into meeting rooms, and the old kitchen became a coffee bar during the refurbishment.'",
            note: "Office refurbishment talk uses the same change verbs as map reports — repurposing is a workplace sport.",
            domain: "work",
          },
          {
            english: "EVERYDAY: 'The bakery on the corner is now a phone-repair shop; only the post box outside survived.'",
            note: "Street-corner change talk compresses the same grammar — disappearance, arrival, survivor — into a single line.",
            domain: "everyday",
          },
          {
            english: "DRILL: sketch your own street from memory twice, ten years apart, then describe three changes, one survivor and one new arrival, each with a position.",
            note: "Drawing your own pair forces internal consistency: your positions must match your own before-and-after.",
            domain: "study",
          },
        ],
      },
      { type: "heading", text: "The worked mini-model — Fenwick, 1980 and 2020" },
      {
        type: "four-skills",
        title: "Worked mini-model: the village of Fenwick",
        reading: {
          text: "Map reports are read from above, not from the road. The strongest responses behave like aerial photography with a time slider: one zone at a time, each feature shown in both eras, every change landing on a precise position against the surviving skeleton. Reports that walk — 'as you enter the village you will see' — misread their reader, who cannot see the map at all and needs the changes, not the directions. The practical test is simple: cover the maps, read the report, and check whether the place's transformation could be rebuilt from the words alone.",
          task: "Read the model, then cover it and sketch from memory what the model claims stood in the north of Fenwick in 1980 and in 2020.",
        },
        writing: {
          task: "The two maps show the village of Fenwick in 1980 and in 2020. In 1980: a main road runs north to south through the centre; a river flows along the southern edge; a railway line crosses the eastern side with no station; farmland covers the whole north; a church stands in the south-west; a school and a small shop stand on the main road. In 2020: the farmland has been replaced by a housing estate north of the main road, on both sides of the railway; a station has been built in the north-east corner; the shop has been converted into a supermarket; the school has been extended; the church, the river and the main road are unchanged. Write the introduction, the overview and the body paragraph covering the north of the village.",
          guide: [
            "The two maps compare… as it stood in… with…",
            "Overall, Fenwick was transformed from… into…",
            "The most dramatic change occurred in the north, where…",
            "A station was also constructed in the north-east corner, on…",
          ],
          model:
            "Introduction: The two maps compare the layout of the village of Fenwick as it stood in 1980 with the arrangement of the same settlement in 2020.\n\nOverview: Overall, Fenwick was transformed from a small farming community into a residential commuter village: the farmland that had dominated the north was replaced by housing, a station was added on the eastern line, and the church, the river and the main road survived the forty years unchanged.\n\nBody paragraph 1: The most dramatic change occurred in the north of the village. The farmland that stretched across the entire northern half of Fenwick in 1980 had been replaced by a large housing estate by 2020, with new homes built on both sides of the railway line to the north of the main road. A station was also constructed in the north-east corner of the village, on the line that had previously passed through without stopping.",
        },
        listening: {
          script:
            "Before you plan a single sentence, three checks. Era labels — 1980 and 2020, two maps, forty years apart, so the whole report lives in past forms. Skeleton — the main road running north to south, the river along the south, the railway crossing the east: all three survive both maps, which means every position you write can lean on them. Then the biggest change, which is not the shop becoming a supermarket, pleasant as that is — it is the north. Farmland to housing estate is the change a returning resident would notice from the bypass road, so it opens your first body paragraph and it earns its place in the overview. The shop, the school and the church belong to your second paragraph, the quieter south.",
          task: "Listen and answer: which change opens the first body paragraph, and which three features form the report's coordinate system?",
        },
        speaking: {
          task:
            "Choose a place you know — your street, your campus, your home town — and describe aloud how it changed over the last ten years: one transformation label, one biggest change, one survivor, each with a position.",
          frames: [
            "Overall, the area changed from… into…",
            "The most dramatic change was…, which was built…",
            "By contrast, the… remained completely unchanged.",
            "In the north-east corner, a new… was constructed.",
          ],
          checklist: [
            "Did I name the before-and-after identity of the place?",
            "Did every change carry a verb and a position?",
            "Did I resist explaining why the changes happened?",
          ],
        },
      },
      {
        type: "table",
        title: "Why this model works",
        headers: ["What the model does", "Why it scores"],
        rows: [
          ["Both eras in one opening sentence", "The introduction names the place and both years in a single paraphrased line, refusing the two-mini-reports shape from the start."],
          ["The overview leads with the arc", "Farming community to commuter village: the transformation label comes first, with the biggest change and the survivors attached."],
          ["The body paragraph owns a zone", "The north is told across both eras in one paragraph, so every change reads as a before-and-after in a single place."],
          ["Change verbs stay precise", "Had been replaced, was constructed — each fate gets its own verb, in the passive with era markers holding the sequence."],
          ["Survivors get their clause", "Church, river and main road are named as unchanged, proving the whole map was read, not just the new buildings."],
        ],
      },
      {
        type: "table",
        title: "Examination strategy",
        headers: ["Moment", "Do this"],
        rows: [
          ["Before you start", "Write the era labels in order, trace the skeleton that survives them, and set the tense plan — past forms for dated maps, present only where the final map says today."],
          ["While the clock runs", "One zone or theme per paragraph; every change as feature plus verb plus position plus era marker, with the change-verb bank beside your plan."],
          ["If you are stuck", "Ask what kind of place this was and what kind it is now — the answer is the overview, and the overview unblocks the bodies."],
          ["Final minutes", "Hunt two invaders — cause language ('because', 'due to') and tour language ('you can see', 'walking north') — and delete every instance of both."],
        ],
      },
      {
        type: "summary",
        points: [
          "Read the skeleton first: the road, river, rail or coast that survives every era is the coordinate system for all your positions.",
          "The overview is a transformation sentence: from what the place was to what it became, plus the biggest change and the survivors.",
          "Compare eras feature by feature — the three-column sort (survived, disappeared, appeared) runs before any sentence is written.",
          "Each body sentence carries four loads: feature, change verb, position and era marker, in the passive.",
          "No causes, no tours: maps show what changed, never why, and the reader needs a report rather than directions.",
        ],
      },
      {
        type: "revision",
        title: "Recall check",
        intro: "Three questions from the foundations chapter.",
        items: [
          {
            question: "The cohesion toolkit includes reference chains. Which sentence uses one correctly in a map report?",
            options: [
              "A supermarket was built. The supermarket was large. The supermarket served the new estate.",
              "A station was constructed in the north-east corner, and this addition served the new housing estate.",
              "There was a station. Also there was a housing estate. Also there was a supermarket.",
            ],
            correctIndex: 1,
            explanation:
              "Cohesion's backward-pointing 'this addition' replaces repetition and binds the sentence to its evidence — the map report's natural stitch.",
            from: "Cohesion",
          },
          {
            question: "Which planning habit from the foundations chapter does the map task reuse most directly?",
            options: [
              "Extracting the frame — eras, place, orientation — before any writing",
              "Choosing four-syllable adjectives for change verbs",
              "Counting the words in the introduction",
            ],
            correctIndex: 0,
            explanation:
              "Planning's frame-first rule is universal in Task 1: here the frame is the era labels, the skeleton and the tense plan they license.",
            from: "Planning",
          },
          {
            question: "A draft reads 'In 1980 a shop stands on Main Street, and in 2020 it becomes a supermarket.' Which grammar fix does it need?",
            options: [
              "Past forms with era anchors: 'stood' in 1980, and 'had become' by 2020",
              "Present continuous, to show the change is ongoing",
              "No fix — historical maps take the present simple",
            ],
            correctIndex: 0,
            explanation:
              "Grammar accuracy work ties tense to time markers: dated maps take past simple, and transitions completed by the later era take the past perfect.",
            from: "Grammar accuracy",
          },
        ],
      },
    ],
    questions: [
      ex({
        type: "mcq",
        difficulty: "easy",
        skill: "writing",
        prompt: "What does a map overview lead with?",
        hints: ["Think identity, not directions."],
        options: [
          { id: "a", text: "A walking tour from the entrance to the far corner." },
          { id: "b", text: "The transformation: what kind of place it was, what kind it became, and the biggest single change." },
          { id: "c", text: "The number of buildings, counted exactly." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The transformation: what kind of place it was, what kind it became, and the biggest single change.",
          "A map overview names the before-and-after identity of the place plus its biggest change and survivors; tours and building counts are not transformation statements.",
          "(a) is the tour-guide fault the whole lesson exists to prevent; (c) counts furniture the task never asks you to count.",
        ),
        tags: ["awriting", "t1", "map", "overview"],
      }),
      ex({
        type: "mcq",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Which sentence reports a new feature with correct position language?",
        hints: ["A position needs an anchor that already exists."],
        options: [
          { id: "a", text: "A station was built somewhere in the village." },
          { id: "b", text: "A station was constructed in the north-east corner, on the existing railway line." },
          { id: "c", text: "You can see a station when you look at the top right of the map." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "A station was constructed in the north-east corner, on the existing railway line.",
          "A new feature earns its sentence only with a precise position anchored to something that already exists, like the railway line in the worked model.",
          "(a) lands the building nowhere in particular; (c) is tour language addressing a reader who can see the map, which the real reader cannot.",
        ),
        tags: ["awriting", "t1", "map", "position"],
      }),
      ex({
        type: "read-answer",
        difficulty: "medium",
        skill: "writing",
        prompt: "Guided practice. Choose the strongest overview for this map pair.",
        hints: ["Name the arc first, then the biggest changes."],
        passageTitle: "A waterfront transformed",
        passage:
          "The 1970 map shows a shipyard occupying the whole western waterfront, with two warehouses behind it and a rail spur serving the docks. By 2020 the shipyard had gone: a marina filled the western shore, the warehouses had been converted into galleries and cafés, and the rail spur had been lifted and replaced by a cycle path.",
        question: "Which sentence is the best overview of this map pair?",
        options: [
          { id: "a", text: "The maps show a shipyard and then a marina, with some other changes too." },
          { id: "b", text: "Overall, the industrial waterfront was transformed into a leisure quarter: the shipyard made way for a marina, its warehouses became galleries and cafés, and the rail spur was replaced by a cycle path." },
          { id: "c", text: "First you pass the shipyard, and later there is a marina where boats are parked." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "Overall, the industrial waterfront was transformed into a leisure quarter: the shipyard made way for a marina, its warehouses became galleries and cafés, and the rail spur was replaced by a cycle path.",
          "The strongest overview states the arc — industrial waterfront to leisure quarter — then compresses the biggest changes into one balanced, figure-free sentence.",
          "(a) names the arc nowhere and adds a vague afterthought; (c) walks the reader through a tour instead of reporting the transformation from above.",
        ),
        tags: ["awriting", "t1", "map", "overview"],
      }),
      ex({
        type: "fill-blank",
        difficulty: "medium",
        skill: "writing",
        prompt: "Independent practice. Complete the change of use.",
        sentence: "During the period, the corner shop on the main road ___ a small supermarket.",
        acceptedAnswers: ["was converted into", "was turned into", "became"],
        hints: [],
        feedback: fb(
          "was converted into (or was turned into)",
          "A change of use takes 'was converted into': passive voice, past tense and the new function all arrive inside three words.",
          "Active forms like 'converted into' drop the auxiliary and break the passive chain the rest of the report is built on.",
        ),
        tags: ["awriting", "t1", "map", "change-verbs"],
      }),
      ex({
        type: "short-answer",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Name the planning tool.",
        question: "Which three columns sort every feature of a map pair before writing? Name them.",
        acceptedAnswers: [
          "survived, disappeared, appeared",
          "what survived, what disappeared, what appeared",
          "survives, disappears, appears",
        ],
        keywords: ["survived", "disappeared", "appeared"],
        hints: [],
        feedback: fb(
          "Survived, disappeared, appeared.",
          "The three-column sort is run before writing so that every feature has a fate and every fate has its verbs — and so the overview can draw on all three.",
          "Answers listing compass points describe the paragraphs, not the planning tool, which exists to sort features by fate rather than location.",
        ),
        tags: ["awriting", "t1", "map", "planning"],
      }),
      ex({
        type: "mcq",
        difficulty: "hard",
        skill: "writing",
        prompt: "Independent practice. Your draft contains: 'Unfortunately, the old cinema was demolished, which must have upset local residents.' What is wrong?",
        hints: [],
        options: [
          { id: "a", text: "Nothing — it adds human interest to a dry report." },
          { id: "b", text: "The evaluation ('unfortunately', 'must have upset') reports feelings and causes the map never shows." },
          { id: "c", text: "Only the tense — 'was demolished' should be 'is demolished'." },
        ],
        correctOptionId: "b",
        feedback: fb(
          "The evaluation ('unfortunately', 'must have upset') reports feelings and causes the map never shows.",
          "The map shows the demolition, not the feeling or its causes; evaluation words smuggle opinion into a report that must stay neutral from first line to last.",
          "(a) praises exactly the fault being tested; (c) misdiagnoses the sentence, whose tense is correct for a dated, completed demolition.",
        ),
        tags: ["awriting", "t1", "map", "relevance"],
      }),
    ],
    assignment: {
      title: "One place, one arc",
      instructions:
        "Take a map prompt from the Academic Task 1 bank, or sketch a simple before-and-after pair for a place you know, marking the era labels and an orientation note. Write the introduction, the overview and one body paragraph covering a single zone across both eras. Every change must carry a verb, a position and an era marker, and your overview must name the transformation.",
      minWords: 90,
      maxWords: 170,
    },
    homework: [
      "Sketch your own neighbourhood twice, ten years apart, then write only the overview sentence — transformation label, biggest change, survivors — before describing a single zone.",
      "Collect five change verbs (demolished, converted, replaced, extended, constructed) and write one map-report sentence for each, with every sentence carrying a position and an era marker.",
    ],
  },
];
