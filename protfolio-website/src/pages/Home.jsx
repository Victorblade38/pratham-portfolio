import React from "react";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import ProjectSection from "../components/ProjectsSection/ProjectSection";
import ContactSection from "../components/ContactSection/ContactSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <div className="footer"></div>
    </div>
  );
};

export default Home;
