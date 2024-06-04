import React from 'react';
import './Plan.css';
import LeftPipe from "./left-pipe.png"
import RightPipe from "./right-pipe.png"
import Logo from "./logo.png"

const Plan = () => {
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
          <h2>Repair  <br/>Maintenance<br/> Contract</h2>
          <p>annual maintenance contract</p>
          <button>Show More</button>
        </div>
        <div className="plan-box2">
          <h2>One Time <br/>Service</h2>
          <p>one time service</p>
          <button>Show More</button>
        </div>
        <div className="plan-box3">
          <h2>Annual <br/>Maintenance <br/>Contract</h2>
          <p>annual maintenance contract</p>
          <button>Show More</button>
        </div>
        <div className="plan-box4">
          <h2>One Time <br/>Service</h2>
          <p>one time service</p>
          <button>Show More</button>
        </div>
        <div className="plan-box5">
          <h2>Annual <br/>Maintenance<br/> Contract</h2>
          <p>annual maintenance contract</p>
          <button>Show More</button>
        </div>
        <div className="plan-box6">
          <h2>Design & <br/>Estimation</h2>
          <p>one time service</p>
          <button>Show More</button>
        </div>
      </div>
      
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
