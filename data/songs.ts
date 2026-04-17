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
  /**
   * Lyrics timing offset in seconds — usually set by a teacher via
   * the in-player calibration controls and persisted as an override.
   * Positive = lyrics advance earlier; negative = delayed (for
   * videos with intros).
   */
  offset?: number;
};

export const starterSongs: Song[] = [
  // ═══════════════════════════════════════════════════════════
  // Curated order (user-chosen favourites at the top)
  // ═══════════════════════════════════════════════════════════
  { id: "taylor-swift-love-story", title: "Love Story", artist: "Taylor Swift", album: "Fearless", youtubeId: "8xg3vE8Ie_E", duration: 236 },
  { id: "arctic-monkeys-505", title: "505", artist: "Arctic Monkeys", album: "Favourite Worst Nightmare", youtubeId: "MrmPDUvKyLs", duration: 253 },
  { id: "surf-curse-freaks", title: "Freaks", artist: "Surf Curse", album: "Buds", youtubeId: "zhFwYZYJ-nI", duration: 145 },
  { id: "rare-occasions-notion", title: "Notion", artist: "The Rare Occasions", album: "Into the Shallows", youtubeId: "pGxjEfJbgbk", duration: 211 },
  { id: "coldplay-yellow", title: "Yellow", artist: "Coldplay", album: "Parachutes", youtubeId: "yKNxeF4KMsY", duration: 269 },
  { id: "taylor-swift-you-belong-with-me", title: "You Belong With Me", artist: "Taylor Swift", album: "Fearless", youtubeId: "VuNIsY6JdUw", duration: 231 },
  { id: "taylor-swift-back-to-december", title: "Back to December", artist: "Taylor Swift", album: "Speak Now", youtubeId: "QUwxKWT6m7U", duration: 293 },
  { id: "olivia-rodrigo-traitor", title: "traitor", artist: "Olivia Rodrigo", album: "SOUR", youtubeId: "qqiC50BSGSI", duration: 229 },
  { id: "taylor-swift-right-where-you-left-me", title: "right where you left me", artist: "Taylor Swift", album: "evermore", youtubeId: "YiaxOSSmXCM", duration: 263 },
  { id: "olivia-rodrigo-good-4-u", title: "good 4 u", artist: "Olivia Rodrigo", album: "SOUR", youtubeId: "gNi_6U5Pm_o", duration: 178 },
  { id: "olivia-rodrigo-deja-vu", title: "deja vu", artist: "Olivia Rodrigo", album: "SOUR", youtubeId: "cii6ruuycQA", duration: 215 },

  // ═══════════════════════════════════════════════════════════
  // More Taylor Swift
  // ═══════════════════════════════════════════════════════════
  { id: "taylor-swift-lover", title: "Lover", artist: "Taylor Swift", album: "Lover", youtubeId: "cvUAahytk2Q", duration: 221 },
  { id: "taylor-swift-betty", title: "betty", artist: "Taylor Swift", album: "folklore", youtubeId: "mn9iiP0YIyQ", duration: 294 },

  // ═══════════════════════════════════════════════════════════
  // More Olivia Rodrigo
  // ═══════════════════════════════════════════════════════════
  { id: "olivia-rodrigo-drivers-license", title: "drivers license", artist: "Olivia Rodrigo", album: "SOUR", youtubeId: "ZmDBbnmKFnI", duration: 244 },

  // ═══════════════════════════════════════════════════════════
  // Viral / TikTok
  // ═══════════════════════════════════════════════════════════
  { id: "melanie-martinez-playdate", title: "Play Date", artist: "Melanie Martinez", album: "K-12", youtubeId: "C7kZ0D-PEIs", duration: 175 },
  { id: "joji-glimpse-of-us", title: "Glimpse of Us", artist: "Joji", album: "SMITHEREENS", youtubeId: "sk3AYWvlwE0", duration: 233 },
  { id: "stephen-sanchez-until-i-found-you", title: "Until I Found You", artist: "Stephen Sanchez", album: "Angel Face", youtubeId: "pp5yeQrcCwc", duration: 165 },

  // ═══════════════════════════════════════════════════════════
  // Modern pop ballads
  // ═══════════════════════════════════════════════════════════
  { id: "adele-hello", title: "Hello", artist: "Adele", album: "25", youtubeId: "YQHsXMglC9A", duration: 295, offset: -74 },
  { id: "adele-someone-like-you", title: "Someone Like You", artist: "Adele", album: "21", youtubeId: "hLQl3WQQoQ0", duration: 285 },
  { id: "ed-sheeran-perfect", title: "Perfect", artist: "Ed Sheeran", album: "÷ (Divide)", youtubeId: "2Vv-BfVoq4g", duration: 263 },
  { id: "sam-smith-stay-with-me", title: "Stay With Me", artist: "Sam Smith", album: "In the Lonely Hour", youtubeId: "pB-5XG-DbAA", duration: 172 },
  { id: "lewis-capaldi-someone-you-loved", title: "Someone You Loved", artist: "Lewis Capaldi", youtubeId: "zABLecsR5UE", duration: 182 },
  { id: "christina-perri-a-thousand-years", title: "A Thousand Years", artist: "Christina Perri", youtubeId: "rtOvBOTyX00", duration: 285 },
  { id: "dj-snake-let-me-love-you", title: "Let Me Love You", artist: "DJ Snake & Justin Bieber", album: "Encore", youtubeId: "RgKAFK5djSk", duration: 206 },

  // ═══════════════════════════════════════════════════════════
  // Coldplay
  // ═══════════════════════════════════════════════════════════
  { id: "coldplay-fix-you", title: "Fix You", artist: "Coldplay", album: "X&Y", youtubeId: "k4V3Mo61fJM", duration: 294 },

  // ═══════════════════════════════════════════════════════════
  // Classic rock & pop legends
  // ═══════════════════════════════════════════════════════════
  { id: "prince-purple-rain", title: "Purple Rain", artist: "Prince", album: "Purple Rain", youtubeId: "TvnYmWpD_T8", duration: 520 },
  { id: "the-clash-should-i-stay-or-should-i-go", title: "Should I Stay or Should I Go", artist: "The Clash", album: "Combat Rock", youtubeId: "BN1WwnEDWAM", duration: 193 },
  { id: "kate-bush-running-up-that-hill", title: "Running Up That Hill", artist: "Kate Bush", album: "Hounds of Love", youtubeId: "wp43OdtAAkM", duration: 300 },
  { id: "elton-john-im-still-standing", title: "I'm Still Standing", artist: "Elton John", album: "Too Low for Zero", youtubeId: "ZHwVBirqD2s", duration: 202 },
  { id: "beatles-let-it-be", title: "Let It Be", artist: "The Beatles", album: "Let It Be", youtubeId: "QDYfEBY9NM4", duration: 243 },

  // ═══════════════════════════════════════════════════════════
  // ABBA
  // ═══════════════════════════════════════════════════════════
  { id: "abba-dancing-queen", title: "Dancing Queen", artist: "ABBA", album: "Arrival", youtubeId: "xFrGuyw1V8s", duration: 230 },
  { id: "abba-mamma-mia", title: "Mamma Mia", artist: "ABBA", album: "ABBA", youtubeId: "unfzfe8f9NI", duration: 212 },
  { id: "abba-waterloo", title: "Waterloo", artist: "ABBA", album: "Waterloo", youtubeId: "3FsVeMz1F5c", duration: 166 },
  { id: "abba-winner-takes-it-all", title: "The Winner Takes It All", artist: "ABBA", album: "Super Trouper", youtubeId: "92cwKCU8Z5c", duration: 275 },

  // ═══════════════════════════════════════════════════════════
  // Alan Walker
  // ═══════════════════════════════════════════════════════════
  { id: "alan-walker-spectre", title: "Spectre", artist: "Alan Walker", youtubeId: "wJnBTPUQS5A", duration: 227 },
  { id: "alan-walker-alone", title: "Alone", artist: "Alan Walker", youtubeId: "1-xTEfGRDTc", duration: 161 },
  { id: "alan-walker-alone-pt-ii", title: "Alone, Pt. II", artist: "Alan Walker & Ava Max", album: "Alone, Pt. II", youtubeId: "JLMOeiLF0JQ", duration: 176 },
  { id: "alan-walker-alone-pt-iii", title: "Alone, Pt. III", artist: "Alan Walker", youtubeId: "M8AjlgJRNHg", duration: 162 },
  { id: "alan-walker-on-my-way", title: "On My Way", artist: "Alan Walker, Sabrina Carpenter & Farruko", album: "Different World", youtubeId: "dhYOPzcsbGM", duration: 193 },
  { id: "alan-walker-faded", title: "Faded", artist: "Alan Walker", youtubeId: "60ItHLz5WEA", duration: 212 },
  { id: "alan-walker-darkside", title: "Darkside", artist: "Alan Walker feat. Au/Ra & Tomine Harket", album: "Different World", youtubeId: "M-P4QBt-FWw", duration: 212 },

  // ═══════════════════════════════════════════════════════════
  // 80s / 90s / 2000s
  // ═══════════════════════════════════════════════════════════
  { id: "sting-shape-of-my-heart", title: "Shape of My Heart", artist: "Sting", album: "Ten Summoner's Tales", youtubeId: "NlwIDxCjL-8", duration: 278 },
  { id: "george-michael-careless-whisper", title: "Careless Whisper", artist: "George Michael", album: "Make It Big", youtubeId: "izGwDsrQ1eQ", duration: 319 },
  { id: "nelly-furtado-say-it-right", title: "Say It Right", artist: "Nelly Furtado", album: "Loose", youtubeId: "6JnGBs88sL0", duration: 223 },
  { id: "sia-chandelier", title: "Chandelier", artist: "Sia", album: "1000 Forms of Fear", youtubeId: "2vjPBrBU-TM", duration: 216 },
];
