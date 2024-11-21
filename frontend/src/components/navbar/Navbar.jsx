import React from "react";
import { personIcon } from "../../assets";
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
      <div className="flex gap-3 lg:gap-4 text-[12px] md:text-base  text-white">
        <NavLink to="/" title="home">
          home
        </NavLink>
        <NavLink to="/about" title="about section">
          about
        </NavLink>
        <NavLink to="/skills" title="skills section">
          skills
        </NavLink>
        <NavLink to="/projects" title="projects section">
          project
        </NavLink>
        <NavLink to="/contact" title="contact section">
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
