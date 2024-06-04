import React from 'react';
import './NewApp.css'; // Import your CSS file for styling

const NewApp = () => {
    return (
      <div className="newapp">
        <h1>Applications</h1>
        <h2>Various industries we cater to</h2>
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
          <div className="box boxtall boxblue4">
            <span>Supermarket & <br/>Hypermarket</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxtall boxblue5">
            <span>Residential</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxorange6">
            <span>Commercial Spaces</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxorange7">
            <span>Project Reports</span>
            <span className="arrow">➡</span>
          </div>
          <div className="box boxtall boxorange8">
            <span>Commercial Kitchen</span>
            <span className="arrow">➡</span>
          </div>
        </div>
      </div>
    );
};

export default NewApp;
