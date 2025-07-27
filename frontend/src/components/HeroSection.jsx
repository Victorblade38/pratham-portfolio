import React from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";

import resumeButton from "./resumeButton";

const HeroSection = () => {
  return (
    <div className="mt-6 w-screen px-4 min-h-screen flex flex-col gap-20">
      <div className="w-72">
        <h1 className="w-full font-inclusive-sans text-4xl">
          Designing and building experiences as a Front-end Developer &
          Enthusiatic UI/UX Designer.
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
      <Navbar />
      <h1 className="text-end font-inclusive-sans text-3xl">Pratham Mhavale</h1>
    </div>
  );
};

export default HeroSection;
