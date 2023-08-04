import React from "react";
import { Link } from "react-router-dom";
import "./styles/FooterStyle.css";
const Footer = () => {
  return (
    <footer id="contact">
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2023; Designed with ❤️ by <span>Vanraj Pardeshi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
