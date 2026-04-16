// Curated music catalogue for the /music page. Each song streams
// from YouTube and pulls synced lyrics from lrclib.net at runtime —
// nothing lives on our servers so there's no storage or licensing
// cost. Duration is supplied for more accurate lyrics matching on
// lrclib (its `/get` endpoint prefers an exact duration match).
//
// Teachers will be able to add songs through the admin dashboard
// in a follow-up — until then, add entries to this array directly.

export type Song = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  /** YouTube video ID (the bit after ?v= in the URL). */
  youtubeId: string;
  /** Song duration in seconds. Helps lrclib return the right version. */
  duration?: number;
};

export const starterSongs: Song[] = [
  {
    id: "adele-hello",
    title: "Hello",
    artist: "Adele",
    album: "25",
    youtubeId: "YQHsXMglC9A",
    duration: 295,
  },
  {
    id: "adele-someone-like-you",
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    youtubeId: "hLQl3WQQoQ0",
    duration: 285,
  },
  {
    id: "ed-sheeran-perfect",
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    youtubeId: "2Vv-BfVoq4g",
    duration: 263,
  },
  {
    id: "coldplay-yellow",
    title: "Yellow",
    artist: "Coldplay",
    album: "Parachutes",
    youtubeId: "yKNxeF4KMsY",
    duration: 269,
  },
  {
    id: "coldplay-fix-you",
    title: "Fix You",
    artist: "Coldplay",
    album: "X&Y",
    youtubeId: "k4V3Mo61fJM",
    duration: 294,
  },
  {
    id: "beatles-let-it-be",
    title: "Let It Be",
    artist: "The Beatles",
    album: "Let It Be",
    youtubeId: "QDYfEBY9NM4",
    duration: 243,
  },
  {
    id: "john-lennon-imagine",
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    youtubeId: "YkgkThdzX-8",
    duration: 183,
  },
  {
    id: "sam-smith-stay-with-me",
    title: "Stay With Me",
    artist: "Sam Smith",
    album: "In the Lonely Hour",
    youtubeId: "pB-5XG-DbAA",
    duration: 172,
  },
  {
    id: "lewis-capaldi-someone-you-loved",
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    album: "Divinely Uninspired to a Hellish Extent",
    youtubeId: "zABLecsR5UE",
    duration: 182,
  },
  {
    id: "christina-perri-a-thousand-years",
    title: "A Thousand Years",
    artist: "Christina Perri",
    album: "The Twilight Saga: Breaking Dawn",
    youtubeId: "rtOvBOTyX00",
    duration: 285,
  },
  {
    id: "taylor-swift-love-story",
    title: "Love Story",
    artist: "Taylor Swift",
    album: "Fearless",
    youtubeId: "8xg3vE8Ie_E",
    duration: 236,
  },
  {
    id: "sia-chandelier",
    title: "Chandelier",
    artist: "Sia",
    album: "1000 Forms of Fear",
    youtubeId: "2vjPBrBU-TM",
    duration: 216,
  },
];
