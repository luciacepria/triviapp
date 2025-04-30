import React from 'react'
import ModelSelector from './ModelSelector'
import ModelsNotFound from './ModelsNotFound'

const showInfo = () =>{
    alert("Questions will be generated. When you choose an answer, click the “Reveal Answer” button to see the correct answer. To generate a new question, click the “New Question” button.")
  }

export default function Sidebar({ setSidebarOpen, model, setModel, models, sidebarOpen }) {
    if (models.length === 0) return <ModelsNotFound />
    

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>Settings</h2>
                <button onClick={() => setSidebarOpen(false)} className="sidebar-close">X</button>
            </div>
            <div className="sidebar-content">
                <h3>Ollama model</h3>
                <ModelSelector
                    model={model}
                    models={models}
                    setModel={setModel}
                />
                <i onClick={showInfo} class="fa-solid fa-circle-info"></i>
            </div>
        </div>
    )
}