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

export const cambridge15ListeningTests: IELTSTest[] = [
  cambridge15_listening_t1,
  cambridge15_listening_t2,
];
