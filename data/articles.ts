
export interface Article {
  slug: string;
  title: string;
  category: string;
  image: string;
  readTime: string;
  updatedAt: string;
  content: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'how-to-read-the-hindu-for-upsc',
    title: 'How to Read The Hindu Effectively for UPSC 2025',
    category: 'UPSC Strategy',
    image: './assets/articles/upsc-strategy.webp',
    readTime: '8 min read',
    updatedAt: 'Dec 2025',
    content: [
      "Reading The Hindu is not about finishing the paper; it's about extracting high-yield information for GS papers and Essay writing. Many aspirants waste 3-4 hours daily on trivia. Here is how to cut that down to 60 minutes.",
      "Focus primarily on the Editorial and Op-Ed pages. These provide the analytical perspective required for Mains. Look for keywords that represent government policies, constitutional provisions, or socio-economic indicators.",
      "While reading, maintain a separate digital notebook for vocabulary found in context. Words like 'acquiesce', 'prerogative', or 'parsimonious' are often used in the paper. Vocademy automates this process by scanning these specific sections daily.",
      "Avoid political news, crime reports, and regional trivia unless they have a direct bearing on national policy or human rights issues. Your time is your most valuable resource."
    ]
  },
  {
    slug: 'top-50-ssc-cgl-vocabulary',
    title: 'Top 50 High-Frequency Vocabulary Words for SSC CGL Tier-II',
    category: 'SSC English',
    image: './assets/articles/ssc-english.webp',
    readTime: '12 min read',
    updatedAt: 'Dec 2025',
    content: [
      "SSC CGL Tier-II English demands precision. It's not just about knowing the meaning, but understanding the subtle difference between synonyms. For example, 'Ameliorate' vs 'Improve'.",
      "We have analyzed the past 10 years of CGL papers and identified that 40% of the vocabulary is repeated from previous years or sourced from standard editorial excerpts.",
      "The 'Vocademy 50' list focuses on high-frequency words. Master these, and you are already ahead of 90% of the competition. Use our SRS flashcards to lock these in.",
      "Practice daily through multiplayer duels to test your speed. In SSC, speed is as important as accuracy."
    ]
  },
  {
    slug: 'science-of-spaced-repetition',
    title: 'The Science of Spaced Repetition: Why Rote Learning Fails',
    category: 'Study Hacks',
    image: './assets/articles/study-hacks.webp',
    readTime: '6 min read',
    updatedAt: 'Dec 2025',
    content: [
      "The Ebbinghaus Forgetting Curve shows that we forget 70% of new information within 24 hours if it's not reviewed. Rote learning—repeating a word 100 times in one day—is a physiological waste of time.",
      "Spaced Repetition System (SRS) solves this by presenting the information just as you are about to forget it. This strengthens the neural pathways and moves the data from short-term to long-term memory.",
      "Vocademy's algorithm calculates your personal decay rate for every word. If you find 'Hubris' easy, you won't see it for a month. If you struggle with 'Acumen', you'll see it every day.",
      "This is how elite learners master thousands of complex terms without feeling overwhelmed. Efficiency is the key to cracking UPSC/SSC."
    ]
  }
];

export const getArticles = (): Article[] => ARTICLES;
