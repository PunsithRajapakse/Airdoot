import React from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  return (
    <div className="content grid5s mtop">
      {list.map((val, index) => {
        const { cover } = val;
        return (
          <div className="box shadow photo" key={index}>
            <div className="img">
              <img src={cover} alt="" />
              
            </div>
            <h4>{val.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;
