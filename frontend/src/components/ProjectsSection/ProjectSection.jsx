import React from "react";
import projects from "../projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold">Projects</h1>
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
