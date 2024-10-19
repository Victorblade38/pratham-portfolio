import React, { useState } from "react";
import "./HeroSection.css";
import resume from "../../assets/Pratham_Mhavale_CV4.pdf";

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
          <p>Frontend Developer</p>
        </div>
        <a href={resume} download>
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
