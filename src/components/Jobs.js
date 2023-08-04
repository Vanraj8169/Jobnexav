import React from "react";
import "./styles/JobStyle.css";
import NavBar from "./NavBar";
const Jobs = () => {
  return (
    <>
    <NavBar />
      <div className="heading">latest Jobs</div>
      <div className="box-container">
        <div className="box">
          <div className="company">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/336/451/original/infosys-logo-infosys-icon-free-free-vector.jpg"
              alt=""
            />
            <div>
              <h3>IT infosys.co</h3>
              <span>2 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Senior Web Developer</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Mumbai,India</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>10k - 25k</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>Part-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
        <div className="box">
          <div className="company">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png"
              alt=""
            />
            <div>
              <h3>Capgemini</h3>
              <span>15 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Software Developer</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Hyderabad,India</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>30k - 40k</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>Full-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
        <div className="box">
          <div className="company">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
            <div>
              <h3>Google</h3>
              <span>4 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Senior Software Developer</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Gurgaon,India</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>80k - 1.5L</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>Full-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
        <div className="box">
          <div className="company">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/766/223/original/amazon-logo-amazon-icon-transparent-free-png.png"
              alt=""
            />
            <div>
              <h3>Amazon</h3>
              <span>16 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Systems Analyst</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Bangalore,India</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>60k - 80k</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>full-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
        <div className="box">
          <div className="company">
            <img
              src="https://img.freepik.com/free-icon/mac-os_318-10374.jpg"
              alt=""
            />
            <div>
              <h3>Apple</h3>
              <span>30 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Software Designer</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Mumbai,India</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>1.5L - 2L</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>full-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
        <div className="box">
          <div className="company">
            <img
              src="https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg"
              alt=""
            />
            <div>
              <h3>IBM</h3>
              <span>28 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Data Scientist</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Nagpur,India</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>40k - 60k</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>full-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
        <div className="box">
          <div className="company">
            <img
              src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg"
              alt=""
            />
            <div>
              <h3>Salesforce</h3>
              <span>6 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Salesforce Developer</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Remote</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>90k - 1L</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>full-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
        <div className="box">
          <div className="company">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png"
              alt=""
            />
            <div>
              <h3>Dell</h3>
              <span>9 days ago</span>
            </div>
          </div>
          <h3 className="job-title">Senior Data Analyst</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Remote</span>
          </p>
          <div className="tags">
            <p>
              <i className="fas fa-indian-rupee-sign"></i>
              <span>55k - 75k</span>
            </p>
            <p>
              <i class="fa-solid fa-briefcase">
                <span>Part-time</span>
              </i>
            </p>
            <p>
              <i className="fas fa-clock">
                <span>day shift</span>
              </i>
            </p>
          </div>
          <div className="flex-btn">
            <a href="#" className="btn">
              Apply
            </a>
            <button type="submit" className="far fa-heart" name="save"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
