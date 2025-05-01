import React from 'react'

export default function Countdown({countdown, setCountdown, minutes, setMinutes, seconds, setSeconds, setMinutesCountdown, setSecondsCountdown}) {
  const handleClick = () => {
    setCountdown(prev => !prev);
  };
  const handleMinutesChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setMinutes(value);
    setMinutesCountdown(value); 
  };

  const handleSecondsChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setSeconds(value);
    setSecondsCountdown(value); 
  };

  return (
    <div className="container">
      <button className="enableButton" onClick={handleClick}>
        {countdown ? 'Disable' : 'Enable'}
      </button>
      <input
        className='timeChooser'
        type="number"
        min="0"
        max="59"
        value={minutes}
        onChange={handleMinutesChange}
      />
      <span>:</span>
      <input
          className='timeChooser'
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={handleSecondsChange}
      />
    </div>
  )
}
