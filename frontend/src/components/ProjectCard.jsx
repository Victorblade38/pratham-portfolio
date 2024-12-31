import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

function ProjectCard({
  name,
  about,
  completed,
  githubLink,
  techStack,
  favicon,
}) {
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(completed);
  }, [completed]);

  return (
    <div
      className={`bg-gray-100 h-full  min-w-full max-w-96 flex flex-col p-3 gap-2 items-center
      border-2 border-gray-400
      rounded-lg`}
      onClick={() => {
        window.open(githubLink, "_blank"); // Open the GitHub link in a new tab
      }}
    >
      <div className="w-full flex flex-row gap-2 items-center">
        <div className="bg-gray-50 p-[6px] rounded-full border-[0.2px] border-gray-300">
          {favicon ? (
            <img src={favicon} alt="icon" className="w-5 h-5 rounded-full" />
          ) : (
            <CgProfile />
          )}
        </div>
        {name ? (
          <span className="font-semibold text-[13px] lg:text-lg cursor-pointer hover:underline">
            {name}
          </span>
        ) : (
          ""
        )}
      </div>
      <p
        className={`w-full text-[12px] lg:text-sm line-clamp-4 ${
          about.length === 0 ? "hidden" : ""
        }`}
      >
        {about}
      </p>
      <div className="mt-auto w-full flex flex-row flex-wrap gap-2 justify-start">
        {techStack?.map((tech, index) => (
          <div
            key={index}
            className="py-1 px-2 bg-gray-200 border-[0.2px] border-gray-300 rounded-full"
          >
            <p className="text-[10px]">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
