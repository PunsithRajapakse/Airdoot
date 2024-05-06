import React, { useEffect, useRef, useState } from "react";
import "./Promotion.css"; // Import CSS file for styling
import image1 from "./01.png";
import image2 from "./02.png";
import image3 from "./03.png";
import image4 from "./04.png";
import image5 from "./05.png";
import { useInView } from 'react-intersection-observer';

const PromotionCard = ({ title, image, icon }) => (
  <div className="promotion-card">
    <div className="promotion-card-image-container">
      <img src={image} alt={title} className="promotion-card-image" />
    </div>
    <div className="promotion-card-icon-container">
      <img src={icon} alt={icon} className="promotion-card-icon" />
    </div>

    <h3 className="promotion-card-title">{title}</h3>
    <div className="sale-tag">Sale</div>
  </div>
);

const PromotionCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation is triggered only once
    threshold: 0.5 // Specifies when the element should be considered in view
  });

  return (
    <div ref={ref}>
      <div className="topic-container">
        <h2 className="heading">On Going Promotions</h2>
        <h3 className="subheading">
          Enjoy the benefits of AirDoot special offers
        </h3>
      </div>
      <div className={`promotion-cards-container ${inView ? 'in-view' : ''}`}>
        <PromotionCard
          title="Regular Service Split AC"
          image={image1} // Use imported image
          icon={image5}
        />
        <PromotionCard
          title="Repair Visit Split AC"
          image={image2} // Use imported image
          icon={image5}
        />
        <PromotionCard
          title="AMC Split AC"
          image={image3} // Use imported image
          icon={image5}
        />
        <PromotionCard
          title="AMC Split AC"
          image={image4} // Use imported image
          icon={image5}
        />
      </div>
    </div>
  );
};

export default PromotionCards;
