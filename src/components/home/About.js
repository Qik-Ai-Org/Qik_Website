
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "../AboutUs";

const About = () => {
  return (
    <div>
      <Header />
      <section id="qik-intro" className="qik-intro hero-enhanced">
        <div className="hero-background">
          <div className="hero-gradient-orb hero-orb-1"></div>
          <div className="hero-gradient-orb hero-orb-2"></div>
          <div className="hero-gradient-orb hero-orb-3"></div>
          <div className="hero-gradient-orb hero-orb-4"></div>
          <div className="hero-gradient-orb hero-orb-5"></div>
          <div className="hero-particles"></div>
          <div className="hero-particles-secondary"></div>
        </div>
        
        <div className="container hero-content">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10 hero-text-section">
              <AboutUs />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
