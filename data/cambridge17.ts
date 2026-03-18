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

export const cambridge17Tests: IELTSTest[] = [cambridge17_reading_t1];
