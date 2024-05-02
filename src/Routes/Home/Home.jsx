import React from "react";
import Banner from "../../Components/Banner/Banner"
import Promotion from "../../Components/Promotion/Promotion"
import Clients from "../../Components/Clients/Clients";
import Brands from "../../Components/Brands/Brands";
import WhatAllWeDo from "../../Components/WhatAllWeDo/WhatAllWeDo";
import Choose from "../../Components/Choose/Choose";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Promotion/>
      <Choose/>
      <WhatAllWeDo/>
      <Products/>
      <Brands />
      <Clients />
    </div>
  );
};

export default Home;
