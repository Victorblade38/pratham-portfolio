import React, { useState } from "react";
import "./HeroSection.css";
import profile_image from "../../assets/pratham.jpg";
import bg from "../../assets/retro-bg.jpg";

const HeroSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 800);
  };

  return (
    <div className="hero">
      <img src={bg} alt="Background" className="bg-img" />
      <div className="hero-content">
        <img src={profile_image} alt="Profile" />
        <div className="short-about">
          <span>--- hello</span>
          <h1 className="name">I am Pratham Mhavale</h1>
        </div>
        <a href="/Pratham-Mhavale-CV.pdf" download>
          <button
            className={`resume-btn ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            <span>{"<Resume />"}</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
