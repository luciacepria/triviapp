export default function Buttons({revealAnswer, newQuestion, disableNew, nextText, minutes, seconds, intervalRef, setMinutesCountdown, setSecondsCountdown, setIsRunning}) {

  const handleNewQuestion = (e) => {
    newQuestion();
    setMinutesCountdown(minutes);
    setSecondsCountdown(seconds);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);

  }
  return (
    <>
      <button onClick={revealAnswer}>Reveal Answer</button>
      <button onClick={handleNewQuestion} disabled={disableNew}>{nextText}</button>
    </>
  )
}
