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
      className={`bg-gray-50 lg:w-96 flex flex-col p-4 gap-2  items-center text-sm  shadow-md lg:shadow-lg rounded-md
      ${completed ? "shadow-green-200" : "shadow-orange-200"}  `}
      onClick={() => {
        window.open(githubLink, "_blank"); // Open the GitHub link in a new tab
      }}
    >
      <span className="font-semibold lg:text-lg cursor-pointer hover:underline">
        {name}
      </span>
      <p className="text-[12px] lg:text-sm">{about}</p>
    </div>
  );
}

export default ProjectCard;
