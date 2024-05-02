import React from "react";
import Banner from "../../Components/Banner/Banner"
import Promotion from "../../Components/Promotion/Promotion"
import Clients from "../../Components/Clients/Clients";
import Brands from "../../Components/Brands/Brands";
import Choose from "../../Components/Choose/Choose";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Promotion/>
      <Choose/>
      <Brands />
      <Clients />
    </div>
  );
};

export default Home;
