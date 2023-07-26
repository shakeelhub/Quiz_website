import './App.css';
import { useState ,useEffect, useMemo} from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';



function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const[username,setUsername] = useState(null);

  const data = [
    {
      id: 1,
      question: "World-wide, what language is used the most on the internet?",
      answers: [
        {
          text: "German",
          correct: false,
        },
        {
          text: "English",
          correct: true,
        },
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "Chinese",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "If someone is described as a Kiwi, where are they from??",
      answers: [
        {
          text: "New Zealand",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "United Kingdom",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "How many hearts are there in an octopus?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Name Pixar’s first feature-length movie?",
      answers: [
        {
          text: "Titanic",
          correct: false,
        },
        {
          text: "Harry Potter",
          correct: false,
        },
        {
          text: "Stranger Things",
          correct: false,
        },
        {
          text: "Toy Story",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which body part is the only one that is fully grown at birth?",
      answers: [
        {
          text: "Ears",
          correct: false,
        },
        {
          text: "Eyes",
          correct: true,
        },
        {
          text: "Heart",
          correct: false,
        },
        {
          text: "Nose",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How many stars are there on the United States of America flag?",
      answers: [
        {
          text: "45",
          correct: true,
        },
        {
          text: "49",
          correct: false,
        },
        {
          text: "50",
          correct: false,
        },
        {
          text: "51",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which human muscle is the strongest? ",
      answers: [
        {
          text: "Thigh",
          correct: false,
        },
        {
          text: "Elbow",
          correct: false,
        },
        {
          text: "Jaw",
          correct: true,
        },
        {
          text: "Stomach",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which nation’s life expectancy is the highest??",
      answers: [
        {
          text: "Japan",
          correct: false,
        },
        {
          text: "Sweden",
          correct: false,
        },
        {
          text: "Hong Kong",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is forbidden to eat with a fork in the state of Georgia?",
      answers: [
        {
          text: "Beef",
          correct: false,
        },
        {
          text: "Fried chicken",
          correct: true,
        },
        {
          text: "Noodles",
          correct: false,
        },
        {
          text: "Birds",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "In which place Elon Musk was  born? ?",
      answers: [
        {
          text: "South Africa",
          correct: true,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "New Zealand",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " What is the capital of Ireland?",
      answers: [
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "Texas",
          correct: false,
        },
        {
          text: "Dublin",
          correct: true,
        },
        {
          text: "London",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the only continent with land in all four hemispheres?",
      answers: [
        {
          text: "Africa",
          correct: true,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "UAE",
          correct: false,
        },
        {
          text: "Australia",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Where did sushi originate?",
      answers: [
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Hong Kong",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "What sporting event has a strict dress code of all-white? ",
      answers: [
        {
          text: " Wimbledon",
          correct: true,
        },
        {
          text: "NBA",
          correct: false,
        },
        {
          text: "IPL",
          correct: false,
        },
        {
          text: "Asian Games",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What year was Cinderella released?",
      answers: [
        {
          text: "1941",
          correct: false,
        },
        {
          text: "1940",
          correct: false,
        },
        {
          text: "1950",
          correct: true,
        },
        {
          text: "1951",
          correct: false,
        },
      ],
    },
  ];


  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    [questionNumber]
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
                }

export default App;
