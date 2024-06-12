import React from "react";
import Clients from "../../Components/Clients/Clients";
import Brands from "../../Components/Brands/Brands";
import Van from "../../Components/Van/Van";
import NewApp from "../../Components/NewApp/NewApp";
import Section from "../../Components/Section/Section";
import Assistance from "../../Components/Assistance/Assistance";
import Specialisations from "../../Components/Specialisations/Specialisations";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home">
      <Section />
      <Assistance />
      <Specialisations />
      <NewApp />
      <Brands />
      <Testimonials />
      <Clients />
      <Van />
    </div>
  );
};

export default Home;
