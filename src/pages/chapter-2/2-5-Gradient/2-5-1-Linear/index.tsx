import styles from './index.module.css';

function Linear() {
  return (
    <div>
      <canvas id="canvas1" width='300' height='300'>No Support Canvas</canvas>
      <canvas id="canvas2" className={styles.canvas2} width='300' height='300'>No Support Canvas</canvas>
      <canvas id="canvas3" className={styles.canvas3} width='300' height='300'>No Support Canvas</canvas>
      <canvas id="canvas4" className={styles.canvas4} width='300' height='300'>No Support Canvas</canvas>
    </div>
  )
}

export default Linear;
