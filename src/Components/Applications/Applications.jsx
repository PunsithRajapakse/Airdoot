import React, { useState } from "react";
import "./Applications.css";
import image1 from "./01.jpg";
import image2 from "./02.jpg";
import image3 from "./03.jpg";
import image4 from "./04.jpg";
import image5 from "./05.jpg";
import image6 from "./06.jpg";
import image7 from "./07.jpg";
import image8 from "./08.jpg";

const Applications = () => {
  const images = [
    { src: image1, text: "Data Centers" },
    { src: image2, text: "Residential Services" },
    { src: image3, text: "Commercial Space" },
    { src: image4, text: "Hospitality" },
    { src: image5, text: "Healthcare" },
    { src: image6, text: "Supermarket & Hypermarket" },
    { src: image7, text: "Commercial Kitchen" },
    { src: image8, text: "Cold Room Storage" },
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="Applications">
      <h1 className="headingApplication">Applications</h1>
      <div className="application_container">
        {images.map((image, index) => (
          <div
            className="image-box"
            key={index}
            onMouseEnter={() => setHoveredImage(image.src)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <p>{image.text}</p>
            {hoveredImage === image.src && (
              <img src={image.src} alt={image.text} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
