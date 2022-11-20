import React from "react";
import "../About/About.css";
import SocialsContainer from "../Socials Container/SocialsContainer";
import adamKeyes from "../../assets/image-profile-mobile.webp";

const About = () => {
  return (
    <>
      <SocialsContainer />
      <section className="about-wrapper">
        <div className="max-width-container">
          <div className="about-container">
            <picture className="about-img-container">
              <img className="mobile-img" alt="adam keyes" src={adamKeyes} />
              <img className="tablet-img" alt="adam keyes" src={adamKeyes} />
              <img className="desktop-img" alt="adam keyes" src={adamKeyes} />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
