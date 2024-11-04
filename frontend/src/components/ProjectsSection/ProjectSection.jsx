import React from "react";
import projects from "../projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="p-8 md:px-32 flex flex-col justify-center items-center  gap-4 lg:mt-10">
      <h1 className="font-bold lg:text-2xl">Projects</h1>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
