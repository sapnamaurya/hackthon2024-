import React from "react";
import "./style.css";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container footer-wrapper">
          <div className="footer-faded-text">Gym Home</div>
          <div className="link-wrapper">
            <div>
              <a href="#login">Log in</a>
            </div>
            <div>
              <a href="#membership">Membership</a>
            </div>
            <div>
              <a href="#contactme">Contact Me</a>
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
