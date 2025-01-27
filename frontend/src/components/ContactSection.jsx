import React from "react";
import { linkedinLogo, githubLogo, gmail } from "../assets";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className=" max-w-[1440px] py-10 w-full  flex flex-col gap-8 justify-center items-center transition-all ease-in-out duration-300"
    >
      <h1 className="font-montserrat font-bold text-2xl">Contact</h1>
      <div className="w-full flex flex-wrap justify-center  gap-4 md:gap-8 xl:gap-12 px-[24px]  py-10 xl:py-12 bg-white xl:rounded-lg">
        <a
          href="mailto:prathammhavale38@gmail.com"
          className="flex flex-row gap-2 items-center justify-center"
        >
          <img src={gmail} alt="Gmail" className="w-5 xl:w-6 h-auto" />
          <p className="text-sm xl:text-lg font-inter font-semibold">
            prathammhavale38
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/pratham-mhavale"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2 items-center justify-center"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="w-5 xl:w-6 h-auto"
          />
          <p className="text-sm xl:text-lg font-inter font-semibold">
            pratham-mhavale
          </p>
        </a>

        <a
          href="https://github.com/prathammhavale"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2 items-center justify-center"
        >
          <img src={githubLogo} alt="GitHub" className="w-5 xl:w-6 h-auto" />
          <p className="text-sm xl:text-lg font-inter font-semibold">
            prathammhavale
          </p>
        </a>
      </div>

      <div className="my-10 mx-[24px] md:mx-[34px] flex flex-wrap md:grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="name"
          className="w-full  px-4 py-3 text-sm xl:text-lg font-inter rounded-md shadow-md"
        />
        <input
          type="email"
          placeholder="email"
          className="w-full  px-4 py-3 text-sm xl:text-lg font-inter rounded-md shadow-md"
        />
        <textarea
          rows={4}
          placeholder="message"
          className="w-full  px-4 py-3 text-sm xl:text-lg font-inter rounded-md shadow-md"
        ></textarea>
        <button className="w-full md:w-1/2 md:h-1/2 md:mt-auto bg-gray-800 text-white px-4 py-3 text-sm xl:text-lg font-medium font-montserrat rounded-md">
          send
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
