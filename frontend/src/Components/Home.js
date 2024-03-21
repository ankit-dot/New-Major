import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/student-2.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Simplifying Learning for University Students
          </h1>
          <p className="primary-text">
          Boosting Academic Achievement: Facilitating Collaborative Learning through a Comprehensive Notes Sharing Platform
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section" style = {{display:"flex", justifyContent:"right"}}>
          <img src={BannerImage} alt="" className = "home_banner_image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
