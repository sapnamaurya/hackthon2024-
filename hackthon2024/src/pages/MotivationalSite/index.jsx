import React from "react";
import MotivationHeader from "../../componenets/MotivationHeader";
import HeroSection from "../../componenets/HeroSection";
import MotivationalQuotes from "../../componenets/MotivationalQuotes";
import FitnessTips from "../../componenets/FitnessTips";
import Footer from "../../componenets/Footer";
import Subscribe from "../../componenets/Subscribe";

const Motivational = () => {
  return (
    <div>
      <MotivationHeader />
      <HeroSection />
      <MotivationalQuotes />
      <FitnessTips />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Motivational;
