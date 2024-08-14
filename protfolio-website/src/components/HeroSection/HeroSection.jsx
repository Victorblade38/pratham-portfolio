import React from "react";
import "./HeroSection.css";
import profile_image from "../../assets/pratham.jpg";
import bg from "../../assets/retro-bg.jpg";

const HeroSection = () => {
  return (
    <div className="hero">
      <img src={bg} alt="" className="bg-img" />
      <div className="hero-content">
        <img src={profile_image} alt="" />
        <div className="short-about">
          <span>--- hello</span>
          <h1 className="name">I am Pratham Mhavale</h1>
          <p className="short-intro">
            An aspiring developer with a knack for creativity and innovation in
            web development.
          </p>
        </div>
        <button className="resume-btn">
          <span>{"<Resume />"}</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
