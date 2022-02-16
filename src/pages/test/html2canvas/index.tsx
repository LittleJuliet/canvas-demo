import html2canvas from 'html2canvas';
import styles from './index.module.css';
import Res from '../../../res';

const { sprite } = Res;

function Html2CanasDemo() {
  function downloadImage() {
    const container = document.querySelector('#container') as HTMLElement;
    const newCanvas = document.createElement('canvas');
    newCanvas.width = 500;
    newCanvas.height = 500;
    html2canvas(container, { canvas: newCanvas }).then((canvas) => {
      const url = canvas.toDataURL();
      const aObj = document.querySelector('#download') as HTMLAnchorElement;
      aObj.setAttribute('href', url);
    });
  }

  return (
    <div>
      <div id="container" className={styles.container}>
        <div className={styles.text}>这是一段文字</div>
        <img className={styles.img} src={sprite} />
      </div>
      <button className={styles.button} onClick={downloadImage}>
        转换
      </button>
      <a id="download" href="#" className={styles.download} download="downImg">
        下载图片
      </a>
    </div>
  );
}

export default Html2CanasDemo;
