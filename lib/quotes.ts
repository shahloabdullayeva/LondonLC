// Random quote picker for the landing page.
// Replace the `quotes` array with your own curated list — the component
// renders whichever entry is returned.
export type Quote = {
  text: string;
  author?: string;
};

// PLACEHOLDER — replace with your list.
export const quotes: Quote[] = [
  { text: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein" },
  { text: "A different language is a different vision of life.", author: "Federico Fellini" },
  { text: "To have another language is to possess a second soul.", author: "Charlemagne" },
  { text: "Language is the road map of a culture.", author: "Rita Mae Brown" },
  { text: "One language sets you in a corridor for life. Two languages open every door along the way.", author: "Frank Smith" },
];

// Pick a quote. Deterministic per page-load so the text doesn't flicker
// on re-renders, but a fresh one each visit.
export function getQuote(): Quote {
  if (quotes.length === 0) return { text: "" };
  const i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}
