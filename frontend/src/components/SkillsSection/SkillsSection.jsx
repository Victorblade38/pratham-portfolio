import React from "react";
import skills from "../skills";

const SkillsSection = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold">Skills</h1>
      <div className="grid grid-cols-3 gap-2">
        {Object.keys(skills).map((key) => (
          <div
            className="flex flex-col gap-2 px-3 py-4 items-center shadow-md rounded-md"
            key={key}
          >
            <img src={skills[key].img} alt={skills[key].name} className="w-8" />
            <span className="text-[12px] font-medium">{skills[key].name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
