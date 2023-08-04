import React from "react";
import "./styles/ServicesStyle.css";
const Services = () => {
  return (
    <div id="services" className="container">
      <h1>Our Services</h1>
      <div className="row">
        <div className="service">
          <i className="fas fa-user-doctor"></i>
          <h2>Job Listings</h2>
          <p>
            Our job portal website provides an extensive database of job
            listings across various industries and locations.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-chart-line"></i>
          <h2>Application Tracking</h2>
          <p>
            Our application tracking feature helps job seekers manage their
            applications efficiently.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-bell"></i>
          <h2>Personalized Job Alerts</h2>
          <p>
            To streamline the process, we offer personalized job alert services.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-star"></i>
          <h2>Company Reviews and Insights</h2>
          <p>
            Our platform features honest and unbiased company reviews from
            current and former employees.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-id-badge"></i>
          <h2>Career Counseling</h2>
          <p>
            Our team of career experts is available to provide personalized
            career counseling sessions.
          </p>
        </div>
        <div className="service">
          <i className="fas fa-network-wired"></i>
          <h2>Resume Building and Review</h2>
          <p>We offer resume building tools and expert review services.</p>
        </div>
        <div className="service">
          <i className="fas fa-network-wired"></i>
          <h2>Networking and Skill Building</h2>
          <p>Expand your professional network and enhance your skills.</p>
        </div>
        <div className="service">
          <i className="fas fa-clipboard-question"></i>
          <h2>Interview Preparation</h2>
          <p>
            Excel in interviews with our comprehensive interview preparation
            resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
