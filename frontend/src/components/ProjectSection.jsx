import React from "react";
import projects from "./projects";
import simpleprojects from "./simpleprojects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div id="projects" className="w-screen min-h-screen flex flex-col gap-10">
      <div className="w-full h-[1px] bg-gray-600"></div>
      <h1 className="font-inclusive-sans  text-4xl">Explore My Work</h1>

      <div
        className="
        flex flex-col md:justify-center gap-10 mt-4 "
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
