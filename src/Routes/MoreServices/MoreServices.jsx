import React, { useEffect } from "react";
import "./MoreServices.css";
import img from "./service.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MoreServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="m_services">
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
    </div>
  );
};

export default MoreServices;
