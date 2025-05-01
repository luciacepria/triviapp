import React, { useEffect } from 'react';

export default function CountdownDisplay({countdown, minutesCountdown, secondsCountdown}) {


  if (!countdown) return null; 

  return (
    <div>
      <h2>
        {String(minutesCountdown).padStart(2, '0')}:{String(secondsCountdown).padStart(2, '0')}
      </h2>
    </div>
  );
}