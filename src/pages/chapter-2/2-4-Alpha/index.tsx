import { useEffect } from 'react';
import styles from './index.module.css';

function Alpha() {
  useEffect(init, []);

  function init() {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.lineJoin = 'round';
    ctx.lineWidth = 20;

    ctx.font = '30px Helvetica';
    ctx.fillText('这是半透明的矩形', 130, 135);

    ctx.save();

    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.strokeRect(30, 50, 200, 200);

    ctx.restore();

    ctx.fillStyle = 'rgba(0,255,0,0.7)';
    ctx.fillRect(270, 50, 200, 200);
  }

  return (
    <canvas width="500" height="300" id="canvas" className={styles.canvas}>
      No Support Canvas
    </canvas>
  );
}

export default Alpha;
