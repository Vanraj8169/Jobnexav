import React from "react";
import "./styles/HeroStyle.css";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
      <div className="home-bg">
        <section className="home">
          <div className="content">
            <h1>Discover Your Perfect Job Match Today.</h1>
            <p>
              We provide various job opportunities for freshers and working
              professional.
            </p>
            <Link to="/jobs" className="btn1">
              Find Jobs
            </Link>
            <Link to="/form" className="btn2">
              Hire Talent
            </Link>
          </div>

          <div className="image">
            <img
              src="https://k6m2v7y2.rocketcdn.me/wp-content/uploads/2023/03/blog-job-search.svg"
              alt="Company logo"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
