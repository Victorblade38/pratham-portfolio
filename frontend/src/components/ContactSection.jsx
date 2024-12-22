import React from "react";
import { bg, linkedinLogo, githubLogo, gmail } from "../assets";
import TypeIt from "typeit-react";

const ContactSection = () => {
  return (
    <div className="min-h-screen relative flex flex-col  items-center  gap-4">
      <img
        src={bg}
        alt="Background"
        className="h-screen w-screen object-cover absolute -z-10 "
      />

      <h1 className="mt-20 lg:mt-30 font-semibold md:text-2xl lg:text-3xl  drop-shadow-lg text-white">
        <TypeIt>
          {""}Contact{""}
        </TypeIt>
      </h1>
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="animate__animated animate__fadeInLeft  bg-gray-50 w-20 h-24 flex flex-col gap-2 justify-center items-center shadow-sm lg:shadow-lg rounded-md">
          <img src={linkedinLogo} className="w-8 lg:w-8 " />
          <a
            href="https://www.linkedin.com/in/pratham-mhavale-a2899a262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-[12px] lg:text-sm hover:underline">
              LinkedIn
            </span>
          </a>
        </div>
        <div className="animate__animated animate__fadeInLeft animate__fast bg-gray-50 w-20 h-24 flex flex-col gap-2 justify-center items-center shadow-sm lg:shadow-lg rounded-md">
          <img src={githubLogo} className="w-8 lg:w-8" />
          <a
            href="https://github.com/Victorblade38"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-[12px] lg:text-sm hover:underline">
              GitHub
            </span>
          </a>
        </div>
        <div className="animate__animated animate__fadeInRight bg-gray-50 w-20 h-24 flex flex-col gap-2 justify-center items-center shadow-sm lg:shadow-lg rounded-md">
          <img src={gmail} className="w-8 lg:w-8" />
          <a href="prathammhavale38@gmail.com">
            <span className="text-[12px] lg:text-sm hover:underline">
              Email
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
