import React, { Component, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {}
interface State {}

class DashLine extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = '#000';
      ctx.beginPath();
      ctx.setLineDash([10, 10, 5]);
      ctx.moveTo(10, 10);
      ctx.lineTo(410, 10);
      ctx.stroke();
      ctx.closePath();
    }
  }

  render(): ReactNode {
    return (
      <div className={styles.container}>
        <canvas className={styles.canvas} width={1000} height={500}>
          No Supported.
        </canvas>
      </div>
    );
  }
}

export default DashLine;
