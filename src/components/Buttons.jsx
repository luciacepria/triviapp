import React from 'react'

export default function Buttons({revealAnswer, newQuestion, disableNew, nextText}) {
  return (
    <>
      <button onClick={revealAnswer}>Reveal Answer</button>

      <button onClick={newQuestion} disabled={disableNew}>{nextText}</button>

    </>
    
  )
}
