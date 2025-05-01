export default function StartCountdown({countdown, setMinutesCountdown, setSecondsCountdown, intervalRef, isRunning, setIsRunning, minutes, seconds, revealAnswer}) {
  if (!countdown) return null;

  const toggleCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSecondsCountdown(prevSeconds => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            setMinutesCountdown(prevMinutes => {
              if (prevMinutes > 0) {
                setSecondsCountdown(59);
                return prevMinutes - 1;
              } else {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setIsRunning(false);
                revealAnswer();
                return 0;
              }
            });
            return 0;
          }
        });
      }, 1000);
    }
  };

  const restartCountdown = () => {
    setMinutesCountdown(minutes);
    setSecondsCountdown(seconds);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  return (
    <div>
      <button onClick={toggleCountdown}>
        {isRunning ? 'Stop Countdown' : 'Start Countdown'}
      </button>
      <button onClick={restartCountdown}>
        <i className="fa-solid fa-rotate"></i>
      </button>
    </div>
  );
}