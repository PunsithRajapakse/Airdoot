import React from "react";
import { clients } from "../data/Data"; // Assuming you have a Data.js file with client data
import "./Clients.css";

const ClientsPage = () => {
  return (
    <section className="clients padding">
      <div className="container">
        <h1 className="heading">Our Clients</h1>

        <div className="content grid4 mtop">
          {clients.map((client, index) => (
            <div className="box shadow" key={index}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsPage;
