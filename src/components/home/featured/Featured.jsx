import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Our Services' subtitle="Whether it's conducting on-the-spot repairs at your residence or safely transporting your appliance to our workshop for thorough repairs,we've got you covered!" />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
