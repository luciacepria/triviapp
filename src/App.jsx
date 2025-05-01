import { useState, useEffect, useRef } from 'react'
import QuestionCard from './components/QuestionCard'
import Buttons from './components/Buttons'
import Options from './components/Options'
import Sidebar from './components/Sidebar'
import { generate, getModels } from './llm/Generator'
import { getBasePrompt, setQuestions} from './llm/PromptCreator'

function App({modelsTest}) {
  let [questionIndex,setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [disableNew, setDisableNew] = useState(false);
  const [model, setModel] = useState("")
  const [models, setModels] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [categories, setCategories] = useState({
    geography: true,
    entertainment: true,
    history: true,
    artLiterature: true,
    scienceNature: true,
    sportsLeisure: true,
});

  let questions = useRef(
    [{question: "To start click on \"Next Question\"", answer: ""}]
  )


  useEffect(() => {
    async function fetchModels() {
      const fetchedModels = await getModels();
      setModels(fetchedModels)
      if (fetchedModels.length > 0)
        setModel(fetchedModels[0])
    }
    fetchModels();
  }, []);

  if (modelsTest)
    setModels(modelsTest) // testing no models

  const revealAnswer = () => setShowAnswer(true);

  const newQuestion = async () => {
    if (questionIndex === questions.current.length - 1 && !disableNew) {
      setDisableNew(true);
      let newQuestions = await generate(getBasePrompt(), model);
      if (newQuestions) {
        questions.current = [...questions.current, ...newQuestions]
        setQuestions(newQuestions)
      }
      setDisableNew(false);
    }
  
    setShowAnswer(false);
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.current.length)



    console.log(getBasePrompt());


    
  };

  
  return (
    <>
     <Options sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
    <Sidebar 
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen} 
      model = {model}
      models = {models}
      setModel = {setModel}
      categories = {categories}
      setCategories = {setCategories}
      />
      
      <QuestionCard 
      question={questions.current[questionIndex]?.question} 
      answer= {questions.current[questionIndex]?.answer} 
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
