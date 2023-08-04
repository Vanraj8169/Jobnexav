import React from "react";
import "./formStyle.css";
import { Link } from 'react-router-dom';
const Form = () => {
  return (
    <>
      <div className="container">
        <h1>GET IN TOUCH</h1>
        <p>Bridge the Gap: Connect Talent with the Market.</p>
        <form>
          <div className="row">
            <div className="column">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Your name here" />
            </div>
            <div className="column">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Your email here" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label for="subject">Company Name</label>
              <input type="text" id="subject" placeholder="Company Name" />
            </div>
            <div className="column">
              <label for="role">Job Role</label>
              <input type="role" id="role" placeholder="Job Role" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label for="subject">Salary</label>
              <input type="tel" id="salary" placeholder="Salary" />
            </div>
            <div className="column">
              <label for="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                placeholder="Your Phone Number here"
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label for="issue">Job Description</label>
              <textarea
                id="jobdesc"
                placeholder="Describe job"
                rows="3"
              ></textarea>
            </div>
          </div>
          <Link to="/" className="button">Submit</Link>
        </form>
      </div>
    </>
  );
};

export default Form;
