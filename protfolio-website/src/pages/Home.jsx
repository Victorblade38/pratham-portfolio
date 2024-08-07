import React from "react";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
