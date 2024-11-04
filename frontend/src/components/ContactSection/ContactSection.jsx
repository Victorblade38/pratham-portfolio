import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";

const ContactSection = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold">Contact and Connect</h1>
        <div className="flex flex-col  gap-4">
          <div className="flex flex-row items-center gap-2">
            <img src={gmail} alt="LinkedIn Icon" className="w-4 h-4" />
            <a href="prathammhavale38@gmail.com">
              <span className="text-[14px]">prathammhavale38</span>
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={linkedin} alt="LinkedIn Icon" className="w-4 h-4" />

            <a
              href="https://www.linkedin.com/in/pratham-mhavale-a2899a262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[14px]">LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={github} alt="GitHub Icon" className="w-4 h-4" />
            <a
              href="https://github.com/Victorblade38"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[14px]">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
