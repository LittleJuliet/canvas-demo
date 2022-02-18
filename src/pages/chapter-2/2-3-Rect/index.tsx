import { useEffect } from 'react';
import styles from './index.module.css';

function MyRect() {
  useEffect(init, []);

  function init() {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.lineJoin = 'round';
    ctx.lineWidth = 30;

    ctx.font = '20px Helvetica';
    ctx.fillText('点击任意处清除矩形', 410, 30);

    ctx.fillStyle = '#90fae4';
    ctx.strokeStyle = '#ff9091';

    ctx.strokeRect(50, 100, 400, 300);
    ctx.fillRect(550, 100, 400, 300);

    canvas.addEventListener('mousedown', function(e) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
  }

  return (
    <canvas id='canvas' width='1000' height='500' className={styles.canvas}>No Support Canvas</canvas>
  );
}

export default MyRect;
