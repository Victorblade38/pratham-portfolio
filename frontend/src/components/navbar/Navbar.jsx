import React from "react";
import "./Navbar.css";
import person_icon from "../../assets/person_icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <NavLink to="/" title="home" className="myname">
          {/* प्रथम म्हावळे. */}pratham
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
