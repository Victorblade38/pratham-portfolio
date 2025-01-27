import React from "react";
import projects from "./projects";
import simpleprojects from "./simpleprojects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="xl:w-[1440px] border-2 border-gray-500 py-10 flex flex-col items-center  gap-8  xl:gap-14 rounded-md"
    >
      <h1 className="mt-10  font-montserrat font-bold text-2xl">Projects</h1>

      <div
        className="
         px-[24px]  flex flex-col  md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4   items-center  
        
        "
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
