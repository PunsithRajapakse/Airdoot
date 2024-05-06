import React, { useEffect } from "react";
import "./Services.css";
import img from "./service.png";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="services">
      <div className="more-services">
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC INSTALL</div>
            <div className="rating">★ 4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />

            <div className="description">
              Insatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <Link to="/Form" className="add-button">
              Add
            </Link>
          </div>
        </div>
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC INSTALL</div>
            <div className="rating">★4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />
            <div className="description">
              Insatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <Link to="/Form" className="add-button">
              Add
            </Link>
          </div>
        </div>
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC INSTALL</div>
            <div className="rating">★ 4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />
            <div className="description">
              Insatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <Link to="/Form" className="add-button">
              Add
            </Link>
          </div>
        </div>
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC INSTALL</div>
            <div className="rating">★ 4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />
            <div className="description">
              Insatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <Link to="/Form" className="add-button">
              Add
            </Link>
          </div>
        </div>
      </div>
      <div className="more-services-button">
        <Link to="/moreservices" className="more-services-btn">
          More Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
