import React from 'react';
import './Banner.css'; // Correct import path to your CSS file for styling
import bannerImage from './Banner_img.png'; // Correct import path to your image file
import gifImage from './snowflake.gif'; // Correct import path to your GIF file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="banner">
      <div className="background-image">
        {/* Embed your background image */}
        <img src={bannerImage} alt="Banner" className="image-background" /> {/* Use imported image file */}
        {/* Add GIFs in the upper left and lower right corners */}
        <img src={gifImage} alt="Upper Left Corner GIF" className="corner-gif upper-left" />
        <img src={gifImage} alt="Lower Right Corner GIF" className="corner-gif lower-right" />
        {/* Add text in the upper right corner */}
        <div className="upper-right-text">Best AC Repair <br/>And Services In India</div>
      </div>
      <div className="content">
        <h1 className="banner-text">Find Us In Your Area</h1>
        <div className="search-container">
          {/* Your centered search bar */}
          <input type="text" placeholder="Enter Pin Code" />
          {/* Search icon */}
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
