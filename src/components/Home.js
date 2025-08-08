import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main-style.css";
const Home = () => {
  const [showEducation, setShowEducation] = useState("mainSection");
  const [activeTab, setActiveTab] = useState("businessSolutions");
  return (
    <div>
      <header className="fixed w-full top-0 z-50 bg-surface-elevated/95 backdrop-blur-md border-b border-qik-purple/10 shadow-lg shadow-qik-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img
                  src="./images/logo.png"
                  alt="Qik.ai Logo - Complete Business Cloud Stack"
                  className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
            
            {/* Contact Section */}
            <div className="flex items-center">
              <div className="flex items-center text-text-secondary text-sm sm:text-base">
                <i className="fa fa-envelope mr-2 text-qik-purple" />
                <span className="font-medium">hello@qik.ai</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="qik-intro" className="qik-intro pt-20 sm:pt-24 lg:pt-28">
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
                    <br />
                    {/* Tab Navigation */}
                    <div className="tab-navigation">
                      <button
                        className={`tab-button ${activeTab === "businessSolutions" ? "active" : ""}`}
                        onClick={() => {
                          setActiveTab("businessSolutions");
                          setShowEducation("businessSolutions");
                        }}
                      >
                        Business Solutions
                      </button>
                      <button
                        className={`tab-button ${activeTab === "industries" ? "active" : ""}`}
                        onClick={() => {
                          setActiveTab("industries");
                          setShowEducation("mainSection");
                        }}
                      >
                        Industries
                      </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "industries" && showEducation === "mainSection" && (
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
                                  <img
                                    src="./images/1.svg"
                                    alt="Education sector icon"
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
                                onClick={() => setShowEducation("healthCare")}
                              >
                                <div className="feature-item">
                                  <img
                                    src="./images/2.svg"
                                    alt="Healthcare sector icon"
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
                                onClick={() => setShowEducation("retail")}
                              >
                                <div className="feature-item">
                                  <img
                                    src="./images/3.svg"
                                    alt="Retail sector icon"
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
                              >
                                <div className="feature-item">
                                  <img
                                    src="./images/4.svg"
                                    alt="HR sector icon"
                                  />
                                  <br />
                                  HR
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "industries" && showEducation === "education" && (
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
                                    src="./images/e3.svg"
                                    alt="Coaching service icon"
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
                                    src="./images/e2.svg"
                                    alt="University and College education icon"
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
                                    src="./images/e1.svg"
                                    alt="Business solution icon"
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
                                    src="./images/e4.svg"
                                    alt="Business solution icon"
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
                                    src="./images/e5.svg"
                                    alt="Business solution icon"
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
                                    src="./images/e6.svg"
                                    alt="Business solution icon"
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
                    {activeTab === "industries" && showEducation === "healthCare" && (
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
                    {activeTab === "industries" && showEducation === "retail" && (
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
                    {activeTab === "industries" && showEducation === "hr" && (
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
                    {activeTab === "businessSolutions" && (
                      <div id="sub-business-solutions">
                        <h5 style={{ marginBottom: "30px" }}>
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
                                  src="./images/cf7.svg"
                                  alt="Business solution icon"
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
                                  src="./images/cf1.svg"
                                  alt="Business solution icon"
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
                                  src="./images/cf9.svg"
                                  alt="Business solution icon"
                                />
                                <br />
                                <strong>Qik RetainRight</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Document Retention & Auto-Purge Scheduler: Automated compliance for data retention policies
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src="./images/email.svg"
                                  alt="Business solution icon"
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
                                  src="./images/nexuspost.svg"
                                  alt="NexusPost Social Media Management icon"
                                />
                                <br />
                                <strong>NexusPost</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Social Media Management
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src="./images/email-validator.svg"
                                  alt="Qik Email Validator icon"
                                />
                                <br />
                                <strong>Qik Email Validator</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Email verification
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
                                  src="./images/cf3.svg"
                                  alt="Business solution icon"
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
                                  src="./images/cf4.svg"
                                  alt="Business solution icon"
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
                                  src="./images/cf2.svg"
                                  alt="Business solution icon"
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
                                  src="./images/sms.svg"
                                  alt="Business solution icon"
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
                                  src="./images/cf8.svg"
                                  alt="Business solution icon"
                                />
                                <br />
                                <strong>Qik Feature Maestro</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  SaaS Feature Request Board: Product development and feature request management
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Resource Reservation System
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src="./images/bookit.svg"
                                  alt="Qik BookIt icon"
                                />
                                <br />
                                <strong>Qik BookIt</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Resource booking and reservation management system
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12" style={{ marginBottom: "20px" }}>
                              <h6 style={{ color: "#00abf6", fontWeight: "bold", marginBottom: "15px" }}>
                                Engagement & Communication
                              </h6>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src="./images/allvoices.svg"
                                  alt="Qik AllVoices icon"
                                />
                                <br />
                                <strong>Qik AllVoices</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Employee voice and feedback collection platform
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src="./images/surveys.svg"
                                  alt="Qik Surveys icon"
                                />
                                <br />
                                <strong>Qik Surveys</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Survey creation and data collection tools
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-12" style={{ marginBottom: "20px" }}>
                              <div className="feature-item business-product">
                                <img
                                  src="./images/forms.svg"
                                  alt="Qik Forms icon"
                                />
                                <br />
                                <strong>Qik Forms</strong>
                                <p style={{ fontSize: "12px", marginTop: "8px" }}>
                                  Dynamic form builder and data collection
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
                src="./images/intro.svg"
                width="100%"
                alt="Business solution icon"
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
                    <img src="./images/logo.svg" alt="Qik.ai Logo" />
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
                      src="./images/linkedin.svg"
                      alt="Business solution icon"
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
                      src="./images/gmail.svg"
                      alt="Business solution icon"
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
