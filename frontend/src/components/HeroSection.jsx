import React from "react";
import { motion } from "framer-motion";
import resumeButton from "./resumeButton";

const HeroSection = () => {
  return (
    <div className="xl:w-[1440px] mx-[24px] md:mx-[34px] py-24   flex flex-col items-center ">
      <div className=" md:w-[650px] lg:w-[900px] xl:w-[1200px]  flex flex-col gap-4  justify-center md:items-center mt-40 ">
        <h1 className="text-[34px] md:text-center lg:text-4xl xl:text-6xl rounded-md ">
          Designing experiences and building Interfaces as a{" "}
          <span className="text-blue-600 ">Front-end Developer</span> & Aspiring{" "}
          <span className="text-blue-600 ">UI/UX Designer</span> .
        </h1>
         <a
      href="https://docs.google.com/document/d/1o3OJXLiskZ5l5pprqH7vaKjSRdKgNJAm/edit?usp=sharing&ouid=113893774555491319344&rtpof=true&sd=true"
      target="_blank"
      className="xl:mt-2"
    >
      <motion.button
        whileTap={{ y: 4, boxShadow: "none" }} // Moves down and removes shadow on click
        className="font-inter text-sm xl:text-lg  font-medium bg-white text-black px-[80px] xl:px-[120px] py-[10px] md:py-[12px] border-[2px] border-gray-900 rounded-sm shadow-[4px_4px_0px_black] transition-all"
      >
        Resume
      </motion.button>
    </a>
      </div>
    </div>
  );
};

export default HeroSection;
