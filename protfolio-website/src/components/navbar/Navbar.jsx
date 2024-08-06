import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo-img" alt="logo-img" />
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
