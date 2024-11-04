import React, { useEffect, useState } from "react";

function ProjectCard({ name, about, completed, githubLink }) {
  const [status, setStatus] = useState();

  useEffect(() => {
    if (completed) {
      setStatus(true);
    }
  }, [completed]);
  return (
    <div
      className="flex flex-col p-4 gap-2 items-center text-sm shadow-md rounded-md"
      onClick={() => {
        window.open(githubLink, "_blank"); // Open the GitHub link in a new tab
      }}
    >
      <div className="flex flex-row gap-2 items-center">
        <span className="font-semibold">{name}</span>
        <span
          className={`w-4 h-4 rounded-full ${
            status ? "bg-green-500" : "bg-orange-400"
          }`}
        ></span>
      </div>
      <p className="text-[12px]">{about}</p>
    </div>
  );
}

export default ProjectCard;
