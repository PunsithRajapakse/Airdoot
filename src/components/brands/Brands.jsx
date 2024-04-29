import React from "react";
import { brands } from "../data/Data"; // Adjust the import path accordingly
import "./Brands.css";

const BrandsPage = () => {
  return (
    <section className="brands padding">
      <div className="container">
        <h2 className="heading">Our Brands</h2>

        <div className="content grid4 mtop">
          {brands.map((brand, index) => (
            <div className="box shadow" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsPage;
