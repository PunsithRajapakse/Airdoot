import React from "react";
import "./Assistance.css";
import shape1 from "./shape1-removebg-preview.png";
import shape2 from "./shape2-removebg-preview.png";
import shape3 from "./shape3-removebg-preview.png";
import shape4 from "./shape4-removebg-preview.png";

const AssistanceTypes = () => {
  return (
    <div className="A_container">
      <h1>types of assistance</h1>
      <p>
        Pick the air-conditioner you <br />
        are looking to service
      </p>
      <div className="assistance-options">
        <div className="option repair">
          <img src={shape1} alt="Ancillary" />
          <h2>Repair</h2>
          <p>
            It must have <br />
            more than one answer
          </p>
        </div>

        <div className="option service">
          <img src={shape2} alt="Ancillary" />
          <h2>Service</h2>
          <p>
            It must apply to <br /> more than one person
          </p>
        </div>

        <div className="option gas-charging">
          <img src={shape3} alt="Ancillary" />
          <h2>Gas Charging</h2>
          <p>
            It requires some <br />
            statistical methods to answer
          </p>
        </div>

        <div className="option installation">
          <img src={shape4} alt="Ancillary" />
          <h2>Installation</h2>
          <p>It must have <br/>more than one answer</p>
        </div>
      </div>
    </div>
  );
};

export default AssistanceTypes;
