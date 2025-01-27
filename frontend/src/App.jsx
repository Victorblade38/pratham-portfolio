import React from "react";
import Navbar from "./components/Navbar";
import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  ProjectSection,
  SkillsSection,
} from "./components";

const App = () => {
  return (
    <div className=" flex flex-col gap-10 justify-center items-center">
      <Navbar />
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ProjectSection id="projects" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
};

export default App;
