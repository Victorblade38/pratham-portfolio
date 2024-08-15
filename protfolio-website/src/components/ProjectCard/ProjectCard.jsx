import React from "react";
import "./ProjectCard.css";
import bg from "../../assets/retro-bg.jpg";

function ProjectCard() {
  return (
    <div
      className="card shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: 30 + `rem` }}
    >
      <img
        src={bg}
        className="card-img-top"
        alt="..."
        style={{ height: 20 + `rem` }}
      />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. acsascas
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
