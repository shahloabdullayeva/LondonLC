/* global React */
const { useState, useEffect, useMemo, useRef } = React;

// ========== DATA ==========
const ME = {
  name: 'Aziza Karimova',
  username: 'AzizaK22',
  group: 'SP-IELTS 1',
  joined: '14 Mar 2026',
  initials: 'AK',
  streak: 12,
  goal: 7.0,
  current: 6.5,
};

const QUOTES = [
  { t: '"Live in the present, remember the past, and fear not the future, for it doesn\'t exist and never shall. There is only now."', a: 'Christopher Paolini' },
  { t: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit."', a: 'Will Durant' },
  { t: '"A different language is a different vision of life."', a: 'Federico Fellini' },
  { t: '"The limits of my language mean the limits of my world."', a: 'Ludwig Wittgenstein' },
];

const RECENT = [
  { test: 'Cambridge IELTS 20 — Reading', type: 'reading', score: 32, max: 40, band: 7.0, when: 'Yesterday · 18:12', dur: '58m', status: 'completed' },
  { test: 'Cambridge IELTS 19 — Listening', type: 'listening', score: 26, max: 40, band: 6.0, when: '15 Apr · 10:40', dur: '31m', status: 'completed' },
  { test: 'Writing Task 2 — "Remote work"', type: 'writing', score: null, max: null, band: 6.5, when: '13 Apr · 20:05', dur: '42m', status: 'graded' },
  { test: 'Cambridge IELTS 20 — Listening', type: 'listening', score: 0, max: 40, band: null, when: '12 Apr · 19:30', dur: '3m', status: 'cancelled' },
  { test: 'Cambridge IELTS 18 — Reading', type: 'reading', score: 30, max: 40, band: 6.5, when: '10 Apr · 16:20', dur: '60m', status: 'completed' },
  { test: 'Vocabulary — Unit 12', type: 'practice', score: 18, max: 20, band: null, when: '08 Apr · 21:00', dur: '11m', status: 'completed' },
];

const LEADERBOARD = [
  { nm: 'Muhammadsafo A.', sc: 7.5, stk: 31 },
  { nm: 'Zara Ashley', sc: 7.0, stk: 22 },
  { nm: 'Aziza Karimova', sc: 6.5, stk: 12, me: true },
  { nm: 'Yosina Atamirzayeva', sc: 6.5, stk: 8 },
  { nm: 'Bekzod Qaraboyev', sc: 6.0, stk: 14 },
  { nm: 'Faxriddin Bozorov', sc: 6.0, stk: 5 },
  { nm: 'Muhammadzohir M.', sc: 5.5, stk: 9 },
];

const TASKS = [
  { d: 'Due today', t: 'Writing Task 1 — describe chart', kind: 'writing', min: 20 },
  { d: 'Tomorrow', t: 'Reading practice · Academic set 4', kind: 'reading', min: 60 },
  { d: 'Thu 20 Apr', t: 'Listening mock · Cambridge 19', kind: 'listening', min: 30 },
  { d: 'Fri 22 Apr', t: 'Vocabulary quiz · Unit 13', kind: 'practice', min: 15 },
];

const PODCASTS = [
  { cat: 'BBC 6 Minute English', t: 'How much sleep do you need?', min: 6, host: 'Neil & Rob', new: true },
  { cat: 'BBC 6 Minute English', t: 'Is coffee good for you?', min: 6, host: 'Neil & Sam' },
  { cat: 'BBC 6 Minute English', t: 'What makes us happy?', min: 6, host: 'Neil & Rob' },
  { cat: 'BBC 6 Minute English', t: 'Is social media making us lonely?', min: 6, host: 'Beth & Neil' },
  { cat: 'BBC 6 Minute English', t: 'The problem with plastic', min: 6, host: 'Catherine & Neil' },
  { cat: 'TED-Ed', t: 'The benefits of a bilingual brain', min: 5, host: 'Mia Nacamulli' },
  { cat: 'TED-Ed', t: 'How languages evolve', min: 4, host: 'Alex Gendler' },
  { cat: 'TED-Ed', t: 'Why you procrastinate', min: 5, host: 'Tim Urban' },
  { cat: 'TED-Ed', t: 'What happens when you read?', min: 4, host: 'Lisa Bu' },
  { cat: 'TED-Ed', t: 'How does your memory work?', min: 4, host: 'Brynn Sherman' },
  { cat: 'TED', t: 'Inside the mind of a master procrastinator', min: 14, host: 'Tim Urban' },
  { cat: 'TED', t: 'How to speak so people want to listen', min: 10, host: 'Julian Treasure' },
];

const ARTICLES = [
  { cat: 'Geopolitics', t: 'How Hungary can now lead the fight against illiberalism', src: 'The Economist', min: 6 },
  { cat: 'Economics', t: 'Africa is undergoing social change without economic transformation', src: 'The Economist', min: 10 },
  { cat: 'Geopolitics', t: 'The Gulf war has settled into an uneasy limbo', src: 'The Economist', min: 8 },
  { cat: 'Politics', t: 'How Vladimir Putin\'s propaganda works', src: 'The Economist', min: 7 },
  { cat: 'Geopolitics', t: 'How the Gulf\'s war is becoming Asia\'s crisis too', src: 'The Economist', min: 8 },
  { cat: 'Technology', t: 'How the young use AI matters more than for how long', src: 'Sarra Sigaier, The Economist', min: 6 },
  { cat: 'Science', t: 'A new map of the human cell reveals hidden architecture', src: 'Nature', min: 9 },
  { cat: 'Business', t: 'The quiet industrial revolution in the Baltics', src: 'The Economist', min: 7 },
  { cat: 'Technology', t: 'Why on-device AI is the next battleground', src: 'Wired', min: 5 },
];

const MUSIC = [
  { t: 'Lofi Girl — beats to study/relax to', channel: 'Lofi Girl', mood: 'Background', min: '24/7', yt: 'jfKfPfyJRdk', live: true },
  { t: 'Deep Focus — study concentration mix', channel: 'Chillhop Music', mood: 'Deep focus', min: 180, yt: 'n61ULEU7CO0' },
  { t: 'Classical music for studying & brain power', channel: 'HALIDONMUSIC', mood: 'Focus', min: 120, yt: 'cGMWL8cOeAU' },
  { t: 'Max Richter — On the Nature of Daylight', channel: 'Deutsche Grammophon', mood: 'Deep focus', min: 6, yt: 'rVN1B-tUpgs' },
  { t: 'Ólafur Arnalds — Near Light (live)', channel: 'Ólafur Arnalds', mood: 'Study', min: 4, yt: '74eCp5kQa3Y' },
  { t: 'Nils Frahm — Says', channel: 'Erased Tapes', mood: 'Deep focus', min: 8, yt: 'dIwwjy4slI8' },
  { t: 'Erik Satie — Gymnopédie No.1', channel: 'Rousseau', mood: 'Calm', min: 3, yt: 'S-Xm7s9eGxU' },
  { t: 'Jazz café — morning coffee relaxing mix', channel: 'Cozy Jazz', mood: 'Morning', min: 120, yt: 'Dx5qFachd3A' },
];

const MESSAGES = [
  {
    id: 1, nm: 'Ms. Shahlo (Teacher)', role: 'teacher', unread: 2, pv: 'Great improvement on your last reading task — let\'s push for…', last: '18:22',
    msgs: [
      { from: 'them', t: 'Hi Aziza — I reviewed your Writing Task 2 on remote work.', when: 'Yesterday · 10:04' },
      { from: 'them', t: 'Structure is much stronger this time. Your thesis is clear, and the two body paragraphs each have a defensible claim. Good work 👏', when: 'Yesterday · 10:04' },
      { from: 'me', t: 'Thank you! I practiced the signposting you suggested last week.', when: 'Yesterday · 12:18' },
      { from: 'them', t: 'It shows. Two things to keep pushing on: (1) lexical range — you lean on "important" and "problem" too often, and (2) cohesion between paragraphs. Try linking back to your thesis at each paragraph start.', when: 'Yesterday · 14:30' },
      { from: 'them', t: 'Can you send me another Task 2 by Friday? Pick any topic from the band 7 prompt bank.', when: 'Today · 18:22' },
    ],
  },
  { id: 2, nm: 'Mr. Bekzod (Speaking)', role: 'teacher', unread: 0, pv: 'Nice job on Part 2 — remember the fluency trick we…', last: '14 Apr' },
  { id: 3, nm: 'Study group · SP-IELTS 1', role: 'group', unread: 0, pv: 'Yosina: anyone have notes from today\'s listening?', last: '12 Apr' },
  { id: 4, nm: 'London · LC admin', role: 'admin', unread: 0, pv: 'Reminder: mock exam on Saturday at 10:00 AM', last: '09 Apr' },
];

const READING_PASSAGE = {
  t: 'The Return of the Lynx',
  a: 'From: Cambridge IELTS 20 · Reading Passage 2 · Academic',
  ps: [
    'Across Europe, a remarkable ecological revival is quietly taking place. After centuries of persecution and near-extinction, the Eurasian lynx — Europe\'s largest native cat — is returning to forests it last roamed when the continent\'s human population was a fraction of its current size. Conservationists describe the species as a "keystone predator": its presence reshapes the behaviour of deer and smaller carnivores, allowing young trees to establish themselves and forest ecosystems to recover in ways that are difficult to achieve through human intervention alone.',
    'The lynx\'s recovery has not been accidental. Beginning in the 1970s, a patchwork of reintroduction programmes released small founder populations in Switzerland, Slovenia, France, Italy and Germany. Each programme faced different challenges: in the Alps, isolation and small population sizes raised concerns about genetic diversity; in the lowlands, roads and railways fragmented hunting territories. Researchers estimate that a single lynx requires between 100 and 250 square kilometres of forest to thrive — a range that most modern European landscapes cannot easily provide.',
    'Public perception has proven as important as habitat. In regions where livestock farming is common, the return of a large predator has sparked understandable concern. Studies from Norway and Sweden suggest that compensation schemes and improved fencing can substantially reduce losses, but the social licence for conservation remains fragile. A 2024 survey conducted in the Jura mountains found that while a majority of residents supported the lynx in principle, this support softened considerably among farmers and hunters who described direct conflicts.',
    'Perhaps the most promising development has been the emergence of cross-border cooperation. The Alpine lynx population — once three isolated clusters — is slowly becoming connected again, thanks to wildlife corridors negotiated between neighbouring countries. It is a reminder that conservation is, ultimately, a political achievement as much as an ecological one.',
  ],
};

const Q_SET = [
  { n: 14, prompt: 'According to the passage, the Eurasian lynx is described as a "keystone predator" because it', opts: [
    'has been persecuted for centuries across Europe',
    'requires a very large hunting territory',
    'influences the behaviour of other species in the ecosystem',
    'has genetic diversity concerns in small populations',
  ]},
  { n: 15, prompt: 'Reintroduction programmes in the 1970s took place in all of the following countries EXCEPT', opts: [
    'Switzerland', 'Norway', 'Slovenia', 'France',
  ]},
  { n: 16, prompt: 'What does the writer suggest is the most significant recent development for lynx conservation?', opts: [
    'Better fencing for livestock',
    'Compensation schemes for farmers',
    'Cross-border wildlife corridors',
    'Larger founder populations',
  ]},
  { n: 17, prompt: 'The 2024 survey in the Jura mountains found that support for the lynx', opts: [
    'was uniformly strong across all groups',
    'varied depending on respondents\' livelihoods',
    'declined over the course of the study',
    'was highest among farmers and hunters',
  ]},
  { n: 18, prompt: 'According to the passage, a single lynx typically needs', opts: [
    'less than 100 square kilometres',
    'between 100 and 250 square kilometres',
    'at least 500 square kilometres',
    'the passage does not specify',
  ]},
];

// Expose globally
Object.assign(window, {
  ME, QUOTES, RECENT, LEADERBOARD, TASKS, PODCASTS, ARTICLES, MUSIC, MESSAGES, READING_PASSAGE, Q_SET
});
