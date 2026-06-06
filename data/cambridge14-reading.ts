import type { IELTSTest } from "./ielts-tests";

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

export const cambridge14_reading_t2: IELTSTest = {
  id: "cam14-reading-academic-t2",
  title: "Cambridge IELTS 14 – Test 2",
  bookNumber: 14,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam14-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Alexander Henderson (1831–1913)",
      passageText: `Born in Scotland, Henderson emigrated to Canada in 1855 and became a well-known landscape photographer.

Alexander Henderson was born in Scotland in 1831 and was the son of a successful merchant. His grandfather, also called Alexander, had founded the family business, and later became the first chairman of the National Bank of Scotland. The family had extensive landholding in Scotland. Besides its residence in Edinburgh, it owned Press Estate, 650 acres of farmland about 35 miles southeast of the city. The family often stayed at Press Castle, the large mansion on the northern edge of the property, and Alexander spent much of his childhood in the area, playing on the beach near Eyemouth or fishing in the streams nearby.

Even after he went to school at Murcheston Academy on the outskirts of Edinburgh, Henderson returned to Press at weekends. In 1849 he began a three-year apprenticeship to become an accountant. Although he never liked the prospect of a business career, he stayed with it to please his family. In October 1855, however, he emigrated to Canada with his wife Agnes Elder Robertson and they settled in Montreal.

Henderson learned photography in Montreal around the year 1857 and quickly took it up as a serious amateur. He became a personal friend and colleague of the Scottish–Canadian photographer William Notman. The two men made a photographic excursion to Niagara Falls in 1860 and they cooperated on experiments with magnesium flares as a source of artificial light in 1865. They belonged to the same societies and were among the founding members of the Art Association of Montreal. Henderson acted as chairman of the association's first meeting, which was held in Notman's studio on 11 January 1860.

In spite of their friendship, their styles of photography were quite different. While Notman's landscapes were noted for their bold realism, Henderson for the first 20 years of his career produced romantic images, showing the strong influence of the British landscape tradition. His artistic and technical progress was rapid and in 1865 he published his first major collection of landscape photographs. The publication had limited circulation (only seven copies have ever been found), and was called Canadian Views and Studies. The contents of each copy vary significantly and have proved a useful source for evaluating Henderson's early work.

In 1866, he gave up his business to open a photographic studio, advertising himself as a portrait and landscape photographer. From about 1870 he dropped portraiture to specialise in landscape photography and other views. His numerous photographs of city life revealed in street scenes, houses, and markets are alive with human activity, and although his favourite subject was landscape he usually composed his scenes around such human pursuits as farming the land, cutting ice on a river, or sailing down a woodland stream. There was sufficient demand for these types of scenes and others he took depicting the lumber trade, steamboats and waterfalls to enable him to make a living. There was little competing hobby or amateur photography before the late 1880s because of the time-consuming techniques involved and the weight of equipment. People wanted to buy photographs as souvenirs of a trip or as gifts, and catering to this market, Henderson had stock photographs on display at his studio for mounting, framing, or inclusion in albums.

Henderson frequently exhibited his photographs in Montreal and abroad, in London, Edinburgh, Dublin, Paris, New York, and Philadelphia. He met with greater success in 1877 and 1878 in New York when he won first prizes in the exhibition held by E and H T Anthony and Company for landscapes using the Lambertype process. In 1878 his work won second prize at the world exhibition in Paris.

In the 1870s and 1880s Henderson travelled widely throughout Quebec and Ontario, in Canada, documenting the major cities of the two provinces and many of the villages in Quebec. He was especially fond of the wilderness and often travelled by canoe on the Blanche, du Lièvre, and other noted eastern rivers. He went on several occasions to the Maritimes and in 1872 he sailed by yacht along the lower north shore of the St Lawrence River. That same year, while in the lower St Lawrence River region, he took some photographs of the construction of the Intercolonial Railway. This undertaking led in 1875 to a commission from the railway to record the principal structures along the almost-completed line connecting Montreal to Halifax. Commissions from other railways followed. In 1876 he photographed bridges on the Quebec, Montreal, Ottawa and Occidental Railway between Montreal and Ottawa. In 1885 he went west along the Canadian Pacific Railway (CPR) as far as Rogers Pass in British Columbia, where he took photographs of the mountains and the progress of construction.

In 1892 Henderson accepted a full-time position with the CPR as manager of a photographic department which he was to set up and administer. His duties included spending four months in the field each year. That summer he made his second trip west, photographing extensively along the railway line as far as Victoria. He continued in this post until 1897, when he retired completely from photography.

When Henderson died in 1913, his huge collection of glass negatives was stored in the basement of his house. Today collections of his work are held at the National Archives of Canada, Ottawa, and the McCord Museum of Canadian History, Montreal.`,
      instructions: `Questions 1–8: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 9–13: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        {
          id: "cam14-ra-t2-s1-q1",
          number: 1,
          groupLabel: "Questions 1–8: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "1. Henderson rarely visited the area around Press Estate when he was younger.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. Henderson pursued a business career because it was what his family wanted.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Henderson and Notman were surprised by the results of their 1865 experiment.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. There were many similarities between Henderson's early landscapes and those of Notman.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. The studio that Henderson opened in 1866 was close to his home.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. Henderson gave up portraiture so that he could focus on taking photographs of scenery.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. When Henderson began work for the Intercolonial Railway, the Montreal to Halifax line had been finished.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "8. Henderson's last work as a photographer was with the Canadian Pacific Railway.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nAlexander Henderson\nEarly life\n• was born in Scotland in 1831 – father was a 9…………………………\n• trained as an accountant, emigrated to Canada in 1855\nStart of a photographic career\n• opened up a photographic studio in 1866\n• took photos of city life, but preferred landscape photography\n• people bought Henderson's photos because photography took up considerable time and the 10……………………… was heavy\n• the photographs Henderson sold were 11…………………………… or souvenirs\nTravelling as a professional photographer\n• travelled widely in Quebec and Ontario in 1870s and 1880s\n• took many trips along eastern rivers in a 12…………………………..\n• worked for Canadian railways between 1875 and 1897\n• worked for CPR in 1885 and photographed the 13……………………………… and the railway at Rogers Pass",
          type: "sentence_completion",
          question: "9. father was a _______",
          correctAnswer: "merchant",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q10",
          number: 10,
          type: "sentence_completion",
          question: "10. photography took up considerable time and the _______ was heavy",
          correctAnswer: "equipment",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q11",
          number: 11,
          type: "sentence_completion",
          question: "11. the photographs Henderson sold were _______ or souvenirs",
          correctAnswer: "gifts",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q12",
          number: 12,
          type: "sentence_completion",
          question: "12. took many trips along eastern rivers in a _______",
          correctAnswer: "canoe",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s1-q13",
          number: 13,
          type: "sentence_completion",
          question: "13. photographed the _______ and the railway at Rogers Pass",
          correctAnswer: "mountains",
          points: 1,
        },
      ],
    },

    {
      id: "cam14-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Back to the future of skyscraper design",
      passageText: `Answers to the problem of excessive electricity use by skyscrapers and large public buildings can be found in ingenious but forgotten architectural designs of the 19th and early-20th centuries.

A
The Recovery of Natural Environments in Architecture by Professor Alan Short is the culmination of 30 years of research and award-winning green building design by Short and colleagues in Architecture, Engineering, Applied Maths and Earth Sciences at the University of Cambridge.

'The crisis in building design is already here,' said Short. 'Policy makers think you can solve energy and building problems with gadgets. You can't. As global temperatures continue to rise, we are going to continue to squander more and more energy on keeping our buildings mechanically cool until we have run out of capacity.'

B
Short is calling for a sweeping reinvention of how skyscrapers and major public buildings are designed – to end the reliance on sealed buildings which exist solely via the 'life support' system of vast air conditioning units.

Instead, he shows it is entirely possible to accommodate natural ventilation and cooling in large buildings by looking into the past, before the widespread introduction of air conditioning systems, which were 'relentlessly and aggressively marketed' by their inventors.

C
Short points out that to make most contemporary buildings habitable, they have to be sealed and air conditioned. The energy use and carbon emissions this generates is spectacular and largely unnecessary. Buildings in the West account for 40–50% of electricity usage, generating substantial carbon emissions, and the rest of the world is catching up at a frightening rate. Short regards glass, steel and air-conditioned skyscrapers as symbols of status, rather than practical ways of meeting our requirements.

D
Short's book highlights a developing and sophisticated art and science of ventilating buildings through the 19th and earlier-20th centuries, including the design of ingeniously ventilated hospitals. Of particular interest were those built to the designs of John Shaw Billings, including the first Johns Hopkins Hospital in the US city of Baltimore (1873–1889).

'We spent three years digitally modelling Billings' final designs,' says Short. 'We put pathogens in the airstreams, modelled for someone with tuberculosis (TB) coughing in the wards and we found the ventilation systems in the room would have kept other patients safe from harm.

E
'We discovered that 19th-century hospital wards could generate up to 24 air changes an hour – that's similar to the performance of a modern-day, computer-controlled operating theatre. We believe you could build wards based on these principles now.

Single rooms are not appropriate for all patients. Communal wards appropriate for certain patients – older people with dementia, for example – would work just as well in today's hospitals, at a fraction of the energy cost.'

Professor Short contends the mindset and skill-sets behind these designs have been completely lost, lamenting the disappearance of expertly designed theatres, opera houses, and other buildings where up to half the volume of the building was given over to ensuring everyone got fresh air.

F
Much of the ingenuity present in 19th-century hospital and building design was driven by a panicked public clamouring for buildings that could protect against what was thought to be the lethal threat of miasmas – toxic air that spread disease. Miasmas were feared as the principal agents of disease and epidemics for centuries, and were used to explain the spread of infection from the Middle Ages right through to the cholera outbreaks in London and Paris during the 1850s. Foul air, rather than germs, was believed to be the main driver of 'hospital fever', leading to disease and frequent death. The prosperous steered clear of hospitals.

While miasma theory has been long since disproved, Short has for the last 30 years advocated a return to some of the building design principles produced in its wake.

G
Today, huge amounts of a building's space and construction cost are given over to air conditioning. 'But I have designed and built a series of buildings over the past three decades which have tried to reinvent some of these ideas and then measure what happens.

'To go forward into our new low-energy, low-carbon future, we would be well advised to look back at design before our high-energy, high-carbon present appeared. What is surprising is what a rich legacy we have abandoned.'

H
Successful examples of Short's approach include the Queen's Building at De Montfort University in Leicester. Containing as many as 2,000 staff and students, the entire building is naturally ventilated, passively cooled and naturally lit, including the two largest auditoria, each seating more than 150 people. The award-winning building uses a fraction of the electricity of comparable buildings in the UK.

Short contends that glass skyscrapers in London and around the world will become a liability over the next 20 or 30 years if climate modelling predictions and energy price rises come to pass as expected.

I
He is convinced that sufficiently cooled skyscrapers using the natural environment can be produced in almost any climate. He and his team have worked on hybrid buildings in the harsh climates of Beijing and Chicago – built with natural ventilation assisted by back-up air conditioning – which, surprisingly perhaps, can be switched off more than half the time on milder days and during the spring and autumn.

Short looks at how we might reimagine the cities, offices and homes of the future. Maybe it's time we changed our outlook.`,
      instructions: `Questions 14–18: Reading Passage 2 has nine sections, A–I.
Which section contains the following information?
Write the correct letter, A–I, in boxes 14–18 on your answer sheet.

Questions 19–26: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        {
          id: "cam14-ra-t2-s2-q14",
          number: 14,
          groupLabel: "Questions 14–18: Reading Passage 2 has nine sections, A–I.\nWhich section contains the following information?\nWrite the correct letter, A–I, in boxes 14–18 on your answer sheet.",
          type: "matching",
          question: "14. why some people avoided hospitals in the 19th century",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. a suggestion that the popularity of tall buildings is linked to prestige",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. a comparison between the circulation of air in a 19th-century building and modern standards",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "17. how Short tested the circulation of air in a 19th-century building",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "18. an implication that advertising led to the large increase in the use of air conditioning",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q19",
          number: 19,
          groupLabel: "Questions 19–26: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nVentilation in 19th-century hospital wards\nProfessor Alan Short examined the work of John Shaw Billings, who influenced the architectural 19……………………… of hospitals to ensure they had good ventilation. He calculated that 20……………………………… in the air coming from patients suffering from 21……………………………… would not have harmed other patients. He also found that the air in 22…………………………… in hospitals could change as often as in a modern operating theatre. He suggests that energy use could be reduced by locating more patients in 23……………………………… areas.\nA major reason for improving ventilation in 19th-century hospitals was the demand from the 24……………………………… for protection against bad air, known as 25…………………………………… These were blamed for the spread of disease for hundreds of years, including epidemics of 26……………………………… in London and Paris in the middle of the 19th century.",
          type: "summary_completion",
          question: "19. who influenced the architectural _______ of hospitals",
          correctAnswer: "designs",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q20",
          number: 20,
          type: "summary_completion",
          question: "20. _______ in the air coming from patients would not have harmed other patients",
          correctAnswer: "pathogens",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. patients suffering from _______",
          correctAnswer: "tuberculosis",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. the air in _______ in hospitals could change as often as in a modern operating theatre",
          correctAnswer: "wards",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q23",
          number: 23,
          type: "summary_completion",
          question: "23. energy use could be reduced by locating more patients in _______ areas",
          correctAnswer: "communal",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q24",
          number: 24,
          type: "summary_completion",
          question: "24. demand from the _______ for protection against bad air",
          correctAnswer: "public",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. bad air known as _______",
          correctAnswer: "miasmas",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. including epidemics of _______ in London and Paris",
          correctAnswer: "cholera",
          points: 1,
        },
      ],
    },

    {
      id: "cam14-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Why companies should welcome disorder",
      passageText: `A
Organisation is big business. Whether it is of our lives – all those inboxes and calendars – or how companies are structured, a multi-billion dollar industry helps to meet this need.

We have more strategies for time management, project management and self-organisation than at any other time in human history. We are told that we ought to organise our company, our home life, our week, our day and even our sleep, all as a means to becoming more productive. Every week, countless seminars and workshops take place around the world to tell a paying public that they ought to structure their lives in order to achieve this.

This rhetoric has also crept into the thinking of business leaders and entrepreneurs, much to the delight of self-proclaimed perfectionists with the need to get everything right. The number of business schools and graduates has massively increased over the past 50 years, essentially teaching people how to organise well.

B
Ironically, however, the number of businesses that fail has also steadily increased. Work-related stress has increased. A large proportion of workers from all demographics claim to be dissatisfied with the way their work is structured and the way they are managed.

This begs the question: what has gone wrong? Why is it that on paper the drive for organisation seems a sure shot for increasing productivity, but in reality falls well short of what is expected?

C
This has been a problem for a while now. Frederick Taylor was one of the forefathers of scientific management. Writing in the first half of the 20th century, he designed a number of principles to improve the efficiency of the work process, which have since become widespread in modern companies. So the approach has been around for a while.

D
New research suggests that this obsession with efficiency is misguided. The problem is not necessarily the management theories or strategies we use to organise our work; it's the basic assumptions we hold in approaching how we work. Here it's the assumption that order is a necessary condition for productivity. This assumption has also fostered the idea that disorder must be detrimental to organizational productivity. The result is that businesses and people spend time and money organising themselves for the sake of organising, rather than actually looking at the end goal and usefulness of such an effort.

E
What's more, recent studies show that order actually has diminishing returns. Order does increase productivity to a certain extent, but eventually the usefulness of the process of organisation, and the benefit it yields, reduce until the point where any further increase in order reduces productivity. Some argue that in a business, if the cost of formally structuring something outweighs the benefit of doing it, then that thing ought not to be formally structured. Instead, the resources involved can be better used elsewhere.

F
In fact, research shows that, when innovating, the best approach is to create an environment devoid of structure and hierarchy and enable everyone involved to engage as one organic group. These environments can lead to new solutions that, under conventionally structured environments (filled with bottlenecks in terms of information flow, power structures, rules, and routines) would never be reached.

G
In recent times companies have slowly started to embrace this disorganisation. Many of them embrace it in terms of perception (embracing the idea of disorder, as opposed to fearing it) and in terms of process (putting mechanisms in place to reduce structure).

For example, Oticon, a large Danish manufacturer of hearing aids, used what it called a 'spaghetti' structure in order to reduce the organisation's rigid hierarchies. This involved scrapping formal job titles and giving staff huge amounts of ownership over their own time and projects. This approach proved to be highly successful initially, with clear improvements in worker productivity in all facets of the business.

In similar fashion, the former chairman of General Electric embraced disorganisation, putting forward the idea of the 'boundaryless' organisation. Again, it involves breaking down the barriers between different parts of a company and encouraging virtual collaboration and flexible working. Google and a number of other tech companies have embraced (at least in part) these kinds of flexible structures, facilitated by technology and strong company values which glue people together.

H
A word of warning to others thinking of jumping on this bandwagon: the evidence so far suggests disorder, much like order, also seems to have diminishing utility, and can also have detrimental effects on performance if overused. Like order, disorder should be embraced only so far as it is useful. But we should not fear it – nor venerate one over the other. This research also shows that we should continually question whether or not our existing assumptions work.`,
      instructions: `Questions 27–34: Choose the correct heading for each section from the list of headings below.
Write the correct number, i–ix.

List of Headings:
i    Complaints about the impact of a certain approach
ii   Fundamental beliefs that are in fact incorrect
iii  Early recommendations concerning business activities
iv  Organisations that put a new approach into practice
v   Companies that have suffered from changing their approach
vi  What people are increasingly expected to do
vii How to achieve outcomes that are currently impossible
viii Neither approach guarantees continuous improvement
ix  Evidence that a certain approach can have more disadvantages than advantages

Questions 35–37: Complete the sentences below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 38–40: Do the following statements agree with the information given in Reading Passage 3?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        {
          id: "cam14-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–34: Reading Passage 3 has eight sections, A–H.\nChoose the correct heading for each section from the list of headings below.\nWrite the correct number, i–ix, in boxes 27–34 on your answer sheet.\n\ni    Complaints about the impact of a certain approach\nii   Fundamental beliefs that are in fact incorrect\niii  Early recommendations concerning business activities\niv  Organisations that put a new approach into practice\nv   Companies that have suffered from changing their approach\nvi  What people are increasingly expected to do\nvii How to achieve outcomes that are currently impossible\nviii Neither approach guarantees continuous improvement\nix  Evidence that a certain approach can have more disadvantages than advantages",
          type: "matching",
          question: "27. Section A",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q28",
          number: 28,
          type: "matching",
          question: "28. Section B",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q29",
          number: 29,
          type: "matching",
          question: "29. Section C",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "iii",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q30",
          number: 30,
          type: "matching",
          question: "30. Section D",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q31",
          number: 31,
          type: "matching",
          question: "31. Section E",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "ix",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q32",
          number: 32,
          type: "matching",
          question: "32. Section F",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q33",
          number: 33,
          type: "matching",
          question: "33. Section G",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q34",
          number: 34,
          type: "matching",
          question: "34. Section H",
          options: [
            { label: "i – Complaints about the impact of a certain approach", value: "i" },
            { label: "ii – Fundamental beliefs that are in fact incorrect", value: "ii" },
            { label: "iii – Early recommendations concerning business activities", value: "iii" },
            { label: "iv – Organisations that put a new approach into practice", value: "iv" },
            { label: "v – Companies that have suffered from changing their approach", value: "v" },
            { label: "vi – What people are increasingly expected to do", value: "vi" },
            { label: "vii – How to achieve outcomes that are currently impossible", value: "vii" },
            { label: "viii – Neither approach guarantees continuous improvement", value: "viii" },
            { label: "ix – Evidence that a certain approach can have more disadvantages than advantages", value: "ix" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q35",
          number: 35,
          groupLabel: "Questions 35–37: Complete the sentences below.\nChoose ONE WORD ONLY from the passage for each answer.",
          type: "sentence_completion",
          question: "35. Numerous training sessions are aimed at people who feel they are not _______ enough.",
          correctAnswer: "productive",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q36",
          number: 36,
          type: "sentence_completion",
          question: "36. Being organised appeals to people who regard themselves as _______.",
          correctAnswer: "perfectionists",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q37",
          number: 37,
          type: "sentence_completion",
          question: "37. Many people feel _______ with aspects of their work.",
          correctAnswer: "dissatisfied",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q38",
          number: 38,
          groupLabel: "Questions 38–40: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "38. Both businesses and people aim at order without really considering its value.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. Innovation is most successful if the people involved have distinct roles.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t2-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Google was inspired to adopt flexibility by the success of General Electric.",
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
  ],
};

export const cambridge14_reading_t3: IELTSTest = {
  id: "cam14-reading-academic-t3",
  title: "Cambridge IELTS 14 – Test 3",
  bookNumber: 14,
  testNumber: 3,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam14-ra-t3-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The concept of intelligence",
      passageText: `A
Looked at in one way, everyone knows what intelligence is; looked at in another way, no one does. In other words, people all have unconscious notions – known as 'implicit theories' – of intelligence, but no one knows for certain what it actually is. This chapter addresses how people conceptualize intelligence, whatever it may actually be.
But why should we even care what people think intelligence is, as opposed only to valuing whatever it actually is? There are at least four reasons people's conceptions of intelligence matter.

B
First, implicit theories of intelligence drive the way in which people perceive and evaluate their own intelligence and that of others. To better understand the judgments people make about their own and others' abilities, it is useful to learn about people's implicit theories. For example, parents' implicit theories of their children's language development will determine at what ages they will be willing to make various corrections in their children's speech. More generally, parents' implicit theories of intelligence will determine at what ages they believe their children are ready to perform various cognitive tasks. Job interviewers will make hiring decisions on the basis of their implicit theories of intelligence. People will decide who to be friends with on the basis of such theories. In sum, knowledge about implicit theories of intelligence is important because this knowledge is so often used by people to make judgments in the course of their everyday lives.

C
Second, the implicit theories of scientific investigators ultimately give rise to their explicit theories. Thus it is useful to find out what these implicit theories are. Implicit theories provide a framework that is useful in defining the general scope of a phenomenon – especially a not-well-understood phenomenon. These implicit theories can suggest what aspects of the phenomenon have been more or less attended to in previous investigations.

D
Third, implicit theories can be useful when an investigator suspects that existing explicit theories are wrong or misleading. If an investigation of implicit theories reveals little correspondence between the extant implicit and explicit theories, the implicit theories may be wrong. But the possibility also needs to be taken into account that the explicit theories are wrong and in need of correction or supplementation. For example, some implicit theories of intelligence suggest the need for expansion of some of our explicit theories of the construct.

E
Finally, understanding implicit theories of intelligence can help elucidate developmental and cross-cultural differences. As mentioned earlier, people have expectations for intellectual performances that differ for children of different ages. How these expectations differ is in part a function of culture. For example, expectations for children who participate in Western-style schooling are almost certain to be different from those for children who do not participate in such schooling.

F
I have suggested that there are three major implicit theories of how intelligence relates to society as a whole (Sternberg, 1997). These might be called Hamiltonian, Jeffersonian, and Jacksonian. These views are not based strictly, but rather, loosely, on the philosophies of Alexander Hamilton, Thomas Jefferson, and Andrew Jackson, three great statesmen in the history of the United States.

G
The Hamiltonian view, which is similar to the Platonic view, is that people are born with different levels of intelligence and that those who are less intelligent need the good offices of the more intelligent to keep them in line, whether they are called government officials or, in Plato's term, philosopher-kings. Herrnstein and Murray (1994) seem to have shared this belief when they wrote about the emergence of a cognitive (high-IQ) elite, which eventually would have to take responsibility for the largely irresponsible masses of non-elite (low-IQ) people who cannot take care of themselves. Left to themselves, the unintelligent would create, as they always have created, a kind of chaos.

H
The Jeffersonian view is that people should have equal opportunities, but they do not necessarily avail themselves equally of these opportunities and are not necessarily equally rewarded for their accomplishments. People are rewarded for what they accomplish, if given equal opportunity. Low achievers are not rewarded to the same extent as high achievers. In the Jeffersonian view, the goal of education is not to favor or foster an elite, as in the Hamiltonian tradition, but rather to allow children the opportunities to make full use of the skills they have. My own views are similar to these (Sternberg, 1997).

I
The Jacksonian view is that all people are equal, not only as human beings but in terms of their competencies – that one person would serve as well as another in government or on a jury or in almost any position of responsibility. In this view of democracy, people are essentially intersubstitutable except for specialized skills, all of which can be learned. In this view, we do not need or want any institutions that might lead to favoring one group over another.

J
Implicit theories of intelligence and of the relationship of intelligence to society perhaps need to be considered more carefully than they have been because they often serve as underlying presuppositions for explicit theories and even experimental designs that are then taken as scientific contributions. Until scholars are able to discuss their implicit theories and thus their assumptions, they are likely to miss the point of what others are saying when discussing their explicit theories and their data.`,
      instructions: `Questions 1–3: Reading Passage 1 has ten sections, A–J. Which section contains the following information? Write the correct letter, A–J, in boxes 1–3 on your answer sheet.

Questions 4–6: Do the following statements agree with the claims of the writer in Reading Passage 1? Write YES, NO, or NOT GIVEN.

Questions 7–13: Look at the following statements and the list of theories below. Match each statement with the correct theory, A, B or C. NB You may use any letter more than once.`,
      questions: [
        {
          id: "cam14-ra-t3-s1-q1",
          number: 1,
          groupLabel: "Questions 1–3: Reading Passage 1 has ten sections, A–J.\nWhich section contains the following information?\nWrite the correct letter, A–J, in boxes 1–3 on your answer sheet.",
          type: "matching",
          question: "1. information about how non-scientists' assumptions about intelligence influence their behaviour towards others",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q2",
          number: 2,
          type: "matching",
          question: "2. a reference to lack of clarity over the definition of intelligence",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q3",
          number: 3,
          type: "matching",
          question: "3. the point that a researcher's implicit and explicit theories may be very different",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q4",
          number: 4,
          groupLabel: "Questions 4–6: Do the following statements agree with the claims of the writer in Reading Passage 1?\nWrite YES, NO, or NOT GIVEN.",
          type: "true_false_ng",
          question: "4. Slow language development in children is likely to prove disappointing to their parents.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. People's expectations of what children should gain from education are universal.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. Scholars may discuss theories without fully understanding each other.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q7",
          number: 7,
          groupLabel: "Questions 7–13: Look at the following statements and the list of theories below.\nMatch each statement with the correct theory, A, B or C.\nWrite the correct letter, A, B or C, in boxes 7–13 on your answer sheet.\nNB You may use any letter more than once.\n\nList of Theories\nA  Hamiltonian\nB  Jeffersonian\nC  Jacksonian",
          type: "matching",
          question: "7. It is desirable for the same possibilities to be open to everyone.",
          options: [
            { label: "A  Hamiltonian", value: "A" },
            { label: "B  Jeffersonian", value: "B" },
            { label: "C  Jacksonian", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q8",
          number: 8,
          type: "matching",
          question: "8. No section of society should have preferential treatment at the expense of another.",
          options: [
            { label: "A  Hamiltonian", value: "A" },
            { label: "B  Jeffersonian", value: "B" },
            { label: "C  Jacksonian", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q9",
          number: 9,
          type: "matching",
          question: "9. People should only gain benefits on the basis of what they actually achieve.",
          options: [
            { label: "A  Hamiltonian", value: "A" },
            { label: "B  Jeffersonian", value: "B" },
            { label: "C  Jacksonian", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q10",
          number: 10,
          type: "matching",
          question: "10. Variation in intelligence begins at birth.",
          options: [
            { label: "A  Hamiltonian", value: "A" },
            { label: "B  Jeffersonian", value: "B" },
            { label: "C  Jacksonian", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q11",
          number: 11,
          type: "matching",
          question: "11. The more intelligent people should be in positions of power.",
          options: [
            { label: "A  Hamiltonian", value: "A" },
            { label: "B  Jeffersonian", value: "B" },
            { label: "C  Jacksonian", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q12",
          number: 12,
          type: "matching",
          question: "12. Everyone can develop the same abilities.",
          options: [
            { label: "A  Hamiltonian", value: "A" },
            { label: "B  Jeffersonian", value: "B" },
            { label: "C  Jacksonian", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s1-q13",
          number: 13,
          type: "matching",
          question: "13. People of low intelligence are likely to lead uncontrolled lives.",
          options: [
            { label: "A  Hamiltonian", value: "A" },
            { label: "B  Jeffersonian", value: "B" },
            { label: "C  Jacksonian", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
    {
      id: "cam14-ra-t3-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Saving bugs to find new drugs",
      passageText: `A
More drugs than you might think are derived from, or inspired by, compounds found in living things. Looking to nature for the soothing and curing of our ailments is nothing new – we have been doing it for tens of thousands of years. You only have to look at other primates – such as the capuchin monkeys who rub themselves with toxin-oozing millipedes to deter mosquitoes, or the chimpanzees who use noxious forest plants to rid themselves of intestinal parasites – to realise that our ancient ancestors too probably had a basic grasp of medicine.

B
Pharmaceutical science and chemistry built on these ancient foundations and perfected the extraction, characterization, modification and testing of these natural products. Then, for a while, modern pharmaceutical science moved its focus away from nature and into the laboratory, designing chemical compounds from scratch. The main cause of this shift is that although there are plenty of promising chemical compounds in nature, finding them is far from easy. Securing sufficient numbers of the organism in question, isolating and characterizing the compounds of interest, and producing large quantities of these compounds are all significant hurdles.

C
Laboratory-based drug discovery has achieved varying levels of success, something which has now prompted the development of new approaches focusing once again on natural products. With the ability to mine genomes for useful compounds, it is now evident that we have barely scratched the surface of nature's molecular diversity. This realization, together with several looming health crises, such as antibiotic resistance, has put bioprospecting – the search for useful compounds in nature – firmly back on the map.

D
Insects are the undisputed masters of the terrestrial domain, where they occupy every possible niche. Consequently, they have a bewildering array of interactions with other organisms, something which has driven the evolution of an enormous range of very interesting compounds for defensive and offensive purposes. Their remarkable diversity exceeds that of every other group of animals on the planet combined. Yet even though insects are far and away the most diverse animals in existence, their potential as sources of therapeutic compounds is yet to be realised.

E
From the tiny proportion of insects that have been investigated, several promising compounds have been identified. For example, alloferon, an antimicrobial compound produced by blow fly larvae, is used as an antiviral and antitumor agent in South Korea and Russia. The larvae of a few other insect species are being investigated for the potent antimicrobial compounds they produce. Meanwhile, a compound from the venom of the wasp Polybia paulista has potential in cancer treatment.

F
Why is it that insects have received relatively little attention in bioprospecting? Firstly, there are so many insects that, without some manner of targeted approach, investigating this huge variety of species is a daunting task. Secondly, insects are generally very small, and the glands inside them that secrete potentially useful compounds are smaller still. This can make it difficult to obtain sufficient quantities of the compound for subsequent testing. Thirdly, although we consider insects to be everywhere, the reality of this ubiquity is vast numbers of a few extremely common species. Many insect species are infrequently encountered and very difficult to rear in captivity, which, again, can leave us with insufficient material to work with.

G
My colleagues and I at Aberystwyth University in the UK have developed an approach in which we use our knowledge of ecology as a guide to target our efforts. The creatures that particularly interest us are the many insects that secrete powerful poison for subduing prey and keeping it fresh for future consumption. There are even more insects that are masters of exploiting filthy habitats, such as faeces and carcasses, where they are regularly challenged by thousands of micro-organisms. These insects have many antimicrobial compounds for dealing with pathogenic bacteria and fungi, suggesting that there is certainly potential to find many compounds that can serve as or inspire new antibiotics.

H
Although natural history knowledge points us in the right direction, it doesn't solve the problems associated with obtaining useful compounds from insects. Fortunately, it is now possible to snip out the stretches of the insect's DNA that carry the codes for the interesting compounds and insert them into cell lines that allow larger quantities to be produced. And although the road from isolating and characterizing compounds with desirable qualities to developing a commercial product is very long and full of pitfalls, the variety of successful animal-derived pharmaceuticals on the market demonstrates there is a precedent here that is worth exploring.

I
With every bit of wilderness that disappears, we deprive ourselves of potential medicines. As much as I'd love to help develop a groundbreaking insect-derived medicine, my main motivation for looking at insects in this way is conservation. I sincerely believe that all species, however small and seemingly insignificant, have a right to exist for their own sake. If we can shine a light on the darker recesses of nature's medicine cabinet, exploring the useful chemistry of the most diverse animals on the planet, I believe we can make people think differently about the value of nature.`,
      instructions: `Questions 14–20: Reading Passage 2 has nine paragraphs, A–I. Which paragraph contains the following information? Write the correct letter, A–I, in boxes 14–20 on your answer sheet.

Questions 21–22: Choose TWO letters, A–E. Which TWO of the following make insects interesting for drug research?

Questions 23–26: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        {
          id: "cam14-ra-t3-s2-q14",
          number: 14,
          groupLabel: "Questions 14–20: Reading Passage 2 has nine paragraphs, A–I.\nWhich paragraph contains the following information?\nWrite the correct letter, A–I, in boxes 14–20 on your answer sheet.",
          type: "matching",
          question: "14. mention of factors driving a renewed interest in natural medicinal compounds",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q15",
          number: 15,
          type: "matching",
          question: "15. how recent technological advances have made insect research easier",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q16",
          number: 16,
          type: "matching",
          question: "16. examples of animals which use medicinal substances from nature",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q17",
          number: 17,
          type: "matching",
          question: "17. reasons why it is challenging to use insects in drug research",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q18",
          number: 18,
          type: "matching",
          question: "18. reference to how interest in drug research may benefit wildlife",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "I",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q19",
          number: 19,
          type: "matching",
          question: "19. a reason why nature-based medicines fell out of favour for a period",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q20",
          number: 20,
          type: "matching",
          question: "20. an example of an insect-derived medicine in use at the moment",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q21",
          number: 21,
          groupLabel: "Questions 21–22: Choose TWO letters, A–E.\nWhich TWO of the following make insects interesting for drug research?\n\nA  the huge number of individual insects in the world\nB  the variety of substances insects have developed to protect themselves\nC  the potential to extract and make use of insects' genetic codes\nD  the similarities between different species of insect\nE  the manageable size of most insects",
          type: "multiple_choice",
          question: "21. Which TWO of the following make insects interesting for drug research? (Choose TWO — this is the first answer)",
          options: [
            { label: "A  the huge number of individual insects in the world", value: "A" },
            { label: "B  the variety of substances insects have developed to protect themselves", value: "B" },
            { label: "C  the potential to extract and make use of insects' genetic codes", value: "C" },
            { label: "D  the similarities between different species of insect", value: "D" },
            { label: "E  the manageable size of most insects", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q22",
          number: 22,
          type: "multiple_choice",
          question: "22. Which TWO of the following make insects interesting for drug research? (Choose TWO — this is the second answer)",
          options: [
            { label: "A  the huge number of individual insects in the world", value: "A" },
            { label: "B  the variety of substances insects have developed to protect themselves", value: "B" },
            { label: "C  the potential to extract and make use of insects' genetic codes", value: "C" },
            { label: "D  the similarities between different species of insect", value: "D" },
            { label: "E  the manageable size of most insects", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q23",
          number: 23,
          groupLabel: "Questions 23–26: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nResearch at Aberystwyth University\nRoss Piper and fellow zoologists at Aberystwyth University are using their expertise in 23………………………… when undertaking bioprospecting with insects. They are especially interested in the compounds that insects produce to overpower and preserve their 24…………………………. They are also interested in compounds which insects use to protect themselves from pathogenic bacteria and fungi found in their 25………………………… Piper hopes that these substances will be useful in the development of drugs such as 26……………………………",
          type: "fill_blank",
          question: "23. Ross Piper and fellow zoologists at Aberystwyth University are using their expertise in _______ when undertaking bioprospecting with insects.",
          correctAnswer: "ecology",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q24",
          number: 24,
          type: "fill_blank",
          question: "24. They are especially interested in the compounds that insects produce to overpower and preserve their _______.",
          correctAnswer: "prey",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q25",
          number: 25,
          type: "fill_blank",
          question: "25. They are also interested in compounds which insects use to protect themselves from pathogenic bacteria and fungi found in their _______.",
          correctAnswer: "habitats",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s2-q26",
          number: 26,
          type: "fill_blank",
          question: "26. Piper hopes that these substances will be useful in the development of drugs such as _______.",
          correctAnswer: "antibiotics",
          points: 1,
        },
      ],
    },
    {
      id: "cam14-ra-t3-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The power of play",
      passageText: `Virtually every child, the world over, plays. The drive to play is so intense that children will do so in any circumstances, for instance when they have no real toys, or when parents do not actively encourage the behavior. In the eyes of a young child, running, pretending, and building are fun. Researchers and educators know that these playful activities benefit the development of the whole child across social, cognitive, physical, and emotional domains. Indeed, play is such an instrumental component to healthy child development that the United Nation High Commission on Human Rights (1989) recognized play as a fundamental right of every child.

Yet, while experts continue to expound a powerful argument for the importance of play in children's lives, the actual time children spend playing continues to decrease. Today, children play eight hours less each week than their counterparts did two decades ago (Elkind 2008). Under pressure of rising academic standards, play is being replaced by test preparation in kindergartens and grade schools, and parents who aim to give their preschoolers a leg up are led to believe that flashcards and educational 'toys' are the path to success. Our society has created a false dichotomy between play and learning.

Through play, children learn to regulate their behavior, lay the foundations for later learning in science and mathematics, figure out the complex negotiations of social relationships, build a repertoire of creative problem-solving skills, and so much more. There is also an important role for adults in guiding children through playful learning opportunities.

Full consensus on a formal definition of play continues to elude the researchers and theorists who study it. Definitions range from discrete descriptions of various types of play such as physical, construction, language, or symbolic play (Miller & Almon 2009), to lists of broad criteria, based on observations and attitudes, that are meant to capture the essence of all play behaviors (e.g. Rubin et al. 1983).

A majority of the contemporary definitions of play focus on several key criteria. The founder of the National Institute for Play, Stuart Brown, has described play as 'anything that spontaneously is done for its own sake'. More specifically, he says it 'appears purposeless, produces pleasure and joy, [and] leads one to the next stage of mastery' (as quoted in Tippett 2008). Similarly, Miller and Almon (2009) say that play includes 'activities that are freely chosen and directed by children and arise from intrinsic motivation'. Often, play is defined along a continuum as more or less playful using the following set of behavioral and dispositional criteria (e.g. Rubin et al. 1983).

Play is pleasurable: Children must enjoy the activity or it is not play. It is intrinsically motivated: Children engage in play simply for the satisfaction the behavior itself brings. It has no extrinsically motivated function or goal. Play is process oriented: When children play, the means are more important than the ends. It is freely chosen, spontaneous and voluntary. If a child is pressured, they will likely not think of the activity as play. Play is actively engaged: Players must be physically and/or mentally involved in the activity. Play is non-literal. It involves make-believe.

According to this view, children's playful behaviors can range in degree from 0% to 100% playful. Rubin and colleagues did not assign greater weight to any one dimension in determining playfulness; however, other researchers have suggested that process orientation and a lack of obvious functional purpose may be the most important aspects of play (e.g. Pellegrini 2009).

From the perspective of a continuum, play can thus blend with other motives and attitudes that are less playful, such as work. Unlike play, work is typically not viewed as enjoyable and it is extrinsically motivated (i.e. it is goal oriented). Researcher Joan Goodman (1994) suggested that hybrid forms of work and play are not a detriment to learning; rather, they can provide optimal contexts for learning. For example, a child may be engaged in a difficult, goal-directed activity set up by their teacher, but they may still be actively engaged and intrinsically motivated. At this mid-point between play and work, the child's motivation, coupled with guidance from an adult, can create robust opportunities for playful learning.

Critically, recent research supports the idea that adults can facilitate children's learning while maintaining a playful approach in interactions known as 'guided play' (Fisher et al. 2011). The adult's role in play varies as a function of their educational goals and the child's developmental level (Hirsch-Pasek et al. 2009).

Guided play takes two forms. At a very basic level, adults can enrich the child's environment by providing objects or experiences that promote aspects of a curriculum. In the more direct form of guided play, parents or other adults can support children's play by joining in the fun as a co-player, raising thoughtful questions, commenting on children's discoveries, or encouraging further exploration or new facets to the child's activity. Although playful learning can be somewhat structured, it must also be child-centered (Nicolopolou et al. 2006). Play should stem from the child's own desire.

Both free and guided play are essential elements in a child-centered approach to playful learning. Intrinsically motivated free play provides the child with true autonomy, while guided play is an avenue through which parents and educators can provide more targeted learning experiences. In either case, play should be actively engaged, it should be predominantly child-directed, and it must be fun.`,
      instructions: `Questions 27–31: Look at the following statements and the list of researchers below. Match each statement with the correct researcher, A–G. NB You may use any letter more than once.

Questions 32–36: Do the following statements agree with the claims of the writer in Reading Passage 3? Write YES, NO, or NOT GIVEN.

Questions 37–40: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        {
          id: "cam14-ra-t3-s3-q27",
          number: 27,
          groupLabel: "Questions 27–31: Look at the following statements and the list of researchers below.\nMatch each statement with the correct researcher, A–G.\nWrite the correct letter, A–G, in boxes 27–31 on your answer sheet.\nNB You may use any letter more than once.\n\nList of Researchers\nA  Elkind\nB  Miller & Almon\nC  Rubin et al.\nD  Stuart Brown\nE  Pellegrini\nF  Joan Goodman\nG  Hirsch-Pasek et al.",
          type: "matching",
          question: "27. Play can be divided into a number of separate categories.",
          options: [
            { label: "A  Elkind", value: "A" },
            { label: "B  Miller & Almon", value: "B" },
            { label: "C  Rubin et al.", value: "C" },
            { label: "D  Stuart Brown", value: "D" },
            { label: "E  Pellegrini", value: "E" },
            { label: "F  Joan Goodman", value: "F" },
            { label: "G  Hirsch-Pasek et al.", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q28",
          number: 28,
          type: "matching",
          question: "28. Adults' intended goals affect how they play with children.",
          options: [
            { label: "A  Elkind", value: "A" },
            { label: "B  Miller & Almon", value: "B" },
            { label: "C  Rubin et al.", value: "C" },
            { label: "D  Stuart Brown", value: "D" },
            { label: "E  Pellegrini", value: "E" },
            { label: "F  Joan Goodman", value: "F" },
            { label: "G  Hirsch-Pasek et al.", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q29",
          number: 29,
          type: "matching",
          question: "29. Combining work with play may be the best way for children to learn.",
          options: [
            { label: "A  Elkind", value: "A" },
            { label: "B  Miller & Almon", value: "B" },
            { label: "C  Rubin et al.", value: "C" },
            { label: "D  Stuart Brown", value: "D" },
            { label: "E  Pellegrini", value: "E" },
            { label: "F  Joan Goodman", value: "F" },
            { label: "G  Hirsch-Pasek et al.", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q30",
          number: 30,
          type: "matching",
          question: "30. Certain elements of play are more significant than others.",
          options: [
            { label: "A  Elkind", value: "A" },
            { label: "B  Miller & Almon", value: "B" },
            { label: "C  Rubin et al.", value: "C" },
            { label: "D  Stuart Brown", value: "D" },
            { label: "E  Pellegrini", value: "E" },
            { label: "F  Joan Goodman", value: "F" },
            { label: "G  Hirsch-Pasek et al.", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q31",
          number: 31,
          type: "matching",
          question: "31. Activities can be classified on a scale of playfulness.",
          options: [
            { label: "A  Elkind", value: "A" },
            { label: "B  Miller & Almon", value: "B" },
            { label: "C  Rubin et al.", value: "C" },
            { label: "D  Stuart Brown", value: "D" },
            { label: "E  Pellegrini", value: "E" },
            { label: "F  Joan Goodman", value: "F" },
            { label: "G  Hirsch-Pasek et al.", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q32",
          number: 32,
          groupLabel: "Questions 32–36: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES, NO, or NOT GIVEN.",
          type: "true_false_ng",
          question: "32. Children need toys in order to play.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "33. It is a mistake to treat play and learning as separate types of activities.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q34",
          number: 34,
          type: "true_false_ng",
          question: "34. Play helps children to develop their artistic talents.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "35. Researchers have agreed on a definition of play.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "36. Work and play differ in terms of whether or not they have a target.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q37",
          number: 37,
          groupLabel: "Questions 37–40: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nGuided play\nIn the simplest form of guided play, an adult contributes to the environment in which the child is playing. Alternatively, an adult can play with a child and develop the play, for instance by 37…………………….. the child to investigate different aspects of their game. Adults can help children to learn through play, and may make the activity rather structured, but it should still be based on the child's 38…………………………. to play.\nPlay without the intervention of adults gives children real 39………………………….; with adults, play can be 40………………………… at particular goals. However, all forms of play should be an opportunity for children to have fun.",
          type: "fill_blank",
          question: "37. An adult can play with a child and develop the play, for instance by _______ the child to investigate different aspects of their game.",
          correctAnswer: "encouraging",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q38",
          number: 38,
          type: "fill_blank",
          question: "38. Adults can help children to learn through play, and may make the activity rather structured, but it should still be based on the child's _______ to play.",
          correctAnswer: "desire",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q39",
          number: 39,
          type: "fill_blank",
          question: "39. Play without the intervention of adults gives children real _______.",
          correctAnswer: "autonomy",
          points: 1,
        },
        {
          id: "cam14-ra-t3-s3-q40",
          number: 40,
          type: "fill_blank",
          question: "40. With adults, play can be _______ at particular goals.",
          correctAnswer: "targeted",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge14_reading_t4: IELTSTest = {
  id: "cam14-reading-academic-t4",
  title: "Cambridge IELTS 14 – Test 4",
  bookNumber: 14,
  testNumber: 4,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    {
      id: "cam14-ra-t4-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The secret of staying young",
      passageText: `Pheidole dentata, a native ant of the south-eastern U.S., isn't immortal. But scientists have found that it doesn't seem to show any signs of aging. Old workers ants can do everything just as well as the youngsters, and their brains appear just as sharp. 'We get a picture that these ants really don't decline,' says Ysabel Giraldo, who studies the ants for her doctoral thesis at Boston University.

Such age-defying feats are rare in the animal kingdom. Naked mole rats can live for almost 30 years and stay fit for nearly their entire lives. They can still reproduce even when old, and they never get cancer. But the vast majority of animals deteriorate with age just like people do. Like the naked mole rat, ants are social creatures that usually live in highly organised colonies. 'It's this social complexity that makes P. dentata useful for studying aging in people,' says Giraldo, now at the California Institute of Technology. Humans are also highly social, a trait that has been connected to healthier aging. By contrast, most animal studies of aging use mice, worms or fruit flies, which all lead much more isolated lives.

In the lab, P. dentata worker ants typically live for around 140 days. Giraldo focused on ants at four age ranges: 20 to 22 days, 45 to 47 days, 95 to 97 days and 120 to 122 days. Unlike all previous studies, which only estimated how old the ants were, her work tracked the ants from the time the pupae became adults, so she knew their exact ages. Then she put them through a range of tests.

Giraldo watched how well the ants took care of the young of the colony, recording how often each ant attended to, carried and fed them. She compared how well 20-day-old and 95-day-old ants followed the telltale scent that the insects usually leave to mark a trail to food. She tested how ants responded to light and also measured how active they were by counting how often ants in a small dish walked across a line. And she experimented with how ants react to live prey: a tethered fruit fly. Giraldo expected the older ants to perform poorly in all these tasks. But the elderly insects were all good caretakers and trail-followers – the 95-day-old ants could track the scent even longer than their younger counterparts. They all responded to light well, and the older ants were more active. And when it came to reacting to prey, the older ants attacked the poor fruit fly just as aggressively as the young ones did, flaring their mandibles or pulling at the fly's legs.

Then Giraldo compared the brains of 20-day-old and 95-day-old ants, identifying any cells that were close to death. She saw no major differences with age, nor was there any difference in the location of the dying cells, showing that age didn't seem to affect specific brain functions. Ants and other insects have structures in their brains called mushroom bodies, which are important for processing information, learning and memory. She also wanted to see if aging affects the density of synaptic complexes within these structures – regions where neurons come together. Again, the answer was no. What was more, the old ants didn't experience any drop in the levels of either serotonin or dopamine – brain chemicals whose decline often coincides with aging. In humans, for example, a decrease in serotonin has been linked to Alzheimer's disease.

'This is the first time anyone has looked at both behavioral and neural changes in these ants so thoroughly,' says Giraldo, who recently published the findings in the Proceedings of the Royal Society B. Scientists have looked at some similar aspects in bees, but the results of recent bee studies were mixed – some studies showed age-related declines, which biologists call senescence, and others didn't. 'For now, the study raises more questions than it answers,' Giraldo says, 'including how P. dentata stays in such good shape.'

Also, if the ants don't deteriorate with age, why do they die at all? Out in the wild, the ants probably don't live for a full 140 days thanks to predators, disease and just being in an environment that's much harsher than the comforts of the lab. 'The lucky ants that do live into old age may suffer a steep decline just before dying,' Giraldo says, but she can't say for sure because her study wasn't designed to follow an ant's final moments.

'It will be important to extend these findings to other species of social insects,' says Gene E. Robinson, an entomologist at the University of Illinois at Urbana-Champaign. This ant might be unique, or it might represent a broader pattern among other social bugs with possible clues to the science of aging in larger animals. Either way, it seems that for these ants, age really doesn't matter.`,
      instructions: `Questions 1–8: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.

Questions 9–13: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        {
          id: "cam14-ra-t4-s1-q1",
          number: 1,
          groupLabel: "Questions 1–8: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nYsabel Giraldo's research\nFocused on a total of 1………………………… different age groups of ants, analysing\n\nBehaviour:\n• how well ants looked after their 2…………………………\n• their ability to locate 3………………………… using a scent trail\n• the effect that 4………………………… had on them\n• how 5………………………… they attacked prey\n\nBrains:\n• comparison between age and the 6………………………… of dying cells in the brains of ants\n• condition of synaptic complexes (areas in which 7………………………… meet) in the brain's 'mushroom bodies'\n• level of two 8………………………… in the brain associated with ageing",
          type: "fill_blank",
          question: "1. Giraldo focused on a total of _______ different age groups of ants.",
          correctAnswer: "four",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q2",
          number: 2,
          type: "fill_blank",
          question: "2. How well ants looked after their _______.",
          correctAnswer: "young",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q3",
          number: 3,
          type: "fill_blank",
          question: "3. Their ability to locate _______ using a scent trail.",
          correctAnswer: "food",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q4",
          number: 4,
          type: "fill_blank",
          question: "4. The effect that _______ had on them.",
          correctAnswer: "light",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q5",
          number: 5,
          type: "fill_blank",
          question: "5. How _______ they attacked prey.",
          correctAnswer: "aggressively",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q6",
          number: 6,
          type: "fill_blank",
          question: "6. Comparison between age and the _______ of dying cells in the brains of ants.",
          correctAnswer: "location",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q7",
          number: 7,
          type: "fill_blank",
          question: "7. Condition of synaptic complexes (areas in which _______ meet) in the brain's 'mushroom bodies'.",
          correctAnswer: "neurons",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q8",
          number: 8,
          type: "fill_blank",
          question: "8. Level of two _______ in the brain associated with ageing.",
          correctAnswer: "chemicals",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "9. Pheidole dentata ants are the only known animals which remain active for almost their whole lives.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. Ysabel Giraldo was the first person to study Pheidole dentata ants using precise data about the insects' ages.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. The ants in Giraldo's experiments behaved as she had predicted that they would.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. The recent studies of bees used different methods of measuring age-related decline.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. Pheidole dentata ants kept in laboratory conditions tend to live longer lives.",
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
    {
      id: "cam14-ra-t4-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Why zoos are good",
      passageText: `A
In my view, it is perfectly possible for many species of animals living in zoos or wildlife parks to have a quality of life as high as, or higher than, in the wild. Animals in good zoos get a varied and high-quality diet with all the supplements required, and any illnesses they might have will be treated. Their movement might be somewhat restricted, but they have a safe environment in which to live, and they are spared bullying and social ostracism by others of their kind. They do not suffer from the threat or stress of predators, or the irritation and pain of parasites or injuries. The average captive animal will have a greater life expectancy compared with its wild counterpart, and will not die of drought, of starvation or in the jaws of a predator. A lot of very nasty things happen to truly 'wild' animals that simply don't happen in good zoos, and to view a life that is 'free' as one that is automatically 'good' is, I think, an error. Furthermore, zoos serve several key purposes.

B
Firstly, zoos aid conservation. Colossal numbers of species are becoming extinct across the world, and many more are increasingly threatened and therefore risk extinction. Moreover, some of these collapses have been sudden, dramatic and unexpected, or were simply discovered very late in the day. A species protected in captivity can be bred up to provide a reservoir population against a population crash or extinction in the wild. A good number of species only exist in captivity, with many of these living in zoos. Still more only exist in the wild because they have been reintroduced from zoos, or have wild populations that have been boosted by captive bred animals. Without these efforts there would be fewer species alive today. Although reintroduction successes are few and far between, the numbers are increasing, and the very fact that species have been saved or reintroduced as a result of captive breeding proves the value of such initiatives.

C
Zoos also provide education. Many children and adults, especially those in cities, will never see a wild animal beyond a fox or pigeon. While it is true that television documentaries are becoming ever more detailed and impressive, and many natural history specimens are on display in museums, there really is nothing to compare with seeing a living creature in the flesh, hearing it, smelling it, watching what it does and having the time to absorb details. That alone will bring a greater understanding and perspective to many, and hopefully give them a greater appreciation for wildlife, conservation efforts and how they can contribute.

D
In addition to this, there is also the education that can take place in zoos through signs, talks and presentations which directly communicate information to visitors about the animals they are seeing and their place in the world. This was an area where zoos used to be lacking, but they are now increasingly sophisticated in their communication and outreach work. Many zoos also work directly to educate conservation workers in other countries, or send their animal keepers abroad to contribute their knowledge and skills to those working in zoos and reserves, thereby helping to improve conditions and reintroductions all over the world.

E
Zoos also play a key role in research. If we are to save wild species and restore and repair ecosystems we need to know about how key species live, act and react. Being able to undertake research on animals in zoos where there is less risk and fewer variables means real changes can be effected on wild populations. Finding out about, for example, the oestrus cycle of an animal or its breeding rate helps us manage wild populations. Procedures such as capturing and moving at-risk or dangerous individuals are bolstered by knowledge gained in zoos about doses for anaesthetics, and by experience in handling and transporting animals. This can make a real difference to conservation efforts and to the reduction of human-animal conflicts, and can provide a knowledge base for helping with the increasing threats of habitat destruction and other problems.

F
In conclusion, considering the many ongoing global threats to the environment, it is hard for me to see zoos as anything other than essential to the long-term survival of numerous species. They are vital not just in terms of protecting animals, but as a means of learning about them to aid those still in the wild, as well as educating and informing the general population about these animals and their world so that they can assist or at least accept the need to be more environmentally conscious. Without them, the world would be, and would increasingly become, a much poorer place.`,
      instructions: `Questions 14–17: Reading Passage 2 has six paragraphs, A–F. Which paragraph contains the following information?

Questions 18–22: Do the following statements agree with the information given in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.

Questions 23–24: Choose TWO letters, A–E. Which TWO of the following are stated about zoo staff in the text?

Questions 25–26: Choose TWO letters, A–E. Which TWO of these beliefs about zoos does the writer mention in the text?`,
      questions: [
        {
          id: "cam14-ra-t4-s2-q14",
          number: 14,
          groupLabel: "Questions 14–17: Reading Passage 2 has six paragraphs, A–F.\nWhich paragraph contains the following information?\nWrite the correct letter, A–F, in boxes 14–17 on your answer sheet.",
          type: "matching",
          question: "14. a reference to how quickly animal species can die out",
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
          id: "cam14-ra-t4-s2-q15",
          number: 15,
          type: "matching",
          question: "15. reasons why it is preferable to study animals in captivity rather than in the wild",
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
        {
          id: "cam14-ra-t4-s2-q16",
          number: 16,
          type: "matching",
          question: "16. mention of two ways of learning about animals other than visiting them in zoos",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q17",
          number: 17,
          type: "matching",
          question: "17. reasons why animals in zoos may be healthier than those in the wild",
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
          id: "cam14-ra-t4-s2-q18",
          number: 18,
          groupLabel: "Questions 18–22: Do the following statements agree with the information given in Reading Passage 2?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "18. An animal is likely to live longer in a zoo than in the wild.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q19",
          number: 19,
          type: "true_false_ng",
          question: "19. There are some species in zoos which can no longer be found in the wild.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q20",
          number: 20,
          type: "true_false_ng",
          question: "20. Improvements in the quality of TV wildlife documentaries have resulted in increased numbers of zoo visitors.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q21",
          number: 21,
          type: "true_false_ng",
          question: "21. Zoos have always excelled at transmitting information about animals to the public.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q22",
          number: 22,
          type: "true_false_ng",
          question: "22. Studying animals in zoos is less stressful for the animals than studying them in the wild.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q23",
          number: 23,
          groupLabel: "Questions 23–24: Choose TWO letters, A–E.\nWhich TWO of the following are stated about zoo staff in the text?\n\nA  Some take part in television documentaries about animals\nB  Some travel to overseas locations to join teams in zoos\nC  Some get experience with species in the wild before taking up zoo jobs\nD  Some teach people who are involved with conservation projects\nE  Some specialise in caring for species which are under threat",
          type: "multiple_choice",
          question: "23. Which TWO of the following are stated about zoo staff in the text? (first answer)",
          options: [
            { label: "A  Some take part in television documentaries about animals", value: "A" },
            { label: "B  Some travel to overseas locations to join teams in zoos", value: "B" },
            { label: "C  Some get experience with species in the wild before taking up zoo jobs", value: "C" },
            { label: "D  Some teach people who are involved with conservation projects", value: "D" },
            { label: "E  Some specialise in caring for species which are under threat", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. Which TWO of the following are stated about zoo staff in the text? (second answer)",
          options: [
            { label: "A  Some take part in television documentaries about animals", value: "A" },
            { label: "B  Some travel to overseas locations to join teams in zoos", value: "B" },
            { label: "C  Some get experience with species in the wild before taking up zoo jobs", value: "C" },
            { label: "D  Some teach people who are involved with conservation projects", value: "D" },
            { label: "E  Some specialise in caring for species which are under threat", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q25",
          number: 25,
          groupLabel: "Questions 25–26: Choose TWO letters, A–E.\nWhich TWO of these beliefs about zoos does the writer mention in the text?\n\nA  They can help children overcome their fears of wild animals\nB  They can increase public awareness of environmental issues\nC  They can provide employment for a range of professional people\nD  They can generate income to support wildlife conservation projects\nE  They can raise animals which can later be released into the wild",
          type: "multiple_choice",
          question: "25. Which TWO of these beliefs about zoos does the writer mention in the text? (first answer)",
          options: [
            { label: "A  They can help children overcome their fears of wild animals", value: "A" },
            { label: "B  They can increase public awareness of environmental issues", value: "B" },
            { label: "C  They can provide employment for a range of professional people", value: "C" },
            { label: "D  They can generate income to support wildlife conservation projects", value: "D" },
            { label: "E  They can raise animals which can later be released into the wild", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Which TWO of these beliefs about zoos does the writer mention in the text? (second answer)",
          options: [
            { label: "A  They can help children overcome their fears of wild animals", value: "A" },
            { label: "B  They can increase public awareness of environmental issues", value: "B" },
            { label: "C  They can provide employment for a range of professional people", value: "C" },
            { label: "D  They can generate income to support wildlife conservation projects", value: "D" },
            { label: "E  They can raise animals which can later be released into the wild", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
      ],
    },
    {
      id: "cam14-ra-t4-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The risks of ocean trash",
      passageText: `Chelsea Rochman, an ecologist at the University of California, Davis, has been trying to answer a dismal question: Is everything terrible, or are things just very, very bad?

Rochman is a member of the National Center for Ecological Analysis and Synthesis's marine-debris working group, a collection of scientists who study, among other things, the growing problem of marine debris, also known as ocean trash. Plenty of studies have sounded alarm bells about the state of marine debris; in a recent paper published in the journal Ecology, Rochman and her colleagues set out to determine how many of those perceived risks are real.

Often, Rochman says, scientists will end a paper by speculating about the broader impacts of what they've found. For example, a study could show that certain seabirds eat plastic bags, and go on to warn that whole bird populations are at risk of dying out. 'But the truth was that nobody had yet tested those perceived threats,' Rochman says. 'There wasn't a lot of information.'

Rochman and her colleagues examined more than a hundred papers on the impacts of marine debris that were published through 2013. Within each paper, they asked what threats scientists had studied – 366 perceived threats in all – and what they'd actually found.

In 83 percent of cases, the perceived dangers of ocean trash were proven true. In the remaining cases, the working group found the studies had weaknesses in design and content which affected the validity of their conclusions – they lacked a control group, for example, or used faulty statistics.

Strikingly, Rochman says, only one well-designed study failed to find the effect it was looking for, an investigation of mussels ingesting microscopic bits. The plastic moved from the mussels' stomachs to their bloodstreams, scientists found, and stayed there for weeks – but didn't seem to stress out the shellfish.

While mussels may be fine eating trash, though, the analysis also gave a clearer picture of the many ways that ocean debris is bothersome.

Within the studies they looked at, most of the proven threats came from plastic debris, rather than other materials like metal or wood. Most of the dangers also involved large pieces of debris – animals getting entangled in trash, for example, or eating it and severely injuring themselves.

But a lot of ocean debris is 'microplastic', or pieces smaller than five millimeters. These may be ingredients used in cosmetics and toiletries, fibers shed by synthetic clothing in the wash, or eroded remnants of larger debris. Compared to the number of studies investigating large-scale debris, Rochman's group found little research on the effects of these tiny bits. 'There are a lot of open questions still for microplastic,' Rochman says, though she notes that more papers on the subject have been published since 2013, the cutoff point for the group's analysis.

There are also, she adds, a lot of open questions about the ways that ocean debris can lead to sea-creature death. Many studies have looked at how plastic affects an individual animal, or that animal's tissues or cells, rather than whole populations. And in the lab, scientists often use higher concentrations of plastic than what's really in the ocean. None of that tells us how many birds or fish or sea turtles could die from plastic pollution – or how deaths in one species could affect that animal's predators, or the rest of the ecosystem.

'We need to be asking more ecologically relevant questions,' Rochman says. Usually, scientists don't know exactly how disasters such as a tanker accidentally spilling its whole cargo of oil and polluting huge areas of the ocean will affect the environment until after they've happened. 'We don't ask the right questions early enough,' she says. But if ecologists can understand how the slow-moving effect of ocean trash is damaging ecosystems, they might be able to prevent things from getting worse.

Asking the right questions can help policy makers, and the public, figure out where to focus their attention. The problems that look or sound most dramatic may not be the best places to start. For example, the name of the 'Great Pacific Garbage Patch' – a collection of marine debris in the northern Pacific Ocean – might conjure up a vast, floating trash island. In reality though, much of the debris is tiny or below the surface; a person could sail through the area without seeing any trash at all. A Dutch group called 'The Ocean Cleanup' is currently working on plans to put mechanical devices in the Pacific Garbage Patch and similar areas to suck up plastic. But a recent paper used simulations to show that strategically positioning the cleanup devices closer to shore would more effectively reduce pollution over the long term.

'I think clearing up some of these misperceptions is really important,' Rochman says. Among scientists as well as in the media, she says, 'A lot of the images about strandings and entanglement and all of that cause the perception that plastic debris is killing everything in the ocean.' Interrogating the existing scientific literature can help ecologists figure out which problems really need addressing, and which ones they'd be better off – like the mussels – absorbing and ignoring.`,
      instructions: `Questions 27–33: Do the following statements agree with the information given in Reading Passage 3? Write TRUE, FALSE, or NOT GIVEN.

Questions 34–39: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.

Question 40: Choose the correct letter, A, B, C or D.`,
      questions: [
        {
          id: "cam14-ra-t4-s3-q27",
          number: 27,
          groupLabel: "Questions 27–33: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "true_false_ng",
          question: "27. Rochman and her colleagues were the first people to research the problem of marine debris.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q28",
          number: 28,
          type: "true_false_ng",
          question: "28. The creatures most in danger from ocean trash are certain seabirds.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q29",
          number: 29,
          type: "true_false_ng",
          question: "29. The studies Rochman has reviewed have already proved that populations of some birds will soon become extinct.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q30",
          number: 30,
          type: "true_false_ng",
          question: "30. Rochman analysed papers on the different kinds of danger caused by ocean trash.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q31",
          number: 31,
          type: "true_false_ng",
          question: "31. Most of the research analysed by Rochman and her colleagues was badly designed.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q32",
          number: 32,
          type: "true_false_ng",
          question: "32. One study examined by Rochman was expecting to find that mussels were harmed by eating plastic.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "33. Some mussels choose to eat plastic in preference to their natural diet.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q34",
          number: 34,
          groupLabel: "Questions 34–39: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nFindings related to marine debris\nStudies of marine debris found the biggest threats were\n• plastic (not metal or wood)\n• bits of debris that were 34………………………… (harmful to animals)\n\nThere was little research into 35………………………… e.g. from synthetic fibres.\n\nDrawbacks of the studies examined\n• most of them focused on individual animals, not entire 36…………………………\n• the 37………………………… of plastic used in the lab did not always reflect those in the ocean\n• there was insufficient information on\n  – numbers of animals which could be affected\n  – the impact of a reduction in numbers on the 38………………………… of that species\n  – the impact on the ecosystem\n\nRochman says more information is needed on the possible impact of future 39………………………… (e.g. involving oil).",
          type: "fill_blank",
          question: "34. Bits of debris that were _______ (harmful to animals).",
          correctAnswer: "large",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q35",
          number: 35,
          type: "fill_blank",
          question: "35. There was little research into _______ e.g. from synthetic fibres.",
          correctAnswer: "microplastic",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q36",
          number: 36,
          type: "fill_blank",
          question: "36. Most studies focused on individual animals, not entire _______.",
          correctAnswer: "populations",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q37",
          number: 37,
          type: "fill_blank",
          question: "37. The _______ of plastic used in the lab did not always reflect those in the ocean.",
          correctAnswer: "concentrations",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q38",
          number: 38,
          type: "fill_blank",
          question: "38. Insufficient information on the impact of a reduction in numbers on the _______ of that species.",
          correctAnswer: "predators",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q39",
          number: 39,
          type: "fill_blank",
          question: "39. Rochman says more information is needed on the possible impact of future _______ (e.g. involving oil).",
          correctAnswer: "disasters",
          points: 1,
        },
        {
          id: "cam14-ra-t4-s3-q40",
          number: 40,
          groupLabel: "Question 40: Choose the correct letter, A, B, C or D.",
          type: "multiple_choice",
          question: "40. What would be the best title for this passage?",
          options: [
            { label: "A  Assessing the threat of marine debris", value: "A" },
            { label: "B  Marine debris: who is to blame?", value: "B" },
            { label: "C  A new solution to the problem of marine debris", value: "C" },
            { label: "D  Marine debris: the need for international action", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge14Tests: IELTSTest[] = [cambridge14_reading_t1, cambridge14_reading_t2, cambridge14_reading_t3, cambridge14_reading_t4];
