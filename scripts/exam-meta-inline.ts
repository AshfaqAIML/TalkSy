/**
 * Enrichment metadata (difficulty + post-submission explanations) for the
 * mock tests seeded inline in scripts/seed-exams.ts. Keys are
 * "<sectionKey>:<questionOrder>" within each mock; applied by the seed
 * script to existing MockTestQuestion rows. Original EnglishPath content.
 */
export type SeedQuestionMeta = {
  /** 1-5, 1 = foundation (A2-B1) … 5 = advanced (C1-C2). */
  difficulty: number;
  /** 15-45 words; references the actual answer key. */
  explanation: string;
};
export type SeedMockMeta = Record<string, SeedQuestionMeta>;

export const INLINE_SEED_META: Record<string, SeedMockMeta> = {
  "IELTS Academic Sample Mock 1": {
    "listening:1": {
      difficulty: 1,
      explanation:
        "The key completes the form with 'Birchwood' for 42 Birchwood Avenue, the digit '9' in the mobile number 079 515 882, and 'passport' as the proof of identity. Part 1 answers are stated and spelled out directly, so copy them exactly.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "The recording states 'standard members can borrow four', which matches 'Standard members may borrow four items at a time.' The trap is 'twelve pounds a month': the premium fee is twelve pounds a year, and the woman speaking is staff, not an applicant.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "'The exhibition is still open for at least several weeks' follows from 'runs until the end of next month.' 'Closes next Tuesday' confuses the opening date, and the 2 p.m. Sunday tour is cancelled, so 'every hour including 2 p.m.' is wrong.",
    },
    "listening:4": {
      difficulty: 2,
      explanation:
        "The answer is 'ten': school groups must book the workshop at least ten days in advance. The instruction says ONE WORD ONLY, so write the word 'ten' rather than the digit, and do not be distracted by other numbers in the announcement.",
    },
    "reading:1": {
      difficulty: 2,
      explanation:
        "Paragraph A reports 'over 260 wild bee species within the city limits' and 'more than were recorded in the agricultural land beyond its suburbs', matching 'Berlin has more wild bee species than the farmland around it.' The other options each reverse a passage fact.",
    },
    "reading:2": {
      difficulty: 3,
      explanation:
        "The passage says urban temperatures 'run one or two degrees warmer, extending the season for cold-sensitive species.' The correct option paraphrases this as warmth helping such species 'stay active longer'; beware choices that flip the direction, such as warmth shortening the flowering season.",
    },
    "reading:3": {
      difficulty: 2,
      explanation:
        "True. The final paragraph calls ground-nesting bees 'roughly three quarters of all wild species', and the statement only swaps 'roughly' for 'about'. In True/False/Not Given items a synonym change like this still counts as agreeing with the information given.",
    },
    "reading:4": {
      difficulty: 3,
      explanation:
        "False. The Melbourne study found 'the average suburban garden offered a far longer flowering season than any nearby farm', so the statement reverses the comparison. Reversed relationships are the classic False pattern: the content is present but the direction is wrong.",
    },
    "reading:5": {
      difficulty: 2,
      explanation:
        "Not Given. Berlin is mentioned with 'over 260 wild bee species', but the passage never says the population doubled or refers to the year 2000. When the topic feels familiar yet the specific claim is absent, choose Not Given rather than guessing True.",
    },
    "reading:6": {
      difficulty: 3,
      explanation:
        "Paragraph B describes urban 'mosaics' of gardens, parks and embankments that 'each host different plants', keeping nectar and pollen available 'from early spring to late autumn.' That is the reason behind the item, so it matches B; the warmth detail belongs to paragraph C.",
    },
    "reading:7": {
      difficulty: 3,
      explanation:
        "The final paragraph mentions 'leaving unmown strips and sandy banks in parks', which supplies 'sandy', and 'Ground-nesting bees — roughly three quarters of all wild species', which supplies 'ground'. For summary completion, find the paraphrased sentence and copy the exact word from the passage.",
    },
    "writing:1": {
      difficulty: 3,
      explanation:
        "Task 1 is a report, not an opinion essay. Select and compare the main features: all four cities rose, Seoul roughly doubled from 2.5 to 6.1 million trips, and Paris stayed highest at 9.3 million. Accurate figures with grouped comparisons beat listing every cell.",
    },
    "writing:2": {
      difficulty: 4,
      explanation:
        "A strong answer discusses both views before giving your own opinion: society benefits from free university education for everyone, versus students paying at least part of the cost. Plan paragraphs first; Task 2 is double-weighted, so an unfinished argument hurts more than grammar slips.",
    },
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Part 1 rewards natural, extended answers to familiar questions. Cover each prompt directly — house or apartment, what you like about the area, whether you would move — then add one reason or example. Very short replies cap your fluency score.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "Use the preparation minute to note one idea per cue: what the skill is, why you decided to learn it, how you learned it, and how you feel about it now. In the long turn, covering all four cue-card prompts matters more than vocabulary.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "Part 3 shifts from the personal to the abstract, so support opinions with reasons and comparisons rather than stories. Address every question, from practical skills alongside academic subjects to whether technology makes learning easier or lazier, and weigh both sides.",
    },
  },
  "TOEFL iBT Sample Mock 1 (2026 format)": {
    "reading:1": {
      difficulty: 3,
      explanation:
        "All three words appear in paragraph 1: the rhythm 'sweeps across the cortex', and memories leave 'the hippocampus — the brain's temporary storage area.' Let the surrounding context guide you to 'cortex', 'hippocampus' and 'storage', then check spelling carefully.",
    },
    "reading:2": {
      difficulty: 2,
      explanation:
        "Each wave 'appears to move memories out of the hippocampus into the cortex', which matches 'Slow cortical waves appear to move memories toward the cortex.' The hippocampus is only temporary storage, so 'stores memories permanently' is the trap.",
    },
    "reading:3": {
      difficulty: 3,
      explanation:
        "Paragraph 3 warns that students who 'sacrifice sleep before an exam may be cutting the very hours in which learning is consolidated', so the evidence points to 'Get a full night of sleep.' 'Revise all night' is exactly what the passage advises against.",
    },
    "reading:4": {
      difficulty: 3,
      explanation:
        "'Tags what matters' is figurative: in the experiment, sleep favoured 'emotionally significant words' over neutral ones. The best paraphrase is that sleep 'labels important information for later retention.' Options about forgetting or literal tags on dreams misread the metaphor.",
    },
    "reading:5": {
      difficulty: 3,
      explanation:
        "The two correct findings are the replay — 'the brain replays the day's events at high speed during dreaming sleep' — and the rhythm that 'sweeps across the cortex about once per second.' The neutral-words option reverses the study, and caffeine is never mentioned.",
    },
    "listening:1": {
      difficulty: 2,
      explanation:
        "The student opens with 'I need to switch my Tuesday chemistry lab to the Thursday section', so the purpose is 'To change his lab section.' Purpose questions are answered by the first request, not by later details such as the 8 a.m. slot.",
    },
    "listening:2": {
      difficulty: 2,
      explanation:
        "The registrar says 'you'll also need your advisor to approve the change in the portal first', so advisor approval is the required step. No fee, professor email or trial visit is mentioned; those options invent details the conversation does not contain.",
    },
    "listening:3": {
      difficulty: 3,
      explanation:
        "The lecture builds one main idea: countershading ('dark on top, light below') plus squid that host 'light-producing bacteria' to erase their silhouettes. That combination is 'countershading and bioluminescence in open-ocean animals'; squid are an example, and coral reefs only frame the contrast.",
    },
    "listening:4": {
      difficulty: 3,
      explanation:
        "The professor says 'Some squid go further — they host light-producing bacteria that exactly match the down-welling light, erasing their silhouette entirely.' The squid therefore exemplify silhouette-erasing camouflage with light, not hunting behaviour or a comparison with reef fish.",
    },
    "writing:1": {
      difficulty: 2,
      explanation:
        "The target order is 'the findings suggest that sleep is essential for memory': subject 'the findings', verb 'suggest', then a that-clause. Keep the chunk 'is essential for' intact; separating 'is' from 'essential' produces an ungrammatical string.",
    },
    "writing:2": {
      difficulty: 3,
      explanation:
        "The correct sentence is 'students who cut sleep before exams may harm their results.' The relative clause 'who cut sleep' must follow 'students' immediately, 'before exams' attaches to the cutting, and the modal 'may' takes the base verb 'harm'.",
    },
    "writing:3": {
      difficulty: 2,
      explanation:
        "Build 'open-ocean animals cannot hide behind rocks or reefs': the compound subject is 'open-ocean animals', the modal is 'cannot', and 'behind rocks or reefs' completes the verb phrase. Keep the hyphenated modifier with 'animals'; it identifies midwater species.",
    },
    "writing:4": {
      difficulty: 3,
      explanation:
        "State a clear position on replacing final exams with continuous assessment projects, and react to Mei's 'projects show what we can actually do' or Daniel's fairness point. In 100 words, one position, two reasons and one reply to a classmate beat listing every idea.",
    },
    "speaking:1": {
      difficulty: 2,
      explanation:
        "Structure the 45 seconds around the two asks: what you saw and why it impressed you. Choose one place, give two or three concrete details, then finish with the personal reason it impressed you. Depth about one place beats naming several.",
    },
    "speaking:2": {
      difficulty: 3,
      explanation:
        "Pick one side immediately: planning every detail of a trip or deciding as you go. State your preference, give two linked reasons and a brief example. Hedging between both approaches for the whole response weakens fluency and coherence scores.",
    },
    "speaking:3": {
      difficulty: 4,
      explanation:
        "This summarize item rewards paraphrase, not recitation: convey the key idea that sleep consolidates memories — the brain files the day's learning into long-term storage — and link it to studying. Reusing long phrases from the passage lowers your score; use your own words.",
    },
  },
};
