/**
 * IELTS Listening question bank — Part 4 expansion, batch A
 * (PROMPT 54 expansion, Part 4 batch A).
 *
 * Seven new academic-lecture recordings for the Part 4 pool: one main
 * speaker per recording (the first opens with a brief chair's introduction),
 * full lecture signposting, and the Part 4 task families — note, summary and
 * sentence completion plus multiple choice — each with an answer key, the
 * script keywords that carry each answer, a teaching explanation, and — where
 * a distractor is designed in — the trap metadata the performance engine
 * classifies errors by.
 *
 * Every recording is original TalkSy practice material written in the style
 * of the test; nothing here is official IELTS examination content.
 */

import { BANK_SOURCE_NOTE, type BankExercise } from "./types";

export const expP4AExercises: BankExercise[] = [
  {
    slug: "ielts-lb-p4-vaccination",
    title: "The history of vaccination campaigns",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "history",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the history of vaccination campaigns. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "chair", name: "Chair", role: "introduces the medical-history lecture series", accent: "british" },
      { id: "voss", name: "Dr Eleanor Voss", role: "reader in the history of medicine", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "chair", text: "Good afternoon, and a very warm welcome back to the medical-history series. It's a pleasure to hand the podium to Dr Eleanor Voss, who teaches the history of medicine, and who'll be talking to us today about vaccination campaigns." },
      { id: "s2", speakerId: "voss", text: "Thank you. 'Vaccine' is a word worth pausing over, because it's borrowed from vacca, the Latin for cow — and that tells you where the story begins: with a country doctor, Edward Jenner, and the old observation that milkmaids who caught cowpox from their cattle seemed to shrug off the far deadlier smallpox." },
      { id: "s3", speakerId: "voss", text: "Jenner's famous experiment — not seventeen ninety-eight, as some textbooks carelessly print, but seventeen ninety-six — took matter from a milkmaid's cowpox sore and used it to protect a young boy against smallpox. That is the origin point for every vaccine that followed." },
      { id: "s4", speakerId: "voss", text: "Let's turn to the state's part in the story. Through the nineteenth century, governments moved steadily from encouragement to compulsion. An act of eighteen fifty-three in England made infant vaccination compulsory, backed by fines, and it provoked exactly the backlash you'd expect: organised leagues, mass rallies, and plenty of parents convinced the state had overstepped." },
      { id: "s5", speakerId: "voss", text: "I'll be honest — the protesters weren't entirely wrong on the details. Arm-to-arm transfer of vaccine matter, before antiseptics were understood, did occasionally carry infection from one child to another. But their remedy, refusal, was worse than the risk they were refusing." },
      { id: "s6", speakerId: "voss", text: "Now to the largest campaign ever mounted. Smallpox killed some three hundred million people in the twentieth century alone, which makes what followed all the more remarkable." },
      { id: "s7", speakerId: "voss", text: "In nineteen sixty-seven — not nineteen fifty-eight, whatever the older accounts say — the World Health Organization launched its intensified eradication campaign, on a budget that, frankly, wouldn't build a hospital wing today." },
      { id: "s8", speakerId: "voss", text: "Here's the strategic insight. Simply vaccinating everyone everywhere proved impossible in countries with scattered villages and thin records. So the campaign switched to what became known as ring vaccination: hunt down every case, then immunise everyone that case might have touched, drawing a protective ring around each outbreak." },
      { id: "s9", speakerId: "voss", text: "What's striking here is the marriage of old and new — village scouts chasing rumours of rash, combined with a simple two-pronged needle that sipped a fraction of the earlier dose. The last natural case was recorded in Somalia in nineteen seventy-seven, and in nineteen eighty the world was declared free of the disease." },
      { id: "s10", speakerId: "voss", text: "That victory cast a long shadow, because it set expectations every campaign since has had to live with. Let me bring the story up to date with measles, among the most contagious infections we know." },
      { id: "s11", speakerId: "voss", text: "For measles, community protection needs coverage of roughly ninety-two — no, let me be careful with this figure — ninety-five per cent of the population. Slip below that line, and outbreaks will find the gaps." },
      { id: "s12", speakerId: "voss", text: "After a now-discredited research paper linked the measles vaccine to harm in nineteen ninety-eight, uptake fell below that line in a dozen countries, and the consequences are still being counted. The study was small, it was later retracted, and its central claim has been tested repeatedly without support." },
      { id: "s13", speakerId: "voss", text: "So let me close with the lesson I'd want you to carry away. Vaccines can be manufactured; confidence has to be built, and it is quick to lose and slow to rebuild. A campaign that listens earns the trust a campaign that lectures never will. Thank you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "THE HISTORY OF VACCINATION CAMPAIGNS — lecture notes" }],
          [{ kind: "text", text: "Origins" }],
          [{ kind: "text", text: "Year of Jenner's cowpox experiment:" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "'Vaccine' comes from vacca, the Latin word for" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "From encouragement to law" }],
          [{ kind: "text", text: "The 1853 Act in England made infant vaccination" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Global eradication of smallpox" }],
          [{ kind: "text", text: "WHO's intensified campaign launched:" }, { kind: "blank", no: 4 }],
          [{ kind: "text", text: "Strategy — trace each case, then" }, { kind: "blank", no: 5 }, { kind: "text", text: "vaccination of contacts" }],
          [{ kind: "text", text: "Last natural case recorded:" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "1796", alternatives: [], numbers: true },
          { no: 2, answer: "cow", alternatives: [] },
          { no: 3, answer: "compulsory", alternatives: [] },
          { no: 4, answer: "1967", alternatives: [], numbers: true },
          { no: 5, answer: "ring", alternatives: [] },
          { no: 6, answer: "1977", alternatives: [], numbers: true },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "note-taking", "corrections"],
          keywords: ["vacca", "seventeen ninety-six", "compulsory", "nineteen sixty-seven", "ring vaccination", "nineteen seventy-seven"],
          trap: {
            family: "correction",
            lure: ["1798", "1958", "seventeen ninety-eight", "nineteen fifty-eight"],
            note:
              "Two year traps are live corrections: seventeen ninety-eight is the publication year, not the experiment, and the intensified campaign began in nineteen sixty-seven, not fifty-eight — the corrected value scores both times.",
          },
          explanation:
            "The notes follow the lecture's signposted stages: Jenner's cowpox experiment belongs to seventeen ninety-six rather than the publication year ninety-eight; 'vaccine' comes from vacca, the Latin for cow; the eighteen fifty-three act made infant vaccination compulsory; the intensified campaign began in nineteen sixty-seven, not fifty-eight; the strategy was ring vaccination; and the last natural case was recorded in nineteen seventy-seven.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer present as the decisive change in the smallpox eradication campaign?",
        options: [
          "Vaccinating entire populations country by country, as fast as possible.",
          "Hunting down each case and immunising everyone it might have infected.",
          "Waiting for a cheaper needle to arrive before scaling up the campaign.",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "paraphrase", "process-tracking"],
          keywords: ["impossible", "ring vaccination", "two-pronged"],
          explanation:
            "Blanket vaccination of everyone everywhere is explicitly ruled out as impossible; the decisive change was the switch to ring vaccination — finding every case and immunising the people around it. The two-pronged needle helped, but the lecturer frames strategy, not hardware, as the turning point.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is the lecturer's view of the collapse in vaccine confidence after 1998?",
        options: [
          "It was an overreaction, because the paper in question was withdrawn within weeks.",
          "It shows that public trust is quick to lose and slow to rebuild.",
          "It proves that official safety monitoring systems no longer work.",
        ],
        correct: [1],
        meta: {
          skills: ["attitude", "paraphrase", "inference"],
          keywords: ["retracted", "quick to lose", "slow to rebuild"],
          explanation:
            "The lecturer says confidence is quick to lose and slow to rebuild, which matches the second option. The paper was retracted only years later, not within weeks, and nothing in the lecture attacks the safety monitoring system, so the other two options both fail.",
        },
      },
    ],
    transcriptNote:
      "Both year answers survive a spoken correction — the Jenner experiment belongs to 1796, not 1798, and the intensified WHO campaign began in 1967, not 1958. The closing minutes separate the lecturer's own verdict on the confidence problem from the history of the retracted paper.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-beekeeping",
    title: "Urban beekeeping",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 7,
    topic: "science",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on urban beekeeping. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "whitlock", name: "Dr Sam Whitlock", role: "urban ecologist presenting the city-science lecture series", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "whitlock", text: "Hello, and welcome back to the city-science series. This afternoon's subject is urban beekeeping — the hive on the office roof, the swarm on the fence post — and what a colony actually needs from a city." },
      { id: "s2", speakerId: "whitlock", text: "Let's start with the surprise. Cities, for all their concrete, can be better bee habitat than the intensively farmed countryside. Urban temperatures run a degree or two warmer than the fields, so the flowering season runs longer, and instead of one crop flowering for a fortnight, gardens, allotments, parks and street trees serve a rolling buffet from March to November." },
      { id: "s3", speakerId: "whitlock", text: "That variety matters, because a honeybee colony in summer is enormous: one queen, and at the peak somewhere between forty and sixty thousand workers, every one of them needing to eat." },
      { id: "s4", speakerId: "whitlock", text: "A well-sited city hive can be startlingly productive. Figures vary with the weather, but a decent urban colony regularly yields around twenty kilograms of honey in a season — often more than its rural counterpart, though last summer's wash-out is a reminder that no single year is typical." },
      { id: "s5", speakerId: "whitlock", text: "Turning now to the beekeeper's side of the bargain. The bees forage for nectar and pollen, but they also need water — for cooling the hive and diluting stored honey — and in a dry spell a shallow dish with pebbles in it will keep them from drinking at a neighbour's paddling pool." },
      { id: "s6", speakerId: "whitlock", text: "Then come the two annual anxieties. The first is swarming: when a colony feels crowded it raises a new queen, and the old one leaves with roughly half the workers. Give the bees extra room early — boxes on before they need them — and most swarming is headed off." },
      { id: "s7", speakerId: "whitlock", text: "The second is the varroa mite, a parasite that found its way into Western hives during the nineteen eighties and now lives in practically every colony on the continent. Left unchecked it deforms wings and collapses colonies, so monitoring, and where necessary treatment, is simply part of the beekeeper's year." },
      { id: "s8", speakerId: "whitlock", text: "What's striking here is how much of the craft is local knowledge: when the lime trees flower on your street, which park gets sprayed, where the bees drink. Your local beekeeping association holds all of that, and anyone serious about starting should join before buying so much as a veil." },
      { id: "s9", speakerId: "whitlock", text: "Now a caution, because the recent boom has a shadow side. Honeybees are livestock, and wild bees — bumblebees and hundreds of solitary species — feed on the same flowers. Stack forty hives next to a park that can feed ten, and you'll outcompete the very pollinators nobody is keeping." },
      { id: "s10", speakerId: "whitlock", text: "The honest answer is planting. Every square metre of flowers — window box, road verge, balcony — widens the larder for all of them, and a city that plants for its wild bees will not starve its honeybees." },
      { id: "s11", speakerId: "whitlock", text: "So is urban beekeeping a fad? I don't believe so. It's an old craft with a real place in a city's ecology, provided the hive numbers stay honest and the flowers stay plentiful." },
      { id: "s12", speakerId: "whitlock", text: "Next week we'll climb onto a rooftop apiary and meet the keeper who runs it. Until then, thank you — and if a swarm settles on your fence this summer, don't panic: it's a colony between homes, and the association will come and collect it.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "URBAN BEEKEEPING — lecture notes" }],
          [{ kind: "text", text: "Why cities suit bees" }],
          [{ kind: "text", text: "Cities run warmer, so the flowering season is" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Forage comes from gardens, parks, street trees and" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "The summer colony" }],
          [{ kind: "text", text: "One queen and up to sixty thousand" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "A good city hive yields around" }, { kind: "blank", no: 4 }, { kind: "text", text: "kilograms of honey" }],
          [{ kind: "text", text: "The keeper's year" }],
          [{ kind: "text", text: "Colonies need a nearby source of fresh" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "Hives must be monitored for the varroa" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "longer", alternatives: [] },
          { no: 2, answer: "allotments", alternatives: [] },
          { no: 3, answer: "workers", alternatives: [] },
          { no: 4, answer: "20", alternatives: ["twenty"], numbers: true },
          { no: 5, answer: "water", alternatives: [] },
          { no: 6, answer: "mite", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["detail", "paraphrase", "note-taking"],
          keywords: ["warmer", "allotments", "workers", "twenty kilograms", "water", "varroa mite"],
          explanation:
            "The notes track the lecture's three sections: city warmth makes the flowering season longer; forage comes from gardens, parks, street trees and allotments; a summer colony holds one queen and up to sixty thousand workers; a productive city hive yields around twenty kilograms of honey; colonies need water as well as nectar; and the varroa mite must be monitored.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 7–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "7 Hives kept in too great a number may deprive" }, { kind: "blank", no: 7 }, { kind: "text", text: "bees of nectar." }],
          [{ kind: "text", text: "8 Anyone serious about starting should join a local beekeeping" }, { kind: "blank", no: 8 }, { kind: "text", text: "before buying equipment." }],
        ],
        blanks: [
          { no: 7, answer: "wild", alternatives: [] },
          { no: 8, answer: "association", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "inference"],
          keywords: ["wild bees", "outcompete", "association", "before buying"],
          explanation:
            "The caution passage warns that too many hives outcompete the wild bees feeding on the same flowers, so 'wild' fits the first sentence; and the practical advice is to join the local beekeeping association before spending anything on equipment, which completes the second.",
        },
      },
    ],
    transcriptNote:
      "The honey yield is spoken as 'twenty kilograms', and the colony-size range — forty to sixty thousand — sits either side of the printed figure. The final section distinguishes honeybees from the wild species a crowded apiary can crowd out.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-saving",
    title: "Behavioural economics and saving",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "economics",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on behavioural economics and saving. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "raman", name: "Dr Priya Raman", role: "lecturer in behavioural economics", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "raman", text: "Good afternoon. Today's question is deceptively small: why don't people save? The classical answer assumed a calm, rational saver weighing today's spending against tomorrow's comfort and settling on the optimum. Real savers, as anyone who has ever emptied a current account two days before payday will know, are nothing of the sort." },
      { id: "s2", speakerId: "raman", text: "The first crack in the theory is what we call present bias. Human beings systematically overweight the present: a small reward now beats a larger one later, in a way a rational calculator would find embarrassing." },
      { id: "s3", speakerId: "raman", text: "Add in the timing of the pain. Saving hurts now and pays back decades later, and nobody is surprised that now wins most weeks." },
      { id: "s4", speakerId: "raman", text: "Let's turn to what these insights have actually built. The flagship is automatic enrolment into workplace pensions. Instead of asking new employees to fill in a form — a hurdle most never cleared — the default was flipped: you are enrolled automatically, and staying out is what now requires an action." },
      { id: "s5", speakerId: "raman", text: "The results rewrote the policy textbooks. Among eligible employees, participation climbed from roughly fifty-five per cent to almost ninety within a few years, and most of those who stayed in never once adjusted the default contribution rate afterwards." },
      { id: "s6", speakerId: "raman", text: "Notice what auto-enrolment was not designed to do. It wasn't a plan to make people richer in retirement by itself — the default contribution is modest — its job was to undo an inertia problem, and at that it has been spectacularly effective." },
      { id: "s7", speakerId: "raman", text: "A second design borrows from a well-known programme with a self-explanatory name: Save More Tomorrow. Workers commit a slice of every future pay rise to their pension, so the contribution climbs on the days the pay packet does, and nobody ever feels a cut." },
      { id: "s8", speakerId: "raman", text: "Mental accounting is the quieter cousin. People don't hold one pool of money; they hold labelled pots — the holiday fund, the emergency fund, the new-boiler fund — and they'll raid one pot while leaving another untouched, in defiance of every textbook ever written." },
      { id: "s9", speakerId: "raman", text: "Now the objections, because there are serious ones. Critics call the whole approach manipulation: governments quietly steering choices they have decided are good for us, and a libertarian will tell you the only honest default is no default at all." },
      { id: "s10", speakerId: "raman", text: "I'm not persuaded, and here's why. Any system steers; the old opt-in form was itself a design choice, and it steered people towards decades of lost saving. There was never a neutral chair for anyone to sit in." },
      { id: "s11", speakerId: "raman", text: "Where the critics land a genuine blow is transparency. A default is defensible only while it stays visible, honest about what it is doing, and reversible — one page, one signature, no exit fees. Hide any one of those, and help has crossed into coercion." },
      { id: "s12", speakerId: "raman", text: "So, to sum up. Behavioural economics hasn't repealed human nature; it has finally read it. The savers of the textbooks have turned out to be creatures of friction and defaults, and policy built on that reading will outperform policy built on a daydream." },
      { id: "s13", speakerId: "raman", text: "Next week: debt, and why the same biases that make us poor savers make us such enthusiastic borrowers. Thank you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "BEHAVIOURAL ECONOMICS AND SAVING — lecture notes" }],
          [{ kind: "text", text: "The classical picture" }],
          [{ kind: "text", text: "The saver was assumed to be calm and" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Human reality" }],
          [{ kind: "text", text: "People systematically overweight the" }, { kind: "blank", no: 2 }, { kind: "text", text: "('present bias')" }],
          [{ kind: "text", text: "Automatic enrolment" }],
          [{ kind: "text", text: "New employees are now signed up" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Participation rose from about" }, { kind: "blank", no: 4 }, { kind: "text", text: "per cent to almost ninety" }],
          [{ kind: "text", text: "Save More Tomorrow" }],
          [{ kind: "text", text: "Workers commit part of every future pay" }, { kind: "blank", no: 5 }, { kind: "text", text: "to their pension" }],
          [{ kind: "text", text: "A defensible default" }],
          [{ kind: "text", text: "It must stay visible, honest and" }, { kind: "blank", no: 6 }],
        ],
        blanks: [
          { no: 1, answer: "rational", alternatives: [] },
          { no: 2, answer: "present", alternatives: [] },
          { no: 3, answer: "automatically", alternatives: [] },
          { no: 4, answer: "55", alternatives: [], numbers: true },
          { no: 5, answer: "rise", alternatives: [] },
          { no: 6, answer: "reversible", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "paraphrase", "note-taking"],
          keywords: ["rational", "present bias", "enrolled automatically", "fifty-five per cent", "pay rise", "reversible"],
          explanation:
            "The classical saver was assumed to be calm and rational; real savers overweight the present — the present bias; workers are now enrolled automatically, with participation rising from about fifty-five per cent to almost ninety; Save More Tomorrow commits part of every future pay rise; and a defensible default must stay reversible as well as visible.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "According to the lecturer, what was the real achievement of automatic enrolment?",
        options: [
          "It set out to make people richer in retirement, and succeeded.",
          "It removed the inertia that stopped most people joining a pension.",
          "It compelled every employee to save regardless of their wishes.",
        ],
        correct: [1],
        meta: {
          skills: ["paraphrase", "negation", "gist"],
          keywords: ["inertia problem", "spectacularly effective", "default contribution"],
          trap: {
            family: "negation",
            lure: ["make people richer"],
            note:
              "Making people richer is the purpose the lecturer explicitly negates — it wasn't a plan to make people richer — so the option built on the negated phrase is the designed trap.",
          },
          explanation:
            "The lecturer explicitly rules out making people richer as the scheme's purpose: the default contribution is modest, and the genuine achievement was undoing an inertia problem — clearing the form-filling hurdle that kept most employees out of the pension.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "How does the lecturer reply to the charge that nudges manipulate people?",
        options: [
          "By denying that defaults have any influence on behaviour.",
          "By pointing out that the old opt-in arrangement steered people too.",
          "By agreeing that steering is acceptable whenever it saves the government money.",
        ],
        correct: [1],
        meta: {
          skills: ["opinion", "paraphrase", "attitude"],
          keywords: ["any system steers", "opt-in form", "neutral chair"],
          explanation:
            "Her reply to the manipulation charge is that any system steers: the old opt-in form was itself a design choice that steered people towards lost saving, and there was never a neutral chair. Transparency, not denial, is where she concedes the critics have a point.",
        },
      },
    ],
    transcriptNote:
      "The negation trap sits in the sentence about what auto-enrolment was not designed to do — making people richer is explicitly ruled out, leaving inertia as the real achievement. The defaults debate turns on her point that the old form was never a neutral chair.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-silk-road",
    title: "Goods and ideas on the Silk Road",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 8,
    topic: "history",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the trade routes known as the Silk Road. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "ashworth", name: "Dr Julia Ashworth", role: "lecturer in global history", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "ashworth", text: "Good morning, everyone. Today we take on two words that conjure camel bells and romance: the Silk Road. The first thing to dislodge is the picture itself — there was never one road, and almost nobody travelled it end to end." },
      { id: "s2", speakerId: "ashworth", text: "What there was, from roughly the second century BC, was a shifting network of caravan tracks stitched between oasis towns, linking Chang'an in China through Central Asia to the markets of the Mediterranean — something in the order of six thousand four hundred kilometres, if anyone had walked it all, which, as I say, nobody did." },
      { id: "s3", speakerId: "ashworth", text: "The goods moved in relay. Chinese silk went out west in bulk; travelling east came Roman glass, warhorses from the steppe, wool and silver. At every halt the loads changed hands, and each middleman took his margin." },
      { id: "s4", speakerId: "ashworth", text: "Let's dwell on those middlemen, because the cities are half the story. Sogdian merchants around Samarkand became the network's great brokers, and their language served as the trading tongue for centuries. Goods, in other words, travelled further than any person carrying them." },
      { id: "s5", speakerId: "ashworth", text: "But the camel trains were never just a freight service, and this is the point I most want to land. Religions travelled these tracks. Buddhism moved out of India and east along the routes, taking root in China during the Han era; centuries later, Islam spread through the Central Asian towns in much the same way." },
      { id: "s6", speakerId: "ashworth", text: "Technologies hitched rides as well. Paper-making, printing and eventually gunpowder drifted westward, while the stirrup, it's often argued, moved east and changed cavalry warfare wherever it landed." },
      { id: "s7", speakerId: "ashworth", text: "Now, a question you should already be asking: if the trade is ancient, is the name? It is not. 'Seidenstrasse' — the Silk Road — was coined in eighteen seventy-seven by a German geographer, Ferdinand von Richthofen, and the merchants themselves never used it. They spoke of the road to Samarkand, the road to Kashgar: one destination at a time." },
      { id: "s8", speakerId: "ashworth", text: "What's striking here is how much history a label can smuggle in. 'The Silk Road' implies a single artery; the reality was a braided river of paths, shifting with politics, water and war." },
      { id: "s9", speakerId: "ashworth", text: "Turning now to the decline. The sea did it. From the fifteenth century, deep-water sailing ships could move cargo cheaper and in far greater volume than any camel train, and the ocean routes siphoned the trade away until the oasis towns slowly emptied." },
      { id: "s10", speakerId: "ashworth", text: "Archaeology later gave those towns a second life, because the desert preserved contracts, textiles and even whole granaries — which is why we can reconstruct a merchant's interest rates for some of these cities better than we can for medieval Europe." },
      { id: "s11", speakerId: "ashworth", text: "A last word, then, on what the network really traded. Not silk, ultimately, but trust. Exchange across a continent only worked because strangers kept promises in places their partners would never see, and that, more than any fabric, is the inheritance." },
      { id: "s12", speakerId: "ashworth", text: "Next week we'll follow a single bale of silk from Chang'an to Damascus and ask what it cost at every halt along the way. Thank you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "summary",
        label: "Questions 1–6",
        instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "The Silk Road was never a single highway but a" }, { kind: "blank", no: 1 }, { kind: "text", text: "of caravan routes. Silk went west, while Roman" }, { kind: "blank", no: 2 }, { kind: "text", text: "travelled east alongside horses and silver." }],
          [{ kind: "text", text: "Because almost nobody crossed the whole distance, goods were passed on at" }, { kind: "blank", no: 3 }, { kind: "text", text: "towns, where middlemen took their margins. The routes also carried beliefs:" }, { kind: "blank", no: 4 }, { kind: "text", text: ", for example, moved east from India into China." }],
          [{ kind: "text", text: "The name 'Silk Road' was invented in the nineteenth century by a German" }, { kind: "blank", no: 5 }, { kind: "text", text: ", and the land routes faded once ships could carry cargo" }, { kind: "blank", no: 6 }, { kind: "text", text: "than any camel train." }],
        ],
        blanks: [
          { no: 1, answer: "network", alternatives: [] },
          { no: 2, answer: "glass", alternatives: [] },
          { no: 3, answer: "oasis", alternatives: [] },
          { no: 4, answer: "Buddhism", alternatives: [] },
          { no: 5, answer: "geographer", alternatives: [] },
          { no: 6, answer: "cheaper", alternatives: [] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "note-taking"],
          keywords: ["network", "Roman glass", "oasis towns", "Buddhism", "German geographer", "cheaper"],
          trap: {
            family: "mention-lure",
            lure: ["Islam"],
            note:
              "'Islam' is named among the religions of the routes, but it spread through the Central Asian towns centuries later — the belief that moved east from India into China was Buddhism, so 'Islam' is the designed lure.",
          },
          explanation:
            "Every blank rides on paraphrase: a shifting network rather than one road; Roman glass among the eastbound goods; oasis towns as the relay points where loads changed hands; Buddhism as the belief that moved from India into China — Islam belongs to a later wave; a German geographer who coined the name; and cheaper sea transport that emptied the caravan towns.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer say about the movement of goods?",
        options: [
          "A single merchant would typically carry a load from China to the Mediterranean.",
          "Loads were relayed between towns, changing hands many times on the way.",
          "Most caravans were escorted by imperial soldiers along the entire route.",
        ],
        correct: [1],
        meta: {
          skills: ["detail", "paraphrase", "gist"],
          keywords: ["end to end", "changed hands", "relay"],
          explanation:
            "The lecturer insists almost nobody travelled the route end to end; goods moved in relay and changed hands at every halt. So the single-merchant option is contradicted directly, and the escorted-caravan option is never claimed at all.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "Why does the lecturer mention the word 'Seidenstrasse'?",
        options: [
          "To show that the traders themselves coined the network's name.",
          "To prove that silk was the most profitable commodity on the routes.",
          "To demonstrate that the network's famous name is a modern invention.",
        ],
        correct: [2],
        meta: {
          skills: ["purpose", "paraphrase", "detail"],
          keywords: ["coined", "eighteen seventy-seven", "never used it"],
          explanation:
            "'Seidenstrasse' was coined in eighteen seventy-seven by the German geographer Richthofen, and the merchants themselves never used it — which is exactly why she mentions it: the famous label is a modern invention laid over an ancient trade.",
        },
      },
    ],
    transcriptNote:
      "The summary rewords the lecture rather than quoting it, so each blank rides on paraphrase — 'moved in relay' becomes 'passed on', and 'cheaper than any camel train' covers the last gap. 'Islam' is spoken in the religions passage but belongs to a later century, which is why it is the lure for blank 4.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-energy-storage",
    title: "Storing renewable energy",
    part: 4,
    difficulty: 4,
    estimatedMinutes: 8,
    topic: "technology",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on storing renewable energy. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "bello", name: "Dr Aisha Bello", role: "senior lecturer in energy engineering", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "bello", text: "Afternoon, everyone. Last week I left you with a problem, so this week we look at the kit being thrown at it. The problem, in one sentence: the sun sets and the wind drops, while demand for electricity does neither." },
      { id: "s2", speakerId: "bello", text: "Wind and solar are what engineers call intermittent, and they have become cheap so quickly that the binding constraint has quietly moved. We no longer struggle to generate clean power; we struggle to have it on hand at eight in the evening on a still February day." },
      { id: "s3", speakerId: "bello", text: "So let's turn to storage, family by family. The first is also the newest headline: the grid-scale battery — banks of lithium-ion cells, chemical cousins of the one in your phone, that charge when power is abundant and discharge when it isn't." },
      { id: "s4", speakerId: "bello", text: "What makes batteries precious isn't so much the volume of energy as the speed. They respond in milliseconds, which makes them uncannily good at steadying the grid's frequency — the second-by-second balance of supply and demand that must be corrected the moment it drifts." },
      { id: "s5", speakerId: "bello", text: "The celebrity example: in twenty seventeen, in South Australia, the world's first giant grid battery was switched on, built inside the hundred days its backers had promised after a storm-triggered blackout. It earned back its capital faster than even its promoters predicted, mostly through those split-second balancing services." },
      { id: "s6", speakerId: "bello", text: "Now the older, bigger sibling: pumped hydro. When power is cheap, you pump water uphill into an upper reservoir; when power is dear, you let it fall back down through turbines. It is a water battery, and it still holds the overwhelming majority — by most counts over ninety per cent — of the world's stored electricity." },
      { id: "s7", speakerId: "bello", text: "The catch is geography. You need height, you need water, and you need a valley you are allowed to flood, which is why the new project maps are creeping towards disused mines and artificial lagoons." },
      { id: "s8", speakerId: "bello", text: "Family three: compressed air. Surplus power forces air at enormous pressure into solution-mined salt caverns; release it through a turbine and a good share of what went in comes back out. It is proven technology, and it stores energy for days rather than hours." },
      { id: "s9", speakerId: "bello", text: "Family four is the one the hydrogen lobby calls the future. Run surplus summer power through electrolysers, split water, store the hydrogen, then burn it in a turbine or sell it to industry come winter. Nothing in the physics forbids it; everything in the arithmetic counsels patience, because you win back well under half the energy you spend." },
      { id: "s10", speakerId: "bello", text: "A word of honesty about batteries, because the brochure won't give you one. Lithium chemistry works beautifully for hours. To bridge a calm, cloudy fortnight — the field borrowed the German word dunkelflaute for exactly this — you would need so many cells that the arithmetic collapses. Storage for the evening is solved; storage for the season is not." },
      { id: "s11", speakerId: "bello", text: "So where does that leave the plan? Realistically, with a portfolio: batteries for the evening peak, pumped hydro where the landscape cooperates, hydrogen for the long seasons, and — the least glamorous line on the slide — demand that learns to move to whenever the wind blows." },
      { id: "s12", speakerId: "bello", text: "What's striking here is how fast the economics have flipped. Every doubling of battery manufacturing has shaved roughly a fifth off prices, and curves that were lecture-hall speculation a decade ago are now signed procurement documents." },
      { id: "s13", speakerId: "bello", text: "For next week, read the chapter on grid frequency, and bring one question each. Thank you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "STORING RENEWABLE ENERGY — lecture notes" }],
          [{ kind: "text", text: "The challenge" }],
          [{ kind: "text", text: "Wind and solar generation is" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Grid batteries" }],
          [{ kind: "text", text: "They respond in milliseconds, steadying the grid's" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "World's first giant grid battery switched on (South Australia):" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Pumped hydro" }],
          [{ kind: "text", text: "Cheap power pumps water" }, { kind: "blank", no: 4 }, { kind: "text", text: "into an upper" }, { kind: "blank", no: 5 }],
          [{ kind: "text", text: "The hydrogen route" }],
          [{ kind: "text", text: "Electrolysers turn surplus power into" }, { kind: "blank", no: 6 }, { kind: "text", text: "for later use" }],
        ],
        blanks: [
          { no: 1, answer: "intermittent", alternatives: [] },
          { no: 2, answer: "frequency", alternatives: [] },
          { no: 3, answer: "2017", alternatives: [], numbers: true },
          { no: 4, answer: "uphill", alternatives: [] },
          { no: 5, answer: "reservoir", alternatives: [] },
          { no: 6, answer: "hydrogen", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "detail", "note-taking"],
          keywords: ["intermittent", "frequency", "twenty seventeen", "upper reservoir", "hydrogen"],
          trap: {
            family: "number-form",
            lure: ["twenty seventeen"],
            note:
              "The year is spoken as 'twenty seventeen', but written as two words it breaks the ONE WORD AND/OR A NUMBER limit — only the digits 2017 fit the rubric.",
          },
          explanation:
            "The notes gather the four families in order: generation is intermittent; batteries steady the grid's frequency within milliseconds, and the first giant one was switched on in twenty seventeen; pumped hydro moves water uphill into an upper reservoir; and electrolysers turn surplus power into hydrogen despite the punishing losses.",
        },
      },
      {
        id: "q2",
        type: "sentence",
        label: "Questions 7–8",
        instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS for each answer.",
        layout: [
          [{ kind: "text", text: "7 Batteries can cover the evening, but not the windless, cloudy" }, { kind: "blank", no: 7 }, { kind: "text", text: "the Germans call a dunkelflaute." }],
          [{ kind: "text", text: "8 Compressed-air plants store power for days in underground" }, { kind: "blank", no: 8 }, { kind: "text", text: "." }],
        ],
        blanks: [
          { no: 7, answer: "fortnight", alternatives: [] },
          { no: 8, answer: "salt caverns", alternatives: ["caverns"] },
        ],
        wordLimit: 2,
        numbersAllowed: false,
        meta: {
          skills: ["paraphrase", "detail", "note-taking"],
          keywords: ["cloudy fortnight", "dunkelflaute", "salt caverns"],
          explanation:
            "The honesty passage is the key: batteries are described as beautiful for hours, while the calm, cloudy fortnight — the dunkelflaute — breaks the arithmetic. Compressed-air plants store power for days in solution-mined salt caverns, which is what the second sentence asks for.",
        },
      },
    ],
    transcriptNote:
      "The South Australian battery's year is spoken as 'twenty seventeen'; under a one-word-plus-a-number limit the digits are the form that scores. The honesty passage — hours solved, seasons not — is what both sentence questions test.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-language-acquisition",
    title: "How children learn their first language",
    part: 4,
    difficulty: 3,
    estimatedMinutes: 8,
    topic: "education",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on how children learn their first language. First you have some time to look at questions 1 to 6. (pause) Now listen and answer questions 1 to 8.",
    speakers: [
      { id: "farrow", name: "Dr Colin Farrow", role: "developmental psycholinguist giving the first-year lecture series", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "farrow", text: "Hello, and welcome to the first of three lectures on how a child gets from gurgle to grammar. It is, when you pause over it, the most impressive learning any of us ever did, and none of us can remember doing it." },
      { id: "s2", speakerId: "farrow", text: "Let's begin with sound. At around three months, babies coo — pure vowel play. At about six months they start babbling: ba-ba-ba, da-da-da, strings of syllables with no meaning yet attached. That stage belongs to every hearing infant on earth, whichever language is coming." },
      { id: "s3", speakerId: "farrow", text: "And it belongs, in modified form, to deaf infants as well. Babies of deaf parents, exposed to sign language from birth, produce a kind of manual babbling with their hands — rhythmic shapes that mirror the syllable rhythm of speech. The drive to rehearse the system runs deeper than the mouth." },
      { id: "s4", speakerId: "farrow", text: "First words typically arrive near the first birthday, often a name for a person, and often a word the adults around the child don't actually use — because children are not tape recorders; they are analysts." },
      { id: "s5", speakerId: "farrow", text: "What's striking here is the acceleration that follows. Around eighteen months, most children hit what the textbooks call the vocabulary spurt — new words landing daily, then hourly — and by their second birthday many are joining words in pairs: 'more juice', 'shoe gone'." },
      { id: "s6", speakerId: "farrow", text: "So how is it being done? Not by imitation alone, and the proof is in the errors. Children say 'I goed' and 'two mouses' — forms no adult in their hearing has ever produced. You cannot copy what you have never heard; you can only generate it, by applying a rule and not yet knowing the exceptions." },
      { id: "s7", speakerId: "farrow", text: "That single observation settled a decades-old argument: children are extracting regularities from what they hear. The linguists' phrase is statistical learning, and it has been demonstrated even in newborns, who can tell one language's rhythm from another within days of birth." },
      { id: "s8", speakerId: "farrow", text: "Turning now to the adults' part, where the picture is kinder to parents than the advice industry suggests. Across cultures, caregivers instinctively use child-directed speech: slower, higher in pitch, exaggerated at the edges. Its tunes hold a baby's attention, and its stretched vowels may make the sound units of the language easier to separate." },
      { id: "s9", speakerId: "farrow", text: "What parents rarely do is correct grammar. The classic studies found that a toddler's syntax went largely unchallenged while statements of fact were pounced on at once. Tell your mother, ungrammatically, that the dog is outside, and it passes; tell her the dog is on the roof, and you will be corrected instantly." },
      { id: "s10", speakerId: "farrow", text: "There is a window in all this, which the field calls the critical period. Languages acquired early are learned to native standard with a reliability later learners cannot match, which is one reason the case for early bilingual education is rarely argued among linguists." },
      { id: "s11", speakerId: "farrow", text: "Before I close, the question I'm asked most often: does screen time count as exposure? The honest answer is that background audio is a poor substitute for a live partner, because the tuning that matters happens in conversation, where somebody responds to what the child actually said." },
      { id: "s12", speakerId: "farrow", text: "Next week: bilingual children and the one-language-one-person myth. In the meantime, if you are ever tempted to correct a two-year-old's grammar, don't; correct the facts and let the rules take care of themselves. Thank you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–6",
        instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
        layout: [
          [{ kind: "text", text: "HOW CHILDREN LEARN THEIR FIRST LANGUAGE — lecture notes" }],
          [{ kind: "text", text: "Early sounds" }],
          [{ kind: "text", text: "Babies begin" }, { kind: "blank", no: 1 }, { kind: "text", text: "at around six months" }],
          [{ kind: "text", text: "Deaf babies exposed to sign language 'babble' with their" }, { kind: "blank", no: 2 }],
          [{ kind: "text", text: "First words" }],
          [{ kind: "text", text: "The first word typically appears near the child's first" }, { kind: "blank", no: 3 }],
          [{ kind: "text", text: "Around 18 months comes the rapid" }, { kind: "blank", no: 4 }, { kind: "text", text: "spurt" }],
          [{ kind: "text", text: "Learning mechanisms" }],
          [{ kind: "text", text: "Finding patterns in speech is known as 'statistical" }, { kind: "blank", no: 5 }, { kind: "text", text: "'" }],
          [{ kind: "text", text: "Errors such as 'I goed' show children are applying" }, { kind: "blank", no: 6 }, { kind: "text", text: ", not copying" }],
        ],
        blanks: [
          { no: 1, answer: "babbling", alternatives: [] },
          { no: 2, answer: "hands", alternatives: [] },
          { no: 3, answer: "birthday", alternatives: [] },
          { no: 4, answer: "vocabulary", alternatives: [] },
          { no: 5, answer: "learning", alternatives: [] },
          { no: 6, answer: "rules", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: false,
        meta: {
          skills: ["detail", "paraphrase", "note-taking"],
          keywords: ["babbling", "with their hands", "first birthday", "vocabulary spurt", "statistical learning", "rules"],
          explanation:
            "The stages arrive in order: babbling from about six months; manual babbling with their hands for babies of deaf parents; a first word near the first birthday; the vocabulary spurt around eighteen months; statistical learning as the pattern-finding label; and rules, applied rather than copied, as what the errors prove.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 7",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer conclude from errors like 'I goed' and 'two mouses'?",
        options: [
          "Children absorb the imperfect grammar of the adults around them.",
          "Children are applying rules they have worked out themselves.",
          "Such mistakes appear because parents correct grammar too rarely.",
        ],
        correct: [1],
        meta: {
          skills: ["inference", "paraphrase", "gist"],
          keywords: ["goed", "never heard", "exceptions"],
          explanation:
            "Forms like 'I goed' cannot have been heard from adults, so imitation cannot explain them; the lecturer treats them as proof that children generate rules and simply do not know the exceptions yet.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What did the classic studies find about parents' responses to children's speech?",
        options: [
          "Parents correct grammatical slips far more often than untrue statements.",
          "Parents largely ignore whatever a small child says to them.",
          "Parents challenge what a child claims is true, but rarely how it is phrased.",
        ],
        correct: [2],
        meta: {
          skills: ["detail", "paraphrase", "negation"],
          keywords: ["correct grammar", "statements of fact", "corrected instantly"],
          explanation:
            "The classic studies found the reverse of common expectation: a toddler's grammar went largely unchallenged, while untrue statements of fact were corrected instantly — the dog on the roof was put right, the ungrammatical dog outside was not.",
        },
      },
    ],
    transcriptNote:
      "The errors passage is the hinge of the lecture: forms no adult has produced are presented as proof that children generate rules rather than copy speech. The parents section inverts a common expectation — facts get corrected, grammar mostly does not.",
    source: BANK_SOURCE_NOTE,
  },
  {
    slug: "ielts-lb-p4-colour",
    title: "The psychology of colour",
    part: 4,
    difficulty: 5,
    estimatedMinutes: 9,
    topic: "science",
    accentMix: ["british"],
    intro:
      "You will hear part of a lecture on the psychology of colour. First you have some time to look at questions 1 to 7. (pause) Now listen and answer questions 1 to 9.",
    speakers: [
      { id: "sinclair", name: "Dr Naomi Sinclair", role: "lecturer in perception science", accent: "british" },
    ],
    segments: [
      { id: "s1", speakerId: "sinclair", text: "Good afternoon. This hour we interrogate something you believe you know intimately: colour. My opening claim is unsettling — colour is not out there. It is manufactured, in you, by the brain." },
      { id: "s2", speakerId: "sinclair", text: "The physics hands us wavelengths; the eye hands us three types of cone cell, tuned to long, medium and short wavelengths — roughly red, green and blue, though the labels do rough justice — and every rainbow, sunset and paint chart you have ever seen is the brain's interpretation of those three signals." },
      { id: "s3", speakerId: "sinclair", text: "Consider the photograph of a dress that went viral in twenty fifteen and split households down the middle: some saw white and gold, others blue and black, and nobody's eyes were faulty. The image was ambiguous about the ambient light, so each brain quietly assumed an illumination and then discounted it — in opposite directions. Colour, it turns out, is a judgement, not a reading." },
      { id: "s4", speakerId: "sinclair", text: "Let's turn to language, because your words shape that judgement more than you would think. Every language carves the spectrum at its own joints, and English runs to eleven basic colour terms — black, white, red, green, yellow, blue, brown, orange, pink, purple, grey — a set that has been stable for centuries." },
      { id: "s5", speakerId: "sinclair", text: "More striking still, languages acquire those terms in a regular order. Black and white come first; red follows; then green and yellow in either order; blue arrives surprisingly late; brown and the rest trail behind. Dozens of unrelated languages, the same sequence — which says something about the visual system's own ranking of what matters." },
      { id: "s6", speakerId: "sinclair", text: "The liveliest evidence comes from Russian, which has no single word for blue. It has two: goluboy for the lighter shades, siniy for the darker. Time Russian speakers sorting colour chips across that boundary and they are measurably quicker than English speakers — and the advantage vanishes under verbal interference, which suggests the language is genuinely doing part of the work." },
      { id: "s7", speakerId: "sinclair", text: "So what? A modest what: it is easier to notice the distinctions your language insists on. The discrimination is trained daily, from the cradle." },
      { id: "s8", speakerId: "sinclair", text: "Now the part the marketing industry loves and I am paid to be sceptical about: colour and performance. Some effects are real and replicable. Colour-coding that matches the structure of the material measurably aids memory — across the better studies, recall runs about thirty per cent higher, though the published range begins as low as thirteen." },
      { id: "s9", speakerId: "sinclair", text: "Others are folklore dressed as science. The claim that red makes diners eat more, that green paint calms patients, that some colour can lift a factory's output — when these are tested properly, the effects shrink towards zero. Yes, your mood shifts between a red room and a white one; the measured difference in your behaviour is another matter entirely." },
      { id: "s10", speakerId: "sinclair", text: "There is, however, one robust social finding I would happily defend. Analyses of contact-sport footage found that teams wearing black collected more penalties than the same teams in other colours — officials, it seems, read aggression into the kit — and when researchers recoloured the clips, the bias persisted." },
      { id: "s11", speakerId: "sinclair", text: "What's striking here is the direction of travel: from physics, through language, into the social — and at every level, colour turns out to be less a property of the world than a collaboration inside it." },
      { id: "s12", speakerId: "sinclair", text: "One last exhibit, and it is the greyest thing you will meet today: the colour grey itself. In the fading light of dusk your cone cells stop signalling and you run on rods alone — which is why, as evening falls, a garden loses its colours long before it loses its shapes." },
      { id: "s13", speakerId: "sinclair", text: "So, to close. Meet every confident claim about colour with three questions: measured how, in whom, against what? The brain will keep painting the world whatever the textbooks decide; our job is to work out which paints are pigment and which are story. Thank you.", pauseAfterMs: 300 },
    ],
    questions: [
      {
        id: "q1",
        type: "note",
        label: "Questions 1–7",
        instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
        layout: [
          [{ kind: "text", text: "THE PSYCHOLOGY OF COLOUR — lecture notes" }],
          [{ kind: "text", text: "What colour is" }],
          [{ kind: "text", text: "Colour is not a property of objects but a construction of the" }, { kind: "blank", no: 1 }],
          [{ kind: "text", text: "Vision begins with three types of" }, { kind: "blank", no: 2 }, { kind: "text", text: "cell in the retina" }],
          [{ kind: "text", text: "Colour and language" }],
          [{ kind: "text", text: "English runs to" }, { kind: "blank", no: 3 }, { kind: "text", text: "basic colour terms" }],
          [{ kind: "text", text: "Russian speakers'" }, { kind: "blank", no: 4 }, { kind: "text", text: "across the light-blue/dark-blue boundary is quicker" }],
          [{ kind: "text", text: "Colour and performance" }],
          [{ kind: "text", text: "Colour-coding that matches structure lifts recall by about" }, { kind: "blank", no: 5 }, { kind: "text", text: "per cent" }],
          [{ kind: "text", text: "Teams wearing" }, { kind: "blank", no: 6 }, { kind: "text", text: "were found to receive more penalties" }],
          [{ kind: "text", text: "Claims that a room's colour steers your" }, { kind: "blank", no: 7 }, { kind: "text", text: "are weakly supported" }],
        ],
        blanks: [
          { no: 1, answer: "brain", alternatives: [] },
          { no: 2, answer: "cone", alternatives: [] },
          { no: 3, answer: "11", alternatives: ["eleven"], numbers: true },
          { no: 4, answer: "discrimination", alternatives: [] },
          { no: 5, answer: "30", alternatives: ["thirty"], numbers: true },
          { no: 6, answer: "black", alternatives: [] },
          { no: 7, answer: "mood", alternatives: [] },
        ],
        wordLimit: 1,
        numbersAllowed: true,
        meta: {
          skills: ["numbers", "paraphrase", "note-taking", "similar-sounds"],
          keywords: ["brain", "cone cell", "eleven basic colour terms", "discrimination", "thirty per cent", "wearing black", "mood"],
          trap: {
            family: "similar-sound",
            lure: ["thirteen", "13"],
            note:
              "'Thirteen' and 'thirty' are the classic confusable pair: the average memory advantage is thirty per cent, while thirteen is merely where the published range begins.",
          },
          explanation:
            "The notes compress a dense lecture: colour is the brain's construction, built from three cone-cell signals; English has eleven basic colour terms; Russian speakers' discrimination across the two blues is quicker; colour-coding lifts recall by about thirty per cent — thirteen is only where the published range begins; black kits drew more penalties; and the mood claims are folklore.",
        },
      },
      {
        id: "q2",
        type: "mcq-single",
        label: "Question 8",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What does the lecturer say the viral dress photograph demonstrated?",
        options: [
          "That monitors and printers disagree about displaying pale shades.",
          "That the brain assumes the surrounding light before settling on a colour.",
          "That a large share of viewers have undetected colour-vision deficiency.",
        ],
        correct: [1],
        meta: {
          skills: ["gist", "paraphrase", "process-tracking"],
          keywords: ["ambiguous", "ambient light", "discounted"],
          explanation:
            "The dress photograph was ambiguous about the ambient light, so each viewer's brain assumed an illumination and discounted it — in opposite directions. That makes colour a judgement the brain makes, not a property the eye reads off the object.",
        },
      },
      {
        id: "q3",
        type: "mcq-single",
        label: "Question 9",
        instruction: "Choose the correct letter, A, B or C.",
        stem: "What is the lecturer's overall verdict on colour psychology in marketing?",
        options: [
          "A handful of findings survive, but many popular claims collapse under proper testing.",
          "A mature science whose predictions businesses can safely rely on.",
          "Proof that colour has no measurable effect on human behaviour at all.",
        ],
        correct: [0],
        meta: {
          skills: ["attitude", "paraphrase", "gist"],
          keywords: ["replicable", "folklore", "shrink towards zero"],
          explanation:
            "She separates the real from the folkloric: colour-coding that matches structure is replicable, while the red-makes-you-eat school of marketing sees its effects shrink towards zero under proper testing. So the balanced first option matches her verdict, and the two extreme options both overshoot it.",
        },
      },
    ],
    transcriptNote:
      "The difficulty is concentrated in paraphrase and in the thirty/thirteen pair around the memory figure — the average is thirty per cent, and thirteen is merely the floor of the range. The dress photograph and the black-kit study carry the multiple-choice items.",
    source: BANK_SOURCE_NOTE,
  },
];
