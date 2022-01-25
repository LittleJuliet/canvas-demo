import React, { useEffect } from 'react';
import './index.css';

function Section1_8() {
  useEffect(() => {
    const glasspane = document.querySelector('#glasspane') as HTMLElement;
    console.log('glasspane ==>', window.getComputedStyle(glasspane));
  }, []);

  return (
    <div>
      <div id="glasspane">
        <h2 className="title">Bouncing Balls</h2>

        <p>One hundred balls bouncing</p>

        <a id="startButton">Start</a>
      </div>

      <canvas id="canvas" width="750" height="500">
        Canvas not supported
      </canvas>
    </div>
  );
}

export default Section1_8;
