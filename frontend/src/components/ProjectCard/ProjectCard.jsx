import React, { useEffect, useState } from "react";

function ProjectCard({ name, about, completed, githubLink }) {
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(completed);
  }, [completed]);

  return (
    <div
      className={`bg-gray-50  md:w-72 xl:w-96 flex flex-col p-4 gap-2 items-center
      shadow-md ${status ? "shadow-green-300 " : "shadow-orange-300"}
      rounded-xl lg:rounded-md`}
      onClick={() => {
        window.open(githubLink, "_blank"); // Open the GitHub link in a new tab
      }}
    >
      <span className="font-semibold text-[12px] lg:text-lg cursor-pointer hover:underline">
        {name}
      </span>
      <p className="text-[10px] lg:text-sm">{about}</p>
    </div>
  );
}

export default ProjectCard;
