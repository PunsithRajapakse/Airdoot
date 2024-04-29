import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <form className='flex'>
            <div className='box'>
              <input type='text' placeholder='Enter pin code (India) - Enter area (Sri Lanka)' />
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
