import React from "react";
import "./Promotion.css"; // Import CSS file for styling
import image1 from "./01.png";
import image2 from "./02.png";
import image3 from "./03.png";
import image4 from "./04.png";

const PromotionCard = ({ title, image }) => (
  
  <div className="promotion-card">
    <div className="promotion-card-image-container">
      <img src={image} alt={title} className="promotion-card-image" />
    </div>
    <h3 className="promotion-card-title">{title}</h3>
    <div className="sale-tag">Sale</div>
  </div>
);

const PromotionCards = () => {
  return (
    <div>
    <div className="topic-container">
        <h2>On Going Promotions</h2>
        <h3>Enjoy the benefits of AirDoot special offers</h3>
    </div>
    <div className="promotion-cards-container">
      <PromotionCard
        title="Regular Service Split A/C"
        image={image1} // Use imported image
      />
      <PromotionCard
        title="Repair Visit Split A/C"
        image={image2} // Use imported image
      />
      <PromotionCard
        title="AMC Split A/C"
        image={image3} // Use imported image
      />
      <PromotionCard
        title="AMC Split A/C"
        image={image4} // Use imported image
      />
    </div>
    </div>
  );
};

export default PromotionCards;
