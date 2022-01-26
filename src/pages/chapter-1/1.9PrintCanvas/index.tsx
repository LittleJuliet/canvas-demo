import { useEffect, useRef } from 'react';

let loop: any = 0;

function Section1_9() {
  const canvas = useRef<any>();
  const context = useRef<any>();

  useEffect(() => {
    context.current = canvas.current.getContext('2d');
    init();

    return () => clearInterval(loop);
  }, []);

  function init() {
    const FONT_HEIGHT = 15,
      MARGIN = 35,
      HAND_TRUNCATION = canvas.current.width / 30,
      MINUTES_HAND_TRUNCATION = canvas.current.width / 20,
      HOUR_HAND_TRUNCATION = canvas.current.width / 8,
      NUMERAL_SPACING = 20,
      RADIUS = canvas.current.width / 2 - MARGIN,
      HAND_RADIUS = RADIUS + NUMERAL_SPACING;

    const buttonObj = document.querySelector('#snapshotButton') as HTMLInputElement;
    const imageObj = document.querySelector('#snapshotImageElement') as HTMLImageElement;

    // 画时钟的外圈
    function drawCircle() {
      context.current.beginPath();
      context.current.arc(
        canvas.current.width / 2,
        canvas.current.height / 2,
        canvas.current.width / 2 - 1,
        0,
        Math.PI * 2,
        true
      );
      context.current.stroke();
    }

    // 画时钟的数字
    function drawNumerals() {
      let numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        angle = 0,
        numeralWidth = 0;

      numerals.forEach(function (numeral) {
        angle = (Math.PI / 6) * (numeral - 3);
        numeralWidth = context.current.measureText(numeral).width;
        context.current.fillText(
          numeral,
          canvas.current.width / 2 +
            Math.cos(angle) * HAND_RADIUS -
            numeralWidth / 2,
          canvas.current.height / 2 +
            Math.sin(angle) * HAND_RADIUS +
            FONT_HEIGHT / 3
        );
      });
    }

    // 画时钟的中心
    function drawCenter() {
      context.current.beginPath();
      context.current.arc(
        canvas.current.width / 2,
        canvas.current.height / 2,
        5,
        0,
        Math.PI * 2,
        true
      );
      context.current.fill();
    }

    // 画时钟的时针/分针/秒针
    function drawHand(loc: number, isHour: number) {
      // 起始位置为3小时处(即0度位置)
      const angle = Math.PI * 2 * (loc / 60) - Math.PI / 2,
        handRadius =
          isHour === 1
            ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION
            : isHour === 2
            ? RADIUS - HAND_TRUNCATION - MINUTES_HAND_TRUNCATION
            : RADIUS - HAND_TRUNCATION;
      context.current.moveTo(
        canvas.current.width / 2,
        canvas.current.height / 2
      );
      context.current.lineTo(
        canvas.current.width / 2 + Math.cos(angle) * handRadius,
        canvas.current.height / 2 + Math.sin(angle) * handRadius
      );
      context.current.stroke();
    }

    function drawHands() {
      let date = new Date(),
        hour = date.getHours();

      hour = hour > 12 ? hour - 12 : hour;

      // 以60为基准来计算度数
      drawHand(hour * 5 + (date.getMinutes() / 60) * 5, 1); // 画时针
      drawHand(date.getMinutes(), 2); // 画分针
      drawHand(date.getSeconds(), 3); // 画秒针
    }

    // 画时钟
    function drawClock() {
      context.current.clearRect(
        0,
        0,
        canvas.current.width,
        canvas.current.height
      );

      drawCircle();
      drawCenter();
      drawHands();
      drawNumerals();
    }

    context.current.font = FONT_HEIGHT + 'px Arial';
    loop = setInterval(drawClock, 1000);

    buttonObj.addEventListener('click', function (e) {
      let dataUrl;

      if (buttonObj.value === 'Take snapshot') {
        dataUrl = canvas.current.toDataURL();
        clearInterval(loop);
        imageObj.src = dataUrl;
        imageObj.style.display = 'inline';
        canvas.current.style.display = 'none';
        buttonObj.value = 'Return to canvas';
      } else {
        canvas.current.style.display = 'inline';
        imageObj.style.display = 'none';
        loop = setInterval(drawClock, 1000);
        buttonObj.value = 'Take snapshot';
      }
    })
  }

  return (
    <div>
      <div id="controls">
        <input id="snapshotButton" type="button" value="Take snapshot" />
      </div>

      <img id="snapshotImageElement" />

      <canvas
        ref={(ref) => (canvas.current = ref)}
        id="canvas"
        width="600"
        height="600"
        style={{ border: 'none' }}
      >
        Canvas not supported
      </canvas>
    </div>
  );
}

export default Section1_9;
