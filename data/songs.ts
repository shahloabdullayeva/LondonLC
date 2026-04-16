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
  // ── Recent viral / TikTok favourites ───────────────────────
  {
    id: "melanie-martinez-playdate",
    title: "Play Date",
    artist: "Melanie Martinez",
    album: "K-12",
    youtubeId: "C7kZ0D-PEIs",
    duration: 175,
  },
  {
    id: "surf-curse-freaks",
    title: "Freaks",
    artist: "Surf Curse",
    album: "Buds",
    youtubeId: "zhFwYZYJ-nI",
    duration: 145,
  },
  {
    id: "joji-glimpse-of-us",
    title: "Glimpse of Us",
    artist: "Joji",
    album: "SMITHEREENS",
    youtubeId: "sk3AYWvlwE0",
    duration: 233,
  },
  {
    id: "stephen-sanchez-until-i-found-you",
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    album: "Angel Face",
    youtubeId: "pp5yeQrcCwc",
    duration: 165,
  },

  // ── Modern pop ballads ────────────────────────────────────
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
    id: "dj-snake-let-me-love-you",
    title: "Let Me Love You",
    artist: "DJ Snake & Justin Bieber",
    album: "Encore",
    youtubeId: "RgKAFK5djSk",
    duration: 206,
  },

  // ── Coldplay ───────────────────────────────────────────────
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

  // ── Taylor Swift ──────────────────────────────────────────
  {
    id: "taylor-swift-love-story",
    title: "Love Story",
    artist: "Taylor Swift",
    album: "Fearless",
    youtubeId: "8xg3vE8Ie_E",
    duration: 236,
  },
  {
    id: "taylor-swift-betty",
    title: "betty",
    artist: "Taylor Swift",
    album: "folklore",
    youtubeId: "mn9iiP0YIyQ",
    duration: 294,
  },

  // ── Classic rock & pop legends ────────────────────────────
  {
    id: "prince-purple-rain",
    title: "Purple Rain",
    artist: "Prince",
    album: "Purple Rain",
    youtubeId: "TvnYmWpD_T8",
    duration: 520,
  },
  {
    id: "the-clash-should-i-stay-or-should-i-go",
    title: "Should I Stay or Should I Go",
    artist: "The Clash",
    album: "Combat Rock",
    youtubeId: "BN1WwnEDWAM",
    duration: 193,
  },
  {
    id: "kate-bush-running-up-that-hill",
    title: "Running Up That Hill",
    artist: "Kate Bush",
    album: "Hounds of Love",
    youtubeId: "wp43OdtAAkM",
    duration: 300,
  },
  {
    id: "elton-john-im-still-standing",
    title: "I'm Still Standing",
    artist: "Elton John",
    album: "Too Low for Zero",
    youtubeId: "ZHwVBirqD2s",
    duration: 202,
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

  // ── ABBA ──────────────────────────────────────────────────
  {
    id: "abba-dancing-queen",
    title: "Dancing Queen",
    artist: "ABBA",
    album: "Arrival",
    youtubeId: "xFrGuyw1V8s",
    duration: 230,
  },
  {
    id: "abba-mamma-mia",
    title: "Mamma Mia",
    artist: "ABBA",
    album: "ABBA",
    youtubeId: "unfzfe8f9NI",
    duration: 212,
  },
  {
    id: "abba-waterloo",
    title: "Waterloo",
    artist: "ABBA",
    album: "Waterloo",
    youtubeId: "3FsVeMz1F5c",
    duration: 166,
  },
  {
    id: "abba-winner-takes-it-all",
    title: "The Winner Takes It All",
    artist: "ABBA",
    album: "Super Trouper",
    youtubeId: "92cwKCU8Z5c",
    duration: 275,
  },

  // ── 80s / 90s / 2000s classics ────────────────────────────
  {
    id: "sting-shape-of-my-heart",
    title: "Shape of My Heart",
    artist: "Sting",
    album: "Ten Summoner's Tales",
    youtubeId: "NlwIDxCjL-8",
    duration: 278,
  },
  {
    id: "george-michael-careless-whisper",
    title: "Careless Whisper",
    artist: "George Michael",
    album: "Make It Big",
    youtubeId: "izGwDsrQ1eQ",
    duration: 319,
  },
  {
    id: "nelly-furtado-say-it-right",
    title: "Say It Right",
    artist: "Nelly Furtado",
    album: "Loose",
    youtubeId: "6JnGBs88sL0",
    duration: 223,
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
