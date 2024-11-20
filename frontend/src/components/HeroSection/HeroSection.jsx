import React, { useState } from "react";

import "animate.css";
import { bg, personIll, cv } from "../../assets";
import TypeIt from "typeit-react";

const HeroSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center relative overflow-clip">
      <img
        src={bg}
        alt="Background"
        className="h-screen w-screen object-cover absolute -z-10 "
      />
      <div
        className=" md:w-[650px] lg:w-[900px] xl:w-[1100px] md::bg-white/10 md:backdrop-blur-md flex flex-col md:flex-row gap-10 justify-center items-center mt-40 lg:mt-30 xl:mt-40 md:py-10 md:px-10 lg:py-8 lg:px-8 xl:px-20
       rounded-3xl md:shadow-lg"
      >
        <div className="flex flex-col items-start gap-2 lg:gap-4 text-white ">
          <div className="flex flex-col  md:gap-2">
            <span className="w-60 text-[12px] md:text-sm lg:text-lg rounded-md ">
              <TypeIt options={{ speed: 60 }}>- - heyyy 👋 i am</TypeIt>
            </span>
            <h1 className=" text-3xl lg:text-3xl xl:text-5xl font-extrabold drop-shadow-md rounded-md ">
              <TypeIt options={{ speed: 100 }}>Pratham Mhavale</TypeIt>
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl font-bold drop-shadow-md  rounded-md ">
              <TypeIt options={{ speed: 100 }}>Frontend Developer</TypeIt>
            </p>
          </div>
          <div className="flex flex-row items-start">
            <a href={cv} download>
              <button
                className={`resume-btn ${
                  clicked ? "clicked" : ""
                } bg-gradient-to-tl from-blue-500 via-blue-400 to-blue-300  active:bg-white px-3 py-2  md:px-4 md:py-2 text-white rounded-md shadow-md`}
                onClick={handleClick}
              >
                <span className="text-[12px] md:text-base font-bold active:text-black">
                  Resume
                </span>
              </button>
            </a>
          </div>
        </div>
        <img
          src={personIll}
          className="animate__animated animate__fadeInDown w-60 lg:w-96 lg:h-96 drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
