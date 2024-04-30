import React from "react";
import Clients from "../../Components/Clients/Clients"; 
import Brands from "../../Components/Brands/Brands";

const Home = () => {
  return (
    <>
    <div>
      <h1>Welcome to the Home Page</h1>

      <Brands/>
      <Clients /> 

    </div>
    </>
  );
};

export default Home;
