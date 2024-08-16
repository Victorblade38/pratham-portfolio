import React from "react";
import "./ProjectCard.css";
import bg from "../../assets/retro-bg.jpg";

function ProjectCard() {
  return (
    <div className="project-card">
      <img src={bg} alt="img" />
      <div className="project-info">
        <span>project-name</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
          ducimus. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
