import React from "react";
import { vision, fast, innovation } from "../assets";

const AboutSection = ({ id }) => {
  return (
    <div
      id={id}
      className="border-[1px] border-gray-500 max-w-[1440px] mt-10 flex flex-col lg:flex-row xl:items-center  gap-8 px-[24px] md:px-[34px] xl:px-[160px] py-20 w-full h-auto bg-white xl:rounded-lg "
    >
      <div className=" grid grid-flow-col md:grid-cols-4 md:w-1/3 lg:grid-cols-2 lg:grid-rows-2  gap-1 ">
        <h1 className=" w-[100px] md:w-auto lg:w-[100px] text-[28px] md:text-5xl  xl:mt-2  font-montserrat font-bold ">
          About Me
        </h1>
        <img
          src={fast}
          loading="lazy"
          alt=""
          className="object-cover w-[100px] md:w-full h-[140px] xl:h-[200px] rounded-md"
        />
        <img
          src={vision}
          loading="lazy"
          alt=""
          className="object-cover w-[100px] md:w-full h-[140px] xl:h-full rounded-md"
        />
        <img
          src={innovation}
          loading="lazy"
          alt=""
          className="object-cover w-[100px] md:w-full h-[140px] xl:h-full rounded-md"
        />
      </div>
      <p className="md:w-2/3 font-inter font-medium text-[14px] md:text-[18px] xl:text-xl">
        I am a front-end developer and an aspiring UI/UX designer with a degree
        in Computer Science. I specialize in building visually appealing
        websites, creating responsive web designs, and developing reusable UI
        components. As a creative and adaptive individual, I enjoy collaborating
        with others and bringing innovative ideas to solve new challenges. I am
        a fast learner, always eager to explore new concepts and improve my
        skills. In my free time, I love drawing and designing concept posters,
        which further fuel my passion for creativity and design.
      </p>
    </div>
  );
};

export default AboutSection;
