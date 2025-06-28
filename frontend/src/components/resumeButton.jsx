import React from "react";
import { motion } from "framer-motion";
import { cv } from "../assets";

const resumeButton = () => {
  return (
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
  );
};

export default resumeButton;
