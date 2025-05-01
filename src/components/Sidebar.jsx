import React from 'react'
import ModelSelector from './ModelSelector'
import ModelsNotFound from './ModelsNotFound'
import Categories from './Categories'
import Countdown from './Countdown'

const showInfo = () =>{
    alert("Questions will be generated based on the selected categories. After choosing an answer, click the “Reveal Answer” button to view the correct response. To generate a new question, use the “New Question” button. You may select or deselect the categories you wish to include; note that questions are generated in sets of three, all based on the currently selected categories. You must go through all three questions before generating a new set. Please ensure that Ollama is installed and running for the application to function properly.")
  }

export default function Sidebar({ setSidebarOpen, model, setModel, models, sidebarOpen, categories, setCategories, countdown, setCountdown, minutes, setMinutes, seconds, setSeconds, minutesCountdown, setMinutesCountdown, secondsCountdown, setSecondsCountdown}) {
    if (models.length === 0) return <ModelsNotFound />
    

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>Settings</h2>
                <i onClick = {() => setSidebarOpen(false)} className="fa-solid fa-xmark"></i>
            </div>
            <div className="sidebar-content">
                <h3>Ollama model</h3>
                <ModelSelector
                    model={model}
                    models={models}
                    setModel={setModel}
                />

                <h3>Categories</h3>
                <Categories 
                    categories={categories}
                    setCategories={setCategories}
                />
                <h3>Countdown</h3>
                <Countdown 
                    countdown = {countdown}
                    setCountdown = {setCountdown}
                    minutes = {minutes}
                    setMinutes = {setMinutes}
                    seconds = {seconds}
                    setSeconds = {setSeconds}
                    setMinutesCountdown = {setMinutesCountdown}
                    setSecondsCountdown = {setSecondsCountdown}
                />
                
                <i onClick={showInfo} className="fa-solid fa-circle-info"></i>
            </div>
        </div>
    )
}