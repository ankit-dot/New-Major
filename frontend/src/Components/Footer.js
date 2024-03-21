import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
      <div className="footer-logo-container" style = {{color:"#E49010", fontSize:"2rem"}}>
        College Guru
      </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Home</span>
          <span>Help</span>
          <span>Share</span>

          <span>Testimonials</span>
          <span>Services</span>
        </div>
        <div className="footer-section-columns">
          <span>+91 9399148017</span>
          <span>ankitsolanki61375@gmail.com</span>
          <span>Ankit939914@gmail.com</span>
          <span>ankit.solanki.ds.20@gmail.com</span>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
