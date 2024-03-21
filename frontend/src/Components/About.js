import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/student-4.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" className = "about-background-image" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Features and Benefits of College Guru
        </h1>
        <p className="primary-text">
          <ul>
            <li>
            CollegeGuru is a Web app that provides a comprehensive learning experience for university students. It offers a wide range of features, including curated exam notes, comprehensive mock tests, expert-led live classes, career roadmaps, and an AI-powered help chatbot. CollegeGuru is designed to help students improve their exam performance, enhance their subject understanding, plan their careers, and get real-time support.
                            
            </li>
           
          </ul>
        </p>
        <p className="primary-text">
          We are onto add more services in our project.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
