import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWhatsapp } from "react-icons/fa"; // Import the FaWhatsapp icon
import { AiOutlineHeart } from "react-icons/ai"; // Import the AiOutlineHeart icon

import "./Header.css";
import CompanyLogo from "../Brands/Brands";

class Header extends Component {
  state = {
    mobileMenuOpen: false,
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  handleClickOutside = (event) => {
    if (
      this.mobileMenuRef &&
      !this.mobileMenuRef.contains(event.target) &&
      this.state.mobileMenuOpen
    ) {
      this.toggleMobileMenu();
    }
  };

  setMobileMenuRef = (node) => {
    this.mobileMenuRef = node;
  };

  // Scroll to the top of the page when a navigation link is clicked
  handleLinkClick = () => {
    window.scrollTo(0, 0);
    // Close the mobile menu after routing
    this.setState({ mobileMenuOpen: false });
  };

  render() {
    const { mobileMenuOpen } = this.state;
    const phoneNumber = "+1234567890";

    return (
      <nav className="NavbarItems3">
        <div className="logo">
          <Link to="/" onClick={this.handleLinkClick}>
            {/* Use Link to wrap the logo for navigation and add onClick handler */}
            <img
              src="Assets/Header/HeaderLogo.png"
              alt="Company Logo"
              className="company-logo"
            />
          </Link>
        </div>
        {!mobileMenuOpen && (
          <div className="menu-icon" onClick={this.toggleMobileMenu}>
            <FaBars />
          </div>
        )}
        <ul
          ref={this.setMobileMenuRef}
          className={`nav ${mobileMenuOpen ? "active" : ""}`}
        >
          <li>
            <b>
              <Link
                className="li"
                to="/for-saleitems"
                onClick={this.handleLinkClick}
              >
                HOME
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                className="li"
                to="/for-sale"
                onClick={this.handleLinkClick}
              >
                CONTACT US
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link className="li" to="/about" onClick={this.handleLinkClick}>
                JOIN US AS A PARTNER
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                className="li"
                to="/designprocess"
                onClick={this.handleLinkClick}
              >
                SIGN UP
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link className="li" to="/contact" onClick={this.handleLinkClick}>
                LOG IN
              </Link>
            </b>
          </li>
          <li className="whatsapp-icon">
            <img
              className="whatsappIcon"
              src="Assets/Header/whatsapp-logo.png"
            />
          </li>

          <li className="cart-icon">
            <a className="li" href={`tel:${phoneNumber}`}>
              <img className="whatsappIcon" src="Assets/Header/Shopping Cart.png" />
            </a>
          </li>

          <li className="fav-icon">
            <a className="li" href={`tel:${phoneNumber}`}>
              <img className="whatsappIcon" src="Assets/Header/Heart.png" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
