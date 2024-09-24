import React, { useState } from "react";
import "./HeroSection.css";
import bg from "../../assets/retro-bg.jpg";

const HeroSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <div className="hero">
      {/* <img src={bg} alt="Background" className="bg-img" /> */}
      <div className="hero-content">
        <div className="short-about">
          <span>--- hello</span>
          <h1>I am Pratham Mhavale</h1>
        </div>
        <a href="/Pratham-Mhavale-CV.pdf" download>
          <button
            className={`resume-btn ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            <span>Resume</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
