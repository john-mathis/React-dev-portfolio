import React from "react";
import "../Socials Container/SocialsContainer.css";

import githubIMG from "../../assets/icon-github.svg";
import linkedinIMG from "../../assets/icon-linkedin.svg";
import twitterIMG from "../../assets/icon-twitter.svg";
import frontendmentorIMG from "../../assets/icon-frontend-mentor.svg";

const SocialsContainer = () => {
  return (
    <>
      <section className="socials-wrapper">
        <div className="max-width-container ">
          <div className="socials-container border-top">
            <h3 className="logo">adamkeys</h3>
            <picture className="socials-img-container">
              <img className="social-logo" src={githubIMG} alt="github logo" />
              <img
                className="social-logo"
                src={frontendmentorIMG}
                alt="front end mentor logo"
              />
              <img
                className="social-logo"
                src={linkedinIMG}
                alt="linkedin logo"
              />
              <img
                className="social-logo"
                src={twitterIMG}
                alt="twitter logo"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialsContainer;
