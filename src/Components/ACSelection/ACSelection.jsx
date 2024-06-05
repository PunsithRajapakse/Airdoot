import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ACSelection.css";

// Import images statically
import ac1 from "./1.png";
import ac2 from "./2.png";
import ac3 from "./3.png";
import ac4 from "./4.png";
import ac5 from "./28.png";
import ac6 from "./5.png";
import ac7 from "./6.png";
import ac8 from "./7.png";
import ac9 from "./8.png";
import ac10 from "./9.png";
// Additional AC images
import ac11 from "./10.png";
import ac12 from "./11.png";
import ac13 from "./12.png";
import ac14 from "./13.png";
import ac15 from "./14.png";
import ac16 from "./15.png";
import ac17 from "./16.png";
import ac18 from "./17.png";
import ac19 from "./18.png";
import ac20 from "./19.png";
import ac21 from "./20.png";
import ac22 from "./21.png";
import ac23 from "./22.png";
import ac24 from "./23.png";
import ac25 from "./24.png";
import ac26 from "./25.png"
import ac27 from "./26.png";
import ac28 from "./27.png";

const ACSelection = () => {
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();

  const handleACClick = () => {
    history.push("/plans");
  };

  return (
    <div className="ac-selection">
      <h1>choose your AC</h1>
      <p>Pick the air-conditioner you <br />are looking to service</p>
      <div className="ac-grid">
        <div className="ac-item ac1" onClick={handleACClick}>
          <img src={ac1} alt="AC 1" />
        </div>
        <div className="ac-item ac2" onClick={handleACClick}>
          <img src={ac2} alt="AC 2" />
        </div>
        <div className="ac-item ac3" onClick={handleACClick}>
          <img src={ac3} alt="AC 3" />
        </div>
        <div className="ac-item ac4" onClick={handleACClick}>
          <img src={ac4} alt="AC 4" />
        </div>
        <div className="ac-item ac5" onClick={handleACClick}>
          <img src={ac5} alt="AC 5" />
        </div>
        <div className="ac-item ac6" onClick={handleACClick}>
          <img src={ac7} alt="AC 6" />
        </div>
        <div className="ac-item ac7" onClick={handleACClick}>
          <img src={ac7} alt="AC 7" />
        </div>
        <div className="ac-item ac8" onClick={handleACClick}>
          <img src={ac8} alt="AC 8" />
        </div>
        <div className="ac-item ac9" onClick={handleACClick}>
          <img src={ac10} alt="AC 9" />
        </div>
        <div className="ac-item ac10" onClick={handleACClick}>
          <img src={ac10} alt="AC 10" />
        </div>
        {showMore && (
          <>
            <div className="ac-item ac11" onClick={handleACClick}>
              <img src={ac11} alt="AC 11" />
            </div>
            <div className="ac-item ac12" onClick={handleACClick}>
              <img src={ac12} alt="AC 12" />
            </div>
            <div className="ac-item ac13" onClick={handleACClick}>
              <img src={ac13} alt="AC 13" />
            </div>
            <div className="ac-item ac14" onClick={handleACClick}>
              <img src={ac14} alt="AC 14" />
            </div>
            <div className="ac-item ac15" onClick={handleACClick}>
              <img src={ac15} alt="AC 15" />
            </div>
            <div className="ac-item ac16" onClick={handleACClick}>
              <img src={ac16} alt="AC 16" />
            </div>
            <div className="ac-item ac17" onClick={handleACClick}>
              <img src={ac17} alt="AC 17" />
            </div>
            <div className="ac-item ac18" onClick={handleACClick}>
              <img src={ac18} alt="AC 18" />
            </div>
            <div className="ac-item ac19" onClick={handleACClick}>
              <img src={ac19} alt="AC 19" />
            </div>
            <div className="ac-item ac20" onClick={handleACClick}>
              <img src={ac20} alt="AC 20" />
            </div>
            <div className="ac-item ac21" onClick={handleACClick}>
              <img src={ac21} alt="AC 21" />
            </div>
            <div className="ac-item ac22" onClick={handleACClick}>
              <img src={ac22} alt="AC 22" />
            </div>
            <div className="ac-item ac23" onClick={handleACClick}>
              <img src={ac23} alt="AC 23" />
            </div>
            <div className="ac-item ac24" onClick={handleACClick}>
              <img src={ac24} alt="AC 24" />
            </div>
            <div className="ac-item ac25" onClick={handleACClick}>
              <img src={ac25} alt="AC 25" />
            </div>

            <hr/>

            <div className="ac-item ac26" onClick={handleACClick}>
              <img src={ac26} alt="AC 26" />
            </div>
            <div className="ac-item ac27" onClick={handleACClick}>
              <img src={ac27} alt="AC 27" />
            </div>
            <div className="ac-item ac28" onClick={handleACClick}>
              <img src={ac28} alt="AC 28" />
            </div>
          </>
        )}
      </div>
      <button className="show-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ACSelection;
