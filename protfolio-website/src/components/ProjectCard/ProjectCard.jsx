import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-img">
        {project.img ? (
          <img src={project.img} alt={project.name} />
        ) : (
          <div className="placeholder">No Image Available</div>
        )}
      </div>
      <div className="project-card-info">
        <h3>{project.name}</h3>
        <p>{project.about}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
