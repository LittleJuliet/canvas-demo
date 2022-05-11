import { Component, ReactNode } from 'react';
import styles from './index.module.css';

export default class CircleCutout extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const w = canvas.width;
      const h = canvas.height;

      ctx.save();
      ctx.beginPath();
      ctx.shadowColor = 'rgba(0,0,0,0.7)'
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      ctx.shadowBlur = 3;
      ctx.arc(w / 2, h / 2, 150, 0, Math.PI * 2, false);
      ctx.arc(w / 2, h / 2, 100, 0, Math.PI * 2, true);
      ctx.fillStyle = 'pink';
      ctx.fill();
      ctx.restore();
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <canvas className={styles.canvas} width={500} height={500}>
          No Support.
        </canvas>
      </div>
    );
  }
}
