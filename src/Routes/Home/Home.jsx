import React from "react";
import Clients from "../../Components/Clients/Clients";
import Brands from "../../Components/Brands/Brands";

const Home = () => {
  return (
    <div className="home">
      <Brands />
      <Clients />
    </div>
  );
};

export default Home;
