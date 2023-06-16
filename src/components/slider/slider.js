import React from 'react';

import './styles.scss';

export default function Slider({ onText, offText, setValue, style, isPopup }) {
  return (
    <div className="slider" style={style}>
      {
        isPopup ? <span className="slider-text">Basic <span className='text-bold'>{offText}</span></span> : <span className="slider-text">{offText}</span>
      }
      <label className="switch-container">
        <input type="checkbox" onChange={e => setValue(e.target.checked)} defaultChecked />
        <span className="switch" />
      </label>
      {
        isPopup ? <span className="slider-text">Basic <span className='text-bold'>{onText}</span></span> : <span className="slider-text">{onText}</span>
      }
    </div>
  );
}
