import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 14 – LISTENING TEST 1
// Parts: 1) Crime Report Form — Louise Taylor (form)
//        2) Induction talk for new apprentices (two Choose-TWO
//           + policy → A/B/C matching)
//        3) Cities built by the sea — Carla & Rob (MCQ +
//           presentation parts → decision matching A–G)
//        4) Marine renewable energy (notes)
// ============================================================
export const cambridge14_listening_t1: IELTSTest = {
  id: "cam14-listening-t1",
  title: "Cambridge IELTS 14 – Listening Test 1",
  bookNumber: 14,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam14-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam14-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `CRIME REPORT FORM

Type of crime: theft

Personal information

Name               Louise Taylor
Nationality       1 _______
Date of birth     14 December 1977
Occupation        interior designer
Reason for visit  business (to buy antique 2 _______)
Length of stay    two months
Current address   3 _______ Apartments (No 15)

Details of theft

Items stolen     – a wallet containing approximately £ 4 _______
                 – a 5 _______
Date of theft    6 _______

Possible time and place of theft

Location               outside the 7 _______ at about 4 p.m.
Details of suspect     – some boys asked for the 8 _______ then ran off
                       – one had a T-shirt with a picture of a tiger
                       – he was about 12, slim build with 9 _______ hair

Crime reference number allocated

                 10 _______`,
      questions: [
        { id: "cam14-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Nationality: _______", correctAnswer: "Canadian", points: 1 },
        { id: "cam14-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. to buy antique _______", correctAnswer: "furniture", points: 1 },
        { id: "cam14-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. Current address: _______ Apartments", correctAnswer: "Park", points: 1 },
        { id: "cam14-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. wallet containing approximately £ _______", correctAnswer: "250", points: 1 },
        { id: "cam14-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. a _______", correctAnswer: "phone", points: 1 },
        { id: "cam14-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. Date of theft: _______", correctAnswer: "10 September/10th September", points: 1 },
        { id: "cam14-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. outside the _______ at about 4 p.m.", correctAnswer: "museum", points: 1 },
        { id: "cam14-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. some boys asked for the _______ then ran off", correctAnswer: "time", points: 1 },
        { id: "cam14-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. slim build with _______ hair", correctAnswer: "blond/blonde", points: 1 },
        { id: "cam14-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Crime reference number: _______", correctAnswer: "87954 82361", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam14-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13 & 14: Choose TWO letters, A–E.
Questions 15–20: Match each aspect of company policy with its status. Write A, B or C.`,
      passageTitle: "Induction talk for new apprentices",
      questions: [
        {
          id: "cam14-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO pieces of advice for the first week of an apprenticeship does the manager give?\n\nA  get to know colleagues\nB  learn from any mistakes\nC  ask lots of questions\nD  react positively to feedback\nE  enjoy new challenges\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  get to know colleagues", value: "A" },
            { label: "B  learn from any mistakes", value: "B" },
            { label: "C  ask lots of questions", value: "C" },
            { label: "D  react positively to feedback", value: "D" },
            { label: "E  enjoy new challenges", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  get to know colleagues", value: "A" },
            { label: "B  learn from any mistakes", value: "B" },
            { label: "C  ask lots of questions", value: "C" },
            { label: "D  react positively to feedback", value: "D" },
            { label: "E  enjoy new challenges", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO things does the manager say mentors can help with?\n\nA  confidence-building\nB  making career plans\nC  completing difficult tasks\nD  making a weekly timetable\nE  reviewing progress\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  confidence-building", value: "A" },
            { label: "B  making career plans", value: "B" },
            { label: "C  completing difficult tasks", value: "C" },
            { label: "D  making a weekly timetable", value: "D" },
            { label: "E  reviewing progress", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  confidence-building", value: "A" },
            { label: "B  making career plans", value: "B" },
            { label: "C  completing difficult tasks", value: "C" },
            { label: "D  making a weekly timetable", value: "D" },
            { label: "E  reviewing progress", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q15", number: 15,
          groupLabel: `Questions 15–20: What does the manager say about each of the following aspects of the company policy for apprentices? Write the correct letter, A, B or C, next to each aspect.\n\nA  It is encouraged.\nB  There are some restrictions.\nC  It is against the rules.\n\n(Letters may be used more than once.)`,
          type: "matching", question: "15. Using the internet",
          options: [
            { label: "A  It is encouraged.", value: "A" },
            { label: "B  There are some restrictions.", value: "B" },
            { label: "C  It is against the rules.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q16", number: 16, type: "matching", question: "16. Flexible working",
          options: [
            { label: "A  It is encouraged.", value: "A" },
            { label: "B  There are some restrictions.", value: "B" },
            { label: "C  It is against the rules.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q17", number: 17, type: "matching", question: "17. Booking holidays",
          options: [
            { label: "A  It is encouraged.", value: "A" },
            { label: "B  There are some restrictions.", value: "B" },
            { label: "C  It is against the rules.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q18", number: 18, type: "matching", question: "18. Working overtime",
          options: [
            { label: "A  It is encouraged.", value: "A" },
            { label: "B  There are some restrictions.", value: "B" },
            { label: "C  It is against the rules.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q19", number: 19, type: "matching", question: "19. Wearing trainers",
          options: [
            { label: "A  It is encouraged.", value: "A" },
            { label: "B  There are some restrictions.", value: "B" },
            { label: "C  It is against the rules.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t1-s2-q20", number: 20, type: "matching", question: "20. Bringing food to work",
          options: [
            { label: "A  It is encouraged.", value: "A" },
            { label: "B  There are some restrictions.", value: "B" },
            { label: "C  It is against the rules.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam14-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Match each part of the presentation with a decision. Choose FIVE answers from the box (A–G).`,
      passageTitle: "Carla & Rob — Cities built by the sea",
      questions: [
        {
          id: "cam14-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. Carla and Rob were surprised to learn that coastal cities",
          options: [
            { label: "A  contain nearly half the world's population.", value: "A" },
            { label: "B  include most of the world's largest cities.", value: "B" },
            { label: "C  are growing twice as fast as other cities.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. According to Rob, building coastal cities near to rivers",
          options: [
            { label: "A  may bring pollution to the cities.", value: "A" },
            { label: "B  may reduce the land available for agriculture.", value: "B" },
            { label: "C  may mean the countryside is spoiled by industry.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. What mistake was made when building water drainage channels in Miami in the 1950s?",
          options: [
            { label: "A  There were not enough of them.", value: "A" },
            { label: "B  They were made of unsuitable materials.", value: "B" },
            { label: "C  They did not allow for the effects of climate change.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What do Rob and Carla think that the authorities in Miami should do immediately?",
          options: [
            { label: "A  take measures to restore ecosystems", value: "A" },
            { label: "B  pay for a new flood prevention system", value: "B" },
            { label: "C  stop disposing of waste materials into the ocean", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What do they agree should be the priority for international action?",
          options: [
            { label: "A  greater coordination of activities", value: "A" },
            { label: "B  more sharing of information", value: "B" },
            { label: "C  agreement on shared policies", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q26", number: 26,
          groupLabel: `Questions 26–30: What decision do the students make about each of the following parts of their presentation? Choose FIVE answers from the box (A–G).\n\nA  use visuals\nB  keep it short\nC  involve other students\nD  check the information is accurate\nE  provide a handout\nF  focus on one example\nG  do online research`,
          type: "matching", question: "26. Historical background",
          options: [
            { label: "A  use visuals", value: "A" },
            { label: "B  keep it short", value: "B" },
            { label: "C  involve other students", value: "C" },
            { label: "D  check the information is accurate", value: "D" },
            { label: "E  provide a handout", value: "E" },
            { label: "F  focus on one example", value: "F" },
            { label: "G  do online research", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q27", number: 27, type: "matching", question: "27. Geographical factors",
          options: [
            { label: "A  use visuals", value: "A" },
            { label: "B  keep it short", value: "B" },
            { label: "C  involve other students", value: "C" },
            { label: "D  check the information is accurate", value: "D" },
            { label: "E  provide a handout", value: "E" },
            { label: "F  focus on one example", value: "F" },
            { label: "G  do online research", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q28", number: 28, type: "matching", question: "28. Past mistakes",
          options: [
            { label: "A  use visuals", value: "A" },
            { label: "B  keep it short", value: "B" },
            { label: "C  involve other students", value: "C" },
            { label: "D  check the information is accurate", value: "D" },
            { label: "E  provide a handout", value: "E" },
            { label: "F  focus on one example", value: "F" },
            { label: "G  do online research", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q29", number: 29, type: "matching", question: "29. Future risks",
          options: [
            { label: "A  use visuals", value: "A" },
            { label: "B  keep it short", value: "B" },
            { label: "C  involve other students", value: "C" },
            { label: "D  check the information is accurate", value: "D" },
            { label: "E  provide a handout", value: "E" },
            { label: "F  focus on one example", value: "F" },
            { label: "G  do online research", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam14-l-t1-s3-q30", number: 30, type: "matching", question: "30. International implications",
          options: [
            { label: "A  use visuals", value: "A" },
            { label: "B  keep it short", value: "B" },
            { label: "C  involve other students", value: "C" },
            { label: "D  check the information is accurate", value: "D" },
            { label: "E  provide a handout", value: "E" },
            { label: "F  focus on one example", value: "F" },
            { label: "G  do online research", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam14-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Marine renewable energy (ocean energy)

Introduction
More energy required because of growth in population and 31 _______

What's needed:
●  renewable energy sources
●  methods that won't create pollution

Wave energy
Advantage: waves provide a 32 _______ source of renewable energy
Electricity can be generated using offshore or onshore systems
Onshore systems may use a reservoir
Problems:
●  waves can move in any 33 _______
●  movement of sand, etc. on the 34 _______ of the ocean may be affected

Tidal energy
Tides are more 35 _______ than waves

Planned tidal lagoon in Wales:
●  will be created in a 36 _______ at Swansea
●  breakwater (dam) containing 16 turbines
●  rising tide forces water through turbines, generating electricity
●  stored water is released through 37 _______, driving the turbines in the reverse direction

Advantages:
●  not dependent on weather
●  no 38 _______ is required to make it work
●  likely to create a number of 39 _______

Problem:
●  may harm fish and birds, e.g. by affecting 40 _______ and building up silt

Ocean thermal energy conversion
Uses a difference in temperature between the surface and lower levels
Water brought to the surface in a pipe`,
      questions: [
        { id: "cam14-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. growth in population and _______", correctAnswer: "industry", points: 1 },
        { id: "cam14-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. waves provide a _______ source of renewable energy", correctAnswer: "constant", points: 1 },
        { id: "cam14-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. waves can move in any _______", correctAnswer: "direction", points: 1 },
        { id: "cam14-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. movement of sand on the _______ of the ocean may be affected", correctAnswer: "floor", points: 1 },
        { id: "cam14-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. Tides are more _______ than waves", correctAnswer: "predictable", points: 1 },
        { id: "cam14-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. created in a _______ at Swansea", correctAnswer: "bay", points: 1 },
        { id: "cam14-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. stored water is released through _______", correctAnswer: "gates", points: 1 },
        { id: "cam14-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. no _______ is required to make it work", correctAnswer: "fuel", points: 1 },
        { id: "cam14-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. likely to create a number of _______", correctAnswer: "jobs", points: 1 },
        { id: "cam14-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. affecting _______ and building up silt", correctAnswer: "migration", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 14 – LISTENING TEST 2
// Parts: 1) Total Health Clinic — Julie Anne Garcia (notes)
//        2) Visit to Branley Castle (MCQ + map labelling A–H)
//        3) Rosie & Martin — woolly mammoths on St Paul's Island
//           (MCQ + presentation-section → action matching A–H)
//        4) History of weather forecasting (notes)
// ============================================================
export const cambridge14_listening_t2: IELTSTest = {
  id: "cam14-listening-t2",
  title: "Cambridge IELTS 14 – Listening Test 2",
  bookNumber: 14,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam14-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam14-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `TOTAL HEALTH CLINIC
PATIENT DETAILS

Personal information
Name                 Julie Anne Garcia
Contact phone        1 _______
Date of birth        2 _______, 1992
Occupation           works as a 3 _______
Insurance company    4 _______ Life Insurance

Details of the problem
Type of problem      pain in her left 5 _______
When it began        6 _______ ago
Action already taken has taken painkillers and applied ice

Other information
Sports played        belongs to a 7 _______ club
                     goes 8 _______ regularly
Medical history      injured her 9 _______ last year
                     no allergies
                     no regular medication apart from 10 _______`,
      questions: [
        { id: "cam14-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. Contact phone: _______", correctAnswer: "219 442 9785", points: 1 },
        { id: "cam14-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. Date of birth: _______, 1992", correctAnswer: "10 October/10th October", points: 1 },
        { id: "cam14-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. works as a _______", correctAnswer: "manager", points: 1 },
        { id: "cam14-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. _______ Life Insurance", correctAnswer: "Cawley", points: 1 },
        { id: "cam14-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. pain in her left _______", correctAnswer: "knee", points: 1 },
        { id: "cam14-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. When it began: _______ ago", correctAnswer: "3 weeks", points: 1 },
        { id: "cam14-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. belongs to a _______ club", correctAnswer: "tennis", points: 1 },
        { id: "cam14-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. goes _______ regularly", correctAnswer: "running", points: 1 },
        { id: "cam14-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. injured her _______ last year", correctAnswer: "shoulder", points: 1 },
        { id: "cam14-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. no regular medication apart from _______", correctAnswer: "vitamins", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam14-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–15: Choose the correct letter, A, B or C.
Questions 16–20: Label the plan of Branley Castle below. Write the correct letter, A–H, next to each location.`,
      passageTitle: "Visit to Branley Castle",
      diagramUrl: imageUrl("cam14test2map.png"),
      questions: [
        {
          id: "cam14-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–15: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Before Queen Elizabeth I visited the castle in 1576,",
          options: [
            { label: "A  repairs were carried out to the guest rooms.", value: "A" },
            { label: "B  a new building was constructed for her.", value: "B" },
            { label: "C  a fire damaged part of the main hall.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. In 1982, the castle was sold to",
          options: [
            { label: "A  the government.", value: "A" },
            { label: "B  the Fenys family.", value: "B" },
            { label: "C  an entertainment company.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. In some of the rooms, visitors can",
          options: [
            { label: "A  speak to experts on the history of the castle.", value: "A" },
            { label: "B  interact with actors dressed as famous characters.", value: "B" },
            { label: "C  see models of historical figures moving and talking.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. In the castle park, visitors can",
          options: [
            { label: "A  see an 800-year-old tree.", value: "A" },
            { label: "B  go to an art exhibition.", value: "B" },
            { label: "C  visit a small zoo.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q15", number: 15, type: "multiple_choice",
          question: "15. At the end of the visit, the group will have",
          options: [
            { label: "A  afternoon tea in the conservatory.", value: "A" },
            { label: "B  the chance to meet the castle's owners.", value: "B" },
            { label: "C  a photograph together on the Great Staircase.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q16", number: 16,
          groupLabel: `Questions 16–20: Label the plan of Branley Castle above. Write the correct letter, A–H, next to each location.`,
          type: "matching", question: "16. Starting point for walking the walls",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q17", number: 17, type: "matching", question: "17. Bow and arrow display",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q18", number: 18, type: "matching", question: "18. Hunting birds display",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q19", number: 19, type: "matching", question: "19. Traditional dancing",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t2-s2-q20", number: 20, type: "matching", question: "20. Shop",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam14-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose the correct letter, A, B or C.
Questions 25–30: Match each section of the presentation with an action. Choose SIX answers from the box (A–H).`,
      passageTitle: "Rosie & Martin — woolly mammoths on St Paul's Island",
      questions: [
        {
          id: "cam14-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–24: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. How will Rosie and Martin introduce their presentation?",
          options: [
            { label: "A  with a drawing of woolly mammoths in their natural habitat", value: "A" },
            { label: "B  with a timeline showing when woolly mammoths lived", value: "B" },
            { label: "C  with a video clip about woolly mammoths", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. What was surprising about the mammoth tooth found by Russell Graham?",
          options: [
            { label: "A  It was still embedded in the mammoth's jawbone.", value: "A" },
            { label: "B  It was from an unknown species of mammoth.", value: "B" },
            { label: "C  It was not as old as mammoth remains from elsewhere.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q23", number: 23, type: "multiple_choice",
          question: "23. The students will use an animated diagram to demonstrate how the mammoths",
          options: [
            { label: "A  became isolated on the island.", value: "A" },
            { label: "B  spread from the island to other areas.", value: "B" },
            { label: "C  coexisted with other animals on the island.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. According to Martin, what is unusual about the date of the mammoths' extinction on the island?",
          options: [
            { label: "A  how exact it is", value: "A" },
            { label: "B  how early it is", value: "B" },
            { label: "C  how it was established", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What action will the students take for each of the following sections of their presentation? Choose SIX answers from the box (A–H).\n\nA  make it more interactive\nB  reduce visual input\nC  add personal opinions\nD  contact one of the researchers\nE  make detailed notes\nF  find information online\nG  check timing\nH  organise the content more clearly`,
          type: "matching", question: "25. Introduction",
          options: [
            { label: "A  make it more interactive", value: "A" },
            { label: "B  reduce visual input", value: "B" },
            { label: "C  add personal opinions", value: "C" },
            { label: "D  contact one of the researchers", value: "D" },
            { label: "E  make detailed notes", value: "E" },
            { label: "F  find information online", value: "F" },
            { label: "G  check timing", value: "G" },
            { label: "H  organise the content more clearly", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q26", number: 26, type: "matching", question: "26. Discovery of the mammoth tooth",
          options: [
            { label: "A  make it more interactive", value: "A" },
            { label: "B  reduce visual input", value: "B" },
            { label: "C  add personal opinions", value: "C" },
            { label: "D  contact one of the researchers", value: "D" },
            { label: "E  make detailed notes", value: "E" },
            { label: "F  find information online", value: "F" },
            { label: "G  check timing", value: "G" },
            { label: "H  organise the content more clearly", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q27", number: 27, type: "matching", question: "27. Initial questions asked by the researchers",
          options: [
            { label: "A  make it more interactive", value: "A" },
            { label: "B  reduce visual input", value: "B" },
            { label: "C  add personal opinions", value: "C" },
            { label: "D  contact one of the researchers", value: "D" },
            { label: "E  make detailed notes", value: "E" },
            { label: "F  find information online", value: "F" },
            { label: "G  check timing", value: "G" },
            { label: "H  organise the content more clearly", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q28", number: 28, type: "matching", question: "28. Further research carried out on the island",
          options: [
            { label: "A  make it more interactive", value: "A" },
            { label: "B  reduce visual input", value: "B" },
            { label: "C  add personal opinions", value: "C" },
            { label: "D  contact one of the researchers", value: "D" },
            { label: "E  make detailed notes", value: "E" },
            { label: "F  find information online", value: "F" },
            { label: "G  check timing", value: "G" },
            { label: "H  organise the content more clearly", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q29", number: 29, type: "matching", question: "29. Findings and possible explanations",
          options: [
            { label: "A  make it more interactive", value: "A" },
            { label: "B  reduce visual input", value: "B" },
            { label: "C  add personal opinions", value: "C" },
            { label: "D  contact one of the researchers", value: "D" },
            { label: "E  make detailed notes", value: "E" },
            { label: "F  find information online", value: "F" },
            { label: "G  check timing", value: "G" },
            { label: "H  organise the content more clearly", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam14-l-t2-s3-q30", number: 30, type: "matching", question: "30. Relevance to the present day",
          options: [
            { label: "A  make it more interactive", value: "A" },
            { label: "B  reduce visual input", value: "B" },
            { label: "C  add personal opinions", value: "C" },
            { label: "D  contact one of the researchers", value: "D" },
            { label: "E  make detailed notes", value: "E" },
            { label: "F  find information online", value: "F" },
            { label: "G  check timing", value: "G" },
            { label: "H  organise the content more clearly", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam14-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `The history of weather forecasting

Ancient cultures
●  many cultures believed that floods and other disasters were involved in the creation of the world
●  many cultures invented 31 _______ and other ceremonies to make the weather gods friendly
●  people needed to observe and interpret the sky to ensure their 32 _______
●  around 650 BC, Babylonians started forecasting, using weather phenomena such as 33 _______
●  by 300 BC, the Chinese had a calendar made up of a number of 34 _______ connected with the weather

Ancient Greeks
●  a more scientific approach
●  Aristotle tried to explain the formation of various weather phenomena
●  Aristotle also described haloes and 35 _______

Middle Ages
●  Aristotle's work considered accurate
●  many proverbs, e.g. about the significance of the colour of the 36 _______, passed on accurate information.

15th–19th centuries
●  15th century: scientists recognised value of 37 _______ for the first time
●  Galileo invented the 38 _______
●  Pascal showed relationship between atmospheric pressure and altitude
●  from the 17th century, scientists could measure atmospheric pressure and temperature
●  18th century: Franklin identified the movement of 39 _______
●  19th century: data from different locations could be sent to the same place by 40 _______`,
      questions: [
        { id: "cam14-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. many cultures invented _______ and other ceremonies", correctAnswer: "dances", points: 1 },
        { id: "cam14-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. observe and interpret the sky to ensure their _______", correctAnswer: "survival", points: 1 },
        { id: "cam14-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. Babylonians used weather phenomena such as _______", correctAnswer: "clouds", points: 1 },
        { id: "cam14-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. Chinese calendar made up of a number of _______ connected with the weather", correctAnswer: "festivals", points: 1 },
        { id: "cam14-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. Aristotle also described haloes and _______", correctAnswer: "comets", points: 1 },
        { id: "cam14-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. the significance of the colour of the _______", correctAnswer: "sky", points: 1 },
        { id: "cam14-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. scientists recognised value of _______ for the first time", correctAnswer: "instruments", points: 1 },
        { id: "cam14-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. Galileo invented the _______", correctAnswer: "thermometer", points: 1 },
        { id: "cam14-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. Franklin identified the movement of _______", correctAnswer: "storms", points: 1 },
        { id: "cam14-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. data could be sent to the same place by _______", correctAnswer: "telegraph", points: 1 },
      ],
    },
  ],
};

export const cambridge14ListeningTests: IELTSTest[] = [
  cambridge14_listening_t1,
  cambridge14_listening_t2,
];
