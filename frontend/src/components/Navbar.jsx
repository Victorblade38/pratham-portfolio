import React from "react";
import { personIcon } from "../assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="h-12 md:h-[60px] top-0 absolute z-20 bg-white/10 backdrop-blur-md  p-2 md:p-10 shadow-sm
    w-screen flex flex-row  justify-around items-center "
    >
      <NavLink to="/">
        <img src={personIcon} className="w-[20px] md:w-8" />
      </NavLink>
      <div className="flex gap-3 lg:gap-4 text-[12px] md:text-base  text-gray-400 ">
        <NavLink
          to="/"
          title="home"
          className="hover:text-white transition-all ease-in-out duration-300"
        >
          home
        </NavLink>
        <NavLink
          to="/about"
          title="about section"
          className="hover:text-white transition-all ease-in-out duration-300"
        >
          about
        </NavLink>
        <NavLink
          to="/skills"
          title="skills section"
          className="hover:text-white transition-all ease-in-out duration-300"
        >
          skills
        </NavLink>
        <NavLink
          to="/projects"
          title="projects section"
          className="hover:text-white transition-all ease-in-out duration-300"
        >
          project
        </NavLink>
        <NavLink
          to="/contact"
          title="contact section"
          className="hover:text-white transition-all ease-in-out duration-300"
        >
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
