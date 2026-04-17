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

  // ═══════════════════════════════════════════════════════════
  // Billie Eilish
  // ═══════════════════════════════════════════════════════════
  { id: "billie-eilish-chihiro", title: "CHIHIRO", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", youtubeId: "BY_XwvKloqc", duration: 303 },
  { id: "billie-eilish-i-love-you", title: "i love you", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP", youtubeId: "cShRHx2mGBY", duration: 292 },
  { id: "billie-eilish-bored", title: "Bored", artist: "Billie Eilish", album: "13 Reasons Why", youtubeId: "RadqOgrMtRA", duration: 237 },
  { id: "billie-eilish-broken-heart", title: "I CAN DO IT WITH A BROKEN HEART", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", youtubeId: "aPVIQnuYhvA", duration: 213 },

  // ═══════════════════════════════════════════════════════════
  // Katy Perry
  // ═══════════════════════════════════════════════════════════
  { id: "katy-perry-dark-horse", title: "Dark Horse", artist: "Katy Perry ft. Juicy J", album: "Prism", youtubeId: "0KSOMA3QBU0", duration: 224 },
  { id: "katy-perry-et", title: "E.T.", artist: "Katy Perry ft. Kanye West", album: "Teenage Dream", youtubeId: "t5Sd5c4o9UM", duration: 230 },
  { id: "katy-perry-hot-n-cold", title: "Hot N Cold", artist: "Katy Perry", album: "One of the Boys", youtubeId: "kTHNpusq654", duration: 200 },
  { id: "katy-perry-firework", title: "Firework", artist: "Katy Perry", album: "Teenage Dream", youtubeId: "QGJuMBdaqIw", duration: 228 },
  { id: "katy-perry-roar", title: "Roar", artist: "Katy Perry", album: "Prism", youtubeId: "CevxZvSJLk8", duration: 224 },
  { id: "katy-perry-i-kissed-a-girl", title: "I Kissed a Girl", artist: "Katy Perry", album: "One of the Boys", youtubeId: "tAp9BKosZXs", duration: 179 },

  // ═══════════════════════════════════════════════════════════
  // More Taylor Swift
  // ═══════════════════════════════════════════════════════════
  { id: "taylor-swift-fortnight", title: "Fortnight", artist: "Taylor Swift ft. Post Malone", album: "THE TORTURED POETS DEPARTMENT", youtubeId: "q3zqJs7JUCQ", duration: 228 },
  { id: "taylor-swift-all-too-well", title: "All Too Well (10 Minute Version)", artist: "Taylor Swift", album: "Red (Taylor's Version)", youtubeId: "tollGa3S0o8", duration: 613 },
  { id: "taylor-swift-cruel-summer", title: "Cruel Summer", artist: "Taylor Swift", album: "Lover", youtubeId: "ic8j13piAhQ", duration: 178 },
  { id: "taylor-swift-shake-it-off", title: "Shake It Off", artist: "Taylor Swift", album: "1989", youtubeId: "nfWlot6h_JM", duration: 219 },
  { id: "taylor-swift-blank-space", title: "Blank Space", artist: "Taylor Swift", album: "1989", youtubeId: "e-ORhEE9VVg", duration: 231 },
  { id: "taylor-swift-look-what-you-made-me-do", title: "Look What You Made Me Do", artist: "Taylor Swift", album: "reputation", youtubeId: "3tmd-ClpJxA", duration: 211 },
  { id: "taylor-swift-i-knew-you-were-trouble", title: "I Knew You Were Trouble", artist: "Taylor Swift", album: "Red", youtubeId: "vNoKguSdy4Y", duration: 220 },
  { id: "taylor-swift-dont-blame-me", title: "Don't Blame Me", artist: "Taylor Swift", album: "reputation", youtubeId: "lSqKmq8kY3o", duration: 236 },
  { id: "taylor-swift-bad-blood", title: "Bad Blood", artist: "Taylor Swift ft. Kendrick Lamar", album: "1989", youtubeId: "QcIy9NiNbmo", duration: 199 },
  { id: "taylor-swift-style", title: "Style", artist: "Taylor Swift", album: "1989", youtubeId: "-CmadmM5cOk", duration: 231 },
  { id: "taylor-swift-enchanted", title: "Enchanted", artist: "Taylor Swift", album: "Speak Now", youtubeId: "LqBKMdTqMIU", duration: 352 },
  { id: "taylor-swift-whos-afraid", title: "Who's Afraid of Little Old Me?", artist: "Taylor Swift", album: "THE TORTURED POETS DEPARTMENT", youtubeId: "1r_sQzRFjTU", duration: 334 },
  { id: "taylor-swift-wildest-dreams", title: "Wildest Dreams", artist: "Taylor Swift", album: "1989", youtubeId: "IdneKLhsWOQ", duration: 220 },
  { id: "taylor-swift-daylight", title: "Daylight", artist: "Taylor Swift", album: "Lover", youtubeId: "u9raS7-MBz8", duration: 293 },
  { id: "taylor-swift-cardigan", title: "cardigan", artist: "Taylor Swift", album: "folklore", youtubeId: "K-a8s8OLBSE", duration: 239 },
  { id: "taylor-swift-so-high-school", title: "So High School", artist: "Taylor Swift", album: "THE TORTURED POETS DEPARTMENT", youtubeId: "5-9z8g7rJyE", duration: 226 },
  { id: "taylor-swift-anti-hero", title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", youtubeId: "b1kbLwvqugk", duration: 200 },
  { id: "taylor-swift-gorgeous", title: "Gorgeous", artist: "Taylor Swift", album: "reputation", youtubeId: "iRrjGPDMfRE", duration: 209 },
  { id: "taylor-swift-me", title: "ME!", artist: "Taylor Swift ft. Brendon Urie", album: "Lover", youtubeId: "FuXNumBwDOM", duration: 193 },
  { id: "taylor-swift-you-need-to-calm-down", title: "You Need to Calm Down", artist: "Taylor Swift", album: "Lover", youtubeId: "Dkk9gvTmCXY", duration: 171 },
  { id: "taylor-swift-but-daddy-i-love-him", title: "But Daddy I Love Him", artist: "Taylor Swift", album: "THE TORTURED POETS DEPARTMENT", youtubeId: "nCMHHe7Hjmk", duration: 345 },
  { id: "taylor-swift-august", title: "august", artist: "Taylor Swift", album: "folklore", youtubeId: "nn_0zPAfyo8", duration: 262 },
  { id: "taylor-swift-the-man", title: "The Man", artist: "Taylor Swift", album: "Lover", youtubeId: "AqAJLh9wuZ0", duration: 191 },

  // ═══════════════════════════════════════════════════════════
  // More Alan Walker
  // ═══════════════════════════════════════════════════════════
  { id: "alan-walker-lily", title: "Lily", artist: "Alan Walker, K-391 & Emelie Hollow", youtubeId: "09R_ME6QGIQ", duration: 193 },
  { id: "alan-walker-unity", title: "Unity", artist: "Alan Walker", youtubeId: "n1WpP7iowLc", duration: 176 },
  { id: "alan-walker-who-i-am", title: "Who I Am", artist: "Alan Walker, Putri Ariani & Peder Elias", youtubeId: "jPW14SMQnAA", duration: 195 },
  { id: "alan-walker-lost-control", title: "Lost Control", artist: "Alan Walker & Sorana", youtubeId: "MO4qLsBawsc", duration: 200 },
  { id: "alan-walker-end-of-time", title: "End of Time", artist: "Alan Walker, K-391 & Ahrix", youtubeId: "AoWPeFnSbnA", duration: 209 },
  { id: "alan-walker-sweet-dreams", title: "Sweet Dreams", artist: "Alan Walker & Imanbek", youtubeId: "2JLzALJGBAo", duration: 156 },
  { id: "alan-walker-diamond-heart", title: "Diamond Heart", artist: "Alan Walker ft. Sophia Somajo", youtubeId: "sJXZ9Acc5vs", duration: 230 },
  { id: "alan-walker-play", title: "Play", artist: "Alan Walker, K-391 & Tungevaag", youtubeId: "YnwsMEabmSo", duration: 165 },
  { id: "alan-walker-sing-me-to-sleep", title: "Sing Me to Sleep", artist: "Alan Walker", youtubeId: "2i2khp_npdE", duration: 207 },

  // ═══════════════════════════════════════════════════════════
  // Kelly Boesch
  // ═══════════════════════════════════════════════════════════
  { id: "kelly-boesch-little-alien", title: "Little Alien", artist: "Kelly Boesch", youtubeId: "OmG5cT5Wlm4", duration: 180 },
  { id: "kelly-boesch-bite-my-lip", title: "Bite My Lip", artist: "Kelly Boesch", youtubeId: "j_2_-4dFZ8k", duration: 185 },
  { id: "kelly-boesch-you-dont-fool-me", title: "You Don't Fool Me", artist: "Kelly Boesch", youtubeId: "q-P4l7Q6y3Q", duration: 190 },
  { id: "kelly-boesch-indigo-sun", title: "Indigo Sun", artist: "Kelly Boesch", youtubeId: "ZJDx1qGKf3c", duration: 200 },
  { id: "kelly-boesch-into-the-mist", title: "Into the Mist", artist: "Kelly Boesch", youtubeId: "8AvqT3PVfIc", duration: 195 },

  // ═══════════════════════════════════════════════════════════
  // Stephen Sanchez
  // ═══════════════════════════════════════════════════════════
  { id: "stephen-sanchez-high", title: "High", artist: "Stephen Sanchez", album: "Angel Face", youtubeId: "LdH_6Wje1zQ", duration: 192 },

  // ═══════════════════════════════════════════════════════════
  // Arctic Monkeys
  // ═══════════════════════════════════════════════════════════
  { id: "arctic-monkeys-wanna-be-yours", title: "I Wanna Be Yours", artist: "Arctic Monkeys", album: "AM", youtubeId: "nyuo9-OjNNg", duration: 186 },

  // ═══════════════════════════════════════════════════════════
  // Gracie Abrams
  // ═══════════════════════════════════════════════════════════
  { id: "gracie-abrams-i-miss-you-im-sorry", title: "I miss you, I'm sorry", artist: "Gracie Abrams", youtubeId: "TXHY0FP6Tn0", duration: 196 },

  // ═══════════════════════════════════════════════════════════
  // More ABBA
  // ═══════════════════════════════════════════════════════════
  { id: "abba-gimme-gimme-gimme", title: "Gimme! Gimme! Gimme!", artist: "ABBA", album: "Voulez-Vous", youtubeId: "XEjLoHdbVeE", duration: 285 },

  // ═══════════════════════════════════════════════════════════
  // Classic / iconic tracks
  // ═══════════════════════════════════════════════════════════
  { id: "billy-idol-eyes-without-a-face", title: "Eyes Without a Face", artist: "Billy Idol", album: "Rebel Yell", youtubeId: "9OFpfTd0EIs", duration: 296 },
  { id: "queen-show-must-go-on", title: "The Show Must Go On", artist: "Queen", album: "Innuendo", youtubeId: "t99KH0TR-J4", duration: 264 },
  { id: "metallica-master-of-puppets", title: "Master of Puppets", artist: "Metallica", album: "Master of Puppets", youtubeId: "E0ozmU9cJDg", duration: 515 },
  { id: "paul-anka-put-your-head", title: "Put Your Head on My Shoulder", artist: "Paul Anka", youtubeId: "kvazBqAlx58", duration: 155 },
  { id: "tatu-all-the-things-she-said", title: "All the Things She Said", artist: "t.A.T.u.", album: "200 km/h in the Wrong Lane", youtubeId: "8mGBaXPlri8", duration: 212 },
  { id: "dido-thank-you", title: "Thank You", artist: "Dido", album: "No Angel", youtubeId: "1TO48Cnl66w", duration: 234 },
  { id: "eminem-stan", title: "Stan", artist: "Eminem ft. Dido", album: "The Marshall Mathers LP", youtubeId: "gOMhN-hfMtY", duration: 404 },
  { id: "rains-of-castamere", title: "The Rains of Castamere", artist: "Serj Tankian", album: "Game of Thrones", youtubeId: "ECewrAld3zw", duration: 136 },
  { id: "piazzolla-libertango", title: "Libertango", artist: "Astor Piazzolla", youtubeId: "A-HDRCaWCxw", duration: 198 },
  { id: "lp-lost-on-you", title: "Lost on You", artist: "LP", album: "Lost on You", youtubeId: "wDjeBNv6ip0", duration: 240 },
  { id: "rewrite-the-stars", title: "Rewrite the Stars", artist: "Zac Efron & Zendaya", album: "The Greatest Showman", youtubeId: "RI-M9NMhMgc", duration: 215 },
  { id: "seafret-atlantis", title: "Atlantis", artist: "Seafret", album: "Tell Me It's Real", youtubeId: "JD2I4MAmyQA", duration: 224 },
];
