import React, { useState } from 'react';
import './Banner.css'; // Correct import path to your CSS file for styling
import bannerImage from './img.png'; // Correct import path to your image file
import gifImage from './snowflake.gif'; // Correct import path to your GIF file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  // Define URL links for social icons
  const socialLinks = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    whatsapp: "https://web.whatsapp.com/",
    email: "mailto:example@example.com" // Replace example@example.com with your email
  };

  // Function to handle social icon click
  const handleSocialIconClick = (link) => {
    window.open(link, "_blank"); // Open link in a new tab
  };

  // State to manage popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setShowPopup(true); // Show popup
  };

  // Function to handle closing popup
  const handleClosePopup = () => {
    setShowPopup(false); // Hide popup
  };

  return (
    <div className="banner">
      <div className={`background-image ${showPopup ? 'darken' : ''}`}>
        <img src={bannerImage} alt="Banner" className="image-background" />
        <div className="upper-right-text">Best AC Repair <br />And Services In India</div>
      </div>
      <div className="content">
        <div className="search-container">
          <input type="text" placeholder="Find Us In Your Area" />
          <button className="enter-pincode-button" onClick={handleButtonClick}>Enter Pincode</button>
        </div>
      </div>
      <div className={`social-icons ${showPopup ? 'darken' : ''}`}>
        <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" onClick={() => handleSocialIconClick(socialLinks.instagram)} />
        <FontAwesomeIcon icon={faEnvelope} className="social-icon email" onClick={() => handleSocialIconClick(socialLinks.email)} />
        <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" onClick={() => handleSocialIconClick(socialLinks.facebook)} />
        <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" onClick={() => handleSocialIconClick(socialLinks.linkedin)} />
        <FontAwesomeIcon icon={faYoutube} className="social-icon youtube" onClick={() => handleSocialIconClick(socialLinks.youtube)} />
        <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" onClick={() => handleSocialIconClick(socialLinks.whatsapp)} />
      </div>

      {/* Popup messages */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-box success">
            <div className="popup-content">
              <button className="close-button" onClick={handleClosePopup}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="popup-message">Thank you for your request. We are working to find the best service and deals for you</div>
              <button className="popup-button">BUY</button>
            </div>
          </div>
          <div className="popup-box error">
            <div className="popup-content">
              <button className="close-button" onClick={handleClosePopup}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="popup-message">Thank you for your request. We are unable to continue the process</div>
              <button className="popup-button">Request Service</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
