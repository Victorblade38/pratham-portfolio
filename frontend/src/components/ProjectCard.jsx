import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaArrowRight } from "react-icons/fa";

function ProjectCard({
  name,
  about,
  completed,
  githubLink,
  liveLink,
  favicon,
}) {
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(completed);
  }, [completed]);

  return (
    <div
      className="hover:shadow-md md:w-[220px] md:h-full lg:w-[300px] lg:h-[400px]  bg-white flex flex-col p-6  gap-2 justify-start
     "
    >
      {favicon ? (
        <img
          src={favicon}
          alt="icon"
          className="w-8 lg:w-10 h-auto lg:mb-auto"
        />
      ) : (
        <CgProfile />
      )}
      {name ? (
        <span className="mt-4 font-montserrat font-semibold text-lg lg:text-2xl  cursor-pointer ">
          {name}
        </span>
      ) : (
        ""
      )}

      <p
        className={`text-gray-600 mb-4 lg:mt-4  font-inter font-medium w-full text-[12px] lg:text-lg line-clamp-4 ${
          about.length === 0 ? "hidden" : ""
        }`}
      >
        {about}
      </p>
      <div className="mt-auto   flex flex-row gap-4 justify-start items-center">
        <a href={githubLink}>
          <FaGithub className="text-xl lg:text-2xl text-gray-700" />
        </a>
        <a href={liveLink}>
          <FaArrowRight className="text-xl lg:text-2xl text-gray-700" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
