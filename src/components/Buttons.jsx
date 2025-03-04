import React from 'react'

export default function Buttons({revealAnswer, newQuestion}) {
  return (
    <>
      <button onClick={revealAnswer}>Reveal Answer</button>

      <button onClick={newQuestion}>New question</button>

    </>
    
  )
}
