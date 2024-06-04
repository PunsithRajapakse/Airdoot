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
import NewApp from "../../Components/NewApp/NewApp"
import ContactForm from "../../Components/ContactForm/ContactForm";
import Section from "../../Components/Section/Section";
import NewFooter from "../../Components/NewFooter/NewFooter";
import Plan from "../../Components/Plan/Plan";
import AssistanceTypes from "../../Components/Assistance/Assistance";
import ACSelection from "../../Components/ACSelection/ACSelection";
import Specialisations from "../../Components/Specialisations/Specialisations";

const Home = () => {
  return (
    <div className="home">
      {/* <Banner />
      <ACSelection /> */}
      <Section />
      <AssistanceTypes />
     <Specialisations />
      <Plan />
     <Clients />
      <Brands />
      <NewFooter />
      
        {/* <NewApp/>
    <Promotion/>
      <Choose/>
      <WhatAllWeDo/>
      <Products/>
      <Applications/>
      <Brands />
      <Clients />
      <ContactForm/> */}
      {/* <Van />  */}
    </div>
  );
};

export default Home;
