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
        {/* ...rest of the code remains unchanged... */}
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
        {/* ...footer remains unchanged... */}
      </footer>
    </div>
  );
};

export default Home;