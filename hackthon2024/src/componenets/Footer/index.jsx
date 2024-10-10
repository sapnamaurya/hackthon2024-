import React from "react";
import "./style.css";
import { FaTwitterSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <footer>
        <div className="container footer-wrapper">
          <div className="footer-faded-text">Gym Home</div>
          <div className="link-wrapper">
            <div>
              <a onClick={handleLogin}>Log in</a>
            </div>
            <div>
              <a href="#membership">Membership</a>
            </div>
            <div>
              <a onClick={handleContact}>Contact Me</a>
            </div>
          </div>
          <div className="icon-wrapper">
            <FaTwitterSquare className="fa-brands fa-instagram icon" />
            <i className="fa-brands fa-instagram icon"></i>
            <i className="fa-regular fa-envelope icon"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
