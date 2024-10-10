import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.jpeg";
import { useNavigate } from "react-router-dom";

const MotivationHeader = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Fitness Motivation" />
      </div>
      <nav>
        <ul>
          <li>
            <a onClick={handleHome}>Home</a>
          </li>
          <li>
            <a href="#quotes">Quotes</a>
          </li>
          <li>
            <a href="#tips">Fitness Tips</a>
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MotivationHeader;
