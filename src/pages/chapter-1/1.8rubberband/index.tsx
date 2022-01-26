import { useEffect } from 'react';
import styles from './index.module.css';
import Res from '../../../res';

const { sprite } = Res;

function Section1_8_2() {
  useEffect(() => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const rubberbandDiv = document.querySelector(
      '#rubberbandDiv'
    ) as HTMLDivElement;
    const resetButton = document.querySelector('#resetButton') as HTMLElement;
    const image = new Image();
    const mousedown = {} as { x: number; y: number };
    // 橡皮筋放大框的属性
    let rubberbandRectangle = {} as {
      left: number;
      top: number;
      width: number;
      height: number;
    };
    let dragging = false;

    /**
     * 按下鼠标时计算橡皮筋框的起始位置
     * @param x
     * @param y
     */
    function rubberbandStart(x: number, y: number) {
      mousedown.x = x;
      mousedown.y = y;

      rubberbandRectangle.left = mousedown.x;
      rubberbandRectangle.top = mousedown.y;

      moveRubberbandDiv();
      showRubberbandDiv();

      dragging = true;
    }

    /**
     * 当出现橡皮筋框时移动鼠标计算出橡皮筋框的位置和大小
     * @param x
     * @param y
     */
    function rubberbandStretch(x: number, y: number) {
      rubberbandRectangle.left = x < mousedown.x ? x : mousedown.x;
      rubberbandRectangle.top = y < mousedown.y ? y : mousedown.y;

      rubberbandRectangle.width = Math.abs(x - mousedown.x);
      rubberbandRectangle.height = Math.abs(y - mousedown.y);

      moveRubberbandDiv();
      resizeRubberbandDiv();
    }

    /**
     * 抬起鼠标时绘制放大后的图像
     * 对橡皮筋框的拖放范围做了筛选,如果超出canvas范围了后就取canvas的边界
     */
    function rubberbandEnd() {
      const bbox = canvas.getBoundingClientRect();

      try {
        ctx?.drawImage(
          canvas,
          rubberbandRectangle.left - bbox.left < 0 ? 0 : rubberbandRectangle.left - bbox.left,
          rubberbandRectangle.top - bbox.top < 0 ? 0 : rubberbandRectangle.top - bbox.top,
          rubberbandRectangle.width + rubberbandRectangle.left > bbox.left + bbox.width ? bbox.left + bbox.width - rubberbandRectangle.left : rubberbandRectangle.width,
          rubberbandRectangle.height + rubberbandRectangle.top > bbox.top + bbox.height ? bbox.top + bbox.height - rubberbandRectangle.top : rubberbandRectangle.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
      } catch (error) {
        console.error(error);
      }

      resetRubberbandRectangle();

      rubberbandDiv.style.width = '0';
      rubberbandDiv.style.height = '0';

      hideRubberbandDiv();

      dragging = false;
    }

    /**
     * 移动橡皮筋
     */
    function moveRubberbandDiv() {
      rubberbandDiv.style.left = rubberbandRectangle.left + 'px';
      rubberbandDiv.style.top = rubberbandRectangle.top + 'px';
    }

    /**
     * 缩放橡皮筋
     */
    function resizeRubberbandDiv() {
      rubberbandDiv.style.width = rubberbandRectangle.width + 'px';
      rubberbandDiv.style.height = rubberbandRectangle.height + 'px';
    }

    function showRubberbandDiv() {
      rubberbandDiv.style.display = 'inline';
    }

    function hideRubberbandDiv() {
      rubberbandDiv.style.display = 'none';
    }

    function resetRubberbandRectangle() {
      rubberbandRectangle = { left: 0, top: 0, width: 0, height: 0 };
    }

    canvas.addEventListener('mousedown', function (e) {
      e.preventDefault();

      const x = e.clientX;
      const y = e.clientY;

      rubberbandStart(x, y);
    });

    window.addEventListener('mousemove', function (e) {
      e.preventDefault();

      const x = e.clientX;
      const y = e.clientY;

      if (dragging) {
        rubberbandStretch(x, y);
      }
    });

    window.addEventListener('mouseup', function (e) {
      e.preventDefault();

      rubberbandEnd();
    });

    image.onload = function () {
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    resetButton.addEventListener('click', function () {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
    });

    image.src = sprite;
  }, []);

  return (
    <div>
      <div id="controls" className={styles.controls}>
        <input type="button" value="Reset" id="resetButton" />
      </div>

      <div id="rubberbandDiv" className={styles.rubberbandDiv}></div>

      <canvas id="canvas" className={styles.canvas} width="800" height="520">
        Canvas not supported.
      </canvas>
    </div>
  );
}

export default Section1_8_2;
