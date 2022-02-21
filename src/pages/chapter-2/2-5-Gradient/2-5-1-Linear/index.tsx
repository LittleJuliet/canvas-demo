import { useEffect } from 'react';
import styles from './index.module.css';

function Linear() {
  useEffect(init, []);

  function init() {
    const canvas = document.querySelectorAll('#')
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
