import React from "react";
import { personIcon } from "../assets";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div
      className="border-[1px] border-gray-800 xl:mt-2 max-w-[1440px]  h-16 md:h-20 xl:h-24 top-0 fixed z-20 bg-white/100 backdrop-blur-md  px-[10px] md:px-10 shadow-sm

    w-screen flex flex-row  justify-between items-center font-inter xl:rounded-xl"
    >
      <Link to="hero" duration={400}>
        <p className="ml-4 text-base md:text-xl font-medium xl:font-semibold">
          PRT-PH2
        </p>
      </Link>
      <div className="mr-2 flex gap-3 lg:gap-4 text-[12px] md:text-base xl:text-lg  ">
        <Link
          to="about"
          title="about section"
          duration={400}
          className=" transition-all ease-in-out duration-300"
        >
          about
        </Link>
        <Link
          to="skills"
          title="skills section"
          duration={400}
          className=" transition-all ease-in-out duration-300"
        >
          skills
        </Link>
        <Link
          to="projects"
          title="projects section"
          duration={400}
          className=" transition-all ease-in-out duration-300"
        >
          project
        </Link>
        <Link
          to="contact"
          title="contact section"
          duration={400}
          className=" transition-all ease-in-out duration-300"
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
