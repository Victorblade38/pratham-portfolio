import React from "react";
import "./Navbar.css";
import person_icon from "../../assets/person_icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo-img" alt="logo-img" src={person_icon} />
        <NavLink to="/" title="home" className="navlink">
          prathammhavale
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/about" title="about section" className="navlink">
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
