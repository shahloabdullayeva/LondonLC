import type { IELTSTest } from "./ielts-tests";

const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/audio/${name}`;

const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/images/${name}`;

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

export const cambridge14_listening_t3: IELTSTest = {
  id: "cam14-listening-t3",
  title: "Cambridge IELTS 14 – Listening Test 3",
  bookNumber: 14,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam14-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam14-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Flanders Conference Hotel

Customer Services Manager: Angela

Date available
●  weekend beginning February 4th

Conference facilities
●  the 1 _______ room for talks
   (projector and 2 _______ available)
●  area for coffee and an 3 _______
●  free 4 _______ throughout
●  a standard buffet lunch costs $ 5 _______ per head

Accommodation
●  Rooms will cost $ 6 _______ including breakfast.

Other facilities
●  The hotel also has a spa and rooftop 7 _______
●  There's a free shuttle service to the 8 _______

Location
●  Wilby Street (quite near the 9 _______)
●  near to restaurants and many 10 _______`,
      questions: [
        { id: "cam14-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. the _______ room for talks", correctAnswer: "Tesla", points: 1 },
        { id: "cam14-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. projector and _______ available", correctAnswer: "microphone", points: 1 },
        { id: "cam14-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. area for coffee and an _______", correctAnswer: "exhibition", points: 1 },
        { id: "cam14-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. free _______ throughout", correctAnswer: "wifi", points: 1 },
        { id: "cam14-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. standard buffet lunch costs $ _______ per head", correctAnswer: "45", points: 1 },
        { id: "cam14-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. Rooms will cost $ _______ including breakfast", correctAnswer: "135", points: 1 },
        { id: "cam14-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. spa and rooftop _______", correctAnswer: "pool", points: 1 },
        { id: "cam14-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. free shuttle service to the _______", correctAnswer: "airport", points: 1 },
        { id: "cam14-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. quite near the _______", correctAnswer: "sea", points: 1 },
        { id: "cam14-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. near to restaurants and many _______", correctAnswer: "clubs", points: 1 },
      ],
    },
    {
      id: "cam14-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13 & 14: Choose TWO letters, A–E.
Questions 15–20: Match each volunteer with what they have helped someone to do. Choose SIX answers from the box (A–G).`,
      passageTitle: "Volunteering",
      questions: [
        {
          id: "cam14-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO activities that volunteers do are mentioned?\n\nA  decorating\nB  cleaning\nC  delivering meals\nD  shopping\nE  childcare\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  decorating", value: "A" },
            { label: "B  cleaning", value: "B" },
            { label: "C  delivering meals", value: "C" },
            { label: "D  shopping", value: "D" },
            { label: "E  childcare", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  decorating", value: "A" },
            { label: "B  cleaning", value: "B" },
            { label: "C  delivering meals", value: "C" },
            { label: "D  shopping", value: "D" },
            { label: "E  childcare", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO ways that volunteers can benefit from volunteering are mentioned?\n\nA  learning how to be part of a team\nB  having a sense of purpose\nC  realising how lucky they are\nD  improved ability at time management\nE  boosting their employment prospects\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  learning how to be part of a team", value: "A" },
            { label: "B  having a sense of purpose", value: "B" },
            { label: "C  realising how lucky they are", value: "C" },
            { label: "D  improved ability at time management", value: "D" },
            { label: "E  boosting their employment prospects", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  learning how to be part of a team", value: "A" },
            { label: "B  having a sense of purpose", value: "B" },
            { label: "C  realising how lucky they are", value: "C" },
            { label: "D  improved ability at time management", value: "D" },
            { label: "E  boosting their employment prospects", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q15", number: 15,
          groupLabel: `Questions 15–20: What has each of the following volunteers helped someone to do? Choose SIX answers from the box (A–G).\n\nA  overcome physical difficulties\nB  rediscover skills not used for a long time\nC  improve their communication skills\nD  solve problems independently\nE  escape isolation\nF  remember past times\nG  start a new hobby`,
          type: "matching", question: "15. Habib",
          options: [
            { label: "A  overcome physical difficulties", value: "A" },
            { label: "B  rediscover skills not used for a long time", value: "B" },
            { label: "C  improve their communication skills", value: "C" },
            { label: "D  solve problems independently", value: "D" },
            { label: "E  escape isolation", value: "E" },
            { label: "F  remember past times", value: "F" },
            { label: "G  start a new hobby", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q16", number: 16, type: "matching", question: "16. Consuela",
          options: [
            { label: "A  overcome physical difficulties", value: "A" },
            { label: "B  rediscover skills not used for a long time", value: "B" },
            { label: "C  improve their communication skills", value: "C" },
            { label: "D  solve problems independently", value: "D" },
            { label: "E  escape isolation", value: "E" },
            { label: "F  remember past times", value: "F" },
            { label: "G  start a new hobby", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q17", number: 17, type: "matching", question: "17. Minh",
          options: [
            { label: "A  overcome physical difficulties", value: "A" },
            { label: "B  rediscover skills not used for a long time", value: "B" },
            { label: "C  improve their communication skills", value: "C" },
            { label: "D  solve problems independently", value: "D" },
            { label: "E  escape isolation", value: "E" },
            { label: "F  remember past times", value: "F" },
            { label: "G  start a new hobby", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q18", number: 18, type: "matching", question: "18. Tanya",
          options: [
            { label: "A  overcome physical difficulties", value: "A" },
            { label: "B  rediscover skills not used for a long time", value: "B" },
            { label: "C  improve their communication skills", value: "C" },
            { label: "D  solve problems independently", value: "D" },
            { label: "E  escape isolation", value: "E" },
            { label: "F  remember past times", value: "F" },
            { label: "G  start a new hobby", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q19", number: 19, type: "matching", question: "19. Alexei",
          options: [
            { label: "A  overcome physical difficulties", value: "A" },
            { label: "B  rediscover skills not used for a long time", value: "B" },
            { label: "C  improve their communication skills", value: "C" },
            { label: "D  solve problems independently", value: "D" },
            { label: "E  escape isolation", value: "E" },
            { label: "F  remember past times", value: "F" },
            { label: "G  start a new hobby", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam14-l-t3-s2-q20", number: 20, type: "matching", question: "20. Juba",
          options: [
            { label: "A  overcome physical difficulties", value: "A" },
            { label: "B  rediscover skills not used for a long time", value: "B" },
            { label: "C  improve their communication skills", value: "C" },
            { label: "D  solve problems independently", value: "D" },
            { label: "E  escape isolation", value: "E" },
            { label: "F  remember past times", value: "F" },
            { label: "G  start a new hobby", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    {
      id: "cam14-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.
Questions 27–30: Match each band member with a problem. Choose FOUR answers from the box (A–F).`,
      passageTitle: "Joe — school marching band",
      passageText: `Background on school marching band

It consists of around 21 _______ students.
It is due to play in a 22 _______ band competition.
It has been invited to play in the town's 23 _______.
They have listened to a talk by a 24 _______.
Joe will discuss a 25 _______ with the band.
Joe hopes the band will attend a 26 _______ next month.`,
      questions: [
        { id: "cam14-l-t3-s3-q21", number: 21, type: "note_completion", question: "21. It consists of around _______ students", correctAnswer: "50", points: 1 },
        { id: "cam14-l-t3-s3-q22", number: 22, type: "note_completion", question: "22. It is due to play in a _______ band competition", correctAnswer: "regional", points: 1 },
        { id: "cam14-l-t3-s3-q23", number: 23, type: "note_completion", question: "23. invited to play in the town's _______", correctAnswer: "carnival", points: 1 },
        { id: "cam14-l-t3-s3-q24", number: 24, type: "note_completion", question: "24. have listened to a talk by a _______", correctAnswer: "drummer", points: 1 },
        { id: "cam14-l-t3-s3-q25", number: 25, type: "note_completion", question: "25. Joe will discuss a _______ with the band", correctAnswer: "film", points: 1 },
        { id: "cam14-l-t3-s3-q26", number: 26, type: "note_completion", question: "26. attend a _______ next month", correctAnswer: "parade", points: 1 },
        {
          id: "cam14-l-t3-s3-q27", number: 27,
          groupLabel: `Questions 27–30: What problem does Joe mention in connection with each of the following band members? Choose FOUR answers from the box (A–F).\n\nA  makes a lot of mistakes in rehearsals\nB  keeps making unhelpful suggestions\nC  has difficulty with rhythm\nD  misses too many rehearsals\nE  has a health problem\nF  doesn't mix with other students`,
          type: "matching", question: "27. flautist",
          options: [
            { label: "A  makes a lot of mistakes in rehearsals", value: "A" },
            { label: "B  keeps making unhelpful suggestions", value: "B" },
            { label: "C  has difficulty with rhythm", value: "C" },
            { label: "D  misses too many rehearsals", value: "D" },
            { label: "E  has a health problem", value: "E" },
            { label: "F  doesn't mix with other students", value: "F" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam14-l-t3-s3-q28", number: 28, type: "matching", question: "28. trumpeter",
          options: [
            { label: "A  makes a lot of mistakes in rehearsals", value: "A" },
            { label: "B  keeps making unhelpful suggestions", value: "B" },
            { label: "C  has difficulty with rhythm", value: "C" },
            { label: "D  misses too many rehearsals", value: "D" },
            { label: "E  has a health problem", value: "E" },
            { label: "F  doesn't mix with other students", value: "F" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t3-s3-q29", number: 29, type: "matching", question: "29. trombonist",
          options: [
            { label: "A  makes a lot of mistakes in rehearsals", value: "A" },
            { label: "B  keeps making unhelpful suggestions", value: "B" },
            { label: "C  has difficulty with rhythm", value: "C" },
            { label: "D  misses too many rehearsals", value: "D" },
            { label: "E  has a health problem", value: "E" },
            { label: "F  doesn't mix with other students", value: "F" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam14-l-t3-s3-q30", number: 30, type: "matching", question: "30. percussionist",
          options: [
            { label: "A  makes a lot of mistakes in rehearsals", value: "A" },
            { label: "B  keeps making unhelpful suggestions", value: "B" },
            { label: "C  has difficulty with rhythm", value: "C" },
            { label: "D  misses too many rehearsals", value: "D" },
            { label: "E  has a health problem", value: "E" },
            { label: "F  doesn't mix with other students", value: "F" },
          ],
          correctAnswer: "F", points: 1,
        },
      ],
    },
    {
      id: "cam14-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Concerts in university arts festival

Concert 1
Australian composer: Liza Lim
●  studied piano and 31 _______ before turning to composition
●  performers and festivals around the world have given her a lot of commissions
●  compositions show a great deal of 32 _______ and are drawn from various cultural sources
●  her music is very expressive and also 33 _______
●  festival will include her 34 _______ called The Oresteia
●  Lim described the sounds in The Oresteia as 35 _______
British composers: Ralph Vaughan Williams, Frederick Delius

Concert 2
British composers: Benjamin Britten, Judith Weir
Australian composer: Ross Edwards
●  festival will include The Tower of Remoteness, inspired by nature
●  The Tower of Remoteness is performed by piano and 36 _______
●  compositions include music for children
●  celebrates Australia's cultural 37 _______

Concert 3
Australian composer: Carl Vine
●  played cornet then piano
●  studied 38 _______ before studying music
●  worked in Sydney as a pianist and composer
●  became well known as composer of music for 39 _______
●  festival will include his music for the 1996 40 _______
British composers: Edward Elgar, Thomas Adès`,
      questions: [
        { id: "cam14-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. studied piano and _______ before turning to composition", correctAnswer: "violin", points: 1 },
        { id: "cam14-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. compositions show a great deal of _______", correctAnswer: "energy", points: 1 },
        { id: "cam14-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. very expressive and also _______", correctAnswer: "complex", points: 1 },
        { id: "cam14-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. festival will include her _______ called The Oresteia", correctAnswer: "opera", points: 1 },
        { id: "cam14-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. Lim described the sounds in The Oresteia as _______", correctAnswer: "disturbing", points: 1 },
        { id: "cam14-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. The Tower of Remoteness performed by piano and _______", correctAnswer: "clarinet", points: 1 },
        { id: "cam14-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. celebrates Australia's cultural _______", correctAnswer: "diversity", points: 1 },
        { id: "cam14-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. studied _______ before studying music", correctAnswer: "physics", points: 1 },
        { id: "cam14-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. well known as composer of music for _______", correctAnswer: "dance", points: 1 },
        { id: "cam14-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. his music for the 1996 _______", correctAnswer: "Olympics", points: 1 },
      ],
    },
  ],
};

export const cambridge14_listening_t4: IELTSTest = {
  id: "cam14-listening-t4",
  title: "Cambridge IELTS 14 – Listening Test 4",
  bookNumber: 14,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam14-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam14-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–7: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.
Questions 8–10: Match each hotel facility with its availability. Write A, B or C next to each facility.`,
      passageText: `Enquiry about booking hotel room for event

Andrew is the Events Manager

Rooms

Adelphi Room
●  number of people who can sit down to eat: 1 _______
●  has a gallery suitable for musicians
●  can go out and see the 2 _______ in pots on the terrace
●  terrace has a view of a group of 3 _______

Carlton Room
●  number of people who can sit down to eat: 110
●  has a 4 _______
●  view of the lake

Options

Master of Ceremonies:
●  can give a 5 _______ while people are eating
●  will provide 6 _______ if there are any problems

Accommodation:
●  in the hotel rooms or 7 _______`,
      questions: [
        { id: "cam14-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. number of people who can sit down to eat: _______", correctAnswer: "85", points: 1 },
        { id: "cam14-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. see the _______ in pots on the terrace", correctAnswer: "roses", points: 1 },
        { id: "cam14-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. terrace has a view of a group of _______", correctAnswer: "trees", points: 1 },
        { id: "cam14-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. Carlton Room has a _______", correctAnswer: "stage", points: 1 },
        { id: "cam14-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. MC can give a _______ while people are eating", correctAnswer: "speech", points: 1 },
        { id: "cam14-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. will provide _______ if there are any problems", correctAnswer: "support", points: 1 },
        { id: "cam14-l-t4-s1-q7", number: 7, type: "note_completion", question: "7. in the hotel rooms or _______", correctAnswer: "cabins", points: 1 },
        {
          id: "cam14-l-t4-s1-q8", number: 8,
          groupLabel: `Questions 8–10: What is said about using each of the following hotel facilities? Choose from the box and write the correct letter, A, B or C, next to each facility.\n\nA  included in cost of hiring room\nB  available at extra charge\nC  not available\n\n(Letters may be used more than once.)`,
          type: "matching", question: "8. outdoor swimming pool",
          options: [
            { label: "A  included in cost of hiring room", value: "A" },
            { label: "B  available at extra charge", value: "B" },
            { label: "C  not available", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t4-s1-q9", number: 9, type: "matching", question: "9. gym",
          options: [
            { label: "A  included in cost of hiring room", value: "A" },
            { label: "B  available at extra charge", value: "B" },
            { label: "C  not available", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t4-s1-q10", number: 10, type: "matching", question: "10. tennis courts",
          options: [
            { label: "A  included in cost of hiring room", value: "A" },
            { label: "B  available at extra charge", value: "B" },
            { label: "C  not available", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    {
      id: "cam14-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Match each excursion with information about it. Choose SIX answers from the box (A–H).
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Excursions",
      questions: [
        {
          id: "cam14-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11–16: What information does the speaker give about each of the following excursions? Choose SIX answers from the box (A–H).\n\nA  all downhill\nB  suitable for beginners\nC  only in good weather\nD  food included\nE  no charge\nF  swimming possible\nG  fully booked today\nH  transport not included`,
          type: "matching", question: "11. dolphin watching",
          options: [
            { label: "A  all downhill", value: "A" },
            { label: "B  suitable for beginners", value: "B" },
            { label: "C  only in good weather", value: "C" },
            { label: "D  food included", value: "D" },
            { label: "E  no charge", value: "E" },
            { label: "F  swimming possible", value: "F" },
            { label: "G  fully booked today", value: "G" },
            { label: "H  transport not included", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q12", number: 12, type: "matching", question: "12. forest walk",
          options: [
            { label: "A  all downhill", value: "A" },
            { label: "B  suitable for beginners", value: "B" },
            { label: "C  only in good weather", value: "C" },
            { label: "D  food included", value: "D" },
            { label: "E  no charge", value: "E" },
            { label: "F  swimming possible", value: "F" },
            { label: "G  fully booked today", value: "G" },
            { label: "H  transport not included", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q13", number: 13, type: "matching", question: "13. cycle trip",
          options: [
            { label: "A  all downhill", value: "A" },
            { label: "B  suitable for beginners", value: "B" },
            { label: "C  only in good weather", value: "C" },
            { label: "D  food included", value: "D" },
            { label: "E  no charge", value: "E" },
            { label: "F  swimming possible", value: "F" },
            { label: "G  fully booked today", value: "G" },
            { label: "H  transport not included", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q14", number: 14, type: "matching", question: "14. local craft tour",
          options: [
            { label: "A  all downhill", value: "A" },
            { label: "B  suitable for beginners", value: "B" },
            { label: "C  only in good weather", value: "C" },
            { label: "D  food included", value: "D" },
            { label: "E  no charge", value: "E" },
            { label: "F  swimming possible", value: "F" },
            { label: "G  fully booked today", value: "G" },
            { label: "H  transport not included", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q15", number: 15, type: "matching", question: "15. observatory trip",
          options: [
            { label: "A  all downhill", value: "A" },
            { label: "B  suitable for beginners", value: "B" },
            { label: "C  only in good weather", value: "C" },
            { label: "D  food included", value: "D" },
            { label: "E  no charge", value: "E" },
            { label: "F  swimming possible", value: "F" },
            { label: "G  fully booked today", value: "G" },
            { label: "H  transport not included", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q16", number: 16, type: "matching", question: "16. horse riding",
          options: [
            { label: "A  all downhill", value: "A" },
            { label: "B  suitable for beginners", value: "B" },
            { label: "C  only in good weather", value: "C" },
            { label: "D  food included", value: "D" },
            { label: "E  no charge", value: "E" },
            { label: "F  swimming possible", value: "F" },
            { label: "G  fully booked today", value: "G" },
            { label: "H  transport not included", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhich TWO things does the speaker say about the attraction called Musical Favourites?\n\nA  You pay extra for drinks.\nB  You must book it in advance.\nC  You get a reduction if you buy two tickets.\nD  You can meet the performers.\nE  You can take part in the show.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  You pay extra for drinks.", value: "A" },
            { label: "B  You must book it in advance.", value: "B" },
            { label: "C  You get a reduction if you buy two tickets.", value: "C" },
            { label: "D  You can meet the performers.", value: "D" },
            { label: "E  You can take part in the show.", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  You pay extra for drinks.", value: "A" },
            { label: "B  You must book it in advance.", value: "B" },
            { label: "C  You get a reduction if you buy two tickets.", value: "C" },
            { label: "D  You can meet the performers.", value: "D" },
            { label: "E  You can take part in the show.", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO things does the speaker say about the Castle Feast?\n\nA  Visitors can dance after the meal.\nB  There is a choice of food.\nC  Visitors wear historical costume.\nD  Knives and forks are not used.\nE  The entertainment includes horse races.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  Visitors can dance after the meal.", value: "A" },
            { label: "B  There is a choice of food.", value: "B" },
            { label: "C  Visitors wear historical costume.", value: "C" },
            { label: "D  Knives and forks are not used.", value: "D" },
            { label: "E  The entertainment includes horse races.", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam14-l-t4-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  Visitors can dance after the meal.", value: "A" },
            { label: "B  There is a choice of food.", value: "B" },
            { label: "C  Visitors wear historical costume.", value: "C" },
            { label: "D  Knives and forks are not used.", value: "D" },
            { label: "E  The entertainment includes horse races.", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
      ],
    },
    {
      id: "cam14-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Match each story with a comment. Choose FIVE answers from the box (A–G).`,
      passageTitle: "Trevor & Stephanie — children's literature module",
      questions: [
        {
          id: "cam14-l-t4-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What does Trevor find interesting about the purpose of children's literature?",
          options: [
            { label: "A  the fact that authors may not realise what values they're teaching", value: "A" },
            { label: "B  the fact that literature can be entertaining and educational at the same time", value: "B" },
            { label: "C  the fact that adults expect children to imitate characters in literature", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Trevor says the module about the purpose of children's literature made him",
          options: [
            { label: "A  analyse some of the stories that his niece reads.", value: "A" },
            { label: "B  wonder how far popularity reflects good quality.", value: "B" },
            { label: "C  decide to start writing some children's stories.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Stephanie is interested in the Pictures module because",
          options: [
            { label: "A  she intends to become an illustrator.", value: "A" },
            { label: "B  she can remember beautiful illustrations from her childhood.", value: "B" },
            { label: "C  she believes illustrations are more important than words.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Trevor and Stephanie agree that comics",
          options: [
            { label: "A  are inferior to books.", value: "A" },
            { label: "B  have the potential for being useful.", value: "B" },
            { label: "C  discourage children from using their imagination.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q25", number: 25, type: "multiple_choice",
          question: "25. With regard to books aimed at only boys or only girls, Trevor was surprised",
          options: [
            { label: "A  how long the distinction had gone unquestioned.", value: "A" },
            { label: "B  how few books were aimed at both girls and boys.", value: "B" },
            { label: "C  how many children enjoyed books intended for the opposite sex.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q26", number: 26,
          groupLabel: `Questions 26–30: What comment is made about each of these stories? Choose FIVE answers from the box (A–G).\n\nA  translated into many other languages\nB  hard to read\nC  inspired a work in a different area of art\nD  more popular than the author's other works\nE  original title refers to another book\nF  started a new genre\nG  unlikely topic`,
          type: "matching", question: "26. Perrault's fairy tales",
          options: [
            { label: "A  translated into many other languages", value: "A" },
            { label: "B  hard to read", value: "B" },
            { label: "C  inspired a work in a different area of art", value: "C" },
            { label: "D  more popular than the author's other works", value: "D" },
            { label: "E  original title refers to another book", value: "E" },
            { label: "F  started a new genre", value: "F" },
            { label: "G  unlikely topic", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q27", number: 27, type: "matching", question: "27. The Swiss Family Robinson",
          options: [
            { label: "A  translated into many other languages", value: "A" },
            { label: "B  hard to read", value: "B" },
            { label: "C  inspired a work in a different area of art", value: "C" },
            { label: "D  more popular than the author's other works", value: "D" },
            { label: "E  original title refers to another book", value: "E" },
            { label: "F  started a new genre", value: "F" },
            { label: "G  unlikely topic", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q28", number: 28, type: "matching", question: "28. The Nutcracker and the Mouse King",
          options: [
            { label: "A  translated into many other languages", value: "A" },
            { label: "B  hard to read", value: "B" },
            { label: "C  inspired a work in a different area of art", value: "C" },
            { label: "D  more popular than the author's other works", value: "D" },
            { label: "E  original title refers to another book", value: "E" },
            { label: "F  started a new genre", value: "F" },
            { label: "G  unlikely topic", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q29", number: 29, type: "matching", question: "29. The Lord of the Rings",
          options: [
            { label: "A  translated into many other languages", value: "A" },
            { label: "B  hard to read", value: "B" },
            { label: "C  inspired a work in a different area of art", value: "C" },
            { label: "D  more popular than the author's other works", value: "D" },
            { label: "E  original title refers to another book", value: "E" },
            { label: "F  started a new genre", value: "F" },
            { label: "G  unlikely topic", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam14-l-t4-s3-q30", number: 30, type: "matching", question: "30. War Horse",
          options: [
            { label: "A  translated into many other languages", value: "A" },
            { label: "B  hard to read", value: "B" },
            { label: "C  inspired a work in a different area of art", value: "C" },
            { label: "D  more popular than the author's other works", value: "D" },
            { label: "E  original title refers to another book", value: "E" },
            { label: "F  started a new genre", value: "F" },
            { label: "G  unlikely topic", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
      ],
    },
    {
      id: "cam14-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `The hunt for sunken settlements and ancient shipwrecks

ATLIT-YAM
●  was a village on coast of eastern Mediterranean
●  thrived until about 7,000 BC
●  stone homes had a courtyard
●  had a semicircle of large stones round a 31 _______
●  cause of destruction unknown – now under the sea
●  biggest settlement from the prehistoric period found on the seabed
●  research carried out into structures, 32 _______ and human remains

TRADITIONAL AUTONOMOUS UNDERWATER VEHICLES (AUVs)
●  used in the oil industry, e.g. to make 33 _______
●  problems: they were expensive and 34 _______

LATEST AUVs
●  much easier to use, relatively cheap, sophisticated

Tests:
●  Marzamemi, Sicily: found ancient Roman ships carrying architectural elements made of 35 _______

Underwater internet:
●  36 _______ is used for short distance communication, acoustic waves for long distance
●  plans for communication with researchers by satellite
●  AUV can send data to another AUV that has better 37 _______, for example

Planned research in Gulf of Baratti:
●  to find out more about wrecks of ancient Roman ships, including
   –  one carrying 38 _______ supplies; tables may have been used for cleaning the 39 _______
   –  others carrying containers of olive oil or 40 _______`,
      questions: [
        { id: "cam14-l-t4-s4-q31", number: 31, type: "note_completion", question: "31. semicircle of large stones round a _______", correctAnswer: "spring", points: 1 },
        { id: "cam14-l-t4-s4-q32", number: 32, type: "note_completion", question: "32. research into structures, _______ and human remains", correctAnswer: "tools", points: 1 },
        { id: "cam14-l-t4-s4-q33", number: 33, type: "note_completion", question: "33. used in oil industry, e.g. to make _______", correctAnswer: "maps", points: 1 },
        { id: "cam14-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. problems: expensive and _______", correctAnswer: "heavy", points: 1 },
        { id: "cam14-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. architectural elements made of _______", correctAnswer: "marble", points: 1 },
        { id: "cam14-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. _______ is used for short distance communication", correctAnswer: "light", points: 1 },
        { id: "cam14-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. another AUV that has better _______", correctAnswer: "camera/cameras", points: 1 },
        { id: "cam14-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. one carrying _______ supplies", correctAnswer: "medical", points: 1 },
        { id: "cam14-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. tables may have been used for cleaning the _______", correctAnswer: "eyes", points: 1 },
        { id: "cam14-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. containers of olive oil or _______", correctAnswer: "wine", points: 1 },
      ],
    },
  ],
};

export const cambridge14ListeningTests: IELTSTest[] = [
  cambridge14_listening_t1,
  cambridge14_listening_t2,
  cambridge14_listening_t3,
  cambridge14_listening_t4,
];
