import React from "react";
import skills from "../skills";
import { bg } from "../../assets";
import "animate.css";
import TypeIt from "typeit-react";

const SkillsSection = () => {
  return (
    <div className="min-h-screen relative  flex flex-col items-center gap-4 text-white">
      <img
        src={bg}
        alt="Background"
        className="h-screen w-screen object-cover absolute -z-10 "
      />
      <h1 className="mt-20 lg:mt-30 font-semibold md:text-2xl lg:text-3xl  drop-shadow-lg">
        <TypeIt>Skills</TypeIt>
      </h1>
      <div className="animate__animated animate__slideInDown animate__slow grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 text-gray-800">
        {Object.keys(skills).map((key) => (
          <div
            className="
            hover:-translate-y-2 hover:scale-110 transition-all duration-500 ease-in-out
             bg-gray-50 flex flex-col gap-2 px-3 py-4 lg:p-6 items-center  cursor-pointer shadow-blue-200 shadow-md hover:shadow-lg hover:shadow-blue-300   rounded-md 
             "
            key={key}
          >
            <img
              src={skills[key].img}
              alt={skills[key].name}
              className="w-8 lg:w-12 hover:scale-110 transition-scale duration-500 ease-in-out"
            />
            <span className="text-[12px] lg:text-base font-medium transition-none">
              {skills[key].name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
