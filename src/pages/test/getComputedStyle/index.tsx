import { useEffect, useState } from 'react';
import './index.css';

function GetComputedStyleDemo() {
  const [cssStyle, setCssStyle] = useState<any>();

  useEffect(() => {
    setCssStyle(window.getComputedStyle(document.querySelector('.test-div') as HTMLElement, null));
  }, []);

  function changeCss() {
    const divObj = document.querySelector('.test-div') as HTMLElement;
    divObj.style.marginTop = '100px';
    setCssStyle(window.getComputedStyle(divObj, null));
  }

  return (
    <div>
      <button onClick={changeCss}>Change Css</button>
      <div className='test-div'>This is a test div.</div>
      <div>margin-top: {cssStyle?.marginTop}</div>
    </div>
  );
}

export default GetComputedStyleDemo;
