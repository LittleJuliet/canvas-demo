//@ts-nocheck
import React, { useEffect } from 'react';
import Res from '../../../res';

const { sprite } = Res;

function Section1_6_1() {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLElement;
    const ctx = canvas.getContext('2d');
    const readout = document.getElementById('readout') as HTMLElement;
    const spritesheet = new Image();

    /**
     * 渲染背景
     */
    function drawBackground() {
      let VERTICAL_LINE_SPACING = 12,
        i = canvas.width;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'lightgray';
      ctx.lineWidth = 0.5;

      while (i > VERTICAL_LINE_SPACING * 4) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
        i -= VERTICAL_LINE_SPACING;
      }
    }

    /**
     * 画雪碧图
     */
    function drawSpritesheet() {
      ctx.drawImage(spritesheet, 0, 0);
    }

    /**
     * 画辅助线
     * @param x
     * @param y
     */
    function drawGuidelines(x, y) {
      ctx.strokeStyle = 'rgba(0,0,230,0.8)';
      ctx.lineWidth = 0.5;
      drawHorizontalLine(y);
      drawVerticalLine(x);
    }

    /**
     * 更新文字的内容
     * @param x
     * @param y
     */
    function updateReadout(x, y) {
      readout.innerText = `(${x.toFixed(0)}, ${y.toFixed(0)})`;
    }

    /**
     * 画水平辅助线
     * @param y
     */
    function drawHorizontalLine(y) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(canvas.width, y + 0.5);
      ctx.stroke();
    }

    /**
     * 画垂直辅助线
     * @param x
     */
    function drawVerticalLine(x) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, canvas.height);
      ctx.stroke();
    }

    // 鼠标移动事件
    canvas.addEventListener('mousemove', function(e) {
      const loc = window2canvas(canvas, e.clientX, e.clientY);

      drawBackground();
      drawSpritesheet();
      drawGuidelines(loc.x, loc.y);
      updateReadout(loc.x, loc.y);
    })

    spritesheet.src = sprite;
    spritesheet.onload = function(e) {
      drawSpritesheet();
    }

    drawBackground();

    // 通过鼠标点击事件获取到的鼠标位置计算出鼠标位于canvas的位置
    function window2canvas(canvas, x, y) {
      const bbox = canvas.getBoundingClientRect();
      return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height),
      };
    }
  }, []);

  return (
    <div>
      <div
        id="readout"
        style={{ marginTop: 10, marginLeft: 10, color: 'blue' }}
      ></div>
      <canvas
        id="canvas"
        width="500"
        height="250"
        style={{
          backgroundColor: '#fff',
          borderWidth: 'thin',
          borderColor: '#000',
          borderStyle: 'insert',
          cursor: 'pointer',
        }}
      >
        Canvas not supported
      </canvas>
    </div>
  );
}

export default Section1_6_1;
