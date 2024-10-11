import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import "./style.css";

const ContHeader = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  const handleReport = () => {
    navigate("/report");
  };
  const handleExercise = () => {
    navigate("/exercise");
  };
  const handleDiet = () => {
    navigate("/diet");
  };
  const handleMembership = () => {
    navigate("/membership");
  };
  const handleMotivation = () => {
    navigate("/motivation");
  };
  return (
    <div class="main-cont">
      <div class="img">
        <img src={logo} alt="GymHome" id="logo" />
      </div>
      <div class="tags">
        <nav className="navbar">
          <ul>
            <li>
              <a onClick={handleHome}>Home</a>
            </li>
            <li>
              <a onClick={handleReport}>Report Analysis</a>
            </li>
            <li>
              <a onClick={handleDiet}>Pre/Post Workout Diet</a>
            </li>
            <li>
              <a onClick={handleExercise}>Exercise</a>
            </li>
            <li>
              <a onClick={handleMotivation}>Motivational Site</a>
            </li>
            <li>
              <a onClick={handleMembership}>Membership</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ContHeader;
