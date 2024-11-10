import React from "react";
import projects from "../projects";
import simpleprojects from "../simpleprojects";
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
      <hr className="w-1/2" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {simpleprojects.map((sproject, index) => (
          <ProjectCard key={index} {...sproject} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ProjectSection;
