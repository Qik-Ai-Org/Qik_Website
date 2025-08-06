import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main-style.css";
const Home = () => {
  const [showEducation, setShowEducation] = useState("mainSection");
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-4">
              <a href="/">
                <img
                  src={require("./images/logo.svg").default}
                  alt="Qik.ai"
                  className="img-logovs"
                />
              </a>
            </div>
            <div className="col-md-8 col-sm-8 col-8 text-right">
              <div className="us-contact">
                <i className="fa fa-envelope" /> hello@qik.ai
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="qik-intro" className="qik-intro ">
        <div className="container">
          <div className="row">
            <div className="col-md-7 animated animatedFadeInDown fadeInDown class-uvstext">
              <h1 className="heading-h1">Qik cloud stack </h1>
              <h2 className="heading-h2" style={{ fontWeight: "normal" }}>
                Every business tool you will ever need to fuel your business
                growth
              </h2>
              <div className="row">
                <div className="col-md-12">
                  <div>
                    {showEducation === "mainSection" && (
                      <div id="main-section">
                        <br />
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
                                // id="hidevs-edu"
                                onClick={() => setShowEducation("education")}
                              >
                                <div className="feature-item">
                                  <img
                                    src={require("./images/1.svg").default}
                                    alt=""
                                  />
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
                                // id="hidevs"
                                onClick={() => setShowEducation("healthCare")}
                              >
                                <div className="feature-item">
                                  <img
                                    src={require("./images/2.svg").default}
                                    alt=""
                                  />
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
                                // id="hidevs-retail"
                                onClick={() => setShowEducation("retail")}
                              >
                                <div className="feature-item">
                                  <img
                                    src={require("./images/3.svg").default}
                                    alt=""
                                  />
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
                                // id="hidevs-hr"
                              >
                                <div className="feature-item">
                                  <img
                                    src={require("./images/4.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  HR
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col-md-6 col-sm-12 col-12">
                              <button
                                style={{
                                  backgroundColor: "transparent",
                                  borderColor: "transparent",
                                  outlineColor: "transparent",
                                  outline: "none",
                                }}
                                onClick={() => setShowEducation("businessSolutions")}
                              >
                                <div className="feature-item">
                                  <img
                                    src={require("./images/crm.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  Business Solutions
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showEducation === "education" && (
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
                                  <img
                                    src={require("./images/e3.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  Coaching
                                </div>
                              </Link>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6">
                              <Link to="Academy">
                                <div className="feature-item">
                                  <img
                                    src={require("./images/e2.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  University / College
                                </div>
                              </Link>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6">
                              <Link to="/Academy">
                                <div className="feature-item">
                                  <img
                                    src={require("./images/e1.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  Schools
                                </div>
                              </Link>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6">
                              <Link to="/Academy">
                                <div className="feature-item">
                                  <img
                                    src={require("./images/e4.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  Play Schools
                                </div>
                              </Link>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6">
                              <Link to="/Academy">
                                <div className="feature-item">
                                  <img
                                    src={require("./images/e5.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  Libraries
                                </div>
                              </Link>
                            </div>
                            <div className="col-md-4 col-sm-6 col-6">
                              <Link to="/Academy">
                                <div className="feature-item">
                                  <img
                                    src={require("./images/e6.svg").default}
                                    alt=""
                                  />
                                  <br />
                                  Home Tutors
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showEducation === "healthCare" && (
                      <div id="sub-section">
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

                            // id="showvs"
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
                          Heath Care Sector
                        </h5>
                        <div className="col-md-12" id="products">
                          <div className="row">
                            <div className="col-md-12">
                              <h1
                                style={{ color: "#00abf6", fontWeight: "bold" }}
                              >
                                Coming Soon...
                              </h1>
                            </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showEducation === "retail" && (
                      <div id="sub-section-retail">
                        <h5 style={{ marginBottom: "30px" }}>
                          <button
                            style={{
                              float: "left",
                              backgroundColor: "transparent",
                              borderColor: "transparent",
                              outlineColor: "transparent",
                              outline: "none",
                            }}
                            // id="showvs-retail"
                            onClick={() => setShowEducation("mainSection")}
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
                          Retail Sector
                        </h5>
                        <div className="col-md-12" id="products">
                          <div className="row">
                            <div className="col-md-12">
                              <h1
                                style={{ color: "#00abf6", fontWeight: "bold" }}
                              >
                                Coming Soon...
                              </h1>
                            </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showEducation === "hr" && (
                      <div id="sub-section-hr">
                        <h5 style={{ marginBottom: "30px" }}>
                          <button
                            style={{
                              float: "left",
                              backgroundColor: "transparent",
                              borderColor: "transparent",
                              outlineColor: "transparent",
                              outline: "none",
                            }}
                            // id="showvs-hr"
                            onClick={() => setShowEducation("mainSection")}
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
                          HR Sector
                        </h5>
                        <div className="col-md-12" id="products">
                          <div className="row">
                            <div className="col-md-12">
                              <h1
                                style={{ color: "#00abf6", fontWeight: "bold" }}
                              >
                                Coming Soon...
                              </h1>
                            </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                            <div className="col-md-4 col-sm-4 col-4"> </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {showEducation === "businessSolutions" && (
                      <div id="sub-business-solutions">
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
                          Business Solutions
                        </h5>
                        <div className="col-md-12" id="products">
                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Compliance & Risk Management
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf7.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik Policy Management Portal</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Centralized policy creation, management, and compliance tracking
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf1.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik Whistleblower</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Anonymous reporting and incident management system
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf9.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik RetainRight</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Document Retention & Auto-Purge Scheduler: Automated compliance for data retention policies
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Legal & Documentation
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/email.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik LegaDraft</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  AI-Powered Legal Document Assistant: AI-driven legal document creation and review
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf9.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik RetainRight</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Document Retention & Auto-Purge Scheduler: Legal document lifecycle management
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Asset & Resource Management
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf3.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik AssetGrid</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Company Asset Tracker: Comprehensive asset inventory and management system
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Human Resources & Workforce
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf4.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik OnboardFlow</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Employee Onboarding and Off-boarding: Streamlined employee lifecycle management
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf2.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik OKR & Goals</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Objective and key results tracking and performance management
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Marketing & Communications
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/sms.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik DragonDrip</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Email Campaign Builder: Marketing automation and email campaign management
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Product & Development
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src={require("./images/cf8.svg").default}
                                  alt=""
                                />
                                <br />
                                <strong>Qik Feature Maestro</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  SaaS Feature Request Board: Product development and feature request management
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 animated animatedFadeInUp fadeInUp suvs-imgs">
              <img
                src={require("./images/intro.svg").default}
                width="100%"
                alt=""
              />
              <br />
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "   \n    .boxus { \n        align-self: flex-end;\n        animation-duration: 2s;\n        animation-iteration-count: infinite;\n        margin: 0 auto 0 auto;\n        transform-origin: bottom;\n    }\n    .bounce-1us {\n        animation-name: bounce-1us;\n        animation-timing-function: linear;\n    }\n    @keyframes bounce-1us {\n        0%   { transform: translateY(0); }\n        50%  { transform: translateY(-20px); }\n        100% { transform: translateY(0); }\n    }\n\t\n\n\t#products img {\n    text-align: center;\n    margin: 25px 0;\n}\n\t#products a {font-size:18px;color: #001e4b;  text-align: center;\n    font-weight: 600;}#products a:hover{color:#00abf6;}\n\t\n.feature-item{  -webkit-transition: all 0.25s linear;\n  transition: all 0.25s linear;}\n.feature-item:hover { \n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n\n.business-product {\n  border: 1px solid #eee;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  min-height: 200px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.business-product:hover {\n  box-shadow: 0 4px 8px rgba(0,0,0,0.15);\n  border-color: #00abf6;\n}\n\n.business-product img {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 15px;\n}\n\n.business-product strong {\n  display: block;\n  color: #001e4b;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n .us-contact {\n    font-size: 14px;\n    line-height: 28px;color: #001e4b;\n}a.btn-primary {\n    background: #2f42fc;\n    border-color: #2f42fc;\n    border-radius: 0;\n    text-align: left;padding: 15px 40px;font-size: 16px;font-weight:600;\n}\n.btn-primary{border-radius: 4px;}p{color: #001e4b;}body {\n    color: #001e4b;\n}.container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 96%;\n}\n",
        }}
      />

      <footer id="footer" className="animated animatedFadeInDown fadeInDown">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4>
                  <a href="/">
                    <img src={require("./images/logo.svg").default} alt="" />
                  </a>
                </h4>
                <p>
                  Supercharge your business with 50+ integrated business
                  applications. With Qik Cloud Stack, you can speedup, automate
                  and bring transparency to your business activities. Experience
                  the power of cloud to increase your business productivity by
                  20%.
                </p>
              </div>
              <div className="col-md-4 text-center-uvs">
                <h4>Contact</h4>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    marginTop: "20px",
                  }}
                >
                  <li style={{ marginBottom: "13px" }}>Email: hello@qik.ai</li>
                </ul>
              </div>
              <div className="col-md-4 text-right-uvs">
                <h4>Always reachable on</h4>
                <div className="social-links" style={{ marginTop: "20px" }}>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      outlineColor: "transparent",
                      outline: "none",
                    }}
                  >
                    <img
                      src={require("./images/linkedin.svg").default}
                      alt=""
                    />
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                      outlineColor: "transparent",
                      outline: "none",
                    }}
                  >
                    <img
                      src={require("./images/gmail.svg").default}
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="containervs">
          <div className="copyright">
            <p style={{ textAlign: "center" }}>
              All rights reserved © 2023
              <strong>
                <span>
                  <a href="/" target="_blank">
                    Qik.Ai
                  </a>
                </span>
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
