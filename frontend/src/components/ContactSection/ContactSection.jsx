import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";

const ContactSection = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4 lg:mt-10">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="font-bold lg:text-2xl">Contact and Connect</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gray-100 w-20 h-24 flex flex-col gap-2 justify-center items-center shadow-sm lg:shadow-lg rounded-md">
            <img src={linkedin} className="w-8 lg:w-8 " />
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
          <div className="bg-gray-100 w-20 h-24 flex flex-col gap-2 justify-center items-center shadow-sm lg:shadow-lg rounded-md">
            <img src={github} className="w-8 lg:w-8" />
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
          <div className="bg-gray-100 w-20 h-24 flex flex-col gap-2 justify-center items-center shadow-sm lg:shadow-lg rounded-md">
            <img src={gmail} className="w-8 lg:w-8" />
            <a href="prathammhavale38@gmail.com">
              <span className="text-[12px] lg:text-sm hover:underline">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
