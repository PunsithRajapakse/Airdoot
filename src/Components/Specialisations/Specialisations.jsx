import React from 'react';
import './Specialisations.css';
import airconditioningImg from './ac1-removebg-preview.png';
import refrigerationImg from './ac2-removebg-preview.png';
import ventilationImg from './ac3-removebg-preview.png';
import ancillaryImg from './ac4-removebg-preview.png';
import extraImg from './Screenshot_2024-06-03_091144-removebg-preview.png';

const Specialisations = () => {
  return (
    <div className="specialisations-container">
      <h1>our specialisations</h1>
      <p>Pick the air-conditioner you<br/> are looking to service</p>
      <div className="specialisations-options">
        <div className="specialisation">
          <img src={airconditioningImg} alt="Airconditioning" />
          <p>Airconditioning</p>
        </div>
        <div className="specialisation">
          <img src={refrigerationImg} alt="Refrigeration" />
          <p>Refrigeration</p>
        </div>
        <div className="specialisation">
          <img src={ventilationImg} alt="Ventilation" />
          <p>Ventilation</p>
        </div>
        <div className="specialisation">
          <img src={ancillaryImg} alt="Ancillary" />
          <p>Ancillary</p>
        </div>
      </div>
      <div className="extra-image-container">
        <img src={extraImg} alt="Extra" />
      </div>
    </div>
  );
};

export default Specialisations;
