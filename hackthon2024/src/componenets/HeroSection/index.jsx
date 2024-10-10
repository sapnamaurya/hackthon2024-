import React from "react";
import "./style.css";
import reportImg from "../../assets/images/report.jpg";

const HeroSection = () => {
  return (
    // <section className="hero-section"   {{style:background: url("/path/to/fitness-banner.jpg") no-repeat center center/cover}}backgroundImage: `url(${reportImg})`>
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${reportImg})` }}
    >
      <div className="hero-content">
        <h1>Your Fitness Journey Starts Today</h1>
        <p>Get motivated, stay fit, and achieve your goals!</p>
      </div>
    </section>
  );
};

export default HeroSection;
