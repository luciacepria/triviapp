import { useState, useEffect } from 'react'
import QuestionCard from './components/QuestionCard'
import Buttons from './components/Buttons'
import Options from './components/Options'
import ModelSelector from './components/ModelSelector'
import ModelsNotFound from './components/ModelsNotFound'
import { generate, getModels } from './llm/Generator'
import { getBasePrompt, setQuestions} from './llm/PromptCreator'

function App({modelsTest}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [disableNew, setDisableNew] = useState(false);
  const [model, setModel] = useState("")
  const [models, setModels] = useState([])
  const [questions, setQuestionsState] = useState(
    [{question: "To start click on \"Next Question\"", answer: ""}]
  )


  useEffect(() => {
    async function fetchModels() {
      const fetchedModels = await getModels();
      setModels(fetchedModels);
    }
    fetchModels();
  }, []);

  if (modelsTest)
    setModels(modelsTest) // testing no models

  const revealAnswer = () => setShowAnswer(true);

  const newQuestion = async () => {
    if (questionIndex === questions.length - 1 && !disableNew) {
      setDisableNew(true);
      let newQuestions = await generate(getBasePrompt(), model);
      if (newQuestions) {
        setQuestionsState([...questions, ...newQuestions])
        setQuestions(newQuestions)
      }
      setDisableNew(false);
    }
  
    setShowAnswer(false);
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  if (models.length == 0) return <ModelsNotFound/>
  
  return (
    <>
      <ModelSelector
      model = {model}
      models = {models}
      setModel = {setModel}
      />
      <Options></Options>

      <QuestionCard 
      question={questions[questionIndex]?.question} 
      answer= {questions[questionIndex]?.answer} 
      showAnswer= {showAnswer}>

      </QuestionCard>

      <Buttons 
      revealAnswer={revealAnswer} 
      newQuestion = {newQuestion}
      disableNew={disableNew}
      nextText={disableNew ? "Generating..." : "Next Question"}
      >

      </Buttons>
    </>
  )
}

export default App
