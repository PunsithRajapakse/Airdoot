import React from 'react';
import './NewApp.css'; // Import your CSS file for styling


const NewApp= () => {
    return (
      <div className="app">
        <h1>Applications</h1>
        <div className="container">
          <div className="box boxorange1">
            <span>Hospitality</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxblue2">
            <span>Healthcare</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxorange3">
            <span>Data Centers</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxblue4">
            <span>Supermarket & <br/>Hypermarket</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxblue5">
            <span>Residential</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxorange6">
            <span>Commercial Kitchen</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxblue7">
            <span>Cold Room<br/>Storage</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxorange8">
            <span>Commercial Kitchen</span>
            <span className="arrow">➡</span>
          </div>
        </div>
        {/* <div className="illustrations">
          <div className="left-illustration">
            <img src={LeftImage} alt="Man with fan" />
          </div>
          <div className="right-illustration">
            <img src={RightImage} alt="Woman with fan" />
          </div>
        </div> */}
      </div>
    );
  };
export default NewApp;
