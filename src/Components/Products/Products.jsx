import React from "react";
import "./Products.css"; // Import your CSS file

const Products = () => {
  // Dummy data for images and text
  const images = [
    { src: "Assets/AC/01.png", text: "Window AC" },
    { src: "Assets/AC/01.png", text: "Refrigerator" },
    { src: "Assets/AC/01.png", text: "Split AC Hi Wall Type" },
    { src: "Assets/AC/01.png", text: "Ductable AC - Mid Static" },
    { src: "Assets/AC/01.png", text: "Tower AC" },
    { src: "Assets/AC/01.png", text: "Visi Cooler" },
    { src: "Assets/AC/01.png", text: "Deep Freezer" },
    { src: "Assets/AC/01.png", text: "VRF Top Discharge" },
    { src: "Assets/AC/01.png", text: "Cold Room" },
    { src: "Assets/AC/01.png", text: "Multi Deck Freezer" },

    { src: "Assets/AC/01.png", text: "Custom DX Units" },
    { src: "Assets/AC/01.png", text: "Bottle Cooler" },
    { src: "Assets/AC/01.png", text: "Blast Freezer" },
    { src: "Assets/AC/01.png", text: "Rack System" },
    { src: "Assets/AC/01.png", text: "Split AC Furred in Type" },
    { src: "Assets/AC/01.png", text: "Air Handling Unit AHU" },
    { src: "Assets/AC/01.png", text: "Propeller Fans" },
    { src: "Assets/AC/01.png", text: "Tube Axial Fan" },
    { src: "Assets/AC/01.png", text: "Cabinet Type Fan" },
    { src: "Assets/AC/01.png", text: "Air Washer" },

    { src: "Assets/AC/01.png", text: "Centrifugal Fans" },
    { src: "Assets/AC/01.png", text: "Ductable AC - FCU  " },
    { src: "Assets/AC/01.png", text: "Kitchen Hoods" },
    { src: "Assets/AC/01.png", text: "Pumps Monobloc" },
    { src: "Assets/AC/01.png", text: "VRF Side Discharge" },
    { src: "Assets/AC/01.png", text: "Pumps Centrifugal" },
    { src: "Assets/AC/01.png", text: "Electrical Panel" },
    { src: "Assets/AC/01.png", text: "Cooling Tower" },
    { src: "Assets/AC/01.png", text: "Dry Scrubber" },
    { src: "Assets/AC/01.png", text: "Hand Drier" },
  ];

  return (
    <div className="products">
      <h1 className="heading">Products We Specialize</h1>
      <div className="products_container">
        {images.map((image, index) => (
          <div className="image-box" key={index}>
            <img src={image.src} alt={image.text} />
            <p>{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
