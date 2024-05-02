import React from "react";
import Clients from "../../Components/Clients/Clients";
import Brands from "../../Components/Brands/Brands";
import Choose from "../Choose/Choose";

const Home = () => {
  return (
    <div className="home">
      <Choose/>
      <Brands />
      <Clients />
    </div>
  );
};

export default Home;
