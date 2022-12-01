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
          <div className="about-container border-bottom">
            <picture className="about-img-container">
              <img
                className="mobile-img about-mobile"
                alt="adam keyes"
                src={adamKeyes}
              />
              <img
                className="tablet-img about-tablet"
                alt="adam keyes"
                src={adamKeyes}
              />
              <img
                className="desktop-img about-desktop"
                alt="adam keyes"
                src={adamKeyes}
              />
            </picture>

            <div className="about-text-container">
              <h1 className="heading L about-heading">
                Nice to meet you! I'm <span>Adam Keyes.</span>
              </h1>

              <p className="body-text">
                Based in the UK, I'm a front-end developer passionate about
                building accesible web apps that users love.
              </p>

              <a className="button uppercase about-button">Contact Me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
