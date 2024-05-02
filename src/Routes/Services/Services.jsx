import React from "react";
import "./Services.css";
import img from "./service.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="more-services">
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC UNINSTALL</div>
            <div className="rating">★ 4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />

            <div className="description">
              Uninsatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <button className="add-button">Add</button>
          </div>
        </div>
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC UNINSTALL</div>
            <div className="rating">★4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />
            <div className="description">
              Uninsatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <button className="add-button">Add</button>
          </div>
        </div>
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC UNINSTALL</div>
            <div className="rating">★ 4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />
            <div className="description">
              Uninsatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <button className="add-button">Add</button>
          </div>
        </div>
        <div className="service-box1">
          <div className="card">
            <div className="header">30-DAY WARRANTY</div>
            <div className="title">AC UNINSTALL</div>
            <div className="rating">★ 4.88 (85k reviews)</div>
            <div className="price">Start at ₹499</div>
            <hr className="hrl" />
            <img className="service-image" src={img} />
            <div className="description">
              Uninsatallation of both indoor & outdoor units
            </div>
            <button className="details-button">View details</button>
            <button className="add-button">Add</button>
          </div>
        </div>

        
      </div>
      <div className="more-services-button">
        <Link to="/moreservices" className="more-services-btn">More Services</Link>
      </div>
    </div>
  );
};

export default Services;
