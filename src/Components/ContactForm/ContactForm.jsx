// ContactForm.js
import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <form className="contact-form">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="text" placeholder="Phone" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <input type="text" placeholder="Address" className="form-input" />
        <div className="form-row">
          <input type="text" placeholder="City" className="form-input half" />
          <input type="text" placeholder="State" className="form-input half" />
        </div>
        <input type="text" placeholder="Pincode" className="form-inputpin" />
        <select className="form-input">
          <option>Looking for</option>
          <option>Servicing</option>
          <option>⁠Repair</option>
          <option>⁠Annual Maintenance Contract</option>
          <option>⁠Inspection</option>
          <option>⁠Installation</option>
          <option>Spare Parts</option>
          <option>Upgrade/Retrofit</option>
          <option>⁠Design & Estimation</option>
          <option> ⁠Operations & Maintenance</option>
          <option>⁠Something else</option>⁠
        </select>
        <textarea placeholder="Message" className="form-input"></textarea>
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
