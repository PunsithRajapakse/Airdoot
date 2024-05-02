import React from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook
import "./Choose.css";

const Choose = () => {
  const history = useHistory(); // Initialize useHistory hook

  // Function to handle image click and navigate to service.jsx
  const handleImageClick = () => {
    history.push("../../services"); // Navigate to the '/service' route
  };

  return (
    <div className="choose">
      <h1 className="header1">Why choose Us</h1>
      <div className="content1">
        <div className="left">
          <ul className="list1">
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose7.png" alt="Logo 1" /> <div className="name1"> split ac</div>
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose6.png" alt="Logo 2" /> <div className="name1"> Window ac</div>
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose5.png" alt="Logo 3" /> <div className="name1"> cassette ac</div>
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose10.png" alt="Logo 4" /><div className="name1">  Tower ac</div>
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose8.png" alt="Logo 5" /> <div className="name1"> Ductable AC
              <br/>(FCU)</div>
            </li>
          </ul>
        </div>
        <div className="middle">
          <img
            src="Assets/Choose/airdootman.png"
            alt="Middle-Image"
            onClick={handleImageClick}
          />
        </div>
        <div className="right">
          <ul className="list2">
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose2.png" alt="Logo 6" /><div className="name2"> Ductable AC
              (Mid-Static)</div>
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose3.png" alt="Logo 7" /> <div className="name2"> Ductable AC <br/> (Hi-Static) </div>
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose4.png" alt="Logo 8" /> <div className="name2">VRF SIDE
              DISCHARGE</div>
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose9.png" alt="Logo 9" /> <div className="name2">Packaged Unit
              (Hi-Static)</div> 
            </li>
            <li onClick={handleImageClick}>
              <img src="Assets/Choose/choose1.png" alt="Logo 10" /> <div className="name2">VRF TOP
              DISCHARGE</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Choose;
