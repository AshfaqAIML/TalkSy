import type { WritingItem, SpeakingItem } from "./types";

/**
 * Writing and speaking placement prompts.
 *
 * Writing: one prompt per tier; the tier is chosen from the learner's
 * earlier objective results ("according to their apparent ability").
 * The learner writes freely, sees the model answer, then self-assesses —
 * writing is never auto-graded.
 *
 * Speaking: optional by design. The learner chooses whether to enable the
 * microphone; declining records "not assessed" and changes nothing else.
 * If speech recognition is available, it gives informative feedback;
 * the final level is the learner's own honest choice in every case.
 */

export const writingItems: WritingItem[] = [
  {
    id: "pw-t1",
    skill: "writing",
    tier: 1,
    prompt: "Write about you. Use one or two sentences: your name and one thing you like.",
    guidance: "Example words: my, name, like, I am… Don't worry about mistakes — just try!",
    modelAnswer: "My name is Ana. I like music.",
    rubric: [
      "I couldn't write a sentence yet",
      "I wrote something, but it was hard",
      "I wrote a sentence close to the example",
    ],
  },
  {
    id: "pw-t2",
    skill: "writing",
    tier: 2,
    prompt: "Write three or four sentences about your day yesterday.",
    guidance: "Think about: Where did you go? What did you do? How did you feel?",
    modelAnswer:
      "Yesterday I got up early and had tea at home. In the morning I worked in the office. After work, I met my friend and we cooked dinner together. It was a good day.",
    rubric: [
      "I could only write words or short phrases",
      "I wrote simple sentences about my day",
      "I wrote several clear sentences with details",
    ],
  },
  {
    id: "pw-t3",
    skill: "writing",
    tier: 3,
    prompt: "Write a short paragraph (four or five sentences): why are you learning English?",
    guidance: "Try to connect your ideas with words like because, so, and for example.",
    modelAnswer:
      "I am learning English because I want to study abroad next year. For example, most of the courses I like are taught in English. It is also useful for my job, since our team works with people from many countries. So I try to practise a little every day, even when I am tired.",
    rubric: [
      "I could only write simple separate sentences",
      "I connected some ideas, with a few mistakes",
      "I wrote a clear paragraph with connected ideas",
    ],
  },
];

export const speakingItems: SpeakingItem[] = [
  {
    id: "ps-t1",
    skill: "speaking",
    tier: 1,
    targetText: "Hello. My name is Ana. Nice to meet you.",
    intro: "Read the sentence, then say it out loud — use your own name!",
  },
  {
    id: "ps-t2",
    skill: "speaking",
    tier: 2,
    targetText: "I went to the market with my sister yesterday.",
    intro: "Read the sentence, then say it out loud at a normal speed.",
  },
  {
    id: "ps-t3",
    skill: "speaking",
    tier: 3,
    targetText: "If I have time this weekend, I will visit my grandmother and help her in the garden.",
    intro: "Read the longer sentence, then say it out loud clearly.",
  },
];
