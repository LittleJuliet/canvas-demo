import { Component, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {}
interface State {}

class DragBox extends Component<Props, State> {
  box: Array<{ x: number; y: number }>;
  startPoint: { x: number; y: number };

  constructor(props: Props) {
    super(props);

    this.state = {};

    this.box = [
      { x: 0, y: 0 },
      { x: 50, y: 0 },
      { x: 50, y: 50 },
      { x: 0, y: 50 },
    ];
    this.startPoint = { x: 0, y: 0 };
  }

  componentDidMount(): void {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      this.drawBox(ctx);

      const mouseMoveFn = (e: MouseEvent) => {
        const { x: startX, y: startY } = this.startPoint;
        const { offsetX: x, offsetY: y } = e;
        const moveW = x - startX,
          moveH = y - startY;

        // 盒子超出canvas范围
        if (
          this.box[1].x + moveW > canvas.width ||
          this.box[3].y + moveH > canvas.height ||
          this.box[0].x + moveW < 0 ||
          this.box[0].y + moveH < 0
        )
          return;
        this.box.forEach((item) => {
          item.x = item.x + moveW;
          item.y = item.y + moveH;
        });

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBox(ctx);
        this.startPoint = { x, y };
      };

      const mouseUpFn = (e: MouseEvent) => {
        canvas.removeEventListener('mousemove', mouseMoveFn);
        window.removeEventListener('mouseup', mouseUpFn);
      };

      const mouseDownFn = (e: MouseEvent) => {
        const { offsetX: x, offsetY: y } = e;
        if (
          x < this.box[1].x &&
          x > this.box[0].x &&
          y < this.box[3].y &&
          y > this.box[0].y
        ) {
          this.startPoint = { x, y };
          canvas.addEventListener('mousemove', mouseMoveFn);
          window.addEventListener('mouseup', mouseUpFn);
        }
      };

      canvas.addEventListener('mousedown', mouseDownFn);
    }
  }

  drawBox(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(
      this.box[0].x,
      this.box[0].y,
      this.box[1].x - this.box[0].x,
      this.box[3].y - this.box[0].y
    );
  }

  render(): ReactNode {
    return (
      <div className={styles.container}>
        <canvas className={styles.canvas} width={1000} height={500}>
          No Support.
        </canvas>
      </div>
    );
  }
}

export default DragBox;
