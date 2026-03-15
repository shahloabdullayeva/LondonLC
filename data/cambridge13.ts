import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 13 – TEST 1  (Academic Reading)
// Passages: Case Study: Tourism New Zealand website /
//           Why being bored is stimulating – and useful, too /
//           Artificial artist?
// ============================================================
export const cambridge13_reading_t1: IELTSTest = {
  id: "cam13-reading-academic-t1",
  title: "Cambridge IELTS 13 – Test 1",
  bookNumber: 13,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Case Study: Tourism New Zealand website",
      passageText: `New Zealand is a small country of four million inhabitants, a long-haul flight from all the major tourist-generating markets of the world. Tourism currently makes up 9% of the country's gross domestic product, and is the country's largest export sector. Unlike other export sectors, which make products and then sell them overseas, tourism brings its customers to New Zealand. The product is the country itself – the people, the places and the experiences. In 1999, Tourism New Zealand launched a campaign to communicate a new brand position to the world. The campaign focused on New Zealand's scenic beauty, exhilarating outdoor activities and authentic Maori culture, and it made New Zealand one of the strongest national brands in the world.

A key feature of the campaign was the website www.newzealand.com, which provided potential visitors to New Zealand with a single gateway to everything the destination had to offer. The heart of the website was a database of tourism services operators, both those based in New Zealand and those based abroad which offered tourism service to the country. Any tourism-related business could be listed by filling in a simple form. This meant that even the smallest bed and breakfast address or specialist activity provider could gain a web presence with access to an audience of long-haul visitors. In addition, because participating businesses were able to update the details they gave on a regular basis, the information provided remained accurate. And to maintain and improve standards, Tourism New Zealand organised a scheme whereby organisations appearing on the website underwent an independent evaluation against a set of agreed national standards of quality. As part of this, the effect of each business on the environment was considered.

To communicate the New Zealand experience, the site also carried features relating to famous people and places. One of the most popular was an interview with former New Zealand All Blacks rugby captain Tana Umaga. Another feature that attracted a lot of attention was an interactive journey through a number of the locations chosen for blockbuster films which had made use of New Zealand's stunning scenery as a backdrop. As the site developed, additional features were added to help independent travelers devise their own customised itineraries. To make it easier to plan motoring holidays, the site catalogued the most popular driving routes in the country, highlighting different routes according to the season and indicating distances and times.

Later, a Travel Planner feature was added, which allowed visitors to click and 'bookmark' places or attractions they were interested in, and then view the results on a map. The Travel Planner offered suggested routes and public transport options between the chosen locations. There were also links to accommodation in the area. By registering with the website, users could save their Travel Plan and return to it later, or print it out to take on the visit. The website also had a 'Your Words' section where anyone could submit a blog of their New Zealand travels for possible inclusion on the website.

The Tourism New Zealand website won two Webby awards for online achievement and innovation. More importantly perhaps, the growth of tourism to New Zealand was impressive. Overall tourism expenditure increased by an average of 6.9% per year between 1999 and 2004. From Britain, visits to New Zealand grew at an average annual rate of 13% between 2002 and 2006, compared to a rate of 4% overall for British visits abroad.

The website was set up to allow both individuals and travel organisations to create itineraries and travel packages to suit their own needs and interests. On the website, visitors can search for activities not solely by geographical location, but also by the particular nature of the activity. This is important as research shows that activities are the key driver of visitor satisfaction, contributing 74% to visitor satisfaction, while transport and accommodation account for the remaining 26%. The more activities that visitors undertake, the more satisfied they will be. It has also been found that visitors enjoy cultural activities most when they are interactive, such as visiting a marae (meeting ground) to learn about traditional Maori life. Many long-haul travelers enjoy such learning experiences, which provide them with stories to take home to their friends and family. In addition, it appears that visitors to New Zealand don't want to be 'one of the crowd' and find activities that involve only a few people more special and meaningful.

It could be argued that New Zealand is not a typical destination. New Zealand is a small country with a visitor economy composed mainly of small businesses. It is generally perceived as a safe English-speaking country with a reliable transport infrastructure. Because of the long-haul flight, most visitors stay for longer (average 20 days) and want to see as much of the country as possible on what is often seen as a once-in-a-lifetime visit. However, the underlying lessons apply anywhere – the effectiveness of a strong brand, a strategy based on unique experiences and a comprehensive and user-friendly website.`,
      instructions: `Questions 1–7: Complete the table below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 8–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–7: Table completion ────────────────────────────────
        {
          id: "cam13-ra-t1-s1-q1",
          number: 1,
          groupLabel: "Questions 1–7: Complete the table below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nSection of website | Comments\nDatabase of tourism services | • easy for tourism-related businesses to get on the list\n• allowed businesses to 1……… information regularly\n• provided a country-wide evaluation of businesses, including their impact on the 2………\nSpecial features on local topics | • e.g. an interview with a former sports 3………, and an interactive tour of various locations used in 4………\nInformation on driving routes | • varied depending on the 5………\nTravel Planner | • included a map showing selected places, details of public transport and local 6………\n'Your Words' | • travelers could send a link to their 7………",
          type: "table_completion",
          question: "1. Allowed businesses to _______ information regularly",
          correctAnswer: "update",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q2",
          number: 2,
          type: "table_completion",
          question: "2. Provided evaluation including impact on the _______",
          correctAnswer: "environment",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q3",
          number: 3,
          type: "table_completion",
          question: "3. Interview with a former sports _______",
          correctAnswer: "captain",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q4",
          number: 4,
          type: "table_completion",
          question: "4. Interactive tour of various locations used in _______",
          correctAnswer: "films",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q5",
          number: 5,
          type: "table_completion",
          question: "5. Driving routes varied depending on the _______",
          correctAnswer: "season",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q6",
          number: 6,
          type: "table_completion",
          question: "6. Map with public transport and local _______",
          correctAnswer: "accommodation",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q7",
          number: 7,
          type: "table_completion",
          question: "7. Travelers could send a link to their _______",
          correctAnswer: "blog",
          points: 1,
        },
        // ── Q8–13: TRUE / FALSE / NOT GIVEN ──────────────────────
        {
          id: "cam13-ra-t1-s1-q8",
          number: 8,
          groupLabel: "Questions 8–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "8. The website www.newzealand.com aimed to provide ready-made itineraries and packages for travel companies and individual tourists.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "9. It was found that most visitors started searching on the website by geographical location.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. According to research, 26% of visitor satisfaction is related to their accommodation.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. Visitors to New Zealand like to become involved in the local culture.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. Visitors like staying in small hotels in New Zealand rather than in larger ones.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. Many visitors feel it is unlikely that they will return to New Zealand after their visit.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Why being bored is stimulating – and useful, too",
      passageText: `This most common of emotions is turning out to be more interesting than we thought

A
We all know how it feels – it's impossible to keep your mind on anything, time stretches out, and all the things you could do seem equally unlikely to make you feel better. But defining boredom so that it can be studied in the lab has proved difficult. For a start, it can include a lot of other mental states, such as frustration, apathy, depression and indifference. There isn't even agreement over whether boredom is always a low-energy, flat kind of emotion or whether feeling agitated and restless counts as boredom, too. In his book, Boredom: A Lively History, Peter Toohey at the University of Calgary, Canada, compares it to disgust – an emotion that motivates us to stay away from certain situations. 'If disgust protects humans from infection, boredom may protect them from "infectious" social situations,' he suggests.

B
By asking people about their experiences of boredom, Thomas Goetz and his team at the University of Konstanz in Germany have recently identified five distinct types: indifferent, calibrating, searching, reactant and apathetic. These can be plotted on two axes – one running left to right, which measures low to high arousal, and the other from top to bottom, which measures how positive or negative the feeling is. Intriguingly, Goetz has found that while people experience all kinds of boredom, they tend to specialise in one. Of the five types, the most damaging is 'reactant' boredom with its explosive combination of high arousal and negative emotion. The most useful is what Goetz calls 'indifferent' boredom: someone isn't engaged in anything satisfying but still feels relaxed and calm. However, it remains to be seen whether there are any character traits that predict the kind of boredom each of us might be prone to.

C
Psychologist Sandi Mann at the University of Central Lancashire, UK, goes further. 'All emotions are there for a reason, including boredom,' she says. Mann has found that being bored makes us more creative. 'We're all afraid of being bored but in actual fact it can lead to all kinds of amazing things,' she says. In experiments published last year, Mann found that people who had been made to feel bored by copying numbers out of the phone book for 15 minutes came up with more creative ideas about how to use a polystyrene cup than a control group. Mann concluded that a passive, boring activity is best for creativity because it allows the mind to wander. In fact, she goes so far as to suggest that we should seek out more boredom in our lives.

D
Psychologist John Eastwood at York University in Toronto, Canada, isn't convinced. 'If you are in a state of mind-wandering you are not bored,' he says. 'In my view, by definition boredom is an undesirable state.' That doesn't necessarily mean that it isn't adaptive, he adds. 'Pain is adaptive – if we didn't have physical pain, bad things would happen to us. Does that mean that we should actively cause pain? No. But even if boredom has evolved to help us survive, it can still be toxic if allowed to fester.' For Eastwood, the central feature of boredom is a failure to put our 'attention system' into gear. This causes an inability to focus on anything, which makes time seem to go painfully slowly. What's more, your efforts to improve the situation can end up making you feel worse. 'People try to connect with the world and if they are not successful there's that frustration and irritability,' he says. Perhaps most worryingly, says Eastwood, repeatedly failing to engage attention can lead to state where we don't know what to do any more, and no longer care.

E
Eastwood's team is now trying to explore why the attention system fails. It's early days but they think that at least some of it comes down to personality. Boredom proneness has been linked with a variety of traits. People who are motivated by pleasure seem to suffer particularly badly. Other personality traits, such as curiosity, are associated with a high boredom threshold. More evidence that boredom has detrimental effects comes from studies of people who are more or less prone to boredom. It seems those who bore easily face poorer prospects in education, their career and even life in general. But of course, boredom itself cannot kill – it's the things we do to deal with it that may put us in danger. What can we do to alleviate it before it comes to that? Goetz's group has one suggestion. Working with teenagers, they found that those who 'approach' a boring situation – in other words, see that it's boring and get stuck in anyway – report less boredom than those who try to avoid it by using snacks, TV or social media for distraction.

F
Psychologist Francoise Wemelsfelder speculates that our over-connected lifestyles might even be a new source of boredom. 'In modern human society there is a lot of overstimulation but still a lot of problems finding meaning,' she says. So instead of seeking yet more mental stimulation, perhaps we should leave our phones alone, and use boredom to motivate us to engage with the world in a more meaningful way.`,
      instructions: `Questions 14–19: Reading Passage 2 has six paragraphs, A–F.
Choose the correct heading for each paragraph from the list of headings below.
Write the correct number, i–viii, in boxes 14–19 on your answer sheet.

List of Headings
i    The productive outcomes that may result from boredom
ii   What teachers can do to prevent boredom
iii  A new explanation and a new cure for boredom
iv   Problems with a scientific approach to boredom
v    A potential danger arising from boredom
vi   Creating a system of classification for feelings of boredom
vii  Age groups most affected by boredom
viii Identifying those most affected by boredom

Questions 20–23: Match each person with the correct idea, A–E.

Questions 24–26: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–19: List of headings ──────────────────────────────
        {
          id: "cam13-ra-t1-s2-q14",
          number: 14,
          groupLabel: "Questions 14–19: Choose the correct heading for each paragraph from the list of headings below.\n\ni  The productive outcomes that may result from boredom\nii  What teachers can do to prevent boredom\niii  A new explanation and a new cure for boredom\niv  Problems with a scientific approach to boredom\nv  A potential danger arising from boredom\nvi  Creating a system of classification for feelings of boredom\nvii  Age groups most affected by boredom\nviii  Identifying those most affected by boredom",
          type: "matching",
          question: "14. Paragraph A",
          options: [
            { label: "i – The productive outcomes that may result from boredom", value: "i" },
            { label: "ii – What teachers can do to prevent boredom", value: "ii" },
            { label: "iii – A new explanation and a new cure for boredom", value: "iii" },
            { label: "iv – Problems with a scientific approach to boredom", value: "iv" },
            { label: "v – A potential danger arising from boredom", value: "v" },
            { label: "vi – Creating a system of classification for feelings of boredom", value: "vi" },
            { label: "vii – Age groups most affected by boredom", value: "vii" },
            { label: "viii – Identifying those most affected by boredom", value: "viii" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. Paragraph B",
          options: [
            { label: "i – The productive outcomes that may result from boredom", value: "i" },
            { label: "ii – What teachers can do to prevent boredom", value: "ii" },
            { label: "iii – A new explanation and a new cure for boredom", value: "iii" },
            { label: "iv – Problems with a scientific approach to boredom", value: "iv" },
            { label: "v – A potential danger arising from boredom", value: "v" },
            { label: "vi – Creating a system of classification for feelings of boredom", value: "vi" },
            { label: "vii – Age groups most affected by boredom", value: "vii" },
            { label: "viii – Identifying those most affected by boredom", value: "viii" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. Paragraph C",
          options: [
            { label: "i – The productive outcomes that may result from boredom", value: "i" },
            { label: "ii – What teachers can do to prevent boredom", value: "ii" },
            { label: "iii – A new explanation and a new cure for boredom", value: "iii" },
            { label: "iv – Problems with a scientific approach to boredom", value: "iv" },
            { label: "v – A potential danger arising from boredom", value: "v" },
            { label: "vi – Creating a system of classification for feelings of boredom", value: "vi" },
            { label: "vii – Age groups most affected by boredom", value: "vii" },
            { label: "viii – Identifying those most affected by boredom", value: "viii" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. Paragraph D",
          options: [
            { label: "i – The productive outcomes that may result from boredom", value: "i" },
            { label: "ii – What teachers can do to prevent boredom", value: "ii" },
            { label: "iii – A new explanation and a new cure for boredom", value: "iii" },
            { label: "iv – Problems with a scientific approach to boredom", value: "iv" },
            { label: "v – A potential danger arising from boredom", value: "v" },
            { label: "vi – Creating a system of classification for feelings of boredom", value: "vi" },
            { label: "vii – Age groups most affected by boredom", value: "vii" },
            { label: "viii – Identifying those most affected by boredom", value: "viii" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Paragraph E",
          options: [
            { label: "i – The productive outcomes that may result from boredom", value: "i" },
            { label: "ii – What teachers can do to prevent boredom", value: "ii" },
            { label: "iii – A new explanation and a new cure for boredom", value: "iii" },
            { label: "iv – Problems with a scientific approach to boredom", value: "iv" },
            { label: "v – A potential danger arising from boredom", value: "v" },
            { label: "vi – Creating a system of classification for feelings of boredom", value: "vi" },
            { label: "vii – Age groups most affected by boredom", value: "vii" },
            { label: "viii – Identifying those most affected by boredom", value: "viii" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Paragraph F",
          options: [
            { label: "i – The productive outcomes that may result from boredom", value: "i" },
            { label: "ii – What teachers can do to prevent boredom", value: "ii" },
            { label: "iii – A new explanation and a new cure for boredom", value: "iii" },
            { label: "iv – Problems with a scientific approach to boredom", value: "iv" },
            { label: "v – A potential danger arising from boredom", value: "v" },
            { label: "vi – Creating a system of classification for feelings of boredom", value: "vi" },
            { label: "vii – Age groups most affected by boredom", value: "vii" },
            { label: "viii – Identifying those most affected by boredom", value: "viii" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        // ── Q20–23: Matching people to ideas ─────────────────────
        {
          id: "cam13-ra-t1-s2-q20",
          number: 20,
          groupLabel: "Questions 20–23: Match each person with the correct idea, A–E.\n\nA  The way we live today may encourage boredom.\nB  One sort of boredom is worse than all the others.\nC  Levels of boredom may fall in the future.\nD  Trying to cope with boredom can increase its negative effects.\nE  Boredom may encourage us to avoid an unpleasant experience.",
          type: "matching",
          question: "20. Peter Toohey",
          options: [
            { label: "A – The way we live today may encourage boredom", value: "A" },
            { label: "B – One sort of boredom is worse than all the others", value: "B" },
            { label: "C – Levels of boredom may fall in the future", value: "C" },
            { label: "D – Trying to cope with boredom can increase its negative effects", value: "D" },
            { label: "E – Boredom may encourage us to avoid an unpleasant experience", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q21",
          number: 21,
          type: "matching",
          question: "21. Thomas Goetz",
          options: [
            { label: "A – The way we live today may encourage boredom", value: "A" },
            { label: "B – One sort of boredom is worse than all the others", value: "B" },
            { label: "C – Levels of boredom may fall in the future", value: "C" },
            { label: "D – Trying to cope with boredom can increase its negative effects", value: "D" },
            { label: "E – Boredom may encourage us to avoid an unpleasant experience", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q22",
          number: 22,
          type: "matching",
          question: "22. John Eastwood",
          options: [
            { label: "A – The way we live today may encourage boredom", value: "A" },
            { label: "B – One sort of boredom is worse than all the others", value: "B" },
            { label: "C – Levels of boredom may fall in the future", value: "C" },
            { label: "D – Trying to cope with boredom can increase its negative effects", value: "D" },
            { label: "E – Boredom may encourage us to avoid an unpleasant experience", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q23",
          number: 23,
          type: "matching",
          question: "23. Francoise Wemelsfelder",
          options: [
            { label: "A – The way we live today may encourage boredom", value: "A" },
            { label: "B – One sort of boredom is worse than all the others", value: "B" },
            { label: "C – Levels of boredom may fall in the future", value: "C" },
            { label: "D – Trying to cope with boredom can increase its negative effects", value: "D" },
            { label: "E – Boredom may encourage us to avoid an unpleasant experience", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q24–26: Summary completion ────────────────────────────
        {
          id: "cam13-ra-t1-s2-q24",
          number: 24,
          groupLabel: "Questions 24–26: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nResponses to boredom\nFor John Eastwood, the central feature of boredom is that people cannot 24………………, due to a failure in what he calls the 'attention system', and as a result they become frustrated and irritable. His team suggests that those for whom 25……………… is an important aim in life may have problems in coping with boredom, whereas those who have the characteristic of 26……………… can generally cope with it.",
          type: "summary_completion",
          question: "24. People cannot _______, due to a failure in the 'attention system'",
          correctAnswer: "focus",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. Those for whom _______ is an important aim in life may have problems coping with boredom",
          correctAnswer: "pleasure",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. Those who have the characteristic of _______ can generally cope with boredom",
          correctAnswer: "curiosity",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Artificial artist?",
      passageText: `Can computers really create works of art?

The Painting Fool is one of a growing number of computer programs which, so their makers claim, possess creative talents. Classical music by an artificial composer has had audiences enraptured, and even tricked them into believing a human was behind the score. Artworks painted by a robot have sold for thousands of dollars and been hung in prestigious galleries. And software has been built which creates art that could not have been imagined by the programmer.

Human beings are the only species to perform sophisticated creative acts regularly. If we can break this process down into computer code, where does that leave human creativity? 'This is a question at the very core of humanity,' says Geraint Wiggins, a computational creativity researcher at Goldsmiths, University of London. 'It scares a lot of people. They are worried that it is taking something special away from what it means to be human.'

To some extent, we are all familiar with computerised art. The question is: where does the work of the artist stop and the creativity of the computer begin? Consider one of the oldest machine artists, Aaron, a robot that has had paintings exhibited in London's Tate Modern and the San Francisco Museum of Modern Art. Aaron can pick up a paintbrush and paint on canvas on its own. Impressive perhaps, but it is still little more than a tool to realise the programmer's own creative ideas.

Simon Colton, the designer of the Painting Fool, is keen to make sure his creation doesn't attract the same criticism. Unlike earlier 'artists' such as Aaron, the Painting Fool only needs minimal direction and can come up with its own concepts by going online for material. The software runs its own web searches and trawls through social media sites. It is now beginning to display a kind of imagination too, creating pictures from scratch. One of its original works is a series of fuzzy landscapes, depicting trees and sky. While some might say they have a mechanical look, Colton argues that such reactions arise from people's double standards towards software-produced and human-produced art. After all, he says, consider that the Painting Fool painted the landscapes without referring to a photo. 'If a child painted a new scene from its head, you'd say it has a certain level of imagination,' he points out. 'The same should be true of a machine.' Software bugs can also lead to unexpected results. Some of the Painting Fool's paintings of a chair came out in black and white, thanks to a technical glitch. This gives the work an eerie, ghostlike quality. Human artists like the renowned Ellsworth Kelly are lauded for limiting their colour palette – so why should computers be any different?

Researchers like Colton don't believe it is right to measure machine creativity directly to that of humans who 'have had millennia to develop our skills'. Others, though, are fascinated by the prospect that a computer might create something as original and subtle as our best artists. So far, only one has come close. Composer David Cope invented a program called Experiments in Musical Intelligence, or EMI. Not only did EMI create compositions in Cope's style, but also that of the most revered classical composers, including Bach, Chopin and Mozart. Audiences were moved to tears, and EMI even fooled classical music experts into thinking they were hearing genuine Bach. Not everyone was impressed however. Some, such as Wiggins, have blasted Cope's work as pseudoscience, and condemned him for his deliberately vague explanation of how the software worked. Meanwhile, Douglas Hofstadter of Indiana University said EMI created replicas which still rely completely on the original artist's creative impulses. When audiences found out the truth they were often outraged with Cope, and one music lover even tried to punch him. Amid such controversy, Cope destroyed EMI's vital databases.

But why did so many people love the music, yet recoil when they discovered how it was composed? A study by computer scientist David Moffat of Glasgow Caledonian University provides a clue. He asked both expert musicians and non-experts to assess six compositions. The participants weren't told beforehand whether the tunes were composed by humans or computers, but were asked to guess, and then rate how much they liked each one. People who thought the composer was a computer tended to dislike the piece more than those who believed it was human. This was true even among the experts, who might have been expected to be more objective in their analyses.

Where does this prejudice come from? Paul Bloom of Yale University has a suggestion: he reckons part of the pleasure we get from art stems from the creative process behind the work. This can give it an 'irresistible essence', says Bloom. Meanwhile, experiments by Justin Kruger of New York University have shown that people's enjoyment of an artwork increases if they think more time and effort was needed to create it. Similarly, Colton thinks that when people experience art, they wonder what the artist might have been thinking or what the artist is trying to tell them. It seems obvious, therefore, that with computers producing art, this speculation is cut short – there's nothing to explore. But as technology becomes increasingly complex, finding those greater depths in computer art could become possible. This is precisely why Colton asks the Painting Fool to tap into online social networks for its inspiration: hopefully this way it will choose themes that will already be meaningful to us.`,
      instructions: `Questions 27–31: Choose the correct letter, A, B, C or D.

Questions 32–37: Complete each sentence with the correct ending, A–G below.

Questions 38–40: Do the following statements agree with the claims of the writer in Reading Passage 3?
Write YES, NO, or NOT GIVEN.`,
      questions: [
        // ── Q27–31: Multiple choice ───────────────────────────────
        {
          id: "cam13-ra-t1-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Choose the correct letter, A, B, C or D.",
          type: "multiple_choice",
          question: "27. What is the writer suggesting about computer-produced works in the first paragraph?",
          options: [
            { label: "A – People's acceptance of them can vary considerably", value: "A" },
            { label: "B – A great deal of progress has already been attained in this field", value: "B" },
            { label: "C – They have had more success in some artistic genres than in others", value: "C" },
            { label: "D – The advances are not as significant as the public believes them to be", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. According to Geraint Wiggins, why are many people worried by computer art?",
          options: [
            { label: "A – It is aesthetically inferior to human art", value: "A" },
            { label: "B – It may ultimately supersede human art", value: "B" },
            { label: "C – It undermines a fundamental human quality", value: "C" },
            { label: "D – It will lead to a deterioration in human ability", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. What is a key difference between Aaron and the Painting Fool?",
          options: [
            { label: "A – Its programmer's background", value: "A" },
            { label: "B – Public response to its work", value: "B" },
            { label: "C – The source of its subject matter", value: "C" },
            { label: "D – The technical standard of its output", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. What point does Simon Colton make in the fourth paragraph?",
          options: [
            { label: "A – Software-produced art is often dismissed as childish and simplistic", value: "A" },
            { label: "B – The same concepts of creativity should not be applied to all forms of art", value: "B" },
            { label: "C – It is unreasonable to expect a machine to be as imaginative as a human being", value: "C" },
            { label: "D – People tend to judge computer art and human art according to different criteria", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "31. The writer refers to the paintings of a chair as an example of computer art which",
          options: [
            { label: "A – achieves a particularly striking effect", value: "A" },
            { label: "B – exhibits a certain level of genuine artistic skill", value: "B" },
            { label: "C – closely resembles that of a well-known artist", value: "C" },
            { label: "D – highlights the technical limitations of the software", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q32–37: Sentence endings ──────────────────────────────
        {
          id: "cam13-ra-t1-s3-q32",
          number: 32,
          groupLabel: "Questions 32–37: Complete each sentence with the correct ending, A–G below.\n\nA  generating work that was virtually indistinguishable from that of humans.\nB  knowing whether it was the work of humans or software.\nC  producing work entirely dependent on the imagination of its creator.\nD  comparing the artistic achievements of humans and computers.\nE  revealing the technical details of his program.\nF  persuading the public to appreciate computer art.\nG  discovering that it was the product of a computer program.",
          type: "matching",
          question: "32. Simon Colton says it is important to consider the long-term view when …",
          options: [
            { label: "A – generating work that was virtually indistinguishable from that of humans", value: "A" },
            { label: "B – knowing whether it was the work of humans or software", value: "B" },
            { label: "C – producing work entirely dependent on the imagination of its creator", value: "C" },
            { label: "D – comparing the artistic achievements of humans and computers", value: "D" },
            { label: "E – revealing the technical details of his program", value: "E" },
            { label: "F – persuading the public to appreciate computer art", value: "F" },
            { label: "G – discovering that it was the product of a computer program", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q33",
          number: 33,
          type: "matching",
          question: "33. David Cope's EMI software surprised people by …",
          options: [
            { label: "A – generating work that was virtually indistinguishable from that of humans", value: "A" },
            { label: "B – knowing whether it was the work of humans or software", value: "B" },
            { label: "C – producing work entirely dependent on the imagination of its creator", value: "C" },
            { label: "D – comparing the artistic achievements of humans and computers", value: "D" },
            { label: "E – revealing the technical details of his program", value: "E" },
            { label: "F – persuading the public to appreciate computer art", value: "F" },
            { label: "G – discovering that it was the product of a computer program", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "34. Geraint Wiggins criticised Cope for not …",
          options: [
            { label: "A – generating work that was virtually indistinguishable from that of humans", value: "A" },
            { label: "B – knowing whether it was the work of humans or software", value: "B" },
            { label: "C – producing work entirely dependent on the imagination of its creator", value: "C" },
            { label: "D – comparing the artistic achievements of humans and computers", value: "D" },
            { label: "E – revealing the technical details of his program", value: "E" },
            { label: "F – persuading the public to appreciate computer art", value: "F" },
            { label: "G – discovering that it was the product of a computer program", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q35",
          number: 35,
          type: "matching",
          question: "35. Douglas Hofstadter claimed that EMI was …",
          options: [
            { label: "A – generating work that was virtually indistinguishable from that of humans", value: "A" },
            { label: "B – knowing whether it was the work of humans or software", value: "B" },
            { label: "C – producing work entirely dependent on the imagination of its creator", value: "C" },
            { label: "D – comparing the artistic achievements of humans and computers", value: "D" },
            { label: "E – revealing the technical details of his program", value: "E" },
            { label: "F – persuading the public to appreciate computer art", value: "F" },
            { label: "G – discovering that it was the product of a computer program", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q36",
          number: 36,
          type: "matching",
          question: "36. Audiences who had listened to EMI's music became angry after …",
          options: [
            { label: "A – generating work that was virtually indistinguishable from that of humans", value: "A" },
            { label: "B – knowing whether it was the work of humans or software", value: "B" },
            { label: "C – producing work entirely dependent on the imagination of its creator", value: "C" },
            { label: "D – comparing the artistic achievements of humans and computers", value: "D" },
            { label: "E – revealing the technical details of his program", value: "E" },
            { label: "F – persuading the public to appreciate computer art", value: "F" },
            { label: "G – discovering that it was the product of a computer program", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q37",
          number: 37,
          type: "matching",
          question: "37. The participants in David Moffat's study had to assess music without …",
          options: [
            { label: "A – generating work that was virtually indistinguishable from that of humans", value: "A" },
            { label: "B – knowing whether it was the work of humans or software", value: "B" },
            { label: "C – producing work entirely dependent on the imagination of its creator", value: "C" },
            { label: "D – comparing the artistic achievements of humans and computers", value: "D" },
            { label: "E – revealing the technical details of his program", value: "E" },
            { label: "F – persuading the public to appreciate computer art", value: "F" },
            { label: "G – discovering that it was the product of a computer program", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q38–40: YES / NO / NOT GIVEN ─────────────────────────
        {
          id: "cam13-ra-t1-s3-q38",
          number: 38,
          groupLabel: "Questions 38–40: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES, NO, or NOT GIVEN.",
          type: "true_false_ng",
          question: "38. Moffat's research may help explain people's reactions to EMI.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. The non-experts in Moffat's study all responded in a predictable way.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam13-ra-t1-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Justin Kruger's findings cast doubt on Paul Bloom's theory about people's prejudice towards computer art.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 13 – TEST 2  (Academic Reading)
// Passages: Bringing cinnamon to Europe /
//           Oxytocin /
//           Making the Most of Trends
// ============================================================
export const cambridge13_reading_t2: IELTSTest = {
  id: "cam13-reading-academic-t2",
  title: "Cambridge IELTS 13 – Test 2",
  bookNumber: 13,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Bringing cinnamon to Europe",
      passageText: `Cinnamon is a sweet, fragrant spice produced from the inner bark of trees of the genus Cinnamomum, which is native to the Indian sub-continent. It was known in biblical times, and is mentioned in several books of the Bible, both as an ingredient that was mixed with oils for anointing people's bodies, and also as a token indicating friendship among lovers and friends. In ancient Rome, mourners attending funerals burnt cinnamon to create a pleasant scent. Most often, however, the spice found its primary use as an additive to food and drink. In the Middle Ages, Europeans who could afford the spice used it to flavor food, particularly meat, and to impress those around them with their ability to purchase an expensive condiment from the 'exotic' East. At a banquet, a host would offer guests a plate with various spices piled upon it as a sign of the wealth at his or her disposal. Cinnamon was also reported to have health benefits, and was thought to cure various ailments, such as indigestion.

Toward the end of the Middle Ages, the European middle classes began to desire the lifestyle of the elite, including their consumption of spices. This led to a growth in demand for cinnamon and other spices. At that time, cinnamon was transported by Arab merchants, who closely guarded the secret of the source of the spice from potential rivals. They took it from India, where it was grown, on camels via an overland route to the Mediterranean. Their journey ended when they reached Alexandria. European traders sailed there to purchase their supply of cinnamon, then brought it back to Venice. The spice then travelled from that great trading city to markets all around Europe. Because the overland trade route allowed for only small quantities of the spice to reach Europe, and because Venice had a virtual monopoly of the trade, the Venetians could set the price of cinnamon exorbitantly high. These prices, coupled with the increasing demand, spurred the search for new routes to Asia by Europeans eager to take part in the spice trade.

Seeking the high profits promised by the cinnamon market, Portuguese traders arrived on the island of Ceylon in the Indian Ocean toward the end of the 15th century. Before Europeans arrived on the island, the state had organized the cultivation of cinnamon. People belonging to the ethnic group called the Salagama would peel the bark off young shoots of the cinnamon plant in the rainy season, when the wet bark was more pliable. During the peeling process, they curled the bark into the 'stick' shape still associated with the spice today. The Salagama then gave the finished product to the king as a form of tribute. When the Portuguese arrived, they needed to increase production significantly, and so enslaved many other members of the Ceylonese native population, forcing them to work in cinnamon harvesting. In 1518, the Portuguese built a fort on Ceylon, which enabled them to protect the island, so helping them to develop a monopoly in the cinnamon trade and generate very high profits. In the late 16th century, for example, they enjoyed a tenfold profit when shipping cinnamon over a journey of eight days from Ceylon to India.

When the Dutch arrived off the coast of southern Asia at the very beginning of the 17th century, they set their sights on displacing the Portuguese as kings of cinnamon. The Dutch allied themselves with Kandy, an inland kingdom on Ceylon. In return for payments of elephants and cinnamon, they protected the native king from the Portuguese. By 1649, the Dutch broke the 150-year Portuguese monopoly when they overran and occupied their factories. By 1658, they had permanently expelled the Portuguese from the island, thereby gaining control of the lucrative cinnamon trade.

In order to protect their hold on the market, the Dutch, like the Portuguese before them, treated the native inhabitants harshly. Because of the need to boost production and satisfy Europe's ever-increasing appetite for cinnamon, the Dutch began to alter the harvesting practices of the Ceylonese. Over time, the supply of cinnamon trees on the island became nearly exhausted, due to systematic stripping of the bark. Eventually, the Dutch began cultivating their own cinnamon trees to supplement the diminishing number of wild trees available for use.

Then, in 1796, the English arrived on Ceylon, thereby displacing the Dutch from their control of the cinnamon monopoly. By the middle of the 19th century, production of cinnamon reached 1,000 tons a year, after a lower grade quality of the spice became acceptable to European tastes. By that time, cinnamon was being grown in other parts of the Indian Ocean region and in the West Indies, Brazil, and Guyana. Not only was a monopoly of cinnamon becoming impossible, but the spice trade overall was diminishing in economic potential, and was eventually superseded by the rise of trade in coffee, tea, chocolate, and sugar.`,
      instructions: `Questions 1–9: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 10–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–9: Note completion ─────────────────────────────────
        {
          id: "cam13-ra-t2-s1-q1",
          number: 1,
          groupLabel: "Questions 1–9: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Early History of Cinnamon\n\nBiblical times:\n• added to 1………………………\n• used to show 2……………………… between people\n\nAncient Rome:\n• used for its sweet smell at 3………………………\n\nMiddle Ages:\n• added to food, especially meat\n• was an indication of a person's 4………………………\n• known as a treatment for 5……………………… and other health problems\n• grown in 6………………………\n• merchants used 7……………………… to bring it to the Mediterranean\n• arrived in the Mediterranean at 8………………………\n• traders took it to 9……………………… and sold it to destinations around Europe",
          type: "note_completion",
          question: "1. Biblical times: added to _______",
          correctAnswer: "oils",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q2",
          number: 2,
          type: "note_completion",
          question: "2. Biblical times: used to show _______ between people",
          correctAnswer: "friendship",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q3",
          number: 3,
          type: "note_completion",
          question: "3. Ancient Rome: used for its sweet smell at _______",
          correctAnswer: "funerals",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q4",
          number: 4,
          type: "note_completion",
          question: "4. Middle Ages: was an indication of a person's _______",
          correctAnswer: "wealth",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q5",
          number: 5,
          type: "note_completion",
          question: "5. Middle Ages: known as a treatment for _______ and other health problems",
          correctAnswer: "indigestion",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q6",
          number: 6,
          type: "note_completion",
          question: "6. Middle Ages: grown in _______",
          correctAnswer: "India",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q7",
          number: 7,
          type: "note_completion",
          question: "7. Middle Ages: merchants used _______ to bring it to the Mediterranean",
          correctAnswer: "camels",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q8",
          number: 8,
          type: "note_completion",
          question: "8. Middle Ages: arrived in the Mediterranean at _______",
          correctAnswer: "Alexandria",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q9",
          number: 9,
          type: "note_completion",
          question: "9. Middle Ages: traders took it to _______ and sold it to destinations around Europe",
          correctAnswer: "Venice",
          points: 1,
        },
        // ── Q10–13: TRUE / FALSE / NOT GIVEN ─────────────────────
        {
          id: "cam13-ra-t2-s1-q10",
          number: 10,
          groupLabel: "Questions 10–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "10. The Portuguese had control over the cinnamon trade in Ceylon throughout the 16th century.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. The Dutch took over the cinnamon trade from the Portuguese as soon as they arrived in Ceylon.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. The trees planted by the Dutch produced larger quantities of cinnamon than the wild trees.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. The spice trade maintained its economic importance during the 19th century.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Oxytocin",
      passageText: `The positive and negative effects of the chemical known as the 'love hormone'

A
Oxytocin is a chemical, a hormone produced in the pituitary gland in the brain. It was through various studies focusing on animals that scientists first became aware of the influence of oxytocin. They discovered that it helps reinforce the bonds between prairie voles, which mate for life, and triggers the motherly behaviour that sheep show towards their newborn lambs. It is also released by women in childbirth, strengthening the attachment between mother and baby. Few chemicals have as positive a reputation as oxytocin, which is sometimes referred to as the 'love hormone'. One sniff of it can, it is claimed, make a person more trusting, empathetic, generous and cooperative. It is time, however, to revise this wholly optimistic view. A new wave of studies has shown that its effects vary greatly depending on the person and the circumstances, and it can impact on our social interactions for worse as well as for better.

B
Oxytocin's role in human behaviour first emerged in 2005. In a groundbreaking experiment, Markus Heinrichs and his colleagues at the University of Freiburg, Germany, asked volunteers to do an activity in which they could invest money with an anonymous person who was not guaranteed to be honest. The team found the participants who had sniffed oxytocin via a nasal spray beforehand invested more money than those who received a placebo instead. The study was the start of research into the effects of oxytocin on human interactions. 'For eight years, it was quite a lonesome field,' Heinrichs recalls. 'Now, everyone is interested.' These follow-up studies have shown that after a sniff of the hormone, people become more charitable, better at reading emotions on others' faces and at communicating constructively in arguments. Together, the results fuelled the view that oxytocin universally enhanced the positive aspects of our social nature.

C
Then, after a few years, contrasting findings began to emerge. Simone Shamay-Tsoory at the University of Haifa, Israel, found that when volunteers played a competitive game, those who inhaled the hormone showed more pleasure when they beat other players, and felt more envy when others won. What's more, administering oxytocin also has sharply contrasting outcomes depending on a person's disposition. Jennifer Bartz from Mount Sinai School of Medicine, New York, found that it improves people's ability to read emotions, but only if they are not very socially adept to begin with. Her research also shows that oxytocin in fact reduces cooperation in subjects who are particularly anxious or sensitive to rejection.

D
Another discovery is that oxytocin's effects vary depending on who we are interacting with. Studies conducted by Carolyn DeClerck of the University of Antwerp, Belgium, revealed that people who had received a dose of oxytocin actually became less cooperative when dealing with complete strangers. Meanwhile, Carsten De Dreu at the University of Amsterdam in the Netherlands discovered that volunteers given oxytocin showed favouritism: Dutch men became quicker to associate positive words with Dutch names than with foreign ones, for example. According to De Dreu, oxytocin drives people to care for those in their social circles and defend them from outside dangers. So, it appears that oxytocin strengthens biases, rather than promoting general goodwill, as was previously thought.

E
There were signs of these subtleties from the start. Bartz has recently shown that in almost half of the existing research results, oxytocin influenced only certain individuals or in certain circumstances. Where once researchers took no notice of such findings, now a more nuanced understanding of oxytocin's effects is propelling investigations down new lines. To Bartz, the key to understanding what the hormone does lies in pinpointing its core function rather than in cataloguing its seemingly endless effects. There are several hypotheses which are not mutually exclusive. Oxytocin could help to reduce anxiety and fear. Or it could simply motivate people to seek out social connections. She believes that oxytocin acts as a chemical spotlight that shines on social clues – a shift in posture, a flicker of the eyes, a dip in the voice – making people more attuned to their social environment. This would explain why it makes us more likely to look others in the eye and improves our ability to identify emotions. But it could also make things worse for people who are overly sensitive or prone to interpreting social cues in the worst light.

F
Perhaps we should not be surprised that the oxytocin story has become more perplexing. The hormone is found in everything from octopuses to sheep, and its evolutionary roots stretch back half a billion years. 'It's a very simple and ancient molecule that has been co-opted for many different functions,' says Sue Carter at the University of Illinois, Chicago, USA. 'It affects primitive parts of the brain like the amygdala, so it's going to have many effects on just about everything.' Bartz agrees. 'Oxytocin probably does some very basic things, but once you add our higher-order thinking and social situations, these basic processes could manifest in different ways depending on individual differences and context.'`,
      instructions: `Questions 14–17: Reading Passage 2 has six sections, A–F.
Which paragraph contains the following information?
You may use any letter more than once.

Questions 18–20: Match each research finding with the correct researcher, A–F.

Questions 21–26: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–17: Paragraph matching ────────────────────────────
        {
          id: "cam13-ra-t2-s2-q14",
          number: 14,
          groupLabel: "Questions 14–17: Reading Passage 2 has six sections, A–F.\nWhich paragraph contains the following information?\nWrite the correct letter, A–F, in boxes 14–17 on your answer sheet.\nNB You may use any letter more than once.",
          type: "matching",
          question: "14. reference to research showing the beneficial effects of oxytocin on people",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. reasons why the effects of oxytocin are complex",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. mention of a period in which oxytocin attracted little scientific attention",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "17. reference to people ignoring certain aspects of their research data",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        // ── Q18–20: Researcher matching ───────────────────────────
        {
          id: "cam13-ra-t2-s2-q18",
          number: 18,
          groupLabel: "Questions 18–20: Match each research finding with the correct researcher, A–F.\nWrite the correct letter, A–F, in boxes 18–20 on your answer sheet.\n\nList of Researchers\nA  Markus Heinrichs\nB  Simone Shamay-Tsoory\nC  Jennifer Bartz\nD  Carolyn DeClerck\nE  Carsten De Dreu\nF  Sue Carter",
          type: "matching",
          question: "18. People are more trusting when affected by oxytocin.",
          options: [
            { label: "A – Markus Heinrichs", value: "A" },
            { label: "B – Simone Shamay-Tsoory", value: "B" },
            { label: "C – Jennifer Bartz", value: "C" },
            { label: "D – Carolyn DeClerck", value: "D" },
            { label: "E – Carsten De Dreu", value: "E" },
            { label: "F – Sue Carter", value: "F" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Oxytocin increases people's feelings of jealousy.",
          options: [
            { label: "A – Markus Heinrichs", value: "A" },
            { label: "B – Simone Shamay-Tsoory", value: "B" },
            { label: "C – Jennifer Bartz", value: "C" },
            { label: "D – Carolyn DeClerck", value: "D" },
            { label: "E – Carsten De Dreu", value: "E" },
            { label: "F – Sue Carter", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q20",
          number: 20,
          type: "matching",
          question: "20. The effect of oxytocin varies from one type of person to another.",
          options: [
            { label: "A – Markus Heinrichs", value: "A" },
            { label: "B – Simone Shamay-Tsoory", value: "B" },
            { label: "C – Jennifer Bartz", value: "C" },
            { label: "D – Carolyn DeClerck", value: "D" },
            { label: "E – Carsten De Dreu", value: "E" },
            { label: "F – Sue Carter", value: "F" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        // ── Q21–26: Summary completion ────────────────────────────
        {
          id: "cam13-ra-t2-s2-q21",
          number: 21,
          groupLabel: "Questions 21–26: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nOxytocin research\nThe earliest findings about oxytocin and bonding came from research involving 21………………………… It was also discovered that humans produce oxytocin during 22………………………… An experiment in 2005, in which participants were given either oxytocin or a 23…………………………, reinforced the belief that the hormone had a positive effect.\nHowever, later research suggests that this is not always the case. A study at the University of Haifa where participants took part in a 24………………………… revealed the negative emotions which oxytocin can trigger. A study at the University of Antwerp showed people's lack of willingness to help 25………………………… while under the influence of oxytocin. Meanwhile, research at the University of Amsterdam revealed that people who have been given oxytocin consider 26………………………… that are familiar to them in their own country to have more positive associations than those from other cultures.",
          type: "summary_completion",
          question: "21. The earliest findings about oxytocin and bonding came from research involving _______",
          correctAnswer: "animals",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. It was also discovered that humans produce oxytocin during _______",
          correctAnswer: "childbirth",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q23",
          number: 23,
          type: "summary_completion",
          question: "23. Participants were given either oxytocin or a _______, which reinforced the belief in its positive effect",
          correctAnswer: "placebo",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q24",
          number: 24,
          type: "summary_completion",
          question: "24. A study at the University of Haifa where participants took part in a _______ revealed the negative emotions oxytocin can trigger",
          correctAnswer: "game",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. A study at the University of Antwerp showed people's lack of willingness to help _______ while under the influence of oxytocin",
          correctAnswer: "strangers",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. Research at the University of Amsterdam revealed that people consider _______ familiar to them in their own country to have more positive associations",
          correctAnswer: "names",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Making the Most of Trends",
      passageText: `Experts from Harvard Business School give advice to managers

Most managers can identify the major trends of the day. But in the course of conducting research in a number of industries and working directly with companies, we have discovered that managers often fail to recognize the less obvious but profound ways these trends are influencing consumers' aspirations, attitudes, and behaviors. This is especially true of trends that managers view as peripheral to their core markets.

Many ignore trends in their innovation strategies or adopt a wait-and-see approach and let competitors take the lead. At a minimum, such responses mean missed profit opportunities. At the extreme, they can jeopardize a company by ceding to rivals the opportunity to transform the industry. The purpose of this article is twofold: to spur managers to think more expansively about how trends could engender new value propositions in their core markets, and to provide some high-level advice on how to make market research and product development personnel more adept at analyzing and exploiting trends.

One strategy, known as 'infuse and augment', is to design a product or service that retains most of the attributes and functions of existing products in the category but adds others that address the needs and desires unleashed by a major trend. A case in point is the Poppy range of handbags, which the firm Coach created in response to the economic downturn of 2008. The Coach brand had been a symbol of opulence and luxury for nearly 70 years, and the most obvious reaction to the downturn would have been to lower prices. However, that would have risked cheapening the brand's image. Instead, they initiated a consumer-research project which revealed that customers were eager to lift themselves and the country out of tough times. Using these insights, Coach launched the lower-priced Poppy handbags, which were in vibrant colors, and looked more youthful and playful than conventional Coach products. Creating the sub-brand allowed Coach to avert an across-the-board price cut. In contrast to the many companies that responded to the recession by cutting prices, Coach saw the new consumer mindset as an opportunity for innovation and renewal.

A further example of this strategy was supermarket Tesco's response to consumers' growing concerns about the environment. With that in mind, Tesco, one of the world's top five retailers, introduced its Greener Living program, which demonstrates the company's commitment to protecting the environment by involving consumers in ways that produce tangible results. For example, Tesco customers can accumulate points for such activities as reusing bags, recycling cans and printer cartridges, and buying home-insulation materials. Like points earned on regular purchases, these green points can be redeemed for cash. Tesco has not abandoned its traditional retail offering but augmented its business with these innovations, thereby infusing its value proposition with a green streak.

A more radical strategy is 'combine and transcend'. This entails combining aspects of the product's existing value proposition with attributes addressing changes arising from a trend, to create a novel experience – one that may land the company in an entirely new market space. At first glance, spending resources to incorporate elements of a seemingly irrelevant trend into one's core offerings sounds like it's hardly worthwhile. But consider Nike's move to integrate the digital revolution into its reputation for high-performance athletic footwear. In 2006, they teamed up with technology company Apple to launch Nike+, a digital sports kit comprising a sensor that attaches to the running shoe and a wireless receiver that connects to the user's iPod. By combining Nike's original value proposition for amateur athletes with one for digital consumers, the Nike+ sports kit and web interface moved the company from a focus on athletic apparel to a new plane of engagement with its customers.

A third approach, known as 'counteract and reaffirm', involves developing products or services that stress the values traditionally associated with the category in ways that allow consumers to oppose – or at least temporarily escape from – the aspects of trends they view as undesirable. A product that accomplished this is the ME2, a video game created by Canada's iToys. By reaffirming the toy category's association with physical play, the ME2 counteracted some of the widely perceived negative impacts of digital gaming devices. Like other handheld games, the device featured a host of exciting interactive games, a full-color LCD screen, and advanced 3D graphics. What set it apart was that it incorporated the traditional physical component of children's play: it contained a pedometer, which tracked and awarded points for physical activity (walking, running, biking, skateboarding, climbing stairs). The child could use the points to enhance various virtual skills needed for the video game. The ME2, introduced in mid-2008, catered to kids' huge desire to play video games while countering the negatives, such as associations with lack of exercise and obesity.

Once you have gained perspective on how trend-related changes in consumer opinions and behaviors impact on your category, you can determine which of our three innovation strategies to pursue. When your category's basic value proposition continues to be meaningful for consumers influenced by the trend, the infuse-and-augment strategy will allow you to reinvigorate the category. If analysis reveals an increasing disparity between your category and consumers' new focus, your innovations need to transcend the category to integrate the two worlds. Finally, if aspects of the category clash with undesired outcomes of a trend, such as associations with unhealthy lifestyles, there is an opportunity to counteract those changes by reaffirming the core values of your category.

Trends – technological, economic, environmental, social, or political – that affect how people perceive the world around them and shape what they expect from products and services present firms with unique opportunities for growth.`,
      instructions: `Questions 27–31: Choose the correct letter, A, B, C or D.

Questions 32–37: Match each statement with the correct company, A, B, C or D.
NB You may use any letter more than once.

Questions 38–40: Complete each sentence with the correct ending, A, B, C or D below.`,
      questions: [
        // ── Q27–31: Multiple choice ───────────────────────────────
        {
          id: "cam13-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Choose the correct letter, A, B, C or D.",
          type: "multiple_choice",
          question: "27. In the first paragraph, the writer says that most managers",
          options: [
            { label: "A – fail to spot the key consumer trends of the moment", value: "A" },
            { label: "B – make the mistake of focusing only on the principal consumer trends", value: "B" },
            { label: "C – misinterpret market research data relating to current consumer trends", value: "C" },
            { label: "D – are unaware of the significant impact that trends have on consumers' lives", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. According to the third paragraph, Coach was anxious to",
          options: [
            { label: "A – follow what some of its competitors were doing", value: "A" },
            { label: "B – maintain its prices throughout its range", value: "B" },
            { label: "C – safeguard its reputation as a manufacturer of luxury goods", value: "C" },
            { label: "D – modify the entire look of its brand to suit the economic climate", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. What point is made about Tesco's Greener Living programme?",
          options: [
            { label: "A – It did not require Tesco to modify its core business activities", value: "A" },
            { label: "B – It succeeded in attracting a more eco-conscious clientele", value: "B" },
            { label: "C – Its main aim was to raise consumers' awareness of environmental issues", value: "C" },
            { label: "D – It was not the first time that Tesco had implemented such an initiative", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. What does the writer suggest about Nike's strategy?",
          options: [
            { label: "A – It was an extremely risky strategy at the time", value: "A" },
            { label: "B – It was a strategy that only a major company could afford to follow", value: "B" },
            { label: "C – It was the type of strategy that would not have been possible in the past", value: "C" },
            { label: "D – It was the kind of strategy which might appear to have few obvious benefits", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q31",
          number: 31,
          type: "multiple_choice",
          question: "31. What was original about the ME2?",
          options: [
            { label: "A – It contained technology that had been developed for the sports industry", value: "A" },
            { label: "B – It appealed to young people who were keen to improve their physical fitness", value: "B" },
            { label: "C – It took advantage of a current trend for video games with colourful 3D graphics", value: "C" },
            { label: "D – It was a handheld game that addressed people's concerns about unhealthy lifestyles", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q32–37: Company matching ──────────────────────────────
        {
          id: "cam13-ra-t2-s3-q32",
          number: 32,
          groupLabel: "Questions 32–37: Match each statement with the correct company, A, B, C or D.\nWrite the correct letter, A, B, C or D, in boxes 32–37 on your answer sheet.\nNB You may use any letter more than once.\n\nList of companies\nA  Coach\nB  Tesco\nC  Nike\nD  iToys",
          type: "matching",
          question: "32. It turned the notion that its products could have harmful effects to its own advantage.",
          options: [
            { label: "A – Coach", value: "A" },
            { label: "B – Tesco", value: "B" },
            { label: "C – Nike", value: "C" },
            { label: "D – iToys", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q33",
          number: 33,
          type: "matching",
          question: "33. It extended its offering by collaborating with another manufacturer.",
          options: [
            { label: "A – Coach", value: "A" },
            { label: "B – Tesco", value: "B" },
            { label: "C – Nike", value: "C" },
            { label: "D – iToys", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q34",
          number: 34,
          type: "matching",
          question: "34. It implemented an incentive scheme to demonstrate its corporate social responsibility.",
          options: [
            { label: "A – Coach", value: "A" },
            { label: "B – Tesco", value: "B" },
            { label: "C – Nike", value: "C" },
            { label: "D – iToys", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q35",
          number: 35,
          type: "matching",
          question: "35. It discovered that customers had a positive attitude towards dealing with difficult circumstances.",
          options: [
            { label: "A – Coach", value: "A" },
            { label: "B – Tesco", value: "B" },
            { label: "C – Nike", value: "C" },
            { label: "D – iToys", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q36",
          number: 36,
          type: "matching",
          question: "36. It responded to a growing lifestyle trend in an unrelated product sector.",
          options: [
            { label: "A – Coach", value: "A" },
            { label: "B – Tesco", value: "B" },
            { label: "C – Nike", value: "C" },
            { label: "D – iToys", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q37",
          number: 37,
          type: "matching",
          question: "37. It successfully avoided having to charge its customers less for its core products.",
          options: [
            { label: "A – Coach", value: "A" },
            { label: "B – Tesco", value: "B" },
            { label: "C – Nike", value: "C" },
            { label: "D – iToys", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q38–40: Sentence endings ──────────────────────────────
        {
          id: "cam13-ra-t2-s3-q38",
          number: 38,
          groupLabel: "Questions 38–40: Complete each sentence with the correct ending, A, B, C or D below.\n\nA  employ a combination of strategies to maintain your consumer base.\nB  identify the most appropriate innovation strategy to use.\nC  emphasise your brand's traditional values with the counteract-and-reaffirm strategy.\nD  use the combine-and-transcend strategy to integrate the two worlds.",
          type: "matching",
          question: "38. If there are any trend-related changes impacting on your category, you should",
          options: [
            { label: "A – employ a combination of strategies to maintain your consumer base", value: "A" },
            { label: "B – identify the most appropriate innovation strategy to use", value: "B" },
            { label: "C – emphasise your brand's traditional values with the counteract-and-reaffirm strategy", value: "C" },
            { label: "D – use the combine-and-transcend strategy to integrate the two worlds", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q39",
          number: 39,
          type: "matching",
          question: "39. If a current trend highlights a negative aspect of your category, you should",
          options: [
            { label: "A – employ a combination of strategies to maintain your consumer base", value: "A" },
            { label: "B – identify the most appropriate innovation strategy to use", value: "B" },
            { label: "C – emphasise your brand's traditional values with the counteract-and-reaffirm strategy", value: "C" },
            { label: "D – use the combine-and-transcend strategy to integrate the two worlds", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t2-s3-q40",
          number: 40,
          type: "matching",
          question: "40. If the consumers' new focus has an increasing lack of connection with your offering, you should",
          options: [
            { label: "A – employ a combination of strategies to maintain your consumer base", value: "A" },
            { label: "B – identify the most appropriate innovation strategy to use", value: "B" },
            { label: "C – emphasise your brand's traditional values with the counteract-and-reaffirm strategy", value: "C" },
            { label: "D – use the combine-and-transcend strategy to integrate the two worlds", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 13 – TEST 3  (Academic Reading)
// Passages: The coconut palm /
//           How baby talk gives infant brains a boost /
//           Whatever happened to the Harappan Civilisation?
// ============================================================
export const cambridge13_reading_t3: IELTSTest = {
  id: "cam13-reading-academic-t3",
  title: "Cambridge IELTS 13 – Test 3",
  bookNumber: 13,
  testNumber: 3,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t3-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The coconut palm",
      passageText: `For millennia, the coconut has been central to the lives of Polynesian and Asian peoples. In the western world, on the other hand, coconuts have always been exotic and unusual, sometimes rare. The Italian merchant traveller Marco Polo apparently saw coconuts in South Asia in the late 13th century, and among the mid-14th-century travel writings of Sir John Mandeville there is mention of 'great Notes of Ynde' (great Nuts of India). Today, images of palm-fringed tropical beaches are clichés in the west to sell holidays, chocolate bars, fizzy drinks and even romance.

Typically, we envisage coconuts as brown cannonballs that, when opened, provide sweet white flesh. But we see only part of the fruit and none of the plant from which they come. The coconut palm has a smooth, slender, grey trunk, up to 30 metres tall. This is an important source of timber for building houses, and is increasingly being used as a replacement for endangered hardwoods in the furniture construction industry. The trunk is surmounted by a rosette of leaves, each of which may be up to six metres long. The leaves have hard veins in their centres which, in many parts of the world, are used as brushes after the green part of the leaf has been stripped away. Immature coconut flowers are tightly clustered together among the leaves at the top of the trunk. The flower stems may be tapped for their sap to produce a drink, and the sap can also be reduced by boiling to produce a type of sugar used for cooking.

Coconut palms produce as many as seventy fruits per year, weighing more than a kilogram each. The wall of the fruit has three layers: a waterproof outer layer, a fibrous middle layer and a hard, inner layer. The thick fibrous middle layer produces coconut fibre, 'coir', which has numerous uses and is particularly important in manufacturing ropes. The woody innermost layer, the shell, with its three prominent 'eyes', surrounds the seed. An important product obtained from the shell is charcoal, which is widely used in various industries as well as in the home as a cooking fuel. When broken in half, the shells are also used as bowls in many parts of Asia.

Inside the shell are the nutrients (endosperm) needed by the developing seed. Initially, the endosperm is a sweetish liquid, coconut water, which is enjoyed as a drink, but also provides the hormones which encourage other plants to grow more rapidly and produce higher yields. As the fruit matures, the coconut water gradually solidifies to form the brilliant white, fat-rich, edible flesh or meat. Dried coconut flesh, 'copra', is made into coconut oil and coconut milk, which are widely used in cooking in different parts of the world, as well as in cosmetics. A derivative of coconut fat, glycerine, acquired strategic importance in a quite different sphere, as Alfred Nobel introduced the world to his nitroglycerine-based invention: dynamite.

Their biology would appear to make coconuts the great maritime voyagers and coastal colonizers of the plant world. The large, energy-rich fruits are able to float in water and tolerate salt, but cannot remain viable indefinitely; studies suggest after about 110 days at sea they are no longer able to germinate. Literally cast onto desert island shores, with little more than sand to grow in and exposed to the full glare of the tropical sun, coconut seeds are able to germinate and root. The air pocket in the seed, created as the endosperm solidifies, protects the embryo. In addition, the fibrous fruit wall that helped it to float during the voyage stores moisture that can be taken up by the roots of the coconut seedling as it starts to grow.

There have been centuries of academic debate over the origins of the coconut. There were no coconut palms in West Africa, the Caribbean or the east coast of the Americas before the voyages of the European explorers Vasco da Gama and Columbus in the late 15th and early 16th centuries. 16th century trade and human migration patterns reveal that Arab traders and European sailors are likely to have moved coconuts from South and Southeast Asia to Africa and then across the Atlantic to the east coast of America. But the origin of coconuts discovered along the west coast of America by 16th century sailors has been the subject of centuries of discussion. Two diametrically opposed origins have been proposed: that they came from Asia, or that they were native to America. Both suggestions have problems. In Asia, there is a large degree of coconut diversity and evidence of millennia of human use – but there are no relatives growing in the wild. In America, there are close coconut relatives, but no evidence that coconuts are indigenous. These problems have led to the intriguing suggestion that coconuts originated on coral islands in the Pacific and were dispersed from there.`,
      instructions: `Questions 1–8: Complete the table below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 9–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–8: Table completion ────────────────────────────────
        {
          id: "cam13-ra-t3-s1-q1",
          number: 1,
          groupLabel: "Questions 1–8: Complete the table below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nTHE COCONUT PALM\nPart | Description | Uses\ntrunk | up to 30 metres | timber for houses and the making of 1………………………\nleaves | up to 6 metres long | to make brushes\nflowers | at the top of the trunk | stems provide sap, used as a drink or a source of 2………………………\nfruits outer layer | — | —\nmiddle layer (coir fibres) | — | used for 3………………………\ninner layer (shell) | — | a source of 4……………………… / (when halved) for 5………………………\ncoconut water | — | a drink / a source of 6……………………… for other plants\ncoconut flesh | — | oil and milk for cooking and 7……………………… / glycerine (an ingredient in 8………………………)",
          type: "table_completion",
          question: "1. Trunk – timber for houses and the making of _______",
          correctAnswer: "furniture",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q2",
          number: 2,
          type: "table_completion",
          question: "2. Flowers – stems provide sap, used as a drink or a source of _______",
          correctAnswer: "sugar",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q3",
          number: 3,
          type: "table_completion",
          question: "3. Middle layer (coir fibres) – used for _______",
          correctAnswer: "ropes",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q4",
          number: 4,
          type: "table_completion",
          question: "4. Inner layer (shell) – a source of _______",
          correctAnswer: "charcoal",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q5",
          number: 5,
          type: "table_completion",
          question: "5. Inner layer (shell) – when halved, used as _______",
          correctAnswer: "bowls",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q6",
          number: 6,
          type: "table_completion",
          question: "6. Coconut water – a source of _______ for other plants",
          correctAnswer: "hormones",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q7",
          number: 7,
          type: "table_completion",
          question: "7. Coconut flesh – oil and milk for cooking and _______",
          correctAnswer: "cosmetics",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q8",
          number: 8,
          type: "table_completion",
          question: "8. Coconut flesh – glycerine (an ingredient in _______)",
          correctAnswer: "dynamite",
          points: 1,
        },
        // ── Q9–13: TRUE / FALSE / NOT GIVEN ──────────────────────
        {
          id: "cam13-ra-t3-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "9. Coconut seeds need shade in order to germinate.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. Coconuts were probably transported to Asia from America in the 16th century.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. Coconuts found on the west coast of America were a different type from those found on the east coast.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. All the coconuts found in Asia are cultivated varieties.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. Coconuts are cultivated in different ways in America and the Pacific.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t3-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "How baby talk gives infant brains a boost",
      passageText: `A
The typical way of talking to a baby – high-pitched, exaggerated and repetitious – is a source of fascination for linguists who hope to understand how 'baby talk' impacts on learning. Most babies start developing their hearing while still in the womb, prompting some hopeful parents to play classical music to their pregnant bellies. Some research even suggests that infants are listening to adult speech as early as 10 weeks before being born, gathering the basic building blocks of their family's native tongue.

B
Early language exposure seems to have benefits to the brain – for instance, studies suggest that babies raised in bilingual homes are better at learning how to mentally prioritize information. So how does the sweet if sometimes absurd sound of infant-directed speech influence a baby's development? Here are some recent studies that explore the science behind baby talk.

C
Fathers don't use baby talk as often or in the same ways as mothers – and that's perfectly OK, according to a new study. Mark VanDam of Washington State University at Spokane and colleagues equipped parents with recording devices and speech-recognition software to study the way they interacted with their youngsters during a normal day. 'We found that moms do exactly what you'd expect and what's been described many times over,' VanDam explains. 'But we found that dads aren't doing the same thing. Dads didn't raise their pitch or fundamental frequency when they talked to kids.' Their role may be rooted in what is called the bridge hypothesis, which dates back to 1975. It suggests that fathers use less familial language to provide their children with a bridge to the kind of speech they'll hear in public. 'The idea is that a kid gets to practice a certain kind of speech with mom and another kind of speech with dad, so the kid then has a wider repertoire of kinds of speech to practice,' says VanDam.

D
Scientists from the University of Washington and the University of Connecticut collected thousands of 30-second conversations between parents and their babies, fitting 26 children with audio-recording vests that captured language and sound during a typical eight-hour day. The study found that the more baby talk parents used, the more their youngsters began to babble. And when researchers saw the same babies at age two, they found that frequent baby talk had dramatically boosted vocabulary, regardless of socioeconomic status. 'Those children who listened to a lot of baby talk were talking more than the babies that listened to more adult talk or standard speech,' says Nairán Ramirez-Esparza of the University of Connecticut. 'We also found that it really matters whether you use baby talk in a one-on-one context,' she adds. 'The more parents use baby talk one-on-one, the more babies babble, and the more they babble, the more words they produce later in life.'

E
Another study suggests that parents might want to pair their youngsters up so they can babble more with their own kind. Researchers from McGill University and Université du Québec à Montréal found that babies seem to like listening to each other rather than to adults – which may be why baby talk is such a universal tool among parents. They played repeating vowel sounds made by a special synthesizing device that mimicked sounds made by either an adult woman or another baby. This way, only the impact of the auditory cues was observed. The team then measured how long each type of sound held the infants' attention. They found that the 'infant' sounds held babies' attention nearly 40 percent longer. The baby noises also induced more reactions in the listening infants, like smiling or lip moving, which approximates sound making. The team theorizes that this attraction to other infant sounds could help launch the learning process that leads to speech. 'It may be some property of the sound that is just drawing their attention,' says study co-author Linda Polka. 'Or maybe they are really interested in that particular type of sound because they are starting to focus on their own ability to make sounds. We are speculating here but it might catch their attention because they recognize it as a sound they could possibly make.'

F
In a study published in Proceedings of the National Academy of Sciences, a total of 57 babies from two slightly different age groups – seven months and eleven and a half months – were played a number of syllables from both their native language (English) and a non-native tongue (Spanish). The infants were placed in a brain-activation scanner that recorded activity in a brain region known to guide the motor movements that produce speech. The results suggest that listening to baby talk prompts infant brains to start practicing their language skills. Finding activation in motor areas suggests the baby brain is engaged in trying to talk back right from the start, and suggests that seven-month-olds' brains are already trying to figure out how to make sounds. An interesting finding was that while the seven-month-olds responded to all speech sounds regardless of language, the brains of the older infants worked harder at the motor activations of non-native sounds compared to native sounds. The study, led by Patricia Kuhl of the University of Washington, may have also uncovered a process by which babies recognize differences between their native language and other tongues.`,
      instructions: `Questions 14–17: Match each idea with the correct researcher, A, B or C.
NB You may use any letter more than once.

Questions 18–23: Complete the summary below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.

Questions 24–26: Reading Passage 2 has six paragraphs, A–F.
Which paragraph contains the following information?`,
      questions: [
        // ── Q14–17: Researcher matching ───────────────────────────
        {
          id: "cam13-ra-t3-s2-q14",
          number: 14,
          groupLabel: "Questions 14–17: Match each idea with the correct researcher, A, B or C.\nWrite the correct letter, A, B or C, in boxes 14–17 on your answer sheet.\nNB You may use any letter more than once.\n\nList of Researchers\nA  Mark VanDam\nB  Nairán Ramirez-Esparza\nC  Patricia Kuhl",
          type: "matching",
          question: "14. the importance of adults giving babies individual attention when talking to them",
          options: [
            { label: "A – Mark VanDam", value: "A" },
            { label: "B – Nairán Ramirez-Esparza", value: "B" },
            { label: "C – Patricia Kuhl", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q15",
          number: 15,
          type: "matching",
          question: "15. the connection between what babies hear and their own efforts to create speech",
          options: [
            { label: "A – Mark VanDam", value: "A" },
            { label: "B – Nairán Ramirez-Esparza", value: "B" },
            { label: "C – Patricia Kuhl", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q16",
          number: 16,
          type: "matching",
          question: "16. the advantage for the baby of having two parents each speaking in a different way",
          options: [
            { label: "A – Mark VanDam", value: "A" },
            { label: "B – Nairán Ramirez-Esparza", value: "B" },
            { label: "C – Patricia Kuhl", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q17",
          number: 17,
          type: "matching",
          question: "17. the connection between the amount of baby talk babies hear and how much vocalising they do themselves",
          options: [
            { label: "A – Mark VanDam", value: "A" },
            { label: "B – Nairán Ramirez-Esparza", value: "B" },
            { label: "C – Patricia Kuhl", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q18–23: Summary completion ────────────────────────────
        {
          id: "cam13-ra-t3-s2-q18",
          number: 18,
          groupLabel: "Questions 18–23: Complete the summary below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\nResearch into how parents talk to babies\nResearchers at Washington State University used 18……………………………, together with specialised computer programs, to analyse how parents interacted with their babies during a normal day. The study revealed that 19………………………… tended not to modify their ordinary speech patterns when interacting with their babies. According to an idea known as the 20……………………….., they may use a more adult type of speech to prepare infants for the language they will hear outside the family home. According to the researchers, hearing baby talk from one parent and 'normal' language from the other expands the baby's 21………………………… of types of speech which they can practise.\nMeanwhile, another study carried out by scientists from the University of Washington and the University of Connecticut recorded speech and sound using special 22……………………………… that the babies were equipped with. When they studied the babies again at age two, they found that those who had heard a lot of baby talk in infancy had a much larger 23……………………………. than those who had not.",
          type: "summary_completion",
          question: "18. Researchers used _______, together with specialised computer programs, to analyse how parents interacted with their babies",
          correctAnswer: "recording devices",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q19",
          number: 19,
          type: "summary_completion",
          question: "19. The study revealed that _______ tended not to modify their ordinary speech patterns when interacting with their babies",
          correctAnswer: "dads",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q20",
          number: 20,
          type: "summary_completion",
          question: "20. According to an idea known as the _______, they may use a more adult type of speech to prepare infants for language outside the home",
          correctAnswer: "bridge hypothesis",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. Hearing baby talk from one parent and 'normal' language from the other expands the baby's _______ of types of speech",
          correctAnswer: "repertoire",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. Another study recorded speech and sound using special _______ that the babies were equipped with",
          correctAnswer: "vests",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q23",
          number: 23,
          type: "summary_completion",
          question: "23. Those who had heard a lot of baby talk in infancy had a much larger _______ than those who had not",
          correctAnswer: "vocabulary",
          points: 1,
        },
        // ── Q24–26: Paragraph matching ────────────────────────────
        {
          id: "cam13-ra-t3-s2-q24",
          number: 24,
          groupLabel: "Questions 24–26: Reading Passage 2 has six paragraphs, A–F.\nWhich paragraph contains the following information?\nWrite the correct letter, A–F, in boxes 24–26 on your answer sheet.",
          type: "matching",
          question: "24. a reference to a change which occurs in babies' brain activity before the end of their first year",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q25",
          number: 25,
          type: "matching",
          question: "25. an example of what some parents do for their baby's benefit before birth",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s2-q26",
          number: 26,
          type: "matching",
          question: "26. a mention of babies' preference for the sounds that other babies make",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "E",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam13-ra-t3-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Whatever happened to the Harappan Civilisation?",
      passageText: `New research sheds light on the disappearance of an ancient society

A
The Harappan Civilisation of ancient Pakistan and India flourished 5,000 years ago, but a thousand years later their cities were abandoned. The Harappan Civilisation was a sophisticated Bronze Age society who built 'megacities' and traded internationally in luxury craft products, and yet seemed to have left almost no depictions of themselves. But their lack of self-imagery – at a time when the Egyptians were carving and painting representations of themselves all over their temples – is only part of the mystery.

B
'There is plenty of archaeological evidence to tell us about the rise of the Harappan Civilisation, but relatively little about its fall,' explains archaeologist Dr Cameron Petrie of the University of Cambridge. 'As populations increased, cities were built that had great baths, craft workshops, palaces and halls laid out in distinct sectors. Houses were arranged in blocks, with wide main streets and narrow alleyways, and many had their own wells and drainage systems. It was very much a "thriving" civilisation.' Then around 2100 BC, a transformation began. Streets went uncleaned, buildings started to be abandoned, and ritual structures fell out of use. After their final demise, a millennium passed before really large-scale cities appeared once more in South Asia.

C
Some have claimed that major glacier-fed rivers changed their course, dramatically affecting the water supply and agriculture; or that the cities could not cope with an increasing population, they exhausted their resource base, the trading economy broke down or they succumbed to invasion and conflict; and yet others that climate change caused an environmental change that affected food and water provision. 'It is unlikely that there was a single cause for the decline of the civilisation. But the fact is, until now, we have had little solid evidence from the area for most of the key elements,' said Petrie. 'A lot of the archaeological debate has really only been well-argued speculation.'

D
A research team led by Petrie, together with Dr Ravindanath Singh of Banaras Hindu University in India, found early in their investigations that many of the archaeological sites were not where they were supposed to be, completely altering understanding of the way that this region was inhabited in the past. When they carried out a survey of how the larger area was settled in relation to sources of water, they found inaccuracies in the published geographic locations of ancient settlements ranging from several hundred metres to many kilometres. They realised that any attempts to use the existing data were likely to be fundamentally flawed. Over the course of several seasons of fieldwork they carried out new surveys, finding an astonishing 198 settlement sites that were previously unknown.

E
Now, research published by Dr Yama Dixit and Professor David Hodell, both from Cambridge's Department of Earth Sciences, has provided the first definitive evidence for climate change affecting the plains of north-western India, where hundreds of Harappan sites are known to have been situated. The researchers gathered shells of Melanoides tuberculata snails from the sediments of an ancient lake and used geochemical analysis as a means of tracing the climate history of the region. 'As today, the major source of water into the lake is likely to have been the summer monsoon,' says Dixit. 'But we have observed that there was an abrupt change about 4,100 years ago, when the amount of evaporation from the lake exceeded the rainfall – indicative of a drought.' Hodell adds: 'We estimate that the weakening of the Indian summer monsoon climate lasted about 200 years before recovering to the previous conditions, which we still see today.'

F
It has long been thought that other great Bronze Age civilisations also declined at a similar time, with a global-scale climate event being seen as the cause. While it is possible that these local-scale processes were linked, the real archaeological interest lies in understanding the impact of these larger-scale events on different environments and different populations. 'Considering the vast area of the Harappan Civilisation with its variable weather systems,' explains Singh, 'it is essential that we obtain more climate data from areas close to the two great cities at Mohenjodaro and Harappa and also from the Indian Punjab.'

G
Petrie and Singh's team is now examining archaeological records and trying to understand details of how people led their lives in the region five millennia ago. They are analysing grains cultivated at the time, and trying to work out whether they were grown under extreme conditions of water stress, and whether they were adjusting the combinations of crops they were growing for different weather systems. They are also looking at whether the types of pottery used, and other aspects of their material culture, were distinctive to specific regions or were more similar across larger areas. This gives us insight into the types of interactive networks that the population was involved in, and whether those changed.

H
Petrie believes that archaeologists are in a unique position to investigate how past societies responded to environmental and climatic change. 'By investigating responses to environmental pressures and threats, we can learn from the past to engage with the public, and the relevant governmental and administrative bodies, to be more proactive in issues such as the management and administration of water supply, the balance of urban and rural development, and the importance of preserving cultural heritage in the future.'`,
      instructions: `Questions 27–31: Reading Passage 3 has eight paragraphs, A–H.
Which paragraph contains the following information?
NB You may use any letter more than once.

Questions 32–36: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 37–40: Match each statement with the correct researcher, A, B, C or D.
NB You may use any letter more than once.`,
      questions: [
        // ── Q27–31: Paragraph matching ────────────────────────────
        {
          id: "cam13-ra-t3-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Reading Passage 3 has eight paragraphs, A–H.\nWhich paragraph contains the following information?\nWrite the correct letter, A–H, in boxes 27–31 on your answer sheet.\nNB You may use any letter more than once.",
          type: "matching",
          question: "27. proposed explanations for the decline of the Harappan Civilisation",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q28",
          number: 28,
          type: "matching",
          question: "28. reference to a present-day application of some archaeological research findings",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q29",
          number: 29,
          type: "matching",
          question: "29. a difference between the Harappan Civilisation and another culture of the same period",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q30",
          number: 30,
          type: "matching",
          question: "30. a description of some features of Harappan urban design",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q31",
          number: 31,
          type: "matching",
          question: "31. reference to the discovery of errors made by previous archaeologists",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q32–36: Summary completion ────────────────────────────
        {
          id: "cam13-ra-t3-s3-q32",
          number: 32,
          groupLabel: "Questions 32–36: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nLooking at evidence of climate change\nYama Dixit and David Hodell have found the first definitive evidence of climate change affecting the plains of north-western India thousands of years ago. By collecting the 32………………………… of snails and analysing them, they discovered evidence of a change in water levels in a 33………………………… in the region. This occurred when there was less 34……………………………… than evaporation, and suggests that there was an extended period of drought.\nPetrie and Singh's team are using archaeological records to look at 35……………………………… from five millennia ago, in order to know whether people had adapted their agricultural practices to changing climatic conditions. They are also examining objects including 36…………………………… , so as to find out about links between inhabitants of different parts of the region and whether these changed over time.",
          type: "summary_completion",
          question: "32. By collecting the _______ of snails and analysing them, they discovered evidence of a change in water levels",
          correctAnswer: "shells",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q33",
          number: 33,
          type: "summary_completion",
          question: "33. They discovered evidence of a change in water levels in a _______ in the region",
          correctAnswer: "lake",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q34",
          number: 34,
          type: "summary_completion",
          question: "34. This occurred when there was less _______ than evaporation, suggesting an extended period of drought",
          correctAnswer: "rainfall",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q35",
          number: 35,
          type: "summary_completion",
          question: "35. Petrie and Singh's team are using archaeological records to look at _______ from five millennia ago",
          correctAnswer: "grains",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q36",
          number: 36,
          type: "summary_completion",
          question: "36. They are also examining objects including _______, to find out about links between inhabitants of different parts of the region",
          correctAnswer: "pottery",
          points: 1,
        },
        // ── Q37–40: Researcher matching ───────────────────────────
        {
          id: "cam13-ra-t3-s3-q37",
          number: 37,
          groupLabel: "Questions 37–40: Match each statement with the correct researcher, A, B, C or D.\nWrite the correct letter, A, B, C or D, in boxes 37–40 on your answer sheet.\nNB You may use any letter more than once.\n\nList of Researchers\nA  Cameron Petrie\nB  Ravindanath Singh\nC  Yama Dixit\nD  David Hodell",
          type: "matching",
          question: "37. Finding further information about changes to environmental conditions in the region is vital.",
          options: [
            { label: "A – Cameron Petrie", value: "A" },
            { label: "B – Ravindanath Singh", value: "B" },
            { label: "C – Yama Dixit", value: "C" },
            { label: "D – David Hodell", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q38",
          number: 38,
          type: "matching",
          question: "38. Examining previous patterns of behaviour may have long-term benefits.",
          options: [
            { label: "A – Cameron Petrie", value: "A" },
            { label: "B – Ravindanath Singh", value: "B" },
            { label: "C – Yama Dixit", value: "C" },
            { label: "D – David Hodell", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q39",
          number: 39,
          type: "matching",
          question: "39. Rough calculations indicate the approximate length of a period of water shortage.",
          options: [
            { label: "A – Cameron Petrie", value: "A" },
            { label: "B – Ravindanath Singh", value: "B" },
            { label: "C – Yama Dixit", value: "C" },
            { label: "D – David Hodell", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam13-ra-t3-s3-q40",
          number: 40,
          type: "matching",
          question: "40. Information about the decline of the Harappan Civilisation has been lacking.",
          options: [
            { label: "A – Cameron Petrie", value: "A" },
            { label: "B – Ravindanath Singh", value: "B" },
            { label: "C – Yama Dixit", value: "C" },
            { label: "D – David Hodell", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge13Tests: IELTSTest[] = [cambridge13_reading_t1, cambridge13_reading_t2, cambridge13_reading_t3];
