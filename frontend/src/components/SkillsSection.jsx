import React from "react";
import skills from "./skills";
import { api, webDesign, frontendDev } from "../assets";

import "animate.css";

const SkillsSection = () => {
  const workSkill = [
    {
      icon: webDesign,
      name: "Web Design",
      description:
        "Designing clean, responsive websites that offer seamless user experiences",
    },
    {
      icon: frontendDev,
      name: "Frontend Development",
      description:
        "Building interactive and dynamic web applications with modern frameworks and best practices",
    },
    {
      icon: api,
      name: "API Integration",
      description:
        "Connecting applications with external services to enable seamless data exchange and functionality",
    },
  ];
  return (
    <div
      id="skills"
      className=" max-w-[1440px] h-auto py-24 w-full flex flex-col items-center gap-12 transition-all ease-in-out duration-300"
    >
      <h1 className=" font-montserrat font-bold text-2xl">Skills</h1>
      <div className=" mx-[24px] md:mx-auto flex flex-row gap-2 xl:gap-4 flex-wrap  ">
        {workSkill.map((item, index) => (
          <div
            key={index}
            className="hover:border-2 hover:border-gray-600 md:w-[200px] xl:w-[300px] xl:h-[400px] md:h-auto flex flex-col gap-2 lg:gap-4 p-4 shadow-md transition-all ease-in-out duration-300"
          >
            <img
              src={item.icon}
              className="w-8 xl:w-12 xl:mb-10 drop-shadow-md"
            />
            <h2 className=" font-montserrat text-[14px] xl:text-2xl md:text-base font-semibold">
              {item.name}
            </h2>
            <p className=" font-inter text-[11px] xl:text-lg md:text-[14px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full px-[24px] md:px-[34px] py-8 xl:py-12 bg-white flex flex-row flex-wrap justify-center gap-4 xl:gap-6 text-gray-800 xl:rounded-lg">
        {skills.map((skill, index) => (
          <div
            className="  flex flex-col p-2 
               gap-2 items-center  cursor-pointer 
             hover:-translate-y-1 hover:scale-110 transition-all duration-500 ease-in-out
             "
            key={index}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="xl:mb-2 w-4 md:w-5 lg:w-8 hover:scale-110 transition-scale duration-500 ease-in-out"
            />
            <span className="text-[10px] md:text-sm lg:text-base font-inter font-medium transition-none">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
