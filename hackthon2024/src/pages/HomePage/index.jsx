import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js
import "./style.css";
import Footer from "../../componenets/Footer";
import Header from "../../componenets/Header";
import Service from "../../componenets/Service";
import ChatBoxSymbol from "../../componenets/ChatBoxSymbol";

const GymHome = () => {
  //   const page1 = {
  //     backgroundImage: `url(${reportImg})`,
  //   };
  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    // Initialize Typed.js
    const typed = new Typed(".role", options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run once when component mounts

  return (
    <div>
      {/* Header Section */}
      <Header />
      {/* Introduction Section */}
      <div className="intro">
        <h1 id="home">GYM HOME</h1>
        <div className="body">
          Welcome to Gym Home, your ultimate online fitness companion! Our
          website is designed to help you achieve your fitness goals from the
          comfort of your own home. With our comprehensive tracking system,
          you'll be able to monitor your progress and stay motivated on your
          journey to a healthier, stronger you. Plus, our extensive library of
          exercise videos will guide you through a variety of workouts, ensuring
          you never get bored or plateau. Whether you're a fitness enthusiast or
          just starting out, Gym Home is here to support and empower you every
          step of the way.
        </div>
        <div className="role"></div> {/* Placeholder for Typed.js */}
      </div>
      <ChatBoxSymbol />
      {/* Service Section */}
      <Service />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default GymHome;
