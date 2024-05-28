import React from 'react';
import './Header.css';
import cart from "./carticon.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-button">ABOUT US</div>
      <div className="header-button">CONTACT US</div>
      <div className="header-button">JOIN AS A PARTNER</div>
      <div className="header-button">SIGN UP / LOG IN</div>
      <div className="header-cart">
        <img src={cart} alt="Cart" />
      </div>
    </header>
  );
}

export default Header;
