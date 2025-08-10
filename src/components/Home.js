import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main-style.css";
import Header from "./home/Header";
import Footer from "./home/Footer";
import IntroImage from "./home/IntroImage";
import TabNavigation from "./home/TabNavigation";
import MainSection from "./home/MainSection";
import EducationSection from "./home/EducationSection";
import ComingSoonSection from "./home/ComingSoonSection";
import BusinessSolutions from "./home/BusinessSolutions";
const Home = () => {
  const [showEducation, setShowEducation] = useState("mainSection");
  const [activeTab, setActiveTab] = useState("businessSolutions");
  return (
    <div>
      <Header />
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
                    <br />
                    <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} setShowEducation={setShowEducation} />
                    {/* Tab Content */}
                    {activeTab === "industries" && showEducation === "mainSection" && (
                      <MainSection setShowEducation={setShowEducation} />
                    )}
                    {activeTab === "industries" && showEducation === "education" && (
                      <EducationSection setShowEducation={setShowEducation} />
                    )}
                    {activeTab === "industries" && showEducation === "healthCare" && (
                      <ComingSoonSection title="Heath Care Sector" setShowEducation={setShowEducation} />
                    )}
                    {activeTab === "industries" && showEducation === "retail" && (
                      <ComingSoonSection title="Retail Sector" setShowEducation={setShowEducation} />
                    )}
                    {activeTab === "industries" && showEducation === "hr" && (
                      <ComingSoonSection title="HR Sector" setShowEducation={setShowEducation} />
                    )}
                    {activeTab === "businessSolutions" && (
                      <BusinessSolutions />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <IntroImage />
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "   \n    .boxus { \n        align-self: flex-end;\n        animation-duration: 2s;\n        animation-iteration-count: infinite;\n        margin: 0 auto 0 auto;\n        transform-origin: bottom;\n    }\n    .bounce-1us {\n        animation-name: bounce-1us;\n        animation-timing-function: linear;\n    }\n    @keyframes bounce-1us {\n        0%   { transform: translateY(0); }\n        50%  { transform: translateY(-20px); }\n        100% { transform: translateY(0); }\n    }\n\n\t#products img {\n    text-align: center;\n    margin: 25px 0;\n}\n\t#products a {font-size:18px;color: #001e4b;  text-align: center;\n    font-weight: 600;}#products a:hover{color:#00abf6;}\n\n.feature-item{  -webkit-transition: all 0.25s linear;\n  transition: all 0.25s linear;}\n.feature-item:hover { \n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n\n.business-product {\n  border: 1px solid #eee;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  min-height: 200px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.business-product:hover {\n  box-shadow: 0 4px 8px rgba(0,0,0,0.15);\n  border-color: #00abf6;\n}\n\n.business-product img {\n  width: 100%;\n  height: auto;\n  margin: 0 auto 15px;\n  aspect-ratio: 16/9;\n  object-fit: contain;\n}\n\n.business-product strong {\n  display: block;\n  color: #001e4b;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n\n .us-contact {\n    font-size: 14px;\n    line-height: 28px;color: #001e4b;\n}a.btn-primary {\n    background: #2f42fc;\n    border-color: #2f42fc;\n    border-radius: 0;\n    text-align: left;padding: 15px 40px;font-size: 16px;font-weight:600;\n}.btn-primary{border-radius: 4px;}p{color: #001e4b;}body {\n    color: #001e4b;\n}.container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 96%;\n}\n\n.sticky-column {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 20px;\n  align-self: flex-start;\n}\n",
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;
