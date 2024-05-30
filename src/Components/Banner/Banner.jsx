import React, { useState } from "react";
import "./Banner.css";
import bannerImage from "./img.jpg";
import triangleImage from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    whatsapp: "https://web.whatsapp.com/",
    email: "mailto:example@example.com",
  };

  const handleSocialIconClick = (link) => {
    window.open(link, "_blank");
  };

  const [showPopup, setShowPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRequestService = () => {
    setShowFormPopup(true);
    setShowPopup(false);
  };

  const handleCloseFormPopup = () => {
    setShowFormPopup(false);
  };

  return (
    <div className={`banner ${showFormPopup ? "blur-background" : ""}`}>
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
              <button className="popup-button" onClick={handleRequestService}>
                Book service
              </button>
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
              <button className="popup-button" onClick={handleRequestService}>
                Request Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form popup */}
      {showFormPopup && (
        <div className="popup-container">
          <div className="popup-box">
            <div className="popup-content">
              <button className="close-button" onClick={handleCloseFormPopup}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="popup-message1">
                <div className="form-container">
                  <form className="contact-form">
                    <input type="text" placeholder="Name" className="form-input" />
                    <input type="text" placeholder="Phone" className="form-input" />
                    <input type="email" placeholder="Email" className="form-input" />
                    <input type="text" placeholder="Address" className="form-input" />
                    <div className="form-row">
                      <input type="text" placeholder="City" className="form-input half" />
                      <input type="text" placeholder="State" className="form-input half" />
                    </div>
                    <input type="text" placeholder="Pincode" className="form-inputpin" />
                    <select className="form-input">
                      <option>Looking for</option>
                      <option>Servicing</option>
                      <option>Repair</option>
                      <option>Annual Maintenance Contract</option>
                      <option>Inspection</option>
                      <option>Installation</option>
                      <option>Spare Parts</option>
                      <option>Upgrade/Retrofit</option>
                      <option>Design & Estimation</option>
                      <option>Operations & Maintenance</option>
                      <option>Something else</option>
                    </select>
                    <textarea placeholder="Message" className="form-input"></textarea>
                    <button type="submit" className="form-submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
