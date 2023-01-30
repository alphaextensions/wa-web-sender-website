import React from 'react';
import '../css/howToUseCard.css'

const Ucard = ({ imgSrc, title, description }) => {
  return (
    <div className='ucard'>
      <img src={imgSrc} alt={title} />
      <h3 style={{fontWeight:700}}>{title}</h3>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Ucard;
