import React from 'react';

import './styles.scss';

export default function Slider({ onText, offText, setValue, style }) {
  return (
    <div className="slider" style={style}>
      <span className="slider-text">{offText}</span>
      <label className="switch-container">
        <input type="checkbox" onChange={e => setValue(e.target.checked)} defaultChecked />
        <span className="switch" />
      </label>
      <span className="slider-text">{onText}</span>
    </div>
  );
}
