import React from "react";
import image1 from "./client1.png";
import image2 from "./client2.png";
import image3 from "./client3.png";
import image4 from "./client4.png"
import image5 from "./client5.png"
import "./Clients.css"

const Clients = () => {
  // Array of brand logo image URLs
  const brandLogos = [
    image1, 
    image2,
    image3,
    image4,
    image5,

  ];

  return (
    <div className="clients">
      <h1 style={{ color: "#FFE456" }}>Our Clients</h1><br/>
      <div className="our-clients-container">
        
        {brandLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index + 1}`} className="brand-logoc" />
        ))}
      </div>
    </div>
  );
};

export default Clients;
