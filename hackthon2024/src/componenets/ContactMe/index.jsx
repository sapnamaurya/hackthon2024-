import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js
import "./style.css";
import Footer from "../../componenets/Footer";
import logo from "../../assets/images/logo.jpeg";
import { useNavigate } from "react-router-dom";
import ContHeader from "../ContHeader";
const GymHome = () => {
  const navigate = useNavigate();
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
  const handleHome = () => {
    navigate("/home");
  };
  const handleReport = () => {
    navigate("/home");
  };
  const handleExercise = () => {
    navigate("/home");
  };
  const handleDiet = () => {
    navigate("/home");
  };
  const handleMembership = () => {
    navigate("/home");
  };
  const handleMotivation = () => {
    navigate("/motivation");
  };
  return (
    <div class="form">
      {/* <!-- header section --> */}
      <ContHeader />
      {/* Header Section */}
      <section class="contact-form">
        <div class="form-container">
          <h2 style={{ color: "black", margin: "0" }}>Your Details</h2>
          <form action="#" method="POST">
            <div class="post">
              <label for="name">Name: </label>
              <input type="text" id="name" name="name" required />

              <label for="email">Email: </label>
              <input type="email" id="email" name="email" required />

              <label for="phone">Phone: </label>
              <input type="tel" id="phone" name="phone" />

              <label for="message">Message: </label>
              <textarea
                id="message"
                name="message"
                rows="10"
                required
              ></textarea>

              <button type="submit" class="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="role"></div> {/* Placeholder for Typed.js */}
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default GymHome;
