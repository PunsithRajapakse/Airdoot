

import React from 'react';
import './Banner.css'; // Correct import path to your CSS file for styling
import bannerVideo from './banner01.mp4'; // Correct import path to your video file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="banner">
      <div className="background-video">
        {/* Embed your background video */}
        <video autoPlay loop muted className="video-background">
          <source src={bannerVideo} type="video/mp4" /> {/* Use imported video file */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <div className="search-container">
          {/* Your centered search bar */}
          <input type="text" placeholder="Search..." />
          {/* Search icon */}
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
