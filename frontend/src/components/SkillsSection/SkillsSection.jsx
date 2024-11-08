import React from "react";
import skills from "../skills";

const SkillsSection = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4 lg:mt-10">
      <h1 className="font-bold lg:text-2xl">Skills</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Object.keys(skills).map((key) => (
          <div
            className="flex flex-col gap-2 px-3 py-4 lg:p-6 items-center shadow-sm lg:shadow-lg rounded-md"
            key={key}
          >
            <img
              src={skills[key].img}
              alt={skills[key].name}
              className="w-8 lg:w-12"
            />
            <span className="text-[12px] lg:text-base font-medium">
              {skills[key].name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
