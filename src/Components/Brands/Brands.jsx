import React from "react";
import "./Brands.css"; // Import CSS file for styling (create this file if necessary)



const Brands = () => {
  // Array of brand logo image URLs
  const brandLogos = [
    process.env.PUBLIC_URL + "Assets/Brands/blue-star 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/carrier 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/daikin 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/general 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/hitachi 1 (1).png",
    process.env.PUBLIC_URL + "Assets/Brands/lg 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/mcquay 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/hitachi 1 (1).png",
    process.env.PUBLIC_URL + "Assets/Brands/samsung 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/toshiba 1.png",
    process.env.PUBLIC_URL + "Assets/Brands/trane.png",
    process.env.PUBLIC_URL + "Assets/Brands/voltas 1.png",
    

  ];

  return (
    <div className="brands">
      <h1 className="heading">We Service All Brands</h1><br/>
      <div className="our-brands-container">
        {/* Map through brandLogos array to render each brand logo */}
        {brandLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index + 1}`} className="brand-logo" />
        ))}
      </div>
    </div>
  );
};

export default Brands;
