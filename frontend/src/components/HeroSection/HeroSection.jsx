import React, { useState } from "react";
import resume from "../../assets/PrathamMhavaleOnePageCV.pdf";

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
      <div className="flex flex-col gap-2 p-4 ">
        <div className="flex flex-col gap-1">
          <span className="w-[20%] bg-gray-50 p-2 text-[12px] md:text-sm lg:text-lg rounded-md hover:shadow-blue-300 shadow-md">
            --- hello
          </span>
          <h1 className="bg-gray-50 p-4 text-2xl lg:text-4xl font-bold rounded-md hover:shadow-blue-300 shadow-md">
            I am Pratham Mhavale
          </h1>
          <p className="w-[55%] p-3 md:w-50% text-sm lg:text-xl font-semibold bg-gray-50 rounded-md hover:shadow-blue-300 shadow-md">
            Frontend Developer
          </p>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <a href={resume} download>
            <button
              className={`resume-btn ${
                clicked ? "clicked" : ""
              } bg-blue-500 hover:bg-blue-700 active:bg-white  px-4 py-2 text-white rounded-md shadow-md`}
              onClick={handleClick}
            >
              <span className="text-[16px] lg:text-lg font-medium active:text-black">
                resume
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
