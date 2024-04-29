import React from "react";
import "./footer.css"; // Import your CSS file for styling
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import relevant icons from react-icons library

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <div className="logo">
          <img src="Assets/alogo.png" alt="Logo" />
          <p>Best AC Repair And Services In India</p>
        </div>
        <div className="social-icons">
          <a href="#" className="social-icon" target="_blank">
            <i className="fab fa-facebook" style={{ color: "#ffffff" }}></i>
          </a>
          <a href="#" className="social-icon" target="_blank">
            <i className="fab fa-linkedin" style={{ color: "#ffffff" }}></i>
          </a>
          <a href="#" className="social-icon" target="_blank">
            <i className="fab fa-instagram" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
      </div>
      <div className="column">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Sign up for our newsletter</h3>
        <p>Stay up to update with our latest news and products</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Submit</button>
        </div>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info">
              <p>Mumbai</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <FaPhone />
            </div>
            <div className="info">
              <p>+91 897 674 1999</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div className="info">
              <p>customercare@airdoot.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="additional-links">
        <p>2024 © AirDoot Pte Ltd</p>
        <p><a href="#">Privacy Policy</a></p>
        <p><a href="#">Terms & Conditions</a></p>
      </div> */}
    </footer>
    
    
  );
};

export default Footer;
