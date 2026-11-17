import type { VocabCategory } from "./types";

/**
 * Vocabulary categories and subcategories.
 * Word counts per subcategory live in the word files; the registry in
 * index.ts validates that every word's category/subcategory pair exists.
 */
export const vocabCategories: VocabCategory[] = [
  {
    id: "everyday",
    name: "Everyday English",
    description: "The words you need every single day — politeness, habits and time.",
    icon: "sun",
    subcategories: [
      { id: "greetings-politeness", name: "Greetings & politeness" },
      { id: "daily-habits", name: "Daily habits & time" },
    ],
  },
  {
    id: "home",
    name: "Home",
    description: "Rooms, housework and life around the house.",
    icon: "home",
    subcategories: [
      { id: "rooms", name: "Rooms" },
      { id: "housework", name: "Housework" },
      { id: "living", name: "Living situation" },
    ],
  },
  {
    id: "education",
    name: "Education",
    description: "School words — people, study actions and the classroom.",
    icon: "graduation-cap",
    subcategories: [
      { id: "people", name: "School people" },
      { id: "study-verbs", name: "Study verbs" },
      { id: "classroom", name: "In the classroom" },
    ],
  },
  {
    id: "travel",
    name: "Travel",
    description: "Getting around, tickets and directions.",
    icon: "plane",
    subcategories: [
      { id: "getting-around", name: "Getting around" },
      { id: "tickets-booking", name: "Tickets & luggage" },
      { id: "trips", name: "Trips" },
    ],
  },
  {
    id: "food",
    name: "Food",
    description: "Tastes, cooking and eating out.",
    icon: "utensils",
    subcategories: [
      { id: "tastes", name: "Tastes & feelings" },
      { id: "cooking", name: "Cooking" },
      { id: "restaurant", name: "At the restaurant" },
    ],
  },
  {
    id: "family",
    name: "Family",
    description: "Family members and the words that describe them.",
    icon: "users",
    subcategories: [
      { id: "members", name: "Family members" },
      { id: "describing", name: "Describing family" },
      { id: "bonds", name: "Feelings in a family" },
    ],
  },
  {
    id: "emotions",
    name: "Emotions",
    description: "Say how you feel — happy, sad, afraid or full of energy.",
    icon: "heart",
    subcategories: [
      { id: "happy-sad", name: "Happy & sad" },
      { id: "calm-afraid", name: "Calm, angry & afraid" },
      { id: "energy", name: "Energy levels" },
    ],
  },
  {
    id: "workplace",
    name: "Workplace",
    description: "Jobs, colleagues, meetings and money at work.",
    icon: "briefcase",
    subcategories: [
      { id: "jobs-schedule", name: "Jobs & schedule" },
      { id: "people", name: "Work people" },
      { id: "money-hiring", name: "Money & hiring" },
    ],
  },
  {
    id: "technology",
    name: "Technology",
    description: "Devices, the internet and everyday tech actions.",
    icon: "monitor",
    subcategories: [
      { id: "internet", name: "The internet" },
      { id: "devices", name: "Devices" },
      { id: "actions", name: "Tech actions" },
    ],
  },
  {
    id: "shopping",
    name: "Shopping",
    description: "Buying, selling, prices and sizes.",
    icon: "shopping-cart",
    subcategories: [
      { id: "money", name: "Money & prices" },
      { id: "buying", name: "Buying & selling" },
      { id: "clothes", name: "Clothes shopping" },
    ],
  },
  {
    id: "health",
    name: "Health",
    description: "Your body, illness and healthy habits.",
    icon: "activity",
    subcategories: [
      { id: "illness", name: "Illness & pain" },
      { id: "care", name: "Healthcare" },
      { id: "habits", name: "Healthy habits" },
    ],
  },
  {
    id: "social",
    name: "Social communication",
    description: "Invitations, conversations and staying in touch.",
    icon: "message-circle",
    subcategories: [
      { id: "meeting-people", name: "Meeting people" },
      { id: "conversation", name: "Conversation" },
      { id: "messages", name: "Phone & messages" },
      { id: "manners", name: "Manners" },
    ],
  },
];

export function getVocabCategory(id: string): VocabCategory | undefined {
  return vocabCategories.find((c) => c.id === id);
}

export function categorySubcategoryValid(
  categoryId: string,
  subcategoryId: string,
): boolean {
  const category = getVocabCategory(categoryId);
  if (!category) return false;
  return category.subcategories.some((s) => s.id === subcategoryId);
}
