export interface WordAnalysis {
  word: string;
  pronunciation: string;
  meaningHindi: string;
  meaningEnglish: string;
  contextUsage: string;
  synonyms: string[];
  antonyms: string[];
  examRelevance: 'High' | 'Medium' | 'Low';
}

export interface TesterApplication {
  name: string;
  email: string;
  exam: string;
  whatsapp: string;
  reason: string;
  submittedAt?: string;
}