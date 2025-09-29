import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,   
} from "react-icons/fa";
import logo from "../assets/7.png";


import "./style.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-left">
           <p className="logo"> Recipe World</p>

          <p className="footer-heading">Address</p>
          <p className="footer-text">
            Level 1, 12 Sample St, Sydney NSW 2000
          </p>

          <p className="footer-heading">Contact</p>
          <p className="footer-text">1800 123 4567</p>
          <a href="mailto:support@recipeworld.com" className="footer-link">
            support@recipeworld.com
          </a>

          <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        </div>


        {/* Middle Section */}
        <div className="footer-links">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>


        {/* Right Section */}
        <div className="footer-links">
          <ul>
            <li><a href="#">Chefs</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Media</a></li>
          </ul>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Recipe World. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookies settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
