import React, { useState } from "react";
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
    <div className="flex flex-col justify-center items-center mt-20">
      {/* <img src={bg} alt="Background" className="bg-img" /> */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] ">--- hello</span>
          <h1 className="text-3xl font-bold">I am Pratham Mhavale</h1>
          <p className="font-semibold">Frontend Developer</p>
        </div>
        <a href={resume} download>
          <button
            className={`resume-btn ${
              clicked ? "clicked" : ""
            } bg-blue-500 px-4 py-2 text-white rounded-md shadow-md`}
            onClick={handleClick}
          >
            <span className="text-[14px]">Resume</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
