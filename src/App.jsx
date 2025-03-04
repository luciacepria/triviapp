import { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import Buttons from './components/Buttons'
import Options from './components/Options'

const questions = [
  {question: "What is the capital of Australia?", answer: "Canberra"}, 
  {question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci"}, 
  {question: "What is the chemical symbol for gold?", answer: "Au"}, 
  {question: "Which planet is known as the Red Planet?", answer: "Mars"}, 
  {question: "In what year did the Titanic sink?", answer: "1912"}];

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const revealAnswer = () => setShowAnswer(true);

  const newQuestion = () => {
    setShowAnswer(false);
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  }

  return (
    <>
      <Options></Options>

      <QuestionCard 
      question={questions[questionIndex].question} 
      answer= {questions[questionIndex].answer} 
      showAnswer= {showAnswer}>

      </QuestionCard>

      <Buttons 
      revealAnswer={revealAnswer} 
      newQuestion = {newQuestion}>

      </Buttons>
    </>
  )
}

export default App
