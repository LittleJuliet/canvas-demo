import React, { Component, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {}
interface State {}

class MyGrid extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.drawGrid(ctx, 'lightGray', 10, 10);
    }
  }

  drawGrid(ctx: CanvasRenderingContext2D, color: string, stepX: number, stepY: number): void {
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.5;

    for (let i = stepX + 0.5; i < ctx.canvas.width; i += stepX) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, ctx.canvas.height);
      ctx.closePath();
      ctx.stroke();
    }

    for (let i = stepY + 0.5; i < ctx.canvas.height; i += stepY) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(ctx.canvas.width, i);
      ctx.closePath();
      ctx.stroke();
    }
  }

  render(): ReactNode {
    return (
      <div className={styles.container}>
        <canvas className={styles.canvas} width={500} height={500}>
          No Supported.
        </canvas>
      </div>
    );
  }
}

export default MyGrid;
