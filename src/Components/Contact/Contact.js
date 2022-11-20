import React from "react";
import "../Contact/Contact.css";

import SocialsContainer from "../Socials Container/SocialsContainer";

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper">
        <div className="max-width-container contact-section">
          <div className="contact-container">
            <h3 className="heading M contact-header">Contact</h3>
            <p className="body-text">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="NAME" required />
            <input type="email" placeholder="EMAIL" required />
            <input type="text" placeholder="MESSAGE" required />
            <button className="button contact-button uppercase">
              Send Message
            </button>
          </form>
        </div>

        <SocialsContainer />
      </section>
    </>
  );
};

export default Contact;
