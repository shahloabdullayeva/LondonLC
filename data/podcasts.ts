// Curated podcast / English-learning episode catalogue.
// Each episode streams from YouTube — no storage cost.
// Teachers can add more via the admin pencil icon on /podcasts.

export type Episode = {
  id: string;
  title: string;
  channel: string;
  youtubeId: string;
  /** Duration in seconds (for display). */
  duration?: number;
  /** Short description shown below the player. */
  description?: string;
};

export const starterEpisodes: Episode[] = [
  // ═══════════════════════════════════════════════════════════
  // BBC 6 Minute English
  // ═══════════════════════════════════════════════════════════
  { id: "bbc-6min-sleep", title: "How much sleep do you need?", channel: "BBC 6 Minute English", youtubeId: "xNPGdPjVJww", duration: 360, description: "Neil and Rob discuss how much sleep we really need and teach some useful vocabulary." },
  { id: "bbc-6min-coffee", title: "Is coffee good for you?", channel: "BBC 6 Minute English", youtubeId: "0MnGq5gHtrk", duration: 360, description: "Sam and Neil discuss the health benefits and risks of drinking coffee." },
  { id: "bbc-6min-happiness", title: "What makes us happy?", channel: "BBC 6 Minute English", youtubeId: "o3G6jY2YSQE", duration: 360, description: "What is the secret of happiness? Neil and Rob discuss what science tells us." },
  { id: "bbc-6min-social-media", title: "Is social media making us lonely?",  channel: "BBC 6 Minute English", youtubeId: "hER0Qp6QJNU", duration: 360, description: "Are we more connected but lonelier than ever? Rob and Georgina discuss." },
  { id: "bbc-6min-plastic", title: "The problem with plastic", channel: "BBC 6 Minute English", youtubeId: "VgJuSbANQLo", duration: 360, description: "Neil and Catherine discuss plastic pollution and what can be done about it." },

  // ═══════════════════════════════════════════════════════════
  // TED-Ed
  // ═══════════════════════════════════════════════════════════
  { id: "ted-ed-bilingualism", title: "The benefits of a bilingual brain", channel: "TED-Ed", youtubeId: "MMmOLN5zBLY", duration: 305, description: "How does bilingualism affect your brain? Mia Nacamulli details the three types of bilingual brains and shows the cognitive benefits." },
  { id: "ted-ed-languages-evolve", title: "How languages evolve", channel: "TED-Ed", youtubeId: "iWDKsHm6gTA", duration: 244, description: "Alex Gendler explains how languages change over time — from Latin to the Romance languages." },
  { id: "ted-ed-procrastination", title: "Why you procrastinate", channel: "TED-Ed", youtubeId: "FWTNMzK9vG4", duration: 305, description: "Vik Nithy explores the science behind procrastination and how to overcome it." },
  { id: "ted-ed-reading", title: "What happens when you read?", channel: "TED-Ed", youtubeId: "gBBcTLHRqfU", duration: 293, description: "How does the brain transform lines on a page into vivid worlds? Mia Nacamulli investigates." },
  { id: "ted-ed-memory", title: "How does your memory work?", channel: "TED-Ed", youtubeId: "TUoJc0NPajQ", duration: 282, description: "Your memory isn't like a video camera. Catharine Young explains what memory actually is." },

  // ═══════════════════════════════════════════════════════════
  // TED Talks (longer, academic-style)
  // ═══════════════════════════════════════════════════════════
  { id: "ted-inside-mind", title: "Inside the mind of a master procrastinator", channel: "TED", youtubeId: "arj7oStGLkU", duration: 840, description: "Tim Urban takes us on a journey through YouTube binges, Wikipedia rabbit holes and — eventually — the Panic Monster." },
  { id: "ted-body-language", title: "Your body language may shape who you are", channel: "TED", youtubeId: "Ks-_Mh1QhMc", duration: 1260, description: "Amy Cuddy shows how 'power posing' can affect your brain and might even impact your chances of success." },

  // ═══════════════════════════════════════════════════════════
  // English learning channels
  // ═══════════════════════════════════════════════════════════
  { id: "lucy-british-slang", title: "British Slang You NEED to Know", channel: "English with Lucy", youtubeId: "kGh2O6MXGXE", duration: 720, description: "Lucy teaches common British slang expressions that you'll hear in everyday conversation." },
  { id: "ielts-speaking-tips", title: "IELTS Speaking: How to Get Band 7+", channel: "English Mastery", youtubeId: "KYU1Kc78xYQ", duration: 900, description: "Top tips and strategies for achieving Band 7+ in the IELTS Speaking test." },
];
