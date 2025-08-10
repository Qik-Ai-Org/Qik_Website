import React from "react";

const MainSection = ({ setShowEducation }) => (
  <div id="main-section">
    <h5>Select your business industry</h5>
    <div className="col-md-12" id="products">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-6">
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              outlineColor: "transparent",
              outline: "none",
              animationDuration: "10s",
              WebkitAnimationDuration: "10s",
            }}
            onClick={() => setShowEducation("education")}
          >
            <div className="feature-item">
              <img src="./images/1.svg" alt="Education sector icon" />
              <br />
              Education
            </div>
          </button>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              outlineColor: "transparent",
              outline: "none",
            }}
            onClick={() => setShowEducation("healthCare")}
          >
            <div className="feature-item">
              <img src="./images/2.svg" alt="Healthcare sector icon" />
              <br />
              Health care
            </div>
          </button>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              outlineColor: "transparent",
              outline: "none",
            }}
            onClick={() => setShowEducation("retail")}
          >
            <div className="feature-item">
              <img src="./images/3.svg" alt="Retail sector icon" />
              <br />
              Retail
            </div>
          </button>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              outlineColor: "transparent",
              outline: "none",
            }}
            onClick={() => setShowEducation("hr")}
          >
            <div className="feature-item">
              <img src="./images/4.svg" alt="HR sector icon" />
              <br />
              HR
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default MainSection;
