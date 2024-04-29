import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./location.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <h2><Heading title='Applications' /></h2>

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
