import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main-style.css";
const Home = () => {
  const [showEducation, setShowEducation] = useState("mainSection");
  const [activeTab, setActiveTab] = useState("businessSolutions");
  return (
    <div>
      <header className="glass-header fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img
                  src="./images/logo.png"
                  alt="Qik.ai Logo - Complete Business Cloud Stack"
                  className="h-10 sm:h-12 lg:h-14 w-auto transition-transform duration-300 hover:scale-105"
                  style={{ maxHeight: "48px", height: "auto", maxWidth: "90vw" }}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Complete Business
                <span className="block bg-gradient-to-r from-qik-purple to-qik-blue bg-clip-text text-transparent">
                  Cloud Stack
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
                Supercharge your business with 50+ integrated applications. 
                Automate compliance, HR, legal documentation, asset management, 
                and more to increase productivity by 20%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-qik-purple to-qik-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-qik-purple/25 hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-qik-purple text-qik-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-qik-purple hover:text-white">
                  View Demo
                </button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <img
                src="./images/intro.svg"
                alt="Qik.ai Complete Business Cloud Stack"
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>

          {/* Business Solutions Tabs */}
          <div className="mt-16 lg:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Industry & Business Solutions
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Comprehensive solutions tailored for different industries and business functions
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "businessSolutions"
                    ? "bg-gradient-to-r from-qik-purple to-qik-blue text-white shadow-lg"
                    : "bg-white text-text-secondary border border-gray-200 hover:border-qik-purple hover:text-qik-purple"
                }`}
                onClick={() => setActiveTab("businessSolutions")}
              >
                Business Solutions
              </button>
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "industrySolutions"
                    ? "bg-gradient-to-r from-qik-purple to-qik-blue text-white shadow-lg"
                    : "bg-white text-text-secondary border border-gray-200 hover:border-qik-purple hover:text-qik-purple"
                }`}
                onClick={() => setActiveTab("industrySolutions")}
              >
                Industry Solutions
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {activeTab === "businessSolutions" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md transition-shadow duration-300">
                    <img src="./images/hr.svg" alt="HR Management" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-text-primary mb-2">HR Management</h3>
                    <p className="text-sm text-text-secondary">Complete employee lifecycle management and payroll automation</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md transition-shadow duration-300">
                    <img src="./images/crm.svg" alt="CRM" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-text-primary mb-2">CRM & Sales</h3>
                    <p className="text-sm text-text-secondary">Customer relationship management and sales automation</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md transition-shadow duration-300">
                    <img src="./images/expenses.svg" alt="Finance" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-text-primary mb-2">Finance & Accounting</h3>
                    <p className="text-sm text-text-secondary">Automated bookkeeping, invoicing, and expense management</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md transition-shadow duration-300">
                    <img src="./images/web.svg" alt="Web Presence" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-text-primary mb-2">Web Presence</h3>
                    <p className="text-sm text-text-secondary">Professional website builder and digital marketing tools</p>
                  </div>
                </div>
              )}
              
              {activeTab === "industrySolutions" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md transition-shadow duration-300">
                    <img src="./images/education.svg" alt="Education" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-text-primary mb-2">Education</h3>
                    <p className="text-sm text-text-secondary">Complete academic management for schools and coaching institutes</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md transition-shadow duration-300">
                    <img src="./images/healthcare.svg" alt="Healthcare" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-text-primary mb-2">Healthcare</h3>
                    <p className="text-sm text-text-secondary">Patient management, appointments, and medical records</p>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md transition-shadow duration-300">
                    <img src="./images/appoint.svg" alt="Services" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-text-primary mb-2">Professional Services</h3>
                    <p className="text-sm text-text-secondary">Project management and client service automation</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .glass-header {
              background: rgba(34, 34, 68, 0.55);
              box-shadow: 0 4px 32px 0 rgba(31, 38, 135, 0.13);
              backdrop-filter: blur(18px) saturate(160%);
              -webkit-backdrop-filter: blur(18px) saturate(160%);
              border-bottom: 1.5px solid rgba(156, 39, 176, 0.18);
              border-radius: 0 0 22px 22px;
              transition: background 0.3s, box-shadow 0.3s;
            }
            @media (max-width: 600px) {
              .glass-header {
                border-radius: 0 0 16px 16px;
                backdrop-filter: blur(12px) saturate(140%);
                -webkit-backdrop-filter: blur(12px) saturate(140%);
              }
            }
          `
        }}
      />
      <footer id="footer" className="animated animatedFadeInDown fadeInDown">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <img src="./images/logo.svg" alt="Qik.ai" className="h-12 mb-4" />
                <p className="text-gray-300 mb-4">
                  Complete business cloud stack with 50+ integrated applications to supercharge your business growth.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-qik-purple transition-colors">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-qik-purple transition-colors">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="mailto:hello@qik.ai" className="text-gray-400 hover:text-qik-purple transition-colors">
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-qik-purple transition-colors">Business Apps</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-qik-purple transition-colors">HR Management</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-qik-purple transition-colors">CRM & Sales</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-qik-purple transition-colors">Finance Tools</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-qik-purple transition-colors">Web Builder</a></li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2">
                  <li><Link to="/Academy" className="text-gray-300 hover:text-qik-purple transition-colors">Education</Link></li>
                  <li><a href="#" className="text-gray-300 hover:text-qik-purple transition-colors">Healthcare</a></li>
                  <li><Link to="/Business" className="text-gray-300 hover:text-qik-purple transition-colors">Business</Link></li>
                  <li><a href="#" className="text-gray-300 hover:text-qik-purple transition-colors">Professional Services</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">
                    <i className="fa fa-envelope mr-2"></i>
                    <a href="mailto:hello@qik.ai" className="hover:text-qik-purple transition-colors">hello@qik.ai</a>
                  </li>
                  <li className="text-gray-300">
                    <i className="fa fa-phone mr-2"></i>
                    <span>+91 9876543210</span>
                  </li>
                  <li className="text-gray-300">
                    <i className="fa fa-map-marker mr-2"></i>
                    <span>India</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-300">
                © 2024 Qik.ai. All rights reserved. | 
                <a href="#" className="text-qik-purple hover:text-qik-purple-light ml-1">Privacy Policy</a> | 
                <a href="#" className="text-qik-purple hover:text-qik-purple-light ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;