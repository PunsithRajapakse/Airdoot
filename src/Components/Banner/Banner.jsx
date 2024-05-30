import React, { useState } from "react";
import "./Banner.css"; // Correct import path to your CSS file for styling
import bannerImage from "./img.jpg"; // Correct import path to your image file
import gifImage from "./snowflake.gif"; // Correct import path to your GIF file
import triangleImage from "./logo.png"; // Correct import path to your triangle image

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  // Define URL links for social icons
  const socialLinks = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    whatsapp: "https://web.whatsapp.com/",
    email: "mailto:example@example.com", // Replace example@example.com with your email
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
      <div className={`background-image ${showPopup ? "darken" : ""}`}>
        <img src={bannerImage} alt="Banner" className="image-background" />
        <div className="upper-left-text">
          Quality Air Conditioning <br />
          Repair Service
        </div>
        <div className="upper-right-text">
          Best <u>air-conditioning</u> <br />
          and <u>refrigeration</u> service in <b>India</b>
        </div>
        <img src={triangleImage} alt="Triangle" className="triangle-image" />
      </div>
      <div className="content">
        <div className="search-container">
          <input type="text" placeholder="Find Us In Your Area" />
          <button className="enter-pincode-button" onClick={handleButtonClick}>
            Enter Pincode
          </button>
        </div>
      </div>
      <div className={`social-icons ${showPopup ? "darken" : ""}`}>
        <FontAwesomeIcon
          icon={faInstagram}
          className="social-icon instagram"
          onClick={() => handleSocialIconClick(socialLinks.instagram)}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className="social-icon email"
          onClick={() => handleSocialIconClick(socialLinks.email)}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="social-icon facebook"
          onClick={() => handleSocialIconClick(socialLinks.facebook)}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="social-icon linkedin"
          onClick={() => handleSocialIconClick(socialLinks.linkedin)}
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="social-icon youtube"
          onClick={() => handleSocialIconClick(socialLinks.youtube)}
        />
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="social-icon whatsapp"
          onClick={() => handleSocialIconClick(socialLinks.whatsapp)}
        />
      </div>

      {/* Popup messages */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-box success">
            <div className="popup-content">
              <button className="close-button" onClick={handleClosePopup}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="popup-message">
                Thank you we are available in your location. Click continue
              </div>
              <button className="popup-button">Book Service</button>
            </div>
          </div>
          <div className="popup-box error">
            <div className="popup-content">
              <button className="close-button" onClick={handleClosePopup}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="popup-message">
                We are not currently available in your location. But you can
                request our presence and we will arrive!
              </div>
              <button className="popup-button">Request Service</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
