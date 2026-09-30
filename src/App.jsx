import {useState} from 'react';
import './App.css'
const questions = [
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect","useState","useRef","useMemo"],
    answer: "useState"
  },
  {
    question: "Which language is used with React?",
    options: ["Javascript","Java","Python","PHP"],
    answer:"Javascript"
  },
  {
    question: "Which company developed React?",
    options:["Google","Microsoft","Facebook","Amazon"],
    answer:"Facebook"
  },
  {
    question: "Which JSX attribute is used instead of class?",
    options: ["className","class","cssClass","styleClass"],
    answer:"className"
  }
]

function App(){
  const [quiz,setQuiz] = useState({
    currentQuestion: 0,
    selectedAnswer: "",
    score: 0,
    quizFinished: false,
  });
  const question = questions[quiz.currentQuestion];
  const handleNext = () =>{
    const isCorrect = quiz.selectedAnswer === question.answer;

    if(quiz.currentQuestion === questions.length - 1){
      setQuiz({
        ...quiz,
        score: isCorrect? quiz.score + 1: quiz.score,
        quizFinished: true
      })
    } else {
      setQuiz({
        ...quiz,
        currentQuestion: quiz.currentQuestion + 1,
        selectedAnswer: "",
        score: isCorrect? quiz.score + 1: quiz.score,
      })
    }

  }
  const handleAnswer = (option)=>{
    setQuiz({
      ...quiz,
      selectedAnswer: option
    })
  }
  const restartQuiz = ()=>{
    setQuiz({
      currentQuestion: 0,
      selectedAnswer: "",
      score: 0,
      quizFinished: false,
    })
  }
  if(quiz.quizFinished){
    return(
      <div className="quiz-container">
         <div className="quiz-card">
           <h1>Quiz Complted!</h1>
           <h2>Your Score: {quiz.score}/{questions.length}</h2>
           <button onClick={restartQuiz}>Restart Quiz</button>
         </div>
      </div>
    )
  }
  return(
    <div className="quiz-container">
      <div className="quiz-card">
        <h1>React Quiz</h1>
        <p className="question-number">
          Question {quiz.currentQuestion + 1}/{questions.length}
        </p>
        <h2>{question.question}</h2>
        <div className="options">
            {
              question.options.map((option)=>(
                <button className={quiz.selectedAnswer === option ? "option selected" : "option"} onClick={()=>handleAnswer(option)}>
                  {option}
                </button>
              ))
            }
        </div>
        <button className="next-button" onClick={handleNext} disabled={!quiz.selectedAnswer}>Next Question</button>
      </div>
    </div>
  )
}

export default App