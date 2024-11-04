import React from "react";

const AboutSection = () => {
  return (
    <div className="p-8 md:px-32 lg:px-96 flex flex-col justify-center items-center gap-4 mt-10">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold md:text-xl lg:text-2xl">About me -- </h1>
        <p className="text-sm lg:text-lg">
          I'm Pratham Mhavale , frontend developer from Mumbai , India, with a
          Bachelor's degree in Computer Science. I focus on creating visually
          appealing and user-friendly web interfaces. Aside from coding , I’m
          either playing cricket or drawing. I’m eager to learn and explore new
          opportunities in web development and design. <br />
          ---
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
