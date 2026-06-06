import type { IELTSTest } from "./ielts-tests";

const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/audio/${name}`;

const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/images/${name}`;

export const cambridge12_listening_t1: IELTSTest = {
  id: "cam12-listening-t1",
  title: "Cambridge IELTS 12 – Listening Test 1",
  bookNumber: 12,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam12-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam12-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `FAMILY EXCURSIONS

Cruise on a lake
●  Travel on an old steamship
●  Can take photos of the 1 _______ that surround the lake

Farm visit
●  Children can help feed the sheep
●  Visit can include a 40-minute ride on a 2 _______
●  Visitors can walk in the farm's 3 _______ by the lake
●  4 _______ is available at extra cost

Cycling trips
●  Cyclists explore the Back Road
●  A 5 _______ is provided
●  Only suitable for cyclists who have some 6 _______
   –  Bikes can be hired from 7 _______ (near the Cruise Ship Terminal)
●  Cyclists need:
   –  a repair kit
   –  food and drink
   –  a 8 _______ (can be hired)
●  There are no 9 _______ or accommodation in the area

Cost
●  Total cost for whole family of cruise and farm visit: $ 10 _______`,
      questions: [
        { id: "cam12-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Can take photos of the _______ that surround the lake", correctAnswer: "mountains", points: 1 },
        { id: "cam12-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. a 40-minute ride on a _______", correctAnswer: "horse", points: 1 },
        { id: "cam12-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. walk in the farm's _______ by the lake", correctAnswer: "garden/gardens", points: 1 },
        { id: "cam12-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. _______ is available at extra cost", correctAnswer: "lunch", points: 1 },
        { id: "cam12-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. A _______ is provided", correctAnswer: "map", points: 1 },
        { id: "cam12-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. Only suitable for cyclists who have some _______", correctAnswer: "experience", points: 1 },
        { id: "cam12-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. Bikes can be hired from _______", correctAnswer: "Ratchesons", points: 1 },
        { id: "cam12-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. a _______ (can be hired)", correctAnswer: "helmet", points: 1 },
        { id: "cam12-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. There are no _______ or accommodation in the area", correctAnswer: "shops", points: 1 },
        { id: "cam12-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Total cost for whole family: $ _______", correctAnswer: "267", points: 1 },
      ],
    },
    {
      id: "cam12-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15 & 16: Choose TWO letters, A–E.
Questions 17–20: Match each member of restaurant staff with a responsibility. Choose FOUR answers from the box (A–F).`,
      passageTitle: "Talk to new kitchen assistants",
      questions: [
        {
          id: "cam12-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. According to the manager, what do most people like about the job of kitchen assistant?",
          options: [
            { label: "A  the variety of work", value: "A" },
            { label: "B  the friendly atmosphere", value: "B" },
            { label: "C  the opportunities for promotion", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. The manager is concerned about some of the new staff's",
          options: [
            { label: "A  jewellery.", value: "A" },
            { label: "B  hair styles.", value: "B" },
            { label: "C  shoes.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q13", number: 13, type: "multiple_choice",
          question: "13. The manager says that the day is likely to be busy for kitchen staff because",
          options: [
            { label: "A  it is a public holiday.", value: "A" },
            { label: "B  the head chef is absent.", value: "B" },
            { label: "C  the restaurant is almost fully booked.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Only kitchen staff who are 18 or older are allowed to use",
          options: [
            { label: "A  the waste disposal unit.", value: "A" },
            { label: "B  the electric mixer.", value: "B" },
            { label: "C  the meat slicer.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q15", number: 15,
          groupLabel: `Questions 15 and 16: Choose TWO letters, A–E.\n\nAccording to the manager, which TWO things can make the job of kitchen assistant stressful?\n\nA  They have to follow orders immediately.\nB  The kitchen gets very hot.\nC  They may not be able to take a break.\nD  They have to do overtime.\nE  The work is physically demanding.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "15. Choose TWO (first answer)",
          options: [
            { label: "A  They have to follow orders immediately.", value: "A" },
            { label: "B  The kitchen gets very hot.", value: "B" },
            { label: "C  They may not be able to take a break.", value: "C" },
            { label: "D  They have to do overtime.", value: "D" },
            { label: "E  The work is physically demanding.", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q16", number: 16, type: "multiple_choice",
          question: "16. Choose TWO (second answer)",
          options: [
            { label: "A  They have to follow orders immediately.", value: "A" },
            { label: "B  The kitchen gets very hot.", value: "B" },
            { label: "C  They may not be able to take a break.", value: "C" },
            { label: "D  They have to do overtime.", value: "D" },
            { label: "E  The work is physically demanding.", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q17", number: 17,
          groupLabel: `Questions 17–20: What is the responsibility of each of the following restaurant staff? Choose FOUR answers from the box (A–F).\n\nA  training courses\nB  food stocks\nC  first aid\nD  breakages\nE  staff discounts\nF  timetables`,
          type: "matching", question: "17. Joy Parkins",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q18", number: 18, type: "matching", question: "18. David Field",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q19", number: 19, type: "matching", question: "19. Dexter Wills",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q20", number: 20, type: "matching", question: "20. Mike Smith",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    {
      id: "cam12-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–23: Choose the correct letter, A, B or C.
Questions 24–30: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageTitle: "Trudie & Stewart — paper on public libraries",
      passageText: `Study of local library: possible questions

●  whether it has a 24 _______ of its own
●  its policy regarding noise of various kinds
●  how it's affected by laws regarding all aspects of 25 _______
●  how the design needs to take the 26 _______ of customers into account
●  what 27 _______ is required in case of accidents
●  why a famous person's 28 _______ is located in the library
●  whether it has a 29 _______ of local organisations
●  how it's different from a library in a 30 _______`,
      questions: [
        {
          id: "cam12-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–23: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What will be the main topic of Trudie and Stewart's paper?",
          options: [
            { label: "A  how public library services are organised in different countries", value: "A" },
            { label: "B  how changes in society are reflected in public libraries", value: "B" },
            { label: "C  how the funding of public libraries has changed", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. They agree that one disadvantage of free digitalised books is that",
          options: [
            { label: "A  they may take a long time to read.", value: "A" },
            { label: "B  they can be difficult to read.", value: "B" },
            { label: "C  they are generally old.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Stewart expects that in the future libraries will",
          options: [
            { label: "A  maintain their traditional function.", value: "A" },
            { label: "B  become centres for local communities.", value: "B" },
            { label: "C  no longer contain any books.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam12-l-t1-s3-q24", number: 24, type: "note_completion", question: "24. whether it has a _______ of its own", correctAnswer: "budget", points: 1 },
        { id: "cam12-l-t1-s3-q25", number: 25, type: "note_completion", question: "25. laws regarding all aspects of _______", correctAnswer: "employment", points: 1 },
        { id: "cam12-l-t1-s3-q26", number: 26, type: "note_completion", question: "26. take the _______ of customers into account", correctAnswer: "safety", points: 1 },
        { id: "cam12-l-t1-s3-q27", number: 27, type: "note_completion", question: "27. what _______ is required in case of accidents", correctAnswer: "insurance", points: 1 },
        { id: "cam12-l-t1-s3-q28", number: 28, type: "note_completion", question: "28. a famous person's _______ is located in the library", correctAnswer: "diary", points: 1 },
        { id: "cam12-l-t1-s3-q29", number: 29, type: "note_completion", question: "29. whether it has a _______ of local organisations", correctAnswer: "database", points: 1 },
        { id: "cam12-l-t1-s3-q30", number: 30, type: "note_completion", question: "30. how it's different from a library in a _______", correctAnswer: "museum", points: 1 },
      ],
    },
    {
      id: "cam12-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.`,
      passageText: `Four business values

Many business values can result in 31 _______.
Senior managers need to understand and deal with the potential 32 _______ that may result.

Collaboration
●  During a training course, the speaker was in a team that had to build a 33 _______.
●  Other teams experienced 34 _______ from trying to collaborate.
●  The speaker's team won because they reduced collaboration.
●  Sales of a 35 _______ were poor because of collaboration.

Industriousness
●  Hard work may be a bad use of various company 36 _______.
●  The word 'lazy' in this context refers to people who avoid doing tasks that are 37 _______.

Creativity
●  An advertising campaign for a 38 _______ was memorable but failed to boost sales.
●  Creativity should be used as a response to a particular 39 _______.

Excellence
●  According to one study, on average, pioneers had a 40 _______ that was far higher than that of followers.
●  Companies that always aim at excellence may miss opportunities.`,
      questions: [
        { id: "cam12-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. Many business values can result in _______", correctAnswer: "damage", points: 1 },
        { id: "cam12-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. deal with the potential _______ that may result", correctAnswer: "side effects", points: 1 },
        { id: "cam12-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. a team that had to build a _______", correctAnswer: "bridge", points: 1 },
        { id: "cam12-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. Other teams experienced _______ from trying to collaborate", correctAnswer: "confusion", points: 1 },
        { id: "cam12-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. Sales of a _______ were poor because of collaboration", correctAnswer: "smartphone", points: 1 },
        { id: "cam12-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. bad use of various company _______", correctAnswer: "resources", points: 1 },
        { id: "cam12-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. avoid doing tasks that are _______", correctAnswer: "unnecessary/not necessary", points: 1 },
        { id: "cam12-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. An advertising campaign for a _______ was memorable", correctAnswer: "chocolate bar", points: 1 },
        { id: "cam12-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. Creativity should be used as a response to a particular _______", correctAnswer: "problem", points: 1 },
        { id: "cam12-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. pioneers had a _______ that was far higher than followers", correctAnswer: "market share", points: 1 },
      ],
    },
  ],
};

export const cambridge12_listening_t2: IELTSTest = {
  id: "cam12-listening-t2",
  title: "Cambridge IELTS 12 – Listening Test 2",
  bookNumber: 12,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam12-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam12-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Events during Kenton Festival

Start date: 16th May

Opening ceremony (first day)
●  In town centre, starting at 1 _______
●  The mayor will make a speech
●  A 2 _______ will perform
●  Performance of a 3 _______ about Helen Tungate (a 4 _______)
●  Evening fireworks display situated across the 5 _______

Other events
●  Video about relationships that children have with their 6 _______
   Venue: 7 _______ House
●  Performance of 8 _______ dances
   Venue: the 9 _______ market in the town centre
   Time: 2 and 5 p.m. every day except 1st day of festival
●  Several professional concerts and one by children
   Venue: library
   Time: 6.30 p.m. on the 18th

Tickets available online from festival box office and from shops which have the festival 10 _______ in their windows`,
      questions: [
        { id: "cam12-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. In town centre, starting at _______", correctAnswer: "2.45", points: 1 },
        { id: "cam12-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. A _______ will perform", correctAnswer: "band", points: 1 },
        { id: "cam12-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. Performance of a _______ about Helen Tungate", correctAnswer: "play", points: 1 },
        { id: "cam12-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. Helen Tungate (a _______)", correctAnswer: "scientist", points: 1 },
        { id: "cam12-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. Evening fireworks display situated across the _______", correctAnswer: "river", points: 1 },
        { id: "cam12-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. relationships that children have with their _______", correctAnswer: "grandparents", points: 1 },
        { id: "cam12-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. Venue: _______ House", correctAnswer: "Handsworth", points: 1 },
        { id: "cam12-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. Performance of _______ dances", correctAnswer: "traditional", points: 1 },
        { id: "cam12-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. the _______ market in the town centre", correctAnswer: "outdoor", points: 1 },
        { id: "cam12-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. shops which have the festival _______ in their windows", correctAnswer: "logo", points: 1 },
      ],
    },
    {
      id: "cam12-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–15: Choose the correct letter, A, B or C.
Questions 16–20: Match each day with a comment about the play. Choose FIVE answers from the box (A–G).`,
      passageTitle: "Theatre trip to Munich",
      questions: [
        {
          id: "cam12-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–15: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. When the group meet at the airport they will have",
          options: [
            { label: "A  breakfast.", value: "A" },
            { label: "B  coffee.", value: "B" },
            { label: "C  lunch.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. The group will be met at Munich Airport by",
          options: [
            { label: "A  an employee at the National Theatre.", value: "A" },
            { label: "B  a theatre manager.", value: "B" },
            { label: "C  a tour operator.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. How much will they pay per night for a double room at the hotel?",
          options: [
            { label: "A  110 euros", value: "A" },
            { label: "B  120 euros", value: "B" },
            { label: "C  150 euros", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. What type of restaurant will they go to on Tuesday evening?",
          options: [
            { label: "A  an Italian restaurant", value: "A" },
            { label: "B  a Lebanese restaurant", value: "B" },
            { label: "C  a typical restaurant of the region", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q15", number: 15, type: "multiple_choice",
          question: "15. Who will they meet on Wednesday afternoon?",
          options: [
            { label: "A  an actor", value: "A" },
            { label: "B  a playwright", value: "B" },
            { label: "C  a theatre director", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q16", number: 16,
          groupLabel: `Questions 16–20: What does the man say about the play on each of the following days? Choose FIVE answers from the box (A–G).\n\nA  The playwright will be present.\nB  The play was written to celebrate an anniversary.\nC  The play will be performed inside a historic building.\nD  The play will be accompanied by live music.\nE  The play will be performed outdoors.\nF  The play will be performed for the first time.\nG  The performance will be attended by officials from the town.`,
          type: "matching", question: "16. Wednesday",
          options: [
            { label: "A  The playwright will be present.", value: "A" },
            { label: "B  The play was written to celebrate an anniversary.", value: "B" },
            { label: "C  The play will be performed inside a historic building.", value: "C" },
            { label: "D  The play will be accompanied by live music.", value: "D" },
            { label: "E  The play will be performed outdoors.", value: "E" },
            { label: "F  The play will be performed for the first time.", value: "F" },
            { label: "G  The performance will be attended by officials from the town.", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q17", number: 17, type: "matching", question: "17. Thursday",
          options: [
            { label: "A  The playwright will be present.", value: "A" },
            { label: "B  The play was written to celebrate an anniversary.", value: "B" },
            { label: "C  The play will be performed inside a historic building.", value: "C" },
            { label: "D  The play will be accompanied by live music.", value: "D" },
            { label: "E  The play will be performed outdoors.", value: "E" },
            { label: "F  The play will be performed for the first time.", value: "F" },
            { label: "G  The performance will be attended by officials from the town.", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q18", number: 18, type: "matching", question: "18. Friday",
          options: [
            { label: "A  The playwright will be present.", value: "A" },
            { label: "B  The play was written to celebrate an anniversary.", value: "B" },
            { label: "C  The play will be performed inside a historic building.", value: "C" },
            { label: "D  The play will be accompanied by live music.", value: "D" },
            { label: "E  The play will be performed outdoors.", value: "E" },
            { label: "F  The play will be performed for the first time.", value: "F" },
            { label: "G  The performance will be attended by officials from the town.", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q19", number: 19, type: "matching", question: "19. Saturday",
          options: [
            { label: "A  The playwright will be present.", value: "A" },
            { label: "B  The play was written to celebrate an anniversary.", value: "B" },
            { label: "C  The play will be performed inside a historic building.", value: "C" },
            { label: "D  The play will be accompanied by live music.", value: "D" },
            { label: "E  The play will be performed outdoors.", value: "E" },
            { label: "F  The play will be performed for the first time.", value: "F" },
            { label: "G  The performance will be attended by officials from the town.", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam12-l-t2-s2-q20", number: 20, type: "matching", question: "20. Monday",
          options: [
            { label: "A  The playwright will be present.", value: "A" },
            { label: "B  The play was written to celebrate an anniversary.", value: "B" },
            { label: "C  The play will be performed inside a historic building.", value: "C" },
            { label: "D  The play will be accompanied by live music.", value: "D" },
            { label: "E  The play will be performed outdoors.", value: "E" },
            { label: "F  The play will be performed for the first time.", value: "F" },
            { label: "G  The performance will be attended by officials from the town.", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    {
      id: "cam12-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Complete the flow chart below. Choose FIVE answers from the box (A–G).`,
      passageTitle: "James & Beth — Scandinavian Studies",
      passageText: `How James will write his paper on the Vikings

A  bullet points   B  film        C  notes         D  structure
E  student paper   F  textbook    G  documentary

He'll read a 26 _______ and choose his topic.

↓

He'll borrow a 27 _______ from Beth.

↓

He'll plan the 28 _______ of the paper.

↓

He'll read some source material and write 29 _______.

↓

He'll write the paper using 30 _______.

↓

He'll write the complete paper.`,
      questions: [
        {
          id: "cam12-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. James chose to take Scandinavian Studies because when he was a child",
          options: [
            { label: "A  he was often taken to Denmark.", value: "A" },
            { label: "B  his mother spoke to him in Danish.", value: "B" },
            { label: "C  a number of Danish people visited his family.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. When he graduates, James would like to",
          options: [
            { label: "A  take a postgraduate course.", value: "A" },
            { label: "B  work in the media.", value: "B" },
            { label: "C  become a translator.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t2-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Which course will end this term?",
          options: [
            { label: "A  Swedish cinema", value: "A" },
            { label: "B  Danish television programmes", value: "B" },
            { label: "C  Scandinavian literature", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. They agree that James's literature paper this term will be on",
          options: [
            { label: "A  19th century playwrights", value: "A" },
            { label: "B  the Icelandic sagas", value: "B" },
            { label: "C  modern Scandinavian novels.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t2-s3-q25", number: 25, type: "multiple_choice",
          question: "25. Beth recommends that James's paper should be",
          options: [
            { label: "A  a historical overview of the genre.", value: "A" },
            { label: "B  an in-depth analysis of a single writer.", value: "B" },
            { label: "C  a study of the social background to the literature.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam12-l-t2-s3-q26", number: 26, type: "note_completion", question: "26. He'll read a _______ and choose his topic", correctAnswer: "E/student paper", points: 1 },
        { id: "cam12-l-t2-s3-q27", number: 27, type: "note_completion", question: "27. He'll borrow a _______ from Beth", correctAnswer: "G/documentary", points: 1 },
        { id: "cam12-l-t2-s3-q28", number: 28, type: "note_completion", question: "28. He'll plan the _______ of the paper", correctAnswer: "D/structure", points: 1 },
        { id: "cam12-l-t2-s3-q29", number: 29, type: "note_completion", question: "29. read some source material and write _______", correctAnswer: "C/notes", points: 1 },
        { id: "cam12-l-t2-s3-q30", number: 30, type: "note_completion", question: "30. write the paper using _______", correctAnswer: "A/bullet points", points: 1 },
      ],
    },
    {
      id: "cam12-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Conflict at work

Conflict mostly consists of behaviour in the general category of 31 _______
Often a result of people wanting to prove their 32 _______
Also caused by differences in 33 _______ between people
34 '_______' conflicts: people more concerned about own team than about company
Conflict-related stress can cause 35 _______ that may last for months

Chief Executives (CEOs)
●  Many have both 36 _______ and anxiety
●  May not like to have their decisions questioned
●  There may be conflict between people who have different 37 _______

Other managers
●  A structure that is more 38 _______ may create a feeling of uncertainty about who staff should report to.

Minimising conflict
●  Bosses need to try hard to gain 39 _______
●  Someone from outside the company may be given the role of 40 _______ in order to resolve conflicts.`,
      questions: [
        { id: "cam12-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. behaviour in the general category of _______", correctAnswer: "bullying", points: 1 },
        { id: "cam12-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. people wanting to prove their _______", correctAnswer: "superiority", points: 1 },
        { id: "cam12-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. differences in _______ between people", correctAnswer: "personality", points: 1 },
        { id: "cam12-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. '_______' conflicts: people more concerned about own team", correctAnswer: "structural", points: 1 },
        { id: "cam12-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. stress can cause _______ that may last for months", correctAnswer: "absence", points: 1 },
        { id: "cam12-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. Many have both _______ and anxiety", correctAnswer: "confidence", points: 1 },
        { id: "cam12-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. conflict between people who have different _______", correctAnswer: "visions", points: 1 },
        { id: "cam12-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. A structure that is more _______", correctAnswer: "democratic", points: 1 },
        { id: "cam12-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. Bosses need to try hard to gain _______", correctAnswer: "respect", points: 1 },
        { id: "cam12-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. given the role of _______ in order to resolve conflicts", correctAnswer: "mediator", points: 1 },
      ],
    },
  ],
};

export const cambridge12_listening_t3: IELTSTest = {
  id: "cam12-listening-t3",
  title: "Cambridge IELTS 12 – Listening Test 3",
  bookNumber: 12,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam12-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam12-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `PUBLIC LIBRARY

The library re-opened last month

The library now has
●  a seating area with magazines
●  an expanded section for books on 1 _______
●  a new section on local 2 _______
●  a community room for meetings (also possible to 3 _______ there)
●  a new section of books for 4 _______

For younger children
●  the next Science Club meeting: experiments using things from your 5 _______
●  Reading Challenge: read six books during the holidays

For adults
●  this Friday: a local author talks about a novel based on a real 6 _______
●  IT support is available on Tuesday – no 7 _______ is necessary
●  free check of blood 8 _______ and cholesterol levels (over 60s only)

Other information
●  the library shop sells wall-charts, cards and 9 _______
●  evenings and weekends: free 10 _______ is available`,
      questions: [
        { id: "cam12-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. expanded section for books on _______", correctAnswer: "travel/travelling/traveling", points: 1 },
        { id: "cam12-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. a new section on local _______", correctAnswer: "history", points: 1 },
        { id: "cam12-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. community room for meetings (also possible to _______ there)", correctAnswer: "study", points: 1 },
        { id: "cam12-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. new section of books for _______", correctAnswer: "teenagers", points: 1 },
        { id: "cam12-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. experiments using things from your _______", correctAnswer: "kitchen", points: 1 },
        { id: "cam12-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. a novel based on a real _______", correctAnswer: "crime", points: 1 },
        { id: "cam12-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. no _______ is necessary", correctAnswer: "appointment/booking", points: 1 },
        { id: "cam12-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. free check of blood _______ and cholesterol levels", correctAnswer: "sugar", points: 1 },
        { id: "cam12-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. library shop sells wall-charts, cards and _______", correctAnswer: "stamps", points: 1 },
        { id: "cam12-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. evenings and weekends: free _______ is available", correctAnswer: "parking", points: 1 },
      ],
    },
    {
      id: "cam12-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13 & 14: Choose TWO letters, A–E.
Questions 15–17: Choose the correct letter, A, B or C.
Questions 18–20: Complete the fitness-holiday table below. Write ONE WORD ONLY for each answer.`,
      passageTitle: "BC Travel — activity holidays",
      passageText: `Fitness Holidays

Location               | Main focus          | Other comments
Ireland and Italy     | general fitness     | ●  personally designed programme
                      |                     | ●  also reduces 18 _______
Greece                | 19 _______ control  | ●  includes exercise on the beach
Morocco               | mountain biking     | ●  wide variety of levels
                      |                     | ●  one holiday specially designed for 20 _______`,
      questions: [
        {
          id: "cam12-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO age groups are taking increasing numbers of holidays with BC Travel?\n\nA  16–30 years\nB  31–42 years\nC  43–54 years\nD  55–64 years\nE  over 65 years\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  16–30 years", value: "A" },
            { label: "B  31–42 years", value: "B" },
            { label: "C  43–54 years", value: "C" },
            { label: "D  55–64 years", value: "D" },
            { label: "E  over 65 years", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam12-l-t3-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  16–30 years", value: "A" },
            { label: "B  31–42 years", value: "B" },
            { label: "C  43–54 years", value: "C" },
            { label: "D  55–64 years", value: "D" },
            { label: "E  over 65 years", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam12-l-t3-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO are the main reasons given for the popularity of activity holidays?\n\nA  Clients make new friends.\nB  Clients learn a useful skill.\nC  Clients learn about a different culture.\nD  Clients are excited by the risk involved.\nE  Clients find them good value for money.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  Clients make new friends.", value: "A" },
            { label: "B  Clients learn a useful skill.", value: "B" },
            { label: "C  Clients learn about a different culture.", value: "C" },
            { label: "D  Clients are excited by the risk involved.", value: "D" },
            { label: "E  Clients find them good value for money.", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam12-l-t3-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  Clients make new friends.", value: "A" },
            { label: "B  Clients learn a useful skill.", value: "B" },
            { label: "C  Clients learn about a different culture.", value: "C" },
            { label: "D  Clients are excited by the risk involved.", value: "D" },
            { label: "E  Clients find them good value for money.", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam12-l-t3-s2-q15", number: 15,
          groupLabel: `Questions 15–17: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "15. How does BC Travel plan to expand the painting holidays?",
          options: [
            { label: "A  by adding to the number of locations", value: "A" },
            { label: "B  by increasing the range of levels", value: "B" },
            { label: "C  by employing more teachers", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t3-s2-q16", number: 16, type: "multiple_choice",
          question: "16. Why are BC Travel's cooking holidays unusual?",
          options: [
            { label: "A  They only use organic foods.", value: "A" },
            { label: "B  They have an international focus.", value: "B" },
            { label: "C  They mainly involve vegetarian dishes.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t3-s2-q17", number: 17, type: "multiple_choice",
          question: "17. What does the speaker say about the photography holidays?",
          options: [
            { label: "A  Clients receive individual tuition.", value: "A" },
            { label: "B  The tutors are also trained guides.", value: "B" },
            { label: "C  Advice is given on selling photographs.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        { id: "cam12-l-t3-s2-q18", number: 18, type: "table_completion", question: "18. Ireland and Italy — also reduces _______", correctAnswer: "stress", points: 1 },
        { id: "cam12-l-t3-s2-q19", number: 19, type: "table_completion", question: "19. Greece — _______ control", correctAnswer: "weight", points: 1 },
        { id: "cam12-l-t3-s2-q20", number: 20, type: "table_completion", question: "20. Morocco — holiday specially designed for _______", correctAnswer: "families", points: 1 },
      ],
    },
    {
      id: "cam12-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Complete the flow chart below. Choose SIX answers from the box (A–H).
Questions 27–30: Choose the correct letter, A, B or C.`,
      passageTitle: "Natalie & Dave — tourism case study and Horton Castle",
      passageText: `STAGES IN DOING A TOURISM CASE STUDY

A  patterns        B  names        C  sources       D  questions
E  employees       F  solutions    G  headings      H  officials

RESEARCH
Locate and read relevant articles, noting key information and also 21 _______

Identify a problem or need

Select interviewees – these may be site 22 _______, visitors or city 23 _______

Prepare and carry out interviews. If possible, collect statistics.

Check whether 24 _______ of interviewees can be used.

↓

ANALYSIS
Select relevant information and try to identify 25 _______

Decide on the best form of visuals

↓

WRITING THE CASE STUDY
Give some background before writing the main sections

Do NOT end with 26 _______`,
      questions: [
        { id: "cam12-l-t3-s3-q21", number: 21, type: "note_completion", question: "21. noting key information and also _______", correctAnswer: "C/sources", points: 1 },
        { id: "cam12-l-t3-s3-q22", number: 22, type: "note_completion", question: "22. Select interviewees – these may be site _______", correctAnswer: "E/employees", points: 1 },
        { id: "cam12-l-t3-s3-q23", number: 23, type: "note_completion", question: "23. visitors or city _______", correctAnswer: "H/officials", points: 1 },
        { id: "cam12-l-t3-s3-q24", number: 24, type: "note_completion", question: "24. Check whether _______ of interviewees can be used", correctAnswer: "B/names", points: 1 },
        { id: "cam12-l-t3-s3-q25", number: 25, type: "note_completion", question: "25. try to identify _______", correctAnswer: "A/patterns", points: 1 },
        { id: "cam12-l-t3-s3-q26", number: 26, type: "note_completion", question: "26. Do NOT end with _______", correctAnswer: "F/solutions", points: 1 },
        {
          id: "cam12-l-t3-s3-q27", number: 27,
          groupLabel: `Questions 27–30: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "27. Natalie and Dave agree one reason why so few people visit Horton Castle is that",
          options: [
            { label: "A  the publicity is poor.", value: "A" },
            { label: "B  it is difficult to get to.", value: "B" },
            { label: "C  there is little there of interest.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t3-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Natalie and Dave agree that the greatest problem with a visitor centre could be",
          options: [
            { label: "A  covering the investment costs.", value: "A" },
            { label: "B  finding a big enough space for it.", value: "B" },
            { label: "C  dealing with planning restrictions.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t3-s3-q29", number: 29, type: "multiple_choice",
          question: "29. What does Dave say about conditions in the town of Horton?",
          options: [
            { label: "A  There is a lot of unemployment.", value: "A" },
            { label: "B  There are few people of working age.", value: "B" },
            { label: "C  There are opportunities for skilled workers.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t3-s3-q30", number: 30, type: "multiple_choice",
          question: "30. According to Natalie, one way to prevent damage to the castle site would be to",
          options: [
            { label: "A  insist visitors have a guide.", value: "A" },
            { label: "B  make visitors keep to the paths.", value: "B" },
            { label: "C  limit visitor numbers.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    {
      id: "cam12-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `The effects of environmental change on birds

Mercury (Hg)
●  Highly toxic
●  Released into the atmosphere from coal
●  In water it may be consumed by fish
●  It has also recently been found to affect birds which feed on 31 _______

Research on effects of mercury on birds
●  Claire Varian-Ramos is investigating
   –  the effects on birds' 32 _______ or mental processes, e.g. memory
   –  the effects on bird song (usually learned from a bird's 33 _______)
●  Findings:
   –  songs learned by birds exposed to mercury are less 34 _______
   –  this may have a negative effect on birds' 35 _______
●  Lab-based studies
   –  allow more 36 _______ for the experimenter

Implications for humans
●  Migrating birds such as 37 _______ containing mercury may be eaten by humans
●  Mercury also causes problems in learning 38 _______
●  Mercury in a mother's body from 39 _______ may affect the unborn child
●  New regulations for mercury emissions will affect everyone's energy 40 _______`,
      questions: [
        { id: "cam12-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. affect birds which feed on _______", correctAnswer: "insects", points: 1 },
        { id: "cam12-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. effects on birds' _______ or mental processes", correctAnswer: "behaviour/behavior", points: 1 },
        { id: "cam12-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. bird song learned from a bird's _______", correctAnswer: "father", points: 1 },
        { id: "cam12-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. songs learned by exposed birds are less _______", correctAnswer: "complex/complicated", points: 1 },
        { id: "cam12-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. negative effect on birds' _______", correctAnswer: "reproduction/breeding", points: 1 },
        { id: "cam12-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. allow more _______ for the experimenter", correctAnswer: "control", points: 1 },
        { id: "cam12-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. Migrating birds such as _______ may be eaten", correctAnswer: "duck/ducks", points: 1 },
        { id: "cam12-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. Mercury causes problems in learning _______", correctAnswer: "language", points: 1 },
        { id: "cam12-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. Mercury in a mother's body from _______", correctAnswer: "food", points: 1 },
        { id: "cam12-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. affect everyone's energy _______", correctAnswer: "cost/costs/price/prices/bill/bills", points: 1 },
      ],
    },
  ],
};

export const cambridge12_listening_t4: IELTSTest = {
  id: "cam12-listening-t4",
  title: "Cambridge IELTS 12 – Listening Test 4",
  bookNumber: 12,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam12-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam12-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Cycle tour leader: Applicant enquiry

Name: Margaret Smith

About the applicant:
●  wants a 1 _______ job
●  will soon start work as a 2 _______
●  has led cycle trips in 3 _______
●  interested in being a leader of a cycling trip for families
●  is currently doing voluntary work with members of a 4 _______ club
●  available for five months from the 1st of 5 _______
●  can't eat 6 _______

Contact details:
●  address: 27 7 _______ Place, Dumfries
●  postcode: 8 _______

Interview:
●  interview at 2.30 p.m. on 9 _______
●  will plan a short 10 _______ about being a tour guide`,
      questions: [
        { id: "cam12-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. wants a _______ job", correctAnswer: "temporary", points: 1 },
        { id: "cam12-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. will soon start work as a _______", correctAnswer: "doctor", points: 1 },
        { id: "cam12-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. has led cycle trips in _______", correctAnswer: "Africa", points: 1 },
        { id: "cam12-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. voluntary work with members of a _______ club", correctAnswer: "youth", points: 1 },
        { id: "cam12-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. available for five months from the 1st of _______", correctAnswer: "May", points: 1 },
        { id: "cam12-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. can't eat _______", correctAnswer: "cheese", points: 1 },
        { id: "cam12-l-t4-s1-q7", number: 7, type: "note_completion", question: "7. address: 27 _______ Place, Dumfries", correctAnswer: "Arbuthnot", points: 1 },
        { id: "cam12-l-t4-s1-q8", number: 8, type: "note_completion", question: "8. postcode: _______", correctAnswer: "DG7 4PH", points: 1 },
        { id: "cam12-l-t4-s1-q9", number: 9, type: "note_completion", question: "9. interview at 2.30 p.m. on _______", correctAnswer: "Tuesday", points: 1 },
        { id: "cam12-l-t4-s1-q10", number: 10, type: "note_completion", question: "10. will plan a short _______ about being a tour guide", correctAnswer: "talk/presentation", points: 1 },
      ],
    },
    {
      id: "cam12-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15–20: Label the map below. Write the correct letter, A–I, next to each location.`,
      passageTitle: "Visiting the Sheepmarket area",
      diagramUrl: imageUrl("cam12test4map.png"),
      questions: [
        {
          id: "cam12-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Which is the most rapidly-growing group of residents in the Sheepmarket area?",
          options: [
            { label: "A  young professional people", value: "A" },
            { label: "B  students from the university", value: "B" },
            { label: "C  employees in the local market", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q12", number: 12, type: "multiple_choice",
          question: "12. The speaker recommends the side streets in the Sheepmarket for their",
          options: [
            { label: "A  international restaurants.", value: "A" },
            { label: "B  historical buildings.", value: "B" },
            { label: "C  arts and crafts.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Clothes designed by entrants for the Young Fashion competition must",
          options: [
            { label: "A  be modelled by the designers themselves.", value: "A" },
            { label: "B  be inspired by aspects of contemporary culture.", value: "B" },
            { label: "C  be made from locally produced materials.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Car parking is free in some car parks if you",
          options: [
            { label: "A  stay for less than an hour.", value: "A" },
            { label: "B  buy something in the shops.", value: "B" },
            { label: "C  park in the evenings or at weekends.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Label the map of the Sheepmarket area above. Write the correct letter, A–I, next to each location.`,
          type: "matching", question: "15. The Reynolds House",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q16", number: 16, type: "matching", question: "16. The Thumb",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q17", number: 17, type: "matching", question: "17. The Museum",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q18", number: 18, type: "matching", question: "18. The Contemporary Art Gallery",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q19", number: 19, type: "matching", question: "19. The Warner Gallery",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "I", points: 1,
        },
        {
          id: "cam12-l-t4-s2-q20", number: 20, type: "matching", question: "20. Nucleus",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    {
      id: "cam12-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Complete the table below. Write ONE WORD ONLY for each answer.
Questions 25–30: Match each film with a comment. Choose SIX answers from the box (A–G).`,
      passageTitle: "Presentation of film adaptations of Shakespeare's plays",
      passageText: `Stages of presentation                                              | Work still to be done
Introduce Giannetti's book containing a 21 _______ of adaptations   | Organise notes
Ask class to suggest the 22 _______ adaptations                     | No further work needed
Present Rachel Malchow's ideas                                      | Prepare some 23 _______
Discuss relationship between adaptations and 24 _______             | No further work needed
at the time of making the film                                      |`,
      questions: [
        { id: "cam12-l-t4-s3-q21", number: 21, type: "table_completion", question: "21. Giannetti's book containing a _______ of adaptations", correctAnswer: "classification", points: 1 },
        { id: "cam12-l-t4-s3-q22", number: 22, type: "table_completion", question: "22. Ask class to suggest the _______ adaptations", correctAnswer: "worst", points: 1 },
        { id: "cam12-l-t4-s3-q23", number: 23, type: "table_completion", question: "23. Present Rachel Malchow's ideas — Prepare some _______", correctAnswer: "slides", points: 1 },
        { id: "cam12-l-t4-s3-q24", number: 24, type: "table_completion", question: "24. relationship between adaptations and _______ at the time of making the film", correctAnswer: "issues", points: 1 },
        {
          id: "cam12-l-t4-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What do the speakers say about each of the following films? Choose SIX answers from the box (A–G).\n\nA  clearly shows the historical period\nB  contains only parts of the play\nC  is too similar to another kind of film\nD  turned out to be unpopular with audiences\nE  presents the play in a different period from the original\nF  sets the original in a different country\nG  incorporates a variety of art forms`,
          type: "matching", question: "25. Ran",
          options: [
            { label: "A  clearly shows the historical period", value: "A" },
            { label: "B  contains only parts of the play", value: "B" },
            { label: "C  is too similar to another kind of film", value: "C" },
            { label: "D  turned out to be unpopular with audiences", value: "D" },
            { label: "E  presents the play in a different period from the original", value: "E" },
            { label: "F  sets the original in a different country", value: "F" },
            { label: "G  incorporates a variety of art forms", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam12-l-t4-s3-q26", number: 26, type: "matching", question: "26. Much Ado About Nothing",
          options: [
            { label: "A  clearly shows the historical period", value: "A" },
            { label: "B  contains only parts of the play", value: "B" },
            { label: "C  is too similar to another kind of film", value: "C" },
            { label: "D  turned out to be unpopular with audiences", value: "D" },
            { label: "E  presents the play in a different period from the original", value: "E" },
            { label: "F  sets the original in a different country", value: "F" },
            { label: "G  incorporates a variety of art forms", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t4-s3-q27", number: 27, type: "matching", question: "27. Romeo & Juliet",
          options: [
            { label: "A  clearly shows the historical period", value: "A" },
            { label: "B  contains only parts of the play", value: "B" },
            { label: "C  is too similar to another kind of film", value: "C" },
            { label: "D  turned out to be unpopular with audiences", value: "D" },
            { label: "E  presents the play in a different period from the original", value: "E" },
            { label: "F  sets the original in a different country", value: "F" },
            { label: "G  incorporates a variety of art forms", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam12-l-t4-s3-q28", number: 28, type: "matching", question: "28. Hamlet",
          options: [
            { label: "A  clearly shows the historical period", value: "A" },
            { label: "B  contains only parts of the play", value: "B" },
            { label: "C  is too similar to another kind of film", value: "C" },
            { label: "D  turned out to be unpopular with audiences", value: "D" },
            { label: "E  presents the play in a different period from the original", value: "E" },
            { label: "F  sets the original in a different country", value: "F" },
            { label: "G  incorporates a variety of art forms", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t4-s3-q29", number: 29, type: "matching", question: "29. Prospero's Books",
          options: [
            { label: "A  clearly shows the historical period", value: "A" },
            { label: "B  contains only parts of the play", value: "B" },
            { label: "C  is too similar to another kind of film", value: "C" },
            { label: "D  turned out to be unpopular with audiences", value: "D" },
            { label: "E  presents the play in a different period from the original", value: "E" },
            { label: "F  sets the original in a different country", value: "F" },
            { label: "G  incorporates a variety of art forms", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam12-l-t4-s3-q30", number: 30, type: "matching", question: "30. Looking for Richard",
          options: [
            { label: "A  clearly shows the historical period", value: "A" },
            { label: "B  contains only parts of the play", value: "B" },
            { label: "C  is too similar to another kind of film", value: "C" },
            { label: "D  turned out to be unpopular with audiences", value: "D" },
            { label: "E  presents the play in a different period from the original", value: "E" },
            { label: "F  sets the original in a different country", value: "F" },
            { label: "G  incorporates a variety of art forms", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    {
      id: "cam12-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Noise in Cities

Past research focused on noise level (measured in decibels) and people's responses.

Noise 'maps'
●  show that the highest noise levels are usually found on roads
●  do not show other sources of noise, e.g. when windows are open or people's neighbours are in their 31 _______
●  ignore variation in people's perceptions of noise
●  have made people realize that the noise is a 32 _______ issue that must be dealt with

Problems caused by noise
●  sleep disturbance
●  increase in amount of stress
●  effect on the 33 _______ of schoolchildren

Different types of noise
●  Some noises can be considered pleasant e.g. the sound of a 34 _______ in a town
●  To investigate this, researchers may use methods from 35 _______ sciences e.g. questionnaires

What people want
●  Plenty of activity in urban environments which are 36 _______, but also allow people to relax

But architects and town planners
●  do not get much 37 _______ in acoustics
●  regard sound as the responsibility of engineers

Understanding sound as an art form
We need to know
●  how sound relates to 38 _______
●  what can be learnt from psychology about the effects of sound
●  whether physics can help us understand the 39 _______ of sound

Virtual reality programs
●  advantage: predict the effect of buildings
●  current disadvantage: they are 40 _______`,
      questions: [
        { id: "cam12-l-t4-s4-q31", number: 31, type: "note_completion", question: "31. people's neighbours are in their _______", correctAnswer: "garden/gardens", points: 1 },
        { id: "cam12-l-t4-s4-q32", number: 32, type: "note_completion", question: "32. noise is a _______ issue that must be dealt with", correctAnswer: "political", points: 1 },
        { id: "cam12-l-t4-s4-q33", number: 33, type: "note_completion", question: "33. effect on the _______ of schoolchildren", correctAnswer: "work/study", points: 1 },
        { id: "cam12-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. the sound of a _______ in a town", correctAnswer: "fountain", points: 1 },
        { id: "cam12-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. methods from _______ sciences e.g. questionnaires", correctAnswer: "social", points: 1 },
        { id: "cam12-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. urban environments which are _______", correctAnswer: "lively", points: 1 },
        { id: "cam12-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. architects do not get much _______ in acoustics", correctAnswer: "training", points: 1 },
        { id: "cam12-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. how sound relates to _______", correctAnswer: "culture", points: 1 },
        { id: "cam12-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. physics can help us understand the _______ of sound", correctAnswer: "nature", points: 1 },
        { id: "cam12-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. current disadvantage: they are _______", correctAnswer: "silent", points: 1 },
      ],
    },
  ],
};

export const cambridge12ListeningTests: IELTSTest[] = [
  cambridge12_listening_t1,
  cambridge12_listening_t2,
  cambridge12_listening_t3,
  cambridge12_listening_t4,
];
