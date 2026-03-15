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

export const cambridge13Tests: IELTSTest[] = [cambridge13_reading_t1];
