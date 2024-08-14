import React from "react";
import "./SkillsSection.css";
import skills from "../skills";

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h1>{"{Skills}"}</h1>
      <div className="skills-card-container">
        {Object.keys(skills).map((key) => (
          <div className="skills-card" key={key}>
            <img src={skills[key].img} alt={skills[key].name} />
            <span>{skills[key].name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
