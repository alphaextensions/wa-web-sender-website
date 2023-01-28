import React from 'react';
import '../css/howToUseCard.css'

const Ucard = ({ imgSrc, title, description }) => {
  return (
    <div className='ucard'>
      <img src={imgSrc} alt={title} />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Ucard;
