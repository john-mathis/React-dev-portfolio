import React from "react";
import "../src/App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import SocialsContainer from "./Components/Socials Container/SocialsContainer";
const App = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <SocialsContainer /> */}
    </>
  );
};

export default App;
