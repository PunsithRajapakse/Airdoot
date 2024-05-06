import React from "react";
import Banner from "../../Components/Banner/Banner"
import Promotion from "../../Components/Promotion/Promotion"
import Clients from "../../Components/Clients/Clients";
import Brands from "../../Components/Brands/Brands";
import WhatAllWeDo from "../../Components/WhatAllWeDo/WhatAllWeDo";
import Choose from "../../Components/Choose/Choose";
import Products from "../../Components/Products/Products";
import Applications from"../../Components/Applications/Applications";
import Van from "../../Components/Van/Van";


const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Promotion/>
      <Choose/>
      <WhatAllWeDo/>
      <Products/>
      <Applications/>
      <Brands />
      <Clients />
      <Van /> 
    </div>
  );
};

export default Home;
