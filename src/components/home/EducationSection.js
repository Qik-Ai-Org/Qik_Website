import React from "react";
import { Link } from "react-router-dom";

const EducationSection = ({ setShowEducation }) => (
  <div id="sub-edu-section">
    <h5 style={{ marginBottom: "30px" }}>
      <button
        style={{
          float: "left",
          backgroundColor: "transparent",
          borderColor: "transparent",
          outlineColor: "transparent",
          outline: "none",
        }}
        onClick={() => setShowEducation("mainSection")}
        id="showvs-edu"
      >
        <i className="fa fa-angle-left"> </i>
        <span
          style={{
            fontSize: "14px",
            color: "#000",
            fontWeight: "normal",
            marginRight: "40px",
          }}
        >
          Back
        </span>
      </button>
      Education sector
    </h5>
    <div className="col-md-12" id="products">
      <div className="row" style={{ marginBottom: "60px" }}>
        <div className="col-md-4 col-sm-6 col-6">
          <Link to="Academy">
            <div className="feature-item">
              <img src="./images/e3.svg" alt="Coaching service icon" />
              <br />
              Coaching
            </div>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-6">
          <Link to="Academy">
            <div className="feature-item">
              <img src="./images/e2.svg" alt="University and College education icon" />
              <br />
              University / College
            </div>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-6">
          <Link to="/Academy">
            <div className="feature-item">
              <img src="./images/e1.svg" alt="Business solution icon" />
              <br />
              Schools
            </div>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-6">
          <Link to="/Academy">
            <div className="feature-item">
              <img src="./images/e4.svg" alt="Business solution icon" />
              <br />
              Play Schools
            </div>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-6">
          <Link to="/Academy">
            <div className="feature-item">
              <img src="./images/e5.svg" alt="Business solution icon" />
              <br />
              Libraries
            </div>
          </Link>
        </div>
        <div className="col-md-4 col-sm-6 col-6">
          <Link to="/Academy">
            <div className="feature-item">
              <img src="./images/e6.svg" alt="Business solution icon" />
              <br />
              Home Tutors
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default EducationSection;
