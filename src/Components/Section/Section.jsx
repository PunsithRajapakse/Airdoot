import React from 'react';
import './Section.css';
import sunIcon from './SunIcon.png'; // Update the path accordingly

const Section = () => {
  return (
    <div className="container">
      <img src={sunIcon} alt="Sun Icon" className="icon" />
      <p className="text">
        a quick and easy multifaceted <br/>platform where customers can
        <br />
        book, buy, track and manage their <br/><u>HVAC</u> needs
      </p>
    </div>
  );
}

export default Section;
