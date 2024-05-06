import React, { useRef, useEffect, useState } from 'react';
import './WhatAllWeDo.css'; // Import CSS file for styling
import image1 from './01.png'; // Import your images
import image2 from './02.png';
import image3 from './03.png';
import image4 from './04.png';
import { useInView } from 'react-intersection-observer';

const WhatAllWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation is triggered only once
    threshold: 0.5 // Specifies when the element should be considered in view
  });

  return (
    <div className= {`wedo ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="topic-container">
        <h2>What All We Do</h2>
      </div>
      <div className="boxes-container">
        <div className={`box ${inView ? 'animated' : ''}`}>
          <img src={image1} alt="Air Conditioning" className="image" />
          <h3>Air Conditioning</h3>
          <p>Services offered for residential, commercial, education, healthcare and more.</p>
        </div>
        <div className={`box ${inView ? 'animated' : ''}`}>
          <img src={image2} alt="Refrigeration" className="image" />
          <h3>Refrigeration</h3>
          <p>Services offered for hypermarkets, cold rooms, warehouses and more.</p>
        </div>
        <div className={`box ${inView ? 'animated' : ''}`}>
          <img src={image3} alt="Ventilation" className="image" />
          <h3>Ventilation</h3>
          <p>Services offered for factories, carparks, commercial kitchens and more.</p>
        </div>
        <div className={`box ${inView ? 'animated' : ''}`}>
          <img src={image4} alt="Ancillary" className="image" />
          <h3>Ancillary</h3>
          <p>Services offered for BMS, electrical, pumps, cooling towers and more.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatAllWeDo;
