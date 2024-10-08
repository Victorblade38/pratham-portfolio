import React, { useEffect, useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ name, about, completed, githubLink }) {
  const [status, setStatus] = useState();

  useEffect(() => {
    if (completed) {
      setStatus(true);
    }
  }, [completed]);
  return (
    <div
      className="project-card"
      onClick={() => {
        window.open(githubLink, "_blank"); // Open the GitHub link in a new tab
      }}
    >
      <div className="title-section">
        <span>{name}</span>
        <span
          className={`project-status ${status === true ? "done" : "ongoing"}`}
        ></span>
      </div>
      <p>{about}</p>
    </div>
  );
}

export default ProjectCard;
