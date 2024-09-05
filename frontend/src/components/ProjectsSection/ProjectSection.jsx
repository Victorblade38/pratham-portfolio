import React from "react";
import "./ProjectSection.css";
import projects from "../projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="projects-card-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectSection;
