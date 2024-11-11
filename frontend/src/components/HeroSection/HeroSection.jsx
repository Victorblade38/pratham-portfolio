import React, { useState } from "react";
import resume from "../../assets/Pratham_Mhavale_CV4.pdf";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";

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
      <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-md shadow-md">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] md:text-sm lg:text-lg">--- hello</span>
          <h1 className="text-3xl lg:text-5xl font-bold">
            I am Pratham Mhavale
          </h1>
          <p className="lg:text-2xl font-semibold">Frontend Developer</p>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <a href={resume} download>
            <button
              className={`resume-btn ${
                clicked ? "clicked" : ""
              } bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white rounded-md shadow-md`}
              onClick={handleClick}
            >
              <span className="text-[16px] lg:text-lg font-medium">resume</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
