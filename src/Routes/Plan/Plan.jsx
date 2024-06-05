import React, { useState, useEffect } from 'react';
import './Plan.css';
import LeftPipe from "./left-pipe.png";
import RightPipe from "./right-pipe.png";
import Logo from "./logo.png";

const Plan = () => {
  
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="planContainer">
      <header1>
        <p1>We can <b>help </b>you<br/> choose the same</p1>
        <div>
        <h1>choose a plan</h1>
        <h3>Pick one that suits your <br/>budget, assets, space and <br/> application</h3>
        </div>
        <p2>Pick one of our plans and <span className="save-money">save <br/> money</span></p2>
      </header1>
      <div className="plans">
        <div className="plan-box1">
          <h2>Repair  </h2>
          <p>annual maintenance contract</p>
          <button>Show More</button>
        </div>
        <div className="plan-box2">
          <h2>Service</h2>
          <p>one time service</p>
          <button>Show More</button>
        </div>
        <div className="plan-box3">
          <h2>Annual <br/>Maintenance <br/>Contract</h2>
          <p>annual maintenance contract</p>
          <button>Show More</button>
        </div>
        <div className="plan-box4">
          <h2>Installation</h2>
          <p>one time service</p>
          <button>Show More</button>
        </div>
        <div className="plan-box5">
          <h2>Inspection</h2>
          <p>annual maintenance contract</p>
          <button>Show More</button>
        </div>
        <div className="plan-box6">
          <h2>Design & Estimation</h2>
          <p>Comming Soon</p>
          <button>Show More</button>
        </div>
        {showMore && (
          <>
            <div className="plan-box7">
              <h2>Upgrade (Retrofit)</h2>
              <p>Comming Soon</p>
              <button>Show More</button>
            </div>
            <div className="plan-box8">
              <h2>Operations & Maintenance</h2>
              <p>Comming Soon</p>
              <button>Show More</button>
            </div>
            <div className="plan-box9">
              <h2>Spare Parts Sales</h2>
              <p>Comming Soon</p>
              <button>Show More</button>
            </div>
          </>
        )}
      </div>
      <button className="show-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less Plans" : "Show More Plans"}
      </button>
      <div className="pipes">
        <div className="leftpipe">
          <img src={LeftPipe} alt="leftpipe" />
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="rightpipe">
          <img src={RightPipe} alt="rightpipe" />
        </div>
      </div>
    </div>
  );
}

export default Plan;
