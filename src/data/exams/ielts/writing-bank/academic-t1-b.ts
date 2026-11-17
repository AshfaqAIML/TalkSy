/**
 * Academic Task 1 bank — file B (PROMPT 46, Part B/E).
 *
 * The remaining three Academic Task 1 families: a mixed bar-plus-line pair
 * on tourism in a coastal town, a six-stage process diagram on traditional
 * cider making, and a before-and-after map of a redeveloped harbour
 * district. Every task is an original assignment with full model answer,
 * planning notes, the eight-element analysis, a topic vocabulary bank and
 * level samples whose band comments are educational estimates, never
 * official scores.
 */

import type { WritingBankTask } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

// ---------------------------------------------------------------------------
// 1. Mixed charts — tourism in a coastal town
// ---------------------------------------------------------------------------

export const at1MixedTourism: WritingBankTask = {
  slug: "ielts-wb-at1-mixed-tourism",
  title: "Mixed charts — tourism in a coastal town",
  channel: "academic",
  taskType: "task-1",
  family: "mixed",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The charts below give information about tourism in Ashcombe, a small coastal town. The bar chart shows the total number of visitors to the town's three main attractions in spring and in summer 2024, and the line graph shows the average daily number of visitors to these attractions throughout the same year.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "mixed",
    title: "Visitors to Ashcombe's three attractions: seasons and daily numbers, 2024",
    unit: "thousands of visitors",
    bar: {
      kind: "bar",
      title: "Season visitors to three attractions, 2024",
      unit: "thousands",
      xLabel: "Attraction",
      yLabel: "Visitors per season (thousands)",
      categories: ["Historic pier", "Marine aquarium", "Clifftop gardens"],
      series: [
        { name: "Spring (March–May)", values: [46, 33, 21] },
        { name: "Summer (June–August)", values: [78, 54, 47] },
      ],
    },
    second: {
      kind: "line",
      title: "Average daily visitors to the three attractions combined, 2024",
      unit: "thousands per day",
      xLabel: "Month",
      yLabel: "Daily visitors (thousands)",
      xPoints: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      series: [
        { name: "Three attractions combined", values: [0.6, 0.7, 0.9, 1.0, 1.3, 1.7, 1.9, 2.1, 1.4, 1.0, 0.7, 0.9] },
      ],
    },
  },
  requirements: [
    {
      key: "overview",
      description: "States an overview that spans both panels: tourism peaks strongly in summer, and the historic pier leads in both seasons.",
      keywords: ["overall", "summer", "peak", "highest", "seasonal", "pier", "lead", "both"],
    },
    {
      key: "bar-panel",
      description: "Reports the bar chart accurately, comparing all three attractions between spring and summer with figures.",
      keywords: ["aquarium", "gardens", "spring", "46", "78", "33", "54", "21", "47", "thousand"],
    },
    {
      key: "line-panel",
      description: "Describes the line graph's yearly curve, including the winter low, the August peak and the autumn decline.",
      keywords: ["january", "august", "november", "december", "600", "2100", "2,100", "daily", "low", "trough"],
    },
    {
      key: "cross-link",
      description: "Links the two panels explicitly, connecting the daily summer peak with the near-doubling shown in the bars.",
      keywords: ["both", "chart", "graph", "panel", "consistent", "confirm", "mirror", "agree", "together", "same"],
    },
    {
      key: "report-register",
      description: "Reports the data without explaining why the seasons differ or recommending improvements.",
      keywords: ["while", "whereas", "compared", "respectively", "twice", "double", "against"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read both panels (1 minute)",
      notes: [
        "Two panels, two measures: season totals per attraction (bars) and combined daily averages (line) — never mix the units.",
        "Both cover 2024, a completed year, so past simple throughout.",
        "Units: thousands of visitors per season on the bar chart; thousands per day on the line graph.",
      ],
    },
    {
      heading: "Step 2 — Find each panel's headline (1 minute)",
      notes: [
        "Bar: the pier leads in both seasons (46,000 then 78,000), and the gardens more than double — the fastest growth.",
        "Bar: the combined totals nearly double, from 100,000 in spring to 179,000 in summer.",
        "Line: a January trough of 600 daily visitors against an August peak of 2,100, with a small December recovery.",
      ],
    },
    {
      heading: "Step 3 — Plan the four paragraphs (1 minute)",
      notes: [
        "Introduction: one sentence naming both panels and what each one measures.",
        "Overview: summer dominance and the pier's lead — two claims that cover both panels at once.",
        "Body 1: the bar chart, grouped by attraction with paired figures.",
        "Body 2: the line graph's curve, closing with one sentence that links back to the bars.",
      ],
    },
    {
      heading: "Step 4 — Budget figures and avoid double-reporting (1 minute)",
      notes: [
        "Quote roughly six bar figures and three or four line anchors — the same seasonality must not be reported twice.",
        "Keep one explicit cross-panel sentence near the end; that is what a mixed task rewards.",
        "Reserve the final two minutes for tense checks: every figure belongs to 2024.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The charts provide two views of tourism in Ashcombe, a small coastal town: seasonal totals for its three principal attractions, and daily visitor numbers across the same year.",
      "Overall, the town's visitor economy is strongly seasonal. Summer was much the busiest period on both charts, the historic pier attracted the largest crowds in either season, and the clifftop gardens, although least popular in spring, grew fastest as summer arrived.",
      "In spring the three attractions received a combined 100,000 visitors, and this figure nearly doubled to 179,000 in summer. The pier led in both seasons, drawing 46,000 visitors in spring and 78,000 in summer, comfortably ahead of the marine aquarium, which rose from 33,000 to 54,000. The gardens attracted only 21,000 people in the spring, yet their summer total of 47,000 meant that they more than doubled, closing the gap on the aquarium from 12,000 to 7,000.",
      "The line graph tells the same story in daily figures. Attendance climbed from a January low of 600 to an August peak of 2,100, then fell back to 700 by November, before a modest December recovery to 900. At the height of summer, the attractions were therefore drawing roughly three and a half times their winter custom, a surge that the doubling shown between the bar chart's two seasons fully bears out.",
    ],
    wordCount: 218,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric into 'two views of tourism' and immediately labels what each panel measures, so the reader can track which chart is being reported at every later point.",
      },
      {
        role: "Overview",
        analysis:
          "Two headline claims that deliberately span both panels — summer dominance and the pier's lead — with the gardens' growth added as a third feature; not a single figure appears, keeping the paragraph at pattern level.",
      },
      {
        role: "Body 1 — the bar panel",
        analysis:
          "Opens with the combined totals (100,000 to 179,000), a computed figure that proves selection rather than listing, then works down the ranking with paired figures and closes on the narrowing gap between the two smaller attractions.",
      },
      {
        role: "Body 2 — the line panel and the link",
        analysis:
          "Follows the year through three anchors (600, 2,100, 700) plus the December uptick, then spends its final sentence tying the three-and-a-half-to-one summer-to-winter ratio back to the bars — the cross-panel move that defines a strong mixed-chart answer.",
      },
    ],
    vocabulary: [
      { term: "two views of tourism", note: "Frames the pair of charts as complementary rather than competing — a framing that licenses the later link." },
      { term: "nearly doubled", note: "Proportional phrasing for 100,000 to 179,000, hedged honestly because the figure falls just short of twice." },
      { term: "comfortably ahead", note: "Margin language that ranks the pier without repeating 'higher than'." },
      { term: "closing the gap on", note: "The natural collocation for a trailing item that is catching its rival." },
      { term: "tells the same story in daily figures", note: "The linking sentence's engine: it announces agreement between the panels instead of repeating their data." },
      { term: "a modest December recovery", note: "'Modest' calibrates the size of the uptick against the August peak." },
      { term: "three and a half times", note: "A ratio conversion of 600 versus 2,100 — more vivid, and more comparative, than quoting both figures again." },
    ],
    grammar: [
      {
        feature: "Past simple for a completed year",
        example: "Attendance climbed from a January low of 600 to an August peak of 2,100",
        note: "Both panels describe 2024, so every reporting verb sits in the past simple — the first and most visible tense decision in this task.",
      },
      {
        feature: "Participle clause carrying two figures",
        example: "drawing 46,000 visitors in spring and 78,000 in summer",
        note: "A single 'drawing' clause delivers both of the pier's figures in one sentence, halving the word cost of the comparison.",
      },
      {
        feature: "Reference back to a computed total",
        example: "and this figure nearly doubled to 179,000 in summer",
        note: "'This figure' points back to the spring total, letting the paragraph build arithmetic instead of restarting from zero.",
      },
      {
        feature: "Relative clause for the cross-panel link",
        example: "a surge that the doubling shown between the bar chart's two seasons fully bears out",
        note: "The relative clause lets one sentence hold evidence from both panels — the signature structure of a mixed-chart report.",
      },
    ],
    coherence:
      "The report is built as two panels and one bridge: paragraph three owns the bar chart, paragraph four owns the line graph, and the bridge is prepared in the introduction ('two views'), announced in the overview ('both charts') and completed in the final sentence ('bears out'). No figure is reported twice — the seasonality appears once as season totals and once as daily levels, which is exactly the division of labour a mixed task rewards, and each body paragraph opens by naming the panel it is about to summarise.",
    alternativeExpressions: [
      { insteadOf: "two views of tourism", use: "complementary pictures of the town's tourism" },
      { insteadOf: "nearly doubled", use: "rose by almost 100 per cent" },
      { insteadOf: "comfortably ahead", use: "in a clear lead over" },
      { insteadOf: "closing the gap on", use: "narrowing the difference with" },
      { insteadOf: "tells the same story in daily figures", use: "mirrors the seasonal pattern at daily level" },
      { insteadOf: "a modest December recovery", use: "a slight end-of-year rally" },
    ],
    commonMistakes: [
      {
        wrong: "The charts show that summer is the most popular time.",
        right: "Every attraction received between 64 and 124 per cent more visitors in summer than in spring.",
        reason: "A caption-like sentence with no figures reports neither panel; each chart needs its own quantified evidence.",
      },
      {
        wrong: "The pier had 78,000 visitors per day in summer.",
        right: "The pier received 78,000 visitors over the summer season as a whole.",
        reason: "The bar chart counts a season total while the line graph counts daily averages; confusing the two units misreports both panels.",
      },
      {
        wrong: "Visitors increased in summer because of the school holidays.",
        right: "Attendance rose steeply between spring and summer.",
        reason: "The charts contain no causes, so holiday explanations are invention and cost Task Achievement marks.",
      },
      {
        wrong: "In spring it was 46, then in summer 78, and the aquarium was 33 and 54…",
        right: "Group the attractions and quote paired figures selectively, letting one comparison carry several numbers.",
        reason: "Reading both bars of every category aloud produces a data dump; selection is the rubric's first instruction.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The two charts give information about visitors in Ashcombe, a coastal town. The bar chart shows three attractions in spring and summer, and the line graph shows the daily visitors in one year.",
        "Overall, summer is the most popular season. The pier is the biggest attraction in both seasons and the gardens grow the fastest.",
        "In spring, the pier has 46,000 visitors and the aquarium has 33,000. The gardens only have 21,000. In summer all of them increase, the pier reach 78,000, the aquarium 54,000 and the gardens 47,000. So the difference between gardens and aquarium become smaller.",
        "The line graph start at 600 visitors in January and go up to the highest point in August, 2,100. Then it drop to 700 in November. December goes up again to 900. Both charts show the town is busy in summer.",
      ],
      wordCount: 139,
      justification: [
        { criterion: "Task Achievement", note: "The main features of both panels appear — the pier's lead, the gardens' growth and the August peak — but at 139 words the response sits under the 150-word floor, and the closing link sentence ('both charts show the town is busy') reports no figure from either panel." },
        { criterion: "Coherence and Cohesion", note: "A sensible four-paragraph shape with an overview, but linking leans on 'So', 'Then' and 'again', and paragraph four simply narrates the months in order rather than grouping them." },
        { criterion: "Lexical Resource", note: "Adequate topic words ('attractions', 'highest point') but verbs repeat ('has', 'shows', 'go up') and 'biggest attraction' does the work that 'most visited' should do." },
        { criterion: "Grammatical Range and Accuracy", note: "Present simple is used throughout for 2024's data ('the pier has', 'it drop'), with agreement slips ('reach', 'become', 'start') — recurring errors that rarely block meaning, the classic Band 6 profile." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The two charts present complementary pictures of tourism in the coastal town of Ashcombe: seasonal attendance at three attractions, and the distribution of daily visitor numbers across the same year.",
        "Overall, the town's tourist trade was heavily concentrated in the summer months: every attraction recorded a steep rise from spring, the historic pier stayed in first place throughout, and the gardens achieved the fastest growth of the three.",
        "The pier drew 46,000 visitors in spring and 78,000 in summer, maintaining a clear lead over the aquarium, whose numbers rose from 33,000 to 54,000. The gardens, though third in both seasons, more than doubled from 21,000 to 47,000 and thus closed to within 7,000 of the aquarium, having trailed it by 12,000 in the spring.",
        "The daily figures mirror this seasonal concentration. Attendance fell to 600 a day in January, climbed steadily to an August high of 2,100, then eased back to 700 in November, with a slight December rally to 900. In peak summer the attractions were drawing about three and a half times their winter numbers, which is fully consistent with the near-doubling visible between the two seasons of the bar chart.",
      ],
      wordCount: 193,
      justification: [
        { criterion: "Task Achievement", note: "Both panels are covered with quantified features and an explicit closing link between them, and the response clears the 150-word floor through selection rather than listing." },
        { criterion: "Coherence and Cohesion", note: "Panel-by-panel progression with a prepared bridge; reference chains ('the gardens… it') and the final consistency sentence give the report a single arc." },
        { criterion: "Lexical Resource", note: "Precise, varied items — 'complementary', 'mirror', 'eased back', 'rally' — with only 'trade' (for tourism) a shade informal for the register." },
        { criterion: "Grammatical Range and Accuracy", note: "Mostly error-free complex structures: a 'whose' relative, the perfect participle 'having trailed', and a 'which is fully consistent' link clause; range sits just below the model's variety." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "attendance", partOfSpeech: "noun", meaning: "The number of people visiting a place over a period." },
    { word: "seasonal", partOfSpeech: "adjective", meaning: "Rising and falling according to the time of year." },
    { word: "trough", partOfSpeech: "noun", meaning: "The lowest point of a series of values, the opposite of its peak." },
    { word: "to double", partOfSpeech: "verb", meaning: "To grow to twice the original size, as the gardens' total did between spring and summer." },
    { word: "to narrow", partOfSpeech: "verb", meaning: "To become smaller, used of gaps and differences between figures." },
    { word: "turning point", partOfSpeech: "noun", meaning: "A month or moment at which a trend changes direction." },
    { word: "to mirror", partOfSpeech: "verb", meaning: "To show the same pattern as something else, as the line graph mirrors the bars." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 2. Process diagram — traditional apple cider
// ---------------------------------------------------------------------------

export const at1ProcessCider: WritingBankTask = {
  slug: "ielts-wb-at1-process-cider",
  title: "Process diagram — making traditional apple cider",
  channel: "academic",
  taskType: "task-1",
  family: "process",
  difficulty: 3,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The diagram below shows the six stages involved in producing traditional apple cider at a small orchard press.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "process",
    title: "Traditional cider-making at a small orchard press",
    stages: [
      { label: "Harvesting", caption: "Ripe apples are picked in the orchard in autumn and collected in crates." },
      { label: "Washing", caption: "The fruit is rinsed in cold water so that dirt, leaves and damaged apples are removed." },
      { label: "Crushing", caption: "The clean apples are ground into a coarse pulp, known as pomace." },
      { label: "Pressing", caption: "The pomace is squeezed in a press and the raw juice runs into a holding tank." },
      { label: "Filtering", caption: "The juice is passed through a fine filter, leaving a clear liquid." },
      { label: "Bottling and pasteurising", caption: "The clear cider is bottled, sealed, briefly heated, labelled and stored ready for sale." },
    ],
    note: "The process is linear: it begins with the harvest and ends with bottled cider in storage.",
  },
  requirements: [
    {
      key: "overview",
      description: "Opens with an overview that names the six stages, the linear shape and the start and end points.",
      keywords: ["overall", "six", "linear", "begin", "start", "end", "harvest", "bottl", "process"],
    },
    {
      key: "all-stages",
      description: "Covers all six stages in order, from picking the apples to storing the finished bottles.",
      keywords: ["pick", "harvest", "wash", "crush", "press", "filter", "bottl", "pasteuris"],
    },
    {
      key: "passive",
      description: "Uses the present-simple passive as the main voice, keeping workers out of the report.",
      keywords: ["are", "is", "picked", "washed", "crushed", "pressed", "filtered", "bottled", "sealed", "heated"],
    },
    {
      key: "sequencing",
      description: "Moves between stages with varied sequencing devices instead of repeating one connector.",
      keywords: ["first", "then", "next", "once", "after", "before", "subsequently", "finally", "when"],
    },
    {
      key: "material",
      description: "Tracks the material through its changes: whole apples become pulp, then raw juice, then clear bottled cider.",
      keywords: ["pulp", "pomace", "juice", "cider", "solid", "clear", "liquid", "crates", "tank"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame (30 seconds)",
      notes: [
        "No data and no time period: present simple only, and no trend verbs anywhere.",
        "The diagram names no people, so the passive is the natural reporting voice.",
        "Six numbered stages run left to right — a linear chain with one input and one output.",
      ],
    },
    {
      heading: "Step 2 — Find the story (1 minute)",
      notes: [
        "The material changes state twice: whole fruit becomes pulp, and pulp becomes liquid.",
        "Two stages clean the product (washing, filtering) and one preserves it (pasteurising) — the refining thread for the overview.",
        "Start and end points: ripe apples in the orchard; labelled bottles ready for sale.",
      ],
    },
    {
      heading: "Step 3 — Plan the four paragraphs (1 minute)",
      notes: [
        "Introduction: paraphrase the rubric and state the span of the process.",
        "Overview: linear, six stages, material progressively refined — no stage-by-stage detail yet.",
        "Body 1: stages one to three, the preparation phases (harvest, wash, crush).",
        "Body 2: stages four to six, extraction and finishing (press, filter, bottle and pasteurise).",
      ],
    },
    {
      heading: "Step 4 — Language budget (1 minute)",
      notes: [
        "Vary the sequencers — once, then, next, when, after which, finally — rather than 'then' five times.",
        "Aim for is or are plus a past participle in most sentences, with the material as subject.",
        "Report only what the diagram shows; no invented timings, machines or purposes.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The diagram illustrates the six stages in the production of traditional apple cider at a small orchard press, from the harvesting of fruit to the labelling of filled bottles.",
      "Overall, the process is linear and steadily refines its raw material: whole apples are first reduced to pulp and then to liquid, which is clarified and finally heat-treated and sealed in bottles.",
      "Production starts in the orchard, where ripe apples are picked during the autumn and collected in crates. Once the fruit has been gathered, it is taken to the press house and washed in cold water so that dirt, leaves and damaged apples are removed. The clean fruit is then ground into a coarse pulp, known as pomace, which breaks down the apples' structure and prepares the material for pressing.",
      "The juice itself is obtained at the fourth stage, when the pomace is squeezed in a press and the liquid runs into a holding tank. Because this raw juice still contains solids, it is next passed through a fine filter, leaving a clear product. In the final stage, the cider is bottled and sealed, after which the filled bottles are briefly heated to pasteurise their contents; the labelled crates are then stored ready for sale.",
    ],
    wordCount: 205,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric ('the six stages in the production of') and compresses the whole process into one span — fruit to labelled bottles — so the reader's compass is set before any stage is described.",
      },
      {
        role: "Overview",
        analysis:
          "Names the shape (linear), the number of stages (six) and the underlying logic — material steadily refined — which turns a potential list into a story; no stage detail appears here.",
      },
      {
        role: "Body 1 — preparation (stages 1–3)",
        analysis:
          "Sequences harvesting, washing and crushing with three different devices ('where', 'Once…', 'then') and closes each stage with its purpose or result, so the paragraph explains rather than merely names.",
      },
      {
        role: "Body 2 — extraction and finishing (stages 4–6)",
        analysis:
          "Presents the fourth stage as the moment the material turns liquid, explains the filter through its cause ('Because this raw juice still contains solids'), and finishes the chain with the pasteurising detail and storage.",
      },
    ],
    vocabulary: [
      { term: "steadily refines its raw material", note: "The overview's thesis: refinement, not assembly, is this process's logic — and it licenses the body's purpose clauses." },
      { term: "pomace", note: "The diagram's technical term, borrowed precisely and defined in passing ('a coarse pulp, known as pomace')." },
      { term: "runs into a holding tank", note: "A material-as-subject verb that varies the passive without losing formality — range, not risk." },
      { term: "leaving a clear product", note: "A result participle that reports the filter's outcome in three words instead of a new sentence." },
      { term: "after which", note: "The preposition-plus-relative that sequences the final two steps inside one sentence." },
      { term: "briefly heated to pasteurise", note: "The diagram's purpose verb kept as an infinitive of purpose, with 'briefly' preserving the diagram's own hedge." },
      { term: "stored ready for sale", note: "The end-state phrase that closes the chain exactly where it began, in the orchard." },
    ],
    grammar: [
      {
        feature: "Present-simple passive",
        example: "it is taken to the press house and washed in cold water",
        note: "The diagram names no agents, so the passive keeps every sentence impersonal — the default voice for process reports.",
      },
      {
        feature: "Reduced passive after 'Once'",
        example: "Once the fruit has been gathered, it is taken to the press house",
        note: "Ellipsis after 'once', plus a perfect passive, compresses a stage boundary into half a sentence.",
      },
      {
        feature: "'So that' purpose clause",
        example: "washed in cold water so that dirt, leaves and damaged apples are removed",
        note: "A purpose subordinate explains why a stage exists — analysis the rubric quietly rewards.",
      },
      {
        feature: "Preposition plus relative pronoun",
        example: "after which the filled bottles are briefly heated",
        note: "'After which' sequences the last steps without starting a new, choppy sentence.",
      },
    ],
    coherence:
      "The through-line is the material itself — fruit, then pulp, then juice, then bottled cider — and most sentences keep that material as their subject or object. Sequencers are deliberately varied (where, once, then, when, next, after which, in the final stage) so that no connector repeats twice in a row, and the paragraph break falls exactly at the process's own hinge: the moment solid becomes liquid.",
    alternativeExpressions: [
      { insteadOf: "is ground into a coarse pulp", use: "is milled into a thick mash" },
      { insteadOf: "is squeezed in a press", use: "is compressed under a press" },
      { insteadOf: "runs into a holding tank", use: "is collected in a tank" },
      { insteadOf: "In the final stage", use: "The process concludes when" },
      { insteadOf: "stored ready for sale", use: "kept in storage until it is sold" },
    ],
    commonMistakes: [
      {
        wrong: "First, the workers pick the apples and wash them.",
        right: "First, the apples are picked and washed.",
        reason: "The diagram shows no people; inventing workers adds information the picture does not contain and breaks the passive.",
      },
      {
        wrong: "The apples are crushed and then pressed and then filtered and then bottled.",
        right: "The pulp is pressed, after which the juice is filtered and finally bottled.",
        reason: "Chaining 'and then' flattens six distinct stages into a list and repeats one connector four times.",
      },
      {
        wrong: "The process is very simple and the cider tastes delicious.",
        right: "The process consists of six linear stages, from harvest to bottling.",
        reason: "Opinions about simplicity or taste sit outside the diagram; a process report stays impersonal and factual.",
      },
      {
        wrong: "The apples were picked and were washed.",
        right: "The apples are picked and are washed.",
        reason: "A process diagram is timeless, describing what always happens; past simple wrongly turns the routine into a single finished event.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 6.0 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The diagram shows the process of making apple cider in a small orchard. There are six steps from the apples to the bottles.",
        "Overall, the process is linear. It begins with picking apples and it ends with selling the bottles.",
        "Firstly, the apples are picked in autumn and put in the crates. Then they are washed with cold water to clean them. After that, the apples are crushed until they become a pulp. The pulp is pressed and the juice goes into a tank.",
        "Next, the juice is filtered and it becomes clear. Finally, the cider is put in bottles and heated for keeping it good. The process is simple and the cider is very tasty.",
      ],
      wordCount: 116,
      justification: [
        { criterion: "Task Achievement", note: "All six stages appear in the right order, but at 116 words the response is far under the 150-word floor and it adds two details the diagram never shows — selling and tasting the cider." },
        { criterion: "Coherence and Cohesion", note: "The sequencer set ('Firstly', 'Then', 'After that', 'Next', 'Finally') is complete but mechanical, and the overview only repeats that the process is linear without giving its direction." },
        { criterion: "Lexical Resource", note: "Appropriate basic verbs ('picked', 'crushed', 'pressed', 'filtered'), but 'heated for keeping it good' replaces the precise 'pasteurised' and no technical nouns appear." },
        { criterion: "Grammatical Range and Accuracy", note: "Passive forms are mostly well formed ('are washed', 'is pressed'), yet 'until they become a pulp' is awkward, 'for keeping' misfires, and no complex structure is attempted." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The diagram outlines the six-stage sequence by which a small orchard press turns freshly harvested apples into bottled traditional cider that is ready for sale.",
        "Overall, the process is linear, moving from orchard to bottle: the solid fruit is broken down early on, and the liquid released from it is then cleaned, treated and packaged for sale.",
        "Harvesting opens the sequence: ripe apples are picked in autumn and taken to the press house, where they are washed in cold water so that dirt, leaves and damaged fruit are removed. The fruit is subsequently crushed into a coarse pulp called pomace, a step that opens the apples' tissue ahead of pressing.",
        "The liquid is then drawn off: the pomace is squeezed in a press and raw juice flows into a tank, where it is filtered until clear. Finally, the cider is bottled and sealed, briefly heated to pasteurise it, and labelled before being stored ready for sale.",
      ],
      wordCount: 156,
      justification: [
        { criterion: "Task Achievement", note: "Every stage is covered with its purpose, the response clears the 150-word floor, and the overview adds direction and logic rather than parroting the diagram's title." },
        { criterion: "Coherence and Cohesion", note: "The material is tracked continuously from fruit to bottle, sequencers vary ('subsequently', 'where', 'until clear'), and the paragraph break lands on the solid-to-liquid hinge." },
        { criterion: "Lexical Resource", note: "Natural, precise choices — 'drawn off', 'pomace', 'pasteurise' — used in correct collocations with no repetition strain." },
        { criterion: "Grammatical Range and Accuracy", note: "A wide, largely error-free set: passives with relative clauses ('a tank, where it is filtered until clear'), ellipsis ('until clear'), and a gerund alternative ('before being stored') — held below 8 only by repeating 'opens' twice." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "to harvest", partOfSpeech: "verb", meaning: "To gather a ripe crop from the field or orchard." },
    { word: "pomace", partOfSpeech: "noun", meaning: "The pulpy mass of crushed fruit prepared for pressing." },
    { word: "to press", partOfSpeech: "verb", meaning: "To squeeze a solid in order to extract its liquid." },
    { word: "to filter", partOfSpeech: "verb", meaning: "To pass a liquid through a material that traps unwanted solids." },
    { word: "to pasteurise", partOfSpeech: "verb", meaning: "To heat a food or drink briefly to kill microorganisms and extend its life." },
    { word: "linear", partOfSpeech: "adjective", meaning: "Moving in one direction from start to finish, with no return loop." },
    { word: "to refine", partOfSpeech: "verb", meaning: "To make something purer or cleaner step by step." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};

// ---------------------------------------------------------------------------
// 3. Map — a harbour district, 1990 and today
// ---------------------------------------------------------------------------

export const at1MapHarbour: WritingBankTask = {
  slug: "ielts-wb-at1-map-harbour",
  title: "Map — a harbour district, 1990 and today",
  channel: "academic",
  taskType: "task-1",
  family: "map",
  difficulty: 4,
  estimatedMinutes: 20,
  wordMinimum: 150,
  timeLimitSec: 20 * 60,
  prompt:
    "The two maps below show the harbour district of Winterton in 1990 and the same district today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
  visual: {
    kind: "map",
    title: "The harbour district of Winterton: 1990 and today",
    beforeTitle: "Winterton harbour district, 1990",
    afterTitle: "Winterton harbour district, today",
    before: [
      [null, { label: "Cannery" }, null, { label: "Warehouses" }, { label: "Fuel depot" }],
      [{ label: "Fish market" }, null, null, { label: "Warehouses" }, null],
      [{ label: "Fishing wharf" }, { label: "Boatyard" }, null, { label: "Jetty" }, null],
    ],
    after: [
      [{ label: "Car park" }, { label: "Hotel" }, null, { label: "Apartments" }, { label: "Park" }],
      [{ label: "Fish market" }, null, null, { label: "Maritime museum" }, null],
      [{ label: "Marina" }, { label: "Boatyard" }, { label: "Promenade" }, { label: "Cafés" }, null],
    ],
    note: "Water lies to the south of the district in both plans; north is at the top of each map.",
  },
  requirements: [
    {
      key: "overview",
      description: "States the overall transformation: a working fishing harbour has become a leisure and residential district.",
      keywords: ["overall", "fishing", "industrial", "tourism", "tourist", "leisure", "residential", "housing", "transform", "change"],
    },
    {
      key: "disappeared",
      description: "Identifies the features that have disappeared: the cannery, the warehouses, the fuel depot, the wharf and the jetty.",
      keywords: ["cannery", "warehouse", "fuel", "depot", "wharf", "jetty", "demolish", "remove", "replace", "disappear"],
    },
    {
      key: "appeared",
      description: "Identifies the new features: hotel, apartments, museum, park, car park, marina, promenade and cafes.",
      keywords: ["hotel", "apartment", "museum", "park", "marina", "promenade", "cafe", "built", "construct"],
    },
    {
      key: "survived",
      description: "Notes the two survivors from 1990, the fish market and the boatyard, in their original positions.",
      keywords: ["market", "boatyard", "remain", "survive", "unchanged", "retain", "still", "original"],
    },
    {
      key: "positions",
      description: "Uses compass points and location language to anchor each change in the district.",
      keywords: ["north", "south", "east", "west", "corner", "edge", "end", "waterfront", "behind", "along"],
    },
  ],
  planningNotes: [
    {
      heading: "Step 1 — Read the frame (30 seconds)",
      notes: [
        "Two eras, 1990 and today: past simple for the first map, present perfect for the changes.",
        "Water lies to the south in both plans — the anchor for every position.",
        "Organise by what happened (disappeared, appeared, survived), not by walking through the grid.",
      ],
    },
    {
      heading: "Step 2 — Find the story (1 minute)",
      notes: [
        "One transformation: the fishing industry out, tourism and housing in.",
        "Two survivors anchor the comparison: the fish market and the boatyard.",
        "Count the changes briefly — five features gone, eight new arrivals — and select, do not census.",
      ],
    },
    {
      heading: "Step 3 — Plan the four paragraphs (1 minute)",
      notes: [
        "Introduction: paraphrase the rubric and name the two eras.",
        "Overview: the transformation plus the two constants.",
        "Body 1: the northern and central zone — industry replaced by hotel, apartments, park and museum.",
        "Body 2: the waterfront — marina, promenade and cafes — then the survivors to close.",
      ],
    },
    {
      heading: "Step 4 — Location language (1 minute)",
      notes: [
        "Fix every change to a position: north-eastern corner, western end, behind the waterfront.",
        "Use compass points, never left and right, which flip with the reader's viewpoint.",
        "Pair each loss with its replacement in the same clause where possible — the comparison writes itself.",
      ],
    },
  ],
  modelAnswer: {
    paragraphs: [
      "The maps show the harbour district of Winterton in 1990 and the same district as it appears today, after three decades of redevelopment.",
      "Overall, the area has been transformed from a working fishing harbour into a district serving residents and tourists. Almost every industrial building has been demolished or given a new use, and only the fish market and the boatyard survive from the original map.",
      "The northern side has changed most visibly. The cannery towards its western end is now a hotel, the warehouses in the north-east have been converted into apartments, and the fuel depot in the north-eastern corner has been turned into a public park, while a car park has been laid out in the opposite corner. In the middle of the district, to the rear of the former jetty, one warehouse has become a maritime museum.",
      "The waterfront has been rebuilt for leisure. The fishing wharf at the western end is now a marina, the old jetty on the eastern shore has been replaced by a row of cafés, and a pedestrian promenade now runs along the central water's edge. The fish market and the neighbouring boatyard, by contrast, remain exactly where they stood in 1990, the only working features carried over into the new district.",
    ],
    wordCount: 211,
    bandEstimate: "Band 8.0–8.5 estimate — an educational estimate against the public descriptors, not an official score.",
  },
  analysis: {
    paragraphByParagraph: [
      {
        role: "Introduction (1 sentence)",
        analysis:
          "Paraphrases the rubric and adds the frame the reader needs — 'three decades of redevelopment' — without mentioning a single building, keeping the paragraph to its framing job.",
      },
      {
        role: "Overview",
        analysis:
          "States the transformation in one before-and-after sentence ('working fishing harbour into a district serving residents and tourists') and flags the two survivors, the map's second key feature.",
      },
      {
        role: "Body 1 — the northern and central zone",
        analysis:
          "Pairs each lost industrial building with its replacement inside the same clause ('the cannery… is now a hotel'), then places the new car park and museum by corner and neighbouring feature, demonstrating location language.",
      },
      {
        role: "Body 2 — the waterfront",
        analysis:
          "Covers the shore from west to east — marina, cafés, promenade — then reverses direction for the contrast: the two survivors, introduced by 'by contrast' and closed with an appositive naming them the only carried-over features.",
      },
    ],
    vocabulary: [
      { term: "has been transformed", note: "The map report's headline verb: wholesale change of character, stronger than 'changed'." },
      { term: "demolished or given a new use", note: "Covers both fates — cleared sites and converted shells — in one honest clause." },
      { term: "has been converted into", note: "The standard collocation for a building that changes function while keeping its walls." },
      { term: "has been laid out", note: "The natural passive for open-air facilities such as parks and car parks." },
      { term: "rebuilt for leisure", note: "A four-word summary of the waterfront's fate that licenses the detail which follows." },
      { term: "remain exactly where they stood", note: "Position plus survival in one phrase — the map-task equivalent of 'unchanged'." },
      { term: "carried over into", note: "The phrasal verb for features that survive a redevelopment intact." },
    ],
    grammar: [
      {
        feature: "Present perfect passive for changes",
        example: "the fuel depot in the north-eastern corner has been turned into a public park",
        note: "Changes between then and now take present perfect, with the passive keeping buildings, not builders, as the topic.",
      },
      {
        feature: "Past simple for the 1990 baseline",
        example: "remain exactly where they stood in 1990",
        note: "The earlier map is finished past time, so references to it drop back to past simple inside a present-perfect sentence.",
      },
      {
        feature: "Present simple for current states",
        example: "The cannery towards its western end is now a hotel",
        note: "What stands today takes present simple with 'now' — the third tense a map report must manage.",
      },
      {
        feature: "'While' contrast within one sentence",
        example: "while a car park has been laid out in the opposite corner",
        note: "A subordinate 'while' pairs the two corner changes without doubling the sentence count.",
      },
    ],
    coherence:
      "The report divides the district into two zones and audits each in turn — north and centre first, then the waterfront — so every change is anchored to a place before it is named. Compass points and fixed landmarks (the northern side, the western end, to the rear of the former jetty) do the orienting work, the two survivors are reserved for the final contrast, and the closing appositive returns the reader to the overview's transformation claim.",
    alternativeExpressions: [
      { insteadOf: "has been transformed", use: "has changed character completely" },
      { insteadOf: "is now a hotel", use: "now houses a hotel" },
      { insteadOf: "has been laid out", use: "has been created on the site" },
      { insteadOf: "a row of cafés", use: "a strip of eateries" },
      { insteadOf: "carried over into", use: "retained within" },
    ],
    commonMistakes: [
      {
        wrong: "On the left of the map there is a big park now.",
        right: "In the north-eastern corner, the fuel depot has been turned into a park.",
        reason: "'Left' and 'right' flip with the reader's viewpoint; maps are anchored with compass points and fixed landmarks.",
      },
      {
        wrong: "The harbour has changed a lot over the years.",
        right: "The warehouses have been converted into apartments and the wharf replaced by a marina.",
        reason: "'Changed a lot' names no feature and no direction of change; every sentence should carry a specific building and its fate.",
      },
      {
        wrong: "The fishing industry left because the harbour was too small.",
        right: "The fishing wharf has been replaced by a marina.",
        reason: "The maps show buildings, not industries or motives; causal explanations import facts the visuals never contain.",
      },
      {
        wrong: "In 1990 there is a cannery and a fuel depot.",
        right: "In 1990 the district contained a cannery and a fuel depot.",
        reason: "The 1990 map is a closed past scene; present simple blurs the two eras the report exists to compare.",
      },
    ],
  },
  levelSamples: [
    {
      bandEstimate: "Band 5.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The two maps show a harbour area of Winterton in 1990 and now.",
        "Overall, the harbour was a fishing place in 1990 but today it is for tourists and people who live there. The fish market and the boatyard are still in the same place.",
        "In 1990, there is a cannery, two warehouses and a fuel depot in the north of the area. Now the cannery is a hotel and the warehouses become apartments and a museum. The fuel depot change to a park and a car park is built in the west corner.",
        "On the water side, the fishing wharf change to a marina and the jetty is now some cafes. There is also a new walkway in the middle of the coast. The most of the fishing things are gone in the today map.",
      ],
      wordCount: 136,
      justification: [
        { criterion: "Task Achievement", note: "The transformation and both survivors are identified, but at 136 words the response is under the floor, several changes arrive without positions, and 'the most of the fishing things are gone' is too vague to count as selection." },
        { criterion: "Coherence and Cohesion", note: "A workable two-zone structure is visible, but the overview and the final sentence state the same contrast twice, and linking depends on 'and' plus 'Now'." },
        { criterion: "Lexical Resource", note: "Everyday vocabulary ('water side', 'fishing things', 'some cafes') where 'waterfront', 'industrial features' and 'a row of cafés' belong, with heavy repetition of 'change'." },
        { criterion: "Grammatical Range and Accuracy", note: "Tenses swing between past and present for the same map ('there is a cannery', 'the warehouses become'), 'change to' loses its -d twice, and 'The most of' shows article slips — recurring errors that rarely block meaning." },
      ],
    },
    {
      bandEstimate: "Band 7.5 estimate — an educational estimate against the public descriptors, not an official score.",
      paragraphs: [
        "The maps compare Winterton's harbour district as it stood in 1990 with the same area today, following its redevelopment.",
        "Overall, the working harbour has given way to a quarter oriented towards tourism and housing: every industrial site except two has been redeveloped, and leisure facilities now line the shore.",
        "Along the northern edge, the cannery has been replaced by a hotel and the warehouses by apartments, while the fuel depot in the north-eastern corner has made way for a public park; a car park now fills the opposite corner. Behind the eastern waterfront, a surviving warehouse has been converted into a maritime museum.",
        "The shore itself is now given over to pleasure: the wharf at the western end has become a marina, the jetty has been replaced by a row of cafés, and a promenade now runs along the central shore. Only the fish market, at the western end of the district, and the boatyard beside it remain from the 1990 map.",
      ],
      wordCount: 163,
      justification: [
        { criterion: "Task Achievement", note: "Every lost, new and surviving feature is placed and paired with its replacement, and the response clears the 150-word floor while still selecting rather than cataloguing." },
        { criterion: "Coherence and Cohesion", note: "Zone-by-zone progression with the survivors held back for a closing contrast; 'while' and a semicolon carry two changes per sentence without tangling them." },
        { criterion: "Lexical Resource", note: "Confident regeneration vocabulary — 'given way to', 'made way for', 'converted into' — nearly all of it precisely placed." },
        { criterion: "Grammatical Range and Accuracy", note: "Present perfect passives are consistently well formed, ellipsis appears ('the warehouses by apartments'), and the double 'given way / made way' is the only repetition holding range below Band 8." },
      ],
    },
  ],
  vocabularyBank: [
    { word: "to demolish", partOfSpeech: "verb", meaning: "To knock a building down completely." },
    { word: "to convert", partOfSpeech: "verb", meaning: "To change a building's purpose while keeping its structure." },
    { word: "waterfront", partOfSpeech: "noun", meaning: "The strip of a town that faces directly onto the water." },
    { word: "marina", partOfSpeech: "noun", meaning: "A harbour designed for pleasure boats rather than working vessels." },
    { word: "promenade", partOfSpeech: "noun", meaning: "A paved walkway built along a seafront or riverbank." },
    { word: "redevelopment", partOfSpeech: "noun", meaning: "The rebuilding of an area for new uses." },
    { word: "to give way to", partOfSpeech: "phrase", meaning: "To be replaced by, as an old feature makes room for a new one." },
  ],
  source: WRITING_BANK_SOURCE_NOTE,
};
