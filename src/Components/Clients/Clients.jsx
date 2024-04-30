import React from "react";

import "./Clients.css";

const Clients = () => {
  // Array of brand logo image URLs
  const brandLogos = [
    process.env.PUBLIC_URL + "Assets/Clients/client1.png",
    process.env.PUBLIC_URL + "Assets/Clients/client2.png",
    process.env.PUBLIC_URL + "Assets/Clients/client3.png",
    process.env.PUBLIC_URL + "Assets/Clients/client4.png",
    process.env.PUBLIC_URL + "Assets/Clients/client5.png",
  ];

  return (
    <div className="clients">
      <h1 style={{ color: "#FFE456" }}>Our Clients</h1>
      <br />
      <div className="our-clients-container">
        {brandLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index + 1}`} className="brand-logo" />
        ))}
      </div>
    </div>
  );
};

export default Clients;
