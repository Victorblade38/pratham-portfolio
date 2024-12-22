import React from "react";
import { bg, personIll } from "../assets";
import TypeIt from "typeit-react";

const AboutSection = () => {
  return (
    <div className="min-h-screen relative overflow-clip md:px-32 lg:px-96 flex flex-col items-center gap-4 text-white">
      <img
        src={bg}
        alt="Background"
        className="h-screen w-screen object-cover absolute -z-10 "
      />
      <div className="flex flex-col mt-20 lg:mt-30">
        <h1 className="font-semibold md:text-2xl text-center lg:text-3xl drop-shadow-lg">
          <TypeIt options={{ speed: 60 }}>About me</TypeIt>
        </h1>
        <div
          className="flex flex-col lg:flex-row gap-4 items-center

        "
        >
          <p className="md:w-[600px] lg:w-[800px] xl:w-[1000px] text-[12px] md:text-lg lg:text-xl  p-4 lg:font-bold drop-shadow-lg">
            I am an enthusiastic and detail-oriented front-end developer with
            expertise in ReactJS, JavaScript, and Tailwind CSS. With a creative
            mindset, I excel at transforming designs into fully functional,
            responsive websites that offer an enhanced user experience.
            <br />
            <TypeIt options={{ speed: 30 }}>
              I am adaptable, continuously learning and staying updated with new
              technologies, and thrive in collaborative environments. Passionate
              about web development, I focus on creating user-friendly and
              visually appealing digital solutions.
              <br />
              ---
            </TypeIt>
          </p>
          <img
            src={personIll}
            alt=""
            className="animate__animated animate__fadeInRight w-64 lg:w-96 lg:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
