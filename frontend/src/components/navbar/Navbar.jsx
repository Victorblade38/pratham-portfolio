import React from "react";
import person_icon from "../../assets/person_icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="h-12 md:h-[60px] top-0 absolute z-20 bg-white/30 backdrop-blur-lg p-2 md:p-10 shadow-sm
    w-screen flex flex-row  justify-around items-center "
    >
      <NavLink to="/">
        <img src={person_icon} className="w-[20px] md:w-8" />
      </NavLink>
      <div className="flex gap-3 lg:gap-4 text-[12px] md:text-base  text-white">
        <NavLink to="/" title="about section" className="">
          home
        </NavLink>
        <NavLink to="/about" title="about section" className="">
          about
        </NavLink>
        <NavLink to="/skills" title="skills section" className="navlink">
          skills
        </NavLink>
        <NavLink to="/projects" title="projects section" className="navlink">
          project
        </NavLink>
        <NavLink to="/contact" title="contact section" className="navlink">
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
