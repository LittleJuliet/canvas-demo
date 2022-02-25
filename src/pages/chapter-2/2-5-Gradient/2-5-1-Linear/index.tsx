import { useEffect } from 'react';
import styles from './index.module.css';

function Linear() {
  useEffect(init, []);

  function init() {
    const canvasCollection = document.getElementsByTagName('canvas');
    const canvasArr: HTMLCanvasElement[] = [];
    const ctxArr: CanvasRenderingContext2D[] = [];
    for (let i = 0; i < canvasCollection.length; i++) {
      const tempCanvas = canvasCollection.item(i) as HTMLCanvasElement;
      canvasArr.push(tempCanvas);
      ctxArr.push(tempCanvas.getContext('2d') as CanvasRenderingContext2D);
    }

    let gradient = ctxArr[0].createLinearGradient(0, 0, canvasArr[0].width, 0);
    gradient.addColorStop(0, '#0000ff');
    gradient.addColorStop(0.25, '#fff');
    gradient.addColorStop(0.5, 'purple');
    gradient.addColorStop(0.75, '#ff0000');
    gradient.addColorStop(1, '#ffff00');
    ctxArr[0].fillStyle = gradient;
    ctxArr[0].fillRect(0, 0, canvasArr[0].width, canvasArr[0].height);

    gradient = ctxArr[1].createLinearGradient(0, 0, 0, canvasArr[1].height);
    gradient.addColorStop(0, '#0000ff');
    gradient.addColorStop(0.25, '#fff');
    gradient.addColorStop(0.5, 'purple');
    gradient.addColorStop(0.75, '#ff0000');
    gradient.addColorStop(1, '#ffff00');
    ctxArr[1].fillStyle = gradient;
    ctxArr[1].fillRect(0, 0, canvasArr[1].width, canvasArr[1].height);

    gradient = ctxArr[2].createLinearGradient(0, 0, 0, canvasArr[2].height / 2);
    gradient.addColorStop(0, '#0000ff');
    gradient.addColorStop(0.25, '#fff');
    gradient.addColorStop(0.5, 'purple');
    gradient.addColorStop(0.75, '#ff0000');
    gradient.addColorStop(1, '#ffff00');
    ctxArr[2].fillStyle = gradient;
    ctxArr[2].fillRect(0, 0, canvasArr[2].width, canvasArr[2].height);

    gradient = ctxArr[3].createLinearGradient(0, 0, canvasArr[3].width, canvasArr[3].height);
    gradient.addColorStop(0, '#0000ff');
    gradient.addColorStop(0.25, '#fff');
    gradient.addColorStop(0.5, 'purple');
    gradient.addColorStop(0.75, '#ff0000');
    gradient.addColorStop(1, '#ffff00');
    ctxArr[3].fillStyle = gradient;
    ctxArr[3].fillRect(0, 0, canvasArr[3].width, canvasArr[3].height);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <canvas id="canvas1" className={styles.canvas} width="400" height="300">
          No Support Canvas
        </canvas>
        <canvas id="canvas2" className={styles.canvas} width="400" height="300">
          No Support Canvas
        </canvas>
      </div>
      <div className={styles.container}>
        <canvas id="canvas3" className={styles.canvas} width="400" height="300">
          No Support Canvas
        </canvas>
        <canvas id="canvas4" className={styles.canvas} width="400" height="300">
          No Support Canvas
        </canvas>
      </div>
    </div>
  );
}

export default Linear;
