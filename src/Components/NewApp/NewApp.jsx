import React from "react";
import "./NewApp.css"; // Import your CSS file for styling
import arrowIcon from "./arrow.png"; // Import the arrow icon

const NewApp = () => {
  return (
    <div className="newapp">
      <h1>Applications</h1>
      <h2>Various industries we cater to</h2>
      <div className="container">
        <div className="box boxorange1">
          <span>Hospitality</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxblue2">
          <span>Healthcare</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxorange3">
          <span>Data Centers</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxtall boxblue4">
          <span>
            Supermarket & <br />
            Hypermarket
          </span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxtall boxblue5">
          <span>Residential</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxorange6">
          <span>Commercial Spaces</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxorange7">
          <span>Project Reports</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
        <div className="box boxtall boxorange8">
          <span>Commercial Kitchen</span>
          <img src={arrowIcon} alt="Arrow" className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default NewApp;
