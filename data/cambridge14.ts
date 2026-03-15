import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 14 – TEST 1  (Academic Reading)
// Passages: The Importance of Children's Play /
//           The Growth of Bike-Sharing Schemes Around the World /
//           Motivational Factors and the Hospitality Industry
// ============================================================
export const cambridge14_reading_t1: IELTSTest = {
  id: "cam14-reading-academic-t1",
  title: "Cambridge IELTS 14 – Test 1",
  bookNumber: 14,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam14-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The Importance of Children's Play",
      passageText: `Brick by brick, six-year-old Alice is building a magical kingdom. Imagining fairy-tale turrets and fire-breathing dragons, wicked witches and gallant heroes, she's creating an enchanting world. Although she isn't aware of it, this fantasy is helping her take her first steps towards her capacity for creativity and so it will have important repercussions in her adult life.

Minutes later, Alice has abandoned the kingdom in favour of playing schools with her younger brother. When she bosses him around as his 'teacher', she's practising how to regulate her emotions through pretence. Later on, when they tire of this and settle down with a board game, she's learning about the need to follow rules and take turns with a partner.

'Play in all its rich variety is one of the highest achievements of the human species,' says Dr David Whitebread from the Faculty of Education at the University of Cambridge, UK. 'It underpins how we develop as intellectual, problem-solving adults and is crucial to our success as a highly adaptable species.'

Recognizing the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.

But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. 'The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,' he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents' increased wish to protect their children from being the victims of crime, and by the emphasis on 'earlier is better' which is leading to greater competition in academic learning and schools.

International bodies like the United Nations and the European Union have begun to develop policies concerned with children's right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on.

'The type of play we are interested in is child-initiated, spontaneous and unpredictable – but, as soon as you ask a five-year-old "to play", then you as the researcher have intervened,' explains Dr Sara Baker. 'And we want to know what the long-term impact of play is. It's a real challenge.'

Dr Jenny Gibson agrees, pointing out that although some of the steps in the puzzle of how and why play is important have been looked at, there is very little data on the impact it has on the child's later life.

Now, thanks to the university's new Centre for Research on Play in Education, Development and Learning (PEDAL), Whitebread, Baker, Gibson and a team of researchers hope to provide evidence on the role played by play in how a child develops.

'A strong possibility is that play supports the early development of children's self-control,' explains Baker. 'This is our ability to develop awareness of our own thinking processes – it influences how effectively we go about undertaking challenging activities.'

In a study carried out by Baker with toddlers and young pre-schoolers, she found that children with greater self-control solved problems more quickly when exploring an unfamiliar set-up requiring scientific reasoning. 'This sort of evidence makes us think that giving children the chance to play will make them more successful problem-solvers in the long run.'

If playful experiences do facilitate this aspect of development, say the researchers, it could be extremely significant for educational practices, because the ability to self-regulate has been shown to be a key predictor of academic performance.

Gibson adds: 'Playful behaviour is also an important indicator of healthy social and emotional development. In my previous research, I investigated how observing children at play can give us important clues about their well-being and can even be useful in the diagnosis of neurodevelopmental disorders like autism.'

Whitebread's recent research has involved developing a play-based approach to supporting children's writing. 'Many primary school children find writing difficult, but we showed in a previous study that a playful stimulus was far more effective than an instructional one.' Children wrote longer and better-structured stories when they first played with dolls representing characters in the story. In the latest study, children first created their story with Lego, with similar results. 'Many teachers commented that they had always previously had children saying they didn't know what to write about. With the Lego building, however, not a single child said this through the whole year of the project.'

Whitebread, who directs PEDAL, trained as a primary school teacher in the early 1970s, when, as he describes, 'the teaching of young children was largely a quiet backwater, untroubled by any serious intellectual debate or controversy.' Now, the landscape is very different, with hotly debated topics such as school starting age.

'Somehow the importance of play has been lost in recent decades. It's regarded as something trivial, or even as something negative that contrasts with "work". Let's not lose sight of its benefits, and the fundamental contributions it makes to human achievements in the arts, sciences and technology. Let's make sure children have a rich diet of play experiences.'`,
      instructions: `Questions 1–8: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 9–13: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q1–8: Notes completion ────────────────────────────────
        {
          id: "cam14-ra-t1-s1-q1",
          number: 1,
          groupLabel: "Questions 1–8: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nChildren's play\nUses of children's play\n• building a 'magical kingdom' may help develop 1………………………\n• board games involve 2……………………………… and turn-taking\nRecent changes affecting children's play\n• population of 3……………………………… have grown\n• opportunities for free play are limited due to:\n  – fear of 4………………………………\n  – fear of 5………………………………\n  – increased 6……………………………… in schools\nInternational policies on children's play\n• it is difficult to find 7……………………………… to support new policies\n• research needs to study the impact of play on the rest of the child's 8………………………………",
          type: "sentence_completion",
          question: "1. building a 'magical kingdom' may help develop _______",
          correctAnswer: "creativity",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q2",
          number: 2,
          type: "sentence_completion",
          question: "2. board games involve _______ and turn-taking",
          correctAnswer: "rules",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q3",
          number: 3,
          type: "sentence_completion",
          question: "3. population of _______ have grown",
          correctAnswer: "cities",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q4",
          number: 4,
          type: "sentence_completion",
          question: "4. opportunities for free play are limited due to fear of _______",
          correctAnswer: "traffic",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q5",
          number: 5,
          type: "sentence_completion",
          question: "5. opportunities for free play are limited due to fear of _______",
          correctAnswer: "crime",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q6",
          number: 6,
          type: "sentence_completion",
          question: "6. opportunities for free play are limited due to increased _______ in schools",
          correctAnswer: "competition",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q7",
          number: 7,
          type: "sentence_completion",
          question: "7. it is difficult to find _______ to support new policies",
          correctAnswer: "evidence",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q8",
          number: 8,
          type: "sentence_completion",
          question: "8. research needs to study the impact of play on the rest of the child's _______",
          correctAnswer: "life",
          points: 1,
        },
        // ── Q9–13: TRUE / FALSE / NOT GIVEN ──────────────────────
        {
          id: "cam14-ra-t1-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "9. Children with good self-control are known to be likely to do well at school later on.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. The way a child plays may provide information about possible medical problems.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. Playing with dolls was found to benefit girls' writing more than boys' writing.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. Children had problems thinking up ideas when they first created the story with Lego.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. People nowadays regard children's play as less significant than they did in the past.",
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
      id: "cam14-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The growth of bike-sharing schemes around the world",
      passageText: `How Dutch engineer Luud Schimmelpennink helped to devise urban bike-sharing schemes

A
The original idea for an urban bike-sharing scheme dates back to a summer's day in Amsterdam in 1965. Provo, the organization that came up with the idea, was a group of Dutch activists who wanted to change society. They believed the scheme, which was known as the Witte Fietsenplan, was an answer to the perceived threats of air pollution and consumerism. In the centre of Amsterdam, they painted a small number of used bikes white. They also distributed leaflets describing the dangers of cars and inviting people to use the white bikes. The bikes were then left unlocked at various locations around the city, to be used by anyone in need of transport.

B
Luud Schimmelpennink, a Dutch industrial engineer who still lives and cycles in Amsterdam, was heavily involved in the original scheme. He recalls how the scheme succeeded in attracting a great deal of attention – particularly when it came to publicising Provo's aims – but struggled to get off the ground. The police were opposed to Provo's initiatives and almost as soon as the white bikes were distributed around the city, they removed them. However, for Schimmelpennink and for bike-sharing schemes in general, this was just the beginning. 'The first Witte Fietsenplan was just a symbolic thing,' he says. 'We painted a few bikes white, that was all. Things got more serious when I became a member of the Amsterdam city council two years later.'

C
Schimmelpennink seized this opportunity to present a more elaborate Witte Fietsenplan to the city council. 'My idea was that the municipality of Amsterdam would distribute 10,000 white bikes over the city, for everyone to use,' he explains. 'I made serious calculations. It turned out that a white bicycle – per person, per kilometer – would cost the municipality only 10% of what it contributed to public transport per person per kilometer.' Nevertheless, the council unanimously rejected the plan. 'They said that the bicycle belongs to the past. They saw a glorious future for the car,' says Schimmelpennink. But he was not in the least discouraged.

D
Schimmelpennink never stopped believing in bike-sharing, and in the mid-90s, two Danes asked for his help to set up a system in Copenhagen. The result was the world's first large-scale bike-share programme. It worked on a deposit: 'You dropped a coin in the bike and when you returned it, you got your money back.' After setting up the Danish system, Schimmelpennink decided to try his luck again in the Netherlands – and this time he succeeded in arousing the interest of the Dutch Ministry of Transport. 'Times had changed,' he recalls. 'People had become more environmentally conscious, and the Danish experiment had proved that bike-sharing was a real possibility.' A new Witte Fietsenplan was launched in 1999 in Amsterdam. However, riding a white bike was no longer free; it cost one guilder per trip and payment was made with a chip card developed by the Dutch bank Postbank. Schimmelpennink designed conspicuous, sturdy white bikes locked in special racks which could be opened with the chip card – the plan started with 250 bikes, distributed over five stations.

E
Theo Molenaar, who was a system designer for the project, worked alongside Schimmelpennink. 'I remember when we were testing the bike racks, he announced that he had already designed better ones. But of course, we had to go through with the ones we had.' The system, however, was prone to vandalism and theft. 'After every weekend there would always be a couple of bikes missing,' Molenaar says. 'I really have no idea what people did with them, because they could instantly be recognised as white bikes.' But the biggest blow came when Postbank decided to abolish the chip card, because it wasn't profitable. 'That chip card was pivotal to the system,' Molenaar says. 'To continue the project we would have needed to set up another system, but the business partner had lost interest.'

F
Schimmelpennink was disappointed, but – characteristically – not for long. In 2002 he got a call from the French advertising corporation JC Decaux, who wanted to set up his bike-sharing scheme in Vienna. 'That went really well. After Vienna, they set up a system in Lyon. Then in 2007, Paris followed. That was a decisive moment in the history of bike-sharing.' The huge and unexpected success of the Parisian bike-sharing programme, which now boasts more than 20,000 bicycles, inspired cities all over the world to set up their own schemes, all modelled on Schimmelpennink's. 'It's wonderful that this happened,' he says. 'But financially I didn't really benefit from it, because I never filed for a patent.'

G
In Amsterdam today, 38% of all trips are made by bike and, along with Copenhagen, it is regarded as one of the two most cycle-friendly capitals in the world – but the city never got another Witte Fietsenplan. Molenaar believes this may be because everybody in Amsterdam already has a bike. Schimmelpennink, however, cannot see that this changes Amsterdam's need for a bike-sharing scheme. 'People who travel on the underground don't carry their bikes around. But often they need additional transport to reach their final destination.' Although he thinks it is strange that a city like Amsterdam does not have a successful bike-sharing scheme, he is optimistic about the future. 'In the '60s we didn't stand a chance because people were prepared to give their lives to keep cars in the city. But that mentality has totally changed. Today everybody longs for cities that are not dominated by cars.'`,
      instructions: `Questions 14–18: Which paragraph contains the following information?
Write the correct letter, A–G.
NB You may use any letter more than once.

Questions 19–20: Which TWO statements are made about the Amsterdam bike-sharing scheme of 1999?

Questions 21–22: Which TWO statements are made about Amsterdam today?

Questions 23–26: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q14–18: Paragraph matching ────────────────────────────
        {
          id: "cam14-ra-t1-s2-q14",
          number: 14,
          groupLabel: "Questions 14–18: Reading Passage 2 has seven paragraphs, A–G.\nWhich paragraph contains the following information?\nWrite the correct letter, A–G, in boxes 14–18 on your answer sheet.\nNB You may use any letter more than once.",
          type: "matching",
          question: "14. a description of how people misused a bike-sharing scheme",
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
          id: "cam14-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. an explanation of why a proposed bike-sharing scheme was turned down",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. a reference to a person being unable to profit from their work",
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
          id: "cam14-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. an explanation of the potential savings a bike-sharing scheme would bring",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. a reference to the problems a bike-sharing scheme was intended to solve",
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
        // ── Q19–20: Choose TWO (Amsterdam 1999) ───────────────────
        {
          id: "cam14-ra-t1-s2-q19",
          number: 19,
          groupLabel: "Questions 19–20: Choose TWO letters, A–E.\nWhich TWO of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999?\n\nA  It was initially opposed by a government department.\nB  It failed when a partner in the scheme withdrew support.\nC  It aimed to be more successful than the Copenhagen scheme.\nD  It was made possible by a change in people's attitudes.\nE  It attracted interest from a range of bike designers.",
          type: "multiple_choice",
          question: "19. Which statement is made about the Amsterdam bike-sharing scheme of 1999? (Choose TWO — this is the first answer)",
          options: [
            { label: "A – It was initially opposed by a government department", value: "A" },
            { label: "B – It failed when a partner in the scheme withdrew support", value: "B" },
            { label: "C – It aimed to be more successful than the Copenhagen scheme", value: "C" },
            { label: "D – It was made possible by a change in people's attitudes", value: "D" },
            { label: "E – It attracted interest from a range of bike designers", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s2-q20",
          number: 20,
          type: "multiple_choice",
          question: "20. Which statement is made about the Amsterdam bike-sharing scheme of 1999? (Choose TWO — this is the second answer)",
          options: [
            { label: "A – It was initially opposed by a government department", value: "A" },
            { label: "B – It failed when a partner in the scheme withdrew support", value: "B" },
            { label: "C – It aimed to be more successful than the Copenhagen scheme", value: "C" },
            { label: "D – It was made possible by a change in people's attitudes", value: "D" },
            { label: "E – It attracted interest from a range of bike designers", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q21–22: Choose TWO (Amsterdam today) ─────────────────
        {
          id: "cam14-ra-t1-s2-q21",
          number: 21,
          groupLabel: "Questions 21–22: Choose TWO letters, A–E.\nWhich TWO of the following statements are made in the text about Amsterdam today?\n\nA  The majority of residents would like to prevent all cars from entering the city.\nB  There is little likelihood of the city having another bike-sharing scheme.\nC  More trips in the city are made by bike than by any other form of transport.\nD  A bike-sharing scheme would benefit residents who use public transport.\nE  The city has a reputation as a place that welcomes cyclists.",
          type: "multiple_choice",
          question: "21. Which statement is made about Amsterdam today? (Choose TWO — this is the first answer)",
          options: [
            { label: "A – The majority of residents would like to prevent all cars from entering the city", value: "A" },
            { label: "B – There is little likelihood of the city having another bike-sharing scheme", value: "B" },
            { label: "C – More trips in the city are made by bike than by any other form of transport", value: "C" },
            { label: "D – A bike-sharing scheme would benefit residents who use public transport", value: "D" },
            { label: "E – The city has a reputation as a place that welcomes cyclists", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s2-q22",
          number: 22,
          type: "multiple_choice",
          question: "22. Which statement is made about Amsterdam today? (Choose TWO — this is the second answer)",
          options: [
            { label: "A – The majority of residents would like to prevent all cars from entering the city", value: "A" },
            { label: "B – There is little likelihood of the city having another bike-sharing scheme", value: "B" },
            { label: "C – More trips in the city are made by bike than by any other form of transport", value: "C" },
            { label: "D – A bike-sharing scheme would benefit residents who use public transport", value: "D" },
            { label: "E – The city has a reputation as a place that welcomes cyclists", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        // ── Q23–26: Summary completion ────────────────────────────
        {
          id: "cam14-ra-t1-s2-q23",
          number: 23,
          groupLabel: "Questions 23–26: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe first urban bike-sharing scheme\nThe first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were 23…………………………….. They were concerned about damage to the environment and about 24……………………………….., and believed that the bike-sharing scheme would draw attention to these issues. As well as painting some bikes white, they handed out 25…………………………….. that condemned the use of cars. However, the scheme was not a great success: almost as quickly as Provo left the bikes around the city, the 26…………………………….. took them away.",
          type: "summary_completion",
          question: "23. The people who belonged to this group were _______",
          correctAnswer: "activists",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s2-q24",
          number: 24,
          type: "summary_completion",
          question: "24. They were concerned about damage to the environment and about _______",
          correctAnswer: "consumerism",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. they handed out _______ that condemned the use of cars",
          correctAnswer: "leaflets",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. almost as quickly as Provo left the bikes around the city, the _______ took them away",
          correctAnswer: "police",
          points: 1,
        },
      ],
    },

    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam14-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Motivational factors and the hospitality industry",
      passageText: `A critical ingredient in the success of hotels is developing and maintaining superior performance from their employees. How is that accomplished? What Human Resource Management (HRM) practices should organizations invest in to acquire and retain great employees?

Some hotels aim to provide superior working conditions for their employees. The idea originated from workplaces – usually in the non-service sector – that emphasized fun and enjoyment as part of work-life balance. By contrast, the service sector, and more specifically hotels, has traditionally not extended these practices to address basic employee needs, such as good working conditions.

Pfeffer (1994) emphasizes that in order to succeed in a global business environment, organizations must make investment in Human Resource Management (HRM) to allow them to acquire employees who possess better skills and capabilities than their competitors. This investment will be to their competitive advantage. Despite this recognition of the importance of employee development, the hospitality industry has historically been dominated by underdeveloped HR practices (Lucas, 2002).

Lucas also points out that 'the substance of HRM practices does not appear to be designed to foster constructive relations with employees or to represent a managerial approach that enables developing and drawing out the full potential of people, even though employees may be broadly satisfied with many aspects of their work' (Lucas, 2002). In addition, or maybe as a result, high employee turnover has been a recurring problem throughout the hospitality industry. Among the many cited reasons are low compensation, inadequate benefits, poor working conditions and compromised employee morale and attitudes (Maroudas et al., 2008).

Ng and Sorensen (2008) demonstrated that when managers provide recognition to employees, motivate employees to work together, and remove obstacles preventing effective performance, employees feel more obligated to stay with the company. This was succinctly summarized by Michel et al. (2013): '[P]roviding support to employees gives them the confidence to perform their jobs better and the motivation to stay with the organization.' Hospitality organizations can therefore enhance employee motivation and retention through the development and improvement of their working conditions. These conditions are inherently linked to the working environment.

While it seems likely that employees' reactions to their job characteristics could be affected by a predisposition to view their work environment negatively, no evidence exists to support this hypothesis (Spector et al., 2000). However, given the opportunity, many people will find something to complain about in relation to their workplace (Poulston, 2009). There is a strong link between the perceptions of employees and particular factors of their work environment that are separate from the work itself, including company policies, salary and vacations.

Such conditions are particularly troubling for the luxury hotel market, where high-quality service, requiring a sophisticated approach to HRM, is recognized as a critical source of competitive advantage (Maroudas et al., 2008). In a real sense, the services of hotel employees represent their industry (Schneider and Bowen, 1993). This representation has commonly been limited to guest experiences. This suggests that there has been a dichotomy between the guest environment provided in luxury hotels and the working conditions of their employees.

It is therefore essential for hotel management to develop HRM practices that enable them to inspire and retain competent employees. This requires an understanding of what motivates employees at different levels of management and different stages of their careers (Enz and Siguaw, 2000). This implies that it is beneficial for hotel managers to understand what practices are most favorable to increase employee satisfaction and retention.

Herzberg (1966) proposes that people have two major types of needs, the first being extrinsic motivation factors relating to the context in which work is performed, rather than the work itself. These include working conditions and job security. When these factors are unfavorable, job dissatisfaction may result. Significantly, though, just fulfilling these needs does not result in satisfaction, but only in the reduction of dissatisfaction (Maroudas et al., 2008).

Employees also have intrinsic motivation needs or motivators, which include such factors as achievement and recognition. Unlike extrinsic factors, motivator factors may ideally result in job satisfaction (Maroudas et al., 2008). Herzberg's (1966) theory discusses the need for a 'balance' of these two types of needs.

The impact of fun as a motivating factor at work has also been explored. For example, Tews, Michel and Stafford (2013) conducted a study focusing on staff from a chain of themed restaurants in the United States. It was found that fun activities had a favorable impact on performance and manager support for fun had a favorable impact in reducing turnover. Their findings support the view that fun may indeed have a beneficial effect, but the framing of that fun must be carefully aligned with both organizational goals and employee characteristics. 'Managers must learn how to achieve the delicate balance of allowing employees the freedom to enjoy themselves at work while simultaneously maintaining high levels of performance' (Tews et al., 2013).

Deery (2008) has recommended several actions that can be adopted at the organizational level to retain good staff as well as assist in balancing work and family life. Those particularly appropriate to the hospitality industry include allowing adequate breaks during the working day, staff functions that involve families, and providing health and well-being opportunities.`,
      instructions: `Questions 27–31: Match each statement with the correct researcher, A–F.
NB You may use any letter more than once.

Questions 32–35: Do the following statements agree with the claims of the writer in Reading Passage 3?
Write YES, NO, or NOT GIVEN.

Questions 36–40: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q27–31: Researcher matching ───────────────────────────
        {
          id: "cam14-ra-t1-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Look at the following statements and the list of researchers below.\nMatch each statement with the correct researcher, A–F.\nWrite the correct letter, A–F, in boxes 27–31 on your answer sheet.\nNB You may use any letter more than once.\n\nA  Pfeffer\nB  Lucas\nC  Maroudas et al.\nD  Ng and Sorensen\nE  Enz and Siguaw\nF  Deery",
          type: "matching",
          question: "27. Hotel managers need to know what would encourage good staff to remain.",
          options: [
            { label: "A – Pfeffer", value: "A" },
            { label: "B – Lucas", value: "B" },
            { label: "C – Maroudas et al.", value: "C" },
            { label: "D – Ng and Sorensen", value: "D" },
            { label: "E – Enz and Siguaw", value: "E" },
            { label: "F – Deery", value: "F" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q28",
          number: 28,
          type: "matching",
          question: "28. The actions of managers may make staff feel they shouldn't move to a different employer.",
          options: [
            { label: "A – Pfeffer", value: "A" },
            { label: "B – Lucas", value: "B" },
            { label: "C – Maroudas et al.", value: "C" },
            { label: "D – Ng and Sorensen", value: "D" },
            { label: "E – Enz and Siguaw", value: "E" },
            { label: "F – Deery", value: "F" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q29",
          number: 29,
          type: "matching",
          question: "29. Little is done in the hospitality industry to help workers improve their skills.",
          options: [
            { label: "A – Pfeffer", value: "A" },
            { label: "B – Lucas", value: "B" },
            { label: "C – Maroudas et al.", value: "C" },
            { label: "D – Ng and Sorensen", value: "D" },
            { label: "E – Enz and Siguaw", value: "E" },
            { label: "F – Deery", value: "F" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q30",
          number: 30,
          type: "matching",
          question: "30. Staff are less likely to change jobs if cooperation is encouraged.",
          options: [
            { label: "A – Pfeffer", value: "A" },
            { label: "B – Lucas", value: "B" },
            { label: "C – Maroudas et al.", value: "C" },
            { label: "D – Ng and Sorensen", value: "D" },
            { label: "E – Enz and Siguaw", value: "E" },
            { label: "F – Deery", value: "F" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q31",
          number: 31,
          type: "matching",
          question: "31. Dissatisfaction with pay is not the only reason why hospitality workers change jobs.",
          options: [
            { label: "A – Pfeffer", value: "A" },
            { label: "B – Lucas", value: "B" },
            { label: "C – Maroudas et al.", value: "C" },
            { label: "D – Ng and Sorensen", value: "D" },
            { label: "E – Enz and Siguaw", value: "E" },
            { label: "F – Deery", value: "F" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        // ── Q32–35: YES / NO / NOT GIVEN ─────────────────────────
        {
          id: "cam14-ra-t1-s3-q32",
          number: 32,
          groupLabel: "Questions 32–35: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES, NO, or NOT GIVEN.",
          type: "true_false_ng",
          question: "32. One reason for high staff turnover in the hospitality industry is poor morale.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "33. Research has shown that staff have a tendency to dislike their workplace.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q34",
          number: 34,
          type: "true_false_ng",
          question: "34. An improvement in working conditions and job security makes staff satisfied with their jobs.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "35. Staff should be allowed to choose when they take breaks during the working day.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        // ── Q36–40: Summary completion ────────────────────────────
        {
          id: "cam14-ra-t1-s3-q36",
          number: 36,
          groupLabel: "Questions 36–40: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nFun at work\nTews, Michel and Stafford carried out research on staff in an American chain of 36………………………… They discovered that activities designed for staff to have fun improved their 37………………………… and that management involvement led to lower staff 38………………………… They also found that the activities needed to fit with both the company's 39………………………… and the 40………………………… of the staff. A balance was required between a degree of freedom and maintaining work standards.",
          type: "sentence_completion",
          question: "36. Tews, Michel and Stafford carried out research on staff in an American chain of _______",
          correctAnswer: "restaurants",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q37",
          number: 37,
          type: "sentence_completion",
          question: "37. fun activities improved their _______",
          correctAnswer: "performance",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q38",
          number: 38,
          type: "sentence_completion",
          question: "38. management involvement led to lower staff _______",
          correctAnswer: "turnover",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q39",
          number: 39,
          type: "sentence_completion",
          question: "39. the activities needed to fit with both the company's _______",
          correctAnswer: "goals",
          points: 1,
        },
        {
          id: "cam14-ra-t1-s3-q40",
          number: 40,
          type: "sentence_completion",
          question: "40. and the _______ of the staff",
          correctAnswer: "characteristics",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge14Tests: IELTSTest[] = [cambridge14_reading_t1];
