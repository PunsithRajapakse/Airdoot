import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/airdoot-logo.png' alt='' />
              <h2>Best AC Repair And Services in India</h2>
              <br/>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Submit</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>2024 © AirDoot Pte Lt | Privacy Policy | Terms & Conditions</span>
      </div>
    </>
  )
}

export default Footer
