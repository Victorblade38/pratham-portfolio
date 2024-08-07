import React from "react";
import "./Navbar.css";
import person_icon from "../../assets/person_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo-img" alt="logo-img" src={person_icon} />
        <span>`prathammhavale</span>
      </div>
      <div className="nav-links">
        <span>about</span>
        <span>skills</span>
        <span>project</span>
        <span>contact</span>
      </div>
    </div>
  );
};

export default Navbar;
