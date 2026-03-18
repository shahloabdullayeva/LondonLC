import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 17 – TEST 1  (Academic Reading)
// Passages: The development of the London underground railway /
//           Stadiums: past, present and future /
//           To catch a king
// ============================================================
export const cambridge17_reading_t1: IELTSTest = {
  id: "cam17-reading-academic-t1",
  title: "Cambridge IELTS 17 – Test 1",
  bookNumber: 17,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam17-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The development of the London underground railway",
      passageText: `In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital's historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded.

Amongst the most vocal advocates for a solution to London's traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson's ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed.

The two groups merged and established the Metropolitan Railway Company in August 1854. The company's plan was to construct an underground railway line from the Great Western Railway's (GWR) station at Paddington to the edge of the City at Farringdon Street – a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted.

The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as 'cut and cover'. A trench about ten metres wide and six metres deep was dug, and the sides temporarily held up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt.

The Metropolitan line, which opened on 10 January 1863, was the world's first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan's first year of operation, 9.5 million journeys had been made.

Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east to London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels.

Despite the extension of the underground railway, by the 1880s, congestion on London's streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital's centre. The 'cut and cover' method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground.

Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn't until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world's first deep-level electric railway, the City & South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply. Although the City & South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the 'Tuppenny Tube', began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today's Underground system was in place.`,
      instructions: `Questions 1–6: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 7–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–6: Note completion ─────────────────────────────
        {
          id: "cam17-ra-t1-s1-q1",
          number: 1,
          groupLabel: "Questions 1–6: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe London underground railway\n\nThe problem\n●   The 1 …………………… of London increased rapidly between 1800 and 1850\n●   The streets were full of horse-drawn vehicles\n\nThe proposed solution\n●   Charles Pearson, a solicitor, suggested building an underground railway\n●   Building the railway would make it possible to move people to better housing in the 2 ……………………\n●   A number of 3 …………………… agreed with Pearson's idea\n●   The company initially had problems getting the 4 …………………… needed for the project\n●   Negative articles about the project appeared in the 5 ……………………\n\nThe construction\n●   The chosen route did not require many buildings to be pulled down\n●   The 'cut and cover' method was used to construct the tunnels\n●   With the completion of the brick arch, the tunnel was covered with 6 ……………………",
          type: "note_completion",
          question: "1. The _______ of London increased rapidly between 1800 and 1850",
          correctAnswer: "population",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q2",
          number: 2,
          type: "note_completion",
          question: "2. Building the railway would make it possible to move people to better housing in the _______",
          correctAnswer: "suburbs",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q3",
          number: 3,
          type: "note_completion",
          question: "3. A number of _______ agreed with Pearson's idea",
          correctAnswer: "businessmen",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q4",
          number: 4,
          type: "note_completion",
          question: "4. The company initially had problems getting the _______ needed for the project",
          correctAnswer: "funding",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q5",
          number: 5,
          type: "note_completion",
          question: "5. Negative articles about the project appeared in the _______",
          correctAnswer: "press",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q6",
          number: 6,
          type: "note_completion",
          question: "6. With the completion of the brick arch, the tunnel was covered with _______",
          correctAnswer: "soil",
          points: 1,
        },
        // ── Q7–13: True/False/Not Given ───────────────────────
        {
          id: "cam17-ra-t1-s1-q7",
          number: 7,
          groupLabel: "Questions 7–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n7   Other countries had built underground railways before the Metropolitan line opened.\n8   More people than predicted travelled on the Metropolitan line on the first day.\n9   The use of ventilation shafts failed to prevent pollution in the tunnels.\n10  A different approach from the 'cut and cover' technique was required in London's central area.\n11  The windows on City & South London trains were at eye level.\n12  The City & South London Railway was a financial success.\n13  Trains on the 'Tuppenny Tube' nearly always ran on time.",
          type: "true_false_ng",
          question: "7. Other countries had built underground railways before the Metropolitan line opened.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "8. More people than predicted travelled on the Metropolitan line on the first day.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "9. The use of ventilation shafts failed to prevent pollution in the tunnels.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. A different approach from the 'cut and cover' technique was required in London's central area.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. The windows on City & South London trains were at eye level.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. The City & South London Railway was a financial success.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. Trains on the 'Tuppenny Tube' nearly always ran on time.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam17-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Stadiums: past, present and future",
      passageText: `A
Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras.
Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.
But this need not be the case. History shows that stadiums can drive urban development and adapt to the culture of every age. Even today, architects and planners are finding new ways to adapt the mono-functional sports arenas which became emblematic of modernisation during the 20th century.

B
The amphitheatre of Arles in southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadiums can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century, and was then transformed into a village containing more than 200 houses. With the growing interest in conservation during the 19th century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles.
Another example is the imposing arena of Verona in northern Italy, with space for 30,000 spectators, which was built 60 years before the Arles amphitheatre and 40 years before Rome's famous Colosseum. It has endured the centuries and is currently considered one of the world's prime sites for opera, thanks to its outstanding acoustics.

C
The area in the centre of the Italian town of Lucca, known as the Piazza dell' Anfiteatro, is yet another impressive example of an amphitheatre becoming absorbed into the fabric of the city. The site evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. But rather than reverting to an arena, it became a market square, designed by Romanticist architect Lorenzo Nottolini. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square.

D
There are many similarities between modern stadiums and the ancient amphitheatres intended for games. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches.
Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public, require more energy to run and contribute to urban heat.

E
But many of today's most innovative architects see scope for the stadium to help improve the city. Among the current strategies, two seem to be having particular success: the stadium as an urban hub, and as a power plant.
There's a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children's playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi-functionality, making more efficient use of land and helping to regenerate urban spaces.
This opens the space up to families and a wider cross-section of society, instead of catering only to sportspeople and supporters. There have been many examples of this in the UK: the mixed-use facilities at Wembley and Old Trafford have become a blueprint for many other stadiums in the world.

F
The phenomenon of stadium as power stations has arisen from the idea that energy problems can be overcome by integrating interconnected buildings by means of a smart grid, which is an electricity supply network that uses digital communications technology to detect and react to local changes in usage, without significant energy losses. Stadiums are ideal for these purposes, because their canopies have a large surface area for fitting photovoltaic panels and rise high enough (more than 40 metres) to make use of micro wind turbines.
Freiburg Mage Solar Stadium in Germany is the first of a new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. This is proof that a stadium can serve its city, and have a decidedly positive impact in terms of reduction of CO2 emissions.

G
Sporting arenas have always been central to the life and culture of cities. In every era, the stadium has acquired new value and uses: from military fortress to residential village, public space to theatre and most recently a field for experimentation in advanced engineering. The stadium of today now brings together multiple functions, thus helping cities to create a sustainable future.`,
      instructions: `Questions 14–17: Reading Passage 2 has seven paragraphs, A–G.
Which section contains the following information?
NB You may use any letter more than once.

Questions 18–22: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 23–24: Choose TWO letters, A–E.

Questions 25–26: Choose TWO letters, A–E.`,
      questions: [
        // ── Q14–17: Paragraph matching ────────────────────────
        {
          id: "cam17-ra-t1-s2-q14",
          number: 14,
          groupLabel: "Questions 14–17: Reading Passage 2 has seven paragraphs, A–G.\nWhich section contains the following information?\nNB You may use any letter more than once.\n\n14  a mention of negative attitudes towards stadium building projects\n15  figures demonstrating the environmental benefits of a certain stadium\n16  examples of the wide range of facilities available at some new stadiums\n17  reference to the disadvantages of the stadiums built during a certain era",
          type: "matching",
          question: "14. a mention of negative attitudes towards stadium building projects",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. figures demonstrating the environmental benefits of a certain stadium",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. examples of the wide range of facilities available at some new stadiums",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. reference to the disadvantages of the stadiums built during a certain era",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q18–22: Summary completion ────────────────────────
        {
          id: "cam17-ra-t1-s2-q18",
          number: 18,
          groupLabel: "Questions 18–22: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nRoman amphitheatres\nThe Roman stadiums of Europe have proved very versatile. The amphitheatre of Arles, for example, was converted first into a 18 ……………………, then into a residential area and finally into an arena where spectators could watch 19 …………………… . Meanwhile, the arena in Verona, one of the oldest Roman amphitheatres, is famous today as a venue where 20 …………………… is performed. The site of Lucca's amphitheatre has also been used for many purposes over the centuries, including the storage of 21 …………………… . It is now a market square with 22 …………………… and homes incorporated into the remains of the Roman amphitheatre.",
          type: "summary_completion",
          question: "18. The amphitheatre of Arles was converted first into a _______",
          correctAnswer: "fortress",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s2-q19",
          number: 19,
          type: "summary_completion",
          question: "19. Then into an arena where spectators could watch _______",
          correctAnswer: "bullfights",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s2-q20",
          number: 20,
          type: "summary_completion",
          question: "20. The arena in Verona is famous today as a venue where _______ is performed",
          correctAnswer: "opera",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. Lucca's amphitheatre site was used for the storage of _______",
          correctAnswer: "salt",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. It is now a market square with _______ and homes incorporated into the remains",
          correctAnswer: "shops",
          points: 1,
        },
        // ── Q23–24: Multiple choice (choose TWO) ─────────────
        {
          id: "cam17-ra-t1-s2-q23",
          number: 23,
          groupLabel: "Questions 23–24: Choose TWO letters, A–E.\nWhen comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?\nA   They are less imaginatively designed.\nB   They are less spacious.\nC   They are in less convenient locations.\nD   They are less versatile.\nE   They are made of less durable materials.",
          type: "multiple_choice",
          question: "23 & 24. When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention? (Enter both letters, e.g. C, D)",
          options: [
            { label: "A – They are less imaginatively designed", value: "A" },
            { label: "B – They are less spacious", value: "B" },
            { label: "C – They are in less convenient locations", value: "C" },
            { label: "D – They are less versatile", value: "D" },
            { label: "E – They are made of less durable materials", value: "E" },
          ],
          correctAnswer: "C/D",
          points: 2,
        },
        {
          id: "cam17-ra-t1-s2-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. (Second answer for Questions 23–24)",
          options: [
            { label: "A – They are less imaginatively designed", value: "A" },
            { label: "B – They are less spacious", value: "B" },
            { label: "C – They are in less convenient locations", value: "C" },
            { label: "D – They are less versatile", value: "D" },
            { label: "E – They are made of less durable materials", value: "E" },
          ],
          correctAnswer: "C/D",
          points: 0,
        },
        // ── Q25–26: Multiple choice (choose TWO) ─────────────
        {
          id: "cam17-ra-t1-s2-q25",
          number: 25,
          groupLabel: "Questions 25–26: Choose TWO letters, A–E.\nWhich TWO advantages of modern stadium design does the writer mention?\nA   offering improved amenities for the enjoyment of sports events\nB   bringing community life back into the city environment\nC   facilitating research into solar and wind energy solutions\nD   enabling local residents to reduce their consumption of electricity\nE   providing a suitable site for the installation of renewable power generators",
          type: "multiple_choice",
          question: "25 & 26. Which TWO advantages of modern stadium design does the writer mention? (Enter both letters, e.g. B, E)",
          options: [
            { label: "A – offering improved amenities for the enjoyment of sports events", value: "A" },
            { label: "B – bringing community life back into the city environment", value: "B" },
            { label: "C – facilitating research into solar and wind energy solutions", value: "C" },
            { label: "D – enabling local residents to reduce their consumption of electricity", value: "D" },
            { label: "E – providing a suitable site for the installation of renewable power generators", value: "E" },
          ],
          correctAnswer: "B/E",
          points: 2,
        },
        {
          id: "cam17-ra-t1-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. (Second answer for Questions 25–26)",
          options: [
            { label: "A – offering improved amenities for the enjoyment of sports events", value: "A" },
            { label: "B – bringing community life back into the city environment", value: "B" },
            { label: "C – facilitating research into solar and wind energy solutions", value: "C" },
            { label: "D – enabling local residents to reduce their consumption of electricity", value: "D" },
            { label: "E – providing a suitable site for the installation of renewable power generators", value: "E" },
          ],
          correctAnswer: "B/E",
          points: 0,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam17-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "To catch a king",
      passageText: `Anna Keay reviews Charles Spencer's book about the hunt for King Charles II during the English Civil War of the seventeenth century

Charles Spencer's latest book, To Catch a King, tells us the story of the hunt for King Charles II in the six weeks after his resounding defeat at the Battle of Worcester in September 1651. And what a story it is. After his father was executed by the Parliamentarians in 1649, the young Charles II sacrificed one of the very principles his father had died for and did a deal with Scots, thereby accepting Presbyterianism as the national religion in return for being crowned King of Scots. His arrival in Edinburgh prompted the English Parliamentary army to invade Scotland in a pre-emptive strike. This was followed by a Scottish invasion of England. The two sides finally faced one another at Worcester in the west of England in 1651. After being comprehensively defeated on the meadows outside the city by the Parliamentarian army, the 21-year-old king found himself the subject of a national manhunt, with a huge sum offered for his capture, through a series of heart-poundingly close escapes, to evade the Parliamentarians before seeking refuge in France. For the next nine years, the penniless and defeated Charles wandered around Europe with only a small group of loyal supporters.

Years later, after his restoration as king, the 50-year-old Charles II requested a meeting with the writer and diarist Samuel Pepys. His intention when asking Pepys to commit his story to paper was to ensure that this most extraordinary episode was never forgotten. Over two three-hour sittings, the king related to him in great detail his personal recollections of the six weeks he had spent as a fugitive. As the king and secretary settled down (a scene that is surely a gift for a future scriptwriter), Charles commenced his story: 'After the battle was so absolutely lost as to be beyond hope of recovery, I began to think of the best way of saving myself.'

One of the joys of Spencer's book, a result not least of its use of Charles II's own narrative as well as those of his supporters, is just how close the reader gets to the action. The day-by-day retelling of the fugitives' doings provides delicious details: the cutting of the king's long hair with agricultural shears, the use of walnut leaves to dye his pale skin, and the day Charles spent lying on a branch of the great oak tree in Boscobel Wood as the Parliamentary soldiers scoured the forest floor below. Spencer draws out both the humour – such as the preposterous refusal of Charles's friend Henry Wilmot to adopt disguise on the grounds that it was beneath his dignity – and the emotional tension when the secret of the king's presence was cautiously revealed to his supporters.

Charles's adventures after losing the Battle of Worcester hide the uncomfortable truth that whilst almost everyone in England had been appalled by the execution of his father, they had not welcomed the arrival of his son with the Scots army, but had instead firmly bolted their doors. This was partly because he rode at the head of what looked like a foreign invasion force and partly because, after almost a decade of civil war, people were desperate to avoid it beginning again. This makes it all the more interesting that Charles II himself loved the story so much ever after. As well as retelling it to anyone who would listen, causing eye-rolling among courtiers, he set in train a series of initiatives to memorialise it. There was to be a new order of chivalry, the Knights of the Royal Oak. A series of enormous oil paintings depicting the episode were produced, including a two-metre-wide canvas of Boscobel Wood and a set of six similarly enormous paintings of the king on the run. In 1660, Charles II commissioned the artist John Michael Wright to paint a flying squadron of cherubs carrying an oak tree to the heavens on the ceiling of his bedchamber. It is hard to imagine many other kings marking the lowest point in their life so enthusiastically, or indeed pulling off such an escape in the first place.

Charles Spencer is the perfect person to pass the story on to a new generation. His pacey, readable prose steers deftly clear of modern idioms and elegantly brings to life the details of the great tale. He has even-handed sympathy for both the fugitive king and the fierce republican regime that hunted him, and he succeeds in his desire to explore far more of the background of the story than previous books on the subject have done. Indeed, the opening third of the book is about how Charles II found himself at Worcester in the first place, which for some will be reason alone to read To Catch a King.

The tantalizing question left, in the end, is that of what it all meant. Would Charles II have been a different king had these six weeks never happened? The days and nights spent in hiding must have affected him in some way. Did the need to assume disguises, to survive on wit and charm alone, to use trickery and subterfuge to escape from tight corners help form him? This is the one area where the book doesn't quite hit the mark. Instead its depiction of Charles II in his final years as an ineffective, pleasure-loving monarch doesn't do justice to the man (neither is it accurate), or to the complexity of his character. But this one niggle aside, To Catch a King is an excellent read, and those who come to it knowing little of the famous tale will find they have a treat in store.`,
      instructions: `Questions 27–31: Complete the summary using the list of phrases, A–J, below.

Questions 32–35: Do the following statements agree with the claims of the writer in Reading Passage 3?
Write YES, NO, or NOT GIVEN.

Questions 36–40: Choose the correct letter, A, B, C, or D.`,
      questions: [
        // ── Q27–31: Summary with word bank ───────────────────
        {
          id: "cam17-ra-t1-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Complete the summary using the list of phrases, A–J, below.\n\nThe story behind the hunt for Charles II\nCharles II's father was executed by the Parliamentarian forces in 1649. Charles II then formed a 27 ………………… with the Scots, and in order to become King of Scots, he abandoned an important 28 ………………… that was held by his father and had contributed to his father's death. The opposing sides then met outside Worcester in 1651. The battle led to a 29 ………………… for the Parliamentarians and Charles had to flee for his life. A 30 ………………… was offered for Charles's capture, but after six weeks spent in hiding, he eventually managed to reach the 31 ………………… of continental Europe.\n\nA   military innovation\nB   large reward\nC   widespread conspiracy\nD   relative safety\nE   new government\nF   decisive victory\nG   political debate\nH   strategic alliance\nI   popular solution\nJ   religious conviction",
          type: "matching",
          question: "27. Charles II then formed a _______ with the Scots",
          options: [
            { label: "A – military innovation", value: "A" },
            { label: "B – large reward", value: "B" },
            { label: "C – widespread conspiracy", value: "C" },
            { label: "D – relative safety", value: "D" },
            { label: "E – new government", value: "E" },
            { label: "F – decisive victory", value: "F" },
            { label: "G – political debate", value: "G" },
            { label: "H – strategic alliance", value: "H" },
            { label: "I – popular solution", value: "I" },
            { label: "J – religious conviction", value: "J" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q28",
          number: 28,
          type: "matching",
          question: "28. He abandoned an important _______ held by his father",
          options: [
            { label: "A – military innovation", value: "A" },
            { label: "B – large reward", value: "B" },
            { label: "C – widespread conspiracy", value: "C" },
            { label: "D – relative safety", value: "D" },
            { label: "E – new government", value: "E" },
            { label: "F – decisive victory", value: "F" },
            { label: "G – political debate", value: "G" },
            { label: "H – strategic alliance", value: "H" },
            { label: "I – popular solution", value: "I" },
            { label: "J – religious conviction", value: "J" },
          ],
          correctAnswer: "J",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q29",
          number: 29,
          type: "matching",
          question: "29. The battle led to a _______ for the Parliamentarians",
          options: [
            { label: "A – military innovation", value: "A" },
            { label: "B – large reward", value: "B" },
            { label: "C – widespread conspiracy", value: "C" },
            { label: "D – relative safety", value: "D" },
            { label: "E – new government", value: "E" },
            { label: "F – decisive victory", value: "F" },
            { label: "G – political debate", value: "G" },
            { label: "H – strategic alliance", value: "H" },
            { label: "I – popular solution", value: "I" },
            { label: "J – religious conviction", value: "J" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q30",
          number: 30,
          type: "matching",
          question: "30. A _______ was offered for Charles's capture",
          options: [
            { label: "A – military innovation", value: "A" },
            { label: "B – large reward", value: "B" },
            { label: "C – widespread conspiracy", value: "C" },
            { label: "D – relative safety", value: "D" },
            { label: "E – new government", value: "E" },
            { label: "F – decisive victory", value: "F" },
            { label: "G – political debate", value: "G" },
            { label: "H – strategic alliance", value: "H" },
            { label: "I – popular solution", value: "I" },
            { label: "J – religious conviction", value: "J" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q31",
          number: 31,
          type: "matching",
          question: "31. He eventually managed to reach the _______ of continental Europe",
          options: [
            { label: "A – military innovation", value: "A" },
            { label: "B – large reward", value: "B" },
            { label: "C – widespread conspiracy", value: "C" },
            { label: "D – relative safety", value: "D" },
            { label: "E – new government", value: "E" },
            { label: "F – decisive victory", value: "F" },
            { label: "G – political debate", value: "G" },
            { label: "H – strategic alliance", value: "H" },
            { label: "I – popular solution", value: "I" },
            { label: "J – religious conviction", value: "J" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q32–35: Yes/No/Not Given ───────────────────────────
        {
          id: "cam17-ra-t1-s3-q32",
          number: 32,
          groupLabel: "Questions 32–35: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES, NO, or NOT GIVEN.\n\n32  Charles chose Pepys for the task because he considered him to be trustworthy.\n33  Charles's personal recollection of the escape lacked sufficient detail.\n34  Charles indicated to Pepys that he had planned his escape before the battle.\n35  The inclusion of Charles's account is a positive aspect of the book.",
          type: "true_false_ng",
          question: "32. Charles chose Pepys for the task because he considered him to be trustworthy.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "33. Charles's personal recollection of the escape lacked sufficient detail.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q34",
          number: 34,
          type: "true_false_ng",
          question: "34. Charles indicated to Pepys that he had planned his escape before the battle.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "35. The inclusion of Charles's account is a positive aspect of the book.",
          correctAnswer: "YES",
          points: 1,
        },
        // ── Q36–40: Multiple choice ────────────────────────────
        {
          id: "cam17-ra-t1-s3-q36",
          number: 36,
          groupLabel: "Questions 36–40: Choose the correct letter, A, B, C, or D.\n\n36  What is the reviewer's main purpose in the first paragraph?\nA   to describe what happened during the Battle of Worcester\nB   to give an account of the circumstances leading to Charles II's escape\nC   to provide details of the Parliamentarians' political views\nD   to compare Charles II's beliefs with those of his father\n\n37  Why does the reviewer include examples of the fugitives' behaviour in the third paragraph?\nA   to explain how close Charles II came to losing his life\nB   to suggest that Charles II's supporters were badly prepared\nC   to illustrate how the events of the six weeks are brought to life\nD   to argue that certain aspects are not as well known as they should be\n\n38  What point does the reviewer make about Charles II in the fourth paragraph?\nA   He chose to celebrate what was essentially a defeat.\nB   He misunderstood the motives of his opponents.\nC   He aimed to restore people's faith in the monarchy.\nD   He was driven by a desire to be popular.\n\n39  What does the reviewer say about Charles Spencer in the fifth paragraph?\nA   His decision to write the book comes as a surprise.\nB   He takes an unbiased approach to the subject matter.\nC   His descriptions of events would be better if they included more detail.\nD   He chooses language that is suitable for a twenty-first-century audience.\n\n40  When the reviewer says the book 'doesn't quite hit the mark', she is making the point that\nA   it overlooks the impact of events on ordinary people.\nB   it lacks an analysis of prevalent views on monarchy.\nC   it omits any references to the deceit practised by Charles II during his time in hiding.\nD   it fails to address whether Charles II's experiences had a lasting influence on him.",
          type: "multiple_choice",
          question: "36. What is the reviewer's main purpose in the first paragraph?",
          options: [
            { label: "A – to describe what happened during the Battle of Worcester", value: "A" },
            { label: "B – to give an account of the circumstances leading to Charles II's escape", value: "B" },
            { label: "C – to provide details of the Parliamentarians' political views", value: "C" },
            { label: "D – to compare Charles II's beliefs with those of his father", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q37",
          number: 37,
          type: "multiple_choice",
          question: "37. Why does the reviewer include examples of the fugitives' behaviour in the third paragraph?",
          options: [
            { label: "A – to explain how close Charles II came to losing his life", value: "A" },
            { label: "B – to suggest that Charles II's supporters were badly prepared", value: "B" },
            { label: "C – to illustrate how the events of the six weeks are brought to life", value: "C" },
            { label: "D – to argue that certain aspects are not as well known as they should be", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q38",
          number: 38,
          type: "multiple_choice",
          question: "38. What point does the reviewer make about Charles II in the fourth paragraph?",
          options: [
            { label: "A – He chose to celebrate what was essentially a defeat", value: "A" },
            { label: "B – He misunderstood the motives of his opponents", value: "B" },
            { label: "C – He aimed to restore people's faith in the monarchy", value: "C" },
            { label: "D – He was driven by a desire to be popular", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q39",
          number: 39,
          type: "multiple_choice",
          question: "39. What does the reviewer say about Charles Spencer in the fifth paragraph?",
          options: [
            { label: "A – His decision to write the book comes as a surprise", value: "A" },
            { label: "B – He takes an unbiased approach to the subject matter", value: "B" },
            { label: "C – His descriptions of events would be better if they included more detail", value: "C" },
            { label: "D – He chooses language that is suitable for a twenty-first-century audience", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam17-ra-t1-s3-q40",
          number: 40,
          type: "multiple_choice",
          question: "40. When the reviewer says the book 'doesn't quite hit the mark', she is making the point that",
          options: [
            { label: "A – it overlooks the impact of events on ordinary people", value: "A" },
            { label: "B – it lacks an analysis of prevalent views on monarchy", value: "B" },
            { label: "C – it omits any references to the deceit practised by Charles II during his time in hiding", value: "C" },
            { label: "D – it fails to address whether Charles II's experiences had a lasting influence on him", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 17 – TEST 2  (Academic Reading)
// Passages: The Dead Sea Scrolls /
//           A second attempt at domesticating the tomato /
//           Insight or evolution?
// ============================================================
export const cambridge17_reading_t2: IELTSTest = {
  id: "cam17-reading-academic-t2",
  title: "Cambridge IELTS 17 – Test 2",
  bookNumber: 17,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam17-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The Dead Sea Scrolls",
      passageText: `In late 1946 or early 1947, three Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran, located on the northwest shore of the Dead Sea in what is now known as the West Bank. One of these young shepherds tossed a rock into an opening on the side of a cliff and was surprised to hear a shattering sound. He and his companions later entered the cave and stumbled across a collection of large clay jars, seven of which contained scrolls with writing on them. The teenagers took the seven scrolls to a nearby town where they were sold for a small sum to a local antiquities dealer. Word of the find spread, and Bedouins and archaeologists eventually unearthed tens of thousands of additional scroll fragments from 10 nearby caves; together they make up between 800 and 900 manuscripts. It soon became clear that this was one of the greatest archaeological discoveries ever made.

The origin of the Dead Sea Scrolls, which were written around 2,000 years ago between 150 BCE and 70 CE, is still the subject of scholarly debate even today. According to the prevailing theory, they are the work of a population that inhabited the area until Roman troops destroyed the settlement around 70 CE. The area was known as Judea at that time, and the people are thought to have belonged to a group called the Essenes, a devout Jewish sect.

The majority of the texts on the Dead Sea Scrolls are in Hebrew, with some fragments written in an ancient version of its alphabet thought to have fallen out of use in the fifth century BCE. But there are other languages as well. Some scrolls are in Aramaic, the language spoken by many inhabitants of the region from the sixth century BCE to the siege of Jerusalem in 70 CE. In addition, several texts feature translations of the Hebrew Bible into Greek.

The Dead Sea Scrolls include fragments from every book of the Old Testament of the Bible except for the Book of Esther. The only entire book of the Hebrew Bible preserved among the manuscripts from Qumran is Isaiah; this copy, dated to the first century BCE, is considered the earliest biblical manuscript still in existence. Along with biblical texts, the scrolls include documents about sectarian regulations and religious writings that do not appear in the Old Testament.

The writing on the Dead Sea Scrolls is mostly in black or occasionally red ink, and the scrolls themselves are nearly all made of parchment (animal skin) or an early form of paper called 'papyrus'. The only exception is the scroll numbered 3Q15, which was created out of a combination of copper and tin. Known as the Copper Scroll, this curious document features letters chiselled onto metal – perhaps, as some have theorized, to better withstand the passage of time. One of the most intriguing manuscripts from Qumran, this is a sort of ancient treasure map that lists dozens of gold and silver caches. Using an unconventional vocabulary and odd spelling, it describes 64 underground hiding places that supposedly contain riches buried for safekeeping. None of these hoards have been recovered, possibly because the Romans pillaged Judea during the first century CE. According to various hypotheses, the treasure belonged to local people, or was rescued from the Second Temple before its destruction or never existed to begin with.

Some of the Dead Sea Scrolls have been on interesting journeys. In 1948, a Syrian Orthodox archbishop known as Mar Samuel acquired four of the original seven scrolls from a Jerusalem shoemaker and part-time antiquity dealer, paying less than $100 for them. He then travelled to the United States and unsuccessfully offered them to a number of universities, including Yale. Finally, in 1954, he placed an advertisement in the business newspaper The Wall Street Journal – under the category 'Miscellaneous Items for Sale' – that read: 'Biblical Manuscripts dating back to at least 200 B.C. are for sale. This would be an ideal gift to an educational or religious institution by an individual or group.' Fortunately, Israeli archaeologist and statesman Yigael Yadin negotiated their purchase and brought the scrolls back to Jerusalem, where they remain to this day.

In 2017, researchers from the University of Haifa restored and deciphered one of the last untranslated scrolls. The university's Eshbal Ratson and Jonathan Ben-Dov spent one year reassembling the 60 fragments that make up the scroll. Deciphered from a band of coded text on parchment, the find provides insight into the community of people who wrote it and the 364-day calendar they would have used. The scroll names celebrations that indicate shifts in seasons and details two yearly religious events known from another Dead Sea Scroll. Only one more known scroll remains untranslated.`,
      instructions: `Questions 1–5: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 6–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–5: Note completion ─────────────────────────────
        {
          id: "cam17-ra-t2-s1-q1",
          number: 1,
          groupLabel: "Questions 1–5: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Dead Sea Scrolls\n\nDiscovery – Qumran, 1946/7\n●   three Bedouin shepherds in their teens were near an opening on side of cliff\n●   heard a noise of breaking when one teenager threw a 1 ……………………\n●   teenagers went into the 2 …………………… and found a number of containers made of 3 ……………………\n\nThe scrolls\n●   date from between 150 BCE and 70 CE\n●   thought to have been written by group of people known as the 4 ……………………\n●   written mainly in the 5 …………………… language\n●   most are on religious topics, written using ink on parchment or papyrus",
          type: "note_completion",
          question: "1. heard a noise of breaking when one teenager threw a _______",
          correctAnswer: "rock",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q2",
          number: 2,
          type: "note_completion",
          question: "2. teenagers went into the _______",
          correctAnswer: "cave",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q3",
          number: 3,
          type: "note_completion",
          question: "3. found a number of containers made of _______",
          correctAnswer: "clay",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q4",
          number: 4,
          type: "note_completion",
          question: "4. thought to have been written by group of people known as the _______",
          correctAnswer: "Essenes",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q5",
          number: 5,
          type: "note_completion",
          question: "5. written mainly in the _______ language",
          correctAnswer: "Hebrew",
          points: 1,
        },
        // ── Q6–13: True/False/Not Given ───────────────────────
        {
          id: "cam17-ra-t2-s1-q6",
          number: 6,
          groupLabel: "Questions 6–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n6   The Bedouin teenagers who found the scrolls were disappointed by how little money they received for them.\n7   There is agreement among academics about the origin of the Dead Sea Scrolls.\n8   Most of the books of the Bible written on the scrolls are incomplete.\n9   The information on the Copper Scroll is written in an unusual way.\n10  Mar Samuel was given some of the scrolls as a gift.\n11  In the early 1950s, a number of educational establishments in the US were keen to buy scrolls from Mar Samuel.\n12  The scroll that was pieced together in 2017 contains information about annual occasions in the Qumran area 2,000 years ago.\n13  Academics at the University of Haifa are currently researching how to decipher the final scroll.",
          type: "true_false_ng",
          question: "6. The Bedouin teenagers who found the scrolls were disappointed by how little money they received for them.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. There is agreement among academics about the origin of the Dead Sea Scrolls.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "8. Most of the books of the Bible written on the scrolls are incomplete.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "9. The information on the Copper Scroll is written in an unusual way.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. Mar Samuel was given some of the scrolls as a gift.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. In the early 1950s, a number of educational establishments in the US were keen to buy scrolls from Mar Samuel.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. The scroll that was pieced together in 2017 contains information about annual occasions in the Qumran area 2,000 years ago.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. Academics at the University of Haifa are currently researching how to decipher the final scroll.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam17-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "A second attempt at domesticating the tomato",
      passageText: `A
It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. And they have done it better in some ways, as the re-domesticated tomatoes are more nutritious than the ones we eat at present.

This approach relies on the revolutionary CRISPR genome editing technique, in which changes are deliberately made to the DNA of a living cell, allowing genetic material to be added, removed or altered. The technique could not only improve existing crops, but could also be used to turn thousands of wild plants into useful and appealing foods. In fact, a third team in the US has already begun to do this with a relative of the tomato called the groundcherry.

This fast-track domestication could help make the world's food supply healthier and far more resistant to diseases, such as the rust fungus devastating wheat crops.

'This could transform what we eat,' says Jorg Kudla at the University of Munster in Germany, a member of the Brazilian team. 'There are 50,000 edible plants in the world, but 90 percent of our energy comes from just 15 crops.'

'We can now mimic the known domestication course of major crops like rice, maize, sorghum or others,' says Caixia Gao of the Chinese Academy of Sciences in Beijing. 'Then we might try to domesticate plants that have never been domesticated.'

B
Wild tomatoes, which are native to the Andes region in South America, produce pea-sized fruits. Over many generations, peoples such as the Aztecs and Incas transformed the plant by selecting and breeding plants with mutations in their genetic structure, which resulted in desirable traits such as larger fruit.

But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour.

By comparing the genomes of modern plants to those of their wild relatives, biologists have been working out what genetic changes occurred as plants were domesticated. The teams in Brazil and China have now used this knowledge to reintroduce these changes from scratch while maintaining or even enhancing the desirable traits of wild strains.

C
Kudla's team made six changes altogether. For instance, they tripled the size of fruit by editing a gene called FRUIT WEIGHT, and increased the number of tomatoes per truss by editing another called MULTIFLORA.

While the historical domestication of tomatoes reduced levels of the red pigment lycopene – thought to have potential health benefits – the team in Brazil managed to boost it instead. The wild tomato has twice as much lycopene as cultivated ones; the newly domesticated one has five times as much.

'They are quite tasty,' says Kudla. 'A little bit strong. And very aromatic.'

The team in China re-domesticated several strains of wild tomatoes with desirable traits lost in domesticated tomatoes. In this way they managed to create a strain resistant to a common disease called bacterial spot race, which can devastate yields. They also created another strain that is more salt tolerant – and has higher levels of vitamin C.

D
Meanwhile, Joyce Van Eck at the Boyce Thompson Institute in New York state decided to use the same approach to domesticate the groundcherry or goldenberry (Physalis pruinosa) for the first time. This fruit looks similar to the closely related Cape gooseberry (Physalis peruviana).

Groundcherries are already sold to a limited extent in the US but they are hard to produce because the plant has a sprawling growth habit and the small fruits fall off the branches when ripe. Van Eck's team has edited the plants to increase fruit size, make their growth more compact and to stop fruits dropping. 'There's potential for this to be a commercial crop,' says Van Eck. But she adds that taking the work further would be expensive because of the need to pay for a licence for the CRISPR technology and get regulatory approval.

E
This approach could boost the use of many obscure plants, says Jonathan Jones of the Sainsbury Lab in the UK. But it will be hard for new foods to grow so popular with farmers and consumers that they become new staple crops, he thinks.

The three teams already have their eye on other plants that could be 'catapulted into the mainstream', including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms.

But Kudla didn't want to reveal which species were in his team's sights, because CRISPR has made the process so easy. 'Any one with the right skills could go to their lab and do this.'`,
      instructions: `Questions 14–18: Reading Passage 2 has five paragraphs, A–E.
Which section contains the following information?
NB You may use any letter more than once.

Questions 19–23: Match each statement with the correct researcher, A–D.

Questions 24–26: Complete the sentences below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–18: Paragraph matching ────────────────────────
        {
          id: "cam17-ra-t2-s2-q14",
          number: 14,
          groupLabel: "Questions 14–18: Reading Passage 2 has five paragraphs, A–E.\nWhich section contains the following information?\nNB You may use any letter more than once.\n\n14  a reference to a type of tomato that can resist a dangerous infection\n15  an explanation of how problems can arise from focusing only on a certain type of tomato plant\n16  a number of examples of plants that are not cultivated at present but could be useful as food sources\n17  a comparison between the early domestication of the tomato and more recent research\n18  a personal reaction to the flavour of a tomato that has been genetically edited",
          type: "matching",
          question: "14. a reference to a type of tomato that can resist a dangerous infection",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. an explanation of how problems can arise from focusing only on a certain type of tomato plant",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. a number of examples of plants that are not cultivated at present but could be useful as food sources",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "17. a comparison between the early domestication of the tomato and more recent research",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "18. a personal reaction to the flavour of a tomato that has been genetically edited",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        // ── Q19–23: Researcher matching ───────────────────────
        {
          id: "cam17-ra-t2-s2-q19",
          number: 19,
          groupLabel: "Questions 19–23: Look at the following statements and the list of researchers below.\nMatch each statement with the correct researcher, A–D.\nNB You may use any letter more than once.\n\n19  Domestication of certain plants could allow them to adapt to future environmental challenges.\n20  The idea of growing and eating unusual plants may not be accepted on a large scale.\n21  It is not advisable for the future direction of certain research to be made public.\n22  Present efforts to domesticate one wild fruit are limited by the costs involved.\n23  Humans only make use of a small proportion of the plant food available on Earth.\n\nList of Researchers\nA   Jorg Kudla\nB   Caixia Gao\nC   Joyce Van Eck\nD   Jonathan Jones",
          type: "matching",
          question: "19. Domestication of certain plants could allow them to adapt to future environmental challenges.",
          options: [
            { label: "A – Jorg Kudla", value: "A" },
            { label: "B – Caixia Gao", value: "B" },
            { label: "C – Joyce Van Eck", value: "C" },
            { label: "D – Jonathan Jones", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q20",
          number: 20,
          type: "matching",
          question: "20. The idea of growing and eating unusual plants may not be accepted on a large scale.",
          options: [
            { label: "A – Jorg Kudla", value: "A" },
            { label: "B – Caixia Gao", value: "B" },
            { label: "C – Joyce Van Eck", value: "C" },
            { label: "D – Jonathan Jones", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q21",
          number: 21,
          type: "matching",
          question: "21. It is not advisable for the future direction of certain research to be made public.",
          options: [
            { label: "A – Jorg Kudla", value: "A" },
            { label: "B – Caixia Gao", value: "B" },
            { label: "C – Joyce Van Eck", value: "C" },
            { label: "D – Jonathan Jones", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q22",
          number: 22,
          type: "matching",
          question: "22. Present efforts to domesticate one wild fruit are limited by the costs involved.",
          options: [
            { label: "A – Jorg Kudla", value: "A" },
            { label: "B – Caixia Gao", value: "B" },
            { label: "C – Joyce Van Eck", value: "C" },
            { label: "D – Jonathan Jones", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q23",
          number: 23,
          type: "matching",
          question: "23. Humans only make use of a small proportion of the plant food available on Earth.",
          options: [
            { label: "A – Jorg Kudla", value: "A" },
            { label: "B – Caixia Gao", value: "B" },
            { label: "C – Joyce Van Eck", value: "C" },
            { label: "D – Jonathan Jones", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q24–26: Sentence completion ───────────────────────
        {
          id: "cam17-ra-t2-s2-q24",
          number: 24,
          groupLabel: "Questions 24–26: Complete the sentences below.\nChoose ONE WORD ONLY from the passage for each answer.\n\n24  An undesirable trait such as loss of ……………………… may be caused by a mutation in a tomato gene.\n25  By modifying one gene in a tomato plant, researchers made the tomato three times its original ………………………\n26  A type of tomato which was not badly affected by ………………………, and was rich in vitamin C, was produced by a team of researchers in China.",
          type: "sentence_completion",
          question: "24. An undesirable trait such as loss of _______ may be caused by a mutation in a tomato gene.",
          correctAnswer: "flavour/flavor",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q25",
          number: 25,
          type: "sentence_completion",
          question: "25. By modifying one gene in a tomato plant, researchers made the tomato three times its original _______",
          correctAnswer: "size",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s2-q26",
          number: 26,
          type: "sentence_completion",
          question: "26. A type of tomato which was not badly affected by _______, and was rich in vitamin C, was produced by a team of researchers in China.",
          correctAnswer: "salt",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam17-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Insight or evolution?",
      passageText: `Two scientists consider the origins of discoveries and other innovative behavior

Scientific discovery is popularly believed to result from the sheer genius of such intellectual stars as naturalist Charles Darwin and theoretical physicist Albert Einstein. Our view of such unique contributions to science often disregards the person's prior experience and the efforts of their lesser-known predecessors. Conventional wisdom also places great weight on insight in promoting breakthrough scientific achievements, as if ideas spontaneously pop into someone's head – fully formed and functional.

There may be some limited truth to this view. However, we believe that it largely misrepresents the real nature of scientific discovery, as well as that of creativity and innovation in many other realms of human endeavor.

Setting aside such greats as Darwin and Einstein – whose monumental contributions are duly celebrated – we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more stops to the right or left. This evolutionary view of human innovation undermines the notion of creative genius and recognizes the cumulative nature of scientific progress.

Consider one unheralded scientist: John Nicholson, a mathematical physicist working in the 1910s who postulated the existence of 'proto-elements' in outer space. By combining different numbers of weights of these proto-elements' atoms, Nicholson could recover the weights of all the elements in the then-known periodic table. These successes are all the more noteworthy given the fact that Nicholson was wrong about the presence of proto-elements: they do not actually exist. Yet, amid his often fanciful theories and wild speculations, Nicholson also proposed a novel theory about the structure of atoms. Niels Bohr, the Nobel prize-winning father of modern atomic theory, jumped off from this interesting idea to conceive his now-famous model of the atom.

What are we to make of this story? One might simply conclude that science is a collective and cumulative enterprise. That may be true, but there may be a deeper insight to be gleaned. We propose that science is constantly evolving, much as species of animals do. In biological systems, organisms may display new characteristics that result from random genetic mutations. In the same way, random, arbitrary or accidental mutations of ideas may help pave the way for advances in science. If mutations prove beneficial, then the animal or the scientific theory will continue to thrive and perhaps reproduce.

Support for this evolutionary view of behavioral innovation comes from many domains. Consider one example of an influential innovation in US horseracing. The so-called 'acey-deucy' stirrup placement, in which the rider's foot in his left stirrup is placed as much as 25 centimeters lower than the right, is believed to confer important speed advantages when turning on oval tracks. It was developed by a relatively unknown jockey named Jackie Westrope. Had Westrope conducted methodical investigations or examined extensive film records in a shrewd plan to outrun his rivals? Had he foreseen the speed advantage that would be conferred by riding acey-deucy? No. He suffered a leg injury, which left him unable to fully bend his left knee. His modification just happened to coincide with enhanced left-hand turning performance. This led to the rapid and widespread adoption of riding acey-deucy by many riders, a racing style which continues in today's thoroughbred racing.

Plenty of other stories show that fresh advances can arise from error, misadventure, and also pure serendipity – a happy accident. For example, in the early 1970s, two employees of the company 3M each had a problem: Spencer Silver had a product – a glue which was only slightly sticky – and no use for it, while his colleague Art Fry was trying to figure out how to affix temporary bookmarks in his hymn book without damaging its pages. The solution to both these problems was invention of the brilliantly simple yet phenomenally successful Post-It note. Such examples give lie to the claim that ingenious, designing minds are responsible for human creativity and invention. Far more banal and mechanical forces may be at work; forces that are fundamentally connected to the laws of science.

The notions of insight, creativity and genius are often invoked, but they remain vague and of doubtful scientific utility, especially when one considers the diverse and enduring contributions of individuals such as Plato, Leonardo da Vinci, Shakespeare, Beethoven, Galileo, Newton, Kepler, Curie, Pasteur and Edison. These notions merely label rather than explain the evolution of human innovations. We need another approach, and there is a promising candidate.

The Law of Effect was advanced by psychologist Edward Thorndike in 1898, some 40 years after Charles Darwin published his groundbreaking work on biological evolution, On the Origin of Species. This simple law holds that organisms tend to repeat successful behaviors and to refrain from performing unsuccessful ones. Just like Darwin's Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective in sight.

Of course, the origin of human innovation demands much further study. In particular, the provenance of the raw material on which the Law of Effect operates is not as clearly known as that of the genetic mutations on which the Law of Natural Selection operates. The generation of novel ideas and behaviors may not be entirely random, but constrained by prior successes and failures – of the current individual (such as Bohr) or of predecessors (such as Nicholson).

The time seems right for abandoning the naïve notion of intelligent design and genius, and for scientifically exploring the true origins of creative behavior.`,
      instructions: `Questions 27–31: Choose the correct letter, A, B, C, or D.

Questions 32–36: Do the following statements agree with the claims of the writer in Reading Passage 3?
Write YES, NO, or NOT GIVEN.

Questions 37–40: Complete the summary using the list of words, A–G, below.`,
      questions: [
        // ── Q27–31: Multiple choice ────────────────────────────
        {
          id: "cam17-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Choose the correct letter, A, B, C, or D.\n\n27  The purpose of the first paragraph is to\nA   defend particular ideas.\nB   compare certain beliefs.\nC   disprove a widely held view.\nD   outline a common assumption.\n\n28  What are the writers doing in the second paragraph?\nA   criticising an opinion\nB   justifying a standpoint\nC   explaining an approach\nD   supporting an argument\n\n29  In the third paragraph, what do the writers suggest about Darwin and Einstein?\nA   They represent an exception to a general rule.\nB   Their way of working has been misunderstood.\nC   They are an ideal which others should aspire to.\nD   Their achievements deserve greater recognition.\n\n30  John Nicholson is an example of a person whose idea\nA   established his reputation as an influential scientist.\nB   was only fully understood at a later point in history.\nC   laid the foundations for someone else's breakthrough.\nD   initially met with scepticism from the scientific community.\n\n31  What is the key point of interest about the 'acey-deucy' stirrup placement?\nA   the simple reason why it was invented\nB   the enthusiasm with which it was adopted\nC   the research that went into its development\nD   the cleverness of the person who first used it",
          type: "multiple_choice",
          question: "27. The purpose of the first paragraph is to",
          options: [
            { label: "A – defend particular ideas", value: "A" },
            { label: "B – compare certain beliefs", value: "B" },
            { label: "C – disprove a widely held view", value: "C" },
            { label: "D – outline a common assumption", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. What are the writers doing in the second paragraph?",
          options: [
            { label: "A – criticising an opinion", value: "A" },
            { label: "B – justifying a standpoint", value: "B" },
            { label: "C – explaining an approach", value: "C" },
            { label: "D – supporting an argument", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. In the third paragraph, what do the writers suggest about Darwin and Einstein?",
          options: [
            { label: "A – They represent an exception to a general rule", value: "A" },
            { label: "B – Their way of working has been misunderstood", value: "B" },
            { label: "C – They are an ideal which others should aspire to", value: "C" },
            { label: "D – Their achievements deserve greater recognition", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. John Nicholson is an example of a person whose idea",
          options: [
            { label: "A – established his reputation as an influential scientist", value: "A" },
            { label: "B – was only fully understood at a later point in history", value: "B" },
            { label: "C – laid the foundations for someone else's breakthrough", value: "C" },
            { label: "D – initially met with scepticism from the scientific community", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "31. What is the key point of interest about the 'acey-deucy' stirrup placement?",
          options: [
            { label: "A – the simple reason why it was invented", value: "A" },
            { label: "B – the enthusiasm with which it was adopted", value: "B" },
            { label: "C – the research that went into its development", value: "C" },
            { label: "D – the cleverness of the person who first used it", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q32–36: Yes/No/Not Given ───────────────────────────
        {
          id: "cam17-ra-t2-s3-q32",
          number: 32,
          groupLabel: "Questions 32–36: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES, NO, or NOT GIVEN.\n\n32  Acknowledging people such as Plato or da Vinci as geniuses will help us understand the process by which great minds create new ideas.\n33  The Law of Effect was discovered at a time when psychologists were seeking a scientific reason why creativity occurs.\n34  The Law of Effect states that no planning is involved in the behaviour of organisms.\n35  The Law of Effect sets out clear explanations about the sources of new ideas and behaviours.\n36  Many scientists are now turning away from the notion of intelligent design and genius.",
          type: "true_false_ng",
          question: "32. Acknowledging people such as Plato or da Vinci as geniuses will help us understand the process by which great minds create new ideas.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "33. The Law of Effect was discovered at a time when psychologists were seeking a scientific reason why creativity occurs.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q34",
          number: 34,
          type: "true_false_ng",
          question: "34. The Law of Effect states that no planning is involved in the behaviour of organisms.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "35. The Law of Effect sets out clear explanations about the sources of new ideas and behaviours.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "36. Many scientists are now turning away from the notion of intelligent design and genius.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        // ── Q37–40: Summary with word bank ───────────────────
        {
          id: "cam17-ra-t2-s3-q37",
          number: 37,
          groupLabel: "Questions 37–40: Complete the summary using the list of words, A–G, below.\n\nThe origins of creative behaviour\nThe traditional view of scientific discovery is that breakthroughs happen when a single great mind has sudden 37 …………………… . Although this can occur, it is not often the case. Advances are more likely to be the result of a longer process. In some cases, this process involves 38 ……………………, such as Nicholson's theory about proto-elements. In others, simple necessity may provoke innovation, as with Westrope's decision to modify the position of his riding stirrups. There is also often an element of 39 ……………………, for example, the coincidence of ideas that led to the invention of the Post-It note. With both the Law of Natural Selection and the Law of Effect, there may be no clear 40 …………………… involved, but merely a process of variation and selection.\n\nA   invention\nB   goals\nC   compromise\nD   mistakes\nE   luck\nF   inspiration\nG   experiments",
          type: "matching",
          question: "37. breakthroughs happen when a single great mind has sudden _______",
          options: [
            { label: "A – invention", value: "A" },
            { label: "B – goals", value: "B" },
            { label: "C – compromise", value: "C" },
            { label: "D – mistakes", value: "D" },
            { label: "E – luck", value: "E" },
            { label: "F – inspiration", value: "F" },
            { label: "G – experiments", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q38",
          number: 38,
          type: "matching",
          question: "38. In some cases, this process involves _______",
          options: [
            { label: "A – invention", value: "A" },
            { label: "B – goals", value: "B" },
            { label: "C – compromise", value: "C" },
            { label: "D – mistakes", value: "D" },
            { label: "E – luck", value: "E" },
            { label: "F – inspiration", value: "F" },
            { label: "G – experiments", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q39",
          number: 39,
          type: "matching",
          question: "39. There is also often an element of _______",
          options: [
            { label: "A – invention", value: "A" },
            { label: "B – goals", value: "B" },
            { label: "C – compromise", value: "C" },
            { label: "D – mistakes", value: "D" },
            { label: "E – luck", value: "E" },
            { label: "F – inspiration", value: "F" },
            { label: "G – experiments", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam17-ra-t2-s3-q40",
          number: 40,
          type: "matching",
          question: "40. there may be no clear _______ involved",
          options: [
            { label: "A – invention", value: "A" },
            { label: "B – goals", value: "B" },
            { label: "C – compromise", value: "C" },
            { label: "D – mistakes", value: "D" },
            { label: "E – luck", value: "E" },
            { label: "F – inspiration", value: "F" },
            { label: "G – experiments", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge17Tests: IELTSTest[] = [cambridge17_reading_t1, cambridge17_reading_t2];
