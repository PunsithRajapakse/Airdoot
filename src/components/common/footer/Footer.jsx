import React from "react";
import "./footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column" style={{ width: "25%" }}>
        <div className="logo">
          <img src="Assets/alogo.png" alt="Logo" />
          <p>Best AC Repair And Services In India</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/airdoot.lk/"
            className="social-icon"
            target="_blank"
          >
            <i className="fab fa-facebook" style={{ color: "#ffffff" }}></i>
          </a>
          <a
            href="https://www.instagram.com/airdoot/"
            className="social-icon"
            target="_blank"
          >
            <i className="fab fa-instagram" style={{ color: "#ffffff" }}></i>
          </a>
          <a
            href="https://www.linkedin.com/company/airdoot-india-pvt-ltd/?originalSubdomain=in"
            className="social-icon"
            target="_blank"
          >
            <i className="fab fa-linkedin" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
      </div>
      <div className="column" style={{ width: "15%" }}>
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
      <div className="column" style={{ width: "25%" }}>
        <h3>Sign Up Our Newsletter</h3>
        <p>Stay up to update with our latest news and products</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Submit</button>
        </div>
        <div className="cservice">
          <h3>Coming Soon Services</h3>
        </div>
      </div>
      <div className="column" style={{ width: "25%" }}>
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
          <div className="app">
            <div className="icon">
              <p>GET THE PARTNER APP</p>
            </div>
            <div className="store-icons">
              <FaGooglePlay />
              <FaAppStoreIos />
            </div>
          </div>
        </div>
      </div>
      <div className="additional-links" style={{ width: "100%" }}>
        <p>2024 © AirDoot Pte Ltd</p>
        <div className="vertical-line"></div>
        <p>
          <a href="">Privacy Policy</a>
        </p>
        <div className="vertical-line"></div>
        <p>
          <a href="">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
