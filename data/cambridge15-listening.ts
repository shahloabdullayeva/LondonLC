import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 15 – LISTENING TEST 1
// Parts: 1) Bankside Recruitment Agency — Becky (notes)
//        2) Matthews Island Holidays (MCQ + Isle of Man
//           itinerary table)
//        3) Birth order & personality (matching + MCQ +
//           Choose-TWO on sibling-rivalry lessons)
//        4) The Eucalyptus Tree in Australia (notes)
// ============================================================
export const cambridge15_listening_t1: IELTSTest = {
  id: "cam15-listening-t1",
  title: "Cambridge IELTS 15 – Listening Test 1",
  bookNumber: 15,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam15-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam15-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Bankside Recruitment Agency

●  Address of agency: 497 Eastside, Docklands
●  Name of agent: Becky 1 _______
●  Phone number: 07866 510333
●  Best to call her in the 2 _______

Typical jobs
●  Clerical and admin roles, mainly in the finance industry
●  Must have good 3 _______ skills
●  Jobs are usually for at least one 4 _______
●  Pay is usually £ 5 _______ per hour

Registration process
●  Wear a 6 _______ to the interview
●  Must bring your 7 _______ to the interview
●  They will ask questions about each applicant's 8 _______

Advantages of using an agency
●  The 9 _______ you receive at interview will benefit you
●  Will get access to vacancies which are not advertised
●  Less 10 _______ is involved in applying for jobs`,
      questions: [
        { id: "cam15-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Name of agent: Becky _______", correctAnswer: "Jamieson", points: 1 },
        { id: "cam15-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. Best to call her in the _______", correctAnswer: "afternoon", points: 1 },
        { id: "cam15-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. Must have good _______ skills", correctAnswer: "communication", points: 1 },
        { id: "cam15-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. Jobs are usually for at least one _______", correctAnswer: "week", points: 1 },
        { id: "cam15-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. Pay is usually £ _______ per hour", correctAnswer: "10/ten", points: 1 },
        { id: "cam15-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. Wear a _______ to the interview", correctAnswer: "suit", points: 1 },
        { id: "cam15-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. Must bring your _______ to the interview", correctAnswer: "passport", points: 1 },
        { id: "cam15-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. questions about each applicant's _______", correctAnswer: "personality", points: 1 },
        { id: "cam15-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. The _______ you receive at interview will benefit you", correctAnswer: "feedback", points: 1 },
        { id: "cam15-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Less _______ is involved in applying for jobs", correctAnswer: "time", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam15-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15–20: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageTitle: "Matthews Island Holidays — Isle of Man",
      passageText: `Timetable for Isle of Man holiday

Activity                                    | Notes
Day 1 — Arrive
  Introduction by manager            | Hotel dining room has view of the 15 _______
Day 2 — Tynwald Exhibition and Peel
                                       | Tynwald may have been founded in 16 _______, not 979.
Day 3 — Trip to Snaefell
  Travel along promenade in a tram   | train to Laxey; train to the 17 _______ of Snaefell
Day 4 — Free day
                                       | Company provides a 18 _______ for local transport and heritage sites.
Day 5 — Take the 19 _______ railway train from Douglas to Port Erin
                                       | Free time, then coach to Castletown – former 20 _______ has old castle.
Day 6 — Leave
  Leave the island by ferry or plane`,
      questions: [
        {
          id: "cam15-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. According to the speaker, the company",
          options: [
            { label: "A  has been in business for longer than most of its competitors.", value: "A" },
            { label: "B  arranges holidays to more destinations than its competitors.", value: "B" },
            { label: "C  has more customers than its competitors.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Where can customers meet the tour manager before travelling to the Isle of Man?",
          options: [
            { label: "A  Liverpool", value: "A" },
            { label: "B  Heysham", value: "B" },
            { label: "C  Luton", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t1-s2-q13", number: 13, type: "multiple_choice",
          question: "13. How many lunches are included in the price of the holiday?",
          options: [
            { label: "A  three", value: "A" },
            { label: "B  four", value: "B" },
            { label: "C  five", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t1-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Customers have to pay extra for",
          options: [
            { label: "A  guaranteeing themselves a larger room.", value: "A" },
            { label: "B  booking at short notice.", value: "B" },
            { label: "C  transferring to another date.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam15-l-t1-s2-q15", number: 15, type: "table_completion", question: "15. Hotel dining room has view of the _______", correctAnswer: "river", points: 1 },
        { id: "cam15-l-t1-s2-q16", number: 16, type: "table_completion", question: "16. Tynwald may have been founded in _______, not 979", correctAnswer: "1422", points: 1 },
        { id: "cam15-l-t1-s2-q17", number: 17, type: "table_completion", question: "17. train to the _______ of Snaefell", correctAnswer: "top", points: 1 },
        { id: "cam15-l-t1-s2-q18", number: 18, type: "table_completion", question: "18. Company provides a _______ for local transport and heritage sites", correctAnswer: "pass", points: 1 },
        { id: "cam15-l-t1-s2-q19", number: 19, type: "table_completion", question: "19. Take the _______ railway train from Douglas to Port Erin", correctAnswer: "steam", points: 1 },
        { id: "cam15-l-t1-s2-q20", number: 20, type: "table_completion", question: "20. Castletown – former _______ has old castle", correctAnswer: "capital", points: 1 },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam15-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Match each family position with a personality trait. Choose SIX answers from the box (A–H).
Questions 27 & 28: Choose the correct letter, A, B or C.
Questions 29 & 30: Choose TWO letters, A–E.`,
      passageTitle: "Birth order and personality",
      questions: [
        {
          id: "cam15-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–26: What did findings of previous research claim about the personality traits a child is likely to have because of their position in the family? Choose SIX answers from the box (A–H).\n\nA  outgoing\nB  selfish\nC  independent\nD  attention-seeking\nE  introverted\nF  co-operative\nG  caring\nH  competitive`,
          type: "matching", question: "21. the eldest child",
          options: [
            { label: "A  outgoing", value: "A" },
            { label: "B  selfish", value: "B" },
            { label: "C  independent", value: "C" },
            { label: "D  attention-seeking", value: "D" },
            { label: "E  introverted", value: "E" },
            { label: "F  co-operative", value: "F" },
            { label: "G  caring", value: "G" },
            { label: "H  competitive", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q22", number: 22, type: "matching", question: "22. a middle child",
          options: [
            { label: "A  outgoing", value: "A" },
            { label: "B  selfish", value: "B" },
            { label: "C  independent", value: "C" },
            { label: "D  attention-seeking", value: "D" },
            { label: "E  introverted", value: "E" },
            { label: "F  co-operative", value: "F" },
            { label: "G  caring", value: "G" },
            { label: "H  competitive", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q23", number: 23, type: "matching", question: "23. the youngest child",
          options: [
            { label: "A  outgoing", value: "A" },
            { label: "B  selfish", value: "B" },
            { label: "C  independent", value: "C" },
            { label: "D  attention-seeking", value: "D" },
            { label: "E  introverted", value: "E" },
            { label: "F  co-operative", value: "F" },
            { label: "G  caring", value: "G" },
            { label: "H  competitive", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q24", number: 24, type: "matching", question: "24. a twin",
          options: [
            { label: "A  outgoing", value: "A" },
            { label: "B  selfish", value: "B" },
            { label: "C  independent", value: "C" },
            { label: "D  attention-seeking", value: "D" },
            { label: "E  introverted", value: "E" },
            { label: "F  co-operative", value: "F" },
            { label: "G  caring", value: "G" },
            { label: "H  competitive", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q25", number: 25, type: "matching", question: "25. an only child",
          options: [
            { label: "A  outgoing", value: "A" },
            { label: "B  selfish", value: "B" },
            { label: "C  independent", value: "C" },
            { label: "D  attention-seeking", value: "D" },
            { label: "E  introverted", value: "E" },
            { label: "F  co-operative", value: "F" },
            { label: "G  caring", value: "G" },
            { label: "H  competitive", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q26", number: 26, type: "matching", question: "26. a child with much older siblings",
          options: [
            { label: "A  outgoing", value: "A" },
            { label: "B  selfish", value: "B" },
            { label: "C  independent", value: "C" },
            { label: "D  attention-seeking", value: "D" },
            { label: "E  introverted", value: "E" },
            { label: "F  co-operative", value: "F" },
            { label: "G  caring", value: "G" },
            { label: "H  competitive", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q27", number: 27,
          groupLabel: `Questions 27 and 28: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "27. What do the speakers say about the evidence relating to birth order and academic success?",
          options: [
            { label: "A  There is conflicting evidence about whether oldest children perform best in intelligence tests.", value: "A" },
            { label: "B  There is little doubt that birth order has less influence on academic achievement than socio-economic status.", value: "B" },
            { label: "C  Some studies have neglected to include important factors such as family size.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q28", number: 28, type: "multiple_choice",
          question: "28. What does Ruth think is surprising about the difference in oldest children's academic performance?",
          options: [
            { label: "A  It is mainly thanks to their roles as teachers for their younger siblings.", value: "A" },
            { label: "B  The advantages they have only lead to a slightly higher level of achievement.", value: "B" },
            { label: "C  The extra parental attention they receive at a young age makes little difference.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q29", number: 29,
          groupLabel: `Questions 29 and 30: Choose TWO letters, A–E.\n\nWhich TWO experiences of sibling rivalry do the speakers agree has been valuable for them?\n\nA  learning to share\nB  learning to stand up for oneself\nC  learning to be a good loser\nD  learning to be tolerant\nE  learning to say sorry\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "29. Choose TWO (first answer)",
          options: [
            { label: "A  learning to share", value: "A" },
            { label: "B  learning to stand up for oneself", value: "B" },
            { label: "C  learning to be a good loser", value: "C" },
            { label: "D  learning to be tolerant", value: "D" },
            { label: "E  learning to say sorry", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam15-l-t1-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Choose TWO (second answer)",
          options: [
            { label: "A  learning to share", value: "A" },
            { label: "B  learning to stand up for oneself", value: "B" },
            { label: "C  learning to be a good loser", value: "C" },
            { label: "D  learning to be tolerant", value: "D" },
            { label: "E  learning to say sorry", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam15-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `The Eucalyptus Tree in Australia

Importance
●  it provides 31 _______ and food for a wide range of species
●  its leaves provide 32 _______ which is used to make a disinfectant

Reasons for present decline in number

A) Diseases

(i) 'Mundulla Yellows'
●  Cause
   – lime used for making 33 _______ was absorbed
   – trees were unable to take in necessary iron through their roots

(ii) 'Bell-miner Associated Die-back'
●  Cause
   – 34 _______ feed on eucalyptus leaves
   – they secrete a substance containing sugar
   – bell-miner birds are attracted by this and keep away other species

B) Bushfires

William Jackson's theory:
●  high-frequency bushfires have impact on vegetation, resulting in the growth of 35 _______
●  mid-frequency bushfires result in the growth of eucalyptus forests, because they:
   – make more 36 _______ available to the trees
   – maintain the quality of the 37 _______
●  low-frequency bushfires result in the growth of 38 '_______ rainforest', which is:
   – a 39 _______ ecosystem
   – an ideal environment for the 40 _______ of the bell-miner`,
      questions: [
        { id: "cam15-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. it provides _______ and food for a wide range of species", correctAnswer: "shelter", points: 1 },
        { id: "cam15-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. its leaves provide _______ which is used to make a disinfectant", correctAnswer: "oil", points: 1 },
        { id: "cam15-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. lime used for making _______ was absorbed", correctAnswer: "roads", points: 1 },
        { id: "cam15-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. _______ feed on eucalyptus leaves", correctAnswer: "insects", points: 1 },
        { id: "cam15-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. high-frequency bushfires result in the growth of _______", correctAnswer: "grass/grasses", points: 1 },
        { id: "cam15-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. make more _______ available to the trees", correctAnswer: "water", points: 1 },
        { id: "cam15-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. maintain the quality of the _______", correctAnswer: "soil", points: 1 },
        { id: "cam15-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. result in the growth of '_______ rainforest'", correctAnswer: "dry", points: 1 },
        { id: "cam15-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. a _______ ecosystem", correctAnswer: "simple", points: 1 },
        { id: "cam15-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. an ideal environment for the _______ of the bell-miner", correctAnswer: "nest/nests", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 15 – LISTENING TEST 2
// Parts: 1) Festival information (table + notes — concert, ballet,
//           play, dance show, workshops, outdoor activities)
//        2) Minster Park (MCQ + map labelling A–I)
//        3) Display on Charles Dickens (two Choose-TWO + novel
//           → topic matching)
//        4) Agricultural programme in Mozambique (notes)
// ============================================================
export const cambridge15_listening_t2: IELTSTest = {
  id: "cam15-listening-t2",
  title: "Cambridge IELTS 15 – Listening Test 2",
  bookNumber: 15,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam15-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam15-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the table and notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Festival information

Date          | Type of event    | Details
17th          | a concert        | performers from Canada
18th          | a ballet         | company called 1 _______
19th–20th     | a play           | type of play: a comedy called Jemima has had a good 2 _______
(afternoon)   |                  |
20th          | a 3 _______      | show is called 4 _______
(evening)     | show             |

Workshops
●  Making 5 _______ food
●  (children only) Making 6 _______
●  (adults only) Making toys from 7 _______ using various tools

Outdoor activities
●  Swimming in the 8 _______
●  Walking in the woods, led by an expert on 9 _______

See the festival organiser's 10 _______ for more information`,
      questions: [
        { id: "cam15-l-t2-s1-q1", number: 1, type: "table_completion", question: "1. ballet: company called _______", correctAnswer: "Eustatis", points: 1 },
        { id: "cam15-l-t2-s1-q2", number: 2, type: "table_completion", question: "2. comedy called Jemima has had a good _______", correctAnswer: "review", points: 1 },
        { id: "cam15-l-t2-s1-q3", number: 3, type: "table_completion", question: "3. a _______ show", correctAnswer: "dance", points: 1 },
        { id: "cam15-l-t2-s1-q4", number: 4, type: "table_completion", question: "4. show is called _______", correctAnswer: "Chat", points: 1 },
        { id: "cam15-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. Making _______ food", correctAnswer: "healthy", points: 1 },
        { id: "cam15-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. (children only) Making _______", correctAnswer: "posters", points: 1 },
        { id: "cam15-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. Making toys from _______ using various tools", correctAnswer: "wood", points: 1 },
        { id: "cam15-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. Swimming in the _______", correctAnswer: "lake", points: 1 },
        { id: "cam15-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. Walking in the woods, led by an expert on _______", correctAnswer: "insects", points: 1 },
        { id: "cam15-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. See the festival organiser's _______ for more information", correctAnswer: "blog", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam15-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15–20: Label the map of Minster Park below. Write the correct letter, A–I, next to each location.`,
      passageTitle: "Minster Park",
      diagramUrl: imageUrl("cam15test2map.png"),
      questions: [
        {
          id: "cam15-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. The park was originally established",
          options: [
            { label: "A  as an amenity provided by the city council.", value: "A" },
            { label: "B  as land belonging to a private house.", value: "B" },
            { label: "C  as a shared area set up by the local community.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Why is there a statue of Diane Gosforth in the park?",
          options: [
            { label: "A  She was a resident who helped to lead a campaign.", value: "A" },
            { label: "B  She was a council member responsible for giving the public access.", value: "B" },
            { label: "C  She was a senior worker at the park for many years.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. During the First World War, the park was mainly used for",
          options: [
            { label: "A  exercises by troops.", value: "A" },
            { label: "B  growing vegetables.", value: "B" },
            { label: "C  public meetings.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. When did the physical transformation of the park begin?",
          options: [
            { label: "A  2013", value: "A" },
            { label: "B  2015", value: "B" },
            { label: "C  2016", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Label the map of Minster Park above. Write the correct letter, A–I, next to each location.`,
          type: "matching", question: "15. statue of Diane Gosforth",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q16", number: 16, type: "matching", question: "16. wooden sculptures",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q17", number: 17, type: "matching", question: "17. playground",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q18", number: 18, type: "matching", question: "18. maze",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q19", number: 19, type: "matching", question: "19. tennis courts",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam15-l-t2-s2-q20", number: 20, type: "matching", question: "20. fitness area",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "D", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam15-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21 & 22: Choose TWO letters, A–E.
Questions 23 & 24: Choose TWO letters, A–E.
Questions 25–30: Match each novel with a topic. Choose SIX answers from the box (A–H).`,
      passageTitle: "Cathy & Graham — Charles Dickens display",
      questions: [
        {
          id: "cam15-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO groups of people is the display primarily intended for?\n\nA  students from the English department\nB  residents of the local area\nC  the university's teaching staff\nD  potential new students\nE  students from other departments\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  students from the English department", value: "A" },
            { label: "B  residents of the local area", value: "B" },
            { label: "C  the university's teaching staff", value: "C" },
            { label: "D  potential new students", value: "D" },
            { label: "E  students from other departments", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  students from the English department", value: "A" },
            { label: "B  residents of the local area", value: "B" },
            { label: "C  the university's teaching staff", value: "C" },
            { label: "D  potential new students", value: "D" },
            { label: "E  students from other departments", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhat are Cathy and Graham's TWO reasons for choosing the novelist Charles Dickens?\n\nA  His speeches inspired others to try to improve society.\nB  He used his publications to draw attention to social problems.\nC  His novels are well-known now.\nD  He was consulted on a number of social issues.\nE  His reputation has changed in recent times.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  His speeches inspired others to try to improve society.", value: "A" },
            { label: "B  He used his publications to draw attention to social problems.", value: "B" },
            { label: "C  His novels are well-known now.", value: "C" },
            { label: "D  He was consulted on a number of social issues.", value: "D" },
            { label: "E  His reputation has changed in recent times.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  His speeches inspired others to try to improve society.", value: "A" },
            { label: "B  He used his publications to draw attention to social problems.", value: "B" },
            { label: "C  His novels are well-known now.", value: "C" },
            { label: "D  He was consulted on a number of social issues.", value: "D" },
            { label: "E  His reputation has changed in recent times.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What topic do Cathy and Graham choose to illustrate with each novel? Choose SIX answers from the box (A–H).\n\nA  poverty\nB  education\nC  Dickens's travels\nD  entertainment\nE  crime and the law\nF  wealth\nG  medicine\nH  a woman's life`,
          type: "matching", question: "25. The Pickwick Papers",
          options: [
            { label: "A  poverty", value: "A" },
            { label: "B  education", value: "B" },
            { label: "C  Dickens's travels", value: "C" },
            { label: "D  entertainment", value: "D" },
            { label: "E  crime and the law", value: "E" },
            { label: "F  wealth", value: "F" },
            { label: "G  medicine", value: "G" },
            { label: "H  a woman's life", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q26", number: 26, type: "matching", question: "26. Oliver Twist",
          options: [
            { label: "A  poverty", value: "A" },
            { label: "B  education", value: "B" },
            { label: "C  Dickens's travels", value: "C" },
            { label: "D  entertainment", value: "D" },
            { label: "E  crime and the law", value: "E" },
            { label: "F  wealth", value: "F" },
            { label: "G  medicine", value: "G" },
            { label: "H  a woman's life", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q27", number: 27, type: "matching", question: "27. Nicholas Nickleby",
          options: [
            { label: "A  poverty", value: "A" },
            { label: "B  education", value: "B" },
            { label: "C  Dickens's travels", value: "C" },
            { label: "D  entertainment", value: "D" },
            { label: "E  crime and the law", value: "E" },
            { label: "F  wealth", value: "F" },
            { label: "G  medicine", value: "G" },
            { label: "H  a woman's life", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q28", number: 28, type: "matching", question: "28. Martin Chuzzlewit",
          options: [
            { label: "A  poverty", value: "A" },
            { label: "B  education", value: "B" },
            { label: "C  Dickens's travels", value: "C" },
            { label: "D  entertainment", value: "D" },
            { label: "E  crime and the law", value: "E" },
            { label: "F  wealth", value: "F" },
            { label: "G  medicine", value: "G" },
            { label: "H  a woman's life", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q29", number: 29, type: "matching", question: "29. Bleak House",
          options: [
            { label: "A  poverty", value: "A" },
            { label: "B  education", value: "B" },
            { label: "C  Dickens's travels", value: "C" },
            { label: "D  entertainment", value: "D" },
            { label: "E  crime and the law", value: "E" },
            { label: "F  wealth", value: "F" },
            { label: "G  medicine", value: "G" },
            { label: "H  a woman's life", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam15-l-t2-s3-q30", number: 30, type: "matching", question: "30. Little Dorrit",
          options: [
            { label: "A  poverty", value: "A" },
            { label: "B  education", value: "B" },
            { label: "C  Dickens's travels", value: "C" },
            { label: "D  entertainment", value: "D" },
            { label: "E  crime and the law", value: "E" },
            { label: "F  wealth", value: "F" },
            { label: "G  medicine", value: "G" },
            { label: "H  a woman's life", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam15-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Agricultural programme in Mozambique

How the programme was organised
●  It focused on a dry and arid region in Chicualacuala district, near the Limpopo River.
●  People depended on the forest to provide charcoal as a source of income.
●  31 _______ was seen as the main priority to ensure the supply of water.
●  Most of the work organised by farmers' associations was done by 32 _______.
●  Fenced areas created to keep animals away from crops.
●  The programme provided
   –  33 _______ for the fences
   –  34 _______ for suitable crops
   –  water pumps.
●  The farmers provided
   –  labour
   –  35 _______ for the fences on their land.

Further developments
●  The marketing of produce was sometimes difficult due to lack of 36 _______.
●  Training was therefore provided in methods of food 37 _______.
●  Farmers made special places where 38 _______ could be kept.
●  Local people later suggested keeping 39 _______.

Evaluation and lessons learned
●  Agricultural production increased, improving incomes and food security.
●  Enough time must be allowed, particularly for the 40 _______ phase of the programme.`,
      questions: [
        { id: "cam15-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. _______ was seen as the main priority to ensure the supply of water", correctAnswer: "irrigation", points: 1 },
        { id: "cam15-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. Most of the work was done by _______", correctAnswer: "women", points: 1 },
        { id: "cam15-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. _______ for the fences", correctAnswer: "wire/wires", points: 1 },
        { id: "cam15-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. _______ for suitable crops", correctAnswer: "seed/seeds", points: 1 },
        { id: "cam15-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. _______ for the fences on their land", correctAnswer: "posts", points: 1 },
        { id: "cam15-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. difficult due to lack of _______", correctAnswer: "transport", points: 1 },
        { id: "cam15-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. methods of food _______", correctAnswer: "preservation", points: 1 },
        { id: "cam15-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. special places where _______ could be kept", correctAnswer: "fish/fishes", points: 1 },
        { id: "cam15-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. Local people later suggested keeping _______", correctAnswer: "bees", points: 1 },
        { id: "cam15-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. Enough time must be allowed, particularly for the _______ phase", correctAnswer: "design", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 15 – LISTENING TEST 3
// Parts: 1) Employment agency — two job options (notes)
//        2) Street Play Scheme — Alice (MCQ + two Choose-TWO)
//        3) Hazel's newspaper-analysis assignment (notes +
//           article-type decision matching A/B/C)
//        4) Early history of keeping clean (notes)
// ============================================================
export const cambridge15_listening_t3: IELTSTest = {
  id: "cam15-listening-t3",
  title: "Cambridge IELTS 15 – Listening Test 3",
  bookNumber: 15,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam15-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam15-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Employment Agency: Possible Jobs

First Job
Administrative assistant in a company that produces 1 _______ (North London)

Responsibilities
●  data entry
●  go to 2 _______ and take notes
●  general admin
●  management of 3 _______

Requirements
●  good computer skills including spreadsheets
●  good interpersonal skills
●  attention to 4 _______

Experience
●  need a minimum of 5 _______ of experience of teleconferencing

Second Job
Warehouse assistant in South London

Responsibilities
●  stock management
●  managing 6 _______

Requirements
●  ability to work with numbers
●  good computer skills
●  very organised and 7 _______
●  good communication skills
●  used to working in a 8 _______
●  able to cope with items that are 9 _______

Need experience of
●  driving in London
●  warehouse work
●  10 _______ service`,
      questions: [
        { id: "cam15-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. company that produces _______", correctAnswer: "furniture", points: 1 },
        { id: "cam15-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. go to _______ and take notes", correctAnswer: "meetings", points: 1 },
        { id: "cam15-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. management of _______", correctAnswer: "diary", points: 1 },
        { id: "cam15-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. attention to _______", correctAnswer: "detail/details", points: 1 },
        { id: "cam15-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. need a minimum of _______ of experience of teleconferencing", correctAnswer: "1 year/one year", points: 1 },
        { id: "cam15-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. managing _______", correctAnswer: "deliveries", points: 1 },
        { id: "cam15-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. very organised and _______", correctAnswer: "tidy", points: 1 },
        { id: "cam15-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. used to working in a _______", correctAnswer: "team", points: 1 },
        { id: "cam15-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. able to cope with items that are _______", correctAnswer: "heavy", points: 1 },
        { id: "cam15-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. _______ service", correctAnswer: "customer", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam15-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Choose the correct letter, A, B or C.
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Alice — Street Play Scheme",
      questions: [
        {
          id: "cam15-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11–16: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. When did the Street Play Scheme first take place?",
          options: [
            { label: "A  two years ago", value: "A" },
            { label: "B  three years ago", value: "B" },
            { label: "C  six years ago", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q12", number: 12, type: "multiple_choice",
          question: "12. How often is Beechwood Road closed to traffic now?",
          options: [
            { label: "A  once a week", value: "A" },
            { label: "B  on Saturdays and Sundays", value: "B" },
            { label: "C  once a month", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Who is responsible for closing the road?",
          options: [
            { label: "A  a council official", value: "A" },
            { label: "B  the police", value: "B" },
            { label: "C  local wardens", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Residents who want to use their cars",
          options: [
            { label: "A  have to park in another street.", value: "A" },
            { label: "B  must drive very slowly.", value: "B" },
            { label: "C  need permission from a warden.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q15", number: 15, type: "multiple_choice",
          question: "15. Alice says that Street Play Schemes are most needed in",
          options: [
            { label: "A  wealthy areas.", value: "A" },
            { label: "B  quiet suburban areas.", value: "B" },
            { label: "C  areas with heavy traffic.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q16", number: 16, type: "multiple_choice",
          question: "16. What has been the reaction of residents who are not parents?",
          options: [
            { label: "A  Many of them were unhappy at first.", value: "A" },
            { label: "B  They like seeing children play in the street.", value: "B" },
            { label: "C  They are surprised by the lack of noise.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhich TWO benefits for children does Alice think are the most important?\n\nA  increased physical activity\nB  increased sense of independence\nC  opportunity to learn new games\nD  opportunity to be part of a community\nE  opportunity to make new friends\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  increased physical activity", value: "A" },
            { label: "B  increased sense of independence", value: "B" },
            { label: "C  opportunity to learn new games", value: "C" },
            { label: "D  opportunity to be part of a community", value: "D" },
            { label: "E  opportunity to make new friends", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  increased physical activity", value: "A" },
            { label: "B  increased sense of independence", value: "B" },
            { label: "C  opportunity to learn new games", value: "C" },
            { label: "D  opportunity to be part of a community", value: "D" },
            { label: "E  opportunity to make new friends", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO results of the King Street experiment surprised Alice?\n\nA  more shoppers\nB  improved safety\nC  less air pollution\nD  more relaxed atmosphere\nE  less noise pollution\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  more shoppers", value: "A" },
            { label: "B  improved safety", value: "B" },
            { label: "C  less air pollution", value: "C" },
            { label: "D  more relaxed atmosphere", value: "D" },
            { label: "E  less noise pollution", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam15-l-t3-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  more shoppers", value: "A" },
            { label: "B  improved safety", value: "B" },
            { label: "C  less air pollution", value: "C" },
            { label: "D  more relaxed atmosphere", value: "D" },
            { label: "E  less noise pollution", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam15-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Complete the notes below. Write ONE WORD ONLY for each answer.
Questions 27–30: Match each type of article with Hazel's decision. Write the correct letter A, B or C.`,
      passageTitle: "Hazel — newspaper analysis assignment",
      passageText: `What Hazel should analyse about items in newspapers:
●  what 21 _______ the item is on
●  the 22 _______ of the item, including the headline
●  any 23 _______ accompanying the item
●  the 24 _______ of the item, e.g. what's made prominent
●  the writer's main 25 _______
●  the 26 _______ the writer may make about the reader`,
      questions: [
        { id: "cam15-l-t3-s3-q21", number: 21, type: "note_completion", question: "21. what _______ the item is on", correctAnswer: "page", points: 1 },
        { id: "cam15-l-t3-s3-q22", number: 22, type: "note_completion", question: "22. the _______ of the item, including the headline", correctAnswer: "size", points: 1 },
        { id: "cam15-l-t3-s3-q23", number: 23, type: "note_completion", question: "23. any _______ accompanying the item", correctAnswer: "graphic/graphics", points: 1 },
        { id: "cam15-l-t3-s3-q24", number: 24, type: "note_completion", question: "24. the _______ of the item, e.g. what's made prominent", correctAnswer: "structure", points: 1 },
        { id: "cam15-l-t3-s3-q25", number: 25, type: "note_completion", question: "25. the writer's main _______", correctAnswer: "purpose", points: 1 },
        { id: "cam15-l-t3-s3-q26", number: 26, type: "note_completion", question: "26. the _______ the writer may make about the reader", correctAnswer: "assumption/assumptions", points: 1 },
        {
          id: "cam15-l-t3-s3-q27", number: 27,
          groupLabel: `Questions 27–30: What does Hazel decide to do about each of the following types of articles? Write the correct letter A, B or C next to each type.\n\nA  She will definitely look for a suitable article.\nB  She may look for a suitable article.\nC  She definitely won't look for an article.\n\n(Letters may be used more than once.)`,
          type: "matching", question: "27. national news item",
          options: [
            { label: "A  She will definitely look for a suitable article.", value: "A" },
            { label: "B  She may look for a suitable article.", value: "B" },
            { label: "C  She definitely won't look for an article.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t3-s3-q28", number: 28, type: "matching", question: "28. editorial",
          options: [
            { label: "A  She will definitely look for a suitable article.", value: "A" },
            { label: "B  She may look for a suitable article.", value: "B" },
            { label: "C  She definitely won't look for an article.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t3-s3-q29", number: 29, type: "matching", question: "29. human interest",
          options: [
            { label: "A  She will definitely look for a suitable article.", value: "A" },
            { label: "B  She may look for a suitable article.", value: "B" },
            { label: "C  She definitely won't look for an article.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t3-s3-q30", number: 30, type: "matching", question: "30. arts",
          options: [
            { label: "A  She will definitely look for a suitable article.", value: "A" },
            { label: "B  She may look for a suitable article.", value: "B" },
            { label: "C  She definitely won't look for an article.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam15-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Early history of keeping clean

Prehistoric times:
●  water was used to wash off 31 _______

Ancient Babylon
●  soap-like material found in 32 _______ cylinders

Ancient Greece:
●  people cleaned themselves with sand and other substances
●  used a strigil – scraper made of 33 _______
●  washed clothes in streams

Ancient Germany and Gaul:
●  used soap to colour their 34 _______

Ancient Rome:
●  animal fat, ashes and clay mixed through action of rain, used for washing clothes
●  from about 312 BC, water carried to Roman 35 _______ by aqueducts

Europe in Middle Ages:
●  decline in bathing contributed to occurrence of 36 _______
●  37 _______ began to be added to soap

Europe from 17th century:
●  1600s: cleanliness and bathing started becoming usual
●  1791: Leblanc invented a way of making soda ash from 38 _______
●  early 1800s: Chevreul turned soapmaking into a 39 _______
●  from 1800s, there was no longer a 40 _______ on soap.`,
      questions: [
        { id: "cam15-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. water was used to wash off _______", correctAnswer: "mud", points: 1 },
        { id: "cam15-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. soap-like material found in _______ cylinders", correctAnswer: "clay", points: 1 },
        { id: "cam15-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. strigil – scraper made of _______", correctAnswer: "metal", points: 1 },
        { id: "cam15-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. used soap to colour their _______", correctAnswer: "hair", points: 1 },
        { id: "cam15-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. water carried to Roman _______ by aqueducts", correctAnswer: "bath/baths", points: 1 },
        { id: "cam15-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. decline in bathing contributed to occurrence of _______", correctAnswer: "disease/diseases", points: 1 },
        { id: "cam15-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. _______ began to be added to soap", correctAnswer: "perfume", points: 1 },
        { id: "cam15-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. Leblanc invented a way of making soda ash from _______", correctAnswer: "salt", points: 1 },
        { id: "cam15-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. Chevreul turned soapmaking into a _______", correctAnswer: "science", points: 1 },
        { id: "cam15-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. from 1800s, there was no longer a _______ on soap", correctAnswer: "tax", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 15 – LISTENING TEST 4
// Parts: 1) Customer satisfaction survey — train journey (form)
//        2) Park facilities (map labelling A–H + two Choose-TWO)
//        3) Annie & Jack — refrigeration presentation (MCQ +
//           topic → person matching A/B/C)
//        4) How the Industrial Revolution affected life in
//           Britain (notes)
// ============================================================
export const cambridge15_listening_t4: IELTSTest = {
  id: "cam15-listening-t4",
  title: "Cambridge IELTS 15 – Listening Test 4",
  bookNumber: 15,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam15-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam15-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Customer Satisfaction Survey

Customer details
Name: Sophie Bird
Occupation: 1 _______
Reason for travel today: 2 _______

Journey information
Name of station returning to: 3 _______
Type of ticket purchased: Standard 4 _______ ticket
Cost of ticket: £ 5 _______
When ticket was purchased: Yesterday
Where ticket was bought: 6 _______

Satisfaction with journey
Most satisfied with: the wifi
Least satisfied with: the 7 _______ this morning.

Satisfaction with station facilities
Most satisfied with: how much 8 _______ was provided
Least satisfied with: lack of seats, particularly on the 9 _______

Neither satisfied nor dissatisfied with: the 10 _______ available`,
      questions: [
        { id: "cam15-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. Occupation: _______", correctAnswer: "journalist", points: 1 },
        { id: "cam15-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. Reason for travel today: _______", correctAnswer: "shopping", points: 1 },
        { id: "cam15-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. Name of station returning to: _______", correctAnswer: "Staunfirth", points: 1 },
        { id: "cam15-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. Type of ticket purchased: Standard _______ ticket", correctAnswer: "return", points: 1 },
        { id: "cam15-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. Cost of ticket: £ _______", correctAnswer: "23.70", points: 1 },
        { id: "cam15-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. Where ticket was bought: _______", correctAnswer: "online", points: 1 },
        { id: "cam15-l-t4-s1-q7", number: 7, type: "note_completion", question: "7. Least satisfied with: the _______ this morning", correctAnswer: "delay", points: 1 },
        { id: "cam15-l-t4-s1-q8", number: 8, type: "note_completion", question: "8. how much _______ was provided", correctAnswer: "information", points: 1 },
        { id: "cam15-l-t4-s1-q9", number: 9, type: "note_completion", question: "9. lack of seats, particularly on the _______", correctAnswer: "platform/platforms", points: 1 },
        { id: "cam15-l-t4-s1-q10", number: 10, type: "note_completion", question: "10. the _______ available", correctAnswer: "parking", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam15-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Label the map below. Write the correct letter, A–H, next to each location.
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Park facilities",
      diagramUrl: imageUrl("cam15test4map.png"),
      questions: [
        {
          id: "cam15-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11–16: Label the map of the park above. Write the correct letter, A–H, next to each location.`,
          type: "matching", question: "11. café",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q12", number: 12, type: "matching", question: "12. toilets",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q13", number: 13, type: "matching", question: "13. formal gardens",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q14", number: 14, type: "matching", question: "14. outdoor gym",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q15", number: 15, type: "matching", question: "15. skateboard ramp",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q16", number: 16, type: "matching", question: "16. wild flowers",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhat does the speaker say about the adventure playground?\n\nA  Children must be supervised.\nB  It costs more in winter.\nC  Some activities are only for younger children.\nD  No payment is required.\nE  It was recently expanded.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  Children must be supervised.", value: "A" },
            { label: "B  It costs more in winter.", value: "B" },
            { label: "C  Some activities are only for younger children.", value: "C" },
            { label: "D  No payment is required.", value: "D" },
            { label: "E  It was recently expanded.", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  Children must be supervised.", value: "A" },
            { label: "B  It costs more in winter.", value: "B" },
            { label: "C  Some activities are only for younger children.", value: "C" },
            { label: "D  No payment is required.", value: "D" },
            { label: "E  It was recently expanded.", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhat does the speaker say about the glass houses?\n\nA  They are closed at weekends.\nB  Volunteers are needed to work there.\nC  They were badly damaged by fire.\nD  More money is needed to repair some of the glass.\nE  Visitors can see palm trees from tropical regions.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  They are closed at weekends.", value: "A" },
            { label: "B  Volunteers are needed to work there.", value: "B" },
            { label: "C  They were badly damaged by fire.", value: "C" },
            { label: "D  More money is needed to repair some of the glass.", value: "D" },
            { label: "E  Visitors can see palm trees from tropical regions.", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam15-l-t4-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  They are closed at weekends.", value: "A" },
            { label: "B  Volunteers are needed to work there.", value: "B" },
            { label: "C  They were badly damaged by fire.", value: "C" },
            { label: "D  More money is needed to repair some of the glass.", value: "D" },
            { label: "E  Visitors can see palm trees from tropical regions.", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam15-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose the correct letter, A, B or C.
Questions 25–30: Match each research topic with the person who will research it. Write A, B or C next to each topic.`,
      passageTitle: "Annie & Jack — presentation about refrigeration",
      questions: [
        {
          id: "cam15-l-t4-s3-q21", number: 21,
          groupLabel: `Questions 21–24: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What did Annie discover from reading about icehouses?",
          options: [
            { label: "A  why they were first created", value: "A" },
            { label: "B  how the ice was kept frozen", value: "B" },
            { label: "C  where they were located", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q22", number: 22, type: "multiple_choice",
          question: "22. What point does Annie make about refrigeration in ancient Rome?",
          options: [
            { label: "A  It became a commercial business.", value: "A" },
            { label: "B  It used snow from nearby.", value: "B" },
            { label: "C  It took a long time to become popular.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q23", number: 23, type: "multiple_choice",
          question: "23. In connection with modern refrigerators, both Annie and Jack are worried about",
          options: [
            { label: "A  the complexity of the technology.", value: "A" },
            { label: "B  the fact that some are disposed of irresponsibly.", value: "B" },
            { label: "C  the large number that quickly break down.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What do Jack and Annie agree regarding domestic fridges?",
          options: [
            { label: "A  They are generally good value for money.", value: "A" },
            { label: "B  There are plenty of useful variations.", value: "B" },
            { label: "C  They are more useful than other domestic appliances.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q25", number: 25,
          groupLabel: `Questions 25–30: Who is going to do research into each topic? Write the correct letter next to each topic.\n\nA  Annie\nB  Jack\nC  both Annie and Jack\n\n(Letters may be used more than once.)`,
          type: "matching", question: "25. the goods that are refrigerated",
          options: [
            { label: "A  Annie", value: "A" },
            { label: "B  Jack", value: "B" },
            { label: "C  both Annie and Jack", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q26", number: 26, type: "matching", question: "26. the effects on health",
          options: [
            { label: "A  Annie", value: "A" },
            { label: "B  Jack", value: "B" },
            { label: "C  both Annie and Jack", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q27", number: 27, type: "matching", question: "27. the impact on food producers",
          options: [
            { label: "A  Annie", value: "A" },
            { label: "B  Jack", value: "B" },
            { label: "C  both Annie and Jack", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q28", number: 28, type: "matching", question: "28. the impact on cities",
          options: [
            { label: "A  Annie", value: "A" },
            { label: "B  Jack", value: "B" },
            { label: "C  both Annie and Jack", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q29", number: 29, type: "matching", question: "29. refrigerated transport",
          options: [
            { label: "A  Annie", value: "A" },
            { label: "B  Jack", value: "B" },
            { label: "C  both Annie and Jack", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam15-l-t4-s3-q30", number: 30, type: "matching", question: "30. domestic fridges",
          options: [
            { label: "A  Annie", value: "A" },
            { label: "B  Jack", value: "B" },
            { label: "C  both Annie and Jack", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam15-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `How the Industrial Revolution affected life in Britain

19th century
●  For the first time, people's possessions were used to measure Britain's 31 _______.
●  Developments in production of goods and in 32 _______ greatly changed lives.

MAIN AREAS OF CHANGE

Manufacturing
●  The Industrial Revolution would not have happened without the new types of 33 _______ that were used then.
●  The leading industry was 34 _______ (its products became widely available).
●  New 35 _______ made factories necessary and so more people moved into towns.

Transport
●  The railways took the place of canals.
●  Because of the new transport:
   –  greater access to 36 _______ made people more aware of what they could buy in shops.
   –  when shopping, people were not limited to buying 37 _______ goods.

Retailing
●  The first department stores were opened.
●  The displays of goods were more visible:
   –  inside stores because of better 38 _______.
   –  outside stores, because 39 _______ were bigger.
●  40 _______ that was persuasive became much more common.`,
      questions: [
        { id: "cam15-l-t4-s4-q31", number: 31, type: "note_completion", question: "31. people's possessions were used to measure Britain's _______", correctAnswer: "wealth", points: 1 },
        { id: "cam15-l-t4-s4-q32", number: 32, type: "note_completion", question: "32. Developments in production of goods and in _______ greatly changed lives", correctAnswer: "technology", points: 1 },
        { id: "cam15-l-t4-s4-q33", number: 33, type: "note_completion", question: "33. new types of _______ that were used then", correctAnswer: "power", points: 1 },
        { id: "cam15-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. The leading industry was _______", correctAnswer: "textile/textiles", points: 1 },
        { id: "cam15-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. New _______ made factories necessary", correctAnswer: "machines", points: 1 },
        { id: "cam15-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. greater access to _______ made people more aware", correctAnswer: "newspapers", points: 1 },
        { id: "cam15-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. not limited to buying _______ goods", correctAnswer: "local", points: 1 },
        { id: "cam15-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. inside stores because of better _______", correctAnswer: "lighting", points: 1 },
        { id: "cam15-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. outside stores, because _______ were bigger", correctAnswer: "windows", points: 1 },
        { id: "cam15-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. _______ that was persuasive became much more common", correctAnswer: "advertising", points: 1 },
      ],
    },
  ],
};

export const cambridge15ListeningTests: IELTSTest[] = [
  cambridge15_listening_t1,
  cambridge15_listening_t2,
  cambridge15_listening_t3,
  cambridge15_listening_t4,
];
