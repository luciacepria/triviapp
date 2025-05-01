import React from 'react'

export default function ({countdown, setMinutesCountdown, secondsCountdown, setSecondsCountdown, intervalRef, isRunning, setIsRunning, minutes, seconds}) {
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
              return 59;
            }
          });
  
          setMinutesCountdown(prevMinutes => {
            if (secondsCountdown === 0) {
              if (prevMinutes > 0) {
                return prevMinutes - 1;
              } else {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setIsRunning(false);
                return 0;
              }
            }
            return prevMinutes;
          });
        }, 1000);
      }
    };
    const restartCountdown = () => {
        setMinutesCountdown(minutes)
        setSecondsCountdown(seconds)
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    }
  
    return (
      <div>
        <button onClick={toggleCountdown}>
          {isRunning ? 'Stop Countdown' : 'Start Countdown'}
        </button>
        <button onClick={restartCountdown} >
        <i className="fa-solid fa-rotate"></i>
        </button>
      </div>
    );
  }