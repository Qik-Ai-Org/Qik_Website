"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./home/Header";
import Footer from "./home/Footer";
import IntroImage from "./home/IntroImage";
import BusinessSolutions from "./home/BusinessSolutions";
const Home = () => {
  // Enable alpha product listings via ?alpha=true (or ?alpha=1) on the client.
  const [alphaMode, setAlphaMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const alpha = (params.get("alpha") || "").toLowerCase();
    setAlphaMode(alpha === "true" || alpha === "1");
  }, []);

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
        
        {/* AI Network Animation as Background */}
        <div className="hero-animation-background">
          <IntroImage />
        </div>
        
        <div className="container hero-content">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10 hero-text-section">
              <div className="hero-badge">
                <span className="badge-icon">✨</span>
                <span className="badge-text">Next-Gen AI Technology</span>
              </div>
              <h1 className="hero-title">
                <span className="title-highlight">Qik Cloud Stack</span>
              </h1>
              <h2 className="hero-subtitle">
                Intelligent business solutions powered by AI to fuel your growth
              </h2>
              <p className="hero-description">
                Experience the future of business automation with our comprehensive 
                AI-powered cloud platform. From CRM to analytics, transform your 
                operations with cutting-edge artificial intelligence.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="hero-btn hero-btn-nova hero-btn-nova-primary" title="Get started with Qik" aria-label="Get Started with Qik platform">
                  <span className="hero-btn-label">Get Started</span>
                  <span className="hero-btn-icon-wrapper" aria-hidden="true">
                    <svg className="hero-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="M13 6l6 6-6 6"/>
                    </svg>
                  </span>
                </Link>
                <button 
                  onClick={() => {
                    const section = document.getElementById('business-solutions');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hero-btn hero-btn-nova hero-btn-nova-outline"
                >
                  <span className="hero-btn-label">Learn More</span>
                  <span className="hero-btn-icon-wrapper" aria-hidden="true">
                    <svg className="hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 12L3 7H13L8 12Z"/>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">AI Tools</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Businesses</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section id="business-solutions" className="business-solutions-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center" style={{ position: 'relative' }}>
                {alphaMode && (
                  <div
                    className="alpha-badge"
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '16px',
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #4F46E5 100%)',
                      color: '#fff',
                      padding: '6px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 700,
                      boxShadow: '0 6px 18px rgba(79,70,229,0.14)',
                      zIndex: 5,
                    }}
                    title="Alpha mode active"
                  >
                    ALPHA
                  </div>
                )}
                <h2 className="section-title">Our Business Solutions</h2>
                <p className="section-subtitle">
                  Comprehensive AI-powered tools to transform your business operations
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <BusinessSolutions alphaMode={alphaMode} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
