//@ts-nocheck
import React, { useEffect } from "react";

function Section1_1() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.font = '38pt Arial';
    context.fillStyle = 'cornflowerblue';
    context.strokeStyle = 'blue';
    context.fillText('Hello Canvas', canvas.width / 2 - 150, canvas.height / 2 + 15);
    context.strokeText('Hello Canvas', canvas.width / 2 - 150, canvas.height / 2 + 15);
  }, []);

  return (
    <canvas
      id='canvas'
      width="600"
      height="300"
      style={{ background: "#FFF", borderWidth: 1, borderColor: "#000", borderStyle: "solid" }}
    >
      Canvas not supported
    </canvas>
  );
}

export default Section1_1;
