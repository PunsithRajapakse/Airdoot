import React from 'react';
import './choose.css';


function Choose() {
  return (
    <div className="container">
      <h1 className="header">Why choose us?</h1>
      <div className="content">
        <div className="left">
          <ul className="list">
            <li><img src="assets/PngItem_2995999 1.png" alt="Logo 1" /> Item 1</li>
            <li><img src="assets/pngimg 1.png" alt="Logo 2" /> Item 2</li>
            <li><img src="assets/png-clipart-air-condit.png" alt="Logo 3" /> Item 3</li>
            <li><img src="assets/1-removebg-preview 1.png" alt="Logo 4" /> Item 4</li>
            <li><img src="assets/png-transparent-air.png" alt="Logo 5" /> Item 5</li>
          </ul>
        </div>
        <div className="middle">
          <img src="assets/middle-image.png" alt="Middle-Image" />
        </div>
        <div className="right">
          <ul className="list">
            <li><img src="assets/blue-star-vrf-side-disch.png" alt="Logo 6" /> Item 6</li>
            <li><img src="logo7.png" alt="Logo 7" /> Item 7</li>
            <li><img src="logo8.png" alt="Logo 8" /> Item 8</li>
            <li><img src="logo9.png" alt="Logo 9" /> Item 9</li>
            <li><img src="logo10.png" alt="Logo 10" /> Item 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Choose;