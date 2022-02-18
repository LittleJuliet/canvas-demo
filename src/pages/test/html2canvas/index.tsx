import html2canvas from 'html2canvas';
import styles from './index.module.css';
import Res from '../../../res';

const { sprite } = Res;

function Html2CanasDemo() {
  function downloadImage() {
    const container = document.querySelector('#container') as HTMLElement;
    html2canvas(container).then((canvas) => {
      const url = canvas.toDataURL();
      const aObj = document.querySelector('#download') as HTMLAnchorElement;
      aObj.setAttribute('href', url);
      aObj.setAttribute('download', 'downImg');
    });
  }

  return (
    <div>
      <div id="container" className={styles.container}>
        <div className={styles.text}>这是一段文字</div>
        <img className={styles.img} src={sprite} />
      </div>
      <div className={styles.bottomContent}>
        <button className={styles.button} onClick={downloadImage}>
          转换
        </button>
        <a id="download" href="#" className={styles.download}>
          下载图片
        </a>
      </div>
    </div>
  );
}

export default Html2CanasDemo;
