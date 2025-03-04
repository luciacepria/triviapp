import React from 'react'
const handleClick = () =>{
  alert("Questions will be generated. When you choose an answer, click the “Reveal Answer” button to see the correct answer. To generate a new question, click the “New Question” button.")
}
export default function Options() {
  return (
    <div className='options'>
        <i onClick={handleClick} class="fa fa-info-circle icon" ></i> 
    </div>
    
  )
}
