import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='On Going Promotions' subtitle='Enjoy the benefits of AirDoot special offers' />

          <div className='content mtop grid4'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'> SALE</button>
                <div className='details'>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-800">
                    <div class="relative">
                    <div className='img'>
                    <img src={val.cover} alt='' />
                    </div>
                    </div>
                    <div class="px-6 py-4">
                      <h4>{val.name}</h4>
                      <div class="text-yellow-500 text-lg">
                        ★★★★★
                      </div>
                    </div>
                  </div>

                  <div className='button flex'>
                    <Link to="/form"> {/* Use Link component instead of button */}
                      Buy 
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
