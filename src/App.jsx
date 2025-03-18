import { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import Buttons from './components/Buttons'
import Options from './components/Options'
import ModelSelector from './components/ModelSelector'
import { generate, getModels } from './llm/Generator'
import { getBasePrompt, setQuestions} from './llm/PromptCreator'

const models = await getModels()

const questions = [
  {question: "What is the capital of Australia?", answer: "Canberra"}, 
  {question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci"}, 
  {question: "What is the chemical symbol for gold?", answer: "Au"}, 
  {question: "Which planet is known as the Red Planet?", answer: "Mars"}, 
  {question: "In what year did the Titanic sink?", answer: "1912"}];

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [disableNew, setDisableNew] = useState(false);
  const [model, setModel] = useState("")


  const revealAnswer = () => setShowAnswer(true);

  const newQuestion = async () => {
    if (questionIndex === questions.length - 1 && !disableNew) {
      setDisableNew(true);
      let newQuestions = await generate(getBasePrompt(), model);
      setQuestions(newQuestions)
      if (newQuestions) {
        questions.push(...newQuestions);
      }
      setDisableNew(false);
    }
  
    setShowAnswer(false);
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  console.log("index: " + questionIndex)
  console.log(questions)
  console.log(getBasePrompt())

  return (
    <>
      <ModelSelector
      model = {model}
      models = {models}
      setModel = {setModel}
      />
      <Options></Options>

      <QuestionCard 
      question={questions[questionIndex].question} 
      answer= {questions[questionIndex].answer} 
      showAnswer= {showAnswer}>

      </QuestionCard>

      <Buttons 
      revealAnswer={revealAnswer} 
      newQuestion = {newQuestion}
      disableNew={disableNew}
      nextText={disableNew? "Generating..." : "Next Question"}
      >

      </Buttons>
    </>
  )
}

export default App
