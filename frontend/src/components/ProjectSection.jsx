import React from "react";
import projects from "./projects";
import { bg } from "../assets";
import simpleprojects from "./simpleprojects";
import ProjectCard from "./ProjectCard";
import TypeIt from "typeit-react";

const ProjectSection = () => {
  return (
    <div className="min-h-screen relative flex flex-col  items-center  lg:gap-4 ">
      <img
        src={bg}
        alt="Background"
        className="h-screen w-screen object-cover absolute -z-10 "
      />
      <h1 className="mt-20 lg:mt-30 font-semibold md:text-2xl lg:text-3xl  drop-shadow-lg text-white">
        <TypeIt>
          {""}Projects{""}
        </TypeIt>
      </h1>
      <div className="h-[520px] md:h-[820px] lg:h-[710px] flex flex-col gap-2 mt-4 px-4 overflow-y-scroll no-scrollbar">
        <div
          className="flex flex-col items-center gap-2 md:grid md:grid-cols-2 lg:grid-cols-3
        animate__animated animate__fadeInUp animate__slow
        "
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div
          className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3
        animate__animated animate__fadeInUp animate__slow"
        >
          {simpleprojects.map((sproject, index) => (
            <ProjectCard key={index} {...sproject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
