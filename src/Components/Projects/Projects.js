import React from "react";
import "../Projects/Projects.css";

import { projectDetails } from "../Project Details/ProjectDetails";

const Projects = () => {
  console.log(projectDetails);

  const displayProjects = projectDetails.map((details) => {
    return (
      <>
        <div className="project-details-container">
          <img
            className="mobile-img"
            src={details.small}
            alt="project screenshots"
          />
          <img
            className="desktop-img"
            src={details.large}
            alt="project screenshots"
          />

          <div className="project-details">
            <h3 className="project-title uppercase">{details.title}</h3>
          </div>

          <div className="project-skills">
            <p className="skills">{details.skills.skillOne}</p>
            <p className="skills">{details.skills.skillTwo}</p>
            <p className="skills">{details.skills.skillThree}</p>
          </div>

          <div className="project-buttons">
            <a className="button uppercase">View Project</a>
            <a className="button uppercase">View Code</a>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <section className="projects-wrapper">
        <div className="max-width-container">
          <div className="projects-heading-container">
            <h2 className="heading L">Projects</h2>
            <a href="#" className="button">
              CONTACT ME
            </a>
          </div>
          <div className="projects-container">{displayProjects}</div>
        </div>
      </section>
    </>
  );
};

export default Projects;
