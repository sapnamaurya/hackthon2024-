import React, { useState } from "react";
import "./style.css"; // Import the CSS file for styles
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import { Link } from "react-scroll";
const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <header className="main-container">
      <div class="image">
        <img src={logo} alt="GymHome" id="logo" />
      </div>
      <div class="tags">
        <nav className="navbr">
          <ul>
            <li>
              <a onClick={handleHome}>Home</a>
            </li>
            <li>
              <a href="#report">Report Analysis</a>
            </li>
            <li>
              <a href="#diet">Pre/Post Workout Diet</a>
            </li>
            <li>
              <a href="#exercise">Exercise</a>
            </li>
            <li>
              <a href="#motivational">Motivational Site</a>
            </li>
            <li>
              <a href="#membership">Membership</a>
            </li>
          </ul>
          <button onClick={handleLogin} className="btn-pink btn-project">
            Login
          </button>
        </nav>
        {/* <div className="login"> */}

        {/* </div> */}
      </div>
      {/* <nav className="nav">
        <div class="logo">
          <img src={logo} alt="GymHome" id="logo" />
        </div>
        <ul>
          <li onClick={handleHome}>
            <a>Home</a>
          </li>
          <li>
            <a href="#report">Report Analysis </a>
          </li>
          <li>
            {" "}
            <a href="#diet">Diet Plan</a>
          </li>
          <li>
            {" "}
            <a href="#exercise">Exercises</a>
          </li>
          <li>
            {" "}
            <a href="#motivational">Motivational Site</a>
          </li>
          <li>
            {" "}
            <a href="#membership">Membership</a>
          </li>
        </ul>
        <div className="login">
          <button onClick={handleLogin} className="btn-pink btn-project">
            Login
          </button>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
