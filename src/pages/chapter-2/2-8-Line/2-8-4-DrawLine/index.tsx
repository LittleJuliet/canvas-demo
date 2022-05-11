import { Component, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {}
interface State {}

class Drawline extends Component<Props, State> {
  startPoint: { x: number; y: number };
  canvasData: any;

  constructor(props: Props) {
    super(props);

    this.startPoint = { x: 0, y: 0 };
    this.canvasData = undefined;

    this.state = {};
  }

  componentDidMount(): void {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const mouseMoveFn = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(this.canvasData, 0, 0);
        this.drawLine(ctx, e.offsetX, e.offsetY);
      };

      const mouseUpFn = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        this.startPoint = { x: 0, y: 0 };
        this.canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        canvas.removeEventListener('mousemove', mouseMoveFn);
        canvas.removeEventListener('mouseup', mouseUpFn);
      };

      const mouseDownFn = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        this.startPoint = { x: e.offsetX, y: e.offsetY };
        this.canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        canvas.addEventListener('mousemove', mouseMoveFn);
        canvas.addEventListener('mouseup', mouseUpFn);
      };

      canvas.addEventListener('mousedown', mouseDownFn);
    }
  }

  drawLine(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const { x: startX, y: startY } = this.startPoint;
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
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

export default Drawline;
