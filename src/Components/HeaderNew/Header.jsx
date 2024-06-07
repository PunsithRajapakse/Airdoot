import React, { useState } from 'react';
import './Header.css';
import cart from "./3.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
        <div className={`header-buttons ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="header-button" onClick={closeMobileMenu}>ABOUT US</div>
          <div className="header-button" onClick={closeMobileMenu}>CONTACT US</div>
          <div className="header-button" onClick={closeMobileMenu}>JOIN AS A PARTNER</div>
          <div className="header-button" onClick={closeMobileMenu}>SIGN UP / LOG IN</div>
        </div>
        <div className="header-cart">
          <img src={cart} alt="Cart" />
        </div>
      </div>
    </header>
  );
}

export default Header;
