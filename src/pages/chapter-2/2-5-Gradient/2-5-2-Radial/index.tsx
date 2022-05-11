import { Component, ReactNode } from 'react';
import styles from './index.module.css';

class Radial extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const radial = ctx.createRadialGradient(150, 150, 50, 300, 300, 50);
      radial.addColorStop(0, 'pink');
      radial.addColorStop(0.5, 'red');
      radial.addColorStop(1, 'orange');
      ctx.fillStyle = radial;
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fill();
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

export default Radial;
