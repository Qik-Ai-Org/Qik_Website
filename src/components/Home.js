import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../main-style.css";
import Header from "./home/Header";
import Footer from "./home/Footer";
import IntroImage from "./home/IntroImage";
import BusinessSolutions from "./home/BusinessSolutions";
const Home = () => {
  const location = useLocation();
  
  // Support both BrowserRouter query (?alpha=true) and HashRouter usage (#/?alpha=true)
  const getQueryString = () => {
    // Prefer the react-router location.search if present
    if (location && location.search && location.search.length > 0) return location.search;
    // Fallback to window.location.search (when app not using hash)
    if (typeof window !== 'undefined' && window.location && window.location.search && window.location.search.length > 0) {
      return window.location.search;
    }
    // If HashRouter is used, query params may be inside the hash (#/path?alpha=true)
    if (typeof window !== 'undefined' && window.location && window.location.hash) {
      const hash = window.location.hash;
      const qIndex = hash.indexOf('?');
      if (qIndex !== -1) return hash.substring(qIndex);
    }
    return '';
  };

  const params = new URLSearchParams(getQueryString());
  const alphaMode = ((params.get("alpha") || "").toLowerCase() === "true") || params.get("alpha") === "1";

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
                <Link to="/contact" className="hero-btn hero-btn-nova hero-btn-nova-primary" title="Get started with Qik" aria-label="Get Started with Qik platform">
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
      <style
        dangerouslySetInnerHTML={{
          __html:
            `
    /* Modern Header Styles */
    .modern-header {
  background: rgba(248, 250, 252, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(139, 92, 246, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10003;
  transition: all 0.3s ease;
  height: 60px;
  padding: 0;
  overflow: hidden;
    }

    .modern-header.scrolled {
      background: rgba(248, 250, 252, 0.98);
      box-shadow: 0 8px 32px rgba(139, 92, 246, 0.1);
      border-bottom-color: rgba(139, 92, 246, 0.2);
    }

    .navbar-modern {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      position: relative;
      max-width: 100%;
      overflow: hidden;
    }

    /* Logo Section */
    .navbar-brand {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      z-index: 1001;
      flex: 0 0 auto;
    }

    .logo-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: all 0.3s ease;
      padding: 8px 0;
    }

    .logo-link:hover {
      transform: translateY(-1px);
    }

    .logo-img {
  height: 50px;
      width: auto;
      transition: all 0.3s ease;
      display: block;
      vertical-align: middle;
      max-width: 100%;
    }

    .logo-text {
      font-size: 1.8rem;
      font-weight: 800;
      line-height: 1;
    }

    .logo-qik {
      color: var(--text-primary);
    }

    .logo-ai {
      background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Desktop Navigation */
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .nav-link {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      padding: 8px 0;
      position: relative;
      transition: all 0.3s ease;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%);
      transition: width 0.3s ease;
    }

    .nav-link:hover {
      color: var(--qik-purple);
    }

    .nav-link:hover::after {
      width: 100%;
    }

    /* Navigation CTA Buttons */
    .nav-cta {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nav-btn {
      padding: 10px 20px;
      font-size: 0.9rem;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      border: none;
      cursor: pointer;
    }

    .nav-btn.btn-primary {
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(0, 212, 230, 0.3);
      border-radius: 10px;
    }

    .nav-btn.btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 212, 230, 0.4);
      color: white;
    }

    .nav-btn.btn-outline-primary {
      background: rgba(0, 212, 230, 0.05);
      border: 1.5px solid rgba(0, 212, 230, 0.3);
      color: var(--qik-cyan);
      backdrop-filter: blur(10px);
      border-radius: 10px;
    }

    .nav-btn.btn-outline-primary:hover {
      background: rgba(0, 212, 230, 0.1);
      border-color: var(--qik-cyan);
      color: var(--qik-cyan);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 212, 230, 0.2);
    }

    /* Mobile Menu Toggle */
    .mobile-menu-toggle {
      display: none !important;
      background: none !important;
      border: none !important;
      padding: 12px !important;
      cursor: pointer !important;
      z-index: 10002 !important;
      transition: all 0.3s ease !important;
      position: relative !important;
      border-radius: 8px !important;
    }

    .mobile-menu-toggle:hover {
      background: rgba(139, 92, 246, 0.1) !important;
    }

    /* Show mobile menu toggle on mobile devices */
    @media (max-width: 768px) {
      .mobile-menu-toggle {
        display: block !important;
      }
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      width: 24px;
      height: 18px;
      position: relative;
      justify-content: space-between;
    }

    .hamburger span {
      display: block;
      height: 2px;
      width: 100%;
      background: var(--text-primary);
      border-radius: 1px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
    }

    .hamburger span:nth-child(1) {
      transform: translateY(0);
    }

    .hamburger span:nth-child(2) {
      transform: translateY(0);
    }

    .hamburger span:nth-child(3) {
      transform: translateY(0);
    }

    .hamburger.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
      transform: scale(0);
    }

    .hamburger.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .mobile-nav {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background: rgba(248, 250, 252, 0.98) !important;
      backdrop-filter: blur(20px) !important;
      transform: translateX(100%) !important;
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), visibility 0.4s ease, opacity 0.4s ease !important;
      z-index: 10001 !important;
      display: block !important;
      visibility: hidden !important;
      opacity: 0 !important;
      overflow: hidden !important;
      pointer-events: none !important;
    }

    .mobile-nav.active {
      transform: translateX(0) !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    }

    .mobile-nav-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      padding: 100px 20px 60px;
      gap: 50px;
      position: relative;
      pointer-events: auto;
      transform: translateX(0);
      opacity: 0;
      transition: opacity 0.4s ease 0.2s;
    }

    .mobile-nav.active .mobile-nav-content {
      opacity: 1;
    }

    /* Overlay click area */
    .mobile-nav::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: -1;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      width: 100%;
      padding: 0 40px;
    }

    .mobile-nav-link {
      color: var(--text-primary);
      text-decoration: none;
      font-size: 2rem;
      font-weight: 600;
      transition: all 0.3s ease;
      text-align: center;
      width: 100%;
      padding: 15px 0;
      border-radius: 10px;
      opacity: 0;
      transform: translateY(20px);
    }

    .mobile-nav.active .mobile-nav-link {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.3s ease, opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
    }

    .mobile-nav.active .mobile-nav-link:nth-child(1) { transition-delay: 0.4s; }
    .mobile-nav.active .mobile-nav-link:nth-child(2) { transition-delay: 0.5s; }
    .mobile-nav.active .mobile-nav-link:nth-child(3) { transition-delay: 0.6s; }

    .mobile-nav-link:hover {
      color: var(--qik-purple);
      transform: translateY(-2px) scale(1.05);
      background: rgba(139, 92, 246, 0.1);
    }

    .mobile-nav-cta {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      max-width: 280px;
    }

    .mobile-nav-btn {
      width: 100%;
      justify-content: center;
      padding: 16px 24px;
      font-size: 1rem;
    }

    /* Contact Info */
    .header-contact {
      display: none;
      position: absolute;
      top: -35px;
      right: 0;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 6px;
      background: rgba(139, 92, 246, 0.05);
      transition: all 0.3s ease;
    }

    .contact-link:hover {
      color: var(--qik-purple);
      background: rgba(139, 92, 246, 0.1);
    }

    /* Enhanced Hero Section with Background Animation */
    .hero-enhanced {
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, 
        rgba(248, 250, 252, 0.95) 0%,
        rgba(248, 250, 252, 0.8) 50%,
        rgba(239, 246, 255, 0.9) 100%);
      display: flex;
      align-items: center;
      padding: 140px 0 80px; /* Increased top padding for header */
    }

    @media (max-width: 600px) {
      .hero-enhanced {
        padding-top: 170px;
      }
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }

    /* AI Animation Background Layer */
    .hero-animation-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0.4;
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 3;
    }

    /* Hero Text Section - Centered and Enhanced */
    .hero-text-section {
      animation: slideInFromBottom 1.2s ease-out;
      text-align: center;
      position: relative;
      z-index: 4;
    }

    @keyframes slideInFromBottom {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* Floating gradient orbs */
    .hero-gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.6;
      animation: float 8s ease-in-out infinite;
    }

    .hero-orb-1 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(0, 212, 230, 0.3) 0%, transparent 70%);
      top: -200px;
      left: -200px;
      animation-delay: 0s;
    }

    .hero-orb-2 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%);
      top: 60%;
      right: -150px;
      animation-delay: -3s;
    }

    .hero-orb-3 {
      width: 250px;
      height: 250px;
      background: radial-gradient(circle, rgba(232, 121, 249, 0.2) 0%, transparent 70%);
      top: 30%;
      left: 70%;
      animation-delay: -6s;
    }

    .hero-orb-4 {
      width: 180px;
      height: 180px;
      background: radial-gradient(circle, rgba(0, 212, 230, 0.15) 0%, transparent 70%);
      top: 70%;
      left: 10%;
      animation-delay: -2s;
    }

    .hero-orb-5 {
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(79, 70, 229, 0.18) 0%, transparent 70%);
      top: 10%;
      left: 40%;
      animation-delay: -8s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) scale(1); }
      33% { transform: translateY(-30px) scale(1.1); }
      66% { transform: translateY(20px) scale(0.9); }
    }

    /* Floating particles */
    .hero-particles {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(2px 2px at 20px 30px, rgba(0, 212, 230, 0.4), transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(79, 70, 229, 0.3), transparent),
        radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.5), transparent),
        radial-gradient(1px 1px at 130px 80px, rgba(0, 212, 230, 0.3), transparent),
        radial-gradient(2px 2px at 160px 30px, rgba(79, 70, 229, 0.2), transparent),
        radial-gradient(1px 1px at 50px 10px, rgba(232, 121, 249, 0.3), transparent),
        radial-gradient(1px 1px at 110px 60px, rgba(0, 212, 230, 0.2), transparent),
        radial-gradient(2px 2px at 80px 90px, rgba(79, 70, 229, 0.15), transparent),
        radial-gradient(1px 1px at 170px 50px, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(1px 1px at 30px 85px, rgba(232, 121, 249, 0.2), transparent);
      background-repeat: repeat;
      background-size: 120px 80px;
      animation: sparkle 12s linear infinite;
    }

    @keyframes sparkle {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-160px); }
    }

    /* Secondary particle layer for more density */
    .hero-particles-secondary {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(1px 1px at 35px 15px, rgba(0, 212, 230, 0.25), transparent),
        radial-gradient(1px 1px at 75px 45px, rgba(232, 121, 249, 0.2), transparent),
        radial-gradient(1px 1px at 15px 75px, rgba(79, 70, 229, 0.18), transparent),
        radial-gradient(1px 1px at 145px 25px, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(1px 1px at 65px 85px, rgba(0, 212, 230, 0.15), transparent),
        radial-gradient(1px 1px at 105px 35px, rgba(232, 121, 249, 0.15), transparent);
      background-repeat: repeat;
      background-size: 100px 60px;
      animation: sparkle-reverse 10s linear infinite;
    }

    @keyframes sparkle-reverse {
      0% { transform: translateY(-100px) rotate(0deg); }
      100% { transform: translateY(-260px) rotate(360deg); }
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    /* Hero Text Section */
    .hero-text-section {
      animation: slideInFromLeft 1s ease-out;
    }

    /* Hero Actions */
    .hero-actions {
      display: flex;
      gap: 16px;
      margin: 32px 0;
      flex-wrap: wrap;
      justify-content: center;
    }

    .hero-btn {
      padding: 14px 28px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 140px;
      justify-content: center;
    }

    /* Nova Buttons Base */
    .hero-btn.hero-btn-nova {
      --nova-radius: 18px;
      --nova-fx-shadow: 0 4px 16px -4px rgba(0,212,230,.35), 0 6px 18px -6px rgba(179,77,255,.32), 0 2px 5px -2px rgba(255,63,181,.25);
      border-radius: var(--nova-radius) !important;
      position: relative;
      font-weight: 600;
      line-height: 1.1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0.95em 2.4em !important;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      border: none;
      background: transparent;
      color: #fff;
      box-shadow: none;
      transition: transform .55s cubic-bezier(.16,.8,.24,1), box-shadow .55s ease, background .55s ease, color .4s ease;
      will-change: transform, box-shadow;
      isolation: isolate;
      overflow: hidden;
    }
    .hero-btn.hero-btn-nova:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(255,255,255,.9), 0 0 0 6px rgba(0,212,230,.55); }

    /* Primary Filled */
    .hero-btn.hero-btn-nova-primary {
      --gradient-angle: 135deg;
      --g1: #00D4E6;
      --g2: #b34dff;
      --g3: #ff3fb5;
      position: relative;
      background: linear-gradient(var(--gradient-angle), var(--g1) 0%, var(--g2) 45%, var(--g3) 100%);
      color: #fff;
      border: none;
      box-shadow: var(--nova-fx-shadow);
      animation: novaPulse 6s ease-in-out infinite;
    }
    .hero-btn.hero-btn-nova-primary:before,
    .hero-btn.hero-btn-nova-primary:after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
    }
    /* Soft moving light */
    .hero-btn.hero-btn-nova-primary:before {
      background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.55) 50%, rgba(255,255,255,0) 100%);
      width: 160%;
      left: -30%;
      mix-blend-mode: overlay;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity .6s ease;
    }
    .hero-btn.hero-btn-nova-primary:hover:before { opacity: .55; animation: novaSheen 2.4s ease-in-out forwards; }
    /* Subtle ambient glow */
    .hero-btn.hero-btn-nova-primary:after {
      background: radial-gradient(circle at 30% 35%, rgba(255,255,255,.55), transparent 70%);
      filter: blur(18px) saturate(1.2);
      opacity: .35;
      z-index: -1;
      transition: opacity .6s ease;
    }
    .hero-btn.hero-btn-nova-primary:hover:after { opacity: .55; }
    .hero-btn.hero-btn-nova-primary:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 10px 34px -8px rgba(0,212,230,.55), 0 14px 38px -10px rgba(179,77,255,.45), 0 6px 14px -4px rgba(255,63,181,.4);
    }
    .hero-btn.hero-btn-nova-primary:active {
      transform: translateY(0) scale(.96);
      transition: transform .2s ease;
      box-shadow: 0 4px 14px -4px rgba(0,212,230,.5), 0 6px 18px -10px rgba(179,77,255,.4);
    }
    .hero-btn.hero-btn-nova .hero-btn-label { position: relative; z-index: 2; }
    .hero-btn.hero-btn-nova .hero-btn-icon-wrapper {
      position: relative;
      width: 34px; height: 34px;
      display: inline-flex; align-items: center; justify-content: center;
      border-radius: 11px;
      background: rgba(255,255,255,.2);
      backdrop-filter: blur(5px) brightness(1.15);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.45), 0 4px 10px -2px rgba(0,0,0,.25);
      margin-left: 6px;
      transition: transform .6s ease, background .6s ease;
    }
    .hero-btn.hero-btn-nova:hover .hero-btn-icon-wrapper { transform: translateX(2px) rotate(18deg) scale(1.08); background: rgba(255,255,255,.28); }
    .hero-btn.hero-btn-nova .hero-btn-icon { stroke-width: 2.2; }

    /* Outline Variant */
    .hero-btn.hero-btn-nova-outline {
      --outline-bg: rgba(255,255,255,0.08);
      background: var(--outline-bg);
      color: #00abf6; /* unified base color */
      box-shadow: 0 2px 10px -2px rgba(0,212,230,.25), 0 4px 18px -6px rgba(79,70,229,.25);
      border: 1.5px solid rgba(0,212,230,.5);
      backdrop-filter: blur(12px) saturate(1.4);
    }
    /* Outline variant icon wrapper should mirror primary variant for consistent sizing */
    .hero-btn.hero-btn-nova-outline .hero-btn-icon-wrapper {
      background: rgba(0,212,230,.12);
      box-shadow: inset 0 0 0 1px rgba(0,212,230,.35), 0 4px 10px -2px rgba(0,0,0,.25);
    }
    .hero-btn.hero-btn-nova-outline:before { display:none; }
    .hero-btn.hero-btn-nova-outline:hover {
      color: #00d4e6; /* brighter hover */
      transform: translateY(-4px) scale(1.02);
      border-color: rgba(0,212,230,.85);
      background: linear-gradient(135deg, rgba(0,212,230,0.14), rgba(179,77,255,0.14) 55%, rgba(255,63,181,0.14));
      box-shadow: 0 8px 28px -10px rgba(0,212,230,.4), 0 10px 32px -12px rgba(79,70,229,.35);
    }
    .hero-btn.hero-btn-nova-outline:active { transform: translateY(0) scale(.96); }

    /* Animations */
    @keyframes novaPulse { 0%,100% { transform: translateY(0) scale(1);} 50% { transform: translateY(-2px) scale(1.015);} }
    @keyframes novaSheen { 0% { transform: translateX(-60%); } 55% { transform: translateX(60%); } 100% { transform: translateX(60%); } }
    @media (prefers-reduced-motion: reduce) {
      .hero-btn.hero-btn-nova { animation: none; }
      .hero-btn.hero-btn-nova-primary:before { display: none; }
      .hero-btn.hero-btn-nova:hover { transform: translateY(-3px) scale(1.015); }
    }

    .hero-btn.btn-outline-primary {
      background: rgba(139, 92, 246, 0.05);
      border: 1.5px solid rgba(139, 92, 246, 0.3);
      color: var(--qik-purple);
      backdrop-filter: blur(10px);
    }

    .hero-btn.btn-outline-primary:hover {
      background: rgba(139, 92, 246, 0.1);
      border-color: var(--qik-purple);
      color: var(--qik-purple);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 92, 246, 0.2);
    }

    @keyframes slideInFromLeft {
      0% { opacity: 0; transform: translateX(-50px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    /* Hero Badge */
  .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 212, 230, 0.2);
      border-radius: 50px;
      padding: 10px 24px;
      margin-bottom: 35px;
      font-size: 0.9rem;
      font-weight: 600;
  color: #00abf6; /* unified with Compliance section heading */
      animation: glow-pulse 3s ease-in-out infinite;
      box-shadow: 0 4px 20px rgba(0, 212, 230, 0.15);
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 230, 0.2); }
      50% { box-shadow: 0 0 30px rgba(0, 212, 230, 0.4); }
    }

    .badge-icon {
      font-size: 1.1rem;
      animation: rotate 4s linear infinite;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Enhanced Typography for Background Animation */
    .hero-title {
      font-size: 4.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      text-shadow: 0 4px 20px rgba(255, 255, 255, 0.8);
    }

    .title-main {
      background: linear-gradient(135deg, #1E293B 0%, #475569 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
    }

    .title-highlight {
      background: linear-gradient(135deg, #00D4E6 0%, #b34dff 50%, #ff3fb5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 40px rgba(0, 212, 230, 0.6);
      animation: text-glow 2s ease-in-out infinite alternate;
      filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
    }

    @keyframes text-glow {
      0% { filter: brightness(1) drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3)); }
      100% { filter: brightness(1.2) drop-shadow(0 4px 8px rgba(255, 255, 255, 0.5)); }
    }

    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--text-secondary);
      margin-bottom: 30px;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 2px 8px rgba(255, 255, 255, 0.8);
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.95;
      text-shadow: 0 1px 4px rgba(255, 255, 255, 0.6);
    }

    /* Hero Stats with Enhanced Visibility */
    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-bottom: 50px;
      padding: 25px 35px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px rgba(0, 212, 230, 0.1);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    .stat-number {
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .stat-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, transparent, rgba(0, 212, 230, 0.3), transparent);
    }

    /* Enhanced Buttons with Better Visibility */
    .hero-cta {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-lg {
      padding: 16px 32px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }

    .btn-gradient {
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      border: none;
      color: white;
      box-shadow: 0 10px 30px rgba(0, 212, 230, 0.4);
      position: relative;
    }

    .btn-gradient:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0, 212, 230, 0.5);
      color: white;
    }

    .btn-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .btn-gradient:hover .btn-shine {
      left: 100%;
    }

    .btn-outline-primary {
      background: rgba(0, 212, 230, 0.05);
      border: 2px solid rgba(0, 212, 230, 0.3);
      color: var(--qik-cyan);
      backdrop-filter: blur(10px);
    }

    .btn-outline-primary:hover {
      background: rgba(0, 212, 230, 0.1);
      border-color: var(--qik-cyan);
      color: var(--qik-cyan);
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 212, 230, 0.2);
    }

    /* AI Network Animation as Full Background */
    .ai-network-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
      overflow: visible;
      background: transparent;
      backdrop-filter: none;
      border: none;
      box-shadow: none;
      animation: none;
    }

    @keyframes container-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .ai-network-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 0;
    }

    .ai-network-overlay {
      display: none;
    }

    .ai-glow-effect {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      background: radial-gradient(circle, 
        rgba(0, 212, 230, 0.04) 0%, 
        rgba(79, 70, 229, 0.03) 40%,
        rgba(232, 121, 249, 0.02) 60%,
        transparent 80%);
      border-radius: 50%;
      animation: pulse-glow 12s ease-in-out infinite;
      pointer-events: none;
    }

    @keyframes pulse-glow {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(1); 
        opacity: 0.3; 
      }
      50% { 
        transform: translate(-50%, -50%) scale(1.3); 
        opacity: 0.6; 
      }
    }

    .ai-network-label {
      display: none;
    }

    /* Business Solutions Section */
    .business-solutions-section {
      padding: 100px 0;
      background: linear-gradient(180deg, 
        rgba(248, 250, 252, 0.5) 0%, 
        var(--bg-surface-elevated) 100%);
      position: relative;
    }

    .business-solutions-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(0, 212, 230, 0.4) 30%,
        rgba(79, 70, 229, 0.4) 70%,
        transparent 100%);
    }

    .section-header {
      margin-bottom: 80px;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      background: linear-gradient(135deg, #00D4E6 0%, #4F46E5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 25px;
    }

    .section-subtitle {
      font-size: 1.3rem;
      color: var(--text-secondary);
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
  /* Unified hero-actions stacking + full-width centering */
  .hero-actions { flex-direction: column; align-items: stretch; gap: 14px; }
  .hero-actions .hero-btn.hero-btn-nova { width: 100%; max-width: 100%; padding: 0.95em 1.6em !important; }
  .hero-actions .hero-btn.hero-btn-nova .hero-btn-icon-wrapper { width: 36px; height: 36px; }
  .hero-actions .hero-btn.hero-btn-nova-primary,
  .hero-actions .hero-btn.hero-btn-nova-outline { min-height: 60px; }
  .hero-actions .hero-btn.hero-btn-nova .hero-btn-label { font-size: 1.05rem; }
      .desktop-nav {
        display: none !important;
      }
      
      .mobile-menu-toggle {
        display: block !important;
      }
      
      .mobile-nav {
        display: block !important;
      }
      
      .header-contact {
        display: none !important;
      }
      
      .hero-enhanced {
        min-height: 100vh;
        padding: 120px 0 60px;
      }
      
      .hero-title {
        font-size: 2.8rem;
      }
      
      .hero-subtitle {
        font-size: 1.3rem;
      }
      
      .hero-description {
        font-size: 1rem;
        max-width: 90%;
      }
      
      .hero-stats {
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px 25px;
        margin-bottom: 40px;
      }
      
      .hero-animation-background {
        opacity: 0.4;
      }
      
      .hero-cta {
        flex-direction: column;
        width: 100%;
        gap: 15px;
      }
      
      .btn-lg {
        width: 100%;
        justify-content: center;
      }
      
      .section-title {
        font-size: 2.2rem;
      }
    }

    @media (min-width: 1200px) {
      .header-contact {
        display: block;
      }
    }

    /* Original Styles */
    .boxus { 
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
    }
    .bounce-1us {
        animation-name: bounce-1us;
        animation-timing-function: linear;
    }
    @keyframes bounce-1us {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }

	#products img {
    text-align: center;
    margin: 25px 0;
}
	#products a {font-size:18px;color: #001e4b;  text-align: center;
    font-weight: 600;}#products a:hover{color:#00abf6;}

.feature-item{  -webkit-transition: all 0.25s linear;
  transition: all 0.25s linear;}
.feature-item:hover { 
  -webkit-transform: translateY(-10px);
          transform: translateY(-10px);
}

.business-product {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  min-height: 200px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.business-product:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  border-color: #00abf6;
}

.business-product img {
  width: 100%;
  height: auto;
  margin: 0 auto 15px;
  aspect-ratio: 16/9;
  object-fit: contain;
}

.business-product strong {
  display: block;
  color: #001e4b;
  font-size: 16px;
  margin-bottom: 10px;
}

 .us-contact {
    font-size: 14px;
    line-height: 28px;color: #001e4b;
}a.btn-primary {
    background: #2f42fc;
    border-color: #2f42fc;
    border-radius: 0;
    text-align: left;padding: 15px 40px;font-size: 16px;font-weight:600;
}.btn-primary{border-radius: 10px;}p{color: #001e4b;}body {
    color: #001e4b;
}.container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 96%;
}

.sticky-column {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  align-self: flex-start;
}
`,
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;
