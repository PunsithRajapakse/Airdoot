import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './choose.css';

const Choose = () => {
  const history = useHistory(); // Initialize useHistory hook

  // Function to handle image click and navigate to service.jsx
  const handleImageClick = () => {
    history.push('/service'); // Navigate to the '/service' route
  };

  return (
    <div className="container1">
      <h1 className="header1">Why choose us?</h1>
      <div className="content1">
        <div className="left">
          <ul className="list1">
            <li onClick={handleImageClick}><img src="../images/AC/01.png" alt="Logo 1" /> split ac</li>
            <li onClick={handleImageClick}><img src="../images/AC/02.png" alt="Logo 2" /> Window ac</li>
            <li onClick={handleImageClick}><img src="../images/AC/03.png" alt="Logo 3" /> cassette ac</li>
            <li onClick={handleImageClick}><img src="../images/AC/04.png" alt="Logo 4" /> Tower ac</li>
            <li onClick={handleImageClick}><img src="../images/AC/05.png" alt="Logo 5" /> Ductable AC (F C U)</li>
          </ul>
        </div>
        <div className="middle">
          <img src="./images/Layer 9.png" alt="Middle-Image" onClick={handleImageClick} />
        </div>
        <div className="right">
          <ul className="list1">
            <li onClick={handleImageClick}><img src="../images/AC/06.png" alt="Logo 6" /> Ductable AC (Mid-Static)</li>
            <li onClick={handleImageClick}><img src="../images/AC/07.png" alt="Logo 7" /> Ductable AC (Hi-Static)</li>
            <li onClick={handleImageClick}><img src="../images/AC/08.png" alt="Logo 8" /> VRF SIDE DISCHARGE</li>
            <li onClick={handleImageClick}><img src="../images/AC/09.png" alt="Logo 9" /> Packaged Unit (Hi-Static)</li>
            <li onClick={handleImageClick}><img src="../images/AC/10.png" alt="Logo 10" /> VRF TOP DISCHARGE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Choose;
