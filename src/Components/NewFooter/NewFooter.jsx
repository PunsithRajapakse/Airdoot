import React from "react";
import "./NewFooter.css";
import logo from "./AIRDOOT-.png"; // Adjust the path if necessary

const NewFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>
      <div className="footer-logo">
        <img src={logo} alt="AIRDOOT Logo" />
      </div>
      <div className="footer-overlay">
        <div className="footer-left">
          <div className="footer-contact">
            <div className="contact-item">
              123 Anywhere St. Any City, ST 12345
            </div>
            <div className="contact-item">+91 897 674 1999</div>
            <div className="contact-item">customercare@airdoot.com</div>
            <div className="footer-socials">
              <div className="socials-box">
                <p>SOCIALS</p>
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-hours">
            <p>
              Monday to Friday
              <br />
              9:00 am to 6:00 pm
              <br />
              Saturday
              <br />
              9:00 am to 12 noon
              <br /><br/>
              Sunday by appointment only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
