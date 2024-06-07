import React from "react";
import "./NewApp.css"; // Import your CSS file for styling
import arrowIcon from "./arrow.png"; // Import the arrow icon
import hospitalityImage from "./Hospitality.png"; // Import the image for hospitality section
import dataCentersImage from "./Datacenters.png"; // Import the image for data centers section
import Residential from "./nnn.png"; // Import the image for data centers section
import Kitchen from "./Screenshot_2024-06-05_135237-removebg-preview.png"; // Import the image for data centers section
import FanMan from "./fanman.png"; // Import the image for data centers section


const NewApp = () => {
  return (
    <div className="newapp">
      <h1>applications</h1>
      <h2>various industries we cater to</h2>
      <div className="container">
        <div className="box boxorange1">
          <img
            src={hospitalityImage}
            alt="Hospitality"
            className="hospitality-image"
          />
          <span>Hospitality</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxblue2">
          <span>Healthcare</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxorange3">
          <img
            src={dataCentersImage}
            alt="Data Centers"
            className="datacenters-image"
          />
          <span>Data Centers</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxtall boxblue4">
          <img src={FanMan} alt="Hospitality" className="FanMan-image" />
          <span className="Supermarket">
            Supermarket &
            Hypermarket
          </span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxtall boxblue5">
          <span className="residential">Residential <br/>Servicess</span>

          <img
            src={Residential}
            alt="Hospitality"
            className="Residential-image"
          />
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxorange6">
          <span>Commercial Spaces</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxorangee">
          <span>Cold Room <br/>Storage</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxtall boxorange8">
          <span>Commercial<br/> Kitchen</span>
          <img src={Kitchen} alt="Hospitality" className="Kitchen-image" />
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default NewApp;
